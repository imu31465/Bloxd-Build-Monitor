export const id = 141;
export const ids = [141];
export const modules = {
  7720: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Ua,
      e: () => Gs
    });
    var kb = {};
    sb.r(kb), sb.d(kb, {
      e: () => ak,
      g: () => Ik,
      f: () => Uk,
      i: () => Fs,
      j: () => vs,
      l: () => Pk,
      o: () => bk,
      s: () => ik,
      w: () => hk,
      y: () => Ek,
      C: () => xs,
      D: () => gk,
      E: () => yk,
      I: () => Dk,
      M: () => ps,
      K: () => kk,
      N: () => tk,
      P: () => Bk
    });
    var Wb = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function ab(bb) {
      return bb && bb.__esModule && Object.prototype.hasOwnProperty.call(bb, "default") ? bb.default : bb
    }
    var Tb = {
      exports: {}
    };
    ! function(bb) {
      var cb = Object.prototype.hasOwnProperty,
        sb = "~";

      function kb() {}

      function Wb(bb, cb, sb) {
        this.Nm = bb, this.context = cb, this.once = sb || !1
      }

      function ab(bb, cb, kb, ab, Tb) {
        if ("function" !== typeof kb) throw new TypeError("The listener must be a function");
        var Ub = new Wb(kb, ab || bb, Tb),
          Ib = sb ? sb + cb : cb;
        return bb._events[Ib] ? bb._events[Ib].Nm ? bb._events[Ib] = [bb._events[Ib], Ub] : bb._events[Ib].push(Ub) : (bb._events[Ib] = Ub, bb._eventsCount++), bb
      }

      function Tb(bb, cb) {
        0 === --bb._eventsCount ? bb._events = new kb : delete bb._events[cb]
      }

      function Ub() {
        this._events = new kb, this._eventsCount = 0
      }
      Object.create && (kb.prototype = Object.create(null), (new kb).__proto__ || (sb = !1)), Ub.prototype.eventNames = function() {
        var bb, kb, Wb = [];
        if (0 === this._eventsCount) return Wb;
        for (kb in bb = this._events) cb.call(bb, kb) && Wb.push(sb ? kb.slice(1) : kb);
        return Object.getOwnPropertySymbols ? Wb.concat(Object.getOwnPropertySymbols(bb)) : Wb
      }, Ub.prototype.listeners = function(bb) {
        var cb = sb ? sb + bb : bb,
          kb = this._events[cb];
        if (!kb) return [];
        if (kb.Nm) return [kb.Nm];
        for (var Wb = 0, ab = kb.length, Tb = new Array(ab); Wb < ab; Wb++) Tb[Wb] = kb[Wb].Nm;
        return Tb
      }, Ub.prototype.listenerCount = function(bb) {
        var cb = sb ? sb + bb : bb,
          kb = this._events[cb];
        return kb ? kb.Nm ? 1 : kb.length : 0
      }, Ub.prototype.emit = function(bb, cb, kb, Wb, ab, Tb) {
        var Ub = sb ? sb + bb : bb;
        if (!this._events[Ub]) return !1;
        var Ib, Hb, fb = this._events[Ub],
          Mb = arguments.length;
        if (fb.Nm) {
          switch (fb.once && this.removeListener(bb, fb.Nm, void 0, !0), Mb) {
            case 1:
              return fb.Nm.call(fb.context), !0;
            case 2:
              return fb.Nm.call(fb.context, cb), !0;
            case 3:
              return fb.Nm.call(fb.context, cb, kb), !0;
            case 4:
              return fb.Nm.call(fb.context, cb, kb, Wb), !0;
            case 5:
              return fb.Nm.call(fb.context, cb, kb, Wb, ab), !0;
            case 6:
              return fb.Nm.call(fb.context, cb, kb, Wb, ab, Tb), !0
          }
          for (Hb = 1, Ib = new Array(Mb - 1); Hb < Mb; Hb++) Ib[Hb - 1] = arguments[Hb];
          fb.Nm.apply(fb.context, Ib)
        } else {
          var Xb, nb = fb.length;
          for (Hb = 0; Hb < nb; Hb++) switch (fb[Hb].once && this.removeListener(bb, fb[Hb].Nm, void 0, !0), Mb) {
            case 1:
              fb[Hb].Nm.call(fb[Hb].context);
              break;
            case 2:
              fb[Hb].Nm.call(fb[Hb].context, cb);
              break;
            case 3:
              fb[Hb].Nm.call(fb[Hb].context, cb, kb);
              break;
            case 4:
              fb[Hb].Nm.call(fb[Hb].context, cb, kb, Wb);
              break;
            default:
              if (!Ib)
                for (Xb = 1, Ib = new Array(Mb - 1); Xb < Mb; Xb++) Ib[Xb - 1] = arguments[Xb];
              fb[Hb].Nm.apply(fb[Hb].context, Ib)
          }
        }
        return !0
      }, Ub.prototype.on = function(bb, cb, sb) {
        return ab(this, bb, cb, sb, !1)
      }, Ub.prototype.once = function(bb, cb, sb) {
        return ab(this, bb, cb, sb, !0)
      }, Ub.prototype.removeListener = function(bb, cb, kb, Wb) {
        var ab = sb ? sb + bb : bb;
        if (!this._events[ab]) return this;
        if (!cb) return Tb(this, ab), this;
        var Ub = this._events[ab];
        if (Ub.Nm) Ub.Nm !== cb || Wb && !Ub.once || kb && Ub.context !== kb || Tb(this, ab);
        else {
          for (var Ib = 0, Hb = [], fb = Ub.length; Ib < fb; Ib++)(Ub[Ib].Nm !== cb || Wb && !Ub[Ib].once || kb && Ub[Ib].context !== kb) && Hb.push(Ub[Ib]);
          Hb.length ? this._events[ab] = 1 === Hb.length ? Hb[0] : Hb : Tb(this, ab)
        }
        return this
      }, Ub.prototype.mC = function(bb) {
        var cb;
        return bb ? (cb = sb ? sb + bb : bb, this._events[cb] && Tb(this, cb)) : (this._events = new kb, this._eventsCount = 0), this
      }, Ub.prototype.off = Ub.prototype.removeListener, Ub.prototype.addListener = Ub.prototype.on, Ub.prefixed = sb, Ub.EventEmitter = Ub, bb.exports = Ub
    }(Tb);
    var Ub, Ib, Hb = ab(Tb.exports);
    ! function(bb) {
      bb.assertEqual = bb => bb, bb.assertIs = function(bb) {}, bb.assertNever = function(bb) {
        throw new Error
      }, bb.arrayToEnum = bb => {
        const cb = {};
        for (const sb of bb) cb[sb] = sb;
        return cb
      }, bb.getValidEnumValues = cb => {
        const sb = bb.objectKeys(cb).filter((bb => "number" !== typeof cb[cb[bb]])),
          kb = {};
        for (const bb of sb) kb[bb] = cb[bb];
        return bb.objectValues(kb)
      }, bb.objectValues = cb => bb.objectKeys(cb).map((function(bb) {
        return cb[bb]
      })), bb.objectKeys = "function" === typeof Object.keys ? bb => Object.keys(bb) : bb => {
        const cb = [];
        for (const sb in bb) Object.prototype.hasOwnProperty.call(bb, sb) && cb.push(sb);
        return cb
      }, bb.find = (bb, cb) => {
        for (const sb of bb)
          if (cb(sb)) return sb
      }, bb.isInteger = "function" === typeof Number.isInteger ? bb => Number.isInteger(bb) : bb => "number" === typeof bb && isFinite(bb) && Math.floor(bb) === bb, bb.joinValues = function(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return bb.map((bb => "string" === typeof bb ? `'${bb}'` : bb)).join(cb)
      }, bb.jsonStringifyReplacer = (bb, cb) => "bigint" === typeof cb ? cb.toString() : cb
    }(Ub || (Ub = {})),
    function(bb) {
      bb.mergeShapes = (bb, cb) => ({
        ...bb,
        ...cb
      })
    }(Ib || (Ib = {}));
    const fb = Ub.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      Mb = bb => {
        switch (typeof bb) {
          case "undefined":
            return fb.undefined;
          case "string":
            return fb.string;
          case "number":
            return isNaN(bb) ? fb.nan : fb.number;
          case "boolean":
            return fb.boolean;
          case "function":
            return fb.function;
          case "bigint":
            return fb.bigint;
          case "symbol":
            return fb.symbol;
          case "object":
            return Array.isArray(bb) ? fb.array : null === bb ? fb.null : bb.then && "function" === typeof bb.then && bb.catch && "function" === typeof bb.catch ? fb.promise : "undefined" !== typeof Map && bb instanceof Map ? fb.map : "undefined" !== typeof Set && bb instanceof Set ? fb.set : "undefined" !== typeof Date && bb instanceof Date ? fb.date : fb.object;
          default:
            return fb.unknown
        }
      },
      Xb = Ub.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class nb extends Error {
      constructor(bb) {
        var cb;
        super(), cb = this, this.issues = [], this.addIssue = bb => {
          this.issues = [...this.issues, bb]
        }, this.addIssues = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          cb.issues = [...cb.issues, ...bb]
        };
        const sb = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, sb) : this.__proto__ = sb, this.name = "ZodError", this.issues = bb
      }
      get errors() {
        return this.issues
      }
      format(bb) {
        const cb = bb || function(bb) {
            return bb.message
          },
          sb = {
            _errors: []
          },
          kb = bb => {
            for (const Wb of bb.issues)
              if ("invalid_union" === Wb.code) Wb.unionErrors.map(kb);
              else if ("invalid_return_type" === Wb.code) kb(Wb.returnTypeError);
            else if ("invalid_arguments" === Wb.code) kb(Wb.argumentsError);
            else if (0 === Wb.path.length) sb._errors.push(cb(Wb));
            else {
              let bb = sb,
                kb = 0;
              for (; kb < Wb.path.length;) {
                const sb = Wb.path[kb];
                kb === Wb.path.length - 1 ? (bb[sb] = bb[sb] || {
                  _errors: []
                }, bb[sb]._errors.push(cb(Wb))) : bb[sb] = bb[sb] || {
                  _errors: []
                }, bb = bb[sb], kb++
              }
            }
          };
        return kb(this), sb
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, Ub.jsonStringifyReplacer, 2)
      }
      get Ym() {
        return 0 === this.issues.length
      }
      flatten() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bb => bb.message;
        const cb = {},
          sb = [];
        for (const kb of this.issues) kb.path.length > 0 ? (cb[kb.path[0]] = cb[kb.path[0]] || [], cb[kb.path[0]].push(bb(kb))) : sb.push(bb(kb));
        return {
          formErrors: sb,
          fieldErrors: cb
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    nb.create = bb => new nb(bb);
    const mb = (bb, cb) => {
      let sb;
      switch (bb.code) {
        case Xb.invalid_type:
          sb = bb.received === fb.undefined ? "Required" : `Expected ${bb.expected}, received ${bb.received}`;
          break;
        case Xb.invalid_literal:
          sb = `Invalid literal value, expected ${JSON.stringify(bb.expected,Ub.jsonStringifyReplacer)}`;
          break;
        case Xb.unrecognized_keys:
          sb = `Unrecognized key(s) in object: ${Ub.joinValues(bb.keys,", ")}`;
          break;
        case Xb.invalid_union:
          sb = "Invalid input";
          break;
        case Xb.invalid_union_discriminator:
          sb = `Invalid discriminator value. Expected ${Ub.joinValues(bb.options)}`;
          break;
        case Xb.invalid_enum_value:
          sb = `Invalid enum value. Expected ${Ub.joinValues(bb.options)}, received '${bb.received}'`;
          break;
        case Xb.invalid_arguments:
          sb = "Invalid function arguments";
          break;
        case Xb.invalid_return_type:
          sb = "Invalid function return type";
          break;
        case Xb.invalid_date:
          sb = "Invalid date";
          break;
        case Xb.invalid_string:
          "object" === typeof bb.validation ? "includes" in bb.validation ? (sb = `Invalid input: must include "${bb.validation.includes}"`, "number" === typeof bb.validation.position && (sb = `${sb} at one or more positions greater than or equal to ${bb.validation.position}`)) : "startsWith" in bb.validation ? sb = `Invalid input: must start with "${bb.validation.startsWith}"` : "endsWith" in bb.validation ? sb = `Invalid input: must end with "${bb.validation.endsWith}"` : Ub.assertNever(bb.validation) : sb = "regex" !== bb.validation ? `Invalid ${bb.validation}` : "Invalid";
          break;
        case Xb.too_small:
          sb = "array" === bb.type ? `Array must contain ${bb.exact?"exactly":bb.inclusive?"at least":"more than"} ${bb.minimum} element(s)` : "string" === bb.type ? `String must contain ${bb.exact?"exactly":bb.inclusive?"at least":"over"} ${bb.minimum} character(s)` : "number" === bb.type ? `Number must be ${bb.exact?"exactly equal to ":bb.inclusive?"greater than or equal to ":"greater than "}${bb.minimum}` : "date" === bb.type ? `Date must be ${bb.exact?"exactly equal to ":bb.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(bb.minimum))}` : "Invalid input";
          break;
        case Xb.too_big:
          sb = "array" === bb.type ? `Array must contain ${bb.exact?"exactly":bb.inclusive?"at most":"less than"} ${bb.maximum} element(s)` : "string" === bb.type ? `String must contain ${bb.exact?"exactly":bb.inclusive?"at most":"under"} ${bb.maximum} character(s)` : "number" === bb.type ? `Number must be ${bb.exact?"exactly":bb.inclusive?"less than or equal to":"less than"} ${bb.maximum}` : "bigint" === bb.type ? `BigInt must be ${bb.exact?"exactly":bb.inclusive?"less than or equal to":"less than"} ${bb.maximum}` : "date" === bb.type ? `Date must be ${bb.exact?"exactly":bb.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(bb.maximum))}` : "Invalid input";
          break;
        case Xb.custom:
          sb = "Invalid input";
          break;
        case Xb.invalid_intersection_types:
          sb = "Intersection results could not be merged";
          break;
        case Xb.not_multiple_of:
          sb = `Number must be a multiple of ${bb.multipleOf}`;
          break;
        case Xb.not_finite:
          sb = "Number must be finite";
          break;
        default:
          sb = cb.defaultError, Ub.assertNever(bb)
      }
      return {
        message: sb
      }
    };
    let lb = mb;

    function Qb() {
      return lb
    }
    const eb = bb => {
      const {
        data: cb,
        path: sb,
        errorMaps: kb,
        issueData: Wb
      } = bb, ab = [...sb, ...Wb.path || []], Tb = {
        ...Wb,
        path: ab
      };
      let Ub = "";
      const Ib = kb.filter((bb => !!bb)).slice().reverse();
      for (const Hb of Ib) Ub = Hb(Tb, {
        data: cb,
        defaultError: Ub
      }).message;
      return {
        ...Wb,
        path: ab,
        message: Wb.message || Ub
      }
    };

    function Cb(bb, cb) {
      const sb = eb({
        issueData: cb,
        data: bb.data,
        path: bb.path,
        errorMaps: [bb.common.contextualErrorMap, bb.schemaErrorMap, Qb(), mb].filter((bb => !!bb))
      });
      bb.common.issues.push(sb)
    }
    class Nb {
      constructor() {
        this.value = "valid"
      }
      sl() {
        "valid" === this.value && (this.value = "sl")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(bb, cb) {
        const sb = [];
        for (const kb of cb) {
          if ("aborted" === kb.status) return Vb;
          "sl" === kb.status && bb.sl(), sb.push(kb.value)
        }
        return {
          status: bb.value,
          value: sb
        }
      }
      static async mergeObjectAsync(bb, cb) {
        const sb = [];
        for (const kb of cb) sb.push({
          key: await kb.key,
          value: await kb.value
        });
        return Nb.mergeObjectSync(bb, sb)
      }
      static mergeObjectSync(bb, cb) {
        const sb = {};
        for (const kb of cb) {
          const {
            key: cb,
            value: Wb
          } = kb;
          if ("aborted" === cb.status) return Vb;
          if ("aborted" === Wb.status) return Vb;
          "sl" === cb.status && bb.sl(), "sl" === Wb.status && bb.sl(), "__proto__" === cb.value || "undefined" === typeof Wb.value && !kb.alwaysSet || (sb[cb.value] = Wb.value)
        }
        return {
          status: bb.value,
          value: sb
        }
      }
    }
    const Vb = Object.freeze({
        status: "aborted"
      }),
      Lb = bb => ({
        status: "sl",
        value: bb
      }),
      ub = bb => ({
        status: "valid",
        value: bb
      }),
      Yb = bb => "aborted" === bb.status,
      hb = bb => "sl" === bb.status,
      Jb = bb => "valid" === bb.status,
      gb = bb => "undefined" !== typeof Promise && bb instanceof Promise;
    var Bb;
    ! function(bb) {
      bb.errToObj = bb => "string" === typeof bb ? {
        message: bb
      } : bb || {}, bb.toString = bb => "string" === typeof bb ? bb : null === bb || void 0 === bb ? void 0 : bb.message
    }(Bb || (Bb = {}));
    class tb {
      constructor(bb, cb, sb, kb) {
        this._cachedPath = [], this.parent = bb, this.data = cb, this._path = sb, this._key = kb
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const yb = (bb, cb) => {
      if (Jb(cb)) return {
        success: !0,
        data: cb.value
      };
      if (!bb.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const cb = new nb(bb.common.issues);
          return this._error = cb, this._error
        }
      }
    };

    function Pb(bb) {
      if (!bb) return {};
      const {
        errorMap: cb,
        invalid_type_error: sb,
        required_error: kb,
        description: Wb
      } = bb;
      if (cb && (sb || kb)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (cb) return {
        errorMap: cb,
        description: Wb
      };
      return {
        errorMap: (bb, cb) => "invalid_type" !== bb.code ? {
          message: cb.defaultError
        } : "undefined" === typeof cb.data ? {
          message: null !== kb && void 0 !== kb ? kb : cb.defaultError
        } : {
          message: null !== sb && void 0 !== sb ? sb : cb.defaultError
        },
        description: Wb
      }
    }
    class Db {
      constructor(bb) {
        this.spa = this.safeParseAsync, this._def = bb, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(bb) {
        return Mb(bb.data)
      }
      _getOrReturnCtx(bb, cb) {
        return cb || {
          common: bb.parent.common,
          data: bb.data,
          parsedType: Mb(bb.data),
          schemaErrorMap: this._def.errorMap,
          path: bb.path,
          parent: bb.parent
        }
      }
      _processInputParams(bb) {
        return {
          status: new Nb,
          ctx: {
            common: bb.parent.common,
            data: bb.data,
            parsedType: Mb(bb.data),
            schemaErrorMap: this._def.errorMap,
            path: bb.path,
            parent: bb.parent
          }
        }
      }
      _parseSync(bb) {
        const cb = this._parse(bb);
        if (gb(cb)) throw new Error("Synchronous parse encountered promise.");
        return cb
      }
      _parseAsync(bb) {
        const cb = this._parse(bb);
        return Promise.resolve(cb)
      }
      parse(bb, cb) {
        const sb = this.safeParse(bb, cb);
        if (sb.success) return sb.data;
        throw sb.error
      }
      safeParse(bb, cb) {
        var sb;
        const kb = {
            common: {
              issues: [],
              async: null !== (sb = null === cb || void 0 === cb ? void 0 : cb.async) && void 0 !== sb && sb,
              contextualErrorMap: null === cb || void 0 === cb ? void 0 : cb.errorMap
            },
            path: (null === cb || void 0 === cb ? void 0 : cb.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: bb,
            parsedType: Mb(bb)
          },
          Wb = this._parseSync({
            data: bb,
            path: kb.path,
            parent: kb
          });
        return yb(kb, Wb)
      }
      async parseAsync(bb, cb) {
        const sb = await this.safeParseAsync(bb, cb);
        if (sb.success) return sb.data;
        throw sb.error
      }
      async safeParseAsync(bb, cb) {
        const sb = {
            common: {
              issues: [],
              contextualErrorMap: null === cb || void 0 === cb ? void 0 : cb.errorMap,
              async: !0
            },
            path: (null === cb || void 0 === cb ? void 0 : cb.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: bb,
            parsedType: Mb(bb)
          },
          kb = this._parse({
            data: bb,
            path: sb.path,
            parent: sb
          }),
          Wb = await (gb(kb) ? kb : Promise.resolve(kb));
        return yb(sb, Wb)
      }
      refine(bb, cb) {
        const sb = bb => "string" === typeof cb || "undefined" === typeof cb ? {
          message: cb
        } : "function" === typeof cb ? cb(bb) : cb;
        return this._refinement(((cb, kb) => {
          const Wb = bb(cb),
            ab = () => kb.addIssue({
              code: Xb.custom,
              ...sb(cb)
            });
          return "undefined" !== typeof Promise && Wb instanceof Promise ? Wb.then((bb => !!bb || (ab(), !1))) : !!Wb || (ab(), !1)
        }))
      }
      refinement(bb, cb) {
        return this._refinement(((sb, kb) => !!bb(sb) || (kb.addIssue("function" === typeof cb ? cb(sb, kb) : cb), !1)))
      }
      _refinement(bb) {
        return new Vc({
          schema: this,
          typeName: Ec.ZodEffects,
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
        return Lc.create(this, this._def)
      }
      nullable() {
        return uc.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return cc.create(this, this._def)
      }
      promise() {
        return Nc.create(this, this._def)
      }
      or(bb) {
        return Wc.create([this, bb], this._def)
      }
      and(bb) {
        return Ic.create(this, bb, this._def)
      }
      transform(bb) {
        return new Vc({
          ...Pb(this._def),
          schema: this,
          typeName: Ec.ZodEffects,
          effect: {
            type: "transform",
            transform: bb
          }
        })
      }
      default (bb) {
        const cb = "function" === typeof bb ? bb : () => bb;
        return new Yc({
          ...Pb(this._def),
          innerType: this,
          defaultValue: cb,
          typeName: Ec.ZodDefault
        })
      }
      brand() {
        return new Bc({
          typeName: Ec.ZodBranded,
          type: this,
          ...Pb(this._def)
        })
      } catch (bb) {
        const cb = "function" === typeof bb ? bb : () => bb;
        return new hc({
          ...Pb(this._def),
          innerType: this,
          catchValue: cb,
          typeName: Ec.ZodCatch
        })
      }
      describe(bb) {
        return new(0, this.constructor)({
          ...this._def,
          description: bb
        })
      }
      pipe(bb) {
        return tc.create(this, bb)
      }
      readonly() {
        return yc.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const Eb = /^c[^\s-]{8,}$/i,
      ib = /^[a-z][a-z0-9]*$/,
      Ob = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      Gb = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      Kb = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let Zb;
    const zb = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      qb = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class db extends Db {
      _parse(bb) {
        this._def.coerce && (bb.data = String(bb.data));
        if (this._getType(bb) !== fb.string) {
          const cb = this._getOrReturnCtx(bb);
          return Cb(cb, {
            code: Xb.invalid_type,
            expected: fb.string,
            received: cb.parsedType
          }), Vb
        }
        const cb = new Nb;
        let sb;
        for (const Ib of this._def.checks)
          if ("min" === Ib.kind) bb.data.length < Ib.value && (sb = this._getOrReturnCtx(bb, sb), Cb(sb, {
            code: Xb.too_small,
            minimum: Ib.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: Ib.message
          }), cb.sl());
          else if ("max" === Ib.kind) bb.data.length > Ib.value && (sb = this._getOrReturnCtx(bb, sb), Cb(sb, {
          code: Xb.too_big,
          maximum: Ib.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: Ib.message
        }), cb.sl());
        else if ("length" === Ib.kind) {
          const kb = bb.data.length > Ib.value,
            Wb = bb.data.length < Ib.value;
          (kb || Wb) && (sb = this._getOrReturnCtx(bb, sb), kb ? Cb(sb, {
            code: Xb.too_big,
            maximum: Ib.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: Ib.message
          }) : Wb && Cb(sb, {
            code: Xb.too_small,
            minimum: Ib.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: Ib.message
          }), cb.sl())
        } else if ("email" === Ib.kind) Kb.test(bb.data) || (sb = this._getOrReturnCtx(bb, sb), Cb(sb, {
          validation: "email",
          code: Xb.invalid_string,
          message: Ib.message
        }), cb.sl());
        else if ("emoji" === Ib.kind) Zb || (Zb = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Zb.test(bb.data) || (sb = this._getOrReturnCtx(bb, sb), Cb(sb, {
          validation: "emoji",
          code: Xb.invalid_string,
          message: Ib.message
        }), cb.sl());
        else if ("uuid" === Ib.kind) Gb.test(bb.data) || (sb = this._getOrReturnCtx(bb, sb), Cb(sb, {
          validation: "uuid",
          code: Xb.invalid_string,
          message: Ib.message
        }), cb.sl());
        else if ("cuid" === Ib.kind) Eb.test(bb.data) || (sb = this._getOrReturnCtx(bb, sb), Cb(sb, {
          validation: "cuid",
          code: Xb.invalid_string,
          message: Ib.message
        }), cb.sl());
        else if ("cuid2" === Ib.kind) ib.test(bb.data) || (sb = this._getOrReturnCtx(bb, sb), Cb(sb, {
          validation: "cuid2",
          code: Xb.invalid_string,
          message: Ib.message
        }), cb.sl());
        else if ("ulid" === Ib.kind) Ob.test(bb.data) || (sb = this._getOrReturnCtx(bb, sb), Cb(sb, {
          validation: "ulid",
          code: Xb.invalid_string,
          message: Ib.message
        }), cb.sl());
        else if ("url" === Ib.kind) try {
          new URL(bb.data)
        } catch (Tb) {
          sb = this._getOrReturnCtx(bb, sb), Cb(sb, {
            validation: "url",
            code: Xb.invalid_string,
            message: Ib.message
          }), cb.sl()
        } else if ("regex" === Ib.kind) {
          Ib.regex.lastIndex = 0;
          Ib.regex.test(bb.data) || (sb = this._getOrReturnCtx(bb, sb), Cb(sb, {
            validation: "regex",
            code: Xb.invalid_string,
            message: Ib.message
          }), cb.sl())
        } else if ("trim" === Ib.kind) bb.data = bb.data.trim();
        else if ("includes" === Ib.kind) bb.data.includes(Ib.value, Ib.position) || (sb = this._getOrReturnCtx(bb, sb), Cb(sb, {
          code: Xb.invalid_string,
          validation: {
            includes: Ib.value,
            position: Ib.position
          },
          message: Ib.message
        }), cb.sl());
        else if ("toLowerCase" === Ib.kind) bb.data = bb.data.toLowerCase();
        else if ("toUpperCase" === Ib.kind) bb.data = bb.data.toUpperCase();
        else if ("startsWith" === Ib.kind) bb.data.startsWith(Ib.value) || (sb = this._getOrReturnCtx(bb, sb), Cb(sb, {
          code: Xb.invalid_string,
          validation: {
            startsWith: Ib.value
          },
          message: Ib.message
        }), cb.sl());
        else if ("endsWith" === Ib.kind) bb.data.endsWith(Ib.value) || (sb = this._getOrReturnCtx(bb, sb), Cb(sb, {
          code: Xb.invalid_string,
          validation: {
            endsWith: Ib.value
          },
          message: Ib.message
        }), cb.sl());
        else if ("datetime" === Ib.kind) {
          ((ab = Ib).precision ? ab.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${ab.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${ab.precision}}Z$`) : 0 === ab.precision ? ab.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : ab.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(bb.data) || (sb = this._getOrReturnCtx(bb, sb), Cb(sb, {
            code: Xb.invalid_string,
            validation: "datetime",
            message: Ib.message
          }), cb.sl())
        } else "ip" === Ib.kind ? (kb = bb.data, ("v4" !== (Wb = Ib.version) && Wb || !zb.test(kb)) && ("v6" !== Wb && Wb || !qb.test(kb)) && (sb = this._getOrReturnCtx(bb, sb), Cb(sb, {
          validation: "ip",
          code: Xb.invalid_string,
          message: Ib.message
        }), cb.sl())) : Ub.assertNever(Ib);
        var kb, Wb, ab;
        return {
          status: cb.value,
          value: bb.data
        }
      }
      _regex(bb, cb, sb) {
        return this.refinement((cb => bb.test(cb)), {
          validation: cb,
          code: Xb.invalid_string,
          ...Bb.errToObj(sb)
        })
      }
      _addCheck(bb) {
        return new db({
          ...this._def,
          checks: [...this._def.checks, bb]
        })
      }
      email(bb) {
        return this._addCheck({
          kind: "email",
          ...Bb.errToObj(bb)
        })
      }
      url(bb) {
        return this._addCheck({
          kind: "url",
          ...Bb.errToObj(bb)
        })
      }
      emoji(bb) {
        return this._addCheck({
          kind: "emoji",
          ...Bb.errToObj(bb)
        })
      }
      uuid(bb) {
        return this._addCheck({
          kind: "uuid",
          ...Bb.errToObj(bb)
        })
      }
      cuid(bb) {
        return this._addCheck({
          kind: "cuid",
          ...Bb.errToObj(bb)
        })
      }
      cuid2(bb) {
        return this._addCheck({
          kind: "cuid2",
          ...Bb.errToObj(bb)
        })
      }
      ulid(bb) {
        return this._addCheck({
          kind: "ulid",
          ...Bb.errToObj(bb)
        })
      }
      ip(bb) {
        return this._addCheck({
          kind: "ip",
          ...Bb.errToObj(bb)
        })
      }
      datetime(bb) {
        var cb;
        return "string" === typeof bb ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: bb
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === bb || void 0 === bb ? void 0 : bb.precision) ? null : null === bb || void 0 === bb ? void 0 : bb.precision,
          offset: null !== (cb = null === bb || void 0 === bb ? void 0 : bb.offset) && void 0 !== cb && cb,
          ...Bb.errToObj(null === bb || void 0 === bb ? void 0 : bb.message)
        })
      }
      regex(bb, cb) {
        return this._addCheck({
          kind: "regex",
          regex: bb,
          ...Bb.errToObj(cb)
        })
      }
      includes(bb, cb) {
        return this._addCheck({
          kind: "includes",
          value: bb,
          position: null === cb || void 0 === cb ? void 0 : cb.position,
          ...Bb.errToObj(null === cb || void 0 === cb ? void 0 : cb.message)
        })
      }
      startsWith(bb, cb) {
        return this._addCheck({
          kind: "startsWith",
          value: bb,
          ...Bb.errToObj(cb)
        })
      }
      endsWith(bb, cb) {
        return this._addCheck({
          kind: "endsWith",
          value: bb,
          ...Bb.errToObj(cb)
        })
      }
      min(bb, cb) {
        return this._addCheck({
          kind: "min",
          value: bb,
          ...Bb.errToObj(cb)
        })
      }
      max(bb, cb) {
        return this._addCheck({
          kind: "max",
          value: bb,
          ...Bb.errToObj(cb)
        })
      }
      length(bb, cb) {
        return this._addCheck({
          kind: "length",
          value: bb,
          ...Bb.errToObj(cb)
        })
      }
      nonempty(bb) {
        return this.min(1, Bb.errToObj(bb))
      }
      trim() {
        return new db({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new db({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new db({
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
        for (const cb of this._def.checks) "min" === cb.kind && (null === bb || cb.value > bb) && (bb = cb.value);
        return bb
      }
      get maxLength() {
        let bb = null;
        for (const cb of this._def.checks) "max" === cb.kind && (null === bb || cb.value < bb) && (bb = cb.value);
        return bb
      }
    }

    function Ab(bb, cb) {
      const sb = (bb.toString().split(".")[1] || "").length,
        kb = (cb.toString().split(".")[1] || "").length,
        Wb = sb > kb ? sb : kb;
      return parseInt(bb.toFixed(Wb).replace(".", "")) % parseInt(cb.toFixed(Wb).replace(".", "")) / Math.pow(10, Wb)
    }
    db.create = bb => {
      var cb;
      return new db({
        checks: [],
        typeName: Ec.ZodString,
        coerce: null !== (cb = null === bb || void 0 === bb ? void 0 : bb.coerce) && void 0 !== cb && cb,
        ...Pb(bb)
      })
    };
    class wb extends Db {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(bb) {
        this._def.coerce && (bb.data = Number(bb.data));
        if (this._getType(bb) !== fb.number) {
          const cb = this._getOrReturnCtx(bb);
          return Cb(cb, {
            code: Xb.invalid_type,
            expected: fb.number,
            received: cb.parsedType
          }), Vb
        }
        let cb;
        const sb = new Nb;
        for (const kb of this._def.checks)
          if ("int" === kb.kind) Ub.isInteger(bb.data) || (cb = this._getOrReturnCtx(bb, cb), Cb(cb, {
            code: Xb.invalid_type,
            expected: "integer",
            received: "float",
            message: kb.message
          }), sb.sl());
          else if ("min" === kb.kind) {
          (kb.inclusive ? bb.data < kb.value : bb.data <= kb.value) && (cb = this._getOrReturnCtx(bb, cb), Cb(cb, {
            code: Xb.too_small,
            minimum: kb.value,
            type: "number",
            inclusive: kb.inclusive,
            exact: !1,
            message: kb.message
          }), sb.sl())
        } else if ("max" === kb.kind) {
          (kb.inclusive ? bb.data > kb.value : bb.data >= kb.value) && (cb = this._getOrReturnCtx(bb, cb), Cb(cb, {
            code: Xb.too_big,
            maximum: kb.value,
            type: "number",
            inclusive: kb.inclusive,
            exact: !1,
            message: kb.message
          }), sb.sl())
        } else "multipleOf" === kb.kind ? 0 !== Ab(bb.data, kb.value) && (cb = this._getOrReturnCtx(bb, cb), Cb(cb, {
          code: Xb.not_multiple_of,
          multipleOf: kb.value,
          message: kb.message
        }), sb.sl()) : "finite" === kb.kind ? Number.isFinite(bb.data) || (cb = this._getOrReturnCtx(bb, cb), Cb(cb, {
          code: Xb.not_finite,
          message: kb.message
        }), sb.sl()) : Ub.assertNever(kb);
        return {
          status: sb.value,
          value: bb.data
        }
      }
      gte(bb, cb) {
        return this.setLimit("min", bb, !0, Bb.toString(cb))
      }
      gt(bb, cb) {
        return this.setLimit("min", bb, !1, Bb.toString(cb))
      }
      lte(bb, cb) {
        return this.setLimit("max", bb, !0, Bb.toString(cb))
      }
      lt(bb, cb) {
        return this.setLimit("max", bb, !1, Bb.toString(cb))
      }
      setLimit(bb, cb, sb, kb) {
        return new wb({
          ...this._def,
          checks: [...this._def.checks, {
            kind: bb,
            value: cb,
            inclusive: sb,
            message: Bb.toString(kb)
          }]
        })
      }
      _addCheck(bb) {
        return new wb({
          ...this._def,
          checks: [...this._def.checks, bb]
        })
      }
      int(bb) {
        return this._addCheck({
          kind: "int",
          message: Bb.toString(bb)
        })
      }
      positive(bb) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: Bb.toString(bb)
        })
      }
      negative(bb) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: Bb.toString(bb)
        })
      }
      nonpositive(bb) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: Bb.toString(bb)
        })
      }
      nonnegative(bb) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: Bb.toString(bb)
        })
      }
      multipleOf(bb, cb) {
        return this._addCheck({
          kind: "multipleOf",
          value: bb,
          message: Bb.toString(cb)
        })
      }
      finite(bb) {
        return this._addCheck({
          kind: "finite",
          message: Bb.toString(bb)
        })
      }
      safe(bb) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: Bb.toString(bb)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: Bb.toString(bb)
        })
      }
      get minValue() {
        let bb = null;
        for (const cb of this._def.checks) "min" === cb.kind && (null === bb || cb.value > bb) && (bb = cb.value);
        return bb
      }
      get maxValue() {
        let bb = null;
        for (const cb of this._def.checks) "max" === cb.kind && (null === bb || cb.value < bb) && (bb = cb.value);
        return bb
      }
      get isInt() {
        return !!this._def.checks.find((bb => "int" === bb.kind || "multipleOf" === bb.kind && Ub.isInteger(bb.value)))
      }
      get isFinite() {
        let bb = null,
          cb = null;
        for (const sb of this._def.checks) {
          if ("finite" === sb.kind || "int" === sb.kind || "multipleOf" === sb.kind) return !0;
          "min" === sb.kind ? (null === cb || sb.value > cb) && (cb = sb.value) : "max" === sb.kind && (null === bb || sb.value < bb) && (bb = sb.value)
        }
        return Number.isFinite(cb) && Number.isFinite(bb)
      }
    }
    wb.create = bb => new wb({
      checks: [],
      typeName: Ec.ZodNumber,
      coerce: (null === bb || void 0 === bb ? void 0 : bb.coerce) || !1,
      ...Pb(bb)
    });
    class rb extends Db {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(bb) {
        this._def.coerce && (bb.data = BigInt(bb.data));
        if (this._getType(bb) !== fb.bigint) {
          const cb = this._getOrReturnCtx(bb);
          return Cb(cb, {
            code: Xb.invalid_type,
            expected: fb.bigint,
            received: cb.parsedType
          }), Vb
        }
        let cb;
        const sb = new Nb;
        for (const kb of this._def.checks)
          if ("min" === kb.kind) {
            (kb.inclusive ? bb.data < kb.value : bb.data <= kb.value) && (cb = this._getOrReturnCtx(bb, cb), Cb(cb, {
              code: Xb.too_small,
              type: "bigint",
              minimum: kb.value,
              inclusive: kb.inclusive,
              message: kb.message
            }), sb.sl())
          } else if ("max" === kb.kind) {
          (kb.inclusive ? bb.data > kb.value : bb.data >= kb.value) && (cb = this._getOrReturnCtx(bb, cb), Cb(cb, {
            code: Xb.too_big,
            type: "bigint",
            maximum: kb.value,
            inclusive: kb.inclusive,
            message: kb.message
          }), sb.sl())
        } else "multipleOf" === kb.kind ? bb.data % kb.value !== BigInt(0) && (cb = this._getOrReturnCtx(bb, cb), Cb(cb, {
          code: Xb.not_multiple_of,
          multipleOf: kb.value,
          message: kb.message
        }), sb.sl()) : Ub.assertNever(kb);
        return {
          status: sb.value,
          value: bb.data
        }
      }
      gte(bb, cb) {
        return this.setLimit("min", bb, !0, Bb.toString(cb))
      }
      gt(bb, cb) {
        return this.setLimit("min", bb, !1, Bb.toString(cb))
      }
      lte(bb, cb) {
        return this.setLimit("max", bb, !0, Bb.toString(cb))
      }
      lt(bb, cb) {
        return this.setLimit("max", bb, !1, Bb.toString(cb))
      }
      setLimit(bb, cb, sb, kb) {
        return new rb({
          ...this._def,
          checks: [...this._def.checks, {
            kind: bb,
            value: cb,
            inclusive: sb,
            message: Bb.toString(kb)
          }]
        })
      }
      _addCheck(bb) {
        return new rb({
          ...this._def,
          checks: [...this._def.checks, bb]
        })
      }
      positive(bb) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: Bb.toString(bb)
        })
      }
      negative(bb) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: Bb.toString(bb)
        })
      }
      nonpositive(bb) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: Bb.toString(bb)
        })
      }
      nonnegative(bb) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: Bb.toString(bb)
        })
      }
      multipleOf(bb, cb) {
        return this._addCheck({
          kind: "multipleOf",
          value: bb,
          message: Bb.toString(cb)
        })
      }
      get minValue() {
        let bb = null;
        for (const cb of this._def.checks) "min" === cb.kind && (null === bb || cb.value > bb) && (bb = cb.value);
        return bb
      }
      get maxValue() {
        let bb = null;
        for (const cb of this._def.checks) "max" === cb.kind && (null === bb || cb.value < bb) && (bb = cb.value);
        return bb
      }
    }
    rb.create = bb => {
      var cb;
      return new rb({
        checks: [],
        typeName: Ec.ZodBigInt,
        coerce: null !== (cb = null === bb || void 0 === bb ? void 0 : bb.coerce) && void 0 !== cb && cb,
        ...Pb(bb)
      })
    };
    class ob extends Db {
      _parse(bb) {
        this._def.coerce && (bb.data = Boolean(bb.data));
        if (this._getType(bb) !== fb.boolean) {
          const cb = this._getOrReturnCtx(bb);
          return Cb(cb, {
            code: Xb.invalid_type,
            expected: fb.boolean,
            received: cb.parsedType
          }), Vb
        }
        return ub(bb.data)
      }
    }
    ob.create = bb => new ob({
      typeName: Ec.ZodBoolean,
      coerce: (null === bb || void 0 === bb ? void 0 : bb.coerce) || !1,
      ...Pb(bb)
    });
    class Sb extends Db {
      _parse(bb) {
        this._def.coerce && (bb.data = new Date(bb.data));
        if (this._getType(bb) !== fb.date) {
          const cb = this._getOrReturnCtx(bb);
          return Cb(cb, {
            code: Xb.invalid_type,
            expected: fb.date,
            received: cb.parsedType
          }), Vb
        }
        if (isNaN(bb.data.getTime())) {
          return Cb(this._getOrReturnCtx(bb), {
            code: Xb.invalid_date
          }), Vb
        }
        const cb = new Nb;
        let sb;
        for (const kb of this._def.checks) "min" === kb.kind ? bb.data.getTime() < kb.value && (sb = this._getOrReturnCtx(bb, sb), Cb(sb, {
          code: Xb.too_small,
          message: kb.message,
          inclusive: !0,
          exact: !1,
          minimum: kb.value,
          type: "date"
        }), cb.sl()) : "max" === kb.kind ? bb.data.getTime() > kb.value && (sb = this._getOrReturnCtx(bb, sb), Cb(sb, {
          code: Xb.too_big,
          message: kb.message,
          inclusive: !0,
          exact: !1,
          maximum: kb.value,
          type: "date"
        }), cb.sl()) : Ub.assertNever(kb);
        return {
          status: cb.value,
          value: new Date(bb.data.getTime())
        }
      }
      _addCheck(bb) {
        return new Sb({
          ...this._def,
          checks: [...this._def.checks, bb]
        })
      }
      min(bb, cb) {
        return this._addCheck({
          kind: "min",
          value: bb.getTime(),
          message: Bb.toString(cb)
        })
      }
      max(bb, cb) {
        return this._addCheck({
          kind: "max",
          value: bb.getTime(),
          message: Bb.toString(cb)
        })
      }
      get minDate() {
        let bb = null;
        for (const cb of this._def.checks) "min" === cb.kind && (null === bb || cb.value > bb) && (bb = cb.value);
        return null != bb ? new Date(bb) : null
      }
      get maxDate() {
        let bb = null;
        for (const cb of this._def.checks) "max" === cb.kind && (null === bb || cb.value < bb) && (bb = cb.value);
        return null != bb ? new Date(bb) : null
      }
    }
    Sb.create = bb => new Sb({
      checks: [],
      coerce: (null === bb || void 0 === bb ? void 0 : bb.coerce) || !1,
      typeName: Ec.ZodDate,
      ...Pb(bb)
    });
    class Rb extends Db {
      _parse(bb) {
        if (this._getType(bb) !== fb.symbol) {
          const cb = this._getOrReturnCtx(bb);
          return Cb(cb, {
            code: Xb.invalid_type,
            expected: fb.symbol,
            received: cb.parsedType
          }), Vb
        }
        return ub(bb.data)
      }
    }
    Rb.create = bb => new Rb({
      typeName: Ec.ZodSymbol,
      ...Pb(bb)
    });
    class vb extends Db {
      _parse(bb) {
        if (this._getType(bb) !== fb.undefined) {
          const cb = this._getOrReturnCtx(bb);
          return Cb(cb, {
            code: Xb.invalid_type,
            expected: fb.undefined,
            received: cb.parsedType
          }), Vb
        }
        return ub(bb.data)
      }
    }
    vb.create = bb => new vb({
      typeName: Ec.ZodUndefined,
      ...Pb(bb)
    });
    class Fb extends Db {
      _parse(bb) {
        if (this._getType(bb) !== fb.null) {
          const cb = this._getOrReturnCtx(bb);
          return Cb(cb, {
            code: Xb.invalid_type,
            expected: fb.null,
            received: cb.parsedType
          }), Vb
        }
        return ub(bb.data)
      }
    }
    Fb.create = bb => new Fb({
      typeName: Ec.ZodNull,
      ...Pb(bb)
    });
    class xb extends Db {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(bb) {
        return ub(bb.data)
      }
    }
    xb.create = bb => new xb({
      typeName: Ec.ZodAny,
      ...Pb(bb)
    });
    class jb extends Db {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(bb) {
        return ub(bb.data)
      }
    }
    jb.create = bb => new jb({
      typeName: Ec.ZodUnknown,
      ...Pb(bb)
    });
    class pb extends Db {
      _parse(bb) {
        const cb = this._getOrReturnCtx(bb);
        return Cb(cb, {
          code: Xb.invalid_type,
          expected: fb.never,
          received: cb.parsedType
        }), Vb
      }
    }
    pb.create = bb => new pb({
      typeName: Ec.ZodNever,
      ...Pb(bb)
    });
    class bc extends Db {
      _parse(bb) {
        if (this._getType(bb) !== fb.undefined) {
          const cb = this._getOrReturnCtx(bb);
          return Cb(cb, {
            code: Xb.invalid_type,
            expected: fb.void,
            received: cb.parsedType
          }), Vb
        }
        return ub(bb.data)
      }
    }
    bc.create = bb => new bc({
      typeName: Ec.ZodVoid,
      ...Pb(bb)
    });
    class cc extends Db {
      _parse(bb) {
        const {
          ctx: cb,
          status: sb
        } = this._processInputParams(bb), kb = this._def;
        if (cb.parsedType !== fb.array) return Cb(cb, {
          code: Xb.invalid_type,
          expected: fb.array,
          received: cb.parsedType
        }), Vb;
        if (null !== kb.exactLength) {
          const bb = cb.data.length > kb.exactLength.value,
            Wb = cb.data.length < kb.exactLength.value;
          (bb || Wb) && (Cb(cb, {
            code: bb ? Xb.too_big : Xb.too_small,
            minimum: Wb ? kb.exactLength.value : void 0,
            maximum: bb ? kb.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: kb.exactLength.message
          }), sb.sl())
        }
        if (null !== kb.minLength && cb.data.length < kb.minLength.value && (Cb(cb, {
            code: Xb.too_small,
            minimum: kb.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: kb.minLength.message
          }), sb.sl()), null !== kb.maxLength && cb.data.length > kb.maxLength.value && (Cb(cb, {
            code: Xb.too_big,
            maximum: kb.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: kb.maxLength.message
          }), sb.sl()), cb.common.async) return Promise.all([...cb.data].map(((bb, sb) => kb.type._parseAsync(new tb(cb, bb, cb.path, sb))))).then((bb => Nb.mergeArray(sb, bb)));
        const Wb = [...cb.data].map(((bb, sb) => kb.type._parseSync(new tb(cb, bb, cb.path, sb))));
        return Nb.mergeArray(sb, Wb)
      }
      get element() {
        return this._def.type
      }
      min(bb, cb) {
        return new cc({
          ...this._def,
          minLength: {
            value: bb,
            message: Bb.toString(cb)
          }
        })
      }
      max(bb, cb) {
        return new cc({
          ...this._def,
          maxLength: {
            value: bb,
            message: Bb.toString(cb)
          }
        })
      }
      length(bb, cb) {
        return new cc({
          ...this._def,
          exactLength: {
            value: bb,
            message: Bb.toString(cb)
          }
        })
      }
      nonempty(bb) {
        return this.min(1, bb)
      }
    }

    function sc(bb) {
      if (bb instanceof kc) {
        const cb = {};
        for (const sb in bb.shape) {
          const kb = bb.shape[sb];
          cb[sb] = Lc.create(sc(kb))
        }
        return new kc({
          ...bb._def,
          shape: () => cb
        })
      }
      return bb instanceof cc ? new cc({
        ...bb._def,
        type: sc(bb.element)
      }) : bb instanceof Lc ? Lc.create(sc(bb.unwrap())) : bb instanceof uc ? uc.create(sc(bb.unwrap())) : bb instanceof Hc ? Hc.create(bb.items.map((bb => sc(bb)))) : bb
    }
    cc.create = (bb, cb) => new cc({
      type: bb,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: Ec.ZodArray,
      ...Pb(cb)
    });
    class kc extends Db {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const bb = this._def.shape(),
          cb = Ub.objectKeys(bb);
        return this._cached = {
          shape: bb,
          keys: cb
        }
      }
      _parse(bb) {
        if (this._getType(bb) !== fb.object) {
          const cb = this._getOrReturnCtx(bb);
          return Cb(cb, {
            code: Xb.invalid_type,
            expected: fb.object,
            received: cb.parsedType
          }), Vb
        }
        const {
          status: cb,
          ctx: sb
        } = this._processInputParams(bb), {
          shape: kb,
          keys: Wb
        } = this._getCached(), ab = [];
        if (!(this._def.catchall instanceof pb && "strip" === this._def.unknownKeys))
          for (const Ub in sb.data) Wb.includes(Ub) || ab.push(Ub);
        const Tb = [];
        for (const Ub of Wb) {
          const bb = kb[Ub],
            cb = sb.data[Ub];
          Tb.push({
            key: {
              status: "valid",
              value: Ub
            },
            value: bb._parse(new tb(sb, cb, sb.path, Ub)),
            alwaysSet: Ub in sb.data
          })
        }
        if (this._def.catchall instanceof pb) {
          const bb = this._def.unknownKeys;
          if ("passthrough" === bb)
            for (const cb of ab) Tb.push({
              key: {
                status: "valid",
                value: cb
              },
              value: {
                status: "valid",
                value: sb.data[cb]
              }
            });
          else if ("strict" === bb) ab.length > 0 && (Cb(sb, {
            code: Xb.unrecognized_keys,
            keys: ab
          }), cb.sl());
          else if ("strip" !== bb) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const bb = this._def.catchall;
          for (const cb of ab) {
            const kb = sb.data[cb];
            Tb.push({
              key: {
                status: "valid",
                value: cb
              },
              value: bb._parse(new tb(sb, kb, sb.path, cb)),
              alwaysSet: cb in sb.data
            })
          }
        }
        return sb.common.async ? Promise.resolve().then((async () => {
          const bb = [];
          for (const cb of Tb) {
            const sb = await cb.key;
            bb.push({
              key: sb,
              value: await cb.value,
              alwaysSet: cb.alwaysSet
            })
          }
          return bb
        })).then((bb => Nb.mergeObjectSync(cb, bb))) : Nb.mergeObjectSync(cb, Tb)
      }
      get shape() {
        return this._def.shape()
      }
      strict(bb) {
        return Bb.errToObj, new kc({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== bb ? {
            errorMap: (cb, sb) => {
              var kb, Wb, ab, Tb;
              const Ub = null !== (ab = null === (Wb = (kb = this._def).errorMap) || void 0 === Wb ? void 0 : Wb.call(kb, cb, sb).message) && void 0 !== ab ? ab : sb.defaultError;
              return "unrecognized_keys" === cb.code ? {
                message: null !== (Tb = Bb.errToObj(bb).message) && void 0 !== Tb ? Tb : Ub
              } : {
                message: Ub
              }
            }
          } : {}
        })
      }
      strip() {
        return new kc({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new kc({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(bb) {
        return new kc({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...bb
          })
        })
      }
      merge(bb) {
        return new kc({
          unknownKeys: bb._def.unknownKeys,
          catchall: bb._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...bb._def.shape()
          }),
          typeName: Ec.ZodObject
        })
      }
      setKey(bb, cb) {
        return this.augment({
          [bb]: cb
        })
      }
      catchall(bb) {
        return new kc({
          ...this._def,
          catchall: bb
        })
      }
      Wn(bb) {
        const cb = {};
        return Ub.objectKeys(bb).forEach((sb => {
          bb[sb] && this.shape[sb] && (cb[sb] = this.shape[sb])
        })), new kc({
          ...this._def,
          shape: () => cb
        })
      }
      omit(bb) {
        const cb = {};
        return Ub.objectKeys(this.shape).forEach((sb => {
          bb[sb] || (cb[sb] = this.shape[sb])
        })), new kc({
          ...this._def,
          shape: () => cb
        })
      }
      deepPartial() {
        return sc(this)
      }
      partial(bb) {
        const cb = {};
        return Ub.objectKeys(this.shape).forEach((sb => {
          const kb = this.shape[sb];
          bb && !bb[sb] ? cb[sb] = kb : cb[sb] = kb.optional()
        })), new kc({
          ...this._def,
          shape: () => cb
        })
      }
      required(bb) {
        const cb = {};
        return Ub.objectKeys(this.shape).forEach((sb => {
          if (bb && !bb[sb]) cb[sb] = this.shape[sb];
          else {
            let bb = this.shape[sb];
            for (; bb instanceof Lc;) bb = bb._def.innerType;
            cb[sb] = bb
          }
        })), new kc({
          ...this._def,
          shape: () => cb
        })
      }
      keyof() {
        return Qc(Ub.objectKeys(this.shape))
      }
    }
    kc.create = (bb, cb) => new kc({
      shape: () => bb,
      unknownKeys: "strip",
      catchall: pb.create(),
      typeName: Ec.ZodObject,
      ...Pb(cb)
    }), kc.strictCreate = (bb, cb) => new kc({
      shape: () => bb,
      unknownKeys: "strict",
      catchall: pb.create(),
      typeName: Ec.ZodObject,
      ...Pb(cb)
    }), kc.lazycreate = (bb, cb) => new kc({
      shape: bb,
      unknownKeys: "strip",
      catchall: pb.create(),
      typeName: Ec.ZodObject,
      ...Pb(cb)
    });
    class Wc extends Db {
      _parse(bb) {
        const {
          ctx: cb
        } = this._processInputParams(bb), sb = this._def.options;
        if (cb.common.async) return Promise.all(sb.map((async bb => {
          const sb = {
            ...cb,
            common: {
              ...cb.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await bb._parseAsync({
              data: cb.data,
              path: cb.path,
              parent: sb
            }),
            ctx: sb
          }
        }))).then((function(bb) {
          for (const cb of bb)
            if ("valid" === cb.result.status) return cb.result;
          for (const kb of bb)
            if ("sl" === kb.result.status) return cb.common.issues.push(...kb.ctx.common.issues), kb.result;
          const sb = bb.map((bb => new nb(bb.ctx.common.issues)));
          return Cb(cb, {
            code: Xb.invalid_union,
            unionErrors: sb
          }), Vb
        }));
        {
          let bb;
          const kb = [];
          for (const ab of sb) {
            const sb = {
                ...cb,
                common: {
                  ...cb.common,
                  issues: []
                },
                parent: null
              },
              Wb = ab._parseSync({
                data: cb.data,
                path: cb.path,
                parent: sb
              });
            if ("valid" === Wb.status) return Wb;
            "sl" !== Wb.status || bb || (bb = {
              result: Wb,
              ctx: sb
            }), sb.common.issues.length && kb.push(sb.common.issues)
          }
          if (bb) return cb.common.issues.push(...bb.ctx.common.issues), bb.result;
          const Wb = kb.map((bb => new nb(bb)));
          return Cb(cb, {
            code: Xb.invalid_union,
            unionErrors: Wb
          }), Vb
        }
      }
      get options() {
        return this._def.options
      }
    }
    Wc.create = (bb, cb) => new Wc({
      options: bb,
      typeName: Ec.ZodUnion,
      ...Pb(cb)
    });
    const ac = bb => bb instanceof mc ? ac(bb.schema) : bb instanceof Vc ? ac(bb.innerType()) : bb instanceof lc ? [bb.value] : bb instanceof ec ? bb.options : bb instanceof Cc ? Object.keys(bb.enum) : bb instanceof Yc ? ac(bb._def.innerType) : bb instanceof vb ? [void 0] : bb instanceof Fb ? [null] : null;
    class Tc extends Db {
      _parse(bb) {
        const {
          ctx: cb
        } = this._processInputParams(bb);
        if (cb.parsedType !== fb.object) return Cb(cb, {
          code: Xb.invalid_type,
          expected: fb.object,
          received: cb.parsedType
        }), Vb;
        const sb = this.discriminator,
          kb = cb.data[sb],
          Wb = this.optionsMap.get(kb);
        return Wb ? cb.common.async ? Wb._parseAsync({
          data: cb.data,
          path: cb.path,
          parent: cb
        }) : Wb._parseSync({
          data: cb.data,
          path: cb.path,
          parent: cb
        }) : (Cb(cb, {
          code: Xb.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [sb]
        }), Vb)
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
      static create(bb, cb, sb) {
        const kb = new Map;
        for (const Wb of cb) {
          const cb = ac(Wb.shape[bb]);
          if (!cb) throw new Error(`A discriminator value for key \`${bb}\` could not be extracted from all schema options`);
          for (const sb of cb) {
            if (kb.has(sb)) throw new Error(`Discriminator property ${String(bb)} has duplicate value ${String(sb)}`);
            kb.set(sb, Wb)
          }
        }
        return new Tc({
          typeName: Ec.ZodDiscriminatedUnion,
          discriminator: bb,
          options: cb,
          optionsMap: kb,
          ...Pb(sb)
        })
      }
    }

    function Uc(bb, cb) {
      const sb = Mb(bb),
        kb = Mb(cb);
      if (bb === cb) return {
        valid: !0,
        data: bb
      };
      if (sb === fb.object && kb === fb.object) {
        const sb = Ub.objectKeys(cb),
          kb = Ub.objectKeys(bb).filter((bb => -1 !== sb.indexOf(bb))),
          Wb = {
            ...bb,
            ...cb
          };
        for (const ab of kb) {
          const sb = Uc(bb[ab], cb[ab]);
          if (!sb.valid) return {
            valid: !1
          };
          Wb[ab] = sb.data
        }
        return {
          valid: !0,
          data: Wb
        }
      }
      if (sb === fb.array && kb === fb.array) {
        if (bb.length !== cb.length) return {
          valid: !1
        };
        const sb = [];
        for (let kb = 0; kb < bb.length; kb++) {
          const Wb = Uc(bb[kb], cb[kb]);
          if (!Wb.valid) return {
            valid: !1
          };
          sb.push(Wb.data)
        }
        return {
          valid: !0,
          data: sb
        }
      }
      return sb === fb.date && kb === fb.date && +bb === +cb ? {
        valid: !0,
        data: bb
      } : {
        valid: !1
      }
    }
    class Ic extends Db {
      _parse(bb) {
        const {
          status: cb,
          ctx: sb
        } = this._processInputParams(bb), kb = (bb, kb) => {
          if (Yb(bb) || Yb(kb)) return Vb;
          const Wb = Uc(bb.value, kb.value);
          return Wb.valid ? ((hb(bb) || hb(kb)) && cb.sl(), {
            status: cb.value,
            value: Wb.data
          }) : (Cb(sb, {
            code: Xb.invalid_intersection_types
          }), Vb)
        };
        return sb.common.async ? Promise.all([this._def.left._parseAsync({
          data: sb.data,
          path: sb.path,
          parent: sb
        }), this._def.right._parseAsync({
          data: sb.data,
          path: sb.path,
          parent: sb
        })]).then((bb => {
          let [cb, sb] = bb;
          return kb(cb, sb)
        })) : kb(this._def.left._parseSync({
          data: sb.data,
          path: sb.path,
          parent: sb
        }), this._def.right._parseSync({
          data: sb.data,
          path: sb.path,
          parent: sb
        }))
      }
    }
    Ic.create = (bb, cb, sb) => new Ic({
      left: bb,
      right: cb,
      typeName: Ec.ZodIntersection,
      ...Pb(sb)
    });
    class Hc extends Db {
      _parse(bb) {
        const {
          status: cb,
          ctx: sb
        } = this._processInputParams(bb);
        if (sb.parsedType !== fb.array) return Cb(sb, {
          code: Xb.invalid_type,
          expected: fb.array,
          received: sb.parsedType
        }), Vb;
        if (sb.data.length < this._def.items.length) return Cb(sb, {
          code: Xb.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), Vb;
        !this._def.rest && sb.data.length > this._def.items.length && (Cb(sb, {
          code: Xb.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), cb.sl());
        const kb = [...sb.data].map(((bb, cb) => {
          const kb = this._def.items[cb] || this._def.rest;
          return kb ? kb._parse(new tb(sb, bb, sb.path, cb)) : null
        })).filter((bb => !!bb));
        return sb.common.async ? Promise.all(kb).then((bb => Nb.mergeArray(cb, bb))) : Nb.mergeArray(cb, kb)
      }
      get items() {
        return this._def.items
      }
      rest(bb) {
        return new Hc({
          ...this._def,
          rest: bb
        })
      }
    }
    Hc.create = (bb, cb) => {
      if (!Array.isArray(bb)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new Hc({
        items: bb,
        typeName: Ec.ZodTuple,
        rest: null,
        ...Pb(cb)
      })
    };
    class fc extends Db {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(bb) {
        const {
          status: cb,
          ctx: sb
        } = this._processInputParams(bb);
        if (sb.parsedType !== fb.object) return Cb(sb, {
          code: Xb.invalid_type,
          expected: fb.object,
          received: sb.parsedType
        }), Vb;
        const kb = [],
          Wb = this._def.keyType,
          ab = this._def.valueType;
        for (const Tb in sb.data) kb.push({
          key: Wb._parse(new tb(sb, Tb, sb.path, Tb)),
          value: ab._parse(new tb(sb, sb.data[Tb], sb.path, Tb))
        });
        return sb.common.async ? Nb.mergeObjectAsync(cb, kb) : Nb.mergeObjectSync(cb, kb)
      }
      get element() {
        return this._def.valueType
      }
      static create(bb, cb, sb) {
        return new fc(cb instanceof Db ? {
          keyType: bb,
          valueType: cb,
          typeName: Ec.ZodRecord,
          ...Pb(sb)
        } : {
          keyType: db.create(),
          valueType: bb,
          typeName: Ec.ZodRecord,
          ...Pb(cb)
        })
      }
    }
    class Mc extends Db {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(bb) {
        const {
          status: cb,
          ctx: sb
        } = this._processInputParams(bb);
        if (sb.parsedType !== fb.map) return Cb(sb, {
          code: Xb.invalid_type,
          expected: fb.map,
          received: sb.parsedType
        }), Vb;
        const kb = this._def.keyType,
          Wb = this._def.valueType,
          ab = [...sb.data.entries()].map(((bb, cb) => {
            let [ab, Tb] = bb;
            return {
              key: kb._parse(new tb(sb, ab, sb.path, [cb, "key"])),
              value: Wb._parse(new tb(sb, Tb, sb.path, [cb, "value"]))
            }
          }));
        if (sb.common.async) {
          const bb = new Map;
          return Promise.resolve().then((async () => {
            for (const sb of ab) {
              const kb = await sb.key,
                Wb = await sb.value;
              if ("aborted" === kb.status || "aborted" === Wb.status) return Vb;
              "sl" !== kb.status && "sl" !== Wb.status || cb.sl(), bb.set(kb.value, Wb.value)
            }
            return {
              status: cb.value,
              value: bb
            }
          }))
        } {
          const bb = new Map;
          for (const sb of ab) {
            const kb = sb.key,
              Wb = sb.value;
            if ("aborted" === kb.status || "aborted" === Wb.status) return Vb;
            "sl" !== kb.status && "sl" !== Wb.status || cb.sl(), bb.set(kb.value, Wb.value)
          }
          return {
            status: cb.value,
            value: bb
          }
        }
      }
    }
    Mc.create = (bb, cb, sb) => new Mc({
      valueType: cb,
      keyType: bb,
      typeName: Ec.ZodMap,
      ...Pb(sb)
    });
    class Xc extends Db {
      _parse(bb) {
        const {
          status: cb,
          ctx: sb
        } = this._processInputParams(bb);
        if (sb.parsedType !== fb.set) return Cb(sb, {
          code: Xb.invalid_type,
          expected: fb.set,
          received: sb.parsedType
        }), Vb;
        const kb = this._def;
        null !== kb.minSize && sb.data.size < kb.minSize.value && (Cb(sb, {
          code: Xb.too_small,
          minimum: kb.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: kb.minSize.message
        }), cb.sl()), null !== kb.maxSize && sb.data.size > kb.maxSize.value && (Cb(sb, {
          code: Xb.too_big,
          maximum: kb.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: kb.maxSize.message
        }), cb.sl());
        const Wb = this._def.valueType;

        function ab(bb) {
          const sb = new Set;
          for (const kb of bb) {
            if ("aborted" === kb.status) return Vb;
            "sl" === kb.status && cb.sl(), sb.add(kb.value)
          }
          return {
            status: cb.value,
            value: sb
          }
        }
        const Tb = [...sb.data.values()].map(((bb, cb) => Wb._parse(new tb(sb, bb, sb.path, cb))));
        return sb.common.async ? Promise.all(Tb).then((bb => ab(bb))) : ab(Tb)
      }
      min(bb, cb) {
        return new Xc({
          ...this._def,
          minSize: {
            value: bb,
            message: Bb.toString(cb)
          }
        })
      }
      max(bb, cb) {
        return new Xc({
          ...this._def,
          maxSize: {
            value: bb,
            message: Bb.toString(cb)
          }
        })
      }
      size(bb, cb) {
        return this.min(bb, cb).max(bb, cb)
      }
      nonempty(bb) {
        return this.min(1, bb)
      }
    }
    Xc.create = (bb, cb) => new Xc({
      valueType: bb,
      minSize: null,
      maxSize: null,
      typeName: Ec.ZodSet,
      ...Pb(cb)
    });
    class nc extends Db {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(bb) {
        const {
          ctx: cb
        } = this._processInputParams(bb);
        if (cb.parsedType !== fb.function) return Cb(cb, {
          code: Xb.invalid_type,
          expected: fb.function,
          received: cb.parsedType
        }), Vb;

        function sb(bb, sb) {
          return eb({
            data: bb,
            path: cb.path,
            errorMaps: [cb.common.contextualErrorMap, cb.schemaErrorMap, Qb(), mb].filter((bb => !!bb)),
            issueData: {
              code: Xb.invalid_arguments,
              argumentsError: sb
            }
          })
        }

        function kb(bb, sb) {
          return eb({
            data: bb,
            path: cb.path,
            errorMaps: [cb.common.contextualErrorMap, cb.schemaErrorMap, Qb(), mb].filter((bb => !!bb)),
            issueData: {
              code: Xb.invalid_return_type,
              returnTypeError: sb
            }
          })
        }
        const Wb = {
            errorMap: cb.common.contextualErrorMap
          },
          ab = cb.data;
        if (this._def.returns instanceof Nc) {
          const bb = this;
          return ub((async function() {
            for (var cb = arguments.length, Tb = new Array(cb), Ub = 0; Ub < cb; Ub++) Tb[Ub] = arguments[Ub];
            const Ib = new nb([]),
              Hb = await bb._def.args.parseAsync(Tb, Wb).catch((bb => {
                throw Ib.addIssue(sb(Tb, bb)), Ib
              })),
              fb = await Reflect.apply(ab, this, Hb);
            return await bb._def.returns._def.type.parseAsync(fb, Wb).catch((bb => {
              throw Ib.addIssue(kb(fb, bb)), Ib
            }))
          }))
        } {
          const bb = this;
          return ub((function() {
            for (var cb = arguments.length, Tb = new Array(cb), Ub = 0; Ub < cb; Ub++) Tb[Ub] = arguments[Ub];
            const Ib = bb._def.args.safeParse(Tb, Wb);
            if (!Ib.success) throw new nb([sb(Tb, Ib.error)]);
            const Hb = Reflect.apply(ab, this, Ib.data),
              fb = bb._def.returns.safeParse(Hb, Wb);
            if (!fb.success) throw new nb([kb(Hb, fb.error)]);
            return fb.data
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
        for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
        return new nc({
          ...this._def,
          args: Hc.create(cb).rest(jb.create())
        })
      }
      returns(bb) {
        return new nc({
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
      static create(bb, cb, sb) {
        return new nc({
          args: bb || Hc.create([]).rest(jb.create()),
          returns: cb || jb.create(),
          typeName: Ec.ZodFunction,
          ...Pb(sb)
        })
      }
    }
    class mc extends Db {
      get schema() {
        return this._def.getter()
      }
      _parse(bb) {
        const {
          ctx: cb
        } = this._processInputParams(bb);
        return this._def.getter()._parse({
          data: cb.data,
          path: cb.path,
          parent: cb
        })
      }
    }
    mc.create = (bb, cb) => new mc({
      getter: bb,
      typeName: Ec.ZodLazy,
      ...Pb(cb)
    });
    class lc extends Db {
      _parse(bb) {
        if (bb.data !== this._def.value) {
          const cb = this._getOrReturnCtx(bb);
          return Cb(cb, {
            received: cb.data,
            code: Xb.invalid_literal,
            expected: this._def.value
          }), Vb
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

    function Qc(bb, cb) {
      return new ec({
        values: bb,
        typeName: Ec.ZodEnum,
        ...Pb(cb)
      })
    }
    lc.create = (bb, cb) => new lc({
      value: bb,
      typeName: Ec.ZodLiteral,
      ...Pb(cb)
    });
    class ec extends Db {
      _parse(bb) {
        if ("string" !== typeof bb.data) {
          const cb = this._getOrReturnCtx(bb),
            sb = this._def.values;
          return Cb(cb, {
            expected: Ub.joinValues(sb),
            received: cb.parsedType,
            code: Xb.invalid_type
          }), Vb
        }
        if (-1 === this._def.values.indexOf(bb.data)) {
          const cb = this._getOrReturnCtx(bb),
            sb = this._def.values;
          return Cb(cb, {
            received: cb.data,
            code: Xb.invalid_enum_value,
            options: sb
          }), Vb
        }
        return ub(bb.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const bb = {};
        for (const cb of this._def.values) bb[cb] = cb;
        return bb
      }
      get Values() {
        const bb = {};
        for (const cb of this._def.values) bb[cb] = cb;
        return bb
      }
      get Enum() {
        const bb = {};
        for (const cb of this._def.values) bb[cb] = cb;
        return bb
      }
      extract(bb) {
        return ec.create(bb)
      }
      exclude(bb) {
        return ec.create(this.options.filter((cb => !bb.includes(cb))))
      }
    }
    ec.create = Qc;
    class Cc extends Db {
      _parse(bb) {
        const cb = Ub.getValidEnumValues(this._def.values),
          sb = this._getOrReturnCtx(bb);
        if (sb.parsedType !== fb.string && sb.parsedType !== fb.number) {
          const bb = Ub.objectValues(cb);
          return Cb(sb, {
            expected: Ub.joinValues(bb),
            received: sb.parsedType,
            code: Xb.invalid_type
          }), Vb
        }
        if (-1 === cb.indexOf(bb.data)) {
          const bb = Ub.objectValues(cb);
          return Cb(sb, {
            received: sb.data,
            code: Xb.invalid_enum_value,
            options: bb
          }), Vb
        }
        return ub(bb.data)
      }
      get enum() {
        return this._def.values
      }
    }
    Cc.create = (bb, cb) => new Cc({
      values: bb,
      typeName: Ec.ZodNativeEnum,
      ...Pb(cb)
    });
    class Nc extends Db {
      unwrap() {
        return this._def.type
      }
      _parse(bb) {
        const {
          ctx: cb
        } = this._processInputParams(bb);
        if (cb.parsedType !== fb.promise && !1 === cb.common.async) return Cb(cb, {
          code: Xb.invalid_type,
          expected: fb.promise,
          received: cb.parsedType
        }), Vb;
        const sb = cb.parsedType === fb.promise ? cb.data : Promise.resolve(cb.data);
        return ub(sb.then((bb => this._def.type.parseAsync(bb, {
          path: cb.path,
          errorMap: cb.common.contextualErrorMap
        }))))
      }
    }
    Nc.create = (bb, cb) => new Nc({
      type: bb,
      typeName: Ec.ZodPromise,
      ...Pb(cb)
    });
    class Vc extends Db {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === Ec.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(bb) {
        const {
          status: cb,
          ctx: sb
        } = this._processInputParams(bb), kb = this._def.effect || null, Wb = {
          addIssue: bb => {
            Cb(sb, bb), bb.fatal ? cb.abort() : cb.sl()
          },
          get path() {
            return sb.path
          }
        };
        if (Wb.addIssue = Wb.addIssue.bind(Wb), "preprocess" === kb.type) {
          const bb = kb.transform(sb.data, Wb);
          return sb.common.issues.length ? {
            status: "sl",
            value: sb.data
          } : sb.common.async ? Promise.resolve(bb).then((bb => this._def.schema._parseAsync({
            data: bb,
            path: sb.path,
            parent: sb
          }))) : this._def.schema._parseSync({
            data: bb,
            path: sb.path,
            parent: sb
          })
        }
        if ("refinement" === kb.type) {
          const bb = bb => {
            const cb = kb.refinement(bb, Wb);
            if (sb.common.async) return Promise.resolve(cb);
            if (cb instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return bb
          };
          if (!1 === sb.common.async) {
            const kb = this._def.schema._parseSync({
              data: sb.data,
              path: sb.path,
              parent: sb
            });
            return "aborted" === kb.status ? Vb : ("sl" === kb.status && cb.sl(), bb(kb.value), {
              status: cb.value,
              value: kb.value
            })
          }
          return this._def.schema._parseAsync({
            data: sb.data,
            path: sb.path,
            parent: sb
          }).then((sb => "aborted" === sb.status ? Vb : ("sl" === sb.status && cb.sl(), bb(sb.value).then((() => ({
            status: cb.value,
            value: sb.value
          }))))))
        }
        if ("transform" === kb.type) {
          if (!1 === sb.common.async) {
            const bb = this._def.schema._parseSync({
              data: sb.data,
              path: sb.path,
              parent: sb
            });
            if (!Jb(bb)) return bb;
            const ab = kb.transform(bb.value, Wb);
            if (ab instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: cb.value,
              value: ab
            }
          }
          return this._def.schema._parseAsync({
            data: sb.data,
            path: sb.path,
            parent: sb
          }).then((bb => Jb(bb) ? Promise.resolve(kb.transform(bb.value, Wb)).then((bb => ({
            status: cb.value,
            value: bb
          }))) : bb))
        }
        Ub.assertNever(kb)
      }
    }
    Vc.create = (bb, cb, sb) => new Vc({
      schema: bb,
      typeName: Ec.ZodEffects,
      effect: cb,
      ...Pb(sb)
    }), Vc.createWithPreprocess = (bb, cb, sb) => new Vc({
      schema: cb,
      effect: {
        type: "preprocess",
        transform: bb
      },
      typeName: Ec.ZodEffects,
      ...Pb(sb)
    });
    class Lc extends Db {
      _parse(bb) {
        return this._getType(bb) === fb.undefined ? ub(void 0) : this._def.innerType._parse(bb)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Lc.create = (bb, cb) => new Lc({
      innerType: bb,
      typeName: Ec.ZodOptional,
      ...Pb(cb)
    });
    class uc extends Db {
      _parse(bb) {
        return this._getType(bb) === fb.null ? ub(null) : this._def.innerType._parse(bb)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    uc.create = (bb, cb) => new uc({
      innerType: bb,
      typeName: Ec.ZodNullable,
      ...Pb(cb)
    });
    class Yc extends Db {
      _parse(bb) {
        const {
          ctx: cb
        } = this._processInputParams(bb);
        let sb = cb.data;
        return cb.parsedType === fb.undefined && (sb = this._def.defaultValue()), this._def.innerType._parse({
          data: sb,
          path: cb.path,
          parent: cb
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    Yc.create = (bb, cb) => new Yc({
      innerType: bb,
      typeName: Ec.ZodDefault,
      defaultValue: "function" === typeof cb.default ? cb.default : () => cb.default,
      ...Pb(cb)
    });
    class hc extends Db {
      _parse(bb) {
        const {
          ctx: cb
        } = this._processInputParams(bb), sb = {
          ...cb,
          common: {
            ...cb.common,
            issues: []
          }
        }, kb = this._def.innerType._parse({
          data: sb.data,
          path: sb.path,
          parent: {
            ...sb
          }
        });
        return gb(kb) ? kb.then((bb => ({
          status: "valid",
          value: "valid" === bb.status ? bb.value : this._def.catchValue({
            get error() {
              return new nb(sb.common.issues)
            },
            input: sb.data
          })
        }))) : {
          status: "valid",
          value: "valid" === kb.status ? kb.value : this._def.catchValue({
            get error() {
              return new nb(sb.common.issues)
            },
            input: sb.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    hc.create = (bb, cb) => new hc({
      innerType: bb,
      typeName: Ec.ZodCatch,
      catchValue: "function" === typeof cb.catch ? cb.catch : () => cb.catch,
      ...Pb(cb)
    });
    class Jc extends Db {
      _parse(bb) {
        if (this._getType(bb) !== fb.nan) {
          const cb = this._getOrReturnCtx(bb);
          return Cb(cb, {
            code: Xb.invalid_type,
            expected: fb.nan,
            received: cb.parsedType
          }), Vb
        }
        return {
          status: "valid",
          value: bb.data
        }
      }
    }
    Jc.create = bb => new Jc({
      typeName: Ec.ZodNaN,
      ...Pb(bb)
    });
    const gc = Symbol("zod_brand");
    class Bc extends Db {
      _parse(bb) {
        const {
          ctx: cb
        } = this._processInputParams(bb), sb = cb.data;
        return this._def.type._parse({
          data: sb,
          path: cb.path,
          parent: cb
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class tc extends Db {
      _parse(bb) {
        const {
          status: cb,
          ctx: sb
        } = this._processInputParams(bb);
        if (sb.common.async) {
          return (async () => {
            const bb = await this._def.in._parseAsync({
              data: sb.data,
              path: sb.path,
              parent: sb
            });
            return "aborted" === bb.status ? Vb : "sl" === bb.status ? (cb.sl(), Lb(bb.value)) : this._def.out._parseAsync({
              data: bb.value,
              path: sb.path,
              parent: sb
            })
          })()
        } {
          const bb = this._def.in._parseSync({
            data: sb.data,
            path: sb.path,
            parent: sb
          });
          return "aborted" === bb.status ? Vb : "sl" === bb.status ? (cb.sl(), {
            status: "sl",
            value: bb.value
          }) : this._def.out._parseSync({
            data: bb.value,
            path: sb.path,
            parent: sb
          })
        }
      }
      static create(bb, cb) {
        return new tc({
          in: bb,
          out: cb,
          typeName: Ec.ZodPipeline
        })
      }
    }
    class yc extends Db {
      _parse(bb) {
        const cb = this._def.innerType._parse(bb);
        return Jb(cb) && (cb.value = Object.freeze(cb.value)), cb
      }
    }
    yc.create = (bb, cb) => new yc({
      innerType: bb,
      typeName: Ec.ZodReadonly,
      ...Pb(cb)
    });
    const Pc = function(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          sb = arguments.length > 2 ? arguments[2] : void 0;
        return bb ? xb.create().superRefine(((kb, Wb) => {
          var ab, Tb;
          if (!bb(kb)) {
            const bb = "function" === typeof cb ? cb(kb) : "string" === typeof cb ? {
                message: cb
              } : cb,
              Ub = null === (Tb = null !== (ab = bb.fatal) && void 0 !== ab ? ab : sb) || void 0 === Tb || Tb,
              Ib = "string" === typeof bb ? {
                message: bb
              } : bb;
            Wb.addIssue({
              code: "custom",
              ...Ib,
              fatal: Ub
            })
          }
        })) : xb.create()
      },
      Dc = {
        object: kc.lazycreate
      };
    var Ec;
    ! function(bb) {
      bb.ZodString = "ZodString", bb.ZodNumber = "ZodNumber", bb.ZodNaN = "ZodNaN", bb.ZodBigInt = "ZodBigInt", bb.ZodBoolean = "ZodBoolean", bb.ZodDate = "ZodDate", bb.ZodSymbol = "ZodSymbol", bb.ZodUndefined = "ZodUndefined", bb.ZodNull = "ZodNull", bb.ZodAny = "ZodAny", bb.ZodUnknown = "ZodUnknown", bb.ZodNever = "ZodNever", bb.ZodVoid = "ZodVoid", bb.ZodArray = "ZodArray", bb.ZodObject = "ZodObject", bb.ZodUnion = "ZodUnion", bb.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", bb.ZodIntersection = "ZodIntersection", bb.ZodTuple = "ZodTuple", bb.ZodRecord = "ZodRecord", bb.ZodMap = "ZodMap", bb.ZodSet = "ZodSet", bb.ZodFunction = "ZodFunction", bb.ZodLazy = "ZodLazy", bb.ZodLiteral = "ZodLiteral", bb.ZodEnum = "ZodEnum", bb.ZodEffects = "ZodEffects", bb.ZodNativeEnum = "ZodNativeEnum", bb.ZodOptional = "ZodOptional", bb.ZodNullable = "ZodNullable", bb.ZodDefault = "ZodDefault", bb.ZodCatch = "ZodCatch", bb.ZodPromise = "ZodPromise", bb.ZodBranded = "ZodBranded", bb.ZodPipeline = "ZodPipeline", bb.ZodReadonly = "ZodReadonly"
    }(Ec || (Ec = {}));
    const ic = db.create,
      Oc = wb.create,
      Gc = Jc.create,
      Kc = rb.create,
      Zc = ob.create,
      zc = Sb.create,
      qc = Rb.create,
      dc = vb.create,
      Ac = Fb.create,
      wc = xb.create,
      rc = jb.create,
      oc = pb.create,
      Sc = bc.create,
      Rc = cc.create,
      vc = kc.create,
      Fc = kc.strictCreate,
      xc = Wc.create,
      jc = Tc.create,
      pc = Ic.create,
      bs = Hc.create,
      cs = fc.create,
      ss = Mc.create,
      ks = Xc.create,
      Ws = nc.create,
      as = mc.create,
      Ts = lc.create,
      Us = ec.create,
      Is = Cc.create,
      Hs = Nc.create,
      fs = Vc.create,
      Ms = Lc.create,
      Xs = uc.create,
      ns = Vc.createWithPreprocess,
      ms = tc.create,
      ls = {
        string: bb => db.create({
          ...bb,
          coerce: !0
        }),
        number: bb => wb.create({
          ...bb,
          coerce: !0
        }),
        boolean: bb => ob.create({
          ...bb,
          coerce: !0
        }),
        bigint: bb => rb.create({
          ...bb,
          coerce: !0
        }),
        date: bb => Sb.create({
          ...bb,
          coerce: !0
        })
      },
      Qs = Vb;
    var es = Object.freeze({
        __proto__: null,
        defaultErrorMap: mb,
        setErrorMap: function(bb) {
          lb = bb
        },
        getErrorMap: Qb,
        makeIssue: eb,
        EMPTY_PATH: [],
        addIssueToContext: Cb,
        ParseStatus: Nb,
        INVALID: Vb,
        DIRTY: Lb,
        OK: ub,
        isAborted: Yb,
        isDirty: hb,
        isValid: Jb,
        isAsync: gb,
        get util() {
          return Ub
        },
        get objectUtil() {
          return Ib
        },
        ZodParsedType: fb,
        getParsedType: Mb,
        ZodType: Db,
        ZodString: db,
        ZodNumber: wb,
        ZodBigInt: rb,
        ZodBoolean: ob,
        ZodDate: Sb,
        ZodSymbol: Rb,
        ZodUndefined: vb,
        ZodNull: Fb,
        ZodAny: xb,
        ZodUnknown: jb,
        ZodNever: pb,
        ZodVoid: bc,
        ZodArray: cc,
        ZodObject: kc,
        ZodUnion: Wc,
        ZodDiscriminatedUnion: Tc,
        ZodIntersection: Ic,
        ZodTuple: Hc,
        ZodRecord: fc,
        ZodMap: Mc,
        ZodSet: Xc,
        ZodFunction: nc,
        ZodLazy: mc,
        ZodLiteral: lc,
        ZodEnum: ec,
        ZodNativeEnum: Cc,
        ZodPromise: Nc,
        ZodEffects: Vc,
        ZodTransformer: Vc,
        ZodOptional: Lc,
        ZodNullable: uc,
        ZodDefault: Yc,
        ZodCatch: hc,
        ZodNaN: Jc,
        BRAND: gc,
        ZodBranded: Bc,
        ZodPipeline: tc,
        ZodReadonly: yc,
        custom: Pc,
        Schema: Db,
        ZodSchema: Db,
        late: Dc,
        get ZodFirstPartyTypeKind() {
          return Ec
        },
        coerce: ls,
        any: wc,
        array: Rc,
        bigint: Kc,
        boolean: Zc,
        date: zc,
        discriminatedUnion: jc,
        effect: fs,
        enum: Us,
        function: Ws,
        instanceof: function(bb) {
          let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${bb.name}`
          };
          return Pc((cb => cb instanceof bb), cb)
        },
        intersection: pc,
        lazy: as,
        literal: Ts,
        map: ss,
        nan: Gc,
        nativeEnum: Is,
        never: oc,
        null: Ac,
        nullable: Xs,
        number: Oc,
        object: vc,
        oboolean: () => Zc().optional(),
        onumber: () => Oc().optional(),
        optional: Ms,
        ostring: () => ic().optional(),
        pipeline: ms,
        preprocess: ns,
        promise: Hs,
        record: cs,
        set: ks,
        strictObject: Fc,
        string: ic,
        symbol: qc,
        transformer: fs,
        tuple: bs,
        undefined: dc,
        union: xc,
        unknown: rc,
        void: Sc,
        NEVER: Qs,
        ZodIssueCode: Xb,
        quotelessJson: bb => JSON.stringify(bb, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: nb
      }),
      Cs = {
        exports: {}
      };
    ! function(bb) {
      var cb = function(bb) {
        var sb = 1e7,
          kb = 9007199254740992,
          Wb = Xb(kb),
          ab = "0123456789abcdefghijklmnopqrstuvwxyz",
          Tb = "function" === typeof BigInt;

        function Ub(bb, cb, sb, kb) {
          return "undefined" === typeof bb ? Ub[0] : "undefined" !== typeof cb && (10 !== +cb || sb) ? ob(bb, cb, sb, kb) : xb(bb)
        }

        function Ib(bb, cb) {
          this.value = bb, this.sign = cb, this.isSmall = !1
        }

        function Hb(bb) {
          this.value = bb, this.sign = bb < 0, this.isSmall = !0
        }

        function fb(bb) {
          this.value = bb
        }

        function Mb(bb) {
          return -kb < bb && bb < kb
        }

        function Xb(bb) {
          return bb < 1e7 ? [bb] : bb < 1e14 ? [bb % 1e7, Math.floor(bb / 1e7)] : [bb % 1e7, Math.floor(bb / 1e7) % 1e7, Math.floor(bb / 1e14)]
        }

        function nb(bb) {
          mb(bb);
          var cb = bb.length;
          if (cb < 4 && Pb(bb, Wb) < 0) switch (cb) {
            case 0:
              return 0;
            case 1:
              return bb[0];
            case 2:
              return bb[0] + bb[1] * sb;
            default:
              return bb[0] + (bb[1] + bb[2] * sb) * sb
          }
          return bb
        }

        function mb(bb) {
          for (var cb = bb.length; 0 === bb[--cb];);
          bb.length = cb + 1
        }

        function lb(bb) {
          for (var cb = new Array(bb), sb = -1; ++sb < bb;) cb[sb] = 0;
          return cb
        }

        function Qb(bb) {
          return bb > 0 ? Math.floor(bb) : Math.ceil(bb)
        }

        function eb(bb, cb) {
          var kb, Wb, ab = bb.length,
            Tb = cb.length,
            Ub = new Array(ab),
            Ib = 0,
            Hb = sb;
          for (Wb = 0; Wb < Tb; Wb++) Ib = (kb = bb[Wb] + cb[Wb] + Ib) >= Hb ? 1 : 0, Ub[Wb] = kb - Ib * Hb;
          for (; Wb < ab;) Ib = (kb = bb[Wb] + Ib) === Hb ? 1 : 0, Ub[Wb++] = kb - Ib * Hb;
          return Ib > 0 && Ub.push(Ib), Ub
        }

        function Cb(bb, cb) {
          return bb.length >= cb.length ? eb(bb, cb) : eb(cb, bb)
        }

        function Nb(bb, cb) {
          var kb, Wb, ab = bb.length,
            Tb = new Array(ab),
            Ub = sb;
          for (Wb = 0; Wb < ab; Wb++) kb = bb[Wb] - Ub + cb, cb = Math.floor(kb / Ub), Tb[Wb] = kb - cb * Ub, cb += 1;
          for (; cb > 0;) Tb[Wb++] = cb % Ub, cb = Math.floor(cb / Ub);
          return Tb
        }

        function Vb(bb, cb) {
          var kb, Wb, ab = bb.length,
            Tb = cb.length,
            Ub = new Array(ab),
            Ib = 0,
            Hb = sb;
          for (kb = 0; kb < Tb; kb++)(Wb = bb[kb] - Ib - cb[kb]) < 0 ? (Wb += Hb, Ib = 1) : Ib = 0, Ub[kb] = Wb;
          for (kb = Tb; kb < ab; kb++) {
            if (!((Wb = bb[kb] - Ib) < 0)) {
              Ub[kb++] = Wb;
              break
            }
            Wb += Hb, Ub[kb] = Wb
          }
          for (; kb < ab; kb++) Ub[kb] = bb[kb];
          return mb(Ub), Ub
        }

        function Lb(bb, cb, kb) {
          var Wb, ab, Tb = bb.length,
            Ub = new Array(Tb),
            fb = -cb,
            Mb = sb;
          for (Wb = 0; Wb < Tb; Wb++) ab = bb[Wb] + fb, fb = Math.floor(ab / Mb), ab %= Mb, Ub[Wb] = ab < 0 ? ab + Mb : ab;
          return "number" === typeof(Ub = nb(Ub)) ? (kb && (Ub = -Ub), new Hb(Ub)) : new Ib(Ub, kb)
        }

        function ub(bb, cb) {
          var kb, Wb, ab, Tb, Ub = bb.length,
            Ib = cb.length,
            Hb = lb(Ub + Ib),
            fb = sb;
          for (ab = 0; ab < Ub; ++ab) {
            Tb = bb[ab];
            for (var Mb = 0; Mb < Ib; ++Mb) kb = Tb * cb[Mb] + Hb[ab + Mb], Wb = Math.floor(kb / fb), Hb[ab + Mb] = kb - Wb * fb, Hb[ab + Mb + 1] += Wb
          }
          return mb(Hb), Hb
        }

        function Yb(bb, cb) {
          var kb, Wb, ab = bb.length,
            Tb = new Array(ab),
            Ub = sb,
            Ib = 0;
          for (Wb = 0; Wb < ab; Wb++) kb = bb[Wb] * cb + Ib, Ib = Math.floor(kb / Ub), Tb[Wb] = kb - Ib * Ub;
          for (; Ib > 0;) Tb[Wb++] = Ib % Ub, Ib = Math.floor(Ib / Ub);
          return Tb
        }

        function hb(bb, cb) {
          for (var sb = []; cb-- > 0;) sb.push(0);
          return sb.concat(bb)
        }

        function Jb(bb, cb) {
          var sb = Math.max(bb.length, cb.length);
          if (sb <= 30) return ub(bb, cb);
          sb = Math.ceil(sb / 2);
          var kb = bb.slice(sb),
            Wb = bb.slice(0, sb),
            ab = cb.slice(sb),
            Tb = cb.slice(0, sb),
            Ub = Jb(Wb, Tb),
            Ib = Jb(kb, ab),
            Hb = Jb(Cb(Wb, kb), Cb(Tb, ab)),
            fb = Cb(Cb(Ub, hb(Vb(Vb(Hb, Ub), Ib), sb)), hb(Ib, 2 * sb));
          return mb(fb), fb
        }

        function gb(bb, cb, kb) {
          return new Ib(bb < sb ? Yb(cb, bb) : ub(cb, Xb(bb)), kb)
        }

        function Bb(bb) {
          var cb, kb, Wb, ab, Tb = bb.length,
            Ub = lb(Tb + Tb),
            Ib = sb;
          for (Wb = 0; Wb < Tb; Wb++) {
            kb = 0 - (ab = bb[Wb]) * ab;
            for (var Hb = Wb; Hb < Tb; Hb++) cb = ab * bb[Hb] * 2 + Ub[Wb + Hb] + kb, kb = Math.floor(cb / Ib), Ub[Wb + Hb] = cb - kb * Ib;
            Ub[Wb + Tb] = kb
          }
          return mb(Ub), Ub
        }

        function tb(bb, cb) {
          var kb, Wb, ab, Tb, Ub = bb.length,
            Ib = lb(Ub),
            Hb = sb;
          for (ab = 0, kb = Ub - 1; kb >= 0; --kb) ab = (Tb = ab * Hb + bb[kb]) - (Wb = Qb(Tb / cb)) * cb, Ib[kb] = 0 | Wb;
          return [Ib, 0 | ab]
        }

        function yb(bb, cb) {
          var kb, Wb = xb(cb);
          if (Tb) return [new fb(bb.value / Wb.value), new fb(bb.value % Wb.value)];
          var ab, Mb = bb.value,
            eb = Wb.value;
          if (0 === eb) throw new Error("Cannot divide by zero");
          if (bb.isSmall) return Wb.isSmall ? [new Hb(Qb(Mb / eb)), new Hb(Mb % eb)] : [Ub[0], bb];
          if (Wb.isSmall) {
            if (1 === eb) return [bb, Ub[0]];
            if (-1 == eb) return [bb.Of(), Ub[0]];
            var Cb = Math.abs(eb);
            if (Cb < sb) {
              ab = nb((kb = tb(Mb, Cb))[0]);
              var Nb = kb[1];
              return bb.sign && (Nb = -Nb), "number" === typeof ab ? (bb.sign !== Wb.sign && (ab = -ab), [new Hb(ab), new Hb(Nb)]) : [new Ib(ab, bb.sign !== Wb.sign), new Hb(Nb)]
            }
            eb = Xb(Cb)
          }
          var Lb = Pb(Mb, eb);
          if (-1 === Lb) return [Ub[0], bb];
          if (0 === Lb) return [Ub[bb.sign === Wb.sign ? 1 : -1], Ub[0]];
          kb = Mb.length + eb.length <= 200 ? function(bb, cb) {
            var kb, Wb, ab, Tb, Ub, Ib, Hb, fb = bb.length,
              Mb = cb.length,
              Xb = sb,
              mb = lb(cb.length),
              Qb = cb[Mb - 1],
              eb = Math.ceil(Xb / (2 * Qb)),
              Cb = Yb(bb, eb),
              Nb = Yb(cb, eb);
            for (Cb.length <= fb && Cb.push(0), Nb.push(0), Qb = Nb[Mb - 1], Wb = fb - Mb; Wb >= 0; Wb--) {
              for (kb = Xb - 1, Cb[Wb + Mb] !== Qb && (kb = Math.floor((Cb[Wb + Mb] * Xb + Cb[Wb + Mb - 1]) / Qb)), ab = 0, Tb = 0, Ib = Nb.length, Ub = 0; Ub < Ib; Ub++) ab += kb * Nb[Ub], Hb = Math.floor(ab / Xb), Tb += Cb[Wb + Ub] - (ab - Hb * Xb), ab = Hb, Tb < 0 ? (Cb[Wb + Ub] = Tb + Xb, Tb = -1) : (Cb[Wb + Ub] = Tb, Tb = 0);
              for (; 0 !== Tb;) {
                for (kb -= 1, ab = 0, Ub = 0; Ub < Ib; Ub++)(ab += Cb[Wb + Ub] - Xb + Nb[Ub]) < 0 ? (Cb[Wb + Ub] = ab + Xb, ab = 0) : (Cb[Wb + Ub] = ab, ab = 1);
                Tb += ab
              }
              mb[Wb] = kb
            }
            return Cb = tb(Cb, eb)[0], [nb(mb), nb(Cb)]
          }(Mb, eb) : function(bb, cb) {
            for (var kb, Wb, ab, Tb, Ub, Ib = bb.length, Hb = cb.length, fb = [], Mb = [], Xb = sb; Ib;)
              if (Mb.unshift(bb[--Ib]), mb(Mb), Pb(Mb, cb) < 0) fb.push(0);
              else {
                ab = Mb[(Wb = Mb.length) - 1] * Xb + Mb[Wb - 2], Tb = cb[Hb - 1] * Xb + cb[Hb - 2], Wb > Hb && (ab = (ab + 1) * Xb), kb = Math.ceil(ab / Tb);
                do {
                  if (Pb(Ub = Yb(cb, kb), Mb) <= 0) break;
                  kb--
                } while (kb);
                fb.push(kb), Mb = Vb(Mb, Ub)
              } return fb.reverse(), [nb(fb), nb(Mb)]
          }(Mb, eb), ab = kb[0];
          var ub = bb.sign !== Wb.sign,
            hb = kb[1],
            Jb = bb.sign;
          return "number" === typeof ab ? (ub && (ab = -ab), ab = new Hb(ab)) : ab = new Ib(ab, ub), "number" === typeof hb ? (Jb && (hb = -hb), hb = new Hb(hb)) : hb = new Ib(hb, Jb), [ab, hb]
        }

        function Pb(bb, cb) {
          if (bb.length !== cb.length) return bb.length > cb.length ? 1 : -1;
          for (var sb = bb.length - 1; sb >= 0; sb--)
            if (bb[sb] !== cb[sb]) return bb[sb] > cb[sb] ? 1 : -1;
          return 0
        }

        function Db(bb) {
          var cb = bb.abs();
          return !cb.isUnit() && (!!(cb.equals(2) || cb.equals(3) || cb.equals(5)) || !(cb.isEven() || cb.isDivisibleBy(3) || cb.isDivisibleBy(5)) && (!!cb.lesser(49) || void 0))
        }

        function Eb(bb, sb) {
          for (var kb, Wb, ab, Tb = bb.prev(), Ub = Tb, Ib = 0; Ub.isEven();) Ub = Ub.divide(2), Ib++;
          bb: for (Wb = 0; Wb < sb.length; Wb++)
            if (!bb.lesser(sb[Wb]) && !(ab = cb(sb[Wb]).modPow(Ub, bb)).isUnit() && !ab.equals(Tb)) {
              for (kb = Ib - 1; 0 != kb; kb--) {
                if ((ab = ab.square().mod(bb)).isUnit()) return !1;
                if (ab.equals(Tb)) continue bb
              }
              return !1
            }
          return !0
        }
        Ib.prototype = Object.create(Ub.prototype), Hb.prototype = Object.create(Ub.prototype), fb.prototype = Object.create(Ub.prototype), Ib.prototype.add = function(bb) {
          var cb = xb(bb);
          if (this.sign !== cb.sign) return this.subtract(cb.Of());
          var sb = this.value,
            kb = cb.value;
          return cb.isSmall ? new Ib(Nb(sb, Math.abs(kb)), this.sign) : new Ib(Cb(sb, kb), this.sign)
        }, Ib.prototype.plus = Ib.prototype.add, Hb.prototype.add = function(bb) {
          var cb = xb(bb),
            sb = this.value;
          if (sb < 0 !== cb.sign) return this.subtract(cb.Of());
          var kb = cb.value;
          if (cb.isSmall) {
            if (Mb(sb + kb)) return new Hb(sb + kb);
            kb = Xb(Math.abs(kb))
          }
          return new Ib(Nb(kb, Math.abs(sb)), sb < 0)
        }, Hb.prototype.plus = Hb.prototype.add, fb.prototype.add = function(bb) {
          return new fb(this.value + xb(bb).value)
        }, fb.prototype.plus = fb.prototype.add, Ib.prototype.subtract = function(bb) {
          var cb = xb(bb);
          if (this.sign !== cb.sign) return this.add(cb.Of());
          var sb = this.value,
            kb = cb.value;
          return cb.isSmall ? Lb(sb, Math.abs(kb), this.sign) : function(bb, cb, sb) {
            var kb;
            return Pb(bb, cb) >= 0 ? kb = Vb(bb, cb) : (kb = Vb(cb, bb), sb = !sb), "number" === typeof(kb = nb(kb)) ? (sb && (kb = -kb), new Hb(kb)) : new Ib(kb, sb)
          }(sb, kb, this.sign)
        }, Ib.prototype.minus = Ib.prototype.subtract, Hb.prototype.subtract = function(bb) {
          var cb = xb(bb),
            sb = this.value;
          if (sb < 0 !== cb.sign) return this.add(cb.Of());
          var kb = cb.value;
          return cb.isSmall ? new Hb(sb - kb) : Lb(kb, Math.abs(sb), sb >= 0)
        }, Hb.prototype.minus = Hb.prototype.subtract, fb.prototype.subtract = function(bb) {
          return new fb(this.value - xb(bb).value)
        }, fb.prototype.minus = fb.prototype.subtract, Ib.prototype.Of = function() {
          return new Ib(this.value, !this.sign)
        }, Hb.prototype.Of = function() {
          var bb = this.sign,
            cb = new Hb(-this.value);
          return cb.sign = !bb, cb
        }, fb.prototype.Of = function() {
          return new fb(-this.value)
        }, Ib.prototype.abs = function() {
          return new Ib(this.value, !1)
        }, Hb.prototype.abs = function() {
          return new Hb(Math.abs(this.value))
        }, fb.prototype.abs = function() {
          return new fb(this.value >= 0 ? this.value : -this.value)
        }, Ib.prototype.multiply = function(bb) {
          var cb, kb, Wb, ab = xb(bb),
            Tb = this.value,
            Hb = ab.value,
            fb = this.sign !== ab.sign;
          if (ab.isSmall) {
            if (0 === Hb) return Ub[0];
            if (1 === Hb) return this;
            if (-1 === Hb) return this.Of();
            if ((cb = Math.abs(Hb)) < sb) return new Ib(Yb(Tb, cb), fb);
            Hb = Xb(cb)
          }
          return kb = Tb.length, Wb = Hb.length, new Ib(-.012 * kb - .012 * Wb + 15e-6 * kb * Wb > 0 ? Jb(Tb, Hb) : ub(Tb, Hb), fb)
        }, Ib.prototype.times = Ib.prototype.multiply, Hb.prototype._multiplyBySmall = function(bb) {
          return Mb(bb.value * this.value) ? new Hb(bb.value * this.value) : gb(Math.abs(bb.value), Xb(Math.abs(this.value)), this.sign !== bb.sign)
        }, Ib.prototype._multiplyBySmall = function(bb) {
          return 0 === bb.value ? Ub[0] : 1 === bb.value ? this : -1 === bb.value ? this.Of() : gb(Math.abs(bb.value), this.value, this.sign !== bb.sign)
        }, Hb.prototype.multiply = function(bb) {
          return xb(bb)._multiplyBySmall(this)
        }, Hb.prototype.times = Hb.prototype.multiply, fb.prototype.multiply = function(bb) {
          return new fb(this.value * xb(bb).value)
        }, fb.prototype.times = fb.prototype.multiply, Ib.prototype.square = function() {
          return new Ib(Bb(this.value), !1)
        }, Hb.prototype.square = function() {
          var bb = this.value * this.value;
          return Mb(bb) ? new Hb(bb) : new Ib(Bb(Xb(Math.abs(this.value))), !1)
        }, fb.prototype.square = function(bb) {
          return new fb(this.value * this.value)
        }, Ib.prototype.divmod = function(bb) {
          var cb = yb(this, bb);
          return {
            quotient: cb[0],
            remainder: cb[1]
          }
        }, fb.prototype.divmod = Hb.prototype.divmod = Ib.prototype.divmod, Ib.prototype.divide = function(bb) {
          return yb(this, bb)[0]
        }, fb.prototype.over = fb.prototype.divide = function(bb) {
          return new fb(this.value / xb(bb).value)
        }, Hb.prototype.over = Hb.prototype.divide = Ib.prototype.over = Ib.prototype.divide, Ib.prototype.mod = function(bb) {
          return yb(this, bb)[1]
        }, fb.prototype.mod = fb.prototype.remainder = function(bb) {
          return new fb(this.value % xb(bb).value)
        }, Hb.prototype.remainder = Hb.prototype.mod = Ib.prototype.remainder = Ib.prototype.mod, Ib.prototype.pow = function(bb) {
          var cb, sb, kb, Wb = xb(bb),
            ab = this.value,
            Tb = Wb.value;
          if (0 === Tb) return Ub[1];
          if (0 === ab) return Ub[0];
          if (1 === ab) return Ub[1];
          if (-1 === ab) return Wb.isEven() ? Ub[1] : Ub[-1];
          if (Wb.sign) return Ub[0];
          if (!Wb.isSmall) throw new Error("The exponent " + Wb.toString() + " is too large.");
          if (this.isSmall && Mb(cb = Math.pow(ab, Tb))) return new Hb(Qb(cb));
          for (sb = this, kb = Ub[1]; !0 & Tb && (kb = kb.times(sb), --Tb), 0 !== Tb;) Tb /= 2, sb = sb.square();
          return kb
        }, Hb.prototype.pow = Ib.prototype.pow, fb.prototype.pow = function(bb) {
          var cb = xb(bb),
            sb = this.value,
            kb = cb.value,
            Wb = BigInt(0),
            ab = BigInt(1),
            Tb = BigInt(2);
          if (kb === Wb) return Ub[1];
          if (sb === Wb) return Ub[0];
          if (sb === ab) return Ub[1];
          if (sb === BigInt(-1)) return cb.isEven() ? Ub[1] : Ub[-1];
          if (cb.isNegative()) return new fb(Wb);
          for (var Ib = this, Hb = Ub[1];
            (kb & ab) === ab && (Hb = Hb.times(Ib), --kb), kb !== Wb;) kb /= Tb, Ib = Ib.square();
          return Hb
        }, Ib.prototype.modPow = function(bb, cb) {
          if (bb = xb(bb), (cb = xb(cb)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var sb = Ub[1],
            kb = this.mod(cb);
          for (bb.isNegative() && (bb = bb.multiply(Ub[-1]), kb = kb.modInv(cb)); bb.isPositive();) {
            if (kb.isZero()) return Ub[0];
            bb.isOdd() && (sb = sb.multiply(kb).mod(cb)), bb = bb.divide(2), kb = kb.square().mod(cb)
          }
          return sb
        }, fb.prototype.modPow = Hb.prototype.modPow = Ib.prototype.modPow, Ib.prototype.compareAbs = function(bb) {
          var cb = xb(bb),
            sb = this.value,
            kb = cb.value;
          return cb.isSmall ? 1 : Pb(sb, kb)
        }, Hb.prototype.compareAbs = function(bb) {
          var cb = xb(bb),
            sb = Math.abs(this.value),
            kb = cb.value;
          return cb.isSmall ? sb === (kb = Math.abs(kb)) ? 0 : sb > kb ? 1 : -1 : -1
        }, fb.prototype.compareAbs = function(bb) {
          var cb = this.value,
            sb = xb(bb).value;
          return (cb = cb >= 0 ? cb : -cb) === (sb = sb >= 0 ? sb : -sb) ? 0 : cb > sb ? 1 : -1
        }, Ib.prototype.compare = function(bb) {
          if (bb === 1 / 0) return -1;
          if (bb === -1 / 0) return 1;
          var cb = xb(bb),
            sb = this.value,
            kb = cb.value;
          return this.sign !== cb.sign ? cb.sign ? 1 : -1 : cb.isSmall ? this.sign ? -1 : 1 : Pb(sb, kb) * (this.sign ? -1 : 1)
        }, Ib.prototype.compareTo = Ib.prototype.compare, Hb.prototype.compare = function(bb) {
          if (bb === 1 / 0) return -1;
          if (bb === -1 / 0) return 1;
          var cb = xb(bb),
            sb = this.value,
            kb = cb.value;
          return cb.isSmall ? sb == kb ? 0 : sb > kb ? 1 : -1 : sb < 0 !== cb.sign ? sb < 0 ? -1 : 1 : sb < 0 ? 1 : -1
        }, Hb.prototype.compareTo = Hb.prototype.compare, fb.prototype.compare = function(bb) {
          if (bb === 1 / 0) return -1;
          if (bb === -1 / 0) return 1;
          var cb = this.value,
            sb = xb(bb).value;
          return cb === sb ? 0 : cb > sb ? 1 : -1
        }, fb.prototype.compareTo = fb.prototype.compare, Ib.prototype.equals = function(bb) {
          return 0 === this.compare(bb)
        }, fb.prototype.eq = fb.prototype.equals = Hb.prototype.eq = Hb.prototype.equals = Ib.prototype.eq = Ib.prototype.equals, Ib.prototype.notEquals = function(bb) {
          return 0 !== this.compare(bb)
        }, fb.prototype.neq = fb.prototype.notEquals = Hb.prototype.neq = Hb.prototype.notEquals = Ib.prototype.neq = Ib.prototype.notEquals, Ib.prototype.greater = function(bb) {
          return this.compare(bb) > 0
        }, fb.prototype.gt = fb.prototype.greater = Hb.prototype.gt = Hb.prototype.greater = Ib.prototype.gt = Ib.prototype.greater, Ib.prototype.lesser = function(bb) {
          return this.compare(bb) < 0
        }, fb.prototype.lt = fb.prototype.lesser = Hb.prototype.lt = Hb.prototype.lesser = Ib.prototype.lt = Ib.prototype.lesser, Ib.prototype.greaterOrEquals = function(bb) {
          return this.compare(bb) >= 0
        }, fb.prototype.geq = fb.prototype.greaterOrEquals = Hb.prototype.geq = Hb.prototype.greaterOrEquals = Ib.prototype.geq = Ib.prototype.greaterOrEquals, Ib.prototype.lesserOrEquals = function(bb) {
          return this.compare(bb) <= 0
        }, fb.prototype.leq = fb.prototype.lesserOrEquals = Hb.prototype.leq = Hb.prototype.lesserOrEquals = Ib.prototype.leq = Ib.prototype.lesserOrEquals, Ib.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, Hb.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, fb.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, Ib.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, Hb.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, fb.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, Ib.prototype.isPositive = function() {
          return !this.sign
        }, Hb.prototype.isPositive = function() {
          return this.value > 0
        }, fb.prototype.isPositive = Hb.prototype.isPositive, Ib.prototype.isNegative = function() {
          return this.sign
        }, Hb.prototype.isNegative = function() {
          return this.value < 0
        }, fb.prototype.isNegative = Hb.prototype.isNegative, Ib.prototype.isUnit = function() {
          return !1
        }, Hb.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, fb.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, Ib.prototype.isZero = function() {
          return !1
        }, Hb.prototype.isZero = function() {
          return 0 === this.value
        }, fb.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, Ib.prototype.isDivisibleBy = function(bb) {
          var cb = xb(bb);
          return !cb.isZero() && (!!cb.isUnit() || (0 === cb.compareAbs(2) ? this.isEven() : this.mod(cb).isZero()))
        }, fb.prototype.isDivisibleBy = Hb.prototype.isDivisibleBy = Ib.prototype.isDivisibleBy, Ib.prototype.isPrime = function(sb) {
          var kb = Db(this);
          if (kb !== bb) return kb;
          var Wb = this.abs(),
            ab = Wb.bitLength();
          if (ab <= 64) return Eb(Wb, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var Tb = Math.log(2) * ab.toJSNumber(), Ub = Math.ceil(!0 === sb ? 2 * Math.pow(Tb, 2) : Tb), Ib = [], Hb = 0; Hb < Ub; Hb++) Ib.push(cb(Hb + 2));
          return Eb(Wb, Ib)
        }, fb.prototype.isPrime = Hb.prototype.isPrime = Ib.prototype.isPrime, Ib.prototype.isProbablePrime = function(sb, kb) {
          var Wb = Db(this);
          if (Wb !== bb) return Wb;
          for (var ab = this.abs(), Tb = sb === bb ? 5 : sb, Ub = [], Ib = 0; Ib < Tb; Ib++) Ub.push(cb.randBetween(2, ab.minus(2), kb));
          return Eb(ab, Ub)
        }, fb.prototype.isProbablePrime = Hb.prototype.isProbablePrime = Ib.prototype.isProbablePrime, Ib.prototype.modInv = function(bb) {
          for (var sb, kb, Wb, ab = cb.zero, Tb = cb.one, Ub = xb(bb), Ib = this.abs(); !Ib.isZero();) sb = Ub.divide(Ib), kb = ab, Wb = Ub, ab = Tb, Ub = Ib, Tb = kb.subtract(sb.multiply(Tb)), Ib = Wb.subtract(sb.multiply(Ib));
          if (!Ub.isUnit()) throw new Error(this.toString() + " and " + bb.toString() + " are not co-prime");
          return -1 === ab.compare(0) && (ab = ab.add(bb)), this.isNegative() ? ab.Of() : ab
        }, fb.prototype.modInv = Hb.prototype.modInv = Ib.prototype.modInv, Ib.prototype.next = function() {
          var bb = this.value;
          return this.sign ? Lb(bb, 1, this.sign) : new Ib(Nb(bb, 1), this.sign)
        }, Hb.prototype.next = function() {
          var bb = this.value;
          return bb + 1 < kb ? new Hb(bb + 1) : new Ib(Wb, !1)
        }, fb.prototype.next = function() {
          return new fb(this.value + BigInt(1))
        }, Ib.prototype.prev = function() {
          var bb = this.value;
          return this.sign ? new Ib(Nb(bb, 1), !0) : Lb(bb, 1, this.sign)
        }, Hb.prototype.prev = function() {
          var bb = this.value;
          return bb - 1 > -kb ? new Hb(bb - 1) : new Ib(Wb, !0)
        }, fb.prototype.prev = function() {
          return new fb(this.value - BigInt(1))
        };
        for (var ib = [1]; 2 * ib[ib.length - 1] <= sb;) ib.push(2 * ib[ib.length - 1]);
        var Ob = ib.length,
          Gb = ib[Ob - 1];

        function Kb(bb) {
          return Math.abs(bb) <= sb
        }

        function Zb(bb, sb, kb) {
          sb = xb(sb);
          for (var Wb = bb.isNegative(), ab = sb.isNegative(), Tb = Wb ? bb.not() : bb, Ub = ab ? sb.not() : sb, Ib = 0, Hb = 0, fb = null, Mb = null, Xb = []; !Tb.isZero() || !Ub.isZero();) Ib = (fb = yb(Tb, Gb))[1].toJSNumber(), Wb && (Ib = Gb - 1 - Ib), Hb = (Mb = yb(Ub, Gb))[1].toJSNumber(), ab && (Hb = Gb - 1 - Hb), Tb = fb[0], Ub = Mb[0], Xb.push(kb(Ib, Hb));
          for (var nb = 0 !== kb(Wb ? 1 : 0, ab ? 1 : 0) ? cb(-1) : cb(0), mb = Xb.length - 1; mb >= 0; mb -= 1) nb = nb.multiply(Gb).add(cb(Xb[mb]));
          return nb
        }
        Ib.prototype.shiftLeft = function(bb) {
          var cb = xb(bb).toJSNumber();
          if (!Kb(cb)) throw new Error(String(cb) + " is too large for shifting.");
          if (cb < 0) return this.shiftRight(-cb);
          var sb = this;
          if (sb.isZero()) return sb;
          for (; cb >= Ob;) sb = sb.multiply(Gb), cb -= Ob - 1;
          return sb.multiply(ib[cb])
        }, fb.prototype.shiftLeft = Hb.prototype.shiftLeft = Ib.prototype.shiftLeft, Ib.prototype.shiftRight = function(bb) {
          var cb, sb = xb(bb).toJSNumber();
          if (!Kb(sb)) throw new Error(String(sb) + " is too large for shifting.");
          if (sb < 0) return this.shiftLeft(-sb);
          for (var kb = this; sb >= Ob;) {
            if (kb.isZero() || kb.isNegative() && kb.isUnit()) return kb;
            kb = (cb = yb(kb, Gb))[1].isNegative() ? cb[0].prev() : cb[0], sb -= Ob - 1
          }
          return (cb = yb(kb, ib[sb]))[1].isNegative() ? cb[0].prev() : cb[0]
        }, fb.prototype.shiftRight = Hb.prototype.shiftRight = Ib.prototype.shiftRight, Ib.prototype.not = function() {
          return this.Of().prev()
        }, fb.prototype.not = Hb.prototype.not = Ib.prototype.not, Ib.prototype.and = function(bb) {
          return Zb(this, bb, (function(bb, cb) {
            return bb & cb
          }))
        }, fb.prototype.and = Hb.prototype.and = Ib.prototype.and, Ib.prototype.or = function(bb) {
          return Zb(this, bb, (function(bb, cb) {
            return bb | cb
          }))
        }, fb.prototype.or = Hb.prototype.or = Ib.prototype.or, Ib.prototype.xor = function(bb) {
          return Zb(this, bb, (function(bb, cb) {
            return bb ^ cb
          }))
        }, fb.prototype.xor = Hb.prototype.xor = Ib.prototype.xor;
        var zb = 1 << 30;

        function qb(bb) {
          var cb = bb.value,
            kb = "number" === typeof cb ? cb | zb : "bigint" === typeof cb ? cb | BigInt(zb) : cb[0] + cb[1] * sb | 1073758208;
          return kb & -kb
        }

        function db(bb, sb) {
          if (sb.compareTo(bb) <= 0) {
            var kb = db(bb, sb.square(sb)),
              Wb = kb.p,
              ab = kb.e,
              Tb = Wb.multiply(sb);
            return Tb.compareTo(bb) <= 0 ? {
              p: Tb,
              e: 2 * ab + 1
            } : {
              p: Wb,
              e: 2 * ab
            }
          }
          return {
            p: cb(1),
            e: 0
          }
        }

        function Ab(bb, cb) {
          return bb = xb(bb), cb = xb(cb), bb.greater(cb) ? bb : cb
        }

        function wb(bb, cb) {
          return bb = xb(bb), cb = xb(cb), bb.lesser(cb) ? bb : cb
        }

        function rb(bb, cb) {
          if (bb = xb(bb).abs(), cb = xb(cb).abs(), bb.equals(cb)) return bb;
          if (bb.isZero()) return cb;
          if (cb.isZero()) return bb;
          for (var sb, kb, Wb = Ub[1]; bb.isEven() && cb.isEven();) sb = wb(qb(bb), qb(cb)), bb = bb.divide(sb), cb = cb.divide(sb), Wb = Wb.multiply(sb);
          for (; bb.isEven();) bb = bb.divide(qb(bb));
          do {
            for (; cb.isEven();) cb = cb.divide(qb(cb));
            bb.greater(cb) && (kb = cb, cb = bb, bb = kb), cb = cb.subtract(bb)
          } while (!cb.isZero());
          return Wb.isUnit() ? bb : bb.multiply(Wb)
        }
        Ib.prototype.bitLength = function() {
          var bb = this;
          return bb.compareTo(cb(0)) < 0 && (bb = bb.Of().subtract(cb(1))), 0 === bb.compareTo(cb(0)) ? cb(0) : cb(db(bb, cb(2)).e).add(cb(1))
        }, fb.prototype.bitLength = Hb.prototype.bitLength = Ib.prototype.bitLength;
        var ob = function(bb, cb, sb, kb) {
          sb = sb || ab, bb = String(bb), kb || (bb = bb.toLowerCase(), sb = sb.toLowerCase());
          var Wb, Tb = bb.length,
            Ub = Math.abs(cb),
            Ib = {};
          for (Wb = 0; Wb < sb.length; Wb++) Ib[sb[Wb]] = Wb;
          for (Wb = 0; Wb < Tb; Wb++) {
            if ("-" !== (Mb = bb[Wb]) && (Mb in Ib && Ib[Mb] >= Ub)) {
              if ("1" === Mb && 1 === Ub) continue;
              throw new Error(Mb + " is not a valid digit in base " + cb + ".")
            }
          }
          cb = xb(cb);
          var Hb = [],
            fb = "-" === bb[0];
          for (Wb = fb ? 1 : 0; Wb < bb.length; Wb++) {
            var Mb;
            if ((Mb = bb[Wb]) in Ib) Hb.push(xb(Ib[Mb]));
            else {
              if ("<" !== Mb) throw new Error(Mb + " is not a valid character");
              var Xb = Wb;
              do {
                Wb++
              } while (">" !== bb[Wb] && Wb < bb.length);
              Hb.push(xb(bb.slice(Xb + 1, Wb)))
            }
          }
          return Sb(Hb, cb, fb)
        };

        function Sb(bb, cb, sb) {
          var kb, Wb = Ub[0],
            ab = Ub[1];
          for (kb = bb.length - 1; kb >= 0; kb--) Wb = Wb.add(bb[kb].times(ab)), ab = ab.times(cb);
          return sb ? Wb.Of() : Wb
        }

        function Rb(bb, sb) {
          if ((sb = cb(sb)).isZero()) {
            if (bb.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (sb.equals(-1)) {
            if (bb.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (bb.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-bb.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var kb = Array.apply(null, Array(bb.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return kb.unshift([1]), {
              value: [].concat.apply([], kb),
              isNegative: !1
            }
          }
          var Wb = !1;
          if (bb.isNegative() && sb.isPositive() && (Wb = !0, bb = bb.abs()), sb.isUnit()) return bb.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(bb.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: Wb
          };
          for (var ab, Tb = [], Ub = bb; Ub.isNegative() || Ub.compareAbs(sb) >= 0;) {
            ab = Ub.divmod(sb), Ub = ab.quotient;
            var Ib = ab.remainder;
            Ib.isNegative() && (Ib = sb.minus(Ib).abs(), Ub = Ub.next()), Tb.push(Ib.toJSNumber())
          }
          return Tb.push(Ub.toJSNumber()), {
            value: Tb.reverse(),
            isNegative: Wb
          }
        }

        function vb(bb, cb, sb) {
          var kb = Rb(bb, cb);
          return (kb.isNegative ? "-" : "") + kb.value.map((function(bb) {
            return function(bb, cb) {
              return bb < (cb = cb || ab).length ? cb[bb] : "<" + bb + ">"
            }(bb, sb)
          })).join("")
        }

        function Fb(bb) {
          if (Mb(+bb)) {
            var cb = +bb;
            if (cb === Qb(cb)) return Tb ? new fb(BigInt(cb)) : new Hb(cb);
            throw new Error("Invalid integer: " + bb)
          }
          var sb = "-" === bb[0];
          sb && (bb = bb.slice(1));
          var kb = bb.split(/e/i);
          if (kb.length > 2) throw new Error("Invalid integer: " + kb.join("e"));
          if (2 === kb.length) {
            var Wb = kb[1];
            if ("+" === Wb[0] && (Wb = Wb.slice(1)), (Wb = +Wb) !== Qb(Wb) || !Mb(Wb)) throw new Error("Invalid integer: " + Wb + " is not a valid exponent.");
            var ab = kb[0],
              Ub = ab.indexOf(".");
            if (Ub >= 0 && (Wb -= ab.length - Ub - 1, ab = ab.slice(0, Ub) + ab.slice(Ub + 1)), Wb < 0) throw new Error("Cannot include negative exponent part for integers");
            bb = ab += new Array(Wb + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(bb)) throw new Error("Invalid integer: " + bb);
          if (Tb) return new fb(BigInt(sb ? "-" + bb : bb));
          for (var Xb = [], nb = bb.length, lb = nb - 7; nb > 0;) Xb.push(+bb.slice(lb, nb)), (lb -= 7) < 0 && (lb = 0), nb -= 7;
          return mb(Xb), new Ib(Xb, sb)
        }

        function xb(bb) {
          return "number" === typeof bb ? function(bb) {
            if (Tb) return new fb(BigInt(bb));
            if (Mb(bb)) {
              if (bb !== Qb(bb)) throw new Error(bb + " is not an integer.");
              return new Hb(bb)
            }
            return Fb(bb.toString())
          }(bb) : "string" === typeof bb ? Fb(bb) : "bigint" === typeof bb ? new fb(bb) : bb
        }
        Ib.prototype.toArray = function(bb) {
          return Rb(this, bb)
        }, Hb.prototype.toArray = function(bb) {
          return Rb(this, bb)
        }, fb.prototype.toArray = function(bb) {
          return Rb(this, bb)
        }, Ib.prototype.toString = function(cb, sb) {
          if (cb === bb && (cb = 10), 10 !== cb) return vb(this, cb, sb);
          for (var kb, Wb = this.value, ab = Wb.length, Tb = String(Wb[--ab]); --ab >= 0;) kb = String(Wb[ab]), Tb += "0000000".slice(kb.length) + kb;
          return (this.sign ? "-" : "") + Tb
        }, Hb.prototype.toString = function(cb, sb) {
          return cb === bb && (cb = 10), 10 != cb ? vb(this, cb, sb) : String(this.value)
        }, fb.prototype.toString = Hb.prototype.toString, fb.prototype.toJSON = Ib.prototype.toJSON = Hb.prototype.toJSON = function() {
          return this.toString()
        }, Ib.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, Ib.prototype.toJSNumber = Ib.prototype.valueOf, Hb.prototype.valueOf = function() {
          return this.value
        }, Hb.prototype.toJSNumber = Hb.prototype.valueOf, fb.prototype.valueOf = fb.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var jb = 0; jb < 1e3; jb++) Ub[jb] = xb(jb), jb > 0 && (Ub[-jb] = xb(-jb));
        return Ub.one = Ub[1], Ub.zero = Ub[0], Ub.minusOne = Ub[-1], Ub.max = Ab, Ub.min = wb, Ub.gcd = rb, Ub.lcm = function(bb, cb) {
          return bb = xb(bb).abs(), cb = xb(cb).abs(), bb.divide(rb(bb, cb)).multiply(cb)
        }, Ub.isInstance = function(bb) {
          return bb instanceof Ib || bb instanceof Hb || bb instanceof fb
        }, Ub.randBetween = function(bb, cb, kb) {
          bb = xb(bb), cb = xb(cb);
          var Wb = kb || Math.random,
            ab = wb(bb, cb),
            Tb = Ab(bb, cb).subtract(ab).add(1);
          if (Tb.isSmall) return ab.add(Math.floor(Wb() * Tb));
          for (var Ib = Rb(Tb, sb).value, Hb = [], fb = !0, Mb = 0; Mb < Ib.length; Mb++) {
            var Xb = fb ? Ib[Mb] : sb,
              nb = Qb(Wb() * Xb);
            Hb.push(nb), nb < Xb && (fb = !1)
          }
          return ab.add(Ub.Ncb(Hb, sb, !1))
        }, Ub.Ncb = function(bb, cb, sb) {
          return Sb(bb.map(xb), xb(cb || 10), sb)
        }, Ub
      }();
      bb.hasOwnProperty("exports") && (bb.exports = cb)
    }(Cs);
    var Ns = ab(Cs.exports);

    function Vs(bb, cb, sb) {
      let kb = 0;
      for (let Wb = 0; Wb < sb; Wb++) {
        const sb = bb[cb + Wb];
        if (void 0 === sb) break;
        kb += sb * 16 ** Wb
      }
      return kb
    }

    function Ls(bb) {
      const cb = [];
      for (let sb = 0; sb < bb.length; sb++) {
        let kb = Number(bb[sb]);
        for (let bb = 0; kb || bb < cb.length; bb++) kb += 10 * (cb[bb] || 0), cb[bb] = kb % 16, kb = (kb - cb[bb]) / 16
      }
      return cb
    }
    class us {
      static fromString(bb) {
        return new us(function(bb) {
          const cb = Ls(bb),
            sb = Array(4);
          for (let kb = 0; kb < 4; kb++) sb[3 - kb] = Vs(cb, 4 * kb, 4);
          return sb
        }(bb), bb)
      }
      static fromBit(bb) {
        const cb = Array(4),
          sb = Math.floor(bb / 16);
        for (let kb = 0; kb < 4; kb++) cb[3 - kb] = kb === sb ? 1 << bb - 16 * sb : 0;
        return new us(cb)
      }
      constructor(bb, cb) {
        this.parts = bb, this.str = cb
      }
      and(bb) {
        let {
          parts: cb
        } = bb;
        return new us(this.parts.map(((bb, sb) => bb & cb[sb])))
      }
      or(bb) {
        let {
          parts: cb
        } = bb;
        return new us(this.parts.map(((bb, sb) => bb | cb[sb])))
      }
      xor(bb) {
        let {
          parts: cb
        } = bb;
        return new us(this.parts.map(((bb, sb) => bb ^ cb[sb])))
      }
      not() {
        return new us(this.parts.map((bb => ~bb)))
      }
      equals(bb) {
        let {
          parts: cb
        } = bb;
        return this.parts.every(((bb, sb) => bb === cb[sb]))
      }
      toString() {
        if (null != this.str) return this.str;
        const bb = new Array(16);
        return this.parts.forEach(((cb, sb) => {
          const kb = Ls(cb.toString());
          for (let Wb = 0; Wb < 4; Wb++) bb[Wb + 4 * sb] = kb[3 - Wb] || 0
        })), this.str = Ns.Ncb(bb, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const Ys = function() {
      try {
        return BigInt, !0
      } catch (bb) {
        return !1
      }
    }();
    Ys && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const hs = {},
      gs = Ys ? function(bb) {
        return BigInt(bb)
      } : function(bb) {
        return bb instanceof us ? bb : ("number" === typeof bb && (bb = bb.toString()), null != hs[bb] || (hs[bb] = us.fromString(bb)), hs[bb])
      },
      Bs = gs(0),
      ts = Ys ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bs) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bs)
      } : function() {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bs;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bs).and(bb)
      },
      ys = Ys ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bs) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bs)
      } : function() {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bs;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bs).or(bb)
      },
      Ps = Ys ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bs) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bs)
      } : function() {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bs;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bs).xor(bb)
      },
      Ds = Ys ? function(bb, cb) {
        return bb === cb
      } : function(bb, cb) {
        return null == bb || null == cb ? bb == cb : bb.equals(cb)
      };
    var Es, is, Os, Gs, Ks = {
      combine: function() {
        let bb = arguments.length <= 0 ? void 0 : arguments[0];
        for (let cb = 1; cb < arguments.length; cb++) bb = ys(bb, cb < 0 || arguments.length <= cb ? void 0 : arguments[cb]);
        return bb
      },
      add: function(bb, cb) {
        return cb === Bs ? bb : ys(bb, cb)
      },
      remove: function(bb, cb) {
        return cb === Bs ? bb : Ps(bb, ts(bb, cb))
      },
      filter: ts,
      invert: Ys ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bs)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Bs).not()
      },
      has: function(bb, cb) {
        return Ds(ts(bb, cb), cb)
      },
      hasAny: function(bb, cb) {
        return !Ds(ts(bb, cb), Bs)
      },
      equals: Ds,
      deserialize: gs,
      getFlag: Ys ? function(bb) {
        return BigInt(1) << BigInt(bb)
      } : function(bb) {
        return us.fromBit(bb)
      }
    };
    ! function(bb) {
      bb[bb.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", bb[bb.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", bb[bb.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", bb[bb.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", bb[bb.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", bb[bb.RATELIMITED = 4002] = "RATELIMITED", bb[bb.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", bb[bb.INVALID_VERSION = 4004] = "INVALID_VERSION", bb[bb.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(Es || (Es = {})),
    function(bb) {
      bb[bb.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", bb[bb.INVALID_COMMAND = 4002] = "INVALID_COMMAND", bb[bb.INVALID_EVENT = 4004] = "INVALID_EVENT", bb[bb.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(is || (is = {})),
    function(bb) {
      bb.LANDSCAPE = "landscape", bb.PORTRAIT = "portrait"
    }(Os || (Os = {})),
    function(bb) {
      bb.MOBILE = "mobile", bb.DESKTOP = "desktop"
    }(Gs || (Gs = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: Ks.getFlag(0),
      ADMINISTRATOR: Ks.getFlag(3)
    });

    function Zs(bb) {
      return ns((cb => {
        var sb;
        const [kb] = null !== (sb = Object.entries(bb).find((bb => {
          let [, sb] = bb;
          return sb === cb
        }))) && void 0 !== sb ? sb : [];
        return null != cb && void 0 === kb ? bb.UNHANDLED : cb
      }), ic().or(Oc()))
    }
    const zs = es.object({
        image_url: es.string()
      }),
      qs = es.object({
        mediaUrl: es.string().max(1024)
      }),
      ds = es.object({
        access_token: es.union([es.string(), es.null()]).optional()
      }),
      As = es.object({
        access_token: es.string(),
        user: es.object({
          username: es.string(),
          discriminator: es.string(),
          id: es.string(),
          avatar: es.union([es.string(), es.null()]).optional(),
          public_flags: es.number(),
          global_name: es.union([es.string(), es.null()]).optional()
        }),
        scopes: es.array(function(bb) {
          const cb = Pc().transform((cb => {
            const sb = bb.safeParse(cb);
            return sb.success ? sb.data : bb._def.defaultValue()
          }));
          return cb.overlayType = bb, cb
        }(es.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(es.literal(-1)).default(-1))),
        expires: es.string(),
        application: es.object({
          description: es.string(),
          icon: es.union([es.string(), es.null()]).optional(),
          id: es.string(),
          rpc_origins: es.array(es.string()).optional(),
          name: es.string()
        })
      }),
      ws = es.object({
        participants: es.array(es.object({
          id: es.string(),
          username: es.string(),
          global_name: es.union([es.string(), es.null()]).optional(),
          discriminator: es.string(),
          avatar: es.union([es.string(), es.null()]).optional(),
          flags: es.number(),
          bot: es.boolean(),
          avatar_decoration_data: es.union([es.object({
            asset: es.string(),
            skuId: es.string().optional()
          }), es.null()]).optional(),
          premium_type: es.union([es.number(), es.null()]).optional(),
          nickname: es.string().optional()
        }))
      });
    var rs;
    ! function(bb) {
      bb.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", bb.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", bb.AUTHENTICATE = "AUTHENTICATE", bb.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(rs || (rs = {}));
    const os = es.object({}).optional().nullable(),
      Ss = es.void(),
      Rs = {
        [rs.INITIATE_IMAGE_UPLOAD]: {
          request: Ss,
          response: zs
        },
        [rs.OPEN_SHARE_MOMENT_DIALOG]: {
          request: qs,
          response: os
        },
        [rs.AUTHENTICATE]: {
          request: ds,
          response: As
        },
        [rs.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: Ss,
          response: ws
        }
      },
      vs = "DISPATCH";
    var Fs;
    ! function(bb) {
      bb.AUTHORIZE = "AUTHORIZE", bb.AUTHENTICATE = "AUTHENTICATE", bb.GET_GUILDS = "GET_GUILDS", bb.GET_GUILD = "GET_GUILD", bb.GET_CHANNEL = "GET_CHANNEL", bb.GET_CHANNELS = "GET_CHANNELS", bb.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", bb.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", bb.SUBSCRIBE = "SUBSCRIBE", bb.UNSUBSCRIBE = "UNSUBSCRIBE", bb.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", bb.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", bb.SET_ACTIVITY = "SET_ACTIVITY", bb.GET_SKUS = "GET_SKUS", bb.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", bb.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", bb.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", bb.START_PURCHASE = "START_PURCHASE", bb.SET_CONFIG = "SET_CONFIG", bb.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", bb.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", bb.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", bb.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", bb.CAPTURE_LOG = "CAPTURE_LOG", bb.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", bb.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", bb.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", bb.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", bb.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", bb.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", bb.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Fs || (Fs = {}));
    const xs = vc({
        cmd: ic(),
        data: rc(),
        evt: Ac(),
        nonce: ic()
      }).passthrough(),
      ps = (Zs(Object.assign(Object.assign({}, As.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), vc({
        id: ic(),
        username: ic(),
        discriminator: ic(),
        global_name: ic().optional().nullable(),
        avatar: ic().optional().nullable(),
        avatar_decoration_data: vc({
          asset: ic(),
          sku_id: ic().optional()
        }).nullable(),
        bot: Zc(),
        flags: Oc().optional().nullable(),
        premium_type: Oc().optional().nullable()
      })),
      bk = vc({
        user: ps,
        nick: ic().optional().nullable(),
        roles: Rc(ic()),
        joined_at: ic(),
        deaf: Zc(),
        mute: Zc()
      }),
      ck = vc({
        id: ic(),
        name: ic().optional().nullable(),
        roles: Rc(ic()).optional().nullable(),
        user: ps.optional().nullable(),
        require_colons: Zc().optional().nullable(),
        managed: Zc().optional().nullable(),
        animated: Zc().optional().nullable(),
        available: Zc().optional().nullable()
      }),
      sk = vc({
        mute: Zc(),
        deaf: Zc(),
        self_mute: Zc(),
        self_deaf: Zc(),
        suppress: Zc()
      }),
      kk = vc({
        mute: Zc(),
        nick: ic(),
        user: ps,
        voice_state: sk,
        volume: Oc()
      }),
      Wk = Zs({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      ak = vc({
        name: ic(),
        type: Oc(),
        url: ic().optional().nullable(),
        created_at: Oc().optional().nullable(),
        timestamps: vc({
          start: Oc(),
          end: Oc()
        }).partial().optional().nullable(),
        application_id: ic().optional().nullable(),
        details: ic().optional().nullable(),
        state: ic().optional().nullable(),
        emoji: ck.optional().nullable(),
        party: vc({
          id: ic().optional().nullable(),
          size: Rc(Oc()).optional().nullable()
        }).optional().nullable(),
        assets: vc({
          large_image: ic().nullable(),
          large_text: ic().nullable(),
          small_image: ic().nullable(),
          small_text: ic().nullable()
        }).partial().optional().nullable(),
        secrets: vc({
          join: ic(),
          match: ic()
        }).partial().optional().nullable(),
        instance: Zc().optional().nullable(),
        flags: Oc().optional().nullable()
      }),
      Tk = vc({
        id: ic(),
        type: Zs({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: ic(),
        deny: ic()
      }),
      Uk = {
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
      Ik = vc({
        id: ic(),
        type: Zs(Uk),
        guild_id: ic().optional().nullable(),
        position: Oc().optional().nullable(),
        permission_overwrites: Rc(Tk).optional().nullable(),
        name: ic().optional().nullable(),
        topic: ic().optional().nullable(),
        nsfw: Zc().optional().nullable(),
        last_message_id: ic().optional().nullable(),
        bitrate: Oc().optional().nullable(),
        user_limit: Oc().optional().nullable(),
        rate_limit_per_user: Oc().optional().nullable(),
        recipients: Rc(ps).optional().nullable(),
        icon: ic().optional().nullable(),
        owner_id: ic().optional().nullable(),
        application_id: ic().optional().nullable(),
        parent_id: ic().optional().nullable(),
        last_pin_timestamp: ic().optional().nullable()
      }),
      Hk = vc({
        user: ps,
        guild_id: ic(),
        status: Wk,
        activities: Rc(ak),
        client_status: vc({
          desktop: Wk,
          mobile: Wk,
          web: Wk
        }).partial()
      }),
      fk = vc({
        id: ic(),
        name: ic(),
        color: Oc(),
        hoist: Zc(),
        position: Oc(),
        permissions: ic(),
        managed: Zc(),
        mentionable: Zc()
      }),
      Mk = (vc({
        id: ic(),
        name: ic(),
        owner_id: ic(),
        icon: ic().nullable(),
        icon_hash: ic().optional().nullable(),
        splash: ic().nullable(),
        discovery_splash: ic().nullable(),
        owner: Zc().optional().nullable(),
        permissions: ic().optional().nullable(),
        region: ic(),
        afk_channel_id: ic().nullable(),
        afk_timeout: Oc(),
        widget_enabled: Zc().optional().nullable(),
        widget_channel_id: ic().optional().nullable(),
        verification_level: Oc(),
        default_message_notifications: Oc(),
        explicit_content_filter: Oc(),
        roles: Rc(fk),
        emojis: Rc(ck),
        features: Rc(ic()),
        mfa_level: Oc(),
        application_id: ic().nullable(),
        system_channel_id: ic().nullable(),
        system_channel_flags: Oc(),
        rules_channel_id: ic().nullable(),
        joined_at: ic().optional().nullable(),
        large: Zc().optional().nullable(),
        unavailable: Zc().optional().nullable(),
        member_count: Oc().optional().nullable(),
        voice_states: Rc(sk).optional().nullable(),
        members: Rc(bk).optional().nullable(),
        channels: Rc(Ik).optional().nullable(),
        presences: Rc(Hk).optional().nullable(),
        max_presences: Oc().optional().nullable(),
        max_members: Oc().optional().nullable(),
        vanity_url_code: ic().nullable(),
        description: ic().nullable(),
        banner: ic().nullable(),
        premium_tier: Oc(),
        premium_subscription_count: Oc().optional().nullable(),
        preferred_locale: ic(),
        public_updates_channel_id: ic().nullable(),
        max_video_channel_users: Oc().optional().nullable(),
        approximate_member_count: Oc().optional().nullable(),
        approximate_presence_count: Oc().optional().nullable()
      }), vc({
        id: ic(),
        guild_id: ic(),
        type: Oc(),
        name: ic()
      })),
      Xk = vc({
        id: ic(),
        filename: ic(),
        size: Oc(),
        url: ic(),
        proxy_url: ic(),
        height: Oc().optional().nullable(),
        width: Oc().optional().nullable()
      }),
      nk = vc({
        text: ic(),
        icon_url: ic().optional().nullable(),
        proxy_icon_url: ic().optional().nullable()
      }),
      mk = vc({
        url: ic().optional().nullable(),
        proxy_url: ic().optional().nullable(),
        height: Oc().optional().nullable(),
        width: Oc().optional().nullable()
      }),
      lk = mk.omit({
        proxy_url: !0
      }),
      Qk = vc({
        name: ic().optional().nullable(),
        url: ic().optional().nullable()
      }),
      ek = vc({
        name: ic().optional().nullable(),
        url: ic().optional().nullable(),
        icon_url: ic().optional().nullable(),
        proxy_icon_url: ic().optional().nullable()
      }),
      Ck = vc({
        name: ic(),
        value: ic(),
        inline: Zc()
      }),
      Nk = vc({
        title: ic().optional().nullable(),
        type: ic().optional().nullable(),
        description: ic().optional().nullable(),
        url: ic().optional().nullable(),
        timestamp: ic().optional().nullable(),
        color: Oc().optional().nullable(),
        footer: nk.optional().nullable(),
        image: mk.optional().nullable(),
        thumbnail: mk.optional().nullable(),
        video: lk.optional().nullable(),
        provider: Qk.optional().nullable(),
        author: ek.optional().nullable(),
        fields: Rc(Ck).optional().nullable()
      }),
      Vk = vc({
        count: Oc(),
        me: Zc(),
        emoji: ck
      }),
      Lk = vc({
        type: Oc(),
        party_id: ic().optional().nullable()
      }),
      uk = vc({
        id: ic(),
        cover_image: ic().optional().nullable(),
        description: ic(),
        icon: ic().optional().nullable(),
        name: ic()
      }),
      Yk = vc({
        message_id: ic().optional().nullable(),
        channel_id: ic().optional().nullable(),
        guild_id: ic().optional().nullable()
      }),
      hk = vc({
        id: ic(),
        channel_id: ic(),
        guild_id: ic().optional().nullable(),
        author: ps.optional().nullable(),
        member: bk.optional().nullable(),
        content: ic(),
        timestamp: ic(),
        edited_timestamp: ic().optional().nullable(),
        tts: Zc(),
        mention_everyone: Zc(),
        mentions: Rc(ps),
        mention_roles: Rc(ic()),
        mention_channels: Rc(Mk),
        attachments: Rc(Xk),
        embeds: Rc(Nk),
        reactions: Rc(Vk).optional().nullable(),
        nonce: xc([ic(), Oc()]).optional().nullable(),
        pinned: Zc(),
        webhook_id: ic().optional().nullable(),
        type: Oc(),
        activity: Lk.optional().nullable(),
        application: uk.optional().nullable(),
        message_reference: Yk.optional().nullable(),
        flags: Oc().optional().nullable(),
        stickers: Rc(rc()).optional().nullable(),
        referenced_message: rc().optional().nullable()
      }),
      Jk = vc({
        id: ic(),
        name: ic()
      }),
      gk = vc({
        type: Zs({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: Oc(),
        name: ic()
      }),
      Bk = vc({
        type: Zs({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: Zc(),
        threshold: Oc(),
        shortcut: Rc(gk),
        delay: Oc()
      }),
      tk = vc({
        device_id: ic(),
        volume: Oc(),
        available_devices: Rc(Jk)
      }),
      yk = (vc({
        type: Zs({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: ic(),
        vendor: vc({
          name: ic(),
          url: ic()
        }),
        model: vc({
          name: ic(),
          url: ic()
        }),
        related: Rc(ic()),
        echo_cancellation: Zc().optional().nullable(),
        noise_suppression: Zc().optional().nullable(),
        automatic_gain_control: Zc().optional().nullable(),
        hardware_mute: Zc().optional().nullable()
      }), vc({
        id: ic(),
        name: ic(),
        type: Zs({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: vc({
          amount: Oc(),
          currency: ic()
        }),
        application_id: ic(),
        flags: Oc(),
        release_date: ic().nullable()
      })),
      Pk = vc({
        id: ic(),
        sku_id: ic(),
        application_id: ic(),
        user_id: ic(),
        gift_code_flags: Oc(),
        type: Zs({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: ic().optional().nullable(),
        branches: Rc(ic()).optional().nullable(),
        starts_at: ic().optional().nullable(),
        ends_at: ic().optional().nullable(),
        parent_id: ic().optional().nullable(),
        consumed: Zc().optional().nullable(),
        deleted: Zc().optional().nullable(),
        gift_code_batch_id: ic().optional().nullable()
      }),
      Dk = (Zs({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), Zs({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      Ek = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      ik = (Zs(Ek), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      Ok = (Zs(ik), "ERROR");
    var Gk;
    ! function(bb) {
      bb.READY = "READY", bb.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", bb.SPEAKING_START = "SPEAKING_START", bb.SPEAKING_STOP = "SPEAKING_STOP", bb.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", bb.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", bb.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", bb.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", bb.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", bb.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(Gk || (Gk = {}));
    const Kk = xs.extend({
        evt: Is(Gk),
        nonce: ic().nullable(),
        cmd: Ts(vs),
        data: vc({}).passthrough()
      }),
      Zk = xs.extend({
        evt: Ts(Ok),
        data: vc({
          code: Oc(),
          message: ic().optional()
        }).passthrough(),
        cmd: Is(Fs),
        nonce: ic().nullable()
      }),
      zk = Kk.extend({
        evt: ic()
      }),
      qk = xc([Kk, zk, Zk]);
    const dk = {
      [Gk.READY]: {
        payload: Kk.extend({
          evt: Ts(Gk.READY),
          data: vc({
            v: Oc(),
            config: vc({
              cdn_host: ic().optional(),
              api_endpoint: ic(),
              environment: ic()
            }),
            user: vc({
              id: ic(),
              username: ic(),
              discriminator: ic(),
              avatar: ic().optional()
            }).optional()
          })
        })
      },
      [Gk.VOICE_STATE_UPDATE]: {
        payload: Kk.extend({
          evt: Ts(Gk.VOICE_STATE_UPDATE),
          data: kk
        }),
        subscribeArgs: vc({
          channel_id: ic()
        })
      },
      [Gk.SPEAKING_START]: {
        payload: Kk.extend({
          evt: Ts(Gk.SPEAKING_START),
          data: vc({
            lobby_id: ic().optional(),
            channel_id: ic().optional(),
            user_id: ic()
          })
        }),
        subscribeArgs: vc({
          lobby_id: ic().nullable().optional(),
          channel_id: ic().nullable().optional()
        })
      },
      [Gk.SPEAKING_STOP]: {
        payload: Kk.extend({
          evt: Ts(Gk.SPEAKING_STOP),
          data: vc({
            lobby_id: ic().optional(),
            channel_id: ic().optional(),
            user_id: ic()
          })
        }),
        subscribeArgs: vc({
          lobby_id: ic().nullable().optional(),
          channel_id: ic().nullable().optional()
        })
      },
      [Gk.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: Kk.extend({
          evt: Ts(Gk.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: vc({
            layout_mode: Zs(ik)
          })
        })
      },
      [Gk.ORIENTATION_UPDATE]: {
        payload: Kk.extend({
          evt: Ts(Gk.ORIENTATION_UPDATE),
          data: vc({
            screen_orientation: Zs(Ek),
            orientation: Is(Os)
          })
        })
      },
      [Gk.CURRENT_USER_UPDATE]: {
        payload: Kk.extend({
          evt: Ts(Gk.CURRENT_USER_UPDATE),
          data: ps
        })
      },
      [Gk.ENTITLEMENT_CREATE]: {
        payload: Kk.extend({
          evt: Ts(Gk.ENTITLEMENT_CREATE),
          data: vc({
            entitlement: Pk
          })
        })
      },
      [Gk.THERMAL_STATE_UPDATE]: {
        payload: Kk.extend({
          evt: Ts(Gk.THERMAL_STATE_UPDATE),
          data: vc({
            thermal_state: Dk
          })
        })
      },
      [Gk.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: Kk.extend({
          evt: Ts(Gk.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: vc({
            participants: ws.shape.participants
          })
        })
      }
    };
    const Ak = vc({}).nullable(),
      wk = vc({
        code: ic()
      }),
      rk = vc({
        guilds: Rc(vc({
          id: ic(),
          name: ic()
        }))
      }),
      Sk = vc({
        id: ic(),
        name: ic(),
        icon_url: ic().optional(),
        members: Rc(bk)
      }),
      Rk = vc({
        id: ic(),
        type: Zs(Uk),
        guild_id: ic().optional().nullable(),
        name: ic().optional().nullable(),
        topic: ic().optional().nullable(),
        bitrate: Oc().optional().nullable(),
        user_limit: Oc().optional().nullable(),
        position: Oc().optional().nullable(),
        voice_states: Rc(kk),
        messages: Rc(hk)
      }),
      vk = vc({
        channels: Rc(Ik)
      }),
      Fk = (Rk.nullable(), Rk.nullable()),
      xk = Rk.nullable(),
      jk = (vc({
        input: tk,
        output: tk,
        mode: Bk,
        automatic_gain_control: Zc(),
        echo_cancellation: Zc(),
        noise_suppression: Zc(),
        qos: Zc(),
        silence_warning: Zc(),
        deaf: Zc(),
        mute: Zc()
      }), vc({
        evt: ic()
      })),
      pk = vc({
        shortcut: gk
      }),
      bW = ak,
      cW = vc({
        skus: Rc(yk)
      }),
      sW = vc({
        entitlements: Rc(Pk)
      }),
      kW = Rc(Pk).nullable(),
      WW = vc({
        use_interactive_pip: Zc()
      }),
      aW = vc({
        locale: ic()
      }),
      TW = vc({
        enabled: Zc()
      }),
      UW = vc({
        permissions: Kc().or(ic())
      }),
      IW = vc({
        iosKeyboardResizesView: Ms(Zc())
      }),
      HW = xs.extend({
        cmd: Is(Fs),
        evt: Ac()
      });

    function fW(bb) {
      let {
        cmd: cb,
        data: sb
      } = bb;
      switch (cb) {
        case Fs.AUTHORIZE:
          return wk.parse(sb);
        case Fs.CAPTURE_SHORTCUT:
          return pk.parse(sb);
        case Fs.ENCOURAGE_HW_ACCELERATION:
          return TW.parse(sb);
        case Fs.GET_CHANNEL:
          return Rk.parse(sb);
        case Fs.GET_CHANNELS:
          return vk.parse(sb);
        case Fs.GET_CHANNEL_PERMISSIONS:
          return UW.parse(sb);
        case Fs.GET_GUILD:
          return Sk.parse(sb);
        case Fs.GET_GUILDS:
          return rk.parse(sb);
        case Fs.GET_PLATFORM_BEHAVIORS:
          return IW.parse(sb);
        case Fs.GET_CHANNEL:
          return Rk.parse(sb);
        case Fs.SELECT_TEXT_CHANNEL:
          return xk.parse(sb);
        case Fs.SELECT_VOICE_CHANNEL:
          return Fk.parse(sb);
        case Fs.SET_ACTIVITY:
          return bW.parse(sb);
        case Fs.GET_SKUS_EMBEDDED:
          return cW.parse(sb);
        case Fs.GET_ENTITLEMENTS_EMBEDDED:
          return sW.parse(sb);
        case Fs.SET_CONFIG:
          return WW.parse(sb);
        case Fs.START_PURCHASE:
          return kW.parse(sb);
        case Fs.SUBSCRIBE:
        case Fs.UNSUBSCRIBE:
          return jk.parse(sb);
        case Fs.USER_SETTINGS_GET_LOCALE:
          return aW.parse(sb);
        case Fs.OPEN_EXTERNAL_LINK:
        case Fs.SET_ORIENTATION_LOCK_STATE:
        case Fs.SET_CERTIFIED_DEVICES:
        case Fs.SEND_ANALYTICS_EVENT:
        case Fs.OPEN_INVITE_DIALOG:
        case Fs.CAPTURE_LOG:
        case Fs.GET_SKUS:
        case Fs.GET_ENTITLEMENTS:
          return Ak.parse(sb);
        case Fs.AUTHENTICATE:
        case Fs.INITIATE_IMAGE_UPLOAD:
        case Fs.OPEN_SHARE_MOMENT_DIALOG:
        case Fs.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: bb
          } = Rs[cb];
          return bb.parse(sb);
        default:
          ! function(bb, cb) {
            throw cb
          }(0, new Error(`Unrecognized command ${cb}`))
      }
    }
    vc({
      frame_id: ic(),
      platform: Is(Gs).optional().nullable()
    }), vc({
      v: Ts(1),
      encoding: Ts("json").optional(),
      client_id: ic(),
      frame_id: ic()
    });
    const MW = vc({
        code: Oc(),
        message: ic().optional()
      }),
      XW = vc({
        evt: ic().nullable(),
        nonce: ic().nullable(),
        data: rc().nullable(),
        cmd: ic()
      }).passthrough();

    function nW(bb) {
      const cb = XW.parse(bb);
      return null != cb.evt ? cb.evt === Ok ? Zk.parse(cb) : function(bb) {
        const cb = bb.evt;
        if (!(cb in Gk)) throw new Error(`Unrecognized event type ${bb.evt}`);
        return dk[cb].payload.parse(bb)
      }(qk.parse(cb)) : function(bb) {
        return Object.assign(Object.assign({}, bb), {
          data: fW(bb)
        })
      }(HW.passthrough().parse(cb))
    }

    function mW(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const Wb = xs.extend({
        cmd: Ts(cb),
        data: sb
      });
      return async sb => {
        const ab = await bb({
          cmd: cb,
          args: sb,
          transfer: kb(sb)
        });
        return Wb.parse(ab).data
      }
    }

    function lW(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const sb = Rs[bb].response,
        kb = xs.extend({
          cmd: Ts(bb),
          data: sb
        });
      return sb => async Wb => {
        const ab = await sb({
          cmd: bb,
          args: Wb,
          transfer: cb(Wb)
        });
        return kb.parse(ab).data
      }
    }
    const QW = lW(rs.AUTHENTICATE),
      eW = bb => mW(bb, Fs.AUTHORIZE, wk),
      CW = bb => mW(bb, Fs.CAPTURE_LOG, Ak),
      NW = bb => mW(bb, Fs.ENCOURAGE_HW_ACCELERATION, TW),
      VW = bb => mW(bb, Fs.GET_ENTITLEMENTS_EMBEDDED, sW),
      LW = bb => mW(bb, Fs.GET_SKUS_EMBEDDED, cW),
      uW = bb => mW(bb, Fs.GET_CHANNEL_PERMISSIONS, UW),
      YW = bb => mW(bb, Fs.GET_PLATFORM_BEHAVIORS, IW),
      hW = bb => mW(bb, Fs.OPEN_EXTERNAL_LINK, Ak),
      JW = bb => mW(bb, Fs.OPEN_INVITE_DIALOG, Ak),
      gW = lW(rs.OPEN_SHARE_MOMENT_DIALOG);
    ak.Wn({
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
      type: ak.shape.type.optional(),
      instance: ak.shape.instance.optional()
    }).nullable();
    const BW = bb => mW(bb, Fs.SET_ACTIVITY, bW),
      tW = bb => mW(bb, Fs.SET_CONFIG, WW);
    const yW = bb => ({
        lock_state: bb.lock_state,
        picture_in_picture_lock_state: bb.picture_in_picture_lock_state
      }),
      PW = bb => function(bb) {
        let {
          sendCommand: cb,
          cmd: sb,
          response: kb,
          fallbackTransform: Wb,
          transferTransform: ab = () => {}
        } = bb;
        const Tb = xs.extend({
          cmd: Ts(sb),
          data: kb
        });
        return async bb => {
          try {
            const kb = await cb({
              cmd: sb,
              args: bb,
              transfer: ab(bb)
            });
            return Tb.parse(kb).data
          } catch (kb) {
            if (kb.code === is.INVALID_PAYLOAD) {
              const kb = Wb(bb),
                Ub = await cb({
                  cmd: sb,
                  args: kb,
                  transfer: ab(kb)
                });
              return Tb.parse(Ub).data
            }
            throw kb
          }
        }
      }({
        sendCommand: bb,
        cmd: Fs.SET_ORIENTATION_LOCK_STATE,
        response: Ak,
        fallbackTransform: yW
      }),
      DW = bb => mW(bb, Fs.START_PURCHASE, kW),
      EW = bb => mW(bb, Fs.USER_SETTINGS_GET_LOCALE, aW),
      iW = lW(rs.INITIATE_IMAGE_UPLOAD),
      OW = bb => mW(bb, Fs.GET_CHANNEL, Rk),
      GW = lW(rs.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var KW = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function ZW(bb) {
      return "string" === typeof bb && KW.test(bb)
    }
    for (var zW = [], qW = 0; qW < 256; ++qW) zW.push((qW + 256).toString(16).substr(1));

    function dW(bb) {
      var cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        sb = (zW[bb[cb + 0]] + zW[bb[cb + 1]] + zW[bb[cb + 2]] + zW[bb[cb + 3]] + "-" + zW[bb[cb + 4]] + zW[bb[cb + 5]] + "-" + zW[bb[cb + 6]] + zW[bb[cb + 7]] + "-" + zW[bb[cb + 8]] + zW[bb[cb + 9]] + "-" + zW[bb[cb + 10]] + zW[bb[cb + 11]] + zW[bb[cb + 12]] + zW[bb[cb + 13]] + zW[bb[cb + 14]] + zW[bb[cb + 15]]).toLowerCase();
      if (!ZW(sb)) throw TypeError("Stringified UUID is invalid");
      return sb
    }
    var AW;

    function wW(bb, cb, sb) {
      function kb(bb, kb, Wb, ab) {
        if ("string" === typeof bb && (bb = function(bb) {
            bb = unescape(encodeURIComponent(bb));
            for (var cb = [], sb = 0; sb < bb.length; ++sb) cb.push(bb.charCodeAt(sb));
            return cb
          }(bb)), "string" === typeof kb && (kb = function(bb) {
            if (!ZW(bb)) throw TypeError("Invalid UUID");
            var cb, sb = new Uint8Array(16);
            return sb[0] = (cb = parseInt(bb.slice(0, 8), 16)) >>> 24, sb[1] = cb >>> 16 & 255, sb[2] = cb >>> 8 & 255, sb[3] = 255 & cb, sb[4] = (cb = parseInt(bb.slice(9, 13), 16)) >>> 8, sb[5] = 255 & cb, sb[6] = (cb = parseInt(bb.slice(14, 18), 16)) >>> 8, sb[7] = 255 & cb, sb[8] = (cb = parseInt(bb.slice(19, 23), 16)) >>> 8, sb[9] = 255 & cb, sb[10] = (cb = parseInt(bb.slice(24, 36), 16)) / 1099511627776 & 255, sb[11] = cb / 4294967296 & 255, sb[12] = cb >>> 24 & 255, sb[13] = cb >>> 16 & 255, sb[14] = cb >>> 8 & 255, sb[15] = 255 & cb, sb
          }(kb)), 16 !== kb.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var Tb = new Uint8Array(16 + bb.length);
        if (Tb.set(kb), Tb.set(bb, kb.length), (Tb = sb(Tb))[6] = 15 & Tb[6] | cb, Tb[8] = 63 & Tb[8] | 128, Wb) {
          ab = ab || 0;
          for (var Ub = 0; Ub < 16; ++Ub) Wb[ab + Ub] = Tb[Ub];
          return Wb
        }
        return dW(Tb)
      }
      try {
        kb.name = bb
      } catch (Wb) {}
      return kb.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", kb.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", kb
    }

    function rW(bb) {
      return 14 + (bb + 64 >>> 9 << 4) + 1
    }

    function oW(bb, cb) {
      var sb = (65535 & bb) + (65535 & cb);
      return (bb >> 16) + (cb >> 16) + (sb >> 16) << 16 | 65535 & sb
    }

    function SW(bb, cb, sb, kb, Wb, ab) {
      return oW((Tb = oW(oW(cb, bb), oW(kb, ab))) << (Ub = Wb) | Tb >>> 32 - Ub, sb);
      var Tb, Ub
    }

    function RW(bb, cb, sb, kb, Wb, ab, Tb) {
      return SW(cb & sb | ~cb & kb, bb, cb, Wb, ab, Tb)
    }

    function vW(bb, cb, sb, kb, Wb, ab, Tb) {
      return SW(cb & kb | sb & ~kb, bb, cb, Wb, ab, Tb)
    }

    function FW(bb, cb, sb, kb, Wb, ab, Tb) {
      return SW(cb ^ sb ^ kb, bb, cb, Wb, ab, Tb)
    }

    function xW(bb, cb, sb, kb, Wb, ab, Tb) {
      return SW(sb ^ (cb | ~kb), bb, cb, Wb, ab, Tb)
    }
    wW("v3", 48, (function(bb) {
      if ("string" === typeof bb) {
        var cb = unescape(encodeURIComponent(bb));
        bb = new Uint8Array(cb.length);
        for (var sb = 0; sb < cb.length; ++sb) bb[sb] = cb.charCodeAt(sb)
      }
      return function(bb) {
        for (var cb = [], sb = 32 * bb.length, kb = "0123456789abcdef", Wb = 0; Wb < sb; Wb += 8) {
          var ab = bb[Wb >> 5] >>> Wb % 32 & 255,
            Tb = parseInt(kb.charAt(ab >>> 4 & 15) + kb.charAt(15 & ab), 16);
          cb.push(Tb)
        }
        return cb
      }(function(bb, cb) {
        bb[cb >> 5] |= 128 << cb % 32, bb[rW(cb) - 1] = cb;
        for (var sb = 1732584193, kb = -271733879, Wb = -1732584194, ab = 271733878, Tb = 0; Tb < bb.length; Tb += 16) {
          var Ub = sb,
            Ib = kb,
            Hb = Wb,
            fb = ab;
          sb = RW(sb, kb, Wb, ab, bb[Tb], 7, -680876936), ab = RW(ab, sb, kb, Wb, bb[Tb + 1], 12, -389564586), Wb = RW(Wb, ab, sb, kb, bb[Tb + 2], 17, 606105819), kb = RW(kb, Wb, ab, sb, bb[Tb + 3], 22, -1044525330), sb = RW(sb, kb, Wb, ab, bb[Tb + 4], 7, -176418897), ab = RW(ab, sb, kb, Wb, bb[Tb + 5], 12, 1200080426), Wb = RW(Wb, ab, sb, kb, bb[Tb + 6], 17, -1473231341), kb = RW(kb, Wb, ab, sb, bb[Tb + 7], 22, -45705983), sb = RW(sb, kb, Wb, ab, bb[Tb + 8], 7, 1770035416), ab = RW(ab, sb, kb, Wb, bb[Tb + 9], 12, -1958414417), Wb = RW(Wb, ab, sb, kb, bb[Tb + 10], 17, -42063), kb = RW(kb, Wb, ab, sb, bb[Tb + 11], 22, -1990404162), sb = RW(sb, kb, Wb, ab, bb[Tb + 12], 7, 1804603682), ab = RW(ab, sb, kb, Wb, bb[Tb + 13], 12, -40341101), Wb = RW(Wb, ab, sb, kb, bb[Tb + 14], 17, -1502002290), sb = vW(sb, kb = RW(kb, Wb, ab, sb, bb[Tb + 15], 22, 1236535329), Wb, ab, bb[Tb + 1], 5, -165796510), ab = vW(ab, sb, kb, Wb, bb[Tb + 6], 9, -1069501632), Wb = vW(Wb, ab, sb, kb, bb[Tb + 11], 14, 643717713), kb = vW(kb, Wb, ab, sb, bb[Tb], 20, -373897302), sb = vW(sb, kb, Wb, ab, bb[Tb + 5], 5, -701558691), ab = vW(ab, sb, kb, Wb, bb[Tb + 10], 9, 38016083), Wb = vW(Wb, ab, sb, kb, bb[Tb + 15], 14, -660478335), kb = vW(kb, Wb, ab, sb, bb[Tb + 4], 20, -405537848), sb = vW(sb, kb, Wb, ab, bb[Tb + 9], 5, 568446438), ab = vW(ab, sb, kb, Wb, bb[Tb + 14], 9, -1019803690), Wb = vW(Wb, ab, sb, kb, bb[Tb + 3], 14, -187363961), kb = vW(kb, Wb, ab, sb, bb[Tb + 8], 20, 1163531501), sb = vW(sb, kb, Wb, ab, bb[Tb + 13], 5, -1444681467), ab = vW(ab, sb, kb, Wb, bb[Tb + 2], 9, -51403784), Wb = vW(Wb, ab, sb, kb, bb[Tb + 7], 14, 1735328473), sb = FW(sb, kb = vW(kb, Wb, ab, sb, bb[Tb + 12], 20, -1926607734), Wb, ab, bb[Tb + 5], 4, -378558), ab = FW(ab, sb, kb, Wb, bb[Tb + 8], 11, -2022574463), Wb = FW(Wb, ab, sb, kb, bb[Tb + 11], 16, 1839030562), kb = FW(kb, Wb, ab, sb, bb[Tb + 14], 23, -35309556), sb = FW(sb, kb, Wb, ab, bb[Tb + 1], 4, -1530992060), ab = FW(ab, sb, kb, Wb, bb[Tb + 4], 11, 1272893353), Wb = FW(Wb, ab, sb, kb, bb[Tb + 7], 16, -155497632), kb = FW(kb, Wb, ab, sb, bb[Tb + 10], 23, -1094730640), sb = FW(sb, kb, Wb, ab, bb[Tb + 13], 4, 681279174), ab = FW(ab, sb, kb, Wb, bb[Tb], 11, -358537222), Wb = FW(Wb, ab, sb, kb, bb[Tb + 3], 16, -722521979), kb = FW(kb, Wb, ab, sb, bb[Tb + 6], 23, 76029189), sb = FW(sb, kb, Wb, ab, bb[Tb + 9], 4, -640364487), ab = FW(ab, sb, kb, Wb, bb[Tb + 12], 11, -421815835), Wb = FW(Wb, ab, sb, kb, bb[Tb + 15], 16, 530742520), sb = xW(sb, kb = FW(kb, Wb, ab, sb, bb[Tb + 2], 23, -995338651), Wb, ab, bb[Tb], 6, -198630844), ab = xW(ab, sb, kb, Wb, bb[Tb + 7], 10, 1126891415), Wb = xW(Wb, ab, sb, kb, bb[Tb + 14], 15, -1416354905), kb = xW(kb, Wb, ab, sb, bb[Tb + 5], 21, -57434055), sb = xW(sb, kb, Wb, ab, bb[Tb + 12], 6, 1700485571), ab = xW(ab, sb, kb, Wb, bb[Tb + 3], 10, -1894986606), Wb = xW(Wb, ab, sb, kb, bb[Tb + 10], 15, -1051523), kb = xW(kb, Wb, ab, sb, bb[Tb + 1], 21, -2054922799), sb = xW(sb, kb, Wb, ab, bb[Tb + 8], 6, 1873313359), ab = xW(ab, sb, kb, Wb, bb[Tb + 15], 10, -30611744), Wb = xW(Wb, ab, sb, kb, bb[Tb + 6], 15, -1560198380), kb = xW(kb, Wb, ab, sb, bb[Tb + 13], 21, 1309151649), sb = xW(sb, kb, Wb, ab, bb[Tb + 4], 6, -145523070), ab = xW(ab, sb, kb, Wb, bb[Tb + 11], 10, -1120210379), Wb = xW(Wb, ab, sb, kb, bb[Tb + 2], 15, 718787259), kb = xW(kb, Wb, ab, sb, bb[Tb + 9], 21, -343485551), sb = oW(sb, Ub), kb = oW(kb, Ib), Wb = oW(Wb, Hb), ab = oW(ab, fb)
        }
        return [sb, kb, Wb, ab]
      }(function(bb) {
        if (0 === bb.length) return [];
        for (var cb = 8 * bb.length, sb = new Uint32Array(rW(cb)), kb = 0; kb < cb; kb += 8) sb[kb >> 5] |= (255 & bb[kb / 8]) << kb % 32;
        return sb
      }(bb), 8 * bb.length))
    }));
    var jW = new Uint8Array(16);

    function pW() {
      if (!AW && !(AW = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return AW(jW)
    }

    function ba(bb, cb, sb) {
      var kb = (bb = bb || {}).random || (bb.rng || pW)();
      if (kb[6] = 15 & kb[6] | 64, kb[8] = 63 & kb[8] | 128, cb) {
        sb = sb || 0;
        for (var Wb = 0; Wb < 16; ++Wb) cb[sb + Wb] = kb[Wb];
        return cb
      }
      return dW(kb)
    }

    function ca(bb, cb, sb, kb) {
      switch (bb) {
        case 0:
          return cb & sb ^ ~cb & kb;
        case 1:
        case 3:
          return cb ^ sb ^ kb;
        case 2:
          return cb & sb ^ cb & kb ^ sb & kb
      }
    }

    function sa(bb, cb) {
      return bb << cb | bb >>> 32 - cb
    }
    wW("v5", 80, (function(bb) {
      var cb = [1518500249, 1859775393, 2400959708, 3395469782],
        sb = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof bb) {
        var kb = unescape(encodeURIComponent(bb));
        bb = [];
        for (var Wb = 0; Wb < kb.length; ++Wb) bb.push(kb.charCodeAt(Wb))
      } else Array.isArray(bb) || (bb = Array.prototype.slice.call(bb));
      bb.push(128);
      for (var ab = bb.length / 4 + 2, Tb = Math.ceil(ab / 16), Ub = new Array(Tb), Ib = 0; Ib < Tb; ++Ib) {
        for (var Hb = new Uint32Array(16), fb = 0; fb < 16; ++fb) Hb[fb] = bb[64 * Ib + 4 * fb] << 24 | bb[64 * Ib + 4 * fb + 1] << 16 | bb[64 * Ib + 4 * fb + 2] << 8 | bb[64 * Ib + 4 * fb + 3];
        Ub[Ib] = Hb
      }
      Ub[Tb - 1][14] = 8 * (bb.length - 1) / Math.pow(2, 32), Ub[Tb - 1][14] = Math.floor(Ub[Tb - 1][14]), Ub[Tb - 1][15] = 8 * (bb.length - 1) & 4294967295;
      for (var Mb = 0; Mb < Tb; ++Mb) {
        for (var Xb = new Uint32Array(80), nb = 0; nb < 16; ++nb) Xb[nb] = Ub[Mb][nb];
        for (var mb = 16; mb < 80; ++mb) Xb[mb] = sa(Xb[mb - 3] ^ Xb[mb - 8] ^ Xb[mb - 14] ^ Xb[mb - 16], 1);
        for (var lb = sb[0], Qb = sb[1], eb = sb[2], Cb = sb[3], Nb = sb[4], Vb = 0; Vb < 80; ++Vb) {
          var Lb = Math.floor(Vb / 20),
            ub = sa(lb, 5) + ca(Lb, Qb, eb, Cb) + Nb + cb[Lb] + Xb[Vb] >>> 0;
          Nb = Cb, Cb = eb, eb = sa(Qb, 30) >>> 0, Qb = lb, lb = ub
        }
        sb[0] = sb[0] + lb >>> 0, sb[1] = sb[1] + Qb >>> 0, sb[2] = sb[2] + eb >>> 0, sb[3] = sb[3] + Cb >>> 0, sb[4] = sb[4] + Nb >>> 0
      }
      return [sb[0] >> 24 & 255, sb[0] >> 16 & 255, sb[0] >> 8 & 255, 255 & sb[0], sb[1] >> 24 & 255, sb[1] >> 16 & 255, sb[1] >> 8 & 255, 255 & sb[1], sb[2] >> 24 & 255, sb[2] >> 16 & 255, sb[2] >> 8 & 255, 255 & sb[2], sb[3] >> 24 & 255, sb[3] >> 16 & 255, sb[3] >> 8 & 255, 255 & sb[3], sb[4] >> 24 & 255, sb[4] >> 16 & 255, sb[4] >> 8 & 255, 255 & sb[4]]
    }));
    class ka extends Error {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(cb), this.code = bb, this.message = cb, this.name = "Discord SDK Error"
      }
    }
    const Wa = ["log", "warn", "debug", "info", "error"];
    var aa;
    ! function(bb) {
      bb[bb.HANDSHAKE = 0] = "HANDSHAKE", bb[bb.FRAME = 1] = "FRAME", bb[bb.CLOSE = 2] = "CLOSE", bb[bb.HELLO = 3] = "HELLO"
    }(aa || (aa = {}));
    const Ta = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class Ua {
      getTransfer(bb) {
        var cb;
        switch (bb.cmd) {
          case Fs.SUBSCRIBE:
          case Fs.UNSUBSCRIBE:
            return;
          default:
            return null !== (cb = bb.transfer) && void 0 !== cb ? cb : void 0
        }
      }
      constructor(bb, cb) {
        var sb;
        if (this.eventBus = new Hb, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = bb => {
            var cb;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const sb = ba();
            null === (cb = this.source) || void 0 === cb || cb.postMessage([aa.FRAME, Object.assign(Object.assign({}, bb), {
              nonce: sb
            })], this.sourceOrigin, this.getTransfer(bb));
            return new Promise(((bb, cb) => {
              this.pendingCommands.set(sb, {
                resolve: bb,
                reject: cb
              })
            }))
          }, this.commands = (sb = this.sendCommand, {
            authenticate: QW(sb),
            authorize: eW(sb),
            captureLog: CW(sb),
            encourageHardwareAcceleration: NW(sb),
            getChannel: OW(sb),
            getChannelPermissions: uW(sb),
            getEntitlements: VW(sb),
            getPlatformBehaviors: YW(sb),
            getSkus: LW(sb),
            openExternalLink: hW(sb),
            openInviteDialog: JW(sb),
            openShareMomentDialog: gW(sb),
            setActivity: BW(sb),
            setConfig: tW(sb),
            setOrientationLockState: PW(sb),
            startPurchase: DW(sb),
            userSettingsGetLocale: EW(sb),
            initiateImageUpload: iW(sb),
            getInstanceConnectedParticipants: GW(sb)
          }), this.handleMessage = bb => {
            if (!Ta.has(bb.origin)) return;
            const cb = bb.data;
            if (!Array.isArray(cb)) return;
            const [sb, kb] = cb;
            switch (sb) {
              case aa.HELLO:
                return;
              case aa.CLOSE:
                return this.handleClose(kb);
              case aa.HANDSHAKE:
                return this.handleHandshake();
              case aa.FRAME:
                return this.handleFrame(kb);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = bb, this.configuration = null !== cb && void 0 !== cb ? cb : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = Gs.DESKTOP, this.guildId = null, void(this.channelId = null);
        const kb = new URLSearchParams(this._getSearch()),
          Wb = kb.get("frame_id");
        if (!Wb) throw new Error("frame_id query param is not defined");
        this.frameId = Wb;
        const ab = kb.get("instance_id");
        if (!ab) throw new Error("instance_id query param is not defined");
        this.instanceId = ab;
        const Tb = kb.get("platform");
        if (!Tb) throw new Error("platform query param is not defined");
        if (Tb !== Gs.DESKTOP && Tb !== Gs.MOBILE) throw new Error(`Invalid query param "platform" of "${Tb}". Valid values are "${Gs.DESKTOP}" or "${Gs.MOBILE}"`);
        this.platform = Tb, this.guildId = kb.get("guild_id"), this.channelId = kb.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var bb;
          return [null !== (bb = window.parent.opener) && void 0 !== bb ? bb : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(bb, cb) {
        var sb;
        window.removeEventListener("message", this.handleMessage);
        const kb = ba();
        null === (sb = this.source) || void 0 === sb || sb.postMessage([aa.CLOSE, {
          code: bb,
          message: cb,
          nonce: kb
        }], this.sourceOrigin)
      }
      async subscribe(bb, cb) {
        for (var sb = arguments.length, kb = new Array(sb > 2 ? sb - 2 : 0), Wb = 2; Wb < sb; Wb++) kb[Wb - 2] = arguments[Wb];
        const [ab] = kb, Tb = this.eventBus.listenerCount(bb), Ub = this.eventBus.on(bb, cb);
        return Object.values(Gk).includes(bb) && bb !== Gk.READY && 0 === Tb && await this.sendCommand({
          cmd: Fs.SUBSCRIBE,
          args: ab,
          evt: bb
        }), Ub
      }
      async unsubscribe(bb, cb) {
        for (var sb = arguments.length, kb = new Array(sb > 2 ? sb - 2 : 0), Wb = 2; Wb < sb; Wb++) kb[Wb - 2] = arguments[Wb];
        const [ab] = kb;
        return bb !== Gk.READY && 1 === this.eventBus.listenerCount(bb) && await this.sendCommand({
          cmd: Fs.UNSUBSCRIBE,
          evt: bb,
          args: ab
        }), this.eventBus.off(bb, cb)
      }
      async ready() {
        this.isReady || await new Promise((bb => {
          this.eventBus.once(Gk.READY, bb)
        }))
      }
      handshake() {
        var bb;
        null === (bb = this.source) || void 0 === bb || bb.postMessage([aa.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(Gk.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const bb = (bb, cb) => {
          this.commands.captureLog({
            level: bb,
            message: cb
          })
        };
        Wa.forEach((cb => {
          ! function(bb, cb, sb) {
            const kb = bb[cb],
              Wb = bb;
            kb && (bb[cb] = function() {
              const bb = [].slice.call(arguments),
                ab = "" + bb.join(" ");
              sb(cb, ab), kb.apply(Wb, bb)
            })
          }(console, cb, bb)
        }))
      }
      handleClose(bb) {
        MW.parse(bb)
      }
      handleHandshake() {}
      handleFrame(bb) {
        var cb, sb;
        let kb;
        try {
          kb = nW(bb)
        } catch (Wb) {
          return console.error("Failed to parse", bb), void console.error(Wb)
        }
        if ("DISPATCH" === kb.cmd) this.eventBus.emit(kb.evt, kb.data);
        else {
          if (kb.evt === Ok) {
            if (null != kb.nonce) return null === (cb = this.pendingCommands.get(kb.nonce)) || void 0 === cb || cb.reject(kb.data), void this.pendingCommands.delete(kb.nonce);
            this.eventBus.emit("error", new ka(kb.data.code, kb.data.message))
          }
          if (null == kb.nonce) return void console.error("Missing nonce", bb);
          null === (sb = this.pendingCommands.get(kb.nonce)) || void 0 === sb || sb.resolve(kb), this.pendingCommands.delete(kb.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var Ia, Ha = 1e9,
      fa = !0,
      Ma = "[DecimalError] ",
      Xa = Ma + "Invalid argument: ",
      na = Ma + "Exponent out of range: ",
      ma = Math.floor,
      la = Math.pow,
      Qa = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      ea = 1e7,
      Ca = 9007199254740991,
      Na = ma(1286742750677284.5),
      Va = {};

    function La(bb, cb) {
      var sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb = bb.constructor,
        Mb = fb.precision;
      if (!bb.s || !cb.s) return cb.s || (cb = new fb(bb)), fa ? Da(cb, Mb) : cb;
      if (Ib = bb.d, Hb = cb.d, Tb = bb.e, Wb = cb.e, Ib = Ib.slice(), ab = Tb - Wb) {
        for (ab < 0 ? (kb = Ib, ab = -ab, Ub = Hb.length) : (kb = Hb, Wb = Tb, Ub = Ib.length), ab > (Ub = (Tb = Math.ceil(Mb / 7)) > Ub ? Tb + 1 : Ub + 1) && (ab = Ub, kb.length = 1), kb.reverse(); ab--;) kb.push(0);
        kb.reverse()
      }
      for ((Ub = Ib.length) - (ab = Hb.length) < 0 && (ab = Ub, kb = Hb, Hb = Ib, Ib = kb), sb = 0; ab;) sb = (Ib[--ab] = Ib[ab] + Hb[ab] + sb) / ea | 0, Ib[ab] %= ea;
      for (sb && (Ib.unshift(sb), ++Wb), Ub = Ib.length; 0 == Ib[--Ub];) Ib.pop();
      return cb.d = Ib, cb.e = Wb, fa ? Da(cb, Mb) : cb
    }

    function ua(bb, cb, sb) {
      if (bb !== ~~bb || bb < cb || bb > sb) throw Error(Xa + bb)
    }

    function Ya(bb) {
      var cb, sb, kb, Wb = bb.length - 1,
        ab = "",
        Tb = bb[0];
      if (Wb > 0) {
        for (ab += Tb, cb = 1; cb < Wb; cb++)(sb = 7 - (kb = bb[cb] + "").length) && (ab += ta(sb)), ab += kb;
        (sb = 7 - (kb = (Tb = bb[cb]) + "").length) && (ab += ta(sb))
      } else if (0 === Tb) return "0";
      for (; Tb % 10 === 0;) Tb /= 10;
      return ab + Tb
    }
    Va.absoluteValue = Va.abs = function() {
      var bb = new this.constructor(this);
      return bb.s && (bb.s = 1), bb
    }, Va.comparedTo = Va.cmp = function(bb) {
      var cb, sb, kb, Wb, ab = this;
      if (bb = new ab.constructor(bb), ab.s !== bb.s) return ab.s || -bb.s;
      if (ab.e !== bb.e) return ab.e > bb.e ^ ab.s < 0 ? 1 : -1;
      for (cb = 0, sb = (kb = ab.d.length) < (Wb = bb.d.length) ? kb : Wb; cb < sb; ++cb)
        if (ab.d[cb] !== bb.d[cb]) return ab.d[cb] > bb.d[cb] ^ ab.s < 0 ? 1 : -1;
      return kb === Wb ? 0 : kb > Wb ^ ab.s < 0 ? 1 : -1
    }, Va.decimalPlaces = Va.dp = function() {
      var bb = this,
        cb = bb.d.length - 1,
        sb = 7 * (cb - bb.e);
      if (cb = bb.d[cb])
        for (; cb % 10 == 0; cb /= 10) sb--;
      return sb < 0 ? 0 : sb
    }, Va.dividedBy = Va.div = function(bb) {
      return ha(this, new this.constructor(bb))
    }, Va.dividedToIntegerBy = Va.idiv = function(bb) {
      var cb = this.constructor;
      return Da(ha(this, new cb(bb), 0, 1), cb.precision)
    }, Va.equals = Va.eq = function(bb) {
      return !this.cmp(bb)
    }, Va.exponent = function() {
      return ga(this)
    }, Va.greaterThan = Va.gt = function(bb) {
      return this.cmp(bb) > 0
    }, Va.greaterThanOrEqualTo = Va.gte = function(bb) {
      return this.cmp(bb) >= 0
    }, Va.isInteger = Va.isint = function() {
      return this.e > this.d.length - 2
    }, Va.isNegative = Va.isneg = function() {
      return this.s < 0
    }, Va.isPositive = Va.ispos = function() {
      return this.s > 0
    }, Va.isZero = function() {
      return 0 === this.s
    }, Va.lessThan = Va.lt = function(bb) {
      return this.cmp(bb) < 0
    }, Va.lessThanOrEqualTo = Va.lte = function(bb) {
      return this.cmp(bb) < 1
    }, Va.logarithm = Va.log = function(bb) {
      var cb, sb = this,
        kb = sb.constructor,
        Wb = kb.precision,
        ab = Wb + 5;
      if (void 0 === bb) bb = new kb(10);
      else if ((bb = new kb(bb)).s < 1 || bb.eq(Ia)) throw Error(Ma + "NaN");
      if (sb.s < 1) throw Error(Ma + (sb.s ? "NaN" : "-Infinity"));
      return sb.eq(Ia) ? new kb(0) : (fa = !1, cb = ha(ya(sb, ab), ya(bb, ab), ab), fa = !0, Da(cb, Wb))
    }, Va.minus = Va.sub = function(bb) {
      var cb = this;
      return bb = new cb.constructor(bb), cb.s == bb.s ? Ea(cb, bb) : La(cb, (bb.s = -bb.s, bb))
    }, Va.modulo = Va.mod = function(bb) {
      var cb, sb = this,
        kb = sb.constructor,
        Wb = kb.precision;
      if (!(bb = new kb(bb)).s) throw Error(Ma + "NaN");
      return sb.s ? (fa = !1, cb = ha(sb, bb, 0, 1).times(bb), fa = !0, sb.minus(cb)) : Da(new kb(sb), Wb)
    }, Va.naturalExponential = Va.exp = function() {
      return Ja(this)
    }, Va.naturalLogarithm = Va.ln = function() {
      return ya(this)
    }, Va.negated = Va.neg = function() {
      var bb = new this.constructor(this);
      return bb.s = -bb.s || 0, bb
    }, Va.plus = Va.add = function(bb) {
      var cb = this;
      return bb = new cb.constructor(bb), cb.s == bb.s ? La(cb, bb) : Ea(cb, (bb.s = -bb.s, bb))
    }, Va.precision = Va.sd = function(bb) {
      var cb, sb, kb, Wb = this;
      if (void 0 !== bb && bb !== !!bb && 1 !== bb && 0 !== bb) throw Error(Xa + bb);
      if (cb = ga(Wb) + 1, sb = 7 * (kb = Wb.d.length - 1) + 1, kb = Wb.d[kb]) {
        for (; kb % 10 == 0; kb /= 10) sb--;
        for (kb = Wb.d[0]; kb >= 10; kb /= 10) sb++
      }
      return bb && cb > sb ? cb : sb
    }, Va.squareRoot = Va.sqrt = function() {
      var bb, cb, sb, kb, Wb, ab, Tb, Ub = this,
        Ib = Ub.constructor;
      if (Ub.s < 1) {
        if (!Ub.s) return new Ib(0);
        throw Error(Ma + "NaN")
      }
      for (bb = ga(Ub), fa = !1, 0 == (Wb = Math.sqrt(+Ub)) || Wb == 1 / 0 ? (((cb = Ya(Ub.d)).length + bb) % 2 == 0 && (cb += "0"), Wb = Math.sqrt(cb), bb = ma((bb + 1) / 2) - (bb < 0 || bb % 2), kb = new Ib(cb = Wb == 1 / 0 ? "1e" + bb : (cb = Wb.toExponential()).slice(0, cb.indexOf("e") + 1) + bb)) : kb = new Ib(Wb.toString()), Wb = Tb = (sb = Ib.precision) + 3;;)
        if (kb = (ab = kb).plus(ha(Ub, ab, Tb + 2)).times(.5), Ya(ab.d).slice(0, Tb) === (cb = Ya(kb.d)).slice(0, Tb)) {
          if (cb = cb.slice(Tb - 3, Tb + 1), Wb == Tb && "4999" == cb) {
            if (Da(ab, sb + 1, 0), ab.times(ab).eq(Ub)) {
              kb = ab;
              break
            }
          } else if ("9999" != cb) break;
          Tb += 4
        } return fa = !0, Da(kb, sb)
    }, Va.times = Va.mul = function(bb) {
      var cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb = this,
        Mb = fb.constructor,
        Xb = fb.d,
        nb = (bb = new Mb(bb)).d;
      if (!fb.s || !bb.s) return new Mb(0);
      for (bb.s *= fb.s, sb = fb.e + bb.e, (Ib = Xb.length) < (Hb = nb.length) && (ab = Xb, Xb = nb, nb = ab, Tb = Ib, Ib = Hb, Hb = Tb), ab = [], kb = Tb = Ib + Hb; kb--;) ab.push(0);
      for (kb = Hb; --kb >= 0;) {
        for (cb = 0, Wb = Ib + kb; Wb > kb;) Ub = ab[Wb] + nb[kb] * Xb[Wb - kb - 1] + cb, ab[Wb--] = Ub % ea | 0, cb = Ub / ea | 0;
        ab[Wb] = (ab[Wb] + cb) % ea | 0
      }
      for (; !ab[--Tb];) ab.pop();
      return cb ? ++sb : ab.shift(), bb.d = ab, bb.e = sb, fa ? Da(bb, Mb.precision) : bb
    }, Va.toDecimalPlaces = Va.todp = function(bb, cb) {
      var sb = this,
        kb = sb.constructor;
      return sb = new kb(sb), void 0 === bb ? sb : (ua(bb, 0, Ha), void 0 === cb ? cb = kb.rounding : ua(cb, 0, 8), Da(sb, bb + ga(sb) + 1, cb))
    }, Va.toExponential = function(bb, cb) {
      var sb, kb = this,
        Wb = kb.constructor;
      return void 0 === bb ? sb = ia(kb, !0) : (ua(bb, 0, Ha), void 0 === cb ? cb = Wb.rounding : ua(cb, 0, 8), sb = ia(kb = Da(new Wb(kb), bb + 1, cb), !0, bb + 1)), sb
    }, Va.toFixed = function(bb, cb) {
      var sb, kb, Wb = this,
        ab = Wb.constructor;
      return void 0 === bb ? ia(Wb) : (ua(bb, 0, Ha), void 0 === cb ? cb = ab.rounding : ua(cb, 0, 8), sb = ia((kb = Da(new ab(Wb), bb + ga(Wb) + 1, cb)).abs(), !1, bb + ga(kb) + 1), Wb.isneg() && !Wb.isZero() ? "-" + sb : sb)
    }, Va.toInteger = Va.toint = function() {
      var bb = this,
        cb = bb.constructor;
      return Da(new cb(bb), ga(bb) + 1, cb.rounding)
    }, Va.toNumber = function() {
      return +this
    }, Va.toPower = Va.pow = function(bb) {
      var cb, sb, kb, Wb, ab, Tb, Ub = this,
        Ib = Ub.constructor,
        Hb = +(bb = new Ib(bb));
      if (!bb.s) return new Ib(Ia);
      if (!(Ub = new Ib(Ub)).s) {
        if (bb.s < 1) throw Error(Ma + "Infinity");
        return Ub
      }
      if (Ub.eq(Ia)) return Ub;
      if (kb = Ib.precision, bb.eq(Ia)) return Da(Ub, kb);
      if (Tb = (cb = bb.e) >= (sb = bb.d.length - 1), ab = Ub.s, Tb) {
        if ((sb = Hb < 0 ? -Hb : Hb) <= Ca) {
          for (Wb = new Ib(Ia), cb = Math.ceil(kb / 7 + 4), fa = !1; sb % 2 && Oa((Wb = Wb.times(Ub)).d, cb), 0 !== (sb = ma(sb / 2));) Oa((Ub = Ub.times(Ub)).d, cb);
          return fa = !0, bb.s < 0 ? new Ib(Ia).div(Wb) : Da(Wb, kb)
        }
      } else if (ab < 0) throw Error(Ma + "NaN");
      return ab = ab < 0 && 1 & bb.d[Math.max(cb, sb)] ? -1 : 1, Ub.s = 1, fa = !1, Wb = bb.times(ya(Ub, kb + 12)), fa = !0, (Wb = Ja(Wb)).s = ab, Wb
    }, Va.toPrecision = function(bb, cb) {
      var sb, kb, Wb = this,
        ab = Wb.constructor;
      return void 0 === bb ? kb = ia(Wb, (sb = ga(Wb)) <= ab.toExpNeg || sb >= ab.toExpPos) : (ua(bb, 1, Ha), void 0 === cb ? cb = ab.rounding : ua(cb, 0, 8), kb = ia(Wb = Da(new ab(Wb), bb, cb), bb <= (sb = ga(Wb)) || sb <= ab.toExpNeg, bb)), kb
    }, Va.toSignificantDigits = Va.tosd = function(bb, cb) {
      var sb = this.constructor;
      return void 0 === bb ? (bb = sb.precision, cb = sb.rounding) : (ua(bb, 1, Ha), void 0 === cb ? cb = sb.rounding : ua(cb, 0, 8)), Da(new sb(this), bb, cb)
    }, Va.toString = Va.valueOf = Va.val = Va.toJSON = Va[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var bb = this,
        cb = ga(bb),
        sb = bb.constructor;
      return ia(bb, cb <= sb.toExpNeg || cb >= sb.toExpPos)
    };
    var ha = function() {
      function bb(bb, cb) {
        var sb, kb = 0,
          Wb = bb.length;
        for (bb = bb.slice(); Wb--;) sb = bb[Wb] * cb + kb, bb[Wb] = sb % ea | 0, kb = sb / ea | 0;
        return kb && bb.unshift(kb), bb
      }

      function cb(bb, cb, sb, kb) {
        var Wb, ab;
        if (sb != kb) ab = sb > kb ? 1 : -1;
        else
          for (Wb = ab = 0; Wb < sb; Wb++)
            if (bb[Wb] != cb[Wb]) {
              ab = bb[Wb] > cb[Wb] ? 1 : -1;
              break
            } return ab
      }

      function sb(bb, cb, sb) {
        for (var kb = 0; sb--;) bb[sb] -= kb, kb = bb[sb] < cb[sb] ? 1 : 0, bb[sb] = kb * ea + bb[sb] - cb[sb];
        for (; !bb[0] && bb.length > 1;) bb.shift()
      }
      return function(kb, Wb, ab, Tb) {
        var Ub, Ib, Hb, fb, Mb, Xb, nb, mb, lb, Qb, eb, Cb, Nb, Vb, Lb, ub, Yb, hb, Jb = kb.constructor,
          gb = kb.s == Wb.s ? 1 : -1,
          Bb = kb.d,
          tb = Wb.d;
        if (!kb.s) return new Jb(kb);
        if (!Wb.s) throw Error(Ma + "Division by zero");
        for (Ib = kb.e - Wb.e, Yb = tb.length, Lb = Bb.length, mb = (nb = new Jb(gb)).d = [], Hb = 0; tb[Hb] == (Bb[Hb] || 0);) ++Hb;
        if (tb[Hb] > (Bb[Hb] || 0) && --Ib, (Cb = null == ab ? ab = Jb.precision : Tb ? ab + (ga(kb) - ga(Wb)) + 1 : ab) < 0) return new Jb(0);
        if (Cb = Cb / 7 + 2 | 0, Hb = 0, 1 == Yb)
          for (fb = 0, tb = tb[0], Cb++;
            (Hb < Lb || fb) && Cb--; Hb++) Nb = fb * ea + (Bb[Hb] || 0), mb[Hb] = Nb / tb | 0, fb = Nb % tb | 0;
        else {
          for ((fb = ea / (tb[0] + 1) | 0) > 1 && (tb = bb(tb, fb), Bb = bb(Bb, fb), Yb = tb.length, Lb = Bb.length), Vb = Yb, Qb = (lb = Bb.slice(0, Yb)).length; Qb < Yb;) lb[Qb++] = 0;
          (hb = tb.slice()).unshift(0), ub = tb[0], tb[1] >= ea / 2 && ++ub;
          do {
            fb = 0, (Ub = cb(tb, lb, Yb, Qb)) < 0 ? (eb = lb[0], Yb != Qb && (eb = eb * ea + (lb[1] || 0)), (fb = eb / ub | 0) > 1 ? (fb >= ea && (fb = ea - 1), 1 == (Ub = cb(Mb = bb(tb, fb), lb, Xb = Mb.length, Qb = lb.length)) && (fb--, sb(Mb, Yb < Xb ? hb : tb, Xb))) : (0 == fb && (Ub = fb = 1), Mb = tb.slice()), (Xb = Mb.length) < Qb && Mb.unshift(0), sb(lb, Mb, Qb), -1 == Ub && (Ub = cb(tb, lb, Yb, Qb = lb.length)) < 1 && (fb++, sb(lb, Yb < Qb ? hb : tb, Qb)), Qb = lb.length) : 0 === Ub && (fb++, lb = [0]), mb[Hb++] = fb, Ub && lb[0] ? lb[Qb++] = Bb[Vb] || 0 : (lb = [Bb[Vb]], Qb = 1)
          } while ((Vb++ < Lb || void 0 !== lb[0]) && Cb--)
        }
        return mb[0] || mb.shift(), nb.e = Ib, Da(nb, Tb ? ab + ga(nb) + 1 : ab)
      }
    }();

    function Ja(bb, cb) {
      var sb, kb, Wb, ab, Tb, Ub = 0,
        Ib = 0,
        Hb = bb.constructor,
        fb = Hb.precision;
      if (ga(bb) > 16) throw Error(na + ga(bb));
      if (!bb.s) return new Hb(Ia);
      for (null == cb ? (fa = !1, Tb = fb) : Tb = cb, ab = new Hb(.03125); bb.abs().gte(.1);) bb = bb.times(ab), Ib += 5;
      for (Tb += Math.log(la(2, Ib)) / Math.LN10 * 2 + 5 | 0, sb = kb = Wb = new Hb(Ia), Hb.precision = Tb;;) {
        if (kb = Da(kb.times(bb), Tb), sb = sb.times(++Ub), Ya((ab = Wb.plus(ha(kb, sb, Tb))).d).slice(0, Tb) === Ya(Wb.d).slice(0, Tb)) {
          for (; Ib--;) Wb = Da(Wb.times(Wb), Tb);
          return Hb.precision = fb, null == cb ? (fa = !0, Da(Wb, fb)) : Wb
        }
        Wb = ab
      }
    }

    function ga(bb) {
      for (var cb = 7 * bb.e, sb = bb.d[0]; sb >= 10; sb /= 10) cb++;
      return cb
    }

    function Ba(bb, cb, sb) {
      if (cb > bb.LN10.sd()) throw fa = !0, sb && (bb.precision = sb), Error(Ma + "LN10 precision limit exceeded");
      return Da(new bb(bb.LN10), cb)
    }

    function ta(bb) {
      for (var cb = ""; bb--;) cb += "0";
      return cb
    }

    function ya(bb, cb) {
      var sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb = 1,
        Xb = bb,
        nb = Xb.d,
        mb = Xb.constructor,
        lb = mb.precision;
      if (Xb.s < 1) throw Error(Ma + (Xb.s ? "NaN" : "-Infinity"));
      if (Xb.eq(Ia)) return new mb(0);
      if (null == cb ? (fa = !1, Hb = lb) : Hb = cb, Xb.eq(10)) return null == cb && (fa = !0), Ba(mb, Hb);
      if (Hb += 10, mb.precision = Hb, kb = (sb = Ya(nb)).charAt(0), ab = ga(Xb), !(Math.abs(ab) < 15e14)) return Ib = Ba(mb, Hb + 2, lb).times(ab + ""), Xb = ya(new mb(kb + "." + sb.slice(1)), Hb - 10).plus(Ib), mb.precision = lb, null == cb ? (fa = !0, Da(Xb, lb)) : Xb;
      for (; kb < 7 && 1 != kb || 1 == kb && sb.charAt(1) > 3;) kb = (sb = Ya((Xb = Xb.times(bb)).d)).charAt(0), Mb++;
      for (ab = ga(Xb), kb > 1 ? (Xb = new mb("0." + sb), ab++) : Xb = new mb(kb + "." + sb.slice(1)), Ub = Tb = Xb = ha(Xb.minus(Ia), Xb.plus(Ia), Hb), fb = Da(Xb.times(Xb), Hb), Wb = 3;;) {
        if (Tb = Da(Tb.times(fb), Hb), Ya((Ib = Ub.plus(ha(Tb, new mb(Wb), Hb))).d).slice(0, Hb) === Ya(Ub.d).slice(0, Hb)) return Ub = Ub.times(2), 0 !== ab && (Ub = Ub.plus(Ba(mb, Hb + 2, lb).times(ab + ""))), Ub = ha(Ub, new mb(Mb), Hb), mb.precision = lb, null == cb ? (fa = !0, Da(Ub, lb)) : Ub;
        Ub = Ib, Wb += 2
      }
    }

    function Pa(bb, cb) {
      var sb, kb, Wb;
      for ((sb = cb.indexOf(".")) > -1 && (cb = cb.replace(".", "")), (kb = cb.search(/e/i)) > 0 ? (sb < 0 && (sb = kb), sb += +cb.slice(kb + 1), cb = cb.substring(0, kb)) : sb < 0 && (sb = cb.length), kb = 0; 48 === cb.charCodeAt(kb);) ++kb;
      for (Wb = cb.length; 48 === cb.charCodeAt(Wb - 1);) --Wb;
      if (cb = cb.slice(kb, Wb)) {
        if (Wb -= kb, sb = sb - kb - 1, bb.e = ma(sb / 7), bb.d = [], kb = (sb + 1) % 7, sb < 0 && (kb += 7), kb < Wb) {
          for (kb && bb.d.push(+cb.slice(0, kb)), Wb -= 7; kb < Wb;) bb.d.push(+cb.slice(kb, kb += 7));
          kb = 7 - (cb = cb.slice(kb)).length
        } else kb -= Wb;
        for (; kb--;) cb += "0";
        if (bb.d.push(+cb), fa && (bb.e > Na || bb.e < -Na)) throw Error(na + sb)
      } else bb.s = 0, bb.e = 0, bb.d = [0];
      return bb
    }

    function Da(bb, cb, sb) {
      var kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb = bb.d;
      for (Tb = 1, ab = Mb[0]; ab >= 10; ab /= 10) Tb++;
      if ((kb = cb - Tb) < 0) kb += 7, Wb = cb, Hb = Mb[fb = 0];
      else {
        if ((fb = Math.ceil((kb + 1) / 7)) >= (ab = Mb.length)) return bb;
        for (Hb = ab = Mb[fb], Tb = 1; ab >= 10; ab /= 10) Tb++;
        Wb = (kb %= 7) - 7 + Tb
      }
      if (void 0 !== sb && (Ub = Hb / (ab = la(10, Tb - Wb - 1)) % 10 | 0, Ib = cb < 0 || void 0 !== Mb[fb + 1] || Hb % ab, Ib = sb < 4 ? (Ub || Ib) && (0 == sb || sb == (bb.s < 0 ? 3 : 2)) : Ub > 5 || 5 == Ub && (4 == sb || Ib || 6 == sb && (kb > 0 ? Wb > 0 ? Hb / la(10, Tb - Wb) : 0 : Mb[fb - 1]) % 10 & 1 || sb == (bb.s < 0 ? 8 : 7))), cb < 1 || !Mb[0]) return Ib ? (ab = ga(bb), Mb.length = 1, cb = cb - ab - 1, Mb[0] = la(10, (7 - cb % 7) % 7), bb.e = ma(-cb / 7) || 0) : (Mb.length = 1, Mb[0] = bb.e = bb.s = 0), bb;
      if (0 == kb ? (Mb.length = fb, ab = 1, fb--) : (Mb.length = fb + 1, ab = la(10, 7 - kb), Mb[fb] = Wb > 0 ? (Hb / la(10, Tb - Wb) % la(10, Wb) | 0) * ab : 0), Ib)
        for (;;) {
          if (0 == fb) {
            (Mb[0] += ab) == ea && (Mb[0] = 1, ++bb.e);
            break
          }
          if (Mb[fb] += ab, Mb[fb] != ea) break;
          Mb[fb--] = 0, ab = 1
        }
      for (kb = Mb.length; 0 === Mb[--kb];) Mb.pop();
      if (fa && (bb.e > Na || bb.e < -Na)) throw Error(na + ga(bb));
      return bb
    }

    function Ea(bb, cb) {
      var sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb, Xb = bb.constructor,
        nb = Xb.precision;
      if (!bb.s || !cb.s) return cb.s ? cb.s = -cb.s : cb = new Xb(bb), fa ? Da(cb, nb) : cb;
      if (Ib = bb.d, Mb = cb.d, kb = cb.e, Hb = bb.e, Ib = Ib.slice(), Tb = Hb - kb) {
        for ((fb = Tb < 0) ? (sb = Ib, Tb = -Tb, Ub = Mb.length) : (sb = Mb, kb = Hb, Ub = Ib.length), Tb > (Wb = Math.max(Math.ceil(nb / 7), Ub) + 2) && (Tb = Wb, sb.length = 1), sb.reverse(), Wb = Tb; Wb--;) sb.push(0);
        sb.reverse()
      } else {
        for ((fb = (Wb = Ib.length) < (Ub = Mb.length)) && (Ub = Wb), Wb = 0; Wb < Ub; Wb++)
          if (Ib[Wb] != Mb[Wb]) {
            fb = Ib[Wb] < Mb[Wb];
            break
          } Tb = 0
      }
      for (fb && (sb = Ib, Ib = Mb, Mb = sb, cb.s = -cb.s), Ub = Ib.length, Wb = Mb.length - Ub; Wb > 0; --Wb) Ib[Ub++] = 0;
      for (Wb = Mb.length; Wb > Tb;) {
        if (Ib[--Wb] < Mb[Wb]) {
          for (ab = Wb; ab && 0 === Ib[--ab];) Ib[ab] = ea - 1;
          --Ib[ab], Ib[Wb] += ea
        }
        Ib[Wb] -= Mb[Wb]
      }
      for (; 0 === Ib[--Ub];) Ib.pop();
      for (; 0 === Ib[0]; Ib.shift()) --kb;
      return Ib[0] ? (cb.d = Ib, cb.e = kb, fa ? Da(cb, nb) : cb) : new Xb(0)
    }

    function ia(bb, cb, sb) {
      var kb, Wb = ga(bb),
        ab = Ya(bb.d),
        Tb = ab.length;
      return cb ? (sb && (kb = sb - Tb) > 0 ? ab = ab.charAt(0) + "." + ab.slice(1) + ta(kb) : Tb > 1 && (ab = ab.charAt(0) + "." + ab.slice(1)), ab = ab + (Wb < 0 ? "e" : "e+") + Wb) : Wb < 0 ? (ab = "0." + ta(-Wb - 1) + ab, sb && (kb = sb - Tb) > 0 && (ab += ta(kb))) : Wb >= Tb ? (ab += ta(Wb + 1 - Tb), sb && (kb = sb - Wb - 1) > 0 && (ab = ab + "." + ta(kb))) : ((kb = Wb + 1) < Tb && (ab = ab.slice(0, kb) + "." + ab.slice(kb)), sb && (kb = sb - Tb) > 0 && (Wb + 1 === Tb && (ab += "."), ab += ta(kb))), bb.s < 0 ? "-" + ab : ab
    }

    function Oa(bb, cb) {
      if (bb.length > cb) return bb.length = cb, !0
    }

    function Ga(bb) {
      if (!bb || "object" !== typeof bb) throw Error(Ma + "Object expected");
      var cb, sb, kb, Wb = ["precision", 1, Ha, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (cb = 0; cb < Wb.length; cb += 3)
        if (void 0 !== (kb = bb[sb = Wb[cb]])) {
          if (!(ma(kb) === kb && kb >= Wb[cb + 1] && kb <= Wb[cb + 2])) throw Error(Xa + sb + ": " + kb);
          this[sb] = kb
        } if (void 0 !== (kb = bb[sb = "LN10"])) {
        if (kb != Math.LN10) throw Error(Xa + sb + ": " + kb);
        this[sb] = new this(kb)
      }
      return this
    }
    var Ka = function bb(cb) {
      var sb, kb, Wb;

      function ab(bb) {
        var cb = this;
        if (!(cb instanceof ab)) return new ab(bb);
        if (cb.constructor = ab, bb instanceof ab) return cb.s = bb.s, cb.e = bb.e, void(cb.d = (bb = bb.d) ? bb.slice() : bb);
        if ("number" === typeof bb) {
          if (0 * bb !== 0) throw Error(Xa + bb);
          if (bb > 0) cb.s = 1;
          else {
            if (!(bb < 0)) return cb.s = 0, cb.e = 0, void(cb.d = [0]);
            bb = -bb, cb.s = -1
          }
          return bb === ~~bb && bb < 1e7 ? (cb.e = 0, void(cb.d = [bb])) : Pa(cb, bb.toString())
        }
        if ("string" !== typeof bb) throw Error(Xa + bb);
        if (45 === bb.charCodeAt(0) ? (bb = bb.slice(1), cb.s = -1) : cb.s = 1, !Qa.test(bb)) throw Error(Xa + bb);
        Pa(cb, bb)
      }
      if (ab.prototype = Va, ab.ROUND_UP = 0, ab.ROUND_DOWN = 1, ab.ROUND_CEIL = 2, ab.ROUND_FLOOR = 3, ab.ROUND_HALF_UP = 4, ab.ROUND_HALF_DOWN = 5, ab.ROUND_HALF_EVEN = 6, ab.ROUND_HALF_CEIL = 7, ab.ROUND_HALF_FLOOR = 8, ab.clone = bb, ab.config = ab.set = Ga, void 0 === cb && (cb = {}), cb)
        for (Wb = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], sb = 0; sb < Wb.length;) cb.hasOwnProperty(kb = Wb[sb++]) || (cb[kb] = this[kb]);
      return ab.config(cb), ab
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    Ia = new Ka(1);
    var Za;
    ! function(bb) {
      bb.AED = "aed", bb.AFN = "afn", bb.ALL = "all", bb.AMD = "amd", bb.ANG = "ang", bb.AOA = "aoa", bb.ARS = "ars", bb.AUD = "aud", bb.AWG = "awg", bb.AZN = "azn", bb.BAM = "bam", bb.BBD = "bbd", bb.BDT = "bdt", bb.BGN = "bgn", bb.BHD = "bhd", bb.BIF = "bif", bb.BMD = "bmd", bb.BND = "bnd", bb.BOB = "bob", bb.BOV = "bov", bb.BRL = "brl", bb.BSD = "bsd", bb.BTN = "btn", bb.BWP = "bwp", bb.BYN = "byn", bb.BYR = "byr", bb.BZD = "bzd", bb.CAD = "cad", bb.CDF = "cdf", bb.CHE = "che", bb.CHF = "chf", bb.CHW = "chw", bb.CLF = "clf", bb.CLP = "clp", bb.CNY = "cny", bb.COP = "cop", bb.COU = "cou", bb.CRC = "crc", bb.CUC = "cuc", bb.CUP = "cup", bb.CVE = "cve", bb.CZK = "czk", bb.DJF = "djf", bb.DKK = "dkk", bb.DOP = "dop", bb.DZD = "dzd", bb.EGP = "egp", bb.ERN = "ern", bb.ETB = "etb", bb.EUR = "eur", bb.FJD = "fjd", bb.FKP = "fkp", bb.GBP = "gbp", bb.GEL = "gel", bb.GHS = "ghs", bb.GIP = "gip", bb.GMD = "gmd", bb.GNF = "gnf", bb.GTQ = "gtq", bb.GYD = "gyd", bb.HKD = "hkd", bb.HNL = "hnl", bb.HRK = "hrk", bb.HTG = "htg", bb.HUF = "huf", bb.IDR = "idr", bb.ILS = "ils", bb.INR = "inr", bb.IQD = "iqd", bb.IRR = "irr", bb.ISK = "isk", bb.JMD = "jmd", bb.JOD = "jod", bb.JPY = "jpy", bb.KES = "kes", bb.KGS = "kgs", bb.KHR = "khr", bb.KMF = "kmf", bb.KPW = "kpw", bb.KRW = "krw", bb.KWD = "kwd", bb.KYD = "kyd", bb.KZT = "kzt", bb.LAK = "lak", bb.LBP = "lbp", bb.LKR = "lkr", bb.LRD = "lrd", bb.LSL = "lsl", bb.LTL = "ltl", bb.LVL = "lvl", bb.LYD = "lyd", bb.MAD = "mad", bb.MDL = "mdl", bb.MGA = "mga", bb.MKD = "mkd", bb.MMK = "mmk", bb.MNT = "mnt", bb.MOP = "mop", bb.MRO = "mro", bb.MUR = "mur", bb.MVR = "mvr", bb.MWK = "mwk", bb.MXN = "mxn", bb.MXV = "mxv", bb.MYR = "myr", bb.MZN = "mzn", bb.NAD = "nad", bb.NGN = "ngn", bb.NIO = "nio", bb.NOK = "nok", bb.NPR = "npr", bb.NZD = "nzd", bb.OMR = "omr", bb.PAB = "pab", bb.PEN = "pen", bb.PGK = "pgk", bb.PHP = "php", bb.PKR = "pkr", bb.PLN = "pln", bb.PYG = "pyg", bb.QAR = "qar", bb.RON = "ron", bb.RSD = "rsd", bb.RUB = "rub", bb.RWF = "rwf", bb.SAR = "sar", bb.SBD = "sbd", bb.SCR = "scr", bb.SDG = "sdg", bb.SEK = "sek", bb.SGD = "sgd", bb.SHP = "shp", bb.SLL = "sll", bb.SOS = "sos", bb.SRD = "srd", bb.SSP = "ssp", bb.STD = "std", bb.SVC = "svc", bb.SYP = "syp", bb.SZL = "szl", bb.THB = "thb", bb.TJS = "tjs", bb.TMT = "tmt", bb.TND = "tnd", bb.TOP = "top", bb.TRY = "try", bb.TTD = "ttd", bb.TWD = "twd", bb.TZS = "tzs", bb.UAH = "uah", bb.UGX = "ugx", bb.USD = "usd", bb.USN = "usn", bb.USS = "uss", bb.UYI = "uyi", bb.UYU = "uyu", bb.UZS = "uzs", bb.VEF = "vef", bb.VND = "vnd", bb.VUV = "vuv", bb.WST = "wst", bb.XAF = "xaf", bb.XAG = "xag", bb.XAU = "xau", bb.XBA = "xba", bb.XBB = "xbb", bb.XBC = "xbc", bb.XBD = "xbd", bb.XCD = "xcd", bb.XDR = "xdr", bb.XFU = "xfu", bb.XOF = "xof", bb.XPD = "xpd", bb.XPF = "xpf", bb.XPT = "xpt", bb.XSU = "xsu", bb.XTS = "xts", bb.XUA = "xua", bb.YER = "yer", bb.ZAR = "zar", bb.ZMW = "zmw", bb.ZWL = "zwl"
    }(Za || (Za = {}));
    Za.AED, Za.AFN, Za.ALL, Za.AMD, Za.ANG, Za.AOA, Za.ARS, Za.AUD, Za.AWG, Za.AZN, Za.BAM, Za.BBD, Za.BDT, Za.BGN, Za.BHD, Za.BIF, Za.BMD, Za.BND, Za.BOB, Za.BOV, Za.BRL, Za.BSD, Za.BTN, Za.BWP, Za.BYR, Za.BYN, Za.BZD, Za.CAD, Za.CDF, Za.CHE, Za.CHF, Za.CHW, Za.CLF, Za.CLP, Za.CNY, Za.COP, Za.COU, Za.CRC, Za.CUC, Za.CUP, Za.CVE, Za.CZK, Za.DJF, Za.DKK, Za.DOP, Za.DZD, Za.EGP, Za.ERN, Za.ETB, Za.EUR, Za.FJD, Za.FKP, Za.GBP, Za.GEL, Za.GHS, Za.GIP, Za.GMD, Za.GNF, Za.GTQ, Za.GYD, Za.HKD, Za.HNL, Za.HRK, Za.HTG, Za.HUF, Za.IDR, Za.ILS, Za.INR, Za.IQD, Za.IRR, Za.ISK, Za.JMD, Za.JOD, Za.JPY, Za.KES, Za.KGS, Za.KHR, Za.KMF, Za.KPW, Za.KRW, Za.KWD, Za.KYD, Za.KZT, Za.LAK, Za.LBP, Za.LKR, Za.LRD, Za.LSL, Za.LTL, Za.LVL, Za.LYD, Za.MAD, Za.MDL, Za.MGA, Za.MKD, Za.MMK, Za.MNT, Za.MOP, Za.MRO, Za.MUR, Za.MVR, Za.MWK, Za.MXN, Za.MXV, Za.MYR, Za.MZN, Za.NAD, Za.NGN, Za.NIO, Za.NOK, Za.NPR, Za.NZD, Za.OMR, Za.PAB, Za.PEN, Za.PGK, Za.PHP, Za.PKR, Za.PLN, Za.PYG, Za.QAR, Za.RON, Za.RSD, Za.RUB, Za.RWF, Za.SAR, Za.SBD, Za.SCR, Za.SDG, Za.SEK, Za.SGD, Za.SHP, Za.SLL, Za.SOS, Za.SRD, Za.SSP, Za.STD, Za.SVC, Za.SYP, Za.SZL, Za.THB, Za.TJS, Za.TMT, Za.TND, Za.TOP, Za.TRY, Za.TTD, Za.TWD, Za.TZS, Za.UAH, Za.UGX, Za.USD, Za.USN, Za.USS, Za.UYI, Za.UYU, Za.UZS, Za.VEF, Za.VND, Za.VUV, Za.WST, Za.XAF, Za.XAG, Za.XAU, Za.XBA, Za.XBB, Za.XBC, Za.XBD, Za.XCD, Za.XDR, Za.XFU, Za.XOF, Za.XPD, Za.XPF, Za.XPT, Za.XSU, Za.XTS, Za.XUA, Za.YER, Za.ZAR, Za.ZMW, Za.ZWL;
    var za = {
      exports: {}
    };
    ! function(bb, cb) {
      var sb = "__lodash_hash_undefined__",
        kb = 9007199254740991,
        ab = "[object Arguments]",
        Tb = "[object Array]",
        Ub = "[object Boolean]",
        Ib = "[object Date]",
        Hb = "[object Error]",
        fb = "[object Function]",
        Mb = "[object Map]",
        Xb = "[object Number]",
        nb = "[object Object]",
        mb = "[object Promise]",
        lb = "[object RegExp]",
        Qb = "[object Set]",
        eb = "[object String]",
        Cb = "[object Symbol]",
        Nb = "[object WeakMap]",
        Vb = "[object ArrayBuffer]",
        Lb = "[object DataView]",
        ub = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        Yb = /^\w*$/,
        hb = /^\./,
        Jb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        gb = /\\(\\)?/g,
        Bb = /^\[object .+?Constructor\]$/,
        tb = /^(?:0|[1-9]\d*)$/,
        yb = {};
      yb["[object Float32Array]"] = yb["[object Float64Array]"] = yb["[object Int8Array]"] = yb["[object Int16Array]"] = yb["[object Int32Array]"] = yb["[object Uint8Array]"] = yb["[object Uint8ClampedArray]"] = yb["[object Uint16Array]"] = yb["[object Uint32Array]"] = !0, yb[ab] = yb[Tb] = yb[Vb] = yb[Ub] = yb[Lb] = yb[Ib] = yb[Hb] = yb[fb] = yb[Mb] = yb[Xb] = yb[nb] = yb[lb] = yb[Qb] = yb[eb] = yb[Nb] = !1;
      var Pb = "object" == typeof Wb && Wb && Wb.Object === Object && Wb,
        Db = "object" == typeof self && self && self.Object === Object && self,
        Eb = Pb || Db || Function("return this")(),
        ib = cb && !cb.nodeType && cb,
        Ob = ib && bb && !bb.nodeType && bb,
        Gb = Ob && Ob.exports === ib && Pb.process,
        Kb = function() {
          try {
            return Gb && Gb.binding("util")
          } catch (bb) {}
        }(),
        Zb = Kb && Kb.isTypedArray;

      function zb(bb, cb) {
        for (var sb = -1, kb = bb ? bb.length : 0; ++sb < kb && !1 !== cb(bb[sb], sb, bb););
        return bb
      }

      function qb(bb, cb) {
        for (var sb = -1, kb = bb ? bb.length : 0; ++sb < kb;)
          if (cb(bb[sb], sb, bb)) return !0;
        return !1
      }

      function db(bb) {
        var cb = !1;
        if (null != bb && "function" != typeof bb.toString) try {
          cb = !!(bb + "")
        } catch (sb) {}
        return cb
      }

      function Ab(bb) {
        var cb = -1,
          sb = Array(bb.size);
        return bb.forEach((function(bb, kb) {
          sb[++cb] = [kb, bb]
        })), sb
      }

      function wb(bb, cb) {
        return function(sb) {
          return bb(cb(sb))
        }
      }

      function rb(bb) {
        var cb = -1,
          sb = Array(bb.size);
        return bb.forEach((function(bb) {
          sb[++cb] = bb
        })), sb
      }
      var ob = Array.prototype,
        Sb = Function.prototype,
        Rb = Object.prototype,
        vb = Eb["__core-js_shared__"],
        Fb = function() {
          var bb = /[^.]+$/.exec(vb && vb.keys && vb.keys.IE_PROTO || "");
          return bb ? "Symbol(src)_1." + bb : ""
        }(),
        xb = Sb.toString,
        jb = Rb.hasOwnProperty,
        pb = Rb.toString,
        bc = RegExp("^" + xb.call(jb).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        cc = Eb.Symbol,
        sc = Eb.Uint8Array,
        kc = wb(Object.getPrototypeOf, Object),
        Wc = Object.create,
        ac = Rb.propertyIsEnumerable,
        Tc = ob.splice,
        Uc = wb(Object.keys, Object),
        Ic = Ac(Eb, "DataView"),
        Hc = Ac(Eb, "Map"),
        fc = Ac(Eb, "Promise"),
        Mc = Ac(Eb, "Set"),
        Xc = Ac(Eb, "WeakMap"),
        nc = Ac(Object, "create"),
        mc = xc(Ic),
        lc = xc(Hc),
        Qc = xc(fc),
        ec = xc(Mc),
        Cc = xc(Xc),
        Nc = cc ? cc.prototype : void 0,
        Vc = Nc ? Nc.valueOf : void 0,
        Lc = Nc ? Nc.toString : void 0;

      function uc(bb) {
        var cb = -1,
          sb = bb ? bb.length : 0;
        for (this.clear(); ++cb < sb;) {
          var kb = bb[cb];
          this.set(kb[0], kb[1])
        }
      }

      function Yc(bb) {
        var cb = -1,
          sb = bb ? bb.length : 0;
        for (this.clear(); ++cb < sb;) {
          var kb = bb[cb];
          this.set(kb[0], kb[1])
        }
      }

      function hc(bb) {
        var cb = -1,
          sb = bb ? bb.length : 0;
        for (this.clear(); ++cb < sb;) {
          var kb = bb[cb];
          this.set(kb[0], kb[1])
        }
      }

      function Jc(bb) {
        var cb = -1,
          sb = bb ? bb.length : 0;
        for (this.__data__ = new hc; ++cb < sb;) this.add(bb[cb])
      }

      function gc(bb) {
        this.__data__ = new Yc(bb)
      }

      function Bc(bb, cb) {
        var sb = cs(bb) || bs(bb) ? function(bb, cb) {
            for (var sb = -1, kb = Array(bb); ++sb < bb;) kb[sb] = cb(sb);
            return kb
          }(bb.length, String) : [],
          kb = sb.length,
          Wb = !!kb;
        for (var ab in bb) !cb && !jb.call(bb, ab) || Wb && ("length" == ab || rc(ab, kb)) || sb.push(ab);
        return sb
      }

      function tc(bb, cb) {
        for (var sb = bb.length; sb--;)
          if (pc(bb[sb][0], cb)) return sb;
        return -1
      }
      uc.prototype.clear = function() {
        this.__data__ = nc ? nc(null) : {}
      }, uc.prototype.delete = function(bb) {
        return this.has(bb) && delete this.__data__[bb]
      }, uc.prototype.get = function(bb) {
        var cb = this.__data__;
        if (nc) {
          var kb = cb[bb];
          return kb === sb ? void 0 : kb
        }
        return jb.call(cb, bb) ? cb[bb] : void 0
      }, uc.prototype.has = function(bb) {
        var cb = this.__data__;
        return nc ? void 0 !== cb[bb] : jb.call(cb, bb)
      }, uc.prototype.set = function(bb, cb) {
        return this.__data__[bb] = nc && void 0 === cb ? sb : cb, this
      }, Yc.prototype.clear = function() {
        this.__data__ = []
      }, Yc.prototype.delete = function(bb) {
        var cb = this.__data__,
          sb = tc(cb, bb);
        return !(sb < 0) && (sb == cb.length - 1 ? cb.pop() : Tc.call(cb, sb, 1), !0)
      }, Yc.prototype.get = function(bb) {
        var cb = this.__data__,
          sb = tc(cb, bb);
        return sb < 0 ? void 0 : cb[sb][1]
      }, Yc.prototype.has = function(bb) {
        return tc(this.__data__, bb) > -1
      }, Yc.prototype.set = function(bb, cb) {
        var sb = this.__data__,
          kb = tc(sb, bb);
        return kb < 0 ? sb.push([bb, cb]) : sb[kb][1] = cb, this
      }, hc.prototype.clear = function() {
        this.__data__ = {
          hash: new uc,
          map: new(Hc || Yc),
          string: new uc
        }
      }, hc.prototype.delete = function(bb) {
        return dc(this, bb).delete(bb)
      }, hc.prototype.get = function(bb) {
        return dc(this, bb).get(bb)
      }, hc.prototype.has = function(bb) {
        return dc(this, bb).has(bb)
      }, hc.prototype.set = function(bb, cb) {
        return dc(this, bb).set(bb, cb), this
      }, Jc.prototype.add = Jc.prototype.push = function(bb) {
        return this.__data__.set(bb, sb), this
      }, Jc.prototype.has = function(bb) {
        return this.__data__.has(bb)
      }, gc.prototype.clear = function() {
        this.__data__ = new Yc
      }, gc.prototype.delete = function(bb) {
        return this.__data__.delete(bb)
      }, gc.prototype.get = function(bb) {
        return this.__data__.get(bb)
      }, gc.prototype.has = function(bb) {
        return this.__data__.has(bb)
      }, gc.prototype.set = function(bb, cb) {
        var sb = this.__data__;
        if (sb instanceof Yc) {
          var kb = sb.__data__;
          if (!Hc || kb.length < 199) return kb.push([bb, cb]), this;
          sb = this.__data__ = new hc(kb)
        }
        return sb.set(bb, cb), this
      };
      var yc, Pc = function(bb, cb, sb) {
        for (var kb = -1, Wb = Object(bb), ab = sb(bb), Tb = ab.length; Tb--;) {
          var Ub = ab[yc ? Tb : ++kb];
          if (!1 === cb(Wb[Ub], Ub, Wb)) break
        }
        return bb
      };

      function Dc(bb, cb) {
        return bb && Pc(bb, cb, fs)
      }

      function Ec(bb, cb) {
        for (var sb = 0, kb = (cb = oc(cb, bb) ? [cb] : zc(cb)).length; null != bb && sb < kb;) bb = bb[Fc(cb[sb++])];
        return sb && sb == kb ? bb : void 0
      }

      function ic(bb, cb) {
        return null != bb && cb in Object(bb)
      }

      function Oc(bb, cb, sb, kb, Wb) {
        return bb === cb || (null == bb || null == cb || !as(bb) && !Ts(cb) ? bb !== bb && cb !== cb : function(bb, cb, sb, kb, Wb, fb) {
          var mb = cs(bb),
            Nb = cs(cb),
            ub = Tb,
            Yb = Tb;
          mb || (ub = (ub = wc(bb)) == ab ? nb : ub);
          Nb || (Yb = (Yb = wc(cb)) == ab ? nb : Yb);
          var hb = ub == nb && !db(bb),
            Jb = Yb == nb && !db(cb),
            gb = ub == Yb;
          if (gb && !hb) return fb || (fb = new gc), mb || Hs(bb) ? qc(bb, cb, sb, kb, Wb, fb) : function(bb, cb, sb, kb, Wb, ab, Tb) {
            switch (sb) {
              case Lb:
                if (bb.byteLength != cb.byteLength || bb.byteOffset != cb.byteOffset) return !1;
                bb = bb.buffer, cb = cb.buffer;
              case Vb:
                return !(bb.byteLength != cb.byteLength || !kb(new sc(bb), new sc(cb)));
              case Ub:
              case Ib:
              case Xb:
                return pc(+bb, +cb);
              case Hb:
                return bb.name == cb.name && bb.message == cb.message;
              case lb:
              case eb:
                return bb == cb + "";
              case Mb:
                var fb = Ab;
              case Qb:
                var nb = 2 & ab;
                if (fb || (fb = rb), bb.size != cb.size && !nb) return !1;
                var mb = Tb.get(bb);
                if (mb) return mb == cb;
                ab |= 1, Tb.set(bb, cb);
                var Nb = qc(fb(bb), fb(cb), kb, Wb, ab, Tb);
                return Tb.delete(bb), Nb;
              case Cb:
                if (Vc) return Vc.call(bb) == Vc.call(cb)
            }
            return !1
          }(bb, cb, ub, sb, kb, Wb, fb);
          if (!(2 & Wb)) {
            var Bb = hb && jb.call(bb, "__wrapped__"),
              tb = Jb && jb.call(cb, "__wrapped__");
            if (Bb || tb) {
              var yb = Bb ? bb.value() : bb,
                Pb = tb ? cb.value() : cb;
              return fb || (fb = new gc), sb(yb, Pb, kb, Wb, fb)
            }
          }
          if (!gb) return !1;
          return fb || (fb = new gc),
            function(bb, cb, sb, kb, Wb, ab) {
              var Tb = 2 & Wb,
                Ub = fs(bb),
                Ib = Ub.length,
                Hb = fs(cb),
                fb = Hb.length;
              if (Ib != fb && !Tb) return !1;
              var Mb = Ib;
              for (; Mb--;) {
                var Xb = Ub[Mb];
                if (!(Tb ? Xb in cb : jb.call(cb, Xb))) return !1
              }
              var nb = ab.get(bb);
              if (nb && ab.get(cb)) return nb == cb;
              var mb = !0;
              ab.set(bb, cb), ab.set(cb, bb);
              var lb = Tb;
              for (; ++Mb < Ib;) {
                var Qb = bb[Xb = Ub[Mb]],
                  eb = cb[Xb];
                if (kb) var Cb = Tb ? kb(eb, Qb, Xb, cb, bb, ab) : kb(Qb, eb, Xb, bb, cb, ab);
                if (!(void 0 === Cb ? Qb === eb || sb(Qb, eb, kb, Wb, ab) : Cb)) {
                  mb = !1;
                  break
                }
                lb || (lb = "constructor" == Xb)
              }
              if (mb && !lb) {
                var Nb = bb.constructor,
                  Vb = cb.constructor;
                Nb == Vb || !("constructor" in bb) || !("constructor" in cb) || "function" == typeof Nb && Nb instanceof Nb && "function" == typeof Vb && Vb instanceof Vb || (mb = !1)
              }
              return ab.delete(bb), ab.delete(cb), mb
            }(bb, cb, sb, kb, Wb, fb)
        }(bb, cb, Oc, sb, kb, Wb))
      }

      function Gc(bb) {
        return !(!as(bb) || (cb = bb, Fb && Fb in cb)) && (ks(bb) || db(bb) ? bc : Bb).test(xc(bb));
        var cb
      }

      function Kc(bb) {
        return "function" == typeof bb ? bb : null == bb ? Ms : "object" == typeof bb ? cs(bb) ? function(bb, cb) {
          if (oc(bb) && Sc(cb)) return Rc(Fc(bb), cb);
          return function(sb) {
            var kb = function(bb, cb, sb) {
              var kb = null == bb ? void 0 : Ec(bb, cb);
              return void 0 === kb ? sb : kb
            }(sb, bb);
            return void 0 === kb && kb === cb ? function(bb, cb) {
              return null != bb && function(bb, cb, sb) {
                cb = oc(cb, bb) ? [cb] : zc(cb);
                var kb, Wb = -1,
                  ab = cb.length;
                for (; ++Wb < ab;) {
                  var Tb = Fc(cb[Wb]);
                  if (!(kb = null != bb && sb(bb, Tb))) break;
                  bb = bb[Tb]
                }
                if (kb) return kb;
                ab = bb ? bb.length : 0;
                return !!ab && Ws(ab) && rc(Tb, ab) && (cs(bb) || bs(bb))
              }(bb, cb, ic)
            }(sb, bb) : Oc(cb, kb, void 0, 3)
          }
        }(bb[0], bb[1]) : function(bb) {
          var cb = function(bb) {
            var cb = fs(bb),
              sb = cb.length;
            for (; sb--;) {
              var kb = cb[sb],
                Wb = bb[kb];
              cb[sb] = [kb, Wb, Sc(Wb)]
            }
            return cb
          }(bb);
          if (1 == cb.length && cb[0][2]) return Rc(cb[0][0], cb[0][1]);
          return function(sb) {
            return sb === bb || function(bb, cb, sb, kb) {
              var Wb = sb.length,
                ab = Wb,
                Tb = !kb;
              if (null == bb) return !ab;
              for (bb = Object(bb); Wb--;) {
                var Ub = sb[Wb];
                if (Tb && Ub[2] ? Ub[1] !== bb[Ub[0]] : !(Ub[0] in bb)) return !1
              }
              for (; ++Wb < ab;) {
                var Ib = (Ub = sb[Wb])[0],
                  Hb = bb[Ib],
                  fb = Ub[1];
                if (Tb && Ub[2]) {
                  if (void 0 === Hb && !(Ib in bb)) return !1
                } else {
                  var Mb = new gc;
                  if (kb) var Xb = kb(Hb, fb, Ib, bb, cb, Mb);
                  if (!(void 0 === Xb ? Oc(fb, Hb, kb, 3, Mb) : Xb)) return !1
                }
              }
              return !0
            }(sb, bb, cb)
          }
        }(bb) : function(bb) {
          return oc(bb) ? (cb = Fc(bb), function(bb) {
            return null == bb ? void 0 : bb[cb]
          }) : function(bb) {
            return function(cb) {
              return Ec(cb, bb)
            }
          }(bb);
          var cb
        }(bb)
      }

      function Zc(bb) {
        if (! function(bb) {
            var cb = bb && bb.constructor,
              sb = "function" == typeof cb && cb.prototype || Rb;
            return bb === sb
          }(bb)) return Uc(bb);
        var cb = [];
        for (var sb in Object(bb)) jb.call(bb, sb) && "constructor" != sb && cb.push(sb);
        return cb
      }

      function zc(bb) {
        return cs(bb) ? bb : vc(bb)
      }

      function qc(bb, cb, sb, kb, Wb, ab) {
        var Tb = 2 & Wb,
          Ub = bb.length,
          Ib = cb.length;
        if (Ub != Ib && !(Tb && Ib > Ub)) return !1;
        var Hb = ab.get(bb);
        if (Hb && ab.get(cb)) return Hb == cb;
        var fb = -1,
          Mb = !0,
          Xb = 1 & Wb ? new Jc : void 0;
        for (ab.set(bb, cb), ab.set(cb, bb); ++fb < Ub;) {
          var nb = bb[fb],
            mb = cb[fb];
          if (kb) var lb = Tb ? kb(mb, nb, fb, cb, bb, ab) : kb(nb, mb, fb, bb, cb, ab);
          if (void 0 !== lb) {
            if (lb) continue;
            Mb = !1;
            break
          }
          if (Xb) {
            if (!qb(cb, (function(bb, cb) {
                if (!Xb.has(cb) && (nb === bb || sb(nb, bb, kb, Wb, ab))) return Xb.add(cb)
              }))) {
              Mb = !1;
              break
            }
          } else if (nb !== mb && !sb(nb, mb, kb, Wb, ab)) {
            Mb = !1;
            break
          }
        }
        return ab.delete(bb), ab.delete(cb), Mb
      }

      function dc(bb, cb) {
        var sb = bb.__data__;
        return function(bb) {
          var cb = typeof bb;
          return "string" == cb || "number" == cb || "symbol" == cb || "boolean" == cb ? "__proto__" !== bb : null === bb
        }(cb) ? sb["string" == typeof cb ? "string" : "hash"] : sb.map
      }

      function Ac(bb, cb) {
        var sb = function(bb, cb) {
          return null == bb ? void 0 : bb[cb]
        }(bb, cb);
        return Gc(sb) ? sb : void 0
      }
      var wc = function(bb) {
        return pb.call(bb)
      };

      function rc(bb, cb) {
        return !!(cb = null == cb ? kb : cb) && ("number" == typeof bb || tb.test(bb)) && bb > -1 && bb % 1 == 0 && bb < cb
      }

      function oc(bb, cb) {
        if (cs(bb)) return !1;
        var sb = typeof bb;
        return !("number" != sb && "symbol" != sb && "boolean" != sb && null != bb && !Us(bb)) || (Yb.test(bb) || !ub.test(bb) || null != cb && bb in Object(cb))
      }

      function Sc(bb) {
        return bb === bb && !as(bb)
      }

      function Rc(bb, cb) {
        return function(sb) {
          return null != sb && (sb[bb] === cb && (void 0 !== cb || bb in Object(sb)))
        }
      }(Ic && wc(new Ic(new ArrayBuffer(1))) != Lb || Hc && wc(new Hc) != Mb || fc && wc(fc.resolve()) != mb || Mc && wc(new Mc) != Qb || Xc && wc(new Xc) != Nb) && (wc = function(bb) {
        var cb = pb.call(bb),
          sb = cb == nb ? bb.constructor : void 0,
          kb = sb ? xc(sb) : void 0;
        if (kb) switch (kb) {
          case mc:
            return Lb;
          case lc:
            return Mb;
          case Qc:
            return mb;
          case ec:
            return Qb;
          case Cc:
            return Nb
        }
        return cb
      });
      var vc = jc((function(bb) {
        var cb;
        bb = null == (cb = bb) ? "" : function(bb) {
          if ("string" == typeof bb) return bb;
          if (Us(bb)) return Lc ? Lc.call(bb) : "";
          var cb = bb + "";
          return "0" == cb && 1 / bb == -1 / 0 ? "-0" : cb
        }(cb);
        var sb = [];
        return hb.test(bb) && sb.push(""), bb.replace(Jb, (function(bb, cb, kb, Wb) {
          sb.push(kb ? Wb.replace(gb, "$1") : cb || bb)
        })), sb
      }));

      function Fc(bb) {
        if ("string" == typeof bb || Us(bb)) return bb;
        var cb = bb + "";
        return "0" == cb && 1 / bb == -1 / 0 ? "-0" : cb
      }

      function xc(bb) {
        if (null != bb) {
          try {
            return xb.call(bb)
          } catch (cb) {}
          try {
            return bb + ""
          } catch (cb) {}
        }
        return ""
      }

      function jc(bb, cb) {
        if ("function" != typeof bb || cb && "function" != typeof cb) throw new TypeError("Expected a function");
        var sb = function() {
          var kb = arguments,
            Wb = cb ? cb.apply(this, kb) : kb[0],
            ab = sb.cache;
          if (ab.has(Wb)) return ab.get(Wb);
          var Tb = bb.apply(this, kb);
          return sb.cache = ab.set(Wb, Tb), Tb
        };
        return sb.cache = new(jc.Cache || hc), sb
      }

      function pc(bb, cb) {
        return bb === cb || bb !== bb && cb !== cb
      }

      function bs(bb) {
        return function(bb) {
          return Ts(bb) && ss(bb)
        }(bb) && jb.call(bb, "callee") && (!ac.call(bb, "callee") || pb.call(bb) == ab)
      }
      jc.Cache = hc;
      var cs = Array.isArray;

      function ss(bb) {
        return null != bb && Ws(bb.length) && !ks(bb)
      }

      function ks(bb) {
        var cb = as(bb) ? pb.call(bb) : "";
        return cb == fb || "[object GeneratorFunction]" == cb
      }

      function Ws(bb) {
        return "number" == typeof bb && bb > -1 && bb % 1 == 0 && bb <= kb
      }

      function as(bb) {
        var cb = typeof bb;
        return !!bb && ("object" == cb || "function" == cb)
      }

      function Ts(bb) {
        return !!bb && "object" == typeof bb
      }

      function Us(bb) {
        return "symbol" == typeof bb || Ts(bb) && pb.call(bb) == Cb
      }
      var Is, Hs = Zb ? (Is = Zb, function(bb) {
        return Is(bb)
      }) : function(bb) {
        return Ts(bb) && Ws(bb.length) && !!yb[pb.call(bb)]
      };

      function fs(bb) {
        return ss(bb) ? Bc(bb) : Zc(bb)
      }

      function Ms(bb) {
        return bb
      }
      bb.exports = function(bb, cb, sb) {
        var kb, Wb = cs(bb) || Hs(bb);
        if (cb = Kc(cb), null == sb)
          if (Wb || as(bb)) {
            var ab = bb.constructor;
            sb = Wb ? cs(bb) ? new ab : [] : ks(ab) ? as(kb = kc(bb)) ? Wc(kb) : {} : {}
          } else sb = {};
        return (Wb ? zb : Dc)(bb, (function(bb, kb, Wb) {
          return cb(sb, bb, kb, Wb)
        })), sb
      }
    }(za, za.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      i: qa
    } = kb
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);