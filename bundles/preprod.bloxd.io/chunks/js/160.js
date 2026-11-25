export const id = 160;
export const ids = [160];
export const modules = {
  7185: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => aj,
      e: () => oi
    });
    var OM = {};
    iM.r(OM), iM.d(OM, {
      c: () => jO,
      g: () => nO,
      f: () => PO,
      h: () => Ti,
      l: () => qi,
      m: () => pO,
      n: () => MO,
      q: () => DO,
      u: () => bO,
      x: () => sO,
      y: () => Vi,
      z: () => tO,
      D: () => RO,
      H: () => WO,
      K: () => ci,
      J: () => OO,
      M: () => uO,
      O: () => gO
    });
    var SM = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function jM(MM) {
      return MM && MM.__esModule && Object.prototype.hasOwnProperty.call(MM, "default") ? MM.default : MM
    }
    var aM = {
      exports: {}
    };
    ! function(MM) {
      var rM = Object.prototype.hasOwnProperty,
        iM = "~";

      function OM() {}

      function SM(MM, rM, iM) {
        this.jL = MM, this.context = rM, this.once = iM || !1
      }

      function jM(MM, rM, OM, jM, aM) {
        if ("function" !== typeof OM) throw new TypeError("The listener must be a function");
        var PM = new SM(OM, jM || MM, aM),
          nM = iM ? iM + rM : rM;
        return MM._events[nM] ? MM._events[nM].jL ? MM._events[nM] = [MM._events[nM], PM] : MM._events[nM].push(PM) : (MM._events[nM] = PM, MM._eventsCount++), MM
      }

      function aM(MM, rM) {
        0 === --MM._eventsCount ? MM._events = new OM : delete MM._events[rM]
      }

      function PM() {
        this._events = new OM, this._eventsCount = 0
      }
      Object.create && (OM.prototype = Object.create(null), (new OM).__proto__ || (iM = !1)), PM.prototype.eventNames = function() {
        var MM, OM, SM = [];
        if (0 === this._eventsCount) return SM;
        for (OM in MM = this._events) rM.call(MM, OM) && SM.push(iM ? OM.slice(1) : OM);
        return Object.getOwnPropertySymbols ? SM.concat(Object.getOwnPropertySymbols(MM)) : SM
      }, PM.prototype.listeners = function(MM) {
        var rM = iM ? iM + MM : MM,
          OM = this._events[rM];
        if (!OM) return [];
        if (OM.jL) return [OM.jL];
        for (var SM = 0, jM = OM.length, aM = new Array(jM); SM < jM; SM++) aM[SM] = OM[SM].jL;
        return aM
      }, PM.prototype.listenerCount = function(MM) {
        var rM = iM ? iM + MM : MM,
          OM = this._events[rM];
        return OM ? OM.jL ? 1 : OM.length : 0
      }, PM.prototype.emit = function(MM, rM, OM, SM, jM, aM) {
        var PM = iM ? iM + MM : MM;
        if (!this._events[PM]) return !1;
        var nM, QM, zM = this._events[PM],
          LM = arguments.length;
        if (zM.jL) {
          switch (zM.once && this.removeListener(MM, zM.jL, void 0, !0), LM) {
            case 1:
              return zM.jL.call(zM.context), !0;
            case 2:
              return zM.jL.call(zM.context, rM), !0;
            case 3:
              return zM.jL.call(zM.context, rM, OM), !0;
            case 4:
              return zM.jL.call(zM.context, rM, OM, SM), !0;
            case 5:
              return zM.jL.call(zM.context, rM, OM, SM, jM), !0;
            case 6:
              return zM.jL.call(zM.context, rM, OM, SM, jM, aM), !0
          }
          for (QM = 1, nM = new Array(LM - 1); QM < LM; QM++) nM[QM - 1] = arguments[QM];
          zM.jL.apply(zM.context, nM)
        } else {
          var mM, HM = zM.length;
          for (QM = 0; QM < HM; QM++) switch (zM[QM].once && this.removeListener(MM, zM[QM].jL, void 0, !0), LM) {
            case 1:
              zM[QM].jL.call(zM[QM].context);
              break;
            case 2:
              zM[QM].jL.call(zM[QM].context, rM);
              break;
            case 3:
              zM[QM].jL.call(zM[QM].context, rM, OM);
              break;
            case 4:
              zM[QM].jL.call(zM[QM].context, rM, OM, SM);
              break;
            default:
              if (!nM)
                for (mM = 1, nM = new Array(LM - 1); mM < LM; mM++) nM[mM - 1] = arguments[mM];
              zM[QM].jL.apply(zM[QM].context, nM)
          }
        }
        return !0
      }, PM.prototype.on = function(MM, rM, iM) {
        return jM(this, MM, rM, iM, !1)
      }, PM.prototype.once = function(MM, rM, iM) {
        return jM(this, MM, rM, iM, !0)
      }, PM.prototype.removeListener = function(MM, rM, OM, SM) {
        var jM = iM ? iM + MM : MM;
        if (!this._events[jM]) return this;
        if (!rM) return aM(this, jM), this;
        var PM = this._events[jM];
        if (PM.jL) PM.jL !== rM || SM && !PM.once || OM && PM.context !== OM || aM(this, jM);
        else {
          for (var nM = 0, QM = [], zM = PM.length; nM < zM; nM++)(PM[nM].jL !== rM || SM && !PM[nM].once || OM && PM[nM].context !== OM) && QM.push(PM[nM]);
          QM.length ? this._events[jM] = 1 === QM.length ? QM[0] : QM : aM(this, jM)
        }
        return this
      }, PM.prototype.aE = function(MM) {
        var rM;
        return MM ? (rM = iM ? iM + MM : MM, this._events[rM] && aM(this, rM)) : (this._events = new OM, this._eventsCount = 0), this
      }, PM.prototype.off = PM.prototype.removeListener, PM.prototype.addListener = PM.prototype.on, PM.prefixed = iM, PM.EventEmitter = PM, MM.exports = PM
    }(aM);
    var PM, nM, QM = jM(aM.exports);
    ! function(MM) {
      MM.assertEqual = MM => MM, MM.assertIs = function(MM) {}, MM.assertNever = function(MM) {
        throw new Error
      }, MM.arrayToEnum = MM => {
        const rM = {};
        for (const iM of MM) rM[iM] = iM;
        return rM
      }, MM.getValidEnumValues = rM => {
        const iM = MM.objectKeys(rM).filter((MM => "number" !== typeof rM[rM[MM]])),
          OM = {};
        for (const MM of iM) OM[MM] = rM[MM];
        return MM.objectValues(OM)
      }, MM.objectValues = rM => MM.objectKeys(rM).map((function(MM) {
        return rM[MM]
      })), MM.objectKeys = "function" === typeof Object.keys ? MM => Object.keys(MM) : MM => {
        const rM = [];
        for (const iM in MM) Object.prototype.hasOwnProperty.call(MM, iM) && rM.push(iM);
        return rM
      }, MM.find = (MM, rM) => {
        for (const iM of MM)
          if (rM(iM)) return iM
      }, MM.isInteger = "function" === typeof Number.isInteger ? MM => Number.isInteger(MM) : MM => "number" === typeof MM && isFinite(MM) && Math.floor(MM) === MM, MM.joinValues = function(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return MM.map((MM => "string" === typeof MM ? `'${MM}'` : MM)).join(rM)
      }, MM.jsonStringifyReplacer = (MM, rM) => "bigint" === typeof rM ? rM.toString() : rM
    }(PM || (PM = {})),
    function(MM) {
      MM.mergeShapes = (MM, rM) => ({
        ...MM,
        ...rM
      })
    }(nM || (nM = {}));
    const zM = PM.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      LM = MM => {
        switch (typeof MM) {
          case "undefined":
            return zM.undefined;
          case "string":
            return zM.string;
          case "number":
            return isNaN(MM) ? zM.nan : zM.number;
          case "boolean":
            return zM.boolean;
          case "function":
            return zM.function;
          case "bigint":
            return zM.bigint;
          case "symbol":
            return zM.symbol;
          case "object":
            return Array.isArray(MM) ? zM.array : null === MM ? zM.null : MM.then && "function" === typeof MM.then && MM.catch && "function" === typeof MM.catch ? zM.promise : "undefined" !== typeof Map && MM instanceof Map ? zM.map : "undefined" !== typeof Set && MM instanceof Set ? zM.set : "undefined" !== typeof Date && MM instanceof Date ? zM.date : zM.object;
          default:
            return zM.unknown
        }
      },
      mM = PM.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class HM extends Error {
      constructor(MM) {
        var rM;
        super(), rM = this, this.issues = [], this.addIssue = MM => {
          this.issues = [...this.issues, MM]
        }, this.addIssues = function() {
          let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          rM.issues = [...rM.issues, ...MM]
        };
        const iM = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, iM) : this.__proto__ = iM, this.name = "ZodError", this.issues = MM
      }
      get errors() {
        return this.issues
      }
      format(MM) {
        const rM = MM || function(MM) {
            return MM.message
          },
          iM = {
            _errors: []
          },
          OM = MM => {
            for (const SM of MM.issues)
              if ("invalid_union" === SM.code) SM.unionErrors.map(OM);
              else if ("invalid_return_type" === SM.code) OM(SM.returnTypeError);
            else if ("invalid_arguments" === SM.code) OM(SM.argumentsError);
            else if (0 === SM.path.length) iM._errors.push(rM(SM));
            else {
              let MM = iM,
                OM = 0;
              for (; OM < SM.path.length;) {
                const iM = SM.path[OM];
                OM === SM.path.length - 1 ? (MM[iM] = MM[iM] || {
                  _errors: []
                }, MM[iM]._errors.push(rM(SM))) : MM[iM] = MM[iM] || {
                  _errors: []
                }, MM = MM[iM], OM++
              }
            }
          };
        return OM(this), iM
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, PM.jsonStringifyReplacer, 2)
      }
      get dL() {
        return 0 === this.issues.length
      }
      flatten() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : MM => MM.message;
        const rM = {},
          iM = [];
        for (const OM of this.issues) OM.path.length > 0 ? (rM[OM.path[0]] = rM[OM.path[0]] || [], rM[OM.path[0]].push(MM(OM))) : iM.push(MM(OM));
        return {
          formErrors: iM,
          fieldErrors: rM
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    HM.create = MM => new HM(MM);
    const hM = (MM, rM) => {
      let iM;
      switch (MM.code) {
        case mM.invalid_type:
          iM = MM.received === zM.undefined ? "Required" : `Expected ${MM.expected}, received ${MM.received}`;
          break;
        case mM.invalid_literal:
          iM = `Invalid literal value, expected ${JSON.stringify(MM.expected,PM.jsonStringifyReplacer)}`;
          break;
        case mM.unrecognized_keys:
          iM = `Unrecognized key(s) in object: ${PM.joinValues(MM.keys,", ")}`;
          break;
        case mM.invalid_union:
          iM = "Invalid input";
          break;
        case mM.invalid_union_discriminator:
          iM = `Invalid discriminator value. Expected ${PM.joinValues(MM.options)}`;
          break;
        case mM.invalid_enum_value:
          iM = `Invalid enum value. Expected ${PM.joinValues(MM.options)}, received '${MM.received}'`;
          break;
        case mM.invalid_arguments:
          iM = "Invalid function arguments";
          break;
        case mM.invalid_return_type:
          iM = "Invalid function return type";
          break;
        case mM.invalid_date:
          iM = "Invalid date";
          break;
        case mM.invalid_string:
          "object" === typeof MM.validation ? "includes" in MM.validation ? (iM = `Invalid input: must include "${MM.validation.includes}"`, "number" === typeof MM.validation.position && (iM = `${iM} at one or more positions greater than or equal to ${MM.validation.position}`)) : "startsWith" in MM.validation ? iM = `Invalid input: must start with "${MM.validation.startsWith}"` : "endsWith" in MM.validation ? iM = `Invalid input: must end with "${MM.validation.endsWith}"` : PM.assertNever(MM.validation) : iM = "regex" !== MM.validation ? `Invalid ${MM.validation}` : "Invalid";
          break;
        case mM.too_small:
          iM = "array" === MM.type ? `Array must contain ${MM.exact?"exactly":MM.inclusive?"at least":"more than"} ${MM.minimum} element(s)` : "string" === MM.type ? `String must contain ${MM.exact?"exactly":MM.inclusive?"at least":"over"} ${MM.minimum} character(s)` : "number" === MM.type ? `Number must be ${MM.exact?"exactly equal to ":MM.inclusive?"greater than or equal to ":"greater than "}${MM.minimum}` : "date" === MM.type ? `Date must be ${MM.exact?"exactly equal to ":MM.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(MM.minimum))}` : "Invalid input";
          break;
        case mM.too_big:
          iM = "array" === MM.type ? `Array must contain ${MM.exact?"exactly":MM.inclusive?"at most":"less than"} ${MM.maximum} element(s)` : "string" === MM.type ? `String must contain ${MM.exact?"exactly":MM.inclusive?"at most":"under"} ${MM.maximum} character(s)` : "number" === MM.type ? `Number must be ${MM.exact?"exactly":MM.inclusive?"less than or equal to":"less than"} ${MM.maximum}` : "bigint" === MM.type ? `BigInt must be ${MM.exact?"exactly":MM.inclusive?"less than or equal to":"less than"} ${MM.maximum}` : "date" === MM.type ? `Date must be ${MM.exact?"exactly":MM.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(MM.maximum))}` : "Invalid input";
          break;
        case mM.custom:
          iM = "Invalid input";
          break;
        case mM.invalid_intersection_types:
          iM = "Intersection results could not be merged";
          break;
        case mM.not_multiple_of:
          iM = `Number must be a multiple of ${MM.multipleOf}`;
          break;
        case mM.not_finite:
          iM = "Number must be finite";
          break;
        default:
          iM = rM.defaultError, PM.assertNever(MM)
      }
      return {
        message: iM
      }
    };
    let JM = hM;

    function dM() {
      return JM
    }
    const yM = MM => {
      const {
        data: rM,
        path: iM,
        errorMaps: OM,
        issueData: SM
      } = MM, jM = [...iM, ...SM.path || []], aM = {
        ...SM,
        path: jM
      };
      let PM = "";
      const nM = OM.filter((MM => !!MM)).slice().reverse();
      for (const QM of nM) PM = QM(aM, {
        data: rM,
        defaultError: PM
      }).message;
      return {
        ...SM,
        path: jM,
        message: SM.message || PM
      }
    };

    function lM(MM, rM) {
      const iM = yM({
        issueData: rM,
        data: MM.data,
        path: MM.path,
        errorMaps: [MM.common.contextualErrorMap, MM.schemaErrorMap, dM(), hM].filter((MM => !!MM))
      });
      MM.common.issues.push(iM)
    }
    class EM {
      constructor() {
        this.value = "valid"
      }
      fh() {
        "valid" === this.value && (this.value = "fh")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(MM, rM) {
        const iM = [];
        for (const OM of rM) {
          if ("aborted" === OM.status) return UM;
          "fh" === OM.status && MM.fh(), iM.push(OM.value)
        }
        return {
          status: MM.value,
          value: iM
        }
      }
      static async mergeObjectAsync(MM, rM) {
        const iM = [];
        for (const OM of rM) iM.push({
          key: await OM.key,
          value: await OM.value
        });
        return EM.mergeObjectSync(MM, iM)
      }
      static mergeObjectSync(MM, rM) {
        const iM = {};
        for (const OM of rM) {
          const {
            key: rM,
            value: SM
          } = OM;
          if ("aborted" === rM.status) return UM;
          if ("aborted" === SM.status) return UM;
          "fh" === rM.status && MM.fh(), "fh" === SM.status && MM.fh(), "__proto__" === rM.value || "undefined" === typeof SM.value && !OM.alwaysSet || (iM[rM.value] = SM.value)
        }
        return {
          status: MM.value,
          value: iM
        }
      }
    }
    const UM = Object.freeze({
        status: "aborted"
      }),
      GM = MM => ({
        status: "fh",
        value: MM
      }),
      CM = MM => ({
        status: "valid",
        value: MM
      }),
      eM = MM => "aborted" === MM.status,
      bM = MM => "fh" === MM.status,
      wM = MM => "valid" === MM.status,
      tM = MM => "undefined" !== typeof Promise && MM instanceof Promise;
    var gM;
    ! function(MM) {
      MM.errToObj = MM => "string" === typeof MM ? {
        message: MM
      } : MM || {}, MM.toString = MM => "string" === typeof MM ? MM : null === MM || void 0 === MM ? void 0 : MM.message
    }(gM || (gM = {}));
    class uM {
      constructor(MM, rM, iM, OM) {
        this._cachedPath = [], this.parent = MM, this.data = rM, this._path = iM, this._key = OM
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const RM = (MM, rM) => {
      if (wM(rM)) return {
        success: !0,
        data: rM.value
      };
      if (!MM.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const rM = new HM(MM.common.issues);
          return this._error = rM, this._error
        }
      }
    };

    function pM(MM) {
      if (!MM) return {};
      const {
        errorMap: rM,
        invalid_type_error: iM,
        required_error: OM,
        description: SM
      } = MM;
      if (rM && (iM || OM)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (rM) return {
        errorMap: rM,
        description: SM
      };
      return {
        errorMap: (MM, rM) => "invalid_type" !== MM.code ? {
          message: rM.defaultError
        } : "undefined" === typeof rM.data ? {
          message: null !== OM && void 0 !== OM ? OM : rM.defaultError
        } : {
          message: null !== iM && void 0 !== iM ? iM : rM.defaultError
        },
        description: SM
      }
    }
    class WM {
      constructor(MM) {
        this.spa = this.safeParseAsync, this._def = MM, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(MM) {
        return LM(MM.data)
      }
      _getOrReturnCtx(MM, rM) {
        return rM || {
          common: MM.parent.common,
          data: MM.data,
          parsedType: LM(MM.data),
          schemaErrorMap: this._def.errorMap,
          path: MM.path,
          parent: MM.parent
        }
      }
      _processInputParams(MM) {
        return {
          status: new EM,
          ctx: {
            common: MM.parent.common,
            data: MM.data,
            parsedType: LM(MM.data),
            schemaErrorMap: this._def.errorMap,
            path: MM.path,
            parent: MM.parent
          }
        }
      }
      _parseSync(MM) {
        const rM = this._parse(MM);
        if (tM(rM)) throw new Error("Synchronous parse encountered promise.");
        return rM
      }
      _parseAsync(MM) {
        const rM = this._parse(MM);
        return Promise.resolve(rM)
      }
      parse(MM, rM) {
        const iM = this.safeParse(MM, rM);
        if (iM.success) return iM.data;
        throw iM.error
      }
      safeParse(MM, rM) {
        var iM;
        const OM = {
            common: {
              issues: [],
              async: null !== (iM = null === rM || void 0 === rM ? void 0 : rM.async) && void 0 !== iM && iM,
              contextualErrorMap: null === rM || void 0 === rM ? void 0 : rM.errorMap
            },
            path: (null === rM || void 0 === rM ? void 0 : rM.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: MM,
            parsedType: LM(MM)
          },
          SM = this._parseSync({
            data: MM,
            path: OM.path,
            parent: OM
          });
        return RM(OM, SM)
      }
      async parseAsync(MM, rM) {
        const iM = await this.safeParseAsync(MM, rM);
        if (iM.success) return iM.data;
        throw iM.error
      }
      async safeParseAsync(MM, rM) {
        const iM = {
            common: {
              issues: [],
              contextualErrorMap: null === rM || void 0 === rM ? void 0 : rM.errorMap,
              async: !0
            },
            path: (null === rM || void 0 === rM ? void 0 : rM.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: MM,
            parsedType: LM(MM)
          },
          OM = this._parse({
            data: MM,
            path: iM.path,
            parent: iM
          }),
          SM = await (tM(OM) ? OM : Promise.resolve(OM));
        return RM(iM, SM)
      }
      refine(MM, rM) {
        const iM = MM => "string" === typeof rM || "undefined" === typeof rM ? {
          message: rM
        } : "function" === typeof rM ? rM(MM) : rM;
        return this._refinement(((rM, OM) => {
          const SM = MM(rM),
            jM = () => OM.addIssue({
              code: mM.custom,
              ...iM(rM)
            });
          return "undefined" !== typeof Promise && SM instanceof Promise ? SM.then((MM => !!MM || (jM(), !1))) : !!SM || (jM(), !1)
        }))
      }
      refinement(MM, rM) {
        return this._refinement(((iM, OM) => !!MM(iM) || (OM.addIssue("function" === typeof rM ? rM(iM, OM) : rM), !1)))
      }
      _refinement(MM) {
        return new Ur({
          schema: this,
          typeName: sr.ZodEffects,
          effect: {
            type: "refinement",
            refinement: MM
          }
        })
      }
      superRefine(MM) {
        return this._refinement(MM)
      }
      optional() {
        return Gr.create(this, this._def)
      }
      nullable() {
        return Cr.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return rr.create(this, this._def)
      }
      promise() {
        return Er.create(this, this._def)
      }
      or(MM) {
        return Sr.create([this, MM], this._def)
      }
      and(MM) {
        return nr.create(this, MM, this._def)
      }
      transform(MM) {
        return new Ur({
          ...pM(this._def),
          schema: this,
          typeName: sr.ZodEffects,
          effect: {
            type: "transform",
            transform: MM
          }
        })
      }
      default (MM) {
        const rM = "function" === typeof MM ? MM : () => MM;
        return new er({
          ...pM(this._def),
          innerType: this,
          defaultValue: rM,
          typeName: sr.ZodDefault
        })
      }
      brand() {
        return new gr({
          typeName: sr.ZodBranded,
          type: this,
          ...pM(this._def)
        })
      } catch (MM) {
        const rM = "function" === typeof MM ? MM : () => MM;
        return new br({
          ...pM(this._def),
          innerType: this,
          catchValue: rM,
          typeName: sr.ZodCatch
        })
      }
      describe(MM) {
        return new(0, this.constructor)({
          ...this._def,
          description: MM
        })
      }
      pipe(MM) {
        return ur.create(this, MM)
      }
      readonly() {
        return Rr.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const sM = /^c[^\s-]{8,}$/i,
      DM = /^[a-z][a-z0-9]*$/,
      kM = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      ZM = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      oM = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let fM;
    const YM = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      NM = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class AM extends WM {
      _parse(MM) {
        this._def.coerce && (MM.data = String(MM.data));
        if (this._getType(MM) !== zM.string) {
          const rM = this._getOrReturnCtx(MM);
          return lM(rM, {
            code: mM.invalid_type,
            expected: zM.string,
            received: rM.parsedType
          }), UM
        }
        const rM = new EM;
        let iM;
        for (const nM of this._def.checks)
          if ("min" === nM.kind) MM.data.length < nM.value && (iM = this._getOrReturnCtx(MM, iM), lM(iM, {
            code: mM.too_small,
            minimum: nM.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: nM.message
          }), rM.fh());
          else if ("max" === nM.kind) MM.data.length > nM.value && (iM = this._getOrReturnCtx(MM, iM), lM(iM, {
          code: mM.too_big,
          maximum: nM.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: nM.message
        }), rM.fh());
        else if ("length" === nM.kind) {
          const OM = MM.data.length > nM.value,
            SM = MM.data.length < nM.value;
          (OM || SM) && (iM = this._getOrReturnCtx(MM, iM), OM ? lM(iM, {
            code: mM.too_big,
            maximum: nM.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: nM.message
          }) : SM && lM(iM, {
            code: mM.too_small,
            minimum: nM.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: nM.message
          }), rM.fh())
        } else if ("email" === nM.kind) oM.test(MM.data) || (iM = this._getOrReturnCtx(MM, iM), lM(iM, {
          validation: "email",
          code: mM.invalid_string,
          message: nM.message
        }), rM.fh());
        else if ("emoji" === nM.kind) fM || (fM = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), fM.test(MM.data) || (iM = this._getOrReturnCtx(MM, iM), lM(iM, {
          validation: "emoji",
          code: mM.invalid_string,
          message: nM.message
        }), rM.fh());
        else if ("uuid" === nM.kind) ZM.test(MM.data) || (iM = this._getOrReturnCtx(MM, iM), lM(iM, {
          validation: "uuid",
          code: mM.invalid_string,
          message: nM.message
        }), rM.fh());
        else if ("cuid" === nM.kind) sM.test(MM.data) || (iM = this._getOrReturnCtx(MM, iM), lM(iM, {
          validation: "cuid",
          code: mM.invalid_string,
          message: nM.message
        }), rM.fh());
        else if ("cuid2" === nM.kind) DM.test(MM.data) || (iM = this._getOrReturnCtx(MM, iM), lM(iM, {
          validation: "cuid2",
          code: mM.invalid_string,
          message: nM.message
        }), rM.fh());
        else if ("ulid" === nM.kind) kM.test(MM.data) || (iM = this._getOrReturnCtx(MM, iM), lM(iM, {
          validation: "ulid",
          code: mM.invalid_string,
          message: nM.message
        }), rM.fh());
        else if ("url" === nM.kind) try {
          new URL(MM.data)
        } catch (aM) {
          iM = this._getOrReturnCtx(MM, iM), lM(iM, {
            validation: "url",
            code: mM.invalid_string,
            message: nM.message
          }), rM.fh()
        } else if ("regex" === nM.kind) {
          nM.regex.lastIndex = 0;
          nM.regex.test(MM.data) || (iM = this._getOrReturnCtx(MM, iM), lM(iM, {
            validation: "regex",
            code: mM.invalid_string,
            message: nM.message
          }), rM.fh())
        } else if ("trim" === nM.kind) MM.data = MM.data.trim();
        else if ("includes" === nM.kind) MM.data.includes(nM.value, nM.position) || (iM = this._getOrReturnCtx(MM, iM), lM(iM, {
          code: mM.invalid_string,
          validation: {
            includes: nM.value,
            position: nM.position
          },
          message: nM.message
        }), rM.fh());
        else if ("toLowerCase" === nM.kind) MM.data = MM.data.toLowerCase();
        else if ("toUpperCase" === nM.kind) MM.data = MM.data.toUpperCase();
        else if ("startsWith" === nM.kind) MM.data.startsWith(nM.value) || (iM = this._getOrReturnCtx(MM, iM), lM(iM, {
          code: mM.invalid_string,
          validation: {
            startsWith: nM.value
          },
          message: nM.message
        }), rM.fh());
        else if ("endsWith" === nM.kind) MM.data.endsWith(nM.value) || (iM = this._getOrReturnCtx(MM, iM), lM(iM, {
          code: mM.invalid_string,
          validation: {
            endsWith: nM.value
          },
          message: nM.message
        }), rM.fh());
        else if ("datetime" === nM.kind) {
          ((jM = nM).precision ? jM.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${jM.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${jM.precision}}Z$`) : 0 === jM.precision ? jM.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : jM.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(MM.data) || (iM = this._getOrReturnCtx(MM, iM), lM(iM, {
            code: mM.invalid_string,
            validation: "datetime",
            message: nM.message
          }), rM.fh())
        } else "ip" === nM.kind ? (OM = MM.data, ("v4" !== (SM = nM.version) && SM || !YM.test(OM)) && ("v6" !== SM && SM || !NM.test(OM)) && (iM = this._getOrReturnCtx(MM, iM), lM(iM, {
          validation: "ip",
          code: mM.invalid_string,
          message: nM.message
        }), rM.fh())) : PM.assertNever(nM);
        var OM, SM, jM;
        return {
          status: rM.value,
          value: MM.data
        }
      }
      _regex(MM, rM, iM) {
        return this.refinement((rM => MM.test(rM)), {
          validation: rM,
          code: mM.invalid_string,
          ...gM.errToObj(iM)
        })
      }
      _addCheck(MM) {
        return new AM({
          ...this._def,
          checks: [...this._def.checks, MM]
        })
      }
      email(MM) {
        return this._addCheck({
          kind: "email",
          ...gM.errToObj(MM)
        })
      }
      url(MM) {
        return this._addCheck({
          kind: "url",
          ...gM.errToObj(MM)
        })
      }
      emoji(MM) {
        return this._addCheck({
          kind: "emoji",
          ...gM.errToObj(MM)
        })
      }
      uuid(MM) {
        return this._addCheck({
          kind: "uuid",
          ...gM.errToObj(MM)
        })
      }
      cuid(MM) {
        return this._addCheck({
          kind: "cuid",
          ...gM.errToObj(MM)
        })
      }
      cuid2(MM) {
        return this._addCheck({
          kind: "cuid2",
          ...gM.errToObj(MM)
        })
      }
      ulid(MM) {
        return this._addCheck({
          kind: "ulid",
          ...gM.errToObj(MM)
        })
      }
      ip(MM) {
        return this._addCheck({
          kind: "ip",
          ...gM.errToObj(MM)
        })
      }
      datetime(MM) {
        var rM;
        return "string" === typeof MM ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: MM
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === MM || void 0 === MM ? void 0 : MM.precision) ? null : null === MM || void 0 === MM ? void 0 : MM.precision,
          offset: null !== (rM = null === MM || void 0 === MM ? void 0 : MM.offset) && void 0 !== rM && rM,
          ...gM.errToObj(null === MM || void 0 === MM ? void 0 : MM.message)
        })
      }
      regex(MM, rM) {
        return this._addCheck({
          kind: "regex",
          regex: MM,
          ...gM.errToObj(rM)
        })
      }
      includes(MM, rM) {
        return this._addCheck({
          kind: "includes",
          value: MM,
          position: null === rM || void 0 === rM ? void 0 : rM.position,
          ...gM.errToObj(null === rM || void 0 === rM ? void 0 : rM.message)
        })
      }
      startsWith(MM, rM) {
        return this._addCheck({
          kind: "startsWith",
          value: MM,
          ...gM.errToObj(rM)
        })
      }
      endsWith(MM, rM) {
        return this._addCheck({
          kind: "endsWith",
          value: MM,
          ...gM.errToObj(rM)
        })
      }
      min(MM, rM) {
        return this._addCheck({
          kind: "min",
          value: MM,
          ...gM.errToObj(rM)
        })
      }
      max(MM, rM) {
        return this._addCheck({
          kind: "max",
          value: MM,
          ...gM.errToObj(rM)
        })
      }
      length(MM, rM) {
        return this._addCheck({
          kind: "length",
          value: MM,
          ...gM.errToObj(rM)
        })
      }
      nonempty(MM) {
        return this.min(1, gM.errToObj(MM))
      }
      trim() {
        return new AM({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new AM({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new AM({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((MM => "datetime" === MM.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((MM => "email" === MM.kind))
      }
      get isURL() {
        return !!this._def.checks.find((MM => "url" === MM.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((MM => "emoji" === MM.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((MM => "uuid" === MM.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((MM => "cuid" === MM.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((MM => "cuid2" === MM.kind))
      }
      get isULID() {
        return !!this._def.checks.find((MM => "ulid" === MM.kind))
      }
      get isIP() {
        return !!this._def.checks.find((MM => "ip" === MM.kind))
      }
      get minLength() {
        let MM = null;
        for (const rM of this._def.checks) "min" === rM.kind && (null === MM || rM.value > MM) && (MM = rM.value);
        return MM
      }
      get maxLength() {
        let MM = null;
        for (const rM of this._def.checks) "max" === rM.kind && (null === MM || rM.value < MM) && (MM = rM.value);
        return MM
      }
    }

    function xM(MM, rM) {
      const iM = (MM.toString().split(".")[1] || "").length,
        OM = (rM.toString().split(".")[1] || "").length,
        SM = iM > OM ? iM : OM;
      return parseInt(MM.toFixed(SM).replace(".", "")) % parseInt(rM.toFixed(SM).replace(".", "")) / Math.pow(10, SM)
    }
    AM.create = MM => {
      var rM;
      return new AM({
        checks: [],
        typeName: sr.ZodString,
        coerce: null !== (rM = null === MM || void 0 === MM ? void 0 : MM.coerce) && void 0 !== rM && rM,
        ...pM(MM)
      })
    };
    class vM extends WM {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(MM) {
        this._def.coerce && (MM.data = Number(MM.data));
        if (this._getType(MM) !== zM.number) {
          const rM = this._getOrReturnCtx(MM);
          return lM(rM, {
            code: mM.invalid_type,
            expected: zM.number,
            received: rM.parsedType
          }), UM
        }
        let rM;
        const iM = new EM;
        for (const OM of this._def.checks)
          if ("int" === OM.kind) PM.isInteger(MM.data) || (rM = this._getOrReturnCtx(MM, rM), lM(rM, {
            code: mM.invalid_type,
            expected: "integer",
            received: "float",
            message: OM.message
          }), iM.fh());
          else if ("min" === OM.kind) {
          (OM.inclusive ? MM.data < OM.value : MM.data <= OM.value) && (rM = this._getOrReturnCtx(MM, rM), lM(rM, {
            code: mM.too_small,
            minimum: OM.value,
            type: "number",
            inclusive: OM.inclusive,
            exact: !1,
            message: OM.message
          }), iM.fh())
        } else if ("max" === OM.kind) {
          (OM.inclusive ? MM.data > OM.value : MM.data >= OM.value) && (rM = this._getOrReturnCtx(MM, rM), lM(rM, {
            code: mM.too_big,
            maximum: OM.value,
            type: "number",
            inclusive: OM.inclusive,
            exact: !1,
            message: OM.message
          }), iM.fh())
        } else "multipleOf" === OM.kind ? 0 !== xM(MM.data, OM.value) && (rM = this._getOrReturnCtx(MM, rM), lM(rM, {
          code: mM.not_multiple_of,
          multipleOf: OM.value,
          message: OM.message
        }), iM.fh()) : "finite" === OM.kind ? Number.isFinite(MM.data) || (rM = this._getOrReturnCtx(MM, rM), lM(rM, {
          code: mM.not_finite,
          message: OM.message
        }), iM.fh()) : PM.assertNever(OM);
        return {
          status: iM.value,
          value: MM.data
        }
      }
      gte(MM, rM) {
        return this.setLimit("min", MM, !0, gM.toString(rM))
      }
      gt(MM, rM) {
        return this.setLimit("min", MM, !1, gM.toString(rM))
      }
      lte(MM, rM) {
        return this.setLimit("max", MM, !0, gM.toString(rM))
      }
      lt(MM, rM) {
        return this.setLimit("max", MM, !1, gM.toString(rM))
      }
      setLimit(MM, rM, iM, OM) {
        return new vM({
          ...this._def,
          checks: [...this._def.checks, {
            kind: MM,
            value: rM,
            inclusive: iM,
            message: gM.toString(OM)
          }]
        })
      }
      _addCheck(MM) {
        return new vM({
          ...this._def,
          checks: [...this._def.checks, MM]
        })
      }
      int(MM) {
        return this._addCheck({
          kind: "int",
          message: gM.toString(MM)
        })
      }
      positive(MM) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: gM.toString(MM)
        })
      }
      negative(MM) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: gM.toString(MM)
        })
      }
      nonpositive(MM) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: gM.toString(MM)
        })
      }
      nonnegative(MM) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: gM.toString(MM)
        })
      }
      multipleOf(MM, rM) {
        return this._addCheck({
          kind: "multipleOf",
          value: MM,
          message: gM.toString(rM)
        })
      }
      finite(MM) {
        return this._addCheck({
          kind: "finite",
          message: gM.toString(MM)
        })
      }
      safe(MM) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: gM.toString(MM)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: gM.toString(MM)
        })
      }
      get minValue() {
        let MM = null;
        for (const rM of this._def.checks) "min" === rM.kind && (null === MM || rM.value > MM) && (MM = rM.value);
        return MM
      }
      get maxValue() {
        let MM = null;
        for (const rM of this._def.checks) "max" === rM.kind && (null === MM || rM.value < MM) && (MM = rM.value);
        return MM
      }
      get isInt() {
        return !!this._def.checks.find((MM => "int" === MM.kind || "multipleOf" === MM.kind && PM.isInteger(MM.value)))
      }
      get isFinite() {
        let MM = null,
          rM = null;
        for (const iM of this._def.checks) {
          if ("finite" === iM.kind || "int" === iM.kind || "multipleOf" === iM.kind) return !0;
          "min" === iM.kind ? (null === rM || iM.value > rM) && (rM = iM.value) : "max" === iM.kind && (null === MM || iM.value < MM) && (MM = iM.value)
        }
        return Number.isFinite(rM) && Number.isFinite(MM)
      }
    }
    vM.create = MM => new vM({
      checks: [],
      typeName: sr.ZodNumber,
      coerce: (null === MM || void 0 === MM ? void 0 : MM.coerce) || !1,
      ...pM(MM)
    });
    class FM extends WM {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(MM) {
        this._def.coerce && (MM.data = BigInt(MM.data));
        if (this._getType(MM) !== zM.bigint) {
          const rM = this._getOrReturnCtx(MM);
          return lM(rM, {
            code: mM.invalid_type,
            expected: zM.bigint,
            received: rM.parsedType
          }), UM
        }
        let rM;
        const iM = new EM;
        for (const OM of this._def.checks)
          if ("min" === OM.kind) {
            (OM.inclusive ? MM.data < OM.value : MM.data <= OM.value) && (rM = this._getOrReturnCtx(MM, rM), lM(rM, {
              code: mM.too_small,
              type: "bigint",
              minimum: OM.value,
              inclusive: OM.inclusive,
              message: OM.message
            }), iM.fh())
          } else if ("max" === OM.kind) {
          (OM.inclusive ? MM.data > OM.value : MM.data >= OM.value) && (rM = this._getOrReturnCtx(MM, rM), lM(rM, {
            code: mM.too_big,
            type: "bigint",
            maximum: OM.value,
            inclusive: OM.inclusive,
            message: OM.message
          }), iM.fh())
        } else "multipleOf" === OM.kind ? MM.data % OM.value !== BigInt(0) && (rM = this._getOrReturnCtx(MM, rM), lM(rM, {
          code: mM.not_multiple_of,
          multipleOf: OM.value,
          message: OM.message
        }), iM.fh()) : PM.assertNever(OM);
        return {
          status: iM.value,
          value: MM.data
        }
      }
      gte(MM, rM) {
        return this.setLimit("min", MM, !0, gM.toString(rM))
      }
      gt(MM, rM) {
        return this.setLimit("min", MM, !1, gM.toString(rM))
      }
      lte(MM, rM) {
        return this.setLimit("max", MM, !0, gM.toString(rM))
      }
      lt(MM, rM) {
        return this.setLimit("max", MM, !1, gM.toString(rM))
      }
      setLimit(MM, rM, iM, OM) {
        return new FM({
          ...this._def,
          checks: [...this._def.checks, {
            kind: MM,
            value: rM,
            inclusive: iM,
            message: gM.toString(OM)
          }]
        })
      }
      _addCheck(MM) {
        return new FM({
          ...this._def,
          checks: [...this._def.checks, MM]
        })
      }
      positive(MM) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: gM.toString(MM)
        })
      }
      negative(MM) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: gM.toString(MM)
        })
      }
      nonpositive(MM) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: gM.toString(MM)
        })
      }
      nonnegative(MM) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: gM.toString(MM)
        })
      }
      multipleOf(MM, rM) {
        return this._addCheck({
          kind: "multipleOf",
          value: MM,
          message: gM.toString(rM)
        })
      }
      get minValue() {
        let MM = null;
        for (const rM of this._def.checks) "min" === rM.kind && (null === MM || rM.value > MM) && (MM = rM.value);
        return MM
      }
      get maxValue() {
        let MM = null;
        for (const rM of this._def.checks) "max" === rM.kind && (null === MM || rM.value < MM) && (MM = rM.value);
        return MM
      }
    }
    FM.create = MM => {
      var rM;
      return new FM({
        checks: [],
        typeName: sr.ZodBigInt,
        coerce: null !== (rM = null === MM || void 0 === MM ? void 0 : MM.coerce) && void 0 !== rM && rM,
        ...pM(MM)
      })
    };
    class BM extends WM {
      _parse(MM) {
        this._def.coerce && (MM.data = Boolean(MM.data));
        if (this._getType(MM) !== zM.boolean) {
          const rM = this._getOrReturnCtx(MM);
          return lM(rM, {
            code: mM.invalid_type,
            expected: zM.boolean,
            received: rM.parsedType
          }), UM
        }
        return CM(MM.data)
      }
    }
    BM.create = MM => new BM({
      typeName: sr.ZodBoolean,
      coerce: (null === MM || void 0 === MM ? void 0 : MM.coerce) || !1,
      ...pM(MM)
    });
    class XM extends WM {
      _parse(MM) {
        this._def.coerce && (MM.data = new Date(MM.data));
        if (this._getType(MM) !== zM.date) {
          const rM = this._getOrReturnCtx(MM);
          return lM(rM, {
            code: mM.invalid_type,
            expected: zM.date,
            received: rM.parsedType
          }), UM
        }
        if (isNaN(MM.data.getTime())) {
          return lM(this._getOrReturnCtx(MM), {
            code: mM.invalid_date
          }), UM
        }
        const rM = new EM;
        let iM;
        for (const OM of this._def.checks) "min" === OM.kind ? MM.data.getTime() < OM.value && (iM = this._getOrReturnCtx(MM, iM), lM(iM, {
          code: mM.too_small,
          message: OM.message,
          inclusive: !0,
          exact: !1,
          minimum: OM.value,
          type: "date"
        }), rM.fh()) : "max" === OM.kind ? MM.data.getTime() > OM.value && (iM = this._getOrReturnCtx(MM, iM), lM(iM, {
          code: mM.too_big,
          message: OM.message,
          inclusive: !0,
          exact: !1,
          maximum: OM.value,
          type: "date"
        }), rM.fh()) : PM.assertNever(OM);
        return {
          status: rM.value,
          value: new Date(MM.data.getTime())
        }
      }
      _addCheck(MM) {
        return new XM({
          ...this._def,
          checks: [...this._def.checks, MM]
        })
      }
      min(MM, rM) {
        return this._addCheck({
          kind: "min",
          value: MM.getTime(),
          message: gM.toString(rM)
        })
      }
      max(MM, rM) {
        return this._addCheck({
          kind: "max",
          value: MM.getTime(),
          message: gM.toString(rM)
        })
      }
      get minDate() {
        let MM = null;
        for (const rM of this._def.checks) "min" === rM.kind && (null === MM || rM.value > MM) && (MM = rM.value);
        return null != MM ? new Date(MM) : null
      }
      get maxDate() {
        let MM = null;
        for (const rM of this._def.checks) "max" === rM.kind && (null === MM || rM.value < MM) && (MM = rM.value);
        return null != MM ? new Date(MM) : null
      }
    }
    XM.create = MM => new XM({
      checks: [],
      coerce: (null === MM || void 0 === MM ? void 0 : MM.coerce) || !1,
      typeName: sr.ZodDate,
      ...pM(MM)
    });
    class IM extends WM {
      _parse(MM) {
        if (this._getType(MM) !== zM.symbol) {
          const rM = this._getOrReturnCtx(MM);
          return lM(rM, {
            code: mM.invalid_type,
            expected: zM.symbol,
            received: rM.parsedType
          }), UM
        }
        return CM(MM.data)
      }
    }
    IM.create = MM => new IM({
      typeName: sr.ZodSymbol,
      ...pM(MM)
    });
    class KM extends WM {
      _parse(MM) {
        if (this._getType(MM) !== zM.undefined) {
          const rM = this._getOrReturnCtx(MM);
          return lM(rM, {
            code: mM.invalid_type,
            expected: zM.undefined,
            received: rM.parsedType
          }), UM
        }
        return CM(MM.data)
      }
    }
    KM.create = MM => new KM({
      typeName: sr.ZodUndefined,
      ...pM(MM)
    });
    class qM extends WM {
      _parse(MM) {
        if (this._getType(MM) !== zM.null) {
          const rM = this._getOrReturnCtx(MM);
          return lM(rM, {
            code: mM.invalid_type,
            expected: zM.null,
            received: rM.parsedType
          }), UM
        }
        return CM(MM.data)
      }
    }
    qM.create = MM => new qM({
      typeName: sr.ZodNull,
      ...pM(MM)
    });
    class TM extends WM {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(MM) {
        return CM(MM.data)
      }
    }
    TM.create = MM => new TM({
      typeName: sr.ZodAny,
      ...pM(MM)
    });
    class VM extends WM {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(MM) {
        return CM(MM.data)
      }
    }
    VM.create = MM => new VM({
      typeName: sr.ZodUnknown,
      ...pM(MM)
    });
    class cM extends WM {
      _parse(MM) {
        const rM = this._getOrReturnCtx(MM);
        return lM(rM, {
          code: mM.invalid_type,
          expected: zM.never,
          received: rM.parsedType
        }), UM
      }
    }
    cM.create = MM => new cM({
      typeName: sr.ZodNever,
      ...pM(MM)
    });
    class Mr extends WM {
      _parse(MM) {
        if (this._getType(MM) !== zM.undefined) {
          const rM = this._getOrReturnCtx(MM);
          return lM(rM, {
            code: mM.invalid_type,
            expected: zM.void,
            received: rM.parsedType
          }), UM
        }
        return CM(MM.data)
      }
    }
    Mr.create = MM => new Mr({
      typeName: sr.ZodVoid,
      ...pM(MM)
    });
    class rr extends WM {
      _parse(MM) {
        const {
          ctx: rM,
          status: iM
        } = this._processInputParams(MM), OM = this._def;
        if (rM.parsedType !== zM.array) return lM(rM, {
          code: mM.invalid_type,
          expected: zM.array,
          received: rM.parsedType
        }), UM;
        if (null !== OM.exactLength) {
          const MM = rM.data.length > OM.exactLength.value,
            SM = rM.data.length < OM.exactLength.value;
          (MM || SM) && (lM(rM, {
            code: MM ? mM.too_big : mM.too_small,
            minimum: SM ? OM.exactLength.value : void 0,
            maximum: MM ? OM.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: OM.exactLength.message
          }), iM.fh())
        }
        if (null !== OM.minLength && rM.data.length < OM.minLength.value && (lM(rM, {
            code: mM.too_small,
            minimum: OM.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: OM.minLength.message
          }), iM.fh()), null !== OM.maxLength && rM.data.length > OM.maxLength.value && (lM(rM, {
            code: mM.too_big,
            maximum: OM.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: OM.maxLength.message
          }), iM.fh()), rM.common.async) return Promise.all([...rM.data].map(((MM, iM) => OM.type._parseAsync(new uM(rM, MM, rM.path, iM))))).then((MM => EM.mergeArray(iM, MM)));
        const SM = [...rM.data].map(((MM, iM) => OM.type._parseSync(new uM(rM, MM, rM.path, iM))));
        return EM.mergeArray(iM, SM)
      }
      get element() {
        return this._def.type
      }
      min(MM, rM) {
        return new rr({
          ...this._def,
          minLength: {
            value: MM,
            message: gM.toString(rM)
          }
        })
      }
      max(MM, rM) {
        return new rr({
          ...this._def,
          maxLength: {
            value: MM,
            message: gM.toString(rM)
          }
        })
      }
      length(MM, rM) {
        return new rr({
          ...this._def,
          exactLength: {
            value: MM,
            message: gM.toString(rM)
          }
        })
      }
      nonempty(MM) {
        return this.min(1, MM)
      }
    }

    function ir(MM) {
      if (MM instanceof Or) {
        const rM = {};
        for (const iM in MM.shape) {
          const OM = MM.shape[iM];
          rM[iM] = Gr.create(ir(OM))
        }
        return new Or({
          ...MM._def,
          shape: () => rM
        })
      }
      return MM instanceof rr ? new rr({
        ...MM._def,
        type: ir(MM.element)
      }) : MM instanceof Gr ? Gr.create(ir(MM.unwrap())) : MM instanceof Cr ? Cr.create(ir(MM.unwrap())) : MM instanceof Qr ? Qr.create(MM.items.map((MM => ir(MM)))) : MM
    }
    rr.create = (MM, rM) => new rr({
      type: MM,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: sr.ZodArray,
      ...pM(rM)
    });
    class Or extends WM {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const MM = this._def.shape(),
          rM = PM.objectKeys(MM);
        return this._cached = {
          shape: MM,
          keys: rM
        }
      }
      _parse(MM) {
        if (this._getType(MM) !== zM.object) {
          const rM = this._getOrReturnCtx(MM);
          return lM(rM, {
            code: mM.invalid_type,
            expected: zM.object,
            received: rM.parsedType
          }), UM
        }
        const {
          status: rM,
          ctx: iM
        } = this._processInputParams(MM), {
          shape: OM,
          keys: SM
        } = this._getCached(), jM = [];
        if (!(this._def.catchall instanceof cM && "strip" === this._def.unknownKeys))
          for (const PM in iM.data) SM.includes(PM) || jM.push(PM);
        const aM = [];
        for (const PM of SM) {
          const MM = OM[PM],
            rM = iM.data[PM];
          aM.push({
            key: {
              status: "valid",
              value: PM
            },
            value: MM._parse(new uM(iM, rM, iM.path, PM)),
            alwaysSet: PM in iM.data
          })
        }
        if (this._def.catchall instanceof cM) {
          const MM = this._def.unknownKeys;
          if ("passthrough" === MM)
            for (const rM of jM) aM.push({
              key: {
                status: "valid",
                value: rM
              },
              value: {
                status: "valid",
                value: iM.data[rM]
              }
            });
          else if ("strict" === MM) jM.length > 0 && (lM(iM, {
            code: mM.unrecognized_keys,
            keys: jM
          }), rM.fh());
          else if ("strip" !== MM) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const MM = this._def.catchall;
          for (const rM of jM) {
            const OM = iM.data[rM];
            aM.push({
              key: {
                status: "valid",
                value: rM
              },
              value: MM._parse(new uM(iM, OM, iM.path, rM)),
              alwaysSet: rM in iM.data
            })
          }
        }
        return iM.common.async ? Promise.resolve().then((async () => {
          const MM = [];
          for (const rM of aM) {
            const iM = await rM.key;
            MM.push({
              key: iM,
              value: await rM.value,
              alwaysSet: rM.alwaysSet
            })
          }
          return MM
        })).then((MM => EM.mergeObjectSync(rM, MM))) : EM.mergeObjectSync(rM, aM)
      }
      get shape() {
        return this._def.shape()
      }
      strict(MM) {
        return gM.errToObj, new Or({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== MM ? {
            errorMap: (rM, iM) => {
              var OM, SM, jM, aM;
              const PM = null !== (jM = null === (SM = (OM = this._def).errorMap) || void 0 === SM ? void 0 : SM.call(OM, rM, iM).message) && void 0 !== jM ? jM : iM.defaultError;
              return "unrecognized_keys" === rM.code ? {
                message: null !== (aM = gM.errToObj(MM).message) && void 0 !== aM ? aM : PM
              } : {
                message: PM
              }
            }
          } : {}
        })
      }
      strip() {
        return new Or({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new Or({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(MM) {
        return new Or({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...MM
          })
        })
      }
      merge(MM) {
        return new Or({
          unknownKeys: MM._def.unknownKeys,
          catchall: MM._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...MM._def.shape()
          }),
          typeName: sr.ZodObject
        })
      }
      setKey(MM, rM) {
        return this.augment({
          [MM]: rM
        })
      }
      catchall(MM) {
        return new Or({
          ...this._def,
          catchall: MM
        })
      }
      LH(MM) {
        const rM = {};
        return PM.objectKeys(MM).forEach((iM => {
          MM[iM] && this.shape[iM] && (rM[iM] = this.shape[iM])
        })), new Or({
          ...this._def,
          shape: () => rM
        })
      }
      omit(MM) {
        const rM = {};
        return PM.objectKeys(this.shape).forEach((iM => {
          MM[iM] || (rM[iM] = this.shape[iM])
        })), new Or({
          ...this._def,
          shape: () => rM
        })
      }
      deepPartial() {
        return ir(this)
      }
      partial(MM) {
        const rM = {};
        return PM.objectKeys(this.shape).forEach((iM => {
          const OM = this.shape[iM];
          MM && !MM[iM] ? rM[iM] = OM : rM[iM] = OM.optional()
        })), new Or({
          ...this._def,
          shape: () => rM
        })
      }
      required(MM) {
        const rM = {};
        return PM.objectKeys(this.shape).forEach((iM => {
          if (MM && !MM[iM]) rM[iM] = this.shape[iM];
          else {
            let MM = this.shape[iM];
            for (; MM instanceof Gr;) MM = MM._def.innerType;
            rM[iM] = MM
          }
        })), new Or({
          ...this._def,
          shape: () => rM
        })
      }
      keyof() {
        return dr(PM.objectKeys(this.shape))
      }
    }
    Or.create = (MM, rM) => new Or({
      shape: () => MM,
      unknownKeys: "strip",
      catchall: cM.create(),
      typeName: sr.ZodObject,
      ...pM(rM)
    }), Or.strictCreate = (MM, rM) => new Or({
      shape: () => MM,
      unknownKeys: "strict",
      catchall: cM.create(),
      typeName: sr.ZodObject,
      ...pM(rM)
    }), Or.lazycreate = (MM, rM) => new Or({
      shape: MM,
      unknownKeys: "strip",
      catchall: cM.create(),
      typeName: sr.ZodObject,
      ...pM(rM)
    });
    class Sr extends WM {
      _parse(MM) {
        const {
          ctx: rM
        } = this._processInputParams(MM), iM = this._def.options;
        if (rM.common.async) return Promise.all(iM.map((async MM => {
          const iM = {
            ...rM,
            common: {
              ...rM.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await MM._parseAsync({
              data: rM.data,
              path: rM.path,
              parent: iM
            }),
            ctx: iM
          }
        }))).then((function(MM) {
          for (const rM of MM)
            if ("valid" === rM.result.status) return rM.result;
          for (const OM of MM)
            if ("fh" === OM.result.status) return rM.common.issues.push(...OM.ctx.common.issues), OM.result;
          const iM = MM.map((MM => new HM(MM.ctx.common.issues)));
          return lM(rM, {
            code: mM.invalid_union,
            unionErrors: iM
          }), UM
        }));
        {
          let MM;
          const OM = [];
          for (const jM of iM) {
            const iM = {
                ...rM,
                common: {
                  ...rM.common,
                  issues: []
                },
                parent: null
              },
              SM = jM._parseSync({
                data: rM.data,
                path: rM.path,
                parent: iM
              });
            if ("valid" === SM.status) return SM;
            "fh" !== SM.status || MM || (MM = {
              result: SM,
              ctx: iM
            }), iM.common.issues.length && OM.push(iM.common.issues)
          }
          if (MM) return rM.common.issues.push(...MM.ctx.common.issues), MM.result;
          const SM = OM.map((MM => new HM(MM)));
          return lM(rM, {
            code: mM.invalid_union,
            unionErrors: SM
          }), UM
        }
      }
      get options() {
        return this._def.options
      }
    }
    Sr.create = (MM, rM) => new Sr({
      options: MM,
      typeName: sr.ZodUnion,
      ...pM(rM)
    });
    const jr = MM => MM instanceof hr ? jr(MM.schema) : MM instanceof Ur ? jr(MM.innerType()) : MM instanceof Jr ? [MM.value] : MM instanceof yr ? MM.options : MM instanceof lr ? Object.keys(MM.enum) : MM instanceof er ? jr(MM._def.innerType) : MM instanceof KM ? [void 0] : MM instanceof qM ? [null] : null;
    class ar extends WM {
      _parse(MM) {
        const {
          ctx: rM
        } = this._processInputParams(MM);
        if (rM.parsedType !== zM.object) return lM(rM, {
          code: mM.invalid_type,
          expected: zM.object,
          received: rM.parsedType
        }), UM;
        const iM = this.discriminator,
          OM = rM.data[iM],
          SM = this.optionsMap.get(OM);
        return SM ? rM.common.async ? SM._parseAsync({
          data: rM.data,
          path: rM.path,
          parent: rM
        }) : SM._parseSync({
          data: rM.data,
          path: rM.path,
          parent: rM
        }) : (lM(rM, {
          code: mM.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [iM]
        }), UM)
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
      static create(MM, rM, iM) {
        const OM = new Map;
        for (const SM of rM) {
          const rM = jr(SM.shape[MM]);
          if (!rM) throw new Error(`A discriminator value for key \`${MM}\` could not be extracted from all schema options`);
          for (const iM of rM) {
            if (OM.has(iM)) throw new Error(`Discriminator property ${String(MM)} has duplicate value ${String(iM)}`);
            OM.set(iM, SM)
          }
        }
        return new ar({
          typeName: sr.ZodDiscriminatedUnion,
          discriminator: MM,
          options: rM,
          optionsMap: OM,
          ...pM(iM)
        })
      }
    }

    function Pr(MM, rM) {
      const iM = LM(MM),
        OM = LM(rM);
      if (MM === rM) return {
        valid: !0,
        data: MM
      };
      if (iM === zM.object && OM === zM.object) {
        const iM = PM.objectKeys(rM),
          OM = PM.objectKeys(MM).filter((MM => -1 !== iM.indexOf(MM))),
          SM = {
            ...MM,
            ...rM
          };
        for (const jM of OM) {
          const iM = Pr(MM[jM], rM[jM]);
          if (!iM.valid) return {
            valid: !1
          };
          SM[jM] = iM.data
        }
        return {
          valid: !0,
          data: SM
        }
      }
      if (iM === zM.array && OM === zM.array) {
        if (MM.length !== rM.length) return {
          valid: !1
        };
        const iM = [];
        for (let OM = 0; OM < MM.length; OM++) {
          const SM = Pr(MM[OM], rM[OM]);
          if (!SM.valid) return {
            valid: !1
          };
          iM.push(SM.data)
        }
        return {
          valid: !0,
          data: iM
        }
      }
      return iM === zM.date && OM === zM.date && +MM === +rM ? {
        valid: !0,
        data: MM
      } : {
        valid: !1
      }
    }
    class nr extends WM {
      _parse(MM) {
        const {
          status: rM,
          ctx: iM
        } = this._processInputParams(MM), OM = (MM, OM) => {
          if (eM(MM) || eM(OM)) return UM;
          const SM = Pr(MM.value, OM.value);
          return SM.valid ? ((bM(MM) || bM(OM)) && rM.fh(), {
            status: rM.value,
            value: SM.data
          }) : (lM(iM, {
            code: mM.invalid_intersection_types
          }), UM)
        };
        return iM.common.async ? Promise.all([this._def.left._parseAsync({
          data: iM.data,
          path: iM.path,
          parent: iM
        }), this._def.right._parseAsync({
          data: iM.data,
          path: iM.path,
          parent: iM
        })]).then((MM => {
          let [rM, iM] = MM;
          return OM(rM, iM)
        })) : OM(this._def.left._parseSync({
          data: iM.data,
          path: iM.path,
          parent: iM
        }), this._def.right._parseSync({
          data: iM.data,
          path: iM.path,
          parent: iM
        }))
      }
    }
    nr.create = (MM, rM, iM) => new nr({
      left: MM,
      right: rM,
      typeName: sr.ZodIntersection,
      ...pM(iM)
    });
    class Qr extends WM {
      _parse(MM) {
        const {
          status: rM,
          ctx: iM
        } = this._processInputParams(MM);
        if (iM.parsedType !== zM.array) return lM(iM, {
          code: mM.invalid_type,
          expected: zM.array,
          received: iM.parsedType
        }), UM;
        if (iM.data.length < this._def.items.length) return lM(iM, {
          code: mM.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), UM;
        !this._def.rest && iM.data.length > this._def.items.length && (lM(iM, {
          code: mM.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), rM.fh());
        const OM = [...iM.data].map(((MM, rM) => {
          const OM = this._def.items[rM] || this._def.rest;
          return OM ? OM._parse(new uM(iM, MM, iM.path, rM)) : null
        })).filter((MM => !!MM));
        return iM.common.async ? Promise.all(OM).then((MM => EM.mergeArray(rM, MM))) : EM.mergeArray(rM, OM)
      }
      get items() {
        return this._def.items
      }
      rest(MM) {
        return new Qr({
          ...this._def,
          rest: MM
        })
      }
    }
    Qr.create = (MM, rM) => {
      if (!Array.isArray(MM)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new Qr({
        items: MM,
        typeName: sr.ZodTuple,
        rest: null,
        ...pM(rM)
      })
    };
    class zr extends WM {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(MM) {
        const {
          status: rM,
          ctx: iM
        } = this._processInputParams(MM);
        if (iM.parsedType !== zM.object) return lM(iM, {
          code: mM.invalid_type,
          expected: zM.object,
          received: iM.parsedType
        }), UM;
        const OM = [],
          SM = this._def.keyType,
          jM = this._def.valueType;
        for (const aM in iM.data) OM.push({
          key: SM._parse(new uM(iM, aM, iM.path, aM)),
          value: jM._parse(new uM(iM, iM.data[aM], iM.path, aM))
        });
        return iM.common.async ? EM.mergeObjectAsync(rM, OM) : EM.mergeObjectSync(rM, OM)
      }
      get element() {
        return this._def.valueType
      }
      static create(MM, rM, iM) {
        return new zr(rM instanceof WM ? {
          keyType: MM,
          valueType: rM,
          typeName: sr.ZodRecord,
          ...pM(iM)
        } : {
          keyType: AM.create(),
          valueType: MM,
          typeName: sr.ZodRecord,
          ...pM(rM)
        })
      }
    }
    class Lr extends WM {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(MM) {
        const {
          status: rM,
          ctx: iM
        } = this._processInputParams(MM);
        if (iM.parsedType !== zM.map) return lM(iM, {
          code: mM.invalid_type,
          expected: zM.map,
          received: iM.parsedType
        }), UM;
        const OM = this._def.keyType,
          SM = this._def.valueType,
          jM = [...iM.data.entries()].map(((MM, rM) => {
            let [jM, aM] = MM;
            return {
              key: OM._parse(new uM(iM, jM, iM.path, [rM, "key"])),
              value: SM._parse(new uM(iM, aM, iM.path, [rM, "value"]))
            }
          }));
        if (iM.common.async) {
          const MM = new Map;
          return Promise.resolve().then((async () => {
            for (const iM of jM) {
              const OM = await iM.key,
                SM = await iM.value;
              if ("aborted" === OM.status || "aborted" === SM.status) return UM;
              "fh" !== OM.status && "fh" !== SM.status || rM.fh(), MM.set(OM.value, SM.value)
            }
            return {
              status: rM.value,
              value: MM
            }
          }))
        } {
          const MM = new Map;
          for (const iM of jM) {
            const OM = iM.key,
              SM = iM.value;
            if ("aborted" === OM.status || "aborted" === SM.status) return UM;
            "fh" !== OM.status && "fh" !== SM.status || rM.fh(), MM.set(OM.value, SM.value)
          }
          return {
            status: rM.value,
            value: MM
          }
        }
      }
    }
    Lr.create = (MM, rM, iM) => new Lr({
      valueType: rM,
      keyType: MM,
      typeName: sr.ZodMap,
      ...pM(iM)
    });
    class mr extends WM {
      _parse(MM) {
        const {
          status: rM,
          ctx: iM
        } = this._processInputParams(MM);
        if (iM.parsedType !== zM.set) return lM(iM, {
          code: mM.invalid_type,
          expected: zM.set,
          received: iM.parsedType
        }), UM;
        const OM = this._def;
        null !== OM.minSize && iM.data.size < OM.minSize.value && (lM(iM, {
          code: mM.too_small,
          minimum: OM.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: OM.minSize.message
        }), rM.fh()), null !== OM.maxSize && iM.data.size > OM.maxSize.value && (lM(iM, {
          code: mM.too_big,
          maximum: OM.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: OM.maxSize.message
        }), rM.fh());
        const SM = this._def.valueType;

        function jM(MM) {
          const iM = new Set;
          for (const OM of MM) {
            if ("aborted" === OM.status) return UM;
            "fh" === OM.status && rM.fh(), iM.add(OM.value)
          }
          return {
            status: rM.value,
            value: iM
          }
        }
        const aM = [...iM.data.values()].map(((MM, rM) => SM._parse(new uM(iM, MM, iM.path, rM))));
        return iM.common.async ? Promise.all(aM).then((MM => jM(MM))) : jM(aM)
      }
      min(MM, rM) {
        return new mr({
          ...this._def,
          minSize: {
            value: MM,
            message: gM.toString(rM)
          }
        })
      }
      max(MM, rM) {
        return new mr({
          ...this._def,
          maxSize: {
            value: MM,
            message: gM.toString(rM)
          }
        })
      }
      size(MM, rM) {
        return this.min(MM, rM).max(MM, rM)
      }
      nonempty(MM) {
        return this.min(1, MM)
      }
    }
    mr.create = (MM, rM) => new mr({
      valueType: MM,
      minSize: null,
      maxSize: null,
      typeName: sr.ZodSet,
      ...pM(rM)
    });
    class Hr extends WM {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(MM) {
        const {
          ctx: rM
        } = this._processInputParams(MM);
        if (rM.parsedType !== zM.function) return lM(rM, {
          code: mM.invalid_type,
          expected: zM.function,
          received: rM.parsedType
        }), UM;

        function iM(MM, iM) {
          return yM({
            data: MM,
            path: rM.path,
            errorMaps: [rM.common.contextualErrorMap, rM.schemaErrorMap, dM(), hM].filter((MM => !!MM)),
            issueData: {
              code: mM.invalid_arguments,
              argumentsError: iM
            }
          })
        }

        function OM(MM, iM) {
          return yM({
            data: MM,
            path: rM.path,
            errorMaps: [rM.common.contextualErrorMap, rM.schemaErrorMap, dM(), hM].filter((MM => !!MM)),
            issueData: {
              code: mM.invalid_return_type,
              returnTypeError: iM
            }
          })
        }
        const SM = {
            errorMap: rM.common.contextualErrorMap
          },
          jM = rM.data;
        if (this._def.returns instanceof Er) {
          const MM = this;
          return CM((async function() {
            for (var rM = arguments.length, aM = new Array(rM), PM = 0; PM < rM; PM++) aM[PM] = arguments[PM];
            const nM = new HM([]),
              QM = await MM._def.args.parseAsync(aM, SM).catch((MM => {
                throw nM.addIssue(iM(aM, MM)), nM
              })),
              zM = await Reflect.apply(jM, this, QM);
            return await MM._def.returns._def.type.parseAsync(zM, SM).catch((MM => {
              throw nM.addIssue(OM(zM, MM)), nM
            }))
          }))
        } {
          const MM = this;
          return CM((function() {
            for (var rM = arguments.length, aM = new Array(rM), PM = 0; PM < rM; PM++) aM[PM] = arguments[PM];
            const nM = MM._def.args.safeParse(aM, SM);
            if (!nM.success) throw new HM([iM(aM, nM.error)]);
            const QM = Reflect.apply(jM, this, nM.data),
              zM = MM._def.returns.safeParse(QM, SM);
            if (!zM.success) throw new HM([OM(QM, zM.error)]);
            return zM.data
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
        for (var MM = arguments.length, rM = new Array(MM), iM = 0; iM < MM; iM++) rM[iM] = arguments[iM];
        return new Hr({
          ...this._def,
          args: Qr.create(rM).rest(VM.create())
        })
      }
      returns(MM) {
        return new Hr({
          ...this._def,
          returns: MM
        })
      }
      implement(MM) {
        return this.parse(MM)
      }
      strictImplement(MM) {
        return this.parse(MM)
      }
      static create(MM, rM, iM) {
        return new Hr({
          args: MM || Qr.create([]).rest(VM.create()),
          returns: rM || VM.create(),
          typeName: sr.ZodFunction,
          ...pM(iM)
        })
      }
    }
    class hr extends WM {
      get schema() {
        return this._def.getter()
      }
      _parse(MM) {
        const {
          ctx: rM
        } = this._processInputParams(MM);
        return this._def.getter()._parse({
          data: rM.data,
          path: rM.path,
          parent: rM
        })
      }
    }
    hr.create = (MM, rM) => new hr({
      getter: MM,
      typeName: sr.ZodLazy,
      ...pM(rM)
    });
    class Jr extends WM {
      _parse(MM) {
        if (MM.data !== this._def.value) {
          const rM = this._getOrReturnCtx(MM);
          return lM(rM, {
            received: rM.data,
            code: mM.invalid_literal,
            expected: this._def.value
          }), UM
        }
        return {
          status: "valid",
          value: MM.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function dr(MM, rM) {
      return new yr({
        values: MM,
        typeName: sr.ZodEnum,
        ...pM(rM)
      })
    }
    Jr.create = (MM, rM) => new Jr({
      value: MM,
      typeName: sr.ZodLiteral,
      ...pM(rM)
    });
    class yr extends WM {
      _parse(MM) {
        if ("string" !== typeof MM.data) {
          const rM = this._getOrReturnCtx(MM),
            iM = this._def.values;
          return lM(rM, {
            expected: PM.joinValues(iM),
            received: rM.parsedType,
            code: mM.invalid_type
          }), UM
        }
        if (-1 === this._def.values.indexOf(MM.data)) {
          const rM = this._getOrReturnCtx(MM),
            iM = this._def.values;
          return lM(rM, {
            received: rM.data,
            code: mM.invalid_enum_value,
            options: iM
          }), UM
        }
        return CM(MM.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const MM = {};
        for (const rM of this._def.values) MM[rM] = rM;
        return MM
      }
      get Values() {
        const MM = {};
        for (const rM of this._def.values) MM[rM] = rM;
        return MM
      }
      get Enum() {
        const MM = {};
        for (const rM of this._def.values) MM[rM] = rM;
        return MM
      }
      extract(MM) {
        return yr.create(MM)
      }
      exclude(MM) {
        return yr.create(this.options.filter((rM => !MM.includes(rM))))
      }
    }
    yr.create = dr;
    class lr extends WM {
      _parse(MM) {
        const rM = PM.getValidEnumValues(this._def.values),
          iM = this._getOrReturnCtx(MM);
        if (iM.parsedType !== zM.string && iM.parsedType !== zM.number) {
          const MM = PM.objectValues(rM);
          return lM(iM, {
            expected: PM.joinValues(MM),
            received: iM.parsedType,
            code: mM.invalid_type
          }), UM
        }
        if (-1 === rM.indexOf(MM.data)) {
          const MM = PM.objectValues(rM);
          return lM(iM, {
            received: iM.data,
            code: mM.invalid_enum_value,
            options: MM
          }), UM
        }
        return CM(MM.data)
      }
      get enum() {
        return this._def.values
      }
    }
    lr.create = (MM, rM) => new lr({
      values: MM,
      typeName: sr.ZodNativeEnum,
      ...pM(rM)
    });
    class Er extends WM {
      unwrap() {
        return this._def.type
      }
      _parse(MM) {
        const {
          ctx: rM
        } = this._processInputParams(MM);
        if (rM.parsedType !== zM.promise && !1 === rM.common.async) return lM(rM, {
          code: mM.invalid_type,
          expected: zM.promise,
          received: rM.parsedType
        }), UM;
        const iM = rM.parsedType === zM.promise ? rM.data : Promise.resolve(rM.data);
        return CM(iM.then((MM => this._def.type.parseAsync(MM, {
          path: rM.path,
          errorMap: rM.common.contextualErrorMap
        }))))
      }
    }
    Er.create = (MM, rM) => new Er({
      type: MM,
      typeName: sr.ZodPromise,
      ...pM(rM)
    });
    class Ur extends WM {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === sr.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(MM) {
        const {
          status: rM,
          ctx: iM
        } = this._processInputParams(MM), OM = this._def.effect || null, SM = {
          addIssue: MM => {
            lM(iM, MM), MM.fatal ? rM.abort() : rM.fh()
          },
          get path() {
            return iM.path
          }
        };
        if (SM.addIssue = SM.addIssue.bind(SM), "preprocess" === OM.type) {
          const MM = OM.transform(iM.data, SM);
          return iM.common.issues.length ? {
            status: "fh",
            value: iM.data
          } : iM.common.async ? Promise.resolve(MM).then((MM => this._def.schema._parseAsync({
            data: MM,
            path: iM.path,
            parent: iM
          }))) : this._def.schema._parseSync({
            data: MM,
            path: iM.path,
            parent: iM
          })
        }
        if ("refinement" === OM.type) {
          const MM = MM => {
            const rM = OM.refinement(MM, SM);
            if (iM.common.async) return Promise.resolve(rM);
            if (rM instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return MM
          };
          if (!1 === iM.common.async) {
            const OM = this._def.schema._parseSync({
              data: iM.data,
              path: iM.path,
              parent: iM
            });
            return "aborted" === OM.status ? UM : ("fh" === OM.status && rM.fh(), MM(OM.value), {
              status: rM.value,
              value: OM.value
            })
          }
          return this._def.schema._parseAsync({
            data: iM.data,
            path: iM.path,
            parent: iM
          }).then((iM => "aborted" === iM.status ? UM : ("fh" === iM.status && rM.fh(), MM(iM.value).then((() => ({
            status: rM.value,
            value: iM.value
          }))))))
        }
        if ("transform" === OM.type) {
          if (!1 === iM.common.async) {
            const MM = this._def.schema._parseSync({
              data: iM.data,
              path: iM.path,
              parent: iM
            });
            if (!wM(MM)) return MM;
            const jM = OM.transform(MM.value, SM);
            if (jM instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: rM.value,
              value: jM
            }
          }
          return this._def.schema._parseAsync({
            data: iM.data,
            path: iM.path,
            parent: iM
          }).then((MM => wM(MM) ? Promise.resolve(OM.transform(MM.value, SM)).then((MM => ({
            status: rM.value,
            value: MM
          }))) : MM))
        }
        PM.assertNever(OM)
      }
    }
    Ur.create = (MM, rM, iM) => new Ur({
      schema: MM,
      typeName: sr.ZodEffects,
      effect: rM,
      ...pM(iM)
    }), Ur.createWithPreprocess = (MM, rM, iM) => new Ur({
      schema: rM,
      effect: {
        type: "preprocess",
        transform: MM
      },
      typeName: sr.ZodEffects,
      ...pM(iM)
    });
    class Gr extends WM {
      _parse(MM) {
        return this._getType(MM) === zM.undefined ? CM(void 0) : this._def.innerType._parse(MM)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Gr.create = (MM, rM) => new Gr({
      innerType: MM,
      typeName: sr.ZodOptional,
      ...pM(rM)
    });
    class Cr extends WM {
      _parse(MM) {
        return this._getType(MM) === zM.null ? CM(null) : this._def.innerType._parse(MM)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Cr.create = (MM, rM) => new Cr({
      innerType: MM,
      typeName: sr.ZodNullable,
      ...pM(rM)
    });
    class er extends WM {
      _parse(MM) {
        const {
          ctx: rM
        } = this._processInputParams(MM);
        let iM = rM.data;
        return rM.parsedType === zM.undefined && (iM = this._def.defaultValue()), this._def.innerType._parse({
          data: iM,
          path: rM.path,
          parent: rM
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    er.create = (MM, rM) => new er({
      innerType: MM,
      typeName: sr.ZodDefault,
      defaultValue: "function" === typeof rM.default ? rM.default : () => rM.default,
      ...pM(rM)
    });
    class br extends WM {
      _parse(MM) {
        const {
          ctx: rM
        } = this._processInputParams(MM), iM = {
          ...rM,
          common: {
            ...rM.common,
            issues: []
          }
        }, OM = this._def.innerType._parse({
          data: iM.data,
          path: iM.path,
          parent: {
            ...iM
          }
        });
        return tM(OM) ? OM.then((MM => ({
          status: "valid",
          value: "valid" === MM.status ? MM.value : this._def.catchValue({
            get error() {
              return new HM(iM.common.issues)
            },
            input: iM.data
          })
        }))) : {
          status: "valid",
          value: "valid" === OM.status ? OM.value : this._def.catchValue({
            get error() {
              return new HM(iM.common.issues)
            },
            input: iM.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    br.create = (MM, rM) => new br({
      innerType: MM,
      typeName: sr.ZodCatch,
      catchValue: "function" === typeof rM.catch ? rM.catch : () => rM.catch,
      ...pM(rM)
    });
    class wr extends WM {
      _parse(MM) {
        if (this._getType(MM) !== zM.nan) {
          const rM = this._getOrReturnCtx(MM);
          return lM(rM, {
            code: mM.invalid_type,
            expected: zM.nan,
            received: rM.parsedType
          }), UM
        }
        return {
          status: "valid",
          value: MM.data
        }
      }
    }
    wr.create = MM => new wr({
      typeName: sr.ZodNaN,
      ...pM(MM)
    });
    const tr = Symbol("zod_brand");
    class gr extends WM {
      _parse(MM) {
        const {
          ctx: rM
        } = this._processInputParams(MM), iM = rM.data;
        return this._def.type._parse({
          data: iM,
          path: rM.path,
          parent: rM
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class ur extends WM {
      _parse(MM) {
        const {
          status: rM,
          ctx: iM
        } = this._processInputParams(MM);
        if (iM.common.async) {
          return (async () => {
            const MM = await this._def.in._parseAsync({
              data: iM.data,
              path: iM.path,
              parent: iM
            });
            return "aborted" === MM.status ? UM : "fh" === MM.status ? (rM.fh(), GM(MM.value)) : this._def.out._parseAsync({
              data: MM.value,
              path: iM.path,
              parent: iM
            })
          })()
        } {
          const MM = this._def.in._parseSync({
            data: iM.data,
            path: iM.path,
            parent: iM
          });
          return "aborted" === MM.status ? UM : "fh" === MM.status ? (rM.fh(), {
            status: "fh",
            value: MM.value
          }) : this._def.out._parseSync({
            data: MM.value,
            path: iM.path,
            parent: iM
          })
        }
      }
      static create(MM, rM) {
        return new ur({
          in: MM,
          out: rM,
          typeName: sr.ZodPipeline
        })
      }
    }
    class Rr extends WM {
      _parse(MM) {
        const rM = this._def.innerType._parse(MM);
        return wM(rM) && (rM.value = Object.freeze(rM.value)), rM
      }
    }
    Rr.create = (MM, rM) => new Rr({
      innerType: MM,
      typeName: sr.ZodReadonly,
      ...pM(rM)
    });
    const pr = function(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          iM = arguments.length > 2 ? arguments[2] : void 0;
        return MM ? TM.create().superRefine(((OM, SM) => {
          var jM, aM;
          if (!MM(OM)) {
            const MM = "function" === typeof rM ? rM(OM) : "string" === typeof rM ? {
                message: rM
              } : rM,
              PM = null === (aM = null !== (jM = MM.fatal) && void 0 !== jM ? jM : iM) || void 0 === aM || aM,
              nM = "string" === typeof MM ? {
                message: MM
              } : MM;
            SM.addIssue({
              code: "custom",
              ...nM,
              fatal: PM
            })
          }
        })) : TM.create()
      },
      Wr = {
        object: Or.lazycreate
      };
    var sr;
    ! function(MM) {
      MM.ZodString = "ZodString", MM.ZodNumber = "ZodNumber", MM.ZodNaN = "ZodNaN", MM.ZodBigInt = "ZodBigInt", MM.ZodBoolean = "ZodBoolean", MM.ZodDate = "ZodDate", MM.ZodSymbol = "ZodSymbol", MM.ZodUndefined = "ZodUndefined", MM.ZodNull = "ZodNull", MM.ZodAny = "ZodAny", MM.ZodUnknown = "ZodUnknown", MM.ZodNever = "ZodNever", MM.ZodVoid = "ZodVoid", MM.ZodArray = "ZodArray", MM.ZodObject = "ZodObject", MM.ZodUnion = "ZodUnion", MM.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", MM.ZodIntersection = "ZodIntersection", MM.ZodTuple = "ZodTuple", MM.ZodRecord = "ZodRecord", MM.ZodMap = "ZodMap", MM.ZodSet = "ZodSet", MM.ZodFunction = "ZodFunction", MM.ZodLazy = "ZodLazy", MM.ZodLiteral = "ZodLiteral", MM.ZodEnum = "ZodEnum", MM.ZodEffects = "ZodEffects", MM.ZodNativeEnum = "ZodNativeEnum", MM.ZodOptional = "ZodOptional", MM.ZodNullable = "ZodNullable", MM.ZodDefault = "ZodDefault", MM.ZodCatch = "ZodCatch", MM.ZodPromise = "ZodPromise", MM.ZodBranded = "ZodBranded", MM.ZodPipeline = "ZodPipeline", MM.ZodReadonly = "ZodReadonly"
    }(sr || (sr = {}));
    const Dr = AM.create,
      kr = vM.create,
      Zr = wr.create,
      or = FM.create,
      fr = BM.create,
      Yr = XM.create,
      Nr = IM.create,
      Ar = KM.create,
      xr = qM.create,
      vr = TM.create,
      Fr = VM.create,
      Br = cM.create,
      Xr = Mr.create,
      Ir = rr.create,
      Kr = Or.create,
      qr = Or.strictCreate,
      Tr = Sr.create,
      Vr = ar.create,
      cr = nr.create,
      Mi = Qr.create,
      ri = zr.create,
      ii = Lr.create,
      Oi = mr.create,
      Si = Hr.create,
      ji = hr.create,
      ai = Jr.create,
      Pi = yr.create,
      ni = lr.create,
      Qi = Er.create,
      zi = Ur.create,
      Li = Gr.create,
      mi = Cr.create,
      Hi = Ur.createWithPreprocess,
      Ji = ur.create,
      di = {
        string: MM => AM.create({
          ...MM,
          coerce: !0
        }),
        number: MM => vM.create({
          ...MM,
          coerce: !0
        }),
        boolean: MM => BM.create({
          ...MM,
          coerce: !0
        }),
        bigint: MM => FM.create({
          ...MM,
          coerce: !0
        }),
        date: MM => XM.create({
          ...MM,
          coerce: !0
        })
      },
      yi = UM;
    var li = Object.freeze({
        __proto__: null,
        defaultErrorMap: hM,
        setErrorMap: function(MM) {
          JM = MM
        },
        getErrorMap: dM,
        makeIssue: yM,
        EMPTY_PATH: [],
        addIssueToContext: lM,
        ParseStatus: EM,
        INVALID: UM,
        DIRTY: GM,
        OK: CM,
        isAborted: eM,
        isDirty: bM,
        isValid: wM,
        isAsync: tM,
        get util() {
          return PM
        },
        get objectUtil() {
          return nM
        },
        ZodParsedType: zM,
        getParsedType: LM,
        ZodType: WM,
        ZodString: AM,
        ZodNumber: vM,
        ZodBigInt: FM,
        ZodBoolean: BM,
        ZodDate: XM,
        ZodSymbol: IM,
        ZodUndefined: KM,
        ZodNull: qM,
        ZodAny: TM,
        ZodUnknown: VM,
        ZodNever: cM,
        ZodVoid: Mr,
        ZodArray: rr,
        ZodObject: Or,
        ZodUnion: Sr,
        ZodDiscriminatedUnion: ar,
        ZodIntersection: nr,
        ZodTuple: Qr,
        ZodRecord: zr,
        ZodMap: Lr,
        ZodSet: mr,
        ZodFunction: Hr,
        ZodLazy: hr,
        ZodLiteral: Jr,
        ZodEnum: yr,
        ZodNativeEnum: lr,
        ZodPromise: Er,
        ZodEffects: Ur,
        ZodTransformer: Ur,
        ZodOptional: Gr,
        ZodNullable: Cr,
        ZodDefault: er,
        ZodCatch: br,
        ZodNaN: wr,
        BRAND: tr,
        ZodBranded: gr,
        ZodPipeline: ur,
        ZodReadonly: Rr,
        custom: pr,
        Schema: WM,
        ZodSchema: WM,
        late: Wr,
        get ZodFirstPartyTypeKind() {
          return sr
        },
        coerce: di,
        any: vr,
        array: Ir,
        bigint: or,
        boolean: fr,
        date: Yr,
        discriminatedUnion: Vr,
        effect: zi,
        enum: Pi,
        function: Si,
        instanceof: function(MM) {
          let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${MM.name}`
          };
          return pr((rM => rM instanceof MM), rM)
        },
        intersection: cr,
        lazy: ji,
        literal: ai,
        map: ii,
        nan: Zr,
        nativeEnum: ni,
        never: Br,
        null: xr,
        nullable: mi,
        number: kr,
        object: Kr,
        oboolean: () => fr().optional(),
        onumber: () => kr().optional(),
        optional: Li,
        ostring: () => Dr().optional(),
        pipeline: Ji,
        preprocess: Hi,
        promise: Qi,
        record: ri,
        set: Oi,
        strictObject: qr,
        string: Dr,
        symbol: Nr,
        transformer: zi,
        tuple: Mi,
        undefined: Ar,
        union: Tr,
        unknown: Fr,
        void: Xr,
        NEVER: yi,
        ZodIssueCode: mM,
        quotelessJson: MM => JSON.stringify(MM, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: HM
      }),
      Ei = {
        exports: {}
      };
    ! function(MM) {
      var rM = function(MM) {
        var iM = 1e7,
          OM = 9007199254740992,
          SM = mM(OM),
          jM = "0123456789abcdefghijklmnopqrstuvwxyz",
          aM = "function" === typeof BigInt;

        function PM(MM, rM, iM, OM) {
          return "undefined" === typeof MM ? PM[0] : "undefined" !== typeof rM && (10 !== +rM || iM) ? BM(MM, rM, iM, OM) : TM(MM)
        }

        function nM(MM, rM) {
          this.value = MM, this.sign = rM, this.isSmall = !1
        }

        function QM(MM) {
          this.value = MM, this.sign = MM < 0, this.isSmall = !0
        }

        function zM(MM) {
          this.value = MM
        }

        function LM(MM) {
          return -OM < MM && MM < OM
        }

        function mM(MM) {
          return MM < 1e7 ? [MM] : MM < 1e14 ? [MM % 1e7, Math.floor(MM / 1e7)] : [MM % 1e7, Math.floor(MM / 1e7) % 1e7, Math.floor(MM / 1e14)]
        }

        function HM(MM) {
          hM(MM);
          var rM = MM.length;
          if (rM < 4 && pM(MM, SM) < 0) switch (rM) {
            case 0:
              return 0;
            case 1:
              return MM[0];
            case 2:
              return MM[0] + MM[1] * iM;
            default:
              return MM[0] + (MM[1] + MM[2] * iM) * iM
          }
          return MM
        }

        function hM(MM) {
          for (var rM = MM.length; 0 === MM[--rM];);
          MM.length = rM + 1
        }

        function JM(MM) {
          for (var rM = new Array(MM), iM = -1; ++iM < MM;) rM[iM] = 0;
          return rM
        }

        function dM(MM) {
          return MM > 0 ? Math.floor(MM) : Math.ceil(MM)
        }

        function yM(MM, rM) {
          var OM, SM, jM = MM.length,
            aM = rM.length,
            PM = new Array(jM),
            nM = 0,
            QM = iM;
          for (SM = 0; SM < aM; SM++) nM = (OM = MM[SM] + rM[SM] + nM) >= QM ? 1 : 0, PM[SM] = OM - nM * QM;
          for (; SM < jM;) nM = (OM = MM[SM] + nM) === QM ? 1 : 0, PM[SM++] = OM - nM * QM;
          return nM > 0 && PM.push(nM), PM
        }

        function lM(MM, rM) {
          return MM.length >= rM.length ? yM(MM, rM) : yM(rM, MM)
        }

        function EM(MM, rM) {
          var OM, SM, jM = MM.length,
            aM = new Array(jM),
            PM = iM;
          for (SM = 0; SM < jM; SM++) OM = MM[SM] - PM + rM, rM = Math.floor(OM / PM), aM[SM] = OM - rM * PM, rM += 1;
          for (; rM > 0;) aM[SM++] = rM % PM, rM = Math.floor(rM / PM);
          return aM
        }

        function UM(MM, rM) {
          var OM, SM, jM = MM.length,
            aM = rM.length,
            PM = new Array(jM),
            nM = 0,
            QM = iM;
          for (OM = 0; OM < aM; OM++)(SM = MM[OM] - nM - rM[OM]) < 0 ? (SM += QM, nM = 1) : nM = 0, PM[OM] = SM;
          for (OM = aM; OM < jM; OM++) {
            if (!((SM = MM[OM] - nM) < 0)) {
              PM[OM++] = SM;
              break
            }
            SM += QM, PM[OM] = SM
          }
          for (; OM < jM; OM++) PM[OM] = MM[OM];
          return hM(PM), PM
        }

        function GM(MM, rM, OM) {
          var SM, jM, aM = MM.length,
            PM = new Array(aM),
            zM = -rM,
            LM = iM;
          for (SM = 0; SM < aM; SM++) jM = MM[SM] + zM, zM = Math.floor(jM / LM), jM %= LM, PM[SM] = jM < 0 ? jM + LM : jM;
          return "number" === typeof(PM = HM(PM)) ? (OM && (PM = -PM), new QM(PM)) : new nM(PM, OM)
        }

        function CM(MM, rM) {
          var OM, SM, jM, aM, PM = MM.length,
            nM = rM.length,
            QM = JM(PM + nM),
            zM = iM;
          for (jM = 0; jM < PM; ++jM) {
            aM = MM[jM];
            for (var LM = 0; LM < nM; ++LM) OM = aM * rM[LM] + QM[jM + LM], SM = Math.floor(OM / zM), QM[jM + LM] = OM - SM * zM, QM[jM + LM + 1] += SM
          }
          return hM(QM), QM
        }

        function eM(MM, rM) {
          var OM, SM, jM = MM.length,
            aM = new Array(jM),
            PM = iM,
            nM = 0;
          for (SM = 0; SM < jM; SM++) OM = MM[SM] * rM + nM, nM = Math.floor(OM / PM), aM[SM] = OM - nM * PM;
          for (; nM > 0;) aM[SM++] = nM % PM, nM = Math.floor(nM / PM);
          return aM
        }

        function bM(MM, rM) {
          for (var iM = []; rM-- > 0;) iM.push(0);
          return iM.concat(MM)
        }

        function wM(MM, rM) {
          var iM = Math.max(MM.length, rM.length);
          if (iM <= 30) return CM(MM, rM);
          iM = Math.ceil(iM / 2);
          var OM = MM.slice(iM),
            SM = MM.slice(0, iM),
            jM = rM.slice(iM),
            aM = rM.slice(0, iM),
            PM = wM(SM, aM),
            nM = wM(OM, jM),
            QM = wM(lM(SM, OM), lM(aM, jM)),
            zM = lM(lM(PM, bM(UM(UM(QM, PM), nM), iM)), bM(nM, 2 * iM));
          return hM(zM), zM
        }

        function tM(MM, rM, OM) {
          return new nM(MM < iM ? eM(rM, MM) : CM(rM, mM(MM)), OM)
        }

        function gM(MM) {
          var rM, OM, SM, jM, aM = MM.length,
            PM = JM(aM + aM),
            nM = iM;
          for (SM = 0; SM < aM; SM++) {
            OM = 0 - (jM = MM[SM]) * jM;
            for (var QM = SM; QM < aM; QM++) rM = jM * MM[QM] * 2 + PM[SM + QM] + OM, OM = Math.floor(rM / nM), PM[SM + QM] = rM - OM * nM;
            PM[SM + aM] = OM
          }
          return hM(PM), PM
        }

        function uM(MM, rM) {
          var OM, SM, jM, aM, PM = MM.length,
            nM = JM(PM),
            QM = iM;
          for (jM = 0, OM = PM - 1; OM >= 0; --OM) jM = (aM = jM * QM + MM[OM]) - (SM = dM(aM / rM)) * rM, nM[OM] = 0 | SM;
          return [nM, 0 | jM]
        }

        function RM(MM, rM) {
          var OM, SM = TM(rM);
          if (aM) return [new zM(MM.value / SM.value), new zM(MM.value % SM.value)];
          var jM, LM = MM.value,
            yM = SM.value;
          if (0 === yM) throw new Error("Cannot divide by zero");
          if (MM.isSmall) return SM.isSmall ? [new QM(dM(LM / yM)), new QM(LM % yM)] : [PM[0], MM];
          if (SM.isSmall) {
            if (1 === yM) return [MM, PM[0]];
            if (-1 == yM) return [MM.VJ(), PM[0]];
            var lM = Math.abs(yM);
            if (lM < iM) {
              jM = HM((OM = uM(LM, lM))[0]);
              var EM = OM[1];
              return MM.sign && (EM = -EM), "number" === typeof jM ? (MM.sign !== SM.sign && (jM = -jM), [new QM(jM), new QM(EM)]) : [new nM(jM, MM.sign !== SM.sign), new QM(EM)]
            }
            yM = mM(lM)
          }
          var GM = pM(LM, yM);
          if (-1 === GM) return [PM[0], MM];
          if (0 === GM) return [PM[MM.sign === SM.sign ? 1 : -1], PM[0]];
          OM = LM.length + yM.length <= 200 ? function(MM, rM) {
            var OM, SM, jM, aM, PM, nM, QM, zM = MM.length,
              LM = rM.length,
              mM = iM,
              hM = JM(rM.length),
              dM = rM[LM - 1],
              yM = Math.ceil(mM / (2 * dM)),
              lM = eM(MM, yM),
              EM = eM(rM, yM);
            for (lM.length <= zM && lM.push(0), EM.push(0), dM = EM[LM - 1], SM = zM - LM; SM >= 0; SM--) {
              for (OM = mM - 1, lM[SM + LM] !== dM && (OM = Math.floor((lM[SM + LM] * mM + lM[SM + LM - 1]) / dM)), jM = 0, aM = 0, nM = EM.length, PM = 0; PM < nM; PM++) jM += OM * EM[PM], QM = Math.floor(jM / mM), aM += lM[SM + PM] - (jM - QM * mM), jM = QM, aM < 0 ? (lM[SM + PM] = aM + mM, aM = -1) : (lM[SM + PM] = aM, aM = 0);
              for (; 0 !== aM;) {
                for (OM -= 1, jM = 0, PM = 0; PM < nM; PM++)(jM += lM[SM + PM] - mM + EM[PM]) < 0 ? (lM[SM + PM] = jM + mM, jM = 0) : (lM[SM + PM] = jM, jM = 1);
                aM += jM
              }
              hM[SM] = OM
            }
            return lM = uM(lM, yM)[0], [HM(hM), HM(lM)]
          }(LM, yM) : function(MM, rM) {
            for (var OM, SM, jM, aM, PM, nM = MM.length, QM = rM.length, zM = [], LM = [], mM = iM; nM;)
              if (LM.unshift(MM[--nM]), hM(LM), pM(LM, rM) < 0) zM.push(0);
              else {
                jM = LM[(SM = LM.length) - 1] * mM + LM[SM - 2], aM = rM[QM - 1] * mM + rM[QM - 2], SM > QM && (jM = (jM + 1) * mM), OM = Math.ceil(jM / aM);
                do {
                  if (pM(PM = eM(rM, OM), LM) <= 0) break;
                  OM--
                } while (OM);
                zM.push(OM), LM = UM(LM, PM)
              } return zM.reverse(), [HM(zM), HM(LM)]
          }(LM, yM), jM = OM[0];
          var CM = MM.sign !== SM.sign,
            bM = OM[1],
            wM = MM.sign;
          return "number" === typeof jM ? (CM && (jM = -jM), jM = new QM(jM)) : jM = new nM(jM, CM), "number" === typeof bM ? (wM && (bM = -bM), bM = new QM(bM)) : bM = new nM(bM, wM), [jM, bM]
        }

        function pM(MM, rM) {
          if (MM.length !== rM.length) return MM.length > rM.length ? 1 : -1;
          for (var iM = MM.length - 1; iM >= 0; iM--)
            if (MM[iM] !== rM[iM]) return MM[iM] > rM[iM] ? 1 : -1;
          return 0
        }

        function WM(MM) {
          var rM = MM.abs();
          return !rM.isUnit() && (!!(rM.equals(2) || rM.equals(3) || rM.equals(5)) || !(rM.isEven() || rM.isDivisibleBy(3) || rM.isDivisibleBy(5)) && (!!rM.lesser(49) || void 0))
        }

        function sM(MM, iM) {
          for (var OM, SM, jM, aM = MM.prev(), PM = aM, nM = 0; PM.isEven();) PM = PM.divide(2), nM++;
          MM: for (SM = 0; SM < iM.length; SM++)
            if (!MM.lesser(iM[SM]) && !(jM = rM(iM[SM]).modPow(PM, MM)).isUnit() && !jM.equals(aM)) {
              for (OM = nM - 1; 0 != OM; OM--) {
                if ((jM = jM.square().mod(MM)).isUnit()) return !1;
                if (jM.equals(aM)) continue MM
              }
              return !1
            }
          return !0
        }
        nM.prototype = Object.create(PM.prototype), QM.prototype = Object.create(PM.prototype), zM.prototype = Object.create(PM.prototype), nM.prototype.add = function(MM) {
          var rM = TM(MM);
          if (this.sign !== rM.sign) return this.subtract(rM.VJ());
          var iM = this.value,
            OM = rM.value;
          return rM.isSmall ? new nM(EM(iM, Math.abs(OM)), this.sign) : new nM(lM(iM, OM), this.sign)
        }, nM.prototype.plus = nM.prototype.add, QM.prototype.add = function(MM) {
          var rM = TM(MM),
            iM = this.value;
          if (iM < 0 !== rM.sign) return this.subtract(rM.VJ());
          var OM = rM.value;
          if (rM.isSmall) {
            if (LM(iM + OM)) return new QM(iM + OM);
            OM = mM(Math.abs(OM))
          }
          return new nM(EM(OM, Math.abs(iM)), iM < 0)
        }, QM.prototype.plus = QM.prototype.add, zM.prototype.add = function(MM) {
          return new zM(this.value + TM(MM).value)
        }, zM.prototype.plus = zM.prototype.add, nM.prototype.subtract = function(MM) {
          var rM = TM(MM);
          if (this.sign !== rM.sign) return this.add(rM.VJ());
          var iM = this.value,
            OM = rM.value;
          return rM.isSmall ? GM(iM, Math.abs(OM), this.sign) : function(MM, rM, iM) {
            var OM;
            return pM(MM, rM) >= 0 ? OM = UM(MM, rM) : (OM = UM(rM, MM), iM = !iM), "number" === typeof(OM = HM(OM)) ? (iM && (OM = -OM), new QM(OM)) : new nM(OM, iM)
          }(iM, OM, this.sign)
        }, nM.prototype.minus = nM.prototype.subtract, QM.prototype.subtract = function(MM) {
          var rM = TM(MM),
            iM = this.value;
          if (iM < 0 !== rM.sign) return this.add(rM.VJ());
          var OM = rM.value;
          return rM.isSmall ? new QM(iM - OM) : GM(OM, Math.abs(iM), iM >= 0)
        }, QM.prototype.minus = QM.prototype.subtract, zM.prototype.subtract = function(MM) {
          return new zM(this.value - TM(MM).value)
        }, zM.prototype.minus = zM.prototype.subtract, nM.prototype.VJ = function() {
          return new nM(this.value, !this.sign)
        }, QM.prototype.VJ = function() {
          var MM = this.sign,
            rM = new QM(-this.value);
          return rM.sign = !MM, rM
        }, zM.prototype.VJ = function() {
          return new zM(-this.value)
        }, nM.prototype.abs = function() {
          return new nM(this.value, !1)
        }, QM.prototype.abs = function() {
          return new QM(Math.abs(this.value))
        }, zM.prototype.abs = function() {
          return new zM(this.value >= 0 ? this.value : -this.value)
        }, nM.prototype.multiply = function(MM) {
          var rM, OM, SM, jM = TM(MM),
            aM = this.value,
            QM = jM.value,
            zM = this.sign !== jM.sign;
          if (jM.isSmall) {
            if (0 === QM) return PM[0];
            if (1 === QM) return this;
            if (-1 === QM) return this.VJ();
            if ((rM = Math.abs(QM)) < iM) return new nM(eM(aM, rM), zM);
            QM = mM(rM)
          }
          return OM = aM.length, SM = QM.length, new nM(-.012 * OM - .012 * SM + 15e-6 * OM * SM > 0 ? wM(aM, QM) : CM(aM, QM), zM)
        }, nM.prototype.times = nM.prototype.multiply, QM.prototype._multiplyBySmall = function(MM) {
          return LM(MM.value * this.value) ? new QM(MM.value * this.value) : tM(Math.abs(MM.value), mM(Math.abs(this.value)), this.sign !== MM.sign)
        }, nM.prototype._multiplyBySmall = function(MM) {
          return 0 === MM.value ? PM[0] : 1 === MM.value ? this : -1 === MM.value ? this.VJ() : tM(Math.abs(MM.value), this.value, this.sign !== MM.sign)
        }, QM.prototype.multiply = function(MM) {
          return TM(MM)._multiplyBySmall(this)
        }, QM.prototype.times = QM.prototype.multiply, zM.prototype.multiply = function(MM) {
          return new zM(this.value * TM(MM).value)
        }, zM.prototype.times = zM.prototype.multiply, nM.prototype.square = function() {
          return new nM(gM(this.value), !1)
        }, QM.prototype.square = function() {
          var MM = this.value * this.value;
          return LM(MM) ? new QM(MM) : new nM(gM(mM(Math.abs(this.value))), !1)
        }, zM.prototype.square = function(MM) {
          return new zM(this.value * this.value)
        }, nM.prototype.divmod = function(MM) {
          var rM = RM(this, MM);
          return {
            quotient: rM[0],
            remainder: rM[1]
          }
        }, zM.prototype.divmod = QM.prototype.divmod = nM.prototype.divmod, nM.prototype.divide = function(MM) {
          return RM(this, MM)[0]
        }, zM.prototype.over = zM.prototype.divide = function(MM) {
          return new zM(this.value / TM(MM).value)
        }, QM.prototype.over = QM.prototype.divide = nM.prototype.over = nM.prototype.divide, nM.prototype.mod = function(MM) {
          return RM(this, MM)[1]
        }, zM.prototype.mod = zM.prototype.remainder = function(MM) {
          return new zM(this.value % TM(MM).value)
        }, QM.prototype.remainder = QM.prototype.mod = nM.prototype.remainder = nM.prototype.mod, nM.prototype.pow = function(MM) {
          var rM, iM, OM, SM = TM(MM),
            jM = this.value,
            aM = SM.value;
          if (0 === aM) return PM[1];
          if (0 === jM) return PM[0];
          if (1 === jM) return PM[1];
          if (-1 === jM) return SM.isEven() ? PM[1] : PM[-1];
          if (SM.sign) return PM[0];
          if (!SM.isSmall) throw new Error("The exponent " + SM.toString() + " is too large.");
          if (this.isSmall && LM(rM = Math.pow(jM, aM))) return new QM(dM(rM));
          for (iM = this, OM = PM[1]; !0 & aM && (OM = OM.times(iM), --aM), 0 !== aM;) aM /= 2, iM = iM.square();
          return OM
        }, QM.prototype.pow = nM.prototype.pow, zM.prototype.pow = function(MM) {
          var rM = TM(MM),
            iM = this.value,
            OM = rM.value,
            SM = BigInt(0),
            jM = BigInt(1),
            aM = BigInt(2);
          if (OM === SM) return PM[1];
          if (iM === SM) return PM[0];
          if (iM === jM) return PM[1];
          if (iM === BigInt(-1)) return rM.isEven() ? PM[1] : PM[-1];
          if (rM.isNegative()) return new zM(SM);
          for (var nM = this, QM = PM[1];
            (OM & jM) === jM && (QM = QM.times(nM), --OM), OM !== SM;) OM /= aM, nM = nM.square();
          return QM
        }, nM.prototype.modPow = function(MM, rM) {
          if (MM = TM(MM), (rM = TM(rM)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var iM = PM[1],
            OM = this.mod(rM);
          for (MM.isNegative() && (MM = MM.multiply(PM[-1]), OM = OM.modInv(rM)); MM.isPositive();) {
            if (OM.isZero()) return PM[0];
            MM.isOdd() && (iM = iM.multiply(OM).mod(rM)), MM = MM.divide(2), OM = OM.square().mod(rM)
          }
          return iM
        }, zM.prototype.modPow = QM.prototype.modPow = nM.prototype.modPow, nM.prototype.compareAbs = function(MM) {
          var rM = TM(MM),
            iM = this.value,
            OM = rM.value;
          return rM.isSmall ? 1 : pM(iM, OM)
        }, QM.prototype.compareAbs = function(MM) {
          var rM = TM(MM),
            iM = Math.abs(this.value),
            OM = rM.value;
          return rM.isSmall ? iM === (OM = Math.abs(OM)) ? 0 : iM > OM ? 1 : -1 : -1
        }, zM.prototype.compareAbs = function(MM) {
          var rM = this.value,
            iM = TM(MM).value;
          return (rM = rM >= 0 ? rM : -rM) === (iM = iM >= 0 ? iM : -iM) ? 0 : rM > iM ? 1 : -1
        }, nM.prototype.compare = function(MM) {
          if (MM === 1 / 0) return -1;
          if (MM === -1 / 0) return 1;
          var rM = TM(MM),
            iM = this.value,
            OM = rM.value;
          return this.sign !== rM.sign ? rM.sign ? 1 : -1 : rM.isSmall ? this.sign ? -1 : 1 : pM(iM, OM) * (this.sign ? -1 : 1)
        }, nM.prototype.compareTo = nM.prototype.compare, QM.prototype.compare = function(MM) {
          if (MM === 1 / 0) return -1;
          if (MM === -1 / 0) return 1;
          var rM = TM(MM),
            iM = this.value,
            OM = rM.value;
          return rM.isSmall ? iM == OM ? 0 : iM > OM ? 1 : -1 : iM < 0 !== rM.sign ? iM < 0 ? -1 : 1 : iM < 0 ? 1 : -1
        }, QM.prototype.compareTo = QM.prototype.compare, zM.prototype.compare = function(MM) {
          if (MM === 1 / 0) return -1;
          if (MM === -1 / 0) return 1;
          var rM = this.value,
            iM = TM(MM).value;
          return rM === iM ? 0 : rM > iM ? 1 : -1
        }, zM.prototype.compareTo = zM.prototype.compare, nM.prototype.equals = function(MM) {
          return 0 === this.compare(MM)
        }, zM.prototype.eq = zM.prototype.equals = QM.prototype.eq = QM.prototype.equals = nM.prototype.eq = nM.prototype.equals, nM.prototype.notEquals = function(MM) {
          return 0 !== this.compare(MM)
        }, zM.prototype.neq = zM.prototype.notEquals = QM.prototype.neq = QM.prototype.notEquals = nM.prototype.neq = nM.prototype.notEquals, nM.prototype.greater = function(MM) {
          return this.compare(MM) > 0
        }, zM.prototype.gt = zM.prototype.greater = QM.prototype.gt = QM.prototype.greater = nM.prototype.gt = nM.prototype.greater, nM.prototype.lesser = function(MM) {
          return this.compare(MM) < 0
        }, zM.prototype.lt = zM.prototype.lesser = QM.prototype.lt = QM.prototype.lesser = nM.prototype.lt = nM.prototype.lesser, nM.prototype.greaterOrEquals = function(MM) {
          return this.compare(MM) >= 0
        }, zM.prototype.geq = zM.prototype.greaterOrEquals = QM.prototype.geq = QM.prototype.greaterOrEquals = nM.prototype.geq = nM.prototype.greaterOrEquals, nM.prototype.lesserOrEquals = function(MM) {
          return this.compare(MM) <= 0
        }, zM.prototype.leq = zM.prototype.lesserOrEquals = QM.prototype.leq = QM.prototype.lesserOrEquals = nM.prototype.leq = nM.prototype.lesserOrEquals, nM.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, QM.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, zM.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, nM.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, QM.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, zM.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, nM.prototype.isPositive = function() {
          return !this.sign
        }, QM.prototype.isPositive = function() {
          return this.value > 0
        }, zM.prototype.isPositive = QM.prototype.isPositive, nM.prototype.isNegative = function() {
          return this.sign
        }, QM.prototype.isNegative = function() {
          return this.value < 0
        }, zM.prototype.isNegative = QM.prototype.isNegative, nM.prototype.isUnit = function() {
          return !1
        }, QM.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, zM.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, nM.prototype.isZero = function() {
          return !1
        }, QM.prototype.isZero = function() {
          return 0 === this.value
        }, zM.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, nM.prototype.isDivisibleBy = function(MM) {
          var rM = TM(MM);
          return !rM.isZero() && (!!rM.isUnit() || (0 === rM.compareAbs(2) ? this.isEven() : this.mod(rM).isZero()))
        }, zM.prototype.isDivisibleBy = QM.prototype.isDivisibleBy = nM.prototype.isDivisibleBy, nM.prototype.isPrime = function(iM) {
          var OM = WM(this);
          if (OM !== MM) return OM;
          var SM = this.abs(),
            jM = SM.bitLength();
          if (jM <= 64) return sM(SM, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var aM = Math.log(2) * jM.toJSNumber(), PM = Math.ceil(!0 === iM ? 2 * Math.pow(aM, 2) : aM), nM = [], QM = 0; QM < PM; QM++) nM.push(rM(QM + 2));
          return sM(SM, nM)
        }, zM.prototype.isPrime = QM.prototype.isPrime = nM.prototype.isPrime, nM.prototype.isProbablePrime = function(iM, OM) {
          var SM = WM(this);
          if (SM !== MM) return SM;
          for (var jM = this.abs(), aM = iM === MM ? 5 : iM, PM = [], nM = 0; nM < aM; nM++) PM.push(rM.randBetween(2, jM.minus(2), OM));
          return sM(jM, PM)
        }, zM.prototype.isProbablePrime = QM.prototype.isProbablePrime = nM.prototype.isProbablePrime, nM.prototype.modInv = function(MM) {
          for (var iM, OM, SM, jM = rM.zero, aM = rM.one, PM = TM(MM), nM = this.abs(); !nM.isZero();) iM = PM.divide(nM), OM = jM, SM = PM, jM = aM, PM = nM, aM = OM.subtract(iM.multiply(aM)), nM = SM.subtract(iM.multiply(nM));
          if (!PM.isUnit()) throw new Error(this.toString() + " and " + MM.toString() + " are not co-prime");
          return -1 === jM.compare(0) && (jM = jM.add(MM)), this.isNegative() ? jM.VJ() : jM
        }, zM.prototype.modInv = QM.prototype.modInv = nM.prototype.modInv, nM.prototype.next = function() {
          var MM = this.value;
          return this.sign ? GM(MM, 1, this.sign) : new nM(EM(MM, 1), this.sign)
        }, QM.prototype.next = function() {
          var MM = this.value;
          return MM + 1 < OM ? new QM(MM + 1) : new nM(SM, !1)
        }, zM.prototype.next = function() {
          return new zM(this.value + BigInt(1))
        }, nM.prototype.prev = function() {
          var MM = this.value;
          return this.sign ? new nM(EM(MM, 1), !0) : GM(MM, 1, this.sign)
        }, QM.prototype.prev = function() {
          var MM = this.value;
          return MM - 1 > -OM ? new QM(MM - 1) : new nM(SM, !0)
        }, zM.prototype.prev = function() {
          return new zM(this.value - BigInt(1))
        };
        for (var DM = [1]; 2 * DM[DM.length - 1] <= iM;) DM.push(2 * DM[DM.length - 1]);
        var kM = DM.length,
          ZM = DM[kM - 1];

        function oM(MM) {
          return Math.abs(MM) <= iM
        }

        function fM(MM, iM, OM) {
          iM = TM(iM);
          for (var SM = MM.isNegative(), jM = iM.isNegative(), aM = SM ? MM.not() : MM, PM = jM ? iM.not() : iM, nM = 0, QM = 0, zM = null, LM = null, mM = []; !aM.isZero() || !PM.isZero();) nM = (zM = RM(aM, ZM))[1].toJSNumber(), SM && (nM = ZM - 1 - nM), QM = (LM = RM(PM, ZM))[1].toJSNumber(), jM && (QM = ZM - 1 - QM), aM = zM[0], PM = LM[0], mM.push(OM(nM, QM));
          for (var HM = 0 !== OM(SM ? 1 : 0, jM ? 1 : 0) ? rM(-1) : rM(0), hM = mM.length - 1; hM >= 0; hM -= 1) HM = HM.multiply(ZM).add(rM(mM[hM]));
          return HM
        }
        nM.prototype.shiftLeft = function(MM) {
          var rM = TM(MM).toJSNumber();
          if (!oM(rM)) throw new Error(String(rM) + " is too large for shifting.");
          if (rM < 0) return this.shiftRight(-rM);
          var iM = this;
          if (iM.isZero()) return iM;
          for (; rM >= kM;) iM = iM.multiply(ZM), rM -= kM - 1;
          return iM.multiply(DM[rM])
        }, zM.prototype.shiftLeft = QM.prototype.shiftLeft = nM.prototype.shiftLeft, nM.prototype.shiftRight = function(MM) {
          var rM, iM = TM(MM).toJSNumber();
          if (!oM(iM)) throw new Error(String(iM) + " is too large for shifting.");
          if (iM < 0) return this.shiftLeft(-iM);
          for (var OM = this; iM >= kM;) {
            if (OM.isZero() || OM.isNegative() && OM.isUnit()) return OM;
            OM = (rM = RM(OM, ZM))[1].isNegative() ? rM[0].prev() : rM[0], iM -= kM - 1
          }
          return (rM = RM(OM, DM[iM]))[1].isNegative() ? rM[0].prev() : rM[0]
        }, zM.prototype.shiftRight = QM.prototype.shiftRight = nM.prototype.shiftRight, nM.prototype.not = function() {
          return this.VJ().prev()
        }, zM.prototype.not = QM.prototype.not = nM.prototype.not, nM.prototype.and = function(MM) {
          return fM(this, MM, (function(MM, rM) {
            return MM & rM
          }))
        }, zM.prototype.and = QM.prototype.and = nM.prototype.and, nM.prototype.or = function(MM) {
          return fM(this, MM, (function(MM, rM) {
            return MM | rM
          }))
        }, zM.prototype.or = QM.prototype.or = nM.prototype.or, nM.prototype.xor = function(MM) {
          return fM(this, MM, (function(MM, rM) {
            return MM ^ rM
          }))
        }, zM.prototype.xor = QM.prototype.xor = nM.prototype.xor;
        var YM = 1 << 30;

        function NM(MM) {
          var rM = MM.value,
            OM = "number" === typeof rM ? rM | YM : "bigint" === typeof rM ? rM | BigInt(YM) : rM[0] + rM[1] * iM | 1073758208;
          return OM & -OM
        }

        function AM(MM, iM) {
          if (iM.compareTo(MM) <= 0) {
            var OM = AM(MM, iM.square(iM)),
              SM = OM.p,
              jM = OM.e,
              aM = SM.multiply(iM);
            return aM.compareTo(MM) <= 0 ? {
              p: aM,
              e: 2 * jM + 1
            } : {
              p: SM,
              e: 2 * jM
            }
          }
          return {
            p: rM(1),
            e: 0
          }
        }

        function xM(MM, rM) {
          return MM = TM(MM), rM = TM(rM), MM.greater(rM) ? MM : rM
        }

        function vM(MM, rM) {
          return MM = TM(MM), rM = TM(rM), MM.lesser(rM) ? MM : rM
        }

        function FM(MM, rM) {
          if (MM = TM(MM).abs(), rM = TM(rM).abs(), MM.equals(rM)) return MM;
          if (MM.isZero()) return rM;
          if (rM.isZero()) return MM;
          for (var iM, OM, SM = PM[1]; MM.isEven() && rM.isEven();) iM = vM(NM(MM), NM(rM)), MM = MM.divide(iM), rM = rM.divide(iM), SM = SM.multiply(iM);
          for (; MM.isEven();) MM = MM.divide(NM(MM));
          do {
            for (; rM.isEven();) rM = rM.divide(NM(rM));
            MM.greater(rM) && (OM = rM, rM = MM, MM = OM), rM = rM.subtract(MM)
          } while (!rM.isZero());
          return SM.isUnit() ? MM : MM.multiply(SM)
        }
        nM.prototype.bitLength = function() {
          var MM = this;
          return MM.compareTo(rM(0)) < 0 && (MM = MM.VJ().subtract(rM(1))), 0 === MM.compareTo(rM(0)) ? rM(0) : rM(AM(MM, rM(2)).e).add(rM(1))
        }, zM.prototype.bitLength = QM.prototype.bitLength = nM.prototype.bitLength;
        var BM = function(MM, rM, iM, OM) {
          iM = iM || jM, MM = String(MM), OM || (MM = MM.toLowerCase(), iM = iM.toLowerCase());
          var SM, aM = MM.length,
            PM = Math.abs(rM),
            nM = {};
          for (SM = 0; SM < iM.length; SM++) nM[iM[SM]] = SM;
          for (SM = 0; SM < aM; SM++) {
            if ("-" !== (LM = MM[SM]) && (LM in nM && nM[LM] >= PM)) {
              if ("1" === LM && 1 === PM) continue;
              throw new Error(LM + " is not a valid digit in base " + rM + ".")
            }
          }
          rM = TM(rM);
          var QM = [],
            zM = "-" === MM[0];
          for (SM = zM ? 1 : 0; SM < MM.length; SM++) {
            var LM;
            if ((LM = MM[SM]) in nM) QM.push(TM(nM[LM]));
            else {
              if ("<" !== LM) throw new Error(LM + " is not a valid character");
              var mM = SM;
              do {
                SM++
              } while (">" !== MM[SM] && SM < MM.length);
              QM.push(TM(MM.slice(mM + 1, SM)))
            }
          }
          return XM(QM, rM, zM)
        };

        function XM(MM, rM, iM) {
          var OM, SM = PM[0],
            jM = PM[1];
          for (OM = MM.length - 1; OM >= 0; OM--) SM = SM.add(MM[OM].times(jM)), jM = jM.times(rM);
          return iM ? SM.VJ() : SM
        }

        function IM(MM, iM) {
          if ((iM = rM(iM)).isZero()) {
            if (MM.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (iM.equals(-1)) {
            if (MM.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (MM.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-MM.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var OM = Array.apply(null, Array(MM.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return OM.unshift([1]), {
              value: [].concat.apply([], OM),
              isNegative: !1
            }
          }
          var SM = !1;
          if (MM.isNegative() && iM.isPositive() && (SM = !0, MM = MM.abs()), iM.isUnit()) return MM.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(MM.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: SM
          };
          for (var jM, aM = [], PM = MM; PM.isNegative() || PM.compareAbs(iM) >= 0;) {
            jM = PM.divmod(iM), PM = jM.quotient;
            var nM = jM.remainder;
            nM.isNegative() && (nM = iM.minus(nM).abs(), PM = PM.next()), aM.push(nM.toJSNumber())
          }
          return aM.push(PM.toJSNumber()), {
            value: aM.reverse(),
            isNegative: SM
          }
        }

        function KM(MM, rM, iM) {
          var OM = IM(MM, rM);
          return (OM.isNegative ? "-" : "") + OM.value.map((function(MM) {
            return function(MM, rM) {
              return MM < (rM = rM || jM).length ? rM[MM] : "<" + MM + ">"
            }(MM, iM)
          })).join("")
        }

        function qM(MM) {
          if (LM(+MM)) {
            var rM = +MM;
            if (rM === dM(rM)) return aM ? new zM(BigInt(rM)) : new QM(rM);
            throw new Error("Invalid integer: " + MM)
          }
          var iM = "-" === MM[0];
          iM && (MM = MM.slice(1));
          var OM = MM.split(/e/i);
          if (OM.length > 2) throw new Error("Invalid integer: " + OM.join("e"));
          if (2 === OM.length) {
            var SM = OM[1];
            if ("+" === SM[0] && (SM = SM.slice(1)), (SM = +SM) !== dM(SM) || !LM(SM)) throw new Error("Invalid integer: " + SM + " is not a valid exponent.");
            var jM = OM[0],
              PM = jM.indexOf(".");
            if (PM >= 0 && (SM -= jM.length - PM - 1, jM = jM.slice(0, PM) + jM.slice(PM + 1)), SM < 0) throw new Error("Cannot include negative exponent part for integers");
            MM = jM += new Array(SM + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(MM)) throw new Error("Invalid integer: " + MM);
          if (aM) return new zM(BigInt(iM ? "-" + MM : MM));
          for (var mM = [], HM = MM.length, JM = HM - 7; HM > 0;) mM.push(+MM.slice(JM, HM)), (JM -= 7) < 0 && (JM = 0), HM -= 7;
          return hM(mM), new nM(mM, iM)
        }

        function TM(MM) {
          return "number" === typeof MM ? function(MM) {
            if (aM) return new zM(BigInt(MM));
            if (LM(MM)) {
              if (MM !== dM(MM)) throw new Error(MM + " is not an integer.");
              return new QM(MM)
            }
            return qM(MM.toString())
          }(MM) : "string" === typeof MM ? qM(MM) : "bigint" === typeof MM ? new zM(MM) : MM
        }
        nM.prototype.toArray = function(MM) {
          return IM(this, MM)
        }, QM.prototype.toArray = function(MM) {
          return IM(this, MM)
        }, zM.prototype.toArray = function(MM) {
          return IM(this, MM)
        }, nM.prototype.toString = function(rM, iM) {
          if (rM === MM && (rM = 10), 10 !== rM) return KM(this, rM, iM);
          for (var OM, SM = this.value, jM = SM.length, aM = String(SM[--jM]); --jM >= 0;) OM = String(SM[jM]), aM += "0000000".slice(OM.length) + OM;
          return (this.sign ? "-" : "") + aM
        }, QM.prototype.toString = function(rM, iM) {
          return rM === MM && (rM = 10), 10 != rM ? KM(this, rM, iM) : String(this.value)
        }, zM.prototype.toString = QM.prototype.toString, zM.prototype.toJSON = nM.prototype.toJSON = QM.prototype.toJSON = function() {
          return this.toString()
        }, nM.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, nM.prototype.toJSNumber = nM.prototype.valueOf, QM.prototype.valueOf = function() {
          return this.value
        }, QM.prototype.toJSNumber = QM.prototype.valueOf, zM.prototype.valueOf = zM.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var VM = 0; VM < 1e3; VM++) PM[VM] = TM(VM), VM > 0 && (PM[-VM] = TM(-VM));
        return PM.one = PM[1], PM.zero = PM[0], PM.minusOne = PM[-1], PM.max = xM, PM.min = vM, PM.gcd = FM, PM.lcm = function(MM, rM) {
          return MM = TM(MM).abs(), rM = TM(rM).abs(), MM.divide(FM(MM, rM)).multiply(rM)
        }, PM.isInstance = function(MM) {
          return MM instanceof nM || MM instanceof QM || MM instanceof zM
        }, PM.randBetween = function(MM, rM, OM) {
          MM = TM(MM), rM = TM(rM);
          var SM = OM || Math.random,
            jM = vM(MM, rM),
            aM = xM(MM, rM).subtract(jM).add(1);
          if (aM.isSmall) return jM.add(Math.floor(SM() * aM));
          for (var nM = IM(aM, iM).value, QM = [], zM = !0, LM = 0; LM < nM.length; LM++) {
            var mM = zM ? nM[LM] : iM,
              HM = dM(SM() * mM);
            QM.push(HM), HM < mM && (zM = !1)
          }
          return jM.add(PM.cz(QM, iM, !1))
        }, PM.cz = function(MM, rM, iM) {
          return XM(MM.map(TM), TM(rM || 10), iM)
        }, PM
      }();
      MM.hasOwnProperty("exports") && (MM.exports = rM)
    }(Ei);
    var Ui = jM(Ei.exports);

    function Gi(MM, rM, iM) {
      let OM = 0;
      for (let SM = 0; SM < iM; SM++) {
        const iM = MM[rM + SM];
        if (void 0 === iM) break;
        OM += iM * 16 ** SM
      }
      return OM
    }

    function Ci(MM) {
      const rM = [];
      for (let iM = 0; iM < MM.length; iM++) {
        let OM = Number(MM[iM]);
        for (let MM = 0; OM || MM < rM.length; MM++) OM += 10 * (rM[MM] || 0), rM[MM] = OM % 16, OM = (OM - rM[MM]) / 16
      }
      return rM
    }
    class ei {
      static fromString(MM) {
        return new ei(function(MM) {
          const rM = Ci(MM),
            iM = Array(4);
          for (let OM = 0; OM < 4; OM++) iM[3 - OM] = Gi(rM, 4 * OM, 4);
          return iM
        }(MM), MM)
      }
      static fromBit(MM) {
        const rM = Array(4),
          iM = Math.floor(MM / 16);
        for (let OM = 0; OM < 4; OM++) rM[3 - OM] = OM === iM ? 1 << MM - 16 * iM : 0;
        return new ei(rM)
      }
      constructor(MM, rM) {
        this.parts = MM, this.str = rM
      }
      and(MM) {
        let {
          parts: rM
        } = MM;
        return new ei(this.parts.map(((MM, iM) => MM & rM[iM])))
      }
      or(MM) {
        let {
          parts: rM
        } = MM;
        return new ei(this.parts.map(((MM, iM) => MM | rM[iM])))
      }
      xor(MM) {
        let {
          parts: rM
        } = MM;
        return new ei(this.parts.map(((MM, iM) => MM ^ rM[iM])))
      }
      not() {
        return new ei(this.parts.map((MM => ~MM)))
      }
      equals(MM) {
        let {
          parts: rM
        } = MM;
        return this.parts.every(((MM, iM) => MM === rM[iM]))
      }
      toString() {
        if (null != this.str) return this.str;
        const MM = new Array(16);
        return this.parts.forEach(((rM, iM) => {
          const OM = Ci(rM.toString());
          for (let SM = 0; SM < 4; SM++) MM[SM + 4 * iM] = OM[3 - SM] || 0
        })), this.str = Ui.cz(MM, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const bi = function() {
      try {
        return BigInt, !0
      } catch (MM) {
        return !1
      }
    }();
    bi && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const wi = {},
      ti = bi ? function(MM) {
        return BigInt(MM)
      } : function(MM) {
        return MM instanceof ei ? MM : ("number" === typeof MM && (MM = MM.toString()), null != wi[MM] || (wi[MM] = ei.fromString(MM)), wi[MM])
      },
      gi = ti(0),
      ui = bi ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gi) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gi)
      } : function() {
        let MM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gi;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gi).and(MM)
      },
      Ri = bi ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gi) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gi)
      } : function() {
        let MM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gi;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gi).or(MM)
      },
      Wi = bi ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gi) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gi)
      } : function() {
        let MM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gi;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gi).xor(MM)
      },
      si = bi ? function(MM, rM) {
        return MM === rM
      } : function(MM, rM) {
        return null == MM || null == rM ? MM == rM : MM.equals(rM)
      };
    var Di, ki, Zi, oi, fi = {
      combine: function() {
        let MM = arguments.length <= 0 ? void 0 : arguments[0];
        for (let rM = 1; rM < arguments.length; rM++) MM = Ri(MM, rM < 0 || arguments.length <= rM ? void 0 : arguments[rM]);
        return MM
      },
      add: function(MM, rM) {
        return rM === gi ? MM : Ri(MM, rM)
      },
      remove: function(MM, rM) {
        return rM === gi ? MM : Wi(MM, ui(MM, rM))
      },
      filter: ui,
      invert: bi ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gi)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : gi).not()
      },
      has: function(MM, rM) {
        return si(ui(MM, rM), rM)
      },
      hasAny: function(MM, rM) {
        return !si(ui(MM, rM), gi)
      },
      equals: si,
      deserialize: ti,
      getFlag: bi ? function(MM) {
        return BigInt(1) << BigInt(MM)
      } : function(MM) {
        return ei.fromBit(MM)
      }
    };
    ! function(MM) {
      MM[MM.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", MM[MM.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", MM[MM.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", MM[MM.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", MM[MM.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", MM[MM.RATELIMITED = 4002] = "RATELIMITED", MM[MM.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", MM[MM.INVALID_VERSION = 4004] = "INVALID_VERSION", MM[MM.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(Di || (Di = {})),
    function(MM) {
      MM[MM.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", MM[MM.INVALID_COMMAND = 4002] = "INVALID_COMMAND", MM[MM.INVALID_EVENT = 4004] = "INVALID_EVENT", MM[MM.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(ki || (ki = {})),
    function(MM) {
      MM.LANDSCAPE = "landscape", MM.PORTRAIT = "portrait"
    }(Zi || (Zi = {})),
    function(MM) {
      MM.MOBILE = "mobile", MM.DESKTOP = "desktop"
    }(oi || (oi = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: fi.getFlag(0),
      ADMINISTRATOR: fi.getFlag(3)
    });

    function Yi(MM) {
      return Hi((rM => {
        var iM;
        const [OM] = null !== (iM = Object.entries(MM).find((MM => {
          let [, iM] = MM;
          return iM === rM
        }))) && void 0 !== iM ? iM : [];
        return null != rM && void 0 === OM ? MM.UNHANDLED : rM
      }), Dr().or(kr()))
    }
    const Ni = li.object({
        image_url: li.string()
      }),
      Ai = li.object({
        mediaUrl: li.string().max(1024)
      }),
      xi = li.object({
        access_token: li.union([li.string(), li.null()]).optional()
      }),
      vi = li.object({
        access_token: li.string(),
        user: li.object({
          username: li.string(),
          discriminator: li.string(),
          id: li.string(),
          avatar: li.union([li.string(), li.null()]).optional(),
          public_flags: li.number(),
          global_name: li.union([li.string(), li.null()]).optional()
        }),
        scopes: li.array(function(MM) {
          const rM = pr().transform((rM => {
            const iM = MM.safeParse(rM);
            return iM.success ? iM.data : MM._def.defaultValue()
          }));
          return rM.overlayType = MM, rM
        }(li.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(li.literal(-1)).default(-1))),
        expires: li.string(),
        application: li.object({
          description: li.string(),
          icon: li.union([li.string(), li.null()]).optional(),
          id: li.string(),
          rpc_origins: li.array(li.string()).optional(),
          name: li.string()
        })
      }),
      Fi = li.object({
        participants: li.array(li.object({
          id: li.string(),
          username: li.string(),
          global_name: li.union([li.string(), li.null()]).optional(),
          discriminator: li.string(),
          avatar: li.union([li.string(), li.null()]).optional(),
          flags: li.number(),
          bot: li.boolean(),
          avatar_decoration_data: li.union([li.object({
            asset: li.string(),
            skuId: li.string().optional()
          }), li.null()]).optional(),
          premium_type: li.union([li.number(), li.null()]).optional(),
          nickname: li.string().optional()
        }))
      });
    var Bi;
    ! function(MM) {
      MM.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", MM.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", MM.AUTHENTICATE = "AUTHENTICATE", MM.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Bi || (Bi = {}));
    const Xi = li.object({}).optional().nullable(),
      Ii = li.void(),
      Ki = {
        [Bi.INITIATE_IMAGE_UPLOAD]: {
          request: Ii,
          response: Ni
        },
        [Bi.OPEN_SHARE_MOMENT_DIALOG]: {
          request: Ai,
          response: Xi
        },
        [Bi.AUTHENTICATE]: {
          request: xi,
          response: vi
        },
        [Bi.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: Ii,
          response: Fi
        }
      },
      qi = "DISPATCH";
    var Ti;
    ! function(MM) {
      MM.AUTHORIZE = "AUTHORIZE", MM.AUTHENTICATE = "AUTHENTICATE", MM.GET_GUILDS = "GET_GUILDS", MM.GET_GUILD = "GET_GUILD", MM.GET_CHANNEL = "GET_CHANNEL", MM.GET_CHANNELS = "GET_CHANNELS", MM.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", MM.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", MM.SUBSCRIBE = "SUBSCRIBE", MM.UNSUBSCRIBE = "UNSUBSCRIBE", MM.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", MM.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", MM.SET_ACTIVITY = "SET_ACTIVITY", MM.GET_SKUS = "GET_SKUS", MM.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", MM.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", MM.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", MM.START_PURCHASE = "START_PURCHASE", MM.SET_CONFIG = "SET_CONFIG", MM.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", MM.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", MM.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", MM.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", MM.CAPTURE_LOG = "CAPTURE_LOG", MM.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", MM.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", MM.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", MM.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", MM.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", MM.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", MM.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Ti || (Ti = {}));
    const Vi = Kr({
        cmd: Dr(),
        data: Fr(),
        evt: xr(),
        nonce: Dr()
      }).passthrough(),
      ci = (Yi(Object.assign(Object.assign({}, vi.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), Kr({
        id: Dr(),
        username: Dr(),
        discriminator: Dr(),
        global_name: Dr().optional().nullable(),
        avatar: Dr().optional().nullable(),
        avatar_decoration_data: Kr({
          asset: Dr(),
          sku_id: Dr().optional()
        }).nullable(),
        bot: fr(),
        flags: kr().optional().nullable(),
        premium_type: kr().optional().nullable()
      })),
      MO = Kr({
        user: ci,
        nick: Dr().optional().nullable(),
        roles: Ir(Dr()),
        joined_at: Dr(),
        deaf: fr(),
        mute: fr()
      }),
      rO = Kr({
        id: Dr(),
        name: Dr().optional().nullable(),
        roles: Ir(Dr()).optional().nullable(),
        user: ci.optional().nullable(),
        require_colons: fr().optional().nullable(),
        managed: fr().optional().nullable(),
        animated: fr().optional().nullable(),
        available: fr().optional().nullable()
      }),
      iO = Kr({
        mute: fr(),
        deaf: fr(),
        self_mute: fr(),
        self_deaf: fr(),
        suppress: fr()
      }),
      OO = Kr({
        mute: fr(),
        nick: Dr(),
        user: ci,
        voice_state: iO,
        volume: kr()
      }),
      SO = Yi({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      jO = Kr({
        name: Dr(),
        type: kr(),
        url: Dr().optional().nullable(),
        created_at: kr().optional().nullable(),
        timestamps: Kr({
          start: kr(),
          end: kr()
        }).partial().optional().nullable(),
        application_id: Dr().optional().nullable(),
        details: Dr().optional().nullable(),
        state: Dr().optional().nullable(),
        emoji: rO.optional().nullable(),
        party: Kr({
          id: Dr().optional().nullable(),
          size: Ir(kr()).optional().nullable()
        }).optional().nullable(),
        assets: Kr({
          large_image: Dr().nullable(),
          large_text: Dr().nullable(),
          small_image: Dr().nullable(),
          small_text: Dr().nullable()
        }).partial().optional().nullable(),
        secrets: Kr({
          join: Dr(),
          match: Dr()
        }).partial().optional().nullable(),
        instance: fr().optional().nullable(),
        flags: kr().optional().nullable()
      }),
      aO = Kr({
        id: Dr(),
        type: Yi({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: Dr(),
        deny: Dr()
      }),
      PO = {
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
      nO = Kr({
        id: Dr(),
        type: Yi(PO),
        guild_id: Dr().optional().nullable(),
        position: kr().optional().nullable(),
        permission_overwrites: Ir(aO).optional().nullable(),
        name: Dr().optional().nullable(),
        topic: Dr().optional().nullable(),
        nsfw: fr().optional().nullable(),
        last_message_id: Dr().optional().nullable(),
        bitrate: kr().optional().nullable(),
        user_limit: kr().optional().nullable(),
        rate_limit_per_user: kr().optional().nullable(),
        recipients: Ir(ci).optional().nullable(),
        icon: Dr().optional().nullable(),
        owner_id: Dr().optional().nullable(),
        application_id: Dr().optional().nullable(),
        parent_id: Dr().optional().nullable(),
        last_pin_timestamp: Dr().optional().nullable()
      }),
      QO = Kr({
        user: ci,
        guild_id: Dr(),
        status: SO,
        activities: Ir(jO),
        client_status: Kr({
          desktop: SO,
          mobile: SO,
          web: SO
        }).partial()
      }),
      zO = Kr({
        id: Dr(),
        name: Dr(),
        color: kr(),
        hoist: fr(),
        position: kr(),
        permissions: Dr(),
        managed: fr(),
        mentionable: fr()
      }),
      LO = (Kr({
        id: Dr(),
        name: Dr(),
        owner_id: Dr(),
        icon: Dr().nullable(),
        icon_hash: Dr().optional().nullable(),
        splash: Dr().nullable(),
        discovery_splash: Dr().nullable(),
        owner: fr().optional().nullable(),
        permissions: Dr().optional().nullable(),
        region: Dr(),
        afk_channel_id: Dr().nullable(),
        afk_timeout: kr(),
        widget_enabled: fr().optional().nullable(),
        widget_channel_id: Dr().optional().nullable(),
        verification_level: kr(),
        default_message_notifications: kr(),
        explicit_content_filter: kr(),
        roles: Ir(zO),
        emojis: Ir(rO),
        features: Ir(Dr()),
        mfa_level: kr(),
        application_id: Dr().nullable(),
        system_channel_id: Dr().nullable(),
        system_channel_flags: kr(),
        rules_channel_id: Dr().nullable(),
        joined_at: Dr().optional().nullable(),
        large: fr().optional().nullable(),
        unavailable: fr().optional().nullable(),
        member_count: kr().optional().nullable(),
        voice_states: Ir(iO).optional().nullable(),
        members: Ir(MO).optional().nullable(),
        channels: Ir(nO).optional().nullable(),
        presences: Ir(QO).optional().nullable(),
        max_presences: kr().optional().nullable(),
        max_members: kr().optional().nullable(),
        vanity_url_code: Dr().nullable(),
        description: Dr().nullable(),
        banner: Dr().nullable(),
        premium_tier: kr(),
        premium_subscription_count: kr().optional().nullable(),
        preferred_locale: Dr(),
        public_updates_channel_id: Dr().nullable(),
        max_video_channel_users: kr().optional().nullable(),
        approximate_member_count: kr().optional().nullable(),
        approximate_presence_count: kr().optional().nullable()
      }), Kr({
        id: Dr(),
        guild_id: Dr(),
        type: kr(),
        name: Dr()
      })),
      mO = Kr({
        id: Dr(),
        filename: Dr(),
        size: kr(),
        url: Dr(),
        proxy_url: Dr(),
        height: kr().optional().nullable(),
        width: kr().optional().nullable()
      }),
      HO = Kr({
        text: Dr(),
        icon_url: Dr().optional().nullable(),
        proxy_icon_url: Dr().optional().nullable()
      }),
      hO = Kr({
        url: Dr().optional().nullable(),
        proxy_url: Dr().optional().nullable(),
        height: kr().optional().nullable(),
        width: kr().optional().nullable()
      }),
      JO = hO.omit({
        proxy_url: !0
      }),
      dO = Kr({
        name: Dr().optional().nullable(),
        url: Dr().optional().nullable()
      }),
      yO = Kr({
        name: Dr().optional().nullable(),
        url: Dr().optional().nullable(),
        icon_url: Dr().optional().nullable(),
        proxy_icon_url: Dr().optional().nullable()
      }),
      lO = Kr({
        name: Dr(),
        value: Dr(),
        inline: fr()
      }),
      EO = Kr({
        title: Dr().optional().nullable(),
        type: Dr().optional().nullable(),
        description: Dr().optional().nullable(),
        url: Dr().optional().nullable(),
        timestamp: Dr().optional().nullable(),
        color: kr().optional().nullable(),
        footer: HO.optional().nullable(),
        image: hO.optional().nullable(),
        thumbnail: hO.optional().nullable(),
        video: JO.optional().nullable(),
        provider: dO.optional().nullable(),
        author: yO.optional().nullable(),
        fields: Ir(lO).optional().nullable()
      }),
      UO = Kr({
        count: kr(),
        me: fr(),
        emoji: rO
      }),
      GO = Kr({
        type: kr(),
        party_id: Dr().optional().nullable()
      }),
      CO = Kr({
        id: Dr(),
        cover_image: Dr().optional().nullable(),
        description: Dr(),
        icon: Dr().optional().nullable(),
        name: Dr()
      }),
      eO = Kr({
        message_id: Dr().optional().nullable(),
        channel_id: Dr().optional().nullable(),
        guild_id: Dr().optional().nullable()
      }),
      bO = Kr({
        id: Dr(),
        channel_id: Dr(),
        guild_id: Dr().optional().nullable(),
        author: ci.optional().nullable(),
        member: MO.optional().nullable(),
        content: Dr(),
        timestamp: Dr(),
        edited_timestamp: Dr().optional().nullable(),
        tts: fr(),
        mention_everyone: fr(),
        mentions: Ir(ci),
        mention_roles: Ir(Dr()),
        mention_channels: Ir(LO),
        attachments: Ir(mO),
        embeds: Ir(EO),
        reactions: Ir(UO).optional().nullable(),
        nonce: Tr([Dr(), kr()]).optional().nullable(),
        pinned: fr(),
        webhook_id: Dr().optional().nullable(),
        type: kr(),
        activity: GO.optional().nullable(),
        application: CO.optional().nullable(),
        message_reference: eO.optional().nullable(),
        flags: kr().optional().nullable(),
        stickers: Ir(Fr()).optional().nullable(),
        referenced_message: Fr().optional().nullable()
      }),
      wO = Kr({
        id: Dr(),
        name: Dr()
      }),
      tO = Kr({
        type: Yi({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: kr(),
        name: Dr()
      }),
      gO = Kr({
        type: Yi({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: fr(),
        threshold: kr(),
        shortcut: Ir(tO),
        delay: kr()
      }),
      uO = Kr({
        device_id: Dr(),
        volume: kr(),
        available_devices: Ir(wO)
      }),
      RO = (Kr({
        type: Yi({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: Dr(),
        vendor: Kr({
          name: Dr(),
          url: Dr()
        }),
        model: Kr({
          name: Dr(),
          url: Dr()
        }),
        related: Ir(Dr()),
        echo_cancellation: fr().optional().nullable(),
        noise_suppression: fr().optional().nullable(),
        automatic_gain_control: fr().optional().nullable(),
        hardware_mute: fr().optional().nullable()
      }), Kr({
        id: Dr(),
        name: Dr(),
        type: Yi({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: Kr({
          amount: kr(),
          currency: Dr()
        }),
        application_id: Dr(),
        flags: kr(),
        release_date: Dr().nullable()
      })),
      pO = Kr({
        id: Dr(),
        sku_id: Dr(),
        application_id: Dr(),
        user_id: Dr(),
        gift_code_flags: kr(),
        type: Yi({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: Dr().optional().nullable(),
        branches: Ir(Dr()).optional().nullable(),
        starts_at: Dr().optional().nullable(),
        ends_at: Dr().optional().nullable(),
        parent_id: Dr().optional().nullable(),
        consumed: fr().optional().nullable(),
        deleted: fr().optional().nullable(),
        gift_code_batch_id: Dr().optional().nullable()
      }),
      WO = (Yi({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), Yi({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      sO = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      DO = (Yi(sO), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      kO = (Yi(DO), "ERROR");
    var ZO;
    ! function(MM) {
      MM.READY = "READY", MM.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", MM.SPEAKING_START = "SPEAKING_START", MM.SPEAKING_STOP = "SPEAKING_STOP", MM.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", MM.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", MM.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", MM.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", MM.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", MM.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(ZO || (ZO = {}));
    const oO = Vi.extend({
        evt: ni(ZO),
        nonce: Dr().nullable(),
        cmd: ai(qi),
        data: Kr({}).passthrough()
      }),
      fO = Vi.extend({
        evt: ai(kO),
        data: Kr({
          code: kr(),
          message: Dr().optional()
        }).passthrough(),
        cmd: ni(Ti),
        nonce: Dr().nullable()
      }),
      YO = oO.extend({
        evt: Dr()
      }),
      NO = Tr([oO, YO, fO]);
    const AO = {
      [ZO.READY]: {
        payload: oO.extend({
          evt: ai(ZO.READY),
          data: Kr({
            v: kr(),
            config: Kr({
              cdn_host: Dr().optional(),
              api_endpoint: Dr(),
              environment: Dr()
            }),
            user: Kr({
              id: Dr(),
              username: Dr(),
              discriminator: Dr(),
              avatar: Dr().optional()
            }).optional()
          })
        })
      },
      [ZO.VOICE_STATE_UPDATE]: {
        payload: oO.extend({
          evt: ai(ZO.VOICE_STATE_UPDATE),
          data: OO
        }),
        subscribeArgs: Kr({
          channel_id: Dr()
        })
      },
      [ZO.SPEAKING_START]: {
        payload: oO.extend({
          evt: ai(ZO.SPEAKING_START),
          data: Kr({
            lobby_id: Dr().optional(),
            channel_id: Dr().optional(),
            user_id: Dr()
          })
        }),
        subscribeArgs: Kr({
          lobby_id: Dr().nullable().optional(),
          channel_id: Dr().nullable().optional()
        })
      },
      [ZO.SPEAKING_STOP]: {
        payload: oO.extend({
          evt: ai(ZO.SPEAKING_STOP),
          data: Kr({
            lobby_id: Dr().optional(),
            channel_id: Dr().optional(),
            user_id: Dr()
          })
        }),
        subscribeArgs: Kr({
          lobby_id: Dr().nullable().optional(),
          channel_id: Dr().nullable().optional()
        })
      },
      [ZO.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: oO.extend({
          evt: ai(ZO.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: Kr({
            layout_mode: Yi(DO)
          })
        })
      },
      [ZO.ORIENTATION_UPDATE]: {
        payload: oO.extend({
          evt: ai(ZO.ORIENTATION_UPDATE),
          data: Kr({
            screen_orientation: Yi(sO),
            orientation: ni(Zi)
          })
        })
      },
      [ZO.CURRENT_USER_UPDATE]: {
        payload: oO.extend({
          evt: ai(ZO.CURRENT_USER_UPDATE),
          data: ci
        })
      },
      [ZO.ENTITLEMENT_CREATE]: {
        payload: oO.extend({
          evt: ai(ZO.ENTITLEMENT_CREATE),
          data: Kr({
            entitlement: pO
          })
        })
      },
      [ZO.THERMAL_STATE_UPDATE]: {
        payload: oO.extend({
          evt: ai(ZO.THERMAL_STATE_UPDATE),
          data: Kr({
            thermal_state: WO
          })
        })
      },
      [ZO.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: oO.extend({
          evt: ai(ZO.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: Kr({
            participants: Fi.shape.participants
          })
        })
      }
    };
    const xO = Kr({}).nullable(),
      vO = Kr({
        code: Dr()
      }),
      FO = Kr({
        guilds: Ir(Kr({
          id: Dr(),
          name: Dr()
        }))
      }),
      BO = Kr({
        id: Dr(),
        name: Dr(),
        icon_url: Dr().optional(),
        members: Ir(MO)
      }),
      XO = Kr({
        id: Dr(),
        type: Yi(PO),
        guild_id: Dr().optional().nullable(),
        name: Dr().optional().nullable(),
        topic: Dr().optional().nullable(),
        bitrate: kr().optional().nullable(),
        user_limit: kr().optional().nullable(),
        position: kr().optional().nullable(),
        voice_states: Ir(OO),
        messages: Ir(bO)
      }),
      IO = Kr({
        channels: Ir(nO)
      }),
      KO = (XO.nullable(), XO.nullable()),
      qO = XO.nullable(),
      TO = (Kr({
        input: uO,
        output: uO,
        mode: gO,
        automatic_gain_control: fr(),
        echo_cancellation: fr(),
        noise_suppression: fr(),
        qos: fr(),
        silence_warning: fr(),
        deaf: fr(),
        mute: fr()
      }), Kr({
        evt: Dr()
      })),
      VO = Kr({
        shortcut: tO
      }),
      cO = jO,
      MS = Kr({
        skus: Ir(RO)
      }),
      rS = Kr({
        entitlements: Ir(pO)
      }),
      iS = Ir(pO).nullable(),
      OS = Kr({
        use_interactive_pip: fr()
      }),
      SS = Kr({
        locale: Dr()
      }),
      jS = Kr({
        enabled: fr()
      }),
      aS = Kr({
        permissions: or().or(Dr())
      }),
      PS = Kr({
        iosKeyboardResizesView: Li(fr())
      }),
      nS = Vi.extend({
        cmd: ni(Ti),
        evt: xr()
      });

    function QS(MM) {
      let {
        cmd: rM,
        data: iM
      } = MM;
      switch (rM) {
        case Ti.AUTHORIZE:
          return vO.parse(iM);
        case Ti.CAPTURE_SHORTCUT:
          return VO.parse(iM);
        case Ti.ENCOURAGE_HW_ACCELERATION:
          return jS.parse(iM);
        case Ti.GET_CHANNEL:
          return XO.parse(iM);
        case Ti.GET_CHANNELS:
          return IO.parse(iM);
        case Ti.GET_CHANNEL_PERMISSIONS:
          return aS.parse(iM);
        case Ti.GET_GUILD:
          return BO.parse(iM);
        case Ti.GET_GUILDS:
          return FO.parse(iM);
        case Ti.GET_PLATFORM_BEHAVIORS:
          return PS.parse(iM);
        case Ti.GET_CHANNEL:
          return XO.parse(iM);
        case Ti.SELECT_TEXT_CHANNEL:
          return qO.parse(iM);
        case Ti.SELECT_VOICE_CHANNEL:
          return KO.parse(iM);
        case Ti.SET_ACTIVITY:
          return cO.parse(iM);
        case Ti.GET_SKUS_EMBEDDED:
          return MS.parse(iM);
        case Ti.GET_ENTITLEMENTS_EMBEDDED:
          return rS.parse(iM);
        case Ti.SET_CONFIG:
          return OS.parse(iM);
        case Ti.START_PURCHASE:
          return iS.parse(iM);
        case Ti.SUBSCRIBE:
        case Ti.UNSUBSCRIBE:
          return TO.parse(iM);
        case Ti.USER_SETTINGS_GET_LOCALE:
          return SS.parse(iM);
        case Ti.OPEN_EXTERNAL_LINK:
        case Ti.SET_ORIENTATION_LOCK_STATE:
        case Ti.SET_CERTIFIED_DEVICES:
        case Ti.SEND_ANALYTICS_EVENT:
        case Ti.OPEN_INVITE_DIALOG:
        case Ti.CAPTURE_LOG:
        case Ti.GET_SKUS:
        case Ti.GET_ENTITLEMENTS:
          return xO.parse(iM);
        case Ti.AUTHENTICATE:
        case Ti.INITIATE_IMAGE_UPLOAD:
        case Ti.OPEN_SHARE_MOMENT_DIALOG:
        case Ti.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: MM
          } = Ki[rM];
          return MM.parse(iM);
        default:
          ! function(MM, rM) {
            throw rM
          }(0, new Error(`Unrecognized command ${rM}`))
      }
    }
    Kr({
      frame_id: Dr(),
      platform: ni(oi).optional().nullable()
    }), Kr({
      v: ai(1),
      encoding: ai("json").optional(),
      client_id: Dr(),
      frame_id: Dr()
    });
    const zS = Kr({
        code: kr(),
        message: Dr().optional()
      }),
      LS = Kr({
        evt: Dr().nullable(),
        nonce: Dr().nullable(),
        data: Fr().nullable(),
        cmd: Dr()
      }).passthrough();

    function mS(MM) {
      const rM = LS.parse(MM);
      return null != rM.evt ? rM.evt === kO ? fO.parse(rM) : function(MM) {
        const rM = MM.evt;
        if (!(rM in ZO)) throw new Error(`Unrecognized event type ${MM.evt}`);
        return AO[rM].payload.parse(MM)
      }(NO.parse(rM)) : function(MM) {
        return Object.assign(Object.assign({}, MM), {
          data: QS(MM)
        })
      }(nS.passthrough().parse(rM))
    }

    function HS(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const SM = Vi.extend({
        cmd: ai(rM),
        data: iM
      });
      return async iM => {
        const jM = await MM({
          cmd: rM,
          args: iM,
          transfer: OM(iM)
        });
        return SM.parse(jM).data
      }
    }

    function hS(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const iM = Ki[MM].response,
        OM = Vi.extend({
          cmd: ai(MM),
          data: iM
        });
      return iM => async SM => {
        const jM = await iM({
          cmd: MM,
          args: SM,
          transfer: rM(SM)
        });
        return OM.parse(jM).data
      }
    }
    const JS = hS(Bi.AUTHENTICATE),
      dS = MM => HS(MM, Ti.AUTHORIZE, vO),
      yS = MM => HS(MM, Ti.CAPTURE_LOG, xO),
      lS = MM => HS(MM, Ti.ENCOURAGE_HW_ACCELERATION, jS),
      ES = MM => HS(MM, Ti.GET_ENTITLEMENTS_EMBEDDED, rS),
      US = MM => HS(MM, Ti.GET_SKUS_EMBEDDED, MS),
      GS = MM => HS(MM, Ti.GET_CHANNEL_PERMISSIONS, aS),
      CS = MM => HS(MM, Ti.GET_PLATFORM_BEHAVIORS, PS),
      eS = MM => HS(MM, Ti.OPEN_EXTERNAL_LINK, xO),
      bS = MM => HS(MM, Ti.OPEN_INVITE_DIALOG, xO),
      wS = hS(Bi.OPEN_SHARE_MOMENT_DIALOG);
    jO.LH({
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
      type: jO.shape.type.optional(),
      instance: jO.shape.instance.optional()
    }).nullable();
    const tS = MM => HS(MM, Ti.SET_ACTIVITY, cO),
      gS = MM => HS(MM, Ti.SET_CONFIG, OS);
    const uS = MM => ({
        lock_state: MM.lock_state,
        picture_in_picture_lock_state: MM.picture_in_picture_lock_state
      }),
      RS = MM => function(MM) {
        let {
          sendCommand: rM,
          cmd: iM,
          response: OM,
          fallbackTransform: SM,
          transferTransform: jM = () => {}
        } = MM;
        const aM = Vi.extend({
          cmd: ai(iM),
          data: OM
        });
        return async MM => {
          try {
            const OM = await rM({
              cmd: iM,
              args: MM,
              transfer: jM(MM)
            });
            return aM.parse(OM).data
          } catch (OM) {
            if (OM.code === ki.INVALID_PAYLOAD) {
              const OM = SM(MM),
                PM = await rM({
                  cmd: iM,
                  args: OM,
                  transfer: jM(OM)
                });
              return aM.parse(PM).data
            }
            throw OM
          }
        }
      }({
        sendCommand: MM,
        cmd: Ti.SET_ORIENTATION_LOCK_STATE,
        response: xO,
        fallbackTransform: uS
      }),
      pS = MM => HS(MM, Ti.START_PURCHASE, iS),
      WS = MM => HS(MM, Ti.USER_SETTINGS_GET_LOCALE, SS),
      sS = hS(Bi.INITIATE_IMAGE_UPLOAD),
      DS = MM => HS(MM, Ti.GET_CHANNEL, XO),
      kS = hS(Bi.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var ZS = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function oS(MM) {
      return "string" === typeof MM && ZS.test(MM)
    }
    for (var fS = [], YS = 0; YS < 256; ++YS) fS.push((YS + 256).toString(16).substr(1));

    function NS(MM) {
      var rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        iM = (fS[MM[rM + 0]] + fS[MM[rM + 1]] + fS[MM[rM + 2]] + fS[MM[rM + 3]] + "-" + fS[MM[rM + 4]] + fS[MM[rM + 5]] + "-" + fS[MM[rM + 6]] + fS[MM[rM + 7]] + "-" + fS[MM[rM + 8]] + fS[MM[rM + 9]] + "-" + fS[MM[rM + 10]] + fS[MM[rM + 11]] + fS[MM[rM + 12]] + fS[MM[rM + 13]] + fS[MM[rM + 14]] + fS[MM[rM + 15]]).toLowerCase();
      if (!oS(iM)) throw TypeError("Stringified UUID is invalid");
      return iM
    }
    var AS;

    function xS(MM, rM, iM) {
      function OM(MM, OM, SM, jM) {
        if ("string" === typeof MM && (MM = function(MM) {
            MM = unescape(encodeURIComponent(MM));
            for (var rM = [], iM = 0; iM < MM.length; ++iM) rM.push(MM.charCodeAt(iM));
            return rM
          }(MM)), "string" === typeof OM && (OM = function(MM) {
            if (!oS(MM)) throw TypeError("Invalid UUID");
            var rM, iM = new Uint8Array(16);
            return iM[0] = (rM = parseInt(MM.slice(0, 8), 16)) >>> 24, iM[1] = rM >>> 16 & 255, iM[2] = rM >>> 8 & 255, iM[3] = 255 & rM, iM[4] = (rM = parseInt(MM.slice(9, 13), 16)) >>> 8, iM[5] = 255 & rM, iM[6] = (rM = parseInt(MM.slice(14, 18), 16)) >>> 8, iM[7] = 255 & rM, iM[8] = (rM = parseInt(MM.slice(19, 23), 16)) >>> 8, iM[9] = 255 & rM, iM[10] = (rM = parseInt(MM.slice(24, 36), 16)) / 1099511627776 & 255, iM[11] = rM / 4294967296 & 255, iM[12] = rM >>> 24 & 255, iM[13] = rM >>> 16 & 255, iM[14] = rM >>> 8 & 255, iM[15] = 255 & rM, iM
          }(OM)), 16 !== OM.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var aM = new Uint8Array(16 + MM.length);
        if (aM.set(OM), aM.set(MM, OM.length), (aM = iM(aM))[6] = 15 & aM[6] | rM, aM[8] = 63 & aM[8] | 128, SM) {
          jM = jM || 0;
          for (var PM = 0; PM < 16; ++PM) SM[jM + PM] = aM[PM];
          return SM
        }
        return NS(aM)
      }
      try {
        OM.name = MM
      } catch (SM) {}
      return OM.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", OM.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", OM
    }

    function vS(MM) {
      return 14 + (MM + 64 >>> 9 << 4) + 1
    }

    function FS(MM, rM) {
      var iM = (65535 & MM) + (65535 & rM);
      return (MM >> 16) + (rM >> 16) + (iM >> 16) << 16 | 65535 & iM
    }

    function BS(MM, rM, iM, OM, SM, jM) {
      return FS((aM = FS(FS(rM, MM), FS(OM, jM))) << (PM = SM) | aM >>> 32 - PM, iM);
      var aM, PM
    }

    function XS(MM, rM, iM, OM, SM, jM, aM) {
      return BS(rM & iM | ~rM & OM, MM, rM, SM, jM, aM)
    }

    function IS(MM, rM, iM, OM, SM, jM, aM) {
      return BS(rM & OM | iM & ~OM, MM, rM, SM, jM, aM)
    }

    function KS(MM, rM, iM, OM, SM, jM, aM) {
      return BS(rM ^ iM ^ OM, MM, rM, SM, jM, aM)
    }

    function qS(MM, rM, iM, OM, SM, jM, aM) {
      return BS(iM ^ (rM | ~OM), MM, rM, SM, jM, aM)
    }
    xS("v3", 48, (function(MM) {
      if ("string" === typeof MM) {
        var rM = unescape(encodeURIComponent(MM));
        MM = new Uint8Array(rM.length);
        for (var iM = 0; iM < rM.length; ++iM) MM[iM] = rM.charCodeAt(iM)
      }
      return function(MM) {
        for (var rM = [], iM = 32 * MM.length, OM = "0123456789abcdef", SM = 0; SM < iM; SM += 8) {
          var jM = MM[SM >> 5] >>> SM % 32 & 255,
            aM = parseInt(OM.charAt(jM >>> 4 & 15) + OM.charAt(15 & jM), 16);
          rM.push(aM)
        }
        return rM
      }(function(MM, rM) {
        MM[rM >> 5] |= 128 << rM % 32, MM[vS(rM) - 1] = rM;
        for (var iM = 1732584193, OM = -271733879, SM = -1732584194, jM = 271733878, aM = 0; aM < MM.length; aM += 16) {
          var PM = iM,
            nM = OM,
            QM = SM,
            zM = jM;
          iM = XS(iM, OM, SM, jM, MM[aM], 7, -680876936), jM = XS(jM, iM, OM, SM, MM[aM + 1], 12, -389564586), SM = XS(SM, jM, iM, OM, MM[aM + 2], 17, 606105819), OM = XS(OM, SM, jM, iM, MM[aM + 3], 22, -1044525330), iM = XS(iM, OM, SM, jM, MM[aM + 4], 7, -176418897), jM = XS(jM, iM, OM, SM, MM[aM + 5], 12, 1200080426), SM = XS(SM, jM, iM, OM, MM[aM + 6], 17, -1473231341), OM = XS(OM, SM, jM, iM, MM[aM + 7], 22, -45705983), iM = XS(iM, OM, SM, jM, MM[aM + 8], 7, 1770035416), jM = XS(jM, iM, OM, SM, MM[aM + 9], 12, -1958414417), SM = XS(SM, jM, iM, OM, MM[aM + 10], 17, -42063), OM = XS(OM, SM, jM, iM, MM[aM + 11], 22, -1990404162), iM = XS(iM, OM, SM, jM, MM[aM + 12], 7, 1804603682), jM = XS(jM, iM, OM, SM, MM[aM + 13], 12, -40341101), SM = XS(SM, jM, iM, OM, MM[aM + 14], 17, -1502002290), iM = IS(iM, OM = XS(OM, SM, jM, iM, MM[aM + 15], 22, 1236535329), SM, jM, MM[aM + 1], 5, -165796510), jM = IS(jM, iM, OM, SM, MM[aM + 6], 9, -1069501632), SM = IS(SM, jM, iM, OM, MM[aM + 11], 14, 643717713), OM = IS(OM, SM, jM, iM, MM[aM], 20, -373897302), iM = IS(iM, OM, SM, jM, MM[aM + 5], 5, -701558691), jM = IS(jM, iM, OM, SM, MM[aM + 10], 9, 38016083), SM = IS(SM, jM, iM, OM, MM[aM + 15], 14, -660478335), OM = IS(OM, SM, jM, iM, MM[aM + 4], 20, -405537848), iM = IS(iM, OM, SM, jM, MM[aM + 9], 5, 568446438), jM = IS(jM, iM, OM, SM, MM[aM + 14], 9, -1019803690), SM = IS(SM, jM, iM, OM, MM[aM + 3], 14, -187363961), OM = IS(OM, SM, jM, iM, MM[aM + 8], 20, 1163531501), iM = IS(iM, OM, SM, jM, MM[aM + 13], 5, -1444681467), jM = IS(jM, iM, OM, SM, MM[aM + 2], 9, -51403784), SM = IS(SM, jM, iM, OM, MM[aM + 7], 14, 1735328473), iM = KS(iM, OM = IS(OM, SM, jM, iM, MM[aM + 12], 20, -1926607734), SM, jM, MM[aM + 5], 4, -378558), jM = KS(jM, iM, OM, SM, MM[aM + 8], 11, -2022574463), SM = KS(SM, jM, iM, OM, MM[aM + 11], 16, 1839030562), OM = KS(OM, SM, jM, iM, MM[aM + 14], 23, -35309556), iM = KS(iM, OM, SM, jM, MM[aM + 1], 4, -1530992060), jM = KS(jM, iM, OM, SM, MM[aM + 4], 11, 1272893353), SM = KS(SM, jM, iM, OM, MM[aM + 7], 16, -155497632), OM = KS(OM, SM, jM, iM, MM[aM + 10], 23, -1094730640), iM = KS(iM, OM, SM, jM, MM[aM + 13], 4, 681279174), jM = KS(jM, iM, OM, SM, MM[aM], 11, -358537222), SM = KS(SM, jM, iM, OM, MM[aM + 3], 16, -722521979), OM = KS(OM, SM, jM, iM, MM[aM + 6], 23, 76029189), iM = KS(iM, OM, SM, jM, MM[aM + 9], 4, -640364487), jM = KS(jM, iM, OM, SM, MM[aM + 12], 11, -421815835), SM = KS(SM, jM, iM, OM, MM[aM + 15], 16, 530742520), iM = qS(iM, OM = KS(OM, SM, jM, iM, MM[aM + 2], 23, -995338651), SM, jM, MM[aM], 6, -198630844), jM = qS(jM, iM, OM, SM, MM[aM + 7], 10, 1126891415), SM = qS(SM, jM, iM, OM, MM[aM + 14], 15, -1416354905), OM = qS(OM, SM, jM, iM, MM[aM + 5], 21, -57434055), iM = qS(iM, OM, SM, jM, MM[aM + 12], 6, 1700485571), jM = qS(jM, iM, OM, SM, MM[aM + 3], 10, -1894986606), SM = qS(SM, jM, iM, OM, MM[aM + 10], 15, -1051523), OM = qS(OM, SM, jM, iM, MM[aM + 1], 21, -2054922799), iM = qS(iM, OM, SM, jM, MM[aM + 8], 6, 1873313359), jM = qS(jM, iM, OM, SM, MM[aM + 15], 10, -30611744), SM = qS(SM, jM, iM, OM, MM[aM + 6], 15, -1560198380), OM = qS(OM, SM, jM, iM, MM[aM + 13], 21, 1309151649), iM = qS(iM, OM, SM, jM, MM[aM + 4], 6, -145523070), jM = qS(jM, iM, OM, SM, MM[aM + 11], 10, -1120210379), SM = qS(SM, jM, iM, OM, MM[aM + 2], 15, 718787259), OM = qS(OM, SM, jM, iM, MM[aM + 9], 21, -343485551), iM = FS(iM, PM), OM = FS(OM, nM), SM = FS(SM, QM), jM = FS(jM, zM)
        }
        return [iM, OM, SM, jM]
      }(function(MM) {
        if (0 === MM.length) return [];
        for (var rM = 8 * MM.length, iM = new Uint32Array(vS(rM)), OM = 0; OM < rM; OM += 8) iM[OM >> 5] |= (255 & MM[OM / 8]) << OM % 32;
        return iM
      }(MM), 8 * MM.length))
    }));
    var TS = new Uint8Array(16);

    function VS() {
      if (!AS && !(AS = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return AS(TS)
    }

    function cS(MM, rM, iM) {
      var OM = (MM = MM || {}).random || (MM.rng || VS)();
      if (OM[6] = 15 & OM[6] | 64, OM[8] = 63 & OM[8] | 128, rM) {
        iM = iM || 0;
        for (var SM = 0; SM < 16; ++SM) rM[iM + SM] = OM[SM];
        return rM
      }
      return NS(OM)
    }

    function Mj(MM, rM, iM, OM) {
      switch (MM) {
        case 0:
          return rM & iM ^ ~rM & OM;
        case 1:
        case 3:
          return rM ^ iM ^ OM;
        case 2:
          return rM & iM ^ rM & OM ^ iM & OM
      }
    }

    function rj(MM, rM) {
      return MM << rM | MM >>> 32 - rM
    }
    xS("v5", 80, (function(MM) {
      var rM = [1518500249, 1859775393, 2400959708, 3395469782],
        iM = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof MM) {
        var OM = unescape(encodeURIComponent(MM));
        MM = [];
        for (var SM = 0; SM < OM.length; ++SM) MM.push(OM.charCodeAt(SM))
      } else Array.isArray(MM) || (MM = Array.prototype.slice.call(MM));
      MM.push(128);
      for (var jM = MM.length / 4 + 2, aM = Math.ceil(jM / 16), PM = new Array(aM), nM = 0; nM < aM; ++nM) {
        for (var QM = new Uint32Array(16), zM = 0; zM < 16; ++zM) QM[zM] = MM[64 * nM + 4 * zM] << 24 | MM[64 * nM + 4 * zM + 1] << 16 | MM[64 * nM + 4 * zM + 2] << 8 | MM[64 * nM + 4 * zM + 3];
        PM[nM] = QM
      }
      PM[aM - 1][14] = 8 * (MM.length - 1) / Math.pow(2, 32), PM[aM - 1][14] = Math.floor(PM[aM - 1][14]), PM[aM - 1][15] = 8 * (MM.length - 1) & 4294967295;
      for (var LM = 0; LM < aM; ++LM) {
        for (var mM = new Uint32Array(80), HM = 0; HM < 16; ++HM) mM[HM] = PM[LM][HM];
        for (var hM = 16; hM < 80; ++hM) mM[hM] = rj(mM[hM - 3] ^ mM[hM - 8] ^ mM[hM - 14] ^ mM[hM - 16], 1);
        for (var JM = iM[0], dM = iM[1], yM = iM[2], lM = iM[3], EM = iM[4], UM = 0; UM < 80; ++UM) {
          var GM = Math.floor(UM / 20),
            CM = rj(JM, 5) + Mj(GM, dM, yM, lM) + EM + rM[GM] + mM[UM] >>> 0;
          EM = lM, lM = yM, yM = rj(dM, 30) >>> 0, dM = JM, JM = CM
        }
        iM[0] = iM[0] + JM >>> 0, iM[1] = iM[1] + dM >>> 0, iM[2] = iM[2] + yM >>> 0, iM[3] = iM[3] + lM >>> 0, iM[4] = iM[4] + EM >>> 0
      }
      return [iM[0] >> 24 & 255, iM[0] >> 16 & 255, iM[0] >> 8 & 255, 255 & iM[0], iM[1] >> 24 & 255, iM[1] >> 16 & 255, iM[1] >> 8 & 255, 255 & iM[1], iM[2] >> 24 & 255, iM[2] >> 16 & 255, iM[2] >> 8 & 255, 255 & iM[2], iM[3] >> 24 & 255, iM[3] >> 16 & 255, iM[3] >> 8 & 255, 255 & iM[3], iM[4] >> 24 & 255, iM[4] >> 16 & 255, iM[4] >> 8 & 255, 255 & iM[4]]
    }));
    class ij extends Error {
      constructor(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(rM), this.code = MM, this.message = rM, this.name = "Discord SDK Error"
      }
    }
    const Oj = ["log", "warn", "debug", "info", "error"];
    var Sj;
    ! function(MM) {
      MM[MM.HANDSHAKE = 0] = "HANDSHAKE", MM[MM.FRAME = 1] = "FRAME", MM[MM.CLOSE = 2] = "CLOSE", MM[MM.HELLO = 3] = "HELLO"
    }(Sj || (Sj = {}));
    const jj = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class aj {
      getTransfer(MM) {
        var rM;
        switch (MM.cmd) {
          case Ti.SUBSCRIBE:
          case Ti.UNSUBSCRIBE:
            return;
          default:
            return null !== (rM = MM.transfer) && void 0 !== rM ? rM : void 0
        }
      }
      constructor(MM, rM) {
        var iM;
        if (this.eventBus = new QM, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = MM => {
            var rM;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const iM = cS();
            null === (rM = this.source) || void 0 === rM || rM.postMessage([Sj.FRAME, Object.assign(Object.assign({}, MM), {
              nonce: iM
            })], this.sourceOrigin, this.getTransfer(MM));
            return new Promise(((MM, rM) => {
              this.pendingCommands.set(iM, {
                resolve: MM,
                reject: rM
              })
            }))
          }, this.commands = (iM = this.sendCommand, {
            authenticate: JS(iM),
            authorize: dS(iM),
            captureLog: yS(iM),
            encourageHardwareAcceleration: lS(iM),
            getChannel: DS(iM),
            getChannelPermissions: GS(iM),
            getEntitlements: ES(iM),
            getPlatformBehaviors: CS(iM),
            getSkus: US(iM),
            openExternalLink: eS(iM),
            openInviteDialog: bS(iM),
            openShareMomentDialog: wS(iM),
            setActivity: tS(iM),
            setConfig: gS(iM),
            setOrientationLockState: RS(iM),
            startPurchase: pS(iM),
            userSettingsGetLocale: WS(iM),
            initiateImageUpload: sS(iM),
            getInstanceConnectedParticipants: kS(iM)
          }), this.handleMessage = MM => {
            if (!jj.has(MM.origin)) return;
            const rM = MM.data;
            if (!Array.isArray(rM)) return;
            const [iM, OM] = rM;
            switch (iM) {
              case Sj.HELLO:
                return;
              case Sj.CLOSE:
                return this.handleClose(OM);
              case Sj.HANDSHAKE:
                return this.handleHandshake();
              case Sj.FRAME:
                return this.handleFrame(OM);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = MM, this.configuration = null !== rM && void 0 !== rM ? rM : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = oi.DESKTOP, this.guildId = null, void(this.channelId = null);
        const OM = new URLSearchParams(this._getSearch()),
          SM = OM.get("frame_id");
        if (!SM) throw new Error("frame_id query param is not defined");
        this.frameId = SM;
        const jM = OM.get("instance_id");
        if (!jM) throw new Error("instance_id query param is not defined");
        this.instanceId = jM;
        const aM = OM.get("platform");
        if (!aM) throw new Error("platform query param is not defined");
        if (aM !== oi.DESKTOP && aM !== oi.MOBILE) throw new Error(`Invalid query param "platform" of "${aM}". Valid values are "${oi.DESKTOP}" or "${oi.MOBILE}"`);
        this.platform = aM, this.guildId = OM.get("guild_id"), this.channelId = OM.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var MM;
          return [null !== (MM = window.parent.opener) && void 0 !== MM ? MM : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(MM, rM) {
        var iM;
        window.removeEventListener("message", this.handleMessage);
        const OM = cS();
        null === (iM = this.source) || void 0 === iM || iM.postMessage([Sj.CLOSE, {
          code: MM,
          message: rM,
          nonce: OM
        }], this.sourceOrigin)
      }
      async subscribe(MM, rM) {
        for (var iM = arguments.length, OM = new Array(iM > 2 ? iM - 2 : 0), SM = 2; SM < iM; SM++) OM[SM - 2] = arguments[SM];
        const [jM] = OM, aM = this.eventBus.listenerCount(MM), PM = this.eventBus.on(MM, rM);
        return Object.values(ZO).includes(MM) && MM !== ZO.READY && 0 === aM && await this.sendCommand({
          cmd: Ti.SUBSCRIBE,
          args: jM,
          evt: MM
        }), PM
      }
      async unsubscribe(MM, rM) {
        for (var iM = arguments.length, OM = new Array(iM > 2 ? iM - 2 : 0), SM = 2; SM < iM; SM++) OM[SM - 2] = arguments[SM];
        const [jM] = OM;
        return MM !== ZO.READY && 1 === this.eventBus.listenerCount(MM) && await this.sendCommand({
          cmd: Ti.UNSUBSCRIBE,
          evt: MM,
          args: jM
        }), this.eventBus.off(MM, rM)
      }
      async ready() {
        this.isReady || await new Promise((MM => {
          this.eventBus.once(ZO.READY, MM)
        }))
      }
      handshake() {
        var MM;
        null === (MM = this.source) || void 0 === MM || MM.postMessage([Sj.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(ZO.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const MM = (MM, rM) => {
          this.commands.captureLog({
            level: MM,
            message: rM
          })
        };
        Oj.forEach((rM => {
          ! function(MM, rM, iM) {
            const OM = MM[rM],
              SM = MM;
            OM && (MM[rM] = function() {
              const MM = [].slice.call(arguments),
                jM = "" + MM.join(" ");
              iM(rM, jM), OM.apply(SM, MM)
            })
          }(console, rM, MM)
        }))
      }
      handleClose(MM) {
        zS.parse(MM)
      }
      handleHandshake() {}
      handleFrame(MM) {
        var rM, iM;
        let OM;
        try {
          OM = mS(MM)
        } catch (SM) {
          return console.error("Failed to parse", MM), void console.error(SM)
        }
        if ("DISPATCH" === OM.cmd) this.eventBus.emit(OM.evt, OM.data);
        else {
          if (OM.evt === kO) {
            if (null != OM.nonce) return null === (rM = this.pendingCommands.get(OM.nonce)) || void 0 === rM || rM.reject(OM.data), void this.pendingCommands.delete(OM.nonce);
            this.eventBus.emit("error", new ij(OM.data.code, OM.data.message))
          }
          if (null == OM.nonce) return void console.error("Missing nonce", MM);
          null === (iM = this.pendingCommands.get(OM.nonce)) || void 0 === iM || iM.resolve(OM), this.pendingCommands.delete(OM.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var Pj, nj = 1e9,
      Qj = !0,
      zj = "[DecimalError] ",
      Lj = zj + "Invalid argument: ",
      mj = zj + "Exponent out of range: ",
      Hj = Math.floor,
      hj = Math.pow,
      Jj = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      dj = 1e7,
      yj = 9007199254740991,
      lj = Hj(1286742750677284.5),
      Ej = {};

    function Uj(MM, rM) {
      var iM, OM, SM, jM, aM, PM, nM, QM, zM = MM.constructor,
        LM = zM.precision;
      if (!MM.s || !rM.s) return rM.s || (rM = new zM(MM)), Qj ? pj(rM, LM) : rM;
      if (nM = MM.d, QM = rM.d, aM = MM.e, SM = rM.e, nM = nM.slice(), jM = aM - SM) {
        for (jM < 0 ? (OM = nM, jM = -jM, PM = QM.length) : (OM = QM, SM = aM, PM = nM.length), jM > (PM = (aM = Math.ceil(LM / 7)) > PM ? aM + 1 : PM + 1) && (jM = PM, OM.length = 1), OM.reverse(); jM--;) OM.push(0);
        OM.reverse()
      }
      for ((PM = nM.length) - (jM = QM.length) < 0 && (jM = PM, OM = QM, QM = nM, nM = OM), iM = 0; jM;) iM = (nM[--jM] = nM[jM] + QM[jM] + iM) / dj | 0, nM[jM] %= dj;
      for (iM && (nM.unshift(iM), ++SM), PM = nM.length; 0 == nM[--PM];) nM.pop();
      return rM.d = nM, rM.e = SM, Qj ? pj(rM, LM) : rM
    }

    function Gj(MM, rM, iM) {
      if (MM !== ~~MM || MM < rM || MM > iM) throw Error(Lj + MM)
    }

    function Cj(MM) {
      var rM, iM, OM, SM = MM.length - 1,
        jM = "",
        aM = MM[0];
      if (SM > 0) {
        for (jM += aM, rM = 1; rM < SM; rM++)(iM = 7 - (OM = MM[rM] + "").length) && (jM += gj(iM)), jM += OM;
        (iM = 7 - (OM = (aM = MM[rM]) + "").length) && (jM += gj(iM))
      } else if (0 === aM) return "0";
      for (; aM % 10 === 0;) aM /= 10;
      return jM + aM
    }
    Ej.absoluteValue = Ej.abs = function() {
      var MM = new this.constructor(this);
      return MM.s && (MM.s = 1), MM
    }, Ej.comparedTo = Ej.cmp = function(MM) {
      var rM, iM, OM, SM, jM = this;
      if (MM = new jM.constructor(MM), jM.s !== MM.s) return jM.s || -MM.s;
      if (jM.e !== MM.e) return jM.e > MM.e ^ jM.s < 0 ? 1 : -1;
      for (rM = 0, iM = (OM = jM.d.length) < (SM = MM.d.length) ? OM : SM; rM < iM; ++rM)
        if (jM.d[rM] !== MM.d[rM]) return jM.d[rM] > MM.d[rM] ^ jM.s < 0 ? 1 : -1;
      return OM === SM ? 0 : OM > SM ^ jM.s < 0 ? 1 : -1
    }, Ej.decimalPlaces = Ej.dp = function() {
      var MM = this,
        rM = MM.d.length - 1,
        iM = 7 * (rM - MM.e);
      if (rM = MM.d[rM])
        for (; rM % 10 == 0; rM /= 10) iM--;
      return iM < 0 ? 0 : iM
    }, Ej.dividedBy = Ej.div = function(MM) {
      return ej(this, new this.constructor(MM))
    }, Ej.dividedToIntegerBy = Ej.idiv = function(MM) {
      var rM = this.constructor;
      return pj(ej(this, new rM(MM), 0, 1), rM.precision)
    }, Ej.equals = Ej.eq = function(MM) {
      return !this.cmp(MM)
    }, Ej.exponent = function() {
      return wj(this)
    }, Ej.greaterThan = Ej.gt = function(MM) {
      return this.cmp(MM) > 0
    }, Ej.greaterThanOrEqualTo = Ej.gte = function(MM) {
      return this.cmp(MM) >= 0
    }, Ej.isInteger = Ej.isint = function() {
      return this.e > this.d.length - 2
    }, Ej.isNegative = Ej.isneg = function() {
      return this.s < 0
    }, Ej.isPositive = Ej.ispos = function() {
      return this.s > 0
    }, Ej.isZero = function() {
      return 0 === this.s
    }, Ej.lessThan = Ej.lt = function(MM) {
      return this.cmp(MM) < 0
    }, Ej.lessThanOrEqualTo = Ej.lte = function(MM) {
      return this.cmp(MM) < 1
    }, Ej.logarithm = Ej.log = function(MM) {
      var rM, iM = this,
        OM = iM.constructor,
        SM = OM.precision,
        jM = SM + 5;
      if (void 0 === MM) MM = new OM(10);
      else if ((MM = new OM(MM)).s < 1 || MM.eq(Pj)) throw Error(zj + "NaN");
      if (iM.s < 1) throw Error(zj + (iM.s ? "NaN" : "-Infinity"));
      return iM.eq(Pj) ? new OM(0) : (Qj = !1, rM = ej(uj(iM, jM), uj(MM, jM), jM), Qj = !0, pj(rM, SM))
    }, Ej.minus = Ej.sub = function(MM) {
      var rM = this;
      return MM = new rM.constructor(MM), rM.s == MM.s ? Wj(rM, MM) : Uj(rM, (MM.s = -MM.s, MM))
    }, Ej.modulo = Ej.mod = function(MM) {
      var rM, iM = this,
        OM = iM.constructor,
        SM = OM.precision;
      if (!(MM = new OM(MM)).s) throw Error(zj + "NaN");
      return iM.s ? (Qj = !1, rM = ej(iM, MM, 0, 1).times(MM), Qj = !0, iM.minus(rM)) : pj(new OM(iM), SM)
    }, Ej.naturalExponential = Ej.exp = function() {
      return bj(this)
    }, Ej.naturalLogarithm = Ej.ln = function() {
      return uj(this)
    }, Ej.negated = Ej.neg = function() {
      var MM = new this.constructor(this);
      return MM.s = -MM.s || 0, MM
    }, Ej.plus = Ej.add = function(MM) {
      var rM = this;
      return MM = new rM.constructor(MM), rM.s == MM.s ? Uj(rM, MM) : Wj(rM, (MM.s = -MM.s, MM))
    }, Ej.precision = Ej.sd = function(MM) {
      var rM, iM, OM, SM = this;
      if (void 0 !== MM && MM !== !!MM && 1 !== MM && 0 !== MM) throw Error(Lj + MM);
      if (rM = wj(SM) + 1, iM = 7 * (OM = SM.d.length - 1) + 1, OM = SM.d[OM]) {
        for (; OM % 10 == 0; OM /= 10) iM--;
        for (OM = SM.d[0]; OM >= 10; OM /= 10) iM++
      }
      return MM && rM > iM ? rM : iM
    }, Ej.squareRoot = Ej.sqrt = function() {
      var MM, rM, iM, OM, SM, jM, aM, PM = this,
        nM = PM.constructor;
      if (PM.s < 1) {
        if (!PM.s) return new nM(0);
        throw Error(zj + "NaN")
      }
      for (MM = wj(PM), Qj = !1, 0 == (SM = Math.sqrt(+PM)) || SM == 1 / 0 ? (((rM = Cj(PM.d)).length + MM) % 2 == 0 && (rM += "0"), SM = Math.sqrt(rM), MM = Hj((MM + 1) / 2) - (MM < 0 || MM % 2), OM = new nM(rM = SM == 1 / 0 ? "1e" + MM : (rM = SM.toExponential()).slice(0, rM.indexOf("e") + 1) + MM)) : OM = new nM(SM.toString()), SM = aM = (iM = nM.precision) + 3;;)
        if (OM = (jM = OM).plus(ej(PM, jM, aM + 2)).times(.5), Cj(jM.d).slice(0, aM) === (rM = Cj(OM.d)).slice(0, aM)) {
          if (rM = rM.slice(aM - 3, aM + 1), SM == aM && "4999" == rM) {
            if (pj(jM, iM + 1, 0), jM.times(jM).eq(PM)) {
              OM = jM;
              break
            }
          } else if ("9999" != rM) break;
          aM += 4
        } return Qj = !0, pj(OM, iM)
    }, Ej.times = Ej.mul = function(MM) {
      var rM, iM, OM, SM, jM, aM, PM, nM, QM, zM = this,
        LM = zM.constructor,
        mM = zM.d,
        HM = (MM = new LM(MM)).d;
      if (!zM.s || !MM.s) return new LM(0);
      for (MM.s *= zM.s, iM = zM.e + MM.e, (nM = mM.length) < (QM = HM.length) && (jM = mM, mM = HM, HM = jM, aM = nM, nM = QM, QM = aM), jM = [], OM = aM = nM + QM; OM--;) jM.push(0);
      for (OM = QM; --OM >= 0;) {
        for (rM = 0, SM = nM + OM; SM > OM;) PM = jM[SM] + HM[OM] * mM[SM - OM - 1] + rM, jM[SM--] = PM % dj | 0, rM = PM / dj | 0;
        jM[SM] = (jM[SM] + rM) % dj | 0
      }
      for (; !jM[--aM];) jM.pop();
      return rM ? ++iM : jM.shift(), MM.d = jM, MM.e = iM, Qj ? pj(MM, LM.precision) : MM
    }, Ej.toDecimalPlaces = Ej.todp = function(MM, rM) {
      var iM = this,
        OM = iM.constructor;
      return iM = new OM(iM), void 0 === MM ? iM : (Gj(MM, 0, nj), void 0 === rM ? rM = OM.rounding : Gj(rM, 0, 8), pj(iM, MM + wj(iM) + 1, rM))
    }, Ej.toExponential = function(MM, rM) {
      var iM, OM = this,
        SM = OM.constructor;
      return void 0 === MM ? iM = sj(OM, !0) : (Gj(MM, 0, nj), void 0 === rM ? rM = SM.rounding : Gj(rM, 0, 8), iM = sj(OM = pj(new SM(OM), MM + 1, rM), !0, MM + 1)), iM
    }, Ej.toFixed = function(MM, rM) {
      var iM, OM, SM = this,
        jM = SM.constructor;
      return void 0 === MM ? sj(SM) : (Gj(MM, 0, nj), void 0 === rM ? rM = jM.rounding : Gj(rM, 0, 8), iM = sj((OM = pj(new jM(SM), MM + wj(SM) + 1, rM)).abs(), !1, MM + wj(OM) + 1), SM.isneg() && !SM.isZero() ? "-" + iM : iM)
    }, Ej.toInteger = Ej.toint = function() {
      var MM = this,
        rM = MM.constructor;
      return pj(new rM(MM), wj(MM) + 1, rM.rounding)
    }, Ej.toNumber = function() {
      return +this
    }, Ej.toPower = Ej.pow = function(MM) {
      var rM, iM, OM, SM, jM, aM, PM = this,
        nM = PM.constructor,
        QM = +(MM = new nM(MM));
      if (!MM.s) return new nM(Pj);
      if (!(PM = new nM(PM)).s) {
        if (MM.s < 1) throw Error(zj + "Infinity");
        return PM
      }
      if (PM.eq(Pj)) return PM;
      if (OM = nM.precision, MM.eq(Pj)) return pj(PM, OM);
      if (aM = (rM = MM.e) >= (iM = MM.d.length - 1), jM = PM.s, aM) {
        if ((iM = QM < 0 ? -QM : QM) <= yj) {
          for (SM = new nM(Pj), rM = Math.ceil(OM / 7 + 4), Qj = !1; iM % 2 && Dj((SM = SM.times(PM)).d, rM), 0 !== (iM = Hj(iM / 2));) Dj((PM = PM.times(PM)).d, rM);
          return Qj = !0, MM.s < 0 ? new nM(Pj).div(SM) : pj(SM, OM)
        }
      } else if (jM < 0) throw Error(zj + "NaN");
      return jM = jM < 0 && 1 & MM.d[Math.max(rM, iM)] ? -1 : 1, PM.s = 1, Qj = !1, SM = MM.times(uj(PM, OM + 12)), Qj = !0, (SM = bj(SM)).s = jM, SM
    }, Ej.toPrecision = function(MM, rM) {
      var iM, OM, SM = this,
        jM = SM.constructor;
      return void 0 === MM ? OM = sj(SM, (iM = wj(SM)) <= jM.toExpNeg || iM >= jM.toExpPos) : (Gj(MM, 1, nj), void 0 === rM ? rM = jM.rounding : Gj(rM, 0, 8), OM = sj(SM = pj(new jM(SM), MM, rM), MM <= (iM = wj(SM)) || iM <= jM.toExpNeg, MM)), OM
    }, Ej.toSignificantDigits = Ej.tosd = function(MM, rM) {
      var iM = this.constructor;
      return void 0 === MM ? (MM = iM.precision, rM = iM.rounding) : (Gj(MM, 1, nj), void 0 === rM ? rM = iM.rounding : Gj(rM, 0, 8)), pj(new iM(this), MM, rM)
    }, Ej.toString = Ej.valueOf = Ej.val = Ej.toJSON = Ej[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var MM = this,
        rM = wj(MM),
        iM = MM.constructor;
      return sj(MM, rM <= iM.toExpNeg || rM >= iM.toExpPos)
    };
    var ej = function() {
      function MM(MM, rM) {
        var iM, OM = 0,
          SM = MM.length;
        for (MM = MM.slice(); SM--;) iM = MM[SM] * rM + OM, MM[SM] = iM % dj | 0, OM = iM / dj | 0;
        return OM && MM.unshift(OM), MM
      }

      function rM(MM, rM, iM, OM) {
        var SM, jM;
        if (iM != OM) jM = iM > OM ? 1 : -1;
        else
          for (SM = jM = 0; SM < iM; SM++)
            if (MM[SM] != rM[SM]) {
              jM = MM[SM] > rM[SM] ? 1 : -1;
              break
            } return jM
      }

      function iM(MM, rM, iM) {
        for (var OM = 0; iM--;) MM[iM] -= OM, OM = MM[iM] < rM[iM] ? 1 : 0, MM[iM] = OM * dj + MM[iM] - rM[iM];
        for (; !MM[0] && MM.length > 1;) MM.shift()
      }
      return function(OM, SM, jM, aM) {
        var PM, nM, QM, zM, LM, mM, HM, hM, JM, dM, yM, lM, EM, UM, GM, CM, eM, bM, wM = OM.constructor,
          tM = OM.s == SM.s ? 1 : -1,
          gM = OM.d,
          uM = SM.d;
        if (!OM.s) return new wM(OM);
        if (!SM.s) throw Error(zj + "Division by zero");
        for (nM = OM.e - SM.e, eM = uM.length, GM = gM.length, hM = (HM = new wM(tM)).d = [], QM = 0; uM[QM] == (gM[QM] || 0);) ++QM;
        if (uM[QM] > (gM[QM] || 0) && --nM, (lM = null == jM ? jM = wM.precision : aM ? jM + (wj(OM) - wj(SM)) + 1 : jM) < 0) return new wM(0);
        if (lM = lM / 7 + 2 | 0, QM = 0, 1 == eM)
          for (zM = 0, uM = uM[0], lM++;
            (QM < GM || zM) && lM--; QM++) EM = zM * dj + (gM[QM] || 0), hM[QM] = EM / uM | 0, zM = EM % uM | 0;
        else {
          for ((zM = dj / (uM[0] + 1) | 0) > 1 && (uM = MM(uM, zM), gM = MM(gM, zM), eM = uM.length, GM = gM.length), UM = eM, dM = (JM = gM.slice(0, eM)).length; dM < eM;) JM[dM++] = 0;
          (bM = uM.slice()).unshift(0), CM = uM[0], uM[1] >= dj / 2 && ++CM;
          do {
            zM = 0, (PM = rM(uM, JM, eM, dM)) < 0 ? (yM = JM[0], eM != dM && (yM = yM * dj + (JM[1] || 0)), (zM = yM / CM | 0) > 1 ? (zM >= dj && (zM = dj - 1), 1 == (PM = rM(LM = MM(uM, zM), JM, mM = LM.length, dM = JM.length)) && (zM--, iM(LM, eM < mM ? bM : uM, mM))) : (0 == zM && (PM = zM = 1), LM = uM.slice()), (mM = LM.length) < dM && LM.unshift(0), iM(JM, LM, dM), -1 == PM && (PM = rM(uM, JM, eM, dM = JM.length)) < 1 && (zM++, iM(JM, eM < dM ? bM : uM, dM)), dM = JM.length) : 0 === PM && (zM++, JM = [0]), hM[QM++] = zM, PM && JM[0] ? JM[dM++] = gM[UM] || 0 : (JM = [gM[UM]], dM = 1)
          } while ((UM++ < GM || void 0 !== JM[0]) && lM--)
        }
        return hM[0] || hM.shift(), HM.e = nM, pj(HM, aM ? jM + wj(HM) + 1 : jM)
      }
    }();

    function bj(MM, rM) {
      var iM, OM, SM, jM, aM, PM = 0,
        nM = 0,
        QM = MM.constructor,
        zM = QM.precision;
      if (wj(MM) > 16) throw Error(mj + wj(MM));
      if (!MM.s) return new QM(Pj);
      for (null == rM ? (Qj = !1, aM = zM) : aM = rM, jM = new QM(.03125); MM.abs().gte(.1);) MM = MM.times(jM), nM += 5;
      for (aM += Math.log(hj(2, nM)) / Math.LN10 * 2 + 5 | 0, iM = OM = SM = new QM(Pj), QM.precision = aM;;) {
        if (OM = pj(OM.times(MM), aM), iM = iM.times(++PM), Cj((jM = SM.plus(ej(OM, iM, aM))).d).slice(0, aM) === Cj(SM.d).slice(0, aM)) {
          for (; nM--;) SM = pj(SM.times(SM), aM);
          return QM.precision = zM, null == rM ? (Qj = !0, pj(SM, zM)) : SM
        }
        SM = jM
      }
    }

    function wj(MM) {
      for (var rM = 7 * MM.e, iM = MM.d[0]; iM >= 10; iM /= 10) rM++;
      return rM
    }

    function tj(MM, rM, iM) {
      if (rM > MM.LN10.sd()) throw Qj = !0, iM && (MM.precision = iM), Error(zj + "LN10 precision limit exceeded");
      return pj(new MM(MM.LN10), rM)
    }

    function gj(MM) {
      for (var rM = ""; MM--;) rM += "0";
      return rM
    }

    function uj(MM, rM) {
      var iM, OM, SM, jM, aM, PM, nM, QM, zM, LM = 1,
        mM = MM,
        HM = mM.d,
        hM = mM.constructor,
        JM = hM.precision;
      if (mM.s < 1) throw Error(zj + (mM.s ? "NaN" : "-Infinity"));
      if (mM.eq(Pj)) return new hM(0);
      if (null == rM ? (Qj = !1, QM = JM) : QM = rM, mM.eq(10)) return null == rM && (Qj = !0), tj(hM, QM);
      if (QM += 10, hM.precision = QM, OM = (iM = Cj(HM)).charAt(0), jM = wj(mM), !(Math.abs(jM) < 15e14)) return nM = tj(hM, QM + 2, JM).times(jM + ""), mM = uj(new hM(OM + "." + iM.slice(1)), QM - 10).plus(nM), hM.precision = JM, null == rM ? (Qj = !0, pj(mM, JM)) : mM;
      for (; OM < 7 && 1 != OM || 1 == OM && iM.charAt(1) > 3;) OM = (iM = Cj((mM = mM.times(MM)).d)).charAt(0), LM++;
      for (jM = wj(mM), OM > 1 ? (mM = new hM("0." + iM), jM++) : mM = new hM(OM + "." + iM.slice(1)), PM = aM = mM = ej(mM.minus(Pj), mM.plus(Pj), QM), zM = pj(mM.times(mM), QM), SM = 3;;) {
        if (aM = pj(aM.times(zM), QM), Cj((nM = PM.plus(ej(aM, new hM(SM), QM))).d).slice(0, QM) === Cj(PM.d).slice(0, QM)) return PM = PM.times(2), 0 !== jM && (PM = PM.plus(tj(hM, QM + 2, JM).times(jM + ""))), PM = ej(PM, new hM(LM), QM), hM.precision = JM, null == rM ? (Qj = !0, pj(PM, JM)) : PM;
        PM = nM, SM += 2
      }
    }

    function Rj(MM, rM) {
      var iM, OM, SM;
      for ((iM = rM.indexOf(".")) > -1 && (rM = rM.replace(".", "")), (OM = rM.search(/e/i)) > 0 ? (iM < 0 && (iM = OM), iM += +rM.slice(OM + 1), rM = rM.substring(0, OM)) : iM < 0 && (iM = rM.length), OM = 0; 48 === rM.charCodeAt(OM);) ++OM;
      for (SM = rM.length; 48 === rM.charCodeAt(SM - 1);) --SM;
      if (rM = rM.slice(OM, SM)) {
        if (SM -= OM, iM = iM - OM - 1, MM.e = Hj(iM / 7), MM.d = [], OM = (iM + 1) % 7, iM < 0 && (OM += 7), OM < SM) {
          for (OM && MM.d.push(+rM.slice(0, OM)), SM -= 7; OM < SM;) MM.d.push(+rM.slice(OM, OM += 7));
          OM = 7 - (rM = rM.slice(OM)).length
        } else OM -= SM;
        for (; OM--;) rM += "0";
        if (MM.d.push(+rM), Qj && (MM.e > lj || MM.e < -lj)) throw Error(mj + iM)
      } else MM.s = 0, MM.e = 0, MM.d = [0];
      return MM
    }

    function pj(MM, rM, iM) {
      var OM, SM, jM, aM, PM, nM, QM, zM, LM = MM.d;
      for (aM = 1, jM = LM[0]; jM >= 10; jM /= 10) aM++;
      if ((OM = rM - aM) < 0) OM += 7, SM = rM, QM = LM[zM = 0];
      else {
        if ((zM = Math.ceil((OM + 1) / 7)) >= (jM = LM.length)) return MM;
        for (QM = jM = LM[zM], aM = 1; jM >= 10; jM /= 10) aM++;
        SM = (OM %= 7) - 7 + aM
      }
      if (void 0 !== iM && (PM = QM / (jM = hj(10, aM - SM - 1)) % 10 | 0, nM = rM < 0 || void 0 !== LM[zM + 1] || QM % jM, nM = iM < 4 ? (PM || nM) && (0 == iM || iM == (MM.s < 0 ? 3 : 2)) : PM > 5 || 5 == PM && (4 == iM || nM || 6 == iM && (OM > 0 ? SM > 0 ? QM / hj(10, aM - SM) : 0 : LM[zM - 1]) % 10 & 1 || iM == (MM.s < 0 ? 8 : 7))), rM < 1 || !LM[0]) return nM ? (jM = wj(MM), LM.length = 1, rM = rM - jM - 1, LM[0] = hj(10, (7 - rM % 7) % 7), MM.e = Hj(-rM / 7) || 0) : (LM.length = 1, LM[0] = MM.e = MM.s = 0), MM;
      if (0 == OM ? (LM.length = zM, jM = 1, zM--) : (LM.length = zM + 1, jM = hj(10, 7 - OM), LM[zM] = SM > 0 ? (QM / hj(10, aM - SM) % hj(10, SM) | 0) * jM : 0), nM)
        for (;;) {
          if (0 == zM) {
            (LM[0] += jM) == dj && (LM[0] = 1, ++MM.e);
            break
          }
          if (LM[zM] += jM, LM[zM] != dj) break;
          LM[zM--] = 0, jM = 1
        }
      for (OM = LM.length; 0 === LM[--OM];) LM.pop();
      if (Qj && (MM.e > lj || MM.e < -lj)) throw Error(mj + wj(MM));
      return MM
    }

    function Wj(MM, rM) {
      var iM, OM, SM, jM, aM, PM, nM, QM, zM, LM, mM = MM.constructor,
        HM = mM.precision;
      if (!MM.s || !rM.s) return rM.s ? rM.s = -rM.s : rM = new mM(MM), Qj ? pj(rM, HM) : rM;
      if (nM = MM.d, LM = rM.d, OM = rM.e, QM = MM.e, nM = nM.slice(), aM = QM - OM) {
        for ((zM = aM < 0) ? (iM = nM, aM = -aM, PM = LM.length) : (iM = LM, OM = QM, PM = nM.length), aM > (SM = Math.max(Math.ceil(HM / 7), PM) + 2) && (aM = SM, iM.length = 1), iM.reverse(), SM = aM; SM--;) iM.push(0);
        iM.reverse()
      } else {
        for ((zM = (SM = nM.length) < (PM = LM.length)) && (PM = SM), SM = 0; SM < PM; SM++)
          if (nM[SM] != LM[SM]) {
            zM = nM[SM] < LM[SM];
            break
          } aM = 0
      }
      for (zM && (iM = nM, nM = LM, LM = iM, rM.s = -rM.s), PM = nM.length, SM = LM.length - PM; SM > 0; --SM) nM[PM++] = 0;
      for (SM = LM.length; SM > aM;) {
        if (nM[--SM] < LM[SM]) {
          for (jM = SM; jM && 0 === nM[--jM];) nM[jM] = dj - 1;
          --nM[jM], nM[SM] += dj
        }
        nM[SM] -= LM[SM]
      }
      for (; 0 === nM[--PM];) nM.pop();
      for (; 0 === nM[0]; nM.shift()) --OM;
      return nM[0] ? (rM.d = nM, rM.e = OM, Qj ? pj(rM, HM) : rM) : new mM(0)
    }

    function sj(MM, rM, iM) {
      var OM, SM = wj(MM),
        jM = Cj(MM.d),
        aM = jM.length;
      return rM ? (iM && (OM = iM - aM) > 0 ? jM = jM.charAt(0) + "." + jM.slice(1) + gj(OM) : aM > 1 && (jM = jM.charAt(0) + "." + jM.slice(1)), jM = jM + (SM < 0 ? "e" : "e+") + SM) : SM < 0 ? (jM = "0." + gj(-SM - 1) + jM, iM && (OM = iM - aM) > 0 && (jM += gj(OM))) : SM >= aM ? (jM += gj(SM + 1 - aM), iM && (OM = iM - SM - 1) > 0 && (jM = jM + "." + gj(OM))) : ((OM = SM + 1) < aM && (jM = jM.slice(0, OM) + "." + jM.slice(OM)), iM && (OM = iM - aM) > 0 && (SM + 1 === aM && (jM += "."), jM += gj(OM))), MM.s < 0 ? "-" + jM : jM
    }

    function Dj(MM, rM) {
      if (MM.length > rM) return MM.length = rM, !0
    }

    function kj(MM) {
      if (!MM || "object" !== typeof MM) throw Error(zj + "Object expected");
      var rM, iM, OM, SM = ["precision", 1, nj, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (rM = 0; rM < SM.length; rM += 3)
        if (void 0 !== (OM = MM[iM = SM[rM]])) {
          if (!(Hj(OM) === OM && OM >= SM[rM + 1] && OM <= SM[rM + 2])) throw Error(Lj + iM + ": " + OM);
          this[iM] = OM
        } if (void 0 !== (OM = MM[iM = "LN10"])) {
        if (OM != Math.LN10) throw Error(Lj + iM + ": " + OM);
        this[iM] = new this(OM)
      }
      return this
    }
    var Zj = function MM(rM) {
      var iM, OM, SM;

      function jM(MM) {
        var rM = this;
        if (!(rM instanceof jM)) return new jM(MM);
        if (rM.constructor = jM, MM instanceof jM) return rM.s = MM.s, rM.e = MM.e, void(rM.d = (MM = MM.d) ? MM.slice() : MM);
        if ("number" === typeof MM) {
          if (0 * MM !== 0) throw Error(Lj + MM);
          if (MM > 0) rM.s = 1;
          else {
            if (!(MM < 0)) return rM.s = 0, rM.e = 0, void(rM.d = [0]);
            MM = -MM, rM.s = -1
          }
          return MM === ~~MM && MM < 1e7 ? (rM.e = 0, void(rM.d = [MM])) : Rj(rM, MM.toString())
        }
        if ("string" !== typeof MM) throw Error(Lj + MM);
        if (45 === MM.charCodeAt(0) ? (MM = MM.slice(1), rM.s = -1) : rM.s = 1, !Jj.test(MM)) throw Error(Lj + MM);
        Rj(rM, MM)
      }
      if (jM.prototype = Ej, jM.ROUND_UP = 0, jM.ROUND_DOWN = 1, jM.ROUND_CEIL = 2, jM.ROUND_FLOOR = 3, jM.ROUND_HALF_UP = 4, jM.ROUND_HALF_DOWN = 5, jM.ROUND_HALF_EVEN = 6, jM.ROUND_HALF_CEIL = 7, jM.ROUND_HALF_FLOOR = 8, jM.clone = MM, jM.config = jM.set = kj, void 0 === rM && (rM = {}), rM)
        for (SM = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], iM = 0; iM < SM.length;) rM.hasOwnProperty(OM = SM[iM++]) || (rM[OM] = this[OM]);
      return jM.config(rM), jM
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    Pj = new Zj(1);
    var oj;
    ! function(MM) {
      MM.AED = "aed", MM.AFN = "afn", MM.ALL = "all", MM.AMD = "amd", MM.ANG = "ang", MM.AOA = "aoa", MM.ARS = "ars", MM.AUD = "aud", MM.AWG = "awg", MM.AZN = "azn", MM.BAM = "bam", MM.BBD = "bbd", MM.BDT = "bdt", MM.BGN = "bgn", MM.BHD = "bhd", MM.BIF = "bif", MM.BMD = "bmd", MM.BND = "bnd", MM.BOB = "bob", MM.BOV = "bov", MM.BRL = "brl", MM.BSD = "bsd", MM.BTN = "btn", MM.BWP = "bwp", MM.BYN = "byn", MM.BYR = "byr", MM.BZD = "bzd", MM.CAD = "cad", MM.CDF = "cdf", MM.CHE = "che", MM.CHF = "chf", MM.CHW = "chw", MM.CLF = "clf", MM.CLP = "clp", MM.CNY = "cny", MM.COP = "cop", MM.COU = "cou", MM.CRC = "crc", MM.CUC = "cuc", MM.CUP = "cup", MM.CVE = "cve", MM.CZK = "czk", MM.DJF = "djf", MM.DKK = "dkk", MM.DOP = "dop", MM.DZD = "dzd", MM.EGP = "egp", MM.ERN = "ern", MM.ETB = "etb", MM.EUR = "eur", MM.FJD = "fjd", MM.FKP = "fkp", MM.GBP = "gbp", MM.GEL = "gel", MM.GHS = "ghs", MM.GIP = "gip", MM.GMD = "gmd", MM.GNF = "gnf", MM.GTQ = "gtq", MM.GYD = "gyd", MM.HKD = "hkd", MM.HNL = "hnl", MM.HRK = "hrk", MM.HTG = "htg", MM.HUF = "huf", MM.IDR = "idr", MM.ILS = "ils", MM.INR = "inr", MM.IQD = "iqd", MM.IRR = "irr", MM.ISK = "isk", MM.JMD = "jmd", MM.JOD = "jod", MM.JPY = "jpy", MM.KES = "kes", MM.KGS = "kgs", MM.KHR = "khr", MM.KMF = "kmf", MM.KPW = "kpw", MM.KRW = "krw", MM.KWD = "kwd", MM.KYD = "kyd", MM.KZT = "kzt", MM.LAK = "lak", MM.LBP = "lbp", MM.LKR = "lkr", MM.LRD = "lrd", MM.LSL = "lsl", MM.LTL = "ltl", MM.LVL = "lvl", MM.LYD = "lyd", MM.MAD = "mad", MM.MDL = "mdl", MM.MGA = "mga", MM.MKD = "mkd", MM.MMK = "mmk", MM.MNT = "mnt", MM.MOP = "mop", MM.MRO = "mro", MM.MUR = "mur", MM.MVR = "mvr", MM.MWK = "mwk", MM.MXN = "mxn", MM.MXV = "mxv", MM.MYR = "myr", MM.MZN = "mzn", MM.NAD = "nad", MM.NGN = "ngn", MM.NIO = "nio", MM.NOK = "nok", MM.NPR = "npr", MM.NZD = "nzd", MM.OMR = "omr", MM.PAB = "pab", MM.PEN = "pen", MM.PGK = "pgk", MM.PHP = "php", MM.PKR = "pkr", MM.PLN = "pln", MM.PYG = "pyg", MM.QAR = "qar", MM.RON = "ron", MM.RSD = "rsd", MM.RUB = "rub", MM.RWF = "rwf", MM.SAR = "sar", MM.SBD = "sbd", MM.SCR = "scr", MM.SDG = "sdg", MM.SEK = "sek", MM.SGD = "sgd", MM.SHP = "shp", MM.SLL = "sll", MM.SOS = "sos", MM.SRD = "srd", MM.SSP = "ssp", MM.STD = "std", MM.SVC = "svc", MM.SYP = "syp", MM.SZL = "szl", MM.THB = "thb", MM.TJS = "tjs", MM.TMT = "tmt", MM.TND = "tnd", MM.TOP = "top", MM.TRY = "try", MM.TTD = "ttd", MM.TWD = "twd", MM.TZS = "tzs", MM.UAH = "uah", MM.UGX = "ugx", MM.USD = "usd", MM.USN = "usn", MM.USS = "uss", MM.UYI = "uyi", MM.UYU = "uyu", MM.UZS = "uzs", MM.VEF = "vef", MM.VND = "vnd", MM.VUV = "vuv", MM.WST = "wst", MM.XAF = "xaf", MM.XAG = "xag", MM.XAU = "xau", MM.XBA = "xba", MM.XBB = "xbb", MM.XBC = "xbc", MM.XBD = "xbd", MM.XCD = "xcd", MM.XDR = "xdr", MM.XFU = "xfu", MM.XOF = "xof", MM.XPD = "xpd", MM.XPF = "xpf", MM.XPT = "xpt", MM.XSU = "xsu", MM.XTS = "xts", MM.XUA = "xua", MM.YER = "yer", MM.ZAR = "zar", MM.ZMW = "zmw", MM.ZWL = "zwl"
    }(oj || (oj = {}));
    oj.AED, oj.AFN, oj.ALL, oj.AMD, oj.ANG, oj.AOA, oj.ARS, oj.AUD, oj.AWG, oj.AZN, oj.BAM, oj.BBD, oj.BDT, oj.BGN, oj.BHD, oj.BIF, oj.BMD, oj.BND, oj.BOB, oj.BOV, oj.BRL, oj.BSD, oj.BTN, oj.BWP, oj.BYR, oj.BYN, oj.BZD, oj.CAD, oj.CDF, oj.CHE, oj.CHF, oj.CHW, oj.CLF, oj.CLP, oj.CNY, oj.COP, oj.COU, oj.CRC, oj.CUC, oj.CUP, oj.CVE, oj.CZK, oj.DJF, oj.DKK, oj.DOP, oj.DZD, oj.EGP, oj.ERN, oj.ETB, oj.EUR, oj.FJD, oj.FKP, oj.GBP, oj.GEL, oj.GHS, oj.GIP, oj.GMD, oj.GNF, oj.GTQ, oj.GYD, oj.HKD, oj.HNL, oj.HRK, oj.HTG, oj.HUF, oj.IDR, oj.ILS, oj.INR, oj.IQD, oj.IRR, oj.ISK, oj.JMD, oj.JOD, oj.JPY, oj.KES, oj.KGS, oj.KHR, oj.KMF, oj.KPW, oj.KRW, oj.KWD, oj.KYD, oj.KZT, oj.LAK, oj.LBP, oj.LKR, oj.LRD, oj.LSL, oj.LTL, oj.LVL, oj.LYD, oj.MAD, oj.MDL, oj.MGA, oj.MKD, oj.MMK, oj.MNT, oj.MOP, oj.MRO, oj.MUR, oj.MVR, oj.MWK, oj.MXN, oj.MXV, oj.MYR, oj.MZN, oj.NAD, oj.NGN, oj.NIO, oj.NOK, oj.NPR, oj.NZD, oj.OMR, oj.PAB, oj.PEN, oj.PGK, oj.PHP, oj.PKR, oj.PLN, oj.PYG, oj.QAR, oj.RON, oj.RSD, oj.RUB, oj.RWF, oj.SAR, oj.SBD, oj.SCR, oj.SDG, oj.SEK, oj.SGD, oj.SHP, oj.SLL, oj.SOS, oj.SRD, oj.SSP, oj.STD, oj.SVC, oj.SYP, oj.SZL, oj.THB, oj.TJS, oj.TMT, oj.TND, oj.TOP, oj.TRY, oj.TTD, oj.TWD, oj.TZS, oj.UAH, oj.UGX, oj.USD, oj.USN, oj.USS, oj.UYI, oj.UYU, oj.UZS, oj.VEF, oj.VND, oj.VUV, oj.WST, oj.XAF, oj.XAG, oj.XAU, oj.XBA, oj.XBB, oj.XBC, oj.XBD, oj.XCD, oj.XDR, oj.XFU, oj.XOF, oj.XPD, oj.XPF, oj.XPT, oj.XSU, oj.XTS, oj.XUA, oj.YER, oj.ZAR, oj.ZMW, oj.ZWL;
    var fj = {
      exports: {}
    };
    ! function(MM, rM) {
      var iM = "__lodash_hash_undefined__",
        OM = 9007199254740991,
        jM = "[object Arguments]",
        aM = "[object Array]",
        PM = "[object Boolean]",
        nM = "[object Date]",
        QM = "[object Error]",
        zM = "[object Function]",
        LM = "[object Map]",
        mM = "[object Number]",
        HM = "[object Object]",
        hM = "[object Promise]",
        JM = "[object RegExp]",
        dM = "[object Set]",
        yM = "[object String]",
        lM = "[object Symbol]",
        EM = "[object WeakMap]",
        UM = "[object ArrayBuffer]",
        GM = "[object DataView]",
        CM = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        eM = /^\w*$/,
        bM = /^\./,
        wM = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        tM = /\\(\\)?/g,
        gM = /^\[object .+?Constructor\]$/,
        uM = /^(?:0|[1-9]\d*)$/,
        RM = {};
      RM["[object Float32Array]"] = RM["[object Float64Array]"] = RM["[object Int8Array]"] = RM["[object Int16Array]"] = RM["[object Int32Array]"] = RM["[object Uint8Array]"] = RM["[object Uint8ClampedArray]"] = RM["[object Uint16Array]"] = RM["[object Uint32Array]"] = !0, RM[jM] = RM[aM] = RM[UM] = RM[PM] = RM[GM] = RM[nM] = RM[QM] = RM[zM] = RM[LM] = RM[mM] = RM[HM] = RM[JM] = RM[dM] = RM[yM] = RM[EM] = !1;
      var pM = "object" == typeof SM && SM && SM.Object === Object && SM,
        WM = "object" == typeof self && self && self.Object === Object && self,
        sM = pM || WM || Function("return this")(),
        DM = rM && !rM.nodeType && rM,
        kM = DM && MM && !MM.nodeType && MM,
        ZM = kM && kM.exports === DM && pM.process,
        oM = function() {
          try {
            return ZM && ZM.binding("util")
          } catch (MM) {}
        }(),
        fM = oM && oM.isTypedArray;

      function YM(MM, rM) {
        for (var iM = -1, OM = MM ? MM.length : 0; ++iM < OM && !1 !== rM(MM[iM], iM, MM););
        return MM
      }

      function NM(MM, rM) {
        for (var iM = -1, OM = MM ? MM.length : 0; ++iM < OM;)
          if (rM(MM[iM], iM, MM)) return !0;
        return !1
      }

      function AM(MM) {
        var rM = !1;
        if (null != MM && "function" != typeof MM.toString) try {
          rM = !!(MM + "")
        } catch (iM) {}
        return rM
      }

      function xM(MM) {
        var rM = -1,
          iM = Array(MM.size);
        return MM.forEach((function(MM, OM) {
          iM[++rM] = [OM, MM]
        })), iM
      }

      function vM(MM, rM) {
        return function(iM) {
          return MM(rM(iM))
        }
      }

      function FM(MM) {
        var rM = -1,
          iM = Array(MM.size);
        return MM.forEach((function(MM) {
          iM[++rM] = MM
        })), iM
      }
      var BM = Array.prototype,
        XM = Function.prototype,
        IM = Object.prototype,
        KM = sM["__core-js_shared__"],
        qM = function() {
          var MM = /[^.]+$/.exec(KM && KM.keys && KM.keys.IE_PROTO || "");
          return MM ? "Symbol(src)_1." + MM : ""
        }(),
        TM = XM.toString,
        VM = IM.hasOwnProperty,
        cM = IM.toString,
        Mr = RegExp("^" + TM.call(VM).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        rr = sM.Symbol,
        ir = sM.Uint8Array,
        Or = vM(Object.getPrototypeOf, Object),
        Sr = Object.create,
        jr = IM.propertyIsEnumerable,
        ar = BM.splice,
        Pr = vM(Object.keys, Object),
        nr = xr(sM, "DataView"),
        Qr = xr(sM, "Map"),
        zr = xr(sM, "Promise"),
        Lr = xr(sM, "Set"),
        mr = xr(sM, "WeakMap"),
        Hr = xr(Object, "create"),
        hr = Tr(nr),
        Jr = Tr(Qr),
        dr = Tr(zr),
        yr = Tr(Lr),
        lr = Tr(mr),
        Er = rr ? rr.prototype : void 0,
        Ur = Er ? Er.valueOf : void 0,
        Gr = Er ? Er.toString : void 0;

      function Cr(MM) {
        var rM = -1,
          iM = MM ? MM.length : 0;
        for (this.clear(); ++rM < iM;) {
          var OM = MM[rM];
          this.set(OM[0], OM[1])
        }
      }

      function er(MM) {
        var rM = -1,
          iM = MM ? MM.length : 0;
        for (this.clear(); ++rM < iM;) {
          var OM = MM[rM];
          this.set(OM[0], OM[1])
        }
      }

      function br(MM) {
        var rM = -1,
          iM = MM ? MM.length : 0;
        for (this.clear(); ++rM < iM;) {
          var OM = MM[rM];
          this.set(OM[0], OM[1])
        }
      }

      function wr(MM) {
        var rM = -1,
          iM = MM ? MM.length : 0;
        for (this.__data__ = new br; ++rM < iM;) this.add(MM[rM])
      }

      function tr(MM) {
        this.__data__ = new er(MM)
      }

      function gr(MM, rM) {
        var iM = ri(MM) || Mi(MM) ? function(MM, rM) {
            for (var iM = -1, OM = Array(MM); ++iM < MM;) OM[iM] = rM(iM);
            return OM
          }(MM.length, String) : [],
          OM = iM.length,
          SM = !!OM;
        for (var jM in MM) !rM && !VM.call(MM, jM) || SM && ("length" == jM || Fr(jM, OM)) || iM.push(jM);
        return iM
      }

      function ur(MM, rM) {
        for (var iM = MM.length; iM--;)
          if (cr(MM[iM][0], rM)) return iM;
        return -1
      }
      Cr.prototype.clear = function() {
        this.__data__ = Hr ? Hr(null) : {}
      }, Cr.prototype.delete = function(MM) {
        return this.has(MM) && delete this.__data__[MM]
      }, Cr.prototype.get = function(MM) {
        var rM = this.__data__;
        if (Hr) {
          var OM = rM[MM];
          return OM === iM ? void 0 : OM
        }
        return VM.call(rM, MM) ? rM[MM] : void 0
      }, Cr.prototype.has = function(MM) {
        var rM = this.__data__;
        return Hr ? void 0 !== rM[MM] : VM.call(rM, MM)
      }, Cr.prototype.set = function(MM, rM) {
        return this.__data__[MM] = Hr && void 0 === rM ? iM : rM, this
      }, er.prototype.clear = function() {
        this.__data__ = []
      }, er.prototype.delete = function(MM) {
        var rM = this.__data__,
          iM = ur(rM, MM);
        return !(iM < 0) && (iM == rM.length - 1 ? rM.pop() : ar.call(rM, iM, 1), !0)
      }, er.prototype.get = function(MM) {
        var rM = this.__data__,
          iM = ur(rM, MM);
        return iM < 0 ? void 0 : rM[iM][1]
      }, er.prototype.has = function(MM) {
        return ur(this.__data__, MM) > -1
      }, er.prototype.set = function(MM, rM) {
        var iM = this.__data__,
          OM = ur(iM, MM);
        return OM < 0 ? iM.push([MM, rM]) : iM[OM][1] = rM, this
      }, br.prototype.clear = function() {
        this.__data__ = {
          hash: new Cr,
          map: new(Qr || er),
          string: new Cr
        }
      }, br.prototype.delete = function(MM) {
        return Ar(this, MM).delete(MM)
      }, br.prototype.get = function(MM) {
        return Ar(this, MM).get(MM)
      }, br.prototype.has = function(MM) {
        return Ar(this, MM).has(MM)
      }, br.prototype.set = function(MM, rM) {
        return Ar(this, MM).set(MM, rM), this
      }, wr.prototype.add = wr.prototype.push = function(MM) {
        return this.__data__.set(MM, iM), this
      }, wr.prototype.has = function(MM) {
        return this.__data__.has(MM)
      }, tr.prototype.clear = function() {
        this.__data__ = new er
      }, tr.prototype.delete = function(MM) {
        return this.__data__.delete(MM)
      }, tr.prototype.get = function(MM) {
        return this.__data__.get(MM)
      }, tr.prototype.has = function(MM) {
        return this.__data__.has(MM)
      }, tr.prototype.set = function(MM, rM) {
        var iM = this.__data__;
        if (iM instanceof er) {
          var OM = iM.__data__;
          if (!Qr || OM.length < 199) return OM.push([MM, rM]), this;
          iM = this.__data__ = new br(OM)
        }
        return iM.set(MM, rM), this
      };
      var Rr, pr = function(MM, rM, iM) {
        for (var OM = -1, SM = Object(MM), jM = iM(MM), aM = jM.length; aM--;) {
          var PM = jM[Rr ? aM : ++OM];
          if (!1 === rM(SM[PM], PM, SM)) break
        }
        return MM
      };

      function Wr(MM, rM) {
        return MM && pr(MM, rM, zi)
      }

      function sr(MM, rM) {
        for (var iM = 0, OM = (rM = Br(rM, MM) ? [rM] : Yr(rM)).length; null != MM && iM < OM;) MM = MM[qr(rM[iM++])];
        return iM && iM == OM ? MM : void 0
      }

      function Dr(MM, rM) {
        return null != MM && rM in Object(MM)
      }

      function kr(MM, rM, iM, OM, SM) {
        return MM === rM || (null == MM || null == rM || !ji(MM) && !ai(rM) ? MM !== MM && rM !== rM : function(MM, rM, iM, OM, SM, zM) {
          var hM = ri(MM),
            EM = ri(rM),
            CM = aM,
            eM = aM;
          hM || (CM = (CM = vr(MM)) == jM ? HM : CM);
          EM || (eM = (eM = vr(rM)) == jM ? HM : eM);
          var bM = CM == HM && !AM(MM),
            wM = eM == HM && !AM(rM),
            tM = CM == eM;
          if (tM && !bM) return zM || (zM = new tr), hM || Qi(MM) ? Nr(MM, rM, iM, OM, SM, zM) : function(MM, rM, iM, OM, SM, jM, aM) {
            switch (iM) {
              case GM:
                if (MM.byteLength != rM.byteLength || MM.byteOffset != rM.byteOffset) return !1;
                MM = MM.buffer, rM = rM.buffer;
              case UM:
                return !(MM.byteLength != rM.byteLength || !OM(new ir(MM), new ir(rM)));
              case PM:
              case nM:
              case mM:
                return cr(+MM, +rM);
              case QM:
                return MM.name == rM.name && MM.message == rM.message;
              case JM:
              case yM:
                return MM == rM + "";
              case LM:
                var zM = xM;
              case dM:
                var HM = 2 & jM;
                if (zM || (zM = FM), MM.size != rM.size && !HM) return !1;
                var hM = aM.get(MM);
                if (hM) return hM == rM;
                jM |= 1, aM.set(MM, rM);
                var EM = Nr(zM(MM), zM(rM), OM, SM, jM, aM);
                return aM.delete(MM), EM;
              case lM:
                if (Ur) return Ur.call(MM) == Ur.call(rM)
            }
            return !1
          }(MM, rM, CM, iM, OM, SM, zM);
          if (!(2 & SM)) {
            var gM = bM && VM.call(MM, "__wrapped__"),
              uM = wM && VM.call(rM, "__wrapped__");
            if (gM || uM) {
              var RM = gM ? MM.value() : MM,
                pM = uM ? rM.value() : rM;
              return zM || (zM = new tr), iM(RM, pM, OM, SM, zM)
            }
          }
          if (!tM) return !1;
          return zM || (zM = new tr),
            function(MM, rM, iM, OM, SM, jM) {
              var aM = 2 & SM,
                PM = zi(MM),
                nM = PM.length,
                QM = zi(rM),
                zM = QM.length;
              if (nM != zM && !aM) return !1;
              var LM = nM;
              for (; LM--;) {
                var mM = PM[LM];
                if (!(aM ? mM in rM : VM.call(rM, mM))) return !1
              }
              var HM = jM.get(MM);
              if (HM && jM.get(rM)) return HM == rM;
              var hM = !0;
              jM.set(MM, rM), jM.set(rM, MM);
              var JM = aM;
              for (; ++LM < nM;) {
                var dM = MM[mM = PM[LM]],
                  yM = rM[mM];
                if (OM) var lM = aM ? OM(yM, dM, mM, rM, MM, jM) : OM(dM, yM, mM, MM, rM, jM);
                if (!(void 0 === lM ? dM === yM || iM(dM, yM, OM, SM, jM) : lM)) {
                  hM = !1;
                  break
                }
                JM || (JM = "constructor" == mM)
              }
              if (hM && !JM) {
                var EM = MM.constructor,
                  UM = rM.constructor;
                EM == UM || !("constructor" in MM) || !("constructor" in rM) || "function" == typeof EM && EM instanceof EM && "function" == typeof UM && UM instanceof UM || (hM = !1)
              }
              return jM.delete(MM), jM.delete(rM), hM
            }(MM, rM, iM, OM, SM, zM)
        }(MM, rM, kr, iM, OM, SM))
      }

      function Zr(MM) {
        return !(!ji(MM) || (rM = MM, qM && qM in rM)) && (Oi(MM) || AM(MM) ? Mr : gM).test(Tr(MM));
        var rM
      }

      function or(MM) {
        return "function" == typeof MM ? MM : null == MM ? Li : "object" == typeof MM ? ri(MM) ? function(MM, rM) {
          if (Br(MM) && Xr(rM)) return Ir(qr(MM), rM);
          return function(iM) {
            var OM = function(MM, rM, iM) {
              var OM = null == MM ? void 0 : sr(MM, rM);
              return void 0 === OM ? iM : OM
            }(iM, MM);
            return void 0 === OM && OM === rM ? function(MM, rM) {
              return null != MM && function(MM, rM, iM) {
                rM = Br(rM, MM) ? [rM] : Yr(rM);
                var OM, SM = -1,
                  jM = rM.length;
                for (; ++SM < jM;) {
                  var aM = qr(rM[SM]);
                  if (!(OM = null != MM && iM(MM, aM))) break;
                  MM = MM[aM]
                }
                if (OM) return OM;
                jM = MM ? MM.length : 0;
                return !!jM && Si(jM) && Fr(aM, jM) && (ri(MM) || Mi(MM))
              }(MM, rM, Dr)
            }(iM, MM) : kr(rM, OM, void 0, 3)
          }
        }(MM[0], MM[1]) : function(MM) {
          var rM = function(MM) {
            var rM = zi(MM),
              iM = rM.length;
            for (; iM--;) {
              var OM = rM[iM],
                SM = MM[OM];
              rM[iM] = [OM, SM, Xr(SM)]
            }
            return rM
          }(MM);
          if (1 == rM.length && rM[0][2]) return Ir(rM[0][0], rM[0][1]);
          return function(iM) {
            return iM === MM || function(MM, rM, iM, OM) {
              var SM = iM.length,
                jM = SM,
                aM = !OM;
              if (null == MM) return !jM;
              for (MM = Object(MM); SM--;) {
                var PM = iM[SM];
                if (aM && PM[2] ? PM[1] !== MM[PM[0]] : !(PM[0] in MM)) return !1
              }
              for (; ++SM < jM;) {
                var nM = (PM = iM[SM])[0],
                  QM = MM[nM],
                  zM = PM[1];
                if (aM && PM[2]) {
                  if (void 0 === QM && !(nM in MM)) return !1
                } else {
                  var LM = new tr;
                  if (OM) var mM = OM(QM, zM, nM, MM, rM, LM);
                  if (!(void 0 === mM ? kr(zM, QM, OM, 3, LM) : mM)) return !1
                }
              }
              return !0
            }(iM, MM, rM)
          }
        }(MM) : function(MM) {
          return Br(MM) ? (rM = qr(MM), function(MM) {
            return null == MM ? void 0 : MM[rM]
          }) : function(MM) {
            return function(rM) {
              return sr(rM, MM)
            }
          }(MM);
          var rM
        }(MM)
      }

      function fr(MM) {
        if (! function(MM) {
            var rM = MM && MM.constructor,
              iM = "function" == typeof rM && rM.prototype || IM;
            return MM === iM
          }(MM)) return Pr(MM);
        var rM = [];
        for (var iM in Object(MM)) VM.call(MM, iM) && "constructor" != iM && rM.push(iM);
        return rM
      }

      function Yr(MM) {
        return ri(MM) ? MM : Kr(MM)
      }

      function Nr(MM, rM, iM, OM, SM, jM) {
        var aM = 2 & SM,
          PM = MM.length,
          nM = rM.length;
        if (PM != nM && !(aM && nM > PM)) return !1;
        var QM = jM.get(MM);
        if (QM && jM.get(rM)) return QM == rM;
        var zM = -1,
          LM = !0,
          mM = 1 & SM ? new wr : void 0;
        for (jM.set(MM, rM), jM.set(rM, MM); ++zM < PM;) {
          var HM = MM[zM],
            hM = rM[zM];
          if (OM) var JM = aM ? OM(hM, HM, zM, rM, MM, jM) : OM(HM, hM, zM, MM, rM, jM);
          if (void 0 !== JM) {
            if (JM) continue;
            LM = !1;
            break
          }
          if (mM) {
            if (!NM(rM, (function(MM, rM) {
                if (!mM.has(rM) && (HM === MM || iM(HM, MM, OM, SM, jM))) return mM.add(rM)
              }))) {
              LM = !1;
              break
            }
          } else if (HM !== hM && !iM(HM, hM, OM, SM, jM)) {
            LM = !1;
            break
          }
        }
        return jM.delete(MM), jM.delete(rM), LM
      }

      function Ar(MM, rM) {
        var iM = MM.__data__;
        return function(MM) {
          var rM = typeof MM;
          return "string" == rM || "number" == rM || "symbol" == rM || "boolean" == rM ? "__proto__" !== MM : null === MM
        }(rM) ? iM["string" == typeof rM ? "string" : "hash"] : iM.map
      }

      function xr(MM, rM) {
        var iM = function(MM, rM) {
          return null == MM ? void 0 : MM[rM]
        }(MM, rM);
        return Zr(iM) ? iM : void 0
      }
      var vr = function(MM) {
        return cM.call(MM)
      };

      function Fr(MM, rM) {
        return !!(rM = null == rM ? OM : rM) && ("number" == typeof MM || uM.test(MM)) && MM > -1 && MM % 1 == 0 && MM < rM
      }

      function Br(MM, rM) {
        if (ri(MM)) return !1;
        var iM = typeof MM;
        return !("number" != iM && "symbol" != iM && "boolean" != iM && null != MM && !Pi(MM)) || (eM.test(MM) || !CM.test(MM) || null != rM && MM in Object(rM))
      }

      function Xr(MM) {
        return MM === MM && !ji(MM)
      }

      function Ir(MM, rM) {
        return function(iM) {
          return null != iM && (iM[MM] === rM && (void 0 !== rM || MM in Object(iM)))
        }
      }(nr && vr(new nr(new ArrayBuffer(1))) != GM || Qr && vr(new Qr) != LM || zr && vr(zr.resolve()) != hM || Lr && vr(new Lr) != dM || mr && vr(new mr) != EM) && (vr = function(MM) {
        var rM = cM.call(MM),
          iM = rM == HM ? MM.constructor : void 0,
          OM = iM ? Tr(iM) : void 0;
        if (OM) switch (OM) {
          case hr:
            return GM;
          case Jr:
            return LM;
          case dr:
            return hM;
          case yr:
            return dM;
          case lr:
            return EM
        }
        return rM
      });
      var Kr = Vr((function(MM) {
        var rM;
        MM = null == (rM = MM) ? "" : function(MM) {
          if ("string" == typeof MM) return MM;
          if (Pi(MM)) return Gr ? Gr.call(MM) : "";
          var rM = MM + "";
          return "0" == rM && 1 / MM == -1 / 0 ? "-0" : rM
        }(rM);
        var iM = [];
        return bM.test(MM) && iM.push(""), MM.replace(wM, (function(MM, rM, OM, SM) {
          iM.push(OM ? SM.replace(tM, "$1") : rM || MM)
        })), iM
      }));

      function qr(MM) {
        if ("string" == typeof MM || Pi(MM)) return MM;
        var rM = MM + "";
        return "0" == rM && 1 / MM == -1 / 0 ? "-0" : rM
      }

      function Tr(MM) {
        if (null != MM) {
          try {
            return TM.call(MM)
          } catch (rM) {}
          try {
            return MM + ""
          } catch (rM) {}
        }
        return ""
      }

      function Vr(MM, rM) {
        if ("function" != typeof MM || rM && "function" != typeof rM) throw new TypeError("Expected a function");
        var iM = function() {
          var OM = arguments,
            SM = rM ? rM.apply(this, OM) : OM[0],
            jM = iM.cache;
          if (jM.has(SM)) return jM.get(SM);
          var aM = MM.apply(this, OM);
          return iM.cache = jM.set(SM, aM), aM
        };
        return iM.cache = new(Vr.Cache || br), iM
      }

      function cr(MM, rM) {
        return MM === rM || MM !== MM && rM !== rM
      }

      function Mi(MM) {
        return function(MM) {
          return ai(MM) && ii(MM)
        }(MM) && VM.call(MM, "callee") && (!jr.call(MM, "callee") || cM.call(MM) == jM)
      }
      Vr.Cache = br;
      var ri = Array.isArray;

      function ii(MM) {
        return null != MM && Si(MM.length) && !Oi(MM)
      }

      function Oi(MM) {
        var rM = ji(MM) ? cM.call(MM) : "";
        return rM == zM || "[object GeneratorFunction]" == rM
      }

      function Si(MM) {
        return "number" == typeof MM && MM > -1 && MM % 1 == 0 && MM <= OM
      }

      function ji(MM) {
        var rM = typeof MM;
        return !!MM && ("object" == rM || "function" == rM)
      }

      function ai(MM) {
        return !!MM && "object" == typeof MM
      }

      function Pi(MM) {
        return "symbol" == typeof MM || ai(MM) && cM.call(MM) == lM
      }
      var ni, Qi = fM ? (ni = fM, function(MM) {
        return ni(MM)
      }) : function(MM) {
        return ai(MM) && Si(MM.length) && !!RM[cM.call(MM)]
      };

      function zi(MM) {
        return ii(MM) ? gr(MM) : fr(MM)
      }

      function Li(MM) {
        return MM
      }
      MM.exports = function(MM, rM, iM) {
        var OM, SM = ri(MM) || Qi(MM);
        if (rM = or(rM), null == iM)
          if (SM || ji(MM)) {
            var jM = MM.constructor;
            iM = SM ? ri(MM) ? new jM : [] : Oi(jM) ? ji(OM = Or(MM)) ? Sr(OM) : {} : {}
          } else iM = {};
        return (SM ? YM : Wr)(MM, (function(MM, OM, SM) {
          return rM(iM, MM, OM, SM)
        })), iM
      }
    }(fj, fj.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      h: Yj
    } = OM
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);