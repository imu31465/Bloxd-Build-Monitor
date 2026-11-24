export const id = 147;
export const ids = [147];
export const modules = {
  8010: (mm, Tm, fm) => {
    fm.d(Tm, {
      e: () => wa,
      i: () => Cf
    });
    var hm = {};
    fm.r(hm), fm.d(hm, {
      c: () => xh,
      f: () => ih,
      e: () => Dh,
      j: () => Wf,
      m: () => gf,
      p: () => Nh,
      t: () => Th,
      w: () => Ph,
      A: () => zh,
      B: () => Xh,
      D: () => Ff,
      H: () => kh,
      I: () => eh,
      M: () => Gh,
      S: () => mh,
      O: () => Ah,
      U: () => Sh,
      V: () => bh
    });
    var Am = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function am(mm) {
      return mm && mm.__esModule && Object.prototype.hasOwnProperty.call(mm, "default") ? mm.default : mm
    }
    var xm = {
      exports: {}
    };
    ! function(mm) {
      var Tm = Object.prototype.hasOwnProperty,
        fm = "~";

      function hm() {}

      function Am(mm, Tm, fm) {
        this.nO = mm, this.context = Tm, this.once = fm || !1
      }

      function am(mm, Tm, hm, am, xm) {
        if ("function" !== typeof hm) throw new TypeError("The listener must be a function");
        var wm = new Am(hm, am || mm, xm),
          Dm = fm ? fm + Tm : Tm;
        return mm._events[Dm] ? mm._events[Dm].nO ? mm._events[Dm] = [mm._events[Dm], wm] : mm._events[Dm].push(wm) : (mm._events[Dm] = wm, mm._eventsCount++), mm
      }

      function xm(mm, Tm) {
        0 === --mm._eventsCount ? mm._events = new hm : delete mm._events[Tm]
      }

      function wm() {
        this._events = new hm, this._eventsCount = 0
      }
      Object.create && (hm.prototype = Object.create(null), (new hm).__proto__ || (fm = !1)), wm.prototype.eventNames = function() {
        var mm, hm, Am = [];
        if (0 === this._eventsCount) return Am;
        for (hm in mm = this._events) Tm.call(mm, hm) && Am.push(fm ? hm.slice(1) : hm);
        return Object.getOwnPropertySymbols ? Am.concat(Object.getOwnPropertySymbols(mm)) : Am
      }, wm.prototype.listeners = function(mm) {
        var Tm = fm ? fm + mm : mm,
          hm = this._events[Tm];
        if (!hm) return [];
        if (hm.nO) return [hm.nO];
        for (var Am = 0, am = hm.length, xm = new Array(am); Am < am; Am++) xm[Am] = hm[Am].nO;
        return xm
      }, wm.prototype.listenerCount = function(mm) {
        var Tm = fm ? fm + mm : mm,
          hm = this._events[Tm];
        return hm ? hm.nO ? 1 : hm.length : 0
      }, wm.prototype.emit = function(mm, Tm, hm, Am, am, xm) {
        var wm = fm ? fm + mm : mm;
        if (!this._events[wm]) return !1;
        var Dm, im, Rm = this._events[wm],
          pm = arguments.length;
        if (Rm.nO) {
          switch (Rm.once && this.removeListener(mm, Rm.nO, void 0, !0), pm) {
            case 1:
              return Rm.nO.call(Rm.context), !0;
            case 2:
              return Rm.nO.call(Rm.context, Tm), !0;
            case 3:
              return Rm.nO.call(Rm.context, Tm, hm), !0;
            case 4:
              return Rm.nO.call(Rm.context, Tm, hm, Am), !0;
            case 5:
              return Rm.nO.call(Rm.context, Tm, hm, Am, am), !0;
            case 6:
              return Rm.nO.call(Rm.context, Tm, hm, Am, am, xm), !0
          }
          for (im = 1, Dm = new Array(pm - 1); im < pm; im++) Dm[im - 1] = arguments[im];
          Rm.nO.apply(Rm.context, Dm)
        } else {
          var Em, om = Rm.length;
          for (im = 0; im < om; im++) switch (Rm[im].once && this.removeListener(mm, Rm[im].nO, void 0, !0), pm) {
            case 1:
              Rm[im].nO.call(Rm[im].context);
              break;
            case 2:
              Rm[im].nO.call(Rm[im].context, Tm);
              break;
            case 3:
              Rm[im].nO.call(Rm[im].context, Tm, hm);
              break;
            case 4:
              Rm[im].nO.call(Rm[im].context, Tm, hm, Am);
              break;
            default:
              if (!Dm)
                for (Em = 1, Dm = new Array(pm - 1); Em < pm; Em++) Dm[Em - 1] = arguments[Em];
              Rm[im].nO.apply(Rm[im].context, Dm)
          }
        }
        return !0
      }, wm.prototype.on = function(mm, Tm, fm) {
        return am(this, mm, Tm, fm, !1)
      }, wm.prototype.once = function(mm, Tm, fm) {
        return am(this, mm, Tm, fm, !0)
      }, wm.prototype.removeListener = function(mm, Tm, hm, Am) {
        var am = fm ? fm + mm : mm;
        if (!this._events[am]) return this;
        if (!Tm) return xm(this, am), this;
        var wm = this._events[am];
        if (wm.nO) wm.nO !== Tm || Am && !wm.once || hm && wm.context !== hm || xm(this, am);
        else {
          for (var Dm = 0, im = [], Rm = wm.length; Dm < Rm; Dm++)(wm[Dm].nO !== Tm || Am && !wm[Dm].once || hm && wm[Dm].context !== hm) && im.push(wm[Dm]);
          im.length ? this._events[am] = 1 === im.length ? im[0] : im : xm(this, am)
        }
        return this
      }, wm.prototype.YV = function(mm) {
        var Tm;
        return mm ? (Tm = fm ? fm + mm : mm, this._events[Tm] && xm(this, Tm)) : (this._events = new hm, this._eventsCount = 0), this
      }, wm.prototype.off = wm.prototype.removeListener, wm.prototype.addListener = wm.prototype.on, wm.prefixed = fm, wm.EventEmitter = wm, mm.exports = wm
    }(xm);
    var wm, Dm, im = am(xm.exports);
    ! function(mm) {
      mm.assertEqual = mm => mm, mm.assertIs = function(mm) {}, mm.assertNever = function(mm) {
        throw new Error
      }, mm.arrayToEnum = mm => {
        const Tm = {};
        for (const fm of mm) Tm[fm] = fm;
        return Tm
      }, mm.getValidEnumValues = Tm => {
        const fm = mm.objectKeys(Tm).filter((mm => "number" !== typeof Tm[Tm[mm]])),
          hm = {};
        for (const mm of fm) hm[mm] = Tm[mm];
        return mm.objectValues(hm)
      }, mm.objectValues = Tm => mm.objectKeys(Tm).map((function(mm) {
        return Tm[mm]
      })), mm.objectKeys = "function" === typeof Object.keys ? mm => Object.keys(mm) : mm => {
        const Tm = [];
        for (const fm in mm) Object.prototype.hasOwnProperty.call(mm, fm) && Tm.push(fm);
        return Tm
      }, mm.find = (mm, Tm) => {
        for (const fm of mm)
          if (Tm(fm)) return fm
      }, mm.isInteger = "function" === typeof Number.isInteger ? mm => Number.isInteger(mm) : mm => "number" === typeof mm && isFinite(mm) && Math.floor(mm) === mm, mm.joinValues = function(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return mm.map((mm => "string" === typeof mm ? `'${mm}'` : mm)).join(Tm)
      }, mm.jsonStringifyReplacer = (mm, Tm) => "bigint" === typeof Tm ? Tm.toString() : Tm
    }(wm || (wm = {})),
    function(mm) {
      mm.mergeShapes = (mm, Tm) => ({
        ...mm,
        ...Tm
      })
    }(Dm || (Dm = {}));
    const Rm = wm.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      pm = mm => {
        switch (typeof mm) {
          case "undefined":
            return Rm.undefined;
          case "string":
            return Rm.string;
          case "number":
            return isNaN(mm) ? Rm.nan : Rm.number;
          case "boolean":
            return Rm.boolean;
          case "function":
            return Rm.function;
          case "bigint":
            return Rm.bigint;
          case "symbol":
            return Rm.symbol;
          case "object":
            return Array.isArray(mm) ? Rm.array : null === mm ? Rm.null : mm.then && "function" === typeof mm.then && mm.catch && "function" === typeof mm.catch ? Rm.promise : "undefined" !== typeof Map && mm instanceof Map ? Rm.map : "undefined" !== typeof Set && mm instanceof Set ? Rm.set : "undefined" !== typeof Date && mm instanceof Date ? Rm.date : Rm.object;
          default:
            return Rm.unknown
        }
      },
      Em = wm.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class om extends Error {
      constructor(mm) {
        var Tm;
        super(), Tm = this, this.issues = [], this.addIssue = mm => {
          this.issues = [...this.issues, mm]
        }, this.addIssues = function() {
          let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          Tm.issues = [...Tm.issues, ...mm]
        };
        const fm = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, fm) : this.__proto__ = fm, this.name = "ZodError", this.issues = mm
      }
      get errors() {
        return this.issues
      }
      format(mm) {
        const Tm = mm || function(mm) {
            return mm.message
          },
          fm = {
            _errors: []
          },
          hm = mm => {
            for (const Am of mm.issues)
              if ("invalid_union" === Am.code) Am.unionErrors.map(hm);
              else if ("invalid_return_type" === Am.code) hm(Am.returnTypeError);
            else if ("invalid_arguments" === Am.code) hm(Am.argumentsError);
            else if (0 === Am.path.length) fm._errors.push(Tm(Am));
            else {
              let mm = fm,
                hm = 0;
              for (; hm < Am.path.length;) {
                const fm = Am.path[hm];
                hm === Am.path.length - 1 ? (mm[fm] = mm[fm] || {
                  _errors: []
                }, mm[fm]._errors.push(Tm(Am))) : mm[fm] = mm[fm] || {
                  _errors: []
                }, mm = mm[fm], hm++
              }
            }
          };
        return hm(this), fm
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, wm.jsonStringifyReplacer, 2)
      }
      get ZO() {
        return 0 === this.issues.length
      }
      flatten() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mm => mm.message;
        const Tm = {},
          fm = [];
        for (const hm of this.issues) hm.path.length > 0 ? (Tm[hm.path[0]] = Tm[hm.path[0]] || [], Tm[hm.path[0]].push(mm(hm))) : fm.push(mm(hm));
        return {
          formErrors: fm,
          fieldErrors: Tm
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    om.create = mm => new om(mm);
    const Om = (mm, Tm) => {
      let fm;
      switch (mm.code) {
        case Em.invalid_type:
          fm = mm.received === Rm.undefined ? "Required" : `Expected ${mm.expected}, received ${mm.received}`;
          break;
        case Em.invalid_literal:
          fm = `Invalid literal value, expected ${JSON.stringify(mm.expected,wm.jsonStringifyReplacer)}`;
          break;
        case Em.unrecognized_keys:
          fm = `Unrecognized key(s) in object: ${wm.joinValues(mm.keys,", ")}`;
          break;
        case Em.invalid_union:
          fm = "Invalid input";
          break;
        case Em.invalid_union_discriminator:
          fm = `Invalid discriminator value. Expected ${wm.joinValues(mm.options)}`;
          break;
        case Em.invalid_enum_value:
          fm = `Invalid enum value. Expected ${wm.joinValues(mm.options)}, received '${mm.received}'`;
          break;
        case Em.invalid_arguments:
          fm = "Invalid function arguments";
          break;
        case Em.invalid_return_type:
          fm = "Invalid function return type";
          break;
        case Em.invalid_date:
          fm = "Invalid date";
          break;
        case Em.invalid_string:
          "object" === typeof mm.validation ? "includes" in mm.validation ? (fm = `Invalid input: must include "${mm.validation.includes}"`, "number" === typeof mm.validation.position && (fm = `${fm} at one or more positions greater than or equal to ${mm.validation.position}`)) : "startsWith" in mm.validation ? fm = `Invalid input: must start with "${mm.validation.startsWith}"` : "endsWith" in mm.validation ? fm = `Invalid input: must end with "${mm.validation.endsWith}"` : wm.assertNever(mm.validation) : fm = "regex" !== mm.validation ? `Invalid ${mm.validation}` : "Invalid";
          break;
        case Em.too_small:
          fm = "array" === mm.type ? `Array must contain ${mm.exact?"exactly":mm.inclusive?"at least":"more than"} ${mm.minimum} element(s)` : "string" === mm.type ? `String must contain ${mm.exact?"exactly":mm.inclusive?"at least":"over"} ${mm.minimum} character(s)` : "number" === mm.type ? `Number must be ${mm.exact?"exactly equal to ":mm.inclusive?"greater than or equal to ":"greater than "}${mm.minimum}` : "date" === mm.type ? `Date must be ${mm.exact?"exactly equal to ":mm.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(mm.minimum))}` : "Invalid input";
          break;
        case Em.too_big:
          fm = "array" === mm.type ? `Array must contain ${mm.exact?"exactly":mm.inclusive?"at most":"less than"} ${mm.maximum} element(s)` : "string" === mm.type ? `String must contain ${mm.exact?"exactly":mm.inclusive?"at most":"under"} ${mm.maximum} character(s)` : "number" === mm.type ? `Number must be ${mm.exact?"exactly":mm.inclusive?"less than or equal to":"less than"} ${mm.maximum}` : "bigint" === mm.type ? `BigInt must be ${mm.exact?"exactly":mm.inclusive?"less than or equal to":"less than"} ${mm.maximum}` : "date" === mm.type ? `Date must be ${mm.exact?"exactly":mm.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(mm.maximum))}` : "Invalid input";
          break;
        case Em.custom:
          fm = "Invalid input";
          break;
        case Em.invalid_intersection_types:
          fm = "Intersection results could not be merged";
          break;
        case Em.not_multiple_of:
          fm = `Number must be a multiple of ${mm.multipleOf}`;
          break;
        case Em.not_finite:
          fm = "Number must be finite";
          break;
        default:
          fm = Tm.defaultError, wm.assertNever(mm)
      }
      return {
        message: fm
      }
    };
    let Ym = Om;

    function qm() {
      return Ym
    }
    const jm = mm => {
      const {
        data: Tm,
        path: fm,
        errorMaps: hm,
        issueData: Am
      } = mm, am = [...fm, ...Am.path || []], xm = {
        ...Am,
        path: am
      };
      let wm = "";
      const Dm = hm.filter((mm => !!mm)).slice().reverse();
      for (const im of Dm) wm = im(xm, {
        data: Tm,
        defaultError: wm
      }).message;
      return {
        ...Am,
        path: am,
        message: Am.message || wm
      }
    };

    function Vm(mm, Tm) {
      const fm = jm({
        issueData: Tm,
        data: mm.data,
        path: mm.path,
        errorMaps: [mm.common.contextualErrorMap, mm.schemaErrorMap, qm(), Om].filter((mm => !!mm))
      });
      mm.common.issues.push(fm)
    }
    class Im {
      constructor() {
        this.value = "valid"
      }
      hY() {
        "valid" === this.value && (this.value = "hY")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(mm, Tm) {
        const fm = [];
        for (const hm of Tm) {
          if ("aborted" === hm.status) return Km;
          "hY" === hm.status && mm.hY(), fm.push(hm.value)
        }
        return {
          status: mm.value,
          value: fm
        }
      }
      static async mergeObjectAsync(mm, Tm) {
        const fm = [];
        for (const hm of Tm) fm.push({
          key: await hm.key,
          value: await hm.value
        });
        return Im.mergeObjectSync(mm, fm)
      }
      static mergeObjectSync(mm, Tm) {
        const fm = {};
        for (const hm of Tm) {
          const {
            key: Tm,
            value: Am
          } = hm;
          if ("aborted" === Tm.status) return Km;
          if ("aborted" === Am.status) return Km;
          "hY" === Tm.status && mm.hY(), "hY" === Am.status && mm.hY(), "__proto__" === Tm.value || "undefined" === typeof Am.value && !hm.alwaysSet || (fm[Tm.value] = Am.value)
        }
        return {
          status: mm.value,
          value: fm
        }
      }
    }
    const Km = Object.freeze({
        status: "aborted"
      }),
      Qm = mm => ({
        status: "hY",
        value: mm
      }),
      nm = mm => ({
        status: "valid",
        value: mm
      }),
      Jm = mm => "aborted" === mm.status,
      cm = mm => "hY" === mm.status,
      zm = mm => "valid" === mm.status,
      Zm = mm => "undefined" !== typeof Promise && mm instanceof Promise;
    var km;
    ! function(mm) {
      mm.errToObj = mm => "string" === typeof mm ? {
        message: mm
      } : mm || {}, mm.toString = mm => "string" === typeof mm ? mm : null === mm || void 0 === mm ? void 0 : mm.message
    }(km || (km = {}));
    class bm {
      constructor(mm, Tm, fm, hm) {
        this._cachedPath = [], this.parent = mm, this.data = Tm, this._path = fm, this._key = hm
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const Sm = (mm, Tm) => {
      if (zm(Tm)) return {
        success: !0,
        data: Tm.value
      };
      if (!mm.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const Tm = new om(mm.common.issues);
          return this._error = Tm, this._error
        }
      }
    };

    function em(mm) {
      if (!mm) return {};
      const {
        errorMap: Tm,
        invalid_type_error: fm,
        required_error: hm,
        description: Am
      } = mm;
      if (Tm && (fm || hm)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (Tm) return {
        errorMap: Tm,
        description: Am
      };
      return {
        errorMap: (mm, Tm) => "invalid_type" !== mm.code ? {
          message: Tm.defaultError
        } : "undefined" === typeof Tm.data ? {
          message: null !== hm && void 0 !== hm ? hm : Tm.defaultError
        } : {
          message: null !== fm && void 0 !== fm ? fm : Tm.defaultError
        },
        description: Am
      }
    }
    class Nm {
      constructor(mm) {
        this.spa = this.safeParseAsync, this._def = mm, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(mm) {
        return pm(mm.data)
      }
      _getOrReturnCtx(mm, Tm) {
        return Tm || {
          common: mm.parent.common,
          data: mm.data,
          parsedType: pm(mm.data),
          schemaErrorMap: this._def.errorMap,
          path: mm.path,
          parent: mm.parent
        }
      }
      _processInputParams(mm) {
        return {
          status: new Im,
          ctx: {
            common: mm.parent.common,
            data: mm.data,
            parsedType: pm(mm.data),
            schemaErrorMap: this._def.errorMap,
            path: mm.path,
            parent: mm.parent
          }
        }
      }
      _parseSync(mm) {
        const Tm = this._parse(mm);
        if (Zm(Tm)) throw new Error("Synchronous parse encountered promise.");
        return Tm
      }
      _parseAsync(mm) {
        const Tm = this._parse(mm);
        return Promise.resolve(Tm)
      }
      parse(mm, Tm) {
        const fm = this.safeParse(mm, Tm);
        if (fm.success) return fm.data;
        throw fm.error
      }
      safeParse(mm, Tm) {
        var fm;
        const hm = {
            common: {
              issues: [],
              async: null !== (fm = null === Tm || void 0 === Tm ? void 0 : Tm.async) && void 0 !== fm && fm,
              contextualErrorMap: null === Tm || void 0 === Tm ? void 0 : Tm.errorMap
            },
            path: (null === Tm || void 0 === Tm ? void 0 : Tm.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: mm,
            parsedType: pm(mm)
          },
          Am = this._parseSync({
            data: mm,
            path: hm.path,
            parent: hm
          });
        return Sm(hm, Am)
      }
      async parseAsync(mm, Tm) {
        const fm = await this.safeParseAsync(mm, Tm);
        if (fm.success) return fm.data;
        throw fm.error
      }
      async safeParseAsync(mm, Tm) {
        const fm = {
            common: {
              issues: [],
              contextualErrorMap: null === Tm || void 0 === Tm ? void 0 : Tm.errorMap,
              async: !0
            },
            path: (null === Tm || void 0 === Tm ? void 0 : Tm.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: mm,
            parsedType: pm(mm)
          },
          hm = this._parse({
            data: mm,
            path: fm.path,
            parent: fm
          }),
          Am = await (Zm(hm) ? hm : Promise.resolve(hm));
        return Sm(fm, Am)
      }
      refine(mm, Tm) {
        const fm = mm => "string" === typeof Tm || "undefined" === typeof Tm ? {
          message: Tm
        } : "function" === typeof Tm ? Tm(mm) : Tm;
        return this._refinement(((Tm, hm) => {
          const Am = mm(Tm),
            am = () => hm.addIssue({
              code: Em.custom,
              ...fm(Tm)
            });
          return "undefined" !== typeof Promise && Am instanceof Promise ? Am.then((mm => !!mm || (am(), !1))) : !!Am || (am(), !1)
        }))
      }
      refinement(mm, Tm) {
        return this._refinement(((fm, hm) => !!mm(fm) || (hm.addIssue("function" === typeof Tm ? Tm(fm, hm) : Tm), !1)))
      }
      _refinement(mm) {
        return new QT({
          schema: this,
          typeName: XT.ZodEffects,
          effect: {
            type: "refinement",
            refinement: mm
          }
        })
      }
      superRefine(mm) {
        return this._refinement(mm)
      }
      optional() {
        return nT.create(this, this._def)
      }
      nullable() {
        return JT.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return fT.create(this, this._def)
      }
      promise() {
        return KT.create(this, this._def)
      }
      or(mm) {
        return aT.create([this, mm], this._def)
      }
      and(mm) {
        return iT.create(this, mm, this._def)
      }
      transform(mm) {
        return new QT({
          ...em(this._def),
          schema: this,
          typeName: XT.ZodEffects,
          effect: {
            type: "transform",
            transform: mm
          }
        })
      }
      default (mm) {
        const Tm = "function" === typeof mm ? mm : () => mm;
        return new cT({
          ...em(this._def),
          innerType: this,
          defaultValue: Tm,
          typeName: XT.ZodDefault
        })
      }
      brand() {
        return new bT({
          typeName: XT.ZodBranded,
          type: this,
          ...em(this._def)
        })
      } catch (mm) {
        const Tm = "function" === typeof mm ? mm : () => mm;
        return new zT({
          ...em(this._def),
          innerType: this,
          catchValue: Tm,
          typeName: XT.ZodCatch
        })
      }
      describe(mm) {
        return new(0, this.constructor)({
          ...this._def,
          description: mm
        })
      }
      pipe(mm) {
        return ST.create(this, mm)
      }
      readonly() {
        return eT.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const Gm = /^c[^\s-]{8,}$/i,
      Xm = /^[a-z][a-z0-9]*$/,
      Pm = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      Hm = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      ym = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let Cm;
    const rm = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      sm = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class lm extends Nm {
      _parse(mm) {
        this._def.coerce && (mm.data = String(mm.data));
        if (this._getType(mm) !== Rm.string) {
          const Tm = this._getOrReturnCtx(mm);
          return Vm(Tm, {
            code: Em.invalid_type,
            expected: Rm.string,
            received: Tm.parsedType
          }), Km
        }
        const Tm = new Im;
        let fm;
        for (const Dm of this._def.checks)
          if ("min" === Dm.kind) mm.data.length < Dm.value && (fm = this._getOrReturnCtx(mm, fm), Vm(fm, {
            code: Em.too_small,
            minimum: Dm.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: Dm.message
          }), Tm.hY());
          else if ("max" === Dm.kind) mm.data.length > Dm.value && (fm = this._getOrReturnCtx(mm, fm), Vm(fm, {
          code: Em.too_big,
          maximum: Dm.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: Dm.message
        }), Tm.hY());
        else if ("length" === Dm.kind) {
          const hm = mm.data.length > Dm.value,
            Am = mm.data.length < Dm.value;
          (hm || Am) && (fm = this._getOrReturnCtx(mm, fm), hm ? Vm(fm, {
            code: Em.too_big,
            maximum: Dm.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: Dm.message
          }) : Am && Vm(fm, {
            code: Em.too_small,
            minimum: Dm.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: Dm.message
          }), Tm.hY())
        } else if ("email" === Dm.kind) ym.test(mm.data) || (fm = this._getOrReturnCtx(mm, fm), Vm(fm, {
          validation: "email",
          code: Em.invalid_string,
          message: Dm.message
        }), Tm.hY());
        else if ("emoji" === Dm.kind) Cm || (Cm = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Cm.test(mm.data) || (fm = this._getOrReturnCtx(mm, fm), Vm(fm, {
          validation: "emoji",
          code: Em.invalid_string,
          message: Dm.message
        }), Tm.hY());
        else if ("uuid" === Dm.kind) Hm.test(mm.data) || (fm = this._getOrReturnCtx(mm, fm), Vm(fm, {
          validation: "uuid",
          code: Em.invalid_string,
          message: Dm.message
        }), Tm.hY());
        else if ("cuid" === Dm.kind) Gm.test(mm.data) || (fm = this._getOrReturnCtx(mm, fm), Vm(fm, {
          validation: "cuid",
          code: Em.invalid_string,
          message: Dm.message
        }), Tm.hY());
        else if ("cuid2" === Dm.kind) Xm.test(mm.data) || (fm = this._getOrReturnCtx(mm, fm), Vm(fm, {
          validation: "cuid2",
          code: Em.invalid_string,
          message: Dm.message
        }), Tm.hY());
        else if ("ulid" === Dm.kind) Pm.test(mm.data) || (fm = this._getOrReturnCtx(mm, fm), Vm(fm, {
          validation: "ulid",
          code: Em.invalid_string,
          message: Dm.message
        }), Tm.hY());
        else if ("url" === Dm.kind) try {
          new URL(mm.data)
        } catch (xm) {
          fm = this._getOrReturnCtx(mm, fm), Vm(fm, {
            validation: "url",
            code: Em.invalid_string,
            message: Dm.message
          }), Tm.hY()
        } else if ("regex" === Dm.kind) {
          Dm.regex.lastIndex = 0;
          Dm.regex.test(mm.data) || (fm = this._getOrReturnCtx(mm, fm), Vm(fm, {
            validation: "regex",
            code: Em.invalid_string,
            message: Dm.message
          }), Tm.hY())
        } else if ("trim" === Dm.kind) mm.data = mm.data.trim();
        else if ("includes" === Dm.kind) mm.data.includes(Dm.value, Dm.position) || (fm = this._getOrReturnCtx(mm, fm), Vm(fm, {
          code: Em.invalid_string,
          validation: {
            includes: Dm.value,
            position: Dm.position
          },
          message: Dm.message
        }), Tm.hY());
        else if ("toLowerCase" === Dm.kind) mm.data = mm.data.toLowerCase();
        else if ("toUpperCase" === Dm.kind) mm.data = mm.data.toUpperCase();
        else if ("startsWith" === Dm.kind) mm.data.startsWith(Dm.value) || (fm = this._getOrReturnCtx(mm, fm), Vm(fm, {
          code: Em.invalid_string,
          validation: {
            startsWith: Dm.value
          },
          message: Dm.message
        }), Tm.hY());
        else if ("endsWith" === Dm.kind) mm.data.endsWith(Dm.value) || (fm = this._getOrReturnCtx(mm, fm), Vm(fm, {
          code: Em.invalid_string,
          validation: {
            endsWith: Dm.value
          },
          message: Dm.message
        }), Tm.hY());
        else if ("datetime" === Dm.kind) {
          ((am = Dm).precision ? am.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${am.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${am.precision}}Z$`) : 0 === am.precision ? am.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : am.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(mm.data) || (fm = this._getOrReturnCtx(mm, fm), Vm(fm, {
            code: Em.invalid_string,
            validation: "datetime",
            message: Dm.message
          }), Tm.hY())
        } else "ip" === Dm.kind ? (hm = mm.data, ("v4" !== (Am = Dm.version) && Am || !rm.test(hm)) && ("v6" !== Am && Am || !sm.test(hm)) && (fm = this._getOrReturnCtx(mm, fm), Vm(fm, {
          validation: "ip",
          code: Em.invalid_string,
          message: Dm.message
        }), Tm.hY())) : wm.assertNever(Dm);
        var hm, Am, am;
        return {
          status: Tm.value,
          value: mm.data
        }
      }
      _regex(mm, Tm, fm) {
        return this.refinement((Tm => mm.test(Tm)), {
          validation: Tm,
          code: Em.invalid_string,
          ...km.errToObj(fm)
        })
      }
      _addCheck(mm) {
        return new lm({
          ...this._def,
          checks: [...this._def.checks, mm]
        })
      }
      email(mm) {
        return this._addCheck({
          kind: "email",
          ...km.errToObj(mm)
        })
      }
      url(mm) {
        return this._addCheck({
          kind: "url",
          ...km.errToObj(mm)
        })
      }
      emoji(mm) {
        return this._addCheck({
          kind: "emoji",
          ...km.errToObj(mm)
        })
      }
      uuid(mm) {
        return this._addCheck({
          kind: "uuid",
          ...km.errToObj(mm)
        })
      }
      cuid(mm) {
        return this._addCheck({
          kind: "cuid",
          ...km.errToObj(mm)
        })
      }
      cuid2(mm) {
        return this._addCheck({
          kind: "cuid2",
          ...km.errToObj(mm)
        })
      }
      ulid(mm) {
        return this._addCheck({
          kind: "ulid",
          ...km.errToObj(mm)
        })
      }
      ip(mm) {
        return this._addCheck({
          kind: "ip",
          ...km.errToObj(mm)
        })
      }
      datetime(mm) {
        var Tm;
        return "string" === typeof mm ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: mm
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === mm || void 0 === mm ? void 0 : mm.precision) ? null : null === mm || void 0 === mm ? void 0 : mm.precision,
          offset: null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.offset) && void 0 !== Tm && Tm,
          ...km.errToObj(null === mm || void 0 === mm ? void 0 : mm.message)
        })
      }
      regex(mm, Tm) {
        return this._addCheck({
          kind: "regex",
          regex: mm,
          ...km.errToObj(Tm)
        })
      }
      includes(mm, Tm) {
        return this._addCheck({
          kind: "includes",
          value: mm,
          position: null === Tm || void 0 === Tm ? void 0 : Tm.position,
          ...km.errToObj(null === Tm || void 0 === Tm ? void 0 : Tm.message)
        })
      }
      startsWith(mm, Tm) {
        return this._addCheck({
          kind: "startsWith",
          value: mm,
          ...km.errToObj(Tm)
        })
      }
      endsWith(mm, Tm) {
        return this._addCheck({
          kind: "endsWith",
          value: mm,
          ...km.errToObj(Tm)
        })
      }
      min(mm, Tm) {
        return this._addCheck({
          kind: "min",
          value: mm,
          ...km.errToObj(Tm)
        })
      }
      max(mm, Tm) {
        return this._addCheck({
          kind: "max",
          value: mm,
          ...km.errToObj(Tm)
        })
      }
      length(mm, Tm) {
        return this._addCheck({
          kind: "length",
          value: mm,
          ...km.errToObj(Tm)
        })
      }
      nonempty(mm) {
        return this.min(1, km.errToObj(mm))
      }
      trim() {
        return new lm({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new lm({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new lm({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((mm => "datetime" === mm.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((mm => "email" === mm.kind))
      }
      get isURL() {
        return !!this._def.checks.find((mm => "url" === mm.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((mm => "emoji" === mm.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((mm => "uuid" === mm.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((mm => "cuid" === mm.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((mm => "cuid2" === mm.kind))
      }
      get isULID() {
        return !!this._def.checks.find((mm => "ulid" === mm.kind))
      }
      get isIP() {
        return !!this._def.checks.find((mm => "ip" === mm.kind))
      }
      get minLength() {
        let mm = null;
        for (const Tm of this._def.checks) "min" === Tm.kind && (null === mm || Tm.value > mm) && (mm = Tm.value);
        return mm
      }
      get maxLength() {
        let mm = null;
        for (const Tm of this._def.checks) "max" === Tm.kind && (null === mm || Tm.value < mm) && (mm = Tm.value);
        return mm
      }
    }

    function Mm(mm, Tm) {
      const fm = (mm.toString().split(".")[1] || "").length,
        hm = (Tm.toString().split(".")[1] || "").length,
        Am = fm > hm ? fm : hm;
      return parseInt(mm.toFixed(Am).replace(".", "")) % parseInt(Tm.toFixed(Am).replace(".", "")) / Math.pow(10, Am)
    }
    lm.create = mm => {
      var Tm;
      return new lm({
        checks: [],
        typeName: XT.ZodString,
        coerce: null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.coerce) && void 0 !== Tm && Tm,
        ...em(mm)
      })
    };
    class um extends Nm {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(mm) {
        this._def.coerce && (mm.data = Number(mm.data));
        if (this._getType(mm) !== Rm.number) {
          const Tm = this._getOrReturnCtx(mm);
          return Vm(Tm, {
            code: Em.invalid_type,
            expected: Rm.number,
            received: Tm.parsedType
          }), Km
        }
        let Tm;
        const fm = new Im;
        for (const hm of this._def.checks)
          if ("int" === hm.kind) wm.isInteger(mm.data) || (Tm = this._getOrReturnCtx(mm, Tm), Vm(Tm, {
            code: Em.invalid_type,
            expected: "integer",
            received: "float",
            message: hm.message
          }), fm.hY());
          else if ("min" === hm.kind) {
          (hm.inclusive ? mm.data < hm.value : mm.data <= hm.value) && (Tm = this._getOrReturnCtx(mm, Tm), Vm(Tm, {
            code: Em.too_small,
            minimum: hm.value,
            type: "number",
            inclusive: hm.inclusive,
            exact: !1,
            message: hm.message
          }), fm.hY())
        } else if ("max" === hm.kind) {
          (hm.inclusive ? mm.data > hm.value : mm.data >= hm.value) && (Tm = this._getOrReturnCtx(mm, Tm), Vm(Tm, {
            code: Em.too_big,
            maximum: hm.value,
            type: "number",
            inclusive: hm.inclusive,
            exact: !1,
            message: hm.message
          }), fm.hY())
        } else "multipleOf" === hm.kind ? 0 !== Mm(mm.data, hm.value) && (Tm = this._getOrReturnCtx(mm, Tm), Vm(Tm, {
          code: Em.not_multiple_of,
          multipleOf: hm.value,
          message: hm.message
        }), fm.hY()) : "finite" === hm.kind ? Number.isFinite(mm.data) || (Tm = this._getOrReturnCtx(mm, Tm), Vm(Tm, {
          code: Em.not_finite,
          message: hm.message
        }), fm.hY()) : wm.assertNever(hm);
        return {
          status: fm.value,
          value: mm.data
        }
      }
      gte(mm, Tm) {
        return this.setLimit("min", mm, !0, km.toString(Tm))
      }
      gt(mm, Tm) {
        return this.setLimit("min", mm, !1, km.toString(Tm))
      }
      lte(mm, Tm) {
        return this.setLimit("max", mm, !0, km.toString(Tm))
      }
      lt(mm, Tm) {
        return this.setLimit("max", mm, !1, km.toString(Tm))
      }
      setLimit(mm, Tm, fm, hm) {
        return new um({
          ...this._def,
          checks: [...this._def.checks, {
            kind: mm,
            value: Tm,
            inclusive: fm,
            message: km.toString(hm)
          }]
        })
      }
      _addCheck(mm) {
        return new um({
          ...this._def,
          checks: [...this._def.checks, mm]
        })
      }
      int(mm) {
        return this._addCheck({
          kind: "int",
          message: km.toString(mm)
        })
      }
      positive(mm) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: km.toString(mm)
        })
      }
      negative(mm) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: km.toString(mm)
        })
      }
      nonpositive(mm) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: km.toString(mm)
        })
      }
      nonnegative(mm) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: km.toString(mm)
        })
      }
      multipleOf(mm, Tm) {
        return this._addCheck({
          kind: "multipleOf",
          value: mm,
          message: km.toString(Tm)
        })
      }
      finite(mm) {
        return this._addCheck({
          kind: "finite",
          message: km.toString(mm)
        })
      }
      safe(mm) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: km.toString(mm)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: km.toString(mm)
        })
      }
      get minValue() {
        let mm = null;
        for (const Tm of this._def.checks) "min" === Tm.kind && (null === mm || Tm.value > mm) && (mm = Tm.value);
        return mm
      }
      get maxValue() {
        let mm = null;
        for (const Tm of this._def.checks) "max" === Tm.kind && (null === mm || Tm.value < mm) && (mm = Tm.value);
        return mm
      }
      get isInt() {
        return !!this._def.checks.find((mm => "int" === mm.kind || "multipleOf" === mm.kind && wm.isInteger(mm.value)))
      }
      get isFinite() {
        let mm = null,
          Tm = null;
        for (const fm of this._def.checks) {
          if ("finite" === fm.kind || "int" === fm.kind || "multipleOf" === fm.kind) return !0;
          "min" === fm.kind ? (null === Tm || fm.value > Tm) && (Tm = fm.value) : "max" === fm.kind && (null === mm || fm.value < mm) && (mm = fm.value)
        }
        return Number.isFinite(Tm) && Number.isFinite(mm)
      }
    }
    um.create = mm => new um({
      checks: [],
      typeName: XT.ZodNumber,
      coerce: (null === mm || void 0 === mm ? void 0 : mm.coerce) || !1,
      ...em(mm)
    });
    class Bm extends Nm {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(mm) {
        this._def.coerce && (mm.data = BigInt(mm.data));
        if (this._getType(mm) !== Rm.bigint) {
          const Tm = this._getOrReturnCtx(mm);
          return Vm(Tm, {
            code: Em.invalid_type,
            expected: Rm.bigint,
            received: Tm.parsedType
          }), Km
        }
        let Tm;
        const fm = new Im;
        for (const hm of this._def.checks)
          if ("min" === hm.kind) {
            (hm.inclusive ? mm.data < hm.value : mm.data <= hm.value) && (Tm = this._getOrReturnCtx(mm, Tm), Vm(Tm, {
              code: Em.too_small,
              type: "bigint",
              minimum: hm.value,
              inclusive: hm.inclusive,
              message: hm.message
            }), fm.hY())
          } else if ("max" === hm.kind) {
          (hm.inclusive ? mm.data > hm.value : mm.data >= hm.value) && (Tm = this._getOrReturnCtx(mm, Tm), Vm(Tm, {
            code: Em.too_big,
            type: "bigint",
            maximum: hm.value,
            inclusive: hm.inclusive,
            message: hm.message
          }), fm.hY())
        } else "multipleOf" === hm.kind ? mm.data % hm.value !== BigInt(0) && (Tm = this._getOrReturnCtx(mm, Tm), Vm(Tm, {
          code: Em.not_multiple_of,
          multipleOf: hm.value,
          message: hm.message
        }), fm.hY()) : wm.assertNever(hm);
        return {
          status: fm.value,
          value: mm.data
        }
      }
      gte(mm, Tm) {
        return this.setLimit("min", mm, !0, km.toString(Tm))
      }
      gt(mm, Tm) {
        return this.setLimit("min", mm, !1, km.toString(Tm))
      }
      lte(mm, Tm) {
        return this.setLimit("max", mm, !0, km.toString(Tm))
      }
      lt(mm, Tm) {
        return this.setLimit("max", mm, !1, km.toString(Tm))
      }
      setLimit(mm, Tm, fm, hm) {
        return new Bm({
          ...this._def,
          checks: [...this._def.checks, {
            kind: mm,
            value: Tm,
            inclusive: fm,
            message: km.toString(hm)
          }]
        })
      }
      _addCheck(mm) {
        return new Bm({
          ...this._def,
          checks: [...this._def.checks, mm]
        })
      }
      positive(mm) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: km.toString(mm)
        })
      }
      negative(mm) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: km.toString(mm)
        })
      }
      nonpositive(mm) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: km.toString(mm)
        })
      }
      nonnegative(mm) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: km.toString(mm)
        })
      }
      multipleOf(mm, Tm) {
        return this._addCheck({
          kind: "multipleOf",
          value: mm,
          message: km.toString(Tm)
        })
      }
      get minValue() {
        let mm = null;
        for (const Tm of this._def.checks) "min" === Tm.kind && (null === mm || Tm.value > mm) && (mm = Tm.value);
        return mm
      }
      get maxValue() {
        let mm = null;
        for (const Tm of this._def.checks) "max" === Tm.kind && (null === mm || Tm.value < mm) && (mm = Tm.value);
        return mm
      }
    }
    Bm.create = mm => {
      var Tm;
      return new Bm({
        checks: [],
        typeName: XT.ZodBigInt,
        coerce: null !== (Tm = null === mm || void 0 === mm ? void 0 : mm.coerce) && void 0 !== Tm && Tm,
        ...em(mm)
      })
    };
    class Lm extends Nm {
      _parse(mm) {
        this._def.coerce && (mm.data = Boolean(mm.data));
        if (this._getType(mm) !== Rm.boolean) {
          const Tm = this._getOrReturnCtx(mm);
          return Vm(Tm, {
            code: Em.invalid_type,
            expected: Rm.boolean,
            received: Tm.parsedType
          }), Km
        }
        return nm(mm.data)
      }
    }
    Lm.create = mm => new Lm({
      typeName: XT.ZodBoolean,
      coerce: (null === mm || void 0 === mm ? void 0 : mm.coerce) || !1,
      ...em(mm)
    });
    class tm extends Nm {
      _parse(mm) {
        this._def.coerce && (mm.data = new Date(mm.data));
        if (this._getType(mm) !== Rm.date) {
          const Tm = this._getOrReturnCtx(mm);
          return Vm(Tm, {
            code: Em.invalid_type,
            expected: Rm.date,
            received: Tm.parsedType
          }), Km
        }
        if (isNaN(mm.data.getTime())) {
          return Vm(this._getOrReturnCtx(mm), {
            code: Em.invalid_date
          }), Km
        }
        const Tm = new Im;
        let fm;
        for (const hm of this._def.checks) "min" === hm.kind ? mm.data.getTime() < hm.value && (fm = this._getOrReturnCtx(mm, fm), Vm(fm, {
          code: Em.too_small,
          message: hm.message,
          inclusive: !0,
          exact: !1,
          minimum: hm.value,
          type: "date"
        }), Tm.hY()) : "max" === hm.kind ? mm.data.getTime() > hm.value && (fm = this._getOrReturnCtx(mm, fm), Vm(fm, {
          code: Em.too_big,
          message: hm.message,
          inclusive: !0,
          exact: !1,
          maximum: hm.value,
          type: "date"
        }), Tm.hY()) : wm.assertNever(hm);
        return {
          status: Tm.value,
          value: new Date(mm.data.getTime())
        }
      }
      _addCheck(mm) {
        return new tm({
          ...this._def,
          checks: [...this._def.checks, mm]
        })
      }
      min(mm, Tm) {
        return this._addCheck({
          kind: "min",
          value: mm.getTime(),
          message: km.toString(Tm)
        })
      }
      max(mm, Tm) {
        return this._addCheck({
          kind: "max",
          value: mm.getTime(),
          message: km.toString(Tm)
        })
      }
      get minDate() {
        let mm = null;
        for (const Tm of this._def.checks) "min" === Tm.kind && (null === mm || Tm.value > mm) && (mm = Tm.value);
        return null != mm ? new Date(mm) : null
      }
      get maxDate() {
        let mm = null;
        for (const Tm of this._def.checks) "max" === Tm.kind && (null === mm || Tm.value < mm) && (mm = Tm.value);
        return null != mm ? new Date(mm) : null
      }
    }
    tm.create = mm => new tm({
      checks: [],
      coerce: (null === mm || void 0 === mm ? void 0 : mm.coerce) || !1,
      typeName: XT.ZodDate,
      ...em(mm)
    });
    class Um extends Nm {
      _parse(mm) {
        if (this._getType(mm) !== Rm.symbol) {
          const Tm = this._getOrReturnCtx(mm);
          return Vm(Tm, {
            code: Em.invalid_type,
            expected: Rm.symbol,
            received: Tm.parsedType
          }), Km
        }
        return nm(mm.data)
      }
    }
    Um.create = mm => new Um({
      typeName: XT.ZodSymbol,
      ...em(mm)
    });
    class dm extends Nm {
      _parse(mm) {
        if (this._getType(mm) !== Rm.undefined) {
          const Tm = this._getOrReturnCtx(mm);
          return Vm(Tm, {
            code: Em.invalid_type,
            expected: Rm.undefined,
            received: Tm.parsedType
          }), Km
        }
        return nm(mm.data)
      }
    }
    dm.create = mm => new dm({
      typeName: XT.ZodUndefined,
      ...em(mm)
    });
    class gm extends Nm {
      _parse(mm) {
        if (this._getType(mm) !== Rm.null) {
          const Tm = this._getOrReturnCtx(mm);
          return Vm(Tm, {
            code: Em.invalid_type,
            expected: Rm.null,
            received: Tm.parsedType
          }), Km
        }
        return nm(mm.data)
      }
    }
    gm.create = mm => new gm({
      typeName: XT.ZodNull,
      ...em(mm)
    });
    class Wm extends Nm {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(mm) {
        return nm(mm.data)
      }
    }
    Wm.create = mm => new Wm({
      typeName: XT.ZodAny,
      ...em(mm)
    });
    class Fm extends Nm {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(mm) {
        return nm(mm.data)
      }
    }
    Fm.create = mm => new Fm({
      typeName: XT.ZodUnknown,
      ...em(mm)
    });
    class mT extends Nm {
      _parse(mm) {
        const Tm = this._getOrReturnCtx(mm);
        return Vm(Tm, {
          code: Em.invalid_type,
          expected: Rm.never,
          received: Tm.parsedType
        }), Km
      }
    }
    mT.create = mm => new mT({
      typeName: XT.ZodNever,
      ...em(mm)
    });
    class TT extends Nm {
      _parse(mm) {
        if (this._getType(mm) !== Rm.undefined) {
          const Tm = this._getOrReturnCtx(mm);
          return Vm(Tm, {
            code: Em.invalid_type,
            expected: Rm.void,
            received: Tm.parsedType
          }), Km
        }
        return nm(mm.data)
      }
    }
    TT.create = mm => new TT({
      typeName: XT.ZodVoid,
      ...em(mm)
    });
    class fT extends Nm {
      _parse(mm) {
        const {
          ctx: Tm,
          status: fm
        } = this._processInputParams(mm), hm = this._def;
        if (Tm.parsedType !== Rm.array) return Vm(Tm, {
          code: Em.invalid_type,
          expected: Rm.array,
          received: Tm.parsedType
        }), Km;
        if (null !== hm.exactLength) {
          const mm = Tm.data.length > hm.exactLength.value,
            Am = Tm.data.length < hm.exactLength.value;
          (mm || Am) && (Vm(Tm, {
            code: mm ? Em.too_big : Em.too_small,
            minimum: Am ? hm.exactLength.value : void 0,
            maximum: mm ? hm.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: hm.exactLength.message
          }), fm.hY())
        }
        if (null !== hm.minLength && Tm.data.length < hm.minLength.value && (Vm(Tm, {
            code: Em.too_small,
            minimum: hm.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: hm.minLength.message
          }), fm.hY()), null !== hm.maxLength && Tm.data.length > hm.maxLength.value && (Vm(Tm, {
            code: Em.too_big,
            maximum: hm.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: hm.maxLength.message
          }), fm.hY()), Tm.common.async) return Promise.all([...Tm.data].map(((mm, fm) => hm.type._parseAsync(new bm(Tm, mm, Tm.path, fm))))).then((mm => Im.mergeArray(fm, mm)));
        const Am = [...Tm.data].map(((mm, fm) => hm.type._parseSync(new bm(Tm, mm, Tm.path, fm))));
        return Im.mergeArray(fm, Am)
      }
      get element() {
        return this._def.type
      }
      min(mm, Tm) {
        return new fT({
          ...this._def,
          minLength: {
            value: mm,
            message: km.toString(Tm)
          }
        })
      }
      max(mm, Tm) {
        return new fT({
          ...this._def,
          maxLength: {
            value: mm,
            message: km.toString(Tm)
          }
        })
      }
      length(mm, Tm) {
        return new fT({
          ...this._def,
          exactLength: {
            value: mm,
            message: km.toString(Tm)
          }
        })
      }
      nonempty(mm) {
        return this.min(1, mm)
      }
    }

    function hT(mm) {
      if (mm instanceof AT) {
        const Tm = {};
        for (const fm in mm.shape) {
          const hm = mm.shape[fm];
          Tm[fm] = nT.create(hT(hm))
        }
        return new AT({
          ...mm._def,
          shape: () => Tm
        })
      }
      return mm instanceof fT ? new fT({
        ...mm._def,
        type: hT(mm.element)
      }) : mm instanceof nT ? nT.create(hT(mm.unwrap())) : mm instanceof JT ? JT.create(hT(mm.unwrap())) : mm instanceof RT ? RT.create(mm.items.map((mm => hT(mm)))) : mm
    }
    fT.create = (mm, Tm) => new fT({
      type: mm,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: XT.ZodArray,
      ...em(Tm)
    });
    class AT extends Nm {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const mm = this._def.shape(),
          Tm = wm.objectKeys(mm);
        return this._cached = {
          shape: mm,
          keys: Tm
        }
      }
      _parse(mm) {
        if (this._getType(mm) !== Rm.object) {
          const Tm = this._getOrReturnCtx(mm);
          return Vm(Tm, {
            code: Em.invalid_type,
            expected: Rm.object,
            received: Tm.parsedType
          }), Km
        }
        const {
          status: Tm,
          ctx: fm
        } = this._processInputParams(mm), {
          shape: hm,
          keys: Am
        } = this._getCached(), am = [];
        if (!(this._def.catchall instanceof mT && "strip" === this._def.unknownKeys))
          for (const wm in fm.data) Am.includes(wm) || am.push(wm);
        const xm = [];
        for (const wm of Am) {
          const mm = hm[wm],
            Tm = fm.data[wm];
          xm.push({
            key: {
              status: "valid",
              value: wm
            },
            value: mm._parse(new bm(fm, Tm, fm.path, wm)),
            alwaysSet: wm in fm.data
          })
        }
        if (this._def.catchall instanceof mT) {
          const mm = this._def.unknownKeys;
          if ("passthrough" === mm)
            for (const Tm of am) xm.push({
              key: {
                status: "valid",
                value: Tm
              },
              value: {
                status: "valid",
                value: fm.data[Tm]
              }
            });
          else if ("strict" === mm) am.length > 0 && (Vm(fm, {
            code: Em.unrecognized_keys,
            keys: am
          }), Tm.hY());
          else if ("strip" !== mm) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const mm = this._def.catchall;
          for (const Tm of am) {
            const hm = fm.data[Tm];
            xm.push({
              key: {
                status: "valid",
                value: Tm
              },
              value: mm._parse(new bm(fm, hm, fm.path, Tm)),
              alwaysSet: Tm in fm.data
            })
          }
        }
        return fm.common.async ? Promise.resolve().then((async () => {
          const mm = [];
          for (const Tm of xm) {
            const fm = await Tm.key;
            mm.push({
              key: fm,
              value: await Tm.value,
              alwaysSet: Tm.alwaysSet
            })
          }
          return mm
        })).then((mm => Im.mergeObjectSync(Tm, mm))) : Im.mergeObjectSync(Tm, xm)
      }
      get shape() {
        return this._def.shape()
      }
      strict(mm) {
        return km.errToObj, new AT({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== mm ? {
            errorMap: (Tm, fm) => {
              var hm, Am, am, xm;
              const wm = null !== (am = null === (Am = (hm = this._def).errorMap) || void 0 === Am ? void 0 : Am.call(hm, Tm, fm).message) && void 0 !== am ? am : fm.defaultError;
              return "unrecognized_keys" === Tm.code ? {
                message: null !== (xm = km.errToObj(mm).message) && void 0 !== xm ? xm : wm
              } : {
                message: wm
              }
            }
          } : {}
        })
      }
      strip() {
        return new AT({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new AT({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(mm) {
        return new AT({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...mm
          })
        })
      }
      merge(mm) {
        return new AT({
          unknownKeys: mm._def.unknownKeys,
          catchall: mm._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...mm._def.shape()
          }),
          typeName: XT.ZodObject
        })
      }
      setKey(mm, Tm) {
        return this.augment({
          [mm]: Tm
        })
      }
      catchall(mm) {
        return new AT({
          ...this._def,
          catchall: mm
        })
      }
      Do(mm) {
        const Tm = {};
        return wm.objectKeys(mm).forEach((fm => {
          mm[fm] && this.shape[fm] && (Tm[fm] = this.shape[fm])
        })), new AT({
          ...this._def,
          shape: () => Tm
        })
      }
      omit(mm) {
        const Tm = {};
        return wm.objectKeys(this.shape).forEach((fm => {
          mm[fm] || (Tm[fm] = this.shape[fm])
        })), new AT({
          ...this._def,
          shape: () => Tm
        })
      }
      deepPartial() {
        return hT(this)
      }
      partial(mm) {
        const Tm = {};
        return wm.objectKeys(this.shape).forEach((fm => {
          const hm = this.shape[fm];
          mm && !mm[fm] ? Tm[fm] = hm : Tm[fm] = hm.optional()
        })), new AT({
          ...this._def,
          shape: () => Tm
        })
      }
      required(mm) {
        const Tm = {};
        return wm.objectKeys(this.shape).forEach((fm => {
          if (mm && !mm[fm]) Tm[fm] = this.shape[fm];
          else {
            let mm = this.shape[fm];
            for (; mm instanceof nT;) mm = mm._def.innerType;
            Tm[fm] = mm
          }
        })), new AT({
          ...this._def,
          shape: () => Tm
        })
      }
      keyof() {
        return jT(wm.objectKeys(this.shape))
      }
    }
    AT.create = (mm, Tm) => new AT({
      shape: () => mm,
      unknownKeys: "strip",
      catchall: mT.create(),
      typeName: XT.ZodObject,
      ...em(Tm)
    }), AT.strictCreate = (mm, Tm) => new AT({
      shape: () => mm,
      unknownKeys: "strict",
      catchall: mT.create(),
      typeName: XT.ZodObject,
      ...em(Tm)
    }), AT.lazycreate = (mm, Tm) => new AT({
      shape: mm,
      unknownKeys: "strip",
      catchall: mT.create(),
      typeName: XT.ZodObject,
      ...em(Tm)
    });
    class aT extends Nm {
      _parse(mm) {
        const {
          ctx: Tm
        } = this._processInputParams(mm), fm = this._def.options;
        if (Tm.common.async) return Promise.all(fm.map((async mm => {
          const fm = {
            ...Tm,
            common: {
              ...Tm.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await mm._parseAsync({
              data: Tm.data,
              path: Tm.path,
              parent: fm
            }),
            ctx: fm
          }
        }))).then((function(mm) {
          for (const Tm of mm)
            if ("valid" === Tm.result.status) return Tm.result;
          for (const hm of mm)
            if ("hY" === hm.result.status) return Tm.common.issues.push(...hm.ctx.common.issues), hm.result;
          const fm = mm.map((mm => new om(mm.ctx.common.issues)));
          return Vm(Tm, {
            code: Em.invalid_union,
            unionErrors: fm
          }), Km
        }));
        {
          let mm;
          const hm = [];
          for (const am of fm) {
            const fm = {
                ...Tm,
                common: {
                  ...Tm.common,
                  issues: []
                },
                parent: null
              },
              Am = am._parseSync({
                data: Tm.data,
                path: Tm.path,
                parent: fm
              });
            if ("valid" === Am.status) return Am;
            "hY" !== Am.status || mm || (mm = {
              result: Am,
              ctx: fm
            }), fm.common.issues.length && hm.push(fm.common.issues)
          }
          if (mm) return Tm.common.issues.push(...mm.ctx.common.issues), mm.result;
          const Am = hm.map((mm => new om(mm)));
          return Vm(Tm, {
            code: Em.invalid_union,
            unionErrors: Am
          }), Km
        }
      }
      get options() {
        return this._def.options
      }
    }
    aT.create = (mm, Tm) => new aT({
      options: mm,
      typeName: XT.ZodUnion,
      ...em(Tm)
    });
    const xT = mm => mm instanceof YT ? xT(mm.schema) : mm instanceof QT ? xT(mm.innerType()) : mm instanceof qT ? [mm.value] : mm instanceof VT ? mm.options : mm instanceof IT ? Object.keys(mm.enum) : mm instanceof cT ? xT(mm._def.innerType) : mm instanceof dm ? [void 0] : mm instanceof gm ? [null] : null;
    class wT extends Nm {
      _parse(mm) {
        const {
          ctx: Tm
        } = this._processInputParams(mm);
        if (Tm.parsedType !== Rm.object) return Vm(Tm, {
          code: Em.invalid_type,
          expected: Rm.object,
          received: Tm.parsedType
        }), Km;
        const fm = this.discriminator,
          hm = Tm.data[fm],
          Am = this.optionsMap.get(hm);
        return Am ? Tm.common.async ? Am._parseAsync({
          data: Tm.data,
          path: Tm.path,
          parent: Tm
        }) : Am._parseSync({
          data: Tm.data,
          path: Tm.path,
          parent: Tm
        }) : (Vm(Tm, {
          code: Em.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [fm]
        }), Km)
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
      static create(mm, Tm, fm) {
        const hm = new Map;
        for (const Am of Tm) {
          const Tm = xT(Am.shape[mm]);
          if (!Tm) throw new Error(`A discriminator value for key \`${mm}\` could not be extracted from all schema options`);
          for (const fm of Tm) {
            if (hm.has(fm)) throw new Error(`Discriminator property ${String(mm)} has duplicate value ${String(fm)}`);
            hm.set(fm, Am)
          }
        }
        return new wT({
          typeName: XT.ZodDiscriminatedUnion,
          discriminator: mm,
          options: Tm,
          optionsMap: hm,
          ...em(fm)
        })
      }
    }

    function DT(mm, Tm) {
      const fm = pm(mm),
        hm = pm(Tm);
      if (mm === Tm) return {
        valid: !0,
        data: mm
      };
      if (fm === Rm.object && hm === Rm.object) {
        const fm = wm.objectKeys(Tm),
          hm = wm.objectKeys(mm).filter((mm => -1 !== fm.indexOf(mm))),
          Am = {
            ...mm,
            ...Tm
          };
        for (const am of hm) {
          const fm = DT(mm[am], Tm[am]);
          if (!fm.valid) return {
            valid: !1
          };
          Am[am] = fm.data
        }
        return {
          valid: !0,
          data: Am
        }
      }
      if (fm === Rm.array && hm === Rm.array) {
        if (mm.length !== Tm.length) return {
          valid: !1
        };
        const fm = [];
        for (let hm = 0; hm < mm.length; hm++) {
          const Am = DT(mm[hm], Tm[hm]);
          if (!Am.valid) return {
            valid: !1
          };
          fm.push(Am.data)
        }
        return {
          valid: !0,
          data: fm
        }
      }
      return fm === Rm.date && hm === Rm.date && +mm === +Tm ? {
        valid: !0,
        data: mm
      } : {
        valid: !1
      }
    }
    class iT extends Nm {
      _parse(mm) {
        const {
          status: Tm,
          ctx: fm
        } = this._processInputParams(mm), hm = (mm, hm) => {
          if (Jm(mm) || Jm(hm)) return Km;
          const Am = DT(mm.value, hm.value);
          return Am.valid ? ((cm(mm) || cm(hm)) && Tm.hY(), {
            status: Tm.value,
            value: Am.data
          }) : (Vm(fm, {
            code: Em.invalid_intersection_types
          }), Km)
        };
        return fm.common.async ? Promise.all([this._def.left._parseAsync({
          data: fm.data,
          path: fm.path,
          parent: fm
        }), this._def.right._parseAsync({
          data: fm.data,
          path: fm.path,
          parent: fm
        })]).then((mm => {
          let [Tm, fm] = mm;
          return hm(Tm, fm)
        })) : hm(this._def.left._parseSync({
          data: fm.data,
          path: fm.path,
          parent: fm
        }), this._def.right._parseSync({
          data: fm.data,
          path: fm.path,
          parent: fm
        }))
      }
    }
    iT.create = (mm, Tm, fm) => new iT({
      left: mm,
      right: Tm,
      typeName: XT.ZodIntersection,
      ...em(fm)
    });
    class RT extends Nm {
      _parse(mm) {
        const {
          status: Tm,
          ctx: fm
        } = this._processInputParams(mm);
        if (fm.parsedType !== Rm.array) return Vm(fm, {
          code: Em.invalid_type,
          expected: Rm.array,
          received: fm.parsedType
        }), Km;
        if (fm.data.length < this._def.items.length) return Vm(fm, {
          code: Em.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), Km;
        !this._def.rest && fm.data.length > this._def.items.length && (Vm(fm, {
          code: Em.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), Tm.hY());
        const hm = [...fm.data].map(((mm, Tm) => {
          const hm = this._def.items[Tm] || this._def.rest;
          return hm ? hm._parse(new bm(fm, mm, fm.path, Tm)) : null
        })).filter((mm => !!mm));
        return fm.common.async ? Promise.all(hm).then((mm => Im.mergeArray(Tm, mm))) : Im.mergeArray(Tm, hm)
      }
      get items() {
        return this._def.items
      }
      rest(mm) {
        return new RT({
          ...this._def,
          rest: mm
        })
      }
    }
    RT.create = (mm, Tm) => {
      if (!Array.isArray(mm)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new RT({
        items: mm,
        typeName: XT.ZodTuple,
        rest: null,
        ...em(Tm)
      })
    };
    class pT extends Nm {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(mm) {
        const {
          status: Tm,
          ctx: fm
        } = this._processInputParams(mm);
        if (fm.parsedType !== Rm.object) return Vm(fm, {
          code: Em.invalid_type,
          expected: Rm.object,
          received: fm.parsedType
        }), Km;
        const hm = [],
          Am = this._def.keyType,
          am = this._def.valueType;
        for (const xm in fm.data) hm.push({
          key: Am._parse(new bm(fm, xm, fm.path, xm)),
          value: am._parse(new bm(fm, fm.data[xm], fm.path, xm))
        });
        return fm.common.async ? Im.mergeObjectAsync(Tm, hm) : Im.mergeObjectSync(Tm, hm)
      }
      get element() {
        return this._def.valueType
      }
      static create(mm, Tm, fm) {
        return new pT(Tm instanceof Nm ? {
          keyType: mm,
          valueType: Tm,
          typeName: XT.ZodRecord,
          ...em(fm)
        } : {
          keyType: lm.create(),
          valueType: mm,
          typeName: XT.ZodRecord,
          ...em(Tm)
        })
      }
    }
    class ET extends Nm {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(mm) {
        const {
          status: Tm,
          ctx: fm
        } = this._processInputParams(mm);
        if (fm.parsedType !== Rm.map) return Vm(fm, {
          code: Em.invalid_type,
          expected: Rm.map,
          received: fm.parsedType
        }), Km;
        const hm = this._def.keyType,
          Am = this._def.valueType,
          am = [...fm.data.entries()].map(((mm, Tm) => {
            let [am, xm] = mm;
            return {
              key: hm._parse(new bm(fm, am, fm.path, [Tm, "key"])),
              value: Am._parse(new bm(fm, xm, fm.path, [Tm, "value"]))
            }
          }));
        if (fm.common.async) {
          const mm = new Map;
          return Promise.resolve().then((async () => {
            for (const fm of am) {
              const hm = await fm.key,
                Am = await fm.value;
              if ("aborted" === hm.status || "aborted" === Am.status) return Km;
              "hY" !== hm.status && "hY" !== Am.status || Tm.hY(), mm.set(hm.value, Am.value)
            }
            return {
              status: Tm.value,
              value: mm
            }
          }))
        } {
          const mm = new Map;
          for (const fm of am) {
            const hm = fm.key,
              Am = fm.value;
            if ("aborted" === hm.status || "aborted" === Am.status) return Km;
            "hY" !== hm.status && "hY" !== Am.status || Tm.hY(), mm.set(hm.value, Am.value)
          }
          return {
            status: Tm.value,
            value: mm
          }
        }
      }
    }
    ET.create = (mm, Tm, fm) => new ET({
      valueType: Tm,
      keyType: mm,
      typeName: XT.ZodMap,
      ...em(fm)
    });
    class oT extends Nm {
      _parse(mm) {
        const {
          status: Tm,
          ctx: fm
        } = this._processInputParams(mm);
        if (fm.parsedType !== Rm.set) return Vm(fm, {
          code: Em.invalid_type,
          expected: Rm.set,
          received: fm.parsedType
        }), Km;
        const hm = this._def;
        null !== hm.minSize && fm.data.size < hm.minSize.value && (Vm(fm, {
          code: Em.too_small,
          minimum: hm.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: hm.minSize.message
        }), Tm.hY()), null !== hm.maxSize && fm.data.size > hm.maxSize.value && (Vm(fm, {
          code: Em.too_big,
          maximum: hm.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: hm.maxSize.message
        }), Tm.hY());
        const Am = this._def.valueType;

        function am(mm) {
          const fm = new Set;
          for (const hm of mm) {
            if ("aborted" === hm.status) return Km;
            "hY" === hm.status && Tm.hY(), fm.add(hm.value)
          }
          return {
            status: Tm.value,
            value: fm
          }
        }
        const xm = [...fm.data.values()].map(((mm, Tm) => Am._parse(new bm(fm, mm, fm.path, Tm))));
        return fm.common.async ? Promise.all(xm).then((mm => am(mm))) : am(xm)
      }
      min(mm, Tm) {
        return new oT({
          ...this._def,
          minSize: {
            value: mm,
            message: km.toString(Tm)
          }
        })
      }
      max(mm, Tm) {
        return new oT({
          ...this._def,
          maxSize: {
            value: mm,
            message: km.toString(Tm)
          }
        })
      }
      size(mm, Tm) {
        return this.min(mm, Tm).max(mm, Tm)
      }
      nonempty(mm) {
        return this.min(1, mm)
      }
    }
    oT.create = (mm, Tm) => new oT({
      valueType: mm,
      minSize: null,
      maxSize: null,
      typeName: XT.ZodSet,
      ...em(Tm)
    });
    class OT extends Nm {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(mm) {
        const {
          ctx: Tm
        } = this._processInputParams(mm);
        if (Tm.parsedType !== Rm.function) return Vm(Tm, {
          code: Em.invalid_type,
          expected: Rm.function,
          received: Tm.parsedType
        }), Km;

        function fm(mm, fm) {
          return jm({
            data: mm,
            path: Tm.path,
            errorMaps: [Tm.common.contextualErrorMap, Tm.schemaErrorMap, qm(), Om].filter((mm => !!mm)),
            issueData: {
              code: Em.invalid_arguments,
              argumentsError: fm
            }
          })
        }

        function hm(mm, fm) {
          return jm({
            data: mm,
            path: Tm.path,
            errorMaps: [Tm.common.contextualErrorMap, Tm.schemaErrorMap, qm(), Om].filter((mm => !!mm)),
            issueData: {
              code: Em.invalid_return_type,
              returnTypeError: fm
            }
          })
        }
        const Am = {
            errorMap: Tm.common.contextualErrorMap
          },
          am = Tm.data;
        if (this._def.returns instanceof KT) {
          const mm = this;
          return nm((async function() {
            for (var Tm = arguments.length, xm = new Array(Tm), wm = 0; wm < Tm; wm++) xm[wm] = arguments[wm];
            const Dm = new om([]),
              im = await mm._def.args.parseAsync(xm, Am).catch((mm => {
                throw Dm.addIssue(fm(xm, mm)), Dm
              })),
              Rm = await Reflect.apply(am, this, im);
            return await mm._def.returns._def.type.parseAsync(Rm, Am).catch((mm => {
              throw Dm.addIssue(hm(Rm, mm)), Dm
            }))
          }))
        } {
          const mm = this;
          return nm((function() {
            for (var Tm = arguments.length, xm = new Array(Tm), wm = 0; wm < Tm; wm++) xm[wm] = arguments[wm];
            const Dm = mm._def.args.safeParse(xm, Am);
            if (!Dm.success) throw new om([fm(xm, Dm.error)]);
            const im = Reflect.apply(am, this, Dm.data),
              Rm = mm._def.returns.safeParse(im, Am);
            if (!Rm.success) throw new om([hm(im, Rm.error)]);
            return Rm.data
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
        for (var mm = arguments.length, Tm = new Array(mm), fm = 0; fm < mm; fm++) Tm[fm] = arguments[fm];
        return new OT({
          ...this._def,
          args: RT.create(Tm).rest(Fm.create())
        })
      }
      returns(mm) {
        return new OT({
          ...this._def,
          returns: mm
        })
      }
      implement(mm) {
        return this.parse(mm)
      }
      strictImplement(mm) {
        return this.parse(mm)
      }
      static create(mm, Tm, fm) {
        return new OT({
          args: mm || RT.create([]).rest(Fm.create()),
          returns: Tm || Fm.create(),
          typeName: XT.ZodFunction,
          ...em(fm)
        })
      }
    }
    class YT extends Nm {
      get schema() {
        return this._def.getter()
      }
      _parse(mm) {
        const {
          ctx: Tm
        } = this._processInputParams(mm);
        return this._def.getter()._parse({
          data: Tm.data,
          path: Tm.path,
          parent: Tm
        })
      }
    }
    YT.create = (mm, Tm) => new YT({
      getter: mm,
      typeName: XT.ZodLazy,
      ...em(Tm)
    });
    class qT extends Nm {
      _parse(mm) {
        if (mm.data !== this._def.value) {
          const Tm = this._getOrReturnCtx(mm);
          return Vm(Tm, {
            received: Tm.data,
            code: Em.invalid_literal,
            expected: this._def.value
          }), Km
        }
        return {
          status: "valid",
          value: mm.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function jT(mm, Tm) {
      return new VT({
        values: mm,
        typeName: XT.ZodEnum,
        ...em(Tm)
      })
    }
    qT.create = (mm, Tm) => new qT({
      value: mm,
      typeName: XT.ZodLiteral,
      ...em(Tm)
    });
    class VT extends Nm {
      _parse(mm) {
        if ("string" !== typeof mm.data) {
          const Tm = this._getOrReturnCtx(mm),
            fm = this._def.values;
          return Vm(Tm, {
            expected: wm.joinValues(fm),
            received: Tm.parsedType,
            code: Em.invalid_type
          }), Km
        }
        if (-1 === this._def.values.indexOf(mm.data)) {
          const Tm = this._getOrReturnCtx(mm),
            fm = this._def.values;
          return Vm(Tm, {
            received: Tm.data,
            code: Em.invalid_enum_value,
            options: fm
          }), Km
        }
        return nm(mm.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const mm = {};
        for (const Tm of this._def.values) mm[Tm] = Tm;
        return mm
      }
      get Values() {
        const mm = {};
        for (const Tm of this._def.values) mm[Tm] = Tm;
        return mm
      }
      get Enum() {
        const mm = {};
        for (const Tm of this._def.values) mm[Tm] = Tm;
        return mm
      }
      extract(mm) {
        return VT.create(mm)
      }
      exclude(mm) {
        return VT.create(this.options.filter((Tm => !mm.includes(Tm))))
      }
    }
    VT.create = jT;
    class IT extends Nm {
      _parse(mm) {
        const Tm = wm.getValidEnumValues(this._def.values),
          fm = this._getOrReturnCtx(mm);
        if (fm.parsedType !== Rm.string && fm.parsedType !== Rm.number) {
          const mm = wm.objectValues(Tm);
          return Vm(fm, {
            expected: wm.joinValues(mm),
            received: fm.parsedType,
            code: Em.invalid_type
          }), Km
        }
        if (-1 === Tm.indexOf(mm.data)) {
          const mm = wm.objectValues(Tm);
          return Vm(fm, {
            received: fm.data,
            code: Em.invalid_enum_value,
            options: mm
          }), Km
        }
        return nm(mm.data)
      }
      get enum() {
        return this._def.values
      }
    }
    IT.create = (mm, Tm) => new IT({
      values: mm,
      typeName: XT.ZodNativeEnum,
      ...em(Tm)
    });
    class KT extends Nm {
      unwrap() {
        return this._def.type
      }
      _parse(mm) {
        const {
          ctx: Tm
        } = this._processInputParams(mm);
        if (Tm.parsedType !== Rm.promise && !1 === Tm.common.async) return Vm(Tm, {
          code: Em.invalid_type,
          expected: Rm.promise,
          received: Tm.parsedType
        }), Km;
        const fm = Tm.parsedType === Rm.promise ? Tm.data : Promise.resolve(Tm.data);
        return nm(fm.then((mm => this._def.type.parseAsync(mm, {
          path: Tm.path,
          errorMap: Tm.common.contextualErrorMap
        }))))
      }
    }
    KT.create = (mm, Tm) => new KT({
      type: mm,
      typeName: XT.ZodPromise,
      ...em(Tm)
    });
    class QT extends Nm {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === XT.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(mm) {
        const {
          status: Tm,
          ctx: fm
        } = this._processInputParams(mm), hm = this._def.effect || null, Am = {
          addIssue: mm => {
            Vm(fm, mm), mm.fatal ? Tm.abort() : Tm.hY()
          },
          get path() {
            return fm.path
          }
        };
        if (Am.addIssue = Am.addIssue.bind(Am), "preprocess" === hm.type) {
          const mm = hm.transform(fm.data, Am);
          return fm.common.issues.length ? {
            status: "hY",
            value: fm.data
          } : fm.common.async ? Promise.resolve(mm).then((mm => this._def.schema._parseAsync({
            data: mm,
            path: fm.path,
            parent: fm
          }))) : this._def.schema._parseSync({
            data: mm,
            path: fm.path,
            parent: fm
          })
        }
        if ("refinement" === hm.type) {
          const mm = mm => {
            const Tm = hm.refinement(mm, Am);
            if (fm.common.async) return Promise.resolve(Tm);
            if (Tm instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return mm
          };
          if (!1 === fm.common.async) {
            const hm = this._def.schema._parseSync({
              data: fm.data,
              path: fm.path,
              parent: fm
            });
            return "aborted" === hm.status ? Km : ("hY" === hm.status && Tm.hY(), mm(hm.value), {
              status: Tm.value,
              value: hm.value
            })
          }
          return this._def.schema._parseAsync({
            data: fm.data,
            path: fm.path,
            parent: fm
          }).then((fm => "aborted" === fm.status ? Km : ("hY" === fm.status && Tm.hY(), mm(fm.value).then((() => ({
            status: Tm.value,
            value: fm.value
          }))))))
        }
        if ("transform" === hm.type) {
          if (!1 === fm.common.async) {
            const mm = this._def.schema._parseSync({
              data: fm.data,
              path: fm.path,
              parent: fm
            });
            if (!zm(mm)) return mm;
            const am = hm.transform(mm.value, Am);
            if (am instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: Tm.value,
              value: am
            }
          }
          return this._def.schema._parseAsync({
            data: fm.data,
            path: fm.path,
            parent: fm
          }).then((mm => zm(mm) ? Promise.resolve(hm.transform(mm.value, Am)).then((mm => ({
            status: Tm.value,
            value: mm
          }))) : mm))
        }
        wm.assertNever(hm)
      }
    }
    QT.create = (mm, Tm, fm) => new QT({
      schema: mm,
      typeName: XT.ZodEffects,
      effect: Tm,
      ...em(fm)
    }), QT.createWithPreprocess = (mm, Tm, fm) => new QT({
      schema: Tm,
      effect: {
        type: "preprocess",
        transform: mm
      },
      typeName: XT.ZodEffects,
      ...em(fm)
    });
    class nT extends Nm {
      _parse(mm) {
        return this._getType(mm) === Rm.undefined ? nm(void 0) : this._def.innerType._parse(mm)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    nT.create = (mm, Tm) => new nT({
      innerType: mm,
      typeName: XT.ZodOptional,
      ...em(Tm)
    });
    class JT extends Nm {
      _parse(mm) {
        return this._getType(mm) === Rm.null ? nm(null) : this._def.innerType._parse(mm)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    JT.create = (mm, Tm) => new JT({
      innerType: mm,
      typeName: XT.ZodNullable,
      ...em(Tm)
    });
    class cT extends Nm {
      _parse(mm) {
        const {
          ctx: Tm
        } = this._processInputParams(mm);
        let fm = Tm.data;
        return Tm.parsedType === Rm.undefined && (fm = this._def.defaultValue()), this._def.innerType._parse({
          data: fm,
          path: Tm.path,
          parent: Tm
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    cT.create = (mm, Tm) => new cT({
      innerType: mm,
      typeName: XT.ZodDefault,
      defaultValue: "function" === typeof Tm.default ? Tm.default : () => Tm.default,
      ...em(Tm)
    });
    class zT extends Nm {
      _parse(mm) {
        const {
          ctx: Tm
        } = this._processInputParams(mm), fm = {
          ...Tm,
          common: {
            ...Tm.common,
            issues: []
          }
        }, hm = this._def.innerType._parse({
          data: fm.data,
          path: fm.path,
          parent: {
            ...fm
          }
        });
        return Zm(hm) ? hm.then((mm => ({
          status: "valid",
          value: "valid" === mm.status ? mm.value : this._def.catchValue({
            get error() {
              return new om(fm.common.issues)
            },
            input: fm.data
          })
        }))) : {
          status: "valid",
          value: "valid" === hm.status ? hm.value : this._def.catchValue({
            get error() {
              return new om(fm.common.issues)
            },
            input: fm.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    zT.create = (mm, Tm) => new zT({
      innerType: mm,
      typeName: XT.ZodCatch,
      catchValue: "function" === typeof Tm.catch ? Tm.catch : () => Tm.catch,
      ...em(Tm)
    });
    class ZT extends Nm {
      _parse(mm) {
        if (this._getType(mm) !== Rm.nan) {
          const Tm = this._getOrReturnCtx(mm);
          return Vm(Tm, {
            code: Em.invalid_type,
            expected: Rm.nan,
            received: Tm.parsedType
          }), Km
        }
        return {
          status: "valid",
          value: mm.data
        }
      }
    }
    ZT.create = mm => new ZT({
      typeName: XT.ZodNaN,
      ...em(mm)
    });
    const kT = Symbol("zod_brand");
    class bT extends Nm {
      _parse(mm) {
        const {
          ctx: Tm
        } = this._processInputParams(mm), fm = Tm.data;
        return this._def.type._parse({
          data: fm,
          path: Tm.path,
          parent: Tm
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class ST extends Nm {
      _parse(mm) {
        const {
          status: Tm,
          ctx: fm
        } = this._processInputParams(mm);
        if (fm.common.async) {
          return (async () => {
            const mm = await this._def.in._parseAsync({
              data: fm.data,
              path: fm.path,
              parent: fm
            });
            return "aborted" === mm.status ? Km : "hY" === mm.status ? (Tm.hY(), Qm(mm.value)) : this._def.out._parseAsync({
              data: mm.value,
              path: fm.path,
              parent: fm
            })
          })()
        } {
          const mm = this._def.in._parseSync({
            data: fm.data,
            path: fm.path,
            parent: fm
          });
          return "aborted" === mm.status ? Km : "hY" === mm.status ? (Tm.hY(), {
            status: "hY",
            value: mm.value
          }) : this._def.out._parseSync({
            data: mm.value,
            path: fm.path,
            parent: fm
          })
        }
      }
      static create(mm, Tm) {
        return new ST({
          in: mm,
          out: Tm,
          typeName: XT.ZodPipeline
        })
      }
    }
    class eT extends Nm {
      _parse(mm) {
        const Tm = this._def.innerType._parse(mm);
        return zm(Tm) && (Tm.value = Object.freeze(Tm.value)), Tm
      }
    }
    eT.create = (mm, Tm) => new eT({
      innerType: mm,
      typeName: XT.ZodReadonly,
      ...em(Tm)
    });
    const NT = function(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          fm = arguments.length > 2 ? arguments[2] : void 0;
        return mm ? Wm.create().superRefine(((hm, Am) => {
          var am, xm;
          if (!mm(hm)) {
            const mm = "function" === typeof Tm ? Tm(hm) : "string" === typeof Tm ? {
                message: Tm
              } : Tm,
              wm = null === (xm = null !== (am = mm.fatal) && void 0 !== am ? am : fm) || void 0 === xm || xm,
              Dm = "string" === typeof mm ? {
                message: mm
              } : mm;
            Am.addIssue({
              code: "custom",
              ...Dm,
              fatal: wm
            })
          }
        })) : Wm.create()
      },
      GT = {
        object: AT.lazycreate
      };
    var XT;
    ! function(mm) {
      mm.ZodString = "ZodString", mm.ZodNumber = "ZodNumber", mm.ZodNaN = "ZodNaN", mm.ZodBigInt = "ZodBigInt", mm.ZodBoolean = "ZodBoolean", mm.ZodDate = "ZodDate", mm.ZodSymbol = "ZodSymbol", mm.ZodUndefined = "ZodUndefined", mm.ZodNull = "ZodNull", mm.ZodAny = "ZodAny", mm.ZodUnknown = "ZodUnknown", mm.ZodNever = "ZodNever", mm.ZodVoid = "ZodVoid", mm.ZodArray = "ZodArray", mm.ZodObject = "ZodObject", mm.ZodUnion = "ZodUnion", mm.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", mm.ZodIntersection = "ZodIntersection", mm.ZodTuple = "ZodTuple", mm.ZodRecord = "ZodRecord", mm.ZodMap = "ZodMap", mm.ZodSet = "ZodSet", mm.ZodFunction = "ZodFunction", mm.ZodLazy = "ZodLazy", mm.ZodLiteral = "ZodLiteral", mm.ZodEnum = "ZodEnum", mm.ZodEffects = "ZodEffects", mm.ZodNativeEnum = "ZodNativeEnum", mm.ZodOptional = "ZodOptional", mm.ZodNullable = "ZodNullable", mm.ZodDefault = "ZodDefault", mm.ZodCatch = "ZodCatch", mm.ZodPromise = "ZodPromise", mm.ZodBranded = "ZodBranded", mm.ZodPipeline = "ZodPipeline", mm.ZodReadonly = "ZodReadonly"
    }(XT || (XT = {}));
    const PT = lm.create,
      HT = um.create,
      yT = ZT.create,
      CT = Bm.create,
      rT = Lm.create,
      sT = tm.create,
      lT = Um.create,
      MT = dm.create,
      uT = gm.create,
      BT = Wm.create,
      LT = Fm.create,
      vT = mT.create,
      tT = TT.create,
      UT = fT.create,
      dT = AT.create,
      gT = AT.strictCreate,
      WT = aT.create,
      FT = wT.create,
      mf = iT.create,
      Tf = RT.create,
      ff = pT.create,
      hf = ET.create,
      Af = oT.create,
      af = OT.create,
      xf = YT.create,
      wf = qT.create,
      Df = VT.create,
      Rf = IT.create,
      pf = KT.create,
      Ef = QT.create,
      of = nT.create,
      Of = JT.create,
      Yf = QT.createWithPreprocess,
      qf = ST.create,
      jf = {
        string: mm => lm.create({
          ...mm,
          coerce: !0
        }),
        number: mm => um.create({
          ...mm,
          coerce: !0
        }),
        boolean: mm => Lm.create({
          ...mm,
          coerce: !0
        }),
        bigint: mm => Bm.create({
          ...mm,
          coerce: !0
        }),
        date: mm => tm.create({
          ...mm,
          coerce: !0
        })
      },
      Vf = Km;
    var If = Object.freeze({
        __proto__: null,
        defaultErrorMap: Om,
        setErrorMap: function(mm) {
          Ym = mm
        },
        getErrorMap: qm,
        makeIssue: jm,
        EMPTY_PATH: [],
        addIssueToContext: Vm,
        ParseStatus: Im,
        INVALID: Km,
        DIRTY: Qm,
        OK: nm,
        isAborted: Jm,
        isDirty: cm,
        isValid: zm,
        isAsync: Zm,
        get util() {
          return wm
        },
        get objectUtil() {
          return Dm
        },
        ZodParsedType: Rm,
        getParsedType: pm,
        ZodType: Nm,
        ZodString: lm,
        ZodNumber: um,
        ZodBigInt: Bm,
        ZodBoolean: Lm,
        ZodDate: tm,
        ZodSymbol: Um,
        ZodUndefined: dm,
        ZodNull: gm,
        ZodAny: Wm,
        ZodUnknown: Fm,
        ZodNever: mT,
        ZodVoid: TT,
        ZodArray: fT,
        ZodObject: AT,
        ZodUnion: aT,
        ZodDiscriminatedUnion: wT,
        ZodIntersection: iT,
        ZodTuple: RT,
        ZodRecord: pT,
        ZodMap: ET,
        ZodSet: oT,
        ZodFunction: OT,
        ZodLazy: YT,
        ZodLiteral: qT,
        ZodEnum: VT,
        ZodNativeEnum: IT,
        ZodPromise: KT,
        ZodEffects: QT,
        ZodTransformer: QT,
        ZodOptional: nT,
        ZodNullable: JT,
        ZodDefault: cT,
        ZodCatch: zT,
        ZodNaN: ZT,
        BRAND: kT,
        ZodBranded: bT,
        ZodPipeline: ST,
        ZodReadonly: eT,
        custom: NT,
        Schema: Nm,
        ZodSchema: Nm,
        late: GT,
        get ZodFirstPartyTypeKind() {
          return XT
        },
        coerce: jf,
        any: BT,
        array: UT,
        bigint: CT,
        boolean: rT,
        date: sT,
        discriminatedUnion: FT,
        effect: Ef,
        enum: Df,
        function: af,
        instanceof: function(mm) {
          let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${mm.name}`
          };
          return NT((Tm => Tm instanceof mm), Tm)
        },
        intersection: mf,
        lazy: xf,
        literal: wf,
        map: hf,
        nan: yT,
        nativeEnum: Rf,
        never: vT,
        null: uT,
        nullable: Of,
        number: HT,
        object: dT,
        oboolean: () => rT().optional(),
        onumber: () => HT().optional(),
        optional: of,
        ostring: () => PT().optional(),
        pipeline: qf,
        preprocess: Yf,
        promise: pf,
        record: ff,
        set: Af,
        strictObject: gT,
        string: PT,
        symbol: lT,
        transformer: Ef,
        tuple: Tf,
        undefined: MT,
        union: WT,
        unknown: LT,
        void: tT,
        NEVER: Vf,
        ZodIssueCode: Em,
        quotelessJson: mm => JSON.stringify(mm, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: om
      }),
      Kf = {
        exports: {}
      };
    ! function(mm) {
      var Tm = function(mm) {
        var fm = 1e7,
          hm = 9007199254740992,
          Am = Em(hm),
          am = "0123456789abcdefghijklmnopqrstuvwxyz",
          xm = "function" === typeof BigInt;

        function wm(mm, Tm, fm, hm) {
          return "undefined" === typeof mm ? wm[0] : "undefined" !== typeof Tm && (10 !== +Tm || fm) ? Lm(mm, Tm, fm, hm) : Wm(mm)
        }

        function Dm(mm, Tm) {
          this.value = mm, this.sign = Tm, this.isSmall = !1
        }

        function im(mm) {
          this.value = mm, this.sign = mm < 0, this.isSmall = !0
        }

        function Rm(mm) {
          this.value = mm
        }

        function pm(mm) {
          return -hm < mm && mm < hm
        }

        function Em(mm) {
          return mm < 1e7 ? [mm] : mm < 1e14 ? [mm % 1e7, Math.floor(mm / 1e7)] : [mm % 1e7, Math.floor(mm / 1e7) % 1e7, Math.floor(mm / 1e14)]
        }

        function om(mm) {
          Om(mm);
          var Tm = mm.length;
          if (Tm < 4 && em(mm, Am) < 0) switch (Tm) {
            case 0:
              return 0;
            case 1:
              return mm[0];
            case 2:
              return mm[0] + mm[1] * fm;
            default:
              return mm[0] + (mm[1] + mm[2] * fm) * fm
          }
          return mm
        }

        function Om(mm) {
          for (var Tm = mm.length; 0 === mm[--Tm];);
          mm.length = Tm + 1
        }

        function Ym(mm) {
          for (var Tm = new Array(mm), fm = -1; ++fm < mm;) Tm[fm] = 0;
          return Tm
        }

        function qm(mm) {
          return mm > 0 ? Math.floor(mm) : Math.ceil(mm)
        }

        function jm(mm, Tm) {
          var hm, Am, am = mm.length,
            xm = Tm.length,
            wm = new Array(am),
            Dm = 0,
            im = fm;
          for (Am = 0; Am < xm; Am++) Dm = (hm = mm[Am] + Tm[Am] + Dm) >= im ? 1 : 0, wm[Am] = hm - Dm * im;
          for (; Am < am;) Dm = (hm = mm[Am] + Dm) === im ? 1 : 0, wm[Am++] = hm - Dm * im;
          return Dm > 0 && wm.push(Dm), wm
        }

        function Vm(mm, Tm) {
          return mm.length >= Tm.length ? jm(mm, Tm) : jm(Tm, mm)
        }

        function Im(mm, Tm) {
          var hm, Am, am = mm.length,
            xm = new Array(am),
            wm = fm;
          for (Am = 0; Am < am; Am++) hm = mm[Am] - wm + Tm, Tm = Math.floor(hm / wm), xm[Am] = hm - Tm * wm, Tm += 1;
          for (; Tm > 0;) xm[Am++] = Tm % wm, Tm = Math.floor(Tm / wm);
          return xm
        }

        function Km(mm, Tm) {
          var hm, Am, am = mm.length,
            xm = Tm.length,
            wm = new Array(am),
            Dm = 0,
            im = fm;
          for (hm = 0; hm < xm; hm++)(Am = mm[hm] - Dm - Tm[hm]) < 0 ? (Am += im, Dm = 1) : Dm = 0, wm[hm] = Am;
          for (hm = xm; hm < am; hm++) {
            if (!((Am = mm[hm] - Dm) < 0)) {
              wm[hm++] = Am;
              break
            }
            Am += im, wm[hm] = Am
          }
          for (; hm < am; hm++) wm[hm] = mm[hm];
          return Om(wm), wm
        }

        function Qm(mm, Tm, hm) {
          var Am, am, xm = mm.length,
            wm = new Array(xm),
            Rm = -Tm,
            pm = fm;
          for (Am = 0; Am < xm; Am++) am = mm[Am] + Rm, Rm = Math.floor(am / pm), am %= pm, wm[Am] = am < 0 ? am + pm : am;
          return "number" === typeof(wm = om(wm)) ? (hm && (wm = -wm), new im(wm)) : new Dm(wm, hm)
        }

        function nm(mm, Tm) {
          var hm, Am, am, xm, wm = mm.length,
            Dm = Tm.length,
            im = Ym(wm + Dm),
            Rm = fm;
          for (am = 0; am < wm; ++am) {
            xm = mm[am];
            for (var pm = 0; pm < Dm; ++pm) hm = xm * Tm[pm] + im[am + pm], Am = Math.floor(hm / Rm), im[am + pm] = hm - Am * Rm, im[am + pm + 1] += Am
          }
          return Om(im), im
        }

        function Jm(mm, Tm) {
          var hm, Am, am = mm.length,
            xm = new Array(am),
            wm = fm,
            Dm = 0;
          for (Am = 0; Am < am; Am++) hm = mm[Am] * Tm + Dm, Dm = Math.floor(hm / wm), xm[Am] = hm - Dm * wm;
          for (; Dm > 0;) xm[Am++] = Dm % wm, Dm = Math.floor(Dm / wm);
          return xm
        }

        function cm(mm, Tm) {
          for (var fm = []; Tm-- > 0;) fm.push(0);
          return fm.concat(mm)
        }

        function zm(mm, Tm) {
          var fm = Math.max(mm.length, Tm.length);
          if (fm <= 30) return nm(mm, Tm);
          fm = Math.ceil(fm / 2);
          var hm = mm.slice(fm),
            Am = mm.slice(0, fm),
            am = Tm.slice(fm),
            xm = Tm.slice(0, fm),
            wm = zm(Am, xm),
            Dm = zm(hm, am),
            im = zm(Vm(Am, hm), Vm(xm, am)),
            Rm = Vm(Vm(wm, cm(Km(Km(im, wm), Dm), fm)), cm(Dm, 2 * fm));
          return Om(Rm), Rm
        }

        function Zm(mm, Tm, hm) {
          return new Dm(mm < fm ? Jm(Tm, mm) : nm(Tm, Em(mm)), hm)
        }

        function km(mm) {
          var Tm, hm, Am, am, xm = mm.length,
            wm = Ym(xm + xm),
            Dm = fm;
          for (Am = 0; Am < xm; Am++) {
            hm = 0 - (am = mm[Am]) * am;
            for (var im = Am; im < xm; im++) Tm = am * mm[im] * 2 + wm[Am + im] + hm, hm = Math.floor(Tm / Dm), wm[Am + im] = Tm - hm * Dm;
            wm[Am + xm] = hm
          }
          return Om(wm), wm
        }

        function bm(mm, Tm) {
          var hm, Am, am, xm, wm = mm.length,
            Dm = Ym(wm),
            im = fm;
          for (am = 0, hm = wm - 1; hm >= 0; --hm) am = (xm = am * im + mm[hm]) - (Am = qm(xm / Tm)) * Tm, Dm[hm] = 0 | Am;
          return [Dm, 0 | am]
        }

        function Sm(mm, Tm) {
          var hm, Am = Wm(Tm);
          if (xm) return [new Rm(mm.value / Am.value), new Rm(mm.value % Am.value)];
          var am, pm = mm.value,
            jm = Am.value;
          if (0 === jm) throw new Error("Cannot divide by zero");
          if (mm.isSmall) return Am.isSmall ? [new im(qm(pm / jm)), new im(pm % jm)] : [wm[0], mm];
          if (Am.isSmall) {
            if (1 === jm) return [mm, wm[0]];
            if (-1 == jm) return [mm.GA(), wm[0]];
            var Vm = Math.abs(jm);
            if (Vm < fm) {
              am = om((hm = bm(pm, Vm))[0]);
              var Im = hm[1];
              return mm.sign && (Im = -Im), "number" === typeof am ? (mm.sign !== Am.sign && (am = -am), [new im(am), new im(Im)]) : [new Dm(am, mm.sign !== Am.sign), new im(Im)]
            }
            jm = Em(Vm)
          }
          var Qm = em(pm, jm);
          if (-1 === Qm) return [wm[0], mm];
          if (0 === Qm) return [wm[mm.sign === Am.sign ? 1 : -1], wm[0]];
          hm = pm.length + jm.length <= 200 ? function(mm, Tm) {
            var hm, Am, am, xm, wm, Dm, im, Rm = mm.length,
              pm = Tm.length,
              Em = fm,
              Om = Ym(Tm.length),
              qm = Tm[pm - 1],
              jm = Math.ceil(Em / (2 * qm)),
              Vm = Jm(mm, jm),
              Im = Jm(Tm, jm);
            for (Vm.length <= Rm && Vm.push(0), Im.push(0), qm = Im[pm - 1], Am = Rm - pm; Am >= 0; Am--) {
              for (hm = Em - 1, Vm[Am + pm] !== qm && (hm = Math.floor((Vm[Am + pm] * Em + Vm[Am + pm - 1]) / qm)), am = 0, xm = 0, Dm = Im.length, wm = 0; wm < Dm; wm++) am += hm * Im[wm], im = Math.floor(am / Em), xm += Vm[Am + wm] - (am - im * Em), am = im, xm < 0 ? (Vm[Am + wm] = xm + Em, xm = -1) : (Vm[Am + wm] = xm, xm = 0);
              for (; 0 !== xm;) {
                for (hm -= 1, am = 0, wm = 0; wm < Dm; wm++)(am += Vm[Am + wm] - Em + Im[wm]) < 0 ? (Vm[Am + wm] = am + Em, am = 0) : (Vm[Am + wm] = am, am = 1);
                xm += am
              }
              Om[Am] = hm
            }
            return Vm = bm(Vm, jm)[0], [om(Om), om(Vm)]
          }(pm, jm) : function(mm, Tm) {
            for (var hm, Am, am, xm, wm, Dm = mm.length, im = Tm.length, Rm = [], pm = [], Em = fm; Dm;)
              if (pm.unshift(mm[--Dm]), Om(pm), em(pm, Tm) < 0) Rm.push(0);
              else {
                am = pm[(Am = pm.length) - 1] * Em + pm[Am - 2], xm = Tm[im - 1] * Em + Tm[im - 2], Am > im && (am = (am + 1) * Em), hm = Math.ceil(am / xm);
                do {
                  if (em(wm = Jm(Tm, hm), pm) <= 0) break;
                  hm--
                } while (hm);
                Rm.push(hm), pm = Km(pm, wm)
              } return Rm.reverse(), [om(Rm), om(pm)]
          }(pm, jm), am = hm[0];
          var nm = mm.sign !== Am.sign,
            cm = hm[1],
            zm = mm.sign;
          return "number" === typeof am ? (nm && (am = -am), am = new im(am)) : am = new Dm(am, nm), "number" === typeof cm ? (zm && (cm = -cm), cm = new im(cm)) : cm = new Dm(cm, zm), [am, cm]
        }

        function em(mm, Tm) {
          if (mm.length !== Tm.length) return mm.length > Tm.length ? 1 : -1;
          for (var fm = mm.length - 1; fm >= 0; fm--)
            if (mm[fm] !== Tm[fm]) return mm[fm] > Tm[fm] ? 1 : -1;
          return 0
        }

        function Nm(mm) {
          var Tm = mm.abs();
          return !Tm.isUnit() && (!!(Tm.equals(2) || Tm.equals(3) || Tm.equals(5)) || !(Tm.isEven() || Tm.isDivisibleBy(3) || Tm.isDivisibleBy(5)) && (!!Tm.lesser(49) || void 0))
        }

        function Gm(mm, fm) {
          for (var hm, Am, am, xm = mm.prev(), wm = xm, Dm = 0; wm.isEven();) wm = wm.divide(2), Dm++;
          mm: for (Am = 0; Am < fm.length; Am++)
            if (!mm.lesser(fm[Am]) && !(am = Tm(fm[Am]).modPow(wm, mm)).isUnit() && !am.equals(xm)) {
              for (hm = Dm - 1; 0 != hm; hm--) {
                if ((am = am.square().mod(mm)).isUnit()) return !1;
                if (am.equals(xm)) continue mm
              }
              return !1
            }
          return !0
        }
        Dm.prototype = Object.create(wm.prototype), im.prototype = Object.create(wm.prototype), Rm.prototype = Object.create(wm.prototype), Dm.prototype.add = function(mm) {
          var Tm = Wm(mm);
          if (this.sign !== Tm.sign) return this.subtract(Tm.GA());
          var fm = this.value,
            hm = Tm.value;
          return Tm.isSmall ? new Dm(Im(fm, Math.abs(hm)), this.sign) : new Dm(Vm(fm, hm), this.sign)
        }, Dm.prototype.plus = Dm.prototype.add, im.prototype.add = function(mm) {
          var Tm = Wm(mm),
            fm = this.value;
          if (fm < 0 !== Tm.sign) return this.subtract(Tm.GA());
          var hm = Tm.value;
          if (Tm.isSmall) {
            if (pm(fm + hm)) return new im(fm + hm);
            hm = Em(Math.abs(hm))
          }
          return new Dm(Im(hm, Math.abs(fm)), fm < 0)
        }, im.prototype.plus = im.prototype.add, Rm.prototype.add = function(mm) {
          return new Rm(this.value + Wm(mm).value)
        }, Rm.prototype.plus = Rm.prototype.add, Dm.prototype.subtract = function(mm) {
          var Tm = Wm(mm);
          if (this.sign !== Tm.sign) return this.add(Tm.GA());
          var fm = this.value,
            hm = Tm.value;
          return Tm.isSmall ? Qm(fm, Math.abs(hm), this.sign) : function(mm, Tm, fm) {
            var hm;
            return em(mm, Tm) >= 0 ? hm = Km(mm, Tm) : (hm = Km(Tm, mm), fm = !fm), "number" === typeof(hm = om(hm)) ? (fm && (hm = -hm), new im(hm)) : new Dm(hm, fm)
          }(fm, hm, this.sign)
        }, Dm.prototype.minus = Dm.prototype.subtract, im.prototype.subtract = function(mm) {
          var Tm = Wm(mm),
            fm = this.value;
          if (fm < 0 !== Tm.sign) return this.add(Tm.GA());
          var hm = Tm.value;
          return Tm.isSmall ? new im(fm - hm) : Qm(hm, Math.abs(fm), fm >= 0)
        }, im.prototype.minus = im.prototype.subtract, Rm.prototype.subtract = function(mm) {
          return new Rm(this.value - Wm(mm).value)
        }, Rm.prototype.minus = Rm.prototype.subtract, Dm.prototype.GA = function() {
          return new Dm(this.value, !this.sign)
        }, im.prototype.GA = function() {
          var mm = this.sign,
            Tm = new im(-this.value);
          return Tm.sign = !mm, Tm
        }, Rm.prototype.GA = function() {
          return new Rm(-this.value)
        }, Dm.prototype.abs = function() {
          return new Dm(this.value, !1)
        }, im.prototype.abs = function() {
          return new im(Math.abs(this.value))
        }, Rm.prototype.abs = function() {
          return new Rm(this.value >= 0 ? this.value : -this.value)
        }, Dm.prototype.multiply = function(mm) {
          var Tm, hm, Am, am = Wm(mm),
            xm = this.value,
            im = am.value,
            Rm = this.sign !== am.sign;
          if (am.isSmall) {
            if (0 === im) return wm[0];
            if (1 === im) return this;
            if (-1 === im) return this.GA();
            if ((Tm = Math.abs(im)) < fm) return new Dm(Jm(xm, Tm), Rm);
            im = Em(Tm)
          }
          return hm = xm.length, Am = im.length, new Dm(-.012 * hm - .012 * Am + 15e-6 * hm * Am > 0 ? zm(xm, im) : nm(xm, im), Rm)
        }, Dm.prototype.times = Dm.prototype.multiply, im.prototype._multiplyBySmall = function(mm) {
          return pm(mm.value * this.value) ? new im(mm.value * this.value) : Zm(Math.abs(mm.value), Em(Math.abs(this.value)), this.sign !== mm.sign)
        }, Dm.prototype._multiplyBySmall = function(mm) {
          return 0 === mm.value ? wm[0] : 1 === mm.value ? this : -1 === mm.value ? this.GA() : Zm(Math.abs(mm.value), this.value, this.sign !== mm.sign)
        }, im.prototype.multiply = function(mm) {
          return Wm(mm)._multiplyBySmall(this)
        }, im.prototype.times = im.prototype.multiply, Rm.prototype.multiply = function(mm) {
          return new Rm(this.value * Wm(mm).value)
        }, Rm.prototype.times = Rm.prototype.multiply, Dm.prototype.square = function() {
          return new Dm(km(this.value), !1)
        }, im.prototype.square = function() {
          var mm = this.value * this.value;
          return pm(mm) ? new im(mm) : new Dm(km(Em(Math.abs(this.value))), !1)
        }, Rm.prototype.square = function(mm) {
          return new Rm(this.value * this.value)
        }, Dm.prototype.divmod = function(mm) {
          var Tm = Sm(this, mm);
          return {
            quotient: Tm[0],
            remainder: Tm[1]
          }
        }, Rm.prototype.divmod = im.prototype.divmod = Dm.prototype.divmod, Dm.prototype.divide = function(mm) {
          return Sm(this, mm)[0]
        }, Rm.prototype.over = Rm.prototype.divide = function(mm) {
          return new Rm(this.value / Wm(mm).value)
        }, im.prototype.over = im.prototype.divide = Dm.prototype.over = Dm.prototype.divide, Dm.prototype.mod = function(mm) {
          return Sm(this, mm)[1]
        }, Rm.prototype.mod = Rm.prototype.remainder = function(mm) {
          return new Rm(this.value % Wm(mm).value)
        }, im.prototype.remainder = im.prototype.mod = Dm.prototype.remainder = Dm.prototype.mod, Dm.prototype.pow = function(mm) {
          var Tm, fm, hm, Am = Wm(mm),
            am = this.value,
            xm = Am.value;
          if (0 === xm) return wm[1];
          if (0 === am) return wm[0];
          if (1 === am) return wm[1];
          if (-1 === am) return Am.isEven() ? wm[1] : wm[-1];
          if (Am.sign) return wm[0];
          if (!Am.isSmall) throw new Error("The exponent " + Am.toString() + " is too large.");
          if (this.isSmall && pm(Tm = Math.pow(am, xm))) return new im(qm(Tm));
          for (fm = this, hm = wm[1]; !0 & xm && (hm = hm.times(fm), --xm), 0 !== xm;) xm /= 2, fm = fm.square();
          return hm
        }, im.prototype.pow = Dm.prototype.pow, Rm.prototype.pow = function(mm) {
          var Tm = Wm(mm),
            fm = this.value,
            hm = Tm.value,
            Am = BigInt(0),
            am = BigInt(1),
            xm = BigInt(2);
          if (hm === Am) return wm[1];
          if (fm === Am) return wm[0];
          if (fm === am) return wm[1];
          if (fm === BigInt(-1)) return Tm.isEven() ? wm[1] : wm[-1];
          if (Tm.isNegative()) return new Rm(Am);
          for (var Dm = this, im = wm[1];
            (hm & am) === am && (im = im.times(Dm), --hm), hm !== Am;) hm /= xm, Dm = Dm.square();
          return im
        }, Dm.prototype.modPow = function(mm, Tm) {
          if (mm = Wm(mm), (Tm = Wm(Tm)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var fm = wm[1],
            hm = this.mod(Tm);
          for (mm.isNegative() && (mm = mm.multiply(wm[-1]), hm = hm.modInv(Tm)); mm.isPositive();) {
            if (hm.isZero()) return wm[0];
            mm.isOdd() && (fm = fm.multiply(hm).mod(Tm)), mm = mm.divide(2), hm = hm.square().mod(Tm)
          }
          return fm
        }, Rm.prototype.modPow = im.prototype.modPow = Dm.prototype.modPow, Dm.prototype.compareAbs = function(mm) {
          var Tm = Wm(mm),
            fm = this.value,
            hm = Tm.value;
          return Tm.isSmall ? 1 : em(fm, hm)
        }, im.prototype.compareAbs = function(mm) {
          var Tm = Wm(mm),
            fm = Math.abs(this.value),
            hm = Tm.value;
          return Tm.isSmall ? fm === (hm = Math.abs(hm)) ? 0 : fm > hm ? 1 : -1 : -1
        }, Rm.prototype.compareAbs = function(mm) {
          var Tm = this.value,
            fm = Wm(mm).value;
          return (Tm = Tm >= 0 ? Tm : -Tm) === (fm = fm >= 0 ? fm : -fm) ? 0 : Tm > fm ? 1 : -1
        }, Dm.prototype.compare = function(mm) {
          if (mm === 1 / 0) return -1;
          if (mm === -1 / 0) return 1;
          var Tm = Wm(mm),
            fm = this.value,
            hm = Tm.value;
          return this.sign !== Tm.sign ? Tm.sign ? 1 : -1 : Tm.isSmall ? this.sign ? -1 : 1 : em(fm, hm) * (this.sign ? -1 : 1)
        }, Dm.prototype.compareTo = Dm.prototype.compare, im.prototype.compare = function(mm) {
          if (mm === 1 / 0) return -1;
          if (mm === -1 / 0) return 1;
          var Tm = Wm(mm),
            fm = this.value,
            hm = Tm.value;
          return Tm.isSmall ? fm == hm ? 0 : fm > hm ? 1 : -1 : fm < 0 !== Tm.sign ? fm < 0 ? -1 : 1 : fm < 0 ? 1 : -1
        }, im.prototype.compareTo = im.prototype.compare, Rm.prototype.compare = function(mm) {
          if (mm === 1 / 0) return -1;
          if (mm === -1 / 0) return 1;
          var Tm = this.value,
            fm = Wm(mm).value;
          return Tm === fm ? 0 : Tm > fm ? 1 : -1
        }, Rm.prototype.compareTo = Rm.prototype.compare, Dm.prototype.equals = function(mm) {
          return 0 === this.compare(mm)
        }, Rm.prototype.eq = Rm.prototype.equals = im.prototype.eq = im.prototype.equals = Dm.prototype.eq = Dm.prototype.equals, Dm.prototype.notEquals = function(mm) {
          return 0 !== this.compare(mm)
        }, Rm.prototype.neq = Rm.prototype.notEquals = im.prototype.neq = im.prototype.notEquals = Dm.prototype.neq = Dm.prototype.notEquals, Dm.prototype.greater = function(mm) {
          return this.compare(mm) > 0
        }, Rm.prototype.gt = Rm.prototype.greater = im.prototype.gt = im.prototype.greater = Dm.prototype.gt = Dm.prototype.greater, Dm.prototype.lesser = function(mm) {
          return this.compare(mm) < 0
        }, Rm.prototype.lt = Rm.prototype.lesser = im.prototype.lt = im.prototype.lesser = Dm.prototype.lt = Dm.prototype.lesser, Dm.prototype.greaterOrEquals = function(mm) {
          return this.compare(mm) >= 0
        }, Rm.prototype.geq = Rm.prototype.greaterOrEquals = im.prototype.geq = im.prototype.greaterOrEquals = Dm.prototype.geq = Dm.prototype.greaterOrEquals, Dm.prototype.lesserOrEquals = function(mm) {
          return this.compare(mm) <= 0
        }, Rm.prototype.leq = Rm.prototype.lesserOrEquals = im.prototype.leq = im.prototype.lesserOrEquals = Dm.prototype.leq = Dm.prototype.lesserOrEquals, Dm.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, im.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, Rm.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, Dm.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, im.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, Rm.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, Dm.prototype.isPositive = function() {
          return !this.sign
        }, im.prototype.isPositive = function() {
          return this.value > 0
        }, Rm.prototype.isPositive = im.prototype.isPositive, Dm.prototype.isNegative = function() {
          return this.sign
        }, im.prototype.isNegative = function() {
          return this.value < 0
        }, Rm.prototype.isNegative = im.prototype.isNegative, Dm.prototype.isUnit = function() {
          return !1
        }, im.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, Rm.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, Dm.prototype.isZero = function() {
          return !1
        }, im.prototype.isZero = function() {
          return 0 === this.value
        }, Rm.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, Dm.prototype.isDivisibleBy = function(mm) {
          var Tm = Wm(mm);
          return !Tm.isZero() && (!!Tm.isUnit() || (0 === Tm.compareAbs(2) ? this.isEven() : this.mod(Tm).isZero()))
        }, Rm.prototype.isDivisibleBy = im.prototype.isDivisibleBy = Dm.prototype.isDivisibleBy, Dm.prototype.isPrime = function(fm) {
          var hm = Nm(this);
          if (hm !== mm) return hm;
          var Am = this.abs(),
            am = Am.bitLength();
          if (am <= 64) return Gm(Am, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var xm = Math.log(2) * am.toJSNumber(), wm = Math.ceil(!0 === fm ? 2 * Math.pow(xm, 2) : xm), Dm = [], im = 0; im < wm; im++) Dm.push(Tm(im + 2));
          return Gm(Am, Dm)
        }, Rm.prototype.isPrime = im.prototype.isPrime = Dm.prototype.isPrime, Dm.prototype.isProbablePrime = function(fm, hm) {
          var Am = Nm(this);
          if (Am !== mm) return Am;
          for (var am = this.abs(), xm = fm === mm ? 5 : fm, wm = [], Dm = 0; Dm < xm; Dm++) wm.push(Tm.randBetween(2, am.minus(2), hm));
          return Gm(am, wm)
        }, Rm.prototype.isProbablePrime = im.prototype.isProbablePrime = Dm.prototype.isProbablePrime, Dm.prototype.modInv = function(mm) {
          for (var fm, hm, Am, am = Tm.zero, xm = Tm.one, wm = Wm(mm), Dm = this.abs(); !Dm.isZero();) fm = wm.divide(Dm), hm = am, Am = wm, am = xm, wm = Dm, xm = hm.subtract(fm.multiply(xm)), Dm = Am.subtract(fm.multiply(Dm));
          if (!wm.isUnit()) throw new Error(this.toString() + " and " + mm.toString() + " are not co-prime");
          return -1 === am.compare(0) && (am = am.add(mm)), this.isNegative() ? am.GA() : am
        }, Rm.prototype.modInv = im.prototype.modInv = Dm.prototype.modInv, Dm.prototype.next = function() {
          var mm = this.value;
          return this.sign ? Qm(mm, 1, this.sign) : new Dm(Im(mm, 1), this.sign)
        }, im.prototype.next = function() {
          var mm = this.value;
          return mm + 1 < hm ? new im(mm + 1) : new Dm(Am, !1)
        }, Rm.prototype.next = function() {
          return new Rm(this.value + BigInt(1))
        }, Dm.prototype.prev = function() {
          var mm = this.value;
          return this.sign ? new Dm(Im(mm, 1), !0) : Qm(mm, 1, this.sign)
        }, im.prototype.prev = function() {
          var mm = this.value;
          return mm - 1 > -hm ? new im(mm - 1) : new Dm(Am, !0)
        }, Rm.prototype.prev = function() {
          return new Rm(this.value - BigInt(1))
        };
        for (var Xm = [1]; 2 * Xm[Xm.length - 1] <= fm;) Xm.push(2 * Xm[Xm.length - 1]);
        var Pm = Xm.length,
          Hm = Xm[Pm - 1];

        function ym(mm) {
          return Math.abs(mm) <= fm
        }

        function Cm(mm, fm, hm) {
          fm = Wm(fm);
          for (var Am = mm.isNegative(), am = fm.isNegative(), xm = Am ? mm.not() : mm, wm = am ? fm.not() : fm, Dm = 0, im = 0, Rm = null, pm = null, Em = []; !xm.isZero() || !wm.isZero();) Dm = (Rm = Sm(xm, Hm))[1].toJSNumber(), Am && (Dm = Hm - 1 - Dm), im = (pm = Sm(wm, Hm))[1].toJSNumber(), am && (im = Hm - 1 - im), xm = Rm[0], wm = pm[0], Em.push(hm(Dm, im));
          for (var om = 0 !== hm(Am ? 1 : 0, am ? 1 : 0) ? Tm(-1) : Tm(0), Om = Em.length - 1; Om >= 0; Om -= 1) om = om.multiply(Hm).add(Tm(Em[Om]));
          return om
        }
        Dm.prototype.shiftLeft = function(mm) {
          var Tm = Wm(mm).toJSNumber();
          if (!ym(Tm)) throw new Error(String(Tm) + " is too large for shifting.");
          if (Tm < 0) return this.shiftRight(-Tm);
          var fm = this;
          if (fm.isZero()) return fm;
          for (; Tm >= Pm;) fm = fm.multiply(Hm), Tm -= Pm - 1;
          return fm.multiply(Xm[Tm])
        }, Rm.prototype.shiftLeft = im.prototype.shiftLeft = Dm.prototype.shiftLeft, Dm.prototype.shiftRight = function(mm) {
          var Tm, fm = Wm(mm).toJSNumber();
          if (!ym(fm)) throw new Error(String(fm) + " is too large for shifting.");
          if (fm < 0) return this.shiftLeft(-fm);
          for (var hm = this; fm >= Pm;) {
            if (hm.isZero() || hm.isNegative() && hm.isUnit()) return hm;
            hm = (Tm = Sm(hm, Hm))[1].isNegative() ? Tm[0].prev() : Tm[0], fm -= Pm - 1
          }
          return (Tm = Sm(hm, Xm[fm]))[1].isNegative() ? Tm[0].prev() : Tm[0]
        }, Rm.prototype.shiftRight = im.prototype.shiftRight = Dm.prototype.shiftRight, Dm.prototype.not = function() {
          return this.GA().prev()
        }, Rm.prototype.not = im.prototype.not = Dm.prototype.not, Dm.prototype.and = function(mm) {
          return Cm(this, mm, (function(mm, Tm) {
            return mm & Tm
          }))
        }, Rm.prototype.and = im.prototype.and = Dm.prototype.and, Dm.prototype.or = function(mm) {
          return Cm(this, mm, (function(mm, Tm) {
            return mm | Tm
          }))
        }, Rm.prototype.or = im.prototype.or = Dm.prototype.or, Dm.prototype.xor = function(mm) {
          return Cm(this, mm, (function(mm, Tm) {
            return mm ^ Tm
          }))
        }, Rm.prototype.xor = im.prototype.xor = Dm.prototype.xor;
        var rm = 1 << 30;

        function sm(mm) {
          var Tm = mm.value,
            hm = "number" === typeof Tm ? Tm | rm : "bigint" === typeof Tm ? Tm | BigInt(rm) : Tm[0] + Tm[1] * fm | 1073758208;
          return hm & -hm
        }

        function lm(mm, fm) {
          if (fm.compareTo(mm) <= 0) {
            var hm = lm(mm, fm.square(fm)),
              Am = hm.p,
              am = hm.e,
              xm = Am.multiply(fm);
            return xm.compareTo(mm) <= 0 ? {
              p: xm,
              e: 2 * am + 1
            } : {
              p: Am,
              e: 2 * am
            }
          }
          return {
            p: Tm(1),
            e: 0
          }
        }

        function Mm(mm, Tm) {
          return mm = Wm(mm), Tm = Wm(Tm), mm.greater(Tm) ? mm : Tm
        }

        function um(mm, Tm) {
          return mm = Wm(mm), Tm = Wm(Tm), mm.lesser(Tm) ? mm : Tm
        }

        function Bm(mm, Tm) {
          if (mm = Wm(mm).abs(), Tm = Wm(Tm).abs(), mm.equals(Tm)) return mm;
          if (mm.isZero()) return Tm;
          if (Tm.isZero()) return mm;
          for (var fm, hm, Am = wm[1]; mm.isEven() && Tm.isEven();) fm = um(sm(mm), sm(Tm)), mm = mm.divide(fm), Tm = Tm.divide(fm), Am = Am.multiply(fm);
          for (; mm.isEven();) mm = mm.divide(sm(mm));
          do {
            for (; Tm.isEven();) Tm = Tm.divide(sm(Tm));
            mm.greater(Tm) && (hm = Tm, Tm = mm, mm = hm), Tm = Tm.subtract(mm)
          } while (!Tm.isZero());
          return Am.isUnit() ? mm : mm.multiply(Am)
        }
        Dm.prototype.bitLength = function() {
          var mm = this;
          return mm.compareTo(Tm(0)) < 0 && (mm = mm.GA().subtract(Tm(1))), 0 === mm.compareTo(Tm(0)) ? Tm(0) : Tm(lm(mm, Tm(2)).e).add(Tm(1))
        }, Rm.prototype.bitLength = im.prototype.bitLength = Dm.prototype.bitLength;
        var Lm = function(mm, Tm, fm, hm) {
          fm = fm || am, mm = String(mm), hm || (mm = mm.toLowerCase(), fm = fm.toLowerCase());
          var Am, xm = mm.length,
            wm = Math.abs(Tm),
            Dm = {};
          for (Am = 0; Am < fm.length; Am++) Dm[fm[Am]] = Am;
          for (Am = 0; Am < xm; Am++) {
            if ("-" !== (pm = mm[Am]) && (pm in Dm && Dm[pm] >= wm)) {
              if ("1" === pm && 1 === wm) continue;
              throw new Error(pm + " is not a valid digit in base " + Tm + ".")
            }
          }
          Tm = Wm(Tm);
          var im = [],
            Rm = "-" === mm[0];
          for (Am = Rm ? 1 : 0; Am < mm.length; Am++) {
            var pm;
            if ((pm = mm[Am]) in Dm) im.push(Wm(Dm[pm]));
            else {
              if ("<" !== pm) throw new Error(pm + " is not a valid character");
              var Em = Am;
              do {
                Am++
              } while (">" !== mm[Am] && Am < mm.length);
              im.push(Wm(mm.slice(Em + 1, Am)))
            }
          }
          return tm(im, Tm, Rm)
        };

        function tm(mm, Tm, fm) {
          var hm, Am = wm[0],
            am = wm[1];
          for (hm = mm.length - 1; hm >= 0; hm--) Am = Am.add(mm[hm].times(am)), am = am.times(Tm);
          return fm ? Am.GA() : Am
        }

        function Um(mm, fm) {
          if ((fm = Tm(fm)).isZero()) {
            if (mm.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (fm.equals(-1)) {
            if (mm.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (mm.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-mm.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var hm = Array.apply(null, Array(mm.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return hm.unshift([1]), {
              value: [].concat.apply([], hm),
              isNegative: !1
            }
          }
          var Am = !1;
          if (mm.isNegative() && fm.isPositive() && (Am = !0, mm = mm.abs()), fm.isUnit()) return mm.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(mm.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: Am
          };
          for (var am, xm = [], wm = mm; wm.isNegative() || wm.compareAbs(fm) >= 0;) {
            am = wm.divmod(fm), wm = am.quotient;
            var Dm = am.remainder;
            Dm.isNegative() && (Dm = fm.minus(Dm).abs(), wm = wm.next()), xm.push(Dm.toJSNumber())
          }
          return xm.push(wm.toJSNumber()), {
            value: xm.reverse(),
            isNegative: Am
          }
        }

        function dm(mm, Tm, fm) {
          var hm = Um(mm, Tm);
          return (hm.isNegative ? "-" : "") + hm.value.map((function(mm) {
            return function(mm, Tm) {
              return mm < (Tm = Tm || am).length ? Tm[mm] : "<" + mm + ">"
            }(mm, fm)
          })).join("")
        }

        function gm(mm) {
          if (pm(+mm)) {
            var Tm = +mm;
            if (Tm === qm(Tm)) return xm ? new Rm(BigInt(Tm)) : new im(Tm);
            throw new Error("Invalid integer: " + mm)
          }
          var fm = "-" === mm[0];
          fm && (mm = mm.slice(1));
          var hm = mm.split(/e/i);
          if (hm.length > 2) throw new Error("Invalid integer: " + hm.join("e"));
          if (2 === hm.length) {
            var Am = hm[1];
            if ("+" === Am[0] && (Am = Am.slice(1)), (Am = +Am) !== qm(Am) || !pm(Am)) throw new Error("Invalid integer: " + Am + " is not a valid exponent.");
            var am = hm[0],
              wm = am.indexOf(".");
            if (wm >= 0 && (Am -= am.length - wm - 1, am = am.slice(0, wm) + am.slice(wm + 1)), Am < 0) throw new Error("Cannot include negative exponent part for integers");
            mm = am += new Array(Am + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(mm)) throw new Error("Invalid integer: " + mm);
          if (xm) return new Rm(BigInt(fm ? "-" + mm : mm));
          for (var Em = [], om = mm.length, Ym = om - 7; om > 0;) Em.push(+mm.slice(Ym, om)), (Ym -= 7) < 0 && (Ym = 0), om -= 7;
          return Om(Em), new Dm(Em, fm)
        }

        function Wm(mm) {
          return "number" === typeof mm ? function(mm) {
            if (xm) return new Rm(BigInt(mm));
            if (pm(mm)) {
              if (mm !== qm(mm)) throw new Error(mm + " is not an integer.");
              return new im(mm)
            }
            return gm(mm.toString())
          }(mm) : "string" === typeof mm ? gm(mm) : "bigint" === typeof mm ? new Rm(mm) : mm
        }
        Dm.prototype.toArray = function(mm) {
          return Um(this, mm)
        }, im.prototype.toArray = function(mm) {
          return Um(this, mm)
        }, Rm.prototype.toArray = function(mm) {
          return Um(this, mm)
        }, Dm.prototype.toString = function(Tm, fm) {
          if (Tm === mm && (Tm = 10), 10 !== Tm) return dm(this, Tm, fm);
          for (var hm, Am = this.value, am = Am.length, xm = String(Am[--am]); --am >= 0;) hm = String(Am[am]), xm += "0000000".slice(hm.length) + hm;
          return (this.sign ? "-" : "") + xm
        }, im.prototype.toString = function(Tm, fm) {
          return Tm === mm && (Tm = 10), 10 != Tm ? dm(this, Tm, fm) : String(this.value)
        }, Rm.prototype.toString = im.prototype.toString, Rm.prototype.toJSON = Dm.prototype.toJSON = im.prototype.toJSON = function() {
          return this.toString()
        }, Dm.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, Dm.prototype.toJSNumber = Dm.prototype.valueOf, im.prototype.valueOf = function() {
          return this.value
        }, im.prototype.toJSNumber = im.prototype.valueOf, Rm.prototype.valueOf = Rm.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var Fm = 0; Fm < 1e3; Fm++) wm[Fm] = Wm(Fm), Fm > 0 && (wm[-Fm] = Wm(-Fm));
        return wm.one = wm[1], wm.zero = wm[0], wm.minusOne = wm[-1], wm.max = Mm, wm.min = um, wm.gcd = Bm, wm.lcm = function(mm, Tm) {
          return mm = Wm(mm).abs(), Tm = Wm(Tm).abs(), mm.divide(Bm(mm, Tm)).multiply(Tm)
        }, wm.isInstance = function(mm) {
          return mm instanceof Dm || mm instanceof im || mm instanceof Rm
        }, wm.randBetween = function(mm, Tm, hm) {
          mm = Wm(mm), Tm = Wm(Tm);
          var Am = hm || Math.random,
            am = um(mm, Tm),
            xm = Mm(mm, Tm).subtract(am).add(1);
          if (xm.isSmall) return am.add(Math.floor(Am() * xm));
          for (var Dm = Um(xm, fm).value, im = [], Rm = !0, pm = 0; pm < Dm.length; pm++) {
            var Em = Rm ? Dm[pm] : fm,
              om = qm(Am() * Em);
            im.push(om), om < Em && (Rm = !1)
          }
          return am.add(wm.UTm(im, fm, !1))
        }, wm.UTm = function(mm, Tm, fm) {
          return tm(mm.map(Wm), Wm(Tm || 10), fm)
        }, wm
      }();
      mm.hasOwnProperty("exports") && (mm.exports = Tm)
    }(Kf);
    var Qf = am(Kf.exports);

    function nf(mm, Tm, fm) {
      let hm = 0;
      for (let Am = 0; Am < fm; Am++) {
        const fm = mm[Tm + Am];
        if (void 0 === fm) break;
        hm += fm * 16 ** Am
      }
      return hm
    }

    function Jf(mm) {
      const Tm = [];
      for (let fm = 0; fm < mm.length; fm++) {
        let hm = Number(mm[fm]);
        for (let mm = 0; hm || mm < Tm.length; mm++) hm += 10 * (Tm[mm] || 0), Tm[mm] = hm % 16, hm = (hm - Tm[mm]) / 16
      }
      return Tm
    }
    class zf {
      static fromString(mm) {
        return new zf(function(mm) {
          const Tm = Jf(mm),
            fm = Array(4);
          for (let hm = 0; hm < 4; hm++) fm[3 - hm] = nf(Tm, 4 * hm, 4);
          return fm
        }(mm), mm)
      }
      static fromBit(mm) {
        const Tm = Array(4),
          fm = Math.floor(mm / 16);
        for (let hm = 0; hm < 4; hm++) Tm[3 - hm] = hm === fm ? 1 << mm - 16 * fm : 0;
        return new zf(Tm)
      }
      constructor(mm, Tm) {
        this.parts = mm, this.str = Tm
      }
      and(mm) {
        let {
          parts: Tm
        } = mm;
        return new zf(this.parts.map(((mm, fm) => mm & Tm[fm])))
      }
      or(mm) {
        let {
          parts: Tm
        } = mm;
        return new zf(this.parts.map(((mm, fm) => mm | Tm[fm])))
      }
      xor(mm) {
        let {
          parts: Tm
        } = mm;
        return new zf(this.parts.map(((mm, fm) => mm ^ Tm[fm])))
      }
      not() {
        return new zf(this.parts.map((mm => ~mm)))
      }
      equals(mm) {
        let {
          parts: Tm
        } = mm;
        return this.parts.every(((mm, fm) => mm === Tm[fm]))
      }
      toString() {
        if (null != this.str) return this.str;
        const mm = new Array(16);
        return this.parts.forEach(((Tm, fm) => {
          const hm = Jf(Tm.toString());
          for (let Am = 0; Am < 4; Am++) mm[Am + 4 * fm] = hm[3 - Am] || 0
        })), this.str = Qf.UTm(mm, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const Zf = function() {
      try {
        return BigInt, !0
      } catch (mm) {
        return !1
      }
    }();
    Zf && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const kf = {},
      bf = Zf ? function(mm) {
        return BigInt(mm)
      } : function(mm) {
        return mm instanceof zf ? mm : ("number" === typeof mm && (mm = mm.toString()), null != kf[mm] || (kf[mm] = zf.fromString(mm)), kf[mm])
      },
      Sf = bf(0),
      ef = Zf ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sf) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sf)
      } : function() {
        let mm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sf;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sf).and(mm)
      },
      Nf = Zf ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sf) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sf)
      } : function() {
        let mm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sf;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sf).or(mm)
      },
      Gf = Zf ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sf) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sf)
      } : function() {
        let mm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sf;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sf).xor(mm)
      },
      Xf = Zf ? function(mm, Tm) {
        return mm === Tm
      } : function(mm, Tm) {
        return null == mm || null == Tm ? mm == Tm : mm.equals(Tm)
      };
    var Pf, Hf, yf, Cf, rf = {
      combine: function() {
        let mm = arguments.length <= 0 ? void 0 : arguments[0];
        for (let Tm = 1; Tm < arguments.length; Tm++) mm = Nf(mm, Tm < 0 || arguments.length <= Tm ? void 0 : arguments[Tm]);
        return mm
      },
      add: function(mm, Tm) {
        return Tm === Sf ? mm : Nf(mm, Tm)
      },
      remove: function(mm, Tm) {
        return Tm === Sf ? mm : Gf(mm, ef(mm, Tm))
      },
      filter: ef,
      invert: Zf ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sf)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sf).not()
      },
      has: function(mm, Tm) {
        return Xf(ef(mm, Tm), Tm)
      },
      hasAny: function(mm, Tm) {
        return !Xf(ef(mm, Tm), Sf)
      },
      equals: Xf,
      deserialize: bf,
      getFlag: Zf ? function(mm) {
        return BigInt(1) << BigInt(mm)
      } : function(mm) {
        return zf.fromBit(mm)
      }
    };
    ! function(mm) {
      mm[mm.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", mm[mm.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", mm[mm.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", mm[mm.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", mm[mm.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", mm[mm.RATELIMITED = 4002] = "RATELIMITED", mm[mm.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", mm[mm.INVALID_VERSION = 4004] = "INVALID_VERSION", mm[mm.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(Pf || (Pf = {})),
    function(mm) {
      mm[mm.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", mm[mm.INVALID_COMMAND = 4002] = "INVALID_COMMAND", mm[mm.INVALID_EVENT = 4004] = "INVALID_EVENT", mm[mm.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(Hf || (Hf = {})),
    function(mm) {
      mm.LANDSCAPE = "landscape", mm.PORTRAIT = "portrait"
    }(yf || (yf = {})),
    function(mm) {
      mm.MOBILE = "mobile", mm.DESKTOP = "desktop"
    }(Cf || (Cf = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: rf.getFlag(0),
      ADMINISTRATOR: rf.getFlag(3)
    });

    function sf(mm) {
      return Yf((Tm => {
        var fm;
        const [hm] = null !== (fm = Object.entries(mm).find((mm => {
          let [, fm] = mm;
          return fm === Tm
        }))) && void 0 !== fm ? fm : [];
        return null != Tm && void 0 === hm ? mm.UNHANDLED : Tm
      }), PT().or(HT()))
    }
    const lf = If.object({
        image_url: If.string()
      }),
      Mf = If.object({
        mediaUrl: If.string().max(1024)
      }),
      uf = If.object({
        access_token: If.union([If.string(), If.null()]).optional()
      }),
      Bf = If.object({
        access_token: If.string(),
        user: If.object({
          username: If.string(),
          discriminator: If.string(),
          id: If.string(),
          avatar: If.union([If.string(), If.null()]).optional(),
          public_flags: If.number(),
          global_name: If.union([If.string(), If.null()]).optional()
        }),
        scopes: If.array(function(mm) {
          const Tm = NT().transform((Tm => {
            const fm = mm.safeParse(Tm);
            return fm.success ? fm.data : mm._def.defaultValue()
          }));
          return Tm.overlayType = mm, Tm
        }(If.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(If.literal(-1)).default(-1))),
        expires: If.string(),
        application: If.object({
          description: If.string(),
          icon: If.union([If.string(), If.null()]).optional(),
          id: If.string(),
          rpc_origins: If.array(If.string()).optional(),
          name: If.string()
        })
      }),
      Lf = If.object({
        participants: If.array(If.object({
          id: If.string(),
          username: If.string(),
          global_name: If.union([If.string(), If.null()]).optional(),
          discriminator: If.string(),
          avatar: If.union([If.string(), If.null()]).optional(),
          flags: If.number(),
          bot: If.boolean(),
          avatar_decoration_data: If.union([If.object({
            asset: If.string(),
            skuId: If.string().optional()
          }), If.null()]).optional(),
          premium_type: If.union([If.number(), If.null()]).optional(),
          nickname: If.string().optional()
        }))
      });
    var vf;
    ! function(mm) {
      mm.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", mm.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", mm.AUTHENTICATE = "AUTHENTICATE", mm.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(vf || (vf = {}));
    const tf = If.object({}).optional().nullable(),
      Uf = If.void(),
      df = {
        [vf.INITIATE_IMAGE_UPLOAD]: {
          request: Uf,
          response: lf
        },
        [vf.OPEN_SHARE_MOMENT_DIALOG]: {
          request: Mf,
          response: tf
        },
        [vf.AUTHENTICATE]: {
          request: uf,
          response: Bf
        },
        [vf.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: Uf,
          response: Lf
        }
      },
      gf = "DISPATCH";
    var Wf;
    ! function(mm) {
      mm.AUTHORIZE = "AUTHORIZE", mm.AUTHENTICATE = "AUTHENTICATE", mm.GET_GUILDS = "GET_GUILDS", mm.GET_GUILD = "GET_GUILD", mm.GET_CHANNEL = "GET_CHANNEL", mm.GET_CHANNELS = "GET_CHANNELS", mm.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", mm.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", mm.SUBSCRIBE = "SUBSCRIBE", mm.UNSUBSCRIBE = "UNSUBSCRIBE", mm.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", mm.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", mm.SET_ACTIVITY = "SET_ACTIVITY", mm.GET_SKUS = "GET_SKUS", mm.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", mm.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", mm.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", mm.START_PURCHASE = "START_PURCHASE", mm.SET_CONFIG = "SET_CONFIG", mm.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", mm.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", mm.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", mm.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", mm.CAPTURE_LOG = "CAPTURE_LOG", mm.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", mm.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", mm.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", mm.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", mm.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", mm.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", mm.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Wf || (Wf = {}));
    const Ff = dT({
        cmd: PT(),
        data: LT(),
        evt: uT(),
        nonce: PT()
      }).passthrough(),
      mh = (sf(Object.assign(Object.assign({}, Bf.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), dT({
        id: PT(),
        username: PT(),
        discriminator: PT(),
        global_name: PT().optional().nullable(),
        avatar: PT().optional().nullable(),
        avatar_decoration_data: dT({
          asset: PT(),
          sku_id: PT().optional()
        }).nullable(),
        bot: rT(),
        flags: HT().optional().nullable(),
        premium_type: HT().optional().nullable()
      })),
      Th = dT({
        user: mh,
        nick: PT().optional().nullable(),
        roles: UT(PT()),
        joined_at: PT(),
        deaf: rT(),
        mute: rT()
      }),
      fh = dT({
        id: PT(),
        name: PT().optional().nullable(),
        roles: UT(PT()).optional().nullable(),
        user: mh.optional().nullable(),
        require_colons: rT().optional().nullable(),
        managed: rT().optional().nullable(),
        animated: rT().optional().nullable(),
        available: rT().optional().nullable()
      }),
      hh = dT({
        mute: rT(),
        deaf: rT(),
        self_mute: rT(),
        self_deaf: rT(),
        suppress: rT()
      }),
      Ah = dT({
        mute: rT(),
        nick: PT(),
        user: mh,
        voice_state: hh,
        volume: HT()
      }),
      ah = sf({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      xh = dT({
        name: PT(),
        type: HT(),
        url: PT().optional().nullable(),
        created_at: HT().optional().nullable(),
        timestamps: dT({
          start: HT(),
          end: HT()
        }).partial().optional().nullable(),
        application_id: PT().optional().nullable(),
        details: PT().optional().nullable(),
        state: PT().optional().nullable(),
        emoji: fh.optional().nullable(),
        party: dT({
          id: PT().optional().nullable(),
          size: UT(HT()).optional().nullable()
        }).optional().nullable(),
        assets: dT({
          large_image: PT().nullable(),
          large_text: PT().nullable(),
          small_image: PT().nullable(),
          small_text: PT().nullable()
        }).partial().optional().nullable(),
        secrets: dT({
          join: PT(),
          match: PT()
        }).partial().optional().nullable(),
        instance: rT().optional().nullable(),
        flags: HT().optional().nullable()
      }),
      wh = dT({
        id: PT(),
        type: sf({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: PT(),
        deny: PT()
      }),
      Dh = {
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
      ih = dT({
        id: PT(),
        type: sf(Dh),
        guild_id: PT().optional().nullable(),
        position: HT().optional().nullable(),
        permission_overwrites: UT(wh).optional().nullable(),
        name: PT().optional().nullable(),
        topic: PT().optional().nullable(),
        nsfw: rT().optional().nullable(),
        last_message_id: PT().optional().nullable(),
        bitrate: HT().optional().nullable(),
        user_limit: HT().optional().nullable(),
        rate_limit_per_user: HT().optional().nullable(),
        recipients: UT(mh).optional().nullable(),
        icon: PT().optional().nullable(),
        owner_id: PT().optional().nullable(),
        application_id: PT().optional().nullable(),
        parent_id: PT().optional().nullable(),
        last_pin_timestamp: PT().optional().nullable()
      }),
      Rh = dT({
        user: mh,
        guild_id: PT(),
        status: ah,
        activities: UT(xh),
        client_status: dT({
          desktop: ah,
          mobile: ah,
          web: ah
        }).partial()
      }),
      ph = dT({
        id: PT(),
        name: PT(),
        color: HT(),
        hoist: rT(),
        position: HT(),
        permissions: PT(),
        managed: rT(),
        mentionable: rT()
      }),
      Eh = (dT({
        id: PT(),
        name: PT(),
        owner_id: PT(),
        icon: PT().nullable(),
        icon_hash: PT().optional().nullable(),
        splash: PT().nullable(),
        discovery_splash: PT().nullable(),
        owner: rT().optional().nullable(),
        permissions: PT().optional().nullable(),
        region: PT(),
        afk_channel_id: PT().nullable(),
        afk_timeout: HT(),
        widget_enabled: rT().optional().nullable(),
        widget_channel_id: PT().optional().nullable(),
        verification_level: HT(),
        default_message_notifications: HT(),
        explicit_content_filter: HT(),
        roles: UT(ph),
        emojis: UT(fh),
        features: UT(PT()),
        mfa_level: HT(),
        application_id: PT().nullable(),
        system_channel_id: PT().nullable(),
        system_channel_flags: HT(),
        rules_channel_id: PT().nullable(),
        joined_at: PT().optional().nullable(),
        large: rT().optional().nullable(),
        unavailable: rT().optional().nullable(),
        member_count: HT().optional().nullable(),
        voice_states: UT(hh).optional().nullable(),
        members: UT(Th).optional().nullable(),
        channels: UT(ih).optional().nullable(),
        presences: UT(Rh).optional().nullable(),
        max_presences: HT().optional().nullable(),
        max_members: HT().optional().nullable(),
        vanity_url_code: PT().nullable(),
        description: PT().nullable(),
        banner: PT().nullable(),
        premium_tier: HT(),
        premium_subscription_count: HT().optional().nullable(),
        preferred_locale: PT(),
        public_updates_channel_id: PT().nullable(),
        max_video_channel_users: HT().optional().nullable(),
        approximate_member_count: HT().optional().nullable(),
        approximate_presence_count: HT().optional().nullable()
      }), dT({
        id: PT(),
        guild_id: PT(),
        type: HT(),
        name: PT()
      })),
      oh = dT({
        id: PT(),
        filename: PT(),
        size: HT(),
        url: PT(),
        proxy_url: PT(),
        height: HT().optional().nullable(),
        width: HT().optional().nullable()
      }),
      Oh = dT({
        text: PT(),
        icon_url: PT().optional().nullable(),
        proxy_icon_url: PT().optional().nullable()
      }),
      Yh = dT({
        url: PT().optional().nullable(),
        proxy_url: PT().optional().nullable(),
        height: HT().optional().nullable(),
        width: HT().optional().nullable()
      }),
      qh = Yh.omit({
        proxy_url: !0
      }),
      jh = dT({
        name: PT().optional().nullable(),
        url: PT().optional().nullable()
      }),
      Vh = dT({
        name: PT().optional().nullable(),
        url: PT().optional().nullable(),
        icon_url: PT().optional().nullable(),
        proxy_icon_url: PT().optional().nullable()
      }),
      Ih = dT({
        name: PT(),
        value: PT(),
        inline: rT()
      }),
      Kh = dT({
        title: PT().optional().nullable(),
        type: PT().optional().nullable(),
        description: PT().optional().nullable(),
        url: PT().optional().nullable(),
        timestamp: PT().optional().nullable(),
        color: HT().optional().nullable(),
        footer: Oh.optional().nullable(),
        image: Yh.optional().nullable(),
        thumbnail: Yh.optional().nullable(),
        video: qh.optional().nullable(),
        provider: jh.optional().nullable(),
        author: Vh.optional().nullable(),
        fields: UT(Ih).optional().nullable()
      }),
      Qh = dT({
        count: HT(),
        me: rT(),
        emoji: fh
      }),
      nh = dT({
        type: HT(),
        party_id: PT().optional().nullable()
      }),
      Jh = dT({
        id: PT(),
        cover_image: PT().optional().nullable(),
        description: PT(),
        icon: PT().optional().nullable(),
        name: PT()
      }),
      ch = dT({
        message_id: PT().optional().nullable(),
        channel_id: PT().optional().nullable(),
        guild_id: PT().optional().nullable()
      }),
      zh = dT({
        id: PT(),
        channel_id: PT(),
        guild_id: PT().optional().nullable(),
        author: mh.optional().nullable(),
        member: Th.optional().nullable(),
        content: PT(),
        timestamp: PT(),
        edited_timestamp: PT().optional().nullable(),
        tts: rT(),
        mention_everyone: rT(),
        mentions: UT(mh),
        mention_roles: UT(PT()),
        mention_channels: UT(Eh),
        attachments: UT(oh),
        embeds: UT(Kh),
        reactions: UT(Qh).optional().nullable(),
        nonce: WT([PT(), HT()]).optional().nullable(),
        pinned: rT(),
        webhook_id: PT().optional().nullable(),
        type: HT(),
        activity: nh.optional().nullable(),
        application: Jh.optional().nullable(),
        message_reference: ch.optional().nullable(),
        flags: HT().optional().nullable(),
        stickers: UT(LT()).optional().nullable(),
        referenced_message: LT().optional().nullable()
      }),
      Zh = dT({
        id: PT(),
        name: PT()
      }),
      kh = dT({
        type: sf({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: HT(),
        name: PT()
      }),
      bh = dT({
        type: sf({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: rT(),
        threshold: HT(),
        shortcut: UT(kh),
        delay: HT()
      }),
      Sh = dT({
        device_id: PT(),
        volume: HT(),
        available_devices: UT(Zh)
      }),
      eh = (dT({
        type: sf({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: PT(),
        vendor: dT({
          name: PT(),
          url: PT()
        }),
        model: dT({
          name: PT(),
          url: PT()
        }),
        related: UT(PT()),
        echo_cancellation: rT().optional().nullable(),
        noise_suppression: rT().optional().nullable(),
        automatic_gain_control: rT().optional().nullable(),
        hardware_mute: rT().optional().nullable()
      }), dT({
        id: PT(),
        name: PT(),
        type: sf({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: dT({
          amount: HT(),
          currency: PT()
        }),
        application_id: PT(),
        flags: HT(),
        release_date: PT().nullable()
      })),
      Nh = dT({
        id: PT(),
        sku_id: PT(),
        application_id: PT(),
        user_id: PT(),
        gift_code_flags: HT(),
        type: sf({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: PT().optional().nullable(),
        branches: UT(PT()).optional().nullable(),
        starts_at: PT().optional().nullable(),
        ends_at: PT().optional().nullable(),
        parent_id: PT().optional().nullable(),
        consumed: rT().optional().nullable(),
        deleted: rT().optional().nullable(),
        gift_code_batch_id: PT().optional().nullable()
      }),
      Gh = (sf({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), sf({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      Xh = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      Ph = (sf(Xh), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      Hh = (sf(Ph), "ERROR");
    var yh;
    ! function(mm) {
      mm.READY = "READY", mm.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", mm.SPEAKING_START = "SPEAKING_START", mm.SPEAKING_STOP = "SPEAKING_STOP", mm.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", mm.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", mm.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", mm.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", mm.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", mm.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(yh || (yh = {}));
    const Ch = Ff.extend({
        evt: Rf(yh),
        nonce: PT().nullable(),
        cmd: wf(gf),
        data: dT({}).passthrough()
      }),
      rh = Ff.extend({
        evt: wf(Hh),
        data: dT({
          code: HT(),
          message: PT().optional()
        }).passthrough(),
        cmd: Rf(Wf),
        nonce: PT().nullable()
      }),
      sh = Ch.extend({
        evt: PT()
      }),
      lh = WT([Ch, sh, rh]);
    const Mh = {
      [yh.READY]: {
        payload: Ch.extend({
          evt: wf(yh.READY),
          data: dT({
            v: HT(),
            config: dT({
              cdn_host: PT().optional(),
              api_endpoint: PT(),
              environment: PT()
            }),
            user: dT({
              id: PT(),
              username: PT(),
              discriminator: PT(),
              avatar: PT().optional()
            }).optional()
          })
        })
      },
      [yh.VOICE_STATE_UPDATE]: {
        payload: Ch.extend({
          evt: wf(yh.VOICE_STATE_UPDATE),
          data: Ah
        }),
        subscribeArgs: dT({
          channel_id: PT()
        })
      },
      [yh.SPEAKING_START]: {
        payload: Ch.extend({
          evt: wf(yh.SPEAKING_START),
          data: dT({
            lobby_id: PT().optional(),
            channel_id: PT().optional(),
            user_id: PT()
          })
        }),
        subscribeArgs: dT({
          lobby_id: PT().nullable().optional(),
          channel_id: PT().nullable().optional()
        })
      },
      [yh.SPEAKING_STOP]: {
        payload: Ch.extend({
          evt: wf(yh.SPEAKING_STOP),
          data: dT({
            lobby_id: PT().optional(),
            channel_id: PT().optional(),
            user_id: PT()
          })
        }),
        subscribeArgs: dT({
          lobby_id: PT().nullable().optional(),
          channel_id: PT().nullable().optional()
        })
      },
      [yh.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: Ch.extend({
          evt: wf(yh.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: dT({
            layout_mode: sf(Ph)
          })
        })
      },
      [yh.ORIENTATION_UPDATE]: {
        payload: Ch.extend({
          evt: wf(yh.ORIENTATION_UPDATE),
          data: dT({
            screen_orientation: sf(Xh),
            orientation: Rf(yf)
          })
        })
      },
      [yh.CURRENT_USER_UPDATE]: {
        payload: Ch.extend({
          evt: wf(yh.CURRENT_USER_UPDATE),
          data: mh
        })
      },
      [yh.ENTITLEMENT_CREATE]: {
        payload: Ch.extend({
          evt: wf(yh.ENTITLEMENT_CREATE),
          data: dT({
            entitlement: Nh
          })
        })
      },
      [yh.THERMAL_STATE_UPDATE]: {
        payload: Ch.extend({
          evt: wf(yh.THERMAL_STATE_UPDATE),
          data: dT({
            thermal_state: Gh
          })
        })
      },
      [yh.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: Ch.extend({
          evt: wf(yh.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: dT({
            participants: Lf.shape.participants
          })
        })
      }
    };
    const uh = dT({}).nullable(),
      Bh = dT({
        code: PT()
      }),
      Lh = dT({
        guilds: UT(dT({
          id: PT(),
          name: PT()
        }))
      }),
      vh = dT({
        id: PT(),
        name: PT(),
        icon_url: PT().optional(),
        members: UT(Th)
      }),
      th = dT({
        id: PT(),
        type: sf(Dh),
        guild_id: PT().optional().nullable(),
        name: PT().optional().nullable(),
        topic: PT().optional().nullable(),
        bitrate: HT().optional().nullable(),
        user_limit: HT().optional().nullable(),
        position: HT().optional().nullable(),
        voice_states: UT(Ah),
        messages: UT(zh)
      }),
      Uh = dT({
        channels: UT(ih)
      }),
      dh = (th.nullable(), th.nullable()),
      gh = th.nullable(),
      Wh = (dT({
        input: Sh,
        output: Sh,
        mode: bh,
        automatic_gain_control: rT(),
        echo_cancellation: rT(),
        noise_suppression: rT(),
        qos: rT(),
        silence_warning: rT(),
        deaf: rT(),
        mute: rT()
      }), dT({
        evt: PT()
      })),
      Fh = dT({
        shortcut: kh
      }),
      mA = xh,
      TA = dT({
        skus: UT(eh)
      }),
      fA = dT({
        entitlements: UT(Nh)
      }),
      hA = UT(Nh).nullable(),
      AA = dT({
        use_interactive_pip: rT()
      }),
      aA = dT({
        locale: PT()
      }),
      xA = dT({
        enabled: rT()
      }),
      wA = dT({
        permissions: CT().or(PT())
      }),
      DA = dT({
        iosKeyboardResizesView: of(rT())
      }),
      iA = Ff.extend({
        cmd: Rf(Wf),
        evt: uT()
      });

    function RA(mm) {
      let {
        cmd: Tm,
        data: fm
      } = mm;
      switch (Tm) {
        case Wf.AUTHORIZE:
          return Bh.parse(fm);
        case Wf.CAPTURE_SHORTCUT:
          return Fh.parse(fm);
        case Wf.ENCOURAGE_HW_ACCELERATION:
          return xA.parse(fm);
        case Wf.GET_CHANNEL:
          return th.parse(fm);
        case Wf.GET_CHANNELS:
          return Uh.parse(fm);
        case Wf.GET_CHANNEL_PERMISSIONS:
          return wA.parse(fm);
        case Wf.GET_GUILD:
          return vh.parse(fm);
        case Wf.GET_GUILDS:
          return Lh.parse(fm);
        case Wf.GET_PLATFORM_BEHAVIORS:
          return DA.parse(fm);
        case Wf.GET_CHANNEL:
          return th.parse(fm);
        case Wf.SELECT_TEXT_CHANNEL:
          return gh.parse(fm);
        case Wf.SELECT_VOICE_CHANNEL:
          return dh.parse(fm);
        case Wf.SET_ACTIVITY:
          return mA.parse(fm);
        case Wf.GET_SKUS_EMBEDDED:
          return TA.parse(fm);
        case Wf.GET_ENTITLEMENTS_EMBEDDED:
          return fA.parse(fm);
        case Wf.SET_CONFIG:
          return AA.parse(fm);
        case Wf.START_PURCHASE:
          return hA.parse(fm);
        case Wf.SUBSCRIBE:
        case Wf.UNSUBSCRIBE:
          return Wh.parse(fm);
        case Wf.USER_SETTINGS_GET_LOCALE:
          return aA.parse(fm);
        case Wf.OPEN_EXTERNAL_LINK:
        case Wf.SET_ORIENTATION_LOCK_STATE:
        case Wf.SET_CERTIFIED_DEVICES:
        case Wf.SEND_ANALYTICS_EVENT:
        case Wf.OPEN_INVITE_DIALOG:
        case Wf.CAPTURE_LOG:
        case Wf.GET_SKUS:
        case Wf.GET_ENTITLEMENTS:
          return uh.parse(fm);
        case Wf.AUTHENTICATE:
        case Wf.INITIATE_IMAGE_UPLOAD:
        case Wf.OPEN_SHARE_MOMENT_DIALOG:
        case Wf.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: mm
          } = df[Tm];
          return mm.parse(fm);
        default:
          ! function(mm, Tm) {
            throw Tm
          }(0, new Error(`Unrecognized command ${Tm}`))
      }
    }
    dT({
      frame_id: PT(),
      platform: Rf(Cf).optional().nullable()
    }), dT({
      v: wf(1),
      encoding: wf("json").optional(),
      client_id: PT(),
      frame_id: PT()
    });
    const pA = dT({
        code: HT(),
        message: PT().optional()
      }),
      EA = dT({
        evt: PT().nullable(),
        nonce: PT().nullable(),
        data: LT().nullable(),
        cmd: PT()
      }).passthrough();

    function oA(mm) {
      const Tm = EA.parse(mm);
      return null != Tm.evt ? Tm.evt === Hh ? rh.parse(Tm) : function(mm) {
        const Tm = mm.evt;
        if (!(Tm in yh)) throw new Error(`Unrecognized event type ${mm.evt}`);
        return Mh[Tm].payload.parse(mm)
      }(lh.parse(Tm)) : function(mm) {
        return Object.assign(Object.assign({}, mm), {
          data: RA(mm)
        })
      }(iA.passthrough().parse(Tm))
    }

    function OA(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const Am = Ff.extend({
        cmd: wf(Tm),
        data: fm
      });
      return async fm => {
        const am = await mm({
          cmd: Tm,
          args: fm,
          transfer: hm(fm)
        });
        return Am.parse(am).data
      }
    }

    function YA(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const fm = df[mm].response,
        hm = Ff.extend({
          cmd: wf(mm),
          data: fm
        });
      return fm => async Am => {
        const am = await fm({
          cmd: mm,
          args: Am,
          transfer: Tm(Am)
        });
        return hm.parse(am).data
      }
    }
    const qA = YA(vf.AUTHENTICATE),
      jA = mm => OA(mm, Wf.AUTHORIZE, Bh),
      VA = mm => OA(mm, Wf.CAPTURE_LOG, uh),
      IA = mm => OA(mm, Wf.ENCOURAGE_HW_ACCELERATION, xA),
      KA = mm => OA(mm, Wf.GET_ENTITLEMENTS_EMBEDDED, fA),
      QA = mm => OA(mm, Wf.GET_SKUS_EMBEDDED, TA),
      nA = mm => OA(mm, Wf.GET_CHANNEL_PERMISSIONS, wA),
      JA = mm => OA(mm, Wf.GET_PLATFORM_BEHAVIORS, DA),
      cA = mm => OA(mm, Wf.OPEN_EXTERNAL_LINK, uh),
      zA = mm => OA(mm, Wf.OPEN_INVITE_DIALOG, uh),
      ZA = YA(vf.OPEN_SHARE_MOMENT_DIALOG);
    xh.Do({
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
      type: xh.shape.type.optional(),
      instance: xh.shape.instance.optional()
    }).nullable();
    const kA = mm => OA(mm, Wf.SET_ACTIVITY, mA),
      bA = mm => OA(mm, Wf.SET_CONFIG, AA);
    const SA = mm => ({
        lock_state: mm.lock_state,
        picture_in_picture_lock_state: mm.picture_in_picture_lock_state
      }),
      eA = mm => function(mm) {
        let {
          sendCommand: Tm,
          cmd: fm,
          response: hm,
          fallbackTransform: Am,
          transferTransform: am = () => {}
        } = mm;
        const xm = Ff.extend({
          cmd: wf(fm),
          data: hm
        });
        return async mm => {
          try {
            const hm = await Tm({
              cmd: fm,
              args: mm,
              transfer: am(mm)
            });
            return xm.parse(hm).data
          } catch (hm) {
            if (hm.code === Hf.INVALID_PAYLOAD) {
              const hm = Am(mm),
                wm = await Tm({
                  cmd: fm,
                  args: hm,
                  transfer: am(hm)
                });
              return xm.parse(wm).data
            }
            throw hm
          }
        }
      }({
        sendCommand: mm,
        cmd: Wf.SET_ORIENTATION_LOCK_STATE,
        response: uh,
        fallbackTransform: SA
      }),
      NA = mm => OA(mm, Wf.START_PURCHASE, hA),
      GA = mm => OA(mm, Wf.USER_SETTINGS_GET_LOCALE, aA),
      XA = YA(vf.INITIATE_IMAGE_UPLOAD),
      PA = mm => OA(mm, Wf.GET_CHANNEL, th),
      HA = YA(vf.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var yA = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function CA(mm) {
      return "string" === typeof mm && yA.test(mm)
    }
    for (var rA = [], sA = 0; sA < 256; ++sA) rA.push((sA + 256).toString(16).substr(1));

    function lA(mm) {
      var Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        fm = (rA[mm[Tm + 0]] + rA[mm[Tm + 1]] + rA[mm[Tm + 2]] + rA[mm[Tm + 3]] + "-" + rA[mm[Tm + 4]] + rA[mm[Tm + 5]] + "-" + rA[mm[Tm + 6]] + rA[mm[Tm + 7]] + "-" + rA[mm[Tm + 8]] + rA[mm[Tm + 9]] + "-" + rA[mm[Tm + 10]] + rA[mm[Tm + 11]] + rA[mm[Tm + 12]] + rA[mm[Tm + 13]] + rA[mm[Tm + 14]] + rA[mm[Tm + 15]]).toLowerCase();
      if (!CA(fm)) throw TypeError("Stringified UUID is invalid");
      return fm
    }
    var MA;

    function uA(mm, Tm, fm) {
      function hm(mm, hm, Am, am) {
        if ("string" === typeof mm && (mm = function(mm) {
            mm = unescape(encodeURIComponent(mm));
            for (var Tm = [], fm = 0; fm < mm.length; ++fm) Tm.push(mm.charCodeAt(fm));
            return Tm
          }(mm)), "string" === typeof hm && (hm = function(mm) {
            if (!CA(mm)) throw TypeError("Invalid UUID");
            var Tm, fm = new Uint8Array(16);
            return fm[0] = (Tm = parseInt(mm.slice(0, 8), 16)) >>> 24, fm[1] = Tm >>> 16 & 255, fm[2] = Tm >>> 8 & 255, fm[3] = 255 & Tm, fm[4] = (Tm = parseInt(mm.slice(9, 13), 16)) >>> 8, fm[5] = 255 & Tm, fm[6] = (Tm = parseInt(mm.slice(14, 18), 16)) >>> 8, fm[7] = 255 & Tm, fm[8] = (Tm = parseInt(mm.slice(19, 23), 16)) >>> 8, fm[9] = 255 & Tm, fm[10] = (Tm = parseInt(mm.slice(24, 36), 16)) / 1099511627776 & 255, fm[11] = Tm / 4294967296 & 255, fm[12] = Tm >>> 24 & 255, fm[13] = Tm >>> 16 & 255, fm[14] = Tm >>> 8 & 255, fm[15] = 255 & Tm, fm
          }(hm)), 16 !== hm.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var xm = new Uint8Array(16 + mm.length);
        if (xm.set(hm), xm.set(mm, hm.length), (xm = fm(xm))[6] = 15 & xm[6] | Tm, xm[8] = 63 & xm[8] | 128, Am) {
          am = am || 0;
          for (var wm = 0; wm < 16; ++wm) Am[am + wm] = xm[wm];
          return Am
        }
        return lA(xm)
      }
      try {
        hm.name = mm
      } catch (Am) {}
      return hm.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", hm.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", hm
    }

    function BA(mm) {
      return 14 + (mm + 64 >>> 9 << 4) + 1
    }

    function LA(mm, Tm) {
      var fm = (65535 & mm) + (65535 & Tm);
      return (mm >> 16) + (Tm >> 16) + (fm >> 16) << 16 | 65535 & fm
    }

    function vA(mm, Tm, fm, hm, Am, am) {
      return LA((xm = LA(LA(Tm, mm), LA(hm, am))) << (wm = Am) | xm >>> 32 - wm, fm);
      var xm, wm
    }

    function tA(mm, Tm, fm, hm, Am, am, xm) {
      return vA(Tm & fm | ~Tm & hm, mm, Tm, Am, am, xm)
    }

    function UA(mm, Tm, fm, hm, Am, am, xm) {
      return vA(Tm & hm | fm & ~hm, mm, Tm, Am, am, xm)
    }

    function dA(mm, Tm, fm, hm, Am, am, xm) {
      return vA(Tm ^ fm ^ hm, mm, Tm, Am, am, xm)
    }

    function gA(mm, Tm, fm, hm, Am, am, xm) {
      return vA(fm ^ (Tm | ~hm), mm, Tm, Am, am, xm)
    }
    uA("v3", 48, (function(mm) {
      if ("string" === typeof mm) {
        var Tm = unescape(encodeURIComponent(mm));
        mm = new Uint8Array(Tm.length);
        for (var fm = 0; fm < Tm.length; ++fm) mm[fm] = Tm.charCodeAt(fm)
      }
      return function(mm) {
        for (var Tm = [], fm = 32 * mm.length, hm = "0123456789abcdef", Am = 0; Am < fm; Am += 8) {
          var am = mm[Am >> 5] >>> Am % 32 & 255,
            xm = parseInt(hm.charAt(am >>> 4 & 15) + hm.charAt(15 & am), 16);
          Tm.push(xm)
        }
        return Tm
      }(function(mm, Tm) {
        mm[Tm >> 5] |= 128 << Tm % 32, mm[BA(Tm) - 1] = Tm;
        for (var fm = 1732584193, hm = -271733879, Am = -1732584194, am = 271733878, xm = 0; xm < mm.length; xm += 16) {
          var wm = fm,
            Dm = hm,
            im = Am,
            Rm = am;
          fm = tA(fm, hm, Am, am, mm[xm], 7, -680876936), am = tA(am, fm, hm, Am, mm[xm + 1], 12, -389564586), Am = tA(Am, am, fm, hm, mm[xm + 2], 17, 606105819), hm = tA(hm, Am, am, fm, mm[xm + 3], 22, -1044525330), fm = tA(fm, hm, Am, am, mm[xm + 4], 7, -176418897), am = tA(am, fm, hm, Am, mm[xm + 5], 12, 1200080426), Am = tA(Am, am, fm, hm, mm[xm + 6], 17, -1473231341), hm = tA(hm, Am, am, fm, mm[xm + 7], 22, -45705983), fm = tA(fm, hm, Am, am, mm[xm + 8], 7, 1770035416), am = tA(am, fm, hm, Am, mm[xm + 9], 12, -1958414417), Am = tA(Am, am, fm, hm, mm[xm + 10], 17, -42063), hm = tA(hm, Am, am, fm, mm[xm + 11], 22, -1990404162), fm = tA(fm, hm, Am, am, mm[xm + 12], 7, 1804603682), am = tA(am, fm, hm, Am, mm[xm + 13], 12, -40341101), Am = tA(Am, am, fm, hm, mm[xm + 14], 17, -1502002290), fm = UA(fm, hm = tA(hm, Am, am, fm, mm[xm + 15], 22, 1236535329), Am, am, mm[xm + 1], 5, -165796510), am = UA(am, fm, hm, Am, mm[xm + 6], 9, -1069501632), Am = UA(Am, am, fm, hm, mm[xm + 11], 14, 643717713), hm = UA(hm, Am, am, fm, mm[xm], 20, -373897302), fm = UA(fm, hm, Am, am, mm[xm + 5], 5, -701558691), am = UA(am, fm, hm, Am, mm[xm + 10], 9, 38016083), Am = UA(Am, am, fm, hm, mm[xm + 15], 14, -660478335), hm = UA(hm, Am, am, fm, mm[xm + 4], 20, -405537848), fm = UA(fm, hm, Am, am, mm[xm + 9], 5, 568446438), am = UA(am, fm, hm, Am, mm[xm + 14], 9, -1019803690), Am = UA(Am, am, fm, hm, mm[xm + 3], 14, -187363961), hm = UA(hm, Am, am, fm, mm[xm + 8], 20, 1163531501), fm = UA(fm, hm, Am, am, mm[xm + 13], 5, -1444681467), am = UA(am, fm, hm, Am, mm[xm + 2], 9, -51403784), Am = UA(Am, am, fm, hm, mm[xm + 7], 14, 1735328473), fm = dA(fm, hm = UA(hm, Am, am, fm, mm[xm + 12], 20, -1926607734), Am, am, mm[xm + 5], 4, -378558), am = dA(am, fm, hm, Am, mm[xm + 8], 11, -2022574463), Am = dA(Am, am, fm, hm, mm[xm + 11], 16, 1839030562), hm = dA(hm, Am, am, fm, mm[xm + 14], 23, -35309556), fm = dA(fm, hm, Am, am, mm[xm + 1], 4, -1530992060), am = dA(am, fm, hm, Am, mm[xm + 4], 11, 1272893353), Am = dA(Am, am, fm, hm, mm[xm + 7], 16, -155497632), hm = dA(hm, Am, am, fm, mm[xm + 10], 23, -1094730640), fm = dA(fm, hm, Am, am, mm[xm + 13], 4, 681279174), am = dA(am, fm, hm, Am, mm[xm], 11, -358537222), Am = dA(Am, am, fm, hm, mm[xm + 3], 16, -722521979), hm = dA(hm, Am, am, fm, mm[xm + 6], 23, 76029189), fm = dA(fm, hm, Am, am, mm[xm + 9], 4, -640364487), am = dA(am, fm, hm, Am, mm[xm + 12], 11, -421815835), Am = dA(Am, am, fm, hm, mm[xm + 15], 16, 530742520), fm = gA(fm, hm = dA(hm, Am, am, fm, mm[xm + 2], 23, -995338651), Am, am, mm[xm], 6, -198630844), am = gA(am, fm, hm, Am, mm[xm + 7], 10, 1126891415), Am = gA(Am, am, fm, hm, mm[xm + 14], 15, -1416354905), hm = gA(hm, Am, am, fm, mm[xm + 5], 21, -57434055), fm = gA(fm, hm, Am, am, mm[xm + 12], 6, 1700485571), am = gA(am, fm, hm, Am, mm[xm + 3], 10, -1894986606), Am = gA(Am, am, fm, hm, mm[xm + 10], 15, -1051523), hm = gA(hm, Am, am, fm, mm[xm + 1], 21, -2054922799), fm = gA(fm, hm, Am, am, mm[xm + 8], 6, 1873313359), am = gA(am, fm, hm, Am, mm[xm + 15], 10, -30611744), Am = gA(Am, am, fm, hm, mm[xm + 6], 15, -1560198380), hm = gA(hm, Am, am, fm, mm[xm + 13], 21, 1309151649), fm = gA(fm, hm, Am, am, mm[xm + 4], 6, -145523070), am = gA(am, fm, hm, Am, mm[xm + 11], 10, -1120210379), Am = gA(Am, am, fm, hm, mm[xm + 2], 15, 718787259), hm = gA(hm, Am, am, fm, mm[xm + 9], 21, -343485551), fm = LA(fm, wm), hm = LA(hm, Dm), Am = LA(Am, im), am = LA(am, Rm)
        }
        return [fm, hm, Am, am]
      }(function(mm) {
        if (0 === mm.length) return [];
        for (var Tm = 8 * mm.length, fm = new Uint32Array(BA(Tm)), hm = 0; hm < Tm; hm += 8) fm[hm >> 5] |= (255 & mm[hm / 8]) << hm % 32;
        return fm
      }(mm), 8 * mm.length))
    }));
    var WA = new Uint8Array(16);

    function FA() {
      if (!MA && !(MA = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return MA(WA)
    }

    function ma(mm, Tm, fm) {
      var hm = (mm = mm || {}).random || (mm.rng || FA)();
      if (hm[6] = 15 & hm[6] | 64, hm[8] = 63 & hm[8] | 128, Tm) {
        fm = fm || 0;
        for (var Am = 0; Am < 16; ++Am) Tm[fm + Am] = hm[Am];
        return Tm
      }
      return lA(hm)
    }

    function Ta(mm, Tm, fm, hm) {
      switch (mm) {
        case 0:
          return Tm & fm ^ ~Tm & hm;
        case 1:
        case 3:
          return Tm ^ fm ^ hm;
        case 2:
          return Tm & fm ^ Tm & hm ^ fm & hm
      }
    }

    function fa(mm, Tm) {
      return mm << Tm | mm >>> 32 - Tm
    }
    uA("v5", 80, (function(mm) {
      var Tm = [1518500249, 1859775393, 2400959708, 3395469782],
        fm = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof mm) {
        var hm = unescape(encodeURIComponent(mm));
        mm = [];
        for (var Am = 0; Am < hm.length; ++Am) mm.push(hm.charCodeAt(Am))
      } else Array.isArray(mm) || (mm = Array.prototype.slice.call(mm));
      mm.push(128);
      for (var am = mm.length / 4 + 2, xm = Math.ceil(am / 16), wm = new Array(xm), Dm = 0; Dm < xm; ++Dm) {
        for (var im = new Uint32Array(16), Rm = 0; Rm < 16; ++Rm) im[Rm] = mm[64 * Dm + 4 * Rm] << 24 | mm[64 * Dm + 4 * Rm + 1] << 16 | mm[64 * Dm + 4 * Rm + 2] << 8 | mm[64 * Dm + 4 * Rm + 3];
        wm[Dm] = im
      }
      wm[xm - 1][14] = 8 * (mm.length - 1) / Math.pow(2, 32), wm[xm - 1][14] = Math.floor(wm[xm - 1][14]), wm[xm - 1][15] = 8 * (mm.length - 1) & 4294967295;
      for (var pm = 0; pm < xm; ++pm) {
        for (var Em = new Uint32Array(80), om = 0; om < 16; ++om) Em[om] = wm[pm][om];
        for (var Om = 16; Om < 80; ++Om) Em[Om] = fa(Em[Om - 3] ^ Em[Om - 8] ^ Em[Om - 14] ^ Em[Om - 16], 1);
        for (var Ym = fm[0], qm = fm[1], jm = fm[2], Vm = fm[3], Im = fm[4], Km = 0; Km < 80; ++Km) {
          var Qm = Math.floor(Km / 20),
            nm = fa(Ym, 5) + Ta(Qm, qm, jm, Vm) + Im + Tm[Qm] + Em[Km] >>> 0;
          Im = Vm, Vm = jm, jm = fa(qm, 30) >>> 0, qm = Ym, Ym = nm
        }
        fm[0] = fm[0] + Ym >>> 0, fm[1] = fm[1] + qm >>> 0, fm[2] = fm[2] + jm >>> 0, fm[3] = fm[3] + Vm >>> 0, fm[4] = fm[4] + Im >>> 0
      }
      return [fm[0] >> 24 & 255, fm[0] >> 16 & 255, fm[0] >> 8 & 255, 255 & fm[0], fm[1] >> 24 & 255, fm[1] >> 16 & 255, fm[1] >> 8 & 255, 255 & fm[1], fm[2] >> 24 & 255, fm[2] >> 16 & 255, fm[2] >> 8 & 255, 255 & fm[2], fm[3] >> 24 & 255, fm[3] >> 16 & 255, fm[3] >> 8 & 255, 255 & fm[3], fm[4] >> 24 & 255, fm[4] >> 16 & 255, fm[4] >> 8 & 255, 255 & fm[4]]
    }));
    class ha extends Error {
      constructor(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(Tm), this.code = mm, this.message = Tm, this.name = "Discord SDK Error"
      }
    }
    const Aa = ["log", "warn", "debug", "info", "error"];
    var aa;
    ! function(mm) {
      mm[mm.HANDSHAKE = 0] = "HANDSHAKE", mm[mm.FRAME = 1] = "FRAME", mm[mm.CLOSE = 2] = "CLOSE", mm[mm.HELLO = 3] = "HELLO"
    }(aa || (aa = {}));
    const xa = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class wa {
      getTransfer(mm) {
        var Tm;
        switch (mm.cmd) {
          case Wf.SUBSCRIBE:
          case Wf.UNSUBSCRIBE:
            return;
          default:
            return null !== (Tm = mm.transfer) && void 0 !== Tm ? Tm : void 0
        }
      }
      constructor(mm, Tm) {
        var fm;
        if (this.eventBus = new im, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = mm => {
            var Tm;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const fm = ma();
            null === (Tm = this.source) || void 0 === Tm || Tm.postMessage([aa.FRAME, Object.assign(Object.assign({}, mm), {
              nonce: fm
            })], this.sourceOrigin, this.getTransfer(mm));
            return new Promise(((mm, Tm) => {
              this.pendingCommands.set(fm, {
                resolve: mm,
                reject: Tm
              })
            }))
          }, this.commands = (fm = this.sendCommand, {
            authenticate: qA(fm),
            authorize: jA(fm),
            captureLog: VA(fm),
            encourageHardwareAcceleration: IA(fm),
            getChannel: PA(fm),
            getChannelPermissions: nA(fm),
            getEntitlements: KA(fm),
            getPlatformBehaviors: JA(fm),
            getSkus: QA(fm),
            openExternalLink: cA(fm),
            openInviteDialog: zA(fm),
            openShareMomentDialog: ZA(fm),
            setActivity: kA(fm),
            setConfig: bA(fm),
            setOrientationLockState: eA(fm),
            startPurchase: NA(fm),
            userSettingsGetLocale: GA(fm),
            initiateImageUpload: XA(fm),
            getInstanceConnectedParticipants: HA(fm)
          }), this.handleMessage = mm => {
            if (!xa.has(mm.origin)) return;
            const Tm = mm.data;
            if (!Array.isArray(Tm)) return;
            const [fm, hm] = Tm;
            switch (fm) {
              case aa.HELLO:
                return;
              case aa.CLOSE:
                return this.handleClose(hm);
              case aa.HANDSHAKE:
                return this.handleHandshake();
              case aa.FRAME:
                return this.handleFrame(hm);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = mm, this.configuration = null !== Tm && void 0 !== Tm ? Tm : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = Cf.DESKTOP, this.guildId = null, void(this.channelId = null);
        const hm = new URLSearchParams(this._getSearch()),
          Am = hm.get("frame_id");
        if (!Am) throw new Error("frame_id query param is not defined");
        this.frameId = Am;
        const am = hm.get("instance_id");
        if (!am) throw new Error("instance_id query param is not defined");
        this.instanceId = am;
        const xm = hm.get("platform");
        if (!xm) throw new Error("platform query param is not defined");
        if (xm !== Cf.DESKTOP && xm !== Cf.MOBILE) throw new Error(`Invalid query param "platform" of "${xm}". Valid values are "${Cf.DESKTOP}" or "${Cf.MOBILE}"`);
        this.platform = xm, this.guildId = hm.get("guild_id"), this.channelId = hm.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var mm;
          return [null !== (mm = window.parent.opener) && void 0 !== mm ? mm : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(mm, Tm) {
        var fm;
        window.removeEventListener("message", this.handleMessage);
        const hm = ma();
        null === (fm = this.source) || void 0 === fm || fm.postMessage([aa.CLOSE, {
          code: mm,
          message: Tm,
          nonce: hm
        }], this.sourceOrigin)
      }
      async subscribe(mm, Tm) {
        for (var fm = arguments.length, hm = new Array(fm > 2 ? fm - 2 : 0), Am = 2; Am < fm; Am++) hm[Am - 2] = arguments[Am];
        const [am] = hm, xm = this.eventBus.listenerCount(mm), wm = this.eventBus.on(mm, Tm);
        return Object.values(yh).includes(mm) && mm !== yh.READY && 0 === xm && await this.sendCommand({
          cmd: Wf.SUBSCRIBE,
          args: am,
          evt: mm
        }), wm
      }
      async unsubscribe(mm, Tm) {
        for (var fm = arguments.length, hm = new Array(fm > 2 ? fm - 2 : 0), Am = 2; Am < fm; Am++) hm[Am - 2] = arguments[Am];
        const [am] = hm;
        return mm !== yh.READY && 1 === this.eventBus.listenerCount(mm) && await this.sendCommand({
          cmd: Wf.UNSUBSCRIBE,
          evt: mm,
          args: am
        }), this.eventBus.off(mm, Tm)
      }
      async ready() {
        this.isReady || await new Promise((mm => {
          this.eventBus.once(yh.READY, mm)
        }))
      }
      handshake() {
        var mm;
        null === (mm = this.source) || void 0 === mm || mm.postMessage([aa.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(yh.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const mm = (mm, Tm) => {
          this.commands.captureLog({
            level: mm,
            message: Tm
          })
        };
        Aa.forEach((Tm => {
          ! function(mm, Tm, fm) {
            const hm = mm[Tm],
              Am = mm;
            hm && (mm[Tm] = function() {
              const mm = [].slice.call(arguments),
                am = "" + mm.join(" ");
              fm(Tm, am), hm.apply(Am, mm)
            })
          }(console, Tm, mm)
        }))
      }
      handleClose(mm) {
        pA.parse(mm)
      }
      handleHandshake() {}
      handleFrame(mm) {
        var Tm, fm;
        let hm;
        try {
          hm = oA(mm)
        } catch (Am) {
          return console.error("Failed to parse", mm), void console.error(Am)
        }
        if ("DISPATCH" === hm.cmd) this.eventBus.emit(hm.evt, hm.data);
        else {
          if (hm.evt === Hh) {
            if (null != hm.nonce) return null === (Tm = this.pendingCommands.get(hm.nonce)) || void 0 === Tm || Tm.reject(hm.data), void this.pendingCommands.delete(hm.nonce);
            this.eventBus.emit("error", new ha(hm.data.code, hm.data.message))
          }
          if (null == hm.nonce) return void console.error("Missing nonce", mm);
          null === (fm = this.pendingCommands.get(hm.nonce)) || void 0 === fm || fm.resolve(hm), this.pendingCommands.delete(hm.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var Da, ia = 1e9,
      Ra = !0,
      pa = "[DecimalError] ",
      Ea = pa + "Invalid argument: ",
      oa = pa + "Exponent out of range: ",
      Oa = Math.floor,
      Ya = Math.pow,
      qa = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      ja = 1e7,
      Va = 9007199254740991,
      Ia = Oa(1286742750677284.5),
      Ka = {};

    function Qa(mm, Tm) {
      var fm, hm, Am, am, xm, wm, Dm, im, Rm = mm.constructor,
        pm = Rm.precision;
      if (!mm.s || !Tm.s) return Tm.s || (Tm = new Rm(mm)), Ra ? Na(Tm, pm) : Tm;
      if (Dm = mm.d, im = Tm.d, xm = mm.e, Am = Tm.e, Dm = Dm.slice(), am = xm - Am) {
        for (am < 0 ? (hm = Dm, am = -am, wm = im.length) : (hm = im, Am = xm, wm = Dm.length), am > (wm = (xm = Math.ceil(pm / 7)) > wm ? xm + 1 : wm + 1) && (am = wm, hm.length = 1), hm.reverse(); am--;) hm.push(0);
        hm.reverse()
      }
      for ((wm = Dm.length) - (am = im.length) < 0 && (am = wm, hm = im, im = Dm, Dm = hm), fm = 0; am;) fm = (Dm[--am] = Dm[am] + im[am] + fm) / ja | 0, Dm[am] %= ja;
      for (fm && (Dm.unshift(fm), ++Am), wm = Dm.length; 0 == Dm[--wm];) Dm.pop();
      return Tm.d = Dm, Tm.e = Am, Ra ? Na(Tm, pm) : Tm
    }

    function na(mm, Tm, fm) {
      if (mm !== ~~mm || mm < Tm || mm > fm) throw Error(Ea + mm)
    }

    function Ja(mm) {
      var Tm, fm, hm, Am = mm.length - 1,
        am = "",
        xm = mm[0];
      if (Am > 0) {
        for (am += xm, Tm = 1; Tm < Am; Tm++)(fm = 7 - (hm = mm[Tm] + "").length) && (am += ba(fm)), am += hm;
        (fm = 7 - (hm = (xm = mm[Tm]) + "").length) && (am += ba(fm))
      } else if (0 === xm) return "0";
      for (; xm % 10 === 0;) xm /= 10;
      return am + xm
    }
    Ka.absoluteValue = Ka.abs = function() {
      var mm = new this.constructor(this);
      return mm.s && (mm.s = 1), mm
    }, Ka.comparedTo = Ka.cmp = function(mm) {
      var Tm, fm, hm, Am, am = this;
      if (mm = new am.constructor(mm), am.s !== mm.s) return am.s || -mm.s;
      if (am.e !== mm.e) return am.e > mm.e ^ am.s < 0 ? 1 : -1;
      for (Tm = 0, fm = (hm = am.d.length) < (Am = mm.d.length) ? hm : Am; Tm < fm; ++Tm)
        if (am.d[Tm] !== mm.d[Tm]) return am.d[Tm] > mm.d[Tm] ^ am.s < 0 ? 1 : -1;
      return hm === Am ? 0 : hm > Am ^ am.s < 0 ? 1 : -1
    }, Ka.decimalPlaces = Ka.dp = function() {
      var mm = this,
        Tm = mm.d.length - 1,
        fm = 7 * (Tm - mm.e);
      if (Tm = mm.d[Tm])
        for (; Tm % 10 == 0; Tm /= 10) fm--;
      return fm < 0 ? 0 : fm
    }, Ka.dividedBy = Ka.div = function(mm) {
      return ca(this, new this.constructor(mm))
    }, Ka.dividedToIntegerBy = Ka.idiv = function(mm) {
      var Tm = this.constructor;
      return Na(ca(this, new Tm(mm), 0, 1), Tm.precision)
    }, Ka.equals = Ka.eq = function(mm) {
      return !this.cmp(mm)
    }, Ka.exponent = function() {
      return Za(this)
    }, Ka.greaterThan = Ka.gt = function(mm) {
      return this.cmp(mm) > 0
    }, Ka.greaterThanOrEqualTo = Ka.gte = function(mm) {
      return this.cmp(mm) >= 0
    }, Ka.isInteger = Ka.isint = function() {
      return this.e > this.d.length - 2
    }, Ka.isNegative = Ka.isneg = function() {
      return this.s < 0
    }, Ka.isPositive = Ka.ispos = function() {
      return this.s > 0
    }, Ka.isZero = function() {
      return 0 === this.s
    }, Ka.lessThan = Ka.lt = function(mm) {
      return this.cmp(mm) < 0
    }, Ka.lessThanOrEqualTo = Ka.lte = function(mm) {
      return this.cmp(mm) < 1
    }, Ka.logarithm = Ka.log = function(mm) {
      var Tm, fm = this,
        hm = fm.constructor,
        Am = hm.precision,
        am = Am + 5;
      if (void 0 === mm) mm = new hm(10);
      else if ((mm = new hm(mm)).s < 1 || mm.eq(Da)) throw Error(pa + "NaN");
      if (fm.s < 1) throw Error(pa + (fm.s ? "NaN" : "-Infinity"));
      return fm.eq(Da) ? new hm(0) : (Ra = !1, Tm = ca(Sa(fm, am), Sa(mm, am), am), Ra = !0, Na(Tm, Am))
    }, Ka.minus = Ka.sub = function(mm) {
      var Tm = this;
      return mm = new Tm.constructor(mm), Tm.s == mm.s ? Ga(Tm, mm) : Qa(Tm, (mm.s = -mm.s, mm))
    }, Ka.modulo = Ka.mod = function(mm) {
      var Tm, fm = this,
        hm = fm.constructor,
        Am = hm.precision;
      if (!(mm = new hm(mm)).s) throw Error(pa + "NaN");
      return fm.s ? (Ra = !1, Tm = ca(fm, mm, 0, 1).times(mm), Ra = !0, fm.minus(Tm)) : Na(new hm(fm), Am)
    }, Ka.naturalExponential = Ka.exp = function() {
      return za(this)
    }, Ka.naturalLogarithm = Ka.ln = function() {
      return Sa(this)
    }, Ka.negated = Ka.neg = function() {
      var mm = new this.constructor(this);
      return mm.s = -mm.s || 0, mm
    }, Ka.plus = Ka.add = function(mm) {
      var Tm = this;
      return mm = new Tm.constructor(mm), Tm.s == mm.s ? Qa(Tm, mm) : Ga(Tm, (mm.s = -mm.s, mm))
    }, Ka.precision = Ka.sd = function(mm) {
      var Tm, fm, hm, Am = this;
      if (void 0 !== mm && mm !== !!mm && 1 !== mm && 0 !== mm) throw Error(Ea + mm);
      if (Tm = Za(Am) + 1, fm = 7 * (hm = Am.d.length - 1) + 1, hm = Am.d[hm]) {
        for (; hm % 10 == 0; hm /= 10) fm--;
        for (hm = Am.d[0]; hm >= 10; hm /= 10) fm++
      }
      return mm && Tm > fm ? Tm : fm
    }, Ka.squareRoot = Ka.sqrt = function() {
      var mm, Tm, fm, hm, Am, am, xm, wm = this,
        Dm = wm.constructor;
      if (wm.s < 1) {
        if (!wm.s) return new Dm(0);
        throw Error(pa + "NaN")
      }
      for (mm = Za(wm), Ra = !1, 0 == (Am = Math.sqrt(+wm)) || Am == 1 / 0 ? (((Tm = Ja(wm.d)).length + mm) % 2 == 0 && (Tm += "0"), Am = Math.sqrt(Tm), mm = Oa((mm + 1) / 2) - (mm < 0 || mm % 2), hm = new Dm(Tm = Am == 1 / 0 ? "1e" + mm : (Tm = Am.toExponential()).slice(0, Tm.indexOf("e") + 1) + mm)) : hm = new Dm(Am.toString()), Am = xm = (fm = Dm.precision) + 3;;)
        if (hm = (am = hm).plus(ca(wm, am, xm + 2)).times(.5), Ja(am.d).slice(0, xm) === (Tm = Ja(hm.d)).slice(0, xm)) {
          if (Tm = Tm.slice(xm - 3, xm + 1), Am == xm && "4999" == Tm) {
            if (Na(am, fm + 1, 0), am.times(am).eq(wm)) {
              hm = am;
              break
            }
          } else if ("9999" != Tm) break;
          xm += 4
        } return Ra = !0, Na(hm, fm)
    }, Ka.times = Ka.mul = function(mm) {
      var Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm = this,
        pm = Rm.constructor,
        Em = Rm.d,
        om = (mm = new pm(mm)).d;
      if (!Rm.s || !mm.s) return new pm(0);
      for (mm.s *= Rm.s, fm = Rm.e + mm.e, (Dm = Em.length) < (im = om.length) && (am = Em, Em = om, om = am, xm = Dm, Dm = im, im = xm), am = [], hm = xm = Dm + im; hm--;) am.push(0);
      for (hm = im; --hm >= 0;) {
        for (Tm = 0, Am = Dm + hm; Am > hm;) wm = am[Am] + om[hm] * Em[Am - hm - 1] + Tm, am[Am--] = wm % ja | 0, Tm = wm / ja | 0;
        am[Am] = (am[Am] + Tm) % ja | 0
      }
      for (; !am[--xm];) am.pop();
      return Tm ? ++fm : am.shift(), mm.d = am, mm.e = fm, Ra ? Na(mm, pm.precision) : mm
    }, Ka.toDecimalPlaces = Ka.todp = function(mm, Tm) {
      var fm = this,
        hm = fm.constructor;
      return fm = new hm(fm), void 0 === mm ? fm : (na(mm, 0, ia), void 0 === Tm ? Tm = hm.rounding : na(Tm, 0, 8), Na(fm, mm + Za(fm) + 1, Tm))
    }, Ka.toExponential = function(mm, Tm) {
      var fm, hm = this,
        Am = hm.constructor;
      return void 0 === mm ? fm = Xa(hm, !0) : (na(mm, 0, ia), void 0 === Tm ? Tm = Am.rounding : na(Tm, 0, 8), fm = Xa(hm = Na(new Am(hm), mm + 1, Tm), !0, mm + 1)), fm
    }, Ka.toFixed = function(mm, Tm) {
      var fm, hm, Am = this,
        am = Am.constructor;
      return void 0 === mm ? Xa(Am) : (na(mm, 0, ia), void 0 === Tm ? Tm = am.rounding : na(Tm, 0, 8), fm = Xa((hm = Na(new am(Am), mm + Za(Am) + 1, Tm)).abs(), !1, mm + Za(hm) + 1), Am.isneg() && !Am.isZero() ? "-" + fm : fm)
    }, Ka.toInteger = Ka.toint = function() {
      var mm = this,
        Tm = mm.constructor;
      return Na(new Tm(mm), Za(mm) + 1, Tm.rounding)
    }, Ka.toNumber = function() {
      return +this
    }, Ka.toPower = Ka.pow = function(mm) {
      var Tm, fm, hm, Am, am, xm, wm = this,
        Dm = wm.constructor,
        im = +(mm = new Dm(mm));
      if (!mm.s) return new Dm(Da);
      if (!(wm = new Dm(wm)).s) {
        if (mm.s < 1) throw Error(pa + "Infinity");
        return wm
      }
      if (wm.eq(Da)) return wm;
      if (hm = Dm.precision, mm.eq(Da)) return Na(wm, hm);
      if (xm = (Tm = mm.e) >= (fm = mm.d.length - 1), am = wm.s, xm) {
        if ((fm = im < 0 ? -im : im) <= Va) {
          for (Am = new Dm(Da), Tm = Math.ceil(hm / 7 + 4), Ra = !1; fm % 2 && Pa((Am = Am.times(wm)).d, Tm), 0 !== (fm = Oa(fm / 2));) Pa((wm = wm.times(wm)).d, Tm);
          return Ra = !0, mm.s < 0 ? new Dm(Da).div(Am) : Na(Am, hm)
        }
      } else if (am < 0) throw Error(pa + "NaN");
      return am = am < 0 && 1 & mm.d[Math.max(Tm, fm)] ? -1 : 1, wm.s = 1, Ra = !1, Am = mm.times(Sa(wm, hm + 12)), Ra = !0, (Am = za(Am)).s = am, Am
    }, Ka.toPrecision = function(mm, Tm) {
      var fm, hm, Am = this,
        am = Am.constructor;
      return void 0 === mm ? hm = Xa(Am, (fm = Za(Am)) <= am.toExpNeg || fm >= am.toExpPos) : (na(mm, 1, ia), void 0 === Tm ? Tm = am.rounding : na(Tm, 0, 8), hm = Xa(Am = Na(new am(Am), mm, Tm), mm <= (fm = Za(Am)) || fm <= am.toExpNeg, mm)), hm
    }, Ka.toSignificantDigits = Ka.tosd = function(mm, Tm) {
      var fm = this.constructor;
      return void 0 === mm ? (mm = fm.precision, Tm = fm.rounding) : (na(mm, 1, ia), void 0 === Tm ? Tm = fm.rounding : na(Tm, 0, 8)), Na(new fm(this), mm, Tm)
    }, Ka.toString = Ka.valueOf = Ka.val = Ka.toJSON = Ka[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var mm = this,
        Tm = Za(mm),
        fm = mm.constructor;
      return Xa(mm, Tm <= fm.toExpNeg || Tm >= fm.toExpPos)
    };
    var ca = function() {
      function mm(mm, Tm) {
        var fm, hm = 0,
          Am = mm.length;
        for (mm = mm.slice(); Am--;) fm = mm[Am] * Tm + hm, mm[Am] = fm % ja | 0, hm = fm / ja | 0;
        return hm && mm.unshift(hm), mm
      }

      function Tm(mm, Tm, fm, hm) {
        var Am, am;
        if (fm != hm) am = fm > hm ? 1 : -1;
        else
          for (Am = am = 0; Am < fm; Am++)
            if (mm[Am] != Tm[Am]) {
              am = mm[Am] > Tm[Am] ? 1 : -1;
              break
            } return am
      }

      function fm(mm, Tm, fm) {
        for (var hm = 0; fm--;) mm[fm] -= hm, hm = mm[fm] < Tm[fm] ? 1 : 0, mm[fm] = hm * ja + mm[fm] - Tm[fm];
        for (; !mm[0] && mm.length > 1;) mm.shift()
      }
      return function(hm, Am, am, xm) {
        var wm, Dm, im, Rm, pm, Em, om, Om, Ym, qm, jm, Vm, Im, Km, Qm, nm, Jm, cm, zm = hm.constructor,
          Zm = hm.s == Am.s ? 1 : -1,
          km = hm.d,
          bm = Am.d;
        if (!hm.s) return new zm(hm);
        if (!Am.s) throw Error(pa + "Division by zero");
        for (Dm = hm.e - Am.e, Jm = bm.length, Qm = km.length, Om = (om = new zm(Zm)).d = [], im = 0; bm[im] == (km[im] || 0);) ++im;
        if (bm[im] > (km[im] || 0) && --Dm, (Vm = null == am ? am = zm.precision : xm ? am + (Za(hm) - Za(Am)) + 1 : am) < 0) return new zm(0);
        if (Vm = Vm / 7 + 2 | 0, im = 0, 1 == Jm)
          for (Rm = 0, bm = bm[0], Vm++;
            (im < Qm || Rm) && Vm--; im++) Im = Rm * ja + (km[im] || 0), Om[im] = Im / bm | 0, Rm = Im % bm | 0;
        else {
          for ((Rm = ja / (bm[0] + 1) | 0) > 1 && (bm = mm(bm, Rm), km = mm(km, Rm), Jm = bm.length, Qm = km.length), Km = Jm, qm = (Ym = km.slice(0, Jm)).length; qm < Jm;) Ym[qm++] = 0;
          (cm = bm.slice()).unshift(0), nm = bm[0], bm[1] >= ja / 2 && ++nm;
          do {
            Rm = 0, (wm = Tm(bm, Ym, Jm, qm)) < 0 ? (jm = Ym[0], Jm != qm && (jm = jm * ja + (Ym[1] || 0)), (Rm = jm / nm | 0) > 1 ? (Rm >= ja && (Rm = ja - 1), 1 == (wm = Tm(pm = mm(bm, Rm), Ym, Em = pm.length, qm = Ym.length)) && (Rm--, fm(pm, Jm < Em ? cm : bm, Em))) : (0 == Rm && (wm = Rm = 1), pm = bm.slice()), (Em = pm.length) < qm && pm.unshift(0), fm(Ym, pm, qm), -1 == wm && (wm = Tm(bm, Ym, Jm, qm = Ym.length)) < 1 && (Rm++, fm(Ym, Jm < qm ? cm : bm, qm)), qm = Ym.length) : 0 === wm && (Rm++, Ym = [0]), Om[im++] = Rm, wm && Ym[0] ? Ym[qm++] = km[Km] || 0 : (Ym = [km[Km]], qm = 1)
          } while ((Km++ < Qm || void 0 !== Ym[0]) && Vm--)
        }
        return Om[0] || Om.shift(), om.e = Dm, Na(om, xm ? am + Za(om) + 1 : am)
      }
    }();

    function za(mm, Tm) {
      var fm, hm, Am, am, xm, wm = 0,
        Dm = 0,
        im = mm.constructor,
        Rm = im.precision;
      if (Za(mm) > 16) throw Error(oa + Za(mm));
      if (!mm.s) return new im(Da);
      for (null == Tm ? (Ra = !1, xm = Rm) : xm = Tm, am = new im(.03125); mm.abs().gte(.1);) mm = mm.times(am), Dm += 5;
      for (xm += Math.log(Ya(2, Dm)) / Math.LN10 * 2 + 5 | 0, fm = hm = Am = new im(Da), im.precision = xm;;) {
        if (hm = Na(hm.times(mm), xm), fm = fm.times(++wm), Ja((am = Am.plus(ca(hm, fm, xm))).d).slice(0, xm) === Ja(Am.d).slice(0, xm)) {
          for (; Dm--;) Am = Na(Am.times(Am), xm);
          return im.precision = Rm, null == Tm ? (Ra = !0, Na(Am, Rm)) : Am
        }
        Am = am
      }
    }

    function Za(mm) {
      for (var Tm = 7 * mm.e, fm = mm.d[0]; fm >= 10; fm /= 10) Tm++;
      return Tm
    }

    function ka(mm, Tm, fm) {
      if (Tm > mm.LN10.sd()) throw Ra = !0, fm && (mm.precision = fm), Error(pa + "LN10 precision limit exceeded");
      return Na(new mm(mm.LN10), Tm)
    }

    function ba(mm) {
      for (var Tm = ""; mm--;) Tm += "0";
      return Tm
    }

    function Sa(mm, Tm) {
      var fm, hm, Am, am, xm, wm, Dm, im, Rm, pm = 1,
        Em = mm,
        om = Em.d,
        Om = Em.constructor,
        Ym = Om.precision;
      if (Em.s < 1) throw Error(pa + (Em.s ? "NaN" : "-Infinity"));
      if (Em.eq(Da)) return new Om(0);
      if (null == Tm ? (Ra = !1, im = Ym) : im = Tm, Em.eq(10)) return null == Tm && (Ra = !0), ka(Om, im);
      if (im += 10, Om.precision = im, hm = (fm = Ja(om)).charAt(0), am = Za(Em), !(Math.abs(am) < 15e14)) return Dm = ka(Om, im + 2, Ym).times(am + ""), Em = Sa(new Om(hm + "." + fm.slice(1)), im - 10).plus(Dm), Om.precision = Ym, null == Tm ? (Ra = !0, Na(Em, Ym)) : Em;
      for (; hm < 7 && 1 != hm || 1 == hm && fm.charAt(1) > 3;) hm = (fm = Ja((Em = Em.times(mm)).d)).charAt(0), pm++;
      for (am = Za(Em), hm > 1 ? (Em = new Om("0." + fm), am++) : Em = new Om(hm + "." + fm.slice(1)), wm = xm = Em = ca(Em.minus(Da), Em.plus(Da), im), Rm = Na(Em.times(Em), im), Am = 3;;) {
        if (xm = Na(xm.times(Rm), im), Ja((Dm = wm.plus(ca(xm, new Om(Am), im))).d).slice(0, im) === Ja(wm.d).slice(0, im)) return wm = wm.times(2), 0 !== am && (wm = wm.plus(ka(Om, im + 2, Ym).times(am + ""))), wm = ca(wm, new Om(pm), im), Om.precision = Ym, null == Tm ? (Ra = !0, Na(wm, Ym)) : wm;
        wm = Dm, Am += 2
      }
    }

    function ea(mm, Tm) {
      var fm, hm, Am;
      for ((fm = Tm.indexOf(".")) > -1 && (Tm = Tm.replace(".", "")), (hm = Tm.search(/e/i)) > 0 ? (fm < 0 && (fm = hm), fm += +Tm.slice(hm + 1), Tm = Tm.substring(0, hm)) : fm < 0 && (fm = Tm.length), hm = 0; 48 === Tm.charCodeAt(hm);) ++hm;
      for (Am = Tm.length; 48 === Tm.charCodeAt(Am - 1);) --Am;
      if (Tm = Tm.slice(hm, Am)) {
        if (Am -= hm, fm = fm - hm - 1, mm.e = Oa(fm / 7), mm.d = [], hm = (fm + 1) % 7, fm < 0 && (hm += 7), hm < Am) {
          for (hm && mm.d.push(+Tm.slice(0, hm)), Am -= 7; hm < Am;) mm.d.push(+Tm.slice(hm, hm += 7));
          hm = 7 - (Tm = Tm.slice(hm)).length
        } else hm -= Am;
        for (; hm--;) Tm += "0";
        if (mm.d.push(+Tm), Ra && (mm.e > Ia || mm.e < -Ia)) throw Error(oa + fm)
      } else mm.s = 0, mm.e = 0, mm.d = [0];
      return mm
    }

    function Na(mm, Tm, fm) {
      var hm, Am, am, xm, wm, Dm, im, Rm, pm = mm.d;
      for (xm = 1, am = pm[0]; am >= 10; am /= 10) xm++;
      if ((hm = Tm - xm) < 0) hm += 7, Am = Tm, im = pm[Rm = 0];
      else {
        if ((Rm = Math.ceil((hm + 1) / 7)) >= (am = pm.length)) return mm;
        for (im = am = pm[Rm], xm = 1; am >= 10; am /= 10) xm++;
        Am = (hm %= 7) - 7 + xm
      }
      if (void 0 !== fm && (wm = im / (am = Ya(10, xm - Am - 1)) % 10 | 0, Dm = Tm < 0 || void 0 !== pm[Rm + 1] || im % am, Dm = fm < 4 ? (wm || Dm) && (0 == fm || fm == (mm.s < 0 ? 3 : 2)) : wm > 5 || 5 == wm && (4 == fm || Dm || 6 == fm && (hm > 0 ? Am > 0 ? im / Ya(10, xm - Am) : 0 : pm[Rm - 1]) % 10 & 1 || fm == (mm.s < 0 ? 8 : 7))), Tm < 1 || !pm[0]) return Dm ? (am = Za(mm), pm.length = 1, Tm = Tm - am - 1, pm[0] = Ya(10, (7 - Tm % 7) % 7), mm.e = Oa(-Tm / 7) || 0) : (pm.length = 1, pm[0] = mm.e = mm.s = 0), mm;
      if (0 == hm ? (pm.length = Rm, am = 1, Rm--) : (pm.length = Rm + 1, am = Ya(10, 7 - hm), pm[Rm] = Am > 0 ? (im / Ya(10, xm - Am) % Ya(10, Am) | 0) * am : 0), Dm)
        for (;;) {
          if (0 == Rm) {
            (pm[0] += am) == ja && (pm[0] = 1, ++mm.e);
            break
          }
          if (pm[Rm] += am, pm[Rm] != ja) break;
          pm[Rm--] = 0, am = 1
        }
      for (hm = pm.length; 0 === pm[--hm];) pm.pop();
      if (Ra && (mm.e > Ia || mm.e < -Ia)) throw Error(oa + Za(mm));
      return mm
    }

    function Ga(mm, Tm) {
      var fm, hm, Am, am, xm, wm, Dm, im, Rm, pm, Em = mm.constructor,
        om = Em.precision;
      if (!mm.s || !Tm.s) return Tm.s ? Tm.s = -Tm.s : Tm = new Em(mm), Ra ? Na(Tm, om) : Tm;
      if (Dm = mm.d, pm = Tm.d, hm = Tm.e, im = mm.e, Dm = Dm.slice(), xm = im - hm) {
        for ((Rm = xm < 0) ? (fm = Dm, xm = -xm, wm = pm.length) : (fm = pm, hm = im, wm = Dm.length), xm > (Am = Math.max(Math.ceil(om / 7), wm) + 2) && (xm = Am, fm.length = 1), fm.reverse(), Am = xm; Am--;) fm.push(0);
        fm.reverse()
      } else {
        for ((Rm = (Am = Dm.length) < (wm = pm.length)) && (wm = Am), Am = 0; Am < wm; Am++)
          if (Dm[Am] != pm[Am]) {
            Rm = Dm[Am] < pm[Am];
            break
          } xm = 0
      }
      for (Rm && (fm = Dm, Dm = pm, pm = fm, Tm.s = -Tm.s), wm = Dm.length, Am = pm.length - wm; Am > 0; --Am) Dm[wm++] = 0;
      for (Am = pm.length; Am > xm;) {
        if (Dm[--Am] < pm[Am]) {
          for (am = Am; am && 0 === Dm[--am];) Dm[am] = ja - 1;
          --Dm[am], Dm[Am] += ja
        }
        Dm[Am] -= pm[Am]
      }
      for (; 0 === Dm[--wm];) Dm.pop();
      for (; 0 === Dm[0]; Dm.shift()) --hm;
      return Dm[0] ? (Tm.d = Dm, Tm.e = hm, Ra ? Na(Tm, om) : Tm) : new Em(0)
    }

    function Xa(mm, Tm, fm) {
      var hm, Am = Za(mm),
        am = Ja(mm.d),
        xm = am.length;
      return Tm ? (fm && (hm = fm - xm) > 0 ? am = am.charAt(0) + "." + am.slice(1) + ba(hm) : xm > 1 && (am = am.charAt(0) + "." + am.slice(1)), am = am + (Am < 0 ? "e" : "e+") + Am) : Am < 0 ? (am = "0." + ba(-Am - 1) + am, fm && (hm = fm - xm) > 0 && (am += ba(hm))) : Am >= xm ? (am += ba(Am + 1 - xm), fm && (hm = fm - Am - 1) > 0 && (am = am + "." + ba(hm))) : ((hm = Am + 1) < xm && (am = am.slice(0, hm) + "." + am.slice(hm)), fm && (hm = fm - xm) > 0 && (Am + 1 === xm && (am += "."), am += ba(hm))), mm.s < 0 ? "-" + am : am
    }

    function Pa(mm, Tm) {
      if (mm.length > Tm) return mm.length = Tm, !0
    }

    function Ha(mm) {
      if (!mm || "object" !== typeof mm) throw Error(pa + "Object expected");
      var Tm, fm, hm, Am = ["precision", 1, ia, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (Tm = 0; Tm < Am.length; Tm += 3)
        if (void 0 !== (hm = mm[fm = Am[Tm]])) {
          if (!(Oa(hm) === hm && hm >= Am[Tm + 1] && hm <= Am[Tm + 2])) throw Error(Ea + fm + ": " + hm);
          this[fm] = hm
        } if (void 0 !== (hm = mm[fm = "LN10"])) {
        if (hm != Math.LN10) throw Error(Ea + fm + ": " + hm);
        this[fm] = new this(hm)
      }
      return this
    }
    var ya = function mm(Tm) {
      var fm, hm, Am;

      function am(mm) {
        var Tm = this;
        if (!(Tm instanceof am)) return new am(mm);
        if (Tm.constructor = am, mm instanceof am) return Tm.s = mm.s, Tm.e = mm.e, void(Tm.d = (mm = mm.d) ? mm.slice() : mm);
        if ("number" === typeof mm) {
          if (0 * mm !== 0) throw Error(Ea + mm);
          if (mm > 0) Tm.s = 1;
          else {
            if (!(mm < 0)) return Tm.s = 0, Tm.e = 0, void(Tm.d = [0]);
            mm = -mm, Tm.s = -1
          }
          return mm === ~~mm && mm < 1e7 ? (Tm.e = 0, void(Tm.d = [mm])) : ea(Tm, mm.toString())
        }
        if ("string" !== typeof mm) throw Error(Ea + mm);
        if (45 === mm.charCodeAt(0) ? (mm = mm.slice(1), Tm.s = -1) : Tm.s = 1, !qa.test(mm)) throw Error(Ea + mm);
        ea(Tm, mm)
      }
      if (am.prototype = Ka, am.ROUND_UP = 0, am.ROUND_DOWN = 1, am.ROUND_CEIL = 2, am.ROUND_FLOOR = 3, am.ROUND_HALF_UP = 4, am.ROUND_HALF_DOWN = 5, am.ROUND_HALF_EVEN = 6, am.ROUND_HALF_CEIL = 7, am.ROUND_HALF_FLOOR = 8, am.clone = mm, am.config = am.set = Ha, void 0 === Tm && (Tm = {}), Tm)
        for (Am = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], fm = 0; fm < Am.length;) Tm.hasOwnProperty(hm = Am[fm++]) || (Tm[hm] = this[hm]);
      return am.config(Tm), am
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    Da = new ya(1);
    var Ca;
    ! function(mm) {
      mm.AED = "aed", mm.AFN = "afn", mm.ALL = "all", mm.AMD = "amd", mm.ANG = "ang", mm.AOA = "aoa", mm.ARS = "ars", mm.AUD = "aud", mm.AWG = "awg", mm.AZN = "azn", mm.BAM = "bam", mm.BBD = "bbd", mm.BDT = "bdt", mm.BGN = "bgn", mm.BHD = "bhd", mm.BIF = "bif", mm.BMD = "bmd", mm.BND = "bnd", mm.BOB = "bob", mm.BOV = "bov", mm.BRL = "brl", mm.BSD = "bsd", mm.BTN = "btn", mm.BWP = "bwp", mm.BYN = "byn", mm.BYR = "byr", mm.BZD = "bzd", mm.CAD = "cad", mm.CDF = "cdf", mm.CHE = "che", mm.CHF = "chf", mm.CHW = "chw", mm.CLF = "clf", mm.CLP = "clp", mm.CNY = "cny", mm.COP = "cop", mm.COU = "cou", mm.CRC = "crc", mm.CUC = "cuc", mm.CUP = "cup", mm.CVE = "cve", mm.CZK = "czk", mm.DJF = "djf", mm.DKK = "dkk", mm.DOP = "dop", mm.DZD = "dzd", mm.EGP = "egp", mm.ERN = "ern", mm.ETB = "etb", mm.EUR = "eur", mm.FJD = "fjd", mm.FKP = "fkp", mm.GBP = "gbp", mm.GEL = "gel", mm.GHS = "ghs", mm.GIP = "gip", mm.GMD = "gmd", mm.GNF = "gnf", mm.GTQ = "gtq", mm.GYD = "gyd", mm.HKD = "hkd", mm.HNL = "hnl", mm.HRK = "hrk", mm.HTG = "htg", mm.HUF = "huf", mm.IDR = "idr", mm.ILS = "ils", mm.INR = "inr", mm.IQD = "iqd", mm.IRR = "irr", mm.ISK = "isk", mm.JMD = "jmd", mm.JOD = "jod", mm.JPY = "jpy", mm.KES = "kes", mm.KGS = "kgs", mm.KHR = "khr", mm.KMF = "kmf", mm.KPW = "kpw", mm.KRW = "krw", mm.KWD = "kwd", mm.KYD = "kyd", mm.KZT = "kzt", mm.LAK = "lak", mm.LBP = "lbp", mm.LKR = "lkr", mm.LRD = "lrd", mm.LSL = "lsl", mm.LTL = "ltl", mm.LVL = "lvl", mm.LYD = "lyd", mm.MAD = "mad", mm.MDL = "mdl", mm.MGA = "mga", mm.MKD = "mkd", mm.MMK = "mmk", mm.MNT = "mnt", mm.MOP = "mop", mm.MRO = "mro", mm.MUR = "mur", mm.MVR = "mvr", mm.MWK = "mwk", mm.MXN = "mxn", mm.MXV = "mxv", mm.MYR = "myr", mm.MZN = "mzn", mm.NAD = "nad", mm.NGN = "ngn", mm.NIO = "nio", mm.NOK = "nok", mm.NPR = "npr", mm.NZD = "nzd", mm.OMR = "omr", mm.PAB = "pab", mm.PEN = "pen", mm.PGK = "pgk", mm.PHP = "php", mm.PKR = "pkr", mm.PLN = "pln", mm.PYG = "pyg", mm.QAR = "qar", mm.RON = "ron", mm.RSD = "rsd", mm.RUB = "rub", mm.RWF = "rwf", mm.SAR = "sar", mm.SBD = "sbd", mm.SCR = "scr", mm.SDG = "sdg", mm.SEK = "sek", mm.SGD = "sgd", mm.SHP = "shp", mm.SLL = "sll", mm.SOS = "sos", mm.SRD = "srd", mm.SSP = "ssp", mm.STD = "std", mm.SVC = "svc", mm.SYP = "syp", mm.SZL = "szl", mm.THB = "thb", mm.TJS = "tjs", mm.TMT = "tmt", mm.TND = "tnd", mm.TOP = "top", mm.TRY = "try", mm.TTD = "ttd", mm.TWD = "twd", mm.TZS = "tzs", mm.UAH = "uah", mm.UGX = "ugx", mm.USD = "usd", mm.USN = "usn", mm.USS = "uss", mm.UYI = "uyi", mm.UYU = "uyu", mm.UZS = "uzs", mm.VEF = "vef", mm.VND = "vnd", mm.VUV = "vuv", mm.WST = "wst", mm.XAF = "xaf", mm.XAG = "xag", mm.XAU = "xau", mm.XBA = "xba", mm.XBB = "xbb", mm.XBC = "xbc", mm.XBD = "xbd", mm.XCD = "xcd", mm.XDR = "xdr", mm.XFU = "xfu", mm.XOF = "xof", mm.XPD = "xpd", mm.XPF = "xpf", mm.XPT = "xpt", mm.XSU = "xsu", mm.XTS = "xts", mm.XUA = "xua", mm.YER = "yer", mm.ZAR = "zar", mm.ZMW = "zmw", mm.ZWL = "zwl"
    }(Ca || (Ca = {}));
    Ca.AED, Ca.AFN, Ca.ALL, Ca.AMD, Ca.ANG, Ca.AOA, Ca.ARS, Ca.AUD, Ca.AWG, Ca.AZN, Ca.BAM, Ca.BBD, Ca.BDT, Ca.BGN, Ca.BHD, Ca.BIF, Ca.BMD, Ca.BND, Ca.BOB, Ca.BOV, Ca.BRL, Ca.BSD, Ca.BTN, Ca.BWP, Ca.BYR, Ca.BYN, Ca.BZD, Ca.CAD, Ca.CDF, Ca.CHE, Ca.CHF, Ca.CHW, Ca.CLF, Ca.CLP, Ca.CNY, Ca.COP, Ca.COU, Ca.CRC, Ca.CUC, Ca.CUP, Ca.CVE, Ca.CZK, Ca.DJF, Ca.DKK, Ca.DOP, Ca.DZD, Ca.EGP, Ca.ERN, Ca.ETB, Ca.EUR, Ca.FJD, Ca.FKP, Ca.GBP, Ca.GEL, Ca.GHS, Ca.GIP, Ca.GMD, Ca.GNF, Ca.GTQ, Ca.GYD, Ca.HKD, Ca.HNL, Ca.HRK, Ca.HTG, Ca.HUF, Ca.IDR, Ca.ILS, Ca.INR, Ca.IQD, Ca.IRR, Ca.ISK, Ca.JMD, Ca.JOD, Ca.JPY, Ca.KES, Ca.KGS, Ca.KHR, Ca.KMF, Ca.KPW, Ca.KRW, Ca.KWD, Ca.KYD, Ca.KZT, Ca.LAK, Ca.LBP, Ca.LKR, Ca.LRD, Ca.LSL, Ca.LTL, Ca.LVL, Ca.LYD, Ca.MAD, Ca.MDL, Ca.MGA, Ca.MKD, Ca.MMK, Ca.MNT, Ca.MOP, Ca.MRO, Ca.MUR, Ca.MVR, Ca.MWK, Ca.MXN, Ca.MXV, Ca.MYR, Ca.MZN, Ca.NAD, Ca.NGN, Ca.NIO, Ca.NOK, Ca.NPR, Ca.NZD, Ca.OMR, Ca.PAB, Ca.PEN, Ca.PGK, Ca.PHP, Ca.PKR, Ca.PLN, Ca.PYG, Ca.QAR, Ca.RON, Ca.RSD, Ca.RUB, Ca.RWF, Ca.SAR, Ca.SBD, Ca.SCR, Ca.SDG, Ca.SEK, Ca.SGD, Ca.SHP, Ca.SLL, Ca.SOS, Ca.SRD, Ca.SSP, Ca.STD, Ca.SVC, Ca.SYP, Ca.SZL, Ca.THB, Ca.TJS, Ca.TMT, Ca.TND, Ca.TOP, Ca.TRY, Ca.TTD, Ca.TWD, Ca.TZS, Ca.UAH, Ca.UGX, Ca.USD, Ca.USN, Ca.USS, Ca.UYI, Ca.UYU, Ca.UZS, Ca.VEF, Ca.VND, Ca.VUV, Ca.WST, Ca.XAF, Ca.XAG, Ca.XAU, Ca.XBA, Ca.XBB, Ca.XBC, Ca.XBD, Ca.XCD, Ca.XDR, Ca.XFU, Ca.XOF, Ca.XPD, Ca.XPF, Ca.XPT, Ca.XSU, Ca.XTS, Ca.XUA, Ca.YER, Ca.ZAR, Ca.ZMW, Ca.ZWL;
    var ra = {
      exports: {}
    };
    ! function(mm, Tm) {
      var fm = "__lodash_hash_undefined__",
        hm = 9007199254740991,
        am = "[object Arguments]",
        xm = "[object Array]",
        wm = "[object Boolean]",
        Dm = "[object Date]",
        im = "[object Error]",
        Rm = "[object Function]",
        pm = "[object Map]",
        Em = "[object Number]",
        om = "[object Object]",
        Om = "[object Promise]",
        Ym = "[object RegExp]",
        qm = "[object Set]",
        jm = "[object String]",
        Vm = "[object Symbol]",
        Im = "[object WeakMap]",
        Km = "[object ArrayBuffer]",
        Qm = "[object DataView]",
        nm = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Jm = /^\w*$/,
        cm = /^\./,
        zm = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Zm = /\\(\\)?/g,
        km = /^\[object .+?Constructor\]$/,
        bm = /^(?:0|[1-9]\d*)$/,
        Sm = {};
      Sm["[object Float32Array]"] = Sm["[object Float64Array]"] = Sm["[object Int8Array]"] = Sm["[object Int16Array]"] = Sm["[object Int32Array]"] = Sm["[object Uint8Array]"] = Sm["[object Uint8ClampedArray]"] = Sm["[object Uint16Array]"] = Sm["[object Uint32Array]"] = !0, Sm[am] = Sm[xm] = Sm[Km] = Sm[wm] = Sm[Qm] = Sm[Dm] = Sm[im] = Sm[Rm] = Sm[pm] = Sm[Em] = Sm[om] = Sm[Ym] = Sm[qm] = Sm[jm] = Sm[Im] = !1;
      var em = "object" == typeof Am && Am && Am.Object === Object && Am,
        Nm = "object" == typeof self && self && self.Object === Object && self,
        Gm = em || Nm || Function("return this")(),
        Xm = Tm && !Tm.nodeType && Tm,
        Pm = Xm && mm && !mm.nodeType && mm,
        Hm = Pm && Pm.exports === Xm && em.process,
        ym = function() {
          try {
            return Hm && Hm.binding("util")
          } catch (mm) {}
        }(),
        Cm = ym && ym.isTypedArray;

      function rm(mm, Tm) {
        for (var fm = -1, hm = mm ? mm.length : 0; ++fm < hm && !1 !== Tm(mm[fm], fm, mm););
        return mm
      }

      function sm(mm, Tm) {
        for (var fm = -1, hm = mm ? mm.length : 0; ++fm < hm;)
          if (Tm(mm[fm], fm, mm)) return !0;
        return !1
      }

      function lm(mm) {
        var Tm = !1;
        if (null != mm && "function" != typeof mm.toString) try {
          Tm = !!(mm + "")
        } catch (fm) {}
        return Tm
      }

      function Mm(mm) {
        var Tm = -1,
          fm = Array(mm.size);
        return mm.forEach((function(mm, hm) {
          fm[++Tm] = [hm, mm]
        })), fm
      }

      function um(mm, Tm) {
        return function(fm) {
          return mm(Tm(fm))
        }
      }

      function Bm(mm) {
        var Tm = -1,
          fm = Array(mm.size);
        return mm.forEach((function(mm) {
          fm[++Tm] = mm
        })), fm
      }
      var Lm = Array.prototype,
        tm = Function.prototype,
        Um = Object.prototype,
        dm = Gm["__core-js_shared__"],
        gm = function() {
          var mm = /[^.]+$/.exec(dm && dm.keys && dm.keys.IE_PROTO || "");
          return mm ? "Symbol(src)_1." + mm : ""
        }(),
        Wm = tm.toString,
        Fm = Um.hasOwnProperty,
        mT = Um.toString,
        TT = RegExp("^" + Wm.call(Fm).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        fT = Gm.Symbol,
        hT = Gm.Uint8Array,
        AT = um(Object.getPrototypeOf, Object),
        aT = Object.create,
        xT = Um.propertyIsEnumerable,
        wT = Lm.splice,
        DT = um(Object.keys, Object),
        iT = uT(Gm, "DataView"),
        RT = uT(Gm, "Map"),
        pT = uT(Gm, "Promise"),
        ET = uT(Gm, "Set"),
        oT = uT(Gm, "WeakMap"),
        OT = uT(Object, "create"),
        YT = WT(iT),
        qT = WT(RT),
        jT = WT(pT),
        VT = WT(ET),
        IT = WT(oT),
        KT = fT ? fT.prototype : void 0,
        QT = KT ? KT.valueOf : void 0,
        nT = KT ? KT.toString : void 0;

      function JT(mm) {
        var Tm = -1,
          fm = mm ? mm.length : 0;
        for (this.clear(); ++Tm < fm;) {
          var hm = mm[Tm];
          this.set(hm[0], hm[1])
        }
      }

      function cT(mm) {
        var Tm = -1,
          fm = mm ? mm.length : 0;
        for (this.clear(); ++Tm < fm;) {
          var hm = mm[Tm];
          this.set(hm[0], hm[1])
        }
      }

      function zT(mm) {
        var Tm = -1,
          fm = mm ? mm.length : 0;
        for (this.clear(); ++Tm < fm;) {
          var hm = mm[Tm];
          this.set(hm[0], hm[1])
        }
      }

      function ZT(mm) {
        var Tm = -1,
          fm = mm ? mm.length : 0;
        for (this.__data__ = new zT; ++Tm < fm;) this.add(mm[Tm])
      }

      function kT(mm) {
        this.__data__ = new cT(mm)
      }

      function bT(mm, Tm) {
        var fm = ff(mm) || Tf(mm) ? function(mm, Tm) {
            for (var fm = -1, hm = Array(mm); ++fm < mm;) hm[fm] = Tm(fm);
            return hm
          }(mm.length, String) : [],
          hm = fm.length,
          Am = !!hm;
        for (var am in mm) !Tm && !Fm.call(mm, am) || Am && ("length" == am || LT(am, hm)) || fm.push(am);
        return fm
      }

      function ST(mm, Tm) {
        for (var fm = mm.length; fm--;)
          if (mf(mm[fm][0], Tm)) return fm;
        return -1
      }
      JT.prototype.clear = function() {
        this.__data__ = OT ? OT(null) : {}
      }, JT.prototype.delete = function(mm) {
        return this.has(mm) && delete this.__data__[mm]
      }, JT.prototype.get = function(mm) {
        var Tm = this.__data__;
        if (OT) {
          var hm = Tm[mm];
          return hm === fm ? void 0 : hm
        }
        return Fm.call(Tm, mm) ? Tm[mm] : void 0
      }, JT.prototype.has = function(mm) {
        var Tm = this.__data__;
        return OT ? void 0 !== Tm[mm] : Fm.call(Tm, mm)
      }, JT.prototype.set = function(mm, Tm) {
        return this.__data__[mm] = OT && void 0 === Tm ? fm : Tm, this
      }, cT.prototype.clear = function() {
        this.__data__ = []
      }, cT.prototype.delete = function(mm) {
        var Tm = this.__data__,
          fm = ST(Tm, mm);
        return !(fm < 0) && (fm == Tm.length - 1 ? Tm.pop() : wT.call(Tm, fm, 1), !0)
      }, cT.prototype.get = function(mm) {
        var Tm = this.__data__,
          fm = ST(Tm, mm);
        return fm < 0 ? void 0 : Tm[fm][1]
      }, cT.prototype.has = function(mm) {
        return ST(this.__data__, mm) > -1
      }, cT.prototype.set = function(mm, Tm) {
        var fm = this.__data__,
          hm = ST(fm, mm);
        return hm < 0 ? fm.push([mm, Tm]) : fm[hm][1] = Tm, this
      }, zT.prototype.clear = function() {
        this.__data__ = {
          hash: new JT,
          map: new(RT || cT),
          string: new JT
        }
      }, zT.prototype.delete = function(mm) {
        return MT(this, mm).delete(mm)
      }, zT.prototype.get = function(mm) {
        return MT(this, mm).get(mm)
      }, zT.prototype.has = function(mm) {
        return MT(this, mm).has(mm)
      }, zT.prototype.set = function(mm, Tm) {
        return MT(this, mm).set(mm, Tm), this
      }, ZT.prototype.add = ZT.prototype.push = function(mm) {
        return this.__data__.set(mm, fm), this
      }, ZT.prototype.has = function(mm) {
        return this.__data__.has(mm)
      }, kT.prototype.clear = function() {
        this.__data__ = new cT
      }, kT.prototype.delete = function(mm) {
        return this.__data__.delete(mm)
      }, kT.prototype.get = function(mm) {
        return this.__data__.get(mm)
      }, kT.prototype.has = function(mm) {
        return this.__data__.has(mm)
      }, kT.prototype.set = function(mm, Tm) {
        var fm = this.__data__;
        if (fm instanceof cT) {
          var hm = fm.__data__;
          if (!RT || hm.length < 199) return hm.push([mm, Tm]), this;
          fm = this.__data__ = new zT(hm)
        }
        return fm.set(mm, Tm), this
      };
      var eT, NT = function(mm, Tm, fm) {
        for (var hm = -1, Am = Object(mm), am = fm(mm), xm = am.length; xm--;) {
          var wm = am[eT ? xm : ++hm];
          if (!1 === Tm(Am[wm], wm, Am)) break
        }
        return mm
      };

      function GT(mm, Tm) {
        return mm && NT(mm, Tm, Ef)
      }

      function XT(mm, Tm) {
        for (var fm = 0, hm = (Tm = vT(Tm, mm) ? [Tm] : sT(Tm)).length; null != mm && fm < hm;) mm = mm[gT(Tm[fm++])];
        return fm && fm == hm ? mm : void 0
      }

      function PT(mm, Tm) {
        return null != mm && Tm in Object(mm)
      }

      function HT(mm, Tm, fm, hm, Am) {
        return mm === Tm || (null == mm || null == Tm || !xf(mm) && !wf(Tm) ? mm !== mm && Tm !== Tm : function(mm, Tm, fm, hm, Am, Rm) {
          var Om = ff(mm),
            Im = ff(Tm),
            nm = xm,
            Jm = xm;
          Om || (nm = (nm = BT(mm)) == am ? om : nm);
          Im || (Jm = (Jm = BT(Tm)) == am ? om : Jm);
          var cm = nm == om && !lm(mm),
            zm = Jm == om && !lm(Tm),
            Zm = nm == Jm;
          if (Zm && !cm) return Rm || (Rm = new kT), Om || pf(mm) ? lT(mm, Tm, fm, hm, Am, Rm) : function(mm, Tm, fm, hm, Am, am, xm) {
            switch (fm) {
              case Qm:
                if (mm.byteLength != Tm.byteLength || mm.byteOffset != Tm.byteOffset) return !1;
                mm = mm.buffer, Tm = Tm.buffer;
              case Km:
                return !(mm.byteLength != Tm.byteLength || !hm(new hT(mm), new hT(Tm)));
              case wm:
              case Dm:
              case Em:
                return mf(+mm, +Tm);
              case im:
                return mm.name == Tm.name && mm.message == Tm.message;
              case Ym:
              case jm:
                return mm == Tm + "";
              case pm:
                var Rm = Mm;
              case qm:
                var om = 2 & am;
                if (Rm || (Rm = Bm), mm.size != Tm.size && !om) return !1;
                var Om = xm.get(mm);
                if (Om) return Om == Tm;
                am |= 1, xm.set(mm, Tm);
                var Im = lT(Rm(mm), Rm(Tm), hm, Am, am, xm);
                return xm.delete(mm), Im;
              case Vm:
                if (QT) return QT.call(mm) == QT.call(Tm)
            }
            return !1
          }(mm, Tm, nm, fm, hm, Am, Rm);
          if (!(2 & Am)) {
            var km = cm && Fm.call(mm, "__wrapped__"),
              bm = zm && Fm.call(Tm, "__wrapped__");
            if (km || bm) {
              var Sm = km ? mm.value() : mm,
                em = bm ? Tm.value() : Tm;
              return Rm || (Rm = new kT), fm(Sm, em, hm, Am, Rm)
            }
          }
          if (!Zm) return !1;
          return Rm || (Rm = new kT),
            function(mm, Tm, fm, hm, Am, am) {
              var xm = 2 & Am,
                wm = Ef(mm),
                Dm = wm.length,
                im = Ef(Tm),
                Rm = im.length;
              if (Dm != Rm && !xm) return !1;
              var pm = Dm;
              for (; pm--;) {
                var Em = wm[pm];
                if (!(xm ? Em in Tm : Fm.call(Tm, Em))) return !1
              }
              var om = am.get(mm);
              if (om && am.get(Tm)) return om == Tm;
              var Om = !0;
              am.set(mm, Tm), am.set(Tm, mm);
              var Ym = xm;
              for (; ++pm < Dm;) {
                var qm = mm[Em = wm[pm]],
                  jm = Tm[Em];
                if (hm) var Vm = xm ? hm(jm, qm, Em, Tm, mm, am) : hm(qm, jm, Em, mm, Tm, am);
                if (!(void 0 === Vm ? qm === jm || fm(qm, jm, hm, Am, am) : Vm)) {
                  Om = !1;
                  break
                }
                Ym || (Ym = "constructor" == Em)
              }
              if (Om && !Ym) {
                var Im = mm.constructor,
                  Km = Tm.constructor;
                Im == Km || !("constructor" in mm) || !("constructor" in Tm) || "function" == typeof Im && Im instanceof Im && "function" == typeof Km && Km instanceof Km || (Om = !1)
              }
              return am.delete(mm), am.delete(Tm), Om
            }(mm, Tm, fm, hm, Am, Rm)
        }(mm, Tm, HT, fm, hm, Am))
      }

      function yT(mm) {
        return !(!xf(mm) || (Tm = mm, gm && gm in Tm)) && (Af(mm) || lm(mm) ? TT : km).test(WT(mm));
        var Tm
      }

      function CT(mm) {
        return "function" == typeof mm ? mm : null == mm ? of : "object" == typeof mm ? ff(mm) ? function(mm, Tm) {
          if (vT(mm) && tT(Tm)) return UT(gT(mm), Tm);
          return function(fm) {
            var hm = function(mm, Tm, fm) {
              var hm = null == mm ? void 0 : XT(mm, Tm);
              return void 0 === hm ? fm : hm
            }(fm, mm);
            return void 0 === hm && hm === Tm ? function(mm, Tm) {
              return null != mm && function(mm, Tm, fm) {
                Tm = vT(Tm, mm) ? [Tm] : sT(Tm);
                var hm, Am = -1,
                  am = Tm.length;
                for (; ++Am < am;) {
                  var xm = gT(Tm[Am]);
                  if (!(hm = null != mm && fm(mm, xm))) break;
                  mm = mm[xm]
                }
                if (hm) return hm;
                am = mm ? mm.length : 0;
                return !!am && af(am) && LT(xm, am) && (ff(mm) || Tf(mm))
              }(mm, Tm, PT)
            }(fm, mm) : HT(Tm, hm, void 0, 3)
          }
        }(mm[0], mm[1]) : function(mm) {
          var Tm = function(mm) {
            var Tm = Ef(mm),
              fm = Tm.length;
            for (; fm--;) {
              var hm = Tm[fm],
                Am = mm[hm];
              Tm[fm] = [hm, Am, tT(Am)]
            }
            return Tm
          }(mm);
          if (1 == Tm.length && Tm[0][2]) return UT(Tm[0][0], Tm[0][1]);
          return function(fm) {
            return fm === mm || function(mm, Tm, fm, hm) {
              var Am = fm.length,
                am = Am,
                xm = !hm;
              if (null == mm) return !am;
              for (mm = Object(mm); Am--;) {
                var wm = fm[Am];
                if (xm && wm[2] ? wm[1] !== mm[wm[0]] : !(wm[0] in mm)) return !1
              }
              for (; ++Am < am;) {
                var Dm = (wm = fm[Am])[0],
                  im = mm[Dm],
                  Rm = wm[1];
                if (xm && wm[2]) {
                  if (void 0 === im && !(Dm in mm)) return !1
                } else {
                  var pm = new kT;
                  if (hm) var Em = hm(im, Rm, Dm, mm, Tm, pm);
                  if (!(void 0 === Em ? HT(Rm, im, hm, 3, pm) : Em)) return !1
                }
              }
              return !0
            }(fm, mm, Tm)
          }
        }(mm) : function(mm) {
          return vT(mm) ? (Tm = gT(mm), function(mm) {
            return null == mm ? void 0 : mm[Tm]
          }) : function(mm) {
            return function(Tm) {
              return XT(Tm, mm)
            }
          }(mm);
          var Tm
        }(mm)
      }

      function rT(mm) {
        if (! function(mm) {
            var Tm = mm && mm.constructor,
              fm = "function" == typeof Tm && Tm.prototype || Um;
            return mm === fm
          }(mm)) return DT(mm);
        var Tm = [];
        for (var fm in Object(mm)) Fm.call(mm, fm) && "constructor" != fm && Tm.push(fm);
        return Tm
      }

      function sT(mm) {
        return ff(mm) ? mm : dT(mm)
      }

      function lT(mm, Tm, fm, hm, Am, am) {
        var xm = 2 & Am,
          wm = mm.length,
          Dm = Tm.length;
        if (wm != Dm && !(xm && Dm > wm)) return !1;
        var im = am.get(mm);
        if (im && am.get(Tm)) return im == Tm;
        var Rm = -1,
          pm = !0,
          Em = 1 & Am ? new ZT : void 0;
        for (am.set(mm, Tm), am.set(Tm, mm); ++Rm < wm;) {
          var om = mm[Rm],
            Om = Tm[Rm];
          if (hm) var Ym = xm ? hm(Om, om, Rm, Tm, mm, am) : hm(om, Om, Rm, mm, Tm, am);
          if (void 0 !== Ym) {
            if (Ym) continue;
            pm = !1;
            break
          }
          if (Em) {
            if (!sm(Tm, (function(mm, Tm) {
                if (!Em.has(Tm) && (om === mm || fm(om, mm, hm, Am, am))) return Em.add(Tm)
              }))) {
              pm = !1;
              break
            }
          } else if (om !== Om && !fm(om, Om, hm, Am, am)) {
            pm = !1;
            break
          }
        }
        return am.delete(mm), am.delete(Tm), pm
      }

      function MT(mm, Tm) {
        var fm = mm.__data__;
        return function(mm) {
          var Tm = typeof mm;
          return "string" == Tm || "number" == Tm || "symbol" == Tm || "boolean" == Tm ? "__proto__" !== mm : null === mm
        }(Tm) ? fm["string" == typeof Tm ? "string" : "hash"] : fm.map
      }

      function uT(mm, Tm) {
        var fm = function(mm, Tm) {
          return null == mm ? void 0 : mm[Tm]
        }(mm, Tm);
        return yT(fm) ? fm : void 0
      }
      var BT = function(mm) {
        return mT.call(mm)
      };

      function LT(mm, Tm) {
        return !!(Tm = null == Tm ? hm : Tm) && ("number" == typeof mm || bm.test(mm)) && mm > -1 && mm % 1 == 0 && mm < Tm
      }

      function vT(mm, Tm) {
        if (ff(mm)) return !1;
        var fm = typeof mm;
        return !("number" != fm && "symbol" != fm && "boolean" != fm && null != mm && !Df(mm)) || (Jm.test(mm) || !nm.test(mm) || null != Tm && mm in Object(Tm))
      }

      function tT(mm) {
        return mm === mm && !xf(mm)
      }

      function UT(mm, Tm) {
        return function(fm) {
          return null != fm && (fm[mm] === Tm && (void 0 !== Tm || mm in Object(fm)))
        }
      }(iT && BT(new iT(new ArrayBuffer(1))) != Qm || RT && BT(new RT) != pm || pT && BT(pT.resolve()) != Om || ET && BT(new ET) != qm || oT && BT(new oT) != Im) && (BT = function(mm) {
        var Tm = mT.call(mm),
          fm = Tm == om ? mm.constructor : void 0,
          hm = fm ? WT(fm) : void 0;
        if (hm) switch (hm) {
          case YT:
            return Qm;
          case qT:
            return pm;
          case jT:
            return Om;
          case VT:
            return qm;
          case IT:
            return Im
        }
        return Tm
      });
      var dT = FT((function(mm) {
        var Tm;
        mm = null == (Tm = mm) ? "" : function(mm) {
          if ("string" == typeof mm) return mm;
          if (Df(mm)) return nT ? nT.call(mm) : "";
          var Tm = mm + "";
          return "0" == Tm && 1 / mm == -1 / 0 ? "-0" : Tm
        }(Tm);
        var fm = [];
        return cm.test(mm) && fm.push(""), mm.replace(zm, (function(mm, Tm, hm, Am) {
          fm.push(hm ? Am.replace(Zm, "$1") : Tm || mm)
        })), fm
      }));

      function gT(mm) {
        if ("string" == typeof mm || Df(mm)) return mm;
        var Tm = mm + "";
        return "0" == Tm && 1 / mm == -1 / 0 ? "-0" : Tm
      }

      function WT(mm) {
        if (null != mm) {
          try {
            return Wm.call(mm)
          } catch (Tm) {}
          try {
            return mm + ""
          } catch (Tm) {}
        }
        return ""
      }

      function FT(mm, Tm) {
        if ("function" != typeof mm || Tm && "function" != typeof Tm) throw new TypeError("Expected a function");
        var fm = function() {
          var hm = arguments,
            Am = Tm ? Tm.apply(this, hm) : hm[0],
            am = fm.cache;
          if (am.has(Am)) return am.get(Am);
          var xm = mm.apply(this, hm);
          return fm.cache = am.set(Am, xm), xm
        };
        return fm.cache = new(FT.Cache || zT), fm
      }

      function mf(mm, Tm) {
        return mm === Tm || mm !== mm && Tm !== Tm
      }

      function Tf(mm) {
        return function(mm) {
          return wf(mm) && hf(mm)
        }(mm) && Fm.call(mm, "callee") && (!xT.call(mm, "callee") || mT.call(mm) == am)
      }
      FT.Cache = zT;
      var ff = Array.isArray;

      function hf(mm) {
        return null != mm && af(mm.length) && !Af(mm)
      }

      function Af(mm) {
        var Tm = xf(mm) ? mT.call(mm) : "";
        return Tm == Rm || "[object GeneratorFunction]" == Tm
      }

      function af(mm) {
        return "number" == typeof mm && mm > -1 && mm % 1 == 0 && mm <= hm
      }

      function xf(mm) {
        var Tm = typeof mm;
        return !!mm && ("object" == Tm || "function" == Tm)
      }

      function wf(mm) {
        return !!mm && "object" == typeof mm
      }

      function Df(mm) {
        return "symbol" == typeof mm || wf(mm) && mT.call(mm) == Vm
      }
      var Rf, pf = Cm ? (Rf = Cm, function(mm) {
        return Rf(mm)
      }) : function(mm) {
        return wf(mm) && af(mm.length) && !!Sm[mT.call(mm)]
      };

      function Ef(mm) {
        return hf(mm) ? bT(mm) : rT(mm)
      }

      function of(mm) {
        return mm
      }
      mm.exports = function(mm, Tm, fm) {
        var hm, Am = ff(mm) || pf(mm);
        if (Tm = CT(Tm), null == fm)
          if (Am || xf(mm)) {
            var am = mm.constructor;
            fm = Am ? ff(mm) ? new am : [] : Af(am) ? xf(hm = AT(mm)) ? aT(hm) : {} : {}
          } else fm = {};
        return (Am ? rm : GT)(mm, (function(mm, hm, Am) {
          return Tm(fm, mm, hm, Am)
        })), fm
      }
    }(ra, ra.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      j: sa
    } = hm
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);