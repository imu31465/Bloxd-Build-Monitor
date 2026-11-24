export const id = 149;
export const ids = [149];
export const modules = {
  8328: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => DD,
      e: () => FV
    });
    var Ot = {};
    Vt.r(Ot), Vt.d(Ot, {
      d: () => qO,
      g: () => dO,
      f: () => mO,
      h: () => TV,
      l: () => xV,
      p: () => cO,
      s: () => nV,
      w: () => PO,
      x: () => uO,
      y: () => IO,
      C: () => gV,
      E: () => hO,
      I: () => SO,
      K: () => RO,
      P: () => sV,
      N: () => VO,
      Q: () => WO,
      R: () => vO
    });
    var qt = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function Dt(tt) {
      return tt && tt.__esModule && Object.prototype.hasOwnProperty.call(tt, "default") ? tt.default : tt
    }
    var mt = {
      exports: {}
    };
    ! function(tt) {
      var et = Object.prototype.hasOwnProperty,
        Vt = "~";

      function Ot() {}

      function qt(tt, et, Vt) {
        this.pE = tt, this.context = et, this.once = Vt || !1
      }

      function Dt(tt, et, Ot, Dt, mt) {
        if ("function" !== typeof Ot) throw new TypeError("The listener must be a function");
        var dt = new qt(Ot, Dt || tt, mt),
          jt = Vt ? Vt + et : et;
        return tt._events[jt] ? tt._events[jt].pE ? tt._events[jt] = [tt._events[jt], dt] : tt._events[jt].push(dt) : (tt._events[jt] = dt, tt._eventsCount++), tt
      }

      function mt(tt, et) {
        0 === --tt._eventsCount ? tt._events = new Ot : delete tt._events[et]
      }

      function dt() {
        this._events = new Ot, this._eventsCount = 0
      }
      Object.create && (Ot.prototype = Object.create(null), (new Ot).__proto__ || (Vt = !1)), dt.prototype.eventNames = function() {
        var tt, Ot, qt = [];
        if (0 === this._eventsCount) return qt;
        for (Ot in tt = this._events) et.call(tt, Ot) && qt.push(Vt ? Ot.slice(1) : Ot);
        return Object.getOwnPropertySymbols ? qt.concat(Object.getOwnPropertySymbols(tt)) : qt
      }, dt.prototype.listeners = function(tt) {
        var et = Vt ? Vt + tt : tt,
          Ot = this._events[et];
        if (!Ot) return [];
        if (Ot.pE) return [Ot.pE];
        for (var qt = 0, Dt = Ot.length, mt = new Array(Dt); qt < Dt; qt++) mt[qt] = Ot[qt].pE;
        return mt
      }, dt.prototype.listenerCount = function(tt) {
        var et = Vt ? Vt + tt : tt,
          Ot = this._events[et];
        return Ot ? Ot.pE ? 1 : Ot.length : 0
      }, dt.prototype.emit = function(tt, et, Ot, qt, Dt, mt) {
        var dt = Vt ? Vt + tt : tt;
        if (!this._events[dt]) return !1;
        var jt, Ht, Xt = this._events[dt],
          Qt = arguments.length;
        if (Xt.pE) {
          switch (Xt.once && this.removeListener(tt, Xt.pE, void 0, !0), Qt) {
            case 1:
              return Xt.pE.call(Xt.context), !0;
            case 2:
              return Xt.pE.call(Xt.context, et), !0;
            case 3:
              return Xt.pE.call(Xt.context, et, Ot), !0;
            case 4:
              return Xt.pE.call(Xt.context, et, Ot, qt), !0;
            case 5:
              return Xt.pE.call(Xt.context, et, Ot, qt, Dt), !0;
            case 6:
              return Xt.pE.call(Xt.context, et, Ot, qt, Dt, mt), !0
          }
          for (Ht = 1, jt = new Array(Qt - 1); Ht < Qt; Ht++) jt[Ht - 1] = arguments[Ht];
          Xt.pE.apply(Xt.context, jt)
        } else {
          var lt, Et = Xt.length;
          for (Ht = 0; Ht < Et; Ht++) switch (Xt[Ht].once && this.removeListener(tt, Xt[Ht].pE, void 0, !0), Qt) {
            case 1:
              Xt[Ht].pE.call(Xt[Ht].context);
              break;
            case 2:
              Xt[Ht].pE.call(Xt[Ht].context, et);
              break;
            case 3:
              Xt[Ht].pE.call(Xt[Ht].context, et, Ot);
              break;
            case 4:
              Xt[Ht].pE.call(Xt[Ht].context, et, Ot, qt);
              break;
            default:
              if (!jt)
                for (lt = 1, jt = new Array(Qt - 1); lt < Qt; lt++) jt[lt - 1] = arguments[lt];
              Xt[Ht].pE.apply(Xt[Ht].context, jt)
          }
        }
        return !0
      }, dt.prototype.on = function(tt, et, Vt) {
        return Dt(this, tt, et, Vt, !1)
      }, dt.prototype.once = function(tt, et, Vt) {
        return Dt(this, tt, et, Vt, !0)
      }, dt.prototype.removeListener = function(tt, et, Ot, qt) {
        var Dt = Vt ? Vt + tt : tt;
        if (!this._events[Dt]) return this;
        if (!et) return mt(this, Dt), this;
        var dt = this._events[Dt];
        if (dt.pE) dt.pE !== et || qt && !dt.once || Ot && dt.context !== Ot || mt(this, Dt);
        else {
          for (var jt = 0, Ht = [], Xt = dt.length; jt < Xt; jt++)(dt[jt].pE !== et || qt && !dt[jt].once || Ot && dt[jt].context !== Ot) && Ht.push(dt[jt]);
          Ht.length ? this._events[Dt] = 1 === Ht.length ? Ht[0] : Ht : mt(this, Dt)
        }
        return this
      }, dt.prototype.vN = function(tt) {
        var et;
        return tt ? (et = Vt ? Vt + tt : tt, this._events[et] && mt(this, et)) : (this._events = new Ot, this._eventsCount = 0), this
      }, dt.prototype.off = dt.prototype.removeListener, dt.prototype.addListener = dt.prototype.on, dt.prefixed = Vt, dt.EventEmitter = dt, tt.exports = dt
    }(mt);
    var dt, jt, Ht = Dt(mt.exports);
    ! function(tt) {
      tt.assertEqual = tt => tt, tt.assertIs = function(tt) {}, tt.assertNever = function(tt) {
        throw new Error
      }, tt.arrayToEnum = tt => {
        const et = {};
        for (const Vt of tt) et[Vt] = Vt;
        return et
      }, tt.getValidEnumValues = et => {
        const Vt = tt.objectKeys(et).filter((tt => "number" !== typeof et[et[tt]])),
          Ot = {};
        for (const tt of Vt) Ot[tt] = et[tt];
        return tt.objectValues(Ot)
      }, tt.objectValues = et => tt.objectKeys(et).map((function(tt) {
        return et[tt]
      })), tt.objectKeys = "function" === typeof Object.keys ? tt => Object.keys(tt) : tt => {
        const et = [];
        for (const Vt in tt) Object.prototype.hasOwnProperty.call(tt, Vt) && et.push(Vt);
        return et
      }, tt.find = (tt, et) => {
        for (const Vt of tt)
          if (et(Vt)) return Vt
      }, tt.isInteger = "function" === typeof Number.isInteger ? tt => Number.isInteger(tt) : tt => "number" === typeof tt && isFinite(tt) && Math.floor(tt) === tt, tt.joinValues = function(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return tt.map((tt => "string" === typeof tt ? `'${tt}'` : tt)).join(et)
      }, tt.jsonStringifyReplacer = (tt, et) => "bigint" === typeof et ? et.toString() : et
    }(dt || (dt = {})),
    function(tt) {
      tt.mergeShapes = (tt, et) => ({
        ...tt,
        ...et
      })
    }(jt || (jt = {}));
    const Xt = dt.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      Qt = tt => {
        switch (typeof tt) {
          case "undefined":
            return Xt.undefined;
          case "string":
            return Xt.string;
          case "number":
            return isNaN(tt) ? Xt.nan : Xt.number;
          case "boolean":
            return Xt.boolean;
          case "function":
            return Xt.function;
          case "bigint":
            return Xt.bigint;
          case "symbol":
            return Xt.symbol;
          case "object":
            return Array.isArray(tt) ? Xt.array : null === tt ? Xt.null : tt.then && "function" === typeof tt.then && tt.catch && "function" === typeof tt.catch ? Xt.promise : "undefined" !== typeof Map && tt instanceof Map ? Xt.map : "undefined" !== typeof Set && tt instanceof Set ? Xt.set : "undefined" !== typeof Date && tt instanceof Date ? Xt.date : Xt.object;
          default:
            return Xt.unknown
        }
      },
      lt = dt.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class Et extends Error {
      constructor(tt) {
        var et;
        super(), et = this, this.issues = [], this.addIssue = tt => {
          this.issues = [...this.issues, tt]
        }, this.addIssues = function() {
          let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          et.issues = [...et.issues, ...tt]
        };
        const Vt = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, Vt) : this.__proto__ = Vt, this.name = "ZodError", this.issues = tt
      }
      get errors() {
        return this.issues
      }
      format(tt) {
        const et = tt || function(tt) {
            return tt.message
          },
          Vt = {
            _errors: []
          },
          Ot = tt => {
            for (const qt of tt.issues)
              if ("invalid_union" === qt.code) qt.unionErrors.map(Ot);
              else if ("invalid_return_type" === qt.code) Ot(qt.returnTypeError);
            else if ("invalid_arguments" === qt.code) Ot(qt.argumentsError);
            else if (0 === qt.path.length) Vt._errors.push(et(qt));
            else {
              let tt = Vt,
                Ot = 0;
              for (; Ot < qt.path.length;) {
                const Vt = qt.path[Ot];
                Ot === qt.path.length - 1 ? (tt[Vt] = tt[Vt] || {
                  _errors: []
                }, tt[Vt]._errors.push(et(qt))) : tt[Vt] = tt[Vt] || {
                  _errors: []
                }, tt = tt[Vt], Ot++
              }
            }
          };
        return Ot(this), Vt
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, dt.jsonStringifyReplacer, 2)
      }
      get sE() {
        return 0 === this.issues.length
      }
      flatten() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tt => tt.message;
        const et = {},
          Vt = [];
        for (const Ot of this.issues) Ot.path.length > 0 ? (et[Ot.path[0]] = et[Ot.path[0]] || [], et[Ot.path[0]].push(tt(Ot))) : Vt.push(tt(Ot));
        return {
          formErrors: Vt,
          fieldErrors: et
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    Et.create = tt => new Et(tt);
    const ft = (tt, et) => {
      let Vt;
      switch (tt.code) {
        case lt.invalid_type:
          Vt = tt.received === Xt.undefined ? "Required" : `Expected ${tt.expected}, received ${tt.received}`;
          break;
        case lt.invalid_literal:
          Vt = `Invalid literal value, expected ${JSON.stringify(tt.expected,dt.jsonStringifyReplacer)}`;
          break;
        case lt.unrecognized_keys:
          Vt = `Unrecognized key(s) in object: ${dt.joinValues(tt.keys,", ")}`;
          break;
        case lt.invalid_union:
          Vt = "Invalid input";
          break;
        case lt.invalid_union_discriminator:
          Vt = `Invalid discriminator value. Expected ${dt.joinValues(tt.options)}`;
          break;
        case lt.invalid_enum_value:
          Vt = `Invalid enum value. Expected ${dt.joinValues(tt.options)}, received '${tt.received}'`;
          break;
        case lt.invalid_arguments:
          Vt = "Invalid function arguments";
          break;
        case lt.invalid_return_type:
          Vt = "Invalid function return type";
          break;
        case lt.invalid_date:
          Vt = "Invalid date";
          break;
        case lt.invalid_string:
          "object" === typeof tt.validation ? "includes" in tt.validation ? (Vt = `Invalid input: must include "${tt.validation.includes}"`, "number" === typeof tt.validation.position && (Vt = `${Vt} at one or more positions greater than or equal to ${tt.validation.position}`)) : "startsWith" in tt.validation ? Vt = `Invalid input: must start with "${tt.validation.startsWith}"` : "endsWith" in tt.validation ? Vt = `Invalid input: must end with "${tt.validation.endsWith}"` : dt.assertNever(tt.validation) : Vt = "regex" !== tt.validation ? `Invalid ${tt.validation}` : "Invalid";
          break;
        case lt.too_small:
          Vt = "array" === tt.type ? `Array must contain ${tt.exact?"exactly":tt.inclusive?"at least":"more than"} ${tt.minimum} element(s)` : "string" === tt.type ? `String must contain ${tt.exact?"exactly":tt.inclusive?"at least":"over"} ${tt.minimum} character(s)` : "number" === tt.type ? `Number must be ${tt.exact?"exactly equal to ":tt.inclusive?"greater than or equal to ":"greater than "}${tt.minimum}` : "date" === tt.type ? `Date must be ${tt.exact?"exactly equal to ":tt.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(tt.minimum))}` : "Invalid input";
          break;
        case lt.too_big:
          Vt = "array" === tt.type ? `Array must contain ${tt.exact?"exactly":tt.inclusive?"at most":"less than"} ${tt.maximum} element(s)` : "string" === tt.type ? `String must contain ${tt.exact?"exactly":tt.inclusive?"at most":"under"} ${tt.maximum} character(s)` : "number" === tt.type ? `Number must be ${tt.exact?"exactly":tt.inclusive?"less than or equal to":"less than"} ${tt.maximum}` : "bigint" === tt.type ? `BigInt must be ${tt.exact?"exactly":tt.inclusive?"less than or equal to":"less than"} ${tt.maximum}` : "date" === tt.type ? `Date must be ${tt.exact?"exactly":tt.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(tt.maximum))}` : "Invalid input";
          break;
        case lt.custom:
          Vt = "Invalid input";
          break;
        case lt.invalid_intersection_types:
          Vt = "Intersection results could not be merged";
          break;
        case lt.not_multiple_of:
          Vt = `Number must be a multiple of ${tt.multipleOf}`;
          break;
        case lt.not_finite:
          Vt = "Number must be finite";
          break;
        default:
          Vt = et.defaultError, dt.assertNever(tt)
      }
      return {
        message: Vt
      }
    };
    let wt = ft;

    function yt() {
      return wt
    }
    const Nt = tt => {
      const {
        data: et,
        path: Vt,
        errorMaps: Ot,
        issueData: qt
      } = tt, Dt = [...Vt, ...qt.path || []], mt = {
        ...qt,
        path: Dt
      };
      let dt = "";
      const jt = Ot.filter((tt => !!tt)).slice().reverse();
      for (const Ht of jt) dt = Ht(mt, {
        data: et,
        defaultError: dt
      }).message;
      return {
        ...qt,
        path: Dt,
        message: qt.message || dt
      }
    };

    function Mt(tt, et) {
      const Vt = Nt({
        issueData: et,
        data: tt.data,
        path: tt.path,
        errorMaps: [tt.common.contextualErrorMap, tt.schemaErrorMap, yt(), ft].filter((tt => !!tt))
      });
      tt.common.issues.push(Vt)
    }
    class bt {
      constructor() {
        this.value = "valid"
      }
      Sf() {
        "valid" === this.value && (this.value = "Sf")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(tt, et) {
        const Vt = [];
        for (const Ot of et) {
          if ("aborted" === Ot.status) return Jt;
          "Sf" === Ot.status && tt.Sf(), Vt.push(Ot.value)
        }
        return {
          status: tt.value,
          value: Vt
        }
      }
      static async mergeObjectAsync(tt, et) {
        const Vt = [];
        for (const Ot of et) Vt.push({
          key: await Ot.key,
          value: await Ot.value
        });
        return bt.mergeObjectSync(tt, Vt)
      }
      static mergeObjectSync(tt, et) {
        const Vt = {};
        for (const Ot of et) {
          const {
            key: et,
            value: qt
          } = Ot;
          if ("aborted" === et.status) return Jt;
          if ("aborted" === qt.status) return Jt;
          "Sf" === et.status && tt.Sf(), "Sf" === qt.status && tt.Sf(), "__proto__" === et.value || "undefined" === typeof qt.value && !Ot.alwaysSet || (Vt[et.value] = qt.value)
        }
        return {
          status: tt.value,
          value: Vt
        }
      }
    }
    const Jt = Object.freeze({
        status: "aborted"
      }),
      Ct = tt => ({
        status: "Sf",
        value: tt
      }),
      ut = tt => ({
        status: "valid",
        value: tt
      }),
      Kt = tt => "aborted" === tt.status,
      ht = tt => "Sf" === tt.status,
      vt = tt => "valid" === tt.status,
      Wt = tt => "undefined" !== typeof Promise && tt instanceof Promise;
    var St;
    ! function(tt) {
      tt.errToObj = tt => "string" === typeof tt ? {
        message: tt
      } : tt || {}, tt.toString = tt => "string" === typeof tt ? tt : null === tt || void 0 === tt ? void 0 : tt.message
    }(St || (St = {}));
    class ct {
      constructor(tt, et, Vt, Ot) {
        this._cachedPath = [], this.parent = tt, this.data = et, this._path = Vt, this._key = Ot
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const Rt = (tt, et) => {
      if (vt(et)) return {
        success: !0,
        data: et.value
      };
      if (!tt.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const et = new Et(tt.common.issues);
          return this._error = et, this._error
        }
      }
    };

    function It(tt) {
      if (!tt) return {};
      const {
        errorMap: et,
        invalid_type_error: Vt,
        required_error: Ot,
        description: qt
      } = tt;
      if (et && (Vt || Ot)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (et) return {
        errorMap: et,
        description: qt
      };
      return {
        errorMap: (tt, et) => "invalid_type" !== tt.code ? {
          message: et.defaultError
        } : "undefined" === typeof et.data ? {
          message: null !== Ot && void 0 !== Ot ? Ot : et.defaultError
        } : {
          message: null !== Vt && void 0 !== Vt ? Vt : et.defaultError
        },
        description: qt
      }
    }
    class Pt {
      constructor(tt) {
        this.spa = this.safeParseAsync, this._def = tt, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(tt) {
        return Qt(tt.data)
      }
      _getOrReturnCtx(tt, et) {
        return et || {
          common: tt.parent.common,
          data: tt.data,
          parsedType: Qt(tt.data),
          schemaErrorMap: this._def.errorMap,
          path: tt.path,
          parent: tt.parent
        }
      }
      _processInputParams(tt) {
        return {
          status: new bt,
          ctx: {
            common: tt.parent.common,
            data: tt.data,
            parsedType: Qt(tt.data),
            schemaErrorMap: this._def.errorMap,
            path: tt.path,
            parent: tt.parent
          }
        }
      }
      _parseSync(tt) {
        const et = this._parse(tt);
        if (Wt(et)) throw new Error("Synchronous parse encountered promise.");
        return et
      }
      _parseAsync(tt) {
        const et = this._parse(tt);
        return Promise.resolve(et)
      }
      parse(tt, et) {
        const Vt = this.safeParse(tt, et);
        if (Vt.success) return Vt.data;
        throw Vt.error
      }
      safeParse(tt, et) {
        var Vt;
        const Ot = {
            common: {
              issues: [],
              async: null !== (Vt = null === et || void 0 === et ? void 0 : et.async) && void 0 !== Vt && Vt,
              contextualErrorMap: null === et || void 0 === et ? void 0 : et.errorMap
            },
            path: (null === et || void 0 === et ? void 0 : et.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: tt,
            parsedType: Qt(tt)
          },
          qt = this._parseSync({
            data: tt,
            path: Ot.path,
            parent: Ot
          });
        return Rt(Ot, qt)
      }
      async parseAsync(tt, et) {
        const Vt = await this.safeParseAsync(tt, et);
        if (Vt.success) return Vt.data;
        throw Vt.error
      }
      async safeParseAsync(tt, et) {
        const Vt = {
            common: {
              issues: [],
              contextualErrorMap: null === et || void 0 === et ? void 0 : et.errorMap,
              async: !0
            },
            path: (null === et || void 0 === et ? void 0 : et.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: tt,
            parsedType: Qt(tt)
          },
          Ot = this._parse({
            data: tt,
            path: Vt.path,
            parent: Vt
          }),
          qt = await (Wt(Ot) ? Ot : Promise.resolve(Ot));
        return Rt(Vt, qt)
      }
      refine(tt, et) {
        const Vt = tt => "string" === typeof et || "undefined" === typeof et ? {
          message: et
        } : "function" === typeof et ? et(tt) : et;
        return this._refinement(((et, Ot) => {
          const qt = tt(et),
            Dt = () => Ot.addIssue({
              code: lt.custom,
              ...Vt(et)
            });
          return "undefined" !== typeof Promise && qt instanceof Promise ? qt.then((tt => !!tt || (Dt(), !1))) : !!qt || (Dt(), !1)
        }))
      }
      refinement(tt, et) {
        return this._refinement(((Vt, Ot) => !!tt(Vt) || (Ot.addIssue("function" === typeof et ? et(Vt, Ot) : et), !1)))
      }
      _refinement(tt) {
        return new Je({
          schema: this,
          typeName: Ze.ZodEffects,
          effect: {
            type: "refinement",
            refinement: tt
          }
        })
      }
      superRefine(tt) {
        return this._refinement(tt)
      }
      optional() {
        return Ce.create(this, this._def)
      }
      nullable() {
        return ue.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return Ve.create(this, this._def)
      }
      promise() {
        return be.create(this, this._def)
      }
      or(tt) {
        return De.create([this, tt], this._def)
      }
      and(tt) {
        return He.create(this, tt, this._def)
      }
      transform(tt) {
        return new Je({
          ...It(this._def),
          schema: this,
          typeName: Ze.ZodEffects,
          effect: {
            type: "transform",
            transform: tt
          }
        })
      }
      default (tt) {
        const et = "function" === typeof tt ? tt : () => tt;
        return new Ke({
          ...It(this._def),
          innerType: this,
          defaultValue: et,
          typeName: Ze.ZodDefault
        })
      }
      brand() {
        return new Se({
          typeName: Ze.ZodBranded,
          type: this,
          ...It(this._def)
        })
      } catch (tt) {
        const et = "function" === typeof tt ? tt : () => tt;
        return new he({
          ...It(this._def),
          innerType: this,
          catchValue: et,
          typeName: Ze.ZodCatch
        })
      }
      describe(tt) {
        return new(0, this.constructor)({
          ...this._def,
          description: tt
        })
      }
      pipe(tt) {
        return ce.create(this, tt)
      }
      readonly() {
        return Re.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const Zt = /^c[^\s-]{8,}$/i,
      Lt = /^[a-z][a-z0-9]*$/,
      Ft = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      kt = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      Gt = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let zt;
    const ot = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      rt = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class Ut extends Pt {
      _parse(tt) {
        this._def.coerce && (tt.data = String(tt.data));
        if (this._getType(tt) !== Xt.string) {
          const et = this._getOrReturnCtx(tt);
          return Mt(et, {
            code: lt.invalid_type,
            expected: Xt.string,
            received: et.parsedType
          }), Jt
        }
        const et = new bt;
        let Vt;
        for (const jt of this._def.checks)
          if ("min" === jt.kind) tt.data.length < jt.value && (Vt = this._getOrReturnCtx(tt, Vt), Mt(Vt, {
            code: lt.too_small,
            minimum: jt.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: jt.message
          }), et.Sf());
          else if ("max" === jt.kind) tt.data.length > jt.value && (Vt = this._getOrReturnCtx(tt, Vt), Mt(Vt, {
          code: lt.too_big,
          maximum: jt.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: jt.message
        }), et.Sf());
        else if ("length" === jt.kind) {
          const Ot = tt.data.length > jt.value,
            qt = tt.data.length < jt.value;
          (Ot || qt) && (Vt = this._getOrReturnCtx(tt, Vt), Ot ? Mt(Vt, {
            code: lt.too_big,
            maximum: jt.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: jt.message
          }) : qt && Mt(Vt, {
            code: lt.too_small,
            minimum: jt.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: jt.message
          }), et.Sf())
        } else if ("email" === jt.kind) Gt.test(tt.data) || (Vt = this._getOrReturnCtx(tt, Vt), Mt(Vt, {
          validation: "email",
          code: lt.invalid_string,
          message: jt.message
        }), et.Sf());
        else if ("emoji" === jt.kind) zt || (zt = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), zt.test(tt.data) || (Vt = this._getOrReturnCtx(tt, Vt), Mt(Vt, {
          validation: "emoji",
          code: lt.invalid_string,
          message: jt.message
        }), et.Sf());
        else if ("uuid" === jt.kind) kt.test(tt.data) || (Vt = this._getOrReturnCtx(tt, Vt), Mt(Vt, {
          validation: "uuid",
          code: lt.invalid_string,
          message: jt.message
        }), et.Sf());
        else if ("cuid" === jt.kind) Zt.test(tt.data) || (Vt = this._getOrReturnCtx(tt, Vt), Mt(Vt, {
          validation: "cuid",
          code: lt.invalid_string,
          message: jt.message
        }), et.Sf());
        else if ("cuid2" === jt.kind) Lt.test(tt.data) || (Vt = this._getOrReturnCtx(tt, Vt), Mt(Vt, {
          validation: "cuid2",
          code: lt.invalid_string,
          message: jt.message
        }), et.Sf());
        else if ("ulid" === jt.kind) Ft.test(tt.data) || (Vt = this._getOrReturnCtx(tt, Vt), Mt(Vt, {
          validation: "ulid",
          code: lt.invalid_string,
          message: jt.message
        }), et.Sf());
        else if ("url" === jt.kind) try {
          new URL(tt.data)
        } catch (mt) {
          Vt = this._getOrReturnCtx(tt, Vt), Mt(Vt, {
            validation: "url",
            code: lt.invalid_string,
            message: jt.message
          }), et.Sf()
        } else if ("regex" === jt.kind) {
          jt.regex.lastIndex = 0;
          jt.regex.test(tt.data) || (Vt = this._getOrReturnCtx(tt, Vt), Mt(Vt, {
            validation: "regex",
            code: lt.invalid_string,
            message: jt.message
          }), et.Sf())
        } else if ("trim" === jt.kind) tt.data = tt.data.trim();
        else if ("includes" === jt.kind) tt.data.includes(jt.value, jt.position) || (Vt = this._getOrReturnCtx(tt, Vt), Mt(Vt, {
          code: lt.invalid_string,
          validation: {
            includes: jt.value,
            position: jt.position
          },
          message: jt.message
        }), et.Sf());
        else if ("toLowerCase" === jt.kind) tt.data = tt.data.toLowerCase();
        else if ("toUpperCase" === jt.kind) tt.data = tt.data.toUpperCase();
        else if ("startsWith" === jt.kind) tt.data.startsWith(jt.value) || (Vt = this._getOrReturnCtx(tt, Vt), Mt(Vt, {
          code: lt.invalid_string,
          validation: {
            startsWith: jt.value
          },
          message: jt.message
        }), et.Sf());
        else if ("endsWith" === jt.kind) tt.data.endsWith(jt.value) || (Vt = this._getOrReturnCtx(tt, Vt), Mt(Vt, {
          code: lt.invalid_string,
          validation: {
            endsWith: jt.value
          },
          message: jt.message
        }), et.Sf());
        else if ("datetime" === jt.kind) {
          ((Dt = jt).precision ? Dt.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${Dt.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${Dt.precision}}Z$`) : 0 === Dt.precision ? Dt.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : Dt.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(tt.data) || (Vt = this._getOrReturnCtx(tt, Vt), Mt(Vt, {
            code: lt.invalid_string,
            validation: "datetime",
            message: jt.message
          }), et.Sf())
        } else "ip" === jt.kind ? (Ot = tt.data, ("v4" !== (qt = jt.version) && qt || !ot.test(Ot)) && ("v6" !== qt && qt || !rt.test(Ot)) && (Vt = this._getOrReturnCtx(tt, Vt), Mt(Vt, {
          validation: "ip",
          code: lt.invalid_string,
          message: jt.message
        }), et.Sf())) : dt.assertNever(jt);
        var Ot, qt, Dt;
        return {
          status: et.value,
          value: tt.data
        }
      }
      _regex(tt, et, Vt) {
        return this.refinement((et => tt.test(et)), {
          validation: et,
          code: lt.invalid_string,
          ...St.errToObj(Vt)
        })
      }
      _addCheck(tt) {
        return new Ut({
          ...this._def,
          checks: [...this._def.checks, tt]
        })
      }
      email(tt) {
        return this._addCheck({
          kind: "email",
          ...St.errToObj(tt)
        })
      }
      url(tt) {
        return this._addCheck({
          kind: "url",
          ...St.errToObj(tt)
        })
      }
      emoji(tt) {
        return this._addCheck({
          kind: "emoji",
          ...St.errToObj(tt)
        })
      }
      uuid(tt) {
        return this._addCheck({
          kind: "uuid",
          ...St.errToObj(tt)
        })
      }
      cuid(tt) {
        return this._addCheck({
          kind: "cuid",
          ...St.errToObj(tt)
        })
      }
      cuid2(tt) {
        return this._addCheck({
          kind: "cuid2",
          ...St.errToObj(tt)
        })
      }
      ulid(tt) {
        return this._addCheck({
          kind: "ulid",
          ...St.errToObj(tt)
        })
      }
      ip(tt) {
        return this._addCheck({
          kind: "ip",
          ...St.errToObj(tt)
        })
      }
      datetime(tt) {
        var et;
        return "string" === typeof tt ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: tt
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === tt || void 0 === tt ? void 0 : tt.precision) ? null : null === tt || void 0 === tt ? void 0 : tt.precision,
          offset: null !== (et = null === tt || void 0 === tt ? void 0 : tt.offset) && void 0 !== et && et,
          ...St.errToObj(null === tt || void 0 === tt ? void 0 : tt.message)
        })
      }
      regex(tt, et) {
        return this._addCheck({
          kind: "regex",
          regex: tt,
          ...St.errToObj(et)
        })
      }
      includes(tt, et) {
        return this._addCheck({
          kind: "includes",
          value: tt,
          position: null === et || void 0 === et ? void 0 : et.position,
          ...St.errToObj(null === et || void 0 === et ? void 0 : et.message)
        })
      }
      startsWith(tt, et) {
        return this._addCheck({
          kind: "startsWith",
          value: tt,
          ...St.errToObj(et)
        })
      }
      endsWith(tt, et) {
        return this._addCheck({
          kind: "endsWith",
          value: tt,
          ...St.errToObj(et)
        })
      }
      min(tt, et) {
        return this._addCheck({
          kind: "min",
          value: tt,
          ...St.errToObj(et)
        })
      }
      max(tt, et) {
        return this._addCheck({
          kind: "max",
          value: tt,
          ...St.errToObj(et)
        })
      }
      length(tt, et) {
        return this._addCheck({
          kind: "length",
          value: tt,
          ...St.errToObj(et)
        })
      }
      nonempty(tt) {
        return this.min(1, St.errToObj(tt))
      }
      trim() {
        return new Ut({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new Ut({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new Ut({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((tt => "datetime" === tt.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((tt => "email" === tt.kind))
      }
      get isURL() {
        return !!this._def.checks.find((tt => "url" === tt.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((tt => "emoji" === tt.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((tt => "uuid" === tt.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((tt => "cuid" === tt.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((tt => "cuid2" === tt.kind))
      }
      get isULID() {
        return !!this._def.checks.find((tt => "ulid" === tt.kind))
      }
      get isIP() {
        return !!this._def.checks.find((tt => "ip" === tt.kind))
      }
      get minLength() {
        let tt = null;
        for (const et of this._def.checks) "min" === et.kind && (null === tt || et.value > tt) && (tt = et.value);
        return tt
      }
      get maxLength() {
        let tt = null;
        for (const et of this._def.checks) "max" === et.kind && (null === tt || et.value < tt) && (tt = et.value);
        return tt
      }
    }

    function At(tt, et) {
      const Vt = (tt.toString().split(".")[1] || "").length,
        Ot = (et.toString().split(".")[1] || "").length,
        qt = Vt > Ot ? Vt : Ot;
      return parseInt(tt.toFixed(qt).replace(".", "")) % parseInt(et.toFixed(qt).replace(".", "")) / Math.pow(10, qt)
    }
    Ut.create = tt => {
      var et;
      return new Ut({
        checks: [],
        typeName: Ze.ZodString,
        coerce: null !== (et = null === tt || void 0 === tt ? void 0 : tt.coerce) && void 0 !== et && et,
        ...It(tt)
      })
    };
    class it extends Pt {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(tt) {
        this._def.coerce && (tt.data = Number(tt.data));
        if (this._getType(tt) !== Xt.number) {
          const et = this._getOrReturnCtx(tt);
          return Mt(et, {
            code: lt.invalid_type,
            expected: Xt.number,
            received: et.parsedType
          }), Jt
        }
        let et;
        const Vt = new bt;
        for (const Ot of this._def.checks)
          if ("int" === Ot.kind) dt.isInteger(tt.data) || (et = this._getOrReturnCtx(tt, et), Mt(et, {
            code: lt.invalid_type,
            expected: "integer",
            received: "float",
            message: Ot.message
          }), Vt.Sf());
          else if ("min" === Ot.kind) {
          (Ot.inclusive ? tt.data < Ot.value : tt.data <= Ot.value) && (et = this._getOrReturnCtx(tt, et), Mt(et, {
            code: lt.too_small,
            minimum: Ot.value,
            type: "number",
            inclusive: Ot.inclusive,
            exact: !1,
            message: Ot.message
          }), Vt.Sf())
        } else if ("max" === Ot.kind) {
          (Ot.inclusive ? tt.data > Ot.value : tt.data >= Ot.value) && (et = this._getOrReturnCtx(tt, et), Mt(et, {
            code: lt.too_big,
            maximum: Ot.value,
            type: "number",
            inclusive: Ot.inclusive,
            exact: !1,
            message: Ot.message
          }), Vt.Sf())
        } else "multipleOf" === Ot.kind ? 0 !== At(tt.data, Ot.value) && (et = this._getOrReturnCtx(tt, et), Mt(et, {
          code: lt.not_multiple_of,
          multipleOf: Ot.value,
          message: Ot.message
        }), Vt.Sf()) : "finite" === Ot.kind ? Number.isFinite(tt.data) || (et = this._getOrReturnCtx(tt, et), Mt(et, {
          code: lt.not_finite,
          message: Ot.message
        }), Vt.Sf()) : dt.assertNever(Ot);
        return {
          status: Vt.value,
          value: tt.data
        }
      }
      gte(tt, et) {
        return this.setLimit("min", tt, !0, St.toString(et))
      }
      gt(tt, et) {
        return this.setLimit("min", tt, !1, St.toString(et))
      }
      lte(tt, et) {
        return this.setLimit("max", tt, !0, St.toString(et))
      }
      lt(tt, et) {
        return this.setLimit("max", tt, !1, St.toString(et))
      }
      setLimit(tt, et, Vt, Ot) {
        return new it({
          ...this._def,
          checks: [...this._def.checks, {
            kind: tt,
            value: et,
            inclusive: Vt,
            message: St.toString(Ot)
          }]
        })
      }
      _addCheck(tt) {
        return new it({
          ...this._def,
          checks: [...this._def.checks, tt]
        })
      }
      int(tt) {
        return this._addCheck({
          kind: "int",
          message: St.toString(tt)
        })
      }
      positive(tt) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: St.toString(tt)
        })
      }
      negative(tt) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: St.toString(tt)
        })
      }
      nonpositive(tt) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: St.toString(tt)
        })
      }
      nonnegative(tt) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: St.toString(tt)
        })
      }
      multipleOf(tt, et) {
        return this._addCheck({
          kind: "multipleOf",
          value: tt,
          message: St.toString(et)
        })
      }
      finite(tt) {
        return this._addCheck({
          kind: "finite",
          message: St.toString(tt)
        })
      }
      safe(tt) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: St.toString(tt)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: St.toString(tt)
        })
      }
      get minValue() {
        let tt = null;
        for (const et of this._def.checks) "min" === et.kind && (null === tt || et.value > tt) && (tt = et.value);
        return tt
      }
      get maxValue() {
        let tt = null;
        for (const et of this._def.checks) "max" === et.kind && (null === tt || et.value < tt) && (tt = et.value);
        return tt
      }
      get isInt() {
        return !!this._def.checks.find((tt => "int" === tt.kind || "multipleOf" === tt.kind && dt.isInteger(tt.value)))
      }
      get isFinite() {
        let tt = null,
          et = null;
        for (const Vt of this._def.checks) {
          if ("finite" === Vt.kind || "int" === Vt.kind || "multipleOf" === Vt.kind) return !0;
          "min" === Vt.kind ? (null === et || Vt.value > et) && (et = Vt.value) : "max" === Vt.kind && (null === tt || Vt.value < tt) && (tt = Vt.value)
        }
        return Number.isFinite(et) && Number.isFinite(tt)
      }
    }
    it.create = tt => new it({
      checks: [],
      typeName: Ze.ZodNumber,
      coerce: (null === tt || void 0 === tt ? void 0 : tt.coerce) || !1,
      ...It(tt)
    });
    class Yt extends Pt {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(tt) {
        this._def.coerce && (tt.data = BigInt(tt.data));
        if (this._getType(tt) !== Xt.bigint) {
          const et = this._getOrReturnCtx(tt);
          return Mt(et, {
            code: lt.invalid_type,
            expected: Xt.bigint,
            received: et.parsedType
          }), Jt
        }
        let et;
        const Vt = new bt;
        for (const Ot of this._def.checks)
          if ("min" === Ot.kind) {
            (Ot.inclusive ? tt.data < Ot.value : tt.data <= Ot.value) && (et = this._getOrReturnCtx(tt, et), Mt(et, {
              code: lt.too_small,
              type: "bigint",
              minimum: Ot.value,
              inclusive: Ot.inclusive,
              message: Ot.message
            }), Vt.Sf())
          } else if ("max" === Ot.kind) {
          (Ot.inclusive ? tt.data > Ot.value : tt.data >= Ot.value) && (et = this._getOrReturnCtx(tt, et), Mt(et, {
            code: lt.too_big,
            type: "bigint",
            maximum: Ot.value,
            inclusive: Ot.inclusive,
            message: Ot.message
          }), Vt.Sf())
        } else "multipleOf" === Ot.kind ? tt.data % Ot.value !== BigInt(0) && (et = this._getOrReturnCtx(tt, et), Mt(et, {
          code: lt.not_multiple_of,
          multipleOf: Ot.value,
          message: Ot.message
        }), Vt.Sf()) : dt.assertNever(Ot);
        return {
          status: Vt.value,
          value: tt.data
        }
      }
      gte(tt, et) {
        return this.setLimit("min", tt, !0, St.toString(et))
      }
      gt(tt, et) {
        return this.setLimit("min", tt, !1, St.toString(et))
      }
      lte(tt, et) {
        return this.setLimit("max", tt, !0, St.toString(et))
      }
      lt(tt, et) {
        return this.setLimit("max", tt, !1, St.toString(et))
      }
      setLimit(tt, et, Vt, Ot) {
        return new Yt({
          ...this._def,
          checks: [...this._def.checks, {
            kind: tt,
            value: et,
            inclusive: Vt,
            message: St.toString(Ot)
          }]
        })
      }
      _addCheck(tt) {
        return new Yt({
          ...this._def,
          checks: [...this._def.checks, tt]
        })
      }
      positive(tt) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: St.toString(tt)
        })
      }
      negative(tt) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: St.toString(tt)
        })
      }
      nonpositive(tt) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: St.toString(tt)
        })
      }
      nonnegative(tt) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: St.toString(tt)
        })
      }
      multipleOf(tt, et) {
        return this._addCheck({
          kind: "multipleOf",
          value: tt,
          message: St.toString(et)
        })
      }
      get minValue() {
        let tt = null;
        for (const et of this._def.checks) "min" === et.kind && (null === tt || et.value > tt) && (tt = et.value);
        return tt
      }
      get maxValue() {
        let tt = null;
        for (const et of this._def.checks) "max" === et.kind && (null === tt || et.value < tt) && (tt = et.value);
        return tt
      }
    }
    Yt.create = tt => {
      var et;
      return new Yt({
        checks: [],
        typeName: Ze.ZodBigInt,
        coerce: null !== (et = null === tt || void 0 === tt ? void 0 : tt.coerce) && void 0 !== et && et,
        ...It(tt)
      })
    };
    class Bt extends Pt {
      _parse(tt) {
        this._def.coerce && (tt.data = Boolean(tt.data));
        if (this._getType(tt) !== Xt.boolean) {
          const et = this._getOrReturnCtx(tt);
          return Mt(et, {
            code: lt.invalid_type,
            expected: Xt.boolean,
            received: et.parsedType
          }), Jt
        }
        return ut(tt.data)
      }
    }
    Bt.create = tt => new Bt({
      typeName: Ze.ZodBoolean,
      coerce: (null === tt || void 0 === tt ? void 0 : tt.coerce) || !1,
      ...It(tt)
    });
    class pt extends Pt {
      _parse(tt) {
        this._def.coerce && (tt.data = new Date(tt.data));
        if (this._getType(tt) !== Xt.date) {
          const et = this._getOrReturnCtx(tt);
          return Mt(et, {
            code: lt.invalid_type,
            expected: Xt.date,
            received: et.parsedType
          }), Jt
        }
        if (isNaN(tt.data.getTime())) {
          return Mt(this._getOrReturnCtx(tt), {
            code: lt.invalid_date
          }), Jt
        }
        const et = new bt;
        let Vt;
        for (const Ot of this._def.checks) "min" === Ot.kind ? tt.data.getTime() < Ot.value && (Vt = this._getOrReturnCtx(tt, Vt), Mt(Vt, {
          code: lt.too_small,
          message: Ot.message,
          inclusive: !0,
          exact: !1,
          minimum: Ot.value,
          type: "date"
        }), et.Sf()) : "max" === Ot.kind ? tt.data.getTime() > Ot.value && (Vt = this._getOrReturnCtx(tt, Vt), Mt(Vt, {
          code: lt.too_big,
          message: Ot.message,
          inclusive: !0,
          exact: !1,
          maximum: Ot.value,
          type: "date"
        }), et.Sf()) : dt.assertNever(Ot);
        return {
          status: et.value,
          value: new Date(tt.data.getTime())
        }
      }
      _addCheck(tt) {
        return new pt({
          ...this._def,
          checks: [...this._def.checks, tt]
        })
      }
      min(tt, et) {
        return this._addCheck({
          kind: "min",
          value: tt.getTime(),
          message: St.toString(et)
        })
      }
      max(tt, et) {
        return this._addCheck({
          kind: "max",
          value: tt.getTime(),
          message: St.toString(et)
        })
      }
      get minDate() {
        let tt = null;
        for (const et of this._def.checks) "min" === et.kind && (null === tt || et.value > tt) && (tt = et.value);
        return null != tt ? new Date(tt) : null
      }
      get maxDate() {
        let tt = null;
        for (const et of this._def.checks) "max" === et.kind && (null === tt || et.value < tt) && (tt = et.value);
        return null != tt ? new Date(tt) : null
      }
    }
    pt.create = tt => new pt({
      checks: [],
      coerce: (null === tt || void 0 === tt ? void 0 : tt.coerce) || !1,
      typeName: Ze.ZodDate,
      ...It(tt)
    });
    class xt extends Pt {
      _parse(tt) {
        if (this._getType(tt) !== Xt.symbol) {
          const et = this._getOrReturnCtx(tt);
          return Mt(et, {
            code: lt.invalid_type,
            expected: Xt.symbol,
            received: et.parsedType
          }), Jt
        }
        return ut(tt.data)
      }
    }
    xt.create = tt => new xt({
      typeName: Ze.ZodSymbol,
      ...It(tt)
    });
    class Tt extends Pt {
      _parse(tt) {
        if (this._getType(tt) !== Xt.undefined) {
          const et = this._getOrReturnCtx(tt);
          return Mt(et, {
            code: lt.invalid_type,
            expected: Xt.undefined,
            received: et.parsedType
          }), Jt
        }
        return ut(tt.data)
      }
    }
    Tt.create = tt => new Tt({
      typeName: Ze.ZodUndefined,
      ...It(tt)
    });
    class gt extends Pt {
      _parse(tt) {
        if (this._getType(tt) !== Xt.null) {
          const et = this._getOrReturnCtx(tt);
          return Mt(et, {
            code: lt.invalid_type,
            expected: Xt.null,
            received: et.parsedType
          }), Jt
        }
        return ut(tt.data)
      }
    }
    gt.create = tt => new gt({
      typeName: Ze.ZodNull,
      ...It(tt)
    });
    class st extends Pt {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(tt) {
        return ut(tt.data)
      }
    }
    st.create = tt => new st({
      typeName: Ze.ZodAny,
      ...It(tt)
    });
    class nt extends Pt {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(tt) {
        return ut(tt.data)
      }
    }
    nt.create = tt => new nt({
      typeName: Ze.ZodUnknown,
      ...It(tt)
    });
    class te extends Pt {
      _parse(tt) {
        const et = this._getOrReturnCtx(tt);
        return Mt(et, {
          code: lt.invalid_type,
          expected: Xt.never,
          received: et.parsedType
        }), Jt
      }
    }
    te.create = tt => new te({
      typeName: Ze.ZodNever,
      ...It(tt)
    });
    class ee extends Pt {
      _parse(tt) {
        if (this._getType(tt) !== Xt.undefined) {
          const et = this._getOrReturnCtx(tt);
          return Mt(et, {
            code: lt.invalid_type,
            expected: Xt.void,
            received: et.parsedType
          }), Jt
        }
        return ut(tt.data)
      }
    }
    ee.create = tt => new ee({
      typeName: Ze.ZodVoid,
      ...It(tt)
    });
    class Ve extends Pt {
      _parse(tt) {
        const {
          ctx: et,
          status: Vt
        } = this._processInputParams(tt), Ot = this._def;
        if (et.parsedType !== Xt.array) return Mt(et, {
          code: lt.invalid_type,
          expected: Xt.array,
          received: et.parsedType
        }), Jt;
        if (null !== Ot.exactLength) {
          const tt = et.data.length > Ot.exactLength.value,
            qt = et.data.length < Ot.exactLength.value;
          (tt || qt) && (Mt(et, {
            code: tt ? lt.too_big : lt.too_small,
            minimum: qt ? Ot.exactLength.value : void 0,
            maximum: tt ? Ot.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: Ot.exactLength.message
          }), Vt.Sf())
        }
        if (null !== Ot.minLength && et.data.length < Ot.minLength.value && (Mt(et, {
            code: lt.too_small,
            minimum: Ot.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Ot.minLength.message
          }), Vt.Sf()), null !== Ot.maxLength && et.data.length > Ot.maxLength.value && (Mt(et, {
            code: lt.too_big,
            maximum: Ot.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Ot.maxLength.message
          }), Vt.Sf()), et.common.async) return Promise.all([...et.data].map(((tt, Vt) => Ot.type._parseAsync(new ct(et, tt, et.path, Vt))))).then((tt => bt.mergeArray(Vt, tt)));
        const qt = [...et.data].map(((tt, Vt) => Ot.type._parseSync(new ct(et, tt, et.path, Vt))));
        return bt.mergeArray(Vt, qt)
      }
      get element() {
        return this._def.type
      }
      min(tt, et) {
        return new Ve({
          ...this._def,
          minLength: {
            value: tt,
            message: St.toString(et)
          }
        })
      }
      max(tt, et) {
        return new Ve({
          ...this._def,
          maxLength: {
            value: tt,
            message: St.toString(et)
          }
        })
      }
      length(tt, et) {
        return new Ve({
          ...this._def,
          exactLength: {
            value: tt,
            message: St.toString(et)
          }
        })
      }
      nonempty(tt) {
        return this.min(1, tt)
      }
    }

    function Oe(tt) {
      if (tt instanceof qe) {
        const et = {};
        for (const Vt in tt.shape) {
          const Ot = tt.shape[Vt];
          et[Vt] = Ce.create(Oe(Ot))
        }
        return new qe({
          ...tt._def,
          shape: () => et
        })
      }
      return tt instanceof Ve ? new Ve({
        ...tt._def,
        type: Oe(tt.element)
      }) : tt instanceof Ce ? Ce.create(Oe(tt.unwrap())) : tt instanceof ue ? ue.create(Oe(tt.unwrap())) : tt instanceof Xe ? Xe.create(tt.items.map((tt => Oe(tt)))) : tt
    }
    Ve.create = (tt, et) => new Ve({
      type: tt,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: Ze.ZodArray,
      ...It(et)
    });
    class qe extends Pt {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const tt = this._def.shape(),
          et = dt.objectKeys(tt);
        return this._cached = {
          shape: tt,
          keys: et
        }
      }
      _parse(tt) {
        if (this._getType(tt) !== Xt.object) {
          const et = this._getOrReturnCtx(tt);
          return Mt(et, {
            code: lt.invalid_type,
            expected: Xt.object,
            received: et.parsedType
          }), Jt
        }
        const {
          status: et,
          ctx: Vt
        } = this._processInputParams(tt), {
          shape: Ot,
          keys: qt
        } = this._getCached(), Dt = [];
        if (!(this._def.catchall instanceof te && "strip" === this._def.unknownKeys))
          for (const dt in Vt.data) qt.includes(dt) || Dt.push(dt);
        const mt = [];
        for (const dt of qt) {
          const tt = Ot[dt],
            et = Vt.data[dt];
          mt.push({
            key: {
              status: "valid",
              value: dt
            },
            value: tt._parse(new ct(Vt, et, Vt.path, dt)),
            alwaysSet: dt in Vt.data
          })
        }
        if (this._def.catchall instanceof te) {
          const tt = this._def.unknownKeys;
          if ("passthrough" === tt)
            for (const et of Dt) mt.push({
              key: {
                status: "valid",
                value: et
              },
              value: {
                status: "valid",
                value: Vt.data[et]
              }
            });
          else if ("strict" === tt) Dt.length > 0 && (Mt(Vt, {
            code: lt.unrecognized_keys,
            keys: Dt
          }), et.Sf());
          else if ("strip" !== tt) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const tt = this._def.catchall;
          for (const et of Dt) {
            const Ot = Vt.data[et];
            mt.push({
              key: {
                status: "valid",
                value: et
              },
              value: tt._parse(new ct(Vt, Ot, Vt.path, et)),
              alwaysSet: et in Vt.data
            })
          }
        }
        return Vt.common.async ? Promise.resolve().then((async () => {
          const tt = [];
          for (const et of mt) {
            const Vt = await et.key;
            tt.push({
              key: Vt,
              value: await et.value,
              alwaysSet: et.alwaysSet
            })
          }
          return tt
        })).then((tt => bt.mergeObjectSync(et, tt))) : bt.mergeObjectSync(et, mt)
      }
      get shape() {
        return this._def.shape()
      }
      strict(tt) {
        return St.errToObj, new qe({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== tt ? {
            errorMap: (et, Vt) => {
              var Ot, qt, Dt, mt;
              const dt = null !== (Dt = null === (qt = (Ot = this._def).errorMap) || void 0 === qt ? void 0 : qt.call(Ot, et, Vt).message) && void 0 !== Dt ? Dt : Vt.defaultError;
              return "unrecognized_keys" === et.code ? {
                message: null !== (mt = St.errToObj(tt).message) && void 0 !== mt ? mt : dt
              } : {
                message: dt
              }
            }
          } : {}
        })
      }
      strip() {
        return new qe({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new qe({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(tt) {
        return new qe({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...tt
          })
        })
      }
      merge(tt) {
        return new qe({
          unknownKeys: tt._def.unknownKeys,
          catchall: tt._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...tt._def.shape()
          }),
          typeName: Ze.ZodObject
        })
      }
      setKey(tt, et) {
        return this.augment({
          [tt]: et
        })
      }
      catchall(tt) {
        return new qe({
          ...this._def,
          catchall: tt
        })
      }
      il(tt) {
        const et = {};
        return dt.objectKeys(tt).forEach((Vt => {
          tt[Vt] && this.shape[Vt] && (et[Vt] = this.shape[Vt])
        })), new qe({
          ...this._def,
          shape: () => et
        })
      }
      omit(tt) {
        const et = {};
        return dt.objectKeys(this.shape).forEach((Vt => {
          tt[Vt] || (et[Vt] = this.shape[Vt])
        })), new qe({
          ...this._def,
          shape: () => et
        })
      }
      deepPartial() {
        return Oe(this)
      }
      partial(tt) {
        const et = {};
        return dt.objectKeys(this.shape).forEach((Vt => {
          const Ot = this.shape[Vt];
          tt && !tt[Vt] ? et[Vt] = Ot : et[Vt] = Ot.optional()
        })), new qe({
          ...this._def,
          shape: () => et
        })
      }
      required(tt) {
        const et = {};
        return dt.objectKeys(this.shape).forEach((Vt => {
          if (tt && !tt[Vt]) et[Vt] = this.shape[Vt];
          else {
            let tt = this.shape[Vt];
            for (; tt instanceof Ce;) tt = tt._def.innerType;
            et[Vt] = tt
          }
        })), new qe({
          ...this._def,
          shape: () => et
        })
      }
      keyof() {
        return Ne(dt.objectKeys(this.shape))
      }
    }
    qe.create = (tt, et) => new qe({
      shape: () => tt,
      unknownKeys: "strip",
      catchall: te.create(),
      typeName: Ze.ZodObject,
      ...It(et)
    }), qe.strictCreate = (tt, et) => new qe({
      shape: () => tt,
      unknownKeys: "strict",
      catchall: te.create(),
      typeName: Ze.ZodObject,
      ...It(et)
    }), qe.lazycreate = (tt, et) => new qe({
      shape: tt,
      unknownKeys: "strip",
      catchall: te.create(),
      typeName: Ze.ZodObject,
      ...It(et)
    });
    class De extends Pt {
      _parse(tt) {
        const {
          ctx: et
        } = this._processInputParams(tt), Vt = this._def.options;
        if (et.common.async) return Promise.all(Vt.map((async tt => {
          const Vt = {
            ...et,
            common: {
              ...et.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await tt._parseAsync({
              data: et.data,
              path: et.path,
              parent: Vt
            }),
            ctx: Vt
          }
        }))).then((function(tt) {
          for (const et of tt)
            if ("valid" === et.result.status) return et.result;
          for (const Ot of tt)
            if ("Sf" === Ot.result.status) return et.common.issues.push(...Ot.ctx.common.issues), Ot.result;
          const Vt = tt.map((tt => new Et(tt.ctx.common.issues)));
          return Mt(et, {
            code: lt.invalid_union,
            unionErrors: Vt
          }), Jt
        }));
        {
          let tt;
          const Ot = [];
          for (const Dt of Vt) {
            const Vt = {
                ...et,
                common: {
                  ...et.common,
                  issues: []
                },
                parent: null
              },
              qt = Dt._parseSync({
                data: et.data,
                path: et.path,
                parent: Vt
              });
            if ("valid" === qt.status) return qt;
            "Sf" !== qt.status || tt || (tt = {
              result: qt,
              ctx: Vt
            }), Vt.common.issues.length && Ot.push(Vt.common.issues)
          }
          if (tt) return et.common.issues.push(...tt.ctx.common.issues), tt.result;
          const qt = Ot.map((tt => new Et(tt)));
          return Mt(et, {
            code: lt.invalid_union,
            unionErrors: qt
          }), Jt
        }
      }
      get options() {
        return this._def.options
      }
    }
    De.create = (tt, et) => new De({
      options: tt,
      typeName: Ze.ZodUnion,
      ...It(et)
    });
    const me = tt => tt instanceof we ? me(tt.schema) : tt instanceof Je ? me(tt.innerType()) : tt instanceof ye ? [tt.value] : tt instanceof ae ? tt.options : tt instanceof Me ? Object.keys(tt.enum) : tt instanceof Ke ? me(tt._def.innerType) : tt instanceof Tt ? [void 0] : tt instanceof gt ? [null] : null;
    class de extends Pt {
      _parse(tt) {
        const {
          ctx: et
        } = this._processInputParams(tt);
        if (et.parsedType !== Xt.object) return Mt(et, {
          code: lt.invalid_type,
          expected: Xt.object,
          received: et.parsedType
        }), Jt;
        const Vt = this.discriminator,
          Ot = et.data[Vt],
          qt = this.optionsMap.get(Ot);
        return qt ? et.common.async ? qt._parseAsync({
          data: et.data,
          path: et.path,
          parent: et
        }) : qt._parseSync({
          data: et.data,
          path: et.path,
          parent: et
        }) : (Mt(et, {
          code: lt.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [Vt]
        }), Jt)
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
      static create(tt, et, Vt) {
        const Ot = new Map;
        for (const qt of et) {
          const et = me(qt.shape[tt]);
          if (!et) throw new Error(`A discriminator value for key \`${tt}\` could not be extracted from all schema options`);
          for (const Vt of et) {
            if (Ot.has(Vt)) throw new Error(`Discriminator property ${String(tt)} has duplicate value ${String(Vt)}`);
            Ot.set(Vt, qt)
          }
        }
        return new de({
          typeName: Ze.ZodDiscriminatedUnion,
          discriminator: tt,
          options: et,
          optionsMap: Ot,
          ...It(Vt)
        })
      }
    }

    function je(tt, et) {
      const Vt = Qt(tt),
        Ot = Qt(et);
      if (tt === et) return {
        valid: !0,
        data: tt
      };
      if (Vt === Xt.object && Ot === Xt.object) {
        const Vt = dt.objectKeys(et),
          Ot = dt.objectKeys(tt).filter((tt => -1 !== Vt.indexOf(tt))),
          qt = {
            ...tt,
            ...et
          };
        for (const Dt of Ot) {
          const Vt = je(tt[Dt], et[Dt]);
          if (!Vt.valid) return {
            valid: !1
          };
          qt[Dt] = Vt.data
        }
        return {
          valid: !0,
          data: qt
        }
      }
      if (Vt === Xt.array && Ot === Xt.array) {
        if (tt.length !== et.length) return {
          valid: !1
        };
        const Vt = [];
        for (let Ot = 0; Ot < tt.length; Ot++) {
          const qt = je(tt[Ot], et[Ot]);
          if (!qt.valid) return {
            valid: !1
          };
          Vt.push(qt.data)
        }
        return {
          valid: !0,
          data: Vt
        }
      }
      return Vt === Xt.date && Ot === Xt.date && +tt === +et ? {
        valid: !0,
        data: tt
      } : {
        valid: !1
      }
    }
    class He extends Pt {
      _parse(tt) {
        const {
          status: et,
          ctx: Vt
        } = this._processInputParams(tt), Ot = (tt, Ot) => {
          if (Kt(tt) || Kt(Ot)) return Jt;
          const qt = je(tt.value, Ot.value);
          return qt.valid ? ((ht(tt) || ht(Ot)) && et.Sf(), {
            status: et.value,
            value: qt.data
          }) : (Mt(Vt, {
            code: lt.invalid_intersection_types
          }), Jt)
        };
        return Vt.common.async ? Promise.all([this._def.left._parseAsync({
          data: Vt.data,
          path: Vt.path,
          parent: Vt
        }), this._def.right._parseAsync({
          data: Vt.data,
          path: Vt.path,
          parent: Vt
        })]).then((tt => {
          let [et, Vt] = tt;
          return Ot(et, Vt)
        })) : Ot(this._def.left._parseSync({
          data: Vt.data,
          path: Vt.path,
          parent: Vt
        }), this._def.right._parseSync({
          data: Vt.data,
          path: Vt.path,
          parent: Vt
        }))
      }
    }
    He.create = (tt, et, Vt) => new He({
      left: tt,
      right: et,
      typeName: Ze.ZodIntersection,
      ...It(Vt)
    });
    class Xe extends Pt {
      _parse(tt) {
        const {
          status: et,
          ctx: Vt
        } = this._processInputParams(tt);
        if (Vt.parsedType !== Xt.array) return Mt(Vt, {
          code: lt.invalid_type,
          expected: Xt.array,
          received: Vt.parsedType
        }), Jt;
        if (Vt.data.length < this._def.items.length) return Mt(Vt, {
          code: lt.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), Jt;
        !this._def.rest && Vt.data.length > this._def.items.length && (Mt(Vt, {
          code: lt.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), et.Sf());
        const Ot = [...Vt.data].map(((tt, et) => {
          const Ot = this._def.items[et] || this._def.rest;
          return Ot ? Ot._parse(new ct(Vt, tt, Vt.path, et)) : null
        })).filter((tt => !!tt));
        return Vt.common.async ? Promise.all(Ot).then((tt => bt.mergeArray(et, tt))) : bt.mergeArray(et, Ot)
      }
      get items() {
        return this._def.items
      }
      rest(tt) {
        return new Xe({
          ...this._def,
          rest: tt
        })
      }
    }
    Xe.create = (tt, et) => {
      if (!Array.isArray(tt)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new Xe({
        items: tt,
        typeName: Ze.ZodTuple,
        rest: null,
        ...It(et)
      })
    };
    class Qe extends Pt {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(tt) {
        const {
          status: et,
          ctx: Vt
        } = this._processInputParams(tt);
        if (Vt.parsedType !== Xt.object) return Mt(Vt, {
          code: lt.invalid_type,
          expected: Xt.object,
          received: Vt.parsedType
        }), Jt;
        const Ot = [],
          qt = this._def.keyType,
          Dt = this._def.valueType;
        for (const mt in Vt.data) Ot.push({
          key: qt._parse(new ct(Vt, mt, Vt.path, mt)),
          value: Dt._parse(new ct(Vt, Vt.data[mt], Vt.path, mt))
        });
        return Vt.common.async ? bt.mergeObjectAsync(et, Ot) : bt.mergeObjectSync(et, Ot)
      }
      get element() {
        return this._def.valueType
      }
      static create(tt, et, Vt) {
        return new Qe(et instanceof Pt ? {
          keyType: tt,
          valueType: et,
          typeName: Ze.ZodRecord,
          ...It(Vt)
        } : {
          keyType: Ut.create(),
          valueType: tt,
          typeName: Ze.ZodRecord,
          ...It(et)
        })
      }
    }
    class le extends Pt {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(tt) {
        const {
          status: et,
          ctx: Vt
        } = this._processInputParams(tt);
        if (Vt.parsedType !== Xt.map) return Mt(Vt, {
          code: lt.invalid_type,
          expected: Xt.map,
          received: Vt.parsedType
        }), Jt;
        const Ot = this._def.keyType,
          qt = this._def.valueType,
          Dt = [...Vt.data.entries()].map(((tt, et) => {
            let [Dt, mt] = tt;
            return {
              key: Ot._parse(new ct(Vt, Dt, Vt.path, [et, "key"])),
              value: qt._parse(new ct(Vt, mt, Vt.path, [et, "value"]))
            }
          }));
        if (Vt.common.async) {
          const tt = new Map;
          return Promise.resolve().then((async () => {
            for (const Vt of Dt) {
              const Ot = await Vt.key,
                qt = await Vt.value;
              if ("aborted" === Ot.status || "aborted" === qt.status) return Jt;
              "Sf" !== Ot.status && "Sf" !== qt.status || et.Sf(), tt.set(Ot.value, qt.value)
            }
            return {
              status: et.value,
              value: tt
            }
          }))
        } {
          const tt = new Map;
          for (const Vt of Dt) {
            const Ot = Vt.key,
              qt = Vt.value;
            if ("aborted" === Ot.status || "aborted" === qt.status) return Jt;
            "Sf" !== Ot.status && "Sf" !== qt.status || et.Sf(), tt.set(Ot.value, qt.value)
          }
          return {
            status: et.value,
            value: tt
          }
        }
      }
    }
    le.create = (tt, et, Vt) => new le({
      valueType: et,
      keyType: tt,
      typeName: Ze.ZodMap,
      ...It(Vt)
    });
    class Ee extends Pt {
      _parse(tt) {
        const {
          status: et,
          ctx: Vt
        } = this._processInputParams(tt);
        if (Vt.parsedType !== Xt.set) return Mt(Vt, {
          code: lt.invalid_type,
          expected: Xt.set,
          received: Vt.parsedType
        }), Jt;
        const Ot = this._def;
        null !== Ot.minSize && Vt.data.size < Ot.minSize.value && (Mt(Vt, {
          code: lt.too_small,
          minimum: Ot.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Ot.minSize.message
        }), et.Sf()), null !== Ot.maxSize && Vt.data.size > Ot.maxSize.value && (Mt(Vt, {
          code: lt.too_big,
          maximum: Ot.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Ot.maxSize.message
        }), et.Sf());
        const qt = this._def.valueType;

        function Dt(tt) {
          const Vt = new Set;
          for (const Ot of tt) {
            if ("aborted" === Ot.status) return Jt;
            "Sf" === Ot.status && et.Sf(), Vt.add(Ot.value)
          }
          return {
            status: et.value,
            value: Vt
          }
        }
        const mt = [...Vt.data.values()].map(((tt, et) => qt._parse(new ct(Vt, tt, Vt.path, et))));
        return Vt.common.async ? Promise.all(mt).then((tt => Dt(tt))) : Dt(mt)
      }
      min(tt, et) {
        return new Ee({
          ...this._def,
          minSize: {
            value: tt,
            message: St.toString(et)
          }
        })
      }
      max(tt, et) {
        return new Ee({
          ...this._def,
          maxSize: {
            value: tt,
            message: St.toString(et)
          }
        })
      }
      size(tt, et) {
        return this.min(tt, et).max(tt, et)
      }
      nonempty(tt) {
        return this.min(1, tt)
      }
    }
    Ee.create = (tt, et) => new Ee({
      valueType: tt,
      minSize: null,
      maxSize: null,
      typeName: Ze.ZodSet,
      ...It(et)
    });
    class fe extends Pt {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(tt) {
        const {
          ctx: et
        } = this._processInputParams(tt);
        if (et.parsedType !== Xt.function) return Mt(et, {
          code: lt.invalid_type,
          expected: Xt.function,
          received: et.parsedType
        }), Jt;

        function Vt(tt, Vt) {
          return Nt({
            data: tt,
            path: et.path,
            errorMaps: [et.common.contextualErrorMap, et.schemaErrorMap, yt(), ft].filter((tt => !!tt)),
            issueData: {
              code: lt.invalid_arguments,
              argumentsError: Vt
            }
          })
        }

        function Ot(tt, Vt) {
          return Nt({
            data: tt,
            path: et.path,
            errorMaps: [et.common.contextualErrorMap, et.schemaErrorMap, yt(), ft].filter((tt => !!tt)),
            issueData: {
              code: lt.invalid_return_type,
              returnTypeError: Vt
            }
          })
        }
        const qt = {
            errorMap: et.common.contextualErrorMap
          },
          Dt = et.data;
        if (this._def.returns instanceof be) {
          const tt = this;
          return ut((async function() {
            for (var et = arguments.length, mt = new Array(et), dt = 0; dt < et; dt++) mt[dt] = arguments[dt];
            const jt = new Et([]),
              Ht = await tt._def.args.parseAsync(mt, qt).catch((tt => {
                throw jt.addIssue(Vt(mt, tt)), jt
              })),
              Xt = await Reflect.apply(Dt, this, Ht);
            return await tt._def.returns._def.type.parseAsync(Xt, qt).catch((tt => {
              throw jt.addIssue(Ot(Xt, tt)), jt
            }))
          }))
        } {
          const tt = this;
          return ut((function() {
            for (var et = arguments.length, mt = new Array(et), dt = 0; dt < et; dt++) mt[dt] = arguments[dt];
            const jt = tt._def.args.safeParse(mt, qt);
            if (!jt.success) throw new Et([Vt(mt, jt.error)]);
            const Ht = Reflect.apply(Dt, this, jt.data),
              Xt = tt._def.returns.safeParse(Ht, qt);
            if (!Xt.success) throw new Et([Ot(Ht, Xt.error)]);
            return Xt.data
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
        for (var tt = arguments.length, et = new Array(tt), Vt = 0; Vt < tt; Vt++) et[Vt] = arguments[Vt];
        return new fe({
          ...this._def,
          args: Xe.create(et).rest(nt.create())
        })
      }
      returns(tt) {
        return new fe({
          ...this._def,
          returns: tt
        })
      }
      implement(tt) {
        return this.parse(tt)
      }
      strictImplement(tt) {
        return this.parse(tt)
      }
      static create(tt, et, Vt) {
        return new fe({
          args: tt || Xe.create([]).rest(nt.create()),
          returns: et || nt.create(),
          typeName: Ze.ZodFunction,
          ...It(Vt)
        })
      }
    }
    class we extends Pt {
      get schema() {
        return this._def.getter()
      }
      _parse(tt) {
        const {
          ctx: et
        } = this._processInputParams(tt);
        return this._def.getter()._parse({
          data: et.data,
          path: et.path,
          parent: et
        })
      }
    }
    we.create = (tt, et) => new we({
      getter: tt,
      typeName: Ze.ZodLazy,
      ...It(et)
    });
    class ye extends Pt {
      _parse(tt) {
        if (tt.data !== this._def.value) {
          const et = this._getOrReturnCtx(tt);
          return Mt(et, {
            received: et.data,
            code: lt.invalid_literal,
            expected: this._def.value
          }), Jt
        }
        return {
          status: "valid",
          value: tt.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function Ne(tt, et) {
      return new ae({
        values: tt,
        typeName: Ze.ZodEnum,
        ...It(et)
      })
    }
    ye.create = (tt, et) => new ye({
      value: tt,
      typeName: Ze.ZodLiteral,
      ...It(et)
    });
    class ae extends Pt {
      _parse(tt) {
        if ("string" !== typeof tt.data) {
          const et = this._getOrReturnCtx(tt),
            Vt = this._def.values;
          return Mt(et, {
            expected: dt.joinValues(Vt),
            received: et.parsedType,
            code: lt.invalid_type
          }), Jt
        }
        if (-1 === this._def.values.indexOf(tt.data)) {
          const et = this._getOrReturnCtx(tt),
            Vt = this._def.values;
          return Mt(et, {
            received: et.data,
            code: lt.invalid_enum_value,
            options: Vt
          }), Jt
        }
        return ut(tt.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const tt = {};
        for (const et of this._def.values) tt[et] = et;
        return tt
      }
      get Values() {
        const tt = {};
        for (const et of this._def.values) tt[et] = et;
        return tt
      }
      get Enum() {
        const tt = {};
        for (const et of this._def.values) tt[et] = et;
        return tt
      }
      extract(tt) {
        return ae.create(tt)
      }
      exclude(tt) {
        return ae.create(this.options.filter((et => !tt.includes(et))))
      }
    }
    ae.create = Ne;
    class Me extends Pt {
      _parse(tt) {
        const et = dt.getValidEnumValues(this._def.values),
          Vt = this._getOrReturnCtx(tt);
        if (Vt.parsedType !== Xt.string && Vt.parsedType !== Xt.number) {
          const tt = dt.objectValues(et);
          return Mt(Vt, {
            expected: dt.joinValues(tt),
            received: Vt.parsedType,
            code: lt.invalid_type
          }), Jt
        }
        if (-1 === et.indexOf(tt.data)) {
          const tt = dt.objectValues(et);
          return Mt(Vt, {
            received: Vt.data,
            code: lt.invalid_enum_value,
            options: tt
          }), Jt
        }
        return ut(tt.data)
      }
      get enum() {
        return this._def.values
      }
    }
    Me.create = (tt, et) => new Me({
      values: tt,
      typeName: Ze.ZodNativeEnum,
      ...It(et)
    });
    class be extends Pt {
      unwrap() {
        return this._def.type
      }
      _parse(tt) {
        const {
          ctx: et
        } = this._processInputParams(tt);
        if (et.parsedType !== Xt.promise && !1 === et.common.async) return Mt(et, {
          code: lt.invalid_type,
          expected: Xt.promise,
          received: et.parsedType
        }), Jt;
        const Vt = et.parsedType === Xt.promise ? et.data : Promise.resolve(et.data);
        return ut(Vt.then((tt => this._def.type.parseAsync(tt, {
          path: et.path,
          errorMap: et.common.contextualErrorMap
        }))))
      }
    }
    be.create = (tt, et) => new be({
      type: tt,
      typeName: Ze.ZodPromise,
      ...It(et)
    });
    class Je extends Pt {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === Ze.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(tt) {
        const {
          status: et,
          ctx: Vt
        } = this._processInputParams(tt), Ot = this._def.effect || null, qt = {
          addIssue: tt => {
            Mt(Vt, tt), tt.fatal ? et.abort() : et.Sf()
          },
          get path() {
            return Vt.path
          }
        };
        if (qt.addIssue = qt.addIssue.bind(qt), "preprocess" === Ot.type) {
          const tt = Ot.transform(Vt.data, qt);
          return Vt.common.issues.length ? {
            status: "Sf",
            value: Vt.data
          } : Vt.common.async ? Promise.resolve(tt).then((tt => this._def.schema._parseAsync({
            data: tt,
            path: Vt.path,
            parent: Vt
          }))) : this._def.schema._parseSync({
            data: tt,
            path: Vt.path,
            parent: Vt
          })
        }
        if ("refinement" === Ot.type) {
          const tt = tt => {
            const et = Ot.refinement(tt, qt);
            if (Vt.common.async) return Promise.resolve(et);
            if (et instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return tt
          };
          if (!1 === Vt.common.async) {
            const Ot = this._def.schema._parseSync({
              data: Vt.data,
              path: Vt.path,
              parent: Vt
            });
            return "aborted" === Ot.status ? Jt : ("Sf" === Ot.status && et.Sf(), tt(Ot.value), {
              status: et.value,
              value: Ot.value
            })
          }
          return this._def.schema._parseAsync({
            data: Vt.data,
            path: Vt.path,
            parent: Vt
          }).then((Vt => "aborted" === Vt.status ? Jt : ("Sf" === Vt.status && et.Sf(), tt(Vt.value).then((() => ({
            status: et.value,
            value: Vt.value
          }))))))
        }
        if ("transform" === Ot.type) {
          if (!1 === Vt.common.async) {
            const tt = this._def.schema._parseSync({
              data: Vt.data,
              path: Vt.path,
              parent: Vt
            });
            if (!vt(tt)) return tt;
            const Dt = Ot.transform(tt.value, qt);
            if (Dt instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: et.value,
              value: Dt
            }
          }
          return this._def.schema._parseAsync({
            data: Vt.data,
            path: Vt.path,
            parent: Vt
          }).then((tt => vt(tt) ? Promise.resolve(Ot.transform(tt.value, qt)).then((tt => ({
            status: et.value,
            value: tt
          }))) : tt))
        }
        dt.assertNever(Ot)
      }
    }
    Je.create = (tt, et, Vt) => new Je({
      schema: tt,
      typeName: Ze.ZodEffects,
      effect: et,
      ...It(Vt)
    }), Je.createWithPreprocess = (tt, et, Vt) => new Je({
      schema: et,
      effect: {
        type: "preprocess",
        transform: tt
      },
      typeName: Ze.ZodEffects,
      ...It(Vt)
    });
    class Ce extends Pt {
      _parse(tt) {
        return this._getType(tt) === Xt.undefined ? ut(void 0) : this._def.innerType._parse(tt)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Ce.create = (tt, et) => new Ce({
      innerType: tt,
      typeName: Ze.ZodOptional,
      ...It(et)
    });
    class ue extends Pt {
      _parse(tt) {
        return this._getType(tt) === Xt.null ? ut(null) : this._def.innerType._parse(tt)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    ue.create = (tt, et) => new ue({
      innerType: tt,
      typeName: Ze.ZodNullable,
      ...It(et)
    });
    class Ke extends Pt {
      _parse(tt) {
        const {
          ctx: et
        } = this._processInputParams(tt);
        let Vt = et.data;
        return et.parsedType === Xt.undefined && (Vt = this._def.defaultValue()), this._def.innerType._parse({
          data: Vt,
          path: et.path,
          parent: et
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    Ke.create = (tt, et) => new Ke({
      innerType: tt,
      typeName: Ze.ZodDefault,
      defaultValue: "function" === typeof et.default ? et.default : () => et.default,
      ...It(et)
    });
    class he extends Pt {
      _parse(tt) {
        const {
          ctx: et
        } = this._processInputParams(tt), Vt = {
          ...et,
          common: {
            ...et.common,
            issues: []
          }
        }, Ot = this._def.innerType._parse({
          data: Vt.data,
          path: Vt.path,
          parent: {
            ...Vt
          }
        });
        return Wt(Ot) ? Ot.then((tt => ({
          status: "valid",
          value: "valid" === tt.status ? tt.value : this._def.catchValue({
            get error() {
              return new Et(Vt.common.issues)
            },
            input: Vt.data
          })
        }))) : {
          status: "valid",
          value: "valid" === Ot.status ? Ot.value : this._def.catchValue({
            get error() {
              return new Et(Vt.common.issues)
            },
            input: Vt.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    he.create = (tt, et) => new he({
      innerType: tt,
      typeName: Ze.ZodCatch,
      catchValue: "function" === typeof et.catch ? et.catch : () => et.catch,
      ...It(et)
    });
    class ve extends Pt {
      _parse(tt) {
        if (this._getType(tt) !== Xt.nan) {
          const et = this._getOrReturnCtx(tt);
          return Mt(et, {
            code: lt.invalid_type,
            expected: Xt.nan,
            received: et.parsedType
          }), Jt
        }
        return {
          status: "valid",
          value: tt.data
        }
      }
    }
    ve.create = tt => new ve({
      typeName: Ze.ZodNaN,
      ...It(tt)
    });
    const We = Symbol("zod_brand");
    class Se extends Pt {
      _parse(tt) {
        const {
          ctx: et
        } = this._processInputParams(tt), Vt = et.data;
        return this._def.type._parse({
          data: Vt,
          path: et.path,
          parent: et
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class ce extends Pt {
      _parse(tt) {
        const {
          status: et,
          ctx: Vt
        } = this._processInputParams(tt);
        if (Vt.common.async) {
          return (async () => {
            const tt = await this._def.in._parseAsync({
              data: Vt.data,
              path: Vt.path,
              parent: Vt
            });
            return "aborted" === tt.status ? Jt : "Sf" === tt.status ? (et.Sf(), Ct(tt.value)) : this._def.out._parseAsync({
              data: tt.value,
              path: Vt.path,
              parent: Vt
            })
          })()
        } {
          const tt = this._def.in._parseSync({
            data: Vt.data,
            path: Vt.path,
            parent: Vt
          });
          return "aborted" === tt.status ? Jt : "Sf" === tt.status ? (et.Sf(), {
            status: "Sf",
            value: tt.value
          }) : this._def.out._parseSync({
            data: tt.value,
            path: Vt.path,
            parent: Vt
          })
        }
      }
      static create(tt, et) {
        return new ce({
          in: tt,
          out: et,
          typeName: Ze.ZodPipeline
        })
      }
    }
    class Re extends Pt {
      _parse(tt) {
        const et = this._def.innerType._parse(tt);
        return vt(et) && (et.value = Object.freeze(et.value)), et
      }
    }
    Re.create = (tt, et) => new Re({
      innerType: tt,
      typeName: Ze.ZodReadonly,
      ...It(et)
    });
    const Ie = function(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        return tt ? st.create().superRefine(((Ot, qt) => {
          var Dt, mt;
          if (!tt(Ot)) {
            const tt = "function" === typeof et ? et(Ot) : "string" === typeof et ? {
                message: et
              } : et,
              dt = null === (mt = null !== (Dt = tt.fatal) && void 0 !== Dt ? Dt : Vt) || void 0 === mt || mt,
              jt = "string" === typeof tt ? {
                message: tt
              } : tt;
            qt.addIssue({
              code: "custom",
              ...jt,
              fatal: dt
            })
          }
        })) : st.create()
      },
      Pe = {
        object: qe.lazycreate
      };
    var Ze;
    ! function(tt) {
      tt.ZodString = "ZodString", tt.ZodNumber = "ZodNumber", tt.ZodNaN = "ZodNaN", tt.ZodBigInt = "ZodBigInt", tt.ZodBoolean = "ZodBoolean", tt.ZodDate = "ZodDate", tt.ZodSymbol = "ZodSymbol", tt.ZodUndefined = "ZodUndefined", tt.ZodNull = "ZodNull", tt.ZodAny = "ZodAny", tt.ZodUnknown = "ZodUnknown", tt.ZodNever = "ZodNever", tt.ZodVoid = "ZodVoid", tt.ZodArray = "ZodArray", tt.ZodObject = "ZodObject", tt.ZodUnion = "ZodUnion", tt.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", tt.ZodIntersection = "ZodIntersection", tt.ZodTuple = "ZodTuple", tt.ZodRecord = "ZodRecord", tt.ZodMap = "ZodMap", tt.ZodSet = "ZodSet", tt.ZodFunction = "ZodFunction", tt.ZodLazy = "ZodLazy", tt.ZodLiteral = "ZodLiteral", tt.ZodEnum = "ZodEnum", tt.ZodEffects = "ZodEffects", tt.ZodNativeEnum = "ZodNativeEnum", tt.ZodOptional = "ZodOptional", tt.ZodNullable = "ZodNullable", tt.ZodDefault = "ZodDefault", tt.ZodCatch = "ZodCatch", tt.ZodPromise = "ZodPromise", tt.ZodBranded = "ZodBranded", tt.ZodPipeline = "ZodPipeline", tt.ZodReadonly = "ZodReadonly"
    }(Ze || (Ze = {}));
    const Le = Ut.create,
      Fe = it.create,
      ke = ve.create,
      Ge = Yt.create,
      ze = Bt.create,
      oe = pt.create,
      re = xt.create,
      Ue = Tt.create,
      Ae = gt.create,
      ie = st.create,
      Ye = nt.create,
      Be = te.create,
      pe = ee.create,
      xe = Ve.create,
      Te = qe.create,
      ge = qe.strictCreate,
      se = De.create,
      ne = de.create,
      tV = He.create,
      eV = Xe.create,
      VV = Qe.create,
      OV = le.create,
      qV = Ee.create,
      DV = fe.create,
      mV = we.create,
      dV = ye.create,
      jV = ae.create,
      HV = Me.create,
      XV = be.create,
      QV = Je.create,
      lV = Ce.create,
      EV = ue.create,
      fV = Je.createWithPreprocess,
      wV = ce.create,
      yV = {
        string: tt => Ut.create({
          ...tt,
          coerce: !0
        }),
        number: tt => it.create({
          ...tt,
          coerce: !0
        }),
        boolean: tt => Bt.create({
          ...tt,
          coerce: !0
        }),
        bigint: tt => Yt.create({
          ...tt,
          coerce: !0
        }),
        date: tt => pt.create({
          ...tt,
          coerce: !0
        })
      },
      NV = Jt;
    var aV = Object.freeze({
        __proto__: null,
        defaultErrorMap: ft,
        setErrorMap: function(tt) {
          wt = tt
        },
        getErrorMap: yt,
        makeIssue: Nt,
        EMPTY_PATH: [],
        addIssueToContext: Mt,
        ParseStatus: bt,
        INVALID: Jt,
        DIRTY: Ct,
        OK: ut,
        isAborted: Kt,
        isDirty: ht,
        isValid: vt,
        isAsync: Wt,
        get util() {
          return dt
        },
        get objectUtil() {
          return jt
        },
        ZodParsedType: Xt,
        getParsedType: Qt,
        ZodType: Pt,
        ZodString: Ut,
        ZodNumber: it,
        ZodBigInt: Yt,
        ZodBoolean: Bt,
        ZodDate: pt,
        ZodSymbol: xt,
        ZodUndefined: Tt,
        ZodNull: gt,
        ZodAny: st,
        ZodUnknown: nt,
        ZodNever: te,
        ZodVoid: ee,
        ZodArray: Ve,
        ZodObject: qe,
        ZodUnion: De,
        ZodDiscriminatedUnion: de,
        ZodIntersection: He,
        ZodTuple: Xe,
        ZodRecord: Qe,
        ZodMap: le,
        ZodSet: Ee,
        ZodFunction: fe,
        ZodLazy: we,
        ZodLiteral: ye,
        ZodEnum: ae,
        ZodNativeEnum: Me,
        ZodPromise: be,
        ZodEffects: Je,
        ZodTransformer: Je,
        ZodOptional: Ce,
        ZodNullable: ue,
        ZodDefault: Ke,
        ZodCatch: he,
        ZodNaN: ve,
        BRAND: We,
        ZodBranded: Se,
        ZodPipeline: ce,
        ZodReadonly: Re,
        custom: Ie,
        Schema: Pt,
        ZodSchema: Pt,
        late: Pe,
        get ZodFirstPartyTypeKind() {
          return Ze
        },
        coerce: yV,
        any: ie,
        array: xe,
        bigint: Ge,
        boolean: ze,
        date: oe,
        discriminatedUnion: ne,
        effect: QV,
        enum: jV,
        function: DV,
        instanceof: function(tt) {
          let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${tt.name}`
          };
          return Ie((et => et instanceof tt), et)
        },
        intersection: tV,
        lazy: mV,
        literal: dV,
        map: OV,
        nan: ke,
        nativeEnum: HV,
        never: Be,
        null: Ae,
        nullable: EV,
        number: Fe,
        object: Te,
        oboolean: () => ze().optional(),
        onumber: () => Fe().optional(),
        optional: lV,
        ostring: () => Le().optional(),
        pipeline: wV,
        preprocess: fV,
        promise: XV,
        record: VV,
        set: qV,
        strictObject: ge,
        string: Le,
        symbol: re,
        transformer: QV,
        tuple: eV,
        undefined: Ue,
        union: se,
        unknown: Ye,
        void: pe,
        NEVER: NV,
        ZodIssueCode: lt,
        quotelessJson: tt => JSON.stringify(tt, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: Et
      }),
      MV = {
        exports: {}
      };
    ! function(tt) {
      var et = function(tt) {
        var Vt = 1e7,
          Ot = 9007199254740992,
          qt = lt(Ot),
          Dt = "0123456789abcdefghijklmnopqrstuvwxyz",
          mt = "function" === typeof BigInt;

        function dt(tt, et, Vt, Ot) {
          return "undefined" === typeof tt ? dt[0] : "undefined" !== typeof et && (10 !== +et || Vt) ? Bt(tt, et, Vt, Ot) : st(tt)
        }

        function jt(tt, et) {
          this.value = tt, this.sign = et, this.isSmall = !1
        }

        function Ht(tt) {
          this.value = tt, this.sign = tt < 0, this.isSmall = !0
        }

        function Xt(tt) {
          this.value = tt
        }

        function Qt(tt) {
          return -Ot < tt && tt < Ot
        }

        function lt(tt) {
          return tt < 1e7 ? [tt] : tt < 1e14 ? [tt % 1e7, Math.floor(tt / 1e7)] : [tt % 1e7, Math.floor(tt / 1e7) % 1e7, Math.floor(tt / 1e14)]
        }

        function Et(tt) {
          ft(tt);
          var et = tt.length;
          if (et < 4 && It(tt, qt) < 0) switch (et) {
            case 0:
              return 0;
            case 1:
              return tt[0];
            case 2:
              return tt[0] + tt[1] * Vt;
            default:
              return tt[0] + (tt[1] + tt[2] * Vt) * Vt
          }
          return tt
        }

        function ft(tt) {
          for (var et = tt.length; 0 === tt[--et];);
          tt.length = et + 1
        }

        function wt(tt) {
          for (var et = new Array(tt), Vt = -1; ++Vt < tt;) et[Vt] = 0;
          return et
        }

        function yt(tt) {
          return tt > 0 ? Math.floor(tt) : Math.ceil(tt)
        }

        function Nt(tt, et) {
          var Ot, qt, Dt = tt.length,
            mt = et.length,
            dt = new Array(Dt),
            jt = 0,
            Ht = Vt;
          for (qt = 0; qt < mt; qt++) jt = (Ot = tt[qt] + et[qt] + jt) >= Ht ? 1 : 0, dt[qt] = Ot - jt * Ht;
          for (; qt < Dt;) jt = (Ot = tt[qt] + jt) === Ht ? 1 : 0, dt[qt++] = Ot - jt * Ht;
          return jt > 0 && dt.push(jt), dt
        }

        function Mt(tt, et) {
          return tt.length >= et.length ? Nt(tt, et) : Nt(et, tt)
        }

        function bt(tt, et) {
          var Ot, qt, Dt = tt.length,
            mt = new Array(Dt),
            dt = Vt;
          for (qt = 0; qt < Dt; qt++) Ot = tt[qt] - dt + et, et = Math.floor(Ot / dt), mt[qt] = Ot - et * dt, et += 1;
          for (; et > 0;) mt[qt++] = et % dt, et = Math.floor(et / dt);
          return mt
        }

        function Jt(tt, et) {
          var Ot, qt, Dt = tt.length,
            mt = et.length,
            dt = new Array(Dt),
            jt = 0,
            Ht = Vt;
          for (Ot = 0; Ot < mt; Ot++)(qt = tt[Ot] - jt - et[Ot]) < 0 ? (qt += Ht, jt = 1) : jt = 0, dt[Ot] = qt;
          for (Ot = mt; Ot < Dt; Ot++) {
            if (!((qt = tt[Ot] - jt) < 0)) {
              dt[Ot++] = qt;
              break
            }
            qt += Ht, dt[Ot] = qt
          }
          for (; Ot < Dt; Ot++) dt[Ot] = tt[Ot];
          return ft(dt), dt
        }

        function Ct(tt, et, Ot) {
          var qt, Dt, mt = tt.length,
            dt = new Array(mt),
            Xt = -et,
            Qt = Vt;
          for (qt = 0; qt < mt; qt++) Dt = tt[qt] + Xt, Xt = Math.floor(Dt / Qt), Dt %= Qt, dt[qt] = Dt < 0 ? Dt + Qt : Dt;
          return "number" === typeof(dt = Et(dt)) ? (Ot && (dt = -dt), new Ht(dt)) : new jt(dt, Ot)
        }

        function ut(tt, et) {
          var Ot, qt, Dt, mt, dt = tt.length,
            jt = et.length,
            Ht = wt(dt + jt),
            Xt = Vt;
          for (Dt = 0; Dt < dt; ++Dt) {
            mt = tt[Dt];
            for (var Qt = 0; Qt < jt; ++Qt) Ot = mt * et[Qt] + Ht[Dt + Qt], qt = Math.floor(Ot / Xt), Ht[Dt + Qt] = Ot - qt * Xt, Ht[Dt + Qt + 1] += qt
          }
          return ft(Ht), Ht
        }

        function Kt(tt, et) {
          var Ot, qt, Dt = tt.length,
            mt = new Array(Dt),
            dt = Vt,
            jt = 0;
          for (qt = 0; qt < Dt; qt++) Ot = tt[qt] * et + jt, jt = Math.floor(Ot / dt), mt[qt] = Ot - jt * dt;
          for (; jt > 0;) mt[qt++] = jt % dt, jt = Math.floor(jt / dt);
          return mt
        }

        function ht(tt, et) {
          for (var Vt = []; et-- > 0;) Vt.push(0);
          return Vt.concat(tt)
        }

        function vt(tt, et) {
          var Vt = Math.max(tt.length, et.length);
          if (Vt <= 30) return ut(tt, et);
          Vt = Math.ceil(Vt / 2);
          var Ot = tt.slice(Vt),
            qt = tt.slice(0, Vt),
            Dt = et.slice(Vt),
            mt = et.slice(0, Vt),
            dt = vt(qt, mt),
            jt = vt(Ot, Dt),
            Ht = vt(Mt(qt, Ot), Mt(mt, Dt)),
            Xt = Mt(Mt(dt, ht(Jt(Jt(Ht, dt), jt), Vt)), ht(jt, 2 * Vt));
          return ft(Xt), Xt
        }

        function Wt(tt, et, Ot) {
          return new jt(tt < Vt ? Kt(et, tt) : ut(et, lt(tt)), Ot)
        }

        function St(tt) {
          var et, Ot, qt, Dt, mt = tt.length,
            dt = wt(mt + mt),
            jt = Vt;
          for (qt = 0; qt < mt; qt++) {
            Ot = 0 - (Dt = tt[qt]) * Dt;
            for (var Ht = qt; Ht < mt; Ht++) et = Dt * tt[Ht] * 2 + dt[qt + Ht] + Ot, Ot = Math.floor(et / jt), dt[qt + Ht] = et - Ot * jt;
            dt[qt + mt] = Ot
          }
          return ft(dt), dt
        }

        function ct(tt, et) {
          var Ot, qt, Dt, mt, dt = tt.length,
            jt = wt(dt),
            Ht = Vt;
          for (Dt = 0, Ot = dt - 1; Ot >= 0; --Ot) Dt = (mt = Dt * Ht + tt[Ot]) - (qt = yt(mt / et)) * et, jt[Ot] = 0 | qt;
          return [jt, 0 | Dt]
        }

        function Rt(tt, et) {
          var Ot, qt = st(et);
          if (mt) return [new Xt(tt.value / qt.value), new Xt(tt.value % qt.value)];
          var Dt, Qt = tt.value,
            Nt = qt.value;
          if (0 === Nt) throw new Error("Cannot divide by zero");
          if (tt.isSmall) return qt.isSmall ? [new Ht(yt(Qt / Nt)), new Ht(Qt % Nt)] : [dt[0], tt];
          if (qt.isSmall) {
            if (1 === Nt) return [tt, dt[0]];
            if (-1 == Nt) return [tt.gq(), dt[0]];
            var Mt = Math.abs(Nt);
            if (Mt < Vt) {
              Dt = Et((Ot = ct(Qt, Mt))[0]);
              var bt = Ot[1];
              return tt.sign && (bt = -bt), "number" === typeof Dt ? (tt.sign !== qt.sign && (Dt = -Dt), [new Ht(Dt), new Ht(bt)]) : [new jt(Dt, tt.sign !== qt.sign), new Ht(bt)]
            }
            Nt = lt(Mt)
          }
          var Ct = It(Qt, Nt);
          if (-1 === Ct) return [dt[0], tt];
          if (0 === Ct) return [dt[tt.sign === qt.sign ? 1 : -1], dt[0]];
          Ot = Qt.length + Nt.length <= 200 ? function(tt, et) {
            var Ot, qt, Dt, mt, dt, jt, Ht, Xt = tt.length,
              Qt = et.length,
              lt = Vt,
              ft = wt(et.length),
              yt = et[Qt - 1],
              Nt = Math.ceil(lt / (2 * yt)),
              Mt = Kt(tt, Nt),
              bt = Kt(et, Nt);
            for (Mt.length <= Xt && Mt.push(0), bt.push(0), yt = bt[Qt - 1], qt = Xt - Qt; qt >= 0; qt--) {
              for (Ot = lt - 1, Mt[qt + Qt] !== yt && (Ot = Math.floor((Mt[qt + Qt] * lt + Mt[qt + Qt - 1]) / yt)), Dt = 0, mt = 0, jt = bt.length, dt = 0; dt < jt; dt++) Dt += Ot * bt[dt], Ht = Math.floor(Dt / lt), mt += Mt[qt + dt] - (Dt - Ht * lt), Dt = Ht, mt < 0 ? (Mt[qt + dt] = mt + lt, mt = -1) : (Mt[qt + dt] = mt, mt = 0);
              for (; 0 !== mt;) {
                for (Ot -= 1, Dt = 0, dt = 0; dt < jt; dt++)(Dt += Mt[qt + dt] - lt + bt[dt]) < 0 ? (Mt[qt + dt] = Dt + lt, Dt = 0) : (Mt[qt + dt] = Dt, Dt = 1);
                mt += Dt
              }
              ft[qt] = Ot
            }
            return Mt = ct(Mt, Nt)[0], [Et(ft), Et(Mt)]
          }(Qt, Nt) : function(tt, et) {
            for (var Ot, qt, Dt, mt, dt, jt = tt.length, Ht = et.length, Xt = [], Qt = [], lt = Vt; jt;)
              if (Qt.unshift(tt[--jt]), ft(Qt), It(Qt, et) < 0) Xt.push(0);
              else {
                Dt = Qt[(qt = Qt.length) - 1] * lt + Qt[qt - 2], mt = et[Ht - 1] * lt + et[Ht - 2], qt > Ht && (Dt = (Dt + 1) * lt), Ot = Math.ceil(Dt / mt);
                do {
                  if (It(dt = Kt(et, Ot), Qt) <= 0) break;
                  Ot--
                } while (Ot);
                Xt.push(Ot), Qt = Jt(Qt, dt)
              } return Xt.reverse(), [Et(Xt), Et(Qt)]
          }(Qt, Nt), Dt = Ot[0];
          var ut = tt.sign !== qt.sign,
            ht = Ot[1],
            vt = tt.sign;
          return "number" === typeof Dt ? (ut && (Dt = -Dt), Dt = new Ht(Dt)) : Dt = new jt(Dt, ut), "number" === typeof ht ? (vt && (ht = -ht), ht = new Ht(ht)) : ht = new jt(ht, vt), [Dt, ht]
        }

        function It(tt, et) {
          if (tt.length !== et.length) return tt.length > et.length ? 1 : -1;
          for (var Vt = tt.length - 1; Vt >= 0; Vt--)
            if (tt[Vt] !== et[Vt]) return tt[Vt] > et[Vt] ? 1 : -1;
          return 0
        }

        function Pt(tt) {
          var et = tt.abs();
          return !et.isUnit() && (!!(et.equals(2) || et.equals(3) || et.equals(5)) || !(et.isEven() || et.isDivisibleBy(3) || et.isDivisibleBy(5)) && (!!et.lesser(49) || void 0))
        }

        function Zt(tt, Vt) {
          for (var Ot, qt, Dt, mt = tt.prev(), dt = mt, jt = 0; dt.isEven();) dt = dt.divide(2), jt++;
          tt: for (qt = 0; qt < Vt.length; qt++)
            if (!tt.lesser(Vt[qt]) && !(Dt = et(Vt[qt]).modPow(dt, tt)).isUnit() && !Dt.equals(mt)) {
              for (Ot = jt - 1; 0 != Ot; Ot--) {
                if ((Dt = Dt.square().mod(tt)).isUnit()) return !1;
                if (Dt.equals(mt)) continue tt
              }
              return !1
            }
          return !0
        }
        jt.prototype = Object.create(dt.prototype), Ht.prototype = Object.create(dt.prototype), Xt.prototype = Object.create(dt.prototype), jt.prototype.add = function(tt) {
          var et = st(tt);
          if (this.sign !== et.sign) return this.subtract(et.gq());
          var Vt = this.value,
            Ot = et.value;
          return et.isSmall ? new jt(bt(Vt, Math.abs(Ot)), this.sign) : new jt(Mt(Vt, Ot), this.sign)
        }, jt.prototype.plus = jt.prototype.add, Ht.prototype.add = function(tt) {
          var et = st(tt),
            Vt = this.value;
          if (Vt < 0 !== et.sign) return this.subtract(et.gq());
          var Ot = et.value;
          if (et.isSmall) {
            if (Qt(Vt + Ot)) return new Ht(Vt + Ot);
            Ot = lt(Math.abs(Ot))
          }
          return new jt(bt(Ot, Math.abs(Vt)), Vt < 0)
        }, Ht.prototype.plus = Ht.prototype.add, Xt.prototype.add = function(tt) {
          return new Xt(this.value + st(tt).value)
        }, Xt.prototype.plus = Xt.prototype.add, jt.prototype.subtract = function(tt) {
          var et = st(tt);
          if (this.sign !== et.sign) return this.add(et.gq());
          var Vt = this.value,
            Ot = et.value;
          return et.isSmall ? Ct(Vt, Math.abs(Ot), this.sign) : function(tt, et, Vt) {
            var Ot;
            return It(tt, et) >= 0 ? Ot = Jt(tt, et) : (Ot = Jt(et, tt), Vt = !Vt), "number" === typeof(Ot = Et(Ot)) ? (Vt && (Ot = -Ot), new Ht(Ot)) : new jt(Ot, Vt)
          }(Vt, Ot, this.sign)
        }, jt.prototype.minus = jt.prototype.subtract, Ht.prototype.subtract = function(tt) {
          var et = st(tt),
            Vt = this.value;
          if (Vt < 0 !== et.sign) return this.add(et.gq());
          var Ot = et.value;
          return et.isSmall ? new Ht(Vt - Ot) : Ct(Ot, Math.abs(Vt), Vt >= 0)
        }, Ht.prototype.minus = Ht.prototype.subtract, Xt.prototype.subtract = function(tt) {
          return new Xt(this.value - st(tt).value)
        }, Xt.prototype.minus = Xt.prototype.subtract, jt.prototype.gq = function() {
          return new jt(this.value, !this.sign)
        }, Ht.prototype.gq = function() {
          var tt = this.sign,
            et = new Ht(-this.value);
          return et.sign = !tt, et
        }, Xt.prototype.gq = function() {
          return new Xt(-this.value)
        }, jt.prototype.abs = function() {
          return new jt(this.value, !1)
        }, Ht.prototype.abs = function() {
          return new Ht(Math.abs(this.value))
        }, Xt.prototype.abs = function() {
          return new Xt(this.value >= 0 ? this.value : -this.value)
        }, jt.prototype.multiply = function(tt) {
          var et, Ot, qt, Dt = st(tt),
            mt = this.value,
            Ht = Dt.value,
            Xt = this.sign !== Dt.sign;
          if (Dt.isSmall) {
            if (0 === Ht) return dt[0];
            if (1 === Ht) return this;
            if (-1 === Ht) return this.gq();
            if ((et = Math.abs(Ht)) < Vt) return new jt(Kt(mt, et), Xt);
            Ht = lt(et)
          }
          return Ot = mt.length, qt = Ht.length, new jt(-.012 * Ot - .012 * qt + 15e-6 * Ot * qt > 0 ? vt(mt, Ht) : ut(mt, Ht), Xt)
        }, jt.prototype.times = jt.prototype.multiply, Ht.prototype._multiplyBySmall = function(tt) {
          return Qt(tt.value * this.value) ? new Ht(tt.value * this.value) : Wt(Math.abs(tt.value), lt(Math.abs(this.value)), this.sign !== tt.sign)
        }, jt.prototype._multiplyBySmall = function(tt) {
          return 0 === tt.value ? dt[0] : 1 === tt.value ? this : -1 === tt.value ? this.gq() : Wt(Math.abs(tt.value), this.value, this.sign !== tt.sign)
        }, Ht.prototype.multiply = function(tt) {
          return st(tt)._multiplyBySmall(this)
        }, Ht.prototype.times = Ht.prototype.multiply, Xt.prototype.multiply = function(tt) {
          return new Xt(this.value * st(tt).value)
        }, Xt.prototype.times = Xt.prototype.multiply, jt.prototype.square = function() {
          return new jt(St(this.value), !1)
        }, Ht.prototype.square = function() {
          var tt = this.value * this.value;
          return Qt(tt) ? new Ht(tt) : new jt(St(lt(Math.abs(this.value))), !1)
        }, Xt.prototype.square = function(tt) {
          return new Xt(this.value * this.value)
        }, jt.prototype.divmod = function(tt) {
          var et = Rt(this, tt);
          return {
            quotient: et[0],
            remainder: et[1]
          }
        }, Xt.prototype.divmod = Ht.prototype.divmod = jt.prototype.divmod, jt.prototype.divide = function(tt) {
          return Rt(this, tt)[0]
        }, Xt.prototype.over = Xt.prototype.divide = function(tt) {
          return new Xt(this.value / st(tt).value)
        }, Ht.prototype.over = Ht.prototype.divide = jt.prototype.over = jt.prototype.divide, jt.prototype.mod = function(tt) {
          return Rt(this, tt)[1]
        }, Xt.prototype.mod = Xt.prototype.remainder = function(tt) {
          return new Xt(this.value % st(tt).value)
        }, Ht.prototype.remainder = Ht.prototype.mod = jt.prototype.remainder = jt.prototype.mod, jt.prototype.pow = function(tt) {
          var et, Vt, Ot, qt = st(tt),
            Dt = this.value,
            mt = qt.value;
          if (0 === mt) return dt[1];
          if (0 === Dt) return dt[0];
          if (1 === Dt) return dt[1];
          if (-1 === Dt) return qt.isEven() ? dt[1] : dt[-1];
          if (qt.sign) return dt[0];
          if (!qt.isSmall) throw new Error("The exponent " + qt.toString() + " is too large.");
          if (this.isSmall && Qt(et = Math.pow(Dt, mt))) return new Ht(yt(et));
          for (Vt = this, Ot = dt[1]; !0 & mt && (Ot = Ot.times(Vt), --mt), 0 !== mt;) mt /= 2, Vt = Vt.square();
          return Ot
        }, Ht.prototype.pow = jt.prototype.pow, Xt.prototype.pow = function(tt) {
          var et = st(tt),
            Vt = this.value,
            Ot = et.value,
            qt = BigInt(0),
            Dt = BigInt(1),
            mt = BigInt(2);
          if (Ot === qt) return dt[1];
          if (Vt === qt) return dt[0];
          if (Vt === Dt) return dt[1];
          if (Vt === BigInt(-1)) return et.isEven() ? dt[1] : dt[-1];
          if (et.isNegative()) return new Xt(qt);
          for (var jt = this, Ht = dt[1];
            (Ot & Dt) === Dt && (Ht = Ht.times(jt), --Ot), Ot !== qt;) Ot /= mt, jt = jt.square();
          return Ht
        }, jt.prototype.modPow = function(tt, et) {
          if (tt = st(tt), (et = st(et)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var Vt = dt[1],
            Ot = this.mod(et);
          for (tt.isNegative() && (tt = tt.multiply(dt[-1]), Ot = Ot.modInv(et)); tt.isPositive();) {
            if (Ot.isZero()) return dt[0];
            tt.isOdd() && (Vt = Vt.multiply(Ot).mod(et)), tt = tt.divide(2), Ot = Ot.square().mod(et)
          }
          return Vt
        }, Xt.prototype.modPow = Ht.prototype.modPow = jt.prototype.modPow, jt.prototype.compareAbs = function(tt) {
          var et = st(tt),
            Vt = this.value,
            Ot = et.value;
          return et.isSmall ? 1 : It(Vt, Ot)
        }, Ht.prototype.compareAbs = function(tt) {
          var et = st(tt),
            Vt = Math.abs(this.value),
            Ot = et.value;
          return et.isSmall ? Vt === (Ot = Math.abs(Ot)) ? 0 : Vt > Ot ? 1 : -1 : -1
        }, Xt.prototype.compareAbs = function(tt) {
          var et = this.value,
            Vt = st(tt).value;
          return (et = et >= 0 ? et : -et) === (Vt = Vt >= 0 ? Vt : -Vt) ? 0 : et > Vt ? 1 : -1
        }, jt.prototype.compare = function(tt) {
          if (tt === 1 / 0) return -1;
          if (tt === -1 / 0) return 1;
          var et = st(tt),
            Vt = this.value,
            Ot = et.value;
          return this.sign !== et.sign ? et.sign ? 1 : -1 : et.isSmall ? this.sign ? -1 : 1 : It(Vt, Ot) * (this.sign ? -1 : 1)
        }, jt.prototype.compareTo = jt.prototype.compare, Ht.prototype.compare = function(tt) {
          if (tt === 1 / 0) return -1;
          if (tt === -1 / 0) return 1;
          var et = st(tt),
            Vt = this.value,
            Ot = et.value;
          return et.isSmall ? Vt == Ot ? 0 : Vt > Ot ? 1 : -1 : Vt < 0 !== et.sign ? Vt < 0 ? -1 : 1 : Vt < 0 ? 1 : -1
        }, Ht.prototype.compareTo = Ht.prototype.compare, Xt.prototype.compare = function(tt) {
          if (tt === 1 / 0) return -1;
          if (tt === -1 / 0) return 1;
          var et = this.value,
            Vt = st(tt).value;
          return et === Vt ? 0 : et > Vt ? 1 : -1
        }, Xt.prototype.compareTo = Xt.prototype.compare, jt.prototype.equals = function(tt) {
          return 0 === this.compare(tt)
        }, Xt.prototype.eq = Xt.prototype.equals = Ht.prototype.eq = Ht.prototype.equals = jt.prototype.eq = jt.prototype.equals, jt.prototype.notEquals = function(tt) {
          return 0 !== this.compare(tt)
        }, Xt.prototype.neq = Xt.prototype.notEquals = Ht.prototype.neq = Ht.prototype.notEquals = jt.prototype.neq = jt.prototype.notEquals, jt.prototype.greater = function(tt) {
          return this.compare(tt) > 0
        }, Xt.prototype.gt = Xt.prototype.greater = Ht.prototype.gt = Ht.prototype.greater = jt.prototype.gt = jt.prototype.greater, jt.prototype.lesser = function(tt) {
          return this.compare(tt) < 0
        }, Xt.prototype.lt = Xt.prototype.lesser = Ht.prototype.lt = Ht.prototype.lesser = jt.prototype.lt = jt.prototype.lesser, jt.prototype.greaterOrEquals = function(tt) {
          return this.compare(tt) >= 0
        }, Xt.prototype.geq = Xt.prototype.greaterOrEquals = Ht.prototype.geq = Ht.prototype.greaterOrEquals = jt.prototype.geq = jt.prototype.greaterOrEquals, jt.prototype.lesserOrEquals = function(tt) {
          return this.compare(tt) <= 0
        }, Xt.prototype.leq = Xt.prototype.lesserOrEquals = Ht.prototype.leq = Ht.prototype.lesserOrEquals = jt.prototype.leq = jt.prototype.lesserOrEquals, jt.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, Ht.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, Xt.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, jt.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, Ht.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, Xt.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, jt.prototype.isPositive = function() {
          return !this.sign
        }, Ht.prototype.isPositive = function() {
          return this.value > 0
        }, Xt.prototype.isPositive = Ht.prototype.isPositive, jt.prototype.isNegative = function() {
          return this.sign
        }, Ht.prototype.isNegative = function() {
          return this.value < 0
        }, Xt.prototype.isNegative = Ht.prototype.isNegative, jt.prototype.isUnit = function() {
          return !1
        }, Ht.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, Xt.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, jt.prototype.isZero = function() {
          return !1
        }, Ht.prototype.isZero = function() {
          return 0 === this.value
        }, Xt.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, jt.prototype.isDivisibleBy = function(tt) {
          var et = st(tt);
          return !et.isZero() && (!!et.isUnit() || (0 === et.compareAbs(2) ? this.isEven() : this.mod(et).isZero()))
        }, Xt.prototype.isDivisibleBy = Ht.prototype.isDivisibleBy = jt.prototype.isDivisibleBy, jt.prototype.isPrime = function(Vt) {
          var Ot = Pt(this);
          if (Ot !== tt) return Ot;
          var qt = this.abs(),
            Dt = qt.bitLength();
          if (Dt <= 64) return Zt(qt, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var mt = Math.log(2) * Dt.toJSNumber(), dt = Math.ceil(!0 === Vt ? 2 * Math.pow(mt, 2) : mt), jt = [], Ht = 0; Ht < dt; Ht++) jt.push(et(Ht + 2));
          return Zt(qt, jt)
        }, Xt.prototype.isPrime = Ht.prototype.isPrime = jt.prototype.isPrime, jt.prototype.isProbablePrime = function(Vt, Ot) {
          var qt = Pt(this);
          if (qt !== tt) return qt;
          for (var Dt = this.abs(), mt = Vt === tt ? 5 : Vt, dt = [], jt = 0; jt < mt; jt++) dt.push(et.randBetween(2, Dt.minus(2), Ot));
          return Zt(Dt, dt)
        }, Xt.prototype.isProbablePrime = Ht.prototype.isProbablePrime = jt.prototype.isProbablePrime, jt.prototype.modInv = function(tt) {
          for (var Vt, Ot, qt, Dt = et.zero, mt = et.one, dt = st(tt), jt = this.abs(); !jt.isZero();) Vt = dt.divide(jt), Ot = Dt, qt = dt, Dt = mt, dt = jt, mt = Ot.subtract(Vt.multiply(mt)), jt = qt.subtract(Vt.multiply(jt));
          if (!dt.isUnit()) throw new Error(this.toString() + " and " + tt.toString() + " are not co-prime");
          return -1 === Dt.compare(0) && (Dt = Dt.add(tt)), this.isNegative() ? Dt.gq() : Dt
        }, Xt.prototype.modInv = Ht.prototype.modInv = jt.prototype.modInv, jt.prototype.next = function() {
          var tt = this.value;
          return this.sign ? Ct(tt, 1, this.sign) : new jt(bt(tt, 1), this.sign)
        }, Ht.prototype.next = function() {
          var tt = this.value;
          return tt + 1 < Ot ? new Ht(tt + 1) : new jt(qt, !1)
        }, Xt.prototype.next = function() {
          return new Xt(this.value + BigInt(1))
        }, jt.prototype.prev = function() {
          var tt = this.value;
          return this.sign ? new jt(bt(tt, 1), !0) : Ct(tt, 1, this.sign)
        }, Ht.prototype.prev = function() {
          var tt = this.value;
          return tt - 1 > -Ot ? new Ht(tt - 1) : new jt(qt, !0)
        }, Xt.prototype.prev = function() {
          return new Xt(this.value - BigInt(1))
        };
        for (var Lt = [1]; 2 * Lt[Lt.length - 1] <= Vt;) Lt.push(2 * Lt[Lt.length - 1]);
        var Ft = Lt.length,
          kt = Lt[Ft - 1];

        function Gt(tt) {
          return Math.abs(tt) <= Vt
        }

        function zt(tt, Vt, Ot) {
          Vt = st(Vt);
          for (var qt = tt.isNegative(), Dt = Vt.isNegative(), mt = qt ? tt.not() : tt, dt = Dt ? Vt.not() : Vt, jt = 0, Ht = 0, Xt = null, Qt = null, lt = []; !mt.isZero() || !dt.isZero();) jt = (Xt = Rt(mt, kt))[1].toJSNumber(), qt && (jt = kt - 1 - jt), Ht = (Qt = Rt(dt, kt))[1].toJSNumber(), Dt && (Ht = kt - 1 - Ht), mt = Xt[0], dt = Qt[0], lt.push(Ot(jt, Ht));
          for (var Et = 0 !== Ot(qt ? 1 : 0, Dt ? 1 : 0) ? et(-1) : et(0), ft = lt.length - 1; ft >= 0; ft -= 1) Et = Et.multiply(kt).add(et(lt[ft]));
          return Et
        }
        jt.prototype.shiftLeft = function(tt) {
          var et = st(tt).toJSNumber();
          if (!Gt(et)) throw new Error(String(et) + " is too large for shifting.");
          if (et < 0) return this.shiftRight(-et);
          var Vt = this;
          if (Vt.isZero()) return Vt;
          for (; et >= Ft;) Vt = Vt.multiply(kt), et -= Ft - 1;
          return Vt.multiply(Lt[et])
        }, Xt.prototype.shiftLeft = Ht.prototype.shiftLeft = jt.prototype.shiftLeft, jt.prototype.shiftRight = function(tt) {
          var et, Vt = st(tt).toJSNumber();
          if (!Gt(Vt)) throw new Error(String(Vt) + " is too large for shifting.");
          if (Vt < 0) return this.shiftLeft(-Vt);
          for (var Ot = this; Vt >= Ft;) {
            if (Ot.isZero() || Ot.isNegative() && Ot.isUnit()) return Ot;
            Ot = (et = Rt(Ot, kt))[1].isNegative() ? et[0].prev() : et[0], Vt -= Ft - 1
          }
          return (et = Rt(Ot, Lt[Vt]))[1].isNegative() ? et[0].prev() : et[0]
        }, Xt.prototype.shiftRight = Ht.prototype.shiftRight = jt.prototype.shiftRight, jt.prototype.not = function() {
          return this.gq().prev()
        }, Xt.prototype.not = Ht.prototype.not = jt.prototype.not, jt.prototype.and = function(tt) {
          return zt(this, tt, (function(tt, et) {
            return tt & et
          }))
        }, Xt.prototype.and = Ht.prototype.and = jt.prototype.and, jt.prototype.or = function(tt) {
          return zt(this, tt, (function(tt, et) {
            return tt | et
          }))
        }, Xt.prototype.or = Ht.prototype.or = jt.prototype.or, jt.prototype.xor = function(tt) {
          return zt(this, tt, (function(tt, et) {
            return tt ^ et
          }))
        }, Xt.prototype.xor = Ht.prototype.xor = jt.prototype.xor;
        var ot = 1 << 30;

        function rt(tt) {
          var et = tt.value,
            Ot = "number" === typeof et ? et | ot : "bigint" === typeof et ? et | BigInt(ot) : et[0] + et[1] * Vt | 1073758208;
          return Ot & -Ot
        }

        function Ut(tt, Vt) {
          if (Vt.compareTo(tt) <= 0) {
            var Ot = Ut(tt, Vt.square(Vt)),
              qt = Ot.p,
              Dt = Ot.e,
              mt = qt.multiply(Vt);
            return mt.compareTo(tt) <= 0 ? {
              p: mt,
              e: 2 * Dt + 1
            } : {
              p: qt,
              e: 2 * Dt
            }
          }
          return {
            p: et(1),
            e: 0
          }
        }

        function At(tt, et) {
          return tt = st(tt), et = st(et), tt.greater(et) ? tt : et
        }

        function it(tt, et) {
          return tt = st(tt), et = st(et), tt.lesser(et) ? tt : et
        }

        function Yt(tt, et) {
          if (tt = st(tt).abs(), et = st(et).abs(), tt.equals(et)) return tt;
          if (tt.isZero()) return et;
          if (et.isZero()) return tt;
          for (var Vt, Ot, qt = dt[1]; tt.isEven() && et.isEven();) Vt = it(rt(tt), rt(et)), tt = tt.divide(Vt), et = et.divide(Vt), qt = qt.multiply(Vt);
          for (; tt.isEven();) tt = tt.divide(rt(tt));
          do {
            for (; et.isEven();) et = et.divide(rt(et));
            tt.greater(et) && (Ot = et, et = tt, tt = Ot), et = et.subtract(tt)
          } while (!et.isZero());
          return qt.isUnit() ? tt : tt.multiply(qt)
        }
        jt.prototype.bitLength = function() {
          var tt = this;
          return tt.compareTo(et(0)) < 0 && (tt = tt.gq().subtract(et(1))), 0 === tt.compareTo(et(0)) ? et(0) : et(Ut(tt, et(2)).e).add(et(1))
        }, Xt.prototype.bitLength = Ht.prototype.bitLength = jt.prototype.bitLength;
        var Bt = function(tt, et, Vt, Ot) {
          Vt = Vt || Dt, tt = String(tt), Ot || (tt = tt.toLowerCase(), Vt = Vt.toLowerCase());
          var qt, mt = tt.length,
            dt = Math.abs(et),
            jt = {};
          for (qt = 0; qt < Vt.length; qt++) jt[Vt[qt]] = qt;
          for (qt = 0; qt < mt; qt++) {
            if ("-" !== (Qt = tt[qt]) && (Qt in jt && jt[Qt] >= dt)) {
              if ("1" === Qt && 1 === dt) continue;
              throw new Error(Qt + " is not a valid digit in base " + et + ".")
            }
          }
          et = st(et);
          var Ht = [],
            Xt = "-" === tt[0];
          for (qt = Xt ? 1 : 0; qt < tt.length; qt++) {
            var Qt;
            if ((Qt = tt[qt]) in jt) Ht.push(st(jt[Qt]));
            else {
              if ("<" !== Qt) throw new Error(Qt + " is not a valid character");
              var lt = qt;
              do {
                qt++
              } while (">" !== tt[qt] && qt < tt.length);
              Ht.push(st(tt.slice(lt + 1, qt)))
            }
          }
          return pt(Ht, et, Xt)
        };

        function pt(tt, et, Vt) {
          var Ot, qt = dt[0],
            Dt = dt[1];
          for (Ot = tt.length - 1; Ot >= 0; Ot--) qt = qt.add(tt[Ot].times(Dt)), Dt = Dt.times(et);
          return Vt ? qt.gq() : qt
        }

        function xt(tt, Vt) {
          if ((Vt = et(Vt)).isZero()) {
            if (tt.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (Vt.equals(-1)) {
            if (tt.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (tt.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-tt.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var Ot = Array.apply(null, Array(tt.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return Ot.unshift([1]), {
              value: [].concat.apply([], Ot),
              isNegative: !1
            }
          }
          var qt = !1;
          if (tt.isNegative() && Vt.isPositive() && (qt = !0, tt = tt.abs()), Vt.isUnit()) return tt.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(tt.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: qt
          };
          for (var Dt, mt = [], dt = tt; dt.isNegative() || dt.compareAbs(Vt) >= 0;) {
            Dt = dt.divmod(Vt), dt = Dt.quotient;
            var jt = Dt.remainder;
            jt.isNegative() && (jt = Vt.minus(jt).abs(), dt = dt.next()), mt.push(jt.toJSNumber())
          }
          return mt.push(dt.toJSNumber()), {
            value: mt.reverse(),
            isNegative: qt
          }
        }

        function Tt(tt, et, Vt) {
          var Ot = xt(tt, et);
          return (Ot.isNegative ? "-" : "") + Ot.value.map((function(tt) {
            return function(tt, et) {
              return tt < (et = et || Dt).length ? et[tt] : "<" + tt + ">"
            }(tt, Vt)
          })).join("")
        }

        function gt(tt) {
          if (Qt(+tt)) {
            var et = +tt;
            if (et === yt(et)) return mt ? new Xt(BigInt(et)) : new Ht(et);
            throw new Error("Invalid integer: " + tt)
          }
          var Vt = "-" === tt[0];
          Vt && (tt = tt.slice(1));
          var Ot = tt.split(/e/i);
          if (Ot.length > 2) throw new Error("Invalid integer: " + Ot.join("e"));
          if (2 === Ot.length) {
            var qt = Ot[1];
            if ("+" === qt[0] && (qt = qt.slice(1)), (qt = +qt) !== yt(qt) || !Qt(qt)) throw new Error("Invalid integer: " + qt + " is not a valid exponent.");
            var Dt = Ot[0],
              dt = Dt.indexOf(".");
            if (dt >= 0 && (qt -= Dt.length - dt - 1, Dt = Dt.slice(0, dt) + Dt.slice(dt + 1)), qt < 0) throw new Error("Cannot include negative exponent part for integers");
            tt = Dt += new Array(qt + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(tt)) throw new Error("Invalid integer: " + tt);
          if (mt) return new Xt(BigInt(Vt ? "-" + tt : tt));
          for (var lt = [], Et = tt.length, wt = Et - 7; Et > 0;) lt.push(+tt.slice(wt, Et)), (wt -= 7) < 0 && (wt = 0), Et -= 7;
          return ft(lt), new jt(lt, Vt)
        }

        function st(tt) {
          return "number" === typeof tt ? function(tt) {
            if (mt) return new Xt(BigInt(tt));
            if (Qt(tt)) {
              if (tt !== yt(tt)) throw new Error(tt + " is not an integer.");
              return new Ht(tt)
            }
            return gt(tt.toString())
          }(tt) : "string" === typeof tt ? gt(tt) : "bigint" === typeof tt ? new Xt(tt) : tt
        }
        jt.prototype.toArray = function(tt) {
          return xt(this, tt)
        }, Ht.prototype.toArray = function(tt) {
          return xt(this, tt)
        }, Xt.prototype.toArray = function(tt) {
          return xt(this, tt)
        }, jt.prototype.toString = function(et, Vt) {
          if (et === tt && (et = 10), 10 !== et) return Tt(this, et, Vt);
          for (var Ot, qt = this.value, Dt = qt.length, mt = String(qt[--Dt]); --Dt >= 0;) Ot = String(qt[Dt]), mt += "0000000".slice(Ot.length) + Ot;
          return (this.sign ? "-" : "") + mt
        }, Ht.prototype.toString = function(et, Vt) {
          return et === tt && (et = 10), 10 != et ? Tt(this, et, Vt) : String(this.value)
        }, Xt.prototype.toString = Ht.prototype.toString, Xt.prototype.toJSON = jt.prototype.toJSON = Ht.prototype.toJSON = function() {
          return this.toString()
        }, jt.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, jt.prototype.toJSNumber = jt.prototype.valueOf, Ht.prototype.valueOf = function() {
          return this.value
        }, Ht.prototype.toJSNumber = Ht.prototype.valueOf, Xt.prototype.valueOf = Xt.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var nt = 0; nt < 1e3; nt++) dt[nt] = st(nt), nt > 0 && (dt[-nt] = st(-nt));
        return dt.one = dt[1], dt.zero = dt[0], dt.minusOne = dt[-1], dt.max = At, dt.min = it, dt.gcd = Yt, dt.lcm = function(tt, et) {
          return tt = st(tt).abs(), et = st(et).abs(), tt.divide(Yt(tt, et)).multiply(et)
        }, dt.isInstance = function(tt) {
          return tt instanceof jt || tt instanceof Ht || tt instanceof Xt
        }, dt.randBetween = function(tt, et, Ot) {
          tt = st(tt), et = st(et);
          var qt = Ot || Math.random,
            Dt = it(tt, et),
            mt = At(tt, et).subtract(Dt).add(1);
          if (mt.isSmall) return Dt.add(Math.floor(qt() * mt));
          for (var jt = xt(mt, Vt).value, Ht = [], Xt = !0, Qt = 0; Qt < jt.length; Qt++) {
            var lt = Xt ? jt[Qt] : Vt,
              Et = yt(qt() * lt);
            Ht.push(Et), Et < lt && (Xt = !1)
          }
          return Dt.add(dt.vVt(Ht, Vt, !1))
        }, dt.vVt = function(tt, et, Vt) {
          return pt(tt.map(st), st(et || 10), Vt)
        }, dt
      }();
      tt.hasOwnProperty("exports") && (tt.exports = et)
    }(MV);
    var bV = Dt(MV.exports);

    function JV(tt, et, Vt) {
      let Ot = 0;
      for (let qt = 0; qt < Vt; qt++) {
        const Vt = tt[et + qt];
        if (void 0 === Vt) break;
        Ot += Vt * 16 ** qt
      }
      return Ot
    }

    function CV(tt) {
      const et = [];
      for (let Vt = 0; Vt < tt.length; Vt++) {
        let Ot = Number(tt[Vt]);
        for (let tt = 0; Ot || tt < et.length; tt++) Ot += 10 * (et[tt] || 0), et[tt] = Ot % 16, Ot = (Ot - et[tt]) / 16
      }
      return et
    }
    class uV {
      static fromString(tt) {
        return new uV(function(tt) {
          const et = CV(tt),
            Vt = Array(4);
          for (let Ot = 0; Ot < 4; Ot++) Vt[3 - Ot] = JV(et, 4 * Ot, 4);
          return Vt
        }(tt), tt)
      }
      static fromBit(tt) {
        const et = Array(4),
          Vt = Math.floor(tt / 16);
        for (let Ot = 0; Ot < 4; Ot++) et[3 - Ot] = Ot === Vt ? 1 << tt - 16 * Vt : 0;
        return new uV(et)
      }
      constructor(tt, et) {
        this.parts = tt, this.str = et
      }
      and(tt) {
        let {
          parts: et
        } = tt;
        return new uV(this.parts.map(((tt, Vt) => tt & et[Vt])))
      }
      or(tt) {
        let {
          parts: et
        } = tt;
        return new uV(this.parts.map(((tt, Vt) => tt | et[Vt])))
      }
      xor(tt) {
        let {
          parts: et
        } = tt;
        return new uV(this.parts.map(((tt, Vt) => tt ^ et[Vt])))
      }
      not() {
        return new uV(this.parts.map((tt => ~tt)))
      }
      equals(tt) {
        let {
          parts: et
        } = tt;
        return this.parts.every(((tt, Vt) => tt === et[Vt]))
      }
      toString() {
        if (null != this.str) return this.str;
        const tt = new Array(16);
        return this.parts.forEach(((et, Vt) => {
          const Ot = CV(et.toString());
          for (let qt = 0; qt < 4; qt++) tt[qt + 4 * Vt] = Ot[3 - qt] || 0
        })), this.str = bV.vVt(tt, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const KV = function() {
      try {
        return BigInt, !0
      } catch (tt) {
        return !1
      }
    }();
    KV && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const hV = {},
      vV = KV ? function(tt) {
        return BigInt(tt)
      } : function(tt) {
        return tt instanceof uV ? tt : ("number" === typeof tt && (tt = tt.toString()), null != hV[tt] || (hV[tt] = uV.fromString(tt)), hV[tt])
      },
      WV = vV(0),
      SV = KV ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WV) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WV)
      } : function() {
        let tt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WV;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WV).and(tt)
      },
      cV = KV ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WV) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WV)
      } : function() {
        let tt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WV;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WV).or(tt)
      },
      RV = KV ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WV) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WV)
      } : function() {
        let tt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : WV;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WV).xor(tt)
      },
      IV = KV ? function(tt, et) {
        return tt === et
      } : function(tt, et) {
        return null == tt || null == et ? tt == et : tt.equals(et)
      };
    var PV, ZV, LV, FV, kV = {
      combine: function() {
        let tt = arguments.length <= 0 ? void 0 : arguments[0];
        for (let et = 1; et < arguments.length; et++) tt = cV(tt, et < 0 || arguments.length <= et ? void 0 : arguments[et]);
        return tt
      },
      add: function(tt, et) {
        return et === WV ? tt : cV(tt, et)
      },
      remove: function(tt, et) {
        return et === WV ? tt : RV(tt, SV(tt, et))
      },
      filter: SV,
      invert: KV ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WV)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : WV).not()
      },
      has: function(tt, et) {
        return IV(SV(tt, et), et)
      },
      hasAny: function(tt, et) {
        return !IV(SV(tt, et), WV)
      },
      equals: IV,
      deserialize: vV,
      getFlag: KV ? function(tt) {
        return BigInt(1) << BigInt(tt)
      } : function(tt) {
        return uV.fromBit(tt)
      }
    };
    ! function(tt) {
      tt[tt.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", tt[tt.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", tt[tt.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", tt[tt.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", tt[tt.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", tt[tt.RATELIMITED = 4002] = "RATELIMITED", tt[tt.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", tt[tt.INVALID_VERSION = 4004] = "INVALID_VERSION", tt[tt.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(PV || (PV = {})),
    function(tt) {
      tt[tt.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", tt[tt.INVALID_COMMAND = 4002] = "INVALID_COMMAND", tt[tt.INVALID_EVENT = 4004] = "INVALID_EVENT", tt[tt.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(ZV || (ZV = {})),
    function(tt) {
      tt.LANDSCAPE = "landscape", tt.PORTRAIT = "portrait"
    }(LV || (LV = {})),
    function(tt) {
      tt.MOBILE = "mobile", tt.DESKTOP = "desktop"
    }(FV || (FV = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: kV.getFlag(0),
      ADMINISTRATOR: kV.getFlag(3)
    });

    function GV(tt) {
      return fV((et => {
        var Vt;
        const [Ot] = null !== (Vt = Object.entries(tt).find((tt => {
          let [, Vt] = tt;
          return Vt === et
        }))) && void 0 !== Vt ? Vt : [];
        return null != et && void 0 === Ot ? tt.UNHANDLED : et
      }), Le().or(Fe()))
    }
    const zV = aV.object({
        image_url: aV.string()
      }),
      oV = aV.object({
        mediaUrl: aV.string().max(1024)
      }),
      rV = aV.object({
        access_token: aV.union([aV.string(), aV.null()]).optional()
      }),
      UV = aV.object({
        access_token: aV.string(),
        user: aV.object({
          username: aV.string(),
          discriminator: aV.string(),
          id: aV.string(),
          avatar: aV.union([aV.string(), aV.null()]).optional(),
          public_flags: aV.number(),
          global_name: aV.union([aV.string(), aV.null()]).optional()
        }),
        scopes: aV.array(function(tt) {
          const et = Ie().transform((et => {
            const Vt = tt.safeParse(et);
            return Vt.success ? Vt.data : tt._def.defaultValue()
          }));
          return et.overlayType = tt, et
        }(aV.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(aV.literal(-1)).default(-1))),
        expires: aV.string(),
        application: aV.object({
          description: aV.string(),
          icon: aV.union([aV.string(), aV.null()]).optional(),
          id: aV.string(),
          rpc_origins: aV.array(aV.string()).optional(),
          name: aV.string()
        })
      }),
      AV = aV.object({
        participants: aV.array(aV.object({
          id: aV.string(),
          username: aV.string(),
          global_name: aV.union([aV.string(), aV.null()]).optional(),
          discriminator: aV.string(),
          avatar: aV.union([aV.string(), aV.null()]).optional(),
          flags: aV.number(),
          bot: aV.boolean(),
          avatar_decoration_data: aV.union([aV.object({
            asset: aV.string(),
            skuId: aV.string().optional()
          }), aV.null()]).optional(),
          premium_type: aV.union([aV.number(), aV.null()]).optional(),
          nickname: aV.string().optional()
        }))
      });
    var iV;
    ! function(tt) {
      tt.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", tt.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", tt.AUTHENTICATE = "AUTHENTICATE", tt.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(iV || (iV = {}));
    const YV = aV.object({}).optional().nullable(),
      BV = aV.void(),
      pV = {
        [iV.INITIATE_IMAGE_UPLOAD]: {
          request: BV,
          response: zV
        },
        [iV.OPEN_SHARE_MOMENT_DIALOG]: {
          request: oV,
          response: YV
        },
        [iV.AUTHENTICATE]: {
          request: rV,
          response: UV
        },
        [iV.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: BV,
          response: AV
        }
      },
      xV = "DISPATCH";
    var TV;
    ! function(tt) {
      tt.AUTHORIZE = "AUTHORIZE", tt.AUTHENTICATE = "AUTHENTICATE", tt.GET_GUILDS = "GET_GUILDS", tt.GET_GUILD = "GET_GUILD", tt.GET_CHANNEL = "GET_CHANNEL", tt.GET_CHANNELS = "GET_CHANNELS", tt.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", tt.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", tt.SUBSCRIBE = "SUBSCRIBE", tt.UNSUBSCRIBE = "UNSUBSCRIBE", tt.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", tt.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", tt.SET_ACTIVITY = "SET_ACTIVITY", tt.GET_SKUS = "GET_SKUS", tt.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", tt.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", tt.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", tt.START_PURCHASE = "START_PURCHASE", tt.SET_CONFIG = "SET_CONFIG", tt.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", tt.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", tt.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", tt.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", tt.CAPTURE_LOG = "CAPTURE_LOG", tt.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", tt.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", tt.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", tt.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", tt.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", tt.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", tt.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(TV || (TV = {}));
    const gV = Te({
        cmd: Le(),
        data: Ye(),
        evt: Ae(),
        nonce: Le()
      }).passthrough(),
      sV = (GV(Object.assign(Object.assign({}, UV.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), Te({
        id: Le(),
        username: Le(),
        discriminator: Le(),
        global_name: Le().optional().nullable(),
        avatar: Le().optional().nullable(),
        avatar_decoration_data: Te({
          asset: Le(),
          sku_id: Le().optional()
        }).nullable(),
        bot: ze(),
        flags: Fe().optional().nullable(),
        premium_type: Fe().optional().nullable()
      })),
      nV = Te({
        user: sV,
        nick: Le().optional().nullable(),
        roles: xe(Le()),
        joined_at: Le(),
        deaf: ze(),
        mute: ze()
      }),
      tO = Te({
        id: Le(),
        name: Le().optional().nullable(),
        roles: xe(Le()).optional().nullable(),
        user: sV.optional().nullable(),
        require_colons: ze().optional().nullable(),
        managed: ze().optional().nullable(),
        animated: ze().optional().nullable(),
        available: ze().optional().nullable()
      }),
      eO = Te({
        mute: ze(),
        deaf: ze(),
        self_mute: ze(),
        self_deaf: ze(),
        suppress: ze()
      }),
      VO = Te({
        mute: ze(),
        nick: Le(),
        user: sV,
        voice_state: eO,
        volume: Fe()
      }),
      OO = GV({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      qO = Te({
        name: Le(),
        type: Fe(),
        url: Le().optional().nullable(),
        created_at: Fe().optional().nullable(),
        timestamps: Te({
          start: Fe(),
          end: Fe()
        }).partial().optional().nullable(),
        application_id: Le().optional().nullable(),
        details: Le().optional().nullable(),
        state: Le().optional().nullable(),
        emoji: tO.optional().nullable(),
        party: Te({
          id: Le().optional().nullable(),
          size: xe(Fe()).optional().nullable()
        }).optional().nullable(),
        assets: Te({
          large_image: Le().nullable(),
          large_text: Le().nullable(),
          small_image: Le().nullable(),
          small_text: Le().nullable()
        }).partial().optional().nullable(),
        secrets: Te({
          join: Le(),
          match: Le()
        }).partial().optional().nullable(),
        instance: ze().optional().nullable(),
        flags: Fe().optional().nullable()
      }),
      DO = Te({
        id: Le(),
        type: GV({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: Le(),
        deny: Le()
      }),
      mO = {
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
      dO = Te({
        id: Le(),
        type: GV(mO),
        guild_id: Le().optional().nullable(),
        position: Fe().optional().nullable(),
        permission_overwrites: xe(DO).optional().nullable(),
        name: Le().optional().nullable(),
        topic: Le().optional().nullable(),
        nsfw: ze().optional().nullable(),
        last_message_id: Le().optional().nullable(),
        bitrate: Fe().optional().nullable(),
        user_limit: Fe().optional().nullable(),
        rate_limit_per_user: Fe().optional().nullable(),
        recipients: xe(sV).optional().nullable(),
        icon: Le().optional().nullable(),
        owner_id: Le().optional().nullable(),
        application_id: Le().optional().nullable(),
        parent_id: Le().optional().nullable(),
        last_pin_timestamp: Le().optional().nullable()
      }),
      jO = Te({
        user: sV,
        guild_id: Le(),
        status: OO,
        activities: xe(qO),
        client_status: Te({
          desktop: OO,
          mobile: OO,
          web: OO
        }).partial()
      }),
      HO = Te({
        id: Le(),
        name: Le(),
        color: Fe(),
        hoist: ze(),
        position: Fe(),
        permissions: Le(),
        managed: ze(),
        mentionable: ze()
      }),
      XO = (Te({
        id: Le(),
        name: Le(),
        owner_id: Le(),
        icon: Le().nullable(),
        icon_hash: Le().optional().nullable(),
        splash: Le().nullable(),
        discovery_splash: Le().nullable(),
        owner: ze().optional().nullable(),
        permissions: Le().optional().nullable(),
        region: Le(),
        afk_channel_id: Le().nullable(),
        afk_timeout: Fe(),
        widget_enabled: ze().optional().nullable(),
        widget_channel_id: Le().optional().nullable(),
        verification_level: Fe(),
        default_message_notifications: Fe(),
        explicit_content_filter: Fe(),
        roles: xe(HO),
        emojis: xe(tO),
        features: xe(Le()),
        mfa_level: Fe(),
        application_id: Le().nullable(),
        system_channel_id: Le().nullable(),
        system_channel_flags: Fe(),
        rules_channel_id: Le().nullable(),
        joined_at: Le().optional().nullable(),
        large: ze().optional().nullable(),
        unavailable: ze().optional().nullable(),
        member_count: Fe().optional().nullable(),
        voice_states: xe(eO).optional().nullable(),
        members: xe(nV).optional().nullable(),
        channels: xe(dO).optional().nullable(),
        presences: xe(jO).optional().nullable(),
        max_presences: Fe().optional().nullable(),
        max_members: Fe().optional().nullable(),
        vanity_url_code: Le().nullable(),
        description: Le().nullable(),
        banner: Le().nullable(),
        premium_tier: Fe(),
        premium_subscription_count: Fe().optional().nullable(),
        preferred_locale: Le(),
        public_updates_channel_id: Le().nullable(),
        max_video_channel_users: Fe().optional().nullable(),
        approximate_member_count: Fe().optional().nullable(),
        approximate_presence_count: Fe().optional().nullable()
      }), Te({
        id: Le(),
        guild_id: Le(),
        type: Fe(),
        name: Le()
      })),
      QO = Te({
        id: Le(),
        filename: Le(),
        size: Fe(),
        url: Le(),
        proxy_url: Le(),
        height: Fe().optional().nullable(),
        width: Fe().optional().nullable()
      }),
      lO = Te({
        text: Le(),
        icon_url: Le().optional().nullable(),
        proxy_icon_url: Le().optional().nullable()
      }),
      EO = Te({
        url: Le().optional().nullable(),
        proxy_url: Le().optional().nullable(),
        height: Fe().optional().nullable(),
        width: Fe().optional().nullable()
      }),
      fO = EO.omit({
        proxy_url: !0
      }),
      wO = Te({
        name: Le().optional().nullable(),
        url: Le().optional().nullable()
      }),
      yO = Te({
        name: Le().optional().nullable(),
        url: Le().optional().nullable(),
        icon_url: Le().optional().nullable(),
        proxy_icon_url: Le().optional().nullable()
      }),
      NO = Te({
        name: Le(),
        value: Le(),
        inline: ze()
      }),
      aO = Te({
        title: Le().optional().nullable(),
        type: Le().optional().nullable(),
        description: Le().optional().nullable(),
        url: Le().optional().nullable(),
        timestamp: Le().optional().nullable(),
        color: Fe().optional().nullable(),
        footer: lO.optional().nullable(),
        image: EO.optional().nullable(),
        thumbnail: EO.optional().nullable(),
        video: fO.optional().nullable(),
        provider: wO.optional().nullable(),
        author: yO.optional().nullable(),
        fields: xe(NO).optional().nullable()
      }),
      MO = Te({
        count: Fe(),
        me: ze(),
        emoji: tO
      }),
      bO = Te({
        type: Fe(),
        party_id: Le().optional().nullable()
      }),
      JO = Te({
        id: Le(),
        cover_image: Le().optional().nullable(),
        description: Le(),
        icon: Le().optional().nullable(),
        name: Le()
      }),
      CO = Te({
        message_id: Le().optional().nullable(),
        channel_id: Le().optional().nullable(),
        guild_id: Le().optional().nullable()
      }),
      uO = Te({
        id: Le(),
        channel_id: Le(),
        guild_id: Le().optional().nullable(),
        author: sV.optional().nullable(),
        member: nV.optional().nullable(),
        content: Le(),
        timestamp: Le(),
        edited_timestamp: Le().optional().nullable(),
        tts: ze(),
        mention_everyone: ze(),
        mentions: xe(sV),
        mention_roles: xe(Le()),
        mention_channels: xe(XO),
        attachments: xe(QO),
        embeds: xe(aO),
        reactions: xe(MO).optional().nullable(),
        nonce: se([Le(), Fe()]).optional().nullable(),
        pinned: ze(),
        webhook_id: Le().optional().nullable(),
        type: Fe(),
        activity: bO.optional().nullable(),
        application: JO.optional().nullable(),
        message_reference: CO.optional().nullable(),
        flags: Fe().optional().nullable(),
        stickers: xe(Ye()).optional().nullable(),
        referenced_message: Ye().optional().nullable()
      }),
      KO = Te({
        id: Le(),
        name: Le()
      }),
      hO = Te({
        type: GV({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: Fe(),
        name: Le()
      }),
      vO = Te({
        type: GV({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: ze(),
        threshold: Fe(),
        shortcut: xe(hO),
        delay: Fe()
      }),
      WO = Te({
        device_id: Le(),
        volume: Fe(),
        available_devices: xe(KO)
      }),
      SO = (Te({
        type: GV({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: Le(),
        vendor: Te({
          name: Le(),
          url: Le()
        }),
        model: Te({
          name: Le(),
          url: Le()
        }),
        related: xe(Le()),
        echo_cancellation: ze().optional().nullable(),
        noise_suppression: ze().optional().nullable(),
        automatic_gain_control: ze().optional().nullable(),
        hardware_mute: ze().optional().nullable()
      }), Te({
        id: Le(),
        name: Le(),
        type: GV({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: Te({
          amount: Fe(),
          currency: Le()
        }),
        application_id: Le(),
        flags: Fe(),
        release_date: Le().nullable()
      })),
      cO = Te({
        id: Le(),
        sku_id: Le(),
        application_id: Le(),
        user_id: Le(),
        gift_code_flags: Fe(),
        type: GV({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: Le().optional().nullable(),
        branches: xe(Le()).optional().nullable(),
        starts_at: Le().optional().nullable(),
        ends_at: Le().optional().nullable(),
        parent_id: Le().optional().nullable(),
        consumed: ze().optional().nullable(),
        deleted: ze().optional().nullable(),
        gift_code_batch_id: Le().optional().nullable()
      }),
      RO = (GV({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), GV({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      IO = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      PO = (GV(IO), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      ZO = (GV(PO), "ERROR");
    var LO;
    ! function(tt) {
      tt.READY = "READY", tt.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", tt.SPEAKING_START = "SPEAKING_START", tt.SPEAKING_STOP = "SPEAKING_STOP", tt.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", tt.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", tt.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", tt.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", tt.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", tt.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(LO || (LO = {}));
    const FO = gV.extend({
        evt: HV(LO),
        nonce: Le().nullable(),
        cmd: dV(xV),
        data: Te({}).passthrough()
      }),
      kO = gV.extend({
        evt: dV(ZO),
        data: Te({
          code: Fe(),
          message: Le().optional()
        }).passthrough(),
        cmd: HV(TV),
        nonce: Le().nullable()
      }),
      GO = FO.extend({
        evt: Le()
      }),
      zO = se([FO, GO, kO]);
    const oO = {
      [LO.READY]: {
        payload: FO.extend({
          evt: dV(LO.READY),
          data: Te({
            v: Fe(),
            config: Te({
              cdn_host: Le().optional(),
              api_endpoint: Le(),
              environment: Le()
            }),
            user: Te({
              id: Le(),
              username: Le(),
              discriminator: Le(),
              avatar: Le().optional()
            }).optional()
          })
        })
      },
      [LO.VOICE_STATE_UPDATE]: {
        payload: FO.extend({
          evt: dV(LO.VOICE_STATE_UPDATE),
          data: VO
        }),
        subscribeArgs: Te({
          channel_id: Le()
        })
      },
      [LO.SPEAKING_START]: {
        payload: FO.extend({
          evt: dV(LO.SPEAKING_START),
          data: Te({
            lobby_id: Le().optional(),
            channel_id: Le().optional(),
            user_id: Le()
          })
        }),
        subscribeArgs: Te({
          lobby_id: Le().nullable().optional(),
          channel_id: Le().nullable().optional()
        })
      },
      [LO.SPEAKING_STOP]: {
        payload: FO.extend({
          evt: dV(LO.SPEAKING_STOP),
          data: Te({
            lobby_id: Le().optional(),
            channel_id: Le().optional(),
            user_id: Le()
          })
        }),
        subscribeArgs: Te({
          lobby_id: Le().nullable().optional(),
          channel_id: Le().nullable().optional()
        })
      },
      [LO.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: FO.extend({
          evt: dV(LO.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: Te({
            layout_mode: GV(PO)
          })
        })
      },
      [LO.ORIENTATION_UPDATE]: {
        payload: FO.extend({
          evt: dV(LO.ORIENTATION_UPDATE),
          data: Te({
            screen_orientation: GV(IO),
            orientation: HV(LV)
          })
        })
      },
      [LO.CURRENT_USER_UPDATE]: {
        payload: FO.extend({
          evt: dV(LO.CURRENT_USER_UPDATE),
          data: sV
        })
      },
      [LO.ENTITLEMENT_CREATE]: {
        payload: FO.extend({
          evt: dV(LO.ENTITLEMENT_CREATE),
          data: Te({
            entitlement: cO
          })
        })
      },
      [LO.THERMAL_STATE_UPDATE]: {
        payload: FO.extend({
          evt: dV(LO.THERMAL_STATE_UPDATE),
          data: Te({
            thermal_state: RO
          })
        })
      },
      [LO.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: FO.extend({
          evt: dV(LO.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: Te({
            participants: AV.shape.participants
          })
        })
      }
    };
    const rO = Te({}).nullable(),
      UO = Te({
        code: Le()
      }),
      AO = Te({
        guilds: xe(Te({
          id: Le(),
          name: Le()
        }))
      }),
      iO = Te({
        id: Le(),
        name: Le(),
        icon_url: Le().optional(),
        members: xe(nV)
      }),
      YO = Te({
        id: Le(),
        type: GV(mO),
        guild_id: Le().optional().nullable(),
        name: Le().optional().nullable(),
        topic: Le().optional().nullable(),
        bitrate: Fe().optional().nullable(),
        user_limit: Fe().optional().nullable(),
        position: Fe().optional().nullable(),
        voice_states: xe(VO),
        messages: xe(uO)
      }),
      BO = Te({
        channels: xe(dO)
      }),
      pO = (YO.nullable(), YO.nullable()),
      xO = YO.nullable(),
      TO = (Te({
        input: WO,
        output: WO,
        mode: vO,
        automatic_gain_control: ze(),
        echo_cancellation: ze(),
        noise_suppression: ze(),
        qos: ze(),
        silence_warning: ze(),
        deaf: ze(),
        mute: ze()
      }), Te({
        evt: Le()
      })),
      gO = Te({
        shortcut: hO
      }),
      sO = qO,
      nO = Te({
        skus: xe(SO)
      }),
      tq = Te({
        entitlements: xe(cO)
      }),
      eq = xe(cO).nullable(),
      Vq = Te({
        use_interactive_pip: ze()
      }),
      Oq = Te({
        locale: Le()
      }),
      qq = Te({
        enabled: ze()
      }),
      Dq = Te({
        permissions: Ge().or(Le())
      }),
      mq = Te({
        iosKeyboardResizesView: lV(ze())
      }),
      dq = gV.extend({
        cmd: HV(TV),
        evt: Ae()
      });

    function jq(tt) {
      let {
        cmd: et,
        data: Vt
      } = tt;
      switch (et) {
        case TV.AUTHORIZE:
          return UO.parse(Vt);
        case TV.CAPTURE_SHORTCUT:
          return gO.parse(Vt);
        case TV.ENCOURAGE_HW_ACCELERATION:
          return qq.parse(Vt);
        case TV.GET_CHANNEL:
          return YO.parse(Vt);
        case TV.GET_CHANNELS:
          return BO.parse(Vt);
        case TV.GET_CHANNEL_PERMISSIONS:
          return Dq.parse(Vt);
        case TV.GET_GUILD:
          return iO.parse(Vt);
        case TV.GET_GUILDS:
          return AO.parse(Vt);
        case TV.GET_PLATFORM_BEHAVIORS:
          return mq.parse(Vt);
        case TV.GET_CHANNEL:
          return YO.parse(Vt);
        case TV.SELECT_TEXT_CHANNEL:
          return xO.parse(Vt);
        case TV.SELECT_VOICE_CHANNEL:
          return pO.parse(Vt);
        case TV.SET_ACTIVITY:
          return sO.parse(Vt);
        case TV.GET_SKUS_EMBEDDED:
          return nO.parse(Vt);
        case TV.GET_ENTITLEMENTS_EMBEDDED:
          return tq.parse(Vt);
        case TV.SET_CONFIG:
          return Vq.parse(Vt);
        case TV.START_PURCHASE:
          return eq.parse(Vt);
        case TV.SUBSCRIBE:
        case TV.UNSUBSCRIBE:
          return TO.parse(Vt);
        case TV.USER_SETTINGS_GET_LOCALE:
          return Oq.parse(Vt);
        case TV.OPEN_EXTERNAL_LINK:
        case TV.SET_ORIENTATION_LOCK_STATE:
        case TV.SET_CERTIFIED_DEVICES:
        case TV.SEND_ANALYTICS_EVENT:
        case TV.OPEN_INVITE_DIALOG:
        case TV.CAPTURE_LOG:
        case TV.GET_SKUS:
        case TV.GET_ENTITLEMENTS:
          return rO.parse(Vt);
        case TV.AUTHENTICATE:
        case TV.INITIATE_IMAGE_UPLOAD:
        case TV.OPEN_SHARE_MOMENT_DIALOG:
        case TV.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: tt
          } = pV[et];
          return tt.parse(Vt);
        default:
          ! function(tt, et) {
            throw et
          }(0, new Error(`Unrecognized command ${et}`))
      }
    }
    Te({
      frame_id: Le(),
      platform: HV(FV).optional().nullable()
    }), Te({
      v: dV(1),
      encoding: dV("json").optional(),
      client_id: Le(),
      frame_id: Le()
    });
    const Hq = Te({
        code: Fe(),
        message: Le().optional()
      }),
      Xq = Te({
        evt: Le().nullable(),
        nonce: Le().nullable(),
        data: Ye().nullable(),
        cmd: Le()
      }).passthrough();

    function Qq(tt) {
      const et = Xq.parse(tt);
      return null != et.evt ? et.evt === ZO ? kO.parse(et) : function(tt) {
        const et = tt.evt;
        if (!(et in LO)) throw new Error(`Unrecognized event type ${tt.evt}`);
        return oO[et].payload.parse(tt)
      }(zO.parse(et)) : function(tt) {
        return Object.assign(Object.assign({}, tt), {
          data: jq(tt)
        })
      }(dq.passthrough().parse(et))
    }

    function lq(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const qt = gV.extend({
        cmd: dV(et),
        data: Vt
      });
      return async Vt => {
        const Dt = await tt({
          cmd: et,
          args: Vt,
          transfer: Ot(Vt)
        });
        return qt.parse(Dt).data
      }
    }

    function Eq(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const Vt = pV[tt].response,
        Ot = gV.extend({
          cmd: dV(tt),
          data: Vt
        });
      return Vt => async qt => {
        const Dt = await Vt({
          cmd: tt,
          args: qt,
          transfer: et(qt)
        });
        return Ot.parse(Dt).data
      }
    }
    const fq = Eq(iV.AUTHENTICATE),
      wq = tt => lq(tt, TV.AUTHORIZE, UO),
      yq = tt => lq(tt, TV.CAPTURE_LOG, rO),
      Nq = tt => lq(tt, TV.ENCOURAGE_HW_ACCELERATION, qq),
      aq = tt => lq(tt, TV.GET_ENTITLEMENTS_EMBEDDED, tq),
      Mq = tt => lq(tt, TV.GET_SKUS_EMBEDDED, nO),
      bq = tt => lq(tt, TV.GET_CHANNEL_PERMISSIONS, Dq),
      Jq = tt => lq(tt, TV.GET_PLATFORM_BEHAVIORS, mq),
      Cq = tt => lq(tt, TV.OPEN_EXTERNAL_LINK, rO),
      uq = tt => lq(tt, TV.OPEN_INVITE_DIALOG, rO),
      Kq = Eq(iV.OPEN_SHARE_MOMENT_DIALOG);
    qO.il({
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
      type: qO.shape.type.optional(),
      instance: qO.shape.instance.optional()
    }).nullable();
    const hq = tt => lq(tt, TV.SET_ACTIVITY, sO),
      vq = tt => lq(tt, TV.SET_CONFIG, Vq);
    const Wq = tt => ({
        lock_state: tt.lock_state,
        picture_in_picture_lock_state: tt.picture_in_picture_lock_state
      }),
      Sq = tt => function(tt) {
        let {
          sendCommand: et,
          cmd: Vt,
          response: Ot,
          fallbackTransform: qt,
          transferTransform: Dt = () => {}
        } = tt;
        const mt = gV.extend({
          cmd: dV(Vt),
          data: Ot
        });
        return async tt => {
          try {
            const Ot = await et({
              cmd: Vt,
              args: tt,
              transfer: Dt(tt)
            });
            return mt.parse(Ot).data
          } catch (Ot) {
            if (Ot.code === ZV.INVALID_PAYLOAD) {
              const Ot = qt(tt),
                dt = await et({
                  cmd: Vt,
                  args: Ot,
                  transfer: Dt(Ot)
                });
              return mt.parse(dt).data
            }
            throw Ot
          }
        }
      }({
        sendCommand: tt,
        cmd: TV.SET_ORIENTATION_LOCK_STATE,
        response: rO,
        fallbackTransform: Wq
      }),
      cq = tt => lq(tt, TV.START_PURCHASE, eq),
      Rq = tt => lq(tt, TV.USER_SETTINGS_GET_LOCALE, Oq),
      Iq = Eq(iV.INITIATE_IMAGE_UPLOAD),
      Pq = tt => lq(tt, TV.GET_CHANNEL, YO),
      Zq = Eq(iV.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var Lq = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function Fq(tt) {
      return "string" === typeof tt && Lq.test(tt)
    }
    for (var kq = [], Gq = 0; Gq < 256; ++Gq) kq.push((Gq + 256).toString(16).substr(1));

    function zq(tt) {
      var et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Vt = (kq[tt[et + 0]] + kq[tt[et + 1]] + kq[tt[et + 2]] + kq[tt[et + 3]] + "-" + kq[tt[et + 4]] + kq[tt[et + 5]] + "-" + kq[tt[et + 6]] + kq[tt[et + 7]] + "-" + kq[tt[et + 8]] + kq[tt[et + 9]] + "-" + kq[tt[et + 10]] + kq[tt[et + 11]] + kq[tt[et + 12]] + kq[tt[et + 13]] + kq[tt[et + 14]] + kq[tt[et + 15]]).toLowerCase();
      if (!Fq(Vt)) throw TypeError("Stringified UUID is invalid");
      return Vt
    }
    var oq;

    function rq(tt, et, Vt) {
      function Ot(tt, Ot, qt, Dt) {
        if ("string" === typeof tt && (tt = function(tt) {
            tt = unescape(encodeURIComponent(tt));
            for (var et = [], Vt = 0; Vt < tt.length; ++Vt) et.push(tt.charCodeAt(Vt));
            return et
          }(tt)), "string" === typeof Ot && (Ot = function(tt) {
            if (!Fq(tt)) throw TypeError("Invalid UUID");
            var et, Vt = new Uint8Array(16);
            return Vt[0] = (et = parseInt(tt.slice(0, 8), 16)) >>> 24, Vt[1] = et >>> 16 & 255, Vt[2] = et >>> 8 & 255, Vt[3] = 255 & et, Vt[4] = (et = parseInt(tt.slice(9, 13), 16)) >>> 8, Vt[5] = 255 & et, Vt[6] = (et = parseInt(tt.slice(14, 18), 16)) >>> 8, Vt[7] = 255 & et, Vt[8] = (et = parseInt(tt.slice(19, 23), 16)) >>> 8, Vt[9] = 255 & et, Vt[10] = (et = parseInt(tt.slice(24, 36), 16)) / 1099511627776 & 255, Vt[11] = et / 4294967296 & 255, Vt[12] = et >>> 24 & 255, Vt[13] = et >>> 16 & 255, Vt[14] = et >>> 8 & 255, Vt[15] = 255 & et, Vt
          }(Ot)), 16 !== Ot.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var mt = new Uint8Array(16 + tt.length);
        if (mt.set(Ot), mt.set(tt, Ot.length), (mt = Vt(mt))[6] = 15 & mt[6] | et, mt[8] = 63 & mt[8] | 128, qt) {
          Dt = Dt || 0;
          for (var dt = 0; dt < 16; ++dt) qt[Dt + dt] = mt[dt];
          return qt
        }
        return zq(mt)
      }
      try {
        Ot.name = tt
      } catch (qt) {}
      return Ot.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", Ot.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", Ot
    }

    function Uq(tt) {
      return 14 + (tt + 64 >>> 9 << 4) + 1
    }

    function Aq(tt, et) {
      var Vt = (65535 & tt) + (65535 & et);
      return (tt >> 16) + (et >> 16) + (Vt >> 16) << 16 | 65535 & Vt
    }

    function iq(tt, et, Vt, Ot, qt, Dt) {
      return Aq((mt = Aq(Aq(et, tt), Aq(Ot, Dt))) << (dt = qt) | mt >>> 32 - dt, Vt);
      var mt, dt
    }

    function Yq(tt, et, Vt, Ot, qt, Dt, mt) {
      return iq(et & Vt | ~et & Ot, tt, et, qt, Dt, mt)
    }

    function Bq(tt, et, Vt, Ot, qt, Dt, mt) {
      return iq(et & Ot | Vt & ~Ot, tt, et, qt, Dt, mt)
    }

    function pq(tt, et, Vt, Ot, qt, Dt, mt) {
      return iq(et ^ Vt ^ Ot, tt, et, qt, Dt, mt)
    }

    function xq(tt, et, Vt, Ot, qt, Dt, mt) {
      return iq(Vt ^ (et | ~Ot), tt, et, qt, Dt, mt)
    }
    rq("v3", 48, (function(tt) {
      if ("string" === typeof tt) {
        var et = unescape(encodeURIComponent(tt));
        tt = new Uint8Array(et.length);
        for (var Vt = 0; Vt < et.length; ++Vt) tt[Vt] = et.charCodeAt(Vt)
      }
      return function(tt) {
        for (var et = [], Vt = 32 * tt.length, Ot = "0123456789abcdef", qt = 0; qt < Vt; qt += 8) {
          var Dt = tt[qt >> 5] >>> qt % 32 & 255,
            mt = parseInt(Ot.charAt(Dt >>> 4 & 15) + Ot.charAt(15 & Dt), 16);
          et.push(mt)
        }
        return et
      }(function(tt, et) {
        tt[et >> 5] |= 128 << et % 32, tt[Uq(et) - 1] = et;
        for (var Vt = 1732584193, Ot = -271733879, qt = -1732584194, Dt = 271733878, mt = 0; mt < tt.length; mt += 16) {
          var dt = Vt,
            jt = Ot,
            Ht = qt,
            Xt = Dt;
          Vt = Yq(Vt, Ot, qt, Dt, tt[mt], 7, -680876936), Dt = Yq(Dt, Vt, Ot, qt, tt[mt + 1], 12, -389564586), qt = Yq(qt, Dt, Vt, Ot, tt[mt + 2], 17, 606105819), Ot = Yq(Ot, qt, Dt, Vt, tt[mt + 3], 22, -1044525330), Vt = Yq(Vt, Ot, qt, Dt, tt[mt + 4], 7, -176418897), Dt = Yq(Dt, Vt, Ot, qt, tt[mt + 5], 12, 1200080426), qt = Yq(qt, Dt, Vt, Ot, tt[mt + 6], 17, -1473231341), Ot = Yq(Ot, qt, Dt, Vt, tt[mt + 7], 22, -45705983), Vt = Yq(Vt, Ot, qt, Dt, tt[mt + 8], 7, 1770035416), Dt = Yq(Dt, Vt, Ot, qt, tt[mt + 9], 12, -1958414417), qt = Yq(qt, Dt, Vt, Ot, tt[mt + 10], 17, -42063), Ot = Yq(Ot, qt, Dt, Vt, tt[mt + 11], 22, -1990404162), Vt = Yq(Vt, Ot, qt, Dt, tt[mt + 12], 7, 1804603682), Dt = Yq(Dt, Vt, Ot, qt, tt[mt + 13], 12, -40341101), qt = Yq(qt, Dt, Vt, Ot, tt[mt + 14], 17, -1502002290), Vt = Bq(Vt, Ot = Yq(Ot, qt, Dt, Vt, tt[mt + 15], 22, 1236535329), qt, Dt, tt[mt + 1], 5, -165796510), Dt = Bq(Dt, Vt, Ot, qt, tt[mt + 6], 9, -1069501632), qt = Bq(qt, Dt, Vt, Ot, tt[mt + 11], 14, 643717713), Ot = Bq(Ot, qt, Dt, Vt, tt[mt], 20, -373897302), Vt = Bq(Vt, Ot, qt, Dt, tt[mt + 5], 5, -701558691), Dt = Bq(Dt, Vt, Ot, qt, tt[mt + 10], 9, 38016083), qt = Bq(qt, Dt, Vt, Ot, tt[mt + 15], 14, -660478335), Ot = Bq(Ot, qt, Dt, Vt, tt[mt + 4], 20, -405537848), Vt = Bq(Vt, Ot, qt, Dt, tt[mt + 9], 5, 568446438), Dt = Bq(Dt, Vt, Ot, qt, tt[mt + 14], 9, -1019803690), qt = Bq(qt, Dt, Vt, Ot, tt[mt + 3], 14, -187363961), Ot = Bq(Ot, qt, Dt, Vt, tt[mt + 8], 20, 1163531501), Vt = Bq(Vt, Ot, qt, Dt, tt[mt + 13], 5, -1444681467), Dt = Bq(Dt, Vt, Ot, qt, tt[mt + 2], 9, -51403784), qt = Bq(qt, Dt, Vt, Ot, tt[mt + 7], 14, 1735328473), Vt = pq(Vt, Ot = Bq(Ot, qt, Dt, Vt, tt[mt + 12], 20, -1926607734), qt, Dt, tt[mt + 5], 4, -378558), Dt = pq(Dt, Vt, Ot, qt, tt[mt + 8], 11, -2022574463), qt = pq(qt, Dt, Vt, Ot, tt[mt + 11], 16, 1839030562), Ot = pq(Ot, qt, Dt, Vt, tt[mt + 14], 23, -35309556), Vt = pq(Vt, Ot, qt, Dt, tt[mt + 1], 4, -1530992060), Dt = pq(Dt, Vt, Ot, qt, tt[mt + 4], 11, 1272893353), qt = pq(qt, Dt, Vt, Ot, tt[mt + 7], 16, -155497632), Ot = pq(Ot, qt, Dt, Vt, tt[mt + 10], 23, -1094730640), Vt = pq(Vt, Ot, qt, Dt, tt[mt + 13], 4, 681279174), Dt = pq(Dt, Vt, Ot, qt, tt[mt], 11, -358537222), qt = pq(qt, Dt, Vt, Ot, tt[mt + 3], 16, -722521979), Ot = pq(Ot, qt, Dt, Vt, tt[mt + 6], 23, 76029189), Vt = pq(Vt, Ot, qt, Dt, tt[mt + 9], 4, -640364487), Dt = pq(Dt, Vt, Ot, qt, tt[mt + 12], 11, -421815835), qt = pq(qt, Dt, Vt, Ot, tt[mt + 15], 16, 530742520), Vt = xq(Vt, Ot = pq(Ot, qt, Dt, Vt, tt[mt + 2], 23, -995338651), qt, Dt, tt[mt], 6, -198630844), Dt = xq(Dt, Vt, Ot, qt, tt[mt + 7], 10, 1126891415), qt = xq(qt, Dt, Vt, Ot, tt[mt + 14], 15, -1416354905), Ot = xq(Ot, qt, Dt, Vt, tt[mt + 5], 21, -57434055), Vt = xq(Vt, Ot, qt, Dt, tt[mt + 12], 6, 1700485571), Dt = xq(Dt, Vt, Ot, qt, tt[mt + 3], 10, -1894986606), qt = xq(qt, Dt, Vt, Ot, tt[mt + 10], 15, -1051523), Ot = xq(Ot, qt, Dt, Vt, tt[mt + 1], 21, -2054922799), Vt = xq(Vt, Ot, qt, Dt, tt[mt + 8], 6, 1873313359), Dt = xq(Dt, Vt, Ot, qt, tt[mt + 15], 10, -30611744), qt = xq(qt, Dt, Vt, Ot, tt[mt + 6], 15, -1560198380), Ot = xq(Ot, qt, Dt, Vt, tt[mt + 13], 21, 1309151649), Vt = xq(Vt, Ot, qt, Dt, tt[mt + 4], 6, -145523070), Dt = xq(Dt, Vt, Ot, qt, tt[mt + 11], 10, -1120210379), qt = xq(qt, Dt, Vt, Ot, tt[mt + 2], 15, 718787259), Ot = xq(Ot, qt, Dt, Vt, tt[mt + 9], 21, -343485551), Vt = Aq(Vt, dt), Ot = Aq(Ot, jt), qt = Aq(qt, Ht), Dt = Aq(Dt, Xt)
        }
        return [Vt, Ot, qt, Dt]
      }(function(tt) {
        if (0 === tt.length) return [];
        for (var et = 8 * tt.length, Vt = new Uint32Array(Uq(et)), Ot = 0; Ot < et; Ot += 8) Vt[Ot >> 5] |= (255 & tt[Ot / 8]) << Ot % 32;
        return Vt
      }(tt), 8 * tt.length))
    }));
    var Tq = new Uint8Array(16);

    function gq() {
      if (!oq && !(oq = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return oq(Tq)
    }

    function sq(tt, et, Vt) {
      var Ot = (tt = tt || {}).random || (tt.rng || gq)();
      if (Ot[6] = 15 & Ot[6] | 64, Ot[8] = 63 & Ot[8] | 128, et) {
        Vt = Vt || 0;
        for (var qt = 0; qt < 16; ++qt) et[Vt + qt] = Ot[qt];
        return et
      }
      return zq(Ot)
    }

    function nq(tt, et, Vt, Ot) {
      switch (tt) {
        case 0:
          return et & Vt ^ ~et & Ot;
        case 1:
        case 3:
          return et ^ Vt ^ Ot;
        case 2:
          return et & Vt ^ et & Ot ^ Vt & Ot
      }
    }

    function tD(tt, et) {
      return tt << et | tt >>> 32 - et
    }
    rq("v5", 80, (function(tt) {
      var et = [1518500249, 1859775393, 2400959708, 3395469782],
        Vt = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof tt) {
        var Ot = unescape(encodeURIComponent(tt));
        tt = [];
        for (var qt = 0; qt < Ot.length; ++qt) tt.push(Ot.charCodeAt(qt))
      } else Array.isArray(tt) || (tt = Array.prototype.slice.call(tt));
      tt.push(128);
      for (var Dt = tt.length / 4 + 2, mt = Math.ceil(Dt / 16), dt = new Array(mt), jt = 0; jt < mt; ++jt) {
        for (var Ht = new Uint32Array(16), Xt = 0; Xt < 16; ++Xt) Ht[Xt] = tt[64 * jt + 4 * Xt] << 24 | tt[64 * jt + 4 * Xt + 1] << 16 | tt[64 * jt + 4 * Xt + 2] << 8 | tt[64 * jt + 4 * Xt + 3];
        dt[jt] = Ht
      }
      dt[mt - 1][14] = 8 * (tt.length - 1) / Math.pow(2, 32), dt[mt - 1][14] = Math.floor(dt[mt - 1][14]), dt[mt - 1][15] = 8 * (tt.length - 1) & 4294967295;
      for (var Qt = 0; Qt < mt; ++Qt) {
        for (var lt = new Uint32Array(80), Et = 0; Et < 16; ++Et) lt[Et] = dt[Qt][Et];
        for (var ft = 16; ft < 80; ++ft) lt[ft] = tD(lt[ft - 3] ^ lt[ft - 8] ^ lt[ft - 14] ^ lt[ft - 16], 1);
        for (var wt = Vt[0], yt = Vt[1], Nt = Vt[2], Mt = Vt[3], bt = Vt[4], Jt = 0; Jt < 80; ++Jt) {
          var Ct = Math.floor(Jt / 20),
            ut = tD(wt, 5) + nq(Ct, yt, Nt, Mt) + bt + et[Ct] + lt[Jt] >>> 0;
          bt = Mt, Mt = Nt, Nt = tD(yt, 30) >>> 0, yt = wt, wt = ut
        }
        Vt[0] = Vt[0] + wt >>> 0, Vt[1] = Vt[1] + yt >>> 0, Vt[2] = Vt[2] + Nt >>> 0, Vt[3] = Vt[3] + Mt >>> 0, Vt[4] = Vt[4] + bt >>> 0
      }
      return [Vt[0] >> 24 & 255, Vt[0] >> 16 & 255, Vt[0] >> 8 & 255, 255 & Vt[0], Vt[1] >> 24 & 255, Vt[1] >> 16 & 255, Vt[1] >> 8 & 255, 255 & Vt[1], Vt[2] >> 24 & 255, Vt[2] >> 16 & 255, Vt[2] >> 8 & 255, 255 & Vt[2], Vt[3] >> 24 & 255, Vt[3] >> 16 & 255, Vt[3] >> 8 & 255, 255 & Vt[3], Vt[4] >> 24 & 255, Vt[4] >> 16 & 255, Vt[4] >> 8 & 255, 255 & Vt[4]]
    }));
    class eD extends Error {
      constructor(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(et), this.code = tt, this.message = et, this.name = "Discord SDK Error"
      }
    }
    const VD = ["log", "warn", "debug", "info", "error"];
    var OD;
    ! function(tt) {
      tt[tt.HANDSHAKE = 0] = "HANDSHAKE", tt[tt.FRAME = 1] = "FRAME", tt[tt.CLOSE = 2] = "CLOSE", tt[tt.HELLO = 3] = "HELLO"
    }(OD || (OD = {}));
    const qD = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class DD {
      getTransfer(tt) {
        var et;
        switch (tt.cmd) {
          case TV.SUBSCRIBE:
          case TV.UNSUBSCRIBE:
            return;
          default:
            return null !== (et = tt.transfer) && void 0 !== et ? et : void 0
        }
      }
      constructor(tt, et) {
        var Vt;
        if (this.eventBus = new Ht, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = tt => {
            var et;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const Vt = sq();
            null === (et = this.source) || void 0 === et || et.postMessage([OD.FRAME, Object.assign(Object.assign({}, tt), {
              nonce: Vt
            })], this.sourceOrigin, this.getTransfer(tt));
            return new Promise(((tt, et) => {
              this.pendingCommands.set(Vt, {
                resolve: tt,
                reject: et
              })
            }))
          }, this.commands = (Vt = this.sendCommand, {
            authenticate: fq(Vt),
            authorize: wq(Vt),
            captureLog: yq(Vt),
            encourageHardwareAcceleration: Nq(Vt),
            getChannel: Pq(Vt),
            getChannelPermissions: bq(Vt),
            getEntitlements: aq(Vt),
            getPlatformBehaviors: Jq(Vt),
            getSkus: Mq(Vt),
            openExternalLink: Cq(Vt),
            openInviteDialog: uq(Vt),
            openShareMomentDialog: Kq(Vt),
            setActivity: hq(Vt),
            setConfig: vq(Vt),
            setOrientationLockState: Sq(Vt),
            startPurchase: cq(Vt),
            userSettingsGetLocale: Rq(Vt),
            initiateImageUpload: Iq(Vt),
            getInstanceConnectedParticipants: Zq(Vt)
          }), this.handleMessage = tt => {
            if (!qD.has(tt.origin)) return;
            const et = tt.data;
            if (!Array.isArray(et)) return;
            const [Vt, Ot] = et;
            switch (Vt) {
              case OD.HELLO:
                return;
              case OD.CLOSE:
                return this.handleClose(Ot);
              case OD.HANDSHAKE:
                return this.handleHandshake();
              case OD.FRAME:
                return this.handleFrame(Ot);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = tt, this.configuration = null !== et && void 0 !== et ? et : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = FV.DESKTOP, this.guildId = null, void(this.channelId = null);
        const Ot = new URLSearchParams(this._getSearch()),
          qt = Ot.get("frame_id");
        if (!qt) throw new Error("frame_id query param is not defined");
        this.frameId = qt;
        const Dt = Ot.get("instance_id");
        if (!Dt) throw new Error("instance_id query param is not defined");
        this.instanceId = Dt;
        const mt = Ot.get("platform");
        if (!mt) throw new Error("platform query param is not defined");
        if (mt !== FV.DESKTOP && mt !== FV.MOBILE) throw new Error(`Invalid query param "platform" of "${mt}". Valid values are "${FV.DESKTOP}" or "${FV.MOBILE}"`);
        this.platform = mt, this.guildId = Ot.get("guild_id"), this.channelId = Ot.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var tt;
          return [null !== (tt = window.parent.opener) && void 0 !== tt ? tt : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(tt, et) {
        var Vt;
        window.removeEventListener("message", this.handleMessage);
        const Ot = sq();
        null === (Vt = this.source) || void 0 === Vt || Vt.postMessage([OD.CLOSE, {
          code: tt,
          message: et,
          nonce: Ot
        }], this.sourceOrigin)
      }
      async subscribe(tt, et) {
        for (var Vt = arguments.length, Ot = new Array(Vt > 2 ? Vt - 2 : 0), qt = 2; qt < Vt; qt++) Ot[qt - 2] = arguments[qt];
        const [Dt] = Ot, mt = this.eventBus.listenerCount(tt), dt = this.eventBus.on(tt, et);
        return Object.values(LO).includes(tt) && tt !== LO.READY && 0 === mt && await this.sendCommand({
          cmd: TV.SUBSCRIBE,
          args: Dt,
          evt: tt
        }), dt
      }
      async unsubscribe(tt, et) {
        for (var Vt = arguments.length, Ot = new Array(Vt > 2 ? Vt - 2 : 0), qt = 2; qt < Vt; qt++) Ot[qt - 2] = arguments[qt];
        const [Dt] = Ot;
        return tt !== LO.READY && 1 === this.eventBus.listenerCount(tt) && await this.sendCommand({
          cmd: TV.UNSUBSCRIBE,
          evt: tt,
          args: Dt
        }), this.eventBus.off(tt, et)
      }
      async ready() {
        this.isReady || await new Promise((tt => {
          this.eventBus.once(LO.READY, tt)
        }))
      }
      handshake() {
        var tt;
        null === (tt = this.source) || void 0 === tt || tt.postMessage([OD.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(LO.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const tt = (tt, et) => {
          this.commands.captureLog({
            level: tt,
            message: et
          })
        };
        VD.forEach((et => {
          ! function(tt, et, Vt) {
            const Ot = tt[et],
              qt = tt;
            Ot && (tt[et] = function() {
              const tt = [].slice.call(arguments),
                Dt = "" + tt.join(" ");
              Vt(et, Dt), Ot.apply(qt, tt)
            })
          }(console, et, tt)
        }))
      }
      handleClose(tt) {
        Hq.parse(tt)
      }
      handleHandshake() {}
      handleFrame(tt) {
        var et, Vt;
        let Ot;
        try {
          Ot = Qq(tt)
        } catch (qt) {
          return console.error("Failed to parse", tt), void console.error(qt)
        }
        if ("DISPATCH" === Ot.cmd) this.eventBus.emit(Ot.evt, Ot.data);
        else {
          if (Ot.evt === ZO) {
            if (null != Ot.nonce) return null === (et = this.pendingCommands.get(Ot.nonce)) || void 0 === et || et.reject(Ot.data), void this.pendingCommands.delete(Ot.nonce);
            this.eventBus.emit("error", new eD(Ot.data.code, Ot.data.message))
          }
          if (null == Ot.nonce) return void console.error("Missing nonce", tt);
          null === (Vt = this.pendingCommands.get(Ot.nonce)) || void 0 === Vt || Vt.resolve(Ot), this.pendingCommands.delete(Ot.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var mD, dD = 1e9,
      jD = !0,
      HD = "[DecimalError] ",
      XD = HD + "Invalid argument: ",
      QD = HD + "Exponent out of range: ",
      lD = Math.floor,
      ED = Math.pow,
      fD = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      wD = 1e7,
      yD = 9007199254740991,
      ND = lD(1286742750677284.5),
      aD = {};

    function MD(tt, et) {
      var Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt = tt.constructor,
        Qt = Xt.precision;
      if (!tt.s || !et.s) return et.s || (et = new Xt(tt)), jD ? cD(et, Qt) : et;
      if (jt = tt.d, Ht = et.d, mt = tt.e, qt = et.e, jt = jt.slice(), Dt = mt - qt) {
        for (Dt < 0 ? (Ot = jt, Dt = -Dt, dt = Ht.length) : (Ot = Ht, qt = mt, dt = jt.length), Dt > (dt = (mt = Math.ceil(Qt / 7)) > dt ? mt + 1 : dt + 1) && (Dt = dt, Ot.length = 1), Ot.reverse(); Dt--;) Ot.push(0);
        Ot.reverse()
      }
      for ((dt = jt.length) - (Dt = Ht.length) < 0 && (Dt = dt, Ot = Ht, Ht = jt, jt = Ot), Vt = 0; Dt;) Vt = (jt[--Dt] = jt[Dt] + Ht[Dt] + Vt) / wD | 0, jt[Dt] %= wD;
      for (Vt && (jt.unshift(Vt), ++qt), dt = jt.length; 0 == jt[--dt];) jt.pop();
      return et.d = jt, et.e = qt, jD ? cD(et, Qt) : et
    }

    function bD(tt, et, Vt) {
      if (tt !== ~~tt || tt < et || tt > Vt) throw Error(XD + tt)
    }

    function JD(tt) {
      var et, Vt, Ot, qt = tt.length - 1,
        Dt = "",
        mt = tt[0];
      if (qt > 0) {
        for (Dt += mt, et = 1; et < qt; et++)(Vt = 7 - (Ot = tt[et] + "").length) && (Dt += vD(Vt)), Dt += Ot;
        (Vt = 7 - (Ot = (mt = tt[et]) + "").length) && (Dt += vD(Vt))
      } else if (0 === mt) return "0";
      for (; mt % 10 === 0;) mt /= 10;
      return Dt + mt
    }
    aD.absoluteValue = aD.abs = function() {
      var tt = new this.constructor(this);
      return tt.s && (tt.s = 1), tt
    }, aD.comparedTo = aD.cmp = function(tt) {
      var et, Vt, Ot, qt, Dt = this;
      if (tt = new Dt.constructor(tt), Dt.s !== tt.s) return Dt.s || -tt.s;
      if (Dt.e !== tt.e) return Dt.e > tt.e ^ Dt.s < 0 ? 1 : -1;
      for (et = 0, Vt = (Ot = Dt.d.length) < (qt = tt.d.length) ? Ot : qt; et < Vt; ++et)
        if (Dt.d[et] !== tt.d[et]) return Dt.d[et] > tt.d[et] ^ Dt.s < 0 ? 1 : -1;
      return Ot === qt ? 0 : Ot > qt ^ Dt.s < 0 ? 1 : -1
    }, aD.decimalPlaces = aD.dp = function() {
      var tt = this,
        et = tt.d.length - 1,
        Vt = 7 * (et - tt.e);
      if (et = tt.d[et])
        for (; et % 10 == 0; et /= 10) Vt--;
      return Vt < 0 ? 0 : Vt
    }, aD.dividedBy = aD.div = function(tt) {
      return CD(this, new this.constructor(tt))
    }, aD.dividedToIntegerBy = aD.idiv = function(tt) {
      var et = this.constructor;
      return cD(CD(this, new et(tt), 0, 1), et.precision)
    }, aD.equals = aD.eq = function(tt) {
      return !this.cmp(tt)
    }, aD.exponent = function() {
      return KD(this)
    }, aD.greaterThan = aD.gt = function(tt) {
      return this.cmp(tt) > 0
    }, aD.greaterThanOrEqualTo = aD.gte = function(tt) {
      return this.cmp(tt) >= 0
    }, aD.isInteger = aD.isint = function() {
      return this.e > this.d.length - 2
    }, aD.isNegative = aD.isneg = function() {
      return this.s < 0
    }, aD.isPositive = aD.ispos = function() {
      return this.s > 0
    }, aD.isZero = function() {
      return 0 === this.s
    }, aD.lessThan = aD.lt = function(tt) {
      return this.cmp(tt) < 0
    }, aD.lessThanOrEqualTo = aD.lte = function(tt) {
      return this.cmp(tt) < 1
    }, aD.logarithm = aD.log = function(tt) {
      var et, Vt = this,
        Ot = Vt.constructor,
        qt = Ot.precision,
        Dt = qt + 5;
      if (void 0 === tt) tt = new Ot(10);
      else if ((tt = new Ot(tt)).s < 1 || tt.eq(mD)) throw Error(HD + "NaN");
      if (Vt.s < 1) throw Error(HD + (Vt.s ? "NaN" : "-Infinity"));
      return Vt.eq(mD) ? new Ot(0) : (jD = !1, et = CD(WD(Vt, Dt), WD(tt, Dt), Dt), jD = !0, cD(et, qt))
    }, aD.minus = aD.sub = function(tt) {
      var et = this;
      return tt = new et.constructor(tt), et.s == tt.s ? RD(et, tt) : MD(et, (tt.s = -tt.s, tt))
    }, aD.modulo = aD.mod = function(tt) {
      var et, Vt = this,
        Ot = Vt.constructor,
        qt = Ot.precision;
      if (!(tt = new Ot(tt)).s) throw Error(HD + "NaN");
      return Vt.s ? (jD = !1, et = CD(Vt, tt, 0, 1).times(tt), jD = !0, Vt.minus(et)) : cD(new Ot(Vt), qt)
    }, aD.naturalExponential = aD.exp = function() {
      return uD(this)
    }, aD.naturalLogarithm = aD.ln = function() {
      return WD(this)
    }, aD.negated = aD.neg = function() {
      var tt = new this.constructor(this);
      return tt.s = -tt.s || 0, tt
    }, aD.plus = aD.add = function(tt) {
      var et = this;
      return tt = new et.constructor(tt), et.s == tt.s ? MD(et, tt) : RD(et, (tt.s = -tt.s, tt))
    }, aD.precision = aD.sd = function(tt) {
      var et, Vt, Ot, qt = this;
      if (void 0 !== tt && tt !== !!tt && 1 !== tt && 0 !== tt) throw Error(XD + tt);
      if (et = KD(qt) + 1, Vt = 7 * (Ot = qt.d.length - 1) + 1, Ot = qt.d[Ot]) {
        for (; Ot % 10 == 0; Ot /= 10) Vt--;
        for (Ot = qt.d[0]; Ot >= 10; Ot /= 10) Vt++
      }
      return tt && et > Vt ? et : Vt
    }, aD.squareRoot = aD.sqrt = function() {
      var tt, et, Vt, Ot, qt, Dt, mt, dt = this,
        jt = dt.constructor;
      if (dt.s < 1) {
        if (!dt.s) return new jt(0);
        throw Error(HD + "NaN")
      }
      for (tt = KD(dt), jD = !1, 0 == (qt = Math.sqrt(+dt)) || qt == 1 / 0 ? (((et = JD(dt.d)).length + tt) % 2 == 0 && (et += "0"), qt = Math.sqrt(et), tt = lD((tt + 1) / 2) - (tt < 0 || tt % 2), Ot = new jt(et = qt == 1 / 0 ? "1e" + tt : (et = qt.toExponential()).slice(0, et.indexOf("e") + 1) + tt)) : Ot = new jt(qt.toString()), qt = mt = (Vt = jt.precision) + 3;;)
        if (Ot = (Dt = Ot).plus(CD(dt, Dt, mt + 2)).times(.5), JD(Dt.d).slice(0, mt) === (et = JD(Ot.d)).slice(0, mt)) {
          if (et = et.slice(mt - 3, mt + 1), qt == mt && "4999" == et) {
            if (cD(Dt, Vt + 1, 0), Dt.times(Dt).eq(dt)) {
              Ot = Dt;
              break
            }
          } else if ("9999" != et) break;
          mt += 4
        } return jD = !0, cD(Ot, Vt)
    }, aD.times = aD.mul = function(tt) {
      var et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt = this,
        Qt = Xt.constructor,
        lt = Xt.d,
        Et = (tt = new Qt(tt)).d;
      if (!Xt.s || !tt.s) return new Qt(0);
      for (tt.s *= Xt.s, Vt = Xt.e + tt.e, (jt = lt.length) < (Ht = Et.length) && (Dt = lt, lt = Et, Et = Dt, mt = jt, jt = Ht, Ht = mt), Dt = [], Ot = mt = jt + Ht; Ot--;) Dt.push(0);
      for (Ot = Ht; --Ot >= 0;) {
        for (et = 0, qt = jt + Ot; qt > Ot;) dt = Dt[qt] + Et[Ot] * lt[qt - Ot - 1] + et, Dt[qt--] = dt % wD | 0, et = dt / wD | 0;
        Dt[qt] = (Dt[qt] + et) % wD | 0
      }
      for (; !Dt[--mt];) Dt.pop();
      return et ? ++Vt : Dt.shift(), tt.d = Dt, tt.e = Vt, jD ? cD(tt, Qt.precision) : tt
    }, aD.toDecimalPlaces = aD.todp = function(tt, et) {
      var Vt = this,
        Ot = Vt.constructor;
      return Vt = new Ot(Vt), void 0 === tt ? Vt : (bD(tt, 0, dD), void 0 === et ? et = Ot.rounding : bD(et, 0, 8), cD(Vt, tt + KD(Vt) + 1, et))
    }, aD.toExponential = function(tt, et) {
      var Vt, Ot = this,
        qt = Ot.constructor;
      return void 0 === tt ? Vt = ID(Ot, !0) : (bD(tt, 0, dD), void 0 === et ? et = qt.rounding : bD(et, 0, 8), Vt = ID(Ot = cD(new qt(Ot), tt + 1, et), !0, tt + 1)), Vt
    }, aD.toFixed = function(tt, et) {
      var Vt, Ot, qt = this,
        Dt = qt.constructor;
      return void 0 === tt ? ID(qt) : (bD(tt, 0, dD), void 0 === et ? et = Dt.rounding : bD(et, 0, 8), Vt = ID((Ot = cD(new Dt(qt), tt + KD(qt) + 1, et)).abs(), !1, tt + KD(Ot) + 1), qt.isneg() && !qt.isZero() ? "-" + Vt : Vt)
    }, aD.toInteger = aD.toint = function() {
      var tt = this,
        et = tt.constructor;
      return cD(new et(tt), KD(tt) + 1, et.rounding)
    }, aD.toNumber = function() {
      return +this
    }, aD.toPower = aD.pow = function(tt) {
      var et, Vt, Ot, qt, Dt, mt, dt = this,
        jt = dt.constructor,
        Ht = +(tt = new jt(tt));
      if (!tt.s) return new jt(mD);
      if (!(dt = new jt(dt)).s) {
        if (tt.s < 1) throw Error(HD + "Infinity");
        return dt
      }
      if (dt.eq(mD)) return dt;
      if (Ot = jt.precision, tt.eq(mD)) return cD(dt, Ot);
      if (mt = (et = tt.e) >= (Vt = tt.d.length - 1), Dt = dt.s, mt) {
        if ((Vt = Ht < 0 ? -Ht : Ht) <= yD) {
          for (qt = new jt(mD), et = Math.ceil(Ot / 7 + 4), jD = !1; Vt % 2 && PD((qt = qt.times(dt)).d, et), 0 !== (Vt = lD(Vt / 2));) PD((dt = dt.times(dt)).d, et);
          return jD = !0, tt.s < 0 ? new jt(mD).div(qt) : cD(qt, Ot)
        }
      } else if (Dt < 0) throw Error(HD + "NaN");
      return Dt = Dt < 0 && 1 & tt.d[Math.max(et, Vt)] ? -1 : 1, dt.s = 1, jD = !1, qt = tt.times(WD(dt, Ot + 12)), jD = !0, (qt = uD(qt)).s = Dt, qt
    }, aD.toPrecision = function(tt, et) {
      var Vt, Ot, qt = this,
        Dt = qt.constructor;
      return void 0 === tt ? Ot = ID(qt, (Vt = KD(qt)) <= Dt.toExpNeg || Vt >= Dt.toExpPos) : (bD(tt, 1, dD), void 0 === et ? et = Dt.rounding : bD(et, 0, 8), Ot = ID(qt = cD(new Dt(qt), tt, et), tt <= (Vt = KD(qt)) || Vt <= Dt.toExpNeg, tt)), Ot
    }, aD.toSignificantDigits = aD.tosd = function(tt, et) {
      var Vt = this.constructor;
      return void 0 === tt ? (tt = Vt.precision, et = Vt.rounding) : (bD(tt, 1, dD), void 0 === et ? et = Vt.rounding : bD(et, 0, 8)), cD(new Vt(this), tt, et)
    }, aD.toString = aD.valueOf = aD.val = aD.toJSON = aD[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var tt = this,
        et = KD(tt),
        Vt = tt.constructor;
      return ID(tt, et <= Vt.toExpNeg || et >= Vt.toExpPos)
    };
    var CD = function() {
      function tt(tt, et) {
        var Vt, Ot = 0,
          qt = tt.length;
        for (tt = tt.slice(); qt--;) Vt = tt[qt] * et + Ot, tt[qt] = Vt % wD | 0, Ot = Vt / wD | 0;
        return Ot && tt.unshift(Ot), tt
      }

      function et(tt, et, Vt, Ot) {
        var qt, Dt;
        if (Vt != Ot) Dt = Vt > Ot ? 1 : -1;
        else
          for (qt = Dt = 0; qt < Vt; qt++)
            if (tt[qt] != et[qt]) {
              Dt = tt[qt] > et[qt] ? 1 : -1;
              break
            } return Dt
      }

      function Vt(tt, et, Vt) {
        for (var Ot = 0; Vt--;) tt[Vt] -= Ot, Ot = tt[Vt] < et[Vt] ? 1 : 0, tt[Vt] = Ot * wD + tt[Vt] - et[Vt];
        for (; !tt[0] && tt.length > 1;) tt.shift()
      }
      return function(Ot, qt, Dt, mt) {
        var dt, jt, Ht, Xt, Qt, lt, Et, ft, wt, yt, Nt, Mt, bt, Jt, Ct, ut, Kt, ht, vt = Ot.constructor,
          Wt = Ot.s == qt.s ? 1 : -1,
          St = Ot.d,
          ct = qt.d;
        if (!Ot.s) return new vt(Ot);
        if (!qt.s) throw Error(HD + "Division by zero");
        for (jt = Ot.e - qt.e, Kt = ct.length, Ct = St.length, ft = (Et = new vt(Wt)).d = [], Ht = 0; ct[Ht] == (St[Ht] || 0);) ++Ht;
        if (ct[Ht] > (St[Ht] || 0) && --jt, (Mt = null == Dt ? Dt = vt.precision : mt ? Dt + (KD(Ot) - KD(qt)) + 1 : Dt) < 0) return new vt(0);
        if (Mt = Mt / 7 + 2 | 0, Ht = 0, 1 == Kt)
          for (Xt = 0, ct = ct[0], Mt++;
            (Ht < Ct || Xt) && Mt--; Ht++) bt = Xt * wD + (St[Ht] || 0), ft[Ht] = bt / ct | 0, Xt = bt % ct | 0;
        else {
          for ((Xt = wD / (ct[0] + 1) | 0) > 1 && (ct = tt(ct, Xt), St = tt(St, Xt), Kt = ct.length, Ct = St.length), Jt = Kt, yt = (wt = St.slice(0, Kt)).length; yt < Kt;) wt[yt++] = 0;
          (ht = ct.slice()).unshift(0), ut = ct[0], ct[1] >= wD / 2 && ++ut;
          do {
            Xt = 0, (dt = et(ct, wt, Kt, yt)) < 0 ? (Nt = wt[0], Kt != yt && (Nt = Nt * wD + (wt[1] || 0)), (Xt = Nt / ut | 0) > 1 ? (Xt >= wD && (Xt = wD - 1), 1 == (dt = et(Qt = tt(ct, Xt), wt, lt = Qt.length, yt = wt.length)) && (Xt--, Vt(Qt, Kt < lt ? ht : ct, lt))) : (0 == Xt && (dt = Xt = 1), Qt = ct.slice()), (lt = Qt.length) < yt && Qt.unshift(0), Vt(wt, Qt, yt), -1 == dt && (dt = et(ct, wt, Kt, yt = wt.length)) < 1 && (Xt++, Vt(wt, Kt < yt ? ht : ct, yt)), yt = wt.length) : 0 === dt && (Xt++, wt = [0]), ft[Ht++] = Xt, dt && wt[0] ? wt[yt++] = St[Jt] || 0 : (wt = [St[Jt]], yt = 1)
          } while ((Jt++ < Ct || void 0 !== wt[0]) && Mt--)
        }
        return ft[0] || ft.shift(), Et.e = jt, cD(Et, mt ? Dt + KD(Et) + 1 : Dt)
      }
    }();

    function uD(tt, et) {
      var Vt, Ot, qt, Dt, mt, dt = 0,
        jt = 0,
        Ht = tt.constructor,
        Xt = Ht.precision;
      if (KD(tt) > 16) throw Error(QD + KD(tt));
      if (!tt.s) return new Ht(mD);
      for (null == et ? (jD = !1, mt = Xt) : mt = et, Dt = new Ht(.03125); tt.abs().gte(.1);) tt = tt.times(Dt), jt += 5;
      for (mt += Math.log(ED(2, jt)) / Math.LN10 * 2 + 5 | 0, Vt = Ot = qt = new Ht(mD), Ht.precision = mt;;) {
        if (Ot = cD(Ot.times(tt), mt), Vt = Vt.times(++dt), JD((Dt = qt.plus(CD(Ot, Vt, mt))).d).slice(0, mt) === JD(qt.d).slice(0, mt)) {
          for (; jt--;) qt = cD(qt.times(qt), mt);
          return Ht.precision = Xt, null == et ? (jD = !0, cD(qt, Xt)) : qt
        }
        qt = Dt
      }
    }

    function KD(tt) {
      for (var et = 7 * tt.e, Vt = tt.d[0]; Vt >= 10; Vt /= 10) et++;
      return et
    }

    function hD(tt, et, Vt) {
      if (et > tt.LN10.sd()) throw jD = !0, Vt && (tt.precision = Vt), Error(HD + "LN10 precision limit exceeded");
      return cD(new tt(tt.LN10), et)
    }

    function vD(tt) {
      for (var et = ""; tt--;) et += "0";
      return et
    }

    function WD(tt, et) {
      var Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt = 1,
        lt = tt,
        Et = lt.d,
        ft = lt.constructor,
        wt = ft.precision;
      if (lt.s < 1) throw Error(HD + (lt.s ? "NaN" : "-Infinity"));
      if (lt.eq(mD)) return new ft(0);
      if (null == et ? (jD = !1, Ht = wt) : Ht = et, lt.eq(10)) return null == et && (jD = !0), hD(ft, Ht);
      if (Ht += 10, ft.precision = Ht, Ot = (Vt = JD(Et)).charAt(0), Dt = KD(lt), !(Math.abs(Dt) < 15e14)) return jt = hD(ft, Ht + 2, wt).times(Dt + ""), lt = WD(new ft(Ot + "." + Vt.slice(1)), Ht - 10).plus(jt), ft.precision = wt, null == et ? (jD = !0, cD(lt, wt)) : lt;
      for (; Ot < 7 && 1 != Ot || 1 == Ot && Vt.charAt(1) > 3;) Ot = (Vt = JD((lt = lt.times(tt)).d)).charAt(0), Qt++;
      for (Dt = KD(lt), Ot > 1 ? (lt = new ft("0." + Vt), Dt++) : lt = new ft(Ot + "." + Vt.slice(1)), dt = mt = lt = CD(lt.minus(mD), lt.plus(mD), Ht), Xt = cD(lt.times(lt), Ht), qt = 3;;) {
        if (mt = cD(mt.times(Xt), Ht), JD((jt = dt.plus(CD(mt, new ft(qt), Ht))).d).slice(0, Ht) === JD(dt.d).slice(0, Ht)) return dt = dt.times(2), 0 !== Dt && (dt = dt.plus(hD(ft, Ht + 2, wt).times(Dt + ""))), dt = CD(dt, new ft(Qt), Ht), ft.precision = wt, null == et ? (jD = !0, cD(dt, wt)) : dt;
        dt = jt, qt += 2
      }
    }

    function SD(tt, et) {
      var Vt, Ot, qt;
      for ((Vt = et.indexOf(".")) > -1 && (et = et.replace(".", "")), (Ot = et.search(/e/i)) > 0 ? (Vt < 0 && (Vt = Ot), Vt += +et.slice(Ot + 1), et = et.substring(0, Ot)) : Vt < 0 && (Vt = et.length), Ot = 0; 48 === et.charCodeAt(Ot);) ++Ot;
      for (qt = et.length; 48 === et.charCodeAt(qt - 1);) --qt;
      if (et = et.slice(Ot, qt)) {
        if (qt -= Ot, Vt = Vt - Ot - 1, tt.e = lD(Vt / 7), tt.d = [], Ot = (Vt + 1) % 7, Vt < 0 && (Ot += 7), Ot < qt) {
          for (Ot && tt.d.push(+et.slice(0, Ot)), qt -= 7; Ot < qt;) tt.d.push(+et.slice(Ot, Ot += 7));
          Ot = 7 - (et = et.slice(Ot)).length
        } else Ot -= qt;
        for (; Ot--;) et += "0";
        if (tt.d.push(+et), jD && (tt.e > ND || tt.e < -ND)) throw Error(QD + Vt)
      } else tt.s = 0, tt.e = 0, tt.d = [0];
      return tt
    }

    function cD(tt, et, Vt) {
      var Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt = tt.d;
      for (mt = 1, Dt = Qt[0]; Dt >= 10; Dt /= 10) mt++;
      if ((Ot = et - mt) < 0) Ot += 7, qt = et, Ht = Qt[Xt = 0];
      else {
        if ((Xt = Math.ceil((Ot + 1) / 7)) >= (Dt = Qt.length)) return tt;
        for (Ht = Dt = Qt[Xt], mt = 1; Dt >= 10; Dt /= 10) mt++;
        qt = (Ot %= 7) - 7 + mt
      }
      if (void 0 !== Vt && (dt = Ht / (Dt = ED(10, mt - qt - 1)) % 10 | 0, jt = et < 0 || void 0 !== Qt[Xt + 1] || Ht % Dt, jt = Vt < 4 ? (dt || jt) && (0 == Vt || Vt == (tt.s < 0 ? 3 : 2)) : dt > 5 || 5 == dt && (4 == Vt || jt || 6 == Vt && (Ot > 0 ? qt > 0 ? Ht / ED(10, mt - qt) : 0 : Qt[Xt - 1]) % 10 & 1 || Vt == (tt.s < 0 ? 8 : 7))), et < 1 || !Qt[0]) return jt ? (Dt = KD(tt), Qt.length = 1, et = et - Dt - 1, Qt[0] = ED(10, (7 - et % 7) % 7), tt.e = lD(-et / 7) || 0) : (Qt.length = 1, Qt[0] = tt.e = tt.s = 0), tt;
      if (0 == Ot ? (Qt.length = Xt, Dt = 1, Xt--) : (Qt.length = Xt + 1, Dt = ED(10, 7 - Ot), Qt[Xt] = qt > 0 ? (Ht / ED(10, mt - qt) % ED(10, qt) | 0) * Dt : 0), jt)
        for (;;) {
          if (0 == Xt) {
            (Qt[0] += Dt) == wD && (Qt[0] = 1, ++tt.e);
            break
          }
          if (Qt[Xt] += Dt, Qt[Xt] != wD) break;
          Qt[Xt--] = 0, Dt = 1
        }
      for (Ot = Qt.length; 0 === Qt[--Ot];) Qt.pop();
      if (jD && (tt.e > ND || tt.e < -ND)) throw Error(QD + KD(tt));
      return tt
    }

    function RD(tt, et) {
      var Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt, Qt, lt = tt.constructor,
        Et = lt.precision;
      if (!tt.s || !et.s) return et.s ? et.s = -et.s : et = new lt(tt), jD ? cD(et, Et) : et;
      if (jt = tt.d, Qt = et.d, Ot = et.e, Ht = tt.e, jt = jt.slice(), mt = Ht - Ot) {
        for ((Xt = mt < 0) ? (Vt = jt, mt = -mt, dt = Qt.length) : (Vt = Qt, Ot = Ht, dt = jt.length), mt > (qt = Math.max(Math.ceil(Et / 7), dt) + 2) && (mt = qt, Vt.length = 1), Vt.reverse(), qt = mt; qt--;) Vt.push(0);
        Vt.reverse()
      } else {
        for ((Xt = (qt = jt.length) < (dt = Qt.length)) && (dt = qt), qt = 0; qt < dt; qt++)
          if (jt[qt] != Qt[qt]) {
            Xt = jt[qt] < Qt[qt];
            break
          } mt = 0
      }
      for (Xt && (Vt = jt, jt = Qt, Qt = Vt, et.s = -et.s), dt = jt.length, qt = Qt.length - dt; qt > 0; --qt) jt[dt++] = 0;
      for (qt = Qt.length; qt > mt;) {
        if (jt[--qt] < Qt[qt]) {
          for (Dt = qt; Dt && 0 === jt[--Dt];) jt[Dt] = wD - 1;
          --jt[Dt], jt[qt] += wD
        }
        jt[qt] -= Qt[qt]
      }
      for (; 0 === jt[--dt];) jt.pop();
      for (; 0 === jt[0]; jt.shift()) --Ot;
      return jt[0] ? (et.d = jt, et.e = Ot, jD ? cD(et, Et) : et) : new lt(0)
    }

    function ID(tt, et, Vt) {
      var Ot, qt = KD(tt),
        Dt = JD(tt.d),
        mt = Dt.length;
      return et ? (Vt && (Ot = Vt - mt) > 0 ? Dt = Dt.charAt(0) + "." + Dt.slice(1) + vD(Ot) : mt > 1 && (Dt = Dt.charAt(0) + "." + Dt.slice(1)), Dt = Dt + (qt < 0 ? "e" : "e+") + qt) : qt < 0 ? (Dt = "0." + vD(-qt - 1) + Dt, Vt && (Ot = Vt - mt) > 0 && (Dt += vD(Ot))) : qt >= mt ? (Dt += vD(qt + 1 - mt), Vt && (Ot = Vt - qt - 1) > 0 && (Dt = Dt + "." + vD(Ot))) : ((Ot = qt + 1) < mt && (Dt = Dt.slice(0, Ot) + "." + Dt.slice(Ot)), Vt && (Ot = Vt - mt) > 0 && (qt + 1 === mt && (Dt += "."), Dt += vD(Ot))), tt.s < 0 ? "-" + Dt : Dt
    }

    function PD(tt, et) {
      if (tt.length > et) return tt.length = et, !0
    }

    function ZD(tt) {
      if (!tt || "object" !== typeof tt) throw Error(HD + "Object expected");
      var et, Vt, Ot, qt = ["precision", 1, dD, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (et = 0; et < qt.length; et += 3)
        if (void 0 !== (Ot = tt[Vt = qt[et]])) {
          if (!(lD(Ot) === Ot && Ot >= qt[et + 1] && Ot <= qt[et + 2])) throw Error(XD + Vt + ": " + Ot);
          this[Vt] = Ot
        } if (void 0 !== (Ot = tt[Vt = "LN10"])) {
        if (Ot != Math.LN10) throw Error(XD + Vt + ": " + Ot);
        this[Vt] = new this(Ot)
      }
      return this
    }
    var LD = function tt(et) {
      var Vt, Ot, qt;

      function Dt(tt) {
        var et = this;
        if (!(et instanceof Dt)) return new Dt(tt);
        if (et.constructor = Dt, tt instanceof Dt) return et.s = tt.s, et.e = tt.e, void(et.d = (tt = tt.d) ? tt.slice() : tt);
        if ("number" === typeof tt) {
          if (0 * tt !== 0) throw Error(XD + tt);
          if (tt > 0) et.s = 1;
          else {
            if (!(tt < 0)) return et.s = 0, et.e = 0, void(et.d = [0]);
            tt = -tt, et.s = -1
          }
          return tt === ~~tt && tt < 1e7 ? (et.e = 0, void(et.d = [tt])) : SD(et, tt.toString())
        }
        if ("string" !== typeof tt) throw Error(XD + tt);
        if (45 === tt.charCodeAt(0) ? (tt = tt.slice(1), et.s = -1) : et.s = 1, !fD.test(tt)) throw Error(XD + tt);
        SD(et, tt)
      }
      if (Dt.prototype = aD, Dt.ROUND_UP = 0, Dt.ROUND_DOWN = 1, Dt.ROUND_CEIL = 2, Dt.ROUND_FLOOR = 3, Dt.ROUND_HALF_UP = 4, Dt.ROUND_HALF_DOWN = 5, Dt.ROUND_HALF_EVEN = 6, Dt.ROUND_HALF_CEIL = 7, Dt.ROUND_HALF_FLOOR = 8, Dt.clone = tt, Dt.config = Dt.set = ZD, void 0 === et && (et = {}), et)
        for (qt = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], Vt = 0; Vt < qt.length;) et.hasOwnProperty(Ot = qt[Vt++]) || (et[Ot] = this[Ot]);
      return Dt.config(et), Dt
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    mD = new LD(1);
    var FD;
    ! function(tt) {
      tt.AED = "aed", tt.AFN = "afn", tt.ALL = "all", tt.AMD = "amd", tt.ANG = "ang", tt.AOA = "aoa", tt.ARS = "ars", tt.AUD = "aud", tt.AWG = "awg", tt.AZN = "azn", tt.BAM = "bam", tt.BBD = "bbd", tt.BDT = "bdt", tt.BGN = "bgn", tt.BHD = "bhd", tt.BIF = "bif", tt.BMD = "bmd", tt.BND = "bnd", tt.BOB = "bob", tt.BOV = "bov", tt.BRL = "brl", tt.BSD = "bsd", tt.BTN = "btn", tt.BWP = "bwp", tt.BYN = "byn", tt.BYR = "byr", tt.BZD = "bzd", tt.CAD = "cad", tt.CDF = "cdf", tt.CHE = "che", tt.CHF = "chf", tt.CHW = "chw", tt.CLF = "clf", tt.CLP = "clp", tt.CNY = "cny", tt.COP = "cop", tt.COU = "cou", tt.CRC = "crc", tt.CUC = "cuc", tt.CUP = "cup", tt.CVE = "cve", tt.CZK = "czk", tt.DJF = "djf", tt.DKK = "dkk", tt.DOP = "dop", tt.DZD = "dzd", tt.EGP = "egp", tt.ERN = "ern", tt.ETB = "etb", tt.EUR = "eur", tt.FJD = "fjd", tt.FKP = "fkp", tt.GBP = "gbp", tt.GEL = "gel", tt.GHS = "ghs", tt.GIP = "gip", tt.GMD = "gmd", tt.GNF = "gnf", tt.GTQ = "gtq", tt.GYD = "gyd", tt.HKD = "hkd", tt.HNL = "hnl", tt.HRK = "hrk", tt.HTG = "htg", tt.HUF = "huf", tt.IDR = "idr", tt.ILS = "ils", tt.INR = "inr", tt.IQD = "iqd", tt.IRR = "irr", tt.ISK = "isk", tt.JMD = "jmd", tt.JOD = "jod", tt.JPY = "jpy", tt.KES = "kes", tt.KGS = "kgs", tt.KHR = "khr", tt.KMF = "kmf", tt.KPW = "kpw", tt.KRW = "krw", tt.KWD = "kwd", tt.KYD = "kyd", tt.KZT = "kzt", tt.LAK = "lak", tt.LBP = "lbp", tt.LKR = "lkr", tt.LRD = "lrd", tt.LSL = "lsl", tt.LTL = "ltl", tt.LVL = "lvl", tt.LYD = "lyd", tt.MAD = "mad", tt.MDL = "mdl", tt.MGA = "mga", tt.MKD = "mkd", tt.MMK = "mmk", tt.MNT = "mnt", tt.MOP = "mop", tt.MRO = "mro", tt.MUR = "mur", tt.MVR = "mvr", tt.MWK = "mwk", tt.MXN = "mxn", tt.MXV = "mxv", tt.MYR = "myr", tt.MZN = "mzn", tt.NAD = "nad", tt.NGN = "ngn", tt.NIO = "nio", tt.NOK = "nok", tt.NPR = "npr", tt.NZD = "nzd", tt.OMR = "omr", tt.PAB = "pab", tt.PEN = "pen", tt.PGK = "pgk", tt.PHP = "php", tt.PKR = "pkr", tt.PLN = "pln", tt.PYG = "pyg", tt.QAR = "qar", tt.RON = "ron", tt.RSD = "rsd", tt.RUB = "rub", tt.RWF = "rwf", tt.SAR = "sar", tt.SBD = "sbd", tt.SCR = "scr", tt.SDG = "sdg", tt.SEK = "sek", tt.SGD = "sgd", tt.SHP = "shp", tt.SLL = "sll", tt.SOS = "sos", tt.SRD = "srd", tt.SSP = "ssp", tt.STD = "std", tt.SVC = "svc", tt.SYP = "syp", tt.SZL = "szl", tt.THB = "thb", tt.TJS = "tjs", tt.TMT = "tmt", tt.TND = "tnd", tt.TOP = "top", tt.TRY = "try", tt.TTD = "ttd", tt.TWD = "twd", tt.TZS = "tzs", tt.UAH = "uah", tt.UGX = "ugx", tt.USD = "usd", tt.USN = "usn", tt.USS = "uss", tt.UYI = "uyi", tt.UYU = "uyu", tt.UZS = "uzs", tt.VEF = "vef", tt.VND = "vnd", tt.VUV = "vuv", tt.WST = "wst", tt.XAF = "xaf", tt.XAG = "xag", tt.XAU = "xau", tt.XBA = "xba", tt.XBB = "xbb", tt.XBC = "xbc", tt.XBD = "xbd", tt.XCD = "xcd", tt.XDR = "xdr", tt.XFU = "xfu", tt.XOF = "xof", tt.XPD = "xpd", tt.XPF = "xpf", tt.XPT = "xpt", tt.XSU = "xsu", tt.XTS = "xts", tt.XUA = "xua", tt.YER = "yer", tt.ZAR = "zar", tt.ZMW = "zmw", tt.ZWL = "zwl"
    }(FD || (FD = {}));
    FD.AED, FD.AFN, FD.ALL, FD.AMD, FD.ANG, FD.AOA, FD.ARS, FD.AUD, FD.AWG, FD.AZN, FD.BAM, FD.BBD, FD.BDT, FD.BGN, FD.BHD, FD.BIF, FD.BMD, FD.BND, FD.BOB, FD.BOV, FD.BRL, FD.BSD, FD.BTN, FD.BWP, FD.BYR, FD.BYN, FD.BZD, FD.CAD, FD.CDF, FD.CHE, FD.CHF, FD.CHW, FD.CLF, FD.CLP, FD.CNY, FD.COP, FD.COU, FD.CRC, FD.CUC, FD.CUP, FD.CVE, FD.CZK, FD.DJF, FD.DKK, FD.DOP, FD.DZD, FD.EGP, FD.ERN, FD.ETB, FD.EUR, FD.FJD, FD.FKP, FD.GBP, FD.GEL, FD.GHS, FD.GIP, FD.GMD, FD.GNF, FD.GTQ, FD.GYD, FD.HKD, FD.HNL, FD.HRK, FD.HTG, FD.HUF, FD.IDR, FD.ILS, FD.INR, FD.IQD, FD.IRR, FD.ISK, FD.JMD, FD.JOD, FD.JPY, FD.KES, FD.KGS, FD.KHR, FD.KMF, FD.KPW, FD.KRW, FD.KWD, FD.KYD, FD.KZT, FD.LAK, FD.LBP, FD.LKR, FD.LRD, FD.LSL, FD.LTL, FD.LVL, FD.LYD, FD.MAD, FD.MDL, FD.MGA, FD.MKD, FD.MMK, FD.MNT, FD.MOP, FD.MRO, FD.MUR, FD.MVR, FD.MWK, FD.MXN, FD.MXV, FD.MYR, FD.MZN, FD.NAD, FD.NGN, FD.NIO, FD.NOK, FD.NPR, FD.NZD, FD.OMR, FD.PAB, FD.PEN, FD.PGK, FD.PHP, FD.PKR, FD.PLN, FD.PYG, FD.QAR, FD.RON, FD.RSD, FD.RUB, FD.RWF, FD.SAR, FD.SBD, FD.SCR, FD.SDG, FD.SEK, FD.SGD, FD.SHP, FD.SLL, FD.SOS, FD.SRD, FD.SSP, FD.STD, FD.SVC, FD.SYP, FD.SZL, FD.THB, FD.TJS, FD.TMT, FD.TND, FD.TOP, FD.TRY, FD.TTD, FD.TWD, FD.TZS, FD.UAH, FD.UGX, FD.USD, FD.USN, FD.USS, FD.UYI, FD.UYU, FD.UZS, FD.VEF, FD.VND, FD.VUV, FD.WST, FD.XAF, FD.XAG, FD.XAU, FD.XBA, FD.XBB, FD.XBC, FD.XBD, FD.XCD, FD.XDR, FD.XFU, FD.XOF, FD.XPD, FD.XPF, FD.XPT, FD.XSU, FD.XTS, FD.XUA, FD.YER, FD.ZAR, FD.ZMW, FD.ZWL;
    var kD = {
      exports: {}
    };
    ! function(tt, et) {
      var Vt = "__lodash_hash_undefined__",
        Ot = 9007199254740991,
        Dt = "[object Arguments]",
        mt = "[object Array]",
        dt = "[object Boolean]",
        jt = "[object Date]",
        Ht = "[object Error]",
        Xt = "[object Function]",
        Qt = "[object Map]",
        lt = "[object Number]",
        Et = "[object Object]",
        ft = "[object Promise]",
        wt = "[object RegExp]",
        yt = "[object Set]",
        Nt = "[object String]",
        Mt = "[object Symbol]",
        bt = "[object WeakMap]",
        Jt = "[object ArrayBuffer]",
        Ct = "[object DataView]",
        ut = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Kt = /^\w*$/,
        ht = /^\./,
        vt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Wt = /\\(\\)?/g,
        St = /^\[object .+?Constructor\]$/,
        ct = /^(?:0|[1-9]\d*)$/,
        Rt = {};
      Rt["[object Float32Array]"] = Rt["[object Float64Array]"] = Rt["[object Int8Array]"] = Rt["[object Int16Array]"] = Rt["[object Int32Array]"] = Rt["[object Uint8Array]"] = Rt["[object Uint8ClampedArray]"] = Rt["[object Uint16Array]"] = Rt["[object Uint32Array]"] = !0, Rt[Dt] = Rt[mt] = Rt[Jt] = Rt[dt] = Rt[Ct] = Rt[jt] = Rt[Ht] = Rt[Xt] = Rt[Qt] = Rt[lt] = Rt[Et] = Rt[wt] = Rt[yt] = Rt[Nt] = Rt[bt] = !1;
      var It = "object" == typeof qt && qt && qt.Object === Object && qt,
        Pt = "object" == typeof self && self && self.Object === Object && self,
        Zt = It || Pt || Function("return this")(),
        Lt = et && !et.nodeType && et,
        Ft = Lt && tt && !tt.nodeType && tt,
        kt = Ft && Ft.exports === Lt && It.process,
        Gt = function() {
          try {
            return kt && kt.binding("util")
          } catch (tt) {}
        }(),
        zt = Gt && Gt.isTypedArray;

      function ot(tt, et) {
        for (var Vt = -1, Ot = tt ? tt.length : 0; ++Vt < Ot && !1 !== et(tt[Vt], Vt, tt););
        return tt
      }

      function rt(tt, et) {
        for (var Vt = -1, Ot = tt ? tt.length : 0; ++Vt < Ot;)
          if (et(tt[Vt], Vt, tt)) return !0;
        return !1
      }

      function Ut(tt) {
        var et = !1;
        if (null != tt && "function" != typeof tt.toString) try {
          et = !!(tt + "")
        } catch (Vt) {}
        return et
      }

      function At(tt) {
        var et = -1,
          Vt = Array(tt.size);
        return tt.forEach((function(tt, Ot) {
          Vt[++et] = [Ot, tt]
        })), Vt
      }

      function it(tt, et) {
        return function(Vt) {
          return tt(et(Vt))
        }
      }

      function Yt(tt) {
        var et = -1,
          Vt = Array(tt.size);
        return tt.forEach((function(tt) {
          Vt[++et] = tt
        })), Vt
      }
      var Bt = Array.prototype,
        pt = Function.prototype,
        xt = Object.prototype,
        Tt = Zt["__core-js_shared__"],
        gt = function() {
          var tt = /[^.]+$/.exec(Tt && Tt.keys && Tt.keys.IE_PROTO || "");
          return tt ? "Symbol(src)_1." + tt : ""
        }(),
        st = pt.toString,
        nt = xt.hasOwnProperty,
        te = xt.toString,
        ee = RegExp("^" + st.call(nt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        Ve = Zt.Symbol,
        Oe = Zt.Uint8Array,
        qe = it(Object.getPrototypeOf, Object),
        De = Object.create,
        me = xt.propertyIsEnumerable,
        de = Bt.splice,
        je = it(Object.keys, Object),
        He = Ae(Zt, "DataView"),
        Xe = Ae(Zt, "Map"),
        Qe = Ae(Zt, "Promise"),
        le = Ae(Zt, "Set"),
        Ee = Ae(Zt, "WeakMap"),
        fe = Ae(Object, "create"),
        we = se(He),
        ye = se(Xe),
        Ne = se(Qe),
        ae = se(le),
        Me = se(Ee),
        be = Ve ? Ve.prototype : void 0,
        Je = be ? be.valueOf : void 0,
        Ce = be ? be.toString : void 0;

      function ue(tt) {
        var et = -1,
          Vt = tt ? tt.length : 0;
        for (this.clear(); ++et < Vt;) {
          var Ot = tt[et];
          this.set(Ot[0], Ot[1])
        }
      }

      function Ke(tt) {
        var et = -1,
          Vt = tt ? tt.length : 0;
        for (this.clear(); ++et < Vt;) {
          var Ot = tt[et];
          this.set(Ot[0], Ot[1])
        }
      }

      function he(tt) {
        var et = -1,
          Vt = tt ? tt.length : 0;
        for (this.clear(); ++et < Vt;) {
          var Ot = tt[et];
          this.set(Ot[0], Ot[1])
        }
      }

      function ve(tt) {
        var et = -1,
          Vt = tt ? tt.length : 0;
        for (this.__data__ = new he; ++et < Vt;) this.add(tt[et])
      }

      function We(tt) {
        this.__data__ = new Ke(tt)
      }

      function Se(tt, et) {
        var Vt = VV(tt) || eV(tt) ? function(tt, et) {
            for (var Vt = -1, Ot = Array(tt); ++Vt < tt;) Ot[Vt] = et(Vt);
            return Ot
          }(tt.length, String) : [],
          Ot = Vt.length,
          qt = !!Ot;
        for (var Dt in tt) !et && !nt.call(tt, Dt) || qt && ("length" == Dt || Ye(Dt, Ot)) || Vt.push(Dt);
        return Vt
      }

      function ce(tt, et) {
        for (var Vt = tt.length; Vt--;)
          if (tV(tt[Vt][0], et)) return Vt;
        return -1
      }
      ue.prototype.clear = function() {
        this.__data__ = fe ? fe(null) : {}
      }, ue.prototype.delete = function(tt) {
        return this.has(tt) && delete this.__data__[tt]
      }, ue.prototype.get = function(tt) {
        var et = this.__data__;
        if (fe) {
          var Ot = et[tt];
          return Ot === Vt ? void 0 : Ot
        }
        return nt.call(et, tt) ? et[tt] : void 0
      }, ue.prototype.has = function(tt) {
        var et = this.__data__;
        return fe ? void 0 !== et[tt] : nt.call(et, tt)
      }, ue.prototype.set = function(tt, et) {
        return this.__data__[tt] = fe && void 0 === et ? Vt : et, this
      }, Ke.prototype.clear = function() {
        this.__data__ = []
      }, Ke.prototype.delete = function(tt) {
        var et = this.__data__,
          Vt = ce(et, tt);
        return !(Vt < 0) && (Vt == et.length - 1 ? et.pop() : de.call(et, Vt, 1), !0)
      }, Ke.prototype.get = function(tt) {
        var et = this.__data__,
          Vt = ce(et, tt);
        return Vt < 0 ? void 0 : et[Vt][1]
      }, Ke.prototype.has = function(tt) {
        return ce(this.__data__, tt) > -1
      }, Ke.prototype.set = function(tt, et) {
        var Vt = this.__data__,
          Ot = ce(Vt, tt);
        return Ot < 0 ? Vt.push([tt, et]) : Vt[Ot][1] = et, this
      }, he.prototype.clear = function() {
        this.__data__ = {
          hash: new ue,
          map: new(Xe || Ke),
          string: new ue
        }
      }, he.prototype.delete = function(tt) {
        return Ue(this, tt).delete(tt)
      }, he.prototype.get = function(tt) {
        return Ue(this, tt).get(tt)
      }, he.prototype.has = function(tt) {
        return Ue(this, tt).has(tt)
      }, he.prototype.set = function(tt, et) {
        return Ue(this, tt).set(tt, et), this
      }, ve.prototype.add = ve.prototype.push = function(tt) {
        return this.__data__.set(tt, Vt), this
      }, ve.prototype.has = function(tt) {
        return this.__data__.has(tt)
      }, We.prototype.clear = function() {
        this.__data__ = new Ke
      }, We.prototype.delete = function(tt) {
        return this.__data__.delete(tt)
      }, We.prototype.get = function(tt) {
        return this.__data__.get(tt)
      }, We.prototype.has = function(tt) {
        return this.__data__.has(tt)
      }, We.prototype.set = function(tt, et) {
        var Vt = this.__data__;
        if (Vt instanceof Ke) {
          var Ot = Vt.__data__;
          if (!Xe || Ot.length < 199) return Ot.push([tt, et]), this;
          Vt = this.__data__ = new he(Ot)
        }
        return Vt.set(tt, et), this
      };
      var Re, Ie = function(tt, et, Vt) {
        for (var Ot = -1, qt = Object(tt), Dt = Vt(tt), mt = Dt.length; mt--;) {
          var dt = Dt[Re ? mt : ++Ot];
          if (!1 === et(qt[dt], dt, qt)) break
        }
        return tt
      };

      function Pe(tt, et) {
        return tt && Ie(tt, et, QV)
      }

      function Ze(tt, et) {
        for (var Vt = 0, Ot = (et = Be(et, tt) ? [et] : oe(et)).length; null != tt && Vt < Ot;) tt = tt[ge(et[Vt++])];
        return Vt && Vt == Ot ? tt : void 0
      }

      function Le(tt, et) {
        return null != tt && et in Object(tt)
      }

      function Fe(tt, et, Vt, Ot, qt) {
        return tt === et || (null == tt || null == et || !mV(tt) && !dV(et) ? tt !== tt && et !== et : function(tt, et, Vt, Ot, qt, Xt) {
          var ft = VV(tt),
            bt = VV(et),
            ut = mt,
            Kt = mt;
          ft || (ut = (ut = ie(tt)) == Dt ? Et : ut);
          bt || (Kt = (Kt = ie(et)) == Dt ? Et : Kt);
          var ht = ut == Et && !Ut(tt),
            vt = Kt == Et && !Ut(et),
            Wt = ut == Kt;
          if (Wt && !ht) return Xt || (Xt = new We), ft || XV(tt) ? re(tt, et, Vt, Ot, qt, Xt) : function(tt, et, Vt, Ot, qt, Dt, mt) {
            switch (Vt) {
              case Ct:
                if (tt.byteLength != et.byteLength || tt.byteOffset != et.byteOffset) return !1;
                tt = tt.buffer, et = et.buffer;
              case Jt:
                return !(tt.byteLength != et.byteLength || !Ot(new Oe(tt), new Oe(et)));
              case dt:
              case jt:
              case lt:
                return tV(+tt, +et);
              case Ht:
                return tt.name == et.name && tt.message == et.message;
              case wt:
              case Nt:
                return tt == et + "";
              case Qt:
                var Xt = At;
              case yt:
                var Et = 2 & Dt;
                if (Xt || (Xt = Yt), tt.size != et.size && !Et) return !1;
                var ft = mt.get(tt);
                if (ft) return ft == et;
                Dt |= 1, mt.set(tt, et);
                var bt = re(Xt(tt), Xt(et), Ot, qt, Dt, mt);
                return mt.delete(tt), bt;
              case Mt:
                if (Je) return Je.call(tt) == Je.call(et)
            }
            return !1
          }(tt, et, ut, Vt, Ot, qt, Xt);
          if (!(2 & qt)) {
            var St = ht && nt.call(tt, "__wrapped__"),
              ct = vt && nt.call(et, "__wrapped__");
            if (St || ct) {
              var Rt = St ? tt.value() : tt,
                It = ct ? et.value() : et;
              return Xt || (Xt = new We), Vt(Rt, It, Ot, qt, Xt)
            }
          }
          if (!Wt) return !1;
          return Xt || (Xt = new We),
            function(tt, et, Vt, Ot, qt, Dt) {
              var mt = 2 & qt,
                dt = QV(tt),
                jt = dt.length,
                Ht = QV(et),
                Xt = Ht.length;
              if (jt != Xt && !mt) return !1;
              var Qt = jt;
              for (; Qt--;) {
                var lt = dt[Qt];
                if (!(mt ? lt in et : nt.call(et, lt))) return !1
              }
              var Et = Dt.get(tt);
              if (Et && Dt.get(et)) return Et == et;
              var ft = !0;
              Dt.set(tt, et), Dt.set(et, tt);
              var wt = mt;
              for (; ++Qt < jt;) {
                var yt = tt[lt = dt[Qt]],
                  Nt = et[lt];
                if (Ot) var Mt = mt ? Ot(Nt, yt, lt, et, tt, Dt) : Ot(yt, Nt, lt, tt, et, Dt);
                if (!(void 0 === Mt ? yt === Nt || Vt(yt, Nt, Ot, qt, Dt) : Mt)) {
                  ft = !1;
                  break
                }
                wt || (wt = "constructor" == lt)
              }
              if (ft && !wt) {
                var bt = tt.constructor,
                  Jt = et.constructor;
                bt == Jt || !("constructor" in tt) || !("constructor" in et) || "function" == typeof bt && bt instanceof bt && "function" == typeof Jt && Jt instanceof Jt || (ft = !1)
              }
              return Dt.delete(tt), Dt.delete(et), ft
            }(tt, et, Vt, Ot, qt, Xt)
        }(tt, et, Fe, Vt, Ot, qt))
      }

      function ke(tt) {
        return !(!mV(tt) || (et = tt, gt && gt in et)) && (qV(tt) || Ut(tt) ? ee : St).test(se(tt));
        var et
      }

      function Ge(tt) {
        return "function" == typeof tt ? tt : null == tt ? lV : "object" == typeof tt ? VV(tt) ? function(tt, et) {
          if (Be(tt) && pe(et)) return xe(ge(tt), et);
          return function(Vt) {
            var Ot = function(tt, et, Vt) {
              var Ot = null == tt ? void 0 : Ze(tt, et);
              return void 0 === Ot ? Vt : Ot
            }(Vt, tt);
            return void 0 === Ot && Ot === et ? function(tt, et) {
              return null != tt && function(tt, et, Vt) {
                et = Be(et, tt) ? [et] : oe(et);
                var Ot, qt = -1,
                  Dt = et.length;
                for (; ++qt < Dt;) {
                  var mt = ge(et[qt]);
                  if (!(Ot = null != tt && Vt(tt, mt))) break;
                  tt = tt[mt]
                }
                if (Ot) return Ot;
                Dt = tt ? tt.length : 0;
                return !!Dt && DV(Dt) && Ye(mt, Dt) && (VV(tt) || eV(tt))
              }(tt, et, Le)
            }(Vt, tt) : Fe(et, Ot, void 0, 3)
          }
        }(tt[0], tt[1]) : function(tt) {
          var et = function(tt) {
            var et = QV(tt),
              Vt = et.length;
            for (; Vt--;) {
              var Ot = et[Vt],
                qt = tt[Ot];
              et[Vt] = [Ot, qt, pe(qt)]
            }
            return et
          }(tt);
          if (1 == et.length && et[0][2]) return xe(et[0][0], et[0][1]);
          return function(Vt) {
            return Vt === tt || function(tt, et, Vt, Ot) {
              var qt = Vt.length,
                Dt = qt,
                mt = !Ot;
              if (null == tt) return !Dt;
              for (tt = Object(tt); qt--;) {
                var dt = Vt[qt];
                if (mt && dt[2] ? dt[1] !== tt[dt[0]] : !(dt[0] in tt)) return !1
              }
              for (; ++qt < Dt;) {
                var jt = (dt = Vt[qt])[0],
                  Ht = tt[jt],
                  Xt = dt[1];
                if (mt && dt[2]) {
                  if (void 0 === Ht && !(jt in tt)) return !1
                } else {
                  var Qt = new We;
                  if (Ot) var lt = Ot(Ht, Xt, jt, tt, et, Qt);
                  if (!(void 0 === lt ? Fe(Xt, Ht, Ot, 3, Qt) : lt)) return !1
                }
              }
              return !0
            }(Vt, tt, et)
          }
        }(tt) : function(tt) {
          return Be(tt) ? (et = ge(tt), function(tt) {
            return null == tt ? void 0 : tt[et]
          }) : function(tt) {
            return function(et) {
              return Ze(et, tt)
            }
          }(tt);
          var et
        }(tt)
      }

      function ze(tt) {
        if (! function(tt) {
            var et = tt && tt.constructor,
              Vt = "function" == typeof et && et.prototype || xt;
            return tt === Vt
          }(tt)) return je(tt);
        var et = [];
        for (var Vt in Object(tt)) nt.call(tt, Vt) && "constructor" != Vt && et.push(Vt);
        return et
      }

      function oe(tt) {
        return VV(tt) ? tt : Te(tt)
      }

      function re(tt, et, Vt, Ot, qt, Dt) {
        var mt = 2 & qt,
          dt = tt.length,
          jt = et.length;
        if (dt != jt && !(mt && jt > dt)) return !1;
        var Ht = Dt.get(tt);
        if (Ht && Dt.get(et)) return Ht == et;
        var Xt = -1,
          Qt = !0,
          lt = 1 & qt ? new ve : void 0;
        for (Dt.set(tt, et), Dt.set(et, tt); ++Xt < dt;) {
          var Et = tt[Xt],
            ft = et[Xt];
          if (Ot) var wt = mt ? Ot(ft, Et, Xt, et, tt, Dt) : Ot(Et, ft, Xt, tt, et, Dt);
          if (void 0 !== wt) {
            if (wt) continue;
            Qt = !1;
            break
          }
          if (lt) {
            if (!rt(et, (function(tt, et) {
                if (!lt.has(et) && (Et === tt || Vt(Et, tt, Ot, qt, Dt))) return lt.add(et)
              }))) {
              Qt = !1;
              break
            }
          } else if (Et !== ft && !Vt(Et, ft, Ot, qt, Dt)) {
            Qt = !1;
            break
          }
        }
        return Dt.delete(tt), Dt.delete(et), Qt
      }

      function Ue(tt, et) {
        var Vt = tt.__data__;
        return function(tt) {
          var et = typeof tt;
          return "string" == et || "number" == et || "symbol" == et || "boolean" == et ? "__proto__" !== tt : null === tt
        }(et) ? Vt["string" == typeof et ? "string" : "hash"] : Vt.map
      }

      function Ae(tt, et) {
        var Vt = function(tt, et) {
          return null == tt ? void 0 : tt[et]
        }(tt, et);
        return ke(Vt) ? Vt : void 0
      }
      var ie = function(tt) {
        return te.call(tt)
      };

      function Ye(tt, et) {
        return !!(et = null == et ? Ot : et) && ("number" == typeof tt || ct.test(tt)) && tt > -1 && tt % 1 == 0 && tt < et
      }

      function Be(tt, et) {
        if (VV(tt)) return !1;
        var Vt = typeof tt;
        return !("number" != Vt && "symbol" != Vt && "boolean" != Vt && null != tt && !jV(tt)) || (Kt.test(tt) || !ut.test(tt) || null != et && tt in Object(et))
      }

      function pe(tt) {
        return tt === tt && !mV(tt)
      }

      function xe(tt, et) {
        return function(Vt) {
          return null != Vt && (Vt[tt] === et && (void 0 !== et || tt in Object(Vt)))
        }
      }(He && ie(new He(new ArrayBuffer(1))) != Ct || Xe && ie(new Xe) != Qt || Qe && ie(Qe.resolve()) != ft || le && ie(new le) != yt || Ee && ie(new Ee) != bt) && (ie = function(tt) {
        var et = te.call(tt),
          Vt = et == Et ? tt.constructor : void 0,
          Ot = Vt ? se(Vt) : void 0;
        if (Ot) switch (Ot) {
          case we:
            return Ct;
          case ye:
            return Qt;
          case Ne:
            return ft;
          case ae:
            return yt;
          case Me:
            return bt
        }
        return et
      });
      var Te = ne((function(tt) {
        var et;
        tt = null == (et = tt) ? "" : function(tt) {
          if ("string" == typeof tt) return tt;
          if (jV(tt)) return Ce ? Ce.call(tt) : "";
          var et = tt + "";
          return "0" == et && 1 / tt == -1 / 0 ? "-0" : et
        }(et);
        var Vt = [];
        return ht.test(tt) && Vt.push(""), tt.replace(vt, (function(tt, et, Ot, qt) {
          Vt.push(Ot ? qt.replace(Wt, "$1") : et || tt)
        })), Vt
      }));

      function ge(tt) {
        if ("string" == typeof tt || jV(tt)) return tt;
        var et = tt + "";
        return "0" == et && 1 / tt == -1 / 0 ? "-0" : et
      }

      function se(tt) {
        if (null != tt) {
          try {
            return st.call(tt)
          } catch (et) {}
          try {
            return tt + ""
          } catch (et) {}
        }
        return ""
      }

      function ne(tt, et) {
        if ("function" != typeof tt || et && "function" != typeof et) throw new TypeError("Expected a function");
        var Vt = function() {
          var Ot = arguments,
            qt = et ? et.apply(this, Ot) : Ot[0],
            Dt = Vt.cache;
          if (Dt.has(qt)) return Dt.get(qt);
          var mt = tt.apply(this, Ot);
          return Vt.cache = Dt.set(qt, mt), mt
        };
        return Vt.cache = new(ne.Cache || he), Vt
      }

      function tV(tt, et) {
        return tt === et || tt !== tt && et !== et
      }

      function eV(tt) {
        return function(tt) {
          return dV(tt) && OV(tt)
        }(tt) && nt.call(tt, "callee") && (!me.call(tt, "callee") || te.call(tt) == Dt)
      }
      ne.Cache = he;
      var VV = Array.isArray;

      function OV(tt) {
        return null != tt && DV(tt.length) && !qV(tt)
      }

      function qV(tt) {
        var et = mV(tt) ? te.call(tt) : "";
        return et == Xt || "[object GeneratorFunction]" == et
      }

      function DV(tt) {
        return "number" == typeof tt && tt > -1 && tt % 1 == 0 && tt <= Ot
      }

      function mV(tt) {
        var et = typeof tt;
        return !!tt && ("object" == et || "function" == et)
      }

      function dV(tt) {
        return !!tt && "object" == typeof tt
      }

      function jV(tt) {
        return "symbol" == typeof tt || dV(tt) && te.call(tt) == Mt
      }
      var HV, XV = zt ? (HV = zt, function(tt) {
        return HV(tt)
      }) : function(tt) {
        return dV(tt) && DV(tt.length) && !!Rt[te.call(tt)]
      };

      function QV(tt) {
        return OV(tt) ? Se(tt) : ze(tt)
      }

      function lV(tt) {
        return tt
      }
      tt.exports = function(tt, et, Vt) {
        var Ot, qt = VV(tt) || XV(tt);
        if (et = Ge(et), null == Vt)
          if (qt || mV(tt)) {
            var Dt = tt.constructor;
            Vt = qt ? VV(tt) ? new Dt : [] : qV(Dt) ? mV(Ot = qe(tt)) ? De(Ot) : {} : {}
          } else Vt = {};
        return (qt ? ot : Pe)(tt, (function(tt, Ot, qt) {
          return et(Vt, tt, Ot, qt)
        })), Vt
      }
    }(kD, kD.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      h: GD
    } = Ot
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);