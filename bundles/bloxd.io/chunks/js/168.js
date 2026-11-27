export const id = 168;
export const ids = [168];
export const modules = {
  7662: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wa,
      h: () => gQ
    });
    var Zr = {};
    Qr.r(Zr), Qr.d(Zr, {
      c: () => ZZ,
      f: () => jZ,
      d: () => aZ,
      h: () => JQ,
      i: () => bQ,
      k: () => lZ,
      m: () => sQ,
      o: () => HZ,
      q: () => yZ,
      s: () => PZ,
      w: () => DQ,
      y: () => TZ,
      A: () => LZ,
      D: () => XZ,
      H: () => dQ,
      G: () => SZ,
      I: () => OZ,
      L: () => vZ
    });
    var Wr = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function ar(rr) {
      return rr && rr.__esModule && Object.prototype.hasOwnProperty.call(rr, "default") ? rr.default : rr
    }
    var jr = {
      exports: {}
    };
    ! function(rr) {
      var Sr = Object.prototype.hasOwnProperty,
        Qr = "~";

      function Zr() {}

      function Wr(rr, Sr, Qr) {
        this.Wx = rr, this.context = Sr, this.once = Qr || !1
      }

      function ar(rr, Sr, Zr, ar, jr) {
        if ("function" !== typeof Zr) throw new TypeError("The listener must be a function");
        var Ir = new Wr(Zr, ar || rr, jr),
          fr = Qr ? Qr + Sr : Sr;
        return rr._events[fr] ? rr._events[fr].Wx ? rr._events[fr] = [rr._events[fr], Ir] : rr._events[fr].push(Ir) : (rr._events[fr] = Ir, rr._eventsCount++), rr
      }

      function jr(rr, Sr) {
        0 === --rr._eventsCount ? rr._events = new Zr : delete rr._events[Sr]
      }

      function Ir() {
        this._events = new Zr, this._eventsCount = 0
      }
      Object.create && (Zr.prototype = Object.create(null), (new Zr).__proto__ || (Qr = !1)), Ir.prototype.eventNames = function() {
        var rr, Zr, Wr = [];
        if (0 === this._eventsCount) return Wr;
        for (Zr in rr = this._events) Sr.call(rr, Zr) && Wr.push(Qr ? Zr.slice(1) : Zr);
        return Object.getOwnPropertySymbols ? Wr.concat(Object.getOwnPropertySymbols(rr)) : Wr
      }, Ir.prototype.listeners = function(rr) {
        var Sr = Qr ? Qr + rr : rr,
          Zr = this._events[Sr];
        if (!Zr) return [];
        if (Zr.Wx) return [Zr.Wx];
        for (var Wr = 0, ar = Zr.length, jr = new Array(ar); Wr < ar; Wr++) jr[Wr] = Zr[Wr].Wx;
        return jr
      }, Ir.prototype.listenerCount = function(rr) {
        var Sr = Qr ? Qr + rr : rr,
          Zr = this._events[Sr];
        return Zr ? Zr.Wx ? 1 : Zr.length : 0
      }, Ir.prototype.emit = function(rr, Sr, Zr, Wr, ar, jr) {
        var Ir = Qr ? Qr + rr : rr;
        if (!this._events[Ir]) return !1;
        var fr, Er, pr = this._events[Ir],
          xr = arguments.length;
        if (pr.Wx) {
          switch (pr.once && this.removeListener(rr, pr.Wx, void 0, !0), xr) {
            case 1:
              return pr.Wx.call(pr.context), !0;
            case 2:
              return pr.Wx.call(pr.context, Sr), !0;
            case 3:
              return pr.Wx.call(pr.context, Sr, Zr), !0;
            case 4:
              return pr.Wx.call(pr.context, Sr, Zr, Wr), !0;
            case 5:
              return pr.Wx.call(pr.context, Sr, Zr, Wr, ar), !0;
            case 6:
              return pr.Wx.call(pr.context, Sr, Zr, Wr, ar, jr), !0
          }
          for (Er = 1, fr = new Array(xr - 1); Er < xr; Er++) fr[Er - 1] = arguments[Er];
          pr.Wx.apply(pr.context, fr)
        } else {
          var mr, Nr = pr.length;
          for (Er = 0; Er < Nr; Er++) switch (pr[Er].once && this.removeListener(rr, pr[Er].Wx, void 0, !0), xr) {
            case 1:
              pr[Er].Wx.call(pr[Er].context);
              break;
            case 2:
              pr[Er].Wx.call(pr[Er].context, Sr);
              break;
            case 3:
              pr[Er].Wx.call(pr[Er].context, Sr, Zr);
              break;
            case 4:
              pr[Er].Wx.call(pr[Er].context, Sr, Zr, Wr);
              break;
            default:
              if (!fr)
                for (mr = 1, fr = new Array(xr - 1); mr < xr; mr++) fr[mr - 1] = arguments[mr];
              pr[Er].Wx.apply(pr[Er].context, fr)
          }
        }
        return !0
      }, Ir.prototype.on = function(rr, Sr, Qr) {
        return ar(this, rr, Sr, Qr, !1)
      }, Ir.prototype.once = function(rr, Sr, Qr) {
        return ar(this, rr, Sr, Qr, !0)
      }, Ir.prototype.removeListener = function(rr, Sr, Zr, Wr) {
        var ar = Qr ? Qr + rr : rr;
        if (!this._events[ar]) return this;
        if (!Sr) return jr(this, ar), this;
        var Ir = this._events[ar];
        if (Ir.Wx) Ir.Wx !== Sr || Wr && !Ir.once || Zr && Ir.context !== Zr || jr(this, ar);
        else {
          for (var fr = 0, Er = [], pr = Ir.length; fr < pr; fr++)(Ir[fr].Wx !== Sr || Wr && !Ir[fr].once || Zr && Ir[fr].context !== Zr) && Er.push(Ir[fr]);
          Er.length ? this._events[ar] = 1 === Er.length ? Er[0] : Er : jr(this, ar)
        }
        return this
      }, Ir.prototype.hY = function(rr) {
        var Sr;
        return rr ? (Sr = Qr ? Qr + rr : rr, this._events[Sr] && jr(this, Sr)) : (this._events = new Zr, this._eventsCount = 0), this
      }, Ir.prototype.off = Ir.prototype.removeListener, Ir.prototype.addListener = Ir.prototype.on, Ir.prefixed = Qr, Ir.EventEmitter = Ir, rr.exports = Ir
    }(jr);
    var Ir, fr, Er = ar(jr.exports);
    ! function(rr) {
      rr.assertEqual = rr => rr, rr.assertIs = function(rr) {}, rr.assertNever = function(rr) {
        throw new Error
      }, rr.arrayToEnum = rr => {
        const Sr = {};
        for (const Qr of rr) Sr[Qr] = Qr;
        return Sr
      }, rr.getValidEnumValues = Sr => {
        const Qr = rr.objectKeys(Sr).filter((rr => "number" !== typeof Sr[Sr[rr]])),
          Zr = {};
        for (const rr of Qr) Zr[rr] = Sr[rr];
        return rr.objectValues(Zr)
      }, rr.objectValues = Sr => rr.objectKeys(Sr).map((function(rr) {
        return Sr[rr]
      })), rr.objectKeys = "function" === typeof Object.keys ? rr => Object.keys(rr) : rr => {
        const Sr = [];
        for (const Qr in rr) Object.prototype.hasOwnProperty.call(rr, Qr) && Sr.push(Qr);
        return Sr
      }, rr.find = (rr, Sr) => {
        for (const Qr of rr)
          if (Sr(Qr)) return Qr
      }, rr.isInteger = "function" === typeof Number.isInteger ? rr => Number.isInteger(rr) : rr => "number" === typeof rr && isFinite(rr) && Math.floor(rr) === rr, rr.joinValues = function(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return rr.map((rr => "string" === typeof rr ? `'${rr}'` : rr)).join(Sr)
      }, rr.jsonStringifyReplacer = (rr, Sr) => "bigint" === typeof Sr ? Sr.toString() : Sr
    }(Ir || (Ir = {})),
    function(rr) {
      rr.mergeShapes = (rr, Sr) => ({
        ...rr,
        ...Sr
      })
    }(fr || (fr = {}));
    const pr = Ir.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      xr = rr => {
        switch (typeof rr) {
          case "undefined":
            return pr.undefined;
          case "string":
            return pr.string;
          case "number":
            return isNaN(rr) ? pr.nan : pr.number;
          case "boolean":
            return pr.boolean;
          case "function":
            return pr.function;
          case "bigint":
            return pr.bigint;
          case "symbol":
            return pr.symbol;
          case "object":
            return Array.isArray(rr) ? pr.array : null === rr ? pr.null : rr.then && "function" === typeof rr.then && rr.catch && "function" === typeof rr.catch ? pr.promise : "undefined" !== typeof Map && rr instanceof Map ? pr.map : "undefined" !== typeof Set && rr instanceof Set ? pr.set : "undefined" !== typeof Date && rr instanceof Date ? pr.date : pr.object;
          default:
            return pr.unknown
        }
      },
      mr = Ir.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class Nr extends Error {
      constructor(rr) {
        var Sr;
        super(), Sr = this, this.issues = [], this.addIssue = rr => {
          this.issues = [...this.issues, rr]
        }, this.addIssues = function() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          Sr.issues = [...Sr.issues, ...rr]
        };
        const Qr = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, Qr) : this.__proto__ = Qr, this.name = "ZodError", this.issues = rr
      }
      get errors() {
        return this.issues
      }
      format(rr) {
        const Sr = rr || function(rr) {
            return rr.message
          },
          Qr = {
            _errors: []
          },
          Zr = rr => {
            for (const Wr of rr.issues)
              if ("invalid_union" === Wr.code) Wr.unionErrors.map(Zr);
              else if ("invalid_return_type" === Wr.code) Zr(Wr.returnTypeError);
            else if ("invalid_arguments" === Wr.code) Zr(Wr.argumentsError);
            else if (0 === Wr.path.length) Qr._errors.push(Sr(Wr));
            else {
              let rr = Qr,
                Zr = 0;
              for (; Zr < Wr.path.length;) {
                const Qr = Wr.path[Zr];
                Zr === Wr.path.length - 1 ? (rr[Qr] = rr[Qr] || {
                  _errors: []
                }, rr[Qr]._errors.push(Sr(Wr))) : rr[Qr] = rr[Qr] || {
                  _errors: []
                }, rr = rr[Qr], Zr++
              }
            }
          };
        return Zr(this), Qr
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, Ir.jsonStringifyReplacer, 2)
      }
      get nx() {
        return 0 === this.issues.length
      }
      flatten() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rr => rr.message;
        const Sr = {},
          Qr = [];
        for (const Zr of this.issues) Zr.path.length > 0 ? (Sr[Zr.path[0]] = Sr[Zr.path[0]] || [], Sr[Zr.path[0]].push(rr(Zr))) : Qr.push(rr(Zr));
        return {
          formErrors: Qr,
          fieldErrors: Sr
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    Nr.create = rr => new Nr(rr);
    const Ur = (rr, Sr) => {
      let Qr;
      switch (rr.code) {
        case mr.invalid_type:
          Qr = rr.received === pr.undefined ? "Required" : `Expected ${rr.expected}, received ${rr.received}`;
          break;
        case mr.invalid_literal:
          Qr = `Invalid literal value, expected ${JSON.stringify(rr.expected,Ir.jsonStringifyReplacer)}`;
          break;
        case mr.unrecognized_keys:
          Qr = `Unrecognized key(s) in object: ${Ir.joinValues(rr.keys,", ")}`;
          break;
        case mr.invalid_union:
          Qr = "Invalid input";
          break;
        case mr.invalid_union_discriminator:
          Qr = `Invalid discriminator value. Expected ${Ir.joinValues(rr.options)}`;
          break;
        case mr.invalid_enum_value:
          Qr = `Invalid enum value. Expected ${Ir.joinValues(rr.options)}, received '${rr.received}'`;
          break;
        case mr.invalid_arguments:
          Qr = "Invalid function arguments";
          break;
        case mr.invalid_return_type:
          Qr = "Invalid function return type";
          break;
        case mr.invalid_date:
          Qr = "Invalid date";
          break;
        case mr.invalid_string:
          "object" === typeof rr.validation ? "includes" in rr.validation ? (Qr = `Invalid input: must include "${rr.validation.includes}"`, "number" === typeof rr.validation.position && (Qr = `${Qr} at one or more positions greater than or equal to ${rr.validation.position}`)) : "startsWith" in rr.validation ? Qr = `Invalid input: must start with "${rr.validation.startsWith}"` : "endsWith" in rr.validation ? Qr = `Invalid input: must end with "${rr.validation.endsWith}"` : Ir.assertNever(rr.validation) : Qr = "regex" !== rr.validation ? `Invalid ${rr.validation}` : "Invalid";
          break;
        case mr.too_small:
          Qr = "array" === rr.type ? `Array must contain ${rr.exact?"exactly":rr.inclusive?"at least":"more than"} ${rr.minimum} element(s)` : "string" === rr.type ? `String must contain ${rr.exact?"exactly":rr.inclusive?"at least":"over"} ${rr.minimum} character(s)` : "number" === rr.type ? `Number must be ${rr.exact?"exactly equal to ":rr.inclusive?"greater than or equal to ":"greater than "}${rr.minimum}` : "date" === rr.type ? `Date must be ${rr.exact?"exactly equal to ":rr.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(rr.minimum))}` : "Invalid input";
          break;
        case mr.too_big:
          Qr = "array" === rr.type ? `Array must contain ${rr.exact?"exactly":rr.inclusive?"at most":"less than"} ${rr.maximum} element(s)` : "string" === rr.type ? `String must contain ${rr.exact?"exactly":rr.inclusive?"at most":"under"} ${rr.maximum} character(s)` : "number" === rr.type ? `Number must be ${rr.exact?"exactly":rr.inclusive?"less than or equal to":"less than"} ${rr.maximum}` : "bigint" === rr.type ? `BigInt must be ${rr.exact?"exactly":rr.inclusive?"less than or equal to":"less than"} ${rr.maximum}` : "date" === rr.type ? `Date must be ${rr.exact?"exactly":rr.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(rr.maximum))}` : "Invalid input";
          break;
        case mr.custom:
          Qr = "Invalid input";
          break;
        case mr.invalid_intersection_types:
          Qr = "Intersection results could not be merged";
          break;
        case mr.not_multiple_of:
          Qr = `Number must be a multiple of ${rr.multipleOf}`;
          break;
        case mr.not_finite:
          Qr = "Number must be finite";
          break;
        default:
          Qr = Sr.defaultError, Ir.assertNever(rr)
      }
      return {
        message: Qr
      }
    };
    let tr = Ur;

    function hr() {
      return tr
    }
    const zr = rr => {
      const {
        data: Sr,
        path: Qr,
        errorMaps: Zr,
        issueData: Wr
      } = rr, ar = [...Qr, ...Wr.path || []], jr = {
        ...Wr,
        path: ar
      };
      let Ir = "";
      const fr = Zr.filter((rr => !!rr)).slice().reverse();
      for (const Er of fr) Ir = Er(jr, {
        data: Sr,
        defaultError: Ir
      }).message;
      return {
        ...Wr,
        path: ar,
        message: Wr.message || Ir
      }
    };

    function Yr(rr, Sr) {
      const Qr = zr({
        issueData: Sr,
        data: rr.data,
        path: rr.path,
        errorMaps: [rr.common.contextualErrorMap, rr.schemaErrorMap, hr(), Ur].filter((rr => !!rr))
      });
      rr.common.issues.push(Qr)
    }
    class nr {
      constructor() {
        this.value = "valid"
      }
      cU() {
        "valid" === this.value && (this.value = "cU")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(rr, Sr) {
        const Qr = [];
        for (const Zr of Sr) {
          if ("aborted" === Zr.status) return er;
          "cU" === Zr.status && rr.cU(), Qr.push(Zr.value)
        }
        return {
          status: rr.value,
          value: Qr
        }
      }
      static async mergeObjectAsync(rr, Sr) {
        const Qr = [];
        for (const Zr of Sr) Qr.push({
          key: await Zr.key,
          value: await Zr.value
        });
        return nr.mergeObjectSync(rr, Qr)
      }
      static mergeObjectSync(rr, Sr) {
        const Qr = {};
        for (const Zr of Sr) {
          const {
            key: Sr,
            value: Wr
          } = Zr;
          if ("aborted" === Sr.status) return er;
          if ("aborted" === Wr.status) return er;
          "cU" === Sr.status && rr.cU(), "cU" === Wr.status && rr.cU(), "__proto__" === Sr.value || "undefined" === typeof Wr.value && !Zr.alwaysSet || (Qr[Sr.value] = Wr.value)
        }
        return {
          status: rr.value,
          value: Qr
        }
      }
    }
    const er = Object.freeze({
        status: "aborted"
      }),
      Kr = rr => ({
        status: "cU",
        value: rr
      }),
      yr = rr => ({
        status: "valid",
        value: rr
      }),
      Br = rr => "aborted" === rr.status,
      Tr = rr => "cU" === rr.status,
      vr = rr => "valid" === rr.status,
      Or = rr => "undefined" !== typeof Promise && rr instanceof Promise;
    var Lr;
    ! function(rr) {
      rr.errToObj = rr => "string" === typeof rr ? {
        message: rr
      } : rr || {}, rr.toString = rr => "string" === typeof rr ? rr : null === rr || void 0 === rr ? void 0 : rr.message
    }(Lr || (Lr = {}));
    class lr {
      constructor(rr, Sr, Qr, Zr) {
        this._cachedPath = [], this.parent = rr, this.data = Sr, this._path = Qr, this._key = Zr
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const Xr = (rr, Sr) => {
      if (vr(Sr)) return {
        success: !0,
        data: Sr.value
      };
      if (!rr.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const Sr = new Nr(rr.common.issues);
          return this._error = Sr, this._error
        }
      }
    };

    function Pr(rr) {
      if (!rr) return {};
      const {
        errorMap: Sr,
        invalid_type_error: Qr,
        required_error: Zr,
        description: Wr
      } = rr;
      if (Sr && (Qr || Zr)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (Sr) return {
        errorMap: Sr,
        description: Wr
      };
      return {
        errorMap: (rr, Sr) => "invalid_type" !== rr.code ? {
          message: Sr.defaultError
        } : "undefined" === typeof Sr.data ? {
          message: null !== Zr && void 0 !== Zr ? Zr : Sr.defaultError
        } : {
          message: null !== Qr && void 0 !== Qr ? Qr : Sr.defaultError
        },
        description: Wr
      }
    }
    class Hr {
      constructor(rr) {
        this.spa = this.safeParseAsync, this._def = rr, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(rr) {
        return xr(rr.data)
      }
      _getOrReturnCtx(rr, Sr) {
        return Sr || {
          common: rr.parent.common,
          data: rr.data,
          parsedType: xr(rr.data),
          schemaErrorMap: this._def.errorMap,
          path: rr.path,
          parent: rr.parent
        }
      }
      _processInputParams(rr) {
        return {
          status: new nr,
          ctx: {
            common: rr.parent.common,
            data: rr.data,
            parsedType: xr(rr.data),
            schemaErrorMap: this._def.errorMap,
            path: rr.path,
            parent: rr.parent
          }
        }
      }
      _parseSync(rr) {
        const Sr = this._parse(rr);
        if (Or(Sr)) throw new Error("Synchronous parse encountered promise.");
        return Sr
      }
      _parseAsync(rr) {
        const Sr = this._parse(rr);
        return Promise.resolve(Sr)
      }
      parse(rr, Sr) {
        const Qr = this.safeParse(rr, Sr);
        if (Qr.success) return Qr.data;
        throw Qr.error
      }
      safeParse(rr, Sr) {
        var Qr;
        const Zr = {
            common: {
              issues: [],
              async: null !== (Qr = null === Sr || void 0 === Sr ? void 0 : Sr.async) && void 0 !== Qr && Qr,
              contextualErrorMap: null === Sr || void 0 === Sr ? void 0 : Sr.errorMap
            },
            path: (null === Sr || void 0 === Sr ? void 0 : Sr.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: rr,
            parsedType: xr(rr)
          },
          Wr = this._parseSync({
            data: rr,
            path: Zr.path,
            parent: Zr
          });
        return Xr(Zr, Wr)
      }
      async parseAsync(rr, Sr) {
        const Qr = await this.safeParseAsync(rr, Sr);
        if (Qr.success) return Qr.data;
        throw Qr.error
      }
      async safeParseAsync(rr, Sr) {
        const Qr = {
            common: {
              issues: [],
              contextualErrorMap: null === Sr || void 0 === Sr ? void 0 : Sr.errorMap,
              async: !0
            },
            path: (null === Sr || void 0 === Sr ? void 0 : Sr.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: rr,
            parsedType: xr(rr)
          },
          Zr = this._parse({
            data: rr,
            path: Qr.path,
            parent: Qr
          }),
          Wr = await (Or(Zr) ? Zr : Promise.resolve(Zr));
        return Xr(Qr, Wr)
      }
      refine(rr, Sr) {
        const Qr = rr => "string" === typeof Sr || "undefined" === typeof Sr ? {
          message: Sr
        } : "function" === typeof Sr ? Sr(rr) : Sr;
        return this._refinement(((Sr, Zr) => {
          const Wr = rr(Sr),
            ar = () => Zr.addIssue({
              code: mr.custom,
              ...Qr(Sr)
            });
          return "undefined" !== typeof Promise && Wr instanceof Promise ? Wr.then((rr => !!rr || (ar(), !1))) : !!Wr || (ar(), !1)
        }))
      }
      refinement(rr, Sr) {
        return this._refinement(((Qr, Zr) => !!rr(Qr) || (Zr.addIssue("function" === typeof Sr ? Sr(Qr, Zr) : Sr), !1)))
      }
      _refinement(rr) {
        return new eS({
          schema: this,
          typeName: qS.ZodEffects,
          effect: {
            type: "refinement",
            refinement: rr
          }
        })
      }
      superRefine(rr) {
        return this._refinement(rr)
      }
      optional() {
        return KS.create(this, this._def)
      }
      nullable() {
        return yS.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return SS.create(this, this._def)
      }
      promise() {
        return nS.create(this, this._def)
      }
      or(rr) {
        return WS.create([this, rr], this._def)
      }
      and(rr) {
        return fS.create(this, rr, this._def)
      }
      transform(rr) {
        return new eS({
          ...Pr(this._def),
          schema: this,
          typeName: qS.ZodEffects,
          effect: {
            type: "transform",
            transform: rr
          }
        })
      }
      default (rr) {
        const Sr = "function" === typeof rr ? rr : () => rr;
        return new BS({
          ...Pr(this._def),
          innerType: this,
          defaultValue: Sr,
          typeName: qS.ZodDefault
        })
      }
      brand() {
        return new LS({
          typeName: qS.ZodBranded,
          type: this,
          ...Pr(this._def)
        })
      } catch (rr) {
        const Sr = "function" === typeof rr ? rr : () => rr;
        return new TS({
          ...Pr(this._def),
          innerType: this,
          catchValue: Sr,
          typeName: qS.ZodCatch
        })
      }
      describe(rr) {
        return new(0, this.constructor)({
          ...this._def,
          description: rr
        })
      }
      pipe(rr) {
        return lS.create(this, rr)
      }
      readonly() {
        return XS.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const qr = /^c[^\s-]{8,}$/i,
      Rr = /^[a-z][a-z0-9]*$/,
      gr = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      Cr = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      Mr = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let Gr;
    const kr = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      Ar = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class Vr extends Hr {
      _parse(rr) {
        this._def.coerce && (rr.data = String(rr.data));
        if (this._getType(rr) !== pr.string) {
          const Sr = this._getOrReturnCtx(rr);
          return Yr(Sr, {
            code: mr.invalid_type,
            expected: pr.string,
            received: Sr.parsedType
          }), er
        }
        const Sr = new nr;
        let Qr;
        for (const fr of this._def.checks)
          if ("min" === fr.kind) rr.data.length < fr.value && (Qr = this._getOrReturnCtx(rr, Qr), Yr(Qr, {
            code: mr.too_small,
            minimum: fr.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: fr.message
          }), Sr.cU());
          else if ("max" === fr.kind) rr.data.length > fr.value && (Qr = this._getOrReturnCtx(rr, Qr), Yr(Qr, {
          code: mr.too_big,
          maximum: fr.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: fr.message
        }), Sr.cU());
        else if ("length" === fr.kind) {
          const Zr = rr.data.length > fr.value,
            Wr = rr.data.length < fr.value;
          (Zr || Wr) && (Qr = this._getOrReturnCtx(rr, Qr), Zr ? Yr(Qr, {
            code: mr.too_big,
            maximum: fr.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: fr.message
          }) : Wr && Yr(Qr, {
            code: mr.too_small,
            minimum: fr.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: fr.message
          }), Sr.cU())
        } else if ("email" === fr.kind) Mr.test(rr.data) || (Qr = this._getOrReturnCtx(rr, Qr), Yr(Qr, {
          validation: "email",
          code: mr.invalid_string,
          message: fr.message
        }), Sr.cU());
        else if ("emoji" === fr.kind) Gr || (Gr = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Gr.test(rr.data) || (Qr = this._getOrReturnCtx(rr, Qr), Yr(Qr, {
          validation: "emoji",
          code: mr.invalid_string,
          message: fr.message
        }), Sr.cU());
        else if ("uuid" === fr.kind) Cr.test(rr.data) || (Qr = this._getOrReturnCtx(rr, Qr), Yr(Qr, {
          validation: "uuid",
          code: mr.invalid_string,
          message: fr.message
        }), Sr.cU());
        else if ("cuid" === fr.kind) qr.test(rr.data) || (Qr = this._getOrReturnCtx(rr, Qr), Yr(Qr, {
          validation: "cuid",
          code: mr.invalid_string,
          message: fr.message
        }), Sr.cU());
        else if ("cuid2" === fr.kind) Rr.test(rr.data) || (Qr = this._getOrReturnCtx(rr, Qr), Yr(Qr, {
          validation: "cuid2",
          code: mr.invalid_string,
          message: fr.message
        }), Sr.cU());
        else if ("ulid" === fr.kind) gr.test(rr.data) || (Qr = this._getOrReturnCtx(rr, Qr), Yr(Qr, {
          validation: "ulid",
          code: mr.invalid_string,
          message: fr.message
        }), Sr.cU());
        else if ("url" === fr.kind) try {
          new URL(rr.data)
        } catch (jr) {
          Qr = this._getOrReturnCtx(rr, Qr), Yr(Qr, {
            validation: "url",
            code: mr.invalid_string,
            message: fr.message
          }), Sr.cU()
        } else if ("regex" === fr.kind) {
          fr.regex.lastIndex = 0;
          fr.regex.test(rr.data) || (Qr = this._getOrReturnCtx(rr, Qr), Yr(Qr, {
            validation: "regex",
            code: mr.invalid_string,
            message: fr.message
          }), Sr.cU())
        } else if ("trim" === fr.kind) rr.data = rr.data.trim();
        else if ("includes" === fr.kind) rr.data.includes(fr.value, fr.position) || (Qr = this._getOrReturnCtx(rr, Qr), Yr(Qr, {
          code: mr.invalid_string,
          validation: {
            includes: fr.value,
            position: fr.position
          },
          message: fr.message
        }), Sr.cU());
        else if ("toLowerCase" === fr.kind) rr.data = rr.data.toLowerCase();
        else if ("toUpperCase" === fr.kind) rr.data = rr.data.toUpperCase();
        else if ("startsWith" === fr.kind) rr.data.startsWith(fr.value) || (Qr = this._getOrReturnCtx(rr, Qr), Yr(Qr, {
          code: mr.invalid_string,
          validation: {
            startsWith: fr.value
          },
          message: fr.message
        }), Sr.cU());
        else if ("endsWith" === fr.kind) rr.data.endsWith(fr.value) || (Qr = this._getOrReturnCtx(rr, Qr), Yr(Qr, {
          code: mr.invalid_string,
          validation: {
            endsWith: fr.value
          },
          message: fr.message
        }), Sr.cU());
        else if ("datetime" === fr.kind) {
          ((ar = fr).precision ? ar.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${ar.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${ar.precision}}Z$`) : 0 === ar.precision ? ar.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : ar.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(rr.data) || (Qr = this._getOrReturnCtx(rr, Qr), Yr(Qr, {
            code: mr.invalid_string,
            validation: "datetime",
            message: fr.message
          }), Sr.cU())
        } else "ip" === fr.kind ? (Zr = rr.data, ("v4" !== (Wr = fr.version) && Wr || !kr.test(Zr)) && ("v6" !== Wr && Wr || !Ar.test(Zr)) && (Qr = this._getOrReturnCtx(rr, Qr), Yr(Qr, {
          validation: "ip",
          code: mr.invalid_string,
          message: fr.message
        }), Sr.cU())) : Ir.assertNever(fr);
        var Zr, Wr, ar;
        return {
          status: Sr.value,
          value: rr.data
        }
      }
      _regex(rr, Sr, Qr) {
        return this.refinement((Sr => rr.test(Sr)), {
          validation: Sr,
          code: mr.invalid_string,
          ...Lr.errToObj(Qr)
        })
      }
      _addCheck(rr) {
        return new Vr({
          ...this._def,
          checks: [...this._def.checks, rr]
        })
      }
      email(rr) {
        return this._addCheck({
          kind: "email",
          ...Lr.errToObj(rr)
        })
      }
      url(rr) {
        return this._addCheck({
          kind: "url",
          ...Lr.errToObj(rr)
        })
      }
      emoji(rr) {
        return this._addCheck({
          kind: "emoji",
          ...Lr.errToObj(rr)
        })
      }
      uuid(rr) {
        return this._addCheck({
          kind: "uuid",
          ...Lr.errToObj(rr)
        })
      }
      cuid(rr) {
        return this._addCheck({
          kind: "cuid",
          ...Lr.errToObj(rr)
        })
      }
      cuid2(rr) {
        return this._addCheck({
          kind: "cuid2",
          ...Lr.errToObj(rr)
        })
      }
      ulid(rr) {
        return this._addCheck({
          kind: "ulid",
          ...Lr.errToObj(rr)
        })
      }
      ip(rr) {
        return this._addCheck({
          kind: "ip",
          ...Lr.errToObj(rr)
        })
      }
      datetime(rr) {
        var Sr;
        return "string" === typeof rr ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: rr
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === rr || void 0 === rr ? void 0 : rr.precision) ? null : null === rr || void 0 === rr ? void 0 : rr.precision,
          offset: null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.offset) && void 0 !== Sr && Sr,
          ...Lr.errToObj(null === rr || void 0 === rr ? void 0 : rr.message)
        })
      }
      regex(rr, Sr) {
        return this._addCheck({
          kind: "regex",
          regex: rr,
          ...Lr.errToObj(Sr)
        })
      }
      includes(rr, Sr) {
        return this._addCheck({
          kind: "includes",
          value: rr,
          position: null === Sr || void 0 === Sr ? void 0 : Sr.position,
          ...Lr.errToObj(null === Sr || void 0 === Sr ? void 0 : Sr.message)
        })
      }
      startsWith(rr, Sr) {
        return this._addCheck({
          kind: "startsWith",
          value: rr,
          ...Lr.errToObj(Sr)
        })
      }
      endsWith(rr, Sr) {
        return this._addCheck({
          kind: "endsWith",
          value: rr,
          ...Lr.errToObj(Sr)
        })
      }
      min(rr, Sr) {
        return this._addCheck({
          kind: "min",
          value: rr,
          ...Lr.errToObj(Sr)
        })
      }
      max(rr, Sr) {
        return this._addCheck({
          kind: "max",
          value: rr,
          ...Lr.errToObj(Sr)
        })
      }
      length(rr, Sr) {
        return this._addCheck({
          kind: "length",
          value: rr,
          ...Lr.errToObj(Sr)
        })
      }
      nonempty(rr) {
        return this.min(1, Lr.errToObj(rr))
      }
      trim() {
        return new Vr({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new Vr({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new Vr({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((rr => "datetime" === rr.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((rr => "email" === rr.kind))
      }
      get isURL() {
        return !!this._def.checks.find((rr => "url" === rr.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((rr => "emoji" === rr.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((rr => "uuid" === rr.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((rr => "cuid" === rr.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((rr => "cuid2" === rr.kind))
      }
      get isULID() {
        return !!this._def.checks.find((rr => "ulid" === rr.kind))
      }
      get isIP() {
        return !!this._def.checks.find((rr => "ip" === rr.kind))
      }
      get minLength() {
        let rr = null;
        for (const Sr of this._def.checks) "min" === Sr.kind && (null === rr || Sr.value > rr) && (rr = Sr.value);
        return rr
      }
      get maxLength() {
        let rr = null;
        for (const Sr of this._def.checks) "max" === Sr.kind && (null === rr || Sr.value < rr) && (rr = Sr.value);
        return rr
      }
    }

    function ir(rr, Sr) {
      const Qr = (rr.toString().split(".")[1] || "").length,
        Zr = (Sr.toString().split(".")[1] || "").length,
        Wr = Qr > Zr ? Qr : Zr;
      return parseInt(rr.toFixed(Wr).replace(".", "")) % parseInt(Sr.toFixed(Wr).replace(".", "")) / Math.pow(10, Wr)
    }
    Vr.create = rr => {
      var Sr;
      return new Vr({
        checks: [],
        typeName: qS.ZodString,
        coerce: null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.coerce) && void 0 !== Sr && Sr,
        ...Pr(rr)
      })
    };
    class wr extends Hr {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(rr) {
        this._def.coerce && (rr.data = Number(rr.data));
        if (this._getType(rr) !== pr.number) {
          const Sr = this._getOrReturnCtx(rr);
          return Yr(Sr, {
            code: mr.invalid_type,
            expected: pr.number,
            received: Sr.parsedType
          }), er
        }
        let Sr;
        const Qr = new nr;
        for (const Zr of this._def.checks)
          if ("int" === Zr.kind) Ir.isInteger(rr.data) || (Sr = this._getOrReturnCtx(rr, Sr), Yr(Sr, {
            code: mr.invalid_type,
            expected: "integer",
            received: "float",
            message: Zr.message
          }), Qr.cU());
          else if ("min" === Zr.kind) {
          (Zr.inclusive ? rr.data < Zr.value : rr.data <= Zr.value) && (Sr = this._getOrReturnCtx(rr, Sr), Yr(Sr, {
            code: mr.too_small,
            minimum: Zr.value,
            type: "number",
            inclusive: Zr.inclusive,
            exact: !1,
            message: Zr.message
          }), Qr.cU())
        } else if ("max" === Zr.kind) {
          (Zr.inclusive ? rr.data > Zr.value : rr.data >= Zr.value) && (Sr = this._getOrReturnCtx(rr, Sr), Yr(Sr, {
            code: mr.too_big,
            maximum: Zr.value,
            type: "number",
            inclusive: Zr.inclusive,
            exact: !1,
            message: Zr.message
          }), Qr.cU())
        } else "multipleOf" === Zr.kind ? 0 !== ir(rr.data, Zr.value) && (Sr = this._getOrReturnCtx(rr, Sr), Yr(Sr, {
          code: mr.not_multiple_of,
          multipleOf: Zr.value,
          message: Zr.message
        }), Qr.cU()) : "finite" === Zr.kind ? Number.isFinite(rr.data) || (Sr = this._getOrReturnCtx(rr, Sr), Yr(Sr, {
          code: mr.not_finite,
          message: Zr.message
        }), Qr.cU()) : Ir.assertNever(Zr);
        return {
          status: Qr.value,
          value: rr.data
        }
      }
      gte(rr, Sr) {
        return this.setLimit("min", rr, !0, Lr.toString(Sr))
      }
      gt(rr, Sr) {
        return this.setLimit("min", rr, !1, Lr.toString(Sr))
      }
      lte(rr, Sr) {
        return this.setLimit("max", rr, !0, Lr.toString(Sr))
      }
      lt(rr, Sr) {
        return this.setLimit("max", rr, !1, Lr.toString(Sr))
      }
      setLimit(rr, Sr, Qr, Zr) {
        return new wr({
          ...this._def,
          checks: [...this._def.checks, {
            kind: rr,
            value: Sr,
            inclusive: Qr,
            message: Lr.toString(Zr)
          }]
        })
      }
      _addCheck(rr) {
        return new wr({
          ...this._def,
          checks: [...this._def.checks, rr]
        })
      }
      int(rr) {
        return this._addCheck({
          kind: "int",
          message: Lr.toString(rr)
        })
      }
      positive(rr) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: Lr.toString(rr)
        })
      }
      negative(rr) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: Lr.toString(rr)
        })
      }
      nonpositive(rr) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: Lr.toString(rr)
        })
      }
      nonnegative(rr) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: Lr.toString(rr)
        })
      }
      multipleOf(rr, Sr) {
        return this._addCheck({
          kind: "multipleOf",
          value: rr,
          message: Lr.toString(Sr)
        })
      }
      finite(rr) {
        return this._addCheck({
          kind: "finite",
          message: Lr.toString(rr)
        })
      }
      safe(rr) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: Lr.toString(rr)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: Lr.toString(rr)
        })
      }
      get minValue() {
        let rr = null;
        for (const Sr of this._def.checks) "min" === Sr.kind && (null === rr || Sr.value > rr) && (rr = Sr.value);
        return rr
      }
      get maxValue() {
        let rr = null;
        for (const Sr of this._def.checks) "max" === Sr.kind && (null === rr || Sr.value < rr) && (rr = Sr.value);
        return rr
      }
      get isInt() {
        return !!this._def.checks.find((rr => "int" === rr.kind || "multipleOf" === rr.kind && Ir.isInteger(rr.value)))
      }
      get isFinite() {
        let rr = null,
          Sr = null;
        for (const Qr of this._def.checks) {
          if ("finite" === Qr.kind || "int" === Qr.kind || "multipleOf" === Qr.kind) return !0;
          "min" === Qr.kind ? (null === Sr || Qr.value > Sr) && (Sr = Qr.value) : "max" === Qr.kind && (null === rr || Qr.value < rr) && (rr = Qr.value)
        }
        return Number.isFinite(Sr) && Number.isFinite(rr)
      }
    }
    wr.create = rr => new wr({
      checks: [],
      typeName: qS.ZodNumber,
      coerce: (null === rr || void 0 === rr ? void 0 : rr.coerce) || !1,
      ...Pr(rr)
    });
    class cr extends Hr {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(rr) {
        this._def.coerce && (rr.data = BigInt(rr.data));
        if (this._getType(rr) !== pr.bigint) {
          const Sr = this._getOrReturnCtx(rr);
          return Yr(Sr, {
            code: mr.invalid_type,
            expected: pr.bigint,
            received: Sr.parsedType
          }), er
        }
        let Sr;
        const Qr = new nr;
        for (const Zr of this._def.checks)
          if ("min" === Zr.kind) {
            (Zr.inclusive ? rr.data < Zr.value : rr.data <= Zr.value) && (Sr = this._getOrReturnCtx(rr, Sr), Yr(Sr, {
              code: mr.too_small,
              type: "bigint",
              minimum: Zr.value,
              inclusive: Zr.inclusive,
              message: Zr.message
            }), Qr.cU())
          } else if ("max" === Zr.kind) {
          (Zr.inclusive ? rr.data > Zr.value : rr.data >= Zr.value) && (Sr = this._getOrReturnCtx(rr, Sr), Yr(Sr, {
            code: mr.too_big,
            type: "bigint",
            maximum: Zr.value,
            inclusive: Zr.inclusive,
            message: Zr.message
          }), Qr.cU())
        } else "multipleOf" === Zr.kind ? rr.data % Zr.value !== BigInt(0) && (Sr = this._getOrReturnCtx(rr, Sr), Yr(Sr, {
          code: mr.not_multiple_of,
          multipleOf: Zr.value,
          message: Zr.message
        }), Qr.cU()) : Ir.assertNever(Zr);
        return {
          status: Qr.value,
          value: rr.data
        }
      }
      gte(rr, Sr) {
        return this.setLimit("min", rr, !0, Lr.toString(Sr))
      }
      gt(rr, Sr) {
        return this.setLimit("min", rr, !1, Lr.toString(Sr))
      }
      lte(rr, Sr) {
        return this.setLimit("max", rr, !0, Lr.toString(Sr))
      }
      lt(rr, Sr) {
        return this.setLimit("max", rr, !1, Lr.toString(Sr))
      }
      setLimit(rr, Sr, Qr, Zr) {
        return new cr({
          ...this._def,
          checks: [...this._def.checks, {
            kind: rr,
            value: Sr,
            inclusive: Qr,
            message: Lr.toString(Zr)
          }]
        })
      }
      _addCheck(rr) {
        return new cr({
          ...this._def,
          checks: [...this._def.checks, rr]
        })
      }
      positive(rr) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: Lr.toString(rr)
        })
      }
      negative(rr) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: Lr.toString(rr)
        })
      }
      nonpositive(rr) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: Lr.toString(rr)
        })
      }
      nonnegative(rr) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: Lr.toString(rr)
        })
      }
      multipleOf(rr, Sr) {
        return this._addCheck({
          kind: "multipleOf",
          value: rr,
          message: Lr.toString(Sr)
        })
      }
      get minValue() {
        let rr = null;
        for (const Sr of this._def.checks) "min" === Sr.kind && (null === rr || Sr.value > rr) && (rr = Sr.value);
        return rr
      }
      get maxValue() {
        let rr = null;
        for (const Sr of this._def.checks) "max" === Sr.kind && (null === rr || Sr.value < rr) && (rr = Sr.value);
        return rr
      }
    }
    cr.create = rr => {
      var Sr;
      return new cr({
        checks: [],
        typeName: qS.ZodBigInt,
        coerce: null !== (Sr = null === rr || void 0 === rr ? void 0 : rr.coerce) && void 0 !== Sr && Sr,
        ...Pr(rr)
      })
    };
    class Fr extends Hr {
      _parse(rr) {
        this._def.coerce && (rr.data = Boolean(rr.data));
        if (this._getType(rr) !== pr.boolean) {
          const Sr = this._getOrReturnCtx(rr);
          return Yr(Sr, {
            code: mr.invalid_type,
            expected: pr.boolean,
            received: Sr.parsedType
          }), er
        }
        return yr(rr.data)
      }
    }
    Fr.create = rr => new Fr({
      typeName: qS.ZodBoolean,
      coerce: (null === rr || void 0 === rr ? void 0 : rr.coerce) || !1,
      ...Pr(rr)
    });
    class or extends Hr {
      _parse(rr) {
        this._def.coerce && (rr.data = new Date(rr.data));
        if (this._getType(rr) !== pr.date) {
          const Sr = this._getOrReturnCtx(rr);
          return Yr(Sr, {
            code: mr.invalid_type,
            expected: pr.date,
            received: Sr.parsedType
          }), er
        }
        if (isNaN(rr.data.getTime())) {
          return Yr(this._getOrReturnCtx(rr), {
            code: mr.invalid_date
          }), er
        }
        const Sr = new nr;
        let Qr;
        for (const Zr of this._def.checks) "min" === Zr.kind ? rr.data.getTime() < Zr.value && (Qr = this._getOrReturnCtx(rr, Qr), Yr(Qr, {
          code: mr.too_small,
          message: Zr.message,
          inclusive: !0,
          exact: !1,
          minimum: Zr.value,
          type: "date"
        }), Sr.cU()) : "max" === Zr.kind ? rr.data.getTime() > Zr.value && (Qr = this._getOrReturnCtx(rr, Qr), Yr(Qr, {
          code: mr.too_big,
          message: Zr.message,
          inclusive: !0,
          exact: !1,
          maximum: Zr.value,
          type: "date"
        }), Sr.cU()) : Ir.assertNever(Zr);
        return {
          status: Sr.value,
          value: new Date(rr.data.getTime())
        }
      }
      _addCheck(rr) {
        return new or({
          ...this._def,
          checks: [...this._def.checks, rr]
        })
      }
      min(rr, Sr) {
        return this._addCheck({
          kind: "min",
          value: rr.getTime(),
          message: Lr.toString(Sr)
        })
      }
      max(rr, Sr) {
        return this._addCheck({
          kind: "max",
          value: rr.getTime(),
          message: Lr.toString(Sr)
        })
      }
      get minDate() {
        let rr = null;
        for (const Sr of this._def.checks) "min" === Sr.kind && (null === rr || Sr.value > rr) && (rr = Sr.value);
        return null != rr ? new Date(rr) : null
      }
      get maxDate() {
        let rr = null;
        for (const Sr of this._def.checks) "max" === Sr.kind && (null === rr || Sr.value < rr) && (rr = Sr.value);
        return null != rr ? new Date(rr) : null
      }
    }
    or.create = rr => new or({
      checks: [],
      coerce: (null === rr || void 0 === rr ? void 0 : rr.coerce) || !1,
      typeName: qS.ZodDate,
      ...Pr(rr)
    });
    class br extends Hr {
      _parse(rr) {
        if (this._getType(rr) !== pr.symbol) {
          const Sr = this._getOrReturnCtx(rr);
          return Yr(Sr, {
            code: mr.invalid_type,
            expected: pr.symbol,
            received: Sr.parsedType
          }), er
        }
        return yr(rr.data)
      }
    }
    br.create = rr => new br({
      typeName: qS.ZodSymbol,
      ...Pr(rr)
    });
    class Jr extends Hr {
      _parse(rr) {
        if (this._getType(rr) !== pr.undefined) {
          const Sr = this._getOrReturnCtx(rr);
          return Yr(Sr, {
            code: mr.invalid_type,
            expected: pr.undefined,
            received: Sr.parsedType
          }), er
        }
        return yr(rr.data)
      }
    }
    Jr.create = rr => new Jr({
      typeName: qS.ZodUndefined,
      ...Pr(rr)
    });
    class Dr extends Hr {
      _parse(rr) {
        if (this._getType(rr) !== pr.null) {
          const Sr = this._getOrReturnCtx(rr);
          return Yr(Sr, {
            code: mr.invalid_type,
            expected: pr.null,
            received: Sr.parsedType
          }), er
        }
        return yr(rr.data)
      }
    }
    Dr.create = rr => new Dr({
      typeName: qS.ZodNull,
      ...Pr(rr)
    });
    class dr extends Hr {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(rr) {
        return yr(rr.data)
      }
    }
    dr.create = rr => new dr({
      typeName: qS.ZodAny,
      ...Pr(rr)
    });
    class sr extends Hr {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(rr) {
        return yr(rr.data)
      }
    }
    sr.create = rr => new sr({
      typeName: qS.ZodUnknown,
      ...Pr(rr)
    });
    class ur extends Hr {
      _parse(rr) {
        const Sr = this._getOrReturnCtx(rr);
        return Yr(Sr, {
          code: mr.invalid_type,
          expected: pr.never,
          received: Sr.parsedType
        }), er
      }
    }
    ur.create = rr => new ur({
      typeName: qS.ZodNever,
      ...Pr(rr)
    });
    class rS extends Hr {
      _parse(rr) {
        if (this._getType(rr) !== pr.undefined) {
          const Sr = this._getOrReturnCtx(rr);
          return Yr(Sr, {
            code: mr.invalid_type,
            expected: pr.void,
            received: Sr.parsedType
          }), er
        }
        return yr(rr.data)
      }
    }
    rS.create = rr => new rS({
      typeName: qS.ZodVoid,
      ...Pr(rr)
    });
    class SS extends Hr {
      _parse(rr) {
        const {
          ctx: Sr,
          status: Qr
        } = this._processInputParams(rr), Zr = this._def;
        if (Sr.parsedType !== pr.array) return Yr(Sr, {
          code: mr.invalid_type,
          expected: pr.array,
          received: Sr.parsedType
        }), er;
        if (null !== Zr.exactLength) {
          const rr = Sr.data.length > Zr.exactLength.value,
            Wr = Sr.data.length < Zr.exactLength.value;
          (rr || Wr) && (Yr(Sr, {
            code: rr ? mr.too_big : mr.too_small,
            minimum: Wr ? Zr.exactLength.value : void 0,
            maximum: rr ? Zr.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: Zr.exactLength.message
          }), Qr.cU())
        }
        if (null !== Zr.minLength && Sr.data.length < Zr.minLength.value && (Yr(Sr, {
            code: mr.too_small,
            minimum: Zr.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Zr.minLength.message
          }), Qr.cU()), null !== Zr.maxLength && Sr.data.length > Zr.maxLength.value && (Yr(Sr, {
            code: mr.too_big,
            maximum: Zr.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Zr.maxLength.message
          }), Qr.cU()), Sr.common.async) return Promise.all([...Sr.data].map(((rr, Qr) => Zr.type._parseAsync(new lr(Sr, rr, Sr.path, Qr))))).then((rr => nr.mergeArray(Qr, rr)));
        const Wr = [...Sr.data].map(((rr, Qr) => Zr.type._parseSync(new lr(Sr, rr, Sr.path, Qr))));
        return nr.mergeArray(Qr, Wr)
      }
      get element() {
        return this._def.type
      }
      min(rr, Sr) {
        return new SS({
          ...this._def,
          minLength: {
            value: rr,
            message: Lr.toString(Sr)
          }
        })
      }
      max(rr, Sr) {
        return new SS({
          ...this._def,
          maxLength: {
            value: rr,
            message: Lr.toString(Sr)
          }
        })
      }
      length(rr, Sr) {
        return new SS({
          ...this._def,
          exactLength: {
            value: rr,
            message: Lr.toString(Sr)
          }
        })
      }
      nonempty(rr) {
        return this.min(1, rr)
      }
    }

    function QS(rr) {
      if (rr instanceof ZS) {
        const Sr = {};
        for (const Qr in rr.shape) {
          const Zr = rr.shape[Qr];
          Sr[Qr] = KS.create(QS(Zr))
        }
        return new ZS({
          ...rr._def,
          shape: () => Sr
        })
      }
      return rr instanceof SS ? new SS({
        ...rr._def,
        type: QS(rr.element)
      }) : rr instanceof KS ? KS.create(QS(rr.unwrap())) : rr instanceof yS ? yS.create(QS(rr.unwrap())) : rr instanceof ES ? ES.create(rr.items.map((rr => QS(rr)))) : rr
    }
    SS.create = (rr, Sr) => new SS({
      type: rr,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: qS.ZodArray,
      ...Pr(Sr)
    });
    class ZS extends Hr {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const rr = this._def.shape(),
          Sr = Ir.objectKeys(rr);
        return this._cached = {
          shape: rr,
          keys: Sr
        }
      }
      _parse(rr) {
        if (this._getType(rr) !== pr.object) {
          const Sr = this._getOrReturnCtx(rr);
          return Yr(Sr, {
            code: mr.invalid_type,
            expected: pr.object,
            received: Sr.parsedType
          }), er
        }
        const {
          status: Sr,
          ctx: Qr
        } = this._processInputParams(rr), {
          shape: Zr,
          keys: Wr
        } = this._getCached(), ar = [];
        if (!(this._def.catchall instanceof ur && "strip" === this._def.unknownKeys))
          for (const Ir in Qr.data) Wr.includes(Ir) || ar.push(Ir);
        const jr = [];
        for (const Ir of Wr) {
          const rr = Zr[Ir],
            Sr = Qr.data[Ir];
          jr.push({
            key: {
              status: "valid",
              value: Ir
            },
            value: rr._parse(new lr(Qr, Sr, Qr.path, Ir)),
            alwaysSet: Ir in Qr.data
          })
        }
        if (this._def.catchall instanceof ur) {
          const rr = this._def.unknownKeys;
          if ("passthrough" === rr)
            for (const Sr of ar) jr.push({
              key: {
                status: "valid",
                value: Sr
              },
              value: {
                status: "valid",
                value: Qr.data[Sr]
              }
            });
          else if ("strict" === rr) ar.length > 0 && (Yr(Qr, {
            code: mr.unrecognized_keys,
            keys: ar
          }), Sr.cU());
          else if ("strip" !== rr) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const rr = this._def.catchall;
          for (const Sr of ar) {
            const Zr = Qr.data[Sr];
            jr.push({
              key: {
                status: "valid",
                value: Sr
              },
              value: rr._parse(new lr(Qr, Zr, Qr.path, Sr)),
              alwaysSet: Sr in Qr.data
            })
          }
        }
        return Qr.common.async ? Promise.resolve().then((async () => {
          const rr = [];
          for (const Sr of jr) {
            const Qr = await Sr.key;
            rr.push({
              key: Qr,
              value: await Sr.value,
              alwaysSet: Sr.alwaysSet
            })
          }
          return rr
        })).then((rr => nr.mergeObjectSync(Sr, rr))) : nr.mergeObjectSync(Sr, jr)
      }
      get shape() {
        return this._def.shape()
      }
      strict(rr) {
        return Lr.errToObj, new ZS({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== rr ? {
            errorMap: (Sr, Qr) => {
              var Zr, Wr, ar, jr;
              const Ir = null !== (ar = null === (Wr = (Zr = this._def).errorMap) || void 0 === Wr ? void 0 : Wr.call(Zr, Sr, Qr).message) && void 0 !== ar ? ar : Qr.defaultError;
              return "unrecognized_keys" === Sr.code ? {
                message: null !== (jr = Lr.errToObj(rr).message) && void 0 !== jr ? jr : Ir
              } : {
                message: Ir
              }
            }
          } : {}
        })
      }
      strip() {
        return new ZS({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new ZS({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(rr) {
        return new ZS({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...rr
          })
        })
      }
      merge(rr) {
        return new ZS({
          unknownKeys: rr._def.unknownKeys,
          catchall: rr._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...rr._def.shape()
          }),
          typeName: qS.ZodObject
        })
      }
      setKey(rr, Sr) {
        return this.augment({
          [rr]: Sr
        })
      }
      catchall(rr) {
        return new ZS({
          ...this._def,
          catchall: rr
        })
      }
      eN(rr) {
        const Sr = {};
        return Ir.objectKeys(rr).forEach((Qr => {
          rr[Qr] && this.shape[Qr] && (Sr[Qr] = this.shape[Qr])
        })), new ZS({
          ...this._def,
          shape: () => Sr
        })
      }
      omit(rr) {
        const Sr = {};
        return Ir.objectKeys(this.shape).forEach((Qr => {
          rr[Qr] || (Sr[Qr] = this.shape[Qr])
        })), new ZS({
          ...this._def,
          shape: () => Sr
        })
      }
      deepPartial() {
        return QS(this)
      }
      partial(rr) {
        const Sr = {};
        return Ir.objectKeys(this.shape).forEach((Qr => {
          const Zr = this.shape[Qr];
          rr && !rr[Qr] ? Sr[Qr] = Zr : Sr[Qr] = Zr.optional()
        })), new ZS({
          ...this._def,
          shape: () => Sr
        })
      }
      required(rr) {
        const Sr = {};
        return Ir.objectKeys(this.shape).forEach((Qr => {
          if (rr && !rr[Qr]) Sr[Qr] = this.shape[Qr];
          else {
            let rr = this.shape[Qr];
            for (; rr instanceof KS;) rr = rr._def.innerType;
            Sr[Qr] = rr
          }
        })), new ZS({
          ...this._def,
          shape: () => Sr
        })
      }
      keyof() {
        return hS(Ir.objectKeys(this.shape))
      }
    }
    ZS.create = (rr, Sr) => new ZS({
      shape: () => rr,
      unknownKeys: "strip",
      catchall: ur.create(),
      typeName: qS.ZodObject,
      ...Pr(Sr)
    }), ZS.strictCreate = (rr, Sr) => new ZS({
      shape: () => rr,
      unknownKeys: "strict",
      catchall: ur.create(),
      typeName: qS.ZodObject,
      ...Pr(Sr)
    }), ZS.lazycreate = (rr, Sr) => new ZS({
      shape: rr,
      unknownKeys: "strip",
      catchall: ur.create(),
      typeName: qS.ZodObject,
      ...Pr(Sr)
    });
    class WS extends Hr {
      _parse(rr) {
        const {
          ctx: Sr
        } = this._processInputParams(rr), Qr = this._def.options;
        if (Sr.common.async) return Promise.all(Qr.map((async rr => {
          const Qr = {
            ...Sr,
            common: {
              ...Sr.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await rr._parseAsync({
              data: Sr.data,
              path: Sr.path,
              parent: Qr
            }),
            ctx: Qr
          }
        }))).then((function(rr) {
          for (const Sr of rr)
            if ("valid" === Sr.result.status) return Sr.result;
          for (const Zr of rr)
            if ("cU" === Zr.result.status) return Sr.common.issues.push(...Zr.ctx.common.issues), Zr.result;
          const Qr = rr.map((rr => new Nr(rr.ctx.common.issues)));
          return Yr(Sr, {
            code: mr.invalid_union,
            unionErrors: Qr
          }), er
        }));
        {
          let rr;
          const Zr = [];
          for (const ar of Qr) {
            const Qr = {
                ...Sr,
                common: {
                  ...Sr.common,
                  issues: []
                },
                parent: null
              },
              Wr = ar._parseSync({
                data: Sr.data,
                path: Sr.path,
                parent: Qr
              });
            if ("valid" === Wr.status) return Wr;
            "cU" !== Wr.status || rr || (rr = {
              result: Wr,
              ctx: Qr
            }), Qr.common.issues.length && Zr.push(Qr.common.issues)
          }
          if (rr) return Sr.common.issues.push(...rr.ctx.common.issues), rr.result;
          const Wr = Zr.map((rr => new Nr(rr)));
          return Yr(Sr, {
            code: mr.invalid_union,
            unionErrors: Wr
          }), er
        }
      }
      get options() {
        return this._def.options
      }
    }
    WS.create = (rr, Sr) => new WS({
      options: rr,
      typeName: qS.ZodUnion,
      ...Pr(Sr)
    });
    const aS = rr => rr instanceof US ? aS(rr.schema) : rr instanceof eS ? aS(rr.innerType()) : rr instanceof tS ? [rr.value] : rr instanceof zS ? rr.options : rr instanceof YS ? Object.keys(rr.enum) : rr instanceof BS ? aS(rr._def.innerType) : rr instanceof Jr ? [void 0] : rr instanceof Dr ? [null] : null;
    class jS extends Hr {
      _parse(rr) {
        const {
          ctx: Sr
        } = this._processInputParams(rr);
        if (Sr.parsedType !== pr.object) return Yr(Sr, {
          code: mr.invalid_type,
          expected: pr.object,
          received: Sr.parsedType
        }), er;
        const Qr = this.discriminator,
          Zr = Sr.data[Qr],
          Wr = this.optionsMap.get(Zr);
        return Wr ? Sr.common.async ? Wr._parseAsync({
          data: Sr.data,
          path: Sr.path,
          parent: Sr
        }) : Wr._parseSync({
          data: Sr.data,
          path: Sr.path,
          parent: Sr
        }) : (Yr(Sr, {
          code: mr.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [Qr]
        }), er)
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
      static create(rr, Sr, Qr) {
        const Zr = new Map;
        for (const Wr of Sr) {
          const Sr = aS(Wr.shape[rr]);
          if (!Sr) throw new Error(`A discriminator value for key \`${rr}\` could not be extracted from all schema options`);
          for (const Qr of Sr) {
            if (Zr.has(Qr)) throw new Error(`Discriminator property ${String(rr)} has duplicate value ${String(Qr)}`);
            Zr.set(Qr, Wr)
          }
        }
        return new jS({
          typeName: qS.ZodDiscriminatedUnion,
          discriminator: rr,
          options: Sr,
          optionsMap: Zr,
          ...Pr(Qr)
        })
      }
    }

    function IS(rr, Sr) {
      const Qr = xr(rr),
        Zr = xr(Sr);
      if (rr === Sr) return {
        valid: !0,
        data: rr
      };
      if (Qr === pr.object && Zr === pr.object) {
        const Qr = Ir.objectKeys(Sr),
          Zr = Ir.objectKeys(rr).filter((rr => -1 !== Qr.indexOf(rr))),
          Wr = {
            ...rr,
            ...Sr
          };
        for (const ar of Zr) {
          const Qr = IS(rr[ar], Sr[ar]);
          if (!Qr.valid) return {
            valid: !1
          };
          Wr[ar] = Qr.data
        }
        return {
          valid: !0,
          data: Wr
        }
      }
      if (Qr === pr.array && Zr === pr.array) {
        if (rr.length !== Sr.length) return {
          valid: !1
        };
        const Qr = [];
        for (let Zr = 0; Zr < rr.length; Zr++) {
          const Wr = IS(rr[Zr], Sr[Zr]);
          if (!Wr.valid) return {
            valid: !1
          };
          Qr.push(Wr.data)
        }
        return {
          valid: !0,
          data: Qr
        }
      }
      return Qr === pr.date && Zr === pr.date && +rr === +Sr ? {
        valid: !0,
        data: rr
      } : {
        valid: !1
      }
    }
    class fS extends Hr {
      _parse(rr) {
        const {
          status: Sr,
          ctx: Qr
        } = this._processInputParams(rr), Zr = (rr, Zr) => {
          if (Br(rr) || Br(Zr)) return er;
          const Wr = IS(rr.value, Zr.value);
          return Wr.valid ? ((Tr(rr) || Tr(Zr)) && Sr.cU(), {
            status: Sr.value,
            value: Wr.data
          }) : (Yr(Qr, {
            code: mr.invalid_intersection_types
          }), er)
        };
        return Qr.common.async ? Promise.all([this._def.left._parseAsync({
          data: Qr.data,
          path: Qr.path,
          parent: Qr
        }), this._def.right._parseAsync({
          data: Qr.data,
          path: Qr.path,
          parent: Qr
        })]).then((rr => {
          let [Sr, Qr] = rr;
          return Zr(Sr, Qr)
        })) : Zr(this._def.left._parseSync({
          data: Qr.data,
          path: Qr.path,
          parent: Qr
        }), this._def.right._parseSync({
          data: Qr.data,
          path: Qr.path,
          parent: Qr
        }))
      }
    }
    fS.create = (rr, Sr, Qr) => new fS({
      left: rr,
      right: Sr,
      typeName: qS.ZodIntersection,
      ...Pr(Qr)
    });
    class ES extends Hr {
      _parse(rr) {
        const {
          status: Sr,
          ctx: Qr
        } = this._processInputParams(rr);
        if (Qr.parsedType !== pr.array) return Yr(Qr, {
          code: mr.invalid_type,
          expected: pr.array,
          received: Qr.parsedType
        }), er;
        if (Qr.data.length < this._def.items.length) return Yr(Qr, {
          code: mr.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), er;
        !this._def.rest && Qr.data.length > this._def.items.length && (Yr(Qr, {
          code: mr.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), Sr.cU());
        const Zr = [...Qr.data].map(((rr, Sr) => {
          const Zr = this._def.items[Sr] || this._def.rest;
          return Zr ? Zr._parse(new lr(Qr, rr, Qr.path, Sr)) : null
        })).filter((rr => !!rr));
        return Qr.common.async ? Promise.all(Zr).then((rr => nr.mergeArray(Sr, rr))) : nr.mergeArray(Sr, Zr)
      }
      get items() {
        return this._def.items
      }
      rest(rr) {
        return new ES({
          ...this._def,
          rest: rr
        })
      }
    }
    ES.create = (rr, Sr) => {
      if (!Array.isArray(rr)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new ES({
        items: rr,
        typeName: qS.ZodTuple,
        rest: null,
        ...Pr(Sr)
      })
    };
    class pS extends Hr {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(rr) {
        const {
          status: Sr,
          ctx: Qr
        } = this._processInputParams(rr);
        if (Qr.parsedType !== pr.object) return Yr(Qr, {
          code: mr.invalid_type,
          expected: pr.object,
          received: Qr.parsedType
        }), er;
        const Zr = [],
          Wr = this._def.keyType,
          ar = this._def.valueType;
        for (const jr in Qr.data) Zr.push({
          key: Wr._parse(new lr(Qr, jr, Qr.path, jr)),
          value: ar._parse(new lr(Qr, Qr.data[jr], Qr.path, jr))
        });
        return Qr.common.async ? nr.mergeObjectAsync(Sr, Zr) : nr.mergeObjectSync(Sr, Zr)
      }
      get element() {
        return this._def.valueType
      }
      static create(rr, Sr, Qr) {
        return new pS(Sr instanceof Hr ? {
          keyType: rr,
          valueType: Sr,
          typeName: qS.ZodRecord,
          ...Pr(Qr)
        } : {
          keyType: Vr.create(),
          valueType: rr,
          typeName: qS.ZodRecord,
          ...Pr(Sr)
        })
      }
    }
    class xS extends Hr {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(rr) {
        const {
          status: Sr,
          ctx: Qr
        } = this._processInputParams(rr);
        if (Qr.parsedType !== pr.map) return Yr(Qr, {
          code: mr.invalid_type,
          expected: pr.map,
          received: Qr.parsedType
        }), er;
        const Zr = this._def.keyType,
          Wr = this._def.valueType,
          ar = [...Qr.data.entries()].map(((rr, Sr) => {
            let [ar, jr] = rr;
            return {
              key: Zr._parse(new lr(Qr, ar, Qr.path, [Sr, "key"])),
              value: Wr._parse(new lr(Qr, jr, Qr.path, [Sr, "value"]))
            }
          }));
        if (Qr.common.async) {
          const rr = new Map;
          return Promise.resolve().then((async () => {
            for (const Qr of ar) {
              const Zr = await Qr.key,
                Wr = await Qr.value;
              if ("aborted" === Zr.status || "aborted" === Wr.status) return er;
              "cU" !== Zr.status && "cU" !== Wr.status || Sr.cU(), rr.set(Zr.value, Wr.value)
            }
            return {
              status: Sr.value,
              value: rr
            }
          }))
        } {
          const rr = new Map;
          for (const Qr of ar) {
            const Zr = Qr.key,
              Wr = Qr.value;
            if ("aborted" === Zr.status || "aborted" === Wr.status) return er;
            "cU" !== Zr.status && "cU" !== Wr.status || Sr.cU(), rr.set(Zr.value, Wr.value)
          }
          return {
            status: Sr.value,
            value: rr
          }
        }
      }
    }
    xS.create = (rr, Sr, Qr) => new xS({
      valueType: Sr,
      keyType: rr,
      typeName: qS.ZodMap,
      ...Pr(Qr)
    });
    class mS extends Hr {
      _parse(rr) {
        const {
          status: Sr,
          ctx: Qr
        } = this._processInputParams(rr);
        if (Qr.parsedType !== pr.set) return Yr(Qr, {
          code: mr.invalid_type,
          expected: pr.set,
          received: Qr.parsedType
        }), er;
        const Zr = this._def;
        null !== Zr.minSize && Qr.data.size < Zr.minSize.value && (Yr(Qr, {
          code: mr.too_small,
          minimum: Zr.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Zr.minSize.message
        }), Sr.cU()), null !== Zr.maxSize && Qr.data.size > Zr.maxSize.value && (Yr(Qr, {
          code: mr.too_big,
          maximum: Zr.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Zr.maxSize.message
        }), Sr.cU());
        const Wr = this._def.valueType;

        function ar(rr) {
          const Qr = new Set;
          for (const Zr of rr) {
            if ("aborted" === Zr.status) return er;
            "cU" === Zr.status && Sr.cU(), Qr.add(Zr.value)
          }
          return {
            status: Sr.value,
            value: Qr
          }
        }
        const jr = [...Qr.data.values()].map(((rr, Sr) => Wr._parse(new lr(Qr, rr, Qr.path, Sr))));
        return Qr.common.async ? Promise.all(jr).then((rr => ar(rr))) : ar(jr)
      }
      min(rr, Sr) {
        return new mS({
          ...this._def,
          minSize: {
            value: rr,
            message: Lr.toString(Sr)
          }
        })
      }
      max(rr, Sr) {
        return new mS({
          ...this._def,
          maxSize: {
            value: rr,
            message: Lr.toString(Sr)
          }
        })
      }
      size(rr, Sr) {
        return this.min(rr, Sr).max(rr, Sr)
      }
      nonempty(rr) {
        return this.min(1, rr)
      }
    }
    mS.create = (rr, Sr) => new mS({
      valueType: rr,
      minSize: null,
      maxSize: null,
      typeName: qS.ZodSet,
      ...Pr(Sr)
    });
    class NS extends Hr {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(rr) {
        const {
          ctx: Sr
        } = this._processInputParams(rr);
        if (Sr.parsedType !== pr.function) return Yr(Sr, {
          code: mr.invalid_type,
          expected: pr.function,
          received: Sr.parsedType
        }), er;

        function Qr(rr, Qr) {
          return zr({
            data: rr,
            path: Sr.path,
            errorMaps: [Sr.common.contextualErrorMap, Sr.schemaErrorMap, hr(), Ur].filter((rr => !!rr)),
            issueData: {
              code: mr.invalid_arguments,
              argumentsError: Qr
            }
          })
        }

        function Zr(rr, Qr) {
          return zr({
            data: rr,
            path: Sr.path,
            errorMaps: [Sr.common.contextualErrorMap, Sr.schemaErrorMap, hr(), Ur].filter((rr => !!rr)),
            issueData: {
              code: mr.invalid_return_type,
              returnTypeError: Qr
            }
          })
        }
        const Wr = {
            errorMap: Sr.common.contextualErrorMap
          },
          ar = Sr.data;
        if (this._def.returns instanceof nS) {
          const rr = this;
          return yr((async function() {
            for (var Sr = arguments.length, jr = new Array(Sr), Ir = 0; Ir < Sr; Ir++) jr[Ir] = arguments[Ir];
            const fr = new Nr([]),
              Er = await rr._def.args.parseAsync(jr, Wr).catch((rr => {
                throw fr.addIssue(Qr(jr, rr)), fr
              })),
              pr = await Reflect.apply(ar, this, Er);
            return await rr._def.returns._def.type.parseAsync(pr, Wr).catch((rr => {
              throw fr.addIssue(Zr(pr, rr)), fr
            }))
          }))
        } {
          const rr = this;
          return yr((function() {
            for (var Sr = arguments.length, jr = new Array(Sr), Ir = 0; Ir < Sr; Ir++) jr[Ir] = arguments[Ir];
            const fr = rr._def.args.safeParse(jr, Wr);
            if (!fr.success) throw new Nr([Qr(jr, fr.error)]);
            const Er = Reflect.apply(ar, this, fr.data),
              pr = rr._def.returns.safeParse(Er, Wr);
            if (!pr.success) throw new Nr([Zr(Er, pr.error)]);
            return pr.data
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
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        return new NS({
          ...this._def,
          args: ES.create(Sr).rest(sr.create())
        })
      }
      returns(rr) {
        return new NS({
          ...this._def,
          returns: rr
        })
      }
      implement(rr) {
        return this.parse(rr)
      }
      strictImplement(rr) {
        return this.parse(rr)
      }
      static create(rr, Sr, Qr) {
        return new NS({
          args: rr || ES.create([]).rest(sr.create()),
          returns: Sr || sr.create(),
          typeName: qS.ZodFunction,
          ...Pr(Qr)
        })
      }
    }
    class US extends Hr {
      get schema() {
        return this._def.getter()
      }
      _parse(rr) {
        const {
          ctx: Sr
        } = this._processInputParams(rr);
        return this._def.getter()._parse({
          data: Sr.data,
          path: Sr.path,
          parent: Sr
        })
      }
    }
    US.create = (rr, Sr) => new US({
      getter: rr,
      typeName: qS.ZodLazy,
      ...Pr(Sr)
    });
    class tS extends Hr {
      _parse(rr) {
        if (rr.data !== this._def.value) {
          const Sr = this._getOrReturnCtx(rr);
          return Yr(Sr, {
            received: Sr.data,
            code: mr.invalid_literal,
            expected: this._def.value
          }), er
        }
        return {
          status: "valid",
          value: rr.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function hS(rr, Sr) {
      return new zS({
        values: rr,
        typeName: qS.ZodEnum,
        ...Pr(Sr)
      })
    }
    tS.create = (rr, Sr) => new tS({
      value: rr,
      typeName: qS.ZodLiteral,
      ...Pr(Sr)
    });
    class zS extends Hr {
      _parse(rr) {
        if ("string" !== typeof rr.data) {
          const Sr = this._getOrReturnCtx(rr),
            Qr = this._def.values;
          return Yr(Sr, {
            expected: Ir.joinValues(Qr),
            received: Sr.parsedType,
            code: mr.invalid_type
          }), er
        }
        if (-1 === this._def.values.indexOf(rr.data)) {
          const Sr = this._getOrReturnCtx(rr),
            Qr = this._def.values;
          return Yr(Sr, {
            received: Sr.data,
            code: mr.invalid_enum_value,
            options: Qr
          }), er
        }
        return yr(rr.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const rr = {};
        for (const Sr of this._def.values) rr[Sr] = Sr;
        return rr
      }
      get Values() {
        const rr = {};
        for (const Sr of this._def.values) rr[Sr] = Sr;
        return rr
      }
      get Enum() {
        const rr = {};
        for (const Sr of this._def.values) rr[Sr] = Sr;
        return rr
      }
      extract(rr) {
        return zS.create(rr)
      }
      exclude(rr) {
        return zS.create(this.options.filter((Sr => !rr.includes(Sr))))
      }
    }
    zS.create = hS;
    class YS extends Hr {
      _parse(rr) {
        const Sr = Ir.getValidEnumValues(this._def.values),
          Qr = this._getOrReturnCtx(rr);
        if (Qr.parsedType !== pr.string && Qr.parsedType !== pr.number) {
          const rr = Ir.objectValues(Sr);
          return Yr(Qr, {
            expected: Ir.joinValues(rr),
            received: Qr.parsedType,
            code: mr.invalid_type
          }), er
        }
        if (-1 === Sr.indexOf(rr.data)) {
          const rr = Ir.objectValues(Sr);
          return Yr(Qr, {
            received: Qr.data,
            code: mr.invalid_enum_value,
            options: rr
          }), er
        }
        return yr(rr.data)
      }
      get enum() {
        return this._def.values
      }
    }
    YS.create = (rr, Sr) => new YS({
      values: rr,
      typeName: qS.ZodNativeEnum,
      ...Pr(Sr)
    });
    class nS extends Hr {
      unwrap() {
        return this._def.type
      }
      _parse(rr) {
        const {
          ctx: Sr
        } = this._processInputParams(rr);
        if (Sr.parsedType !== pr.promise && !1 === Sr.common.async) return Yr(Sr, {
          code: mr.invalid_type,
          expected: pr.promise,
          received: Sr.parsedType
        }), er;
        const Qr = Sr.parsedType === pr.promise ? Sr.data : Promise.resolve(Sr.data);
        return yr(Qr.then((rr => this._def.type.parseAsync(rr, {
          path: Sr.path,
          errorMap: Sr.common.contextualErrorMap
        }))))
      }
    }
    nS.create = (rr, Sr) => new nS({
      type: rr,
      typeName: qS.ZodPromise,
      ...Pr(Sr)
    });
    class eS extends Hr {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === qS.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(rr) {
        const {
          status: Sr,
          ctx: Qr
        } = this._processInputParams(rr), Zr = this._def.effect || null, Wr = {
          addIssue: rr => {
            Yr(Qr, rr), rr.fatal ? Sr.abort() : Sr.cU()
          },
          get path() {
            return Qr.path
          }
        };
        if (Wr.addIssue = Wr.addIssue.bind(Wr), "preprocess" === Zr.type) {
          const rr = Zr.transform(Qr.data, Wr);
          return Qr.common.issues.length ? {
            status: "cU",
            value: Qr.data
          } : Qr.common.async ? Promise.resolve(rr).then((rr => this._def.schema._parseAsync({
            data: rr,
            path: Qr.path,
            parent: Qr
          }))) : this._def.schema._parseSync({
            data: rr,
            path: Qr.path,
            parent: Qr
          })
        }
        if ("refinement" === Zr.type) {
          const rr = rr => {
            const Sr = Zr.refinement(rr, Wr);
            if (Qr.common.async) return Promise.resolve(Sr);
            if (Sr instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return rr
          };
          if (!1 === Qr.common.async) {
            const Zr = this._def.schema._parseSync({
              data: Qr.data,
              path: Qr.path,
              parent: Qr
            });
            return "aborted" === Zr.status ? er : ("cU" === Zr.status && Sr.cU(), rr(Zr.value), {
              status: Sr.value,
              value: Zr.value
            })
          }
          return this._def.schema._parseAsync({
            data: Qr.data,
            path: Qr.path,
            parent: Qr
          }).then((Qr => "aborted" === Qr.status ? er : ("cU" === Qr.status && Sr.cU(), rr(Qr.value).then((() => ({
            status: Sr.value,
            value: Qr.value
          }))))))
        }
        if ("transform" === Zr.type) {
          if (!1 === Qr.common.async) {
            const rr = this._def.schema._parseSync({
              data: Qr.data,
              path: Qr.path,
              parent: Qr
            });
            if (!vr(rr)) return rr;
            const ar = Zr.transform(rr.value, Wr);
            if (ar instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: Sr.value,
              value: ar
            }
          }
          return this._def.schema._parseAsync({
            data: Qr.data,
            path: Qr.path,
            parent: Qr
          }).then((rr => vr(rr) ? Promise.resolve(Zr.transform(rr.value, Wr)).then((rr => ({
            status: Sr.value,
            value: rr
          }))) : rr))
        }
        Ir.assertNever(Zr)
      }
    }
    eS.create = (rr, Sr, Qr) => new eS({
      schema: rr,
      typeName: qS.ZodEffects,
      effect: Sr,
      ...Pr(Qr)
    }), eS.createWithPreprocess = (rr, Sr, Qr) => new eS({
      schema: Sr,
      effect: {
        type: "preprocess",
        transform: rr
      },
      typeName: qS.ZodEffects,
      ...Pr(Qr)
    });
    class KS extends Hr {
      _parse(rr) {
        return this._getType(rr) === pr.undefined ? yr(void 0) : this._def.innerType._parse(rr)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    KS.create = (rr, Sr) => new KS({
      innerType: rr,
      typeName: qS.ZodOptional,
      ...Pr(Sr)
    });
    class yS extends Hr {
      _parse(rr) {
        return this._getType(rr) === pr.null ? yr(null) : this._def.innerType._parse(rr)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    yS.create = (rr, Sr) => new yS({
      innerType: rr,
      typeName: qS.ZodNullable,
      ...Pr(Sr)
    });
    class BS extends Hr {
      _parse(rr) {
        const {
          ctx: Sr
        } = this._processInputParams(rr);
        let Qr = Sr.data;
        return Sr.parsedType === pr.undefined && (Qr = this._def.defaultValue()), this._def.innerType._parse({
          data: Qr,
          path: Sr.path,
          parent: Sr
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    BS.create = (rr, Sr) => new BS({
      innerType: rr,
      typeName: qS.ZodDefault,
      defaultValue: "function" === typeof Sr.default ? Sr.default : () => Sr.default,
      ...Pr(Sr)
    });
    class TS extends Hr {
      _parse(rr) {
        const {
          ctx: Sr
        } = this._processInputParams(rr), Qr = {
          ...Sr,
          common: {
            ...Sr.common,
            issues: []
          }
        }, Zr = this._def.innerType._parse({
          data: Qr.data,
          path: Qr.path,
          parent: {
            ...Qr
          }
        });
        return Or(Zr) ? Zr.then((rr => ({
          status: "valid",
          value: "valid" === rr.status ? rr.value : this._def.catchValue({
            get error() {
              return new Nr(Qr.common.issues)
            },
            input: Qr.data
          })
        }))) : {
          status: "valid",
          value: "valid" === Zr.status ? Zr.value : this._def.catchValue({
            get error() {
              return new Nr(Qr.common.issues)
            },
            input: Qr.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    TS.create = (rr, Sr) => new TS({
      innerType: rr,
      typeName: qS.ZodCatch,
      catchValue: "function" === typeof Sr.catch ? Sr.catch : () => Sr.catch,
      ...Pr(Sr)
    });
    class vS extends Hr {
      _parse(rr) {
        if (this._getType(rr) !== pr.nan) {
          const Sr = this._getOrReturnCtx(rr);
          return Yr(Sr, {
            code: mr.invalid_type,
            expected: pr.nan,
            received: Sr.parsedType
          }), er
        }
        return {
          status: "valid",
          value: rr.data
        }
      }
    }
    vS.create = rr => new vS({
      typeName: qS.ZodNaN,
      ...Pr(rr)
    });
    const OS = Symbol("zod_brand");
    class LS extends Hr {
      _parse(rr) {
        const {
          ctx: Sr
        } = this._processInputParams(rr), Qr = Sr.data;
        return this._def.type._parse({
          data: Qr,
          path: Sr.path,
          parent: Sr
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class lS extends Hr {
      _parse(rr) {
        const {
          status: Sr,
          ctx: Qr
        } = this._processInputParams(rr);
        if (Qr.common.async) {
          return (async () => {
            const rr = await this._def.in._parseAsync({
              data: Qr.data,
              path: Qr.path,
              parent: Qr
            });
            return "aborted" === rr.status ? er : "cU" === rr.status ? (Sr.cU(), Kr(rr.value)) : this._def.out._parseAsync({
              data: rr.value,
              path: Qr.path,
              parent: Qr
            })
          })()
        } {
          const rr = this._def.in._parseSync({
            data: Qr.data,
            path: Qr.path,
            parent: Qr
          });
          return "aborted" === rr.status ? er : "cU" === rr.status ? (Sr.cU(), {
            status: "cU",
            value: rr.value
          }) : this._def.out._parseSync({
            data: rr.value,
            path: Qr.path,
            parent: Qr
          })
        }
      }
      static create(rr, Sr) {
        return new lS({
          in: rr,
          out: Sr,
          typeName: qS.ZodPipeline
        })
      }
    }
    class XS extends Hr {
      _parse(rr) {
        const Sr = this._def.innerType._parse(rr);
        return vr(Sr) && (Sr.value = Object.freeze(Sr.value)), Sr
      }
    }
    XS.create = (rr, Sr) => new XS({
      innerType: rr,
      typeName: qS.ZodReadonly,
      ...Pr(Sr)
    });
    const PS = function(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        return rr ? dr.create().superRefine(((Zr, Wr) => {
          var ar, jr;
          if (!rr(Zr)) {
            const rr = "function" === typeof Sr ? Sr(Zr) : "string" === typeof Sr ? {
                message: Sr
              } : Sr,
              Ir = null === (jr = null !== (ar = rr.fatal) && void 0 !== ar ? ar : Qr) || void 0 === jr || jr,
              fr = "string" === typeof rr ? {
                message: rr
              } : rr;
            Wr.addIssue({
              code: "custom",
              ...fr,
              fatal: Ir
            })
          }
        })) : dr.create()
      },
      HS = {
        object: ZS.lazycreate
      };
    var qS;
    ! function(rr) {
      rr.ZodString = "ZodString", rr.ZodNumber = "ZodNumber", rr.ZodNaN = "ZodNaN", rr.ZodBigInt = "ZodBigInt", rr.ZodBoolean = "ZodBoolean", rr.ZodDate = "ZodDate", rr.ZodSymbol = "ZodSymbol", rr.ZodUndefined = "ZodUndefined", rr.ZodNull = "ZodNull", rr.ZodAny = "ZodAny", rr.ZodUnknown = "ZodUnknown", rr.ZodNever = "ZodNever", rr.ZodVoid = "ZodVoid", rr.ZodArray = "ZodArray", rr.ZodObject = "ZodObject", rr.ZodUnion = "ZodUnion", rr.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", rr.ZodIntersection = "ZodIntersection", rr.ZodTuple = "ZodTuple", rr.ZodRecord = "ZodRecord", rr.ZodMap = "ZodMap", rr.ZodSet = "ZodSet", rr.ZodFunction = "ZodFunction", rr.ZodLazy = "ZodLazy", rr.ZodLiteral = "ZodLiteral", rr.ZodEnum = "ZodEnum", rr.ZodEffects = "ZodEffects", rr.ZodNativeEnum = "ZodNativeEnum", rr.ZodOptional = "ZodOptional", rr.ZodNullable = "ZodNullable", rr.ZodDefault = "ZodDefault", rr.ZodCatch = "ZodCatch", rr.ZodPromise = "ZodPromise", rr.ZodBranded = "ZodBranded", rr.ZodPipeline = "ZodPipeline", rr.ZodReadonly = "ZodReadonly"
    }(qS || (qS = {}));
    const RS = Vr.create,
      gS = wr.create,
      CS = vS.create,
      MS = cr.create,
      GS = Fr.create,
      kS = or.create,
      AS = br.create,
      VS = Jr.create,
      iS = Dr.create,
      wS = dr.create,
      cS = sr.create,
      FS = ur.create,
      oS = rS.create,
      bS = SS.create,
      JS = ZS.create,
      DS = ZS.strictCreate,
      dS = WS.create,
      sS = jS.create,
      uS = fS.create,
      rQ = ES.create,
      SQ = pS.create,
      QQ = xS.create,
      ZQ = mS.create,
      WQ = NS.create,
      aQ = US.create,
      jQ = tS.create,
      IQ = zS.create,
      fQ = YS.create,
      EQ = nS.create,
      pQ = eS.create,
      xQ = KS.create,
      mQ = yS.create,
      NQ = eS.createWithPreprocess,
      UQ = lS.create,
      tQ = {
        string: rr => Vr.create({
          ...rr,
          coerce: !0
        }),
        number: rr => wr.create({
          ...rr,
          coerce: !0
        }),
        boolean: rr => Fr.create({
          ...rr,
          coerce: !0
        }),
        bigint: rr => cr.create({
          ...rr,
          coerce: !0
        }),
        date: rr => or.create({
          ...rr,
          coerce: !0
        })
      },
      hQ = er;
    var zQ = Object.freeze({
        __proto__: null,
        defaultErrorMap: Ur,
        setErrorMap: function(rr) {
          tr = rr
        },
        getErrorMap: hr,
        makeIssue: zr,
        EMPTY_PATH: [],
        addIssueToContext: Yr,
        ParseStatus: nr,
        INVALID: er,
        DIRTY: Kr,
        OK: yr,
        isAborted: Br,
        isDirty: Tr,
        isValid: vr,
        isAsync: Or,
        get util() {
          return Ir
        },
        get objectUtil() {
          return fr
        },
        ZodParsedType: pr,
        getParsedType: xr,
        ZodType: Hr,
        ZodString: Vr,
        ZodNumber: wr,
        ZodBigInt: cr,
        ZodBoolean: Fr,
        ZodDate: or,
        ZodSymbol: br,
        ZodUndefined: Jr,
        ZodNull: Dr,
        ZodAny: dr,
        ZodUnknown: sr,
        ZodNever: ur,
        ZodVoid: rS,
        ZodArray: SS,
        ZodObject: ZS,
        ZodUnion: WS,
        ZodDiscriminatedUnion: jS,
        ZodIntersection: fS,
        ZodTuple: ES,
        ZodRecord: pS,
        ZodMap: xS,
        ZodSet: mS,
        ZodFunction: NS,
        ZodLazy: US,
        ZodLiteral: tS,
        ZodEnum: zS,
        ZodNativeEnum: YS,
        ZodPromise: nS,
        ZodEffects: eS,
        ZodTransformer: eS,
        ZodOptional: KS,
        ZodNullable: yS,
        ZodDefault: BS,
        ZodCatch: TS,
        ZodNaN: vS,
        BRAND: OS,
        ZodBranded: LS,
        ZodPipeline: lS,
        ZodReadonly: XS,
        custom: PS,
        Schema: Hr,
        ZodSchema: Hr,
        late: HS,
        get ZodFirstPartyTypeKind() {
          return qS
        },
        coerce: tQ,
        any: wS,
        array: bS,
        bigint: MS,
        boolean: GS,
        date: kS,
        discriminatedUnion: sS,
        effect: pQ,
        enum: IQ,
        function: WQ,
        instanceof: function(rr) {
          let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${rr.name}`
          };
          return PS((Sr => Sr instanceof rr), Sr)
        },
        intersection: uS,
        lazy: aQ,
        literal: jQ,
        map: QQ,
        nan: CS,
        nativeEnum: fQ,
        never: FS,
        null: iS,
        nullable: mQ,
        number: gS,
        object: JS,
        oboolean: () => GS().optional(),
        onumber: () => gS().optional(),
        optional: xQ,
        ostring: () => RS().optional(),
        pipeline: UQ,
        preprocess: NQ,
        promise: EQ,
        record: SQ,
        set: ZQ,
        strictObject: DS,
        string: RS,
        symbol: AS,
        transformer: pQ,
        tuple: rQ,
        undefined: VS,
        union: dS,
        unknown: cS,
        void: oS,
        NEVER: hQ,
        ZodIssueCode: mr,
        quotelessJson: rr => JSON.stringify(rr, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: Nr
      }),
      YQ = {
        exports: {}
      };
    ! function(rr) {
      var Sr = function(rr) {
        var Qr = 1e7,
          Zr = 9007199254740992,
          Wr = mr(Zr),
          ar = "0123456789abcdefghijklmnopqrstuvwxyz",
          jr = "function" === typeof BigInt;

        function Ir(rr, Sr, Qr, Zr) {
          return "undefined" === typeof rr ? Ir[0] : "undefined" !== typeof Sr && (10 !== +Sr || Qr) ? Fr(rr, Sr, Qr, Zr) : dr(rr)
        }

        function fr(rr, Sr) {
          this.value = rr, this.sign = Sr, this.isSmall = !1
        }

        function Er(rr) {
          this.value = rr, this.sign = rr < 0, this.isSmall = !0
        }

        function pr(rr) {
          this.value = rr
        }

        function xr(rr) {
          return -Zr < rr && rr < Zr
        }

        function mr(rr) {
          return rr < 1e7 ? [rr] : rr < 1e14 ? [rr % 1e7, Math.floor(rr / 1e7)] : [rr % 1e7, Math.floor(rr / 1e7) % 1e7, Math.floor(rr / 1e14)]
        }

        function Nr(rr) {
          Ur(rr);
          var Sr = rr.length;
          if (Sr < 4 && Pr(rr, Wr) < 0) switch (Sr) {
            case 0:
              return 0;
            case 1:
              return rr[0];
            case 2:
              return rr[0] + rr[1] * Qr;
            default:
              return rr[0] + (rr[1] + rr[2] * Qr) * Qr
          }
          return rr
        }

        function Ur(rr) {
          for (var Sr = rr.length; 0 === rr[--Sr];);
          rr.length = Sr + 1
        }

        function tr(rr) {
          for (var Sr = new Array(rr), Qr = -1; ++Qr < rr;) Sr[Qr] = 0;
          return Sr
        }

        function hr(rr) {
          return rr > 0 ? Math.floor(rr) : Math.ceil(rr)
        }

        function zr(rr, Sr) {
          var Zr, Wr, ar = rr.length,
            jr = Sr.length,
            Ir = new Array(ar),
            fr = 0,
            Er = Qr;
          for (Wr = 0; Wr < jr; Wr++) fr = (Zr = rr[Wr] + Sr[Wr] + fr) >= Er ? 1 : 0, Ir[Wr] = Zr - fr * Er;
          for (; Wr < ar;) fr = (Zr = rr[Wr] + fr) === Er ? 1 : 0, Ir[Wr++] = Zr - fr * Er;
          return fr > 0 && Ir.push(fr), Ir
        }

        function Yr(rr, Sr) {
          return rr.length >= Sr.length ? zr(rr, Sr) : zr(Sr, rr)
        }

        function nr(rr, Sr) {
          var Zr, Wr, ar = rr.length,
            jr = new Array(ar),
            Ir = Qr;
          for (Wr = 0; Wr < ar; Wr++) Zr = rr[Wr] - Ir + Sr, Sr = Math.floor(Zr / Ir), jr[Wr] = Zr - Sr * Ir, Sr += 1;
          for (; Sr > 0;) jr[Wr++] = Sr % Ir, Sr = Math.floor(Sr / Ir);
          return jr
        }

        function er(rr, Sr) {
          var Zr, Wr, ar = rr.length,
            jr = Sr.length,
            Ir = new Array(ar),
            fr = 0,
            Er = Qr;
          for (Zr = 0; Zr < jr; Zr++)(Wr = rr[Zr] - fr - Sr[Zr]) < 0 ? (Wr += Er, fr = 1) : fr = 0, Ir[Zr] = Wr;
          for (Zr = jr; Zr < ar; Zr++) {
            if (!((Wr = rr[Zr] - fr) < 0)) {
              Ir[Zr++] = Wr;
              break
            }
            Wr += Er, Ir[Zr] = Wr
          }
          for (; Zr < ar; Zr++) Ir[Zr] = rr[Zr];
          return Ur(Ir), Ir
        }

        function Kr(rr, Sr, Zr) {
          var Wr, ar, jr = rr.length,
            Ir = new Array(jr),
            pr = -Sr,
            xr = Qr;
          for (Wr = 0; Wr < jr; Wr++) ar = rr[Wr] + pr, pr = Math.floor(ar / xr), ar %= xr, Ir[Wr] = ar < 0 ? ar + xr : ar;
          return "number" === typeof(Ir = Nr(Ir)) ? (Zr && (Ir = -Ir), new Er(Ir)) : new fr(Ir, Zr)
        }

        function yr(rr, Sr) {
          var Zr, Wr, ar, jr, Ir = rr.length,
            fr = Sr.length,
            Er = tr(Ir + fr),
            pr = Qr;
          for (ar = 0; ar < Ir; ++ar) {
            jr = rr[ar];
            for (var xr = 0; xr < fr; ++xr) Zr = jr * Sr[xr] + Er[ar + xr], Wr = Math.floor(Zr / pr), Er[ar + xr] = Zr - Wr * pr, Er[ar + xr + 1] += Wr
          }
          return Ur(Er), Er
        }

        function Br(rr, Sr) {
          var Zr, Wr, ar = rr.length,
            jr = new Array(ar),
            Ir = Qr,
            fr = 0;
          for (Wr = 0; Wr < ar; Wr++) Zr = rr[Wr] * Sr + fr, fr = Math.floor(Zr / Ir), jr[Wr] = Zr - fr * Ir;
          for (; fr > 0;) jr[Wr++] = fr % Ir, fr = Math.floor(fr / Ir);
          return jr
        }

        function Tr(rr, Sr) {
          for (var Qr = []; Sr-- > 0;) Qr.push(0);
          return Qr.concat(rr)
        }

        function vr(rr, Sr) {
          var Qr = Math.max(rr.length, Sr.length);
          if (Qr <= 30) return yr(rr, Sr);
          Qr = Math.ceil(Qr / 2);
          var Zr = rr.slice(Qr),
            Wr = rr.slice(0, Qr),
            ar = Sr.slice(Qr),
            jr = Sr.slice(0, Qr),
            Ir = vr(Wr, jr),
            fr = vr(Zr, ar),
            Er = vr(Yr(Wr, Zr), Yr(jr, ar)),
            pr = Yr(Yr(Ir, Tr(er(er(Er, Ir), fr), Qr)), Tr(fr, 2 * Qr));
          return Ur(pr), pr
        }

        function Or(rr, Sr, Zr) {
          return new fr(rr < Qr ? Br(Sr, rr) : yr(Sr, mr(rr)), Zr)
        }

        function Lr(rr) {
          var Sr, Zr, Wr, ar, jr = rr.length,
            Ir = tr(jr + jr),
            fr = Qr;
          for (Wr = 0; Wr < jr; Wr++) {
            Zr = 0 - (ar = rr[Wr]) * ar;
            for (var Er = Wr; Er < jr; Er++) Sr = ar * rr[Er] * 2 + Ir[Wr + Er] + Zr, Zr = Math.floor(Sr / fr), Ir[Wr + Er] = Sr - Zr * fr;
            Ir[Wr + jr] = Zr
          }
          return Ur(Ir), Ir
        }

        function lr(rr, Sr) {
          var Zr, Wr, ar, jr, Ir = rr.length,
            fr = tr(Ir),
            Er = Qr;
          for (ar = 0, Zr = Ir - 1; Zr >= 0; --Zr) ar = (jr = ar * Er + rr[Zr]) - (Wr = hr(jr / Sr)) * Sr, fr[Zr] = 0 | Wr;
          return [fr, 0 | ar]
        }

        function Xr(rr, Sr) {
          var Zr, Wr = dr(Sr);
          if (jr) return [new pr(rr.value / Wr.value), new pr(rr.value % Wr.value)];
          var ar, xr = rr.value,
            zr = Wr.value;
          if (0 === zr) throw new Error("Cannot divide by zero");
          if (rr.isSmall) return Wr.isSmall ? [new Er(hr(xr / zr)), new Er(xr % zr)] : [Ir[0], rr];
          if (Wr.isSmall) {
            if (1 === zr) return [rr, Ir[0]];
            if (-1 == zr) return [rr.ph(), Ir[0]];
            var Yr = Math.abs(zr);
            if (Yr < Qr) {
              ar = Nr((Zr = lr(xr, Yr))[0]);
              var nr = Zr[1];
              return rr.sign && (nr = -nr), "number" === typeof ar ? (rr.sign !== Wr.sign && (ar = -ar), [new Er(ar), new Er(nr)]) : [new fr(ar, rr.sign !== Wr.sign), new Er(nr)]
            }
            zr = mr(Yr)
          }
          var Kr = Pr(xr, zr);
          if (-1 === Kr) return [Ir[0], rr];
          if (0 === Kr) return [Ir[rr.sign === Wr.sign ? 1 : -1], Ir[0]];
          Zr = xr.length + zr.length <= 200 ? function(rr, Sr) {
            var Zr, Wr, ar, jr, Ir, fr, Er, pr = rr.length,
              xr = Sr.length,
              mr = Qr,
              Ur = tr(Sr.length),
              hr = Sr[xr - 1],
              zr = Math.ceil(mr / (2 * hr)),
              Yr = Br(rr, zr),
              nr = Br(Sr, zr);
            for (Yr.length <= pr && Yr.push(0), nr.push(0), hr = nr[xr - 1], Wr = pr - xr; Wr >= 0; Wr--) {
              for (Zr = mr - 1, Yr[Wr + xr] !== hr && (Zr = Math.floor((Yr[Wr + xr] * mr + Yr[Wr + xr - 1]) / hr)), ar = 0, jr = 0, fr = nr.length, Ir = 0; Ir < fr; Ir++) ar += Zr * nr[Ir], Er = Math.floor(ar / mr), jr += Yr[Wr + Ir] - (ar - Er * mr), ar = Er, jr < 0 ? (Yr[Wr + Ir] = jr + mr, jr = -1) : (Yr[Wr + Ir] = jr, jr = 0);
              for (; 0 !== jr;) {
                for (Zr -= 1, ar = 0, Ir = 0; Ir < fr; Ir++)(ar += Yr[Wr + Ir] - mr + nr[Ir]) < 0 ? (Yr[Wr + Ir] = ar + mr, ar = 0) : (Yr[Wr + Ir] = ar, ar = 1);
                jr += ar
              }
              Ur[Wr] = Zr
            }
            return Yr = lr(Yr, zr)[0], [Nr(Ur), Nr(Yr)]
          }(xr, zr) : function(rr, Sr) {
            for (var Zr, Wr, ar, jr, Ir, fr = rr.length, Er = Sr.length, pr = [], xr = [], mr = Qr; fr;)
              if (xr.unshift(rr[--fr]), Ur(xr), Pr(xr, Sr) < 0) pr.push(0);
              else {
                ar = xr[(Wr = xr.length) - 1] * mr + xr[Wr - 2], jr = Sr[Er - 1] * mr + Sr[Er - 2], Wr > Er && (ar = (ar + 1) * mr), Zr = Math.ceil(ar / jr);
                do {
                  if (Pr(Ir = Br(Sr, Zr), xr) <= 0) break;
                  Zr--
                } while (Zr);
                pr.push(Zr), xr = er(xr, Ir)
              } return pr.reverse(), [Nr(pr), Nr(xr)]
          }(xr, zr), ar = Zr[0];
          var yr = rr.sign !== Wr.sign,
            Tr = Zr[1],
            vr = rr.sign;
          return "number" === typeof ar ? (yr && (ar = -ar), ar = new Er(ar)) : ar = new fr(ar, yr), "number" === typeof Tr ? (vr && (Tr = -Tr), Tr = new Er(Tr)) : Tr = new fr(Tr, vr), [ar, Tr]
        }

        function Pr(rr, Sr) {
          if (rr.length !== Sr.length) return rr.length > Sr.length ? 1 : -1;
          for (var Qr = rr.length - 1; Qr >= 0; Qr--)
            if (rr[Qr] !== Sr[Qr]) return rr[Qr] > Sr[Qr] ? 1 : -1;
          return 0
        }

        function Hr(rr) {
          var Sr = rr.abs();
          return !Sr.isUnit() && (!!(Sr.equals(2) || Sr.equals(3) || Sr.equals(5)) || !(Sr.isEven() || Sr.isDivisibleBy(3) || Sr.isDivisibleBy(5)) && (!!Sr.lesser(49) || void 0))
        }

        function qr(rr, Qr) {
          for (var Zr, Wr, ar, jr = rr.prev(), Ir = jr, fr = 0; Ir.isEven();) Ir = Ir.divide(2), fr++;
          rr: for (Wr = 0; Wr < Qr.length; Wr++)
            if (!rr.lesser(Qr[Wr]) && !(ar = Sr(Qr[Wr]).modPow(Ir, rr)).isUnit() && !ar.equals(jr)) {
              for (Zr = fr - 1; 0 != Zr; Zr--) {
                if ((ar = ar.square().mod(rr)).isUnit()) return !1;
                if (ar.equals(jr)) continue rr
              }
              return !1
            }
          return !0
        }
        fr.prototype = Object.create(Ir.prototype), Er.prototype = Object.create(Ir.prototype), pr.prototype = Object.create(Ir.prototype), fr.prototype.add = function(rr) {
          var Sr = dr(rr);
          if (this.sign !== Sr.sign) return this.subtract(Sr.ph());
          var Qr = this.value,
            Zr = Sr.value;
          return Sr.isSmall ? new fr(nr(Qr, Math.abs(Zr)), this.sign) : new fr(Yr(Qr, Zr), this.sign)
        }, fr.prototype.plus = fr.prototype.add, Er.prototype.add = function(rr) {
          var Sr = dr(rr),
            Qr = this.value;
          if (Qr < 0 !== Sr.sign) return this.subtract(Sr.ph());
          var Zr = Sr.value;
          if (Sr.isSmall) {
            if (xr(Qr + Zr)) return new Er(Qr + Zr);
            Zr = mr(Math.abs(Zr))
          }
          return new fr(nr(Zr, Math.abs(Qr)), Qr < 0)
        }, Er.prototype.plus = Er.prototype.add, pr.prototype.add = function(rr) {
          return new pr(this.value + dr(rr).value)
        }, pr.prototype.plus = pr.prototype.add, fr.prototype.subtract = function(rr) {
          var Sr = dr(rr);
          if (this.sign !== Sr.sign) return this.add(Sr.ph());
          var Qr = this.value,
            Zr = Sr.value;
          return Sr.isSmall ? Kr(Qr, Math.abs(Zr), this.sign) : function(rr, Sr, Qr) {
            var Zr;
            return Pr(rr, Sr) >= 0 ? Zr = er(rr, Sr) : (Zr = er(Sr, rr), Qr = !Qr), "number" === typeof(Zr = Nr(Zr)) ? (Qr && (Zr = -Zr), new Er(Zr)) : new fr(Zr, Qr)
          }(Qr, Zr, this.sign)
        }, fr.prototype.minus = fr.prototype.subtract, Er.prototype.subtract = function(rr) {
          var Sr = dr(rr),
            Qr = this.value;
          if (Qr < 0 !== Sr.sign) return this.add(Sr.ph());
          var Zr = Sr.value;
          return Sr.isSmall ? new Er(Qr - Zr) : Kr(Zr, Math.abs(Qr), Qr >= 0)
        }, Er.prototype.minus = Er.prototype.subtract, pr.prototype.subtract = function(rr) {
          return new pr(this.value - dr(rr).value)
        }, pr.prototype.minus = pr.prototype.subtract, fr.prototype.ph = function() {
          return new fr(this.value, !this.sign)
        }, Er.prototype.ph = function() {
          var rr = this.sign,
            Sr = new Er(-this.value);
          return Sr.sign = !rr, Sr
        }, pr.prototype.ph = function() {
          return new pr(-this.value)
        }, fr.prototype.abs = function() {
          return new fr(this.value, !1)
        }, Er.prototype.abs = function() {
          return new Er(Math.abs(this.value))
        }, pr.prototype.abs = function() {
          return new pr(this.value >= 0 ? this.value : -this.value)
        }, fr.prototype.multiply = function(rr) {
          var Sr, Zr, Wr, ar = dr(rr),
            jr = this.value,
            Er = ar.value,
            pr = this.sign !== ar.sign;
          if (ar.isSmall) {
            if (0 === Er) return Ir[0];
            if (1 === Er) return this;
            if (-1 === Er) return this.ph();
            if ((Sr = Math.abs(Er)) < Qr) return new fr(Br(jr, Sr), pr);
            Er = mr(Sr)
          }
          return Zr = jr.length, Wr = Er.length, new fr(-.012 * Zr - .012 * Wr + 15e-6 * Zr * Wr > 0 ? vr(jr, Er) : yr(jr, Er), pr)
        }, fr.prototype.times = fr.prototype.multiply, Er.prototype._multiplyBySmall = function(rr) {
          return xr(rr.value * this.value) ? new Er(rr.value * this.value) : Or(Math.abs(rr.value), mr(Math.abs(this.value)), this.sign !== rr.sign)
        }, fr.prototype._multiplyBySmall = function(rr) {
          return 0 === rr.value ? Ir[0] : 1 === rr.value ? this : -1 === rr.value ? this.ph() : Or(Math.abs(rr.value), this.value, this.sign !== rr.sign)
        }, Er.prototype.multiply = function(rr) {
          return dr(rr)._multiplyBySmall(this)
        }, Er.prototype.times = Er.prototype.multiply, pr.prototype.multiply = function(rr) {
          return new pr(this.value * dr(rr).value)
        }, pr.prototype.times = pr.prototype.multiply, fr.prototype.square = function() {
          return new fr(Lr(this.value), !1)
        }, Er.prototype.square = function() {
          var rr = this.value * this.value;
          return xr(rr) ? new Er(rr) : new fr(Lr(mr(Math.abs(this.value))), !1)
        }, pr.prototype.square = function(rr) {
          return new pr(this.value * this.value)
        }, fr.prototype.divmod = function(rr) {
          var Sr = Xr(this, rr);
          return {
            quotient: Sr[0],
            remainder: Sr[1]
          }
        }, pr.prototype.divmod = Er.prototype.divmod = fr.prototype.divmod, fr.prototype.divide = function(rr) {
          return Xr(this, rr)[0]
        }, pr.prototype.over = pr.prototype.divide = function(rr) {
          return new pr(this.value / dr(rr).value)
        }, Er.prototype.over = Er.prototype.divide = fr.prototype.over = fr.prototype.divide, fr.prototype.mod = function(rr) {
          return Xr(this, rr)[1]
        }, pr.prototype.mod = pr.prototype.remainder = function(rr) {
          return new pr(this.value % dr(rr).value)
        }, Er.prototype.remainder = Er.prototype.mod = fr.prototype.remainder = fr.prototype.mod, fr.prototype.pow = function(rr) {
          var Sr, Qr, Zr, Wr = dr(rr),
            ar = this.value,
            jr = Wr.value;
          if (0 === jr) return Ir[1];
          if (0 === ar) return Ir[0];
          if (1 === ar) return Ir[1];
          if (-1 === ar) return Wr.isEven() ? Ir[1] : Ir[-1];
          if (Wr.sign) return Ir[0];
          if (!Wr.isSmall) throw new Error("The exponent " + Wr.toString() + " is too large.");
          if (this.isSmall && xr(Sr = Math.pow(ar, jr))) return new Er(hr(Sr));
          for (Qr = this, Zr = Ir[1]; !0 & jr && (Zr = Zr.times(Qr), --jr), 0 !== jr;) jr /= 2, Qr = Qr.square();
          return Zr
        }, Er.prototype.pow = fr.prototype.pow, pr.prototype.pow = function(rr) {
          var Sr = dr(rr),
            Qr = this.value,
            Zr = Sr.value,
            Wr = BigInt(0),
            ar = BigInt(1),
            jr = BigInt(2);
          if (Zr === Wr) return Ir[1];
          if (Qr === Wr) return Ir[0];
          if (Qr === ar) return Ir[1];
          if (Qr === BigInt(-1)) return Sr.isEven() ? Ir[1] : Ir[-1];
          if (Sr.isNegative()) return new pr(Wr);
          for (var fr = this, Er = Ir[1];
            (Zr & ar) === ar && (Er = Er.times(fr), --Zr), Zr !== Wr;) Zr /= jr, fr = fr.square();
          return Er
        }, fr.prototype.modPow = function(rr, Sr) {
          if (rr = dr(rr), (Sr = dr(Sr)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var Qr = Ir[1],
            Zr = this.mod(Sr);
          for (rr.isNegative() && (rr = rr.multiply(Ir[-1]), Zr = Zr.modInv(Sr)); rr.isPositive();) {
            if (Zr.isZero()) return Ir[0];
            rr.isOdd() && (Qr = Qr.multiply(Zr).mod(Sr)), rr = rr.divide(2), Zr = Zr.square().mod(Sr)
          }
          return Qr
        }, pr.prototype.modPow = Er.prototype.modPow = fr.prototype.modPow, fr.prototype.compareAbs = function(rr) {
          var Sr = dr(rr),
            Qr = this.value,
            Zr = Sr.value;
          return Sr.isSmall ? 1 : Pr(Qr, Zr)
        }, Er.prototype.compareAbs = function(rr) {
          var Sr = dr(rr),
            Qr = Math.abs(this.value),
            Zr = Sr.value;
          return Sr.isSmall ? Qr === (Zr = Math.abs(Zr)) ? 0 : Qr > Zr ? 1 : -1 : -1
        }, pr.prototype.compareAbs = function(rr) {
          var Sr = this.value,
            Qr = dr(rr).value;
          return (Sr = Sr >= 0 ? Sr : -Sr) === (Qr = Qr >= 0 ? Qr : -Qr) ? 0 : Sr > Qr ? 1 : -1
        }, fr.prototype.compare = function(rr) {
          if (rr === 1 / 0) return -1;
          if (rr === -1 / 0) return 1;
          var Sr = dr(rr),
            Qr = this.value,
            Zr = Sr.value;
          return this.sign !== Sr.sign ? Sr.sign ? 1 : -1 : Sr.isSmall ? this.sign ? -1 : 1 : Pr(Qr, Zr) * (this.sign ? -1 : 1)
        }, fr.prototype.compareTo = fr.prototype.compare, Er.prototype.compare = function(rr) {
          if (rr === 1 / 0) return -1;
          if (rr === -1 / 0) return 1;
          var Sr = dr(rr),
            Qr = this.value,
            Zr = Sr.value;
          return Sr.isSmall ? Qr == Zr ? 0 : Qr > Zr ? 1 : -1 : Qr < 0 !== Sr.sign ? Qr < 0 ? -1 : 1 : Qr < 0 ? 1 : -1
        }, Er.prototype.compareTo = Er.prototype.compare, pr.prototype.compare = function(rr) {
          if (rr === 1 / 0) return -1;
          if (rr === -1 / 0) return 1;
          var Sr = this.value,
            Qr = dr(rr).value;
          return Sr === Qr ? 0 : Sr > Qr ? 1 : -1
        }, pr.prototype.compareTo = pr.prototype.compare, fr.prototype.equals = function(rr) {
          return 0 === this.compare(rr)
        }, pr.prototype.eq = pr.prototype.equals = Er.prototype.eq = Er.prototype.equals = fr.prototype.eq = fr.prototype.equals, fr.prototype.notEquals = function(rr) {
          return 0 !== this.compare(rr)
        }, pr.prototype.neq = pr.prototype.notEquals = Er.prototype.neq = Er.prototype.notEquals = fr.prototype.neq = fr.prototype.notEquals, fr.prototype.greater = function(rr) {
          return this.compare(rr) > 0
        }, pr.prototype.gt = pr.prototype.greater = Er.prototype.gt = Er.prototype.greater = fr.prototype.gt = fr.prototype.greater, fr.prototype.lesser = function(rr) {
          return this.compare(rr) < 0
        }, pr.prototype.lt = pr.prototype.lesser = Er.prototype.lt = Er.prototype.lesser = fr.prototype.lt = fr.prototype.lesser, fr.prototype.greaterOrEquals = function(rr) {
          return this.compare(rr) >= 0
        }, pr.prototype.geq = pr.prototype.greaterOrEquals = Er.prototype.geq = Er.prototype.greaterOrEquals = fr.prototype.geq = fr.prototype.greaterOrEquals, fr.prototype.lesserOrEquals = function(rr) {
          return this.compare(rr) <= 0
        }, pr.prototype.leq = pr.prototype.lesserOrEquals = Er.prototype.leq = Er.prototype.lesserOrEquals = fr.prototype.leq = fr.prototype.lesserOrEquals, fr.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, Er.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, pr.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, fr.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, Er.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, pr.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, fr.prototype.isPositive = function() {
          return !this.sign
        }, Er.prototype.isPositive = function() {
          return this.value > 0
        }, pr.prototype.isPositive = Er.prototype.isPositive, fr.prototype.isNegative = function() {
          return this.sign
        }, Er.prototype.isNegative = function() {
          return this.value < 0
        }, pr.prototype.isNegative = Er.prototype.isNegative, fr.prototype.isUnit = function() {
          return !1
        }, Er.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, pr.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, fr.prototype.isZero = function() {
          return !1
        }, Er.prototype.isZero = function() {
          return 0 === this.value
        }, pr.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, fr.prototype.isDivisibleBy = function(rr) {
          var Sr = dr(rr);
          return !Sr.isZero() && (!!Sr.isUnit() || (0 === Sr.compareAbs(2) ? this.isEven() : this.mod(Sr).isZero()))
        }, pr.prototype.isDivisibleBy = Er.prototype.isDivisibleBy = fr.prototype.isDivisibleBy, fr.prototype.isPrime = function(Qr) {
          var Zr = Hr(this);
          if (Zr !== rr) return Zr;
          var Wr = this.abs(),
            ar = Wr.bitLength();
          if (ar <= 64) return qr(Wr, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var jr = Math.log(2) * ar.toJSNumber(), Ir = Math.ceil(!0 === Qr ? 2 * Math.pow(jr, 2) : jr), fr = [], Er = 0; Er < Ir; Er++) fr.push(Sr(Er + 2));
          return qr(Wr, fr)
        }, pr.prototype.isPrime = Er.prototype.isPrime = fr.prototype.isPrime, fr.prototype.isProbablePrime = function(Qr, Zr) {
          var Wr = Hr(this);
          if (Wr !== rr) return Wr;
          for (var ar = this.abs(), jr = Qr === rr ? 5 : Qr, Ir = [], fr = 0; fr < jr; fr++) Ir.push(Sr.randBetween(2, ar.minus(2), Zr));
          return qr(ar, Ir)
        }, pr.prototype.isProbablePrime = Er.prototype.isProbablePrime = fr.prototype.isProbablePrime, fr.prototype.modInv = function(rr) {
          for (var Qr, Zr, Wr, ar = Sr.zero, jr = Sr.one, Ir = dr(rr), fr = this.abs(); !fr.isZero();) Qr = Ir.divide(fr), Zr = ar, Wr = Ir, ar = jr, Ir = fr, jr = Zr.subtract(Qr.multiply(jr)), fr = Wr.subtract(Qr.multiply(fr));
          if (!Ir.isUnit()) throw new Error(this.toString() + " and " + rr.toString() + " are not co-prime");
          return -1 === ar.compare(0) && (ar = ar.add(rr)), this.isNegative() ? ar.ph() : ar
        }, pr.prototype.modInv = Er.prototype.modInv = fr.prototype.modInv, fr.prototype.next = function() {
          var rr = this.value;
          return this.sign ? Kr(rr, 1, this.sign) : new fr(nr(rr, 1), this.sign)
        }, Er.prototype.next = function() {
          var rr = this.value;
          return rr + 1 < Zr ? new Er(rr + 1) : new fr(Wr, !1)
        }, pr.prototype.next = function() {
          return new pr(this.value + BigInt(1))
        }, fr.prototype.prev = function() {
          var rr = this.value;
          return this.sign ? new fr(nr(rr, 1), !0) : Kr(rr, 1, this.sign)
        }, Er.prototype.prev = function() {
          var rr = this.value;
          return rr - 1 > -Zr ? new Er(rr - 1) : new fr(Wr, !0)
        }, pr.prototype.prev = function() {
          return new pr(this.value - BigInt(1))
        };
        for (var Rr = [1]; 2 * Rr[Rr.length - 1] <= Qr;) Rr.push(2 * Rr[Rr.length - 1]);
        var gr = Rr.length,
          Cr = Rr[gr - 1];

        function Mr(rr) {
          return Math.abs(rr) <= Qr
        }

        function Gr(rr, Qr, Zr) {
          Qr = dr(Qr);
          for (var Wr = rr.isNegative(), ar = Qr.isNegative(), jr = Wr ? rr.not() : rr, Ir = ar ? Qr.not() : Qr, fr = 0, Er = 0, pr = null, xr = null, mr = []; !jr.isZero() || !Ir.isZero();) fr = (pr = Xr(jr, Cr))[1].toJSNumber(), Wr && (fr = Cr - 1 - fr), Er = (xr = Xr(Ir, Cr))[1].toJSNumber(), ar && (Er = Cr - 1 - Er), jr = pr[0], Ir = xr[0], mr.push(Zr(fr, Er));
          for (var Nr = 0 !== Zr(Wr ? 1 : 0, ar ? 1 : 0) ? Sr(-1) : Sr(0), Ur = mr.length - 1; Ur >= 0; Ur -= 1) Nr = Nr.multiply(Cr).add(Sr(mr[Ur]));
          return Nr
        }
        fr.prototype.shiftLeft = function(rr) {
          var Sr = dr(rr).toJSNumber();
          if (!Mr(Sr)) throw new Error(String(Sr) + " is too large for shifting.");
          if (Sr < 0) return this.shiftRight(-Sr);
          var Qr = this;
          if (Qr.isZero()) return Qr;
          for (; Sr >= gr;) Qr = Qr.multiply(Cr), Sr -= gr - 1;
          return Qr.multiply(Rr[Sr])
        }, pr.prototype.shiftLeft = Er.prototype.shiftLeft = fr.prototype.shiftLeft, fr.prototype.shiftRight = function(rr) {
          var Sr, Qr = dr(rr).toJSNumber();
          if (!Mr(Qr)) throw new Error(String(Qr) + " is too large for shifting.");
          if (Qr < 0) return this.shiftLeft(-Qr);
          for (var Zr = this; Qr >= gr;) {
            if (Zr.isZero() || Zr.isNegative() && Zr.isUnit()) return Zr;
            Zr = (Sr = Xr(Zr, Cr))[1].isNegative() ? Sr[0].prev() : Sr[0], Qr -= gr - 1
          }
          return (Sr = Xr(Zr, Rr[Qr]))[1].isNegative() ? Sr[0].prev() : Sr[0]
        }, pr.prototype.shiftRight = Er.prototype.shiftRight = fr.prototype.shiftRight, fr.prototype.not = function() {
          return this.ph().prev()
        }, pr.prototype.not = Er.prototype.not = fr.prototype.not, fr.prototype.and = function(rr) {
          return Gr(this, rr, (function(rr, Sr) {
            return rr & Sr
          }))
        }, pr.prototype.and = Er.prototype.and = fr.prototype.and, fr.prototype.or = function(rr) {
          return Gr(this, rr, (function(rr, Sr) {
            return rr | Sr
          }))
        }, pr.prototype.or = Er.prototype.or = fr.prototype.or, fr.prototype.xor = function(rr) {
          return Gr(this, rr, (function(rr, Sr) {
            return rr ^ Sr
          }))
        }, pr.prototype.xor = Er.prototype.xor = fr.prototype.xor;
        var kr = 1 << 30;

        function Ar(rr) {
          var Sr = rr.value,
            Zr = "number" === typeof Sr ? Sr | kr : "bigint" === typeof Sr ? Sr | BigInt(kr) : Sr[0] + Sr[1] * Qr | 1073758208;
          return Zr & -Zr
        }

        function Vr(rr, Qr) {
          if (Qr.compareTo(rr) <= 0) {
            var Zr = Vr(rr, Qr.square(Qr)),
              Wr = Zr.p,
              ar = Zr.e,
              jr = Wr.multiply(Qr);
            return jr.compareTo(rr) <= 0 ? {
              p: jr,
              e: 2 * ar + 1
            } : {
              p: Wr,
              e: 2 * ar
            }
          }
          return {
            p: Sr(1),
            e: 0
          }
        }

        function ir(rr, Sr) {
          return rr = dr(rr), Sr = dr(Sr), rr.greater(Sr) ? rr : Sr
        }

        function wr(rr, Sr) {
          return rr = dr(rr), Sr = dr(Sr), rr.lesser(Sr) ? rr : Sr
        }

        function cr(rr, Sr) {
          if (rr = dr(rr).abs(), Sr = dr(Sr).abs(), rr.equals(Sr)) return rr;
          if (rr.isZero()) return Sr;
          if (Sr.isZero()) return rr;
          for (var Qr, Zr, Wr = Ir[1]; rr.isEven() && Sr.isEven();) Qr = wr(Ar(rr), Ar(Sr)), rr = rr.divide(Qr), Sr = Sr.divide(Qr), Wr = Wr.multiply(Qr);
          for (; rr.isEven();) rr = rr.divide(Ar(rr));
          do {
            for (; Sr.isEven();) Sr = Sr.divide(Ar(Sr));
            rr.greater(Sr) && (Zr = Sr, Sr = rr, rr = Zr), Sr = Sr.subtract(rr)
          } while (!Sr.isZero());
          return Wr.isUnit() ? rr : rr.multiply(Wr)
        }
        fr.prototype.bitLength = function() {
          var rr = this;
          return rr.compareTo(Sr(0)) < 0 && (rr = rr.ph().subtract(Sr(1))), 0 === rr.compareTo(Sr(0)) ? Sr(0) : Sr(Vr(rr, Sr(2)).e).add(Sr(1))
        }, pr.prototype.bitLength = Er.prototype.bitLength = fr.prototype.bitLength;
        var Fr = function(rr, Sr, Qr, Zr) {
          Qr = Qr || ar, rr = String(rr), Zr || (rr = rr.toLowerCase(), Qr = Qr.toLowerCase());
          var Wr, jr = rr.length,
            Ir = Math.abs(Sr),
            fr = {};
          for (Wr = 0; Wr < Qr.length; Wr++) fr[Qr[Wr]] = Wr;
          for (Wr = 0; Wr < jr; Wr++) {
            if ("-" !== (xr = rr[Wr]) && (xr in fr && fr[xr] >= Ir)) {
              if ("1" === xr && 1 === Ir) continue;
              throw new Error(xr + " is not a valid digit in base " + Sr + ".")
            }
          }
          Sr = dr(Sr);
          var Er = [],
            pr = "-" === rr[0];
          for (Wr = pr ? 1 : 0; Wr < rr.length; Wr++) {
            var xr;
            if ((xr = rr[Wr]) in fr) Er.push(dr(fr[xr]));
            else {
              if ("<" !== xr) throw new Error(xr + " is not a valid character");
              var mr = Wr;
              do {
                Wr++
              } while (">" !== rr[Wr] && Wr < rr.length);
              Er.push(dr(rr.slice(mr + 1, Wr)))
            }
          }
          return or(Er, Sr, pr)
        };

        function or(rr, Sr, Qr) {
          var Zr, Wr = Ir[0],
            ar = Ir[1];
          for (Zr = rr.length - 1; Zr >= 0; Zr--) Wr = Wr.add(rr[Zr].times(ar)), ar = ar.times(Sr);
          return Qr ? Wr.ph() : Wr
        }

        function br(rr, Qr) {
          if ((Qr = Sr(Qr)).isZero()) {
            if (rr.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (Qr.equals(-1)) {
            if (rr.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (rr.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-rr.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var Zr = Array.apply(null, Array(rr.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return Zr.unshift([1]), {
              value: [].concat.apply([], Zr),
              isNegative: !1
            }
          }
          var Wr = !1;
          if (rr.isNegative() && Qr.isPositive() && (Wr = !0, rr = rr.abs()), Qr.isUnit()) return rr.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(rr.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: Wr
          };
          for (var ar, jr = [], Ir = rr; Ir.isNegative() || Ir.compareAbs(Qr) >= 0;) {
            ar = Ir.divmod(Qr), Ir = ar.quotient;
            var fr = ar.remainder;
            fr.isNegative() && (fr = Qr.minus(fr).abs(), Ir = Ir.next()), jr.push(fr.toJSNumber())
          }
          return jr.push(Ir.toJSNumber()), {
            value: jr.reverse(),
            isNegative: Wr
          }
        }

        function Jr(rr, Sr, Qr) {
          var Zr = br(rr, Sr);
          return (Zr.isNegative ? "-" : "") + Zr.value.map((function(rr) {
            return function(rr, Sr) {
              return rr < (Sr = Sr || ar).length ? Sr[rr] : "<" + rr + ">"
            }(rr, Qr)
          })).join("")
        }

        function Dr(rr) {
          if (xr(+rr)) {
            var Sr = +rr;
            if (Sr === hr(Sr)) return jr ? new pr(BigInt(Sr)) : new Er(Sr);
            throw new Error("Invalid integer: " + rr)
          }
          var Qr = "-" === rr[0];
          Qr && (rr = rr.slice(1));
          var Zr = rr.split(/e/i);
          if (Zr.length > 2) throw new Error("Invalid integer: " + Zr.join("e"));
          if (2 === Zr.length) {
            var Wr = Zr[1];
            if ("+" === Wr[0] && (Wr = Wr.slice(1)), (Wr = +Wr) !== hr(Wr) || !xr(Wr)) throw new Error("Invalid integer: " + Wr + " is not a valid exponent.");
            var ar = Zr[0],
              Ir = ar.indexOf(".");
            if (Ir >= 0 && (Wr -= ar.length - Ir - 1, ar = ar.slice(0, Ir) + ar.slice(Ir + 1)), Wr < 0) throw new Error("Cannot include negative exponent part for integers");
            rr = ar += new Array(Wr + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(rr)) throw new Error("Invalid integer: " + rr);
          if (jr) return new pr(BigInt(Qr ? "-" + rr : rr));
          for (var mr = [], Nr = rr.length, tr = Nr - 7; Nr > 0;) mr.push(+rr.slice(tr, Nr)), (tr -= 7) < 0 && (tr = 0), Nr -= 7;
          return Ur(mr), new fr(mr, Qr)
        }

        function dr(rr) {
          return "number" === typeof rr ? function(rr) {
            if (jr) return new pr(BigInt(rr));
            if (xr(rr)) {
              if (rr !== hr(rr)) throw new Error(rr + " is not an integer.");
              return new Er(rr)
            }
            return Dr(rr.toString())
          }(rr) : "string" === typeof rr ? Dr(rr) : "bigint" === typeof rr ? new pr(rr) : rr
        }
        fr.prototype.toArray = function(rr) {
          return br(this, rr)
        }, Er.prototype.toArray = function(rr) {
          return br(this, rr)
        }, pr.prototype.toArray = function(rr) {
          return br(this, rr)
        }, fr.prototype.toString = function(Sr, Qr) {
          if (Sr === rr && (Sr = 10), 10 !== Sr) return Jr(this, Sr, Qr);
          for (var Zr, Wr = this.value, ar = Wr.length, jr = String(Wr[--ar]); --ar >= 0;) Zr = String(Wr[ar]), jr += "0000000".slice(Zr.length) + Zr;
          return (this.sign ? "-" : "") + jr
        }, Er.prototype.toString = function(Sr, Qr) {
          return Sr === rr && (Sr = 10), 10 != Sr ? Jr(this, Sr, Qr) : String(this.value)
        }, pr.prototype.toString = Er.prototype.toString, pr.prototype.toJSON = fr.prototype.toJSON = Er.prototype.toJSON = function() {
          return this.toString()
        }, fr.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, fr.prototype.toJSNumber = fr.prototype.valueOf, Er.prototype.valueOf = function() {
          return this.value
        }, Er.prototype.toJSNumber = Er.prototype.valueOf, pr.prototype.valueOf = pr.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var sr = 0; sr < 1e3; sr++) Ir[sr] = dr(sr), sr > 0 && (Ir[-sr] = dr(-sr));
        return Ir.one = Ir[1], Ir.zero = Ir[0], Ir.minusOne = Ir[-1], Ir.max = ir, Ir.min = wr, Ir.gcd = cr, Ir.lcm = function(rr, Sr) {
          return rr = dr(rr).abs(), Sr = dr(Sr).abs(), rr.divide(cr(rr, Sr)).multiply(Sr)
        }, Ir.isInstance = function(rr) {
          return rr instanceof fr || rr instanceof Er || rr instanceof pr
        }, Ir.randBetween = function(rr, Sr, Zr) {
          rr = dr(rr), Sr = dr(Sr);
          var Wr = Zr || Math.random,
            ar = wr(rr, Sr),
            jr = ir(rr, Sr).subtract(ar).add(1);
          if (jr.isSmall) return ar.add(Math.floor(Wr() * jr));
          for (var fr = br(jr, Qr).value, Er = [], pr = !0, xr = 0; xr < fr.length; xr++) {
            var mr = pr ? fr[xr] : Qr,
              Nr = hr(Wr() * mr);
            Er.push(Nr), Nr < mr && (pr = !1)
          }
          return ar.add(Ir.dp(Er, Qr, !1))
        }, Ir.dp = function(rr, Sr, Qr) {
          return or(rr.map(dr), dr(Sr || 10), Qr)
        }, Ir
      }();
      rr.hasOwnProperty("exports") && (rr.exports = Sr)
    }(YQ);
    var nQ = ar(YQ.exports);

    function eQ(rr, Sr, Qr) {
      let Zr = 0;
      for (let Wr = 0; Wr < Qr; Wr++) {
        const Qr = rr[Sr + Wr];
        if (void 0 === Qr) break;
        Zr += Qr * 16 ** Wr
      }
      return Zr
    }

    function KQ(rr) {
      const Sr = [];
      for (let Qr = 0; Qr < rr.length; Qr++) {
        let Zr = Number(rr[Qr]);
        for (let rr = 0; Zr || rr < Sr.length; rr++) Zr += 10 * (Sr[rr] || 0), Sr[rr] = Zr % 16, Zr = (Zr - Sr[rr]) / 16
      }
      return Sr
    }
    class yQ {
      static fromString(rr) {
        return new yQ(function(rr) {
          const Sr = KQ(rr),
            Qr = Array(4);
          for (let Zr = 0; Zr < 4; Zr++) Qr[3 - Zr] = eQ(Sr, 4 * Zr, 4);
          return Qr
        }(rr), rr)
      }
      static fromBit(rr) {
        const Sr = Array(4),
          Qr = Math.floor(rr / 16);
        for (let Zr = 0; Zr < 4; Zr++) Sr[3 - Zr] = Zr === Qr ? 1 << rr - 16 * Qr : 0;
        return new yQ(Sr)
      }
      constructor(rr, Sr) {
        this.parts = rr, this.str = Sr
      }
      and(rr) {
        let {
          parts: Sr
        } = rr;
        return new yQ(this.parts.map(((rr, Qr) => rr & Sr[Qr])))
      }
      or(rr) {
        let {
          parts: Sr
        } = rr;
        return new yQ(this.parts.map(((rr, Qr) => rr | Sr[Qr])))
      }
      xor(rr) {
        let {
          parts: Sr
        } = rr;
        return new yQ(this.parts.map(((rr, Qr) => rr ^ Sr[Qr])))
      }
      not() {
        return new yQ(this.parts.map((rr => ~rr)))
      }
      equals(rr) {
        let {
          parts: Sr
        } = rr;
        return this.parts.every(((rr, Qr) => rr === Sr[Qr]))
      }
      toString() {
        if (null != this.str) return this.str;
        const rr = new Array(16);
        return this.parts.forEach(((Sr, Qr) => {
          const Zr = KQ(Sr.toString());
          for (let Wr = 0; Wr < 4; Wr++) rr[Wr + 4 * Qr] = Zr[3 - Wr] || 0
        })), this.str = nQ.dp(rr, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const BQ = function() {
      try {
        return BigInt, !0
      } catch (rr) {
        return !1
      }
    }();
    BQ && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const TQ = {},
      vQ = BQ ? function(rr) {
        return BigInt(rr)
      } : function(rr) {
        return rr instanceof yQ ? rr : ("number" === typeof rr && (rr = rr.toString()), null != TQ[rr] || (TQ[rr] = yQ.fromString(rr)), TQ[rr])
      },
      OQ = vQ(0),
      LQ = BQ ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OQ) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OQ)
      } : function() {
        let rr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OQ;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OQ).and(rr)
      },
      lQ = BQ ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OQ) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OQ)
      } : function() {
        let rr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OQ;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OQ).or(rr)
      },
      XQ = BQ ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OQ) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OQ)
      } : function() {
        let rr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : OQ;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OQ).xor(rr)
      },
      PQ = BQ ? function(rr, Sr) {
        return rr === Sr
      } : function(rr, Sr) {
        return null == rr || null == Sr ? rr == Sr : rr.equals(Sr)
      };
    var HQ, qQ, RQ, gQ, CQ = {
      combine: function() {
        let rr = arguments.length <= 0 ? void 0 : arguments[0];
        for (let Sr = 1; Sr < arguments.length; Sr++) rr = lQ(rr, Sr < 0 || arguments.length <= Sr ? void 0 : arguments[Sr]);
        return rr
      },
      add: function(rr, Sr) {
        return Sr === OQ ? rr : lQ(rr, Sr)
      },
      remove: function(rr, Sr) {
        return Sr === OQ ? rr : XQ(rr, LQ(rr, Sr))
      },
      filter: LQ,
      invert: BQ ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OQ)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : OQ).not()
      },
      has: function(rr, Sr) {
        return PQ(LQ(rr, Sr), Sr)
      },
      hasAny: function(rr, Sr) {
        return !PQ(LQ(rr, Sr), OQ)
      },
      equals: PQ,
      deserialize: vQ,
      getFlag: BQ ? function(rr) {
        return BigInt(1) << BigInt(rr)
      } : function(rr) {
        return yQ.fromBit(rr)
      }
    };
    ! function(rr) {
      rr[rr.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", rr[rr.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", rr[rr.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", rr[rr.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", rr[rr.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", rr[rr.RATELIMITED = 4002] = "RATELIMITED", rr[rr.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", rr[rr.INVALID_VERSION = 4004] = "INVALID_VERSION", rr[rr.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(HQ || (HQ = {})),
    function(rr) {
      rr[rr.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", rr[rr.INVALID_COMMAND = 4002] = "INVALID_COMMAND", rr[rr.INVALID_EVENT = 4004] = "INVALID_EVENT", rr[rr.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(qQ || (qQ = {})),
    function(rr) {
      rr.LANDSCAPE = "landscape", rr.PORTRAIT = "portrait"
    }(RQ || (RQ = {})),
    function(rr) {
      rr.MOBILE = "mobile", rr.DESKTOP = "desktop"
    }(gQ || (gQ = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: CQ.getFlag(0),
      ADMINISTRATOR: CQ.getFlag(3)
    });

    function MQ(rr) {
      return NQ((Sr => {
        var Qr;
        const [Zr] = null !== (Qr = Object.entries(rr).find((rr => {
          let [, Qr] = rr;
          return Qr === Sr
        }))) && void 0 !== Qr ? Qr : [];
        return null != Sr && void 0 === Zr ? rr.UNHANDLED : Sr
      }), RS().or(gS()))
    }
    const GQ = zQ.object({
        image_url: zQ.string()
      }),
      kQ = zQ.object({
        mediaUrl: zQ.string().max(1024)
      }),
      AQ = zQ.object({
        access_token: zQ.union([zQ.string(), zQ.null()]).optional()
      }),
      VQ = zQ.object({
        access_token: zQ.string(),
        user: zQ.object({
          username: zQ.string(),
          discriminator: zQ.string(),
          id: zQ.string(),
          avatar: zQ.union([zQ.string(), zQ.null()]).optional(),
          public_flags: zQ.number(),
          global_name: zQ.union([zQ.string(), zQ.null()]).optional()
        }),
        scopes: zQ.array(function(rr) {
          const Sr = PS().transform((Sr => {
            const Qr = rr.safeParse(Sr);
            return Qr.success ? Qr.data : rr._def.defaultValue()
          }));
          return Sr.overlayType = rr, Sr
        }(zQ.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(zQ.literal(-1)).default(-1))),
        expires: zQ.string(),
        application: zQ.object({
          description: zQ.string(),
          icon: zQ.union([zQ.string(), zQ.null()]).optional(),
          id: zQ.string(),
          rpc_origins: zQ.array(zQ.string()).optional(),
          name: zQ.string()
        })
      }),
      iQ = zQ.object({
        participants: zQ.array(zQ.object({
          id: zQ.string(),
          username: zQ.string(),
          global_name: zQ.union([zQ.string(), zQ.null()]).optional(),
          discriminator: zQ.string(),
          avatar: zQ.union([zQ.string(), zQ.null()]).optional(),
          flags: zQ.number(),
          bot: zQ.boolean(),
          avatar_decoration_data: zQ.union([zQ.object({
            asset: zQ.string(),
            skuId: zQ.string().optional()
          }), zQ.null()]).optional(),
          premium_type: zQ.union([zQ.number(), zQ.null()]).optional(),
          nickname: zQ.string().optional()
        }))
      });
    var wQ;
    ! function(rr) {
      rr.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", rr.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", rr.AUTHENTICATE = "AUTHENTICATE", rr.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(wQ || (wQ = {}));
    const cQ = zQ.object({}).optional().nullable(),
      FQ = zQ.void(),
      oQ = {
        [wQ.INITIATE_IMAGE_UPLOAD]: {
          request: FQ,
          response: GQ
        },
        [wQ.OPEN_SHARE_MOMENT_DIALOG]: {
          request: kQ,
          response: cQ
        },
        [wQ.AUTHENTICATE]: {
          request: AQ,
          response: VQ
        },
        [wQ.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: FQ,
          response: iQ
        }
      },
      bQ = "DISPATCH";
    var JQ;
    ! function(rr) {
      rr.AUTHORIZE = "AUTHORIZE", rr.AUTHENTICATE = "AUTHENTICATE", rr.GET_GUILDS = "GET_GUILDS", rr.GET_GUILD = "GET_GUILD", rr.GET_CHANNEL = "GET_CHANNEL", rr.GET_CHANNELS = "GET_CHANNELS", rr.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", rr.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", rr.SUBSCRIBE = "SUBSCRIBE", rr.UNSUBSCRIBE = "UNSUBSCRIBE", rr.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", rr.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", rr.SET_ACTIVITY = "SET_ACTIVITY", rr.GET_SKUS = "GET_SKUS", rr.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", rr.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", rr.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", rr.START_PURCHASE = "START_PURCHASE", rr.SET_CONFIG = "SET_CONFIG", rr.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", rr.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", rr.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", rr.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", rr.CAPTURE_LOG = "CAPTURE_LOG", rr.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", rr.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", rr.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", rr.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", rr.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", rr.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", rr.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(JQ || (JQ = {}));
    const DQ = JS({
        cmd: RS(),
        data: cS(),
        evt: iS(),
        nonce: RS()
      }).passthrough(),
      dQ = (MQ(Object.assign(Object.assign({}, VQ.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), JS({
        id: RS(),
        username: RS(),
        discriminator: RS(),
        global_name: RS().optional().nullable(),
        avatar: RS().optional().nullable(),
        avatar_decoration_data: JS({
          asset: RS(),
          sku_id: RS().optional()
        }).nullable(),
        bot: GS(),
        flags: gS().optional().nullable(),
        premium_type: gS().optional().nullable()
      })),
      sQ = JS({
        user: dQ,
        nick: RS().optional().nullable(),
        roles: bS(RS()),
        joined_at: RS(),
        deaf: GS(),
        mute: GS()
      }),
      uQ = JS({
        id: RS(),
        name: RS().optional().nullable(),
        roles: bS(RS()).optional().nullable(),
        user: dQ.optional().nullable(),
        require_colons: GS().optional().nullable(),
        managed: GS().optional().nullable(),
        animated: GS().optional().nullable(),
        available: GS().optional().nullable()
      }),
      rZ = JS({
        mute: GS(),
        deaf: GS(),
        self_mute: GS(),
        self_deaf: GS(),
        suppress: GS()
      }),
      SZ = JS({
        mute: GS(),
        nick: RS(),
        user: dQ,
        voice_state: rZ,
        volume: gS()
      }),
      QZ = MQ({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      ZZ = JS({
        name: RS(),
        type: gS(),
        url: RS().optional().nullable(),
        created_at: gS().optional().nullable(),
        timestamps: JS({
          start: gS(),
          end: gS()
        }).partial().optional().nullable(),
        application_id: RS().optional().nullable(),
        details: RS().optional().nullable(),
        state: RS().optional().nullable(),
        emoji: uQ.optional().nullable(),
        party: JS({
          id: RS().optional().nullable(),
          size: bS(gS()).optional().nullable()
        }).optional().nullable(),
        assets: JS({
          large_image: RS().nullable(),
          large_text: RS().nullable(),
          small_image: RS().nullable(),
          small_text: RS().nullable()
        }).partial().optional().nullable(),
        secrets: JS({
          join: RS(),
          match: RS()
        }).partial().optional().nullable(),
        instance: GS().optional().nullable(),
        flags: gS().optional().nullable()
      }),
      WZ = JS({
        id: RS(),
        type: MQ({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: RS(),
        deny: RS()
      }),
      aZ = {
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
      jZ = JS({
        id: RS(),
        type: MQ(aZ),
        guild_id: RS().optional().nullable(),
        position: gS().optional().nullable(),
        permission_overwrites: bS(WZ).optional().nullable(),
        name: RS().optional().nullable(),
        topic: RS().optional().nullable(),
        nsfw: GS().optional().nullable(),
        last_message_id: RS().optional().nullable(),
        bitrate: gS().optional().nullable(),
        user_limit: gS().optional().nullable(),
        rate_limit_per_user: gS().optional().nullable(),
        recipients: bS(dQ).optional().nullable(),
        icon: RS().optional().nullable(),
        owner_id: RS().optional().nullable(),
        application_id: RS().optional().nullable(),
        parent_id: RS().optional().nullable(),
        last_pin_timestamp: RS().optional().nullable()
      }),
      IZ = JS({
        user: dQ,
        guild_id: RS(),
        status: QZ,
        activities: bS(ZZ),
        client_status: JS({
          desktop: QZ,
          mobile: QZ,
          web: QZ
        }).partial()
      }),
      fZ = JS({
        id: RS(),
        name: RS(),
        color: gS(),
        hoist: GS(),
        position: gS(),
        permissions: RS(),
        managed: GS(),
        mentionable: GS()
      }),
      EZ = (JS({
        id: RS(),
        name: RS(),
        owner_id: RS(),
        icon: RS().nullable(),
        icon_hash: RS().optional().nullable(),
        splash: RS().nullable(),
        discovery_splash: RS().nullable(),
        owner: GS().optional().nullable(),
        permissions: RS().optional().nullable(),
        region: RS(),
        afk_channel_id: RS().nullable(),
        afk_timeout: gS(),
        widget_enabled: GS().optional().nullable(),
        widget_channel_id: RS().optional().nullable(),
        verification_level: gS(),
        default_message_notifications: gS(),
        explicit_content_filter: gS(),
        roles: bS(fZ),
        emojis: bS(uQ),
        features: bS(RS()),
        mfa_level: gS(),
        application_id: RS().nullable(),
        system_channel_id: RS().nullable(),
        system_channel_flags: gS(),
        rules_channel_id: RS().nullable(),
        joined_at: RS().optional().nullable(),
        large: GS().optional().nullable(),
        unavailable: GS().optional().nullable(),
        member_count: gS().optional().nullable(),
        voice_states: bS(rZ).optional().nullable(),
        members: bS(sQ).optional().nullable(),
        channels: bS(jZ).optional().nullable(),
        presences: bS(IZ).optional().nullable(),
        max_presences: gS().optional().nullable(),
        max_members: gS().optional().nullable(),
        vanity_url_code: RS().nullable(),
        description: RS().nullable(),
        banner: RS().nullable(),
        premium_tier: gS(),
        premium_subscription_count: gS().optional().nullable(),
        preferred_locale: RS(),
        public_updates_channel_id: RS().nullable(),
        max_video_channel_users: gS().optional().nullable(),
        approximate_member_count: gS().optional().nullable(),
        approximate_presence_count: gS().optional().nullable()
      }), JS({
        id: RS(),
        guild_id: RS(),
        type: gS(),
        name: RS()
      })),
      pZ = JS({
        id: RS(),
        filename: RS(),
        size: gS(),
        url: RS(),
        proxy_url: RS(),
        height: gS().optional().nullable(),
        width: gS().optional().nullable()
      }),
      xZ = JS({
        text: RS(),
        icon_url: RS().optional().nullable(),
        proxy_icon_url: RS().optional().nullable()
      }),
      mZ = JS({
        url: RS().optional().nullable(),
        proxy_url: RS().optional().nullable(),
        height: gS().optional().nullable(),
        width: gS().optional().nullable()
      }),
      NZ = mZ.omit({
        proxy_url: !0
      }),
      UZ = JS({
        name: RS().optional().nullable(),
        url: RS().optional().nullable()
      }),
      tZ = JS({
        name: RS().optional().nullable(),
        url: RS().optional().nullable(),
        icon_url: RS().optional().nullable(),
        proxy_icon_url: RS().optional().nullable()
      }),
      hZ = JS({
        name: RS(),
        value: RS(),
        inline: GS()
      }),
      zZ = JS({
        title: RS().optional().nullable(),
        type: RS().optional().nullable(),
        description: RS().optional().nullable(),
        url: RS().optional().nullable(),
        timestamp: RS().optional().nullable(),
        color: gS().optional().nullable(),
        footer: xZ.optional().nullable(),
        image: mZ.optional().nullable(),
        thumbnail: mZ.optional().nullable(),
        video: NZ.optional().nullable(),
        provider: UZ.optional().nullable(),
        author: tZ.optional().nullable(),
        fields: bS(hZ).optional().nullable()
      }),
      YZ = JS({
        count: gS(),
        me: GS(),
        emoji: uQ
      }),
      nZ = JS({
        type: gS(),
        party_id: RS().optional().nullable()
      }),
      eZ = JS({
        id: RS(),
        cover_image: RS().optional().nullable(),
        description: RS(),
        icon: RS().optional().nullable(),
        name: RS()
      }),
      KZ = JS({
        message_id: RS().optional().nullable(),
        channel_id: RS().optional().nullable(),
        guild_id: RS().optional().nullable()
      }),
      yZ = JS({
        id: RS(),
        channel_id: RS(),
        guild_id: RS().optional().nullable(),
        author: dQ.optional().nullable(),
        member: sQ.optional().nullable(),
        content: RS(),
        timestamp: RS(),
        edited_timestamp: RS().optional().nullable(),
        tts: GS(),
        mention_everyone: GS(),
        mentions: bS(dQ),
        mention_roles: bS(RS()),
        mention_channels: bS(EZ),
        attachments: bS(pZ),
        embeds: bS(zZ),
        reactions: bS(YZ).optional().nullable(),
        nonce: dS([RS(), gS()]).optional().nullable(),
        pinned: GS(),
        webhook_id: RS().optional().nullable(),
        type: gS(),
        activity: nZ.optional().nullable(),
        application: eZ.optional().nullable(),
        message_reference: KZ.optional().nullable(),
        flags: gS().optional().nullable(),
        stickers: bS(cS()).optional().nullable(),
        referenced_message: cS().optional().nullable()
      }),
      BZ = JS({
        id: RS(),
        name: RS()
      }),
      TZ = JS({
        type: MQ({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: gS(),
        name: RS()
      }),
      vZ = JS({
        type: MQ({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: GS(),
        threshold: gS(),
        shortcut: bS(TZ),
        delay: gS()
      }),
      OZ = JS({
        device_id: RS(),
        volume: gS(),
        available_devices: bS(BZ)
      }),
      LZ = (JS({
        type: MQ({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: RS(),
        vendor: JS({
          name: RS(),
          url: RS()
        }),
        model: JS({
          name: RS(),
          url: RS()
        }),
        related: bS(RS()),
        echo_cancellation: GS().optional().nullable(),
        noise_suppression: GS().optional().nullable(),
        automatic_gain_control: GS().optional().nullable(),
        hardware_mute: GS().optional().nullable()
      }), JS({
        id: RS(),
        name: RS(),
        type: MQ({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: JS({
          amount: gS(),
          currency: RS()
        }),
        application_id: RS(),
        flags: gS(),
        release_date: RS().nullable()
      })),
      lZ = JS({
        id: RS(),
        sku_id: RS(),
        application_id: RS(),
        user_id: RS(),
        gift_code_flags: gS(),
        type: MQ({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: RS().optional().nullable(),
        branches: bS(RS()).optional().nullable(),
        starts_at: RS().optional().nullable(),
        ends_at: RS().optional().nullable(),
        parent_id: RS().optional().nullable(),
        consumed: GS().optional().nullable(),
        deleted: GS().optional().nullable(),
        gift_code_batch_id: RS().optional().nullable()
      }),
      XZ = (MQ({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), MQ({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      PZ = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      HZ = (MQ(PZ), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      qZ = (MQ(HZ), "ERROR");
    var RZ;
    ! function(rr) {
      rr.READY = "READY", rr.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", rr.SPEAKING_START = "SPEAKING_START", rr.SPEAKING_STOP = "SPEAKING_STOP", rr.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", rr.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", rr.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", rr.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", rr.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", rr.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(RZ || (RZ = {}));
    const gZ = DQ.extend({
        evt: fQ(RZ),
        nonce: RS().nullable(),
        cmd: jQ(bQ),
        data: JS({}).passthrough()
      }),
      CZ = DQ.extend({
        evt: jQ(qZ),
        data: JS({
          code: gS(),
          message: RS().optional()
        }).passthrough(),
        cmd: fQ(JQ),
        nonce: RS().nullable()
      }),
      MZ = gZ.extend({
        evt: RS()
      }),
      GZ = dS([gZ, MZ, CZ]);
    const kZ = {
      [RZ.READY]: {
        payload: gZ.extend({
          evt: jQ(RZ.READY),
          data: JS({
            v: gS(),
            config: JS({
              cdn_host: RS().optional(),
              api_endpoint: RS(),
              environment: RS()
            }),
            user: JS({
              id: RS(),
              username: RS(),
              discriminator: RS(),
              avatar: RS().optional()
            }).optional()
          })
        })
      },
      [RZ.VOICE_STATE_UPDATE]: {
        payload: gZ.extend({
          evt: jQ(RZ.VOICE_STATE_UPDATE),
          data: SZ
        }),
        subscribeArgs: JS({
          channel_id: RS()
        })
      },
      [RZ.SPEAKING_START]: {
        payload: gZ.extend({
          evt: jQ(RZ.SPEAKING_START),
          data: JS({
            lobby_id: RS().optional(),
            channel_id: RS().optional(),
            user_id: RS()
          })
        }),
        subscribeArgs: JS({
          lobby_id: RS().nullable().optional(),
          channel_id: RS().nullable().optional()
        })
      },
      [RZ.SPEAKING_STOP]: {
        payload: gZ.extend({
          evt: jQ(RZ.SPEAKING_STOP),
          data: JS({
            lobby_id: RS().optional(),
            channel_id: RS().optional(),
            user_id: RS()
          })
        }),
        subscribeArgs: JS({
          lobby_id: RS().nullable().optional(),
          channel_id: RS().nullable().optional()
        })
      },
      [RZ.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: gZ.extend({
          evt: jQ(RZ.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: JS({
            layout_mode: MQ(HZ)
          })
        })
      },
      [RZ.ORIENTATION_UPDATE]: {
        payload: gZ.extend({
          evt: jQ(RZ.ORIENTATION_UPDATE),
          data: JS({
            screen_orientation: MQ(PZ),
            orientation: fQ(RQ)
          })
        })
      },
      [RZ.CURRENT_USER_UPDATE]: {
        payload: gZ.extend({
          evt: jQ(RZ.CURRENT_USER_UPDATE),
          data: dQ
        })
      },
      [RZ.ENTITLEMENT_CREATE]: {
        payload: gZ.extend({
          evt: jQ(RZ.ENTITLEMENT_CREATE),
          data: JS({
            entitlement: lZ
          })
        })
      },
      [RZ.THERMAL_STATE_UPDATE]: {
        payload: gZ.extend({
          evt: jQ(RZ.THERMAL_STATE_UPDATE),
          data: JS({
            thermal_state: XZ
          })
        })
      },
      [RZ.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: gZ.extend({
          evt: jQ(RZ.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: JS({
            participants: iQ.shape.participants
          })
        })
      }
    };
    const AZ = JS({}).nullable(),
      VZ = JS({
        code: RS()
      }),
      iZ = JS({
        guilds: bS(JS({
          id: RS(),
          name: RS()
        }))
      }),
      wZ = JS({
        id: RS(),
        name: RS(),
        icon_url: RS().optional(),
        members: bS(sQ)
      }),
      cZ = JS({
        id: RS(),
        type: MQ(aZ),
        guild_id: RS().optional().nullable(),
        name: RS().optional().nullable(),
        topic: RS().optional().nullable(),
        bitrate: gS().optional().nullable(),
        user_limit: gS().optional().nullable(),
        position: gS().optional().nullable(),
        voice_states: bS(SZ),
        messages: bS(yZ)
      }),
      FZ = JS({
        channels: bS(jZ)
      }),
      oZ = (cZ.nullable(), cZ.nullable()),
      bZ = cZ.nullable(),
      JZ = (JS({
        input: OZ,
        output: OZ,
        mode: vZ,
        automatic_gain_control: GS(),
        echo_cancellation: GS(),
        noise_suppression: GS(),
        qos: GS(),
        silence_warning: GS(),
        deaf: GS(),
        mute: GS()
      }), JS({
        evt: RS()
      })),
      DZ = JS({
        shortcut: TZ
      }),
      dZ = ZZ,
      sZ = JS({
        skus: bS(LZ)
      }),
      uZ = JS({
        entitlements: bS(lZ)
      }),
      rW = bS(lZ).nullable(),
      SW = JS({
        use_interactive_pip: GS()
      }),
      QW = JS({
        locale: RS()
      }),
      ZW = JS({
        enabled: GS()
      }),
      WW = JS({
        permissions: MS().or(RS())
      }),
      aW = JS({
        iosKeyboardResizesView: xQ(GS())
      }),
      jW = DQ.extend({
        cmd: fQ(JQ),
        evt: iS()
      });

    function IW(rr) {
      let {
        cmd: Sr,
        data: Qr
      } = rr;
      switch (Sr) {
        case JQ.AUTHORIZE:
          return VZ.parse(Qr);
        case JQ.CAPTURE_SHORTCUT:
          return DZ.parse(Qr);
        case JQ.ENCOURAGE_HW_ACCELERATION:
          return ZW.parse(Qr);
        case JQ.GET_CHANNEL:
          return cZ.parse(Qr);
        case JQ.GET_CHANNELS:
          return FZ.parse(Qr);
        case JQ.GET_CHANNEL_PERMISSIONS:
          return WW.parse(Qr);
        case JQ.GET_GUILD:
          return wZ.parse(Qr);
        case JQ.GET_GUILDS:
          return iZ.parse(Qr);
        case JQ.GET_PLATFORM_BEHAVIORS:
          return aW.parse(Qr);
        case JQ.GET_CHANNEL:
          return cZ.parse(Qr);
        case JQ.SELECT_TEXT_CHANNEL:
          return bZ.parse(Qr);
        case JQ.SELECT_VOICE_CHANNEL:
          return oZ.parse(Qr);
        case JQ.SET_ACTIVITY:
          return dZ.parse(Qr);
        case JQ.GET_SKUS_EMBEDDED:
          return sZ.parse(Qr);
        case JQ.GET_ENTITLEMENTS_EMBEDDED:
          return uZ.parse(Qr);
        case JQ.SET_CONFIG:
          return SW.parse(Qr);
        case JQ.START_PURCHASE:
          return rW.parse(Qr);
        case JQ.SUBSCRIBE:
        case JQ.UNSUBSCRIBE:
          return JZ.parse(Qr);
        case JQ.USER_SETTINGS_GET_LOCALE:
          return QW.parse(Qr);
        case JQ.OPEN_EXTERNAL_LINK:
        case JQ.SET_ORIENTATION_LOCK_STATE:
        case JQ.SET_CERTIFIED_DEVICES:
        case JQ.SEND_ANALYTICS_EVENT:
        case JQ.OPEN_INVITE_DIALOG:
        case JQ.CAPTURE_LOG:
        case JQ.GET_SKUS:
        case JQ.GET_ENTITLEMENTS:
          return AZ.parse(Qr);
        case JQ.AUTHENTICATE:
        case JQ.INITIATE_IMAGE_UPLOAD:
        case JQ.OPEN_SHARE_MOMENT_DIALOG:
        case JQ.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: rr
          } = oQ[Sr];
          return rr.parse(Qr);
        default:
          ! function(rr, Sr) {
            throw Sr
          }(0, new Error(`Unrecognized command ${Sr}`))
      }
    }
    JS({
      frame_id: RS(),
      platform: fQ(gQ).optional().nullable()
    }), JS({
      v: jQ(1),
      encoding: jQ("json").optional(),
      client_id: RS(),
      frame_id: RS()
    });
    const fW = JS({
        code: gS(),
        message: RS().optional()
      }),
      EW = JS({
        evt: RS().nullable(),
        nonce: RS().nullable(),
        data: cS().nullable(),
        cmd: RS()
      }).passthrough();

    function pW(rr) {
      const Sr = EW.parse(rr);
      return null != Sr.evt ? Sr.evt === qZ ? CZ.parse(Sr) : function(rr) {
        const Sr = rr.evt;
        if (!(Sr in RZ)) throw new Error(`Unrecognized event type ${rr.evt}`);
        return kZ[Sr].payload.parse(rr)
      }(GZ.parse(Sr)) : function(rr) {
        return Object.assign(Object.assign({}, rr), {
          data: IW(rr)
        })
      }(jW.passthrough().parse(Sr))
    }

    function xW(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const Wr = DQ.extend({
        cmd: jQ(Sr),
        data: Qr
      });
      return async Qr => {
        const ar = await rr({
          cmd: Sr,
          args: Qr,
          transfer: Zr(Qr)
        });
        return Wr.parse(ar).data
      }
    }

    function mW(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const Qr = oQ[rr].response,
        Zr = DQ.extend({
          cmd: jQ(rr),
          data: Qr
        });
      return Qr => async Wr => {
        const ar = await Qr({
          cmd: rr,
          args: Wr,
          transfer: Sr(Wr)
        });
        return Zr.parse(ar).data
      }
    }
    const NW = mW(wQ.AUTHENTICATE),
      UW = rr => xW(rr, JQ.AUTHORIZE, VZ),
      tW = rr => xW(rr, JQ.CAPTURE_LOG, AZ),
      hW = rr => xW(rr, JQ.ENCOURAGE_HW_ACCELERATION, ZW),
      zW = rr => xW(rr, JQ.GET_ENTITLEMENTS_EMBEDDED, uZ),
      YW = rr => xW(rr, JQ.GET_SKUS_EMBEDDED, sZ),
      nW = rr => xW(rr, JQ.GET_CHANNEL_PERMISSIONS, WW),
      eW = rr => xW(rr, JQ.GET_PLATFORM_BEHAVIORS, aW),
      KW = rr => xW(rr, JQ.OPEN_EXTERNAL_LINK, AZ),
      yW = rr => xW(rr, JQ.OPEN_INVITE_DIALOG, AZ),
      BW = mW(wQ.OPEN_SHARE_MOMENT_DIALOG);
    ZZ.eN({
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
      type: ZZ.shape.type.optional(),
      instance: ZZ.shape.instance.optional()
    }).nullable();
    const TW = rr => xW(rr, JQ.SET_ACTIVITY, dZ),
      vW = rr => xW(rr, JQ.SET_CONFIG, SW);
    const OW = rr => ({
        lock_state: rr.lock_state,
        picture_in_picture_lock_state: rr.picture_in_picture_lock_state
      }),
      LW = rr => function(rr) {
        let {
          sendCommand: Sr,
          cmd: Qr,
          response: Zr,
          fallbackTransform: Wr,
          transferTransform: ar = () => {}
        } = rr;
        const jr = DQ.extend({
          cmd: jQ(Qr),
          data: Zr
        });
        return async rr => {
          try {
            const Zr = await Sr({
              cmd: Qr,
              args: rr,
              transfer: ar(rr)
            });
            return jr.parse(Zr).data
          } catch (Zr) {
            if (Zr.code === qQ.INVALID_PAYLOAD) {
              const Zr = Wr(rr),
                Ir = await Sr({
                  cmd: Qr,
                  args: Zr,
                  transfer: ar(Zr)
                });
              return jr.parse(Ir).data
            }
            throw Zr
          }
        }
      }({
        sendCommand: rr,
        cmd: JQ.SET_ORIENTATION_LOCK_STATE,
        response: AZ,
        fallbackTransform: OW
      }),
      lW = rr => xW(rr, JQ.START_PURCHASE, rW),
      XW = rr => xW(rr, JQ.USER_SETTINGS_GET_LOCALE, QW),
      PW = mW(wQ.INITIATE_IMAGE_UPLOAD),
      HW = rr => xW(rr, JQ.GET_CHANNEL, cZ),
      qW = mW(wQ.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var RW = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function gW(rr) {
      return "string" === typeof rr && RW.test(rr)
    }
    for (var CW = [], MW = 0; MW < 256; ++MW) CW.push((MW + 256).toString(16).substr(1));

    function GW(rr) {
      var Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Qr = (CW[rr[Sr + 0]] + CW[rr[Sr + 1]] + CW[rr[Sr + 2]] + CW[rr[Sr + 3]] + "-" + CW[rr[Sr + 4]] + CW[rr[Sr + 5]] + "-" + CW[rr[Sr + 6]] + CW[rr[Sr + 7]] + "-" + CW[rr[Sr + 8]] + CW[rr[Sr + 9]] + "-" + CW[rr[Sr + 10]] + CW[rr[Sr + 11]] + CW[rr[Sr + 12]] + CW[rr[Sr + 13]] + CW[rr[Sr + 14]] + CW[rr[Sr + 15]]).toLowerCase();
      if (!gW(Qr)) throw TypeError("Stringified UUID is invalid");
      return Qr
    }
    var kW;

    function AW(rr, Sr, Qr) {
      function Zr(rr, Zr, Wr, ar) {
        if ("string" === typeof rr && (rr = function(rr) {
            rr = unescape(encodeURIComponent(rr));
            for (var Sr = [], Qr = 0; Qr < rr.length; ++Qr) Sr.push(rr.charCodeAt(Qr));
            return Sr
          }(rr)), "string" === typeof Zr && (Zr = function(rr) {
            if (!gW(rr)) throw TypeError("Invalid UUID");
            var Sr, Qr = new Uint8Array(16);
            return Qr[0] = (Sr = parseInt(rr.slice(0, 8), 16)) >>> 24, Qr[1] = Sr >>> 16 & 255, Qr[2] = Sr >>> 8 & 255, Qr[3] = 255 & Sr, Qr[4] = (Sr = parseInt(rr.slice(9, 13), 16)) >>> 8, Qr[5] = 255 & Sr, Qr[6] = (Sr = parseInt(rr.slice(14, 18), 16)) >>> 8, Qr[7] = 255 & Sr, Qr[8] = (Sr = parseInt(rr.slice(19, 23), 16)) >>> 8, Qr[9] = 255 & Sr, Qr[10] = (Sr = parseInt(rr.slice(24, 36), 16)) / 1099511627776 & 255, Qr[11] = Sr / 4294967296 & 255, Qr[12] = Sr >>> 24 & 255, Qr[13] = Sr >>> 16 & 255, Qr[14] = Sr >>> 8 & 255, Qr[15] = 255 & Sr, Qr
          }(Zr)), 16 !== Zr.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var jr = new Uint8Array(16 + rr.length);
        if (jr.set(Zr), jr.set(rr, Zr.length), (jr = Qr(jr))[6] = 15 & jr[6] | Sr, jr[8] = 63 & jr[8] | 128, Wr) {
          ar = ar || 0;
          for (var Ir = 0; Ir < 16; ++Ir) Wr[ar + Ir] = jr[Ir];
          return Wr
        }
        return GW(jr)
      }
      try {
        Zr.name = rr
      } catch (Wr) {}
      return Zr.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", Zr.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", Zr
    }

    function VW(rr) {
      return 14 + (rr + 64 >>> 9 << 4) + 1
    }

    function iW(rr, Sr) {
      var Qr = (65535 & rr) + (65535 & Sr);
      return (rr >> 16) + (Sr >> 16) + (Qr >> 16) << 16 | 65535 & Qr
    }

    function wW(rr, Sr, Qr, Zr, Wr, ar) {
      return iW((jr = iW(iW(Sr, rr), iW(Zr, ar))) << (Ir = Wr) | jr >>> 32 - Ir, Qr);
      var jr, Ir
    }

    function cW(rr, Sr, Qr, Zr, Wr, ar, jr) {
      return wW(Sr & Qr | ~Sr & Zr, rr, Sr, Wr, ar, jr)
    }

    function FW(rr, Sr, Qr, Zr, Wr, ar, jr) {
      return wW(Sr & Zr | Qr & ~Zr, rr, Sr, Wr, ar, jr)
    }

    function oW(rr, Sr, Qr, Zr, Wr, ar, jr) {
      return wW(Sr ^ Qr ^ Zr, rr, Sr, Wr, ar, jr)
    }

    function bW(rr, Sr, Qr, Zr, Wr, ar, jr) {
      return wW(Qr ^ (Sr | ~Zr), rr, Sr, Wr, ar, jr)
    }
    AW("v3", 48, (function(rr) {
      if ("string" === typeof rr) {
        var Sr = unescape(encodeURIComponent(rr));
        rr = new Uint8Array(Sr.length);
        for (var Qr = 0; Qr < Sr.length; ++Qr) rr[Qr] = Sr.charCodeAt(Qr)
      }
      return function(rr) {
        for (var Sr = [], Qr = 32 * rr.length, Zr = "0123456789abcdef", Wr = 0; Wr < Qr; Wr += 8) {
          var ar = rr[Wr >> 5] >>> Wr % 32 & 255,
            jr = parseInt(Zr.charAt(ar >>> 4 & 15) + Zr.charAt(15 & ar), 16);
          Sr.push(jr)
        }
        return Sr
      }(function(rr, Sr) {
        rr[Sr >> 5] |= 128 << Sr % 32, rr[VW(Sr) - 1] = Sr;
        for (var Qr = 1732584193, Zr = -271733879, Wr = -1732584194, ar = 271733878, jr = 0; jr < rr.length; jr += 16) {
          var Ir = Qr,
            fr = Zr,
            Er = Wr,
            pr = ar;
          Qr = cW(Qr, Zr, Wr, ar, rr[jr], 7, -680876936), ar = cW(ar, Qr, Zr, Wr, rr[jr + 1], 12, -389564586), Wr = cW(Wr, ar, Qr, Zr, rr[jr + 2], 17, 606105819), Zr = cW(Zr, Wr, ar, Qr, rr[jr + 3], 22, -1044525330), Qr = cW(Qr, Zr, Wr, ar, rr[jr + 4], 7, -176418897), ar = cW(ar, Qr, Zr, Wr, rr[jr + 5], 12, 1200080426), Wr = cW(Wr, ar, Qr, Zr, rr[jr + 6], 17, -1473231341), Zr = cW(Zr, Wr, ar, Qr, rr[jr + 7], 22, -45705983), Qr = cW(Qr, Zr, Wr, ar, rr[jr + 8], 7, 1770035416), ar = cW(ar, Qr, Zr, Wr, rr[jr + 9], 12, -1958414417), Wr = cW(Wr, ar, Qr, Zr, rr[jr + 10], 17, -42063), Zr = cW(Zr, Wr, ar, Qr, rr[jr + 11], 22, -1990404162), Qr = cW(Qr, Zr, Wr, ar, rr[jr + 12], 7, 1804603682), ar = cW(ar, Qr, Zr, Wr, rr[jr + 13], 12, -40341101), Wr = cW(Wr, ar, Qr, Zr, rr[jr + 14], 17, -1502002290), Qr = FW(Qr, Zr = cW(Zr, Wr, ar, Qr, rr[jr + 15], 22, 1236535329), Wr, ar, rr[jr + 1], 5, -165796510), ar = FW(ar, Qr, Zr, Wr, rr[jr + 6], 9, -1069501632), Wr = FW(Wr, ar, Qr, Zr, rr[jr + 11], 14, 643717713), Zr = FW(Zr, Wr, ar, Qr, rr[jr], 20, -373897302), Qr = FW(Qr, Zr, Wr, ar, rr[jr + 5], 5, -701558691), ar = FW(ar, Qr, Zr, Wr, rr[jr + 10], 9, 38016083), Wr = FW(Wr, ar, Qr, Zr, rr[jr + 15], 14, -660478335), Zr = FW(Zr, Wr, ar, Qr, rr[jr + 4], 20, -405537848), Qr = FW(Qr, Zr, Wr, ar, rr[jr + 9], 5, 568446438), ar = FW(ar, Qr, Zr, Wr, rr[jr + 14], 9, -1019803690), Wr = FW(Wr, ar, Qr, Zr, rr[jr + 3], 14, -187363961), Zr = FW(Zr, Wr, ar, Qr, rr[jr + 8], 20, 1163531501), Qr = FW(Qr, Zr, Wr, ar, rr[jr + 13], 5, -1444681467), ar = FW(ar, Qr, Zr, Wr, rr[jr + 2], 9, -51403784), Wr = FW(Wr, ar, Qr, Zr, rr[jr + 7], 14, 1735328473), Qr = oW(Qr, Zr = FW(Zr, Wr, ar, Qr, rr[jr + 12], 20, -1926607734), Wr, ar, rr[jr + 5], 4, -378558), ar = oW(ar, Qr, Zr, Wr, rr[jr + 8], 11, -2022574463), Wr = oW(Wr, ar, Qr, Zr, rr[jr + 11], 16, 1839030562), Zr = oW(Zr, Wr, ar, Qr, rr[jr + 14], 23, -35309556), Qr = oW(Qr, Zr, Wr, ar, rr[jr + 1], 4, -1530992060), ar = oW(ar, Qr, Zr, Wr, rr[jr + 4], 11, 1272893353), Wr = oW(Wr, ar, Qr, Zr, rr[jr + 7], 16, -155497632), Zr = oW(Zr, Wr, ar, Qr, rr[jr + 10], 23, -1094730640), Qr = oW(Qr, Zr, Wr, ar, rr[jr + 13], 4, 681279174), ar = oW(ar, Qr, Zr, Wr, rr[jr], 11, -358537222), Wr = oW(Wr, ar, Qr, Zr, rr[jr + 3], 16, -722521979), Zr = oW(Zr, Wr, ar, Qr, rr[jr + 6], 23, 76029189), Qr = oW(Qr, Zr, Wr, ar, rr[jr + 9], 4, -640364487), ar = oW(ar, Qr, Zr, Wr, rr[jr + 12], 11, -421815835), Wr = oW(Wr, ar, Qr, Zr, rr[jr + 15], 16, 530742520), Qr = bW(Qr, Zr = oW(Zr, Wr, ar, Qr, rr[jr + 2], 23, -995338651), Wr, ar, rr[jr], 6, -198630844), ar = bW(ar, Qr, Zr, Wr, rr[jr + 7], 10, 1126891415), Wr = bW(Wr, ar, Qr, Zr, rr[jr + 14], 15, -1416354905), Zr = bW(Zr, Wr, ar, Qr, rr[jr + 5], 21, -57434055), Qr = bW(Qr, Zr, Wr, ar, rr[jr + 12], 6, 1700485571), ar = bW(ar, Qr, Zr, Wr, rr[jr + 3], 10, -1894986606), Wr = bW(Wr, ar, Qr, Zr, rr[jr + 10], 15, -1051523), Zr = bW(Zr, Wr, ar, Qr, rr[jr + 1], 21, -2054922799), Qr = bW(Qr, Zr, Wr, ar, rr[jr + 8], 6, 1873313359), ar = bW(ar, Qr, Zr, Wr, rr[jr + 15], 10, -30611744), Wr = bW(Wr, ar, Qr, Zr, rr[jr + 6], 15, -1560198380), Zr = bW(Zr, Wr, ar, Qr, rr[jr + 13], 21, 1309151649), Qr = bW(Qr, Zr, Wr, ar, rr[jr + 4], 6, -145523070), ar = bW(ar, Qr, Zr, Wr, rr[jr + 11], 10, -1120210379), Wr = bW(Wr, ar, Qr, Zr, rr[jr + 2], 15, 718787259), Zr = bW(Zr, Wr, ar, Qr, rr[jr + 9], 21, -343485551), Qr = iW(Qr, Ir), Zr = iW(Zr, fr), Wr = iW(Wr, Er), ar = iW(ar, pr)
        }
        return [Qr, Zr, Wr, ar]
      }(function(rr) {
        if (0 === rr.length) return [];
        for (var Sr = 8 * rr.length, Qr = new Uint32Array(VW(Sr)), Zr = 0; Zr < Sr; Zr += 8) Qr[Zr >> 5] |= (255 & rr[Zr / 8]) << Zr % 32;
        return Qr
      }(rr), 8 * rr.length))
    }));
    var JW = new Uint8Array(16);

    function DW() {
      if (!kW && !(kW = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return kW(JW)
    }

    function dW(rr, Sr, Qr) {
      var Zr = (rr = rr || {}).random || (rr.rng || DW)();
      if (Zr[6] = 15 & Zr[6] | 64, Zr[8] = 63 & Zr[8] | 128, Sr) {
        Qr = Qr || 0;
        for (var Wr = 0; Wr < 16; ++Wr) Sr[Qr + Wr] = Zr[Wr];
        return Sr
      }
      return GW(Zr)
    }

    function sW(rr, Sr, Qr, Zr) {
      switch (rr) {
        case 0:
          return Sr & Qr ^ ~Sr & Zr;
        case 1:
        case 3:
          return Sr ^ Qr ^ Zr;
        case 2:
          return Sr & Qr ^ Sr & Zr ^ Qr & Zr
      }
    }

    function uW(rr, Sr) {
      return rr << Sr | rr >>> 32 - Sr
    }
    AW("v5", 80, (function(rr) {
      var Sr = [1518500249, 1859775393, 2400959708, 3395469782],
        Qr = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof rr) {
        var Zr = unescape(encodeURIComponent(rr));
        rr = [];
        for (var Wr = 0; Wr < Zr.length; ++Wr) rr.push(Zr.charCodeAt(Wr))
      } else Array.isArray(rr) || (rr = Array.prototype.slice.call(rr));
      rr.push(128);
      for (var ar = rr.length / 4 + 2, jr = Math.ceil(ar / 16), Ir = new Array(jr), fr = 0; fr < jr; ++fr) {
        for (var Er = new Uint32Array(16), pr = 0; pr < 16; ++pr) Er[pr] = rr[64 * fr + 4 * pr] << 24 | rr[64 * fr + 4 * pr + 1] << 16 | rr[64 * fr + 4 * pr + 2] << 8 | rr[64 * fr + 4 * pr + 3];
        Ir[fr] = Er
      }
      Ir[jr - 1][14] = 8 * (rr.length - 1) / Math.pow(2, 32), Ir[jr - 1][14] = Math.floor(Ir[jr - 1][14]), Ir[jr - 1][15] = 8 * (rr.length - 1) & 4294967295;
      for (var xr = 0; xr < jr; ++xr) {
        for (var mr = new Uint32Array(80), Nr = 0; Nr < 16; ++Nr) mr[Nr] = Ir[xr][Nr];
        for (var Ur = 16; Ur < 80; ++Ur) mr[Ur] = uW(mr[Ur - 3] ^ mr[Ur - 8] ^ mr[Ur - 14] ^ mr[Ur - 16], 1);
        for (var tr = Qr[0], hr = Qr[1], zr = Qr[2], Yr = Qr[3], nr = Qr[4], er = 0; er < 80; ++er) {
          var Kr = Math.floor(er / 20),
            yr = uW(tr, 5) + sW(Kr, hr, zr, Yr) + nr + Sr[Kr] + mr[er] >>> 0;
          nr = Yr, Yr = zr, zr = uW(hr, 30) >>> 0, hr = tr, tr = yr
        }
        Qr[0] = Qr[0] + tr >>> 0, Qr[1] = Qr[1] + hr >>> 0, Qr[2] = Qr[2] + zr >>> 0, Qr[3] = Qr[3] + Yr >>> 0, Qr[4] = Qr[4] + nr >>> 0
      }
      return [Qr[0] >> 24 & 255, Qr[0] >> 16 & 255, Qr[0] >> 8 & 255, 255 & Qr[0], Qr[1] >> 24 & 255, Qr[1] >> 16 & 255, Qr[1] >> 8 & 255, 255 & Qr[1], Qr[2] >> 24 & 255, Qr[2] >> 16 & 255, Qr[2] >> 8 & 255, 255 & Qr[2], Qr[3] >> 24 & 255, Qr[3] >> 16 & 255, Qr[3] >> 8 & 255, 255 & Qr[3], Qr[4] >> 24 & 255, Qr[4] >> 16 & 255, Qr[4] >> 8 & 255, 255 & Qr[4]]
    }));
    class ra extends Error {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(Sr), this.code = rr, this.message = Sr, this.name = "Discord SDK Error"
      }
    }
    const Sa = ["log", "warn", "debug", "info", "error"];
    var Qa;
    ! function(rr) {
      rr[rr.HANDSHAKE = 0] = "HANDSHAKE", rr[rr.FRAME = 1] = "FRAME", rr[rr.CLOSE = 2] = "CLOSE", rr[rr.HELLO = 3] = "HELLO"
    }(Qa || (Qa = {}));
    const Za = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class Wa {
      getTransfer(rr) {
        var Sr;
        switch (rr.cmd) {
          case JQ.SUBSCRIBE:
          case JQ.UNSUBSCRIBE:
            return;
          default:
            return null !== (Sr = rr.transfer) && void 0 !== Sr ? Sr : void 0
        }
      }
      constructor(rr, Sr) {
        var Qr;
        if (this.eventBus = new Er, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = rr => {
            var Sr;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const Qr = dW();
            null === (Sr = this.source) || void 0 === Sr || Sr.postMessage([Qa.FRAME, Object.assign(Object.assign({}, rr), {
              nonce: Qr
            })], this.sourceOrigin, this.getTransfer(rr));
            return new Promise(((rr, Sr) => {
              this.pendingCommands.set(Qr, {
                resolve: rr,
                reject: Sr
              })
            }))
          }, this.commands = (Qr = this.sendCommand, {
            authenticate: NW(Qr),
            authorize: UW(Qr),
            captureLog: tW(Qr),
            encourageHardwareAcceleration: hW(Qr),
            getChannel: HW(Qr),
            getChannelPermissions: nW(Qr),
            getEntitlements: zW(Qr),
            getPlatformBehaviors: eW(Qr),
            getSkus: YW(Qr),
            openExternalLink: KW(Qr),
            openInviteDialog: yW(Qr),
            openShareMomentDialog: BW(Qr),
            setActivity: TW(Qr),
            setConfig: vW(Qr),
            setOrientationLockState: LW(Qr),
            startPurchase: lW(Qr),
            userSettingsGetLocale: XW(Qr),
            initiateImageUpload: PW(Qr),
            getInstanceConnectedParticipants: qW(Qr)
          }), this.handleMessage = rr => {
            if (!Za.has(rr.origin)) return;
            const Sr = rr.data;
            if (!Array.isArray(Sr)) return;
            const [Qr, Zr] = Sr;
            switch (Qr) {
              case Qa.HELLO:
                return;
              case Qa.CLOSE:
                return this.handleClose(Zr);
              case Qa.HANDSHAKE:
                return this.handleHandshake();
              case Qa.FRAME:
                return this.handleFrame(Zr);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = rr, this.configuration = null !== Sr && void 0 !== Sr ? Sr : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = gQ.DESKTOP, this.guildId = null, void(this.channelId = null);
        const Zr = new URLSearchParams(this._getSearch()),
          Wr = Zr.get("frame_id");
        if (!Wr) throw new Error("frame_id query param is not defined");
        this.frameId = Wr;
        const ar = Zr.get("instance_id");
        if (!ar) throw new Error("instance_id query param is not defined");
        this.instanceId = ar;
        const jr = Zr.get("platform");
        if (!jr) throw new Error("platform query param is not defined");
        if (jr !== gQ.DESKTOP && jr !== gQ.MOBILE) throw new Error(`Invalid query param "platform" of "${jr}". Valid values are "${gQ.DESKTOP}" or "${gQ.MOBILE}"`);
        this.platform = jr, this.guildId = Zr.get("guild_id"), this.channelId = Zr.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var rr;
          return [null !== (rr = window.parent.opener) && void 0 !== rr ? rr : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(rr, Sr) {
        var Qr;
        window.removeEventListener("message", this.handleMessage);
        const Zr = dW();
        null === (Qr = this.source) || void 0 === Qr || Qr.postMessage([Qa.CLOSE, {
          code: rr,
          message: Sr,
          nonce: Zr
        }], this.sourceOrigin)
      }
      async subscribe(rr, Sr) {
        for (var Qr = arguments.length, Zr = new Array(Qr > 2 ? Qr - 2 : 0), Wr = 2; Wr < Qr; Wr++) Zr[Wr - 2] = arguments[Wr];
        const [ar] = Zr, jr = this.eventBus.listenerCount(rr), Ir = this.eventBus.on(rr, Sr);
        return Object.values(RZ).includes(rr) && rr !== RZ.READY && 0 === jr && await this.sendCommand({
          cmd: JQ.SUBSCRIBE,
          args: ar,
          evt: rr
        }), Ir
      }
      async unsubscribe(rr, Sr) {
        for (var Qr = arguments.length, Zr = new Array(Qr > 2 ? Qr - 2 : 0), Wr = 2; Wr < Qr; Wr++) Zr[Wr - 2] = arguments[Wr];
        const [ar] = Zr;
        return rr !== RZ.READY && 1 === this.eventBus.listenerCount(rr) && await this.sendCommand({
          cmd: JQ.UNSUBSCRIBE,
          evt: rr,
          args: ar
        }), this.eventBus.off(rr, Sr)
      }
      async ready() {
        this.isReady || await new Promise((rr => {
          this.eventBus.once(RZ.READY, rr)
        }))
      }
      handshake() {
        var rr;
        null === (rr = this.source) || void 0 === rr || rr.postMessage([Qa.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(RZ.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const rr = (rr, Sr) => {
          this.commands.captureLog({
            level: rr,
            message: Sr
          })
        };
        Sa.forEach((Sr => {
          ! function(rr, Sr, Qr) {
            const Zr = rr[Sr],
              Wr = rr;
            Zr && (rr[Sr] = function() {
              const rr = [].slice.call(arguments),
                ar = "" + rr.join(" ");
              Qr(Sr, ar), Zr.apply(Wr, rr)
            })
          }(console, Sr, rr)
        }))
      }
      handleClose(rr) {
        fW.parse(rr)
      }
      handleHandshake() {}
      handleFrame(rr) {
        var Sr, Qr;
        let Zr;
        try {
          Zr = pW(rr)
        } catch (Wr) {
          return console.error("Failed to parse", rr), void console.error(Wr)
        }
        if ("DISPATCH" === Zr.cmd) this.eventBus.emit(Zr.evt, Zr.data);
        else {
          if (Zr.evt === qZ) {
            if (null != Zr.nonce) return null === (Sr = this.pendingCommands.get(Zr.nonce)) || void 0 === Sr || Sr.reject(Zr.data), void this.pendingCommands.delete(Zr.nonce);
            this.eventBus.emit("error", new ra(Zr.data.code, Zr.data.message))
          }
          if (null == Zr.nonce) return void console.error("Missing nonce", rr);
          null === (Qr = this.pendingCommands.get(Zr.nonce)) || void 0 === Qr || Qr.resolve(Zr), this.pendingCommands.delete(Zr.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var aa, ja = 1e9,
      Ia = !0,
      fa = "[DecimalError] ",
      Ea = fa + "Invalid argument: ",
      pa = fa + "Exponent out of range: ",
      xa = Math.floor,
      ma = Math.pow,
      Na = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      Ua = 1e7,
      ta = 9007199254740991,
      ha = xa(1286742750677284.5),
      za = {};

    function Ya(rr, Sr) {
      var Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr = rr.constructor,
        xr = pr.precision;
      if (!rr.s || !Sr.s) return Sr.s || (Sr = new pr(rr)), Ia ? la(Sr, xr) : Sr;
      if (fr = rr.d, Er = Sr.d, jr = rr.e, Wr = Sr.e, fr = fr.slice(), ar = jr - Wr) {
        for (ar < 0 ? (Zr = fr, ar = -ar, Ir = Er.length) : (Zr = Er, Wr = jr, Ir = fr.length), ar > (Ir = (jr = Math.ceil(xr / 7)) > Ir ? jr + 1 : Ir + 1) && (ar = Ir, Zr.length = 1), Zr.reverse(); ar--;) Zr.push(0);
        Zr.reverse()
      }
      for ((Ir = fr.length) - (ar = Er.length) < 0 && (ar = Ir, Zr = Er, Er = fr, fr = Zr), Qr = 0; ar;) Qr = (fr[--ar] = fr[ar] + Er[ar] + Qr) / Ua | 0, fr[ar] %= Ua;
      for (Qr && (fr.unshift(Qr), ++Wr), Ir = fr.length; 0 == fr[--Ir];) fr.pop();
      return Sr.d = fr, Sr.e = Wr, Ia ? la(Sr, xr) : Sr
    }

    function na(rr, Sr, Qr) {
      if (rr !== ~~rr || rr < Sr || rr > Qr) throw Error(Ea + rr)
    }

    function ea(rr) {
      var Sr, Qr, Zr, Wr = rr.length - 1,
        ar = "",
        jr = rr[0];
      if (Wr > 0) {
        for (ar += jr, Sr = 1; Sr < Wr; Sr++)(Qr = 7 - (Zr = rr[Sr] + "").length) && (ar += va(Qr)), ar += Zr;
        (Qr = 7 - (Zr = (jr = rr[Sr]) + "").length) && (ar += va(Qr))
      } else if (0 === jr) return "0";
      for (; jr % 10 === 0;) jr /= 10;
      return ar + jr
    }
    za.absoluteValue = za.abs = function() {
      var rr = new this.constructor(this);
      return rr.s && (rr.s = 1), rr
    }, za.comparedTo = za.cmp = function(rr) {
      var Sr, Qr, Zr, Wr, ar = this;
      if (rr = new ar.constructor(rr), ar.s !== rr.s) return ar.s || -rr.s;
      if (ar.e !== rr.e) return ar.e > rr.e ^ ar.s < 0 ? 1 : -1;
      for (Sr = 0, Qr = (Zr = ar.d.length) < (Wr = rr.d.length) ? Zr : Wr; Sr < Qr; ++Sr)
        if (ar.d[Sr] !== rr.d[Sr]) return ar.d[Sr] > rr.d[Sr] ^ ar.s < 0 ? 1 : -1;
      return Zr === Wr ? 0 : Zr > Wr ^ ar.s < 0 ? 1 : -1
    }, za.decimalPlaces = za.dp = function() {
      var rr = this,
        Sr = rr.d.length - 1,
        Qr = 7 * (Sr - rr.e);
      if (Sr = rr.d[Sr])
        for (; Sr % 10 == 0; Sr /= 10) Qr--;
      return Qr < 0 ? 0 : Qr
    }, za.dividedBy = za.div = function(rr) {
      return Ka(this, new this.constructor(rr))
    }, za.dividedToIntegerBy = za.idiv = function(rr) {
      var Sr = this.constructor;
      return la(Ka(this, new Sr(rr), 0, 1), Sr.precision)
    }, za.equals = za.eq = function(rr) {
      return !this.cmp(rr)
    }, za.exponent = function() {
      return Ba(this)
    }, za.greaterThan = za.gt = function(rr) {
      return this.cmp(rr) > 0
    }, za.greaterThanOrEqualTo = za.gte = function(rr) {
      return this.cmp(rr) >= 0
    }, za.isInteger = za.isint = function() {
      return this.e > this.d.length - 2
    }, za.isNegative = za.isneg = function() {
      return this.s < 0
    }, za.isPositive = za.ispos = function() {
      return this.s > 0
    }, za.isZero = function() {
      return 0 === this.s
    }, za.lessThan = za.lt = function(rr) {
      return this.cmp(rr) < 0
    }, za.lessThanOrEqualTo = za.lte = function(rr) {
      return this.cmp(rr) < 1
    }, za.logarithm = za.log = function(rr) {
      var Sr, Qr = this,
        Zr = Qr.constructor,
        Wr = Zr.precision,
        ar = Wr + 5;
      if (void 0 === rr) rr = new Zr(10);
      else if ((rr = new Zr(rr)).s < 1 || rr.eq(aa)) throw Error(fa + "NaN");
      if (Qr.s < 1) throw Error(fa + (Qr.s ? "NaN" : "-Infinity"));
      return Qr.eq(aa) ? new Zr(0) : (Ia = !1, Sr = Ka(Oa(Qr, ar), Oa(rr, ar), ar), Ia = !0, la(Sr, Wr))
    }, za.minus = za.sub = function(rr) {
      var Sr = this;
      return rr = new Sr.constructor(rr), Sr.s == rr.s ? Xa(Sr, rr) : Ya(Sr, (rr.s = -rr.s, rr))
    }, za.modulo = za.mod = function(rr) {
      var Sr, Qr = this,
        Zr = Qr.constructor,
        Wr = Zr.precision;
      if (!(rr = new Zr(rr)).s) throw Error(fa + "NaN");
      return Qr.s ? (Ia = !1, Sr = Ka(Qr, rr, 0, 1).times(rr), Ia = !0, Qr.minus(Sr)) : la(new Zr(Qr), Wr)
    }, za.naturalExponential = za.exp = function() {
      return ya(this)
    }, za.naturalLogarithm = za.ln = function() {
      return Oa(this)
    }, za.negated = za.neg = function() {
      var rr = new this.constructor(this);
      return rr.s = -rr.s || 0, rr
    }, za.plus = za.add = function(rr) {
      var Sr = this;
      return rr = new Sr.constructor(rr), Sr.s == rr.s ? Ya(Sr, rr) : Xa(Sr, (rr.s = -rr.s, rr))
    }, za.precision = za.sd = function(rr) {
      var Sr, Qr, Zr, Wr = this;
      if (void 0 !== rr && rr !== !!rr && 1 !== rr && 0 !== rr) throw Error(Ea + rr);
      if (Sr = Ba(Wr) + 1, Qr = 7 * (Zr = Wr.d.length - 1) + 1, Zr = Wr.d[Zr]) {
        for (; Zr % 10 == 0; Zr /= 10) Qr--;
        for (Zr = Wr.d[0]; Zr >= 10; Zr /= 10) Qr++
      }
      return rr && Sr > Qr ? Sr : Qr
    }, za.squareRoot = za.sqrt = function() {
      var rr, Sr, Qr, Zr, Wr, ar, jr, Ir = this,
        fr = Ir.constructor;
      if (Ir.s < 1) {
        if (!Ir.s) return new fr(0);
        throw Error(fa + "NaN")
      }
      for (rr = Ba(Ir), Ia = !1, 0 == (Wr = Math.sqrt(+Ir)) || Wr == 1 / 0 ? (((Sr = ea(Ir.d)).length + rr) % 2 == 0 && (Sr += "0"), Wr = Math.sqrt(Sr), rr = xa((rr + 1) / 2) - (rr < 0 || rr % 2), Zr = new fr(Sr = Wr == 1 / 0 ? "1e" + rr : (Sr = Wr.toExponential()).slice(0, Sr.indexOf("e") + 1) + rr)) : Zr = new fr(Wr.toString()), Wr = jr = (Qr = fr.precision) + 3;;)
        if (Zr = (ar = Zr).plus(Ka(Ir, ar, jr + 2)).times(.5), ea(ar.d).slice(0, jr) === (Sr = ea(Zr.d)).slice(0, jr)) {
          if (Sr = Sr.slice(jr - 3, jr + 1), Wr == jr && "4999" == Sr) {
            if (la(ar, Qr + 1, 0), ar.times(ar).eq(Ir)) {
              Zr = ar;
              break
            }
          } else if ("9999" != Sr) break;
          jr += 4
        } return Ia = !0, la(Zr, Qr)
    }, za.times = za.mul = function(rr) {
      var Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr = this,
        xr = pr.constructor,
        mr = pr.d,
        Nr = (rr = new xr(rr)).d;
      if (!pr.s || !rr.s) return new xr(0);
      for (rr.s *= pr.s, Qr = pr.e + rr.e, (fr = mr.length) < (Er = Nr.length) && (ar = mr, mr = Nr, Nr = ar, jr = fr, fr = Er, Er = jr), ar = [], Zr = jr = fr + Er; Zr--;) ar.push(0);
      for (Zr = Er; --Zr >= 0;) {
        for (Sr = 0, Wr = fr + Zr; Wr > Zr;) Ir = ar[Wr] + Nr[Zr] * mr[Wr - Zr - 1] + Sr, ar[Wr--] = Ir % Ua | 0, Sr = Ir / Ua | 0;
        ar[Wr] = (ar[Wr] + Sr) % Ua | 0
      }
      for (; !ar[--jr];) ar.pop();
      return Sr ? ++Qr : ar.shift(), rr.d = ar, rr.e = Qr, Ia ? la(rr, xr.precision) : rr
    }, za.toDecimalPlaces = za.todp = function(rr, Sr) {
      var Qr = this,
        Zr = Qr.constructor;
      return Qr = new Zr(Qr), void 0 === rr ? Qr : (na(rr, 0, ja), void 0 === Sr ? Sr = Zr.rounding : na(Sr, 0, 8), la(Qr, rr + Ba(Qr) + 1, Sr))
    }, za.toExponential = function(rr, Sr) {
      var Qr, Zr = this,
        Wr = Zr.constructor;
      return void 0 === rr ? Qr = Pa(Zr, !0) : (na(rr, 0, ja), void 0 === Sr ? Sr = Wr.rounding : na(Sr, 0, 8), Qr = Pa(Zr = la(new Wr(Zr), rr + 1, Sr), !0, rr + 1)), Qr
    }, za.toFixed = function(rr, Sr) {
      var Qr, Zr, Wr = this,
        ar = Wr.constructor;
      return void 0 === rr ? Pa(Wr) : (na(rr, 0, ja), void 0 === Sr ? Sr = ar.rounding : na(Sr, 0, 8), Qr = Pa((Zr = la(new ar(Wr), rr + Ba(Wr) + 1, Sr)).abs(), !1, rr + Ba(Zr) + 1), Wr.isneg() && !Wr.isZero() ? "-" + Qr : Qr)
    }, za.toInteger = za.toint = function() {
      var rr = this,
        Sr = rr.constructor;
      return la(new Sr(rr), Ba(rr) + 1, Sr.rounding)
    }, za.toNumber = function() {
      return +this
    }, za.toPower = za.pow = function(rr) {
      var Sr, Qr, Zr, Wr, ar, jr, Ir = this,
        fr = Ir.constructor,
        Er = +(rr = new fr(rr));
      if (!rr.s) return new fr(aa);
      if (!(Ir = new fr(Ir)).s) {
        if (rr.s < 1) throw Error(fa + "Infinity");
        return Ir
      }
      if (Ir.eq(aa)) return Ir;
      if (Zr = fr.precision, rr.eq(aa)) return la(Ir, Zr);
      if (jr = (Sr = rr.e) >= (Qr = rr.d.length - 1), ar = Ir.s, jr) {
        if ((Qr = Er < 0 ? -Er : Er) <= ta) {
          for (Wr = new fr(aa), Sr = Math.ceil(Zr / 7 + 4), Ia = !1; Qr % 2 && Ha((Wr = Wr.times(Ir)).d, Sr), 0 !== (Qr = xa(Qr / 2));) Ha((Ir = Ir.times(Ir)).d, Sr);
          return Ia = !0, rr.s < 0 ? new fr(aa).div(Wr) : la(Wr, Zr)
        }
      } else if (ar < 0) throw Error(fa + "NaN");
      return ar = ar < 0 && 1 & rr.d[Math.max(Sr, Qr)] ? -1 : 1, Ir.s = 1, Ia = !1, Wr = rr.times(Oa(Ir, Zr + 12)), Ia = !0, (Wr = ya(Wr)).s = ar, Wr
    }, za.toPrecision = function(rr, Sr) {
      var Qr, Zr, Wr = this,
        ar = Wr.constructor;
      return void 0 === rr ? Zr = Pa(Wr, (Qr = Ba(Wr)) <= ar.toExpNeg || Qr >= ar.toExpPos) : (na(rr, 1, ja), void 0 === Sr ? Sr = ar.rounding : na(Sr, 0, 8), Zr = Pa(Wr = la(new ar(Wr), rr, Sr), rr <= (Qr = Ba(Wr)) || Qr <= ar.toExpNeg, rr)), Zr
    }, za.toSignificantDigits = za.tosd = function(rr, Sr) {
      var Qr = this.constructor;
      return void 0 === rr ? (rr = Qr.precision, Sr = Qr.rounding) : (na(rr, 1, ja), void 0 === Sr ? Sr = Qr.rounding : na(Sr, 0, 8)), la(new Qr(this), rr, Sr)
    }, za.toString = za.valueOf = za.val = za.toJSON = za[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var rr = this,
        Sr = Ba(rr),
        Qr = rr.constructor;
      return Pa(rr, Sr <= Qr.toExpNeg || Sr >= Qr.toExpPos)
    };
    var Ka = function() {
      function rr(rr, Sr) {
        var Qr, Zr = 0,
          Wr = rr.length;
        for (rr = rr.slice(); Wr--;) Qr = rr[Wr] * Sr + Zr, rr[Wr] = Qr % Ua | 0, Zr = Qr / Ua | 0;
        return Zr && rr.unshift(Zr), rr
      }

      function Sr(rr, Sr, Qr, Zr) {
        var Wr, ar;
        if (Qr != Zr) ar = Qr > Zr ? 1 : -1;
        else
          for (Wr = ar = 0; Wr < Qr; Wr++)
            if (rr[Wr] != Sr[Wr]) {
              ar = rr[Wr] > Sr[Wr] ? 1 : -1;
              break
            } return ar
      }

      function Qr(rr, Sr, Qr) {
        for (var Zr = 0; Qr--;) rr[Qr] -= Zr, Zr = rr[Qr] < Sr[Qr] ? 1 : 0, rr[Qr] = Zr * Ua + rr[Qr] - Sr[Qr];
        for (; !rr[0] && rr.length > 1;) rr.shift()
      }
      return function(Zr, Wr, ar, jr) {
        var Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr, zr, Yr, nr, er, Kr, yr, Br, Tr, vr = Zr.constructor,
          Or = Zr.s == Wr.s ? 1 : -1,
          Lr = Zr.d,
          lr = Wr.d;
        if (!Zr.s) return new vr(Zr);
        if (!Wr.s) throw Error(fa + "Division by zero");
        for (fr = Zr.e - Wr.e, Br = lr.length, Kr = Lr.length, Ur = (Nr = new vr(Or)).d = [], Er = 0; lr[Er] == (Lr[Er] || 0);) ++Er;
        if (lr[Er] > (Lr[Er] || 0) && --fr, (Yr = null == ar ? ar = vr.precision : jr ? ar + (Ba(Zr) - Ba(Wr)) + 1 : ar) < 0) return new vr(0);
        if (Yr = Yr / 7 + 2 | 0, Er = 0, 1 == Br)
          for (pr = 0, lr = lr[0], Yr++;
            (Er < Kr || pr) && Yr--; Er++) nr = pr * Ua + (Lr[Er] || 0), Ur[Er] = nr / lr | 0, pr = nr % lr | 0;
        else {
          for ((pr = Ua / (lr[0] + 1) | 0) > 1 && (lr = rr(lr, pr), Lr = rr(Lr, pr), Br = lr.length, Kr = Lr.length), er = Br, hr = (tr = Lr.slice(0, Br)).length; hr < Br;) tr[hr++] = 0;
          (Tr = lr.slice()).unshift(0), yr = lr[0], lr[1] >= Ua / 2 && ++yr;
          do {
            pr = 0, (Ir = Sr(lr, tr, Br, hr)) < 0 ? (zr = tr[0], Br != hr && (zr = zr * Ua + (tr[1] || 0)), (pr = zr / yr | 0) > 1 ? (pr >= Ua && (pr = Ua - 1), 1 == (Ir = Sr(xr = rr(lr, pr), tr, mr = xr.length, hr = tr.length)) && (pr--, Qr(xr, Br < mr ? Tr : lr, mr))) : (0 == pr && (Ir = pr = 1), xr = lr.slice()), (mr = xr.length) < hr && xr.unshift(0), Qr(tr, xr, hr), -1 == Ir && (Ir = Sr(lr, tr, Br, hr = tr.length)) < 1 && (pr++, Qr(tr, Br < hr ? Tr : lr, hr)), hr = tr.length) : 0 === Ir && (pr++, tr = [0]), Ur[Er++] = pr, Ir && tr[0] ? tr[hr++] = Lr[er] || 0 : (tr = [Lr[er]], hr = 1)
          } while ((er++ < Kr || void 0 !== tr[0]) && Yr--)
        }
        return Ur[0] || Ur.shift(), Nr.e = fr, la(Nr, jr ? ar + Ba(Nr) + 1 : ar)
      }
    }();

    function ya(rr, Sr) {
      var Qr, Zr, Wr, ar, jr, Ir = 0,
        fr = 0,
        Er = rr.constructor,
        pr = Er.precision;
      if (Ba(rr) > 16) throw Error(pa + Ba(rr));
      if (!rr.s) return new Er(aa);
      for (null == Sr ? (Ia = !1, jr = pr) : jr = Sr, ar = new Er(.03125); rr.abs().gte(.1);) rr = rr.times(ar), fr += 5;
      for (jr += Math.log(ma(2, fr)) / Math.LN10 * 2 + 5 | 0, Qr = Zr = Wr = new Er(aa), Er.precision = jr;;) {
        if (Zr = la(Zr.times(rr), jr), Qr = Qr.times(++Ir), ea((ar = Wr.plus(Ka(Zr, Qr, jr))).d).slice(0, jr) === ea(Wr.d).slice(0, jr)) {
          for (; fr--;) Wr = la(Wr.times(Wr), jr);
          return Er.precision = pr, null == Sr ? (Ia = !0, la(Wr, pr)) : Wr
        }
        Wr = ar
      }
    }

    function Ba(rr) {
      for (var Sr = 7 * rr.e, Qr = rr.d[0]; Qr >= 10; Qr /= 10) Sr++;
      return Sr
    }

    function Ta(rr, Sr, Qr) {
      if (Sr > rr.LN10.sd()) throw Ia = !0, Qr && (rr.precision = Qr), Error(fa + "LN10 precision limit exceeded");
      return la(new rr(rr.LN10), Sr)
    }

    function va(rr) {
      for (var Sr = ""; rr--;) Sr += "0";
      return Sr
    }

    function Oa(rr, Sr) {
      var Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr, xr = 1,
        mr = rr,
        Nr = mr.d,
        Ur = mr.constructor,
        tr = Ur.precision;
      if (mr.s < 1) throw Error(fa + (mr.s ? "NaN" : "-Infinity"));
      if (mr.eq(aa)) return new Ur(0);
      if (null == Sr ? (Ia = !1, Er = tr) : Er = Sr, mr.eq(10)) return null == Sr && (Ia = !0), Ta(Ur, Er);
      if (Er += 10, Ur.precision = Er, Zr = (Qr = ea(Nr)).charAt(0), ar = Ba(mr), !(Math.abs(ar) < 15e14)) return fr = Ta(Ur, Er + 2, tr).times(ar + ""), mr = Oa(new Ur(Zr + "." + Qr.slice(1)), Er - 10).plus(fr), Ur.precision = tr, null == Sr ? (Ia = !0, la(mr, tr)) : mr;
      for (; Zr < 7 && 1 != Zr || 1 == Zr && Qr.charAt(1) > 3;) Zr = (Qr = ea((mr = mr.times(rr)).d)).charAt(0), xr++;
      for (ar = Ba(mr), Zr > 1 ? (mr = new Ur("0." + Qr), ar++) : mr = new Ur(Zr + "." + Qr.slice(1)), Ir = jr = mr = Ka(mr.minus(aa), mr.plus(aa), Er), pr = la(mr.times(mr), Er), Wr = 3;;) {
        if (jr = la(jr.times(pr), Er), ea((fr = Ir.plus(Ka(jr, new Ur(Wr), Er))).d).slice(0, Er) === ea(Ir.d).slice(0, Er)) return Ir = Ir.times(2), 0 !== ar && (Ir = Ir.plus(Ta(Ur, Er + 2, tr).times(ar + ""))), Ir = Ka(Ir, new Ur(xr), Er), Ur.precision = tr, null == Sr ? (Ia = !0, la(Ir, tr)) : Ir;
        Ir = fr, Wr += 2
      }
    }

    function La(rr, Sr) {
      var Qr, Zr, Wr;
      for ((Qr = Sr.indexOf(".")) > -1 && (Sr = Sr.replace(".", "")), (Zr = Sr.search(/e/i)) > 0 ? (Qr < 0 && (Qr = Zr), Qr += +Sr.slice(Zr + 1), Sr = Sr.substring(0, Zr)) : Qr < 0 && (Qr = Sr.length), Zr = 0; 48 === Sr.charCodeAt(Zr);) ++Zr;
      for (Wr = Sr.length; 48 === Sr.charCodeAt(Wr - 1);) --Wr;
      if (Sr = Sr.slice(Zr, Wr)) {
        if (Wr -= Zr, Qr = Qr - Zr - 1, rr.e = xa(Qr / 7), rr.d = [], Zr = (Qr + 1) % 7, Qr < 0 && (Zr += 7), Zr < Wr) {
          for (Zr && rr.d.push(+Sr.slice(0, Zr)), Wr -= 7; Zr < Wr;) rr.d.push(+Sr.slice(Zr, Zr += 7));
          Zr = 7 - (Sr = Sr.slice(Zr)).length
        } else Zr -= Wr;
        for (; Zr--;) Sr += "0";
        if (rr.d.push(+Sr), Ia && (rr.e > ha || rr.e < -ha)) throw Error(pa + Qr)
      } else rr.s = 0, rr.e = 0, rr.d = [0];
      return rr
    }

    function la(rr, Sr, Qr) {
      var Zr, Wr, ar, jr, Ir, fr, Er, pr, xr = rr.d;
      for (jr = 1, ar = xr[0]; ar >= 10; ar /= 10) jr++;
      if ((Zr = Sr - jr) < 0) Zr += 7, Wr = Sr, Er = xr[pr = 0];
      else {
        if ((pr = Math.ceil((Zr + 1) / 7)) >= (ar = xr.length)) return rr;
        for (Er = ar = xr[pr], jr = 1; ar >= 10; ar /= 10) jr++;
        Wr = (Zr %= 7) - 7 + jr
      }
      if (void 0 !== Qr && (Ir = Er / (ar = ma(10, jr - Wr - 1)) % 10 | 0, fr = Sr < 0 || void 0 !== xr[pr + 1] || Er % ar, fr = Qr < 4 ? (Ir || fr) && (0 == Qr || Qr == (rr.s < 0 ? 3 : 2)) : Ir > 5 || 5 == Ir && (4 == Qr || fr || 6 == Qr && (Zr > 0 ? Wr > 0 ? Er / ma(10, jr - Wr) : 0 : xr[pr - 1]) % 10 & 1 || Qr == (rr.s < 0 ? 8 : 7))), Sr < 1 || !xr[0]) return fr ? (ar = Ba(rr), xr.length = 1, Sr = Sr - ar - 1, xr[0] = ma(10, (7 - Sr % 7) % 7), rr.e = xa(-Sr / 7) || 0) : (xr.length = 1, xr[0] = rr.e = rr.s = 0), rr;
      if (0 == Zr ? (xr.length = pr, ar = 1, pr--) : (xr.length = pr + 1, ar = ma(10, 7 - Zr), xr[pr] = Wr > 0 ? (Er / ma(10, jr - Wr) % ma(10, Wr) | 0) * ar : 0), fr)
        for (;;) {
          if (0 == pr) {
            (xr[0] += ar) == Ua && (xr[0] = 1, ++rr.e);
            break
          }
          if (xr[pr] += ar, xr[pr] != Ua) break;
          xr[pr--] = 0, ar = 1
        }
      for (Zr = xr.length; 0 === xr[--Zr];) xr.pop();
      if (Ia && (rr.e > ha || rr.e < -ha)) throw Error(pa + Ba(rr));
      return rr
    }

    function Xa(rr, Sr) {
      var Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr, xr, mr = rr.constructor,
        Nr = mr.precision;
      if (!rr.s || !Sr.s) return Sr.s ? Sr.s = -Sr.s : Sr = new mr(rr), Ia ? la(Sr, Nr) : Sr;
      if (fr = rr.d, xr = Sr.d, Zr = Sr.e, Er = rr.e, fr = fr.slice(), jr = Er - Zr) {
        for ((pr = jr < 0) ? (Qr = fr, jr = -jr, Ir = xr.length) : (Qr = xr, Zr = Er, Ir = fr.length), jr > (Wr = Math.max(Math.ceil(Nr / 7), Ir) + 2) && (jr = Wr, Qr.length = 1), Qr.reverse(), Wr = jr; Wr--;) Qr.push(0);
        Qr.reverse()
      } else {
        for ((pr = (Wr = fr.length) < (Ir = xr.length)) && (Ir = Wr), Wr = 0; Wr < Ir; Wr++)
          if (fr[Wr] != xr[Wr]) {
            pr = fr[Wr] < xr[Wr];
            break
          } jr = 0
      }
      for (pr && (Qr = fr, fr = xr, xr = Qr, Sr.s = -Sr.s), Ir = fr.length, Wr = xr.length - Ir; Wr > 0; --Wr) fr[Ir++] = 0;
      for (Wr = xr.length; Wr > jr;) {
        if (fr[--Wr] < xr[Wr]) {
          for (ar = Wr; ar && 0 === fr[--ar];) fr[ar] = Ua - 1;
          --fr[ar], fr[Wr] += Ua
        }
        fr[Wr] -= xr[Wr]
      }
      for (; 0 === fr[--Ir];) fr.pop();
      for (; 0 === fr[0]; fr.shift()) --Zr;
      return fr[0] ? (Sr.d = fr, Sr.e = Zr, Ia ? la(Sr, Nr) : Sr) : new mr(0)
    }

    function Pa(rr, Sr, Qr) {
      var Zr, Wr = Ba(rr),
        ar = ea(rr.d),
        jr = ar.length;
      return Sr ? (Qr && (Zr = Qr - jr) > 0 ? ar = ar.charAt(0) + "." + ar.slice(1) + va(Zr) : jr > 1 && (ar = ar.charAt(0) + "." + ar.slice(1)), ar = ar + (Wr < 0 ? "e" : "e+") + Wr) : Wr < 0 ? (ar = "0." + va(-Wr - 1) + ar, Qr && (Zr = Qr - jr) > 0 && (ar += va(Zr))) : Wr >= jr ? (ar += va(Wr + 1 - jr), Qr && (Zr = Qr - Wr - 1) > 0 && (ar = ar + "." + va(Zr))) : ((Zr = Wr + 1) < jr && (ar = ar.slice(0, Zr) + "." + ar.slice(Zr)), Qr && (Zr = Qr - jr) > 0 && (Wr + 1 === jr && (ar += "."), ar += va(Zr))), rr.s < 0 ? "-" + ar : ar
    }

    function Ha(rr, Sr) {
      if (rr.length > Sr) return rr.length = Sr, !0
    }

    function qa(rr) {
      if (!rr || "object" !== typeof rr) throw Error(fa + "Object expected");
      var Sr, Qr, Zr, Wr = ["precision", 1, ja, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (Sr = 0; Sr < Wr.length; Sr += 3)
        if (void 0 !== (Zr = rr[Qr = Wr[Sr]])) {
          if (!(xa(Zr) === Zr && Zr >= Wr[Sr + 1] && Zr <= Wr[Sr + 2])) throw Error(Ea + Qr + ": " + Zr);
          this[Qr] = Zr
        } if (void 0 !== (Zr = rr[Qr = "LN10"])) {
        if (Zr != Math.LN10) throw Error(Ea + Qr + ": " + Zr);
        this[Qr] = new this(Zr)
      }
      return this
    }
    var Ra = function rr(Sr) {
      var Qr, Zr, Wr;

      function ar(rr) {
        var Sr = this;
        if (!(Sr instanceof ar)) return new ar(rr);
        if (Sr.constructor = ar, rr instanceof ar) return Sr.s = rr.s, Sr.e = rr.e, void(Sr.d = (rr = rr.d) ? rr.slice() : rr);
        if ("number" === typeof rr) {
          if (0 * rr !== 0) throw Error(Ea + rr);
          if (rr > 0) Sr.s = 1;
          else {
            if (!(rr < 0)) return Sr.s = 0, Sr.e = 0, void(Sr.d = [0]);
            rr = -rr, Sr.s = -1
          }
          return rr === ~~rr && rr < 1e7 ? (Sr.e = 0, void(Sr.d = [rr])) : La(Sr, rr.toString())
        }
        if ("string" !== typeof rr) throw Error(Ea + rr);
        if (45 === rr.charCodeAt(0) ? (rr = rr.slice(1), Sr.s = -1) : Sr.s = 1, !Na.test(rr)) throw Error(Ea + rr);
        La(Sr, rr)
      }
      if (ar.prototype = za, ar.ROUND_UP = 0, ar.ROUND_DOWN = 1, ar.ROUND_CEIL = 2, ar.ROUND_FLOOR = 3, ar.ROUND_HALF_UP = 4, ar.ROUND_HALF_DOWN = 5, ar.ROUND_HALF_EVEN = 6, ar.ROUND_HALF_CEIL = 7, ar.ROUND_HALF_FLOOR = 8, ar.clone = rr, ar.config = ar.set = qa, void 0 === Sr && (Sr = {}), Sr)
        for (Wr = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], Qr = 0; Qr < Wr.length;) Sr.hasOwnProperty(Zr = Wr[Qr++]) || (Sr[Zr] = this[Zr]);
      return ar.config(Sr), ar
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    aa = new Ra(1);
    var ga;
    ! function(rr) {
      rr.AED = "aed", rr.AFN = "afn", rr.ALL = "all", rr.AMD = "amd", rr.ANG = "ang", rr.AOA = "aoa", rr.ARS = "ars", rr.AUD = "aud", rr.AWG = "awg", rr.AZN = "azn", rr.BAM = "bam", rr.BBD = "bbd", rr.BDT = "bdt", rr.BGN = "bgn", rr.BHD = "bhd", rr.BIF = "bif", rr.BMD = "bmd", rr.BND = "bnd", rr.BOB = "bob", rr.BOV = "bov", rr.BRL = "brl", rr.BSD = "bsd", rr.BTN = "btn", rr.BWP = "bwp", rr.BYN = "byn", rr.BYR = "byr", rr.BZD = "bzd", rr.CAD = "cad", rr.CDF = "cdf", rr.CHE = "che", rr.CHF = "chf", rr.CHW = "chw", rr.CLF = "clf", rr.CLP = "clp", rr.CNY = "cny", rr.COP = "cop", rr.COU = "cou", rr.CRC = "crc", rr.CUC = "cuc", rr.CUP = "cup", rr.CVE = "cve", rr.CZK = "czk", rr.DJF = "djf", rr.DKK = "dkk", rr.DOP = "dop", rr.DZD = "dzd", rr.EGP = "egp", rr.ERN = "ern", rr.ETB = "etb", rr.EUR = "eur", rr.FJD = "fjd", rr.FKP = "fkp", rr.GBP = "gbp", rr.GEL = "gel", rr.GHS = "ghs", rr.GIP = "gip", rr.GMD = "gmd", rr.GNF = "gnf", rr.GTQ = "gtq", rr.GYD = "gyd", rr.HKD = "hkd", rr.HNL = "hnl", rr.HRK = "hrk", rr.HTG = "htg", rr.HUF = "huf", rr.IDR = "idr", rr.ILS = "ils", rr.INR = "inr", rr.IQD = "iqd", rr.IRR = "irr", rr.ISK = "isk", rr.JMD = "jmd", rr.JOD = "jod", rr.JPY = "jpy", rr.KES = "kes", rr.KGS = "kgs", rr.KHR = "khr", rr.KMF = "kmf", rr.KPW = "kpw", rr.KRW = "krw", rr.KWD = "kwd", rr.KYD = "kyd", rr.KZT = "kzt", rr.LAK = "lak", rr.LBP = "lbp", rr.LKR = "lkr", rr.LRD = "lrd", rr.LSL = "lsl", rr.LTL = "ltl", rr.LVL = "lvl", rr.LYD = "lyd", rr.MAD = "mad", rr.MDL = "mdl", rr.MGA = "mga", rr.MKD = "mkd", rr.MMK = "mmk", rr.MNT = "mnt", rr.MOP = "mop", rr.MRO = "mro", rr.MUR = "mur", rr.MVR = "mvr", rr.MWK = "mwk", rr.MXN = "mxn", rr.MXV = "mxv", rr.MYR = "myr", rr.MZN = "mzn", rr.NAD = "nad", rr.NGN = "ngn", rr.NIO = "nio", rr.NOK = "nok", rr.NPR = "npr", rr.NZD = "nzd", rr.OMR = "omr", rr.PAB = "pab", rr.PEN = "pen", rr.PGK = "pgk", rr.PHP = "php", rr.PKR = "pkr", rr.PLN = "pln", rr.PYG = "pyg", rr.QAR = "qar", rr.RON = "ron", rr.RSD = "rsd", rr.RUB = "rub", rr.RWF = "rwf", rr.SAR = "sar", rr.SBD = "sbd", rr.SCR = "scr", rr.SDG = "sdg", rr.SEK = "sek", rr.SGD = "sgd", rr.SHP = "shp", rr.SLL = "sll", rr.SOS = "sos", rr.SRD = "srd", rr.SSP = "ssp", rr.STD = "std", rr.SVC = "svc", rr.SYP = "syp", rr.SZL = "szl", rr.THB = "thb", rr.TJS = "tjs", rr.TMT = "tmt", rr.TND = "tnd", rr.TOP = "top", rr.TRY = "try", rr.TTD = "ttd", rr.TWD = "twd", rr.TZS = "tzs", rr.UAH = "uah", rr.UGX = "ugx", rr.USD = "usd", rr.USN = "usn", rr.USS = "uss", rr.UYI = "uyi", rr.UYU = "uyu", rr.UZS = "uzs", rr.VEF = "vef", rr.VND = "vnd", rr.VUV = "vuv", rr.WST = "wst", rr.XAF = "xaf", rr.XAG = "xag", rr.XAU = "xau", rr.XBA = "xba", rr.XBB = "xbb", rr.XBC = "xbc", rr.XBD = "xbd", rr.XCD = "xcd", rr.XDR = "xdr", rr.XFU = "xfu", rr.XOF = "xof", rr.XPD = "xpd", rr.XPF = "xpf", rr.XPT = "xpt", rr.XSU = "xsu", rr.XTS = "xts", rr.XUA = "xua", rr.YER = "yer", rr.ZAR = "zar", rr.ZMW = "zmw", rr.ZWL = "zwl"
    }(ga || (ga = {}));
    ga.AED, ga.AFN, ga.ALL, ga.AMD, ga.ANG, ga.AOA, ga.ARS, ga.AUD, ga.AWG, ga.AZN, ga.BAM, ga.BBD, ga.BDT, ga.BGN, ga.BHD, ga.BIF, ga.BMD, ga.BND, ga.BOB, ga.BOV, ga.BRL, ga.BSD, ga.BTN, ga.BWP, ga.BYR, ga.BYN, ga.BZD, ga.CAD, ga.CDF, ga.CHE, ga.CHF, ga.CHW, ga.CLF, ga.CLP, ga.CNY, ga.COP, ga.COU, ga.CRC, ga.CUC, ga.CUP, ga.CVE, ga.CZK, ga.DJF, ga.DKK, ga.DOP, ga.DZD, ga.EGP, ga.ERN, ga.ETB, ga.EUR, ga.FJD, ga.FKP, ga.GBP, ga.GEL, ga.GHS, ga.GIP, ga.GMD, ga.GNF, ga.GTQ, ga.GYD, ga.HKD, ga.HNL, ga.HRK, ga.HTG, ga.HUF, ga.IDR, ga.ILS, ga.INR, ga.IQD, ga.IRR, ga.ISK, ga.JMD, ga.JOD, ga.JPY, ga.KES, ga.KGS, ga.KHR, ga.KMF, ga.KPW, ga.KRW, ga.KWD, ga.KYD, ga.KZT, ga.LAK, ga.LBP, ga.LKR, ga.LRD, ga.LSL, ga.LTL, ga.LVL, ga.LYD, ga.MAD, ga.MDL, ga.MGA, ga.MKD, ga.MMK, ga.MNT, ga.MOP, ga.MRO, ga.MUR, ga.MVR, ga.MWK, ga.MXN, ga.MXV, ga.MYR, ga.MZN, ga.NAD, ga.NGN, ga.NIO, ga.NOK, ga.NPR, ga.NZD, ga.OMR, ga.PAB, ga.PEN, ga.PGK, ga.PHP, ga.PKR, ga.PLN, ga.PYG, ga.QAR, ga.RON, ga.RSD, ga.RUB, ga.RWF, ga.SAR, ga.SBD, ga.SCR, ga.SDG, ga.SEK, ga.SGD, ga.SHP, ga.SLL, ga.SOS, ga.SRD, ga.SSP, ga.STD, ga.SVC, ga.SYP, ga.SZL, ga.THB, ga.TJS, ga.TMT, ga.TND, ga.TOP, ga.TRY, ga.TTD, ga.TWD, ga.TZS, ga.UAH, ga.UGX, ga.USD, ga.USN, ga.USS, ga.UYI, ga.UYU, ga.UZS, ga.VEF, ga.VND, ga.VUV, ga.WST, ga.XAF, ga.XAG, ga.XAU, ga.XBA, ga.XBB, ga.XBC, ga.XBD, ga.XCD, ga.XDR, ga.XFU, ga.XOF, ga.XPD, ga.XPF, ga.XPT, ga.XSU, ga.XTS, ga.XUA, ga.YER, ga.ZAR, ga.ZMW, ga.ZWL;
    var Ca = {
      exports: {}
    };
    ! function(rr, Sr) {
      var Qr = "__lodash_hash_undefined__",
        Zr = 9007199254740991,
        ar = "[object Arguments]",
        jr = "[object Array]",
        Ir = "[object Boolean]",
        fr = "[object Date]",
        Er = "[object Error]",
        pr = "[object Function]",
        xr = "[object Map]",
        mr = "[object Number]",
        Nr = "[object Object]",
        Ur = "[object Promise]",
        tr = "[object RegExp]",
        hr = "[object Set]",
        zr = "[object String]",
        Yr = "[object Symbol]",
        nr = "[object WeakMap]",
        er = "[object ArrayBuffer]",
        Kr = "[object DataView]",
        yr = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Br = /^\w*$/,
        Tr = /^\./,
        vr = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Or = /\\(\\)?/g,
        Lr = /^\[object .+?Constructor\]$/,
        lr = /^(?:0|[1-9]\d*)$/,
        Xr = {};
      Xr["[object Float32Array]"] = Xr["[object Float64Array]"] = Xr["[object Int8Array]"] = Xr["[object Int16Array]"] = Xr["[object Int32Array]"] = Xr["[object Uint8Array]"] = Xr["[object Uint8ClampedArray]"] = Xr["[object Uint16Array]"] = Xr["[object Uint32Array]"] = !0, Xr[ar] = Xr[jr] = Xr[er] = Xr[Ir] = Xr[Kr] = Xr[fr] = Xr[Er] = Xr[pr] = Xr[xr] = Xr[mr] = Xr[Nr] = Xr[tr] = Xr[hr] = Xr[zr] = Xr[nr] = !1;
      var Pr = "object" == typeof Wr && Wr && Wr.Object === Object && Wr,
        Hr = "object" == typeof self && self && self.Object === Object && self,
        qr = Pr || Hr || Function("return this")(),
        Rr = Sr && !Sr.nodeType && Sr,
        gr = Rr && rr && !rr.nodeType && rr,
        Cr = gr && gr.exports === Rr && Pr.process,
        Mr = function() {
          try {
            return Cr && Cr.binding("util")
          } catch (rr) {}
        }(),
        Gr = Mr && Mr.isTypedArray;

      function kr(rr, Sr) {
        for (var Qr = -1, Zr = rr ? rr.length : 0; ++Qr < Zr && !1 !== Sr(rr[Qr], Qr, rr););
        return rr
      }

      function Ar(rr, Sr) {
        for (var Qr = -1, Zr = rr ? rr.length : 0; ++Qr < Zr;)
          if (Sr(rr[Qr], Qr, rr)) return !0;
        return !1
      }

      function Vr(rr) {
        var Sr = !1;
        if (null != rr && "function" != typeof rr.toString) try {
          Sr = !!(rr + "")
        } catch (Qr) {}
        return Sr
      }

      function ir(rr) {
        var Sr = -1,
          Qr = Array(rr.size);
        return rr.forEach((function(rr, Zr) {
          Qr[++Sr] = [Zr, rr]
        })), Qr
      }

      function wr(rr, Sr) {
        return function(Qr) {
          return rr(Sr(Qr))
        }
      }

      function cr(rr) {
        var Sr = -1,
          Qr = Array(rr.size);
        return rr.forEach((function(rr) {
          Qr[++Sr] = rr
        })), Qr
      }
      var Fr = Array.prototype,
        or = Function.prototype,
        br = Object.prototype,
        Jr = qr["__core-js_shared__"],
        Dr = function() {
          var rr = /[^.]+$/.exec(Jr && Jr.keys && Jr.keys.IE_PROTO || "");
          return rr ? "Symbol(src)_1." + rr : ""
        }(),
        dr = or.toString,
        sr = br.hasOwnProperty,
        ur = br.toString,
        rS = RegExp("^" + dr.call(sr).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        SS = qr.Symbol,
        QS = qr.Uint8Array,
        ZS = wr(Object.getPrototypeOf, Object),
        WS = Object.create,
        aS = br.propertyIsEnumerable,
        jS = Fr.splice,
        IS = wr(Object.keys, Object),
        fS = iS(qr, "DataView"),
        ES = iS(qr, "Map"),
        pS = iS(qr, "Promise"),
        xS = iS(qr, "Set"),
        mS = iS(qr, "WeakMap"),
        NS = iS(Object, "create"),
        US = dS(fS),
        tS = dS(ES),
        hS = dS(pS),
        zS = dS(xS),
        YS = dS(mS),
        nS = SS ? SS.prototype : void 0,
        eS = nS ? nS.valueOf : void 0,
        KS = nS ? nS.toString : void 0;

      function yS(rr) {
        var Sr = -1,
          Qr = rr ? rr.length : 0;
        for (this.clear(); ++Sr < Qr;) {
          var Zr = rr[Sr];
          this.set(Zr[0], Zr[1])
        }
      }

      function BS(rr) {
        var Sr = -1,
          Qr = rr ? rr.length : 0;
        for (this.clear(); ++Sr < Qr;) {
          var Zr = rr[Sr];
          this.set(Zr[0], Zr[1])
        }
      }

      function TS(rr) {
        var Sr = -1,
          Qr = rr ? rr.length : 0;
        for (this.clear(); ++Sr < Qr;) {
          var Zr = rr[Sr];
          this.set(Zr[0], Zr[1])
        }
      }

      function vS(rr) {
        var Sr = -1,
          Qr = rr ? rr.length : 0;
        for (this.__data__ = new TS; ++Sr < Qr;) this.add(rr[Sr])
      }

      function OS(rr) {
        this.__data__ = new BS(rr)
      }

      function LS(rr, Sr) {
        var Qr = SQ(rr) || rQ(rr) ? function(rr, Sr) {
            for (var Qr = -1, Zr = Array(rr); ++Qr < rr;) Zr[Qr] = Sr(Qr);
            return Zr
          }(rr.length, String) : [],
          Zr = Qr.length,
          Wr = !!Zr;
        for (var ar in rr) !Sr && !sr.call(rr, ar) || Wr && ("length" == ar || cS(ar, Zr)) || Qr.push(ar);
        return Qr
      }

      function lS(rr, Sr) {
        for (var Qr = rr.length; Qr--;)
          if (uS(rr[Qr][0], Sr)) return Qr;
        return -1
      }
      yS.prototype.clear = function() {
        this.__data__ = NS ? NS(null) : {}
      }, yS.prototype.delete = function(rr) {
        return this.has(rr) && delete this.__data__[rr]
      }, yS.prototype.get = function(rr) {
        var Sr = this.__data__;
        if (NS) {
          var Zr = Sr[rr];
          return Zr === Qr ? void 0 : Zr
        }
        return sr.call(Sr, rr) ? Sr[rr] : void 0
      }, yS.prototype.has = function(rr) {
        var Sr = this.__data__;
        return NS ? void 0 !== Sr[rr] : sr.call(Sr, rr)
      }, yS.prototype.set = function(rr, Sr) {
        return this.__data__[rr] = NS && void 0 === Sr ? Qr : Sr, this
      }, BS.prototype.clear = function() {
        this.__data__ = []
      }, BS.prototype.delete = function(rr) {
        var Sr = this.__data__,
          Qr = lS(Sr, rr);
        return !(Qr < 0) && (Qr == Sr.length - 1 ? Sr.pop() : jS.call(Sr, Qr, 1), !0)
      }, BS.prototype.get = function(rr) {
        var Sr = this.__data__,
          Qr = lS(Sr, rr);
        return Qr < 0 ? void 0 : Sr[Qr][1]
      }, BS.prototype.has = function(rr) {
        return lS(this.__data__, rr) > -1
      }, BS.prototype.set = function(rr, Sr) {
        var Qr = this.__data__,
          Zr = lS(Qr, rr);
        return Zr < 0 ? Qr.push([rr, Sr]) : Qr[Zr][1] = Sr, this
      }, TS.prototype.clear = function() {
        this.__data__ = {
          hash: new yS,
          map: new(ES || BS),
          string: new yS
        }
      }, TS.prototype.delete = function(rr) {
        return VS(this, rr).delete(rr)
      }, TS.prototype.get = function(rr) {
        return VS(this, rr).get(rr)
      }, TS.prototype.has = function(rr) {
        return VS(this, rr).has(rr)
      }, TS.prototype.set = function(rr, Sr) {
        return VS(this, rr).set(rr, Sr), this
      }, vS.prototype.add = vS.prototype.push = function(rr) {
        return this.__data__.set(rr, Qr), this
      }, vS.prototype.has = function(rr) {
        return this.__data__.has(rr)
      }, OS.prototype.clear = function() {
        this.__data__ = new BS
      }, OS.prototype.delete = function(rr) {
        return this.__data__.delete(rr)
      }, OS.prototype.get = function(rr) {
        return this.__data__.get(rr)
      }, OS.prototype.has = function(rr) {
        return this.__data__.has(rr)
      }, OS.prototype.set = function(rr, Sr) {
        var Qr = this.__data__;
        if (Qr instanceof BS) {
          var Zr = Qr.__data__;
          if (!ES || Zr.length < 199) return Zr.push([rr, Sr]), this;
          Qr = this.__data__ = new TS(Zr)
        }
        return Qr.set(rr, Sr), this
      };
      var XS, PS = function(rr, Sr, Qr) {
        for (var Zr = -1, Wr = Object(rr), ar = Qr(rr), jr = ar.length; jr--;) {
          var Ir = ar[XS ? jr : ++Zr];
          if (!1 === Sr(Wr[Ir], Ir, Wr)) break
        }
        return rr
      };

      function HS(rr, Sr) {
        return rr && PS(rr, Sr, pQ)
      }

      function qS(rr, Sr) {
        for (var Qr = 0, Zr = (Sr = FS(Sr, rr) ? [Sr] : kS(Sr)).length; null != rr && Qr < Zr;) rr = rr[DS(Sr[Qr++])];
        return Qr && Qr == Zr ? rr : void 0
      }

      function RS(rr, Sr) {
        return null != rr && Sr in Object(rr)
      }

      function gS(rr, Sr, Qr, Zr, Wr) {
        return rr === Sr || (null == rr || null == Sr || !aQ(rr) && !jQ(Sr) ? rr !== rr && Sr !== Sr : function(rr, Sr, Qr, Zr, Wr, pr) {
          var Ur = SQ(rr),
            nr = SQ(Sr),
            yr = jr,
            Br = jr;
          Ur || (yr = (yr = wS(rr)) == ar ? Nr : yr);
          nr || (Br = (Br = wS(Sr)) == ar ? Nr : Br);
          var Tr = yr == Nr && !Vr(rr),
            vr = Br == Nr && !Vr(Sr),
            Or = yr == Br;
          if (Or && !Tr) return pr || (pr = new OS), Ur || EQ(rr) ? AS(rr, Sr, Qr, Zr, Wr, pr) : function(rr, Sr, Qr, Zr, Wr, ar, jr) {
            switch (Qr) {
              case Kr:
                if (rr.byteLength != Sr.byteLength || rr.byteOffset != Sr.byteOffset) return !1;
                rr = rr.buffer, Sr = Sr.buffer;
              case er:
                return !(rr.byteLength != Sr.byteLength || !Zr(new QS(rr), new QS(Sr)));
              case Ir:
              case fr:
              case mr:
                return uS(+rr, +Sr);
              case Er:
                return rr.name == Sr.name && rr.message == Sr.message;
              case tr:
              case zr:
                return rr == Sr + "";
              case xr:
                var pr = ir;
              case hr:
                var Nr = 2 & ar;
                if (pr || (pr = cr), rr.size != Sr.size && !Nr) return !1;
                var Ur = jr.get(rr);
                if (Ur) return Ur == Sr;
                ar |= 1, jr.set(rr, Sr);
                var nr = AS(pr(rr), pr(Sr), Zr, Wr, ar, jr);
                return jr.delete(rr), nr;
              case Yr:
                if (eS) return eS.call(rr) == eS.call(Sr)
            }
            return !1
          }(rr, Sr, yr, Qr, Zr, Wr, pr);
          if (!(2 & Wr)) {
            var Lr = Tr && sr.call(rr, "__wrapped__"),
              lr = vr && sr.call(Sr, "__wrapped__");
            if (Lr || lr) {
              var Xr = Lr ? rr.value() : rr,
                Pr = lr ? Sr.value() : Sr;
              return pr || (pr = new OS), Qr(Xr, Pr, Zr, Wr, pr)
            }
          }
          if (!Or) return !1;
          return pr || (pr = new OS),
            function(rr, Sr, Qr, Zr, Wr, ar) {
              var jr = 2 & Wr,
                Ir = pQ(rr),
                fr = Ir.length,
                Er = pQ(Sr),
                pr = Er.length;
              if (fr != pr && !jr) return !1;
              var xr = fr;
              for (; xr--;) {
                var mr = Ir[xr];
                if (!(jr ? mr in Sr : sr.call(Sr, mr))) return !1
              }
              var Nr = ar.get(rr);
              if (Nr && ar.get(Sr)) return Nr == Sr;
              var Ur = !0;
              ar.set(rr, Sr), ar.set(Sr, rr);
              var tr = jr;
              for (; ++xr < fr;) {
                var hr = rr[mr = Ir[xr]],
                  zr = Sr[mr];
                if (Zr) var Yr = jr ? Zr(zr, hr, mr, Sr, rr, ar) : Zr(hr, zr, mr, rr, Sr, ar);
                if (!(void 0 === Yr ? hr === zr || Qr(hr, zr, Zr, Wr, ar) : Yr)) {
                  Ur = !1;
                  break
                }
                tr || (tr = "constructor" == mr)
              }
              if (Ur && !tr) {
                var nr = rr.constructor,
                  er = Sr.constructor;
                nr == er || !("constructor" in rr) || !("constructor" in Sr) || "function" == typeof nr && nr instanceof nr && "function" == typeof er && er instanceof er || (Ur = !1)
              }
              return ar.delete(rr), ar.delete(Sr), Ur
            }(rr, Sr, Qr, Zr, Wr, pr)
        }(rr, Sr, gS, Qr, Zr, Wr))
      }

      function CS(rr) {
        return !(!aQ(rr) || (Sr = rr, Dr && Dr in Sr)) && (ZQ(rr) || Vr(rr) ? rS : Lr).test(dS(rr));
        var Sr
      }

      function MS(rr) {
        return "function" == typeof rr ? rr : null == rr ? xQ : "object" == typeof rr ? SQ(rr) ? function(rr, Sr) {
          if (FS(rr) && oS(Sr)) return bS(DS(rr), Sr);
          return function(Qr) {
            var Zr = function(rr, Sr, Qr) {
              var Zr = null == rr ? void 0 : qS(rr, Sr);
              return void 0 === Zr ? Qr : Zr
            }(Qr, rr);
            return void 0 === Zr && Zr === Sr ? function(rr, Sr) {
              return null != rr && function(rr, Sr, Qr) {
                Sr = FS(Sr, rr) ? [Sr] : kS(Sr);
                var Zr, Wr = -1,
                  ar = Sr.length;
                for (; ++Wr < ar;) {
                  var jr = DS(Sr[Wr]);
                  if (!(Zr = null != rr && Qr(rr, jr))) break;
                  rr = rr[jr]
                }
                if (Zr) return Zr;
                ar = rr ? rr.length : 0;
                return !!ar && WQ(ar) && cS(jr, ar) && (SQ(rr) || rQ(rr))
              }(rr, Sr, RS)
            }(Qr, rr) : gS(Sr, Zr, void 0, 3)
          }
        }(rr[0], rr[1]) : function(rr) {
          var Sr = function(rr) {
            var Sr = pQ(rr),
              Qr = Sr.length;
            for (; Qr--;) {
              var Zr = Sr[Qr],
                Wr = rr[Zr];
              Sr[Qr] = [Zr, Wr, oS(Wr)]
            }
            return Sr
          }(rr);
          if (1 == Sr.length && Sr[0][2]) return bS(Sr[0][0], Sr[0][1]);
          return function(Qr) {
            return Qr === rr || function(rr, Sr, Qr, Zr) {
              var Wr = Qr.length,
                ar = Wr,
                jr = !Zr;
              if (null == rr) return !ar;
              for (rr = Object(rr); Wr--;) {
                var Ir = Qr[Wr];
                if (jr && Ir[2] ? Ir[1] !== rr[Ir[0]] : !(Ir[0] in rr)) return !1
              }
              for (; ++Wr < ar;) {
                var fr = (Ir = Qr[Wr])[0],
                  Er = rr[fr],
                  pr = Ir[1];
                if (jr && Ir[2]) {
                  if (void 0 === Er && !(fr in rr)) return !1
                } else {
                  var xr = new OS;
                  if (Zr) var mr = Zr(Er, pr, fr, rr, Sr, xr);
                  if (!(void 0 === mr ? gS(pr, Er, Zr, 3, xr) : mr)) return !1
                }
              }
              return !0
            }(Qr, rr, Sr)
          }
        }(rr) : function(rr) {
          return FS(rr) ? (Sr = DS(rr), function(rr) {
            return null == rr ? void 0 : rr[Sr]
          }) : function(rr) {
            return function(Sr) {
              return qS(Sr, rr)
            }
          }(rr);
          var Sr
        }(rr)
      }

      function GS(rr) {
        if (! function(rr) {
            var Sr = rr && rr.constructor,
              Qr = "function" == typeof Sr && Sr.prototype || br;
            return rr === Qr
          }(rr)) return IS(rr);
        var Sr = [];
        for (var Qr in Object(rr)) sr.call(rr, Qr) && "constructor" != Qr && Sr.push(Qr);
        return Sr
      }

      function kS(rr) {
        return SQ(rr) ? rr : JS(rr)
      }

      function AS(rr, Sr, Qr, Zr, Wr, ar) {
        var jr = 2 & Wr,
          Ir = rr.length,
          fr = Sr.length;
        if (Ir != fr && !(jr && fr > Ir)) return !1;
        var Er = ar.get(rr);
        if (Er && ar.get(Sr)) return Er == Sr;
        var pr = -1,
          xr = !0,
          mr = 1 & Wr ? new vS : void 0;
        for (ar.set(rr, Sr), ar.set(Sr, rr); ++pr < Ir;) {
          var Nr = rr[pr],
            Ur = Sr[pr];
          if (Zr) var tr = jr ? Zr(Ur, Nr, pr, Sr, rr, ar) : Zr(Nr, Ur, pr, rr, Sr, ar);
          if (void 0 !== tr) {
            if (tr) continue;
            xr = !1;
            break
          }
          if (mr) {
            if (!Ar(Sr, (function(rr, Sr) {
                if (!mr.has(Sr) && (Nr === rr || Qr(Nr, rr, Zr, Wr, ar))) return mr.add(Sr)
              }))) {
              xr = !1;
              break
            }
          } else if (Nr !== Ur && !Qr(Nr, Ur, Zr, Wr, ar)) {
            xr = !1;
            break
          }
        }
        return ar.delete(rr), ar.delete(Sr), xr
      }

      function VS(rr, Sr) {
        var Qr = rr.__data__;
        return function(rr) {
          var Sr = typeof rr;
          return "string" == Sr || "number" == Sr || "symbol" == Sr || "boolean" == Sr ? "__proto__" !== rr : null === rr
        }(Sr) ? Qr["string" == typeof Sr ? "string" : "hash"] : Qr.map
      }

      function iS(rr, Sr) {
        var Qr = function(rr, Sr) {
          return null == rr ? void 0 : rr[Sr]
        }(rr, Sr);
        return CS(Qr) ? Qr : void 0
      }
      var wS = function(rr) {
        return ur.call(rr)
      };

      function cS(rr, Sr) {
        return !!(Sr = null == Sr ? Zr : Sr) && ("number" == typeof rr || lr.test(rr)) && rr > -1 && rr % 1 == 0 && rr < Sr
      }

      function FS(rr, Sr) {
        if (SQ(rr)) return !1;
        var Qr = typeof rr;
        return !("number" != Qr && "symbol" != Qr && "boolean" != Qr && null != rr && !IQ(rr)) || (Br.test(rr) || !yr.test(rr) || null != Sr && rr in Object(Sr))
      }

      function oS(rr) {
        return rr === rr && !aQ(rr)
      }

      function bS(rr, Sr) {
        return function(Qr) {
          return null != Qr && (Qr[rr] === Sr && (void 0 !== Sr || rr in Object(Qr)))
        }
      }(fS && wS(new fS(new ArrayBuffer(1))) != Kr || ES && wS(new ES) != xr || pS && wS(pS.resolve()) != Ur || xS && wS(new xS) != hr || mS && wS(new mS) != nr) && (wS = function(rr) {
        var Sr = ur.call(rr),
          Qr = Sr == Nr ? rr.constructor : void 0,
          Zr = Qr ? dS(Qr) : void 0;
        if (Zr) switch (Zr) {
          case US:
            return Kr;
          case tS:
            return xr;
          case hS:
            return Ur;
          case zS:
            return hr;
          case YS:
            return nr
        }
        return Sr
      });
      var JS = sS((function(rr) {
        var Sr;
        rr = null == (Sr = rr) ? "" : function(rr) {
          if ("string" == typeof rr) return rr;
          if (IQ(rr)) return KS ? KS.call(rr) : "";
          var Sr = rr + "";
          return "0" == Sr && 1 / rr == -1 / 0 ? "-0" : Sr
        }(Sr);
        var Qr = [];
        return Tr.test(rr) && Qr.push(""), rr.replace(vr, (function(rr, Sr, Zr, Wr) {
          Qr.push(Zr ? Wr.replace(Or, "$1") : Sr || rr)
        })), Qr
      }));

      function DS(rr) {
        if ("string" == typeof rr || IQ(rr)) return rr;
        var Sr = rr + "";
        return "0" == Sr && 1 / rr == -1 / 0 ? "-0" : Sr
      }

      function dS(rr) {
        if (null != rr) {
          try {
            return dr.call(rr)
          } catch (Sr) {}
          try {
            return rr + ""
          } catch (Sr) {}
        }
        return ""
      }

      function sS(rr, Sr) {
        if ("function" != typeof rr || Sr && "function" != typeof Sr) throw new TypeError("Expected a function");
        var Qr = function() {
          var Zr = arguments,
            Wr = Sr ? Sr.apply(this, Zr) : Zr[0],
            ar = Qr.cache;
          if (ar.has(Wr)) return ar.get(Wr);
          var jr = rr.apply(this, Zr);
          return Qr.cache = ar.set(Wr, jr), jr
        };
        return Qr.cache = new(sS.Cache || TS), Qr
      }

      function uS(rr, Sr) {
        return rr === Sr || rr !== rr && Sr !== Sr
      }

      function rQ(rr) {
        return function(rr) {
          return jQ(rr) && QQ(rr)
        }(rr) && sr.call(rr, "callee") && (!aS.call(rr, "callee") || ur.call(rr) == ar)
      }
      sS.Cache = TS;
      var SQ = Array.isArray;

      function QQ(rr) {
        return null != rr && WQ(rr.length) && !ZQ(rr)
      }

      function ZQ(rr) {
        var Sr = aQ(rr) ? ur.call(rr) : "";
        return Sr == pr || "[object GeneratorFunction]" == Sr
      }

      function WQ(rr) {
        return "number" == typeof rr && rr > -1 && rr % 1 == 0 && rr <= Zr
      }

      function aQ(rr) {
        var Sr = typeof rr;
        return !!rr && ("object" == Sr || "function" == Sr)
      }

      function jQ(rr) {
        return !!rr && "object" == typeof rr
      }

      function IQ(rr) {
        return "symbol" == typeof rr || jQ(rr) && ur.call(rr) == Yr
      }
      var fQ, EQ = Gr ? (fQ = Gr, function(rr) {
        return fQ(rr)
      }) : function(rr) {
        return jQ(rr) && WQ(rr.length) && !!Xr[ur.call(rr)]
      };

      function pQ(rr) {
        return QQ(rr) ? LS(rr) : GS(rr)
      }

      function xQ(rr) {
        return rr
      }
      rr.exports = function(rr, Sr, Qr) {
        var Zr, Wr = SQ(rr) || EQ(rr);
        if (Sr = MS(Sr), null == Qr)
          if (Wr || aQ(rr)) {
            var ar = rr.constructor;
            Qr = Wr ? SQ(rr) ? new ar : [] : ZQ(ar) ? aQ(Zr = ZS(rr)) ? WS(Zr) : {} : {}
          } else Qr = {};
        return (Wr ? kr : HS)(rr, (function(rr, Zr, Wr) {
          return Sr(Qr, rr, Zr, Wr)
        })), Qr
      }
    }(Ca, Ca.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      h: Ma
    } = Zr
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);