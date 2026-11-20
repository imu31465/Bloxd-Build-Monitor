export const id = 142;
export const ids = [142];
export const modules = {
  7776: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => OG,
      c: () => eh
    });
    var Bb = {};
    hb.r(Bb), hb.d(Bb, {
      b: () => BB,
      f: () => UB,
      d: () => GB,
      i: () => kh,
      j: () => fh,
      k: () => zB,
      m: () => Qh,
      p: () => vB,
      r: () => dB,
      v: () => iB,
      w: () => Th,
      x: () => jB,
      z: () => xB,
      D: () => gB,
      F: () => ch,
      E: () => uB,
      G: () => DB,
      J: () => nB
    });
    var Ob = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function Gb(bb) {
      return bb && bb.__esModule && Object.prototype.hasOwnProperty.call(bb, "default") ? bb.default : bb
    }
    var Ub = {
      exports: {}
    };
    ! function(bb) {
      var ub = Object.prototype.hasOwnProperty,
        hb = "~";

      function Bb() {}

      function Ob(bb, ub, hb) {
        this.JZ = bb, this.context = ub, this.once = hb || !1
      }

      function Gb(bb, ub, Bb, Gb, Ub) {
        if ("function" !== typeof Bb) throw new TypeError("The listener must be a function");
        var Lb = new Ob(Bb, Gb || bb, Ub),
          Yb = hb ? hb + ub : ub;
        return bb._events[Yb] ? bb._events[Yb].JZ ? bb._events[Yb] = [bb._events[Yb], Lb] : bb._events[Yb].push(Lb) : (bb._events[Yb] = Lb, bb._eventsCount++), bb
      }

      function Ub(bb, ub) {
        0 === --bb._eventsCount ? bb._events = new Bb : delete bb._events[ub]
      }

      function Lb() {
        this._events = new Bb, this._eventsCount = 0
      }
      Object.create && (Bb.prototype = Object.create(null), (new Bb).__proto__ || (hb = !1)), Lb.prototype.eventNames = function() {
        var bb, Bb, Ob = [];
        if (0 === this._eventsCount) return Ob;
        for (Bb in bb = this._events) ub.call(bb, Bb) && Ob.push(hb ? Bb.slice(1) : Bb);
        return Object.getOwnPropertySymbols ? Ob.concat(Object.getOwnPropertySymbols(bb)) : Ob
      }, Lb.prototype.listeners = function(bb) {
        var ub = hb ? hb + bb : bb,
          Bb = this._events[ub];
        if (!Bb) return [];
        if (Bb.JZ) return [Bb.JZ];
        for (var Ob = 0, Gb = Bb.length, Ub = new Array(Gb); Ob < Gb; Ob++) Ub[Ob] = Bb[Ob].JZ;
        return Ub
      }, Lb.prototype.listenerCount = function(bb) {
        var ub = hb ? hb + bb : bb,
          Bb = this._events[ub];
        return Bb ? Bb.JZ ? 1 : Bb.length : 0
      }, Lb.prototype.emit = function(bb, ub, Bb, Ob, Gb, Ub) {
        var Lb = hb ? hb + bb : bb;
        if (!this._events[Lb]) return !1;
        var Yb, Sb, ab = this._events[Lb],
          Hb = arguments.length;
        if (ab.JZ) {
          switch (ab.once && this.removeListener(bb, ab.JZ, void 0, !0), Hb) {
            case 1:
              return ab.JZ.call(ab.context), !0;
            case 2:
              return ab.JZ.call(ab.context, ub), !0;
            case 3:
              return ab.JZ.call(ab.context, ub, Bb), !0;
            case 4:
              return ab.JZ.call(ab.context, ub, Bb, Ob), !0;
            case 5:
              return ab.JZ.call(ab.context, ub, Bb, Ob, Gb), !0;
            case 6:
              return ab.JZ.call(ab.context, ub, Bb, Ob, Gb, Ub), !0
          }
          for (Sb = 1, Yb = new Array(Hb - 1); Sb < Hb; Sb++) Yb[Sb - 1] = arguments[Sb];
          ab.JZ.apply(ab.context, Yb)
        } else {
          var wb, Zb = ab.length;
          for (Sb = 0; Sb < Zb; Sb++) switch (ab[Sb].once && this.removeListener(bb, ab[Sb].JZ, void 0, !0), Hb) {
            case 1:
              ab[Sb].JZ.call(ab[Sb].context);
              break;
            case 2:
              ab[Sb].JZ.call(ab[Sb].context, ub);
              break;
            case 3:
              ab[Sb].JZ.call(ab[Sb].context, ub, Bb);
              break;
            case 4:
              ab[Sb].JZ.call(ab[Sb].context, ub, Bb, Ob);
              break;
            default:
              if (!Yb)
                for (wb = 1, Yb = new Array(Hb - 1); wb < Hb; wb++) Yb[wb - 1] = arguments[wb];
              ab[Sb].JZ.apply(ab[Sb].context, Yb)
          }
        }
        return !0
      }, Lb.prototype.on = function(bb, ub, hb) {
        return Gb(this, bb, ub, hb, !1)
      }, Lb.prototype.once = function(bb, ub, hb) {
        return Gb(this, bb, ub, hb, !0)
      }, Lb.prototype.removeListener = function(bb, ub, Bb, Ob) {
        var Gb = hb ? hb + bb : bb;
        if (!this._events[Gb]) return this;
        if (!ub) return Ub(this, Gb), this;
        var Lb = this._events[Gb];
        if (Lb.JZ) Lb.JZ !== ub || Ob && !Lb.once || Bb && Lb.context !== Bb || Ub(this, Gb);
        else {
          for (var Yb = 0, Sb = [], ab = Lb.length; Yb < ab; Yb++)(Lb[Yb].JZ !== ub || Ob && !Lb[Yb].once || Bb && Lb[Yb].context !== Bb) && Sb.push(Lb[Yb]);
          Sb.length ? this._events[Gb] = 1 === Sb.length ? Sb[0] : Sb : Ub(this, Gb)
        }
        return this
      }, Lb.prototype.Gl = function(bb) {
        var ub;
        return bb ? (ub = hb ? hb + bb : bb, this._events[ub] && Ub(this, ub)) : (this._events = new Bb, this._eventsCount = 0), this
      }, Lb.prototype.off = Lb.prototype.removeListener, Lb.prototype.addListener = Lb.prototype.on, Lb.prefixed = hb, Lb.EventEmitter = Lb, bb.exports = Lb
    }(Ub);
    var Lb, Yb, Sb = Gb(Ub.exports);
    ! function(bb) {
      bb.assertEqual = bb => bb, bb.assertIs = function(bb) {}, bb.assertNever = function(bb) {
        throw new Error
      }, bb.arrayToEnum = bb => {
        const ub = {};
        for (const hb of bb) ub[hb] = hb;
        return ub
      }, bb.getValidEnumValues = ub => {
        const hb = bb.objectKeys(ub).filter((bb => "number" !== typeof ub[ub[bb]])),
          Bb = {};
        for (const bb of hb) Bb[bb] = ub[bb];
        return bb.objectValues(Bb)
      }, bb.objectValues = ub => bb.objectKeys(ub).map((function(bb) {
        return ub[bb]
      })), bb.objectKeys = "function" === typeof Object.keys ? bb => Object.keys(bb) : bb => {
        const ub = [];
        for (const hb in bb) Object.prototype.hasOwnProperty.call(bb, hb) && ub.push(hb);
        return ub
      }, bb.find = (bb, ub) => {
        for (const hb of bb)
          if (ub(hb)) return hb
      }, bb.isInteger = "function" === typeof Number.isInteger ? bb => Number.isInteger(bb) : bb => "number" === typeof bb && isFinite(bb) && Math.floor(bb) === bb, bb.joinValues = function(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return bb.map((bb => "string" === typeof bb ? `'${bb}'` : bb)).join(ub)
      }, bb.jsonStringifyReplacer = (bb, ub) => "bigint" === typeof ub ? ub.toString() : ub
    }(Lb || (Lb = {})),
    function(bb) {
      bb.mergeShapes = (bb, ub) => ({
        ...bb,
        ...ub
      })
    }(Yb || (Yb = {}));
    const ab = Lb.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      Hb = bb => {
        switch (typeof bb) {
          case "undefined":
            return ab.undefined;
          case "string":
            return ab.string;
          case "number":
            return isNaN(bb) ? ab.nan : ab.number;
          case "boolean":
            return ab.boolean;
          case "function":
            return ab.function;
          case "bigint":
            return ab.bigint;
          case "symbol":
            return ab.symbol;
          case "object":
            return Array.isArray(bb) ? ab.array : null === bb ? ab.null : bb.then && "function" === typeof bb.then && bb.catch && "function" === typeof bb.catch ? ab.promise : "undefined" !== typeof Map && bb instanceof Map ? ab.map : "undefined" !== typeof Set && bb instanceof Set ? ab.set : "undefined" !== typeof Date && bb instanceof Date ? ab.date : ab.object;
          default:
            return ab.unknown
        }
      },
      wb = Lb.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class Zb extends Error {
      constructor(bb) {
        var ub;
        super(), ub = this, this.issues = [], this.addIssue = bb => {
          this.issues = [...this.issues, bb]
        }, this.addIssues = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          ub.issues = [...ub.issues, ...bb]
        };
        const hb = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, hb) : this.__proto__ = hb, this.name = "ZodError", this.issues = bb
      }
      get errors() {
        return this.issues
      }
      format(bb) {
        const ub = bb || function(bb) {
            return bb.message
          },
          hb = {
            _errors: []
          },
          Bb = bb => {
            for (const Ob of bb.issues)
              if ("invalid_union" === Ob.code) Ob.unionErrors.map(Bb);
              else if ("invalid_return_type" === Ob.code) Bb(Ob.returnTypeError);
            else if ("invalid_arguments" === Ob.code) Bb(Ob.argumentsError);
            else if (0 === Ob.path.length) hb._errors.push(ub(Ob));
            else {
              let bb = hb,
                Bb = 0;
              for (; Bb < Ob.path.length;) {
                const hb = Ob.path[Bb];
                Bb === Ob.path.length - 1 ? (bb[hb] = bb[hb] || {
                  _errors: []
                }, bb[hb]._errors.push(ub(Ob))) : bb[hb] = bb[hb] || {
                  _errors: []
                }, bb = bb[hb], Bb++
              }
            }
          };
        return Bb(this), hb
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, Lb.jsonStringifyReplacer, 2)
      }
      get MZ() {
        return 0 === this.issues.length
      }
      flatten() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bb => bb.message;
        const ub = {},
          hb = [];
        for (const Bb of this.issues) Bb.path.length > 0 ? (ub[Bb.path[0]] = ub[Bb.path[0]] || [], ub[Bb.path[0]].push(bb(Bb))) : hb.push(bb(Bb));
        return {
          formErrors: hb,
          fieldErrors: ub
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    Zb.create = bb => new Zb(bb);
    const Xb = (bb, ub) => {
      let hb;
      switch (bb.code) {
        case wb.invalid_type:
          hb = bb.received === ab.undefined ? "Required" : `Expected ${bb.expected}, received ${bb.received}`;
          break;
        case wb.invalid_literal:
          hb = `Invalid literal value, expected ${JSON.stringify(bb.expected,Lb.jsonStringifyReplacer)}`;
          break;
        case wb.unrecognized_keys:
          hb = `Unrecognized key(s) in object: ${Lb.joinValues(bb.keys,", ")}`;
          break;
        case wb.invalid_union:
          hb = "Invalid input";
          break;
        case wb.invalid_union_discriminator:
          hb = `Invalid discriminator value. Expected ${Lb.joinValues(bb.options)}`;
          break;
        case wb.invalid_enum_value:
          hb = `Invalid enum value. Expected ${Lb.joinValues(bb.options)}, received '${bb.received}'`;
          break;
        case wb.invalid_arguments:
          hb = "Invalid function arguments";
          break;
        case wb.invalid_return_type:
          hb = "Invalid function return type";
          break;
        case wb.invalid_date:
          hb = "Invalid date";
          break;
        case wb.invalid_string:
          "object" === typeof bb.validation ? "includes" in bb.validation ? (hb = `Invalid input: must include "${bb.validation.includes}"`, "number" === typeof bb.validation.position && (hb = `${hb} at one or more positions greater than or equal to ${bb.validation.position}`)) : "startsWith" in bb.validation ? hb = `Invalid input: must start with "${bb.validation.startsWith}"` : "endsWith" in bb.validation ? hb = `Invalid input: must end with "${bb.validation.endsWith}"` : Lb.assertNever(bb.validation) : hb = "regex" !== bb.validation ? `Invalid ${bb.validation}` : "Invalid";
          break;
        case wb.too_small:
          hb = "array" === bb.type ? `Array must contain ${bb.exact?"exactly":bb.inclusive?"at least":"more than"} ${bb.minimum} element(s)` : "string" === bb.type ? `String must contain ${bb.exact?"exactly":bb.inclusive?"at least":"over"} ${bb.minimum} character(s)` : "number" === bb.type ? `Number must be ${bb.exact?"exactly equal to ":bb.inclusive?"greater than or equal to ":"greater than "}${bb.minimum}` : "date" === bb.type ? `Date must be ${bb.exact?"exactly equal to ":bb.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(bb.minimum))}` : "Invalid input";
          break;
        case wb.too_big:
          hb = "array" === bb.type ? `Array must contain ${bb.exact?"exactly":bb.inclusive?"at most":"less than"} ${bb.maximum} element(s)` : "string" === bb.type ? `String must contain ${bb.exact?"exactly":bb.inclusive?"at most":"under"} ${bb.maximum} character(s)` : "number" === bb.type ? `Number must be ${bb.exact?"exactly":bb.inclusive?"less than or equal to":"less than"} ${bb.maximum}` : "bigint" === bb.type ? `BigInt must be ${bb.exact?"exactly":bb.inclusive?"less than or equal to":"less than"} ${bb.maximum}` : "date" === bb.type ? `Date must be ${bb.exact?"exactly":bb.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(bb.maximum))}` : "Invalid input";
          break;
        case wb.custom:
          hb = "Invalid input";
          break;
        case wb.invalid_intersection_types:
          hb = "Intersection results could not be merged";
          break;
        case wb.not_multiple_of:
          hb = `Number must be a multiple of ${bb.multipleOf}`;
          break;
        case wb.not_finite:
          hb = "Number must be finite";
          break;
        default:
          hb = ub.defaultError, Lb.assertNever(bb)
      }
      return {
        message: hb
      }
    };
    let pb = Xb;

    function ob() {
      return pb
    }
    const Ab = bb => {
      const {
        data: ub,
        path: hb,
        errorMaps: Bb,
        issueData: Ob
      } = bb, Gb = [...hb, ...Ob.path || []], Ub = {
        ...Ob,
        path: Gb
      };
      let Lb = "";
      const Yb = Bb.filter((bb => !!bb)).slice().reverse();
      for (const Sb of Yb) Lb = Sb(Ub, {
        data: ub,
        defaultError: Lb
      }).message;
      return {
        ...Ob,
        path: Gb,
        message: Ob.message || Lb
      }
    };

    function lb(bb, ub) {
      const hb = Ab({
        issueData: ub,
        data: bb.data,
        path: bb.path,
        errorMaps: [bb.common.contextualErrorMap, bb.schemaErrorMap, ob(), Xb].filter((bb => !!bb))
      });
      bb.common.issues.push(hb)
    }
    class Kb {
      constructor() {
        this.value = "valid"
      }
      ZX() {
        "valid" === this.value && (this.value = "ZX")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(bb, ub) {
        const hb = [];
        for (const Bb of ub) {
          if ("aborted" === Bb.status) return Wb;
          "ZX" === Bb.status && bb.ZX(), hb.push(Bb.value)
        }
        return {
          status: bb.value,
          value: hb
        }
      }
      static async mergeObjectAsync(bb, ub) {
        const hb = [];
        for (const Bb of ub) hb.push({
          key: await Bb.key,
          value: await Bb.value
        });
        return Kb.mergeObjectSync(bb, hb)
      }
      static mergeObjectSync(bb, ub) {
        const hb = {};
        for (const Bb of ub) {
          const {
            key: ub,
            value: Ob
          } = Bb;
          if ("aborted" === ub.status) return Wb;
          if ("aborted" === Ob.status) return Wb;
          "ZX" === ub.status && bb.ZX(), "ZX" === Ob.status && bb.ZX(), "__proto__" === ub.value || "undefined" === typeof Ob.value && !Bb.alwaysSet || (hb[ub.value] = Ob.value)
        }
        return {
          status: bb.value,
          value: hb
        }
      }
    }
    const Wb = Object.freeze({
        status: "aborted"
      }),
      Cb = bb => ({
        status: "ZX",
        value: bb
      }),
      db = bb => ({
        status: "valid",
        value: bb
      }),
      rb = bb => "aborted" === bb.status,
      jb = bb => "ZX" === bb.status,
      nb = bb => "valid" === bb.status,
      Db = bb => "undefined" !== typeof Promise && bb instanceof Promise;
    var xb;
    ! function(bb) {
      bb.errToObj = bb => "string" === typeof bb ? {
        message: bb
      } : bb || {}, bb.toString = bb => "string" === typeof bb ? bb : null === bb || void 0 === bb ? void 0 : bb.message
    }(xb || (xb = {}));
    class zb {
      constructor(bb, ub, hb, Bb) {
        this._cachedPath = [], this.parent = bb, this.data = ub, this._path = hb, this._key = Bb
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const gb = (bb, ub) => {
      if (nb(ub)) return {
        success: !0,
        data: ub.value
      };
      if (!bb.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const ub = new Zb(bb.common.issues);
          return this._error = ub, this._error
        }
      }
    };

    function ib(bb) {
      if (!bb) return {};
      const {
        errorMap: ub,
        invalid_type_error: hb,
        required_error: Bb,
        description: Ob
      } = bb;
      if (ub && (hb || Bb)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (ub) return {
        errorMap: ub,
        description: Ob
      };
      return {
        errorMap: (bb, ub) => "invalid_type" !== bb.code ? {
          message: ub.defaultError
        } : "undefined" === typeof ub.data ? {
          message: null !== Bb && void 0 !== Bb ? Bb : ub.defaultError
        } : {
          message: null !== hb && void 0 !== hb ? hb : ub.defaultError
        },
        description: Ob
      }
    }
    class vb {
      constructor(bb) {
        this.spa = this.safeParseAsync, this._def = bb, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(bb) {
        return Hb(bb.data)
      }
      _getOrReturnCtx(bb, ub) {
        return ub || {
          common: bb.parent.common,
          data: bb.data,
          parsedType: Hb(bb.data),
          schemaErrorMap: this._def.errorMap,
          path: bb.path,
          parent: bb.parent
        }
      }
      _processInputParams(bb) {
        return {
          status: new Kb,
          ctx: {
            common: bb.parent.common,
            data: bb.data,
            parsedType: Hb(bb.data),
            schemaErrorMap: this._def.errorMap,
            path: bb.path,
            parent: bb.parent
          }
        }
      }
      _parseSync(bb) {
        const ub = this._parse(bb);
        if (Db(ub)) throw new Error("Synchronous parse encountered promise.");
        return ub
      }
      _parseAsync(bb) {
        const ub = this._parse(bb);
        return Promise.resolve(ub)
      }
      parse(bb, ub) {
        const hb = this.safeParse(bb, ub);
        if (hb.success) return hb.data;
        throw hb.error
      }
      safeParse(bb, ub) {
        var hb;
        const Bb = {
            common: {
              issues: [],
              async: null !== (hb = null === ub || void 0 === ub ? void 0 : ub.async) && void 0 !== hb && hb,
              contextualErrorMap: null === ub || void 0 === ub ? void 0 : ub.errorMap
            },
            path: (null === ub || void 0 === ub ? void 0 : ub.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: bb,
            parsedType: Hb(bb)
          },
          Ob = this._parseSync({
            data: bb,
            path: Bb.path,
            parent: Bb
          });
        return gb(Bb, Ob)
      }
      async parseAsync(bb, ub) {
        const hb = await this.safeParseAsync(bb, ub);
        if (hb.success) return hb.data;
        throw hb.error
      }
      async safeParseAsync(bb, ub) {
        const hb = {
            common: {
              issues: [],
              contextualErrorMap: null === ub || void 0 === ub ? void 0 : ub.errorMap,
              async: !0
            },
            path: (null === ub || void 0 === ub ? void 0 : ub.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: bb,
            parsedType: Hb(bb)
          },
          Bb = this._parse({
            data: bb,
            path: hb.path,
            parent: hb
          }),
          Ob = await (Db(Bb) ? Bb : Promise.resolve(Bb));
        return gb(hb, Ob)
      }
      refine(bb, ub) {
        const hb = bb => "string" === typeof ub || "undefined" === typeof ub ? {
          message: ub
        } : "function" === typeof ub ? ub(bb) : ub;
        return this._refinement(((ub, Bb) => {
          const Ob = bb(ub),
            Gb = () => Bb.addIssue({
              code: wb.custom,
              ...hb(ub)
            });
          return "undefined" !== typeof Promise && Ob instanceof Promise ? Ob.then((bb => !!bb || (Gb(), !1))) : !!Ob || (Gb(), !1)
        }))
      }
      refinement(bb, ub) {
        return this._refinement(((hb, Bb) => !!bb(hb) || (Bb.addIssue("function" === typeof ub ? ub(hb, Bb) : ub), !1)))
      }
      _refinement(bb) {
        return new Wu({
          schema: this,
          typeName: tu.ZodEffects,
          effect: {
            type: "refinement",
            refinement: bb
          }
        })
      }
      superRefine(bb) {
        return this._refinement(bb)
      }
      optional() {
        return Cu.create(this, this._def)
      }
      nullable() {
        return du.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return uu.create(this, this._def)
      }
      promise() {
        return Ku.create(this, this._def)
      }
      or(bb) {
        return Ou.create([this, bb], this._def)
      }
      and(bb) {
        return Yu.create(this, bb, this._def)
      }
      transform(bb) {
        return new Wu({
          ...ib(this._def),
          schema: this,
          typeName: tu.ZodEffects,
          effect: {
            type: "transform",
            transform: bb
          }
        })
      }
      default (bb) {
        const ub = "function" === typeof bb ? bb : () => bb;
        return new ru({
          ...ib(this._def),
          innerType: this,
          defaultValue: ub,
          typeName: tu.ZodDefault
        })
      }
      brand() {
        return new xu({
          typeName: tu.ZodBranded,
          type: this,
          ...ib(this._def)
        })
      } catch (bb) {
        const ub = "function" === typeof bb ? bb : () => bb;
        return new ju({
          ...ib(this._def),
          innerType: this,
          catchValue: ub,
          typeName: tu.ZodCatch
        })
      }
      describe(bb) {
        return new(0, this.constructor)({
          ...this._def,
          description: bb
        })
      }
      pipe(bb) {
        return zu.create(this, bb)
      }
      readonly() {
        return gu.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const tb = /^c[^\s-]{8,}$/i,
      Jb = /^[a-z][a-z0-9]*$/,
      eb = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      Nb = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      sb = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let Mb;
    const mb = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      Ib = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class Pb extends vb {
      _parse(bb) {
        this._def.coerce && (bb.data = String(bb.data));
        if (this._getType(bb) !== ab.string) {
          const ub = this._getOrReturnCtx(bb);
          return lb(ub, {
            code: wb.invalid_type,
            expected: ab.string,
            received: ub.parsedType
          }), Wb
        }
        const ub = new Kb;
        let hb;
        for (const Yb of this._def.checks)
          if ("min" === Yb.kind) bb.data.length < Yb.value && (hb = this._getOrReturnCtx(bb, hb), lb(hb, {
            code: wb.too_small,
            minimum: Yb.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: Yb.message
          }), ub.ZX());
          else if ("max" === Yb.kind) bb.data.length > Yb.value && (hb = this._getOrReturnCtx(bb, hb), lb(hb, {
          code: wb.too_big,
          maximum: Yb.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: Yb.message
        }), ub.ZX());
        else if ("length" === Yb.kind) {
          const Bb = bb.data.length > Yb.value,
            Ob = bb.data.length < Yb.value;
          (Bb || Ob) && (hb = this._getOrReturnCtx(bb, hb), Bb ? lb(hb, {
            code: wb.too_big,
            maximum: Yb.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: Yb.message
          }) : Ob && lb(hb, {
            code: wb.too_small,
            minimum: Yb.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: Yb.message
          }), ub.ZX())
        } else if ("email" === Yb.kind) sb.test(bb.data) || (hb = this._getOrReturnCtx(bb, hb), lb(hb, {
          validation: "email",
          code: wb.invalid_string,
          message: Yb.message
        }), ub.ZX());
        else if ("emoji" === Yb.kind) Mb || (Mb = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Mb.test(bb.data) || (hb = this._getOrReturnCtx(bb, hb), lb(hb, {
          validation: "emoji",
          code: wb.invalid_string,
          message: Yb.message
        }), ub.ZX());
        else if ("uuid" === Yb.kind) Nb.test(bb.data) || (hb = this._getOrReturnCtx(bb, hb), lb(hb, {
          validation: "uuid",
          code: wb.invalid_string,
          message: Yb.message
        }), ub.ZX());
        else if ("cuid" === Yb.kind) tb.test(bb.data) || (hb = this._getOrReturnCtx(bb, hb), lb(hb, {
          validation: "cuid",
          code: wb.invalid_string,
          message: Yb.message
        }), ub.ZX());
        else if ("cuid2" === Yb.kind) Jb.test(bb.data) || (hb = this._getOrReturnCtx(bb, hb), lb(hb, {
          validation: "cuid2",
          code: wb.invalid_string,
          message: Yb.message
        }), ub.ZX());
        else if ("ulid" === Yb.kind) eb.test(bb.data) || (hb = this._getOrReturnCtx(bb, hb), lb(hb, {
          validation: "ulid",
          code: wb.invalid_string,
          message: Yb.message
        }), ub.ZX());
        else if ("url" === Yb.kind) try {
          new URL(bb.data)
        } catch (Ub) {
          hb = this._getOrReturnCtx(bb, hb), lb(hb, {
            validation: "url",
            code: wb.invalid_string,
            message: Yb.message
          }), ub.ZX()
        } else if ("regex" === Yb.kind) {
          Yb.regex.lastIndex = 0;
          Yb.regex.test(bb.data) || (hb = this._getOrReturnCtx(bb, hb), lb(hb, {
            validation: "regex",
            code: wb.invalid_string,
            message: Yb.message
          }), ub.ZX())
        } else if ("trim" === Yb.kind) bb.data = bb.data.trim();
        else if ("includes" === Yb.kind) bb.data.includes(Yb.value, Yb.position) || (hb = this._getOrReturnCtx(bb, hb), lb(hb, {
          code: wb.invalid_string,
          validation: {
            includes: Yb.value,
            position: Yb.position
          },
          message: Yb.message
        }), ub.ZX());
        else if ("toLowerCase" === Yb.kind) bb.data = bb.data.toLowerCase();
        else if ("toUpperCase" === Yb.kind) bb.data = bb.data.toUpperCase();
        else if ("startsWith" === Yb.kind) bb.data.startsWith(Yb.value) || (hb = this._getOrReturnCtx(bb, hb), lb(hb, {
          code: wb.invalid_string,
          validation: {
            startsWith: Yb.value
          },
          message: Yb.message
        }), ub.ZX());
        else if ("endsWith" === Yb.kind) bb.data.endsWith(Yb.value) || (hb = this._getOrReturnCtx(bb, hb), lb(hb, {
          code: wb.invalid_string,
          validation: {
            endsWith: Yb.value
          },
          message: Yb.message
        }), ub.ZX());
        else if ("datetime" === Yb.kind) {
          ((Gb = Yb).precision ? Gb.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${Gb.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${Gb.precision}}Z$`) : 0 === Gb.precision ? Gb.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : Gb.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(bb.data) || (hb = this._getOrReturnCtx(bb, hb), lb(hb, {
            code: wb.invalid_string,
            validation: "datetime",
            message: Yb.message
          }), ub.ZX())
        } else "ip" === Yb.kind ? (Bb = bb.data, ("v4" !== (Ob = Yb.version) && Ob || !mb.test(Bb)) && ("v6" !== Ob && Ob || !Ib.test(Bb)) && (hb = this._getOrReturnCtx(bb, hb), lb(hb, {
          validation: "ip",
          code: wb.invalid_string,
          message: Yb.message
        }), ub.ZX())) : Lb.assertNever(Yb);
        var Bb, Ob, Gb;
        return {
          status: ub.value,
          value: bb.data
        }
      }
      _regex(bb, ub, hb) {
        return this.refinement((ub => bb.test(ub)), {
          validation: ub,
          code: wb.invalid_string,
          ...xb.errToObj(hb)
        })
      }
      _addCheck(bb) {
        return new Pb({
          ...this._def,
          checks: [...this._def.checks, bb]
        })
      }
      email(bb) {
        return this._addCheck({
          kind: "email",
          ...xb.errToObj(bb)
        })
      }
      url(bb) {
        return this._addCheck({
          kind: "url",
          ...xb.errToObj(bb)
        })
      }
      emoji(bb) {
        return this._addCheck({
          kind: "emoji",
          ...xb.errToObj(bb)
        })
      }
      uuid(bb) {
        return this._addCheck({
          kind: "uuid",
          ...xb.errToObj(bb)
        })
      }
      cuid(bb) {
        return this._addCheck({
          kind: "cuid",
          ...xb.errToObj(bb)
        })
      }
      cuid2(bb) {
        return this._addCheck({
          kind: "cuid2",
          ...xb.errToObj(bb)
        })
      }
      ulid(bb) {
        return this._addCheck({
          kind: "ulid",
          ...xb.errToObj(bb)
        })
      }
      ip(bb) {
        return this._addCheck({
          kind: "ip",
          ...xb.errToObj(bb)
        })
      }
      datetime(bb) {
        var ub;
        return "string" === typeof bb ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: bb
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === bb || void 0 === bb ? void 0 : bb.precision) ? null : null === bb || void 0 === bb ? void 0 : bb.precision,
          offset: null !== (ub = null === bb || void 0 === bb ? void 0 : bb.offset) && void 0 !== ub && ub,
          ...xb.errToObj(null === bb || void 0 === bb ? void 0 : bb.message)
        })
      }
      regex(bb, ub) {
        return this._addCheck({
          kind: "regex",
          regex: bb,
          ...xb.errToObj(ub)
        })
      }
      includes(bb, ub) {
        return this._addCheck({
          kind: "includes",
          value: bb,
          position: null === ub || void 0 === ub ? void 0 : ub.position,
          ...xb.errToObj(null === ub || void 0 === ub ? void 0 : ub.message)
        })
      }
      startsWith(bb, ub) {
        return this._addCheck({
          kind: "startsWith",
          value: bb,
          ...xb.errToObj(ub)
        })
      }
      endsWith(bb, ub) {
        return this._addCheck({
          kind: "endsWith",
          value: bb,
          ...xb.errToObj(ub)
        })
      }
      min(bb, ub) {
        return this._addCheck({
          kind: "min",
          value: bb,
          ...xb.errToObj(ub)
        })
      }
      max(bb, ub) {
        return this._addCheck({
          kind: "max",
          value: bb,
          ...xb.errToObj(ub)
        })
      }
      length(bb, ub) {
        return this._addCheck({
          kind: "length",
          value: bb,
          ...xb.errToObj(ub)
        })
      }
      nonempty(bb) {
        return this.min(1, xb.errToObj(bb))
      }
      trim() {
        return new Pb({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new Pb({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new Pb({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((bb => "datetime" === bb.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((bb => "email" === bb.kind))
      }
      get isURL() {
        return !!this._def.checks.find((bb => "url" === bb.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((bb => "emoji" === bb.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((bb => "uuid" === bb.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((bb => "cuid" === bb.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((bb => "cuid2" === bb.kind))
      }
      get isULID() {
        return !!this._def.checks.find((bb => "ulid" === bb.kind))
      }
      get isIP() {
        return !!this._def.checks.find((bb => "ip" === bb.kind))
      }
      get minLength() {
        let bb = null;
        for (const ub of this._def.checks) "min" === ub.kind && (null === bb || ub.value > bb) && (bb = ub.value);
        return bb
      }
      get maxLength() {
        let bb = null;
        for (const ub of this._def.checks) "max" === ub.kind && (null === bb || ub.value < bb) && (bb = ub.value);
        return bb
      }
    }

    function qb(bb, ub) {
      const hb = (bb.toString().split(".")[1] || "").length,
        Bb = (ub.toString().split(".")[1] || "").length,
        Ob = hb > Bb ? hb : Bb;
      return parseInt(bb.toFixed(Ob).replace(".", "")) % parseInt(ub.toFixed(Ob).replace(".", "")) / Math.pow(10, Ob)
    }
    Pb.create = bb => {
      var ub;
      return new Pb({
        checks: [],
        typeName: tu.ZodString,
        coerce: null !== (ub = null === bb || void 0 === bb ? void 0 : bb.coerce) && void 0 !== ub && ub,
        ...ib(bb)
      })
    };
    class Eb extends vb {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(bb) {
        this._def.coerce && (bb.data = Number(bb.data));
        if (this._getType(bb) !== ab.number) {
          const ub = this._getOrReturnCtx(bb);
          return lb(ub, {
            code: wb.invalid_type,
            expected: ab.number,
            received: ub.parsedType
          }), Wb
        }
        let ub;
        const hb = new Kb;
        for (const Bb of this._def.checks)
          if ("int" === Bb.kind) Lb.isInteger(bb.data) || (ub = this._getOrReturnCtx(bb, ub), lb(ub, {
            code: wb.invalid_type,
            expected: "integer",
            received: "float",
            message: Bb.message
          }), hb.ZX());
          else if ("min" === Bb.kind) {
          (Bb.inclusive ? bb.data < Bb.value : bb.data <= Bb.value) && (ub = this._getOrReturnCtx(bb, ub), lb(ub, {
            code: wb.too_small,
            minimum: Bb.value,
            type: "number",
            inclusive: Bb.inclusive,
            exact: !1,
            message: Bb.message
          }), hb.ZX())
        } else if ("max" === Bb.kind) {
          (Bb.inclusive ? bb.data > Bb.value : bb.data >= Bb.value) && (ub = this._getOrReturnCtx(bb, ub), lb(ub, {
            code: wb.too_big,
            maximum: Bb.value,
            type: "number",
            inclusive: Bb.inclusive,
            exact: !1,
            message: Bb.message
          }), hb.ZX())
        } else "multipleOf" === Bb.kind ? 0 !== qb(bb.data, Bb.value) && (ub = this._getOrReturnCtx(bb, ub), lb(ub, {
          code: wb.not_multiple_of,
          multipleOf: Bb.value,
          message: Bb.message
        }), hb.ZX()) : "finite" === Bb.kind ? Number.isFinite(bb.data) || (ub = this._getOrReturnCtx(bb, ub), lb(ub, {
          code: wb.not_finite,
          message: Bb.message
        }), hb.ZX()) : Lb.assertNever(Bb);
        return {
          status: hb.value,
          value: bb.data
        }
      }
      gte(bb, ub) {
        return this.setLimit("min", bb, !0, xb.toString(ub))
      }
      gt(bb, ub) {
        return this.setLimit("min", bb, !1, xb.toString(ub))
      }
      lte(bb, ub) {
        return this.setLimit("max", bb, !0, xb.toString(ub))
      }
      lt(bb, ub) {
        return this.setLimit("max", bb, !1, xb.toString(ub))
      }
      setLimit(bb, ub, hb, Bb) {
        return new Eb({
          ...this._def,
          checks: [...this._def.checks, {
            kind: bb,
            value: ub,
            inclusive: hb,
            message: xb.toString(Bb)
          }]
        })
      }
      _addCheck(bb) {
        return new Eb({
          ...this._def,
          checks: [...this._def.checks, bb]
        })
      }
      int(bb) {
        return this._addCheck({
          kind: "int",
          message: xb.toString(bb)
        })
      }
      positive(bb) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: xb.toString(bb)
        })
      }
      negative(bb) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: xb.toString(bb)
        })
      }
      nonpositive(bb) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: xb.toString(bb)
        })
      }
      nonnegative(bb) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: xb.toString(bb)
        })
      }
      multipleOf(bb, ub) {
        return this._addCheck({
          kind: "multipleOf",
          value: bb,
          message: xb.toString(ub)
        })
      }
      finite(bb) {
        return this._addCheck({
          kind: "finite",
          message: xb.toString(bb)
        })
      }
      safe(bb) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: xb.toString(bb)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: xb.toString(bb)
        })
      }
      get minValue() {
        let bb = null;
        for (const ub of this._def.checks) "min" === ub.kind && (null === bb || ub.value > bb) && (bb = ub.value);
        return bb
      }
      get maxValue() {
        let bb = null;
        for (const ub of this._def.checks) "max" === ub.kind && (null === bb || ub.value < bb) && (bb = ub.value);
        return bb
      }
      get isInt() {
        return !!this._def.checks.find((bb => "int" === bb.kind || "multipleOf" === bb.kind && Lb.isInteger(bb.value)))
      }
      get isFinite() {
        let bb = null,
          ub = null;
        for (const hb of this._def.checks) {
          if ("finite" === hb.kind || "int" === hb.kind || "multipleOf" === hb.kind) return !0;
          "min" === hb.kind ? (null === ub || hb.value > ub) && (ub = hb.value) : "max" === hb.kind && (null === bb || hb.value < bb) && (bb = hb.value)
        }
        return Number.isFinite(ub) && Number.isFinite(bb)
      }
    }
    Eb.create = bb => new Eb({
      checks: [],
      typeName: tu.ZodNumber,
      coerce: (null === bb || void 0 === bb ? void 0 : bb.coerce) || !1,
      ...ib(bb)
    });
    class yb extends vb {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(bb) {
        this._def.coerce && (bb.data = BigInt(bb.data));
        if (this._getType(bb) !== ab.bigint) {
          const ub = this._getOrReturnCtx(bb);
          return lb(ub, {
            code: wb.invalid_type,
            expected: ab.bigint,
            received: ub.parsedType
          }), Wb
        }
        let ub;
        const hb = new Kb;
        for (const Bb of this._def.checks)
          if ("min" === Bb.kind) {
            (Bb.inclusive ? bb.data < Bb.value : bb.data <= Bb.value) && (ub = this._getOrReturnCtx(bb, ub), lb(ub, {
              code: wb.too_small,
              type: "bigint",
              minimum: Bb.value,
              inclusive: Bb.inclusive,
              message: Bb.message
            }), hb.ZX())
          } else if ("max" === Bb.kind) {
          (Bb.inclusive ? bb.data > Bb.value : bb.data >= Bb.value) && (ub = this._getOrReturnCtx(bb, ub), lb(ub, {
            code: wb.too_big,
            type: "bigint",
            maximum: Bb.value,
            inclusive: Bb.inclusive,
            message: Bb.message
          }), hb.ZX())
        } else "multipleOf" === Bb.kind ? bb.data % Bb.value !== BigInt(0) && (ub = this._getOrReturnCtx(bb, ub), lb(ub, {
          code: wb.not_multiple_of,
          multipleOf: Bb.value,
          message: Bb.message
        }), hb.ZX()) : Lb.assertNever(Bb);
        return {
          status: hb.value,
          value: bb.data
        }
      }
      gte(bb, ub) {
        return this.setLimit("min", bb, !0, xb.toString(ub))
      }
      gt(bb, ub) {
        return this.setLimit("min", bb, !1, xb.toString(ub))
      }
      lte(bb, ub) {
        return this.setLimit("max", bb, !0, xb.toString(ub))
      }
      lt(bb, ub) {
        return this.setLimit("max", bb, !1, xb.toString(ub))
      }
      setLimit(bb, ub, hb, Bb) {
        return new yb({
          ...this._def,
          checks: [...this._def.checks, {
            kind: bb,
            value: ub,
            inclusive: hb,
            message: xb.toString(Bb)
          }]
        })
      }
      _addCheck(bb) {
        return new yb({
          ...this._def,
          checks: [...this._def.checks, bb]
        })
      }
      positive(bb) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: xb.toString(bb)
        })
      }
      negative(bb) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: xb.toString(bb)
        })
      }
      nonpositive(bb) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: xb.toString(bb)
        })
      }
      nonnegative(bb) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: xb.toString(bb)
        })
      }
      multipleOf(bb, ub) {
        return this._addCheck({
          kind: "multipleOf",
          value: bb,
          message: xb.toString(ub)
        })
      }
      get minValue() {
        let bb = null;
        for (const ub of this._def.checks) "min" === ub.kind && (null === bb || ub.value > bb) && (bb = ub.value);
        return bb
      }
      get maxValue() {
        let bb = null;
        for (const ub of this._def.checks) "max" === ub.kind && (null === bb || ub.value < bb) && (bb = ub.value);
        return bb
      }
    }
    yb.create = bb => {
      var ub;
      return new yb({
        checks: [],
        typeName: tu.ZodBigInt,
        coerce: null !== (ub = null === bb || void 0 === bb ? void 0 : bb.coerce) && void 0 !== ub && ub,
        ...ib(bb)
      })
    };
    class Vb extends vb {
      _parse(bb) {
        this._def.coerce && (bb.data = Boolean(bb.data));
        if (this._getType(bb) !== ab.boolean) {
          const ub = this._getOrReturnCtx(bb);
          return lb(ub, {
            code: wb.invalid_type,
            expected: ab.boolean,
            received: ub.parsedType
          }), Wb
        }
        return db(bb.data)
      }
    }
    Vb.create = bb => new Vb({
      typeName: tu.ZodBoolean,
      coerce: (null === bb || void 0 === bb ? void 0 : bb.coerce) || !1,
      ...ib(bb)
    });
    class Fb extends vb {
      _parse(bb) {
        this._def.coerce && (bb.data = new Date(bb.data));
        if (this._getType(bb) !== ab.date) {
          const ub = this._getOrReturnCtx(bb);
          return lb(ub, {
            code: wb.invalid_type,
            expected: ab.date,
            received: ub.parsedType
          }), Wb
        }
        if (isNaN(bb.data.getTime())) {
          return lb(this._getOrReturnCtx(bb), {
            code: wb.invalid_date
          }), Wb
        }
        const ub = new Kb;
        let hb;
        for (const Bb of this._def.checks) "min" === Bb.kind ? bb.data.getTime() < Bb.value && (hb = this._getOrReturnCtx(bb, hb), lb(hb, {
          code: wb.too_small,
          message: Bb.message,
          inclusive: !0,
          exact: !1,
          minimum: Bb.value,
          type: "date"
        }), ub.ZX()) : "max" === Bb.kind ? bb.data.getTime() > Bb.value && (hb = this._getOrReturnCtx(bb, hb), lb(hb, {
          code: wb.too_big,
          message: Bb.message,
          inclusive: !0,
          exact: !1,
          maximum: Bb.value,
          type: "date"
        }), ub.ZX()) : Lb.assertNever(Bb);
        return {
          status: ub.value,
          value: new Date(bb.data.getTime())
        }
      }
      _addCheck(bb) {
        return new Fb({
          ...this._def,
          checks: [...this._def.checks, bb]
        })
      }
      min(bb, ub) {
        return this._addCheck({
          kind: "min",
          value: bb.getTime(),
          message: xb.toString(ub)
        })
      }
      max(bb, ub) {
        return this._addCheck({
          kind: "max",
          value: bb.getTime(),
          message: xb.toString(ub)
        })
      }
      get minDate() {
        let bb = null;
        for (const ub of this._def.checks) "min" === ub.kind && (null === bb || ub.value > bb) && (bb = ub.value);
        return null != bb ? new Date(bb) : null
      }
      get maxDate() {
        let bb = null;
        for (const ub of this._def.checks) "max" === ub.kind && (null === bb || ub.value < bb) && (bb = ub.value);
        return null != bb ? new Date(bb) : null
      }
    }
    Fb.create = bb => new Fb({
      checks: [],
      coerce: (null === bb || void 0 === bb ? void 0 : bb.coerce) || !1,
      typeName: tu.ZodDate,
      ...ib(bb)
    });
    class fb extends vb {
      _parse(bb) {
        if (this._getType(bb) !== ab.symbol) {
          const ub = this._getOrReturnCtx(bb);
          return lb(ub, {
            code: wb.invalid_type,
            expected: ab.symbol,
            received: ub.parsedType
          }), Wb
        }
        return db(bb.data)
      }
    }
    fb.create = bb => new fb({
      typeName: tu.ZodSymbol,
      ...ib(bb)
    });
    class kb extends vb {
      _parse(bb) {
        if (this._getType(bb) !== ab.undefined) {
          const ub = this._getOrReturnCtx(bb);
          return lb(ub, {
            code: wb.invalid_type,
            expected: ab.undefined,
            received: ub.parsedType
          }), Wb
        }
        return db(bb.data)
      }
    }
    kb.create = bb => new kb({
      typeName: tu.ZodUndefined,
      ...ib(bb)
    });
    class Tb extends vb {
      _parse(bb) {
        if (this._getType(bb) !== ab.null) {
          const ub = this._getOrReturnCtx(bb);
          return lb(ub, {
            code: wb.invalid_type,
            expected: ab.null,
            received: ub.parsedType
          }), Wb
        }
        return db(bb.data)
      }
    }
    Tb.create = bb => new Tb({
      typeName: tu.ZodNull,
      ...ib(bb)
    });
    class cb extends vb {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(bb) {
        return db(bb.data)
      }
    }
    cb.create = bb => new cb({
      typeName: tu.ZodAny,
      ...ib(bb)
    });
    class Qb extends vb {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(bb) {
        return db(bb.data)
      }
    }
    Qb.create = bb => new Qb({
      typeName: tu.ZodUnknown,
      ...ib(bb)
    });
    class Rb extends vb {
      _parse(bb) {
        const ub = this._getOrReturnCtx(bb);
        return lb(ub, {
          code: wb.invalid_type,
          expected: ab.never,
          received: ub.parsedType
        }), Wb
      }
    }
    Rb.create = bb => new Rb({
      typeName: tu.ZodNever,
      ...ib(bb)
    });
    class bu extends vb {
      _parse(bb) {
        if (this._getType(bb) !== ab.undefined) {
          const ub = this._getOrReturnCtx(bb);
          return lb(ub, {
            code: wb.invalid_type,
            expected: ab.void,
            received: ub.parsedType
          }), Wb
        }
        return db(bb.data)
      }
    }
    bu.create = bb => new bu({
      typeName: tu.ZodVoid,
      ...ib(bb)
    });
    class uu extends vb {
      _parse(bb) {
        const {
          ctx: ub,
          status: hb
        } = this._processInputParams(bb), Bb = this._def;
        if (ub.parsedType !== ab.array) return lb(ub, {
          code: wb.invalid_type,
          expected: ab.array,
          received: ub.parsedType
        }), Wb;
        if (null !== Bb.exactLength) {
          const bb = ub.data.length > Bb.exactLength.value,
            Ob = ub.data.length < Bb.exactLength.value;
          (bb || Ob) && (lb(ub, {
            code: bb ? wb.too_big : wb.too_small,
            minimum: Ob ? Bb.exactLength.value : void 0,
            maximum: bb ? Bb.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: Bb.exactLength.message
          }), hb.ZX())
        }
        if (null !== Bb.minLength && ub.data.length < Bb.minLength.value && (lb(ub, {
            code: wb.too_small,
            minimum: Bb.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Bb.minLength.message
          }), hb.ZX()), null !== Bb.maxLength && ub.data.length > Bb.maxLength.value && (lb(ub, {
            code: wb.too_big,
            maximum: Bb.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Bb.maxLength.message
          }), hb.ZX()), ub.common.async) return Promise.all([...ub.data].map(((bb, hb) => Bb.type._parseAsync(new zb(ub, bb, ub.path, hb))))).then((bb => Kb.mergeArray(hb, bb)));
        const Ob = [...ub.data].map(((bb, hb) => Bb.type._parseSync(new zb(ub, bb, ub.path, hb))));
        return Kb.mergeArray(hb, Ob)
      }
      get element() {
        return this._def.type
      }
      min(bb, ub) {
        return new uu({
          ...this._def,
          minLength: {
            value: bb,
            message: xb.toString(ub)
          }
        })
      }
      max(bb, ub) {
        return new uu({
          ...this._def,
          maxLength: {
            value: bb,
            message: xb.toString(ub)
          }
        })
      }
      length(bb, ub) {
        return new uu({
          ...this._def,
          exactLength: {
            value: bb,
            message: xb.toString(ub)
          }
        })
      }
      nonempty(bb) {
        return this.min(1, bb)
      }
    }

    function hu(bb) {
      if (bb instanceof Bu) {
        const ub = {};
        for (const hb in bb.shape) {
          const Bb = bb.shape[hb];
          ub[hb] = Cu.create(hu(Bb))
        }
        return new Bu({
          ...bb._def,
          shape: () => ub
        })
      }
      return bb instanceof uu ? new uu({
        ...bb._def,
        type: hu(bb.element)
      }) : bb instanceof Cu ? Cu.create(hu(bb.unwrap())) : bb instanceof du ? du.create(hu(bb.unwrap())) : bb instanceof Su ? Su.create(bb.items.map((bb => hu(bb)))) : bb
    }
    uu.create = (bb, ub) => new uu({
      type: bb,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: tu.ZodArray,
      ...ib(ub)
    });
    class Bu extends vb {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const bb = this._def.shape(),
          ub = Lb.objectKeys(bb);
        return this._cached = {
          shape: bb,
          keys: ub
        }
      }
      _parse(bb) {
        if (this._getType(bb) !== ab.object) {
          const ub = this._getOrReturnCtx(bb);
          return lb(ub, {
            code: wb.invalid_type,
            expected: ab.object,
            received: ub.parsedType
          }), Wb
        }
        const {
          status: ub,
          ctx: hb
        } = this._processInputParams(bb), {
          shape: Bb,
          keys: Ob
        } = this._getCached(), Gb = [];
        if (!(this._def.catchall instanceof Rb && "strip" === this._def.unknownKeys))
          for (const Lb in hb.data) Ob.includes(Lb) || Gb.push(Lb);
        const Ub = [];
        for (const Lb of Ob) {
          const bb = Bb[Lb],
            ub = hb.data[Lb];
          Ub.push({
            key: {
              status: "valid",
              value: Lb
            },
            value: bb._parse(new zb(hb, ub, hb.path, Lb)),
            alwaysSet: Lb in hb.data
          })
        }
        if (this._def.catchall instanceof Rb) {
          const bb = this._def.unknownKeys;
          if ("passthrough" === bb)
            for (const ub of Gb) Ub.push({
              key: {
                status: "valid",
                value: ub
              },
              value: {
                status: "valid",
                value: hb.data[ub]
              }
            });
          else if ("strict" === bb) Gb.length > 0 && (lb(hb, {
            code: wb.unrecognized_keys,
            keys: Gb
          }), ub.ZX());
          else if ("strip" !== bb) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const bb = this._def.catchall;
          for (const ub of Gb) {
            const Bb = hb.data[ub];
            Ub.push({
              key: {
                status: "valid",
                value: ub
              },
              value: bb._parse(new zb(hb, Bb, hb.path, ub)),
              alwaysSet: ub in hb.data
            })
          }
        }
        return hb.common.async ? Promise.resolve().then((async () => {
          const bb = [];
          for (const ub of Ub) {
            const hb = await ub.key;
            bb.push({
              key: hb,
              value: await ub.value,
              alwaysSet: ub.alwaysSet
            })
          }
          return bb
        })).then((bb => Kb.mergeObjectSync(ub, bb))) : Kb.mergeObjectSync(ub, Ub)
      }
      get shape() {
        return this._def.shape()
      }
      strict(bb) {
        return xb.errToObj, new Bu({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== bb ? {
            errorMap: (ub, hb) => {
              var Bb, Ob, Gb, Ub;
              const Lb = null !== (Gb = null === (Ob = (Bb = this._def).errorMap) || void 0 === Ob ? void 0 : Ob.call(Bb, ub, hb).message) && void 0 !== Gb ? Gb : hb.defaultError;
              return "unrecognized_keys" === ub.code ? {
                message: null !== (Ub = xb.errToObj(bb).message) && void 0 !== Ub ? Ub : Lb
              } : {
                message: Lb
              }
            }
          } : {}
        })
      }
      strip() {
        return new Bu({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new Bu({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(bb) {
        return new Bu({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...bb
          })
        })
      }
      merge(bb) {
        return new Bu({
          unknownKeys: bb._def.unknownKeys,
          catchall: bb._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...bb._def.shape()
          }),
          typeName: tu.ZodObject
        })
      }
      setKey(bb, ub) {
        return this.augment({
          [bb]: ub
        })
      }
      catchall(bb) {
        return new Bu({
          ...this._def,
          catchall: bb
        })
      }
      xw(bb) {
        const ub = {};
        return Lb.objectKeys(bb).forEach((hb => {
          bb[hb] && this.shape[hb] && (ub[hb] = this.shape[hb])
        })), new Bu({
          ...this._def,
          shape: () => ub
        })
      }
      omit(bb) {
        const ub = {};
        return Lb.objectKeys(this.shape).forEach((hb => {
          bb[hb] || (ub[hb] = this.shape[hb])
        })), new Bu({
          ...this._def,
          shape: () => ub
        })
      }
      deepPartial() {
        return hu(this)
      }
      partial(bb) {
        const ub = {};
        return Lb.objectKeys(this.shape).forEach((hb => {
          const Bb = this.shape[hb];
          bb && !bb[hb] ? ub[hb] = Bb : ub[hb] = Bb.optional()
        })), new Bu({
          ...this._def,
          shape: () => ub
        })
      }
      required(bb) {
        const ub = {};
        return Lb.objectKeys(this.shape).forEach((hb => {
          if (bb && !bb[hb]) ub[hb] = this.shape[hb];
          else {
            let bb = this.shape[hb];
            for (; bb instanceof Cu;) bb = bb._def.innerType;
            ub[hb] = bb
          }
        })), new Bu({
          ...this._def,
          shape: () => ub
        })
      }
      keyof() {
        return ou(Lb.objectKeys(this.shape))
      }
    }
    Bu.create = (bb, ub) => new Bu({
      shape: () => bb,
      unknownKeys: "strip",
      catchall: Rb.create(),
      typeName: tu.ZodObject,
      ...ib(ub)
    }), Bu.strictCreate = (bb, ub) => new Bu({
      shape: () => bb,
      unknownKeys: "strict",
      catchall: Rb.create(),
      typeName: tu.ZodObject,
      ...ib(ub)
    }), Bu.lazycreate = (bb, ub) => new Bu({
      shape: bb,
      unknownKeys: "strip",
      catchall: Rb.create(),
      typeName: tu.ZodObject,
      ...ib(ub)
    });
    class Ou extends vb {
      _parse(bb) {
        const {
          ctx: ub
        } = this._processInputParams(bb), hb = this._def.options;
        if (ub.common.async) return Promise.all(hb.map((async bb => {
          const hb = {
            ...ub,
            common: {
              ...ub.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await bb._parseAsync({
              data: ub.data,
              path: ub.path,
              parent: hb
            }),
            ctx: hb
          }
        }))).then((function(bb) {
          for (const ub of bb)
            if ("valid" === ub.result.status) return ub.result;
          for (const Bb of bb)
            if ("ZX" === Bb.result.status) return ub.common.issues.push(...Bb.ctx.common.issues), Bb.result;
          const hb = bb.map((bb => new Zb(bb.ctx.common.issues)));
          return lb(ub, {
            code: wb.invalid_union,
            unionErrors: hb
          }), Wb
        }));
        {
          let bb;
          const Bb = [];
          for (const Gb of hb) {
            const hb = {
                ...ub,
                common: {
                  ...ub.common,
                  issues: []
                },
                parent: null
              },
              Ob = Gb._parseSync({
                data: ub.data,
                path: ub.path,
                parent: hb
              });
            if ("valid" === Ob.status) return Ob;
            "ZX" !== Ob.status || bb || (bb = {
              result: Ob,
              ctx: hb
            }), hb.common.issues.length && Bb.push(hb.common.issues)
          }
          if (bb) return ub.common.issues.push(...bb.ctx.common.issues), bb.result;
          const Ob = Bb.map((bb => new Zb(bb)));
          return lb(ub, {
            code: wb.invalid_union,
            unionErrors: Ob
          }), Wb
        }
      }
      get options() {
        return this._def.options
      }
    }
    Ou.create = (bb, ub) => new Ou({
      options: bb,
      typeName: tu.ZodUnion,
      ...ib(ub)
    });
    const Gu = bb => bb instanceof Xu ? Gu(bb.schema) : bb instanceof Wu ? Gu(bb.innerType()) : bb instanceof pu ? [bb.value] : bb instanceof Au ? bb.options : bb instanceof lu ? Object.keys(bb.enum) : bb instanceof ru ? Gu(bb._def.innerType) : bb instanceof kb ? [void 0] : bb instanceof Tb ? [null] : null;
    class Uu extends vb {
      _parse(bb) {
        const {
          ctx: ub
        } = this._processInputParams(bb);
        if (ub.parsedType !== ab.object) return lb(ub, {
          code: wb.invalid_type,
          expected: ab.object,
          received: ub.parsedType
        }), Wb;
        const hb = this.discriminator,
          Bb = ub.data[hb],
          Ob = this.optionsMap.get(Bb);
        return Ob ? ub.common.async ? Ob._parseAsync({
          data: ub.data,
          path: ub.path,
          parent: ub
        }) : Ob._parseSync({
          data: ub.data,
          path: ub.path,
          parent: ub
        }) : (lb(ub, {
          code: wb.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [hb]
        }), Wb)
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
      static create(bb, ub, hb) {
        const Bb = new Map;
        for (const Ob of ub) {
          const ub = Gu(Ob.shape[bb]);
          if (!ub) throw new Error(`A discriminator value for key \`${bb}\` could not be extracted from all schema options`);
          for (const hb of ub) {
            if (Bb.has(hb)) throw new Error(`Discriminator property ${String(bb)} has duplicate value ${String(hb)}`);
            Bb.set(hb, Ob)
          }
        }
        return new Uu({
          typeName: tu.ZodDiscriminatedUnion,
          discriminator: bb,
          options: ub,
          optionsMap: Bb,
          ...ib(hb)
        })
      }
    }

    function Lu(bb, ub) {
      const hb = Hb(bb),
        Bb = Hb(ub);
      if (bb === ub) return {
        valid: !0,
        data: bb
      };
      if (hb === ab.object && Bb === ab.object) {
        const hb = Lb.objectKeys(ub),
          Bb = Lb.objectKeys(bb).filter((bb => -1 !== hb.indexOf(bb))),
          Ob = {
            ...bb,
            ...ub
          };
        for (const Gb of Bb) {
          const hb = Lu(bb[Gb], ub[Gb]);
          if (!hb.valid) return {
            valid: !1
          };
          Ob[Gb] = hb.data
        }
        return {
          valid: !0,
          data: Ob
        }
      }
      if (hb === ab.array && Bb === ab.array) {
        if (bb.length !== ub.length) return {
          valid: !1
        };
        const hb = [];
        for (let Bb = 0; Bb < bb.length; Bb++) {
          const Ob = Lu(bb[Bb], ub[Bb]);
          if (!Ob.valid) return {
            valid: !1
          };
          hb.push(Ob.data)
        }
        return {
          valid: !0,
          data: hb
        }
      }
      return hb === ab.date && Bb === ab.date && +bb === +ub ? {
        valid: !0,
        data: bb
      } : {
        valid: !1
      }
    }
    class Yu extends vb {
      _parse(bb) {
        const {
          status: ub,
          ctx: hb
        } = this._processInputParams(bb), Bb = (bb, Bb) => {
          if (rb(bb) || rb(Bb)) return Wb;
          const Ob = Lu(bb.value, Bb.value);
          return Ob.valid ? ((jb(bb) || jb(Bb)) && ub.ZX(), {
            status: ub.value,
            value: Ob.data
          }) : (lb(hb, {
            code: wb.invalid_intersection_types
          }), Wb)
        };
        return hb.common.async ? Promise.all([this._def.left._parseAsync({
          data: hb.data,
          path: hb.path,
          parent: hb
        }), this._def.right._parseAsync({
          data: hb.data,
          path: hb.path,
          parent: hb
        })]).then((bb => {
          let [ub, hb] = bb;
          return Bb(ub, hb)
        })) : Bb(this._def.left._parseSync({
          data: hb.data,
          path: hb.path,
          parent: hb
        }), this._def.right._parseSync({
          data: hb.data,
          path: hb.path,
          parent: hb
        }))
      }
    }
    Yu.create = (bb, ub, hb) => new Yu({
      left: bb,
      right: ub,
      typeName: tu.ZodIntersection,
      ...ib(hb)
    });
    class Su extends vb {
      _parse(bb) {
        const {
          status: ub,
          ctx: hb
        } = this._processInputParams(bb);
        if (hb.parsedType !== ab.array) return lb(hb, {
          code: wb.invalid_type,
          expected: ab.array,
          received: hb.parsedType
        }), Wb;
        if (hb.data.length < this._def.items.length) return lb(hb, {
          code: wb.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), Wb;
        !this._def.rest && hb.data.length > this._def.items.length && (lb(hb, {
          code: wb.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), ub.ZX());
        const Bb = [...hb.data].map(((bb, ub) => {
          const Bb = this._def.items[ub] || this._def.rest;
          return Bb ? Bb._parse(new zb(hb, bb, hb.path, ub)) : null
        })).filter((bb => !!bb));
        return hb.common.async ? Promise.all(Bb).then((bb => Kb.mergeArray(ub, bb))) : Kb.mergeArray(ub, Bb)
      }
      get items() {
        return this._def.items
      }
      rest(bb) {
        return new Su({
          ...this._def,
          rest: bb
        })
      }
    }
    Su.create = (bb, ub) => {
      if (!Array.isArray(bb)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new Su({
        items: bb,
        typeName: tu.ZodTuple,
        rest: null,
        ...ib(ub)
      })
    };
    class au extends vb {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(bb) {
        const {
          status: ub,
          ctx: hb
        } = this._processInputParams(bb);
        if (hb.parsedType !== ab.object) return lb(hb, {
          code: wb.invalid_type,
          expected: ab.object,
          received: hb.parsedType
        }), Wb;
        const Bb = [],
          Ob = this._def.keyType,
          Gb = this._def.valueType;
        for (const Ub in hb.data) Bb.push({
          key: Ob._parse(new zb(hb, Ub, hb.path, Ub)),
          value: Gb._parse(new zb(hb, hb.data[Ub], hb.path, Ub))
        });
        return hb.common.async ? Kb.mergeObjectAsync(ub, Bb) : Kb.mergeObjectSync(ub, Bb)
      }
      get element() {
        return this._def.valueType
      }
      static create(bb, ub, hb) {
        return new au(ub instanceof vb ? {
          keyType: bb,
          valueType: ub,
          typeName: tu.ZodRecord,
          ...ib(hb)
        } : {
          keyType: Pb.create(),
          valueType: bb,
          typeName: tu.ZodRecord,
          ...ib(ub)
        })
      }
    }
    class Hu extends vb {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(bb) {
        const {
          status: ub,
          ctx: hb
        } = this._processInputParams(bb);
        if (hb.parsedType !== ab.map) return lb(hb, {
          code: wb.invalid_type,
          expected: ab.map,
          received: hb.parsedType
        }), Wb;
        const Bb = this._def.keyType,
          Ob = this._def.valueType,
          Gb = [...hb.data.entries()].map(((bb, ub) => {
            let [Gb, Ub] = bb;
            return {
              key: Bb._parse(new zb(hb, Gb, hb.path, [ub, "key"])),
              value: Ob._parse(new zb(hb, Ub, hb.path, [ub, "value"]))
            }
          }));
        if (hb.common.async) {
          const bb = new Map;
          return Promise.resolve().then((async () => {
            for (const hb of Gb) {
              const Bb = await hb.key,
                Ob = await hb.value;
              if ("aborted" === Bb.status || "aborted" === Ob.status) return Wb;
              "ZX" !== Bb.status && "ZX" !== Ob.status || ub.ZX(), bb.set(Bb.value, Ob.value)
            }
            return {
              status: ub.value,
              value: bb
            }
          }))
        } {
          const bb = new Map;
          for (const hb of Gb) {
            const Bb = hb.key,
              Ob = hb.value;
            if ("aborted" === Bb.status || "aborted" === Ob.status) return Wb;
            "ZX" !== Bb.status && "ZX" !== Ob.status || ub.ZX(), bb.set(Bb.value, Ob.value)
          }
          return {
            status: ub.value,
            value: bb
          }
        }
      }
    }
    Hu.create = (bb, ub, hb) => new Hu({
      valueType: ub,
      keyType: bb,
      typeName: tu.ZodMap,
      ...ib(hb)
    });
    class wu extends vb {
      _parse(bb) {
        const {
          status: ub,
          ctx: hb
        } = this._processInputParams(bb);
        if (hb.parsedType !== ab.set) return lb(hb, {
          code: wb.invalid_type,
          expected: ab.set,
          received: hb.parsedType
        }), Wb;
        const Bb = this._def;
        null !== Bb.minSize && hb.data.size < Bb.minSize.value && (lb(hb, {
          code: wb.too_small,
          minimum: Bb.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Bb.minSize.message
        }), ub.ZX()), null !== Bb.maxSize && hb.data.size > Bb.maxSize.value && (lb(hb, {
          code: wb.too_big,
          maximum: Bb.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Bb.maxSize.message
        }), ub.ZX());
        const Ob = this._def.valueType;

        function Gb(bb) {
          const hb = new Set;
          for (const Bb of bb) {
            if ("aborted" === Bb.status) return Wb;
            "ZX" === Bb.status && ub.ZX(), hb.add(Bb.value)
          }
          return {
            status: ub.value,
            value: hb
          }
        }
        const Ub = [...hb.data.values()].map(((bb, ub) => Ob._parse(new zb(hb, bb, hb.path, ub))));
        return hb.common.async ? Promise.all(Ub).then((bb => Gb(bb))) : Gb(Ub)
      }
      min(bb, ub) {
        return new wu({
          ...this._def,
          minSize: {
            value: bb,
            message: xb.toString(ub)
          }
        })
      }
      max(bb, ub) {
        return new wu({
          ...this._def,
          maxSize: {
            value: bb,
            message: xb.toString(ub)
          }
        })
      }
      size(bb, ub) {
        return this.min(bb, ub).max(bb, ub)
      }
      nonempty(bb) {
        return this.min(1, bb)
      }
    }
    wu.create = (bb, ub) => new wu({
      valueType: bb,
      minSize: null,
      maxSize: null,
      typeName: tu.ZodSet,
      ...ib(ub)
    });
    class Zu extends vb {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(bb) {
        const {
          ctx: ub
        } = this._processInputParams(bb);
        if (ub.parsedType !== ab.function) return lb(ub, {
          code: wb.invalid_type,
          expected: ab.function,
          received: ub.parsedType
        }), Wb;

        function hb(bb, hb) {
          return Ab({
            data: bb,
            path: ub.path,
            errorMaps: [ub.common.contextualErrorMap, ub.schemaErrorMap, ob(), Xb].filter((bb => !!bb)),
            issueData: {
              code: wb.invalid_arguments,
              argumentsError: hb
            }
          })
        }

        function Bb(bb, hb) {
          return Ab({
            data: bb,
            path: ub.path,
            errorMaps: [ub.common.contextualErrorMap, ub.schemaErrorMap, ob(), Xb].filter((bb => !!bb)),
            issueData: {
              code: wb.invalid_return_type,
              returnTypeError: hb
            }
          })
        }
        const Ob = {
            errorMap: ub.common.contextualErrorMap
          },
          Gb = ub.data;
        if (this._def.returns instanceof Ku) {
          const bb = this;
          return db((async function() {
            for (var ub = arguments.length, Ub = new Array(ub), Lb = 0; Lb < ub; Lb++) Ub[Lb] = arguments[Lb];
            const Yb = new Zb([]),
              Sb = await bb._def.args.parseAsync(Ub, Ob).catch((bb => {
                throw Yb.addIssue(hb(Ub, bb)), Yb
              })),
              ab = await Reflect.apply(Gb, this, Sb);
            return await bb._def.returns._def.type.parseAsync(ab, Ob).catch((bb => {
              throw Yb.addIssue(Bb(ab, bb)), Yb
            }))
          }))
        } {
          const bb = this;
          return db((function() {
            for (var ub = arguments.length, Ub = new Array(ub), Lb = 0; Lb < ub; Lb++) Ub[Lb] = arguments[Lb];
            const Yb = bb._def.args.safeParse(Ub, Ob);
            if (!Yb.success) throw new Zb([hb(Ub, Yb.error)]);
            const Sb = Reflect.apply(Gb, this, Yb.data),
              ab = bb._def.returns.safeParse(Sb, Ob);
            if (!ab.success) throw new Zb([Bb(Sb, ab.error)]);
            return ab.data
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
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        return new Zu({
          ...this._def,
          args: Su.create(ub).rest(Qb.create())
        })
      }
      returns(bb) {
        return new Zu({
          ...this._def,
          returns: bb
        })
      }
      implement(bb) {
        return this.parse(bb)
      }
      strictImplement(bb) {
        return this.parse(bb)
      }
      static create(bb, ub, hb) {
        return new Zu({
          args: bb || Su.create([]).rest(Qb.create()),
          returns: ub || Qb.create(),
          typeName: tu.ZodFunction,
          ...ib(hb)
        })
      }
    }
    class Xu extends vb {
      get schema() {
        return this._def.getter()
      }
      _parse(bb) {
        const {
          ctx: ub
        } = this._processInputParams(bb);
        return this._def.getter()._parse({
          data: ub.data,
          path: ub.path,
          parent: ub
        })
      }
    }
    Xu.create = (bb, ub) => new Xu({
      getter: bb,
      typeName: tu.ZodLazy,
      ...ib(ub)
    });
    class pu extends vb {
      _parse(bb) {
        if (bb.data !== this._def.value) {
          const ub = this._getOrReturnCtx(bb);
          return lb(ub, {
            received: ub.data,
            code: wb.invalid_literal,
            expected: this._def.value
          }), Wb
        }
        return {
          status: "valid",
          value: bb.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function ou(bb, ub) {
      return new Au({
        values: bb,
        typeName: tu.ZodEnum,
        ...ib(ub)
      })
    }
    pu.create = (bb, ub) => new pu({
      value: bb,
      typeName: tu.ZodLiteral,
      ...ib(ub)
    });
    class Au extends vb {
      _parse(bb) {
        if ("string" !== typeof bb.data) {
          const ub = this._getOrReturnCtx(bb),
            hb = this._def.values;
          return lb(ub, {
            expected: Lb.joinValues(hb),
            received: ub.parsedType,
            code: wb.invalid_type
          }), Wb
        }
        if (-1 === this._def.values.indexOf(bb.data)) {
          const ub = this._getOrReturnCtx(bb),
            hb = this._def.values;
          return lb(ub, {
            received: ub.data,
            code: wb.invalid_enum_value,
            options: hb
          }), Wb
        }
        return db(bb.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const bb = {};
        for (const ub of this._def.values) bb[ub] = ub;
        return bb
      }
      get Values() {
        const bb = {};
        for (const ub of this._def.values) bb[ub] = ub;
        return bb
      }
      get Enum() {
        const bb = {};
        for (const ub of this._def.values) bb[ub] = ub;
        return bb
      }
      extract(bb) {
        return Au.create(bb)
      }
      exclude(bb) {
        return Au.create(this.options.filter((ub => !bb.includes(ub))))
      }
    }
    Au.create = ou;
    class lu extends vb {
      _parse(bb) {
        const ub = Lb.getValidEnumValues(this._def.values),
          hb = this._getOrReturnCtx(bb);
        if (hb.parsedType !== ab.string && hb.parsedType !== ab.number) {
          const bb = Lb.objectValues(ub);
          return lb(hb, {
            expected: Lb.joinValues(bb),
            received: hb.parsedType,
            code: wb.invalid_type
          }), Wb
        }
        if (-1 === ub.indexOf(bb.data)) {
          const bb = Lb.objectValues(ub);
          return lb(hb, {
            received: hb.data,
            code: wb.invalid_enum_value,
            options: bb
          }), Wb
        }
        return db(bb.data)
      }
      get enum() {
        return this._def.values
      }
    }
    lu.create = (bb, ub) => new lu({
      values: bb,
      typeName: tu.ZodNativeEnum,
      ...ib(ub)
    });
    class Ku extends vb {
      unwrap() {
        return this._def.type
      }
      _parse(bb) {
        const {
          ctx: ub
        } = this._processInputParams(bb);
        if (ub.parsedType !== ab.promise && !1 === ub.common.async) return lb(ub, {
          code: wb.invalid_type,
          expected: ab.promise,
          received: ub.parsedType
        }), Wb;
        const hb = ub.parsedType === ab.promise ? ub.data : Promise.resolve(ub.data);
        return db(hb.then((bb => this._def.type.parseAsync(bb, {
          path: ub.path,
          errorMap: ub.common.contextualErrorMap
        }))))
      }
    }
    Ku.create = (bb, ub) => new Ku({
      type: bb,
      typeName: tu.ZodPromise,
      ...ib(ub)
    });
    class Wu extends vb {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === tu.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(bb) {
        const {
          status: ub,
          ctx: hb
        } = this._processInputParams(bb), Bb = this._def.effect || null, Ob = {
          addIssue: bb => {
            lb(hb, bb), bb.fatal ? ub.abort() : ub.ZX()
          },
          get path() {
            return hb.path
          }
        };
        if (Ob.addIssue = Ob.addIssue.bind(Ob), "preprocess" === Bb.type) {
          const bb = Bb.transform(hb.data, Ob);
          return hb.common.issues.length ? {
            status: "ZX",
            value: hb.data
          } : hb.common.async ? Promise.resolve(bb).then((bb => this._def.schema._parseAsync({
            data: bb,
            path: hb.path,
            parent: hb
          }))) : this._def.schema._parseSync({
            data: bb,
            path: hb.path,
            parent: hb
          })
        }
        if ("refinement" === Bb.type) {
          const bb = bb => {
            const ub = Bb.refinement(bb, Ob);
            if (hb.common.async) return Promise.resolve(ub);
            if (ub instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return bb
          };
          if (!1 === hb.common.async) {
            const Bb = this._def.schema._parseSync({
              data: hb.data,
              path: hb.path,
              parent: hb
            });
            return "aborted" === Bb.status ? Wb : ("ZX" === Bb.status && ub.ZX(), bb(Bb.value), {
              status: ub.value,
              value: Bb.value
            })
          }
          return this._def.schema._parseAsync({
            data: hb.data,
            path: hb.path,
            parent: hb
          }).then((hb => "aborted" === hb.status ? Wb : ("ZX" === hb.status && ub.ZX(), bb(hb.value).then((() => ({
            status: ub.value,
            value: hb.value
          }))))))
        }
        if ("transform" === Bb.type) {
          if (!1 === hb.common.async) {
            const bb = this._def.schema._parseSync({
              data: hb.data,
              path: hb.path,
              parent: hb
            });
            if (!nb(bb)) return bb;
            const Gb = Bb.transform(bb.value, Ob);
            if (Gb instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: ub.value,
              value: Gb
            }
          }
          return this._def.schema._parseAsync({
            data: hb.data,
            path: hb.path,
            parent: hb
          }).then((bb => nb(bb) ? Promise.resolve(Bb.transform(bb.value, Ob)).then((bb => ({
            status: ub.value,
            value: bb
          }))) : bb))
        }
        Lb.assertNever(Bb)
      }
    }
    Wu.create = (bb, ub, hb) => new Wu({
      schema: bb,
      typeName: tu.ZodEffects,
      effect: ub,
      ...ib(hb)
    }), Wu.createWithPreprocess = (bb, ub, hb) => new Wu({
      schema: ub,
      effect: {
        type: "preprocess",
        transform: bb
      },
      typeName: tu.ZodEffects,
      ...ib(hb)
    });
    class Cu extends vb {
      _parse(bb) {
        return this._getType(bb) === ab.undefined ? db(void 0) : this._def.innerType._parse(bb)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Cu.create = (bb, ub) => new Cu({
      innerType: bb,
      typeName: tu.ZodOptional,
      ...ib(ub)
    });
    class du extends vb {
      _parse(bb) {
        return this._getType(bb) === ab.null ? db(null) : this._def.innerType._parse(bb)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    du.create = (bb, ub) => new du({
      innerType: bb,
      typeName: tu.ZodNullable,
      ...ib(ub)
    });
    class ru extends vb {
      _parse(bb) {
        const {
          ctx: ub
        } = this._processInputParams(bb);
        let hb = ub.data;
        return ub.parsedType === ab.undefined && (hb = this._def.defaultValue()), this._def.innerType._parse({
          data: hb,
          path: ub.path,
          parent: ub
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    ru.create = (bb, ub) => new ru({
      innerType: bb,
      typeName: tu.ZodDefault,
      defaultValue: "function" === typeof ub.default ? ub.default : () => ub.default,
      ...ib(ub)
    });
    class ju extends vb {
      _parse(bb) {
        const {
          ctx: ub
        } = this._processInputParams(bb), hb = {
          ...ub,
          common: {
            ...ub.common,
            issues: []
          }
        }, Bb = this._def.innerType._parse({
          data: hb.data,
          path: hb.path,
          parent: {
            ...hb
          }
        });
        return Db(Bb) ? Bb.then((bb => ({
          status: "valid",
          value: "valid" === bb.status ? bb.value : this._def.catchValue({
            get error() {
              return new Zb(hb.common.issues)
            },
            input: hb.data
          })
        }))) : {
          status: "valid",
          value: "valid" === Bb.status ? Bb.value : this._def.catchValue({
            get error() {
              return new Zb(hb.common.issues)
            },
            input: hb.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    ju.create = (bb, ub) => new ju({
      innerType: bb,
      typeName: tu.ZodCatch,
      catchValue: "function" === typeof ub.catch ? ub.catch : () => ub.catch,
      ...ib(ub)
    });
    class nu extends vb {
      _parse(bb) {
        if (this._getType(bb) !== ab.nan) {
          const ub = this._getOrReturnCtx(bb);
          return lb(ub, {
            code: wb.invalid_type,
            expected: ab.nan,
            received: ub.parsedType
          }), Wb
        }
        return {
          status: "valid",
          value: bb.data
        }
      }
    }
    nu.create = bb => new nu({
      typeName: tu.ZodNaN,
      ...ib(bb)
    });
    const Du = Symbol("zod_brand");
    class xu extends vb {
      _parse(bb) {
        const {
          ctx: ub
        } = this._processInputParams(bb), hb = ub.data;
        return this._def.type._parse({
          data: hb,
          path: ub.path,
          parent: ub
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class zu extends vb {
      _parse(bb) {
        const {
          status: ub,
          ctx: hb
        } = this._processInputParams(bb);
        if (hb.common.async) {
          return (async () => {
            const bb = await this._def.in._parseAsync({
              data: hb.data,
              path: hb.path,
              parent: hb
            });
            return "aborted" === bb.status ? Wb : "ZX" === bb.status ? (ub.ZX(), Cb(bb.value)) : this._def.out._parseAsync({
              data: bb.value,
              path: hb.path,
              parent: hb
            })
          })()
        } {
          const bb = this._def.in._parseSync({
            data: hb.data,
            path: hb.path,
            parent: hb
          });
          return "aborted" === bb.status ? Wb : "ZX" === bb.status ? (ub.ZX(), {
            status: "ZX",
            value: bb.value
          }) : this._def.out._parseSync({
            data: bb.value,
            path: hb.path,
            parent: hb
          })
        }
      }
      static create(bb, ub) {
        return new zu({
          in: bb,
          out: ub,
          typeName: tu.ZodPipeline
        })
      }
    }
    class gu extends vb {
      _parse(bb) {
        const ub = this._def.innerType._parse(bb);
        return nb(ub) && (ub.value = Object.freeze(ub.value)), ub
      }
    }
    gu.create = (bb, ub) => new gu({
      innerType: bb,
      typeName: tu.ZodReadonly,
      ...ib(ub)
    });
    const iu = function(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          hb = arguments.length > 2 ? arguments[2] : void 0;
        return bb ? cb.create().superRefine(((Bb, Ob) => {
          var Gb, Ub;
          if (!bb(Bb)) {
            const bb = "function" === typeof ub ? ub(Bb) : "string" === typeof ub ? {
                message: ub
              } : ub,
              Lb = null === (Ub = null !== (Gb = bb.fatal) && void 0 !== Gb ? Gb : hb) || void 0 === Ub || Ub,
              Yb = "string" === typeof bb ? {
                message: bb
              } : bb;
            Ob.addIssue({
              code: "custom",
              ...Yb,
              fatal: Lb
            })
          }
        })) : cb.create()
      },
      vu = {
        object: Bu.lazycreate
      };
    var tu;
    ! function(bb) {
      bb.ZodString = "ZodString", bb.ZodNumber = "ZodNumber", bb.ZodNaN = "ZodNaN", bb.ZodBigInt = "ZodBigInt", bb.ZodBoolean = "ZodBoolean", bb.ZodDate = "ZodDate", bb.ZodSymbol = "ZodSymbol", bb.ZodUndefined = "ZodUndefined", bb.ZodNull = "ZodNull", bb.ZodAny = "ZodAny", bb.ZodUnknown = "ZodUnknown", bb.ZodNever = "ZodNever", bb.ZodVoid = "ZodVoid", bb.ZodArray = "ZodArray", bb.ZodObject = "ZodObject", bb.ZodUnion = "ZodUnion", bb.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", bb.ZodIntersection = "ZodIntersection", bb.ZodTuple = "ZodTuple", bb.ZodRecord = "ZodRecord", bb.ZodMap = "ZodMap", bb.ZodSet = "ZodSet", bb.ZodFunction = "ZodFunction", bb.ZodLazy = "ZodLazy", bb.ZodLiteral = "ZodLiteral", bb.ZodEnum = "ZodEnum", bb.ZodEffects = "ZodEffects", bb.ZodNativeEnum = "ZodNativeEnum", bb.ZodOptional = "ZodOptional", bb.ZodNullable = "ZodNullable", bb.ZodDefault = "ZodDefault", bb.ZodCatch = "ZodCatch", bb.ZodPromise = "ZodPromise", bb.ZodBranded = "ZodBranded", bb.ZodPipeline = "ZodPipeline", bb.ZodReadonly = "ZodReadonly"
    }(tu || (tu = {}));
    const Ju = Pb.create,
      eu = Eb.create,
      Nu = nu.create,
      su = yb.create,
      Mu = Vb.create,
      mu = Fb.create,
      Iu = fb.create,
      Pu = kb.create,
      qu = Tb.create,
      Eu = cb.create,
      yu = Qb.create,
      Vu = Rb.create,
      Fu = bu.create,
      fu = uu.create,
      ku = Bu.create,
      Tu = Bu.strictCreate,
      cu = Ou.create,
      Qu = Uu.create,
      Ru = Yu.create,
      bh = Su.create,
      uh = au.create,
      hh = Hu.create,
      Bh = wu.create,
      Oh = Zu.create,
      Gh = Xu.create,
      Uh = pu.create,
      Lh = Au.create,
      Yh = lu.create,
      Sh = Ku.create,
      ah = Wu.create,
      Hh = Cu.create,
      wh = du.create,
      Zh = Wu.createWithPreprocess,
      Xh = zu.create,
      ph = {
        string: bb => Pb.create({
          ...bb,
          coerce: !0
        }),
        number: bb => Eb.create({
          ...bb,
          coerce: !0
        }),
        boolean: bb => Vb.create({
          ...bb,
          coerce: !0
        }),
        bigint: bb => yb.create({
          ...bb,
          coerce: !0
        }),
        date: bb => Fb.create({
          ...bb,
          coerce: !0
        })
      },
      oh = Wb;
    var Ah = Object.freeze({
        __proto__: null,
        defaultErrorMap: Xb,
        setErrorMap: function(bb) {
          pb = bb
        },
        getErrorMap: ob,
        makeIssue: Ab,
        EMPTY_PATH: [],
        addIssueToContext: lb,
        ParseStatus: Kb,
        INVALID: Wb,
        DIRTY: Cb,
        OK: db,
        isAborted: rb,
        isDirty: jb,
        isValid: nb,
        isAsync: Db,
        get util() {
          return Lb
        },
        get objectUtil() {
          return Yb
        },
        ZodParsedType: ab,
        getParsedType: Hb,
        ZodType: vb,
        ZodString: Pb,
        ZodNumber: Eb,
        ZodBigInt: yb,
        ZodBoolean: Vb,
        ZodDate: Fb,
        ZodSymbol: fb,
        ZodUndefined: kb,
        ZodNull: Tb,
        ZodAny: cb,
        ZodUnknown: Qb,
        ZodNever: Rb,
        ZodVoid: bu,
        ZodArray: uu,
        ZodObject: Bu,
        ZodUnion: Ou,
        ZodDiscriminatedUnion: Uu,
        ZodIntersection: Yu,
        ZodTuple: Su,
        ZodRecord: au,
        ZodMap: Hu,
        ZodSet: wu,
        ZodFunction: Zu,
        ZodLazy: Xu,
        ZodLiteral: pu,
        ZodEnum: Au,
        ZodNativeEnum: lu,
        ZodPromise: Ku,
        ZodEffects: Wu,
        ZodTransformer: Wu,
        ZodOptional: Cu,
        ZodNullable: du,
        ZodDefault: ru,
        ZodCatch: ju,
        ZodNaN: nu,
        BRAND: Du,
        ZodBranded: xu,
        ZodPipeline: zu,
        ZodReadonly: gu,
        custom: iu,
        Schema: vb,
        ZodSchema: vb,
        late: vu,
        get ZodFirstPartyTypeKind() {
          return tu
        },
        coerce: ph,
        any: Eu,
        array: fu,
        bigint: su,
        boolean: Mu,
        date: mu,
        discriminatedUnion: Qu,
        effect: ah,
        enum: Lh,
        function: Oh,
        instanceof: function(bb) {
          let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${bb.name}`
          };
          return iu((ub => ub instanceof bb), ub)
        },
        intersection: Ru,
        lazy: Gh,
        literal: Uh,
        map: hh,
        nan: Nu,
        nativeEnum: Yh,
        never: Vu,
        null: qu,
        nullable: wh,
        number: eu,
        object: ku,
        oboolean: () => Mu().optional(),
        onumber: () => eu().optional(),
        optional: Hh,
        ostring: () => Ju().optional(),
        pipeline: Xh,
        preprocess: Zh,
        promise: Sh,
        record: uh,
        set: Bh,
        strictObject: Tu,
        string: Ju,
        symbol: Iu,
        transformer: ah,
        tuple: bh,
        undefined: Pu,
        union: cu,
        unknown: yu,
        void: Fu,
        NEVER: oh,
        ZodIssueCode: wb,
        quotelessJson: bb => JSON.stringify(bb, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: Zb
      }),
      lh = {
        exports: {}
      };
    ! function(bb) {
      var ub = function(bb) {
        var hb = 1e7,
          Bb = 9007199254740992,
          Ob = wb(Bb),
          Gb = "0123456789abcdefghijklmnopqrstuvwxyz",
          Ub = "function" === typeof BigInt;

        function Lb(bb, ub, hb, Bb) {
          return "undefined" === typeof bb ? Lb[0] : "undefined" !== typeof ub && (10 !== +ub || hb) ? Vb(bb, ub, hb, Bb) : cb(bb)
        }

        function Yb(bb, ub) {
          this.value = bb, this.sign = ub, this.isSmall = !1
        }

        function Sb(bb) {
          this.value = bb, this.sign = bb < 0, this.isSmall = !0
        }

        function ab(bb) {
          this.value = bb
        }

        function Hb(bb) {
          return -Bb < bb && bb < Bb
        }

        function wb(bb) {
          return bb < 1e7 ? [bb] : bb < 1e14 ? [bb % 1e7, Math.floor(bb / 1e7)] : [bb % 1e7, Math.floor(bb / 1e7) % 1e7, Math.floor(bb / 1e14)]
        }

        function Zb(bb) {
          Xb(bb);
          var ub = bb.length;
          if (ub < 4 && ib(bb, Ob) < 0) switch (ub) {
            case 0:
              return 0;
            case 1:
              return bb[0];
            case 2:
              return bb[0] + bb[1] * hb;
            default:
              return bb[0] + (bb[1] + bb[2] * hb) * hb
          }
          return bb
        }

        function Xb(bb) {
          for (var ub = bb.length; 0 === bb[--ub];);
          bb.length = ub + 1
        }

        function pb(bb) {
          for (var ub = new Array(bb), hb = -1; ++hb < bb;) ub[hb] = 0;
          return ub
        }

        function ob(bb) {
          return bb > 0 ? Math.floor(bb) : Math.ceil(bb)
        }

        function Ab(bb, ub) {
          var Bb, Ob, Gb = bb.length,
            Ub = ub.length,
            Lb = new Array(Gb),
            Yb = 0,
            Sb = hb;
          for (Ob = 0; Ob < Ub; Ob++) Yb = (Bb = bb[Ob] + ub[Ob] + Yb) >= Sb ? 1 : 0, Lb[Ob] = Bb - Yb * Sb;
          for (; Ob < Gb;) Yb = (Bb = bb[Ob] + Yb) === Sb ? 1 : 0, Lb[Ob++] = Bb - Yb * Sb;
          return Yb > 0 && Lb.push(Yb), Lb
        }

        function lb(bb, ub) {
          return bb.length >= ub.length ? Ab(bb, ub) : Ab(ub, bb)
        }

        function Kb(bb, ub) {
          var Bb, Ob, Gb = bb.length,
            Ub = new Array(Gb),
            Lb = hb;
          for (Ob = 0; Ob < Gb; Ob++) Bb = bb[Ob] - Lb + ub, ub = Math.floor(Bb / Lb), Ub[Ob] = Bb - ub * Lb, ub += 1;
          for (; ub > 0;) Ub[Ob++] = ub % Lb, ub = Math.floor(ub / Lb);
          return Ub
        }

        function Wb(bb, ub) {
          var Bb, Ob, Gb = bb.length,
            Ub = ub.length,
            Lb = new Array(Gb),
            Yb = 0,
            Sb = hb;
          for (Bb = 0; Bb < Ub; Bb++)(Ob = bb[Bb] - Yb - ub[Bb]) < 0 ? (Ob += Sb, Yb = 1) : Yb = 0, Lb[Bb] = Ob;
          for (Bb = Ub; Bb < Gb; Bb++) {
            if (!((Ob = bb[Bb] - Yb) < 0)) {
              Lb[Bb++] = Ob;
              break
            }
            Ob += Sb, Lb[Bb] = Ob
          }
          for (; Bb < Gb; Bb++) Lb[Bb] = bb[Bb];
          return Xb(Lb), Lb
        }

        function Cb(bb, ub, Bb) {
          var Ob, Gb, Ub = bb.length,
            Lb = new Array(Ub),
            ab = -ub,
            Hb = hb;
          for (Ob = 0; Ob < Ub; Ob++) Gb = bb[Ob] + ab, ab = Math.floor(Gb / Hb), Gb %= Hb, Lb[Ob] = Gb < 0 ? Gb + Hb : Gb;
          return "number" === typeof(Lb = Zb(Lb)) ? (Bb && (Lb = -Lb), new Sb(Lb)) : new Yb(Lb, Bb)
        }

        function db(bb, ub) {
          var Bb, Ob, Gb, Ub, Lb = bb.length,
            Yb = ub.length,
            Sb = pb(Lb + Yb),
            ab = hb;
          for (Gb = 0; Gb < Lb; ++Gb) {
            Ub = bb[Gb];
            for (var Hb = 0; Hb < Yb; ++Hb) Bb = Ub * ub[Hb] + Sb[Gb + Hb], Ob = Math.floor(Bb / ab), Sb[Gb + Hb] = Bb - Ob * ab, Sb[Gb + Hb + 1] += Ob
          }
          return Xb(Sb), Sb
        }

        function rb(bb, ub) {
          var Bb, Ob, Gb = bb.length,
            Ub = new Array(Gb),
            Lb = hb,
            Yb = 0;
          for (Ob = 0; Ob < Gb; Ob++) Bb = bb[Ob] * ub + Yb, Yb = Math.floor(Bb / Lb), Ub[Ob] = Bb - Yb * Lb;
          for (; Yb > 0;) Ub[Ob++] = Yb % Lb, Yb = Math.floor(Yb / Lb);
          return Ub
        }

        function jb(bb, ub) {
          for (var hb = []; ub-- > 0;) hb.push(0);
          return hb.concat(bb)
        }

        function nb(bb, ub) {
          var hb = Math.max(bb.length, ub.length);
          if (hb <= 30) return db(bb, ub);
          hb = Math.ceil(hb / 2);
          var Bb = bb.slice(hb),
            Ob = bb.slice(0, hb),
            Gb = ub.slice(hb),
            Ub = ub.slice(0, hb),
            Lb = nb(Ob, Ub),
            Yb = nb(Bb, Gb),
            Sb = nb(lb(Ob, Bb), lb(Ub, Gb)),
            ab = lb(lb(Lb, jb(Wb(Wb(Sb, Lb), Yb), hb)), jb(Yb, 2 * hb));
          return Xb(ab), ab
        }

        function Db(bb, ub, Bb) {
          return new Yb(bb < hb ? rb(ub, bb) : db(ub, wb(bb)), Bb)
        }

        function xb(bb) {
          var ub, Bb, Ob, Gb, Ub = bb.length,
            Lb = pb(Ub + Ub),
            Yb = hb;
          for (Ob = 0; Ob < Ub; Ob++) {
            Bb = 0 - (Gb = bb[Ob]) * Gb;
            for (var Sb = Ob; Sb < Ub; Sb++) ub = Gb * bb[Sb] * 2 + Lb[Ob + Sb] + Bb, Bb = Math.floor(ub / Yb), Lb[Ob + Sb] = ub - Bb * Yb;
            Lb[Ob + Ub] = Bb
          }
          return Xb(Lb), Lb
        }

        function zb(bb, ub) {
          var Bb, Ob, Gb, Ub, Lb = bb.length,
            Yb = pb(Lb),
            Sb = hb;
          for (Gb = 0, Bb = Lb - 1; Bb >= 0; --Bb) Gb = (Ub = Gb * Sb + bb[Bb]) - (Ob = ob(Ub / ub)) * ub, Yb[Bb] = 0 | Ob;
          return [Yb, 0 | Gb]
        }

        function gb(bb, ub) {
          var Bb, Ob = cb(ub);
          if (Ub) return [new ab(bb.value / Ob.value), new ab(bb.value % Ob.value)];
          var Gb, Hb = bb.value,
            Ab = Ob.value;
          if (0 === Ab) throw new Error("Cannot divide by zero");
          if (bb.isSmall) return Ob.isSmall ? [new Sb(ob(Hb / Ab)), new Sb(Hb % Ab)] : [Lb[0], bb];
          if (Ob.isSmall) {
            if (1 === Ab) return [bb, Lb[0]];
            if (-1 == Ab) return [bb.AO(), Lb[0]];
            var lb = Math.abs(Ab);
            if (lb < hb) {
              Gb = Zb((Bb = zb(Hb, lb))[0]);
              var Kb = Bb[1];
              return bb.sign && (Kb = -Kb), "number" === typeof Gb ? (bb.sign !== Ob.sign && (Gb = -Gb), [new Sb(Gb), new Sb(Kb)]) : [new Yb(Gb, bb.sign !== Ob.sign), new Sb(Kb)]
            }
            Ab = wb(lb)
          }
          var Cb = ib(Hb, Ab);
          if (-1 === Cb) return [Lb[0], bb];
          if (0 === Cb) return [Lb[bb.sign === Ob.sign ? 1 : -1], Lb[0]];
          Bb = Hb.length + Ab.length <= 200 ? function(bb, ub) {
            var Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab = bb.length,
              Hb = ub.length,
              wb = hb,
              Xb = pb(ub.length),
              ob = ub[Hb - 1],
              Ab = Math.ceil(wb / (2 * ob)),
              lb = rb(bb, Ab),
              Kb = rb(ub, Ab);
            for (lb.length <= ab && lb.push(0), Kb.push(0), ob = Kb[Hb - 1], Ob = ab - Hb; Ob >= 0; Ob--) {
              for (Bb = wb - 1, lb[Ob + Hb] !== ob && (Bb = Math.floor((lb[Ob + Hb] * wb + lb[Ob + Hb - 1]) / ob)), Gb = 0, Ub = 0, Yb = Kb.length, Lb = 0; Lb < Yb; Lb++) Gb += Bb * Kb[Lb], Sb = Math.floor(Gb / wb), Ub += lb[Ob + Lb] - (Gb - Sb * wb), Gb = Sb, Ub < 0 ? (lb[Ob + Lb] = Ub + wb, Ub = -1) : (lb[Ob + Lb] = Ub, Ub = 0);
              for (; 0 !== Ub;) {
                for (Bb -= 1, Gb = 0, Lb = 0; Lb < Yb; Lb++)(Gb += lb[Ob + Lb] - wb + Kb[Lb]) < 0 ? (lb[Ob + Lb] = Gb + wb, Gb = 0) : (lb[Ob + Lb] = Gb, Gb = 1);
                Ub += Gb
              }
              Xb[Ob] = Bb
            }
            return lb = zb(lb, Ab)[0], [Zb(Xb), Zb(lb)]
          }(Hb, Ab) : function(bb, ub) {
            for (var Bb, Ob, Gb, Ub, Lb, Yb = bb.length, Sb = ub.length, ab = [], Hb = [], wb = hb; Yb;)
              if (Hb.unshift(bb[--Yb]), Xb(Hb), ib(Hb, ub) < 0) ab.push(0);
              else {
                Gb = Hb[(Ob = Hb.length) - 1] * wb + Hb[Ob - 2], Ub = ub[Sb - 1] * wb + ub[Sb - 2], Ob > Sb && (Gb = (Gb + 1) * wb), Bb = Math.ceil(Gb / Ub);
                do {
                  if (ib(Lb = rb(ub, Bb), Hb) <= 0) break;
                  Bb--
                } while (Bb);
                ab.push(Bb), Hb = Wb(Hb, Lb)
              } return ab.reverse(), [Zb(ab), Zb(Hb)]
          }(Hb, Ab), Gb = Bb[0];
          var db = bb.sign !== Ob.sign,
            jb = Bb[1],
            nb = bb.sign;
          return "number" === typeof Gb ? (db && (Gb = -Gb), Gb = new Sb(Gb)) : Gb = new Yb(Gb, db), "number" === typeof jb ? (nb && (jb = -jb), jb = new Sb(jb)) : jb = new Yb(jb, nb), [Gb, jb]
        }

        function ib(bb, ub) {
          if (bb.length !== ub.length) return bb.length > ub.length ? 1 : -1;
          for (var hb = bb.length - 1; hb >= 0; hb--)
            if (bb[hb] !== ub[hb]) return bb[hb] > ub[hb] ? 1 : -1;
          return 0
        }

        function vb(bb) {
          var ub = bb.abs();
          return !ub.isUnit() && (!!(ub.equals(2) || ub.equals(3) || ub.equals(5)) || !(ub.isEven() || ub.isDivisibleBy(3) || ub.isDivisibleBy(5)) && (!!ub.lesser(49) || void 0))
        }

        function tb(bb, hb) {
          for (var Bb, Ob, Gb, Ub = bb.prev(), Lb = Ub, Yb = 0; Lb.isEven();) Lb = Lb.divide(2), Yb++;
          bb: for (Ob = 0; Ob < hb.length; Ob++)
            if (!bb.lesser(hb[Ob]) && !(Gb = ub(hb[Ob]).modPow(Lb, bb)).isUnit() && !Gb.equals(Ub)) {
              for (Bb = Yb - 1; 0 != Bb; Bb--) {
                if ((Gb = Gb.square().mod(bb)).isUnit()) return !1;
                if (Gb.equals(Ub)) continue bb
              }
              return !1
            }
          return !0
        }
        Yb.prototype = Object.create(Lb.prototype), Sb.prototype = Object.create(Lb.prototype), ab.prototype = Object.create(Lb.prototype), Yb.prototype.add = function(bb) {
          var ub = cb(bb);
          if (this.sign !== ub.sign) return this.subtract(ub.AO());
          var hb = this.value,
            Bb = ub.value;
          return ub.isSmall ? new Yb(Kb(hb, Math.abs(Bb)), this.sign) : new Yb(lb(hb, Bb), this.sign)
        }, Yb.prototype.plus = Yb.prototype.add, Sb.prototype.add = function(bb) {
          var ub = cb(bb),
            hb = this.value;
          if (hb < 0 !== ub.sign) return this.subtract(ub.AO());
          var Bb = ub.value;
          if (ub.isSmall) {
            if (Hb(hb + Bb)) return new Sb(hb + Bb);
            Bb = wb(Math.abs(Bb))
          }
          return new Yb(Kb(Bb, Math.abs(hb)), hb < 0)
        }, Sb.prototype.plus = Sb.prototype.add, ab.prototype.add = function(bb) {
          return new ab(this.value + cb(bb).value)
        }, ab.prototype.plus = ab.prototype.add, Yb.prototype.subtract = function(bb) {
          var ub = cb(bb);
          if (this.sign !== ub.sign) return this.add(ub.AO());
          var hb = this.value,
            Bb = ub.value;
          return ub.isSmall ? Cb(hb, Math.abs(Bb), this.sign) : function(bb, ub, hb) {
            var Bb;
            return ib(bb, ub) >= 0 ? Bb = Wb(bb, ub) : (Bb = Wb(ub, bb), hb = !hb), "number" === typeof(Bb = Zb(Bb)) ? (hb && (Bb = -Bb), new Sb(Bb)) : new Yb(Bb, hb)
          }(hb, Bb, this.sign)
        }, Yb.prototype.minus = Yb.prototype.subtract, Sb.prototype.subtract = function(bb) {
          var ub = cb(bb),
            hb = this.value;
          if (hb < 0 !== ub.sign) return this.add(ub.AO());
          var Bb = ub.value;
          return ub.isSmall ? new Sb(hb - Bb) : Cb(Bb, Math.abs(hb), hb >= 0)
        }, Sb.prototype.minus = Sb.prototype.subtract, ab.prototype.subtract = function(bb) {
          return new ab(this.value - cb(bb).value)
        }, ab.prototype.minus = ab.prototype.subtract, Yb.prototype.AO = function() {
          return new Yb(this.value, !this.sign)
        }, Sb.prototype.AO = function() {
          var bb = this.sign,
            ub = new Sb(-this.value);
          return ub.sign = !bb, ub
        }, ab.prototype.AO = function() {
          return new ab(-this.value)
        }, Yb.prototype.abs = function() {
          return new Yb(this.value, !1)
        }, Sb.prototype.abs = function() {
          return new Sb(Math.abs(this.value))
        }, ab.prototype.abs = function() {
          return new ab(this.value >= 0 ? this.value : -this.value)
        }, Yb.prototype.multiply = function(bb) {
          var ub, Bb, Ob, Gb = cb(bb),
            Ub = this.value,
            Sb = Gb.value,
            ab = this.sign !== Gb.sign;
          if (Gb.isSmall) {
            if (0 === Sb) return Lb[0];
            if (1 === Sb) return this;
            if (-1 === Sb) return this.AO();
            if ((ub = Math.abs(Sb)) < hb) return new Yb(rb(Ub, ub), ab);
            Sb = wb(ub)
          }
          return Bb = Ub.length, Ob = Sb.length, new Yb(-.012 * Bb - .012 * Ob + 15e-6 * Bb * Ob > 0 ? nb(Ub, Sb) : db(Ub, Sb), ab)
        }, Yb.prototype.times = Yb.prototype.multiply, Sb.prototype._multiplyBySmall = function(bb) {
          return Hb(bb.value * this.value) ? new Sb(bb.value * this.value) : Db(Math.abs(bb.value), wb(Math.abs(this.value)), this.sign !== bb.sign)
        }, Yb.prototype._multiplyBySmall = function(bb) {
          return 0 === bb.value ? Lb[0] : 1 === bb.value ? this : -1 === bb.value ? this.AO() : Db(Math.abs(bb.value), this.value, this.sign !== bb.sign)
        }, Sb.prototype.multiply = function(bb) {
          return cb(bb)._multiplyBySmall(this)
        }, Sb.prototype.times = Sb.prototype.multiply, ab.prototype.multiply = function(bb) {
          return new ab(this.value * cb(bb).value)
        }, ab.prototype.times = ab.prototype.multiply, Yb.prototype.square = function() {
          return new Yb(xb(this.value), !1)
        }, Sb.prototype.square = function() {
          var bb = this.value * this.value;
          return Hb(bb) ? new Sb(bb) : new Yb(xb(wb(Math.abs(this.value))), !1)
        }, ab.prototype.square = function(bb) {
          return new ab(this.value * this.value)
        }, Yb.prototype.divmod = function(bb) {
          var ub = gb(this, bb);
          return {
            quotient: ub[0],
            remainder: ub[1]
          }
        }, ab.prototype.divmod = Sb.prototype.divmod = Yb.prototype.divmod, Yb.prototype.divide = function(bb) {
          return gb(this, bb)[0]
        }, ab.prototype.over = ab.prototype.divide = function(bb) {
          return new ab(this.value / cb(bb).value)
        }, Sb.prototype.over = Sb.prototype.divide = Yb.prototype.over = Yb.prototype.divide, Yb.prototype.mod = function(bb) {
          return gb(this, bb)[1]
        }, ab.prototype.mod = ab.prototype.remainder = function(bb) {
          return new ab(this.value % cb(bb).value)
        }, Sb.prototype.remainder = Sb.prototype.mod = Yb.prototype.remainder = Yb.prototype.mod, Yb.prototype.pow = function(bb) {
          var ub, hb, Bb, Ob = cb(bb),
            Gb = this.value,
            Ub = Ob.value;
          if (0 === Ub) return Lb[1];
          if (0 === Gb) return Lb[0];
          if (1 === Gb) return Lb[1];
          if (-1 === Gb) return Ob.isEven() ? Lb[1] : Lb[-1];
          if (Ob.sign) return Lb[0];
          if (!Ob.isSmall) throw new Error("The exponent " + Ob.toString() + " is too large.");
          if (this.isSmall && Hb(ub = Math.pow(Gb, Ub))) return new Sb(ob(ub));
          for (hb = this, Bb = Lb[1]; !0 & Ub && (Bb = Bb.times(hb), --Ub), 0 !== Ub;) Ub /= 2, hb = hb.square();
          return Bb
        }, Sb.prototype.pow = Yb.prototype.pow, ab.prototype.pow = function(bb) {
          var ub = cb(bb),
            hb = this.value,
            Bb = ub.value,
            Ob = BigInt(0),
            Gb = BigInt(1),
            Ub = BigInt(2);
          if (Bb === Ob) return Lb[1];
          if (hb === Ob) return Lb[0];
          if (hb === Gb) return Lb[1];
          if (hb === BigInt(-1)) return ub.isEven() ? Lb[1] : Lb[-1];
          if (ub.isNegative()) return new ab(Ob);
          for (var Yb = this, Sb = Lb[1];
            (Bb & Gb) === Gb && (Sb = Sb.times(Yb), --Bb), Bb !== Ob;) Bb /= Ub, Yb = Yb.square();
          return Sb
        }, Yb.prototype.modPow = function(bb, ub) {
          if (bb = cb(bb), (ub = cb(ub)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var hb = Lb[1],
            Bb = this.mod(ub);
          for (bb.isNegative() && (bb = bb.multiply(Lb[-1]), Bb = Bb.modInv(ub)); bb.isPositive();) {
            if (Bb.isZero()) return Lb[0];
            bb.isOdd() && (hb = hb.multiply(Bb).mod(ub)), bb = bb.divide(2), Bb = Bb.square().mod(ub)
          }
          return hb
        }, ab.prototype.modPow = Sb.prototype.modPow = Yb.prototype.modPow, Yb.prototype.compareAbs = function(bb) {
          var ub = cb(bb),
            hb = this.value,
            Bb = ub.value;
          return ub.isSmall ? 1 : ib(hb, Bb)
        }, Sb.prototype.compareAbs = function(bb) {
          var ub = cb(bb),
            hb = Math.abs(this.value),
            Bb = ub.value;
          return ub.isSmall ? hb === (Bb = Math.abs(Bb)) ? 0 : hb > Bb ? 1 : -1 : -1
        }, ab.prototype.compareAbs = function(bb) {
          var ub = this.value,
            hb = cb(bb).value;
          return (ub = ub >= 0 ? ub : -ub) === (hb = hb >= 0 ? hb : -hb) ? 0 : ub > hb ? 1 : -1
        }, Yb.prototype.compare = function(bb) {
          if (bb === 1 / 0) return -1;
          if (bb === -1 / 0) return 1;
          var ub = cb(bb),
            hb = this.value,
            Bb = ub.value;
          return this.sign !== ub.sign ? ub.sign ? 1 : -1 : ub.isSmall ? this.sign ? -1 : 1 : ib(hb, Bb) * (this.sign ? -1 : 1)
        }, Yb.prototype.compareTo = Yb.prototype.compare, Sb.prototype.compare = function(bb) {
          if (bb === 1 / 0) return -1;
          if (bb === -1 / 0) return 1;
          var ub = cb(bb),
            hb = this.value,
            Bb = ub.value;
          return ub.isSmall ? hb == Bb ? 0 : hb > Bb ? 1 : -1 : hb < 0 !== ub.sign ? hb < 0 ? -1 : 1 : hb < 0 ? 1 : -1
        }, Sb.prototype.compareTo = Sb.prototype.compare, ab.prototype.compare = function(bb) {
          if (bb === 1 / 0) return -1;
          if (bb === -1 / 0) return 1;
          var ub = this.value,
            hb = cb(bb).value;
          return ub === hb ? 0 : ub > hb ? 1 : -1
        }, ab.prototype.compareTo = ab.prototype.compare, Yb.prototype.equals = function(bb) {
          return 0 === this.compare(bb)
        }, ab.prototype.eq = ab.prototype.equals = Sb.prototype.eq = Sb.prototype.equals = Yb.prototype.eq = Yb.prototype.equals, Yb.prototype.notEquals = function(bb) {
          return 0 !== this.compare(bb)
        }, ab.prototype.neq = ab.prototype.notEquals = Sb.prototype.neq = Sb.prototype.notEquals = Yb.prototype.neq = Yb.prototype.notEquals, Yb.prototype.greater = function(bb) {
          return this.compare(bb) > 0
        }, ab.prototype.gt = ab.prototype.greater = Sb.prototype.gt = Sb.prototype.greater = Yb.prototype.gt = Yb.prototype.greater, Yb.prototype.lesser = function(bb) {
          return this.compare(bb) < 0
        }, ab.prototype.lt = ab.prototype.lesser = Sb.prototype.lt = Sb.prototype.lesser = Yb.prototype.lt = Yb.prototype.lesser, Yb.prototype.greaterOrEquals = function(bb) {
          return this.compare(bb) >= 0
        }, ab.prototype.geq = ab.prototype.greaterOrEquals = Sb.prototype.geq = Sb.prototype.greaterOrEquals = Yb.prototype.geq = Yb.prototype.greaterOrEquals, Yb.prototype.lesserOrEquals = function(bb) {
          return this.compare(bb) <= 0
        }, ab.prototype.leq = ab.prototype.lesserOrEquals = Sb.prototype.leq = Sb.prototype.lesserOrEquals = Yb.prototype.leq = Yb.prototype.lesserOrEquals, Yb.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, Sb.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, ab.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, Yb.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, Sb.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, ab.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, Yb.prototype.isPositive = function() {
          return !this.sign
        }, Sb.prototype.isPositive = function() {
          return this.value > 0
        }, ab.prototype.isPositive = Sb.prototype.isPositive, Yb.prototype.isNegative = function() {
          return this.sign
        }, Sb.prototype.isNegative = function() {
          return this.value < 0
        }, ab.prototype.isNegative = Sb.prototype.isNegative, Yb.prototype.isUnit = function() {
          return !1
        }, Sb.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, ab.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, Yb.prototype.isZero = function() {
          return !1
        }, Sb.prototype.isZero = function() {
          return 0 === this.value
        }, ab.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, Yb.prototype.isDivisibleBy = function(bb) {
          var ub = cb(bb);
          return !ub.isZero() && (!!ub.isUnit() || (0 === ub.compareAbs(2) ? this.isEven() : this.mod(ub).isZero()))
        }, ab.prototype.isDivisibleBy = Sb.prototype.isDivisibleBy = Yb.prototype.isDivisibleBy, Yb.prototype.isPrime = function(hb) {
          var Bb = vb(this);
          if (Bb !== bb) return Bb;
          var Ob = this.abs(),
            Gb = Ob.bitLength();
          if (Gb <= 64) return tb(Ob, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var Ub = Math.log(2) * Gb.toJSNumber(), Lb = Math.ceil(!0 === hb ? 2 * Math.pow(Ub, 2) : Ub), Yb = [], Sb = 0; Sb < Lb; Sb++) Yb.push(ub(Sb + 2));
          return tb(Ob, Yb)
        }, ab.prototype.isPrime = Sb.prototype.isPrime = Yb.prototype.isPrime, Yb.prototype.isProbablePrime = function(hb, Bb) {
          var Ob = vb(this);
          if (Ob !== bb) return Ob;
          for (var Gb = this.abs(), Ub = hb === bb ? 5 : hb, Lb = [], Yb = 0; Yb < Ub; Yb++) Lb.push(ub.randBetween(2, Gb.minus(2), Bb));
          return tb(Gb, Lb)
        }, ab.prototype.isProbablePrime = Sb.prototype.isProbablePrime = Yb.prototype.isProbablePrime, Yb.prototype.modInv = function(bb) {
          for (var hb, Bb, Ob, Gb = ub.zero, Ub = ub.one, Lb = cb(bb), Yb = this.abs(); !Yb.isZero();) hb = Lb.divide(Yb), Bb = Gb, Ob = Lb, Gb = Ub, Lb = Yb, Ub = Bb.subtract(hb.multiply(Ub)), Yb = Ob.subtract(hb.multiply(Yb));
          if (!Lb.isUnit()) throw new Error(this.toString() + " and " + bb.toString() + " are not co-prime");
          return -1 === Gb.compare(0) && (Gb = Gb.add(bb)), this.isNegative() ? Gb.AO() : Gb
        }, ab.prototype.modInv = Sb.prototype.modInv = Yb.prototype.modInv, Yb.prototype.next = function() {
          var bb = this.value;
          return this.sign ? Cb(bb, 1, this.sign) : new Yb(Kb(bb, 1), this.sign)
        }, Sb.prototype.next = function() {
          var bb = this.value;
          return bb + 1 < Bb ? new Sb(bb + 1) : new Yb(Ob, !1)
        }, ab.prototype.next = function() {
          return new ab(this.value + BigInt(1))
        }, Yb.prototype.prev = function() {
          var bb = this.value;
          return this.sign ? new Yb(Kb(bb, 1), !0) : Cb(bb, 1, this.sign)
        }, Sb.prototype.prev = function() {
          var bb = this.value;
          return bb - 1 > -Bb ? new Sb(bb - 1) : new Yb(Ob, !0)
        }, ab.prototype.prev = function() {
          return new ab(this.value - BigInt(1))
        };
        for (var Jb = [1]; 2 * Jb[Jb.length - 1] <= hb;) Jb.push(2 * Jb[Jb.length - 1]);
        var eb = Jb.length,
          Nb = Jb[eb - 1];

        function sb(bb) {
          return Math.abs(bb) <= hb
        }

        function Mb(bb, hb, Bb) {
          hb = cb(hb);
          for (var Ob = bb.isNegative(), Gb = hb.isNegative(), Ub = Ob ? bb.not() : bb, Lb = Gb ? hb.not() : hb, Yb = 0, Sb = 0, ab = null, Hb = null, wb = []; !Ub.isZero() || !Lb.isZero();) Yb = (ab = gb(Ub, Nb))[1].toJSNumber(), Ob && (Yb = Nb - 1 - Yb), Sb = (Hb = gb(Lb, Nb))[1].toJSNumber(), Gb && (Sb = Nb - 1 - Sb), Ub = ab[0], Lb = Hb[0], wb.push(Bb(Yb, Sb));
          for (var Zb = 0 !== Bb(Ob ? 1 : 0, Gb ? 1 : 0) ? ub(-1) : ub(0), Xb = wb.length - 1; Xb >= 0; Xb -= 1) Zb = Zb.multiply(Nb).add(ub(wb[Xb]));
          return Zb
        }
        Yb.prototype.shiftLeft = function(bb) {
          var ub = cb(bb).toJSNumber();
          if (!sb(ub)) throw new Error(String(ub) + " is too large for shifting.");
          if (ub < 0) return this.shiftRight(-ub);
          var hb = this;
          if (hb.isZero()) return hb;
          for (; ub >= eb;) hb = hb.multiply(Nb), ub -= eb - 1;
          return hb.multiply(Jb[ub])
        }, ab.prototype.shiftLeft = Sb.prototype.shiftLeft = Yb.prototype.shiftLeft, Yb.prototype.shiftRight = function(bb) {
          var ub, hb = cb(bb).toJSNumber();
          if (!sb(hb)) throw new Error(String(hb) + " is too large for shifting.");
          if (hb < 0) return this.shiftLeft(-hb);
          for (var Bb = this; hb >= eb;) {
            if (Bb.isZero() || Bb.isNegative() && Bb.isUnit()) return Bb;
            Bb = (ub = gb(Bb, Nb))[1].isNegative() ? ub[0].prev() : ub[0], hb -= eb - 1
          }
          return (ub = gb(Bb, Jb[hb]))[1].isNegative() ? ub[0].prev() : ub[0]
        }, ab.prototype.shiftRight = Sb.prototype.shiftRight = Yb.prototype.shiftRight, Yb.prototype.not = function() {
          return this.AO().prev()
        }, ab.prototype.not = Sb.prototype.not = Yb.prototype.not, Yb.prototype.and = function(bb) {
          return Mb(this, bb, (function(bb, ub) {
            return bb & ub
          }))
        }, ab.prototype.and = Sb.prototype.and = Yb.prototype.and, Yb.prototype.or = function(bb) {
          return Mb(this, bb, (function(bb, ub) {
            return bb | ub
          }))
        }, ab.prototype.or = Sb.prototype.or = Yb.prototype.or, Yb.prototype.xor = function(bb) {
          return Mb(this, bb, (function(bb, ub) {
            return bb ^ ub
          }))
        }, ab.prototype.xor = Sb.prototype.xor = Yb.prototype.xor;
        var mb = 1 << 30;

        function Ib(bb) {
          var ub = bb.value,
            Bb = "number" === typeof ub ? ub | mb : "bigint" === typeof ub ? ub | BigInt(mb) : ub[0] + ub[1] * hb | 1073758208;
          return Bb & -Bb
        }

        function Pb(bb, hb) {
          if (hb.compareTo(bb) <= 0) {
            var Bb = Pb(bb, hb.square(hb)),
              Ob = Bb.p,
              Gb = Bb.e,
              Ub = Ob.multiply(hb);
            return Ub.compareTo(bb) <= 0 ? {
              p: Ub,
              e: 2 * Gb + 1
            } : {
              p: Ob,
              e: 2 * Gb
            }
          }
          return {
            p: ub(1),
            e: 0
          }
        }

        function qb(bb, ub) {
          return bb = cb(bb), ub = cb(ub), bb.greater(ub) ? bb : ub
        }

        function Eb(bb, ub) {
          return bb = cb(bb), ub = cb(ub), bb.lesser(ub) ? bb : ub
        }

        function yb(bb, ub) {
          if (bb = cb(bb).abs(), ub = cb(ub).abs(), bb.equals(ub)) return bb;
          if (bb.isZero()) return ub;
          if (ub.isZero()) return bb;
          for (var hb, Bb, Ob = Lb[1]; bb.isEven() && ub.isEven();) hb = Eb(Ib(bb), Ib(ub)), bb = bb.divide(hb), ub = ub.divide(hb), Ob = Ob.multiply(hb);
          for (; bb.isEven();) bb = bb.divide(Ib(bb));
          do {
            for (; ub.isEven();) ub = ub.divide(Ib(ub));
            bb.greater(ub) && (Bb = ub, ub = bb, bb = Bb), ub = ub.subtract(bb)
          } while (!ub.isZero());
          return Ob.isUnit() ? bb : bb.multiply(Ob)
        }
        Yb.prototype.bitLength = function() {
          var bb = this;
          return bb.compareTo(ub(0)) < 0 && (bb = bb.AO().subtract(ub(1))), 0 === bb.compareTo(ub(0)) ? ub(0) : ub(Pb(bb, ub(2)).e).add(ub(1))
        }, ab.prototype.bitLength = Sb.prototype.bitLength = Yb.prototype.bitLength;
        var Vb = function(bb, ub, hb, Bb) {
          hb = hb || Gb, bb = String(bb), Bb || (bb = bb.toLowerCase(), hb = hb.toLowerCase());
          var Ob, Ub = bb.length,
            Lb = Math.abs(ub),
            Yb = {};
          for (Ob = 0; Ob < hb.length; Ob++) Yb[hb[Ob]] = Ob;
          for (Ob = 0; Ob < Ub; Ob++) {
            if ("-" !== (Hb = bb[Ob]) && (Hb in Yb && Yb[Hb] >= Lb)) {
              if ("1" === Hb && 1 === Lb) continue;
              throw new Error(Hb + " is not a valid digit in base " + ub + ".")
            }
          }
          ub = cb(ub);
          var Sb = [],
            ab = "-" === bb[0];
          for (Ob = ab ? 1 : 0; Ob < bb.length; Ob++) {
            var Hb;
            if ((Hb = bb[Ob]) in Yb) Sb.push(cb(Yb[Hb]));
            else {
              if ("<" !== Hb) throw new Error(Hb + " is not a valid character");
              var wb = Ob;
              do {
                Ob++
              } while (">" !== bb[Ob] && Ob < bb.length);
              Sb.push(cb(bb.slice(wb + 1, Ob)))
            }
          }
          return Fb(Sb, ub, ab)
        };

        function Fb(bb, ub, hb) {
          var Bb, Ob = Lb[0],
            Gb = Lb[1];
          for (Bb = bb.length - 1; Bb >= 0; Bb--) Ob = Ob.add(bb[Bb].times(Gb)), Gb = Gb.times(ub);
          return hb ? Ob.AO() : Ob
        }

        function fb(bb, hb) {
          if ((hb = ub(hb)).isZero()) {
            if (bb.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (hb.equals(-1)) {
            if (bb.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (bb.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-bb.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var Bb = Array.apply(null, Array(bb.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return Bb.unshift([1]), {
              value: [].concat.apply([], Bb),
              isNegative: !1
            }
          }
          var Ob = !1;
          if (bb.isNegative() && hb.isPositive() && (Ob = !0, bb = bb.abs()), hb.isUnit()) return bb.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(bb.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: Ob
          };
          for (var Gb, Ub = [], Lb = bb; Lb.isNegative() || Lb.compareAbs(hb) >= 0;) {
            Gb = Lb.divmod(hb), Lb = Gb.quotient;
            var Yb = Gb.remainder;
            Yb.isNegative() && (Yb = hb.minus(Yb).abs(), Lb = Lb.next()), Ub.push(Yb.toJSNumber())
          }
          return Ub.push(Lb.toJSNumber()), {
            value: Ub.reverse(),
            isNegative: Ob
          }
        }

        function kb(bb, ub, hb) {
          var Bb = fb(bb, ub);
          return (Bb.isNegative ? "-" : "") + Bb.value.map((function(bb) {
            return function(bb, ub) {
              return bb < (ub = ub || Gb).length ? ub[bb] : "<" + bb + ">"
            }(bb, hb)
          })).join("")
        }

        function Tb(bb) {
          if (Hb(+bb)) {
            var ub = +bb;
            if (ub === ob(ub)) return Ub ? new ab(BigInt(ub)) : new Sb(ub);
            throw new Error("Invalid integer: " + bb)
          }
          var hb = "-" === bb[0];
          hb && (bb = bb.slice(1));
          var Bb = bb.split(/e/i);
          if (Bb.length > 2) throw new Error("Invalid integer: " + Bb.join("e"));
          if (2 === Bb.length) {
            var Ob = Bb[1];
            if ("+" === Ob[0] && (Ob = Ob.slice(1)), (Ob = +Ob) !== ob(Ob) || !Hb(Ob)) throw new Error("Invalid integer: " + Ob + " is not a valid exponent.");
            var Gb = Bb[0],
              Lb = Gb.indexOf(".");
            if (Lb >= 0 && (Ob -= Gb.length - Lb - 1, Gb = Gb.slice(0, Lb) + Gb.slice(Lb + 1)), Ob < 0) throw new Error("Cannot include negative exponent part for integers");
            bb = Gb += new Array(Ob + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(bb)) throw new Error("Invalid integer: " + bb);
          if (Ub) return new ab(BigInt(hb ? "-" + bb : bb));
          for (var wb = [], Zb = bb.length, pb = Zb - 7; Zb > 0;) wb.push(+bb.slice(pb, Zb)), (pb -= 7) < 0 && (pb = 0), Zb -= 7;
          return Xb(wb), new Yb(wb, hb)
        }

        function cb(bb) {
          return "number" === typeof bb ? function(bb) {
            if (Ub) return new ab(BigInt(bb));
            if (Hb(bb)) {
              if (bb !== ob(bb)) throw new Error(bb + " is not an integer.");
              return new Sb(bb)
            }
            return Tb(bb.toString())
          }(bb) : "string" === typeof bb ? Tb(bb) : "bigint" === typeof bb ? new ab(bb) : bb
        }
        Yb.prototype.toArray = function(bb) {
          return fb(this, bb)
        }, Sb.prototype.toArray = function(bb) {
          return fb(this, bb)
        }, ab.prototype.toArray = function(bb) {
          return fb(this, bb)
        }, Yb.prototype.toString = function(ub, hb) {
          if (ub === bb && (ub = 10), 10 !== ub) return kb(this, ub, hb);
          for (var Bb, Ob = this.value, Gb = Ob.length, Ub = String(Ob[--Gb]); --Gb >= 0;) Bb = String(Ob[Gb]), Ub += "0000000".slice(Bb.length) + Bb;
          return (this.sign ? "-" : "") + Ub
        }, Sb.prototype.toString = function(ub, hb) {
          return ub === bb && (ub = 10), 10 != ub ? kb(this, ub, hb) : String(this.value)
        }, ab.prototype.toString = Sb.prototype.toString, ab.prototype.toJSON = Yb.prototype.toJSON = Sb.prototype.toJSON = function() {
          return this.toString()
        }, Yb.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, Yb.prototype.toJSNumber = Yb.prototype.valueOf, Sb.prototype.valueOf = function() {
          return this.value
        }, Sb.prototype.toJSNumber = Sb.prototype.valueOf, ab.prototype.valueOf = ab.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var Qb = 0; Qb < 1e3; Qb++) Lb[Qb] = cb(Qb), Qb > 0 && (Lb[-Qb] = cb(-Qb));
        return Lb.one = Lb[1], Lb.zero = Lb[0], Lb.minusOne = Lb[-1], Lb.max = qb, Lb.min = Eb, Lb.gcd = yb, Lb.lcm = function(bb, ub) {
          return bb = cb(bb).abs(), ub = cb(ub).abs(), bb.divide(yb(bb, ub)).multiply(ub)
        }, Lb.isInstance = function(bb) {
          return bb instanceof Yb || bb instanceof Sb || bb instanceof ab
        }, Lb.randBetween = function(bb, ub, Bb) {
          bb = cb(bb), ub = cb(ub);
          var Ob = Bb || Math.random,
            Gb = Eb(bb, ub),
            Ub = qb(bb, ub).subtract(Gb).add(1);
          if (Ub.isSmall) return Gb.add(Math.floor(Ob() * Ub));
          for (var Yb = fb(Ub, hb).value, Sb = [], ab = !0, Hb = 0; Hb < Yb.length; Hb++) {
            var wb = ab ? Yb[Hb] : hb,
              Zb = ob(Ob() * wb);
            Sb.push(Zb), Zb < wb && (ab = !1)
          }
          return Gb.add(Lb.Ohb(Sb, hb, !1))
        }, Lb.Ohb = function(bb, ub, hb) {
          return Fb(bb.map(cb), cb(ub || 10), hb)
        }, Lb
      }();
      bb.hasOwnProperty("exports") && (bb.exports = ub)
    }(lh);
    var Kh = Gb(lh.exports);

    function Wh(bb, ub, hb) {
      let Bb = 0;
      for (let Ob = 0; Ob < hb; Ob++) {
        const hb = bb[ub + Ob];
        if (void 0 === hb) break;
        Bb += hb * 16 ** Ob
      }
      return Bb
    }

    function Ch(bb) {
      const ub = [];
      for (let hb = 0; hb < bb.length; hb++) {
        let Bb = Number(bb[hb]);
        for (let bb = 0; Bb || bb < ub.length; bb++) Bb += 10 * (ub[bb] || 0), ub[bb] = Bb % 16, Bb = (Bb - ub[bb]) / 16
      }
      return ub
    }
    class dh {
      static fromString(bb) {
        return new dh(function(bb) {
          const ub = Ch(bb),
            hb = Array(4);
          for (let Bb = 0; Bb < 4; Bb++) hb[3 - Bb] = Wh(ub, 4 * Bb, 4);
          return hb
        }(bb), bb)
      }
      static fromBit(bb) {
        const ub = Array(4),
          hb = Math.floor(bb / 16);
        for (let Bb = 0; Bb < 4; Bb++) ub[3 - Bb] = Bb === hb ? 1 << bb - 16 * hb : 0;
        return new dh(ub)
      }
      constructor(bb, ub) {
        this.parts = bb, this.str = ub
      }
      and(bb) {
        let {
          parts: ub
        } = bb;
        return new dh(this.parts.map(((bb, hb) => bb & ub[hb])))
      }
      or(bb) {
        let {
          parts: ub
        } = bb;
        return new dh(this.parts.map(((bb, hb) => bb | ub[hb])))
      }
      xor(bb) {
        let {
          parts: ub
        } = bb;
        return new dh(this.parts.map(((bb, hb) => bb ^ ub[hb])))
      }
      not() {
        return new dh(this.parts.map((bb => ~bb)))
      }
      equals(bb) {
        let {
          parts: ub
        } = bb;
        return this.parts.every(((bb, hb) => bb === ub[hb]))
      }
      toString() {
        if (null != this.str) return this.str;
        const bb = new Array(16);
        return this.parts.forEach(((ub, hb) => {
          const Bb = Ch(ub.toString());
          for (let Ob = 0; Ob < 4; Ob++) bb[Ob + 4 * hb] = Bb[3 - Ob] || 0
        })), this.str = Kh.Ohb(bb, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const rh = function() {
      try {
        return BigInt, !0
      } catch (bb) {
        return !1
      }
    }();
    rh && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const jh = {},
      nh = rh ? function(bb) {
        return BigInt(bb)
      } : function(bb) {
        return bb instanceof dh ? bb : ("number" === typeof bb && (bb = bb.toString()), null != jh[bb] || (jh[bb] = dh.fromString(bb)), jh[bb])
      },
      Dh = nh(0),
      xh = rh ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dh) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dh)
      } : function() {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dh;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dh).and(bb)
      },
      zh = rh ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dh) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dh)
      } : function() {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dh;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dh).or(bb)
      },
      gh = rh ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dh) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dh)
      } : function() {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dh;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dh).xor(bb)
      },
      ih = rh ? function(bb, ub) {
        return bb === ub
      } : function(bb, ub) {
        return null == bb || null == ub ? bb == ub : bb.equals(ub)
      };
    var vh, th, Jh, eh, Nh = {
      combine: function() {
        let bb = arguments.length <= 0 ? void 0 : arguments[0];
        for (let ub = 1; ub < arguments.length; ub++) bb = zh(bb, ub < 0 || arguments.length <= ub ? void 0 : arguments[ub]);
        return bb
      },
      add: function(bb, ub) {
        return ub === Dh ? bb : zh(bb, ub)
      },
      remove: function(bb, ub) {
        return ub === Dh ? bb : gh(bb, xh(bb, ub))
      },
      filter: xh,
      invert: rh ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dh)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Dh).not()
      },
      has: function(bb, ub) {
        return ih(xh(bb, ub), ub)
      },
      hasAny: function(bb, ub) {
        return !ih(xh(bb, ub), Dh)
      },
      equals: ih,
      deserialize: nh,
      getFlag: rh ? function(bb) {
        return BigInt(1) << BigInt(bb)
      } : function(bb) {
        return dh.fromBit(bb)
      }
    };
    ! function(bb) {
      bb[bb.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", bb[bb.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", bb[bb.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", bb[bb.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", bb[bb.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", bb[bb.RATELIMITED = 4002] = "RATELIMITED", bb[bb.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", bb[bb.INVALID_VERSION = 4004] = "INVALID_VERSION", bb[bb.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(vh || (vh = {})),
    function(bb) {
      bb[bb.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", bb[bb.INVALID_COMMAND = 4002] = "INVALID_COMMAND", bb[bb.INVALID_EVENT = 4004] = "INVALID_EVENT", bb[bb.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(th || (th = {})),
    function(bb) {
      bb.LANDSCAPE = "landscape", bb.PORTRAIT = "portrait"
    }(Jh || (Jh = {})),
    function(bb) {
      bb.MOBILE = "mobile", bb.DESKTOP = "desktop"
    }(eh || (eh = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: Nh.getFlag(0),
      ADMINISTRATOR: Nh.getFlag(3)
    });

    function sh(bb) {
      return Zh((ub => {
        var hb;
        const [Bb] = null !== (hb = Object.entries(bb).find((bb => {
          let [, hb] = bb;
          return hb === ub
        }))) && void 0 !== hb ? hb : [];
        return null != ub && void 0 === Bb ? bb.UNHANDLED : ub
      }), Ju().or(eu()))
    }
    const Mh = Ah.object({
        image_url: Ah.string()
      }),
      mh = Ah.object({
        mediaUrl: Ah.string().max(1024)
      }),
      Ih = Ah.object({
        access_token: Ah.union([Ah.string(), Ah.null()]).optional()
      }),
      Ph = Ah.object({
        access_token: Ah.string(),
        user: Ah.object({
          username: Ah.string(),
          discriminator: Ah.string(),
          id: Ah.string(),
          avatar: Ah.union([Ah.string(), Ah.null()]).optional(),
          public_flags: Ah.number(),
          global_name: Ah.union([Ah.string(), Ah.null()]).optional()
        }),
        scopes: Ah.array(function(bb) {
          const ub = iu().transform((ub => {
            const hb = bb.safeParse(ub);
            return hb.success ? hb.data : bb._def.defaultValue()
          }));
          return ub.overlayType = bb, ub
        }(Ah.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(Ah.literal(-1)).default(-1))),
        expires: Ah.string(),
        application: Ah.object({
          description: Ah.string(),
          icon: Ah.union([Ah.string(), Ah.null()]).optional(),
          id: Ah.string(),
          rpc_origins: Ah.array(Ah.string()).optional(),
          name: Ah.string()
        })
      }),
      qh = Ah.object({
        participants: Ah.array(Ah.object({
          id: Ah.string(),
          username: Ah.string(),
          global_name: Ah.union([Ah.string(), Ah.null()]).optional(),
          discriminator: Ah.string(),
          avatar: Ah.union([Ah.string(), Ah.null()]).optional(),
          flags: Ah.number(),
          bot: Ah.boolean(),
          avatar_decoration_data: Ah.union([Ah.object({
            asset: Ah.string(),
            skuId: Ah.string().optional()
          }), Ah.null()]).optional(),
          premium_type: Ah.union([Ah.number(), Ah.null()]).optional(),
          nickname: Ah.string().optional()
        }))
      });
    var Eh;
    ! function(bb) {
      bb.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", bb.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", bb.AUTHENTICATE = "AUTHENTICATE", bb.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Eh || (Eh = {}));
    const yh = Ah.object({}).optional().nullable(),
      Vh = Ah.void(),
      Fh = {
        [Eh.INITIATE_IMAGE_UPLOAD]: {
          request: Vh,
          response: Mh
        },
        [Eh.OPEN_SHARE_MOMENT_DIALOG]: {
          request: mh,
          response: yh
        },
        [Eh.AUTHENTICATE]: {
          request: Ih,
          response: Ph
        },
        [Eh.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: Vh,
          response: qh
        }
      },
      fh = "DISPATCH";
    var kh;
    ! function(bb) {
      bb.AUTHORIZE = "AUTHORIZE", bb.AUTHENTICATE = "AUTHENTICATE", bb.GET_GUILDS = "GET_GUILDS", bb.GET_GUILD = "GET_GUILD", bb.GET_CHANNEL = "GET_CHANNEL", bb.GET_CHANNELS = "GET_CHANNELS", bb.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", bb.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", bb.SUBSCRIBE = "SUBSCRIBE", bb.UNSUBSCRIBE = "UNSUBSCRIBE", bb.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", bb.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", bb.SET_ACTIVITY = "SET_ACTIVITY", bb.GET_SKUS = "GET_SKUS", bb.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", bb.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", bb.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", bb.START_PURCHASE = "START_PURCHASE", bb.SET_CONFIG = "SET_CONFIG", bb.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", bb.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", bb.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", bb.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", bb.CAPTURE_LOG = "CAPTURE_LOG", bb.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", bb.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", bb.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", bb.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", bb.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", bb.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", bb.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(kh || (kh = {}));
    const Th = ku({
        cmd: Ju(),
        data: yu(),
        evt: qu(),
        nonce: Ju()
      }).passthrough(),
      ch = (sh(Object.assign(Object.assign({}, Ph.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), ku({
        id: Ju(),
        username: Ju(),
        discriminator: Ju(),
        global_name: Ju().optional().nullable(),
        avatar: Ju().optional().nullable(),
        avatar_decoration_data: ku({
          asset: Ju(),
          sku_id: Ju().optional()
        }).nullable(),
        bot: Mu(),
        flags: eu().optional().nullable(),
        premium_type: eu().optional().nullable()
      })),
      Qh = ku({
        user: ch,
        nick: Ju().optional().nullable(),
        roles: fu(Ju()),
        joined_at: Ju(),
        deaf: Mu(),
        mute: Mu()
      }),
      Rh = ku({
        id: Ju(),
        name: Ju().optional().nullable(),
        roles: fu(Ju()).optional().nullable(),
        user: ch.optional().nullable(),
        require_colons: Mu().optional().nullable(),
        managed: Mu().optional().nullable(),
        animated: Mu().optional().nullable(),
        available: Mu().optional().nullable()
      }),
      bB = ku({
        mute: Mu(),
        deaf: Mu(),
        self_mute: Mu(),
        self_deaf: Mu(),
        suppress: Mu()
      }),
      uB = ku({
        mute: Mu(),
        nick: Ju(),
        user: ch,
        voice_state: bB,
        volume: eu()
      }),
      hB = sh({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      BB = ku({
        name: Ju(),
        type: eu(),
        url: Ju().optional().nullable(),
        created_at: eu().optional().nullable(),
        timestamps: ku({
          start: eu(),
          end: eu()
        }).partial().optional().nullable(),
        application_id: Ju().optional().nullable(),
        details: Ju().optional().nullable(),
        state: Ju().optional().nullable(),
        emoji: Rh.optional().nullable(),
        party: ku({
          id: Ju().optional().nullable(),
          size: fu(eu()).optional().nullable()
        }).optional().nullable(),
        assets: ku({
          large_image: Ju().nullable(),
          large_text: Ju().nullable(),
          small_image: Ju().nullable(),
          small_text: Ju().nullable()
        }).partial().optional().nullable(),
        secrets: ku({
          join: Ju(),
          match: Ju()
        }).partial().optional().nullable(),
        instance: Mu().optional().nullable(),
        flags: eu().optional().nullable()
      }),
      OB = ku({
        id: Ju(),
        type: sh({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: Ju(),
        deny: Ju()
      }),
      GB = {
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
      UB = ku({
        id: Ju(),
        type: sh(GB),
        guild_id: Ju().optional().nullable(),
        position: eu().optional().nullable(),
        permission_overwrites: fu(OB).optional().nullable(),
        name: Ju().optional().nullable(),
        topic: Ju().optional().nullable(),
        nsfw: Mu().optional().nullable(),
        last_message_id: Ju().optional().nullable(),
        bitrate: eu().optional().nullable(),
        user_limit: eu().optional().nullable(),
        rate_limit_per_user: eu().optional().nullable(),
        recipients: fu(ch).optional().nullable(),
        icon: Ju().optional().nullable(),
        owner_id: Ju().optional().nullable(),
        application_id: Ju().optional().nullable(),
        parent_id: Ju().optional().nullable(),
        last_pin_timestamp: Ju().optional().nullable()
      }),
      LB = ku({
        user: ch,
        guild_id: Ju(),
        status: hB,
        activities: fu(BB),
        client_status: ku({
          desktop: hB,
          mobile: hB,
          web: hB
        }).partial()
      }),
      YB = ku({
        id: Ju(),
        name: Ju(),
        color: eu(),
        hoist: Mu(),
        position: eu(),
        permissions: Ju(),
        managed: Mu(),
        mentionable: Mu()
      }),
      SB = (ku({
        id: Ju(),
        name: Ju(),
        owner_id: Ju(),
        icon: Ju().nullable(),
        icon_hash: Ju().optional().nullable(),
        splash: Ju().nullable(),
        discovery_splash: Ju().nullable(),
        owner: Mu().optional().nullable(),
        permissions: Ju().optional().nullable(),
        region: Ju(),
        afk_channel_id: Ju().nullable(),
        afk_timeout: eu(),
        widget_enabled: Mu().optional().nullable(),
        widget_channel_id: Ju().optional().nullable(),
        verification_level: eu(),
        default_message_notifications: eu(),
        explicit_content_filter: eu(),
        roles: fu(YB),
        emojis: fu(Rh),
        features: fu(Ju()),
        mfa_level: eu(),
        application_id: Ju().nullable(),
        system_channel_id: Ju().nullable(),
        system_channel_flags: eu(),
        rules_channel_id: Ju().nullable(),
        joined_at: Ju().optional().nullable(),
        large: Mu().optional().nullable(),
        unavailable: Mu().optional().nullable(),
        member_count: eu().optional().nullable(),
        voice_states: fu(bB).optional().nullable(),
        members: fu(Qh).optional().nullable(),
        channels: fu(UB).optional().nullable(),
        presences: fu(LB).optional().nullable(),
        max_presences: eu().optional().nullable(),
        max_members: eu().optional().nullable(),
        vanity_url_code: Ju().nullable(),
        description: Ju().nullable(),
        banner: Ju().nullable(),
        premium_tier: eu(),
        premium_subscription_count: eu().optional().nullable(),
        preferred_locale: Ju(),
        public_updates_channel_id: Ju().nullable(),
        max_video_channel_users: eu().optional().nullable(),
        approximate_member_count: eu().optional().nullable(),
        approximate_presence_count: eu().optional().nullable()
      }), ku({
        id: Ju(),
        guild_id: Ju(),
        type: eu(),
        name: Ju()
      })),
      aB = ku({
        id: Ju(),
        filename: Ju(),
        size: eu(),
        url: Ju(),
        proxy_url: Ju(),
        height: eu().optional().nullable(),
        width: eu().optional().nullable()
      }),
      HB = ku({
        text: Ju(),
        icon_url: Ju().optional().nullable(),
        proxy_icon_url: Ju().optional().nullable()
      }),
      wB = ku({
        url: Ju().optional().nullable(),
        proxy_url: Ju().optional().nullable(),
        height: eu().optional().nullable(),
        width: eu().optional().nullable()
      }),
      ZB = wB.omit({
        proxy_url: !0
      }),
      XB = ku({
        name: Ju().optional().nullable(),
        url: Ju().optional().nullable()
      }),
      pB = ku({
        name: Ju().optional().nullable(),
        url: Ju().optional().nullable(),
        icon_url: Ju().optional().nullable(),
        proxy_icon_url: Ju().optional().nullable()
      }),
      oB = ku({
        name: Ju(),
        value: Ju(),
        inline: Mu()
      }),
      AB = ku({
        title: Ju().optional().nullable(),
        type: Ju().optional().nullable(),
        description: Ju().optional().nullable(),
        url: Ju().optional().nullable(),
        timestamp: Ju().optional().nullable(),
        color: eu().optional().nullable(),
        footer: HB.optional().nullable(),
        image: wB.optional().nullable(),
        thumbnail: wB.optional().nullable(),
        video: ZB.optional().nullable(),
        provider: XB.optional().nullable(),
        author: pB.optional().nullable(),
        fields: fu(oB).optional().nullable()
      }),
      lB = ku({
        count: eu(),
        me: Mu(),
        emoji: Rh
      }),
      KB = ku({
        type: eu(),
        party_id: Ju().optional().nullable()
      }),
      WB = ku({
        id: Ju(),
        cover_image: Ju().optional().nullable(),
        description: Ju(),
        icon: Ju().optional().nullable(),
        name: Ju()
      }),
      CB = ku({
        message_id: Ju().optional().nullable(),
        channel_id: Ju().optional().nullable(),
        guild_id: Ju().optional().nullable()
      }),
      dB = ku({
        id: Ju(),
        channel_id: Ju(),
        guild_id: Ju().optional().nullable(),
        author: ch.optional().nullable(),
        member: Qh.optional().nullable(),
        content: Ju(),
        timestamp: Ju(),
        edited_timestamp: Ju().optional().nullable(),
        tts: Mu(),
        mention_everyone: Mu(),
        mentions: fu(ch),
        mention_roles: fu(Ju()),
        mention_channels: fu(SB),
        attachments: fu(aB),
        embeds: fu(AB),
        reactions: fu(lB).optional().nullable(),
        nonce: cu([Ju(), eu()]).optional().nullable(),
        pinned: Mu(),
        webhook_id: Ju().optional().nullable(),
        type: eu(),
        activity: KB.optional().nullable(),
        application: WB.optional().nullable(),
        message_reference: CB.optional().nullable(),
        flags: eu().optional().nullable(),
        stickers: fu(yu()).optional().nullable(),
        referenced_message: yu().optional().nullable()
      }),
      rB = ku({
        id: Ju(),
        name: Ju()
      }),
      jB = ku({
        type: sh({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: eu(),
        name: Ju()
      }),
      nB = ku({
        type: sh({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: Mu(),
        threshold: eu(),
        shortcut: fu(jB),
        delay: eu()
      }),
      DB = ku({
        device_id: Ju(),
        volume: eu(),
        available_devices: fu(rB)
      }),
      xB = (ku({
        type: sh({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: Ju(),
        vendor: ku({
          name: Ju(),
          url: Ju()
        }),
        model: ku({
          name: Ju(),
          url: Ju()
        }),
        related: fu(Ju()),
        echo_cancellation: Mu().optional().nullable(),
        noise_suppression: Mu().optional().nullable(),
        automatic_gain_control: Mu().optional().nullable(),
        hardware_mute: Mu().optional().nullable()
      }), ku({
        id: Ju(),
        name: Ju(),
        type: sh({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: ku({
          amount: eu(),
          currency: Ju()
        }),
        application_id: Ju(),
        flags: eu(),
        release_date: Ju().nullable()
      })),
      zB = ku({
        id: Ju(),
        sku_id: Ju(),
        application_id: Ju(),
        user_id: Ju(),
        gift_code_flags: eu(),
        type: sh({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: Ju().optional().nullable(),
        branches: fu(Ju()).optional().nullable(),
        starts_at: Ju().optional().nullable(),
        ends_at: Ju().optional().nullable(),
        parent_id: Ju().optional().nullable(),
        consumed: Mu().optional().nullable(),
        deleted: Mu().optional().nullable(),
        gift_code_batch_id: Ju().optional().nullable()
      }),
      gB = (sh({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), sh({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      iB = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      vB = (sh(iB), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      tB = (sh(vB), "ERROR");
    var JB;
    ! function(bb) {
      bb.READY = "READY", bb.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", bb.SPEAKING_START = "SPEAKING_START", bb.SPEAKING_STOP = "SPEAKING_STOP", bb.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", bb.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", bb.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", bb.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", bb.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", bb.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(JB || (JB = {}));
    const eB = Th.extend({
        evt: Yh(JB),
        nonce: Ju().nullable(),
        cmd: Uh(fh),
        data: ku({}).passthrough()
      }),
      NB = Th.extend({
        evt: Uh(tB),
        data: ku({
          code: eu(),
          message: Ju().optional()
        }).passthrough(),
        cmd: Yh(kh),
        nonce: Ju().nullable()
      }),
      sB = eB.extend({
        evt: Ju()
      }),
      MB = cu([eB, sB, NB]);
    const mB = {
      [JB.READY]: {
        payload: eB.extend({
          evt: Uh(JB.READY),
          data: ku({
            v: eu(),
            config: ku({
              cdn_host: Ju().optional(),
              api_endpoint: Ju(),
              environment: Ju()
            }),
            user: ku({
              id: Ju(),
              username: Ju(),
              discriminator: Ju(),
              avatar: Ju().optional()
            }).optional()
          })
        })
      },
      [JB.VOICE_STATE_UPDATE]: {
        payload: eB.extend({
          evt: Uh(JB.VOICE_STATE_UPDATE),
          data: uB
        }),
        subscribeArgs: ku({
          channel_id: Ju()
        })
      },
      [JB.SPEAKING_START]: {
        payload: eB.extend({
          evt: Uh(JB.SPEAKING_START),
          data: ku({
            lobby_id: Ju().optional(),
            channel_id: Ju().optional(),
            user_id: Ju()
          })
        }),
        subscribeArgs: ku({
          lobby_id: Ju().nullable().optional(),
          channel_id: Ju().nullable().optional()
        })
      },
      [JB.SPEAKING_STOP]: {
        payload: eB.extend({
          evt: Uh(JB.SPEAKING_STOP),
          data: ku({
            lobby_id: Ju().optional(),
            channel_id: Ju().optional(),
            user_id: Ju()
          })
        }),
        subscribeArgs: ku({
          lobby_id: Ju().nullable().optional(),
          channel_id: Ju().nullable().optional()
        })
      },
      [JB.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: eB.extend({
          evt: Uh(JB.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: ku({
            layout_mode: sh(vB)
          })
        })
      },
      [JB.ORIENTATION_UPDATE]: {
        payload: eB.extend({
          evt: Uh(JB.ORIENTATION_UPDATE),
          data: ku({
            screen_orientation: sh(iB),
            orientation: Yh(Jh)
          })
        })
      },
      [JB.CURRENT_USER_UPDATE]: {
        payload: eB.extend({
          evt: Uh(JB.CURRENT_USER_UPDATE),
          data: ch
        })
      },
      [JB.ENTITLEMENT_CREATE]: {
        payload: eB.extend({
          evt: Uh(JB.ENTITLEMENT_CREATE),
          data: ku({
            entitlement: zB
          })
        })
      },
      [JB.THERMAL_STATE_UPDATE]: {
        payload: eB.extend({
          evt: Uh(JB.THERMAL_STATE_UPDATE),
          data: ku({
            thermal_state: gB
          })
        })
      },
      [JB.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: eB.extend({
          evt: Uh(JB.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: ku({
            participants: qh.shape.participants
          })
        })
      }
    };
    const IB = ku({}).nullable(),
      PB = ku({
        code: Ju()
      }),
      qB = ku({
        guilds: fu(ku({
          id: Ju(),
          name: Ju()
        }))
      }),
      EB = ku({
        id: Ju(),
        name: Ju(),
        icon_url: Ju().optional(),
        members: fu(Qh)
      }),
      yB = ku({
        id: Ju(),
        type: sh(GB),
        guild_id: Ju().optional().nullable(),
        name: Ju().optional().nullable(),
        topic: Ju().optional().nullable(),
        bitrate: eu().optional().nullable(),
        user_limit: eu().optional().nullable(),
        position: eu().optional().nullable(),
        voice_states: fu(uB),
        messages: fu(dB)
      }),
      VB = ku({
        channels: fu(UB)
      }),
      FB = (yB.nullable(), yB.nullable()),
      fB = yB.nullable(),
      kB = (ku({
        input: DB,
        output: DB,
        mode: nB,
        automatic_gain_control: Mu(),
        echo_cancellation: Mu(),
        noise_suppression: Mu(),
        qos: Mu(),
        silence_warning: Mu(),
        deaf: Mu(),
        mute: Mu()
      }), ku({
        evt: Ju()
      })),
      TB = ku({
        shortcut: jB
      }),
      cB = BB,
      QB = ku({
        skus: fu(xB)
      }),
      RB = ku({
        entitlements: fu(zB)
      }),
      bO = fu(zB).nullable(),
      uO = ku({
        use_interactive_pip: Mu()
      }),
      hO = ku({
        locale: Ju()
      }),
      BO = ku({
        enabled: Mu()
      }),
      OO = ku({
        permissions: su().or(Ju())
      }),
      GO = ku({
        iosKeyboardResizesView: Hh(Mu())
      }),
      UO = Th.extend({
        cmd: Yh(kh),
        evt: qu()
      });

    function LO(bb) {
      let {
        cmd: ub,
        data: hb
      } = bb;
      switch (ub) {
        case kh.AUTHORIZE:
          return PB.parse(hb);
        case kh.CAPTURE_SHORTCUT:
          return TB.parse(hb);
        case kh.ENCOURAGE_HW_ACCELERATION:
          return BO.parse(hb);
        case kh.GET_CHANNEL:
          return yB.parse(hb);
        case kh.GET_CHANNELS:
          return VB.parse(hb);
        case kh.GET_CHANNEL_PERMISSIONS:
          return OO.parse(hb);
        case kh.GET_GUILD:
          return EB.parse(hb);
        case kh.GET_GUILDS:
          return qB.parse(hb);
        case kh.GET_PLATFORM_BEHAVIORS:
          return GO.parse(hb);
        case kh.GET_CHANNEL:
          return yB.parse(hb);
        case kh.SELECT_TEXT_CHANNEL:
          return fB.parse(hb);
        case kh.SELECT_VOICE_CHANNEL:
          return FB.parse(hb);
        case kh.SET_ACTIVITY:
          return cB.parse(hb);
        case kh.GET_SKUS_EMBEDDED:
          return QB.parse(hb);
        case kh.GET_ENTITLEMENTS_EMBEDDED:
          return RB.parse(hb);
        case kh.SET_CONFIG:
          return uO.parse(hb);
        case kh.START_PURCHASE:
          return bO.parse(hb);
        case kh.SUBSCRIBE:
        case kh.UNSUBSCRIBE:
          return kB.parse(hb);
        case kh.USER_SETTINGS_GET_LOCALE:
          return hO.parse(hb);
        case kh.OPEN_EXTERNAL_LINK:
        case kh.SET_ORIENTATION_LOCK_STATE:
        case kh.SET_CERTIFIED_DEVICES:
        case kh.SEND_ANALYTICS_EVENT:
        case kh.OPEN_INVITE_DIALOG:
        case kh.CAPTURE_LOG:
        case kh.GET_SKUS:
        case kh.GET_ENTITLEMENTS:
          return IB.parse(hb);
        case kh.AUTHENTICATE:
        case kh.INITIATE_IMAGE_UPLOAD:
        case kh.OPEN_SHARE_MOMENT_DIALOG:
        case kh.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: bb
          } = Fh[ub];
          return bb.parse(hb);
        default:
          ! function(bb, ub) {
            throw ub
          }(0, new Error(`Unrecognized command ${ub}`))
      }
    }
    ku({
      frame_id: Ju(),
      platform: Yh(eh).optional().nullable()
    }), ku({
      v: Uh(1),
      encoding: Uh("json").optional(),
      client_id: Ju(),
      frame_id: Ju()
    });
    const YO = ku({
        code: eu(),
        message: Ju().optional()
      }),
      SO = ku({
        evt: Ju().nullable(),
        nonce: Ju().nullable(),
        data: yu().nullable(),
        cmd: Ju()
      }).passthrough();

    function aO(bb) {
      const ub = SO.parse(bb);
      return null != ub.evt ? ub.evt === tB ? NB.parse(ub) : function(bb) {
        const ub = bb.evt;
        if (!(ub in JB)) throw new Error(`Unrecognized event type ${bb.evt}`);
        return mB[ub].payload.parse(bb)
      }(MB.parse(ub)) : function(bb) {
        return Object.assign(Object.assign({}, bb), {
          data: LO(bb)
        })
      }(UO.passthrough().parse(ub))
    }

    function HO(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const Ob = Th.extend({
        cmd: Uh(ub),
        data: hb
      });
      return async hb => {
        const Gb = await bb({
          cmd: ub,
          args: hb,
          transfer: Bb(hb)
        });
        return Ob.parse(Gb).data
      }
    }

    function wO(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const hb = Fh[bb].response,
        Bb = Th.extend({
          cmd: Uh(bb),
          data: hb
        });
      return hb => async Ob => {
        const Gb = await hb({
          cmd: bb,
          args: Ob,
          transfer: ub(Ob)
        });
        return Bb.parse(Gb).data
      }
    }
    const ZO = wO(Eh.AUTHENTICATE),
      XO = bb => HO(bb, kh.AUTHORIZE, PB),
      pO = bb => HO(bb, kh.CAPTURE_LOG, IB),
      oO = bb => HO(bb, kh.ENCOURAGE_HW_ACCELERATION, BO),
      AO = bb => HO(bb, kh.GET_ENTITLEMENTS_EMBEDDED, RB),
      lO = bb => HO(bb, kh.GET_SKUS_EMBEDDED, QB),
      KO = bb => HO(bb, kh.GET_CHANNEL_PERMISSIONS, OO),
      WO = bb => HO(bb, kh.GET_PLATFORM_BEHAVIORS, GO),
      CO = bb => HO(bb, kh.OPEN_EXTERNAL_LINK, IB),
      dO = bb => HO(bb, kh.OPEN_INVITE_DIALOG, IB),
      rO = wO(Eh.OPEN_SHARE_MOMENT_DIALOG);
    BB.xw({
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
      type: BB.shape.type.optional(),
      instance: BB.shape.instance.optional()
    }).nullable();
    const jO = bb => HO(bb, kh.SET_ACTIVITY, cB),
      nO = bb => HO(bb, kh.SET_CONFIG, uO);
    const DO = bb => ({
        lock_state: bb.lock_state,
        picture_in_picture_lock_state: bb.picture_in_picture_lock_state
      }),
      xO = bb => function(bb) {
        let {
          sendCommand: ub,
          cmd: hb,
          response: Bb,
          fallbackTransform: Ob,
          transferTransform: Gb = () => {}
        } = bb;
        const Ub = Th.extend({
          cmd: Uh(hb),
          data: Bb
        });
        return async bb => {
          try {
            const Bb = await ub({
              cmd: hb,
              args: bb,
              transfer: Gb(bb)
            });
            return Ub.parse(Bb).data
          } catch (Bb) {
            if (Bb.code === th.INVALID_PAYLOAD) {
              const Bb = Ob(bb),
                Lb = await ub({
                  cmd: hb,
                  args: Bb,
                  transfer: Gb(Bb)
                });
              return Ub.parse(Lb).data
            }
            throw Bb
          }
        }
      }({
        sendCommand: bb,
        cmd: kh.SET_ORIENTATION_LOCK_STATE,
        response: IB,
        fallbackTransform: DO
      }),
      zO = bb => HO(bb, kh.START_PURCHASE, bO),
      gO = bb => HO(bb, kh.USER_SETTINGS_GET_LOCALE, hO),
      iO = wO(Eh.INITIATE_IMAGE_UPLOAD),
      vO = bb => HO(bb, kh.GET_CHANNEL, yB),
      tO = wO(Eh.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var JO = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function eO(bb) {
      return "string" === typeof bb && JO.test(bb)
    }
    for (var NO = [], sO = 0; sO < 256; ++sO) NO.push((sO + 256).toString(16).substr(1));

    function MO(bb) {
      var ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        hb = (NO[bb[ub + 0]] + NO[bb[ub + 1]] + NO[bb[ub + 2]] + NO[bb[ub + 3]] + "-" + NO[bb[ub + 4]] + NO[bb[ub + 5]] + "-" + NO[bb[ub + 6]] + NO[bb[ub + 7]] + "-" + NO[bb[ub + 8]] + NO[bb[ub + 9]] + "-" + NO[bb[ub + 10]] + NO[bb[ub + 11]] + NO[bb[ub + 12]] + NO[bb[ub + 13]] + NO[bb[ub + 14]] + NO[bb[ub + 15]]).toLowerCase();
      if (!eO(hb)) throw TypeError("Stringified UUID is invalid");
      return hb
    }
    var mO;

    function IO(bb, ub, hb) {
      function Bb(bb, Bb, Ob, Gb) {
        if ("string" === typeof bb && (bb = function(bb) {
            bb = unescape(encodeURIComponent(bb));
            for (var ub = [], hb = 0; hb < bb.length; ++hb) ub.push(bb.charCodeAt(hb));
            return ub
          }(bb)), "string" === typeof Bb && (Bb = function(bb) {
            if (!eO(bb)) throw TypeError("Invalid UUID");
            var ub, hb = new Uint8Array(16);
            return hb[0] = (ub = parseInt(bb.slice(0, 8), 16)) >>> 24, hb[1] = ub >>> 16 & 255, hb[2] = ub >>> 8 & 255, hb[3] = 255 & ub, hb[4] = (ub = parseInt(bb.slice(9, 13), 16)) >>> 8, hb[5] = 255 & ub, hb[6] = (ub = parseInt(bb.slice(14, 18), 16)) >>> 8, hb[7] = 255 & ub, hb[8] = (ub = parseInt(bb.slice(19, 23), 16)) >>> 8, hb[9] = 255 & ub, hb[10] = (ub = parseInt(bb.slice(24, 36), 16)) / 1099511627776 & 255, hb[11] = ub / 4294967296 & 255, hb[12] = ub >>> 24 & 255, hb[13] = ub >>> 16 & 255, hb[14] = ub >>> 8 & 255, hb[15] = 255 & ub, hb
          }(Bb)), 16 !== Bb.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var Ub = new Uint8Array(16 + bb.length);
        if (Ub.set(Bb), Ub.set(bb, Bb.length), (Ub = hb(Ub))[6] = 15 & Ub[6] | ub, Ub[8] = 63 & Ub[8] | 128, Ob) {
          Gb = Gb || 0;
          for (var Lb = 0; Lb < 16; ++Lb) Ob[Gb + Lb] = Ub[Lb];
          return Ob
        }
        return MO(Ub)
      }
      try {
        Bb.name = bb
      } catch (Ob) {}
      return Bb.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", Bb.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", Bb
    }

    function PO(bb) {
      return 14 + (bb + 64 >>> 9 << 4) + 1
    }

    function qO(bb, ub) {
      var hb = (65535 & bb) + (65535 & ub);
      return (bb >> 16) + (ub >> 16) + (hb >> 16) << 16 | 65535 & hb
    }

    function EO(bb, ub, hb, Bb, Ob, Gb) {
      return qO((Ub = qO(qO(ub, bb), qO(Bb, Gb))) << (Lb = Ob) | Ub >>> 32 - Lb, hb);
      var Ub, Lb
    }

    function yO(bb, ub, hb, Bb, Ob, Gb, Ub) {
      return EO(ub & hb | ~ub & Bb, bb, ub, Ob, Gb, Ub)
    }

    function VO(bb, ub, hb, Bb, Ob, Gb, Ub) {
      return EO(ub & Bb | hb & ~Bb, bb, ub, Ob, Gb, Ub)
    }

    function FO(bb, ub, hb, Bb, Ob, Gb, Ub) {
      return EO(ub ^ hb ^ Bb, bb, ub, Ob, Gb, Ub)
    }

    function fO(bb, ub, hb, Bb, Ob, Gb, Ub) {
      return EO(hb ^ (ub | ~Bb), bb, ub, Ob, Gb, Ub)
    }
    IO("v3", 48, (function(bb) {
      if ("string" === typeof bb) {
        var ub = unescape(encodeURIComponent(bb));
        bb = new Uint8Array(ub.length);
        for (var hb = 0; hb < ub.length; ++hb) bb[hb] = ub.charCodeAt(hb)
      }
      return function(bb) {
        for (var ub = [], hb = 32 * bb.length, Bb = "0123456789abcdef", Ob = 0; Ob < hb; Ob += 8) {
          var Gb = bb[Ob >> 5] >>> Ob % 32 & 255,
            Ub = parseInt(Bb.charAt(Gb >>> 4 & 15) + Bb.charAt(15 & Gb), 16);
          ub.push(Ub)
        }
        return ub
      }(function(bb, ub) {
        bb[ub >> 5] |= 128 << ub % 32, bb[PO(ub) - 1] = ub;
        for (var hb = 1732584193, Bb = -271733879, Ob = -1732584194, Gb = 271733878, Ub = 0; Ub < bb.length; Ub += 16) {
          var Lb = hb,
            Yb = Bb,
            Sb = Ob,
            ab = Gb;
          hb = yO(hb, Bb, Ob, Gb, bb[Ub], 7, -680876936), Gb = yO(Gb, hb, Bb, Ob, bb[Ub + 1], 12, -389564586), Ob = yO(Ob, Gb, hb, Bb, bb[Ub + 2], 17, 606105819), Bb = yO(Bb, Ob, Gb, hb, bb[Ub + 3], 22, -1044525330), hb = yO(hb, Bb, Ob, Gb, bb[Ub + 4], 7, -176418897), Gb = yO(Gb, hb, Bb, Ob, bb[Ub + 5], 12, 1200080426), Ob = yO(Ob, Gb, hb, Bb, bb[Ub + 6], 17, -1473231341), Bb = yO(Bb, Ob, Gb, hb, bb[Ub + 7], 22, -45705983), hb = yO(hb, Bb, Ob, Gb, bb[Ub + 8], 7, 1770035416), Gb = yO(Gb, hb, Bb, Ob, bb[Ub + 9], 12, -1958414417), Ob = yO(Ob, Gb, hb, Bb, bb[Ub + 10], 17, -42063), Bb = yO(Bb, Ob, Gb, hb, bb[Ub + 11], 22, -1990404162), hb = yO(hb, Bb, Ob, Gb, bb[Ub + 12], 7, 1804603682), Gb = yO(Gb, hb, Bb, Ob, bb[Ub + 13], 12, -40341101), Ob = yO(Ob, Gb, hb, Bb, bb[Ub + 14], 17, -1502002290), hb = VO(hb, Bb = yO(Bb, Ob, Gb, hb, bb[Ub + 15], 22, 1236535329), Ob, Gb, bb[Ub + 1], 5, -165796510), Gb = VO(Gb, hb, Bb, Ob, bb[Ub + 6], 9, -1069501632), Ob = VO(Ob, Gb, hb, Bb, bb[Ub + 11], 14, 643717713), Bb = VO(Bb, Ob, Gb, hb, bb[Ub], 20, -373897302), hb = VO(hb, Bb, Ob, Gb, bb[Ub + 5], 5, -701558691), Gb = VO(Gb, hb, Bb, Ob, bb[Ub + 10], 9, 38016083), Ob = VO(Ob, Gb, hb, Bb, bb[Ub + 15], 14, -660478335), Bb = VO(Bb, Ob, Gb, hb, bb[Ub + 4], 20, -405537848), hb = VO(hb, Bb, Ob, Gb, bb[Ub + 9], 5, 568446438), Gb = VO(Gb, hb, Bb, Ob, bb[Ub + 14], 9, -1019803690), Ob = VO(Ob, Gb, hb, Bb, bb[Ub + 3], 14, -187363961), Bb = VO(Bb, Ob, Gb, hb, bb[Ub + 8], 20, 1163531501), hb = VO(hb, Bb, Ob, Gb, bb[Ub + 13], 5, -1444681467), Gb = VO(Gb, hb, Bb, Ob, bb[Ub + 2], 9, -51403784), Ob = VO(Ob, Gb, hb, Bb, bb[Ub + 7], 14, 1735328473), hb = FO(hb, Bb = VO(Bb, Ob, Gb, hb, bb[Ub + 12], 20, -1926607734), Ob, Gb, bb[Ub + 5], 4, -378558), Gb = FO(Gb, hb, Bb, Ob, bb[Ub + 8], 11, -2022574463), Ob = FO(Ob, Gb, hb, Bb, bb[Ub + 11], 16, 1839030562), Bb = FO(Bb, Ob, Gb, hb, bb[Ub + 14], 23, -35309556), hb = FO(hb, Bb, Ob, Gb, bb[Ub + 1], 4, -1530992060), Gb = FO(Gb, hb, Bb, Ob, bb[Ub + 4], 11, 1272893353), Ob = FO(Ob, Gb, hb, Bb, bb[Ub + 7], 16, -155497632), Bb = FO(Bb, Ob, Gb, hb, bb[Ub + 10], 23, -1094730640), hb = FO(hb, Bb, Ob, Gb, bb[Ub + 13], 4, 681279174), Gb = FO(Gb, hb, Bb, Ob, bb[Ub], 11, -358537222), Ob = FO(Ob, Gb, hb, Bb, bb[Ub + 3], 16, -722521979), Bb = FO(Bb, Ob, Gb, hb, bb[Ub + 6], 23, 76029189), hb = FO(hb, Bb, Ob, Gb, bb[Ub + 9], 4, -640364487), Gb = FO(Gb, hb, Bb, Ob, bb[Ub + 12], 11, -421815835), Ob = FO(Ob, Gb, hb, Bb, bb[Ub + 15], 16, 530742520), hb = fO(hb, Bb = FO(Bb, Ob, Gb, hb, bb[Ub + 2], 23, -995338651), Ob, Gb, bb[Ub], 6, -198630844), Gb = fO(Gb, hb, Bb, Ob, bb[Ub + 7], 10, 1126891415), Ob = fO(Ob, Gb, hb, Bb, bb[Ub + 14], 15, -1416354905), Bb = fO(Bb, Ob, Gb, hb, bb[Ub + 5], 21, -57434055), hb = fO(hb, Bb, Ob, Gb, bb[Ub + 12], 6, 1700485571), Gb = fO(Gb, hb, Bb, Ob, bb[Ub + 3], 10, -1894986606), Ob = fO(Ob, Gb, hb, Bb, bb[Ub + 10], 15, -1051523), Bb = fO(Bb, Ob, Gb, hb, bb[Ub + 1], 21, -2054922799), hb = fO(hb, Bb, Ob, Gb, bb[Ub + 8], 6, 1873313359), Gb = fO(Gb, hb, Bb, Ob, bb[Ub + 15], 10, -30611744), Ob = fO(Ob, Gb, hb, Bb, bb[Ub + 6], 15, -1560198380), Bb = fO(Bb, Ob, Gb, hb, bb[Ub + 13], 21, 1309151649), hb = fO(hb, Bb, Ob, Gb, bb[Ub + 4], 6, -145523070), Gb = fO(Gb, hb, Bb, Ob, bb[Ub + 11], 10, -1120210379), Ob = fO(Ob, Gb, hb, Bb, bb[Ub + 2], 15, 718787259), Bb = fO(Bb, Ob, Gb, hb, bb[Ub + 9], 21, -343485551), hb = qO(hb, Lb), Bb = qO(Bb, Yb), Ob = qO(Ob, Sb), Gb = qO(Gb, ab)
        }
        return [hb, Bb, Ob, Gb]
      }(function(bb) {
        if (0 === bb.length) return [];
        for (var ub = 8 * bb.length, hb = new Uint32Array(PO(ub)), Bb = 0; Bb < ub; Bb += 8) hb[Bb >> 5] |= (255 & bb[Bb / 8]) << Bb % 32;
        return hb
      }(bb), 8 * bb.length))
    }));
    var kO = new Uint8Array(16);

    function TO() {
      if (!mO && !(mO = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return mO(kO)
    }

    function cO(bb, ub, hb) {
      var Bb = (bb = bb || {}).random || (bb.rng || TO)();
      if (Bb[6] = 15 & Bb[6] | 64, Bb[8] = 63 & Bb[8] | 128, ub) {
        hb = hb || 0;
        for (var Ob = 0; Ob < 16; ++Ob) ub[hb + Ob] = Bb[Ob];
        return ub
      }
      return MO(Bb)
    }

    function QO(bb, ub, hb, Bb) {
      switch (bb) {
        case 0:
          return ub & hb ^ ~ub & Bb;
        case 1:
        case 3:
          return ub ^ hb ^ Bb;
        case 2:
          return ub & hb ^ ub & Bb ^ hb & Bb
      }
    }

    function RO(bb, ub) {
      return bb << ub | bb >>> 32 - ub
    }
    IO("v5", 80, (function(bb) {
      var ub = [1518500249, 1859775393, 2400959708, 3395469782],
        hb = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof bb) {
        var Bb = unescape(encodeURIComponent(bb));
        bb = [];
        for (var Ob = 0; Ob < Bb.length; ++Ob) bb.push(Bb.charCodeAt(Ob))
      } else Array.isArray(bb) || (bb = Array.prototype.slice.call(bb));
      bb.push(128);
      for (var Gb = bb.length / 4 + 2, Ub = Math.ceil(Gb / 16), Lb = new Array(Ub), Yb = 0; Yb < Ub; ++Yb) {
        for (var Sb = new Uint32Array(16), ab = 0; ab < 16; ++ab) Sb[ab] = bb[64 * Yb + 4 * ab] << 24 | bb[64 * Yb + 4 * ab + 1] << 16 | bb[64 * Yb + 4 * ab + 2] << 8 | bb[64 * Yb + 4 * ab + 3];
        Lb[Yb] = Sb
      }
      Lb[Ub - 1][14] = 8 * (bb.length - 1) / Math.pow(2, 32), Lb[Ub - 1][14] = Math.floor(Lb[Ub - 1][14]), Lb[Ub - 1][15] = 8 * (bb.length - 1) & 4294967295;
      for (var Hb = 0; Hb < Ub; ++Hb) {
        for (var wb = new Uint32Array(80), Zb = 0; Zb < 16; ++Zb) wb[Zb] = Lb[Hb][Zb];
        for (var Xb = 16; Xb < 80; ++Xb) wb[Xb] = RO(wb[Xb - 3] ^ wb[Xb - 8] ^ wb[Xb - 14] ^ wb[Xb - 16], 1);
        for (var pb = hb[0], ob = hb[1], Ab = hb[2], lb = hb[3], Kb = hb[4], Wb = 0; Wb < 80; ++Wb) {
          var Cb = Math.floor(Wb / 20),
            db = RO(pb, 5) + QO(Cb, ob, Ab, lb) + Kb + ub[Cb] + wb[Wb] >>> 0;
          Kb = lb, lb = Ab, Ab = RO(ob, 30) >>> 0, ob = pb, pb = db
        }
        hb[0] = hb[0] + pb >>> 0, hb[1] = hb[1] + ob >>> 0, hb[2] = hb[2] + Ab >>> 0, hb[3] = hb[3] + lb >>> 0, hb[4] = hb[4] + Kb >>> 0
      }
      return [hb[0] >> 24 & 255, hb[0] >> 16 & 255, hb[0] >> 8 & 255, 255 & hb[0], hb[1] >> 24 & 255, hb[1] >> 16 & 255, hb[1] >> 8 & 255, 255 & hb[1], hb[2] >> 24 & 255, hb[2] >> 16 & 255, hb[2] >> 8 & 255, 255 & hb[2], hb[3] >> 24 & 255, hb[3] >> 16 & 255, hb[3] >> 8 & 255, 255 & hb[3], hb[4] >> 24 & 255, hb[4] >> 16 & 255, hb[4] >> 8 & 255, 255 & hb[4]]
    }));
    class bG extends Error {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(ub), this.code = bb, this.message = ub, this.name = "Discord SDK Error"
      }
    }
    const uG = ["log", "warn", "debug", "info", "error"];
    var hG;
    ! function(bb) {
      bb[bb.HANDSHAKE = 0] = "HANDSHAKE", bb[bb.FRAME = 1] = "FRAME", bb[bb.CLOSE = 2] = "CLOSE", bb[bb.HELLO = 3] = "HELLO"
    }(hG || (hG = {}));
    const BG = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class OG {
      getTransfer(bb) {
        var ub;
        switch (bb.cmd) {
          case kh.SUBSCRIBE:
          case kh.UNSUBSCRIBE:
            return;
          default:
            return null !== (ub = bb.transfer) && void 0 !== ub ? ub : void 0
        }
      }
      constructor(bb, ub) {
        var hb;
        if (this.eventBus = new Sb, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = bb => {
            var ub;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const hb = cO();
            null === (ub = this.source) || void 0 === ub || ub.postMessage([hG.FRAME, Object.assign(Object.assign({}, bb), {
              nonce: hb
            })], this.sourceOrigin, this.getTransfer(bb));
            return new Promise(((bb, ub) => {
              this.pendingCommands.set(hb, {
                resolve: bb,
                reject: ub
              })
            }))
          }, this.commands = (hb = this.sendCommand, {
            authenticate: ZO(hb),
            authorize: XO(hb),
            captureLog: pO(hb),
            encourageHardwareAcceleration: oO(hb),
            getChannel: vO(hb),
            getChannelPermissions: KO(hb),
            getEntitlements: AO(hb),
            getPlatformBehaviors: WO(hb),
            getSkus: lO(hb),
            openExternalLink: CO(hb),
            openInviteDialog: dO(hb),
            openShareMomentDialog: rO(hb),
            setActivity: jO(hb),
            setConfig: nO(hb),
            setOrientationLockState: xO(hb),
            startPurchase: zO(hb),
            userSettingsGetLocale: gO(hb),
            initiateImageUpload: iO(hb),
            getInstanceConnectedParticipants: tO(hb)
          }), this.handleMessage = bb => {
            if (!BG.has(bb.origin)) return;
            const ub = bb.data;
            if (!Array.isArray(ub)) return;
            const [hb, Bb] = ub;
            switch (hb) {
              case hG.HELLO:
                return;
              case hG.CLOSE:
                return this.handleClose(Bb);
              case hG.HANDSHAKE:
                return this.handleHandshake();
              case hG.FRAME:
                return this.handleFrame(Bb);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = bb, this.configuration = null !== ub && void 0 !== ub ? ub : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = eh.DESKTOP, this.guildId = null, void(this.channelId = null);
        const Bb = new URLSearchParams(this._getSearch()),
          Ob = Bb.get("frame_id");
        if (!Ob) throw new Error("frame_id query param is not defined");
        this.frameId = Ob;
        const Gb = Bb.get("instance_id");
        if (!Gb) throw new Error("instance_id query param is not defined");
        this.instanceId = Gb;
        const Ub = Bb.get("platform");
        if (!Ub) throw new Error("platform query param is not defined");
        if (Ub !== eh.DESKTOP && Ub !== eh.MOBILE) throw new Error(`Invalid query param "platform" of "${Ub}". Valid values are "${eh.DESKTOP}" or "${eh.MOBILE}"`);
        this.platform = Ub, this.guildId = Bb.get("guild_id"), this.channelId = Bb.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var bb;
          return [null !== (bb = window.parent.opener) && void 0 !== bb ? bb : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(bb, ub) {
        var hb;
        window.removeEventListener("message", this.handleMessage);
        const Bb = cO();
        null === (hb = this.source) || void 0 === hb || hb.postMessage([hG.CLOSE, {
          code: bb,
          message: ub,
          nonce: Bb
        }], this.sourceOrigin)
      }
      async subscribe(bb, ub) {
        for (var hb = arguments.length, Bb = new Array(hb > 2 ? hb - 2 : 0), Ob = 2; Ob < hb; Ob++) Bb[Ob - 2] = arguments[Ob];
        const [Gb] = Bb, Ub = this.eventBus.listenerCount(bb), Lb = this.eventBus.on(bb, ub);
        return Object.values(JB).includes(bb) && bb !== JB.READY && 0 === Ub && await this.sendCommand({
          cmd: kh.SUBSCRIBE,
          args: Gb,
          evt: bb
        }), Lb
      }
      async unsubscribe(bb, ub) {
        for (var hb = arguments.length, Bb = new Array(hb > 2 ? hb - 2 : 0), Ob = 2; Ob < hb; Ob++) Bb[Ob - 2] = arguments[Ob];
        const [Gb] = Bb;
        return bb !== JB.READY && 1 === this.eventBus.listenerCount(bb) && await this.sendCommand({
          cmd: kh.UNSUBSCRIBE,
          evt: bb,
          args: Gb
        }), this.eventBus.off(bb, ub)
      }
      async ready() {
        this.isReady || await new Promise((bb => {
          this.eventBus.once(JB.READY, bb)
        }))
      }
      handshake() {
        var bb;
        null === (bb = this.source) || void 0 === bb || bb.postMessage([hG.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(JB.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const bb = (bb, ub) => {
          this.commands.captureLog({
            level: bb,
            message: ub
          })
        };
        uG.forEach((ub => {
          ! function(bb, ub, hb) {
            const Bb = bb[ub],
              Ob = bb;
            Bb && (bb[ub] = function() {
              const bb = [].slice.call(arguments),
                Gb = "" + bb.join(" ");
              hb(ub, Gb), Bb.apply(Ob, bb)
            })
          }(console, ub, bb)
        }))
      }
      handleClose(bb) {
        YO.parse(bb)
      }
      handleHandshake() {}
      handleFrame(bb) {
        var ub, hb;
        let Bb;
        try {
          Bb = aO(bb)
        } catch (Ob) {
          return console.error("Failed to parse", bb), void console.error(Ob)
        }
        if ("DISPATCH" === Bb.cmd) this.eventBus.emit(Bb.evt, Bb.data);
        else {
          if (Bb.evt === tB) {
            if (null != Bb.nonce) return null === (ub = this.pendingCommands.get(Bb.nonce)) || void 0 === ub || ub.reject(Bb.data), void this.pendingCommands.delete(Bb.nonce);
            this.eventBus.emit("error", new bG(Bb.data.code, Bb.data.message))
          }
          if (null == Bb.nonce) return void console.error("Missing nonce", bb);
          null === (hb = this.pendingCommands.get(Bb.nonce)) || void 0 === hb || hb.resolve(Bb), this.pendingCommands.delete(Bb.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var GG, UG = 1e9,
      LG = !0,
      YG = "[DecimalError] ",
      SG = YG + "Invalid argument: ",
      aG = YG + "Exponent out of range: ",
      HG = Math.floor,
      wG = Math.pow,
      ZG = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      XG = 1e7,
      pG = 9007199254740991,
      oG = HG(1286742750677284.5),
      AG = {};

    function lG(bb, ub) {
      var hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab = bb.constructor,
        Hb = ab.precision;
      if (!bb.s || !ub.s) return ub.s || (ub = new ab(bb)), LG ? zG(ub, Hb) : ub;
      if (Yb = bb.d, Sb = ub.d, Ub = bb.e, Ob = ub.e, Yb = Yb.slice(), Gb = Ub - Ob) {
        for (Gb < 0 ? (Bb = Yb, Gb = -Gb, Lb = Sb.length) : (Bb = Sb, Ob = Ub, Lb = Yb.length), Gb > (Lb = (Ub = Math.ceil(Hb / 7)) > Lb ? Ub + 1 : Lb + 1) && (Gb = Lb, Bb.length = 1), Bb.reverse(); Gb--;) Bb.push(0);
        Bb.reverse()
      }
      for ((Lb = Yb.length) - (Gb = Sb.length) < 0 && (Gb = Lb, Bb = Sb, Sb = Yb, Yb = Bb), hb = 0; Gb;) hb = (Yb[--Gb] = Yb[Gb] + Sb[Gb] + hb) / XG | 0, Yb[Gb] %= XG;
      for (hb && (Yb.unshift(hb), ++Ob), Lb = Yb.length; 0 == Yb[--Lb];) Yb.pop();
      return ub.d = Yb, ub.e = Ob, LG ? zG(ub, Hb) : ub
    }

    function KG(bb, ub, hb) {
      if (bb !== ~~bb || bb < ub || bb > hb) throw Error(SG + bb)
    }

    function WG(bb) {
      var ub, hb, Bb, Ob = bb.length - 1,
        Gb = "",
        Ub = bb[0];
      if (Ob > 0) {
        for (Gb += Ub, ub = 1; ub < Ob; ub++)(hb = 7 - (Bb = bb[ub] + "").length) && (Gb += nG(hb)), Gb += Bb;
        (hb = 7 - (Bb = (Ub = bb[ub]) + "").length) && (Gb += nG(hb))
      } else if (0 === Ub) return "0";
      for (; Ub % 10 === 0;) Ub /= 10;
      return Gb + Ub
    }
    AG.absoluteValue = AG.abs = function() {
      var bb = new this.constructor(this);
      return bb.s && (bb.s = 1), bb
    }, AG.comparedTo = AG.cmp = function(bb) {
      var ub, hb, Bb, Ob, Gb = this;
      if (bb = new Gb.constructor(bb), Gb.s !== bb.s) return Gb.s || -bb.s;
      if (Gb.e !== bb.e) return Gb.e > bb.e ^ Gb.s < 0 ? 1 : -1;
      for (ub = 0, hb = (Bb = Gb.d.length) < (Ob = bb.d.length) ? Bb : Ob; ub < hb; ++ub)
        if (Gb.d[ub] !== bb.d[ub]) return Gb.d[ub] > bb.d[ub] ^ Gb.s < 0 ? 1 : -1;
      return Bb === Ob ? 0 : Bb > Ob ^ Gb.s < 0 ? 1 : -1
    }, AG.decimalPlaces = AG.dp = function() {
      var bb = this,
        ub = bb.d.length - 1,
        hb = 7 * (ub - bb.e);
      if (ub = bb.d[ub])
        for (; ub % 10 == 0; ub /= 10) hb--;
      return hb < 0 ? 0 : hb
    }, AG.dividedBy = AG.div = function(bb) {
      return CG(this, new this.constructor(bb))
    }, AG.dividedToIntegerBy = AG.idiv = function(bb) {
      var ub = this.constructor;
      return zG(CG(this, new ub(bb), 0, 1), ub.precision)
    }, AG.equals = AG.eq = function(bb) {
      return !this.cmp(bb)
    }, AG.exponent = function() {
      return rG(this)
    }, AG.greaterThan = AG.gt = function(bb) {
      return this.cmp(bb) > 0
    }, AG.greaterThanOrEqualTo = AG.gte = function(bb) {
      return this.cmp(bb) >= 0
    }, AG.isInteger = AG.isint = function() {
      return this.e > this.d.length - 2
    }, AG.isNegative = AG.isneg = function() {
      return this.s < 0
    }, AG.isPositive = AG.ispos = function() {
      return this.s > 0
    }, AG.isZero = function() {
      return 0 === this.s
    }, AG.lessThan = AG.lt = function(bb) {
      return this.cmp(bb) < 0
    }, AG.lessThanOrEqualTo = AG.lte = function(bb) {
      return this.cmp(bb) < 1
    }, AG.logarithm = AG.log = function(bb) {
      var ub, hb = this,
        Bb = hb.constructor,
        Ob = Bb.precision,
        Gb = Ob + 5;
      if (void 0 === bb) bb = new Bb(10);
      else if ((bb = new Bb(bb)).s < 1 || bb.eq(GG)) throw Error(YG + "NaN");
      if (hb.s < 1) throw Error(YG + (hb.s ? "NaN" : "-Infinity"));
      return hb.eq(GG) ? new Bb(0) : (LG = !1, ub = CG(DG(hb, Gb), DG(bb, Gb), Gb), LG = !0, zG(ub, Ob))
    }, AG.minus = AG.sub = function(bb) {
      var ub = this;
      return bb = new ub.constructor(bb), ub.s == bb.s ? gG(ub, bb) : lG(ub, (bb.s = -bb.s, bb))
    }, AG.modulo = AG.mod = function(bb) {
      var ub, hb = this,
        Bb = hb.constructor,
        Ob = Bb.precision;
      if (!(bb = new Bb(bb)).s) throw Error(YG + "NaN");
      return hb.s ? (LG = !1, ub = CG(hb, bb, 0, 1).times(bb), LG = !0, hb.minus(ub)) : zG(new Bb(hb), Ob)
    }, AG.naturalExponential = AG.exp = function() {
      return dG(this)
    }, AG.naturalLogarithm = AG.ln = function() {
      return DG(this)
    }, AG.negated = AG.neg = function() {
      var bb = new this.constructor(this);
      return bb.s = -bb.s || 0, bb
    }, AG.plus = AG.add = function(bb) {
      var ub = this;
      return bb = new ub.constructor(bb), ub.s == bb.s ? lG(ub, bb) : gG(ub, (bb.s = -bb.s, bb))
    }, AG.precision = AG.sd = function(bb) {
      var ub, hb, Bb, Ob = this;
      if (void 0 !== bb && bb !== !!bb && 1 !== bb && 0 !== bb) throw Error(SG + bb);
      if (ub = rG(Ob) + 1, hb = 7 * (Bb = Ob.d.length - 1) + 1, Bb = Ob.d[Bb]) {
        for (; Bb % 10 == 0; Bb /= 10) hb--;
        for (Bb = Ob.d[0]; Bb >= 10; Bb /= 10) hb++
      }
      return bb && ub > hb ? ub : hb
    }, AG.squareRoot = AG.sqrt = function() {
      var bb, ub, hb, Bb, Ob, Gb, Ub, Lb = this,
        Yb = Lb.constructor;
      if (Lb.s < 1) {
        if (!Lb.s) return new Yb(0);
        throw Error(YG + "NaN")
      }
      for (bb = rG(Lb), LG = !1, 0 == (Ob = Math.sqrt(+Lb)) || Ob == 1 / 0 ? (((ub = WG(Lb.d)).length + bb) % 2 == 0 && (ub += "0"), Ob = Math.sqrt(ub), bb = HG((bb + 1) / 2) - (bb < 0 || bb % 2), Bb = new Yb(ub = Ob == 1 / 0 ? "1e" + bb : (ub = Ob.toExponential()).slice(0, ub.indexOf("e") + 1) + bb)) : Bb = new Yb(Ob.toString()), Ob = Ub = (hb = Yb.precision) + 3;;)
        if (Bb = (Gb = Bb).plus(CG(Lb, Gb, Ub + 2)).times(.5), WG(Gb.d).slice(0, Ub) === (ub = WG(Bb.d)).slice(0, Ub)) {
          if (ub = ub.slice(Ub - 3, Ub + 1), Ob == Ub && "4999" == ub) {
            if (zG(Gb, hb + 1, 0), Gb.times(Gb).eq(Lb)) {
              Bb = Gb;
              break
            }
          } else if ("9999" != ub) break;
          Ub += 4
        } return LG = !0, zG(Bb, hb)
    }, AG.times = AG.mul = function(bb) {
      var ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab = this,
        Hb = ab.constructor,
        wb = ab.d,
        Zb = (bb = new Hb(bb)).d;
      if (!ab.s || !bb.s) return new Hb(0);
      for (bb.s *= ab.s, hb = ab.e + bb.e, (Yb = wb.length) < (Sb = Zb.length) && (Gb = wb, wb = Zb, Zb = Gb, Ub = Yb, Yb = Sb, Sb = Ub), Gb = [], Bb = Ub = Yb + Sb; Bb--;) Gb.push(0);
      for (Bb = Sb; --Bb >= 0;) {
        for (ub = 0, Ob = Yb + Bb; Ob > Bb;) Lb = Gb[Ob] + Zb[Bb] * wb[Ob - Bb - 1] + ub, Gb[Ob--] = Lb % XG | 0, ub = Lb / XG | 0;
        Gb[Ob] = (Gb[Ob] + ub) % XG | 0
      }
      for (; !Gb[--Ub];) Gb.pop();
      return ub ? ++hb : Gb.shift(), bb.d = Gb, bb.e = hb, LG ? zG(bb, Hb.precision) : bb
    }, AG.toDecimalPlaces = AG.todp = function(bb, ub) {
      var hb = this,
        Bb = hb.constructor;
      return hb = new Bb(hb), void 0 === bb ? hb : (KG(bb, 0, UG), void 0 === ub ? ub = Bb.rounding : KG(ub, 0, 8), zG(hb, bb + rG(hb) + 1, ub))
    }, AG.toExponential = function(bb, ub) {
      var hb, Bb = this,
        Ob = Bb.constructor;
      return void 0 === bb ? hb = iG(Bb, !0) : (KG(bb, 0, UG), void 0 === ub ? ub = Ob.rounding : KG(ub, 0, 8), hb = iG(Bb = zG(new Ob(Bb), bb + 1, ub), !0, bb + 1)), hb
    }, AG.toFixed = function(bb, ub) {
      var hb, Bb, Ob = this,
        Gb = Ob.constructor;
      return void 0 === bb ? iG(Ob) : (KG(bb, 0, UG), void 0 === ub ? ub = Gb.rounding : KG(ub, 0, 8), hb = iG((Bb = zG(new Gb(Ob), bb + rG(Ob) + 1, ub)).abs(), !1, bb + rG(Bb) + 1), Ob.isneg() && !Ob.isZero() ? "-" + hb : hb)
    }, AG.toInteger = AG.toint = function() {
      var bb = this,
        ub = bb.constructor;
      return zG(new ub(bb), rG(bb) + 1, ub.rounding)
    }, AG.toNumber = function() {
      return +this
    }, AG.toPower = AG.pow = function(bb) {
      var ub, hb, Bb, Ob, Gb, Ub, Lb = this,
        Yb = Lb.constructor,
        Sb = +(bb = new Yb(bb));
      if (!bb.s) return new Yb(GG);
      if (!(Lb = new Yb(Lb)).s) {
        if (bb.s < 1) throw Error(YG + "Infinity");
        return Lb
      }
      if (Lb.eq(GG)) return Lb;
      if (Bb = Yb.precision, bb.eq(GG)) return zG(Lb, Bb);
      if (Ub = (ub = bb.e) >= (hb = bb.d.length - 1), Gb = Lb.s, Ub) {
        if ((hb = Sb < 0 ? -Sb : Sb) <= pG) {
          for (Ob = new Yb(GG), ub = Math.ceil(Bb / 7 + 4), LG = !1; hb % 2 && vG((Ob = Ob.times(Lb)).d, ub), 0 !== (hb = HG(hb / 2));) vG((Lb = Lb.times(Lb)).d, ub);
          return LG = !0, bb.s < 0 ? new Yb(GG).div(Ob) : zG(Ob, Bb)
        }
      } else if (Gb < 0) throw Error(YG + "NaN");
      return Gb = Gb < 0 && 1 & bb.d[Math.max(ub, hb)] ? -1 : 1, Lb.s = 1, LG = !1, Ob = bb.times(DG(Lb, Bb + 12)), LG = !0, (Ob = dG(Ob)).s = Gb, Ob
    }, AG.toPrecision = function(bb, ub) {
      var hb, Bb, Ob = this,
        Gb = Ob.constructor;
      return void 0 === bb ? Bb = iG(Ob, (hb = rG(Ob)) <= Gb.toExpNeg || hb >= Gb.toExpPos) : (KG(bb, 1, UG), void 0 === ub ? ub = Gb.rounding : KG(ub, 0, 8), Bb = iG(Ob = zG(new Gb(Ob), bb, ub), bb <= (hb = rG(Ob)) || hb <= Gb.toExpNeg, bb)), Bb
    }, AG.toSignificantDigits = AG.tosd = function(bb, ub) {
      var hb = this.constructor;
      return void 0 === bb ? (bb = hb.precision, ub = hb.rounding) : (KG(bb, 1, UG), void 0 === ub ? ub = hb.rounding : KG(ub, 0, 8)), zG(new hb(this), bb, ub)
    }, AG.toString = AG.valueOf = AG.val = AG.toJSON = AG[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var bb = this,
        ub = rG(bb),
        hb = bb.constructor;
      return iG(bb, ub <= hb.toExpNeg || ub >= hb.toExpPos)
    };
    var CG = function() {
      function bb(bb, ub) {
        var hb, Bb = 0,
          Ob = bb.length;
        for (bb = bb.slice(); Ob--;) hb = bb[Ob] * ub + Bb, bb[Ob] = hb % XG | 0, Bb = hb / XG | 0;
        return Bb && bb.unshift(Bb), bb
      }

      function ub(bb, ub, hb, Bb) {
        var Ob, Gb;
        if (hb != Bb) Gb = hb > Bb ? 1 : -1;
        else
          for (Ob = Gb = 0; Ob < hb; Ob++)
            if (bb[Ob] != ub[Ob]) {
              Gb = bb[Ob] > ub[Ob] ? 1 : -1;
              break
            } return Gb
      }

      function hb(bb, ub, hb) {
        for (var Bb = 0; hb--;) bb[hb] -= Bb, Bb = bb[hb] < ub[hb] ? 1 : 0, bb[hb] = Bb * XG + bb[hb] - ub[hb];
        for (; !bb[0] && bb.length > 1;) bb.shift()
      }
      return function(Bb, Ob, Gb, Ub) {
        var Lb, Yb, Sb, ab, Hb, wb, Zb, Xb, pb, ob, Ab, lb, Kb, Wb, Cb, db, rb, jb, nb = Bb.constructor,
          Db = Bb.s == Ob.s ? 1 : -1,
          xb = Bb.d,
          zb = Ob.d;
        if (!Bb.s) return new nb(Bb);
        if (!Ob.s) throw Error(YG + "Division by zero");
        for (Yb = Bb.e - Ob.e, rb = zb.length, Cb = xb.length, Xb = (Zb = new nb(Db)).d = [], Sb = 0; zb[Sb] == (xb[Sb] || 0);) ++Sb;
        if (zb[Sb] > (xb[Sb] || 0) && --Yb, (lb = null == Gb ? Gb = nb.precision : Ub ? Gb + (rG(Bb) - rG(Ob)) + 1 : Gb) < 0) return new nb(0);
        if (lb = lb / 7 + 2 | 0, Sb = 0, 1 == rb)
          for (ab = 0, zb = zb[0], lb++;
            (Sb < Cb || ab) && lb--; Sb++) Kb = ab * XG + (xb[Sb] || 0), Xb[Sb] = Kb / zb | 0, ab = Kb % zb | 0;
        else {
          for ((ab = XG / (zb[0] + 1) | 0) > 1 && (zb = bb(zb, ab), xb = bb(xb, ab), rb = zb.length, Cb = xb.length), Wb = rb, ob = (pb = xb.slice(0, rb)).length; ob < rb;) pb[ob++] = 0;
          (jb = zb.slice()).unshift(0), db = zb[0], zb[1] >= XG / 2 && ++db;
          do {
            ab = 0, (Lb = ub(zb, pb, rb, ob)) < 0 ? (Ab = pb[0], rb != ob && (Ab = Ab * XG + (pb[1] || 0)), (ab = Ab / db | 0) > 1 ? (ab >= XG && (ab = XG - 1), 1 == (Lb = ub(Hb = bb(zb, ab), pb, wb = Hb.length, ob = pb.length)) && (ab--, hb(Hb, rb < wb ? jb : zb, wb))) : (0 == ab && (Lb = ab = 1), Hb = zb.slice()), (wb = Hb.length) < ob && Hb.unshift(0), hb(pb, Hb, ob), -1 == Lb && (Lb = ub(zb, pb, rb, ob = pb.length)) < 1 && (ab++, hb(pb, rb < ob ? jb : zb, ob)), ob = pb.length) : 0 === Lb && (ab++, pb = [0]), Xb[Sb++] = ab, Lb && pb[0] ? pb[ob++] = xb[Wb] || 0 : (pb = [xb[Wb]], ob = 1)
          } while ((Wb++ < Cb || void 0 !== pb[0]) && lb--)
        }
        return Xb[0] || Xb.shift(), Zb.e = Yb, zG(Zb, Ub ? Gb + rG(Zb) + 1 : Gb)
      }
    }();

    function dG(bb, ub) {
      var hb, Bb, Ob, Gb, Ub, Lb = 0,
        Yb = 0,
        Sb = bb.constructor,
        ab = Sb.precision;
      if (rG(bb) > 16) throw Error(aG + rG(bb));
      if (!bb.s) return new Sb(GG);
      for (null == ub ? (LG = !1, Ub = ab) : Ub = ub, Gb = new Sb(.03125); bb.abs().gte(.1);) bb = bb.times(Gb), Yb += 5;
      for (Ub += Math.log(wG(2, Yb)) / Math.LN10 * 2 + 5 | 0, hb = Bb = Ob = new Sb(GG), Sb.precision = Ub;;) {
        if (Bb = zG(Bb.times(bb), Ub), hb = hb.times(++Lb), WG((Gb = Ob.plus(CG(Bb, hb, Ub))).d).slice(0, Ub) === WG(Ob.d).slice(0, Ub)) {
          for (; Yb--;) Ob = zG(Ob.times(Ob), Ub);
          return Sb.precision = ab, null == ub ? (LG = !0, zG(Ob, ab)) : Ob
        }
        Ob = Gb
      }
    }

    function rG(bb) {
      for (var ub = 7 * bb.e, hb = bb.d[0]; hb >= 10; hb /= 10) ub++;
      return ub
    }

    function jG(bb, ub, hb) {
      if (ub > bb.LN10.sd()) throw LG = !0, hb && (bb.precision = hb), Error(YG + "LN10 precision limit exceeded");
      return zG(new bb(bb.LN10), ub)
    }

    function nG(bb) {
      for (var ub = ""; bb--;) ub += "0";
      return ub
    }

    function DG(bb, ub) {
      var hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb = 1,
        wb = bb,
        Zb = wb.d,
        Xb = wb.constructor,
        pb = Xb.precision;
      if (wb.s < 1) throw Error(YG + (wb.s ? "NaN" : "-Infinity"));
      if (wb.eq(GG)) return new Xb(0);
      if (null == ub ? (LG = !1, Sb = pb) : Sb = ub, wb.eq(10)) return null == ub && (LG = !0), jG(Xb, Sb);
      if (Sb += 10, Xb.precision = Sb, Bb = (hb = WG(Zb)).charAt(0), Gb = rG(wb), !(Math.abs(Gb) < 15e14)) return Yb = jG(Xb, Sb + 2, pb).times(Gb + ""), wb = DG(new Xb(Bb + "." + hb.slice(1)), Sb - 10).plus(Yb), Xb.precision = pb, null == ub ? (LG = !0, zG(wb, pb)) : wb;
      for (; Bb < 7 && 1 != Bb || 1 == Bb && hb.charAt(1) > 3;) Bb = (hb = WG((wb = wb.times(bb)).d)).charAt(0), Hb++;
      for (Gb = rG(wb), Bb > 1 ? (wb = new Xb("0." + hb), Gb++) : wb = new Xb(Bb + "." + hb.slice(1)), Lb = Ub = wb = CG(wb.minus(GG), wb.plus(GG), Sb), ab = zG(wb.times(wb), Sb), Ob = 3;;) {
        if (Ub = zG(Ub.times(ab), Sb), WG((Yb = Lb.plus(CG(Ub, new Xb(Ob), Sb))).d).slice(0, Sb) === WG(Lb.d).slice(0, Sb)) return Lb = Lb.times(2), 0 !== Gb && (Lb = Lb.plus(jG(Xb, Sb + 2, pb).times(Gb + ""))), Lb = CG(Lb, new Xb(Hb), Sb), Xb.precision = pb, null == ub ? (LG = !0, zG(Lb, pb)) : Lb;
        Lb = Yb, Ob += 2
      }
    }

    function xG(bb, ub) {
      var hb, Bb, Ob;
      for ((hb = ub.indexOf(".")) > -1 && (ub = ub.replace(".", "")), (Bb = ub.search(/e/i)) > 0 ? (hb < 0 && (hb = Bb), hb += +ub.slice(Bb + 1), ub = ub.substring(0, Bb)) : hb < 0 && (hb = ub.length), Bb = 0; 48 === ub.charCodeAt(Bb);) ++Bb;
      for (Ob = ub.length; 48 === ub.charCodeAt(Ob - 1);) --Ob;
      if (ub = ub.slice(Bb, Ob)) {
        if (Ob -= Bb, hb = hb - Bb - 1, bb.e = HG(hb / 7), bb.d = [], Bb = (hb + 1) % 7, hb < 0 && (Bb += 7), Bb < Ob) {
          for (Bb && bb.d.push(+ub.slice(0, Bb)), Ob -= 7; Bb < Ob;) bb.d.push(+ub.slice(Bb, Bb += 7));
          Bb = 7 - (ub = ub.slice(Bb)).length
        } else Bb -= Ob;
        for (; Bb--;) ub += "0";
        if (bb.d.push(+ub), LG && (bb.e > oG || bb.e < -oG)) throw Error(aG + hb)
      } else bb.s = 0, bb.e = 0, bb.d = [0];
      return bb
    }

    function zG(bb, ub, hb) {
      var Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb = bb.d;
      for (Ub = 1, Gb = Hb[0]; Gb >= 10; Gb /= 10) Ub++;
      if ((Bb = ub - Ub) < 0) Bb += 7, Ob = ub, Sb = Hb[ab = 0];
      else {
        if ((ab = Math.ceil((Bb + 1) / 7)) >= (Gb = Hb.length)) return bb;
        for (Sb = Gb = Hb[ab], Ub = 1; Gb >= 10; Gb /= 10) Ub++;
        Ob = (Bb %= 7) - 7 + Ub
      }
      if (void 0 !== hb && (Lb = Sb / (Gb = wG(10, Ub - Ob - 1)) % 10 | 0, Yb = ub < 0 || void 0 !== Hb[ab + 1] || Sb % Gb, Yb = hb < 4 ? (Lb || Yb) && (0 == hb || hb == (bb.s < 0 ? 3 : 2)) : Lb > 5 || 5 == Lb && (4 == hb || Yb || 6 == hb && (Bb > 0 ? Ob > 0 ? Sb / wG(10, Ub - Ob) : 0 : Hb[ab - 1]) % 10 & 1 || hb == (bb.s < 0 ? 8 : 7))), ub < 1 || !Hb[0]) return Yb ? (Gb = rG(bb), Hb.length = 1, ub = ub - Gb - 1, Hb[0] = wG(10, (7 - ub % 7) % 7), bb.e = HG(-ub / 7) || 0) : (Hb.length = 1, Hb[0] = bb.e = bb.s = 0), bb;
      if (0 == Bb ? (Hb.length = ab, Gb = 1, ab--) : (Hb.length = ab + 1, Gb = wG(10, 7 - Bb), Hb[ab] = Ob > 0 ? (Sb / wG(10, Ub - Ob) % wG(10, Ob) | 0) * Gb : 0), Yb)
        for (;;) {
          if (0 == ab) {
            (Hb[0] += Gb) == XG && (Hb[0] = 1, ++bb.e);
            break
          }
          if (Hb[ab] += Gb, Hb[ab] != XG) break;
          Hb[ab--] = 0, Gb = 1
        }
      for (Bb = Hb.length; 0 === Hb[--Bb];) Hb.pop();
      if (LG && (bb.e > oG || bb.e < -oG)) throw Error(aG + rG(bb));
      return bb
    }

    function gG(bb, ub) {
      var hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb = bb.constructor,
        Zb = wb.precision;
      if (!bb.s || !ub.s) return ub.s ? ub.s = -ub.s : ub = new wb(bb), LG ? zG(ub, Zb) : ub;
      if (Yb = bb.d, Hb = ub.d, Bb = ub.e, Sb = bb.e, Yb = Yb.slice(), Ub = Sb - Bb) {
        for ((ab = Ub < 0) ? (hb = Yb, Ub = -Ub, Lb = Hb.length) : (hb = Hb, Bb = Sb, Lb = Yb.length), Ub > (Ob = Math.max(Math.ceil(Zb / 7), Lb) + 2) && (Ub = Ob, hb.length = 1), hb.reverse(), Ob = Ub; Ob--;) hb.push(0);
        hb.reverse()
      } else {
        for ((ab = (Ob = Yb.length) < (Lb = Hb.length)) && (Lb = Ob), Ob = 0; Ob < Lb; Ob++)
          if (Yb[Ob] != Hb[Ob]) {
            ab = Yb[Ob] < Hb[Ob];
            break
          } Ub = 0
      }
      for (ab && (hb = Yb, Yb = Hb, Hb = hb, ub.s = -ub.s), Lb = Yb.length, Ob = Hb.length - Lb; Ob > 0; --Ob) Yb[Lb++] = 0;
      for (Ob = Hb.length; Ob > Ub;) {
        if (Yb[--Ob] < Hb[Ob]) {
          for (Gb = Ob; Gb && 0 === Yb[--Gb];) Yb[Gb] = XG - 1;
          --Yb[Gb], Yb[Ob] += XG
        }
        Yb[Ob] -= Hb[Ob]
      }
      for (; 0 === Yb[--Lb];) Yb.pop();
      for (; 0 === Yb[0]; Yb.shift()) --Bb;
      return Yb[0] ? (ub.d = Yb, ub.e = Bb, LG ? zG(ub, Zb) : ub) : new wb(0)
    }

    function iG(bb, ub, hb) {
      var Bb, Ob = rG(bb),
        Gb = WG(bb.d),
        Ub = Gb.length;
      return ub ? (hb && (Bb = hb - Ub) > 0 ? Gb = Gb.charAt(0) + "." + Gb.slice(1) + nG(Bb) : Ub > 1 && (Gb = Gb.charAt(0) + "." + Gb.slice(1)), Gb = Gb + (Ob < 0 ? "e" : "e+") + Ob) : Ob < 0 ? (Gb = "0." + nG(-Ob - 1) + Gb, hb && (Bb = hb - Ub) > 0 && (Gb += nG(Bb))) : Ob >= Ub ? (Gb += nG(Ob + 1 - Ub), hb && (Bb = hb - Ob - 1) > 0 && (Gb = Gb + "." + nG(Bb))) : ((Bb = Ob + 1) < Ub && (Gb = Gb.slice(0, Bb) + "." + Gb.slice(Bb)), hb && (Bb = hb - Ub) > 0 && (Ob + 1 === Ub && (Gb += "."), Gb += nG(Bb))), bb.s < 0 ? "-" + Gb : Gb
    }

    function vG(bb, ub) {
      if (bb.length > ub) return bb.length = ub, !0
    }

    function tG(bb) {
      if (!bb || "object" !== typeof bb) throw Error(YG + "Object expected");
      var ub, hb, Bb, Ob = ["precision", 1, UG, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (ub = 0; ub < Ob.length; ub += 3)
        if (void 0 !== (Bb = bb[hb = Ob[ub]])) {
          if (!(HG(Bb) === Bb && Bb >= Ob[ub + 1] && Bb <= Ob[ub + 2])) throw Error(SG + hb + ": " + Bb);
          this[hb] = Bb
        } if (void 0 !== (Bb = bb[hb = "LN10"])) {
        if (Bb != Math.LN10) throw Error(SG + hb + ": " + Bb);
        this[hb] = new this(Bb)
      }
      return this
    }
    var JG = function bb(ub) {
      var hb, Bb, Ob;

      function Gb(bb) {
        var ub = this;
        if (!(ub instanceof Gb)) return new Gb(bb);
        if (ub.constructor = Gb, bb instanceof Gb) return ub.s = bb.s, ub.e = bb.e, void(ub.d = (bb = bb.d) ? bb.slice() : bb);
        if ("number" === typeof bb) {
          if (0 * bb !== 0) throw Error(SG + bb);
          if (bb > 0) ub.s = 1;
          else {
            if (!(bb < 0)) return ub.s = 0, ub.e = 0, void(ub.d = [0]);
            bb = -bb, ub.s = -1
          }
          return bb === ~~bb && bb < 1e7 ? (ub.e = 0, void(ub.d = [bb])) : xG(ub, bb.toString())
        }
        if ("string" !== typeof bb) throw Error(SG + bb);
        if (45 === bb.charCodeAt(0) ? (bb = bb.slice(1), ub.s = -1) : ub.s = 1, !ZG.test(bb)) throw Error(SG + bb);
        xG(ub, bb)
      }
      if (Gb.prototype = AG, Gb.ROUND_UP = 0, Gb.ROUND_DOWN = 1, Gb.ROUND_CEIL = 2, Gb.ROUND_FLOOR = 3, Gb.ROUND_HALF_UP = 4, Gb.ROUND_HALF_DOWN = 5, Gb.ROUND_HALF_EVEN = 6, Gb.ROUND_HALF_CEIL = 7, Gb.ROUND_HALF_FLOOR = 8, Gb.clone = bb, Gb.config = Gb.set = tG, void 0 === ub && (ub = {}), ub)
        for (Ob = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], hb = 0; hb < Ob.length;) ub.hasOwnProperty(Bb = Ob[hb++]) || (ub[Bb] = this[Bb]);
      return Gb.config(ub), Gb
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    GG = new JG(1);
    var eG;
    ! function(bb) {
      bb.AED = "aed", bb.AFN = "afn", bb.ALL = "all", bb.AMD = "amd", bb.ANG = "ang", bb.AOA = "aoa", bb.ARS = "ars", bb.AUD = "aud", bb.AWG = "awg", bb.AZN = "azn", bb.BAM = "bam", bb.BBD = "bbd", bb.BDT = "bdt", bb.BGN = "bgn", bb.BHD = "bhd", bb.BIF = "bif", bb.BMD = "bmd", bb.BND = "bnd", bb.BOB = "bob", bb.BOV = "bov", bb.BRL = "brl", bb.BSD = "bsd", bb.BTN = "btn", bb.BWP = "bwp", bb.BYN = "byn", bb.BYR = "byr", bb.BZD = "bzd", bb.CAD = "cad", bb.CDF = "cdf", bb.CHE = "che", bb.CHF = "chf", bb.CHW = "chw", bb.CLF = "clf", bb.CLP = "clp", bb.CNY = "cny", bb.COP = "cop", bb.COU = "cou", bb.CRC = "crc", bb.CUC = "cuc", bb.CUP = "cup", bb.CVE = "cve", bb.CZK = "czk", bb.DJF = "djf", bb.DKK = "dkk", bb.DOP = "dop", bb.DZD = "dzd", bb.EGP = "egp", bb.ERN = "ern", bb.ETB = "etb", bb.EUR = "eur", bb.FJD = "fjd", bb.FKP = "fkp", bb.GBP = "gbp", bb.GEL = "gel", bb.GHS = "ghs", bb.GIP = "gip", bb.GMD = "gmd", bb.GNF = "gnf", bb.GTQ = "gtq", bb.GYD = "gyd", bb.HKD = "hkd", bb.HNL = "hnl", bb.HRK = "hrk", bb.HTG = "htg", bb.HUF = "huf", bb.IDR = "idr", bb.ILS = "ils", bb.INR = "inr", bb.IQD = "iqd", bb.IRR = "irr", bb.ISK = "isk", bb.JMD = "jmd", bb.JOD = "jod", bb.JPY = "jpy", bb.KES = "kes", bb.KGS = "kgs", bb.KHR = "khr", bb.KMF = "kmf", bb.KPW = "kpw", bb.KRW = "krw", bb.KWD = "kwd", bb.KYD = "kyd", bb.KZT = "kzt", bb.LAK = "lak", bb.LBP = "lbp", bb.LKR = "lkr", bb.LRD = "lrd", bb.LSL = "lsl", bb.LTL = "ltl", bb.LVL = "lvl", bb.LYD = "lyd", bb.MAD = "mad", bb.MDL = "mdl", bb.MGA = "mga", bb.MKD = "mkd", bb.MMK = "mmk", bb.MNT = "mnt", bb.MOP = "mop", bb.MRO = "mro", bb.MUR = "mur", bb.MVR = "mvr", bb.MWK = "mwk", bb.MXN = "mxn", bb.MXV = "mxv", bb.MYR = "myr", bb.MZN = "mzn", bb.NAD = "nad", bb.NGN = "ngn", bb.NIO = "nio", bb.NOK = "nok", bb.NPR = "npr", bb.NZD = "nzd", bb.OMR = "omr", bb.PAB = "pab", bb.PEN = "pen", bb.PGK = "pgk", bb.PHP = "php", bb.PKR = "pkr", bb.PLN = "pln", bb.PYG = "pyg", bb.QAR = "qar", bb.RON = "ron", bb.RSD = "rsd", bb.RUB = "rub", bb.RWF = "rwf", bb.SAR = "sar", bb.SBD = "sbd", bb.SCR = "scr", bb.SDG = "sdg", bb.SEK = "sek", bb.SGD = "sgd", bb.SHP = "shp", bb.SLL = "sll", bb.SOS = "sos", bb.SRD = "srd", bb.SSP = "ssp", bb.STD = "std", bb.SVC = "svc", bb.SYP = "syp", bb.SZL = "szl", bb.THB = "thb", bb.TJS = "tjs", bb.TMT = "tmt", bb.TND = "tnd", bb.TOP = "top", bb.TRY = "try", bb.TTD = "ttd", bb.TWD = "twd", bb.TZS = "tzs", bb.UAH = "uah", bb.UGX = "ugx", bb.USD = "usd", bb.USN = "usn", bb.USS = "uss", bb.UYI = "uyi", bb.UYU = "uyu", bb.UZS = "uzs", bb.VEF = "vef", bb.VND = "vnd", bb.VUV = "vuv", bb.WST = "wst", bb.XAF = "xaf", bb.XAG = "xag", bb.XAU = "xau", bb.XBA = "xba", bb.XBB = "xbb", bb.XBC = "xbc", bb.XBD = "xbd", bb.XCD = "xcd", bb.XDR = "xdr", bb.XFU = "xfu", bb.XOF = "xof", bb.XPD = "xpd", bb.XPF = "xpf", bb.XPT = "xpt", bb.XSU = "xsu", bb.XTS = "xts", bb.XUA = "xua", bb.YER = "yer", bb.ZAR = "zar", bb.ZMW = "zmw", bb.ZWL = "zwl"
    }(eG || (eG = {}));
    eG.AED, eG.AFN, eG.ALL, eG.AMD, eG.ANG, eG.AOA, eG.ARS, eG.AUD, eG.AWG, eG.AZN, eG.BAM, eG.BBD, eG.BDT, eG.BGN, eG.BHD, eG.BIF, eG.BMD, eG.BND, eG.BOB, eG.BOV, eG.BRL, eG.BSD, eG.BTN, eG.BWP, eG.BYR, eG.BYN, eG.BZD, eG.CAD, eG.CDF, eG.CHE, eG.CHF, eG.CHW, eG.CLF, eG.CLP, eG.CNY, eG.COP, eG.COU, eG.CRC, eG.CUC, eG.CUP, eG.CVE, eG.CZK, eG.DJF, eG.DKK, eG.DOP, eG.DZD, eG.EGP, eG.ERN, eG.ETB, eG.EUR, eG.FJD, eG.FKP, eG.GBP, eG.GEL, eG.GHS, eG.GIP, eG.GMD, eG.GNF, eG.GTQ, eG.GYD, eG.HKD, eG.HNL, eG.HRK, eG.HTG, eG.HUF, eG.IDR, eG.ILS, eG.INR, eG.IQD, eG.IRR, eG.ISK, eG.JMD, eG.JOD, eG.JPY, eG.KES, eG.KGS, eG.KHR, eG.KMF, eG.KPW, eG.KRW, eG.KWD, eG.KYD, eG.KZT, eG.LAK, eG.LBP, eG.LKR, eG.LRD, eG.LSL, eG.LTL, eG.LVL, eG.LYD, eG.MAD, eG.MDL, eG.MGA, eG.MKD, eG.MMK, eG.MNT, eG.MOP, eG.MRO, eG.MUR, eG.MVR, eG.MWK, eG.MXN, eG.MXV, eG.MYR, eG.MZN, eG.NAD, eG.NGN, eG.NIO, eG.NOK, eG.NPR, eG.NZD, eG.OMR, eG.PAB, eG.PEN, eG.PGK, eG.PHP, eG.PKR, eG.PLN, eG.PYG, eG.QAR, eG.RON, eG.RSD, eG.RUB, eG.RWF, eG.SAR, eG.SBD, eG.SCR, eG.SDG, eG.SEK, eG.SGD, eG.SHP, eG.SLL, eG.SOS, eG.SRD, eG.SSP, eG.STD, eG.SVC, eG.SYP, eG.SZL, eG.THB, eG.TJS, eG.TMT, eG.TND, eG.TOP, eG.TRY, eG.TTD, eG.TWD, eG.TZS, eG.UAH, eG.UGX, eG.USD, eG.USN, eG.USS, eG.UYI, eG.UYU, eG.UZS, eG.VEF, eG.VND, eG.VUV, eG.WST, eG.XAF, eG.XAG, eG.XAU, eG.XBA, eG.XBB, eG.XBC, eG.XBD, eG.XCD, eG.XDR, eG.XFU, eG.XOF, eG.XPD, eG.XPF, eG.XPT, eG.XSU, eG.XTS, eG.XUA, eG.YER, eG.ZAR, eG.ZMW, eG.ZWL;
    var NG = {
      exports: {}
    };
    ! function(bb, ub) {
      var hb = "__lodash_hash_undefined__",
        Bb = 9007199254740991,
        Gb = "[object Arguments]",
        Ub = "[object Array]",
        Lb = "[object Boolean]",
        Yb = "[object Date]",
        Sb = "[object Error]",
        ab = "[object Function]",
        Hb = "[object Map]",
        wb = "[object Number]",
        Zb = "[object Object]",
        Xb = "[object Promise]",
        pb = "[object RegExp]",
        ob = "[object Set]",
        Ab = "[object String]",
        lb = "[object Symbol]",
        Kb = "[object WeakMap]",
        Wb = "[object ArrayBuffer]",
        Cb = "[object DataView]",
        db = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        rb = /^\w*$/,
        jb = /^\./,
        nb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Db = /\\(\\)?/g,
        xb = /^\[object .+?Constructor\]$/,
        zb = /^(?:0|[1-9]\d*)$/,
        gb = {};
      gb["[object Float32Array]"] = gb["[object Float64Array]"] = gb["[object Int8Array]"] = gb["[object Int16Array]"] = gb["[object Int32Array]"] = gb["[object Uint8Array]"] = gb["[object Uint8ClampedArray]"] = gb["[object Uint16Array]"] = gb["[object Uint32Array]"] = !0, gb[Gb] = gb[Ub] = gb[Wb] = gb[Lb] = gb[Cb] = gb[Yb] = gb[Sb] = gb[ab] = gb[Hb] = gb[wb] = gb[Zb] = gb[pb] = gb[ob] = gb[Ab] = gb[Kb] = !1;
      var ib = "object" == typeof Ob && Ob && Ob.Object === Object && Ob,
        vb = "object" == typeof self && self && self.Object === Object && self,
        tb = ib || vb || Function("return this")(),
        Jb = ub && !ub.nodeType && ub,
        eb = Jb && bb && !bb.nodeType && bb,
        Nb = eb && eb.exports === Jb && ib.process,
        sb = function() {
          try {
            return Nb && Nb.binding("util")
          } catch (bb) {}
        }(),
        Mb = sb && sb.isTypedArray;

      function mb(bb, ub) {
        for (var hb = -1, Bb = bb ? bb.length : 0; ++hb < Bb && !1 !== ub(bb[hb], hb, bb););
        return bb
      }

      function Ib(bb, ub) {
        for (var hb = -1, Bb = bb ? bb.length : 0; ++hb < Bb;)
          if (ub(bb[hb], hb, bb)) return !0;
        return !1
      }

      function Pb(bb) {
        var ub = !1;
        if (null != bb && "function" != typeof bb.toString) try {
          ub = !!(bb + "")
        } catch (hb) {}
        return ub
      }

      function qb(bb) {
        var ub = -1,
          hb = Array(bb.size);
        return bb.forEach((function(bb, Bb) {
          hb[++ub] = [Bb, bb]
        })), hb
      }

      function Eb(bb, ub) {
        return function(hb) {
          return bb(ub(hb))
        }
      }

      function yb(bb) {
        var ub = -1,
          hb = Array(bb.size);
        return bb.forEach((function(bb) {
          hb[++ub] = bb
        })), hb
      }
      var Vb = Array.prototype,
        Fb = Function.prototype,
        fb = Object.prototype,
        kb = tb["__core-js_shared__"],
        Tb = function() {
          var bb = /[^.]+$/.exec(kb && kb.keys && kb.keys.IE_PROTO || "");
          return bb ? "Symbol(src)_1." + bb : ""
        }(),
        cb = Fb.toString,
        Qb = fb.hasOwnProperty,
        Rb = fb.toString,
        bu = RegExp("^" + cb.call(Qb).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        uu = tb.Symbol,
        hu = tb.Uint8Array,
        Bu = Eb(Object.getPrototypeOf, Object),
        Ou = Object.create,
        Gu = fb.propertyIsEnumerable,
        Uu = Vb.splice,
        Lu = Eb(Object.keys, Object),
        Yu = qu(tb, "DataView"),
        Su = qu(tb, "Map"),
        au = qu(tb, "Promise"),
        Hu = qu(tb, "Set"),
        wu = qu(tb, "WeakMap"),
        Zu = qu(Object, "create"),
        Xu = cu(Yu),
        pu = cu(Su),
        ou = cu(au),
        Au = cu(Hu),
        lu = cu(wu),
        Ku = uu ? uu.prototype : void 0,
        Wu = Ku ? Ku.valueOf : void 0,
        Cu = Ku ? Ku.toString : void 0;

      function du(bb) {
        var ub = -1,
          hb = bb ? bb.length : 0;
        for (this.clear(); ++ub < hb;) {
          var Bb = bb[ub];
          this.set(Bb[0], Bb[1])
        }
      }

      function ru(bb) {
        var ub = -1,
          hb = bb ? bb.length : 0;
        for (this.clear(); ++ub < hb;) {
          var Bb = bb[ub];
          this.set(Bb[0], Bb[1])
        }
      }

      function ju(bb) {
        var ub = -1,
          hb = bb ? bb.length : 0;
        for (this.clear(); ++ub < hb;) {
          var Bb = bb[ub];
          this.set(Bb[0], Bb[1])
        }
      }

      function nu(bb) {
        var ub = -1,
          hb = bb ? bb.length : 0;
        for (this.__data__ = new ju; ++ub < hb;) this.add(bb[ub])
      }

      function Du(bb) {
        this.__data__ = new ru(bb)
      }

      function xu(bb, ub) {
        var hb = uh(bb) || bh(bb) ? function(bb, ub) {
            for (var hb = -1, Bb = Array(bb); ++hb < bb;) Bb[hb] = ub(hb);
            return Bb
          }(bb.length, String) : [],
          Bb = hb.length,
          Ob = !!Bb;
        for (var Gb in bb) !ub && !Qb.call(bb, Gb) || Ob && ("length" == Gb || yu(Gb, Bb)) || hb.push(Gb);
        return hb
      }

      function zu(bb, ub) {
        for (var hb = bb.length; hb--;)
          if (Ru(bb[hb][0], ub)) return hb;
        return -1
      }
      du.prototype.clear = function() {
        this.__data__ = Zu ? Zu(null) : {}
      }, du.prototype.delete = function(bb) {
        return this.has(bb) && delete this.__data__[bb]
      }, du.prototype.get = function(bb) {
        var ub = this.__data__;
        if (Zu) {
          var Bb = ub[bb];
          return Bb === hb ? void 0 : Bb
        }
        return Qb.call(ub, bb) ? ub[bb] : void 0
      }, du.prototype.has = function(bb) {
        var ub = this.__data__;
        return Zu ? void 0 !== ub[bb] : Qb.call(ub, bb)
      }, du.prototype.set = function(bb, ub) {
        return this.__data__[bb] = Zu && void 0 === ub ? hb : ub, this
      }, ru.prototype.clear = function() {
        this.__data__ = []
      }, ru.prototype.delete = function(bb) {
        var ub = this.__data__,
          hb = zu(ub, bb);
        return !(hb < 0) && (hb == ub.length - 1 ? ub.pop() : Uu.call(ub, hb, 1), !0)
      }, ru.prototype.get = function(bb) {
        var ub = this.__data__,
          hb = zu(ub, bb);
        return hb < 0 ? void 0 : ub[hb][1]
      }, ru.prototype.has = function(bb) {
        return zu(this.__data__, bb) > -1
      }, ru.prototype.set = function(bb, ub) {
        var hb = this.__data__,
          Bb = zu(hb, bb);
        return Bb < 0 ? hb.push([bb, ub]) : hb[Bb][1] = ub, this
      }, ju.prototype.clear = function() {
        this.__data__ = {
          hash: new du,
          map: new(Su || ru),
          string: new du
        }
      }, ju.prototype.delete = function(bb) {
        return Pu(this, bb).delete(bb)
      }, ju.prototype.get = function(bb) {
        return Pu(this, bb).get(bb)
      }, ju.prototype.has = function(bb) {
        return Pu(this, bb).has(bb)
      }, ju.prototype.set = function(bb, ub) {
        return Pu(this, bb).set(bb, ub), this
      }, nu.prototype.add = nu.prototype.push = function(bb) {
        return this.__data__.set(bb, hb), this
      }, nu.prototype.has = function(bb) {
        return this.__data__.has(bb)
      }, Du.prototype.clear = function() {
        this.__data__ = new ru
      }, Du.prototype.delete = function(bb) {
        return this.__data__.delete(bb)
      }, Du.prototype.get = function(bb) {
        return this.__data__.get(bb)
      }, Du.prototype.has = function(bb) {
        return this.__data__.has(bb)
      }, Du.prototype.set = function(bb, ub) {
        var hb = this.__data__;
        if (hb instanceof ru) {
          var Bb = hb.__data__;
          if (!Su || Bb.length < 199) return Bb.push([bb, ub]), this;
          hb = this.__data__ = new ju(Bb)
        }
        return hb.set(bb, ub), this
      };
      var gu, iu = function(bb, ub, hb) {
        for (var Bb = -1, Ob = Object(bb), Gb = hb(bb), Ub = Gb.length; Ub--;) {
          var Lb = Gb[gu ? Ub : ++Bb];
          if (!1 === ub(Ob[Lb], Lb, Ob)) break
        }
        return bb
      };

      function vu(bb, ub) {
        return bb && iu(bb, ub, ah)
      }

      function tu(bb, ub) {
        for (var hb = 0, Bb = (ub = Vu(ub, bb) ? [ub] : mu(ub)).length; null != bb && hb < Bb;) bb = bb[Tu(ub[hb++])];
        return hb && hb == Bb ? bb : void 0
      }

      function Ju(bb, ub) {
        return null != bb && ub in Object(bb)
      }

      function eu(bb, ub, hb, Bb, Ob) {
        return bb === ub || (null == bb || null == ub || !Gh(bb) && !Uh(ub) ? bb !== bb && ub !== ub : function(bb, ub, hb, Bb, Ob, ab) {
          var Xb = uh(bb),
            Kb = uh(ub),
            db = Ub,
            rb = Ub;
          Xb || (db = (db = Eu(bb)) == Gb ? Zb : db);
          Kb || (rb = (rb = Eu(ub)) == Gb ? Zb : rb);
          var jb = db == Zb && !Pb(bb),
            nb = rb == Zb && !Pb(ub),
            Db = db == rb;
          if (Db && !jb) return ab || (ab = new Du), Xb || Sh(bb) ? Iu(bb, ub, hb, Bb, Ob, ab) : function(bb, ub, hb, Bb, Ob, Gb, Ub) {
            switch (hb) {
              case Cb:
                if (bb.byteLength != ub.byteLength || bb.byteOffset != ub.byteOffset) return !1;
                bb = bb.buffer, ub = ub.buffer;
              case Wb:
                return !(bb.byteLength != ub.byteLength || !Bb(new hu(bb), new hu(ub)));
              case Lb:
              case Yb:
              case wb:
                return Ru(+bb, +ub);
              case Sb:
                return bb.name == ub.name && bb.message == ub.message;
              case pb:
              case Ab:
                return bb == ub + "";
              case Hb:
                var ab = qb;
              case ob:
                var Zb = 2 & Gb;
                if (ab || (ab = yb), bb.size != ub.size && !Zb) return !1;
                var Xb = Ub.get(bb);
                if (Xb) return Xb == ub;
                Gb |= 1, Ub.set(bb, ub);
                var Kb = Iu(ab(bb), ab(ub), Bb, Ob, Gb, Ub);
                return Ub.delete(bb), Kb;
              case lb:
                if (Wu) return Wu.call(bb) == Wu.call(ub)
            }
            return !1
          }(bb, ub, db, hb, Bb, Ob, ab);
          if (!(2 & Ob)) {
            var xb = jb && Qb.call(bb, "__wrapped__"),
              zb = nb && Qb.call(ub, "__wrapped__");
            if (xb || zb) {
              var gb = xb ? bb.value() : bb,
                ib = zb ? ub.value() : ub;
              return ab || (ab = new Du), hb(gb, ib, Bb, Ob, ab)
            }
          }
          if (!Db) return !1;
          return ab || (ab = new Du),
            function(bb, ub, hb, Bb, Ob, Gb) {
              var Ub = 2 & Ob,
                Lb = ah(bb),
                Yb = Lb.length,
                Sb = ah(ub),
                ab = Sb.length;
              if (Yb != ab && !Ub) return !1;
              var Hb = Yb;
              for (; Hb--;) {
                var wb = Lb[Hb];
                if (!(Ub ? wb in ub : Qb.call(ub, wb))) return !1
              }
              var Zb = Gb.get(bb);
              if (Zb && Gb.get(ub)) return Zb == ub;
              var Xb = !0;
              Gb.set(bb, ub), Gb.set(ub, bb);
              var pb = Ub;
              for (; ++Hb < Yb;) {
                var ob = bb[wb = Lb[Hb]],
                  Ab = ub[wb];
                if (Bb) var lb = Ub ? Bb(Ab, ob, wb, ub, bb, Gb) : Bb(ob, Ab, wb, bb, ub, Gb);
                if (!(void 0 === lb ? ob === Ab || hb(ob, Ab, Bb, Ob, Gb) : lb)) {
                  Xb = !1;
                  break
                }
                pb || (pb = "constructor" == wb)
              }
              if (Xb && !pb) {
                var Kb = bb.constructor,
                  Wb = ub.constructor;
                Kb == Wb || !("constructor" in bb) || !("constructor" in ub) || "function" == typeof Kb && Kb instanceof Kb && "function" == typeof Wb && Wb instanceof Wb || (Xb = !1)
              }
              return Gb.delete(bb), Gb.delete(ub), Xb
            }(bb, ub, hb, Bb, Ob, ab)
        }(bb, ub, eu, hb, Bb, Ob))
      }

      function Nu(bb) {
        return !(!Gh(bb) || (ub = bb, Tb && Tb in ub)) && (Bh(bb) || Pb(bb) ? bu : xb).test(cu(bb));
        var ub
      }

      function su(bb) {
        return "function" == typeof bb ? bb : null == bb ? Hh : "object" == typeof bb ? uh(bb) ? function(bb, ub) {
          if (Vu(bb) && Fu(ub)) return fu(Tu(bb), ub);
          return function(hb) {
            var Bb = function(bb, ub, hb) {
              var Bb = null == bb ? void 0 : tu(bb, ub);
              return void 0 === Bb ? hb : Bb
            }(hb, bb);
            return void 0 === Bb && Bb === ub ? function(bb, ub) {
              return null != bb && function(bb, ub, hb) {
                ub = Vu(ub, bb) ? [ub] : mu(ub);
                var Bb, Ob = -1,
                  Gb = ub.length;
                for (; ++Ob < Gb;) {
                  var Ub = Tu(ub[Ob]);
                  if (!(Bb = null != bb && hb(bb, Ub))) break;
                  bb = bb[Ub]
                }
                if (Bb) return Bb;
                Gb = bb ? bb.length : 0;
                return !!Gb && Oh(Gb) && yu(Ub, Gb) && (uh(bb) || bh(bb))
              }(bb, ub, Ju)
            }(hb, bb) : eu(ub, Bb, void 0, 3)
          }
        }(bb[0], bb[1]) : function(bb) {
          var ub = function(bb) {
            var ub = ah(bb),
              hb = ub.length;
            for (; hb--;) {
              var Bb = ub[hb],
                Ob = bb[Bb];
              ub[hb] = [Bb, Ob, Fu(Ob)]
            }
            return ub
          }(bb);
          if (1 == ub.length && ub[0][2]) return fu(ub[0][0], ub[0][1]);
          return function(hb) {
            return hb === bb || function(bb, ub, hb, Bb) {
              var Ob = hb.length,
                Gb = Ob,
                Ub = !Bb;
              if (null == bb) return !Gb;
              for (bb = Object(bb); Ob--;) {
                var Lb = hb[Ob];
                if (Ub && Lb[2] ? Lb[1] !== bb[Lb[0]] : !(Lb[0] in bb)) return !1
              }
              for (; ++Ob < Gb;) {
                var Yb = (Lb = hb[Ob])[0],
                  Sb = bb[Yb],
                  ab = Lb[1];
                if (Ub && Lb[2]) {
                  if (void 0 === Sb && !(Yb in bb)) return !1
                } else {
                  var Hb = new Du;
                  if (Bb) var wb = Bb(Sb, ab, Yb, bb, ub, Hb);
                  if (!(void 0 === wb ? eu(ab, Sb, Bb, 3, Hb) : wb)) return !1
                }
              }
              return !0
            }(hb, bb, ub)
          }
        }(bb) : function(bb) {
          return Vu(bb) ? (ub = Tu(bb), function(bb) {
            return null == bb ? void 0 : bb[ub]
          }) : function(bb) {
            return function(ub) {
              return tu(ub, bb)
            }
          }(bb);
          var ub
        }(bb)
      }

      function Mu(bb) {
        if (! function(bb) {
            var ub = bb && bb.constructor,
              hb = "function" == typeof ub && ub.prototype || fb;
            return bb === hb
          }(bb)) return Lu(bb);
        var ub = [];
        for (var hb in Object(bb)) Qb.call(bb, hb) && "constructor" != hb && ub.push(hb);
        return ub
      }

      function mu(bb) {
        return uh(bb) ? bb : ku(bb)
      }

      function Iu(bb, ub, hb, Bb, Ob, Gb) {
        var Ub = 2 & Ob,
          Lb = bb.length,
          Yb = ub.length;
        if (Lb != Yb && !(Ub && Yb > Lb)) return !1;
        var Sb = Gb.get(bb);
        if (Sb && Gb.get(ub)) return Sb == ub;
        var ab = -1,
          Hb = !0,
          wb = 1 & Ob ? new nu : void 0;
        for (Gb.set(bb, ub), Gb.set(ub, bb); ++ab < Lb;) {
          var Zb = bb[ab],
            Xb = ub[ab];
          if (Bb) var pb = Ub ? Bb(Xb, Zb, ab, ub, bb, Gb) : Bb(Zb, Xb, ab, bb, ub, Gb);
          if (void 0 !== pb) {
            if (pb) continue;
            Hb = !1;
            break
          }
          if (wb) {
            if (!Ib(ub, (function(bb, ub) {
                if (!wb.has(ub) && (Zb === bb || hb(Zb, bb, Bb, Ob, Gb))) return wb.add(ub)
              }))) {
              Hb = !1;
              break
            }
          } else if (Zb !== Xb && !hb(Zb, Xb, Bb, Ob, Gb)) {
            Hb = !1;
            break
          }
        }
        return Gb.delete(bb), Gb.delete(ub), Hb
      }

      function Pu(bb, ub) {
        var hb = bb.__data__;
        return function(bb) {
          var ub = typeof bb;
          return "string" == ub || "number" == ub || "symbol" == ub || "boolean" == ub ? "__proto__" !== bb : null === bb
        }(ub) ? hb["string" == typeof ub ? "string" : "hash"] : hb.map
      }

      function qu(bb, ub) {
        var hb = function(bb, ub) {
          return null == bb ? void 0 : bb[ub]
        }(bb, ub);
        return Nu(hb) ? hb : void 0
      }
      var Eu = function(bb) {
        return Rb.call(bb)
      };

      function yu(bb, ub) {
        return !!(ub = null == ub ? Bb : ub) && ("number" == typeof bb || zb.test(bb)) && bb > -1 && bb % 1 == 0 && bb < ub
      }

      function Vu(bb, ub) {
        if (uh(bb)) return !1;
        var hb = typeof bb;
        return !("number" != hb && "symbol" != hb && "boolean" != hb && null != bb && !Lh(bb)) || (rb.test(bb) || !db.test(bb) || null != ub && bb in Object(ub))
      }

      function Fu(bb) {
        return bb === bb && !Gh(bb)
      }

      function fu(bb, ub) {
        return function(hb) {
          return null != hb && (hb[bb] === ub && (void 0 !== ub || bb in Object(hb)))
        }
      }(Yu && Eu(new Yu(new ArrayBuffer(1))) != Cb || Su && Eu(new Su) != Hb || au && Eu(au.resolve()) != Xb || Hu && Eu(new Hu) != ob || wu && Eu(new wu) != Kb) && (Eu = function(bb) {
        var ub = Rb.call(bb),
          hb = ub == Zb ? bb.constructor : void 0,
          Bb = hb ? cu(hb) : void 0;
        if (Bb) switch (Bb) {
          case Xu:
            return Cb;
          case pu:
            return Hb;
          case ou:
            return Xb;
          case Au:
            return ob;
          case lu:
            return Kb
        }
        return ub
      });
      var ku = Qu((function(bb) {
        var ub;
        bb = null == (ub = bb) ? "" : function(bb) {
          if ("string" == typeof bb) return bb;
          if (Lh(bb)) return Cu ? Cu.call(bb) : "";
          var ub = bb + "";
          return "0" == ub && 1 / bb == -1 / 0 ? "-0" : ub
        }(ub);
        var hb = [];
        return jb.test(bb) && hb.push(""), bb.replace(nb, (function(bb, ub, Bb, Ob) {
          hb.push(Bb ? Ob.replace(Db, "$1") : ub || bb)
        })), hb
      }));

      function Tu(bb) {
        if ("string" == typeof bb || Lh(bb)) return bb;
        var ub = bb + "";
        return "0" == ub && 1 / bb == -1 / 0 ? "-0" : ub
      }

      function cu(bb) {
        if (null != bb) {
          try {
            return cb.call(bb)
          } catch (ub) {}
          try {
            return bb + ""
          } catch (ub) {}
        }
        return ""
      }

      function Qu(bb, ub) {
        if ("function" != typeof bb || ub && "function" != typeof ub) throw new TypeError("Expected a function");
        var hb = function() {
          var Bb = arguments,
            Ob = ub ? ub.apply(this, Bb) : Bb[0],
            Gb = hb.cache;
          if (Gb.has(Ob)) return Gb.get(Ob);
          var Ub = bb.apply(this, Bb);
          return hb.cache = Gb.set(Ob, Ub), Ub
        };
        return hb.cache = new(Qu.Cache || ju), hb
      }

      function Ru(bb, ub) {
        return bb === ub || bb !== bb && ub !== ub
      }

      function bh(bb) {
        return function(bb) {
          return Uh(bb) && hh(bb)
        }(bb) && Qb.call(bb, "callee") && (!Gu.call(bb, "callee") || Rb.call(bb) == Gb)
      }
      Qu.Cache = ju;
      var uh = Array.isArray;

      function hh(bb) {
        return null != bb && Oh(bb.length) && !Bh(bb)
      }

      function Bh(bb) {
        var ub = Gh(bb) ? Rb.call(bb) : "";
        return ub == ab || "[object GeneratorFunction]" == ub
      }

      function Oh(bb) {
        return "number" == typeof bb && bb > -1 && bb % 1 == 0 && bb <= Bb
      }

      function Gh(bb) {
        var ub = typeof bb;
        return !!bb && ("object" == ub || "function" == ub)
      }

      function Uh(bb) {
        return !!bb && "object" == typeof bb
      }

      function Lh(bb) {
        return "symbol" == typeof bb || Uh(bb) && Rb.call(bb) == lb
      }
      var Yh, Sh = Mb ? (Yh = Mb, function(bb) {
        return Yh(bb)
      }) : function(bb) {
        return Uh(bb) && Oh(bb.length) && !!gb[Rb.call(bb)]
      };

      function ah(bb) {
        return hh(bb) ? xu(bb) : Mu(bb)
      }

      function Hh(bb) {
        return bb
      }
      bb.exports = function(bb, ub, hb) {
        var Bb, Ob = uh(bb) || Sh(bb);
        if (ub = su(ub), null == hb)
          if (Ob || Gh(bb)) {
            var Gb = bb.constructor;
            hb = Ob ? uh(bb) ? new Gb : [] : Bh(Gb) ? Gh(Bb = Bu(bb)) ? Ou(Bb) : {} : {}
          } else hb = {};
        return (Ob ? mb : vu)(bb, (function(bb, Bb, Ob) {
          return ub(hb, bb, Bb, Ob)
        })), hb
      }
    }(NG, NG.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      i: sG
    } = Bb
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);