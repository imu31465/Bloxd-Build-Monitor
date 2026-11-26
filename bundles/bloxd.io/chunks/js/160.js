export const id = 160;
export const ids = [160];
export const modules = {
  7266: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YU,
      c: () => ix
    });
    var JV = {};
    xV.r(JV), xV.d(JV, {
      d: () => JJ,
      k: () => yJ,
      h: () => UJ,
      o: () => sx,
      q: () => ux,
      s: () => zJ,
      t: () => dx,
      w: () => RJ,
      y: () => TJ,
      z: () => WJ,
      A: () => Sx,
      C: () => AJ,
      G: () => MJ,
      K: () => GJ,
      N: () => Ix,
      M: () => eJ,
      Q: () => XJ,
      R: () => NJ
    });
    var YV = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function UV(VV) {
      return VV && VV.__esModule && Object.prototype.hasOwnProperty.call(VV, "default") ? VV.default : VV
    }
    var yV = {
      exports: {}
    };
    ! function(VV) {
      var eV = Object.prototype.hasOwnProperty,
        xV = "~";

      function JV() {}

      function YV(VV, eV, xV) {
        this.bZ = VV, this.context = eV, this.once = xV || !1
      }

      function UV(VV, eV, JV, UV, yV) {
        if ("function" !== typeof JV) throw new TypeError("The listener must be a function");
        var pV = new YV(JV, UV || VV, yV),
          QV = xV ? xV + eV : eV;
        return VV._events[QV] ? VV._events[QV].bZ ? VV._events[QV] = [VV._events[QV], pV] : VV._events[QV].push(pV) : (VV._events[QV] = pV, VV._eventsCount++), VV
      }

      function yV(VV, eV) {
        0 === --VV._eventsCount ? VV._events = new JV : delete VV._events[eV]
      }

      function pV() {
        this._events = new JV, this._eventsCount = 0
      }
      Object.create && (JV.prototype = Object.create(null), (new JV).__proto__ || (xV = !1)), pV.prototype.eventNames = function() {
        var VV, JV, YV = [];
        if (0 === this._eventsCount) return YV;
        for (JV in VV = this._events) eV.call(VV, JV) && YV.push(xV ? JV.slice(1) : JV);
        return Object.getOwnPropertySymbols ? YV.concat(Object.getOwnPropertySymbols(VV)) : YV
      }, pV.prototype.listeners = function(VV) {
        var eV = xV ? xV + VV : VV,
          JV = this._events[eV];
        if (!JV) return [];
        if (JV.bZ) return [JV.bZ];
        for (var YV = 0, UV = JV.length, yV = new Array(UV); YV < UV; YV++) yV[YV] = JV[YV].bZ;
        return yV
      }, pV.prototype.listenerCount = function(VV) {
        var eV = xV ? xV + VV : VV,
          JV = this._events[eV];
        return JV ? JV.bZ ? 1 : JV.length : 0
      }, pV.prototype.emit = function(VV, eV, JV, YV, UV, yV) {
        var pV = xV ? xV + VV : VV;
        if (!this._events[pV]) return !1;
        var QV, nV, wV = this._events[pV],
          ZV = arguments.length;
        if (wV.bZ) {
          switch (wV.once && this.removeListener(VV, wV.bZ, void 0, !0), ZV) {
            case 1:
              return wV.bZ.call(wV.context), !0;
            case 2:
              return wV.bZ.call(wV.context, eV), !0;
            case 3:
              return wV.bZ.call(wV.context, eV, JV), !0;
            case 4:
              return wV.bZ.call(wV.context, eV, JV, YV), !0;
            case 5:
              return wV.bZ.call(wV.context, eV, JV, YV, UV), !0;
            case 6:
              return wV.bZ.call(wV.context, eV, JV, YV, UV, yV), !0
          }
          for (nV = 1, QV = new Array(ZV - 1); nV < ZV; nV++) QV[nV - 1] = arguments[nV];
          wV.bZ.apply(wV.context, QV)
        } else {
          var vV, rV = wV.length;
          for (nV = 0; nV < rV; nV++) switch (wV[nV].once && this.removeListener(VV, wV[nV].bZ, void 0, !0), ZV) {
            case 1:
              wV[nV].bZ.call(wV[nV].context);
              break;
            case 2:
              wV[nV].bZ.call(wV[nV].context, eV);
              break;
            case 3:
              wV[nV].bZ.call(wV[nV].context, eV, JV);
              break;
            case 4:
              wV[nV].bZ.call(wV[nV].context, eV, JV, YV);
              break;
            default:
              if (!QV)
                for (vV = 1, QV = new Array(ZV - 1); vV < ZV; vV++) QV[vV - 1] = arguments[vV];
              wV[nV].bZ.apply(wV[nV].context, QV)
          }
        }
        return !0
      }, pV.prototype.on = function(VV, eV, xV) {
        return UV(this, VV, eV, xV, !1)
      }, pV.prototype.once = function(VV, eV, xV) {
        return UV(this, VV, eV, xV, !0)
      }, pV.prototype.removeListener = function(VV, eV, JV, YV) {
        var UV = xV ? xV + VV : VV;
        if (!this._events[UV]) return this;
        if (!eV) return yV(this, UV), this;
        var pV = this._events[UV];
        if (pV.bZ) pV.bZ !== eV || YV && !pV.once || JV && pV.context !== JV || yV(this, UV);
        else {
          for (var QV = 0, nV = [], wV = pV.length; QV < wV; QV++)(pV[QV].bZ !== eV || YV && !pV[QV].once || JV && pV[QV].context !== JV) && nV.push(pV[QV]);
          nV.length ? this._events[UV] = 1 === nV.length ? nV[0] : nV : yV(this, UV)
        }
        return this
      }, pV.prototype.bq = function(VV) {
        var eV;
        return VV ? (eV = xV ? xV + VV : VV, this._events[eV] && yV(this, eV)) : (this._events = new JV, this._eventsCount = 0), this
      }, pV.prototype.off = pV.prototype.removeListener, pV.prototype.addListener = pV.prototype.on, pV.prefixed = xV, pV.EventEmitter = pV, VV.exports = pV
    }(yV);
    var pV, QV, nV = UV(yV.exports);
    ! function(VV) {
      VV.assertEqual = VV => VV, VV.assertIs = function(VV) {}, VV.assertNever = function(VV) {
        throw new Error
      }, VV.arrayToEnum = VV => {
        const eV = {};
        for (const xV of VV) eV[xV] = xV;
        return eV
      }, VV.getValidEnumValues = eV => {
        const xV = VV.objectKeys(eV).filter((VV => "number" !== typeof eV[eV[VV]])),
          JV = {};
        for (const VV of xV) JV[VV] = eV[VV];
        return VV.objectValues(JV)
      }, VV.objectValues = eV => VV.objectKeys(eV).map((function(VV) {
        return eV[VV]
      })), VV.objectKeys = "function" === typeof Object.keys ? VV => Object.keys(VV) : VV => {
        const eV = [];
        for (const xV in VV) Object.prototype.hasOwnProperty.call(VV, xV) && eV.push(xV);
        return eV
      }, VV.find = (VV, eV) => {
        for (const xV of VV)
          if (eV(xV)) return xV
      }, VV.isInteger = "function" === typeof Number.isInteger ? VV => Number.isInteger(VV) : VV => "number" === typeof VV && isFinite(VV) && Math.floor(VV) === VV, VV.joinValues = function(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return VV.map((VV => "string" === typeof VV ? `'${VV}'` : VV)).join(eV)
      }, VV.jsonStringifyReplacer = (VV, eV) => "bigint" === typeof eV ? eV.toString() : eV
    }(pV || (pV = {})),
    function(VV) {
      VV.mergeShapes = (VV, eV) => ({
        ...VV,
        ...eV
      })
    }(QV || (QV = {}));
    const wV = pV.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      ZV = VV => {
        switch (typeof VV) {
          case "undefined":
            return wV.undefined;
          case "string":
            return wV.string;
          case "number":
            return isNaN(VV) ? wV.nan : wV.number;
          case "boolean":
            return wV.boolean;
          case "function":
            return wV.function;
          case "bigint":
            return wV.bigint;
          case "symbol":
            return wV.symbol;
          case "object":
            return Array.isArray(VV) ? wV.array : null === VV ? wV.null : VV.then && "function" === typeof VV.then && VV.catch && "function" === typeof VV.catch ? wV.promise : "undefined" !== typeof Map && VV instanceof Map ? wV.map : "undefined" !== typeof Set && VV instanceof Set ? wV.set : "undefined" !== typeof Date && VV instanceof Date ? wV.date : wV.object;
          default:
            return wV.unknown
        }
      },
      vV = pV.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class rV extends Error {
      constructor(VV) {
        var eV;
        super(), eV = this, this.issues = [], this.addIssue = VV => {
          this.issues = [...this.issues, VV]
        }, this.addIssues = function() {
          let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          eV.issues = [...eV.issues, ...VV]
        };
        const xV = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, xV) : this.__proto__ = xV, this.name = "ZodError", this.issues = VV
      }
      get errors() {
        return this.issues
      }
      format(VV) {
        const eV = VV || function(VV) {
            return VV.message
          },
          xV = {
            _errors: []
          },
          JV = VV => {
            for (const YV of VV.issues)
              if ("invalid_union" === YV.code) YV.unionErrors.map(JV);
              else if ("invalid_return_type" === YV.code) JV(YV.returnTypeError);
            else if ("invalid_arguments" === YV.code) JV(YV.argumentsError);
            else if (0 === YV.path.length) xV._errors.push(eV(YV));
            else {
              let VV = xV,
                JV = 0;
              for (; JV < YV.path.length;) {
                const xV = YV.path[JV];
                JV === YV.path.length - 1 ? (VV[xV] = VV[xV] || {
                  _errors: []
                }, VV[xV]._errors.push(eV(YV))) : VV[xV] = VV[xV] || {
                  _errors: []
                }, VV = VV[xV], JV++
              }
            }
          };
        return JV(this), xV
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, pV.jsonStringifyReplacer, 2)
      }
      get XZ() {
        return 0 === this.issues.length
      }
      flatten() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : VV => VV.message;
        const eV = {},
          xV = [];
        for (const JV of this.issues) JV.path.length > 0 ? (eV[JV.path[0]] = eV[JV.path[0]] || [], eV[JV.path[0]].push(VV(JV))) : xV.push(VV(JV));
        return {
          formErrors: xV,
          fieldErrors: eV
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    rV.create = VV => new rV(VV);
    const kV = (VV, eV) => {
      let xV;
      switch (VV.code) {
        case vV.invalid_type:
          xV = VV.received === wV.undefined ? "Required" : `Expected ${VV.expected}, received ${VV.received}`;
          break;
        case vV.invalid_literal:
          xV = `Invalid literal value, expected ${JSON.stringify(VV.expected,pV.jsonStringifyReplacer)}`;
          break;
        case vV.unrecognized_keys:
          xV = `Unrecognized key(s) in object: ${pV.joinValues(VV.keys,", ")}`;
          break;
        case vV.invalid_union:
          xV = "Invalid input";
          break;
        case vV.invalid_union_discriminator:
          xV = `Invalid discriminator value. Expected ${pV.joinValues(VV.options)}`;
          break;
        case vV.invalid_enum_value:
          xV = `Invalid enum value. Expected ${pV.joinValues(VV.options)}, received '${VV.received}'`;
          break;
        case vV.invalid_arguments:
          xV = "Invalid function arguments";
          break;
        case vV.invalid_return_type:
          xV = "Invalid function return type";
          break;
        case vV.invalid_date:
          xV = "Invalid date";
          break;
        case vV.invalid_string:
          "object" === typeof VV.validation ? "includes" in VV.validation ? (xV = `Invalid input: must include "${VV.validation.includes}"`, "number" === typeof VV.validation.position && (xV = `${xV} at one or more positions greater than or equal to ${VV.validation.position}`)) : "startsWith" in VV.validation ? xV = `Invalid input: must start with "${VV.validation.startsWith}"` : "endsWith" in VV.validation ? xV = `Invalid input: must end with "${VV.validation.endsWith}"` : pV.assertNever(VV.validation) : xV = "regex" !== VV.validation ? `Invalid ${VV.validation}` : "Invalid";
          break;
        case vV.too_small:
          xV = "array" === VV.type ? `Array must contain ${VV.exact?"exactly":VV.inclusive?"at least":"more than"} ${VV.minimum} element(s)` : "string" === VV.type ? `String must contain ${VV.exact?"exactly":VV.inclusive?"at least":"over"} ${VV.minimum} character(s)` : "number" === VV.type ? `Number must be ${VV.exact?"exactly equal to ":VV.inclusive?"greater than or equal to ":"greater than "}${VV.minimum}` : "date" === VV.type ? `Date must be ${VV.exact?"exactly equal to ":VV.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(VV.minimum))}` : "Invalid input";
          break;
        case vV.too_big:
          xV = "array" === VV.type ? `Array must contain ${VV.exact?"exactly":VV.inclusive?"at most":"less than"} ${VV.maximum} element(s)` : "string" === VV.type ? `String must contain ${VV.exact?"exactly":VV.inclusive?"at most":"under"} ${VV.maximum} character(s)` : "number" === VV.type ? `Number must be ${VV.exact?"exactly":VV.inclusive?"less than or equal to":"less than"} ${VV.maximum}` : "bigint" === VV.type ? `BigInt must be ${VV.exact?"exactly":VV.inclusive?"less than or equal to":"less than"} ${VV.maximum}` : "date" === VV.type ? `Date must be ${VV.exact?"exactly":VV.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(VV.maximum))}` : "Invalid input";
          break;
        case vV.custom:
          xV = "Invalid input";
          break;
        case vV.invalid_intersection_types:
          xV = "Intersection results could not be merged";
          break;
        case vV.not_multiple_of:
          xV = `Number must be a multiple of ${VV.multipleOf}`;
          break;
        case vV.not_finite:
          xV = "Number must be finite";
          break;
        default:
          xV = eV.defaultError, pV.assertNever(VV)
      }
      return {
        message: xV
      }
    };
    let bV = kV;

    function EV() {
      return bV
    }
    const BV = VV => {
      const {
        data: eV,
        path: xV,
        errorMaps: JV,
        issueData: YV
      } = VV, UV = [...xV, ...YV.path || []], yV = {
        ...YV,
        path: UV
      };
      let pV = "";
      const QV = JV.filter((VV => !!VV)).slice().reverse();
      for (const nV of QV) pV = nV(yV, {
        data: eV,
        defaultError: pV
      }).message;
      return {
        ...YV,
        path: UV,
        message: YV.message || pV
      }
    };

    function jV(VV, eV) {
      const xV = BV({
        issueData: eV,
        data: VV.data,
        path: VV.path,
        errorMaps: [VV.common.contextualErrorMap, VV.schemaErrorMap, EV(), kV].filter((VV => !!VV))
      });
      VV.common.issues.push(xV)
    }
    class qV {
      constructor() {
        this.value = "valid"
      }
      Jb() {
        "valid" === this.value && (this.value = "Jb")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(VV, eV) {
        const xV = [];
        for (const JV of eV) {
          if ("aborted" === JV.status) return tV;
          "Jb" === JV.status && VV.Jb(), xV.push(JV.value)
        }
        return {
          status: VV.value,
          value: xV
        }
      }
      static async mergeObjectAsync(VV, eV) {
        const xV = [];
        for (const JV of eV) xV.push({
          key: await JV.key,
          value: await JV.value
        });
        return qV.mergeObjectSync(VV, xV)
      }
      static mergeObjectSync(VV, eV) {
        const xV = {};
        for (const JV of eV) {
          const {
            key: eV,
            value: YV
          } = JV;
          if ("aborted" === eV.status) return tV;
          if ("aborted" === YV.status) return tV;
          "Jb" === eV.status && VV.Jb(), "Jb" === YV.status && VV.Jb(), "__proto__" === eV.value || "undefined" === typeof YV.value && !JV.alwaysSet || (xV[eV.value] = YV.value)
        }
        return {
          status: VV.value,
          value: xV
        }
      }
    }
    const tV = Object.freeze({
        status: "aborted"
      }),
      FV = VV => ({
        status: "Jb",
        value: VV
      }),
      TV = VV => ({
        status: "valid",
        value: VV
      }),
      PV = VV => "aborted" === VV.status,
      AV = VV => "Jb" === VV.status,
      NV = VV => "valid" === VV.status,
      XV = VV => "undefined" !== typeof Promise && VV instanceof Promise;
    var MV;
    ! function(VV) {
      VV.errToObj = VV => "string" === typeof VV ? {
        message: VV
      } : VV || {}, VV.toString = VV => "string" === typeof VV ? VV : null === VV || void 0 === VV ? void 0 : VV.message
    }(MV || (MV = {}));
    class zV {
      constructor(VV, eV, xV, JV) {
        this._cachedPath = [], this.parent = VV, this.data = eV, this._path = xV, this._key = JV
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const GV = (VV, eV) => {
      if (NV(eV)) return {
        success: !0,
        data: eV.value
      };
      if (!VV.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const eV = new rV(VV.common.issues);
          return this._error = eV, this._error
        }
      }
    };

    function WV(VV) {
      if (!VV) return {};
      const {
        errorMap: eV,
        invalid_type_error: xV,
        required_error: JV,
        description: YV
      } = VV;
      if (eV && (xV || JV)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (eV) return {
        errorMap: eV,
        description: YV
      };
      return {
        errorMap: (VV, eV) => "invalid_type" !== VV.code ? {
          message: eV.defaultError
        } : "undefined" === typeof eV.data ? {
          message: null !== JV && void 0 !== JV ? JV : eV.defaultError
        } : {
          message: null !== xV && void 0 !== xV ? xV : eV.defaultError
        },
        description: YV
      }
    }
    class RV {
      constructor(VV) {
        this.spa = this.safeParseAsync, this._def = VV, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(VV) {
        return ZV(VV.data)
      }
      _getOrReturnCtx(VV, eV) {
        return eV || {
          common: VV.parent.common,
          data: VV.data,
          parsedType: ZV(VV.data),
          schemaErrorMap: this._def.errorMap,
          path: VV.path,
          parent: VV.parent
        }
      }
      _processInputParams(VV) {
        return {
          status: new qV,
          ctx: {
            common: VV.parent.common,
            data: VV.data,
            parsedType: ZV(VV.data),
            schemaErrorMap: this._def.errorMap,
            path: VV.path,
            parent: VV.parent
          }
        }
      }
      _parseSync(VV) {
        const eV = this._parse(VV);
        if (XV(eV)) throw new Error("Synchronous parse encountered promise.");
        return eV
      }
      _parseAsync(VV) {
        const eV = this._parse(VV);
        return Promise.resolve(eV)
      }
      parse(VV, eV) {
        const xV = this.safeParse(VV, eV);
        if (xV.success) return xV.data;
        throw xV.error
      }
      safeParse(VV, eV) {
        var xV;
        const JV = {
            common: {
              issues: [],
              async: null !== (xV = null === eV || void 0 === eV ? void 0 : eV.async) && void 0 !== xV && xV,
              contextualErrorMap: null === eV || void 0 === eV ? void 0 : eV.errorMap
            },
            path: (null === eV || void 0 === eV ? void 0 : eV.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: VV,
            parsedType: ZV(VV)
          },
          YV = this._parseSync({
            data: VV,
            path: JV.path,
            parent: JV
          });
        return GV(JV, YV)
      }
      async parseAsync(VV, eV) {
        const xV = await this.safeParseAsync(VV, eV);
        if (xV.success) return xV.data;
        throw xV.error
      }
      async safeParseAsync(VV, eV) {
        const xV = {
            common: {
              issues: [],
              contextualErrorMap: null === eV || void 0 === eV ? void 0 : eV.errorMap,
              async: !0
            },
            path: (null === eV || void 0 === eV ? void 0 : eV.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: VV,
            parsedType: ZV(VV)
          },
          JV = this._parse({
            data: VV,
            path: xV.path,
            parent: xV
          }),
          YV = await (XV(JV) ? JV : Promise.resolve(JV));
        return GV(xV, YV)
      }
      refine(VV, eV) {
        const xV = VV => "string" === typeof eV || "undefined" === typeof eV ? {
          message: eV
        } : "function" === typeof eV ? eV(VV) : eV;
        return this._refinement(((eV, JV) => {
          const YV = VV(eV),
            UV = () => JV.addIssue({
              code: vV.custom,
              ...xV(eV)
            });
          return "undefined" !== typeof Promise && YV instanceof Promise ? YV.then((VV => !!VV || (UV(), !1))) : !!YV || (UV(), !1)
        }))
      }
      refinement(VV, eV) {
        return this._refinement(((xV, JV) => !!VV(xV) || (JV.addIssue("function" === typeof eV ? eV(xV, JV) : eV), !1)))
      }
      _refinement(VV) {
        return new te({
          schema: this,
          typeName: ge.ZodEffects,
          effect: {
            type: "refinement",
            refinement: VV
          }
        })
      }
      superRefine(VV) {
        return this._refinement(VV)
      }
      optional() {
        return Fe.create(this, this._def)
      }
      nullable() {
        return Te.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return ee.create(this, this._def)
      }
      promise() {
        return qe.create(this, this._def)
      }
      or(VV) {
        return Ye.create([this, VV], this._def)
      }
      and(VV) {
        return Qe.create(this, VV, this._def)
      }
      transform(VV) {
        return new te({
          ...WV(this._def),
          schema: this,
          typeName: ge.ZodEffects,
          effect: {
            type: "transform",
            transform: VV
          }
        })
      }
      default (VV) {
        const eV = "function" === typeof VV ? VV : () => VV;
        return new Pe({
          ...WV(this._def),
          innerType: this,
          defaultValue: eV,
          typeName: ge.ZodDefault
        })
      }
      brand() {
        return new Me({
          typeName: ge.ZodBranded,
          type: this,
          ...WV(this._def)
        })
      } catch (VV) {
        const eV = "function" === typeof VV ? VV : () => VV;
        return new Ae({
          ...WV(this._def),
          innerType: this,
          catchValue: eV,
          typeName: ge.ZodCatch
        })
      }
      describe(VV) {
        return new(0, this.constructor)({
          ...this._def,
          description: VV
        })
      }
      pipe(VV) {
        return ze.create(this, VV)
      }
      readonly() {
        return Ge.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const gV = /^c[^\s-]{8,}$/i,
      DV = /^[a-z][a-z0-9]*$/,
      iV = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      CV = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      aV = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let oV;
    const cV = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      hV = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class lV extends RV {
      _parse(VV) {
        this._def.coerce && (VV.data = String(VV.data));
        if (this._getType(VV) !== wV.string) {
          const eV = this._getOrReturnCtx(VV);
          return jV(eV, {
            code: vV.invalid_type,
            expected: wV.string,
            received: eV.parsedType
          }), tV
        }
        const eV = new qV;
        let xV;
        for (const QV of this._def.checks)
          if ("min" === QV.kind) VV.data.length < QV.value && (xV = this._getOrReturnCtx(VV, xV), jV(xV, {
            code: vV.too_small,
            minimum: QV.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: QV.message
          }), eV.Jb());
          else if ("max" === QV.kind) VV.data.length > QV.value && (xV = this._getOrReturnCtx(VV, xV), jV(xV, {
          code: vV.too_big,
          maximum: QV.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: QV.message
        }), eV.Jb());
        else if ("length" === QV.kind) {
          const JV = VV.data.length > QV.value,
            YV = VV.data.length < QV.value;
          (JV || YV) && (xV = this._getOrReturnCtx(VV, xV), JV ? jV(xV, {
            code: vV.too_big,
            maximum: QV.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: QV.message
          }) : YV && jV(xV, {
            code: vV.too_small,
            minimum: QV.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: QV.message
          }), eV.Jb())
        } else if ("email" === QV.kind) aV.test(VV.data) || (xV = this._getOrReturnCtx(VV, xV), jV(xV, {
          validation: "email",
          code: vV.invalid_string,
          message: QV.message
        }), eV.Jb());
        else if ("emoji" === QV.kind) oV || (oV = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), oV.test(VV.data) || (xV = this._getOrReturnCtx(VV, xV), jV(xV, {
          validation: "emoji",
          code: vV.invalid_string,
          message: QV.message
        }), eV.Jb());
        else if ("uuid" === QV.kind) CV.test(VV.data) || (xV = this._getOrReturnCtx(VV, xV), jV(xV, {
          validation: "uuid",
          code: vV.invalid_string,
          message: QV.message
        }), eV.Jb());
        else if ("cuid" === QV.kind) gV.test(VV.data) || (xV = this._getOrReturnCtx(VV, xV), jV(xV, {
          validation: "cuid",
          code: vV.invalid_string,
          message: QV.message
        }), eV.Jb());
        else if ("cuid2" === QV.kind) DV.test(VV.data) || (xV = this._getOrReturnCtx(VV, xV), jV(xV, {
          validation: "cuid2",
          code: vV.invalid_string,
          message: QV.message
        }), eV.Jb());
        else if ("ulid" === QV.kind) iV.test(VV.data) || (xV = this._getOrReturnCtx(VV, xV), jV(xV, {
          validation: "ulid",
          code: vV.invalid_string,
          message: QV.message
        }), eV.Jb());
        else if ("url" === QV.kind) try {
          new URL(VV.data)
        } catch (yV) {
          xV = this._getOrReturnCtx(VV, xV), jV(xV, {
            validation: "url",
            code: vV.invalid_string,
            message: QV.message
          }), eV.Jb()
        } else if ("regex" === QV.kind) {
          QV.regex.lastIndex = 0;
          QV.regex.test(VV.data) || (xV = this._getOrReturnCtx(VV, xV), jV(xV, {
            validation: "regex",
            code: vV.invalid_string,
            message: QV.message
          }), eV.Jb())
        } else if ("trim" === QV.kind) VV.data = VV.data.trim();
        else if ("includes" === QV.kind) VV.data.includes(QV.value, QV.position) || (xV = this._getOrReturnCtx(VV, xV), jV(xV, {
          code: vV.invalid_string,
          validation: {
            includes: QV.value,
            position: QV.position
          },
          message: QV.message
        }), eV.Jb());
        else if ("toLowerCase" === QV.kind) VV.data = VV.data.toLowerCase();
        else if ("toUpperCase" === QV.kind) VV.data = VV.data.toUpperCase();
        else if ("startsWith" === QV.kind) VV.data.startsWith(QV.value) || (xV = this._getOrReturnCtx(VV, xV), jV(xV, {
          code: vV.invalid_string,
          validation: {
            startsWith: QV.value
          },
          message: QV.message
        }), eV.Jb());
        else if ("endsWith" === QV.kind) VV.data.endsWith(QV.value) || (xV = this._getOrReturnCtx(VV, xV), jV(xV, {
          code: vV.invalid_string,
          validation: {
            endsWith: QV.value
          },
          message: QV.message
        }), eV.Jb());
        else if ("datetime" === QV.kind) {
          ((UV = QV).precision ? UV.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${UV.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${UV.precision}}Z$`) : 0 === UV.precision ? UV.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : UV.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(VV.data) || (xV = this._getOrReturnCtx(VV, xV), jV(xV, {
            code: vV.invalid_string,
            validation: "datetime",
            message: QV.message
          }), eV.Jb())
        } else "ip" === QV.kind ? (JV = VV.data, ("v4" !== (YV = QV.version) && YV || !cV.test(JV)) && ("v6" !== YV && YV || !hV.test(JV)) && (xV = this._getOrReturnCtx(VV, xV), jV(xV, {
          validation: "ip",
          code: vV.invalid_string,
          message: QV.message
        }), eV.Jb())) : pV.assertNever(QV);
        var JV, YV, UV;
        return {
          status: eV.value,
          value: VV.data
        }
      }
      _regex(VV, eV, xV) {
        return this.refinement((eV => VV.test(eV)), {
          validation: eV,
          code: vV.invalid_string,
          ...MV.errToObj(xV)
        })
      }
      _addCheck(VV) {
        return new lV({
          ...this._def,
          checks: [...this._def.checks, VV]
        })
      }
      email(VV) {
        return this._addCheck({
          kind: "email",
          ...MV.errToObj(VV)
        })
      }
      url(VV) {
        return this._addCheck({
          kind: "url",
          ...MV.errToObj(VV)
        })
      }
      emoji(VV) {
        return this._addCheck({
          kind: "emoji",
          ...MV.errToObj(VV)
        })
      }
      uuid(VV) {
        return this._addCheck({
          kind: "uuid",
          ...MV.errToObj(VV)
        })
      }
      cuid(VV) {
        return this._addCheck({
          kind: "cuid",
          ...MV.errToObj(VV)
        })
      }
      cuid2(VV) {
        return this._addCheck({
          kind: "cuid2",
          ...MV.errToObj(VV)
        })
      }
      ulid(VV) {
        return this._addCheck({
          kind: "ulid",
          ...MV.errToObj(VV)
        })
      }
      ip(VV) {
        return this._addCheck({
          kind: "ip",
          ...MV.errToObj(VV)
        })
      }
      datetime(VV) {
        var eV;
        return "string" === typeof VV ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: VV
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === VV || void 0 === VV ? void 0 : VV.precision) ? null : null === VV || void 0 === VV ? void 0 : VV.precision,
          offset: null !== (eV = null === VV || void 0 === VV ? void 0 : VV.offset) && void 0 !== eV && eV,
          ...MV.errToObj(null === VV || void 0 === VV ? void 0 : VV.message)
        })
      }
      regex(VV, eV) {
        return this._addCheck({
          kind: "regex",
          regex: VV,
          ...MV.errToObj(eV)
        })
      }
      includes(VV, eV) {
        return this._addCheck({
          kind: "includes",
          value: VV,
          position: null === eV || void 0 === eV ? void 0 : eV.position,
          ...MV.errToObj(null === eV || void 0 === eV ? void 0 : eV.message)
        })
      }
      startsWith(VV, eV) {
        return this._addCheck({
          kind: "startsWith",
          value: VV,
          ...MV.errToObj(eV)
        })
      }
      endsWith(VV, eV) {
        return this._addCheck({
          kind: "endsWith",
          value: VV,
          ...MV.errToObj(eV)
        })
      }
      min(VV, eV) {
        return this._addCheck({
          kind: "min",
          value: VV,
          ...MV.errToObj(eV)
        })
      }
      max(VV, eV) {
        return this._addCheck({
          kind: "max",
          value: VV,
          ...MV.errToObj(eV)
        })
      }
      length(VV, eV) {
        return this._addCheck({
          kind: "length",
          value: VV,
          ...MV.errToObj(eV)
        })
      }
      nonempty(VV) {
        return this.min(1, MV.errToObj(VV))
      }
      trim() {
        return new lV({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new lV({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new lV({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((VV => "datetime" === VV.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((VV => "email" === VV.kind))
      }
      get isURL() {
        return !!this._def.checks.find((VV => "url" === VV.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((VV => "emoji" === VV.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((VV => "uuid" === VV.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((VV => "cuid" === VV.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((VV => "cuid2" === VV.kind))
      }
      get isULID() {
        return !!this._def.checks.find((VV => "ulid" === VV.kind))
      }
      get isIP() {
        return !!this._def.checks.find((VV => "ip" === VV.kind))
      }
      get minLength() {
        let VV = null;
        for (const eV of this._def.checks) "min" === eV.kind && (null === VV || eV.value > VV) && (VV = eV.value);
        return VV
      }
      get maxLength() {
        let VV = null;
        for (const eV of this._def.checks) "max" === eV.kind && (null === VV || eV.value < VV) && (VV = eV.value);
        return VV
      }
    }

    function LV(VV, eV) {
      const xV = (VV.toString().split(".")[1] || "").length,
        JV = (eV.toString().split(".")[1] || "").length,
        YV = xV > JV ? xV : JV;
      return parseInt(VV.toFixed(YV).replace(".", "")) % parseInt(eV.toFixed(YV).replace(".", "")) / Math.pow(10, YV)
    }
    lV.create = VV => {
      var eV;
      return new lV({
        checks: [],
        typeName: ge.ZodString,
        coerce: null !== (eV = null === VV || void 0 === VV ? void 0 : VV.coerce) && void 0 !== eV && eV,
        ...WV(VV)
      })
    };
    class fV extends RV {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(VV) {
        this._def.coerce && (VV.data = Number(VV.data));
        if (this._getType(VV) !== wV.number) {
          const eV = this._getOrReturnCtx(VV);
          return jV(eV, {
            code: vV.invalid_type,
            expected: wV.number,
            received: eV.parsedType
          }), tV
        }
        let eV;
        const xV = new qV;
        for (const JV of this._def.checks)
          if ("int" === JV.kind) pV.isInteger(VV.data) || (eV = this._getOrReturnCtx(VV, eV), jV(eV, {
            code: vV.invalid_type,
            expected: "integer",
            received: "float",
            message: JV.message
          }), xV.Jb());
          else if ("min" === JV.kind) {
          (JV.inclusive ? VV.data < JV.value : VV.data <= JV.value) && (eV = this._getOrReturnCtx(VV, eV), jV(eV, {
            code: vV.too_small,
            minimum: JV.value,
            type: "number",
            inclusive: JV.inclusive,
            exact: !1,
            message: JV.message
          }), xV.Jb())
        } else if ("max" === JV.kind) {
          (JV.inclusive ? VV.data > JV.value : VV.data >= JV.value) && (eV = this._getOrReturnCtx(VV, eV), jV(eV, {
            code: vV.too_big,
            maximum: JV.value,
            type: "number",
            inclusive: JV.inclusive,
            exact: !1,
            message: JV.message
          }), xV.Jb())
        } else "multipleOf" === JV.kind ? 0 !== LV(VV.data, JV.value) && (eV = this._getOrReturnCtx(VV, eV), jV(eV, {
          code: vV.not_multiple_of,
          multipleOf: JV.value,
          message: JV.message
        }), xV.Jb()) : "finite" === JV.kind ? Number.isFinite(VV.data) || (eV = this._getOrReturnCtx(VV, eV), jV(eV, {
          code: vV.not_finite,
          message: JV.message
        }), xV.Jb()) : pV.assertNever(JV);
        return {
          status: xV.value,
          value: VV.data
        }
      }
      gte(VV, eV) {
        return this.setLimit("min", VV, !0, MV.toString(eV))
      }
      gt(VV, eV) {
        return this.setLimit("min", VV, !1, MV.toString(eV))
      }
      lte(VV, eV) {
        return this.setLimit("max", VV, !0, MV.toString(eV))
      }
      lt(VV, eV) {
        return this.setLimit("max", VV, !1, MV.toString(eV))
      }
      setLimit(VV, eV, xV, JV) {
        return new fV({
          ...this._def,
          checks: [...this._def.checks, {
            kind: VV,
            value: eV,
            inclusive: xV,
            message: MV.toString(JV)
          }]
        })
      }
      _addCheck(VV) {
        return new fV({
          ...this._def,
          checks: [...this._def.checks, VV]
        })
      }
      int(VV) {
        return this._addCheck({
          kind: "int",
          message: MV.toString(VV)
        })
      }
      positive(VV) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: MV.toString(VV)
        })
      }
      negative(VV) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: MV.toString(VV)
        })
      }
      nonpositive(VV) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: MV.toString(VV)
        })
      }
      nonnegative(VV) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: MV.toString(VV)
        })
      }
      multipleOf(VV, eV) {
        return this._addCheck({
          kind: "multipleOf",
          value: VV,
          message: MV.toString(eV)
        })
      }
      finite(VV) {
        return this._addCheck({
          kind: "finite",
          message: MV.toString(VV)
        })
      }
      safe(VV) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: MV.toString(VV)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: MV.toString(VV)
        })
      }
      get minValue() {
        let VV = null;
        for (const eV of this._def.checks) "min" === eV.kind && (null === VV || eV.value > VV) && (VV = eV.value);
        return VV
      }
      get maxValue() {
        let VV = null;
        for (const eV of this._def.checks) "max" === eV.kind && (null === VV || eV.value < VV) && (VV = eV.value);
        return VV
      }
      get isInt() {
        return !!this._def.checks.find((VV => "int" === VV.kind || "multipleOf" === VV.kind && pV.isInteger(VV.value)))
      }
      get isFinite() {
        let VV = null,
          eV = null;
        for (const xV of this._def.checks) {
          if ("finite" === xV.kind || "int" === xV.kind || "multipleOf" === xV.kind) return !0;
          "min" === xV.kind ? (null === eV || xV.value > eV) && (eV = xV.value) : "max" === xV.kind && (null === VV || xV.value < VV) && (VV = xV.value)
        }
        return Number.isFinite(eV) && Number.isFinite(VV)
      }
    }
    fV.create = VV => new fV({
      checks: [],
      typeName: ge.ZodNumber,
      coerce: (null === VV || void 0 === VV ? void 0 : VV.coerce) || !1,
      ...WV(VV)
    });
    class mV extends RV {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(VV) {
        this._def.coerce && (VV.data = BigInt(VV.data));
        if (this._getType(VV) !== wV.bigint) {
          const eV = this._getOrReturnCtx(VV);
          return jV(eV, {
            code: vV.invalid_type,
            expected: wV.bigint,
            received: eV.parsedType
          }), tV
        }
        let eV;
        const xV = new qV;
        for (const JV of this._def.checks)
          if ("min" === JV.kind) {
            (JV.inclusive ? VV.data < JV.value : VV.data <= JV.value) && (eV = this._getOrReturnCtx(VV, eV), jV(eV, {
              code: vV.too_small,
              type: "bigint",
              minimum: JV.value,
              inclusive: JV.inclusive,
              message: JV.message
            }), xV.Jb())
          } else if ("max" === JV.kind) {
          (JV.inclusive ? VV.data > JV.value : VV.data >= JV.value) && (eV = this._getOrReturnCtx(VV, eV), jV(eV, {
            code: vV.too_big,
            type: "bigint",
            maximum: JV.value,
            inclusive: JV.inclusive,
            message: JV.message
          }), xV.Jb())
        } else "multipleOf" === JV.kind ? VV.data % JV.value !== BigInt(0) && (eV = this._getOrReturnCtx(VV, eV), jV(eV, {
          code: vV.not_multiple_of,
          multipleOf: JV.value,
          message: JV.message
        }), xV.Jb()) : pV.assertNever(JV);
        return {
          status: xV.value,
          value: VV.data
        }
      }
      gte(VV, eV) {
        return this.setLimit("min", VV, !0, MV.toString(eV))
      }
      gt(VV, eV) {
        return this.setLimit("min", VV, !1, MV.toString(eV))
      }
      lte(VV, eV) {
        return this.setLimit("max", VV, !0, MV.toString(eV))
      }
      lt(VV, eV) {
        return this.setLimit("max", VV, !1, MV.toString(eV))
      }
      setLimit(VV, eV, xV, JV) {
        return new mV({
          ...this._def,
          checks: [...this._def.checks, {
            kind: VV,
            value: eV,
            inclusive: xV,
            message: MV.toString(JV)
          }]
        })
      }
      _addCheck(VV) {
        return new mV({
          ...this._def,
          checks: [...this._def.checks, VV]
        })
      }
      positive(VV) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: MV.toString(VV)
        })
      }
      negative(VV) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: MV.toString(VV)
        })
      }
      nonpositive(VV) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: MV.toString(VV)
        })
      }
      nonnegative(VV) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: MV.toString(VV)
        })
      }
      multipleOf(VV, eV) {
        return this._addCheck({
          kind: "multipleOf",
          value: VV,
          message: MV.toString(eV)
        })
      }
      get minValue() {
        let VV = null;
        for (const eV of this._def.checks) "min" === eV.kind && (null === VV || eV.value > VV) && (VV = eV.value);
        return VV
      }
      get maxValue() {
        let VV = null;
        for (const eV of this._def.checks) "max" === eV.kind && (null === VV || eV.value < VV) && (VV = eV.value);
        return VV
      }
    }
    mV.create = VV => {
      var eV;
      return new mV({
        checks: [],
        typeName: ge.ZodBigInt,
        coerce: null !== (eV = null === VV || void 0 === VV ? void 0 : VV.coerce) && void 0 !== eV && eV,
        ...WV(VV)
      })
    };
    class KV extends RV {
      _parse(VV) {
        this._def.coerce && (VV.data = Boolean(VV.data));
        if (this._getType(VV) !== wV.boolean) {
          const eV = this._getOrReturnCtx(VV);
          return jV(eV, {
            code: vV.invalid_type,
            expected: wV.boolean,
            received: eV.parsedType
          }), tV
        }
        return TV(VV.data)
      }
    }
    KV.create = VV => new KV({
      typeName: ge.ZodBoolean,
      coerce: (null === VV || void 0 === VV ? void 0 : VV.coerce) || !1,
      ...WV(VV)
    });
    class HV extends RV {
      _parse(VV) {
        this._def.coerce && (VV.data = new Date(VV.data));
        if (this._getType(VV) !== wV.date) {
          const eV = this._getOrReturnCtx(VV);
          return jV(eV, {
            code: vV.invalid_type,
            expected: wV.date,
            received: eV.parsedType
          }), tV
        }
        if (isNaN(VV.data.getTime())) {
          return jV(this._getOrReturnCtx(VV), {
            code: vV.invalid_date
          }), tV
        }
        const eV = new qV;
        let xV;
        for (const JV of this._def.checks) "min" === JV.kind ? VV.data.getTime() < JV.value && (xV = this._getOrReturnCtx(VV, xV), jV(xV, {
          code: vV.too_small,
          message: JV.message,
          inclusive: !0,
          exact: !1,
          minimum: JV.value,
          type: "date"
        }), eV.Jb()) : "max" === JV.kind ? VV.data.getTime() > JV.value && (xV = this._getOrReturnCtx(VV, xV), jV(xV, {
          code: vV.too_big,
          message: JV.message,
          inclusive: !0,
          exact: !1,
          maximum: JV.value,
          type: "date"
        }), eV.Jb()) : pV.assertNever(JV);
        return {
          status: eV.value,
          value: new Date(VV.data.getTime())
        }
      }
      _addCheck(VV) {
        return new HV({
          ...this._def,
          checks: [...this._def.checks, VV]
        })
      }
      min(VV, eV) {
        return this._addCheck({
          kind: "min",
          value: VV.getTime(),
          message: MV.toString(eV)
        })
      }
      max(VV, eV) {
        return this._addCheck({
          kind: "max",
          value: VV.getTime(),
          message: MV.toString(eV)
        })
      }
      get minDate() {
        let VV = null;
        for (const eV of this._def.checks) "min" === eV.kind && (null === VV || eV.value > VV) && (VV = eV.value);
        return null != VV ? new Date(VV) : null
      }
      get maxDate() {
        let VV = null;
        for (const eV of this._def.checks) "max" === eV.kind && (null === VV || eV.value < VV) && (VV = eV.value);
        return null != VV ? new Date(VV) : null
      }
    }
    HV.create = VV => new HV({
      checks: [],
      coerce: (null === VV || void 0 === VV ? void 0 : VV.coerce) || !1,
      typeName: ge.ZodDate,
      ...WV(VV)
    });
    class uV extends RV {
      _parse(VV) {
        if (this._getType(VV) !== wV.symbol) {
          const eV = this._getOrReturnCtx(VV);
          return jV(eV, {
            code: vV.invalid_type,
            expected: wV.symbol,
            received: eV.parsedType
          }), tV
        }
        return TV(VV.data)
      }
    }
    uV.create = VV => new uV({
      typeName: ge.ZodSymbol,
      ...WV(VV)
    });
    class sV extends RV {
      _parse(VV) {
        if (this._getType(VV) !== wV.undefined) {
          const eV = this._getOrReturnCtx(VV);
          return jV(eV, {
            code: vV.invalid_type,
            expected: wV.undefined,
            received: eV.parsedType
          }), tV
        }
        return TV(VV.data)
      }
    }
    sV.create = VV => new sV({
      typeName: ge.ZodUndefined,
      ...WV(VV)
    });
    class SV extends RV {
      _parse(VV) {
        if (this._getType(VV) !== wV.null) {
          const eV = this._getOrReturnCtx(VV);
          return jV(eV, {
            code: vV.invalid_type,
            expected: wV.null,
            received: eV.parsedType
          }), tV
        }
        return TV(VV.data)
      }
    }
    SV.create = VV => new SV({
      typeName: ge.ZodNull,
      ...WV(VV)
    });
    class IV extends RV {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(VV) {
        return TV(VV.data)
      }
    }
    IV.create = VV => new IV({
      typeName: ge.ZodAny,
      ...WV(VV)
    });
    class dV extends RV {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(VV) {
        return TV(VV.data)
      }
    }
    dV.create = VV => new dV({
      typeName: ge.ZodUnknown,
      ...WV(VV)
    });
    class OV extends RV {
      _parse(VV) {
        const eV = this._getOrReturnCtx(VV);
        return jV(eV, {
          code: vV.invalid_type,
          expected: wV.never,
          received: eV.parsedType
        }), tV
      }
    }
    OV.create = VV => new OV({
      typeName: ge.ZodNever,
      ...WV(VV)
    });
    class Ve extends RV {
      _parse(VV) {
        if (this._getType(VV) !== wV.undefined) {
          const eV = this._getOrReturnCtx(VV);
          return jV(eV, {
            code: vV.invalid_type,
            expected: wV.void,
            received: eV.parsedType
          }), tV
        }
        return TV(VV.data)
      }
    }
    Ve.create = VV => new Ve({
      typeName: ge.ZodVoid,
      ...WV(VV)
    });
    class ee extends RV {
      _parse(VV) {
        const {
          ctx: eV,
          status: xV
        } = this._processInputParams(VV), JV = this._def;
        if (eV.parsedType !== wV.array) return jV(eV, {
          code: vV.invalid_type,
          expected: wV.array,
          received: eV.parsedType
        }), tV;
        if (null !== JV.exactLength) {
          const VV = eV.data.length > JV.exactLength.value,
            YV = eV.data.length < JV.exactLength.value;
          (VV || YV) && (jV(eV, {
            code: VV ? vV.too_big : vV.too_small,
            minimum: YV ? JV.exactLength.value : void 0,
            maximum: VV ? JV.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: JV.exactLength.message
          }), xV.Jb())
        }
        if (null !== JV.minLength && eV.data.length < JV.minLength.value && (jV(eV, {
            code: vV.too_small,
            minimum: JV.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: JV.minLength.message
          }), xV.Jb()), null !== JV.maxLength && eV.data.length > JV.maxLength.value && (jV(eV, {
            code: vV.too_big,
            maximum: JV.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: JV.maxLength.message
          }), xV.Jb()), eV.common.async) return Promise.all([...eV.data].map(((VV, xV) => JV.type._parseAsync(new zV(eV, VV, eV.path, xV))))).then((VV => qV.mergeArray(xV, VV)));
        const YV = [...eV.data].map(((VV, xV) => JV.type._parseSync(new zV(eV, VV, eV.path, xV))));
        return qV.mergeArray(xV, YV)
      }
      get element() {
        return this._def.type
      }
      min(VV, eV) {
        return new ee({
          ...this._def,
          minLength: {
            value: VV,
            message: MV.toString(eV)
          }
        })
      }
      max(VV, eV) {
        return new ee({
          ...this._def,
          maxLength: {
            value: VV,
            message: MV.toString(eV)
          }
        })
      }
      length(VV, eV) {
        return new ee({
          ...this._def,
          exactLength: {
            value: VV,
            message: MV.toString(eV)
          }
        })
      }
      nonempty(VV) {
        return this.min(1, VV)
      }
    }

    function xe(VV) {
      if (VV instanceof Je) {
        const eV = {};
        for (const xV in VV.shape) {
          const JV = VV.shape[xV];
          eV[xV] = Fe.create(xe(JV))
        }
        return new Je({
          ...VV._def,
          shape: () => eV
        })
      }
      return VV instanceof ee ? new ee({
        ...VV._def,
        type: xe(VV.element)
      }) : VV instanceof Fe ? Fe.create(xe(VV.unwrap())) : VV instanceof Te ? Te.create(xe(VV.unwrap())) : VV instanceof ne ? ne.create(VV.items.map((VV => xe(VV)))) : VV
    }
    ee.create = (VV, eV) => new ee({
      type: VV,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: ge.ZodArray,
      ...WV(eV)
    });
    class Je extends RV {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const VV = this._def.shape(),
          eV = pV.objectKeys(VV);
        return this._cached = {
          shape: VV,
          keys: eV
        }
      }
      _parse(VV) {
        if (this._getType(VV) !== wV.object) {
          const eV = this._getOrReturnCtx(VV);
          return jV(eV, {
            code: vV.invalid_type,
            expected: wV.object,
            received: eV.parsedType
          }), tV
        }
        const {
          status: eV,
          ctx: xV
        } = this._processInputParams(VV), {
          shape: JV,
          keys: YV
        } = this._getCached(), UV = [];
        if (!(this._def.catchall instanceof OV && "strip" === this._def.unknownKeys))
          for (const pV in xV.data) YV.includes(pV) || UV.push(pV);
        const yV = [];
        for (const pV of YV) {
          const VV = JV[pV],
            eV = xV.data[pV];
          yV.push({
            key: {
              status: "valid",
              value: pV
            },
            value: VV._parse(new zV(xV, eV, xV.path, pV)),
            alwaysSet: pV in xV.data
          })
        }
        if (this._def.catchall instanceof OV) {
          const VV = this._def.unknownKeys;
          if ("passthrough" === VV)
            for (const eV of UV) yV.push({
              key: {
                status: "valid",
                value: eV
              },
              value: {
                status: "valid",
                value: xV.data[eV]
              }
            });
          else if ("strict" === VV) UV.length > 0 && (jV(xV, {
            code: vV.unrecognized_keys,
            keys: UV
          }), eV.Jb());
          else if ("strip" !== VV) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const VV = this._def.catchall;
          for (const eV of UV) {
            const JV = xV.data[eV];
            yV.push({
              key: {
                status: "valid",
                value: eV
              },
              value: VV._parse(new zV(xV, JV, xV.path, eV)),
              alwaysSet: eV in xV.data
            })
          }
        }
        return xV.common.async ? Promise.resolve().then((async () => {
          const VV = [];
          for (const eV of yV) {
            const xV = await eV.key;
            VV.push({
              key: xV,
              value: await eV.value,
              alwaysSet: eV.alwaysSet
            })
          }
          return VV
        })).then((VV => qV.mergeObjectSync(eV, VV))) : qV.mergeObjectSync(eV, yV)
      }
      get shape() {
        return this._def.shape()
      }
      strict(VV) {
        return MV.errToObj, new Je({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== VV ? {
            errorMap: (eV, xV) => {
              var JV, YV, UV, yV;
              const pV = null !== (UV = null === (YV = (JV = this._def).errorMap) || void 0 === YV ? void 0 : YV.call(JV, eV, xV).message) && void 0 !== UV ? UV : xV.defaultError;
              return "unrecognized_keys" === eV.code ? {
                message: null !== (yV = MV.errToObj(VV).message) && void 0 !== yV ? yV : pV
              } : {
                message: pV
              }
            }
          } : {}
        })
      }
      strip() {
        return new Je({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new Je({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(VV) {
        return new Je({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...VV
          })
        })
      }
      merge(VV) {
        return new Je({
          unknownKeys: VV._def.unknownKeys,
          catchall: VV._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...VV._def.shape()
          }),
          typeName: ge.ZodObject
        })
      }
      setKey(VV, eV) {
        return this.augment({
          [VV]: eV
        })
      }
      catchall(VV) {
        return new Je({
          ...this._def,
          catchall: VV
        })
      }
      Pr(VV) {
        const eV = {};
        return pV.objectKeys(VV).forEach((xV => {
          VV[xV] && this.shape[xV] && (eV[xV] = this.shape[xV])
        })), new Je({
          ...this._def,
          shape: () => eV
        })
      }
      omit(VV) {
        const eV = {};
        return pV.objectKeys(this.shape).forEach((xV => {
          VV[xV] || (eV[xV] = this.shape[xV])
        })), new Je({
          ...this._def,
          shape: () => eV
        })
      }
      deepPartial() {
        return xe(this)
      }
      partial(VV) {
        const eV = {};
        return pV.objectKeys(this.shape).forEach((xV => {
          const JV = this.shape[xV];
          VV && !VV[xV] ? eV[xV] = JV : eV[xV] = JV.optional()
        })), new Je({
          ...this._def,
          shape: () => eV
        })
      }
      required(VV) {
        const eV = {};
        return pV.objectKeys(this.shape).forEach((xV => {
          if (VV && !VV[xV]) eV[xV] = this.shape[xV];
          else {
            let VV = this.shape[xV];
            for (; VV instanceof Fe;) VV = VV._def.innerType;
            eV[xV] = VV
          }
        })), new Je({
          ...this._def,
          shape: () => eV
        })
      }
      keyof() {
        return Ee(pV.objectKeys(this.shape))
      }
    }
    Je.create = (VV, eV) => new Je({
      shape: () => VV,
      unknownKeys: "strip",
      catchall: OV.create(),
      typeName: ge.ZodObject,
      ...WV(eV)
    }), Je.strictCreate = (VV, eV) => new Je({
      shape: () => VV,
      unknownKeys: "strict",
      catchall: OV.create(),
      typeName: ge.ZodObject,
      ...WV(eV)
    }), Je.lazycreate = (VV, eV) => new Je({
      shape: VV,
      unknownKeys: "strip",
      catchall: OV.create(),
      typeName: ge.ZodObject,
      ...WV(eV)
    });
    class Ye extends RV {
      _parse(VV) {
        const {
          ctx: eV
        } = this._processInputParams(VV), xV = this._def.options;
        if (eV.common.async) return Promise.all(xV.map((async VV => {
          const xV = {
            ...eV,
            common: {
              ...eV.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await VV._parseAsync({
              data: eV.data,
              path: eV.path,
              parent: xV
            }),
            ctx: xV
          }
        }))).then((function(VV) {
          for (const eV of VV)
            if ("valid" === eV.result.status) return eV.result;
          for (const JV of VV)
            if ("Jb" === JV.result.status) return eV.common.issues.push(...JV.ctx.common.issues), JV.result;
          const xV = VV.map((VV => new rV(VV.ctx.common.issues)));
          return jV(eV, {
            code: vV.invalid_union,
            unionErrors: xV
          }), tV
        }));
        {
          let VV;
          const JV = [];
          for (const UV of xV) {
            const xV = {
                ...eV,
                common: {
                  ...eV.common,
                  issues: []
                },
                parent: null
              },
              YV = UV._parseSync({
                data: eV.data,
                path: eV.path,
                parent: xV
              });
            if ("valid" === YV.status) return YV;
            "Jb" !== YV.status || VV || (VV = {
              result: YV,
              ctx: xV
            }), xV.common.issues.length && JV.push(xV.common.issues)
          }
          if (VV) return eV.common.issues.push(...VV.ctx.common.issues), VV.result;
          const YV = JV.map((VV => new rV(VV)));
          return jV(eV, {
            code: vV.invalid_union,
            unionErrors: YV
          }), tV
        }
      }
      get options() {
        return this._def.options
      }
    }
    Ye.create = (VV, eV) => new Ye({
      options: VV,
      typeName: ge.ZodUnion,
      ...WV(eV)
    });
    const Ue = VV => VV instanceof ke ? Ue(VV.schema) : VV instanceof te ? Ue(VV.innerType()) : VV instanceof be ? [VV.value] : VV instanceof Be ? VV.options : VV instanceof je ? Object.keys(VV.enum) : VV instanceof Pe ? Ue(VV._def.innerType) : VV instanceof sV ? [void 0] : VV instanceof SV ? [null] : null;
    class ye extends RV {
      _parse(VV) {
        const {
          ctx: eV
        } = this._processInputParams(VV);
        if (eV.parsedType !== wV.object) return jV(eV, {
          code: vV.invalid_type,
          expected: wV.object,
          received: eV.parsedType
        }), tV;
        const xV = this.discriminator,
          JV = eV.data[xV],
          YV = this.optionsMap.get(JV);
        return YV ? eV.common.async ? YV._parseAsync({
          data: eV.data,
          path: eV.path,
          parent: eV
        }) : YV._parseSync({
          data: eV.data,
          path: eV.path,
          parent: eV
        }) : (jV(eV, {
          code: vV.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [xV]
        }), tV)
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
      static create(VV, eV, xV) {
        const JV = new Map;
        for (const YV of eV) {
          const eV = Ue(YV.shape[VV]);
          if (!eV) throw new Error(`A discriminator value for key \`${VV}\` could not be extracted from all schema options`);
          for (const xV of eV) {
            if (JV.has(xV)) throw new Error(`Discriminator property ${String(VV)} has duplicate value ${String(xV)}`);
            JV.set(xV, YV)
          }
        }
        return new ye({
          typeName: ge.ZodDiscriminatedUnion,
          discriminator: VV,
          options: eV,
          optionsMap: JV,
          ...WV(xV)
        })
      }
    }

    function pe(VV, eV) {
      const xV = ZV(VV),
        JV = ZV(eV);
      if (VV === eV) return {
        valid: !0,
        data: VV
      };
      if (xV === wV.object && JV === wV.object) {
        const xV = pV.objectKeys(eV),
          JV = pV.objectKeys(VV).filter((VV => -1 !== xV.indexOf(VV))),
          YV = {
            ...VV,
            ...eV
          };
        for (const UV of JV) {
          const xV = pe(VV[UV], eV[UV]);
          if (!xV.valid) return {
            valid: !1
          };
          YV[UV] = xV.data
        }
        return {
          valid: !0,
          data: YV
        }
      }
      if (xV === wV.array && JV === wV.array) {
        if (VV.length !== eV.length) return {
          valid: !1
        };
        const xV = [];
        for (let JV = 0; JV < VV.length; JV++) {
          const YV = pe(VV[JV], eV[JV]);
          if (!YV.valid) return {
            valid: !1
          };
          xV.push(YV.data)
        }
        return {
          valid: !0,
          data: xV
        }
      }
      return xV === wV.date && JV === wV.date && +VV === +eV ? {
        valid: !0,
        data: VV
      } : {
        valid: !1
      }
    }
    class Qe extends RV {
      _parse(VV) {
        const {
          status: eV,
          ctx: xV
        } = this._processInputParams(VV), JV = (VV, JV) => {
          if (PV(VV) || PV(JV)) return tV;
          const YV = pe(VV.value, JV.value);
          return YV.valid ? ((AV(VV) || AV(JV)) && eV.Jb(), {
            status: eV.value,
            value: YV.data
          }) : (jV(xV, {
            code: vV.invalid_intersection_types
          }), tV)
        };
        return xV.common.async ? Promise.all([this._def.left._parseAsync({
          data: xV.data,
          path: xV.path,
          parent: xV
        }), this._def.right._parseAsync({
          data: xV.data,
          path: xV.path,
          parent: xV
        })]).then((VV => {
          let [eV, xV] = VV;
          return JV(eV, xV)
        })) : JV(this._def.left._parseSync({
          data: xV.data,
          path: xV.path,
          parent: xV
        }), this._def.right._parseSync({
          data: xV.data,
          path: xV.path,
          parent: xV
        }))
      }
    }
    Qe.create = (VV, eV, xV) => new Qe({
      left: VV,
      right: eV,
      typeName: ge.ZodIntersection,
      ...WV(xV)
    });
    class ne extends RV {
      _parse(VV) {
        const {
          status: eV,
          ctx: xV
        } = this._processInputParams(VV);
        if (xV.parsedType !== wV.array) return jV(xV, {
          code: vV.invalid_type,
          expected: wV.array,
          received: xV.parsedType
        }), tV;
        if (xV.data.length < this._def.items.length) return jV(xV, {
          code: vV.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), tV;
        !this._def.rest && xV.data.length > this._def.items.length && (jV(xV, {
          code: vV.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), eV.Jb());
        const JV = [...xV.data].map(((VV, eV) => {
          const JV = this._def.items[eV] || this._def.rest;
          return JV ? JV._parse(new zV(xV, VV, xV.path, eV)) : null
        })).filter((VV => !!VV));
        return xV.common.async ? Promise.all(JV).then((VV => qV.mergeArray(eV, VV))) : qV.mergeArray(eV, JV)
      }
      get items() {
        return this._def.items
      }
      rest(VV) {
        return new ne({
          ...this._def,
          rest: VV
        })
      }
    }
    ne.create = (VV, eV) => {
      if (!Array.isArray(VV)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new ne({
        items: VV,
        typeName: ge.ZodTuple,
        rest: null,
        ...WV(eV)
      })
    };
    class we extends RV {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(VV) {
        const {
          status: eV,
          ctx: xV
        } = this._processInputParams(VV);
        if (xV.parsedType !== wV.object) return jV(xV, {
          code: vV.invalid_type,
          expected: wV.object,
          received: xV.parsedType
        }), tV;
        const JV = [],
          YV = this._def.keyType,
          UV = this._def.valueType;
        for (const yV in xV.data) JV.push({
          key: YV._parse(new zV(xV, yV, xV.path, yV)),
          value: UV._parse(new zV(xV, xV.data[yV], xV.path, yV))
        });
        return xV.common.async ? qV.mergeObjectAsync(eV, JV) : qV.mergeObjectSync(eV, JV)
      }
      get element() {
        return this._def.valueType
      }
      static create(VV, eV, xV) {
        return new we(eV instanceof RV ? {
          keyType: VV,
          valueType: eV,
          typeName: ge.ZodRecord,
          ...WV(xV)
        } : {
          keyType: lV.create(),
          valueType: VV,
          typeName: ge.ZodRecord,
          ...WV(eV)
        })
      }
    }
    class Ze extends RV {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(VV) {
        const {
          status: eV,
          ctx: xV
        } = this._processInputParams(VV);
        if (xV.parsedType !== wV.map) return jV(xV, {
          code: vV.invalid_type,
          expected: wV.map,
          received: xV.parsedType
        }), tV;
        const JV = this._def.keyType,
          YV = this._def.valueType,
          UV = [...xV.data.entries()].map(((VV, eV) => {
            let [UV, yV] = VV;
            return {
              key: JV._parse(new zV(xV, UV, xV.path, [eV, "key"])),
              value: YV._parse(new zV(xV, yV, xV.path, [eV, "value"]))
            }
          }));
        if (xV.common.async) {
          const VV = new Map;
          return Promise.resolve().then((async () => {
            for (const xV of UV) {
              const JV = await xV.key,
                YV = await xV.value;
              if ("aborted" === JV.status || "aborted" === YV.status) return tV;
              "Jb" !== JV.status && "Jb" !== YV.status || eV.Jb(), VV.set(JV.value, YV.value)
            }
            return {
              status: eV.value,
              value: VV
            }
          }))
        } {
          const VV = new Map;
          for (const xV of UV) {
            const JV = xV.key,
              YV = xV.value;
            if ("aborted" === JV.status || "aborted" === YV.status) return tV;
            "Jb" !== JV.status && "Jb" !== YV.status || eV.Jb(), VV.set(JV.value, YV.value)
          }
          return {
            status: eV.value,
            value: VV
          }
        }
      }
    }
    Ze.create = (VV, eV, xV) => new Ze({
      valueType: eV,
      keyType: VV,
      typeName: ge.ZodMap,
      ...WV(xV)
    });
    class ve extends RV {
      _parse(VV) {
        const {
          status: eV,
          ctx: xV
        } = this._processInputParams(VV);
        if (xV.parsedType !== wV.set) return jV(xV, {
          code: vV.invalid_type,
          expected: wV.set,
          received: xV.parsedType
        }), tV;
        const JV = this._def;
        null !== JV.minSize && xV.data.size < JV.minSize.value && (jV(xV, {
          code: vV.too_small,
          minimum: JV.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: JV.minSize.message
        }), eV.Jb()), null !== JV.maxSize && xV.data.size > JV.maxSize.value && (jV(xV, {
          code: vV.too_big,
          maximum: JV.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: JV.maxSize.message
        }), eV.Jb());
        const YV = this._def.valueType;

        function UV(VV) {
          const xV = new Set;
          for (const JV of VV) {
            if ("aborted" === JV.status) return tV;
            "Jb" === JV.status && eV.Jb(), xV.add(JV.value)
          }
          return {
            status: eV.value,
            value: xV
          }
        }
        const yV = [...xV.data.values()].map(((VV, eV) => YV._parse(new zV(xV, VV, xV.path, eV))));
        return xV.common.async ? Promise.all(yV).then((VV => UV(VV))) : UV(yV)
      }
      min(VV, eV) {
        return new ve({
          ...this._def,
          minSize: {
            value: VV,
            message: MV.toString(eV)
          }
        })
      }
      max(VV, eV) {
        return new ve({
          ...this._def,
          maxSize: {
            value: VV,
            message: MV.toString(eV)
          }
        })
      }
      size(VV, eV) {
        return this.min(VV, eV).max(VV, eV)
      }
      nonempty(VV) {
        return this.min(1, VV)
      }
    }
    ve.create = (VV, eV) => new ve({
      valueType: VV,
      minSize: null,
      maxSize: null,
      typeName: ge.ZodSet,
      ...WV(eV)
    });
    class re extends RV {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(VV) {
        const {
          ctx: eV
        } = this._processInputParams(VV);
        if (eV.parsedType !== wV.function) return jV(eV, {
          code: vV.invalid_type,
          expected: wV.function,
          received: eV.parsedType
        }), tV;

        function xV(VV, xV) {
          return BV({
            data: VV,
            path: eV.path,
            errorMaps: [eV.common.contextualErrorMap, eV.schemaErrorMap, EV(), kV].filter((VV => !!VV)),
            issueData: {
              code: vV.invalid_arguments,
              argumentsError: xV
            }
          })
        }

        function JV(VV, xV) {
          return BV({
            data: VV,
            path: eV.path,
            errorMaps: [eV.common.contextualErrorMap, eV.schemaErrorMap, EV(), kV].filter((VV => !!VV)),
            issueData: {
              code: vV.invalid_return_type,
              returnTypeError: xV
            }
          })
        }
        const YV = {
            errorMap: eV.common.contextualErrorMap
          },
          UV = eV.data;
        if (this._def.returns instanceof qe) {
          const VV = this;
          return TV((async function() {
            for (var eV = arguments.length, yV = new Array(eV), pV = 0; pV < eV; pV++) yV[pV] = arguments[pV];
            const QV = new rV([]),
              nV = await VV._def.args.parseAsync(yV, YV).catch((VV => {
                throw QV.addIssue(xV(yV, VV)), QV
              })),
              wV = await Reflect.apply(UV, this, nV);
            return await VV._def.returns._def.type.parseAsync(wV, YV).catch((VV => {
              throw QV.addIssue(JV(wV, VV)), QV
            }))
          }))
        } {
          const VV = this;
          return TV((function() {
            for (var eV = arguments.length, yV = new Array(eV), pV = 0; pV < eV; pV++) yV[pV] = arguments[pV];
            const QV = VV._def.args.safeParse(yV, YV);
            if (!QV.success) throw new rV([xV(yV, QV.error)]);
            const nV = Reflect.apply(UV, this, QV.data),
              wV = VV._def.returns.safeParse(nV, YV);
            if (!wV.success) throw new rV([JV(nV, wV.error)]);
            return wV.data
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
        for (var VV = arguments.length, eV = new Array(VV), xV = 0; xV < VV; xV++) eV[xV] = arguments[xV];
        return new re({
          ...this._def,
          args: ne.create(eV).rest(dV.create())
        })
      }
      returns(VV) {
        return new re({
          ...this._def,
          returns: VV
        })
      }
      implement(VV) {
        return this.parse(VV)
      }
      strictImplement(VV) {
        return this.parse(VV)
      }
      static create(VV, eV, xV) {
        return new re({
          args: VV || ne.create([]).rest(dV.create()),
          returns: eV || dV.create(),
          typeName: ge.ZodFunction,
          ...WV(xV)
        })
      }
    }
    class ke extends RV {
      get schema() {
        return this._def.getter()
      }
      _parse(VV) {
        const {
          ctx: eV
        } = this._processInputParams(VV);
        return this._def.getter()._parse({
          data: eV.data,
          path: eV.path,
          parent: eV
        })
      }
    }
    ke.create = (VV, eV) => new ke({
      getter: VV,
      typeName: ge.ZodLazy,
      ...WV(eV)
    });
    class be extends RV {
      _parse(VV) {
        if (VV.data !== this._def.value) {
          const eV = this._getOrReturnCtx(VV);
          return jV(eV, {
            received: eV.data,
            code: vV.invalid_literal,
            expected: this._def.value
          }), tV
        }
        return {
          status: "valid",
          value: VV.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function Ee(VV, eV) {
      return new Be({
        values: VV,
        typeName: ge.ZodEnum,
        ...WV(eV)
      })
    }
    be.create = (VV, eV) => new be({
      value: VV,
      typeName: ge.ZodLiteral,
      ...WV(eV)
    });
    class Be extends RV {
      _parse(VV) {
        if ("string" !== typeof VV.data) {
          const eV = this._getOrReturnCtx(VV),
            xV = this._def.values;
          return jV(eV, {
            expected: pV.joinValues(xV),
            received: eV.parsedType,
            code: vV.invalid_type
          }), tV
        }
        if (-1 === this._def.values.indexOf(VV.data)) {
          const eV = this._getOrReturnCtx(VV),
            xV = this._def.values;
          return jV(eV, {
            received: eV.data,
            code: vV.invalid_enum_value,
            options: xV
          }), tV
        }
        return TV(VV.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const VV = {};
        for (const eV of this._def.values) VV[eV] = eV;
        return VV
      }
      get Values() {
        const VV = {};
        for (const eV of this._def.values) VV[eV] = eV;
        return VV
      }
      get Enum() {
        const VV = {};
        for (const eV of this._def.values) VV[eV] = eV;
        return VV
      }
      extract(VV) {
        return Be.create(VV)
      }
      exclude(VV) {
        return Be.create(this.options.filter((eV => !VV.includes(eV))))
      }
    }
    Be.create = Ee;
    class je extends RV {
      _parse(VV) {
        const eV = pV.getValidEnumValues(this._def.values),
          xV = this._getOrReturnCtx(VV);
        if (xV.parsedType !== wV.string && xV.parsedType !== wV.number) {
          const VV = pV.objectValues(eV);
          return jV(xV, {
            expected: pV.joinValues(VV),
            received: xV.parsedType,
            code: vV.invalid_type
          }), tV
        }
        if (-1 === eV.indexOf(VV.data)) {
          const VV = pV.objectValues(eV);
          return jV(xV, {
            received: xV.data,
            code: vV.invalid_enum_value,
            options: VV
          }), tV
        }
        return TV(VV.data)
      }
      get enum() {
        return this._def.values
      }
    }
    je.create = (VV, eV) => new je({
      values: VV,
      typeName: ge.ZodNativeEnum,
      ...WV(eV)
    });
    class qe extends RV {
      unwrap() {
        return this._def.type
      }
      _parse(VV) {
        const {
          ctx: eV
        } = this._processInputParams(VV);
        if (eV.parsedType !== wV.promise && !1 === eV.common.async) return jV(eV, {
          code: vV.invalid_type,
          expected: wV.promise,
          received: eV.parsedType
        }), tV;
        const xV = eV.parsedType === wV.promise ? eV.data : Promise.resolve(eV.data);
        return TV(xV.then((VV => this._def.type.parseAsync(VV, {
          path: eV.path,
          errorMap: eV.common.contextualErrorMap
        }))))
      }
    }
    qe.create = (VV, eV) => new qe({
      type: VV,
      typeName: ge.ZodPromise,
      ...WV(eV)
    });
    class te extends RV {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === ge.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(VV) {
        const {
          status: eV,
          ctx: xV
        } = this._processInputParams(VV), JV = this._def.effect || null, YV = {
          addIssue: VV => {
            jV(xV, VV), VV.fatal ? eV.abort() : eV.Jb()
          },
          get path() {
            return xV.path
          }
        };
        if (YV.addIssue = YV.addIssue.bind(YV), "preprocess" === JV.type) {
          const VV = JV.transform(xV.data, YV);
          return xV.common.issues.length ? {
            status: "Jb",
            value: xV.data
          } : xV.common.async ? Promise.resolve(VV).then((VV => this._def.schema._parseAsync({
            data: VV,
            path: xV.path,
            parent: xV
          }))) : this._def.schema._parseSync({
            data: VV,
            path: xV.path,
            parent: xV
          })
        }
        if ("refinement" === JV.type) {
          const VV = VV => {
            const eV = JV.refinement(VV, YV);
            if (xV.common.async) return Promise.resolve(eV);
            if (eV instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return VV
          };
          if (!1 === xV.common.async) {
            const JV = this._def.schema._parseSync({
              data: xV.data,
              path: xV.path,
              parent: xV
            });
            return "aborted" === JV.status ? tV : ("Jb" === JV.status && eV.Jb(), VV(JV.value), {
              status: eV.value,
              value: JV.value
            })
          }
          return this._def.schema._parseAsync({
            data: xV.data,
            path: xV.path,
            parent: xV
          }).then((xV => "aborted" === xV.status ? tV : ("Jb" === xV.status && eV.Jb(), VV(xV.value).then((() => ({
            status: eV.value,
            value: xV.value
          }))))))
        }
        if ("transform" === JV.type) {
          if (!1 === xV.common.async) {
            const VV = this._def.schema._parseSync({
              data: xV.data,
              path: xV.path,
              parent: xV
            });
            if (!NV(VV)) return VV;
            const UV = JV.transform(VV.value, YV);
            if (UV instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: eV.value,
              value: UV
            }
          }
          return this._def.schema._parseAsync({
            data: xV.data,
            path: xV.path,
            parent: xV
          }).then((VV => NV(VV) ? Promise.resolve(JV.transform(VV.value, YV)).then((VV => ({
            status: eV.value,
            value: VV
          }))) : VV))
        }
        pV.assertNever(JV)
      }
    }
    te.create = (VV, eV, xV) => new te({
      schema: VV,
      typeName: ge.ZodEffects,
      effect: eV,
      ...WV(xV)
    }), te.createWithPreprocess = (VV, eV, xV) => new te({
      schema: eV,
      effect: {
        type: "preprocess",
        transform: VV
      },
      typeName: ge.ZodEffects,
      ...WV(xV)
    });
    class Fe extends RV {
      _parse(VV) {
        return this._getType(VV) === wV.undefined ? TV(void 0) : this._def.innerType._parse(VV)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Fe.create = (VV, eV) => new Fe({
      innerType: VV,
      typeName: ge.ZodOptional,
      ...WV(eV)
    });
    class Te extends RV {
      _parse(VV) {
        return this._getType(VV) === wV.null ? TV(null) : this._def.innerType._parse(VV)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Te.create = (VV, eV) => new Te({
      innerType: VV,
      typeName: ge.ZodNullable,
      ...WV(eV)
    });
    class Pe extends RV {
      _parse(VV) {
        const {
          ctx: eV
        } = this._processInputParams(VV);
        let xV = eV.data;
        return eV.parsedType === wV.undefined && (xV = this._def.defaultValue()), this._def.innerType._parse({
          data: xV,
          path: eV.path,
          parent: eV
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    Pe.create = (VV, eV) => new Pe({
      innerType: VV,
      typeName: ge.ZodDefault,
      defaultValue: "function" === typeof eV.default ? eV.default : () => eV.default,
      ...WV(eV)
    });
    class Ae extends RV {
      _parse(VV) {
        const {
          ctx: eV
        } = this._processInputParams(VV), xV = {
          ...eV,
          common: {
            ...eV.common,
            issues: []
          }
        }, JV = this._def.innerType._parse({
          data: xV.data,
          path: xV.path,
          parent: {
            ...xV
          }
        });
        return XV(JV) ? JV.then((VV => ({
          status: "valid",
          value: "valid" === VV.status ? VV.value : this._def.catchValue({
            get error() {
              return new rV(xV.common.issues)
            },
            input: xV.data
          })
        }))) : {
          status: "valid",
          value: "valid" === JV.status ? JV.value : this._def.catchValue({
            get error() {
              return new rV(xV.common.issues)
            },
            input: xV.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    Ae.create = (VV, eV) => new Ae({
      innerType: VV,
      typeName: ge.ZodCatch,
      catchValue: "function" === typeof eV.catch ? eV.catch : () => eV.catch,
      ...WV(eV)
    });
    class Ne extends RV {
      _parse(VV) {
        if (this._getType(VV) !== wV.nan) {
          const eV = this._getOrReturnCtx(VV);
          return jV(eV, {
            code: vV.invalid_type,
            expected: wV.nan,
            received: eV.parsedType
          }), tV
        }
        return {
          status: "valid",
          value: VV.data
        }
      }
    }
    Ne.create = VV => new Ne({
      typeName: ge.ZodNaN,
      ...WV(VV)
    });
    const Xe = Symbol("zod_brand");
    class Me extends RV {
      _parse(VV) {
        const {
          ctx: eV
        } = this._processInputParams(VV), xV = eV.data;
        return this._def.type._parse({
          data: xV,
          path: eV.path,
          parent: eV
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class ze extends RV {
      _parse(VV) {
        const {
          status: eV,
          ctx: xV
        } = this._processInputParams(VV);
        if (xV.common.async) {
          return (async () => {
            const VV = await this._def.in._parseAsync({
              data: xV.data,
              path: xV.path,
              parent: xV
            });
            return "aborted" === VV.status ? tV : "Jb" === VV.status ? (eV.Jb(), FV(VV.value)) : this._def.out._parseAsync({
              data: VV.value,
              path: xV.path,
              parent: xV
            })
          })()
        } {
          const VV = this._def.in._parseSync({
            data: xV.data,
            path: xV.path,
            parent: xV
          });
          return "aborted" === VV.status ? tV : "Jb" === VV.status ? (eV.Jb(), {
            status: "Jb",
            value: VV.value
          }) : this._def.out._parseSync({
            data: VV.value,
            path: xV.path,
            parent: xV
          })
        }
      }
      static create(VV, eV) {
        return new ze({
          in: VV,
          out: eV,
          typeName: ge.ZodPipeline
        })
      }
    }
    class Ge extends RV {
      _parse(VV) {
        const eV = this._def.innerType._parse(VV);
        return NV(eV) && (eV.value = Object.freeze(eV.value)), eV
      }
    }
    Ge.create = (VV, eV) => new Ge({
      innerType: VV,
      typeName: ge.ZodReadonly,
      ...WV(eV)
    });
    const We = function(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          xV = arguments.length > 2 ? arguments[2] : void 0;
        return VV ? IV.create().superRefine(((JV, YV) => {
          var UV, yV;
          if (!VV(JV)) {
            const VV = "function" === typeof eV ? eV(JV) : "string" === typeof eV ? {
                message: eV
              } : eV,
              pV = null === (yV = null !== (UV = VV.fatal) && void 0 !== UV ? UV : xV) || void 0 === yV || yV,
              QV = "string" === typeof VV ? {
                message: VV
              } : VV;
            YV.addIssue({
              code: "custom",
              ...QV,
              fatal: pV
            })
          }
        })) : IV.create()
      },
      Re = {
        object: Je.lazycreate
      };
    var ge;
    ! function(VV) {
      VV.ZodString = "ZodString", VV.ZodNumber = "ZodNumber", VV.ZodNaN = "ZodNaN", VV.ZodBigInt = "ZodBigInt", VV.ZodBoolean = "ZodBoolean", VV.ZodDate = "ZodDate", VV.ZodSymbol = "ZodSymbol", VV.ZodUndefined = "ZodUndefined", VV.ZodNull = "ZodNull", VV.ZodAny = "ZodAny", VV.ZodUnknown = "ZodUnknown", VV.ZodNever = "ZodNever", VV.ZodVoid = "ZodVoid", VV.ZodArray = "ZodArray", VV.ZodObject = "ZodObject", VV.ZodUnion = "ZodUnion", VV.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", VV.ZodIntersection = "ZodIntersection", VV.ZodTuple = "ZodTuple", VV.ZodRecord = "ZodRecord", VV.ZodMap = "ZodMap", VV.ZodSet = "ZodSet", VV.ZodFunction = "ZodFunction", VV.ZodLazy = "ZodLazy", VV.ZodLiteral = "ZodLiteral", VV.ZodEnum = "ZodEnum", VV.ZodEffects = "ZodEffects", VV.ZodNativeEnum = "ZodNativeEnum", VV.ZodOptional = "ZodOptional", VV.ZodNullable = "ZodNullable", VV.ZodDefault = "ZodDefault", VV.ZodCatch = "ZodCatch", VV.ZodPromise = "ZodPromise", VV.ZodBranded = "ZodBranded", VV.ZodPipeline = "ZodPipeline", VV.ZodReadonly = "ZodReadonly"
    }(ge || (ge = {}));
    const De = lV.create,
      ie = fV.create,
      Ce = Ne.create,
      ae = mV.create,
      oe = KV.create,
      ce = HV.create,
      he = uV.create,
      le = sV.create,
      Le = SV.create,
      fe = IV.create,
      me = dV.create,
      Ke = OV.create,
      He = Ve.create,
      ue = ee.create,
      se = Je.create,
      Se = Je.strictCreate,
      Ie = Ye.create,
      de = ye.create,
      Oe = Qe.create,
      Vx = ne.create,
      ex = we.create,
      xx = Ze.create,
      Jx = ve.create,
      Yx = re.create,
      Ux = ke.create,
      yx = be.create,
      px = Be.create,
      Qx = je.create,
      nx = qe.create,
      wx = te.create,
      Zx = Fe.create,
      vx = Te.create,
      rx = te.createWithPreprocess,
      kx = ze.create,
      bx = {
        string: VV => lV.create({
          ...VV,
          coerce: !0
        }),
        number: VV => fV.create({
          ...VV,
          coerce: !0
        }),
        boolean: VV => KV.create({
          ...VV,
          coerce: !0
        }),
        bigint: VV => mV.create({
          ...VV,
          coerce: !0
        }),
        date: VV => HV.create({
          ...VV,
          coerce: !0
        })
      },
      Ex = tV;
    var Bx = Object.freeze({
        __proto__: null,
        defaultErrorMap: kV,
        setErrorMap: function(VV) {
          bV = VV
        },
        getErrorMap: EV,
        makeIssue: BV,
        EMPTY_PATH: [],
        addIssueToContext: jV,
        ParseStatus: qV,
        INVALID: tV,
        DIRTY: FV,
        OK: TV,
        isAborted: PV,
        isDirty: AV,
        isValid: NV,
        isAsync: XV,
        get util() {
          return pV
        },
        get objectUtil() {
          return QV
        },
        ZodParsedType: wV,
        getParsedType: ZV,
        ZodType: RV,
        ZodString: lV,
        ZodNumber: fV,
        ZodBigInt: mV,
        ZodBoolean: KV,
        ZodDate: HV,
        ZodSymbol: uV,
        ZodUndefined: sV,
        ZodNull: SV,
        ZodAny: IV,
        ZodUnknown: dV,
        ZodNever: OV,
        ZodVoid: Ve,
        ZodArray: ee,
        ZodObject: Je,
        ZodUnion: Ye,
        ZodDiscriminatedUnion: ye,
        ZodIntersection: Qe,
        ZodTuple: ne,
        ZodRecord: we,
        ZodMap: Ze,
        ZodSet: ve,
        ZodFunction: re,
        ZodLazy: ke,
        ZodLiteral: be,
        ZodEnum: Be,
        ZodNativeEnum: je,
        ZodPromise: qe,
        ZodEffects: te,
        ZodTransformer: te,
        ZodOptional: Fe,
        ZodNullable: Te,
        ZodDefault: Pe,
        ZodCatch: Ae,
        ZodNaN: Ne,
        BRAND: Xe,
        ZodBranded: Me,
        ZodPipeline: ze,
        ZodReadonly: Ge,
        custom: We,
        Schema: RV,
        ZodSchema: RV,
        late: Re,
        get ZodFirstPartyTypeKind() {
          return ge
        },
        coerce: bx,
        any: fe,
        array: ue,
        bigint: ae,
        boolean: oe,
        date: ce,
        discriminatedUnion: de,
        effect: wx,
        enum: px,
        function: Yx,
        instanceof: function(VV) {
          let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${VV.name}`
          };
          return We((eV => eV instanceof VV), eV)
        },
        intersection: Oe,
        lazy: Ux,
        literal: yx,
        map: xx,
        nan: Ce,
        nativeEnum: Qx,
        never: Ke,
        null: Le,
        nullable: vx,
        number: ie,
        object: se,
        oboolean: () => oe().optional(),
        onumber: () => ie().optional(),
        optional: Zx,
        ostring: () => De().optional(),
        pipeline: kx,
        preprocess: rx,
        promise: nx,
        record: ex,
        set: Jx,
        strictObject: Se,
        string: De,
        symbol: he,
        transformer: wx,
        tuple: Vx,
        undefined: le,
        union: Ie,
        unknown: me,
        void: He,
        NEVER: Ex,
        ZodIssueCode: vV,
        quotelessJson: VV => JSON.stringify(VV, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: rV
      }),
      jx = {
        exports: {}
      };
    ! function(VV) {
      var eV = function(VV) {
        var xV = 1e7,
          JV = 9007199254740992,
          YV = vV(JV),
          UV = "0123456789abcdefghijklmnopqrstuvwxyz",
          yV = "function" === typeof BigInt;

        function pV(VV, eV, xV, JV) {
          return "undefined" === typeof VV ? pV[0] : "undefined" !== typeof eV && (10 !== +eV || xV) ? KV(VV, eV, xV, JV) : IV(VV)
        }

        function QV(VV, eV) {
          this.value = VV, this.sign = eV, this.isSmall = !1
        }

        function nV(VV) {
          this.value = VV, this.sign = VV < 0, this.isSmall = !0
        }

        function wV(VV) {
          this.value = VV
        }

        function ZV(VV) {
          return -JV < VV && VV < JV
        }

        function vV(VV) {
          return VV < 1e7 ? [VV] : VV < 1e14 ? [VV % 1e7, Math.floor(VV / 1e7)] : [VV % 1e7, Math.floor(VV / 1e7) % 1e7, Math.floor(VV / 1e14)]
        }

        function rV(VV) {
          kV(VV);
          var eV = VV.length;
          if (eV < 4 && WV(VV, YV) < 0) switch (eV) {
            case 0:
              return 0;
            case 1:
              return VV[0];
            case 2:
              return VV[0] + VV[1] * xV;
            default:
              return VV[0] + (VV[1] + VV[2] * xV) * xV
          }
          return VV
        }

        function kV(VV) {
          for (var eV = VV.length; 0 === VV[--eV];);
          VV.length = eV + 1
        }

        function bV(VV) {
          for (var eV = new Array(VV), xV = -1; ++xV < VV;) eV[xV] = 0;
          return eV
        }

        function EV(VV) {
          return VV > 0 ? Math.floor(VV) : Math.ceil(VV)
        }

        function BV(VV, eV) {
          var JV, YV, UV = VV.length,
            yV = eV.length,
            pV = new Array(UV),
            QV = 0,
            nV = xV;
          for (YV = 0; YV < yV; YV++) QV = (JV = VV[YV] + eV[YV] + QV) >= nV ? 1 : 0, pV[YV] = JV - QV * nV;
          for (; YV < UV;) QV = (JV = VV[YV] + QV) === nV ? 1 : 0, pV[YV++] = JV - QV * nV;
          return QV > 0 && pV.push(QV), pV
        }

        function jV(VV, eV) {
          return VV.length >= eV.length ? BV(VV, eV) : BV(eV, VV)
        }

        function qV(VV, eV) {
          var JV, YV, UV = VV.length,
            yV = new Array(UV),
            pV = xV;
          for (YV = 0; YV < UV; YV++) JV = VV[YV] - pV + eV, eV = Math.floor(JV / pV), yV[YV] = JV - eV * pV, eV += 1;
          for (; eV > 0;) yV[YV++] = eV % pV, eV = Math.floor(eV / pV);
          return yV
        }

        function tV(VV, eV) {
          var JV, YV, UV = VV.length,
            yV = eV.length,
            pV = new Array(UV),
            QV = 0,
            nV = xV;
          for (JV = 0; JV < yV; JV++)(YV = VV[JV] - QV - eV[JV]) < 0 ? (YV += nV, QV = 1) : QV = 0, pV[JV] = YV;
          for (JV = yV; JV < UV; JV++) {
            if (!((YV = VV[JV] - QV) < 0)) {
              pV[JV++] = YV;
              break
            }
            YV += nV, pV[JV] = YV
          }
          for (; JV < UV; JV++) pV[JV] = VV[JV];
          return kV(pV), pV
        }

        function FV(VV, eV, JV) {
          var YV, UV, yV = VV.length,
            pV = new Array(yV),
            wV = -eV,
            ZV = xV;
          for (YV = 0; YV < yV; YV++) UV = VV[YV] + wV, wV = Math.floor(UV / ZV), UV %= ZV, pV[YV] = UV < 0 ? UV + ZV : UV;
          return "number" === typeof(pV = rV(pV)) ? (JV && (pV = -pV), new nV(pV)) : new QV(pV, JV)
        }

        function TV(VV, eV) {
          var JV, YV, UV, yV, pV = VV.length,
            QV = eV.length,
            nV = bV(pV + QV),
            wV = xV;
          for (UV = 0; UV < pV; ++UV) {
            yV = VV[UV];
            for (var ZV = 0; ZV < QV; ++ZV) JV = yV * eV[ZV] + nV[UV + ZV], YV = Math.floor(JV / wV), nV[UV + ZV] = JV - YV * wV, nV[UV + ZV + 1] += YV
          }
          return kV(nV), nV
        }

        function PV(VV, eV) {
          var JV, YV, UV = VV.length,
            yV = new Array(UV),
            pV = xV,
            QV = 0;
          for (YV = 0; YV < UV; YV++) JV = VV[YV] * eV + QV, QV = Math.floor(JV / pV), yV[YV] = JV - QV * pV;
          for (; QV > 0;) yV[YV++] = QV % pV, QV = Math.floor(QV / pV);
          return yV
        }

        function AV(VV, eV) {
          for (var xV = []; eV-- > 0;) xV.push(0);
          return xV.concat(VV)
        }

        function NV(VV, eV) {
          var xV = Math.max(VV.length, eV.length);
          if (xV <= 30) return TV(VV, eV);
          xV = Math.ceil(xV / 2);
          var JV = VV.slice(xV),
            YV = VV.slice(0, xV),
            UV = eV.slice(xV),
            yV = eV.slice(0, xV),
            pV = NV(YV, yV),
            QV = NV(JV, UV),
            nV = NV(jV(YV, JV), jV(yV, UV)),
            wV = jV(jV(pV, AV(tV(tV(nV, pV), QV), xV)), AV(QV, 2 * xV));
          return kV(wV), wV
        }

        function XV(VV, eV, JV) {
          return new QV(VV < xV ? PV(eV, VV) : TV(eV, vV(VV)), JV)
        }

        function MV(VV) {
          var eV, JV, YV, UV, yV = VV.length,
            pV = bV(yV + yV),
            QV = xV;
          for (YV = 0; YV < yV; YV++) {
            JV = 0 - (UV = VV[YV]) * UV;
            for (var nV = YV; nV < yV; nV++) eV = UV * VV[nV] * 2 + pV[YV + nV] + JV, JV = Math.floor(eV / QV), pV[YV + nV] = eV - JV * QV;
            pV[YV + yV] = JV
          }
          return kV(pV), pV
        }

        function zV(VV, eV) {
          var JV, YV, UV, yV, pV = VV.length,
            QV = bV(pV),
            nV = xV;
          for (UV = 0, JV = pV - 1; JV >= 0; --JV) UV = (yV = UV * nV + VV[JV]) - (YV = EV(yV / eV)) * eV, QV[JV] = 0 | YV;
          return [QV, 0 | UV]
        }

        function GV(VV, eV) {
          var JV, YV = IV(eV);
          if (yV) return [new wV(VV.value / YV.value), new wV(VV.value % YV.value)];
          var UV, ZV = VV.value,
            BV = YV.value;
          if (0 === BV) throw new Error("Cannot divide by zero");
          if (VV.isSmall) return YV.isSmall ? [new nV(EV(ZV / BV)), new nV(ZV % BV)] : [pV[0], VV];
          if (YV.isSmall) {
            if (1 === BV) return [VV, pV[0]];
            if (-1 == BV) return [VV.gr(), pV[0]];
            var jV = Math.abs(BV);
            if (jV < xV) {
              UV = rV((JV = zV(ZV, jV))[0]);
              var qV = JV[1];
              return VV.sign && (qV = -qV), "number" === typeof UV ? (VV.sign !== YV.sign && (UV = -UV), [new nV(UV), new nV(qV)]) : [new QV(UV, VV.sign !== YV.sign), new nV(qV)]
            }
            BV = vV(jV)
          }
          var FV = WV(ZV, BV);
          if (-1 === FV) return [pV[0], VV];
          if (0 === FV) return [pV[VV.sign === YV.sign ? 1 : -1], pV[0]];
          JV = ZV.length + BV.length <= 200 ? function(VV, eV) {
            var JV, YV, UV, yV, pV, QV, nV, wV = VV.length,
              ZV = eV.length,
              vV = xV,
              kV = bV(eV.length),
              EV = eV[ZV - 1],
              BV = Math.ceil(vV / (2 * EV)),
              jV = PV(VV, BV),
              qV = PV(eV, BV);
            for (jV.length <= wV && jV.push(0), qV.push(0), EV = qV[ZV - 1], YV = wV - ZV; YV >= 0; YV--) {
              for (JV = vV - 1, jV[YV + ZV] !== EV && (JV = Math.floor((jV[YV + ZV] * vV + jV[YV + ZV - 1]) / EV)), UV = 0, yV = 0, QV = qV.length, pV = 0; pV < QV; pV++) UV += JV * qV[pV], nV = Math.floor(UV / vV), yV += jV[YV + pV] - (UV - nV * vV), UV = nV, yV < 0 ? (jV[YV + pV] = yV + vV, yV = -1) : (jV[YV + pV] = yV, yV = 0);
              for (; 0 !== yV;) {
                for (JV -= 1, UV = 0, pV = 0; pV < QV; pV++)(UV += jV[YV + pV] - vV + qV[pV]) < 0 ? (jV[YV + pV] = UV + vV, UV = 0) : (jV[YV + pV] = UV, UV = 1);
                yV += UV
              }
              kV[YV] = JV
            }
            return jV = zV(jV, BV)[0], [rV(kV), rV(jV)]
          }(ZV, BV) : function(VV, eV) {
            for (var JV, YV, UV, yV, pV, QV = VV.length, nV = eV.length, wV = [], ZV = [], vV = xV; QV;)
              if (ZV.unshift(VV[--QV]), kV(ZV), WV(ZV, eV) < 0) wV.push(0);
              else {
                UV = ZV[(YV = ZV.length) - 1] * vV + ZV[YV - 2], yV = eV[nV - 1] * vV + eV[nV - 2], YV > nV && (UV = (UV + 1) * vV), JV = Math.ceil(UV / yV);
                do {
                  if (WV(pV = PV(eV, JV), ZV) <= 0) break;
                  JV--
                } while (JV);
                wV.push(JV), ZV = tV(ZV, pV)
              } return wV.reverse(), [rV(wV), rV(ZV)]
          }(ZV, BV), UV = JV[0];
          var TV = VV.sign !== YV.sign,
            AV = JV[1],
            NV = VV.sign;
          return "number" === typeof UV ? (TV && (UV = -UV), UV = new nV(UV)) : UV = new QV(UV, TV), "number" === typeof AV ? (NV && (AV = -AV), AV = new nV(AV)) : AV = new QV(AV, NV), [UV, AV]
        }

        function WV(VV, eV) {
          if (VV.length !== eV.length) return VV.length > eV.length ? 1 : -1;
          for (var xV = VV.length - 1; xV >= 0; xV--)
            if (VV[xV] !== eV[xV]) return VV[xV] > eV[xV] ? 1 : -1;
          return 0
        }

        function RV(VV) {
          var eV = VV.abs();
          return !eV.isUnit() && (!!(eV.equals(2) || eV.equals(3) || eV.equals(5)) || !(eV.isEven() || eV.isDivisibleBy(3) || eV.isDivisibleBy(5)) && (!!eV.lesser(49) || void 0))
        }

        function gV(VV, xV) {
          for (var JV, YV, UV, yV = VV.prev(), pV = yV, QV = 0; pV.isEven();) pV = pV.divide(2), QV++;
          VV: for (YV = 0; YV < xV.length; YV++)
            if (!VV.lesser(xV[YV]) && !(UV = eV(xV[YV]).modPow(pV, VV)).isUnit() && !UV.equals(yV)) {
              for (JV = QV - 1; 0 != JV; JV--) {
                if ((UV = UV.square().mod(VV)).isUnit()) return !1;
                if (UV.equals(yV)) continue VV
              }
              return !1
            }
          return !0
        }
        QV.prototype = Object.create(pV.prototype), nV.prototype = Object.create(pV.prototype), wV.prototype = Object.create(pV.prototype), QV.prototype.add = function(VV) {
          var eV = IV(VV);
          if (this.sign !== eV.sign) return this.subtract(eV.gr());
          var xV = this.value,
            JV = eV.value;
          return eV.isSmall ? new QV(qV(xV, Math.abs(JV)), this.sign) : new QV(jV(xV, JV), this.sign)
        }, QV.prototype.plus = QV.prototype.add, nV.prototype.add = function(VV) {
          var eV = IV(VV),
            xV = this.value;
          if (xV < 0 !== eV.sign) return this.subtract(eV.gr());
          var JV = eV.value;
          if (eV.isSmall) {
            if (ZV(xV + JV)) return new nV(xV + JV);
            JV = vV(Math.abs(JV))
          }
          return new QV(qV(JV, Math.abs(xV)), xV < 0)
        }, nV.prototype.plus = nV.prototype.add, wV.prototype.add = function(VV) {
          return new wV(this.value + IV(VV).value)
        }, wV.prototype.plus = wV.prototype.add, QV.prototype.subtract = function(VV) {
          var eV = IV(VV);
          if (this.sign !== eV.sign) return this.add(eV.gr());
          var xV = this.value,
            JV = eV.value;
          return eV.isSmall ? FV(xV, Math.abs(JV), this.sign) : function(VV, eV, xV) {
            var JV;
            return WV(VV, eV) >= 0 ? JV = tV(VV, eV) : (JV = tV(eV, VV), xV = !xV), "number" === typeof(JV = rV(JV)) ? (xV && (JV = -JV), new nV(JV)) : new QV(JV, xV)
          }(xV, JV, this.sign)
        }, QV.prototype.minus = QV.prototype.subtract, nV.prototype.subtract = function(VV) {
          var eV = IV(VV),
            xV = this.value;
          if (xV < 0 !== eV.sign) return this.add(eV.gr());
          var JV = eV.value;
          return eV.isSmall ? new nV(xV - JV) : FV(JV, Math.abs(xV), xV >= 0)
        }, nV.prototype.minus = nV.prototype.subtract, wV.prototype.subtract = function(VV) {
          return new wV(this.value - IV(VV).value)
        }, wV.prototype.minus = wV.prototype.subtract, QV.prototype.gr = function() {
          return new QV(this.value, !this.sign)
        }, nV.prototype.gr = function() {
          var VV = this.sign,
            eV = new nV(-this.value);
          return eV.sign = !VV, eV
        }, wV.prototype.gr = function() {
          return new wV(-this.value)
        }, QV.prototype.abs = function() {
          return new QV(this.value, !1)
        }, nV.prototype.abs = function() {
          return new nV(Math.abs(this.value))
        }, wV.prototype.abs = function() {
          return new wV(this.value >= 0 ? this.value : -this.value)
        }, QV.prototype.multiply = function(VV) {
          var eV, JV, YV, UV = IV(VV),
            yV = this.value,
            nV = UV.value,
            wV = this.sign !== UV.sign;
          if (UV.isSmall) {
            if (0 === nV) return pV[0];
            if (1 === nV) return this;
            if (-1 === nV) return this.gr();
            if ((eV = Math.abs(nV)) < xV) return new QV(PV(yV, eV), wV);
            nV = vV(eV)
          }
          return JV = yV.length, YV = nV.length, new QV(-.012 * JV - .012 * YV + 15e-6 * JV * YV > 0 ? NV(yV, nV) : TV(yV, nV), wV)
        }, QV.prototype.times = QV.prototype.multiply, nV.prototype._multiplyBySmall = function(VV) {
          return ZV(VV.value * this.value) ? new nV(VV.value * this.value) : XV(Math.abs(VV.value), vV(Math.abs(this.value)), this.sign !== VV.sign)
        }, QV.prototype._multiplyBySmall = function(VV) {
          return 0 === VV.value ? pV[0] : 1 === VV.value ? this : -1 === VV.value ? this.gr() : XV(Math.abs(VV.value), this.value, this.sign !== VV.sign)
        }, nV.prototype.multiply = function(VV) {
          return IV(VV)._multiplyBySmall(this)
        }, nV.prototype.times = nV.prototype.multiply, wV.prototype.multiply = function(VV) {
          return new wV(this.value * IV(VV).value)
        }, wV.prototype.times = wV.prototype.multiply, QV.prototype.square = function() {
          return new QV(MV(this.value), !1)
        }, nV.prototype.square = function() {
          var VV = this.value * this.value;
          return ZV(VV) ? new nV(VV) : new QV(MV(vV(Math.abs(this.value))), !1)
        }, wV.prototype.square = function(VV) {
          return new wV(this.value * this.value)
        }, QV.prototype.divmod = function(VV) {
          var eV = GV(this, VV);
          return {
            quotient: eV[0],
            remainder: eV[1]
          }
        }, wV.prototype.divmod = nV.prototype.divmod = QV.prototype.divmod, QV.prototype.divide = function(VV) {
          return GV(this, VV)[0]
        }, wV.prototype.over = wV.prototype.divide = function(VV) {
          return new wV(this.value / IV(VV).value)
        }, nV.prototype.over = nV.prototype.divide = QV.prototype.over = QV.prototype.divide, QV.prototype.mod = function(VV) {
          return GV(this, VV)[1]
        }, wV.prototype.mod = wV.prototype.remainder = function(VV) {
          return new wV(this.value % IV(VV).value)
        }, nV.prototype.remainder = nV.prototype.mod = QV.prototype.remainder = QV.prototype.mod, QV.prototype.pow = function(VV) {
          var eV, xV, JV, YV = IV(VV),
            UV = this.value,
            yV = YV.value;
          if (0 === yV) return pV[1];
          if (0 === UV) return pV[0];
          if (1 === UV) return pV[1];
          if (-1 === UV) return YV.isEven() ? pV[1] : pV[-1];
          if (YV.sign) return pV[0];
          if (!YV.isSmall) throw new Error("The exponent " + YV.toString() + " is too large.");
          if (this.isSmall && ZV(eV = Math.pow(UV, yV))) return new nV(EV(eV));
          for (xV = this, JV = pV[1]; !0 & yV && (JV = JV.times(xV), --yV), 0 !== yV;) yV /= 2, xV = xV.square();
          return JV
        }, nV.prototype.pow = QV.prototype.pow, wV.prototype.pow = function(VV) {
          var eV = IV(VV),
            xV = this.value,
            JV = eV.value,
            YV = BigInt(0),
            UV = BigInt(1),
            yV = BigInt(2);
          if (JV === YV) return pV[1];
          if (xV === YV) return pV[0];
          if (xV === UV) return pV[1];
          if (xV === BigInt(-1)) return eV.isEven() ? pV[1] : pV[-1];
          if (eV.isNegative()) return new wV(YV);
          for (var QV = this, nV = pV[1];
            (JV & UV) === UV && (nV = nV.times(QV), --JV), JV !== YV;) JV /= yV, QV = QV.square();
          return nV
        }, QV.prototype.modPow = function(VV, eV) {
          if (VV = IV(VV), (eV = IV(eV)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var xV = pV[1],
            JV = this.mod(eV);
          for (VV.isNegative() && (VV = VV.multiply(pV[-1]), JV = JV.modInv(eV)); VV.isPositive();) {
            if (JV.isZero()) return pV[0];
            VV.isOdd() && (xV = xV.multiply(JV).mod(eV)), VV = VV.divide(2), JV = JV.square().mod(eV)
          }
          return xV
        }, wV.prototype.modPow = nV.prototype.modPow = QV.prototype.modPow, QV.prototype.compareAbs = function(VV) {
          var eV = IV(VV),
            xV = this.value,
            JV = eV.value;
          return eV.isSmall ? 1 : WV(xV, JV)
        }, nV.prototype.compareAbs = function(VV) {
          var eV = IV(VV),
            xV = Math.abs(this.value),
            JV = eV.value;
          return eV.isSmall ? xV === (JV = Math.abs(JV)) ? 0 : xV > JV ? 1 : -1 : -1
        }, wV.prototype.compareAbs = function(VV) {
          var eV = this.value,
            xV = IV(VV).value;
          return (eV = eV >= 0 ? eV : -eV) === (xV = xV >= 0 ? xV : -xV) ? 0 : eV > xV ? 1 : -1
        }, QV.prototype.compare = function(VV) {
          if (VV === 1 / 0) return -1;
          if (VV === -1 / 0) return 1;
          var eV = IV(VV),
            xV = this.value,
            JV = eV.value;
          return this.sign !== eV.sign ? eV.sign ? 1 : -1 : eV.isSmall ? this.sign ? -1 : 1 : WV(xV, JV) * (this.sign ? -1 : 1)
        }, QV.prototype.compareTo = QV.prototype.compare, nV.prototype.compare = function(VV) {
          if (VV === 1 / 0) return -1;
          if (VV === -1 / 0) return 1;
          var eV = IV(VV),
            xV = this.value,
            JV = eV.value;
          return eV.isSmall ? xV == JV ? 0 : xV > JV ? 1 : -1 : xV < 0 !== eV.sign ? xV < 0 ? -1 : 1 : xV < 0 ? 1 : -1
        }, nV.prototype.compareTo = nV.prototype.compare, wV.prototype.compare = function(VV) {
          if (VV === 1 / 0) return -1;
          if (VV === -1 / 0) return 1;
          var eV = this.value,
            xV = IV(VV).value;
          return eV === xV ? 0 : eV > xV ? 1 : -1
        }, wV.prototype.compareTo = wV.prototype.compare, QV.prototype.equals = function(VV) {
          return 0 === this.compare(VV)
        }, wV.prototype.eq = wV.prototype.equals = nV.prototype.eq = nV.prototype.equals = QV.prototype.eq = QV.prototype.equals, QV.prototype.notEquals = function(VV) {
          return 0 !== this.compare(VV)
        }, wV.prototype.neq = wV.prototype.notEquals = nV.prototype.neq = nV.prototype.notEquals = QV.prototype.neq = QV.prototype.notEquals, QV.prototype.greater = function(VV) {
          return this.compare(VV) > 0
        }, wV.prototype.gt = wV.prototype.greater = nV.prototype.gt = nV.prototype.greater = QV.prototype.gt = QV.prototype.greater, QV.prototype.lesser = function(VV) {
          return this.compare(VV) < 0
        }, wV.prototype.lt = wV.prototype.lesser = nV.prototype.lt = nV.prototype.lesser = QV.prototype.lt = QV.prototype.lesser, QV.prototype.greaterOrEquals = function(VV) {
          return this.compare(VV) >= 0
        }, wV.prototype.geq = wV.prototype.greaterOrEquals = nV.prototype.geq = nV.prototype.greaterOrEquals = QV.prototype.geq = QV.prototype.greaterOrEquals, QV.prototype.lesserOrEquals = function(VV) {
          return this.compare(VV) <= 0
        }, wV.prototype.leq = wV.prototype.lesserOrEquals = nV.prototype.leq = nV.prototype.lesserOrEquals = QV.prototype.leq = QV.prototype.lesserOrEquals, QV.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, nV.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, wV.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, QV.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, nV.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, wV.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, QV.prototype.isPositive = function() {
          return !this.sign
        }, nV.prototype.isPositive = function() {
          return this.value > 0
        }, wV.prototype.isPositive = nV.prototype.isPositive, QV.prototype.isNegative = function() {
          return this.sign
        }, nV.prototype.isNegative = function() {
          return this.value < 0
        }, wV.prototype.isNegative = nV.prototype.isNegative, QV.prototype.isUnit = function() {
          return !1
        }, nV.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, wV.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, QV.prototype.isZero = function() {
          return !1
        }, nV.prototype.isZero = function() {
          return 0 === this.value
        }, wV.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, QV.prototype.isDivisibleBy = function(VV) {
          var eV = IV(VV);
          return !eV.isZero() && (!!eV.isUnit() || (0 === eV.compareAbs(2) ? this.isEven() : this.mod(eV).isZero()))
        }, wV.prototype.isDivisibleBy = nV.prototype.isDivisibleBy = QV.prototype.isDivisibleBy, QV.prototype.isPrime = function(xV) {
          var JV = RV(this);
          if (JV !== VV) return JV;
          var YV = this.abs(),
            UV = YV.bitLength();
          if (UV <= 64) return gV(YV, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var yV = Math.log(2) * UV.toJSNumber(), pV = Math.ceil(!0 === xV ? 2 * Math.pow(yV, 2) : yV), QV = [], nV = 0; nV < pV; nV++) QV.push(eV(nV + 2));
          return gV(YV, QV)
        }, wV.prototype.isPrime = nV.prototype.isPrime = QV.prototype.isPrime, QV.prototype.isProbablePrime = function(xV, JV) {
          var YV = RV(this);
          if (YV !== VV) return YV;
          for (var UV = this.abs(), yV = xV === VV ? 5 : xV, pV = [], QV = 0; QV < yV; QV++) pV.push(eV.randBetween(2, UV.minus(2), JV));
          return gV(UV, pV)
        }, wV.prototype.isProbablePrime = nV.prototype.isProbablePrime = QV.prototype.isProbablePrime, QV.prototype.modInv = function(VV) {
          for (var xV, JV, YV, UV = eV.zero, yV = eV.one, pV = IV(VV), QV = this.abs(); !QV.isZero();) xV = pV.divide(QV), JV = UV, YV = pV, UV = yV, pV = QV, yV = JV.subtract(xV.multiply(yV)), QV = YV.subtract(xV.multiply(QV));
          if (!pV.isUnit()) throw new Error(this.toString() + " and " + VV.toString() + " are not co-prime");
          return -1 === UV.compare(0) && (UV = UV.add(VV)), this.isNegative() ? UV.gr() : UV
        }, wV.prototype.modInv = nV.prototype.modInv = QV.prototype.modInv, QV.prototype.next = function() {
          var VV = this.value;
          return this.sign ? FV(VV, 1, this.sign) : new QV(qV(VV, 1), this.sign)
        }, nV.prototype.next = function() {
          var VV = this.value;
          return VV + 1 < JV ? new nV(VV + 1) : new QV(YV, !1)
        }, wV.prototype.next = function() {
          return new wV(this.value + BigInt(1))
        }, QV.prototype.prev = function() {
          var VV = this.value;
          return this.sign ? new QV(qV(VV, 1), !0) : FV(VV, 1, this.sign)
        }, nV.prototype.prev = function() {
          var VV = this.value;
          return VV - 1 > -JV ? new nV(VV - 1) : new QV(YV, !0)
        }, wV.prototype.prev = function() {
          return new wV(this.value - BigInt(1))
        };
        for (var DV = [1]; 2 * DV[DV.length - 1] <= xV;) DV.push(2 * DV[DV.length - 1]);
        var iV = DV.length,
          CV = DV[iV - 1];

        function aV(VV) {
          return Math.abs(VV) <= xV
        }

        function oV(VV, xV, JV) {
          xV = IV(xV);
          for (var YV = VV.isNegative(), UV = xV.isNegative(), yV = YV ? VV.not() : VV, pV = UV ? xV.not() : xV, QV = 0, nV = 0, wV = null, ZV = null, vV = []; !yV.isZero() || !pV.isZero();) QV = (wV = GV(yV, CV))[1].toJSNumber(), YV && (QV = CV - 1 - QV), nV = (ZV = GV(pV, CV))[1].toJSNumber(), UV && (nV = CV - 1 - nV), yV = wV[0], pV = ZV[0], vV.push(JV(QV, nV));
          for (var rV = 0 !== JV(YV ? 1 : 0, UV ? 1 : 0) ? eV(-1) : eV(0), kV = vV.length - 1; kV >= 0; kV -= 1) rV = rV.multiply(CV).add(eV(vV[kV]));
          return rV
        }
        QV.prototype.shiftLeft = function(VV) {
          var eV = IV(VV).toJSNumber();
          if (!aV(eV)) throw new Error(String(eV) + " is too large for shifting.");
          if (eV < 0) return this.shiftRight(-eV);
          var xV = this;
          if (xV.isZero()) return xV;
          for (; eV >= iV;) xV = xV.multiply(CV), eV -= iV - 1;
          return xV.multiply(DV[eV])
        }, wV.prototype.shiftLeft = nV.prototype.shiftLeft = QV.prototype.shiftLeft, QV.prototype.shiftRight = function(VV) {
          var eV, xV = IV(VV).toJSNumber();
          if (!aV(xV)) throw new Error(String(xV) + " is too large for shifting.");
          if (xV < 0) return this.shiftLeft(-xV);
          for (var JV = this; xV >= iV;) {
            if (JV.isZero() || JV.isNegative() && JV.isUnit()) return JV;
            JV = (eV = GV(JV, CV))[1].isNegative() ? eV[0].prev() : eV[0], xV -= iV - 1
          }
          return (eV = GV(JV, DV[xV]))[1].isNegative() ? eV[0].prev() : eV[0]
        }, wV.prototype.shiftRight = nV.prototype.shiftRight = QV.prototype.shiftRight, QV.prototype.not = function() {
          return this.gr().prev()
        }, wV.prototype.not = nV.prototype.not = QV.prototype.not, QV.prototype.and = function(VV) {
          return oV(this, VV, (function(VV, eV) {
            return VV & eV
          }))
        }, wV.prototype.and = nV.prototype.and = QV.prototype.and, QV.prototype.or = function(VV) {
          return oV(this, VV, (function(VV, eV) {
            return VV | eV
          }))
        }, wV.prototype.or = nV.prototype.or = QV.prototype.or, QV.prototype.xor = function(VV) {
          return oV(this, VV, (function(VV, eV) {
            return VV ^ eV
          }))
        }, wV.prototype.xor = nV.prototype.xor = QV.prototype.xor;
        var cV = 1 << 30;

        function hV(VV) {
          var eV = VV.value,
            JV = "number" === typeof eV ? eV | cV : "bigint" === typeof eV ? eV | BigInt(cV) : eV[0] + eV[1] * xV | 1073758208;
          return JV & -JV
        }

        function lV(VV, xV) {
          if (xV.compareTo(VV) <= 0) {
            var JV = lV(VV, xV.square(xV)),
              YV = JV.p,
              UV = JV.e,
              yV = YV.multiply(xV);
            return yV.compareTo(VV) <= 0 ? {
              p: yV,
              e: 2 * UV + 1
            } : {
              p: YV,
              e: 2 * UV
            }
          }
          return {
            p: eV(1),
            e: 0
          }
        }

        function LV(VV, eV) {
          return VV = IV(VV), eV = IV(eV), VV.greater(eV) ? VV : eV
        }

        function fV(VV, eV) {
          return VV = IV(VV), eV = IV(eV), VV.lesser(eV) ? VV : eV
        }

        function mV(VV, eV) {
          if (VV = IV(VV).abs(), eV = IV(eV).abs(), VV.equals(eV)) return VV;
          if (VV.isZero()) return eV;
          if (eV.isZero()) return VV;
          for (var xV, JV, YV = pV[1]; VV.isEven() && eV.isEven();) xV = fV(hV(VV), hV(eV)), VV = VV.divide(xV), eV = eV.divide(xV), YV = YV.multiply(xV);
          for (; VV.isEven();) VV = VV.divide(hV(VV));
          do {
            for (; eV.isEven();) eV = eV.divide(hV(eV));
            VV.greater(eV) && (JV = eV, eV = VV, VV = JV), eV = eV.subtract(VV)
          } while (!eV.isZero());
          return YV.isUnit() ? VV : VV.multiply(YV)
        }
        QV.prototype.bitLength = function() {
          var VV = this;
          return VV.compareTo(eV(0)) < 0 && (VV = VV.gr().subtract(eV(1))), 0 === VV.compareTo(eV(0)) ? eV(0) : eV(lV(VV, eV(2)).e).add(eV(1))
        }, wV.prototype.bitLength = nV.prototype.bitLength = QV.prototype.bitLength;
        var KV = function(VV, eV, xV, JV) {
          xV = xV || UV, VV = String(VV), JV || (VV = VV.toLowerCase(), xV = xV.toLowerCase());
          var YV, yV = VV.length,
            pV = Math.abs(eV),
            QV = {};
          for (YV = 0; YV < xV.length; YV++) QV[xV[YV]] = YV;
          for (YV = 0; YV < yV; YV++) {
            if ("-" !== (ZV = VV[YV]) && (ZV in QV && QV[ZV] >= pV)) {
              if ("1" === ZV && 1 === pV) continue;
              throw new Error(ZV + " is not a valid digit in base " + eV + ".")
            }
          }
          eV = IV(eV);
          var nV = [],
            wV = "-" === VV[0];
          for (YV = wV ? 1 : 0; YV < VV.length; YV++) {
            var ZV;
            if ((ZV = VV[YV]) in QV) nV.push(IV(QV[ZV]));
            else {
              if ("<" !== ZV) throw new Error(ZV + " is not a valid character");
              var vV = YV;
              do {
                YV++
              } while (">" !== VV[YV] && YV < VV.length);
              nV.push(IV(VV.slice(vV + 1, YV)))
            }
          }
          return HV(nV, eV, wV)
        };

        function HV(VV, eV, xV) {
          var JV, YV = pV[0],
            UV = pV[1];
          for (JV = VV.length - 1; JV >= 0; JV--) YV = YV.add(VV[JV].times(UV)), UV = UV.times(eV);
          return xV ? YV.gr() : YV
        }

        function uV(VV, xV) {
          if ((xV = eV(xV)).isZero()) {
            if (VV.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (xV.equals(-1)) {
            if (VV.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (VV.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-VV.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var JV = Array.apply(null, Array(VV.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return JV.unshift([1]), {
              value: [].concat.apply([], JV),
              isNegative: !1
            }
          }
          var YV = !1;
          if (VV.isNegative() && xV.isPositive() && (YV = !0, VV = VV.abs()), xV.isUnit()) return VV.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(VV.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: YV
          };
          for (var UV, yV = [], pV = VV; pV.isNegative() || pV.compareAbs(xV) >= 0;) {
            UV = pV.divmod(xV), pV = UV.quotient;
            var QV = UV.remainder;
            QV.isNegative() && (QV = xV.minus(QV).abs(), pV = pV.next()), yV.push(QV.toJSNumber())
          }
          return yV.push(pV.toJSNumber()), {
            value: yV.reverse(),
            isNegative: YV
          }
        }

        function sV(VV, eV, xV) {
          var JV = uV(VV, eV);
          return (JV.isNegative ? "-" : "") + JV.value.map((function(VV) {
            return function(VV, eV) {
              return VV < (eV = eV || UV).length ? eV[VV] : "<" + VV + ">"
            }(VV, xV)
          })).join("")
        }

        function SV(VV) {
          if (ZV(+VV)) {
            var eV = +VV;
            if (eV === EV(eV)) return yV ? new wV(BigInt(eV)) : new nV(eV);
            throw new Error("Invalid integer: " + VV)
          }
          var xV = "-" === VV[0];
          xV && (VV = VV.slice(1));
          var JV = VV.split(/e/i);
          if (JV.length > 2) throw new Error("Invalid integer: " + JV.join("e"));
          if (2 === JV.length) {
            var YV = JV[1];
            if ("+" === YV[0] && (YV = YV.slice(1)), (YV = +YV) !== EV(YV) || !ZV(YV)) throw new Error("Invalid integer: " + YV + " is not a valid exponent.");
            var UV = JV[0],
              pV = UV.indexOf(".");
            if (pV >= 0 && (YV -= UV.length - pV - 1, UV = UV.slice(0, pV) + UV.slice(pV + 1)), YV < 0) throw new Error("Cannot include negative exponent part for integers");
            VV = UV += new Array(YV + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(VV)) throw new Error("Invalid integer: " + VV);
          if (yV) return new wV(BigInt(xV ? "-" + VV : VV));
          for (var vV = [], rV = VV.length, bV = rV - 7; rV > 0;) vV.push(+VV.slice(bV, rV)), (bV -= 7) < 0 && (bV = 0), rV -= 7;
          return kV(vV), new QV(vV, xV)
        }

        function IV(VV) {
          return "number" === typeof VV ? function(VV) {
            if (yV) return new wV(BigInt(VV));
            if (ZV(VV)) {
              if (VV !== EV(VV)) throw new Error(VV + " is not an integer.");
              return new nV(VV)
            }
            return SV(VV.toString())
          }(VV) : "string" === typeof VV ? SV(VV) : "bigint" === typeof VV ? new wV(VV) : VV
        }
        QV.prototype.toArray = function(VV) {
          return uV(this, VV)
        }, nV.prototype.toArray = function(VV) {
          return uV(this, VV)
        }, wV.prototype.toArray = function(VV) {
          return uV(this, VV)
        }, QV.prototype.toString = function(eV, xV) {
          if (eV === VV && (eV = 10), 10 !== eV) return sV(this, eV, xV);
          for (var JV, YV = this.value, UV = YV.length, yV = String(YV[--UV]); --UV >= 0;) JV = String(YV[UV]), yV += "0000000".slice(JV.length) + JV;
          return (this.sign ? "-" : "") + yV
        }, nV.prototype.toString = function(eV, xV) {
          return eV === VV && (eV = 10), 10 != eV ? sV(this, eV, xV) : String(this.value)
        }, wV.prototype.toString = nV.prototype.toString, wV.prototype.toJSON = QV.prototype.toJSON = nV.prototype.toJSON = function() {
          return this.toString()
        }, QV.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, QV.prototype.toJSNumber = QV.prototype.valueOf, nV.prototype.valueOf = function() {
          return this.value
        }, nV.prototype.toJSNumber = nV.prototype.valueOf, wV.prototype.valueOf = wV.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var dV = 0; dV < 1e3; dV++) pV[dV] = IV(dV), dV > 0 && (pV[-dV] = IV(-dV));
        return pV.one = pV[1], pV.zero = pV[0], pV.minusOne = pV[-1], pV.max = LV, pV.min = fV, pV.gcd = mV, pV.lcm = function(VV, eV) {
          return VV = IV(VV).abs(), eV = IV(eV).abs(), VV.divide(mV(VV, eV)).multiply(eV)
        }, pV.isInstance = function(VV) {
          return VV instanceof QV || VV instanceof nV || VV instanceof wV
        }, pV.randBetween = function(VV, eV, JV) {
          VV = IV(VV), eV = IV(eV);
          var YV = JV || Math.random,
            UV = fV(VV, eV),
            yV = LV(VV, eV).subtract(UV).add(1);
          if (yV.isSmall) return UV.add(Math.floor(YV() * yV));
          for (var QV = uV(yV, xV).value, nV = [], wV = !0, ZV = 0; ZV < QV.length; ZV++) {
            var vV = wV ? QV[ZV] : xV,
              rV = EV(YV() * vV);
            nV.push(rV), rV < vV && (wV = !1)
          }
          return UV.add(pV.wZ(nV, xV, !1))
        }, pV.wZ = function(VV, eV, xV) {
          return HV(VV.map(IV), IV(eV || 10), xV)
        }, pV
      }();
      VV.hasOwnProperty("exports") && (VV.exports = eV)
    }(jx);
    var qx = UV(jx.exports);

    function tx(VV, eV, xV) {
      let JV = 0;
      for (let YV = 0; YV < xV; YV++) {
        const xV = VV[eV + YV];
        if (void 0 === xV) break;
        JV += xV * 16 ** YV
      }
      return JV
    }

    function Fx(VV) {
      const eV = [];
      for (let xV = 0; xV < VV.length; xV++) {
        let JV = Number(VV[xV]);
        for (let VV = 0; JV || VV < eV.length; VV++) JV += 10 * (eV[VV] || 0), eV[VV] = JV % 16, JV = (JV - eV[VV]) / 16
      }
      return eV
    }
    class Tx {
      static fromString(VV) {
        return new Tx(function(VV) {
          const eV = Fx(VV),
            xV = Array(4);
          for (let JV = 0; JV < 4; JV++) xV[3 - JV] = tx(eV, 4 * JV, 4);
          return xV
        }(VV), VV)
      }
      static fromBit(VV) {
        const eV = Array(4),
          xV = Math.floor(VV / 16);
        for (let JV = 0; JV < 4; JV++) eV[3 - JV] = JV === xV ? 1 << VV - 16 * xV : 0;
        return new Tx(eV)
      }
      constructor(VV, eV) {
        this.parts = VV, this.str = eV
      }
      and(VV) {
        let {
          parts: eV
        } = VV;
        return new Tx(this.parts.map(((VV, xV) => VV & eV[xV])))
      }
      or(VV) {
        let {
          parts: eV
        } = VV;
        return new Tx(this.parts.map(((VV, xV) => VV | eV[xV])))
      }
      xor(VV) {
        let {
          parts: eV
        } = VV;
        return new Tx(this.parts.map(((VV, xV) => VV ^ eV[xV])))
      }
      not() {
        return new Tx(this.parts.map((VV => ~VV)))
      }
      equals(VV) {
        let {
          parts: eV
        } = VV;
        return this.parts.every(((VV, xV) => VV === eV[xV]))
      }
      toString() {
        if (null != this.str) return this.str;
        const VV = new Array(16);
        return this.parts.forEach(((eV, xV) => {
          const JV = Fx(eV.toString());
          for (let YV = 0; YV < 4; YV++) VV[YV + 4 * xV] = JV[3 - YV] || 0
        })), this.str = qx.wZ(VV, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const Px = function() {
      try {
        return BigInt, !0
      } catch (VV) {
        return !1
      }
    }();
    Px && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const Ax = {},
      Nx = Px ? function(VV) {
        return BigInt(VV)
      } : function(VV) {
        return VV instanceof Tx ? VV : ("number" === typeof VV && (VV = VV.toString()), null != Ax[VV] || (Ax[VV] = Tx.fromString(VV)), Ax[VV])
      },
      Xx = Nx(0),
      Mx = Px ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xx) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xx)
      } : function() {
        let VV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xx;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xx).and(VV)
      },
      zx = Px ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xx) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xx)
      } : function() {
        let VV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xx;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xx).or(VV)
      },
      Gx = Px ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xx) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xx)
      } : function() {
        let VV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xx;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xx).xor(VV)
      },
      Wx = Px ? function(VV, eV) {
        return VV === eV
      } : function(VV, eV) {
        return null == VV || null == eV ? VV == eV : VV.equals(eV)
      };
    var Rx, gx, Dx, ix, Cx = {
      combine: function() {
        let VV = arguments.length <= 0 ? void 0 : arguments[0];
        for (let eV = 1; eV < arguments.length; eV++) VV = zx(VV, eV < 0 || arguments.length <= eV ? void 0 : arguments[eV]);
        return VV
      },
      add: function(VV, eV) {
        return eV === Xx ? VV : zx(VV, eV)
      },
      remove: function(VV, eV) {
        return eV === Xx ? VV : Gx(VV, Mx(VV, eV))
      },
      filter: Mx,
      invert: Px ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xx)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Xx).not()
      },
      has: function(VV, eV) {
        return Wx(Mx(VV, eV), eV)
      },
      hasAny: function(VV, eV) {
        return !Wx(Mx(VV, eV), Xx)
      },
      equals: Wx,
      deserialize: Nx,
      getFlag: Px ? function(VV) {
        return BigInt(1) << BigInt(VV)
      } : function(VV) {
        return Tx.fromBit(VV)
      }
    };
    ! function(VV) {
      VV[VV.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", VV[VV.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", VV[VV.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", VV[VV.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", VV[VV.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", VV[VV.RATELIMITED = 4002] = "RATELIMITED", VV[VV.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", VV[VV.INVALID_VERSION = 4004] = "INVALID_VERSION", VV[VV.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(Rx || (Rx = {})),
    function(VV) {
      VV[VV.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", VV[VV.INVALID_COMMAND = 4002] = "INVALID_COMMAND", VV[VV.INVALID_EVENT = 4004] = "INVALID_EVENT", VV[VV.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(gx || (gx = {})),
    function(VV) {
      VV.LANDSCAPE = "landscape", VV.PORTRAIT = "portrait"
    }(Dx || (Dx = {})),
    function(VV) {
      VV.MOBILE = "mobile", VV.DESKTOP = "desktop"
    }(ix || (ix = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: Cx.getFlag(0),
      ADMINISTRATOR: Cx.getFlag(3)
    });

    function ax(VV) {
      return rx((eV => {
        var xV;
        const [JV] = null !== (xV = Object.entries(VV).find((VV => {
          let [, xV] = VV;
          return xV === eV
        }))) && void 0 !== xV ? xV : [];
        return null != eV && void 0 === JV ? VV.UNHANDLED : eV
      }), De().or(ie()))
    }
    const ox = Bx.object({
        image_url: Bx.string()
      }),
      cx = Bx.object({
        mediaUrl: Bx.string().max(1024)
      }),
      hx = Bx.object({
        access_token: Bx.union([Bx.string(), Bx.null()]).optional()
      }),
      lx = Bx.object({
        access_token: Bx.string(),
        user: Bx.object({
          username: Bx.string(),
          discriminator: Bx.string(),
          id: Bx.string(),
          avatar: Bx.union([Bx.string(), Bx.null()]).optional(),
          public_flags: Bx.number(),
          global_name: Bx.union([Bx.string(), Bx.null()]).optional()
        }),
        scopes: Bx.array(function(VV) {
          const eV = We().transform((eV => {
            const xV = VV.safeParse(eV);
            return xV.success ? xV.data : VV._def.defaultValue()
          }));
          return eV.overlayType = VV, eV
        }(Bx.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(Bx.literal(-1)).default(-1))),
        expires: Bx.string(),
        application: Bx.object({
          description: Bx.string(),
          icon: Bx.union([Bx.string(), Bx.null()]).optional(),
          id: Bx.string(),
          rpc_origins: Bx.array(Bx.string()).optional(),
          name: Bx.string()
        })
      }),
      Lx = Bx.object({
        participants: Bx.array(Bx.object({
          id: Bx.string(),
          username: Bx.string(),
          global_name: Bx.union([Bx.string(), Bx.null()]).optional(),
          discriminator: Bx.string(),
          avatar: Bx.union([Bx.string(), Bx.null()]).optional(),
          flags: Bx.number(),
          bot: Bx.boolean(),
          avatar_decoration_data: Bx.union([Bx.object({
            asset: Bx.string(),
            skuId: Bx.string().optional()
          }), Bx.null()]).optional(),
          premium_type: Bx.union([Bx.number(), Bx.null()]).optional(),
          nickname: Bx.string().optional()
        }))
      });
    var fx;
    ! function(VV) {
      VV.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", VV.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", VV.AUTHENTICATE = "AUTHENTICATE", VV.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(fx || (fx = {}));
    const mx = Bx.object({}).optional().nullable(),
      Kx = Bx.void(),
      Hx = {
        [fx.INITIATE_IMAGE_UPLOAD]: {
          request: Kx,
          response: ox
        },
        [fx.OPEN_SHARE_MOMENT_DIALOG]: {
          request: cx,
          response: mx
        },
        [fx.AUTHENTICATE]: {
          request: hx,
          response: lx
        },
        [fx.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: Kx,
          response: Lx
        }
      },
      ux = "DISPATCH";
    var sx;
    ! function(VV) {
      VV.AUTHORIZE = "AUTHORIZE", VV.AUTHENTICATE = "AUTHENTICATE", VV.GET_GUILDS = "GET_GUILDS", VV.GET_GUILD = "GET_GUILD", VV.GET_CHANNEL = "GET_CHANNEL", VV.GET_CHANNELS = "GET_CHANNELS", VV.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", VV.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", VV.SUBSCRIBE = "SUBSCRIBE", VV.UNSUBSCRIBE = "UNSUBSCRIBE", VV.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", VV.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", VV.SET_ACTIVITY = "SET_ACTIVITY", VV.GET_SKUS = "GET_SKUS", VV.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", VV.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", VV.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", VV.START_PURCHASE = "START_PURCHASE", VV.SET_CONFIG = "SET_CONFIG", VV.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", VV.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", VV.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", VV.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", VV.CAPTURE_LOG = "CAPTURE_LOG", VV.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", VV.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", VV.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", VV.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", VV.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", VV.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", VV.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(sx || (sx = {}));
    const Sx = se({
        cmd: De(),
        data: me(),
        evt: Le(),
        nonce: De()
      }).passthrough(),
      Ix = (ax(Object.assign(Object.assign({}, lx.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), se({
        id: De(),
        username: De(),
        discriminator: De(),
        global_name: De().optional().nullable(),
        avatar: De().optional().nullable(),
        avatar_decoration_data: se({
          asset: De(),
          sku_id: De().optional()
        }).nullable(),
        bot: oe(),
        flags: ie().optional().nullable(),
        premium_type: ie().optional().nullable()
      })),
      dx = se({
        user: Ix,
        nick: De().optional().nullable(),
        roles: ue(De()),
        joined_at: De(),
        deaf: oe(),
        mute: oe()
      }),
      Ox = se({
        id: De(),
        name: De().optional().nullable(),
        roles: ue(De()).optional().nullable(),
        user: Ix.optional().nullable(),
        require_colons: oe().optional().nullable(),
        managed: oe().optional().nullable(),
        animated: oe().optional().nullable(),
        available: oe().optional().nullable()
      }),
      VJ = se({
        mute: oe(),
        deaf: oe(),
        self_mute: oe(),
        self_deaf: oe(),
        suppress: oe()
      }),
      eJ = se({
        mute: oe(),
        nick: De(),
        user: Ix,
        voice_state: VJ,
        volume: ie()
      }),
      xJ = ax({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      JJ = se({
        name: De(),
        type: ie(),
        url: De().optional().nullable(),
        created_at: ie().optional().nullable(),
        timestamps: se({
          start: ie(),
          end: ie()
        }).partial().optional().nullable(),
        application_id: De().optional().nullable(),
        details: De().optional().nullable(),
        state: De().optional().nullable(),
        emoji: Ox.optional().nullable(),
        party: se({
          id: De().optional().nullable(),
          size: ue(ie()).optional().nullable()
        }).optional().nullable(),
        assets: se({
          large_image: De().nullable(),
          large_text: De().nullable(),
          small_image: De().nullable(),
          small_text: De().nullable()
        }).partial().optional().nullable(),
        secrets: se({
          join: De(),
          match: De()
        }).partial().optional().nullable(),
        instance: oe().optional().nullable(),
        flags: ie().optional().nullable()
      }),
      YJ = se({
        id: De(),
        type: ax({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: De(),
        deny: De()
      }),
      UJ = {
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
      yJ = se({
        id: De(),
        type: ax(UJ),
        guild_id: De().optional().nullable(),
        position: ie().optional().nullable(),
        permission_overwrites: ue(YJ).optional().nullable(),
        name: De().optional().nullable(),
        topic: De().optional().nullable(),
        nsfw: oe().optional().nullable(),
        last_message_id: De().optional().nullable(),
        bitrate: ie().optional().nullable(),
        user_limit: ie().optional().nullable(),
        rate_limit_per_user: ie().optional().nullable(),
        recipients: ue(Ix).optional().nullable(),
        icon: De().optional().nullable(),
        owner_id: De().optional().nullable(),
        application_id: De().optional().nullable(),
        parent_id: De().optional().nullable(),
        last_pin_timestamp: De().optional().nullable()
      }),
      pJ = se({
        user: Ix,
        guild_id: De(),
        status: xJ,
        activities: ue(JJ),
        client_status: se({
          desktop: xJ,
          mobile: xJ,
          web: xJ
        }).partial()
      }),
      QJ = se({
        id: De(),
        name: De(),
        color: ie(),
        hoist: oe(),
        position: ie(),
        permissions: De(),
        managed: oe(),
        mentionable: oe()
      }),
      nJ = (se({
        id: De(),
        name: De(),
        owner_id: De(),
        icon: De().nullable(),
        icon_hash: De().optional().nullable(),
        splash: De().nullable(),
        discovery_splash: De().nullable(),
        owner: oe().optional().nullable(),
        permissions: De().optional().nullable(),
        region: De(),
        afk_channel_id: De().nullable(),
        afk_timeout: ie(),
        widget_enabled: oe().optional().nullable(),
        widget_channel_id: De().optional().nullable(),
        verification_level: ie(),
        default_message_notifications: ie(),
        explicit_content_filter: ie(),
        roles: ue(QJ),
        emojis: ue(Ox),
        features: ue(De()),
        mfa_level: ie(),
        application_id: De().nullable(),
        system_channel_id: De().nullable(),
        system_channel_flags: ie(),
        rules_channel_id: De().nullable(),
        joined_at: De().optional().nullable(),
        large: oe().optional().nullable(),
        unavailable: oe().optional().nullable(),
        member_count: ie().optional().nullable(),
        voice_states: ue(VJ).optional().nullable(),
        members: ue(dx).optional().nullable(),
        channels: ue(yJ).optional().nullable(),
        presences: ue(pJ).optional().nullable(),
        max_presences: ie().optional().nullable(),
        max_members: ie().optional().nullable(),
        vanity_url_code: De().nullable(),
        description: De().nullable(),
        banner: De().nullable(),
        premium_tier: ie(),
        premium_subscription_count: ie().optional().nullable(),
        preferred_locale: De(),
        public_updates_channel_id: De().nullable(),
        max_video_channel_users: ie().optional().nullable(),
        approximate_member_count: ie().optional().nullable(),
        approximate_presence_count: ie().optional().nullable()
      }), se({
        id: De(),
        guild_id: De(),
        type: ie(),
        name: De()
      })),
      wJ = se({
        id: De(),
        filename: De(),
        size: ie(),
        url: De(),
        proxy_url: De(),
        height: ie().optional().nullable(),
        width: ie().optional().nullable()
      }),
      ZJ = se({
        text: De(),
        icon_url: De().optional().nullable(),
        proxy_icon_url: De().optional().nullable()
      }),
      vJ = se({
        url: De().optional().nullable(),
        proxy_url: De().optional().nullable(),
        height: ie().optional().nullable(),
        width: ie().optional().nullable()
      }),
      rJ = vJ.omit({
        proxy_url: !0
      }),
      kJ = se({
        name: De().optional().nullable(),
        url: De().optional().nullable()
      }),
      bJ = se({
        name: De().optional().nullable(),
        url: De().optional().nullable(),
        icon_url: De().optional().nullable(),
        proxy_icon_url: De().optional().nullable()
      }),
      EJ = se({
        name: De(),
        value: De(),
        inline: oe()
      }),
      BJ = se({
        title: De().optional().nullable(),
        type: De().optional().nullable(),
        description: De().optional().nullable(),
        url: De().optional().nullable(),
        timestamp: De().optional().nullable(),
        color: ie().optional().nullable(),
        footer: ZJ.optional().nullable(),
        image: vJ.optional().nullable(),
        thumbnail: vJ.optional().nullable(),
        video: rJ.optional().nullable(),
        provider: kJ.optional().nullable(),
        author: bJ.optional().nullable(),
        fields: ue(EJ).optional().nullable()
      }),
      jJ = se({
        count: ie(),
        me: oe(),
        emoji: Ox
      }),
      qJ = se({
        type: ie(),
        party_id: De().optional().nullable()
      }),
      tJ = se({
        id: De(),
        cover_image: De().optional().nullable(),
        description: De(),
        icon: De().optional().nullable(),
        name: De()
      }),
      FJ = se({
        message_id: De().optional().nullable(),
        channel_id: De().optional().nullable(),
        guild_id: De().optional().nullable()
      }),
      TJ = se({
        id: De(),
        channel_id: De(),
        guild_id: De().optional().nullable(),
        author: Ix.optional().nullable(),
        member: dx.optional().nullable(),
        content: De(),
        timestamp: De(),
        edited_timestamp: De().optional().nullable(),
        tts: oe(),
        mention_everyone: oe(),
        mentions: ue(Ix),
        mention_roles: ue(De()),
        mention_channels: ue(nJ),
        attachments: ue(wJ),
        embeds: ue(BJ),
        reactions: ue(jJ).optional().nullable(),
        nonce: Ie([De(), ie()]).optional().nullable(),
        pinned: oe(),
        webhook_id: De().optional().nullable(),
        type: ie(),
        activity: qJ.optional().nullable(),
        application: tJ.optional().nullable(),
        message_reference: FJ.optional().nullable(),
        flags: ie().optional().nullable(),
        stickers: ue(me()).optional().nullable(),
        referenced_message: me().optional().nullable()
      }),
      PJ = se({
        id: De(),
        name: De()
      }),
      AJ = se({
        type: ax({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: ie(),
        name: De()
      }),
      NJ = se({
        type: ax({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: oe(),
        threshold: ie(),
        shortcut: ue(AJ),
        delay: ie()
      }),
      XJ = se({
        device_id: De(),
        volume: ie(),
        available_devices: ue(PJ)
      }),
      MJ = (se({
        type: ax({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: De(),
        vendor: se({
          name: De(),
          url: De()
        }),
        model: se({
          name: De(),
          url: De()
        }),
        related: ue(De()),
        echo_cancellation: oe().optional().nullable(),
        noise_suppression: oe().optional().nullable(),
        automatic_gain_control: oe().optional().nullable(),
        hardware_mute: oe().optional().nullable()
      }), se({
        id: De(),
        name: De(),
        type: ax({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: se({
          amount: ie(),
          currency: De()
        }),
        application_id: De(),
        flags: ie(),
        release_date: De().nullable()
      })),
      zJ = se({
        id: De(),
        sku_id: De(),
        application_id: De(),
        user_id: De(),
        gift_code_flags: ie(),
        type: ax({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: De().optional().nullable(),
        branches: ue(De()).optional().nullable(),
        starts_at: De().optional().nullable(),
        ends_at: De().optional().nullable(),
        parent_id: De().optional().nullable(),
        consumed: oe().optional().nullable(),
        deleted: oe().optional().nullable(),
        gift_code_batch_id: De().optional().nullable()
      }),
      GJ = (ax({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), ax({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      WJ = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      RJ = (ax(WJ), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      gJ = (ax(RJ), "ERROR");
    var DJ;
    ! function(VV) {
      VV.READY = "READY", VV.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", VV.SPEAKING_START = "SPEAKING_START", VV.SPEAKING_STOP = "SPEAKING_STOP", VV.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", VV.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", VV.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", VV.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", VV.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", VV.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(DJ || (DJ = {}));
    const iJ = Sx.extend({
        evt: Qx(DJ),
        nonce: De().nullable(),
        cmd: yx(ux),
        data: se({}).passthrough()
      }),
      CJ = Sx.extend({
        evt: yx(gJ),
        data: se({
          code: ie(),
          message: De().optional()
        }).passthrough(),
        cmd: Qx(sx),
        nonce: De().nullable()
      }),
      aJ = iJ.extend({
        evt: De()
      }),
      oJ = Ie([iJ, aJ, CJ]);
    const cJ = {
      [DJ.READY]: {
        payload: iJ.extend({
          evt: yx(DJ.READY),
          data: se({
            v: ie(),
            config: se({
              cdn_host: De().optional(),
              api_endpoint: De(),
              environment: De()
            }),
            user: se({
              id: De(),
              username: De(),
              discriminator: De(),
              avatar: De().optional()
            }).optional()
          })
        })
      },
      [DJ.VOICE_STATE_UPDATE]: {
        payload: iJ.extend({
          evt: yx(DJ.VOICE_STATE_UPDATE),
          data: eJ
        }),
        subscribeArgs: se({
          channel_id: De()
        })
      },
      [DJ.SPEAKING_START]: {
        payload: iJ.extend({
          evt: yx(DJ.SPEAKING_START),
          data: se({
            lobby_id: De().optional(),
            channel_id: De().optional(),
            user_id: De()
          })
        }),
        subscribeArgs: se({
          lobby_id: De().nullable().optional(),
          channel_id: De().nullable().optional()
        })
      },
      [DJ.SPEAKING_STOP]: {
        payload: iJ.extend({
          evt: yx(DJ.SPEAKING_STOP),
          data: se({
            lobby_id: De().optional(),
            channel_id: De().optional(),
            user_id: De()
          })
        }),
        subscribeArgs: se({
          lobby_id: De().nullable().optional(),
          channel_id: De().nullable().optional()
        })
      },
      [DJ.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: iJ.extend({
          evt: yx(DJ.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: se({
            layout_mode: ax(RJ)
          })
        })
      },
      [DJ.ORIENTATION_UPDATE]: {
        payload: iJ.extend({
          evt: yx(DJ.ORIENTATION_UPDATE),
          data: se({
            screen_orientation: ax(WJ),
            orientation: Qx(Dx)
          })
        })
      },
      [DJ.CURRENT_USER_UPDATE]: {
        payload: iJ.extend({
          evt: yx(DJ.CURRENT_USER_UPDATE),
          data: Ix
        })
      },
      [DJ.ENTITLEMENT_CREATE]: {
        payload: iJ.extend({
          evt: yx(DJ.ENTITLEMENT_CREATE),
          data: se({
            entitlement: zJ
          })
        })
      },
      [DJ.THERMAL_STATE_UPDATE]: {
        payload: iJ.extend({
          evt: yx(DJ.THERMAL_STATE_UPDATE),
          data: se({
            thermal_state: GJ
          })
        })
      },
      [DJ.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: iJ.extend({
          evt: yx(DJ.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: se({
            participants: Lx.shape.participants
          })
        })
      }
    };
    const hJ = se({}).nullable(),
      lJ = se({
        code: De()
      }),
      LJ = se({
        guilds: ue(se({
          id: De(),
          name: De()
        }))
      }),
      fJ = se({
        id: De(),
        name: De(),
        icon_url: De().optional(),
        members: ue(dx)
      }),
      mJ = se({
        id: De(),
        type: ax(UJ),
        guild_id: De().optional().nullable(),
        name: De().optional().nullable(),
        topic: De().optional().nullable(),
        bitrate: ie().optional().nullable(),
        user_limit: ie().optional().nullable(),
        position: ie().optional().nullable(),
        voice_states: ue(eJ),
        messages: ue(TJ)
      }),
      KJ = se({
        channels: ue(yJ)
      }),
      HJ = (mJ.nullable(), mJ.nullable()),
      uJ = mJ.nullable(),
      sJ = (se({
        input: XJ,
        output: XJ,
        mode: NJ,
        automatic_gain_control: oe(),
        echo_cancellation: oe(),
        noise_suppression: oe(),
        qos: oe(),
        silence_warning: oe(),
        deaf: oe(),
        mute: oe()
      }), se({
        evt: De()
      })),
      SJ = se({
        shortcut: AJ
      }),
      IJ = JJ,
      dJ = se({
        skus: ue(MJ)
      }),
      OJ = se({
        entitlements: ue(zJ)
      }),
      VY = ue(zJ).nullable(),
      eY = se({
        use_interactive_pip: oe()
      }),
      xY = se({
        locale: De()
      }),
      JY = se({
        enabled: oe()
      }),
      YY = se({
        permissions: ae().or(De())
      }),
      UY = se({
        iosKeyboardResizesView: Zx(oe())
      }),
      yY = Sx.extend({
        cmd: Qx(sx),
        evt: Le()
      });

    function pY(VV) {
      let {
        cmd: eV,
        data: xV
      } = VV;
      switch (eV) {
        case sx.AUTHORIZE:
          return lJ.parse(xV);
        case sx.CAPTURE_SHORTCUT:
          return SJ.parse(xV);
        case sx.ENCOURAGE_HW_ACCELERATION:
          return JY.parse(xV);
        case sx.GET_CHANNEL:
          return mJ.parse(xV);
        case sx.GET_CHANNELS:
          return KJ.parse(xV);
        case sx.GET_CHANNEL_PERMISSIONS:
          return YY.parse(xV);
        case sx.GET_GUILD:
          return fJ.parse(xV);
        case sx.GET_GUILDS:
          return LJ.parse(xV);
        case sx.GET_PLATFORM_BEHAVIORS:
          return UY.parse(xV);
        case sx.GET_CHANNEL:
          return mJ.parse(xV);
        case sx.SELECT_TEXT_CHANNEL:
          return uJ.parse(xV);
        case sx.SELECT_VOICE_CHANNEL:
          return HJ.parse(xV);
        case sx.SET_ACTIVITY:
          return IJ.parse(xV);
        case sx.GET_SKUS_EMBEDDED:
          return dJ.parse(xV);
        case sx.GET_ENTITLEMENTS_EMBEDDED:
          return OJ.parse(xV);
        case sx.SET_CONFIG:
          return eY.parse(xV);
        case sx.START_PURCHASE:
          return VY.parse(xV);
        case sx.SUBSCRIBE:
        case sx.UNSUBSCRIBE:
          return sJ.parse(xV);
        case sx.USER_SETTINGS_GET_LOCALE:
          return xY.parse(xV);
        case sx.OPEN_EXTERNAL_LINK:
        case sx.SET_ORIENTATION_LOCK_STATE:
        case sx.SET_CERTIFIED_DEVICES:
        case sx.SEND_ANALYTICS_EVENT:
        case sx.OPEN_INVITE_DIALOG:
        case sx.CAPTURE_LOG:
        case sx.GET_SKUS:
        case sx.GET_ENTITLEMENTS:
          return hJ.parse(xV);
        case sx.AUTHENTICATE:
        case sx.INITIATE_IMAGE_UPLOAD:
        case sx.OPEN_SHARE_MOMENT_DIALOG:
        case sx.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: VV
          } = Hx[eV];
          return VV.parse(xV);
        default:
          ! function(VV, eV) {
            throw eV
          }(0, new Error(`Unrecognized command ${eV}`))
      }
    }
    se({
      frame_id: De(),
      platform: Qx(ix).optional().nullable()
    }), se({
      v: yx(1),
      encoding: yx("json").optional(),
      client_id: De(),
      frame_id: De()
    });
    const QY = se({
        code: ie(),
        message: De().optional()
      }),
      nY = se({
        evt: De().nullable(),
        nonce: De().nullable(),
        data: me().nullable(),
        cmd: De()
      }).passthrough();

    function wY(VV) {
      const eV = nY.parse(VV);
      return null != eV.evt ? eV.evt === gJ ? CJ.parse(eV) : function(VV) {
        const eV = VV.evt;
        if (!(eV in DJ)) throw new Error(`Unrecognized event type ${VV.evt}`);
        return cJ[eV].payload.parse(VV)
      }(oJ.parse(eV)) : function(VV) {
        return Object.assign(Object.assign({}, VV), {
          data: pY(VV)
        })
      }(yY.passthrough().parse(eV))
    }

    function ZY(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const YV = Sx.extend({
        cmd: yx(eV),
        data: xV
      });
      return async xV => {
        const UV = await VV({
          cmd: eV,
          args: xV,
          transfer: JV(xV)
        });
        return YV.parse(UV).data
      }
    }

    function vY(VV) {
      let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const xV = Hx[VV].response,
        JV = Sx.extend({
          cmd: yx(VV),
          data: xV
        });
      return xV => async YV => {
        const UV = await xV({
          cmd: VV,
          args: YV,
          transfer: eV(YV)
        });
        return JV.parse(UV).data
      }
    }
    const rY = vY(fx.AUTHENTICATE),
      kY = VV => ZY(VV, sx.AUTHORIZE, lJ),
      bY = VV => ZY(VV, sx.CAPTURE_LOG, hJ),
      EY = VV => ZY(VV, sx.ENCOURAGE_HW_ACCELERATION, JY),
      BY = VV => ZY(VV, sx.GET_ENTITLEMENTS_EMBEDDED, OJ),
      jY = VV => ZY(VV, sx.GET_SKUS_EMBEDDED, dJ),
      qY = VV => ZY(VV, sx.GET_CHANNEL_PERMISSIONS, YY),
      tY = VV => ZY(VV, sx.GET_PLATFORM_BEHAVIORS, UY),
      FY = VV => ZY(VV, sx.OPEN_EXTERNAL_LINK, hJ),
      TY = VV => ZY(VV, sx.OPEN_INVITE_DIALOG, hJ),
      PY = vY(fx.OPEN_SHARE_MOMENT_DIALOG);
    JJ.Pr({
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
      type: JJ.shape.type.optional(),
      instance: JJ.shape.instance.optional()
    }).nullable();
    const AY = VV => ZY(VV, sx.SET_ACTIVITY, IJ),
      NY = VV => ZY(VV, sx.SET_CONFIG, eY);
    const XY = VV => ({
        lock_state: VV.lock_state,
        picture_in_picture_lock_state: VV.picture_in_picture_lock_state
      }),
      MY = VV => function(VV) {
        let {
          sendCommand: eV,
          cmd: xV,
          response: JV,
          fallbackTransform: YV,
          transferTransform: UV = () => {}
        } = VV;
        const yV = Sx.extend({
          cmd: yx(xV),
          data: JV
        });
        return async VV => {
          try {
            const JV = await eV({
              cmd: xV,
              args: VV,
              transfer: UV(VV)
            });
            return yV.parse(JV).data
          } catch (JV) {
            if (JV.code === gx.INVALID_PAYLOAD) {
              const JV = YV(VV),
                pV = await eV({
                  cmd: xV,
                  args: JV,
                  transfer: UV(JV)
                });
              return yV.parse(pV).data
            }
            throw JV
          }
        }
      }({
        sendCommand: VV,
        cmd: sx.SET_ORIENTATION_LOCK_STATE,
        response: hJ,
        fallbackTransform: XY
      }),
      zY = VV => ZY(VV, sx.START_PURCHASE, VY),
      GY = VV => ZY(VV, sx.USER_SETTINGS_GET_LOCALE, xY),
      WY = vY(fx.INITIATE_IMAGE_UPLOAD),
      RY = VV => ZY(VV, sx.GET_CHANNEL, mJ),
      gY = vY(fx.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var DY = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function iY(VV) {
      return "string" === typeof VV && DY.test(VV)
    }
    for (var CY = [], aY = 0; aY < 256; ++aY) CY.push((aY + 256).toString(16).substr(1));

    function oY(VV) {
      var eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        xV = (CY[VV[eV + 0]] + CY[VV[eV + 1]] + CY[VV[eV + 2]] + CY[VV[eV + 3]] + "-" + CY[VV[eV + 4]] + CY[VV[eV + 5]] + "-" + CY[VV[eV + 6]] + CY[VV[eV + 7]] + "-" + CY[VV[eV + 8]] + CY[VV[eV + 9]] + "-" + CY[VV[eV + 10]] + CY[VV[eV + 11]] + CY[VV[eV + 12]] + CY[VV[eV + 13]] + CY[VV[eV + 14]] + CY[VV[eV + 15]]).toLowerCase();
      if (!iY(xV)) throw TypeError("Stringified UUID is invalid");
      return xV
    }
    var cY;

    function hY(VV, eV, xV) {
      function JV(VV, JV, YV, UV) {
        if ("string" === typeof VV && (VV = function(VV) {
            VV = unescape(encodeURIComponent(VV));
            for (var eV = [], xV = 0; xV < VV.length; ++xV) eV.push(VV.charCodeAt(xV));
            return eV
          }(VV)), "string" === typeof JV && (JV = function(VV) {
            if (!iY(VV)) throw TypeError("Invalid UUID");
            var eV, xV = new Uint8Array(16);
            return xV[0] = (eV = parseInt(VV.slice(0, 8), 16)) >>> 24, xV[1] = eV >>> 16 & 255, xV[2] = eV >>> 8 & 255, xV[3] = 255 & eV, xV[4] = (eV = parseInt(VV.slice(9, 13), 16)) >>> 8, xV[5] = 255 & eV, xV[6] = (eV = parseInt(VV.slice(14, 18), 16)) >>> 8, xV[7] = 255 & eV, xV[8] = (eV = parseInt(VV.slice(19, 23), 16)) >>> 8, xV[9] = 255 & eV, xV[10] = (eV = parseInt(VV.slice(24, 36), 16)) / 1099511627776 & 255, xV[11] = eV / 4294967296 & 255, xV[12] = eV >>> 24 & 255, xV[13] = eV >>> 16 & 255, xV[14] = eV >>> 8 & 255, xV[15] = 255 & eV, xV
          }(JV)), 16 !== JV.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var yV = new Uint8Array(16 + VV.length);
        if (yV.set(JV), yV.set(VV, JV.length), (yV = xV(yV))[6] = 15 & yV[6] | eV, yV[8] = 63 & yV[8] | 128, YV) {
          UV = UV || 0;
          for (var pV = 0; pV < 16; ++pV) YV[UV + pV] = yV[pV];
          return YV
        }
        return oY(yV)
      }
      try {
        JV.name = VV
      } catch (YV) {}
      return JV.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", JV.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", JV
    }

    function lY(VV) {
      return 14 + (VV + 64 >>> 9 << 4) + 1
    }

    function LY(VV, eV) {
      var xV = (65535 & VV) + (65535 & eV);
      return (VV >> 16) + (eV >> 16) + (xV >> 16) << 16 | 65535 & xV
    }

    function fY(VV, eV, xV, JV, YV, UV) {
      return LY((yV = LY(LY(eV, VV), LY(JV, UV))) << (pV = YV) | yV >>> 32 - pV, xV);
      var yV, pV
    }

    function mY(VV, eV, xV, JV, YV, UV, yV) {
      return fY(eV & xV | ~eV & JV, VV, eV, YV, UV, yV)
    }

    function KY(VV, eV, xV, JV, YV, UV, yV) {
      return fY(eV & JV | xV & ~JV, VV, eV, YV, UV, yV)
    }

    function HY(VV, eV, xV, JV, YV, UV, yV) {
      return fY(eV ^ xV ^ JV, VV, eV, YV, UV, yV)
    }

    function uY(VV, eV, xV, JV, YV, UV, yV) {
      return fY(xV ^ (eV | ~JV), VV, eV, YV, UV, yV)
    }
    hY("v3", 48, (function(VV) {
      if ("string" === typeof VV) {
        var eV = unescape(encodeURIComponent(VV));
        VV = new Uint8Array(eV.length);
        for (var xV = 0; xV < eV.length; ++xV) VV[xV] = eV.charCodeAt(xV)
      }
      return function(VV) {
        for (var eV = [], xV = 32 * VV.length, JV = "0123456789abcdef", YV = 0; YV < xV; YV += 8) {
          var UV = VV[YV >> 5] >>> YV % 32 & 255,
            yV = parseInt(JV.charAt(UV >>> 4 & 15) + JV.charAt(15 & UV), 16);
          eV.push(yV)
        }
        return eV
      }(function(VV, eV) {
        VV[eV >> 5] |= 128 << eV % 32, VV[lY(eV) - 1] = eV;
        for (var xV = 1732584193, JV = -271733879, YV = -1732584194, UV = 271733878, yV = 0; yV < VV.length; yV += 16) {
          var pV = xV,
            QV = JV,
            nV = YV,
            wV = UV;
          xV = mY(xV, JV, YV, UV, VV[yV], 7, -680876936), UV = mY(UV, xV, JV, YV, VV[yV + 1], 12, -389564586), YV = mY(YV, UV, xV, JV, VV[yV + 2], 17, 606105819), JV = mY(JV, YV, UV, xV, VV[yV + 3], 22, -1044525330), xV = mY(xV, JV, YV, UV, VV[yV + 4], 7, -176418897), UV = mY(UV, xV, JV, YV, VV[yV + 5], 12, 1200080426), YV = mY(YV, UV, xV, JV, VV[yV + 6], 17, -1473231341), JV = mY(JV, YV, UV, xV, VV[yV + 7], 22, -45705983), xV = mY(xV, JV, YV, UV, VV[yV + 8], 7, 1770035416), UV = mY(UV, xV, JV, YV, VV[yV + 9], 12, -1958414417), YV = mY(YV, UV, xV, JV, VV[yV + 10], 17, -42063), JV = mY(JV, YV, UV, xV, VV[yV + 11], 22, -1990404162), xV = mY(xV, JV, YV, UV, VV[yV + 12], 7, 1804603682), UV = mY(UV, xV, JV, YV, VV[yV + 13], 12, -40341101), YV = mY(YV, UV, xV, JV, VV[yV + 14], 17, -1502002290), xV = KY(xV, JV = mY(JV, YV, UV, xV, VV[yV + 15], 22, 1236535329), YV, UV, VV[yV + 1], 5, -165796510), UV = KY(UV, xV, JV, YV, VV[yV + 6], 9, -1069501632), YV = KY(YV, UV, xV, JV, VV[yV + 11], 14, 643717713), JV = KY(JV, YV, UV, xV, VV[yV], 20, -373897302), xV = KY(xV, JV, YV, UV, VV[yV + 5], 5, -701558691), UV = KY(UV, xV, JV, YV, VV[yV + 10], 9, 38016083), YV = KY(YV, UV, xV, JV, VV[yV + 15], 14, -660478335), JV = KY(JV, YV, UV, xV, VV[yV + 4], 20, -405537848), xV = KY(xV, JV, YV, UV, VV[yV + 9], 5, 568446438), UV = KY(UV, xV, JV, YV, VV[yV + 14], 9, -1019803690), YV = KY(YV, UV, xV, JV, VV[yV + 3], 14, -187363961), JV = KY(JV, YV, UV, xV, VV[yV + 8], 20, 1163531501), xV = KY(xV, JV, YV, UV, VV[yV + 13], 5, -1444681467), UV = KY(UV, xV, JV, YV, VV[yV + 2], 9, -51403784), YV = KY(YV, UV, xV, JV, VV[yV + 7], 14, 1735328473), xV = HY(xV, JV = KY(JV, YV, UV, xV, VV[yV + 12], 20, -1926607734), YV, UV, VV[yV + 5], 4, -378558), UV = HY(UV, xV, JV, YV, VV[yV + 8], 11, -2022574463), YV = HY(YV, UV, xV, JV, VV[yV + 11], 16, 1839030562), JV = HY(JV, YV, UV, xV, VV[yV + 14], 23, -35309556), xV = HY(xV, JV, YV, UV, VV[yV + 1], 4, -1530992060), UV = HY(UV, xV, JV, YV, VV[yV + 4], 11, 1272893353), YV = HY(YV, UV, xV, JV, VV[yV + 7], 16, -155497632), JV = HY(JV, YV, UV, xV, VV[yV + 10], 23, -1094730640), xV = HY(xV, JV, YV, UV, VV[yV + 13], 4, 681279174), UV = HY(UV, xV, JV, YV, VV[yV], 11, -358537222), YV = HY(YV, UV, xV, JV, VV[yV + 3], 16, -722521979), JV = HY(JV, YV, UV, xV, VV[yV + 6], 23, 76029189), xV = HY(xV, JV, YV, UV, VV[yV + 9], 4, -640364487), UV = HY(UV, xV, JV, YV, VV[yV + 12], 11, -421815835), YV = HY(YV, UV, xV, JV, VV[yV + 15], 16, 530742520), xV = uY(xV, JV = HY(JV, YV, UV, xV, VV[yV + 2], 23, -995338651), YV, UV, VV[yV], 6, -198630844), UV = uY(UV, xV, JV, YV, VV[yV + 7], 10, 1126891415), YV = uY(YV, UV, xV, JV, VV[yV + 14], 15, -1416354905), JV = uY(JV, YV, UV, xV, VV[yV + 5], 21, -57434055), xV = uY(xV, JV, YV, UV, VV[yV + 12], 6, 1700485571), UV = uY(UV, xV, JV, YV, VV[yV + 3], 10, -1894986606), YV = uY(YV, UV, xV, JV, VV[yV + 10], 15, -1051523), JV = uY(JV, YV, UV, xV, VV[yV + 1], 21, -2054922799), xV = uY(xV, JV, YV, UV, VV[yV + 8], 6, 1873313359), UV = uY(UV, xV, JV, YV, VV[yV + 15], 10, -30611744), YV = uY(YV, UV, xV, JV, VV[yV + 6], 15, -1560198380), JV = uY(JV, YV, UV, xV, VV[yV + 13], 21, 1309151649), xV = uY(xV, JV, YV, UV, VV[yV + 4], 6, -145523070), UV = uY(UV, xV, JV, YV, VV[yV + 11], 10, -1120210379), YV = uY(YV, UV, xV, JV, VV[yV + 2], 15, 718787259), JV = uY(JV, YV, UV, xV, VV[yV + 9], 21, -343485551), xV = LY(xV, pV), JV = LY(JV, QV), YV = LY(YV, nV), UV = LY(UV, wV)
        }
        return [xV, JV, YV, UV]
      }(function(VV) {
        if (0 === VV.length) return [];
        for (var eV = 8 * VV.length, xV = new Uint32Array(lY(eV)), JV = 0; JV < eV; JV += 8) xV[JV >> 5] |= (255 & VV[JV / 8]) << JV % 32;
        return xV
      }(VV), 8 * VV.length))
    }));
    var sY = new Uint8Array(16);

    function SY() {
      if (!cY && !(cY = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return cY(sY)
    }

    function IY(VV, eV, xV) {
      var JV = (VV = VV || {}).random || (VV.rng || SY)();
      if (JV[6] = 15 & JV[6] | 64, JV[8] = 63 & JV[8] | 128, eV) {
        xV = xV || 0;
        for (var YV = 0; YV < 16; ++YV) eV[xV + YV] = JV[YV];
        return eV
      }
      return oY(JV)
    }

    function dY(VV, eV, xV, JV) {
      switch (VV) {
        case 0:
          return eV & xV ^ ~eV & JV;
        case 1:
        case 3:
          return eV ^ xV ^ JV;
        case 2:
          return eV & xV ^ eV & JV ^ xV & JV
      }
    }

    function OY(VV, eV) {
      return VV << eV | VV >>> 32 - eV
    }
    hY("v5", 80, (function(VV) {
      var eV = [1518500249, 1859775393, 2400959708, 3395469782],
        xV = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof VV) {
        var JV = unescape(encodeURIComponent(VV));
        VV = [];
        for (var YV = 0; YV < JV.length; ++YV) VV.push(JV.charCodeAt(YV))
      } else Array.isArray(VV) || (VV = Array.prototype.slice.call(VV));
      VV.push(128);
      for (var UV = VV.length / 4 + 2, yV = Math.ceil(UV / 16), pV = new Array(yV), QV = 0; QV < yV; ++QV) {
        for (var nV = new Uint32Array(16), wV = 0; wV < 16; ++wV) nV[wV] = VV[64 * QV + 4 * wV] << 24 | VV[64 * QV + 4 * wV + 1] << 16 | VV[64 * QV + 4 * wV + 2] << 8 | VV[64 * QV + 4 * wV + 3];
        pV[QV] = nV
      }
      pV[yV - 1][14] = 8 * (VV.length - 1) / Math.pow(2, 32), pV[yV - 1][14] = Math.floor(pV[yV - 1][14]), pV[yV - 1][15] = 8 * (VV.length - 1) & 4294967295;
      for (var ZV = 0; ZV < yV; ++ZV) {
        for (var vV = new Uint32Array(80), rV = 0; rV < 16; ++rV) vV[rV] = pV[ZV][rV];
        for (var kV = 16; kV < 80; ++kV) vV[kV] = OY(vV[kV - 3] ^ vV[kV - 8] ^ vV[kV - 14] ^ vV[kV - 16], 1);
        for (var bV = xV[0], EV = xV[1], BV = xV[2], jV = xV[3], qV = xV[4], tV = 0; tV < 80; ++tV) {
          var FV = Math.floor(tV / 20),
            TV = OY(bV, 5) + dY(FV, EV, BV, jV) + qV + eV[FV] + vV[tV] >>> 0;
          qV = jV, jV = BV, BV = OY(EV, 30) >>> 0, EV = bV, bV = TV
        }
        xV[0] = xV[0] + bV >>> 0, xV[1] = xV[1] + EV >>> 0, xV[2] = xV[2] + BV >>> 0, xV[3] = xV[3] + jV >>> 0, xV[4] = xV[4] + qV >>> 0
      }
      return [xV[0] >> 24 & 255, xV[0] >> 16 & 255, xV[0] >> 8 & 255, 255 & xV[0], xV[1] >> 24 & 255, xV[1] >> 16 & 255, xV[1] >> 8 & 255, 255 & xV[1], xV[2] >> 24 & 255, xV[2] >> 16 & 255, xV[2] >> 8 & 255, 255 & xV[2], xV[3] >> 24 & 255, xV[3] >> 16 & 255, xV[3] >> 8 & 255, 255 & xV[3], xV[4] >> 24 & 255, xV[4] >> 16 & 255, xV[4] >> 8 & 255, 255 & xV[4]]
    }));
    class VU extends Error {
      constructor(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(eV), this.code = VV, this.message = eV, this.name = "Discord SDK Error"
      }
    }
    const eU = ["log", "warn", "debug", "info", "error"];
    var xU;
    ! function(VV) {
      VV[VV.HANDSHAKE = 0] = "HANDSHAKE", VV[VV.FRAME = 1] = "FRAME", VV[VV.CLOSE = 2] = "CLOSE", VV[VV.HELLO = 3] = "HELLO"
    }(xU || (xU = {}));
    const JU = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class YU {
      getTransfer(VV) {
        var eV;
        switch (VV.cmd) {
          case sx.SUBSCRIBE:
          case sx.UNSUBSCRIBE:
            return;
          default:
            return null !== (eV = VV.transfer) && void 0 !== eV ? eV : void 0
        }
      }
      constructor(VV, eV) {
        var xV;
        if (this.eventBus = new nV, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = VV => {
            var eV;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const xV = IY();
            null === (eV = this.source) || void 0 === eV || eV.postMessage([xU.FRAME, Object.assign(Object.assign({}, VV), {
              nonce: xV
            })], this.sourceOrigin, this.getTransfer(VV));
            return new Promise(((VV, eV) => {
              this.pendingCommands.set(xV, {
                resolve: VV,
                reject: eV
              })
            }))
          }, this.commands = (xV = this.sendCommand, {
            authenticate: rY(xV),
            authorize: kY(xV),
            captureLog: bY(xV),
            encourageHardwareAcceleration: EY(xV),
            getChannel: RY(xV),
            getChannelPermissions: qY(xV),
            getEntitlements: BY(xV),
            getPlatformBehaviors: tY(xV),
            getSkus: jY(xV),
            openExternalLink: FY(xV),
            openInviteDialog: TY(xV),
            openShareMomentDialog: PY(xV),
            setActivity: AY(xV),
            setConfig: NY(xV),
            setOrientationLockState: MY(xV),
            startPurchase: zY(xV),
            userSettingsGetLocale: GY(xV),
            initiateImageUpload: WY(xV),
            getInstanceConnectedParticipants: gY(xV)
          }), this.handleMessage = VV => {
            if (!JU.has(VV.origin)) return;
            const eV = VV.data;
            if (!Array.isArray(eV)) return;
            const [xV, JV] = eV;
            switch (xV) {
              case xU.HELLO:
                return;
              case xU.CLOSE:
                return this.handleClose(JV);
              case xU.HANDSHAKE:
                return this.handleHandshake();
              case xU.FRAME:
                return this.handleFrame(JV);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = VV, this.configuration = null !== eV && void 0 !== eV ? eV : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = ix.DESKTOP, this.guildId = null, void(this.channelId = null);
        const JV = new URLSearchParams(this._getSearch()),
          YV = JV.get("frame_id");
        if (!YV) throw new Error("frame_id query param is not defined");
        this.frameId = YV;
        const UV = JV.get("instance_id");
        if (!UV) throw new Error("instance_id query param is not defined");
        this.instanceId = UV;
        const yV = JV.get("platform");
        if (!yV) throw new Error("platform query param is not defined");
        if (yV !== ix.DESKTOP && yV !== ix.MOBILE) throw new Error(`Invalid query param "platform" of "${yV}". Valid values are "${ix.DESKTOP}" or "${ix.MOBILE}"`);
        this.platform = yV, this.guildId = JV.get("guild_id"), this.channelId = JV.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var VV;
          return [null !== (VV = window.parent.opener) && void 0 !== VV ? VV : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(VV, eV) {
        var xV;
        window.removeEventListener("message", this.handleMessage);
        const JV = IY();
        null === (xV = this.source) || void 0 === xV || xV.postMessage([xU.CLOSE, {
          code: VV,
          message: eV,
          nonce: JV
        }], this.sourceOrigin)
      }
      async subscribe(VV, eV) {
        for (var xV = arguments.length, JV = new Array(xV > 2 ? xV - 2 : 0), YV = 2; YV < xV; YV++) JV[YV - 2] = arguments[YV];
        const [UV] = JV, yV = this.eventBus.listenerCount(VV), pV = this.eventBus.on(VV, eV);
        return Object.values(DJ).includes(VV) && VV !== DJ.READY && 0 === yV && await this.sendCommand({
          cmd: sx.SUBSCRIBE,
          args: UV,
          evt: VV
        }), pV
      }
      async unsubscribe(VV, eV) {
        for (var xV = arguments.length, JV = new Array(xV > 2 ? xV - 2 : 0), YV = 2; YV < xV; YV++) JV[YV - 2] = arguments[YV];
        const [UV] = JV;
        return VV !== DJ.READY && 1 === this.eventBus.listenerCount(VV) && await this.sendCommand({
          cmd: sx.UNSUBSCRIBE,
          evt: VV,
          args: UV
        }), this.eventBus.off(VV, eV)
      }
      async ready() {
        this.isReady || await new Promise((VV => {
          this.eventBus.once(DJ.READY, VV)
        }))
      }
      handshake() {
        var VV;
        null === (VV = this.source) || void 0 === VV || VV.postMessage([xU.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(DJ.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const VV = (VV, eV) => {
          this.commands.captureLog({
            level: VV,
            message: eV
          })
        };
        eU.forEach((eV => {
          ! function(VV, eV, xV) {
            const JV = VV[eV],
              YV = VV;
            JV && (VV[eV] = function() {
              const VV = [].slice.call(arguments),
                UV = "" + VV.join(" ");
              xV(eV, UV), JV.apply(YV, VV)
            })
          }(console, eV, VV)
        }))
      }
      handleClose(VV) {
        QY.parse(VV)
      }
      handleHandshake() {}
      handleFrame(VV) {
        var eV, xV;
        let JV;
        try {
          JV = wY(VV)
        } catch (YV) {
          return console.error("Failed to parse", VV), void console.error(YV)
        }
        if ("DISPATCH" === JV.cmd) this.eventBus.emit(JV.evt, JV.data);
        else {
          if (JV.evt === gJ) {
            if (null != JV.nonce) return null === (eV = this.pendingCommands.get(JV.nonce)) || void 0 === eV || eV.reject(JV.data), void this.pendingCommands.delete(JV.nonce);
            this.eventBus.emit("error", new VU(JV.data.code, JV.data.message))
          }
          if (null == JV.nonce) return void console.error("Missing nonce", VV);
          null === (xV = this.pendingCommands.get(JV.nonce)) || void 0 === xV || xV.resolve(JV), this.pendingCommands.delete(JV.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var UU, yU = 1e9,
      pU = !0,
      QU = "[DecimalError] ",
      nU = QU + "Invalid argument: ",
      wU = QU + "Exponent out of range: ",
      ZU = Math.floor,
      vU = Math.pow,
      rU = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      kU = 1e7,
      bU = 9007199254740991,
      EU = ZU(1286742750677284.5),
      BU = {};

    function jU(VV, eV) {
      var xV, JV, YV, UV, yV, pV, QV, nV, wV = VV.constructor,
        ZV = wV.precision;
      if (!VV.s || !eV.s) return eV.s || (eV = new wV(VV)), pU ? zU(eV, ZV) : eV;
      if (QV = VV.d, nV = eV.d, yV = VV.e, YV = eV.e, QV = QV.slice(), UV = yV - YV) {
        for (UV < 0 ? (JV = QV, UV = -UV, pV = nV.length) : (JV = nV, YV = yV, pV = QV.length), UV > (pV = (yV = Math.ceil(ZV / 7)) > pV ? yV + 1 : pV + 1) && (UV = pV, JV.length = 1), JV.reverse(); UV--;) JV.push(0);
        JV.reverse()
      }
      for ((pV = QV.length) - (UV = nV.length) < 0 && (UV = pV, JV = nV, nV = QV, QV = JV), xV = 0; UV;) xV = (QV[--UV] = QV[UV] + nV[UV] + xV) / kU | 0, QV[UV] %= kU;
      for (xV && (QV.unshift(xV), ++YV), pV = QV.length; 0 == QV[--pV];) QV.pop();
      return eV.d = QV, eV.e = YV, pU ? zU(eV, ZV) : eV
    }

    function qU(VV, eV, xV) {
      if (VV !== ~~VV || VV < eV || VV > xV) throw Error(nU + VV)
    }

    function tU(VV) {
      var eV, xV, JV, YV = VV.length - 1,
        UV = "",
        yV = VV[0];
      if (YV > 0) {
        for (UV += yV, eV = 1; eV < YV; eV++)(xV = 7 - (JV = VV[eV] + "").length) && (UV += NU(xV)), UV += JV;
        (xV = 7 - (JV = (yV = VV[eV]) + "").length) && (UV += NU(xV))
      } else if (0 === yV) return "0";
      for (; yV % 10 === 0;) yV /= 10;
      return UV + yV
    }
    BU.absoluteValue = BU.abs = function() {
      var VV = new this.constructor(this);
      return VV.s && (VV.s = 1), VV
    }, BU.comparedTo = BU.cmp = function(VV) {
      var eV, xV, JV, YV, UV = this;
      if (VV = new UV.constructor(VV), UV.s !== VV.s) return UV.s || -VV.s;
      if (UV.e !== VV.e) return UV.e > VV.e ^ UV.s < 0 ? 1 : -1;
      for (eV = 0, xV = (JV = UV.d.length) < (YV = VV.d.length) ? JV : YV; eV < xV; ++eV)
        if (UV.d[eV] !== VV.d[eV]) return UV.d[eV] > VV.d[eV] ^ UV.s < 0 ? 1 : -1;
      return JV === YV ? 0 : JV > YV ^ UV.s < 0 ? 1 : -1
    }, BU.decimalPlaces = BU.dp = function() {
      var VV = this,
        eV = VV.d.length - 1,
        xV = 7 * (eV - VV.e);
      if (eV = VV.d[eV])
        for (; eV % 10 == 0; eV /= 10) xV--;
      return xV < 0 ? 0 : xV
    }, BU.dividedBy = BU.div = function(VV) {
      return FU(this, new this.constructor(VV))
    }, BU.dividedToIntegerBy = BU.idiv = function(VV) {
      var eV = this.constructor;
      return zU(FU(this, new eV(VV), 0, 1), eV.precision)
    }, BU.equals = BU.eq = function(VV) {
      return !this.cmp(VV)
    }, BU.exponent = function() {
      return PU(this)
    }, BU.greaterThan = BU.gt = function(VV) {
      return this.cmp(VV) > 0
    }, BU.greaterThanOrEqualTo = BU.gte = function(VV) {
      return this.cmp(VV) >= 0
    }, BU.isInteger = BU.isint = function() {
      return this.e > this.d.length - 2
    }, BU.isNegative = BU.isneg = function() {
      return this.s < 0
    }, BU.isPositive = BU.ispos = function() {
      return this.s > 0
    }, BU.isZero = function() {
      return 0 === this.s
    }, BU.lessThan = BU.lt = function(VV) {
      return this.cmp(VV) < 0
    }, BU.lessThanOrEqualTo = BU.lte = function(VV) {
      return this.cmp(VV) < 1
    }, BU.logarithm = BU.log = function(VV) {
      var eV, xV = this,
        JV = xV.constructor,
        YV = JV.precision,
        UV = YV + 5;
      if (void 0 === VV) VV = new JV(10);
      else if ((VV = new JV(VV)).s < 1 || VV.eq(UU)) throw Error(QU + "NaN");
      if (xV.s < 1) throw Error(QU + (xV.s ? "NaN" : "-Infinity"));
      return xV.eq(UU) ? new JV(0) : (pU = !1, eV = FU(XU(xV, UV), XU(VV, UV), UV), pU = !0, zU(eV, YV))
    }, BU.minus = BU.sub = function(VV) {
      var eV = this;
      return VV = new eV.constructor(VV), eV.s == VV.s ? GU(eV, VV) : jU(eV, (VV.s = -VV.s, VV))
    }, BU.modulo = BU.mod = function(VV) {
      var eV, xV = this,
        JV = xV.constructor,
        YV = JV.precision;
      if (!(VV = new JV(VV)).s) throw Error(QU + "NaN");
      return xV.s ? (pU = !1, eV = FU(xV, VV, 0, 1).times(VV), pU = !0, xV.minus(eV)) : zU(new JV(xV), YV)
    }, BU.naturalExponential = BU.exp = function() {
      return TU(this)
    }, BU.naturalLogarithm = BU.ln = function() {
      return XU(this)
    }, BU.negated = BU.neg = function() {
      var VV = new this.constructor(this);
      return VV.s = -VV.s || 0, VV
    }, BU.plus = BU.add = function(VV) {
      var eV = this;
      return VV = new eV.constructor(VV), eV.s == VV.s ? jU(eV, VV) : GU(eV, (VV.s = -VV.s, VV))
    }, BU.precision = BU.sd = function(VV) {
      var eV, xV, JV, YV = this;
      if (void 0 !== VV && VV !== !!VV && 1 !== VV && 0 !== VV) throw Error(nU + VV);
      if (eV = PU(YV) + 1, xV = 7 * (JV = YV.d.length - 1) + 1, JV = YV.d[JV]) {
        for (; JV % 10 == 0; JV /= 10) xV--;
        for (JV = YV.d[0]; JV >= 10; JV /= 10) xV++
      }
      return VV && eV > xV ? eV : xV
    }, BU.squareRoot = BU.sqrt = function() {
      var VV, eV, xV, JV, YV, UV, yV, pV = this,
        QV = pV.constructor;
      if (pV.s < 1) {
        if (!pV.s) return new QV(0);
        throw Error(QU + "NaN")
      }
      for (VV = PU(pV), pU = !1, 0 == (YV = Math.sqrt(+pV)) || YV == 1 / 0 ? (((eV = tU(pV.d)).length + VV) % 2 == 0 && (eV += "0"), YV = Math.sqrt(eV), VV = ZU((VV + 1) / 2) - (VV < 0 || VV % 2), JV = new QV(eV = YV == 1 / 0 ? "1e" + VV : (eV = YV.toExponential()).slice(0, eV.indexOf("e") + 1) + VV)) : JV = new QV(YV.toString()), YV = yV = (xV = QV.precision) + 3;;)
        if (JV = (UV = JV).plus(FU(pV, UV, yV + 2)).times(.5), tU(UV.d).slice(0, yV) === (eV = tU(JV.d)).slice(0, yV)) {
          if (eV = eV.slice(yV - 3, yV + 1), YV == yV && "4999" == eV) {
            if (zU(UV, xV + 1, 0), UV.times(UV).eq(pV)) {
              JV = UV;
              break
            }
          } else if ("9999" != eV) break;
          yV += 4
        } return pU = !0, zU(JV, xV)
    }, BU.times = BU.mul = function(VV) {
      var eV, xV, JV, YV, UV, yV, pV, QV, nV, wV = this,
        ZV = wV.constructor,
        vV = wV.d,
        rV = (VV = new ZV(VV)).d;
      if (!wV.s || !VV.s) return new ZV(0);
      for (VV.s *= wV.s, xV = wV.e + VV.e, (QV = vV.length) < (nV = rV.length) && (UV = vV, vV = rV, rV = UV, yV = QV, QV = nV, nV = yV), UV = [], JV = yV = QV + nV; JV--;) UV.push(0);
      for (JV = nV; --JV >= 0;) {
        for (eV = 0, YV = QV + JV; YV > JV;) pV = UV[YV] + rV[JV] * vV[YV - JV - 1] + eV, UV[YV--] = pV % kU | 0, eV = pV / kU | 0;
        UV[YV] = (UV[YV] + eV) % kU | 0
      }
      for (; !UV[--yV];) UV.pop();
      return eV ? ++xV : UV.shift(), VV.d = UV, VV.e = xV, pU ? zU(VV, ZV.precision) : VV
    }, BU.toDecimalPlaces = BU.todp = function(VV, eV) {
      var xV = this,
        JV = xV.constructor;
      return xV = new JV(xV), void 0 === VV ? xV : (qU(VV, 0, yU), void 0 === eV ? eV = JV.rounding : qU(eV, 0, 8), zU(xV, VV + PU(xV) + 1, eV))
    }, BU.toExponential = function(VV, eV) {
      var xV, JV = this,
        YV = JV.constructor;
      return void 0 === VV ? xV = WU(JV, !0) : (qU(VV, 0, yU), void 0 === eV ? eV = YV.rounding : qU(eV, 0, 8), xV = WU(JV = zU(new YV(JV), VV + 1, eV), !0, VV + 1)), xV
    }, BU.toFixed = function(VV, eV) {
      var xV, JV, YV = this,
        UV = YV.constructor;
      return void 0 === VV ? WU(YV) : (qU(VV, 0, yU), void 0 === eV ? eV = UV.rounding : qU(eV, 0, 8), xV = WU((JV = zU(new UV(YV), VV + PU(YV) + 1, eV)).abs(), !1, VV + PU(JV) + 1), YV.isneg() && !YV.isZero() ? "-" + xV : xV)
    }, BU.toInteger = BU.toint = function() {
      var VV = this,
        eV = VV.constructor;
      return zU(new eV(VV), PU(VV) + 1, eV.rounding)
    }, BU.toNumber = function() {
      return +this
    }, BU.toPower = BU.pow = function(VV) {
      var eV, xV, JV, YV, UV, yV, pV = this,
        QV = pV.constructor,
        nV = +(VV = new QV(VV));
      if (!VV.s) return new QV(UU);
      if (!(pV = new QV(pV)).s) {
        if (VV.s < 1) throw Error(QU + "Infinity");
        return pV
      }
      if (pV.eq(UU)) return pV;
      if (JV = QV.precision, VV.eq(UU)) return zU(pV, JV);
      if (yV = (eV = VV.e) >= (xV = VV.d.length - 1), UV = pV.s, yV) {
        if ((xV = nV < 0 ? -nV : nV) <= bU) {
          for (YV = new QV(UU), eV = Math.ceil(JV / 7 + 4), pU = !1; xV % 2 && RU((YV = YV.times(pV)).d, eV), 0 !== (xV = ZU(xV / 2));) RU((pV = pV.times(pV)).d, eV);
          return pU = !0, VV.s < 0 ? new QV(UU).div(YV) : zU(YV, JV)
        }
      } else if (UV < 0) throw Error(QU + "NaN");
      return UV = UV < 0 && 1 & VV.d[Math.max(eV, xV)] ? -1 : 1, pV.s = 1, pU = !1, YV = VV.times(XU(pV, JV + 12)), pU = !0, (YV = TU(YV)).s = UV, YV
    }, BU.toPrecision = function(VV, eV) {
      var xV, JV, YV = this,
        UV = YV.constructor;
      return void 0 === VV ? JV = WU(YV, (xV = PU(YV)) <= UV.toExpNeg || xV >= UV.toExpPos) : (qU(VV, 1, yU), void 0 === eV ? eV = UV.rounding : qU(eV, 0, 8), JV = WU(YV = zU(new UV(YV), VV, eV), VV <= (xV = PU(YV)) || xV <= UV.toExpNeg, VV)), JV
    }, BU.toSignificantDigits = BU.tosd = function(VV, eV) {
      var xV = this.constructor;
      return void 0 === VV ? (VV = xV.precision, eV = xV.rounding) : (qU(VV, 1, yU), void 0 === eV ? eV = xV.rounding : qU(eV, 0, 8)), zU(new xV(this), VV, eV)
    }, BU.toString = BU.valueOf = BU.val = BU.toJSON = BU[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var VV = this,
        eV = PU(VV),
        xV = VV.constructor;
      return WU(VV, eV <= xV.toExpNeg || eV >= xV.toExpPos)
    };
    var FU = function() {
      function VV(VV, eV) {
        var xV, JV = 0,
          YV = VV.length;
        for (VV = VV.slice(); YV--;) xV = VV[YV] * eV + JV, VV[YV] = xV % kU | 0, JV = xV / kU | 0;
        return JV && VV.unshift(JV), VV
      }

      function eV(VV, eV, xV, JV) {
        var YV, UV;
        if (xV != JV) UV = xV > JV ? 1 : -1;
        else
          for (YV = UV = 0; YV < xV; YV++)
            if (VV[YV] != eV[YV]) {
              UV = VV[YV] > eV[YV] ? 1 : -1;
              break
            } return UV
      }

      function xV(VV, eV, xV) {
        for (var JV = 0; xV--;) VV[xV] -= JV, JV = VV[xV] < eV[xV] ? 1 : 0, VV[xV] = JV * kU + VV[xV] - eV[xV];
        for (; !VV[0] && VV.length > 1;) VV.shift()
      }
      return function(JV, YV, UV, yV) {
        var pV, QV, nV, wV, ZV, vV, rV, kV, bV, EV, BV, jV, qV, tV, FV, TV, PV, AV, NV = JV.constructor,
          XV = JV.s == YV.s ? 1 : -1,
          MV = JV.d,
          zV = YV.d;
        if (!JV.s) return new NV(JV);
        if (!YV.s) throw Error(QU + "Division by zero");
        for (QV = JV.e - YV.e, PV = zV.length, FV = MV.length, kV = (rV = new NV(XV)).d = [], nV = 0; zV[nV] == (MV[nV] || 0);) ++nV;
        if (zV[nV] > (MV[nV] || 0) && --QV, (jV = null == UV ? UV = NV.precision : yV ? UV + (PU(JV) - PU(YV)) + 1 : UV) < 0) return new NV(0);
        if (jV = jV / 7 + 2 | 0, nV = 0, 1 == PV)
          for (wV = 0, zV = zV[0], jV++;
            (nV < FV || wV) && jV--; nV++) qV = wV * kU + (MV[nV] || 0), kV[nV] = qV / zV | 0, wV = qV % zV | 0;
        else {
          for ((wV = kU / (zV[0] + 1) | 0) > 1 && (zV = VV(zV, wV), MV = VV(MV, wV), PV = zV.length, FV = MV.length), tV = PV, EV = (bV = MV.slice(0, PV)).length; EV < PV;) bV[EV++] = 0;
          (AV = zV.slice()).unshift(0), TV = zV[0], zV[1] >= kU / 2 && ++TV;
          do {
            wV = 0, (pV = eV(zV, bV, PV, EV)) < 0 ? (BV = bV[0], PV != EV && (BV = BV * kU + (bV[1] || 0)), (wV = BV / TV | 0) > 1 ? (wV >= kU && (wV = kU - 1), 1 == (pV = eV(ZV = VV(zV, wV), bV, vV = ZV.length, EV = bV.length)) && (wV--, xV(ZV, PV < vV ? AV : zV, vV))) : (0 == wV && (pV = wV = 1), ZV = zV.slice()), (vV = ZV.length) < EV && ZV.unshift(0), xV(bV, ZV, EV), -1 == pV && (pV = eV(zV, bV, PV, EV = bV.length)) < 1 && (wV++, xV(bV, PV < EV ? AV : zV, EV)), EV = bV.length) : 0 === pV && (wV++, bV = [0]), kV[nV++] = wV, pV && bV[0] ? bV[EV++] = MV[tV] || 0 : (bV = [MV[tV]], EV = 1)
          } while ((tV++ < FV || void 0 !== bV[0]) && jV--)
        }
        return kV[0] || kV.shift(), rV.e = QV, zU(rV, yV ? UV + PU(rV) + 1 : UV)
      }
    }();

    function TU(VV, eV) {
      var xV, JV, YV, UV, yV, pV = 0,
        QV = 0,
        nV = VV.constructor,
        wV = nV.precision;
      if (PU(VV) > 16) throw Error(wU + PU(VV));
      if (!VV.s) return new nV(UU);
      for (null == eV ? (pU = !1, yV = wV) : yV = eV, UV = new nV(.03125); VV.abs().gte(.1);) VV = VV.times(UV), QV += 5;
      for (yV += Math.log(vU(2, QV)) / Math.LN10 * 2 + 5 | 0, xV = JV = YV = new nV(UU), nV.precision = yV;;) {
        if (JV = zU(JV.times(VV), yV), xV = xV.times(++pV), tU((UV = YV.plus(FU(JV, xV, yV))).d).slice(0, yV) === tU(YV.d).slice(0, yV)) {
          for (; QV--;) YV = zU(YV.times(YV), yV);
          return nV.precision = wV, null == eV ? (pU = !0, zU(YV, wV)) : YV
        }
        YV = UV
      }
    }

    function PU(VV) {
      for (var eV = 7 * VV.e, xV = VV.d[0]; xV >= 10; xV /= 10) eV++;
      return eV
    }

    function AU(VV, eV, xV) {
      if (eV > VV.LN10.sd()) throw pU = !0, xV && (VV.precision = xV), Error(QU + "LN10 precision limit exceeded");
      return zU(new VV(VV.LN10), eV)
    }

    function NU(VV) {
      for (var eV = ""; VV--;) eV += "0";
      return eV
    }

    function XU(VV, eV) {
      var xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV = 1,
        vV = VV,
        rV = vV.d,
        kV = vV.constructor,
        bV = kV.precision;
      if (vV.s < 1) throw Error(QU + (vV.s ? "NaN" : "-Infinity"));
      if (vV.eq(UU)) return new kV(0);
      if (null == eV ? (pU = !1, nV = bV) : nV = eV, vV.eq(10)) return null == eV && (pU = !0), AU(kV, nV);
      if (nV += 10, kV.precision = nV, JV = (xV = tU(rV)).charAt(0), UV = PU(vV), !(Math.abs(UV) < 15e14)) return QV = AU(kV, nV + 2, bV).times(UV + ""), vV = XU(new kV(JV + "." + xV.slice(1)), nV - 10).plus(QV), kV.precision = bV, null == eV ? (pU = !0, zU(vV, bV)) : vV;
      for (; JV < 7 && 1 != JV || 1 == JV && xV.charAt(1) > 3;) JV = (xV = tU((vV = vV.times(VV)).d)).charAt(0), ZV++;
      for (UV = PU(vV), JV > 1 ? (vV = new kV("0." + xV), UV++) : vV = new kV(JV + "." + xV.slice(1)), pV = yV = vV = FU(vV.minus(UU), vV.plus(UU), nV), wV = zU(vV.times(vV), nV), YV = 3;;) {
        if (yV = zU(yV.times(wV), nV), tU((QV = pV.plus(FU(yV, new kV(YV), nV))).d).slice(0, nV) === tU(pV.d).slice(0, nV)) return pV = pV.times(2), 0 !== UV && (pV = pV.plus(AU(kV, nV + 2, bV).times(UV + ""))), pV = FU(pV, new kV(ZV), nV), kV.precision = bV, null == eV ? (pU = !0, zU(pV, bV)) : pV;
        pV = QV, YV += 2
      }
    }

    function MU(VV, eV) {
      var xV, JV, YV;
      for ((xV = eV.indexOf(".")) > -1 && (eV = eV.replace(".", "")), (JV = eV.search(/e/i)) > 0 ? (xV < 0 && (xV = JV), xV += +eV.slice(JV + 1), eV = eV.substring(0, JV)) : xV < 0 && (xV = eV.length), JV = 0; 48 === eV.charCodeAt(JV);) ++JV;
      for (YV = eV.length; 48 === eV.charCodeAt(YV - 1);) --YV;
      if (eV = eV.slice(JV, YV)) {
        if (YV -= JV, xV = xV - JV - 1, VV.e = ZU(xV / 7), VV.d = [], JV = (xV + 1) % 7, xV < 0 && (JV += 7), JV < YV) {
          for (JV && VV.d.push(+eV.slice(0, JV)), YV -= 7; JV < YV;) VV.d.push(+eV.slice(JV, JV += 7));
          JV = 7 - (eV = eV.slice(JV)).length
        } else JV -= YV;
        for (; JV--;) eV += "0";
        if (VV.d.push(+eV), pU && (VV.e > EU || VV.e < -EU)) throw Error(wU + xV)
      } else VV.s = 0, VV.e = 0, VV.d = [0];
      return VV
    }

    function zU(VV, eV, xV) {
      var JV, YV, UV, yV, pV, QV, nV, wV, ZV = VV.d;
      for (yV = 1, UV = ZV[0]; UV >= 10; UV /= 10) yV++;
      if ((JV = eV - yV) < 0) JV += 7, YV = eV, nV = ZV[wV = 0];
      else {
        if ((wV = Math.ceil((JV + 1) / 7)) >= (UV = ZV.length)) return VV;
        for (nV = UV = ZV[wV], yV = 1; UV >= 10; UV /= 10) yV++;
        YV = (JV %= 7) - 7 + yV
      }
      if (void 0 !== xV && (pV = nV / (UV = vU(10, yV - YV - 1)) % 10 | 0, QV = eV < 0 || void 0 !== ZV[wV + 1] || nV % UV, QV = xV < 4 ? (pV || QV) && (0 == xV || xV == (VV.s < 0 ? 3 : 2)) : pV > 5 || 5 == pV && (4 == xV || QV || 6 == xV && (JV > 0 ? YV > 0 ? nV / vU(10, yV - YV) : 0 : ZV[wV - 1]) % 10 & 1 || xV == (VV.s < 0 ? 8 : 7))), eV < 1 || !ZV[0]) return QV ? (UV = PU(VV), ZV.length = 1, eV = eV - UV - 1, ZV[0] = vU(10, (7 - eV % 7) % 7), VV.e = ZU(-eV / 7) || 0) : (ZV.length = 1, ZV[0] = VV.e = VV.s = 0), VV;
      if (0 == JV ? (ZV.length = wV, UV = 1, wV--) : (ZV.length = wV + 1, UV = vU(10, 7 - JV), ZV[wV] = YV > 0 ? (nV / vU(10, yV - YV) % vU(10, YV) | 0) * UV : 0), QV)
        for (;;) {
          if (0 == wV) {
            (ZV[0] += UV) == kU && (ZV[0] = 1, ++VV.e);
            break
          }
          if (ZV[wV] += UV, ZV[wV] != kU) break;
          ZV[wV--] = 0, UV = 1
        }
      for (JV = ZV.length; 0 === ZV[--JV];) ZV.pop();
      if (pU && (VV.e > EU || VV.e < -EU)) throw Error(wU + PU(VV));
      return VV
    }

    function GU(VV, eV) {
      var xV, JV, YV, UV, yV, pV, QV, nV, wV, ZV, vV = VV.constructor,
        rV = vV.precision;
      if (!VV.s || !eV.s) return eV.s ? eV.s = -eV.s : eV = new vV(VV), pU ? zU(eV, rV) : eV;
      if (QV = VV.d, ZV = eV.d, JV = eV.e, nV = VV.e, QV = QV.slice(), yV = nV - JV) {
        for ((wV = yV < 0) ? (xV = QV, yV = -yV, pV = ZV.length) : (xV = ZV, JV = nV, pV = QV.length), yV > (YV = Math.max(Math.ceil(rV / 7), pV) + 2) && (yV = YV, xV.length = 1), xV.reverse(), YV = yV; YV--;) xV.push(0);
        xV.reverse()
      } else {
        for ((wV = (YV = QV.length) < (pV = ZV.length)) && (pV = YV), YV = 0; YV < pV; YV++)
          if (QV[YV] != ZV[YV]) {
            wV = QV[YV] < ZV[YV];
            break
          } yV = 0
      }
      for (wV && (xV = QV, QV = ZV, ZV = xV, eV.s = -eV.s), pV = QV.length, YV = ZV.length - pV; YV > 0; --YV) QV[pV++] = 0;
      for (YV = ZV.length; YV > yV;) {
        if (QV[--YV] < ZV[YV]) {
          for (UV = YV; UV && 0 === QV[--UV];) QV[UV] = kU - 1;
          --QV[UV], QV[YV] += kU
        }
        QV[YV] -= ZV[YV]
      }
      for (; 0 === QV[--pV];) QV.pop();
      for (; 0 === QV[0]; QV.shift()) --JV;
      return QV[0] ? (eV.d = QV, eV.e = JV, pU ? zU(eV, rV) : eV) : new vV(0)
    }

    function WU(VV, eV, xV) {
      var JV, YV = PU(VV),
        UV = tU(VV.d),
        yV = UV.length;
      return eV ? (xV && (JV = xV - yV) > 0 ? UV = UV.charAt(0) + "." + UV.slice(1) + NU(JV) : yV > 1 && (UV = UV.charAt(0) + "." + UV.slice(1)), UV = UV + (YV < 0 ? "e" : "e+") + YV) : YV < 0 ? (UV = "0." + NU(-YV - 1) + UV, xV && (JV = xV - yV) > 0 && (UV += NU(JV))) : YV >= yV ? (UV += NU(YV + 1 - yV), xV && (JV = xV - YV - 1) > 0 && (UV = UV + "." + NU(JV))) : ((JV = YV + 1) < yV && (UV = UV.slice(0, JV) + "." + UV.slice(JV)), xV && (JV = xV - yV) > 0 && (YV + 1 === yV && (UV += "."), UV += NU(JV))), VV.s < 0 ? "-" + UV : UV
    }

    function RU(VV, eV) {
      if (VV.length > eV) return VV.length = eV, !0
    }

    function gU(VV) {
      if (!VV || "object" !== typeof VV) throw Error(QU + "Object expected");
      var eV, xV, JV, YV = ["precision", 1, yU, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (eV = 0; eV < YV.length; eV += 3)
        if (void 0 !== (JV = VV[xV = YV[eV]])) {
          if (!(ZU(JV) === JV && JV >= YV[eV + 1] && JV <= YV[eV + 2])) throw Error(nU + xV + ": " + JV);
          this[xV] = JV
        } if (void 0 !== (JV = VV[xV = "LN10"])) {
        if (JV != Math.LN10) throw Error(nU + xV + ": " + JV);
        this[xV] = new this(JV)
      }
      return this
    }
    var DU = function VV(eV) {
      var xV, JV, YV;

      function UV(VV) {
        var eV = this;
        if (!(eV instanceof UV)) return new UV(VV);
        if (eV.constructor = UV, VV instanceof UV) return eV.s = VV.s, eV.e = VV.e, void(eV.d = (VV = VV.d) ? VV.slice() : VV);
        if ("number" === typeof VV) {
          if (0 * VV !== 0) throw Error(nU + VV);
          if (VV > 0) eV.s = 1;
          else {
            if (!(VV < 0)) return eV.s = 0, eV.e = 0, void(eV.d = [0]);
            VV = -VV, eV.s = -1
          }
          return VV === ~~VV && VV < 1e7 ? (eV.e = 0, void(eV.d = [VV])) : MU(eV, VV.toString())
        }
        if ("string" !== typeof VV) throw Error(nU + VV);
        if (45 === VV.charCodeAt(0) ? (VV = VV.slice(1), eV.s = -1) : eV.s = 1, !rU.test(VV)) throw Error(nU + VV);
        MU(eV, VV)
      }
      if (UV.prototype = BU, UV.ROUND_UP = 0, UV.ROUND_DOWN = 1, UV.ROUND_CEIL = 2, UV.ROUND_FLOOR = 3, UV.ROUND_HALF_UP = 4, UV.ROUND_HALF_DOWN = 5, UV.ROUND_HALF_EVEN = 6, UV.ROUND_HALF_CEIL = 7, UV.ROUND_HALF_FLOOR = 8, UV.clone = VV, UV.config = UV.set = gU, void 0 === eV && (eV = {}), eV)
        for (YV = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], xV = 0; xV < YV.length;) eV.hasOwnProperty(JV = YV[xV++]) || (eV[JV] = this[JV]);
      return UV.config(eV), UV
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    UU = new DU(1);
    var iU;
    ! function(VV) {
      VV.AED = "aed", VV.AFN = "afn", VV.ALL = "all", VV.AMD = "amd", VV.ANG = "ang", VV.AOA = "aoa", VV.ARS = "ars", VV.AUD = "aud", VV.AWG = "awg", VV.AZN = "azn", VV.BAM = "bam", VV.BBD = "bbd", VV.BDT = "bdt", VV.BGN = "bgn", VV.BHD = "bhd", VV.BIF = "bif", VV.BMD = "bmd", VV.BND = "bnd", VV.BOB = "bob", VV.BOV = "bov", VV.BRL = "brl", VV.BSD = "bsd", VV.BTN = "btn", VV.BWP = "bwp", VV.BYN = "byn", VV.BYR = "byr", VV.BZD = "bzd", VV.CAD = "cad", VV.CDF = "cdf", VV.CHE = "che", VV.CHF = "chf", VV.CHW = "chw", VV.CLF = "clf", VV.CLP = "clp", VV.CNY = "cny", VV.COP = "cop", VV.COU = "cou", VV.CRC = "crc", VV.CUC = "cuc", VV.CUP = "cup", VV.CVE = "cve", VV.CZK = "czk", VV.DJF = "djf", VV.DKK = "dkk", VV.DOP = "dop", VV.DZD = "dzd", VV.EGP = "egp", VV.ERN = "ern", VV.ETB = "etb", VV.EUR = "eur", VV.FJD = "fjd", VV.FKP = "fkp", VV.GBP = "gbp", VV.GEL = "gel", VV.GHS = "ghs", VV.GIP = "gip", VV.GMD = "gmd", VV.GNF = "gnf", VV.GTQ = "gtq", VV.GYD = "gyd", VV.HKD = "hkd", VV.HNL = "hnl", VV.HRK = "hrk", VV.HTG = "htg", VV.HUF = "huf", VV.IDR = "idr", VV.ILS = "ils", VV.INR = "inr", VV.IQD = "iqd", VV.IRR = "irr", VV.ISK = "isk", VV.JMD = "jmd", VV.JOD = "jod", VV.JPY = "jpy", VV.KES = "kes", VV.KGS = "kgs", VV.KHR = "khr", VV.KMF = "kmf", VV.KPW = "kpw", VV.KRW = "krw", VV.KWD = "kwd", VV.KYD = "kyd", VV.KZT = "kzt", VV.LAK = "lak", VV.LBP = "lbp", VV.LKR = "lkr", VV.LRD = "lrd", VV.LSL = "lsl", VV.LTL = "ltl", VV.LVL = "lvl", VV.LYD = "lyd", VV.MAD = "mad", VV.MDL = "mdl", VV.MGA = "mga", VV.MKD = "mkd", VV.MMK = "mmk", VV.MNT = "mnt", VV.MOP = "mop", VV.MRO = "mro", VV.MUR = "mur", VV.MVR = "mvr", VV.MWK = "mwk", VV.MXN = "mxn", VV.MXV = "mxv", VV.MYR = "myr", VV.MZN = "mzn", VV.NAD = "nad", VV.NGN = "ngn", VV.NIO = "nio", VV.NOK = "nok", VV.NPR = "npr", VV.NZD = "nzd", VV.OMR = "omr", VV.PAB = "pab", VV.PEN = "pen", VV.PGK = "pgk", VV.PHP = "php", VV.PKR = "pkr", VV.PLN = "pln", VV.PYG = "pyg", VV.QAR = "qar", VV.RON = "ron", VV.RSD = "rsd", VV.RUB = "rub", VV.RWF = "rwf", VV.SAR = "sar", VV.SBD = "sbd", VV.SCR = "scr", VV.SDG = "sdg", VV.SEK = "sek", VV.SGD = "sgd", VV.SHP = "shp", VV.SLL = "sll", VV.SOS = "sos", VV.SRD = "srd", VV.SSP = "ssp", VV.STD = "std", VV.SVC = "svc", VV.SYP = "syp", VV.SZL = "szl", VV.THB = "thb", VV.TJS = "tjs", VV.TMT = "tmt", VV.TND = "tnd", VV.TOP = "top", VV.TRY = "try", VV.TTD = "ttd", VV.TWD = "twd", VV.TZS = "tzs", VV.UAH = "uah", VV.UGX = "ugx", VV.USD = "usd", VV.USN = "usn", VV.USS = "uss", VV.UYI = "uyi", VV.UYU = "uyu", VV.UZS = "uzs", VV.VEF = "vef", VV.VND = "vnd", VV.VUV = "vuv", VV.WST = "wst", VV.XAF = "xaf", VV.XAG = "xag", VV.XAU = "xau", VV.XBA = "xba", VV.XBB = "xbb", VV.XBC = "xbc", VV.XBD = "xbd", VV.XCD = "xcd", VV.XDR = "xdr", VV.XFU = "xfu", VV.XOF = "xof", VV.XPD = "xpd", VV.XPF = "xpf", VV.XPT = "xpt", VV.XSU = "xsu", VV.XTS = "xts", VV.XUA = "xua", VV.YER = "yer", VV.ZAR = "zar", VV.ZMW = "zmw", VV.ZWL = "zwl"
    }(iU || (iU = {}));
    iU.AED, iU.AFN, iU.ALL, iU.AMD, iU.ANG, iU.AOA, iU.ARS, iU.AUD, iU.AWG, iU.AZN, iU.BAM, iU.BBD, iU.BDT, iU.BGN, iU.BHD, iU.BIF, iU.BMD, iU.BND, iU.BOB, iU.BOV, iU.BRL, iU.BSD, iU.BTN, iU.BWP, iU.BYR, iU.BYN, iU.BZD, iU.CAD, iU.CDF, iU.CHE, iU.CHF, iU.CHW, iU.CLF, iU.CLP, iU.CNY, iU.COP, iU.COU, iU.CRC, iU.CUC, iU.CUP, iU.CVE, iU.CZK, iU.DJF, iU.DKK, iU.DOP, iU.DZD, iU.EGP, iU.ERN, iU.ETB, iU.EUR, iU.FJD, iU.FKP, iU.GBP, iU.GEL, iU.GHS, iU.GIP, iU.GMD, iU.GNF, iU.GTQ, iU.GYD, iU.HKD, iU.HNL, iU.HRK, iU.HTG, iU.HUF, iU.IDR, iU.ILS, iU.INR, iU.IQD, iU.IRR, iU.ISK, iU.JMD, iU.JOD, iU.JPY, iU.KES, iU.KGS, iU.KHR, iU.KMF, iU.KPW, iU.KRW, iU.KWD, iU.KYD, iU.KZT, iU.LAK, iU.LBP, iU.LKR, iU.LRD, iU.LSL, iU.LTL, iU.LVL, iU.LYD, iU.MAD, iU.MDL, iU.MGA, iU.MKD, iU.MMK, iU.MNT, iU.MOP, iU.MRO, iU.MUR, iU.MVR, iU.MWK, iU.MXN, iU.MXV, iU.MYR, iU.MZN, iU.NAD, iU.NGN, iU.NIO, iU.NOK, iU.NPR, iU.NZD, iU.OMR, iU.PAB, iU.PEN, iU.PGK, iU.PHP, iU.PKR, iU.PLN, iU.PYG, iU.QAR, iU.RON, iU.RSD, iU.RUB, iU.RWF, iU.SAR, iU.SBD, iU.SCR, iU.SDG, iU.SEK, iU.SGD, iU.SHP, iU.SLL, iU.SOS, iU.SRD, iU.SSP, iU.STD, iU.SVC, iU.SYP, iU.SZL, iU.THB, iU.TJS, iU.TMT, iU.TND, iU.TOP, iU.TRY, iU.TTD, iU.TWD, iU.TZS, iU.UAH, iU.UGX, iU.USD, iU.USN, iU.USS, iU.UYI, iU.UYU, iU.UZS, iU.VEF, iU.VND, iU.VUV, iU.WST, iU.XAF, iU.XAG, iU.XAU, iU.XBA, iU.XBB, iU.XBC, iU.XBD, iU.XCD, iU.XDR, iU.XFU, iU.XOF, iU.XPD, iU.XPF, iU.XPT, iU.XSU, iU.XTS, iU.XUA, iU.YER, iU.ZAR, iU.ZMW, iU.ZWL;
    var CU = {
      exports: {}
    };
    ! function(VV, eV) {
      var xV = "__lodash_hash_undefined__",
        JV = 9007199254740991,
        UV = "[object Arguments]",
        yV = "[object Array]",
        pV = "[object Boolean]",
        QV = "[object Date]",
        nV = "[object Error]",
        wV = "[object Function]",
        ZV = "[object Map]",
        vV = "[object Number]",
        rV = "[object Object]",
        kV = "[object Promise]",
        bV = "[object RegExp]",
        EV = "[object Set]",
        BV = "[object String]",
        jV = "[object Symbol]",
        qV = "[object WeakMap]",
        tV = "[object ArrayBuffer]",
        FV = "[object DataView]",
        TV = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        PV = /^\w*$/,
        AV = /^\./,
        NV = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        XV = /\\(\\)?/g,
        MV = /^\[object .+?Constructor\]$/,
        zV = /^(?:0|[1-9]\d*)$/,
        GV = {};
      GV["[object Float32Array]"] = GV["[object Float64Array]"] = GV["[object Int8Array]"] = GV["[object Int16Array]"] = GV["[object Int32Array]"] = GV["[object Uint8Array]"] = GV["[object Uint8ClampedArray]"] = GV["[object Uint16Array]"] = GV["[object Uint32Array]"] = !0, GV[UV] = GV[yV] = GV[tV] = GV[pV] = GV[FV] = GV[QV] = GV[nV] = GV[wV] = GV[ZV] = GV[vV] = GV[rV] = GV[bV] = GV[EV] = GV[BV] = GV[qV] = !1;
      var WV = "object" == typeof YV && YV && YV.Object === Object && YV,
        RV = "object" == typeof self && self && self.Object === Object && self,
        gV = WV || RV || Function("return this")(),
        DV = eV && !eV.nodeType && eV,
        iV = DV && VV && !VV.nodeType && VV,
        CV = iV && iV.exports === DV && WV.process,
        aV = function() {
          try {
            return CV && CV.binding("util")
          } catch (VV) {}
        }(),
        oV = aV && aV.isTypedArray;

      function cV(VV, eV) {
        for (var xV = -1, JV = VV ? VV.length : 0; ++xV < JV && !1 !== eV(VV[xV], xV, VV););
        return VV
      }

      function hV(VV, eV) {
        for (var xV = -1, JV = VV ? VV.length : 0; ++xV < JV;)
          if (eV(VV[xV], xV, VV)) return !0;
        return !1
      }

      function lV(VV) {
        var eV = !1;
        if (null != VV && "function" != typeof VV.toString) try {
          eV = !!(VV + "")
        } catch (xV) {}
        return eV
      }

      function LV(VV) {
        var eV = -1,
          xV = Array(VV.size);
        return VV.forEach((function(VV, JV) {
          xV[++eV] = [JV, VV]
        })), xV
      }

      function fV(VV, eV) {
        return function(xV) {
          return VV(eV(xV))
        }
      }

      function mV(VV) {
        var eV = -1,
          xV = Array(VV.size);
        return VV.forEach((function(VV) {
          xV[++eV] = VV
        })), xV
      }
      var KV = Array.prototype,
        HV = Function.prototype,
        uV = Object.prototype,
        sV = gV["__core-js_shared__"],
        SV = function() {
          var VV = /[^.]+$/.exec(sV && sV.keys && sV.keys.IE_PROTO || "");
          return VV ? "Symbol(src)_1." + VV : ""
        }(),
        IV = HV.toString,
        dV = uV.hasOwnProperty,
        OV = uV.toString,
        Ve = RegExp("^" + IV.call(dV).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        ee = gV.Symbol,
        xe = gV.Uint8Array,
        Je = fV(Object.getPrototypeOf, Object),
        Ye = Object.create,
        Ue = uV.propertyIsEnumerable,
        ye = KV.splice,
        pe = fV(Object.keys, Object),
        Qe = Le(gV, "DataView"),
        ne = Le(gV, "Map"),
        we = Le(gV, "Promise"),
        Ze = Le(gV, "Set"),
        ve = Le(gV, "WeakMap"),
        re = Le(Object, "create"),
        ke = Ie(Qe),
        be = Ie(ne),
        Ee = Ie(we),
        Be = Ie(Ze),
        je = Ie(ve),
        qe = ee ? ee.prototype : void 0,
        te = qe ? qe.valueOf : void 0,
        Fe = qe ? qe.toString : void 0;

      function Te(VV) {
        var eV = -1,
          xV = VV ? VV.length : 0;
        for (this.clear(); ++eV < xV;) {
          var JV = VV[eV];
          this.set(JV[0], JV[1])
        }
      }

      function Pe(VV) {
        var eV = -1,
          xV = VV ? VV.length : 0;
        for (this.clear(); ++eV < xV;) {
          var JV = VV[eV];
          this.set(JV[0], JV[1])
        }
      }

      function Ae(VV) {
        var eV = -1,
          xV = VV ? VV.length : 0;
        for (this.clear(); ++eV < xV;) {
          var JV = VV[eV];
          this.set(JV[0], JV[1])
        }
      }

      function Ne(VV) {
        var eV = -1,
          xV = VV ? VV.length : 0;
        for (this.__data__ = new Ae; ++eV < xV;) this.add(VV[eV])
      }

      function Xe(VV) {
        this.__data__ = new Pe(VV)
      }

      function Me(VV, eV) {
        var xV = ex(VV) || Vx(VV) ? function(VV, eV) {
            for (var xV = -1, JV = Array(VV); ++xV < VV;) JV[xV] = eV(xV);
            return JV
          }(VV.length, String) : [],
          JV = xV.length,
          YV = !!JV;
        for (var UV in VV) !eV && !dV.call(VV, UV) || YV && ("length" == UV || me(UV, JV)) || xV.push(UV);
        return xV
      }

      function ze(VV, eV) {
        for (var xV = VV.length; xV--;)
          if (Oe(VV[xV][0], eV)) return xV;
        return -1
      }
      Te.prototype.clear = function() {
        this.__data__ = re ? re(null) : {}
      }, Te.prototype.delete = function(VV) {
        return this.has(VV) && delete this.__data__[VV]
      }, Te.prototype.get = function(VV) {
        var eV = this.__data__;
        if (re) {
          var JV = eV[VV];
          return JV === xV ? void 0 : JV
        }
        return dV.call(eV, VV) ? eV[VV] : void 0
      }, Te.prototype.has = function(VV) {
        var eV = this.__data__;
        return re ? void 0 !== eV[VV] : dV.call(eV, VV)
      }, Te.prototype.set = function(VV, eV) {
        return this.__data__[VV] = re && void 0 === eV ? xV : eV, this
      }, Pe.prototype.clear = function() {
        this.__data__ = []
      }, Pe.prototype.delete = function(VV) {
        var eV = this.__data__,
          xV = ze(eV, VV);
        return !(xV < 0) && (xV == eV.length - 1 ? eV.pop() : ye.call(eV, xV, 1), !0)
      }, Pe.prototype.get = function(VV) {
        var eV = this.__data__,
          xV = ze(eV, VV);
        return xV < 0 ? void 0 : eV[xV][1]
      }, Pe.prototype.has = function(VV) {
        return ze(this.__data__, VV) > -1
      }, Pe.prototype.set = function(VV, eV) {
        var xV = this.__data__,
          JV = ze(xV, VV);
        return JV < 0 ? xV.push([VV, eV]) : xV[JV][1] = eV, this
      }, Ae.prototype.clear = function() {
        this.__data__ = {
          hash: new Te,
          map: new(ne || Pe),
          string: new Te
        }
      }, Ae.prototype.delete = function(VV) {
        return le(this, VV).delete(VV)
      }, Ae.prototype.get = function(VV) {
        return le(this, VV).get(VV)
      }, Ae.prototype.has = function(VV) {
        return le(this, VV).has(VV)
      }, Ae.prototype.set = function(VV, eV) {
        return le(this, VV).set(VV, eV), this
      }, Ne.prototype.add = Ne.prototype.push = function(VV) {
        return this.__data__.set(VV, xV), this
      }, Ne.prototype.has = function(VV) {
        return this.__data__.has(VV)
      }, Xe.prototype.clear = function() {
        this.__data__ = new Pe
      }, Xe.prototype.delete = function(VV) {
        return this.__data__.delete(VV)
      }, Xe.prototype.get = function(VV) {
        return this.__data__.get(VV)
      }, Xe.prototype.has = function(VV) {
        return this.__data__.has(VV)
      }, Xe.prototype.set = function(VV, eV) {
        var xV = this.__data__;
        if (xV instanceof Pe) {
          var JV = xV.__data__;
          if (!ne || JV.length < 199) return JV.push([VV, eV]), this;
          xV = this.__data__ = new Ae(JV)
        }
        return xV.set(VV, eV), this
      };
      var Ge, We = function(VV, eV, xV) {
        for (var JV = -1, YV = Object(VV), UV = xV(VV), yV = UV.length; yV--;) {
          var pV = UV[Ge ? yV : ++JV];
          if (!1 === eV(YV[pV], pV, YV)) break
        }
        return VV
      };

      function Re(VV, eV) {
        return VV && We(VV, eV, wx)
      }

      function ge(VV, eV) {
        for (var xV = 0, JV = (eV = Ke(eV, VV) ? [eV] : ce(eV)).length; null != VV && xV < JV;) VV = VV[Se(eV[xV++])];
        return xV && xV == JV ? VV : void 0
      }

      function De(VV, eV) {
        return null != VV && eV in Object(VV)
      }

      function ie(VV, eV, xV, JV, YV) {
        return VV === eV || (null == VV || null == eV || !Ux(VV) && !yx(eV) ? VV !== VV && eV !== eV : function(VV, eV, xV, JV, YV, wV) {
          var kV = ex(VV),
            qV = ex(eV),
            TV = yV,
            PV = yV;
          kV || (TV = (TV = fe(VV)) == UV ? rV : TV);
          qV || (PV = (PV = fe(eV)) == UV ? rV : PV);
          var AV = TV == rV && !lV(VV),
            NV = PV == rV && !lV(eV),
            XV = TV == PV;
          if (XV && !AV) return wV || (wV = new Xe), kV || nx(VV) ? he(VV, eV, xV, JV, YV, wV) : function(VV, eV, xV, JV, YV, UV, yV) {
            switch (xV) {
              case FV:
                if (VV.byteLength != eV.byteLength || VV.byteOffset != eV.byteOffset) return !1;
                VV = VV.buffer, eV = eV.buffer;
              case tV:
                return !(VV.byteLength != eV.byteLength || !JV(new xe(VV), new xe(eV)));
              case pV:
              case QV:
              case vV:
                return Oe(+VV, +eV);
              case nV:
                return VV.name == eV.name && VV.message == eV.message;
              case bV:
              case BV:
                return VV == eV + "";
              case ZV:
                var wV = LV;
              case EV:
                var rV = 2 & UV;
                if (wV || (wV = mV), VV.size != eV.size && !rV) return !1;
                var kV = yV.get(VV);
                if (kV) return kV == eV;
                UV |= 1, yV.set(VV, eV);
                var qV = he(wV(VV), wV(eV), JV, YV, UV, yV);
                return yV.delete(VV), qV;
              case jV:
                if (te) return te.call(VV) == te.call(eV)
            }
            return !1
          }(VV, eV, TV, xV, JV, YV, wV);
          if (!(2 & YV)) {
            var MV = AV && dV.call(VV, "__wrapped__"),
              zV = NV && dV.call(eV, "__wrapped__");
            if (MV || zV) {
              var GV = MV ? VV.value() : VV,
                WV = zV ? eV.value() : eV;
              return wV || (wV = new Xe), xV(GV, WV, JV, YV, wV)
            }
          }
          if (!XV) return !1;
          return wV || (wV = new Xe),
            function(VV, eV, xV, JV, YV, UV) {
              var yV = 2 & YV,
                pV = wx(VV),
                QV = pV.length,
                nV = wx(eV),
                wV = nV.length;
              if (QV != wV && !yV) return !1;
              var ZV = QV;
              for (; ZV--;) {
                var vV = pV[ZV];
                if (!(yV ? vV in eV : dV.call(eV, vV))) return !1
              }
              var rV = UV.get(VV);
              if (rV && UV.get(eV)) return rV == eV;
              var kV = !0;
              UV.set(VV, eV), UV.set(eV, VV);
              var bV = yV;
              for (; ++ZV < QV;) {
                var EV = VV[vV = pV[ZV]],
                  BV = eV[vV];
                if (JV) var jV = yV ? JV(BV, EV, vV, eV, VV, UV) : JV(EV, BV, vV, VV, eV, UV);
                if (!(void 0 === jV ? EV === BV || xV(EV, BV, JV, YV, UV) : jV)) {
                  kV = !1;
                  break
                }
                bV || (bV = "constructor" == vV)
              }
              if (kV && !bV) {
                var qV = VV.constructor,
                  tV = eV.constructor;
                qV == tV || !("constructor" in VV) || !("constructor" in eV) || "function" == typeof qV && qV instanceof qV && "function" == typeof tV && tV instanceof tV || (kV = !1)
              }
              return UV.delete(VV), UV.delete(eV), kV
            }(VV, eV, xV, JV, YV, wV)
        }(VV, eV, ie, xV, JV, YV))
      }

      function Ce(VV) {
        return !(!Ux(VV) || (eV = VV, SV && SV in eV)) && (Jx(VV) || lV(VV) ? Ve : MV).test(Ie(VV));
        var eV
      }

      function ae(VV) {
        return "function" == typeof VV ? VV : null == VV ? Zx : "object" == typeof VV ? ex(VV) ? function(VV, eV) {
          if (Ke(VV) && He(eV)) return ue(Se(VV), eV);
          return function(xV) {
            var JV = function(VV, eV, xV) {
              var JV = null == VV ? void 0 : ge(VV, eV);
              return void 0 === JV ? xV : JV
            }(xV, VV);
            return void 0 === JV && JV === eV ? function(VV, eV) {
              return null != VV && function(VV, eV, xV) {
                eV = Ke(eV, VV) ? [eV] : ce(eV);
                var JV, YV = -1,
                  UV = eV.length;
                for (; ++YV < UV;) {
                  var yV = Se(eV[YV]);
                  if (!(JV = null != VV && xV(VV, yV))) break;
                  VV = VV[yV]
                }
                if (JV) return JV;
                UV = VV ? VV.length : 0;
                return !!UV && Yx(UV) && me(yV, UV) && (ex(VV) || Vx(VV))
              }(VV, eV, De)
            }(xV, VV) : ie(eV, JV, void 0, 3)
          }
        }(VV[0], VV[1]) : function(VV) {
          var eV = function(VV) {
            var eV = wx(VV),
              xV = eV.length;
            for (; xV--;) {
              var JV = eV[xV],
                YV = VV[JV];
              eV[xV] = [JV, YV, He(YV)]
            }
            return eV
          }(VV);
          if (1 == eV.length && eV[0][2]) return ue(eV[0][0], eV[0][1]);
          return function(xV) {
            return xV === VV || function(VV, eV, xV, JV) {
              var YV = xV.length,
                UV = YV,
                yV = !JV;
              if (null == VV) return !UV;
              for (VV = Object(VV); YV--;) {
                var pV = xV[YV];
                if (yV && pV[2] ? pV[1] !== VV[pV[0]] : !(pV[0] in VV)) return !1
              }
              for (; ++YV < UV;) {
                var QV = (pV = xV[YV])[0],
                  nV = VV[QV],
                  wV = pV[1];
                if (yV && pV[2]) {
                  if (void 0 === nV && !(QV in VV)) return !1
                } else {
                  var ZV = new Xe;
                  if (JV) var vV = JV(nV, wV, QV, VV, eV, ZV);
                  if (!(void 0 === vV ? ie(wV, nV, JV, 3, ZV) : vV)) return !1
                }
              }
              return !0
            }(xV, VV, eV)
          }
        }(VV) : function(VV) {
          return Ke(VV) ? (eV = Se(VV), function(VV) {
            return null == VV ? void 0 : VV[eV]
          }) : function(VV) {
            return function(eV) {
              return ge(eV, VV)
            }
          }(VV);
          var eV
        }(VV)
      }

      function oe(VV) {
        if (! function(VV) {
            var eV = VV && VV.constructor,
              xV = "function" == typeof eV && eV.prototype || uV;
            return VV === xV
          }(VV)) return pe(VV);
        var eV = [];
        for (var xV in Object(VV)) dV.call(VV, xV) && "constructor" != xV && eV.push(xV);
        return eV
      }

      function ce(VV) {
        return ex(VV) ? VV : se(VV)
      }

      function he(VV, eV, xV, JV, YV, UV) {
        var yV = 2 & YV,
          pV = VV.length,
          QV = eV.length;
        if (pV != QV && !(yV && QV > pV)) return !1;
        var nV = UV.get(VV);
        if (nV && UV.get(eV)) return nV == eV;
        var wV = -1,
          ZV = !0,
          vV = 1 & YV ? new Ne : void 0;
        for (UV.set(VV, eV), UV.set(eV, VV); ++wV < pV;) {
          var rV = VV[wV],
            kV = eV[wV];
          if (JV) var bV = yV ? JV(kV, rV, wV, eV, VV, UV) : JV(rV, kV, wV, VV, eV, UV);
          if (void 0 !== bV) {
            if (bV) continue;
            ZV = !1;
            break
          }
          if (vV) {
            if (!hV(eV, (function(VV, eV) {
                if (!vV.has(eV) && (rV === VV || xV(rV, VV, JV, YV, UV))) return vV.add(eV)
              }))) {
              ZV = !1;
              break
            }
          } else if (rV !== kV && !xV(rV, kV, JV, YV, UV)) {
            ZV = !1;
            break
          }
        }
        return UV.delete(VV), UV.delete(eV), ZV
      }

      function le(VV, eV) {
        var xV = VV.__data__;
        return function(VV) {
          var eV = typeof VV;
          return "string" == eV || "number" == eV || "symbol" == eV || "boolean" == eV ? "__proto__" !== VV : null === VV
        }(eV) ? xV["string" == typeof eV ? "string" : "hash"] : xV.map
      }

      function Le(VV, eV) {
        var xV = function(VV, eV) {
          return null == VV ? void 0 : VV[eV]
        }(VV, eV);
        return Ce(xV) ? xV : void 0
      }
      var fe = function(VV) {
        return OV.call(VV)
      };

      function me(VV, eV) {
        return !!(eV = null == eV ? JV : eV) && ("number" == typeof VV || zV.test(VV)) && VV > -1 && VV % 1 == 0 && VV < eV
      }

      function Ke(VV, eV) {
        if (ex(VV)) return !1;
        var xV = typeof VV;
        return !("number" != xV && "symbol" != xV && "boolean" != xV && null != VV && !px(VV)) || (PV.test(VV) || !TV.test(VV) || null != eV && VV in Object(eV))
      }

      function He(VV) {
        return VV === VV && !Ux(VV)
      }

      function ue(VV, eV) {
        return function(xV) {
          return null != xV && (xV[VV] === eV && (void 0 !== eV || VV in Object(xV)))
        }
      }(Qe && fe(new Qe(new ArrayBuffer(1))) != FV || ne && fe(new ne) != ZV || we && fe(we.resolve()) != kV || Ze && fe(new Ze) != EV || ve && fe(new ve) != qV) && (fe = function(VV) {
        var eV = OV.call(VV),
          xV = eV == rV ? VV.constructor : void 0,
          JV = xV ? Ie(xV) : void 0;
        if (JV) switch (JV) {
          case ke:
            return FV;
          case be:
            return ZV;
          case Ee:
            return kV;
          case Be:
            return EV;
          case je:
            return qV
        }
        return eV
      });
      var se = de((function(VV) {
        var eV;
        VV = null == (eV = VV) ? "" : function(VV) {
          if ("string" == typeof VV) return VV;
          if (px(VV)) return Fe ? Fe.call(VV) : "";
          var eV = VV + "";
          return "0" == eV && 1 / VV == -1 / 0 ? "-0" : eV
        }(eV);
        var xV = [];
        return AV.test(VV) && xV.push(""), VV.replace(NV, (function(VV, eV, JV, YV) {
          xV.push(JV ? YV.replace(XV, "$1") : eV || VV)
        })), xV
      }));

      function Se(VV) {
        if ("string" == typeof VV || px(VV)) return VV;
        var eV = VV + "";
        return "0" == eV && 1 / VV == -1 / 0 ? "-0" : eV
      }

      function Ie(VV) {
        if (null != VV) {
          try {
            return IV.call(VV)
          } catch (eV) {}
          try {
            return VV + ""
          } catch (eV) {}
        }
        return ""
      }

      function de(VV, eV) {
        if ("function" != typeof VV || eV && "function" != typeof eV) throw new TypeError("Expected a function");
        var xV = function() {
          var JV = arguments,
            YV = eV ? eV.apply(this, JV) : JV[0],
            UV = xV.cache;
          if (UV.has(YV)) return UV.get(YV);
          var yV = VV.apply(this, JV);
          return xV.cache = UV.set(YV, yV), yV
        };
        return xV.cache = new(de.Cache || Ae), xV
      }

      function Oe(VV, eV) {
        return VV === eV || VV !== VV && eV !== eV
      }

      function Vx(VV) {
        return function(VV) {
          return yx(VV) && xx(VV)
        }(VV) && dV.call(VV, "callee") && (!Ue.call(VV, "callee") || OV.call(VV) == UV)
      }
      de.Cache = Ae;
      var ex = Array.isArray;

      function xx(VV) {
        return null != VV && Yx(VV.length) && !Jx(VV)
      }

      function Jx(VV) {
        var eV = Ux(VV) ? OV.call(VV) : "";
        return eV == wV || "[object GeneratorFunction]" == eV
      }

      function Yx(VV) {
        return "number" == typeof VV && VV > -1 && VV % 1 == 0 && VV <= JV
      }

      function Ux(VV) {
        var eV = typeof VV;
        return !!VV && ("object" == eV || "function" == eV)
      }

      function yx(VV) {
        return !!VV && "object" == typeof VV
      }

      function px(VV) {
        return "symbol" == typeof VV || yx(VV) && OV.call(VV) == jV
      }
      var Qx, nx = oV ? (Qx = oV, function(VV) {
        return Qx(VV)
      }) : function(VV) {
        return yx(VV) && Yx(VV.length) && !!GV[OV.call(VV)]
      };

      function wx(VV) {
        return xx(VV) ? Me(VV) : oe(VV)
      }

      function Zx(VV) {
        return VV
      }
      VV.exports = function(VV, eV, xV) {
        var JV, YV = ex(VV) || nx(VV);
        if (eV = ae(eV), null == xV)
          if (YV || Ux(VV)) {
            var UV = VV.constructor;
            xV = YV ? ex(VV) ? new UV : [] : Jx(UV) ? Ux(JV = Je(VV)) ? Ye(JV) : {} : {}
          } else xV = {};
        return (YV ? cV : Re)(VV, (function(VV, JV, YV) {
          return eV(xV, VV, JV, YV)
        })), xV
      }
    }(CU, CU.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      o: aU
    } = JV
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);