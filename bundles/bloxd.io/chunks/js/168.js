export const id = 168;
export const ids = [168];
export const modules = {
  7909: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pp,
      g: () => JM
    });
    var eb = {};
    Mb.r(eb), Mb.d(eb, {
      e: () => He,
      k: () => ge,
      h: () => Ve,
      o: () => yM,
      s: () => nM,
      w: () => ce,
      y: () => kM,
      C: () => fe,
      D: () => xe,
      H: () => Ze,
      K: () => oM,
      O: () => Ke,
      Q: () => De,
      U: () => Ye,
      Y: () => TM,
      X: () => Me,
      $: () => Re,
      db: () => re
    });
    var Hb = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function pb(bb) {
      return bb && bb.__esModule && Object.prototype.hasOwnProperty.call(bb, "default") ? bb.default : bb
    }
    var Vb = {
      exports: {}
    };
    ! function(bb) {
      var wb = Object.prototype.hasOwnProperty,
        Mb = "~";

      function eb() {}

      function Hb(bb, wb, Mb) {
        this.kI = bb, this.context = wb, this.once = Mb || !1
      }

      function pb(bb, wb, eb, pb, Vb) {
        if ("function" !== typeof eb) throw new TypeError("The listener must be a function");
        var gb = new Hb(eb, pb || bb, Vb),
          lb = Mb ? Mb + wb : wb;
        return bb._events[lb] ? bb._events[lb].kI ? bb._events[lb] = [bb._events[lb], gb] : bb._events[lb].push(gb) : (bb._events[lb] = gb, bb._eventsCount++), bb
      }

      function Vb(bb, wb) {
        0 === --bb._eventsCount ? bb._events = new eb : delete bb._events[wb]
      }

      function gb() {
        this._events = new eb, this._eventsCount = 0
      }
      Object.create && (eb.prototype = Object.create(null), (new eb).__proto__ || (Mb = !1)), gb.prototype.eventNames = function() {
        var bb, eb, Hb = [];
        if (0 === this._eventsCount) return Hb;
        for (eb in bb = this._events) wb.call(bb, eb) && Hb.push(Mb ? eb.slice(1) : eb);
        return Object.getOwnPropertySymbols ? Hb.concat(Object.getOwnPropertySymbols(bb)) : Hb
      }, gb.prototype.listeners = function(bb) {
        var wb = Mb ? Mb + bb : bb,
          eb = this._events[wb];
        if (!eb) return [];
        if (eb.kI) return [eb.kI];
        for (var Hb = 0, pb = eb.length, Vb = new Array(pb); Hb < pb; Hb++) Vb[Hb] = eb[Hb].kI;
        return Vb
      }, gb.prototype.listenerCount = function(bb) {
        var wb = Mb ? Mb + bb : bb,
          eb = this._events[wb];
        return eb ? eb.kI ? 1 : eb.length : 0
      }, gb.prototype.emit = function(bb, wb, eb, Hb, pb, Vb) {
        var gb = Mb ? Mb + bb : bb;
        if (!this._events[gb]) return !1;
        var lb, Lb, Ib = this._events[gb],
          Ob = arguments.length;
        if (Ib.kI) {
          switch (Ib.once && this.removeListener(bb, Ib.kI, void 0, !0), Ob) {
            case 1:
              return Ib.kI.call(Ib.context), !0;
            case 2:
              return Ib.kI.call(Ib.context, wb), !0;
            case 3:
              return Ib.kI.call(Ib.context, wb, eb), !0;
            case 4:
              return Ib.kI.call(Ib.context, wb, eb, Hb), !0;
            case 5:
              return Ib.kI.call(Ib.context, wb, eb, Hb, pb), !0;
            case 6:
              return Ib.kI.call(Ib.context, wb, eb, Hb, pb, Vb), !0
          }
          for (Lb = 1, lb = new Array(Ob - 1); Lb < Ob; Lb++) lb[Lb - 1] = arguments[Lb];
          Ib.kI.apply(Ib.context, lb)
        } else {
          var Ub, tb = Ib.length;
          for (Lb = 0; Lb < tb; Lb++) switch (Ib[Lb].once && this.removeListener(bb, Ib[Lb].kI, void 0, !0), Ob) {
            case 1:
              Ib[Lb].kI.call(Ib[Lb].context);
              break;
            case 2:
              Ib[Lb].kI.call(Ib[Lb].context, wb);
              break;
            case 3:
              Ib[Lb].kI.call(Ib[Lb].context, wb, eb);
              break;
            case 4:
              Ib[Lb].kI.call(Ib[Lb].context, wb, eb, Hb);
              break;
            default:
              if (!lb)
                for (Ub = 1, lb = new Array(Ob - 1); Ub < Ob; Ub++) lb[Ub - 1] = arguments[Ub];
              Ib[Lb].kI.apply(Ib[Lb].context, lb)
          }
        }
        return !0
      }, gb.prototype.on = function(bb, wb, Mb) {
        return pb(this, bb, wb, Mb, !1)
      }, gb.prototype.once = function(bb, wb, Mb) {
        return pb(this, bb, wb, Mb, !0)
      }, gb.prototype.removeListener = function(bb, wb, eb, Hb) {
        var pb = Mb ? Mb + bb : bb;
        if (!this._events[pb]) return this;
        if (!wb) return Vb(this, pb), this;
        var gb = this._events[pb];
        if (gb.kI) gb.kI !== wb || Hb && !gb.once || eb && gb.context !== eb || Vb(this, pb);
        else {
          for (var lb = 0, Lb = [], Ib = gb.length; lb < Ib; lb++)(gb[lb].kI !== wb || Hb && !gb[lb].once || eb && gb[lb].context !== eb) && Lb.push(gb[lb]);
          Lb.length ? this._events[pb] = 1 === Lb.length ? Lb[0] : Lb : Vb(this, pb)
        }
        return this
      }, gb.prototype.nB = function(bb) {
        var wb;
        return bb ? (wb = Mb ? Mb + bb : bb, this._events[wb] && Vb(this, wb)) : (this._events = new eb, this._eventsCount = 0), this
      }, gb.prototype.off = gb.prototype.removeListener, gb.prototype.addListener = gb.prototype.on, gb.prefixed = Mb, gb.EventEmitter = gb, bb.exports = gb
    }(Vb);
    var gb, lb, Lb = pb(Vb.exports);
    ! function(bb) {
      bb.assertEqual = bb => bb, bb.assertIs = function(bb) {}, bb.assertNever = function(bb) {
        throw new Error
      }, bb.arrayToEnum = bb => {
        const wb = {};
        for (const Mb of bb) wb[Mb] = Mb;
        return wb
      }, bb.getValidEnumValues = wb => {
        const Mb = bb.objectKeys(wb).filter((bb => "number" !== typeof wb[wb[bb]])),
          eb = {};
        for (const bb of Mb) eb[bb] = wb[bb];
        return bb.objectValues(eb)
      }, bb.objectValues = wb => bb.objectKeys(wb).map((function(bb) {
        return wb[bb]
      })), bb.objectKeys = "function" === typeof Object.keys ? bb => Object.keys(bb) : bb => {
        const wb = [];
        for (const Mb in bb) Object.prototype.hasOwnProperty.call(bb, Mb) && wb.push(Mb);
        return wb
      }, bb.find = (bb, wb) => {
        for (const Mb of bb)
          if (wb(Mb)) return Mb
      }, bb.isInteger = "function" === typeof Number.isInteger ? bb => Number.isInteger(bb) : bb => "number" === typeof bb && isFinite(bb) && Math.floor(bb) === bb, bb.joinValues = function(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return bb.map((bb => "string" === typeof bb ? `'${bb}'` : bb)).join(wb)
      }, bb.jsonStringifyReplacer = (bb, wb) => "bigint" === typeof wb ? wb.toString() : wb
    }(gb || (gb = {})),
    function(bb) {
      bb.mergeShapes = (bb, wb) => ({
        ...bb,
        ...wb
      })
    }(lb || (lb = {}));
    const Ib = gb.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      Ob = bb => {
        switch (typeof bb) {
          case "undefined":
            return Ib.undefined;
          case "string":
            return Ib.string;
          case "number":
            return isNaN(bb) ? Ib.nan : Ib.number;
          case "boolean":
            return Ib.boolean;
          case "function":
            return Ib.function;
          case "bigint":
            return Ib.bigint;
          case "symbol":
            return Ib.symbol;
          case "object":
            return Array.isArray(bb) ? Ib.array : null === bb ? Ib.null : bb.then && "function" === typeof bb.then && bb.catch && "function" === typeof bb.catch ? Ib.promise : "undefined" !== typeof Map && bb instanceof Map ? Ib.map : "undefined" !== typeof Set && bb instanceof Set ? Ib.set : "undefined" !== typeof Date && bb instanceof Date ? Ib.date : Ib.object;
          default:
            return Ib.unknown
        }
      },
      Ub = gb.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class tb extends Error {
      constructor(bb) {
        var wb;
        super(), wb = this, this.issues = [], this.addIssue = bb => {
          this.issues = [...this.issues, bb]
        }, this.addIssues = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          wb.issues = [...wb.issues, ...bb]
        };
        const Mb = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, Mb) : this.__proto__ = Mb, this.name = "ZodError", this.issues = bb
      }
      get errors() {
        return this.issues
      }
      format(bb) {
        const wb = bb || function(bb) {
            return bb.message
          },
          Mb = {
            _errors: []
          },
          eb = bb => {
            for (const Hb of bb.issues)
              if ("invalid_union" === Hb.code) Hb.unionErrors.map(eb);
              else if ("invalid_return_type" === Hb.code) eb(Hb.returnTypeError);
            else if ("invalid_arguments" === Hb.code) eb(Hb.argumentsError);
            else if (0 === Hb.path.length) Mb._errors.push(wb(Hb));
            else {
              let bb = Mb,
                eb = 0;
              for (; eb < Hb.path.length;) {
                const Mb = Hb.path[eb];
                eb === Hb.path.length - 1 ? (bb[Mb] = bb[Mb] || {
                  _errors: []
                }, bb[Mb]._errors.push(wb(Hb))) : bb[Mb] = bb[Mb] || {
                  _errors: []
                }, bb = bb[Mb], eb++
              }
            }
          };
        return eb(this), Mb
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, gb.jsonStringifyReplacer, 2)
      }
      get IO() {
        return 0 === this.issues.length
      }
      flatten() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bb => bb.message;
        const wb = {},
          Mb = [];
        for (const eb of this.issues) eb.path.length > 0 ? (wb[eb.path[0]] = wb[eb.path[0]] || [], wb[eb.path[0]].push(bb(eb))) : Mb.push(bb(eb));
        return {
          formErrors: Mb,
          fieldErrors: wb
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    tb.create = bb => new tb(bb);
    const Cb = (bb, wb) => {
      let Mb;
      switch (bb.code) {
        case Ub.invalid_type:
          Mb = bb.received === Ib.undefined ? "Required" : `Expected ${bb.expected}, received ${bb.received}`;
          break;
        case Ub.invalid_literal:
          Mb = `Invalid literal value, expected ${JSON.stringify(bb.expected,gb.jsonStringifyReplacer)}`;
          break;
        case Ub.unrecognized_keys:
          Mb = `Unrecognized key(s) in object: ${gb.joinValues(bb.keys,", ")}`;
          break;
        case Ub.invalid_union:
          Mb = "Invalid input";
          break;
        case Ub.invalid_union_discriminator:
          Mb = `Invalid discriminator value. Expected ${gb.joinValues(bb.options)}`;
          break;
        case Ub.invalid_enum_value:
          Mb = `Invalid enum value. Expected ${gb.joinValues(bb.options)}, received '${bb.received}'`;
          break;
        case Ub.invalid_arguments:
          Mb = "Invalid function arguments";
          break;
        case Ub.invalid_return_type:
          Mb = "Invalid function return type";
          break;
        case Ub.invalid_date:
          Mb = "Invalid date";
          break;
        case Ub.invalid_string:
          "object" === typeof bb.validation ? "includes" in bb.validation ? (Mb = `Invalid input: must include "${bb.validation.includes}"`, "number" === typeof bb.validation.position && (Mb = `${Mb} at one or more positions greater than or equal to ${bb.validation.position}`)) : "startsWith" in bb.validation ? Mb = `Invalid input: must start with "${bb.validation.startsWith}"` : "endsWith" in bb.validation ? Mb = `Invalid input: must end with "${bb.validation.endsWith}"` : gb.assertNever(bb.validation) : Mb = "regex" !== bb.validation ? `Invalid ${bb.validation}` : "Invalid";
          break;
        case Ub.too_small:
          Mb = "array" === bb.type ? `Array must contain ${bb.exact?"exactly":bb.inclusive?"at least":"more than"} ${bb.minimum} element(s)` : "string" === bb.type ? `String must contain ${bb.exact?"exactly":bb.inclusive?"at least":"over"} ${bb.minimum} character(s)` : "number" === bb.type ? `Number must be ${bb.exact?"exactly equal to ":bb.inclusive?"greater than or equal to ":"greater than "}${bb.minimum}` : "date" === bb.type ? `Date must be ${bb.exact?"exactly equal to ":bb.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(bb.minimum))}` : "Invalid input";
          break;
        case Ub.too_big:
          Mb = "array" === bb.type ? `Array must contain ${bb.exact?"exactly":bb.inclusive?"at most":"less than"} ${bb.maximum} element(s)` : "string" === bb.type ? `String must contain ${bb.exact?"exactly":bb.inclusive?"at most":"under"} ${bb.maximum} character(s)` : "number" === bb.type ? `Number must be ${bb.exact?"exactly":bb.inclusive?"less than or equal to":"less than"} ${bb.maximum}` : "bigint" === bb.type ? `BigInt must be ${bb.exact?"exactly":bb.inclusive?"less than or equal to":"less than"} ${bb.maximum}` : "date" === bb.type ? `Date must be ${bb.exact?"exactly":bb.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(bb.maximum))}` : "Invalid input";
          break;
        case Ub.custom:
          Mb = "Invalid input";
          break;
        case Ub.invalid_intersection_types:
          Mb = "Intersection results could not be merged";
          break;
        case Ub.not_multiple_of:
          Mb = `Number must be a multiple of ${bb.multipleOf}`;
          break;
        case Ub.not_finite:
          Mb = "Number must be finite";
          break;
        default:
          Mb = wb.defaultError, gb.assertNever(bb)
      }
      return {
        message: Mb
      }
    };
    let Eb = Cb;

    function Fb() {
      return Eb
    }
    const Bb = bb => {
      const {
        data: wb,
        path: Mb,
        errorMaps: eb,
        issueData: Hb
      } = bb, pb = [...Mb, ...Hb.path || []], Vb = {
        ...Hb,
        path: pb
      };
      let gb = "";
      const lb = eb.filter((bb => !!bb)).slice().reverse();
      for (const Lb of lb) gb = Lb(Vb, {
        data: wb,
        defaultError: gb
      }).message;
      return {
        ...Hb,
        path: pb,
        message: Hb.message || gb
      }
    };

    function sb(bb, wb) {
      const Mb = Bb({
        issueData: wb,
        data: bb.data,
        path: bb.path,
        errorMaps: [bb.common.contextualErrorMap, bb.schemaErrorMap, Fb(), Cb].filter((bb => !!bb))
      });
      bb.common.issues.push(Mb)
    }
    class mb {
      constructor() {
        this.value = "valid"
      }
      JC() {
        "valid" === this.value && (this.value = "JC")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(bb, wb) {
        const Mb = [];
        for (const eb of wb) {
          if ("aborted" === eb.status) return hb;
          "JC" === eb.status && bb.JC(), Mb.push(eb.value)
        }
        return {
          status: bb.value,
          value: Mb
        }
      }
      static async mergeObjectAsync(bb, wb) {
        const Mb = [];
        for (const eb of wb) Mb.push({
          key: await eb.key,
          value: await eb.value
        });
        return mb.mergeObjectSync(bb, Mb)
      }
      static mergeObjectSync(bb, wb) {
        const Mb = {};
        for (const eb of wb) {
          const {
            key: wb,
            value: Hb
          } = eb;
          if ("aborted" === wb.status) return hb;
          if ("aborted" === Hb.status) return hb;
          "JC" === wb.status && bb.JC(), "JC" === Hb.status && bb.JC(), "__proto__" === wb.value || "undefined" === typeof Hb.value && !eb.alwaysSet || (Mb[wb.value] = Hb.value)
        }
        return {
          status: bb.value,
          value: Mb
        }
      }
    }
    const hb = Object.freeze({
        status: "aborted"
      }),
      zb = bb => ({
        status: "JC",
        value: bb
      }),
      Xb = bb => ({
        status: "valid",
        value: bb
      }),
      xb = bb => "aborted" === bb.status,
      jb = bb => "JC" === bb.status,
      Kb = bb => "valid" === bb.status,
      rb = bb => "undefined" !== typeof Promise && bb instanceof Promise;
    var Rb;
    ! function(bb) {
      bb.errToObj = bb => "string" === typeof bb ? {
        message: bb
      } : bb || {}, bb.toString = bb => "string" === typeof bb ? bb : null === bb || void 0 === bb ? void 0 : bb.message
    }(Rb || (Rb = {}));
    class Db {
      constructor(bb, wb, Mb, eb) {
        this._cachedPath = [], this.parent = bb, this.data = wb, this._path = Mb, this._key = eb
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const cb = (bb, wb) => {
      if (Kb(wb)) return {
        success: !0,
        data: wb.value
      };
      if (!bb.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const wb = new tb(bb.common.issues);
          return this._error = wb, this._error
        }
      }
    };

    function Yb(bb) {
      if (!bb) return {};
      const {
        errorMap: wb,
        invalid_type_error: Mb,
        required_error: eb,
        description: Hb
      } = bb;
      if (wb && (Mb || eb)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (wb) return {
        errorMap: wb,
        description: Hb
      };
      return {
        errorMap: (bb, wb) => "invalid_type" !== bb.code ? {
          message: wb.defaultError
        } : "undefined" === typeof wb.data ? {
          message: null !== eb && void 0 !== eb ? eb : wb.defaultError
        } : {
          message: null !== Mb && void 0 !== Mb ? Mb : wb.defaultError
        },
        description: Hb
      }
    }
    class Zb {
      constructor(bb) {
        this.spa = this.safeParseAsync, this._def = bb, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(bb) {
        return Ob(bb.data)
      }
      _getOrReturnCtx(bb, wb) {
        return wb || {
          common: bb.parent.common,
          data: bb.data,
          parsedType: Ob(bb.data),
          schemaErrorMap: this._def.errorMap,
          path: bb.path,
          parent: bb.parent
        }
      }
      _processInputParams(bb) {
        return {
          status: new mb,
          ctx: {
            common: bb.parent.common,
            data: bb.data,
            parsedType: Ob(bb.data),
            schemaErrorMap: this._def.errorMap,
            path: bb.path,
            parent: bb.parent
          }
        }
      }
      _parseSync(bb) {
        const wb = this._parse(bb);
        if (rb(wb)) throw new Error("Synchronous parse encountered promise.");
        return wb
      }
      _parseAsync(bb) {
        const wb = this._parse(bb);
        return Promise.resolve(wb)
      }
      parse(bb, wb) {
        const Mb = this.safeParse(bb, wb);
        if (Mb.success) return Mb.data;
        throw Mb.error
      }
      safeParse(bb, wb) {
        var Mb;
        const eb = {
            common: {
              issues: [],
              async: null !== (Mb = null === wb || void 0 === wb ? void 0 : wb.async) && void 0 !== Mb && Mb,
              contextualErrorMap: null === wb || void 0 === wb ? void 0 : wb.errorMap
            },
            path: (null === wb || void 0 === wb ? void 0 : wb.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: bb,
            parsedType: Ob(bb)
          },
          Hb = this._parseSync({
            data: bb,
            path: eb.path,
            parent: eb
          });
        return cb(eb, Hb)
      }
      async parseAsync(bb, wb) {
        const Mb = await this.safeParseAsync(bb, wb);
        if (Mb.success) return Mb.data;
        throw Mb.error
      }
      async safeParseAsync(bb, wb) {
        const Mb = {
            common: {
              issues: [],
              contextualErrorMap: null === wb || void 0 === wb ? void 0 : wb.errorMap,
              async: !0
            },
            path: (null === wb || void 0 === wb ? void 0 : wb.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: bb,
            parsedType: Ob(bb)
          },
          eb = this._parse({
            data: bb,
            path: Mb.path,
            parent: Mb
          }),
          Hb = await (rb(eb) ? eb : Promise.resolve(eb));
        return cb(Mb, Hb)
      }
      refine(bb, wb) {
        const Mb = bb => "string" === typeof wb || "undefined" === typeof wb ? {
          message: wb
        } : "function" === typeof wb ? wb(bb) : wb;
        return this._refinement(((wb, eb) => {
          const Hb = bb(wb),
            pb = () => eb.addIssue({
              code: Ub.custom,
              ...Mb(wb)
            });
          return "undefined" !== typeof Promise && Hb instanceof Promise ? Hb.then((bb => !!bb || (pb(), !1))) : !!Hb || (pb(), !1)
        }))
      }
      refinement(bb, wb) {
        return this._refinement(((Mb, eb) => !!bb(Mb) || (eb.addIssue("function" === typeof wb ? wb(Mb, eb) : wb), !1)))
      }
      _refinement(bb) {
        return new hw({
          schema: this,
          typeName: Aw.ZodEffects,
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
        return zw.create(this, this._def)
      }
      nullable() {
        return Xw.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return ww.create(this, this._def)
      }
      promise() {
        return mw.create(this, this._def)
      }
      or(bb) {
        return Hw.create([this, bb], this._def)
      }
      and(bb) {
        return lw.create(this, bb, this._def)
      }
      transform(bb) {
        return new hw({
          ...Yb(this._def),
          schema: this,
          typeName: Aw.ZodEffects,
          effect: {
            type: "transform",
            transform: bb
          }
        })
      }
      default (bb) {
        const wb = "function" === typeof bb ? bb : () => bb;
        return new xw({
          ...Yb(this._def),
          innerType: this,
          defaultValue: wb,
          typeName: Aw.ZodDefault
        })
      }
      brand() {
        return new Rw({
          typeName: Aw.ZodBranded,
          type: this,
          ...Yb(this._def)
        })
      } catch (bb) {
        const wb = "function" === typeof bb ? bb : () => bb;
        return new jw({
          ...Yb(this._def),
          innerType: this,
          catchValue: wb,
          typeName: Aw.ZodCatch
        })
      }
      describe(bb) {
        return new(0, this.constructor)({
          ...this._def,
          description: bb
        })
      }
      pipe(bb) {
        return Dw.create(this, bb)
      }
      readonly() {
        return Yw.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const fb = /^c[^\s-]{8,}$/i,
      Ab = /^[a-z][a-z0-9]*$/,
      Wb = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      Jb = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      Sb = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let Nb;
    const vb = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      Qb = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class Gb extends Zb {
      _parse(bb) {
        this._def.coerce && (bb.data = String(bb.data));
        if (this._getType(bb) !== Ib.string) {
          const wb = this._getOrReturnCtx(bb);
          return sb(wb, {
            code: Ub.invalid_type,
            expected: Ib.string,
            received: wb.parsedType
          }), hb
        }
        const wb = new mb;
        let Mb;
        for (const lb of this._def.checks)
          if ("min" === lb.kind) bb.data.length < lb.value && (Mb = this._getOrReturnCtx(bb, Mb), sb(Mb, {
            code: Ub.too_small,
            minimum: lb.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: lb.message
          }), wb.JC());
          else if ("max" === lb.kind) bb.data.length > lb.value && (Mb = this._getOrReturnCtx(bb, Mb), sb(Mb, {
          code: Ub.too_big,
          maximum: lb.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: lb.message
        }), wb.JC());
        else if ("length" === lb.kind) {
          const eb = bb.data.length > lb.value,
            Hb = bb.data.length < lb.value;
          (eb || Hb) && (Mb = this._getOrReturnCtx(bb, Mb), eb ? sb(Mb, {
            code: Ub.too_big,
            maximum: lb.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: lb.message
          }) : Hb && sb(Mb, {
            code: Ub.too_small,
            minimum: lb.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: lb.message
          }), wb.JC())
        } else if ("email" === lb.kind) Sb.test(bb.data) || (Mb = this._getOrReturnCtx(bb, Mb), sb(Mb, {
          validation: "email",
          code: Ub.invalid_string,
          message: lb.message
        }), wb.JC());
        else if ("emoji" === lb.kind) Nb || (Nb = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Nb.test(bb.data) || (Mb = this._getOrReturnCtx(bb, Mb), sb(Mb, {
          validation: "emoji",
          code: Ub.invalid_string,
          message: lb.message
        }), wb.JC());
        else if ("uuid" === lb.kind) Jb.test(bb.data) || (Mb = this._getOrReturnCtx(bb, Mb), sb(Mb, {
          validation: "uuid",
          code: Ub.invalid_string,
          message: lb.message
        }), wb.JC());
        else if ("cuid" === lb.kind) fb.test(bb.data) || (Mb = this._getOrReturnCtx(bb, Mb), sb(Mb, {
          validation: "cuid",
          code: Ub.invalid_string,
          message: lb.message
        }), wb.JC());
        else if ("cuid2" === lb.kind) Ab.test(bb.data) || (Mb = this._getOrReturnCtx(bb, Mb), sb(Mb, {
          validation: "cuid2",
          code: Ub.invalid_string,
          message: lb.message
        }), wb.JC());
        else if ("ulid" === lb.kind) Wb.test(bb.data) || (Mb = this._getOrReturnCtx(bb, Mb), sb(Mb, {
          validation: "ulid",
          code: Ub.invalid_string,
          message: lb.message
        }), wb.JC());
        else if ("url" === lb.kind) try {
          new URL(bb.data)
        } catch (Vb) {
          Mb = this._getOrReturnCtx(bb, Mb), sb(Mb, {
            validation: "url",
            code: Ub.invalid_string,
            message: lb.message
          }), wb.JC()
        } else if ("regex" === lb.kind) {
          lb.regex.lastIndex = 0;
          lb.regex.test(bb.data) || (Mb = this._getOrReturnCtx(bb, Mb), sb(Mb, {
            validation: "regex",
            code: Ub.invalid_string,
            message: lb.message
          }), wb.JC())
        } else if ("trim" === lb.kind) bb.data = bb.data.trim();
        else if ("includes" === lb.kind) bb.data.includes(lb.value, lb.position) || (Mb = this._getOrReturnCtx(bb, Mb), sb(Mb, {
          code: Ub.invalid_string,
          validation: {
            includes: lb.value,
            position: lb.position
          },
          message: lb.message
        }), wb.JC());
        else if ("toLowerCase" === lb.kind) bb.data = bb.data.toLowerCase();
        else if ("toUpperCase" === lb.kind) bb.data = bb.data.toUpperCase();
        else if ("startsWith" === lb.kind) bb.data.startsWith(lb.value) || (Mb = this._getOrReturnCtx(bb, Mb), sb(Mb, {
          code: Ub.invalid_string,
          validation: {
            startsWith: lb.value
          },
          message: lb.message
        }), wb.JC());
        else if ("endsWith" === lb.kind) bb.data.endsWith(lb.value) || (Mb = this._getOrReturnCtx(bb, Mb), sb(Mb, {
          code: Ub.invalid_string,
          validation: {
            endsWith: lb.value
          },
          message: lb.message
        }), wb.JC());
        else if ("datetime" === lb.kind) {
          ((pb = lb).precision ? pb.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${pb.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${pb.precision}}Z$`) : 0 === pb.precision ? pb.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : pb.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(bb.data) || (Mb = this._getOrReturnCtx(bb, Mb), sb(Mb, {
            code: Ub.invalid_string,
            validation: "datetime",
            message: lb.message
          }), wb.JC())
        } else "ip" === lb.kind ? (eb = bb.data, ("v4" !== (Hb = lb.version) && Hb || !vb.test(eb)) && ("v6" !== Hb && Hb || !Qb.test(eb)) && (Mb = this._getOrReturnCtx(bb, Mb), sb(Mb, {
          validation: "ip",
          code: Ub.invalid_string,
          message: lb.message
        }), wb.JC())) : gb.assertNever(lb);
        var eb, Hb, pb;
        return {
          status: wb.value,
          value: bb.data
        }
      }
      _regex(bb, wb, Mb) {
        return this.refinement((wb => bb.test(wb)), {
          validation: wb,
          code: Ub.invalid_string,
          ...Rb.errToObj(Mb)
        })
      }
      _addCheck(bb) {
        return new Gb({
          ...this._def,
          checks: [...this._def.checks, bb]
        })
      }
      email(bb) {
        return this._addCheck({
          kind: "email",
          ...Rb.errToObj(bb)
        })
      }
      url(bb) {
        return this._addCheck({
          kind: "url",
          ...Rb.errToObj(bb)
        })
      }
      emoji(bb) {
        return this._addCheck({
          kind: "emoji",
          ...Rb.errToObj(bb)
        })
      }
      uuid(bb) {
        return this._addCheck({
          kind: "uuid",
          ...Rb.errToObj(bb)
        })
      }
      cuid(bb) {
        return this._addCheck({
          kind: "cuid",
          ...Rb.errToObj(bb)
        })
      }
      cuid2(bb) {
        return this._addCheck({
          kind: "cuid2",
          ...Rb.errToObj(bb)
        })
      }
      ulid(bb) {
        return this._addCheck({
          kind: "ulid",
          ...Rb.errToObj(bb)
        })
      }
      ip(bb) {
        return this._addCheck({
          kind: "ip",
          ...Rb.errToObj(bb)
        })
      }
      datetime(bb) {
        var wb;
        return "string" === typeof bb ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: bb
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === bb || void 0 === bb ? void 0 : bb.precision) ? null : null === bb || void 0 === bb ? void 0 : bb.precision,
          offset: null !== (wb = null === bb || void 0 === bb ? void 0 : bb.offset) && void 0 !== wb && wb,
          ...Rb.errToObj(null === bb || void 0 === bb ? void 0 : bb.message)
        })
      }
      regex(bb, wb) {
        return this._addCheck({
          kind: "regex",
          regex: bb,
          ...Rb.errToObj(wb)
        })
      }
      includes(bb, wb) {
        return this._addCheck({
          kind: "includes",
          value: bb,
          position: null === wb || void 0 === wb ? void 0 : wb.position,
          ...Rb.errToObj(null === wb || void 0 === wb ? void 0 : wb.message)
        })
      }
      startsWith(bb, wb) {
        return this._addCheck({
          kind: "startsWith",
          value: bb,
          ...Rb.errToObj(wb)
        })
      }
      endsWith(bb, wb) {
        return this._addCheck({
          kind: "endsWith",
          value: bb,
          ...Rb.errToObj(wb)
        })
      }
      min(bb, wb) {
        return this._addCheck({
          kind: "min",
          value: bb,
          ...Rb.errToObj(wb)
        })
      }
      max(bb, wb) {
        return this._addCheck({
          kind: "max",
          value: bb,
          ...Rb.errToObj(wb)
        })
      }
      length(bb, wb) {
        return this._addCheck({
          kind: "length",
          value: bb,
          ...Rb.errToObj(wb)
        })
      }
      nonempty(bb) {
        return this.min(1, Rb.errToObj(bb))
      }
      trim() {
        return new Gb({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new Gb({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new Gb({
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
        for (const wb of this._def.checks) "min" === wb.kind && (null === bb || wb.value > bb) && (bb = wb.value);
        return bb
      }
      get maxLength() {
        let bb = null;
        for (const wb of this._def.checks) "max" === wb.kind && (null === bb || wb.value < bb) && (bb = wb.value);
        return bb
      }
    }

    function qb(bb, wb) {
      const Mb = (bb.toString().split(".")[1] || "").length,
        eb = (wb.toString().split(".")[1] || "").length,
        Hb = Mb > eb ? Mb : eb;
      return parseInt(bb.toFixed(Hb).replace(".", "")) % parseInt(wb.toFixed(Hb).replace(".", "")) / Math.pow(10, Hb)
    }
    Gb.create = bb => {
      var wb;
      return new Gb({
        checks: [],
        typeName: Aw.ZodString,
        coerce: null !== (wb = null === bb || void 0 === bb ? void 0 : bb.coerce) && void 0 !== wb && wb,
        ...Yb(bb)
      })
    };
    class ab extends Zb {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(bb) {
        this._def.coerce && (bb.data = Number(bb.data));
        if (this._getType(bb) !== Ib.number) {
          const wb = this._getOrReturnCtx(bb);
          return sb(wb, {
            code: Ub.invalid_type,
            expected: Ib.number,
            received: wb.parsedType
          }), hb
        }
        let wb;
        const Mb = new mb;
        for (const eb of this._def.checks)
          if ("int" === eb.kind) gb.isInteger(bb.data) || (wb = this._getOrReturnCtx(bb, wb), sb(wb, {
            code: Ub.invalid_type,
            expected: "integer",
            received: "float",
            message: eb.message
          }), Mb.JC());
          else if ("min" === eb.kind) {
          (eb.inclusive ? bb.data < eb.value : bb.data <= eb.value) && (wb = this._getOrReturnCtx(bb, wb), sb(wb, {
            code: Ub.too_small,
            minimum: eb.value,
            type: "number",
            inclusive: eb.inclusive,
            exact: !1,
            message: eb.message
          }), Mb.JC())
        } else if ("max" === eb.kind) {
          (eb.inclusive ? bb.data > eb.value : bb.data >= eb.value) && (wb = this._getOrReturnCtx(bb, wb), sb(wb, {
            code: Ub.too_big,
            maximum: eb.value,
            type: "number",
            inclusive: eb.inclusive,
            exact: !1,
            message: eb.message
          }), Mb.JC())
        } else "multipleOf" === eb.kind ? 0 !== qb(bb.data, eb.value) && (wb = this._getOrReturnCtx(bb, wb), sb(wb, {
          code: Ub.not_multiple_of,
          multipleOf: eb.value,
          message: eb.message
        }), Mb.JC()) : "finite" === eb.kind ? Number.isFinite(bb.data) || (wb = this._getOrReturnCtx(bb, wb), sb(wb, {
          code: Ub.not_finite,
          message: eb.message
        }), Mb.JC()) : gb.assertNever(eb);
        return {
          status: Mb.value,
          value: bb.data
        }
      }
      gte(bb, wb) {
        return this.setLimit("min", bb, !0, Rb.toString(wb))
      }
      gt(bb, wb) {
        return this.setLimit("min", bb, !1, Rb.toString(wb))
      }
      lte(bb, wb) {
        return this.setLimit("max", bb, !0, Rb.toString(wb))
      }
      lt(bb, wb) {
        return this.setLimit("max", bb, !1, Rb.toString(wb))
      }
      setLimit(bb, wb, Mb, eb) {
        return new ab({
          ...this._def,
          checks: [...this._def.checks, {
            kind: bb,
            value: wb,
            inclusive: Mb,
            message: Rb.toString(eb)
          }]
        })
      }
      _addCheck(bb) {
        return new ab({
          ...this._def,
          checks: [...this._def.checks, bb]
        })
      }
      int(bb) {
        return this._addCheck({
          kind: "int",
          message: Rb.toString(bb)
        })
      }
      positive(bb) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: Rb.toString(bb)
        })
      }
      negative(bb) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: Rb.toString(bb)
        })
      }
      nonpositive(bb) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: Rb.toString(bb)
        })
      }
      nonnegative(bb) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: Rb.toString(bb)
        })
      }
      multipleOf(bb, wb) {
        return this._addCheck({
          kind: "multipleOf",
          value: bb,
          message: Rb.toString(wb)
        })
      }
      finite(bb) {
        return this._addCheck({
          kind: "finite",
          message: Rb.toString(bb)
        })
      }
      safe(bb) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: Rb.toString(bb)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: Rb.toString(bb)
        })
      }
      get minValue() {
        let bb = null;
        for (const wb of this._def.checks) "min" === wb.kind && (null === bb || wb.value > bb) && (bb = wb.value);
        return bb
      }
      get maxValue() {
        let bb = null;
        for (const wb of this._def.checks) "max" === wb.kind && (null === bb || wb.value < bb) && (bb = wb.value);
        return bb
      }
      get isInt() {
        return !!this._def.checks.find((bb => "int" === bb.kind || "multipleOf" === bb.kind && gb.isInteger(bb.value)))
      }
      get isFinite() {
        let bb = null,
          wb = null;
        for (const Mb of this._def.checks) {
          if ("finite" === Mb.kind || "int" === Mb.kind || "multipleOf" === Mb.kind) return !0;
          "min" === Mb.kind ? (null === wb || Mb.value > wb) && (wb = Mb.value) : "max" === Mb.kind && (null === bb || Mb.value < bb) && (bb = Mb.value)
        }
        return Number.isFinite(wb) && Number.isFinite(bb)
      }
    }
    ab.create = bb => new ab({
      checks: [],
      typeName: Aw.ZodNumber,
      coerce: (null === bb || void 0 === bb ? void 0 : bb.coerce) || !1,
      ...Yb(bb)
    });
    class ib extends Zb {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(bb) {
        this._def.coerce && (bb.data = BigInt(bb.data));
        if (this._getType(bb) !== Ib.bigint) {
          const wb = this._getOrReturnCtx(bb);
          return sb(wb, {
            code: Ub.invalid_type,
            expected: Ib.bigint,
            received: wb.parsedType
          }), hb
        }
        let wb;
        const Mb = new mb;
        for (const eb of this._def.checks)
          if ("min" === eb.kind) {
            (eb.inclusive ? bb.data < eb.value : bb.data <= eb.value) && (wb = this._getOrReturnCtx(bb, wb), sb(wb, {
              code: Ub.too_small,
              type: "bigint",
              minimum: eb.value,
              inclusive: eb.inclusive,
              message: eb.message
            }), Mb.JC())
          } else if ("max" === eb.kind) {
          (eb.inclusive ? bb.data > eb.value : bb.data >= eb.value) && (wb = this._getOrReturnCtx(bb, wb), sb(wb, {
            code: Ub.too_big,
            type: "bigint",
            maximum: eb.value,
            inclusive: eb.inclusive,
            message: eb.message
          }), Mb.JC())
        } else "multipleOf" === eb.kind ? bb.data % eb.value !== BigInt(0) && (wb = this._getOrReturnCtx(bb, wb), sb(wb, {
          code: Ub.not_multiple_of,
          multipleOf: eb.value,
          message: eb.message
        }), Mb.JC()) : gb.assertNever(eb);
        return {
          status: Mb.value,
          value: bb.data
        }
      }
      gte(bb, wb) {
        return this.setLimit("min", bb, !0, Rb.toString(wb))
      }
      gt(bb, wb) {
        return this.setLimit("min", bb, !1, Rb.toString(wb))
      }
      lte(bb, wb) {
        return this.setLimit("max", bb, !0, Rb.toString(wb))
      }
      lt(bb, wb) {
        return this.setLimit("max", bb, !1, Rb.toString(wb))
      }
      setLimit(bb, wb, Mb, eb) {
        return new ib({
          ...this._def,
          checks: [...this._def.checks, {
            kind: bb,
            value: wb,
            inclusive: Mb,
            message: Rb.toString(eb)
          }]
        })
      }
      _addCheck(bb) {
        return new ib({
          ...this._def,
          checks: [...this._def.checks, bb]
        })
      }
      positive(bb) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: Rb.toString(bb)
        })
      }
      negative(bb) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: Rb.toString(bb)
        })
      }
      nonpositive(bb) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: Rb.toString(bb)
        })
      }
      nonnegative(bb) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: Rb.toString(bb)
        })
      }
      multipleOf(bb, wb) {
        return this._addCheck({
          kind: "multipleOf",
          value: bb,
          message: Rb.toString(wb)
        })
      }
      get minValue() {
        let bb = null;
        for (const wb of this._def.checks) "min" === wb.kind && (null === bb || wb.value > bb) && (bb = wb.value);
        return bb
      }
      get maxValue() {
        let bb = null;
        for (const wb of this._def.checks) "max" === wb.kind && (null === bb || wb.value < bb) && (bb = wb.value);
        return bb
      }
    }
    ib.create = bb => {
      var wb;
      return new ib({
        checks: [],
        typeName: Aw.ZodBigInt,
        coerce: null !== (wb = null === bb || void 0 === bb ? void 0 : bb.coerce) && void 0 !== wb && wb,
        ...Yb(bb)
      })
    };
    class ub extends Zb {
      _parse(bb) {
        this._def.coerce && (bb.data = Boolean(bb.data));
        if (this._getType(bb) !== Ib.boolean) {
          const wb = this._getOrReturnCtx(bb);
          return sb(wb, {
            code: Ub.invalid_type,
            expected: Ib.boolean,
            received: wb.parsedType
          }), hb
        }
        return Xb(bb.data)
      }
    }
    ub.create = bb => new ub({
      typeName: Aw.ZodBoolean,
      coerce: (null === bb || void 0 === bb ? void 0 : bb.coerce) || !1,
      ...Yb(bb)
    });
    class db extends Zb {
      _parse(bb) {
        this._def.coerce && (bb.data = new Date(bb.data));
        if (this._getType(bb) !== Ib.date) {
          const wb = this._getOrReturnCtx(bb);
          return sb(wb, {
            code: Ub.invalid_type,
            expected: Ib.date,
            received: wb.parsedType
          }), hb
        }
        if (isNaN(bb.data.getTime())) {
          return sb(this._getOrReturnCtx(bb), {
            code: Ub.invalid_date
          }), hb
        }
        const wb = new mb;
        let Mb;
        for (const eb of this._def.checks) "min" === eb.kind ? bb.data.getTime() < eb.value && (Mb = this._getOrReturnCtx(bb, Mb), sb(Mb, {
          code: Ub.too_small,
          message: eb.message,
          inclusive: !0,
          exact: !1,
          minimum: eb.value,
          type: "date"
        }), wb.JC()) : "max" === eb.kind ? bb.data.getTime() > eb.value && (Mb = this._getOrReturnCtx(bb, Mb), sb(Mb, {
          code: Ub.too_big,
          message: eb.message,
          inclusive: !0,
          exact: !1,
          maximum: eb.value,
          type: "date"
        }), wb.JC()) : gb.assertNever(eb);
        return {
          status: wb.value,
          value: new Date(bb.data.getTime())
        }
      }
      _addCheck(bb) {
        return new db({
          ...this._def,
          checks: [...this._def.checks, bb]
        })
      }
      min(bb, wb) {
        return this._addCheck({
          kind: "min",
          value: bb.getTime(),
          message: Rb.toString(wb)
        })
      }
      max(bb, wb) {
        return this._addCheck({
          kind: "max",
          value: bb.getTime(),
          message: Rb.toString(wb)
        })
      }
      get minDate() {
        let bb = null;
        for (const wb of this._def.checks) "min" === wb.kind && (null === bb || wb.value > bb) && (bb = wb.value);
        return null != bb ? new Date(bb) : null
      }
      get maxDate() {
        let bb = null;
        for (const wb of this._def.checks) "max" === wb.kind && (null === bb || wb.value < bb) && (bb = wb.value);
        return null != bb ? new Date(bb) : null
      }
    }
    db.create = bb => new db({
      checks: [],
      coerce: (null === bb || void 0 === bb ? void 0 : bb.coerce) || !1,
      typeName: Aw.ZodDate,
      ...Yb(bb)
    });
    class Pb extends Zb {
      _parse(bb) {
        if (this._getType(bb) !== Ib.symbol) {
          const wb = this._getOrReturnCtx(bb);
          return sb(wb, {
            code: Ub.invalid_type,
            expected: Ib.symbol,
            received: wb.parsedType
          }), hb
        }
        return Xb(bb.data)
      }
    }
    Pb.create = bb => new Pb({
      typeName: Aw.ZodSymbol,
      ...Yb(bb)
    });
    class nb extends Zb {
      _parse(bb) {
        if (this._getType(bb) !== Ib.undefined) {
          const wb = this._getOrReturnCtx(bb);
          return sb(wb, {
            code: Ub.invalid_type,
            expected: Ib.undefined,
            received: wb.parsedType
          }), hb
        }
        return Xb(bb.data)
      }
    }
    nb.create = bb => new nb({
      typeName: Aw.ZodUndefined,
      ...Yb(bb)
    });
    class yb extends Zb {
      _parse(bb) {
        if (this._getType(bb) !== Ib.null) {
          const wb = this._getOrReturnCtx(bb);
          return sb(wb, {
            code: Ub.invalid_type,
            expected: Ib.null,
            received: wb.parsedType
          }), hb
        }
        return Xb(bb.data)
      }
    }
    yb.create = bb => new yb({
      typeName: Aw.ZodNull,
      ...Yb(bb)
    });
    class ob extends Zb {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(bb) {
        return Xb(bb.data)
      }
    }
    ob.create = bb => new ob({
      typeName: Aw.ZodAny,
      ...Yb(bb)
    });
    class Tb extends Zb {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(bb) {
        return Xb(bb.data)
      }
    }
    Tb.create = bb => new Tb({
      typeName: Aw.ZodUnknown,
      ...Yb(bb)
    });
    class kb extends Zb {
      _parse(bb) {
        const wb = this._getOrReturnCtx(bb);
        return sb(wb, {
          code: Ub.invalid_type,
          expected: Ib.never,
          received: wb.parsedType
        }), hb
      }
    }
    kb.create = bb => new kb({
      typeName: Aw.ZodNever,
      ...Yb(bb)
    });
    class bw extends Zb {
      _parse(bb) {
        if (this._getType(bb) !== Ib.undefined) {
          const wb = this._getOrReturnCtx(bb);
          return sb(wb, {
            code: Ub.invalid_type,
            expected: Ib.void,
            received: wb.parsedType
          }), hb
        }
        return Xb(bb.data)
      }
    }
    bw.create = bb => new bw({
      typeName: Aw.ZodVoid,
      ...Yb(bb)
    });
    class ww extends Zb {
      _parse(bb) {
        const {
          ctx: wb,
          status: Mb
        } = this._processInputParams(bb), eb = this._def;
        if (wb.parsedType !== Ib.array) return sb(wb, {
          code: Ub.invalid_type,
          expected: Ib.array,
          received: wb.parsedType
        }), hb;
        if (null !== eb.exactLength) {
          const bb = wb.data.length > eb.exactLength.value,
            Hb = wb.data.length < eb.exactLength.value;
          (bb || Hb) && (sb(wb, {
            code: bb ? Ub.too_big : Ub.too_small,
            minimum: Hb ? eb.exactLength.value : void 0,
            maximum: bb ? eb.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: eb.exactLength.message
          }), Mb.JC())
        }
        if (null !== eb.minLength && wb.data.length < eb.minLength.value && (sb(wb, {
            code: Ub.too_small,
            minimum: eb.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: eb.minLength.message
          }), Mb.JC()), null !== eb.maxLength && wb.data.length > eb.maxLength.value && (sb(wb, {
            code: Ub.too_big,
            maximum: eb.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: eb.maxLength.message
          }), Mb.JC()), wb.common.async) return Promise.all([...wb.data].map(((bb, Mb) => eb.type._parseAsync(new Db(wb, bb, wb.path, Mb))))).then((bb => mb.mergeArray(Mb, bb)));
        const Hb = [...wb.data].map(((bb, Mb) => eb.type._parseSync(new Db(wb, bb, wb.path, Mb))));
        return mb.mergeArray(Mb, Hb)
      }
      get element() {
        return this._def.type
      }
      min(bb, wb) {
        return new ww({
          ...this._def,
          minLength: {
            value: bb,
            message: Rb.toString(wb)
          }
        })
      }
      max(bb, wb) {
        return new ww({
          ...this._def,
          maxLength: {
            value: bb,
            message: Rb.toString(wb)
          }
        })
      }
      length(bb, wb) {
        return new ww({
          ...this._def,
          exactLength: {
            value: bb,
            message: Rb.toString(wb)
          }
        })
      }
      nonempty(bb) {
        return this.min(1, bb)
      }
    }

    function Mw(bb) {
      if (bb instanceof ew) {
        const wb = {};
        for (const Mb in bb.shape) {
          const eb = bb.shape[Mb];
          wb[Mb] = zw.create(Mw(eb))
        }
        return new ew({
          ...bb._def,
          shape: () => wb
        })
      }
      return bb instanceof ww ? new ww({
        ...bb._def,
        type: Mw(bb.element)
      }) : bb instanceof zw ? zw.create(Mw(bb.unwrap())) : bb instanceof Xw ? Xw.create(Mw(bb.unwrap())) : bb instanceof Lw ? Lw.create(bb.items.map((bb => Mw(bb)))) : bb
    }
    ww.create = (bb, wb) => new ww({
      type: bb,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: Aw.ZodArray,
      ...Yb(wb)
    });
    class ew extends Zb {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const bb = this._def.shape(),
          wb = gb.objectKeys(bb);
        return this._cached = {
          shape: bb,
          keys: wb
        }
      }
      _parse(bb) {
        if (this._getType(bb) !== Ib.object) {
          const wb = this._getOrReturnCtx(bb);
          return sb(wb, {
            code: Ub.invalid_type,
            expected: Ib.object,
            received: wb.parsedType
          }), hb
        }
        const {
          status: wb,
          ctx: Mb
        } = this._processInputParams(bb), {
          shape: eb,
          keys: Hb
        } = this._getCached(), pb = [];
        if (!(this._def.catchall instanceof kb && "strip" === this._def.unknownKeys))
          for (const gb in Mb.data) Hb.includes(gb) || pb.push(gb);
        const Vb = [];
        for (const gb of Hb) {
          const bb = eb[gb],
            wb = Mb.data[gb];
          Vb.push({
            key: {
              status: "valid",
              value: gb
            },
            value: bb._parse(new Db(Mb, wb, Mb.path, gb)),
            alwaysSet: gb in Mb.data
          })
        }
        if (this._def.catchall instanceof kb) {
          const bb = this._def.unknownKeys;
          if ("passthrough" === bb)
            for (const wb of pb) Vb.push({
              key: {
                status: "valid",
                value: wb
              },
              value: {
                status: "valid",
                value: Mb.data[wb]
              }
            });
          else if ("strict" === bb) pb.length > 0 && (sb(Mb, {
            code: Ub.unrecognized_keys,
            keys: pb
          }), wb.JC());
          else if ("strip" !== bb) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const bb = this._def.catchall;
          for (const wb of pb) {
            const eb = Mb.data[wb];
            Vb.push({
              key: {
                status: "valid",
                value: wb
              },
              value: bb._parse(new Db(Mb, eb, Mb.path, wb)),
              alwaysSet: wb in Mb.data
            })
          }
        }
        return Mb.common.async ? Promise.resolve().then((async () => {
          const bb = [];
          for (const wb of Vb) {
            const Mb = await wb.key;
            bb.push({
              key: Mb,
              value: await wb.value,
              alwaysSet: wb.alwaysSet
            })
          }
          return bb
        })).then((bb => mb.mergeObjectSync(wb, bb))) : mb.mergeObjectSync(wb, Vb)
      }
      get shape() {
        return this._def.shape()
      }
      strict(bb) {
        return Rb.errToObj, new ew({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== bb ? {
            errorMap: (wb, Mb) => {
              var eb, Hb, pb, Vb;
              const gb = null !== (pb = null === (Hb = (eb = this._def).errorMap) || void 0 === Hb ? void 0 : Hb.call(eb, wb, Mb).message) && void 0 !== pb ? pb : Mb.defaultError;
              return "unrecognized_keys" === wb.code ? {
                message: null !== (Vb = Rb.errToObj(bb).message) && void 0 !== Vb ? Vb : gb
              } : {
                message: gb
              }
            }
          } : {}
        })
      }
      strip() {
        return new ew({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new ew({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(bb) {
        return new ew({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...bb
          })
        })
      }
      merge(bb) {
        return new ew({
          unknownKeys: bb._def.unknownKeys,
          catchall: bb._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...bb._def.shape()
          }),
          typeName: Aw.ZodObject
        })
      }
      setKey(bb, wb) {
        return this.augment({
          [bb]: wb
        })
      }
      catchall(bb) {
        return new ew({
          ...this._def,
          catchall: bb
        })
      }
      Vt(bb) {
        const wb = {};
        return gb.objectKeys(bb).forEach((Mb => {
          bb[Mb] && this.shape[Mb] && (wb[Mb] = this.shape[Mb])
        })), new ew({
          ...this._def,
          shape: () => wb
        })
      }
      omit(bb) {
        const wb = {};
        return gb.objectKeys(this.shape).forEach((Mb => {
          bb[Mb] || (wb[Mb] = this.shape[Mb])
        })), new ew({
          ...this._def,
          shape: () => wb
        })
      }
      deepPartial() {
        return Mw(this)
      }
      partial(bb) {
        const wb = {};
        return gb.objectKeys(this.shape).forEach((Mb => {
          const eb = this.shape[Mb];
          bb && !bb[Mb] ? wb[Mb] = eb : wb[Mb] = eb.optional()
        })), new ew({
          ...this._def,
          shape: () => wb
        })
      }
      required(bb) {
        const wb = {};
        return gb.objectKeys(this.shape).forEach((Mb => {
          if (bb && !bb[Mb]) wb[Mb] = this.shape[Mb];
          else {
            let bb = this.shape[Mb];
            for (; bb instanceof zw;) bb = bb._def.innerType;
            wb[Mb] = bb
          }
        })), new ew({
          ...this._def,
          shape: () => wb
        })
      }
      keyof() {
        return Fw(gb.objectKeys(this.shape))
      }
    }
    ew.create = (bb, wb) => new ew({
      shape: () => bb,
      unknownKeys: "strip",
      catchall: kb.create(),
      typeName: Aw.ZodObject,
      ...Yb(wb)
    }), ew.strictCreate = (bb, wb) => new ew({
      shape: () => bb,
      unknownKeys: "strict",
      catchall: kb.create(),
      typeName: Aw.ZodObject,
      ...Yb(wb)
    }), ew.lazycreate = (bb, wb) => new ew({
      shape: bb,
      unknownKeys: "strip",
      catchall: kb.create(),
      typeName: Aw.ZodObject,
      ...Yb(wb)
    });
    class Hw extends Zb {
      _parse(bb) {
        const {
          ctx: wb
        } = this._processInputParams(bb), Mb = this._def.options;
        if (wb.common.async) return Promise.all(Mb.map((async bb => {
          const Mb = {
            ...wb,
            common: {
              ...wb.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await bb._parseAsync({
              data: wb.data,
              path: wb.path,
              parent: Mb
            }),
            ctx: Mb
          }
        }))).then((function(bb) {
          for (const wb of bb)
            if ("valid" === wb.result.status) return wb.result;
          for (const eb of bb)
            if ("JC" === eb.result.status) return wb.common.issues.push(...eb.ctx.common.issues), eb.result;
          const Mb = bb.map((bb => new tb(bb.ctx.common.issues)));
          return sb(wb, {
            code: Ub.invalid_union,
            unionErrors: Mb
          }), hb
        }));
        {
          let bb;
          const eb = [];
          for (const pb of Mb) {
            const Mb = {
                ...wb,
                common: {
                  ...wb.common,
                  issues: []
                },
                parent: null
              },
              Hb = pb._parseSync({
                data: wb.data,
                path: wb.path,
                parent: Mb
              });
            if ("valid" === Hb.status) return Hb;
            "JC" !== Hb.status || bb || (bb = {
              result: Hb,
              ctx: Mb
            }), Mb.common.issues.length && eb.push(Mb.common.issues)
          }
          if (bb) return wb.common.issues.push(...bb.ctx.common.issues), bb.result;
          const Hb = eb.map((bb => new tb(bb)));
          return sb(wb, {
            code: Ub.invalid_union,
            unionErrors: Hb
          }), hb
        }
      }
      get options() {
        return this._def.options
      }
    }
    Hw.create = (bb, wb) => new Hw({
      options: bb,
      typeName: Aw.ZodUnion,
      ...Yb(wb)
    });
    const pw = bb => bb instanceof Cw ? pw(bb.schema) : bb instanceof hw ? pw(bb.innerType()) : bb instanceof Ew ? [bb.value] : bb instanceof Bw ? bb.options : bb instanceof sw ? Object.keys(bb.enum) : bb instanceof xw ? pw(bb._def.innerType) : bb instanceof nb ? [void 0] : bb instanceof yb ? [null] : null;
    class Vw extends Zb {
      _parse(bb) {
        const {
          ctx: wb
        } = this._processInputParams(bb);
        if (wb.parsedType !== Ib.object) return sb(wb, {
          code: Ub.invalid_type,
          expected: Ib.object,
          received: wb.parsedType
        }), hb;
        const Mb = this.discriminator,
          eb = wb.data[Mb],
          Hb = this.optionsMap.get(eb);
        return Hb ? wb.common.async ? Hb._parseAsync({
          data: wb.data,
          path: wb.path,
          parent: wb
        }) : Hb._parseSync({
          data: wb.data,
          path: wb.path,
          parent: wb
        }) : (sb(wb, {
          code: Ub.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [Mb]
        }), hb)
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
      static create(bb, wb, Mb) {
        const eb = new Map;
        for (const Hb of wb) {
          const wb = pw(Hb.shape[bb]);
          if (!wb) throw new Error(`A discriminator value for key \`${bb}\` could not be extracted from all schema options`);
          for (const Mb of wb) {
            if (eb.has(Mb)) throw new Error(`Discriminator property ${String(bb)} has duplicate value ${String(Mb)}`);
            eb.set(Mb, Hb)
          }
        }
        return new Vw({
          typeName: Aw.ZodDiscriminatedUnion,
          discriminator: bb,
          options: wb,
          optionsMap: eb,
          ...Yb(Mb)
        })
      }
    }

    function gw(bb, wb) {
      const Mb = Ob(bb),
        eb = Ob(wb);
      if (bb === wb) return {
        valid: !0,
        data: bb
      };
      if (Mb === Ib.object && eb === Ib.object) {
        const Mb = gb.objectKeys(wb),
          eb = gb.objectKeys(bb).filter((bb => -1 !== Mb.indexOf(bb))),
          Hb = {
            ...bb,
            ...wb
          };
        for (const pb of eb) {
          const Mb = gw(bb[pb], wb[pb]);
          if (!Mb.valid) return {
            valid: !1
          };
          Hb[pb] = Mb.data
        }
        return {
          valid: !0,
          data: Hb
        }
      }
      if (Mb === Ib.array && eb === Ib.array) {
        if (bb.length !== wb.length) return {
          valid: !1
        };
        const Mb = [];
        for (let eb = 0; eb < bb.length; eb++) {
          const Hb = gw(bb[eb], wb[eb]);
          if (!Hb.valid) return {
            valid: !1
          };
          Mb.push(Hb.data)
        }
        return {
          valid: !0,
          data: Mb
        }
      }
      return Mb === Ib.date && eb === Ib.date && +bb === +wb ? {
        valid: !0,
        data: bb
      } : {
        valid: !1
      }
    }
    class lw extends Zb {
      _parse(bb) {
        const {
          status: wb,
          ctx: Mb
        } = this._processInputParams(bb), eb = (bb, eb) => {
          if (xb(bb) || xb(eb)) return hb;
          const Hb = gw(bb.value, eb.value);
          return Hb.valid ? ((jb(bb) || jb(eb)) && wb.JC(), {
            status: wb.value,
            value: Hb.data
          }) : (sb(Mb, {
            code: Ub.invalid_intersection_types
          }), hb)
        };
        return Mb.common.async ? Promise.all([this._def.left._parseAsync({
          data: Mb.data,
          path: Mb.path,
          parent: Mb
        }), this._def.right._parseAsync({
          data: Mb.data,
          path: Mb.path,
          parent: Mb
        })]).then((bb => {
          let [wb, Mb] = bb;
          return eb(wb, Mb)
        })) : eb(this._def.left._parseSync({
          data: Mb.data,
          path: Mb.path,
          parent: Mb
        }), this._def.right._parseSync({
          data: Mb.data,
          path: Mb.path,
          parent: Mb
        }))
      }
    }
    lw.create = (bb, wb, Mb) => new lw({
      left: bb,
      right: wb,
      typeName: Aw.ZodIntersection,
      ...Yb(Mb)
    });
    class Lw extends Zb {
      _parse(bb) {
        const {
          status: wb,
          ctx: Mb
        } = this._processInputParams(bb);
        if (Mb.parsedType !== Ib.array) return sb(Mb, {
          code: Ub.invalid_type,
          expected: Ib.array,
          received: Mb.parsedType
        }), hb;
        if (Mb.data.length < this._def.items.length) return sb(Mb, {
          code: Ub.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), hb;
        !this._def.rest && Mb.data.length > this._def.items.length && (sb(Mb, {
          code: Ub.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), wb.JC());
        const eb = [...Mb.data].map(((bb, wb) => {
          const eb = this._def.items[wb] || this._def.rest;
          return eb ? eb._parse(new Db(Mb, bb, Mb.path, wb)) : null
        })).filter((bb => !!bb));
        return Mb.common.async ? Promise.all(eb).then((bb => mb.mergeArray(wb, bb))) : mb.mergeArray(wb, eb)
      }
      get items() {
        return this._def.items
      }
      rest(bb) {
        return new Lw({
          ...this._def,
          rest: bb
        })
      }
    }
    Lw.create = (bb, wb) => {
      if (!Array.isArray(bb)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new Lw({
        items: bb,
        typeName: Aw.ZodTuple,
        rest: null,
        ...Yb(wb)
      })
    };
    class Iw extends Zb {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(bb) {
        const {
          status: wb,
          ctx: Mb
        } = this._processInputParams(bb);
        if (Mb.parsedType !== Ib.object) return sb(Mb, {
          code: Ub.invalid_type,
          expected: Ib.object,
          received: Mb.parsedType
        }), hb;
        const eb = [],
          Hb = this._def.keyType,
          pb = this._def.valueType;
        for (const Vb in Mb.data) eb.push({
          key: Hb._parse(new Db(Mb, Vb, Mb.path, Vb)),
          value: pb._parse(new Db(Mb, Mb.data[Vb], Mb.path, Vb))
        });
        return Mb.common.async ? mb.mergeObjectAsync(wb, eb) : mb.mergeObjectSync(wb, eb)
      }
      get element() {
        return this._def.valueType
      }
      static create(bb, wb, Mb) {
        return new Iw(wb instanceof Zb ? {
          keyType: bb,
          valueType: wb,
          typeName: Aw.ZodRecord,
          ...Yb(Mb)
        } : {
          keyType: Gb.create(),
          valueType: bb,
          typeName: Aw.ZodRecord,
          ...Yb(wb)
        })
      }
    }
    class Ow extends Zb {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(bb) {
        const {
          status: wb,
          ctx: Mb
        } = this._processInputParams(bb);
        if (Mb.parsedType !== Ib.map) return sb(Mb, {
          code: Ub.invalid_type,
          expected: Ib.map,
          received: Mb.parsedType
        }), hb;
        const eb = this._def.keyType,
          Hb = this._def.valueType,
          pb = [...Mb.data.entries()].map(((bb, wb) => {
            let [pb, Vb] = bb;
            return {
              key: eb._parse(new Db(Mb, pb, Mb.path, [wb, "key"])),
              value: Hb._parse(new Db(Mb, Vb, Mb.path, [wb, "value"]))
            }
          }));
        if (Mb.common.async) {
          const bb = new Map;
          return Promise.resolve().then((async () => {
            for (const Mb of pb) {
              const eb = await Mb.key,
                Hb = await Mb.value;
              if ("aborted" === eb.status || "aborted" === Hb.status) return hb;
              "JC" !== eb.status && "JC" !== Hb.status || wb.JC(), bb.set(eb.value, Hb.value)
            }
            return {
              status: wb.value,
              value: bb
            }
          }))
        } {
          const bb = new Map;
          for (const Mb of pb) {
            const eb = Mb.key,
              Hb = Mb.value;
            if ("aborted" === eb.status || "aborted" === Hb.status) return hb;
            "JC" !== eb.status && "JC" !== Hb.status || wb.JC(), bb.set(eb.value, Hb.value)
          }
          return {
            status: wb.value,
            value: bb
          }
        }
      }
    }
    Ow.create = (bb, wb, Mb) => new Ow({
      valueType: wb,
      keyType: bb,
      typeName: Aw.ZodMap,
      ...Yb(Mb)
    });
    class Uw extends Zb {
      _parse(bb) {
        const {
          status: wb,
          ctx: Mb
        } = this._processInputParams(bb);
        if (Mb.parsedType !== Ib.set) return sb(Mb, {
          code: Ub.invalid_type,
          expected: Ib.set,
          received: Mb.parsedType
        }), hb;
        const eb = this._def;
        null !== eb.minSize && Mb.data.size < eb.minSize.value && (sb(Mb, {
          code: Ub.too_small,
          minimum: eb.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: eb.minSize.message
        }), wb.JC()), null !== eb.maxSize && Mb.data.size > eb.maxSize.value && (sb(Mb, {
          code: Ub.too_big,
          maximum: eb.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: eb.maxSize.message
        }), wb.JC());
        const Hb = this._def.valueType;

        function pb(bb) {
          const Mb = new Set;
          for (const eb of bb) {
            if ("aborted" === eb.status) return hb;
            "JC" === eb.status && wb.JC(), Mb.add(eb.value)
          }
          return {
            status: wb.value,
            value: Mb
          }
        }
        const Vb = [...Mb.data.values()].map(((bb, wb) => Hb._parse(new Db(Mb, bb, Mb.path, wb))));
        return Mb.common.async ? Promise.all(Vb).then((bb => pb(bb))) : pb(Vb)
      }
      min(bb, wb) {
        return new Uw({
          ...this._def,
          minSize: {
            value: bb,
            message: Rb.toString(wb)
          }
        })
      }
      max(bb, wb) {
        return new Uw({
          ...this._def,
          maxSize: {
            value: bb,
            message: Rb.toString(wb)
          }
        })
      }
      size(bb, wb) {
        return this.min(bb, wb).max(bb, wb)
      }
      nonempty(bb) {
        return this.min(1, bb)
      }
    }
    Uw.create = (bb, wb) => new Uw({
      valueType: bb,
      minSize: null,
      maxSize: null,
      typeName: Aw.ZodSet,
      ...Yb(wb)
    });
    class tw extends Zb {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(bb) {
        const {
          ctx: wb
        } = this._processInputParams(bb);
        if (wb.parsedType !== Ib.function) return sb(wb, {
          code: Ub.invalid_type,
          expected: Ib.function,
          received: wb.parsedType
        }), hb;

        function Mb(bb, Mb) {
          return Bb({
            data: bb,
            path: wb.path,
            errorMaps: [wb.common.contextualErrorMap, wb.schemaErrorMap, Fb(), Cb].filter((bb => !!bb)),
            issueData: {
              code: Ub.invalid_arguments,
              argumentsError: Mb
            }
          })
        }

        function eb(bb, Mb) {
          return Bb({
            data: bb,
            path: wb.path,
            errorMaps: [wb.common.contextualErrorMap, wb.schemaErrorMap, Fb(), Cb].filter((bb => !!bb)),
            issueData: {
              code: Ub.invalid_return_type,
              returnTypeError: Mb
            }
          })
        }
        const Hb = {
            errorMap: wb.common.contextualErrorMap
          },
          pb = wb.data;
        if (this._def.returns instanceof mw) {
          const bb = this;
          return Xb((async function() {
            for (var wb = arguments.length, Vb = new Array(wb), gb = 0; gb < wb; gb++) Vb[gb] = arguments[gb];
            const lb = new tb([]),
              Lb = await bb._def.args.parseAsync(Vb, Hb).catch((bb => {
                throw lb.addIssue(Mb(Vb, bb)), lb
              })),
              Ib = await Reflect.apply(pb, this, Lb);
            return await bb._def.returns._def.type.parseAsync(Ib, Hb).catch((bb => {
              throw lb.addIssue(eb(Ib, bb)), lb
            }))
          }))
        } {
          const bb = this;
          return Xb((function() {
            for (var wb = arguments.length, Vb = new Array(wb), gb = 0; gb < wb; gb++) Vb[gb] = arguments[gb];
            const lb = bb._def.args.safeParse(Vb, Hb);
            if (!lb.success) throw new tb([Mb(Vb, lb.error)]);
            const Lb = Reflect.apply(pb, this, lb.data),
              Ib = bb._def.returns.safeParse(Lb, Hb);
            if (!Ib.success) throw new tb([eb(Lb, Ib.error)]);
            return Ib.data
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
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        return new tw({
          ...this._def,
          args: Lw.create(wb).rest(Tb.create())
        })
      }
      returns(bb) {
        return new tw({
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
      static create(bb, wb, Mb) {
        return new tw({
          args: bb || Lw.create([]).rest(Tb.create()),
          returns: wb || Tb.create(),
          typeName: Aw.ZodFunction,
          ...Yb(Mb)
        })
      }
    }
    class Cw extends Zb {
      get schema() {
        return this._def.getter()
      }
      _parse(bb) {
        const {
          ctx: wb
        } = this._processInputParams(bb);
        return this._def.getter()._parse({
          data: wb.data,
          path: wb.path,
          parent: wb
        })
      }
    }
    Cw.create = (bb, wb) => new Cw({
      getter: bb,
      typeName: Aw.ZodLazy,
      ...Yb(wb)
    });
    class Ew extends Zb {
      _parse(bb) {
        if (bb.data !== this._def.value) {
          const wb = this._getOrReturnCtx(bb);
          return sb(wb, {
            received: wb.data,
            code: Ub.invalid_literal,
            expected: this._def.value
          }), hb
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

    function Fw(bb, wb) {
      return new Bw({
        values: bb,
        typeName: Aw.ZodEnum,
        ...Yb(wb)
      })
    }
    Ew.create = (bb, wb) => new Ew({
      value: bb,
      typeName: Aw.ZodLiteral,
      ...Yb(wb)
    });
    class Bw extends Zb {
      _parse(bb) {
        if ("string" !== typeof bb.data) {
          const wb = this._getOrReturnCtx(bb),
            Mb = this._def.values;
          return sb(wb, {
            expected: gb.joinValues(Mb),
            received: wb.parsedType,
            code: Ub.invalid_type
          }), hb
        }
        if (-1 === this._def.values.indexOf(bb.data)) {
          const wb = this._getOrReturnCtx(bb),
            Mb = this._def.values;
          return sb(wb, {
            received: wb.data,
            code: Ub.invalid_enum_value,
            options: Mb
          }), hb
        }
        return Xb(bb.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const bb = {};
        for (const wb of this._def.values) bb[wb] = wb;
        return bb
      }
      get Values() {
        const bb = {};
        for (const wb of this._def.values) bb[wb] = wb;
        return bb
      }
      get Enum() {
        const bb = {};
        for (const wb of this._def.values) bb[wb] = wb;
        return bb
      }
      extract(bb) {
        return Bw.create(bb)
      }
      exclude(bb) {
        return Bw.create(this.options.filter((wb => !bb.includes(wb))))
      }
    }
    Bw.create = Fw;
    class sw extends Zb {
      _parse(bb) {
        const wb = gb.getValidEnumValues(this._def.values),
          Mb = this._getOrReturnCtx(bb);
        if (Mb.parsedType !== Ib.string && Mb.parsedType !== Ib.number) {
          const bb = gb.objectValues(wb);
          return sb(Mb, {
            expected: gb.joinValues(bb),
            received: Mb.parsedType,
            code: Ub.invalid_type
          }), hb
        }
        if (-1 === wb.indexOf(bb.data)) {
          const bb = gb.objectValues(wb);
          return sb(Mb, {
            received: Mb.data,
            code: Ub.invalid_enum_value,
            options: bb
          }), hb
        }
        return Xb(bb.data)
      }
      get enum() {
        return this._def.values
      }
    }
    sw.create = (bb, wb) => new sw({
      values: bb,
      typeName: Aw.ZodNativeEnum,
      ...Yb(wb)
    });
    class mw extends Zb {
      unwrap() {
        return this._def.type
      }
      _parse(bb) {
        const {
          ctx: wb
        } = this._processInputParams(bb);
        if (wb.parsedType !== Ib.promise && !1 === wb.common.async) return sb(wb, {
          code: Ub.invalid_type,
          expected: Ib.promise,
          received: wb.parsedType
        }), hb;
        const Mb = wb.parsedType === Ib.promise ? wb.data : Promise.resolve(wb.data);
        return Xb(Mb.then((bb => this._def.type.parseAsync(bb, {
          path: wb.path,
          errorMap: wb.common.contextualErrorMap
        }))))
      }
    }
    mw.create = (bb, wb) => new mw({
      type: bb,
      typeName: Aw.ZodPromise,
      ...Yb(wb)
    });
    class hw extends Zb {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === Aw.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(bb) {
        const {
          status: wb,
          ctx: Mb
        } = this._processInputParams(bb), eb = this._def.effect || null, Hb = {
          addIssue: bb => {
            sb(Mb, bb), bb.fatal ? wb.abort() : wb.JC()
          },
          get path() {
            return Mb.path
          }
        };
        if (Hb.addIssue = Hb.addIssue.bind(Hb), "preprocess" === eb.type) {
          const bb = eb.transform(Mb.data, Hb);
          return Mb.common.issues.length ? {
            status: "JC",
            value: Mb.data
          } : Mb.common.async ? Promise.resolve(bb).then((bb => this._def.schema._parseAsync({
            data: bb,
            path: Mb.path,
            parent: Mb
          }))) : this._def.schema._parseSync({
            data: bb,
            path: Mb.path,
            parent: Mb
          })
        }
        if ("refinement" === eb.type) {
          const bb = bb => {
            const wb = eb.refinement(bb, Hb);
            if (Mb.common.async) return Promise.resolve(wb);
            if (wb instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return bb
          };
          if (!1 === Mb.common.async) {
            const eb = this._def.schema._parseSync({
              data: Mb.data,
              path: Mb.path,
              parent: Mb
            });
            return "aborted" === eb.status ? hb : ("JC" === eb.status && wb.JC(), bb(eb.value), {
              status: wb.value,
              value: eb.value
            })
          }
          return this._def.schema._parseAsync({
            data: Mb.data,
            path: Mb.path,
            parent: Mb
          }).then((Mb => "aborted" === Mb.status ? hb : ("JC" === Mb.status && wb.JC(), bb(Mb.value).then((() => ({
            status: wb.value,
            value: Mb.value
          }))))))
        }
        if ("transform" === eb.type) {
          if (!1 === Mb.common.async) {
            const bb = this._def.schema._parseSync({
              data: Mb.data,
              path: Mb.path,
              parent: Mb
            });
            if (!Kb(bb)) return bb;
            const pb = eb.transform(bb.value, Hb);
            if (pb instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: wb.value,
              value: pb
            }
          }
          return this._def.schema._parseAsync({
            data: Mb.data,
            path: Mb.path,
            parent: Mb
          }).then((bb => Kb(bb) ? Promise.resolve(eb.transform(bb.value, Hb)).then((bb => ({
            status: wb.value,
            value: bb
          }))) : bb))
        }
        gb.assertNever(eb)
      }
    }
    hw.create = (bb, wb, Mb) => new hw({
      schema: bb,
      typeName: Aw.ZodEffects,
      effect: wb,
      ...Yb(Mb)
    }), hw.createWithPreprocess = (bb, wb, Mb) => new hw({
      schema: wb,
      effect: {
        type: "preprocess",
        transform: bb
      },
      typeName: Aw.ZodEffects,
      ...Yb(Mb)
    });
    class zw extends Zb {
      _parse(bb) {
        return this._getType(bb) === Ib.undefined ? Xb(void 0) : this._def.innerType._parse(bb)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    zw.create = (bb, wb) => new zw({
      innerType: bb,
      typeName: Aw.ZodOptional,
      ...Yb(wb)
    });
    class Xw extends Zb {
      _parse(bb) {
        return this._getType(bb) === Ib.null ? Xb(null) : this._def.innerType._parse(bb)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Xw.create = (bb, wb) => new Xw({
      innerType: bb,
      typeName: Aw.ZodNullable,
      ...Yb(wb)
    });
    class xw extends Zb {
      _parse(bb) {
        const {
          ctx: wb
        } = this._processInputParams(bb);
        let Mb = wb.data;
        return wb.parsedType === Ib.undefined && (Mb = this._def.defaultValue()), this._def.innerType._parse({
          data: Mb,
          path: wb.path,
          parent: wb
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    xw.create = (bb, wb) => new xw({
      innerType: bb,
      typeName: Aw.ZodDefault,
      defaultValue: "function" === typeof wb.default ? wb.default : () => wb.default,
      ...Yb(wb)
    });
    class jw extends Zb {
      _parse(bb) {
        const {
          ctx: wb
        } = this._processInputParams(bb), Mb = {
          ...wb,
          common: {
            ...wb.common,
            issues: []
          }
        }, eb = this._def.innerType._parse({
          data: Mb.data,
          path: Mb.path,
          parent: {
            ...Mb
          }
        });
        return rb(eb) ? eb.then((bb => ({
          status: "valid",
          value: "valid" === bb.status ? bb.value : this._def.catchValue({
            get error() {
              return new tb(Mb.common.issues)
            },
            input: Mb.data
          })
        }))) : {
          status: "valid",
          value: "valid" === eb.status ? eb.value : this._def.catchValue({
            get error() {
              return new tb(Mb.common.issues)
            },
            input: Mb.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    jw.create = (bb, wb) => new jw({
      innerType: bb,
      typeName: Aw.ZodCatch,
      catchValue: "function" === typeof wb.catch ? wb.catch : () => wb.catch,
      ...Yb(wb)
    });
    class Kw extends Zb {
      _parse(bb) {
        if (this._getType(bb) !== Ib.nan) {
          const wb = this._getOrReturnCtx(bb);
          return sb(wb, {
            code: Ub.invalid_type,
            expected: Ib.nan,
            received: wb.parsedType
          }), hb
        }
        return {
          status: "valid",
          value: bb.data
        }
      }
    }
    Kw.create = bb => new Kw({
      typeName: Aw.ZodNaN,
      ...Yb(bb)
    });
    const rw = Symbol("zod_brand");
    class Rw extends Zb {
      _parse(bb) {
        const {
          ctx: wb
        } = this._processInputParams(bb), Mb = wb.data;
        return this._def.type._parse({
          data: Mb,
          path: wb.path,
          parent: wb
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class Dw extends Zb {
      _parse(bb) {
        const {
          status: wb,
          ctx: Mb
        } = this._processInputParams(bb);
        if (Mb.common.async) {
          return (async () => {
            const bb = await this._def.in._parseAsync({
              data: Mb.data,
              path: Mb.path,
              parent: Mb
            });
            return "aborted" === bb.status ? hb : "JC" === bb.status ? (wb.JC(), zb(bb.value)) : this._def.out._parseAsync({
              data: bb.value,
              path: Mb.path,
              parent: Mb
            })
          })()
        } {
          const bb = this._def.in._parseSync({
            data: Mb.data,
            path: Mb.path,
            parent: Mb
          });
          return "aborted" === bb.status ? hb : "JC" === bb.status ? (wb.JC(), {
            status: "JC",
            value: bb.value
          }) : this._def.out._parseSync({
            data: bb.value,
            path: Mb.path,
            parent: Mb
          })
        }
      }
      static create(bb, wb) {
        return new Dw({
          in: bb,
          out: wb,
          typeName: Aw.ZodPipeline
        })
      }
    }
    class Yw extends Zb {
      _parse(bb) {
        const wb = this._def.innerType._parse(bb);
        return Kb(wb) && (wb.value = Object.freeze(wb.value)), wb
      }
    }
    Yw.create = (bb, wb) => new Yw({
      innerType: bb,
      typeName: Aw.ZodReadonly,
      ...Yb(wb)
    });
    const Zw = function(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        return bb ? ob.create().superRefine(((eb, Hb) => {
          var pb, Vb;
          if (!bb(eb)) {
            const bb = "function" === typeof wb ? wb(eb) : "string" === typeof wb ? {
                message: wb
              } : wb,
              gb = null === (Vb = null !== (pb = bb.fatal) && void 0 !== pb ? pb : Mb) || void 0 === Vb || Vb,
              lb = "string" === typeof bb ? {
                message: bb
              } : bb;
            Hb.addIssue({
              code: "custom",
              ...lb,
              fatal: gb
            })
          }
        })) : ob.create()
      },
      fw = {
        object: ew.lazycreate
      };
    var Aw;
    ! function(bb) {
      bb.ZodString = "ZodString", bb.ZodNumber = "ZodNumber", bb.ZodNaN = "ZodNaN", bb.ZodBigInt = "ZodBigInt", bb.ZodBoolean = "ZodBoolean", bb.ZodDate = "ZodDate", bb.ZodSymbol = "ZodSymbol", bb.ZodUndefined = "ZodUndefined", bb.ZodNull = "ZodNull", bb.ZodAny = "ZodAny", bb.ZodUnknown = "ZodUnknown", bb.ZodNever = "ZodNever", bb.ZodVoid = "ZodVoid", bb.ZodArray = "ZodArray", bb.ZodObject = "ZodObject", bb.ZodUnion = "ZodUnion", bb.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", bb.ZodIntersection = "ZodIntersection", bb.ZodTuple = "ZodTuple", bb.ZodRecord = "ZodRecord", bb.ZodMap = "ZodMap", bb.ZodSet = "ZodSet", bb.ZodFunction = "ZodFunction", bb.ZodLazy = "ZodLazy", bb.ZodLiteral = "ZodLiteral", bb.ZodEnum = "ZodEnum", bb.ZodEffects = "ZodEffects", bb.ZodNativeEnum = "ZodNativeEnum", bb.ZodOptional = "ZodOptional", bb.ZodNullable = "ZodNullable", bb.ZodDefault = "ZodDefault", bb.ZodCatch = "ZodCatch", bb.ZodPromise = "ZodPromise", bb.ZodBranded = "ZodBranded", bb.ZodPipeline = "ZodPipeline", bb.ZodReadonly = "ZodReadonly"
    }(Aw || (Aw = {}));
    const Ww = Gb.create,
      Jw = ab.create,
      Sw = Kw.create,
      Nw = ib.create,
      vw = ub.create,
      Qw = db.create,
      Gw = Pb.create,
      qw = nb.create,
      aw = yb.create,
      iw = ob.create,
      uw = Tb.create,
      dw = kb.create,
      Pw = bw.create,
      nw = ww.create,
      yw = ew.create,
      ow = ew.strictCreate,
      Tw = Hw.create,
      kw = Vw.create,
      bM = lw.create,
      wM = Lw.create,
      MM = Iw.create,
      eM = Ow.create,
      HM = Uw.create,
      pM = tw.create,
      VM = Cw.create,
      gM = Ew.create,
      lM = Bw.create,
      LM = sw.create,
      IM = mw.create,
      OM = hw.create,
      UM = zw.create,
      tM = Xw.create,
      CM = hw.createWithPreprocess,
      EM = Dw.create,
      FM = {
        string: bb => Gb.create({
          ...bb,
          coerce: !0
        }),
        number: bb => ab.create({
          ...bb,
          coerce: !0
        }),
        boolean: bb => ub.create({
          ...bb,
          coerce: !0
        }),
        bigint: bb => ib.create({
          ...bb,
          coerce: !0
        }),
        date: bb => db.create({
          ...bb,
          coerce: !0
        })
      },
      BM = hb;
    var sM = Object.freeze({
        __proto__: null,
        defaultErrorMap: Cb,
        setErrorMap: function(bb) {
          Eb = bb
        },
        getErrorMap: Fb,
        makeIssue: Bb,
        EMPTY_PATH: [],
        addIssueToContext: sb,
        ParseStatus: mb,
        INVALID: hb,
        DIRTY: zb,
        OK: Xb,
        isAborted: xb,
        isDirty: jb,
        isValid: Kb,
        isAsync: rb,
        get util() {
          return gb
        },
        get objectUtil() {
          return lb
        },
        ZodParsedType: Ib,
        getParsedType: Ob,
        ZodType: Zb,
        ZodString: Gb,
        ZodNumber: ab,
        ZodBigInt: ib,
        ZodBoolean: ub,
        ZodDate: db,
        ZodSymbol: Pb,
        ZodUndefined: nb,
        ZodNull: yb,
        ZodAny: ob,
        ZodUnknown: Tb,
        ZodNever: kb,
        ZodVoid: bw,
        ZodArray: ww,
        ZodObject: ew,
        ZodUnion: Hw,
        ZodDiscriminatedUnion: Vw,
        ZodIntersection: lw,
        ZodTuple: Lw,
        ZodRecord: Iw,
        ZodMap: Ow,
        ZodSet: Uw,
        ZodFunction: tw,
        ZodLazy: Cw,
        ZodLiteral: Ew,
        ZodEnum: Bw,
        ZodNativeEnum: sw,
        ZodPromise: mw,
        ZodEffects: hw,
        ZodTransformer: hw,
        ZodOptional: zw,
        ZodNullable: Xw,
        ZodDefault: xw,
        ZodCatch: jw,
        ZodNaN: Kw,
        BRAND: rw,
        ZodBranded: Rw,
        ZodPipeline: Dw,
        ZodReadonly: Yw,
        custom: Zw,
        Schema: Zb,
        ZodSchema: Zb,
        late: fw,
        get ZodFirstPartyTypeKind() {
          return Aw
        },
        coerce: FM,
        any: iw,
        array: nw,
        bigint: Nw,
        boolean: vw,
        date: Qw,
        discriminatedUnion: kw,
        effect: OM,
        enum: lM,
        function: pM,
        instanceof: function(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${bb.name}`
          };
          return Zw((wb => wb instanceof bb), wb)
        },
        intersection: bM,
        lazy: VM,
        literal: gM,
        map: eM,
        nan: Sw,
        nativeEnum: LM,
        never: dw,
        null: aw,
        nullable: tM,
        number: Jw,
        object: yw,
        oboolean: () => vw().optional(),
        onumber: () => Jw().optional(),
        optional: UM,
        ostring: () => Ww().optional(),
        pipeline: EM,
        preprocess: CM,
        promise: IM,
        record: MM,
        set: HM,
        strictObject: ow,
        string: Ww,
        symbol: Gw,
        transformer: OM,
        tuple: wM,
        undefined: qw,
        union: Tw,
        unknown: uw,
        void: Pw,
        NEVER: BM,
        ZodIssueCode: Ub,
        quotelessJson: bb => JSON.stringify(bb, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: tb
      }),
      mM = {
        exports: {}
      };
    ! function(bb) {
      var wb = function(bb) {
        var Mb = 1e7,
          eb = 9007199254740992,
          Hb = Ub(eb),
          pb = "0123456789abcdefghijklmnopqrstuvwxyz",
          Vb = "function" === typeof BigInt;

        function gb(bb, wb, Mb, eb) {
          return "undefined" === typeof bb ? gb[0] : "undefined" !== typeof wb && (10 !== +wb || Mb) ? ub(bb, wb, Mb, eb) : ob(bb)
        }

        function lb(bb, wb) {
          this.value = bb, this.sign = wb, this.isSmall = !1
        }

        function Lb(bb) {
          this.value = bb, this.sign = bb < 0, this.isSmall = !0
        }

        function Ib(bb) {
          this.value = bb
        }

        function Ob(bb) {
          return -eb < bb && bb < eb
        }

        function Ub(bb) {
          return bb < 1e7 ? [bb] : bb < 1e14 ? [bb % 1e7, Math.floor(bb / 1e7)] : [bb % 1e7, Math.floor(bb / 1e7) % 1e7, Math.floor(bb / 1e14)]
        }

        function tb(bb) {
          Cb(bb);
          var wb = bb.length;
          if (wb < 4 && Yb(bb, Hb) < 0) switch (wb) {
            case 0:
              return 0;
            case 1:
              return bb[0];
            case 2:
              return bb[0] + bb[1] * Mb;
            default:
              return bb[0] + (bb[1] + bb[2] * Mb) * Mb
          }
          return bb
        }

        function Cb(bb) {
          for (var wb = bb.length; 0 === bb[--wb];);
          bb.length = wb + 1
        }

        function Eb(bb) {
          for (var wb = new Array(bb), Mb = -1; ++Mb < bb;) wb[Mb] = 0;
          return wb
        }

        function Fb(bb) {
          return bb > 0 ? Math.floor(bb) : Math.ceil(bb)
        }

        function Bb(bb, wb) {
          var eb, Hb, pb = bb.length,
            Vb = wb.length,
            gb = new Array(pb),
            lb = 0,
            Lb = Mb;
          for (Hb = 0; Hb < Vb; Hb++) lb = (eb = bb[Hb] + wb[Hb] + lb) >= Lb ? 1 : 0, gb[Hb] = eb - lb * Lb;
          for (; Hb < pb;) lb = (eb = bb[Hb] + lb) === Lb ? 1 : 0, gb[Hb++] = eb - lb * Lb;
          return lb > 0 && gb.push(lb), gb
        }

        function sb(bb, wb) {
          return bb.length >= wb.length ? Bb(bb, wb) : Bb(wb, bb)
        }

        function mb(bb, wb) {
          var eb, Hb, pb = bb.length,
            Vb = new Array(pb),
            gb = Mb;
          for (Hb = 0; Hb < pb; Hb++) eb = bb[Hb] - gb + wb, wb = Math.floor(eb / gb), Vb[Hb] = eb - wb * gb, wb += 1;
          for (; wb > 0;) Vb[Hb++] = wb % gb, wb = Math.floor(wb / gb);
          return Vb
        }

        function hb(bb, wb) {
          var eb, Hb, pb = bb.length,
            Vb = wb.length,
            gb = new Array(pb),
            lb = 0,
            Lb = Mb;
          for (eb = 0; eb < Vb; eb++)(Hb = bb[eb] - lb - wb[eb]) < 0 ? (Hb += Lb, lb = 1) : lb = 0, gb[eb] = Hb;
          for (eb = Vb; eb < pb; eb++) {
            if (!((Hb = bb[eb] - lb) < 0)) {
              gb[eb++] = Hb;
              break
            }
            Hb += Lb, gb[eb] = Hb
          }
          for (; eb < pb; eb++) gb[eb] = bb[eb];
          return Cb(gb), gb
        }

        function zb(bb, wb, eb) {
          var Hb, pb, Vb = bb.length,
            gb = new Array(Vb),
            Ib = -wb,
            Ob = Mb;
          for (Hb = 0; Hb < Vb; Hb++) pb = bb[Hb] + Ib, Ib = Math.floor(pb / Ob), pb %= Ob, gb[Hb] = pb < 0 ? pb + Ob : pb;
          return "number" === typeof(gb = tb(gb)) ? (eb && (gb = -gb), new Lb(gb)) : new lb(gb, eb)
        }

        function Xb(bb, wb) {
          var eb, Hb, pb, Vb, gb = bb.length,
            lb = wb.length,
            Lb = Eb(gb + lb),
            Ib = Mb;
          for (pb = 0; pb < gb; ++pb) {
            Vb = bb[pb];
            for (var Ob = 0; Ob < lb; ++Ob) eb = Vb * wb[Ob] + Lb[pb + Ob], Hb = Math.floor(eb / Ib), Lb[pb + Ob] = eb - Hb * Ib, Lb[pb + Ob + 1] += Hb
          }
          return Cb(Lb), Lb
        }

        function xb(bb, wb) {
          var eb, Hb, pb = bb.length,
            Vb = new Array(pb),
            gb = Mb,
            lb = 0;
          for (Hb = 0; Hb < pb; Hb++) eb = bb[Hb] * wb + lb, lb = Math.floor(eb / gb), Vb[Hb] = eb - lb * gb;
          for (; lb > 0;) Vb[Hb++] = lb % gb, lb = Math.floor(lb / gb);
          return Vb
        }

        function jb(bb, wb) {
          for (var Mb = []; wb-- > 0;) Mb.push(0);
          return Mb.concat(bb)
        }

        function Kb(bb, wb) {
          var Mb = Math.max(bb.length, wb.length);
          if (Mb <= 30) return Xb(bb, wb);
          Mb = Math.ceil(Mb / 2);
          var eb = bb.slice(Mb),
            Hb = bb.slice(0, Mb),
            pb = wb.slice(Mb),
            Vb = wb.slice(0, Mb),
            gb = Kb(Hb, Vb),
            lb = Kb(eb, pb),
            Lb = Kb(sb(Hb, eb), sb(Vb, pb)),
            Ib = sb(sb(gb, jb(hb(hb(Lb, gb), lb), Mb)), jb(lb, 2 * Mb));
          return Cb(Ib), Ib
        }

        function rb(bb, wb, eb) {
          return new lb(bb < Mb ? xb(wb, bb) : Xb(wb, Ub(bb)), eb)
        }

        function Rb(bb) {
          var wb, eb, Hb, pb, Vb = bb.length,
            gb = Eb(Vb + Vb),
            lb = Mb;
          for (Hb = 0; Hb < Vb; Hb++) {
            eb = 0 - (pb = bb[Hb]) * pb;
            for (var Lb = Hb; Lb < Vb; Lb++) wb = pb * bb[Lb] * 2 + gb[Hb + Lb] + eb, eb = Math.floor(wb / lb), gb[Hb + Lb] = wb - eb * lb;
            gb[Hb + Vb] = eb
          }
          return Cb(gb), gb
        }

        function Db(bb, wb) {
          var eb, Hb, pb, Vb, gb = bb.length,
            lb = Eb(gb),
            Lb = Mb;
          for (pb = 0, eb = gb - 1; eb >= 0; --eb) pb = (Vb = pb * Lb + bb[eb]) - (Hb = Fb(Vb / wb)) * wb, lb[eb] = 0 | Hb;
          return [lb, 0 | pb]
        }

        function cb(bb, wb) {
          var eb, Hb = ob(wb);
          if (Vb) return [new Ib(bb.value / Hb.value), new Ib(bb.value % Hb.value)];
          var pb, Ob = bb.value,
            Bb = Hb.value;
          if (0 === Bb) throw new Error("Cannot divide by zero");
          if (bb.isSmall) return Hb.isSmall ? [new Lb(Fb(Ob / Bb)), new Lb(Ob % Bb)] : [gb[0], bb];
          if (Hb.isSmall) {
            if (1 === Bb) return [bb, gb[0]];
            if (-1 == Bb) return [bb.oE(), gb[0]];
            var sb = Math.abs(Bb);
            if (sb < Mb) {
              pb = tb((eb = Db(Ob, sb))[0]);
              var mb = eb[1];
              return bb.sign && (mb = -mb), "number" === typeof pb ? (bb.sign !== Hb.sign && (pb = -pb), [new Lb(pb), new Lb(mb)]) : [new lb(pb, bb.sign !== Hb.sign), new Lb(mb)]
            }
            Bb = Ub(sb)
          }
          var zb = Yb(Ob, Bb);
          if (-1 === zb) return [gb[0], bb];
          if (0 === zb) return [gb[bb.sign === Hb.sign ? 1 : -1], gb[0]];
          eb = Ob.length + Bb.length <= 200 ? function(bb, wb) {
            var eb, Hb, pb, Vb, gb, lb, Lb, Ib = bb.length,
              Ob = wb.length,
              Ub = Mb,
              Cb = Eb(wb.length),
              Fb = wb[Ob - 1],
              Bb = Math.ceil(Ub / (2 * Fb)),
              sb = xb(bb, Bb),
              mb = xb(wb, Bb);
            for (sb.length <= Ib && sb.push(0), mb.push(0), Fb = mb[Ob - 1], Hb = Ib - Ob; Hb >= 0; Hb--) {
              for (eb = Ub - 1, sb[Hb + Ob] !== Fb && (eb = Math.floor((sb[Hb + Ob] * Ub + sb[Hb + Ob - 1]) / Fb)), pb = 0, Vb = 0, lb = mb.length, gb = 0; gb < lb; gb++) pb += eb * mb[gb], Lb = Math.floor(pb / Ub), Vb += sb[Hb + gb] - (pb - Lb * Ub), pb = Lb, Vb < 0 ? (sb[Hb + gb] = Vb + Ub, Vb = -1) : (sb[Hb + gb] = Vb, Vb = 0);
              for (; 0 !== Vb;) {
                for (eb -= 1, pb = 0, gb = 0; gb < lb; gb++)(pb += sb[Hb + gb] - Ub + mb[gb]) < 0 ? (sb[Hb + gb] = pb + Ub, pb = 0) : (sb[Hb + gb] = pb, pb = 1);
                Vb += pb
              }
              Cb[Hb] = eb
            }
            return sb = Db(sb, Bb)[0], [tb(Cb), tb(sb)]
          }(Ob, Bb) : function(bb, wb) {
            for (var eb, Hb, pb, Vb, gb, lb = bb.length, Lb = wb.length, Ib = [], Ob = [], Ub = Mb; lb;)
              if (Ob.unshift(bb[--lb]), Cb(Ob), Yb(Ob, wb) < 0) Ib.push(0);
              else {
                pb = Ob[(Hb = Ob.length) - 1] * Ub + Ob[Hb - 2], Vb = wb[Lb - 1] * Ub + wb[Lb - 2], Hb > Lb && (pb = (pb + 1) * Ub), eb = Math.ceil(pb / Vb);
                do {
                  if (Yb(gb = xb(wb, eb), Ob) <= 0) break;
                  eb--
                } while (eb);
                Ib.push(eb), Ob = hb(Ob, gb)
              } return Ib.reverse(), [tb(Ib), tb(Ob)]
          }(Ob, Bb), pb = eb[0];
          var Xb = bb.sign !== Hb.sign,
            jb = eb[1],
            Kb = bb.sign;
          return "number" === typeof pb ? (Xb && (pb = -pb), pb = new Lb(pb)) : pb = new lb(pb, Xb), "number" === typeof jb ? (Kb && (jb = -jb), jb = new Lb(jb)) : jb = new lb(jb, Kb), [pb, jb]
        }

        function Yb(bb, wb) {
          if (bb.length !== wb.length) return bb.length > wb.length ? 1 : -1;
          for (var Mb = bb.length - 1; Mb >= 0; Mb--)
            if (bb[Mb] !== wb[Mb]) return bb[Mb] > wb[Mb] ? 1 : -1;
          return 0
        }

        function Zb(bb) {
          var wb = bb.abs();
          return !wb.isUnit() && (!!(wb.equals(2) || wb.equals(3) || wb.equals(5)) || !(wb.isEven() || wb.isDivisibleBy(3) || wb.isDivisibleBy(5)) && (!!wb.lesser(49) || void 0))
        }

        function fb(bb, Mb) {
          for (var eb, Hb, pb, Vb = bb.prev(), gb = Vb, lb = 0; gb.isEven();) gb = gb.divide(2), lb++;
          bb: for (Hb = 0; Hb < Mb.length; Hb++)
            if (!bb.lesser(Mb[Hb]) && !(pb = wb(Mb[Hb]).modPow(gb, bb)).isUnit() && !pb.equals(Vb)) {
              for (eb = lb - 1; 0 != eb; eb--) {
                if ((pb = pb.square().mod(bb)).isUnit()) return !1;
                if (pb.equals(Vb)) continue bb
              }
              return !1
            }
          return !0
        }
        lb.prototype = Object.create(gb.prototype), Lb.prototype = Object.create(gb.prototype), Ib.prototype = Object.create(gb.prototype), lb.prototype.add = function(bb) {
          var wb = ob(bb);
          if (this.sign !== wb.sign) return this.subtract(wb.oE());
          var Mb = this.value,
            eb = wb.value;
          return wb.isSmall ? new lb(mb(Mb, Math.abs(eb)), this.sign) : new lb(sb(Mb, eb), this.sign)
        }, lb.prototype.plus = lb.prototype.add, Lb.prototype.add = function(bb) {
          var wb = ob(bb),
            Mb = this.value;
          if (Mb < 0 !== wb.sign) return this.subtract(wb.oE());
          var eb = wb.value;
          if (wb.isSmall) {
            if (Ob(Mb + eb)) return new Lb(Mb + eb);
            eb = Ub(Math.abs(eb))
          }
          return new lb(mb(eb, Math.abs(Mb)), Mb < 0)
        }, Lb.prototype.plus = Lb.prototype.add, Ib.prototype.add = function(bb) {
          return new Ib(this.value + ob(bb).value)
        }, Ib.prototype.plus = Ib.prototype.add, lb.prototype.subtract = function(bb) {
          var wb = ob(bb);
          if (this.sign !== wb.sign) return this.add(wb.oE());
          var Mb = this.value,
            eb = wb.value;
          return wb.isSmall ? zb(Mb, Math.abs(eb), this.sign) : function(bb, wb, Mb) {
            var eb;
            return Yb(bb, wb) >= 0 ? eb = hb(bb, wb) : (eb = hb(wb, bb), Mb = !Mb), "number" === typeof(eb = tb(eb)) ? (Mb && (eb = -eb), new Lb(eb)) : new lb(eb, Mb)
          }(Mb, eb, this.sign)
        }, lb.prototype.minus = lb.prototype.subtract, Lb.prototype.subtract = function(bb) {
          var wb = ob(bb),
            Mb = this.value;
          if (Mb < 0 !== wb.sign) return this.add(wb.oE());
          var eb = wb.value;
          return wb.isSmall ? new Lb(Mb - eb) : zb(eb, Math.abs(Mb), Mb >= 0)
        }, Lb.prototype.minus = Lb.prototype.subtract, Ib.prototype.subtract = function(bb) {
          return new Ib(this.value - ob(bb).value)
        }, Ib.prototype.minus = Ib.prototype.subtract, lb.prototype.oE = function() {
          return new lb(this.value, !this.sign)
        }, Lb.prototype.oE = function() {
          var bb = this.sign,
            wb = new Lb(-this.value);
          return wb.sign = !bb, wb
        }, Ib.prototype.oE = function() {
          return new Ib(-this.value)
        }, lb.prototype.abs = function() {
          return new lb(this.value, !1)
        }, Lb.prototype.abs = function() {
          return new Lb(Math.abs(this.value))
        }, Ib.prototype.abs = function() {
          return new Ib(this.value >= 0 ? this.value : -this.value)
        }, lb.prototype.multiply = function(bb) {
          var wb, eb, Hb, pb = ob(bb),
            Vb = this.value,
            Lb = pb.value,
            Ib = this.sign !== pb.sign;
          if (pb.isSmall) {
            if (0 === Lb) return gb[0];
            if (1 === Lb) return this;
            if (-1 === Lb) return this.oE();
            if ((wb = Math.abs(Lb)) < Mb) return new lb(xb(Vb, wb), Ib);
            Lb = Ub(wb)
          }
          return eb = Vb.length, Hb = Lb.length, new lb(-.012 * eb - .012 * Hb + 15e-6 * eb * Hb > 0 ? Kb(Vb, Lb) : Xb(Vb, Lb), Ib)
        }, lb.prototype.times = lb.prototype.multiply, Lb.prototype._multiplyBySmall = function(bb) {
          return Ob(bb.value * this.value) ? new Lb(bb.value * this.value) : rb(Math.abs(bb.value), Ub(Math.abs(this.value)), this.sign !== bb.sign)
        }, lb.prototype._multiplyBySmall = function(bb) {
          return 0 === bb.value ? gb[0] : 1 === bb.value ? this : -1 === bb.value ? this.oE() : rb(Math.abs(bb.value), this.value, this.sign !== bb.sign)
        }, Lb.prototype.multiply = function(bb) {
          return ob(bb)._multiplyBySmall(this)
        }, Lb.prototype.times = Lb.prototype.multiply, Ib.prototype.multiply = function(bb) {
          return new Ib(this.value * ob(bb).value)
        }, Ib.prototype.times = Ib.prototype.multiply, lb.prototype.square = function() {
          return new lb(Rb(this.value), !1)
        }, Lb.prototype.square = function() {
          var bb = this.value * this.value;
          return Ob(bb) ? new Lb(bb) : new lb(Rb(Ub(Math.abs(this.value))), !1)
        }, Ib.prototype.square = function(bb) {
          return new Ib(this.value * this.value)
        }, lb.prototype.divmod = function(bb) {
          var wb = cb(this, bb);
          return {
            quotient: wb[0],
            remainder: wb[1]
          }
        }, Ib.prototype.divmod = Lb.prototype.divmod = lb.prototype.divmod, lb.prototype.divide = function(bb) {
          return cb(this, bb)[0]
        }, Ib.prototype.over = Ib.prototype.divide = function(bb) {
          return new Ib(this.value / ob(bb).value)
        }, Lb.prototype.over = Lb.prototype.divide = lb.prototype.over = lb.prototype.divide, lb.prototype.mod = function(bb) {
          return cb(this, bb)[1]
        }, Ib.prototype.mod = Ib.prototype.remainder = function(bb) {
          return new Ib(this.value % ob(bb).value)
        }, Lb.prototype.remainder = Lb.prototype.mod = lb.prototype.remainder = lb.prototype.mod, lb.prototype.pow = function(bb) {
          var wb, Mb, eb, Hb = ob(bb),
            pb = this.value,
            Vb = Hb.value;
          if (0 === Vb) return gb[1];
          if (0 === pb) return gb[0];
          if (1 === pb) return gb[1];
          if (-1 === pb) return Hb.isEven() ? gb[1] : gb[-1];
          if (Hb.sign) return gb[0];
          if (!Hb.isSmall) throw new Error("The exponent " + Hb.toString() + " is too large.");
          if (this.isSmall && Ob(wb = Math.pow(pb, Vb))) return new Lb(Fb(wb));
          for (Mb = this, eb = gb[1]; !0 & Vb && (eb = eb.times(Mb), --Vb), 0 !== Vb;) Vb /= 2, Mb = Mb.square();
          return eb
        }, Lb.prototype.pow = lb.prototype.pow, Ib.prototype.pow = function(bb) {
          var wb = ob(bb),
            Mb = this.value,
            eb = wb.value,
            Hb = BigInt(0),
            pb = BigInt(1),
            Vb = BigInt(2);
          if (eb === Hb) return gb[1];
          if (Mb === Hb) return gb[0];
          if (Mb === pb) return gb[1];
          if (Mb === BigInt(-1)) return wb.isEven() ? gb[1] : gb[-1];
          if (wb.isNegative()) return new Ib(Hb);
          for (var lb = this, Lb = gb[1];
            (eb & pb) === pb && (Lb = Lb.times(lb), --eb), eb !== Hb;) eb /= Vb, lb = lb.square();
          return Lb
        }, lb.prototype.modPow = function(bb, wb) {
          if (bb = ob(bb), (wb = ob(wb)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var Mb = gb[1],
            eb = this.mod(wb);
          for (bb.isNegative() && (bb = bb.multiply(gb[-1]), eb = eb.modInv(wb)); bb.isPositive();) {
            if (eb.isZero()) return gb[0];
            bb.isOdd() && (Mb = Mb.multiply(eb).mod(wb)), bb = bb.divide(2), eb = eb.square().mod(wb)
          }
          return Mb
        }, Ib.prototype.modPow = Lb.prototype.modPow = lb.prototype.modPow, lb.prototype.compareAbs = function(bb) {
          var wb = ob(bb),
            Mb = this.value,
            eb = wb.value;
          return wb.isSmall ? 1 : Yb(Mb, eb)
        }, Lb.prototype.compareAbs = function(bb) {
          var wb = ob(bb),
            Mb = Math.abs(this.value),
            eb = wb.value;
          return wb.isSmall ? Mb === (eb = Math.abs(eb)) ? 0 : Mb > eb ? 1 : -1 : -1
        }, Ib.prototype.compareAbs = function(bb) {
          var wb = this.value,
            Mb = ob(bb).value;
          return (wb = wb >= 0 ? wb : -wb) === (Mb = Mb >= 0 ? Mb : -Mb) ? 0 : wb > Mb ? 1 : -1
        }, lb.prototype.compare = function(bb) {
          if (bb === 1 / 0) return -1;
          if (bb === -1 / 0) return 1;
          var wb = ob(bb),
            Mb = this.value,
            eb = wb.value;
          return this.sign !== wb.sign ? wb.sign ? 1 : -1 : wb.isSmall ? this.sign ? -1 : 1 : Yb(Mb, eb) * (this.sign ? -1 : 1)
        }, lb.prototype.compareTo = lb.prototype.compare, Lb.prototype.compare = function(bb) {
          if (bb === 1 / 0) return -1;
          if (bb === -1 / 0) return 1;
          var wb = ob(bb),
            Mb = this.value,
            eb = wb.value;
          return wb.isSmall ? Mb == eb ? 0 : Mb > eb ? 1 : -1 : Mb < 0 !== wb.sign ? Mb < 0 ? -1 : 1 : Mb < 0 ? 1 : -1
        }, Lb.prototype.compareTo = Lb.prototype.compare, Ib.prototype.compare = function(bb) {
          if (bb === 1 / 0) return -1;
          if (bb === -1 / 0) return 1;
          var wb = this.value,
            Mb = ob(bb).value;
          return wb === Mb ? 0 : wb > Mb ? 1 : -1
        }, Ib.prototype.compareTo = Ib.prototype.compare, lb.prototype.equals = function(bb) {
          return 0 === this.compare(bb)
        }, Ib.prototype.eq = Ib.prototype.equals = Lb.prototype.eq = Lb.prototype.equals = lb.prototype.eq = lb.prototype.equals, lb.prototype.notEquals = function(bb) {
          return 0 !== this.compare(bb)
        }, Ib.prototype.neq = Ib.prototype.notEquals = Lb.prototype.neq = Lb.prototype.notEquals = lb.prototype.neq = lb.prototype.notEquals, lb.prototype.greater = function(bb) {
          return this.compare(bb) > 0
        }, Ib.prototype.gt = Ib.prototype.greater = Lb.prototype.gt = Lb.prototype.greater = lb.prototype.gt = lb.prototype.greater, lb.prototype.lesser = function(bb) {
          return this.compare(bb) < 0
        }, Ib.prototype.lt = Ib.prototype.lesser = Lb.prototype.lt = Lb.prototype.lesser = lb.prototype.lt = lb.prototype.lesser, lb.prototype.greaterOrEquals = function(bb) {
          return this.compare(bb) >= 0
        }, Ib.prototype.geq = Ib.prototype.greaterOrEquals = Lb.prototype.geq = Lb.prototype.greaterOrEquals = lb.prototype.geq = lb.prototype.greaterOrEquals, lb.prototype.lesserOrEquals = function(bb) {
          return this.compare(bb) <= 0
        }, Ib.prototype.leq = Ib.prototype.lesserOrEquals = Lb.prototype.leq = Lb.prototype.lesserOrEquals = lb.prototype.leq = lb.prototype.lesserOrEquals, lb.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, Lb.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, Ib.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, lb.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, Lb.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, Ib.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, lb.prototype.isPositive = function() {
          return !this.sign
        }, Lb.prototype.isPositive = function() {
          return this.value > 0
        }, Ib.prototype.isPositive = Lb.prototype.isPositive, lb.prototype.isNegative = function() {
          return this.sign
        }, Lb.prototype.isNegative = function() {
          return this.value < 0
        }, Ib.prototype.isNegative = Lb.prototype.isNegative, lb.prototype.isUnit = function() {
          return !1
        }, Lb.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, Ib.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, lb.prototype.isZero = function() {
          return !1
        }, Lb.prototype.isZero = function() {
          return 0 === this.value
        }, Ib.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, lb.prototype.isDivisibleBy = function(bb) {
          var wb = ob(bb);
          return !wb.isZero() && (!!wb.isUnit() || (0 === wb.compareAbs(2) ? this.isEven() : this.mod(wb).isZero()))
        }, Ib.prototype.isDivisibleBy = Lb.prototype.isDivisibleBy = lb.prototype.isDivisibleBy, lb.prototype.isPrime = function(Mb) {
          var eb = Zb(this);
          if (eb !== bb) return eb;
          var Hb = this.abs(),
            pb = Hb.bitLength();
          if (pb <= 64) return fb(Hb, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var Vb = Math.log(2) * pb.toJSNumber(), gb = Math.ceil(!0 === Mb ? 2 * Math.pow(Vb, 2) : Vb), lb = [], Lb = 0; Lb < gb; Lb++) lb.push(wb(Lb + 2));
          return fb(Hb, lb)
        }, Ib.prototype.isPrime = Lb.prototype.isPrime = lb.prototype.isPrime, lb.prototype.isProbablePrime = function(Mb, eb) {
          var Hb = Zb(this);
          if (Hb !== bb) return Hb;
          for (var pb = this.abs(), Vb = Mb === bb ? 5 : Mb, gb = [], lb = 0; lb < Vb; lb++) gb.push(wb.randBetween(2, pb.minus(2), eb));
          return fb(pb, gb)
        }, Ib.prototype.isProbablePrime = Lb.prototype.isProbablePrime = lb.prototype.isProbablePrime, lb.prototype.modInv = function(bb) {
          for (var Mb, eb, Hb, pb = wb.zero, Vb = wb.one, gb = ob(bb), lb = this.abs(); !lb.isZero();) Mb = gb.divide(lb), eb = pb, Hb = gb, pb = Vb, gb = lb, Vb = eb.subtract(Mb.multiply(Vb)), lb = Hb.subtract(Mb.multiply(lb));
          if (!gb.isUnit()) throw new Error(this.toString() + " and " + bb.toString() + " are not co-prime");
          return -1 === pb.compare(0) && (pb = pb.add(bb)), this.isNegative() ? pb.oE() : pb
        }, Ib.prototype.modInv = Lb.prototype.modInv = lb.prototype.modInv, lb.prototype.next = function() {
          var bb = this.value;
          return this.sign ? zb(bb, 1, this.sign) : new lb(mb(bb, 1), this.sign)
        }, Lb.prototype.next = function() {
          var bb = this.value;
          return bb + 1 < eb ? new Lb(bb + 1) : new lb(Hb, !1)
        }, Ib.prototype.next = function() {
          return new Ib(this.value + BigInt(1))
        }, lb.prototype.prev = function() {
          var bb = this.value;
          return this.sign ? new lb(mb(bb, 1), !0) : zb(bb, 1, this.sign)
        }, Lb.prototype.prev = function() {
          var bb = this.value;
          return bb - 1 > -eb ? new Lb(bb - 1) : new lb(Hb, !0)
        }, Ib.prototype.prev = function() {
          return new Ib(this.value - BigInt(1))
        };
        for (var Ab = [1]; 2 * Ab[Ab.length - 1] <= Mb;) Ab.push(2 * Ab[Ab.length - 1]);
        var Wb = Ab.length,
          Jb = Ab[Wb - 1];

        function Sb(bb) {
          return Math.abs(bb) <= Mb
        }

        function Nb(bb, Mb, eb) {
          Mb = ob(Mb);
          for (var Hb = bb.isNegative(), pb = Mb.isNegative(), Vb = Hb ? bb.not() : bb, gb = pb ? Mb.not() : Mb, lb = 0, Lb = 0, Ib = null, Ob = null, Ub = []; !Vb.isZero() || !gb.isZero();) lb = (Ib = cb(Vb, Jb))[1].toJSNumber(), Hb && (lb = Jb - 1 - lb), Lb = (Ob = cb(gb, Jb))[1].toJSNumber(), pb && (Lb = Jb - 1 - Lb), Vb = Ib[0], gb = Ob[0], Ub.push(eb(lb, Lb));
          for (var tb = 0 !== eb(Hb ? 1 : 0, pb ? 1 : 0) ? wb(-1) : wb(0), Cb = Ub.length - 1; Cb >= 0; Cb -= 1) tb = tb.multiply(Jb).add(wb(Ub[Cb]));
          return tb
        }
        lb.prototype.shiftLeft = function(bb) {
          var wb = ob(bb).toJSNumber();
          if (!Sb(wb)) throw new Error(String(wb) + " is too large for shifting.");
          if (wb < 0) return this.shiftRight(-wb);
          var Mb = this;
          if (Mb.isZero()) return Mb;
          for (; wb >= Wb;) Mb = Mb.multiply(Jb), wb -= Wb - 1;
          return Mb.multiply(Ab[wb])
        }, Ib.prototype.shiftLeft = Lb.prototype.shiftLeft = lb.prototype.shiftLeft, lb.prototype.shiftRight = function(bb) {
          var wb, Mb = ob(bb).toJSNumber();
          if (!Sb(Mb)) throw new Error(String(Mb) + " is too large for shifting.");
          if (Mb < 0) return this.shiftLeft(-Mb);
          for (var eb = this; Mb >= Wb;) {
            if (eb.isZero() || eb.isNegative() && eb.isUnit()) return eb;
            eb = (wb = cb(eb, Jb))[1].isNegative() ? wb[0].prev() : wb[0], Mb -= Wb - 1
          }
          return (wb = cb(eb, Ab[Mb]))[1].isNegative() ? wb[0].prev() : wb[0]
        }, Ib.prototype.shiftRight = Lb.prototype.shiftRight = lb.prototype.shiftRight, lb.prototype.not = function() {
          return this.oE().prev()
        }, Ib.prototype.not = Lb.prototype.not = lb.prototype.not, lb.prototype.and = function(bb) {
          return Nb(this, bb, (function(bb, wb) {
            return bb & wb
          }))
        }, Ib.prototype.and = Lb.prototype.and = lb.prototype.and, lb.prototype.or = function(bb) {
          return Nb(this, bb, (function(bb, wb) {
            return bb | wb
          }))
        }, Ib.prototype.or = Lb.prototype.or = lb.prototype.or, lb.prototype.xor = function(bb) {
          return Nb(this, bb, (function(bb, wb) {
            return bb ^ wb
          }))
        }, Ib.prototype.xor = Lb.prototype.xor = lb.prototype.xor;
        var vb = 1 << 30;

        function Qb(bb) {
          var wb = bb.value,
            eb = "number" === typeof wb ? wb | vb : "bigint" === typeof wb ? wb | BigInt(vb) : wb[0] + wb[1] * Mb | 1073758208;
          return eb & -eb
        }

        function Gb(bb, Mb) {
          if (Mb.compareTo(bb) <= 0) {
            var eb = Gb(bb, Mb.square(Mb)),
              Hb = eb.p,
              pb = eb.e,
              Vb = Hb.multiply(Mb);
            return Vb.compareTo(bb) <= 0 ? {
              p: Vb,
              e: 2 * pb + 1
            } : {
              p: Hb,
              e: 2 * pb
            }
          }
          return {
            p: wb(1),
            e: 0
          }
        }

        function qb(bb, wb) {
          return bb = ob(bb), wb = ob(wb), bb.greater(wb) ? bb : wb
        }

        function ab(bb, wb) {
          return bb = ob(bb), wb = ob(wb), bb.lesser(wb) ? bb : wb
        }

        function ib(bb, wb) {
          if (bb = ob(bb).abs(), wb = ob(wb).abs(), bb.equals(wb)) return bb;
          if (bb.isZero()) return wb;
          if (wb.isZero()) return bb;
          for (var Mb, eb, Hb = gb[1]; bb.isEven() && wb.isEven();) Mb = ab(Qb(bb), Qb(wb)), bb = bb.divide(Mb), wb = wb.divide(Mb), Hb = Hb.multiply(Mb);
          for (; bb.isEven();) bb = bb.divide(Qb(bb));
          do {
            for (; wb.isEven();) wb = wb.divide(Qb(wb));
            bb.greater(wb) && (eb = wb, wb = bb, bb = eb), wb = wb.subtract(bb)
          } while (!wb.isZero());
          return Hb.isUnit() ? bb : bb.multiply(Hb)
        }
        lb.prototype.bitLength = function() {
          var bb = this;
          return bb.compareTo(wb(0)) < 0 && (bb = bb.oE().subtract(wb(1))), 0 === bb.compareTo(wb(0)) ? wb(0) : wb(Gb(bb, wb(2)).e).add(wb(1))
        }, Ib.prototype.bitLength = Lb.prototype.bitLength = lb.prototype.bitLength;
        var ub = function(bb, wb, Mb, eb) {
          Mb = Mb || pb, bb = String(bb), eb || (bb = bb.toLowerCase(), Mb = Mb.toLowerCase());
          var Hb, Vb = bb.length,
            gb = Math.abs(wb),
            lb = {};
          for (Hb = 0; Hb < Mb.length; Hb++) lb[Mb[Hb]] = Hb;
          for (Hb = 0; Hb < Vb; Hb++) {
            if ("-" !== (Ob = bb[Hb]) && (Ob in lb && lb[Ob] >= gb)) {
              if ("1" === Ob && 1 === gb) continue;
              throw new Error(Ob + " is not a valid digit in base " + wb + ".")
            }
          }
          wb = ob(wb);
          var Lb = [],
            Ib = "-" === bb[0];
          for (Hb = Ib ? 1 : 0; Hb < bb.length; Hb++) {
            var Ob;
            if ((Ob = bb[Hb]) in lb) Lb.push(ob(lb[Ob]));
            else {
              if ("<" !== Ob) throw new Error(Ob + " is not a valid character");
              var Ub = Hb;
              do {
                Hb++
              } while (">" !== bb[Hb] && Hb < bb.length);
              Lb.push(ob(bb.slice(Ub + 1, Hb)))
            }
          }
          return db(Lb, wb, Ib)
        };

        function db(bb, wb, Mb) {
          var eb, Hb = gb[0],
            pb = gb[1];
          for (eb = bb.length - 1; eb >= 0; eb--) Hb = Hb.add(bb[eb].times(pb)), pb = pb.times(wb);
          return Mb ? Hb.oE() : Hb
        }

        function Pb(bb, Mb) {
          if ((Mb = wb(Mb)).isZero()) {
            if (bb.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (Mb.equals(-1)) {
            if (bb.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (bb.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-bb.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var eb = Array.apply(null, Array(bb.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return eb.unshift([1]), {
              value: [].concat.apply([], eb),
              isNegative: !1
            }
          }
          var Hb = !1;
          if (bb.isNegative() && Mb.isPositive() && (Hb = !0, bb = bb.abs()), Mb.isUnit()) return bb.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(bb.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: Hb
          };
          for (var pb, Vb = [], gb = bb; gb.isNegative() || gb.compareAbs(Mb) >= 0;) {
            pb = gb.divmod(Mb), gb = pb.quotient;
            var lb = pb.remainder;
            lb.isNegative() && (lb = Mb.minus(lb).abs(), gb = gb.next()), Vb.push(lb.toJSNumber())
          }
          return Vb.push(gb.toJSNumber()), {
            value: Vb.reverse(),
            isNegative: Hb
          }
        }

        function nb(bb, wb, Mb) {
          var eb = Pb(bb, wb);
          return (eb.isNegative ? "-" : "") + eb.value.map((function(bb) {
            return function(bb, wb) {
              return bb < (wb = wb || pb).length ? wb[bb] : "<" + bb + ">"
            }(bb, Mb)
          })).join("")
        }

        function yb(bb) {
          if (Ob(+bb)) {
            var wb = +bb;
            if (wb === Fb(wb)) return Vb ? new Ib(BigInt(wb)) : new Lb(wb);
            throw new Error("Invalid integer: " + bb)
          }
          var Mb = "-" === bb[0];
          Mb && (bb = bb.slice(1));
          var eb = bb.split(/e/i);
          if (eb.length > 2) throw new Error("Invalid integer: " + eb.join("e"));
          if (2 === eb.length) {
            var Hb = eb[1];
            if ("+" === Hb[0] && (Hb = Hb.slice(1)), (Hb = +Hb) !== Fb(Hb) || !Ob(Hb)) throw new Error("Invalid integer: " + Hb + " is not a valid exponent.");
            var pb = eb[0],
              gb = pb.indexOf(".");
            if (gb >= 0 && (Hb -= pb.length - gb - 1, pb = pb.slice(0, gb) + pb.slice(gb + 1)), Hb < 0) throw new Error("Cannot include negative exponent part for integers");
            bb = pb += new Array(Hb + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(bb)) throw new Error("Invalid integer: " + bb);
          if (Vb) return new Ib(BigInt(Mb ? "-" + bb : bb));
          for (var Ub = [], tb = bb.length, Eb = tb - 7; tb > 0;) Ub.push(+bb.slice(Eb, tb)), (Eb -= 7) < 0 && (Eb = 0), tb -= 7;
          return Cb(Ub), new lb(Ub, Mb)
        }

        function ob(bb) {
          return "number" === typeof bb ? function(bb) {
            if (Vb) return new Ib(BigInt(bb));
            if (Ob(bb)) {
              if (bb !== Fb(bb)) throw new Error(bb + " is not an integer.");
              return new Lb(bb)
            }
            return yb(bb.toString())
          }(bb) : "string" === typeof bb ? yb(bb) : "bigint" === typeof bb ? new Ib(bb) : bb
        }
        lb.prototype.toArray = function(bb) {
          return Pb(this, bb)
        }, Lb.prototype.toArray = function(bb) {
          return Pb(this, bb)
        }, Ib.prototype.toArray = function(bb) {
          return Pb(this, bb)
        }, lb.prototype.toString = function(wb, Mb) {
          if (wb === bb && (wb = 10), 10 !== wb) return nb(this, wb, Mb);
          for (var eb, Hb = this.value, pb = Hb.length, Vb = String(Hb[--pb]); --pb >= 0;) eb = String(Hb[pb]), Vb += "0000000".slice(eb.length) + eb;
          return (this.sign ? "-" : "") + Vb
        }, Lb.prototype.toString = function(wb, Mb) {
          return wb === bb && (wb = 10), 10 != wb ? nb(this, wb, Mb) : String(this.value)
        }, Ib.prototype.toString = Lb.prototype.toString, Ib.prototype.toJSON = lb.prototype.toJSON = Lb.prototype.toJSON = function() {
          return this.toString()
        }, lb.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, lb.prototype.toJSNumber = lb.prototype.valueOf, Lb.prototype.valueOf = function() {
          return this.value
        }, Lb.prototype.toJSNumber = Lb.prototype.valueOf, Ib.prototype.valueOf = Ib.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var Tb = 0; Tb < 1e3; Tb++) gb[Tb] = ob(Tb), Tb > 0 && (gb[-Tb] = ob(-Tb));
        return gb.one = gb[1], gb.zero = gb[0], gb.minusOne = gb[-1], gb.max = qb, gb.min = ab, gb.gcd = ib, gb.lcm = function(bb, wb) {
          return bb = ob(bb).abs(), wb = ob(wb).abs(), bb.divide(ib(bb, wb)).multiply(wb)
        }, gb.isInstance = function(bb) {
          return bb instanceof lb || bb instanceof Lb || bb instanceof Ib
        }, gb.randBetween = function(bb, wb, eb) {
          bb = ob(bb), wb = ob(wb);
          var Hb = eb || Math.random,
            pb = ab(bb, wb),
            Vb = qb(bb, wb).subtract(pb).add(1);
          if (Vb.isSmall) return pb.add(Math.floor(Hb() * Vb));
          for (var lb = Pb(Vb, Mb).value, Lb = [], Ib = !0, Ob = 0; Ob < lb.length; Ob++) {
            var Ub = Ib ? lb[Ob] : Mb,
              tb = Fb(Hb() * Ub);
            Lb.push(tb), tb < Ub && (Ib = !1)
          }
          return pb.add(gb.dI(Lb, Mb, !1))
        }, gb.dI = function(bb, wb, Mb) {
          return db(bb.map(ob), ob(wb || 10), Mb)
        }, gb
      }();
      bb.hasOwnProperty("exports") && (bb.exports = wb)
    }(mM);
    var hM = pb(mM.exports);

    function zM(bb, wb, Mb) {
      let eb = 0;
      for (let Hb = 0; Hb < Mb; Hb++) {
        const Mb = bb[wb + Hb];
        if (void 0 === Mb) break;
        eb += Mb * 16 ** Hb
      }
      return eb
    }

    function XM(bb) {
      const wb = [];
      for (let Mb = 0; Mb < bb.length; Mb++) {
        let eb = Number(bb[Mb]);
        for (let bb = 0; eb || bb < wb.length; bb++) eb += 10 * (wb[bb] || 0), wb[bb] = eb % 16, eb = (eb - wb[bb]) / 16
      }
      return wb
    }
    class xM {
      static fromString(bb) {
        return new xM(function(bb) {
          const wb = XM(bb),
            Mb = Array(4);
          for (let eb = 0; eb < 4; eb++) Mb[3 - eb] = zM(wb, 4 * eb, 4);
          return Mb
        }(bb), bb)
      }
      static fromBit(bb) {
        const wb = Array(4),
          Mb = Math.floor(bb / 16);
        for (let eb = 0; eb < 4; eb++) wb[3 - eb] = eb === Mb ? 1 << bb - 16 * Mb : 0;
        return new xM(wb)
      }
      constructor(bb, wb) {
        this.parts = bb, this.str = wb
      }
      and(bb) {
        let {
          parts: wb
        } = bb;
        return new xM(this.parts.map(((bb, Mb) => bb & wb[Mb])))
      }
      or(bb) {
        let {
          parts: wb
        } = bb;
        return new xM(this.parts.map(((bb, Mb) => bb | wb[Mb])))
      }
      xor(bb) {
        let {
          parts: wb
        } = bb;
        return new xM(this.parts.map(((bb, Mb) => bb ^ wb[Mb])))
      }
      not() {
        return new xM(this.parts.map((bb => ~bb)))
      }
      equals(bb) {
        let {
          parts: wb
        } = bb;
        return this.parts.every(((bb, Mb) => bb === wb[Mb]))
      }
      toString() {
        if (null != this.str) return this.str;
        const bb = new Array(16);
        return this.parts.forEach(((wb, Mb) => {
          const eb = XM(wb.toString());
          for (let Hb = 0; Hb < 4; Hb++) bb[Hb + 4 * Mb] = eb[3 - Hb] || 0
        })), this.str = hM.dI(bb, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const jM = function() {
      try {
        return BigInt, !0
      } catch (bb) {
        return !1
      }
    }();
    jM && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const KM = {},
      rM = jM ? function(bb) {
        return BigInt(bb)
      } : function(bb) {
        return bb instanceof xM ? bb : ("number" === typeof bb && (bb = bb.toString()), null != KM[bb] || (KM[bb] = xM.fromString(bb)), KM[bb])
      },
      RM = rM(0),
      DM = jM ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RM) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RM)
      } : function() {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RM;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RM).and(bb)
      },
      cM = jM ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RM) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RM)
      } : function() {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RM;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RM).or(bb)
      },
      YM = jM ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RM) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RM)
      } : function() {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RM;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RM).xor(bb)
      },
      ZM = jM ? function(bb, wb) {
        return bb === wb
      } : function(bb, wb) {
        return null == bb || null == wb ? bb == wb : bb.equals(wb)
      };
    var fM, AM, WM, JM, SM = {
      combine: function() {
        let bb = arguments.length <= 0 ? void 0 : arguments[0];
        for (let wb = 1; wb < arguments.length; wb++) bb = cM(bb, wb < 0 || arguments.length <= wb ? void 0 : arguments[wb]);
        return bb
      },
      add: function(bb, wb) {
        return wb === RM ? bb : cM(bb, wb)
      },
      remove: function(bb, wb) {
        return wb === RM ? bb : YM(bb, DM(bb, wb))
      },
      filter: DM,
      invert: jM ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RM)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RM).not()
      },
      has: function(bb, wb) {
        return ZM(DM(bb, wb), wb)
      },
      hasAny: function(bb, wb) {
        return !ZM(DM(bb, wb), RM)
      },
      equals: ZM,
      deserialize: rM,
      getFlag: jM ? function(bb) {
        return BigInt(1) << BigInt(bb)
      } : function(bb) {
        return xM.fromBit(bb)
      }
    };
    ! function(bb) {
      bb[bb.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", bb[bb.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", bb[bb.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", bb[bb.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", bb[bb.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", bb[bb.RATELIMITED = 4002] = "RATELIMITED", bb[bb.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", bb[bb.INVALID_VERSION = 4004] = "INVALID_VERSION", bb[bb.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(fM || (fM = {})),
    function(bb) {
      bb[bb.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", bb[bb.INVALID_COMMAND = 4002] = "INVALID_COMMAND", bb[bb.INVALID_EVENT = 4004] = "INVALID_EVENT", bb[bb.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(AM || (AM = {})),
    function(bb) {
      bb.LANDSCAPE = "landscape", bb.PORTRAIT = "portrait"
    }(WM || (WM = {})),
    function(bb) {
      bb.MOBILE = "mobile", bb.DESKTOP = "desktop"
    }(JM || (JM = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: SM.getFlag(0),
      ADMINISTRATOR: SM.getFlag(3)
    });

    function NM(bb) {
      return CM((wb => {
        var Mb;
        const [eb] = null !== (Mb = Object.entries(bb).find((bb => {
          let [, Mb] = bb;
          return Mb === wb
        }))) && void 0 !== Mb ? Mb : [];
        return null != wb && void 0 === eb ? bb.UNHANDLED : wb
      }), Ww().or(Jw()))
    }
    const vM = sM.object({
        image_url: sM.string()
      }),
      QM = sM.object({
        mediaUrl: sM.string().max(1024)
      }),
      GM = sM.object({
        access_token: sM.union([sM.string(), sM.null()]).optional()
      }),
      qM = sM.object({
        access_token: sM.string(),
        user: sM.object({
          username: sM.string(),
          discriminator: sM.string(),
          id: sM.string(),
          avatar: sM.union([sM.string(), sM.null()]).optional(),
          public_flags: sM.number(),
          global_name: sM.union([sM.string(), sM.null()]).optional()
        }),
        scopes: sM.array(function(bb) {
          const wb = Zw().transform((wb => {
            const Mb = bb.safeParse(wb);
            return Mb.success ? Mb.data : bb._def.defaultValue()
          }));
          return wb.overlayType = bb, wb
        }(sM.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(sM.literal(-1)).default(-1))),
        expires: sM.string(),
        application: sM.object({
          description: sM.string(),
          icon: sM.union([sM.string(), sM.null()]).optional(),
          id: sM.string(),
          rpc_origins: sM.array(sM.string()).optional(),
          name: sM.string()
        })
      }),
      aM = sM.object({
        participants: sM.array(sM.object({
          id: sM.string(),
          username: sM.string(),
          global_name: sM.union([sM.string(), sM.null()]).optional(),
          discriminator: sM.string(),
          avatar: sM.union([sM.string(), sM.null()]).optional(),
          flags: sM.number(),
          bot: sM.boolean(),
          avatar_decoration_data: sM.union([sM.object({
            asset: sM.string(),
            skuId: sM.string().optional()
          }), sM.null()]).optional(),
          premium_type: sM.union([sM.number(), sM.null()]).optional(),
          nickname: sM.string().optional()
        }))
      });
    var iM;
    ! function(bb) {
      bb.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", bb.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", bb.AUTHENTICATE = "AUTHENTICATE", bb.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(iM || (iM = {}));
    const uM = sM.object({}).optional().nullable(),
      dM = sM.void(),
      PM = {
        [iM.INITIATE_IMAGE_UPLOAD]: {
          request: dM,
          response: vM
        },
        [iM.OPEN_SHARE_MOMENT_DIALOG]: {
          request: QM,
          response: uM
        },
        [iM.AUTHENTICATE]: {
          request: GM,
          response: qM
        },
        [iM.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: dM,
          response: aM
        }
      },
      nM = "DISPATCH";
    var yM;
    ! function(bb) {
      bb.AUTHORIZE = "AUTHORIZE", bb.AUTHENTICATE = "AUTHENTICATE", bb.GET_GUILDS = "GET_GUILDS", bb.GET_GUILD = "GET_GUILD", bb.GET_CHANNEL = "GET_CHANNEL", bb.GET_CHANNELS = "GET_CHANNELS", bb.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", bb.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", bb.SUBSCRIBE = "SUBSCRIBE", bb.UNSUBSCRIBE = "UNSUBSCRIBE", bb.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", bb.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", bb.SET_ACTIVITY = "SET_ACTIVITY", bb.GET_SKUS = "GET_SKUS", bb.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", bb.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", bb.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", bb.START_PURCHASE = "START_PURCHASE", bb.SET_CONFIG = "SET_CONFIG", bb.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", bb.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", bb.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", bb.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", bb.CAPTURE_LOG = "CAPTURE_LOG", bb.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", bb.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", bb.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", bb.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", bb.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", bb.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", bb.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(yM || (yM = {}));
    const oM = yw({
        cmd: Ww(),
        data: uw(),
        evt: aw(),
        nonce: Ww()
      }).passthrough(),
      TM = (NM(Object.assign(Object.assign({}, qM.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), yw({
        id: Ww(),
        username: Ww(),
        discriminator: Ww(),
        global_name: Ww().optional().nullable(),
        avatar: Ww().optional().nullable(),
        avatar_decoration_data: yw({
          asset: Ww(),
          sku_id: Ww().optional()
        }).nullable(),
        bot: vw(),
        flags: Jw().optional().nullable(),
        premium_type: Jw().optional().nullable()
      })),
      kM = yw({
        user: TM,
        nick: Ww().optional().nullable(),
        roles: nw(Ww()),
        joined_at: Ww(),
        deaf: vw(),
        mute: vw()
      }),
      be = yw({
        id: Ww(),
        name: Ww().optional().nullable(),
        roles: nw(Ww()).optional().nullable(),
        user: TM.optional().nullable(),
        require_colons: vw().optional().nullable(),
        managed: vw().optional().nullable(),
        animated: vw().optional().nullable(),
        available: vw().optional().nullable()
      }),
      we = yw({
        mute: vw(),
        deaf: vw(),
        self_mute: vw(),
        self_deaf: vw(),
        suppress: vw()
      }),
      Me = yw({
        mute: vw(),
        nick: Ww(),
        user: TM,
        voice_state: we,
        volume: Jw()
      }),
      ee = NM({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      He = yw({
        name: Ww(),
        type: Jw(),
        url: Ww().optional().nullable(),
        created_at: Jw().optional().nullable(),
        timestamps: yw({
          start: Jw(),
          end: Jw()
        }).partial().optional().nullable(),
        application_id: Ww().optional().nullable(),
        details: Ww().optional().nullable(),
        state: Ww().optional().nullable(),
        emoji: be.optional().nullable(),
        party: yw({
          id: Ww().optional().nullable(),
          size: nw(Jw()).optional().nullable()
        }).optional().nullable(),
        assets: yw({
          large_image: Ww().nullable(),
          large_text: Ww().nullable(),
          small_image: Ww().nullable(),
          small_text: Ww().nullable()
        }).partial().optional().nullable(),
        secrets: yw({
          join: Ww(),
          match: Ww()
        }).partial().optional().nullable(),
        instance: vw().optional().nullable(),
        flags: Jw().optional().nullable()
      }),
      pe = yw({
        id: Ww(),
        type: NM({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: Ww(),
        deny: Ww()
      }),
      Ve = {
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
      ge = yw({
        id: Ww(),
        type: NM(Ve),
        guild_id: Ww().optional().nullable(),
        position: Jw().optional().nullable(),
        permission_overwrites: nw(pe).optional().nullable(),
        name: Ww().optional().nullable(),
        topic: Ww().optional().nullable(),
        nsfw: vw().optional().nullable(),
        last_message_id: Ww().optional().nullable(),
        bitrate: Jw().optional().nullable(),
        user_limit: Jw().optional().nullable(),
        rate_limit_per_user: Jw().optional().nullable(),
        recipients: nw(TM).optional().nullable(),
        icon: Ww().optional().nullable(),
        owner_id: Ww().optional().nullable(),
        application_id: Ww().optional().nullable(),
        parent_id: Ww().optional().nullable(),
        last_pin_timestamp: Ww().optional().nullable()
      }),
      le = yw({
        user: TM,
        guild_id: Ww(),
        status: ee,
        activities: nw(He),
        client_status: yw({
          desktop: ee,
          mobile: ee,
          web: ee
        }).partial()
      }),
      Le = yw({
        id: Ww(),
        name: Ww(),
        color: Jw(),
        hoist: vw(),
        position: Jw(),
        permissions: Ww(),
        managed: vw(),
        mentionable: vw()
      }),
      Ie = (yw({
        id: Ww(),
        name: Ww(),
        owner_id: Ww(),
        icon: Ww().nullable(),
        icon_hash: Ww().optional().nullable(),
        splash: Ww().nullable(),
        discovery_splash: Ww().nullable(),
        owner: vw().optional().nullable(),
        permissions: Ww().optional().nullable(),
        region: Ww(),
        afk_channel_id: Ww().nullable(),
        afk_timeout: Jw(),
        widget_enabled: vw().optional().nullable(),
        widget_channel_id: Ww().optional().nullable(),
        verification_level: Jw(),
        default_message_notifications: Jw(),
        explicit_content_filter: Jw(),
        roles: nw(Le),
        emojis: nw(be),
        features: nw(Ww()),
        mfa_level: Jw(),
        application_id: Ww().nullable(),
        system_channel_id: Ww().nullable(),
        system_channel_flags: Jw(),
        rules_channel_id: Ww().nullable(),
        joined_at: Ww().optional().nullable(),
        large: vw().optional().nullable(),
        unavailable: vw().optional().nullable(),
        member_count: Jw().optional().nullable(),
        voice_states: nw(we).optional().nullable(),
        members: nw(kM).optional().nullable(),
        channels: nw(ge).optional().nullable(),
        presences: nw(le).optional().nullable(),
        max_presences: Jw().optional().nullable(),
        max_members: Jw().optional().nullable(),
        vanity_url_code: Ww().nullable(),
        description: Ww().nullable(),
        banner: Ww().nullable(),
        premium_tier: Jw(),
        premium_subscription_count: Jw().optional().nullable(),
        preferred_locale: Ww(),
        public_updates_channel_id: Ww().nullable(),
        max_video_channel_users: Jw().optional().nullable(),
        approximate_member_count: Jw().optional().nullable(),
        approximate_presence_count: Jw().optional().nullable()
      }), yw({
        id: Ww(),
        guild_id: Ww(),
        type: Jw(),
        name: Ww()
      })),
      Oe = yw({
        id: Ww(),
        filename: Ww(),
        size: Jw(),
        url: Ww(),
        proxy_url: Ww(),
        height: Jw().optional().nullable(),
        width: Jw().optional().nullable()
      }),
      Ue = yw({
        text: Ww(),
        icon_url: Ww().optional().nullable(),
        proxy_icon_url: Ww().optional().nullable()
      }),
      te = yw({
        url: Ww().optional().nullable(),
        proxy_url: Ww().optional().nullable(),
        height: Jw().optional().nullable(),
        width: Jw().optional().nullable()
      }),
      Ce = te.omit({
        proxy_url: !0
      }),
      Ee = yw({
        name: Ww().optional().nullable(),
        url: Ww().optional().nullable()
      }),
      Fe = yw({
        name: Ww().optional().nullable(),
        url: Ww().optional().nullable(),
        icon_url: Ww().optional().nullable(),
        proxy_icon_url: Ww().optional().nullable()
      }),
      Be = yw({
        name: Ww(),
        value: Ww(),
        inline: vw()
      }),
      se = yw({
        title: Ww().optional().nullable(),
        type: Ww().optional().nullable(),
        description: Ww().optional().nullable(),
        url: Ww().optional().nullable(),
        timestamp: Ww().optional().nullable(),
        color: Jw().optional().nullable(),
        footer: Ue.optional().nullable(),
        image: te.optional().nullable(),
        thumbnail: te.optional().nullable(),
        video: Ce.optional().nullable(),
        provider: Ee.optional().nullable(),
        author: Fe.optional().nullable(),
        fields: nw(Be).optional().nullable()
      }),
      me = yw({
        count: Jw(),
        me: vw(),
        emoji: be
      }),
      he = yw({
        type: Jw(),
        party_id: Ww().optional().nullable()
      }),
      ze = yw({
        id: Ww(),
        cover_image: Ww().optional().nullable(),
        description: Ww(),
        icon: Ww().optional().nullable(),
        name: Ww()
      }),
      Xe = yw({
        message_id: Ww().optional().nullable(),
        channel_id: Ww().optional().nullable(),
        guild_id: Ww().optional().nullable()
      }),
      xe = yw({
        id: Ww(),
        channel_id: Ww(),
        guild_id: Ww().optional().nullable(),
        author: TM.optional().nullable(),
        member: kM.optional().nullable(),
        content: Ww(),
        timestamp: Ww(),
        edited_timestamp: Ww().optional().nullable(),
        tts: vw(),
        mention_everyone: vw(),
        mentions: nw(TM),
        mention_roles: nw(Ww()),
        mention_channels: nw(Ie),
        attachments: nw(Oe),
        embeds: nw(se),
        reactions: nw(me).optional().nullable(),
        nonce: Tw([Ww(), Jw()]).optional().nullable(),
        pinned: vw(),
        webhook_id: Ww().optional().nullable(),
        type: Jw(),
        activity: he.optional().nullable(),
        application: ze.optional().nullable(),
        message_reference: Xe.optional().nullable(),
        flags: Jw().optional().nullable(),
        stickers: nw(uw()).optional().nullable(),
        referenced_message: uw().optional().nullable()
      }),
      je = yw({
        id: Ww(),
        name: Ww()
      }),
      Ke = yw({
        type: NM({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: Jw(),
        name: Ww()
      }),
      re = yw({
        type: NM({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: vw(),
        threshold: Jw(),
        shortcut: nw(Ke),
        delay: Jw()
      }),
      Re = yw({
        device_id: Ww(),
        volume: Jw(),
        available_devices: nw(je)
      }),
      De = (yw({
        type: NM({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: Ww(),
        vendor: yw({
          name: Ww(),
          url: Ww()
        }),
        model: yw({
          name: Ww(),
          url: Ww()
        }),
        related: nw(Ww()),
        echo_cancellation: vw().optional().nullable(),
        noise_suppression: vw().optional().nullable(),
        automatic_gain_control: vw().optional().nullable(),
        hardware_mute: vw().optional().nullable()
      }), yw({
        id: Ww(),
        name: Ww(),
        type: NM({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: yw({
          amount: Jw(),
          currency: Ww()
        }),
        application_id: Ww(),
        flags: Jw(),
        release_date: Ww().nullable()
      })),
      ce = yw({
        id: Ww(),
        sku_id: Ww(),
        application_id: Ww(),
        user_id: Ww(),
        gift_code_flags: Jw(),
        type: NM({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: Ww().optional().nullable(),
        branches: nw(Ww()).optional().nullable(),
        starts_at: Ww().optional().nullable(),
        ends_at: Ww().optional().nullable(),
        parent_id: Ww().optional().nullable(),
        consumed: vw().optional().nullable(),
        deleted: vw().optional().nullable(),
        gift_code_batch_id: Ww().optional().nullable()
      }),
      Ye = (NM({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), NM({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      Ze = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      fe = (NM(Ze), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      Ae = (NM(fe), "ERROR");
    var We;
    ! function(bb) {
      bb.READY = "READY", bb.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", bb.SPEAKING_START = "SPEAKING_START", bb.SPEAKING_STOP = "SPEAKING_STOP", bb.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", bb.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", bb.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", bb.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", bb.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", bb.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(We || (We = {}));
    const Je = oM.extend({
        evt: LM(We),
        nonce: Ww().nullable(),
        cmd: gM(nM),
        data: yw({}).passthrough()
      }),
      Se = oM.extend({
        evt: gM(Ae),
        data: yw({
          code: Jw(),
          message: Ww().optional()
        }).passthrough(),
        cmd: LM(yM),
        nonce: Ww().nullable()
      }),
      Ne = Je.extend({
        evt: Ww()
      }),
      ve = Tw([Je, Ne, Se]);
    const Qe = {
      [We.READY]: {
        payload: Je.extend({
          evt: gM(We.READY),
          data: yw({
            v: Jw(),
            config: yw({
              cdn_host: Ww().optional(),
              api_endpoint: Ww(),
              environment: Ww()
            }),
            user: yw({
              id: Ww(),
              username: Ww(),
              discriminator: Ww(),
              avatar: Ww().optional()
            }).optional()
          })
        })
      },
      [We.VOICE_STATE_UPDATE]: {
        payload: Je.extend({
          evt: gM(We.VOICE_STATE_UPDATE),
          data: Me
        }),
        subscribeArgs: yw({
          channel_id: Ww()
        })
      },
      [We.SPEAKING_START]: {
        payload: Je.extend({
          evt: gM(We.SPEAKING_START),
          data: yw({
            lobby_id: Ww().optional(),
            channel_id: Ww().optional(),
            user_id: Ww()
          })
        }),
        subscribeArgs: yw({
          lobby_id: Ww().nullable().optional(),
          channel_id: Ww().nullable().optional()
        })
      },
      [We.SPEAKING_STOP]: {
        payload: Je.extend({
          evt: gM(We.SPEAKING_STOP),
          data: yw({
            lobby_id: Ww().optional(),
            channel_id: Ww().optional(),
            user_id: Ww()
          })
        }),
        subscribeArgs: yw({
          lobby_id: Ww().nullable().optional(),
          channel_id: Ww().nullable().optional()
        })
      },
      [We.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: Je.extend({
          evt: gM(We.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: yw({
            layout_mode: NM(fe)
          })
        })
      },
      [We.ORIENTATION_UPDATE]: {
        payload: Je.extend({
          evt: gM(We.ORIENTATION_UPDATE),
          data: yw({
            screen_orientation: NM(Ze),
            orientation: LM(WM)
          })
        })
      },
      [We.CURRENT_USER_UPDATE]: {
        payload: Je.extend({
          evt: gM(We.CURRENT_USER_UPDATE),
          data: TM
        })
      },
      [We.ENTITLEMENT_CREATE]: {
        payload: Je.extend({
          evt: gM(We.ENTITLEMENT_CREATE),
          data: yw({
            entitlement: ce
          })
        })
      },
      [We.THERMAL_STATE_UPDATE]: {
        payload: Je.extend({
          evt: gM(We.THERMAL_STATE_UPDATE),
          data: yw({
            thermal_state: Ye
          })
        })
      },
      [We.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: Je.extend({
          evt: gM(We.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: yw({
            participants: aM.shape.participants
          })
        })
      }
    };
    const Ge = yw({}).nullable(),
      qe = yw({
        code: Ww()
      }),
      ae = yw({
        guilds: nw(yw({
          id: Ww(),
          name: Ww()
        }))
      }),
      ie = yw({
        id: Ww(),
        name: Ww(),
        icon_url: Ww().optional(),
        members: nw(kM)
      }),
      ue = yw({
        id: Ww(),
        type: NM(Ve),
        guild_id: Ww().optional().nullable(),
        name: Ww().optional().nullable(),
        topic: Ww().optional().nullable(),
        bitrate: Jw().optional().nullable(),
        user_limit: Jw().optional().nullable(),
        position: Jw().optional().nullable(),
        voice_states: nw(Me),
        messages: nw(xe)
      }),
      de = yw({
        channels: nw(ge)
      }),
      Pe = (ue.nullable(), ue.nullable()),
      ne = ue.nullable(),
      ye = (yw({
        input: Re,
        output: Re,
        mode: re,
        automatic_gain_control: vw(),
        echo_cancellation: vw(),
        noise_suppression: vw(),
        qos: vw(),
        silence_warning: vw(),
        deaf: vw(),
        mute: vw()
      }), yw({
        evt: Ww()
      })),
      oe = yw({
        shortcut: Ke
      }),
      Te = He,
      ke = yw({
        skus: nw(De)
      }),
      bH = yw({
        entitlements: nw(ce)
      }),
      wH = nw(ce).nullable(),
      MH = yw({
        use_interactive_pip: vw()
      }),
      eH = yw({
        locale: Ww()
      }),
      HH = yw({
        enabled: vw()
      }),
      pH = yw({
        permissions: Nw().or(Ww())
      }),
      VH = yw({
        iosKeyboardResizesView: UM(vw())
      }),
      gH = oM.extend({
        cmd: LM(yM),
        evt: aw()
      });

    function lH(bb) {
      let {
        cmd: wb,
        data: Mb
      } = bb;
      switch (wb) {
        case yM.AUTHORIZE:
          return qe.parse(Mb);
        case yM.CAPTURE_SHORTCUT:
          return oe.parse(Mb);
        case yM.ENCOURAGE_HW_ACCELERATION:
          return HH.parse(Mb);
        case yM.GET_CHANNEL:
          return ue.parse(Mb);
        case yM.GET_CHANNELS:
          return de.parse(Mb);
        case yM.GET_CHANNEL_PERMISSIONS:
          return pH.parse(Mb);
        case yM.GET_GUILD:
          return ie.parse(Mb);
        case yM.GET_GUILDS:
          return ae.parse(Mb);
        case yM.GET_PLATFORM_BEHAVIORS:
          return VH.parse(Mb);
        case yM.GET_CHANNEL:
          return ue.parse(Mb);
        case yM.SELECT_TEXT_CHANNEL:
          return ne.parse(Mb);
        case yM.SELECT_VOICE_CHANNEL:
          return Pe.parse(Mb);
        case yM.SET_ACTIVITY:
          return Te.parse(Mb);
        case yM.GET_SKUS_EMBEDDED:
          return ke.parse(Mb);
        case yM.GET_ENTITLEMENTS_EMBEDDED:
          return bH.parse(Mb);
        case yM.SET_CONFIG:
          return MH.parse(Mb);
        case yM.START_PURCHASE:
          return wH.parse(Mb);
        case yM.SUBSCRIBE:
        case yM.UNSUBSCRIBE:
          return ye.parse(Mb);
        case yM.USER_SETTINGS_GET_LOCALE:
          return eH.parse(Mb);
        case yM.OPEN_EXTERNAL_LINK:
        case yM.SET_ORIENTATION_LOCK_STATE:
        case yM.SET_CERTIFIED_DEVICES:
        case yM.SEND_ANALYTICS_EVENT:
        case yM.OPEN_INVITE_DIALOG:
        case yM.CAPTURE_LOG:
        case yM.GET_SKUS:
        case yM.GET_ENTITLEMENTS:
          return Ge.parse(Mb);
        case yM.AUTHENTICATE:
        case yM.INITIATE_IMAGE_UPLOAD:
        case yM.OPEN_SHARE_MOMENT_DIALOG:
        case yM.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: bb
          } = PM[wb];
          return bb.parse(Mb);
        default:
          ! function(bb, wb) {
            throw wb
          }(0, new Error(`Unrecognized command ${wb}`))
      }
    }
    yw({
      frame_id: Ww(),
      platform: LM(JM).optional().nullable()
    }), yw({
      v: gM(1),
      encoding: gM("json").optional(),
      client_id: Ww(),
      frame_id: Ww()
    });
    const LH = yw({
        code: Jw(),
        message: Ww().optional()
      }),
      IH = yw({
        evt: Ww().nullable(),
        nonce: Ww().nullable(),
        data: uw().nullable(),
        cmd: Ww()
      }).passthrough();

    function OH(bb) {
      const wb = IH.parse(bb);
      return null != wb.evt ? wb.evt === Ae ? Se.parse(wb) : function(bb) {
        const wb = bb.evt;
        if (!(wb in We)) throw new Error(`Unrecognized event type ${bb.evt}`);
        return Qe[wb].payload.parse(bb)
      }(ve.parse(wb)) : function(bb) {
        return Object.assign(Object.assign({}, bb), {
          data: lH(bb)
        })
      }(gH.passthrough().parse(wb))
    }

    function UH(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const Hb = oM.extend({
        cmd: gM(wb),
        data: Mb
      });
      return async Mb => {
        const pb = await bb({
          cmd: wb,
          args: Mb,
          transfer: eb(Mb)
        });
        return Hb.parse(pb).data
      }
    }

    function tH(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const Mb = PM[bb].response,
        eb = oM.extend({
          cmd: gM(bb),
          data: Mb
        });
      return Mb => async Hb => {
        const pb = await Mb({
          cmd: bb,
          args: Hb,
          transfer: wb(Hb)
        });
        return eb.parse(pb).data
      }
    }
    const CH = tH(iM.AUTHENTICATE),
      EH = bb => UH(bb, yM.AUTHORIZE, qe),
      FH = bb => UH(bb, yM.CAPTURE_LOG, Ge),
      BH = bb => UH(bb, yM.ENCOURAGE_HW_ACCELERATION, HH),
      sH = bb => UH(bb, yM.GET_ENTITLEMENTS_EMBEDDED, bH),
      mH = bb => UH(bb, yM.GET_SKUS_EMBEDDED, ke),
      hH = bb => UH(bb, yM.GET_CHANNEL_PERMISSIONS, pH),
      zH = bb => UH(bb, yM.GET_PLATFORM_BEHAVIORS, VH),
      XH = bb => UH(bb, yM.OPEN_EXTERNAL_LINK, Ge),
      xH = bb => UH(bb, yM.OPEN_INVITE_DIALOG, Ge),
      jH = tH(iM.OPEN_SHARE_MOMENT_DIALOG);
    He.Vt({
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
      type: He.shape.type.optional(),
      instance: He.shape.instance.optional()
    }).nullable();
    const KH = bb => UH(bb, yM.SET_ACTIVITY, Te),
      rH = bb => UH(bb, yM.SET_CONFIG, MH);
    const RH = bb => ({
        lock_state: bb.lock_state,
        picture_in_picture_lock_state: bb.picture_in_picture_lock_state
      }),
      DH = bb => function(bb) {
        let {
          sendCommand: wb,
          cmd: Mb,
          response: eb,
          fallbackTransform: Hb,
          transferTransform: pb = () => {}
        } = bb;
        const Vb = oM.extend({
          cmd: gM(Mb),
          data: eb
        });
        return async bb => {
          try {
            const eb = await wb({
              cmd: Mb,
              args: bb,
              transfer: pb(bb)
            });
            return Vb.parse(eb).data
          } catch (eb) {
            if (eb.code === AM.INVALID_PAYLOAD) {
              const eb = Hb(bb),
                gb = await wb({
                  cmd: Mb,
                  args: eb,
                  transfer: pb(eb)
                });
              return Vb.parse(gb).data
            }
            throw eb
          }
        }
      }({
        sendCommand: bb,
        cmd: yM.SET_ORIENTATION_LOCK_STATE,
        response: Ge,
        fallbackTransform: RH
      }),
      cH = bb => UH(bb, yM.START_PURCHASE, wH),
      YH = bb => UH(bb, yM.USER_SETTINGS_GET_LOCALE, eH),
      ZH = tH(iM.INITIATE_IMAGE_UPLOAD),
      fH = bb => UH(bb, yM.GET_CHANNEL, ue),
      AH = tH(iM.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var WH = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function JH(bb) {
      return "string" === typeof bb && WH.test(bb)
    }
    for (var SH = [], NH = 0; NH < 256; ++NH) SH.push((NH + 256).toString(16).substr(1));

    function vH(bb) {
      var wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Mb = (SH[bb[wb + 0]] + SH[bb[wb + 1]] + SH[bb[wb + 2]] + SH[bb[wb + 3]] + "-" + SH[bb[wb + 4]] + SH[bb[wb + 5]] + "-" + SH[bb[wb + 6]] + SH[bb[wb + 7]] + "-" + SH[bb[wb + 8]] + SH[bb[wb + 9]] + "-" + SH[bb[wb + 10]] + SH[bb[wb + 11]] + SH[bb[wb + 12]] + SH[bb[wb + 13]] + SH[bb[wb + 14]] + SH[bb[wb + 15]]).toLowerCase();
      if (!JH(Mb)) throw TypeError("Stringified UUID is invalid");
      return Mb
    }
    var QH;

    function GH(bb, wb, Mb) {
      function eb(bb, eb, Hb, pb) {
        if ("string" === typeof bb && (bb = function(bb) {
            bb = unescape(encodeURIComponent(bb));
            for (var wb = [], Mb = 0; Mb < bb.length; ++Mb) wb.push(bb.charCodeAt(Mb));
            return wb
          }(bb)), "string" === typeof eb && (eb = function(bb) {
            if (!JH(bb)) throw TypeError("Invalid UUID");
            var wb, Mb = new Uint8Array(16);
            return Mb[0] = (wb = parseInt(bb.slice(0, 8), 16)) >>> 24, Mb[1] = wb >>> 16 & 255, Mb[2] = wb >>> 8 & 255, Mb[3] = 255 & wb, Mb[4] = (wb = parseInt(bb.slice(9, 13), 16)) >>> 8, Mb[5] = 255 & wb, Mb[6] = (wb = parseInt(bb.slice(14, 18), 16)) >>> 8, Mb[7] = 255 & wb, Mb[8] = (wb = parseInt(bb.slice(19, 23), 16)) >>> 8, Mb[9] = 255 & wb, Mb[10] = (wb = parseInt(bb.slice(24, 36), 16)) / 1099511627776 & 255, Mb[11] = wb / 4294967296 & 255, Mb[12] = wb >>> 24 & 255, Mb[13] = wb >>> 16 & 255, Mb[14] = wb >>> 8 & 255, Mb[15] = 255 & wb, Mb
          }(eb)), 16 !== eb.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var Vb = new Uint8Array(16 + bb.length);
        if (Vb.set(eb), Vb.set(bb, eb.length), (Vb = Mb(Vb))[6] = 15 & Vb[6] | wb, Vb[8] = 63 & Vb[8] | 128, Hb) {
          pb = pb || 0;
          for (var gb = 0; gb < 16; ++gb) Hb[pb + gb] = Vb[gb];
          return Hb
        }
        return vH(Vb)
      }
      try {
        eb.name = bb
      } catch (Hb) {}
      return eb.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", eb.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", eb
    }

    function qH(bb) {
      return 14 + (bb + 64 >>> 9 << 4) + 1
    }

    function aH(bb, wb) {
      var Mb = (65535 & bb) + (65535 & wb);
      return (bb >> 16) + (wb >> 16) + (Mb >> 16) << 16 | 65535 & Mb
    }

    function iH(bb, wb, Mb, eb, Hb, pb) {
      return aH((Vb = aH(aH(wb, bb), aH(eb, pb))) << (gb = Hb) | Vb >>> 32 - gb, Mb);
      var Vb, gb
    }

    function uH(bb, wb, Mb, eb, Hb, pb, Vb) {
      return iH(wb & Mb | ~wb & eb, bb, wb, Hb, pb, Vb)
    }

    function dH(bb, wb, Mb, eb, Hb, pb, Vb) {
      return iH(wb & eb | Mb & ~eb, bb, wb, Hb, pb, Vb)
    }

    function PH(bb, wb, Mb, eb, Hb, pb, Vb) {
      return iH(wb ^ Mb ^ eb, bb, wb, Hb, pb, Vb)
    }

    function nH(bb, wb, Mb, eb, Hb, pb, Vb) {
      return iH(Mb ^ (wb | ~eb), bb, wb, Hb, pb, Vb)
    }
    GH("v3", 48, (function(bb) {
      if ("string" === typeof bb) {
        var wb = unescape(encodeURIComponent(bb));
        bb = new Uint8Array(wb.length);
        for (var Mb = 0; Mb < wb.length; ++Mb) bb[Mb] = wb.charCodeAt(Mb)
      }
      return function(bb) {
        for (var wb = [], Mb = 32 * bb.length, eb = "0123456789abcdef", Hb = 0; Hb < Mb; Hb += 8) {
          var pb = bb[Hb >> 5] >>> Hb % 32 & 255,
            Vb = parseInt(eb.charAt(pb >>> 4 & 15) + eb.charAt(15 & pb), 16);
          wb.push(Vb)
        }
        return wb
      }(function(bb, wb) {
        bb[wb >> 5] |= 128 << wb % 32, bb[qH(wb) - 1] = wb;
        for (var Mb = 1732584193, eb = -271733879, Hb = -1732584194, pb = 271733878, Vb = 0; Vb < bb.length; Vb += 16) {
          var gb = Mb,
            lb = eb,
            Lb = Hb,
            Ib = pb;
          Mb = uH(Mb, eb, Hb, pb, bb[Vb], 7, -680876936), pb = uH(pb, Mb, eb, Hb, bb[Vb + 1], 12, -389564586), Hb = uH(Hb, pb, Mb, eb, bb[Vb + 2], 17, 606105819), eb = uH(eb, Hb, pb, Mb, bb[Vb + 3], 22, -1044525330), Mb = uH(Mb, eb, Hb, pb, bb[Vb + 4], 7, -176418897), pb = uH(pb, Mb, eb, Hb, bb[Vb + 5], 12, 1200080426), Hb = uH(Hb, pb, Mb, eb, bb[Vb + 6], 17, -1473231341), eb = uH(eb, Hb, pb, Mb, bb[Vb + 7], 22, -45705983), Mb = uH(Mb, eb, Hb, pb, bb[Vb + 8], 7, 1770035416), pb = uH(pb, Mb, eb, Hb, bb[Vb + 9], 12, -1958414417), Hb = uH(Hb, pb, Mb, eb, bb[Vb + 10], 17, -42063), eb = uH(eb, Hb, pb, Mb, bb[Vb + 11], 22, -1990404162), Mb = uH(Mb, eb, Hb, pb, bb[Vb + 12], 7, 1804603682), pb = uH(pb, Mb, eb, Hb, bb[Vb + 13], 12, -40341101), Hb = uH(Hb, pb, Mb, eb, bb[Vb + 14], 17, -1502002290), Mb = dH(Mb, eb = uH(eb, Hb, pb, Mb, bb[Vb + 15], 22, 1236535329), Hb, pb, bb[Vb + 1], 5, -165796510), pb = dH(pb, Mb, eb, Hb, bb[Vb + 6], 9, -1069501632), Hb = dH(Hb, pb, Mb, eb, bb[Vb + 11], 14, 643717713), eb = dH(eb, Hb, pb, Mb, bb[Vb], 20, -373897302), Mb = dH(Mb, eb, Hb, pb, bb[Vb + 5], 5, -701558691), pb = dH(pb, Mb, eb, Hb, bb[Vb + 10], 9, 38016083), Hb = dH(Hb, pb, Mb, eb, bb[Vb + 15], 14, -660478335), eb = dH(eb, Hb, pb, Mb, bb[Vb + 4], 20, -405537848), Mb = dH(Mb, eb, Hb, pb, bb[Vb + 9], 5, 568446438), pb = dH(pb, Mb, eb, Hb, bb[Vb + 14], 9, -1019803690), Hb = dH(Hb, pb, Mb, eb, bb[Vb + 3], 14, -187363961), eb = dH(eb, Hb, pb, Mb, bb[Vb + 8], 20, 1163531501), Mb = dH(Mb, eb, Hb, pb, bb[Vb + 13], 5, -1444681467), pb = dH(pb, Mb, eb, Hb, bb[Vb + 2], 9, -51403784), Hb = dH(Hb, pb, Mb, eb, bb[Vb + 7], 14, 1735328473), Mb = PH(Mb, eb = dH(eb, Hb, pb, Mb, bb[Vb + 12], 20, -1926607734), Hb, pb, bb[Vb + 5], 4, -378558), pb = PH(pb, Mb, eb, Hb, bb[Vb + 8], 11, -2022574463), Hb = PH(Hb, pb, Mb, eb, bb[Vb + 11], 16, 1839030562), eb = PH(eb, Hb, pb, Mb, bb[Vb + 14], 23, -35309556), Mb = PH(Mb, eb, Hb, pb, bb[Vb + 1], 4, -1530992060), pb = PH(pb, Mb, eb, Hb, bb[Vb + 4], 11, 1272893353), Hb = PH(Hb, pb, Mb, eb, bb[Vb + 7], 16, -155497632), eb = PH(eb, Hb, pb, Mb, bb[Vb + 10], 23, -1094730640), Mb = PH(Mb, eb, Hb, pb, bb[Vb + 13], 4, 681279174), pb = PH(pb, Mb, eb, Hb, bb[Vb], 11, -358537222), Hb = PH(Hb, pb, Mb, eb, bb[Vb + 3], 16, -722521979), eb = PH(eb, Hb, pb, Mb, bb[Vb + 6], 23, 76029189), Mb = PH(Mb, eb, Hb, pb, bb[Vb + 9], 4, -640364487), pb = PH(pb, Mb, eb, Hb, bb[Vb + 12], 11, -421815835), Hb = PH(Hb, pb, Mb, eb, bb[Vb + 15], 16, 530742520), Mb = nH(Mb, eb = PH(eb, Hb, pb, Mb, bb[Vb + 2], 23, -995338651), Hb, pb, bb[Vb], 6, -198630844), pb = nH(pb, Mb, eb, Hb, bb[Vb + 7], 10, 1126891415), Hb = nH(Hb, pb, Mb, eb, bb[Vb + 14], 15, -1416354905), eb = nH(eb, Hb, pb, Mb, bb[Vb + 5], 21, -57434055), Mb = nH(Mb, eb, Hb, pb, bb[Vb + 12], 6, 1700485571), pb = nH(pb, Mb, eb, Hb, bb[Vb + 3], 10, -1894986606), Hb = nH(Hb, pb, Mb, eb, bb[Vb + 10], 15, -1051523), eb = nH(eb, Hb, pb, Mb, bb[Vb + 1], 21, -2054922799), Mb = nH(Mb, eb, Hb, pb, bb[Vb + 8], 6, 1873313359), pb = nH(pb, Mb, eb, Hb, bb[Vb + 15], 10, -30611744), Hb = nH(Hb, pb, Mb, eb, bb[Vb + 6], 15, -1560198380), eb = nH(eb, Hb, pb, Mb, bb[Vb + 13], 21, 1309151649), Mb = nH(Mb, eb, Hb, pb, bb[Vb + 4], 6, -145523070), pb = nH(pb, Mb, eb, Hb, bb[Vb + 11], 10, -1120210379), Hb = nH(Hb, pb, Mb, eb, bb[Vb + 2], 15, 718787259), eb = nH(eb, Hb, pb, Mb, bb[Vb + 9], 21, -343485551), Mb = aH(Mb, gb), eb = aH(eb, lb), Hb = aH(Hb, Lb), pb = aH(pb, Ib)
        }
        return [Mb, eb, Hb, pb]
      }(function(bb) {
        if (0 === bb.length) return [];
        for (var wb = 8 * bb.length, Mb = new Uint32Array(qH(wb)), eb = 0; eb < wb; eb += 8) Mb[eb >> 5] |= (255 & bb[eb / 8]) << eb % 32;
        return Mb
      }(bb), 8 * bb.length))
    }));
    var yH = new Uint8Array(16);

    function oH() {
      if (!QH && !(QH = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return QH(yH)
    }

    function TH(bb, wb, Mb) {
      var eb = (bb = bb || {}).random || (bb.rng || oH)();
      if (eb[6] = 15 & eb[6] | 64, eb[8] = 63 & eb[8] | 128, wb) {
        Mb = Mb || 0;
        for (var Hb = 0; Hb < 16; ++Hb) wb[Mb + Hb] = eb[Hb];
        return wb
      }
      return vH(eb)
    }

    function kH(bb, wb, Mb, eb) {
      switch (bb) {
        case 0:
          return wb & Mb ^ ~wb & eb;
        case 1:
        case 3:
          return wb ^ Mb ^ eb;
        case 2:
          return wb & Mb ^ wb & eb ^ Mb & eb
      }
    }

    function bp(bb, wb) {
      return bb << wb | bb >>> 32 - wb
    }
    GH("v5", 80, (function(bb) {
      var wb = [1518500249, 1859775393, 2400959708, 3395469782],
        Mb = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof bb) {
        var eb = unescape(encodeURIComponent(bb));
        bb = [];
        for (var Hb = 0; Hb < eb.length; ++Hb) bb.push(eb.charCodeAt(Hb))
      } else Array.isArray(bb) || (bb = Array.prototype.slice.call(bb));
      bb.push(128);
      for (var pb = bb.length / 4 + 2, Vb = Math.ceil(pb / 16), gb = new Array(Vb), lb = 0; lb < Vb; ++lb) {
        for (var Lb = new Uint32Array(16), Ib = 0; Ib < 16; ++Ib) Lb[Ib] = bb[64 * lb + 4 * Ib] << 24 | bb[64 * lb + 4 * Ib + 1] << 16 | bb[64 * lb + 4 * Ib + 2] << 8 | bb[64 * lb + 4 * Ib + 3];
        gb[lb] = Lb
      }
      gb[Vb - 1][14] = 8 * (bb.length - 1) / Math.pow(2, 32), gb[Vb - 1][14] = Math.floor(gb[Vb - 1][14]), gb[Vb - 1][15] = 8 * (bb.length - 1) & 4294967295;
      for (var Ob = 0; Ob < Vb; ++Ob) {
        for (var Ub = new Uint32Array(80), tb = 0; tb < 16; ++tb) Ub[tb] = gb[Ob][tb];
        for (var Cb = 16; Cb < 80; ++Cb) Ub[Cb] = bp(Ub[Cb - 3] ^ Ub[Cb - 8] ^ Ub[Cb - 14] ^ Ub[Cb - 16], 1);
        for (var Eb = Mb[0], Fb = Mb[1], Bb = Mb[2], sb = Mb[3], mb = Mb[4], hb = 0; hb < 80; ++hb) {
          var zb = Math.floor(hb / 20),
            Xb = bp(Eb, 5) + kH(zb, Fb, Bb, sb) + mb + wb[zb] + Ub[hb] >>> 0;
          mb = sb, sb = Bb, Bb = bp(Fb, 30) >>> 0, Fb = Eb, Eb = Xb
        }
        Mb[0] = Mb[0] + Eb >>> 0, Mb[1] = Mb[1] + Fb >>> 0, Mb[2] = Mb[2] + Bb >>> 0, Mb[3] = Mb[3] + sb >>> 0, Mb[4] = Mb[4] + mb >>> 0
      }
      return [Mb[0] >> 24 & 255, Mb[0] >> 16 & 255, Mb[0] >> 8 & 255, 255 & Mb[0], Mb[1] >> 24 & 255, Mb[1] >> 16 & 255, Mb[1] >> 8 & 255, 255 & Mb[1], Mb[2] >> 24 & 255, Mb[2] >> 16 & 255, Mb[2] >> 8 & 255, 255 & Mb[2], Mb[3] >> 24 & 255, Mb[3] >> 16 & 255, Mb[3] >> 8 & 255, 255 & Mb[3], Mb[4] >> 24 & 255, Mb[4] >> 16 & 255, Mb[4] >> 8 & 255, 255 & Mb[4]]
    }));
    class wp extends Error {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(wb), this.code = bb, this.message = wb, this.name = "Discord SDK Error"
      }
    }
    const Mp = ["log", "warn", "debug", "info", "error"];
    var ep;
    ! function(bb) {
      bb[bb.HANDSHAKE = 0] = "HANDSHAKE", bb[bb.FRAME = 1] = "FRAME", bb[bb.CLOSE = 2] = "CLOSE", bb[bb.HELLO = 3] = "HELLO"
    }(ep || (ep = {}));
    const Hp = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class pp {
      getTransfer(bb) {
        var wb;
        switch (bb.cmd) {
          case yM.SUBSCRIBE:
          case yM.UNSUBSCRIBE:
            return;
          default:
            return null !== (wb = bb.transfer) && void 0 !== wb ? wb : void 0
        }
      }
      constructor(bb, wb) {
        var Mb;
        if (this.eventBus = new Lb, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = bb => {
            var wb;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const Mb = TH();
            null === (wb = this.source) || void 0 === wb || wb.postMessage([ep.FRAME, Object.assign(Object.assign({}, bb), {
              nonce: Mb
            })], this.sourceOrigin, this.getTransfer(bb));
            return new Promise(((bb, wb) => {
              this.pendingCommands.set(Mb, {
                resolve: bb,
                reject: wb
              })
            }))
          }, this.commands = (Mb = this.sendCommand, {
            authenticate: CH(Mb),
            authorize: EH(Mb),
            captureLog: FH(Mb),
            encourageHardwareAcceleration: BH(Mb),
            getChannel: fH(Mb),
            getChannelPermissions: hH(Mb),
            getEntitlements: sH(Mb),
            getPlatformBehaviors: zH(Mb),
            getSkus: mH(Mb),
            openExternalLink: XH(Mb),
            openInviteDialog: xH(Mb),
            openShareMomentDialog: jH(Mb),
            setActivity: KH(Mb),
            setConfig: rH(Mb),
            setOrientationLockState: DH(Mb),
            startPurchase: cH(Mb),
            userSettingsGetLocale: YH(Mb),
            initiateImageUpload: ZH(Mb),
            getInstanceConnectedParticipants: AH(Mb)
          }), this.handleMessage = bb => {
            if (!Hp.has(bb.origin)) return;
            const wb = bb.data;
            if (!Array.isArray(wb)) return;
            const [Mb, eb] = wb;
            switch (Mb) {
              case ep.HELLO:
                return;
              case ep.CLOSE:
                return this.handleClose(eb);
              case ep.HANDSHAKE:
                return this.handleHandshake();
              case ep.FRAME:
                return this.handleFrame(eb);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = bb, this.configuration = null !== wb && void 0 !== wb ? wb : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = JM.DESKTOP, this.guildId = null, void(this.channelId = null);
        const eb = new URLSearchParams(this._getSearch()),
          Hb = eb.get("frame_id");
        if (!Hb) throw new Error("frame_id query param is not defined");
        this.frameId = Hb;
        const pb = eb.get("instance_id");
        if (!pb) throw new Error("instance_id query param is not defined");
        this.instanceId = pb;
        const Vb = eb.get("platform");
        if (!Vb) throw new Error("platform query param is not defined");
        if (Vb !== JM.DESKTOP && Vb !== JM.MOBILE) throw new Error(`Invalid query param "platform" of "${Vb}". Valid values are "${JM.DESKTOP}" or "${JM.MOBILE}"`);
        this.platform = Vb, this.guildId = eb.get("guild_id"), this.channelId = eb.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var bb;
          return [null !== (bb = window.parent.opener) && void 0 !== bb ? bb : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(bb, wb) {
        var Mb;
        window.removeEventListener("message", this.handleMessage);
        const eb = TH();
        null === (Mb = this.source) || void 0 === Mb || Mb.postMessage([ep.CLOSE, {
          code: bb,
          message: wb,
          nonce: eb
        }], this.sourceOrigin)
      }
      async subscribe(bb, wb) {
        for (var Mb = arguments.length, eb = new Array(Mb > 2 ? Mb - 2 : 0), Hb = 2; Hb < Mb; Hb++) eb[Hb - 2] = arguments[Hb];
        const [pb] = eb, Vb = this.eventBus.listenerCount(bb), gb = this.eventBus.on(bb, wb);
        return Object.values(We).includes(bb) && bb !== We.READY && 0 === Vb && await this.sendCommand({
          cmd: yM.SUBSCRIBE,
          args: pb,
          evt: bb
        }), gb
      }
      async unsubscribe(bb, wb) {
        for (var Mb = arguments.length, eb = new Array(Mb > 2 ? Mb - 2 : 0), Hb = 2; Hb < Mb; Hb++) eb[Hb - 2] = arguments[Hb];
        const [pb] = eb;
        return bb !== We.READY && 1 === this.eventBus.listenerCount(bb) && await this.sendCommand({
          cmd: yM.UNSUBSCRIBE,
          evt: bb,
          args: pb
        }), this.eventBus.off(bb, wb)
      }
      async ready() {
        this.isReady || await new Promise((bb => {
          this.eventBus.once(We.READY, bb)
        }))
      }
      handshake() {
        var bb;
        null === (bb = this.source) || void 0 === bb || bb.postMessage([ep.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(We.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const bb = (bb, wb) => {
          this.commands.captureLog({
            level: bb,
            message: wb
          })
        };
        Mp.forEach((wb => {
          ! function(bb, wb, Mb) {
            const eb = bb[wb],
              Hb = bb;
            eb && (bb[wb] = function() {
              const bb = [].slice.call(arguments),
                pb = "" + bb.join(" ");
              Mb(wb, pb), eb.apply(Hb, bb)
            })
          }(console, wb, bb)
        }))
      }
      handleClose(bb) {
        LH.parse(bb)
      }
      handleHandshake() {}
      handleFrame(bb) {
        var wb, Mb;
        let eb;
        try {
          eb = OH(bb)
        } catch (Hb) {
          return console.error("Failed to parse", bb), void console.error(Hb)
        }
        if ("DISPATCH" === eb.cmd) this.eventBus.emit(eb.evt, eb.data);
        else {
          if (eb.evt === Ae) {
            if (null != eb.nonce) return null === (wb = this.pendingCommands.get(eb.nonce)) || void 0 === wb || wb.reject(eb.data), void this.pendingCommands.delete(eb.nonce);
            this.eventBus.emit("error", new wp(eb.data.code, eb.data.message))
          }
          if (null == eb.nonce) return void console.error("Missing nonce", bb);
          null === (Mb = this.pendingCommands.get(eb.nonce)) || void 0 === Mb || Mb.resolve(eb), this.pendingCommands.delete(eb.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var Vp, gp = 1e9,
      lp = !0,
      Lp = "[DecimalError] ",
      Ip = Lp + "Invalid argument: ",
      Op = Lp + "Exponent out of range: ",
      Up = Math.floor,
      tp = Math.pow,
      Cp = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      Ep = 1e7,
      Fp = 9007199254740991,
      Bp = Up(1286742750677284.5),
      sp = {};

    function mp(bb, wb) {
      var Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib = bb.constructor,
        Ob = Ib.precision;
      if (!bb.s || !wb.s) return wb.s || (wb = new Ib(bb)), lp ? cp(wb, Ob) : wb;
      if (lb = bb.d, Lb = wb.d, Vb = bb.e, Hb = wb.e, lb = lb.slice(), pb = Vb - Hb) {
        for (pb < 0 ? (eb = lb, pb = -pb, gb = Lb.length) : (eb = Lb, Hb = Vb, gb = lb.length), pb > (gb = (Vb = Math.ceil(Ob / 7)) > gb ? Vb + 1 : gb + 1) && (pb = gb, eb.length = 1), eb.reverse(); pb--;) eb.push(0);
        eb.reverse()
      }
      for ((gb = lb.length) - (pb = Lb.length) < 0 && (pb = gb, eb = Lb, Lb = lb, lb = eb), Mb = 0; pb;) Mb = (lb[--pb] = lb[pb] + Lb[pb] + Mb) / Ep | 0, lb[pb] %= Ep;
      for (Mb && (lb.unshift(Mb), ++Hb), gb = lb.length; 0 == lb[--gb];) lb.pop();
      return wb.d = lb, wb.e = Hb, lp ? cp(wb, Ob) : wb
    }

    function hp(bb, wb, Mb) {
      if (bb !== ~~bb || bb < wb || bb > Mb) throw Error(Ip + bb)
    }

    function zp(bb) {
      var wb, Mb, eb, Hb = bb.length - 1,
        pb = "",
        Vb = bb[0];
      if (Hb > 0) {
        for (pb += Vb, wb = 1; wb < Hb; wb++)(Mb = 7 - (eb = bb[wb] + "").length) && (pb += rp(Mb)), pb += eb;
        (Mb = 7 - (eb = (Vb = bb[wb]) + "").length) && (pb += rp(Mb))
      } else if (0 === Vb) return "0";
      for (; Vb % 10 === 0;) Vb /= 10;
      return pb + Vb
    }
    sp.absoluteValue = sp.abs = function() {
      var bb = new this.constructor(this);
      return bb.s && (bb.s = 1), bb
    }, sp.comparedTo = sp.cmp = function(bb) {
      var wb, Mb, eb, Hb, pb = this;
      if (bb = new pb.constructor(bb), pb.s !== bb.s) return pb.s || -bb.s;
      if (pb.e !== bb.e) return pb.e > bb.e ^ pb.s < 0 ? 1 : -1;
      for (wb = 0, Mb = (eb = pb.d.length) < (Hb = bb.d.length) ? eb : Hb; wb < Mb; ++wb)
        if (pb.d[wb] !== bb.d[wb]) return pb.d[wb] > bb.d[wb] ^ pb.s < 0 ? 1 : -1;
      return eb === Hb ? 0 : eb > Hb ^ pb.s < 0 ? 1 : -1
    }, sp.decimalPlaces = sp.dp = function() {
      var bb = this,
        wb = bb.d.length - 1,
        Mb = 7 * (wb - bb.e);
      if (wb = bb.d[wb])
        for (; wb % 10 == 0; wb /= 10) Mb--;
      return Mb < 0 ? 0 : Mb
    }, sp.dividedBy = sp.div = function(bb) {
      return Xp(this, new this.constructor(bb))
    }, sp.dividedToIntegerBy = sp.idiv = function(bb) {
      var wb = this.constructor;
      return cp(Xp(this, new wb(bb), 0, 1), wb.precision)
    }, sp.equals = sp.eq = function(bb) {
      return !this.cmp(bb)
    }, sp.exponent = function() {
      return jp(this)
    }, sp.greaterThan = sp.gt = function(bb) {
      return this.cmp(bb) > 0
    }, sp.greaterThanOrEqualTo = sp.gte = function(bb) {
      return this.cmp(bb) >= 0
    }, sp.isInteger = sp.isint = function() {
      return this.e > this.d.length - 2
    }, sp.isNegative = sp.isneg = function() {
      return this.s < 0
    }, sp.isPositive = sp.ispos = function() {
      return this.s > 0
    }, sp.isZero = function() {
      return 0 === this.s
    }, sp.lessThan = sp.lt = function(bb) {
      return this.cmp(bb) < 0
    }, sp.lessThanOrEqualTo = sp.lte = function(bb) {
      return this.cmp(bb) < 1
    }, sp.logarithm = sp.log = function(bb) {
      var wb, Mb = this,
        eb = Mb.constructor,
        Hb = eb.precision,
        pb = Hb + 5;
      if (void 0 === bb) bb = new eb(10);
      else if ((bb = new eb(bb)).s < 1 || bb.eq(Vp)) throw Error(Lp + "NaN");
      if (Mb.s < 1) throw Error(Lp + (Mb.s ? "NaN" : "-Infinity"));
      return Mb.eq(Vp) ? new eb(0) : (lp = !1, wb = Xp(Rp(Mb, pb), Rp(bb, pb), pb), lp = !0, cp(wb, Hb))
    }, sp.minus = sp.sub = function(bb) {
      var wb = this;
      return bb = new wb.constructor(bb), wb.s == bb.s ? Yp(wb, bb) : mp(wb, (bb.s = -bb.s, bb))
    }, sp.modulo = sp.mod = function(bb) {
      var wb, Mb = this,
        eb = Mb.constructor,
        Hb = eb.precision;
      if (!(bb = new eb(bb)).s) throw Error(Lp + "NaN");
      return Mb.s ? (lp = !1, wb = Xp(Mb, bb, 0, 1).times(bb), lp = !0, Mb.minus(wb)) : cp(new eb(Mb), Hb)
    }, sp.naturalExponential = sp.exp = function() {
      return xp(this)
    }, sp.naturalLogarithm = sp.ln = function() {
      return Rp(this)
    }, sp.negated = sp.neg = function() {
      var bb = new this.constructor(this);
      return bb.s = -bb.s || 0, bb
    }, sp.plus = sp.add = function(bb) {
      var wb = this;
      return bb = new wb.constructor(bb), wb.s == bb.s ? mp(wb, bb) : Yp(wb, (bb.s = -bb.s, bb))
    }, sp.precision = sp.sd = function(bb) {
      var wb, Mb, eb, Hb = this;
      if (void 0 !== bb && bb !== !!bb && 1 !== bb && 0 !== bb) throw Error(Ip + bb);
      if (wb = jp(Hb) + 1, Mb = 7 * (eb = Hb.d.length - 1) + 1, eb = Hb.d[eb]) {
        for (; eb % 10 == 0; eb /= 10) Mb--;
        for (eb = Hb.d[0]; eb >= 10; eb /= 10) Mb++
      }
      return bb && wb > Mb ? wb : Mb
    }, sp.squareRoot = sp.sqrt = function() {
      var bb, wb, Mb, eb, Hb, pb, Vb, gb = this,
        lb = gb.constructor;
      if (gb.s < 1) {
        if (!gb.s) return new lb(0);
        throw Error(Lp + "NaN")
      }
      for (bb = jp(gb), lp = !1, 0 == (Hb = Math.sqrt(+gb)) || Hb == 1 / 0 ? (((wb = zp(gb.d)).length + bb) % 2 == 0 && (wb += "0"), Hb = Math.sqrt(wb), bb = Up((bb + 1) / 2) - (bb < 0 || bb % 2), eb = new lb(wb = Hb == 1 / 0 ? "1e" + bb : (wb = Hb.toExponential()).slice(0, wb.indexOf("e") + 1) + bb)) : eb = new lb(Hb.toString()), Hb = Vb = (Mb = lb.precision) + 3;;)
        if (eb = (pb = eb).plus(Xp(gb, pb, Vb + 2)).times(.5), zp(pb.d).slice(0, Vb) === (wb = zp(eb.d)).slice(0, Vb)) {
          if (wb = wb.slice(Vb - 3, Vb + 1), Hb == Vb && "4999" == wb) {
            if (cp(pb, Mb + 1, 0), pb.times(pb).eq(gb)) {
              eb = pb;
              break
            }
          } else if ("9999" != wb) break;
          Vb += 4
        } return lp = !0, cp(eb, Mb)
    }, sp.times = sp.mul = function(bb) {
      var wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib = this,
        Ob = Ib.constructor,
        Ub = Ib.d,
        tb = (bb = new Ob(bb)).d;
      if (!Ib.s || !bb.s) return new Ob(0);
      for (bb.s *= Ib.s, Mb = Ib.e + bb.e, (lb = Ub.length) < (Lb = tb.length) && (pb = Ub, Ub = tb, tb = pb, Vb = lb, lb = Lb, Lb = Vb), pb = [], eb = Vb = lb + Lb; eb--;) pb.push(0);
      for (eb = Lb; --eb >= 0;) {
        for (wb = 0, Hb = lb + eb; Hb > eb;) gb = pb[Hb] + tb[eb] * Ub[Hb - eb - 1] + wb, pb[Hb--] = gb % Ep | 0, wb = gb / Ep | 0;
        pb[Hb] = (pb[Hb] + wb) % Ep | 0
      }
      for (; !pb[--Vb];) pb.pop();
      return wb ? ++Mb : pb.shift(), bb.d = pb, bb.e = Mb, lp ? cp(bb, Ob.precision) : bb
    }, sp.toDecimalPlaces = sp.todp = function(bb, wb) {
      var Mb = this,
        eb = Mb.constructor;
      return Mb = new eb(Mb), void 0 === bb ? Mb : (hp(bb, 0, gp), void 0 === wb ? wb = eb.rounding : hp(wb, 0, 8), cp(Mb, bb + jp(Mb) + 1, wb))
    }, sp.toExponential = function(bb, wb) {
      var Mb, eb = this,
        Hb = eb.constructor;
      return void 0 === bb ? Mb = Zp(eb, !0) : (hp(bb, 0, gp), void 0 === wb ? wb = Hb.rounding : hp(wb, 0, 8), Mb = Zp(eb = cp(new Hb(eb), bb + 1, wb), !0, bb + 1)), Mb
    }, sp.toFixed = function(bb, wb) {
      var Mb, eb, Hb = this,
        pb = Hb.constructor;
      return void 0 === bb ? Zp(Hb) : (hp(bb, 0, gp), void 0 === wb ? wb = pb.rounding : hp(wb, 0, 8), Mb = Zp((eb = cp(new pb(Hb), bb + jp(Hb) + 1, wb)).abs(), !1, bb + jp(eb) + 1), Hb.isneg() && !Hb.isZero() ? "-" + Mb : Mb)
    }, sp.toInteger = sp.toint = function() {
      var bb = this,
        wb = bb.constructor;
      return cp(new wb(bb), jp(bb) + 1, wb.rounding)
    }, sp.toNumber = function() {
      return +this
    }, sp.toPower = sp.pow = function(bb) {
      var wb, Mb, eb, Hb, pb, Vb, gb = this,
        lb = gb.constructor,
        Lb = +(bb = new lb(bb));
      if (!bb.s) return new lb(Vp);
      if (!(gb = new lb(gb)).s) {
        if (bb.s < 1) throw Error(Lp + "Infinity");
        return gb
      }
      if (gb.eq(Vp)) return gb;
      if (eb = lb.precision, bb.eq(Vp)) return cp(gb, eb);
      if (Vb = (wb = bb.e) >= (Mb = bb.d.length - 1), pb = gb.s, Vb) {
        if ((Mb = Lb < 0 ? -Lb : Lb) <= Fp) {
          for (Hb = new lb(Vp), wb = Math.ceil(eb / 7 + 4), lp = !1; Mb % 2 && fp((Hb = Hb.times(gb)).d, wb), 0 !== (Mb = Up(Mb / 2));) fp((gb = gb.times(gb)).d, wb);
          return lp = !0, bb.s < 0 ? new lb(Vp).div(Hb) : cp(Hb, eb)
        }
      } else if (pb < 0) throw Error(Lp + "NaN");
      return pb = pb < 0 && 1 & bb.d[Math.max(wb, Mb)] ? -1 : 1, gb.s = 1, lp = !1, Hb = bb.times(Rp(gb, eb + 12)), lp = !0, (Hb = xp(Hb)).s = pb, Hb
    }, sp.toPrecision = function(bb, wb) {
      var Mb, eb, Hb = this,
        pb = Hb.constructor;
      return void 0 === bb ? eb = Zp(Hb, (Mb = jp(Hb)) <= pb.toExpNeg || Mb >= pb.toExpPos) : (hp(bb, 1, gp), void 0 === wb ? wb = pb.rounding : hp(wb, 0, 8), eb = Zp(Hb = cp(new pb(Hb), bb, wb), bb <= (Mb = jp(Hb)) || Mb <= pb.toExpNeg, bb)), eb
    }, sp.toSignificantDigits = sp.tosd = function(bb, wb) {
      var Mb = this.constructor;
      return void 0 === bb ? (bb = Mb.precision, wb = Mb.rounding) : (hp(bb, 1, gp), void 0 === wb ? wb = Mb.rounding : hp(wb, 0, 8)), cp(new Mb(this), bb, wb)
    }, sp.toString = sp.valueOf = sp.val = sp.toJSON = sp[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var bb = this,
        wb = jp(bb),
        Mb = bb.constructor;
      return Zp(bb, wb <= Mb.toExpNeg || wb >= Mb.toExpPos)
    };
    var Xp = function() {
      function bb(bb, wb) {
        var Mb, eb = 0,
          Hb = bb.length;
        for (bb = bb.slice(); Hb--;) Mb = bb[Hb] * wb + eb, bb[Hb] = Mb % Ep | 0, eb = Mb / Ep | 0;
        return eb && bb.unshift(eb), bb
      }

      function wb(bb, wb, Mb, eb) {
        var Hb, pb;
        if (Mb != eb) pb = Mb > eb ? 1 : -1;
        else
          for (Hb = pb = 0; Hb < Mb; Hb++)
            if (bb[Hb] != wb[Hb]) {
              pb = bb[Hb] > wb[Hb] ? 1 : -1;
              break
            } return pb
      }

      function Mb(bb, wb, Mb) {
        for (var eb = 0; Mb--;) bb[Mb] -= eb, eb = bb[Mb] < wb[Mb] ? 1 : 0, bb[Mb] = eb * Ep + bb[Mb] - wb[Mb];
        for (; !bb[0] && bb.length > 1;) bb.shift()
      }
      return function(eb, Hb, pb, Vb) {
        var gb, lb, Lb, Ib, Ob, Ub, tb, Cb, Eb, Fb, Bb, sb, mb, hb, zb, Xb, xb, jb, Kb = eb.constructor,
          rb = eb.s == Hb.s ? 1 : -1,
          Rb = eb.d,
          Db = Hb.d;
        if (!eb.s) return new Kb(eb);
        if (!Hb.s) throw Error(Lp + "Division by zero");
        for (lb = eb.e - Hb.e, xb = Db.length, zb = Rb.length, Cb = (tb = new Kb(rb)).d = [], Lb = 0; Db[Lb] == (Rb[Lb] || 0);) ++Lb;
        if (Db[Lb] > (Rb[Lb] || 0) && --lb, (sb = null == pb ? pb = Kb.precision : Vb ? pb + (jp(eb) - jp(Hb)) + 1 : pb) < 0) return new Kb(0);
        if (sb = sb / 7 + 2 | 0, Lb = 0, 1 == xb)
          for (Ib = 0, Db = Db[0], sb++;
            (Lb < zb || Ib) && sb--; Lb++) mb = Ib * Ep + (Rb[Lb] || 0), Cb[Lb] = mb / Db | 0, Ib = mb % Db | 0;
        else {
          for ((Ib = Ep / (Db[0] + 1) | 0) > 1 && (Db = bb(Db, Ib), Rb = bb(Rb, Ib), xb = Db.length, zb = Rb.length), hb = xb, Fb = (Eb = Rb.slice(0, xb)).length; Fb < xb;) Eb[Fb++] = 0;
          (jb = Db.slice()).unshift(0), Xb = Db[0], Db[1] >= Ep / 2 && ++Xb;
          do {
            Ib = 0, (gb = wb(Db, Eb, xb, Fb)) < 0 ? (Bb = Eb[0], xb != Fb && (Bb = Bb * Ep + (Eb[1] || 0)), (Ib = Bb / Xb | 0) > 1 ? (Ib >= Ep && (Ib = Ep - 1), 1 == (gb = wb(Ob = bb(Db, Ib), Eb, Ub = Ob.length, Fb = Eb.length)) && (Ib--, Mb(Ob, xb < Ub ? jb : Db, Ub))) : (0 == Ib && (gb = Ib = 1), Ob = Db.slice()), (Ub = Ob.length) < Fb && Ob.unshift(0), Mb(Eb, Ob, Fb), -1 == gb && (gb = wb(Db, Eb, xb, Fb = Eb.length)) < 1 && (Ib++, Mb(Eb, xb < Fb ? jb : Db, Fb)), Fb = Eb.length) : 0 === gb && (Ib++, Eb = [0]), Cb[Lb++] = Ib, gb && Eb[0] ? Eb[Fb++] = Rb[hb] || 0 : (Eb = [Rb[hb]], Fb = 1)
          } while ((hb++ < zb || void 0 !== Eb[0]) && sb--)
        }
        return Cb[0] || Cb.shift(), tb.e = lb, cp(tb, Vb ? pb + jp(tb) + 1 : pb)
      }
    }();

    function xp(bb, wb) {
      var Mb, eb, Hb, pb, Vb, gb = 0,
        lb = 0,
        Lb = bb.constructor,
        Ib = Lb.precision;
      if (jp(bb) > 16) throw Error(Op + jp(bb));
      if (!bb.s) return new Lb(Vp);
      for (null == wb ? (lp = !1, Vb = Ib) : Vb = wb, pb = new Lb(.03125); bb.abs().gte(.1);) bb = bb.times(pb), lb += 5;
      for (Vb += Math.log(tp(2, lb)) / Math.LN10 * 2 + 5 | 0, Mb = eb = Hb = new Lb(Vp), Lb.precision = Vb;;) {
        if (eb = cp(eb.times(bb), Vb), Mb = Mb.times(++gb), zp((pb = Hb.plus(Xp(eb, Mb, Vb))).d).slice(0, Vb) === zp(Hb.d).slice(0, Vb)) {
          for (; lb--;) Hb = cp(Hb.times(Hb), Vb);
          return Lb.precision = Ib, null == wb ? (lp = !0, cp(Hb, Ib)) : Hb
        }
        Hb = pb
      }
    }

    function jp(bb) {
      for (var wb = 7 * bb.e, Mb = bb.d[0]; Mb >= 10; Mb /= 10) wb++;
      return wb
    }

    function Kp(bb, wb, Mb) {
      if (wb > bb.LN10.sd()) throw lp = !0, Mb && (bb.precision = Mb), Error(Lp + "LN10 precision limit exceeded");
      return cp(new bb(bb.LN10), wb)
    }

    function rp(bb) {
      for (var wb = ""; bb--;) wb += "0";
      return wb
    }

    function Rp(bb, wb) {
      var Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob = 1,
        Ub = bb,
        tb = Ub.d,
        Cb = Ub.constructor,
        Eb = Cb.precision;
      if (Ub.s < 1) throw Error(Lp + (Ub.s ? "NaN" : "-Infinity"));
      if (Ub.eq(Vp)) return new Cb(0);
      if (null == wb ? (lp = !1, Lb = Eb) : Lb = wb, Ub.eq(10)) return null == wb && (lp = !0), Kp(Cb, Lb);
      if (Lb += 10, Cb.precision = Lb, eb = (Mb = zp(tb)).charAt(0), pb = jp(Ub), !(Math.abs(pb) < 15e14)) return lb = Kp(Cb, Lb + 2, Eb).times(pb + ""), Ub = Rp(new Cb(eb + "." + Mb.slice(1)), Lb - 10).plus(lb), Cb.precision = Eb, null == wb ? (lp = !0, cp(Ub, Eb)) : Ub;
      for (; eb < 7 && 1 != eb || 1 == eb && Mb.charAt(1) > 3;) eb = (Mb = zp((Ub = Ub.times(bb)).d)).charAt(0), Ob++;
      for (pb = jp(Ub), eb > 1 ? (Ub = new Cb("0." + Mb), pb++) : Ub = new Cb(eb + "." + Mb.slice(1)), gb = Vb = Ub = Xp(Ub.minus(Vp), Ub.plus(Vp), Lb), Ib = cp(Ub.times(Ub), Lb), Hb = 3;;) {
        if (Vb = cp(Vb.times(Ib), Lb), zp((lb = gb.plus(Xp(Vb, new Cb(Hb), Lb))).d).slice(0, Lb) === zp(gb.d).slice(0, Lb)) return gb = gb.times(2), 0 !== pb && (gb = gb.plus(Kp(Cb, Lb + 2, Eb).times(pb + ""))), gb = Xp(gb, new Cb(Ob), Lb), Cb.precision = Eb, null == wb ? (lp = !0, cp(gb, Eb)) : gb;
        gb = lb, Hb += 2
      }
    }

    function Dp(bb, wb) {
      var Mb, eb, Hb;
      for ((Mb = wb.indexOf(".")) > -1 && (wb = wb.replace(".", "")), (eb = wb.search(/e/i)) > 0 ? (Mb < 0 && (Mb = eb), Mb += +wb.slice(eb + 1), wb = wb.substring(0, eb)) : Mb < 0 && (Mb = wb.length), eb = 0; 48 === wb.charCodeAt(eb);) ++eb;
      for (Hb = wb.length; 48 === wb.charCodeAt(Hb - 1);) --Hb;
      if (wb = wb.slice(eb, Hb)) {
        if (Hb -= eb, Mb = Mb - eb - 1, bb.e = Up(Mb / 7), bb.d = [], eb = (Mb + 1) % 7, Mb < 0 && (eb += 7), eb < Hb) {
          for (eb && bb.d.push(+wb.slice(0, eb)), Hb -= 7; eb < Hb;) bb.d.push(+wb.slice(eb, eb += 7));
          eb = 7 - (wb = wb.slice(eb)).length
        } else eb -= Hb;
        for (; eb--;) wb += "0";
        if (bb.d.push(+wb), lp && (bb.e > Bp || bb.e < -Bp)) throw Error(Op + Mb)
      } else bb.s = 0, bb.e = 0, bb.d = [0];
      return bb
    }

    function cp(bb, wb, Mb) {
      var eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob = bb.d;
      for (Vb = 1, pb = Ob[0]; pb >= 10; pb /= 10) Vb++;
      if ((eb = wb - Vb) < 0) eb += 7, Hb = wb, Lb = Ob[Ib = 0];
      else {
        if ((Ib = Math.ceil((eb + 1) / 7)) >= (pb = Ob.length)) return bb;
        for (Lb = pb = Ob[Ib], Vb = 1; pb >= 10; pb /= 10) Vb++;
        Hb = (eb %= 7) - 7 + Vb
      }
      if (void 0 !== Mb && (gb = Lb / (pb = tp(10, Vb - Hb - 1)) % 10 | 0, lb = wb < 0 || void 0 !== Ob[Ib + 1] || Lb % pb, lb = Mb < 4 ? (gb || lb) && (0 == Mb || Mb == (bb.s < 0 ? 3 : 2)) : gb > 5 || 5 == gb && (4 == Mb || lb || 6 == Mb && (eb > 0 ? Hb > 0 ? Lb / tp(10, Vb - Hb) : 0 : Ob[Ib - 1]) % 10 & 1 || Mb == (bb.s < 0 ? 8 : 7))), wb < 1 || !Ob[0]) return lb ? (pb = jp(bb), Ob.length = 1, wb = wb - pb - 1, Ob[0] = tp(10, (7 - wb % 7) % 7), bb.e = Up(-wb / 7) || 0) : (Ob.length = 1, Ob[0] = bb.e = bb.s = 0), bb;
      if (0 == eb ? (Ob.length = Ib, pb = 1, Ib--) : (Ob.length = Ib + 1, pb = tp(10, 7 - eb), Ob[Ib] = Hb > 0 ? (Lb / tp(10, Vb - Hb) % tp(10, Hb) | 0) * pb : 0), lb)
        for (;;) {
          if (0 == Ib) {
            (Ob[0] += pb) == Ep && (Ob[0] = 1, ++bb.e);
            break
          }
          if (Ob[Ib] += pb, Ob[Ib] != Ep) break;
          Ob[Ib--] = 0, pb = 1
        }
      for (eb = Ob.length; 0 === Ob[--eb];) Ob.pop();
      if (lp && (bb.e > Bp || bb.e < -Bp)) throw Error(Op + jp(bb));
      return bb
    }

    function Yp(bb, wb) {
      var Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob, Ub = bb.constructor,
        tb = Ub.precision;
      if (!bb.s || !wb.s) return wb.s ? wb.s = -wb.s : wb = new Ub(bb), lp ? cp(wb, tb) : wb;
      if (lb = bb.d, Ob = wb.d, eb = wb.e, Lb = bb.e, lb = lb.slice(), Vb = Lb - eb) {
        for ((Ib = Vb < 0) ? (Mb = lb, Vb = -Vb, gb = Ob.length) : (Mb = Ob, eb = Lb, gb = lb.length), Vb > (Hb = Math.max(Math.ceil(tb / 7), gb) + 2) && (Vb = Hb, Mb.length = 1), Mb.reverse(), Hb = Vb; Hb--;) Mb.push(0);
        Mb.reverse()
      } else {
        for ((Ib = (Hb = lb.length) < (gb = Ob.length)) && (gb = Hb), Hb = 0; Hb < gb; Hb++)
          if (lb[Hb] != Ob[Hb]) {
            Ib = lb[Hb] < Ob[Hb];
            break
          } Vb = 0
      }
      for (Ib && (Mb = lb, lb = Ob, Ob = Mb, wb.s = -wb.s), gb = lb.length, Hb = Ob.length - gb; Hb > 0; --Hb) lb[gb++] = 0;
      for (Hb = Ob.length; Hb > Vb;) {
        if (lb[--Hb] < Ob[Hb]) {
          for (pb = Hb; pb && 0 === lb[--pb];) lb[pb] = Ep - 1;
          --lb[pb], lb[Hb] += Ep
        }
        lb[Hb] -= Ob[Hb]
      }
      for (; 0 === lb[--gb];) lb.pop();
      for (; 0 === lb[0]; lb.shift()) --eb;
      return lb[0] ? (wb.d = lb, wb.e = eb, lp ? cp(wb, tb) : wb) : new Ub(0)
    }

    function Zp(bb, wb, Mb) {
      var eb, Hb = jp(bb),
        pb = zp(bb.d),
        Vb = pb.length;
      return wb ? (Mb && (eb = Mb - Vb) > 0 ? pb = pb.charAt(0) + "." + pb.slice(1) + rp(eb) : Vb > 1 && (pb = pb.charAt(0) + "." + pb.slice(1)), pb = pb + (Hb < 0 ? "e" : "e+") + Hb) : Hb < 0 ? (pb = "0." + rp(-Hb - 1) + pb, Mb && (eb = Mb - Vb) > 0 && (pb += rp(eb))) : Hb >= Vb ? (pb += rp(Hb + 1 - Vb), Mb && (eb = Mb - Hb - 1) > 0 && (pb = pb + "." + rp(eb))) : ((eb = Hb + 1) < Vb && (pb = pb.slice(0, eb) + "." + pb.slice(eb)), Mb && (eb = Mb - Vb) > 0 && (Hb + 1 === Vb && (pb += "."), pb += rp(eb))), bb.s < 0 ? "-" + pb : pb
    }

    function fp(bb, wb) {
      if (bb.length > wb) return bb.length = wb, !0
    }

    function Ap(bb) {
      if (!bb || "object" !== typeof bb) throw Error(Lp + "Object expected");
      var wb, Mb, eb, Hb = ["precision", 1, gp, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (wb = 0; wb < Hb.length; wb += 3)
        if (void 0 !== (eb = bb[Mb = Hb[wb]])) {
          if (!(Up(eb) === eb && eb >= Hb[wb + 1] && eb <= Hb[wb + 2])) throw Error(Ip + Mb + ": " + eb);
          this[Mb] = eb
        } if (void 0 !== (eb = bb[Mb = "LN10"])) {
        if (eb != Math.LN10) throw Error(Ip + Mb + ": " + eb);
        this[Mb] = new this(eb)
      }
      return this
    }
    var Wp = function bb(wb) {
      var Mb, eb, Hb;

      function pb(bb) {
        var wb = this;
        if (!(wb instanceof pb)) return new pb(bb);
        if (wb.constructor = pb, bb instanceof pb) return wb.s = bb.s, wb.e = bb.e, void(wb.d = (bb = bb.d) ? bb.slice() : bb);
        if ("number" === typeof bb) {
          if (0 * bb !== 0) throw Error(Ip + bb);
          if (bb > 0) wb.s = 1;
          else {
            if (!(bb < 0)) return wb.s = 0, wb.e = 0, void(wb.d = [0]);
            bb = -bb, wb.s = -1
          }
          return bb === ~~bb && bb < 1e7 ? (wb.e = 0, void(wb.d = [bb])) : Dp(wb, bb.toString())
        }
        if ("string" !== typeof bb) throw Error(Ip + bb);
        if (45 === bb.charCodeAt(0) ? (bb = bb.slice(1), wb.s = -1) : wb.s = 1, !Cp.test(bb)) throw Error(Ip + bb);
        Dp(wb, bb)
      }
      if (pb.prototype = sp, pb.ROUND_UP = 0, pb.ROUND_DOWN = 1, pb.ROUND_CEIL = 2, pb.ROUND_FLOOR = 3, pb.ROUND_HALF_UP = 4, pb.ROUND_HALF_DOWN = 5, pb.ROUND_HALF_EVEN = 6, pb.ROUND_HALF_CEIL = 7, pb.ROUND_HALF_FLOOR = 8, pb.clone = bb, pb.config = pb.set = Ap, void 0 === wb && (wb = {}), wb)
        for (Hb = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], Mb = 0; Mb < Hb.length;) wb.hasOwnProperty(eb = Hb[Mb++]) || (wb[eb] = this[eb]);
      return pb.config(wb), pb
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    Vp = new Wp(1);
    var Jp;
    ! function(bb) {
      bb.AED = "aed", bb.AFN = "afn", bb.ALL = "all", bb.AMD = "amd", bb.ANG = "ang", bb.AOA = "aoa", bb.ARS = "ars", bb.AUD = "aud", bb.AWG = "awg", bb.AZN = "azn", bb.BAM = "bam", bb.BBD = "bbd", bb.BDT = "bdt", bb.BGN = "bgn", bb.BHD = "bhd", bb.BIF = "bif", bb.BMD = "bmd", bb.BND = "bnd", bb.BOB = "bob", bb.BOV = "bov", bb.BRL = "brl", bb.BSD = "bsd", bb.BTN = "btn", bb.BWP = "bwp", bb.BYN = "byn", bb.BYR = "byr", bb.BZD = "bzd", bb.CAD = "cad", bb.CDF = "cdf", bb.CHE = "che", bb.CHF = "chf", bb.CHW = "chw", bb.CLF = "clf", bb.CLP = "clp", bb.CNY = "cny", bb.COP = "cop", bb.COU = "cou", bb.CRC = "crc", bb.CUC = "cuc", bb.CUP = "cup", bb.CVE = "cve", bb.CZK = "czk", bb.DJF = "djf", bb.DKK = "dkk", bb.DOP = "dop", bb.DZD = "dzd", bb.EGP = "egp", bb.ERN = "ern", bb.ETB = "etb", bb.EUR = "eur", bb.FJD = "fjd", bb.FKP = "fkp", bb.GBP = "gbp", bb.GEL = "gel", bb.GHS = "ghs", bb.GIP = "gip", bb.GMD = "gmd", bb.GNF = "gnf", bb.GTQ = "gtq", bb.GYD = "gyd", bb.HKD = "hkd", bb.HNL = "hnl", bb.HRK = "hrk", bb.HTG = "htg", bb.HUF = "huf", bb.IDR = "idr", bb.ILS = "ils", bb.INR = "inr", bb.IQD = "iqd", bb.IRR = "irr", bb.ISK = "isk", bb.JMD = "jmd", bb.JOD = "jod", bb.JPY = "jpy", bb.KES = "kes", bb.KGS = "kgs", bb.KHR = "khr", bb.KMF = "kmf", bb.KPW = "kpw", bb.KRW = "krw", bb.KWD = "kwd", bb.KYD = "kyd", bb.KZT = "kzt", bb.LAK = "lak", bb.LBP = "lbp", bb.LKR = "lkr", bb.LRD = "lrd", bb.LSL = "lsl", bb.LTL = "ltl", bb.LVL = "lvl", bb.LYD = "lyd", bb.MAD = "mad", bb.MDL = "mdl", bb.MGA = "mga", bb.MKD = "mkd", bb.MMK = "mmk", bb.MNT = "mnt", bb.MOP = "mop", bb.MRO = "mro", bb.MUR = "mur", bb.MVR = "mvr", bb.MWK = "mwk", bb.MXN = "mxn", bb.MXV = "mxv", bb.MYR = "myr", bb.MZN = "mzn", bb.NAD = "nad", bb.NGN = "ngn", bb.NIO = "nio", bb.NOK = "nok", bb.NPR = "npr", bb.NZD = "nzd", bb.OMR = "omr", bb.PAB = "pab", bb.PEN = "pen", bb.PGK = "pgk", bb.PHP = "php", bb.PKR = "pkr", bb.PLN = "pln", bb.PYG = "pyg", bb.QAR = "qar", bb.RON = "ron", bb.RSD = "rsd", bb.RUB = "rub", bb.RWF = "rwf", bb.SAR = "sar", bb.SBD = "sbd", bb.SCR = "scr", bb.SDG = "sdg", bb.SEK = "sek", bb.SGD = "sgd", bb.SHP = "shp", bb.SLL = "sll", bb.SOS = "sos", bb.SRD = "srd", bb.SSP = "ssp", bb.STD = "std", bb.SVC = "svc", bb.SYP = "syp", bb.SZL = "szl", bb.THB = "thb", bb.TJS = "tjs", bb.TMT = "tmt", bb.TND = "tnd", bb.TOP = "top", bb.TRY = "try", bb.TTD = "ttd", bb.TWD = "twd", bb.TZS = "tzs", bb.UAH = "uah", bb.UGX = "ugx", bb.USD = "usd", bb.USN = "usn", bb.USS = "uss", bb.UYI = "uyi", bb.UYU = "uyu", bb.UZS = "uzs", bb.VEF = "vef", bb.VND = "vnd", bb.VUV = "vuv", bb.WST = "wst", bb.XAF = "xaf", bb.XAG = "xag", bb.XAU = "xau", bb.XBA = "xba", bb.XBB = "xbb", bb.XBC = "xbc", bb.XBD = "xbd", bb.XCD = "xcd", bb.XDR = "xdr", bb.XFU = "xfu", bb.XOF = "xof", bb.XPD = "xpd", bb.XPF = "xpf", bb.XPT = "xpt", bb.XSU = "xsu", bb.XTS = "xts", bb.XUA = "xua", bb.YER = "yer", bb.ZAR = "zar", bb.ZMW = "zmw", bb.ZWL = "zwl"
    }(Jp || (Jp = {}));
    Jp.AED, Jp.AFN, Jp.ALL, Jp.AMD, Jp.ANG, Jp.AOA, Jp.ARS, Jp.AUD, Jp.AWG, Jp.AZN, Jp.BAM, Jp.BBD, Jp.BDT, Jp.BGN, Jp.BHD, Jp.BIF, Jp.BMD, Jp.BND, Jp.BOB, Jp.BOV, Jp.BRL, Jp.BSD, Jp.BTN, Jp.BWP, Jp.BYR, Jp.BYN, Jp.BZD, Jp.CAD, Jp.CDF, Jp.CHE, Jp.CHF, Jp.CHW, Jp.CLF, Jp.CLP, Jp.CNY, Jp.COP, Jp.COU, Jp.CRC, Jp.CUC, Jp.CUP, Jp.CVE, Jp.CZK, Jp.DJF, Jp.DKK, Jp.DOP, Jp.DZD, Jp.EGP, Jp.ERN, Jp.ETB, Jp.EUR, Jp.FJD, Jp.FKP, Jp.GBP, Jp.GEL, Jp.GHS, Jp.GIP, Jp.GMD, Jp.GNF, Jp.GTQ, Jp.GYD, Jp.HKD, Jp.HNL, Jp.HRK, Jp.HTG, Jp.HUF, Jp.IDR, Jp.ILS, Jp.INR, Jp.IQD, Jp.IRR, Jp.ISK, Jp.JMD, Jp.JOD, Jp.JPY, Jp.KES, Jp.KGS, Jp.KHR, Jp.KMF, Jp.KPW, Jp.KRW, Jp.KWD, Jp.KYD, Jp.KZT, Jp.LAK, Jp.LBP, Jp.LKR, Jp.LRD, Jp.LSL, Jp.LTL, Jp.LVL, Jp.LYD, Jp.MAD, Jp.MDL, Jp.MGA, Jp.MKD, Jp.MMK, Jp.MNT, Jp.MOP, Jp.MRO, Jp.MUR, Jp.MVR, Jp.MWK, Jp.MXN, Jp.MXV, Jp.MYR, Jp.MZN, Jp.NAD, Jp.NGN, Jp.NIO, Jp.NOK, Jp.NPR, Jp.NZD, Jp.OMR, Jp.PAB, Jp.PEN, Jp.PGK, Jp.PHP, Jp.PKR, Jp.PLN, Jp.PYG, Jp.QAR, Jp.RON, Jp.RSD, Jp.RUB, Jp.RWF, Jp.SAR, Jp.SBD, Jp.SCR, Jp.SDG, Jp.SEK, Jp.SGD, Jp.SHP, Jp.SLL, Jp.SOS, Jp.SRD, Jp.SSP, Jp.STD, Jp.SVC, Jp.SYP, Jp.SZL, Jp.THB, Jp.TJS, Jp.TMT, Jp.TND, Jp.TOP, Jp.TRY, Jp.TTD, Jp.TWD, Jp.TZS, Jp.UAH, Jp.UGX, Jp.USD, Jp.USN, Jp.USS, Jp.UYI, Jp.UYU, Jp.UZS, Jp.VEF, Jp.VND, Jp.VUV, Jp.WST, Jp.XAF, Jp.XAG, Jp.XAU, Jp.XBA, Jp.XBB, Jp.XBC, Jp.XBD, Jp.XCD, Jp.XDR, Jp.XFU, Jp.XOF, Jp.XPD, Jp.XPF, Jp.XPT, Jp.XSU, Jp.XTS, Jp.XUA, Jp.YER, Jp.ZAR, Jp.ZMW, Jp.ZWL;
    var Sp = {
      exports: {}
    };
    ! function(bb, wb) {
      var Mb = "__lodash_hash_undefined__",
        eb = 9007199254740991,
        pb = "[object Arguments]",
        Vb = "[object Array]",
        gb = "[object Boolean]",
        lb = "[object Date]",
        Lb = "[object Error]",
        Ib = "[object Function]",
        Ob = "[object Map]",
        Ub = "[object Number]",
        tb = "[object Object]",
        Cb = "[object Promise]",
        Eb = "[object RegExp]",
        Fb = "[object Set]",
        Bb = "[object String]",
        sb = "[object Symbol]",
        mb = "[object WeakMap]",
        hb = "[object ArrayBuffer]",
        zb = "[object DataView]",
        Xb = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        xb = /^\w*$/,
        jb = /^\./,
        Kb = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        rb = /\\(\\)?/g,
        Rb = /^\[object .+?Constructor\]$/,
        Db = /^(?:0|[1-9]\d*)$/,
        cb = {};
      cb["[object Float32Array]"] = cb["[object Float64Array]"] = cb["[object Int8Array]"] = cb["[object Int16Array]"] = cb["[object Int32Array]"] = cb["[object Uint8Array]"] = cb["[object Uint8ClampedArray]"] = cb["[object Uint16Array]"] = cb["[object Uint32Array]"] = !0, cb[pb] = cb[Vb] = cb[hb] = cb[gb] = cb[zb] = cb[lb] = cb[Lb] = cb[Ib] = cb[Ob] = cb[Ub] = cb[tb] = cb[Eb] = cb[Fb] = cb[Bb] = cb[mb] = !1;
      var Yb = "object" == typeof Hb && Hb && Hb.Object === Object && Hb,
        Zb = "object" == typeof self && self && self.Object === Object && self,
        fb = Yb || Zb || Function("return this")(),
        Ab = wb && !wb.nodeType && wb,
        Wb = Ab && bb && !bb.nodeType && bb,
        Jb = Wb && Wb.exports === Ab && Yb.process,
        Sb = function() {
          try {
            return Jb && Jb.binding("util")
          } catch (bb) {}
        }(),
        Nb = Sb && Sb.isTypedArray;

      function vb(bb, wb) {
        for (var Mb = -1, eb = bb ? bb.length : 0; ++Mb < eb && !1 !== wb(bb[Mb], Mb, bb););
        return bb
      }

      function Qb(bb, wb) {
        for (var Mb = -1, eb = bb ? bb.length : 0; ++Mb < eb;)
          if (wb(bb[Mb], Mb, bb)) return !0;
        return !1
      }

      function Gb(bb) {
        var wb = !1;
        if (null != bb && "function" != typeof bb.toString) try {
          wb = !!(bb + "")
        } catch (Mb) {}
        return wb
      }

      function qb(bb) {
        var wb = -1,
          Mb = Array(bb.size);
        return bb.forEach((function(bb, eb) {
          Mb[++wb] = [eb, bb]
        })), Mb
      }

      function ab(bb, wb) {
        return function(Mb) {
          return bb(wb(Mb))
        }
      }

      function ib(bb) {
        var wb = -1,
          Mb = Array(bb.size);
        return bb.forEach((function(bb) {
          Mb[++wb] = bb
        })), Mb
      }
      var ub = Array.prototype,
        db = Function.prototype,
        Pb = Object.prototype,
        nb = fb["__core-js_shared__"],
        yb = function() {
          var bb = /[^.]+$/.exec(nb && nb.keys && nb.keys.IE_PROTO || "");
          return bb ? "Symbol(src)_1." + bb : ""
        }(),
        ob = db.toString,
        Tb = Pb.hasOwnProperty,
        kb = Pb.toString,
        bw = RegExp("^" + ob.call(Tb).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        ww = fb.Symbol,
        Mw = fb.Uint8Array,
        ew = ab(Object.getPrototypeOf, Object),
        Hw = Object.create,
        pw = Pb.propertyIsEnumerable,
        Vw = ub.splice,
        gw = ab(Object.keys, Object),
        lw = aw(fb, "DataView"),
        Lw = aw(fb, "Map"),
        Iw = aw(fb, "Promise"),
        Ow = aw(fb, "Set"),
        Uw = aw(fb, "WeakMap"),
        tw = aw(Object, "create"),
        Cw = Tw(lw),
        Ew = Tw(Lw),
        Fw = Tw(Iw),
        Bw = Tw(Ow),
        sw = Tw(Uw),
        mw = ww ? ww.prototype : void 0,
        hw = mw ? mw.valueOf : void 0,
        zw = mw ? mw.toString : void 0;

      function Xw(bb) {
        var wb = -1,
          Mb = bb ? bb.length : 0;
        for (this.clear(); ++wb < Mb;) {
          var eb = bb[wb];
          this.set(eb[0], eb[1])
        }
      }

      function xw(bb) {
        var wb = -1,
          Mb = bb ? bb.length : 0;
        for (this.clear(); ++wb < Mb;) {
          var eb = bb[wb];
          this.set(eb[0], eb[1])
        }
      }

      function jw(bb) {
        var wb = -1,
          Mb = bb ? bb.length : 0;
        for (this.clear(); ++wb < Mb;) {
          var eb = bb[wb];
          this.set(eb[0], eb[1])
        }
      }

      function Kw(bb) {
        var wb = -1,
          Mb = bb ? bb.length : 0;
        for (this.__data__ = new jw; ++wb < Mb;) this.add(bb[wb])
      }

      function rw(bb) {
        this.__data__ = new xw(bb)
      }

      function Rw(bb, wb) {
        var Mb = MM(bb) || wM(bb) ? function(bb, wb) {
            for (var Mb = -1, eb = Array(bb); ++Mb < bb;) eb[Mb] = wb(Mb);
            return eb
          }(bb.length, String) : [],
          eb = Mb.length,
          Hb = !!eb;
        for (var pb in bb) !wb && !Tb.call(bb, pb) || Hb && ("length" == pb || uw(pb, eb)) || Mb.push(pb);
        return Mb
      }

      function Dw(bb, wb) {
        for (var Mb = bb.length; Mb--;)
          if (bM(bb[Mb][0], wb)) return Mb;
        return -1
      }
      Xw.prototype.clear = function() {
        this.__data__ = tw ? tw(null) : {}
      }, Xw.prototype.delete = function(bb) {
        return this.has(bb) && delete this.__data__[bb]
      }, Xw.prototype.get = function(bb) {
        var wb = this.__data__;
        if (tw) {
          var eb = wb[bb];
          return eb === Mb ? void 0 : eb
        }
        return Tb.call(wb, bb) ? wb[bb] : void 0
      }, Xw.prototype.has = function(bb) {
        var wb = this.__data__;
        return tw ? void 0 !== wb[bb] : Tb.call(wb, bb)
      }, Xw.prototype.set = function(bb, wb) {
        return this.__data__[bb] = tw && void 0 === wb ? Mb : wb, this
      }, xw.prototype.clear = function() {
        this.__data__ = []
      }, xw.prototype.delete = function(bb) {
        var wb = this.__data__,
          Mb = Dw(wb, bb);
        return !(Mb < 0) && (Mb == wb.length - 1 ? wb.pop() : Vw.call(wb, Mb, 1), !0)
      }, xw.prototype.get = function(bb) {
        var wb = this.__data__,
          Mb = Dw(wb, bb);
        return Mb < 0 ? void 0 : wb[Mb][1]
      }, xw.prototype.has = function(bb) {
        return Dw(this.__data__, bb) > -1
      }, xw.prototype.set = function(bb, wb) {
        var Mb = this.__data__,
          eb = Dw(Mb, bb);
        return eb < 0 ? Mb.push([bb, wb]) : Mb[eb][1] = wb, this
      }, jw.prototype.clear = function() {
        this.__data__ = {
          hash: new Xw,
          map: new(Lw || xw),
          string: new Xw
        }
      }, jw.prototype.delete = function(bb) {
        return qw(this, bb).delete(bb)
      }, jw.prototype.get = function(bb) {
        return qw(this, bb).get(bb)
      }, jw.prototype.has = function(bb) {
        return qw(this, bb).has(bb)
      }, jw.prototype.set = function(bb, wb) {
        return qw(this, bb).set(bb, wb), this
      }, Kw.prototype.add = Kw.prototype.push = function(bb) {
        return this.__data__.set(bb, Mb), this
      }, Kw.prototype.has = function(bb) {
        return this.__data__.has(bb)
      }, rw.prototype.clear = function() {
        this.__data__ = new xw
      }, rw.prototype.delete = function(bb) {
        return this.__data__.delete(bb)
      }, rw.prototype.get = function(bb) {
        return this.__data__.get(bb)
      }, rw.prototype.has = function(bb) {
        return this.__data__.has(bb)
      }, rw.prototype.set = function(bb, wb) {
        var Mb = this.__data__;
        if (Mb instanceof xw) {
          var eb = Mb.__data__;
          if (!Lw || eb.length < 199) return eb.push([bb, wb]), this;
          Mb = this.__data__ = new jw(eb)
        }
        return Mb.set(bb, wb), this
      };
      var Yw, Zw = function(bb, wb, Mb) {
        for (var eb = -1, Hb = Object(bb), pb = Mb(bb), Vb = pb.length; Vb--;) {
          var gb = pb[Yw ? Vb : ++eb];
          if (!1 === wb(Hb[gb], gb, Hb)) break
        }
        return bb
      };

      function fw(bb, wb) {
        return bb && Zw(bb, wb, OM)
      }

      function Aw(bb, wb) {
        for (var Mb = 0, eb = (wb = dw(wb, bb) ? [wb] : Qw(wb)).length; null != bb && Mb < eb;) bb = bb[ow(wb[Mb++])];
        return Mb && Mb == eb ? bb : void 0
      }

      function Ww(bb, wb) {
        return null != bb && wb in Object(bb)
      }

      function Jw(bb, wb, Mb, eb, Hb) {
        return bb === wb || (null == bb || null == wb || !VM(bb) && !gM(wb) ? bb !== bb && wb !== wb : function(bb, wb, Mb, eb, Hb, Ib) {
          var Cb = MM(bb),
            mb = MM(wb),
            Xb = Vb,
            xb = Vb;
          Cb || (Xb = (Xb = iw(bb)) == pb ? tb : Xb);
          mb || (xb = (xb = iw(wb)) == pb ? tb : xb);
          var jb = Xb == tb && !Gb(bb),
            Kb = xb == tb && !Gb(wb),
            rb = Xb == xb;
          if (rb && !jb) return Ib || (Ib = new rw), Cb || IM(bb) ? Gw(bb, wb, Mb, eb, Hb, Ib) : function(bb, wb, Mb, eb, Hb, pb, Vb) {
            switch (Mb) {
              case zb:
                if (bb.byteLength != wb.byteLength || bb.byteOffset != wb.byteOffset) return !1;
                bb = bb.buffer, wb = wb.buffer;
              case hb:
                return !(bb.byteLength != wb.byteLength || !eb(new Mw(bb), new Mw(wb)));
              case gb:
              case lb:
              case Ub:
                return bM(+bb, +wb);
              case Lb:
                return bb.name == wb.name && bb.message == wb.message;
              case Eb:
              case Bb:
                return bb == wb + "";
              case Ob:
                var Ib = qb;
              case Fb:
                var tb = 2 & pb;
                if (Ib || (Ib = ib), bb.size != wb.size && !tb) return !1;
                var Cb = Vb.get(bb);
                if (Cb) return Cb == wb;
                pb |= 1, Vb.set(bb, wb);
                var mb = Gw(Ib(bb), Ib(wb), eb, Hb, pb, Vb);
                return Vb.delete(bb), mb;
              case sb:
                if (hw) return hw.call(bb) == hw.call(wb)
            }
            return !1
          }(bb, wb, Xb, Mb, eb, Hb, Ib);
          if (!(2 & Hb)) {
            var Rb = jb && Tb.call(bb, "__wrapped__"),
              Db = Kb && Tb.call(wb, "__wrapped__");
            if (Rb || Db) {
              var cb = Rb ? bb.value() : bb,
                Yb = Db ? wb.value() : wb;
              return Ib || (Ib = new rw), Mb(cb, Yb, eb, Hb, Ib)
            }
          }
          if (!rb) return !1;
          return Ib || (Ib = new rw),
            function(bb, wb, Mb, eb, Hb, pb) {
              var Vb = 2 & Hb,
                gb = OM(bb),
                lb = gb.length,
                Lb = OM(wb),
                Ib = Lb.length;
              if (lb != Ib && !Vb) return !1;
              var Ob = lb;
              for (; Ob--;) {
                var Ub = gb[Ob];
                if (!(Vb ? Ub in wb : Tb.call(wb, Ub))) return !1
              }
              var tb = pb.get(bb);
              if (tb && pb.get(wb)) return tb == wb;
              var Cb = !0;
              pb.set(bb, wb), pb.set(wb, bb);
              var Eb = Vb;
              for (; ++Ob < lb;) {
                var Fb = bb[Ub = gb[Ob]],
                  Bb = wb[Ub];
                if (eb) var sb = Vb ? eb(Bb, Fb, Ub, wb, bb, pb) : eb(Fb, Bb, Ub, bb, wb, pb);
                if (!(void 0 === sb ? Fb === Bb || Mb(Fb, Bb, eb, Hb, pb) : sb)) {
                  Cb = !1;
                  break
                }
                Eb || (Eb = "constructor" == Ub)
              }
              if (Cb && !Eb) {
                var mb = bb.constructor,
                  hb = wb.constructor;
                mb == hb || !("constructor" in bb) || !("constructor" in wb) || "function" == typeof mb && mb instanceof mb && "function" == typeof hb && hb instanceof hb || (Cb = !1)
              }
              return pb.delete(bb), pb.delete(wb), Cb
            }(bb, wb, Mb, eb, Hb, Ib)
        }(bb, wb, Jw, Mb, eb, Hb))
      }

      function Sw(bb) {
        return !(!VM(bb) || (wb = bb, yb && yb in wb)) && (HM(bb) || Gb(bb) ? bw : Rb).test(Tw(bb));
        var wb
      }

      function Nw(bb) {
        return "function" == typeof bb ? bb : null == bb ? UM : "object" == typeof bb ? MM(bb) ? function(bb, wb) {
          if (dw(bb) && Pw(wb)) return nw(ow(bb), wb);
          return function(Mb) {
            var eb = function(bb, wb, Mb) {
              var eb = null == bb ? void 0 : Aw(bb, wb);
              return void 0 === eb ? Mb : eb
            }(Mb, bb);
            return void 0 === eb && eb === wb ? function(bb, wb) {
              return null != bb && function(bb, wb, Mb) {
                wb = dw(wb, bb) ? [wb] : Qw(wb);
                var eb, Hb = -1,
                  pb = wb.length;
                for (; ++Hb < pb;) {
                  var Vb = ow(wb[Hb]);
                  if (!(eb = null != bb && Mb(bb, Vb))) break;
                  bb = bb[Vb]
                }
                if (eb) return eb;
                pb = bb ? bb.length : 0;
                return !!pb && pM(pb) && uw(Vb, pb) && (MM(bb) || wM(bb))
              }(bb, wb, Ww)
            }(Mb, bb) : Jw(wb, eb, void 0, 3)
          }
        }(bb[0], bb[1]) : function(bb) {
          var wb = function(bb) {
            var wb = OM(bb),
              Mb = wb.length;
            for (; Mb--;) {
              var eb = wb[Mb],
                Hb = bb[eb];
              wb[Mb] = [eb, Hb, Pw(Hb)]
            }
            return wb
          }(bb);
          if (1 == wb.length && wb[0][2]) return nw(wb[0][0], wb[0][1]);
          return function(Mb) {
            return Mb === bb || function(bb, wb, Mb, eb) {
              var Hb = Mb.length,
                pb = Hb,
                Vb = !eb;
              if (null == bb) return !pb;
              for (bb = Object(bb); Hb--;) {
                var gb = Mb[Hb];
                if (Vb && gb[2] ? gb[1] !== bb[gb[0]] : !(gb[0] in bb)) return !1
              }
              for (; ++Hb < pb;) {
                var lb = (gb = Mb[Hb])[0],
                  Lb = bb[lb],
                  Ib = gb[1];
                if (Vb && gb[2]) {
                  if (void 0 === Lb && !(lb in bb)) return !1
                } else {
                  var Ob = new rw;
                  if (eb) var Ub = eb(Lb, Ib, lb, bb, wb, Ob);
                  if (!(void 0 === Ub ? Jw(Ib, Lb, eb, 3, Ob) : Ub)) return !1
                }
              }
              return !0
            }(Mb, bb, wb)
          }
        }(bb) : function(bb) {
          return dw(bb) ? (wb = ow(bb), function(bb) {
            return null == bb ? void 0 : bb[wb]
          }) : function(bb) {
            return function(wb) {
              return Aw(wb, bb)
            }
          }(bb);
          var wb
        }(bb)
      }

      function vw(bb) {
        if (! function(bb) {
            var wb = bb && bb.constructor,
              Mb = "function" == typeof wb && wb.prototype || Pb;
            return bb === Mb
          }(bb)) return gw(bb);
        var wb = [];
        for (var Mb in Object(bb)) Tb.call(bb, Mb) && "constructor" != Mb && wb.push(Mb);
        return wb
      }

      function Qw(bb) {
        return MM(bb) ? bb : yw(bb)
      }

      function Gw(bb, wb, Mb, eb, Hb, pb) {
        var Vb = 2 & Hb,
          gb = bb.length,
          lb = wb.length;
        if (gb != lb && !(Vb && lb > gb)) return !1;
        var Lb = pb.get(bb);
        if (Lb && pb.get(wb)) return Lb == wb;
        var Ib = -1,
          Ob = !0,
          Ub = 1 & Hb ? new Kw : void 0;
        for (pb.set(bb, wb), pb.set(wb, bb); ++Ib < gb;) {
          var tb = bb[Ib],
            Cb = wb[Ib];
          if (eb) var Eb = Vb ? eb(Cb, tb, Ib, wb, bb, pb) : eb(tb, Cb, Ib, bb, wb, pb);
          if (void 0 !== Eb) {
            if (Eb) continue;
            Ob = !1;
            break
          }
          if (Ub) {
            if (!Qb(wb, (function(bb, wb) {
                if (!Ub.has(wb) && (tb === bb || Mb(tb, bb, eb, Hb, pb))) return Ub.add(wb)
              }))) {
              Ob = !1;
              break
            }
          } else if (tb !== Cb && !Mb(tb, Cb, eb, Hb, pb)) {
            Ob = !1;
            break
          }
        }
        return pb.delete(bb), pb.delete(wb), Ob
      }

      function qw(bb, wb) {
        var Mb = bb.__data__;
        return function(bb) {
          var wb = typeof bb;
          return "string" == wb || "number" == wb || "symbol" == wb || "boolean" == wb ? "__proto__" !== bb : null === bb
        }(wb) ? Mb["string" == typeof wb ? "string" : "hash"] : Mb.map
      }

      function aw(bb, wb) {
        var Mb = function(bb, wb) {
          return null == bb ? void 0 : bb[wb]
        }(bb, wb);
        return Sw(Mb) ? Mb : void 0
      }
      var iw = function(bb) {
        return kb.call(bb)
      };

      function uw(bb, wb) {
        return !!(wb = null == wb ? eb : wb) && ("number" == typeof bb || Db.test(bb)) && bb > -1 && bb % 1 == 0 && bb < wb
      }

      function dw(bb, wb) {
        if (MM(bb)) return !1;
        var Mb = typeof bb;
        return !("number" != Mb && "symbol" != Mb && "boolean" != Mb && null != bb && !lM(bb)) || (xb.test(bb) || !Xb.test(bb) || null != wb && bb in Object(wb))
      }

      function Pw(bb) {
        return bb === bb && !VM(bb)
      }

      function nw(bb, wb) {
        return function(Mb) {
          return null != Mb && (Mb[bb] === wb && (void 0 !== wb || bb in Object(Mb)))
        }
      }(lw && iw(new lw(new ArrayBuffer(1))) != zb || Lw && iw(new Lw) != Ob || Iw && iw(Iw.resolve()) != Cb || Ow && iw(new Ow) != Fb || Uw && iw(new Uw) != mb) && (iw = function(bb) {
        var wb = kb.call(bb),
          Mb = wb == tb ? bb.constructor : void 0,
          eb = Mb ? Tw(Mb) : void 0;
        if (eb) switch (eb) {
          case Cw:
            return zb;
          case Ew:
            return Ob;
          case Fw:
            return Cb;
          case Bw:
            return Fb;
          case sw:
            return mb
        }
        return wb
      });
      var yw = kw((function(bb) {
        var wb;
        bb = null == (wb = bb) ? "" : function(bb) {
          if ("string" == typeof bb) return bb;
          if (lM(bb)) return zw ? zw.call(bb) : "";
          var wb = bb + "";
          return "0" == wb && 1 / bb == -1 / 0 ? "-0" : wb
        }(wb);
        var Mb = [];
        return jb.test(bb) && Mb.push(""), bb.replace(Kb, (function(bb, wb, eb, Hb) {
          Mb.push(eb ? Hb.replace(rb, "$1") : wb || bb)
        })), Mb
      }));

      function ow(bb) {
        if ("string" == typeof bb || lM(bb)) return bb;
        var wb = bb + "";
        return "0" == wb && 1 / bb == -1 / 0 ? "-0" : wb
      }

      function Tw(bb) {
        if (null != bb) {
          try {
            return ob.call(bb)
          } catch (wb) {}
          try {
            return bb + ""
          } catch (wb) {}
        }
        return ""
      }

      function kw(bb, wb) {
        if ("function" != typeof bb || wb && "function" != typeof wb) throw new TypeError("Expected a function");
        var Mb = function() {
          var eb = arguments,
            Hb = wb ? wb.apply(this, eb) : eb[0],
            pb = Mb.cache;
          if (pb.has(Hb)) return pb.get(Hb);
          var Vb = bb.apply(this, eb);
          return Mb.cache = pb.set(Hb, Vb), Vb
        };
        return Mb.cache = new(kw.Cache || jw), Mb
      }

      function bM(bb, wb) {
        return bb === wb || bb !== bb && wb !== wb
      }

      function wM(bb) {
        return function(bb) {
          return gM(bb) && eM(bb)
        }(bb) && Tb.call(bb, "callee") && (!pw.call(bb, "callee") || kb.call(bb) == pb)
      }
      kw.Cache = jw;
      var MM = Array.isArray;

      function eM(bb) {
        return null != bb && pM(bb.length) && !HM(bb)
      }

      function HM(bb) {
        var wb = VM(bb) ? kb.call(bb) : "";
        return wb == Ib || "[object GeneratorFunction]" == wb
      }

      function pM(bb) {
        return "number" == typeof bb && bb > -1 && bb % 1 == 0 && bb <= eb
      }

      function VM(bb) {
        var wb = typeof bb;
        return !!bb && ("object" == wb || "function" == wb)
      }

      function gM(bb) {
        return !!bb && "object" == typeof bb
      }

      function lM(bb) {
        return "symbol" == typeof bb || gM(bb) && kb.call(bb) == sb
      }
      var LM, IM = Nb ? (LM = Nb, function(bb) {
        return LM(bb)
      }) : function(bb) {
        return gM(bb) && pM(bb.length) && !!cb[kb.call(bb)]
      };

      function OM(bb) {
        return eM(bb) ? Rw(bb) : vw(bb)
      }

      function UM(bb) {
        return bb
      }
      bb.exports = function(bb, wb, Mb) {
        var eb, Hb = MM(bb) || IM(bb);
        if (wb = Nw(wb), null == Mb)
          if (Hb || VM(bb)) {
            var pb = bb.constructor;
            Mb = Hb ? MM(bb) ? new pb : [] : HM(pb) ? VM(eb = ew(bb)) ? Hw(eb) : {} : {}
          } else Mb = {};
        return (Hb ? vb : fw)(bb, (function(bb, eb, Hb) {
          return wb(Mb, bb, eb, Hb)
        })), Mb
      }
    }(Sp, Sp.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      o: Np
    } = eb
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);