export const id = 142;
export const ids = [142];
export const modules = {
  8004: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => lO,
      h: () => zg
    });
    var Yq = {};
    gq.r(Yq), gq.d(Yq, {
      c: () => YY,
      j: () => mY,
      g: () => OY,
      m: () => Kg,
      o: () => wg,
      p: () => bY,
      t: () => eg,
      w: () => fY,
      x: () => yY,
      y: () => ZY,
      B: () => Cg,
      E: () => rY,
      H: () => nY,
      L: () => iY,
      P: () => Ig,
      M: () => EY,
      Q: () => hY,
      R: () => vY
    });
    var lq = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function Oq(qq) {
      return qq && qq.__esModule && Object.prototype.hasOwnProperty.call(qq, "default") ? qq.default : qq
    }
    var mq = {
      exports: {}
    };
    ! function(qq) {
      var Eq = Object.prototype.hasOwnProperty,
        gq = "~";

      function Yq() {}

      function lq(qq, Eq, gq) {
        this.LN = qq, this.context = Eq, this.once = gq || !1
      }

      function Oq(qq, Eq, Yq, Oq, mq) {
        if ("function" !== typeof Yq) throw new TypeError("The listener must be a function");
        var xq = new lq(Yq, Oq || qq, mq),
          Aq = gq ? gq + Eq : Eq;
        return qq._events[Aq] ? qq._events[Aq].LN ? qq._events[Aq] = [qq._events[Aq], xq] : qq._events[Aq].push(xq) : (qq._events[Aq] = xq, qq._eventsCount++), qq
      }

      function mq(qq, Eq) {
        0 === --qq._eventsCount ? qq._events = new Yq : delete qq._events[Eq]
      }

      function xq() {
        this._events = new Yq, this._eventsCount = 0
      }
      Object.create && (Yq.prototype = Object.create(null), (new Yq).__proto__ || (gq = !1)), xq.prototype.eventNames = function() {
        var qq, Yq, lq = [];
        if (0 === this._eventsCount) return lq;
        for (Yq in qq = this._events) Eq.call(qq, Yq) && lq.push(gq ? Yq.slice(1) : Yq);
        return Object.getOwnPropertySymbols ? lq.concat(Object.getOwnPropertySymbols(qq)) : lq
      }, xq.prototype.listeners = function(qq) {
        var Eq = gq ? gq + qq : qq,
          Yq = this._events[Eq];
        if (!Yq) return [];
        if (Yq.LN) return [Yq.LN];
        for (var lq = 0, Oq = Yq.length, mq = new Array(Oq); lq < Oq; lq++) mq[lq] = Yq[lq].LN;
        return mq
      }, xq.prototype.listenerCount = function(qq) {
        var Eq = gq ? gq + qq : qq,
          Yq = this._events[Eq];
        return Yq ? Yq.LN ? 1 : Yq.length : 0
      }, xq.prototype.emit = function(qq, Eq, Yq, lq, Oq, mq) {
        var xq = gq ? gq + qq : qq;
        if (!this._events[xq]) return !1;
        var Aq, cq, uq = this._events[xq],
          Bq = arguments.length;
        if (uq.LN) {
          switch (uq.once && this.removeListener(qq, uq.LN, void 0, !0), Bq) {
            case 1:
              return uq.LN.call(uq.context), !0;
            case 2:
              return uq.LN.call(uq.context, Eq), !0;
            case 3:
              return uq.LN.call(uq.context, Eq, Yq), !0;
            case 4:
              return uq.LN.call(uq.context, Eq, Yq, lq), !0;
            case 5:
              return uq.LN.call(uq.context, Eq, Yq, lq, Oq), !0;
            case 6:
              return uq.LN.call(uq.context, Eq, Yq, lq, Oq, mq), !0
          }
          for (cq = 1, Aq = new Array(Bq - 1); cq < Bq; cq++) Aq[cq - 1] = arguments[cq];
          uq.LN.apply(uq.context, Aq)
        } else {
          var Wq, Nq = uq.length;
          for (cq = 0; cq < Nq; cq++) switch (uq[cq].once && this.removeListener(qq, uq[cq].LN, void 0, !0), Bq) {
            case 1:
              uq[cq].LN.call(uq[cq].context);
              break;
            case 2:
              uq[cq].LN.call(uq[cq].context, Eq);
              break;
            case 3:
              uq[cq].LN.call(uq[cq].context, Eq, Yq);
              break;
            case 4:
              uq[cq].LN.call(uq[cq].context, Eq, Yq, lq);
              break;
            default:
              if (!Aq)
                for (Wq = 1, Aq = new Array(Bq - 1); Wq < Bq; Wq++) Aq[Wq - 1] = arguments[Wq];
              uq[cq].LN.apply(uq[cq].context, Aq)
          }
        }
        return !0
      }, xq.prototype.on = function(qq, Eq, gq) {
        return Oq(this, qq, Eq, gq, !1)
      }, xq.prototype.once = function(qq, Eq, gq) {
        return Oq(this, qq, Eq, gq, !0)
      }, xq.prototype.removeListener = function(qq, Eq, Yq, lq) {
        var Oq = gq ? gq + qq : qq;
        if (!this._events[Oq]) return this;
        if (!Eq) return mq(this, Oq), this;
        var xq = this._events[Oq];
        if (xq.LN) xq.LN !== Eq || lq && !xq.once || Yq && xq.context !== Yq || mq(this, Oq);
        else {
          for (var Aq = 0, cq = [], uq = xq.length; Aq < uq; Aq++)(xq[Aq].LN !== Eq || lq && !xq[Aq].once || Yq && xq[Aq].context !== Yq) && cq.push(xq[Aq]);
          cq.length ? this._events[Oq] = 1 === cq.length ? cq[0] : cq : mq(this, Oq)
        }
        return this
      }, xq.prototype.WH = function(qq) {
        var Eq;
        return qq ? (Eq = gq ? gq + qq : qq, this._events[Eq] && mq(this, Eq)) : (this._events = new Yq, this._eventsCount = 0), this
      }, xq.prototype.off = xq.prototype.removeListener, xq.prototype.addListener = xq.prototype.on, xq.prefixed = gq, xq.EventEmitter = xq, qq.exports = xq
    }(mq);
    var xq, Aq, cq = Oq(mq.exports);
    ! function(qq) {
      qq.assertEqual = qq => qq, qq.assertIs = function(qq) {}, qq.assertNever = function(qq) {
        throw new Error
      }, qq.arrayToEnum = qq => {
        const Eq = {};
        for (const gq of qq) Eq[gq] = gq;
        return Eq
      }, qq.getValidEnumValues = Eq => {
        const gq = qq.objectKeys(Eq).filter((qq => "number" !== typeof Eq[Eq[qq]])),
          Yq = {};
        for (const qq of gq) Yq[qq] = Eq[qq];
        return qq.objectValues(Yq)
      }, qq.objectValues = Eq => qq.objectKeys(Eq).map((function(qq) {
        return Eq[qq]
      })), qq.objectKeys = "function" === typeof Object.keys ? qq => Object.keys(qq) : qq => {
        const Eq = [];
        for (const gq in qq) Object.prototype.hasOwnProperty.call(qq, gq) && Eq.push(gq);
        return Eq
      }, qq.find = (qq, Eq) => {
        for (const gq of qq)
          if (Eq(gq)) return gq
      }, qq.isInteger = "function" === typeof Number.isInteger ? qq => Number.isInteger(qq) : qq => "number" === typeof qq && isFinite(qq) && Math.floor(qq) === qq, qq.joinValues = function(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return qq.map((qq => "string" === typeof qq ? `'${qq}'` : qq)).join(Eq)
      }, qq.jsonStringifyReplacer = (qq, Eq) => "bigint" === typeof Eq ? Eq.toString() : Eq
    }(xq || (xq = {})),
    function(qq) {
      qq.mergeShapes = (qq, Eq) => ({
        ...qq,
        ...Eq
      })
    }(Aq || (Aq = {}));
    const uq = xq.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      Bq = qq => {
        switch (typeof qq) {
          case "undefined":
            return uq.undefined;
          case "string":
            return uq.string;
          case "number":
            return isNaN(qq) ? uq.nan : uq.number;
          case "boolean":
            return uq.boolean;
          case "function":
            return uq.function;
          case "bigint":
            return uq.bigint;
          case "symbol":
            return uq.symbol;
          case "object":
            return Array.isArray(qq) ? uq.array : null === qq ? uq.null : qq.then && "function" === typeof qq.then && qq.catch && "function" === typeof qq.catch ? uq.promise : "undefined" !== typeof Map && qq instanceof Map ? uq.map : "undefined" !== typeof Set && qq instanceof Set ? uq.set : "undefined" !== typeof Date && qq instanceof Date ? uq.date : uq.object;
          default:
            return uq.unknown
        }
      },
      Wq = xq.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class Nq extends Error {
      constructor(qq) {
        var Eq;
        super(), Eq = this, this.issues = [], this.addIssue = qq => {
          this.issues = [...this.issues, qq]
        }, this.addIssues = function() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          Eq.issues = [...Eq.issues, ...qq]
        };
        const gq = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, gq) : this.__proto__ = gq, this.name = "ZodError", this.issues = qq
      }
      get errors() {
        return this.issues
      }
      format(qq) {
        const Eq = qq || function(qq) {
            return qq.message
          },
          gq = {
            _errors: []
          },
          Yq = qq => {
            for (const lq of qq.issues)
              if ("invalid_union" === lq.code) lq.unionErrors.map(Yq);
              else if ("invalid_return_type" === lq.code) Yq(lq.returnTypeError);
            else if ("invalid_arguments" === lq.code) Yq(lq.argumentsError);
            else if (0 === lq.path.length) gq._errors.push(Eq(lq));
            else {
              let qq = gq,
                Yq = 0;
              for (; Yq < lq.path.length;) {
                const gq = lq.path[Yq];
                Yq === lq.path.length - 1 ? (qq[gq] = qq[gq] || {
                  _errors: []
                }, qq[gq]._errors.push(Eq(lq))) : qq[gq] = qq[gq] || {
                  _errors: []
                }, qq = qq[gq], Yq++
              }
            }
          };
        return Yq(this), gq
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, xq.jsonStringifyReplacer, 2)
      }
      get UN() {
        return 0 === this.issues.length
      }
      flatten() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : qq => qq.message;
        const Eq = {},
          gq = [];
        for (const Yq of this.issues) Yq.path.length > 0 ? (Eq[Yq.path[0]] = Eq[Yq.path[0]] || [], Eq[Yq.path[0]].push(qq(Yq))) : gq.push(qq(Yq));
        return {
          formErrors: gq,
          fieldErrors: Eq
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    Nq.create = qq => new Nq(qq);
    const aq = (qq, Eq) => {
      let gq;
      switch (qq.code) {
        case Wq.invalid_type:
          gq = qq.received === uq.undefined ? "Required" : `Expected ${qq.expected}, received ${qq.received}`;
          break;
        case Wq.invalid_literal:
          gq = `Invalid literal value, expected ${JSON.stringify(qq.expected,xq.jsonStringifyReplacer)}`;
          break;
        case Wq.unrecognized_keys:
          gq = `Unrecognized key(s) in object: ${xq.joinValues(qq.keys,", ")}`;
          break;
        case Wq.invalid_union:
          gq = "Invalid input";
          break;
        case Wq.invalid_union_discriminator:
          gq = `Invalid discriminator value. Expected ${xq.joinValues(qq.options)}`;
          break;
        case Wq.invalid_enum_value:
          gq = `Invalid enum value. Expected ${xq.joinValues(qq.options)}, received '${qq.received}'`;
          break;
        case Wq.invalid_arguments:
          gq = "Invalid function arguments";
          break;
        case Wq.invalid_return_type:
          gq = "Invalid function return type";
          break;
        case Wq.invalid_date:
          gq = "Invalid date";
          break;
        case Wq.invalid_string:
          "object" === typeof qq.validation ? "includes" in qq.validation ? (gq = `Invalid input: must include "${qq.validation.includes}"`, "number" === typeof qq.validation.position && (gq = `${gq} at one or more positions greater than or equal to ${qq.validation.position}`)) : "startsWith" in qq.validation ? gq = `Invalid input: must start with "${qq.validation.startsWith}"` : "endsWith" in qq.validation ? gq = `Invalid input: must end with "${qq.validation.endsWith}"` : xq.assertNever(qq.validation) : gq = "regex" !== qq.validation ? `Invalid ${qq.validation}` : "Invalid";
          break;
        case Wq.too_small:
          gq = "array" === qq.type ? `Array must contain ${qq.exact?"exactly":qq.inclusive?"at least":"more than"} ${qq.minimum} element(s)` : "string" === qq.type ? `String must contain ${qq.exact?"exactly":qq.inclusive?"at least":"over"} ${qq.minimum} character(s)` : "number" === qq.type ? `Number must be ${qq.exact?"exactly equal to ":qq.inclusive?"greater than or equal to ":"greater than "}${qq.minimum}` : "date" === qq.type ? `Date must be ${qq.exact?"exactly equal to ":qq.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(qq.minimum))}` : "Invalid input";
          break;
        case Wq.too_big:
          gq = "array" === qq.type ? `Array must contain ${qq.exact?"exactly":qq.inclusive?"at most":"less than"} ${qq.maximum} element(s)` : "string" === qq.type ? `String must contain ${qq.exact?"exactly":qq.inclusive?"at most":"under"} ${qq.maximum} character(s)` : "number" === qq.type ? `Number must be ${qq.exact?"exactly":qq.inclusive?"less than or equal to":"less than"} ${qq.maximum}` : "bigint" === qq.type ? `BigInt must be ${qq.exact?"exactly":qq.inclusive?"less than or equal to":"less than"} ${qq.maximum}` : "date" === qq.type ? `Date must be ${qq.exact?"exactly":qq.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(qq.maximum))}` : "Invalid input";
          break;
        case Wq.custom:
          gq = "Invalid input";
          break;
        case Wq.invalid_intersection_types:
          gq = "Intersection results could not be merged";
          break;
        case Wq.not_multiple_of:
          gq = `Number must be a multiple of ${qq.multipleOf}`;
          break;
        case Wq.not_finite:
          gq = "Number must be finite";
          break;
        default:
          gq = Eq.defaultError, xq.assertNever(qq)
      }
      return {
        message: gq
      }
    };
    let Vq = aq;

    function dq() {
      return Vq
    }
    const jq = qq => {
      const {
        data: Eq,
        path: gq,
        errorMaps: Yq,
        issueData: lq
      } = qq, Oq = [...gq, ...lq.path || []], mq = {
        ...lq,
        path: Oq
      };
      let xq = "";
      const Aq = Yq.filter((qq => !!qq)).slice().reverse();
      for (const cq of Aq) xq = cq(mq, {
        data: Eq,
        defaultError: xq
      }).message;
      return {
        ...lq,
        path: Oq,
        message: lq.message || xq
      }
    };

    function Hq(qq, Eq) {
      const gq = jq({
        issueData: Eq,
        data: qq.data,
        path: qq.path,
        errorMaps: [qq.common.contextualErrorMap, qq.schemaErrorMap, dq(), aq].filter((qq => !!qq))
      });
      qq.common.issues.push(gq)
    }
    class oq {
      constructor() {
        this.value = "valid"
      }
      Ha() {
        "valid" === this.value && (this.value = "Ha")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(qq, Eq) {
        const gq = [];
        for (const Yq of Eq) {
          if ("aborted" === Yq.status) return Pq;
          "Ha" === Yq.status && qq.Ha(), gq.push(Yq.value)
        }
        return {
          status: qq.value,
          value: gq
        }
      }
      static async mergeObjectAsync(qq, Eq) {
        const gq = [];
        for (const Yq of Eq) gq.push({
          key: await Yq.key,
          value: await Yq.value
        });
        return oq.mergeObjectSync(qq, gq)
      }
      static mergeObjectSync(qq, Eq) {
        const gq = {};
        for (const Yq of Eq) {
          const {
            key: Eq,
            value: lq
          } = Yq;
          if ("aborted" === Eq.status) return Pq;
          if ("aborted" === lq.status) return Pq;
          "Ha" === Eq.status && qq.Ha(), "Ha" === lq.status && qq.Ha(), "__proto__" === Eq.value || "undefined" === typeof lq.value && !Yq.alwaysSet || (gq[Eq.value] = lq.value)
        }
        return {
          status: qq.value,
          value: gq
        }
      }
    }
    const Pq = Object.freeze({
        status: "aborted"
      }),
      Qq = qq => ({
        status: "Ha",
        value: qq
      }),
      yq = qq => ({
        status: "valid",
        value: qq
      }),
      tq = qq => "aborted" === qq.status,
      rq = qq => "Ha" === qq.status,
      vq = qq => "valid" === qq.status,
      hq = qq => "undefined" !== typeof Promise && qq instanceof Promise;
    var nq;
    ! function(qq) {
      qq.errToObj = qq => "string" === typeof qq ? {
        message: qq
      } : qq || {}, qq.toString = qq => "string" === typeof qq ? qq : null === qq || void 0 === qq ? void 0 : qq.message
    }(nq || (nq = {}));
    class bq {
      constructor(qq, Eq, gq, Yq) {
        this._cachedPath = [], this.parent = qq, this.data = Eq, this._path = gq, this._key = Yq
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const iq = (qq, Eq) => {
      if (vq(Eq)) return {
        success: !0,
        data: Eq.value
      };
      if (!qq.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const Eq = new Nq(qq.common.issues);
          return this._error = Eq, this._error
        }
      }
    };

    function Zq(qq) {
      if (!qq) return {};
      const {
        errorMap: Eq,
        invalid_type_error: gq,
        required_error: Yq,
        description: lq
      } = qq;
      if (Eq && (gq || Yq)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (Eq) return {
        errorMap: Eq,
        description: lq
      };
      return {
        errorMap: (qq, Eq) => "invalid_type" !== qq.code ? {
          message: Eq.defaultError
        } : "undefined" === typeof Eq.data ? {
          message: null !== Yq && void 0 !== Yq ? Yq : Eq.defaultError
        } : {
          message: null !== gq && void 0 !== gq ? gq : Eq.defaultError
        },
        description: lq
      }
    }
    class fq {
      constructor(qq) {
        this.spa = this.safeParseAsync, this._def = qq, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(qq) {
        return Bq(qq.data)
      }
      _getOrReturnCtx(qq, Eq) {
        return Eq || {
          common: qq.parent.common,
          data: qq.data,
          parsedType: Bq(qq.data),
          schemaErrorMap: this._def.errorMap,
          path: qq.path,
          parent: qq.parent
        }
      }
      _processInputParams(qq) {
        return {
          status: new oq,
          ctx: {
            common: qq.parent.common,
            data: qq.data,
            parsedType: Bq(qq.data),
            schemaErrorMap: this._def.errorMap,
            path: qq.path,
            parent: qq.parent
          }
        }
      }
      _parseSync(qq) {
        const Eq = this._parse(qq);
        if (hq(Eq)) throw new Error("Synchronous parse encountered promise.");
        return Eq
      }
      _parseAsync(qq) {
        const Eq = this._parse(qq);
        return Promise.resolve(Eq)
      }
      parse(qq, Eq) {
        const gq = this.safeParse(qq, Eq);
        if (gq.success) return gq.data;
        throw gq.error
      }
      safeParse(qq, Eq) {
        var gq;
        const Yq = {
            common: {
              issues: [],
              async: null !== (gq = null === Eq || void 0 === Eq ? void 0 : Eq.async) && void 0 !== gq && gq,
              contextualErrorMap: null === Eq || void 0 === Eq ? void 0 : Eq.errorMap
            },
            path: (null === Eq || void 0 === Eq ? void 0 : Eq.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: qq,
            parsedType: Bq(qq)
          },
          lq = this._parseSync({
            data: qq,
            path: Yq.path,
            parent: Yq
          });
        return iq(Yq, lq)
      }
      async parseAsync(qq, Eq) {
        const gq = await this.safeParseAsync(qq, Eq);
        if (gq.success) return gq.data;
        throw gq.error
      }
      async safeParseAsync(qq, Eq) {
        const gq = {
            common: {
              issues: [],
              contextualErrorMap: null === Eq || void 0 === Eq ? void 0 : Eq.errorMap,
              async: !0
            },
            path: (null === Eq || void 0 === Eq ? void 0 : Eq.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: qq,
            parsedType: Bq(qq)
          },
          Yq = this._parse({
            data: qq,
            path: gq.path,
            parent: gq
          }),
          lq = await (hq(Yq) ? Yq : Promise.resolve(Yq));
        return iq(gq, lq)
      }
      refine(qq, Eq) {
        const gq = qq => "string" === typeof Eq || "undefined" === typeof Eq ? {
          message: Eq
        } : "function" === typeof Eq ? Eq(qq) : Eq;
        return this._refinement(((Eq, Yq) => {
          const lq = qq(Eq),
            Oq = () => Yq.addIssue({
              code: Wq.custom,
              ...gq(Eq)
            });
          return "undefined" !== typeof Promise && lq instanceof Promise ? lq.then((qq => !!qq || (Oq(), !1))) : !!lq || (Oq(), !1)
        }))
      }
      refinement(qq, Eq) {
        return this._refinement(((gq, Yq) => !!qq(gq) || (Yq.addIssue("function" === typeof Eq ? Eq(gq, Yq) : Eq), !1)))
      }
      _refinement(qq) {
        return new PE({
          schema: this,
          typeName: ME.ZodEffects,
          effect: {
            type: "refinement",
            refinement: qq
          }
        })
      }
      superRefine(qq) {
        return this._refinement(qq)
      }
      optional() {
        return QE.create(this, this._def)
      }
      nullable() {
        return yE.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return EE.create(this, this._def)
      }
      promise() {
        return oE.create(this, this._def)
      }
      or(qq) {
        return lE.create([this, qq], this._def)
      }
      and(qq) {
        return AE.create(this, qq, this._def)
      }
      transform(qq) {
        return new PE({
          ...Zq(this._def),
          schema: this,
          typeName: ME.ZodEffects,
          effect: {
            type: "transform",
            transform: qq
          }
        })
      }
      default (qq) {
        const Eq = "function" === typeof qq ? qq : () => qq;
        return new tE({
          ...Zq(this._def),
          innerType: this,
          defaultValue: Eq,
          typeName: ME.ZodDefault
        })
      }
      brand() {
        return new nE({
          typeName: ME.ZodBranded,
          type: this,
          ...Zq(this._def)
        })
      } catch (qq) {
        const Eq = "function" === typeof qq ? qq : () => qq;
        return new rE({
          ...Zq(this._def),
          innerType: this,
          catchValue: Eq,
          typeName: ME.ZodCatch
        })
      }
      describe(qq) {
        return new(0, this.constructor)({
          ...this._def,
          description: qq
        })
      }
      pipe(qq) {
        return bE.create(this, qq)
      }
      readonly() {
        return iE.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const Mq = /^c[^\s-]{8,}$/i,
      Tq = /^[a-z][a-z0-9]*$/,
      zq = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      Sq = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      pq = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let Gq;
    const Lq = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      Jq = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class kq extends fq {
      _parse(qq) {
        this._def.coerce && (qq.data = String(qq.data));
        if (this._getType(qq) !== uq.string) {
          const Eq = this._getOrReturnCtx(qq);
          return Hq(Eq, {
            code: Wq.invalid_type,
            expected: uq.string,
            received: Eq.parsedType
          }), Pq
        }
        const Eq = new oq;
        let gq;
        for (const Aq of this._def.checks)
          if ("min" === Aq.kind) qq.data.length < Aq.value && (gq = this._getOrReturnCtx(qq, gq), Hq(gq, {
            code: Wq.too_small,
            minimum: Aq.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: Aq.message
          }), Eq.Ha());
          else if ("max" === Aq.kind) qq.data.length > Aq.value && (gq = this._getOrReturnCtx(qq, gq), Hq(gq, {
          code: Wq.too_big,
          maximum: Aq.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: Aq.message
        }), Eq.Ha());
        else if ("length" === Aq.kind) {
          const Yq = qq.data.length > Aq.value,
            lq = qq.data.length < Aq.value;
          (Yq || lq) && (gq = this._getOrReturnCtx(qq, gq), Yq ? Hq(gq, {
            code: Wq.too_big,
            maximum: Aq.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: Aq.message
          }) : lq && Hq(gq, {
            code: Wq.too_small,
            minimum: Aq.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: Aq.message
          }), Eq.Ha())
        } else if ("email" === Aq.kind) pq.test(qq.data) || (gq = this._getOrReturnCtx(qq, gq), Hq(gq, {
          validation: "email",
          code: Wq.invalid_string,
          message: Aq.message
        }), Eq.Ha());
        else if ("emoji" === Aq.kind) Gq || (Gq = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Gq.test(qq.data) || (gq = this._getOrReturnCtx(qq, gq), Hq(gq, {
          validation: "emoji",
          code: Wq.invalid_string,
          message: Aq.message
        }), Eq.Ha());
        else if ("uuid" === Aq.kind) Sq.test(qq.data) || (gq = this._getOrReturnCtx(qq, gq), Hq(gq, {
          validation: "uuid",
          code: Wq.invalid_string,
          message: Aq.message
        }), Eq.Ha());
        else if ("cuid" === Aq.kind) Mq.test(qq.data) || (gq = this._getOrReturnCtx(qq, gq), Hq(gq, {
          validation: "cuid",
          code: Wq.invalid_string,
          message: Aq.message
        }), Eq.Ha());
        else if ("cuid2" === Aq.kind) Tq.test(qq.data) || (gq = this._getOrReturnCtx(qq, gq), Hq(gq, {
          validation: "cuid2",
          code: Wq.invalid_string,
          message: Aq.message
        }), Eq.Ha());
        else if ("ulid" === Aq.kind) zq.test(qq.data) || (gq = this._getOrReturnCtx(qq, gq), Hq(gq, {
          validation: "ulid",
          code: Wq.invalid_string,
          message: Aq.message
        }), Eq.Ha());
        else if ("url" === Aq.kind) try {
          new URL(qq.data)
        } catch (mq) {
          gq = this._getOrReturnCtx(qq, gq), Hq(gq, {
            validation: "url",
            code: Wq.invalid_string,
            message: Aq.message
          }), Eq.Ha()
        } else if ("regex" === Aq.kind) {
          Aq.regex.lastIndex = 0;
          Aq.regex.test(qq.data) || (gq = this._getOrReturnCtx(qq, gq), Hq(gq, {
            validation: "regex",
            code: Wq.invalid_string,
            message: Aq.message
          }), Eq.Ha())
        } else if ("trim" === Aq.kind) qq.data = qq.data.trim();
        else if ("includes" === Aq.kind) qq.data.includes(Aq.value, Aq.position) || (gq = this._getOrReturnCtx(qq, gq), Hq(gq, {
          code: Wq.invalid_string,
          validation: {
            includes: Aq.value,
            position: Aq.position
          },
          message: Aq.message
        }), Eq.Ha());
        else if ("toLowerCase" === Aq.kind) qq.data = qq.data.toLowerCase();
        else if ("toUpperCase" === Aq.kind) qq.data = qq.data.toUpperCase();
        else if ("startsWith" === Aq.kind) qq.data.startsWith(Aq.value) || (gq = this._getOrReturnCtx(qq, gq), Hq(gq, {
          code: Wq.invalid_string,
          validation: {
            startsWith: Aq.value
          },
          message: Aq.message
        }), Eq.Ha());
        else if ("endsWith" === Aq.kind) qq.data.endsWith(Aq.value) || (gq = this._getOrReturnCtx(qq, gq), Hq(gq, {
          code: Wq.invalid_string,
          validation: {
            endsWith: Aq.value
          },
          message: Aq.message
        }), Eq.Ha());
        else if ("datetime" === Aq.kind) {
          ((Oq = Aq).precision ? Oq.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${Oq.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${Oq.precision}}Z$`) : 0 === Oq.precision ? Oq.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : Oq.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(qq.data) || (gq = this._getOrReturnCtx(qq, gq), Hq(gq, {
            code: Wq.invalid_string,
            validation: "datetime",
            message: Aq.message
          }), Eq.Ha())
        } else "ip" === Aq.kind ? (Yq = qq.data, ("v4" !== (lq = Aq.version) && lq || !Lq.test(Yq)) && ("v6" !== lq && lq || !Jq.test(Yq)) && (gq = this._getOrReturnCtx(qq, gq), Hq(gq, {
          validation: "ip",
          code: Wq.invalid_string,
          message: Aq.message
        }), Eq.Ha())) : xq.assertNever(Aq);
        var Yq, lq, Oq;
        return {
          status: Eq.value,
          value: qq.data
        }
      }
      _regex(qq, Eq, gq) {
        return this.refinement((Eq => qq.test(Eq)), {
          validation: Eq,
          code: Wq.invalid_string,
          ...nq.errToObj(gq)
        })
      }
      _addCheck(qq) {
        return new kq({
          ...this._def,
          checks: [...this._def.checks, qq]
        })
      }
      email(qq) {
        return this._addCheck({
          kind: "email",
          ...nq.errToObj(qq)
        })
      }
      url(qq) {
        return this._addCheck({
          kind: "url",
          ...nq.errToObj(qq)
        })
      }
      emoji(qq) {
        return this._addCheck({
          kind: "emoji",
          ...nq.errToObj(qq)
        })
      }
      uuid(qq) {
        return this._addCheck({
          kind: "uuid",
          ...nq.errToObj(qq)
        })
      }
      cuid(qq) {
        return this._addCheck({
          kind: "cuid",
          ...nq.errToObj(qq)
        })
      }
      cuid2(qq) {
        return this._addCheck({
          kind: "cuid2",
          ...nq.errToObj(qq)
        })
      }
      ulid(qq) {
        return this._addCheck({
          kind: "ulid",
          ...nq.errToObj(qq)
        })
      }
      ip(qq) {
        return this._addCheck({
          kind: "ip",
          ...nq.errToObj(qq)
        })
      }
      datetime(qq) {
        var Eq;
        return "string" === typeof qq ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: qq
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === qq || void 0 === qq ? void 0 : qq.precision) ? null : null === qq || void 0 === qq ? void 0 : qq.precision,
          offset: null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.offset) && void 0 !== Eq && Eq,
          ...nq.errToObj(null === qq || void 0 === qq ? void 0 : qq.message)
        })
      }
      regex(qq, Eq) {
        return this._addCheck({
          kind: "regex",
          regex: qq,
          ...nq.errToObj(Eq)
        })
      }
      includes(qq, Eq) {
        return this._addCheck({
          kind: "includes",
          value: qq,
          position: null === Eq || void 0 === Eq ? void 0 : Eq.position,
          ...nq.errToObj(null === Eq || void 0 === Eq ? void 0 : Eq.message)
        })
      }
      startsWith(qq, Eq) {
        return this._addCheck({
          kind: "startsWith",
          value: qq,
          ...nq.errToObj(Eq)
        })
      }
      endsWith(qq, Eq) {
        return this._addCheck({
          kind: "endsWith",
          value: qq,
          ...nq.errToObj(Eq)
        })
      }
      min(qq, Eq) {
        return this._addCheck({
          kind: "min",
          value: qq,
          ...nq.errToObj(Eq)
        })
      }
      max(qq, Eq) {
        return this._addCheck({
          kind: "max",
          value: qq,
          ...nq.errToObj(Eq)
        })
      }
      length(qq, Eq) {
        return this._addCheck({
          kind: "length",
          value: qq,
          ...nq.errToObj(Eq)
        })
      }
      nonempty(qq) {
        return this.min(1, nq.errToObj(qq))
      }
      trim() {
        return new kq({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new kq({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new kq({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((qq => "datetime" === qq.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((qq => "email" === qq.kind))
      }
      get isURL() {
        return !!this._def.checks.find((qq => "url" === qq.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((qq => "emoji" === qq.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((qq => "uuid" === qq.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((qq => "cuid" === qq.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((qq => "cuid2" === qq.kind))
      }
      get isULID() {
        return !!this._def.checks.find((qq => "ulid" === qq.kind))
      }
      get isIP() {
        return !!this._def.checks.find((qq => "ip" === qq.kind))
      }
      get minLength() {
        let qq = null;
        for (const Eq of this._def.checks) "min" === Eq.kind && (null === qq || Eq.value > qq) && (qq = Eq.value);
        return qq
      }
      get maxLength() {
        let qq = null;
        for (const Eq of this._def.checks) "max" === Eq.kind && (null === qq || Eq.value < qq) && (qq = Eq.value);
        return qq
      }
    }

    function Rq(qq, Eq) {
      const gq = (qq.toString().split(".")[1] || "").length,
        Yq = (Eq.toString().split(".")[1] || "").length,
        lq = gq > Yq ? gq : Yq;
      return parseInt(qq.toFixed(lq).replace(".", "")) % parseInt(Eq.toFixed(lq).replace(".", "")) / Math.pow(10, lq)
    }
    kq.create = qq => {
      var Eq;
      return new kq({
        checks: [],
        typeName: ME.ZodString,
        coerce: null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.coerce) && void 0 !== Eq && Eq,
        ...Zq(qq)
      })
    };
    class Uq extends fq {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(qq) {
        this._def.coerce && (qq.data = Number(qq.data));
        if (this._getType(qq) !== uq.number) {
          const Eq = this._getOrReturnCtx(qq);
          return Hq(Eq, {
            code: Wq.invalid_type,
            expected: uq.number,
            received: Eq.parsedType
          }), Pq
        }
        let Eq;
        const gq = new oq;
        for (const Yq of this._def.checks)
          if ("int" === Yq.kind) xq.isInteger(qq.data) || (Eq = this._getOrReturnCtx(qq, Eq), Hq(Eq, {
            code: Wq.invalid_type,
            expected: "integer",
            received: "float",
            message: Yq.message
          }), gq.Ha());
          else if ("min" === Yq.kind) {
          (Yq.inclusive ? qq.data < Yq.value : qq.data <= Yq.value) && (Eq = this._getOrReturnCtx(qq, Eq), Hq(Eq, {
            code: Wq.too_small,
            minimum: Yq.value,
            type: "number",
            inclusive: Yq.inclusive,
            exact: !1,
            message: Yq.message
          }), gq.Ha())
        } else if ("max" === Yq.kind) {
          (Yq.inclusive ? qq.data > Yq.value : qq.data >= Yq.value) && (Eq = this._getOrReturnCtx(qq, Eq), Hq(Eq, {
            code: Wq.too_big,
            maximum: Yq.value,
            type: "number",
            inclusive: Yq.inclusive,
            exact: !1,
            message: Yq.message
          }), gq.Ha())
        } else "multipleOf" === Yq.kind ? 0 !== Rq(qq.data, Yq.value) && (Eq = this._getOrReturnCtx(qq, Eq), Hq(Eq, {
          code: Wq.not_multiple_of,
          multipleOf: Yq.value,
          message: Yq.message
        }), gq.Ha()) : "finite" === Yq.kind ? Number.isFinite(qq.data) || (Eq = this._getOrReturnCtx(qq, Eq), Hq(Eq, {
          code: Wq.not_finite,
          message: Yq.message
        }), gq.Ha()) : xq.assertNever(Yq);
        return {
          status: gq.value,
          value: qq.data
        }
      }
      gte(qq, Eq) {
        return this.setLimit("min", qq, !0, nq.toString(Eq))
      }
      gt(qq, Eq) {
        return this.setLimit("min", qq, !1, nq.toString(Eq))
      }
      lte(qq, Eq) {
        return this.setLimit("max", qq, !0, nq.toString(Eq))
      }
      lt(qq, Eq) {
        return this.setLimit("max", qq, !1, nq.toString(Eq))
      }
      setLimit(qq, Eq, gq, Yq) {
        return new Uq({
          ...this._def,
          checks: [...this._def.checks, {
            kind: qq,
            value: Eq,
            inclusive: gq,
            message: nq.toString(Yq)
          }]
        })
      }
      _addCheck(qq) {
        return new Uq({
          ...this._def,
          checks: [...this._def.checks, qq]
        })
      }
      int(qq) {
        return this._addCheck({
          kind: "int",
          message: nq.toString(qq)
        })
      }
      positive(qq) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: nq.toString(qq)
        })
      }
      negative(qq) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: nq.toString(qq)
        })
      }
      nonpositive(qq) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: nq.toString(qq)
        })
      }
      nonnegative(qq) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: nq.toString(qq)
        })
      }
      multipleOf(qq, Eq) {
        return this._addCheck({
          kind: "multipleOf",
          value: qq,
          message: nq.toString(Eq)
        })
      }
      finite(qq) {
        return this._addCheck({
          kind: "finite",
          message: nq.toString(qq)
        })
      }
      safe(qq) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: nq.toString(qq)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: nq.toString(qq)
        })
      }
      get minValue() {
        let qq = null;
        for (const Eq of this._def.checks) "min" === Eq.kind && (null === qq || Eq.value > qq) && (qq = Eq.value);
        return qq
      }
      get maxValue() {
        let qq = null;
        for (const Eq of this._def.checks) "max" === Eq.kind && (null === qq || Eq.value < qq) && (qq = Eq.value);
        return qq
      }
      get isInt() {
        return !!this._def.checks.find((qq => "int" === qq.kind || "multipleOf" === qq.kind && xq.isInteger(qq.value)))
      }
      get isFinite() {
        let qq = null,
          Eq = null;
        for (const gq of this._def.checks) {
          if ("finite" === gq.kind || "int" === gq.kind || "multipleOf" === gq.kind) return !0;
          "min" === gq.kind ? (null === Eq || gq.value > Eq) && (Eq = gq.value) : "max" === gq.kind && (null === qq || gq.value < qq) && (qq = gq.value)
        }
        return Number.isFinite(Eq) && Number.isFinite(qq)
      }
    }
    Uq.create = qq => new Uq({
      checks: [],
      typeName: ME.ZodNumber,
      coerce: (null === qq || void 0 === qq ? void 0 : qq.coerce) || !1,
      ...Zq(qq)
    });
    class Fq extends fq {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(qq) {
        this._def.coerce && (qq.data = BigInt(qq.data));
        if (this._getType(qq) !== uq.bigint) {
          const Eq = this._getOrReturnCtx(qq);
          return Hq(Eq, {
            code: Wq.invalid_type,
            expected: uq.bigint,
            received: Eq.parsedType
          }), Pq
        }
        let Eq;
        const gq = new oq;
        for (const Yq of this._def.checks)
          if ("min" === Yq.kind) {
            (Yq.inclusive ? qq.data < Yq.value : qq.data <= Yq.value) && (Eq = this._getOrReturnCtx(qq, Eq), Hq(Eq, {
              code: Wq.too_small,
              type: "bigint",
              minimum: Yq.value,
              inclusive: Yq.inclusive,
              message: Yq.message
            }), gq.Ha())
          } else if ("max" === Yq.kind) {
          (Yq.inclusive ? qq.data > Yq.value : qq.data >= Yq.value) && (Eq = this._getOrReturnCtx(qq, Eq), Hq(Eq, {
            code: Wq.too_big,
            type: "bigint",
            maximum: Yq.value,
            inclusive: Yq.inclusive,
            message: Yq.message
          }), gq.Ha())
        } else "multipleOf" === Yq.kind ? qq.data % Yq.value !== BigInt(0) && (Eq = this._getOrReturnCtx(qq, Eq), Hq(Eq, {
          code: Wq.not_multiple_of,
          multipleOf: Yq.value,
          message: Yq.message
        }), gq.Ha()) : xq.assertNever(Yq);
        return {
          status: gq.value,
          value: qq.data
        }
      }
      gte(qq, Eq) {
        return this.setLimit("min", qq, !0, nq.toString(Eq))
      }
      gt(qq, Eq) {
        return this.setLimit("min", qq, !1, nq.toString(Eq))
      }
      lte(qq, Eq) {
        return this.setLimit("max", qq, !0, nq.toString(Eq))
      }
      lt(qq, Eq) {
        return this.setLimit("max", qq, !1, nq.toString(Eq))
      }
      setLimit(qq, Eq, gq, Yq) {
        return new Fq({
          ...this._def,
          checks: [...this._def.checks, {
            kind: qq,
            value: Eq,
            inclusive: gq,
            message: nq.toString(Yq)
          }]
        })
      }
      _addCheck(qq) {
        return new Fq({
          ...this._def,
          checks: [...this._def.checks, qq]
        })
      }
      positive(qq) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: nq.toString(qq)
        })
      }
      negative(qq) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: nq.toString(qq)
        })
      }
      nonpositive(qq) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: nq.toString(qq)
        })
      }
      nonnegative(qq) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: nq.toString(qq)
        })
      }
      multipleOf(qq, Eq) {
        return this._addCheck({
          kind: "multipleOf",
          value: qq,
          message: nq.toString(Eq)
        })
      }
      get minValue() {
        let qq = null;
        for (const Eq of this._def.checks) "min" === Eq.kind && (null === qq || Eq.value > qq) && (qq = Eq.value);
        return qq
      }
      get maxValue() {
        let qq = null;
        for (const Eq of this._def.checks) "max" === Eq.kind && (null === qq || Eq.value < qq) && (qq = Eq.value);
        return qq
      }
    }
    Fq.create = qq => {
      var Eq;
      return new Fq({
        checks: [],
        typeName: ME.ZodBigInt,
        coerce: null !== (Eq = null === qq || void 0 === qq ? void 0 : qq.coerce) && void 0 !== Eq && Eq,
        ...Zq(qq)
      })
    };
    class sq extends fq {
      _parse(qq) {
        this._def.coerce && (qq.data = Boolean(qq.data));
        if (this._getType(qq) !== uq.boolean) {
          const Eq = this._getOrReturnCtx(qq);
          return Hq(Eq, {
            code: Wq.invalid_type,
            expected: uq.boolean,
            received: Eq.parsedType
          }), Pq
        }
        return yq(qq.data)
      }
    }
    sq.create = qq => new sq({
      typeName: ME.ZodBoolean,
      coerce: (null === qq || void 0 === qq ? void 0 : qq.coerce) || !1,
      ...Zq(qq)
    });
    class Xq extends fq {
      _parse(qq) {
        this._def.coerce && (qq.data = new Date(qq.data));
        if (this._getType(qq) !== uq.date) {
          const Eq = this._getOrReturnCtx(qq);
          return Hq(Eq, {
            code: Wq.invalid_type,
            expected: uq.date,
            received: Eq.parsedType
          }), Pq
        }
        if (isNaN(qq.data.getTime())) {
          return Hq(this._getOrReturnCtx(qq), {
            code: Wq.invalid_date
          }), Pq
        }
        const Eq = new oq;
        let gq;
        for (const Yq of this._def.checks) "min" === Yq.kind ? qq.data.getTime() < Yq.value && (gq = this._getOrReturnCtx(qq, gq), Hq(gq, {
          code: Wq.too_small,
          message: Yq.message,
          inclusive: !0,
          exact: !1,
          minimum: Yq.value,
          type: "date"
        }), Eq.Ha()) : "max" === Yq.kind ? qq.data.getTime() > Yq.value && (gq = this._getOrReturnCtx(qq, gq), Hq(gq, {
          code: Wq.too_big,
          message: Yq.message,
          inclusive: !0,
          exact: !1,
          maximum: Yq.value,
          type: "date"
        }), Eq.Ha()) : xq.assertNever(Yq);
        return {
          status: Eq.value,
          value: new Date(qq.data.getTime())
        }
      }
      _addCheck(qq) {
        return new Xq({
          ...this._def,
          checks: [...this._def.checks, qq]
        })
      }
      min(qq, Eq) {
        return this._addCheck({
          kind: "min",
          value: qq.getTime(),
          message: nq.toString(Eq)
        })
      }
      max(qq, Eq) {
        return this._addCheck({
          kind: "max",
          value: qq.getTime(),
          message: nq.toString(Eq)
        })
      }
      get minDate() {
        let qq = null;
        for (const Eq of this._def.checks) "min" === Eq.kind && (null === qq || Eq.value > qq) && (qq = Eq.value);
        return null != qq ? new Date(qq) : null
      }
      get maxDate() {
        let qq = null;
        for (const Eq of this._def.checks) "max" === Eq.kind && (null === qq || Eq.value < qq) && (qq = Eq.value);
        return null != qq ? new Date(qq) : null
      }
    }
    Xq.create = qq => new Xq({
      checks: [],
      coerce: (null === qq || void 0 === qq ? void 0 : qq.coerce) || !1,
      typeName: ME.ZodDate,
      ...Zq(qq)
    });
    class wq extends fq {
      _parse(qq) {
        if (this._getType(qq) !== uq.symbol) {
          const Eq = this._getOrReturnCtx(qq);
          return Hq(Eq, {
            code: Wq.invalid_type,
            expected: uq.symbol,
            received: Eq.parsedType
          }), Pq
        }
        return yq(qq.data)
      }
    }
    wq.create = qq => new wq({
      typeName: ME.ZodSymbol,
      ...Zq(qq)
    });
    class Kq extends fq {
      _parse(qq) {
        if (this._getType(qq) !== uq.undefined) {
          const Eq = this._getOrReturnCtx(qq);
          return Hq(Eq, {
            code: Wq.invalid_type,
            expected: uq.undefined,
            received: Eq.parsedType
          }), Pq
        }
        return yq(qq.data)
      }
    }
    Kq.create = qq => new Kq({
      typeName: ME.ZodUndefined,
      ...Zq(qq)
    });
    class Cq extends fq {
      _parse(qq) {
        if (this._getType(qq) !== uq.null) {
          const Eq = this._getOrReturnCtx(qq);
          return Hq(Eq, {
            code: Wq.invalid_type,
            expected: uq.null,
            received: Eq.parsedType
          }), Pq
        }
        return yq(qq.data)
      }
    }
    Cq.create = qq => new Cq({
      typeName: ME.ZodNull,
      ...Zq(qq)
    });
    class Iq extends fq {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(qq) {
        return yq(qq.data)
      }
    }
    Iq.create = qq => new Iq({
      typeName: ME.ZodAny,
      ...Zq(qq)
    });
    class eq extends fq {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(qq) {
        return yq(qq.data)
      }
    }
    eq.create = qq => new eq({
      typeName: ME.ZodUnknown,
      ...Zq(qq)
    });
    class Dq extends fq {
      _parse(qq) {
        const Eq = this._getOrReturnCtx(qq);
        return Hq(Eq, {
          code: Wq.invalid_type,
          expected: uq.never,
          received: Eq.parsedType
        }), Pq
      }
    }
    Dq.create = qq => new Dq({
      typeName: ME.ZodNever,
      ...Zq(qq)
    });
    class qE extends fq {
      _parse(qq) {
        if (this._getType(qq) !== uq.undefined) {
          const Eq = this._getOrReturnCtx(qq);
          return Hq(Eq, {
            code: Wq.invalid_type,
            expected: uq.void,
            received: Eq.parsedType
          }), Pq
        }
        return yq(qq.data)
      }
    }
    qE.create = qq => new qE({
      typeName: ME.ZodVoid,
      ...Zq(qq)
    });
    class EE extends fq {
      _parse(qq) {
        const {
          ctx: Eq,
          status: gq
        } = this._processInputParams(qq), Yq = this._def;
        if (Eq.parsedType !== uq.array) return Hq(Eq, {
          code: Wq.invalid_type,
          expected: uq.array,
          received: Eq.parsedType
        }), Pq;
        if (null !== Yq.exactLength) {
          const qq = Eq.data.length > Yq.exactLength.value,
            lq = Eq.data.length < Yq.exactLength.value;
          (qq || lq) && (Hq(Eq, {
            code: qq ? Wq.too_big : Wq.too_small,
            minimum: lq ? Yq.exactLength.value : void 0,
            maximum: qq ? Yq.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: Yq.exactLength.message
          }), gq.Ha())
        }
        if (null !== Yq.minLength && Eq.data.length < Yq.minLength.value && (Hq(Eq, {
            code: Wq.too_small,
            minimum: Yq.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Yq.minLength.message
          }), gq.Ha()), null !== Yq.maxLength && Eq.data.length > Yq.maxLength.value && (Hq(Eq, {
            code: Wq.too_big,
            maximum: Yq.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Yq.maxLength.message
          }), gq.Ha()), Eq.common.async) return Promise.all([...Eq.data].map(((qq, gq) => Yq.type._parseAsync(new bq(Eq, qq, Eq.path, gq))))).then((qq => oq.mergeArray(gq, qq)));
        const lq = [...Eq.data].map(((qq, gq) => Yq.type._parseSync(new bq(Eq, qq, Eq.path, gq))));
        return oq.mergeArray(gq, lq)
      }
      get element() {
        return this._def.type
      }
      min(qq, Eq) {
        return new EE({
          ...this._def,
          minLength: {
            value: qq,
            message: nq.toString(Eq)
          }
        })
      }
      max(qq, Eq) {
        return new EE({
          ...this._def,
          maxLength: {
            value: qq,
            message: nq.toString(Eq)
          }
        })
      }
      length(qq, Eq) {
        return new EE({
          ...this._def,
          exactLength: {
            value: qq,
            message: nq.toString(Eq)
          }
        })
      }
      nonempty(qq) {
        return this.min(1, qq)
      }
    }

    function gE(qq) {
      if (qq instanceof YE) {
        const Eq = {};
        for (const gq in qq.shape) {
          const Yq = qq.shape[gq];
          Eq[gq] = QE.create(gE(Yq))
        }
        return new YE({
          ...qq._def,
          shape: () => Eq
        })
      }
      return qq instanceof EE ? new EE({
        ...qq._def,
        type: gE(qq.element)
      }) : qq instanceof QE ? QE.create(gE(qq.unwrap())) : qq instanceof yE ? yE.create(gE(qq.unwrap())) : qq instanceof cE ? cE.create(qq.items.map((qq => gE(qq)))) : qq
    }
    EE.create = (qq, Eq) => new EE({
      type: qq,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: ME.ZodArray,
      ...Zq(Eq)
    });
    class YE extends fq {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const qq = this._def.shape(),
          Eq = xq.objectKeys(qq);
        return this._cached = {
          shape: qq,
          keys: Eq
        }
      }
      _parse(qq) {
        if (this._getType(qq) !== uq.object) {
          const Eq = this._getOrReturnCtx(qq);
          return Hq(Eq, {
            code: Wq.invalid_type,
            expected: uq.object,
            received: Eq.parsedType
          }), Pq
        }
        const {
          status: Eq,
          ctx: gq
        } = this._processInputParams(qq), {
          shape: Yq,
          keys: lq
        } = this._getCached(), Oq = [];
        if (!(this._def.catchall instanceof Dq && "strip" === this._def.unknownKeys))
          for (const xq in gq.data) lq.includes(xq) || Oq.push(xq);
        const mq = [];
        for (const xq of lq) {
          const qq = Yq[xq],
            Eq = gq.data[xq];
          mq.push({
            key: {
              status: "valid",
              value: xq
            },
            value: qq._parse(new bq(gq, Eq, gq.path, xq)),
            alwaysSet: xq in gq.data
          })
        }
        if (this._def.catchall instanceof Dq) {
          const qq = this._def.unknownKeys;
          if ("passthrough" === qq)
            for (const Eq of Oq) mq.push({
              key: {
                status: "valid",
                value: Eq
              },
              value: {
                status: "valid",
                value: gq.data[Eq]
              }
            });
          else if ("strict" === qq) Oq.length > 0 && (Hq(gq, {
            code: Wq.unrecognized_keys,
            keys: Oq
          }), Eq.Ha());
          else if ("strip" !== qq) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const qq = this._def.catchall;
          for (const Eq of Oq) {
            const Yq = gq.data[Eq];
            mq.push({
              key: {
                status: "valid",
                value: Eq
              },
              value: qq._parse(new bq(gq, Yq, gq.path, Eq)),
              alwaysSet: Eq in gq.data
            })
          }
        }
        return gq.common.async ? Promise.resolve().then((async () => {
          const qq = [];
          for (const Eq of mq) {
            const gq = await Eq.key;
            qq.push({
              key: gq,
              value: await Eq.value,
              alwaysSet: Eq.alwaysSet
            })
          }
          return qq
        })).then((qq => oq.mergeObjectSync(Eq, qq))) : oq.mergeObjectSync(Eq, mq)
      }
      get shape() {
        return this._def.shape()
      }
      strict(qq) {
        return nq.errToObj, new YE({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== qq ? {
            errorMap: (Eq, gq) => {
              var Yq, lq, Oq, mq;
              const xq = null !== (Oq = null === (lq = (Yq = this._def).errorMap) || void 0 === lq ? void 0 : lq.call(Yq, Eq, gq).message) && void 0 !== Oq ? Oq : gq.defaultError;
              return "unrecognized_keys" === Eq.code ? {
                message: null !== (mq = nq.errToObj(qq).message) && void 0 !== mq ? mq : xq
              } : {
                message: xq
              }
            }
          } : {}
        })
      }
      strip() {
        return new YE({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new YE({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(qq) {
        return new YE({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...qq
          })
        })
      }
      merge(qq) {
        return new YE({
          unknownKeys: qq._def.unknownKeys,
          catchall: qq._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...qq._def.shape()
          }),
          typeName: ME.ZodObject
        })
      }
      setKey(qq, Eq) {
        return this.augment({
          [qq]: Eq
        })
      }
      catchall(qq) {
        return new YE({
          ...this._def,
          catchall: qq
        })
      }
      zW(qq) {
        const Eq = {};
        return xq.objectKeys(qq).forEach((gq => {
          qq[gq] && this.shape[gq] && (Eq[gq] = this.shape[gq])
        })), new YE({
          ...this._def,
          shape: () => Eq
        })
      }
      omit(qq) {
        const Eq = {};
        return xq.objectKeys(this.shape).forEach((gq => {
          qq[gq] || (Eq[gq] = this.shape[gq])
        })), new YE({
          ...this._def,
          shape: () => Eq
        })
      }
      deepPartial() {
        return gE(this)
      }
      partial(qq) {
        const Eq = {};
        return xq.objectKeys(this.shape).forEach((gq => {
          const Yq = this.shape[gq];
          qq && !qq[gq] ? Eq[gq] = Yq : Eq[gq] = Yq.optional()
        })), new YE({
          ...this._def,
          shape: () => Eq
        })
      }
      required(qq) {
        const Eq = {};
        return xq.objectKeys(this.shape).forEach((gq => {
          if (qq && !qq[gq]) Eq[gq] = this.shape[gq];
          else {
            let qq = this.shape[gq];
            for (; qq instanceof QE;) qq = qq._def.innerType;
            Eq[gq] = qq
          }
        })), new YE({
          ...this._def,
          shape: () => Eq
        })
      }
      keyof() {
        return dE(xq.objectKeys(this.shape))
      }
    }
    YE.create = (qq, Eq) => new YE({
      shape: () => qq,
      unknownKeys: "strip",
      catchall: Dq.create(),
      typeName: ME.ZodObject,
      ...Zq(Eq)
    }), YE.strictCreate = (qq, Eq) => new YE({
      shape: () => qq,
      unknownKeys: "strict",
      catchall: Dq.create(),
      typeName: ME.ZodObject,
      ...Zq(Eq)
    }), YE.lazycreate = (qq, Eq) => new YE({
      shape: qq,
      unknownKeys: "strip",
      catchall: Dq.create(),
      typeName: ME.ZodObject,
      ...Zq(Eq)
    });
    class lE extends fq {
      _parse(qq) {
        const {
          ctx: Eq
        } = this._processInputParams(qq), gq = this._def.options;
        if (Eq.common.async) return Promise.all(gq.map((async qq => {
          const gq = {
            ...Eq,
            common: {
              ...Eq.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await qq._parseAsync({
              data: Eq.data,
              path: Eq.path,
              parent: gq
            }),
            ctx: gq
          }
        }))).then((function(qq) {
          for (const Eq of qq)
            if ("valid" === Eq.result.status) return Eq.result;
          for (const Yq of qq)
            if ("Ha" === Yq.result.status) return Eq.common.issues.push(...Yq.ctx.common.issues), Yq.result;
          const gq = qq.map((qq => new Nq(qq.ctx.common.issues)));
          return Hq(Eq, {
            code: Wq.invalid_union,
            unionErrors: gq
          }), Pq
        }));
        {
          let qq;
          const Yq = [];
          for (const Oq of gq) {
            const gq = {
                ...Eq,
                common: {
                  ...Eq.common,
                  issues: []
                },
                parent: null
              },
              lq = Oq._parseSync({
                data: Eq.data,
                path: Eq.path,
                parent: gq
              });
            if ("valid" === lq.status) return lq;
            "Ha" !== lq.status || qq || (qq = {
              result: lq,
              ctx: gq
            }), gq.common.issues.length && Yq.push(gq.common.issues)
          }
          if (qq) return Eq.common.issues.push(...qq.ctx.common.issues), qq.result;
          const lq = Yq.map((qq => new Nq(qq)));
          return Hq(Eq, {
            code: Wq.invalid_union,
            unionErrors: lq
          }), Pq
        }
      }
      get options() {
        return this._def.options
      }
    }
    lE.create = (qq, Eq) => new lE({
      options: qq,
      typeName: ME.ZodUnion,
      ...Zq(Eq)
    });
    const OE = qq => qq instanceof aE ? OE(qq.schema) : qq instanceof PE ? OE(qq.innerType()) : qq instanceof VE ? [qq.value] : qq instanceof jE ? qq.options : qq instanceof HE ? Object.keys(qq.enum) : qq instanceof tE ? OE(qq._def.innerType) : qq instanceof Kq ? [void 0] : qq instanceof Cq ? [null] : null;
    class mE extends fq {
      _parse(qq) {
        const {
          ctx: Eq
        } = this._processInputParams(qq);
        if (Eq.parsedType !== uq.object) return Hq(Eq, {
          code: Wq.invalid_type,
          expected: uq.object,
          received: Eq.parsedType
        }), Pq;
        const gq = this.discriminator,
          Yq = Eq.data[gq],
          lq = this.optionsMap.get(Yq);
        return lq ? Eq.common.async ? lq._parseAsync({
          data: Eq.data,
          path: Eq.path,
          parent: Eq
        }) : lq._parseSync({
          data: Eq.data,
          path: Eq.path,
          parent: Eq
        }) : (Hq(Eq, {
          code: Wq.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [gq]
        }), Pq)
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
      static create(qq, Eq, gq) {
        const Yq = new Map;
        for (const lq of Eq) {
          const Eq = OE(lq.shape[qq]);
          if (!Eq) throw new Error(`A discriminator value for key \`${qq}\` could not be extracted from all schema options`);
          for (const gq of Eq) {
            if (Yq.has(gq)) throw new Error(`Discriminator property ${String(qq)} has duplicate value ${String(gq)}`);
            Yq.set(gq, lq)
          }
        }
        return new mE({
          typeName: ME.ZodDiscriminatedUnion,
          discriminator: qq,
          options: Eq,
          optionsMap: Yq,
          ...Zq(gq)
        })
      }
    }

    function xE(qq, Eq) {
      const gq = Bq(qq),
        Yq = Bq(Eq);
      if (qq === Eq) return {
        valid: !0,
        data: qq
      };
      if (gq === uq.object && Yq === uq.object) {
        const gq = xq.objectKeys(Eq),
          Yq = xq.objectKeys(qq).filter((qq => -1 !== gq.indexOf(qq))),
          lq = {
            ...qq,
            ...Eq
          };
        for (const Oq of Yq) {
          const gq = xE(qq[Oq], Eq[Oq]);
          if (!gq.valid) return {
            valid: !1
          };
          lq[Oq] = gq.data
        }
        return {
          valid: !0,
          data: lq
        }
      }
      if (gq === uq.array && Yq === uq.array) {
        if (qq.length !== Eq.length) return {
          valid: !1
        };
        const gq = [];
        for (let Yq = 0; Yq < qq.length; Yq++) {
          const lq = xE(qq[Yq], Eq[Yq]);
          if (!lq.valid) return {
            valid: !1
          };
          gq.push(lq.data)
        }
        return {
          valid: !0,
          data: gq
        }
      }
      return gq === uq.date && Yq === uq.date && +qq === +Eq ? {
        valid: !0,
        data: qq
      } : {
        valid: !1
      }
    }
    class AE extends fq {
      _parse(qq) {
        const {
          status: Eq,
          ctx: gq
        } = this._processInputParams(qq), Yq = (qq, Yq) => {
          if (tq(qq) || tq(Yq)) return Pq;
          const lq = xE(qq.value, Yq.value);
          return lq.valid ? ((rq(qq) || rq(Yq)) && Eq.Ha(), {
            status: Eq.value,
            value: lq.data
          }) : (Hq(gq, {
            code: Wq.invalid_intersection_types
          }), Pq)
        };
        return gq.common.async ? Promise.all([this._def.left._parseAsync({
          data: gq.data,
          path: gq.path,
          parent: gq
        }), this._def.right._parseAsync({
          data: gq.data,
          path: gq.path,
          parent: gq
        })]).then((qq => {
          let [Eq, gq] = qq;
          return Yq(Eq, gq)
        })) : Yq(this._def.left._parseSync({
          data: gq.data,
          path: gq.path,
          parent: gq
        }), this._def.right._parseSync({
          data: gq.data,
          path: gq.path,
          parent: gq
        }))
      }
    }
    AE.create = (qq, Eq, gq) => new AE({
      left: qq,
      right: Eq,
      typeName: ME.ZodIntersection,
      ...Zq(gq)
    });
    class cE extends fq {
      _parse(qq) {
        const {
          status: Eq,
          ctx: gq
        } = this._processInputParams(qq);
        if (gq.parsedType !== uq.array) return Hq(gq, {
          code: Wq.invalid_type,
          expected: uq.array,
          received: gq.parsedType
        }), Pq;
        if (gq.data.length < this._def.items.length) return Hq(gq, {
          code: Wq.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), Pq;
        !this._def.rest && gq.data.length > this._def.items.length && (Hq(gq, {
          code: Wq.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), Eq.Ha());
        const Yq = [...gq.data].map(((qq, Eq) => {
          const Yq = this._def.items[Eq] || this._def.rest;
          return Yq ? Yq._parse(new bq(gq, qq, gq.path, Eq)) : null
        })).filter((qq => !!qq));
        return gq.common.async ? Promise.all(Yq).then((qq => oq.mergeArray(Eq, qq))) : oq.mergeArray(Eq, Yq)
      }
      get items() {
        return this._def.items
      }
      rest(qq) {
        return new cE({
          ...this._def,
          rest: qq
        })
      }
    }
    cE.create = (qq, Eq) => {
      if (!Array.isArray(qq)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new cE({
        items: qq,
        typeName: ME.ZodTuple,
        rest: null,
        ...Zq(Eq)
      })
    };
    class uE extends fq {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(qq) {
        const {
          status: Eq,
          ctx: gq
        } = this._processInputParams(qq);
        if (gq.parsedType !== uq.object) return Hq(gq, {
          code: Wq.invalid_type,
          expected: uq.object,
          received: gq.parsedType
        }), Pq;
        const Yq = [],
          lq = this._def.keyType,
          Oq = this._def.valueType;
        for (const mq in gq.data) Yq.push({
          key: lq._parse(new bq(gq, mq, gq.path, mq)),
          value: Oq._parse(new bq(gq, gq.data[mq], gq.path, mq))
        });
        return gq.common.async ? oq.mergeObjectAsync(Eq, Yq) : oq.mergeObjectSync(Eq, Yq)
      }
      get element() {
        return this._def.valueType
      }
      static create(qq, Eq, gq) {
        return new uE(Eq instanceof fq ? {
          keyType: qq,
          valueType: Eq,
          typeName: ME.ZodRecord,
          ...Zq(gq)
        } : {
          keyType: kq.create(),
          valueType: qq,
          typeName: ME.ZodRecord,
          ...Zq(Eq)
        })
      }
    }
    class BE extends fq {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(qq) {
        const {
          status: Eq,
          ctx: gq
        } = this._processInputParams(qq);
        if (gq.parsedType !== uq.map) return Hq(gq, {
          code: Wq.invalid_type,
          expected: uq.map,
          received: gq.parsedType
        }), Pq;
        const Yq = this._def.keyType,
          lq = this._def.valueType,
          Oq = [...gq.data.entries()].map(((qq, Eq) => {
            let [Oq, mq] = qq;
            return {
              key: Yq._parse(new bq(gq, Oq, gq.path, [Eq, "key"])),
              value: lq._parse(new bq(gq, mq, gq.path, [Eq, "value"]))
            }
          }));
        if (gq.common.async) {
          const qq = new Map;
          return Promise.resolve().then((async () => {
            for (const gq of Oq) {
              const Yq = await gq.key,
                lq = await gq.value;
              if ("aborted" === Yq.status || "aborted" === lq.status) return Pq;
              "Ha" !== Yq.status && "Ha" !== lq.status || Eq.Ha(), qq.set(Yq.value, lq.value)
            }
            return {
              status: Eq.value,
              value: qq
            }
          }))
        } {
          const qq = new Map;
          for (const gq of Oq) {
            const Yq = gq.key,
              lq = gq.value;
            if ("aborted" === Yq.status || "aborted" === lq.status) return Pq;
            "Ha" !== Yq.status && "Ha" !== lq.status || Eq.Ha(), qq.set(Yq.value, lq.value)
          }
          return {
            status: Eq.value,
            value: qq
          }
        }
      }
    }
    BE.create = (qq, Eq, gq) => new BE({
      valueType: Eq,
      keyType: qq,
      typeName: ME.ZodMap,
      ...Zq(gq)
    });
    class WE extends fq {
      _parse(qq) {
        const {
          status: Eq,
          ctx: gq
        } = this._processInputParams(qq);
        if (gq.parsedType !== uq.set) return Hq(gq, {
          code: Wq.invalid_type,
          expected: uq.set,
          received: gq.parsedType
        }), Pq;
        const Yq = this._def;
        null !== Yq.minSize && gq.data.size < Yq.minSize.value && (Hq(gq, {
          code: Wq.too_small,
          minimum: Yq.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Yq.minSize.message
        }), Eq.Ha()), null !== Yq.maxSize && gq.data.size > Yq.maxSize.value && (Hq(gq, {
          code: Wq.too_big,
          maximum: Yq.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Yq.maxSize.message
        }), Eq.Ha());
        const lq = this._def.valueType;

        function Oq(qq) {
          const gq = new Set;
          for (const Yq of qq) {
            if ("aborted" === Yq.status) return Pq;
            "Ha" === Yq.status && Eq.Ha(), gq.add(Yq.value)
          }
          return {
            status: Eq.value,
            value: gq
          }
        }
        const mq = [...gq.data.values()].map(((qq, Eq) => lq._parse(new bq(gq, qq, gq.path, Eq))));
        return gq.common.async ? Promise.all(mq).then((qq => Oq(qq))) : Oq(mq)
      }
      min(qq, Eq) {
        return new WE({
          ...this._def,
          minSize: {
            value: qq,
            message: nq.toString(Eq)
          }
        })
      }
      max(qq, Eq) {
        return new WE({
          ...this._def,
          maxSize: {
            value: qq,
            message: nq.toString(Eq)
          }
        })
      }
      size(qq, Eq) {
        return this.min(qq, Eq).max(qq, Eq)
      }
      nonempty(qq) {
        return this.min(1, qq)
      }
    }
    WE.create = (qq, Eq) => new WE({
      valueType: qq,
      minSize: null,
      maxSize: null,
      typeName: ME.ZodSet,
      ...Zq(Eq)
    });
    class NE extends fq {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(qq) {
        const {
          ctx: Eq
        } = this._processInputParams(qq);
        if (Eq.parsedType !== uq.function) return Hq(Eq, {
          code: Wq.invalid_type,
          expected: uq.function,
          received: Eq.parsedType
        }), Pq;

        function gq(qq, gq) {
          return jq({
            data: qq,
            path: Eq.path,
            errorMaps: [Eq.common.contextualErrorMap, Eq.schemaErrorMap, dq(), aq].filter((qq => !!qq)),
            issueData: {
              code: Wq.invalid_arguments,
              argumentsError: gq
            }
          })
        }

        function Yq(qq, gq) {
          return jq({
            data: qq,
            path: Eq.path,
            errorMaps: [Eq.common.contextualErrorMap, Eq.schemaErrorMap, dq(), aq].filter((qq => !!qq)),
            issueData: {
              code: Wq.invalid_return_type,
              returnTypeError: gq
            }
          })
        }
        const lq = {
            errorMap: Eq.common.contextualErrorMap
          },
          Oq = Eq.data;
        if (this._def.returns instanceof oE) {
          const qq = this;
          return yq((async function() {
            for (var Eq = arguments.length, mq = new Array(Eq), xq = 0; xq < Eq; xq++) mq[xq] = arguments[xq];
            const Aq = new Nq([]),
              cq = await qq._def.args.parseAsync(mq, lq).catch((qq => {
                throw Aq.addIssue(gq(mq, qq)), Aq
              })),
              uq = await Reflect.apply(Oq, this, cq);
            return await qq._def.returns._def.type.parseAsync(uq, lq).catch((qq => {
              throw Aq.addIssue(Yq(uq, qq)), Aq
            }))
          }))
        } {
          const qq = this;
          return yq((function() {
            for (var Eq = arguments.length, mq = new Array(Eq), xq = 0; xq < Eq; xq++) mq[xq] = arguments[xq];
            const Aq = qq._def.args.safeParse(mq, lq);
            if (!Aq.success) throw new Nq([gq(mq, Aq.error)]);
            const cq = Reflect.apply(Oq, this, Aq.data),
              uq = qq._def.returns.safeParse(cq, lq);
            if (!uq.success) throw new Nq([Yq(cq, uq.error)]);
            return uq.data
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
        for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
        return new NE({
          ...this._def,
          args: cE.create(Eq).rest(eq.create())
        })
      }
      returns(qq) {
        return new NE({
          ...this._def,
          returns: qq
        })
      }
      implement(qq) {
        return this.parse(qq)
      }
      strictImplement(qq) {
        return this.parse(qq)
      }
      static create(qq, Eq, gq) {
        return new NE({
          args: qq || cE.create([]).rest(eq.create()),
          returns: Eq || eq.create(),
          typeName: ME.ZodFunction,
          ...Zq(gq)
        })
      }
    }
    class aE extends fq {
      get schema() {
        return this._def.getter()
      }
      _parse(qq) {
        const {
          ctx: Eq
        } = this._processInputParams(qq);
        return this._def.getter()._parse({
          data: Eq.data,
          path: Eq.path,
          parent: Eq
        })
      }
    }
    aE.create = (qq, Eq) => new aE({
      getter: qq,
      typeName: ME.ZodLazy,
      ...Zq(Eq)
    });
    class VE extends fq {
      _parse(qq) {
        if (qq.data !== this._def.value) {
          const Eq = this._getOrReturnCtx(qq);
          return Hq(Eq, {
            received: Eq.data,
            code: Wq.invalid_literal,
            expected: this._def.value
          }), Pq
        }
        return {
          status: "valid",
          value: qq.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function dE(qq, Eq) {
      return new jE({
        values: qq,
        typeName: ME.ZodEnum,
        ...Zq(Eq)
      })
    }
    VE.create = (qq, Eq) => new VE({
      value: qq,
      typeName: ME.ZodLiteral,
      ...Zq(Eq)
    });
    class jE extends fq {
      _parse(qq) {
        if ("string" !== typeof qq.data) {
          const Eq = this._getOrReturnCtx(qq),
            gq = this._def.values;
          return Hq(Eq, {
            expected: xq.joinValues(gq),
            received: Eq.parsedType,
            code: Wq.invalid_type
          }), Pq
        }
        if (-1 === this._def.values.indexOf(qq.data)) {
          const Eq = this._getOrReturnCtx(qq),
            gq = this._def.values;
          return Hq(Eq, {
            received: Eq.data,
            code: Wq.invalid_enum_value,
            options: gq
          }), Pq
        }
        return yq(qq.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const qq = {};
        for (const Eq of this._def.values) qq[Eq] = Eq;
        return qq
      }
      get Values() {
        const qq = {};
        for (const Eq of this._def.values) qq[Eq] = Eq;
        return qq
      }
      get Enum() {
        const qq = {};
        for (const Eq of this._def.values) qq[Eq] = Eq;
        return qq
      }
      extract(qq) {
        return jE.create(qq)
      }
      exclude(qq) {
        return jE.create(this.options.filter((Eq => !qq.includes(Eq))))
      }
    }
    jE.create = dE;
    class HE extends fq {
      _parse(qq) {
        const Eq = xq.getValidEnumValues(this._def.values),
          gq = this._getOrReturnCtx(qq);
        if (gq.parsedType !== uq.string && gq.parsedType !== uq.number) {
          const qq = xq.objectValues(Eq);
          return Hq(gq, {
            expected: xq.joinValues(qq),
            received: gq.parsedType,
            code: Wq.invalid_type
          }), Pq
        }
        if (-1 === Eq.indexOf(qq.data)) {
          const qq = xq.objectValues(Eq);
          return Hq(gq, {
            received: gq.data,
            code: Wq.invalid_enum_value,
            options: qq
          }), Pq
        }
        return yq(qq.data)
      }
      get enum() {
        return this._def.values
      }
    }
    HE.create = (qq, Eq) => new HE({
      values: qq,
      typeName: ME.ZodNativeEnum,
      ...Zq(Eq)
    });
    class oE extends fq {
      unwrap() {
        return this._def.type
      }
      _parse(qq) {
        const {
          ctx: Eq
        } = this._processInputParams(qq);
        if (Eq.parsedType !== uq.promise && !1 === Eq.common.async) return Hq(Eq, {
          code: Wq.invalid_type,
          expected: uq.promise,
          received: Eq.parsedType
        }), Pq;
        const gq = Eq.parsedType === uq.promise ? Eq.data : Promise.resolve(Eq.data);
        return yq(gq.then((qq => this._def.type.parseAsync(qq, {
          path: Eq.path,
          errorMap: Eq.common.contextualErrorMap
        }))))
      }
    }
    oE.create = (qq, Eq) => new oE({
      type: qq,
      typeName: ME.ZodPromise,
      ...Zq(Eq)
    });
    class PE extends fq {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === ME.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(qq) {
        const {
          status: Eq,
          ctx: gq
        } = this._processInputParams(qq), Yq = this._def.effect || null, lq = {
          addIssue: qq => {
            Hq(gq, qq), qq.fatal ? Eq.abort() : Eq.Ha()
          },
          get path() {
            return gq.path
          }
        };
        if (lq.addIssue = lq.addIssue.bind(lq), "preprocess" === Yq.type) {
          const qq = Yq.transform(gq.data, lq);
          return gq.common.issues.length ? {
            status: "Ha",
            value: gq.data
          } : gq.common.async ? Promise.resolve(qq).then((qq => this._def.schema._parseAsync({
            data: qq,
            path: gq.path,
            parent: gq
          }))) : this._def.schema._parseSync({
            data: qq,
            path: gq.path,
            parent: gq
          })
        }
        if ("refinement" === Yq.type) {
          const qq = qq => {
            const Eq = Yq.refinement(qq, lq);
            if (gq.common.async) return Promise.resolve(Eq);
            if (Eq instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return qq
          };
          if (!1 === gq.common.async) {
            const Yq = this._def.schema._parseSync({
              data: gq.data,
              path: gq.path,
              parent: gq
            });
            return "aborted" === Yq.status ? Pq : ("Ha" === Yq.status && Eq.Ha(), qq(Yq.value), {
              status: Eq.value,
              value: Yq.value
            })
          }
          return this._def.schema._parseAsync({
            data: gq.data,
            path: gq.path,
            parent: gq
          }).then((gq => "aborted" === gq.status ? Pq : ("Ha" === gq.status && Eq.Ha(), qq(gq.value).then((() => ({
            status: Eq.value,
            value: gq.value
          }))))))
        }
        if ("transform" === Yq.type) {
          if (!1 === gq.common.async) {
            const qq = this._def.schema._parseSync({
              data: gq.data,
              path: gq.path,
              parent: gq
            });
            if (!vq(qq)) return qq;
            const Oq = Yq.transform(qq.value, lq);
            if (Oq instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: Eq.value,
              value: Oq
            }
          }
          return this._def.schema._parseAsync({
            data: gq.data,
            path: gq.path,
            parent: gq
          }).then((qq => vq(qq) ? Promise.resolve(Yq.transform(qq.value, lq)).then((qq => ({
            status: Eq.value,
            value: qq
          }))) : qq))
        }
        xq.assertNever(Yq)
      }
    }
    PE.create = (qq, Eq, gq) => new PE({
      schema: qq,
      typeName: ME.ZodEffects,
      effect: Eq,
      ...Zq(gq)
    }), PE.createWithPreprocess = (qq, Eq, gq) => new PE({
      schema: Eq,
      effect: {
        type: "preprocess",
        transform: qq
      },
      typeName: ME.ZodEffects,
      ...Zq(gq)
    });
    class QE extends fq {
      _parse(qq) {
        return this._getType(qq) === uq.undefined ? yq(void 0) : this._def.innerType._parse(qq)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    QE.create = (qq, Eq) => new QE({
      innerType: qq,
      typeName: ME.ZodOptional,
      ...Zq(Eq)
    });
    class yE extends fq {
      _parse(qq) {
        return this._getType(qq) === uq.null ? yq(null) : this._def.innerType._parse(qq)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    yE.create = (qq, Eq) => new yE({
      innerType: qq,
      typeName: ME.ZodNullable,
      ...Zq(Eq)
    });
    class tE extends fq {
      _parse(qq) {
        const {
          ctx: Eq
        } = this._processInputParams(qq);
        let gq = Eq.data;
        return Eq.parsedType === uq.undefined && (gq = this._def.defaultValue()), this._def.innerType._parse({
          data: gq,
          path: Eq.path,
          parent: Eq
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    tE.create = (qq, Eq) => new tE({
      innerType: qq,
      typeName: ME.ZodDefault,
      defaultValue: "function" === typeof Eq.default ? Eq.default : () => Eq.default,
      ...Zq(Eq)
    });
    class rE extends fq {
      _parse(qq) {
        const {
          ctx: Eq
        } = this._processInputParams(qq), gq = {
          ...Eq,
          common: {
            ...Eq.common,
            issues: []
          }
        }, Yq = this._def.innerType._parse({
          data: gq.data,
          path: gq.path,
          parent: {
            ...gq
          }
        });
        return hq(Yq) ? Yq.then((qq => ({
          status: "valid",
          value: "valid" === qq.status ? qq.value : this._def.catchValue({
            get error() {
              return new Nq(gq.common.issues)
            },
            input: gq.data
          })
        }))) : {
          status: "valid",
          value: "valid" === Yq.status ? Yq.value : this._def.catchValue({
            get error() {
              return new Nq(gq.common.issues)
            },
            input: gq.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    rE.create = (qq, Eq) => new rE({
      innerType: qq,
      typeName: ME.ZodCatch,
      catchValue: "function" === typeof Eq.catch ? Eq.catch : () => Eq.catch,
      ...Zq(Eq)
    });
    class vE extends fq {
      _parse(qq) {
        if (this._getType(qq) !== uq.nan) {
          const Eq = this._getOrReturnCtx(qq);
          return Hq(Eq, {
            code: Wq.invalid_type,
            expected: uq.nan,
            received: Eq.parsedType
          }), Pq
        }
        return {
          status: "valid",
          value: qq.data
        }
      }
    }
    vE.create = qq => new vE({
      typeName: ME.ZodNaN,
      ...Zq(qq)
    });
    const hE = Symbol("zod_brand");
    class nE extends fq {
      _parse(qq) {
        const {
          ctx: Eq
        } = this._processInputParams(qq), gq = Eq.data;
        return this._def.type._parse({
          data: gq,
          path: Eq.path,
          parent: Eq
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class bE extends fq {
      _parse(qq) {
        const {
          status: Eq,
          ctx: gq
        } = this._processInputParams(qq);
        if (gq.common.async) {
          return (async () => {
            const qq = await this._def.in._parseAsync({
              data: gq.data,
              path: gq.path,
              parent: gq
            });
            return "aborted" === qq.status ? Pq : "Ha" === qq.status ? (Eq.Ha(), Qq(qq.value)) : this._def.out._parseAsync({
              data: qq.value,
              path: gq.path,
              parent: gq
            })
          })()
        } {
          const qq = this._def.in._parseSync({
            data: gq.data,
            path: gq.path,
            parent: gq
          });
          return "aborted" === qq.status ? Pq : "Ha" === qq.status ? (Eq.Ha(), {
            status: "Ha",
            value: qq.value
          }) : this._def.out._parseSync({
            data: qq.value,
            path: gq.path,
            parent: gq
          })
        }
      }
      static create(qq, Eq) {
        return new bE({
          in: qq,
          out: Eq,
          typeName: ME.ZodPipeline
        })
      }
    }
    class iE extends fq {
      _parse(qq) {
        const Eq = this._def.innerType._parse(qq);
        return vq(Eq) && (Eq.value = Object.freeze(Eq.value)), Eq
      }
    }
    iE.create = (qq, Eq) => new iE({
      innerType: qq,
      typeName: ME.ZodReadonly,
      ...Zq(Eq)
    });
    const ZE = function(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          gq = arguments.length > 2 ? arguments[2] : void 0;
        return qq ? Iq.create().superRefine(((Yq, lq) => {
          var Oq, mq;
          if (!qq(Yq)) {
            const qq = "function" === typeof Eq ? Eq(Yq) : "string" === typeof Eq ? {
                message: Eq
              } : Eq,
              xq = null === (mq = null !== (Oq = qq.fatal) && void 0 !== Oq ? Oq : gq) || void 0 === mq || mq,
              Aq = "string" === typeof qq ? {
                message: qq
              } : qq;
            lq.addIssue({
              code: "custom",
              ...Aq,
              fatal: xq
            })
          }
        })) : Iq.create()
      },
      fE = {
        object: YE.lazycreate
      };
    var ME;
    ! function(qq) {
      qq.ZodString = "ZodString", qq.ZodNumber = "ZodNumber", qq.ZodNaN = "ZodNaN", qq.ZodBigInt = "ZodBigInt", qq.ZodBoolean = "ZodBoolean", qq.ZodDate = "ZodDate", qq.ZodSymbol = "ZodSymbol", qq.ZodUndefined = "ZodUndefined", qq.ZodNull = "ZodNull", qq.ZodAny = "ZodAny", qq.ZodUnknown = "ZodUnknown", qq.ZodNever = "ZodNever", qq.ZodVoid = "ZodVoid", qq.ZodArray = "ZodArray", qq.ZodObject = "ZodObject", qq.ZodUnion = "ZodUnion", qq.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", qq.ZodIntersection = "ZodIntersection", qq.ZodTuple = "ZodTuple", qq.ZodRecord = "ZodRecord", qq.ZodMap = "ZodMap", qq.ZodSet = "ZodSet", qq.ZodFunction = "ZodFunction", qq.ZodLazy = "ZodLazy", qq.ZodLiteral = "ZodLiteral", qq.ZodEnum = "ZodEnum", qq.ZodEffects = "ZodEffects", qq.ZodNativeEnum = "ZodNativeEnum", qq.ZodOptional = "ZodOptional", qq.ZodNullable = "ZodNullable", qq.ZodDefault = "ZodDefault", qq.ZodCatch = "ZodCatch", qq.ZodPromise = "ZodPromise", qq.ZodBranded = "ZodBranded", qq.ZodPipeline = "ZodPipeline", qq.ZodReadonly = "ZodReadonly"
    }(ME || (ME = {}));
    const TE = kq.create,
      zE = Uq.create,
      SE = vE.create,
      pE = Fq.create,
      GE = sq.create,
      LE = Xq.create,
      JE = wq.create,
      kE = Kq.create,
      RE = Cq.create,
      UE = Iq.create,
      FE = eq.create,
      sE = Dq.create,
      XE = qE.create,
      wE = EE.create,
      KE = YE.create,
      CE = YE.strictCreate,
      IE = lE.create,
      eE = mE.create,
      DE = AE.create,
      qg = cE.create,
      Eg = uE.create,
      gg = BE.create,
      Yg = WE.create,
      lg = NE.create,
      Og = aE.create,
      mg = VE.create,
      xg = jE.create,
      Ag = HE.create,
      cg = oE.create,
      ug = PE.create,
      Bg = QE.create,
      Wg = yE.create,
      Ng = PE.createWithPreprocess,
      ag = bE.create,
      Vg = {
        string: qq => kq.create({
          ...qq,
          coerce: !0
        }),
        number: qq => Uq.create({
          ...qq,
          coerce: !0
        }),
        boolean: qq => sq.create({
          ...qq,
          coerce: !0
        }),
        bigint: qq => Fq.create({
          ...qq,
          coerce: !0
        }),
        date: qq => Xq.create({
          ...qq,
          coerce: !0
        })
      },
      dg = Pq;
    var jg = Object.freeze({
        __proto__: null,
        defaultErrorMap: aq,
        setErrorMap: function(qq) {
          Vq = qq
        },
        getErrorMap: dq,
        makeIssue: jq,
        EMPTY_PATH: [],
        addIssueToContext: Hq,
        ParseStatus: oq,
        INVALID: Pq,
        DIRTY: Qq,
        OK: yq,
        isAborted: tq,
        isDirty: rq,
        isValid: vq,
        isAsync: hq,
        get util() {
          return xq
        },
        get objectUtil() {
          return Aq
        },
        ZodParsedType: uq,
        getParsedType: Bq,
        ZodType: fq,
        ZodString: kq,
        ZodNumber: Uq,
        ZodBigInt: Fq,
        ZodBoolean: sq,
        ZodDate: Xq,
        ZodSymbol: wq,
        ZodUndefined: Kq,
        ZodNull: Cq,
        ZodAny: Iq,
        ZodUnknown: eq,
        ZodNever: Dq,
        ZodVoid: qE,
        ZodArray: EE,
        ZodObject: YE,
        ZodUnion: lE,
        ZodDiscriminatedUnion: mE,
        ZodIntersection: AE,
        ZodTuple: cE,
        ZodRecord: uE,
        ZodMap: BE,
        ZodSet: WE,
        ZodFunction: NE,
        ZodLazy: aE,
        ZodLiteral: VE,
        ZodEnum: jE,
        ZodNativeEnum: HE,
        ZodPromise: oE,
        ZodEffects: PE,
        ZodTransformer: PE,
        ZodOptional: QE,
        ZodNullable: yE,
        ZodDefault: tE,
        ZodCatch: rE,
        ZodNaN: vE,
        BRAND: hE,
        ZodBranded: nE,
        ZodPipeline: bE,
        ZodReadonly: iE,
        custom: ZE,
        Schema: fq,
        ZodSchema: fq,
        late: fE,
        get ZodFirstPartyTypeKind() {
          return ME
        },
        coerce: Vg,
        any: UE,
        array: wE,
        bigint: pE,
        boolean: GE,
        date: LE,
        discriminatedUnion: eE,
        effect: ug,
        enum: xg,
        function: lg,
        instanceof: function(qq) {
          let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${qq.name}`
          };
          return ZE((Eq => Eq instanceof qq), Eq)
        },
        intersection: DE,
        lazy: Og,
        literal: mg,
        map: gg,
        nan: SE,
        nativeEnum: Ag,
        never: sE,
        null: RE,
        nullable: Wg,
        number: zE,
        object: KE,
        oboolean: () => GE().optional(),
        onumber: () => zE().optional(),
        optional: Bg,
        ostring: () => TE().optional(),
        pipeline: ag,
        preprocess: Ng,
        promise: cg,
        record: Eg,
        set: Yg,
        strictObject: CE,
        string: TE,
        symbol: JE,
        transformer: ug,
        tuple: qg,
        undefined: kE,
        union: IE,
        unknown: FE,
        void: XE,
        NEVER: dg,
        ZodIssueCode: Wq,
        quotelessJson: qq => JSON.stringify(qq, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: Nq
      }),
      Hg = {
        exports: {}
      };
    ! function(qq) {
      var Eq = function(qq) {
        var gq = 1e7,
          Yq = 9007199254740992,
          lq = Wq(Yq),
          Oq = "0123456789abcdefghijklmnopqrstuvwxyz",
          mq = "function" === typeof BigInt;

        function xq(qq, Eq, gq, Yq) {
          return "undefined" === typeof qq ? xq[0] : "undefined" !== typeof Eq && (10 !== +Eq || gq) ? sq(qq, Eq, gq, Yq) : Iq(qq)
        }

        function Aq(qq, Eq) {
          this.value = qq, this.sign = Eq, this.isSmall = !1
        }

        function cq(qq) {
          this.value = qq, this.sign = qq < 0, this.isSmall = !0
        }

        function uq(qq) {
          this.value = qq
        }

        function Bq(qq) {
          return -Yq < qq && qq < Yq
        }

        function Wq(qq) {
          return qq < 1e7 ? [qq] : qq < 1e14 ? [qq % 1e7, Math.floor(qq / 1e7)] : [qq % 1e7, Math.floor(qq / 1e7) % 1e7, Math.floor(qq / 1e14)]
        }

        function Nq(qq) {
          aq(qq);
          var Eq = qq.length;
          if (Eq < 4 && Zq(qq, lq) < 0) switch (Eq) {
            case 0:
              return 0;
            case 1:
              return qq[0];
            case 2:
              return qq[0] + qq[1] * gq;
            default:
              return qq[0] + (qq[1] + qq[2] * gq) * gq
          }
          return qq
        }

        function aq(qq) {
          for (var Eq = qq.length; 0 === qq[--Eq];);
          qq.length = Eq + 1
        }

        function Vq(qq) {
          for (var Eq = new Array(qq), gq = -1; ++gq < qq;) Eq[gq] = 0;
          return Eq
        }

        function dq(qq) {
          return qq > 0 ? Math.floor(qq) : Math.ceil(qq)
        }

        function jq(qq, Eq) {
          var Yq, lq, Oq = qq.length,
            mq = Eq.length,
            xq = new Array(Oq),
            Aq = 0,
            cq = gq;
          for (lq = 0; lq < mq; lq++) Aq = (Yq = qq[lq] + Eq[lq] + Aq) >= cq ? 1 : 0, xq[lq] = Yq - Aq * cq;
          for (; lq < Oq;) Aq = (Yq = qq[lq] + Aq) === cq ? 1 : 0, xq[lq++] = Yq - Aq * cq;
          return Aq > 0 && xq.push(Aq), xq
        }

        function Hq(qq, Eq) {
          return qq.length >= Eq.length ? jq(qq, Eq) : jq(Eq, qq)
        }

        function oq(qq, Eq) {
          var Yq, lq, Oq = qq.length,
            mq = new Array(Oq),
            xq = gq;
          for (lq = 0; lq < Oq; lq++) Yq = qq[lq] - xq + Eq, Eq = Math.floor(Yq / xq), mq[lq] = Yq - Eq * xq, Eq += 1;
          for (; Eq > 0;) mq[lq++] = Eq % xq, Eq = Math.floor(Eq / xq);
          return mq
        }

        function Pq(qq, Eq) {
          var Yq, lq, Oq = qq.length,
            mq = Eq.length,
            xq = new Array(Oq),
            Aq = 0,
            cq = gq;
          for (Yq = 0; Yq < mq; Yq++)(lq = qq[Yq] - Aq - Eq[Yq]) < 0 ? (lq += cq, Aq = 1) : Aq = 0, xq[Yq] = lq;
          for (Yq = mq; Yq < Oq; Yq++) {
            if (!((lq = qq[Yq] - Aq) < 0)) {
              xq[Yq++] = lq;
              break
            }
            lq += cq, xq[Yq] = lq
          }
          for (; Yq < Oq; Yq++) xq[Yq] = qq[Yq];
          return aq(xq), xq
        }

        function Qq(qq, Eq, Yq) {
          var lq, Oq, mq = qq.length,
            xq = new Array(mq),
            uq = -Eq,
            Bq = gq;
          for (lq = 0; lq < mq; lq++) Oq = qq[lq] + uq, uq = Math.floor(Oq / Bq), Oq %= Bq, xq[lq] = Oq < 0 ? Oq + Bq : Oq;
          return "number" === typeof(xq = Nq(xq)) ? (Yq && (xq = -xq), new cq(xq)) : new Aq(xq, Yq)
        }

        function yq(qq, Eq) {
          var Yq, lq, Oq, mq, xq = qq.length,
            Aq = Eq.length,
            cq = Vq(xq + Aq),
            uq = gq;
          for (Oq = 0; Oq < xq; ++Oq) {
            mq = qq[Oq];
            for (var Bq = 0; Bq < Aq; ++Bq) Yq = mq * Eq[Bq] + cq[Oq + Bq], lq = Math.floor(Yq / uq), cq[Oq + Bq] = Yq - lq * uq, cq[Oq + Bq + 1] += lq
          }
          return aq(cq), cq
        }

        function tq(qq, Eq) {
          var Yq, lq, Oq = qq.length,
            mq = new Array(Oq),
            xq = gq,
            Aq = 0;
          for (lq = 0; lq < Oq; lq++) Yq = qq[lq] * Eq + Aq, Aq = Math.floor(Yq / xq), mq[lq] = Yq - Aq * xq;
          for (; Aq > 0;) mq[lq++] = Aq % xq, Aq = Math.floor(Aq / xq);
          return mq
        }

        function rq(qq, Eq) {
          for (var gq = []; Eq-- > 0;) gq.push(0);
          return gq.concat(qq)
        }

        function vq(qq, Eq) {
          var gq = Math.max(qq.length, Eq.length);
          if (gq <= 30) return yq(qq, Eq);
          gq = Math.ceil(gq / 2);
          var Yq = qq.slice(gq),
            lq = qq.slice(0, gq),
            Oq = Eq.slice(gq),
            mq = Eq.slice(0, gq),
            xq = vq(lq, mq),
            Aq = vq(Yq, Oq),
            cq = vq(Hq(lq, Yq), Hq(mq, Oq)),
            uq = Hq(Hq(xq, rq(Pq(Pq(cq, xq), Aq), gq)), rq(Aq, 2 * gq));
          return aq(uq), uq
        }

        function hq(qq, Eq, Yq) {
          return new Aq(qq < gq ? tq(Eq, qq) : yq(Eq, Wq(qq)), Yq)
        }

        function nq(qq) {
          var Eq, Yq, lq, Oq, mq = qq.length,
            xq = Vq(mq + mq),
            Aq = gq;
          for (lq = 0; lq < mq; lq++) {
            Yq = 0 - (Oq = qq[lq]) * Oq;
            for (var cq = lq; cq < mq; cq++) Eq = Oq * qq[cq] * 2 + xq[lq + cq] + Yq, Yq = Math.floor(Eq / Aq), xq[lq + cq] = Eq - Yq * Aq;
            xq[lq + mq] = Yq
          }
          return aq(xq), xq
        }

        function bq(qq, Eq) {
          var Yq, lq, Oq, mq, xq = qq.length,
            Aq = Vq(xq),
            cq = gq;
          for (Oq = 0, Yq = xq - 1; Yq >= 0; --Yq) Oq = (mq = Oq * cq + qq[Yq]) - (lq = dq(mq / Eq)) * Eq, Aq[Yq] = 0 | lq;
          return [Aq, 0 | Oq]
        }

        function iq(qq, Eq) {
          var Yq, lq = Iq(Eq);
          if (mq) return [new uq(qq.value / lq.value), new uq(qq.value % lq.value)];
          var Oq, Bq = qq.value,
            jq = lq.value;
          if (0 === jq) throw new Error("Cannot divide by zero");
          if (qq.isSmall) return lq.isSmall ? [new cq(dq(Bq / jq)), new cq(Bq % jq)] : [xq[0], qq];
          if (lq.isSmall) {
            if (1 === jq) return [qq, xq[0]];
            if (-1 == jq) return [qq.nY(), xq[0]];
            var Hq = Math.abs(jq);
            if (Hq < gq) {
              Oq = Nq((Yq = bq(Bq, Hq))[0]);
              var oq = Yq[1];
              return qq.sign && (oq = -oq), "number" === typeof Oq ? (qq.sign !== lq.sign && (Oq = -Oq), [new cq(Oq), new cq(oq)]) : [new Aq(Oq, qq.sign !== lq.sign), new cq(oq)]
            }
            jq = Wq(Hq)
          }
          var Qq = Zq(Bq, jq);
          if (-1 === Qq) return [xq[0], qq];
          if (0 === Qq) return [xq[qq.sign === lq.sign ? 1 : -1], xq[0]];
          Yq = Bq.length + jq.length <= 200 ? function(qq, Eq) {
            var Yq, lq, Oq, mq, xq, Aq, cq, uq = qq.length,
              Bq = Eq.length,
              Wq = gq,
              aq = Vq(Eq.length),
              dq = Eq[Bq - 1],
              jq = Math.ceil(Wq / (2 * dq)),
              Hq = tq(qq, jq),
              oq = tq(Eq, jq);
            for (Hq.length <= uq && Hq.push(0), oq.push(0), dq = oq[Bq - 1], lq = uq - Bq; lq >= 0; lq--) {
              for (Yq = Wq - 1, Hq[lq + Bq] !== dq && (Yq = Math.floor((Hq[lq + Bq] * Wq + Hq[lq + Bq - 1]) / dq)), Oq = 0, mq = 0, Aq = oq.length, xq = 0; xq < Aq; xq++) Oq += Yq * oq[xq], cq = Math.floor(Oq / Wq), mq += Hq[lq + xq] - (Oq - cq * Wq), Oq = cq, mq < 0 ? (Hq[lq + xq] = mq + Wq, mq = -1) : (Hq[lq + xq] = mq, mq = 0);
              for (; 0 !== mq;) {
                for (Yq -= 1, Oq = 0, xq = 0; xq < Aq; xq++)(Oq += Hq[lq + xq] - Wq + oq[xq]) < 0 ? (Hq[lq + xq] = Oq + Wq, Oq = 0) : (Hq[lq + xq] = Oq, Oq = 1);
                mq += Oq
              }
              aq[lq] = Yq
            }
            return Hq = bq(Hq, jq)[0], [Nq(aq), Nq(Hq)]
          }(Bq, jq) : function(qq, Eq) {
            for (var Yq, lq, Oq, mq, xq, Aq = qq.length, cq = Eq.length, uq = [], Bq = [], Wq = gq; Aq;)
              if (Bq.unshift(qq[--Aq]), aq(Bq), Zq(Bq, Eq) < 0) uq.push(0);
              else {
                Oq = Bq[(lq = Bq.length) - 1] * Wq + Bq[lq - 2], mq = Eq[cq - 1] * Wq + Eq[cq - 2], lq > cq && (Oq = (Oq + 1) * Wq), Yq = Math.ceil(Oq / mq);
                do {
                  if (Zq(xq = tq(Eq, Yq), Bq) <= 0) break;
                  Yq--
                } while (Yq);
                uq.push(Yq), Bq = Pq(Bq, xq)
              } return uq.reverse(), [Nq(uq), Nq(Bq)]
          }(Bq, jq), Oq = Yq[0];
          var yq = qq.sign !== lq.sign,
            rq = Yq[1],
            vq = qq.sign;
          return "number" === typeof Oq ? (yq && (Oq = -Oq), Oq = new cq(Oq)) : Oq = new Aq(Oq, yq), "number" === typeof rq ? (vq && (rq = -rq), rq = new cq(rq)) : rq = new Aq(rq, vq), [Oq, rq]
        }

        function Zq(qq, Eq) {
          if (qq.length !== Eq.length) return qq.length > Eq.length ? 1 : -1;
          for (var gq = qq.length - 1; gq >= 0; gq--)
            if (qq[gq] !== Eq[gq]) return qq[gq] > Eq[gq] ? 1 : -1;
          return 0
        }

        function fq(qq) {
          var Eq = qq.abs();
          return !Eq.isUnit() && (!!(Eq.equals(2) || Eq.equals(3) || Eq.equals(5)) || !(Eq.isEven() || Eq.isDivisibleBy(3) || Eq.isDivisibleBy(5)) && (!!Eq.lesser(49) || void 0))
        }

        function Mq(qq, gq) {
          for (var Yq, lq, Oq, mq = qq.prev(), xq = mq, Aq = 0; xq.isEven();) xq = xq.divide(2), Aq++;
          qq: for (lq = 0; lq < gq.length; lq++)
            if (!qq.lesser(gq[lq]) && !(Oq = Eq(gq[lq]).modPow(xq, qq)).isUnit() && !Oq.equals(mq)) {
              for (Yq = Aq - 1; 0 != Yq; Yq--) {
                if ((Oq = Oq.square().mod(qq)).isUnit()) return !1;
                if (Oq.equals(mq)) continue qq
              }
              return !1
            }
          return !0
        }
        Aq.prototype = Object.create(xq.prototype), cq.prototype = Object.create(xq.prototype), uq.prototype = Object.create(xq.prototype), Aq.prototype.add = function(qq) {
          var Eq = Iq(qq);
          if (this.sign !== Eq.sign) return this.subtract(Eq.nY());
          var gq = this.value,
            Yq = Eq.value;
          return Eq.isSmall ? new Aq(oq(gq, Math.abs(Yq)), this.sign) : new Aq(Hq(gq, Yq), this.sign)
        }, Aq.prototype.plus = Aq.prototype.add, cq.prototype.add = function(qq) {
          var Eq = Iq(qq),
            gq = this.value;
          if (gq < 0 !== Eq.sign) return this.subtract(Eq.nY());
          var Yq = Eq.value;
          if (Eq.isSmall) {
            if (Bq(gq + Yq)) return new cq(gq + Yq);
            Yq = Wq(Math.abs(Yq))
          }
          return new Aq(oq(Yq, Math.abs(gq)), gq < 0)
        }, cq.prototype.plus = cq.prototype.add, uq.prototype.add = function(qq) {
          return new uq(this.value + Iq(qq).value)
        }, uq.prototype.plus = uq.prototype.add, Aq.prototype.subtract = function(qq) {
          var Eq = Iq(qq);
          if (this.sign !== Eq.sign) return this.add(Eq.nY());
          var gq = this.value,
            Yq = Eq.value;
          return Eq.isSmall ? Qq(gq, Math.abs(Yq), this.sign) : function(qq, Eq, gq) {
            var Yq;
            return Zq(qq, Eq) >= 0 ? Yq = Pq(qq, Eq) : (Yq = Pq(Eq, qq), gq = !gq), "number" === typeof(Yq = Nq(Yq)) ? (gq && (Yq = -Yq), new cq(Yq)) : new Aq(Yq, gq)
          }(gq, Yq, this.sign)
        }, Aq.prototype.minus = Aq.prototype.subtract, cq.prototype.subtract = function(qq) {
          var Eq = Iq(qq),
            gq = this.value;
          if (gq < 0 !== Eq.sign) return this.add(Eq.nY());
          var Yq = Eq.value;
          return Eq.isSmall ? new cq(gq - Yq) : Qq(Yq, Math.abs(gq), gq >= 0)
        }, cq.prototype.minus = cq.prototype.subtract, uq.prototype.subtract = function(qq) {
          return new uq(this.value - Iq(qq).value)
        }, uq.prototype.minus = uq.prototype.subtract, Aq.prototype.nY = function() {
          return new Aq(this.value, !this.sign)
        }, cq.prototype.nY = function() {
          var qq = this.sign,
            Eq = new cq(-this.value);
          return Eq.sign = !qq, Eq
        }, uq.prototype.nY = function() {
          return new uq(-this.value)
        }, Aq.prototype.abs = function() {
          return new Aq(this.value, !1)
        }, cq.prototype.abs = function() {
          return new cq(Math.abs(this.value))
        }, uq.prototype.abs = function() {
          return new uq(this.value >= 0 ? this.value : -this.value)
        }, Aq.prototype.multiply = function(qq) {
          var Eq, Yq, lq, Oq = Iq(qq),
            mq = this.value,
            cq = Oq.value,
            uq = this.sign !== Oq.sign;
          if (Oq.isSmall) {
            if (0 === cq) return xq[0];
            if (1 === cq) return this;
            if (-1 === cq) return this.nY();
            if ((Eq = Math.abs(cq)) < gq) return new Aq(tq(mq, Eq), uq);
            cq = Wq(Eq)
          }
          return Yq = mq.length, lq = cq.length, new Aq(-.012 * Yq - .012 * lq + 15e-6 * Yq * lq > 0 ? vq(mq, cq) : yq(mq, cq), uq)
        }, Aq.prototype.times = Aq.prototype.multiply, cq.prototype._multiplyBySmall = function(qq) {
          return Bq(qq.value * this.value) ? new cq(qq.value * this.value) : hq(Math.abs(qq.value), Wq(Math.abs(this.value)), this.sign !== qq.sign)
        }, Aq.prototype._multiplyBySmall = function(qq) {
          return 0 === qq.value ? xq[0] : 1 === qq.value ? this : -1 === qq.value ? this.nY() : hq(Math.abs(qq.value), this.value, this.sign !== qq.sign)
        }, cq.prototype.multiply = function(qq) {
          return Iq(qq)._multiplyBySmall(this)
        }, cq.prototype.times = cq.prototype.multiply, uq.prototype.multiply = function(qq) {
          return new uq(this.value * Iq(qq).value)
        }, uq.prototype.times = uq.prototype.multiply, Aq.prototype.square = function() {
          return new Aq(nq(this.value), !1)
        }, cq.prototype.square = function() {
          var qq = this.value * this.value;
          return Bq(qq) ? new cq(qq) : new Aq(nq(Wq(Math.abs(this.value))), !1)
        }, uq.prototype.square = function(qq) {
          return new uq(this.value * this.value)
        }, Aq.prototype.divmod = function(qq) {
          var Eq = iq(this, qq);
          return {
            quotient: Eq[0],
            remainder: Eq[1]
          }
        }, uq.prototype.divmod = cq.prototype.divmod = Aq.prototype.divmod, Aq.prototype.divide = function(qq) {
          return iq(this, qq)[0]
        }, uq.prototype.over = uq.prototype.divide = function(qq) {
          return new uq(this.value / Iq(qq).value)
        }, cq.prototype.over = cq.prototype.divide = Aq.prototype.over = Aq.prototype.divide, Aq.prototype.mod = function(qq) {
          return iq(this, qq)[1]
        }, uq.prototype.mod = uq.prototype.remainder = function(qq) {
          return new uq(this.value % Iq(qq).value)
        }, cq.prototype.remainder = cq.prototype.mod = Aq.prototype.remainder = Aq.prototype.mod, Aq.prototype.pow = function(qq) {
          var Eq, gq, Yq, lq = Iq(qq),
            Oq = this.value,
            mq = lq.value;
          if (0 === mq) return xq[1];
          if (0 === Oq) return xq[0];
          if (1 === Oq) return xq[1];
          if (-1 === Oq) return lq.isEven() ? xq[1] : xq[-1];
          if (lq.sign) return xq[0];
          if (!lq.isSmall) throw new Error("The exponent " + lq.toString() + " is too large.");
          if (this.isSmall && Bq(Eq = Math.pow(Oq, mq))) return new cq(dq(Eq));
          for (gq = this, Yq = xq[1]; !0 & mq && (Yq = Yq.times(gq), --mq), 0 !== mq;) mq /= 2, gq = gq.square();
          return Yq
        }, cq.prototype.pow = Aq.prototype.pow, uq.prototype.pow = function(qq) {
          var Eq = Iq(qq),
            gq = this.value,
            Yq = Eq.value,
            lq = BigInt(0),
            Oq = BigInt(1),
            mq = BigInt(2);
          if (Yq === lq) return xq[1];
          if (gq === lq) return xq[0];
          if (gq === Oq) return xq[1];
          if (gq === BigInt(-1)) return Eq.isEven() ? xq[1] : xq[-1];
          if (Eq.isNegative()) return new uq(lq);
          for (var Aq = this, cq = xq[1];
            (Yq & Oq) === Oq && (cq = cq.times(Aq), --Yq), Yq !== lq;) Yq /= mq, Aq = Aq.square();
          return cq
        }, Aq.prototype.modPow = function(qq, Eq) {
          if (qq = Iq(qq), (Eq = Iq(Eq)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var gq = xq[1],
            Yq = this.mod(Eq);
          for (qq.isNegative() && (qq = qq.multiply(xq[-1]), Yq = Yq.modInv(Eq)); qq.isPositive();) {
            if (Yq.isZero()) return xq[0];
            qq.isOdd() && (gq = gq.multiply(Yq).mod(Eq)), qq = qq.divide(2), Yq = Yq.square().mod(Eq)
          }
          return gq
        }, uq.prototype.modPow = cq.prototype.modPow = Aq.prototype.modPow, Aq.prototype.compareAbs = function(qq) {
          var Eq = Iq(qq),
            gq = this.value,
            Yq = Eq.value;
          return Eq.isSmall ? 1 : Zq(gq, Yq)
        }, cq.prototype.compareAbs = function(qq) {
          var Eq = Iq(qq),
            gq = Math.abs(this.value),
            Yq = Eq.value;
          return Eq.isSmall ? gq === (Yq = Math.abs(Yq)) ? 0 : gq > Yq ? 1 : -1 : -1
        }, uq.prototype.compareAbs = function(qq) {
          var Eq = this.value,
            gq = Iq(qq).value;
          return (Eq = Eq >= 0 ? Eq : -Eq) === (gq = gq >= 0 ? gq : -gq) ? 0 : Eq > gq ? 1 : -1
        }, Aq.prototype.compare = function(qq) {
          if (qq === 1 / 0) return -1;
          if (qq === -1 / 0) return 1;
          var Eq = Iq(qq),
            gq = this.value,
            Yq = Eq.value;
          return this.sign !== Eq.sign ? Eq.sign ? 1 : -1 : Eq.isSmall ? this.sign ? -1 : 1 : Zq(gq, Yq) * (this.sign ? -1 : 1)
        }, Aq.prototype.compareTo = Aq.prototype.compare, cq.prototype.compare = function(qq) {
          if (qq === 1 / 0) return -1;
          if (qq === -1 / 0) return 1;
          var Eq = Iq(qq),
            gq = this.value,
            Yq = Eq.value;
          return Eq.isSmall ? gq == Yq ? 0 : gq > Yq ? 1 : -1 : gq < 0 !== Eq.sign ? gq < 0 ? -1 : 1 : gq < 0 ? 1 : -1
        }, cq.prototype.compareTo = cq.prototype.compare, uq.prototype.compare = function(qq) {
          if (qq === 1 / 0) return -1;
          if (qq === -1 / 0) return 1;
          var Eq = this.value,
            gq = Iq(qq).value;
          return Eq === gq ? 0 : Eq > gq ? 1 : -1
        }, uq.prototype.compareTo = uq.prototype.compare, Aq.prototype.equals = function(qq) {
          return 0 === this.compare(qq)
        }, uq.prototype.eq = uq.prototype.equals = cq.prototype.eq = cq.prototype.equals = Aq.prototype.eq = Aq.prototype.equals, Aq.prototype.notEquals = function(qq) {
          return 0 !== this.compare(qq)
        }, uq.prototype.neq = uq.prototype.notEquals = cq.prototype.neq = cq.prototype.notEquals = Aq.prototype.neq = Aq.prototype.notEquals, Aq.prototype.greater = function(qq) {
          return this.compare(qq) > 0
        }, uq.prototype.gt = uq.prototype.greater = cq.prototype.gt = cq.prototype.greater = Aq.prototype.gt = Aq.prototype.greater, Aq.prototype.lesser = function(qq) {
          return this.compare(qq) < 0
        }, uq.prototype.lt = uq.prototype.lesser = cq.prototype.lt = cq.prototype.lesser = Aq.prototype.lt = Aq.prototype.lesser, Aq.prototype.greaterOrEquals = function(qq) {
          return this.compare(qq) >= 0
        }, uq.prototype.geq = uq.prototype.greaterOrEquals = cq.prototype.geq = cq.prototype.greaterOrEquals = Aq.prototype.geq = Aq.prototype.greaterOrEquals, Aq.prototype.lesserOrEquals = function(qq) {
          return this.compare(qq) <= 0
        }, uq.prototype.leq = uq.prototype.lesserOrEquals = cq.prototype.leq = cq.prototype.lesserOrEquals = Aq.prototype.leq = Aq.prototype.lesserOrEquals, Aq.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, cq.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, uq.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, Aq.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, cq.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, uq.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, Aq.prototype.isPositive = function() {
          return !this.sign
        }, cq.prototype.isPositive = function() {
          return this.value > 0
        }, uq.prototype.isPositive = cq.prototype.isPositive, Aq.prototype.isNegative = function() {
          return this.sign
        }, cq.prototype.isNegative = function() {
          return this.value < 0
        }, uq.prototype.isNegative = cq.prototype.isNegative, Aq.prototype.isUnit = function() {
          return !1
        }, cq.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, uq.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, Aq.prototype.isZero = function() {
          return !1
        }, cq.prototype.isZero = function() {
          return 0 === this.value
        }, uq.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, Aq.prototype.isDivisibleBy = function(qq) {
          var Eq = Iq(qq);
          return !Eq.isZero() && (!!Eq.isUnit() || (0 === Eq.compareAbs(2) ? this.isEven() : this.mod(Eq).isZero()))
        }, uq.prototype.isDivisibleBy = cq.prototype.isDivisibleBy = Aq.prototype.isDivisibleBy, Aq.prototype.isPrime = function(gq) {
          var Yq = fq(this);
          if (Yq !== qq) return Yq;
          var lq = this.abs(),
            Oq = lq.bitLength();
          if (Oq <= 64) return Mq(lq, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var mq = Math.log(2) * Oq.toJSNumber(), xq = Math.ceil(!0 === gq ? 2 * Math.pow(mq, 2) : mq), Aq = [], cq = 0; cq < xq; cq++) Aq.push(Eq(cq + 2));
          return Mq(lq, Aq)
        }, uq.prototype.isPrime = cq.prototype.isPrime = Aq.prototype.isPrime, Aq.prototype.isProbablePrime = function(gq, Yq) {
          var lq = fq(this);
          if (lq !== qq) return lq;
          for (var Oq = this.abs(), mq = gq === qq ? 5 : gq, xq = [], Aq = 0; Aq < mq; Aq++) xq.push(Eq.randBetween(2, Oq.minus(2), Yq));
          return Mq(Oq, xq)
        }, uq.prototype.isProbablePrime = cq.prototype.isProbablePrime = Aq.prototype.isProbablePrime, Aq.prototype.modInv = function(qq) {
          for (var gq, Yq, lq, Oq = Eq.zero, mq = Eq.one, xq = Iq(qq), Aq = this.abs(); !Aq.isZero();) gq = xq.divide(Aq), Yq = Oq, lq = xq, Oq = mq, xq = Aq, mq = Yq.subtract(gq.multiply(mq)), Aq = lq.subtract(gq.multiply(Aq));
          if (!xq.isUnit()) throw new Error(this.toString() + " and " + qq.toString() + " are not co-prime");
          return -1 === Oq.compare(0) && (Oq = Oq.add(qq)), this.isNegative() ? Oq.nY() : Oq
        }, uq.prototype.modInv = cq.prototype.modInv = Aq.prototype.modInv, Aq.prototype.next = function() {
          var qq = this.value;
          return this.sign ? Qq(qq, 1, this.sign) : new Aq(oq(qq, 1), this.sign)
        }, cq.prototype.next = function() {
          var qq = this.value;
          return qq + 1 < Yq ? new cq(qq + 1) : new Aq(lq, !1)
        }, uq.prototype.next = function() {
          return new uq(this.value + BigInt(1))
        }, Aq.prototype.prev = function() {
          var qq = this.value;
          return this.sign ? new Aq(oq(qq, 1), !0) : Qq(qq, 1, this.sign)
        }, cq.prototype.prev = function() {
          var qq = this.value;
          return qq - 1 > -Yq ? new cq(qq - 1) : new Aq(lq, !0)
        }, uq.prototype.prev = function() {
          return new uq(this.value - BigInt(1))
        };
        for (var Tq = [1]; 2 * Tq[Tq.length - 1] <= gq;) Tq.push(2 * Tq[Tq.length - 1]);
        var zq = Tq.length,
          Sq = Tq[zq - 1];

        function pq(qq) {
          return Math.abs(qq) <= gq
        }

        function Gq(qq, gq, Yq) {
          gq = Iq(gq);
          for (var lq = qq.isNegative(), Oq = gq.isNegative(), mq = lq ? qq.not() : qq, xq = Oq ? gq.not() : gq, Aq = 0, cq = 0, uq = null, Bq = null, Wq = []; !mq.isZero() || !xq.isZero();) Aq = (uq = iq(mq, Sq))[1].toJSNumber(), lq && (Aq = Sq - 1 - Aq), cq = (Bq = iq(xq, Sq))[1].toJSNumber(), Oq && (cq = Sq - 1 - cq), mq = uq[0], xq = Bq[0], Wq.push(Yq(Aq, cq));
          for (var Nq = 0 !== Yq(lq ? 1 : 0, Oq ? 1 : 0) ? Eq(-1) : Eq(0), aq = Wq.length - 1; aq >= 0; aq -= 1) Nq = Nq.multiply(Sq).add(Eq(Wq[aq]));
          return Nq
        }
        Aq.prototype.shiftLeft = function(qq) {
          var Eq = Iq(qq).toJSNumber();
          if (!pq(Eq)) throw new Error(String(Eq) + " is too large for shifting.");
          if (Eq < 0) return this.shiftRight(-Eq);
          var gq = this;
          if (gq.isZero()) return gq;
          for (; Eq >= zq;) gq = gq.multiply(Sq), Eq -= zq - 1;
          return gq.multiply(Tq[Eq])
        }, uq.prototype.shiftLeft = cq.prototype.shiftLeft = Aq.prototype.shiftLeft, Aq.prototype.shiftRight = function(qq) {
          var Eq, gq = Iq(qq).toJSNumber();
          if (!pq(gq)) throw new Error(String(gq) + " is too large for shifting.");
          if (gq < 0) return this.shiftLeft(-gq);
          for (var Yq = this; gq >= zq;) {
            if (Yq.isZero() || Yq.isNegative() && Yq.isUnit()) return Yq;
            Yq = (Eq = iq(Yq, Sq))[1].isNegative() ? Eq[0].prev() : Eq[0], gq -= zq - 1
          }
          return (Eq = iq(Yq, Tq[gq]))[1].isNegative() ? Eq[0].prev() : Eq[0]
        }, uq.prototype.shiftRight = cq.prototype.shiftRight = Aq.prototype.shiftRight, Aq.prototype.not = function() {
          return this.nY().prev()
        }, uq.prototype.not = cq.prototype.not = Aq.prototype.not, Aq.prototype.and = function(qq) {
          return Gq(this, qq, (function(qq, Eq) {
            return qq & Eq
          }))
        }, uq.prototype.and = cq.prototype.and = Aq.prototype.and, Aq.prototype.or = function(qq) {
          return Gq(this, qq, (function(qq, Eq) {
            return qq | Eq
          }))
        }, uq.prototype.or = cq.prototype.or = Aq.prototype.or, Aq.prototype.xor = function(qq) {
          return Gq(this, qq, (function(qq, Eq) {
            return qq ^ Eq
          }))
        }, uq.prototype.xor = cq.prototype.xor = Aq.prototype.xor;
        var Lq = 1 << 30;

        function Jq(qq) {
          var Eq = qq.value,
            Yq = "number" === typeof Eq ? Eq | Lq : "bigint" === typeof Eq ? Eq | BigInt(Lq) : Eq[0] + Eq[1] * gq | 1073758208;
          return Yq & -Yq
        }

        function kq(qq, gq) {
          if (gq.compareTo(qq) <= 0) {
            var Yq = kq(qq, gq.square(gq)),
              lq = Yq.p,
              Oq = Yq.e,
              mq = lq.multiply(gq);
            return mq.compareTo(qq) <= 0 ? {
              p: mq,
              e: 2 * Oq + 1
            } : {
              p: lq,
              e: 2 * Oq
            }
          }
          return {
            p: Eq(1),
            e: 0
          }
        }

        function Rq(qq, Eq) {
          return qq = Iq(qq), Eq = Iq(Eq), qq.greater(Eq) ? qq : Eq
        }

        function Uq(qq, Eq) {
          return qq = Iq(qq), Eq = Iq(Eq), qq.lesser(Eq) ? qq : Eq
        }

        function Fq(qq, Eq) {
          if (qq = Iq(qq).abs(), Eq = Iq(Eq).abs(), qq.equals(Eq)) return qq;
          if (qq.isZero()) return Eq;
          if (Eq.isZero()) return qq;
          for (var gq, Yq, lq = xq[1]; qq.isEven() && Eq.isEven();) gq = Uq(Jq(qq), Jq(Eq)), qq = qq.divide(gq), Eq = Eq.divide(gq), lq = lq.multiply(gq);
          for (; qq.isEven();) qq = qq.divide(Jq(qq));
          do {
            for (; Eq.isEven();) Eq = Eq.divide(Jq(Eq));
            qq.greater(Eq) && (Yq = Eq, Eq = qq, qq = Yq), Eq = Eq.subtract(qq)
          } while (!Eq.isZero());
          return lq.isUnit() ? qq : qq.multiply(lq)
        }
        Aq.prototype.bitLength = function() {
          var qq = this;
          return qq.compareTo(Eq(0)) < 0 && (qq = qq.nY().subtract(Eq(1))), 0 === qq.compareTo(Eq(0)) ? Eq(0) : Eq(kq(qq, Eq(2)).e).add(Eq(1))
        }, uq.prototype.bitLength = cq.prototype.bitLength = Aq.prototype.bitLength;
        var sq = function(qq, Eq, gq, Yq) {
          gq = gq || Oq, qq = String(qq), Yq || (qq = qq.toLowerCase(), gq = gq.toLowerCase());
          var lq, mq = qq.length,
            xq = Math.abs(Eq),
            Aq = {};
          for (lq = 0; lq < gq.length; lq++) Aq[gq[lq]] = lq;
          for (lq = 0; lq < mq; lq++) {
            if ("-" !== (Bq = qq[lq]) && (Bq in Aq && Aq[Bq] >= xq)) {
              if ("1" === Bq && 1 === xq) continue;
              throw new Error(Bq + " is not a valid digit in base " + Eq + ".")
            }
          }
          Eq = Iq(Eq);
          var cq = [],
            uq = "-" === qq[0];
          for (lq = uq ? 1 : 0; lq < qq.length; lq++) {
            var Bq;
            if ((Bq = qq[lq]) in Aq) cq.push(Iq(Aq[Bq]));
            else {
              if ("<" !== Bq) throw new Error(Bq + " is not a valid character");
              var Wq = lq;
              do {
                lq++
              } while (">" !== qq[lq] && lq < qq.length);
              cq.push(Iq(qq.slice(Wq + 1, lq)))
            }
          }
          return Xq(cq, Eq, uq)
        };

        function Xq(qq, Eq, gq) {
          var Yq, lq = xq[0],
            Oq = xq[1];
          for (Yq = qq.length - 1; Yq >= 0; Yq--) lq = lq.add(qq[Yq].times(Oq)), Oq = Oq.times(Eq);
          return gq ? lq.nY() : lq
        }

        function wq(qq, gq) {
          if ((gq = Eq(gq)).isZero()) {
            if (qq.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (gq.equals(-1)) {
            if (qq.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (qq.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-qq.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var Yq = Array.apply(null, Array(qq.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return Yq.unshift([1]), {
              value: [].concat.apply([], Yq),
              isNegative: !1
            }
          }
          var lq = !1;
          if (qq.isNegative() && gq.isPositive() && (lq = !0, qq = qq.abs()), gq.isUnit()) return qq.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(qq.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: lq
          };
          for (var Oq, mq = [], xq = qq; xq.isNegative() || xq.compareAbs(gq) >= 0;) {
            Oq = xq.divmod(gq), xq = Oq.quotient;
            var Aq = Oq.remainder;
            Aq.isNegative() && (Aq = gq.minus(Aq).abs(), xq = xq.next()), mq.push(Aq.toJSNumber())
          }
          return mq.push(xq.toJSNumber()), {
            value: mq.reverse(),
            isNegative: lq
          }
        }

        function Kq(qq, Eq, gq) {
          var Yq = wq(qq, Eq);
          return (Yq.isNegative ? "-" : "") + Yq.value.map((function(qq) {
            return function(qq, Eq) {
              return qq < (Eq = Eq || Oq).length ? Eq[qq] : "<" + qq + ">"
            }(qq, gq)
          })).join("")
        }

        function Cq(qq) {
          if (Bq(+qq)) {
            var Eq = +qq;
            if (Eq === dq(Eq)) return mq ? new uq(BigInt(Eq)) : new cq(Eq);
            throw new Error("Invalid integer: " + qq)
          }
          var gq = "-" === qq[0];
          gq && (qq = qq.slice(1));
          var Yq = qq.split(/e/i);
          if (Yq.length > 2) throw new Error("Invalid integer: " + Yq.join("e"));
          if (2 === Yq.length) {
            var lq = Yq[1];
            if ("+" === lq[0] && (lq = lq.slice(1)), (lq = +lq) !== dq(lq) || !Bq(lq)) throw new Error("Invalid integer: " + lq + " is not a valid exponent.");
            var Oq = Yq[0],
              xq = Oq.indexOf(".");
            if (xq >= 0 && (lq -= Oq.length - xq - 1, Oq = Oq.slice(0, xq) + Oq.slice(xq + 1)), lq < 0) throw new Error("Cannot include negative exponent part for integers");
            qq = Oq += new Array(lq + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(qq)) throw new Error("Invalid integer: " + qq);
          if (mq) return new uq(BigInt(gq ? "-" + qq : qq));
          for (var Wq = [], Nq = qq.length, Vq = Nq - 7; Nq > 0;) Wq.push(+qq.slice(Vq, Nq)), (Vq -= 7) < 0 && (Vq = 0), Nq -= 7;
          return aq(Wq), new Aq(Wq, gq)
        }

        function Iq(qq) {
          return "number" === typeof qq ? function(qq) {
            if (mq) return new uq(BigInt(qq));
            if (Bq(qq)) {
              if (qq !== dq(qq)) throw new Error(qq + " is not an integer.");
              return new cq(qq)
            }
            return Cq(qq.toString())
          }(qq) : "string" === typeof qq ? Cq(qq) : "bigint" === typeof qq ? new uq(qq) : qq
        }
        Aq.prototype.toArray = function(qq) {
          return wq(this, qq)
        }, cq.prototype.toArray = function(qq) {
          return wq(this, qq)
        }, uq.prototype.toArray = function(qq) {
          return wq(this, qq)
        }, Aq.prototype.toString = function(Eq, gq) {
          if (Eq === qq && (Eq = 10), 10 !== Eq) return Kq(this, Eq, gq);
          for (var Yq, lq = this.value, Oq = lq.length, mq = String(lq[--Oq]); --Oq >= 0;) Yq = String(lq[Oq]), mq += "0000000".slice(Yq.length) + Yq;
          return (this.sign ? "-" : "") + mq
        }, cq.prototype.toString = function(Eq, gq) {
          return Eq === qq && (Eq = 10), 10 != Eq ? Kq(this, Eq, gq) : String(this.value)
        }, uq.prototype.toString = cq.prototype.toString, uq.prototype.toJSON = Aq.prototype.toJSON = cq.prototype.toJSON = function() {
          return this.toString()
        }, Aq.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, Aq.prototype.toJSNumber = Aq.prototype.valueOf, cq.prototype.valueOf = function() {
          return this.value
        }, cq.prototype.toJSNumber = cq.prototype.valueOf, uq.prototype.valueOf = uq.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var eq = 0; eq < 1e3; eq++) xq[eq] = Iq(eq), eq > 0 && (xq[-eq] = Iq(-eq));
        return xq.one = xq[1], xq.zero = xq[0], xq.minusOne = xq[-1], xq.max = Rq, xq.min = Uq, xq.gcd = Fq, xq.lcm = function(qq, Eq) {
          return qq = Iq(qq).abs(), Eq = Iq(Eq).abs(), qq.divide(Fq(qq, Eq)).multiply(Eq)
        }, xq.isInstance = function(qq) {
          return qq instanceof Aq || qq instanceof cq || qq instanceof uq
        }, xq.randBetween = function(qq, Eq, Yq) {
          qq = Iq(qq), Eq = Iq(Eq);
          var lq = Yq || Math.random,
            Oq = Uq(qq, Eq),
            mq = Rq(qq, Eq).subtract(Oq).add(1);
          if (mq.isSmall) return Oq.add(Math.floor(lq() * mq));
          for (var Aq = wq(mq, gq).value, cq = [], uq = !0, Bq = 0; Bq < Aq.length; Bq++) {
            var Wq = uq ? Aq[Bq] : gq,
              Nq = dq(lq() * Wq);
            cq.push(Nq), Nq < Wq && (uq = !1)
          }
          return Oq.add(xq.ogq(cq, gq, !1))
        }, xq.ogq = function(qq, Eq, gq) {
          return Xq(qq.map(Iq), Iq(Eq || 10), gq)
        }, xq
      }();
      qq.hasOwnProperty("exports") && (qq.exports = Eq)
    }(Hg);
    var og = Oq(Hg.exports);

    function Pg(qq, Eq, gq) {
      let Yq = 0;
      for (let lq = 0; lq < gq; lq++) {
        const gq = qq[Eq + lq];
        if (void 0 === gq) break;
        Yq += gq * 16 ** lq
      }
      return Yq
    }

    function Qg(qq) {
      const Eq = [];
      for (let gq = 0; gq < qq.length; gq++) {
        let Yq = Number(qq[gq]);
        for (let qq = 0; Yq || qq < Eq.length; qq++) Yq += 10 * (Eq[qq] || 0), Eq[qq] = Yq % 16, Yq = (Yq - Eq[qq]) / 16
      }
      return Eq
    }
    class yg {
      static fromString(qq) {
        return new yg(function(qq) {
          const Eq = Qg(qq),
            gq = Array(4);
          for (let Yq = 0; Yq < 4; Yq++) gq[3 - Yq] = Pg(Eq, 4 * Yq, 4);
          return gq
        }(qq), qq)
      }
      static fromBit(qq) {
        const Eq = Array(4),
          gq = Math.floor(qq / 16);
        for (let Yq = 0; Yq < 4; Yq++) Eq[3 - Yq] = Yq === gq ? 1 << qq - 16 * gq : 0;
        return new yg(Eq)
      }
      constructor(qq, Eq) {
        this.parts = qq, this.str = Eq
      }
      and(qq) {
        let {
          parts: Eq
        } = qq;
        return new yg(this.parts.map(((qq, gq) => qq & Eq[gq])))
      }
      or(qq) {
        let {
          parts: Eq
        } = qq;
        return new yg(this.parts.map(((qq, gq) => qq | Eq[gq])))
      }
      xor(qq) {
        let {
          parts: Eq
        } = qq;
        return new yg(this.parts.map(((qq, gq) => qq ^ Eq[gq])))
      }
      not() {
        return new yg(this.parts.map((qq => ~qq)))
      }
      equals(qq) {
        let {
          parts: Eq
        } = qq;
        return this.parts.every(((qq, gq) => qq === Eq[gq]))
      }
      toString() {
        if (null != this.str) return this.str;
        const qq = new Array(16);
        return this.parts.forEach(((Eq, gq) => {
          const Yq = Qg(Eq.toString());
          for (let lq = 0; lq < 4; lq++) qq[lq + 4 * gq] = Yq[3 - lq] || 0
        })), this.str = og.ogq(qq, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const tg = function() {
      try {
        return BigInt, !0
      } catch (qq) {
        return !1
      }
    }();
    tg && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const rg = {},
      vg = tg ? function(qq) {
        return BigInt(qq)
      } : function(qq) {
        return qq instanceof yg ? qq : ("number" === typeof qq && (qq = qq.toString()), null != rg[qq] || (rg[qq] = yg.fromString(qq)), rg[qq])
      },
      hg = vg(0),
      ng = tg ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hg) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hg)
      } : function() {
        let qq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hg;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hg).and(qq)
      },
      bg = tg ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hg) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hg)
      } : function() {
        let qq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hg;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hg).or(qq)
      },
      ig = tg ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hg) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hg)
      } : function() {
        let qq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : hg;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hg).xor(qq)
      },
      Zg = tg ? function(qq, Eq) {
        return qq === Eq
      } : function(qq, Eq) {
        return null == qq || null == Eq ? qq == Eq : qq.equals(Eq)
      };
    var fg, Mg, Tg, zg, Sg = {
      combine: function() {
        let qq = arguments.length <= 0 ? void 0 : arguments[0];
        for (let Eq = 1; Eq < arguments.length; Eq++) qq = bg(qq, Eq < 0 || arguments.length <= Eq ? void 0 : arguments[Eq]);
        return qq
      },
      add: function(qq, Eq) {
        return Eq === hg ? qq : bg(qq, Eq)
      },
      remove: function(qq, Eq) {
        return Eq === hg ? qq : ig(qq, ng(qq, Eq))
      },
      filter: ng,
      invert: tg ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hg)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : hg).not()
      },
      has: function(qq, Eq) {
        return Zg(ng(qq, Eq), Eq)
      },
      hasAny: function(qq, Eq) {
        return !Zg(ng(qq, Eq), hg)
      },
      equals: Zg,
      deserialize: vg,
      getFlag: tg ? function(qq) {
        return BigInt(1) << BigInt(qq)
      } : function(qq) {
        return yg.fromBit(qq)
      }
    };
    ! function(qq) {
      qq[qq.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", qq[qq.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", qq[qq.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", qq[qq.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", qq[qq.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", qq[qq.RATELIMITED = 4002] = "RATELIMITED", qq[qq.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", qq[qq.INVALID_VERSION = 4004] = "INVALID_VERSION", qq[qq.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(fg || (fg = {})),
    function(qq) {
      qq[qq.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", qq[qq.INVALID_COMMAND = 4002] = "INVALID_COMMAND", qq[qq.INVALID_EVENT = 4004] = "INVALID_EVENT", qq[qq.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(Mg || (Mg = {})),
    function(qq) {
      qq.LANDSCAPE = "landscape", qq.PORTRAIT = "portrait"
    }(Tg || (Tg = {})),
    function(qq) {
      qq.MOBILE = "mobile", qq.DESKTOP = "desktop"
    }(zg || (zg = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: Sg.getFlag(0),
      ADMINISTRATOR: Sg.getFlag(3)
    });

    function pg(qq) {
      return Ng((Eq => {
        var gq;
        const [Yq] = null !== (gq = Object.entries(qq).find((qq => {
          let [, gq] = qq;
          return gq === Eq
        }))) && void 0 !== gq ? gq : [];
        return null != Eq && void 0 === Yq ? qq.UNHANDLED : Eq
      }), TE().or(zE()))
    }
    const Gg = jg.object({
        image_url: jg.string()
      }),
      Lg = jg.object({
        mediaUrl: jg.string().max(1024)
      }),
      Jg = jg.object({
        access_token: jg.union([jg.string(), jg.null()]).optional()
      }),
      kg = jg.object({
        access_token: jg.string(),
        user: jg.object({
          username: jg.string(),
          discriminator: jg.string(),
          id: jg.string(),
          avatar: jg.union([jg.string(), jg.null()]).optional(),
          public_flags: jg.number(),
          global_name: jg.union([jg.string(), jg.null()]).optional()
        }),
        scopes: jg.array(function(qq) {
          const Eq = ZE().transform((Eq => {
            const gq = qq.safeParse(Eq);
            return gq.success ? gq.data : qq._def.defaultValue()
          }));
          return Eq.overlayType = qq, Eq
        }(jg.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(jg.literal(-1)).default(-1))),
        expires: jg.string(),
        application: jg.object({
          description: jg.string(),
          icon: jg.union([jg.string(), jg.null()]).optional(),
          id: jg.string(),
          rpc_origins: jg.array(jg.string()).optional(),
          name: jg.string()
        })
      }),
      Rg = jg.object({
        participants: jg.array(jg.object({
          id: jg.string(),
          username: jg.string(),
          global_name: jg.union([jg.string(), jg.null()]).optional(),
          discriminator: jg.string(),
          avatar: jg.union([jg.string(), jg.null()]).optional(),
          flags: jg.number(),
          bot: jg.boolean(),
          avatar_decoration_data: jg.union([jg.object({
            asset: jg.string(),
            skuId: jg.string().optional()
          }), jg.null()]).optional(),
          premium_type: jg.union([jg.number(), jg.null()]).optional(),
          nickname: jg.string().optional()
        }))
      });
    var Ug;
    ! function(qq) {
      qq.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", qq.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", qq.AUTHENTICATE = "AUTHENTICATE", qq.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Ug || (Ug = {}));
    const Fg = jg.object({}).optional().nullable(),
      sg = jg.void(),
      Xg = {
        [Ug.INITIATE_IMAGE_UPLOAD]: {
          request: sg,
          response: Gg
        },
        [Ug.OPEN_SHARE_MOMENT_DIALOG]: {
          request: Lg,
          response: Fg
        },
        [Ug.AUTHENTICATE]: {
          request: Jg,
          response: kg
        },
        [Ug.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: sg,
          response: Rg
        }
      },
      wg = "DISPATCH";
    var Kg;
    ! function(qq) {
      qq.AUTHORIZE = "AUTHORIZE", qq.AUTHENTICATE = "AUTHENTICATE", qq.GET_GUILDS = "GET_GUILDS", qq.GET_GUILD = "GET_GUILD", qq.GET_CHANNEL = "GET_CHANNEL", qq.GET_CHANNELS = "GET_CHANNELS", qq.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", qq.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", qq.SUBSCRIBE = "SUBSCRIBE", qq.UNSUBSCRIBE = "UNSUBSCRIBE", qq.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", qq.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", qq.SET_ACTIVITY = "SET_ACTIVITY", qq.GET_SKUS = "GET_SKUS", qq.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", qq.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", qq.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", qq.START_PURCHASE = "START_PURCHASE", qq.SET_CONFIG = "SET_CONFIG", qq.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", qq.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", qq.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", qq.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", qq.CAPTURE_LOG = "CAPTURE_LOG", qq.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", qq.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", qq.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", qq.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", qq.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", qq.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", qq.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Kg || (Kg = {}));
    const Cg = KE({
        cmd: TE(),
        data: FE(),
        evt: RE(),
        nonce: TE()
      }).passthrough(),
      Ig = (pg(Object.assign(Object.assign({}, kg.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), KE({
        id: TE(),
        username: TE(),
        discriminator: TE(),
        global_name: TE().optional().nullable(),
        avatar: TE().optional().nullable(),
        avatar_decoration_data: KE({
          asset: TE(),
          sku_id: TE().optional()
        }).nullable(),
        bot: GE(),
        flags: zE().optional().nullable(),
        premium_type: zE().optional().nullable()
      })),
      eg = KE({
        user: Ig,
        nick: TE().optional().nullable(),
        roles: wE(TE()),
        joined_at: TE(),
        deaf: GE(),
        mute: GE()
      }),
      Dg = KE({
        id: TE(),
        name: TE().optional().nullable(),
        roles: wE(TE()).optional().nullable(),
        user: Ig.optional().nullable(),
        require_colons: GE().optional().nullable(),
        managed: GE().optional().nullable(),
        animated: GE().optional().nullable(),
        available: GE().optional().nullable()
      }),
      qY = KE({
        mute: GE(),
        deaf: GE(),
        self_mute: GE(),
        self_deaf: GE(),
        suppress: GE()
      }),
      EY = KE({
        mute: GE(),
        nick: TE(),
        user: Ig,
        voice_state: qY,
        volume: zE()
      }),
      gY = pg({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      YY = KE({
        name: TE(),
        type: zE(),
        url: TE().optional().nullable(),
        created_at: zE().optional().nullable(),
        timestamps: KE({
          start: zE(),
          end: zE()
        }).partial().optional().nullable(),
        application_id: TE().optional().nullable(),
        details: TE().optional().nullable(),
        state: TE().optional().nullable(),
        emoji: Dg.optional().nullable(),
        party: KE({
          id: TE().optional().nullable(),
          size: wE(zE()).optional().nullable()
        }).optional().nullable(),
        assets: KE({
          large_image: TE().nullable(),
          large_text: TE().nullable(),
          small_image: TE().nullable(),
          small_text: TE().nullable()
        }).partial().optional().nullable(),
        secrets: KE({
          join: TE(),
          match: TE()
        }).partial().optional().nullable(),
        instance: GE().optional().nullable(),
        flags: zE().optional().nullable()
      }),
      lY = KE({
        id: TE(),
        type: pg({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: TE(),
        deny: TE()
      }),
      OY = {
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
      mY = KE({
        id: TE(),
        type: pg(OY),
        guild_id: TE().optional().nullable(),
        position: zE().optional().nullable(),
        permission_overwrites: wE(lY).optional().nullable(),
        name: TE().optional().nullable(),
        topic: TE().optional().nullable(),
        nsfw: GE().optional().nullable(),
        last_message_id: TE().optional().nullable(),
        bitrate: zE().optional().nullable(),
        user_limit: zE().optional().nullable(),
        rate_limit_per_user: zE().optional().nullable(),
        recipients: wE(Ig).optional().nullable(),
        icon: TE().optional().nullable(),
        owner_id: TE().optional().nullable(),
        application_id: TE().optional().nullable(),
        parent_id: TE().optional().nullable(),
        last_pin_timestamp: TE().optional().nullable()
      }),
      xY = KE({
        user: Ig,
        guild_id: TE(),
        status: gY,
        activities: wE(YY),
        client_status: KE({
          desktop: gY,
          mobile: gY,
          web: gY
        }).partial()
      }),
      AY = KE({
        id: TE(),
        name: TE(),
        color: zE(),
        hoist: GE(),
        position: zE(),
        permissions: TE(),
        managed: GE(),
        mentionable: GE()
      }),
      cY = (KE({
        id: TE(),
        name: TE(),
        owner_id: TE(),
        icon: TE().nullable(),
        icon_hash: TE().optional().nullable(),
        splash: TE().nullable(),
        discovery_splash: TE().nullable(),
        owner: GE().optional().nullable(),
        permissions: TE().optional().nullable(),
        region: TE(),
        afk_channel_id: TE().nullable(),
        afk_timeout: zE(),
        widget_enabled: GE().optional().nullable(),
        widget_channel_id: TE().optional().nullable(),
        verification_level: zE(),
        default_message_notifications: zE(),
        explicit_content_filter: zE(),
        roles: wE(AY),
        emojis: wE(Dg),
        features: wE(TE()),
        mfa_level: zE(),
        application_id: TE().nullable(),
        system_channel_id: TE().nullable(),
        system_channel_flags: zE(),
        rules_channel_id: TE().nullable(),
        joined_at: TE().optional().nullable(),
        large: GE().optional().nullable(),
        unavailable: GE().optional().nullable(),
        member_count: zE().optional().nullable(),
        voice_states: wE(qY).optional().nullable(),
        members: wE(eg).optional().nullable(),
        channels: wE(mY).optional().nullable(),
        presences: wE(xY).optional().nullable(),
        max_presences: zE().optional().nullable(),
        max_members: zE().optional().nullable(),
        vanity_url_code: TE().nullable(),
        description: TE().nullable(),
        banner: TE().nullable(),
        premium_tier: zE(),
        premium_subscription_count: zE().optional().nullable(),
        preferred_locale: TE(),
        public_updates_channel_id: TE().nullable(),
        max_video_channel_users: zE().optional().nullable(),
        approximate_member_count: zE().optional().nullable(),
        approximate_presence_count: zE().optional().nullable()
      }), KE({
        id: TE(),
        guild_id: TE(),
        type: zE(),
        name: TE()
      })),
      uY = KE({
        id: TE(),
        filename: TE(),
        size: zE(),
        url: TE(),
        proxy_url: TE(),
        height: zE().optional().nullable(),
        width: zE().optional().nullable()
      }),
      BY = KE({
        text: TE(),
        icon_url: TE().optional().nullable(),
        proxy_icon_url: TE().optional().nullable()
      }),
      WY = KE({
        url: TE().optional().nullable(),
        proxy_url: TE().optional().nullable(),
        height: zE().optional().nullable(),
        width: zE().optional().nullable()
      }),
      NY = WY.omit({
        proxy_url: !0
      }),
      aY = KE({
        name: TE().optional().nullable(),
        url: TE().optional().nullable()
      }),
      VY = KE({
        name: TE().optional().nullable(),
        url: TE().optional().nullable(),
        icon_url: TE().optional().nullable(),
        proxy_icon_url: TE().optional().nullable()
      }),
      dY = KE({
        name: TE(),
        value: TE(),
        inline: GE()
      }),
      jY = KE({
        title: TE().optional().nullable(),
        type: TE().optional().nullable(),
        description: TE().optional().nullable(),
        url: TE().optional().nullable(),
        timestamp: TE().optional().nullable(),
        color: zE().optional().nullable(),
        footer: BY.optional().nullable(),
        image: WY.optional().nullable(),
        thumbnail: WY.optional().nullable(),
        video: NY.optional().nullable(),
        provider: aY.optional().nullable(),
        author: VY.optional().nullable(),
        fields: wE(dY).optional().nullable()
      }),
      HY = KE({
        count: zE(),
        me: GE(),
        emoji: Dg
      }),
      oY = KE({
        type: zE(),
        party_id: TE().optional().nullable()
      }),
      PY = KE({
        id: TE(),
        cover_image: TE().optional().nullable(),
        description: TE(),
        icon: TE().optional().nullable(),
        name: TE()
      }),
      QY = KE({
        message_id: TE().optional().nullable(),
        channel_id: TE().optional().nullable(),
        guild_id: TE().optional().nullable()
      }),
      yY = KE({
        id: TE(),
        channel_id: TE(),
        guild_id: TE().optional().nullable(),
        author: Ig.optional().nullable(),
        member: eg.optional().nullable(),
        content: TE(),
        timestamp: TE(),
        edited_timestamp: TE().optional().nullable(),
        tts: GE(),
        mention_everyone: GE(),
        mentions: wE(Ig),
        mention_roles: wE(TE()),
        mention_channels: wE(cY),
        attachments: wE(uY),
        embeds: wE(jY),
        reactions: wE(HY).optional().nullable(),
        nonce: IE([TE(), zE()]).optional().nullable(),
        pinned: GE(),
        webhook_id: TE().optional().nullable(),
        type: zE(),
        activity: oY.optional().nullable(),
        application: PY.optional().nullable(),
        message_reference: QY.optional().nullable(),
        flags: zE().optional().nullable(),
        stickers: wE(FE()).optional().nullable(),
        referenced_message: FE().optional().nullable()
      }),
      tY = KE({
        id: TE(),
        name: TE()
      }),
      rY = KE({
        type: pg({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: zE(),
        name: TE()
      }),
      vY = KE({
        type: pg({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: GE(),
        threshold: zE(),
        shortcut: wE(rY),
        delay: zE()
      }),
      hY = KE({
        device_id: TE(),
        volume: zE(),
        available_devices: wE(tY)
      }),
      nY = (KE({
        type: pg({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: TE(),
        vendor: KE({
          name: TE(),
          url: TE()
        }),
        model: KE({
          name: TE(),
          url: TE()
        }),
        related: wE(TE()),
        echo_cancellation: GE().optional().nullable(),
        noise_suppression: GE().optional().nullable(),
        automatic_gain_control: GE().optional().nullable(),
        hardware_mute: GE().optional().nullable()
      }), KE({
        id: TE(),
        name: TE(),
        type: pg({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: KE({
          amount: zE(),
          currency: TE()
        }),
        application_id: TE(),
        flags: zE(),
        release_date: TE().nullable()
      })),
      bY = KE({
        id: TE(),
        sku_id: TE(),
        application_id: TE(),
        user_id: TE(),
        gift_code_flags: zE(),
        type: pg({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: TE().optional().nullable(),
        branches: wE(TE()).optional().nullable(),
        starts_at: TE().optional().nullable(),
        ends_at: TE().optional().nullable(),
        parent_id: TE().optional().nullable(),
        consumed: GE().optional().nullable(),
        deleted: GE().optional().nullable(),
        gift_code_batch_id: TE().optional().nullable()
      }),
      iY = (pg({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), pg({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      ZY = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      fY = (pg(ZY), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      MY = (pg(fY), "ERROR");
    var TY;
    ! function(qq) {
      qq.READY = "READY", qq.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", qq.SPEAKING_START = "SPEAKING_START", qq.SPEAKING_STOP = "SPEAKING_STOP", qq.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", qq.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", qq.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", qq.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", qq.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", qq.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(TY || (TY = {}));
    const zY = Cg.extend({
        evt: Ag(TY),
        nonce: TE().nullable(),
        cmd: mg(wg),
        data: KE({}).passthrough()
      }),
      SY = Cg.extend({
        evt: mg(MY),
        data: KE({
          code: zE(),
          message: TE().optional()
        }).passthrough(),
        cmd: Ag(Kg),
        nonce: TE().nullable()
      }),
      pY = zY.extend({
        evt: TE()
      }),
      GY = IE([zY, pY, SY]);
    const LY = {
      [TY.READY]: {
        payload: zY.extend({
          evt: mg(TY.READY),
          data: KE({
            v: zE(),
            config: KE({
              cdn_host: TE().optional(),
              api_endpoint: TE(),
              environment: TE()
            }),
            user: KE({
              id: TE(),
              username: TE(),
              discriminator: TE(),
              avatar: TE().optional()
            }).optional()
          })
        })
      },
      [TY.VOICE_STATE_UPDATE]: {
        payload: zY.extend({
          evt: mg(TY.VOICE_STATE_UPDATE),
          data: EY
        }),
        subscribeArgs: KE({
          channel_id: TE()
        })
      },
      [TY.SPEAKING_START]: {
        payload: zY.extend({
          evt: mg(TY.SPEAKING_START),
          data: KE({
            lobby_id: TE().optional(),
            channel_id: TE().optional(),
            user_id: TE()
          })
        }),
        subscribeArgs: KE({
          lobby_id: TE().nullable().optional(),
          channel_id: TE().nullable().optional()
        })
      },
      [TY.SPEAKING_STOP]: {
        payload: zY.extend({
          evt: mg(TY.SPEAKING_STOP),
          data: KE({
            lobby_id: TE().optional(),
            channel_id: TE().optional(),
            user_id: TE()
          })
        }),
        subscribeArgs: KE({
          lobby_id: TE().nullable().optional(),
          channel_id: TE().nullable().optional()
        })
      },
      [TY.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: zY.extend({
          evt: mg(TY.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: KE({
            layout_mode: pg(fY)
          })
        })
      },
      [TY.ORIENTATION_UPDATE]: {
        payload: zY.extend({
          evt: mg(TY.ORIENTATION_UPDATE),
          data: KE({
            screen_orientation: pg(ZY),
            orientation: Ag(Tg)
          })
        })
      },
      [TY.CURRENT_USER_UPDATE]: {
        payload: zY.extend({
          evt: mg(TY.CURRENT_USER_UPDATE),
          data: Ig
        })
      },
      [TY.ENTITLEMENT_CREATE]: {
        payload: zY.extend({
          evt: mg(TY.ENTITLEMENT_CREATE),
          data: KE({
            entitlement: bY
          })
        })
      },
      [TY.THERMAL_STATE_UPDATE]: {
        payload: zY.extend({
          evt: mg(TY.THERMAL_STATE_UPDATE),
          data: KE({
            thermal_state: iY
          })
        })
      },
      [TY.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: zY.extend({
          evt: mg(TY.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: KE({
            participants: Rg.shape.participants
          })
        })
      }
    };
    const JY = KE({}).nullable(),
      kY = KE({
        code: TE()
      }),
      RY = KE({
        guilds: wE(KE({
          id: TE(),
          name: TE()
        }))
      }),
      UY = KE({
        id: TE(),
        name: TE(),
        icon_url: TE().optional(),
        members: wE(eg)
      }),
      FY = KE({
        id: TE(),
        type: pg(OY),
        guild_id: TE().optional().nullable(),
        name: TE().optional().nullable(),
        topic: TE().optional().nullable(),
        bitrate: zE().optional().nullable(),
        user_limit: zE().optional().nullable(),
        position: zE().optional().nullable(),
        voice_states: wE(EY),
        messages: wE(yY)
      }),
      sY = KE({
        channels: wE(mY)
      }),
      XY = (FY.nullable(), FY.nullable()),
      wY = FY.nullable(),
      KY = (KE({
        input: hY,
        output: hY,
        mode: vY,
        automatic_gain_control: GE(),
        echo_cancellation: GE(),
        noise_suppression: GE(),
        qos: GE(),
        silence_warning: GE(),
        deaf: GE(),
        mute: GE()
      }), KE({
        evt: TE()
      })),
      CY = KE({
        shortcut: rY
      }),
      IY = YY,
      eY = KE({
        skus: wE(nY)
      }),
      DY = KE({
        entitlements: wE(bY)
      }),
      ql = wE(bY).nullable(),
      El = KE({
        use_interactive_pip: GE()
      }),
      gl = KE({
        locale: TE()
      }),
      Yl = KE({
        enabled: GE()
      }),
      ll = KE({
        permissions: pE().or(TE())
      }),
      Ol = KE({
        iosKeyboardResizesView: Bg(GE())
      }),
      ml = Cg.extend({
        cmd: Ag(Kg),
        evt: RE()
      });

    function xl(qq) {
      let {
        cmd: Eq,
        data: gq
      } = qq;
      switch (Eq) {
        case Kg.AUTHORIZE:
          return kY.parse(gq);
        case Kg.CAPTURE_SHORTCUT:
          return CY.parse(gq);
        case Kg.ENCOURAGE_HW_ACCELERATION:
          return Yl.parse(gq);
        case Kg.GET_CHANNEL:
          return FY.parse(gq);
        case Kg.GET_CHANNELS:
          return sY.parse(gq);
        case Kg.GET_CHANNEL_PERMISSIONS:
          return ll.parse(gq);
        case Kg.GET_GUILD:
          return UY.parse(gq);
        case Kg.GET_GUILDS:
          return RY.parse(gq);
        case Kg.GET_PLATFORM_BEHAVIORS:
          return Ol.parse(gq);
        case Kg.GET_CHANNEL:
          return FY.parse(gq);
        case Kg.SELECT_TEXT_CHANNEL:
          return wY.parse(gq);
        case Kg.SELECT_VOICE_CHANNEL:
          return XY.parse(gq);
        case Kg.SET_ACTIVITY:
          return IY.parse(gq);
        case Kg.GET_SKUS_EMBEDDED:
          return eY.parse(gq);
        case Kg.GET_ENTITLEMENTS_EMBEDDED:
          return DY.parse(gq);
        case Kg.SET_CONFIG:
          return El.parse(gq);
        case Kg.START_PURCHASE:
          return ql.parse(gq);
        case Kg.SUBSCRIBE:
        case Kg.UNSUBSCRIBE:
          return KY.parse(gq);
        case Kg.USER_SETTINGS_GET_LOCALE:
          return gl.parse(gq);
        case Kg.OPEN_EXTERNAL_LINK:
        case Kg.SET_ORIENTATION_LOCK_STATE:
        case Kg.SET_CERTIFIED_DEVICES:
        case Kg.SEND_ANALYTICS_EVENT:
        case Kg.OPEN_INVITE_DIALOG:
        case Kg.CAPTURE_LOG:
        case Kg.GET_SKUS:
        case Kg.GET_ENTITLEMENTS:
          return JY.parse(gq);
        case Kg.AUTHENTICATE:
        case Kg.INITIATE_IMAGE_UPLOAD:
        case Kg.OPEN_SHARE_MOMENT_DIALOG:
        case Kg.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: qq
          } = Xg[Eq];
          return qq.parse(gq);
        default:
          ! function(qq, Eq) {
            throw Eq
          }(0, new Error(`Unrecognized command ${Eq}`))
      }
    }
    KE({
      frame_id: TE(),
      platform: Ag(zg).optional().nullable()
    }), KE({
      v: mg(1),
      encoding: mg("json").optional(),
      client_id: TE(),
      frame_id: TE()
    });
    const Al = KE({
        code: zE(),
        message: TE().optional()
      }),
      cl = KE({
        evt: TE().nullable(),
        nonce: TE().nullable(),
        data: FE().nullable(),
        cmd: TE()
      }).passthrough();

    function ul(qq) {
      const Eq = cl.parse(qq);
      return null != Eq.evt ? Eq.evt === MY ? SY.parse(Eq) : function(qq) {
        const Eq = qq.evt;
        if (!(Eq in TY)) throw new Error(`Unrecognized event type ${qq.evt}`);
        return LY[Eq].payload.parse(qq)
      }(GY.parse(Eq)) : function(qq) {
        return Object.assign(Object.assign({}, qq), {
          data: xl(qq)
        })
      }(ml.passthrough().parse(Eq))
    }

    function Bl(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const lq = Cg.extend({
        cmd: mg(Eq),
        data: gq
      });
      return async gq => {
        const Oq = await qq({
          cmd: Eq,
          args: gq,
          transfer: Yq(gq)
        });
        return lq.parse(Oq).data
      }
    }

    function Wl(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const gq = Xg[qq].response,
        Yq = Cg.extend({
          cmd: mg(qq),
          data: gq
        });
      return gq => async lq => {
        const Oq = await gq({
          cmd: qq,
          args: lq,
          transfer: Eq(lq)
        });
        return Yq.parse(Oq).data
      }
    }
    const Nl = Wl(Ug.AUTHENTICATE),
      al = qq => Bl(qq, Kg.AUTHORIZE, kY),
      Vl = qq => Bl(qq, Kg.CAPTURE_LOG, JY),
      dl = qq => Bl(qq, Kg.ENCOURAGE_HW_ACCELERATION, Yl),
      jl = qq => Bl(qq, Kg.GET_ENTITLEMENTS_EMBEDDED, DY),
      Hl = qq => Bl(qq, Kg.GET_SKUS_EMBEDDED, eY),
      ol = qq => Bl(qq, Kg.GET_CHANNEL_PERMISSIONS, ll),
      Pl = qq => Bl(qq, Kg.GET_PLATFORM_BEHAVIORS, Ol),
      Ql = qq => Bl(qq, Kg.OPEN_EXTERNAL_LINK, JY),
      yl = qq => Bl(qq, Kg.OPEN_INVITE_DIALOG, JY),
      tl = Wl(Ug.OPEN_SHARE_MOMENT_DIALOG);
    YY.zW({
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
      type: YY.shape.type.optional(),
      instance: YY.shape.instance.optional()
    }).nullable();
    const rl = qq => Bl(qq, Kg.SET_ACTIVITY, IY),
      vl = qq => Bl(qq, Kg.SET_CONFIG, El);
    const hl = qq => ({
        lock_state: qq.lock_state,
        picture_in_picture_lock_state: qq.picture_in_picture_lock_state
      }),
      nl = qq => function(qq) {
        let {
          sendCommand: Eq,
          cmd: gq,
          response: Yq,
          fallbackTransform: lq,
          transferTransform: Oq = () => {}
        } = qq;
        const mq = Cg.extend({
          cmd: mg(gq),
          data: Yq
        });
        return async qq => {
          try {
            const Yq = await Eq({
              cmd: gq,
              args: qq,
              transfer: Oq(qq)
            });
            return mq.parse(Yq).data
          } catch (Yq) {
            if (Yq.code === Mg.INVALID_PAYLOAD) {
              const Yq = lq(qq),
                xq = await Eq({
                  cmd: gq,
                  args: Yq,
                  transfer: Oq(Yq)
                });
              return mq.parse(xq).data
            }
            throw Yq
          }
        }
      }({
        sendCommand: qq,
        cmd: Kg.SET_ORIENTATION_LOCK_STATE,
        response: JY,
        fallbackTransform: hl
      }),
      bl = qq => Bl(qq, Kg.START_PURCHASE, ql),
      il = qq => Bl(qq, Kg.USER_SETTINGS_GET_LOCALE, gl),
      Zl = Wl(Ug.INITIATE_IMAGE_UPLOAD),
      fl = qq => Bl(qq, Kg.GET_CHANNEL, FY),
      Ml = Wl(Ug.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var Tl = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function zl(qq) {
      return "string" === typeof qq && Tl.test(qq)
    }
    for (var Sl = [], pl = 0; pl < 256; ++pl) Sl.push((pl + 256).toString(16).substr(1));

    function Gl(qq) {
      var Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        gq = (Sl[qq[Eq + 0]] + Sl[qq[Eq + 1]] + Sl[qq[Eq + 2]] + Sl[qq[Eq + 3]] + "-" + Sl[qq[Eq + 4]] + Sl[qq[Eq + 5]] + "-" + Sl[qq[Eq + 6]] + Sl[qq[Eq + 7]] + "-" + Sl[qq[Eq + 8]] + Sl[qq[Eq + 9]] + "-" + Sl[qq[Eq + 10]] + Sl[qq[Eq + 11]] + Sl[qq[Eq + 12]] + Sl[qq[Eq + 13]] + Sl[qq[Eq + 14]] + Sl[qq[Eq + 15]]).toLowerCase();
      if (!zl(gq)) throw TypeError("Stringified UUID is invalid");
      return gq
    }
    var Ll;

    function Jl(qq, Eq, gq) {
      function Yq(qq, Yq, lq, Oq) {
        if ("string" === typeof qq && (qq = function(qq) {
            qq = unescape(encodeURIComponent(qq));
            for (var Eq = [], gq = 0; gq < qq.length; ++gq) Eq.push(qq.charCodeAt(gq));
            return Eq
          }(qq)), "string" === typeof Yq && (Yq = function(qq) {
            if (!zl(qq)) throw TypeError("Invalid UUID");
            var Eq, gq = new Uint8Array(16);
            return gq[0] = (Eq = parseInt(qq.slice(0, 8), 16)) >>> 24, gq[1] = Eq >>> 16 & 255, gq[2] = Eq >>> 8 & 255, gq[3] = 255 & Eq, gq[4] = (Eq = parseInt(qq.slice(9, 13), 16)) >>> 8, gq[5] = 255 & Eq, gq[6] = (Eq = parseInt(qq.slice(14, 18), 16)) >>> 8, gq[7] = 255 & Eq, gq[8] = (Eq = parseInt(qq.slice(19, 23), 16)) >>> 8, gq[9] = 255 & Eq, gq[10] = (Eq = parseInt(qq.slice(24, 36), 16)) / 1099511627776 & 255, gq[11] = Eq / 4294967296 & 255, gq[12] = Eq >>> 24 & 255, gq[13] = Eq >>> 16 & 255, gq[14] = Eq >>> 8 & 255, gq[15] = 255 & Eq, gq
          }(Yq)), 16 !== Yq.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var mq = new Uint8Array(16 + qq.length);
        if (mq.set(Yq), mq.set(qq, Yq.length), (mq = gq(mq))[6] = 15 & mq[6] | Eq, mq[8] = 63 & mq[8] | 128, lq) {
          Oq = Oq || 0;
          for (var xq = 0; xq < 16; ++xq) lq[Oq + xq] = mq[xq];
          return lq
        }
        return Gl(mq)
      }
      try {
        Yq.name = qq
      } catch (lq) {}
      return Yq.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", Yq.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", Yq
    }

    function kl(qq) {
      return 14 + (qq + 64 >>> 9 << 4) + 1
    }

    function Rl(qq, Eq) {
      var gq = (65535 & qq) + (65535 & Eq);
      return (qq >> 16) + (Eq >> 16) + (gq >> 16) << 16 | 65535 & gq
    }

    function Ul(qq, Eq, gq, Yq, lq, Oq) {
      return Rl((mq = Rl(Rl(Eq, qq), Rl(Yq, Oq))) << (xq = lq) | mq >>> 32 - xq, gq);
      var mq, xq
    }

    function Fl(qq, Eq, gq, Yq, lq, Oq, mq) {
      return Ul(Eq & gq | ~Eq & Yq, qq, Eq, lq, Oq, mq)
    }

    function sl(qq, Eq, gq, Yq, lq, Oq, mq) {
      return Ul(Eq & Yq | gq & ~Yq, qq, Eq, lq, Oq, mq)
    }

    function Xl(qq, Eq, gq, Yq, lq, Oq, mq) {
      return Ul(Eq ^ gq ^ Yq, qq, Eq, lq, Oq, mq)
    }

    function wl(qq, Eq, gq, Yq, lq, Oq, mq) {
      return Ul(gq ^ (Eq | ~Yq), qq, Eq, lq, Oq, mq)
    }
    Jl("v3", 48, (function(qq) {
      if ("string" === typeof qq) {
        var Eq = unescape(encodeURIComponent(qq));
        qq = new Uint8Array(Eq.length);
        for (var gq = 0; gq < Eq.length; ++gq) qq[gq] = Eq.charCodeAt(gq)
      }
      return function(qq) {
        for (var Eq = [], gq = 32 * qq.length, Yq = "0123456789abcdef", lq = 0; lq < gq; lq += 8) {
          var Oq = qq[lq >> 5] >>> lq % 32 & 255,
            mq = parseInt(Yq.charAt(Oq >>> 4 & 15) + Yq.charAt(15 & Oq), 16);
          Eq.push(mq)
        }
        return Eq
      }(function(qq, Eq) {
        qq[Eq >> 5] |= 128 << Eq % 32, qq[kl(Eq) - 1] = Eq;
        for (var gq = 1732584193, Yq = -271733879, lq = -1732584194, Oq = 271733878, mq = 0; mq < qq.length; mq += 16) {
          var xq = gq,
            Aq = Yq,
            cq = lq,
            uq = Oq;
          gq = Fl(gq, Yq, lq, Oq, qq[mq], 7, -680876936), Oq = Fl(Oq, gq, Yq, lq, qq[mq + 1], 12, -389564586), lq = Fl(lq, Oq, gq, Yq, qq[mq + 2], 17, 606105819), Yq = Fl(Yq, lq, Oq, gq, qq[mq + 3], 22, -1044525330), gq = Fl(gq, Yq, lq, Oq, qq[mq + 4], 7, -176418897), Oq = Fl(Oq, gq, Yq, lq, qq[mq + 5], 12, 1200080426), lq = Fl(lq, Oq, gq, Yq, qq[mq + 6], 17, -1473231341), Yq = Fl(Yq, lq, Oq, gq, qq[mq + 7], 22, -45705983), gq = Fl(gq, Yq, lq, Oq, qq[mq + 8], 7, 1770035416), Oq = Fl(Oq, gq, Yq, lq, qq[mq + 9], 12, -1958414417), lq = Fl(lq, Oq, gq, Yq, qq[mq + 10], 17, -42063), Yq = Fl(Yq, lq, Oq, gq, qq[mq + 11], 22, -1990404162), gq = Fl(gq, Yq, lq, Oq, qq[mq + 12], 7, 1804603682), Oq = Fl(Oq, gq, Yq, lq, qq[mq + 13], 12, -40341101), lq = Fl(lq, Oq, gq, Yq, qq[mq + 14], 17, -1502002290), gq = sl(gq, Yq = Fl(Yq, lq, Oq, gq, qq[mq + 15], 22, 1236535329), lq, Oq, qq[mq + 1], 5, -165796510), Oq = sl(Oq, gq, Yq, lq, qq[mq + 6], 9, -1069501632), lq = sl(lq, Oq, gq, Yq, qq[mq + 11], 14, 643717713), Yq = sl(Yq, lq, Oq, gq, qq[mq], 20, -373897302), gq = sl(gq, Yq, lq, Oq, qq[mq + 5], 5, -701558691), Oq = sl(Oq, gq, Yq, lq, qq[mq + 10], 9, 38016083), lq = sl(lq, Oq, gq, Yq, qq[mq + 15], 14, -660478335), Yq = sl(Yq, lq, Oq, gq, qq[mq + 4], 20, -405537848), gq = sl(gq, Yq, lq, Oq, qq[mq + 9], 5, 568446438), Oq = sl(Oq, gq, Yq, lq, qq[mq + 14], 9, -1019803690), lq = sl(lq, Oq, gq, Yq, qq[mq + 3], 14, -187363961), Yq = sl(Yq, lq, Oq, gq, qq[mq + 8], 20, 1163531501), gq = sl(gq, Yq, lq, Oq, qq[mq + 13], 5, -1444681467), Oq = sl(Oq, gq, Yq, lq, qq[mq + 2], 9, -51403784), lq = sl(lq, Oq, gq, Yq, qq[mq + 7], 14, 1735328473), gq = Xl(gq, Yq = sl(Yq, lq, Oq, gq, qq[mq + 12], 20, -1926607734), lq, Oq, qq[mq + 5], 4, -378558), Oq = Xl(Oq, gq, Yq, lq, qq[mq + 8], 11, -2022574463), lq = Xl(lq, Oq, gq, Yq, qq[mq + 11], 16, 1839030562), Yq = Xl(Yq, lq, Oq, gq, qq[mq + 14], 23, -35309556), gq = Xl(gq, Yq, lq, Oq, qq[mq + 1], 4, -1530992060), Oq = Xl(Oq, gq, Yq, lq, qq[mq + 4], 11, 1272893353), lq = Xl(lq, Oq, gq, Yq, qq[mq + 7], 16, -155497632), Yq = Xl(Yq, lq, Oq, gq, qq[mq + 10], 23, -1094730640), gq = Xl(gq, Yq, lq, Oq, qq[mq + 13], 4, 681279174), Oq = Xl(Oq, gq, Yq, lq, qq[mq], 11, -358537222), lq = Xl(lq, Oq, gq, Yq, qq[mq + 3], 16, -722521979), Yq = Xl(Yq, lq, Oq, gq, qq[mq + 6], 23, 76029189), gq = Xl(gq, Yq, lq, Oq, qq[mq + 9], 4, -640364487), Oq = Xl(Oq, gq, Yq, lq, qq[mq + 12], 11, -421815835), lq = Xl(lq, Oq, gq, Yq, qq[mq + 15], 16, 530742520), gq = wl(gq, Yq = Xl(Yq, lq, Oq, gq, qq[mq + 2], 23, -995338651), lq, Oq, qq[mq], 6, -198630844), Oq = wl(Oq, gq, Yq, lq, qq[mq + 7], 10, 1126891415), lq = wl(lq, Oq, gq, Yq, qq[mq + 14], 15, -1416354905), Yq = wl(Yq, lq, Oq, gq, qq[mq + 5], 21, -57434055), gq = wl(gq, Yq, lq, Oq, qq[mq + 12], 6, 1700485571), Oq = wl(Oq, gq, Yq, lq, qq[mq + 3], 10, -1894986606), lq = wl(lq, Oq, gq, Yq, qq[mq + 10], 15, -1051523), Yq = wl(Yq, lq, Oq, gq, qq[mq + 1], 21, -2054922799), gq = wl(gq, Yq, lq, Oq, qq[mq + 8], 6, 1873313359), Oq = wl(Oq, gq, Yq, lq, qq[mq + 15], 10, -30611744), lq = wl(lq, Oq, gq, Yq, qq[mq + 6], 15, -1560198380), Yq = wl(Yq, lq, Oq, gq, qq[mq + 13], 21, 1309151649), gq = wl(gq, Yq, lq, Oq, qq[mq + 4], 6, -145523070), Oq = wl(Oq, gq, Yq, lq, qq[mq + 11], 10, -1120210379), lq = wl(lq, Oq, gq, Yq, qq[mq + 2], 15, 718787259), Yq = wl(Yq, lq, Oq, gq, qq[mq + 9], 21, -343485551), gq = Rl(gq, xq), Yq = Rl(Yq, Aq), lq = Rl(lq, cq), Oq = Rl(Oq, uq)
        }
        return [gq, Yq, lq, Oq]
      }(function(qq) {
        if (0 === qq.length) return [];
        for (var Eq = 8 * qq.length, gq = new Uint32Array(kl(Eq)), Yq = 0; Yq < Eq; Yq += 8) gq[Yq >> 5] |= (255 & qq[Yq / 8]) << Yq % 32;
        return gq
      }(qq), 8 * qq.length))
    }));
    var Kl = new Uint8Array(16);

    function Cl() {
      if (!Ll && !(Ll = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return Ll(Kl)
    }

    function Il(qq, Eq, gq) {
      var Yq = (qq = qq || {}).random || (qq.rng || Cl)();
      if (Yq[6] = 15 & Yq[6] | 64, Yq[8] = 63 & Yq[8] | 128, Eq) {
        gq = gq || 0;
        for (var lq = 0; lq < 16; ++lq) Eq[gq + lq] = Yq[lq];
        return Eq
      }
      return Gl(Yq)
    }

    function el(qq, Eq, gq, Yq) {
      switch (qq) {
        case 0:
          return Eq & gq ^ ~Eq & Yq;
        case 1:
        case 3:
          return Eq ^ gq ^ Yq;
        case 2:
          return Eq & gq ^ Eq & Yq ^ gq & Yq
      }
    }

    function Dl(qq, Eq) {
      return qq << Eq | qq >>> 32 - Eq
    }
    Jl("v5", 80, (function(qq) {
      var Eq = [1518500249, 1859775393, 2400959708, 3395469782],
        gq = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof qq) {
        var Yq = unescape(encodeURIComponent(qq));
        qq = [];
        for (var lq = 0; lq < Yq.length; ++lq) qq.push(Yq.charCodeAt(lq))
      } else Array.isArray(qq) || (qq = Array.prototype.slice.call(qq));
      qq.push(128);
      for (var Oq = qq.length / 4 + 2, mq = Math.ceil(Oq / 16), xq = new Array(mq), Aq = 0; Aq < mq; ++Aq) {
        for (var cq = new Uint32Array(16), uq = 0; uq < 16; ++uq) cq[uq] = qq[64 * Aq + 4 * uq] << 24 | qq[64 * Aq + 4 * uq + 1] << 16 | qq[64 * Aq + 4 * uq + 2] << 8 | qq[64 * Aq + 4 * uq + 3];
        xq[Aq] = cq
      }
      xq[mq - 1][14] = 8 * (qq.length - 1) / Math.pow(2, 32), xq[mq - 1][14] = Math.floor(xq[mq - 1][14]), xq[mq - 1][15] = 8 * (qq.length - 1) & 4294967295;
      for (var Bq = 0; Bq < mq; ++Bq) {
        for (var Wq = new Uint32Array(80), Nq = 0; Nq < 16; ++Nq) Wq[Nq] = xq[Bq][Nq];
        for (var aq = 16; aq < 80; ++aq) Wq[aq] = Dl(Wq[aq - 3] ^ Wq[aq - 8] ^ Wq[aq - 14] ^ Wq[aq - 16], 1);
        for (var Vq = gq[0], dq = gq[1], jq = gq[2], Hq = gq[3], oq = gq[4], Pq = 0; Pq < 80; ++Pq) {
          var Qq = Math.floor(Pq / 20),
            yq = Dl(Vq, 5) + el(Qq, dq, jq, Hq) + oq + Eq[Qq] + Wq[Pq] >>> 0;
          oq = Hq, Hq = jq, jq = Dl(dq, 30) >>> 0, dq = Vq, Vq = yq
        }
        gq[0] = gq[0] + Vq >>> 0, gq[1] = gq[1] + dq >>> 0, gq[2] = gq[2] + jq >>> 0, gq[3] = gq[3] + Hq >>> 0, gq[4] = gq[4] + oq >>> 0
      }
      return [gq[0] >> 24 & 255, gq[0] >> 16 & 255, gq[0] >> 8 & 255, 255 & gq[0], gq[1] >> 24 & 255, gq[1] >> 16 & 255, gq[1] >> 8 & 255, 255 & gq[1], gq[2] >> 24 & 255, gq[2] >> 16 & 255, gq[2] >> 8 & 255, 255 & gq[2], gq[3] >> 24 & 255, gq[3] >> 16 & 255, gq[3] >> 8 & 255, 255 & gq[3], gq[4] >> 24 & 255, gq[4] >> 16 & 255, gq[4] >> 8 & 255, 255 & gq[4]]
    }));
    class qO extends Error {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(Eq), this.code = qq, this.message = Eq, this.name = "Discord SDK Error"
      }
    }
    const EO = ["log", "warn", "debug", "info", "error"];
    var gO;
    ! function(qq) {
      qq[qq.HANDSHAKE = 0] = "HANDSHAKE", qq[qq.FRAME = 1] = "FRAME", qq[qq.CLOSE = 2] = "CLOSE", qq[qq.HELLO = 3] = "HELLO"
    }(gO || (gO = {}));
    const YO = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class lO {
      getTransfer(qq) {
        var Eq;
        switch (qq.cmd) {
          case Kg.SUBSCRIBE:
          case Kg.UNSUBSCRIBE:
            return;
          default:
            return null !== (Eq = qq.transfer) && void 0 !== Eq ? Eq : void 0
        }
      }
      constructor(qq, Eq) {
        var gq;
        if (this.eventBus = new cq, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = qq => {
            var Eq;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const gq = Il();
            null === (Eq = this.source) || void 0 === Eq || Eq.postMessage([gO.FRAME, Object.assign(Object.assign({}, qq), {
              nonce: gq
            })], this.sourceOrigin, this.getTransfer(qq));
            return new Promise(((qq, Eq) => {
              this.pendingCommands.set(gq, {
                resolve: qq,
                reject: Eq
              })
            }))
          }, this.commands = (gq = this.sendCommand, {
            authenticate: Nl(gq),
            authorize: al(gq),
            captureLog: Vl(gq),
            encourageHardwareAcceleration: dl(gq),
            getChannel: fl(gq),
            getChannelPermissions: ol(gq),
            getEntitlements: jl(gq),
            getPlatformBehaviors: Pl(gq),
            getSkus: Hl(gq),
            openExternalLink: Ql(gq),
            openInviteDialog: yl(gq),
            openShareMomentDialog: tl(gq),
            setActivity: rl(gq),
            setConfig: vl(gq),
            setOrientationLockState: nl(gq),
            startPurchase: bl(gq),
            userSettingsGetLocale: il(gq),
            initiateImageUpload: Zl(gq),
            getInstanceConnectedParticipants: Ml(gq)
          }), this.handleMessage = qq => {
            if (!YO.has(qq.origin)) return;
            const Eq = qq.data;
            if (!Array.isArray(Eq)) return;
            const [gq, Yq] = Eq;
            switch (gq) {
              case gO.HELLO:
                return;
              case gO.CLOSE:
                return this.handleClose(Yq);
              case gO.HANDSHAKE:
                return this.handleHandshake();
              case gO.FRAME:
                return this.handleFrame(Yq);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = qq, this.configuration = null !== Eq && void 0 !== Eq ? Eq : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = zg.DESKTOP, this.guildId = null, void(this.channelId = null);
        const Yq = new URLSearchParams(this._getSearch()),
          lq = Yq.get("frame_id");
        if (!lq) throw new Error("frame_id query param is not defined");
        this.frameId = lq;
        const Oq = Yq.get("instance_id");
        if (!Oq) throw new Error("instance_id query param is not defined");
        this.instanceId = Oq;
        const mq = Yq.get("platform");
        if (!mq) throw new Error("platform query param is not defined");
        if (mq !== zg.DESKTOP && mq !== zg.MOBILE) throw new Error(`Invalid query param "platform" of "${mq}". Valid values are "${zg.DESKTOP}" or "${zg.MOBILE}"`);
        this.platform = mq, this.guildId = Yq.get("guild_id"), this.channelId = Yq.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var qq;
          return [null !== (qq = window.parent.opener) && void 0 !== qq ? qq : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(qq, Eq) {
        var gq;
        window.removeEventListener("message", this.handleMessage);
        const Yq = Il();
        null === (gq = this.source) || void 0 === gq || gq.postMessage([gO.CLOSE, {
          code: qq,
          message: Eq,
          nonce: Yq
        }], this.sourceOrigin)
      }
      async subscribe(qq, Eq) {
        for (var gq = arguments.length, Yq = new Array(gq > 2 ? gq - 2 : 0), lq = 2; lq < gq; lq++) Yq[lq - 2] = arguments[lq];
        const [Oq] = Yq, mq = this.eventBus.listenerCount(qq), xq = this.eventBus.on(qq, Eq);
        return Object.values(TY).includes(qq) && qq !== TY.READY && 0 === mq && await this.sendCommand({
          cmd: Kg.SUBSCRIBE,
          args: Oq,
          evt: qq
        }), xq
      }
      async unsubscribe(qq, Eq) {
        for (var gq = arguments.length, Yq = new Array(gq > 2 ? gq - 2 : 0), lq = 2; lq < gq; lq++) Yq[lq - 2] = arguments[lq];
        const [Oq] = Yq;
        return qq !== TY.READY && 1 === this.eventBus.listenerCount(qq) && await this.sendCommand({
          cmd: Kg.UNSUBSCRIBE,
          evt: qq,
          args: Oq
        }), this.eventBus.off(qq, Eq)
      }
      async ready() {
        this.isReady || await new Promise((qq => {
          this.eventBus.once(TY.READY, qq)
        }))
      }
      handshake() {
        var qq;
        null === (qq = this.source) || void 0 === qq || qq.postMessage([gO.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(TY.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const qq = (qq, Eq) => {
          this.commands.captureLog({
            level: qq,
            message: Eq
          })
        };
        EO.forEach((Eq => {
          ! function(qq, Eq, gq) {
            const Yq = qq[Eq],
              lq = qq;
            Yq && (qq[Eq] = function() {
              const qq = [].slice.call(arguments),
                Oq = "" + qq.join(" ");
              gq(Eq, Oq), Yq.apply(lq, qq)
            })
          }(console, Eq, qq)
        }))
      }
      handleClose(qq) {
        Al.parse(qq)
      }
      handleHandshake() {}
      handleFrame(qq) {
        var Eq, gq;
        let Yq;
        try {
          Yq = ul(qq)
        } catch (lq) {
          return console.error("Failed to parse", qq), void console.error(lq)
        }
        if ("DISPATCH" === Yq.cmd) this.eventBus.emit(Yq.evt, Yq.data);
        else {
          if (Yq.evt === MY) {
            if (null != Yq.nonce) return null === (Eq = this.pendingCommands.get(Yq.nonce)) || void 0 === Eq || Eq.reject(Yq.data), void this.pendingCommands.delete(Yq.nonce);
            this.eventBus.emit("error", new qO(Yq.data.code, Yq.data.message))
          }
          if (null == Yq.nonce) return void console.error("Missing nonce", qq);
          null === (gq = this.pendingCommands.get(Yq.nonce)) || void 0 === gq || gq.resolve(Yq), this.pendingCommands.delete(Yq.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var OO, mO = 1e9,
      xO = !0,
      AO = "[DecimalError] ",
      cO = AO + "Invalid argument: ",
      uO = AO + "Exponent out of range: ",
      BO = Math.floor,
      WO = Math.pow,
      NO = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      aO = 1e7,
      VO = 9007199254740991,
      dO = BO(1286742750677284.5),
      jO = {};

    function HO(qq, Eq) {
      var gq, Yq, lq, Oq, mq, xq, Aq, cq, uq = qq.constructor,
        Bq = uq.precision;
      if (!qq.s || !Eq.s) return Eq.s || (Eq = new uq(qq)), xO ? bO(Eq, Bq) : Eq;
      if (Aq = qq.d, cq = Eq.d, mq = qq.e, lq = Eq.e, Aq = Aq.slice(), Oq = mq - lq) {
        for (Oq < 0 ? (Yq = Aq, Oq = -Oq, xq = cq.length) : (Yq = cq, lq = mq, xq = Aq.length), Oq > (xq = (mq = Math.ceil(Bq / 7)) > xq ? mq + 1 : xq + 1) && (Oq = xq, Yq.length = 1), Yq.reverse(); Oq--;) Yq.push(0);
        Yq.reverse()
      }
      for ((xq = Aq.length) - (Oq = cq.length) < 0 && (Oq = xq, Yq = cq, cq = Aq, Aq = Yq), gq = 0; Oq;) gq = (Aq[--Oq] = Aq[Oq] + cq[Oq] + gq) / aO | 0, Aq[Oq] %= aO;
      for (gq && (Aq.unshift(gq), ++lq), xq = Aq.length; 0 == Aq[--xq];) Aq.pop();
      return Eq.d = Aq, Eq.e = lq, xO ? bO(Eq, Bq) : Eq
    }

    function oO(qq, Eq, gq) {
      if (qq !== ~~qq || qq < Eq || qq > gq) throw Error(cO + qq)
    }

    function PO(qq) {
      var Eq, gq, Yq, lq = qq.length - 1,
        Oq = "",
        mq = qq[0];
      if (lq > 0) {
        for (Oq += mq, Eq = 1; Eq < lq; Eq++)(gq = 7 - (Yq = qq[Eq] + "").length) && (Oq += vO(gq)), Oq += Yq;
        (gq = 7 - (Yq = (mq = qq[Eq]) + "").length) && (Oq += vO(gq))
      } else if (0 === mq) return "0";
      for (; mq % 10 === 0;) mq /= 10;
      return Oq + mq
    }
    jO.absoluteValue = jO.abs = function() {
      var qq = new this.constructor(this);
      return qq.s && (qq.s = 1), qq
    }, jO.comparedTo = jO.cmp = function(qq) {
      var Eq, gq, Yq, lq, Oq = this;
      if (qq = new Oq.constructor(qq), Oq.s !== qq.s) return Oq.s || -qq.s;
      if (Oq.e !== qq.e) return Oq.e > qq.e ^ Oq.s < 0 ? 1 : -1;
      for (Eq = 0, gq = (Yq = Oq.d.length) < (lq = qq.d.length) ? Yq : lq; Eq < gq; ++Eq)
        if (Oq.d[Eq] !== qq.d[Eq]) return Oq.d[Eq] > qq.d[Eq] ^ Oq.s < 0 ? 1 : -1;
      return Yq === lq ? 0 : Yq > lq ^ Oq.s < 0 ? 1 : -1
    }, jO.decimalPlaces = jO.dp = function() {
      var qq = this,
        Eq = qq.d.length - 1,
        gq = 7 * (Eq - qq.e);
      if (Eq = qq.d[Eq])
        for (; Eq % 10 == 0; Eq /= 10) gq--;
      return gq < 0 ? 0 : gq
    }, jO.dividedBy = jO.div = function(qq) {
      return QO(this, new this.constructor(qq))
    }, jO.dividedToIntegerBy = jO.idiv = function(qq) {
      var Eq = this.constructor;
      return bO(QO(this, new Eq(qq), 0, 1), Eq.precision)
    }, jO.equals = jO.eq = function(qq) {
      return !this.cmp(qq)
    }, jO.exponent = function() {
      return tO(this)
    }, jO.greaterThan = jO.gt = function(qq) {
      return this.cmp(qq) > 0
    }, jO.greaterThanOrEqualTo = jO.gte = function(qq) {
      return this.cmp(qq) >= 0
    }, jO.isInteger = jO.isint = function() {
      return this.e > this.d.length - 2
    }, jO.isNegative = jO.isneg = function() {
      return this.s < 0
    }, jO.isPositive = jO.ispos = function() {
      return this.s > 0
    }, jO.isZero = function() {
      return 0 === this.s
    }, jO.lessThan = jO.lt = function(qq) {
      return this.cmp(qq) < 0
    }, jO.lessThanOrEqualTo = jO.lte = function(qq) {
      return this.cmp(qq) < 1
    }, jO.logarithm = jO.log = function(qq) {
      var Eq, gq = this,
        Yq = gq.constructor,
        lq = Yq.precision,
        Oq = lq + 5;
      if (void 0 === qq) qq = new Yq(10);
      else if ((qq = new Yq(qq)).s < 1 || qq.eq(OO)) throw Error(AO + "NaN");
      if (gq.s < 1) throw Error(AO + (gq.s ? "NaN" : "-Infinity"));
      return gq.eq(OO) ? new Yq(0) : (xO = !1, Eq = QO(hO(gq, Oq), hO(qq, Oq), Oq), xO = !0, bO(Eq, lq))
    }, jO.minus = jO.sub = function(qq) {
      var Eq = this;
      return qq = new Eq.constructor(qq), Eq.s == qq.s ? iO(Eq, qq) : HO(Eq, (qq.s = -qq.s, qq))
    }, jO.modulo = jO.mod = function(qq) {
      var Eq, gq = this,
        Yq = gq.constructor,
        lq = Yq.precision;
      if (!(qq = new Yq(qq)).s) throw Error(AO + "NaN");
      return gq.s ? (xO = !1, Eq = QO(gq, qq, 0, 1).times(qq), xO = !0, gq.minus(Eq)) : bO(new Yq(gq), lq)
    }, jO.naturalExponential = jO.exp = function() {
      return yO(this)
    }, jO.naturalLogarithm = jO.ln = function() {
      return hO(this)
    }, jO.negated = jO.neg = function() {
      var qq = new this.constructor(this);
      return qq.s = -qq.s || 0, qq
    }, jO.plus = jO.add = function(qq) {
      var Eq = this;
      return qq = new Eq.constructor(qq), Eq.s == qq.s ? HO(Eq, qq) : iO(Eq, (qq.s = -qq.s, qq))
    }, jO.precision = jO.sd = function(qq) {
      var Eq, gq, Yq, lq = this;
      if (void 0 !== qq && qq !== !!qq && 1 !== qq && 0 !== qq) throw Error(cO + qq);
      if (Eq = tO(lq) + 1, gq = 7 * (Yq = lq.d.length - 1) + 1, Yq = lq.d[Yq]) {
        for (; Yq % 10 == 0; Yq /= 10) gq--;
        for (Yq = lq.d[0]; Yq >= 10; Yq /= 10) gq++
      }
      return qq && Eq > gq ? Eq : gq
    }, jO.squareRoot = jO.sqrt = function() {
      var qq, Eq, gq, Yq, lq, Oq, mq, xq = this,
        Aq = xq.constructor;
      if (xq.s < 1) {
        if (!xq.s) return new Aq(0);
        throw Error(AO + "NaN")
      }
      for (qq = tO(xq), xO = !1, 0 == (lq = Math.sqrt(+xq)) || lq == 1 / 0 ? (((Eq = PO(xq.d)).length + qq) % 2 == 0 && (Eq += "0"), lq = Math.sqrt(Eq), qq = BO((qq + 1) / 2) - (qq < 0 || qq % 2), Yq = new Aq(Eq = lq == 1 / 0 ? "1e" + qq : (Eq = lq.toExponential()).slice(0, Eq.indexOf("e") + 1) + qq)) : Yq = new Aq(lq.toString()), lq = mq = (gq = Aq.precision) + 3;;)
        if (Yq = (Oq = Yq).plus(QO(xq, Oq, mq + 2)).times(.5), PO(Oq.d).slice(0, mq) === (Eq = PO(Yq.d)).slice(0, mq)) {
          if (Eq = Eq.slice(mq - 3, mq + 1), lq == mq && "4999" == Eq) {
            if (bO(Oq, gq + 1, 0), Oq.times(Oq).eq(xq)) {
              Yq = Oq;
              break
            }
          } else if ("9999" != Eq) break;
          mq += 4
        } return xO = !0, bO(Yq, gq)
    }, jO.times = jO.mul = function(qq) {
      var Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq = this,
        Bq = uq.constructor,
        Wq = uq.d,
        Nq = (qq = new Bq(qq)).d;
      if (!uq.s || !qq.s) return new Bq(0);
      for (qq.s *= uq.s, gq = uq.e + qq.e, (Aq = Wq.length) < (cq = Nq.length) && (Oq = Wq, Wq = Nq, Nq = Oq, mq = Aq, Aq = cq, cq = mq), Oq = [], Yq = mq = Aq + cq; Yq--;) Oq.push(0);
      for (Yq = cq; --Yq >= 0;) {
        for (Eq = 0, lq = Aq + Yq; lq > Yq;) xq = Oq[lq] + Nq[Yq] * Wq[lq - Yq - 1] + Eq, Oq[lq--] = xq % aO | 0, Eq = xq / aO | 0;
        Oq[lq] = (Oq[lq] + Eq) % aO | 0
      }
      for (; !Oq[--mq];) Oq.pop();
      return Eq ? ++gq : Oq.shift(), qq.d = Oq, qq.e = gq, xO ? bO(qq, Bq.precision) : qq
    }, jO.toDecimalPlaces = jO.todp = function(qq, Eq) {
      var gq = this,
        Yq = gq.constructor;
      return gq = new Yq(gq), void 0 === qq ? gq : (oO(qq, 0, mO), void 0 === Eq ? Eq = Yq.rounding : oO(Eq, 0, 8), bO(gq, qq + tO(gq) + 1, Eq))
    }, jO.toExponential = function(qq, Eq) {
      var gq, Yq = this,
        lq = Yq.constructor;
      return void 0 === qq ? gq = ZO(Yq, !0) : (oO(qq, 0, mO), void 0 === Eq ? Eq = lq.rounding : oO(Eq, 0, 8), gq = ZO(Yq = bO(new lq(Yq), qq + 1, Eq), !0, qq + 1)), gq
    }, jO.toFixed = function(qq, Eq) {
      var gq, Yq, lq = this,
        Oq = lq.constructor;
      return void 0 === qq ? ZO(lq) : (oO(qq, 0, mO), void 0 === Eq ? Eq = Oq.rounding : oO(Eq, 0, 8), gq = ZO((Yq = bO(new Oq(lq), qq + tO(lq) + 1, Eq)).abs(), !1, qq + tO(Yq) + 1), lq.isneg() && !lq.isZero() ? "-" + gq : gq)
    }, jO.toInteger = jO.toint = function() {
      var qq = this,
        Eq = qq.constructor;
      return bO(new Eq(qq), tO(qq) + 1, Eq.rounding)
    }, jO.toNumber = function() {
      return +this
    }, jO.toPower = jO.pow = function(qq) {
      var Eq, gq, Yq, lq, Oq, mq, xq = this,
        Aq = xq.constructor,
        cq = +(qq = new Aq(qq));
      if (!qq.s) return new Aq(OO);
      if (!(xq = new Aq(xq)).s) {
        if (qq.s < 1) throw Error(AO + "Infinity");
        return xq
      }
      if (xq.eq(OO)) return xq;
      if (Yq = Aq.precision, qq.eq(OO)) return bO(xq, Yq);
      if (mq = (Eq = qq.e) >= (gq = qq.d.length - 1), Oq = xq.s, mq) {
        if ((gq = cq < 0 ? -cq : cq) <= VO) {
          for (lq = new Aq(OO), Eq = Math.ceil(Yq / 7 + 4), xO = !1; gq % 2 && fO((lq = lq.times(xq)).d, Eq), 0 !== (gq = BO(gq / 2));) fO((xq = xq.times(xq)).d, Eq);
          return xO = !0, qq.s < 0 ? new Aq(OO).div(lq) : bO(lq, Yq)
        }
      } else if (Oq < 0) throw Error(AO + "NaN");
      return Oq = Oq < 0 && 1 & qq.d[Math.max(Eq, gq)] ? -1 : 1, xq.s = 1, xO = !1, lq = qq.times(hO(xq, Yq + 12)), xO = !0, (lq = yO(lq)).s = Oq, lq
    }, jO.toPrecision = function(qq, Eq) {
      var gq, Yq, lq = this,
        Oq = lq.constructor;
      return void 0 === qq ? Yq = ZO(lq, (gq = tO(lq)) <= Oq.toExpNeg || gq >= Oq.toExpPos) : (oO(qq, 1, mO), void 0 === Eq ? Eq = Oq.rounding : oO(Eq, 0, 8), Yq = ZO(lq = bO(new Oq(lq), qq, Eq), qq <= (gq = tO(lq)) || gq <= Oq.toExpNeg, qq)), Yq
    }, jO.toSignificantDigits = jO.tosd = function(qq, Eq) {
      var gq = this.constructor;
      return void 0 === qq ? (qq = gq.precision, Eq = gq.rounding) : (oO(qq, 1, mO), void 0 === Eq ? Eq = gq.rounding : oO(Eq, 0, 8)), bO(new gq(this), qq, Eq)
    }, jO.toString = jO.valueOf = jO.val = jO.toJSON = jO[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var qq = this,
        Eq = tO(qq),
        gq = qq.constructor;
      return ZO(qq, Eq <= gq.toExpNeg || Eq >= gq.toExpPos)
    };
    var QO = function() {
      function qq(qq, Eq) {
        var gq, Yq = 0,
          lq = qq.length;
        for (qq = qq.slice(); lq--;) gq = qq[lq] * Eq + Yq, qq[lq] = gq % aO | 0, Yq = gq / aO | 0;
        return Yq && qq.unshift(Yq), qq
      }

      function Eq(qq, Eq, gq, Yq) {
        var lq, Oq;
        if (gq != Yq) Oq = gq > Yq ? 1 : -1;
        else
          for (lq = Oq = 0; lq < gq; lq++)
            if (qq[lq] != Eq[lq]) {
              Oq = qq[lq] > Eq[lq] ? 1 : -1;
              break
            } return Oq
      }

      function gq(qq, Eq, gq) {
        for (var Yq = 0; gq--;) qq[gq] -= Yq, Yq = qq[gq] < Eq[gq] ? 1 : 0, qq[gq] = Yq * aO + qq[gq] - Eq[gq];
        for (; !qq[0] && qq.length > 1;) qq.shift()
      }
      return function(Yq, lq, Oq, mq) {
        var xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq, jq, Hq, oq, Pq, Qq, yq, tq, rq, vq = Yq.constructor,
          hq = Yq.s == lq.s ? 1 : -1,
          nq = Yq.d,
          bq = lq.d;
        if (!Yq.s) return new vq(Yq);
        if (!lq.s) throw Error(AO + "Division by zero");
        for (Aq = Yq.e - lq.e, tq = bq.length, Qq = nq.length, aq = (Nq = new vq(hq)).d = [], cq = 0; bq[cq] == (nq[cq] || 0);) ++cq;
        if (bq[cq] > (nq[cq] || 0) && --Aq, (Hq = null == Oq ? Oq = vq.precision : mq ? Oq + (tO(Yq) - tO(lq)) + 1 : Oq) < 0) return new vq(0);
        if (Hq = Hq / 7 + 2 | 0, cq = 0, 1 == tq)
          for (uq = 0, bq = bq[0], Hq++;
            (cq < Qq || uq) && Hq--; cq++) oq = uq * aO + (nq[cq] || 0), aq[cq] = oq / bq | 0, uq = oq % bq | 0;
        else {
          for ((uq = aO / (bq[0] + 1) | 0) > 1 && (bq = qq(bq, uq), nq = qq(nq, uq), tq = bq.length, Qq = nq.length), Pq = tq, dq = (Vq = nq.slice(0, tq)).length; dq < tq;) Vq[dq++] = 0;
          (rq = bq.slice()).unshift(0), yq = bq[0], bq[1] >= aO / 2 && ++yq;
          do {
            uq = 0, (xq = Eq(bq, Vq, tq, dq)) < 0 ? (jq = Vq[0], tq != dq && (jq = jq * aO + (Vq[1] || 0)), (uq = jq / yq | 0) > 1 ? (uq >= aO && (uq = aO - 1), 1 == (xq = Eq(Bq = qq(bq, uq), Vq, Wq = Bq.length, dq = Vq.length)) && (uq--, gq(Bq, tq < Wq ? rq : bq, Wq))) : (0 == uq && (xq = uq = 1), Bq = bq.slice()), (Wq = Bq.length) < dq && Bq.unshift(0), gq(Vq, Bq, dq), -1 == xq && (xq = Eq(bq, Vq, tq, dq = Vq.length)) < 1 && (uq++, gq(Vq, tq < dq ? rq : bq, dq)), dq = Vq.length) : 0 === xq && (uq++, Vq = [0]), aq[cq++] = uq, xq && Vq[0] ? Vq[dq++] = nq[Pq] || 0 : (Vq = [nq[Pq]], dq = 1)
          } while ((Pq++ < Qq || void 0 !== Vq[0]) && Hq--)
        }
        return aq[0] || aq.shift(), Nq.e = Aq, bO(Nq, mq ? Oq + tO(Nq) + 1 : Oq)
      }
    }();

    function yO(qq, Eq) {
      var gq, Yq, lq, Oq, mq, xq = 0,
        Aq = 0,
        cq = qq.constructor,
        uq = cq.precision;
      if (tO(qq) > 16) throw Error(uO + tO(qq));
      if (!qq.s) return new cq(OO);
      for (null == Eq ? (xO = !1, mq = uq) : mq = Eq, Oq = new cq(.03125); qq.abs().gte(.1);) qq = qq.times(Oq), Aq += 5;
      for (mq += Math.log(WO(2, Aq)) / Math.LN10 * 2 + 5 | 0, gq = Yq = lq = new cq(OO), cq.precision = mq;;) {
        if (Yq = bO(Yq.times(qq), mq), gq = gq.times(++xq), PO((Oq = lq.plus(QO(Yq, gq, mq))).d).slice(0, mq) === PO(lq.d).slice(0, mq)) {
          for (; Aq--;) lq = bO(lq.times(lq), mq);
          return cq.precision = uq, null == Eq ? (xO = !0, bO(lq, uq)) : lq
        }
        lq = Oq
      }
    }

    function tO(qq) {
      for (var Eq = 7 * qq.e, gq = qq.d[0]; gq >= 10; gq /= 10) Eq++;
      return Eq
    }

    function rO(qq, Eq, gq) {
      if (Eq > qq.LN10.sd()) throw xO = !0, gq && (qq.precision = gq), Error(AO + "LN10 precision limit exceeded");
      return bO(new qq(qq.LN10), Eq)
    }

    function vO(qq) {
      for (var Eq = ""; qq--;) Eq += "0";
      return Eq
    }

    function hO(qq, Eq) {
      var gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq = 1,
        Wq = qq,
        Nq = Wq.d,
        aq = Wq.constructor,
        Vq = aq.precision;
      if (Wq.s < 1) throw Error(AO + (Wq.s ? "NaN" : "-Infinity"));
      if (Wq.eq(OO)) return new aq(0);
      if (null == Eq ? (xO = !1, cq = Vq) : cq = Eq, Wq.eq(10)) return null == Eq && (xO = !0), rO(aq, cq);
      if (cq += 10, aq.precision = cq, Yq = (gq = PO(Nq)).charAt(0), Oq = tO(Wq), !(Math.abs(Oq) < 15e14)) return Aq = rO(aq, cq + 2, Vq).times(Oq + ""), Wq = hO(new aq(Yq + "." + gq.slice(1)), cq - 10).plus(Aq), aq.precision = Vq, null == Eq ? (xO = !0, bO(Wq, Vq)) : Wq;
      for (; Yq < 7 && 1 != Yq || 1 == Yq && gq.charAt(1) > 3;) Yq = (gq = PO((Wq = Wq.times(qq)).d)).charAt(0), Bq++;
      for (Oq = tO(Wq), Yq > 1 ? (Wq = new aq("0." + gq), Oq++) : Wq = new aq(Yq + "." + gq.slice(1)), xq = mq = Wq = QO(Wq.minus(OO), Wq.plus(OO), cq), uq = bO(Wq.times(Wq), cq), lq = 3;;) {
        if (mq = bO(mq.times(uq), cq), PO((Aq = xq.plus(QO(mq, new aq(lq), cq))).d).slice(0, cq) === PO(xq.d).slice(0, cq)) return xq = xq.times(2), 0 !== Oq && (xq = xq.plus(rO(aq, cq + 2, Vq).times(Oq + ""))), xq = QO(xq, new aq(Bq), cq), aq.precision = Vq, null == Eq ? (xO = !0, bO(xq, Vq)) : xq;
        xq = Aq, lq += 2
      }
    }

    function nO(qq, Eq) {
      var gq, Yq, lq;
      for ((gq = Eq.indexOf(".")) > -1 && (Eq = Eq.replace(".", "")), (Yq = Eq.search(/e/i)) > 0 ? (gq < 0 && (gq = Yq), gq += +Eq.slice(Yq + 1), Eq = Eq.substring(0, Yq)) : gq < 0 && (gq = Eq.length), Yq = 0; 48 === Eq.charCodeAt(Yq);) ++Yq;
      for (lq = Eq.length; 48 === Eq.charCodeAt(lq - 1);) --lq;
      if (Eq = Eq.slice(Yq, lq)) {
        if (lq -= Yq, gq = gq - Yq - 1, qq.e = BO(gq / 7), qq.d = [], Yq = (gq + 1) % 7, gq < 0 && (Yq += 7), Yq < lq) {
          for (Yq && qq.d.push(+Eq.slice(0, Yq)), lq -= 7; Yq < lq;) qq.d.push(+Eq.slice(Yq, Yq += 7));
          Yq = 7 - (Eq = Eq.slice(Yq)).length
        } else Yq -= lq;
        for (; Yq--;) Eq += "0";
        if (qq.d.push(+Eq), xO && (qq.e > dO || qq.e < -dO)) throw Error(uO + gq)
      } else qq.s = 0, qq.e = 0, qq.d = [0];
      return qq
    }

    function bO(qq, Eq, gq) {
      var Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq = qq.d;
      for (mq = 1, Oq = Bq[0]; Oq >= 10; Oq /= 10) mq++;
      if ((Yq = Eq - mq) < 0) Yq += 7, lq = Eq, cq = Bq[uq = 0];
      else {
        if ((uq = Math.ceil((Yq + 1) / 7)) >= (Oq = Bq.length)) return qq;
        for (cq = Oq = Bq[uq], mq = 1; Oq >= 10; Oq /= 10) mq++;
        lq = (Yq %= 7) - 7 + mq
      }
      if (void 0 !== gq && (xq = cq / (Oq = WO(10, mq - lq - 1)) % 10 | 0, Aq = Eq < 0 || void 0 !== Bq[uq + 1] || cq % Oq, Aq = gq < 4 ? (xq || Aq) && (0 == gq || gq == (qq.s < 0 ? 3 : 2)) : xq > 5 || 5 == xq && (4 == gq || Aq || 6 == gq && (Yq > 0 ? lq > 0 ? cq / WO(10, mq - lq) : 0 : Bq[uq - 1]) % 10 & 1 || gq == (qq.s < 0 ? 8 : 7))), Eq < 1 || !Bq[0]) return Aq ? (Oq = tO(qq), Bq.length = 1, Eq = Eq - Oq - 1, Bq[0] = WO(10, (7 - Eq % 7) % 7), qq.e = BO(-Eq / 7) || 0) : (Bq.length = 1, Bq[0] = qq.e = qq.s = 0), qq;
      if (0 == Yq ? (Bq.length = uq, Oq = 1, uq--) : (Bq.length = uq + 1, Oq = WO(10, 7 - Yq), Bq[uq] = lq > 0 ? (cq / WO(10, mq - lq) % WO(10, lq) | 0) * Oq : 0), Aq)
        for (;;) {
          if (0 == uq) {
            (Bq[0] += Oq) == aO && (Bq[0] = 1, ++qq.e);
            break
          }
          if (Bq[uq] += Oq, Bq[uq] != aO) break;
          Bq[uq--] = 0, Oq = 1
        }
      for (Yq = Bq.length; 0 === Bq[--Yq];) Bq.pop();
      if (xO && (qq.e > dO || qq.e < -dO)) throw Error(uO + tO(qq));
      return qq
    }

    function iO(qq, Eq) {
      var gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq, Wq = qq.constructor,
        Nq = Wq.precision;
      if (!qq.s || !Eq.s) return Eq.s ? Eq.s = -Eq.s : Eq = new Wq(qq), xO ? bO(Eq, Nq) : Eq;
      if (Aq = qq.d, Bq = Eq.d, Yq = Eq.e, cq = qq.e, Aq = Aq.slice(), mq = cq - Yq) {
        for ((uq = mq < 0) ? (gq = Aq, mq = -mq, xq = Bq.length) : (gq = Bq, Yq = cq, xq = Aq.length), mq > (lq = Math.max(Math.ceil(Nq / 7), xq) + 2) && (mq = lq, gq.length = 1), gq.reverse(), lq = mq; lq--;) gq.push(0);
        gq.reverse()
      } else {
        for ((uq = (lq = Aq.length) < (xq = Bq.length)) && (xq = lq), lq = 0; lq < xq; lq++)
          if (Aq[lq] != Bq[lq]) {
            uq = Aq[lq] < Bq[lq];
            break
          } mq = 0
      }
      for (uq && (gq = Aq, Aq = Bq, Bq = gq, Eq.s = -Eq.s), xq = Aq.length, lq = Bq.length - xq; lq > 0; --lq) Aq[xq++] = 0;
      for (lq = Bq.length; lq > mq;) {
        if (Aq[--lq] < Bq[lq]) {
          for (Oq = lq; Oq && 0 === Aq[--Oq];) Aq[Oq] = aO - 1;
          --Aq[Oq], Aq[lq] += aO
        }
        Aq[lq] -= Bq[lq]
      }
      for (; 0 === Aq[--xq];) Aq.pop();
      for (; 0 === Aq[0]; Aq.shift()) --Yq;
      return Aq[0] ? (Eq.d = Aq, Eq.e = Yq, xO ? bO(Eq, Nq) : Eq) : new Wq(0)
    }

    function ZO(qq, Eq, gq) {
      var Yq, lq = tO(qq),
        Oq = PO(qq.d),
        mq = Oq.length;
      return Eq ? (gq && (Yq = gq - mq) > 0 ? Oq = Oq.charAt(0) + "." + Oq.slice(1) + vO(Yq) : mq > 1 && (Oq = Oq.charAt(0) + "." + Oq.slice(1)), Oq = Oq + (lq < 0 ? "e" : "e+") + lq) : lq < 0 ? (Oq = "0." + vO(-lq - 1) + Oq, gq && (Yq = gq - mq) > 0 && (Oq += vO(Yq))) : lq >= mq ? (Oq += vO(lq + 1 - mq), gq && (Yq = gq - lq - 1) > 0 && (Oq = Oq + "." + vO(Yq))) : ((Yq = lq + 1) < mq && (Oq = Oq.slice(0, Yq) + "." + Oq.slice(Yq)), gq && (Yq = gq - mq) > 0 && (lq + 1 === mq && (Oq += "."), Oq += vO(Yq))), qq.s < 0 ? "-" + Oq : Oq
    }

    function fO(qq, Eq) {
      if (qq.length > Eq) return qq.length = Eq, !0
    }

    function MO(qq) {
      if (!qq || "object" !== typeof qq) throw Error(AO + "Object expected");
      var Eq, gq, Yq, lq = ["precision", 1, mO, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (Eq = 0; Eq < lq.length; Eq += 3)
        if (void 0 !== (Yq = qq[gq = lq[Eq]])) {
          if (!(BO(Yq) === Yq && Yq >= lq[Eq + 1] && Yq <= lq[Eq + 2])) throw Error(cO + gq + ": " + Yq);
          this[gq] = Yq
        } if (void 0 !== (Yq = qq[gq = "LN10"])) {
        if (Yq != Math.LN10) throw Error(cO + gq + ": " + Yq);
        this[gq] = new this(Yq)
      }
      return this
    }
    var TO = function qq(Eq) {
      var gq, Yq, lq;

      function Oq(qq) {
        var Eq = this;
        if (!(Eq instanceof Oq)) return new Oq(qq);
        if (Eq.constructor = Oq, qq instanceof Oq) return Eq.s = qq.s, Eq.e = qq.e, void(Eq.d = (qq = qq.d) ? qq.slice() : qq);
        if ("number" === typeof qq) {
          if (0 * qq !== 0) throw Error(cO + qq);
          if (qq > 0) Eq.s = 1;
          else {
            if (!(qq < 0)) return Eq.s = 0, Eq.e = 0, void(Eq.d = [0]);
            qq = -qq, Eq.s = -1
          }
          return qq === ~~qq && qq < 1e7 ? (Eq.e = 0, void(Eq.d = [qq])) : nO(Eq, qq.toString())
        }
        if ("string" !== typeof qq) throw Error(cO + qq);
        if (45 === qq.charCodeAt(0) ? (qq = qq.slice(1), Eq.s = -1) : Eq.s = 1, !NO.test(qq)) throw Error(cO + qq);
        nO(Eq, qq)
      }
      if (Oq.prototype = jO, Oq.ROUND_UP = 0, Oq.ROUND_DOWN = 1, Oq.ROUND_CEIL = 2, Oq.ROUND_FLOOR = 3, Oq.ROUND_HALF_UP = 4, Oq.ROUND_HALF_DOWN = 5, Oq.ROUND_HALF_EVEN = 6, Oq.ROUND_HALF_CEIL = 7, Oq.ROUND_HALF_FLOOR = 8, Oq.clone = qq, Oq.config = Oq.set = MO, void 0 === Eq && (Eq = {}), Eq)
        for (lq = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], gq = 0; gq < lq.length;) Eq.hasOwnProperty(Yq = lq[gq++]) || (Eq[Yq] = this[Yq]);
      return Oq.config(Eq), Oq
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    OO = new TO(1);
    var zO;
    ! function(qq) {
      qq.AED = "aed", qq.AFN = "afn", qq.ALL = "all", qq.AMD = "amd", qq.ANG = "ang", qq.AOA = "aoa", qq.ARS = "ars", qq.AUD = "aud", qq.AWG = "awg", qq.AZN = "azn", qq.BAM = "bam", qq.BBD = "bbd", qq.BDT = "bdt", qq.BGN = "bgn", qq.BHD = "bhd", qq.BIF = "bif", qq.BMD = "bmd", qq.BND = "bnd", qq.BOB = "bob", qq.BOV = "bov", qq.BRL = "brl", qq.BSD = "bsd", qq.BTN = "btn", qq.BWP = "bwp", qq.BYN = "byn", qq.BYR = "byr", qq.BZD = "bzd", qq.CAD = "cad", qq.CDF = "cdf", qq.CHE = "che", qq.CHF = "chf", qq.CHW = "chw", qq.CLF = "clf", qq.CLP = "clp", qq.CNY = "cny", qq.COP = "cop", qq.COU = "cou", qq.CRC = "crc", qq.CUC = "cuc", qq.CUP = "cup", qq.CVE = "cve", qq.CZK = "czk", qq.DJF = "djf", qq.DKK = "dkk", qq.DOP = "dop", qq.DZD = "dzd", qq.EGP = "egp", qq.ERN = "ern", qq.ETB = "etb", qq.EUR = "eur", qq.FJD = "fjd", qq.FKP = "fkp", qq.GBP = "gbp", qq.GEL = "gel", qq.GHS = "ghs", qq.GIP = "gip", qq.GMD = "gmd", qq.GNF = "gnf", qq.GTQ = "gtq", qq.GYD = "gyd", qq.HKD = "hkd", qq.HNL = "hnl", qq.HRK = "hrk", qq.HTG = "htg", qq.HUF = "huf", qq.IDR = "idr", qq.ILS = "ils", qq.INR = "inr", qq.IQD = "iqd", qq.IRR = "irr", qq.ISK = "isk", qq.JMD = "jmd", qq.JOD = "jod", qq.JPY = "jpy", qq.KES = "kes", qq.KGS = "kgs", qq.KHR = "khr", qq.KMF = "kmf", qq.KPW = "kpw", qq.KRW = "krw", qq.KWD = "kwd", qq.KYD = "kyd", qq.KZT = "kzt", qq.LAK = "lak", qq.LBP = "lbp", qq.LKR = "lkr", qq.LRD = "lrd", qq.LSL = "lsl", qq.LTL = "ltl", qq.LVL = "lvl", qq.LYD = "lyd", qq.MAD = "mad", qq.MDL = "mdl", qq.MGA = "mga", qq.MKD = "mkd", qq.MMK = "mmk", qq.MNT = "mnt", qq.MOP = "mop", qq.MRO = "mro", qq.MUR = "mur", qq.MVR = "mvr", qq.MWK = "mwk", qq.MXN = "mxn", qq.MXV = "mxv", qq.MYR = "myr", qq.MZN = "mzn", qq.NAD = "nad", qq.NGN = "ngn", qq.NIO = "nio", qq.NOK = "nok", qq.NPR = "npr", qq.NZD = "nzd", qq.OMR = "omr", qq.PAB = "pab", qq.PEN = "pen", qq.PGK = "pgk", qq.PHP = "php", qq.PKR = "pkr", qq.PLN = "pln", qq.PYG = "pyg", qq.QAR = "qar", qq.RON = "ron", qq.RSD = "rsd", qq.RUB = "rub", qq.RWF = "rwf", qq.SAR = "sar", qq.SBD = "sbd", qq.SCR = "scr", qq.SDG = "sdg", qq.SEK = "sek", qq.SGD = "sgd", qq.SHP = "shp", qq.SLL = "sll", qq.SOS = "sos", qq.SRD = "srd", qq.SSP = "ssp", qq.STD = "std", qq.SVC = "svc", qq.SYP = "syp", qq.SZL = "szl", qq.THB = "thb", qq.TJS = "tjs", qq.TMT = "tmt", qq.TND = "tnd", qq.TOP = "top", qq.TRY = "try", qq.TTD = "ttd", qq.TWD = "twd", qq.TZS = "tzs", qq.UAH = "uah", qq.UGX = "ugx", qq.USD = "usd", qq.USN = "usn", qq.USS = "uss", qq.UYI = "uyi", qq.UYU = "uyu", qq.UZS = "uzs", qq.VEF = "vef", qq.VND = "vnd", qq.VUV = "vuv", qq.WST = "wst", qq.XAF = "xaf", qq.XAG = "xag", qq.XAU = "xau", qq.XBA = "xba", qq.XBB = "xbb", qq.XBC = "xbc", qq.XBD = "xbd", qq.XCD = "xcd", qq.XDR = "xdr", qq.XFU = "xfu", qq.XOF = "xof", qq.XPD = "xpd", qq.XPF = "xpf", qq.XPT = "xpt", qq.XSU = "xsu", qq.XTS = "xts", qq.XUA = "xua", qq.YER = "yer", qq.ZAR = "zar", qq.ZMW = "zmw", qq.ZWL = "zwl"
    }(zO || (zO = {}));
    zO.AED, zO.AFN, zO.ALL, zO.AMD, zO.ANG, zO.AOA, zO.ARS, zO.AUD, zO.AWG, zO.AZN, zO.BAM, zO.BBD, zO.BDT, zO.BGN, zO.BHD, zO.BIF, zO.BMD, zO.BND, zO.BOB, zO.BOV, zO.BRL, zO.BSD, zO.BTN, zO.BWP, zO.BYR, zO.BYN, zO.BZD, zO.CAD, zO.CDF, zO.CHE, zO.CHF, zO.CHW, zO.CLF, zO.CLP, zO.CNY, zO.COP, zO.COU, zO.CRC, zO.CUC, zO.CUP, zO.CVE, zO.CZK, zO.DJF, zO.DKK, zO.DOP, zO.DZD, zO.EGP, zO.ERN, zO.ETB, zO.EUR, zO.FJD, zO.FKP, zO.GBP, zO.GEL, zO.GHS, zO.GIP, zO.GMD, zO.GNF, zO.GTQ, zO.GYD, zO.HKD, zO.HNL, zO.HRK, zO.HTG, zO.HUF, zO.IDR, zO.ILS, zO.INR, zO.IQD, zO.IRR, zO.ISK, zO.JMD, zO.JOD, zO.JPY, zO.KES, zO.KGS, zO.KHR, zO.KMF, zO.KPW, zO.KRW, zO.KWD, zO.KYD, zO.KZT, zO.LAK, zO.LBP, zO.LKR, zO.LRD, zO.LSL, zO.LTL, zO.LVL, zO.LYD, zO.MAD, zO.MDL, zO.MGA, zO.MKD, zO.MMK, zO.MNT, zO.MOP, zO.MRO, zO.MUR, zO.MVR, zO.MWK, zO.MXN, zO.MXV, zO.MYR, zO.MZN, zO.NAD, zO.NGN, zO.NIO, zO.NOK, zO.NPR, zO.NZD, zO.OMR, zO.PAB, zO.PEN, zO.PGK, zO.PHP, zO.PKR, zO.PLN, zO.PYG, zO.QAR, zO.RON, zO.RSD, zO.RUB, zO.RWF, zO.SAR, zO.SBD, zO.SCR, zO.SDG, zO.SEK, zO.SGD, zO.SHP, zO.SLL, zO.SOS, zO.SRD, zO.SSP, zO.STD, zO.SVC, zO.SYP, zO.SZL, zO.THB, zO.TJS, zO.TMT, zO.TND, zO.TOP, zO.TRY, zO.TTD, zO.TWD, zO.TZS, zO.UAH, zO.UGX, zO.USD, zO.USN, zO.USS, zO.UYI, zO.UYU, zO.UZS, zO.VEF, zO.VND, zO.VUV, zO.WST, zO.XAF, zO.XAG, zO.XAU, zO.XBA, zO.XBB, zO.XBC, zO.XBD, zO.XCD, zO.XDR, zO.XFU, zO.XOF, zO.XPD, zO.XPF, zO.XPT, zO.XSU, zO.XTS, zO.XUA, zO.YER, zO.ZAR, zO.ZMW, zO.ZWL;
    var SO = {
      exports: {}
    };
    ! function(qq, Eq) {
      var gq = "__lodash_hash_undefined__",
        Yq = 9007199254740991,
        Oq = "[object Arguments]",
        mq = "[object Array]",
        xq = "[object Boolean]",
        Aq = "[object Date]",
        cq = "[object Error]",
        uq = "[object Function]",
        Bq = "[object Map]",
        Wq = "[object Number]",
        Nq = "[object Object]",
        aq = "[object Promise]",
        Vq = "[object RegExp]",
        dq = "[object Set]",
        jq = "[object String]",
        Hq = "[object Symbol]",
        oq = "[object WeakMap]",
        Pq = "[object ArrayBuffer]",
        Qq = "[object DataView]",
        yq = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        tq = /^\w*$/,
        rq = /^\./,
        vq = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        hq = /\\(\\)?/g,
        nq = /^\[object .+?Constructor\]$/,
        bq = /^(?:0|[1-9]\d*)$/,
        iq = {};
      iq["[object Float32Array]"] = iq["[object Float64Array]"] = iq["[object Int8Array]"] = iq["[object Int16Array]"] = iq["[object Int32Array]"] = iq["[object Uint8Array]"] = iq["[object Uint8ClampedArray]"] = iq["[object Uint16Array]"] = iq["[object Uint32Array]"] = !0, iq[Oq] = iq[mq] = iq[Pq] = iq[xq] = iq[Qq] = iq[Aq] = iq[cq] = iq[uq] = iq[Bq] = iq[Wq] = iq[Nq] = iq[Vq] = iq[dq] = iq[jq] = iq[oq] = !1;
      var Zq = "object" == typeof lq && lq && lq.Object === Object && lq,
        fq = "object" == typeof self && self && self.Object === Object && self,
        Mq = Zq || fq || Function("return this")(),
        Tq = Eq && !Eq.nodeType && Eq,
        zq = Tq && qq && !qq.nodeType && qq,
        Sq = zq && zq.exports === Tq && Zq.process,
        pq = function() {
          try {
            return Sq && Sq.binding("util")
          } catch (qq) {}
        }(),
        Gq = pq && pq.isTypedArray;

      function Lq(qq, Eq) {
        for (var gq = -1, Yq = qq ? qq.length : 0; ++gq < Yq && !1 !== Eq(qq[gq], gq, qq););
        return qq
      }

      function Jq(qq, Eq) {
        for (var gq = -1, Yq = qq ? qq.length : 0; ++gq < Yq;)
          if (Eq(qq[gq], gq, qq)) return !0;
        return !1
      }

      function kq(qq) {
        var Eq = !1;
        if (null != qq && "function" != typeof qq.toString) try {
          Eq = !!(qq + "")
        } catch (gq) {}
        return Eq
      }

      function Rq(qq) {
        var Eq = -1,
          gq = Array(qq.size);
        return qq.forEach((function(qq, Yq) {
          gq[++Eq] = [Yq, qq]
        })), gq
      }

      function Uq(qq, Eq) {
        return function(gq) {
          return qq(Eq(gq))
        }
      }

      function Fq(qq) {
        var Eq = -1,
          gq = Array(qq.size);
        return qq.forEach((function(qq) {
          gq[++Eq] = qq
        })), gq
      }
      var sq = Array.prototype,
        Xq = Function.prototype,
        wq = Object.prototype,
        Kq = Mq["__core-js_shared__"],
        Cq = function() {
          var qq = /[^.]+$/.exec(Kq && Kq.keys && Kq.keys.IE_PROTO || "");
          return qq ? "Symbol(src)_1." + qq : ""
        }(),
        Iq = Xq.toString,
        eq = wq.hasOwnProperty,
        Dq = wq.toString,
        qE = RegExp("^" + Iq.call(eq).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        EE = Mq.Symbol,
        gE = Mq.Uint8Array,
        YE = Uq(Object.getPrototypeOf, Object),
        lE = Object.create,
        OE = wq.propertyIsEnumerable,
        mE = sq.splice,
        xE = Uq(Object.keys, Object),
        AE = RE(Mq, "DataView"),
        cE = RE(Mq, "Map"),
        uE = RE(Mq, "Promise"),
        BE = RE(Mq, "Set"),
        WE = RE(Mq, "WeakMap"),
        NE = RE(Object, "create"),
        aE = IE(AE),
        VE = IE(cE),
        dE = IE(uE),
        jE = IE(BE),
        HE = IE(WE),
        oE = EE ? EE.prototype : void 0,
        PE = oE ? oE.valueOf : void 0,
        QE = oE ? oE.toString : void 0;

      function yE(qq) {
        var Eq = -1,
          gq = qq ? qq.length : 0;
        for (this.clear(); ++Eq < gq;) {
          var Yq = qq[Eq];
          this.set(Yq[0], Yq[1])
        }
      }

      function tE(qq) {
        var Eq = -1,
          gq = qq ? qq.length : 0;
        for (this.clear(); ++Eq < gq;) {
          var Yq = qq[Eq];
          this.set(Yq[0], Yq[1])
        }
      }

      function rE(qq) {
        var Eq = -1,
          gq = qq ? qq.length : 0;
        for (this.clear(); ++Eq < gq;) {
          var Yq = qq[Eq];
          this.set(Yq[0], Yq[1])
        }
      }

      function vE(qq) {
        var Eq = -1,
          gq = qq ? qq.length : 0;
        for (this.__data__ = new rE; ++Eq < gq;) this.add(qq[Eq])
      }

      function hE(qq) {
        this.__data__ = new tE(qq)
      }

      function nE(qq, Eq) {
        var gq = Eg(qq) || qg(qq) ? function(qq, Eq) {
            for (var gq = -1, Yq = Array(qq); ++gq < qq;) Yq[gq] = Eq(gq);
            return Yq
          }(qq.length, String) : [],
          Yq = gq.length,
          lq = !!Yq;
        for (var Oq in qq) !Eq && !eq.call(qq, Oq) || lq && ("length" == Oq || FE(Oq, Yq)) || gq.push(Oq);
        return gq
      }

      function bE(qq, Eq) {
        for (var gq = qq.length; gq--;)
          if (DE(qq[gq][0], Eq)) return gq;
        return -1
      }
      yE.prototype.clear = function() {
        this.__data__ = NE ? NE(null) : {}
      }, yE.prototype.delete = function(qq) {
        return this.has(qq) && delete this.__data__[qq]
      }, yE.prototype.get = function(qq) {
        var Eq = this.__data__;
        if (NE) {
          var Yq = Eq[qq];
          return Yq === gq ? void 0 : Yq
        }
        return eq.call(Eq, qq) ? Eq[qq] : void 0
      }, yE.prototype.has = function(qq) {
        var Eq = this.__data__;
        return NE ? void 0 !== Eq[qq] : eq.call(Eq, qq)
      }, yE.prototype.set = function(qq, Eq) {
        return this.__data__[qq] = NE && void 0 === Eq ? gq : Eq, this
      }, tE.prototype.clear = function() {
        this.__data__ = []
      }, tE.prototype.delete = function(qq) {
        var Eq = this.__data__,
          gq = bE(Eq, qq);
        return !(gq < 0) && (gq == Eq.length - 1 ? Eq.pop() : mE.call(Eq, gq, 1), !0)
      }, tE.prototype.get = function(qq) {
        var Eq = this.__data__,
          gq = bE(Eq, qq);
        return gq < 0 ? void 0 : Eq[gq][1]
      }, tE.prototype.has = function(qq) {
        return bE(this.__data__, qq) > -1
      }, tE.prototype.set = function(qq, Eq) {
        var gq = this.__data__,
          Yq = bE(gq, qq);
        return Yq < 0 ? gq.push([qq, Eq]) : gq[Yq][1] = Eq, this
      }, rE.prototype.clear = function() {
        this.__data__ = {
          hash: new yE,
          map: new(cE || tE),
          string: new yE
        }
      }, rE.prototype.delete = function(qq) {
        return kE(this, qq).delete(qq)
      }, rE.prototype.get = function(qq) {
        return kE(this, qq).get(qq)
      }, rE.prototype.has = function(qq) {
        return kE(this, qq).has(qq)
      }, rE.prototype.set = function(qq, Eq) {
        return kE(this, qq).set(qq, Eq), this
      }, vE.prototype.add = vE.prototype.push = function(qq) {
        return this.__data__.set(qq, gq), this
      }, vE.prototype.has = function(qq) {
        return this.__data__.has(qq)
      }, hE.prototype.clear = function() {
        this.__data__ = new tE
      }, hE.prototype.delete = function(qq) {
        return this.__data__.delete(qq)
      }, hE.prototype.get = function(qq) {
        return this.__data__.get(qq)
      }, hE.prototype.has = function(qq) {
        return this.__data__.has(qq)
      }, hE.prototype.set = function(qq, Eq) {
        var gq = this.__data__;
        if (gq instanceof tE) {
          var Yq = gq.__data__;
          if (!cE || Yq.length < 199) return Yq.push([qq, Eq]), this;
          gq = this.__data__ = new rE(Yq)
        }
        return gq.set(qq, Eq), this
      };
      var iE, ZE = function(qq, Eq, gq) {
        for (var Yq = -1, lq = Object(qq), Oq = gq(qq), mq = Oq.length; mq--;) {
          var xq = Oq[iE ? mq : ++Yq];
          if (!1 === Eq(lq[xq], xq, lq)) break
        }
        return qq
      };

      function fE(qq, Eq) {
        return qq && ZE(qq, Eq, ug)
      }

      function ME(qq, Eq) {
        for (var gq = 0, Yq = (Eq = sE(Eq, qq) ? [Eq] : LE(Eq)).length; null != qq && gq < Yq;) qq = qq[CE(Eq[gq++])];
        return gq && gq == Yq ? qq : void 0
      }

      function TE(qq, Eq) {
        return null != qq && Eq in Object(qq)
      }

      function zE(qq, Eq, gq, Yq, lq) {
        return qq === Eq || (null == qq || null == Eq || !Og(qq) && !mg(Eq) ? qq !== qq && Eq !== Eq : function(qq, Eq, gq, Yq, lq, uq) {
          var aq = Eg(qq),
            oq = Eg(Eq),
            yq = mq,
            tq = mq;
          aq || (yq = (yq = UE(qq)) == Oq ? Nq : yq);
          oq || (tq = (tq = UE(Eq)) == Oq ? Nq : tq);
          var rq = yq == Nq && !kq(qq),
            vq = tq == Nq && !kq(Eq),
            hq = yq == tq;
          if (hq && !rq) return uq || (uq = new hE), aq || cg(qq) ? JE(qq, Eq, gq, Yq, lq, uq) : function(qq, Eq, gq, Yq, lq, Oq, mq) {
            switch (gq) {
              case Qq:
                if (qq.byteLength != Eq.byteLength || qq.byteOffset != Eq.byteOffset) return !1;
                qq = qq.buffer, Eq = Eq.buffer;
              case Pq:
                return !(qq.byteLength != Eq.byteLength || !Yq(new gE(qq), new gE(Eq)));
              case xq:
              case Aq:
              case Wq:
                return DE(+qq, +Eq);
              case cq:
                return qq.name == Eq.name && qq.message == Eq.message;
              case Vq:
              case jq:
                return qq == Eq + "";
              case Bq:
                var uq = Rq;
              case dq:
                var Nq = 2 & Oq;
                if (uq || (uq = Fq), qq.size != Eq.size && !Nq) return !1;
                var aq = mq.get(qq);
                if (aq) return aq == Eq;
                Oq |= 1, mq.set(qq, Eq);
                var oq = JE(uq(qq), uq(Eq), Yq, lq, Oq, mq);
                return mq.delete(qq), oq;
              case Hq:
                if (PE) return PE.call(qq) == PE.call(Eq)
            }
            return !1
          }(qq, Eq, yq, gq, Yq, lq, uq);
          if (!(2 & lq)) {
            var nq = rq && eq.call(qq, "__wrapped__"),
              bq = vq && eq.call(Eq, "__wrapped__");
            if (nq || bq) {
              var iq = nq ? qq.value() : qq,
                Zq = bq ? Eq.value() : Eq;
              return uq || (uq = new hE), gq(iq, Zq, Yq, lq, uq)
            }
          }
          if (!hq) return !1;
          return uq || (uq = new hE),
            function(qq, Eq, gq, Yq, lq, Oq) {
              var mq = 2 & lq,
                xq = ug(qq),
                Aq = xq.length,
                cq = ug(Eq),
                uq = cq.length;
              if (Aq != uq && !mq) return !1;
              var Bq = Aq;
              for (; Bq--;) {
                var Wq = xq[Bq];
                if (!(mq ? Wq in Eq : eq.call(Eq, Wq))) return !1
              }
              var Nq = Oq.get(qq);
              if (Nq && Oq.get(Eq)) return Nq == Eq;
              var aq = !0;
              Oq.set(qq, Eq), Oq.set(Eq, qq);
              var Vq = mq;
              for (; ++Bq < Aq;) {
                var dq = qq[Wq = xq[Bq]],
                  jq = Eq[Wq];
                if (Yq) var Hq = mq ? Yq(jq, dq, Wq, Eq, qq, Oq) : Yq(dq, jq, Wq, qq, Eq, Oq);
                if (!(void 0 === Hq ? dq === jq || gq(dq, jq, Yq, lq, Oq) : Hq)) {
                  aq = !1;
                  break
                }
                Vq || (Vq = "constructor" == Wq)
              }
              if (aq && !Vq) {
                var oq = qq.constructor,
                  Pq = Eq.constructor;
                oq == Pq || !("constructor" in qq) || !("constructor" in Eq) || "function" == typeof oq && oq instanceof oq && "function" == typeof Pq && Pq instanceof Pq || (aq = !1)
              }
              return Oq.delete(qq), Oq.delete(Eq), aq
            }(qq, Eq, gq, Yq, lq, uq)
        }(qq, Eq, zE, gq, Yq, lq))
      }

      function SE(qq) {
        return !(!Og(qq) || (Eq = qq, Cq && Cq in Eq)) && (Yg(qq) || kq(qq) ? qE : nq).test(IE(qq));
        var Eq
      }

      function pE(qq) {
        return "function" == typeof qq ? qq : null == qq ? Bg : "object" == typeof qq ? Eg(qq) ? function(qq, Eq) {
          if (sE(qq) && XE(Eq)) return wE(CE(qq), Eq);
          return function(gq) {
            var Yq = function(qq, Eq, gq) {
              var Yq = null == qq ? void 0 : ME(qq, Eq);
              return void 0 === Yq ? gq : Yq
            }(gq, qq);
            return void 0 === Yq && Yq === Eq ? function(qq, Eq) {
              return null != qq && function(qq, Eq, gq) {
                Eq = sE(Eq, qq) ? [Eq] : LE(Eq);
                var Yq, lq = -1,
                  Oq = Eq.length;
                for (; ++lq < Oq;) {
                  var mq = CE(Eq[lq]);
                  if (!(Yq = null != qq && gq(qq, mq))) break;
                  qq = qq[mq]
                }
                if (Yq) return Yq;
                Oq = qq ? qq.length : 0;
                return !!Oq && lg(Oq) && FE(mq, Oq) && (Eg(qq) || qg(qq))
              }(qq, Eq, TE)
            }(gq, qq) : zE(Eq, Yq, void 0, 3)
          }
        }(qq[0], qq[1]) : function(qq) {
          var Eq = function(qq) {
            var Eq = ug(qq),
              gq = Eq.length;
            for (; gq--;) {
              var Yq = Eq[gq],
                lq = qq[Yq];
              Eq[gq] = [Yq, lq, XE(lq)]
            }
            return Eq
          }(qq);
          if (1 == Eq.length && Eq[0][2]) return wE(Eq[0][0], Eq[0][1]);
          return function(gq) {
            return gq === qq || function(qq, Eq, gq, Yq) {
              var lq = gq.length,
                Oq = lq,
                mq = !Yq;
              if (null == qq) return !Oq;
              for (qq = Object(qq); lq--;) {
                var xq = gq[lq];
                if (mq && xq[2] ? xq[1] !== qq[xq[0]] : !(xq[0] in qq)) return !1
              }
              for (; ++lq < Oq;) {
                var Aq = (xq = gq[lq])[0],
                  cq = qq[Aq],
                  uq = xq[1];
                if (mq && xq[2]) {
                  if (void 0 === cq && !(Aq in qq)) return !1
                } else {
                  var Bq = new hE;
                  if (Yq) var Wq = Yq(cq, uq, Aq, qq, Eq, Bq);
                  if (!(void 0 === Wq ? zE(uq, cq, Yq, 3, Bq) : Wq)) return !1
                }
              }
              return !0
            }(gq, qq, Eq)
          }
        }(qq) : function(qq) {
          return sE(qq) ? (Eq = CE(qq), function(qq) {
            return null == qq ? void 0 : qq[Eq]
          }) : function(qq) {
            return function(Eq) {
              return ME(Eq, qq)
            }
          }(qq);
          var Eq
        }(qq)
      }

      function GE(qq) {
        if (! function(qq) {
            var Eq = qq && qq.constructor,
              gq = "function" == typeof Eq && Eq.prototype || wq;
            return qq === gq
          }(qq)) return xE(qq);
        var Eq = [];
        for (var gq in Object(qq)) eq.call(qq, gq) && "constructor" != gq && Eq.push(gq);
        return Eq
      }

      function LE(qq) {
        return Eg(qq) ? qq : KE(qq)
      }

      function JE(qq, Eq, gq, Yq, lq, Oq) {
        var mq = 2 & lq,
          xq = qq.length,
          Aq = Eq.length;
        if (xq != Aq && !(mq && Aq > xq)) return !1;
        var cq = Oq.get(qq);
        if (cq && Oq.get(Eq)) return cq == Eq;
        var uq = -1,
          Bq = !0,
          Wq = 1 & lq ? new vE : void 0;
        for (Oq.set(qq, Eq), Oq.set(Eq, qq); ++uq < xq;) {
          var Nq = qq[uq],
            aq = Eq[uq];
          if (Yq) var Vq = mq ? Yq(aq, Nq, uq, Eq, qq, Oq) : Yq(Nq, aq, uq, qq, Eq, Oq);
          if (void 0 !== Vq) {
            if (Vq) continue;
            Bq = !1;
            break
          }
          if (Wq) {
            if (!Jq(Eq, (function(qq, Eq) {
                if (!Wq.has(Eq) && (Nq === qq || gq(Nq, qq, Yq, lq, Oq))) return Wq.add(Eq)
              }))) {
              Bq = !1;
              break
            }
          } else if (Nq !== aq && !gq(Nq, aq, Yq, lq, Oq)) {
            Bq = !1;
            break
          }
        }
        return Oq.delete(qq), Oq.delete(Eq), Bq
      }

      function kE(qq, Eq) {
        var gq = qq.__data__;
        return function(qq) {
          var Eq = typeof qq;
          return "string" == Eq || "number" == Eq || "symbol" == Eq || "boolean" == Eq ? "__proto__" !== qq : null === qq
        }(Eq) ? gq["string" == typeof Eq ? "string" : "hash"] : gq.map
      }

      function RE(qq, Eq) {
        var gq = function(qq, Eq) {
          return null == qq ? void 0 : qq[Eq]
        }(qq, Eq);
        return SE(gq) ? gq : void 0
      }
      var UE = function(qq) {
        return Dq.call(qq)
      };

      function FE(qq, Eq) {
        return !!(Eq = null == Eq ? Yq : Eq) && ("number" == typeof qq || bq.test(qq)) && qq > -1 && qq % 1 == 0 && qq < Eq
      }

      function sE(qq, Eq) {
        if (Eg(qq)) return !1;
        var gq = typeof qq;
        return !("number" != gq && "symbol" != gq && "boolean" != gq && null != qq && !xg(qq)) || (tq.test(qq) || !yq.test(qq) || null != Eq && qq in Object(Eq))
      }

      function XE(qq) {
        return qq === qq && !Og(qq)
      }

      function wE(qq, Eq) {
        return function(gq) {
          return null != gq && (gq[qq] === Eq && (void 0 !== Eq || qq in Object(gq)))
        }
      }(AE && UE(new AE(new ArrayBuffer(1))) != Qq || cE && UE(new cE) != Bq || uE && UE(uE.resolve()) != aq || BE && UE(new BE) != dq || WE && UE(new WE) != oq) && (UE = function(qq) {
        var Eq = Dq.call(qq),
          gq = Eq == Nq ? qq.constructor : void 0,
          Yq = gq ? IE(gq) : void 0;
        if (Yq) switch (Yq) {
          case aE:
            return Qq;
          case VE:
            return Bq;
          case dE:
            return aq;
          case jE:
            return dq;
          case HE:
            return oq
        }
        return Eq
      });
      var KE = eE((function(qq) {
        var Eq;
        qq = null == (Eq = qq) ? "" : function(qq) {
          if ("string" == typeof qq) return qq;
          if (xg(qq)) return QE ? QE.call(qq) : "";
          var Eq = qq + "";
          return "0" == Eq && 1 / qq == -1 / 0 ? "-0" : Eq
        }(Eq);
        var gq = [];
        return rq.test(qq) && gq.push(""), qq.replace(vq, (function(qq, Eq, Yq, lq) {
          gq.push(Yq ? lq.replace(hq, "$1") : Eq || qq)
        })), gq
      }));

      function CE(qq) {
        if ("string" == typeof qq || xg(qq)) return qq;
        var Eq = qq + "";
        return "0" == Eq && 1 / qq == -1 / 0 ? "-0" : Eq
      }

      function IE(qq) {
        if (null != qq) {
          try {
            return Iq.call(qq)
          } catch (Eq) {}
          try {
            return qq + ""
          } catch (Eq) {}
        }
        return ""
      }

      function eE(qq, Eq) {
        if ("function" != typeof qq || Eq && "function" != typeof Eq) throw new TypeError("Expected a function");
        var gq = function() {
          var Yq = arguments,
            lq = Eq ? Eq.apply(this, Yq) : Yq[0],
            Oq = gq.cache;
          if (Oq.has(lq)) return Oq.get(lq);
          var mq = qq.apply(this, Yq);
          return gq.cache = Oq.set(lq, mq), mq
        };
        return gq.cache = new(eE.Cache || rE), gq
      }

      function DE(qq, Eq) {
        return qq === Eq || qq !== qq && Eq !== Eq
      }

      function qg(qq) {
        return function(qq) {
          return mg(qq) && gg(qq)
        }(qq) && eq.call(qq, "callee") && (!OE.call(qq, "callee") || Dq.call(qq) == Oq)
      }
      eE.Cache = rE;
      var Eg = Array.isArray;

      function gg(qq) {
        return null != qq && lg(qq.length) && !Yg(qq)
      }

      function Yg(qq) {
        var Eq = Og(qq) ? Dq.call(qq) : "";
        return Eq == uq || "[object GeneratorFunction]" == Eq
      }

      function lg(qq) {
        return "number" == typeof qq && qq > -1 && qq % 1 == 0 && qq <= Yq
      }

      function Og(qq) {
        var Eq = typeof qq;
        return !!qq && ("object" == Eq || "function" == Eq)
      }

      function mg(qq) {
        return !!qq && "object" == typeof qq
      }

      function xg(qq) {
        return "symbol" == typeof qq || mg(qq) && Dq.call(qq) == Hq
      }
      var Ag, cg = Gq ? (Ag = Gq, function(qq) {
        return Ag(qq)
      }) : function(qq) {
        return mg(qq) && lg(qq.length) && !!iq[Dq.call(qq)]
      };

      function ug(qq) {
        return gg(qq) ? nE(qq) : GE(qq)
      }

      function Bg(qq) {
        return qq
      }
      qq.exports = function(qq, Eq, gq) {
        var Yq, lq = Eg(qq) || cg(qq);
        if (Eq = pE(Eq), null == gq)
          if (lq || Og(qq)) {
            var Oq = qq.constructor;
            gq = lq ? Eg(qq) ? new Oq : [] : Yg(Oq) ? Og(Yq = YE(qq)) ? lE(Yq) : {} : {}
          } else gq = {};
        return (lq ? Lq : fE)(qq, (function(qq, Yq, lq) {
          return Eq(gq, qq, Yq, lq)
        })), gq
      }
    }(SO, SO.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      m: pO
    } = Yq
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);