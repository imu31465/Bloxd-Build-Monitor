export const id = 147;
export const ids = [147];
export const modules = {
  8124: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => cK,
      g: () => lw
    });
    var pD = {};
    wD.r(pD), wD.d(pD, {
      b: () => sp,
      f: () => Lp,
      c: () => rp,
      i: () => Fw,
      l: () => tw,
      o: () => Tp,
      s: () => qw,
      u: () => dp,
      x: () => Qp,
      B: () => jp,
      D: () => Yw,
      H: () => Vp,
      I: () => xp,
      J: () => bp,
      O: () => Hw,
      K: () => wp,
      R: () => Cp,
      U: () => Pp
    });
    var sD = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function KD(DD) {
      return DD && DD.__esModule && Object.prototype.hasOwnProperty.call(DD, "default") ? DD.default : DD
    }
    var rD = {
      exports: {}
    };
    ! function(DD) {
      var zD = Object.prototype.hasOwnProperty,
        wD = "~";

      function pD() {}

      function sD(DD, zD, wD) {
        this.LI = DD, this.context = zD, this.once = wD || !1
      }

      function KD(DD, zD, pD, KD, rD) {
        if ("function" !== typeof pD) throw new TypeError("The listener must be a function");
        var LD = new sD(pD, KD || DD, rD),
          cD = wD ? wD + zD : zD;
        return DD._events[cD] ? DD._events[cD].LI ? DD._events[cD] = [DD._events[cD], LD] : DD._events[cD].push(LD) : (DD._events[cD] = LD, DD._eventsCount++), DD
      }

      function rD(DD, zD) {
        0 === --DD._eventsCount ? DD._events = new pD : delete DD._events[zD]
      }

      function LD() {
        this._events = new pD, this._eventsCount = 0
      }
      Object.create && (pD.prototype = Object.create(null), (new pD).__proto__ || (wD = !1)), LD.prototype.eventNames = function() {
        var DD, pD, sD = [];
        if (0 === this._eventsCount) return sD;
        for (pD in DD = this._events) zD.call(DD, pD) && sD.push(wD ? pD.slice(1) : pD);
        return Object.getOwnPropertySymbols ? sD.concat(Object.getOwnPropertySymbols(DD)) : sD
      }, LD.prototype.listeners = function(DD) {
        var zD = wD ? wD + DD : DD,
          pD = this._events[zD];
        if (!pD) return [];
        if (pD.LI) return [pD.LI];
        for (var sD = 0, KD = pD.length, rD = new Array(KD); sD < KD; sD++) rD[sD] = pD[sD].LI;
        return rD
      }, LD.prototype.listenerCount = function(DD) {
        var zD = wD ? wD + DD : DD,
          pD = this._events[zD];
        return pD ? pD.LI ? 1 : pD.length : 0
      }, LD.prototype.emit = function(DD, zD, pD, sD, KD, rD) {
        var LD = wD ? wD + DD : DD;
        if (!this._events[LD]) return !1;
        var cD, gD, RD = this._events[LD],
          AD = arguments.length;
        if (RD.LI) {
          switch (RD.once && this.removeListener(DD, RD.LI, void 0, !0), AD) {
            case 1:
              return RD.LI.call(RD.context), !0;
            case 2:
              return RD.LI.call(RD.context, zD), !0;
            case 3:
              return RD.LI.call(RD.context, zD, pD), !0;
            case 4:
              return RD.LI.call(RD.context, zD, pD, sD), !0;
            case 5:
              return RD.LI.call(RD.context, zD, pD, sD, KD), !0;
            case 6:
              return RD.LI.call(RD.context, zD, pD, sD, KD, rD), !0
          }
          for (gD = 1, cD = new Array(AD - 1); gD < AD; gD++) cD[gD - 1] = arguments[gD];
          RD.LI.apply(RD.context, cD)
        } else {
          var UD, fD = RD.length;
          for (gD = 0; gD < fD; gD++) switch (RD[gD].once && this.removeListener(DD, RD[gD].LI, void 0, !0), AD) {
            case 1:
              RD[gD].LI.call(RD[gD].context);
              break;
            case 2:
              RD[gD].LI.call(RD[gD].context, zD);
              break;
            case 3:
              RD[gD].LI.call(RD[gD].context, zD, pD);
              break;
            case 4:
              RD[gD].LI.call(RD[gD].context, zD, pD, sD);
              break;
            default:
              if (!cD)
                for (UD = 1, cD = new Array(AD - 1); UD < AD; UD++) cD[UD - 1] = arguments[UD];
              RD[gD].LI.apply(RD[gD].context, cD)
          }
        }
        return !0
      }, LD.prototype.on = function(DD, zD, wD) {
        return KD(this, DD, zD, wD, !1)
      }, LD.prototype.once = function(DD, zD, wD) {
        return KD(this, DD, zD, wD, !0)
      }, LD.prototype.removeListener = function(DD, zD, pD, sD) {
        var KD = wD ? wD + DD : DD;
        if (!this._events[KD]) return this;
        if (!zD) return rD(this, KD), this;
        var LD = this._events[KD];
        if (LD.LI) LD.LI !== zD || sD && !LD.once || pD && LD.context !== pD || rD(this, KD);
        else {
          for (var cD = 0, gD = [], RD = LD.length; cD < RD; cD++)(LD[cD].LI !== zD || sD && !LD[cD].once || pD && LD[cD].context !== pD) && gD.push(LD[cD]);
          gD.length ? this._events[KD] = 1 === gD.length ? gD[0] : gD : rD(this, KD)
        }
        return this
      }, LD.prototype.YM = function(DD) {
        var zD;
        return DD ? (zD = wD ? wD + DD : DD, this._events[zD] && rD(this, zD)) : (this._events = new pD, this._eventsCount = 0), this
      }, LD.prototype.off = LD.prototype.removeListener, LD.prototype.addListener = LD.prototype.on, LD.prefixed = wD, LD.EventEmitter = LD, DD.exports = LD
    }(rD);
    var LD, cD, gD = KD(rD.exports);
    ! function(DD) {
      DD.assertEqual = DD => DD, DD.assertIs = function(DD) {}, DD.assertNever = function(DD) {
        throw new Error
      }, DD.arrayToEnum = DD => {
        const zD = {};
        for (const wD of DD) zD[wD] = wD;
        return zD
      }, DD.getValidEnumValues = zD => {
        const wD = DD.objectKeys(zD).filter((DD => "number" !== typeof zD[zD[DD]])),
          pD = {};
        for (const DD of wD) pD[DD] = zD[DD];
        return DD.objectValues(pD)
      }, DD.objectValues = zD => DD.objectKeys(zD).map((function(DD) {
        return zD[DD]
      })), DD.objectKeys = "function" === typeof Object.keys ? DD => Object.keys(DD) : DD => {
        const zD = [];
        for (const wD in DD) Object.prototype.hasOwnProperty.call(DD, wD) && zD.push(wD);
        return zD
      }, DD.find = (DD, zD) => {
        for (const wD of DD)
          if (zD(wD)) return wD
      }, DD.isInteger = "function" === typeof Number.isInteger ? DD => Number.isInteger(DD) : DD => "number" === typeof DD && isFinite(DD) && Math.floor(DD) === DD, DD.joinValues = function(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return DD.map((DD => "string" === typeof DD ? `'${DD}'` : DD)).join(zD)
      }, DD.jsonStringifyReplacer = (DD, zD) => "bigint" === typeof zD ? zD.toString() : zD
    }(LD || (LD = {})),
    function(DD) {
      DD.mergeShapes = (DD, zD) => ({
        ...DD,
        ...zD
      })
    }(cD || (cD = {}));
    const RD = LD.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      AD = DD => {
        switch (typeof DD) {
          case "undefined":
            return RD.undefined;
          case "string":
            return RD.string;
          case "number":
            return isNaN(DD) ? RD.nan : RD.number;
          case "boolean":
            return RD.boolean;
          case "function":
            return RD.function;
          case "bigint":
            return RD.bigint;
          case "symbol":
            return RD.symbol;
          case "object":
            return Array.isArray(DD) ? RD.array : null === DD ? RD.null : DD.then && "function" === typeof DD.then && DD.catch && "function" === typeof DD.catch ? RD.promise : "undefined" !== typeof Map && DD instanceof Map ? RD.map : "undefined" !== typeof Set && DD instanceof Set ? RD.set : "undefined" !== typeof Date && DD instanceof Date ? RD.date : RD.object;
          default:
            return RD.unknown
        }
      },
      UD = LD.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class fD extends Error {
      constructor(DD) {
        var zD;
        super(), zD = this, this.issues = [], this.addIssue = DD => {
          this.issues = [...this.issues, DD]
        }, this.addIssues = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          zD.issues = [...zD.issues, ...DD]
        };
        const wD = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, wD) : this.__proto__ = wD, this.name = "ZodError", this.issues = DD
      }
      get errors() {
        return this.issues
      }
      format(DD) {
        const zD = DD || function(DD) {
            return DD.message
          },
          wD = {
            _errors: []
          },
          pD = DD => {
            for (const sD of DD.issues)
              if ("invalid_union" === sD.code) sD.unionErrors.map(pD);
              else if ("invalid_return_type" === sD.code) pD(sD.returnTypeError);
            else if ("invalid_arguments" === sD.code) pD(sD.argumentsError);
            else if (0 === sD.path.length) wD._errors.push(zD(sD));
            else {
              let DD = wD,
                pD = 0;
              for (; pD < sD.path.length;) {
                const wD = sD.path[pD];
                pD === sD.path.length - 1 ? (DD[wD] = DD[wD] || {
                  _errors: []
                }, DD[wD]._errors.push(zD(sD))) : DD[wD] = DD[wD] || {
                  _errors: []
                }, DD = DD[wD], pD++
              }
            }
          };
        return pD(this), wD
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, LD.jsonStringifyReplacer, 2)
      }
      get AI() {
        return 0 === this.issues.length
      }
      flatten() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DD => DD.message;
        const zD = {},
          wD = [];
        for (const pD of this.issues) pD.path.length > 0 ? (zD[pD.path[0]] = zD[pD.path[0]] || [], zD[pD.path[0]].push(DD(pD))) : wD.push(DD(pD));
        return {
          formErrors: wD,
          fieldErrors: zD
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    fD.create = DD => new fD(DD);
    const ID = (DD, zD) => {
      let wD;
      switch (DD.code) {
        case UD.invalid_type:
          wD = DD.received === RD.undefined ? "Required" : `Expected ${DD.expected}, received ${DD.received}`;
          break;
        case UD.invalid_literal:
          wD = `Invalid literal value, expected ${JSON.stringify(DD.expected,LD.jsonStringifyReplacer)}`;
          break;
        case UD.unrecognized_keys:
          wD = `Unrecognized key(s) in object: ${LD.joinValues(DD.keys,", ")}`;
          break;
        case UD.invalid_union:
          wD = "Invalid input";
          break;
        case UD.invalid_union_discriminator:
          wD = `Invalid discriminator value. Expected ${LD.joinValues(DD.options)}`;
          break;
        case UD.invalid_enum_value:
          wD = `Invalid enum value. Expected ${LD.joinValues(DD.options)}, received '${DD.received}'`;
          break;
        case UD.invalid_arguments:
          wD = "Invalid function arguments";
          break;
        case UD.invalid_return_type:
          wD = "Invalid function return type";
          break;
        case UD.invalid_date:
          wD = "Invalid date";
          break;
        case UD.invalid_string:
          "object" === typeof DD.validation ? "includes" in DD.validation ? (wD = `Invalid input: must include "${DD.validation.includes}"`, "number" === typeof DD.validation.position && (wD = `${wD} at one or more positions greater than or equal to ${DD.validation.position}`)) : "startsWith" in DD.validation ? wD = `Invalid input: must start with "${DD.validation.startsWith}"` : "endsWith" in DD.validation ? wD = `Invalid input: must end with "${DD.validation.endsWith}"` : LD.assertNever(DD.validation) : wD = "regex" !== DD.validation ? `Invalid ${DD.validation}` : "Invalid";
          break;
        case UD.too_small:
          wD = "array" === DD.type ? `Array must contain ${DD.exact?"exactly":DD.inclusive?"at least":"more than"} ${DD.minimum} element(s)` : "string" === DD.type ? `String must contain ${DD.exact?"exactly":DD.inclusive?"at least":"over"} ${DD.minimum} character(s)` : "number" === DD.type ? `Number must be ${DD.exact?"exactly equal to ":DD.inclusive?"greater than or equal to ":"greater than "}${DD.minimum}` : "date" === DD.type ? `Date must be ${DD.exact?"exactly equal to ":DD.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(DD.minimum))}` : "Invalid input";
          break;
        case UD.too_big:
          wD = "array" === DD.type ? `Array must contain ${DD.exact?"exactly":DD.inclusive?"at most":"less than"} ${DD.maximum} element(s)` : "string" === DD.type ? `String must contain ${DD.exact?"exactly":DD.inclusive?"at most":"under"} ${DD.maximum} character(s)` : "number" === DD.type ? `Number must be ${DD.exact?"exactly":DD.inclusive?"less than or equal to":"less than"} ${DD.maximum}` : "bigint" === DD.type ? `BigInt must be ${DD.exact?"exactly":DD.inclusive?"less than or equal to":"less than"} ${DD.maximum}` : "date" === DD.type ? `Date must be ${DD.exact?"exactly":DD.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(DD.maximum))}` : "Invalid input";
          break;
        case UD.custom:
          wD = "Invalid input";
          break;
        case UD.invalid_intersection_types:
          wD = "Intersection results could not be merged";
          break;
        case UD.not_multiple_of:
          wD = `Number must be a multiple of ${DD.multipleOf}`;
          break;
        case UD.not_finite:
          wD = "Number must be finite";
          break;
        default:
          wD = zD.defaultError, LD.assertNever(DD)
      }
      return {
        message: wD
      }
    };
    let BD = ID;

    function GD() {
      return BD
    }
    const hD = DD => {
      const {
        data: zD,
        path: wD,
        errorMaps: pD,
        issueData: sD
      } = DD, KD = [...wD, ...sD.path || []], rD = {
        ...sD,
        path: KD
      };
      let LD = "";
      const cD = pD.filter((DD => !!DD)).slice().reverse();
      for (const gD of cD) LD = gD(rD, {
        data: zD,
        defaultError: LD
      }).message;
      return {
        ...sD,
        path: KD,
        message: sD.message || LD
      }
    };

    function nD(DD, zD) {
      const wD = hD({
        issueData: zD,
        data: DD.data,
        path: DD.path,
        errorMaps: [DD.common.contextualErrorMap, DD.schemaErrorMap, GD(), ID].filter((DD => !!DD))
      });
      DD.common.issues.push(wD)
    }
    class MD {
      constructor() {
        this.value = "valid"
      }
      mI() {
        "valid" === this.value && (this.value = "mI")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(DD, zD) {
        const wD = [];
        for (const pD of zD) {
          if ("aborted" === pD.status) return OD;
          "mI" === pD.status && DD.mI(), wD.push(pD.value)
        }
        return {
          status: DD.value,
          value: wD
        }
      }
      static async mergeObjectAsync(DD, zD) {
        const wD = [];
        for (const pD of zD) wD.push({
          key: await pD.key,
          value: await pD.value
        });
        return MD.mergeObjectSync(DD, wD)
      }
      static mergeObjectSync(DD, zD) {
        const wD = {};
        for (const pD of zD) {
          const {
            key: zD,
            value: sD
          } = pD;
          if ("aborted" === zD.status) return OD;
          if ("aborted" === sD.status) return OD;
          "mI" === zD.status && DD.mI(), "mI" === sD.status && DD.mI(), "__proto__" === zD.value || "undefined" === typeof sD.value && !pD.alwaysSet || (wD[zD.value] = sD.value)
        }
        return {
          status: DD.value,
          value: wD
        }
      }
    }
    const OD = Object.freeze({
        status: "aborted"
      }),
      JD = DD => ({
        status: "mI",
        value: DD
      }),
      ED = DD => ({
        status: "valid",
        value: DD
      }),
      QD = DD => "aborted" === DD.status,
      XD = DD => "mI" === DD.status,
      VD = DD => "valid" === DD.status,
      PD = DD => "undefined" !== typeof Promise && DD instanceof Promise;
    var CD;
    ! function(DD) {
      DD.errToObj = DD => "string" === typeof DD ? {
        message: DD
      } : DD || {}, DD.toString = DD => "string" === typeof DD ? DD : null === DD || void 0 === DD ? void 0 : DD.message
    }(CD || (CD = {}));
    class xD {
      constructor(DD, zD, wD, pD) {
        this._cachedPath = [], this.parent = DD, this.data = zD, this._path = wD, this._key = pD
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const TD = (DD, zD) => {
      if (VD(zD)) return {
        success: !0,
        data: zD.value
      };
      if (!DD.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const zD = new fD(DD.common.issues);
          return this._error = zD, this._error
        }
      }
    };

    function bD(DD) {
      if (!DD) return {};
      const {
        errorMap: zD,
        invalid_type_error: wD,
        required_error: pD,
        description: sD
      } = DD;
      if (zD && (wD || pD)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (zD) return {
        errorMap: zD,
        description: sD
      };
      return {
        errorMap: (DD, zD) => "invalid_type" !== DD.code ? {
          message: zD.defaultError
        } : "undefined" === typeof zD.data ? {
          message: null !== pD && void 0 !== pD ? pD : zD.defaultError
        } : {
          message: null !== wD && void 0 !== wD ? wD : zD.defaultError
        },
        description: sD
      }
    }
    class jD {
      constructor(DD) {
        this.spa = this.safeParseAsync, this._def = DD, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(DD) {
        return AD(DD.data)
      }
      _getOrReturnCtx(DD, zD) {
        return zD || {
          common: DD.parent.common,
          data: DD.data,
          parsedType: AD(DD.data),
          schemaErrorMap: this._def.errorMap,
          path: DD.path,
          parent: DD.parent
        }
      }
      _processInputParams(DD) {
        return {
          status: new MD,
          ctx: {
            common: DD.parent.common,
            data: DD.data,
            parsedType: AD(DD.data),
            schemaErrorMap: this._def.errorMap,
            path: DD.path,
            parent: DD.parent
          }
        }
      }
      _parseSync(DD) {
        const zD = this._parse(DD);
        if (PD(zD)) throw new Error("Synchronous parse encountered promise.");
        return zD
      }
      _parseAsync(DD) {
        const zD = this._parse(DD);
        return Promise.resolve(zD)
      }
      parse(DD, zD) {
        const wD = this.safeParse(DD, zD);
        if (wD.success) return wD.data;
        throw wD.error
      }
      safeParse(DD, zD) {
        var wD;
        const pD = {
            common: {
              issues: [],
              async: null !== (wD = null === zD || void 0 === zD ? void 0 : zD.async) && void 0 !== wD && wD,
              contextualErrorMap: null === zD || void 0 === zD ? void 0 : zD.errorMap
            },
            path: (null === zD || void 0 === zD ? void 0 : zD.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: DD,
            parsedType: AD(DD)
          },
          sD = this._parseSync({
            data: DD,
            path: pD.path,
            parent: pD
          });
        return TD(pD, sD)
      }
      async parseAsync(DD, zD) {
        const wD = await this.safeParseAsync(DD, zD);
        if (wD.success) return wD.data;
        throw wD.error
      }
      async safeParseAsync(DD, zD) {
        const wD = {
            common: {
              issues: [],
              contextualErrorMap: null === zD || void 0 === zD ? void 0 : zD.errorMap,
              async: !0
            },
            path: (null === zD || void 0 === zD ? void 0 : zD.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: DD,
            parsedType: AD(DD)
          },
          pD = this._parse({
            data: DD,
            path: wD.path,
            parent: wD
          }),
          sD = await (PD(pD) ? pD : Promise.resolve(pD));
        return TD(wD, sD)
      }
      refine(DD, zD) {
        const wD = DD => "string" === typeof zD || "undefined" === typeof zD ? {
          message: zD
        } : "function" === typeof zD ? zD(DD) : zD;
        return this._refinement(((zD, pD) => {
          const sD = DD(zD),
            KD = () => pD.addIssue({
              code: UD.custom,
              ...wD(zD)
            });
          return "undefined" !== typeof Promise && sD instanceof Promise ? sD.then((DD => !!DD || (KD(), !1))) : !!sD || (KD(), !1)
        }))
      }
      refinement(DD, zD) {
        return this._refinement(((wD, pD) => !!DD(wD) || (pD.addIssue("function" === typeof zD ? zD(wD, pD) : zD), !1)))
      }
      _refinement(DD) {
        return new Oz({
          schema: this,
          typeName: dz.ZodEffects,
          effect: {
            type: "refinement",
            refinement: DD
          }
        })
      }
      superRefine(DD) {
        return this._refinement(DD)
      }
      optional() {
        return Jz.create(this, this._def)
      }
      nullable() {
        return Ez.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return zz.create(this, this._def)
      }
      promise() {
        return Mz.create(this, this._def)
      }
      or(DD) {
        return sz.create([this, DD], this._def)
      }
      and(DD) {
        return cz.create(this, DD, this._def)
      }
      transform(DD) {
        return new Oz({
          ...bD(this._def),
          schema: this,
          typeName: dz.ZodEffects,
          effect: {
            type: "transform",
            transform: DD
          }
        })
      }
      default (DD) {
        const zD = "function" === typeof DD ? DD : () => DD;
        return new Qz({
          ...bD(this._def),
          innerType: this,
          defaultValue: zD,
          typeName: dz.ZodDefault
        })
      }
      brand() {
        return new Cz({
          typeName: dz.ZodBranded,
          type: this,
          ...bD(this._def)
        })
      } catch (DD) {
        const zD = "function" === typeof DD ? DD : () => DD;
        return new Xz({
          ...bD(this._def),
          innerType: this,
          catchValue: zD,
          typeName: dz.ZodCatch
        })
      }
      describe(DD) {
        return new(0, this.constructor)({
          ...this._def,
          description: DD
        })
      }
      pipe(DD) {
        return xz.create(this, DD)
      }
      readonly() {
        return Tz.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const dD = /^c[^\s-]{8,}$/i,
      SD = /^[a-z][a-z0-9]*$/,
      iD = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      lD = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      WD = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let ND;
    const ZD = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      yD = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class kD extends jD {
      _parse(DD) {
        this._def.coerce && (DD.data = String(DD.data));
        if (this._getType(DD) !== RD.string) {
          const zD = this._getOrReturnCtx(DD);
          return nD(zD, {
            code: UD.invalid_type,
            expected: RD.string,
            received: zD.parsedType
          }), OD
        }
        const zD = new MD;
        let wD;
        for (const cD of this._def.checks)
          if ("min" === cD.kind) DD.data.length < cD.value && (wD = this._getOrReturnCtx(DD, wD), nD(wD, {
            code: UD.too_small,
            minimum: cD.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: cD.message
          }), zD.mI());
          else if ("max" === cD.kind) DD.data.length > cD.value && (wD = this._getOrReturnCtx(DD, wD), nD(wD, {
          code: UD.too_big,
          maximum: cD.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: cD.message
        }), zD.mI());
        else if ("length" === cD.kind) {
          const pD = DD.data.length > cD.value,
            sD = DD.data.length < cD.value;
          (pD || sD) && (wD = this._getOrReturnCtx(DD, wD), pD ? nD(wD, {
            code: UD.too_big,
            maximum: cD.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: cD.message
          }) : sD && nD(wD, {
            code: UD.too_small,
            minimum: cD.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: cD.message
          }), zD.mI())
        } else if ("email" === cD.kind) WD.test(DD.data) || (wD = this._getOrReturnCtx(DD, wD), nD(wD, {
          validation: "email",
          code: UD.invalid_string,
          message: cD.message
        }), zD.mI());
        else if ("emoji" === cD.kind) ND || (ND = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), ND.test(DD.data) || (wD = this._getOrReturnCtx(DD, wD), nD(wD, {
          validation: "emoji",
          code: UD.invalid_string,
          message: cD.message
        }), zD.mI());
        else if ("uuid" === cD.kind) lD.test(DD.data) || (wD = this._getOrReturnCtx(DD, wD), nD(wD, {
          validation: "uuid",
          code: UD.invalid_string,
          message: cD.message
        }), zD.mI());
        else if ("cuid" === cD.kind) dD.test(DD.data) || (wD = this._getOrReturnCtx(DD, wD), nD(wD, {
          validation: "cuid",
          code: UD.invalid_string,
          message: cD.message
        }), zD.mI());
        else if ("cuid2" === cD.kind) SD.test(DD.data) || (wD = this._getOrReturnCtx(DD, wD), nD(wD, {
          validation: "cuid2",
          code: UD.invalid_string,
          message: cD.message
        }), zD.mI());
        else if ("ulid" === cD.kind) iD.test(DD.data) || (wD = this._getOrReturnCtx(DD, wD), nD(wD, {
          validation: "ulid",
          code: UD.invalid_string,
          message: cD.message
        }), zD.mI());
        else if ("url" === cD.kind) try {
          new URL(DD.data)
        } catch (rD) {
          wD = this._getOrReturnCtx(DD, wD), nD(wD, {
            validation: "url",
            code: UD.invalid_string,
            message: cD.message
          }), zD.mI()
        } else if ("regex" === cD.kind) {
          cD.regex.lastIndex = 0;
          cD.regex.test(DD.data) || (wD = this._getOrReturnCtx(DD, wD), nD(wD, {
            validation: "regex",
            code: UD.invalid_string,
            message: cD.message
          }), zD.mI())
        } else if ("trim" === cD.kind) DD.data = DD.data.trim();
        else if ("includes" === cD.kind) DD.data.includes(cD.value, cD.position) || (wD = this._getOrReturnCtx(DD, wD), nD(wD, {
          code: UD.invalid_string,
          validation: {
            includes: cD.value,
            position: cD.position
          },
          message: cD.message
        }), zD.mI());
        else if ("toLowerCase" === cD.kind) DD.data = DD.data.toLowerCase();
        else if ("toUpperCase" === cD.kind) DD.data = DD.data.toUpperCase();
        else if ("startsWith" === cD.kind) DD.data.startsWith(cD.value) || (wD = this._getOrReturnCtx(DD, wD), nD(wD, {
          code: UD.invalid_string,
          validation: {
            startsWith: cD.value
          },
          message: cD.message
        }), zD.mI());
        else if ("endsWith" === cD.kind) DD.data.endsWith(cD.value) || (wD = this._getOrReturnCtx(DD, wD), nD(wD, {
          code: UD.invalid_string,
          validation: {
            endsWith: cD.value
          },
          message: cD.message
        }), zD.mI());
        else if ("datetime" === cD.kind) {
          ((KD = cD).precision ? KD.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${KD.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${KD.precision}}Z$`) : 0 === KD.precision ? KD.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : KD.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(DD.data) || (wD = this._getOrReturnCtx(DD, wD), nD(wD, {
            code: UD.invalid_string,
            validation: "datetime",
            message: cD.message
          }), zD.mI())
        } else "ip" === cD.kind ? (pD = DD.data, ("v4" !== (sD = cD.version) && sD || !ZD.test(pD)) && ("v6" !== sD && sD || !yD.test(pD)) && (wD = this._getOrReturnCtx(DD, wD), nD(wD, {
          validation: "ip",
          code: UD.invalid_string,
          message: cD.message
        }), zD.mI())) : LD.assertNever(cD);
        var pD, sD, KD;
        return {
          status: zD.value,
          value: DD.data
        }
      }
      _regex(DD, zD, wD) {
        return this.refinement((zD => DD.test(zD)), {
          validation: zD,
          code: UD.invalid_string,
          ...CD.errToObj(wD)
        })
      }
      _addCheck(DD) {
        return new kD({
          ...this._def,
          checks: [...this._def.checks, DD]
        })
      }
      email(DD) {
        return this._addCheck({
          kind: "email",
          ...CD.errToObj(DD)
        })
      }
      url(DD) {
        return this._addCheck({
          kind: "url",
          ...CD.errToObj(DD)
        })
      }
      emoji(DD) {
        return this._addCheck({
          kind: "emoji",
          ...CD.errToObj(DD)
        })
      }
      uuid(DD) {
        return this._addCheck({
          kind: "uuid",
          ...CD.errToObj(DD)
        })
      }
      cuid(DD) {
        return this._addCheck({
          kind: "cuid",
          ...CD.errToObj(DD)
        })
      }
      cuid2(DD) {
        return this._addCheck({
          kind: "cuid2",
          ...CD.errToObj(DD)
        })
      }
      ulid(DD) {
        return this._addCheck({
          kind: "ulid",
          ...CD.errToObj(DD)
        })
      }
      ip(DD) {
        return this._addCheck({
          kind: "ip",
          ...CD.errToObj(DD)
        })
      }
      datetime(DD) {
        var zD;
        return "string" === typeof DD ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: DD
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === DD || void 0 === DD ? void 0 : DD.precision) ? null : null === DD || void 0 === DD ? void 0 : DD.precision,
          offset: null !== (zD = null === DD || void 0 === DD ? void 0 : DD.offset) && void 0 !== zD && zD,
          ...CD.errToObj(null === DD || void 0 === DD ? void 0 : DD.message)
        })
      }
      regex(DD, zD) {
        return this._addCheck({
          kind: "regex",
          regex: DD,
          ...CD.errToObj(zD)
        })
      }
      includes(DD, zD) {
        return this._addCheck({
          kind: "includes",
          value: DD,
          position: null === zD || void 0 === zD ? void 0 : zD.position,
          ...CD.errToObj(null === zD || void 0 === zD ? void 0 : zD.message)
        })
      }
      startsWith(DD, zD) {
        return this._addCheck({
          kind: "startsWith",
          value: DD,
          ...CD.errToObj(zD)
        })
      }
      endsWith(DD, zD) {
        return this._addCheck({
          kind: "endsWith",
          value: DD,
          ...CD.errToObj(zD)
        })
      }
      min(DD, zD) {
        return this._addCheck({
          kind: "min",
          value: DD,
          ...CD.errToObj(zD)
        })
      }
      max(DD, zD) {
        return this._addCheck({
          kind: "max",
          value: DD,
          ...CD.errToObj(zD)
        })
      }
      length(DD, zD) {
        return this._addCheck({
          kind: "length",
          value: DD,
          ...CD.errToObj(zD)
        })
      }
      nonempty(DD) {
        return this.min(1, CD.errToObj(DD))
      }
      trim() {
        return new kD({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new kD({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new kD({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((DD => "datetime" === DD.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((DD => "email" === DD.kind))
      }
      get isURL() {
        return !!this._def.checks.find((DD => "url" === DD.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((DD => "emoji" === DD.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((DD => "uuid" === DD.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((DD => "cuid" === DD.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((DD => "cuid2" === DD.kind))
      }
      get isULID() {
        return !!this._def.checks.find((DD => "ulid" === DD.kind))
      }
      get isIP() {
        return !!this._def.checks.find((DD => "ip" === DD.kind))
      }
      get minLength() {
        let DD = null;
        for (const zD of this._def.checks) "min" === zD.kind && (null === DD || zD.value > DD) && (DD = zD.value);
        return DD
      }
      get maxLength() {
        let DD = null;
        for (const zD of this._def.checks) "max" === zD.kind && (null === DD || zD.value < DD) && (DD = zD.value);
        return DD
      }
    }

    function mD(DD, zD) {
      const wD = (DD.toString().split(".")[1] || "").length,
        pD = (zD.toString().split(".")[1] || "").length,
        sD = wD > pD ? wD : pD;
      return parseInt(DD.toFixed(sD).replace(".", "")) % parseInt(zD.toFixed(sD).replace(".", "")) / Math.pow(10, sD)
    }
    kD.create = DD => {
      var zD;
      return new kD({
        checks: [],
        typeName: dz.ZodString,
        coerce: null !== (zD = null === DD || void 0 === DD ? void 0 : DD.coerce) && void 0 !== zD && zD,
        ...bD(DD)
      })
    };
    class eD extends jD {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(DD) {
        this._def.coerce && (DD.data = Number(DD.data));
        if (this._getType(DD) !== RD.number) {
          const zD = this._getOrReturnCtx(DD);
          return nD(zD, {
            code: UD.invalid_type,
            expected: RD.number,
            received: zD.parsedType
          }), OD
        }
        let zD;
        const wD = new MD;
        for (const pD of this._def.checks)
          if ("int" === pD.kind) LD.isInteger(DD.data) || (zD = this._getOrReturnCtx(DD, zD), nD(zD, {
            code: UD.invalid_type,
            expected: "integer",
            received: "float",
            message: pD.message
          }), wD.mI());
          else if ("min" === pD.kind) {
          (pD.inclusive ? DD.data < pD.value : DD.data <= pD.value) && (zD = this._getOrReturnCtx(DD, zD), nD(zD, {
            code: UD.too_small,
            minimum: pD.value,
            type: "number",
            inclusive: pD.inclusive,
            exact: !1,
            message: pD.message
          }), wD.mI())
        } else if ("max" === pD.kind) {
          (pD.inclusive ? DD.data > pD.value : DD.data >= pD.value) && (zD = this._getOrReturnCtx(DD, zD), nD(zD, {
            code: UD.too_big,
            maximum: pD.value,
            type: "number",
            inclusive: pD.inclusive,
            exact: !1,
            message: pD.message
          }), wD.mI())
        } else "multipleOf" === pD.kind ? 0 !== mD(DD.data, pD.value) && (zD = this._getOrReturnCtx(DD, zD), nD(zD, {
          code: UD.not_multiple_of,
          multipleOf: pD.value,
          message: pD.message
        }), wD.mI()) : "finite" === pD.kind ? Number.isFinite(DD.data) || (zD = this._getOrReturnCtx(DD, zD), nD(zD, {
          code: UD.not_finite,
          message: pD.message
        }), wD.mI()) : LD.assertNever(pD);
        return {
          status: wD.value,
          value: DD.data
        }
      }
      gte(DD, zD) {
        return this.setLimit("min", DD, !0, CD.toString(zD))
      }
      gt(DD, zD) {
        return this.setLimit("min", DD, !1, CD.toString(zD))
      }
      lte(DD, zD) {
        return this.setLimit("max", DD, !0, CD.toString(zD))
      }
      lt(DD, zD) {
        return this.setLimit("max", DD, !1, CD.toString(zD))
      }
      setLimit(DD, zD, wD, pD) {
        return new eD({
          ...this._def,
          checks: [...this._def.checks, {
            kind: DD,
            value: zD,
            inclusive: wD,
            message: CD.toString(pD)
          }]
        })
      }
      _addCheck(DD) {
        return new eD({
          ...this._def,
          checks: [...this._def.checks, DD]
        })
      }
      int(DD) {
        return this._addCheck({
          kind: "int",
          message: CD.toString(DD)
        })
      }
      positive(DD) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: CD.toString(DD)
        })
      }
      negative(DD) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: CD.toString(DD)
        })
      }
      nonpositive(DD) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: CD.toString(DD)
        })
      }
      nonnegative(DD) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: CD.toString(DD)
        })
      }
      multipleOf(DD, zD) {
        return this._addCheck({
          kind: "multipleOf",
          value: DD,
          message: CD.toString(zD)
        })
      }
      finite(DD) {
        return this._addCheck({
          kind: "finite",
          message: CD.toString(DD)
        })
      }
      safe(DD) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: CD.toString(DD)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: CD.toString(DD)
        })
      }
      get minValue() {
        let DD = null;
        for (const zD of this._def.checks) "min" === zD.kind && (null === DD || zD.value > DD) && (DD = zD.value);
        return DD
      }
      get maxValue() {
        let DD = null;
        for (const zD of this._def.checks) "max" === zD.kind && (null === DD || zD.value < DD) && (DD = zD.value);
        return DD
      }
      get isInt() {
        return !!this._def.checks.find((DD => "int" === DD.kind || "multipleOf" === DD.kind && LD.isInteger(DD.value)))
      }
      get isFinite() {
        let DD = null,
          zD = null;
        for (const wD of this._def.checks) {
          if ("finite" === wD.kind || "int" === wD.kind || "multipleOf" === wD.kind) return !0;
          "min" === wD.kind ? (null === zD || wD.value > zD) && (zD = wD.value) : "max" === wD.kind && (null === DD || wD.value < DD) && (DD = wD.value)
        }
        return Number.isFinite(zD) && Number.isFinite(DD)
      }
    }
    eD.create = DD => new eD({
      checks: [],
      typeName: dz.ZodNumber,
      coerce: (null === DD || void 0 === DD ? void 0 : DD.coerce) || !1,
      ...bD(DD)
    });
    class oD extends jD {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(DD) {
        this._def.coerce && (DD.data = BigInt(DD.data));
        if (this._getType(DD) !== RD.bigint) {
          const zD = this._getOrReturnCtx(DD);
          return nD(zD, {
            code: UD.invalid_type,
            expected: RD.bigint,
            received: zD.parsedType
          }), OD
        }
        let zD;
        const wD = new MD;
        for (const pD of this._def.checks)
          if ("min" === pD.kind) {
            (pD.inclusive ? DD.data < pD.value : DD.data <= pD.value) && (zD = this._getOrReturnCtx(DD, zD), nD(zD, {
              code: UD.too_small,
              type: "bigint",
              minimum: pD.value,
              inclusive: pD.inclusive,
              message: pD.message
            }), wD.mI())
          } else if ("max" === pD.kind) {
          (pD.inclusive ? DD.data > pD.value : DD.data >= pD.value) && (zD = this._getOrReturnCtx(DD, zD), nD(zD, {
            code: UD.too_big,
            type: "bigint",
            maximum: pD.value,
            inclusive: pD.inclusive,
            message: pD.message
          }), wD.mI())
        } else "multipleOf" === pD.kind ? DD.data % pD.value !== BigInt(0) && (zD = this._getOrReturnCtx(DD, zD), nD(zD, {
          code: UD.not_multiple_of,
          multipleOf: pD.value,
          message: pD.message
        }), wD.mI()) : LD.assertNever(pD);
        return {
          status: wD.value,
          value: DD.data
        }
      }
      gte(DD, zD) {
        return this.setLimit("min", DD, !0, CD.toString(zD))
      }
      gt(DD, zD) {
        return this.setLimit("min", DD, !1, CD.toString(zD))
      }
      lte(DD, zD) {
        return this.setLimit("max", DD, !0, CD.toString(zD))
      }
      lt(DD, zD) {
        return this.setLimit("max", DD, !1, CD.toString(zD))
      }
      setLimit(DD, zD, wD, pD) {
        return new oD({
          ...this._def,
          checks: [...this._def.checks, {
            kind: DD,
            value: zD,
            inclusive: wD,
            message: CD.toString(pD)
          }]
        })
      }
      _addCheck(DD) {
        return new oD({
          ...this._def,
          checks: [...this._def.checks, DD]
        })
      }
      positive(DD) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: CD.toString(DD)
        })
      }
      negative(DD) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: CD.toString(DD)
        })
      }
      nonpositive(DD) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: CD.toString(DD)
        })
      }
      nonnegative(DD) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: CD.toString(DD)
        })
      }
      multipleOf(DD, zD) {
        return this._addCheck({
          kind: "multipleOf",
          value: DD,
          message: CD.toString(zD)
        })
      }
      get minValue() {
        let DD = null;
        for (const zD of this._def.checks) "min" === zD.kind && (null === DD || zD.value > DD) && (DD = zD.value);
        return DD
      }
      get maxValue() {
        let DD = null;
        for (const zD of this._def.checks) "max" === zD.kind && (null === DD || zD.value < DD) && (DD = zD.value);
        return DD
      }
    }
    oD.create = DD => {
      var zD;
      return new oD({
        checks: [],
        typeName: dz.ZodBigInt,
        coerce: null !== (zD = null === DD || void 0 === DD ? void 0 : DD.coerce) && void 0 !== zD && zD,
        ...bD(DD)
      })
    };
    class aD extends jD {
      _parse(DD) {
        this._def.coerce && (DD.data = Boolean(DD.data));
        if (this._getType(DD) !== RD.boolean) {
          const zD = this._getOrReturnCtx(DD);
          return nD(zD, {
            code: UD.invalid_type,
            expected: RD.boolean,
            received: zD.parsedType
          }), OD
        }
        return ED(DD.data)
      }
    }
    aD.create = DD => new aD({
      typeName: dz.ZodBoolean,
      coerce: (null === DD || void 0 === DD ? void 0 : DD.coerce) || !1,
      ...bD(DD)
    });
    class uD extends jD {
      _parse(DD) {
        this._def.coerce && (DD.data = new Date(DD.data));
        if (this._getType(DD) !== RD.date) {
          const zD = this._getOrReturnCtx(DD);
          return nD(zD, {
            code: UD.invalid_type,
            expected: RD.date,
            received: zD.parsedType
          }), OD
        }
        if (isNaN(DD.data.getTime())) {
          return nD(this._getOrReturnCtx(DD), {
            code: UD.invalid_date
          }), OD
        }
        const zD = new MD;
        let wD;
        for (const pD of this._def.checks) "min" === pD.kind ? DD.data.getTime() < pD.value && (wD = this._getOrReturnCtx(DD, wD), nD(wD, {
          code: UD.too_small,
          message: pD.message,
          inclusive: !0,
          exact: !1,
          minimum: pD.value,
          type: "date"
        }), zD.mI()) : "max" === pD.kind ? DD.data.getTime() > pD.value && (wD = this._getOrReturnCtx(DD, wD), nD(wD, {
          code: UD.too_big,
          message: pD.message,
          inclusive: !0,
          exact: !1,
          maximum: pD.value,
          type: "date"
        }), zD.mI()) : LD.assertNever(pD);
        return {
          status: zD.value,
          value: new Date(DD.data.getTime())
        }
      }
      _addCheck(DD) {
        return new uD({
          ...this._def,
          checks: [...this._def.checks, DD]
        })
      }
      min(DD, zD) {
        return this._addCheck({
          kind: "min",
          value: DD.getTime(),
          message: CD.toString(zD)
        })
      }
      max(DD, zD) {
        return this._addCheck({
          kind: "max",
          value: DD.getTime(),
          message: CD.toString(zD)
        })
      }
      get minDate() {
        let DD = null;
        for (const zD of this._def.checks) "min" === zD.kind && (null === DD || zD.value > DD) && (DD = zD.value);
        return null != DD ? new Date(DD) : null
      }
      get maxDate() {
        let DD = null;
        for (const zD of this._def.checks) "max" === zD.kind && (null === DD || zD.value < DD) && (DD = zD.value);
        return null != DD ? new Date(DD) : null
      }
    }
    uD.create = DD => new uD({
      checks: [],
      coerce: (null === DD || void 0 === DD ? void 0 : DD.coerce) || !1,
      typeName: dz.ZodDate,
      ...bD(DD)
    });
    class vD extends jD {
      _parse(DD) {
        if (this._getType(DD) !== RD.symbol) {
          const zD = this._getOrReturnCtx(DD);
          return nD(zD, {
            code: UD.invalid_type,
            expected: RD.symbol,
            received: zD.parsedType
          }), OD
        }
        return ED(DD.data)
      }
    }
    vD.create = DD => new vD({
      typeName: dz.ZodSymbol,
      ...bD(DD)
    });
    class tD extends jD {
      _parse(DD) {
        if (this._getType(DD) !== RD.undefined) {
          const zD = this._getOrReturnCtx(DD);
          return nD(zD, {
            code: UD.invalid_type,
            expected: RD.undefined,
            received: zD.parsedType
          }), OD
        }
        return ED(DD.data)
      }
    }
    tD.create = DD => new tD({
      typeName: dz.ZodUndefined,
      ...bD(DD)
    });
    class FD extends jD {
      _parse(DD) {
        if (this._getType(DD) !== RD.null) {
          const zD = this._getOrReturnCtx(DD);
          return nD(zD, {
            code: UD.invalid_type,
            expected: RD.null,
            received: zD.parsedType
          }), OD
        }
        return ED(DD.data)
      }
    }
    FD.create = DD => new FD({
      typeName: dz.ZodNull,
      ...bD(DD)
    });
    class YD extends jD {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(DD) {
        return ED(DD.data)
      }
    }
    YD.create = DD => new YD({
      typeName: dz.ZodAny,
      ...bD(DD)
    });
    class HD extends jD {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(DD) {
        return ED(DD.data)
      }
    }
    HD.create = DD => new HD({
      typeName: dz.ZodUnknown,
      ...bD(DD)
    });
    class qD extends jD {
      _parse(DD) {
        const zD = this._getOrReturnCtx(DD);
        return nD(zD, {
          code: UD.invalid_type,
          expected: RD.never,
          received: zD.parsedType
        }), OD
      }
    }
    qD.create = DD => new qD({
      typeName: dz.ZodNever,
      ...bD(DD)
    });
    class Dz extends jD {
      _parse(DD) {
        if (this._getType(DD) !== RD.undefined) {
          const zD = this._getOrReturnCtx(DD);
          return nD(zD, {
            code: UD.invalid_type,
            expected: RD.void,
            received: zD.parsedType
          }), OD
        }
        return ED(DD.data)
      }
    }
    Dz.create = DD => new Dz({
      typeName: dz.ZodVoid,
      ...bD(DD)
    });
    class zz extends jD {
      _parse(DD) {
        const {
          ctx: zD,
          status: wD
        } = this._processInputParams(DD), pD = this._def;
        if (zD.parsedType !== RD.array) return nD(zD, {
          code: UD.invalid_type,
          expected: RD.array,
          received: zD.parsedType
        }), OD;
        if (null !== pD.exactLength) {
          const DD = zD.data.length > pD.exactLength.value,
            sD = zD.data.length < pD.exactLength.value;
          (DD || sD) && (nD(zD, {
            code: DD ? UD.too_big : UD.too_small,
            minimum: sD ? pD.exactLength.value : void 0,
            maximum: DD ? pD.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: pD.exactLength.message
          }), wD.mI())
        }
        if (null !== pD.minLength && zD.data.length < pD.minLength.value && (nD(zD, {
            code: UD.too_small,
            minimum: pD.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: pD.minLength.message
          }), wD.mI()), null !== pD.maxLength && zD.data.length > pD.maxLength.value && (nD(zD, {
            code: UD.too_big,
            maximum: pD.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: pD.maxLength.message
          }), wD.mI()), zD.common.async) return Promise.all([...zD.data].map(((DD, wD) => pD.type._parseAsync(new xD(zD, DD, zD.path, wD))))).then((DD => MD.mergeArray(wD, DD)));
        const sD = [...zD.data].map(((DD, wD) => pD.type._parseSync(new xD(zD, DD, zD.path, wD))));
        return MD.mergeArray(wD, sD)
      }
      get element() {
        return this._def.type
      }
      min(DD, zD) {
        return new zz({
          ...this._def,
          minLength: {
            value: DD,
            message: CD.toString(zD)
          }
        })
      }
      max(DD, zD) {
        return new zz({
          ...this._def,
          maxLength: {
            value: DD,
            message: CD.toString(zD)
          }
        })
      }
      length(DD, zD) {
        return new zz({
          ...this._def,
          exactLength: {
            value: DD,
            message: CD.toString(zD)
          }
        })
      }
      nonempty(DD) {
        return this.min(1, DD)
      }
    }

    function wz(DD) {
      if (DD instanceof pz) {
        const zD = {};
        for (const wD in DD.shape) {
          const pD = DD.shape[wD];
          zD[wD] = Jz.create(wz(pD))
        }
        return new pz({
          ...DD._def,
          shape: () => zD
        })
      }
      return DD instanceof zz ? new zz({
        ...DD._def,
        type: wz(DD.element)
      }) : DD instanceof Jz ? Jz.create(wz(DD.unwrap())) : DD instanceof Ez ? Ez.create(wz(DD.unwrap())) : DD instanceof gz ? gz.create(DD.items.map((DD => wz(DD)))) : DD
    }
    zz.create = (DD, zD) => new zz({
      type: DD,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: dz.ZodArray,
      ...bD(zD)
    });
    class pz extends jD {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const DD = this._def.shape(),
          zD = LD.objectKeys(DD);
        return this._cached = {
          shape: DD,
          keys: zD
        }
      }
      _parse(DD) {
        if (this._getType(DD) !== RD.object) {
          const zD = this._getOrReturnCtx(DD);
          return nD(zD, {
            code: UD.invalid_type,
            expected: RD.object,
            received: zD.parsedType
          }), OD
        }
        const {
          status: zD,
          ctx: wD
        } = this._processInputParams(DD), {
          shape: pD,
          keys: sD
        } = this._getCached(), KD = [];
        if (!(this._def.catchall instanceof qD && "strip" === this._def.unknownKeys))
          for (const LD in wD.data) sD.includes(LD) || KD.push(LD);
        const rD = [];
        for (const LD of sD) {
          const DD = pD[LD],
            zD = wD.data[LD];
          rD.push({
            key: {
              status: "valid",
              value: LD
            },
            value: DD._parse(new xD(wD, zD, wD.path, LD)),
            alwaysSet: LD in wD.data
          })
        }
        if (this._def.catchall instanceof qD) {
          const DD = this._def.unknownKeys;
          if ("passthrough" === DD)
            for (const zD of KD) rD.push({
              key: {
                status: "valid",
                value: zD
              },
              value: {
                status: "valid",
                value: wD.data[zD]
              }
            });
          else if ("strict" === DD) KD.length > 0 && (nD(wD, {
            code: UD.unrecognized_keys,
            keys: KD
          }), zD.mI());
          else if ("strip" !== DD) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const DD = this._def.catchall;
          for (const zD of KD) {
            const pD = wD.data[zD];
            rD.push({
              key: {
                status: "valid",
                value: zD
              },
              value: DD._parse(new xD(wD, pD, wD.path, zD)),
              alwaysSet: zD in wD.data
            })
          }
        }
        return wD.common.async ? Promise.resolve().then((async () => {
          const DD = [];
          for (const zD of rD) {
            const wD = await zD.key;
            DD.push({
              key: wD,
              value: await zD.value,
              alwaysSet: zD.alwaysSet
            })
          }
          return DD
        })).then((DD => MD.mergeObjectSync(zD, DD))) : MD.mergeObjectSync(zD, rD)
      }
      get shape() {
        return this._def.shape()
      }
      strict(DD) {
        return CD.errToObj, new pz({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== DD ? {
            errorMap: (zD, wD) => {
              var pD, sD, KD, rD;
              const LD = null !== (KD = null === (sD = (pD = this._def).errorMap) || void 0 === sD ? void 0 : sD.call(pD, zD, wD).message) && void 0 !== KD ? KD : wD.defaultError;
              return "unrecognized_keys" === zD.code ? {
                message: null !== (rD = CD.errToObj(DD).message) && void 0 !== rD ? rD : LD
              } : {
                message: LD
              }
            }
          } : {}
        })
      }
      strip() {
        return new pz({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new pz({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(DD) {
        return new pz({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...DD
          })
        })
      }
      merge(DD) {
        return new pz({
          unknownKeys: DD._def.unknownKeys,
          catchall: DD._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...DD._def.shape()
          }),
          typeName: dz.ZodObject
        })
      }
      setKey(DD, zD) {
        return this.augment({
          [DD]: zD
        })
      }
      catchall(DD) {
        return new pz({
          ...this._def,
          catchall: DD
        })
      }
      HU(DD) {
        const zD = {};
        return LD.objectKeys(DD).forEach((wD => {
          DD[wD] && this.shape[wD] && (zD[wD] = this.shape[wD])
        })), new pz({
          ...this._def,
          shape: () => zD
        })
      }
      omit(DD) {
        const zD = {};
        return LD.objectKeys(this.shape).forEach((wD => {
          DD[wD] || (zD[wD] = this.shape[wD])
        })), new pz({
          ...this._def,
          shape: () => zD
        })
      }
      deepPartial() {
        return wz(this)
      }
      partial(DD) {
        const zD = {};
        return LD.objectKeys(this.shape).forEach((wD => {
          const pD = this.shape[wD];
          DD && !DD[wD] ? zD[wD] = pD : zD[wD] = pD.optional()
        })), new pz({
          ...this._def,
          shape: () => zD
        })
      }
      required(DD) {
        const zD = {};
        return LD.objectKeys(this.shape).forEach((wD => {
          if (DD && !DD[wD]) zD[wD] = this.shape[wD];
          else {
            let DD = this.shape[wD];
            for (; DD instanceof Jz;) DD = DD._def.innerType;
            zD[wD] = DD
          }
        })), new pz({
          ...this._def,
          shape: () => zD
        })
      }
      keyof() {
        return Gz(LD.objectKeys(this.shape))
      }
    }
    pz.create = (DD, zD) => new pz({
      shape: () => DD,
      unknownKeys: "strip",
      catchall: qD.create(),
      typeName: dz.ZodObject,
      ...bD(zD)
    }), pz.strictCreate = (DD, zD) => new pz({
      shape: () => DD,
      unknownKeys: "strict",
      catchall: qD.create(),
      typeName: dz.ZodObject,
      ...bD(zD)
    }), pz.lazycreate = (DD, zD) => new pz({
      shape: DD,
      unknownKeys: "strip",
      catchall: qD.create(),
      typeName: dz.ZodObject,
      ...bD(zD)
    });
    class sz extends jD {
      _parse(DD) {
        const {
          ctx: zD
        } = this._processInputParams(DD), wD = this._def.options;
        if (zD.common.async) return Promise.all(wD.map((async DD => {
          const wD = {
            ...zD,
            common: {
              ...zD.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await DD._parseAsync({
              data: zD.data,
              path: zD.path,
              parent: wD
            }),
            ctx: wD
          }
        }))).then((function(DD) {
          for (const zD of DD)
            if ("valid" === zD.result.status) return zD.result;
          for (const pD of DD)
            if ("mI" === pD.result.status) return zD.common.issues.push(...pD.ctx.common.issues), pD.result;
          const wD = DD.map((DD => new fD(DD.ctx.common.issues)));
          return nD(zD, {
            code: UD.invalid_union,
            unionErrors: wD
          }), OD
        }));
        {
          let DD;
          const pD = [];
          for (const KD of wD) {
            const wD = {
                ...zD,
                common: {
                  ...zD.common,
                  issues: []
                },
                parent: null
              },
              sD = KD._parseSync({
                data: zD.data,
                path: zD.path,
                parent: wD
              });
            if ("valid" === sD.status) return sD;
            "mI" !== sD.status || DD || (DD = {
              result: sD,
              ctx: wD
            }), wD.common.issues.length && pD.push(wD.common.issues)
          }
          if (DD) return zD.common.issues.push(...DD.ctx.common.issues), DD.result;
          const sD = pD.map((DD => new fD(DD)));
          return nD(zD, {
            code: UD.invalid_union,
            unionErrors: sD
          }), OD
        }
      }
      get options() {
        return this._def.options
      }
    }
    sz.create = (DD, zD) => new sz({
      options: DD,
      typeName: dz.ZodUnion,
      ...bD(zD)
    });
    const Kz = DD => DD instanceof Iz ? Kz(DD.schema) : DD instanceof Oz ? Kz(DD.innerType()) : DD instanceof Bz ? [DD.value] : DD instanceof hz ? DD.options : DD instanceof nz ? Object.keys(DD.enum) : DD instanceof Qz ? Kz(DD._def.innerType) : DD instanceof tD ? [void 0] : DD instanceof FD ? [null] : null;
    class rz extends jD {
      _parse(DD) {
        const {
          ctx: zD
        } = this._processInputParams(DD);
        if (zD.parsedType !== RD.object) return nD(zD, {
          code: UD.invalid_type,
          expected: RD.object,
          received: zD.parsedType
        }), OD;
        const wD = this.discriminator,
          pD = zD.data[wD],
          sD = this.optionsMap.get(pD);
        return sD ? zD.common.async ? sD._parseAsync({
          data: zD.data,
          path: zD.path,
          parent: zD
        }) : sD._parseSync({
          data: zD.data,
          path: zD.path,
          parent: zD
        }) : (nD(zD, {
          code: UD.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [wD]
        }), OD)
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
      static create(DD, zD, wD) {
        const pD = new Map;
        for (const sD of zD) {
          const zD = Kz(sD.shape[DD]);
          if (!zD) throw new Error(`A discriminator value for key \`${DD}\` could not be extracted from all schema options`);
          for (const wD of zD) {
            if (pD.has(wD)) throw new Error(`Discriminator property ${String(DD)} has duplicate value ${String(wD)}`);
            pD.set(wD, sD)
          }
        }
        return new rz({
          typeName: dz.ZodDiscriminatedUnion,
          discriminator: DD,
          options: zD,
          optionsMap: pD,
          ...bD(wD)
        })
      }
    }

    function Lz(DD, zD) {
      const wD = AD(DD),
        pD = AD(zD);
      if (DD === zD) return {
        valid: !0,
        data: DD
      };
      if (wD === RD.object && pD === RD.object) {
        const wD = LD.objectKeys(zD),
          pD = LD.objectKeys(DD).filter((DD => -1 !== wD.indexOf(DD))),
          sD = {
            ...DD,
            ...zD
          };
        for (const KD of pD) {
          const wD = Lz(DD[KD], zD[KD]);
          if (!wD.valid) return {
            valid: !1
          };
          sD[KD] = wD.data
        }
        return {
          valid: !0,
          data: sD
        }
      }
      if (wD === RD.array && pD === RD.array) {
        if (DD.length !== zD.length) return {
          valid: !1
        };
        const wD = [];
        for (let pD = 0; pD < DD.length; pD++) {
          const sD = Lz(DD[pD], zD[pD]);
          if (!sD.valid) return {
            valid: !1
          };
          wD.push(sD.data)
        }
        return {
          valid: !0,
          data: wD
        }
      }
      return wD === RD.date && pD === RD.date && +DD === +zD ? {
        valid: !0,
        data: DD
      } : {
        valid: !1
      }
    }
    class cz extends jD {
      _parse(DD) {
        const {
          status: zD,
          ctx: wD
        } = this._processInputParams(DD), pD = (DD, pD) => {
          if (QD(DD) || QD(pD)) return OD;
          const sD = Lz(DD.value, pD.value);
          return sD.valid ? ((XD(DD) || XD(pD)) && zD.mI(), {
            status: zD.value,
            value: sD.data
          }) : (nD(wD, {
            code: UD.invalid_intersection_types
          }), OD)
        };
        return wD.common.async ? Promise.all([this._def.left._parseAsync({
          data: wD.data,
          path: wD.path,
          parent: wD
        }), this._def.right._parseAsync({
          data: wD.data,
          path: wD.path,
          parent: wD
        })]).then((DD => {
          let [zD, wD] = DD;
          return pD(zD, wD)
        })) : pD(this._def.left._parseSync({
          data: wD.data,
          path: wD.path,
          parent: wD
        }), this._def.right._parseSync({
          data: wD.data,
          path: wD.path,
          parent: wD
        }))
      }
    }
    cz.create = (DD, zD, wD) => new cz({
      left: DD,
      right: zD,
      typeName: dz.ZodIntersection,
      ...bD(wD)
    });
    class gz extends jD {
      _parse(DD) {
        const {
          status: zD,
          ctx: wD
        } = this._processInputParams(DD);
        if (wD.parsedType !== RD.array) return nD(wD, {
          code: UD.invalid_type,
          expected: RD.array,
          received: wD.parsedType
        }), OD;
        if (wD.data.length < this._def.items.length) return nD(wD, {
          code: UD.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), OD;
        !this._def.rest && wD.data.length > this._def.items.length && (nD(wD, {
          code: UD.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), zD.mI());
        const pD = [...wD.data].map(((DD, zD) => {
          const pD = this._def.items[zD] || this._def.rest;
          return pD ? pD._parse(new xD(wD, DD, wD.path, zD)) : null
        })).filter((DD => !!DD));
        return wD.common.async ? Promise.all(pD).then((DD => MD.mergeArray(zD, DD))) : MD.mergeArray(zD, pD)
      }
      get items() {
        return this._def.items
      }
      rest(DD) {
        return new gz({
          ...this._def,
          rest: DD
        })
      }
    }
    gz.create = (DD, zD) => {
      if (!Array.isArray(DD)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new gz({
        items: DD,
        typeName: dz.ZodTuple,
        rest: null,
        ...bD(zD)
      })
    };
    class Rz extends jD {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(DD) {
        const {
          status: zD,
          ctx: wD
        } = this._processInputParams(DD);
        if (wD.parsedType !== RD.object) return nD(wD, {
          code: UD.invalid_type,
          expected: RD.object,
          received: wD.parsedType
        }), OD;
        const pD = [],
          sD = this._def.keyType,
          KD = this._def.valueType;
        for (const rD in wD.data) pD.push({
          key: sD._parse(new xD(wD, rD, wD.path, rD)),
          value: KD._parse(new xD(wD, wD.data[rD], wD.path, rD))
        });
        return wD.common.async ? MD.mergeObjectAsync(zD, pD) : MD.mergeObjectSync(zD, pD)
      }
      get element() {
        return this._def.valueType
      }
      static create(DD, zD, wD) {
        return new Rz(zD instanceof jD ? {
          keyType: DD,
          valueType: zD,
          typeName: dz.ZodRecord,
          ...bD(wD)
        } : {
          keyType: kD.create(),
          valueType: DD,
          typeName: dz.ZodRecord,
          ...bD(zD)
        })
      }
    }
    class Az extends jD {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(DD) {
        const {
          status: zD,
          ctx: wD
        } = this._processInputParams(DD);
        if (wD.parsedType !== RD.map) return nD(wD, {
          code: UD.invalid_type,
          expected: RD.map,
          received: wD.parsedType
        }), OD;
        const pD = this._def.keyType,
          sD = this._def.valueType,
          KD = [...wD.data.entries()].map(((DD, zD) => {
            let [KD, rD] = DD;
            return {
              key: pD._parse(new xD(wD, KD, wD.path, [zD, "key"])),
              value: sD._parse(new xD(wD, rD, wD.path, [zD, "value"]))
            }
          }));
        if (wD.common.async) {
          const DD = new Map;
          return Promise.resolve().then((async () => {
            for (const wD of KD) {
              const pD = await wD.key,
                sD = await wD.value;
              if ("aborted" === pD.status || "aborted" === sD.status) return OD;
              "mI" !== pD.status && "mI" !== sD.status || zD.mI(), DD.set(pD.value, sD.value)
            }
            return {
              status: zD.value,
              value: DD
            }
          }))
        } {
          const DD = new Map;
          for (const wD of KD) {
            const pD = wD.key,
              sD = wD.value;
            if ("aborted" === pD.status || "aborted" === sD.status) return OD;
            "mI" !== pD.status && "mI" !== sD.status || zD.mI(), DD.set(pD.value, sD.value)
          }
          return {
            status: zD.value,
            value: DD
          }
        }
      }
    }
    Az.create = (DD, zD, wD) => new Az({
      valueType: zD,
      keyType: DD,
      typeName: dz.ZodMap,
      ...bD(wD)
    });
    class Uz extends jD {
      _parse(DD) {
        const {
          status: zD,
          ctx: wD
        } = this._processInputParams(DD);
        if (wD.parsedType !== RD.set) return nD(wD, {
          code: UD.invalid_type,
          expected: RD.set,
          received: wD.parsedType
        }), OD;
        const pD = this._def;
        null !== pD.minSize && wD.data.size < pD.minSize.value && (nD(wD, {
          code: UD.too_small,
          minimum: pD.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: pD.minSize.message
        }), zD.mI()), null !== pD.maxSize && wD.data.size > pD.maxSize.value && (nD(wD, {
          code: UD.too_big,
          maximum: pD.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: pD.maxSize.message
        }), zD.mI());
        const sD = this._def.valueType;

        function KD(DD) {
          const wD = new Set;
          for (const pD of DD) {
            if ("aborted" === pD.status) return OD;
            "mI" === pD.status && zD.mI(), wD.add(pD.value)
          }
          return {
            status: zD.value,
            value: wD
          }
        }
        const rD = [...wD.data.values()].map(((DD, zD) => sD._parse(new xD(wD, DD, wD.path, zD))));
        return wD.common.async ? Promise.all(rD).then((DD => KD(DD))) : KD(rD)
      }
      min(DD, zD) {
        return new Uz({
          ...this._def,
          minSize: {
            value: DD,
            message: CD.toString(zD)
          }
        })
      }
      max(DD, zD) {
        return new Uz({
          ...this._def,
          maxSize: {
            value: DD,
            message: CD.toString(zD)
          }
        })
      }
      size(DD, zD) {
        return this.min(DD, zD).max(DD, zD)
      }
      nonempty(DD) {
        return this.min(1, DD)
      }
    }
    Uz.create = (DD, zD) => new Uz({
      valueType: DD,
      minSize: null,
      maxSize: null,
      typeName: dz.ZodSet,
      ...bD(zD)
    });
    class fz extends jD {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(DD) {
        const {
          ctx: zD
        } = this._processInputParams(DD);
        if (zD.parsedType !== RD.function) return nD(zD, {
          code: UD.invalid_type,
          expected: RD.function,
          received: zD.parsedType
        }), OD;

        function wD(DD, wD) {
          return hD({
            data: DD,
            path: zD.path,
            errorMaps: [zD.common.contextualErrorMap, zD.schemaErrorMap, GD(), ID].filter((DD => !!DD)),
            issueData: {
              code: UD.invalid_arguments,
              argumentsError: wD
            }
          })
        }

        function pD(DD, wD) {
          return hD({
            data: DD,
            path: zD.path,
            errorMaps: [zD.common.contextualErrorMap, zD.schemaErrorMap, GD(), ID].filter((DD => !!DD)),
            issueData: {
              code: UD.invalid_return_type,
              returnTypeError: wD
            }
          })
        }
        const sD = {
            errorMap: zD.common.contextualErrorMap
          },
          KD = zD.data;
        if (this._def.returns instanceof Mz) {
          const DD = this;
          return ED((async function() {
            for (var zD = arguments.length, rD = new Array(zD), LD = 0; LD < zD; LD++) rD[LD] = arguments[LD];
            const cD = new fD([]),
              gD = await DD._def.args.parseAsync(rD, sD).catch((DD => {
                throw cD.addIssue(wD(rD, DD)), cD
              })),
              RD = await Reflect.apply(KD, this, gD);
            return await DD._def.returns._def.type.parseAsync(RD, sD).catch((DD => {
              throw cD.addIssue(pD(RD, DD)), cD
            }))
          }))
        } {
          const DD = this;
          return ED((function() {
            for (var zD = arguments.length, rD = new Array(zD), LD = 0; LD < zD; LD++) rD[LD] = arguments[LD];
            const cD = DD._def.args.safeParse(rD, sD);
            if (!cD.success) throw new fD([wD(rD, cD.error)]);
            const gD = Reflect.apply(KD, this, cD.data),
              RD = DD._def.returns.safeParse(gD, sD);
            if (!RD.success) throw new fD([pD(gD, RD.error)]);
            return RD.data
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
        for (var DD = arguments.length, zD = new Array(DD), wD = 0; wD < DD; wD++) zD[wD] = arguments[wD];
        return new fz({
          ...this._def,
          args: gz.create(zD).rest(HD.create())
        })
      }
      returns(DD) {
        return new fz({
          ...this._def,
          returns: DD
        })
      }
      implement(DD) {
        return this.parse(DD)
      }
      strictImplement(DD) {
        return this.parse(DD)
      }
      static create(DD, zD, wD) {
        return new fz({
          args: DD || gz.create([]).rest(HD.create()),
          returns: zD || HD.create(),
          typeName: dz.ZodFunction,
          ...bD(wD)
        })
      }
    }
    class Iz extends jD {
      get schema() {
        return this._def.getter()
      }
      _parse(DD) {
        const {
          ctx: zD
        } = this._processInputParams(DD);
        return this._def.getter()._parse({
          data: zD.data,
          path: zD.path,
          parent: zD
        })
      }
    }
    Iz.create = (DD, zD) => new Iz({
      getter: DD,
      typeName: dz.ZodLazy,
      ...bD(zD)
    });
    class Bz extends jD {
      _parse(DD) {
        if (DD.data !== this._def.value) {
          const zD = this._getOrReturnCtx(DD);
          return nD(zD, {
            received: zD.data,
            code: UD.invalid_literal,
            expected: this._def.value
          }), OD
        }
        return {
          status: "valid",
          value: DD.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function Gz(DD, zD) {
      return new hz({
        values: DD,
        typeName: dz.ZodEnum,
        ...bD(zD)
      })
    }
    Bz.create = (DD, zD) => new Bz({
      value: DD,
      typeName: dz.ZodLiteral,
      ...bD(zD)
    });
    class hz extends jD {
      _parse(DD) {
        if ("string" !== typeof DD.data) {
          const zD = this._getOrReturnCtx(DD),
            wD = this._def.values;
          return nD(zD, {
            expected: LD.joinValues(wD),
            received: zD.parsedType,
            code: UD.invalid_type
          }), OD
        }
        if (-1 === this._def.values.indexOf(DD.data)) {
          const zD = this._getOrReturnCtx(DD),
            wD = this._def.values;
          return nD(zD, {
            received: zD.data,
            code: UD.invalid_enum_value,
            options: wD
          }), OD
        }
        return ED(DD.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const DD = {};
        for (const zD of this._def.values) DD[zD] = zD;
        return DD
      }
      get Values() {
        const DD = {};
        for (const zD of this._def.values) DD[zD] = zD;
        return DD
      }
      get Enum() {
        const DD = {};
        for (const zD of this._def.values) DD[zD] = zD;
        return DD
      }
      extract(DD) {
        return hz.create(DD)
      }
      exclude(DD) {
        return hz.create(this.options.filter((zD => !DD.includes(zD))))
      }
    }
    hz.create = Gz;
    class nz extends jD {
      _parse(DD) {
        const zD = LD.getValidEnumValues(this._def.values),
          wD = this._getOrReturnCtx(DD);
        if (wD.parsedType !== RD.string && wD.parsedType !== RD.number) {
          const DD = LD.objectValues(zD);
          return nD(wD, {
            expected: LD.joinValues(DD),
            received: wD.parsedType,
            code: UD.invalid_type
          }), OD
        }
        if (-1 === zD.indexOf(DD.data)) {
          const DD = LD.objectValues(zD);
          return nD(wD, {
            received: wD.data,
            code: UD.invalid_enum_value,
            options: DD
          }), OD
        }
        return ED(DD.data)
      }
      get enum() {
        return this._def.values
      }
    }
    nz.create = (DD, zD) => new nz({
      values: DD,
      typeName: dz.ZodNativeEnum,
      ...bD(zD)
    });
    class Mz extends jD {
      unwrap() {
        return this._def.type
      }
      _parse(DD) {
        const {
          ctx: zD
        } = this._processInputParams(DD);
        if (zD.parsedType !== RD.promise && !1 === zD.common.async) return nD(zD, {
          code: UD.invalid_type,
          expected: RD.promise,
          received: zD.parsedType
        }), OD;
        const wD = zD.parsedType === RD.promise ? zD.data : Promise.resolve(zD.data);
        return ED(wD.then((DD => this._def.type.parseAsync(DD, {
          path: zD.path,
          errorMap: zD.common.contextualErrorMap
        }))))
      }
    }
    Mz.create = (DD, zD) => new Mz({
      type: DD,
      typeName: dz.ZodPromise,
      ...bD(zD)
    });
    class Oz extends jD {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === dz.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(DD) {
        const {
          status: zD,
          ctx: wD
        } = this._processInputParams(DD), pD = this._def.effect || null, sD = {
          addIssue: DD => {
            nD(wD, DD), DD.fatal ? zD.abort() : zD.mI()
          },
          get path() {
            return wD.path
          }
        };
        if (sD.addIssue = sD.addIssue.bind(sD), "preprocess" === pD.type) {
          const DD = pD.transform(wD.data, sD);
          return wD.common.issues.length ? {
            status: "mI",
            value: wD.data
          } : wD.common.async ? Promise.resolve(DD).then((DD => this._def.schema._parseAsync({
            data: DD,
            path: wD.path,
            parent: wD
          }))) : this._def.schema._parseSync({
            data: DD,
            path: wD.path,
            parent: wD
          })
        }
        if ("refinement" === pD.type) {
          const DD = DD => {
            const zD = pD.refinement(DD, sD);
            if (wD.common.async) return Promise.resolve(zD);
            if (zD instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return DD
          };
          if (!1 === wD.common.async) {
            const pD = this._def.schema._parseSync({
              data: wD.data,
              path: wD.path,
              parent: wD
            });
            return "aborted" === pD.status ? OD : ("mI" === pD.status && zD.mI(), DD(pD.value), {
              status: zD.value,
              value: pD.value
            })
          }
          return this._def.schema._parseAsync({
            data: wD.data,
            path: wD.path,
            parent: wD
          }).then((wD => "aborted" === wD.status ? OD : ("mI" === wD.status && zD.mI(), DD(wD.value).then((() => ({
            status: zD.value,
            value: wD.value
          }))))))
        }
        if ("transform" === pD.type) {
          if (!1 === wD.common.async) {
            const DD = this._def.schema._parseSync({
              data: wD.data,
              path: wD.path,
              parent: wD
            });
            if (!VD(DD)) return DD;
            const KD = pD.transform(DD.value, sD);
            if (KD instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: zD.value,
              value: KD
            }
          }
          return this._def.schema._parseAsync({
            data: wD.data,
            path: wD.path,
            parent: wD
          }).then((DD => VD(DD) ? Promise.resolve(pD.transform(DD.value, sD)).then((DD => ({
            status: zD.value,
            value: DD
          }))) : DD))
        }
        LD.assertNever(pD)
      }
    }
    Oz.create = (DD, zD, wD) => new Oz({
      schema: DD,
      typeName: dz.ZodEffects,
      effect: zD,
      ...bD(wD)
    }), Oz.createWithPreprocess = (DD, zD, wD) => new Oz({
      schema: zD,
      effect: {
        type: "preprocess",
        transform: DD
      },
      typeName: dz.ZodEffects,
      ...bD(wD)
    });
    class Jz extends jD {
      _parse(DD) {
        return this._getType(DD) === RD.undefined ? ED(void 0) : this._def.innerType._parse(DD)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Jz.create = (DD, zD) => new Jz({
      innerType: DD,
      typeName: dz.ZodOptional,
      ...bD(zD)
    });
    class Ez extends jD {
      _parse(DD) {
        return this._getType(DD) === RD.null ? ED(null) : this._def.innerType._parse(DD)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Ez.create = (DD, zD) => new Ez({
      innerType: DD,
      typeName: dz.ZodNullable,
      ...bD(zD)
    });
    class Qz extends jD {
      _parse(DD) {
        const {
          ctx: zD
        } = this._processInputParams(DD);
        let wD = zD.data;
        return zD.parsedType === RD.undefined && (wD = this._def.defaultValue()), this._def.innerType._parse({
          data: wD,
          path: zD.path,
          parent: zD
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    Qz.create = (DD, zD) => new Qz({
      innerType: DD,
      typeName: dz.ZodDefault,
      defaultValue: "function" === typeof zD.default ? zD.default : () => zD.default,
      ...bD(zD)
    });
    class Xz extends jD {
      _parse(DD) {
        const {
          ctx: zD
        } = this._processInputParams(DD), wD = {
          ...zD,
          common: {
            ...zD.common,
            issues: []
          }
        }, pD = this._def.innerType._parse({
          data: wD.data,
          path: wD.path,
          parent: {
            ...wD
          }
        });
        return PD(pD) ? pD.then((DD => ({
          status: "valid",
          value: "valid" === DD.status ? DD.value : this._def.catchValue({
            get error() {
              return new fD(wD.common.issues)
            },
            input: wD.data
          })
        }))) : {
          status: "valid",
          value: "valid" === pD.status ? pD.value : this._def.catchValue({
            get error() {
              return new fD(wD.common.issues)
            },
            input: wD.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    Xz.create = (DD, zD) => new Xz({
      innerType: DD,
      typeName: dz.ZodCatch,
      catchValue: "function" === typeof zD.catch ? zD.catch : () => zD.catch,
      ...bD(zD)
    });
    class Vz extends jD {
      _parse(DD) {
        if (this._getType(DD) !== RD.nan) {
          const zD = this._getOrReturnCtx(DD);
          return nD(zD, {
            code: UD.invalid_type,
            expected: RD.nan,
            received: zD.parsedType
          }), OD
        }
        return {
          status: "valid",
          value: DD.data
        }
      }
    }
    Vz.create = DD => new Vz({
      typeName: dz.ZodNaN,
      ...bD(DD)
    });
    const Pz = Symbol("zod_brand");
    class Cz extends jD {
      _parse(DD) {
        const {
          ctx: zD
        } = this._processInputParams(DD), wD = zD.data;
        return this._def.type._parse({
          data: wD,
          path: zD.path,
          parent: zD
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class xz extends jD {
      _parse(DD) {
        const {
          status: zD,
          ctx: wD
        } = this._processInputParams(DD);
        if (wD.common.async) {
          return (async () => {
            const DD = await this._def.in._parseAsync({
              data: wD.data,
              path: wD.path,
              parent: wD
            });
            return "aborted" === DD.status ? OD : "mI" === DD.status ? (zD.mI(), JD(DD.value)) : this._def.out._parseAsync({
              data: DD.value,
              path: wD.path,
              parent: wD
            })
          })()
        } {
          const DD = this._def.in._parseSync({
            data: wD.data,
            path: wD.path,
            parent: wD
          });
          return "aborted" === DD.status ? OD : "mI" === DD.status ? (zD.mI(), {
            status: "mI",
            value: DD.value
          }) : this._def.out._parseSync({
            data: DD.value,
            path: wD.path,
            parent: wD
          })
        }
      }
      static create(DD, zD) {
        return new xz({
          in: DD,
          out: zD,
          typeName: dz.ZodPipeline
        })
      }
    }
    class Tz extends jD {
      _parse(DD) {
        const zD = this._def.innerType._parse(DD);
        return VD(zD) && (zD.value = Object.freeze(zD.value)), zD
      }
    }
    Tz.create = (DD, zD) => new Tz({
      innerType: DD,
      typeName: dz.ZodReadonly,
      ...bD(zD)
    });
    const bz = function(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          wD = arguments.length > 2 ? arguments[2] : void 0;
        return DD ? YD.create().superRefine(((pD, sD) => {
          var KD, rD;
          if (!DD(pD)) {
            const DD = "function" === typeof zD ? zD(pD) : "string" === typeof zD ? {
                message: zD
              } : zD,
              LD = null === (rD = null !== (KD = DD.fatal) && void 0 !== KD ? KD : wD) || void 0 === rD || rD,
              cD = "string" === typeof DD ? {
                message: DD
              } : DD;
            sD.addIssue({
              code: "custom",
              ...cD,
              fatal: LD
            })
          }
        })) : YD.create()
      },
      jz = {
        object: pz.lazycreate
      };
    var dz;
    ! function(DD) {
      DD.ZodString = "ZodString", DD.ZodNumber = "ZodNumber", DD.ZodNaN = "ZodNaN", DD.ZodBigInt = "ZodBigInt", DD.ZodBoolean = "ZodBoolean", DD.ZodDate = "ZodDate", DD.ZodSymbol = "ZodSymbol", DD.ZodUndefined = "ZodUndefined", DD.ZodNull = "ZodNull", DD.ZodAny = "ZodAny", DD.ZodUnknown = "ZodUnknown", DD.ZodNever = "ZodNever", DD.ZodVoid = "ZodVoid", DD.ZodArray = "ZodArray", DD.ZodObject = "ZodObject", DD.ZodUnion = "ZodUnion", DD.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", DD.ZodIntersection = "ZodIntersection", DD.ZodTuple = "ZodTuple", DD.ZodRecord = "ZodRecord", DD.ZodMap = "ZodMap", DD.ZodSet = "ZodSet", DD.ZodFunction = "ZodFunction", DD.ZodLazy = "ZodLazy", DD.ZodLiteral = "ZodLiteral", DD.ZodEnum = "ZodEnum", DD.ZodEffects = "ZodEffects", DD.ZodNativeEnum = "ZodNativeEnum", DD.ZodOptional = "ZodOptional", DD.ZodNullable = "ZodNullable", DD.ZodDefault = "ZodDefault", DD.ZodCatch = "ZodCatch", DD.ZodPromise = "ZodPromise", DD.ZodBranded = "ZodBranded", DD.ZodPipeline = "ZodPipeline", DD.ZodReadonly = "ZodReadonly"
    }(dz || (dz = {}));
    const Sz = kD.create,
      iz = eD.create,
      lz = Vz.create,
      Wz = oD.create,
      Nz = aD.create,
      Zz = uD.create,
      yz = vD.create,
      kz = tD.create,
      mz = FD.create,
      ez = YD.create,
      oz = HD.create,
      az = qD.create,
      uz = Dz.create,
      vz = zz.create,
      tz = pz.create,
      Fz = pz.strictCreate,
      Yz = sz.create,
      Hz = rz.create,
      qz = cz.create,
      Dw = gz.create,
      zw = Rz.create,
      ww = Az.create,
      pw = Uz.create,
      sw = fz.create,
      Kw = Iz.create,
      rw = Bz.create,
      Lw = hz.create,
      gw = nz.create,
      Rw = Mz.create,
      Aw = Oz.create,
      Uw = Jz.create,
      fw = Ez.create,
      Iw = Oz.createWithPreprocess,
      Bw = xz.create,
      Gw = {
        string: DD => kD.create({
          ...DD,
          coerce: !0
        }),
        number: DD => eD.create({
          ...DD,
          coerce: !0
        }),
        boolean: DD => aD.create({
          ...DD,
          coerce: !0
        }),
        bigint: DD => oD.create({
          ...DD,
          coerce: !0
        }),
        date: DD => uD.create({
          ...DD,
          coerce: !0
        })
      },
      hw = OD;
    var nw = Object.freeze({
        __proto__: null,
        defaultErrorMap: ID,
        setErrorMap: function(DD) {
          BD = DD
        },
        getErrorMap: GD,
        makeIssue: hD,
        EMPTY_PATH: [],
        addIssueToContext: nD,
        ParseStatus: MD,
        INVALID: OD,
        DIRTY: JD,
        OK: ED,
        isAborted: QD,
        isDirty: XD,
        isValid: VD,
        isAsync: PD,
        get util() {
          return LD
        },
        get objectUtil() {
          return cD
        },
        ZodParsedType: RD,
        getParsedType: AD,
        ZodType: jD,
        ZodString: kD,
        ZodNumber: eD,
        ZodBigInt: oD,
        ZodBoolean: aD,
        ZodDate: uD,
        ZodSymbol: vD,
        ZodUndefined: tD,
        ZodNull: FD,
        ZodAny: YD,
        ZodUnknown: HD,
        ZodNever: qD,
        ZodVoid: Dz,
        ZodArray: zz,
        ZodObject: pz,
        ZodUnion: sz,
        ZodDiscriminatedUnion: rz,
        ZodIntersection: cz,
        ZodTuple: gz,
        ZodRecord: Rz,
        ZodMap: Az,
        ZodSet: Uz,
        ZodFunction: fz,
        ZodLazy: Iz,
        ZodLiteral: Bz,
        ZodEnum: hz,
        ZodNativeEnum: nz,
        ZodPromise: Mz,
        ZodEffects: Oz,
        ZodTransformer: Oz,
        ZodOptional: Jz,
        ZodNullable: Ez,
        ZodDefault: Qz,
        ZodCatch: Xz,
        ZodNaN: Vz,
        BRAND: Pz,
        ZodBranded: Cz,
        ZodPipeline: xz,
        ZodReadonly: Tz,
        custom: bz,
        Schema: jD,
        ZodSchema: jD,
        late: jz,
        get ZodFirstPartyTypeKind() {
          return dz
        },
        coerce: Gw,
        any: ez,
        array: vz,
        bigint: Wz,
        boolean: Nz,
        date: Zz,
        discriminatedUnion: Hz,
        effect: Aw,
        enum: Lw,
        function: sw,
        instanceof: function(DD) {
          let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${DD.name}`
          };
          return bz((zD => zD instanceof DD), zD)
        },
        intersection: qz,
        lazy: Kw,
        literal: rw,
        map: ww,
        nan: lz,
        nativeEnum: gw,
        never: az,
        null: mz,
        nullable: fw,
        number: iz,
        object: tz,
        oboolean: () => Nz().optional(),
        onumber: () => iz().optional(),
        optional: Uw,
        ostring: () => Sz().optional(),
        pipeline: Bw,
        preprocess: Iw,
        promise: Rw,
        record: zw,
        set: pw,
        strictObject: Fz,
        string: Sz,
        symbol: yz,
        transformer: Aw,
        tuple: Dw,
        undefined: kz,
        union: Yz,
        unknown: oz,
        void: uz,
        NEVER: hw,
        ZodIssueCode: UD,
        quotelessJson: DD => JSON.stringify(DD, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: fD
      }),
      Mw = {
        exports: {}
      };
    ! function(DD) {
      var zD = function(DD) {
        var wD = 1e7,
          pD = 9007199254740992,
          sD = UD(pD),
          KD = "0123456789abcdefghijklmnopqrstuvwxyz",
          rD = "function" === typeof BigInt;

        function LD(DD, zD, wD, pD) {
          return "undefined" === typeof DD ? LD[0] : "undefined" !== typeof zD && (10 !== +zD || wD) ? aD(DD, zD, wD, pD) : YD(DD)
        }

        function cD(DD, zD) {
          this.value = DD, this.sign = zD, this.isSmall = !1
        }

        function gD(DD) {
          this.value = DD, this.sign = DD < 0, this.isSmall = !0
        }

        function RD(DD) {
          this.value = DD
        }

        function AD(DD) {
          return -pD < DD && DD < pD
        }

        function UD(DD) {
          return DD < 1e7 ? [DD] : DD < 1e14 ? [DD % 1e7, Math.floor(DD / 1e7)] : [DD % 1e7, Math.floor(DD / 1e7) % 1e7, Math.floor(DD / 1e14)]
        }

        function fD(DD) {
          ID(DD);
          var zD = DD.length;
          if (zD < 4 && bD(DD, sD) < 0) switch (zD) {
            case 0:
              return 0;
            case 1:
              return DD[0];
            case 2:
              return DD[0] + DD[1] * wD;
            default:
              return DD[0] + (DD[1] + DD[2] * wD) * wD
          }
          return DD
        }

        function ID(DD) {
          for (var zD = DD.length; 0 === DD[--zD];);
          DD.length = zD + 1
        }

        function BD(DD) {
          for (var zD = new Array(DD), wD = -1; ++wD < DD;) zD[wD] = 0;
          return zD
        }

        function GD(DD) {
          return DD > 0 ? Math.floor(DD) : Math.ceil(DD)
        }

        function hD(DD, zD) {
          var pD, sD, KD = DD.length,
            rD = zD.length,
            LD = new Array(KD),
            cD = 0,
            gD = wD;
          for (sD = 0; sD < rD; sD++) cD = (pD = DD[sD] + zD[sD] + cD) >= gD ? 1 : 0, LD[sD] = pD - cD * gD;
          for (; sD < KD;) cD = (pD = DD[sD] + cD) === gD ? 1 : 0, LD[sD++] = pD - cD * gD;
          return cD > 0 && LD.push(cD), LD
        }

        function nD(DD, zD) {
          return DD.length >= zD.length ? hD(DD, zD) : hD(zD, DD)
        }

        function MD(DD, zD) {
          var pD, sD, KD = DD.length,
            rD = new Array(KD),
            LD = wD;
          for (sD = 0; sD < KD; sD++) pD = DD[sD] - LD + zD, zD = Math.floor(pD / LD), rD[sD] = pD - zD * LD, zD += 1;
          for (; zD > 0;) rD[sD++] = zD % LD, zD = Math.floor(zD / LD);
          return rD
        }

        function OD(DD, zD) {
          var pD, sD, KD = DD.length,
            rD = zD.length,
            LD = new Array(KD),
            cD = 0,
            gD = wD;
          for (pD = 0; pD < rD; pD++)(sD = DD[pD] - cD - zD[pD]) < 0 ? (sD += gD, cD = 1) : cD = 0, LD[pD] = sD;
          for (pD = rD; pD < KD; pD++) {
            if (!((sD = DD[pD] - cD) < 0)) {
              LD[pD++] = sD;
              break
            }
            sD += gD, LD[pD] = sD
          }
          for (; pD < KD; pD++) LD[pD] = DD[pD];
          return ID(LD), LD
        }

        function JD(DD, zD, pD) {
          var sD, KD, rD = DD.length,
            LD = new Array(rD),
            RD = -zD,
            AD = wD;
          for (sD = 0; sD < rD; sD++) KD = DD[sD] + RD, RD = Math.floor(KD / AD), KD %= AD, LD[sD] = KD < 0 ? KD + AD : KD;
          return "number" === typeof(LD = fD(LD)) ? (pD && (LD = -LD), new gD(LD)) : new cD(LD, pD)
        }

        function ED(DD, zD) {
          var pD, sD, KD, rD, LD = DD.length,
            cD = zD.length,
            gD = BD(LD + cD),
            RD = wD;
          for (KD = 0; KD < LD; ++KD) {
            rD = DD[KD];
            for (var AD = 0; AD < cD; ++AD) pD = rD * zD[AD] + gD[KD + AD], sD = Math.floor(pD / RD), gD[KD + AD] = pD - sD * RD, gD[KD + AD + 1] += sD
          }
          return ID(gD), gD
        }

        function QD(DD, zD) {
          var pD, sD, KD = DD.length,
            rD = new Array(KD),
            LD = wD,
            cD = 0;
          for (sD = 0; sD < KD; sD++) pD = DD[sD] * zD + cD, cD = Math.floor(pD / LD), rD[sD] = pD - cD * LD;
          for (; cD > 0;) rD[sD++] = cD % LD, cD = Math.floor(cD / LD);
          return rD
        }

        function XD(DD, zD) {
          for (var wD = []; zD-- > 0;) wD.push(0);
          return wD.concat(DD)
        }

        function VD(DD, zD) {
          var wD = Math.max(DD.length, zD.length);
          if (wD <= 30) return ED(DD, zD);
          wD = Math.ceil(wD / 2);
          var pD = DD.slice(wD),
            sD = DD.slice(0, wD),
            KD = zD.slice(wD),
            rD = zD.slice(0, wD),
            LD = VD(sD, rD),
            cD = VD(pD, KD),
            gD = VD(nD(sD, pD), nD(rD, KD)),
            RD = nD(nD(LD, XD(OD(OD(gD, LD), cD), wD)), XD(cD, 2 * wD));
          return ID(RD), RD
        }

        function PD(DD, zD, pD) {
          return new cD(DD < wD ? QD(zD, DD) : ED(zD, UD(DD)), pD)
        }

        function CD(DD) {
          var zD, pD, sD, KD, rD = DD.length,
            LD = BD(rD + rD),
            cD = wD;
          for (sD = 0; sD < rD; sD++) {
            pD = 0 - (KD = DD[sD]) * KD;
            for (var gD = sD; gD < rD; gD++) zD = KD * DD[gD] * 2 + LD[sD + gD] + pD, pD = Math.floor(zD / cD), LD[sD + gD] = zD - pD * cD;
            LD[sD + rD] = pD
          }
          return ID(LD), LD
        }

        function xD(DD, zD) {
          var pD, sD, KD, rD, LD = DD.length,
            cD = BD(LD),
            gD = wD;
          for (KD = 0, pD = LD - 1; pD >= 0; --pD) KD = (rD = KD * gD + DD[pD]) - (sD = GD(rD / zD)) * zD, cD[pD] = 0 | sD;
          return [cD, 0 | KD]
        }

        function TD(DD, zD) {
          var pD, sD = YD(zD);
          if (rD) return [new RD(DD.value / sD.value), new RD(DD.value % sD.value)];
          var KD, AD = DD.value,
            hD = sD.value;
          if (0 === hD) throw new Error("Cannot divide by zero");
          if (DD.isSmall) return sD.isSmall ? [new gD(GD(AD / hD)), new gD(AD % hD)] : [LD[0], DD];
          if (sD.isSmall) {
            if (1 === hD) return [DD, LD[0]];
            if (-1 == hD) return [DD.ep(), LD[0]];
            var nD = Math.abs(hD);
            if (nD < wD) {
              KD = fD((pD = xD(AD, nD))[0]);
              var MD = pD[1];
              return DD.sign && (MD = -MD), "number" === typeof KD ? (DD.sign !== sD.sign && (KD = -KD), [new gD(KD), new gD(MD)]) : [new cD(KD, DD.sign !== sD.sign), new gD(MD)]
            }
            hD = UD(nD)
          }
          var JD = bD(AD, hD);
          if (-1 === JD) return [LD[0], DD];
          if (0 === JD) return [LD[DD.sign === sD.sign ? 1 : -1], LD[0]];
          pD = AD.length + hD.length <= 200 ? function(DD, zD) {
            var pD, sD, KD, rD, LD, cD, gD, RD = DD.length,
              AD = zD.length,
              UD = wD,
              ID = BD(zD.length),
              GD = zD[AD - 1],
              hD = Math.ceil(UD / (2 * GD)),
              nD = QD(DD, hD),
              MD = QD(zD, hD);
            for (nD.length <= RD && nD.push(0), MD.push(0), GD = MD[AD - 1], sD = RD - AD; sD >= 0; sD--) {
              for (pD = UD - 1, nD[sD + AD] !== GD && (pD = Math.floor((nD[sD + AD] * UD + nD[sD + AD - 1]) / GD)), KD = 0, rD = 0, cD = MD.length, LD = 0; LD < cD; LD++) KD += pD * MD[LD], gD = Math.floor(KD / UD), rD += nD[sD + LD] - (KD - gD * UD), KD = gD, rD < 0 ? (nD[sD + LD] = rD + UD, rD = -1) : (nD[sD + LD] = rD, rD = 0);
              for (; 0 !== rD;) {
                for (pD -= 1, KD = 0, LD = 0; LD < cD; LD++)(KD += nD[sD + LD] - UD + MD[LD]) < 0 ? (nD[sD + LD] = KD + UD, KD = 0) : (nD[sD + LD] = KD, KD = 1);
                rD += KD
              }
              ID[sD] = pD
            }
            return nD = xD(nD, hD)[0], [fD(ID), fD(nD)]
          }(AD, hD) : function(DD, zD) {
            for (var pD, sD, KD, rD, LD, cD = DD.length, gD = zD.length, RD = [], AD = [], UD = wD; cD;)
              if (AD.unshift(DD[--cD]), ID(AD), bD(AD, zD) < 0) RD.push(0);
              else {
                KD = AD[(sD = AD.length) - 1] * UD + AD[sD - 2], rD = zD[gD - 1] * UD + zD[gD - 2], sD > gD && (KD = (KD + 1) * UD), pD = Math.ceil(KD / rD);
                do {
                  if (bD(LD = QD(zD, pD), AD) <= 0) break;
                  pD--
                } while (pD);
                RD.push(pD), AD = OD(AD, LD)
              } return RD.reverse(), [fD(RD), fD(AD)]
          }(AD, hD), KD = pD[0];
          var ED = DD.sign !== sD.sign,
            XD = pD[1],
            VD = DD.sign;
          return "number" === typeof KD ? (ED && (KD = -KD), KD = new gD(KD)) : KD = new cD(KD, ED), "number" === typeof XD ? (VD && (XD = -XD), XD = new gD(XD)) : XD = new cD(XD, VD), [KD, XD]
        }

        function bD(DD, zD) {
          if (DD.length !== zD.length) return DD.length > zD.length ? 1 : -1;
          for (var wD = DD.length - 1; wD >= 0; wD--)
            if (DD[wD] !== zD[wD]) return DD[wD] > zD[wD] ? 1 : -1;
          return 0
        }

        function jD(DD) {
          var zD = DD.abs();
          return !zD.isUnit() && (!!(zD.equals(2) || zD.equals(3) || zD.equals(5)) || !(zD.isEven() || zD.isDivisibleBy(3) || zD.isDivisibleBy(5)) && (!!zD.lesser(49) || void 0))
        }

        function dD(DD, wD) {
          for (var pD, sD, KD, rD = DD.prev(), LD = rD, cD = 0; LD.isEven();) LD = LD.divide(2), cD++;
          DD: for (sD = 0; sD < wD.length; sD++)
            if (!DD.lesser(wD[sD]) && !(KD = zD(wD[sD]).modPow(LD, DD)).isUnit() && !KD.equals(rD)) {
              for (pD = cD - 1; 0 != pD; pD--) {
                if ((KD = KD.square().mod(DD)).isUnit()) return !1;
                if (KD.equals(rD)) continue DD
              }
              return !1
            }
          return !0
        }
        cD.prototype = Object.create(LD.prototype), gD.prototype = Object.create(LD.prototype), RD.prototype = Object.create(LD.prototype), cD.prototype.add = function(DD) {
          var zD = YD(DD);
          if (this.sign !== zD.sign) return this.subtract(zD.ep());
          var wD = this.value,
            pD = zD.value;
          return zD.isSmall ? new cD(MD(wD, Math.abs(pD)), this.sign) : new cD(nD(wD, pD), this.sign)
        }, cD.prototype.plus = cD.prototype.add, gD.prototype.add = function(DD) {
          var zD = YD(DD),
            wD = this.value;
          if (wD < 0 !== zD.sign) return this.subtract(zD.ep());
          var pD = zD.value;
          if (zD.isSmall) {
            if (AD(wD + pD)) return new gD(wD + pD);
            pD = UD(Math.abs(pD))
          }
          return new cD(MD(pD, Math.abs(wD)), wD < 0)
        }, gD.prototype.plus = gD.prototype.add, RD.prototype.add = function(DD) {
          return new RD(this.value + YD(DD).value)
        }, RD.prototype.plus = RD.prototype.add, cD.prototype.subtract = function(DD) {
          var zD = YD(DD);
          if (this.sign !== zD.sign) return this.add(zD.ep());
          var wD = this.value,
            pD = zD.value;
          return zD.isSmall ? JD(wD, Math.abs(pD), this.sign) : function(DD, zD, wD) {
            var pD;
            return bD(DD, zD) >= 0 ? pD = OD(DD, zD) : (pD = OD(zD, DD), wD = !wD), "number" === typeof(pD = fD(pD)) ? (wD && (pD = -pD), new gD(pD)) : new cD(pD, wD)
          }(wD, pD, this.sign)
        }, cD.prototype.minus = cD.prototype.subtract, gD.prototype.subtract = function(DD) {
          var zD = YD(DD),
            wD = this.value;
          if (wD < 0 !== zD.sign) return this.add(zD.ep());
          var pD = zD.value;
          return zD.isSmall ? new gD(wD - pD) : JD(pD, Math.abs(wD), wD >= 0)
        }, gD.prototype.minus = gD.prototype.subtract, RD.prototype.subtract = function(DD) {
          return new RD(this.value - YD(DD).value)
        }, RD.prototype.minus = RD.prototype.subtract, cD.prototype.ep = function() {
          return new cD(this.value, !this.sign)
        }, gD.prototype.ep = function() {
          var DD = this.sign,
            zD = new gD(-this.value);
          return zD.sign = !DD, zD
        }, RD.prototype.ep = function() {
          return new RD(-this.value)
        }, cD.prototype.abs = function() {
          return new cD(this.value, !1)
        }, gD.prototype.abs = function() {
          return new gD(Math.abs(this.value))
        }, RD.prototype.abs = function() {
          return new RD(this.value >= 0 ? this.value : -this.value)
        }, cD.prototype.multiply = function(DD) {
          var zD, pD, sD, KD = YD(DD),
            rD = this.value,
            gD = KD.value,
            RD = this.sign !== KD.sign;
          if (KD.isSmall) {
            if (0 === gD) return LD[0];
            if (1 === gD) return this;
            if (-1 === gD) return this.ep();
            if ((zD = Math.abs(gD)) < wD) return new cD(QD(rD, zD), RD);
            gD = UD(zD)
          }
          return pD = rD.length, sD = gD.length, new cD(-.012 * pD - .012 * sD + 15e-6 * pD * sD > 0 ? VD(rD, gD) : ED(rD, gD), RD)
        }, cD.prototype.times = cD.prototype.multiply, gD.prototype._multiplyBySmall = function(DD) {
          return AD(DD.value * this.value) ? new gD(DD.value * this.value) : PD(Math.abs(DD.value), UD(Math.abs(this.value)), this.sign !== DD.sign)
        }, cD.prototype._multiplyBySmall = function(DD) {
          return 0 === DD.value ? LD[0] : 1 === DD.value ? this : -1 === DD.value ? this.ep() : PD(Math.abs(DD.value), this.value, this.sign !== DD.sign)
        }, gD.prototype.multiply = function(DD) {
          return YD(DD)._multiplyBySmall(this)
        }, gD.prototype.times = gD.prototype.multiply, RD.prototype.multiply = function(DD) {
          return new RD(this.value * YD(DD).value)
        }, RD.prototype.times = RD.prototype.multiply, cD.prototype.square = function() {
          return new cD(CD(this.value), !1)
        }, gD.prototype.square = function() {
          var DD = this.value * this.value;
          return AD(DD) ? new gD(DD) : new cD(CD(UD(Math.abs(this.value))), !1)
        }, RD.prototype.square = function(DD) {
          return new RD(this.value * this.value)
        }, cD.prototype.divmod = function(DD) {
          var zD = TD(this, DD);
          return {
            quotient: zD[0],
            remainder: zD[1]
          }
        }, RD.prototype.divmod = gD.prototype.divmod = cD.prototype.divmod, cD.prototype.divide = function(DD) {
          return TD(this, DD)[0]
        }, RD.prototype.over = RD.prototype.divide = function(DD) {
          return new RD(this.value / YD(DD).value)
        }, gD.prototype.over = gD.prototype.divide = cD.prototype.over = cD.prototype.divide, cD.prototype.mod = function(DD) {
          return TD(this, DD)[1]
        }, RD.prototype.mod = RD.prototype.remainder = function(DD) {
          return new RD(this.value % YD(DD).value)
        }, gD.prototype.remainder = gD.prototype.mod = cD.prototype.remainder = cD.prototype.mod, cD.prototype.pow = function(DD) {
          var zD, wD, pD, sD = YD(DD),
            KD = this.value,
            rD = sD.value;
          if (0 === rD) return LD[1];
          if (0 === KD) return LD[0];
          if (1 === KD) return LD[1];
          if (-1 === KD) return sD.isEven() ? LD[1] : LD[-1];
          if (sD.sign) return LD[0];
          if (!sD.isSmall) throw new Error("The exponent " + sD.toString() + " is too large.");
          if (this.isSmall && AD(zD = Math.pow(KD, rD))) return new gD(GD(zD));
          for (wD = this, pD = LD[1]; !0 & rD && (pD = pD.times(wD), --rD), 0 !== rD;) rD /= 2, wD = wD.square();
          return pD
        }, gD.prototype.pow = cD.prototype.pow, RD.prototype.pow = function(DD) {
          var zD = YD(DD),
            wD = this.value,
            pD = zD.value,
            sD = BigInt(0),
            KD = BigInt(1),
            rD = BigInt(2);
          if (pD === sD) return LD[1];
          if (wD === sD) return LD[0];
          if (wD === KD) return LD[1];
          if (wD === BigInt(-1)) return zD.isEven() ? LD[1] : LD[-1];
          if (zD.isNegative()) return new RD(sD);
          for (var cD = this, gD = LD[1];
            (pD & KD) === KD && (gD = gD.times(cD), --pD), pD !== sD;) pD /= rD, cD = cD.square();
          return gD
        }, cD.prototype.modPow = function(DD, zD) {
          if (DD = YD(DD), (zD = YD(zD)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var wD = LD[1],
            pD = this.mod(zD);
          for (DD.isNegative() && (DD = DD.multiply(LD[-1]), pD = pD.modInv(zD)); DD.isPositive();) {
            if (pD.isZero()) return LD[0];
            DD.isOdd() && (wD = wD.multiply(pD).mod(zD)), DD = DD.divide(2), pD = pD.square().mod(zD)
          }
          return wD
        }, RD.prototype.modPow = gD.prototype.modPow = cD.prototype.modPow, cD.prototype.compareAbs = function(DD) {
          var zD = YD(DD),
            wD = this.value,
            pD = zD.value;
          return zD.isSmall ? 1 : bD(wD, pD)
        }, gD.prototype.compareAbs = function(DD) {
          var zD = YD(DD),
            wD = Math.abs(this.value),
            pD = zD.value;
          return zD.isSmall ? wD === (pD = Math.abs(pD)) ? 0 : wD > pD ? 1 : -1 : -1
        }, RD.prototype.compareAbs = function(DD) {
          var zD = this.value,
            wD = YD(DD).value;
          return (zD = zD >= 0 ? zD : -zD) === (wD = wD >= 0 ? wD : -wD) ? 0 : zD > wD ? 1 : -1
        }, cD.prototype.compare = function(DD) {
          if (DD === 1 / 0) return -1;
          if (DD === -1 / 0) return 1;
          var zD = YD(DD),
            wD = this.value,
            pD = zD.value;
          return this.sign !== zD.sign ? zD.sign ? 1 : -1 : zD.isSmall ? this.sign ? -1 : 1 : bD(wD, pD) * (this.sign ? -1 : 1)
        }, cD.prototype.compareTo = cD.prototype.compare, gD.prototype.compare = function(DD) {
          if (DD === 1 / 0) return -1;
          if (DD === -1 / 0) return 1;
          var zD = YD(DD),
            wD = this.value,
            pD = zD.value;
          return zD.isSmall ? wD == pD ? 0 : wD > pD ? 1 : -1 : wD < 0 !== zD.sign ? wD < 0 ? -1 : 1 : wD < 0 ? 1 : -1
        }, gD.prototype.compareTo = gD.prototype.compare, RD.prototype.compare = function(DD) {
          if (DD === 1 / 0) return -1;
          if (DD === -1 / 0) return 1;
          var zD = this.value,
            wD = YD(DD).value;
          return zD === wD ? 0 : zD > wD ? 1 : -1
        }, RD.prototype.compareTo = RD.prototype.compare, cD.prototype.equals = function(DD) {
          return 0 === this.compare(DD)
        }, RD.prototype.eq = RD.prototype.equals = gD.prototype.eq = gD.prototype.equals = cD.prototype.eq = cD.prototype.equals, cD.prototype.notEquals = function(DD) {
          return 0 !== this.compare(DD)
        }, RD.prototype.neq = RD.prototype.notEquals = gD.prototype.neq = gD.prototype.notEquals = cD.prototype.neq = cD.prototype.notEquals, cD.prototype.greater = function(DD) {
          return this.compare(DD) > 0
        }, RD.prototype.gt = RD.prototype.greater = gD.prototype.gt = gD.prototype.greater = cD.prototype.gt = cD.prototype.greater, cD.prototype.lesser = function(DD) {
          return this.compare(DD) < 0
        }, RD.prototype.lt = RD.prototype.lesser = gD.prototype.lt = gD.prototype.lesser = cD.prototype.lt = cD.prototype.lesser, cD.prototype.greaterOrEquals = function(DD) {
          return this.compare(DD) >= 0
        }, RD.prototype.geq = RD.prototype.greaterOrEquals = gD.prototype.geq = gD.prototype.greaterOrEquals = cD.prototype.geq = cD.prototype.greaterOrEquals, cD.prototype.lesserOrEquals = function(DD) {
          return this.compare(DD) <= 0
        }, RD.prototype.leq = RD.prototype.lesserOrEquals = gD.prototype.leq = gD.prototype.lesserOrEquals = cD.prototype.leq = cD.prototype.lesserOrEquals, cD.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, gD.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, RD.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, cD.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, gD.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, RD.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, cD.prototype.isPositive = function() {
          return !this.sign
        }, gD.prototype.isPositive = function() {
          return this.value > 0
        }, RD.prototype.isPositive = gD.prototype.isPositive, cD.prototype.isNegative = function() {
          return this.sign
        }, gD.prototype.isNegative = function() {
          return this.value < 0
        }, RD.prototype.isNegative = gD.prototype.isNegative, cD.prototype.isUnit = function() {
          return !1
        }, gD.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, RD.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, cD.prototype.isZero = function() {
          return !1
        }, gD.prototype.isZero = function() {
          return 0 === this.value
        }, RD.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, cD.prototype.isDivisibleBy = function(DD) {
          var zD = YD(DD);
          return !zD.isZero() && (!!zD.isUnit() || (0 === zD.compareAbs(2) ? this.isEven() : this.mod(zD).isZero()))
        }, RD.prototype.isDivisibleBy = gD.prototype.isDivisibleBy = cD.prototype.isDivisibleBy, cD.prototype.isPrime = function(wD) {
          var pD = jD(this);
          if (pD !== DD) return pD;
          var sD = this.abs(),
            KD = sD.bitLength();
          if (KD <= 64) return dD(sD, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var rD = Math.log(2) * KD.toJSNumber(), LD = Math.ceil(!0 === wD ? 2 * Math.pow(rD, 2) : rD), cD = [], gD = 0; gD < LD; gD++) cD.push(zD(gD + 2));
          return dD(sD, cD)
        }, RD.prototype.isPrime = gD.prototype.isPrime = cD.prototype.isPrime, cD.prototype.isProbablePrime = function(wD, pD) {
          var sD = jD(this);
          if (sD !== DD) return sD;
          for (var KD = this.abs(), rD = wD === DD ? 5 : wD, LD = [], cD = 0; cD < rD; cD++) LD.push(zD.randBetween(2, KD.minus(2), pD));
          return dD(KD, LD)
        }, RD.prototype.isProbablePrime = gD.prototype.isProbablePrime = cD.prototype.isProbablePrime, cD.prototype.modInv = function(DD) {
          for (var wD, pD, sD, KD = zD.zero, rD = zD.one, LD = YD(DD), cD = this.abs(); !cD.isZero();) wD = LD.divide(cD), pD = KD, sD = LD, KD = rD, LD = cD, rD = pD.subtract(wD.multiply(rD)), cD = sD.subtract(wD.multiply(cD));
          if (!LD.isUnit()) throw new Error(this.toString() + " and " + DD.toString() + " are not co-prime");
          return -1 === KD.compare(0) && (KD = KD.add(DD)), this.isNegative() ? KD.ep() : KD
        }, RD.prototype.modInv = gD.prototype.modInv = cD.prototype.modInv, cD.prototype.next = function() {
          var DD = this.value;
          return this.sign ? JD(DD, 1, this.sign) : new cD(MD(DD, 1), this.sign)
        }, gD.prototype.next = function() {
          var DD = this.value;
          return DD + 1 < pD ? new gD(DD + 1) : new cD(sD, !1)
        }, RD.prototype.next = function() {
          return new RD(this.value + BigInt(1))
        }, cD.prototype.prev = function() {
          var DD = this.value;
          return this.sign ? new cD(MD(DD, 1), !0) : JD(DD, 1, this.sign)
        }, gD.prototype.prev = function() {
          var DD = this.value;
          return DD - 1 > -pD ? new gD(DD - 1) : new cD(sD, !0)
        }, RD.prototype.prev = function() {
          return new RD(this.value - BigInt(1))
        };
        for (var SD = [1]; 2 * SD[SD.length - 1] <= wD;) SD.push(2 * SD[SD.length - 1]);
        var iD = SD.length,
          lD = SD[iD - 1];

        function WD(DD) {
          return Math.abs(DD) <= wD
        }

        function ND(DD, wD, pD) {
          wD = YD(wD);
          for (var sD = DD.isNegative(), KD = wD.isNegative(), rD = sD ? DD.not() : DD, LD = KD ? wD.not() : wD, cD = 0, gD = 0, RD = null, AD = null, UD = []; !rD.isZero() || !LD.isZero();) cD = (RD = TD(rD, lD))[1].toJSNumber(), sD && (cD = lD - 1 - cD), gD = (AD = TD(LD, lD))[1].toJSNumber(), KD && (gD = lD - 1 - gD), rD = RD[0], LD = AD[0], UD.push(pD(cD, gD));
          for (var fD = 0 !== pD(sD ? 1 : 0, KD ? 1 : 0) ? zD(-1) : zD(0), ID = UD.length - 1; ID >= 0; ID -= 1) fD = fD.multiply(lD).add(zD(UD[ID]));
          return fD
        }
        cD.prototype.shiftLeft = function(DD) {
          var zD = YD(DD).toJSNumber();
          if (!WD(zD)) throw new Error(String(zD) + " is too large for shifting.");
          if (zD < 0) return this.shiftRight(-zD);
          var wD = this;
          if (wD.isZero()) return wD;
          for (; zD >= iD;) wD = wD.multiply(lD), zD -= iD - 1;
          return wD.multiply(SD[zD])
        }, RD.prototype.shiftLeft = gD.prototype.shiftLeft = cD.prototype.shiftLeft, cD.prototype.shiftRight = function(DD) {
          var zD, wD = YD(DD).toJSNumber();
          if (!WD(wD)) throw new Error(String(wD) + " is too large for shifting.");
          if (wD < 0) return this.shiftLeft(-wD);
          for (var pD = this; wD >= iD;) {
            if (pD.isZero() || pD.isNegative() && pD.isUnit()) return pD;
            pD = (zD = TD(pD, lD))[1].isNegative() ? zD[0].prev() : zD[0], wD -= iD - 1
          }
          return (zD = TD(pD, SD[wD]))[1].isNegative() ? zD[0].prev() : zD[0]
        }, RD.prototype.shiftRight = gD.prototype.shiftRight = cD.prototype.shiftRight, cD.prototype.not = function() {
          return this.ep().prev()
        }, RD.prototype.not = gD.prototype.not = cD.prototype.not, cD.prototype.and = function(DD) {
          return ND(this, DD, (function(DD, zD) {
            return DD & zD
          }))
        }, RD.prototype.and = gD.prototype.and = cD.prototype.and, cD.prototype.or = function(DD) {
          return ND(this, DD, (function(DD, zD) {
            return DD | zD
          }))
        }, RD.prototype.or = gD.prototype.or = cD.prototype.or, cD.prototype.xor = function(DD) {
          return ND(this, DD, (function(DD, zD) {
            return DD ^ zD
          }))
        }, RD.prototype.xor = gD.prototype.xor = cD.prototype.xor;
        var ZD = 1 << 30;

        function yD(DD) {
          var zD = DD.value,
            pD = "number" === typeof zD ? zD | ZD : "bigint" === typeof zD ? zD | BigInt(ZD) : zD[0] + zD[1] * wD | 1073758208;
          return pD & -pD
        }

        function kD(DD, wD) {
          if (wD.compareTo(DD) <= 0) {
            var pD = kD(DD, wD.square(wD)),
              sD = pD.p,
              KD = pD.e,
              rD = sD.multiply(wD);
            return rD.compareTo(DD) <= 0 ? {
              p: rD,
              e: 2 * KD + 1
            } : {
              p: sD,
              e: 2 * KD
            }
          }
          return {
            p: zD(1),
            e: 0
          }
        }

        function mD(DD, zD) {
          return DD = YD(DD), zD = YD(zD), DD.greater(zD) ? DD : zD
        }

        function eD(DD, zD) {
          return DD = YD(DD), zD = YD(zD), DD.lesser(zD) ? DD : zD
        }

        function oD(DD, zD) {
          if (DD = YD(DD).abs(), zD = YD(zD).abs(), DD.equals(zD)) return DD;
          if (DD.isZero()) return zD;
          if (zD.isZero()) return DD;
          for (var wD, pD, sD = LD[1]; DD.isEven() && zD.isEven();) wD = eD(yD(DD), yD(zD)), DD = DD.divide(wD), zD = zD.divide(wD), sD = sD.multiply(wD);
          for (; DD.isEven();) DD = DD.divide(yD(DD));
          do {
            for (; zD.isEven();) zD = zD.divide(yD(zD));
            DD.greater(zD) && (pD = zD, zD = DD, DD = pD), zD = zD.subtract(DD)
          } while (!zD.isZero());
          return sD.isUnit() ? DD : DD.multiply(sD)
        }
        cD.prototype.bitLength = function() {
          var DD = this;
          return DD.compareTo(zD(0)) < 0 && (DD = DD.ep().subtract(zD(1))), 0 === DD.compareTo(zD(0)) ? zD(0) : zD(kD(DD, zD(2)).e).add(zD(1))
        }, RD.prototype.bitLength = gD.prototype.bitLength = cD.prototype.bitLength;
        var aD = function(DD, zD, wD, pD) {
          wD = wD || KD, DD = String(DD), pD || (DD = DD.toLowerCase(), wD = wD.toLowerCase());
          var sD, rD = DD.length,
            LD = Math.abs(zD),
            cD = {};
          for (sD = 0; sD < wD.length; sD++) cD[wD[sD]] = sD;
          for (sD = 0; sD < rD; sD++) {
            if ("-" !== (AD = DD[sD]) && (AD in cD && cD[AD] >= LD)) {
              if ("1" === AD && 1 === LD) continue;
              throw new Error(AD + " is not a valid digit in base " + zD + ".")
            }
          }
          zD = YD(zD);
          var gD = [],
            RD = "-" === DD[0];
          for (sD = RD ? 1 : 0; sD < DD.length; sD++) {
            var AD;
            if ((AD = DD[sD]) in cD) gD.push(YD(cD[AD]));
            else {
              if ("<" !== AD) throw new Error(AD + " is not a valid character");
              var UD = sD;
              do {
                sD++
              } while (">" !== DD[sD] && sD < DD.length);
              gD.push(YD(DD.slice(UD + 1, sD)))
            }
          }
          return uD(gD, zD, RD)
        };

        function uD(DD, zD, wD) {
          var pD, sD = LD[0],
            KD = LD[1];
          for (pD = DD.length - 1; pD >= 0; pD--) sD = sD.add(DD[pD].times(KD)), KD = KD.times(zD);
          return wD ? sD.ep() : sD
        }

        function vD(DD, wD) {
          if ((wD = zD(wD)).isZero()) {
            if (DD.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (wD.equals(-1)) {
            if (DD.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (DD.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-DD.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var pD = Array.apply(null, Array(DD.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return pD.unshift([1]), {
              value: [].concat.apply([], pD),
              isNegative: !1
            }
          }
          var sD = !1;
          if (DD.isNegative() && wD.isPositive() && (sD = !0, DD = DD.abs()), wD.isUnit()) return DD.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(DD.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: sD
          };
          for (var KD, rD = [], LD = DD; LD.isNegative() || LD.compareAbs(wD) >= 0;) {
            KD = LD.divmod(wD), LD = KD.quotient;
            var cD = KD.remainder;
            cD.isNegative() && (cD = wD.minus(cD).abs(), LD = LD.next()), rD.push(cD.toJSNumber())
          }
          return rD.push(LD.toJSNumber()), {
            value: rD.reverse(),
            isNegative: sD
          }
        }

        function tD(DD, zD, wD) {
          var pD = vD(DD, zD);
          return (pD.isNegative ? "-" : "") + pD.value.map((function(DD) {
            return function(DD, zD) {
              return DD < (zD = zD || KD).length ? zD[DD] : "<" + DD + ">"
            }(DD, wD)
          })).join("")
        }

        function FD(DD) {
          if (AD(+DD)) {
            var zD = +DD;
            if (zD === GD(zD)) return rD ? new RD(BigInt(zD)) : new gD(zD);
            throw new Error("Invalid integer: " + DD)
          }
          var wD = "-" === DD[0];
          wD && (DD = DD.slice(1));
          var pD = DD.split(/e/i);
          if (pD.length > 2) throw new Error("Invalid integer: " + pD.join("e"));
          if (2 === pD.length) {
            var sD = pD[1];
            if ("+" === sD[0] && (sD = sD.slice(1)), (sD = +sD) !== GD(sD) || !AD(sD)) throw new Error("Invalid integer: " + sD + " is not a valid exponent.");
            var KD = pD[0],
              LD = KD.indexOf(".");
            if (LD >= 0 && (sD -= KD.length - LD - 1, KD = KD.slice(0, LD) + KD.slice(LD + 1)), sD < 0) throw new Error("Cannot include negative exponent part for integers");
            DD = KD += new Array(sD + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(DD)) throw new Error("Invalid integer: " + DD);
          if (rD) return new RD(BigInt(wD ? "-" + DD : DD));
          for (var UD = [], fD = DD.length, BD = fD - 7; fD > 0;) UD.push(+DD.slice(BD, fD)), (BD -= 7) < 0 && (BD = 0), fD -= 7;
          return ID(UD), new cD(UD, wD)
        }

        function YD(DD) {
          return "number" === typeof DD ? function(DD) {
            if (rD) return new RD(BigInt(DD));
            if (AD(DD)) {
              if (DD !== GD(DD)) throw new Error(DD + " is not an integer.");
              return new gD(DD)
            }
            return FD(DD.toString())
          }(DD) : "string" === typeof DD ? FD(DD) : "bigint" === typeof DD ? new RD(DD) : DD
        }
        cD.prototype.toArray = function(DD) {
          return vD(this, DD)
        }, gD.prototype.toArray = function(DD) {
          return vD(this, DD)
        }, RD.prototype.toArray = function(DD) {
          return vD(this, DD)
        }, cD.prototype.toString = function(zD, wD) {
          if (zD === DD && (zD = 10), 10 !== zD) return tD(this, zD, wD);
          for (var pD, sD = this.value, KD = sD.length, rD = String(sD[--KD]); --KD >= 0;) pD = String(sD[KD]), rD += "0000000".slice(pD.length) + pD;
          return (this.sign ? "-" : "") + rD
        }, gD.prototype.toString = function(zD, wD) {
          return zD === DD && (zD = 10), 10 != zD ? tD(this, zD, wD) : String(this.value)
        }, RD.prototype.toString = gD.prototype.toString, RD.prototype.toJSON = cD.prototype.toJSON = gD.prototype.toJSON = function() {
          return this.toString()
        }, cD.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, cD.prototype.toJSNumber = cD.prototype.valueOf, gD.prototype.valueOf = function() {
          return this.value
        }, gD.prototype.toJSNumber = gD.prototype.valueOf, RD.prototype.valueOf = RD.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var HD = 0; HD < 1e3; HD++) LD[HD] = YD(HD), HD > 0 && (LD[-HD] = YD(-HD));
        return LD.one = LD[1], LD.zero = LD[0], LD.minusOne = LD[-1], LD.max = mD, LD.min = eD, LD.gcd = oD, LD.lcm = function(DD, zD) {
          return DD = YD(DD).abs(), zD = YD(zD).abs(), DD.divide(oD(DD, zD)).multiply(zD)
        }, LD.isInstance = function(DD) {
          return DD instanceof cD || DD instanceof gD || DD instanceof RD
        }, LD.randBetween = function(DD, zD, pD) {
          DD = YD(DD), zD = YD(zD);
          var sD = pD || Math.random,
            KD = eD(DD, zD),
            rD = mD(DD, zD).subtract(KD).add(1);
          if (rD.isSmall) return KD.add(Math.floor(sD() * rD));
          for (var cD = vD(rD, wD).value, gD = [], RD = !0, AD = 0; AD < cD.length; AD++) {
            var UD = RD ? cD[AD] : wD,
              fD = GD(sD() * UD);
            gD.push(fD), fD < UD && (RD = !1)
          }
          return KD.add(LD.cwD(gD, wD, !1))
        }, LD.cwD = function(DD, zD, wD) {
          return uD(DD.map(YD), YD(zD || 10), wD)
        }, LD
      }();
      DD.hasOwnProperty("exports") && (DD.exports = zD)
    }(Mw);
    var Ow = KD(Mw.exports);

    function Jw(DD, zD, wD) {
      let pD = 0;
      for (let sD = 0; sD < wD; sD++) {
        const wD = DD[zD + sD];
        if (void 0 === wD) break;
        pD += wD * 16 ** sD
      }
      return pD
    }

    function Ew(DD) {
      const zD = [];
      for (let wD = 0; wD < DD.length; wD++) {
        let pD = Number(DD[wD]);
        for (let DD = 0; pD || DD < zD.length; DD++) pD += 10 * (zD[DD] || 0), zD[DD] = pD % 16, pD = (pD - zD[DD]) / 16
      }
      return zD
    }
    class Qw {
      static fromString(DD) {
        return new Qw(function(DD) {
          const zD = Ew(DD),
            wD = Array(4);
          for (let pD = 0; pD < 4; pD++) wD[3 - pD] = Jw(zD, 4 * pD, 4);
          return wD
        }(DD), DD)
      }
      static fromBit(DD) {
        const zD = Array(4),
          wD = Math.floor(DD / 16);
        for (let pD = 0; pD < 4; pD++) zD[3 - pD] = pD === wD ? 1 << DD - 16 * wD : 0;
        return new Qw(zD)
      }
      constructor(DD, zD) {
        this.parts = DD, this.str = zD
      }
      and(DD) {
        let {
          parts: zD
        } = DD;
        return new Qw(this.parts.map(((DD, wD) => DD & zD[wD])))
      }
      or(DD) {
        let {
          parts: zD
        } = DD;
        return new Qw(this.parts.map(((DD, wD) => DD | zD[wD])))
      }
      xor(DD) {
        let {
          parts: zD
        } = DD;
        return new Qw(this.parts.map(((DD, wD) => DD ^ zD[wD])))
      }
      not() {
        return new Qw(this.parts.map((DD => ~DD)))
      }
      equals(DD) {
        let {
          parts: zD
        } = DD;
        return this.parts.every(((DD, wD) => DD === zD[wD]))
      }
      toString() {
        if (null != this.str) return this.str;
        const DD = new Array(16);
        return this.parts.forEach(((zD, wD) => {
          const pD = Ew(zD.toString());
          for (let sD = 0; sD < 4; sD++) DD[sD + 4 * wD] = pD[3 - sD] || 0
        })), this.str = Ow.cwD(DD, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const Xw = function() {
      try {
        return BigInt, !0
      } catch (DD) {
        return !1
      }
    }();
    Xw && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const Vw = {},
      Pw = Xw ? function(DD) {
        return BigInt(DD)
      } : function(DD) {
        return DD instanceof Qw ? DD : ("number" === typeof DD && (DD = DD.toString()), null != Vw[DD] || (Vw[DD] = Qw.fromString(DD)), Vw[DD])
      },
      Cw = Pw(0),
      xw = Xw ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cw) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cw)
      } : function() {
        let DD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cw;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cw).and(DD)
      },
      Tw = Xw ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cw) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cw)
      } : function() {
        let DD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cw;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cw).or(DD)
      },
      bw = Xw ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cw) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cw)
      } : function() {
        let DD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Cw;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cw).xor(DD)
      },
      jw = Xw ? function(DD, zD) {
        return DD === zD
      } : function(DD, zD) {
        return null == DD || null == zD ? DD == zD : DD.equals(zD)
      };
    var dw, Sw, iw, lw, Ww = {
      combine: function() {
        let DD = arguments.length <= 0 ? void 0 : arguments[0];
        for (let zD = 1; zD < arguments.length; zD++) DD = Tw(DD, zD < 0 || arguments.length <= zD ? void 0 : arguments[zD]);
        return DD
      },
      add: function(DD, zD) {
        return zD === Cw ? DD : Tw(DD, zD)
      },
      remove: function(DD, zD) {
        return zD === Cw ? DD : bw(DD, xw(DD, zD))
      },
      filter: xw,
      invert: Xw ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cw)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Cw).not()
      },
      has: function(DD, zD) {
        return jw(xw(DD, zD), zD)
      },
      hasAny: function(DD, zD) {
        return !jw(xw(DD, zD), Cw)
      },
      equals: jw,
      deserialize: Pw,
      getFlag: Xw ? function(DD) {
        return BigInt(1) << BigInt(DD)
      } : function(DD) {
        return Qw.fromBit(DD)
      }
    };
    ! function(DD) {
      DD[DD.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", DD[DD.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", DD[DD.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", DD[DD.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", DD[DD.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", DD[DD.RATELIMITED = 4002] = "RATELIMITED", DD[DD.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", DD[DD.INVALID_VERSION = 4004] = "INVALID_VERSION", DD[DD.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(dw || (dw = {})),
    function(DD) {
      DD[DD.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", DD[DD.INVALID_COMMAND = 4002] = "INVALID_COMMAND", DD[DD.INVALID_EVENT = 4004] = "INVALID_EVENT", DD[DD.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(Sw || (Sw = {})),
    function(DD) {
      DD.LANDSCAPE = "landscape", DD.PORTRAIT = "portrait"
    }(iw || (iw = {})),
    function(DD) {
      DD.MOBILE = "mobile", DD.DESKTOP = "desktop"
    }(lw || (lw = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: Ww.getFlag(0),
      ADMINISTRATOR: Ww.getFlag(3)
    });

    function Nw(DD) {
      return Iw((zD => {
        var wD;
        const [pD] = null !== (wD = Object.entries(DD).find((DD => {
          let [, wD] = DD;
          return wD === zD
        }))) && void 0 !== wD ? wD : [];
        return null != zD && void 0 === pD ? DD.UNHANDLED : zD
      }), Sz().or(iz()))
    }
    const Zw = nw.object({
        image_url: nw.string()
      }),
      yw = nw.object({
        mediaUrl: nw.string().max(1024)
      }),
      kw = nw.object({
        access_token: nw.union([nw.string(), nw.null()]).optional()
      }),
      mw = nw.object({
        access_token: nw.string(),
        user: nw.object({
          username: nw.string(),
          discriminator: nw.string(),
          id: nw.string(),
          avatar: nw.union([nw.string(), nw.null()]).optional(),
          public_flags: nw.number(),
          global_name: nw.union([nw.string(), nw.null()]).optional()
        }),
        scopes: nw.array(function(DD) {
          const zD = bz().transform((zD => {
            const wD = DD.safeParse(zD);
            return wD.success ? wD.data : DD._def.defaultValue()
          }));
          return zD.overlayType = DD, zD
        }(nw.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(nw.literal(-1)).default(-1))),
        expires: nw.string(),
        application: nw.object({
          description: nw.string(),
          icon: nw.union([nw.string(), nw.null()]).optional(),
          id: nw.string(),
          rpc_origins: nw.array(nw.string()).optional(),
          name: nw.string()
        })
      }),
      ew = nw.object({
        participants: nw.array(nw.object({
          id: nw.string(),
          username: nw.string(),
          global_name: nw.union([nw.string(), nw.null()]).optional(),
          discriminator: nw.string(),
          avatar: nw.union([nw.string(), nw.null()]).optional(),
          flags: nw.number(),
          bot: nw.boolean(),
          avatar_decoration_data: nw.union([nw.object({
            asset: nw.string(),
            skuId: nw.string().optional()
          }), nw.null()]).optional(),
          premium_type: nw.union([nw.number(), nw.null()]).optional(),
          nickname: nw.string().optional()
        }))
      });
    var ow;
    ! function(DD) {
      DD.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", DD.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", DD.AUTHENTICATE = "AUTHENTICATE", DD.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(ow || (ow = {}));
    const aw = nw.object({}).optional().nullable(),
      uw = nw.void(),
      vw = {
        [ow.INITIATE_IMAGE_UPLOAD]: {
          request: uw,
          response: Zw
        },
        [ow.OPEN_SHARE_MOMENT_DIALOG]: {
          request: yw,
          response: aw
        },
        [ow.AUTHENTICATE]: {
          request: kw,
          response: mw
        },
        [ow.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: uw,
          response: ew
        }
      },
      tw = "DISPATCH";
    var Fw;
    ! function(DD) {
      DD.AUTHORIZE = "AUTHORIZE", DD.AUTHENTICATE = "AUTHENTICATE", DD.GET_GUILDS = "GET_GUILDS", DD.GET_GUILD = "GET_GUILD", DD.GET_CHANNEL = "GET_CHANNEL", DD.GET_CHANNELS = "GET_CHANNELS", DD.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", DD.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", DD.SUBSCRIBE = "SUBSCRIBE", DD.UNSUBSCRIBE = "UNSUBSCRIBE", DD.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", DD.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", DD.SET_ACTIVITY = "SET_ACTIVITY", DD.GET_SKUS = "GET_SKUS", DD.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", DD.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", DD.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", DD.START_PURCHASE = "START_PURCHASE", DD.SET_CONFIG = "SET_CONFIG", DD.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", DD.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", DD.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", DD.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", DD.CAPTURE_LOG = "CAPTURE_LOG", DD.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", DD.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", DD.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", DD.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", DD.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", DD.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", DD.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Fw || (Fw = {}));
    const Yw = tz({
        cmd: Sz(),
        data: oz(),
        evt: mz(),
        nonce: Sz()
      }).passthrough(),
      Hw = (Nw(Object.assign(Object.assign({}, mw.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), tz({
        id: Sz(),
        username: Sz(),
        discriminator: Sz(),
        global_name: Sz().optional().nullable(),
        avatar: Sz().optional().nullable(),
        avatar_decoration_data: tz({
          asset: Sz(),
          sku_id: Sz().optional()
        }).nullable(),
        bot: Nz(),
        flags: iz().optional().nullable(),
        premium_type: iz().optional().nullable()
      })),
      qw = tz({
        user: Hw,
        nick: Sz().optional().nullable(),
        roles: vz(Sz()),
        joined_at: Sz(),
        deaf: Nz(),
        mute: Nz()
      }),
      Dp = tz({
        id: Sz(),
        name: Sz().optional().nullable(),
        roles: vz(Sz()).optional().nullable(),
        user: Hw.optional().nullable(),
        require_colons: Nz().optional().nullable(),
        managed: Nz().optional().nullable(),
        animated: Nz().optional().nullable(),
        available: Nz().optional().nullable()
      }),
      zp = tz({
        mute: Nz(),
        deaf: Nz(),
        self_mute: Nz(),
        self_deaf: Nz(),
        suppress: Nz()
      }),
      wp = tz({
        mute: Nz(),
        nick: Sz(),
        user: Hw,
        voice_state: zp,
        volume: iz()
      }),
      pp = Nw({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      sp = tz({
        name: Sz(),
        type: iz(),
        url: Sz().optional().nullable(),
        created_at: iz().optional().nullable(),
        timestamps: tz({
          start: iz(),
          end: iz()
        }).partial().optional().nullable(),
        application_id: Sz().optional().nullable(),
        details: Sz().optional().nullable(),
        state: Sz().optional().nullable(),
        emoji: Dp.optional().nullable(),
        party: tz({
          id: Sz().optional().nullable(),
          size: vz(iz()).optional().nullable()
        }).optional().nullable(),
        assets: tz({
          large_image: Sz().nullable(),
          large_text: Sz().nullable(),
          small_image: Sz().nullable(),
          small_text: Sz().nullable()
        }).partial().optional().nullable(),
        secrets: tz({
          join: Sz(),
          match: Sz()
        }).partial().optional().nullable(),
        instance: Nz().optional().nullable(),
        flags: iz().optional().nullable()
      }),
      Kp = tz({
        id: Sz(),
        type: Nw({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: Sz(),
        deny: Sz()
      }),
      rp = {
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
      Lp = tz({
        id: Sz(),
        type: Nw(rp),
        guild_id: Sz().optional().nullable(),
        position: iz().optional().nullable(),
        permission_overwrites: vz(Kp).optional().nullable(),
        name: Sz().optional().nullable(),
        topic: Sz().optional().nullable(),
        nsfw: Nz().optional().nullable(),
        last_message_id: Sz().optional().nullable(),
        bitrate: iz().optional().nullable(),
        user_limit: iz().optional().nullable(),
        rate_limit_per_user: iz().optional().nullable(),
        recipients: vz(Hw).optional().nullable(),
        icon: Sz().optional().nullable(),
        owner_id: Sz().optional().nullable(),
        application_id: Sz().optional().nullable(),
        parent_id: Sz().optional().nullable(),
        last_pin_timestamp: Sz().optional().nullable()
      }),
      cp = tz({
        user: Hw,
        guild_id: Sz(),
        status: pp,
        activities: vz(sp),
        client_status: tz({
          desktop: pp,
          mobile: pp,
          web: pp
        }).partial()
      }),
      gp = tz({
        id: Sz(),
        name: Sz(),
        color: iz(),
        hoist: Nz(),
        position: iz(),
        permissions: Sz(),
        managed: Nz(),
        mentionable: Nz()
      }),
      Rp = (tz({
        id: Sz(),
        name: Sz(),
        owner_id: Sz(),
        icon: Sz().nullable(),
        icon_hash: Sz().optional().nullable(),
        splash: Sz().nullable(),
        discovery_splash: Sz().nullable(),
        owner: Nz().optional().nullable(),
        permissions: Sz().optional().nullable(),
        region: Sz(),
        afk_channel_id: Sz().nullable(),
        afk_timeout: iz(),
        widget_enabled: Nz().optional().nullable(),
        widget_channel_id: Sz().optional().nullable(),
        verification_level: iz(),
        default_message_notifications: iz(),
        explicit_content_filter: iz(),
        roles: vz(gp),
        emojis: vz(Dp),
        features: vz(Sz()),
        mfa_level: iz(),
        application_id: Sz().nullable(),
        system_channel_id: Sz().nullable(),
        system_channel_flags: iz(),
        rules_channel_id: Sz().nullable(),
        joined_at: Sz().optional().nullable(),
        large: Nz().optional().nullable(),
        unavailable: Nz().optional().nullable(),
        member_count: iz().optional().nullable(),
        voice_states: vz(zp).optional().nullable(),
        members: vz(qw).optional().nullable(),
        channels: vz(Lp).optional().nullable(),
        presences: vz(cp).optional().nullable(),
        max_presences: iz().optional().nullable(),
        max_members: iz().optional().nullable(),
        vanity_url_code: Sz().nullable(),
        description: Sz().nullable(),
        banner: Sz().nullable(),
        premium_tier: iz(),
        premium_subscription_count: iz().optional().nullable(),
        preferred_locale: Sz(),
        public_updates_channel_id: Sz().nullable(),
        max_video_channel_users: iz().optional().nullable(),
        approximate_member_count: iz().optional().nullable(),
        approximate_presence_count: iz().optional().nullable()
      }), tz({
        id: Sz(),
        guild_id: Sz(),
        type: iz(),
        name: Sz()
      })),
      Ap = tz({
        id: Sz(),
        filename: Sz(),
        size: iz(),
        url: Sz(),
        proxy_url: Sz(),
        height: iz().optional().nullable(),
        width: iz().optional().nullable()
      }),
      Up = tz({
        text: Sz(),
        icon_url: Sz().optional().nullable(),
        proxy_icon_url: Sz().optional().nullable()
      }),
      fp = tz({
        url: Sz().optional().nullable(),
        proxy_url: Sz().optional().nullable(),
        height: iz().optional().nullable(),
        width: iz().optional().nullable()
      }),
      Ip = fp.omit({
        proxy_url: !0
      }),
      Bp = tz({
        name: Sz().optional().nullable(),
        url: Sz().optional().nullable()
      }),
      Gp = tz({
        name: Sz().optional().nullable(),
        url: Sz().optional().nullable(),
        icon_url: Sz().optional().nullable(),
        proxy_icon_url: Sz().optional().nullable()
      }),
      hp = tz({
        name: Sz(),
        value: Sz(),
        inline: Nz()
      }),
      np = tz({
        title: Sz().optional().nullable(),
        type: Sz().optional().nullable(),
        description: Sz().optional().nullable(),
        url: Sz().optional().nullable(),
        timestamp: Sz().optional().nullable(),
        color: iz().optional().nullable(),
        footer: Up.optional().nullable(),
        image: fp.optional().nullable(),
        thumbnail: fp.optional().nullable(),
        video: Ip.optional().nullable(),
        provider: Bp.optional().nullable(),
        author: Gp.optional().nullable(),
        fields: vz(hp).optional().nullable()
      }),
      Mp = tz({
        count: iz(),
        me: Nz(),
        emoji: Dp
      }),
      Op = tz({
        type: iz(),
        party_id: Sz().optional().nullable()
      }),
      Jp = tz({
        id: Sz(),
        cover_image: Sz().optional().nullable(),
        description: Sz(),
        icon: Sz().optional().nullable(),
        name: Sz()
      }),
      Ep = tz({
        message_id: Sz().optional().nullable(),
        channel_id: Sz().optional().nullable(),
        guild_id: Sz().optional().nullable()
      }),
      Qp = tz({
        id: Sz(),
        channel_id: Sz(),
        guild_id: Sz().optional().nullable(),
        author: Hw.optional().nullable(),
        member: qw.optional().nullable(),
        content: Sz(),
        timestamp: Sz(),
        edited_timestamp: Sz().optional().nullable(),
        tts: Nz(),
        mention_everyone: Nz(),
        mentions: vz(Hw),
        mention_roles: vz(Sz()),
        mention_channels: vz(Rp),
        attachments: vz(Ap),
        embeds: vz(np),
        reactions: vz(Mp).optional().nullable(),
        nonce: Yz([Sz(), iz()]).optional().nullable(),
        pinned: Nz(),
        webhook_id: Sz().optional().nullable(),
        type: iz(),
        activity: Op.optional().nullable(),
        application: Jp.optional().nullable(),
        message_reference: Ep.optional().nullable(),
        flags: iz().optional().nullable(),
        stickers: vz(oz()).optional().nullable(),
        referenced_message: oz().optional().nullable()
      }),
      Xp = tz({
        id: Sz(),
        name: Sz()
      }),
      Vp = tz({
        type: Nw({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: iz(),
        name: Sz()
      }),
      Pp = tz({
        type: Nw({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: Nz(),
        threshold: iz(),
        shortcut: vz(Vp),
        delay: iz()
      }),
      Cp = tz({
        device_id: Sz(),
        volume: iz(),
        available_devices: vz(Xp)
      }),
      xp = (tz({
        type: Nw({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: Sz(),
        vendor: tz({
          name: Sz(),
          url: Sz()
        }),
        model: tz({
          name: Sz(),
          url: Sz()
        }),
        related: vz(Sz()),
        echo_cancellation: Nz().optional().nullable(),
        noise_suppression: Nz().optional().nullable(),
        automatic_gain_control: Nz().optional().nullable(),
        hardware_mute: Nz().optional().nullable()
      }), tz({
        id: Sz(),
        name: Sz(),
        type: Nw({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: tz({
          amount: iz(),
          currency: Sz()
        }),
        application_id: Sz(),
        flags: iz(),
        release_date: Sz().nullable()
      })),
      Tp = tz({
        id: Sz(),
        sku_id: Sz(),
        application_id: Sz(),
        user_id: Sz(),
        gift_code_flags: iz(),
        type: Nw({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: Sz().optional().nullable(),
        branches: vz(Sz()).optional().nullable(),
        starts_at: Sz().optional().nullable(),
        ends_at: Sz().optional().nullable(),
        parent_id: Sz().optional().nullable(),
        consumed: Nz().optional().nullable(),
        deleted: Nz().optional().nullable(),
        gift_code_batch_id: Sz().optional().nullable()
      }),
      bp = (Nw({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), Nw({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      jp = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      dp = (Nw(jp), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      Sp = (Nw(dp), "ERROR");
    var ip;
    ! function(DD) {
      DD.READY = "READY", DD.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", DD.SPEAKING_START = "SPEAKING_START", DD.SPEAKING_STOP = "SPEAKING_STOP", DD.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", DD.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", DD.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", DD.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", DD.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", DD.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(ip || (ip = {}));
    const lp = Yw.extend({
        evt: gw(ip),
        nonce: Sz().nullable(),
        cmd: rw(tw),
        data: tz({}).passthrough()
      }),
      Wp = Yw.extend({
        evt: rw(Sp),
        data: tz({
          code: iz(),
          message: Sz().optional()
        }).passthrough(),
        cmd: gw(Fw),
        nonce: Sz().nullable()
      }),
      Np = lp.extend({
        evt: Sz()
      }),
      Zp = Yz([lp, Np, Wp]);
    const yp = {
      [ip.READY]: {
        payload: lp.extend({
          evt: rw(ip.READY),
          data: tz({
            v: iz(),
            config: tz({
              cdn_host: Sz().optional(),
              api_endpoint: Sz(),
              environment: Sz()
            }),
            user: tz({
              id: Sz(),
              username: Sz(),
              discriminator: Sz(),
              avatar: Sz().optional()
            }).optional()
          })
        })
      },
      [ip.VOICE_STATE_UPDATE]: {
        payload: lp.extend({
          evt: rw(ip.VOICE_STATE_UPDATE),
          data: wp
        }),
        subscribeArgs: tz({
          channel_id: Sz()
        })
      },
      [ip.SPEAKING_START]: {
        payload: lp.extend({
          evt: rw(ip.SPEAKING_START),
          data: tz({
            lobby_id: Sz().optional(),
            channel_id: Sz().optional(),
            user_id: Sz()
          })
        }),
        subscribeArgs: tz({
          lobby_id: Sz().nullable().optional(),
          channel_id: Sz().nullable().optional()
        })
      },
      [ip.SPEAKING_STOP]: {
        payload: lp.extend({
          evt: rw(ip.SPEAKING_STOP),
          data: tz({
            lobby_id: Sz().optional(),
            channel_id: Sz().optional(),
            user_id: Sz()
          })
        }),
        subscribeArgs: tz({
          lobby_id: Sz().nullable().optional(),
          channel_id: Sz().nullable().optional()
        })
      },
      [ip.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: lp.extend({
          evt: rw(ip.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: tz({
            layout_mode: Nw(dp)
          })
        })
      },
      [ip.ORIENTATION_UPDATE]: {
        payload: lp.extend({
          evt: rw(ip.ORIENTATION_UPDATE),
          data: tz({
            screen_orientation: Nw(jp),
            orientation: gw(iw)
          })
        })
      },
      [ip.CURRENT_USER_UPDATE]: {
        payload: lp.extend({
          evt: rw(ip.CURRENT_USER_UPDATE),
          data: Hw
        })
      },
      [ip.ENTITLEMENT_CREATE]: {
        payload: lp.extend({
          evt: rw(ip.ENTITLEMENT_CREATE),
          data: tz({
            entitlement: Tp
          })
        })
      },
      [ip.THERMAL_STATE_UPDATE]: {
        payload: lp.extend({
          evt: rw(ip.THERMAL_STATE_UPDATE),
          data: tz({
            thermal_state: bp
          })
        })
      },
      [ip.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: lp.extend({
          evt: rw(ip.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: tz({
            participants: ew.shape.participants
          })
        })
      }
    };
    const kp = tz({}).nullable(),
      mp = tz({
        code: Sz()
      }),
      ep = tz({
        guilds: vz(tz({
          id: Sz(),
          name: Sz()
        }))
      }),
      op = tz({
        id: Sz(),
        name: Sz(),
        icon_url: Sz().optional(),
        members: vz(qw)
      }),
      ap = tz({
        id: Sz(),
        type: Nw(rp),
        guild_id: Sz().optional().nullable(),
        name: Sz().optional().nullable(),
        topic: Sz().optional().nullable(),
        bitrate: iz().optional().nullable(),
        user_limit: iz().optional().nullable(),
        position: iz().optional().nullable(),
        voice_states: vz(wp),
        messages: vz(Qp)
      }),
      vp = tz({
        channels: vz(Lp)
      }),
      tp = (ap.nullable(), ap.nullable()),
      Fp = ap.nullable(),
      Yp = (tz({
        input: Cp,
        output: Cp,
        mode: Pp,
        automatic_gain_control: Nz(),
        echo_cancellation: Nz(),
        noise_suppression: Nz(),
        qos: Nz(),
        silence_warning: Nz(),
        deaf: Nz(),
        mute: Nz()
      }), tz({
        evt: Sz()
      })),
      Hp = tz({
        shortcut: Vp
      }),
      qp = sp,
      Ds = tz({
        skus: vz(xp)
      }),
      zs = tz({
        entitlements: vz(Tp)
      }),
      ws = vz(Tp).nullable(),
      ps = tz({
        use_interactive_pip: Nz()
      }),
      ss = tz({
        locale: Sz()
      }),
      Ks = tz({
        enabled: Nz()
      }),
      rs = tz({
        permissions: Wz().or(Sz())
      }),
      Ls = tz({
        iosKeyboardResizesView: Uw(Nz())
      }),
      cs = Yw.extend({
        cmd: gw(Fw),
        evt: mz()
      });

    function gs(DD) {
      let {
        cmd: zD,
        data: wD
      } = DD;
      switch (zD) {
        case Fw.AUTHORIZE:
          return mp.parse(wD);
        case Fw.CAPTURE_SHORTCUT:
          return Hp.parse(wD);
        case Fw.ENCOURAGE_HW_ACCELERATION:
          return Ks.parse(wD);
        case Fw.GET_CHANNEL:
          return ap.parse(wD);
        case Fw.GET_CHANNELS:
          return vp.parse(wD);
        case Fw.GET_CHANNEL_PERMISSIONS:
          return rs.parse(wD);
        case Fw.GET_GUILD:
          return op.parse(wD);
        case Fw.GET_GUILDS:
          return ep.parse(wD);
        case Fw.GET_PLATFORM_BEHAVIORS:
          return Ls.parse(wD);
        case Fw.GET_CHANNEL:
          return ap.parse(wD);
        case Fw.SELECT_TEXT_CHANNEL:
          return Fp.parse(wD);
        case Fw.SELECT_VOICE_CHANNEL:
          return tp.parse(wD);
        case Fw.SET_ACTIVITY:
          return qp.parse(wD);
        case Fw.GET_SKUS_EMBEDDED:
          return Ds.parse(wD);
        case Fw.GET_ENTITLEMENTS_EMBEDDED:
          return zs.parse(wD);
        case Fw.SET_CONFIG:
          return ps.parse(wD);
        case Fw.START_PURCHASE:
          return ws.parse(wD);
        case Fw.SUBSCRIBE:
        case Fw.UNSUBSCRIBE:
          return Yp.parse(wD);
        case Fw.USER_SETTINGS_GET_LOCALE:
          return ss.parse(wD);
        case Fw.OPEN_EXTERNAL_LINK:
        case Fw.SET_ORIENTATION_LOCK_STATE:
        case Fw.SET_CERTIFIED_DEVICES:
        case Fw.SEND_ANALYTICS_EVENT:
        case Fw.OPEN_INVITE_DIALOG:
        case Fw.CAPTURE_LOG:
        case Fw.GET_SKUS:
        case Fw.GET_ENTITLEMENTS:
          return kp.parse(wD);
        case Fw.AUTHENTICATE:
        case Fw.INITIATE_IMAGE_UPLOAD:
        case Fw.OPEN_SHARE_MOMENT_DIALOG:
        case Fw.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: DD
          } = vw[zD];
          return DD.parse(wD);
        default:
          ! function(DD, zD) {
            throw zD
          }(0, new Error(`Unrecognized command ${zD}`))
      }
    }
    tz({
      frame_id: Sz(),
      platform: gw(lw).optional().nullable()
    }), tz({
      v: rw(1),
      encoding: rw("json").optional(),
      client_id: Sz(),
      frame_id: Sz()
    });
    const Rs = tz({
        code: iz(),
        message: Sz().optional()
      }),
      As = tz({
        evt: Sz().nullable(),
        nonce: Sz().nullable(),
        data: oz().nullable(),
        cmd: Sz()
      }).passthrough();

    function Us(DD) {
      const zD = As.parse(DD);
      return null != zD.evt ? zD.evt === Sp ? Wp.parse(zD) : function(DD) {
        const zD = DD.evt;
        if (!(zD in ip)) throw new Error(`Unrecognized event type ${DD.evt}`);
        return yp[zD].payload.parse(DD)
      }(Zp.parse(zD)) : function(DD) {
        return Object.assign(Object.assign({}, DD), {
          data: gs(DD)
        })
      }(cs.passthrough().parse(zD))
    }

    function fs(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const sD = Yw.extend({
        cmd: rw(zD),
        data: wD
      });
      return async wD => {
        const KD = await DD({
          cmd: zD,
          args: wD,
          transfer: pD(wD)
        });
        return sD.parse(KD).data
      }
    }

    function Is(DD) {
      let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const wD = vw[DD].response,
        pD = Yw.extend({
          cmd: rw(DD),
          data: wD
        });
      return wD => async sD => {
        const KD = await wD({
          cmd: DD,
          args: sD,
          transfer: zD(sD)
        });
        return pD.parse(KD).data
      }
    }
    const Bs = Is(ow.AUTHENTICATE),
      Gs = DD => fs(DD, Fw.AUTHORIZE, mp),
      hs = DD => fs(DD, Fw.CAPTURE_LOG, kp),
      ns = DD => fs(DD, Fw.ENCOURAGE_HW_ACCELERATION, Ks),
      Ms = DD => fs(DD, Fw.GET_ENTITLEMENTS_EMBEDDED, zs),
      Os = DD => fs(DD, Fw.GET_SKUS_EMBEDDED, Ds),
      Es = DD => fs(DD, Fw.GET_CHANNEL_PERMISSIONS, rs),
      Qs = DD => fs(DD, Fw.GET_PLATFORM_BEHAVIORS, Ls),
      Xs = DD => fs(DD, Fw.OPEN_EXTERNAL_LINK, kp),
      Vs = DD => fs(DD, Fw.OPEN_INVITE_DIALOG, kp),
      Ps = Is(ow.OPEN_SHARE_MOMENT_DIALOG);
    sp.HU({
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
      type: sp.shape.type.optional(),
      instance: sp.shape.instance.optional()
    }).nullable();
    const Cs = DD => fs(DD, Fw.SET_ACTIVITY, qp),
      xs = DD => fs(DD, Fw.SET_CONFIG, ps);
    const Ts = DD => ({
        lock_state: DD.lock_state,
        picture_in_picture_lock_state: DD.picture_in_picture_lock_state
      }),
      bs = DD => function(DD) {
        let {
          sendCommand: zD,
          cmd: wD,
          response: pD,
          fallbackTransform: sD,
          transferTransform: KD = () => {}
        } = DD;
        const rD = Yw.extend({
          cmd: rw(wD),
          data: pD
        });
        return async DD => {
          try {
            const pD = await zD({
              cmd: wD,
              args: DD,
              transfer: KD(DD)
            });
            return rD.parse(pD).data
          } catch (pD) {
            if (pD.code === Sw.INVALID_PAYLOAD) {
              const pD = sD(DD),
                LD = await zD({
                  cmd: wD,
                  args: pD,
                  transfer: KD(pD)
                });
              return rD.parse(LD).data
            }
            throw pD
          }
        }
      }({
        sendCommand: DD,
        cmd: Fw.SET_ORIENTATION_LOCK_STATE,
        response: kp,
        fallbackTransform: Ts
      }),
      ds = DD => fs(DD, Fw.START_PURCHASE, ws),
      Ss = DD => fs(DD, Fw.USER_SETTINGS_GET_LOCALE, ss),
      is = Is(ow.INITIATE_IMAGE_UPLOAD),
      ls = DD => fs(DD, Fw.GET_CHANNEL, ap),
      Ws = Is(ow.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var Ns = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function Zs(DD) {
      return "string" === typeof DD && Ns.test(DD)
    }
    for (var ys = [], ks = 0; ks < 256; ++ks) ys.push((ks + 256).toString(16).substr(1));

    function ms(DD) {
      var zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        wD = (ys[DD[zD + 0]] + ys[DD[zD + 1]] + ys[DD[zD + 2]] + ys[DD[zD + 3]] + "-" + ys[DD[zD + 4]] + ys[DD[zD + 5]] + "-" + ys[DD[zD + 6]] + ys[DD[zD + 7]] + "-" + ys[DD[zD + 8]] + ys[DD[zD + 9]] + "-" + ys[DD[zD + 10]] + ys[DD[zD + 11]] + ys[DD[zD + 12]] + ys[DD[zD + 13]] + ys[DD[zD + 14]] + ys[DD[zD + 15]]).toLowerCase();
      if (!Zs(wD)) throw TypeError("Stringified UUID is invalid");
      return wD
    }
    var es;

    function os(DD, zD, wD) {
      function pD(DD, pD, sD, KD) {
        if ("string" === typeof DD && (DD = function(DD) {
            DD = unescape(encodeURIComponent(DD));
            for (var zD = [], wD = 0; wD < DD.length; ++wD) zD.push(DD.charCodeAt(wD));
            return zD
          }(DD)), "string" === typeof pD && (pD = function(DD) {
            if (!Zs(DD)) throw TypeError("Invalid UUID");
            var zD, wD = new Uint8Array(16);
            return wD[0] = (zD = parseInt(DD.slice(0, 8), 16)) >>> 24, wD[1] = zD >>> 16 & 255, wD[2] = zD >>> 8 & 255, wD[3] = 255 & zD, wD[4] = (zD = parseInt(DD.slice(9, 13), 16)) >>> 8, wD[5] = 255 & zD, wD[6] = (zD = parseInt(DD.slice(14, 18), 16)) >>> 8, wD[7] = 255 & zD, wD[8] = (zD = parseInt(DD.slice(19, 23), 16)) >>> 8, wD[9] = 255 & zD, wD[10] = (zD = parseInt(DD.slice(24, 36), 16)) / 1099511627776 & 255, wD[11] = zD / 4294967296 & 255, wD[12] = zD >>> 24 & 255, wD[13] = zD >>> 16 & 255, wD[14] = zD >>> 8 & 255, wD[15] = 255 & zD, wD
          }(pD)), 16 !== pD.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var rD = new Uint8Array(16 + DD.length);
        if (rD.set(pD), rD.set(DD, pD.length), (rD = wD(rD))[6] = 15 & rD[6] | zD, rD[8] = 63 & rD[8] | 128, sD) {
          KD = KD || 0;
          for (var LD = 0; LD < 16; ++LD) sD[KD + LD] = rD[LD];
          return sD
        }
        return ms(rD)
      }
      try {
        pD.name = DD
      } catch (sD) {}
      return pD.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", pD.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", pD
    }

    function as(DD) {
      return 14 + (DD + 64 >>> 9 << 4) + 1
    }

    function us(DD, zD) {
      var wD = (65535 & DD) + (65535 & zD);
      return (DD >> 16) + (zD >> 16) + (wD >> 16) << 16 | 65535 & wD
    }

    function vs(DD, zD, wD, pD, sD, KD) {
      return us((rD = us(us(zD, DD), us(pD, KD))) << (LD = sD) | rD >>> 32 - LD, wD);
      var rD, LD
    }

    function ts(DD, zD, wD, pD, sD, KD, rD) {
      return vs(zD & wD | ~zD & pD, DD, zD, sD, KD, rD)
    }

    function Fs(DD, zD, wD, pD, sD, KD, rD) {
      return vs(zD & pD | wD & ~pD, DD, zD, sD, KD, rD)
    }

    function Ys(DD, zD, wD, pD, sD, KD, rD) {
      return vs(zD ^ wD ^ pD, DD, zD, sD, KD, rD)
    }

    function Hs(DD, zD, wD, pD, sD, KD, rD) {
      return vs(wD ^ (zD | ~pD), DD, zD, sD, KD, rD)
    }
    os("v3", 48, (function(DD) {
      if ("string" === typeof DD) {
        var zD = unescape(encodeURIComponent(DD));
        DD = new Uint8Array(zD.length);
        for (var wD = 0; wD < zD.length; ++wD) DD[wD] = zD.charCodeAt(wD)
      }
      return function(DD) {
        for (var zD = [], wD = 32 * DD.length, pD = "0123456789abcdef", sD = 0; sD < wD; sD += 8) {
          var KD = DD[sD >> 5] >>> sD % 32 & 255,
            rD = parseInt(pD.charAt(KD >>> 4 & 15) + pD.charAt(15 & KD), 16);
          zD.push(rD)
        }
        return zD
      }(function(DD, zD) {
        DD[zD >> 5] |= 128 << zD % 32, DD[as(zD) - 1] = zD;
        for (var wD = 1732584193, pD = -271733879, sD = -1732584194, KD = 271733878, rD = 0; rD < DD.length; rD += 16) {
          var LD = wD,
            cD = pD,
            gD = sD,
            RD = KD;
          wD = ts(wD, pD, sD, KD, DD[rD], 7, -680876936), KD = ts(KD, wD, pD, sD, DD[rD + 1], 12, -389564586), sD = ts(sD, KD, wD, pD, DD[rD + 2], 17, 606105819), pD = ts(pD, sD, KD, wD, DD[rD + 3], 22, -1044525330), wD = ts(wD, pD, sD, KD, DD[rD + 4], 7, -176418897), KD = ts(KD, wD, pD, sD, DD[rD + 5], 12, 1200080426), sD = ts(sD, KD, wD, pD, DD[rD + 6], 17, -1473231341), pD = ts(pD, sD, KD, wD, DD[rD + 7], 22, -45705983), wD = ts(wD, pD, sD, KD, DD[rD + 8], 7, 1770035416), KD = ts(KD, wD, pD, sD, DD[rD + 9], 12, -1958414417), sD = ts(sD, KD, wD, pD, DD[rD + 10], 17, -42063), pD = ts(pD, sD, KD, wD, DD[rD + 11], 22, -1990404162), wD = ts(wD, pD, sD, KD, DD[rD + 12], 7, 1804603682), KD = ts(KD, wD, pD, sD, DD[rD + 13], 12, -40341101), sD = ts(sD, KD, wD, pD, DD[rD + 14], 17, -1502002290), wD = Fs(wD, pD = ts(pD, sD, KD, wD, DD[rD + 15], 22, 1236535329), sD, KD, DD[rD + 1], 5, -165796510), KD = Fs(KD, wD, pD, sD, DD[rD + 6], 9, -1069501632), sD = Fs(sD, KD, wD, pD, DD[rD + 11], 14, 643717713), pD = Fs(pD, sD, KD, wD, DD[rD], 20, -373897302), wD = Fs(wD, pD, sD, KD, DD[rD + 5], 5, -701558691), KD = Fs(KD, wD, pD, sD, DD[rD + 10], 9, 38016083), sD = Fs(sD, KD, wD, pD, DD[rD + 15], 14, -660478335), pD = Fs(pD, sD, KD, wD, DD[rD + 4], 20, -405537848), wD = Fs(wD, pD, sD, KD, DD[rD + 9], 5, 568446438), KD = Fs(KD, wD, pD, sD, DD[rD + 14], 9, -1019803690), sD = Fs(sD, KD, wD, pD, DD[rD + 3], 14, -187363961), pD = Fs(pD, sD, KD, wD, DD[rD + 8], 20, 1163531501), wD = Fs(wD, pD, sD, KD, DD[rD + 13], 5, -1444681467), KD = Fs(KD, wD, pD, sD, DD[rD + 2], 9, -51403784), sD = Fs(sD, KD, wD, pD, DD[rD + 7], 14, 1735328473), wD = Ys(wD, pD = Fs(pD, sD, KD, wD, DD[rD + 12], 20, -1926607734), sD, KD, DD[rD + 5], 4, -378558), KD = Ys(KD, wD, pD, sD, DD[rD + 8], 11, -2022574463), sD = Ys(sD, KD, wD, pD, DD[rD + 11], 16, 1839030562), pD = Ys(pD, sD, KD, wD, DD[rD + 14], 23, -35309556), wD = Ys(wD, pD, sD, KD, DD[rD + 1], 4, -1530992060), KD = Ys(KD, wD, pD, sD, DD[rD + 4], 11, 1272893353), sD = Ys(sD, KD, wD, pD, DD[rD + 7], 16, -155497632), pD = Ys(pD, sD, KD, wD, DD[rD + 10], 23, -1094730640), wD = Ys(wD, pD, sD, KD, DD[rD + 13], 4, 681279174), KD = Ys(KD, wD, pD, sD, DD[rD], 11, -358537222), sD = Ys(sD, KD, wD, pD, DD[rD + 3], 16, -722521979), pD = Ys(pD, sD, KD, wD, DD[rD + 6], 23, 76029189), wD = Ys(wD, pD, sD, KD, DD[rD + 9], 4, -640364487), KD = Ys(KD, wD, pD, sD, DD[rD + 12], 11, -421815835), sD = Ys(sD, KD, wD, pD, DD[rD + 15], 16, 530742520), wD = Hs(wD, pD = Ys(pD, sD, KD, wD, DD[rD + 2], 23, -995338651), sD, KD, DD[rD], 6, -198630844), KD = Hs(KD, wD, pD, sD, DD[rD + 7], 10, 1126891415), sD = Hs(sD, KD, wD, pD, DD[rD + 14], 15, -1416354905), pD = Hs(pD, sD, KD, wD, DD[rD + 5], 21, -57434055), wD = Hs(wD, pD, sD, KD, DD[rD + 12], 6, 1700485571), KD = Hs(KD, wD, pD, sD, DD[rD + 3], 10, -1894986606), sD = Hs(sD, KD, wD, pD, DD[rD + 10], 15, -1051523), pD = Hs(pD, sD, KD, wD, DD[rD + 1], 21, -2054922799), wD = Hs(wD, pD, sD, KD, DD[rD + 8], 6, 1873313359), KD = Hs(KD, wD, pD, sD, DD[rD + 15], 10, -30611744), sD = Hs(sD, KD, wD, pD, DD[rD + 6], 15, -1560198380), pD = Hs(pD, sD, KD, wD, DD[rD + 13], 21, 1309151649), wD = Hs(wD, pD, sD, KD, DD[rD + 4], 6, -145523070), KD = Hs(KD, wD, pD, sD, DD[rD + 11], 10, -1120210379), sD = Hs(sD, KD, wD, pD, DD[rD + 2], 15, 718787259), pD = Hs(pD, sD, KD, wD, DD[rD + 9], 21, -343485551), wD = us(wD, LD), pD = us(pD, cD), sD = us(sD, gD), KD = us(KD, RD)
        }
        return [wD, pD, sD, KD]
      }(function(DD) {
        if (0 === DD.length) return [];
        for (var zD = 8 * DD.length, wD = new Uint32Array(as(zD)), pD = 0; pD < zD; pD += 8) wD[pD >> 5] |= (255 & DD[pD / 8]) << pD % 32;
        return wD
      }(DD), 8 * DD.length))
    }));
    var qs = new Uint8Array(16);

    function DK() {
      if (!es && !(es = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return es(qs)
    }

    function zK(DD, zD, wD) {
      var pD = (DD = DD || {}).random || (DD.rng || DK)();
      if (pD[6] = 15 & pD[6] | 64, pD[8] = 63 & pD[8] | 128, zD) {
        wD = wD || 0;
        for (var sD = 0; sD < 16; ++sD) zD[wD + sD] = pD[sD];
        return zD
      }
      return ms(pD)
    }

    function wK(DD, zD, wD, pD) {
      switch (DD) {
        case 0:
          return zD & wD ^ ~zD & pD;
        case 1:
        case 3:
          return zD ^ wD ^ pD;
        case 2:
          return zD & wD ^ zD & pD ^ wD & pD
      }
    }

    function pK(DD, zD) {
      return DD << zD | DD >>> 32 - zD
    }
    os("v5", 80, (function(DD) {
      var zD = [1518500249, 1859775393, 2400959708, 3395469782],
        wD = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof DD) {
        var pD = unescape(encodeURIComponent(DD));
        DD = [];
        for (var sD = 0; sD < pD.length; ++sD) DD.push(pD.charCodeAt(sD))
      } else Array.isArray(DD) || (DD = Array.prototype.slice.call(DD));
      DD.push(128);
      for (var KD = DD.length / 4 + 2, rD = Math.ceil(KD / 16), LD = new Array(rD), cD = 0; cD < rD; ++cD) {
        for (var gD = new Uint32Array(16), RD = 0; RD < 16; ++RD) gD[RD] = DD[64 * cD + 4 * RD] << 24 | DD[64 * cD + 4 * RD + 1] << 16 | DD[64 * cD + 4 * RD + 2] << 8 | DD[64 * cD + 4 * RD + 3];
        LD[cD] = gD
      }
      LD[rD - 1][14] = 8 * (DD.length - 1) / Math.pow(2, 32), LD[rD - 1][14] = Math.floor(LD[rD - 1][14]), LD[rD - 1][15] = 8 * (DD.length - 1) & 4294967295;
      for (var AD = 0; AD < rD; ++AD) {
        for (var UD = new Uint32Array(80), fD = 0; fD < 16; ++fD) UD[fD] = LD[AD][fD];
        for (var ID = 16; ID < 80; ++ID) UD[ID] = pK(UD[ID - 3] ^ UD[ID - 8] ^ UD[ID - 14] ^ UD[ID - 16], 1);
        for (var BD = wD[0], GD = wD[1], hD = wD[2], nD = wD[3], MD = wD[4], OD = 0; OD < 80; ++OD) {
          var JD = Math.floor(OD / 20),
            ED = pK(BD, 5) + wK(JD, GD, hD, nD) + MD + zD[JD] + UD[OD] >>> 0;
          MD = nD, nD = hD, hD = pK(GD, 30) >>> 0, GD = BD, BD = ED
        }
        wD[0] = wD[0] + BD >>> 0, wD[1] = wD[1] + GD >>> 0, wD[2] = wD[2] + hD >>> 0, wD[3] = wD[3] + nD >>> 0, wD[4] = wD[4] + MD >>> 0
      }
      return [wD[0] >> 24 & 255, wD[0] >> 16 & 255, wD[0] >> 8 & 255, 255 & wD[0], wD[1] >> 24 & 255, wD[1] >> 16 & 255, wD[1] >> 8 & 255, 255 & wD[1], wD[2] >> 24 & 255, wD[2] >> 16 & 255, wD[2] >> 8 & 255, 255 & wD[2], wD[3] >> 24 & 255, wD[3] >> 16 & 255, wD[3] >> 8 & 255, 255 & wD[3], wD[4] >> 24 & 255, wD[4] >> 16 & 255, wD[4] >> 8 & 255, 255 & wD[4]]
    }));
    class sK extends Error {
      constructor(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(zD), this.code = DD, this.message = zD, this.name = "Discord SDK Error"
      }
    }
    const KK = ["log", "warn", "debug", "info", "error"];
    var rK;
    ! function(DD) {
      DD[DD.HANDSHAKE = 0] = "HANDSHAKE", DD[DD.FRAME = 1] = "FRAME", DD[DD.CLOSE = 2] = "CLOSE", DD[DD.HELLO = 3] = "HELLO"
    }(rK || (rK = {}));
    const LK = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class cK {
      getTransfer(DD) {
        var zD;
        switch (DD.cmd) {
          case Fw.SUBSCRIBE:
          case Fw.UNSUBSCRIBE:
            return;
          default:
            return null !== (zD = DD.transfer) && void 0 !== zD ? zD : void 0
        }
      }
      constructor(DD, zD) {
        var wD;
        if (this.eventBus = new gD, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = DD => {
            var zD;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const wD = zK();
            null === (zD = this.source) || void 0 === zD || zD.postMessage([rK.FRAME, Object.assign(Object.assign({}, DD), {
              nonce: wD
            })], this.sourceOrigin, this.getTransfer(DD));
            return new Promise(((DD, zD) => {
              this.pendingCommands.set(wD, {
                resolve: DD,
                reject: zD
              })
            }))
          }, this.commands = (wD = this.sendCommand, {
            authenticate: Bs(wD),
            authorize: Gs(wD),
            captureLog: hs(wD),
            encourageHardwareAcceleration: ns(wD),
            getChannel: ls(wD),
            getChannelPermissions: Es(wD),
            getEntitlements: Ms(wD),
            getPlatformBehaviors: Qs(wD),
            getSkus: Os(wD),
            openExternalLink: Xs(wD),
            openInviteDialog: Vs(wD),
            openShareMomentDialog: Ps(wD),
            setActivity: Cs(wD),
            setConfig: xs(wD),
            setOrientationLockState: bs(wD),
            startPurchase: ds(wD),
            userSettingsGetLocale: Ss(wD),
            initiateImageUpload: is(wD),
            getInstanceConnectedParticipants: Ws(wD)
          }), this.handleMessage = DD => {
            if (!LK.has(DD.origin)) return;
            const zD = DD.data;
            if (!Array.isArray(zD)) return;
            const [wD, pD] = zD;
            switch (wD) {
              case rK.HELLO:
                return;
              case rK.CLOSE:
                return this.handleClose(pD);
              case rK.HANDSHAKE:
                return this.handleHandshake();
              case rK.FRAME:
                return this.handleFrame(pD);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = DD, this.configuration = null !== zD && void 0 !== zD ? zD : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = lw.DESKTOP, this.guildId = null, void(this.channelId = null);
        const pD = new URLSearchParams(this._getSearch()),
          sD = pD.get("frame_id");
        if (!sD) throw new Error("frame_id query param is not defined");
        this.frameId = sD;
        const KD = pD.get("instance_id");
        if (!KD) throw new Error("instance_id query param is not defined");
        this.instanceId = KD;
        const rD = pD.get("platform");
        if (!rD) throw new Error("platform query param is not defined");
        if (rD !== lw.DESKTOP && rD !== lw.MOBILE) throw new Error(`Invalid query param "platform" of "${rD}". Valid values are "${lw.DESKTOP}" or "${lw.MOBILE}"`);
        this.platform = rD, this.guildId = pD.get("guild_id"), this.channelId = pD.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var DD;
          return [null !== (DD = window.parent.opener) && void 0 !== DD ? DD : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(DD, zD) {
        var wD;
        window.removeEventListener("message", this.handleMessage);
        const pD = zK();
        null === (wD = this.source) || void 0 === wD || wD.postMessage([rK.CLOSE, {
          code: DD,
          message: zD,
          nonce: pD
        }], this.sourceOrigin)
      }
      async subscribe(DD, zD) {
        for (var wD = arguments.length, pD = new Array(wD > 2 ? wD - 2 : 0), sD = 2; sD < wD; sD++) pD[sD - 2] = arguments[sD];
        const [KD] = pD, rD = this.eventBus.listenerCount(DD), LD = this.eventBus.on(DD, zD);
        return Object.values(ip).includes(DD) && DD !== ip.READY && 0 === rD && await this.sendCommand({
          cmd: Fw.SUBSCRIBE,
          args: KD,
          evt: DD
        }), LD
      }
      async unsubscribe(DD, zD) {
        for (var wD = arguments.length, pD = new Array(wD > 2 ? wD - 2 : 0), sD = 2; sD < wD; sD++) pD[sD - 2] = arguments[sD];
        const [KD] = pD;
        return DD !== ip.READY && 1 === this.eventBus.listenerCount(DD) && await this.sendCommand({
          cmd: Fw.UNSUBSCRIBE,
          evt: DD,
          args: KD
        }), this.eventBus.off(DD, zD)
      }
      async ready() {
        this.isReady || await new Promise((DD => {
          this.eventBus.once(ip.READY, DD)
        }))
      }
      handshake() {
        var DD;
        null === (DD = this.source) || void 0 === DD || DD.postMessage([rK.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(ip.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const DD = (DD, zD) => {
          this.commands.captureLog({
            level: DD,
            message: zD
          })
        };
        KK.forEach((zD => {
          ! function(DD, zD, wD) {
            const pD = DD[zD],
              sD = DD;
            pD && (DD[zD] = function() {
              const DD = [].slice.call(arguments),
                KD = "" + DD.join(" ");
              wD(zD, KD), pD.apply(sD, DD)
            })
          }(console, zD, DD)
        }))
      }
      handleClose(DD) {
        Rs.parse(DD)
      }
      handleHandshake() {}
      handleFrame(DD) {
        var zD, wD;
        let pD;
        try {
          pD = Us(DD)
        } catch (sD) {
          return console.error("Failed to parse", DD), void console.error(sD)
        }
        if ("DISPATCH" === pD.cmd) this.eventBus.emit(pD.evt, pD.data);
        else {
          if (pD.evt === Sp) {
            if (null != pD.nonce) return null === (zD = this.pendingCommands.get(pD.nonce)) || void 0 === zD || zD.reject(pD.data), void this.pendingCommands.delete(pD.nonce);
            this.eventBus.emit("error", new sK(pD.data.code, pD.data.message))
          }
          if (null == pD.nonce) return void console.error("Missing nonce", DD);
          null === (wD = this.pendingCommands.get(pD.nonce)) || void 0 === wD || wD.resolve(pD), this.pendingCommands.delete(pD.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var gK, RK = 1e9,
      AK = !0,
      UK = "[DecimalError] ",
      fK = UK + "Invalid argument: ",
      IK = UK + "Exponent out of range: ",
      BK = Math.floor,
      GK = Math.pow,
      hK = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      nK = 1e7,
      MK = 9007199254740991,
      OK = BK(1286742750677284.5),
      JK = {};

    function EK(DD, zD) {
      var wD, pD, sD, KD, rD, LD, cD, gD, RD = DD.constructor,
        AD = RD.precision;
      if (!DD.s || !zD.s) return zD.s || (zD = new RD(DD)), AK ? dK(zD, AD) : zD;
      if (cD = DD.d, gD = zD.d, rD = DD.e, sD = zD.e, cD = cD.slice(), KD = rD - sD) {
        for (KD < 0 ? (pD = cD, KD = -KD, LD = gD.length) : (pD = gD, sD = rD, LD = cD.length), KD > (LD = (rD = Math.ceil(AD / 7)) > LD ? rD + 1 : LD + 1) && (KD = LD, pD.length = 1), pD.reverse(); KD--;) pD.push(0);
        pD.reverse()
      }
      for ((LD = cD.length) - (KD = gD.length) < 0 && (KD = LD, pD = gD, gD = cD, cD = pD), wD = 0; KD;) wD = (cD[--KD] = cD[KD] + gD[KD] + wD) / nK | 0, cD[KD] %= nK;
      for (wD && (cD.unshift(wD), ++sD), LD = cD.length; 0 == cD[--LD];) cD.pop();
      return zD.d = cD, zD.e = sD, AK ? dK(zD, AD) : zD
    }

    function QK(DD, zD, wD) {
      if (DD !== ~~DD || DD < zD || DD > wD) throw Error(fK + DD)
    }

    function XK(DD) {
      var zD, wD, pD, sD = DD.length - 1,
        KD = "",
        rD = DD[0];
      if (sD > 0) {
        for (KD += rD, zD = 1; zD < sD; zD++)(wD = 7 - (pD = DD[zD] + "").length) && (KD += TK(wD)), KD += pD;
        (wD = 7 - (pD = (rD = DD[zD]) + "").length) && (KD += TK(wD))
      } else if (0 === rD) return "0";
      for (; rD % 10 === 0;) rD /= 10;
      return KD + rD
    }
    JK.absoluteValue = JK.abs = function() {
      var DD = new this.constructor(this);
      return DD.s && (DD.s = 1), DD
    }, JK.comparedTo = JK.cmp = function(DD) {
      var zD, wD, pD, sD, KD = this;
      if (DD = new KD.constructor(DD), KD.s !== DD.s) return KD.s || -DD.s;
      if (KD.e !== DD.e) return KD.e > DD.e ^ KD.s < 0 ? 1 : -1;
      for (zD = 0, wD = (pD = KD.d.length) < (sD = DD.d.length) ? pD : sD; zD < wD; ++zD)
        if (KD.d[zD] !== DD.d[zD]) return KD.d[zD] > DD.d[zD] ^ KD.s < 0 ? 1 : -1;
      return pD === sD ? 0 : pD > sD ^ KD.s < 0 ? 1 : -1
    }, JK.decimalPlaces = JK.dp = function() {
      var DD = this,
        zD = DD.d.length - 1,
        wD = 7 * (zD - DD.e);
      if (zD = DD.d[zD])
        for (; zD % 10 == 0; zD /= 10) wD--;
      return wD < 0 ? 0 : wD
    }, JK.dividedBy = JK.div = function(DD) {
      return VK(this, new this.constructor(DD))
    }, JK.dividedToIntegerBy = JK.idiv = function(DD) {
      var zD = this.constructor;
      return dK(VK(this, new zD(DD), 0, 1), zD.precision)
    }, JK.equals = JK.eq = function(DD) {
      return !this.cmp(DD)
    }, JK.exponent = function() {
      return CK(this)
    }, JK.greaterThan = JK.gt = function(DD) {
      return this.cmp(DD) > 0
    }, JK.greaterThanOrEqualTo = JK.gte = function(DD) {
      return this.cmp(DD) >= 0
    }, JK.isInteger = JK.isint = function() {
      return this.e > this.d.length - 2
    }, JK.isNegative = JK.isneg = function() {
      return this.s < 0
    }, JK.isPositive = JK.ispos = function() {
      return this.s > 0
    }, JK.isZero = function() {
      return 0 === this.s
    }, JK.lessThan = JK.lt = function(DD) {
      return this.cmp(DD) < 0
    }, JK.lessThanOrEqualTo = JK.lte = function(DD) {
      return this.cmp(DD) < 1
    }, JK.logarithm = JK.log = function(DD) {
      var zD, wD = this,
        pD = wD.constructor,
        sD = pD.precision,
        KD = sD + 5;
      if (void 0 === DD) DD = new pD(10);
      else if ((DD = new pD(DD)).s < 1 || DD.eq(gK)) throw Error(UK + "NaN");
      if (wD.s < 1) throw Error(UK + (wD.s ? "NaN" : "-Infinity"));
      return wD.eq(gK) ? new pD(0) : (AK = !1, zD = VK(bK(wD, KD), bK(DD, KD), KD), AK = !0, dK(zD, sD))
    }, JK.minus = JK.sub = function(DD) {
      var zD = this;
      return DD = new zD.constructor(DD), zD.s == DD.s ? SK(zD, DD) : EK(zD, (DD.s = -DD.s, DD))
    }, JK.modulo = JK.mod = function(DD) {
      var zD, wD = this,
        pD = wD.constructor,
        sD = pD.precision;
      if (!(DD = new pD(DD)).s) throw Error(UK + "NaN");
      return wD.s ? (AK = !1, zD = VK(wD, DD, 0, 1).times(DD), AK = !0, wD.minus(zD)) : dK(new pD(wD), sD)
    }, JK.naturalExponential = JK.exp = function() {
      return PK(this)
    }, JK.naturalLogarithm = JK.ln = function() {
      return bK(this)
    }, JK.negated = JK.neg = function() {
      var DD = new this.constructor(this);
      return DD.s = -DD.s || 0, DD
    }, JK.plus = JK.add = function(DD) {
      var zD = this;
      return DD = new zD.constructor(DD), zD.s == DD.s ? EK(zD, DD) : SK(zD, (DD.s = -DD.s, DD))
    }, JK.precision = JK.sd = function(DD) {
      var zD, wD, pD, sD = this;
      if (void 0 !== DD && DD !== !!DD && 1 !== DD && 0 !== DD) throw Error(fK + DD);
      if (zD = CK(sD) + 1, wD = 7 * (pD = sD.d.length - 1) + 1, pD = sD.d[pD]) {
        for (; pD % 10 == 0; pD /= 10) wD--;
        for (pD = sD.d[0]; pD >= 10; pD /= 10) wD++
      }
      return DD && zD > wD ? zD : wD
    }, JK.squareRoot = JK.sqrt = function() {
      var DD, zD, wD, pD, sD, KD, rD, LD = this,
        cD = LD.constructor;
      if (LD.s < 1) {
        if (!LD.s) return new cD(0);
        throw Error(UK + "NaN")
      }
      for (DD = CK(LD), AK = !1, 0 == (sD = Math.sqrt(+LD)) || sD == 1 / 0 ? (((zD = XK(LD.d)).length + DD) % 2 == 0 && (zD += "0"), sD = Math.sqrt(zD), DD = BK((DD + 1) / 2) - (DD < 0 || DD % 2), pD = new cD(zD = sD == 1 / 0 ? "1e" + DD : (zD = sD.toExponential()).slice(0, zD.indexOf("e") + 1) + DD)) : pD = new cD(sD.toString()), sD = rD = (wD = cD.precision) + 3;;)
        if (pD = (KD = pD).plus(VK(LD, KD, rD + 2)).times(.5), XK(KD.d).slice(0, rD) === (zD = XK(pD.d)).slice(0, rD)) {
          if (zD = zD.slice(rD - 3, rD + 1), sD == rD && "4999" == zD) {
            if (dK(KD, wD + 1, 0), KD.times(KD).eq(LD)) {
              pD = KD;
              break
            }
          } else if ("9999" != zD) break;
          rD += 4
        } return AK = !0, dK(pD, wD)
    }, JK.times = JK.mul = function(DD) {
      var zD, wD, pD, sD, KD, rD, LD, cD, gD, RD = this,
        AD = RD.constructor,
        UD = RD.d,
        fD = (DD = new AD(DD)).d;
      if (!RD.s || !DD.s) return new AD(0);
      for (DD.s *= RD.s, wD = RD.e + DD.e, (cD = UD.length) < (gD = fD.length) && (KD = UD, UD = fD, fD = KD, rD = cD, cD = gD, gD = rD), KD = [], pD = rD = cD + gD; pD--;) KD.push(0);
      for (pD = gD; --pD >= 0;) {
        for (zD = 0, sD = cD + pD; sD > pD;) LD = KD[sD] + fD[pD] * UD[sD - pD - 1] + zD, KD[sD--] = LD % nK | 0, zD = LD / nK | 0;
        KD[sD] = (KD[sD] + zD) % nK | 0
      }
      for (; !KD[--rD];) KD.pop();
      return zD ? ++wD : KD.shift(), DD.d = KD, DD.e = wD, AK ? dK(DD, AD.precision) : DD
    }, JK.toDecimalPlaces = JK.todp = function(DD, zD) {
      var wD = this,
        pD = wD.constructor;
      return wD = new pD(wD), void 0 === DD ? wD : (QK(DD, 0, RK), void 0 === zD ? zD = pD.rounding : QK(zD, 0, 8), dK(wD, DD + CK(wD) + 1, zD))
    }, JK.toExponential = function(DD, zD) {
      var wD, pD = this,
        sD = pD.constructor;
      return void 0 === DD ? wD = iK(pD, !0) : (QK(DD, 0, RK), void 0 === zD ? zD = sD.rounding : QK(zD, 0, 8), wD = iK(pD = dK(new sD(pD), DD + 1, zD), !0, DD + 1)), wD
    }, JK.toFixed = function(DD, zD) {
      var wD, pD, sD = this,
        KD = sD.constructor;
      return void 0 === DD ? iK(sD) : (QK(DD, 0, RK), void 0 === zD ? zD = KD.rounding : QK(zD, 0, 8), wD = iK((pD = dK(new KD(sD), DD + CK(sD) + 1, zD)).abs(), !1, DD + CK(pD) + 1), sD.isneg() && !sD.isZero() ? "-" + wD : wD)
    }, JK.toInteger = JK.toint = function() {
      var DD = this,
        zD = DD.constructor;
      return dK(new zD(DD), CK(DD) + 1, zD.rounding)
    }, JK.toNumber = function() {
      return +this
    }, JK.toPower = JK.pow = function(DD) {
      var zD, wD, pD, sD, KD, rD, LD = this,
        cD = LD.constructor,
        gD = +(DD = new cD(DD));
      if (!DD.s) return new cD(gK);
      if (!(LD = new cD(LD)).s) {
        if (DD.s < 1) throw Error(UK + "Infinity");
        return LD
      }
      if (LD.eq(gK)) return LD;
      if (pD = cD.precision, DD.eq(gK)) return dK(LD, pD);
      if (rD = (zD = DD.e) >= (wD = DD.d.length - 1), KD = LD.s, rD) {
        if ((wD = gD < 0 ? -gD : gD) <= MK) {
          for (sD = new cD(gK), zD = Math.ceil(pD / 7 + 4), AK = !1; wD % 2 && lK((sD = sD.times(LD)).d, zD), 0 !== (wD = BK(wD / 2));) lK((LD = LD.times(LD)).d, zD);
          return AK = !0, DD.s < 0 ? new cD(gK).div(sD) : dK(sD, pD)
        }
      } else if (KD < 0) throw Error(UK + "NaN");
      return KD = KD < 0 && 1 & DD.d[Math.max(zD, wD)] ? -1 : 1, LD.s = 1, AK = !1, sD = DD.times(bK(LD, pD + 12)), AK = !0, (sD = PK(sD)).s = KD, sD
    }, JK.toPrecision = function(DD, zD) {
      var wD, pD, sD = this,
        KD = sD.constructor;
      return void 0 === DD ? pD = iK(sD, (wD = CK(sD)) <= KD.toExpNeg || wD >= KD.toExpPos) : (QK(DD, 1, RK), void 0 === zD ? zD = KD.rounding : QK(zD, 0, 8), pD = iK(sD = dK(new KD(sD), DD, zD), DD <= (wD = CK(sD)) || wD <= KD.toExpNeg, DD)), pD
    }, JK.toSignificantDigits = JK.tosd = function(DD, zD) {
      var wD = this.constructor;
      return void 0 === DD ? (DD = wD.precision, zD = wD.rounding) : (QK(DD, 1, RK), void 0 === zD ? zD = wD.rounding : QK(zD, 0, 8)), dK(new wD(this), DD, zD)
    }, JK.toString = JK.valueOf = JK.val = JK.toJSON = JK[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var DD = this,
        zD = CK(DD),
        wD = DD.constructor;
      return iK(DD, zD <= wD.toExpNeg || zD >= wD.toExpPos)
    };
    var VK = function() {
      function DD(DD, zD) {
        var wD, pD = 0,
          sD = DD.length;
        for (DD = DD.slice(); sD--;) wD = DD[sD] * zD + pD, DD[sD] = wD % nK | 0, pD = wD / nK | 0;
        return pD && DD.unshift(pD), DD
      }

      function zD(DD, zD, wD, pD) {
        var sD, KD;
        if (wD != pD) KD = wD > pD ? 1 : -1;
        else
          for (sD = KD = 0; sD < wD; sD++)
            if (DD[sD] != zD[sD]) {
              KD = DD[sD] > zD[sD] ? 1 : -1;
              break
            } return KD
      }

      function wD(DD, zD, wD) {
        for (var pD = 0; wD--;) DD[wD] -= pD, pD = DD[wD] < zD[wD] ? 1 : 0, DD[wD] = pD * nK + DD[wD] - zD[wD];
        for (; !DD[0] && DD.length > 1;) DD.shift()
      }
      return function(pD, sD, KD, rD) {
        var LD, cD, gD, RD, AD, UD, fD, ID, BD, GD, hD, nD, MD, OD, JD, ED, QD, XD, VD = pD.constructor,
          PD = pD.s == sD.s ? 1 : -1,
          CD = pD.d,
          xD = sD.d;
        if (!pD.s) return new VD(pD);
        if (!sD.s) throw Error(UK + "Division by zero");
        for (cD = pD.e - sD.e, QD = xD.length, JD = CD.length, ID = (fD = new VD(PD)).d = [], gD = 0; xD[gD] == (CD[gD] || 0);) ++gD;
        if (xD[gD] > (CD[gD] || 0) && --cD, (nD = null == KD ? KD = VD.precision : rD ? KD + (CK(pD) - CK(sD)) + 1 : KD) < 0) return new VD(0);
        if (nD = nD / 7 + 2 | 0, gD = 0, 1 == QD)
          for (RD = 0, xD = xD[0], nD++;
            (gD < JD || RD) && nD--; gD++) MD = RD * nK + (CD[gD] || 0), ID[gD] = MD / xD | 0, RD = MD % xD | 0;
        else {
          for ((RD = nK / (xD[0] + 1) | 0) > 1 && (xD = DD(xD, RD), CD = DD(CD, RD), QD = xD.length, JD = CD.length), OD = QD, GD = (BD = CD.slice(0, QD)).length; GD < QD;) BD[GD++] = 0;
          (XD = xD.slice()).unshift(0), ED = xD[0], xD[1] >= nK / 2 && ++ED;
          do {
            RD = 0, (LD = zD(xD, BD, QD, GD)) < 0 ? (hD = BD[0], QD != GD && (hD = hD * nK + (BD[1] || 0)), (RD = hD / ED | 0) > 1 ? (RD >= nK && (RD = nK - 1), 1 == (LD = zD(AD = DD(xD, RD), BD, UD = AD.length, GD = BD.length)) && (RD--, wD(AD, QD < UD ? XD : xD, UD))) : (0 == RD && (LD = RD = 1), AD = xD.slice()), (UD = AD.length) < GD && AD.unshift(0), wD(BD, AD, GD), -1 == LD && (LD = zD(xD, BD, QD, GD = BD.length)) < 1 && (RD++, wD(BD, QD < GD ? XD : xD, GD)), GD = BD.length) : 0 === LD && (RD++, BD = [0]), ID[gD++] = RD, LD && BD[0] ? BD[GD++] = CD[OD] || 0 : (BD = [CD[OD]], GD = 1)
          } while ((OD++ < JD || void 0 !== BD[0]) && nD--)
        }
        return ID[0] || ID.shift(), fD.e = cD, dK(fD, rD ? KD + CK(fD) + 1 : KD)
      }
    }();

    function PK(DD, zD) {
      var wD, pD, sD, KD, rD, LD = 0,
        cD = 0,
        gD = DD.constructor,
        RD = gD.precision;
      if (CK(DD) > 16) throw Error(IK + CK(DD));
      if (!DD.s) return new gD(gK);
      for (null == zD ? (AK = !1, rD = RD) : rD = zD, KD = new gD(.03125); DD.abs().gte(.1);) DD = DD.times(KD), cD += 5;
      for (rD += Math.log(GK(2, cD)) / Math.LN10 * 2 + 5 | 0, wD = pD = sD = new gD(gK), gD.precision = rD;;) {
        if (pD = dK(pD.times(DD), rD), wD = wD.times(++LD), XK((KD = sD.plus(VK(pD, wD, rD))).d).slice(0, rD) === XK(sD.d).slice(0, rD)) {
          for (; cD--;) sD = dK(sD.times(sD), rD);
          return gD.precision = RD, null == zD ? (AK = !0, dK(sD, RD)) : sD
        }
        sD = KD
      }
    }

    function CK(DD) {
      for (var zD = 7 * DD.e, wD = DD.d[0]; wD >= 10; wD /= 10) zD++;
      return zD
    }

    function xK(DD, zD, wD) {
      if (zD > DD.LN10.sd()) throw AK = !0, wD && (DD.precision = wD), Error(UK + "LN10 precision limit exceeded");
      return dK(new DD(DD.LN10), zD)
    }

    function TK(DD) {
      for (var zD = ""; DD--;) zD += "0";
      return zD
    }

    function bK(DD, zD) {
      var wD, pD, sD, KD, rD, LD, cD, gD, RD, AD = 1,
        UD = DD,
        fD = UD.d,
        ID = UD.constructor,
        BD = ID.precision;
      if (UD.s < 1) throw Error(UK + (UD.s ? "NaN" : "-Infinity"));
      if (UD.eq(gK)) return new ID(0);
      if (null == zD ? (AK = !1, gD = BD) : gD = zD, UD.eq(10)) return null == zD && (AK = !0), xK(ID, gD);
      if (gD += 10, ID.precision = gD, pD = (wD = XK(fD)).charAt(0), KD = CK(UD), !(Math.abs(KD) < 15e14)) return cD = xK(ID, gD + 2, BD).times(KD + ""), UD = bK(new ID(pD + "." + wD.slice(1)), gD - 10).plus(cD), ID.precision = BD, null == zD ? (AK = !0, dK(UD, BD)) : UD;
      for (; pD < 7 && 1 != pD || 1 == pD && wD.charAt(1) > 3;) pD = (wD = XK((UD = UD.times(DD)).d)).charAt(0), AD++;
      for (KD = CK(UD), pD > 1 ? (UD = new ID("0." + wD), KD++) : UD = new ID(pD + "." + wD.slice(1)), LD = rD = UD = VK(UD.minus(gK), UD.plus(gK), gD), RD = dK(UD.times(UD), gD), sD = 3;;) {
        if (rD = dK(rD.times(RD), gD), XK((cD = LD.plus(VK(rD, new ID(sD), gD))).d).slice(0, gD) === XK(LD.d).slice(0, gD)) return LD = LD.times(2), 0 !== KD && (LD = LD.plus(xK(ID, gD + 2, BD).times(KD + ""))), LD = VK(LD, new ID(AD), gD), ID.precision = BD, null == zD ? (AK = !0, dK(LD, BD)) : LD;
        LD = cD, sD += 2
      }
    }

    function jK(DD, zD) {
      var wD, pD, sD;
      for ((wD = zD.indexOf(".")) > -1 && (zD = zD.replace(".", "")), (pD = zD.search(/e/i)) > 0 ? (wD < 0 && (wD = pD), wD += +zD.slice(pD + 1), zD = zD.substring(0, pD)) : wD < 0 && (wD = zD.length), pD = 0; 48 === zD.charCodeAt(pD);) ++pD;
      for (sD = zD.length; 48 === zD.charCodeAt(sD - 1);) --sD;
      if (zD = zD.slice(pD, sD)) {
        if (sD -= pD, wD = wD - pD - 1, DD.e = BK(wD / 7), DD.d = [], pD = (wD + 1) % 7, wD < 0 && (pD += 7), pD < sD) {
          for (pD && DD.d.push(+zD.slice(0, pD)), sD -= 7; pD < sD;) DD.d.push(+zD.slice(pD, pD += 7));
          pD = 7 - (zD = zD.slice(pD)).length
        } else pD -= sD;
        for (; pD--;) zD += "0";
        if (DD.d.push(+zD), AK && (DD.e > OK || DD.e < -OK)) throw Error(IK + wD)
      } else DD.s = 0, DD.e = 0, DD.d = [0];
      return DD
    }

    function dK(DD, zD, wD) {
      var pD, sD, KD, rD, LD, cD, gD, RD, AD = DD.d;
      for (rD = 1, KD = AD[0]; KD >= 10; KD /= 10) rD++;
      if ((pD = zD - rD) < 0) pD += 7, sD = zD, gD = AD[RD = 0];
      else {
        if ((RD = Math.ceil((pD + 1) / 7)) >= (KD = AD.length)) return DD;
        for (gD = KD = AD[RD], rD = 1; KD >= 10; KD /= 10) rD++;
        sD = (pD %= 7) - 7 + rD
      }
      if (void 0 !== wD && (LD = gD / (KD = GK(10, rD - sD - 1)) % 10 | 0, cD = zD < 0 || void 0 !== AD[RD + 1] || gD % KD, cD = wD < 4 ? (LD || cD) && (0 == wD || wD == (DD.s < 0 ? 3 : 2)) : LD > 5 || 5 == LD && (4 == wD || cD || 6 == wD && (pD > 0 ? sD > 0 ? gD / GK(10, rD - sD) : 0 : AD[RD - 1]) % 10 & 1 || wD == (DD.s < 0 ? 8 : 7))), zD < 1 || !AD[0]) return cD ? (KD = CK(DD), AD.length = 1, zD = zD - KD - 1, AD[0] = GK(10, (7 - zD % 7) % 7), DD.e = BK(-zD / 7) || 0) : (AD.length = 1, AD[0] = DD.e = DD.s = 0), DD;
      if (0 == pD ? (AD.length = RD, KD = 1, RD--) : (AD.length = RD + 1, KD = GK(10, 7 - pD), AD[RD] = sD > 0 ? (gD / GK(10, rD - sD) % GK(10, sD) | 0) * KD : 0), cD)
        for (;;) {
          if (0 == RD) {
            (AD[0] += KD) == nK && (AD[0] = 1, ++DD.e);
            break
          }
          if (AD[RD] += KD, AD[RD] != nK) break;
          AD[RD--] = 0, KD = 1
        }
      for (pD = AD.length; 0 === AD[--pD];) AD.pop();
      if (AK && (DD.e > OK || DD.e < -OK)) throw Error(IK + CK(DD));
      return DD
    }

    function SK(DD, zD) {
      var wD, pD, sD, KD, rD, LD, cD, gD, RD, AD, UD = DD.constructor,
        fD = UD.precision;
      if (!DD.s || !zD.s) return zD.s ? zD.s = -zD.s : zD = new UD(DD), AK ? dK(zD, fD) : zD;
      if (cD = DD.d, AD = zD.d, pD = zD.e, gD = DD.e, cD = cD.slice(), rD = gD - pD) {
        for ((RD = rD < 0) ? (wD = cD, rD = -rD, LD = AD.length) : (wD = AD, pD = gD, LD = cD.length), rD > (sD = Math.max(Math.ceil(fD / 7), LD) + 2) && (rD = sD, wD.length = 1), wD.reverse(), sD = rD; sD--;) wD.push(0);
        wD.reverse()
      } else {
        for ((RD = (sD = cD.length) < (LD = AD.length)) && (LD = sD), sD = 0; sD < LD; sD++)
          if (cD[sD] != AD[sD]) {
            RD = cD[sD] < AD[sD];
            break
          } rD = 0
      }
      for (RD && (wD = cD, cD = AD, AD = wD, zD.s = -zD.s), LD = cD.length, sD = AD.length - LD; sD > 0; --sD) cD[LD++] = 0;
      for (sD = AD.length; sD > rD;) {
        if (cD[--sD] < AD[sD]) {
          for (KD = sD; KD && 0 === cD[--KD];) cD[KD] = nK - 1;
          --cD[KD], cD[sD] += nK
        }
        cD[sD] -= AD[sD]
      }
      for (; 0 === cD[--LD];) cD.pop();
      for (; 0 === cD[0]; cD.shift()) --pD;
      return cD[0] ? (zD.d = cD, zD.e = pD, AK ? dK(zD, fD) : zD) : new UD(0)
    }

    function iK(DD, zD, wD) {
      var pD, sD = CK(DD),
        KD = XK(DD.d),
        rD = KD.length;
      return zD ? (wD && (pD = wD - rD) > 0 ? KD = KD.charAt(0) + "." + KD.slice(1) + TK(pD) : rD > 1 && (KD = KD.charAt(0) + "." + KD.slice(1)), KD = KD + (sD < 0 ? "e" : "e+") + sD) : sD < 0 ? (KD = "0." + TK(-sD - 1) + KD, wD && (pD = wD - rD) > 0 && (KD += TK(pD))) : sD >= rD ? (KD += TK(sD + 1 - rD), wD && (pD = wD - sD - 1) > 0 && (KD = KD + "." + TK(pD))) : ((pD = sD + 1) < rD && (KD = KD.slice(0, pD) + "." + KD.slice(pD)), wD && (pD = wD - rD) > 0 && (sD + 1 === rD && (KD += "."), KD += TK(pD))), DD.s < 0 ? "-" + KD : KD
    }

    function lK(DD, zD) {
      if (DD.length > zD) return DD.length = zD, !0
    }

    function WK(DD) {
      if (!DD || "object" !== typeof DD) throw Error(UK + "Object expected");
      var zD, wD, pD, sD = ["precision", 1, RK, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (zD = 0; zD < sD.length; zD += 3)
        if (void 0 !== (pD = DD[wD = sD[zD]])) {
          if (!(BK(pD) === pD && pD >= sD[zD + 1] && pD <= sD[zD + 2])) throw Error(fK + wD + ": " + pD);
          this[wD] = pD
        } if (void 0 !== (pD = DD[wD = "LN10"])) {
        if (pD != Math.LN10) throw Error(fK + wD + ": " + pD);
        this[wD] = new this(pD)
      }
      return this
    }
    var NK = function DD(zD) {
      var wD, pD, sD;

      function KD(DD) {
        var zD = this;
        if (!(zD instanceof KD)) return new KD(DD);
        if (zD.constructor = KD, DD instanceof KD) return zD.s = DD.s, zD.e = DD.e, void(zD.d = (DD = DD.d) ? DD.slice() : DD);
        if ("number" === typeof DD) {
          if (0 * DD !== 0) throw Error(fK + DD);
          if (DD > 0) zD.s = 1;
          else {
            if (!(DD < 0)) return zD.s = 0, zD.e = 0, void(zD.d = [0]);
            DD = -DD, zD.s = -1
          }
          return DD === ~~DD && DD < 1e7 ? (zD.e = 0, void(zD.d = [DD])) : jK(zD, DD.toString())
        }
        if ("string" !== typeof DD) throw Error(fK + DD);
        if (45 === DD.charCodeAt(0) ? (DD = DD.slice(1), zD.s = -1) : zD.s = 1, !hK.test(DD)) throw Error(fK + DD);
        jK(zD, DD)
      }
      if (KD.prototype = JK, KD.ROUND_UP = 0, KD.ROUND_DOWN = 1, KD.ROUND_CEIL = 2, KD.ROUND_FLOOR = 3, KD.ROUND_HALF_UP = 4, KD.ROUND_HALF_DOWN = 5, KD.ROUND_HALF_EVEN = 6, KD.ROUND_HALF_CEIL = 7, KD.ROUND_HALF_FLOOR = 8, KD.clone = DD, KD.config = KD.set = WK, void 0 === zD && (zD = {}), zD)
        for (sD = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], wD = 0; wD < sD.length;) zD.hasOwnProperty(pD = sD[wD++]) || (zD[pD] = this[pD]);
      return KD.config(zD), KD
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    gK = new NK(1);
    var ZK;
    ! function(DD) {
      DD.AED = "aed", DD.AFN = "afn", DD.ALL = "all", DD.AMD = "amd", DD.ANG = "ang", DD.AOA = "aoa", DD.ARS = "ars", DD.AUD = "aud", DD.AWG = "awg", DD.AZN = "azn", DD.BAM = "bam", DD.BBD = "bbd", DD.BDT = "bdt", DD.BGN = "bgn", DD.BHD = "bhd", DD.BIF = "bif", DD.BMD = "bmd", DD.BND = "bnd", DD.BOB = "bob", DD.BOV = "bov", DD.BRL = "brl", DD.BSD = "bsd", DD.BTN = "btn", DD.BWP = "bwp", DD.BYN = "byn", DD.BYR = "byr", DD.BZD = "bzd", DD.CAD = "cad", DD.CDF = "cdf", DD.CHE = "che", DD.CHF = "chf", DD.CHW = "chw", DD.CLF = "clf", DD.CLP = "clp", DD.CNY = "cny", DD.COP = "cop", DD.COU = "cou", DD.CRC = "crc", DD.CUC = "cuc", DD.CUP = "cup", DD.CVE = "cve", DD.CZK = "czk", DD.DJF = "djf", DD.DKK = "dkk", DD.DOP = "dop", DD.DZD = "dzd", DD.EGP = "egp", DD.ERN = "ern", DD.ETB = "etb", DD.EUR = "eur", DD.FJD = "fjd", DD.FKP = "fkp", DD.GBP = "gbp", DD.GEL = "gel", DD.GHS = "ghs", DD.GIP = "gip", DD.GMD = "gmd", DD.GNF = "gnf", DD.GTQ = "gtq", DD.GYD = "gyd", DD.HKD = "hkd", DD.HNL = "hnl", DD.HRK = "hrk", DD.HTG = "htg", DD.HUF = "huf", DD.IDR = "idr", DD.ILS = "ils", DD.INR = "inr", DD.IQD = "iqd", DD.IRR = "irr", DD.ISK = "isk", DD.JMD = "jmd", DD.JOD = "jod", DD.JPY = "jpy", DD.KES = "kes", DD.KGS = "kgs", DD.KHR = "khr", DD.KMF = "kmf", DD.KPW = "kpw", DD.KRW = "krw", DD.KWD = "kwd", DD.KYD = "kyd", DD.KZT = "kzt", DD.LAK = "lak", DD.LBP = "lbp", DD.LKR = "lkr", DD.LRD = "lrd", DD.LSL = "lsl", DD.LTL = "ltl", DD.LVL = "lvl", DD.LYD = "lyd", DD.MAD = "mad", DD.MDL = "mdl", DD.MGA = "mga", DD.MKD = "mkd", DD.MMK = "mmk", DD.MNT = "mnt", DD.MOP = "mop", DD.MRO = "mro", DD.MUR = "mur", DD.MVR = "mvr", DD.MWK = "mwk", DD.MXN = "mxn", DD.MXV = "mxv", DD.MYR = "myr", DD.MZN = "mzn", DD.NAD = "nad", DD.NGN = "ngn", DD.NIO = "nio", DD.NOK = "nok", DD.NPR = "npr", DD.NZD = "nzd", DD.OMR = "omr", DD.PAB = "pab", DD.PEN = "pen", DD.PGK = "pgk", DD.PHP = "php", DD.PKR = "pkr", DD.PLN = "pln", DD.PYG = "pyg", DD.QAR = "qar", DD.RON = "ron", DD.RSD = "rsd", DD.RUB = "rub", DD.RWF = "rwf", DD.SAR = "sar", DD.SBD = "sbd", DD.SCR = "scr", DD.SDG = "sdg", DD.SEK = "sek", DD.SGD = "sgd", DD.SHP = "shp", DD.SLL = "sll", DD.SOS = "sos", DD.SRD = "srd", DD.SSP = "ssp", DD.STD = "std", DD.SVC = "svc", DD.SYP = "syp", DD.SZL = "szl", DD.THB = "thb", DD.TJS = "tjs", DD.TMT = "tmt", DD.TND = "tnd", DD.TOP = "top", DD.TRY = "try", DD.TTD = "ttd", DD.TWD = "twd", DD.TZS = "tzs", DD.UAH = "uah", DD.UGX = "ugx", DD.USD = "usd", DD.USN = "usn", DD.USS = "uss", DD.UYI = "uyi", DD.UYU = "uyu", DD.UZS = "uzs", DD.VEF = "vef", DD.VND = "vnd", DD.VUV = "vuv", DD.WST = "wst", DD.XAF = "xaf", DD.XAG = "xag", DD.XAU = "xau", DD.XBA = "xba", DD.XBB = "xbb", DD.XBC = "xbc", DD.XBD = "xbd", DD.XCD = "xcd", DD.XDR = "xdr", DD.XFU = "xfu", DD.XOF = "xof", DD.XPD = "xpd", DD.XPF = "xpf", DD.XPT = "xpt", DD.XSU = "xsu", DD.XTS = "xts", DD.XUA = "xua", DD.YER = "yer", DD.ZAR = "zar", DD.ZMW = "zmw", DD.ZWL = "zwl"
    }(ZK || (ZK = {}));
    ZK.AED, ZK.AFN, ZK.ALL, ZK.AMD, ZK.ANG, ZK.AOA, ZK.ARS, ZK.AUD, ZK.AWG, ZK.AZN, ZK.BAM, ZK.BBD, ZK.BDT, ZK.BGN, ZK.BHD, ZK.BIF, ZK.BMD, ZK.BND, ZK.BOB, ZK.BOV, ZK.BRL, ZK.BSD, ZK.BTN, ZK.BWP, ZK.BYR, ZK.BYN, ZK.BZD, ZK.CAD, ZK.CDF, ZK.CHE, ZK.CHF, ZK.CHW, ZK.CLF, ZK.CLP, ZK.CNY, ZK.COP, ZK.COU, ZK.CRC, ZK.CUC, ZK.CUP, ZK.CVE, ZK.CZK, ZK.DJF, ZK.DKK, ZK.DOP, ZK.DZD, ZK.EGP, ZK.ERN, ZK.ETB, ZK.EUR, ZK.FJD, ZK.FKP, ZK.GBP, ZK.GEL, ZK.GHS, ZK.GIP, ZK.GMD, ZK.GNF, ZK.GTQ, ZK.GYD, ZK.HKD, ZK.HNL, ZK.HRK, ZK.HTG, ZK.HUF, ZK.IDR, ZK.ILS, ZK.INR, ZK.IQD, ZK.IRR, ZK.ISK, ZK.JMD, ZK.JOD, ZK.JPY, ZK.KES, ZK.KGS, ZK.KHR, ZK.KMF, ZK.KPW, ZK.KRW, ZK.KWD, ZK.KYD, ZK.KZT, ZK.LAK, ZK.LBP, ZK.LKR, ZK.LRD, ZK.LSL, ZK.LTL, ZK.LVL, ZK.LYD, ZK.MAD, ZK.MDL, ZK.MGA, ZK.MKD, ZK.MMK, ZK.MNT, ZK.MOP, ZK.MRO, ZK.MUR, ZK.MVR, ZK.MWK, ZK.MXN, ZK.MXV, ZK.MYR, ZK.MZN, ZK.NAD, ZK.NGN, ZK.NIO, ZK.NOK, ZK.NPR, ZK.NZD, ZK.OMR, ZK.PAB, ZK.PEN, ZK.PGK, ZK.PHP, ZK.PKR, ZK.PLN, ZK.PYG, ZK.QAR, ZK.RON, ZK.RSD, ZK.RUB, ZK.RWF, ZK.SAR, ZK.SBD, ZK.SCR, ZK.SDG, ZK.SEK, ZK.SGD, ZK.SHP, ZK.SLL, ZK.SOS, ZK.SRD, ZK.SSP, ZK.STD, ZK.SVC, ZK.SYP, ZK.SZL, ZK.THB, ZK.TJS, ZK.TMT, ZK.TND, ZK.TOP, ZK.TRY, ZK.TTD, ZK.TWD, ZK.TZS, ZK.UAH, ZK.UGX, ZK.USD, ZK.USN, ZK.USS, ZK.UYI, ZK.UYU, ZK.UZS, ZK.VEF, ZK.VND, ZK.VUV, ZK.WST, ZK.XAF, ZK.XAG, ZK.XAU, ZK.XBA, ZK.XBB, ZK.XBC, ZK.XBD, ZK.XCD, ZK.XDR, ZK.XFU, ZK.XOF, ZK.XPD, ZK.XPF, ZK.XPT, ZK.XSU, ZK.XTS, ZK.XUA, ZK.YER, ZK.ZAR, ZK.ZMW, ZK.ZWL;
    var yK = {
      exports: {}
    };
    ! function(DD, zD) {
      var wD = "__lodash_hash_undefined__",
        pD = 9007199254740991,
        KD = "[object Arguments]",
        rD = "[object Array]",
        LD = "[object Boolean]",
        cD = "[object Date]",
        gD = "[object Error]",
        RD = "[object Function]",
        AD = "[object Map]",
        UD = "[object Number]",
        fD = "[object Object]",
        ID = "[object Promise]",
        BD = "[object RegExp]",
        GD = "[object Set]",
        hD = "[object String]",
        nD = "[object Symbol]",
        MD = "[object WeakMap]",
        OD = "[object ArrayBuffer]",
        JD = "[object DataView]",
        ED = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        QD = /^\w*$/,
        XD = /^\./,
        VD = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        PD = /\\(\\)?/g,
        CD = /^\[object .+?Constructor\]$/,
        xD = /^(?:0|[1-9]\d*)$/,
        TD = {};
      TD["[object Float32Array]"] = TD["[object Float64Array]"] = TD["[object Int8Array]"] = TD["[object Int16Array]"] = TD["[object Int32Array]"] = TD["[object Uint8Array]"] = TD["[object Uint8ClampedArray]"] = TD["[object Uint16Array]"] = TD["[object Uint32Array]"] = !0, TD[KD] = TD[rD] = TD[OD] = TD[LD] = TD[JD] = TD[cD] = TD[gD] = TD[RD] = TD[AD] = TD[UD] = TD[fD] = TD[BD] = TD[GD] = TD[hD] = TD[MD] = !1;
      var bD = "object" == typeof sD && sD && sD.Object === Object && sD,
        jD = "object" == typeof self && self && self.Object === Object && self,
        dD = bD || jD || Function("return this")(),
        SD = zD && !zD.nodeType && zD,
        iD = SD && DD && !DD.nodeType && DD,
        lD = iD && iD.exports === SD && bD.process,
        WD = function() {
          try {
            return lD && lD.binding("util")
          } catch (DD) {}
        }(),
        ND = WD && WD.isTypedArray;

      function ZD(DD, zD) {
        for (var wD = -1, pD = DD ? DD.length : 0; ++wD < pD && !1 !== zD(DD[wD], wD, DD););
        return DD
      }

      function yD(DD, zD) {
        for (var wD = -1, pD = DD ? DD.length : 0; ++wD < pD;)
          if (zD(DD[wD], wD, DD)) return !0;
        return !1
      }

      function kD(DD) {
        var zD = !1;
        if (null != DD && "function" != typeof DD.toString) try {
          zD = !!(DD + "")
        } catch (wD) {}
        return zD
      }

      function mD(DD) {
        var zD = -1,
          wD = Array(DD.size);
        return DD.forEach((function(DD, pD) {
          wD[++zD] = [pD, DD]
        })), wD
      }

      function eD(DD, zD) {
        return function(wD) {
          return DD(zD(wD))
        }
      }

      function oD(DD) {
        var zD = -1,
          wD = Array(DD.size);
        return DD.forEach((function(DD) {
          wD[++zD] = DD
        })), wD
      }
      var aD = Array.prototype,
        uD = Function.prototype,
        vD = Object.prototype,
        tD = dD["__core-js_shared__"],
        FD = function() {
          var DD = /[^.]+$/.exec(tD && tD.keys && tD.keys.IE_PROTO || "");
          return DD ? "Symbol(src)_1." + DD : ""
        }(),
        YD = uD.toString,
        HD = vD.hasOwnProperty,
        qD = vD.toString,
        Dz = RegExp("^" + YD.call(HD).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        zz = dD.Symbol,
        wz = dD.Uint8Array,
        pz = eD(Object.getPrototypeOf, Object),
        sz = Object.create,
        Kz = vD.propertyIsEnumerable,
        rz = aD.splice,
        Lz = eD(Object.keys, Object),
        cz = mz(dD, "DataView"),
        gz = mz(dD, "Map"),
        Rz = mz(dD, "Promise"),
        Az = mz(dD, "Set"),
        Uz = mz(dD, "WeakMap"),
        fz = mz(Object, "create"),
        Iz = Yz(cz),
        Bz = Yz(gz),
        Gz = Yz(Rz),
        hz = Yz(Az),
        nz = Yz(Uz),
        Mz = zz ? zz.prototype : void 0,
        Oz = Mz ? Mz.valueOf : void 0,
        Jz = Mz ? Mz.toString : void 0;

      function Ez(DD) {
        var zD = -1,
          wD = DD ? DD.length : 0;
        for (this.clear(); ++zD < wD;) {
          var pD = DD[zD];
          this.set(pD[0], pD[1])
        }
      }

      function Qz(DD) {
        var zD = -1,
          wD = DD ? DD.length : 0;
        for (this.clear(); ++zD < wD;) {
          var pD = DD[zD];
          this.set(pD[0], pD[1])
        }
      }

      function Xz(DD) {
        var zD = -1,
          wD = DD ? DD.length : 0;
        for (this.clear(); ++zD < wD;) {
          var pD = DD[zD];
          this.set(pD[0], pD[1])
        }
      }

      function Vz(DD) {
        var zD = -1,
          wD = DD ? DD.length : 0;
        for (this.__data__ = new Xz; ++zD < wD;) this.add(DD[zD])
      }

      function Pz(DD) {
        this.__data__ = new Qz(DD)
      }

      function Cz(DD, zD) {
        var wD = zw(DD) || Dw(DD) ? function(DD, zD) {
            for (var wD = -1, pD = Array(DD); ++wD < DD;) pD[wD] = zD(wD);
            return pD
          }(DD.length, String) : [],
          pD = wD.length,
          sD = !!pD;
        for (var KD in DD) !zD && !HD.call(DD, KD) || sD && ("length" == KD || oz(KD, pD)) || wD.push(KD);
        return wD
      }

      function xz(DD, zD) {
        for (var wD = DD.length; wD--;)
          if (qz(DD[wD][0], zD)) return wD;
        return -1
      }
      Ez.prototype.clear = function() {
        this.__data__ = fz ? fz(null) : {}
      }, Ez.prototype.delete = function(DD) {
        return this.has(DD) && delete this.__data__[DD]
      }, Ez.prototype.get = function(DD) {
        var zD = this.__data__;
        if (fz) {
          var pD = zD[DD];
          return pD === wD ? void 0 : pD
        }
        return HD.call(zD, DD) ? zD[DD] : void 0
      }, Ez.prototype.has = function(DD) {
        var zD = this.__data__;
        return fz ? void 0 !== zD[DD] : HD.call(zD, DD)
      }, Ez.prototype.set = function(DD, zD) {
        return this.__data__[DD] = fz && void 0 === zD ? wD : zD, this
      }, Qz.prototype.clear = function() {
        this.__data__ = []
      }, Qz.prototype.delete = function(DD) {
        var zD = this.__data__,
          wD = xz(zD, DD);
        return !(wD < 0) && (wD == zD.length - 1 ? zD.pop() : rz.call(zD, wD, 1), !0)
      }, Qz.prototype.get = function(DD) {
        var zD = this.__data__,
          wD = xz(zD, DD);
        return wD < 0 ? void 0 : zD[wD][1]
      }, Qz.prototype.has = function(DD) {
        return xz(this.__data__, DD) > -1
      }, Qz.prototype.set = function(DD, zD) {
        var wD = this.__data__,
          pD = xz(wD, DD);
        return pD < 0 ? wD.push([DD, zD]) : wD[pD][1] = zD, this
      }, Xz.prototype.clear = function() {
        this.__data__ = {
          hash: new Ez,
          map: new(gz || Qz),
          string: new Ez
        }
      }, Xz.prototype.delete = function(DD) {
        return kz(this, DD).delete(DD)
      }, Xz.prototype.get = function(DD) {
        return kz(this, DD).get(DD)
      }, Xz.prototype.has = function(DD) {
        return kz(this, DD).has(DD)
      }, Xz.prototype.set = function(DD, zD) {
        return kz(this, DD).set(DD, zD), this
      }, Vz.prototype.add = Vz.prototype.push = function(DD) {
        return this.__data__.set(DD, wD), this
      }, Vz.prototype.has = function(DD) {
        return this.__data__.has(DD)
      }, Pz.prototype.clear = function() {
        this.__data__ = new Qz
      }, Pz.prototype.delete = function(DD) {
        return this.__data__.delete(DD)
      }, Pz.prototype.get = function(DD) {
        return this.__data__.get(DD)
      }, Pz.prototype.has = function(DD) {
        return this.__data__.has(DD)
      }, Pz.prototype.set = function(DD, zD) {
        var wD = this.__data__;
        if (wD instanceof Qz) {
          var pD = wD.__data__;
          if (!gz || pD.length < 199) return pD.push([DD, zD]), this;
          wD = this.__data__ = new Xz(pD)
        }
        return wD.set(DD, zD), this
      };
      var Tz, bz = function(DD, zD, wD) {
        for (var pD = -1, sD = Object(DD), KD = wD(DD), rD = KD.length; rD--;) {
          var LD = KD[Tz ? rD : ++pD];
          if (!1 === zD(sD[LD], LD, sD)) break
        }
        return DD
      };

      function jz(DD, zD) {
        return DD && bz(DD, zD, Aw)
      }

      function dz(DD, zD) {
        for (var wD = 0, pD = (zD = az(zD, DD) ? [zD] : Zz(zD)).length; null != DD && wD < pD;) DD = DD[Fz(zD[wD++])];
        return wD && wD == pD ? DD : void 0
      }

      function Sz(DD, zD) {
        return null != DD && zD in Object(DD)
      }

      function iz(DD, zD, wD, pD, sD) {
        return DD === zD || (null == DD || null == zD || !Kw(DD) && !rw(zD) ? DD !== DD && zD !== zD : function(DD, zD, wD, pD, sD, RD) {
          var ID = zw(DD),
            MD = zw(zD),
            ED = rD,
            QD = rD;
          ID || (ED = (ED = ez(DD)) == KD ? fD : ED);
          MD || (QD = (QD = ez(zD)) == KD ? fD : QD);
          var XD = ED == fD && !kD(DD),
            VD = QD == fD && !kD(zD),
            PD = ED == QD;
          if (PD && !XD) return RD || (RD = new Pz), ID || Rw(DD) ? yz(DD, zD, wD, pD, sD, RD) : function(DD, zD, wD, pD, sD, KD, rD) {
            switch (wD) {
              case JD:
                if (DD.byteLength != zD.byteLength || DD.byteOffset != zD.byteOffset) return !1;
                DD = DD.buffer, zD = zD.buffer;
              case OD:
                return !(DD.byteLength != zD.byteLength || !pD(new wz(DD), new wz(zD)));
              case LD:
              case cD:
              case UD:
                return qz(+DD, +zD);
              case gD:
                return DD.name == zD.name && DD.message == zD.message;
              case BD:
              case hD:
                return DD == zD + "";
              case AD:
                var RD = mD;
              case GD:
                var fD = 2 & KD;
                if (RD || (RD = oD), DD.size != zD.size && !fD) return !1;
                var ID = rD.get(DD);
                if (ID) return ID == zD;
                KD |= 1, rD.set(DD, zD);
                var MD = yz(RD(DD), RD(zD), pD, sD, KD, rD);
                return rD.delete(DD), MD;
              case nD:
                if (Oz) return Oz.call(DD) == Oz.call(zD)
            }
            return !1
          }(DD, zD, ED, wD, pD, sD, RD);
          if (!(2 & sD)) {
            var CD = XD && HD.call(DD, "__wrapped__"),
              xD = VD && HD.call(zD, "__wrapped__");
            if (CD || xD) {
              var TD = CD ? DD.value() : DD,
                bD = xD ? zD.value() : zD;
              return RD || (RD = new Pz), wD(TD, bD, pD, sD, RD)
            }
          }
          if (!PD) return !1;
          return RD || (RD = new Pz),
            function(DD, zD, wD, pD, sD, KD) {
              var rD = 2 & sD,
                LD = Aw(DD),
                cD = LD.length,
                gD = Aw(zD),
                RD = gD.length;
              if (cD != RD && !rD) return !1;
              var AD = cD;
              for (; AD--;) {
                var UD = LD[AD];
                if (!(rD ? UD in zD : HD.call(zD, UD))) return !1
              }
              var fD = KD.get(DD);
              if (fD && KD.get(zD)) return fD == zD;
              var ID = !0;
              KD.set(DD, zD), KD.set(zD, DD);
              var BD = rD;
              for (; ++AD < cD;) {
                var GD = DD[UD = LD[AD]],
                  hD = zD[UD];
                if (pD) var nD = rD ? pD(hD, GD, UD, zD, DD, KD) : pD(GD, hD, UD, DD, zD, KD);
                if (!(void 0 === nD ? GD === hD || wD(GD, hD, pD, sD, KD) : nD)) {
                  ID = !1;
                  break
                }
                BD || (BD = "constructor" == UD)
              }
              if (ID && !BD) {
                var MD = DD.constructor,
                  OD = zD.constructor;
                MD == OD || !("constructor" in DD) || !("constructor" in zD) || "function" == typeof MD && MD instanceof MD && "function" == typeof OD && OD instanceof OD || (ID = !1)
              }
              return KD.delete(DD), KD.delete(zD), ID
            }(DD, zD, wD, pD, sD, RD)
        }(DD, zD, iz, wD, pD, sD))
      }

      function lz(DD) {
        return !(!Kw(DD) || (zD = DD, FD && FD in zD)) && (pw(DD) || kD(DD) ? Dz : CD).test(Yz(DD));
        var zD
      }

      function Wz(DD) {
        return "function" == typeof DD ? DD : null == DD ? Uw : "object" == typeof DD ? zw(DD) ? function(DD, zD) {
          if (az(DD) && uz(zD)) return vz(Fz(DD), zD);
          return function(wD) {
            var pD = function(DD, zD, wD) {
              var pD = null == DD ? void 0 : dz(DD, zD);
              return void 0 === pD ? wD : pD
            }(wD, DD);
            return void 0 === pD && pD === zD ? function(DD, zD) {
              return null != DD && function(DD, zD, wD) {
                zD = az(zD, DD) ? [zD] : Zz(zD);
                var pD, sD = -1,
                  KD = zD.length;
                for (; ++sD < KD;) {
                  var rD = Fz(zD[sD]);
                  if (!(pD = null != DD && wD(DD, rD))) break;
                  DD = DD[rD]
                }
                if (pD) return pD;
                KD = DD ? DD.length : 0;
                return !!KD && sw(KD) && oz(rD, KD) && (zw(DD) || Dw(DD))
              }(DD, zD, Sz)
            }(wD, DD) : iz(zD, pD, void 0, 3)
          }
        }(DD[0], DD[1]) : function(DD) {
          var zD = function(DD) {
            var zD = Aw(DD),
              wD = zD.length;
            for (; wD--;) {
              var pD = zD[wD],
                sD = DD[pD];
              zD[wD] = [pD, sD, uz(sD)]
            }
            return zD
          }(DD);
          if (1 == zD.length && zD[0][2]) return vz(zD[0][0], zD[0][1]);
          return function(wD) {
            return wD === DD || function(DD, zD, wD, pD) {
              var sD = wD.length,
                KD = sD,
                rD = !pD;
              if (null == DD) return !KD;
              for (DD = Object(DD); sD--;) {
                var LD = wD[sD];
                if (rD && LD[2] ? LD[1] !== DD[LD[0]] : !(LD[0] in DD)) return !1
              }
              for (; ++sD < KD;) {
                var cD = (LD = wD[sD])[0],
                  gD = DD[cD],
                  RD = LD[1];
                if (rD && LD[2]) {
                  if (void 0 === gD && !(cD in DD)) return !1
                } else {
                  var AD = new Pz;
                  if (pD) var UD = pD(gD, RD, cD, DD, zD, AD);
                  if (!(void 0 === UD ? iz(RD, gD, pD, 3, AD) : UD)) return !1
                }
              }
              return !0
            }(wD, DD, zD)
          }
        }(DD) : function(DD) {
          return az(DD) ? (zD = Fz(DD), function(DD) {
            return null == DD ? void 0 : DD[zD]
          }) : function(DD) {
            return function(zD) {
              return dz(zD, DD)
            }
          }(DD);
          var zD
        }(DD)
      }

      function Nz(DD) {
        if (! function(DD) {
            var zD = DD && DD.constructor,
              wD = "function" == typeof zD && zD.prototype || vD;
            return DD === wD
          }(DD)) return Lz(DD);
        var zD = [];
        for (var wD in Object(DD)) HD.call(DD, wD) && "constructor" != wD && zD.push(wD);
        return zD
      }

      function Zz(DD) {
        return zw(DD) ? DD : tz(DD)
      }

      function yz(DD, zD, wD, pD, sD, KD) {
        var rD = 2 & sD,
          LD = DD.length,
          cD = zD.length;
        if (LD != cD && !(rD && cD > LD)) return !1;
        var gD = KD.get(DD);
        if (gD && KD.get(zD)) return gD == zD;
        var RD = -1,
          AD = !0,
          UD = 1 & sD ? new Vz : void 0;
        for (KD.set(DD, zD), KD.set(zD, DD); ++RD < LD;) {
          var fD = DD[RD],
            ID = zD[RD];
          if (pD) var BD = rD ? pD(ID, fD, RD, zD, DD, KD) : pD(fD, ID, RD, DD, zD, KD);
          if (void 0 !== BD) {
            if (BD) continue;
            AD = !1;
            break
          }
          if (UD) {
            if (!yD(zD, (function(DD, zD) {
                if (!UD.has(zD) && (fD === DD || wD(fD, DD, pD, sD, KD))) return UD.add(zD)
              }))) {
              AD = !1;
              break
            }
          } else if (fD !== ID && !wD(fD, ID, pD, sD, KD)) {
            AD = !1;
            break
          }
        }
        return KD.delete(DD), KD.delete(zD), AD
      }

      function kz(DD, zD) {
        var wD = DD.__data__;
        return function(DD) {
          var zD = typeof DD;
          return "string" == zD || "number" == zD || "symbol" == zD || "boolean" == zD ? "__proto__" !== DD : null === DD
        }(zD) ? wD["string" == typeof zD ? "string" : "hash"] : wD.map
      }

      function mz(DD, zD) {
        var wD = function(DD, zD) {
          return null == DD ? void 0 : DD[zD]
        }(DD, zD);
        return lz(wD) ? wD : void 0
      }
      var ez = function(DD) {
        return qD.call(DD)
      };

      function oz(DD, zD) {
        return !!(zD = null == zD ? pD : zD) && ("number" == typeof DD || xD.test(DD)) && DD > -1 && DD % 1 == 0 && DD < zD
      }

      function az(DD, zD) {
        if (zw(DD)) return !1;
        var wD = typeof DD;
        return !("number" != wD && "symbol" != wD && "boolean" != wD && null != DD && !Lw(DD)) || (QD.test(DD) || !ED.test(DD) || null != zD && DD in Object(zD))
      }

      function uz(DD) {
        return DD === DD && !Kw(DD)
      }

      function vz(DD, zD) {
        return function(wD) {
          return null != wD && (wD[DD] === zD && (void 0 !== zD || DD in Object(wD)))
        }
      }(cz && ez(new cz(new ArrayBuffer(1))) != JD || gz && ez(new gz) != AD || Rz && ez(Rz.resolve()) != ID || Az && ez(new Az) != GD || Uz && ez(new Uz) != MD) && (ez = function(DD) {
        var zD = qD.call(DD),
          wD = zD == fD ? DD.constructor : void 0,
          pD = wD ? Yz(wD) : void 0;
        if (pD) switch (pD) {
          case Iz:
            return JD;
          case Bz:
            return AD;
          case Gz:
            return ID;
          case hz:
            return GD;
          case nz:
            return MD
        }
        return zD
      });
      var tz = Hz((function(DD) {
        var zD;
        DD = null == (zD = DD) ? "" : function(DD) {
          if ("string" == typeof DD) return DD;
          if (Lw(DD)) return Jz ? Jz.call(DD) : "";
          var zD = DD + "";
          return "0" == zD && 1 / DD == -1 / 0 ? "-0" : zD
        }(zD);
        var wD = [];
        return XD.test(DD) && wD.push(""), DD.replace(VD, (function(DD, zD, pD, sD) {
          wD.push(pD ? sD.replace(PD, "$1") : zD || DD)
        })), wD
      }));

      function Fz(DD) {
        if ("string" == typeof DD || Lw(DD)) return DD;
        var zD = DD + "";
        return "0" == zD && 1 / DD == -1 / 0 ? "-0" : zD
      }

      function Yz(DD) {
        if (null != DD) {
          try {
            return YD.call(DD)
          } catch (zD) {}
          try {
            return DD + ""
          } catch (zD) {}
        }
        return ""
      }

      function Hz(DD, zD) {
        if ("function" != typeof DD || zD && "function" != typeof zD) throw new TypeError("Expected a function");
        var wD = function() {
          var pD = arguments,
            sD = zD ? zD.apply(this, pD) : pD[0],
            KD = wD.cache;
          if (KD.has(sD)) return KD.get(sD);
          var rD = DD.apply(this, pD);
          return wD.cache = KD.set(sD, rD), rD
        };
        return wD.cache = new(Hz.Cache || Xz), wD
      }

      function qz(DD, zD) {
        return DD === zD || DD !== DD && zD !== zD
      }

      function Dw(DD) {
        return function(DD) {
          return rw(DD) && ww(DD)
        }(DD) && HD.call(DD, "callee") && (!Kz.call(DD, "callee") || qD.call(DD) == KD)
      }
      Hz.Cache = Xz;
      var zw = Array.isArray;

      function ww(DD) {
        return null != DD && sw(DD.length) && !pw(DD)
      }

      function pw(DD) {
        var zD = Kw(DD) ? qD.call(DD) : "";
        return zD == RD || "[object GeneratorFunction]" == zD
      }

      function sw(DD) {
        return "number" == typeof DD && DD > -1 && DD % 1 == 0 && DD <= pD
      }

      function Kw(DD) {
        var zD = typeof DD;
        return !!DD && ("object" == zD || "function" == zD)
      }

      function rw(DD) {
        return !!DD && "object" == typeof DD
      }

      function Lw(DD) {
        return "symbol" == typeof DD || rw(DD) && qD.call(DD) == nD
      }
      var gw, Rw = ND ? (gw = ND, function(DD) {
        return gw(DD)
      }) : function(DD) {
        return rw(DD) && sw(DD.length) && !!TD[qD.call(DD)]
      };

      function Aw(DD) {
        return ww(DD) ? Cz(DD) : Nz(DD)
      }

      function Uw(DD) {
        return DD
      }
      DD.exports = function(DD, zD, wD) {
        var pD, sD = zw(DD) || Rw(DD);
        if (zD = Wz(zD), null == wD)
          if (sD || Kw(DD)) {
            var KD = DD.constructor;
            wD = sD ? zw(DD) ? new KD : [] : pw(KD) ? Kw(pD = pz(DD)) ? sz(pD) : {} : {}
          } else wD = {};
        return (sD ? ZD : jz)(DD, (function(DD, pD, sD) {
          return zD(wD, DD, pD, sD)
        })), wD
      }
    }(yK, yK.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      i: kK
    } = pD
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);