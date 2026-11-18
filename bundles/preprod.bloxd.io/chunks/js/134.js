export const id = 134;
export const ids = [134];
export const modules = {
  7253: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => ff,
      f: () => rU
    });
    var Uy = {};
    Wy.r(Uy), Wy.d(Uy, {
      e: () => UU,
      l: () => ZU,
      i: () => fU,
      p: () => zU,
      q: () => NW,
      s: () => ih,
      u: () => AW,
      v: () => XU,
      x: () => JU,
      B: () => YU,
      E: () => IW,
      H: () => GU,
      K: () => vh,
      O: () => MU,
      U: () => xU,
      S: () => bh,
      W: () => RU,
      Z: () => OU
    });
    var hy = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function fy(yb) {
      return yb && yb.__esModule && Object.prototype.hasOwnProperty.call(yb, "default") ? yb.default : yb
    }
    var Zy = {
      exports: {}
    };
    ! function(yb) {
      var bb = Object.prototype.hasOwnProperty,
        Wy = "~";

      function Uy() {}

      function hy(yb, bb, Wy) {
        this.EU = yb, this.context = bb, this.once = Wy || !1
      }

      function fy(yb, bb, Uy, fy, Zy) {
        if ("function" !== typeof Uy) throw new TypeError("The listener must be a function");
        var cb = new hy(Uy, fy || yb, Zy),
          Py = Wy ? Wy + bb : bb;
        return yb._events[Py] ? yb._events[Py].EU ? yb._events[Py] = [yb._events[Py], cb] : yb._events[Py].push(cb) : (yb._events[Py] = cb, yb._eventsCount++), yb
      }

      function Zy(yb, bb) {
        0 === --yb._eventsCount ? yb._events = new Uy : delete yb._events[bb]
      }

      function cb() {
        this._events = new Uy, this._eventsCount = 0
      }
      Object.create && (Uy.prototype = Object.create(null), (new Uy).__proto__ || (Wy = !1)), cb.prototype.eventNames = function() {
        var yb, Uy, hy = [];
        if (0 === this._eventsCount) return hy;
        for (Uy in yb = this._events) bb.call(yb, Uy) && hy.push(Wy ? Uy.slice(1) : Uy);
        return Object.getOwnPropertySymbols ? hy.concat(Object.getOwnPropertySymbols(yb)) : hy
      }, cb.prototype.listeners = function(yb) {
        var bb = Wy ? Wy + yb : yb,
          Uy = this._events[bb];
        if (!Uy) return [];
        if (Uy.EU) return [Uy.EU];
        for (var hy = 0, fy = Uy.length, Zy = new Array(fy); hy < fy; hy++) Zy[hy] = Uy[hy].EU;
        return Zy
      }, cb.prototype.listenerCount = function(yb) {
        var bb = Wy ? Wy + yb : yb,
          Uy = this._events[bb];
        return Uy ? Uy.EU ? 1 : Uy.length : 0
      }, cb.prototype.emit = function(yb, bb, Uy, hy, fy, Zy) {
        var cb = Wy ? Wy + yb : yb;
        if (!this._events[cb]) return !1;
        var Py, oy, By = this._events[cb],
          Ky = arguments.length;
        if (By.EU) {
          switch (By.once && this.removeListener(yb, By.EU, void 0, !0), Ky) {
            case 1:
              return By.EU.call(By.context), !0;
            case 2:
              return By.EU.call(By.context, bb), !0;
            case 3:
              return By.EU.call(By.context, bb, Uy), !0;
            case 4:
              return By.EU.call(By.context, bb, Uy, hy), !0;
            case 5:
              return By.EU.call(By.context, bb, Uy, hy, fy), !0;
            case 6:
              return By.EU.call(By.context, bb, Uy, hy, fy, Zy), !0
          }
          for (oy = 1, Py = new Array(Ky - 1); oy < Ky; oy++) Py[oy - 1] = arguments[oy];
          By.EU.apply(By.context, Py)
        } else {
          var ey, qb = By.length;
          for (oy = 0; oy < qb; oy++) switch (By[oy].once && this.removeListener(yb, By[oy].EU, void 0, !0), Ky) {
            case 1:
              By[oy].EU.call(By[oy].context);
              break;
            case 2:
              By[oy].EU.call(By[oy].context, bb);
              break;
            case 3:
              By[oy].EU.call(By[oy].context, bb, Uy);
              break;
            case 4:
              By[oy].EU.call(By[oy].context, bb, Uy, hy);
              break;
            default:
              if (!Py)
                for (ey = 1, Py = new Array(Ky - 1); ey < Ky; ey++) Py[ey - 1] = arguments[ey];
              By[oy].EU.apply(By[oy].context, Py)
          }
        }
        return !0
      }, cb.prototype.on = function(yb, bb, Wy) {
        return fy(this, yb, bb, Wy, !1)
      }, cb.prototype.once = function(yb, bb, Wy) {
        return fy(this, yb, bb, Wy, !0)
      }, cb.prototype.removeListener = function(yb, bb, Uy, hy) {
        var fy = Wy ? Wy + yb : yb;
        if (!this._events[fy]) return this;
        if (!bb) return Zy(this, fy), this;
        var cb = this._events[fy];
        if (cb.EU) cb.EU !== bb || hy && !cb.once || Uy && cb.context !== Uy || Zy(this, fy);
        else {
          for (var Py = 0, oy = [], By = cb.length; Py < By; Py++)(cb[Py].EU !== bb || hy && !cb[Py].once || Uy && cb[Py].context !== Uy) && oy.push(cb[Py]);
          oy.length ? this._events[fy] = 1 === oy.length ? oy[0] : oy : Zy(this, fy)
        }
        return this
      }, cb.prototype.XB = function(yb) {
        var bb;
        return yb ? (bb = Wy ? Wy + yb : yb, this._events[bb] && Zy(this, bb)) : (this._events = new Uy, this._eventsCount = 0), this
      }, cb.prototype.off = cb.prototype.removeListener, cb.prototype.addListener = cb.prototype.on, cb.prefixed = Wy, cb.EventEmitter = cb, yb.exports = cb
    }(Zy);
    var cb, Py, oy = fy(Zy.exports);
    ! function(yb) {
      yb.assertEqual = yb => yb, yb.assertIs = function(yb) {}, yb.assertNever = function(yb) {
        throw new Error
      }, yb.arrayToEnum = yb => {
        const bb = {};
        for (const Wy of yb) bb[Wy] = Wy;
        return bb
      }, yb.getValidEnumValues = bb => {
        const Wy = yb.objectKeys(bb).filter((yb => "number" !== typeof bb[bb[yb]])),
          Uy = {};
        for (const yb of Wy) Uy[yb] = bb[yb];
        return yb.objectValues(Uy)
      }, yb.objectValues = bb => yb.objectKeys(bb).map((function(yb) {
        return bb[yb]
      })), yb.objectKeys = "function" === typeof Object.keys ? yb => Object.keys(yb) : yb => {
        const bb = [];
        for (const Wy in yb) Object.prototype.hasOwnProperty.call(yb, Wy) && bb.push(Wy);
        return bb
      }, yb.find = (yb, bb) => {
        for (const Wy of yb)
          if (bb(Wy)) return Wy
      }, yb.isInteger = "function" === typeof Number.isInteger ? yb => Number.isInteger(yb) : yb => "number" === typeof yb && isFinite(yb) && Math.floor(yb) === yb, yb.joinValues = function(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return yb.map((yb => "string" === typeof yb ? `'${yb}'` : yb)).join(bb)
      }, yb.jsonStringifyReplacer = (yb, bb) => "bigint" === typeof bb ? bb.toString() : bb
    }(cb || (cb = {})),
    function(yb) {
      yb.mergeShapes = (yb, bb) => ({
        ...yb,
        ...bb
      })
    }(Py || (Py = {}));
    const By = cb.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      Ky = yb => {
        switch (typeof yb) {
          case "undefined":
            return By.undefined;
          case "string":
            return By.string;
          case "number":
            return isNaN(yb) ? By.nan : By.number;
          case "boolean":
            return By.boolean;
          case "function":
            return By.function;
          case "bigint":
            return By.bigint;
          case "symbol":
            return By.symbol;
          case "object":
            return Array.isArray(yb) ? By.array : null === yb ? By.null : yb.then && "function" === typeof yb.then && yb.catch && "function" === typeof yb.catch ? By.promise : "undefined" !== typeof Map && yb instanceof Map ? By.map : "undefined" !== typeof Set && yb instanceof Set ? By.set : "undefined" !== typeof Date && yb instanceof Date ? By.date : By.object;
          default:
            return By.unknown
        }
      },
      ey = cb.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class qb extends Error {
      constructor(yb) {
        var bb;
        super(), bb = this, this.issues = [], this.addIssue = yb => {
          this.issues = [...this.issues, yb]
        }, this.addIssues = function() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          bb.issues = [...bb.issues, ...yb]
        };
        const Wy = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, Wy) : this.__proto__ = Wy, this.name = "ZodError", this.issues = yb
      }
      get errors() {
        return this.issues
      }
      format(yb) {
        const bb = yb || function(yb) {
            return yb.message
          },
          Wy = {
            _errors: []
          },
          Uy = yb => {
            for (const hy of yb.issues)
              if ("invalid_union" === hy.code) hy.unionErrors.map(Uy);
              else if ("invalid_return_type" === hy.code) Uy(hy.returnTypeError);
            else if ("invalid_arguments" === hy.code) Uy(hy.argumentsError);
            else if (0 === hy.path.length) Wy._errors.push(bb(hy));
            else {
              let yb = Wy,
                Uy = 0;
              for (; Uy < hy.path.length;) {
                const Wy = hy.path[Uy];
                Uy === hy.path.length - 1 ? (yb[Wy] = yb[Wy] || {
                  _errors: []
                }, yb[Wy]._errors.push(bb(hy))) : yb[Wy] = yb[Wy] || {
                  _errors: []
                }, yb = yb[Wy], Uy++
              }
            }
          };
        return Uy(this), Wy
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, cb.jsonStringifyReplacer, 2)
      }
      get gh() {
        return 0 === this.issues.length
      }
      flatten() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yb => yb.message;
        const bb = {},
          Wy = [];
        for (const Uy of this.issues) Uy.path.length > 0 ? (bb[Uy.path[0]] = bb[Uy.path[0]] || [], bb[Uy.path[0]].push(yb(Uy))) : Wy.push(yb(Uy));
        return {
          formErrors: Wy,
          fieldErrors: bb
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    qb.create = yb => new qb(yb);
    const sy = (yb, bb) => {
      let Wy;
      switch (yb.code) {
        case ey.invalid_type:
          Wy = yb.received === By.undefined ? "Required" : `Expected ${yb.expected}, received ${yb.received}`;
          break;
        case ey.invalid_literal:
          Wy = `Invalid literal value, expected ${JSON.stringify(yb.expected,cb.jsonStringifyReplacer)}`;
          break;
        case ey.unrecognized_keys:
          Wy = `Unrecognized key(s) in object: ${cb.joinValues(yb.keys,", ")}`;
          break;
        case ey.invalid_union:
          Wy = "Invalid input";
          break;
        case ey.invalid_union_discriminator:
          Wy = `Invalid discriminator value. Expected ${cb.joinValues(yb.options)}`;
          break;
        case ey.invalid_enum_value:
          Wy = `Invalid enum value. Expected ${cb.joinValues(yb.options)}, received '${yb.received}'`;
          break;
        case ey.invalid_arguments:
          Wy = "Invalid function arguments";
          break;
        case ey.invalid_return_type:
          Wy = "Invalid function return type";
          break;
        case ey.invalid_date:
          Wy = "Invalid date";
          break;
        case ey.invalid_string:
          "object" === typeof yb.validation ? "includes" in yb.validation ? (Wy = `Invalid input: must include "${yb.validation.includes}"`, "number" === typeof yb.validation.position && (Wy = `${Wy} at one or more positions greater than or equal to ${yb.validation.position}`)) : "startsWith" in yb.validation ? Wy = `Invalid input: must start with "${yb.validation.startsWith}"` : "endsWith" in yb.validation ? Wy = `Invalid input: must end with "${yb.validation.endsWith}"` : cb.assertNever(yb.validation) : Wy = "regex" !== yb.validation ? `Invalid ${yb.validation}` : "Invalid";
          break;
        case ey.too_small:
          Wy = "array" === yb.type ? `Array must contain ${yb.exact?"exactly":yb.inclusive?"at least":"more than"} ${yb.minimum} element(s)` : "string" === yb.type ? `String must contain ${yb.exact?"exactly":yb.inclusive?"at least":"over"} ${yb.minimum} character(s)` : "number" === yb.type ? `Number must be ${yb.exact?"exactly equal to ":yb.inclusive?"greater than or equal to ":"greater than "}${yb.minimum}` : "date" === yb.type ? `Date must be ${yb.exact?"exactly equal to ":yb.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(yb.minimum))}` : "Invalid input";
          break;
        case ey.too_big:
          Wy = "array" === yb.type ? `Array must contain ${yb.exact?"exactly":yb.inclusive?"at most":"less than"} ${yb.maximum} element(s)` : "string" === yb.type ? `String must contain ${yb.exact?"exactly":yb.inclusive?"at most":"under"} ${yb.maximum} character(s)` : "number" === yb.type ? `Number must be ${yb.exact?"exactly":yb.inclusive?"less than or equal to":"less than"} ${yb.maximum}` : "bigint" === yb.type ? `BigInt must be ${yb.exact?"exactly":yb.inclusive?"less than or equal to":"less than"} ${yb.maximum}` : "date" === yb.type ? `Date must be ${yb.exact?"exactly":yb.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(yb.maximum))}` : "Invalid input";
          break;
        case ey.custom:
          Wy = "Invalid input";
          break;
        case ey.invalid_intersection_types:
          Wy = "Intersection results could not be merged";
          break;
        case ey.not_multiple_of:
          Wy = `Number must be a multiple of ${yb.multipleOf}`;
          break;
        case ey.not_finite:
          Wy = "Number must be finite";
          break;
        default:
          Wy = bb.defaultError, cb.assertNever(yb)
      }
      return {
        message: Wy
      }
    };
    let Sy = sy;

    function Ey() {
      return Sy
    }
    const ly = yb => {
      const {
        data: bb,
        path: Wy,
        errorMaps: Uy,
        issueData: hy
      } = yb, fy = [...Wy, ...hy.path || []], Zy = {
        ...hy,
        path: fy
      };
      let cb = "";
      const Py = Uy.filter((yb => !!yb)).slice().reverse();
      for (const oy of Py) cb = oy(Zy, {
        data: bb,
        defaultError: cb
      }).message;
      return {
        ...hy,
        path: fy,
        message: hy.message || cb
      }
    };

    function mb(yb, bb) {
      const Wy = ly({
        issueData: bb,
        data: yb.data,
        path: yb.path,
        errorMaps: [yb.common.contextualErrorMap, yb.schemaErrorMap, Ey(), sy].filter((yb => !!yb))
      });
      yb.common.issues.push(Wy)
    }
    class Cy {
      constructor() {
        this.value = "valid"
      }
      hh() {
        "valid" === this.value && (this.value = "hh")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(yb, bb) {
        const Wy = [];
        for (const Uy of bb) {
          if ("aborted" === Uy.status) return Ty;
          "hh" === Uy.status && yb.hh(), Wy.push(Uy.value)
        }
        return {
          status: yb.value,
          value: Wy
        }
      }
      static async mergeObjectAsync(yb, bb) {
        const Wy = [];
        for (const Uy of bb) Wy.push({
          key: await Uy.key,
          value: await Uy.value
        });
        return Cy.mergeObjectSync(yb, Wy)
      }
      static mergeObjectSync(yb, bb) {
        const Wy = {};
        for (const Uy of bb) {
          const {
            key: bb,
            value: hy
          } = Uy;
          if ("aborted" === bb.status) return Ty;
          if ("aborted" === hy.status) return Ty;
          "hh" === bb.status && yb.hh(), "hh" === hy.status && yb.hh(), "__proto__" === bb.value || "undefined" === typeof hy.value && !Uy.alwaysSet || (Wy[bb.value] = hy.value)
        }
        return {
          status: yb.value,
          value: Wy
        }
      }
    }
    const Ty = Object.freeze({
        status: "aborted"
      }),
      Vy = yb => ({
        status: "hh",
        value: yb
      }),
      Jy = yb => ({
        status: "valid",
        value: yb
      }),
      gb = yb => "aborted" === yb.status,
      Gy = yb => "hh" === yb.status,
      Oy = yb => "valid" === yb.status,
      Ry = yb => "undefined" !== typeof Promise && yb instanceof Promise;
    var vb;
    ! function(yb) {
      yb.errToObj = yb => "string" === typeof yb ? {
        message: yb
      } : yb || {}, yb.toString = yb => "string" === typeof yb ? yb : null === yb || void 0 === yb ? void 0 : yb.message
    }(vb || (vb = {}));
    class ib {
      constructor(yb, bb, Wy, Uy) {
        this._cachedPath = [], this.parent = yb, this.data = bb, this._path = Wy, this._key = Uy
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const My = (yb, bb) => {
      if (Oy(bb)) return {
        success: !0,
        data: bb.value
      };
      if (!yb.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const bb = new qb(yb.common.issues);
          return this._error = bb, this._error
        }
      }
    };

    function Yy(yb) {
      if (!yb) return {};
      const {
        errorMap: bb,
        invalid_type_error: Wy,
        required_error: Uy,
        description: hy
      } = yb;
      if (bb && (Wy || Uy)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (bb) return {
        errorMap: bb,
        description: hy
      };
      return {
        errorMap: (yb, bb) => "invalid_type" !== yb.code ? {
          message: bb.defaultError
        } : "undefined" === typeof bb.data ? {
          message: null !== Uy && void 0 !== Uy ? Uy : bb.defaultError
        } : {
          message: null !== Wy && void 0 !== Wy ? Wy : bb.defaultError
        },
        description: hy
      }
    }
    class Xy {
      constructor(yb) {
        this.spa = this.safeParseAsync, this._def = yb, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(yb) {
        return Ky(yb.data)
      }
      _getOrReturnCtx(yb, bb) {
        return bb || {
          common: yb.parent.common,
          data: yb.data,
          parsedType: Ky(yb.data),
          schemaErrorMap: this._def.errorMap,
          path: yb.path,
          parent: yb.parent
        }
      }
      _processInputParams(yb) {
        return {
          status: new Cy,
          ctx: {
            common: yb.parent.common,
            data: yb.data,
            parsedType: Ky(yb.data),
            schemaErrorMap: this._def.errorMap,
            path: yb.path,
            parent: yb.parent
          }
        }
      }
      _parseSync(yb) {
        const bb = this._parse(yb);
        if (Ry(bb)) throw new Error("Synchronous parse encountered promise.");
        return bb
      }
      _parseAsync(yb) {
        const bb = this._parse(yb);
        return Promise.resolve(bb)
      }
      parse(yb, bb) {
        const Wy = this.safeParse(yb, bb);
        if (Wy.success) return Wy.data;
        throw Wy.error
      }
      safeParse(yb, bb) {
        var Wy;
        const Uy = {
            common: {
              issues: [],
              async: null !== (Wy = null === bb || void 0 === bb ? void 0 : bb.async) && void 0 !== Wy && Wy,
              contextualErrorMap: null === bb || void 0 === bb ? void 0 : bb.errorMap
            },
            path: (null === bb || void 0 === bb ? void 0 : bb.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: yb,
            parsedType: Ky(yb)
          },
          hy = this._parseSync({
            data: yb,
            path: Uy.path,
            parent: Uy
          });
        return My(Uy, hy)
      }
      async parseAsync(yb, bb) {
        const Wy = await this.safeParseAsync(yb, bb);
        if (Wy.success) return Wy.data;
        throw Wy.error
      }
      async safeParseAsync(yb, bb) {
        const Wy = {
            common: {
              issues: [],
              contextualErrorMap: null === bb || void 0 === bb ? void 0 : bb.errorMap,
              async: !0
            },
            path: (null === bb || void 0 === bb ? void 0 : bb.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: yb,
            parsedType: Ky(yb)
          },
          Uy = this._parse({
            data: yb,
            path: Wy.path,
            parent: Wy
          }),
          hy = await (Ry(Uy) ? Uy : Promise.resolve(Uy));
        return My(Wy, hy)
      }
      refine(yb, bb) {
        const Wy = yb => "string" === typeof bb || "undefined" === typeof bb ? {
          message: bb
        } : "function" === typeof bb ? bb(yb) : bb;
        return this._refinement(((bb, Uy) => {
          const hy = yb(bb),
            fy = () => Uy.addIssue({
              code: ey.custom,
              ...Wy(bb)
            });
          return "undefined" !== typeof Promise && hy instanceof Promise ? hy.then((yb => !!yb || (fy(), !1))) : !!hy || (fy(), !1)
        }))
      }
      refinement(yb, bb) {
        return this._refinement(((Wy, Uy) => !!yb(Wy) || (Uy.addIssue("function" === typeof bb ? bb(Wy, Uy) : bb), !1)))
      }
      _refinement(yb) {
        return new Tb({
          schema: this,
          typeName: nb.ZodEffects,
          effect: {
            type: "refinement",
            refinement: yb
          }
        })
      }
      superRefine(yb) {
        return this._refinement(yb)
      }
      optional() {
        return Vb.create(this, this._def)
      }
      nullable() {
        return Jb.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return bW.create(this, this._def)
      }
      promise() {
        return Cb.create(this, this._def)
      }
      or(yb) {
        return hb.create([this, yb], this._def)
      }
      and(yb) {
        return Pb.create(this, yb, this._def)
      }
      transform(yb) {
        return new Tb({
          ...Yy(this._def),
          schema: this,
          typeName: nb.ZodEffects,
          effect: {
            type: "transform",
            transform: yb
          }
        })
      }
      default (yb) {
        const bb = "function" === typeof yb ? yb : () => yb;
        return new gW({
          ...Yy(this._def),
          innerType: this,
          defaultValue: bb,
          typeName: nb.ZodDefault
        })
      }
      brand() {
        return new vW({
          typeName: nb.ZodBranded,
          type: this,
          ...Yy(this._def)
        })
      } catch (yb) {
        const bb = "function" === typeof yb ? yb : () => yb;
        return new Gb({
          ...Yy(this._def),
          innerType: this,
          catchValue: bb,
          typeName: nb.ZodCatch
        })
      }
      describe(yb) {
        return new(0, this.constructor)({
          ...this._def,
          description: yb
        })
      }
      pipe(yb) {
        return iW.create(this, yb)
      }
      readonly() {
        return Mb.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const ny = /^c[^\s-]{8,}$/i,
      uy = /^[a-z][a-z0-9]*$/,
      rb = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      Hy = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      ab = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let Fy;
    const py = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      Ly = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class Qy extends Xy {
      _parse(yb) {
        this._def.coerce && (yb.data = String(yb.data));
        if (this._getType(yb) !== By.string) {
          const bb = this._getOrReturnCtx(yb);
          return mb(bb, {
            code: ey.invalid_type,
            expected: By.string,
            received: bb.parsedType
          }), Ty
        }
        const bb = new Cy;
        let Wy;
        for (const Py of this._def.checks)
          if ("min" === Py.kind) yb.data.length < Py.value && (Wy = this._getOrReturnCtx(yb, Wy), mb(Wy, {
            code: ey.too_small,
            minimum: Py.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: Py.message
          }), bb.hh());
          else if ("max" === Py.kind) yb.data.length > Py.value && (Wy = this._getOrReturnCtx(yb, Wy), mb(Wy, {
          code: ey.too_big,
          maximum: Py.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: Py.message
        }), bb.hh());
        else if ("length" === Py.kind) {
          const Uy = yb.data.length > Py.value,
            hy = yb.data.length < Py.value;
          (Uy || hy) && (Wy = this._getOrReturnCtx(yb, Wy), Uy ? mb(Wy, {
            code: ey.too_big,
            maximum: Py.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: Py.message
          }) : hy && mb(Wy, {
            code: ey.too_small,
            minimum: Py.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: Py.message
          }), bb.hh())
        } else if ("email" === Py.kind) ab.test(yb.data) || (Wy = this._getOrReturnCtx(yb, Wy), mb(Wy, {
          validation: "email",
          code: ey.invalid_string,
          message: Py.message
        }), bb.hh());
        else if ("emoji" === Py.kind) Fy || (Fy = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Fy.test(yb.data) || (Wy = this._getOrReturnCtx(yb, Wy), mb(Wy, {
          validation: "emoji",
          code: ey.invalid_string,
          message: Py.message
        }), bb.hh());
        else if ("uuid" === Py.kind) Hy.test(yb.data) || (Wy = this._getOrReturnCtx(yb, Wy), mb(Wy, {
          validation: "uuid",
          code: ey.invalid_string,
          message: Py.message
        }), bb.hh());
        else if ("cuid" === Py.kind) ny.test(yb.data) || (Wy = this._getOrReturnCtx(yb, Wy), mb(Wy, {
          validation: "cuid",
          code: ey.invalid_string,
          message: Py.message
        }), bb.hh());
        else if ("cuid2" === Py.kind) uy.test(yb.data) || (Wy = this._getOrReturnCtx(yb, Wy), mb(Wy, {
          validation: "cuid2",
          code: ey.invalid_string,
          message: Py.message
        }), bb.hh());
        else if ("ulid" === Py.kind) rb.test(yb.data) || (Wy = this._getOrReturnCtx(yb, Wy), mb(Wy, {
          validation: "ulid",
          code: ey.invalid_string,
          message: Py.message
        }), bb.hh());
        else if ("url" === Py.kind) try {
          new URL(yb.data)
        } catch (Zy) {
          Wy = this._getOrReturnCtx(yb, Wy), mb(Wy, {
            validation: "url",
            code: ey.invalid_string,
            message: Py.message
          }), bb.hh()
        } else if ("regex" === Py.kind) {
          Py.regex.lastIndex = 0;
          Py.regex.test(yb.data) || (Wy = this._getOrReturnCtx(yb, Wy), mb(Wy, {
            validation: "regex",
            code: ey.invalid_string,
            message: Py.message
          }), bb.hh())
        } else if ("trim" === Py.kind) yb.data = yb.data.trim();
        else if ("includes" === Py.kind) yb.data.includes(Py.value, Py.position) || (Wy = this._getOrReturnCtx(yb, Wy), mb(Wy, {
          code: ey.invalid_string,
          validation: {
            includes: Py.value,
            position: Py.position
          },
          message: Py.message
        }), bb.hh());
        else if ("toLowerCase" === Py.kind) yb.data = yb.data.toLowerCase();
        else if ("toUpperCase" === Py.kind) yb.data = yb.data.toUpperCase();
        else if ("startsWith" === Py.kind) yb.data.startsWith(Py.value) || (Wy = this._getOrReturnCtx(yb, Wy), mb(Wy, {
          code: ey.invalid_string,
          validation: {
            startsWith: Py.value
          },
          message: Py.message
        }), bb.hh());
        else if ("endsWith" === Py.kind) yb.data.endsWith(Py.value) || (Wy = this._getOrReturnCtx(yb, Wy), mb(Wy, {
          code: ey.invalid_string,
          validation: {
            endsWith: Py.value
          },
          message: Py.message
        }), bb.hh());
        else if ("datetime" === Py.kind) {
          ((fy = Py).precision ? fy.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${fy.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${fy.precision}}Z$`) : 0 === fy.precision ? fy.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : fy.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(yb.data) || (Wy = this._getOrReturnCtx(yb, Wy), mb(Wy, {
            code: ey.invalid_string,
            validation: "datetime",
            message: Py.message
          }), bb.hh())
        } else "ip" === Py.kind ? (Uy = yb.data, ("v4" !== (hy = Py.version) && hy || !py.test(Uy)) && ("v6" !== hy && hy || !Ly.test(Uy)) && (Wy = this._getOrReturnCtx(yb, Wy), mb(Wy, {
          validation: "ip",
          code: ey.invalid_string,
          message: Py.message
        }), bb.hh())) : cb.assertNever(Py);
        var Uy, hy, fy;
        return {
          status: bb.value,
          value: yb.data
        }
      }
      _regex(yb, bb, Wy) {
        return this.refinement((bb => yb.test(bb)), {
          validation: bb,
          code: ey.invalid_string,
          ...vb.errToObj(Wy)
        })
      }
      _addCheck(yb) {
        return new Qy({
          ...this._def,
          checks: [...this._def.checks, yb]
        })
      }
      email(yb) {
        return this._addCheck({
          kind: "email",
          ...vb.errToObj(yb)
        })
      }
      url(yb) {
        return this._addCheck({
          kind: "url",
          ...vb.errToObj(yb)
        })
      }
      emoji(yb) {
        return this._addCheck({
          kind: "emoji",
          ...vb.errToObj(yb)
        })
      }
      uuid(yb) {
        return this._addCheck({
          kind: "uuid",
          ...vb.errToObj(yb)
        })
      }
      cuid(yb) {
        return this._addCheck({
          kind: "cuid",
          ...vb.errToObj(yb)
        })
      }
      cuid2(yb) {
        return this._addCheck({
          kind: "cuid2",
          ...vb.errToObj(yb)
        })
      }
      ulid(yb) {
        return this._addCheck({
          kind: "ulid",
          ...vb.errToObj(yb)
        })
      }
      ip(yb) {
        return this._addCheck({
          kind: "ip",
          ...vb.errToObj(yb)
        })
      }
      datetime(yb) {
        var bb;
        return "string" === typeof yb ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: yb
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === yb || void 0 === yb ? void 0 : yb.precision) ? null : null === yb || void 0 === yb ? void 0 : yb.precision,
          offset: null !== (bb = null === yb || void 0 === yb ? void 0 : yb.offset) && void 0 !== bb && bb,
          ...vb.errToObj(null === yb || void 0 === yb ? void 0 : yb.message)
        })
      }
      regex(yb, bb) {
        return this._addCheck({
          kind: "regex",
          regex: yb,
          ...vb.errToObj(bb)
        })
      }
      includes(yb, bb) {
        return this._addCheck({
          kind: "includes",
          value: yb,
          position: null === bb || void 0 === bb ? void 0 : bb.position,
          ...vb.errToObj(null === bb || void 0 === bb ? void 0 : bb.message)
        })
      }
      startsWith(yb, bb) {
        return this._addCheck({
          kind: "startsWith",
          value: yb,
          ...vb.errToObj(bb)
        })
      }
      endsWith(yb, bb) {
        return this._addCheck({
          kind: "endsWith",
          value: yb,
          ...vb.errToObj(bb)
        })
      }
      min(yb, bb) {
        return this._addCheck({
          kind: "min",
          value: yb,
          ...vb.errToObj(bb)
        })
      }
      max(yb, bb) {
        return this._addCheck({
          kind: "max",
          value: yb,
          ...vb.errToObj(bb)
        })
      }
      length(yb, bb) {
        return this._addCheck({
          kind: "length",
          value: yb,
          ...vb.errToObj(bb)
        })
      }
      nonempty(yb) {
        return this.min(1, vb.errToObj(yb))
      }
      trim() {
        return new Qy({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new Qy({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new Qy({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((yb => "datetime" === yb.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((yb => "email" === yb.kind))
      }
      get isURL() {
        return !!this._def.checks.find((yb => "url" === yb.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((yb => "emoji" === yb.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((yb => "uuid" === yb.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((yb => "cuid" === yb.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((yb => "cuid2" === yb.kind))
      }
      get isULID() {
        return !!this._def.checks.find((yb => "ulid" === yb.kind))
      }
      get isIP() {
        return !!this._def.checks.find((yb => "ip" === yb.kind))
      }
      get minLength() {
        let yb = null;
        for (const bb of this._def.checks) "min" === bb.kind && (null === yb || bb.value > yb) && (yb = bb.value);
        return yb
      }
      get maxLength() {
        let yb = null;
        for (const bb of this._def.checks) "max" === bb.kind && (null === yb || bb.value < yb) && (yb = bb.value);
        return yb
      }
    }

    function jb(yb, bb) {
      const Wy = (yb.toString().split(".")[1] || "").length,
        Uy = (bb.toString().split(".")[1] || "").length,
        hy = Wy > Uy ? Wy : Uy;
      return parseInt(yb.toFixed(hy).replace(".", "")) % parseInt(bb.toFixed(hy).replace(".", "")) / Math.pow(10, hy)
    }
    Qy.create = yb => {
      var bb;
      return new Qy({
        checks: [],
        typeName: nb.ZodString,
        coerce: null !== (bb = null === yb || void 0 === yb ? void 0 : yb.coerce) && void 0 !== bb && bb,
        ...Yy(yb)
      })
    };
    class Dy extends Xy {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(yb) {
        this._def.coerce && (yb.data = Number(yb.data));
        if (this._getType(yb) !== By.number) {
          const bb = this._getOrReturnCtx(yb);
          return mb(bb, {
            code: ey.invalid_type,
            expected: By.number,
            received: bb.parsedType
          }), Ty
        }
        let bb;
        const Wy = new Cy;
        for (const Uy of this._def.checks)
          if ("int" === Uy.kind) cb.isInteger(yb.data) || (bb = this._getOrReturnCtx(yb, bb), mb(bb, {
            code: ey.invalid_type,
            expected: "integer",
            received: "float",
            message: Uy.message
          }), Wy.hh());
          else if ("min" === Uy.kind) {
          (Uy.inclusive ? yb.data < Uy.value : yb.data <= Uy.value) && (bb = this._getOrReturnCtx(yb, bb), mb(bb, {
            code: ey.too_small,
            minimum: Uy.value,
            type: "number",
            inclusive: Uy.inclusive,
            exact: !1,
            message: Uy.message
          }), Wy.hh())
        } else if ("max" === Uy.kind) {
          (Uy.inclusive ? yb.data > Uy.value : yb.data >= Uy.value) && (bb = this._getOrReturnCtx(yb, bb), mb(bb, {
            code: ey.too_big,
            maximum: Uy.value,
            type: "number",
            inclusive: Uy.inclusive,
            exact: !1,
            message: Uy.message
          }), Wy.hh())
        } else "multipleOf" === Uy.kind ? 0 !== jb(yb.data, Uy.value) && (bb = this._getOrReturnCtx(yb, bb), mb(bb, {
          code: ey.not_multiple_of,
          multipleOf: Uy.value,
          message: Uy.message
        }), Wy.hh()) : "finite" === Uy.kind ? Number.isFinite(yb.data) || (bb = this._getOrReturnCtx(yb, bb), mb(bb, {
          code: ey.not_finite,
          message: Uy.message
        }), Wy.hh()) : cb.assertNever(Uy);
        return {
          status: Wy.value,
          value: yb.data
        }
      }
      gte(yb, bb) {
        return this.setLimit("min", yb, !0, vb.toString(bb))
      }
      gt(yb, bb) {
        return this.setLimit("min", yb, !1, vb.toString(bb))
      }
      lte(yb, bb) {
        return this.setLimit("max", yb, !0, vb.toString(bb))
      }
      lt(yb, bb) {
        return this.setLimit("max", yb, !1, vb.toString(bb))
      }
      setLimit(yb, bb, Wy, Uy) {
        return new Dy({
          ...this._def,
          checks: [...this._def.checks, {
            kind: yb,
            value: bb,
            inclusive: Wy,
            message: vb.toString(Uy)
          }]
        })
      }
      _addCheck(yb) {
        return new Dy({
          ...this._def,
          checks: [...this._def.checks, yb]
        })
      }
      int(yb) {
        return this._addCheck({
          kind: "int",
          message: vb.toString(yb)
        })
      }
      positive(yb) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: vb.toString(yb)
        })
      }
      negative(yb) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: vb.toString(yb)
        })
      }
      nonpositive(yb) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: vb.toString(yb)
        })
      }
      nonnegative(yb) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: vb.toString(yb)
        })
      }
      multipleOf(yb, bb) {
        return this._addCheck({
          kind: "multipleOf",
          value: yb,
          message: vb.toString(bb)
        })
      }
      finite(yb) {
        return this._addCheck({
          kind: "finite",
          message: vb.toString(yb)
        })
      }
      safe(yb) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: vb.toString(yb)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: vb.toString(yb)
        })
      }
      get minValue() {
        let yb = null;
        for (const bb of this._def.checks) "min" === bb.kind && (null === yb || bb.value > yb) && (yb = bb.value);
        return yb
      }
      get maxValue() {
        let yb = null;
        for (const bb of this._def.checks) "max" === bb.kind && (null === yb || bb.value < yb) && (yb = bb.value);
        return yb
      }
      get isInt() {
        return !!this._def.checks.find((yb => "int" === yb.kind || "multipleOf" === yb.kind && cb.isInteger(yb.value)))
      }
      get isFinite() {
        let yb = null,
          bb = null;
        for (const Wy of this._def.checks) {
          if ("finite" === Wy.kind || "int" === Wy.kind || "multipleOf" === Wy.kind) return !0;
          "min" === Wy.kind ? (null === bb || Wy.value > bb) && (bb = Wy.value) : "max" === Wy.kind && (null === yb || Wy.value < yb) && (yb = Wy.value)
        }
        return Number.isFinite(bb) && Number.isFinite(yb)
      }
    }
    Dy.create = yb => new Dy({
      checks: [],
      typeName: nb.ZodNumber,
      coerce: (null === yb || void 0 === yb ? void 0 : yb.coerce) || !1,
      ...Yy(yb)
    });
    class tb extends Xy {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(yb) {
        this._def.coerce && (yb.data = BigInt(yb.data));
        if (this._getType(yb) !== By.bigint) {
          const bb = this._getOrReturnCtx(yb);
          return mb(bb, {
            code: ey.invalid_type,
            expected: By.bigint,
            received: bb.parsedType
          }), Ty
        }
        let bb;
        const Wy = new Cy;
        for (const Uy of this._def.checks)
          if ("min" === Uy.kind) {
            (Uy.inclusive ? yb.data < Uy.value : yb.data <= Uy.value) && (bb = this._getOrReturnCtx(yb, bb), mb(bb, {
              code: ey.too_small,
              type: "bigint",
              minimum: Uy.value,
              inclusive: Uy.inclusive,
              message: Uy.message
            }), Wy.hh())
          } else if ("max" === Uy.kind) {
          (Uy.inclusive ? yb.data > Uy.value : yb.data >= Uy.value) && (bb = this._getOrReturnCtx(yb, bb), mb(bb, {
            code: ey.too_big,
            type: "bigint",
            maximum: Uy.value,
            inclusive: Uy.inclusive,
            message: Uy.message
          }), Wy.hh())
        } else "multipleOf" === Uy.kind ? yb.data % Uy.value !== BigInt(0) && (bb = this._getOrReturnCtx(yb, bb), mb(bb, {
          code: ey.not_multiple_of,
          multipleOf: Uy.value,
          message: Uy.message
        }), Wy.hh()) : cb.assertNever(Uy);
        return {
          status: Wy.value,
          value: yb.data
        }
      }
      gte(yb, bb) {
        return this.setLimit("min", yb, !0, vb.toString(bb))
      }
      gt(yb, bb) {
        return this.setLimit("min", yb, !1, vb.toString(bb))
      }
      lte(yb, bb) {
        return this.setLimit("max", yb, !0, vb.toString(bb))
      }
      lt(yb, bb) {
        return this.setLimit("max", yb, !1, vb.toString(bb))
      }
      setLimit(yb, bb, Wy, Uy) {
        return new tb({
          ...this._def,
          checks: [...this._def.checks, {
            kind: yb,
            value: bb,
            inclusive: Wy,
            message: vb.toString(Uy)
          }]
        })
      }
      _addCheck(yb) {
        return new tb({
          ...this._def,
          checks: [...this._def.checks, yb]
        })
      }
      positive(yb) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: vb.toString(yb)
        })
      }
      negative(yb) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: vb.toString(yb)
        })
      }
      nonpositive(yb) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: vb.toString(yb)
        })
      }
      nonnegative(yb) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: vb.toString(yb)
        })
      }
      multipleOf(yb, bb) {
        return this._addCheck({
          kind: "multipleOf",
          value: yb,
          message: vb.toString(bb)
        })
      }
      get minValue() {
        let yb = null;
        for (const bb of this._def.checks) "min" === bb.kind && (null === yb || bb.value > yb) && (yb = bb.value);
        return yb
      }
      get maxValue() {
        let yb = null;
        for (const bb of this._def.checks) "max" === bb.kind && (null === yb || bb.value < yb) && (yb = bb.value);
        return yb
      }
    }
    tb.create = yb => {
      var bb;
      return new tb({
        checks: [],
        typeName: nb.ZodBigInt,
        coerce: null !== (bb = null === yb || void 0 === yb ? void 0 : yb.coerce) && void 0 !== bb && bb,
        ...Yy(yb)
      })
    };
    class wy extends Xy {
      _parse(yb) {
        this._def.coerce && (yb.data = Boolean(yb.data));
        if (this._getType(yb) !== By.boolean) {
          const bb = this._getOrReturnCtx(yb);
          return mb(bb, {
            code: ey.invalid_type,
            expected: By.boolean,
            received: bb.parsedType
          }), Ty
        }
        return Jy(yb.data)
      }
    }
    wy.create = yb => new wy({
      typeName: nb.ZodBoolean,
      coerce: (null === yb || void 0 === yb ? void 0 : yb.coerce) || !1,
      ...Yy(yb)
    });
    class kb extends Xy {
      _parse(yb) {
        this._def.coerce && (yb.data = new Date(yb.data));
        if (this._getType(yb) !== By.date) {
          const bb = this._getOrReturnCtx(yb);
          return mb(bb, {
            code: ey.invalid_type,
            expected: By.date,
            received: bb.parsedType
          }), Ty
        }
        if (isNaN(yb.data.getTime())) {
          return mb(this._getOrReturnCtx(yb), {
            code: ey.invalid_date
          }), Ty
        }
        const bb = new Cy;
        let Wy;
        for (const Uy of this._def.checks) "min" === Uy.kind ? yb.data.getTime() < Uy.value && (Wy = this._getOrReturnCtx(yb, Wy), mb(Wy, {
          code: ey.too_small,
          message: Uy.message,
          inclusive: !0,
          exact: !1,
          minimum: Uy.value,
          type: "date"
        }), bb.hh()) : "max" === Uy.kind ? yb.data.getTime() > Uy.value && (Wy = this._getOrReturnCtx(yb, Wy), mb(Wy, {
          code: ey.too_big,
          message: Uy.message,
          inclusive: !0,
          exact: !1,
          maximum: Uy.value,
          type: "date"
        }), bb.hh()) : cb.assertNever(Uy);
        return {
          status: bb.value,
          value: new Date(yb.data.getTime())
        }
      }
      _addCheck(yb) {
        return new kb({
          ...this._def,
          checks: [...this._def.checks, yb]
        })
      }
      min(yb, bb) {
        return this._addCheck({
          kind: "min",
          value: yb.getTime(),
          message: vb.toString(bb)
        })
      }
      max(yb, bb) {
        return this._addCheck({
          kind: "max",
          value: yb.getTime(),
          message: vb.toString(bb)
        })
      }
      get minDate() {
        let yb = null;
        for (const bb of this._def.checks) "min" === bb.kind && (null === yb || bb.value > yb) && (yb = bb.value);
        return null != yb ? new Date(yb) : null
      }
      get maxDate() {
        let yb = null;
        for (const bb of this._def.checks) "max" === bb.kind && (null === yb || bb.value < yb) && (yb = bb.value);
        return null != yb ? new Date(yb) : null
      }
    }
    kb.create = yb => new kb({
      checks: [],
      coerce: (null === yb || void 0 === yb ? void 0 : yb.coerce) || !1,
      typeName: nb.ZodDate,
      ...Yy(yb)
    });
    class Ny extends Xy {
      _parse(yb) {
        if (this._getType(yb) !== By.symbol) {
          const bb = this._getOrReturnCtx(yb);
          return mb(bb, {
            code: ey.invalid_type,
            expected: By.symbol,
            received: bb.parsedType
          }), Ty
        }
        return Jy(yb.data)
      }
    }
    Ny.create = yb => new Ny({
      typeName: nb.ZodSymbol,
      ...Yy(yb)
    });
    class zb extends Xy {
      _parse(yb) {
        if (this._getType(yb) !== By.undefined) {
          const bb = this._getOrReturnCtx(yb);
          return mb(bb, {
            code: ey.invalid_type,
            expected: By.undefined,
            received: bb.parsedType
          }), Ty
        }
        return Jy(yb.data)
      }
    }
    zb.create = yb => new zb({
      typeName: nb.ZodUndefined,
      ...Yy(yb)
    });
    class Iy extends Xy {
      _parse(yb) {
        if (this._getType(yb) !== By.null) {
          const bb = this._getOrReturnCtx(yb);
          return mb(bb, {
            code: ey.invalid_type,
            expected: By.null,
            received: bb.parsedType
          }), Ty
        }
        return Jy(yb.data)
      }
    }
    Iy.create = yb => new Iy({
      typeName: nb.ZodNull,
      ...Yy(yb)
    });
    class xb extends Xy {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(yb) {
        return Jy(yb.data)
      }
    }
    xb.create = yb => new xb({
      typeName: nb.ZodAny,
      ...Yy(yb)
    });
    class Ay extends Xy {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(yb) {
        return Jy(yb.data)
      }
    }
    Ay.create = yb => new Ay({
      typeName: nb.ZodUnknown,
      ...Yy(yb)
    });
    class dy extends Xy {
      _parse(yb) {
        const bb = this._getOrReturnCtx(yb);
        return mb(bb, {
          code: ey.invalid_type,
          expected: By.never,
          received: bb.parsedType
        }), Ty
      }
    }
    dy.create = yb => new dy({
      typeName: nb.ZodNever,
      ...Yy(yb)
    });
    class yW extends Xy {
      _parse(yb) {
        if (this._getType(yb) !== By.undefined) {
          const bb = this._getOrReturnCtx(yb);
          return mb(bb, {
            code: ey.invalid_type,
            expected: By.void,
            received: bb.parsedType
          }), Ty
        }
        return Jy(yb.data)
      }
    }
    yW.create = yb => new yW({
      typeName: nb.ZodVoid,
      ...Yy(yb)
    });
    class bW extends Xy {
      _parse(yb) {
        const {
          ctx: bb,
          status: Wy
        } = this._processInputParams(yb), Uy = this._def;
        if (bb.parsedType !== By.array) return mb(bb, {
          code: ey.invalid_type,
          expected: By.array,
          received: bb.parsedType
        }), Ty;
        if (null !== Uy.exactLength) {
          const yb = bb.data.length > Uy.exactLength.value,
            hy = bb.data.length < Uy.exactLength.value;
          (yb || hy) && (mb(bb, {
            code: yb ? ey.too_big : ey.too_small,
            minimum: hy ? Uy.exactLength.value : void 0,
            maximum: yb ? Uy.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: Uy.exactLength.message
          }), Wy.hh())
        }
        if (null !== Uy.minLength && bb.data.length < Uy.minLength.value && (mb(bb, {
            code: ey.too_small,
            minimum: Uy.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Uy.minLength.message
          }), Wy.hh()), null !== Uy.maxLength && bb.data.length > Uy.maxLength.value && (mb(bb, {
            code: ey.too_big,
            maximum: Uy.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Uy.maxLength.message
          }), Wy.hh()), bb.common.async) return Promise.all([...bb.data].map(((yb, Wy) => Uy.type._parseAsync(new ib(bb, yb, bb.path, Wy))))).then((yb => Cy.mergeArray(Wy, yb)));
        const hy = [...bb.data].map(((yb, Wy) => Uy.type._parseSync(new ib(bb, yb, bb.path, Wy))));
        return Cy.mergeArray(Wy, hy)
      }
      get element() {
        return this._def.type
      }
      min(yb, bb) {
        return new bW({
          ...this._def,
          minLength: {
            value: yb,
            message: vb.toString(bb)
          }
        })
      }
      max(yb, bb) {
        return new bW({
          ...this._def,
          maxLength: {
            value: yb,
            message: vb.toString(bb)
          }
        })
      }
      length(yb, bb) {
        return new bW({
          ...this._def,
          exactLength: {
            value: yb,
            message: vb.toString(bb)
          }
        })
      }
      nonempty(yb) {
        return this.min(1, yb)
      }
    }

    function Wb(yb) {
      if (yb instanceof Ub) {
        const bb = {};
        for (const Wy in yb.shape) {
          const Uy = yb.shape[Wy];
          bb[Wy] = Vb.create(Wb(Uy))
        }
        return new Ub({
          ...yb._def,
          shape: () => bb
        })
      }
      return yb instanceof bW ? new bW({
        ...yb._def,
        type: Wb(yb.element)
      }) : yb instanceof Vb ? Vb.create(Wb(yb.unwrap())) : yb instanceof Jb ? Jb.create(Wb(yb.unwrap())) : yb instanceof ob ? ob.create(yb.items.map((yb => Wb(yb)))) : yb
    }
    bW.create = (yb, bb) => new bW({
      type: yb,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: nb.ZodArray,
      ...Yy(bb)
    });
    class Ub extends Xy {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const yb = this._def.shape(),
          bb = cb.objectKeys(yb);
        return this._cached = {
          shape: yb,
          keys: bb
        }
      }
      _parse(yb) {
        if (this._getType(yb) !== By.object) {
          const bb = this._getOrReturnCtx(yb);
          return mb(bb, {
            code: ey.invalid_type,
            expected: By.object,
            received: bb.parsedType
          }), Ty
        }
        const {
          status: bb,
          ctx: Wy
        } = this._processInputParams(yb), {
          shape: Uy,
          keys: hy
        } = this._getCached(), fy = [];
        if (!(this._def.catchall instanceof dy && "strip" === this._def.unknownKeys))
          for (const cb in Wy.data) hy.includes(cb) || fy.push(cb);
        const Zy = [];
        for (const cb of hy) {
          const yb = Uy[cb],
            bb = Wy.data[cb];
          Zy.push({
            key: {
              status: "valid",
              value: cb
            },
            value: yb._parse(new ib(Wy, bb, Wy.path, cb)),
            alwaysSet: cb in Wy.data
          })
        }
        if (this._def.catchall instanceof dy) {
          const yb = this._def.unknownKeys;
          if ("passthrough" === yb)
            for (const bb of fy) Zy.push({
              key: {
                status: "valid",
                value: bb
              },
              value: {
                status: "valid",
                value: Wy.data[bb]
              }
            });
          else if ("strict" === yb) fy.length > 0 && (mb(Wy, {
            code: ey.unrecognized_keys,
            keys: fy
          }), bb.hh());
          else if ("strip" !== yb) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const yb = this._def.catchall;
          for (const bb of fy) {
            const Uy = Wy.data[bb];
            Zy.push({
              key: {
                status: "valid",
                value: bb
              },
              value: yb._parse(new ib(Wy, Uy, Wy.path, bb)),
              alwaysSet: bb in Wy.data
            })
          }
        }
        return Wy.common.async ? Promise.resolve().then((async () => {
          const yb = [];
          for (const bb of Zy) {
            const Wy = await bb.key;
            yb.push({
              key: Wy,
              value: await bb.value,
              alwaysSet: bb.alwaysSet
            })
          }
          return yb
        })).then((yb => Cy.mergeObjectSync(bb, yb))) : Cy.mergeObjectSync(bb, Zy)
      }
      get shape() {
        return this._def.shape()
      }
      strict(yb) {
        return vb.errToObj, new Ub({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== yb ? {
            errorMap: (bb, Wy) => {
              var Uy, hy, fy, Zy;
              const cb = null !== (fy = null === (hy = (Uy = this._def).errorMap) || void 0 === hy ? void 0 : hy.call(Uy, bb, Wy).message) && void 0 !== fy ? fy : Wy.defaultError;
              return "unrecognized_keys" === bb.code ? {
                message: null !== (Zy = vb.errToObj(yb).message) && void 0 !== Zy ? Zy : cb
              } : {
                message: cb
              }
            }
          } : {}
        })
      }
      strip() {
        return new Ub({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new Ub({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(yb) {
        return new Ub({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...yb
          })
        })
      }
      merge(yb) {
        return new Ub({
          unknownKeys: yb._def.unknownKeys,
          catchall: yb._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...yb._def.shape()
          }),
          typeName: nb.ZodObject
        })
      }
      setKey(yb, bb) {
        return this.augment({
          [yb]: bb
        })
      }
      catchall(yb) {
        return new Ub({
          ...this._def,
          catchall: yb
        })
      }
      cU(yb) {
        const bb = {};
        return cb.objectKeys(yb).forEach((Wy => {
          yb[Wy] && this.shape[Wy] && (bb[Wy] = this.shape[Wy])
        })), new Ub({
          ...this._def,
          shape: () => bb
        })
      }
      omit(yb) {
        const bb = {};
        return cb.objectKeys(this.shape).forEach((Wy => {
          yb[Wy] || (bb[Wy] = this.shape[Wy])
        })), new Ub({
          ...this._def,
          shape: () => bb
        })
      }
      deepPartial() {
        return Wb(this)
      }
      partial(yb) {
        const bb = {};
        return cb.objectKeys(this.shape).forEach((Wy => {
          const Uy = this.shape[Wy];
          yb && !yb[Wy] ? bb[Wy] = Uy : bb[Wy] = Uy.optional()
        })), new Ub({
          ...this._def,
          shape: () => bb
        })
      }
      required(yb) {
        const bb = {};
        return cb.objectKeys(this.shape).forEach((Wy => {
          if (yb && !yb[Wy]) bb[Wy] = this.shape[Wy];
          else {
            let yb = this.shape[Wy];
            for (; yb instanceof Vb;) yb = yb._def.innerType;
            bb[Wy] = yb
          }
        })), new Ub({
          ...this._def,
          shape: () => bb
        })
      }
      keyof() {
        return Eb(cb.objectKeys(this.shape))
      }
    }
    Ub.create = (yb, bb) => new Ub({
      shape: () => yb,
      unknownKeys: "strip",
      catchall: dy.create(),
      typeName: nb.ZodObject,
      ...Yy(bb)
    }), Ub.strictCreate = (yb, bb) => new Ub({
      shape: () => yb,
      unknownKeys: "strict",
      catchall: dy.create(),
      typeName: nb.ZodObject,
      ...Yy(bb)
    }), Ub.lazycreate = (yb, bb) => new Ub({
      shape: yb,
      unknownKeys: "strip",
      catchall: dy.create(),
      typeName: nb.ZodObject,
      ...Yy(bb)
    });
    class hb extends Xy {
      _parse(yb) {
        const {
          ctx: bb
        } = this._processInputParams(yb), Wy = this._def.options;
        if (bb.common.async) return Promise.all(Wy.map((async yb => {
          const Wy = {
            ...bb,
            common: {
              ...bb.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await yb._parseAsync({
              data: bb.data,
              path: bb.path,
              parent: Wy
            }),
            ctx: Wy
          }
        }))).then((function(yb) {
          for (const bb of yb)
            if ("valid" === bb.result.status) return bb.result;
          for (const Uy of yb)
            if ("hh" === Uy.result.status) return bb.common.issues.push(...Uy.ctx.common.issues), Uy.result;
          const Wy = yb.map((yb => new qb(yb.ctx.common.issues)));
          return mb(bb, {
            code: ey.invalid_union,
            unionErrors: Wy
          }), Ty
        }));
        {
          let yb;
          const Uy = [];
          for (const fy of Wy) {
            const Wy = {
                ...bb,
                common: {
                  ...bb.common,
                  issues: []
                },
                parent: null
              },
              hy = fy._parseSync({
                data: bb.data,
                path: bb.path,
                parent: Wy
              });
            if ("valid" === hy.status) return hy;
            "hh" !== hy.status || yb || (yb = {
              result: hy,
              ctx: Wy
            }), Wy.common.issues.length && Uy.push(Wy.common.issues)
          }
          if (yb) return bb.common.issues.push(...yb.ctx.common.issues), yb.result;
          const hy = Uy.map((yb => new qb(yb)));
          return mb(bb, {
            code: ey.invalid_union,
            unionErrors: hy
          }), Ty
        }
      }
      get options() {
        return this._def.options
      }
    }
    hb.create = (yb, bb) => new hb({
      options: yb,
      typeName: nb.ZodUnion,
      ...Yy(bb)
    });
    const fb = yb => yb instanceof sb ? fb(yb.schema) : yb instanceof Tb ? fb(yb.innerType()) : yb instanceof Sb ? [yb.value] : yb instanceof lb ? yb.options : yb instanceof mW ? Object.keys(yb.enum) : yb instanceof gW ? fb(yb._def.innerType) : yb instanceof zb ? [void 0] : yb instanceof Iy ? [null] : null;
    class Zb extends Xy {
      _parse(yb) {
        const {
          ctx: bb
        } = this._processInputParams(yb);
        if (bb.parsedType !== By.object) return mb(bb, {
          code: ey.invalid_type,
          expected: By.object,
          received: bb.parsedType
        }), Ty;
        const Wy = this.discriminator,
          Uy = bb.data[Wy],
          hy = this.optionsMap.get(Uy);
        return hy ? bb.common.async ? hy._parseAsync({
          data: bb.data,
          path: bb.path,
          parent: bb
        }) : hy._parseSync({
          data: bb.data,
          path: bb.path,
          parent: bb
        }) : (mb(bb, {
          code: ey.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [Wy]
        }), Ty)
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
      static create(yb, bb, Wy) {
        const Uy = new Map;
        for (const hy of bb) {
          const bb = fb(hy.shape[yb]);
          if (!bb) throw new Error(`A discriminator value for key \`${yb}\` could not be extracted from all schema options`);
          for (const Wy of bb) {
            if (Uy.has(Wy)) throw new Error(`Discriminator property ${String(yb)} has duplicate value ${String(Wy)}`);
            Uy.set(Wy, hy)
          }
        }
        return new Zb({
          typeName: nb.ZodDiscriminatedUnion,
          discriminator: yb,
          options: bb,
          optionsMap: Uy,
          ...Yy(Wy)
        })
      }
    }

    function cW(yb, bb) {
      const Wy = Ky(yb),
        Uy = Ky(bb);
      if (yb === bb) return {
        valid: !0,
        data: yb
      };
      if (Wy === By.object && Uy === By.object) {
        const Wy = cb.objectKeys(bb),
          Uy = cb.objectKeys(yb).filter((yb => -1 !== Wy.indexOf(yb))),
          hy = {
            ...yb,
            ...bb
          };
        for (const fy of Uy) {
          const Wy = cW(yb[fy], bb[fy]);
          if (!Wy.valid) return {
            valid: !1
          };
          hy[fy] = Wy.data
        }
        return {
          valid: !0,
          data: hy
        }
      }
      if (Wy === By.array && Uy === By.array) {
        if (yb.length !== bb.length) return {
          valid: !1
        };
        const Wy = [];
        for (let Uy = 0; Uy < yb.length; Uy++) {
          const hy = cW(yb[Uy], bb[Uy]);
          if (!hy.valid) return {
            valid: !1
          };
          Wy.push(hy.data)
        }
        return {
          valid: !0,
          data: Wy
        }
      }
      return Wy === By.date && Uy === By.date && +yb === +bb ? {
        valid: !0,
        data: yb
      } : {
        valid: !1
      }
    }
    class Pb extends Xy {
      _parse(yb) {
        const {
          status: bb,
          ctx: Wy
        } = this._processInputParams(yb), Uy = (yb, Uy) => {
          if (gb(yb) || gb(Uy)) return Ty;
          const hy = cW(yb.value, Uy.value);
          return hy.valid ? ((Gy(yb) || Gy(Uy)) && bb.hh(), {
            status: bb.value,
            value: hy.data
          }) : (mb(Wy, {
            code: ey.invalid_intersection_types
          }), Ty)
        };
        return Wy.common.async ? Promise.all([this._def.left._parseAsync({
          data: Wy.data,
          path: Wy.path,
          parent: Wy
        }), this._def.right._parseAsync({
          data: Wy.data,
          path: Wy.path,
          parent: Wy
        })]).then((yb => {
          let [bb, Wy] = yb;
          return Uy(bb, Wy)
        })) : Uy(this._def.left._parseSync({
          data: Wy.data,
          path: Wy.path,
          parent: Wy
        }), this._def.right._parseSync({
          data: Wy.data,
          path: Wy.path,
          parent: Wy
        }))
      }
    }
    Pb.create = (yb, bb, Wy) => new Pb({
      left: yb,
      right: bb,
      typeName: nb.ZodIntersection,
      ...Yy(Wy)
    });
    class ob extends Xy {
      _parse(yb) {
        const {
          status: bb,
          ctx: Wy
        } = this._processInputParams(yb);
        if (Wy.parsedType !== By.array) return mb(Wy, {
          code: ey.invalid_type,
          expected: By.array,
          received: Wy.parsedType
        }), Ty;
        if (Wy.data.length < this._def.items.length) return mb(Wy, {
          code: ey.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), Ty;
        !this._def.rest && Wy.data.length > this._def.items.length && (mb(Wy, {
          code: ey.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), bb.hh());
        const Uy = [...Wy.data].map(((yb, bb) => {
          const Uy = this._def.items[bb] || this._def.rest;
          return Uy ? Uy._parse(new ib(Wy, yb, Wy.path, bb)) : null
        })).filter((yb => !!yb));
        return Wy.common.async ? Promise.all(Uy).then((yb => Cy.mergeArray(bb, yb))) : Cy.mergeArray(bb, Uy)
      }
      get items() {
        return this._def.items
      }
      rest(yb) {
        return new ob({
          ...this._def,
          rest: yb
        })
      }
    }
    ob.create = (yb, bb) => {
      if (!Array.isArray(yb)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new ob({
        items: yb,
        typeName: nb.ZodTuple,
        rest: null,
        ...Yy(bb)
      })
    };
    class Bb extends Xy {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(yb) {
        const {
          status: bb,
          ctx: Wy
        } = this._processInputParams(yb);
        if (Wy.parsedType !== By.object) return mb(Wy, {
          code: ey.invalid_type,
          expected: By.object,
          received: Wy.parsedType
        }), Ty;
        const Uy = [],
          hy = this._def.keyType,
          fy = this._def.valueType;
        for (const Zy in Wy.data) Uy.push({
          key: hy._parse(new ib(Wy, Zy, Wy.path, Zy)),
          value: fy._parse(new ib(Wy, Wy.data[Zy], Wy.path, Zy))
        });
        return Wy.common.async ? Cy.mergeObjectAsync(bb, Uy) : Cy.mergeObjectSync(bb, Uy)
      }
      get element() {
        return this._def.valueType
      }
      static create(yb, bb, Wy) {
        return new Bb(bb instanceof Xy ? {
          keyType: yb,
          valueType: bb,
          typeName: nb.ZodRecord,
          ...Yy(Wy)
        } : {
          keyType: Qy.create(),
          valueType: yb,
          typeName: nb.ZodRecord,
          ...Yy(bb)
        })
      }
    }
    class Kb extends Xy {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(yb) {
        const {
          status: bb,
          ctx: Wy
        } = this._processInputParams(yb);
        if (Wy.parsedType !== By.map) return mb(Wy, {
          code: ey.invalid_type,
          expected: By.map,
          received: Wy.parsedType
        }), Ty;
        const Uy = this._def.keyType,
          hy = this._def.valueType,
          fy = [...Wy.data.entries()].map(((yb, bb) => {
            let [fy, Zy] = yb;
            return {
              key: Uy._parse(new ib(Wy, fy, Wy.path, [bb, "key"])),
              value: hy._parse(new ib(Wy, Zy, Wy.path, [bb, "value"]))
            }
          }));
        if (Wy.common.async) {
          const yb = new Map;
          return Promise.resolve().then((async () => {
            for (const Wy of fy) {
              const Uy = await Wy.key,
                hy = await Wy.value;
              if ("aborted" === Uy.status || "aborted" === hy.status) return Ty;
              "hh" !== Uy.status && "hh" !== hy.status || bb.hh(), yb.set(Uy.value, hy.value)
            }
            return {
              status: bb.value,
              value: yb
            }
          }))
        } {
          const yb = new Map;
          for (const Wy of fy) {
            const Uy = Wy.key,
              hy = Wy.value;
            if ("aborted" === Uy.status || "aborted" === hy.status) return Ty;
            "hh" !== Uy.status && "hh" !== hy.status || bb.hh(), yb.set(Uy.value, hy.value)
          }
          return {
            status: bb.value,
            value: yb
          }
        }
      }
    }
    Kb.create = (yb, bb, Wy) => new Kb({
      valueType: bb,
      keyType: yb,
      typeName: nb.ZodMap,
      ...Yy(Wy)
    });
    class eb extends Xy {
      _parse(yb) {
        const {
          status: bb,
          ctx: Wy
        } = this._processInputParams(yb);
        if (Wy.parsedType !== By.set) return mb(Wy, {
          code: ey.invalid_type,
          expected: By.set,
          received: Wy.parsedType
        }), Ty;
        const Uy = this._def;
        null !== Uy.minSize && Wy.data.size < Uy.minSize.value && (mb(Wy, {
          code: ey.too_small,
          minimum: Uy.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Uy.minSize.message
        }), bb.hh()), null !== Uy.maxSize && Wy.data.size > Uy.maxSize.value && (mb(Wy, {
          code: ey.too_big,
          maximum: Uy.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Uy.maxSize.message
        }), bb.hh());
        const hy = this._def.valueType;

        function fy(yb) {
          const Wy = new Set;
          for (const Uy of yb) {
            if ("aborted" === Uy.status) return Ty;
            "hh" === Uy.status && bb.hh(), Wy.add(Uy.value)
          }
          return {
            status: bb.value,
            value: Wy
          }
        }
        const Zy = [...Wy.data.values()].map(((yb, bb) => hy._parse(new ib(Wy, yb, Wy.path, bb))));
        return Wy.common.async ? Promise.all(Zy).then((yb => fy(yb))) : fy(Zy)
      }
      min(yb, bb) {
        return new eb({
          ...this._def,
          minSize: {
            value: yb,
            message: vb.toString(bb)
          }
        })
      }
      max(yb, bb) {
        return new eb({
          ...this._def,
          maxSize: {
            value: yb,
            message: vb.toString(bb)
          }
        })
      }
      size(yb, bb) {
        return this.min(yb, bb).max(yb, bb)
      }
      nonempty(yb) {
        return this.min(1, yb)
      }
    }
    eb.create = (yb, bb) => new eb({
      valueType: yb,
      minSize: null,
      maxSize: null,
      typeName: nb.ZodSet,
      ...Yy(bb)
    });
    class qW extends Xy {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(yb) {
        const {
          ctx: bb
        } = this._processInputParams(yb);
        if (bb.parsedType !== By.function) return mb(bb, {
          code: ey.invalid_type,
          expected: By.function,
          received: bb.parsedType
        }), Ty;

        function Wy(yb, Wy) {
          return ly({
            data: yb,
            path: bb.path,
            errorMaps: [bb.common.contextualErrorMap, bb.schemaErrorMap, Ey(), sy].filter((yb => !!yb)),
            issueData: {
              code: ey.invalid_arguments,
              argumentsError: Wy
            }
          })
        }

        function Uy(yb, Wy) {
          return ly({
            data: yb,
            path: bb.path,
            errorMaps: [bb.common.contextualErrorMap, bb.schemaErrorMap, Ey(), sy].filter((yb => !!yb)),
            issueData: {
              code: ey.invalid_return_type,
              returnTypeError: Wy
            }
          })
        }
        const hy = {
            errorMap: bb.common.contextualErrorMap
          },
          fy = bb.data;
        if (this._def.returns instanceof Cb) {
          const yb = this;
          return Jy((async function() {
            for (var bb = arguments.length, Zy = new Array(bb), cb = 0; cb < bb; cb++) Zy[cb] = arguments[cb];
            const Py = new qb([]),
              oy = await yb._def.args.parseAsync(Zy, hy).catch((yb => {
                throw Py.addIssue(Wy(Zy, yb)), Py
              })),
              By = await Reflect.apply(fy, this, oy);
            return await yb._def.returns._def.type.parseAsync(By, hy).catch((yb => {
              throw Py.addIssue(Uy(By, yb)), Py
            }))
          }))
        } {
          const yb = this;
          return Jy((function() {
            for (var bb = arguments.length, Zy = new Array(bb), cb = 0; cb < bb; cb++) Zy[cb] = arguments[cb];
            const Py = yb._def.args.safeParse(Zy, hy);
            if (!Py.success) throw new qb([Wy(Zy, Py.error)]);
            const oy = Reflect.apply(fy, this, Py.data),
              By = yb._def.returns.safeParse(oy, hy);
            if (!By.success) throw new qb([Uy(oy, By.error)]);
            return By.data
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
        for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
        return new qW({
          ...this._def,
          args: ob.create(bb).rest(Ay.create())
        })
      }
      returns(yb) {
        return new qW({
          ...this._def,
          returns: yb
        })
      }
      implement(yb) {
        return this.parse(yb)
      }
      strictImplement(yb) {
        return this.parse(yb)
      }
      static create(yb, bb, Wy) {
        return new qW({
          args: yb || ob.create([]).rest(Ay.create()),
          returns: bb || Ay.create(),
          typeName: nb.ZodFunction,
          ...Yy(Wy)
        })
      }
    }
    class sb extends Xy {
      get schema() {
        return this._def.getter()
      }
      _parse(yb) {
        const {
          ctx: bb
        } = this._processInputParams(yb);
        return this._def.getter()._parse({
          data: bb.data,
          path: bb.path,
          parent: bb
        })
      }
    }
    sb.create = (yb, bb) => new sb({
      getter: yb,
      typeName: nb.ZodLazy,
      ...Yy(bb)
    });
    class Sb extends Xy {
      _parse(yb) {
        if (yb.data !== this._def.value) {
          const bb = this._getOrReturnCtx(yb);
          return mb(bb, {
            received: bb.data,
            code: ey.invalid_literal,
            expected: this._def.value
          }), Ty
        }
        return {
          status: "valid",
          value: yb.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function Eb(yb, bb) {
      return new lb({
        values: yb,
        typeName: nb.ZodEnum,
        ...Yy(bb)
      })
    }
    Sb.create = (yb, bb) => new Sb({
      value: yb,
      typeName: nb.ZodLiteral,
      ...Yy(bb)
    });
    class lb extends Xy {
      _parse(yb) {
        if ("string" !== typeof yb.data) {
          const bb = this._getOrReturnCtx(yb),
            Wy = this._def.values;
          return mb(bb, {
            expected: cb.joinValues(Wy),
            received: bb.parsedType,
            code: ey.invalid_type
          }), Ty
        }
        if (-1 === this._def.values.indexOf(yb.data)) {
          const bb = this._getOrReturnCtx(yb),
            Wy = this._def.values;
          return mb(bb, {
            received: bb.data,
            code: ey.invalid_enum_value,
            options: Wy
          }), Ty
        }
        return Jy(yb.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const yb = {};
        for (const bb of this._def.values) yb[bb] = bb;
        return yb
      }
      get Values() {
        const yb = {};
        for (const bb of this._def.values) yb[bb] = bb;
        return yb
      }
      get Enum() {
        const yb = {};
        for (const bb of this._def.values) yb[bb] = bb;
        return yb
      }
      extract(yb) {
        return lb.create(yb)
      }
      exclude(yb) {
        return lb.create(this.options.filter((bb => !yb.includes(bb))))
      }
    }
    lb.create = Eb;
    class mW extends Xy {
      _parse(yb) {
        const bb = cb.getValidEnumValues(this._def.values),
          Wy = this._getOrReturnCtx(yb);
        if (Wy.parsedType !== By.string && Wy.parsedType !== By.number) {
          const yb = cb.objectValues(bb);
          return mb(Wy, {
            expected: cb.joinValues(yb),
            received: Wy.parsedType,
            code: ey.invalid_type
          }), Ty
        }
        if (-1 === bb.indexOf(yb.data)) {
          const yb = cb.objectValues(bb);
          return mb(Wy, {
            received: Wy.data,
            code: ey.invalid_enum_value,
            options: yb
          }), Ty
        }
        return Jy(yb.data)
      }
      get enum() {
        return this._def.values
      }
    }
    mW.create = (yb, bb) => new mW({
      values: yb,
      typeName: nb.ZodNativeEnum,
      ...Yy(bb)
    });
    class Cb extends Xy {
      unwrap() {
        return this._def.type
      }
      _parse(yb) {
        const {
          ctx: bb
        } = this._processInputParams(yb);
        if (bb.parsedType !== By.promise && !1 === bb.common.async) return mb(bb, {
          code: ey.invalid_type,
          expected: By.promise,
          received: bb.parsedType
        }), Ty;
        const Wy = bb.parsedType === By.promise ? bb.data : Promise.resolve(bb.data);
        return Jy(Wy.then((yb => this._def.type.parseAsync(yb, {
          path: bb.path,
          errorMap: bb.common.contextualErrorMap
        }))))
      }
    }
    Cb.create = (yb, bb) => new Cb({
      type: yb,
      typeName: nb.ZodPromise,
      ...Yy(bb)
    });
    class Tb extends Xy {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === nb.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(yb) {
        const {
          status: bb,
          ctx: Wy
        } = this._processInputParams(yb), Uy = this._def.effect || null, hy = {
          addIssue: yb => {
            mb(Wy, yb), yb.fatal ? bb.abort() : bb.hh()
          },
          get path() {
            return Wy.path
          }
        };
        if (hy.addIssue = hy.addIssue.bind(hy), "preprocess" === Uy.type) {
          const yb = Uy.transform(Wy.data, hy);
          return Wy.common.issues.length ? {
            status: "hh",
            value: Wy.data
          } : Wy.common.async ? Promise.resolve(yb).then((yb => this._def.schema._parseAsync({
            data: yb,
            path: Wy.path,
            parent: Wy
          }))) : this._def.schema._parseSync({
            data: yb,
            path: Wy.path,
            parent: Wy
          })
        }
        if ("refinement" === Uy.type) {
          const yb = yb => {
            const bb = Uy.refinement(yb, hy);
            if (Wy.common.async) return Promise.resolve(bb);
            if (bb instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return yb
          };
          if (!1 === Wy.common.async) {
            const Uy = this._def.schema._parseSync({
              data: Wy.data,
              path: Wy.path,
              parent: Wy
            });
            return "aborted" === Uy.status ? Ty : ("hh" === Uy.status && bb.hh(), yb(Uy.value), {
              status: bb.value,
              value: Uy.value
            })
          }
          return this._def.schema._parseAsync({
            data: Wy.data,
            path: Wy.path,
            parent: Wy
          }).then((Wy => "aborted" === Wy.status ? Ty : ("hh" === Wy.status && bb.hh(), yb(Wy.value).then((() => ({
            status: bb.value,
            value: Wy.value
          }))))))
        }
        if ("transform" === Uy.type) {
          if (!1 === Wy.common.async) {
            const yb = this._def.schema._parseSync({
              data: Wy.data,
              path: Wy.path,
              parent: Wy
            });
            if (!Oy(yb)) return yb;
            const fy = Uy.transform(yb.value, hy);
            if (fy instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: bb.value,
              value: fy
            }
          }
          return this._def.schema._parseAsync({
            data: Wy.data,
            path: Wy.path,
            parent: Wy
          }).then((yb => Oy(yb) ? Promise.resolve(Uy.transform(yb.value, hy)).then((yb => ({
            status: bb.value,
            value: yb
          }))) : yb))
        }
        cb.assertNever(Uy)
      }
    }
    Tb.create = (yb, bb, Wy) => new Tb({
      schema: yb,
      typeName: nb.ZodEffects,
      effect: bb,
      ...Yy(Wy)
    }), Tb.createWithPreprocess = (yb, bb, Wy) => new Tb({
      schema: bb,
      effect: {
        type: "preprocess",
        transform: yb
      },
      typeName: nb.ZodEffects,
      ...Yy(Wy)
    });
    class Vb extends Xy {
      _parse(yb) {
        return this._getType(yb) === By.undefined ? Jy(void 0) : this._def.innerType._parse(yb)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Vb.create = (yb, bb) => new Vb({
      innerType: yb,
      typeName: nb.ZodOptional,
      ...Yy(bb)
    });
    class Jb extends Xy {
      _parse(yb) {
        return this._getType(yb) === By.null ? Jy(null) : this._def.innerType._parse(yb)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Jb.create = (yb, bb) => new Jb({
      innerType: yb,
      typeName: nb.ZodNullable,
      ...Yy(bb)
    });
    class gW extends Xy {
      _parse(yb) {
        const {
          ctx: bb
        } = this._processInputParams(yb);
        let Wy = bb.data;
        return bb.parsedType === By.undefined && (Wy = this._def.defaultValue()), this._def.innerType._parse({
          data: Wy,
          path: bb.path,
          parent: bb
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    gW.create = (yb, bb) => new gW({
      innerType: yb,
      typeName: nb.ZodDefault,
      defaultValue: "function" === typeof bb.default ? bb.default : () => bb.default,
      ...Yy(bb)
    });
    class Gb extends Xy {
      _parse(yb) {
        const {
          ctx: bb
        } = this._processInputParams(yb), Wy = {
          ...bb,
          common: {
            ...bb.common,
            issues: []
          }
        }, Uy = this._def.innerType._parse({
          data: Wy.data,
          path: Wy.path,
          parent: {
            ...Wy
          }
        });
        return Ry(Uy) ? Uy.then((yb => ({
          status: "valid",
          value: "valid" === yb.status ? yb.value : this._def.catchValue({
            get error() {
              return new qb(Wy.common.issues)
            },
            input: Wy.data
          })
        }))) : {
          status: "valid",
          value: "valid" === Uy.status ? Uy.value : this._def.catchValue({
            get error() {
              return new qb(Wy.common.issues)
            },
            input: Wy.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    Gb.create = (yb, bb) => new Gb({
      innerType: yb,
      typeName: nb.ZodCatch,
      catchValue: "function" === typeof bb.catch ? bb.catch : () => bb.catch,
      ...Yy(bb)
    });
    class Ob extends Xy {
      _parse(yb) {
        if (this._getType(yb) !== By.nan) {
          const bb = this._getOrReturnCtx(yb);
          return mb(bb, {
            code: ey.invalid_type,
            expected: By.nan,
            received: bb.parsedType
          }), Ty
        }
        return {
          status: "valid",
          value: yb.data
        }
      }
    }
    Ob.create = yb => new Ob({
      typeName: nb.ZodNaN,
      ...Yy(yb)
    });
    const Rb = Symbol("zod_brand");
    class vW extends Xy {
      _parse(yb) {
        const {
          ctx: bb
        } = this._processInputParams(yb), Wy = bb.data;
        return this._def.type._parse({
          data: Wy,
          path: bb.path,
          parent: bb
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class iW extends Xy {
      _parse(yb) {
        const {
          status: bb,
          ctx: Wy
        } = this._processInputParams(yb);
        if (Wy.common.async) {
          return (async () => {
            const yb = await this._def.in._parseAsync({
              data: Wy.data,
              path: Wy.path,
              parent: Wy
            });
            return "aborted" === yb.status ? Ty : "hh" === yb.status ? (bb.hh(), Vy(yb.value)) : this._def.out._parseAsync({
              data: yb.value,
              path: Wy.path,
              parent: Wy
            })
          })()
        } {
          const yb = this._def.in._parseSync({
            data: Wy.data,
            path: Wy.path,
            parent: Wy
          });
          return "aborted" === yb.status ? Ty : "hh" === yb.status ? (bb.hh(), {
            status: "hh",
            value: yb.value
          }) : this._def.out._parseSync({
            data: yb.value,
            path: Wy.path,
            parent: Wy
          })
        }
      }
      static create(yb, bb) {
        return new iW({
          in: yb,
          out: bb,
          typeName: nb.ZodPipeline
        })
      }
    }
    class Mb extends Xy {
      _parse(yb) {
        const bb = this._def.innerType._parse(yb);
        return Oy(bb) && (bb.value = Object.freeze(bb.value)), bb
      }
    }
    Mb.create = (yb, bb) => new Mb({
      innerType: yb,
      typeName: nb.ZodReadonly,
      ...Yy(bb)
    });
    const Yb = function(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        return yb ? xb.create().superRefine(((Uy, hy) => {
          var fy, Zy;
          if (!yb(Uy)) {
            const yb = "function" === typeof bb ? bb(Uy) : "string" === typeof bb ? {
                message: bb
              } : bb,
              cb = null === (Zy = null !== (fy = yb.fatal) && void 0 !== fy ? fy : Wy) || void 0 === Zy || Zy,
              Py = "string" === typeof yb ? {
                message: yb
              } : yb;
            hy.addIssue({
              code: "custom",
              ...Py,
              fatal: cb
            })
          }
        })) : xb.create()
      },
      Xb = {
        object: Ub.lazycreate
      };
    var nb;
    ! function(yb) {
      yb.ZodString = "ZodString", yb.ZodNumber = "ZodNumber", yb.ZodNaN = "ZodNaN", yb.ZodBigInt = "ZodBigInt", yb.ZodBoolean = "ZodBoolean", yb.ZodDate = "ZodDate", yb.ZodSymbol = "ZodSymbol", yb.ZodUndefined = "ZodUndefined", yb.ZodNull = "ZodNull", yb.ZodAny = "ZodAny", yb.ZodUnknown = "ZodUnknown", yb.ZodNever = "ZodNever", yb.ZodVoid = "ZodVoid", yb.ZodArray = "ZodArray", yb.ZodObject = "ZodObject", yb.ZodUnion = "ZodUnion", yb.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", yb.ZodIntersection = "ZodIntersection", yb.ZodTuple = "ZodTuple", yb.ZodRecord = "ZodRecord", yb.ZodMap = "ZodMap", yb.ZodSet = "ZodSet", yb.ZodFunction = "ZodFunction", yb.ZodLazy = "ZodLazy", yb.ZodLiteral = "ZodLiteral", yb.ZodEnum = "ZodEnum", yb.ZodEffects = "ZodEffects", yb.ZodNativeEnum = "ZodNativeEnum", yb.ZodOptional = "ZodOptional", yb.ZodNullable = "ZodNullable", yb.ZodDefault = "ZodDefault", yb.ZodCatch = "ZodCatch", yb.ZodPromise = "ZodPromise", yb.ZodBranded = "ZodBranded", yb.ZodPipeline = "ZodPipeline", yb.ZodReadonly = "ZodReadonly"
    }(nb || (nb = {}));
    const ub = Qy.create,
      rW = Dy.create,
      Hb = Ob.create,
      aW = tb.create,
      Fb = wy.create,
      pb = kb.create,
      Lb = Ny.create,
      Qb = zb.create,
      jW = Iy.create,
      Db = xb.create,
      tW = Ay.create,
      wb = dy.create,
      kW = yW.create,
      Nb = bW.create,
      zW = Ub.create,
      Ib = Ub.strictCreate,
      xW = hb.create,
      Ab = Zb.create,
      db = Pb.create,
      yU = ob.create,
      bU = Bb.create,
      WW = Kb.create,
      UW = eb.create,
      hW = qW.create,
      fW = sb.create,
      ZW = Sb.create,
      cU = lb.create,
      PW = mW.create,
      oW = Cb.create,
      BW = Tb.create,
      KW = Vb.create,
      eW = Jb.create,
      qU = Tb.createWithPreprocess,
      sW = iW.create,
      SW = {
        string: yb => Qy.create({
          ...yb,
          coerce: !0
        }),
        number: yb => Dy.create({
          ...yb,
          coerce: !0
        }),
        boolean: yb => wy.create({
          ...yb,
          coerce: !0
        }),
        bigint: yb => tb.create({
          ...yb,
          coerce: !0
        }),
        date: yb => kb.create({
          ...yb,
          coerce: !0
        })
      },
      EW = Ty;
    var lW = Object.freeze({
        __proto__: null,
        defaultErrorMap: sy,
        setErrorMap: function(yb) {
          Sy = yb
        },
        getErrorMap: Ey,
        makeIssue: ly,
        EMPTY_PATH: [],
        addIssueToContext: mb,
        ParseStatus: Cy,
        INVALID: Ty,
        DIRTY: Vy,
        OK: Jy,
        isAborted: gb,
        isDirty: Gy,
        isValid: Oy,
        isAsync: Ry,
        get util() {
          return cb
        },
        get objectUtil() {
          return Py
        },
        ZodParsedType: By,
        getParsedType: Ky,
        ZodType: Xy,
        ZodString: Qy,
        ZodNumber: Dy,
        ZodBigInt: tb,
        ZodBoolean: wy,
        ZodDate: kb,
        ZodSymbol: Ny,
        ZodUndefined: zb,
        ZodNull: Iy,
        ZodAny: xb,
        ZodUnknown: Ay,
        ZodNever: dy,
        ZodVoid: yW,
        ZodArray: bW,
        ZodObject: Ub,
        ZodUnion: hb,
        ZodDiscriminatedUnion: Zb,
        ZodIntersection: Pb,
        ZodTuple: ob,
        ZodRecord: Bb,
        ZodMap: Kb,
        ZodSet: eb,
        ZodFunction: qW,
        ZodLazy: sb,
        ZodLiteral: Sb,
        ZodEnum: lb,
        ZodNativeEnum: mW,
        ZodPromise: Cb,
        ZodEffects: Tb,
        ZodTransformer: Tb,
        ZodOptional: Vb,
        ZodNullable: Jb,
        ZodDefault: gW,
        ZodCatch: Gb,
        ZodNaN: Ob,
        BRAND: Rb,
        ZodBranded: vW,
        ZodPipeline: iW,
        ZodReadonly: Mb,
        custom: Yb,
        Schema: Xy,
        ZodSchema: Xy,
        late: Xb,
        get ZodFirstPartyTypeKind() {
          return nb
        },
        coerce: SW,
        any: Db,
        array: Nb,
        bigint: aW,
        boolean: Fb,
        date: pb,
        discriminatedUnion: Ab,
        effect: BW,
        enum: cU,
        function: hW,
        instanceof: function(yb) {
          let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${yb.name}`
          };
          return Yb((bb => bb instanceof yb), bb)
        },
        intersection: db,
        lazy: fW,
        literal: ZW,
        map: WW,
        nan: Hb,
        nativeEnum: PW,
        never: wb,
        null: jW,
        nullable: eW,
        number: rW,
        object: zW,
        oboolean: () => Fb().optional(),
        onumber: () => rW().optional(),
        optional: KW,
        ostring: () => ub().optional(),
        pipeline: sW,
        preprocess: qU,
        promise: oW,
        record: bU,
        set: UW,
        strictObject: Ib,
        string: ub,
        symbol: Lb,
        transformer: BW,
        tuple: yU,
        undefined: Qb,
        union: xW,
        unknown: tW,
        void: kW,
        NEVER: EW,
        ZodIssueCode: ey,
        quotelessJson: yb => JSON.stringify(yb, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: qb
      }),
      mU = {
        exports: {}
      };
    ! function(yb) {
      var bb = function(yb) {
        var Wy = 1e7,
          Uy = 9007199254740992,
          hy = ey(Uy),
          fy = "0123456789abcdefghijklmnopqrstuvwxyz",
          Zy = "function" === typeof BigInt;

        function cb(yb, bb, Wy, Uy) {
          return "undefined" === typeof yb ? cb[0] : "undefined" !== typeof bb && (10 !== +bb || Wy) ? wy(yb, bb, Wy, Uy) : xb(yb)
        }

        function Py(yb, bb) {
          this.value = yb, this.sign = bb, this.isSmall = !1
        }

        function oy(yb) {
          this.value = yb, this.sign = yb < 0, this.isSmall = !0
        }

        function By(yb) {
          this.value = yb
        }

        function Ky(yb) {
          return -Uy < yb && yb < Uy
        }

        function ey(yb) {
          return yb < 1e7 ? [yb] : yb < 1e14 ? [yb % 1e7, Math.floor(yb / 1e7)] : [yb % 1e7, Math.floor(yb / 1e7) % 1e7, Math.floor(yb / 1e14)]
        }

        function qb(yb) {
          sy(yb);
          var bb = yb.length;
          if (bb < 4 && Yy(yb, hy) < 0) switch (bb) {
            case 0:
              return 0;
            case 1:
              return yb[0];
            case 2:
              return yb[0] + yb[1] * Wy;
            default:
              return yb[0] + (yb[1] + yb[2] * Wy) * Wy
          }
          return yb
        }

        function sy(yb) {
          for (var bb = yb.length; 0 === yb[--bb];);
          yb.length = bb + 1
        }

        function Sy(yb) {
          for (var bb = new Array(yb), Wy = -1; ++Wy < yb;) bb[Wy] = 0;
          return bb
        }

        function Ey(yb) {
          return yb > 0 ? Math.floor(yb) : Math.ceil(yb)
        }

        function ly(yb, bb) {
          var Uy, hy, fy = yb.length,
            Zy = bb.length,
            cb = new Array(fy),
            Py = 0,
            oy = Wy;
          for (hy = 0; hy < Zy; hy++) Py = (Uy = yb[hy] + bb[hy] + Py) >= oy ? 1 : 0, cb[hy] = Uy - Py * oy;
          for (; hy < fy;) Py = (Uy = yb[hy] + Py) === oy ? 1 : 0, cb[hy++] = Uy - Py * oy;
          return Py > 0 && cb.push(Py), cb
        }

        function mb(yb, bb) {
          return yb.length >= bb.length ? ly(yb, bb) : ly(bb, yb)
        }

        function Cy(yb, bb) {
          var Uy, hy, fy = yb.length,
            Zy = new Array(fy),
            cb = Wy;
          for (hy = 0; hy < fy; hy++) Uy = yb[hy] - cb + bb, bb = Math.floor(Uy / cb), Zy[hy] = Uy - bb * cb, bb += 1;
          for (; bb > 0;) Zy[hy++] = bb % cb, bb = Math.floor(bb / cb);
          return Zy
        }

        function Ty(yb, bb) {
          var Uy, hy, fy = yb.length,
            Zy = bb.length,
            cb = new Array(fy),
            Py = 0,
            oy = Wy;
          for (Uy = 0; Uy < Zy; Uy++)(hy = yb[Uy] - Py - bb[Uy]) < 0 ? (hy += oy, Py = 1) : Py = 0, cb[Uy] = hy;
          for (Uy = Zy; Uy < fy; Uy++) {
            if (!((hy = yb[Uy] - Py) < 0)) {
              cb[Uy++] = hy;
              break
            }
            hy += oy, cb[Uy] = hy
          }
          for (; Uy < fy; Uy++) cb[Uy] = yb[Uy];
          return sy(cb), cb
        }

        function Vy(yb, bb, Uy) {
          var hy, fy, Zy = yb.length,
            cb = new Array(Zy),
            By = -bb,
            Ky = Wy;
          for (hy = 0; hy < Zy; hy++) fy = yb[hy] + By, By = Math.floor(fy / Ky), fy %= Ky, cb[hy] = fy < 0 ? fy + Ky : fy;
          return "number" === typeof(cb = qb(cb)) ? (Uy && (cb = -cb), new oy(cb)) : new Py(cb, Uy)
        }

        function Jy(yb, bb) {
          var Uy, hy, fy, Zy, cb = yb.length,
            Py = bb.length,
            oy = Sy(cb + Py),
            By = Wy;
          for (fy = 0; fy < cb; ++fy) {
            Zy = yb[fy];
            for (var Ky = 0; Ky < Py; ++Ky) Uy = Zy * bb[Ky] + oy[fy + Ky], hy = Math.floor(Uy / By), oy[fy + Ky] = Uy - hy * By, oy[fy + Ky + 1] += hy
          }
          return sy(oy), oy
        }

        function gb(yb, bb) {
          var Uy, hy, fy = yb.length,
            Zy = new Array(fy),
            cb = Wy,
            Py = 0;
          for (hy = 0; hy < fy; hy++) Uy = yb[hy] * bb + Py, Py = Math.floor(Uy / cb), Zy[hy] = Uy - Py * cb;
          for (; Py > 0;) Zy[hy++] = Py % cb, Py = Math.floor(Py / cb);
          return Zy
        }

        function Gy(yb, bb) {
          for (var Wy = []; bb-- > 0;) Wy.push(0);
          return Wy.concat(yb)
        }

        function Oy(yb, bb) {
          var Wy = Math.max(yb.length, bb.length);
          if (Wy <= 30) return Jy(yb, bb);
          Wy = Math.ceil(Wy / 2);
          var Uy = yb.slice(Wy),
            hy = yb.slice(0, Wy),
            fy = bb.slice(Wy),
            Zy = bb.slice(0, Wy),
            cb = Oy(hy, Zy),
            Py = Oy(Uy, fy),
            oy = Oy(mb(hy, Uy), mb(Zy, fy)),
            By = mb(mb(cb, Gy(Ty(Ty(oy, cb), Py), Wy)), Gy(Py, 2 * Wy));
          return sy(By), By
        }

        function Ry(yb, bb, Uy) {
          return new Py(yb < Wy ? gb(bb, yb) : Jy(bb, ey(yb)), Uy)
        }

        function vb(yb) {
          var bb, Uy, hy, fy, Zy = yb.length,
            cb = Sy(Zy + Zy),
            Py = Wy;
          for (hy = 0; hy < Zy; hy++) {
            Uy = 0 - (fy = yb[hy]) * fy;
            for (var oy = hy; oy < Zy; oy++) bb = fy * yb[oy] * 2 + cb[hy + oy] + Uy, Uy = Math.floor(bb / Py), cb[hy + oy] = bb - Uy * Py;
            cb[hy + Zy] = Uy
          }
          return sy(cb), cb
        }

        function ib(yb, bb) {
          var Uy, hy, fy, Zy, cb = yb.length,
            Py = Sy(cb),
            oy = Wy;
          for (fy = 0, Uy = cb - 1; Uy >= 0; --Uy) fy = (Zy = fy * oy + yb[Uy]) - (hy = Ey(Zy / bb)) * bb, Py[Uy] = 0 | hy;
          return [Py, 0 | fy]
        }

        function My(yb, bb) {
          var Uy, hy = xb(bb);
          if (Zy) return [new By(yb.value / hy.value), new By(yb.value % hy.value)];
          var fy, Ky = yb.value,
            ly = hy.value;
          if (0 === ly) throw new Error("Cannot divide by zero");
          if (yb.isSmall) return hy.isSmall ? [new oy(Ey(Ky / ly)), new oy(Ky % ly)] : [cb[0], yb];
          if (hy.isSmall) {
            if (1 === ly) return [yb, cb[0]];
            if (-1 == ly) return [yb.gZ(), cb[0]];
            var mb = Math.abs(ly);
            if (mb < Wy) {
              fy = qb((Uy = ib(Ky, mb))[0]);
              var Cy = Uy[1];
              return yb.sign && (Cy = -Cy), "number" === typeof fy ? (yb.sign !== hy.sign && (fy = -fy), [new oy(fy), new oy(Cy)]) : [new Py(fy, yb.sign !== hy.sign), new oy(Cy)]
            }
            ly = ey(mb)
          }
          var Vy = Yy(Ky, ly);
          if (-1 === Vy) return [cb[0], yb];
          if (0 === Vy) return [cb[yb.sign === hy.sign ? 1 : -1], cb[0]];
          Uy = Ky.length + ly.length <= 200 ? function(yb, bb) {
            var Uy, hy, fy, Zy, cb, Py, oy, By = yb.length,
              Ky = bb.length,
              ey = Wy,
              sy = Sy(bb.length),
              Ey = bb[Ky - 1],
              ly = Math.ceil(ey / (2 * Ey)),
              mb = gb(yb, ly),
              Cy = gb(bb, ly);
            for (mb.length <= By && mb.push(0), Cy.push(0), Ey = Cy[Ky - 1], hy = By - Ky; hy >= 0; hy--) {
              for (Uy = ey - 1, mb[hy + Ky] !== Ey && (Uy = Math.floor((mb[hy + Ky] * ey + mb[hy + Ky - 1]) / Ey)), fy = 0, Zy = 0, Py = Cy.length, cb = 0; cb < Py; cb++) fy += Uy * Cy[cb], oy = Math.floor(fy / ey), Zy += mb[hy + cb] - (fy - oy * ey), fy = oy, Zy < 0 ? (mb[hy + cb] = Zy + ey, Zy = -1) : (mb[hy + cb] = Zy, Zy = 0);
              for (; 0 !== Zy;) {
                for (Uy -= 1, fy = 0, cb = 0; cb < Py; cb++)(fy += mb[hy + cb] - ey + Cy[cb]) < 0 ? (mb[hy + cb] = fy + ey, fy = 0) : (mb[hy + cb] = fy, fy = 1);
                Zy += fy
              }
              sy[hy] = Uy
            }
            return mb = ib(mb, ly)[0], [qb(sy), qb(mb)]
          }(Ky, ly) : function(yb, bb) {
            for (var Uy, hy, fy, Zy, cb, Py = yb.length, oy = bb.length, By = [], Ky = [], ey = Wy; Py;)
              if (Ky.unshift(yb[--Py]), sy(Ky), Yy(Ky, bb) < 0) By.push(0);
              else {
                fy = Ky[(hy = Ky.length) - 1] * ey + Ky[hy - 2], Zy = bb[oy - 1] * ey + bb[oy - 2], hy > oy && (fy = (fy + 1) * ey), Uy = Math.ceil(fy / Zy);
                do {
                  if (Yy(cb = gb(bb, Uy), Ky) <= 0) break;
                  Uy--
                } while (Uy);
                By.push(Uy), Ky = Ty(Ky, cb)
              } return By.reverse(), [qb(By), qb(Ky)]
          }(Ky, ly), fy = Uy[0];
          var Jy = yb.sign !== hy.sign,
            Gy = Uy[1],
            Oy = yb.sign;
          return "number" === typeof fy ? (Jy && (fy = -fy), fy = new oy(fy)) : fy = new Py(fy, Jy), "number" === typeof Gy ? (Oy && (Gy = -Gy), Gy = new oy(Gy)) : Gy = new Py(Gy, Oy), [fy, Gy]
        }

        function Yy(yb, bb) {
          if (yb.length !== bb.length) return yb.length > bb.length ? 1 : -1;
          for (var Wy = yb.length - 1; Wy >= 0; Wy--)
            if (yb[Wy] !== bb[Wy]) return yb[Wy] > bb[Wy] ? 1 : -1;
          return 0
        }

        function Xy(yb) {
          var bb = yb.abs();
          return !bb.isUnit() && (!!(bb.equals(2) || bb.equals(3) || bb.equals(5)) || !(bb.isEven() || bb.isDivisibleBy(3) || bb.isDivisibleBy(5)) && (!!bb.lesser(49) || void 0))
        }

        function ny(yb, Wy) {
          for (var Uy, hy, fy, Zy = yb.prev(), cb = Zy, Py = 0; cb.isEven();) cb = cb.divide(2), Py++;
          yb: for (hy = 0; hy < Wy.length; hy++)
            if (!yb.lesser(Wy[hy]) && !(fy = bb(Wy[hy]).modPow(cb, yb)).isUnit() && !fy.equals(Zy)) {
              for (Uy = Py - 1; 0 != Uy; Uy--) {
                if ((fy = fy.square().mod(yb)).isUnit()) return !1;
                if (fy.equals(Zy)) continue yb
              }
              return !1
            }
          return !0
        }
        Py.prototype = Object.create(cb.prototype), oy.prototype = Object.create(cb.prototype), By.prototype = Object.create(cb.prototype), Py.prototype.add = function(yb) {
          var bb = xb(yb);
          if (this.sign !== bb.sign) return this.subtract(bb.gZ());
          var Wy = this.value,
            Uy = bb.value;
          return bb.isSmall ? new Py(Cy(Wy, Math.abs(Uy)), this.sign) : new Py(mb(Wy, Uy), this.sign)
        }, Py.prototype.plus = Py.prototype.add, oy.prototype.add = function(yb) {
          var bb = xb(yb),
            Wy = this.value;
          if (Wy < 0 !== bb.sign) return this.subtract(bb.gZ());
          var Uy = bb.value;
          if (bb.isSmall) {
            if (Ky(Wy + Uy)) return new oy(Wy + Uy);
            Uy = ey(Math.abs(Uy))
          }
          return new Py(Cy(Uy, Math.abs(Wy)), Wy < 0)
        }, oy.prototype.plus = oy.prototype.add, By.prototype.add = function(yb) {
          return new By(this.value + xb(yb).value)
        }, By.prototype.plus = By.prototype.add, Py.prototype.subtract = function(yb) {
          var bb = xb(yb);
          if (this.sign !== bb.sign) return this.add(bb.gZ());
          var Wy = this.value,
            Uy = bb.value;
          return bb.isSmall ? Vy(Wy, Math.abs(Uy), this.sign) : function(yb, bb, Wy) {
            var Uy;
            return Yy(yb, bb) >= 0 ? Uy = Ty(yb, bb) : (Uy = Ty(bb, yb), Wy = !Wy), "number" === typeof(Uy = qb(Uy)) ? (Wy && (Uy = -Uy), new oy(Uy)) : new Py(Uy, Wy)
          }(Wy, Uy, this.sign)
        }, Py.prototype.minus = Py.prototype.subtract, oy.prototype.subtract = function(yb) {
          var bb = xb(yb),
            Wy = this.value;
          if (Wy < 0 !== bb.sign) return this.add(bb.gZ());
          var Uy = bb.value;
          return bb.isSmall ? new oy(Wy - Uy) : Vy(Uy, Math.abs(Wy), Wy >= 0)
        }, oy.prototype.minus = oy.prototype.subtract, By.prototype.subtract = function(yb) {
          return new By(this.value - xb(yb).value)
        }, By.prototype.minus = By.prototype.subtract, Py.prototype.gZ = function() {
          return new Py(this.value, !this.sign)
        }, oy.prototype.gZ = function() {
          var yb = this.sign,
            bb = new oy(-this.value);
          return bb.sign = !yb, bb
        }, By.prototype.gZ = function() {
          return new By(-this.value)
        }, Py.prototype.abs = function() {
          return new Py(this.value, !1)
        }, oy.prototype.abs = function() {
          return new oy(Math.abs(this.value))
        }, By.prototype.abs = function() {
          return new By(this.value >= 0 ? this.value : -this.value)
        }, Py.prototype.multiply = function(yb) {
          var bb, Uy, hy, fy = xb(yb),
            Zy = this.value,
            oy = fy.value,
            By = this.sign !== fy.sign;
          if (fy.isSmall) {
            if (0 === oy) return cb[0];
            if (1 === oy) return this;
            if (-1 === oy) return this.gZ();
            if ((bb = Math.abs(oy)) < Wy) return new Py(gb(Zy, bb), By);
            oy = ey(bb)
          }
          return Uy = Zy.length, hy = oy.length, new Py(-.012 * Uy - .012 * hy + 15e-6 * Uy * hy > 0 ? Oy(Zy, oy) : Jy(Zy, oy), By)
        }, Py.prototype.times = Py.prototype.multiply, oy.prototype._multiplyBySmall = function(yb) {
          return Ky(yb.value * this.value) ? new oy(yb.value * this.value) : Ry(Math.abs(yb.value), ey(Math.abs(this.value)), this.sign !== yb.sign)
        }, Py.prototype._multiplyBySmall = function(yb) {
          return 0 === yb.value ? cb[0] : 1 === yb.value ? this : -1 === yb.value ? this.gZ() : Ry(Math.abs(yb.value), this.value, this.sign !== yb.sign)
        }, oy.prototype.multiply = function(yb) {
          return xb(yb)._multiplyBySmall(this)
        }, oy.prototype.times = oy.prototype.multiply, By.prototype.multiply = function(yb) {
          return new By(this.value * xb(yb).value)
        }, By.prototype.times = By.prototype.multiply, Py.prototype.square = function() {
          return new Py(vb(this.value), !1)
        }, oy.prototype.square = function() {
          var yb = this.value * this.value;
          return Ky(yb) ? new oy(yb) : new Py(vb(ey(Math.abs(this.value))), !1)
        }, By.prototype.square = function(yb) {
          return new By(this.value * this.value)
        }, Py.prototype.divmod = function(yb) {
          var bb = My(this, yb);
          return {
            quotient: bb[0],
            remainder: bb[1]
          }
        }, By.prototype.divmod = oy.prototype.divmod = Py.prototype.divmod, Py.prototype.divide = function(yb) {
          return My(this, yb)[0]
        }, By.prototype.over = By.prototype.divide = function(yb) {
          return new By(this.value / xb(yb).value)
        }, oy.prototype.over = oy.prototype.divide = Py.prototype.over = Py.prototype.divide, Py.prototype.mod = function(yb) {
          return My(this, yb)[1]
        }, By.prototype.mod = By.prototype.remainder = function(yb) {
          return new By(this.value % xb(yb).value)
        }, oy.prototype.remainder = oy.prototype.mod = Py.prototype.remainder = Py.prototype.mod, Py.prototype.pow = function(yb) {
          var bb, Wy, Uy, hy = xb(yb),
            fy = this.value,
            Zy = hy.value;
          if (0 === Zy) return cb[1];
          if (0 === fy) return cb[0];
          if (1 === fy) return cb[1];
          if (-1 === fy) return hy.isEven() ? cb[1] : cb[-1];
          if (hy.sign) return cb[0];
          if (!hy.isSmall) throw new Error("The exponent " + hy.toString() + " is too large.");
          if (this.isSmall && Ky(bb = Math.pow(fy, Zy))) return new oy(Ey(bb));
          for (Wy = this, Uy = cb[1]; !0 & Zy && (Uy = Uy.times(Wy), --Zy), 0 !== Zy;) Zy /= 2, Wy = Wy.square();
          return Uy
        }, oy.prototype.pow = Py.prototype.pow, By.prototype.pow = function(yb) {
          var bb = xb(yb),
            Wy = this.value,
            Uy = bb.value,
            hy = BigInt(0),
            fy = BigInt(1),
            Zy = BigInt(2);
          if (Uy === hy) return cb[1];
          if (Wy === hy) return cb[0];
          if (Wy === fy) return cb[1];
          if (Wy === BigInt(-1)) return bb.isEven() ? cb[1] : cb[-1];
          if (bb.isNegative()) return new By(hy);
          for (var Py = this, oy = cb[1];
            (Uy & fy) === fy && (oy = oy.times(Py), --Uy), Uy !== hy;) Uy /= Zy, Py = Py.square();
          return oy
        }, Py.prototype.modPow = function(yb, bb) {
          if (yb = xb(yb), (bb = xb(bb)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var Wy = cb[1],
            Uy = this.mod(bb);
          for (yb.isNegative() && (yb = yb.multiply(cb[-1]), Uy = Uy.modInv(bb)); yb.isPositive();) {
            if (Uy.isZero()) return cb[0];
            yb.isOdd() && (Wy = Wy.multiply(Uy).mod(bb)), yb = yb.divide(2), Uy = Uy.square().mod(bb)
          }
          return Wy
        }, By.prototype.modPow = oy.prototype.modPow = Py.prototype.modPow, Py.prototype.compareAbs = function(yb) {
          var bb = xb(yb),
            Wy = this.value,
            Uy = bb.value;
          return bb.isSmall ? 1 : Yy(Wy, Uy)
        }, oy.prototype.compareAbs = function(yb) {
          var bb = xb(yb),
            Wy = Math.abs(this.value),
            Uy = bb.value;
          return bb.isSmall ? Wy === (Uy = Math.abs(Uy)) ? 0 : Wy > Uy ? 1 : -1 : -1
        }, By.prototype.compareAbs = function(yb) {
          var bb = this.value,
            Wy = xb(yb).value;
          return (bb = bb >= 0 ? bb : -bb) === (Wy = Wy >= 0 ? Wy : -Wy) ? 0 : bb > Wy ? 1 : -1
        }, Py.prototype.compare = function(yb) {
          if (yb === 1 / 0) return -1;
          if (yb === -1 / 0) return 1;
          var bb = xb(yb),
            Wy = this.value,
            Uy = bb.value;
          return this.sign !== bb.sign ? bb.sign ? 1 : -1 : bb.isSmall ? this.sign ? -1 : 1 : Yy(Wy, Uy) * (this.sign ? -1 : 1)
        }, Py.prototype.compareTo = Py.prototype.compare, oy.prototype.compare = function(yb) {
          if (yb === 1 / 0) return -1;
          if (yb === -1 / 0) return 1;
          var bb = xb(yb),
            Wy = this.value,
            Uy = bb.value;
          return bb.isSmall ? Wy == Uy ? 0 : Wy > Uy ? 1 : -1 : Wy < 0 !== bb.sign ? Wy < 0 ? -1 : 1 : Wy < 0 ? 1 : -1
        }, oy.prototype.compareTo = oy.prototype.compare, By.prototype.compare = function(yb) {
          if (yb === 1 / 0) return -1;
          if (yb === -1 / 0) return 1;
          var bb = this.value,
            Wy = xb(yb).value;
          return bb === Wy ? 0 : bb > Wy ? 1 : -1
        }, By.prototype.compareTo = By.prototype.compare, Py.prototype.equals = function(yb) {
          return 0 === this.compare(yb)
        }, By.prototype.eq = By.prototype.equals = oy.prototype.eq = oy.prototype.equals = Py.prototype.eq = Py.prototype.equals, Py.prototype.notEquals = function(yb) {
          return 0 !== this.compare(yb)
        }, By.prototype.neq = By.prototype.notEquals = oy.prototype.neq = oy.prototype.notEquals = Py.prototype.neq = Py.prototype.notEquals, Py.prototype.greater = function(yb) {
          return this.compare(yb) > 0
        }, By.prototype.gt = By.prototype.greater = oy.prototype.gt = oy.prototype.greater = Py.prototype.gt = Py.prototype.greater, Py.prototype.lesser = function(yb) {
          return this.compare(yb) < 0
        }, By.prototype.lt = By.prototype.lesser = oy.prototype.lt = oy.prototype.lesser = Py.prototype.lt = Py.prototype.lesser, Py.prototype.greaterOrEquals = function(yb) {
          return this.compare(yb) >= 0
        }, By.prototype.geq = By.prototype.greaterOrEquals = oy.prototype.geq = oy.prototype.greaterOrEquals = Py.prototype.geq = Py.prototype.greaterOrEquals, Py.prototype.lesserOrEquals = function(yb) {
          return this.compare(yb) <= 0
        }, By.prototype.leq = By.prototype.lesserOrEquals = oy.prototype.leq = oy.prototype.lesserOrEquals = Py.prototype.leq = Py.prototype.lesserOrEquals, Py.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, oy.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, By.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, Py.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, oy.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, By.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, Py.prototype.isPositive = function() {
          return !this.sign
        }, oy.prototype.isPositive = function() {
          return this.value > 0
        }, By.prototype.isPositive = oy.prototype.isPositive, Py.prototype.isNegative = function() {
          return this.sign
        }, oy.prototype.isNegative = function() {
          return this.value < 0
        }, By.prototype.isNegative = oy.prototype.isNegative, Py.prototype.isUnit = function() {
          return !1
        }, oy.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, By.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, Py.prototype.isZero = function() {
          return !1
        }, oy.prototype.isZero = function() {
          return 0 === this.value
        }, By.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, Py.prototype.isDivisibleBy = function(yb) {
          var bb = xb(yb);
          return !bb.isZero() && (!!bb.isUnit() || (0 === bb.compareAbs(2) ? this.isEven() : this.mod(bb).isZero()))
        }, By.prototype.isDivisibleBy = oy.prototype.isDivisibleBy = Py.prototype.isDivisibleBy, Py.prototype.isPrime = function(Wy) {
          var Uy = Xy(this);
          if (Uy !== yb) return Uy;
          var hy = this.abs(),
            fy = hy.bitLength();
          if (fy <= 64) return ny(hy, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var Zy = Math.log(2) * fy.toJSNumber(), cb = Math.ceil(!0 === Wy ? 2 * Math.pow(Zy, 2) : Zy), Py = [], oy = 0; oy < cb; oy++) Py.push(bb(oy + 2));
          return ny(hy, Py)
        }, By.prototype.isPrime = oy.prototype.isPrime = Py.prototype.isPrime, Py.prototype.isProbablePrime = function(Wy, Uy) {
          var hy = Xy(this);
          if (hy !== yb) return hy;
          for (var fy = this.abs(), Zy = Wy === yb ? 5 : Wy, cb = [], Py = 0; Py < Zy; Py++) cb.push(bb.randBetween(2, fy.minus(2), Uy));
          return ny(fy, cb)
        }, By.prototype.isProbablePrime = oy.prototype.isProbablePrime = Py.prototype.isProbablePrime, Py.prototype.modInv = function(yb) {
          for (var Wy, Uy, hy, fy = bb.zero, Zy = bb.one, cb = xb(yb), Py = this.abs(); !Py.isZero();) Wy = cb.divide(Py), Uy = fy, hy = cb, fy = Zy, cb = Py, Zy = Uy.subtract(Wy.multiply(Zy)), Py = hy.subtract(Wy.multiply(Py));
          if (!cb.isUnit()) throw new Error(this.toString() + " and " + yb.toString() + " are not co-prime");
          return -1 === fy.compare(0) && (fy = fy.add(yb)), this.isNegative() ? fy.gZ() : fy
        }, By.prototype.modInv = oy.prototype.modInv = Py.prototype.modInv, Py.prototype.next = function() {
          var yb = this.value;
          return this.sign ? Vy(yb, 1, this.sign) : new Py(Cy(yb, 1), this.sign)
        }, oy.prototype.next = function() {
          var yb = this.value;
          return yb + 1 < Uy ? new oy(yb + 1) : new Py(hy, !1)
        }, By.prototype.next = function() {
          return new By(this.value + BigInt(1))
        }, Py.prototype.prev = function() {
          var yb = this.value;
          return this.sign ? new Py(Cy(yb, 1), !0) : Vy(yb, 1, this.sign)
        }, oy.prototype.prev = function() {
          var yb = this.value;
          return yb - 1 > -Uy ? new oy(yb - 1) : new Py(hy, !0)
        }, By.prototype.prev = function() {
          return new By(this.value - BigInt(1))
        };
        for (var uy = [1]; 2 * uy[uy.length - 1] <= Wy;) uy.push(2 * uy[uy.length - 1]);
        var rb = uy.length,
          Hy = uy[rb - 1];

        function ab(yb) {
          return Math.abs(yb) <= Wy
        }

        function Fy(yb, Wy, Uy) {
          Wy = xb(Wy);
          for (var hy = yb.isNegative(), fy = Wy.isNegative(), Zy = hy ? yb.not() : yb, cb = fy ? Wy.not() : Wy, Py = 0, oy = 0, By = null, Ky = null, ey = []; !Zy.isZero() || !cb.isZero();) Py = (By = My(Zy, Hy))[1].toJSNumber(), hy && (Py = Hy - 1 - Py), oy = (Ky = My(cb, Hy))[1].toJSNumber(), fy && (oy = Hy - 1 - oy), Zy = By[0], cb = Ky[0], ey.push(Uy(Py, oy));
          for (var qb = 0 !== Uy(hy ? 1 : 0, fy ? 1 : 0) ? bb(-1) : bb(0), sy = ey.length - 1; sy >= 0; sy -= 1) qb = qb.multiply(Hy).add(bb(ey[sy]));
          return qb
        }
        Py.prototype.shiftLeft = function(yb) {
          var bb = xb(yb).toJSNumber();
          if (!ab(bb)) throw new Error(String(bb) + " is too large for shifting.");
          if (bb < 0) return this.shiftRight(-bb);
          var Wy = this;
          if (Wy.isZero()) return Wy;
          for (; bb >= rb;) Wy = Wy.multiply(Hy), bb -= rb - 1;
          return Wy.multiply(uy[bb])
        }, By.prototype.shiftLeft = oy.prototype.shiftLeft = Py.prototype.shiftLeft, Py.prototype.shiftRight = function(yb) {
          var bb, Wy = xb(yb).toJSNumber();
          if (!ab(Wy)) throw new Error(String(Wy) + " is too large for shifting.");
          if (Wy < 0) return this.shiftLeft(-Wy);
          for (var Uy = this; Wy >= rb;) {
            if (Uy.isZero() || Uy.isNegative() && Uy.isUnit()) return Uy;
            Uy = (bb = My(Uy, Hy))[1].isNegative() ? bb[0].prev() : bb[0], Wy -= rb - 1
          }
          return (bb = My(Uy, uy[Wy]))[1].isNegative() ? bb[0].prev() : bb[0]
        }, By.prototype.shiftRight = oy.prototype.shiftRight = Py.prototype.shiftRight, Py.prototype.not = function() {
          return this.gZ().prev()
        }, By.prototype.not = oy.prototype.not = Py.prototype.not, Py.prototype.and = function(yb) {
          return Fy(this, yb, (function(yb, bb) {
            return yb & bb
          }))
        }, By.prototype.and = oy.prototype.and = Py.prototype.and, Py.prototype.or = function(yb) {
          return Fy(this, yb, (function(yb, bb) {
            return yb | bb
          }))
        }, By.prototype.or = oy.prototype.or = Py.prototype.or, Py.prototype.xor = function(yb) {
          return Fy(this, yb, (function(yb, bb) {
            return yb ^ bb
          }))
        }, By.prototype.xor = oy.prototype.xor = Py.prototype.xor;
        var py = 1 << 30;

        function Ly(yb) {
          var bb = yb.value,
            Uy = "number" === typeof bb ? bb | py : "bigint" === typeof bb ? bb | BigInt(py) : bb[0] + bb[1] * Wy | 1073758208;
          return Uy & -Uy
        }

        function Qy(yb, Wy) {
          if (Wy.compareTo(yb) <= 0) {
            var Uy = Qy(yb, Wy.square(Wy)),
              hy = Uy.p,
              fy = Uy.e,
              Zy = hy.multiply(Wy);
            return Zy.compareTo(yb) <= 0 ? {
              p: Zy,
              e: 2 * fy + 1
            } : {
              p: hy,
              e: 2 * fy
            }
          }
          return {
            p: bb(1),
            e: 0
          }
        }

        function jb(yb, bb) {
          return yb = xb(yb), bb = xb(bb), yb.greater(bb) ? yb : bb
        }

        function Dy(yb, bb) {
          return yb = xb(yb), bb = xb(bb), yb.lesser(bb) ? yb : bb
        }

        function tb(yb, bb) {
          if (yb = xb(yb).abs(), bb = xb(bb).abs(), yb.equals(bb)) return yb;
          if (yb.isZero()) return bb;
          if (bb.isZero()) return yb;
          for (var Wy, Uy, hy = cb[1]; yb.isEven() && bb.isEven();) Wy = Dy(Ly(yb), Ly(bb)), yb = yb.divide(Wy), bb = bb.divide(Wy), hy = hy.multiply(Wy);
          for (; yb.isEven();) yb = yb.divide(Ly(yb));
          do {
            for (; bb.isEven();) bb = bb.divide(Ly(bb));
            yb.greater(bb) && (Uy = bb, bb = yb, yb = Uy), bb = bb.subtract(yb)
          } while (!bb.isZero());
          return hy.isUnit() ? yb : yb.multiply(hy)
        }
        Py.prototype.bitLength = function() {
          var yb = this;
          return yb.compareTo(bb(0)) < 0 && (yb = yb.gZ().subtract(bb(1))), 0 === yb.compareTo(bb(0)) ? bb(0) : bb(Qy(yb, bb(2)).e).add(bb(1))
        }, By.prototype.bitLength = oy.prototype.bitLength = Py.prototype.bitLength;
        var wy = function(yb, bb, Wy, Uy) {
          Wy = Wy || fy, yb = String(yb), Uy || (yb = yb.toLowerCase(), Wy = Wy.toLowerCase());
          var hy, Zy = yb.length,
            cb = Math.abs(bb),
            Py = {};
          for (hy = 0; hy < Wy.length; hy++) Py[Wy[hy]] = hy;
          for (hy = 0; hy < Zy; hy++) {
            if ("-" !== (Ky = yb[hy]) && (Ky in Py && Py[Ky] >= cb)) {
              if ("1" === Ky && 1 === cb) continue;
              throw new Error(Ky + " is not a valid digit in base " + bb + ".")
            }
          }
          bb = xb(bb);
          var oy = [],
            By = "-" === yb[0];
          for (hy = By ? 1 : 0; hy < yb.length; hy++) {
            var Ky;
            if ((Ky = yb[hy]) in Py) oy.push(xb(Py[Ky]));
            else {
              if ("<" !== Ky) throw new Error(Ky + " is not a valid character");
              var ey = hy;
              do {
                hy++
              } while (">" !== yb[hy] && hy < yb.length);
              oy.push(xb(yb.slice(ey + 1, hy)))
            }
          }
          return kb(oy, bb, By)
        };

        function kb(yb, bb, Wy) {
          var Uy, hy = cb[0],
            fy = cb[1];
          for (Uy = yb.length - 1; Uy >= 0; Uy--) hy = hy.add(yb[Uy].times(fy)), fy = fy.times(bb);
          return Wy ? hy.gZ() : hy
        }

        function Ny(yb, Wy) {
          if ((Wy = bb(Wy)).isZero()) {
            if (yb.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (Wy.equals(-1)) {
            if (yb.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (yb.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-yb.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var Uy = Array.apply(null, Array(yb.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return Uy.unshift([1]), {
              value: [].concat.apply([], Uy),
              isNegative: !1
            }
          }
          var hy = !1;
          if (yb.isNegative() && Wy.isPositive() && (hy = !0, yb = yb.abs()), Wy.isUnit()) return yb.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(yb.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: hy
          };
          for (var fy, Zy = [], cb = yb; cb.isNegative() || cb.compareAbs(Wy) >= 0;) {
            fy = cb.divmod(Wy), cb = fy.quotient;
            var Py = fy.remainder;
            Py.isNegative() && (Py = Wy.minus(Py).abs(), cb = cb.next()), Zy.push(Py.toJSNumber())
          }
          return Zy.push(cb.toJSNumber()), {
            value: Zy.reverse(),
            isNegative: hy
          }
        }

        function zb(yb, bb, Wy) {
          var Uy = Ny(yb, bb);
          return (Uy.isNegative ? "-" : "") + Uy.value.map((function(yb) {
            return function(yb, bb) {
              return yb < (bb = bb || fy).length ? bb[yb] : "<" + yb + ">"
            }(yb, Wy)
          })).join("")
        }

        function Iy(yb) {
          if (Ky(+yb)) {
            var bb = +yb;
            if (bb === Ey(bb)) return Zy ? new By(BigInt(bb)) : new oy(bb);
            throw new Error("Invalid integer: " + yb)
          }
          var Wy = "-" === yb[0];
          Wy && (yb = yb.slice(1));
          var Uy = yb.split(/e/i);
          if (Uy.length > 2) throw new Error("Invalid integer: " + Uy.join("e"));
          if (2 === Uy.length) {
            var hy = Uy[1];
            if ("+" === hy[0] && (hy = hy.slice(1)), (hy = +hy) !== Ey(hy) || !Ky(hy)) throw new Error("Invalid integer: " + hy + " is not a valid exponent.");
            var fy = Uy[0],
              cb = fy.indexOf(".");
            if (cb >= 0 && (hy -= fy.length - cb - 1, fy = fy.slice(0, cb) + fy.slice(cb + 1)), hy < 0) throw new Error("Cannot include negative exponent part for integers");
            yb = fy += new Array(hy + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(yb)) throw new Error("Invalid integer: " + yb);
          if (Zy) return new By(BigInt(Wy ? "-" + yb : yb));
          for (var ey = [], qb = yb.length, Sy = qb - 7; qb > 0;) ey.push(+yb.slice(Sy, qb)), (Sy -= 7) < 0 && (Sy = 0), qb -= 7;
          return sy(ey), new Py(ey, Wy)
        }

        function xb(yb) {
          return "number" === typeof yb ? function(yb) {
            if (Zy) return new By(BigInt(yb));
            if (Ky(yb)) {
              if (yb !== Ey(yb)) throw new Error(yb + " is not an integer.");
              return new oy(yb)
            }
            return Iy(yb.toString())
          }(yb) : "string" === typeof yb ? Iy(yb) : "bigint" === typeof yb ? new By(yb) : yb
        }
        Py.prototype.toArray = function(yb) {
          return Ny(this, yb)
        }, oy.prototype.toArray = function(yb) {
          return Ny(this, yb)
        }, By.prototype.toArray = function(yb) {
          return Ny(this, yb)
        }, Py.prototype.toString = function(bb, Wy) {
          if (bb === yb && (bb = 10), 10 !== bb) return zb(this, bb, Wy);
          for (var Uy, hy = this.value, fy = hy.length, Zy = String(hy[--fy]); --fy >= 0;) Uy = String(hy[fy]), Zy += "0000000".slice(Uy.length) + Uy;
          return (this.sign ? "-" : "") + Zy
        }, oy.prototype.toString = function(bb, Wy) {
          return bb === yb && (bb = 10), 10 != bb ? zb(this, bb, Wy) : String(this.value)
        }, By.prototype.toString = oy.prototype.toString, By.prototype.toJSON = Py.prototype.toJSON = oy.prototype.toJSON = function() {
          return this.toString()
        }, Py.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, Py.prototype.toJSNumber = Py.prototype.valueOf, oy.prototype.valueOf = function() {
          return this.value
        }, oy.prototype.toJSNumber = oy.prototype.valueOf, By.prototype.valueOf = By.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var Ay = 0; Ay < 1e3; Ay++) cb[Ay] = xb(Ay), Ay > 0 && (cb[-Ay] = xb(-Ay));
        return cb.one = cb[1], cb.zero = cb[0], cb.minusOne = cb[-1], cb.max = jb, cb.min = Dy, cb.gcd = tb, cb.lcm = function(yb, bb) {
          return yb = xb(yb).abs(), bb = xb(bb).abs(), yb.divide(tb(yb, bb)).multiply(bb)
        }, cb.isInstance = function(yb) {
          return yb instanceof Py || yb instanceof oy || yb instanceof By
        }, cb.randBetween = function(yb, bb, Uy) {
          yb = xb(yb), bb = xb(bb);
          var hy = Uy || Math.random,
            fy = Dy(yb, bb),
            Zy = jb(yb, bb).subtract(fy).add(1);
          if (Zy.isSmall) return fy.add(Math.floor(hy() * Zy));
          for (var Py = Ny(Zy, Wy).value, oy = [], By = !0, Ky = 0; Ky < Py.length; Ky++) {
            var ey = By ? Py[Ky] : Wy,
              qb = Ey(hy() * ey);
            oy.push(qb), qb < ey && (By = !1)
          }
          return fy.add(cb.FPy(oy, Wy, !1))
        }, cb.FPy = function(yb, bb, Wy) {
          return kb(yb.map(xb), xb(bb || 10), Wy)
        }, cb
      }();
      yb.hasOwnProperty("exports") && (yb.exports = bb)
    }(mU);
    var CW = fy(mU.exports);

    function TW(yb, bb, Wy) {
      let Uy = 0;
      for (let hy = 0; hy < Wy; hy++) {
        const Wy = yb[bb + hy];
        if (void 0 === Wy) break;
        Uy += Wy * 16 ** hy
      }
      return Uy
    }

    function VW(yb) {
      const bb = [];
      for (let Wy = 0; Wy < yb.length; Wy++) {
        let Uy = Number(yb[Wy]);
        for (let yb = 0; Uy || yb < bb.length; yb++) Uy += 10 * (bb[yb] || 0), bb[yb] = Uy % 16, Uy = (Uy - bb[yb]) / 16
      }
      return bb
    }
    class JW {
      static fromString(yb) {
        return new JW(function(yb) {
          const bb = VW(yb),
            Wy = Array(4);
          for (let Uy = 0; Uy < 4; Uy++) Wy[3 - Uy] = TW(bb, 4 * Uy, 4);
          return Wy
        }(yb), yb)
      }
      static fromBit(yb) {
        const bb = Array(4),
          Wy = Math.floor(yb / 16);
        for (let Uy = 0; Uy < 4; Uy++) bb[3 - Uy] = Uy === Wy ? 1 << yb - 16 * Wy : 0;
        return new JW(bb)
      }
      constructor(yb, bb) {
        this.parts = yb, this.str = bb
      }
      and(yb) {
        let {
          parts: bb
        } = yb;
        return new JW(this.parts.map(((yb, Wy) => yb & bb[Wy])))
      }
      or(yb) {
        let {
          parts: bb
        } = yb;
        return new JW(this.parts.map(((yb, Wy) => yb | bb[Wy])))
      }
      xor(yb) {
        let {
          parts: bb
        } = yb;
        return new JW(this.parts.map(((yb, Wy) => yb ^ bb[Wy])))
      }
      not() {
        return new JW(this.parts.map((yb => ~yb)))
      }
      equals(yb) {
        let {
          parts: bb
        } = yb;
        return this.parts.every(((yb, Wy) => yb === bb[Wy]))
      }
      toString() {
        if (null != this.str) return this.str;
        const yb = new Array(16);
        return this.parts.forEach(((bb, Wy) => {
          const Uy = VW(bb.toString());
          for (let hy = 0; hy < 4; hy++) yb[hy + 4 * Wy] = Uy[3 - hy] || 0
        })), this.str = CW.FPy(yb, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const gU = function() {
      try {
        return BigInt, !0
      } catch (yb) {
        return !1
      }
    }();
    gU && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const GW = {},
      OW = gU ? function(yb) {
        return BigInt(yb)
      } : function(yb) {
        return yb instanceof JW ? yb : ("number" === typeof yb && (yb = yb.toString()), null != GW[yb] || (GW[yb] = JW.fromString(yb)), GW[yb])
      },
      RW = OW(0),
      vU = gU ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RW) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RW)
      } : function() {
        let yb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RW;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RW).and(yb)
      },
      iU = gU ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RW) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RW)
      } : function() {
        let yb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RW;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RW).or(yb)
      },
      MW = gU ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RW) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RW)
      } : function() {
        let yb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : RW;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RW).xor(yb)
      },
      YW = gU ? function(yb, bb) {
        return yb === bb
      } : function(yb, bb) {
        return null == yb || null == bb ? yb == bb : yb.equals(bb)
      };
    var XW, nW, uW, rU, HW = {
      combine: function() {
        let yb = arguments.length <= 0 ? void 0 : arguments[0];
        for (let bb = 1; bb < arguments.length; bb++) yb = iU(yb, bb < 0 || arguments.length <= bb ? void 0 : arguments[bb]);
        return yb
      },
      add: function(yb, bb) {
        return bb === RW ? yb : iU(yb, bb)
      },
      remove: function(yb, bb) {
        return bb === RW ? yb : MW(yb, vU(yb, bb))
      },
      filter: vU,
      invert: gU ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RW)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : RW).not()
      },
      has: function(yb, bb) {
        return YW(vU(yb, bb), bb)
      },
      hasAny: function(yb, bb) {
        return !YW(vU(yb, bb), RW)
      },
      equals: YW,
      deserialize: OW,
      getFlag: gU ? function(yb) {
        return BigInt(1) << BigInt(yb)
      } : function(yb) {
        return JW.fromBit(yb)
      }
    };
    ! function(yb) {
      yb[yb.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", yb[yb.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", yb[yb.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", yb[yb.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", yb[yb.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", yb[yb.RATELIMITED = 4002] = "RATELIMITED", yb[yb.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", yb[yb.INVALID_VERSION = 4004] = "INVALID_VERSION", yb[yb.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(XW || (XW = {})),
    function(yb) {
      yb[yb.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", yb[yb.INVALID_COMMAND = 4002] = "INVALID_COMMAND", yb[yb.INVALID_EVENT = 4004] = "INVALID_EVENT", yb[yb.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(nW || (nW = {})),
    function(yb) {
      yb.LANDSCAPE = "landscape", yb.PORTRAIT = "portrait"
    }(uW || (uW = {})),
    function(yb) {
      yb.MOBILE = "mobile", yb.DESKTOP = "desktop"
    }(rU || (rU = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: HW.getFlag(0),
      ADMINISTRATOR: HW.getFlag(3)
    });

    function aU(yb) {
      return qU((bb => {
        var Wy;
        const [Uy] = null !== (Wy = Object.entries(yb).find((yb => {
          let [, Wy] = yb;
          return Wy === bb
        }))) && void 0 !== Wy ? Wy : [];
        return null != bb && void 0 === Uy ? yb.UNHANDLED : bb
      }), ub().or(rW()))
    }
    const FW = lW.object({
        image_url: lW.string()
      }),
      pW = lW.object({
        mediaUrl: lW.string().max(1024)
      }),
      LW = lW.object({
        access_token: lW.union([lW.string(), lW.null()]).optional()
      }),
      QW = lW.object({
        access_token: lW.string(),
        user: lW.object({
          username: lW.string(),
          discriminator: lW.string(),
          id: lW.string(),
          avatar: lW.union([lW.string(), lW.null()]).optional(),
          public_flags: lW.number(),
          global_name: lW.union([lW.string(), lW.null()]).optional()
        }),
        scopes: lW.array(function(yb) {
          const bb = Yb().transform((bb => {
            const Wy = yb.safeParse(bb);
            return Wy.success ? Wy.data : yb._def.defaultValue()
          }));
          return bb.overlayType = yb, bb
        }(lW.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(lW.literal(-1)).default(-1))),
        expires: lW.string(),
        application: lW.object({
          description: lW.string(),
          icon: lW.union([lW.string(), lW.null()]).optional(),
          id: lW.string(),
          rpc_origins: lW.array(lW.string()).optional(),
          name: lW.string()
        })
      }),
      jU = lW.object({
        participants: lW.array(lW.object({
          id: lW.string(),
          username: lW.string(),
          global_name: lW.union([lW.string(), lW.null()]).optional(),
          discriminator: lW.string(),
          avatar: lW.union([lW.string(), lW.null()]).optional(),
          flags: lW.number(),
          bot: lW.boolean(),
          avatar_decoration_data: lW.union([lW.object({
            asset: lW.string(),
            skuId: lW.string().optional()
          }), lW.null()]).optional(),
          premium_type: lW.union([lW.number(), lW.null()]).optional(),
          nickname: lW.string().optional()
        }))
      });
    var DW;
    ! function(yb) {
      yb.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", yb.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", yb.AUTHENTICATE = "AUTHENTICATE", yb.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(DW || (DW = {}));
    const tU = lW.object({}).optional().nullable(),
      wW = lW.void(),
      kU = {
        [DW.INITIATE_IMAGE_UPLOAD]: {
          request: wW,
          response: FW
        },
        [DW.OPEN_SHARE_MOMENT_DIALOG]: {
          request: pW,
          response: tU
        },
        [DW.AUTHENTICATE]: {
          request: LW,
          response: QW
        },
        [DW.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: wW,
          response: jU
        }
      },
      NW = "DISPATCH";
    var zU;
    ! function(yb) {
      yb.AUTHORIZE = "AUTHORIZE", yb.AUTHENTICATE = "AUTHENTICATE", yb.GET_GUILDS = "GET_GUILDS", yb.GET_GUILD = "GET_GUILD", yb.GET_CHANNEL = "GET_CHANNEL", yb.GET_CHANNELS = "GET_CHANNELS", yb.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", yb.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", yb.SUBSCRIBE = "SUBSCRIBE", yb.UNSUBSCRIBE = "UNSUBSCRIBE", yb.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", yb.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", yb.SET_ACTIVITY = "SET_ACTIVITY", yb.GET_SKUS = "GET_SKUS", yb.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", yb.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", yb.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", yb.START_PURCHASE = "START_PURCHASE", yb.SET_CONFIG = "SET_CONFIG", yb.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", yb.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", yb.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", yb.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", yb.CAPTURE_LOG = "CAPTURE_LOG", yb.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", yb.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", yb.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", yb.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", yb.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", yb.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", yb.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(zU || (zU = {}));
    const IW = zW({
        cmd: ub(),
        data: tW(),
        evt: jW(),
        nonce: ub()
      }).passthrough(),
      xU = (aU(Object.assign(Object.assign({}, QW.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), zW({
        id: ub(),
        username: ub(),
        discriminator: ub(),
        global_name: ub().optional().nullable(),
        avatar: ub().optional().nullable(),
        avatar_decoration_data: zW({
          asset: ub(),
          sku_id: ub().optional()
        }).nullable(),
        bot: Fb(),
        flags: rW().optional().nullable(),
        premium_type: rW().optional().nullable()
      })),
      AW = zW({
        user: xU,
        nick: ub().optional().nullable(),
        roles: Nb(ub()),
        joined_at: ub(),
        deaf: Fb(),
        mute: Fb()
      }),
      dW = zW({
        id: ub(),
        name: ub().optional().nullable(),
        roles: Nb(ub()).optional().nullable(),
        user: xU.optional().nullable(),
        require_colons: Fb().optional().nullable(),
        managed: Fb().optional().nullable(),
        animated: Fb().optional().nullable(),
        available: Fb().optional().nullable()
      }),
      yh = zW({
        mute: Fb(),
        deaf: Fb(),
        self_mute: Fb(),
        self_deaf: Fb(),
        suppress: Fb()
      }),
      bh = zW({
        mute: Fb(),
        nick: ub(),
        user: xU,
        voice_state: yh,
        volume: rW()
      }),
      WU = aU({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      UU = zW({
        name: ub(),
        type: rW(),
        url: ub().optional().nullable(),
        created_at: rW().optional().nullable(),
        timestamps: zW({
          start: rW(),
          end: rW()
        }).partial().optional().nullable(),
        application_id: ub().optional().nullable(),
        details: ub().optional().nullable(),
        state: ub().optional().nullable(),
        emoji: dW.optional().nullable(),
        party: zW({
          id: ub().optional().nullable(),
          size: Nb(rW()).optional().nullable()
        }).optional().nullable(),
        assets: zW({
          large_image: ub().nullable(),
          large_text: ub().nullable(),
          small_image: ub().nullable(),
          small_text: ub().nullable()
        }).partial().optional().nullable(),
        secrets: zW({
          join: ub(),
          match: ub()
        }).partial().optional().nullable(),
        instance: Fb().optional().nullable(),
        flags: rW().optional().nullable()
      }),
      hU = zW({
        id: ub(),
        type: aU({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: ub(),
        deny: ub()
      }),
      fU = {
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
      ZU = zW({
        id: ub(),
        type: aU(fU),
        guild_id: ub().optional().nullable(),
        position: rW().optional().nullable(),
        permission_overwrites: Nb(hU).optional().nullable(),
        name: ub().optional().nullable(),
        topic: ub().optional().nullable(),
        nsfw: Fb().optional().nullable(),
        last_message_id: ub().optional().nullable(),
        bitrate: rW().optional().nullable(),
        user_limit: rW().optional().nullable(),
        rate_limit_per_user: rW().optional().nullable(),
        recipients: Nb(xU).optional().nullable(),
        icon: ub().optional().nullable(),
        owner_id: ub().optional().nullable(),
        application_id: ub().optional().nullable(),
        parent_id: ub().optional().nullable(),
        last_pin_timestamp: ub().optional().nullable()
      }),
      ch = zW({
        user: xU,
        guild_id: ub(),
        status: WU,
        activities: Nb(UU),
        client_status: zW({
          desktop: WU,
          mobile: WU,
          web: WU
        }).partial()
      }),
      PU = zW({
        id: ub(),
        name: ub(),
        color: rW(),
        hoist: Fb(),
        position: rW(),
        permissions: ub(),
        managed: Fb(),
        mentionable: Fb()
      }),
      oU = (zW({
        id: ub(),
        name: ub(),
        owner_id: ub(),
        icon: ub().nullable(),
        icon_hash: ub().optional().nullable(),
        splash: ub().nullable(),
        discovery_splash: ub().nullable(),
        owner: Fb().optional().nullable(),
        permissions: ub().optional().nullable(),
        region: ub(),
        afk_channel_id: ub().nullable(),
        afk_timeout: rW(),
        widget_enabled: Fb().optional().nullable(),
        widget_channel_id: ub().optional().nullable(),
        verification_level: rW(),
        default_message_notifications: rW(),
        explicit_content_filter: rW(),
        roles: Nb(PU),
        emojis: Nb(dW),
        features: Nb(ub()),
        mfa_level: rW(),
        application_id: ub().nullable(),
        system_channel_id: ub().nullable(),
        system_channel_flags: rW(),
        rules_channel_id: ub().nullable(),
        joined_at: ub().optional().nullable(),
        large: Fb().optional().nullable(),
        unavailable: Fb().optional().nullable(),
        member_count: rW().optional().nullable(),
        voice_states: Nb(yh).optional().nullable(),
        members: Nb(AW).optional().nullable(),
        channels: Nb(ZU).optional().nullable(),
        presences: Nb(ch).optional().nullable(),
        max_presences: rW().optional().nullable(),
        max_members: rW().optional().nullable(),
        vanity_url_code: ub().nullable(),
        description: ub().nullable(),
        banner: ub().nullable(),
        premium_tier: rW(),
        premium_subscription_count: rW().optional().nullable(),
        preferred_locale: ub(),
        public_updates_channel_id: ub().nullable(),
        max_video_channel_users: rW().optional().nullable(),
        approximate_member_count: rW().optional().nullable(),
        approximate_presence_count: rW().optional().nullable()
      }), zW({
        id: ub(),
        guild_id: ub(),
        type: rW(),
        name: ub()
      })),
      BU = zW({
        id: ub(),
        filename: ub(),
        size: rW(),
        url: ub(),
        proxy_url: ub(),
        height: rW().optional().nullable(),
        width: rW().optional().nullable()
      }),
      KU = zW({
        text: ub(),
        icon_url: ub().optional().nullable(),
        proxy_icon_url: ub().optional().nullable()
      }),
      eU = zW({
        url: ub().optional().nullable(),
        proxy_url: ub().optional().nullable(),
        height: rW().optional().nullable(),
        width: rW().optional().nullable()
      }),
      qh = eU.omit({
        proxy_url: !0
      }),
      sU = zW({
        name: ub().optional().nullable(),
        url: ub().optional().nullable()
      }),
      SU = zW({
        name: ub().optional().nullable(),
        url: ub().optional().nullable(),
        icon_url: ub().optional().nullable(),
        proxy_icon_url: ub().optional().nullable()
      }),
      EU = zW({
        name: ub(),
        value: ub(),
        inline: Fb()
      }),
      lU = zW({
        title: ub().optional().nullable(),
        type: ub().optional().nullable(),
        description: ub().optional().nullable(),
        url: ub().optional().nullable(),
        timestamp: ub().optional().nullable(),
        color: rW().optional().nullable(),
        footer: KU.optional().nullable(),
        image: eU.optional().nullable(),
        thumbnail: eU.optional().nullable(),
        video: qh.optional().nullable(),
        provider: sU.optional().nullable(),
        author: SU.optional().nullable(),
        fields: Nb(EU).optional().nullable()
      }),
      mh = zW({
        count: rW(),
        me: Fb(),
        emoji: dW
      }),
      CU = zW({
        type: rW(),
        party_id: ub().optional().nullable()
      }),
      TU = zW({
        id: ub(),
        cover_image: ub().optional().nullable(),
        description: ub(),
        icon: ub().optional().nullable(),
        name: ub()
      }),
      VU = zW({
        message_id: ub().optional().nullable(),
        channel_id: ub().optional().nullable(),
        guild_id: ub().optional().nullable()
      }),
      JU = zW({
        id: ub(),
        channel_id: ub(),
        guild_id: ub().optional().nullable(),
        author: xU.optional().nullable(),
        member: AW.optional().nullable(),
        content: ub(),
        timestamp: ub(),
        edited_timestamp: ub().optional().nullable(),
        tts: Fb(),
        mention_everyone: Fb(),
        mentions: Nb(xU),
        mention_roles: Nb(ub()),
        mention_channels: Nb(oU),
        attachments: Nb(BU),
        embeds: Nb(lU),
        reactions: Nb(mh).optional().nullable(),
        nonce: xW([ub(), rW()]).optional().nullable(),
        pinned: Fb(),
        webhook_id: ub().optional().nullable(),
        type: rW(),
        activity: CU.optional().nullable(),
        application: TU.optional().nullable(),
        message_reference: VU.optional().nullable(),
        flags: rW().optional().nullable(),
        stickers: Nb(tW()).optional().nullable(),
        referenced_message: tW().optional().nullable()
      }),
      gh = zW({
        id: ub(),
        name: ub()
      }),
      GU = zW({
        type: aU({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: rW(),
        name: ub()
      }),
      OU = zW({
        type: aU({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: Fb(),
        threshold: rW(),
        shortcut: Nb(GU),
        delay: rW()
      }),
      RU = zW({
        device_id: ub(),
        volume: rW(),
        available_devices: Nb(gh)
      }),
      vh = (zW({
        type: aU({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: ub(),
        vendor: zW({
          name: ub(),
          url: ub()
        }),
        model: zW({
          name: ub(),
          url: ub()
        }),
        related: Nb(ub()),
        echo_cancellation: Fb().optional().nullable(),
        noise_suppression: Fb().optional().nullable(),
        automatic_gain_control: Fb().optional().nullable(),
        hardware_mute: Fb().optional().nullable()
      }), zW({
        id: ub(),
        name: ub(),
        type: aU({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: zW({
          amount: rW(),
          currency: ub()
        }),
        application_id: ub(),
        flags: rW(),
        release_date: ub().nullable()
      })),
      ih = zW({
        id: ub(),
        sku_id: ub(),
        application_id: ub(),
        user_id: ub(),
        gift_code_flags: rW(),
        type: aU({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: ub().optional().nullable(),
        branches: Nb(ub()).optional().nullable(),
        starts_at: ub().optional().nullable(),
        ends_at: ub().optional().nullable(),
        parent_id: ub().optional().nullable(),
        consumed: Fb().optional().nullable(),
        deleted: Fb().optional().nullable(),
        gift_code_batch_id: ub().optional().nullable()
      }),
      MU = (aU({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), aU({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      YU = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      XU = (aU(YU), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      nU = (aU(XU), "ERROR");
    var uU;
    ! function(yb) {
      yb.READY = "READY", yb.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", yb.SPEAKING_START = "SPEAKING_START", yb.SPEAKING_STOP = "SPEAKING_STOP", yb.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", yb.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", yb.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", yb.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", yb.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", yb.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(uU || (uU = {}));
    const rh = IW.extend({
        evt: PW(uU),
        nonce: ub().nullable(),
        cmd: ZW(NW),
        data: zW({}).passthrough()
      }),
      HU = IW.extend({
        evt: ZW(nU),
        data: zW({
          code: rW(),
          message: ub().optional()
        }).passthrough(),
        cmd: PW(zU),
        nonce: ub().nullable()
      }),
      ah = rh.extend({
        evt: ub()
      }),
      FU = xW([rh, ah, HU]);
    const pU = {
      [uU.READY]: {
        payload: rh.extend({
          evt: ZW(uU.READY),
          data: zW({
            v: rW(),
            config: zW({
              cdn_host: ub().optional(),
              api_endpoint: ub(),
              environment: ub()
            }),
            user: zW({
              id: ub(),
              username: ub(),
              discriminator: ub(),
              avatar: ub().optional()
            }).optional()
          })
        })
      },
      [uU.VOICE_STATE_UPDATE]: {
        payload: rh.extend({
          evt: ZW(uU.VOICE_STATE_UPDATE),
          data: bh
        }),
        subscribeArgs: zW({
          channel_id: ub()
        })
      },
      [uU.SPEAKING_START]: {
        payload: rh.extend({
          evt: ZW(uU.SPEAKING_START),
          data: zW({
            lobby_id: ub().optional(),
            channel_id: ub().optional(),
            user_id: ub()
          })
        }),
        subscribeArgs: zW({
          lobby_id: ub().nullable().optional(),
          channel_id: ub().nullable().optional()
        })
      },
      [uU.SPEAKING_STOP]: {
        payload: rh.extend({
          evt: ZW(uU.SPEAKING_STOP),
          data: zW({
            lobby_id: ub().optional(),
            channel_id: ub().optional(),
            user_id: ub()
          })
        }),
        subscribeArgs: zW({
          lobby_id: ub().nullable().optional(),
          channel_id: ub().nullable().optional()
        })
      },
      [uU.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: rh.extend({
          evt: ZW(uU.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: zW({
            layout_mode: aU(XU)
          })
        })
      },
      [uU.ORIENTATION_UPDATE]: {
        payload: rh.extend({
          evt: ZW(uU.ORIENTATION_UPDATE),
          data: zW({
            screen_orientation: aU(YU),
            orientation: PW(uW)
          })
        })
      },
      [uU.CURRENT_USER_UPDATE]: {
        payload: rh.extend({
          evt: ZW(uU.CURRENT_USER_UPDATE),
          data: xU
        })
      },
      [uU.ENTITLEMENT_CREATE]: {
        payload: rh.extend({
          evt: ZW(uU.ENTITLEMENT_CREATE),
          data: zW({
            entitlement: ih
          })
        })
      },
      [uU.THERMAL_STATE_UPDATE]: {
        payload: rh.extend({
          evt: ZW(uU.THERMAL_STATE_UPDATE),
          data: zW({
            thermal_state: MU
          })
        })
      },
      [uU.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: rh.extend({
          evt: ZW(uU.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: zW({
            participants: jU.shape.participants
          })
        })
      }
    };
    const LU = zW({}).nullable(),
      QU = zW({
        code: ub()
      }),
      jh = zW({
        guilds: Nb(zW({
          id: ub(),
          name: ub()
        }))
      }),
      DU = zW({
        id: ub(),
        name: ub(),
        icon_url: ub().optional(),
        members: Nb(AW)
      }),
      th = zW({
        id: ub(),
        type: aU(fU),
        guild_id: ub().optional().nullable(),
        name: ub().optional().nullable(),
        topic: ub().optional().nullable(),
        bitrate: rW().optional().nullable(),
        user_limit: rW().optional().nullable(),
        position: rW().optional().nullable(),
        voice_states: Nb(bh),
        messages: Nb(JU)
      }),
      wU = zW({
        channels: Nb(ZU)
      }),
      kh = (th.nullable(), th.nullable()),
      NU = th.nullable(),
      zh = (zW({
        input: RU,
        output: RU,
        mode: OU,
        automatic_gain_control: Fb(),
        echo_cancellation: Fb(),
        noise_suppression: Fb(),
        qos: Fb(),
        silence_warning: Fb(),
        deaf: Fb(),
        mute: Fb()
      }), zW({
        evt: ub()
      })),
      IU = zW({
        shortcut: GU
      }),
      xh = UU,
      AU = zW({
        skus: Nb(vh)
      }),
      dU = zW({
        entitlements: Nb(ih)
      }),
      yf = Nb(ih).nullable(),
      bf = zW({
        use_interactive_pip: Fb()
      }),
      Wh = zW({
        locale: ub()
      }),
      Uh = zW({
        enabled: Fb()
      }),
      hh = zW({
        permissions: aW().or(ub())
      }),
      fh = zW({
        iosKeyboardResizesView: KW(Fb())
      }),
      Zh = IW.extend({
        cmd: PW(zU),
        evt: jW()
      });

    function cf(yb) {
      let {
        cmd: bb,
        data: Wy
      } = yb;
      switch (bb) {
        case zU.AUTHORIZE:
          return QU.parse(Wy);
        case zU.CAPTURE_SHORTCUT:
          return IU.parse(Wy);
        case zU.ENCOURAGE_HW_ACCELERATION:
          return Uh.parse(Wy);
        case zU.GET_CHANNEL:
          return th.parse(Wy);
        case zU.GET_CHANNELS:
          return wU.parse(Wy);
        case zU.GET_CHANNEL_PERMISSIONS:
          return hh.parse(Wy);
        case zU.GET_GUILD:
          return DU.parse(Wy);
        case zU.GET_GUILDS:
          return jh.parse(Wy);
        case zU.GET_PLATFORM_BEHAVIORS:
          return fh.parse(Wy);
        case zU.GET_CHANNEL:
          return th.parse(Wy);
        case zU.SELECT_TEXT_CHANNEL:
          return NU.parse(Wy);
        case zU.SELECT_VOICE_CHANNEL:
          return kh.parse(Wy);
        case zU.SET_ACTIVITY:
          return xh.parse(Wy);
        case zU.GET_SKUS_EMBEDDED:
          return AU.parse(Wy);
        case zU.GET_ENTITLEMENTS_EMBEDDED:
          return dU.parse(Wy);
        case zU.SET_CONFIG:
          return bf.parse(Wy);
        case zU.START_PURCHASE:
          return yf.parse(Wy);
        case zU.SUBSCRIBE:
        case zU.UNSUBSCRIBE:
          return zh.parse(Wy);
        case zU.USER_SETTINGS_GET_LOCALE:
          return Wh.parse(Wy);
        case zU.OPEN_EXTERNAL_LINK:
        case zU.SET_ORIENTATION_LOCK_STATE:
        case zU.SET_CERTIFIED_DEVICES:
        case zU.SEND_ANALYTICS_EVENT:
        case zU.OPEN_INVITE_DIALOG:
        case zU.CAPTURE_LOG:
        case zU.GET_SKUS:
        case zU.GET_ENTITLEMENTS:
          return LU.parse(Wy);
        case zU.AUTHENTICATE:
        case zU.INITIATE_IMAGE_UPLOAD:
        case zU.OPEN_SHARE_MOMENT_DIALOG:
        case zU.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: yb
          } = kU[bb];
          return yb.parse(Wy);
        default:
          ! function(yb, bb) {
            throw bb
          }(0, new Error(`Unrecognized command ${bb}`))
      }
    }
    zW({
      frame_id: ub(),
      platform: PW(rU).optional().nullable()
    }), zW({
      v: ZW(1),
      encoding: ZW("json").optional(),
      client_id: ub(),
      frame_id: ub()
    });
    const Ph = zW({
        code: rW(),
        message: ub().optional()
      }),
      oh = zW({
        evt: ub().nullable(),
        nonce: ub().nullable(),
        data: tW().nullable(),
        cmd: ub()
      }).passthrough();

    function Bh(yb) {
      const bb = oh.parse(yb);
      return null != bb.evt ? bb.evt === nU ? HU.parse(bb) : function(yb) {
        const bb = yb.evt;
        if (!(bb in uU)) throw new Error(`Unrecognized event type ${yb.evt}`);
        return pU[bb].payload.parse(yb)
      }(FU.parse(bb)) : function(yb) {
        return Object.assign(Object.assign({}, yb), {
          data: cf(yb)
        })
      }(Zh.passthrough().parse(bb))
    }

    function Kh(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const hy = IW.extend({
        cmd: ZW(bb),
        data: Wy
      });
      return async Wy => {
        const fy = await yb({
          cmd: bb,
          args: Wy,
          transfer: Uy(Wy)
        });
        return hy.parse(fy).data
      }
    }

    function eh(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const Wy = kU[yb].response,
        Uy = IW.extend({
          cmd: ZW(yb),
          data: Wy
        });
      return Wy => async hy => {
        const fy = await Wy({
          cmd: yb,
          args: hy,
          transfer: bb(hy)
        });
        return Uy.parse(fy).data
      }
    }
    const qf = eh(DW.AUTHENTICATE),
      sh = yb => Kh(yb, zU.AUTHORIZE, QU),
      Sh = yb => Kh(yb, zU.CAPTURE_LOG, LU),
      Eh = yb => Kh(yb, zU.ENCOURAGE_HW_ACCELERATION, Uh),
      lh = yb => Kh(yb, zU.GET_ENTITLEMENTS_EMBEDDED, dU),
      mf = yb => Kh(yb, zU.GET_SKUS_EMBEDDED, AU),
      Ch = yb => Kh(yb, zU.GET_CHANNEL_PERMISSIONS, hh),
      Th = yb => Kh(yb, zU.GET_PLATFORM_BEHAVIORS, fh),
      Vh = yb => Kh(yb, zU.OPEN_EXTERNAL_LINK, LU),
      Jh = yb => Kh(yb, zU.OPEN_INVITE_DIALOG, LU),
      gf = eh(DW.OPEN_SHARE_MOMENT_DIALOG);
    UU.cU({
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
      type: UU.shape.type.optional(),
      instance: UU.shape.instance.optional()
    }).nullable();
    const Gh = yb => Kh(yb, zU.SET_ACTIVITY, xh),
      Oh = yb => Kh(yb, zU.SET_CONFIG, bf);
    const Rh = yb => ({
        lock_state: yb.lock_state,
        picture_in_picture_lock_state: yb.picture_in_picture_lock_state
      }),
      vf = yb => function(yb) {
        let {
          sendCommand: bb,
          cmd: Wy,
          response: Uy,
          fallbackTransform: hy,
          transferTransform: fy = () => {}
        } = yb;
        const Zy = IW.extend({
          cmd: ZW(Wy),
          data: Uy
        });
        return async yb => {
          try {
            const Uy = await bb({
              cmd: Wy,
              args: yb,
              transfer: fy(yb)
            });
            return Zy.parse(Uy).data
          } catch (Uy) {
            if (Uy.code === nW.INVALID_PAYLOAD) {
              const Uy = hy(yb),
                cb = await bb({
                  cmd: Wy,
                  args: Uy,
                  transfer: fy(Uy)
                });
              return Zy.parse(cb).data
            }
            throw Uy
          }
        }
      }({
        sendCommand: yb,
        cmd: zU.SET_ORIENTATION_LOCK_STATE,
        response: LU,
        fallbackTransform: Rh
      }),
      Mh = yb => Kh(yb, zU.START_PURCHASE, yf),
      Yh = yb => Kh(yb, zU.USER_SETTINGS_GET_LOCALE, Wh),
      Xh = eh(DW.INITIATE_IMAGE_UPLOAD),
      nh = yb => Kh(yb, zU.GET_CHANNEL, th),
      uh = eh(DW.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var rf = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function Hh(yb) {
      return "string" === typeof yb && rf.test(yb)
    }
    for (var af = [], Fh = 0; Fh < 256; ++Fh) af.push((Fh + 256).toString(16).substr(1));

    function ph(yb) {
      var bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Wy = (af[yb[bb + 0]] + af[yb[bb + 1]] + af[yb[bb + 2]] + af[yb[bb + 3]] + "-" + af[yb[bb + 4]] + af[yb[bb + 5]] + "-" + af[yb[bb + 6]] + af[yb[bb + 7]] + "-" + af[yb[bb + 8]] + af[yb[bb + 9]] + "-" + af[yb[bb + 10]] + af[yb[bb + 11]] + af[yb[bb + 12]] + af[yb[bb + 13]] + af[yb[bb + 14]] + af[yb[bb + 15]]).toLowerCase();
      if (!Hh(Wy)) throw TypeError("Stringified UUID is invalid");
      return Wy
    }
    var Lh;

    function Qh(yb, bb, Wy) {
      function Uy(yb, Uy, hy, fy) {
        if ("string" === typeof yb && (yb = function(yb) {
            yb = unescape(encodeURIComponent(yb));
            for (var bb = [], Wy = 0; Wy < yb.length; ++Wy) bb.push(yb.charCodeAt(Wy));
            return bb
          }(yb)), "string" === typeof Uy && (Uy = function(yb) {
            if (!Hh(yb)) throw TypeError("Invalid UUID");
            var bb, Wy = new Uint8Array(16);
            return Wy[0] = (bb = parseInt(yb.slice(0, 8), 16)) >>> 24, Wy[1] = bb >>> 16 & 255, Wy[2] = bb >>> 8 & 255, Wy[3] = 255 & bb, Wy[4] = (bb = parseInt(yb.slice(9, 13), 16)) >>> 8, Wy[5] = 255 & bb, Wy[6] = (bb = parseInt(yb.slice(14, 18), 16)) >>> 8, Wy[7] = 255 & bb, Wy[8] = (bb = parseInt(yb.slice(19, 23), 16)) >>> 8, Wy[9] = 255 & bb, Wy[10] = (bb = parseInt(yb.slice(24, 36), 16)) / 1099511627776 & 255, Wy[11] = bb / 4294967296 & 255, Wy[12] = bb >>> 24 & 255, Wy[13] = bb >>> 16 & 255, Wy[14] = bb >>> 8 & 255, Wy[15] = 255 & bb, Wy
          }(Uy)), 16 !== Uy.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var Zy = new Uint8Array(16 + yb.length);
        if (Zy.set(Uy), Zy.set(yb, Uy.length), (Zy = Wy(Zy))[6] = 15 & Zy[6] | bb, Zy[8] = 63 & Zy[8] | 128, hy) {
          fy = fy || 0;
          for (var cb = 0; cb < 16; ++cb) hy[fy + cb] = Zy[cb];
          return hy
        }
        return ph(Zy)
      }
      try {
        Uy.name = yb
      } catch (hy) {}
      return Uy.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", Uy.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", Uy
    }

    function jf(yb) {
      return 14 + (yb + 64 >>> 9 << 4) + 1
    }

    function Dh(yb, bb) {
      var Wy = (65535 & yb) + (65535 & bb);
      return (yb >> 16) + (bb >> 16) + (Wy >> 16) << 16 | 65535 & Wy
    }

    function tf(yb, bb, Wy, Uy, hy, fy) {
      return Dh((Zy = Dh(Dh(bb, yb), Dh(Uy, fy))) << (cb = hy) | Zy >>> 32 - cb, Wy);
      var Zy, cb
    }

    function wh(yb, bb, Wy, Uy, hy, fy, Zy) {
      return tf(bb & Wy | ~bb & Uy, yb, bb, hy, fy, Zy)
    }

    function kf(yb, bb, Wy, Uy, hy, fy, Zy) {
      return tf(bb & Uy | Wy & ~Uy, yb, bb, hy, fy, Zy)
    }

    function Nh(yb, bb, Wy, Uy, hy, fy, Zy) {
      return tf(bb ^ Wy ^ Uy, yb, bb, hy, fy, Zy)
    }

    function zf(yb, bb, Wy, Uy, hy, fy, Zy) {
      return tf(Wy ^ (bb | ~Uy), yb, bb, hy, fy, Zy)
    }
    Qh("v3", 48, (function(yb) {
      if ("string" === typeof yb) {
        var bb = unescape(encodeURIComponent(yb));
        yb = new Uint8Array(bb.length);
        for (var Wy = 0; Wy < bb.length; ++Wy) yb[Wy] = bb.charCodeAt(Wy)
      }
      return function(yb) {
        for (var bb = [], Wy = 32 * yb.length, Uy = "0123456789abcdef", hy = 0; hy < Wy; hy += 8) {
          var fy = yb[hy >> 5] >>> hy % 32 & 255,
            Zy = parseInt(Uy.charAt(fy >>> 4 & 15) + Uy.charAt(15 & fy), 16);
          bb.push(Zy)
        }
        return bb
      }(function(yb, bb) {
        yb[bb >> 5] |= 128 << bb % 32, yb[jf(bb) - 1] = bb;
        for (var Wy = 1732584193, Uy = -271733879, hy = -1732584194, fy = 271733878, Zy = 0; Zy < yb.length; Zy += 16) {
          var cb = Wy,
            Py = Uy,
            oy = hy,
            By = fy;
          Wy = wh(Wy, Uy, hy, fy, yb[Zy], 7, -680876936), fy = wh(fy, Wy, Uy, hy, yb[Zy + 1], 12, -389564586), hy = wh(hy, fy, Wy, Uy, yb[Zy + 2], 17, 606105819), Uy = wh(Uy, hy, fy, Wy, yb[Zy + 3], 22, -1044525330), Wy = wh(Wy, Uy, hy, fy, yb[Zy + 4], 7, -176418897), fy = wh(fy, Wy, Uy, hy, yb[Zy + 5], 12, 1200080426), hy = wh(hy, fy, Wy, Uy, yb[Zy + 6], 17, -1473231341), Uy = wh(Uy, hy, fy, Wy, yb[Zy + 7], 22, -45705983), Wy = wh(Wy, Uy, hy, fy, yb[Zy + 8], 7, 1770035416), fy = wh(fy, Wy, Uy, hy, yb[Zy + 9], 12, -1958414417), hy = wh(hy, fy, Wy, Uy, yb[Zy + 10], 17, -42063), Uy = wh(Uy, hy, fy, Wy, yb[Zy + 11], 22, -1990404162), Wy = wh(Wy, Uy, hy, fy, yb[Zy + 12], 7, 1804603682), fy = wh(fy, Wy, Uy, hy, yb[Zy + 13], 12, -40341101), hy = wh(hy, fy, Wy, Uy, yb[Zy + 14], 17, -1502002290), Wy = kf(Wy, Uy = wh(Uy, hy, fy, Wy, yb[Zy + 15], 22, 1236535329), hy, fy, yb[Zy + 1], 5, -165796510), fy = kf(fy, Wy, Uy, hy, yb[Zy + 6], 9, -1069501632), hy = kf(hy, fy, Wy, Uy, yb[Zy + 11], 14, 643717713), Uy = kf(Uy, hy, fy, Wy, yb[Zy], 20, -373897302), Wy = kf(Wy, Uy, hy, fy, yb[Zy + 5], 5, -701558691), fy = kf(fy, Wy, Uy, hy, yb[Zy + 10], 9, 38016083), hy = kf(hy, fy, Wy, Uy, yb[Zy + 15], 14, -660478335), Uy = kf(Uy, hy, fy, Wy, yb[Zy + 4], 20, -405537848), Wy = kf(Wy, Uy, hy, fy, yb[Zy + 9], 5, 568446438), fy = kf(fy, Wy, Uy, hy, yb[Zy + 14], 9, -1019803690), hy = kf(hy, fy, Wy, Uy, yb[Zy + 3], 14, -187363961), Uy = kf(Uy, hy, fy, Wy, yb[Zy + 8], 20, 1163531501), Wy = kf(Wy, Uy, hy, fy, yb[Zy + 13], 5, -1444681467), fy = kf(fy, Wy, Uy, hy, yb[Zy + 2], 9, -51403784), hy = kf(hy, fy, Wy, Uy, yb[Zy + 7], 14, 1735328473), Wy = Nh(Wy, Uy = kf(Uy, hy, fy, Wy, yb[Zy + 12], 20, -1926607734), hy, fy, yb[Zy + 5], 4, -378558), fy = Nh(fy, Wy, Uy, hy, yb[Zy + 8], 11, -2022574463), hy = Nh(hy, fy, Wy, Uy, yb[Zy + 11], 16, 1839030562), Uy = Nh(Uy, hy, fy, Wy, yb[Zy + 14], 23, -35309556), Wy = Nh(Wy, Uy, hy, fy, yb[Zy + 1], 4, -1530992060), fy = Nh(fy, Wy, Uy, hy, yb[Zy + 4], 11, 1272893353), hy = Nh(hy, fy, Wy, Uy, yb[Zy + 7], 16, -155497632), Uy = Nh(Uy, hy, fy, Wy, yb[Zy + 10], 23, -1094730640), Wy = Nh(Wy, Uy, hy, fy, yb[Zy + 13], 4, 681279174), fy = Nh(fy, Wy, Uy, hy, yb[Zy], 11, -358537222), hy = Nh(hy, fy, Wy, Uy, yb[Zy + 3], 16, -722521979), Uy = Nh(Uy, hy, fy, Wy, yb[Zy + 6], 23, 76029189), Wy = Nh(Wy, Uy, hy, fy, yb[Zy + 9], 4, -640364487), fy = Nh(fy, Wy, Uy, hy, yb[Zy + 12], 11, -421815835), hy = Nh(hy, fy, Wy, Uy, yb[Zy + 15], 16, 530742520), Wy = zf(Wy, Uy = Nh(Uy, hy, fy, Wy, yb[Zy + 2], 23, -995338651), hy, fy, yb[Zy], 6, -198630844), fy = zf(fy, Wy, Uy, hy, yb[Zy + 7], 10, 1126891415), hy = zf(hy, fy, Wy, Uy, yb[Zy + 14], 15, -1416354905), Uy = zf(Uy, hy, fy, Wy, yb[Zy + 5], 21, -57434055), Wy = zf(Wy, Uy, hy, fy, yb[Zy + 12], 6, 1700485571), fy = zf(fy, Wy, Uy, hy, yb[Zy + 3], 10, -1894986606), hy = zf(hy, fy, Wy, Uy, yb[Zy + 10], 15, -1051523), Uy = zf(Uy, hy, fy, Wy, yb[Zy + 1], 21, -2054922799), Wy = zf(Wy, Uy, hy, fy, yb[Zy + 8], 6, 1873313359), fy = zf(fy, Wy, Uy, hy, yb[Zy + 15], 10, -30611744), hy = zf(hy, fy, Wy, Uy, yb[Zy + 6], 15, -1560198380), Uy = zf(Uy, hy, fy, Wy, yb[Zy + 13], 21, 1309151649), Wy = zf(Wy, Uy, hy, fy, yb[Zy + 4], 6, -145523070), fy = zf(fy, Wy, Uy, hy, yb[Zy + 11], 10, -1120210379), hy = zf(hy, fy, Wy, Uy, yb[Zy + 2], 15, 718787259), Uy = zf(Uy, hy, fy, Wy, yb[Zy + 9], 21, -343485551), Wy = Dh(Wy, cb), Uy = Dh(Uy, Py), hy = Dh(hy, oy), fy = Dh(fy, By)
        }
        return [Wy, Uy, hy, fy]
      }(function(yb) {
        if (0 === yb.length) return [];
        for (var bb = 8 * yb.length, Wy = new Uint32Array(jf(bb)), Uy = 0; Uy < bb; Uy += 8) Wy[Uy >> 5] |= (255 & yb[Uy / 8]) << Uy % 32;
        return Wy
      }(yb), 8 * yb.length))
    }));
    var Ih = new Uint8Array(16);

    function xf() {
      if (!Lh && !(Lh = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return Lh(Ih)
    }

    function Ah(yb, bb, Wy) {
      var Uy = (yb = yb || {}).random || (yb.rng || xf)();
      if (Uy[6] = 15 & Uy[6] | 64, Uy[8] = 63 & Uy[8] | 128, bb) {
        Wy = Wy || 0;
        for (var hy = 0; hy < 16; ++hy) bb[Wy + hy] = Uy[hy];
        return bb
      }
      return ph(Uy)
    }

    function dh(yb, bb, Wy, Uy) {
      switch (yb) {
        case 0:
          return bb & Wy ^ ~bb & Uy;
        case 1:
        case 3:
          return bb ^ Wy ^ Uy;
        case 2:
          return bb & Wy ^ bb & Uy ^ Wy & Uy
      }
    }

    function yZ(yb, bb) {
      return yb << bb | yb >>> 32 - bb
    }
    Qh("v5", 80, (function(yb) {
      var bb = [1518500249, 1859775393, 2400959708, 3395469782],
        Wy = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof yb) {
        var Uy = unescape(encodeURIComponent(yb));
        yb = [];
        for (var hy = 0; hy < Uy.length; ++hy) yb.push(Uy.charCodeAt(hy))
      } else Array.isArray(yb) || (yb = Array.prototype.slice.call(yb));
      yb.push(128);
      for (var fy = yb.length / 4 + 2, Zy = Math.ceil(fy / 16), cb = new Array(Zy), Py = 0; Py < Zy; ++Py) {
        for (var oy = new Uint32Array(16), By = 0; By < 16; ++By) oy[By] = yb[64 * Py + 4 * By] << 24 | yb[64 * Py + 4 * By + 1] << 16 | yb[64 * Py + 4 * By + 2] << 8 | yb[64 * Py + 4 * By + 3];
        cb[Py] = oy
      }
      cb[Zy - 1][14] = 8 * (yb.length - 1) / Math.pow(2, 32), cb[Zy - 1][14] = Math.floor(cb[Zy - 1][14]), cb[Zy - 1][15] = 8 * (yb.length - 1) & 4294967295;
      for (var Ky = 0; Ky < Zy; ++Ky) {
        for (var ey = new Uint32Array(80), qb = 0; qb < 16; ++qb) ey[qb] = cb[Ky][qb];
        for (var sy = 16; sy < 80; ++sy) ey[sy] = yZ(ey[sy - 3] ^ ey[sy - 8] ^ ey[sy - 14] ^ ey[sy - 16], 1);
        for (var Sy = Wy[0], Ey = Wy[1], ly = Wy[2], mb = Wy[3], Cy = Wy[4], Ty = 0; Ty < 80; ++Ty) {
          var Vy = Math.floor(Ty / 20),
            Jy = yZ(Sy, 5) + dh(Vy, Ey, ly, mb) + Cy + bb[Vy] + ey[Ty] >>> 0;
          Cy = mb, mb = ly, ly = yZ(Ey, 30) >>> 0, Ey = Sy, Sy = Jy
        }
        Wy[0] = Wy[0] + Sy >>> 0, Wy[1] = Wy[1] + Ey >>> 0, Wy[2] = Wy[2] + ly >>> 0, Wy[3] = Wy[3] + mb >>> 0, Wy[4] = Wy[4] + Cy >>> 0
      }
      return [Wy[0] >> 24 & 255, Wy[0] >> 16 & 255, Wy[0] >> 8 & 255, 255 & Wy[0], Wy[1] >> 24 & 255, Wy[1] >> 16 & 255, Wy[1] >> 8 & 255, 255 & Wy[1], Wy[2] >> 24 & 255, Wy[2] >> 16 & 255, Wy[2] >> 8 & 255, 255 & Wy[2], Wy[3] >> 24 & 255, Wy[3] >> 16 & 255, Wy[3] >> 8 & 255, 255 & Wy[3], Wy[4] >> 24 & 255, Wy[4] >> 16 & 255, Wy[4] >> 8 & 255, 255 & Wy[4]]
    }));
    class bZ extends Error {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(bb), this.code = yb, this.message = bb, this.name = "Discord SDK Error"
      }
    }
    const Wf = ["log", "warn", "debug", "info", "error"];
    var Uf;
    ! function(yb) {
      yb[yb.HANDSHAKE = 0] = "HANDSHAKE", yb[yb.FRAME = 1] = "FRAME", yb[yb.CLOSE = 2] = "CLOSE", yb[yb.HELLO = 3] = "HELLO"
    }(Uf || (Uf = {}));
    const hf = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class ff {
      getTransfer(yb) {
        var bb;
        switch (yb.cmd) {
          case zU.SUBSCRIBE:
          case zU.UNSUBSCRIBE:
            return;
          default:
            return null !== (bb = yb.transfer) && void 0 !== bb ? bb : void 0
        }
      }
      constructor(yb, bb) {
        var Wy;
        if (this.eventBus = new oy, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = yb => {
            var bb;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const Wy = Ah();
            null === (bb = this.source) || void 0 === bb || bb.postMessage([Uf.FRAME, Object.assign(Object.assign({}, yb), {
              nonce: Wy
            })], this.sourceOrigin, this.getTransfer(yb));
            return new Promise(((yb, bb) => {
              this.pendingCommands.set(Wy, {
                resolve: yb,
                reject: bb
              })
            }))
          }, this.commands = (Wy = this.sendCommand, {
            authenticate: qf(Wy),
            authorize: sh(Wy),
            captureLog: Sh(Wy),
            encourageHardwareAcceleration: Eh(Wy),
            getChannel: nh(Wy),
            getChannelPermissions: Ch(Wy),
            getEntitlements: lh(Wy),
            getPlatformBehaviors: Th(Wy),
            getSkus: mf(Wy),
            openExternalLink: Vh(Wy),
            openInviteDialog: Jh(Wy),
            openShareMomentDialog: gf(Wy),
            setActivity: Gh(Wy),
            setConfig: Oh(Wy),
            setOrientationLockState: vf(Wy),
            startPurchase: Mh(Wy),
            userSettingsGetLocale: Yh(Wy),
            initiateImageUpload: Xh(Wy),
            getInstanceConnectedParticipants: uh(Wy)
          }), this.handleMessage = yb => {
            if (!hf.has(yb.origin)) return;
            const bb = yb.data;
            if (!Array.isArray(bb)) return;
            const [Wy, Uy] = bb;
            switch (Wy) {
              case Uf.HELLO:
                return;
              case Uf.CLOSE:
                return this.handleClose(Uy);
              case Uf.HANDSHAKE:
                return this.handleHandshake();
              case Uf.FRAME:
                return this.handleFrame(Uy);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = yb, this.configuration = null !== bb && void 0 !== bb ? bb : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = rU.DESKTOP, this.guildId = null, void(this.channelId = null);
        const Uy = new URLSearchParams(this._getSearch()),
          hy = Uy.get("frame_id");
        if (!hy) throw new Error("frame_id query param is not defined");
        this.frameId = hy;
        const fy = Uy.get("instance_id");
        if (!fy) throw new Error("instance_id query param is not defined");
        this.instanceId = fy;
        const Zy = Uy.get("platform");
        if (!Zy) throw new Error("platform query param is not defined");
        if (Zy !== rU.DESKTOP && Zy !== rU.MOBILE) throw new Error(`Invalid query param "platform" of "${Zy}". Valid values are "${rU.DESKTOP}" or "${rU.MOBILE}"`);
        this.platform = Zy, this.guildId = Uy.get("guild_id"), this.channelId = Uy.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var yb;
          return [null !== (yb = window.parent.opener) && void 0 !== yb ? yb : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(yb, bb) {
        var Wy;
        window.removeEventListener("message", this.handleMessage);
        const Uy = Ah();
        null === (Wy = this.source) || void 0 === Wy || Wy.postMessage([Uf.CLOSE, {
          code: yb,
          message: bb,
          nonce: Uy
        }], this.sourceOrigin)
      }
      async subscribe(yb, bb) {
        for (var Wy = arguments.length, Uy = new Array(Wy > 2 ? Wy - 2 : 0), hy = 2; hy < Wy; hy++) Uy[hy - 2] = arguments[hy];
        const [fy] = Uy, Zy = this.eventBus.listenerCount(yb), cb = this.eventBus.on(yb, bb);
        return Object.values(uU).includes(yb) && yb !== uU.READY && 0 === Zy && await this.sendCommand({
          cmd: zU.SUBSCRIBE,
          args: fy,
          evt: yb
        }), cb
      }
      async unsubscribe(yb, bb) {
        for (var Wy = arguments.length, Uy = new Array(Wy > 2 ? Wy - 2 : 0), hy = 2; hy < Wy; hy++) Uy[hy - 2] = arguments[hy];
        const [fy] = Uy;
        return yb !== uU.READY && 1 === this.eventBus.listenerCount(yb) && await this.sendCommand({
          cmd: zU.UNSUBSCRIBE,
          evt: yb,
          args: fy
        }), this.eventBus.off(yb, bb)
      }
      async ready() {
        this.isReady || await new Promise((yb => {
          this.eventBus.once(uU.READY, yb)
        }))
      }
      handshake() {
        var yb;
        null === (yb = this.source) || void 0 === yb || yb.postMessage([Uf.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(uU.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const yb = (yb, bb) => {
          this.commands.captureLog({
            level: yb,
            message: bb
          })
        };
        Wf.forEach((bb => {
          ! function(yb, bb, Wy) {
            const Uy = yb[bb],
              hy = yb;
            Uy && (yb[bb] = function() {
              const yb = [].slice.call(arguments),
                fy = "" + yb.join(" ");
              Wy(bb, fy), Uy.apply(hy, yb)
            })
          }(console, bb, yb)
        }))
      }
      handleClose(yb) {
        Ph.parse(yb)
      }
      handleHandshake() {}
      handleFrame(yb) {
        var bb, Wy;
        let Uy;
        try {
          Uy = Bh(yb)
        } catch (hy) {
          return console.error("Failed to parse", yb), void console.error(hy)
        }
        if ("DISPATCH" === Uy.cmd) this.eventBus.emit(Uy.evt, Uy.data);
        else {
          if (Uy.evt === nU) {
            if (null != Uy.nonce) return null === (bb = this.pendingCommands.get(Uy.nonce)) || void 0 === bb || bb.reject(Uy.data), void this.pendingCommands.delete(Uy.nonce);
            this.eventBus.emit("error", new bZ(Uy.data.code, Uy.data.message))
          }
          if (null == Uy.nonce) return void console.error("Missing nonce", yb);
          null === (Wy = this.pendingCommands.get(Uy.nonce)) || void 0 === Wy || Wy.resolve(Uy), this.pendingCommands.delete(Uy.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var Zf, cZ = 1e9,
      Pf = !0,
      of = "[DecimalError] ",
      Bf = of + "Invalid argument: ",
      Kf = of + "Exponent out of range: ",
      ef = Math.floor,
      qZ = Math.pow,
      sf = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      Sf = 1e7,
      Ef = 9007199254740991,
      lf = ef(1286742750677284.5),
      mZ = {};

    function Cf(yb, bb) {
      var Wy, Uy, hy, fy, Zy, cb, Py, oy, By = yb.constructor,
        Ky = By.precision;
      if (!yb.s || !bb.s) return bb.s || (bb = new By(yb)), Pf ? Mf(bb, Ky) : bb;
      if (Py = yb.d, oy = bb.d, Zy = yb.e, hy = bb.e, Py = Py.slice(), fy = Zy - hy) {
        for (fy < 0 ? (Uy = Py, fy = -fy, cb = oy.length) : (Uy = oy, hy = Zy, cb = Py.length), fy > (cb = (Zy = Math.ceil(Ky / 7)) > cb ? Zy + 1 : cb + 1) && (fy = cb, Uy.length = 1), Uy.reverse(); fy--;) Uy.push(0);
        Uy.reverse()
      }
      for ((cb = Py.length) - (fy = oy.length) < 0 && (fy = cb, Uy = oy, oy = Py, Py = Uy), Wy = 0; fy;) Wy = (Py[--fy] = Py[fy] + oy[fy] + Wy) / Sf | 0, Py[fy] %= Sf;
      for (Wy && (Py.unshift(Wy), ++hy), cb = Py.length; 0 == Py[--cb];) Py.pop();
      return bb.d = Py, bb.e = hy, Pf ? Mf(bb, Ky) : bb
    }

    function Tf(yb, bb, Wy) {
      if (yb !== ~~yb || yb < bb || yb > Wy) throw Error(Bf + yb)
    }

    function Vf(yb) {
      var bb, Wy, Uy, hy = yb.length - 1,
        fy = "",
        Zy = yb[0];
      if (hy > 0) {
        for (fy += Zy, bb = 1; bb < hy; bb++)(Wy = 7 - (Uy = yb[bb] + "").length) && (fy += Rf(Wy)), fy += Uy;
        (Wy = 7 - (Uy = (Zy = yb[bb]) + "").length) && (fy += Rf(Wy))
      } else if (0 === Zy) return "0";
      for (; Zy % 10 === 0;) Zy /= 10;
      return fy + Zy
    }
    mZ.absoluteValue = mZ.abs = function() {
      var yb = new this.constructor(this);
      return yb.s && (yb.s = 1), yb
    }, mZ.comparedTo = mZ.cmp = function(yb) {
      var bb, Wy, Uy, hy, fy = this;
      if (yb = new fy.constructor(yb), fy.s !== yb.s) return fy.s || -yb.s;
      if (fy.e !== yb.e) return fy.e > yb.e ^ fy.s < 0 ? 1 : -1;
      for (bb = 0, Wy = (Uy = fy.d.length) < (hy = yb.d.length) ? Uy : hy; bb < Wy; ++bb)
        if (fy.d[bb] !== yb.d[bb]) return fy.d[bb] > yb.d[bb] ^ fy.s < 0 ? 1 : -1;
      return Uy === hy ? 0 : Uy > hy ^ fy.s < 0 ? 1 : -1
    }, mZ.decimalPlaces = mZ.dp = function() {
      var yb = this,
        bb = yb.d.length - 1,
        Wy = 7 * (bb - yb.e);
      if (bb = yb.d[bb])
        for (; bb % 10 == 0; bb /= 10) Wy--;
      return Wy < 0 ? 0 : Wy
    }, mZ.dividedBy = mZ.div = function(yb) {
      return Jf(this, new this.constructor(yb))
    }, mZ.dividedToIntegerBy = mZ.idiv = function(yb) {
      var bb = this.constructor;
      return Mf(Jf(this, new bb(yb), 0, 1), bb.precision)
    }, mZ.equals = mZ.eq = function(yb) {
      return !this.cmp(yb)
    }, mZ.exponent = function() {
      return Gf(this)
    }, mZ.greaterThan = mZ.gt = function(yb) {
      return this.cmp(yb) > 0
    }, mZ.greaterThanOrEqualTo = mZ.gte = function(yb) {
      return this.cmp(yb) >= 0
    }, mZ.isInteger = mZ.isint = function() {
      return this.e > this.d.length - 2
    }, mZ.isNegative = mZ.isneg = function() {
      return this.s < 0
    }, mZ.isPositive = mZ.ispos = function() {
      return this.s > 0
    }, mZ.isZero = function() {
      return 0 === this.s
    }, mZ.lessThan = mZ.lt = function(yb) {
      return this.cmp(yb) < 0
    }, mZ.lessThanOrEqualTo = mZ.lte = function(yb) {
      return this.cmp(yb) < 1
    }, mZ.logarithm = mZ.log = function(yb) {
      var bb, Wy = this,
        Uy = Wy.constructor,
        hy = Uy.precision,
        fy = hy + 5;
      if (void 0 === yb) yb = new Uy(10);
      else if ((yb = new Uy(yb)).s < 1 || yb.eq(Zf)) throw Error(of + "NaN");
      if (Wy.s < 1) throw Error(of + (Wy.s ? "NaN" : "-Infinity"));
      return Wy.eq(Zf) ? new Uy(0) : (Pf = !1, bb = Jf(vZ(Wy, fy), vZ(yb, fy), fy), Pf = !0, Mf(bb, hy))
    }, mZ.minus = mZ.sub = function(yb) {
      var bb = this;
      return yb = new bb.constructor(yb), bb.s == yb.s ? Yf(bb, yb) : Cf(bb, (yb.s = -yb.s, yb))
    }, mZ.modulo = mZ.mod = function(yb) {
      var bb, Wy = this,
        Uy = Wy.constructor,
        hy = Uy.precision;
      if (!(yb = new Uy(yb)).s) throw Error(of + "NaN");
      return Wy.s ? (Pf = !1, bb = Jf(Wy, yb, 0, 1).times(yb), Pf = !0, Wy.minus(bb)) : Mf(new Uy(Wy), hy)
    }, mZ.naturalExponential = mZ.exp = function() {
      return gZ(this)
    }, mZ.naturalLogarithm = mZ.ln = function() {
      return vZ(this)
    }, mZ.negated = mZ.neg = function() {
      var yb = new this.constructor(this);
      return yb.s = -yb.s || 0, yb
    }, mZ.plus = mZ.add = function(yb) {
      var bb = this;
      return yb = new bb.constructor(yb), bb.s == yb.s ? Cf(bb, yb) : Yf(bb, (yb.s = -yb.s, yb))
    }, mZ.precision = mZ.sd = function(yb) {
      var bb, Wy, Uy, hy = this;
      if (void 0 !== yb && yb !== !!yb && 1 !== yb && 0 !== yb) throw Error(Bf + yb);
      if (bb = Gf(hy) + 1, Wy = 7 * (Uy = hy.d.length - 1) + 1, Uy = hy.d[Uy]) {
        for (; Uy % 10 == 0; Uy /= 10) Wy--;
        for (Uy = hy.d[0]; Uy >= 10; Uy /= 10) Wy++
      }
      return yb && bb > Wy ? bb : Wy
    }, mZ.squareRoot = mZ.sqrt = function() {
      var yb, bb, Wy, Uy, hy, fy, Zy, cb = this,
        Py = cb.constructor;
      if (cb.s < 1) {
        if (!cb.s) return new Py(0);
        throw Error(of + "NaN")
      }
      for (yb = Gf(cb), Pf = !1, 0 == (hy = Math.sqrt(+cb)) || hy == 1 / 0 ? (((bb = Vf(cb.d)).length + yb) % 2 == 0 && (bb += "0"), hy = Math.sqrt(bb), yb = ef((yb + 1) / 2) - (yb < 0 || yb % 2), Uy = new Py(bb = hy == 1 / 0 ? "1e" + yb : (bb = hy.toExponential()).slice(0, bb.indexOf("e") + 1) + yb)) : Uy = new Py(hy.toString()), hy = Zy = (Wy = Py.precision) + 3;;)
        if (Uy = (fy = Uy).plus(Jf(cb, fy, Zy + 2)).times(.5), Vf(fy.d).slice(0, Zy) === (bb = Vf(Uy.d)).slice(0, Zy)) {
          if (bb = bb.slice(Zy - 3, Zy + 1), hy == Zy && "4999" == bb) {
            if (Mf(fy, Wy + 1, 0), fy.times(fy).eq(cb)) {
              Uy = fy;
              break
            }
          } else if ("9999" != bb) break;
          Zy += 4
        } return Pf = !0, Mf(Uy, Wy)
    }, mZ.times = mZ.mul = function(yb) {
      var bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By = this,
        Ky = By.constructor,
        ey = By.d,
        qb = (yb = new Ky(yb)).d;
      if (!By.s || !yb.s) return new Ky(0);
      for (yb.s *= By.s, Wy = By.e + yb.e, (Py = ey.length) < (oy = qb.length) && (fy = ey, ey = qb, qb = fy, Zy = Py, Py = oy, oy = Zy), fy = [], Uy = Zy = Py + oy; Uy--;) fy.push(0);
      for (Uy = oy; --Uy >= 0;) {
        for (bb = 0, hy = Py + Uy; hy > Uy;) cb = fy[hy] + qb[Uy] * ey[hy - Uy - 1] + bb, fy[hy--] = cb % Sf | 0, bb = cb / Sf | 0;
        fy[hy] = (fy[hy] + bb) % Sf | 0
      }
      for (; !fy[--Zy];) fy.pop();
      return bb ? ++Wy : fy.shift(), yb.d = fy, yb.e = Wy, Pf ? Mf(yb, Ky.precision) : yb
    }, mZ.toDecimalPlaces = mZ.todp = function(yb, bb) {
      var Wy = this,
        Uy = Wy.constructor;
      return Wy = new Uy(Wy), void 0 === yb ? Wy : (Tf(yb, 0, cZ), void 0 === bb ? bb = Uy.rounding : Tf(bb, 0, 8), Mf(Wy, yb + Gf(Wy) + 1, bb))
    }, mZ.toExponential = function(yb, bb) {
      var Wy, Uy = this,
        hy = Uy.constructor;
      return void 0 === yb ? Wy = Xf(Uy, !0) : (Tf(yb, 0, cZ), void 0 === bb ? bb = hy.rounding : Tf(bb, 0, 8), Wy = Xf(Uy = Mf(new hy(Uy), yb + 1, bb), !0, yb + 1)), Wy
    }, mZ.toFixed = function(yb, bb) {
      var Wy, Uy, hy = this,
        fy = hy.constructor;
      return void 0 === yb ? Xf(hy) : (Tf(yb, 0, cZ), void 0 === bb ? bb = fy.rounding : Tf(bb, 0, 8), Wy = Xf((Uy = Mf(new fy(hy), yb + Gf(hy) + 1, bb)).abs(), !1, yb + Gf(Uy) + 1), hy.isneg() && !hy.isZero() ? "-" + Wy : Wy)
    }, mZ.toInteger = mZ.toint = function() {
      var yb = this,
        bb = yb.constructor;
      return Mf(new bb(yb), Gf(yb) + 1, bb.rounding)
    }, mZ.toNumber = function() {
      return +this
    }, mZ.toPower = mZ.pow = function(yb) {
      var bb, Wy, Uy, hy, fy, Zy, cb = this,
        Py = cb.constructor,
        oy = +(yb = new Py(yb));
      if (!yb.s) return new Py(Zf);
      if (!(cb = new Py(cb)).s) {
        if (yb.s < 1) throw Error(of + "Infinity");
        return cb
      }
      if (cb.eq(Zf)) return cb;
      if (Uy = Py.precision, yb.eq(Zf)) return Mf(cb, Uy);
      if (Zy = (bb = yb.e) >= (Wy = yb.d.length - 1), fy = cb.s, Zy) {
        if ((Wy = oy < 0 ? -oy : oy) <= Ef) {
          for (hy = new Py(Zf), bb = Math.ceil(Uy / 7 + 4), Pf = !1; Wy % 2 && nf((hy = hy.times(cb)).d, bb), 0 !== (Wy = ef(Wy / 2));) nf((cb = cb.times(cb)).d, bb);
          return Pf = !0, yb.s < 0 ? new Py(Zf).div(hy) : Mf(hy, Uy)
        }
      } else if (fy < 0) throw Error(of + "NaN");
      return fy = fy < 0 && 1 & yb.d[Math.max(bb, Wy)] ? -1 : 1, cb.s = 1, Pf = !1, hy = yb.times(vZ(cb, Uy + 12)), Pf = !0, (hy = gZ(hy)).s = fy, hy
    }, mZ.toPrecision = function(yb, bb) {
      var Wy, Uy, hy = this,
        fy = hy.constructor;
      return void 0 === yb ? Uy = Xf(hy, (Wy = Gf(hy)) <= fy.toExpNeg || Wy >= fy.toExpPos) : (Tf(yb, 1, cZ), void 0 === bb ? bb = fy.rounding : Tf(bb, 0, 8), Uy = Xf(hy = Mf(new fy(hy), yb, bb), yb <= (Wy = Gf(hy)) || Wy <= fy.toExpNeg, yb)), Uy
    }, mZ.toSignificantDigits = mZ.tosd = function(yb, bb) {
      var Wy = this.constructor;
      return void 0 === yb ? (yb = Wy.precision, bb = Wy.rounding) : (Tf(yb, 1, cZ), void 0 === bb ? bb = Wy.rounding : Tf(bb, 0, 8)), Mf(new Wy(this), yb, bb)
    }, mZ.toString = mZ.valueOf = mZ.val = mZ.toJSON = mZ[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var yb = this,
        bb = Gf(yb),
        Wy = yb.constructor;
      return Xf(yb, bb <= Wy.toExpNeg || bb >= Wy.toExpPos)
    };
    var Jf = function() {
      function yb(yb, bb) {
        var Wy, Uy = 0,
          hy = yb.length;
        for (yb = yb.slice(); hy--;) Wy = yb[hy] * bb + Uy, yb[hy] = Wy % Sf | 0, Uy = Wy / Sf | 0;
        return Uy && yb.unshift(Uy), yb
      }

      function bb(yb, bb, Wy, Uy) {
        var hy, fy;
        if (Wy != Uy) fy = Wy > Uy ? 1 : -1;
        else
          for (hy = fy = 0; hy < Wy; hy++)
            if (yb[hy] != bb[hy]) {
              fy = yb[hy] > bb[hy] ? 1 : -1;
              break
            } return fy
      }

      function Wy(yb, bb, Wy) {
        for (var Uy = 0; Wy--;) yb[Wy] -= Uy, Uy = yb[Wy] < bb[Wy] ? 1 : 0, yb[Wy] = Uy * Sf + yb[Wy] - bb[Wy];
        for (; !yb[0] && yb.length > 1;) yb.shift()
      }
      return function(Uy, hy, fy, Zy) {
        var cb, Py, oy, By, Ky, ey, qb, sy, Sy, Ey, ly, mb, Cy, Ty, Vy, Jy, gb, Gy, Oy = Uy.constructor,
          Ry = Uy.s == hy.s ? 1 : -1,
          vb = Uy.d,
          ib = hy.d;
        if (!Uy.s) return new Oy(Uy);
        if (!hy.s) throw Error(of + "Division by zero");
        for (Py = Uy.e - hy.e, gb = ib.length, Vy = vb.length, sy = (qb = new Oy(Ry)).d = [], oy = 0; ib[oy] == (vb[oy] || 0);) ++oy;
        if (ib[oy] > (vb[oy] || 0) && --Py, (mb = null == fy ? fy = Oy.precision : Zy ? fy + (Gf(Uy) - Gf(hy)) + 1 : fy) < 0) return new Oy(0);
        if (mb = mb / 7 + 2 | 0, oy = 0, 1 == gb)
          for (By = 0, ib = ib[0], mb++;
            (oy < Vy || By) && mb--; oy++) Cy = By * Sf + (vb[oy] || 0), sy[oy] = Cy / ib | 0, By = Cy % ib | 0;
        else {
          for ((By = Sf / (ib[0] + 1) | 0) > 1 && (ib = yb(ib, By), vb = yb(vb, By), gb = ib.length, Vy = vb.length), Ty = gb, Ey = (Sy = vb.slice(0, gb)).length; Ey < gb;) Sy[Ey++] = 0;
          (Gy = ib.slice()).unshift(0), Jy = ib[0], ib[1] >= Sf / 2 && ++Jy;
          do {
            By = 0, (cb = bb(ib, Sy, gb, Ey)) < 0 ? (ly = Sy[0], gb != Ey && (ly = ly * Sf + (Sy[1] || 0)), (By = ly / Jy | 0) > 1 ? (By >= Sf && (By = Sf - 1), 1 == (cb = bb(Ky = yb(ib, By), Sy, ey = Ky.length, Ey = Sy.length)) && (By--, Wy(Ky, gb < ey ? Gy : ib, ey))) : (0 == By && (cb = By = 1), Ky = ib.slice()), (ey = Ky.length) < Ey && Ky.unshift(0), Wy(Sy, Ky, Ey), -1 == cb && (cb = bb(ib, Sy, gb, Ey = Sy.length)) < 1 && (By++, Wy(Sy, gb < Ey ? Gy : ib, Ey)), Ey = Sy.length) : 0 === cb && (By++, Sy = [0]), sy[oy++] = By, cb && Sy[0] ? Sy[Ey++] = vb[Ty] || 0 : (Sy = [vb[Ty]], Ey = 1)
          } while ((Ty++ < Vy || void 0 !== Sy[0]) && mb--)
        }
        return sy[0] || sy.shift(), qb.e = Py, Mf(qb, Zy ? fy + Gf(qb) + 1 : fy)
      }
    }();

    function gZ(yb, bb) {
      var Wy, Uy, hy, fy, Zy, cb = 0,
        Py = 0,
        oy = yb.constructor,
        By = oy.precision;
      if (Gf(yb) > 16) throw Error(Kf + Gf(yb));
      if (!yb.s) return new oy(Zf);
      for (null == bb ? (Pf = !1, Zy = By) : Zy = bb, fy = new oy(.03125); yb.abs().gte(.1);) yb = yb.times(fy), Py += 5;
      for (Zy += Math.log(qZ(2, Py)) / Math.LN10 * 2 + 5 | 0, Wy = Uy = hy = new oy(Zf), oy.precision = Zy;;) {
        if (Uy = Mf(Uy.times(yb), Zy), Wy = Wy.times(++cb), Vf((fy = hy.plus(Jf(Uy, Wy, Zy))).d).slice(0, Zy) === Vf(hy.d).slice(0, Zy)) {
          for (; Py--;) hy = Mf(hy.times(hy), Zy);
          return oy.precision = By, null == bb ? (Pf = !0, Mf(hy, By)) : hy
        }
        hy = fy
      }
    }

    function Gf(yb) {
      for (var bb = 7 * yb.e, Wy = yb.d[0]; Wy >= 10; Wy /= 10) bb++;
      return bb
    }

    function Of(yb, bb, Wy) {
      if (bb > yb.LN10.sd()) throw Pf = !0, Wy && (yb.precision = Wy), Error(of + "LN10 precision limit exceeded");
      return Mf(new yb(yb.LN10), bb)
    }

    function Rf(yb) {
      for (var bb = ""; yb--;) bb += "0";
      return bb
    }

    function vZ(yb, bb) {
      var Wy, Uy, hy, fy, Zy, cb, Py, oy, By, Ky = 1,
        ey = yb,
        qb = ey.d,
        sy = ey.constructor,
        Sy = sy.precision;
      if (ey.s < 1) throw Error(of + (ey.s ? "NaN" : "-Infinity"));
      if (ey.eq(Zf)) return new sy(0);
      if (null == bb ? (Pf = !1, oy = Sy) : oy = bb, ey.eq(10)) return null == bb && (Pf = !0), Of(sy, oy);
      if (oy += 10, sy.precision = oy, Uy = (Wy = Vf(qb)).charAt(0), fy = Gf(ey), !(Math.abs(fy) < 15e14)) return Py = Of(sy, oy + 2, Sy).times(fy + ""), ey = vZ(new sy(Uy + "." + Wy.slice(1)), oy - 10).plus(Py), sy.precision = Sy, null == bb ? (Pf = !0, Mf(ey, Sy)) : ey;
      for (; Uy < 7 && 1 != Uy || 1 == Uy && Wy.charAt(1) > 3;) Uy = (Wy = Vf((ey = ey.times(yb)).d)).charAt(0), Ky++;
      for (fy = Gf(ey), Uy > 1 ? (ey = new sy("0." + Wy), fy++) : ey = new sy(Uy + "." + Wy.slice(1)), cb = Zy = ey = Jf(ey.minus(Zf), ey.plus(Zf), oy), By = Mf(ey.times(ey), oy), hy = 3;;) {
        if (Zy = Mf(Zy.times(By), oy), Vf((Py = cb.plus(Jf(Zy, new sy(hy), oy))).d).slice(0, oy) === Vf(cb.d).slice(0, oy)) return cb = cb.times(2), 0 !== fy && (cb = cb.plus(Of(sy, oy + 2, Sy).times(fy + ""))), cb = Jf(cb, new sy(Ky), oy), sy.precision = Sy, null == bb ? (Pf = !0, Mf(cb, Sy)) : cb;
        cb = Py, hy += 2
      }
    }

    function iZ(yb, bb) {
      var Wy, Uy, hy;
      for ((Wy = bb.indexOf(".")) > -1 && (bb = bb.replace(".", "")), (Uy = bb.search(/e/i)) > 0 ? (Wy < 0 && (Wy = Uy), Wy += +bb.slice(Uy + 1), bb = bb.substring(0, Uy)) : Wy < 0 && (Wy = bb.length), Uy = 0; 48 === bb.charCodeAt(Uy);) ++Uy;
      for (hy = bb.length; 48 === bb.charCodeAt(hy - 1);) --hy;
      if (bb = bb.slice(Uy, hy)) {
        if (hy -= Uy, Wy = Wy - Uy - 1, yb.e = ef(Wy / 7), yb.d = [], Uy = (Wy + 1) % 7, Wy < 0 && (Uy += 7), Uy < hy) {
          for (Uy && yb.d.push(+bb.slice(0, Uy)), hy -= 7; Uy < hy;) yb.d.push(+bb.slice(Uy, Uy += 7));
          Uy = 7 - (bb = bb.slice(Uy)).length
        } else Uy -= hy;
        for (; Uy--;) bb += "0";
        if (yb.d.push(+bb), Pf && (yb.e > lf || yb.e < -lf)) throw Error(Kf + Wy)
      } else yb.s = 0, yb.e = 0, yb.d = [0];
      return yb
    }

    function Mf(yb, bb, Wy) {
      var Uy, hy, fy, Zy, cb, Py, oy, By, Ky = yb.d;
      for (Zy = 1, fy = Ky[0]; fy >= 10; fy /= 10) Zy++;
      if ((Uy = bb - Zy) < 0) Uy += 7, hy = bb, oy = Ky[By = 0];
      else {
        if ((By = Math.ceil((Uy + 1) / 7)) >= (fy = Ky.length)) return yb;
        for (oy = fy = Ky[By], Zy = 1; fy >= 10; fy /= 10) Zy++;
        hy = (Uy %= 7) - 7 + Zy
      }
      if (void 0 !== Wy && (cb = oy / (fy = qZ(10, Zy - hy - 1)) % 10 | 0, Py = bb < 0 || void 0 !== Ky[By + 1] || oy % fy, Py = Wy < 4 ? (cb || Py) && (0 == Wy || Wy == (yb.s < 0 ? 3 : 2)) : cb > 5 || 5 == cb && (4 == Wy || Py || 6 == Wy && (Uy > 0 ? hy > 0 ? oy / qZ(10, Zy - hy) : 0 : Ky[By - 1]) % 10 & 1 || Wy == (yb.s < 0 ? 8 : 7))), bb < 1 || !Ky[0]) return Py ? (fy = Gf(yb), Ky.length = 1, bb = bb - fy - 1, Ky[0] = qZ(10, (7 - bb % 7) % 7), yb.e = ef(-bb / 7) || 0) : (Ky.length = 1, Ky[0] = yb.e = yb.s = 0), yb;
      if (0 == Uy ? (Ky.length = By, fy = 1, By--) : (Ky.length = By + 1, fy = qZ(10, 7 - Uy), Ky[By] = hy > 0 ? (oy / qZ(10, Zy - hy) % qZ(10, hy) | 0) * fy : 0), Py)
        for (;;) {
          if (0 == By) {
            (Ky[0] += fy) == Sf && (Ky[0] = 1, ++yb.e);
            break
          }
          if (Ky[By] += fy, Ky[By] != Sf) break;
          Ky[By--] = 0, fy = 1
        }
      for (Uy = Ky.length; 0 === Ky[--Uy];) Ky.pop();
      if (Pf && (yb.e > lf || yb.e < -lf)) throw Error(Kf + Gf(yb));
      return yb
    }

    function Yf(yb, bb) {
      var Wy, Uy, hy, fy, Zy, cb, Py, oy, By, Ky, ey = yb.constructor,
        qb = ey.precision;
      if (!yb.s || !bb.s) return bb.s ? bb.s = -bb.s : bb = new ey(yb), Pf ? Mf(bb, qb) : bb;
      if (Py = yb.d, Ky = bb.d, Uy = bb.e, oy = yb.e, Py = Py.slice(), Zy = oy - Uy) {
        for ((By = Zy < 0) ? (Wy = Py, Zy = -Zy, cb = Ky.length) : (Wy = Ky, Uy = oy, cb = Py.length), Zy > (hy = Math.max(Math.ceil(qb / 7), cb) + 2) && (Zy = hy, Wy.length = 1), Wy.reverse(), hy = Zy; hy--;) Wy.push(0);
        Wy.reverse()
      } else {
        for ((By = (hy = Py.length) < (cb = Ky.length)) && (cb = hy), hy = 0; hy < cb; hy++)
          if (Py[hy] != Ky[hy]) {
            By = Py[hy] < Ky[hy];
            break
          } Zy = 0
      }
      for (By && (Wy = Py, Py = Ky, Ky = Wy, bb.s = -bb.s), cb = Py.length, hy = Ky.length - cb; hy > 0; --hy) Py[cb++] = 0;
      for (hy = Ky.length; hy > Zy;) {
        if (Py[--hy] < Ky[hy]) {
          for (fy = hy; fy && 0 === Py[--fy];) Py[fy] = Sf - 1;
          --Py[fy], Py[hy] += Sf
        }
        Py[hy] -= Ky[hy]
      }
      for (; 0 === Py[--cb];) Py.pop();
      for (; 0 === Py[0]; Py.shift()) --Uy;
      return Py[0] ? (bb.d = Py, bb.e = Uy, Pf ? Mf(bb, qb) : bb) : new ey(0)
    }

    function Xf(yb, bb, Wy) {
      var Uy, hy = Gf(yb),
        fy = Vf(yb.d),
        Zy = fy.length;
      return bb ? (Wy && (Uy = Wy - Zy) > 0 ? fy = fy.charAt(0) + "." + fy.slice(1) + Rf(Uy) : Zy > 1 && (fy = fy.charAt(0) + "." + fy.slice(1)), fy = fy + (hy < 0 ? "e" : "e+") + hy) : hy < 0 ? (fy = "0." + Rf(-hy - 1) + fy, Wy && (Uy = Wy - Zy) > 0 && (fy += Rf(Uy))) : hy >= Zy ? (fy += Rf(hy + 1 - Zy), Wy && (Uy = Wy - hy - 1) > 0 && (fy = fy + "." + Rf(Uy))) : ((Uy = hy + 1) < Zy && (fy = fy.slice(0, Uy) + "." + fy.slice(Uy)), Wy && (Uy = Wy - Zy) > 0 && (hy + 1 === Zy && (fy += "."), fy += Rf(Uy))), yb.s < 0 ? "-" + fy : fy
    }

    function nf(yb, bb) {
      if (yb.length > bb) return yb.length = bb, !0
    }

    function uf(yb) {
      if (!yb || "object" !== typeof yb) throw Error(of + "Object expected");
      var bb, Wy, Uy, hy = ["precision", 1, cZ, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (bb = 0; bb < hy.length; bb += 3)
        if (void 0 !== (Uy = yb[Wy = hy[bb]])) {
          if (!(ef(Uy) === Uy && Uy >= hy[bb + 1] && Uy <= hy[bb + 2])) throw Error(Bf + Wy + ": " + Uy);
          this[Wy] = Uy
        } if (void 0 !== (Uy = yb[Wy = "LN10"])) {
        if (Uy != Math.LN10) throw Error(Bf + Wy + ": " + Uy);
        this[Wy] = new this(Uy)
      }
      return this
    }
    var rZ = function yb(bb) {
      var Wy, Uy, hy;

      function fy(yb) {
        var bb = this;
        if (!(bb instanceof fy)) return new fy(yb);
        if (bb.constructor = fy, yb instanceof fy) return bb.s = yb.s, bb.e = yb.e, void(bb.d = (yb = yb.d) ? yb.slice() : yb);
        if ("number" === typeof yb) {
          if (0 * yb !== 0) throw Error(Bf + yb);
          if (yb > 0) bb.s = 1;
          else {
            if (!(yb < 0)) return bb.s = 0, bb.e = 0, void(bb.d = [0]);
            yb = -yb, bb.s = -1
          }
          return yb === ~~yb && yb < 1e7 ? (bb.e = 0, void(bb.d = [yb])) : iZ(bb, yb.toString())
        }
        if ("string" !== typeof yb) throw Error(Bf + yb);
        if (45 === yb.charCodeAt(0) ? (yb = yb.slice(1), bb.s = -1) : bb.s = 1, !sf.test(yb)) throw Error(Bf + yb);
        iZ(bb, yb)
      }
      if (fy.prototype = mZ, fy.ROUND_UP = 0, fy.ROUND_DOWN = 1, fy.ROUND_CEIL = 2, fy.ROUND_FLOOR = 3, fy.ROUND_HALF_UP = 4, fy.ROUND_HALF_DOWN = 5, fy.ROUND_HALF_EVEN = 6, fy.ROUND_HALF_CEIL = 7, fy.ROUND_HALF_FLOOR = 8, fy.clone = yb, fy.config = fy.set = uf, void 0 === bb && (bb = {}), bb)
        for (hy = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], Wy = 0; Wy < hy.length;) bb.hasOwnProperty(Uy = hy[Wy++]) || (bb[Uy] = this[Uy]);
      return fy.config(bb), fy
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    Zf = new rZ(1);
    var Hf;
    ! function(yb) {
      yb.AED = "aed", yb.AFN = "afn", yb.ALL = "all", yb.AMD = "amd", yb.ANG = "ang", yb.AOA = "aoa", yb.ARS = "ars", yb.AUD = "aud", yb.AWG = "awg", yb.AZN = "azn", yb.BAM = "bam", yb.BBD = "bbd", yb.BDT = "bdt", yb.BGN = "bgn", yb.BHD = "bhd", yb.BIF = "bif", yb.BMD = "bmd", yb.BND = "bnd", yb.BOB = "bob", yb.BOV = "bov", yb.BRL = "brl", yb.BSD = "bsd", yb.BTN = "btn", yb.BWP = "bwp", yb.BYN = "byn", yb.BYR = "byr", yb.BZD = "bzd", yb.CAD = "cad", yb.CDF = "cdf", yb.CHE = "che", yb.CHF = "chf", yb.CHW = "chw", yb.CLF = "clf", yb.CLP = "clp", yb.CNY = "cny", yb.COP = "cop", yb.COU = "cou", yb.CRC = "crc", yb.CUC = "cuc", yb.CUP = "cup", yb.CVE = "cve", yb.CZK = "czk", yb.DJF = "djf", yb.DKK = "dkk", yb.DOP = "dop", yb.DZD = "dzd", yb.EGP = "egp", yb.ERN = "ern", yb.ETB = "etb", yb.EUR = "eur", yb.FJD = "fjd", yb.FKP = "fkp", yb.GBP = "gbp", yb.GEL = "gel", yb.GHS = "ghs", yb.GIP = "gip", yb.GMD = "gmd", yb.GNF = "gnf", yb.GTQ = "gtq", yb.GYD = "gyd", yb.HKD = "hkd", yb.HNL = "hnl", yb.HRK = "hrk", yb.HTG = "htg", yb.HUF = "huf", yb.IDR = "idr", yb.ILS = "ils", yb.INR = "inr", yb.IQD = "iqd", yb.IRR = "irr", yb.ISK = "isk", yb.JMD = "jmd", yb.JOD = "jod", yb.JPY = "jpy", yb.KES = "kes", yb.KGS = "kgs", yb.KHR = "khr", yb.KMF = "kmf", yb.KPW = "kpw", yb.KRW = "krw", yb.KWD = "kwd", yb.KYD = "kyd", yb.KZT = "kzt", yb.LAK = "lak", yb.LBP = "lbp", yb.LKR = "lkr", yb.LRD = "lrd", yb.LSL = "lsl", yb.LTL = "ltl", yb.LVL = "lvl", yb.LYD = "lyd", yb.MAD = "mad", yb.MDL = "mdl", yb.MGA = "mga", yb.MKD = "mkd", yb.MMK = "mmk", yb.MNT = "mnt", yb.MOP = "mop", yb.MRO = "mro", yb.MUR = "mur", yb.MVR = "mvr", yb.MWK = "mwk", yb.MXN = "mxn", yb.MXV = "mxv", yb.MYR = "myr", yb.MZN = "mzn", yb.NAD = "nad", yb.NGN = "ngn", yb.NIO = "nio", yb.NOK = "nok", yb.NPR = "npr", yb.NZD = "nzd", yb.OMR = "omr", yb.PAB = "pab", yb.PEN = "pen", yb.PGK = "pgk", yb.PHP = "php", yb.PKR = "pkr", yb.PLN = "pln", yb.PYG = "pyg", yb.QAR = "qar", yb.RON = "ron", yb.RSD = "rsd", yb.RUB = "rub", yb.RWF = "rwf", yb.SAR = "sar", yb.SBD = "sbd", yb.SCR = "scr", yb.SDG = "sdg", yb.SEK = "sek", yb.SGD = "sgd", yb.SHP = "shp", yb.SLL = "sll", yb.SOS = "sos", yb.SRD = "srd", yb.SSP = "ssp", yb.STD = "std", yb.SVC = "svc", yb.SYP = "syp", yb.SZL = "szl", yb.THB = "thb", yb.TJS = "tjs", yb.TMT = "tmt", yb.TND = "tnd", yb.TOP = "top", yb.TRY = "try", yb.TTD = "ttd", yb.TWD = "twd", yb.TZS = "tzs", yb.UAH = "uah", yb.UGX = "ugx", yb.USD = "usd", yb.USN = "usn", yb.USS = "uss", yb.UYI = "uyi", yb.UYU = "uyu", yb.UZS = "uzs", yb.VEF = "vef", yb.VND = "vnd", yb.VUV = "vuv", yb.WST = "wst", yb.XAF = "xaf", yb.XAG = "xag", yb.XAU = "xau", yb.XBA = "xba", yb.XBB = "xbb", yb.XBC = "xbc", yb.XBD = "xbd", yb.XCD = "xcd", yb.XDR = "xdr", yb.XFU = "xfu", yb.XOF = "xof", yb.XPD = "xpd", yb.XPF = "xpf", yb.XPT = "xpt", yb.XSU = "xsu", yb.XTS = "xts", yb.XUA = "xua", yb.YER = "yer", yb.ZAR = "zar", yb.ZMW = "zmw", yb.ZWL = "zwl"
    }(Hf || (Hf = {}));
    Hf.AED, Hf.AFN, Hf.ALL, Hf.AMD, Hf.ANG, Hf.AOA, Hf.ARS, Hf.AUD, Hf.AWG, Hf.AZN, Hf.BAM, Hf.BBD, Hf.BDT, Hf.BGN, Hf.BHD, Hf.BIF, Hf.BMD, Hf.BND, Hf.BOB, Hf.BOV, Hf.BRL, Hf.BSD, Hf.BTN, Hf.BWP, Hf.BYR, Hf.BYN, Hf.BZD, Hf.CAD, Hf.CDF, Hf.CHE, Hf.CHF, Hf.CHW, Hf.CLF, Hf.CLP, Hf.CNY, Hf.COP, Hf.COU, Hf.CRC, Hf.CUC, Hf.CUP, Hf.CVE, Hf.CZK, Hf.DJF, Hf.DKK, Hf.DOP, Hf.DZD, Hf.EGP, Hf.ERN, Hf.ETB, Hf.EUR, Hf.FJD, Hf.FKP, Hf.GBP, Hf.GEL, Hf.GHS, Hf.GIP, Hf.GMD, Hf.GNF, Hf.GTQ, Hf.GYD, Hf.HKD, Hf.HNL, Hf.HRK, Hf.HTG, Hf.HUF, Hf.IDR, Hf.ILS, Hf.INR, Hf.IQD, Hf.IRR, Hf.ISK, Hf.JMD, Hf.JOD, Hf.JPY, Hf.KES, Hf.KGS, Hf.KHR, Hf.KMF, Hf.KPW, Hf.KRW, Hf.KWD, Hf.KYD, Hf.KZT, Hf.LAK, Hf.LBP, Hf.LKR, Hf.LRD, Hf.LSL, Hf.LTL, Hf.LVL, Hf.LYD, Hf.MAD, Hf.MDL, Hf.MGA, Hf.MKD, Hf.MMK, Hf.MNT, Hf.MOP, Hf.MRO, Hf.MUR, Hf.MVR, Hf.MWK, Hf.MXN, Hf.MXV, Hf.MYR, Hf.MZN, Hf.NAD, Hf.NGN, Hf.NIO, Hf.NOK, Hf.NPR, Hf.NZD, Hf.OMR, Hf.PAB, Hf.PEN, Hf.PGK, Hf.PHP, Hf.PKR, Hf.PLN, Hf.PYG, Hf.QAR, Hf.RON, Hf.RSD, Hf.RUB, Hf.RWF, Hf.SAR, Hf.SBD, Hf.SCR, Hf.SDG, Hf.SEK, Hf.SGD, Hf.SHP, Hf.SLL, Hf.SOS, Hf.SRD, Hf.SSP, Hf.STD, Hf.SVC, Hf.SYP, Hf.SZL, Hf.THB, Hf.TJS, Hf.TMT, Hf.TND, Hf.TOP, Hf.TRY, Hf.TTD, Hf.TWD, Hf.TZS, Hf.UAH, Hf.UGX, Hf.USD, Hf.USN, Hf.USS, Hf.UYI, Hf.UYU, Hf.UZS, Hf.VEF, Hf.VND, Hf.VUV, Hf.WST, Hf.XAF, Hf.XAG, Hf.XAU, Hf.XBA, Hf.XBB, Hf.XBC, Hf.XBD, Hf.XCD, Hf.XDR, Hf.XFU, Hf.XOF, Hf.XPD, Hf.XPF, Hf.XPT, Hf.XSU, Hf.XTS, Hf.XUA, Hf.YER, Hf.ZAR, Hf.ZMW, Hf.ZWL;
    var aZ = {
      exports: {}
    };
    ! function(yb, bb) {
      var Wy = "__lodash_hash_undefined__",
        Uy = 9007199254740991,
        fy = "[object Arguments]",
        Zy = "[object Array]",
        cb = "[object Boolean]",
        Py = "[object Date]",
        oy = "[object Error]",
        By = "[object Function]",
        Ky = "[object Map]",
        ey = "[object Number]",
        qb = "[object Object]",
        sy = "[object Promise]",
        Sy = "[object RegExp]",
        Ey = "[object Set]",
        ly = "[object String]",
        mb = "[object Symbol]",
        Cy = "[object WeakMap]",
        Ty = "[object ArrayBuffer]",
        Vy = "[object DataView]",
        Jy = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        gb = /^\w*$/,
        Gy = /^\./,
        Oy = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        Ry = /\\(\\)?/g,
        vb = /^\[object .+?Constructor\]$/,
        ib = /^(?:0|[1-9]\d*)$/,
        My = {};
      My["[object Float32Array]"] = My["[object Float64Array]"] = My["[object Int8Array]"] = My["[object Int16Array]"] = My["[object Int32Array]"] = My["[object Uint8Array]"] = My["[object Uint8ClampedArray]"] = My["[object Uint16Array]"] = My["[object Uint32Array]"] = !0, My[fy] = My[Zy] = My[Ty] = My[cb] = My[Vy] = My[Py] = My[oy] = My[By] = My[Ky] = My[ey] = My[qb] = My[Sy] = My[Ey] = My[ly] = My[Cy] = !1;
      var Yy = "object" == typeof hy && hy && hy.Object === Object && hy,
        Xy = "object" == typeof self && self && self.Object === Object && self,
        ny = Yy || Xy || Function("return this")(),
        uy = bb && !bb.nodeType && bb,
        rb = uy && yb && !yb.nodeType && yb,
        Hy = rb && rb.exports === uy && Yy.process,
        ab = function() {
          try {
            return Hy && Hy.binding("util")
          } catch (yb) {}
        }(),
        Fy = ab && ab.isTypedArray;

      function py(yb, bb) {
        for (var Wy = -1, Uy = yb ? yb.length : 0; ++Wy < Uy && !1 !== bb(yb[Wy], Wy, yb););
        return yb
      }

      function Ly(yb, bb) {
        for (var Wy = -1, Uy = yb ? yb.length : 0; ++Wy < Uy;)
          if (bb(yb[Wy], Wy, yb)) return !0;
        return !1
      }

      function Qy(yb) {
        var bb = !1;
        if (null != yb && "function" != typeof yb.toString) try {
          bb = !!(yb + "")
        } catch (Wy) {}
        return bb
      }

      function jb(yb) {
        var bb = -1,
          Wy = Array(yb.size);
        return yb.forEach((function(yb, Uy) {
          Wy[++bb] = [Uy, yb]
        })), Wy
      }

      function Dy(yb, bb) {
        return function(Wy) {
          return yb(bb(Wy))
        }
      }

      function tb(yb) {
        var bb = -1,
          Wy = Array(yb.size);
        return yb.forEach((function(yb) {
          Wy[++bb] = yb
        })), Wy
      }
      var wy = Array.prototype,
        kb = Function.prototype,
        Ny = Object.prototype,
        zb = ny["__core-js_shared__"],
        Iy = function() {
          var yb = /[^.]+$/.exec(zb && zb.keys && zb.keys.IE_PROTO || "");
          return yb ? "Symbol(src)_1." + yb : ""
        }(),
        xb = kb.toString,
        Ay = Ny.hasOwnProperty,
        dy = Ny.toString,
        yW = RegExp("^" + xb.call(Ay).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        bW = ny.Symbol,
        Wb = ny.Uint8Array,
        Ub = Dy(Object.getPrototypeOf, Object),
        hb = Object.create,
        fb = Ny.propertyIsEnumerable,
        Zb = wy.splice,
        cW = Dy(Object.keys, Object),
        Pb = jW(ny, "DataView"),
        ob = jW(ny, "Map"),
        Bb = jW(ny, "Promise"),
        Kb = jW(ny, "Set"),
        eb = jW(ny, "WeakMap"),
        qW = jW(Object, "create"),
        sb = xW(Pb),
        Sb = xW(ob),
        Eb = xW(Bb),
        lb = xW(Kb),
        mW = xW(eb),
        Cb = bW ? bW.prototype : void 0,
        Tb = Cb ? Cb.valueOf : void 0,
        Vb = Cb ? Cb.toString : void 0;

      function Jb(yb) {
        var bb = -1,
          Wy = yb ? yb.length : 0;
        for (this.clear(); ++bb < Wy;) {
          var Uy = yb[bb];
          this.set(Uy[0], Uy[1])
        }
      }

      function gW(yb) {
        var bb = -1,
          Wy = yb ? yb.length : 0;
        for (this.clear(); ++bb < Wy;) {
          var Uy = yb[bb];
          this.set(Uy[0], Uy[1])
        }
      }

      function Gb(yb) {
        var bb = -1,
          Wy = yb ? yb.length : 0;
        for (this.clear(); ++bb < Wy;) {
          var Uy = yb[bb];
          this.set(Uy[0], Uy[1])
        }
      }

      function Ob(yb) {
        var bb = -1,
          Wy = yb ? yb.length : 0;
        for (this.__data__ = new Gb; ++bb < Wy;) this.add(yb[bb])
      }

      function Rb(yb) {
        this.__data__ = new gW(yb)
      }

      function vW(yb, bb) {
        var Wy = bU(yb) || yU(yb) ? function(yb, bb) {
            for (var Wy = -1, Uy = Array(yb); ++Wy < yb;) Uy[Wy] = bb(Wy);
            return Uy
          }(yb.length, String) : [],
          Uy = Wy.length,
          hy = !!Uy;
        for (var fy in yb) !bb && !Ay.call(yb, fy) || hy && ("length" == fy || tW(fy, Uy)) || Wy.push(fy);
        return Wy
      }

      function iW(yb, bb) {
        for (var Wy = yb.length; Wy--;)
          if (db(yb[Wy][0], bb)) return Wy;
        return -1
      }
      Jb.prototype.clear = function() {
        this.__data__ = qW ? qW(null) : {}
      }, Jb.prototype.delete = function(yb) {
        return this.has(yb) && delete this.__data__[yb]
      }, Jb.prototype.get = function(yb) {
        var bb = this.__data__;
        if (qW) {
          var Uy = bb[yb];
          return Uy === Wy ? void 0 : Uy
        }
        return Ay.call(bb, yb) ? bb[yb] : void 0
      }, Jb.prototype.has = function(yb) {
        var bb = this.__data__;
        return qW ? void 0 !== bb[yb] : Ay.call(bb, yb)
      }, Jb.prototype.set = function(yb, bb) {
        return this.__data__[yb] = qW && void 0 === bb ? Wy : bb, this
      }, gW.prototype.clear = function() {
        this.__data__ = []
      }, gW.prototype.delete = function(yb) {
        var bb = this.__data__,
          Wy = iW(bb, yb);
        return !(Wy < 0) && (Wy == bb.length - 1 ? bb.pop() : Zb.call(bb, Wy, 1), !0)
      }, gW.prototype.get = function(yb) {
        var bb = this.__data__,
          Wy = iW(bb, yb);
        return Wy < 0 ? void 0 : bb[Wy][1]
      }, gW.prototype.has = function(yb) {
        return iW(this.__data__, yb) > -1
      }, gW.prototype.set = function(yb, bb) {
        var Wy = this.__data__,
          Uy = iW(Wy, yb);
        return Uy < 0 ? Wy.push([yb, bb]) : Wy[Uy][1] = bb, this
      }, Gb.prototype.clear = function() {
        this.__data__ = {
          hash: new Jb,
          map: new(ob || gW),
          string: new Jb
        }
      }, Gb.prototype.delete = function(yb) {
        return Qb(this, yb).delete(yb)
      }, Gb.prototype.get = function(yb) {
        return Qb(this, yb).get(yb)
      }, Gb.prototype.has = function(yb) {
        return Qb(this, yb).has(yb)
      }, Gb.prototype.set = function(yb, bb) {
        return Qb(this, yb).set(yb, bb), this
      }, Ob.prototype.add = Ob.prototype.push = function(yb) {
        return this.__data__.set(yb, Wy), this
      }, Ob.prototype.has = function(yb) {
        return this.__data__.has(yb)
      }, Rb.prototype.clear = function() {
        this.__data__ = new gW
      }, Rb.prototype.delete = function(yb) {
        return this.__data__.delete(yb)
      }, Rb.prototype.get = function(yb) {
        return this.__data__.get(yb)
      }, Rb.prototype.has = function(yb) {
        return this.__data__.has(yb)
      }, Rb.prototype.set = function(yb, bb) {
        var Wy = this.__data__;
        if (Wy instanceof gW) {
          var Uy = Wy.__data__;
          if (!ob || Uy.length < 199) return Uy.push([yb, bb]), this;
          Wy = this.__data__ = new Gb(Uy)
        }
        return Wy.set(yb, bb), this
      };
      var Mb, Yb = function(yb, bb, Wy) {
        for (var Uy = -1, hy = Object(yb), fy = Wy(yb), Zy = fy.length; Zy--;) {
          var cb = fy[Mb ? Zy : ++Uy];
          if (!1 === bb(hy[cb], cb, hy)) break
        }
        return yb
      };

      function Xb(yb, bb) {
        return yb && Yb(yb, bb, BW)
      }

      function nb(yb, bb) {
        for (var Wy = 0, Uy = (bb = wb(bb, yb) ? [bb] : pb(bb)).length; null != yb && Wy < Uy;) yb = yb[Ib(bb[Wy++])];
        return Wy && Wy == Uy ? yb : void 0
      }

      function ub(yb, bb) {
        return null != yb && bb in Object(yb)
      }

      function rW(yb, bb, Wy, Uy, hy) {
        return yb === bb || (null == yb || null == bb || !fW(yb) && !ZW(bb) ? yb !== yb && bb !== bb : function(yb, bb, Wy, Uy, hy, By) {
          var sy = bU(yb),
            Cy = bU(bb),
            Jy = Zy,
            gb = Zy;
          sy || (Jy = (Jy = Db(yb)) == fy ? qb : Jy);
          Cy || (gb = (gb = Db(bb)) == fy ? qb : gb);
          var Gy = Jy == qb && !Qy(yb),
            Oy = gb == qb && !Qy(bb),
            Ry = Jy == gb;
          if (Ry && !Gy) return By || (By = new Rb), sy || oW(yb) ? Lb(yb, bb, Wy, Uy, hy, By) : function(yb, bb, Wy, Uy, hy, fy, Zy) {
            switch (Wy) {
              case Vy:
                if (yb.byteLength != bb.byteLength || yb.byteOffset != bb.byteOffset) return !1;
                yb = yb.buffer, bb = bb.buffer;
              case Ty:
                return !(yb.byteLength != bb.byteLength || !Uy(new Wb(yb), new Wb(bb)));
              case cb:
              case Py:
              case ey:
                return db(+yb, +bb);
              case oy:
                return yb.name == bb.name && yb.message == bb.message;
              case Sy:
              case ly:
                return yb == bb + "";
              case Ky:
                var By = jb;
              case Ey:
                var qb = 2 & fy;
                if (By || (By = tb), yb.size != bb.size && !qb) return !1;
                var sy = Zy.get(yb);
                if (sy) return sy == bb;
                fy |= 1, Zy.set(yb, bb);
                var Cy = Lb(By(yb), By(bb), Uy, hy, fy, Zy);
                return Zy.delete(yb), Cy;
              case mb:
                if (Tb) return Tb.call(yb) == Tb.call(bb)
            }
            return !1
          }(yb, bb, Jy, Wy, Uy, hy, By);
          if (!(2 & hy)) {
            var vb = Gy && Ay.call(yb, "__wrapped__"),
              ib = Oy && Ay.call(bb, "__wrapped__");
            if (vb || ib) {
              var My = vb ? yb.value() : yb,
                Yy = ib ? bb.value() : bb;
              return By || (By = new Rb), Wy(My, Yy, Uy, hy, By)
            }
          }
          if (!Ry) return !1;
          return By || (By = new Rb),
            function(yb, bb, Wy, Uy, hy, fy) {
              var Zy = 2 & hy,
                cb = BW(yb),
                Py = cb.length,
                oy = BW(bb),
                By = oy.length;
              if (Py != By && !Zy) return !1;
              var Ky = Py;
              for (; Ky--;) {
                var ey = cb[Ky];
                if (!(Zy ? ey in bb : Ay.call(bb, ey))) return !1
              }
              var qb = fy.get(yb);
              if (qb && fy.get(bb)) return qb == bb;
              var sy = !0;
              fy.set(yb, bb), fy.set(bb, yb);
              var Sy = Zy;
              for (; ++Ky < Py;) {
                var Ey = yb[ey = cb[Ky]],
                  ly = bb[ey];
                if (Uy) var mb = Zy ? Uy(ly, Ey, ey, bb, yb, fy) : Uy(Ey, ly, ey, yb, bb, fy);
                if (!(void 0 === mb ? Ey === ly || Wy(Ey, ly, Uy, hy, fy) : mb)) {
                  sy = !1;
                  break
                }
                Sy || (Sy = "constructor" == ey)
              }
              if (sy && !Sy) {
                var Cy = yb.constructor,
                  Ty = bb.constructor;
                Cy == Ty || !("constructor" in yb) || !("constructor" in bb) || "function" == typeof Cy && Cy instanceof Cy && "function" == typeof Ty && Ty instanceof Ty || (sy = !1)
              }
              return fy.delete(yb), fy.delete(bb), sy
            }(yb, bb, Wy, Uy, hy, By)
        }(yb, bb, rW, Wy, Uy, hy))
      }

      function Hb(yb) {
        return !(!fW(yb) || (bb = yb, Iy && Iy in bb)) && (UW(yb) || Qy(yb) ? yW : vb).test(xW(yb));
        var bb
      }

      function aW(yb) {
        return "function" == typeof yb ? yb : null == yb ? KW : "object" == typeof yb ? bU(yb) ? function(yb, bb) {
          if (wb(yb) && kW(bb)) return Nb(Ib(yb), bb);
          return function(Wy) {
            var Uy = function(yb, bb, Wy) {
              var Uy = null == yb ? void 0 : nb(yb, bb);
              return void 0 === Uy ? Wy : Uy
            }(Wy, yb);
            return void 0 === Uy && Uy === bb ? function(yb, bb) {
              return null != yb && function(yb, bb, Wy) {
                bb = wb(bb, yb) ? [bb] : pb(bb);
                var Uy, hy = -1,
                  fy = bb.length;
                for (; ++hy < fy;) {
                  var Zy = Ib(bb[hy]);
                  if (!(Uy = null != yb && Wy(yb, Zy))) break;
                  yb = yb[Zy]
                }
                if (Uy) return Uy;
                fy = yb ? yb.length : 0;
                return !!fy && hW(fy) && tW(Zy, fy) && (bU(yb) || yU(yb))
              }(yb, bb, ub)
            }(Wy, yb) : rW(bb, Uy, void 0, 3)
          }
        }(yb[0], yb[1]) : function(yb) {
          var bb = function(yb) {
            var bb = BW(yb),
              Wy = bb.length;
            for (; Wy--;) {
              var Uy = bb[Wy],
                hy = yb[Uy];
              bb[Wy] = [Uy, hy, kW(hy)]
            }
            return bb
          }(yb);
          if (1 == bb.length && bb[0][2]) return Nb(bb[0][0], bb[0][1]);
          return function(Wy) {
            return Wy === yb || function(yb, bb, Wy, Uy) {
              var hy = Wy.length,
                fy = hy,
                Zy = !Uy;
              if (null == yb) return !fy;
              for (yb = Object(yb); hy--;) {
                var cb = Wy[hy];
                if (Zy && cb[2] ? cb[1] !== yb[cb[0]] : !(cb[0] in yb)) return !1
              }
              for (; ++hy < fy;) {
                var Py = (cb = Wy[hy])[0],
                  oy = yb[Py],
                  By = cb[1];
                if (Zy && cb[2]) {
                  if (void 0 === oy && !(Py in yb)) return !1
                } else {
                  var Ky = new Rb;
                  if (Uy) var ey = Uy(oy, By, Py, yb, bb, Ky);
                  if (!(void 0 === ey ? rW(By, oy, Uy, 3, Ky) : ey)) return !1
                }
              }
              return !0
            }(Wy, yb, bb)
          }
        }(yb) : function(yb) {
          return wb(yb) ? (bb = Ib(yb), function(yb) {
            return null == yb ? void 0 : yb[bb]
          }) : function(yb) {
            return function(bb) {
              return nb(bb, yb)
            }
          }(yb);
          var bb
        }(yb)
      }

      function Fb(yb) {
        if (! function(yb) {
            var bb = yb && yb.constructor,
              Wy = "function" == typeof bb && bb.prototype || Ny;
            return yb === Wy
          }(yb)) return cW(yb);
        var bb = [];
        for (var Wy in Object(yb)) Ay.call(yb, Wy) && "constructor" != Wy && bb.push(Wy);
        return bb
      }

      function pb(yb) {
        return bU(yb) ? yb : zW(yb)
      }

      function Lb(yb, bb, Wy, Uy, hy, fy) {
        var Zy = 2 & hy,
          cb = yb.length,
          Py = bb.length;
        if (cb != Py && !(Zy && Py > cb)) return !1;
        var oy = fy.get(yb);
        if (oy && fy.get(bb)) return oy == bb;
        var By = -1,
          Ky = !0,
          ey = 1 & hy ? new Ob : void 0;
        for (fy.set(yb, bb), fy.set(bb, yb); ++By < cb;) {
          var qb = yb[By],
            sy = bb[By];
          if (Uy) var Sy = Zy ? Uy(sy, qb, By, bb, yb, fy) : Uy(qb, sy, By, yb, bb, fy);
          if (void 0 !== Sy) {
            if (Sy) continue;
            Ky = !1;
            break
          }
          if (ey) {
            if (!Ly(bb, (function(yb, bb) {
                if (!ey.has(bb) && (qb === yb || Wy(qb, yb, Uy, hy, fy))) return ey.add(bb)
              }))) {
              Ky = !1;
              break
            }
          } else if (qb !== sy && !Wy(qb, sy, Uy, hy, fy)) {
            Ky = !1;
            break
          }
        }
        return fy.delete(yb), fy.delete(bb), Ky
      }

      function Qb(yb, bb) {
        var Wy = yb.__data__;
        return function(yb) {
          var bb = typeof yb;
          return "string" == bb || "number" == bb || "symbol" == bb || "boolean" == bb ? "__proto__" !== yb : null === yb
        }(bb) ? Wy["string" == typeof bb ? "string" : "hash"] : Wy.map
      }

      function jW(yb, bb) {
        var Wy = function(yb, bb) {
          return null == yb ? void 0 : yb[bb]
        }(yb, bb);
        return Hb(Wy) ? Wy : void 0
      }
      var Db = function(yb) {
        return dy.call(yb)
      };

      function tW(yb, bb) {
        return !!(bb = null == bb ? Uy : bb) && ("number" == typeof yb || ib.test(yb)) && yb > -1 && yb % 1 == 0 && yb < bb
      }

      function wb(yb, bb) {
        if (bU(yb)) return !1;
        var Wy = typeof yb;
        return !("number" != Wy && "symbol" != Wy && "boolean" != Wy && null != yb && !cU(yb)) || (gb.test(yb) || !Jy.test(yb) || null != bb && yb in Object(bb))
      }

      function kW(yb) {
        return yb === yb && !fW(yb)
      }

      function Nb(yb, bb) {
        return function(Wy) {
          return null != Wy && (Wy[yb] === bb && (void 0 !== bb || yb in Object(Wy)))
        }
      }(Pb && Db(new Pb(new ArrayBuffer(1))) != Vy || ob && Db(new ob) != Ky || Bb && Db(Bb.resolve()) != sy || Kb && Db(new Kb) != Ey || eb && Db(new eb) != Cy) && (Db = function(yb) {
        var bb = dy.call(yb),
          Wy = bb == qb ? yb.constructor : void 0,
          Uy = Wy ? xW(Wy) : void 0;
        if (Uy) switch (Uy) {
          case sb:
            return Vy;
          case Sb:
            return Ky;
          case Eb:
            return sy;
          case lb:
            return Ey;
          case mW:
            return Cy
        }
        return bb
      });
      var zW = Ab((function(yb) {
        var bb;
        yb = null == (bb = yb) ? "" : function(yb) {
          if ("string" == typeof yb) return yb;
          if (cU(yb)) return Vb ? Vb.call(yb) : "";
          var bb = yb + "";
          return "0" == bb && 1 / yb == -1 / 0 ? "-0" : bb
        }(bb);
        var Wy = [];
        return Gy.test(yb) && Wy.push(""), yb.replace(Oy, (function(yb, bb, Uy, hy) {
          Wy.push(Uy ? hy.replace(Ry, "$1") : bb || yb)
        })), Wy
      }));

      function Ib(yb) {
        if ("string" == typeof yb || cU(yb)) return yb;
        var bb = yb + "";
        return "0" == bb && 1 / yb == -1 / 0 ? "-0" : bb
      }

      function xW(yb) {
        if (null != yb) {
          try {
            return xb.call(yb)
          } catch (bb) {}
          try {
            return yb + ""
          } catch (bb) {}
        }
        return ""
      }

      function Ab(yb, bb) {
        if ("function" != typeof yb || bb && "function" != typeof bb) throw new TypeError("Expected a function");
        var Wy = function() {
          var Uy = arguments,
            hy = bb ? bb.apply(this, Uy) : Uy[0],
            fy = Wy.cache;
          if (fy.has(hy)) return fy.get(hy);
          var Zy = yb.apply(this, Uy);
          return Wy.cache = fy.set(hy, Zy), Zy
        };
        return Wy.cache = new(Ab.Cache || Gb), Wy
      }

      function db(yb, bb) {
        return yb === bb || yb !== yb && bb !== bb
      }

      function yU(yb) {
        return function(yb) {
          return ZW(yb) && WW(yb)
        }(yb) && Ay.call(yb, "callee") && (!fb.call(yb, "callee") || dy.call(yb) == fy)
      }
      Ab.Cache = Gb;
      var bU = Array.isArray;

      function WW(yb) {
        return null != yb && hW(yb.length) && !UW(yb)
      }

      function UW(yb) {
        var bb = fW(yb) ? dy.call(yb) : "";
        return bb == By || "[object GeneratorFunction]" == bb
      }

      function hW(yb) {
        return "number" == typeof yb && yb > -1 && yb % 1 == 0 && yb <= Uy
      }

      function fW(yb) {
        var bb = typeof yb;
        return !!yb && ("object" == bb || "function" == bb)
      }

      function ZW(yb) {
        return !!yb && "object" == typeof yb
      }

      function cU(yb) {
        return "symbol" == typeof yb || ZW(yb) && dy.call(yb) == mb
      }
      var PW, oW = Fy ? (PW = Fy, function(yb) {
        return PW(yb)
      }) : function(yb) {
        return ZW(yb) && hW(yb.length) && !!My[dy.call(yb)]
      };

      function BW(yb) {
        return WW(yb) ? vW(yb) : Fb(yb)
      }

      function KW(yb) {
        return yb
      }
      yb.exports = function(yb, bb, Wy) {
        var Uy, hy = bU(yb) || oW(yb);
        if (bb = aW(bb), null == Wy)
          if (hy || fW(yb)) {
            var fy = yb.constructor;
            Wy = hy ? bU(yb) ? new fy : [] : UW(fy) ? fW(Uy = Ub(yb)) ? hb(Uy) : {} : {}
          } else Wy = {};
        return (hy ? py : Xb)(yb, (function(yb, Uy, hy) {
          return bb(Wy, yb, Uy, hy)
        })), Wy
      }
    }(aZ, aZ.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      p: Ff
    } = Uy
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);