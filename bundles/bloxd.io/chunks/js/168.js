export const id = 168;
export const ids = [168];
export const modules = {
  7653: (dd, Od, md) => {
    md.d(Od, {
      e: () => KR,
      i: () => nm
    });
    var Wd = {};
    md.r(Wd), md.d(Wd, {
      d: () => XW,
      h: () => vW,
      g: () => hW,
      i: () => fm,
      m: () => km,
      q: () => uW,
      t: () => OW,
      v: () => AW,
      x: () => JW,
      B: () => iW,
      D: () => Mm,
      H: () => xW,
      I: () => sW,
      M: () => VW,
      P: () => dW,
      N: () => FW,
      Q: () => SW,
      R: () => BW
    });
    var Fd = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function Rd(dd) {
      return dd && dd.__esModule && Object.prototype.hasOwnProperty.call(dd, "default") ? dd.default : dd
    }
    var Xd = {
      exports: {}
    };
    ! function(dd) {
      var Od = Object.prototype.hasOwnProperty,
        md = "~";

      function Wd() {}

      function Fd(dd, Od, md) {
        this.Ot = dd, this.context = Od, this.once = md || !1
      }

      function Rd(dd, Od, Wd, Rd, Xd) {
        if ("function" !== typeof Wd) throw new TypeError("The listener must be a function");
        var Kd = new Fd(Wd, Rd || dd, Xd),
          hd = md ? md + Od : Od;
        return dd._events[hd] ? dd._events[hd].Ot ? dd._events[hd] = [dd._events[hd], Kd] : dd._events[hd].push(Kd) : (dd._events[hd] = Kd, dd._eventsCount++), dd
      }

      function Xd(dd, Od) {
        0 === --dd._eventsCount ? dd._events = new Wd : delete dd._events[Od]
      }

      function Kd() {
        this._events = new Wd, this._eventsCount = 0
      }
      Object.create && (Wd.prototype = Object.create(null), (new Wd).__proto__ || (md = !1)), Kd.prototype.eventNames = function() {
        var dd, Wd, Fd = [];
        if (0 === this._eventsCount) return Fd;
        for (Wd in dd = this._events) Od.call(dd, Wd) && Fd.push(md ? Wd.slice(1) : Wd);
        return Object.getOwnPropertySymbols ? Fd.concat(Object.getOwnPropertySymbols(dd)) : Fd
      }, Kd.prototype.listeners = function(dd) {
        var Od = md ? md + dd : dd,
          Wd = this._events[Od];
        if (!Wd) return [];
        if (Wd.Ot) return [Wd.Ot];
        for (var Fd = 0, Rd = Wd.length, Xd = new Array(Rd); Fd < Rd; Fd++) Xd[Fd] = Wd[Fd].Ot;
        return Xd
      }, Kd.prototype.listenerCount = function(dd) {
        var Od = md ? md + dd : dd,
          Wd = this._events[Od];
        return Wd ? Wd.Ot ? 1 : Wd.length : 0
      }, Kd.prototype.emit = function(dd, Od, Wd, Fd, Rd, Xd) {
        var Kd = md ? md + dd : dd;
        if (!this._events[Kd]) return !1;
        var hd, vd, Qd = this._events[Kd],
          td = arguments.length;
        if (Qd.Ot) {
          switch (Qd.once && this.removeListener(dd, Qd.Ot, void 0, !0), td) {
            case 1:
              return Qd.Ot.call(Qd.context), !0;
            case 2:
              return Qd.Ot.call(Qd.context, Od), !0;
            case 3:
              return Qd.Ot.call(Qd.context, Od, Wd), !0;
            case 4:
              return Qd.Ot.call(Qd.context, Od, Wd, Fd), !0;
            case 5:
              return Qd.Ot.call(Qd.context, Od, Wd, Fd, Rd), !0;
            case 6:
              return Qd.Ot.call(Qd.context, Od, Wd, Fd, Rd, Xd), !0
          }
          for (vd = 1, hd = new Array(td - 1); vd < td; vd++) hd[vd - 1] = arguments[vd];
          Qd.Ot.apply(Qd.context, hd)
        } else {
          var od, Nd = Qd.length;
          for (vd = 0; vd < Nd; vd++) switch (Qd[vd].once && this.removeListener(dd, Qd[vd].Ot, void 0, !0), td) {
            case 1:
              Qd[vd].Ot.call(Qd[vd].context);
              break;
            case 2:
              Qd[vd].Ot.call(Qd[vd].context, Od);
              break;
            case 3:
              Qd[vd].Ot.call(Qd[vd].context, Od, Wd);
              break;
            case 4:
              Qd[vd].Ot.call(Qd[vd].context, Od, Wd, Fd);
              break;
            default:
              if (!hd)
                for (od = 1, hd = new Array(td - 1); od < td; od++) hd[od - 1] = arguments[od];
              Qd[vd].Ot.apply(Qd[vd].context, hd)
          }
        }
        return !0
      }, Kd.prototype.on = function(dd, Od, md) {
        return Rd(this, dd, Od, md, !1)
      }, Kd.prototype.once = function(dd, Od, md) {
        return Rd(this, dd, Od, md, !0)
      }, Kd.prototype.removeListener = function(dd, Od, Wd, Fd) {
        var Rd = md ? md + dd : dd;
        if (!this._events[Rd]) return this;
        if (!Od) return Xd(this, Rd), this;
        var Kd = this._events[Rd];
        if (Kd.Ot) Kd.Ot !== Od || Fd && !Kd.once || Wd && Kd.context !== Wd || Xd(this, Rd);
        else {
          for (var hd = 0, vd = [], Qd = Kd.length; hd < Qd; hd++)(Kd[hd].Ot !== Od || Fd && !Kd[hd].once || Wd && Kd[hd].context !== Wd) && vd.push(Kd[hd]);
          vd.length ? this._events[Rd] = 1 === vd.length ? vd[0] : vd : Xd(this, Rd)
        }
        return this
      }, Kd.prototype.eT = function(dd) {
        var Od;
        return dd ? (Od = md ? md + dd : dd, this._events[Od] && Xd(this, Od)) : (this._events = new Wd, this._eventsCount = 0), this
      }, Kd.prototype.off = Kd.prototype.removeListener, Kd.prototype.addListener = Kd.prototype.on, Kd.prefixed = md, Kd.EventEmitter = Kd, dd.exports = Kd
    }(Xd);
    var Kd, hd, vd = Rd(Xd.exports);
    ! function(dd) {
      dd.assertEqual = dd => dd, dd.assertIs = function(dd) {}, dd.assertNever = function(dd) {
        throw new Error
      }, dd.arrayToEnum = dd => {
        const Od = {};
        for (const md of dd) Od[md] = md;
        return Od
      }, dd.getValidEnumValues = Od => {
        const md = dd.objectKeys(Od).filter((dd => "number" !== typeof Od[Od[dd]])),
          Wd = {};
        for (const dd of md) Wd[dd] = Od[dd];
        return dd.objectValues(Wd)
      }, dd.objectValues = Od => dd.objectKeys(Od).map((function(dd) {
        return Od[dd]
      })), dd.objectKeys = "function" === typeof Object.keys ? dd => Object.keys(dd) : dd => {
        const Od = [];
        for (const md in dd) Object.prototype.hasOwnProperty.call(dd, md) && Od.push(md);
        return Od
      }, dd.find = (dd, Od) => {
        for (const md of dd)
          if (Od(md)) return md
      }, dd.isInteger = "function" === typeof Number.isInteger ? dd => Number.isInteger(dd) : dd => "number" === typeof dd && isFinite(dd) && Math.floor(dd) === dd, dd.joinValues = function(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return dd.map((dd => "string" === typeof dd ? `'${dd}'` : dd)).join(Od)
      }, dd.jsonStringifyReplacer = (dd, Od) => "bigint" === typeof Od ? Od.toString() : Od
    }(Kd || (Kd = {})),
    function(dd) {
      dd.mergeShapes = (dd, Od) => ({
        ...dd,
        ...Od
      })
    }(hd || (hd = {}));
    const Qd = Kd.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      td = dd => {
        switch (typeof dd) {
          case "undefined":
            return Qd.undefined;
          case "string":
            return Qd.string;
          case "number":
            return isNaN(dd) ? Qd.nan : Qd.number;
          case "boolean":
            return Qd.boolean;
          case "function":
            return Qd.function;
          case "bigint":
            return Qd.bigint;
          case "symbol":
            return Qd.symbol;
          case "object":
            return Array.isArray(dd) ? Qd.array : null === dd ? Qd.null : dd.then && "function" === typeof dd.then && dd.catch && "function" === typeof dd.catch ? Qd.promise : "undefined" !== typeof Map && dd instanceof Map ? Qd.map : "undefined" !== typeof Set && dd instanceof Set ? Qd.set : "undefined" !== typeof Date && dd instanceof Date ? Qd.date : Qd.object;
          default:
            return Qd.unknown
        }
      },
      od = Kd.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class Nd extends Error {
      constructor(dd) {
        var Od;
        super(), Od = this, this.issues = [], this.addIssue = dd => {
          this.issues = [...this.issues, dd]
        }, this.addIssues = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          Od.issues = [...Od.issues, ...dd]
        };
        const md = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, md) : this.__proto__ = md, this.name = "ZodError", this.issues = dd
      }
      get errors() {
        return this.issues
      }
      format(dd) {
        const Od = dd || function(dd) {
            return dd.message
          },
          md = {
            _errors: []
          },
          Wd = dd => {
            for (const Fd of dd.issues)
              if ("invalid_union" === Fd.code) Fd.unionErrors.map(Wd);
              else if ("invalid_return_type" === Fd.code) Wd(Fd.returnTypeError);
            else if ("invalid_arguments" === Fd.code) Wd(Fd.argumentsError);
            else if (0 === Fd.path.length) md._errors.push(Od(Fd));
            else {
              let dd = md,
                Wd = 0;
              for (; Wd < Fd.path.length;) {
                const md = Fd.path[Wd];
                Wd === Fd.path.length - 1 ? (dd[md] = dd[md] || {
                  _errors: []
                }, dd[md]._errors.push(Od(Fd))) : dd[md] = dd[md] || {
                  _errors: []
                }, dd = dd[md], Wd++
              }
            }
          };
        return Wd(this), md
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, Kd.jsonStringifyReplacer, 2)
      }
      get Nt() {
        return 0 === this.issues.length
      }
      flatten() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : dd => dd.message;
        const Od = {},
          md = [];
        for (const Wd of this.issues) Wd.path.length > 0 ? (Od[Wd.path[0]] = Od[Wd.path[0]] || [], Od[Wd.path[0]].push(dd(Wd))) : md.push(dd(Wd));
        return {
          formErrors: md,
          fieldErrors: Od
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    Nd.create = dd => new Nd(dd);
    const qd = (dd, Od) => {
      let md;
      switch (dd.code) {
        case od.invalid_type:
          md = dd.received === Qd.undefined ? "Required" : `Expected ${dd.expected}, received ${dd.received}`;
          break;
        case od.invalid_literal:
          md = `Invalid literal value, expected ${JSON.stringify(dd.expected,Kd.jsonStringifyReplacer)}`;
          break;
        case od.unrecognized_keys:
          md = `Unrecognized key(s) in object: ${Kd.joinValues(dd.keys,", ")}`;
          break;
        case od.invalid_union:
          md = "Invalid input";
          break;
        case od.invalid_union_discriminator:
          md = `Invalid discriminator value. Expected ${Kd.joinValues(dd.options)}`;
          break;
        case od.invalid_enum_value:
          md = `Invalid enum value. Expected ${Kd.joinValues(dd.options)}, received '${dd.received}'`;
          break;
        case od.invalid_arguments:
          md = "Invalid function arguments";
          break;
        case od.invalid_return_type:
          md = "Invalid function return type";
          break;
        case od.invalid_date:
          md = "Invalid date";
          break;
        case od.invalid_string:
          "object" === typeof dd.validation ? "includes" in dd.validation ? (md = `Invalid input: must include "${dd.validation.includes}"`, "number" === typeof dd.validation.position && (md = `${md} at one or more positions greater than or equal to ${dd.validation.position}`)) : "startsWith" in dd.validation ? md = `Invalid input: must start with "${dd.validation.startsWith}"` : "endsWith" in dd.validation ? md = `Invalid input: must end with "${dd.validation.endsWith}"` : Kd.assertNever(dd.validation) : md = "regex" !== dd.validation ? `Invalid ${dd.validation}` : "Invalid";
          break;
        case od.too_small:
          md = "array" === dd.type ? `Array must contain ${dd.exact?"exactly":dd.inclusive?"at least":"more than"} ${dd.minimum} element(s)` : "string" === dd.type ? `String must contain ${dd.exact?"exactly":dd.inclusive?"at least":"over"} ${dd.minimum} character(s)` : "number" === dd.type ? `Number must be ${dd.exact?"exactly equal to ":dd.inclusive?"greater than or equal to ":"greater than "}${dd.minimum}` : "date" === dd.type ? `Date must be ${dd.exact?"exactly equal to ":dd.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(dd.minimum))}` : "Invalid input";
          break;
        case od.too_big:
          md = "array" === dd.type ? `Array must contain ${dd.exact?"exactly":dd.inclusive?"at most":"less than"} ${dd.maximum} element(s)` : "string" === dd.type ? `String must contain ${dd.exact?"exactly":dd.inclusive?"at most":"under"} ${dd.maximum} character(s)` : "number" === dd.type ? `Number must be ${dd.exact?"exactly":dd.inclusive?"less than or equal to":"less than"} ${dd.maximum}` : "bigint" === dd.type ? `BigInt must be ${dd.exact?"exactly":dd.inclusive?"less than or equal to":"less than"} ${dd.maximum}` : "date" === dd.type ? `Date must be ${dd.exact?"exactly":dd.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(dd.maximum))}` : "Invalid input";
          break;
        case od.custom:
          md = "Invalid input";
          break;
        case od.invalid_intersection_types:
          md = "Intersection results could not be merged";
          break;
        case od.not_multiple_of:
          md = `Number must be a multiple of ${dd.multipleOf}`;
          break;
        case od.not_finite:
          md = "Number must be finite";
          break;
        default:
          md = Od.defaultError, Kd.assertNever(dd)
      }
      return {
        message: md
      }
    };
    let Hd = qd;

    function yd() {
      return Hd
    }
    const bd = dd => {
      const {
        data: Od,
        path: md,
        errorMaps: Wd,
        issueData: Fd
      } = dd, Rd = [...md, ...Fd.path || []], Xd = {
        ...Fd,
        path: Rd
      };
      let Kd = "";
      const hd = Wd.filter((dd => !!dd)).slice().reverse();
      for (const vd of hd) Kd = vd(Xd, {
        data: Od,
        defaultError: Kd
      }).message;
      return {
        ...Fd,
        path: Rd,
        message: Fd.message || Kd
      }
    };

    function Td(dd, Od) {
      const md = bd({
        issueData: Od,
        data: dd.data,
        path: dd.path,
        errorMaps: [dd.common.contextualErrorMap, dd.schemaErrorMap, yd(), qd].filter((dd => !!dd))
      });
      dd.common.issues.push(md)
    }
    class pd {
      constructor() {
        this.value = "valid"
      }
      dH() {
        "valid" === this.value && (this.value = "dH")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(dd, Od) {
        const md = [];
        for (const Wd of Od) {
          if ("aborted" === Wd.status) return Yd;
          "dH" === Wd.status && dd.dH(), md.push(Wd.value)
        }
        return {
          status: dd.value,
          value: md
        }
      }
      static async mergeObjectAsync(dd, Od) {
        const md = [];
        for (const Wd of Od) md.push({
          key: await Wd.key,
          value: await Wd.value
        });
        return pd.mergeObjectSync(dd, md)
      }
      static mergeObjectSync(dd, Od) {
        const md = {};
        for (const Wd of Od) {
          const {
            key: Od,
            value: Fd
          } = Wd;
          if ("aborted" === Od.status) return Yd;
          if ("aborted" === Fd.status) return Yd;
          "dH" === Od.status && dd.dH(), "dH" === Fd.status && dd.dH(), "__proto__" === Od.value || "undefined" === typeof Fd.value && !Wd.alwaysSet || (md[Od.value] = Fd.value)
        }
        return {
          status: dd.value,
          value: md
        }
      }
    }
    const Yd = Object.freeze({
        status: "aborted"
      }),
      gd = dd => ({
        status: "dH",
        value: dd
      }),
      wd = dd => ({
        status: "valid",
        value: dd
      }),
      Ed = dd => "aborted" === dd.status,
      Jd = dd => "dH" === dd.status,
      Ud = dd => "valid" === dd.status,
      xd = dd => "undefined" !== typeof Promise && dd instanceof Promise;
    var Bd;
    ! function(dd) {
      dd.errToObj = dd => "string" === typeof dd ? {
        message: dd
      } : dd || {}, dd.toString = dd => "string" === typeof dd ? dd : null === dd || void 0 === dd ? void 0 : dd.message
    }(Bd || (Bd = {}));
    class Sd {
      constructor(dd, Od, md, Wd) {
        this._cachedPath = [], this.parent = dd, this.data = Od, this._path = md, this._key = Wd
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const sd = (dd, Od) => {
      if (Ud(Od)) return {
        success: !0,
        data: Od.value
      };
      if (!dd.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const Od = new Nd(dd.common.issues);
          return this._error = Od, this._error
        }
      }
    };

    function ud(dd) {
      if (!dd) return {};
      const {
        errorMap: Od,
        invalid_type_error: md,
        required_error: Wd,
        description: Fd
      } = dd;
      if (Od && (md || Wd)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (Od) return {
        errorMap: Od,
        description: Fd
      };
      return {
        errorMap: (dd, Od) => "invalid_type" !== dd.code ? {
          message: Od.defaultError
        } : "undefined" === typeof Od.data ? {
          message: null !== Wd && void 0 !== Wd ? Wd : Od.defaultError
        } : {
          message: null !== md && void 0 !== md ? md : Od.defaultError
        },
        description: Fd
      }
    }
    class Vd {
      constructor(dd) {
        this.spa = this.safeParseAsync, this._def = dd, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(dd) {
        return td(dd.data)
      }
      _getOrReturnCtx(dd, Od) {
        return Od || {
          common: dd.parent.common,
          data: dd.data,
          parsedType: td(dd.data),
          schemaErrorMap: this._def.errorMap,
          path: dd.path,
          parent: dd.parent
        }
      }
      _processInputParams(dd) {
        return {
          status: new pd,
          ctx: {
            common: dd.parent.common,
            data: dd.data,
            parsedType: td(dd.data),
            schemaErrorMap: this._def.errorMap,
            path: dd.path,
            parent: dd.parent
          }
        }
      }
      _parseSync(dd) {
        const Od = this._parse(dd);
        if (xd(Od)) throw new Error("Synchronous parse encountered promise.");
        return Od
      }
      _parseAsync(dd) {
        const Od = this._parse(dd);
        return Promise.resolve(Od)
      }
      parse(dd, Od) {
        const md = this.safeParse(dd, Od);
        if (md.success) return md.data;
        throw md.error
      }
      safeParse(dd, Od) {
        var md;
        const Wd = {
            common: {
              issues: [],
              async: null !== (md = null === Od || void 0 === Od ? void 0 : Od.async) && void 0 !== md && md,
              contextualErrorMap: null === Od || void 0 === Od ? void 0 : Od.errorMap
            },
            path: (null === Od || void 0 === Od ? void 0 : Od.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: dd,
            parsedType: td(dd)
          },
          Fd = this._parseSync({
            data: dd,
            path: Wd.path,
            parent: Wd
          });
        return sd(Wd, Fd)
      }
      async parseAsync(dd, Od) {
        const md = await this.safeParseAsync(dd, Od);
        if (md.success) return md.data;
        throw md.error
      }
      async safeParseAsync(dd, Od) {
        const md = {
            common: {
              issues: [],
              contextualErrorMap: null === Od || void 0 === Od ? void 0 : Od.errorMap,
              async: !0
            },
            path: (null === Od || void 0 === Od ? void 0 : Od.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: dd,
            parsedType: td(dd)
          },
          Wd = this._parse({
            data: dd,
            path: md.path,
            parent: md
          }),
          Fd = await (xd(Wd) ? Wd : Promise.resolve(Wd));
        return sd(md, Fd)
      }
      refine(dd, Od) {
        const md = dd => "string" === typeof Od || "undefined" === typeof Od ? {
          message: Od
        } : "function" === typeof Od ? Od(dd) : Od;
        return this._refinement(((Od, Wd) => {
          const Fd = dd(Od),
            Rd = () => Wd.addIssue({
              code: od.custom,
              ...md(Od)
            });
          return "undefined" !== typeof Promise && Fd instanceof Promise ? Fd.then((dd => !!dd || (Rd(), !1))) : !!Fd || (Rd(), !1)
        }))
      }
      refinement(dd, Od) {
        return this._refinement(((md, Wd) => !!dd(md) || (Wd.addIssue("function" === typeof Od ? Od(md, Wd) : Od), !1)))
      }
      _refinement(dd) {
        return new wO({
          schema: this,
          typeName: AO.ZodEffects,
          effect: {
            type: "refinement",
            refinement: dd
          }
        })
      }
      superRefine(dd) {
        return this._refinement(dd)
      }
      optional() {
        return aO.create(this, this._def)
      }
      nullable() {
        return EO.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return WO.create(this, this._def)
      }
      promise() {
        return gO.create(this, this._def)
      }
      or(dd) {
        return XO.create([this, dd], this._def)
      }
      and(dd) {
        return QO.create(this, dd, this._def)
      }
      transform(dd) {
        return new wO({
          ...ud(this._def),
          schema: this,
          typeName: AO.ZodEffects,
          effect: {
            type: "transform",
            transform: dd
          }
        })
      }
      default (dd) {
        const Od = "function" === typeof dd ? dd : () => dd;
        return new JO({
          ...ud(this._def),
          innerType: this,
          defaultValue: Od,
          typeName: AO.ZodDefault
        })
      }
      brand() {
        return new SO({
          typeName: AO.ZodBranded,
          type: this,
          ...ud(this._def)
        })
      } catch (dd) {
        const Od = "function" === typeof dd ? dd : () => dd;
        return new UO({
          ...ud(this._def),
          innerType: this,
          catchValue: Od,
          typeName: AO.ZodCatch
        })
      }
      describe(dd) {
        return new(0, this.constructor)({
          ...this._def,
          description: dd
        })
      }
      pipe(dd) {
        return sO.create(this, dd)
      }
      readonly() {
        return uO.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const Ad = /^c[^\s-]{8,}$/i,
      rd = /^[a-z][a-z0-9]*$/,
      Gd = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      nd = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      Ld = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let Pd;
    const zd = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      cd = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class jd extends Vd {
      _parse(dd) {
        this._def.coerce && (dd.data = String(dd.data));
        if (this._getType(dd) !== Qd.string) {
          const Od = this._getOrReturnCtx(dd);
          return Td(Od, {
            code: od.invalid_type,
            expected: Qd.string,
            received: Od.parsedType
          }), Yd
        }
        const Od = new pd;
        let md;
        for (const hd of this._def.checks)
          if ("min" === hd.kind) dd.data.length < hd.value && (md = this._getOrReturnCtx(dd, md), Td(md, {
            code: od.too_small,
            minimum: hd.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: hd.message
          }), Od.dH());
          else if ("max" === hd.kind) dd.data.length > hd.value && (md = this._getOrReturnCtx(dd, md), Td(md, {
          code: od.too_big,
          maximum: hd.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: hd.message
        }), Od.dH());
        else if ("length" === hd.kind) {
          const Wd = dd.data.length > hd.value,
            Fd = dd.data.length < hd.value;
          (Wd || Fd) && (md = this._getOrReturnCtx(dd, md), Wd ? Td(md, {
            code: od.too_big,
            maximum: hd.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: hd.message
          }) : Fd && Td(md, {
            code: od.too_small,
            minimum: hd.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: hd.message
          }), Od.dH())
        } else if ("email" === hd.kind) Ld.test(dd.data) || (md = this._getOrReturnCtx(dd, md), Td(md, {
          validation: "email",
          code: od.invalid_string,
          message: hd.message
        }), Od.dH());
        else if ("emoji" === hd.kind) Pd || (Pd = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Pd.test(dd.data) || (md = this._getOrReturnCtx(dd, md), Td(md, {
          validation: "emoji",
          code: od.invalid_string,
          message: hd.message
        }), Od.dH());
        else if ("uuid" === hd.kind) nd.test(dd.data) || (md = this._getOrReturnCtx(dd, md), Td(md, {
          validation: "uuid",
          code: od.invalid_string,
          message: hd.message
        }), Od.dH());
        else if ("cuid" === hd.kind) Ad.test(dd.data) || (md = this._getOrReturnCtx(dd, md), Td(md, {
          validation: "cuid",
          code: od.invalid_string,
          message: hd.message
        }), Od.dH());
        else if ("cuid2" === hd.kind) rd.test(dd.data) || (md = this._getOrReturnCtx(dd, md), Td(md, {
          validation: "cuid2",
          code: od.invalid_string,
          message: hd.message
        }), Od.dH());
        else if ("ulid" === hd.kind) Gd.test(dd.data) || (md = this._getOrReturnCtx(dd, md), Td(md, {
          validation: "ulid",
          code: od.invalid_string,
          message: hd.message
        }), Od.dH());
        else if ("url" === hd.kind) try {
          new URL(dd.data)
        } catch (Xd) {
          md = this._getOrReturnCtx(dd, md), Td(md, {
            validation: "url",
            code: od.invalid_string,
            message: hd.message
          }), Od.dH()
        } else if ("regex" === hd.kind) {
          hd.regex.lastIndex = 0;
          hd.regex.test(dd.data) || (md = this._getOrReturnCtx(dd, md), Td(md, {
            validation: "regex",
            code: od.invalid_string,
            message: hd.message
          }), Od.dH())
        } else if ("trim" === hd.kind) dd.data = dd.data.trim();
        else if ("includes" === hd.kind) dd.data.includes(hd.value, hd.position) || (md = this._getOrReturnCtx(dd, md), Td(md, {
          code: od.invalid_string,
          validation: {
            includes: hd.value,
            position: hd.position
          },
          message: hd.message
        }), Od.dH());
        else if ("toLowerCase" === hd.kind) dd.data = dd.data.toLowerCase();
        else if ("toUpperCase" === hd.kind) dd.data = dd.data.toUpperCase();
        else if ("startsWith" === hd.kind) dd.data.startsWith(hd.value) || (md = this._getOrReturnCtx(dd, md), Td(md, {
          code: od.invalid_string,
          validation: {
            startsWith: hd.value
          },
          message: hd.message
        }), Od.dH());
        else if ("endsWith" === hd.kind) dd.data.endsWith(hd.value) || (md = this._getOrReturnCtx(dd, md), Td(md, {
          code: od.invalid_string,
          validation: {
            endsWith: hd.value
          },
          message: hd.message
        }), Od.dH());
        else if ("datetime" === hd.kind) {
          ((Rd = hd).precision ? Rd.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${Rd.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${Rd.precision}}Z$`) : 0 === Rd.precision ? Rd.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : Rd.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(dd.data) || (md = this._getOrReturnCtx(dd, md), Td(md, {
            code: od.invalid_string,
            validation: "datetime",
            message: hd.message
          }), Od.dH())
        } else "ip" === hd.kind ? (Wd = dd.data, ("v4" !== (Fd = hd.version) && Fd || !zd.test(Wd)) && ("v6" !== Fd && Fd || !cd.test(Wd)) && (md = this._getOrReturnCtx(dd, md), Td(md, {
          validation: "ip",
          code: od.invalid_string,
          message: hd.message
        }), Od.dH())) : Kd.assertNever(hd);
        var Wd, Fd, Rd;
        return {
          status: Od.value,
          value: dd.data
        }
      }
      _regex(dd, Od, md) {
        return this.refinement((Od => dd.test(Od)), {
          validation: Od,
          code: od.invalid_string,
          ...Bd.errToObj(md)
        })
      }
      _addCheck(dd) {
        return new jd({
          ...this._def,
          checks: [...this._def.checks, dd]
        })
      }
      email(dd) {
        return this._addCheck({
          kind: "email",
          ...Bd.errToObj(dd)
        })
      }
      url(dd) {
        return this._addCheck({
          kind: "url",
          ...Bd.errToObj(dd)
        })
      }
      emoji(dd) {
        return this._addCheck({
          kind: "emoji",
          ...Bd.errToObj(dd)
        })
      }
      uuid(dd) {
        return this._addCheck({
          kind: "uuid",
          ...Bd.errToObj(dd)
        })
      }
      cuid(dd) {
        return this._addCheck({
          kind: "cuid",
          ...Bd.errToObj(dd)
        })
      }
      cuid2(dd) {
        return this._addCheck({
          kind: "cuid2",
          ...Bd.errToObj(dd)
        })
      }
      ulid(dd) {
        return this._addCheck({
          kind: "ulid",
          ...Bd.errToObj(dd)
        })
      }
      ip(dd) {
        return this._addCheck({
          kind: "ip",
          ...Bd.errToObj(dd)
        })
      }
      datetime(dd) {
        var Od;
        return "string" === typeof dd ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: dd
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === dd || void 0 === dd ? void 0 : dd.precision) ? null : null === dd || void 0 === dd ? void 0 : dd.precision,
          offset: null !== (Od = null === dd || void 0 === dd ? void 0 : dd.offset) && void 0 !== Od && Od,
          ...Bd.errToObj(null === dd || void 0 === dd ? void 0 : dd.message)
        })
      }
      regex(dd, Od) {
        return this._addCheck({
          kind: "regex",
          regex: dd,
          ...Bd.errToObj(Od)
        })
      }
      includes(dd, Od) {
        return this._addCheck({
          kind: "includes",
          value: dd,
          position: null === Od || void 0 === Od ? void 0 : Od.position,
          ...Bd.errToObj(null === Od || void 0 === Od ? void 0 : Od.message)
        })
      }
      startsWith(dd, Od) {
        return this._addCheck({
          kind: "startsWith",
          value: dd,
          ...Bd.errToObj(Od)
        })
      }
      endsWith(dd, Od) {
        return this._addCheck({
          kind: "endsWith",
          value: dd,
          ...Bd.errToObj(Od)
        })
      }
      min(dd, Od) {
        return this._addCheck({
          kind: "min",
          value: dd,
          ...Bd.errToObj(Od)
        })
      }
      max(dd, Od) {
        return this._addCheck({
          kind: "max",
          value: dd,
          ...Bd.errToObj(Od)
        })
      }
      length(dd, Od) {
        return this._addCheck({
          kind: "length",
          value: dd,
          ...Bd.errToObj(Od)
        })
      }
      nonempty(dd) {
        return this.min(1, Bd.errToObj(dd))
      }
      trim() {
        return new jd({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new jd({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new jd({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((dd => "datetime" === dd.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((dd => "email" === dd.kind))
      }
      get isURL() {
        return !!this._def.checks.find((dd => "url" === dd.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((dd => "emoji" === dd.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((dd => "uuid" === dd.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((dd => "cuid" === dd.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((dd => "cuid2" === dd.kind))
      }
      get isULID() {
        return !!this._def.checks.find((dd => "ulid" === dd.kind))
      }
      get isIP() {
        return !!this._def.checks.find((dd => "ip" === dd.kind))
      }
      get minLength() {
        let dd = null;
        for (const Od of this._def.checks) "min" === Od.kind && (null === dd || Od.value > dd) && (dd = Od.value);
        return dd
      }
      get maxLength() {
        let dd = null;
        for (const Od of this._def.checks) "max" === Od.kind && (null === dd || Od.value < dd) && (dd = Od.value);
        return dd
      }
    }

    function Dd(dd, Od) {
      const md = (dd.toString().split(".")[1] || "").length,
        Wd = (Od.toString().split(".")[1] || "").length,
        Fd = md > Wd ? md : Wd;
      return parseInt(dd.toFixed(Fd).replace(".", "")) % parseInt(Od.toFixed(Fd).replace(".", "")) / Math.pow(10, Fd)
    }
    jd.create = dd => {
      var Od;
      return new jd({
        checks: [],
        typeName: AO.ZodString,
        coerce: null !== (Od = null === dd || void 0 === dd ? void 0 : dd.coerce) && void 0 !== Od && Od,
        ...ud(dd)
      })
    };
    class ed extends Vd {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(dd) {
        this._def.coerce && (dd.data = Number(dd.data));
        if (this._getType(dd) !== Qd.number) {
          const Od = this._getOrReturnCtx(dd);
          return Td(Od, {
            code: od.invalid_type,
            expected: Qd.number,
            received: Od.parsedType
          }), Yd
        }
        let Od;
        const md = new pd;
        for (const Wd of this._def.checks)
          if ("int" === Wd.kind) Kd.isInteger(dd.data) || (Od = this._getOrReturnCtx(dd, Od), Td(Od, {
            code: od.invalid_type,
            expected: "integer",
            received: "float",
            message: Wd.message
          }), md.dH());
          else if ("min" === Wd.kind) {
          (Wd.inclusive ? dd.data < Wd.value : dd.data <= Wd.value) && (Od = this._getOrReturnCtx(dd, Od), Td(Od, {
            code: od.too_small,
            minimum: Wd.value,
            type: "number",
            inclusive: Wd.inclusive,
            exact: !1,
            message: Wd.message
          }), md.dH())
        } else if ("max" === Wd.kind) {
          (Wd.inclusive ? dd.data > Wd.value : dd.data >= Wd.value) && (Od = this._getOrReturnCtx(dd, Od), Td(Od, {
            code: od.too_big,
            maximum: Wd.value,
            type: "number",
            inclusive: Wd.inclusive,
            exact: !1,
            message: Wd.message
          }), md.dH())
        } else "multipleOf" === Wd.kind ? 0 !== Dd(dd.data, Wd.value) && (Od = this._getOrReturnCtx(dd, Od), Td(Od, {
          code: od.not_multiple_of,
          multipleOf: Wd.value,
          message: Wd.message
        }), md.dH()) : "finite" === Wd.kind ? Number.isFinite(dd.data) || (Od = this._getOrReturnCtx(dd, Od), Td(Od, {
          code: od.not_finite,
          message: Wd.message
        }), md.dH()) : Kd.assertNever(Wd);
        return {
          status: md.value,
          value: dd.data
        }
      }
      gte(dd, Od) {
        return this.setLimit("min", dd, !0, Bd.toString(Od))
      }
      gt(dd, Od) {
        return this.setLimit("min", dd, !1, Bd.toString(Od))
      }
      lte(dd, Od) {
        return this.setLimit("max", dd, !0, Bd.toString(Od))
      }
      lt(dd, Od) {
        return this.setLimit("max", dd, !1, Bd.toString(Od))
      }
      setLimit(dd, Od, md, Wd) {
        return new ed({
          ...this._def,
          checks: [...this._def.checks, {
            kind: dd,
            value: Od,
            inclusive: md,
            message: Bd.toString(Wd)
          }]
        })
      }
      _addCheck(dd) {
        return new ed({
          ...this._def,
          checks: [...this._def.checks, dd]
        })
      }
      int(dd) {
        return this._addCheck({
          kind: "int",
          message: Bd.toString(dd)
        })
      }
      positive(dd) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: Bd.toString(dd)
        })
      }
      negative(dd) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: Bd.toString(dd)
        })
      }
      nonpositive(dd) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: Bd.toString(dd)
        })
      }
      nonnegative(dd) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: Bd.toString(dd)
        })
      }
      multipleOf(dd, Od) {
        return this._addCheck({
          kind: "multipleOf",
          value: dd,
          message: Bd.toString(Od)
        })
      }
      finite(dd) {
        return this._addCheck({
          kind: "finite",
          message: Bd.toString(dd)
        })
      }
      safe(dd) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: Bd.toString(dd)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: Bd.toString(dd)
        })
      }
      get minValue() {
        let dd = null;
        for (const Od of this._def.checks) "min" === Od.kind && (null === dd || Od.value > dd) && (dd = Od.value);
        return dd
      }
      get maxValue() {
        let dd = null;
        for (const Od of this._def.checks) "max" === Od.kind && (null === dd || Od.value < dd) && (dd = Od.value);
        return dd
      }
      get isInt() {
        return !!this._def.checks.find((dd => "int" === dd.kind || "multipleOf" === dd.kind && Kd.isInteger(dd.value)))
      }
      get isFinite() {
        let dd = null,
          Od = null;
        for (const md of this._def.checks) {
          if ("finite" === md.kind || "int" === md.kind || "multipleOf" === md.kind) return !0;
          "min" === md.kind ? (null === Od || md.value > Od) && (Od = md.value) : "max" === md.kind && (null === dd || md.value < dd) && (dd = md.value)
        }
        return Number.isFinite(Od) && Number.isFinite(dd)
      }
    }
    ed.create = dd => new ed({
      checks: [],
      typeName: AO.ZodNumber,
      coerce: (null === dd || void 0 === dd ? void 0 : dd.coerce) || !1,
      ...ud(dd)
    });
    class Id extends Vd {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(dd) {
        this._def.coerce && (dd.data = BigInt(dd.data));
        if (this._getType(dd) !== Qd.bigint) {
          const Od = this._getOrReturnCtx(dd);
          return Td(Od, {
            code: od.invalid_type,
            expected: Qd.bigint,
            received: Od.parsedType
          }), Yd
        }
        let Od;
        const md = new pd;
        for (const Wd of this._def.checks)
          if ("min" === Wd.kind) {
            (Wd.inclusive ? dd.data < Wd.value : dd.data <= Wd.value) && (Od = this._getOrReturnCtx(dd, Od), Td(Od, {
              code: od.too_small,
              type: "bigint",
              minimum: Wd.value,
              inclusive: Wd.inclusive,
              message: Wd.message
            }), md.dH())
          } else if ("max" === Wd.kind) {
          (Wd.inclusive ? dd.data > Wd.value : dd.data >= Wd.value) && (Od = this._getOrReturnCtx(dd, Od), Td(Od, {
            code: od.too_big,
            type: "bigint",
            maximum: Wd.value,
            inclusive: Wd.inclusive,
            message: Wd.message
          }), md.dH())
        } else "multipleOf" === Wd.kind ? dd.data % Wd.value !== BigInt(0) && (Od = this._getOrReturnCtx(dd, Od), Td(Od, {
          code: od.not_multiple_of,
          multipleOf: Wd.value,
          message: Wd.message
        }), md.dH()) : Kd.assertNever(Wd);
        return {
          status: md.value,
          value: dd.data
        }
      }
      gte(dd, Od) {
        return this.setLimit("min", dd, !0, Bd.toString(Od))
      }
      gt(dd, Od) {
        return this.setLimit("min", dd, !1, Bd.toString(Od))
      }
      lte(dd, Od) {
        return this.setLimit("max", dd, !0, Bd.toString(Od))
      }
      lt(dd, Od) {
        return this.setLimit("max", dd, !1, Bd.toString(Od))
      }
      setLimit(dd, Od, md, Wd) {
        return new Id({
          ...this._def,
          checks: [...this._def.checks, {
            kind: dd,
            value: Od,
            inclusive: md,
            message: Bd.toString(Wd)
          }]
        })
      }
      _addCheck(dd) {
        return new Id({
          ...this._def,
          checks: [...this._def.checks, dd]
        })
      }
      positive(dd) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: Bd.toString(dd)
        })
      }
      negative(dd) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: Bd.toString(dd)
        })
      }
      nonpositive(dd) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: Bd.toString(dd)
        })
      }
      nonnegative(dd) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: Bd.toString(dd)
        })
      }
      multipleOf(dd, Od) {
        return this._addCheck({
          kind: "multipleOf",
          value: dd,
          message: Bd.toString(Od)
        })
      }
      get minValue() {
        let dd = null;
        for (const Od of this._def.checks) "min" === Od.kind && (null === dd || Od.value > dd) && (dd = Od.value);
        return dd
      }
      get maxValue() {
        let dd = null;
        for (const Od of this._def.checks) "max" === Od.kind && (null === dd || Od.value < dd) && (dd = Od.value);
        return dd
      }
    }
    Id.create = dd => {
      var Od;
      return new Id({
        checks: [],
        typeName: AO.ZodBigInt,
        coerce: null !== (Od = null === dd || void 0 === dd ? void 0 : dd.coerce) && void 0 !== Od && Od,
        ...ud(dd)
      })
    };
    class ld extends Vd {
      _parse(dd) {
        this._def.coerce && (dd.data = Boolean(dd.data));
        if (this._getType(dd) !== Qd.boolean) {
          const Od = this._getOrReturnCtx(dd);
          return Td(Od, {
            code: od.invalid_type,
            expected: Qd.boolean,
            received: Od.parsedType
          }), Yd
        }
        return wd(dd.data)
      }
    }
    ld.create = dd => new ld({
      typeName: AO.ZodBoolean,
      coerce: (null === dd || void 0 === dd ? void 0 : dd.coerce) || !1,
      ...ud(dd)
    });
    class Cd extends Vd {
      _parse(dd) {
        this._def.coerce && (dd.data = new Date(dd.data));
        if (this._getType(dd) !== Qd.date) {
          const Od = this._getOrReturnCtx(dd);
          return Td(Od, {
            code: od.invalid_type,
            expected: Qd.date,
            received: Od.parsedType
          }), Yd
        }
        if (isNaN(dd.data.getTime())) {
          return Td(this._getOrReturnCtx(dd), {
            code: od.invalid_date
          }), Yd
        }
        const Od = new pd;
        let md;
        for (const Wd of this._def.checks) "min" === Wd.kind ? dd.data.getTime() < Wd.value && (md = this._getOrReturnCtx(dd, md), Td(md, {
          code: od.too_small,
          message: Wd.message,
          inclusive: !0,
          exact: !1,
          minimum: Wd.value,
          type: "date"
        }), Od.dH()) : "max" === Wd.kind ? dd.data.getTime() > Wd.value && (md = this._getOrReturnCtx(dd, md), Td(md, {
          code: od.too_big,
          message: Wd.message,
          inclusive: !0,
          exact: !1,
          maximum: Wd.value,
          type: "date"
        }), Od.dH()) : Kd.assertNever(Wd);
        return {
          status: Od.value,
          value: new Date(dd.data.getTime())
        }
      }
      _addCheck(dd) {
        return new Cd({
          ...this._def,
          checks: [...this._def.checks, dd]
        })
      }
      min(dd, Od) {
        return this._addCheck({
          kind: "min",
          value: dd.getTime(),
          message: Bd.toString(Od)
        })
      }
      max(dd, Od) {
        return this._addCheck({
          kind: "max",
          value: dd.getTime(),
          message: Bd.toString(Od)
        })
      }
      get minDate() {
        let dd = null;
        for (const Od of this._def.checks) "min" === Od.kind && (null === dd || Od.value > dd) && (dd = Od.value);
        return null != dd ? new Date(dd) : null
      }
      get maxDate() {
        let dd = null;
        for (const Od of this._def.checks) "max" === Od.kind && (null === dd || Od.value < dd) && (dd = Od.value);
        return null != dd ? new Date(dd) : null
      }
    }
    Cd.create = dd => new Cd({
      checks: [],
      coerce: (null === dd || void 0 === dd ? void 0 : dd.coerce) || !1,
      typeName: AO.ZodDate,
      ...ud(dd)
    });
    class Zd extends Vd {
      _parse(dd) {
        if (this._getType(dd) !== Qd.symbol) {
          const Od = this._getOrReturnCtx(dd);
          return Td(Od, {
            code: od.invalid_type,
            expected: Qd.symbol,
            received: Od.parsedType
          }), Yd
        }
        return wd(dd.data)
      }
    }
    Zd.create = dd => new Zd({
      typeName: AO.ZodSymbol,
      ...ud(dd)
    });
    class kd extends Vd {
      _parse(dd) {
        if (this._getType(dd) !== Qd.undefined) {
          const Od = this._getOrReturnCtx(dd);
          return Td(Od, {
            code: od.invalid_type,
            expected: Qd.undefined,
            received: Od.parsedType
          }), Yd
        }
        return wd(dd.data)
      }
    }
    kd.create = dd => new kd({
      typeName: AO.ZodUndefined,
      ...ud(dd)
    });
    class fd extends Vd {
      _parse(dd) {
        if (this._getType(dd) !== Qd.null) {
          const Od = this._getOrReturnCtx(dd);
          return Td(Od, {
            code: od.invalid_type,
            expected: Qd.null,
            received: Od.parsedType
          }), Yd
        }
        return wd(dd.data)
      }
    }
    fd.create = dd => new fd({
      typeName: AO.ZodNull,
      ...ud(dd)
    });
    class Md extends Vd {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(dd) {
        return wd(dd.data)
      }
    }
    Md.create = dd => new Md({
      typeName: AO.ZodAny,
      ...ud(dd)
    });
    class dO extends Vd {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(dd) {
        return wd(dd.data)
      }
    }
    dO.create = dd => new dO({
      typeName: AO.ZodUnknown,
      ...ud(dd)
    });
    class OO extends Vd {
      _parse(dd) {
        const Od = this._getOrReturnCtx(dd);
        return Td(Od, {
          code: od.invalid_type,
          expected: Qd.never,
          received: Od.parsedType
        }), Yd
      }
    }
    OO.create = dd => new OO({
      typeName: AO.ZodNever,
      ...ud(dd)
    });
    class mO extends Vd {
      _parse(dd) {
        if (this._getType(dd) !== Qd.undefined) {
          const Od = this._getOrReturnCtx(dd);
          return Td(Od, {
            code: od.invalid_type,
            expected: Qd.void,
            received: Od.parsedType
          }), Yd
        }
        return wd(dd.data)
      }
    }
    mO.create = dd => new mO({
      typeName: AO.ZodVoid,
      ...ud(dd)
    });
    class WO extends Vd {
      _parse(dd) {
        const {
          ctx: Od,
          status: md
        } = this._processInputParams(dd), Wd = this._def;
        if (Od.parsedType !== Qd.array) return Td(Od, {
          code: od.invalid_type,
          expected: Qd.array,
          received: Od.parsedType
        }), Yd;
        if (null !== Wd.exactLength) {
          const dd = Od.data.length > Wd.exactLength.value,
            Fd = Od.data.length < Wd.exactLength.value;
          (dd || Fd) && (Td(Od, {
            code: dd ? od.too_big : od.too_small,
            minimum: Fd ? Wd.exactLength.value : void 0,
            maximum: dd ? Wd.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: Wd.exactLength.message
          }), md.dH())
        }
        if (null !== Wd.minLength && Od.data.length < Wd.minLength.value && (Td(Od, {
            code: od.too_small,
            minimum: Wd.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Wd.minLength.message
          }), md.dH()), null !== Wd.maxLength && Od.data.length > Wd.maxLength.value && (Td(Od, {
            code: od.too_big,
            maximum: Wd.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Wd.maxLength.message
          }), md.dH()), Od.common.async) return Promise.all([...Od.data].map(((dd, md) => Wd.type._parseAsync(new Sd(Od, dd, Od.path, md))))).then((dd => pd.mergeArray(md, dd)));
        const Fd = [...Od.data].map(((dd, md) => Wd.type._parseSync(new Sd(Od, dd, Od.path, md))));
        return pd.mergeArray(md, Fd)
      }
      get element() {
        return this._def.type
      }
      min(dd, Od) {
        return new WO({
          ...this._def,
          minLength: {
            value: dd,
            message: Bd.toString(Od)
          }
        })
      }
      max(dd, Od) {
        return new WO({
          ...this._def,
          maxLength: {
            value: dd,
            message: Bd.toString(Od)
          }
        })
      }
      length(dd, Od) {
        return new WO({
          ...this._def,
          exactLength: {
            value: dd,
            message: Bd.toString(Od)
          }
        })
      }
      nonempty(dd) {
        return this.min(1, dd)
      }
    }

    function FO(dd) {
      if (dd instanceof RO) {
        const Od = {};
        for (const md in dd.shape) {
          const Wd = dd.shape[md];
          Od[md] = aO.create(FO(Wd))
        }
        return new RO({
          ...dd._def,
          shape: () => Od
        })
      }
      return dd instanceof WO ? new WO({
        ...dd._def,
        type: FO(dd.element)
      }) : dd instanceof aO ? aO.create(FO(dd.unwrap())) : dd instanceof EO ? EO.create(FO(dd.unwrap())) : dd instanceof tO ? tO.create(dd.items.map((dd => FO(dd)))) : dd
    }
    WO.create = (dd, Od) => new WO({
      type: dd,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: AO.ZodArray,
      ...ud(Od)
    });
    class RO extends Vd {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const dd = this._def.shape(),
          Od = Kd.objectKeys(dd);
        return this._cached = {
          shape: dd,
          keys: Od
        }
      }
      _parse(dd) {
        if (this._getType(dd) !== Qd.object) {
          const Od = this._getOrReturnCtx(dd);
          return Td(Od, {
            code: od.invalid_type,
            expected: Qd.object,
            received: Od.parsedType
          }), Yd
        }
        const {
          status: Od,
          ctx: md
        } = this._processInputParams(dd), {
          shape: Wd,
          keys: Fd
        } = this._getCached(), Rd = [];
        if (!(this._def.catchall instanceof OO && "strip" === this._def.unknownKeys))
          for (const Kd in md.data) Fd.includes(Kd) || Rd.push(Kd);
        const Xd = [];
        for (const Kd of Fd) {
          const dd = Wd[Kd],
            Od = md.data[Kd];
          Xd.push({
            key: {
              status: "valid",
              value: Kd
            },
            value: dd._parse(new Sd(md, Od, md.path, Kd)),
            alwaysSet: Kd in md.data
          })
        }
        if (this._def.catchall instanceof OO) {
          const dd = this._def.unknownKeys;
          if ("passthrough" === dd)
            for (const Od of Rd) Xd.push({
              key: {
                status: "valid",
                value: Od
              },
              value: {
                status: "valid",
                value: md.data[Od]
              }
            });
          else if ("strict" === dd) Rd.length > 0 && (Td(md, {
            code: od.unrecognized_keys,
            keys: Rd
          }), Od.dH());
          else if ("strip" !== dd) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const dd = this._def.catchall;
          for (const Od of Rd) {
            const Wd = md.data[Od];
            Xd.push({
              key: {
                status: "valid",
                value: Od
              },
              value: dd._parse(new Sd(md, Wd, md.path, Od)),
              alwaysSet: Od in md.data
            })
          }
        }
        return md.common.async ? Promise.resolve().then((async () => {
          const dd = [];
          for (const Od of Xd) {
            const md = await Od.key;
            dd.push({
              key: md,
              value: await Od.value,
              alwaysSet: Od.alwaysSet
            })
          }
          return dd
        })).then((dd => pd.mergeObjectSync(Od, dd))) : pd.mergeObjectSync(Od, Xd)
      }
      get shape() {
        return this._def.shape()
      }
      strict(dd) {
        return Bd.errToObj, new RO({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== dd ? {
            errorMap: (Od, md) => {
              var Wd, Fd, Rd, Xd;
              const Kd = null !== (Rd = null === (Fd = (Wd = this._def).errorMap) || void 0 === Fd ? void 0 : Fd.call(Wd, Od, md).message) && void 0 !== Rd ? Rd : md.defaultError;
              return "unrecognized_keys" === Od.code ? {
                message: null !== (Xd = Bd.errToObj(dd).message) && void 0 !== Xd ? Xd : Kd
              } : {
                message: Kd
              }
            }
          } : {}
        })
      }
      strip() {
        return new RO({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new RO({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(dd) {
        return new RO({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...dd
          })
        })
      }
      merge(dd) {
        return new RO({
          unknownKeys: dd._def.unknownKeys,
          catchall: dd._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...dd._def.shape()
          }),
          typeName: AO.ZodObject
        })
      }
      setKey(dd, Od) {
        return this.augment({
          [dd]: Od
        })
      }
      catchall(dd) {
        return new RO({
          ...this._def,
          catchall: dd
        })
      }
      xN(dd) {
        const Od = {};
        return Kd.objectKeys(dd).forEach((md => {
          dd[md] && this.shape[md] && (Od[md] = this.shape[md])
        })), new RO({
          ...this._def,
          shape: () => Od
        })
      }
      omit(dd) {
        const Od = {};
        return Kd.objectKeys(this.shape).forEach((md => {
          dd[md] || (Od[md] = this.shape[md])
        })), new RO({
          ...this._def,
          shape: () => Od
        })
      }
      deepPartial() {
        return FO(this)
      }
      partial(dd) {
        const Od = {};
        return Kd.objectKeys(this.shape).forEach((md => {
          const Wd = this.shape[md];
          dd && !dd[md] ? Od[md] = Wd : Od[md] = Wd.optional()
        })), new RO({
          ...this._def,
          shape: () => Od
        })
      }
      required(dd) {
        const Od = {};
        return Kd.objectKeys(this.shape).forEach((md => {
          if (dd && !dd[md]) Od[md] = this.shape[md];
          else {
            let dd = this.shape[md];
            for (; dd instanceof aO;) dd = dd._def.innerType;
            Od[md] = dd
          }
        })), new RO({
          ...this._def,
          shape: () => Od
        })
      }
      keyof() {
        return TO(Kd.objectKeys(this.shape))
      }
    }
    RO.create = (dd, Od) => new RO({
      shape: () => dd,
      unknownKeys: "strip",
      catchall: OO.create(),
      typeName: AO.ZodObject,
      ...ud(Od)
    }), RO.strictCreate = (dd, Od) => new RO({
      shape: () => dd,
      unknownKeys: "strict",
      catchall: OO.create(),
      typeName: AO.ZodObject,
      ...ud(Od)
    }), RO.lazycreate = (dd, Od) => new RO({
      shape: dd,
      unknownKeys: "strip",
      catchall: OO.create(),
      typeName: AO.ZodObject,
      ...ud(Od)
    });
    class XO extends Vd {
      _parse(dd) {
        const {
          ctx: Od
        } = this._processInputParams(dd), md = this._def.options;
        if (Od.common.async) return Promise.all(md.map((async dd => {
          const md = {
            ...Od,
            common: {
              ...Od.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await dd._parseAsync({
              data: Od.data,
              path: Od.path,
              parent: md
            }),
            ctx: md
          }
        }))).then((function(dd) {
          for (const Od of dd)
            if ("valid" === Od.result.status) return Od.result;
          for (const Wd of dd)
            if ("dH" === Wd.result.status) return Od.common.issues.push(...Wd.ctx.common.issues), Wd.result;
          const md = dd.map((dd => new Nd(dd.ctx.common.issues)));
          return Td(Od, {
            code: od.invalid_union,
            unionErrors: md
          }), Yd
        }));
        {
          let dd;
          const Wd = [];
          for (const Rd of md) {
            const md = {
                ...Od,
                common: {
                  ...Od.common,
                  issues: []
                },
                parent: null
              },
              Fd = Rd._parseSync({
                data: Od.data,
                path: Od.path,
                parent: md
              });
            if ("valid" === Fd.status) return Fd;
            "dH" !== Fd.status || dd || (dd = {
              result: Fd,
              ctx: md
            }), md.common.issues.length && Wd.push(md.common.issues)
          }
          if (dd) return Od.common.issues.push(...dd.ctx.common.issues), dd.result;
          const Fd = Wd.map((dd => new Nd(dd)));
          return Td(Od, {
            code: od.invalid_union,
            unionErrors: Fd
          }), Yd
        }
      }
      get options() {
        return this._def.options
      }
    }
    XO.create = (dd, Od) => new XO({
      options: dd,
      typeName: AO.ZodUnion,
      ...ud(Od)
    });
    const KO = dd => dd instanceof yO ? KO(dd.schema) : dd instanceof wO ? KO(dd.innerType()) : dd instanceof bO ? [dd.value] : dd instanceof pO ? dd.options : dd instanceof YO ? Object.keys(dd.enum) : dd instanceof JO ? KO(dd._def.innerType) : dd instanceof kd ? [void 0] : dd instanceof fd ? [null] : null;
    class hO extends Vd {
      _parse(dd) {
        const {
          ctx: Od
        } = this._processInputParams(dd);
        if (Od.parsedType !== Qd.object) return Td(Od, {
          code: od.invalid_type,
          expected: Qd.object,
          received: Od.parsedType
        }), Yd;
        const md = this.discriminator,
          Wd = Od.data[md],
          Fd = this.optionsMap.get(Wd);
        return Fd ? Od.common.async ? Fd._parseAsync({
          data: Od.data,
          path: Od.path,
          parent: Od
        }) : Fd._parseSync({
          data: Od.data,
          path: Od.path,
          parent: Od
        }) : (Td(Od, {
          code: od.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [md]
        }), Yd)
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
      static create(dd, Od, md) {
        const Wd = new Map;
        for (const Fd of Od) {
          const Od = KO(Fd.shape[dd]);
          if (!Od) throw new Error(`A discriminator value for key \`${dd}\` could not be extracted from all schema options`);
          for (const md of Od) {
            if (Wd.has(md)) throw new Error(`Discriminator property ${String(dd)} has duplicate value ${String(md)}`);
            Wd.set(md, Fd)
          }
        }
        return new hO({
          typeName: AO.ZodDiscriminatedUnion,
          discriminator: dd,
          options: Od,
          optionsMap: Wd,
          ...ud(md)
        })
      }
    }

    function vO(dd, Od) {
      const md = td(dd),
        Wd = td(Od);
      if (dd === Od) return {
        valid: !0,
        data: dd
      };
      if (md === Qd.object && Wd === Qd.object) {
        const md = Kd.objectKeys(Od),
          Wd = Kd.objectKeys(dd).filter((dd => -1 !== md.indexOf(dd))),
          Fd = {
            ...dd,
            ...Od
          };
        for (const Rd of Wd) {
          const md = vO(dd[Rd], Od[Rd]);
          if (!md.valid) return {
            valid: !1
          };
          Fd[Rd] = md.data
        }
        return {
          valid: !0,
          data: Fd
        }
      }
      if (md === Qd.array && Wd === Qd.array) {
        if (dd.length !== Od.length) return {
          valid: !1
        };
        const md = [];
        for (let Wd = 0; Wd < dd.length; Wd++) {
          const Fd = vO(dd[Wd], Od[Wd]);
          if (!Fd.valid) return {
            valid: !1
          };
          md.push(Fd.data)
        }
        return {
          valid: !0,
          data: md
        }
      }
      return md === Qd.date && Wd === Qd.date && +dd === +Od ? {
        valid: !0,
        data: dd
      } : {
        valid: !1
      }
    }
    class QO extends Vd {
      _parse(dd) {
        const {
          status: Od,
          ctx: md
        } = this._processInputParams(dd), Wd = (dd, Wd) => {
          if (Ed(dd) || Ed(Wd)) return Yd;
          const Fd = vO(dd.value, Wd.value);
          return Fd.valid ? ((Jd(dd) || Jd(Wd)) && Od.dH(), {
            status: Od.value,
            value: Fd.data
          }) : (Td(md, {
            code: od.invalid_intersection_types
          }), Yd)
        };
        return md.common.async ? Promise.all([this._def.left._parseAsync({
          data: md.data,
          path: md.path,
          parent: md
        }), this._def.right._parseAsync({
          data: md.data,
          path: md.path,
          parent: md
        })]).then((dd => {
          let [Od, md] = dd;
          return Wd(Od, md)
        })) : Wd(this._def.left._parseSync({
          data: md.data,
          path: md.path,
          parent: md
        }), this._def.right._parseSync({
          data: md.data,
          path: md.path,
          parent: md
        }))
      }
    }
    QO.create = (dd, Od, md) => new QO({
      left: dd,
      right: Od,
      typeName: AO.ZodIntersection,
      ...ud(md)
    });
    class tO extends Vd {
      _parse(dd) {
        const {
          status: Od,
          ctx: md
        } = this._processInputParams(dd);
        if (md.parsedType !== Qd.array) return Td(md, {
          code: od.invalid_type,
          expected: Qd.array,
          received: md.parsedType
        }), Yd;
        if (md.data.length < this._def.items.length) return Td(md, {
          code: od.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), Yd;
        !this._def.rest && md.data.length > this._def.items.length && (Td(md, {
          code: od.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), Od.dH());
        const Wd = [...md.data].map(((dd, Od) => {
          const Wd = this._def.items[Od] || this._def.rest;
          return Wd ? Wd._parse(new Sd(md, dd, md.path, Od)) : null
        })).filter((dd => !!dd));
        return md.common.async ? Promise.all(Wd).then((dd => pd.mergeArray(Od, dd))) : pd.mergeArray(Od, Wd)
      }
      get items() {
        return this._def.items
      }
      rest(dd) {
        return new tO({
          ...this._def,
          rest: dd
        })
      }
    }
    tO.create = (dd, Od) => {
      if (!Array.isArray(dd)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new tO({
        items: dd,
        typeName: AO.ZodTuple,
        rest: null,
        ...ud(Od)
      })
    };
    class oO extends Vd {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(dd) {
        const {
          status: Od,
          ctx: md
        } = this._processInputParams(dd);
        if (md.parsedType !== Qd.object) return Td(md, {
          code: od.invalid_type,
          expected: Qd.object,
          received: md.parsedType
        }), Yd;
        const Wd = [],
          Fd = this._def.keyType,
          Rd = this._def.valueType;
        for (const Xd in md.data) Wd.push({
          key: Fd._parse(new Sd(md, Xd, md.path, Xd)),
          value: Rd._parse(new Sd(md, md.data[Xd], md.path, Xd))
        });
        return md.common.async ? pd.mergeObjectAsync(Od, Wd) : pd.mergeObjectSync(Od, Wd)
      }
      get element() {
        return this._def.valueType
      }
      static create(dd, Od, md) {
        return new oO(Od instanceof Vd ? {
          keyType: dd,
          valueType: Od,
          typeName: AO.ZodRecord,
          ...ud(md)
        } : {
          keyType: jd.create(),
          valueType: dd,
          typeName: AO.ZodRecord,
          ...ud(Od)
        })
      }
    }
    class NO extends Vd {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(dd) {
        const {
          status: Od,
          ctx: md
        } = this._processInputParams(dd);
        if (md.parsedType !== Qd.map) return Td(md, {
          code: od.invalid_type,
          expected: Qd.map,
          received: md.parsedType
        }), Yd;
        const Wd = this._def.keyType,
          Fd = this._def.valueType,
          Rd = [...md.data.entries()].map(((dd, Od) => {
            let [Rd, Xd] = dd;
            return {
              key: Wd._parse(new Sd(md, Rd, md.path, [Od, "key"])),
              value: Fd._parse(new Sd(md, Xd, md.path, [Od, "value"]))
            }
          }));
        if (md.common.async) {
          const dd = new Map;
          return Promise.resolve().then((async () => {
            for (const md of Rd) {
              const Wd = await md.key,
                Fd = await md.value;
              if ("aborted" === Wd.status || "aborted" === Fd.status) return Yd;
              "dH" !== Wd.status && "dH" !== Fd.status || Od.dH(), dd.set(Wd.value, Fd.value)
            }
            return {
              status: Od.value,
              value: dd
            }
          }))
        } {
          const dd = new Map;
          for (const md of Rd) {
            const Wd = md.key,
              Fd = md.value;
            if ("aborted" === Wd.status || "aborted" === Fd.status) return Yd;
            "dH" !== Wd.status && "dH" !== Fd.status || Od.dH(), dd.set(Wd.value, Fd.value)
          }
          return {
            status: Od.value,
            value: dd
          }
        }
      }
    }
    NO.create = (dd, Od, md) => new NO({
      valueType: Od,
      keyType: dd,
      typeName: AO.ZodMap,
      ...ud(md)
    });
    class qO extends Vd {
      _parse(dd) {
        const {
          status: Od,
          ctx: md
        } = this._processInputParams(dd);
        if (md.parsedType !== Qd.set) return Td(md, {
          code: od.invalid_type,
          expected: Qd.set,
          received: md.parsedType
        }), Yd;
        const Wd = this._def;
        null !== Wd.minSize && md.data.size < Wd.minSize.value && (Td(md, {
          code: od.too_small,
          minimum: Wd.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Wd.minSize.message
        }), Od.dH()), null !== Wd.maxSize && md.data.size > Wd.maxSize.value && (Td(md, {
          code: od.too_big,
          maximum: Wd.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Wd.maxSize.message
        }), Od.dH());
        const Fd = this._def.valueType;

        function Rd(dd) {
          const md = new Set;
          for (const Wd of dd) {
            if ("aborted" === Wd.status) return Yd;
            "dH" === Wd.status && Od.dH(), md.add(Wd.value)
          }
          return {
            status: Od.value,
            value: md
          }
        }
        const Xd = [...md.data.values()].map(((dd, Od) => Fd._parse(new Sd(md, dd, md.path, Od))));
        return md.common.async ? Promise.all(Xd).then((dd => Rd(dd))) : Rd(Xd)
      }
      min(dd, Od) {
        return new qO({
          ...this._def,
          minSize: {
            value: dd,
            message: Bd.toString(Od)
          }
        })
      }
      max(dd, Od) {
        return new qO({
          ...this._def,
          maxSize: {
            value: dd,
            message: Bd.toString(Od)
          }
        })
      }
      size(dd, Od) {
        return this.min(dd, Od).max(dd, Od)
      }
      nonempty(dd) {
        return this.min(1, dd)
      }
    }
    qO.create = (dd, Od) => new qO({
      valueType: dd,
      minSize: null,
      maxSize: null,
      typeName: AO.ZodSet,
      ...ud(Od)
    });
    class HO extends Vd {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(dd) {
        const {
          ctx: Od
        } = this._processInputParams(dd);
        if (Od.parsedType !== Qd.function) return Td(Od, {
          code: od.invalid_type,
          expected: Qd.function,
          received: Od.parsedType
        }), Yd;

        function md(dd, md) {
          return bd({
            data: dd,
            path: Od.path,
            errorMaps: [Od.common.contextualErrorMap, Od.schemaErrorMap, yd(), qd].filter((dd => !!dd)),
            issueData: {
              code: od.invalid_arguments,
              argumentsError: md
            }
          })
        }

        function Wd(dd, md) {
          return bd({
            data: dd,
            path: Od.path,
            errorMaps: [Od.common.contextualErrorMap, Od.schemaErrorMap, yd(), qd].filter((dd => !!dd)),
            issueData: {
              code: od.invalid_return_type,
              returnTypeError: md
            }
          })
        }
        const Fd = {
            errorMap: Od.common.contextualErrorMap
          },
          Rd = Od.data;
        if (this._def.returns instanceof gO) {
          const dd = this;
          return wd((async function() {
            for (var Od = arguments.length, Xd = new Array(Od), Kd = 0; Kd < Od; Kd++) Xd[Kd] = arguments[Kd];
            const hd = new Nd([]),
              vd = await dd._def.args.parseAsync(Xd, Fd).catch((dd => {
                throw hd.addIssue(md(Xd, dd)), hd
              })),
              Qd = await Reflect.apply(Rd, this, vd);
            return await dd._def.returns._def.type.parseAsync(Qd, Fd).catch((dd => {
              throw hd.addIssue(Wd(Qd, dd)), hd
            }))
          }))
        } {
          const dd = this;
          return wd((function() {
            for (var Od = arguments.length, Xd = new Array(Od), Kd = 0; Kd < Od; Kd++) Xd[Kd] = arguments[Kd];
            const hd = dd._def.args.safeParse(Xd, Fd);
            if (!hd.success) throw new Nd([md(Xd, hd.error)]);
            const vd = Reflect.apply(Rd, this, hd.data),
              Qd = dd._def.returns.safeParse(vd, Fd);
            if (!Qd.success) throw new Nd([Wd(vd, Qd.error)]);
            return Qd.data
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
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        return new HO({
          ...this._def,
          args: tO.create(Od).rest(dO.create())
        })
      }
      returns(dd) {
        return new HO({
          ...this._def,
          returns: dd
        })
      }
      implement(dd) {
        return this.parse(dd)
      }
      strictImplement(dd) {
        return this.parse(dd)
      }
      static create(dd, Od, md) {
        return new HO({
          args: dd || tO.create([]).rest(dO.create()),
          returns: Od || dO.create(),
          typeName: AO.ZodFunction,
          ...ud(md)
        })
      }
    }
    class yO extends Vd {
      get schema() {
        return this._def.getter()
      }
      _parse(dd) {
        const {
          ctx: Od
        } = this._processInputParams(dd);
        return this._def.getter()._parse({
          data: Od.data,
          path: Od.path,
          parent: Od
        })
      }
    }
    yO.create = (dd, Od) => new yO({
      getter: dd,
      typeName: AO.ZodLazy,
      ...ud(Od)
    });
    class bO extends Vd {
      _parse(dd) {
        if (dd.data !== this._def.value) {
          const Od = this._getOrReturnCtx(dd);
          return Td(Od, {
            received: Od.data,
            code: od.invalid_literal,
            expected: this._def.value
          }), Yd
        }
        return {
          status: "valid",
          value: dd.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function TO(dd, Od) {
      return new pO({
        values: dd,
        typeName: AO.ZodEnum,
        ...ud(Od)
      })
    }
    bO.create = (dd, Od) => new bO({
      value: dd,
      typeName: AO.ZodLiteral,
      ...ud(Od)
    });
    class pO extends Vd {
      _parse(dd) {
        if ("string" !== typeof dd.data) {
          const Od = this._getOrReturnCtx(dd),
            md = this._def.values;
          return Td(Od, {
            expected: Kd.joinValues(md),
            received: Od.parsedType,
            code: od.invalid_type
          }), Yd
        }
        if (-1 === this._def.values.indexOf(dd.data)) {
          const Od = this._getOrReturnCtx(dd),
            md = this._def.values;
          return Td(Od, {
            received: Od.data,
            code: od.invalid_enum_value,
            options: md
          }), Yd
        }
        return wd(dd.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const dd = {};
        for (const Od of this._def.values) dd[Od] = Od;
        return dd
      }
      get Values() {
        const dd = {};
        for (const Od of this._def.values) dd[Od] = Od;
        return dd
      }
      get Enum() {
        const dd = {};
        for (const Od of this._def.values) dd[Od] = Od;
        return dd
      }
      extract(dd) {
        return pO.create(dd)
      }
      exclude(dd) {
        return pO.create(this.options.filter((Od => !dd.includes(Od))))
      }
    }
    pO.create = TO;
    class YO extends Vd {
      _parse(dd) {
        const Od = Kd.getValidEnumValues(this._def.values),
          md = this._getOrReturnCtx(dd);
        if (md.parsedType !== Qd.string && md.parsedType !== Qd.number) {
          const dd = Kd.objectValues(Od);
          return Td(md, {
            expected: Kd.joinValues(dd),
            received: md.parsedType,
            code: od.invalid_type
          }), Yd
        }
        if (-1 === Od.indexOf(dd.data)) {
          const dd = Kd.objectValues(Od);
          return Td(md, {
            received: md.data,
            code: od.invalid_enum_value,
            options: dd
          }), Yd
        }
        return wd(dd.data)
      }
      get enum() {
        return this._def.values
      }
    }
    YO.create = (dd, Od) => new YO({
      values: dd,
      typeName: AO.ZodNativeEnum,
      ...ud(Od)
    });
    class gO extends Vd {
      unwrap() {
        return this._def.type
      }
      _parse(dd) {
        const {
          ctx: Od
        } = this._processInputParams(dd);
        if (Od.parsedType !== Qd.promise && !1 === Od.common.async) return Td(Od, {
          code: od.invalid_type,
          expected: Qd.promise,
          received: Od.parsedType
        }), Yd;
        const md = Od.parsedType === Qd.promise ? Od.data : Promise.resolve(Od.data);
        return wd(md.then((dd => this._def.type.parseAsync(dd, {
          path: Od.path,
          errorMap: Od.common.contextualErrorMap
        }))))
      }
    }
    gO.create = (dd, Od) => new gO({
      type: dd,
      typeName: AO.ZodPromise,
      ...ud(Od)
    });
    class wO extends Vd {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === AO.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(dd) {
        const {
          status: Od,
          ctx: md
        } = this._processInputParams(dd), Wd = this._def.effect || null, Fd = {
          addIssue: dd => {
            Td(md, dd), dd.fatal ? Od.abort() : Od.dH()
          },
          get path() {
            return md.path
          }
        };
        if (Fd.addIssue = Fd.addIssue.bind(Fd), "preprocess" === Wd.type) {
          const dd = Wd.transform(md.data, Fd);
          return md.common.issues.length ? {
            status: "dH",
            value: md.data
          } : md.common.async ? Promise.resolve(dd).then((dd => this._def.schema._parseAsync({
            data: dd,
            path: md.path,
            parent: md
          }))) : this._def.schema._parseSync({
            data: dd,
            path: md.path,
            parent: md
          })
        }
        if ("refinement" === Wd.type) {
          const dd = dd => {
            const Od = Wd.refinement(dd, Fd);
            if (md.common.async) return Promise.resolve(Od);
            if (Od instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return dd
          };
          if (!1 === md.common.async) {
            const Wd = this._def.schema._parseSync({
              data: md.data,
              path: md.path,
              parent: md
            });
            return "aborted" === Wd.status ? Yd : ("dH" === Wd.status && Od.dH(), dd(Wd.value), {
              status: Od.value,
              value: Wd.value
            })
          }
          return this._def.schema._parseAsync({
            data: md.data,
            path: md.path,
            parent: md
          }).then((md => "aborted" === md.status ? Yd : ("dH" === md.status && Od.dH(), dd(md.value).then((() => ({
            status: Od.value,
            value: md.value
          }))))))
        }
        if ("transform" === Wd.type) {
          if (!1 === md.common.async) {
            const dd = this._def.schema._parseSync({
              data: md.data,
              path: md.path,
              parent: md
            });
            if (!Ud(dd)) return dd;
            const Rd = Wd.transform(dd.value, Fd);
            if (Rd instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: Od.value,
              value: Rd
            }
          }
          return this._def.schema._parseAsync({
            data: md.data,
            path: md.path,
            parent: md
          }).then((dd => Ud(dd) ? Promise.resolve(Wd.transform(dd.value, Fd)).then((dd => ({
            status: Od.value,
            value: dd
          }))) : dd))
        }
        Kd.assertNever(Wd)
      }
    }
    wO.create = (dd, Od, md) => new wO({
      schema: dd,
      typeName: AO.ZodEffects,
      effect: Od,
      ...ud(md)
    }), wO.createWithPreprocess = (dd, Od, md) => new wO({
      schema: Od,
      effect: {
        type: "preprocess",
        transform: dd
      },
      typeName: AO.ZodEffects,
      ...ud(md)
    });
    class aO extends Vd {
      _parse(dd) {
        return this._getType(dd) === Qd.undefined ? wd(void 0) : this._def.innerType._parse(dd)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    aO.create = (dd, Od) => new aO({
      innerType: dd,
      typeName: AO.ZodOptional,
      ...ud(Od)
    });
    class EO extends Vd {
      _parse(dd) {
        return this._getType(dd) === Qd.null ? wd(null) : this._def.innerType._parse(dd)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    EO.create = (dd, Od) => new EO({
      innerType: dd,
      typeName: AO.ZodNullable,
      ...ud(Od)
    });
    class JO extends Vd {
      _parse(dd) {
        const {
          ctx: Od
        } = this._processInputParams(dd);
        let md = Od.data;
        return Od.parsedType === Qd.undefined && (md = this._def.defaultValue()), this._def.innerType._parse({
          data: md,
          path: Od.path,
          parent: Od
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    JO.create = (dd, Od) => new JO({
      innerType: dd,
      typeName: AO.ZodDefault,
      defaultValue: "function" === typeof Od.default ? Od.default : () => Od.default,
      ...ud(Od)
    });
    class UO extends Vd {
      _parse(dd) {
        const {
          ctx: Od
        } = this._processInputParams(dd), md = {
          ...Od,
          common: {
            ...Od.common,
            issues: []
          }
        }, Wd = this._def.innerType._parse({
          data: md.data,
          path: md.path,
          parent: {
            ...md
          }
        });
        return xd(Wd) ? Wd.then((dd => ({
          status: "valid",
          value: "valid" === dd.status ? dd.value : this._def.catchValue({
            get error() {
              return new Nd(md.common.issues)
            },
            input: md.data
          })
        }))) : {
          status: "valid",
          value: "valid" === Wd.status ? Wd.value : this._def.catchValue({
            get error() {
              return new Nd(md.common.issues)
            },
            input: md.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    UO.create = (dd, Od) => new UO({
      innerType: dd,
      typeName: AO.ZodCatch,
      catchValue: "function" === typeof Od.catch ? Od.catch : () => Od.catch,
      ...ud(Od)
    });
    class xO extends Vd {
      _parse(dd) {
        if (this._getType(dd) !== Qd.nan) {
          const Od = this._getOrReturnCtx(dd);
          return Td(Od, {
            code: od.invalid_type,
            expected: Qd.nan,
            received: Od.parsedType
          }), Yd
        }
        return {
          status: "valid",
          value: dd.data
        }
      }
    }
    xO.create = dd => new xO({
      typeName: AO.ZodNaN,
      ...ud(dd)
    });
    const BO = Symbol("zod_brand");
    class SO extends Vd {
      _parse(dd) {
        const {
          ctx: Od
        } = this._processInputParams(dd), md = Od.data;
        return this._def.type._parse({
          data: md,
          path: Od.path,
          parent: Od
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class sO extends Vd {
      _parse(dd) {
        const {
          status: Od,
          ctx: md
        } = this._processInputParams(dd);
        if (md.common.async) {
          return (async () => {
            const dd = await this._def.in._parseAsync({
              data: md.data,
              path: md.path,
              parent: md
            });
            return "aborted" === dd.status ? Yd : "dH" === dd.status ? (Od.dH(), gd(dd.value)) : this._def.out._parseAsync({
              data: dd.value,
              path: md.path,
              parent: md
            })
          })()
        } {
          const dd = this._def.in._parseSync({
            data: md.data,
            path: md.path,
            parent: md
          });
          return "aborted" === dd.status ? Yd : "dH" === dd.status ? (Od.dH(), {
            status: "dH",
            value: dd.value
          }) : this._def.out._parseSync({
            data: dd.value,
            path: md.path,
            parent: md
          })
        }
      }
      static create(dd, Od) {
        return new sO({
          in: dd,
          out: Od,
          typeName: AO.ZodPipeline
        })
      }
    }
    class uO extends Vd {
      _parse(dd) {
        const Od = this._def.innerType._parse(dd);
        return Ud(Od) && (Od.value = Object.freeze(Od.value)), Od
      }
    }
    uO.create = (dd, Od) => new uO({
      innerType: dd,
      typeName: AO.ZodReadonly,
      ...ud(Od)
    });
    const VO = function(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          md = arguments.length > 2 ? arguments[2] : void 0;
        return dd ? Md.create().superRefine(((Wd, Fd) => {
          var Rd, Xd;
          if (!dd(Wd)) {
            const dd = "function" === typeof Od ? Od(Wd) : "string" === typeof Od ? {
                message: Od
              } : Od,
              Kd = null === (Xd = null !== (Rd = dd.fatal) && void 0 !== Rd ? Rd : md) || void 0 === Xd || Xd,
              hd = "string" === typeof dd ? {
                message: dd
              } : dd;
            Fd.addIssue({
              code: "custom",
              ...hd,
              fatal: Kd
            })
          }
        })) : Md.create()
      },
      iO = {
        object: RO.lazycreate
      };
    var AO;
    ! function(dd) {
      dd.ZodString = "ZodString", dd.ZodNumber = "ZodNumber", dd.ZodNaN = "ZodNaN", dd.ZodBigInt = "ZodBigInt", dd.ZodBoolean = "ZodBoolean", dd.ZodDate = "ZodDate", dd.ZodSymbol = "ZodSymbol", dd.ZodUndefined = "ZodUndefined", dd.ZodNull = "ZodNull", dd.ZodAny = "ZodAny", dd.ZodUnknown = "ZodUnknown", dd.ZodNever = "ZodNever", dd.ZodVoid = "ZodVoid", dd.ZodArray = "ZodArray", dd.ZodObject = "ZodObject", dd.ZodUnion = "ZodUnion", dd.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", dd.ZodIntersection = "ZodIntersection", dd.ZodTuple = "ZodTuple", dd.ZodRecord = "ZodRecord", dd.ZodMap = "ZodMap", dd.ZodSet = "ZodSet", dd.ZodFunction = "ZodFunction", dd.ZodLazy = "ZodLazy", dd.ZodLiteral = "ZodLiteral", dd.ZodEnum = "ZodEnum", dd.ZodEffects = "ZodEffects", dd.ZodNativeEnum = "ZodNativeEnum", dd.ZodOptional = "ZodOptional", dd.ZodNullable = "ZodNullable", dd.ZodDefault = "ZodDefault", dd.ZodCatch = "ZodCatch", dd.ZodPromise = "ZodPromise", dd.ZodBranded = "ZodBranded", dd.ZodPipeline = "ZodPipeline", dd.ZodReadonly = "ZodReadonly"
    }(AO || (AO = {}));
    const rO = jd.create,
      GO = ed.create,
      nO = xO.create,
      LO = Id.create,
      PO = ld.create,
      zO = Cd.create,
      cO = Zd.create,
      jO = kd.create,
      DO = fd.create,
      eO = Md.create,
      IO = dO.create,
      lO = OO.create,
      CO = mO.create,
      ZO = WO.create,
      kO = RO.create,
      fO = RO.strictCreate,
      MO = XO.create,
      dm = hO.create,
      Om = QO.create,
      mm = tO.create,
      Wm = oO.create,
      Fm = NO.create,
      Rm = qO.create,
      Xm = HO.create,
      Km = yO.create,
      hm = bO.create,
      Qm = pO.create,
      tm = YO.create,
      om = gO.create,
      Nm = wO.create,
      qm = aO.create,
      Hm = EO.create,
      ym = wO.createWithPreprocess,
      bm = sO.create,
      Tm = {
        string: dd => jd.create({
          ...dd,
          coerce: !0
        }),
        number: dd => ed.create({
          ...dd,
          coerce: !0
        }),
        boolean: dd => ld.create({
          ...dd,
          coerce: !0
        }),
        bigint: dd => Id.create({
          ...dd,
          coerce: !0
        }),
        date: dd => Cd.create({
          ...dd,
          coerce: !0
        })
      },
      pm = Yd;
    var Ym = Object.freeze({
        __proto__: null,
        defaultErrorMap: qd,
        setErrorMap: function(dd) {
          Hd = dd
        },
        getErrorMap: yd,
        makeIssue: bd,
        EMPTY_PATH: [],
        addIssueToContext: Td,
        ParseStatus: pd,
        INVALID: Yd,
        DIRTY: gd,
        OK: wd,
        isAborted: Ed,
        isDirty: Jd,
        isValid: Ud,
        isAsync: xd,
        get util() {
          return Kd
        },
        get objectUtil() {
          return hd
        },
        ZodParsedType: Qd,
        getParsedType: td,
        ZodType: Vd,
        ZodString: jd,
        ZodNumber: ed,
        ZodBigInt: Id,
        ZodBoolean: ld,
        ZodDate: Cd,
        ZodSymbol: Zd,
        ZodUndefined: kd,
        ZodNull: fd,
        ZodAny: Md,
        ZodUnknown: dO,
        ZodNever: OO,
        ZodVoid: mO,
        ZodArray: WO,
        ZodObject: RO,
        ZodUnion: XO,
        ZodDiscriminatedUnion: hO,
        ZodIntersection: QO,
        ZodTuple: tO,
        ZodRecord: oO,
        ZodMap: NO,
        ZodSet: qO,
        ZodFunction: HO,
        ZodLazy: yO,
        ZodLiteral: bO,
        ZodEnum: pO,
        ZodNativeEnum: YO,
        ZodPromise: gO,
        ZodEffects: wO,
        ZodTransformer: wO,
        ZodOptional: aO,
        ZodNullable: EO,
        ZodDefault: JO,
        ZodCatch: UO,
        ZodNaN: xO,
        BRAND: BO,
        ZodBranded: SO,
        ZodPipeline: sO,
        ZodReadonly: uO,
        custom: VO,
        Schema: Vd,
        ZodSchema: Vd,
        late: iO,
        get ZodFirstPartyTypeKind() {
          return AO
        },
        coerce: Tm,
        any: eO,
        array: ZO,
        bigint: LO,
        boolean: PO,
        date: zO,
        discriminatedUnion: dm,
        effect: Nm,
        enum: Qm,
        function: Xm,
        instanceof: function(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${dd.name}`
          };
          return VO((Od => Od instanceof dd), Od)
        },
        intersection: Om,
        lazy: Km,
        literal: hm,
        map: Fm,
        nan: nO,
        nativeEnum: tm,
        never: lO,
        null: DO,
        nullable: Hm,
        number: GO,
        object: kO,
        oboolean: () => PO().optional(),
        onumber: () => GO().optional(),
        optional: qm,
        ostring: () => rO().optional(),
        pipeline: bm,
        preprocess: ym,
        promise: om,
        record: Wm,
        set: Rm,
        strictObject: fO,
        string: rO,
        symbol: cO,
        transformer: Nm,
        tuple: mm,
        undefined: jO,
        union: MO,
        unknown: IO,
        void: CO,
        NEVER: pm,
        ZodIssueCode: od,
        quotelessJson: dd => JSON.stringify(dd, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: Nd
      }),
      gm = {
        exports: {}
      };
    ! function(dd) {
      var Od = function(dd) {
        var md = 1e7,
          Wd = 9007199254740992,
          Fd = od(Wd),
          Rd = "0123456789abcdefghijklmnopqrstuvwxyz",
          Xd = "function" === typeof BigInt;

        function Kd(dd, Od, md, Wd) {
          return "undefined" === typeof dd ? Kd[0] : "undefined" !== typeof Od && (10 !== +Od || md) ? ld(dd, Od, md, Wd) : Md(dd)
        }

        function hd(dd, Od) {
          this.value = dd, this.sign = Od, this.isSmall = !1
        }

        function vd(dd) {
          this.value = dd, this.sign = dd < 0, this.isSmall = !0
        }

        function Qd(dd) {
          this.value = dd
        }

        function td(dd) {
          return -Wd < dd && dd < Wd
        }

        function od(dd) {
          return dd < 1e7 ? [dd] : dd < 1e14 ? [dd % 1e7, Math.floor(dd / 1e7)] : [dd % 1e7, Math.floor(dd / 1e7) % 1e7, Math.floor(dd / 1e14)]
        }

        function Nd(dd) {
          qd(dd);
          var Od = dd.length;
          if (Od < 4 && ud(dd, Fd) < 0) switch (Od) {
            case 0:
              return 0;
            case 1:
              return dd[0];
            case 2:
              return dd[0] + dd[1] * md;
            default:
              return dd[0] + (dd[1] + dd[2] * md) * md
          }
          return dd
        }

        function qd(dd) {
          for (var Od = dd.length; 0 === dd[--Od];);
          dd.length = Od + 1
        }

        function Hd(dd) {
          for (var Od = new Array(dd), md = -1; ++md < dd;) Od[md] = 0;
          return Od
        }

        function yd(dd) {
          return dd > 0 ? Math.floor(dd) : Math.ceil(dd)
        }

        function bd(dd, Od) {
          var Wd, Fd, Rd = dd.length,
            Xd = Od.length,
            Kd = new Array(Rd),
            hd = 0,
            vd = md;
          for (Fd = 0; Fd < Xd; Fd++) hd = (Wd = dd[Fd] + Od[Fd] + hd) >= vd ? 1 : 0, Kd[Fd] = Wd - hd * vd;
          for (; Fd < Rd;) hd = (Wd = dd[Fd] + hd) === vd ? 1 : 0, Kd[Fd++] = Wd - hd * vd;
          return hd > 0 && Kd.push(hd), Kd
        }

        function Td(dd, Od) {
          return dd.length >= Od.length ? bd(dd, Od) : bd(Od, dd)
        }

        function pd(dd, Od) {
          var Wd, Fd, Rd = dd.length,
            Xd = new Array(Rd),
            Kd = md;
          for (Fd = 0; Fd < Rd; Fd++) Wd = dd[Fd] - Kd + Od, Od = Math.floor(Wd / Kd), Xd[Fd] = Wd - Od * Kd, Od += 1;
          for (; Od > 0;) Xd[Fd++] = Od % Kd, Od = Math.floor(Od / Kd);
          return Xd
        }

        function Yd(dd, Od) {
          var Wd, Fd, Rd = dd.length,
            Xd = Od.length,
            Kd = new Array(Rd),
            hd = 0,
            vd = md;
          for (Wd = 0; Wd < Xd; Wd++)(Fd = dd[Wd] - hd - Od[Wd]) < 0 ? (Fd += vd, hd = 1) : hd = 0, Kd[Wd] = Fd;
          for (Wd = Xd; Wd < Rd; Wd++) {
            if (!((Fd = dd[Wd] - hd) < 0)) {
              Kd[Wd++] = Fd;
              break
            }
            Fd += vd, Kd[Wd] = Fd
          }
          for (; Wd < Rd; Wd++) Kd[Wd] = dd[Wd];
          return qd(Kd), Kd
        }

        function gd(dd, Od, Wd) {
          var Fd, Rd, Xd = dd.length,
            Kd = new Array(Xd),
            Qd = -Od,
            td = md;
          for (Fd = 0; Fd < Xd; Fd++) Rd = dd[Fd] + Qd, Qd = Math.floor(Rd / td), Rd %= td, Kd[Fd] = Rd < 0 ? Rd + td : Rd;
          return "number" === typeof(Kd = Nd(Kd)) ? (Wd && (Kd = -Kd), new vd(Kd)) : new hd(Kd, Wd)
        }

        function wd(dd, Od) {
          var Wd, Fd, Rd, Xd, Kd = dd.length,
            hd = Od.length,
            vd = Hd(Kd + hd),
            Qd = md;
          for (Rd = 0; Rd < Kd; ++Rd) {
            Xd = dd[Rd];
            for (var td = 0; td < hd; ++td) Wd = Xd * Od[td] + vd[Rd + td], Fd = Math.floor(Wd / Qd), vd[Rd + td] = Wd - Fd * Qd, vd[Rd + td + 1] += Fd
          }
          return qd(vd), vd
        }

        function Ed(dd, Od) {
          var Wd, Fd, Rd = dd.length,
            Xd = new Array(Rd),
            Kd = md,
            hd = 0;
          for (Fd = 0; Fd < Rd; Fd++) Wd = dd[Fd] * Od + hd, hd = Math.floor(Wd / Kd), Xd[Fd] = Wd - hd * Kd;
          for (; hd > 0;) Xd[Fd++] = hd % Kd, hd = Math.floor(hd / Kd);
          return Xd
        }

        function Jd(dd, Od) {
          for (var md = []; Od-- > 0;) md.push(0);
          return md.concat(dd)
        }

        function Ud(dd, Od) {
          var md = Math.max(dd.length, Od.length);
          if (md <= 30) return wd(dd, Od);
          md = Math.ceil(md / 2);
          var Wd = dd.slice(md),
            Fd = dd.slice(0, md),
            Rd = Od.slice(md),
            Xd = Od.slice(0, md),
            Kd = Ud(Fd, Xd),
            hd = Ud(Wd, Rd),
            vd = Ud(Td(Fd, Wd), Td(Xd, Rd)),
            Qd = Td(Td(Kd, Jd(Yd(Yd(vd, Kd), hd), md)), Jd(hd, 2 * md));
          return qd(Qd), Qd
        }

        function xd(dd, Od, Wd) {
          return new hd(dd < md ? Ed(Od, dd) : wd(Od, od(dd)), Wd)
        }

        function Bd(dd) {
          var Od, Wd, Fd, Rd, Xd = dd.length,
            Kd = Hd(Xd + Xd),
            hd = md;
          for (Fd = 0; Fd < Xd; Fd++) {
            Wd = 0 - (Rd = dd[Fd]) * Rd;
            for (var vd = Fd; vd < Xd; vd++) Od = Rd * dd[vd] * 2 + Kd[Fd + vd] + Wd, Wd = Math.floor(Od / hd), Kd[Fd + vd] = Od - Wd * hd;
            Kd[Fd + Xd] = Wd
          }
          return qd(Kd), Kd
        }

        function Sd(dd, Od) {
          var Wd, Fd, Rd, Xd, Kd = dd.length,
            hd = Hd(Kd),
            vd = md;
          for (Rd = 0, Wd = Kd - 1; Wd >= 0; --Wd) Rd = (Xd = Rd * vd + dd[Wd]) - (Fd = yd(Xd / Od)) * Od, hd[Wd] = 0 | Fd;
          return [hd, 0 | Rd]
        }

        function sd(dd, Od) {
          var Wd, Fd = Md(Od);
          if (Xd) return [new Qd(dd.value / Fd.value), new Qd(dd.value % Fd.value)];
          var Rd, td = dd.value,
            bd = Fd.value;
          if (0 === bd) throw new Error("Cannot divide by zero");
          if (dd.isSmall) return Fd.isSmall ? [new vd(yd(td / bd)), new vd(td % bd)] : [Kd[0], dd];
          if (Fd.isSmall) {
            if (1 === bd) return [dd, Kd[0]];
            if (-1 == bd) return [dd.ty(), Kd[0]];
            var Td = Math.abs(bd);
            if (Td < md) {
              Rd = Nd((Wd = Sd(td, Td))[0]);
              var pd = Wd[1];
              return dd.sign && (pd = -pd), "number" === typeof Rd ? (dd.sign !== Fd.sign && (Rd = -Rd), [new vd(Rd), new vd(pd)]) : [new hd(Rd, dd.sign !== Fd.sign), new vd(pd)]
            }
            bd = od(Td)
          }
          var gd = ud(td, bd);
          if (-1 === gd) return [Kd[0], dd];
          if (0 === gd) return [Kd[dd.sign === Fd.sign ? 1 : -1], Kd[0]];
          Wd = td.length + bd.length <= 200 ? function(dd, Od) {
            var Wd, Fd, Rd, Xd, Kd, hd, vd, Qd = dd.length,
              td = Od.length,
              od = md,
              qd = Hd(Od.length),
              yd = Od[td - 1],
              bd = Math.ceil(od / (2 * yd)),
              Td = Ed(dd, bd),
              pd = Ed(Od, bd);
            for (Td.length <= Qd && Td.push(0), pd.push(0), yd = pd[td - 1], Fd = Qd - td; Fd >= 0; Fd--) {
              for (Wd = od - 1, Td[Fd + td] !== yd && (Wd = Math.floor((Td[Fd + td] * od + Td[Fd + td - 1]) / yd)), Rd = 0, Xd = 0, hd = pd.length, Kd = 0; Kd < hd; Kd++) Rd += Wd * pd[Kd], vd = Math.floor(Rd / od), Xd += Td[Fd + Kd] - (Rd - vd * od), Rd = vd, Xd < 0 ? (Td[Fd + Kd] = Xd + od, Xd = -1) : (Td[Fd + Kd] = Xd, Xd = 0);
              for (; 0 !== Xd;) {
                for (Wd -= 1, Rd = 0, Kd = 0; Kd < hd; Kd++)(Rd += Td[Fd + Kd] - od + pd[Kd]) < 0 ? (Td[Fd + Kd] = Rd + od, Rd = 0) : (Td[Fd + Kd] = Rd, Rd = 1);
                Xd += Rd
              }
              qd[Fd] = Wd
            }
            return Td = Sd(Td, bd)[0], [Nd(qd), Nd(Td)]
          }(td, bd) : function(dd, Od) {
            for (var Wd, Fd, Rd, Xd, Kd, hd = dd.length, vd = Od.length, Qd = [], td = [], od = md; hd;)
              if (td.unshift(dd[--hd]), qd(td), ud(td, Od) < 0) Qd.push(0);
              else {
                Rd = td[(Fd = td.length) - 1] * od + td[Fd - 2], Xd = Od[vd - 1] * od + Od[vd - 2], Fd > vd && (Rd = (Rd + 1) * od), Wd = Math.ceil(Rd / Xd);
                do {
                  if (ud(Kd = Ed(Od, Wd), td) <= 0) break;
                  Wd--
                } while (Wd);
                Qd.push(Wd), td = Yd(td, Kd)
              } return Qd.reverse(), [Nd(Qd), Nd(td)]
          }(td, bd), Rd = Wd[0];
          var wd = dd.sign !== Fd.sign,
            Jd = Wd[1],
            Ud = dd.sign;
          return "number" === typeof Rd ? (wd && (Rd = -Rd), Rd = new vd(Rd)) : Rd = new hd(Rd, wd), "number" === typeof Jd ? (Ud && (Jd = -Jd), Jd = new vd(Jd)) : Jd = new hd(Jd, Ud), [Rd, Jd]
        }

        function ud(dd, Od) {
          if (dd.length !== Od.length) return dd.length > Od.length ? 1 : -1;
          for (var md = dd.length - 1; md >= 0; md--)
            if (dd[md] !== Od[md]) return dd[md] > Od[md] ? 1 : -1;
          return 0
        }

        function Vd(dd) {
          var Od = dd.abs();
          return !Od.isUnit() && (!!(Od.equals(2) || Od.equals(3) || Od.equals(5)) || !(Od.isEven() || Od.isDivisibleBy(3) || Od.isDivisibleBy(5)) && (!!Od.lesser(49) || void 0))
        }

        function Ad(dd, md) {
          for (var Wd, Fd, Rd, Xd = dd.prev(), Kd = Xd, hd = 0; Kd.isEven();) Kd = Kd.divide(2), hd++;
          dd: for (Fd = 0; Fd < md.length; Fd++)
            if (!dd.lesser(md[Fd]) && !(Rd = Od(md[Fd]).modPow(Kd, dd)).isUnit() && !Rd.equals(Xd)) {
              for (Wd = hd - 1; 0 != Wd; Wd--) {
                if ((Rd = Rd.square().mod(dd)).isUnit()) return !1;
                if (Rd.equals(Xd)) continue dd
              }
              return !1
            }
          return !0
        }
        hd.prototype = Object.create(Kd.prototype), vd.prototype = Object.create(Kd.prototype), Qd.prototype = Object.create(Kd.prototype), hd.prototype.add = function(dd) {
          var Od = Md(dd);
          if (this.sign !== Od.sign) return this.subtract(Od.ty());
          var md = this.value,
            Wd = Od.value;
          return Od.isSmall ? new hd(pd(md, Math.abs(Wd)), this.sign) : new hd(Td(md, Wd), this.sign)
        }, hd.prototype.plus = hd.prototype.add, vd.prototype.add = function(dd) {
          var Od = Md(dd),
            md = this.value;
          if (md < 0 !== Od.sign) return this.subtract(Od.ty());
          var Wd = Od.value;
          if (Od.isSmall) {
            if (td(md + Wd)) return new vd(md + Wd);
            Wd = od(Math.abs(Wd))
          }
          return new hd(pd(Wd, Math.abs(md)), md < 0)
        }, vd.prototype.plus = vd.prototype.add, Qd.prototype.add = function(dd) {
          return new Qd(this.value + Md(dd).value)
        }, Qd.prototype.plus = Qd.prototype.add, hd.prototype.subtract = function(dd) {
          var Od = Md(dd);
          if (this.sign !== Od.sign) return this.add(Od.ty());
          var md = this.value,
            Wd = Od.value;
          return Od.isSmall ? gd(md, Math.abs(Wd), this.sign) : function(dd, Od, md) {
            var Wd;
            return ud(dd, Od) >= 0 ? Wd = Yd(dd, Od) : (Wd = Yd(Od, dd), md = !md), "number" === typeof(Wd = Nd(Wd)) ? (md && (Wd = -Wd), new vd(Wd)) : new hd(Wd, md)
          }(md, Wd, this.sign)
        }, hd.prototype.minus = hd.prototype.subtract, vd.prototype.subtract = function(dd) {
          var Od = Md(dd),
            md = this.value;
          if (md < 0 !== Od.sign) return this.add(Od.ty());
          var Wd = Od.value;
          return Od.isSmall ? new vd(md - Wd) : gd(Wd, Math.abs(md), md >= 0)
        }, vd.prototype.minus = vd.prototype.subtract, Qd.prototype.subtract = function(dd) {
          return new Qd(this.value - Md(dd).value)
        }, Qd.prototype.minus = Qd.prototype.subtract, hd.prototype.ty = function() {
          return new hd(this.value, !this.sign)
        }, vd.prototype.ty = function() {
          var dd = this.sign,
            Od = new vd(-this.value);
          return Od.sign = !dd, Od
        }, Qd.prototype.ty = function() {
          return new Qd(-this.value)
        }, hd.prototype.abs = function() {
          return new hd(this.value, !1)
        }, vd.prototype.abs = function() {
          return new vd(Math.abs(this.value))
        }, Qd.prototype.abs = function() {
          return new Qd(this.value >= 0 ? this.value : -this.value)
        }, hd.prototype.multiply = function(dd) {
          var Od, Wd, Fd, Rd = Md(dd),
            Xd = this.value,
            vd = Rd.value,
            Qd = this.sign !== Rd.sign;
          if (Rd.isSmall) {
            if (0 === vd) return Kd[0];
            if (1 === vd) return this;
            if (-1 === vd) return this.ty();
            if ((Od = Math.abs(vd)) < md) return new hd(Ed(Xd, Od), Qd);
            vd = od(Od)
          }
          return Wd = Xd.length, Fd = vd.length, new hd(-.012 * Wd - .012 * Fd + 15e-6 * Wd * Fd > 0 ? Ud(Xd, vd) : wd(Xd, vd), Qd)
        }, hd.prototype.times = hd.prototype.multiply, vd.prototype._multiplyBySmall = function(dd) {
          return td(dd.value * this.value) ? new vd(dd.value * this.value) : xd(Math.abs(dd.value), od(Math.abs(this.value)), this.sign !== dd.sign)
        }, hd.prototype._multiplyBySmall = function(dd) {
          return 0 === dd.value ? Kd[0] : 1 === dd.value ? this : -1 === dd.value ? this.ty() : xd(Math.abs(dd.value), this.value, this.sign !== dd.sign)
        }, vd.prototype.multiply = function(dd) {
          return Md(dd)._multiplyBySmall(this)
        }, vd.prototype.times = vd.prototype.multiply, Qd.prototype.multiply = function(dd) {
          return new Qd(this.value * Md(dd).value)
        }, Qd.prototype.times = Qd.prototype.multiply, hd.prototype.square = function() {
          return new hd(Bd(this.value), !1)
        }, vd.prototype.square = function() {
          var dd = this.value * this.value;
          return td(dd) ? new vd(dd) : new hd(Bd(od(Math.abs(this.value))), !1)
        }, Qd.prototype.square = function(dd) {
          return new Qd(this.value * this.value)
        }, hd.prototype.divmod = function(dd) {
          var Od = sd(this, dd);
          return {
            quotient: Od[0],
            remainder: Od[1]
          }
        }, Qd.prototype.divmod = vd.prototype.divmod = hd.prototype.divmod, hd.prototype.divide = function(dd) {
          return sd(this, dd)[0]
        }, Qd.prototype.over = Qd.prototype.divide = function(dd) {
          return new Qd(this.value / Md(dd).value)
        }, vd.prototype.over = vd.prototype.divide = hd.prototype.over = hd.prototype.divide, hd.prototype.mod = function(dd) {
          return sd(this, dd)[1]
        }, Qd.prototype.mod = Qd.prototype.remainder = function(dd) {
          return new Qd(this.value % Md(dd).value)
        }, vd.prototype.remainder = vd.prototype.mod = hd.prototype.remainder = hd.prototype.mod, hd.prototype.pow = function(dd) {
          var Od, md, Wd, Fd = Md(dd),
            Rd = this.value,
            Xd = Fd.value;
          if (0 === Xd) return Kd[1];
          if (0 === Rd) return Kd[0];
          if (1 === Rd) return Kd[1];
          if (-1 === Rd) return Fd.isEven() ? Kd[1] : Kd[-1];
          if (Fd.sign) return Kd[0];
          if (!Fd.isSmall) throw new Error("The exponent " + Fd.toString() + " is too large.");
          if (this.isSmall && td(Od = Math.pow(Rd, Xd))) return new vd(yd(Od));
          for (md = this, Wd = Kd[1]; !0 & Xd && (Wd = Wd.times(md), --Xd), 0 !== Xd;) Xd /= 2, md = md.square();
          return Wd
        }, vd.prototype.pow = hd.prototype.pow, Qd.prototype.pow = function(dd) {
          var Od = Md(dd),
            md = this.value,
            Wd = Od.value,
            Fd = BigInt(0),
            Rd = BigInt(1),
            Xd = BigInt(2);
          if (Wd === Fd) return Kd[1];
          if (md === Fd) return Kd[0];
          if (md === Rd) return Kd[1];
          if (md === BigInt(-1)) return Od.isEven() ? Kd[1] : Kd[-1];
          if (Od.isNegative()) return new Qd(Fd);
          for (var hd = this, vd = Kd[1];
            (Wd & Rd) === Rd && (vd = vd.times(hd), --Wd), Wd !== Fd;) Wd /= Xd, hd = hd.square();
          return vd
        }, hd.prototype.modPow = function(dd, Od) {
          if (dd = Md(dd), (Od = Md(Od)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var md = Kd[1],
            Wd = this.mod(Od);
          for (dd.isNegative() && (dd = dd.multiply(Kd[-1]), Wd = Wd.modInv(Od)); dd.isPositive();) {
            if (Wd.isZero()) return Kd[0];
            dd.isOdd() && (md = md.multiply(Wd).mod(Od)), dd = dd.divide(2), Wd = Wd.square().mod(Od)
          }
          return md
        }, Qd.prototype.modPow = vd.prototype.modPow = hd.prototype.modPow, hd.prototype.compareAbs = function(dd) {
          var Od = Md(dd),
            md = this.value,
            Wd = Od.value;
          return Od.isSmall ? 1 : ud(md, Wd)
        }, vd.prototype.compareAbs = function(dd) {
          var Od = Md(dd),
            md = Math.abs(this.value),
            Wd = Od.value;
          return Od.isSmall ? md === (Wd = Math.abs(Wd)) ? 0 : md > Wd ? 1 : -1 : -1
        }, Qd.prototype.compareAbs = function(dd) {
          var Od = this.value,
            md = Md(dd).value;
          return (Od = Od >= 0 ? Od : -Od) === (md = md >= 0 ? md : -md) ? 0 : Od > md ? 1 : -1
        }, hd.prototype.compare = function(dd) {
          if (dd === 1 / 0) return -1;
          if (dd === -1 / 0) return 1;
          var Od = Md(dd),
            md = this.value,
            Wd = Od.value;
          return this.sign !== Od.sign ? Od.sign ? 1 : -1 : Od.isSmall ? this.sign ? -1 : 1 : ud(md, Wd) * (this.sign ? -1 : 1)
        }, hd.prototype.compareTo = hd.prototype.compare, vd.prototype.compare = function(dd) {
          if (dd === 1 / 0) return -1;
          if (dd === -1 / 0) return 1;
          var Od = Md(dd),
            md = this.value,
            Wd = Od.value;
          return Od.isSmall ? md == Wd ? 0 : md > Wd ? 1 : -1 : md < 0 !== Od.sign ? md < 0 ? -1 : 1 : md < 0 ? 1 : -1
        }, vd.prototype.compareTo = vd.prototype.compare, Qd.prototype.compare = function(dd) {
          if (dd === 1 / 0) return -1;
          if (dd === -1 / 0) return 1;
          var Od = this.value,
            md = Md(dd).value;
          return Od === md ? 0 : Od > md ? 1 : -1
        }, Qd.prototype.compareTo = Qd.prototype.compare, hd.prototype.equals = function(dd) {
          return 0 === this.compare(dd)
        }, Qd.prototype.eq = Qd.prototype.equals = vd.prototype.eq = vd.prototype.equals = hd.prototype.eq = hd.prototype.equals, hd.prototype.notEquals = function(dd) {
          return 0 !== this.compare(dd)
        }, Qd.prototype.neq = Qd.prototype.notEquals = vd.prototype.neq = vd.prototype.notEquals = hd.prototype.neq = hd.prototype.notEquals, hd.prototype.greater = function(dd) {
          return this.compare(dd) > 0
        }, Qd.prototype.gt = Qd.prototype.greater = vd.prototype.gt = vd.prototype.greater = hd.prototype.gt = hd.prototype.greater, hd.prototype.lesser = function(dd) {
          return this.compare(dd) < 0
        }, Qd.prototype.lt = Qd.prototype.lesser = vd.prototype.lt = vd.prototype.lesser = hd.prototype.lt = hd.prototype.lesser, hd.prototype.greaterOrEquals = function(dd) {
          return this.compare(dd) >= 0
        }, Qd.prototype.geq = Qd.prototype.greaterOrEquals = vd.prototype.geq = vd.prototype.greaterOrEquals = hd.prototype.geq = hd.prototype.greaterOrEquals, hd.prototype.lesserOrEquals = function(dd) {
          return this.compare(dd) <= 0
        }, Qd.prototype.leq = Qd.prototype.lesserOrEquals = vd.prototype.leq = vd.prototype.lesserOrEquals = hd.prototype.leq = hd.prototype.lesserOrEquals, hd.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, vd.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, Qd.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, hd.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, vd.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, Qd.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, hd.prototype.isPositive = function() {
          return !this.sign
        }, vd.prototype.isPositive = function() {
          return this.value > 0
        }, Qd.prototype.isPositive = vd.prototype.isPositive, hd.prototype.isNegative = function() {
          return this.sign
        }, vd.prototype.isNegative = function() {
          return this.value < 0
        }, Qd.prototype.isNegative = vd.prototype.isNegative, hd.prototype.isUnit = function() {
          return !1
        }, vd.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, Qd.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, hd.prototype.isZero = function() {
          return !1
        }, vd.prototype.isZero = function() {
          return 0 === this.value
        }, Qd.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, hd.prototype.isDivisibleBy = function(dd) {
          var Od = Md(dd);
          return !Od.isZero() && (!!Od.isUnit() || (0 === Od.compareAbs(2) ? this.isEven() : this.mod(Od).isZero()))
        }, Qd.prototype.isDivisibleBy = vd.prototype.isDivisibleBy = hd.prototype.isDivisibleBy, hd.prototype.isPrime = function(md) {
          var Wd = Vd(this);
          if (Wd !== dd) return Wd;
          var Fd = this.abs(),
            Rd = Fd.bitLength();
          if (Rd <= 64) return Ad(Fd, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var Xd = Math.log(2) * Rd.toJSNumber(), Kd = Math.ceil(!0 === md ? 2 * Math.pow(Xd, 2) : Xd), hd = [], vd = 0; vd < Kd; vd++) hd.push(Od(vd + 2));
          return Ad(Fd, hd)
        }, Qd.prototype.isPrime = vd.prototype.isPrime = hd.prototype.isPrime, hd.prototype.isProbablePrime = function(md, Wd) {
          var Fd = Vd(this);
          if (Fd !== dd) return Fd;
          for (var Rd = this.abs(), Xd = md === dd ? 5 : md, Kd = [], hd = 0; hd < Xd; hd++) Kd.push(Od.randBetween(2, Rd.minus(2), Wd));
          return Ad(Rd, Kd)
        }, Qd.prototype.isProbablePrime = vd.prototype.isProbablePrime = hd.prototype.isProbablePrime, hd.prototype.modInv = function(dd) {
          for (var md, Wd, Fd, Rd = Od.zero, Xd = Od.one, Kd = Md(dd), hd = this.abs(); !hd.isZero();) md = Kd.divide(hd), Wd = Rd, Fd = Kd, Rd = Xd, Kd = hd, Xd = Wd.subtract(md.multiply(Xd)), hd = Fd.subtract(md.multiply(hd));
          if (!Kd.isUnit()) throw new Error(this.toString() + " and " + dd.toString() + " are not co-prime");
          return -1 === Rd.compare(0) && (Rd = Rd.add(dd)), this.isNegative() ? Rd.ty() : Rd
        }, Qd.prototype.modInv = vd.prototype.modInv = hd.prototype.modInv, hd.prototype.next = function() {
          var dd = this.value;
          return this.sign ? gd(dd, 1, this.sign) : new hd(pd(dd, 1), this.sign)
        }, vd.prototype.next = function() {
          var dd = this.value;
          return dd + 1 < Wd ? new vd(dd + 1) : new hd(Fd, !1)
        }, Qd.prototype.next = function() {
          return new Qd(this.value + BigInt(1))
        }, hd.prototype.prev = function() {
          var dd = this.value;
          return this.sign ? new hd(pd(dd, 1), !0) : gd(dd, 1, this.sign)
        }, vd.prototype.prev = function() {
          var dd = this.value;
          return dd - 1 > -Wd ? new vd(dd - 1) : new hd(Fd, !0)
        }, Qd.prototype.prev = function() {
          return new Qd(this.value - BigInt(1))
        };
        for (var rd = [1]; 2 * rd[rd.length - 1] <= md;) rd.push(2 * rd[rd.length - 1]);
        var Gd = rd.length,
          nd = rd[Gd - 1];

        function Ld(dd) {
          return Math.abs(dd) <= md
        }

        function Pd(dd, md, Wd) {
          md = Md(md);
          for (var Fd = dd.isNegative(), Rd = md.isNegative(), Xd = Fd ? dd.not() : dd, Kd = Rd ? md.not() : md, hd = 0, vd = 0, Qd = null, td = null, od = []; !Xd.isZero() || !Kd.isZero();) hd = (Qd = sd(Xd, nd))[1].toJSNumber(), Fd && (hd = nd - 1 - hd), vd = (td = sd(Kd, nd))[1].toJSNumber(), Rd && (vd = nd - 1 - vd), Xd = Qd[0], Kd = td[0], od.push(Wd(hd, vd));
          for (var Nd = 0 !== Wd(Fd ? 1 : 0, Rd ? 1 : 0) ? Od(-1) : Od(0), qd = od.length - 1; qd >= 0; qd -= 1) Nd = Nd.multiply(nd).add(Od(od[qd]));
          return Nd
        }
        hd.prototype.shiftLeft = function(dd) {
          var Od = Md(dd).toJSNumber();
          if (!Ld(Od)) throw new Error(String(Od) + " is too large for shifting.");
          if (Od < 0) return this.shiftRight(-Od);
          var md = this;
          if (md.isZero()) return md;
          for (; Od >= Gd;) md = md.multiply(nd), Od -= Gd - 1;
          return md.multiply(rd[Od])
        }, Qd.prototype.shiftLeft = vd.prototype.shiftLeft = hd.prototype.shiftLeft, hd.prototype.shiftRight = function(dd) {
          var Od, md = Md(dd).toJSNumber();
          if (!Ld(md)) throw new Error(String(md) + " is too large for shifting.");
          if (md < 0) return this.shiftLeft(-md);
          for (var Wd = this; md >= Gd;) {
            if (Wd.isZero() || Wd.isNegative() && Wd.isUnit()) return Wd;
            Wd = (Od = sd(Wd, nd))[1].isNegative() ? Od[0].prev() : Od[0], md -= Gd - 1
          }
          return (Od = sd(Wd, rd[md]))[1].isNegative() ? Od[0].prev() : Od[0]
        }, Qd.prototype.shiftRight = vd.prototype.shiftRight = hd.prototype.shiftRight, hd.prototype.not = function() {
          return this.ty().prev()
        }, Qd.prototype.not = vd.prototype.not = hd.prototype.not, hd.prototype.and = function(dd) {
          return Pd(this, dd, (function(dd, Od) {
            return dd & Od
          }))
        }, Qd.prototype.and = vd.prototype.and = hd.prototype.and, hd.prototype.or = function(dd) {
          return Pd(this, dd, (function(dd, Od) {
            return dd | Od
          }))
        }, Qd.prototype.or = vd.prototype.or = hd.prototype.or, hd.prototype.xor = function(dd) {
          return Pd(this, dd, (function(dd, Od) {
            return dd ^ Od
          }))
        }, Qd.prototype.xor = vd.prototype.xor = hd.prototype.xor;
        var zd = 1 << 30;

        function cd(dd) {
          var Od = dd.value,
            Wd = "number" === typeof Od ? Od | zd : "bigint" === typeof Od ? Od | BigInt(zd) : Od[0] + Od[1] * md | 1073758208;
          return Wd & -Wd
        }

        function jd(dd, md) {
          if (md.compareTo(dd) <= 0) {
            var Wd = jd(dd, md.square(md)),
              Fd = Wd.p,
              Rd = Wd.e,
              Xd = Fd.multiply(md);
            return Xd.compareTo(dd) <= 0 ? {
              p: Xd,
              e: 2 * Rd + 1
            } : {
              p: Fd,
              e: 2 * Rd
            }
          }
          return {
            p: Od(1),
            e: 0
          }
        }

        function Dd(dd, Od) {
          return dd = Md(dd), Od = Md(Od), dd.greater(Od) ? dd : Od
        }

        function ed(dd, Od) {
          return dd = Md(dd), Od = Md(Od), dd.lesser(Od) ? dd : Od
        }

        function Id(dd, Od) {
          if (dd = Md(dd).abs(), Od = Md(Od).abs(), dd.equals(Od)) return dd;
          if (dd.isZero()) return Od;
          if (Od.isZero()) return dd;
          for (var md, Wd, Fd = Kd[1]; dd.isEven() && Od.isEven();) md = ed(cd(dd), cd(Od)), dd = dd.divide(md), Od = Od.divide(md), Fd = Fd.multiply(md);
          for (; dd.isEven();) dd = dd.divide(cd(dd));
          do {
            for (; Od.isEven();) Od = Od.divide(cd(Od));
            dd.greater(Od) && (Wd = Od, Od = dd, dd = Wd), Od = Od.subtract(dd)
          } while (!Od.isZero());
          return Fd.isUnit() ? dd : dd.multiply(Fd)
        }
        hd.prototype.bitLength = function() {
          var dd = this;
          return dd.compareTo(Od(0)) < 0 && (dd = dd.ty().subtract(Od(1))), 0 === dd.compareTo(Od(0)) ? Od(0) : Od(jd(dd, Od(2)).e).add(Od(1))
        }, Qd.prototype.bitLength = vd.prototype.bitLength = hd.prototype.bitLength;
        var ld = function(dd, Od, md, Wd) {
          md = md || Rd, dd = String(dd), Wd || (dd = dd.toLowerCase(), md = md.toLowerCase());
          var Fd, Xd = dd.length,
            Kd = Math.abs(Od),
            hd = {};
          for (Fd = 0; Fd < md.length; Fd++) hd[md[Fd]] = Fd;
          for (Fd = 0; Fd < Xd; Fd++) {
            if ("-" !== (td = dd[Fd]) && (td in hd && hd[td] >= Kd)) {
              if ("1" === td && 1 === Kd) continue;
              throw new Error(td + " is not a valid digit in base " + Od + ".")
            }
          }
          Od = Md(Od);
          var vd = [],
            Qd = "-" === dd[0];
          for (Fd = Qd ? 1 : 0; Fd < dd.length; Fd++) {
            var td;
            if ((td = dd[Fd]) in hd) vd.push(Md(hd[td]));
            else {
              if ("<" !== td) throw new Error(td + " is not a valid character");
              var od = Fd;
              do {
                Fd++
              } while (">" !== dd[Fd] && Fd < dd.length);
              vd.push(Md(dd.slice(od + 1, Fd)))
            }
          }
          return Cd(vd, Od, Qd)
        };

        function Cd(dd, Od, md) {
          var Wd, Fd = Kd[0],
            Rd = Kd[1];
          for (Wd = dd.length - 1; Wd >= 0; Wd--) Fd = Fd.add(dd[Wd].times(Rd)), Rd = Rd.times(Od);
          return md ? Fd.ty() : Fd
        }

        function Zd(dd, md) {
          if ((md = Od(md)).isZero()) {
            if (dd.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (md.equals(-1)) {
            if (dd.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (dd.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-dd.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var Wd = Array.apply(null, Array(dd.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return Wd.unshift([1]), {
              value: [].concat.apply([], Wd),
              isNegative: !1
            }
          }
          var Fd = !1;
          if (dd.isNegative() && md.isPositive() && (Fd = !0, dd = dd.abs()), md.isUnit()) return dd.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(dd.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: Fd
          };
          for (var Rd, Xd = [], Kd = dd; Kd.isNegative() || Kd.compareAbs(md) >= 0;) {
            Rd = Kd.divmod(md), Kd = Rd.quotient;
            var hd = Rd.remainder;
            hd.isNegative() && (hd = md.minus(hd).abs(), Kd = Kd.next()), Xd.push(hd.toJSNumber())
          }
          return Xd.push(Kd.toJSNumber()), {
            value: Xd.reverse(),
            isNegative: Fd
          }
        }

        function kd(dd, Od, md) {
          var Wd = Zd(dd, Od);
          return (Wd.isNegative ? "-" : "") + Wd.value.map((function(dd) {
            return function(dd, Od) {
              return dd < (Od = Od || Rd).length ? Od[dd] : "<" + dd + ">"
            }(dd, md)
          })).join("")
        }

        function fd(dd) {
          if (td(+dd)) {
            var Od = +dd;
            if (Od === yd(Od)) return Xd ? new Qd(BigInt(Od)) : new vd(Od);
            throw new Error("Invalid integer: " + dd)
          }
          var md = "-" === dd[0];
          md && (dd = dd.slice(1));
          var Wd = dd.split(/e/i);
          if (Wd.length > 2) throw new Error("Invalid integer: " + Wd.join("e"));
          if (2 === Wd.length) {
            var Fd = Wd[1];
            if ("+" === Fd[0] && (Fd = Fd.slice(1)), (Fd = +Fd) !== yd(Fd) || !td(Fd)) throw new Error("Invalid integer: " + Fd + " is not a valid exponent.");
            var Rd = Wd[0],
              Kd = Rd.indexOf(".");
            if (Kd >= 0 && (Fd -= Rd.length - Kd - 1, Rd = Rd.slice(0, Kd) + Rd.slice(Kd + 1)), Fd < 0) throw new Error("Cannot include negative exponent part for integers");
            dd = Rd += new Array(Fd + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(dd)) throw new Error("Invalid integer: " + dd);
          if (Xd) return new Qd(BigInt(md ? "-" + dd : dd));
          for (var od = [], Nd = dd.length, Hd = Nd - 7; Nd > 0;) od.push(+dd.slice(Hd, Nd)), (Hd -= 7) < 0 && (Hd = 0), Nd -= 7;
          return qd(od), new hd(od, md)
        }

        function Md(dd) {
          return "number" === typeof dd ? function(dd) {
            if (Xd) return new Qd(BigInt(dd));
            if (td(dd)) {
              if (dd !== yd(dd)) throw new Error(dd + " is not an integer.");
              return new vd(dd)
            }
            return fd(dd.toString())
          }(dd) : "string" === typeof dd ? fd(dd) : "bigint" === typeof dd ? new Qd(dd) : dd
        }
        hd.prototype.toArray = function(dd) {
          return Zd(this, dd)
        }, vd.prototype.toArray = function(dd) {
          return Zd(this, dd)
        }, Qd.prototype.toArray = function(dd) {
          return Zd(this, dd)
        }, hd.prototype.toString = function(Od, md) {
          if (Od === dd && (Od = 10), 10 !== Od) return kd(this, Od, md);
          for (var Wd, Fd = this.value, Rd = Fd.length, Xd = String(Fd[--Rd]); --Rd >= 0;) Wd = String(Fd[Rd]), Xd += "0000000".slice(Wd.length) + Wd;
          return (this.sign ? "-" : "") + Xd
        }, vd.prototype.toString = function(Od, md) {
          return Od === dd && (Od = 10), 10 != Od ? kd(this, Od, md) : String(this.value)
        }, Qd.prototype.toString = vd.prototype.toString, Qd.prototype.toJSON = hd.prototype.toJSON = vd.prototype.toJSON = function() {
          return this.toString()
        }, hd.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, hd.prototype.toJSNumber = hd.prototype.valueOf, vd.prototype.valueOf = function() {
          return this.value
        }, vd.prototype.toJSNumber = vd.prototype.valueOf, Qd.prototype.valueOf = Qd.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var dO = 0; dO < 1e3; dO++) Kd[dO] = Md(dO), dO > 0 && (Kd[-dO] = Md(-dO));
        return Kd.one = Kd[1], Kd.zero = Kd[0], Kd.minusOne = Kd[-1], Kd.max = Dd, Kd.min = ed, Kd.gcd = Id, Kd.lcm = function(dd, Od) {
          return dd = Md(dd).abs(), Od = Md(Od).abs(), dd.divide(Id(dd, Od)).multiply(Od)
        }, Kd.isInstance = function(dd) {
          return dd instanceof hd || dd instanceof vd || dd instanceof Qd
        }, Kd.randBetween = function(dd, Od, Wd) {
          dd = Md(dd), Od = Md(Od);
          var Fd = Wd || Math.random,
            Rd = ed(dd, Od),
            Xd = Dd(dd, Od).subtract(Rd).add(1);
          if (Xd.isSmall) return Rd.add(Math.floor(Fd() * Xd));
          for (var hd = Zd(Xd, md).value, vd = [], Qd = !0, td = 0; td < hd.length; td++) {
            var od = Qd ? hd[td] : md,
              Nd = yd(Fd() * od);
            vd.push(Nd), Nd < od && (Qd = !1)
          }
          return Rd.add(Kd.ZQ(vd, md, !1))
        }, Kd.ZQ = function(dd, Od, md) {
          return Cd(dd.map(Md), Md(Od || 10), md)
        }, Kd
      }();
      dd.hasOwnProperty("exports") && (dd.exports = Od)
    }(gm);
    var wm = Rd(gm.exports);

    function am(dd, Od, md) {
      let Wd = 0;
      for (let Fd = 0; Fd < md; Fd++) {
        const md = dd[Od + Fd];
        if (void 0 === md) break;
        Wd += md * 16 ** Fd
      }
      return Wd
    }

    function Em(dd) {
      const Od = [];
      for (let md = 0; md < dd.length; md++) {
        let Wd = Number(dd[md]);
        for (let dd = 0; Wd || dd < Od.length; dd++) Wd += 10 * (Od[dd] || 0), Od[dd] = Wd % 16, Wd = (Wd - Od[dd]) / 16
      }
      return Od
    }
    class Jm {
      static fromString(dd) {
        return new Jm(function(dd) {
          const Od = Em(dd),
            md = Array(4);
          for (let Wd = 0; Wd < 4; Wd++) md[3 - Wd] = am(Od, 4 * Wd, 4);
          return md
        }(dd), dd)
      }
      static fromBit(dd) {
        const Od = Array(4),
          md = Math.floor(dd / 16);
        for (let Wd = 0; Wd < 4; Wd++) Od[3 - Wd] = Wd === md ? 1 << dd - 16 * md : 0;
        return new Jm(Od)
      }
      constructor(dd, Od) {
        this.parts = dd, this.str = Od
      }
      and(dd) {
        let {
          parts: Od
        } = dd;
        return new Jm(this.parts.map(((dd, md) => dd & Od[md])))
      }
      or(dd) {
        let {
          parts: Od
        } = dd;
        return new Jm(this.parts.map(((dd, md) => dd | Od[md])))
      }
      xor(dd) {
        let {
          parts: Od
        } = dd;
        return new Jm(this.parts.map(((dd, md) => dd ^ Od[md])))
      }
      not() {
        return new Jm(this.parts.map((dd => ~dd)))
      }
      equals(dd) {
        let {
          parts: Od
        } = dd;
        return this.parts.every(((dd, md) => dd === Od[md]))
      }
      toString() {
        if (null != this.str) return this.str;
        const dd = new Array(16);
        return this.parts.forEach(((Od, md) => {
          const Wd = Em(Od.toString());
          for (let Fd = 0; Fd < 4; Fd++) dd[Fd + 4 * md] = Wd[3 - Fd] || 0
        })), this.str = wm.ZQ(dd, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const Um = function() {
      try {
        return BigInt, !0
      } catch (dd) {
        return !1
      }
    }();
    Um && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const xm = {},
      Bm = Um ? function(dd) {
        return BigInt(dd)
      } : function(dd) {
        return dd instanceof Jm ? dd : ("number" === typeof dd && (dd = dd.toString()), null != xm[dd] || (xm[dd] = Jm.fromString(dd)), xm[dd])
      },
      Sm = Bm(0),
      sm = Um ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sm) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sm)
      } : function() {
        let dd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sm;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sm).and(dd)
      },
      um = Um ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sm) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sm)
      } : function() {
        let dd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sm;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sm).or(dd)
      },
      Vm = Um ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sm) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sm)
      } : function() {
        let dd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Sm;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sm).xor(dd)
      },
      im = Um ? function(dd, Od) {
        return dd === Od
      } : function(dd, Od) {
        return null == dd || null == Od ? dd == Od : dd.equals(Od)
      };
    var Am, rm, Gm, nm, Lm = {
      combine: function() {
        let dd = arguments.length <= 0 ? void 0 : arguments[0];
        for (let Od = 1; Od < arguments.length; Od++) dd = um(dd, Od < 0 || arguments.length <= Od ? void 0 : arguments[Od]);
        return dd
      },
      add: function(dd, Od) {
        return Od === Sm ? dd : um(dd, Od)
      },
      remove: function(dd, Od) {
        return Od === Sm ? dd : Vm(dd, sm(dd, Od))
      },
      filter: sm,
      invert: Um ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sm)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Sm).not()
      },
      has: function(dd, Od) {
        return im(sm(dd, Od), Od)
      },
      hasAny: function(dd, Od) {
        return !im(sm(dd, Od), Sm)
      },
      equals: im,
      deserialize: Bm,
      getFlag: Um ? function(dd) {
        return BigInt(1) << BigInt(dd)
      } : function(dd) {
        return Jm.fromBit(dd)
      }
    };
    ! function(dd) {
      dd[dd.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", dd[dd.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", dd[dd.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", dd[dd.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", dd[dd.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", dd[dd.RATELIMITED = 4002] = "RATELIMITED", dd[dd.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", dd[dd.INVALID_VERSION = 4004] = "INVALID_VERSION", dd[dd.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(Am || (Am = {})),
    function(dd) {
      dd[dd.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", dd[dd.INVALID_COMMAND = 4002] = "INVALID_COMMAND", dd[dd.INVALID_EVENT = 4004] = "INVALID_EVENT", dd[dd.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(rm || (rm = {})),
    function(dd) {
      dd.LANDSCAPE = "landscape", dd.PORTRAIT = "portrait"
    }(Gm || (Gm = {})),
    function(dd) {
      dd.MOBILE = "mobile", dd.DESKTOP = "desktop"
    }(nm || (nm = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: Lm.getFlag(0),
      ADMINISTRATOR: Lm.getFlag(3)
    });

    function Pm(dd) {
      return ym((Od => {
        var md;
        const [Wd] = null !== (md = Object.entries(dd).find((dd => {
          let [, md] = dd;
          return md === Od
        }))) && void 0 !== md ? md : [];
        return null != Od && void 0 === Wd ? dd.UNHANDLED : Od
      }), rO().or(GO()))
    }
    const zm = Ym.object({
        image_url: Ym.string()
      }),
      cm = Ym.object({
        mediaUrl: Ym.string().max(1024)
      }),
      jm = Ym.object({
        access_token: Ym.union([Ym.string(), Ym.null()]).optional()
      }),
      Dm = Ym.object({
        access_token: Ym.string(),
        user: Ym.object({
          username: Ym.string(),
          discriminator: Ym.string(),
          id: Ym.string(),
          avatar: Ym.union([Ym.string(), Ym.null()]).optional(),
          public_flags: Ym.number(),
          global_name: Ym.union([Ym.string(), Ym.null()]).optional()
        }),
        scopes: Ym.array(function(dd) {
          const Od = VO().transform((Od => {
            const md = dd.safeParse(Od);
            return md.success ? md.data : dd._def.defaultValue()
          }));
          return Od.overlayType = dd, Od
        }(Ym.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(Ym.literal(-1)).default(-1))),
        expires: Ym.string(),
        application: Ym.object({
          description: Ym.string(),
          icon: Ym.union([Ym.string(), Ym.null()]).optional(),
          id: Ym.string(),
          rpc_origins: Ym.array(Ym.string()).optional(),
          name: Ym.string()
        })
      }),
      em = Ym.object({
        participants: Ym.array(Ym.object({
          id: Ym.string(),
          username: Ym.string(),
          global_name: Ym.union([Ym.string(), Ym.null()]).optional(),
          discriminator: Ym.string(),
          avatar: Ym.union([Ym.string(), Ym.null()]).optional(),
          flags: Ym.number(),
          bot: Ym.boolean(),
          avatar_decoration_data: Ym.union([Ym.object({
            asset: Ym.string(),
            skuId: Ym.string().optional()
          }), Ym.null()]).optional(),
          premium_type: Ym.union([Ym.number(), Ym.null()]).optional(),
          nickname: Ym.string().optional()
        }))
      });
    var Im;
    ! function(dd) {
      dd.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", dd.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", dd.AUTHENTICATE = "AUTHENTICATE", dd.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Im || (Im = {}));
    const lm = Ym.object({}).optional().nullable(),
      Cm = Ym.void(),
      Zm = {
        [Im.INITIATE_IMAGE_UPLOAD]: {
          request: Cm,
          response: zm
        },
        [Im.OPEN_SHARE_MOMENT_DIALOG]: {
          request: cm,
          response: lm
        },
        [Im.AUTHENTICATE]: {
          request: jm,
          response: Dm
        },
        [Im.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: Cm,
          response: em
        }
      },
      km = "DISPATCH";
    var fm;
    ! function(dd) {
      dd.AUTHORIZE = "AUTHORIZE", dd.AUTHENTICATE = "AUTHENTICATE", dd.GET_GUILDS = "GET_GUILDS", dd.GET_GUILD = "GET_GUILD", dd.GET_CHANNEL = "GET_CHANNEL", dd.GET_CHANNELS = "GET_CHANNELS", dd.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", dd.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", dd.SUBSCRIBE = "SUBSCRIBE", dd.UNSUBSCRIBE = "UNSUBSCRIBE", dd.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", dd.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", dd.SET_ACTIVITY = "SET_ACTIVITY", dd.GET_SKUS = "GET_SKUS", dd.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", dd.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", dd.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", dd.START_PURCHASE = "START_PURCHASE", dd.SET_CONFIG = "SET_CONFIG", dd.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", dd.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", dd.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", dd.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", dd.CAPTURE_LOG = "CAPTURE_LOG", dd.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", dd.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", dd.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", dd.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", dd.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", dd.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", dd.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(fm || (fm = {}));
    const Mm = kO({
        cmd: rO(),
        data: IO(),
        evt: DO(),
        nonce: rO()
      }).passthrough(),
      dW = (Pm(Object.assign(Object.assign({}, Dm.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), kO({
        id: rO(),
        username: rO(),
        discriminator: rO(),
        global_name: rO().optional().nullable(),
        avatar: rO().optional().nullable(),
        avatar_decoration_data: kO({
          asset: rO(),
          sku_id: rO().optional()
        }).nullable(),
        bot: PO(),
        flags: GO().optional().nullable(),
        premium_type: GO().optional().nullable()
      })),
      OW = kO({
        user: dW,
        nick: rO().optional().nullable(),
        roles: ZO(rO()),
        joined_at: rO(),
        deaf: PO(),
        mute: PO()
      }),
      mW = kO({
        id: rO(),
        name: rO().optional().nullable(),
        roles: ZO(rO()).optional().nullable(),
        user: dW.optional().nullable(),
        require_colons: PO().optional().nullable(),
        managed: PO().optional().nullable(),
        animated: PO().optional().nullable(),
        available: PO().optional().nullable()
      }),
      WW = kO({
        mute: PO(),
        deaf: PO(),
        self_mute: PO(),
        self_deaf: PO(),
        suppress: PO()
      }),
      FW = kO({
        mute: PO(),
        nick: rO(),
        user: dW,
        voice_state: WW,
        volume: GO()
      }),
      RW = Pm({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      XW = kO({
        name: rO(),
        type: GO(),
        url: rO().optional().nullable(),
        created_at: GO().optional().nullable(),
        timestamps: kO({
          start: GO(),
          end: GO()
        }).partial().optional().nullable(),
        application_id: rO().optional().nullable(),
        details: rO().optional().nullable(),
        state: rO().optional().nullable(),
        emoji: mW.optional().nullable(),
        party: kO({
          id: rO().optional().nullable(),
          size: ZO(GO()).optional().nullable()
        }).optional().nullable(),
        assets: kO({
          large_image: rO().nullable(),
          large_text: rO().nullable(),
          small_image: rO().nullable(),
          small_text: rO().nullable()
        }).partial().optional().nullable(),
        secrets: kO({
          join: rO(),
          match: rO()
        }).partial().optional().nullable(),
        instance: PO().optional().nullable(),
        flags: GO().optional().nullable()
      }),
      KW = kO({
        id: rO(),
        type: Pm({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: rO(),
        deny: rO()
      }),
      hW = {
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
      vW = kO({
        id: rO(),
        type: Pm(hW),
        guild_id: rO().optional().nullable(),
        position: GO().optional().nullable(),
        permission_overwrites: ZO(KW).optional().nullable(),
        name: rO().optional().nullable(),
        topic: rO().optional().nullable(),
        nsfw: PO().optional().nullable(),
        last_message_id: rO().optional().nullable(),
        bitrate: GO().optional().nullable(),
        user_limit: GO().optional().nullable(),
        rate_limit_per_user: GO().optional().nullable(),
        recipients: ZO(dW).optional().nullable(),
        icon: rO().optional().nullable(),
        owner_id: rO().optional().nullable(),
        application_id: rO().optional().nullable(),
        parent_id: rO().optional().nullable(),
        last_pin_timestamp: rO().optional().nullable()
      }),
      QW = kO({
        user: dW,
        guild_id: rO(),
        status: RW,
        activities: ZO(XW),
        client_status: kO({
          desktop: RW,
          mobile: RW,
          web: RW
        }).partial()
      }),
      tW = kO({
        id: rO(),
        name: rO(),
        color: GO(),
        hoist: PO(),
        position: GO(),
        permissions: rO(),
        managed: PO(),
        mentionable: PO()
      }),
      oW = (kO({
        id: rO(),
        name: rO(),
        owner_id: rO(),
        icon: rO().nullable(),
        icon_hash: rO().optional().nullable(),
        splash: rO().nullable(),
        discovery_splash: rO().nullable(),
        owner: PO().optional().nullable(),
        permissions: rO().optional().nullable(),
        region: rO(),
        afk_channel_id: rO().nullable(),
        afk_timeout: GO(),
        widget_enabled: PO().optional().nullable(),
        widget_channel_id: rO().optional().nullable(),
        verification_level: GO(),
        default_message_notifications: GO(),
        explicit_content_filter: GO(),
        roles: ZO(tW),
        emojis: ZO(mW),
        features: ZO(rO()),
        mfa_level: GO(),
        application_id: rO().nullable(),
        system_channel_id: rO().nullable(),
        system_channel_flags: GO(),
        rules_channel_id: rO().nullable(),
        joined_at: rO().optional().nullable(),
        large: PO().optional().nullable(),
        unavailable: PO().optional().nullable(),
        member_count: GO().optional().nullable(),
        voice_states: ZO(WW).optional().nullable(),
        members: ZO(OW).optional().nullable(),
        channels: ZO(vW).optional().nullable(),
        presences: ZO(QW).optional().nullable(),
        max_presences: GO().optional().nullable(),
        max_members: GO().optional().nullable(),
        vanity_url_code: rO().nullable(),
        description: rO().nullable(),
        banner: rO().nullable(),
        premium_tier: GO(),
        premium_subscription_count: GO().optional().nullable(),
        preferred_locale: rO(),
        public_updates_channel_id: rO().nullable(),
        max_video_channel_users: GO().optional().nullable(),
        approximate_member_count: GO().optional().nullable(),
        approximate_presence_count: GO().optional().nullable()
      }), kO({
        id: rO(),
        guild_id: rO(),
        type: GO(),
        name: rO()
      })),
      NW = kO({
        id: rO(),
        filename: rO(),
        size: GO(),
        url: rO(),
        proxy_url: rO(),
        height: GO().optional().nullable(),
        width: GO().optional().nullable()
      }),
      qW = kO({
        text: rO(),
        icon_url: rO().optional().nullable(),
        proxy_icon_url: rO().optional().nullable()
      }),
      HW = kO({
        url: rO().optional().nullable(),
        proxy_url: rO().optional().nullable(),
        height: GO().optional().nullable(),
        width: GO().optional().nullable()
      }),
      yW = HW.omit({
        proxy_url: !0
      }),
      bW = kO({
        name: rO().optional().nullable(),
        url: rO().optional().nullable()
      }),
      TW = kO({
        name: rO().optional().nullable(),
        url: rO().optional().nullable(),
        icon_url: rO().optional().nullable(),
        proxy_icon_url: rO().optional().nullable()
      }),
      pW = kO({
        name: rO(),
        value: rO(),
        inline: PO()
      }),
      YW = kO({
        title: rO().optional().nullable(),
        type: rO().optional().nullable(),
        description: rO().optional().nullable(),
        url: rO().optional().nullable(),
        timestamp: rO().optional().nullable(),
        color: GO().optional().nullable(),
        footer: qW.optional().nullable(),
        image: HW.optional().nullable(),
        thumbnail: HW.optional().nullable(),
        video: yW.optional().nullable(),
        provider: bW.optional().nullable(),
        author: TW.optional().nullable(),
        fields: ZO(pW).optional().nullable()
      }),
      gW = kO({
        count: GO(),
        me: PO(),
        emoji: mW
      }),
      wW = kO({
        type: GO(),
        party_id: rO().optional().nullable()
      }),
      aW = kO({
        id: rO(),
        cover_image: rO().optional().nullable(),
        description: rO(),
        icon: rO().optional().nullable(),
        name: rO()
      }),
      EW = kO({
        message_id: rO().optional().nullable(),
        channel_id: rO().optional().nullable(),
        guild_id: rO().optional().nullable()
      }),
      JW = kO({
        id: rO(),
        channel_id: rO(),
        guild_id: rO().optional().nullable(),
        author: dW.optional().nullable(),
        member: OW.optional().nullable(),
        content: rO(),
        timestamp: rO(),
        edited_timestamp: rO().optional().nullable(),
        tts: PO(),
        mention_everyone: PO(),
        mentions: ZO(dW),
        mention_roles: ZO(rO()),
        mention_channels: ZO(oW),
        attachments: ZO(NW),
        embeds: ZO(YW),
        reactions: ZO(gW).optional().nullable(),
        nonce: MO([rO(), GO()]).optional().nullable(),
        pinned: PO(),
        webhook_id: rO().optional().nullable(),
        type: GO(),
        activity: wW.optional().nullable(),
        application: aW.optional().nullable(),
        message_reference: EW.optional().nullable(),
        flags: GO().optional().nullable(),
        stickers: ZO(IO()).optional().nullable(),
        referenced_message: IO().optional().nullable()
      }),
      UW = kO({
        id: rO(),
        name: rO()
      }),
      xW = kO({
        type: Pm({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: GO(),
        name: rO()
      }),
      BW = kO({
        type: Pm({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: PO(),
        threshold: GO(),
        shortcut: ZO(xW),
        delay: GO()
      }),
      SW = kO({
        device_id: rO(),
        volume: GO(),
        available_devices: ZO(UW)
      }),
      sW = (kO({
        type: Pm({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: rO(),
        vendor: kO({
          name: rO(),
          url: rO()
        }),
        model: kO({
          name: rO(),
          url: rO()
        }),
        related: ZO(rO()),
        echo_cancellation: PO().optional().nullable(),
        noise_suppression: PO().optional().nullable(),
        automatic_gain_control: PO().optional().nullable(),
        hardware_mute: PO().optional().nullable()
      }), kO({
        id: rO(),
        name: rO(),
        type: Pm({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: kO({
          amount: GO(),
          currency: rO()
        }),
        application_id: rO(),
        flags: GO(),
        release_date: rO().nullable()
      })),
      uW = kO({
        id: rO(),
        sku_id: rO(),
        application_id: rO(),
        user_id: rO(),
        gift_code_flags: GO(),
        type: Pm({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: rO().optional().nullable(),
        branches: ZO(rO()).optional().nullable(),
        starts_at: rO().optional().nullable(),
        ends_at: rO().optional().nullable(),
        parent_id: rO().optional().nullable(),
        consumed: PO().optional().nullable(),
        deleted: PO().optional().nullable(),
        gift_code_batch_id: rO().optional().nullable()
      }),
      VW = (Pm({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), Pm({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      iW = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      AW = (Pm(iW), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      rW = (Pm(AW), "ERROR");
    var GW;
    ! function(dd) {
      dd.READY = "READY", dd.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", dd.SPEAKING_START = "SPEAKING_START", dd.SPEAKING_STOP = "SPEAKING_STOP", dd.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", dd.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", dd.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", dd.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", dd.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", dd.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(GW || (GW = {}));
    const nW = Mm.extend({
        evt: tm(GW),
        nonce: rO().nullable(),
        cmd: hm(km),
        data: kO({}).passthrough()
      }),
      LW = Mm.extend({
        evt: hm(rW),
        data: kO({
          code: GO(),
          message: rO().optional()
        }).passthrough(),
        cmd: tm(fm),
        nonce: rO().nullable()
      }),
      PW = nW.extend({
        evt: rO()
      }),
      zW = MO([nW, PW, LW]);
    const cW = {
      [GW.READY]: {
        payload: nW.extend({
          evt: hm(GW.READY),
          data: kO({
            v: GO(),
            config: kO({
              cdn_host: rO().optional(),
              api_endpoint: rO(),
              environment: rO()
            }),
            user: kO({
              id: rO(),
              username: rO(),
              discriminator: rO(),
              avatar: rO().optional()
            }).optional()
          })
        })
      },
      [GW.VOICE_STATE_UPDATE]: {
        payload: nW.extend({
          evt: hm(GW.VOICE_STATE_UPDATE),
          data: FW
        }),
        subscribeArgs: kO({
          channel_id: rO()
        })
      },
      [GW.SPEAKING_START]: {
        payload: nW.extend({
          evt: hm(GW.SPEAKING_START),
          data: kO({
            lobby_id: rO().optional(),
            channel_id: rO().optional(),
            user_id: rO()
          })
        }),
        subscribeArgs: kO({
          lobby_id: rO().nullable().optional(),
          channel_id: rO().nullable().optional()
        })
      },
      [GW.SPEAKING_STOP]: {
        payload: nW.extend({
          evt: hm(GW.SPEAKING_STOP),
          data: kO({
            lobby_id: rO().optional(),
            channel_id: rO().optional(),
            user_id: rO()
          })
        }),
        subscribeArgs: kO({
          lobby_id: rO().nullable().optional(),
          channel_id: rO().nullable().optional()
        })
      },
      [GW.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: nW.extend({
          evt: hm(GW.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: kO({
            layout_mode: Pm(AW)
          })
        })
      },
      [GW.ORIENTATION_UPDATE]: {
        payload: nW.extend({
          evt: hm(GW.ORIENTATION_UPDATE),
          data: kO({
            screen_orientation: Pm(iW),
            orientation: tm(Gm)
          })
        })
      },
      [GW.CURRENT_USER_UPDATE]: {
        payload: nW.extend({
          evt: hm(GW.CURRENT_USER_UPDATE),
          data: dW
        })
      },
      [GW.ENTITLEMENT_CREATE]: {
        payload: nW.extend({
          evt: hm(GW.ENTITLEMENT_CREATE),
          data: kO({
            entitlement: uW
          })
        })
      },
      [GW.THERMAL_STATE_UPDATE]: {
        payload: nW.extend({
          evt: hm(GW.THERMAL_STATE_UPDATE),
          data: kO({
            thermal_state: VW
          })
        })
      },
      [GW.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: nW.extend({
          evt: hm(GW.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: kO({
            participants: em.shape.participants
          })
        })
      }
    };
    const jW = kO({}).nullable(),
      DW = kO({
        code: rO()
      }),
      eW = kO({
        guilds: ZO(kO({
          id: rO(),
          name: rO()
        }))
      }),
      IW = kO({
        id: rO(),
        name: rO(),
        icon_url: rO().optional(),
        members: ZO(OW)
      }),
      lW = kO({
        id: rO(),
        type: Pm(hW),
        guild_id: rO().optional().nullable(),
        name: rO().optional().nullable(),
        topic: rO().optional().nullable(),
        bitrate: GO().optional().nullable(),
        user_limit: GO().optional().nullable(),
        position: GO().optional().nullable(),
        voice_states: ZO(FW),
        messages: ZO(JW)
      }),
      CW = kO({
        channels: ZO(vW)
      }),
      ZW = (lW.nullable(), lW.nullable()),
      kW = lW.nullable(),
      fW = (kO({
        input: SW,
        output: SW,
        mode: BW,
        automatic_gain_control: PO(),
        echo_cancellation: PO(),
        noise_suppression: PO(),
        qos: PO(),
        silence_warning: PO(),
        deaf: PO(),
        mute: PO()
      }), kO({
        evt: rO()
      })),
      MW = kO({
        shortcut: xW
      }),
      dF = XW,
      OF = kO({
        skus: ZO(sW)
      }),
      mF = kO({
        entitlements: ZO(uW)
      }),
      WF = ZO(uW).nullable(),
      FF = kO({
        use_interactive_pip: PO()
      }),
      RF = kO({
        locale: rO()
      }),
      XF = kO({
        enabled: PO()
      }),
      KF = kO({
        permissions: LO().or(rO())
      }),
      hF = kO({
        iosKeyboardResizesView: qm(PO())
      }),
      vF = Mm.extend({
        cmd: tm(fm),
        evt: DO()
      });

    function QF(dd) {
      let {
        cmd: Od,
        data: md
      } = dd;
      switch (Od) {
        case fm.AUTHORIZE:
          return DW.parse(md);
        case fm.CAPTURE_SHORTCUT:
          return MW.parse(md);
        case fm.ENCOURAGE_HW_ACCELERATION:
          return XF.parse(md);
        case fm.GET_CHANNEL:
          return lW.parse(md);
        case fm.GET_CHANNELS:
          return CW.parse(md);
        case fm.GET_CHANNEL_PERMISSIONS:
          return KF.parse(md);
        case fm.GET_GUILD:
          return IW.parse(md);
        case fm.GET_GUILDS:
          return eW.parse(md);
        case fm.GET_PLATFORM_BEHAVIORS:
          return hF.parse(md);
        case fm.GET_CHANNEL:
          return lW.parse(md);
        case fm.SELECT_TEXT_CHANNEL:
          return kW.parse(md);
        case fm.SELECT_VOICE_CHANNEL:
          return ZW.parse(md);
        case fm.SET_ACTIVITY:
          return dF.parse(md);
        case fm.GET_SKUS_EMBEDDED:
          return OF.parse(md);
        case fm.GET_ENTITLEMENTS_EMBEDDED:
          return mF.parse(md);
        case fm.SET_CONFIG:
          return FF.parse(md);
        case fm.START_PURCHASE:
          return WF.parse(md);
        case fm.SUBSCRIBE:
        case fm.UNSUBSCRIBE:
          return fW.parse(md);
        case fm.USER_SETTINGS_GET_LOCALE:
          return RF.parse(md);
        case fm.OPEN_EXTERNAL_LINK:
        case fm.SET_ORIENTATION_LOCK_STATE:
        case fm.SET_CERTIFIED_DEVICES:
        case fm.SEND_ANALYTICS_EVENT:
        case fm.OPEN_INVITE_DIALOG:
        case fm.CAPTURE_LOG:
        case fm.GET_SKUS:
        case fm.GET_ENTITLEMENTS:
          return jW.parse(md);
        case fm.AUTHENTICATE:
        case fm.INITIATE_IMAGE_UPLOAD:
        case fm.OPEN_SHARE_MOMENT_DIALOG:
        case fm.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: dd
          } = Zm[Od];
          return dd.parse(md);
        default:
          ! function(dd, Od) {
            throw Od
          }(0, new Error(`Unrecognized command ${Od}`))
      }
    }
    kO({
      frame_id: rO(),
      platform: tm(nm).optional().nullable()
    }), kO({
      v: hm(1),
      encoding: hm("json").optional(),
      client_id: rO(),
      frame_id: rO()
    });
    const tF = kO({
        code: GO(),
        message: rO().optional()
      }),
      oF = kO({
        evt: rO().nullable(),
        nonce: rO().nullable(),
        data: IO().nullable(),
        cmd: rO()
      }).passthrough();

    function NF(dd) {
      const Od = oF.parse(dd);
      return null != Od.evt ? Od.evt === rW ? LW.parse(Od) : function(dd) {
        const Od = dd.evt;
        if (!(Od in GW)) throw new Error(`Unrecognized event type ${dd.evt}`);
        return cW[Od].payload.parse(dd)
      }(zW.parse(Od)) : function(dd) {
        return Object.assign(Object.assign({}, dd), {
          data: QF(dd)
        })
      }(vF.passthrough().parse(Od))
    }

    function qF(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const Fd = Mm.extend({
        cmd: hm(Od),
        data: md
      });
      return async md => {
        const Rd = await dd({
          cmd: Od,
          args: md,
          transfer: Wd(md)
        });
        return Fd.parse(Rd).data
      }
    }

    function HF(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const md = Zm[dd].response,
        Wd = Mm.extend({
          cmd: hm(dd),
          data: md
        });
      return md => async Fd => {
        const Rd = await md({
          cmd: dd,
          args: Fd,
          transfer: Od(Fd)
        });
        return Wd.parse(Rd).data
      }
    }
    const yF = HF(Im.AUTHENTICATE),
      bF = dd => qF(dd, fm.AUTHORIZE, DW),
      TF = dd => qF(dd, fm.CAPTURE_LOG, jW),
      pF = dd => qF(dd, fm.ENCOURAGE_HW_ACCELERATION, XF),
      YF = dd => qF(dd, fm.GET_ENTITLEMENTS_EMBEDDED, mF),
      gF = dd => qF(dd, fm.GET_SKUS_EMBEDDED, OF),
      wF = dd => qF(dd, fm.GET_CHANNEL_PERMISSIONS, KF),
      aF = dd => qF(dd, fm.GET_PLATFORM_BEHAVIORS, hF),
      EF = dd => qF(dd, fm.OPEN_EXTERNAL_LINK, jW),
      JF = dd => qF(dd, fm.OPEN_INVITE_DIALOG, jW),
      UF = HF(Im.OPEN_SHARE_MOMENT_DIALOG);
    XW.xN({
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
      type: XW.shape.type.optional(),
      instance: XW.shape.instance.optional()
    }).nullable();
    const xF = dd => qF(dd, fm.SET_ACTIVITY, dF),
      BF = dd => qF(dd, fm.SET_CONFIG, FF);
    const SF = dd => ({
        lock_state: dd.lock_state,
        picture_in_picture_lock_state: dd.picture_in_picture_lock_state
      }),
      sF = dd => function(dd) {
        let {
          sendCommand: Od,
          cmd: md,
          response: Wd,
          fallbackTransform: Fd,
          transferTransform: Rd = () => {}
        } = dd;
        const Xd = Mm.extend({
          cmd: hm(md),
          data: Wd
        });
        return async dd => {
          try {
            const Wd = await Od({
              cmd: md,
              args: dd,
              transfer: Rd(dd)
            });
            return Xd.parse(Wd).data
          } catch (Wd) {
            if (Wd.code === rm.INVALID_PAYLOAD) {
              const Wd = Fd(dd),
                Kd = await Od({
                  cmd: md,
                  args: Wd,
                  transfer: Rd(Wd)
                });
              return Xd.parse(Kd).data
            }
            throw Wd
          }
        }
      }({
        sendCommand: dd,
        cmd: fm.SET_ORIENTATION_LOCK_STATE,
        response: jW,
        fallbackTransform: SF
      }),
      uF = dd => qF(dd, fm.START_PURCHASE, WF),
      VF = dd => qF(dd, fm.USER_SETTINGS_GET_LOCALE, RF),
      iF = HF(Im.INITIATE_IMAGE_UPLOAD),
      AF = dd => qF(dd, fm.GET_CHANNEL, lW),
      rF = HF(Im.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var GF = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function nF(dd) {
      return "string" === typeof dd && GF.test(dd)
    }
    for (var LF = [], PF = 0; PF < 256; ++PF) LF.push((PF + 256).toString(16).substr(1));

    function zF(dd) {
      var Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        md = (LF[dd[Od + 0]] + LF[dd[Od + 1]] + LF[dd[Od + 2]] + LF[dd[Od + 3]] + "-" + LF[dd[Od + 4]] + LF[dd[Od + 5]] + "-" + LF[dd[Od + 6]] + LF[dd[Od + 7]] + "-" + LF[dd[Od + 8]] + LF[dd[Od + 9]] + "-" + LF[dd[Od + 10]] + LF[dd[Od + 11]] + LF[dd[Od + 12]] + LF[dd[Od + 13]] + LF[dd[Od + 14]] + LF[dd[Od + 15]]).toLowerCase();
      if (!nF(md)) throw TypeError("Stringified UUID is invalid");
      return md
    }
    var cF;

    function jF(dd, Od, md) {
      function Wd(dd, Wd, Fd, Rd) {
        if ("string" === typeof dd && (dd = function(dd) {
            dd = unescape(encodeURIComponent(dd));
            for (var Od = [], md = 0; md < dd.length; ++md) Od.push(dd.charCodeAt(md));
            return Od
          }(dd)), "string" === typeof Wd && (Wd = function(dd) {
            if (!nF(dd)) throw TypeError("Invalid UUID");
            var Od, md = new Uint8Array(16);
            return md[0] = (Od = parseInt(dd.slice(0, 8), 16)) >>> 24, md[1] = Od >>> 16 & 255, md[2] = Od >>> 8 & 255, md[3] = 255 & Od, md[4] = (Od = parseInt(dd.slice(9, 13), 16)) >>> 8, md[5] = 255 & Od, md[6] = (Od = parseInt(dd.slice(14, 18), 16)) >>> 8, md[7] = 255 & Od, md[8] = (Od = parseInt(dd.slice(19, 23), 16)) >>> 8, md[9] = 255 & Od, md[10] = (Od = parseInt(dd.slice(24, 36), 16)) / 1099511627776 & 255, md[11] = Od / 4294967296 & 255, md[12] = Od >>> 24 & 255, md[13] = Od >>> 16 & 255, md[14] = Od >>> 8 & 255, md[15] = 255 & Od, md
          }(Wd)), 16 !== Wd.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var Xd = new Uint8Array(16 + dd.length);
        if (Xd.set(Wd), Xd.set(dd, Wd.length), (Xd = md(Xd))[6] = 15 & Xd[6] | Od, Xd[8] = 63 & Xd[8] | 128, Fd) {
          Rd = Rd || 0;
          for (var Kd = 0; Kd < 16; ++Kd) Fd[Rd + Kd] = Xd[Kd];
          return Fd
        }
        return zF(Xd)
      }
      try {
        Wd.name = dd
      } catch (Fd) {}
      return Wd.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", Wd.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", Wd
    }

    function DF(dd) {
      return 14 + (dd + 64 >>> 9 << 4) + 1
    }

    function eF(dd, Od) {
      var md = (65535 & dd) + (65535 & Od);
      return (dd >> 16) + (Od >> 16) + (md >> 16) << 16 | 65535 & md
    }

    function IF(dd, Od, md, Wd, Fd, Rd) {
      return eF((Xd = eF(eF(Od, dd), eF(Wd, Rd))) << (Kd = Fd) | Xd >>> 32 - Kd, md);
      var Xd, Kd
    }

    function lF(dd, Od, md, Wd, Fd, Rd, Xd) {
      return IF(Od & md | ~Od & Wd, dd, Od, Fd, Rd, Xd)
    }

    function CF(dd, Od, md, Wd, Fd, Rd, Xd) {
      return IF(Od & Wd | md & ~Wd, dd, Od, Fd, Rd, Xd)
    }

    function ZF(dd, Od, md, Wd, Fd, Rd, Xd) {
      return IF(Od ^ md ^ Wd, dd, Od, Fd, Rd, Xd)
    }

    function kF(dd, Od, md, Wd, Fd, Rd, Xd) {
      return IF(md ^ (Od | ~Wd), dd, Od, Fd, Rd, Xd)
    }
    jF("v3", 48, (function(dd) {
      if ("string" === typeof dd) {
        var Od = unescape(encodeURIComponent(dd));
        dd = new Uint8Array(Od.length);
        for (var md = 0; md < Od.length; ++md) dd[md] = Od.charCodeAt(md)
      }
      return function(dd) {
        for (var Od = [], md = 32 * dd.length, Wd = "0123456789abcdef", Fd = 0; Fd < md; Fd += 8) {
          var Rd = dd[Fd >> 5] >>> Fd % 32 & 255,
            Xd = parseInt(Wd.charAt(Rd >>> 4 & 15) + Wd.charAt(15 & Rd), 16);
          Od.push(Xd)
        }
        return Od
      }(function(dd, Od) {
        dd[Od >> 5] |= 128 << Od % 32, dd[DF(Od) - 1] = Od;
        for (var md = 1732584193, Wd = -271733879, Fd = -1732584194, Rd = 271733878, Xd = 0; Xd < dd.length; Xd += 16) {
          var Kd = md,
            hd = Wd,
            vd = Fd,
            Qd = Rd;
          md = lF(md, Wd, Fd, Rd, dd[Xd], 7, -680876936), Rd = lF(Rd, md, Wd, Fd, dd[Xd + 1], 12, -389564586), Fd = lF(Fd, Rd, md, Wd, dd[Xd + 2], 17, 606105819), Wd = lF(Wd, Fd, Rd, md, dd[Xd + 3], 22, -1044525330), md = lF(md, Wd, Fd, Rd, dd[Xd + 4], 7, -176418897), Rd = lF(Rd, md, Wd, Fd, dd[Xd + 5], 12, 1200080426), Fd = lF(Fd, Rd, md, Wd, dd[Xd + 6], 17, -1473231341), Wd = lF(Wd, Fd, Rd, md, dd[Xd + 7], 22, -45705983), md = lF(md, Wd, Fd, Rd, dd[Xd + 8], 7, 1770035416), Rd = lF(Rd, md, Wd, Fd, dd[Xd + 9], 12, -1958414417), Fd = lF(Fd, Rd, md, Wd, dd[Xd + 10], 17, -42063), Wd = lF(Wd, Fd, Rd, md, dd[Xd + 11], 22, -1990404162), md = lF(md, Wd, Fd, Rd, dd[Xd + 12], 7, 1804603682), Rd = lF(Rd, md, Wd, Fd, dd[Xd + 13], 12, -40341101), Fd = lF(Fd, Rd, md, Wd, dd[Xd + 14], 17, -1502002290), md = CF(md, Wd = lF(Wd, Fd, Rd, md, dd[Xd + 15], 22, 1236535329), Fd, Rd, dd[Xd + 1], 5, -165796510), Rd = CF(Rd, md, Wd, Fd, dd[Xd + 6], 9, -1069501632), Fd = CF(Fd, Rd, md, Wd, dd[Xd + 11], 14, 643717713), Wd = CF(Wd, Fd, Rd, md, dd[Xd], 20, -373897302), md = CF(md, Wd, Fd, Rd, dd[Xd + 5], 5, -701558691), Rd = CF(Rd, md, Wd, Fd, dd[Xd + 10], 9, 38016083), Fd = CF(Fd, Rd, md, Wd, dd[Xd + 15], 14, -660478335), Wd = CF(Wd, Fd, Rd, md, dd[Xd + 4], 20, -405537848), md = CF(md, Wd, Fd, Rd, dd[Xd + 9], 5, 568446438), Rd = CF(Rd, md, Wd, Fd, dd[Xd + 14], 9, -1019803690), Fd = CF(Fd, Rd, md, Wd, dd[Xd + 3], 14, -187363961), Wd = CF(Wd, Fd, Rd, md, dd[Xd + 8], 20, 1163531501), md = CF(md, Wd, Fd, Rd, dd[Xd + 13], 5, -1444681467), Rd = CF(Rd, md, Wd, Fd, dd[Xd + 2], 9, -51403784), Fd = CF(Fd, Rd, md, Wd, dd[Xd + 7], 14, 1735328473), md = ZF(md, Wd = CF(Wd, Fd, Rd, md, dd[Xd + 12], 20, -1926607734), Fd, Rd, dd[Xd + 5], 4, -378558), Rd = ZF(Rd, md, Wd, Fd, dd[Xd + 8], 11, -2022574463), Fd = ZF(Fd, Rd, md, Wd, dd[Xd + 11], 16, 1839030562), Wd = ZF(Wd, Fd, Rd, md, dd[Xd + 14], 23, -35309556), md = ZF(md, Wd, Fd, Rd, dd[Xd + 1], 4, -1530992060), Rd = ZF(Rd, md, Wd, Fd, dd[Xd + 4], 11, 1272893353), Fd = ZF(Fd, Rd, md, Wd, dd[Xd + 7], 16, -155497632), Wd = ZF(Wd, Fd, Rd, md, dd[Xd + 10], 23, -1094730640), md = ZF(md, Wd, Fd, Rd, dd[Xd + 13], 4, 681279174), Rd = ZF(Rd, md, Wd, Fd, dd[Xd], 11, -358537222), Fd = ZF(Fd, Rd, md, Wd, dd[Xd + 3], 16, -722521979), Wd = ZF(Wd, Fd, Rd, md, dd[Xd + 6], 23, 76029189), md = ZF(md, Wd, Fd, Rd, dd[Xd + 9], 4, -640364487), Rd = ZF(Rd, md, Wd, Fd, dd[Xd + 12], 11, -421815835), Fd = ZF(Fd, Rd, md, Wd, dd[Xd + 15], 16, 530742520), md = kF(md, Wd = ZF(Wd, Fd, Rd, md, dd[Xd + 2], 23, -995338651), Fd, Rd, dd[Xd], 6, -198630844), Rd = kF(Rd, md, Wd, Fd, dd[Xd + 7], 10, 1126891415), Fd = kF(Fd, Rd, md, Wd, dd[Xd + 14], 15, -1416354905), Wd = kF(Wd, Fd, Rd, md, dd[Xd + 5], 21, -57434055), md = kF(md, Wd, Fd, Rd, dd[Xd + 12], 6, 1700485571), Rd = kF(Rd, md, Wd, Fd, dd[Xd + 3], 10, -1894986606), Fd = kF(Fd, Rd, md, Wd, dd[Xd + 10], 15, -1051523), Wd = kF(Wd, Fd, Rd, md, dd[Xd + 1], 21, -2054922799), md = kF(md, Wd, Fd, Rd, dd[Xd + 8], 6, 1873313359), Rd = kF(Rd, md, Wd, Fd, dd[Xd + 15], 10, -30611744), Fd = kF(Fd, Rd, md, Wd, dd[Xd + 6], 15, -1560198380), Wd = kF(Wd, Fd, Rd, md, dd[Xd + 13], 21, 1309151649), md = kF(md, Wd, Fd, Rd, dd[Xd + 4], 6, -145523070), Rd = kF(Rd, md, Wd, Fd, dd[Xd + 11], 10, -1120210379), Fd = kF(Fd, Rd, md, Wd, dd[Xd + 2], 15, 718787259), Wd = kF(Wd, Fd, Rd, md, dd[Xd + 9], 21, -343485551), md = eF(md, Kd), Wd = eF(Wd, hd), Fd = eF(Fd, vd), Rd = eF(Rd, Qd)
        }
        return [md, Wd, Fd, Rd]
      }(function(dd) {
        if (0 === dd.length) return [];
        for (var Od = 8 * dd.length, md = new Uint32Array(DF(Od)), Wd = 0; Wd < Od; Wd += 8) md[Wd >> 5] |= (255 & dd[Wd / 8]) << Wd % 32;
        return md
      }(dd), 8 * dd.length))
    }));
    var fF = new Uint8Array(16);

    function MF() {
      if (!cF && !(cF = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return cF(fF)
    }

    function dR(dd, Od, md) {
      var Wd = (dd = dd || {}).random || (dd.rng || MF)();
      if (Wd[6] = 15 & Wd[6] | 64, Wd[8] = 63 & Wd[8] | 128, Od) {
        md = md || 0;
        for (var Fd = 0; Fd < 16; ++Fd) Od[md + Fd] = Wd[Fd];
        return Od
      }
      return zF(Wd)
    }

    function OR(dd, Od, md, Wd) {
      switch (dd) {
        case 0:
          return Od & md ^ ~Od & Wd;
        case 1:
        case 3:
          return Od ^ md ^ Wd;
        case 2:
          return Od & md ^ Od & Wd ^ md & Wd
      }
    }

    function mR(dd, Od) {
      return dd << Od | dd >>> 32 - Od
    }
    jF("v5", 80, (function(dd) {
      var Od = [1518500249, 1859775393, 2400959708, 3395469782],
        md = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof dd) {
        var Wd = unescape(encodeURIComponent(dd));
        dd = [];
        for (var Fd = 0; Fd < Wd.length; ++Fd) dd.push(Wd.charCodeAt(Fd))
      } else Array.isArray(dd) || (dd = Array.prototype.slice.call(dd));
      dd.push(128);
      for (var Rd = dd.length / 4 + 2, Xd = Math.ceil(Rd / 16), Kd = new Array(Xd), hd = 0; hd < Xd; ++hd) {
        for (var vd = new Uint32Array(16), Qd = 0; Qd < 16; ++Qd) vd[Qd] = dd[64 * hd + 4 * Qd] << 24 | dd[64 * hd + 4 * Qd + 1] << 16 | dd[64 * hd + 4 * Qd + 2] << 8 | dd[64 * hd + 4 * Qd + 3];
        Kd[hd] = vd
      }
      Kd[Xd - 1][14] = 8 * (dd.length - 1) / Math.pow(2, 32), Kd[Xd - 1][14] = Math.floor(Kd[Xd - 1][14]), Kd[Xd - 1][15] = 8 * (dd.length - 1) & 4294967295;
      for (var td = 0; td < Xd; ++td) {
        for (var od = new Uint32Array(80), Nd = 0; Nd < 16; ++Nd) od[Nd] = Kd[td][Nd];
        for (var qd = 16; qd < 80; ++qd) od[qd] = mR(od[qd - 3] ^ od[qd - 8] ^ od[qd - 14] ^ od[qd - 16], 1);
        for (var Hd = md[0], yd = md[1], bd = md[2], Td = md[3], pd = md[4], Yd = 0; Yd < 80; ++Yd) {
          var gd = Math.floor(Yd / 20),
            wd = mR(Hd, 5) + OR(gd, yd, bd, Td) + pd + Od[gd] + od[Yd] >>> 0;
          pd = Td, Td = bd, bd = mR(yd, 30) >>> 0, yd = Hd, Hd = wd
        }
        md[0] = md[0] + Hd >>> 0, md[1] = md[1] + yd >>> 0, md[2] = md[2] + bd >>> 0, md[3] = md[3] + Td >>> 0, md[4] = md[4] + pd >>> 0
      }
      return [md[0] >> 24 & 255, md[0] >> 16 & 255, md[0] >> 8 & 255, 255 & md[0], md[1] >> 24 & 255, md[1] >> 16 & 255, md[1] >> 8 & 255, 255 & md[1], md[2] >> 24 & 255, md[2] >> 16 & 255, md[2] >> 8 & 255, 255 & md[2], md[3] >> 24 & 255, md[3] >> 16 & 255, md[3] >> 8 & 255, 255 & md[3], md[4] >> 24 & 255, md[4] >> 16 & 255, md[4] >> 8 & 255, 255 & md[4]]
    }));
    class WR extends Error {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(Od), this.code = dd, this.message = Od, this.name = "Discord SDK Error"
      }
    }
    const FR = ["log", "warn", "debug", "info", "error"];
    var RR;
    ! function(dd) {
      dd[dd.HANDSHAKE = 0] = "HANDSHAKE", dd[dd.FRAME = 1] = "FRAME", dd[dd.CLOSE = 2] = "CLOSE", dd[dd.HELLO = 3] = "HELLO"
    }(RR || (RR = {}));
    const XR = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class KR {
      getTransfer(dd) {
        var Od;
        switch (dd.cmd) {
          case fm.SUBSCRIBE:
          case fm.UNSUBSCRIBE:
            return;
          default:
            return null !== (Od = dd.transfer) && void 0 !== Od ? Od : void 0
        }
      }
      constructor(dd, Od) {
        var md;
        if (this.eventBus = new vd, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = dd => {
            var Od;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const md = dR();
            null === (Od = this.source) || void 0 === Od || Od.postMessage([RR.FRAME, Object.assign(Object.assign({}, dd), {
              nonce: md
            })], this.sourceOrigin, this.getTransfer(dd));
            return new Promise(((dd, Od) => {
              this.pendingCommands.set(md, {
                resolve: dd,
                reject: Od
              })
            }))
          }, this.commands = (md = this.sendCommand, {
            authenticate: yF(md),
            authorize: bF(md),
            captureLog: TF(md),
            encourageHardwareAcceleration: pF(md),
            getChannel: AF(md),
            getChannelPermissions: wF(md),
            getEntitlements: YF(md),
            getPlatformBehaviors: aF(md),
            getSkus: gF(md),
            openExternalLink: EF(md),
            openInviteDialog: JF(md),
            openShareMomentDialog: UF(md),
            setActivity: xF(md),
            setConfig: BF(md),
            setOrientationLockState: sF(md),
            startPurchase: uF(md),
            userSettingsGetLocale: VF(md),
            initiateImageUpload: iF(md),
            getInstanceConnectedParticipants: rF(md)
          }), this.handleMessage = dd => {
            if (!XR.has(dd.origin)) return;
            const Od = dd.data;
            if (!Array.isArray(Od)) return;
            const [md, Wd] = Od;
            switch (md) {
              case RR.HELLO:
                return;
              case RR.CLOSE:
                return this.handleClose(Wd);
              case RR.HANDSHAKE:
                return this.handleHandshake();
              case RR.FRAME:
                return this.handleFrame(Wd);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = dd, this.configuration = null !== Od && void 0 !== Od ? Od : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = nm.DESKTOP, this.guildId = null, void(this.channelId = null);
        const Wd = new URLSearchParams(this._getSearch()),
          Fd = Wd.get("frame_id");
        if (!Fd) throw new Error("frame_id query param is not defined");
        this.frameId = Fd;
        const Rd = Wd.get("instance_id");
        if (!Rd) throw new Error("instance_id query param is not defined");
        this.instanceId = Rd;
        const Xd = Wd.get("platform");
        if (!Xd) throw new Error("platform query param is not defined");
        if (Xd !== nm.DESKTOP && Xd !== nm.MOBILE) throw new Error(`Invalid query param "platform" of "${Xd}". Valid values are "${nm.DESKTOP}" or "${nm.MOBILE}"`);
        this.platform = Xd, this.guildId = Wd.get("guild_id"), this.channelId = Wd.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var dd;
          return [null !== (dd = window.parent.opener) && void 0 !== dd ? dd : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(dd, Od) {
        var md;
        window.removeEventListener("message", this.handleMessage);
        const Wd = dR();
        null === (md = this.source) || void 0 === md || md.postMessage([RR.CLOSE, {
          code: dd,
          message: Od,
          nonce: Wd
        }], this.sourceOrigin)
      }
      async subscribe(dd, Od) {
        for (var md = arguments.length, Wd = new Array(md > 2 ? md - 2 : 0), Fd = 2; Fd < md; Fd++) Wd[Fd - 2] = arguments[Fd];
        const [Rd] = Wd, Xd = this.eventBus.listenerCount(dd), Kd = this.eventBus.on(dd, Od);
        return Object.values(GW).includes(dd) && dd !== GW.READY && 0 === Xd && await this.sendCommand({
          cmd: fm.SUBSCRIBE,
          args: Rd,
          evt: dd
        }), Kd
      }
      async unsubscribe(dd, Od) {
        for (var md = arguments.length, Wd = new Array(md > 2 ? md - 2 : 0), Fd = 2; Fd < md; Fd++) Wd[Fd - 2] = arguments[Fd];
        const [Rd] = Wd;
        return dd !== GW.READY && 1 === this.eventBus.listenerCount(dd) && await this.sendCommand({
          cmd: fm.UNSUBSCRIBE,
          evt: dd,
          args: Rd
        }), this.eventBus.off(dd, Od)
      }
      async ready() {
        this.isReady || await new Promise((dd => {
          this.eventBus.once(GW.READY, dd)
        }))
      }
      handshake() {
        var dd;
        null === (dd = this.source) || void 0 === dd || dd.postMessage([RR.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(GW.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const dd = (dd, Od) => {
          this.commands.captureLog({
            level: dd,
            message: Od
          })
        };
        FR.forEach((Od => {
          ! function(dd, Od, md) {
            const Wd = dd[Od],
              Fd = dd;
            Wd && (dd[Od] = function() {
              const dd = [].slice.call(arguments),
                Rd = "" + dd.join(" ");
              md(Od, Rd), Wd.apply(Fd, dd)
            })
          }(console, Od, dd)
        }))
      }
      handleClose(dd) {
        tF.parse(dd)
      }
      handleHandshake() {}
      handleFrame(dd) {
        var Od, md;
        let Wd;
        try {
          Wd = NF(dd)
        } catch (Fd) {
          return console.error("Failed to parse", dd), void console.error(Fd)
        }
        if ("DISPATCH" === Wd.cmd) this.eventBus.emit(Wd.evt, Wd.data);
        else {
          if (Wd.evt === rW) {
            if (null != Wd.nonce) return null === (Od = this.pendingCommands.get(Wd.nonce)) || void 0 === Od || Od.reject(Wd.data), void this.pendingCommands.delete(Wd.nonce);
            this.eventBus.emit("error", new WR(Wd.data.code, Wd.data.message))
          }
          if (null == Wd.nonce) return void console.error("Missing nonce", dd);
          null === (md = this.pendingCommands.get(Wd.nonce)) || void 0 === md || md.resolve(Wd), this.pendingCommands.delete(Wd.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var hR, vR = 1e9,
      QR = !0,
      tR = "[DecimalError] ",
      oR = tR + "Invalid argument: ",
      NR = tR + "Exponent out of range: ",
      qR = Math.floor,
      HR = Math.pow,
      yR = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      bR = 1e7,
      TR = 9007199254740991,
      pR = qR(1286742750677284.5),
      YR = {};

    function gR(dd, Od) {
      var md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd = dd.constructor,
        td = Qd.precision;
      if (!dd.s || !Od.s) return Od.s || (Od = new Qd(dd)), QR ? uR(Od, td) : Od;
      if (hd = dd.d, vd = Od.d, Xd = dd.e, Fd = Od.e, hd = hd.slice(), Rd = Xd - Fd) {
        for (Rd < 0 ? (Wd = hd, Rd = -Rd, Kd = vd.length) : (Wd = vd, Fd = Xd, Kd = hd.length), Rd > (Kd = (Xd = Math.ceil(td / 7)) > Kd ? Xd + 1 : Kd + 1) && (Rd = Kd, Wd.length = 1), Wd.reverse(); Rd--;) Wd.push(0);
        Wd.reverse()
      }
      for ((Kd = hd.length) - (Rd = vd.length) < 0 && (Rd = Kd, Wd = vd, vd = hd, hd = Wd), md = 0; Rd;) md = (hd[--Rd] = hd[Rd] + vd[Rd] + md) / bR | 0, hd[Rd] %= bR;
      for (md && (hd.unshift(md), ++Fd), Kd = hd.length; 0 == hd[--Kd];) hd.pop();
      return Od.d = hd, Od.e = Fd, QR ? uR(Od, td) : Od
    }

    function wR(dd, Od, md) {
      if (dd !== ~~dd || dd < Od || dd > md) throw Error(oR + dd)
    }

    function aR(dd) {
      var Od, md, Wd, Fd = dd.length - 1,
        Rd = "",
        Xd = dd[0];
      if (Fd > 0) {
        for (Rd += Xd, Od = 1; Od < Fd; Od++)(md = 7 - (Wd = dd[Od] + "").length) && (Rd += BR(md)), Rd += Wd;
        (md = 7 - (Wd = (Xd = dd[Od]) + "").length) && (Rd += BR(md))
      } else if (0 === Xd) return "0";
      for (; Xd % 10 === 0;) Xd /= 10;
      return Rd + Xd
    }
    YR.absoluteValue = YR.abs = function() {
      var dd = new this.constructor(this);
      return dd.s && (dd.s = 1), dd
    }, YR.comparedTo = YR.cmp = function(dd) {
      var Od, md, Wd, Fd, Rd = this;
      if (dd = new Rd.constructor(dd), Rd.s !== dd.s) return Rd.s || -dd.s;
      if (Rd.e !== dd.e) return Rd.e > dd.e ^ Rd.s < 0 ? 1 : -1;
      for (Od = 0, md = (Wd = Rd.d.length) < (Fd = dd.d.length) ? Wd : Fd; Od < md; ++Od)
        if (Rd.d[Od] !== dd.d[Od]) return Rd.d[Od] > dd.d[Od] ^ Rd.s < 0 ? 1 : -1;
      return Wd === Fd ? 0 : Wd > Fd ^ Rd.s < 0 ? 1 : -1
    }, YR.decimalPlaces = YR.dp = function() {
      var dd = this,
        Od = dd.d.length - 1,
        md = 7 * (Od - dd.e);
      if (Od = dd.d[Od])
        for (; Od % 10 == 0; Od /= 10) md--;
      return md < 0 ? 0 : md
    }, YR.dividedBy = YR.div = function(dd) {
      return ER(this, new this.constructor(dd))
    }, YR.dividedToIntegerBy = YR.idiv = function(dd) {
      var Od = this.constructor;
      return uR(ER(this, new Od(dd), 0, 1), Od.precision)
    }, YR.equals = YR.eq = function(dd) {
      return !this.cmp(dd)
    }, YR.exponent = function() {
      return UR(this)
    }, YR.greaterThan = YR.gt = function(dd) {
      return this.cmp(dd) > 0
    }, YR.greaterThanOrEqualTo = YR.gte = function(dd) {
      return this.cmp(dd) >= 0
    }, YR.isInteger = YR.isint = function() {
      return this.e > this.d.length - 2
    }, YR.isNegative = YR.isneg = function() {
      return this.s < 0
    }, YR.isPositive = YR.ispos = function() {
      return this.s > 0
    }, YR.isZero = function() {
      return 0 === this.s
    }, YR.lessThan = YR.lt = function(dd) {
      return this.cmp(dd) < 0
    }, YR.lessThanOrEqualTo = YR.lte = function(dd) {
      return this.cmp(dd) < 1
    }, YR.logarithm = YR.log = function(dd) {
      var Od, md = this,
        Wd = md.constructor,
        Fd = Wd.precision,
        Rd = Fd + 5;
      if (void 0 === dd) dd = new Wd(10);
      else if ((dd = new Wd(dd)).s < 1 || dd.eq(hR)) throw Error(tR + "NaN");
      if (md.s < 1) throw Error(tR + (md.s ? "NaN" : "-Infinity"));
      return md.eq(hR) ? new Wd(0) : (QR = !1, Od = ER(SR(md, Rd), SR(dd, Rd), Rd), QR = !0, uR(Od, Fd))
    }, YR.minus = YR.sub = function(dd) {
      var Od = this;
      return dd = new Od.constructor(dd), Od.s == dd.s ? VR(Od, dd) : gR(Od, (dd.s = -dd.s, dd))
    }, YR.modulo = YR.mod = function(dd) {
      var Od, md = this,
        Wd = md.constructor,
        Fd = Wd.precision;
      if (!(dd = new Wd(dd)).s) throw Error(tR + "NaN");
      return md.s ? (QR = !1, Od = ER(md, dd, 0, 1).times(dd), QR = !0, md.minus(Od)) : uR(new Wd(md), Fd)
    }, YR.naturalExponential = YR.exp = function() {
      return JR(this)
    }, YR.naturalLogarithm = YR.ln = function() {
      return SR(this)
    }, YR.negated = YR.neg = function() {
      var dd = new this.constructor(this);
      return dd.s = -dd.s || 0, dd
    }, YR.plus = YR.add = function(dd) {
      var Od = this;
      return dd = new Od.constructor(dd), Od.s == dd.s ? gR(Od, dd) : VR(Od, (dd.s = -dd.s, dd))
    }, YR.precision = YR.sd = function(dd) {
      var Od, md, Wd, Fd = this;
      if (void 0 !== dd && dd !== !!dd && 1 !== dd && 0 !== dd) throw Error(oR + dd);
      if (Od = UR(Fd) + 1, md = 7 * (Wd = Fd.d.length - 1) + 1, Wd = Fd.d[Wd]) {
        for (; Wd % 10 == 0; Wd /= 10) md--;
        for (Wd = Fd.d[0]; Wd >= 10; Wd /= 10) md++
      }
      return dd && Od > md ? Od : md
    }, YR.squareRoot = YR.sqrt = function() {
      var dd, Od, md, Wd, Fd, Rd, Xd, Kd = this,
        hd = Kd.constructor;
      if (Kd.s < 1) {
        if (!Kd.s) return new hd(0);
        throw Error(tR + "NaN")
      }
      for (dd = UR(Kd), QR = !1, 0 == (Fd = Math.sqrt(+Kd)) || Fd == 1 / 0 ? (((Od = aR(Kd.d)).length + dd) % 2 == 0 && (Od += "0"), Fd = Math.sqrt(Od), dd = qR((dd + 1) / 2) - (dd < 0 || dd % 2), Wd = new hd(Od = Fd == 1 / 0 ? "1e" + dd : (Od = Fd.toExponential()).slice(0, Od.indexOf("e") + 1) + dd)) : Wd = new hd(Fd.toString()), Fd = Xd = (md = hd.precision) + 3;;)
        if (Wd = (Rd = Wd).plus(ER(Kd, Rd, Xd + 2)).times(.5), aR(Rd.d).slice(0, Xd) === (Od = aR(Wd.d)).slice(0, Xd)) {
          if (Od = Od.slice(Xd - 3, Xd + 1), Fd == Xd && "4999" == Od) {
            if (uR(Rd, md + 1, 0), Rd.times(Rd).eq(Kd)) {
              Wd = Rd;
              break
            }
          } else if ("9999" != Od) break;
          Xd += 4
        } return QR = !0, uR(Wd, md)
    }, YR.times = YR.mul = function(dd) {
      var Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd = this,
        td = Qd.constructor,
        od = Qd.d,
        Nd = (dd = new td(dd)).d;
      if (!Qd.s || !dd.s) return new td(0);
      for (dd.s *= Qd.s, md = Qd.e + dd.e, (hd = od.length) < (vd = Nd.length) && (Rd = od, od = Nd, Nd = Rd, Xd = hd, hd = vd, vd = Xd), Rd = [], Wd = Xd = hd + vd; Wd--;) Rd.push(0);
      for (Wd = vd; --Wd >= 0;) {
        for (Od = 0, Fd = hd + Wd; Fd > Wd;) Kd = Rd[Fd] + Nd[Wd] * od[Fd - Wd - 1] + Od, Rd[Fd--] = Kd % bR | 0, Od = Kd / bR | 0;
        Rd[Fd] = (Rd[Fd] + Od) % bR | 0
      }
      for (; !Rd[--Xd];) Rd.pop();
      return Od ? ++md : Rd.shift(), dd.d = Rd, dd.e = md, QR ? uR(dd, td.precision) : dd
    }, YR.toDecimalPlaces = YR.todp = function(dd, Od) {
      var md = this,
        Wd = md.constructor;
      return md = new Wd(md), void 0 === dd ? md : (wR(dd, 0, vR), void 0 === Od ? Od = Wd.rounding : wR(Od, 0, 8), uR(md, dd + UR(md) + 1, Od))
    }, YR.toExponential = function(dd, Od) {
      var md, Wd = this,
        Fd = Wd.constructor;
      return void 0 === dd ? md = iR(Wd, !0) : (wR(dd, 0, vR), void 0 === Od ? Od = Fd.rounding : wR(Od, 0, 8), md = iR(Wd = uR(new Fd(Wd), dd + 1, Od), !0, dd + 1)), md
    }, YR.toFixed = function(dd, Od) {
      var md, Wd, Fd = this,
        Rd = Fd.constructor;
      return void 0 === dd ? iR(Fd) : (wR(dd, 0, vR), void 0 === Od ? Od = Rd.rounding : wR(Od, 0, 8), md = iR((Wd = uR(new Rd(Fd), dd + UR(Fd) + 1, Od)).abs(), !1, dd + UR(Wd) + 1), Fd.isneg() && !Fd.isZero() ? "-" + md : md)
    }, YR.toInteger = YR.toint = function() {
      var dd = this,
        Od = dd.constructor;
      return uR(new Od(dd), UR(dd) + 1, Od.rounding)
    }, YR.toNumber = function() {
      return +this
    }, YR.toPower = YR.pow = function(dd) {
      var Od, md, Wd, Fd, Rd, Xd, Kd = this,
        hd = Kd.constructor,
        vd = +(dd = new hd(dd));
      if (!dd.s) return new hd(hR);
      if (!(Kd = new hd(Kd)).s) {
        if (dd.s < 1) throw Error(tR + "Infinity");
        return Kd
      }
      if (Kd.eq(hR)) return Kd;
      if (Wd = hd.precision, dd.eq(hR)) return uR(Kd, Wd);
      if (Xd = (Od = dd.e) >= (md = dd.d.length - 1), Rd = Kd.s, Xd) {
        if ((md = vd < 0 ? -vd : vd) <= TR) {
          for (Fd = new hd(hR), Od = Math.ceil(Wd / 7 + 4), QR = !1; md % 2 && AR((Fd = Fd.times(Kd)).d, Od), 0 !== (md = qR(md / 2));) AR((Kd = Kd.times(Kd)).d, Od);
          return QR = !0, dd.s < 0 ? new hd(hR).div(Fd) : uR(Fd, Wd)
        }
      } else if (Rd < 0) throw Error(tR + "NaN");
      return Rd = Rd < 0 && 1 & dd.d[Math.max(Od, md)] ? -1 : 1, Kd.s = 1, QR = !1, Fd = dd.times(SR(Kd, Wd + 12)), QR = !0, (Fd = JR(Fd)).s = Rd, Fd
    }, YR.toPrecision = function(dd, Od) {
      var md, Wd, Fd = this,
        Rd = Fd.constructor;
      return void 0 === dd ? Wd = iR(Fd, (md = UR(Fd)) <= Rd.toExpNeg || md >= Rd.toExpPos) : (wR(dd, 1, vR), void 0 === Od ? Od = Rd.rounding : wR(Od, 0, 8), Wd = iR(Fd = uR(new Rd(Fd), dd, Od), dd <= (md = UR(Fd)) || md <= Rd.toExpNeg, dd)), Wd
    }, YR.toSignificantDigits = YR.tosd = function(dd, Od) {
      var md = this.constructor;
      return void 0 === dd ? (dd = md.precision, Od = md.rounding) : (wR(dd, 1, vR), void 0 === Od ? Od = md.rounding : wR(Od, 0, 8)), uR(new md(this), dd, Od)
    }, YR.toString = YR.valueOf = YR.val = YR.toJSON = YR[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var dd = this,
        Od = UR(dd),
        md = dd.constructor;
      return iR(dd, Od <= md.toExpNeg || Od >= md.toExpPos)
    };
    var ER = function() {
      function dd(dd, Od) {
        var md, Wd = 0,
          Fd = dd.length;
        for (dd = dd.slice(); Fd--;) md = dd[Fd] * Od + Wd, dd[Fd] = md % bR | 0, Wd = md / bR | 0;
        return Wd && dd.unshift(Wd), dd
      }

      function Od(dd, Od, md, Wd) {
        var Fd, Rd;
        if (md != Wd) Rd = md > Wd ? 1 : -1;
        else
          for (Fd = Rd = 0; Fd < md; Fd++)
            if (dd[Fd] != Od[Fd]) {
              Rd = dd[Fd] > Od[Fd] ? 1 : -1;
              break
            } return Rd
      }

      function md(dd, Od, md) {
        for (var Wd = 0; md--;) dd[md] -= Wd, Wd = dd[md] < Od[md] ? 1 : 0, dd[md] = Wd * bR + dd[md] - Od[md];
        for (; !dd[0] && dd.length > 1;) dd.shift()
      }
      return function(Wd, Fd, Rd, Xd) {
        var Kd, hd, vd, Qd, td, od, Nd, qd, Hd, yd, bd, Td, pd, Yd, gd, wd, Ed, Jd, Ud = Wd.constructor,
          xd = Wd.s == Fd.s ? 1 : -1,
          Bd = Wd.d,
          Sd = Fd.d;
        if (!Wd.s) return new Ud(Wd);
        if (!Fd.s) throw Error(tR + "Division by zero");
        for (hd = Wd.e - Fd.e, Ed = Sd.length, gd = Bd.length, qd = (Nd = new Ud(xd)).d = [], vd = 0; Sd[vd] == (Bd[vd] || 0);) ++vd;
        if (Sd[vd] > (Bd[vd] || 0) && --hd, (Td = null == Rd ? Rd = Ud.precision : Xd ? Rd + (UR(Wd) - UR(Fd)) + 1 : Rd) < 0) return new Ud(0);
        if (Td = Td / 7 + 2 | 0, vd = 0, 1 == Ed)
          for (Qd = 0, Sd = Sd[0], Td++;
            (vd < gd || Qd) && Td--; vd++) pd = Qd * bR + (Bd[vd] || 0), qd[vd] = pd / Sd | 0, Qd = pd % Sd | 0;
        else {
          for ((Qd = bR / (Sd[0] + 1) | 0) > 1 && (Sd = dd(Sd, Qd), Bd = dd(Bd, Qd), Ed = Sd.length, gd = Bd.length), Yd = Ed, yd = (Hd = Bd.slice(0, Ed)).length; yd < Ed;) Hd[yd++] = 0;
          (Jd = Sd.slice()).unshift(0), wd = Sd[0], Sd[1] >= bR / 2 && ++wd;
          do {
            Qd = 0, (Kd = Od(Sd, Hd, Ed, yd)) < 0 ? (bd = Hd[0], Ed != yd && (bd = bd * bR + (Hd[1] || 0)), (Qd = bd / wd | 0) > 1 ? (Qd >= bR && (Qd = bR - 1), 1 == (Kd = Od(td = dd(Sd, Qd), Hd, od = td.length, yd = Hd.length)) && (Qd--, md(td, Ed < od ? Jd : Sd, od))) : (0 == Qd && (Kd = Qd = 1), td = Sd.slice()), (od = td.length) < yd && td.unshift(0), md(Hd, td, yd), -1 == Kd && (Kd = Od(Sd, Hd, Ed, yd = Hd.length)) < 1 && (Qd++, md(Hd, Ed < yd ? Jd : Sd, yd)), yd = Hd.length) : 0 === Kd && (Qd++, Hd = [0]), qd[vd++] = Qd, Kd && Hd[0] ? Hd[yd++] = Bd[Yd] || 0 : (Hd = [Bd[Yd]], yd = 1)
          } while ((Yd++ < gd || void 0 !== Hd[0]) && Td--)
        }
        return qd[0] || qd.shift(), Nd.e = hd, uR(Nd, Xd ? Rd + UR(Nd) + 1 : Rd)
      }
    }();

    function JR(dd, Od) {
      var md, Wd, Fd, Rd, Xd, Kd = 0,
        hd = 0,
        vd = dd.constructor,
        Qd = vd.precision;
      if (UR(dd) > 16) throw Error(NR + UR(dd));
      if (!dd.s) return new vd(hR);
      for (null == Od ? (QR = !1, Xd = Qd) : Xd = Od, Rd = new vd(.03125); dd.abs().gte(.1);) dd = dd.times(Rd), hd += 5;
      for (Xd += Math.log(HR(2, hd)) / Math.LN10 * 2 + 5 | 0, md = Wd = Fd = new vd(hR), vd.precision = Xd;;) {
        if (Wd = uR(Wd.times(dd), Xd), md = md.times(++Kd), aR((Rd = Fd.plus(ER(Wd, md, Xd))).d).slice(0, Xd) === aR(Fd.d).slice(0, Xd)) {
          for (; hd--;) Fd = uR(Fd.times(Fd), Xd);
          return vd.precision = Qd, null == Od ? (QR = !0, uR(Fd, Qd)) : Fd
        }
        Fd = Rd
      }
    }

    function UR(dd) {
      for (var Od = 7 * dd.e, md = dd.d[0]; md >= 10; md /= 10) Od++;
      return Od
    }

    function xR(dd, Od, md) {
      if (Od > dd.LN10.sd()) throw QR = !0, md && (dd.precision = md), Error(tR + "LN10 precision limit exceeded");
      return uR(new dd(dd.LN10), Od)
    }

    function BR(dd) {
      for (var Od = ""; dd--;) Od += "0";
      return Od
    }

    function SR(dd, Od) {
      var md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td = 1,
        od = dd,
        Nd = od.d,
        qd = od.constructor,
        Hd = qd.precision;
      if (od.s < 1) throw Error(tR + (od.s ? "NaN" : "-Infinity"));
      if (od.eq(hR)) return new qd(0);
      if (null == Od ? (QR = !1, vd = Hd) : vd = Od, od.eq(10)) return null == Od && (QR = !0), xR(qd, vd);
      if (vd += 10, qd.precision = vd, Wd = (md = aR(Nd)).charAt(0), Rd = UR(od), !(Math.abs(Rd) < 15e14)) return hd = xR(qd, vd + 2, Hd).times(Rd + ""), od = SR(new qd(Wd + "." + md.slice(1)), vd - 10).plus(hd), qd.precision = Hd, null == Od ? (QR = !0, uR(od, Hd)) : od;
      for (; Wd < 7 && 1 != Wd || 1 == Wd && md.charAt(1) > 3;) Wd = (md = aR((od = od.times(dd)).d)).charAt(0), td++;
      for (Rd = UR(od), Wd > 1 ? (od = new qd("0." + md), Rd++) : od = new qd(Wd + "." + md.slice(1)), Kd = Xd = od = ER(od.minus(hR), od.plus(hR), vd), Qd = uR(od.times(od), vd), Fd = 3;;) {
        if (Xd = uR(Xd.times(Qd), vd), aR((hd = Kd.plus(ER(Xd, new qd(Fd), vd))).d).slice(0, vd) === aR(Kd.d).slice(0, vd)) return Kd = Kd.times(2), 0 !== Rd && (Kd = Kd.plus(xR(qd, vd + 2, Hd).times(Rd + ""))), Kd = ER(Kd, new qd(td), vd), qd.precision = Hd, null == Od ? (QR = !0, uR(Kd, Hd)) : Kd;
        Kd = hd, Fd += 2
      }
    }

    function sR(dd, Od) {
      var md, Wd, Fd;
      for ((md = Od.indexOf(".")) > -1 && (Od = Od.replace(".", "")), (Wd = Od.search(/e/i)) > 0 ? (md < 0 && (md = Wd), md += +Od.slice(Wd + 1), Od = Od.substring(0, Wd)) : md < 0 && (md = Od.length), Wd = 0; 48 === Od.charCodeAt(Wd);) ++Wd;
      for (Fd = Od.length; 48 === Od.charCodeAt(Fd - 1);) --Fd;
      if (Od = Od.slice(Wd, Fd)) {
        if (Fd -= Wd, md = md - Wd - 1, dd.e = qR(md / 7), dd.d = [], Wd = (md + 1) % 7, md < 0 && (Wd += 7), Wd < Fd) {
          for (Wd && dd.d.push(+Od.slice(0, Wd)), Fd -= 7; Wd < Fd;) dd.d.push(+Od.slice(Wd, Wd += 7));
          Wd = 7 - (Od = Od.slice(Wd)).length
        } else Wd -= Fd;
        for (; Wd--;) Od += "0";
        if (dd.d.push(+Od), QR && (dd.e > pR || dd.e < -pR)) throw Error(NR + md)
      } else dd.s = 0, dd.e = 0, dd.d = [0];
      return dd
    }

    function uR(dd, Od, md) {
      var Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td = dd.d;
      for (Xd = 1, Rd = td[0]; Rd >= 10; Rd /= 10) Xd++;
      if ((Wd = Od - Xd) < 0) Wd += 7, Fd = Od, vd = td[Qd = 0];
      else {
        if ((Qd = Math.ceil((Wd + 1) / 7)) >= (Rd = td.length)) return dd;
        for (vd = Rd = td[Qd], Xd = 1; Rd >= 10; Rd /= 10) Xd++;
        Fd = (Wd %= 7) - 7 + Xd
      }
      if (void 0 !== md && (Kd = vd / (Rd = HR(10, Xd - Fd - 1)) % 10 | 0, hd = Od < 0 || void 0 !== td[Qd + 1] || vd % Rd, hd = md < 4 ? (Kd || hd) && (0 == md || md == (dd.s < 0 ? 3 : 2)) : Kd > 5 || 5 == Kd && (4 == md || hd || 6 == md && (Wd > 0 ? Fd > 0 ? vd / HR(10, Xd - Fd) : 0 : td[Qd - 1]) % 10 & 1 || md == (dd.s < 0 ? 8 : 7))), Od < 1 || !td[0]) return hd ? (Rd = UR(dd), td.length = 1, Od = Od - Rd - 1, td[0] = HR(10, (7 - Od % 7) % 7), dd.e = qR(-Od / 7) || 0) : (td.length = 1, td[0] = dd.e = dd.s = 0), dd;
      if (0 == Wd ? (td.length = Qd, Rd = 1, Qd--) : (td.length = Qd + 1, Rd = HR(10, 7 - Wd), td[Qd] = Fd > 0 ? (vd / HR(10, Xd - Fd) % HR(10, Fd) | 0) * Rd : 0), hd)
        for (;;) {
          if (0 == Qd) {
            (td[0] += Rd) == bR && (td[0] = 1, ++dd.e);
            break
          }
          if (td[Qd] += Rd, td[Qd] != bR) break;
          td[Qd--] = 0, Rd = 1
        }
      for (Wd = td.length; 0 === td[--Wd];) td.pop();
      if (QR && (dd.e > pR || dd.e < -pR)) throw Error(NR + UR(dd));
      return dd
    }

    function VR(dd, Od) {
      var md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td, od = dd.constructor,
        Nd = od.precision;
      if (!dd.s || !Od.s) return Od.s ? Od.s = -Od.s : Od = new od(dd), QR ? uR(Od, Nd) : Od;
      if (hd = dd.d, td = Od.d, Wd = Od.e, vd = dd.e, hd = hd.slice(), Xd = vd - Wd) {
        for ((Qd = Xd < 0) ? (md = hd, Xd = -Xd, Kd = td.length) : (md = td, Wd = vd, Kd = hd.length), Xd > (Fd = Math.max(Math.ceil(Nd / 7), Kd) + 2) && (Xd = Fd, md.length = 1), md.reverse(), Fd = Xd; Fd--;) md.push(0);
        md.reverse()
      } else {
        for ((Qd = (Fd = hd.length) < (Kd = td.length)) && (Kd = Fd), Fd = 0; Fd < Kd; Fd++)
          if (hd[Fd] != td[Fd]) {
            Qd = hd[Fd] < td[Fd];
            break
          } Xd = 0
      }
      for (Qd && (md = hd, hd = td, td = md, Od.s = -Od.s), Kd = hd.length, Fd = td.length - Kd; Fd > 0; --Fd) hd[Kd++] = 0;
      for (Fd = td.length; Fd > Xd;) {
        if (hd[--Fd] < td[Fd]) {
          for (Rd = Fd; Rd && 0 === hd[--Rd];) hd[Rd] = bR - 1;
          --hd[Rd], hd[Fd] += bR
        }
        hd[Fd] -= td[Fd]
      }
      for (; 0 === hd[--Kd];) hd.pop();
      for (; 0 === hd[0]; hd.shift()) --Wd;
      return hd[0] ? (Od.d = hd, Od.e = Wd, QR ? uR(Od, Nd) : Od) : new od(0)
    }

    function iR(dd, Od, md) {
      var Wd, Fd = UR(dd),
        Rd = aR(dd.d),
        Xd = Rd.length;
      return Od ? (md && (Wd = md - Xd) > 0 ? Rd = Rd.charAt(0) + "." + Rd.slice(1) + BR(Wd) : Xd > 1 && (Rd = Rd.charAt(0) + "." + Rd.slice(1)), Rd = Rd + (Fd < 0 ? "e" : "e+") + Fd) : Fd < 0 ? (Rd = "0." + BR(-Fd - 1) + Rd, md && (Wd = md - Xd) > 0 && (Rd += BR(Wd))) : Fd >= Xd ? (Rd += BR(Fd + 1 - Xd), md && (Wd = md - Fd - 1) > 0 && (Rd = Rd + "." + BR(Wd))) : ((Wd = Fd + 1) < Xd && (Rd = Rd.slice(0, Wd) + "." + Rd.slice(Wd)), md && (Wd = md - Xd) > 0 && (Fd + 1 === Xd && (Rd += "."), Rd += BR(Wd))), dd.s < 0 ? "-" + Rd : Rd
    }

    function AR(dd, Od) {
      if (dd.length > Od) return dd.length = Od, !0
    }

    function rR(dd) {
      if (!dd || "object" !== typeof dd) throw Error(tR + "Object expected");
      var Od, md, Wd, Fd = ["precision", 1, vR, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (Od = 0; Od < Fd.length; Od += 3)
        if (void 0 !== (Wd = dd[md = Fd[Od]])) {
          if (!(qR(Wd) === Wd && Wd >= Fd[Od + 1] && Wd <= Fd[Od + 2])) throw Error(oR + md + ": " + Wd);
          this[md] = Wd
        } if (void 0 !== (Wd = dd[md = "LN10"])) {
        if (Wd != Math.LN10) throw Error(oR + md + ": " + Wd);
        this[md] = new this(Wd)
      }
      return this
    }
    var GR = function dd(Od) {
      var md, Wd, Fd;

      function Rd(dd) {
        var Od = this;
        if (!(Od instanceof Rd)) return new Rd(dd);
        if (Od.constructor = Rd, dd instanceof Rd) return Od.s = dd.s, Od.e = dd.e, void(Od.d = (dd = dd.d) ? dd.slice() : dd);
        if ("number" === typeof dd) {
          if (0 * dd !== 0) throw Error(oR + dd);
          if (dd > 0) Od.s = 1;
          else {
            if (!(dd < 0)) return Od.s = 0, Od.e = 0, void(Od.d = [0]);
            dd = -dd, Od.s = -1
          }
          return dd === ~~dd && dd < 1e7 ? (Od.e = 0, void(Od.d = [dd])) : sR(Od, dd.toString())
        }
        if ("string" !== typeof dd) throw Error(oR + dd);
        if (45 === dd.charCodeAt(0) ? (dd = dd.slice(1), Od.s = -1) : Od.s = 1, !yR.test(dd)) throw Error(oR + dd);
        sR(Od, dd)
      }
      if (Rd.prototype = YR, Rd.ROUND_UP = 0, Rd.ROUND_DOWN = 1, Rd.ROUND_CEIL = 2, Rd.ROUND_FLOOR = 3, Rd.ROUND_HALF_UP = 4, Rd.ROUND_HALF_DOWN = 5, Rd.ROUND_HALF_EVEN = 6, Rd.ROUND_HALF_CEIL = 7, Rd.ROUND_HALF_FLOOR = 8, Rd.clone = dd, Rd.config = Rd.set = rR, void 0 === Od && (Od = {}), Od)
        for (Fd = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], md = 0; md < Fd.length;) Od.hasOwnProperty(Wd = Fd[md++]) || (Od[Wd] = this[Wd]);
      return Rd.config(Od), Rd
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    hR = new GR(1);
    var nR;
    ! function(dd) {
      dd.AED = "aed", dd.AFN = "afn", dd.ALL = "all", dd.AMD = "amd", dd.ANG = "ang", dd.AOA = "aoa", dd.ARS = "ars", dd.AUD = "aud", dd.AWG = "awg", dd.AZN = "azn", dd.BAM = "bam", dd.BBD = "bbd", dd.BDT = "bdt", dd.BGN = "bgn", dd.BHD = "bhd", dd.BIF = "bif", dd.BMD = "bmd", dd.BND = "bnd", dd.BOB = "bob", dd.BOV = "bov", dd.BRL = "brl", dd.BSD = "bsd", dd.BTN = "btn", dd.BWP = "bwp", dd.BYN = "byn", dd.BYR = "byr", dd.BZD = "bzd", dd.CAD = "cad", dd.CDF = "cdf", dd.CHE = "che", dd.CHF = "chf", dd.CHW = "chw", dd.CLF = "clf", dd.CLP = "clp", dd.CNY = "cny", dd.COP = "cop", dd.COU = "cou", dd.CRC = "crc", dd.CUC = "cuc", dd.CUP = "cup", dd.CVE = "cve", dd.CZK = "czk", dd.DJF = "djf", dd.DKK = "dkk", dd.DOP = "dop", dd.DZD = "dzd", dd.EGP = "egp", dd.ERN = "ern", dd.ETB = "etb", dd.EUR = "eur", dd.FJD = "fjd", dd.FKP = "fkp", dd.GBP = "gbp", dd.GEL = "gel", dd.GHS = "ghs", dd.GIP = "gip", dd.GMD = "gmd", dd.GNF = "gnf", dd.GTQ = "gtq", dd.GYD = "gyd", dd.HKD = "hkd", dd.HNL = "hnl", dd.HRK = "hrk", dd.HTG = "htg", dd.HUF = "huf", dd.IDR = "idr", dd.ILS = "ils", dd.INR = "inr", dd.IQD = "iqd", dd.IRR = "irr", dd.ISK = "isk", dd.JMD = "jmd", dd.JOD = "jod", dd.JPY = "jpy", dd.KES = "kes", dd.KGS = "kgs", dd.KHR = "khr", dd.KMF = "kmf", dd.KPW = "kpw", dd.KRW = "krw", dd.KWD = "kwd", dd.KYD = "kyd", dd.KZT = "kzt", dd.LAK = "lak", dd.LBP = "lbp", dd.LKR = "lkr", dd.LRD = "lrd", dd.LSL = "lsl", dd.LTL = "ltl", dd.LVL = "lvl", dd.LYD = "lyd", dd.MAD = "mad", dd.MDL = "mdl", dd.MGA = "mga", dd.MKD = "mkd", dd.MMK = "mmk", dd.MNT = "mnt", dd.MOP = "mop", dd.MRO = "mro", dd.MUR = "mur", dd.MVR = "mvr", dd.MWK = "mwk", dd.MXN = "mxn", dd.MXV = "mxv", dd.MYR = "myr", dd.MZN = "mzn", dd.NAD = "nad", dd.NGN = "ngn", dd.NIO = "nio", dd.NOK = "nok", dd.NPR = "npr", dd.NZD = "nzd", dd.OMR = "omr", dd.PAB = "pab", dd.PEN = "pen", dd.PGK = "pgk", dd.PHP = "php", dd.PKR = "pkr", dd.PLN = "pln", dd.PYG = "pyg", dd.QAR = "qar", dd.RON = "ron", dd.RSD = "rsd", dd.RUB = "rub", dd.RWF = "rwf", dd.SAR = "sar", dd.SBD = "sbd", dd.SCR = "scr", dd.SDG = "sdg", dd.SEK = "sek", dd.SGD = "sgd", dd.SHP = "shp", dd.SLL = "sll", dd.SOS = "sos", dd.SRD = "srd", dd.SSP = "ssp", dd.STD = "std", dd.SVC = "svc", dd.SYP = "syp", dd.SZL = "szl", dd.THB = "thb", dd.TJS = "tjs", dd.TMT = "tmt", dd.TND = "tnd", dd.TOP = "top", dd.TRY = "try", dd.TTD = "ttd", dd.TWD = "twd", dd.TZS = "tzs", dd.UAH = "uah", dd.UGX = "ugx", dd.USD = "usd", dd.USN = "usn", dd.USS = "uss", dd.UYI = "uyi", dd.UYU = "uyu", dd.UZS = "uzs", dd.VEF = "vef", dd.VND = "vnd", dd.VUV = "vuv", dd.WST = "wst", dd.XAF = "xaf", dd.XAG = "xag", dd.XAU = "xau", dd.XBA = "xba", dd.XBB = "xbb", dd.XBC = "xbc", dd.XBD = "xbd", dd.XCD = "xcd", dd.XDR = "xdr", dd.XFU = "xfu", dd.XOF = "xof", dd.XPD = "xpd", dd.XPF = "xpf", dd.XPT = "xpt", dd.XSU = "xsu", dd.XTS = "xts", dd.XUA = "xua", dd.YER = "yer", dd.ZAR = "zar", dd.ZMW = "zmw", dd.ZWL = "zwl"
    }(nR || (nR = {}));
    nR.AED, nR.AFN, nR.ALL, nR.AMD, nR.ANG, nR.AOA, nR.ARS, nR.AUD, nR.AWG, nR.AZN, nR.BAM, nR.BBD, nR.BDT, nR.BGN, nR.BHD, nR.BIF, nR.BMD, nR.BND, nR.BOB, nR.BOV, nR.BRL, nR.BSD, nR.BTN, nR.BWP, nR.BYR, nR.BYN, nR.BZD, nR.CAD, nR.CDF, nR.CHE, nR.CHF, nR.CHW, nR.CLF, nR.CLP, nR.CNY, nR.COP, nR.COU, nR.CRC, nR.CUC, nR.CUP, nR.CVE, nR.CZK, nR.DJF, nR.DKK, nR.DOP, nR.DZD, nR.EGP, nR.ERN, nR.ETB, nR.EUR, nR.FJD, nR.FKP, nR.GBP, nR.GEL, nR.GHS, nR.GIP, nR.GMD, nR.GNF, nR.GTQ, nR.GYD, nR.HKD, nR.HNL, nR.HRK, nR.HTG, nR.HUF, nR.IDR, nR.ILS, nR.INR, nR.IQD, nR.IRR, nR.ISK, nR.JMD, nR.JOD, nR.JPY, nR.KES, nR.KGS, nR.KHR, nR.KMF, nR.KPW, nR.KRW, nR.KWD, nR.KYD, nR.KZT, nR.LAK, nR.LBP, nR.LKR, nR.LRD, nR.LSL, nR.LTL, nR.LVL, nR.LYD, nR.MAD, nR.MDL, nR.MGA, nR.MKD, nR.MMK, nR.MNT, nR.MOP, nR.MRO, nR.MUR, nR.MVR, nR.MWK, nR.MXN, nR.MXV, nR.MYR, nR.MZN, nR.NAD, nR.NGN, nR.NIO, nR.NOK, nR.NPR, nR.NZD, nR.OMR, nR.PAB, nR.PEN, nR.PGK, nR.PHP, nR.PKR, nR.PLN, nR.PYG, nR.QAR, nR.RON, nR.RSD, nR.RUB, nR.RWF, nR.SAR, nR.SBD, nR.SCR, nR.SDG, nR.SEK, nR.SGD, nR.SHP, nR.SLL, nR.SOS, nR.SRD, nR.SSP, nR.STD, nR.SVC, nR.SYP, nR.SZL, nR.THB, nR.TJS, nR.TMT, nR.TND, nR.TOP, nR.TRY, nR.TTD, nR.TWD, nR.TZS, nR.UAH, nR.UGX, nR.USD, nR.USN, nR.USS, nR.UYI, nR.UYU, nR.UZS, nR.VEF, nR.VND, nR.VUV, nR.WST, nR.XAF, nR.XAG, nR.XAU, nR.XBA, nR.XBB, nR.XBC, nR.XBD, nR.XCD, nR.XDR, nR.XFU, nR.XOF, nR.XPD, nR.XPF, nR.XPT, nR.XSU, nR.XTS, nR.XUA, nR.YER, nR.ZAR, nR.ZMW, nR.ZWL;
    var LR = {
      exports: {}
    };
    ! function(dd, Od) {
      var md = "__lodash_hash_undefined__",
        Wd = 9007199254740991,
        Rd = "[object Arguments]",
        Xd = "[object Array]",
        Kd = "[object Boolean]",
        hd = "[object Date]",
        vd = "[object Error]",
        Qd = "[object Function]",
        td = "[object Map]",
        od = "[object Number]",
        Nd = "[object Object]",
        qd = "[object Promise]",
        Hd = "[object RegExp]",
        yd = "[object Set]",
        bd = "[object String]",
        Td = "[object Symbol]",
        pd = "[object WeakMap]",
        Yd = "[object ArrayBuffer]",
        gd = "[object DataView]",
        wd = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Ed = /^\w*$/,
        Jd = /^\./,
        Ud = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        xd = /\\(\\)?/g,
        Bd = /^\[object .+?Constructor\]$/,
        Sd = /^(?:0|[1-9]\d*)$/,
        sd = {};
      sd["[object Float32Array]"] = sd["[object Float64Array]"] = sd["[object Int8Array]"] = sd["[object Int16Array]"] = sd["[object Int32Array]"] = sd["[object Uint8Array]"] = sd["[object Uint8ClampedArray]"] = sd["[object Uint16Array]"] = sd["[object Uint32Array]"] = !0, sd[Rd] = sd[Xd] = sd[Yd] = sd[Kd] = sd[gd] = sd[hd] = sd[vd] = sd[Qd] = sd[td] = sd[od] = sd[Nd] = sd[Hd] = sd[yd] = sd[bd] = sd[pd] = !1;
      var ud = "object" == typeof Fd && Fd && Fd.Object === Object && Fd,
        Vd = "object" == typeof self && self && self.Object === Object && self,
        Ad = ud || Vd || Function("return this")(),
        rd = Od && !Od.nodeType && Od,
        Gd = rd && dd && !dd.nodeType && dd,
        nd = Gd && Gd.exports === rd && ud.process,
        Ld = function() {
          try {
            return nd && nd.binding("util")
          } catch (dd) {}
        }(),
        Pd = Ld && Ld.isTypedArray;

      function zd(dd, Od) {
        for (var md = -1, Wd = dd ? dd.length : 0; ++md < Wd && !1 !== Od(dd[md], md, dd););
        return dd
      }

      function cd(dd, Od) {
        for (var md = -1, Wd = dd ? dd.length : 0; ++md < Wd;)
          if (Od(dd[md], md, dd)) return !0;
        return !1
      }

      function jd(dd) {
        var Od = !1;
        if (null != dd && "function" != typeof dd.toString) try {
          Od = !!(dd + "")
        } catch (md) {}
        return Od
      }

      function Dd(dd) {
        var Od = -1,
          md = Array(dd.size);
        return dd.forEach((function(dd, Wd) {
          md[++Od] = [Wd, dd]
        })), md
      }

      function ed(dd, Od) {
        return function(md) {
          return dd(Od(md))
        }
      }

      function Id(dd) {
        var Od = -1,
          md = Array(dd.size);
        return dd.forEach((function(dd) {
          md[++Od] = dd
        })), md
      }
      var ld = Array.prototype,
        Cd = Function.prototype,
        Zd = Object.prototype,
        kd = Ad["__core-js_shared__"],
        fd = function() {
          var dd = /[^.]+$/.exec(kd && kd.keys && kd.keys.IE_PROTO || "");
          return dd ? "Symbol(src)_1." + dd : ""
        }(),
        Md = Cd.toString,
        dO = Zd.hasOwnProperty,
        OO = Zd.toString,
        mO = RegExp("^" + Md.call(dO).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        WO = Ad.Symbol,
        FO = Ad.Uint8Array,
        RO = ed(Object.getPrototypeOf, Object),
        XO = Object.create,
        KO = Zd.propertyIsEnumerable,
        hO = ld.splice,
        vO = ed(Object.keys, Object),
        QO = DO(Ad, "DataView"),
        tO = DO(Ad, "Map"),
        oO = DO(Ad, "Promise"),
        NO = DO(Ad, "Set"),
        qO = DO(Ad, "WeakMap"),
        HO = DO(Object, "create"),
        yO = MO(QO),
        bO = MO(tO),
        TO = MO(oO),
        pO = MO(NO),
        YO = MO(qO),
        gO = WO ? WO.prototype : void 0,
        wO = gO ? gO.valueOf : void 0,
        aO = gO ? gO.toString : void 0;

      function EO(dd) {
        var Od = -1,
          md = dd ? dd.length : 0;
        for (this.clear(); ++Od < md;) {
          var Wd = dd[Od];
          this.set(Wd[0], Wd[1])
        }
      }

      function JO(dd) {
        var Od = -1,
          md = dd ? dd.length : 0;
        for (this.clear(); ++Od < md;) {
          var Wd = dd[Od];
          this.set(Wd[0], Wd[1])
        }
      }

      function UO(dd) {
        var Od = -1,
          md = dd ? dd.length : 0;
        for (this.clear(); ++Od < md;) {
          var Wd = dd[Od];
          this.set(Wd[0], Wd[1])
        }
      }

      function xO(dd) {
        var Od = -1,
          md = dd ? dd.length : 0;
        for (this.__data__ = new UO; ++Od < md;) this.add(dd[Od])
      }

      function BO(dd) {
        this.__data__ = new JO(dd)
      }

      function SO(dd, Od) {
        var md = Wm(dd) || mm(dd) ? function(dd, Od) {
            for (var md = -1, Wd = Array(dd); ++md < dd;) Wd[md] = Od(md);
            return Wd
          }(dd.length, String) : [],
          Wd = md.length,
          Fd = !!Wd;
        for (var Rd in dd) !Od && !dO.call(dd, Rd) || Fd && ("length" == Rd || IO(Rd, Wd)) || md.push(Rd);
        return md
      }

      function sO(dd, Od) {
        for (var md = dd.length; md--;)
          if (Om(dd[md][0], Od)) return md;
        return -1
      }
      EO.prototype.clear = function() {
        this.__data__ = HO ? HO(null) : {}
      }, EO.prototype.delete = function(dd) {
        return this.has(dd) && delete this.__data__[dd]
      }, EO.prototype.get = function(dd) {
        var Od = this.__data__;
        if (HO) {
          var Wd = Od[dd];
          return Wd === md ? void 0 : Wd
        }
        return dO.call(Od, dd) ? Od[dd] : void 0
      }, EO.prototype.has = function(dd) {
        var Od = this.__data__;
        return HO ? void 0 !== Od[dd] : dO.call(Od, dd)
      }, EO.prototype.set = function(dd, Od) {
        return this.__data__[dd] = HO && void 0 === Od ? md : Od, this
      }, JO.prototype.clear = function() {
        this.__data__ = []
      }, JO.prototype.delete = function(dd) {
        var Od = this.__data__,
          md = sO(Od, dd);
        return !(md < 0) && (md == Od.length - 1 ? Od.pop() : hO.call(Od, md, 1), !0)
      }, JO.prototype.get = function(dd) {
        var Od = this.__data__,
          md = sO(Od, dd);
        return md < 0 ? void 0 : Od[md][1]
      }, JO.prototype.has = function(dd) {
        return sO(this.__data__, dd) > -1
      }, JO.prototype.set = function(dd, Od) {
        var md = this.__data__,
          Wd = sO(md, dd);
        return Wd < 0 ? md.push([dd, Od]) : md[Wd][1] = Od, this
      }, UO.prototype.clear = function() {
        this.__data__ = {
          hash: new EO,
          map: new(tO || JO),
          string: new EO
        }
      }, UO.prototype.delete = function(dd) {
        return jO(this, dd).delete(dd)
      }, UO.prototype.get = function(dd) {
        return jO(this, dd).get(dd)
      }, UO.prototype.has = function(dd) {
        return jO(this, dd).has(dd)
      }, UO.prototype.set = function(dd, Od) {
        return jO(this, dd).set(dd, Od), this
      }, xO.prototype.add = xO.prototype.push = function(dd) {
        return this.__data__.set(dd, md), this
      }, xO.prototype.has = function(dd) {
        return this.__data__.has(dd)
      }, BO.prototype.clear = function() {
        this.__data__ = new JO
      }, BO.prototype.delete = function(dd) {
        return this.__data__.delete(dd)
      }, BO.prototype.get = function(dd) {
        return this.__data__.get(dd)
      }, BO.prototype.has = function(dd) {
        return this.__data__.has(dd)
      }, BO.prototype.set = function(dd, Od) {
        var md = this.__data__;
        if (md instanceof JO) {
          var Wd = md.__data__;
          if (!tO || Wd.length < 199) return Wd.push([dd, Od]), this;
          md = this.__data__ = new UO(Wd)
        }
        return md.set(dd, Od), this
      };
      var uO, VO = function(dd, Od, md) {
        for (var Wd = -1, Fd = Object(dd), Rd = md(dd), Xd = Rd.length; Xd--;) {
          var Kd = Rd[uO ? Xd : ++Wd];
          if (!1 === Od(Fd[Kd], Kd, Fd)) break
        }
        return dd
      };

      function iO(dd, Od) {
        return dd && VO(dd, Od, Nm)
      }

      function AO(dd, Od) {
        for (var md = 0, Wd = (Od = lO(Od, dd) ? [Od] : zO(Od)).length; null != dd && md < Wd;) dd = dd[fO(Od[md++])];
        return md && md == Wd ? dd : void 0
      }

      function rO(dd, Od) {
        return null != dd && Od in Object(dd)
      }

      function GO(dd, Od, md, Wd, Fd) {
        return dd === Od || (null == dd || null == Od || !Km(dd) && !hm(Od) ? dd !== dd && Od !== Od : function(dd, Od, md, Wd, Fd, Qd) {
          var qd = Wm(dd),
            pd = Wm(Od),
            wd = Xd,
            Ed = Xd;
          qd || (wd = (wd = eO(dd)) == Rd ? Nd : wd);
          pd || (Ed = (Ed = eO(Od)) == Rd ? Nd : Ed);
          var Jd = wd == Nd && !jd(dd),
            Ud = Ed == Nd && !jd(Od),
            xd = wd == Ed;
          if (xd && !Jd) return Qd || (Qd = new BO), qd || om(dd) ? cO(dd, Od, md, Wd, Fd, Qd) : function(dd, Od, md, Wd, Fd, Rd, Xd) {
            switch (md) {
              case gd:
                if (dd.byteLength != Od.byteLength || dd.byteOffset != Od.byteOffset) return !1;
                dd = dd.buffer, Od = Od.buffer;
              case Yd:
                return !(dd.byteLength != Od.byteLength || !Wd(new FO(dd), new FO(Od)));
              case Kd:
              case hd:
              case od:
                return Om(+dd, +Od);
              case vd:
                return dd.name == Od.name && dd.message == Od.message;
              case Hd:
              case bd:
                return dd == Od + "";
              case td:
                var Qd = Dd;
              case yd:
                var Nd = 2 & Rd;
                if (Qd || (Qd = Id), dd.size != Od.size && !Nd) return !1;
                var qd = Xd.get(dd);
                if (qd) return qd == Od;
                Rd |= 1, Xd.set(dd, Od);
                var pd = cO(Qd(dd), Qd(Od), Wd, Fd, Rd, Xd);
                return Xd.delete(dd), pd;
              case Td:
                if (wO) return wO.call(dd) == wO.call(Od)
            }
            return !1
          }(dd, Od, wd, md, Wd, Fd, Qd);
          if (!(2 & Fd)) {
            var Bd = Jd && dO.call(dd, "__wrapped__"),
              Sd = Ud && dO.call(Od, "__wrapped__");
            if (Bd || Sd) {
              var sd = Bd ? dd.value() : dd,
                ud = Sd ? Od.value() : Od;
              return Qd || (Qd = new BO), md(sd, ud, Wd, Fd, Qd)
            }
          }
          if (!xd) return !1;
          return Qd || (Qd = new BO),
            function(dd, Od, md, Wd, Fd, Rd) {
              var Xd = 2 & Fd,
                Kd = Nm(dd),
                hd = Kd.length,
                vd = Nm(Od),
                Qd = vd.length;
              if (hd != Qd && !Xd) return !1;
              var td = hd;
              for (; td--;) {
                var od = Kd[td];
                if (!(Xd ? od in Od : dO.call(Od, od))) return !1
              }
              var Nd = Rd.get(dd);
              if (Nd && Rd.get(Od)) return Nd == Od;
              var qd = !0;
              Rd.set(dd, Od), Rd.set(Od, dd);
              var Hd = Xd;
              for (; ++td < hd;) {
                var yd = dd[od = Kd[td]],
                  bd = Od[od];
                if (Wd) var Td = Xd ? Wd(bd, yd, od, Od, dd, Rd) : Wd(yd, bd, od, dd, Od, Rd);
                if (!(void 0 === Td ? yd === bd || md(yd, bd, Wd, Fd, Rd) : Td)) {
                  qd = !1;
                  break
                }
                Hd || (Hd = "constructor" == od)
              }
              if (qd && !Hd) {
                var pd = dd.constructor,
                  Yd = Od.constructor;
                pd == Yd || !("constructor" in dd) || !("constructor" in Od) || "function" == typeof pd && pd instanceof pd && "function" == typeof Yd && Yd instanceof Yd || (qd = !1)
              }
              return Rd.delete(dd), Rd.delete(Od), qd
            }(dd, Od, md, Wd, Fd, Qd)
        }(dd, Od, GO, md, Wd, Fd))
      }

      function nO(dd) {
        return !(!Km(dd) || (Od = dd, fd && fd in Od)) && (Rm(dd) || jd(dd) ? mO : Bd).test(MO(dd));
        var Od
      }

      function LO(dd) {
        return "function" == typeof dd ? dd : null == dd ? qm : "object" == typeof dd ? Wm(dd) ? function(dd, Od) {
          if (lO(dd) && CO(Od)) return ZO(fO(dd), Od);
          return function(md) {
            var Wd = function(dd, Od, md) {
              var Wd = null == dd ? void 0 : AO(dd, Od);
              return void 0 === Wd ? md : Wd
            }(md, dd);
            return void 0 === Wd && Wd === Od ? function(dd, Od) {
              return null != dd && function(dd, Od, md) {
                Od = lO(Od, dd) ? [Od] : zO(Od);
                var Wd, Fd = -1,
                  Rd = Od.length;
                for (; ++Fd < Rd;) {
                  var Xd = fO(Od[Fd]);
                  if (!(Wd = null != dd && md(dd, Xd))) break;
                  dd = dd[Xd]
                }
                if (Wd) return Wd;
                Rd = dd ? dd.length : 0;
                return !!Rd && Xm(Rd) && IO(Xd, Rd) && (Wm(dd) || mm(dd))
              }(dd, Od, rO)
            }(md, dd) : GO(Od, Wd, void 0, 3)
          }
        }(dd[0], dd[1]) : function(dd) {
          var Od = function(dd) {
            var Od = Nm(dd),
              md = Od.length;
            for (; md--;) {
              var Wd = Od[md],
                Fd = dd[Wd];
              Od[md] = [Wd, Fd, CO(Fd)]
            }
            return Od
          }(dd);
          if (1 == Od.length && Od[0][2]) return ZO(Od[0][0], Od[0][1]);
          return function(md) {
            return md === dd || function(dd, Od, md, Wd) {
              var Fd = md.length,
                Rd = Fd,
                Xd = !Wd;
              if (null == dd) return !Rd;
              for (dd = Object(dd); Fd--;) {
                var Kd = md[Fd];
                if (Xd && Kd[2] ? Kd[1] !== dd[Kd[0]] : !(Kd[0] in dd)) return !1
              }
              for (; ++Fd < Rd;) {
                var hd = (Kd = md[Fd])[0],
                  vd = dd[hd],
                  Qd = Kd[1];
                if (Xd && Kd[2]) {
                  if (void 0 === vd && !(hd in dd)) return !1
                } else {
                  var td = new BO;
                  if (Wd) var od = Wd(vd, Qd, hd, dd, Od, td);
                  if (!(void 0 === od ? GO(Qd, vd, Wd, 3, td) : od)) return !1
                }
              }
              return !0
            }(md, dd, Od)
          }
        }(dd) : function(dd) {
          return lO(dd) ? (Od = fO(dd), function(dd) {
            return null == dd ? void 0 : dd[Od]
          }) : function(dd) {
            return function(Od) {
              return AO(Od, dd)
            }
          }(dd);
          var Od
        }(dd)
      }

      function PO(dd) {
        if (! function(dd) {
            var Od = dd && dd.constructor,
              md = "function" == typeof Od && Od.prototype || Zd;
            return dd === md
          }(dd)) return vO(dd);
        var Od = [];
        for (var md in Object(dd)) dO.call(dd, md) && "constructor" != md && Od.push(md);
        return Od
      }

      function zO(dd) {
        return Wm(dd) ? dd : kO(dd)
      }

      function cO(dd, Od, md, Wd, Fd, Rd) {
        var Xd = 2 & Fd,
          Kd = dd.length,
          hd = Od.length;
        if (Kd != hd && !(Xd && hd > Kd)) return !1;
        var vd = Rd.get(dd);
        if (vd && Rd.get(Od)) return vd == Od;
        var Qd = -1,
          td = !0,
          od = 1 & Fd ? new xO : void 0;
        for (Rd.set(dd, Od), Rd.set(Od, dd); ++Qd < Kd;) {
          var Nd = dd[Qd],
            qd = Od[Qd];
          if (Wd) var Hd = Xd ? Wd(qd, Nd, Qd, Od, dd, Rd) : Wd(Nd, qd, Qd, dd, Od, Rd);
          if (void 0 !== Hd) {
            if (Hd) continue;
            td = !1;
            break
          }
          if (od) {
            if (!cd(Od, (function(dd, Od) {
                if (!od.has(Od) && (Nd === dd || md(Nd, dd, Wd, Fd, Rd))) return od.add(Od)
              }))) {
              td = !1;
              break
            }
          } else if (Nd !== qd && !md(Nd, qd, Wd, Fd, Rd)) {
            td = !1;
            break
          }
        }
        return Rd.delete(dd), Rd.delete(Od), td
      }

      function jO(dd, Od) {
        var md = dd.__data__;
        return function(dd) {
          var Od = typeof dd;
          return "string" == Od || "number" == Od || "symbol" == Od || "boolean" == Od ? "__proto__" !== dd : null === dd
        }(Od) ? md["string" == typeof Od ? "string" : "hash"] : md.map
      }

      function DO(dd, Od) {
        var md = function(dd, Od) {
          return null == dd ? void 0 : dd[Od]
        }(dd, Od);
        return nO(md) ? md : void 0
      }
      var eO = function(dd) {
        return OO.call(dd)
      };

      function IO(dd, Od) {
        return !!(Od = null == Od ? Wd : Od) && ("number" == typeof dd || Sd.test(dd)) && dd > -1 && dd % 1 == 0 && dd < Od
      }

      function lO(dd, Od) {
        if (Wm(dd)) return !1;
        var md = typeof dd;
        return !("number" != md && "symbol" != md && "boolean" != md && null != dd && !Qm(dd)) || (Ed.test(dd) || !wd.test(dd) || null != Od && dd in Object(Od))
      }

      function CO(dd) {
        return dd === dd && !Km(dd)
      }

      function ZO(dd, Od) {
        return function(md) {
          return null != md && (md[dd] === Od && (void 0 !== Od || dd in Object(md)))
        }
      }(QO && eO(new QO(new ArrayBuffer(1))) != gd || tO && eO(new tO) != td || oO && eO(oO.resolve()) != qd || NO && eO(new NO) != yd || qO && eO(new qO) != pd) && (eO = function(dd) {
        var Od = OO.call(dd),
          md = Od == Nd ? dd.constructor : void 0,
          Wd = md ? MO(md) : void 0;
        if (Wd) switch (Wd) {
          case yO:
            return gd;
          case bO:
            return td;
          case TO:
            return qd;
          case pO:
            return yd;
          case YO:
            return pd
        }
        return Od
      });
      var kO = dm((function(dd) {
        var Od;
        dd = null == (Od = dd) ? "" : function(dd) {
          if ("string" == typeof dd) return dd;
          if (Qm(dd)) return aO ? aO.call(dd) : "";
          var Od = dd + "";
          return "0" == Od && 1 / dd == -1 / 0 ? "-0" : Od
        }(Od);
        var md = [];
        return Jd.test(dd) && md.push(""), dd.replace(Ud, (function(dd, Od, Wd, Fd) {
          md.push(Wd ? Fd.replace(xd, "$1") : Od || dd)
        })), md
      }));

      function fO(dd) {
        if ("string" == typeof dd || Qm(dd)) return dd;
        var Od = dd + "";
        return "0" == Od && 1 / dd == -1 / 0 ? "-0" : Od
      }

      function MO(dd) {
        if (null != dd) {
          try {
            return Md.call(dd)
          } catch (Od) {}
          try {
            return dd + ""
          } catch (Od) {}
        }
        return ""
      }

      function dm(dd, Od) {
        if ("function" != typeof dd || Od && "function" != typeof Od) throw new TypeError("Expected a function");
        var md = function() {
          var Wd = arguments,
            Fd = Od ? Od.apply(this, Wd) : Wd[0],
            Rd = md.cache;
          if (Rd.has(Fd)) return Rd.get(Fd);
          var Xd = dd.apply(this, Wd);
          return md.cache = Rd.set(Fd, Xd), Xd
        };
        return md.cache = new(dm.Cache || UO), md
      }

      function Om(dd, Od) {
        return dd === Od || dd !== dd && Od !== Od
      }

      function mm(dd) {
        return function(dd) {
          return hm(dd) && Fm(dd)
        }(dd) && dO.call(dd, "callee") && (!KO.call(dd, "callee") || OO.call(dd) == Rd)
      }
      dm.Cache = UO;
      var Wm = Array.isArray;

      function Fm(dd) {
        return null != dd && Xm(dd.length) && !Rm(dd)
      }

      function Rm(dd) {
        var Od = Km(dd) ? OO.call(dd) : "";
        return Od == Qd || "[object GeneratorFunction]" == Od
      }

      function Xm(dd) {
        return "number" == typeof dd && dd > -1 && dd % 1 == 0 && dd <= Wd
      }

      function Km(dd) {
        var Od = typeof dd;
        return !!dd && ("object" == Od || "function" == Od)
      }

      function hm(dd) {
        return !!dd && "object" == typeof dd
      }

      function Qm(dd) {
        return "symbol" == typeof dd || hm(dd) && OO.call(dd) == Td
      }
      var tm, om = Pd ? (tm = Pd, function(dd) {
        return tm(dd)
      }) : function(dd) {
        return hm(dd) && Xm(dd.length) && !!sd[OO.call(dd)]
      };

      function Nm(dd) {
        return Fm(dd) ? SO(dd) : PO(dd)
      }

      function qm(dd) {
        return dd
      }
      dd.exports = function(dd, Od, md) {
        var Wd, Fd = Wm(dd) || om(dd);
        if (Od = LO(Od), null == md)
          if (Fd || Km(dd)) {
            var Rd = dd.constructor;
            md = Fd ? Wm(dd) ? new Rd : [] : Rm(Rd) ? Km(Wd = RO(dd)) ? XO(Wd) : {} : {}
          } else md = {};
        return (Fd ? zd : iO)(dd, (function(dd, Wd, Fd) {
          return Od(md, dd, Wd, Fd)
        })), md
      }
    }(LR, LR.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      i: PR
    } = Wd
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);