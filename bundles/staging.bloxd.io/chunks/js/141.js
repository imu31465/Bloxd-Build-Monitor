export const id = 141;
export const ids = [141];
export const modules = {
  7793: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => fi,
      h: () => jc
    });
    var ID = {};
    cD.r(ID), cD.d(ID, {
      b: () => II,
      g: () => fI,
      f: () => iI,
      j: () => uc,
      n: () => ec,
      r: () => qI,
      t: () => Ac,
      v: () => aI,
      w: () => nI,
      z: () => KI,
      C: () => hc,
      D: () => PI,
      F: () => xI,
      I: () => JI,
      P: () => rc,
      L: () => CI,
      T: () => UI,
      W: () => HI
    });
    var pD = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function iD(DD) {
      return DD && DD.__esModule && Object.prototype.hasOwnProperty.call(DD, "default") ? DD.default : DD
    }
    var fD = {
      exports: {}
    };
    ! function(DD) {
      var CD = Object.prototype.hasOwnProperty,
        cD = "~";

      function ID() {}

      function pD(DD, CD, cD) {
        this.Ot = DD, this.context = CD, this.once = cD || !1
      }

      function iD(DD, CD, ID, iD, fD) {
        if ("function" !== typeof ID) throw new TypeError("The listener must be a function");
        var bD = new pD(ID, iD || DD, fD),
          QD = cD ? cD + CD : CD;
        return DD._events[QD] ? DD._events[QD].Ot ? DD._events[QD] = [DD._events[QD], bD] : DD._events[QD].push(bD) : (DD._events[QD] = bD, DD._eventsCount++), DD
      }

      function fD(DD, CD) {
        0 === --DD._eventsCount ? DD._events = new ID : delete DD._events[CD]
      }

      function bD() {
        this._events = new ID, this._eventsCount = 0
      }
      Object.create && (ID.prototype = Object.create(null), (new ID).__proto__ || (cD = !1)), bD.prototype.eventNames = function() {
        var DD, ID, pD = [];
        if (0 === this._eventsCount) return pD;
        for (ID in DD = this._events) CD.call(DD, ID) && pD.push(cD ? ID.slice(1) : ID);
        return Object.getOwnPropertySymbols ? pD.concat(Object.getOwnPropertySymbols(DD)) : pD
      }, bD.prototype.listeners = function(DD) {
        var CD = cD ? cD + DD : DD,
          ID = this._events[CD];
        if (!ID) return [];
        if (ID.Ot) return [ID.Ot];
        for (var pD = 0, iD = ID.length, fD = new Array(iD); pD < iD; pD++) fD[pD] = ID[pD].Ot;
        return fD
      }, bD.prototype.listenerCount = function(DD) {
        var CD = cD ? cD + DD : DD,
          ID = this._events[CD];
        return ID ? ID.Ot ? 1 : ID.length : 0
      }, bD.prototype.emit = function(DD, CD, ID, pD, iD, fD) {
        var bD = cD ? cD + DD : DD;
        if (!this._events[bD]) return !1;
        var QD, wD, SD = this._events[bD],
          BD = arguments.length;
        if (SD.Ot) {
          switch (SD.once && this.removeListener(DD, SD.Ot, void 0, !0), BD) {
            case 1:
              return SD.Ot.call(SD.context), !0;
            case 2:
              return SD.Ot.call(SD.context, CD), !0;
            case 3:
              return SD.Ot.call(SD.context, CD, ID), !0;
            case 4:
              return SD.Ot.call(SD.context, CD, ID, pD), !0;
            case 5:
              return SD.Ot.call(SD.context, CD, ID, pD, iD), !0;
            case 6:
              return SD.Ot.call(SD.context, CD, ID, pD, iD, fD), !0
          }
          for (wD = 1, QD = new Array(BD - 1); wD < BD; wD++) QD[wD - 1] = arguments[wD];
          SD.Ot.apply(SD.context, QD)
        } else {
          var yD, MD = SD.length;
          for (wD = 0; wD < MD; wD++) switch (SD[wD].once && this.removeListener(DD, SD[wD].Ot, void 0, !0), BD) {
            case 1:
              SD[wD].Ot.call(SD[wD].context);
              break;
            case 2:
              SD[wD].Ot.call(SD[wD].context, CD);
              break;
            case 3:
              SD[wD].Ot.call(SD[wD].context, CD, ID);
              break;
            case 4:
              SD[wD].Ot.call(SD[wD].context, CD, ID, pD);
              break;
            default:
              if (!QD)
                for (yD = 1, QD = new Array(BD - 1); yD < BD; yD++) QD[yD - 1] = arguments[yD];
              SD[wD].Ot.apply(SD[wD].context, QD)
          }
        }
        return !0
      }, bD.prototype.on = function(DD, CD, cD) {
        return iD(this, DD, CD, cD, !1)
      }, bD.prototype.once = function(DD, CD, cD) {
        return iD(this, DD, CD, cD, !0)
      }, bD.prototype.removeListener = function(DD, CD, ID, pD) {
        var iD = cD ? cD + DD : DD;
        if (!this._events[iD]) return this;
        if (!CD) return fD(this, iD), this;
        var bD = this._events[iD];
        if (bD.Ot) bD.Ot !== CD || pD && !bD.once || ID && bD.context !== ID || fD(this, iD);
        else {
          for (var QD = 0, wD = [], SD = bD.length; QD < SD; QD++)(bD[QD].Ot !== CD || pD && !bD[QD].once || ID && bD[QD].context !== ID) && wD.push(bD[QD]);
          wD.length ? this._events[iD] = 1 === wD.length ? wD[0] : wD : fD(this, iD)
        }
        return this
      }, bD.prototype.iN = function(DD) {
        var CD;
        return DD ? (CD = cD ? cD + DD : DD, this._events[CD] && fD(this, CD)) : (this._events = new ID, this._eventsCount = 0), this
      }, bD.prototype.off = bD.prototype.removeListener, bD.prototype.addListener = bD.prototype.on, bD.prefixed = cD, bD.EventEmitter = bD, DD.exports = bD
    }(fD);
    var bD, QD, wD = iD(fD.exports);
    ! function(DD) {
      DD.assertEqual = DD => DD, DD.assertIs = function(DD) {}, DD.assertNever = function(DD) {
        throw new Error
      }, DD.arrayToEnum = DD => {
        const CD = {};
        for (const cD of DD) CD[cD] = cD;
        return CD
      }, DD.getValidEnumValues = CD => {
        const cD = DD.objectKeys(CD).filter((DD => "number" !== typeof CD[CD[DD]])),
          ID = {};
        for (const DD of cD) ID[DD] = CD[DD];
        return DD.objectValues(ID)
      }, DD.objectValues = CD => DD.objectKeys(CD).map((function(DD) {
        return CD[DD]
      })), DD.objectKeys = "function" === typeof Object.keys ? DD => Object.keys(DD) : DD => {
        const CD = [];
        for (const cD in DD) Object.prototype.hasOwnProperty.call(DD, cD) && CD.push(cD);
        return CD
      }, DD.find = (DD, CD) => {
        for (const cD of DD)
          if (CD(cD)) return cD
      }, DD.isInteger = "function" === typeof Number.isInteger ? DD => Number.isInteger(DD) : DD => "number" === typeof DD && isFinite(DD) && Math.floor(DD) === DD, DD.joinValues = function(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return DD.map((DD => "string" === typeof DD ? `'${DD}'` : DD)).join(CD)
      }, DD.jsonStringifyReplacer = (DD, CD) => "bigint" === typeof CD ? CD.toString() : CD
    }(bD || (bD = {})),
    function(DD) {
      DD.mergeShapes = (DD, CD) => ({
        ...DD,
        ...CD
      })
    }(QD || (QD = {}));
    const SD = bD.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      BD = DD => {
        switch (typeof DD) {
          case "undefined":
            return SD.undefined;
          case "string":
            return SD.string;
          case "number":
            return isNaN(DD) ? SD.nan : SD.number;
          case "boolean":
            return SD.boolean;
          case "function":
            return SD.function;
          case "bigint":
            return SD.bigint;
          case "symbol":
            return SD.symbol;
          case "object":
            return Array.isArray(DD) ? SD.array : null === DD ? SD.null : DD.then && "function" === typeof DD.then && DD.catch && "function" === typeof DD.catch ? SD.promise : "undefined" !== typeof Map && DD instanceof Map ? SD.map : "undefined" !== typeof Set && DD instanceof Set ? SD.set : "undefined" !== typeof Date && DD instanceof Date ? SD.date : SD.object;
          default:
            return SD.unknown
        }
      },
      yD = bD.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class MD extends Error {
      constructor(DD) {
        var CD;
        super(), CD = this, this.issues = [], this.addIssue = DD => {
          this.issues = [...this.issues, DD]
        }, this.addIssues = function() {
          let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          CD.issues = [...CD.issues, ...DD]
        };
        const cD = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, cD) : this.__proto__ = cD, this.name = "ZodError", this.issues = DD
      }
      get errors() {
        return this.issues
      }
      format(DD) {
        const CD = DD || function(DD) {
            return DD.message
          },
          cD = {
            _errors: []
          },
          ID = DD => {
            for (const pD of DD.issues)
              if ("invalid_union" === pD.code) pD.unionErrors.map(ID);
              else if ("invalid_return_type" === pD.code) ID(pD.returnTypeError);
            else if ("invalid_arguments" === pD.code) ID(pD.argumentsError);
            else if (0 === pD.path.length) cD._errors.push(CD(pD));
            else {
              let DD = cD,
                ID = 0;
              for (; ID < pD.path.length;) {
                const cD = pD.path[ID];
                ID === pD.path.length - 1 ? (DD[cD] = DD[cD] || {
                  _errors: []
                }, DD[cD]._errors.push(CD(pD))) : DD[cD] = DD[cD] || {
                  _errors: []
                }, DD = DD[cD], ID++
              }
            }
          };
        return ID(this), cD
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, bD.jsonStringifyReplacer, 2)
      }
      get xt() {
        return 0 === this.issues.length
      }
      flatten() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : DD => DD.message;
        const CD = {},
          cD = [];
        for (const ID of this.issues) ID.path.length > 0 ? (CD[ID.path[0]] = CD[ID.path[0]] || [], CD[ID.path[0]].push(DD(ID))) : cD.push(DD(ID));
        return {
          formErrors: cD,
          fieldErrors: CD
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    MD.create = DD => new MD(DD);
    const tD = (DD, CD) => {
      let cD;
      switch (DD.code) {
        case yD.invalid_type:
          cD = DD.received === SD.undefined ? "Required" : `Expected ${DD.expected}, received ${DD.received}`;
          break;
        case yD.invalid_literal:
          cD = `Invalid literal value, expected ${JSON.stringify(DD.expected,bD.jsonStringifyReplacer)}`;
          break;
        case yD.unrecognized_keys:
          cD = `Unrecognized key(s) in object: ${bD.joinValues(DD.keys,", ")}`;
          break;
        case yD.invalid_union:
          cD = "Invalid input";
          break;
        case yD.invalid_union_discriminator:
          cD = `Invalid discriminator value. Expected ${bD.joinValues(DD.options)}`;
          break;
        case yD.invalid_enum_value:
          cD = `Invalid enum value. Expected ${bD.joinValues(DD.options)}, received '${DD.received}'`;
          break;
        case yD.invalid_arguments:
          cD = "Invalid function arguments";
          break;
        case yD.invalid_return_type:
          cD = "Invalid function return type";
          break;
        case yD.invalid_date:
          cD = "Invalid date";
          break;
        case yD.invalid_string:
          "object" === typeof DD.validation ? "includes" in DD.validation ? (cD = `Invalid input: must include "${DD.validation.includes}"`, "number" === typeof DD.validation.position && (cD = `${cD} at one or more positions greater than or equal to ${DD.validation.position}`)) : "startsWith" in DD.validation ? cD = `Invalid input: must start with "${DD.validation.startsWith}"` : "endsWith" in DD.validation ? cD = `Invalid input: must end with "${DD.validation.endsWith}"` : bD.assertNever(DD.validation) : cD = "regex" !== DD.validation ? `Invalid ${DD.validation}` : "Invalid";
          break;
        case yD.too_small:
          cD = "array" === DD.type ? `Array must contain ${DD.exact?"exactly":DD.inclusive?"at least":"more than"} ${DD.minimum} element(s)` : "string" === DD.type ? `String must contain ${DD.exact?"exactly":DD.inclusive?"at least":"over"} ${DD.minimum} character(s)` : "number" === DD.type ? `Number must be ${DD.exact?"exactly equal to ":DD.inclusive?"greater than or equal to ":"greater than "}${DD.minimum}` : "date" === DD.type ? `Date must be ${DD.exact?"exactly equal to ":DD.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(DD.minimum))}` : "Invalid input";
          break;
        case yD.too_big:
          cD = "array" === DD.type ? `Array must contain ${DD.exact?"exactly":DD.inclusive?"at most":"less than"} ${DD.maximum} element(s)` : "string" === DD.type ? `String must contain ${DD.exact?"exactly":DD.inclusive?"at most":"under"} ${DD.maximum} character(s)` : "number" === DD.type ? `Number must be ${DD.exact?"exactly":DD.inclusive?"less than or equal to":"less than"} ${DD.maximum}` : "bigint" === DD.type ? `BigInt must be ${DD.exact?"exactly":DD.inclusive?"less than or equal to":"less than"} ${DD.maximum}` : "date" === DD.type ? `Date must be ${DD.exact?"exactly":DD.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(DD.maximum))}` : "Invalid input";
          break;
        case yD.custom:
          cD = "Invalid input";
          break;
        case yD.invalid_intersection_types:
          cD = "Intersection results could not be merged";
          break;
        case yD.not_multiple_of:
          cD = `Number must be a multiple of ${DD.multipleOf}`;
          break;
        case yD.not_finite:
          cD = "Number must be finite";
          break;
        default:
          cD = CD.defaultError, bD.assertNever(DD)
      }
      return {
        message: cD
      }
    };
    let ZD = tD;

    function oD() {
      return ZD
    }
    const vD = DD => {
      const {
        data: CD,
        path: cD,
        errorMaps: ID,
        issueData: pD
      } = DD, iD = [...cD, ...pD.path || []], fD = {
        ...pD,
        path: iD
      };
      let bD = "";
      const QD = ID.filter((DD => !!DD)).slice().reverse();
      for (const wD of QD) bD = wD(fD, {
        data: CD,
        defaultError: bD
      }).message;
      return {
        ...pD,
        path: iD,
        message: pD.message || bD
      }
    };

    function ND(DD, CD) {
      const cD = vD({
        issueData: CD,
        data: DD.data,
        path: DD.path,
        errorMaps: [DD.common.contextualErrorMap, DD.schemaErrorMap, oD(), tD].filter((DD => !!DD))
      });
      DD.common.issues.push(cD)
    }
    class gD {
      constructor() {
        this.value = "valid"
      }
      bZ() {
        "valid" === this.value && (this.value = "bZ")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(DD, CD) {
        const cD = [];
        for (const ID of CD) {
          if ("aborted" === ID.status) return XD;
          "bZ" === ID.status && DD.bZ(), cD.push(ID.value)
        }
        return {
          status: DD.value,
          value: cD
        }
      }
      static async mergeObjectAsync(DD, CD) {
        const cD = [];
        for (const ID of CD) cD.push({
          key: await ID.key,
          value: await ID.value
        });
        return gD.mergeObjectSync(DD, cD)
      }
      static mergeObjectSync(DD, CD) {
        const cD = {};
        for (const ID of CD) {
          const {
            key: CD,
            value: pD
          } = ID;
          if ("aborted" === CD.status) return XD;
          if ("aborted" === pD.status) return XD;
          "bZ" === CD.status && DD.bZ(), "bZ" === pD.status && DD.bZ(), "__proto__" === CD.value || "undefined" === typeof pD.value && !ID.alwaysSet || (cD[CD.value] = pD.value)
        }
        return {
          status: DD.value,
          value: cD
        }
      }
    }
    const XD = Object.freeze({
        status: "aborted"
      }),
      mD = DD => ({
        status: "bZ",
        value: DD
      }),
      nD = DD => ({
        status: "valid",
        value: DD
      }),
      OD = DD => "aborted" === DD.status,
      PD = DD => "bZ" === DD.status,
      HD = DD => "valid" === DD.status,
      UD = DD => "undefined" !== typeof Promise && DD instanceof Promise;
    var xD;
    ! function(DD) {
      DD.errToObj = DD => "string" === typeof DD ? {
        message: DD
      } : DD || {}, DD.toString = DD => "string" === typeof DD ? DD : null === DD || void 0 === DD ? void 0 : DD.message
    }(xD || (xD = {}));
    class qD {
      constructor(DD, CD, cD, ID) {
        this._cachedPath = [], this.parent = DD, this.data = CD, this._path = cD, this._key = ID
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const JD = (DD, CD) => {
      if (HD(CD)) return {
        success: !0,
        data: CD.value
      };
      if (!DD.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const CD = new MD(DD.common.issues);
          return this._error = CD, this._error
        }
      }
    };

    function KD(DD) {
      if (!DD) return {};
      const {
        errorMap: CD,
        invalid_type_error: cD,
        required_error: ID,
        description: pD
      } = DD;
      if (CD && (cD || ID)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (CD) return {
        errorMap: CD,
        description: pD
      };
      return {
        errorMap: (DD, CD) => "invalid_type" !== DD.code ? {
          message: CD.defaultError
        } : "undefined" === typeof CD.data ? {
          message: null !== ID && void 0 !== ID ? ID : CD.defaultError
        } : {
          message: null !== cD && void 0 !== cD ? cD : CD.defaultError
        },
        description: pD
      }
    }
    class aD {
      constructor(DD) {
        this.spa = this.safeParseAsync, this._def = DD, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(DD) {
        return BD(DD.data)
      }
      _getOrReturnCtx(DD, CD) {
        return CD || {
          common: DD.parent.common,
          data: DD.data,
          parsedType: BD(DD.data),
          schemaErrorMap: this._def.errorMap,
          path: DD.path,
          parent: DD.parent
        }
      }
      _processInputParams(DD) {
        return {
          status: new gD,
          ctx: {
            common: DD.parent.common,
            data: DD.data,
            parsedType: BD(DD.data),
            schemaErrorMap: this._def.errorMap,
            path: DD.path,
            parent: DD.parent
          }
        }
      }
      _parseSync(DD) {
        const CD = this._parse(DD);
        if (UD(CD)) throw new Error("Synchronous parse encountered promise.");
        return CD
      }
      _parseAsync(DD) {
        const CD = this._parse(DD);
        return Promise.resolve(CD)
      }
      parse(DD, CD) {
        const cD = this.safeParse(DD, CD);
        if (cD.success) return cD.data;
        throw cD.error
      }
      safeParse(DD, CD) {
        var cD;
        const ID = {
            common: {
              issues: [],
              async: null !== (cD = null === CD || void 0 === CD ? void 0 : CD.async) && void 0 !== cD && cD,
              contextualErrorMap: null === CD || void 0 === CD ? void 0 : CD.errorMap
            },
            path: (null === CD || void 0 === CD ? void 0 : CD.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: DD,
            parsedType: BD(DD)
          },
          pD = this._parseSync({
            data: DD,
            path: ID.path,
            parent: ID
          });
        return JD(ID, pD)
      }
      async parseAsync(DD, CD) {
        const cD = await this.safeParseAsync(DD, CD);
        if (cD.success) return cD.data;
        throw cD.error
      }
      async safeParseAsync(DD, CD) {
        const cD = {
            common: {
              issues: [],
              contextualErrorMap: null === CD || void 0 === CD ? void 0 : CD.errorMap,
              async: !0
            },
            path: (null === CD || void 0 === CD ? void 0 : CD.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: DD,
            parsedType: BD(DD)
          },
          ID = this._parse({
            data: DD,
            path: cD.path,
            parent: cD
          }),
          pD = await (UD(ID) ? ID : Promise.resolve(ID));
        return JD(cD, pD)
      }
      refine(DD, CD) {
        const cD = DD => "string" === typeof CD || "undefined" === typeof CD ? {
          message: CD
        } : "function" === typeof CD ? CD(DD) : CD;
        return this._refinement(((CD, ID) => {
          const pD = DD(CD),
            iD = () => ID.addIssue({
              code: yD.custom,
              ...cD(CD)
            });
          return "undefined" !== typeof Promise && pD instanceof Promise ? pD.then((DD => !!DD || (iD(), !1))) : !!pD || (iD(), !1)
        }))
      }
      refinement(DD, CD) {
        return this._refinement(((cD, ID) => !!DD(cD) || (ID.addIssue("function" === typeof CD ? CD(cD, ID) : CD), !1)))
      }
      _refinement(DD) {
        return new XC({
          schema: this,
          typeName: VC.ZodEffects,
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
        return mC.create(this, this._def)
      }
      nullable() {
        return nC.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return CC.create(this, this._def)
      }
      promise() {
        return gC.create(this, this._def)
      }
      or(DD) {
        return pC.create([this, DD], this._def)
      }
      and(DD) {
        return QC.create(this, DD, this._def)
      }
      transform(DD) {
        return new XC({
          ...KD(this._def),
          schema: this,
          typeName: VC.ZodEffects,
          effect: {
            type: "transform",
            transform: DD
          }
        })
      }
      default (DD) {
        const CD = "function" === typeof DD ? DD : () => DD;
        return new OC({
          ...KD(this._def),
          innerType: this,
          defaultValue: CD,
          typeName: VC.ZodDefault
        })
      }
      brand() {
        return new xC({
          typeName: VC.ZodBranded,
          type: this,
          ...KD(this._def)
        })
      } catch (DD) {
        const CD = "function" === typeof DD ? DD : () => DD;
        return new PC({
          ...KD(this._def),
          innerType: this,
          catchValue: CD,
          typeName: VC.ZodCatch
        })
      }
      describe(DD) {
        return new(0, this.constructor)({
          ...this._def,
          description: DD
        })
      }
      pipe(DD) {
        return qC.create(this, DD)
      }
      readonly() {
        return JC.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const VD = /^c[^\s-]{8,}$/i,
      zD = /^[a-z][a-z0-9]*$/,
      jD = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      lD = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      LD = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let TD;
    const GD = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      RD = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class kD extends aD {
      _parse(DD) {
        this._def.coerce && (DD.data = String(DD.data));
        if (this._getType(DD) !== SD.string) {
          const CD = this._getOrReturnCtx(DD);
          return ND(CD, {
            code: yD.invalid_type,
            expected: SD.string,
            received: CD.parsedType
          }), XD
        }
        const CD = new gD;
        let cD;
        for (const QD of this._def.checks)
          if ("min" === QD.kind) DD.data.length < QD.value && (cD = this._getOrReturnCtx(DD, cD), ND(cD, {
            code: yD.too_small,
            minimum: QD.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: QD.message
          }), CD.bZ());
          else if ("max" === QD.kind) DD.data.length > QD.value && (cD = this._getOrReturnCtx(DD, cD), ND(cD, {
          code: yD.too_big,
          maximum: QD.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: QD.message
        }), CD.bZ());
        else if ("length" === QD.kind) {
          const ID = DD.data.length > QD.value,
            pD = DD.data.length < QD.value;
          (ID || pD) && (cD = this._getOrReturnCtx(DD, cD), ID ? ND(cD, {
            code: yD.too_big,
            maximum: QD.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: QD.message
          }) : pD && ND(cD, {
            code: yD.too_small,
            minimum: QD.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: QD.message
          }), CD.bZ())
        } else if ("email" === QD.kind) LD.test(DD.data) || (cD = this._getOrReturnCtx(DD, cD), ND(cD, {
          validation: "email",
          code: yD.invalid_string,
          message: QD.message
        }), CD.bZ());
        else if ("emoji" === QD.kind) TD || (TD = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), TD.test(DD.data) || (cD = this._getOrReturnCtx(DD, cD), ND(cD, {
          validation: "emoji",
          code: yD.invalid_string,
          message: QD.message
        }), CD.bZ());
        else if ("uuid" === QD.kind) lD.test(DD.data) || (cD = this._getOrReturnCtx(DD, cD), ND(cD, {
          validation: "uuid",
          code: yD.invalid_string,
          message: QD.message
        }), CD.bZ());
        else if ("cuid" === QD.kind) VD.test(DD.data) || (cD = this._getOrReturnCtx(DD, cD), ND(cD, {
          validation: "cuid",
          code: yD.invalid_string,
          message: QD.message
        }), CD.bZ());
        else if ("cuid2" === QD.kind) zD.test(DD.data) || (cD = this._getOrReturnCtx(DD, cD), ND(cD, {
          validation: "cuid2",
          code: yD.invalid_string,
          message: QD.message
        }), CD.bZ());
        else if ("ulid" === QD.kind) jD.test(DD.data) || (cD = this._getOrReturnCtx(DD, cD), ND(cD, {
          validation: "ulid",
          code: yD.invalid_string,
          message: QD.message
        }), CD.bZ());
        else if ("url" === QD.kind) try {
          new URL(DD.data)
        } catch (fD) {
          cD = this._getOrReturnCtx(DD, cD), ND(cD, {
            validation: "url",
            code: yD.invalid_string,
            message: QD.message
          }), CD.bZ()
        } else if ("regex" === QD.kind) {
          QD.regex.lastIndex = 0;
          QD.regex.test(DD.data) || (cD = this._getOrReturnCtx(DD, cD), ND(cD, {
            validation: "regex",
            code: yD.invalid_string,
            message: QD.message
          }), CD.bZ())
        } else if ("trim" === QD.kind) DD.data = DD.data.trim();
        else if ("includes" === QD.kind) DD.data.includes(QD.value, QD.position) || (cD = this._getOrReturnCtx(DD, cD), ND(cD, {
          code: yD.invalid_string,
          validation: {
            includes: QD.value,
            position: QD.position
          },
          message: QD.message
        }), CD.bZ());
        else if ("toLowerCase" === QD.kind) DD.data = DD.data.toLowerCase();
        else if ("toUpperCase" === QD.kind) DD.data = DD.data.toUpperCase();
        else if ("startsWith" === QD.kind) DD.data.startsWith(QD.value) || (cD = this._getOrReturnCtx(DD, cD), ND(cD, {
          code: yD.invalid_string,
          validation: {
            startsWith: QD.value
          },
          message: QD.message
        }), CD.bZ());
        else if ("endsWith" === QD.kind) DD.data.endsWith(QD.value) || (cD = this._getOrReturnCtx(DD, cD), ND(cD, {
          code: yD.invalid_string,
          validation: {
            endsWith: QD.value
          },
          message: QD.message
        }), CD.bZ());
        else if ("datetime" === QD.kind) {
          ((iD = QD).precision ? iD.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${iD.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${iD.precision}}Z$`) : 0 === iD.precision ? iD.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : iD.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(DD.data) || (cD = this._getOrReturnCtx(DD, cD), ND(cD, {
            code: yD.invalid_string,
            validation: "datetime",
            message: QD.message
          }), CD.bZ())
        } else "ip" === QD.kind ? (ID = DD.data, ("v4" !== (pD = QD.version) && pD || !GD.test(ID)) && ("v6" !== pD && pD || !RD.test(ID)) && (cD = this._getOrReturnCtx(DD, cD), ND(cD, {
          validation: "ip",
          code: yD.invalid_string,
          message: QD.message
        }), CD.bZ())) : bD.assertNever(QD);
        var ID, pD, iD;
        return {
          status: CD.value,
          value: DD.data
        }
      }
      _regex(DD, CD, cD) {
        return this.refinement((CD => DD.test(CD)), {
          validation: CD,
          code: yD.invalid_string,
          ...xD.errToObj(cD)
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
          ...xD.errToObj(DD)
        })
      }
      url(DD) {
        return this._addCheck({
          kind: "url",
          ...xD.errToObj(DD)
        })
      }
      emoji(DD) {
        return this._addCheck({
          kind: "emoji",
          ...xD.errToObj(DD)
        })
      }
      uuid(DD) {
        return this._addCheck({
          kind: "uuid",
          ...xD.errToObj(DD)
        })
      }
      cuid(DD) {
        return this._addCheck({
          kind: "cuid",
          ...xD.errToObj(DD)
        })
      }
      cuid2(DD) {
        return this._addCheck({
          kind: "cuid2",
          ...xD.errToObj(DD)
        })
      }
      ulid(DD) {
        return this._addCheck({
          kind: "ulid",
          ...xD.errToObj(DD)
        })
      }
      ip(DD) {
        return this._addCheck({
          kind: "ip",
          ...xD.errToObj(DD)
        })
      }
      datetime(DD) {
        var CD;
        return "string" === typeof DD ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: DD
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === DD || void 0 === DD ? void 0 : DD.precision) ? null : null === DD || void 0 === DD ? void 0 : DD.precision,
          offset: null !== (CD = null === DD || void 0 === DD ? void 0 : DD.offset) && void 0 !== CD && CD,
          ...xD.errToObj(null === DD || void 0 === DD ? void 0 : DD.message)
        })
      }
      regex(DD, CD) {
        return this._addCheck({
          kind: "regex",
          regex: DD,
          ...xD.errToObj(CD)
        })
      }
      includes(DD, CD) {
        return this._addCheck({
          kind: "includes",
          value: DD,
          position: null === CD || void 0 === CD ? void 0 : CD.position,
          ...xD.errToObj(null === CD || void 0 === CD ? void 0 : CD.message)
        })
      }
      startsWith(DD, CD) {
        return this._addCheck({
          kind: "startsWith",
          value: DD,
          ...xD.errToObj(CD)
        })
      }
      endsWith(DD, CD) {
        return this._addCheck({
          kind: "endsWith",
          value: DD,
          ...xD.errToObj(CD)
        })
      }
      min(DD, CD) {
        return this._addCheck({
          kind: "min",
          value: DD,
          ...xD.errToObj(CD)
        })
      }
      max(DD, CD) {
        return this._addCheck({
          kind: "max",
          value: DD,
          ...xD.errToObj(CD)
        })
      }
      length(DD, CD) {
        return this._addCheck({
          kind: "length",
          value: DD,
          ...xD.errToObj(CD)
        })
      }
      nonempty(DD) {
        return this.min(1, xD.errToObj(DD))
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
        for (const CD of this._def.checks) "min" === CD.kind && (null === DD || CD.value > DD) && (DD = CD.value);
        return DD
      }
      get maxLength() {
        let DD = null;
        for (const CD of this._def.checks) "max" === CD.kind && (null === DD || CD.value < DD) && (DD = CD.value);
        return DD
      }
    }

    function dD(DD, CD) {
      const cD = (DD.toString().split(".")[1] || "").length,
        ID = (CD.toString().split(".")[1] || "").length,
        pD = cD > ID ? cD : ID;
      return parseInt(DD.toFixed(pD).replace(".", "")) % parseInt(CD.toFixed(pD).replace(".", "")) / Math.pow(10, pD)
    }
    kD.create = DD => {
      var CD;
      return new kD({
        checks: [],
        typeName: VC.ZodString,
        coerce: null !== (CD = null === DD || void 0 === DD ? void 0 : DD.coerce) && void 0 !== CD && CD,
        ...KD(DD)
      })
    };
    class YD extends aD {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(DD) {
        this._def.coerce && (DD.data = Number(DD.data));
        if (this._getType(DD) !== SD.number) {
          const CD = this._getOrReturnCtx(DD);
          return ND(CD, {
            code: yD.invalid_type,
            expected: SD.number,
            received: CD.parsedType
          }), XD
        }
        let CD;
        const cD = new gD;
        for (const ID of this._def.checks)
          if ("int" === ID.kind) bD.isInteger(DD.data) || (CD = this._getOrReturnCtx(DD, CD), ND(CD, {
            code: yD.invalid_type,
            expected: "integer",
            received: "float",
            message: ID.message
          }), cD.bZ());
          else if ("min" === ID.kind) {
          (ID.inclusive ? DD.data < ID.value : DD.data <= ID.value) && (CD = this._getOrReturnCtx(DD, CD), ND(CD, {
            code: yD.too_small,
            minimum: ID.value,
            type: "number",
            inclusive: ID.inclusive,
            exact: !1,
            message: ID.message
          }), cD.bZ())
        } else if ("max" === ID.kind) {
          (ID.inclusive ? DD.data > ID.value : DD.data >= ID.value) && (CD = this._getOrReturnCtx(DD, CD), ND(CD, {
            code: yD.too_big,
            maximum: ID.value,
            type: "number",
            inclusive: ID.inclusive,
            exact: !1,
            message: ID.message
          }), cD.bZ())
        } else "multipleOf" === ID.kind ? 0 !== dD(DD.data, ID.value) && (CD = this._getOrReturnCtx(DD, CD), ND(CD, {
          code: yD.not_multiple_of,
          multipleOf: ID.value,
          message: ID.message
        }), cD.bZ()) : "finite" === ID.kind ? Number.isFinite(DD.data) || (CD = this._getOrReturnCtx(DD, CD), ND(CD, {
          code: yD.not_finite,
          message: ID.message
        }), cD.bZ()) : bD.assertNever(ID);
        return {
          status: cD.value,
          value: DD.data
        }
      }
      gte(DD, CD) {
        return this.setLimit("min", DD, !0, xD.toString(CD))
      }
      gt(DD, CD) {
        return this.setLimit("min", DD, !1, xD.toString(CD))
      }
      lte(DD, CD) {
        return this.setLimit("max", DD, !0, xD.toString(CD))
      }
      lt(DD, CD) {
        return this.setLimit("max", DD, !1, xD.toString(CD))
      }
      setLimit(DD, CD, cD, ID) {
        return new YD({
          ...this._def,
          checks: [...this._def.checks, {
            kind: DD,
            value: CD,
            inclusive: cD,
            message: xD.toString(ID)
          }]
        })
      }
      _addCheck(DD) {
        return new YD({
          ...this._def,
          checks: [...this._def.checks, DD]
        })
      }
      int(DD) {
        return this._addCheck({
          kind: "int",
          message: xD.toString(DD)
        })
      }
      positive(DD) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: xD.toString(DD)
        })
      }
      negative(DD) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: xD.toString(DD)
        })
      }
      nonpositive(DD) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: xD.toString(DD)
        })
      }
      nonnegative(DD) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: xD.toString(DD)
        })
      }
      multipleOf(DD, CD) {
        return this._addCheck({
          kind: "multipleOf",
          value: DD,
          message: xD.toString(CD)
        })
      }
      finite(DD) {
        return this._addCheck({
          kind: "finite",
          message: xD.toString(DD)
        })
      }
      safe(DD) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: xD.toString(DD)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: xD.toString(DD)
        })
      }
      get minValue() {
        let DD = null;
        for (const CD of this._def.checks) "min" === CD.kind && (null === DD || CD.value > DD) && (DD = CD.value);
        return DD
      }
      get maxValue() {
        let DD = null;
        for (const CD of this._def.checks) "max" === CD.kind && (null === DD || CD.value < DD) && (DD = CD.value);
        return DD
      }
      get isInt() {
        return !!this._def.checks.find((DD => "int" === DD.kind || "multipleOf" === DD.kind && bD.isInteger(DD.value)))
      }
      get isFinite() {
        let DD = null,
          CD = null;
        for (const cD of this._def.checks) {
          if ("finite" === cD.kind || "int" === cD.kind || "multipleOf" === cD.kind) return !0;
          "min" === cD.kind ? (null === CD || cD.value > CD) && (CD = cD.value) : "max" === cD.kind && (null === DD || cD.value < DD) && (DD = cD.value)
        }
        return Number.isFinite(CD) && Number.isFinite(DD)
      }
    }
    YD.create = DD => new YD({
      checks: [],
      typeName: VC.ZodNumber,
      coerce: (null === DD || void 0 === DD ? void 0 : DD.coerce) || !1,
      ...KD(DD)
    });
    class WD extends aD {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(DD) {
        this._def.coerce && (DD.data = BigInt(DD.data));
        if (this._getType(DD) !== SD.bigint) {
          const CD = this._getOrReturnCtx(DD);
          return ND(CD, {
            code: yD.invalid_type,
            expected: SD.bigint,
            received: CD.parsedType
          }), XD
        }
        let CD;
        const cD = new gD;
        for (const ID of this._def.checks)
          if ("min" === ID.kind) {
            (ID.inclusive ? DD.data < ID.value : DD.data <= ID.value) && (CD = this._getOrReturnCtx(DD, CD), ND(CD, {
              code: yD.too_small,
              type: "bigint",
              minimum: ID.value,
              inclusive: ID.inclusive,
              message: ID.message
            }), cD.bZ())
          } else if ("max" === ID.kind) {
          (ID.inclusive ? DD.data > ID.value : DD.data >= ID.value) && (CD = this._getOrReturnCtx(DD, CD), ND(CD, {
            code: yD.too_big,
            type: "bigint",
            maximum: ID.value,
            inclusive: ID.inclusive,
            message: ID.message
          }), cD.bZ())
        } else "multipleOf" === ID.kind ? DD.data % ID.value !== BigInt(0) && (CD = this._getOrReturnCtx(DD, CD), ND(CD, {
          code: yD.not_multiple_of,
          multipleOf: ID.value,
          message: ID.message
        }), cD.bZ()) : bD.assertNever(ID);
        return {
          status: cD.value,
          value: DD.data
        }
      }
      gte(DD, CD) {
        return this.setLimit("min", DD, !0, xD.toString(CD))
      }
      gt(DD, CD) {
        return this.setLimit("min", DD, !1, xD.toString(CD))
      }
      lte(DD, CD) {
        return this.setLimit("max", DD, !0, xD.toString(CD))
      }
      lt(DD, CD) {
        return this.setLimit("max", DD, !1, xD.toString(CD))
      }
      setLimit(DD, CD, cD, ID) {
        return new WD({
          ...this._def,
          checks: [...this._def.checks, {
            kind: DD,
            value: CD,
            inclusive: cD,
            message: xD.toString(ID)
          }]
        })
      }
      _addCheck(DD) {
        return new WD({
          ...this._def,
          checks: [...this._def.checks, DD]
        })
      }
      positive(DD) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: xD.toString(DD)
        })
      }
      negative(DD) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: xD.toString(DD)
        })
      }
      nonpositive(DD) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: xD.toString(DD)
        })
      }
      nonnegative(DD) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: xD.toString(DD)
        })
      }
      multipleOf(DD, CD) {
        return this._addCheck({
          kind: "multipleOf",
          value: DD,
          message: xD.toString(CD)
        })
      }
      get minValue() {
        let DD = null;
        for (const CD of this._def.checks) "min" === CD.kind && (null === DD || CD.value > DD) && (DD = CD.value);
        return DD
      }
      get maxValue() {
        let DD = null;
        for (const CD of this._def.checks) "max" === CD.kind && (null === DD || CD.value < DD) && (DD = CD.value);
        return DD
      }
    }
    WD.create = DD => {
      var CD;
      return new WD({
        checks: [],
        typeName: VC.ZodBigInt,
        coerce: null !== (CD = null === DD || void 0 === DD ? void 0 : DD.coerce) && void 0 !== CD && CD,
        ...KD(DD)
      })
    };
    class sD extends aD {
      _parse(DD) {
        this._def.coerce && (DD.data = Boolean(DD.data));
        if (this._getType(DD) !== SD.boolean) {
          const CD = this._getOrReturnCtx(DD);
          return ND(CD, {
            code: yD.invalid_type,
            expected: SD.boolean,
            received: CD.parsedType
          }), XD
        }
        return nD(DD.data)
      }
    }
    sD.create = DD => new sD({
      typeName: VC.ZodBoolean,
      coerce: (null === DD || void 0 === DD ? void 0 : DD.coerce) || !1,
      ...KD(DD)
    });
    class ED extends aD {
      _parse(DD) {
        this._def.coerce && (DD.data = new Date(DD.data));
        if (this._getType(DD) !== SD.date) {
          const CD = this._getOrReturnCtx(DD);
          return ND(CD, {
            code: yD.invalid_type,
            expected: SD.date,
            received: CD.parsedType
          }), XD
        }
        if (isNaN(DD.data.getTime())) {
          return ND(this._getOrReturnCtx(DD), {
            code: yD.invalid_date
          }), XD
        }
        const CD = new gD;
        let cD;
        for (const ID of this._def.checks) "min" === ID.kind ? DD.data.getTime() < ID.value && (cD = this._getOrReturnCtx(DD, cD), ND(cD, {
          code: yD.too_small,
          message: ID.message,
          inclusive: !0,
          exact: !1,
          minimum: ID.value,
          type: "date"
        }), CD.bZ()) : "max" === ID.kind ? DD.data.getTime() > ID.value && (cD = this._getOrReturnCtx(DD, cD), ND(cD, {
          code: yD.too_big,
          message: ID.message,
          inclusive: !0,
          exact: !1,
          maximum: ID.value,
          type: "date"
        }), CD.bZ()) : bD.assertNever(ID);
        return {
          status: CD.value,
          value: new Date(DD.data.getTime())
        }
      }
      _addCheck(DD) {
        return new ED({
          ...this._def,
          checks: [...this._def.checks, DD]
        })
      }
      min(DD, CD) {
        return this._addCheck({
          kind: "min",
          value: DD.getTime(),
          message: xD.toString(CD)
        })
      }
      max(DD, CD) {
        return this._addCheck({
          kind: "max",
          value: DD.getTime(),
          message: xD.toString(CD)
        })
      }
      get minDate() {
        let DD = null;
        for (const CD of this._def.checks) "min" === CD.kind && (null === DD || CD.value > DD) && (DD = CD.value);
        return null != DD ? new Date(DD) : null
      }
      get maxDate() {
        let DD = null;
        for (const CD of this._def.checks) "max" === CD.kind && (null === DD || CD.value < DD) && (DD = CD.value);
        return null != DD ? new Date(DD) : null
      }
    }
    ED.create = DD => new ED({
      checks: [],
      coerce: (null === DD || void 0 === DD ? void 0 : DD.coerce) || !1,
      typeName: VC.ZodDate,
      ...KD(DD)
    });
    class eD extends aD {
      _parse(DD) {
        if (this._getType(DD) !== SD.symbol) {
          const CD = this._getOrReturnCtx(DD);
          return ND(CD, {
            code: yD.invalid_type,
            expected: SD.symbol,
            received: CD.parsedType
          }), XD
        }
        return nD(DD.data)
      }
    }
    eD.create = DD => new eD({
      typeName: VC.ZodSymbol,
      ...KD(DD)
    });
    class uD extends aD {
      _parse(DD) {
        if (this._getType(DD) !== SD.undefined) {
          const CD = this._getOrReturnCtx(DD);
          return ND(CD, {
            code: yD.invalid_type,
            expected: SD.undefined,
            received: CD.parsedType
          }), XD
        }
        return nD(DD.data)
      }
    }
    uD.create = DD => new uD({
      typeName: VC.ZodUndefined,
      ...KD(DD)
    });
    class hD extends aD {
      _parse(DD) {
        if (this._getType(DD) !== SD.null) {
          const CD = this._getOrReturnCtx(DD);
          return ND(CD, {
            code: yD.invalid_type,
            expected: SD.null,
            received: CD.parsedType
          }), XD
        }
        return nD(DD.data)
      }
    }
    hD.create = DD => new hD({
      typeName: VC.ZodNull,
      ...KD(DD)
    });
    class rD extends aD {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(DD) {
        return nD(DD.data)
      }
    }
    rD.create = DD => new rD({
      typeName: VC.ZodAny,
      ...KD(DD)
    });
    class AD extends aD {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(DD) {
        return nD(DD.data)
      }
    }
    AD.create = DD => new AD({
      typeName: VC.ZodUnknown,
      ...KD(DD)
    });
    class FD extends aD {
      _parse(DD) {
        const CD = this._getOrReturnCtx(DD);
        return ND(CD, {
          code: yD.invalid_type,
          expected: SD.never,
          received: CD.parsedType
        }), XD
      }
    }
    FD.create = DD => new FD({
      typeName: VC.ZodNever,
      ...KD(DD)
    });
    class DC extends aD {
      _parse(DD) {
        if (this._getType(DD) !== SD.undefined) {
          const CD = this._getOrReturnCtx(DD);
          return ND(CD, {
            code: yD.invalid_type,
            expected: SD.void,
            received: CD.parsedType
          }), XD
        }
        return nD(DD.data)
      }
    }
    DC.create = DD => new DC({
      typeName: VC.ZodVoid,
      ...KD(DD)
    });
    class CC extends aD {
      _parse(DD) {
        const {
          ctx: CD,
          status: cD
        } = this._processInputParams(DD), ID = this._def;
        if (CD.parsedType !== SD.array) return ND(CD, {
          code: yD.invalid_type,
          expected: SD.array,
          received: CD.parsedType
        }), XD;
        if (null !== ID.exactLength) {
          const DD = CD.data.length > ID.exactLength.value,
            pD = CD.data.length < ID.exactLength.value;
          (DD || pD) && (ND(CD, {
            code: DD ? yD.too_big : yD.too_small,
            minimum: pD ? ID.exactLength.value : void 0,
            maximum: DD ? ID.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: ID.exactLength.message
          }), cD.bZ())
        }
        if (null !== ID.minLength && CD.data.length < ID.minLength.value && (ND(CD, {
            code: yD.too_small,
            minimum: ID.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: ID.minLength.message
          }), cD.bZ()), null !== ID.maxLength && CD.data.length > ID.maxLength.value && (ND(CD, {
            code: yD.too_big,
            maximum: ID.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: ID.maxLength.message
          }), cD.bZ()), CD.common.async) return Promise.all([...CD.data].map(((DD, cD) => ID.type._parseAsync(new qD(CD, DD, CD.path, cD))))).then((DD => gD.mergeArray(cD, DD)));
        const pD = [...CD.data].map(((DD, cD) => ID.type._parseSync(new qD(CD, DD, CD.path, cD))));
        return gD.mergeArray(cD, pD)
      }
      get element() {
        return this._def.type
      }
      min(DD, CD) {
        return new CC({
          ...this._def,
          minLength: {
            value: DD,
            message: xD.toString(CD)
          }
        })
      }
      max(DD, CD) {
        return new CC({
          ...this._def,
          maxLength: {
            value: DD,
            message: xD.toString(CD)
          }
        })
      }
      length(DD, CD) {
        return new CC({
          ...this._def,
          exactLength: {
            value: DD,
            message: xD.toString(CD)
          }
        })
      }
      nonempty(DD) {
        return this.min(1, DD)
      }
    }

    function cC(DD) {
      if (DD instanceof IC) {
        const CD = {};
        for (const cD in DD.shape) {
          const ID = DD.shape[cD];
          CD[cD] = mC.create(cC(ID))
        }
        return new IC({
          ...DD._def,
          shape: () => CD
        })
      }
      return DD instanceof CC ? new CC({
        ...DD._def,
        type: cC(DD.element)
      }) : DD instanceof mC ? mC.create(cC(DD.unwrap())) : DD instanceof nC ? nC.create(cC(DD.unwrap())) : DD instanceof wC ? wC.create(DD.items.map((DD => cC(DD)))) : DD
    }
    CC.create = (DD, CD) => new CC({
      type: DD,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: VC.ZodArray,
      ...KD(CD)
    });
    class IC extends aD {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const DD = this._def.shape(),
          CD = bD.objectKeys(DD);
        return this._cached = {
          shape: DD,
          keys: CD
        }
      }
      _parse(DD) {
        if (this._getType(DD) !== SD.object) {
          const CD = this._getOrReturnCtx(DD);
          return ND(CD, {
            code: yD.invalid_type,
            expected: SD.object,
            received: CD.parsedType
          }), XD
        }
        const {
          status: CD,
          ctx: cD
        } = this._processInputParams(DD), {
          shape: ID,
          keys: pD
        } = this._getCached(), iD = [];
        if (!(this._def.catchall instanceof FD && "strip" === this._def.unknownKeys))
          for (const bD in cD.data) pD.includes(bD) || iD.push(bD);
        const fD = [];
        for (const bD of pD) {
          const DD = ID[bD],
            CD = cD.data[bD];
          fD.push({
            key: {
              status: "valid",
              value: bD
            },
            value: DD._parse(new qD(cD, CD, cD.path, bD)),
            alwaysSet: bD in cD.data
          })
        }
        if (this._def.catchall instanceof FD) {
          const DD = this._def.unknownKeys;
          if ("passthrough" === DD)
            for (const CD of iD) fD.push({
              key: {
                status: "valid",
                value: CD
              },
              value: {
                status: "valid",
                value: cD.data[CD]
              }
            });
          else if ("strict" === DD) iD.length > 0 && (ND(cD, {
            code: yD.unrecognized_keys,
            keys: iD
          }), CD.bZ());
          else if ("strip" !== DD) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const DD = this._def.catchall;
          for (const CD of iD) {
            const ID = cD.data[CD];
            fD.push({
              key: {
                status: "valid",
                value: CD
              },
              value: DD._parse(new qD(cD, ID, cD.path, CD)),
              alwaysSet: CD in cD.data
            })
          }
        }
        return cD.common.async ? Promise.resolve().then((async () => {
          const DD = [];
          for (const CD of fD) {
            const cD = await CD.key;
            DD.push({
              key: cD,
              value: await CD.value,
              alwaysSet: CD.alwaysSet
            })
          }
          return DD
        })).then((DD => gD.mergeObjectSync(CD, DD))) : gD.mergeObjectSync(CD, fD)
      }
      get shape() {
        return this._def.shape()
      }
      strict(DD) {
        return xD.errToObj, new IC({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== DD ? {
            errorMap: (CD, cD) => {
              var ID, pD, iD, fD;
              const bD = null !== (iD = null === (pD = (ID = this._def).errorMap) || void 0 === pD ? void 0 : pD.call(ID, CD, cD).message) && void 0 !== iD ? iD : cD.defaultError;
              return "unrecognized_keys" === CD.code ? {
                message: null !== (fD = xD.errToObj(DD).message) && void 0 !== fD ? fD : bD
              } : {
                message: bD
              }
            }
          } : {}
        })
      }
      strip() {
        return new IC({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new IC({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(DD) {
        return new IC({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...DD
          })
        })
      }
      merge(DD) {
        return new IC({
          unknownKeys: DD._def.unknownKeys,
          catchall: DD._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...DD._def.shape()
          }),
          typeName: VC.ZodObject
        })
      }
      setKey(DD, CD) {
        return this.augment({
          [DD]: CD
        })
      }
      catchall(DD) {
        return new IC({
          ...this._def,
          catchall: DD
        })
      }
      MM(DD) {
        const CD = {};
        return bD.objectKeys(DD).forEach((cD => {
          DD[cD] && this.shape[cD] && (CD[cD] = this.shape[cD])
        })), new IC({
          ...this._def,
          shape: () => CD
        })
      }
      omit(DD) {
        const CD = {};
        return bD.objectKeys(this.shape).forEach((cD => {
          DD[cD] || (CD[cD] = this.shape[cD])
        })), new IC({
          ...this._def,
          shape: () => CD
        })
      }
      deepPartial() {
        return cC(this)
      }
      partial(DD) {
        const CD = {};
        return bD.objectKeys(this.shape).forEach((cD => {
          const ID = this.shape[cD];
          DD && !DD[cD] ? CD[cD] = ID : CD[cD] = ID.optional()
        })), new IC({
          ...this._def,
          shape: () => CD
        })
      }
      required(DD) {
        const CD = {};
        return bD.objectKeys(this.shape).forEach((cD => {
          if (DD && !DD[cD]) CD[cD] = this.shape[cD];
          else {
            let DD = this.shape[cD];
            for (; DD instanceof mC;) DD = DD._def.innerType;
            CD[cD] = DD
          }
        })), new IC({
          ...this._def,
          shape: () => CD
        })
      }
      keyof() {
        return oC(bD.objectKeys(this.shape))
      }
    }
    IC.create = (DD, CD) => new IC({
      shape: () => DD,
      unknownKeys: "strip",
      catchall: FD.create(),
      typeName: VC.ZodObject,
      ...KD(CD)
    }), IC.strictCreate = (DD, CD) => new IC({
      shape: () => DD,
      unknownKeys: "strict",
      catchall: FD.create(),
      typeName: VC.ZodObject,
      ...KD(CD)
    }), IC.lazycreate = (DD, CD) => new IC({
      shape: DD,
      unknownKeys: "strip",
      catchall: FD.create(),
      typeName: VC.ZodObject,
      ...KD(CD)
    });
    class pC extends aD {
      _parse(DD) {
        const {
          ctx: CD
        } = this._processInputParams(DD), cD = this._def.options;
        if (CD.common.async) return Promise.all(cD.map((async DD => {
          const cD = {
            ...CD,
            common: {
              ...CD.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await DD._parseAsync({
              data: CD.data,
              path: CD.path,
              parent: cD
            }),
            ctx: cD
          }
        }))).then((function(DD) {
          for (const CD of DD)
            if ("valid" === CD.result.status) return CD.result;
          for (const ID of DD)
            if ("bZ" === ID.result.status) return CD.common.issues.push(...ID.ctx.common.issues), ID.result;
          const cD = DD.map((DD => new MD(DD.ctx.common.issues)));
          return ND(CD, {
            code: yD.invalid_union,
            unionErrors: cD
          }), XD
        }));
        {
          let DD;
          const ID = [];
          for (const iD of cD) {
            const cD = {
                ...CD,
                common: {
                  ...CD.common,
                  issues: []
                },
                parent: null
              },
              pD = iD._parseSync({
                data: CD.data,
                path: CD.path,
                parent: cD
              });
            if ("valid" === pD.status) return pD;
            "bZ" !== pD.status || DD || (DD = {
              result: pD,
              ctx: cD
            }), cD.common.issues.length && ID.push(cD.common.issues)
          }
          if (DD) return CD.common.issues.push(...DD.ctx.common.issues), DD.result;
          const pD = ID.map((DD => new MD(DD)));
          return ND(CD, {
            code: yD.invalid_union,
            unionErrors: pD
          }), XD
        }
      }
      get options() {
        return this._def.options
      }
    }
    pC.create = (DD, CD) => new pC({
      options: DD,
      typeName: VC.ZodUnion,
      ...KD(CD)
    });
    const iC = DD => DD instanceof tC ? iC(DD.schema) : DD instanceof XC ? iC(DD.innerType()) : DD instanceof ZC ? [DD.value] : DD instanceof vC ? DD.options : DD instanceof NC ? Object.keys(DD.enum) : DD instanceof OC ? iC(DD._def.innerType) : DD instanceof uD ? [void 0] : DD instanceof hD ? [null] : null;
    class fC extends aD {
      _parse(DD) {
        const {
          ctx: CD
        } = this._processInputParams(DD);
        if (CD.parsedType !== SD.object) return ND(CD, {
          code: yD.invalid_type,
          expected: SD.object,
          received: CD.parsedType
        }), XD;
        const cD = this.discriminator,
          ID = CD.data[cD],
          pD = this.optionsMap.get(ID);
        return pD ? CD.common.async ? pD._parseAsync({
          data: CD.data,
          path: CD.path,
          parent: CD
        }) : pD._parseSync({
          data: CD.data,
          path: CD.path,
          parent: CD
        }) : (ND(CD, {
          code: yD.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [cD]
        }), XD)
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
      static create(DD, CD, cD) {
        const ID = new Map;
        for (const pD of CD) {
          const CD = iC(pD.shape[DD]);
          if (!CD) throw new Error(`A discriminator value for key \`${DD}\` could not be extracted from all schema options`);
          for (const cD of CD) {
            if (ID.has(cD)) throw new Error(`Discriminator property ${String(DD)} has duplicate value ${String(cD)}`);
            ID.set(cD, pD)
          }
        }
        return new fC({
          typeName: VC.ZodDiscriminatedUnion,
          discriminator: DD,
          options: CD,
          optionsMap: ID,
          ...KD(cD)
        })
      }
    }

    function bC(DD, CD) {
      const cD = BD(DD),
        ID = BD(CD);
      if (DD === CD) return {
        valid: !0,
        data: DD
      };
      if (cD === SD.object && ID === SD.object) {
        const cD = bD.objectKeys(CD),
          ID = bD.objectKeys(DD).filter((DD => -1 !== cD.indexOf(DD))),
          pD = {
            ...DD,
            ...CD
          };
        for (const iD of ID) {
          const cD = bC(DD[iD], CD[iD]);
          if (!cD.valid) return {
            valid: !1
          };
          pD[iD] = cD.data
        }
        return {
          valid: !0,
          data: pD
        }
      }
      if (cD === SD.array && ID === SD.array) {
        if (DD.length !== CD.length) return {
          valid: !1
        };
        const cD = [];
        for (let ID = 0; ID < DD.length; ID++) {
          const pD = bC(DD[ID], CD[ID]);
          if (!pD.valid) return {
            valid: !1
          };
          cD.push(pD.data)
        }
        return {
          valid: !0,
          data: cD
        }
      }
      return cD === SD.date && ID === SD.date && +DD === +CD ? {
        valid: !0,
        data: DD
      } : {
        valid: !1
      }
    }
    class QC extends aD {
      _parse(DD) {
        const {
          status: CD,
          ctx: cD
        } = this._processInputParams(DD), ID = (DD, ID) => {
          if (OD(DD) || OD(ID)) return XD;
          const pD = bC(DD.value, ID.value);
          return pD.valid ? ((PD(DD) || PD(ID)) && CD.bZ(), {
            status: CD.value,
            value: pD.data
          }) : (ND(cD, {
            code: yD.invalid_intersection_types
          }), XD)
        };
        return cD.common.async ? Promise.all([this._def.left._parseAsync({
          data: cD.data,
          path: cD.path,
          parent: cD
        }), this._def.right._parseAsync({
          data: cD.data,
          path: cD.path,
          parent: cD
        })]).then((DD => {
          let [CD, cD] = DD;
          return ID(CD, cD)
        })) : ID(this._def.left._parseSync({
          data: cD.data,
          path: cD.path,
          parent: cD
        }), this._def.right._parseSync({
          data: cD.data,
          path: cD.path,
          parent: cD
        }))
      }
    }
    QC.create = (DD, CD, cD) => new QC({
      left: DD,
      right: CD,
      typeName: VC.ZodIntersection,
      ...KD(cD)
    });
    class wC extends aD {
      _parse(DD) {
        const {
          status: CD,
          ctx: cD
        } = this._processInputParams(DD);
        if (cD.parsedType !== SD.array) return ND(cD, {
          code: yD.invalid_type,
          expected: SD.array,
          received: cD.parsedType
        }), XD;
        if (cD.data.length < this._def.items.length) return ND(cD, {
          code: yD.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), XD;
        !this._def.rest && cD.data.length > this._def.items.length && (ND(cD, {
          code: yD.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), CD.bZ());
        const ID = [...cD.data].map(((DD, CD) => {
          const ID = this._def.items[CD] || this._def.rest;
          return ID ? ID._parse(new qD(cD, DD, cD.path, CD)) : null
        })).filter((DD => !!DD));
        return cD.common.async ? Promise.all(ID).then((DD => gD.mergeArray(CD, DD))) : gD.mergeArray(CD, ID)
      }
      get items() {
        return this._def.items
      }
      rest(DD) {
        return new wC({
          ...this._def,
          rest: DD
        })
      }
    }
    wC.create = (DD, CD) => {
      if (!Array.isArray(DD)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new wC({
        items: DD,
        typeName: VC.ZodTuple,
        rest: null,
        ...KD(CD)
      })
    };
    class SC extends aD {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(DD) {
        const {
          status: CD,
          ctx: cD
        } = this._processInputParams(DD);
        if (cD.parsedType !== SD.object) return ND(cD, {
          code: yD.invalid_type,
          expected: SD.object,
          received: cD.parsedType
        }), XD;
        const ID = [],
          pD = this._def.keyType,
          iD = this._def.valueType;
        for (const fD in cD.data) ID.push({
          key: pD._parse(new qD(cD, fD, cD.path, fD)),
          value: iD._parse(new qD(cD, cD.data[fD], cD.path, fD))
        });
        return cD.common.async ? gD.mergeObjectAsync(CD, ID) : gD.mergeObjectSync(CD, ID)
      }
      get element() {
        return this._def.valueType
      }
      static create(DD, CD, cD) {
        return new SC(CD instanceof aD ? {
          keyType: DD,
          valueType: CD,
          typeName: VC.ZodRecord,
          ...KD(cD)
        } : {
          keyType: kD.create(),
          valueType: DD,
          typeName: VC.ZodRecord,
          ...KD(CD)
        })
      }
    }
    class BC extends aD {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(DD) {
        const {
          status: CD,
          ctx: cD
        } = this._processInputParams(DD);
        if (cD.parsedType !== SD.map) return ND(cD, {
          code: yD.invalid_type,
          expected: SD.map,
          received: cD.parsedType
        }), XD;
        const ID = this._def.keyType,
          pD = this._def.valueType,
          iD = [...cD.data.entries()].map(((DD, CD) => {
            let [iD, fD] = DD;
            return {
              key: ID._parse(new qD(cD, iD, cD.path, [CD, "key"])),
              value: pD._parse(new qD(cD, fD, cD.path, [CD, "value"]))
            }
          }));
        if (cD.common.async) {
          const DD = new Map;
          return Promise.resolve().then((async () => {
            for (const cD of iD) {
              const ID = await cD.key,
                pD = await cD.value;
              if ("aborted" === ID.status || "aborted" === pD.status) return XD;
              "bZ" !== ID.status && "bZ" !== pD.status || CD.bZ(), DD.set(ID.value, pD.value)
            }
            return {
              status: CD.value,
              value: DD
            }
          }))
        } {
          const DD = new Map;
          for (const cD of iD) {
            const ID = cD.key,
              pD = cD.value;
            if ("aborted" === ID.status || "aborted" === pD.status) return XD;
            "bZ" !== ID.status && "bZ" !== pD.status || CD.bZ(), DD.set(ID.value, pD.value)
          }
          return {
            status: CD.value,
            value: DD
          }
        }
      }
    }
    BC.create = (DD, CD, cD) => new BC({
      valueType: CD,
      keyType: DD,
      typeName: VC.ZodMap,
      ...KD(cD)
    });
    class yC extends aD {
      _parse(DD) {
        const {
          status: CD,
          ctx: cD
        } = this._processInputParams(DD);
        if (cD.parsedType !== SD.set) return ND(cD, {
          code: yD.invalid_type,
          expected: SD.set,
          received: cD.parsedType
        }), XD;
        const ID = this._def;
        null !== ID.minSize && cD.data.size < ID.minSize.value && (ND(cD, {
          code: yD.too_small,
          minimum: ID.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: ID.minSize.message
        }), CD.bZ()), null !== ID.maxSize && cD.data.size > ID.maxSize.value && (ND(cD, {
          code: yD.too_big,
          maximum: ID.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: ID.maxSize.message
        }), CD.bZ());
        const pD = this._def.valueType;

        function iD(DD) {
          const cD = new Set;
          for (const ID of DD) {
            if ("aborted" === ID.status) return XD;
            "bZ" === ID.status && CD.bZ(), cD.add(ID.value)
          }
          return {
            status: CD.value,
            value: cD
          }
        }
        const fD = [...cD.data.values()].map(((DD, CD) => pD._parse(new qD(cD, DD, cD.path, CD))));
        return cD.common.async ? Promise.all(fD).then((DD => iD(DD))) : iD(fD)
      }
      min(DD, CD) {
        return new yC({
          ...this._def,
          minSize: {
            value: DD,
            message: xD.toString(CD)
          }
        })
      }
      max(DD, CD) {
        return new yC({
          ...this._def,
          maxSize: {
            value: DD,
            message: xD.toString(CD)
          }
        })
      }
      size(DD, CD) {
        return this.min(DD, CD).max(DD, CD)
      }
      nonempty(DD) {
        return this.min(1, DD)
      }
    }
    yC.create = (DD, CD) => new yC({
      valueType: DD,
      minSize: null,
      maxSize: null,
      typeName: VC.ZodSet,
      ...KD(CD)
    });
    class MC extends aD {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(DD) {
        const {
          ctx: CD
        } = this._processInputParams(DD);
        if (CD.parsedType !== SD.function) return ND(CD, {
          code: yD.invalid_type,
          expected: SD.function,
          received: CD.parsedType
        }), XD;

        function cD(DD, cD) {
          return vD({
            data: DD,
            path: CD.path,
            errorMaps: [CD.common.contextualErrorMap, CD.schemaErrorMap, oD(), tD].filter((DD => !!DD)),
            issueData: {
              code: yD.invalid_arguments,
              argumentsError: cD
            }
          })
        }

        function ID(DD, cD) {
          return vD({
            data: DD,
            path: CD.path,
            errorMaps: [CD.common.contextualErrorMap, CD.schemaErrorMap, oD(), tD].filter((DD => !!DD)),
            issueData: {
              code: yD.invalid_return_type,
              returnTypeError: cD
            }
          })
        }
        const pD = {
            errorMap: CD.common.contextualErrorMap
          },
          iD = CD.data;
        if (this._def.returns instanceof gC) {
          const DD = this;
          return nD((async function() {
            for (var CD = arguments.length, fD = new Array(CD), bD = 0; bD < CD; bD++) fD[bD] = arguments[bD];
            const QD = new MD([]),
              wD = await DD._def.args.parseAsync(fD, pD).catch((DD => {
                throw QD.addIssue(cD(fD, DD)), QD
              })),
              SD = await Reflect.apply(iD, this, wD);
            return await DD._def.returns._def.type.parseAsync(SD, pD).catch((DD => {
              throw QD.addIssue(ID(SD, DD)), QD
            }))
          }))
        } {
          const DD = this;
          return nD((function() {
            for (var CD = arguments.length, fD = new Array(CD), bD = 0; bD < CD; bD++) fD[bD] = arguments[bD];
            const QD = DD._def.args.safeParse(fD, pD);
            if (!QD.success) throw new MD([cD(fD, QD.error)]);
            const wD = Reflect.apply(iD, this, QD.data),
              SD = DD._def.returns.safeParse(wD, pD);
            if (!SD.success) throw new MD([ID(wD, SD.error)]);
            return SD.data
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
        for (var DD = arguments.length, CD = new Array(DD), cD = 0; cD < DD; cD++) CD[cD] = arguments[cD];
        return new MC({
          ...this._def,
          args: wC.create(CD).rest(AD.create())
        })
      }
      returns(DD) {
        return new MC({
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
      static create(DD, CD, cD) {
        return new MC({
          args: DD || wC.create([]).rest(AD.create()),
          returns: CD || AD.create(),
          typeName: VC.ZodFunction,
          ...KD(cD)
        })
      }
    }
    class tC extends aD {
      get schema() {
        return this._def.getter()
      }
      _parse(DD) {
        const {
          ctx: CD
        } = this._processInputParams(DD);
        return this._def.getter()._parse({
          data: CD.data,
          path: CD.path,
          parent: CD
        })
      }
    }
    tC.create = (DD, CD) => new tC({
      getter: DD,
      typeName: VC.ZodLazy,
      ...KD(CD)
    });
    class ZC extends aD {
      _parse(DD) {
        if (DD.data !== this._def.value) {
          const CD = this._getOrReturnCtx(DD);
          return ND(CD, {
            received: CD.data,
            code: yD.invalid_literal,
            expected: this._def.value
          }), XD
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

    function oC(DD, CD) {
      return new vC({
        values: DD,
        typeName: VC.ZodEnum,
        ...KD(CD)
      })
    }
    ZC.create = (DD, CD) => new ZC({
      value: DD,
      typeName: VC.ZodLiteral,
      ...KD(CD)
    });
    class vC extends aD {
      _parse(DD) {
        if ("string" !== typeof DD.data) {
          const CD = this._getOrReturnCtx(DD),
            cD = this._def.values;
          return ND(CD, {
            expected: bD.joinValues(cD),
            received: CD.parsedType,
            code: yD.invalid_type
          }), XD
        }
        if (-1 === this._def.values.indexOf(DD.data)) {
          const CD = this._getOrReturnCtx(DD),
            cD = this._def.values;
          return ND(CD, {
            received: CD.data,
            code: yD.invalid_enum_value,
            options: cD
          }), XD
        }
        return nD(DD.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const DD = {};
        for (const CD of this._def.values) DD[CD] = CD;
        return DD
      }
      get Values() {
        const DD = {};
        for (const CD of this._def.values) DD[CD] = CD;
        return DD
      }
      get Enum() {
        const DD = {};
        for (const CD of this._def.values) DD[CD] = CD;
        return DD
      }
      extract(DD) {
        return vC.create(DD)
      }
      exclude(DD) {
        return vC.create(this.options.filter((CD => !DD.includes(CD))))
      }
    }
    vC.create = oC;
    class NC extends aD {
      _parse(DD) {
        const CD = bD.getValidEnumValues(this._def.values),
          cD = this._getOrReturnCtx(DD);
        if (cD.parsedType !== SD.string && cD.parsedType !== SD.number) {
          const DD = bD.objectValues(CD);
          return ND(cD, {
            expected: bD.joinValues(DD),
            received: cD.parsedType,
            code: yD.invalid_type
          }), XD
        }
        if (-1 === CD.indexOf(DD.data)) {
          const DD = bD.objectValues(CD);
          return ND(cD, {
            received: cD.data,
            code: yD.invalid_enum_value,
            options: DD
          }), XD
        }
        return nD(DD.data)
      }
      get enum() {
        return this._def.values
      }
    }
    NC.create = (DD, CD) => new NC({
      values: DD,
      typeName: VC.ZodNativeEnum,
      ...KD(CD)
    });
    class gC extends aD {
      unwrap() {
        return this._def.type
      }
      _parse(DD) {
        const {
          ctx: CD
        } = this._processInputParams(DD);
        if (CD.parsedType !== SD.promise && !1 === CD.common.async) return ND(CD, {
          code: yD.invalid_type,
          expected: SD.promise,
          received: CD.parsedType
        }), XD;
        const cD = CD.parsedType === SD.promise ? CD.data : Promise.resolve(CD.data);
        return nD(cD.then((DD => this._def.type.parseAsync(DD, {
          path: CD.path,
          errorMap: CD.common.contextualErrorMap
        }))))
      }
    }
    gC.create = (DD, CD) => new gC({
      type: DD,
      typeName: VC.ZodPromise,
      ...KD(CD)
    });
    class XC extends aD {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === VC.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(DD) {
        const {
          status: CD,
          ctx: cD
        } = this._processInputParams(DD), ID = this._def.effect || null, pD = {
          addIssue: DD => {
            ND(cD, DD), DD.fatal ? CD.abort() : CD.bZ()
          },
          get path() {
            return cD.path
          }
        };
        if (pD.addIssue = pD.addIssue.bind(pD), "preprocess" === ID.type) {
          const DD = ID.transform(cD.data, pD);
          return cD.common.issues.length ? {
            status: "bZ",
            value: cD.data
          } : cD.common.async ? Promise.resolve(DD).then((DD => this._def.schema._parseAsync({
            data: DD,
            path: cD.path,
            parent: cD
          }))) : this._def.schema._parseSync({
            data: DD,
            path: cD.path,
            parent: cD
          })
        }
        if ("refinement" === ID.type) {
          const DD = DD => {
            const CD = ID.refinement(DD, pD);
            if (cD.common.async) return Promise.resolve(CD);
            if (CD instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return DD
          };
          if (!1 === cD.common.async) {
            const ID = this._def.schema._parseSync({
              data: cD.data,
              path: cD.path,
              parent: cD
            });
            return "aborted" === ID.status ? XD : ("bZ" === ID.status && CD.bZ(), DD(ID.value), {
              status: CD.value,
              value: ID.value
            })
          }
          return this._def.schema._parseAsync({
            data: cD.data,
            path: cD.path,
            parent: cD
          }).then((cD => "aborted" === cD.status ? XD : ("bZ" === cD.status && CD.bZ(), DD(cD.value).then((() => ({
            status: CD.value,
            value: cD.value
          }))))))
        }
        if ("transform" === ID.type) {
          if (!1 === cD.common.async) {
            const DD = this._def.schema._parseSync({
              data: cD.data,
              path: cD.path,
              parent: cD
            });
            if (!HD(DD)) return DD;
            const iD = ID.transform(DD.value, pD);
            if (iD instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: CD.value,
              value: iD
            }
          }
          return this._def.schema._parseAsync({
            data: cD.data,
            path: cD.path,
            parent: cD
          }).then((DD => HD(DD) ? Promise.resolve(ID.transform(DD.value, pD)).then((DD => ({
            status: CD.value,
            value: DD
          }))) : DD))
        }
        bD.assertNever(ID)
      }
    }
    XC.create = (DD, CD, cD) => new XC({
      schema: DD,
      typeName: VC.ZodEffects,
      effect: CD,
      ...KD(cD)
    }), XC.createWithPreprocess = (DD, CD, cD) => new XC({
      schema: CD,
      effect: {
        type: "preprocess",
        transform: DD
      },
      typeName: VC.ZodEffects,
      ...KD(cD)
    });
    class mC extends aD {
      _parse(DD) {
        return this._getType(DD) === SD.undefined ? nD(void 0) : this._def.innerType._parse(DD)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    mC.create = (DD, CD) => new mC({
      innerType: DD,
      typeName: VC.ZodOptional,
      ...KD(CD)
    });
    class nC extends aD {
      _parse(DD) {
        return this._getType(DD) === SD.null ? nD(null) : this._def.innerType._parse(DD)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    nC.create = (DD, CD) => new nC({
      innerType: DD,
      typeName: VC.ZodNullable,
      ...KD(CD)
    });
    class OC extends aD {
      _parse(DD) {
        const {
          ctx: CD
        } = this._processInputParams(DD);
        let cD = CD.data;
        return CD.parsedType === SD.undefined && (cD = this._def.defaultValue()), this._def.innerType._parse({
          data: cD,
          path: CD.path,
          parent: CD
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    OC.create = (DD, CD) => new OC({
      innerType: DD,
      typeName: VC.ZodDefault,
      defaultValue: "function" === typeof CD.default ? CD.default : () => CD.default,
      ...KD(CD)
    });
    class PC extends aD {
      _parse(DD) {
        const {
          ctx: CD
        } = this._processInputParams(DD), cD = {
          ...CD,
          common: {
            ...CD.common,
            issues: []
          }
        }, ID = this._def.innerType._parse({
          data: cD.data,
          path: cD.path,
          parent: {
            ...cD
          }
        });
        return UD(ID) ? ID.then((DD => ({
          status: "valid",
          value: "valid" === DD.status ? DD.value : this._def.catchValue({
            get error() {
              return new MD(cD.common.issues)
            },
            input: cD.data
          })
        }))) : {
          status: "valid",
          value: "valid" === ID.status ? ID.value : this._def.catchValue({
            get error() {
              return new MD(cD.common.issues)
            },
            input: cD.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    PC.create = (DD, CD) => new PC({
      innerType: DD,
      typeName: VC.ZodCatch,
      catchValue: "function" === typeof CD.catch ? CD.catch : () => CD.catch,
      ...KD(CD)
    });
    class HC extends aD {
      _parse(DD) {
        if (this._getType(DD) !== SD.nan) {
          const CD = this._getOrReturnCtx(DD);
          return ND(CD, {
            code: yD.invalid_type,
            expected: SD.nan,
            received: CD.parsedType
          }), XD
        }
        return {
          status: "valid",
          value: DD.data
        }
      }
    }
    HC.create = DD => new HC({
      typeName: VC.ZodNaN,
      ...KD(DD)
    });
    const UC = Symbol("zod_brand");
    class xC extends aD {
      _parse(DD) {
        const {
          ctx: CD
        } = this._processInputParams(DD), cD = CD.data;
        return this._def.type._parse({
          data: cD,
          path: CD.path,
          parent: CD
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class qC extends aD {
      _parse(DD) {
        const {
          status: CD,
          ctx: cD
        } = this._processInputParams(DD);
        if (cD.common.async) {
          return (async () => {
            const DD = await this._def.in._parseAsync({
              data: cD.data,
              path: cD.path,
              parent: cD
            });
            return "aborted" === DD.status ? XD : "bZ" === DD.status ? (CD.bZ(), mD(DD.value)) : this._def.out._parseAsync({
              data: DD.value,
              path: cD.path,
              parent: cD
            })
          })()
        } {
          const DD = this._def.in._parseSync({
            data: cD.data,
            path: cD.path,
            parent: cD
          });
          return "aborted" === DD.status ? XD : "bZ" === DD.status ? (CD.bZ(), {
            status: "bZ",
            value: DD.value
          }) : this._def.out._parseSync({
            data: DD.value,
            path: cD.path,
            parent: cD
          })
        }
      }
      static create(DD, CD) {
        return new qC({
          in: DD,
          out: CD,
          typeName: VC.ZodPipeline
        })
      }
    }
    class JC extends aD {
      _parse(DD) {
        const CD = this._def.innerType._parse(DD);
        return HD(CD) && (CD.value = Object.freeze(CD.value)), CD
      }
    }
    JC.create = (DD, CD) => new JC({
      innerType: DD,
      typeName: VC.ZodReadonly,
      ...KD(CD)
    });
    const KC = function(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          cD = arguments.length > 2 ? arguments[2] : void 0;
        return DD ? rD.create().superRefine(((ID, pD) => {
          var iD, fD;
          if (!DD(ID)) {
            const DD = "function" === typeof CD ? CD(ID) : "string" === typeof CD ? {
                message: CD
              } : CD,
              bD = null === (fD = null !== (iD = DD.fatal) && void 0 !== iD ? iD : cD) || void 0 === fD || fD,
              QD = "string" === typeof DD ? {
                message: DD
              } : DD;
            pD.addIssue({
              code: "custom",
              ...QD,
              fatal: bD
            })
          }
        })) : rD.create()
      },
      aC = {
        object: IC.lazycreate
      };
    var VC;
    ! function(DD) {
      DD.ZodString = "ZodString", DD.ZodNumber = "ZodNumber", DD.ZodNaN = "ZodNaN", DD.ZodBigInt = "ZodBigInt", DD.ZodBoolean = "ZodBoolean", DD.ZodDate = "ZodDate", DD.ZodSymbol = "ZodSymbol", DD.ZodUndefined = "ZodUndefined", DD.ZodNull = "ZodNull", DD.ZodAny = "ZodAny", DD.ZodUnknown = "ZodUnknown", DD.ZodNever = "ZodNever", DD.ZodVoid = "ZodVoid", DD.ZodArray = "ZodArray", DD.ZodObject = "ZodObject", DD.ZodUnion = "ZodUnion", DD.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", DD.ZodIntersection = "ZodIntersection", DD.ZodTuple = "ZodTuple", DD.ZodRecord = "ZodRecord", DD.ZodMap = "ZodMap", DD.ZodSet = "ZodSet", DD.ZodFunction = "ZodFunction", DD.ZodLazy = "ZodLazy", DD.ZodLiteral = "ZodLiteral", DD.ZodEnum = "ZodEnum", DD.ZodEffects = "ZodEffects", DD.ZodNativeEnum = "ZodNativeEnum", DD.ZodOptional = "ZodOptional", DD.ZodNullable = "ZodNullable", DD.ZodDefault = "ZodDefault", DD.ZodCatch = "ZodCatch", DD.ZodPromise = "ZodPromise", DD.ZodBranded = "ZodBranded", DD.ZodPipeline = "ZodPipeline", DD.ZodReadonly = "ZodReadonly"
    }(VC || (VC = {}));
    const zC = kD.create,
      jC = YD.create,
      lC = HC.create,
      LC = WD.create,
      TC = sD.create,
      GC = ED.create,
      RC = eD.create,
      kC = uD.create,
      dC = hD.create,
      YC = rD.create,
      WC = AD.create,
      sC = FD.create,
      EC = DC.create,
      eC = CC.create,
      uC = IC.create,
      hC = IC.strictCreate,
      rC = pC.create,
      AC = fC.create,
      FC = QC.create,
      Dc = wC.create,
      Cc = SC.create,
      cc = BC.create,
      Ic = yC.create,
      pc = MC.create,
      ic = tC.create,
      fc = ZC.create,
      bc = vC.create,
      Qc = NC.create,
      wc = gC.create,
      Sc = XC.create,
      Bc = mC.create,
      yc = nC.create,
      Mc = XC.createWithPreprocess,
      tc = qC.create,
      Zc = {
        string: DD => kD.create({
          ...DD,
          coerce: !0
        }),
        number: DD => YD.create({
          ...DD,
          coerce: !0
        }),
        boolean: DD => sD.create({
          ...DD,
          coerce: !0
        }),
        bigint: DD => WD.create({
          ...DD,
          coerce: !0
        }),
        date: DD => ED.create({
          ...DD,
          coerce: !0
        })
      },
      oc = XD;
    var vc = Object.freeze({
        __proto__: null,
        defaultErrorMap: tD,
        setErrorMap: function(DD) {
          ZD = DD
        },
        getErrorMap: oD,
        makeIssue: vD,
        EMPTY_PATH: [],
        addIssueToContext: ND,
        ParseStatus: gD,
        INVALID: XD,
        DIRTY: mD,
        OK: nD,
        isAborted: OD,
        isDirty: PD,
        isValid: HD,
        isAsync: UD,
        get util() {
          return bD
        },
        get objectUtil() {
          return QD
        },
        ZodParsedType: SD,
        getParsedType: BD,
        ZodType: aD,
        ZodString: kD,
        ZodNumber: YD,
        ZodBigInt: WD,
        ZodBoolean: sD,
        ZodDate: ED,
        ZodSymbol: eD,
        ZodUndefined: uD,
        ZodNull: hD,
        ZodAny: rD,
        ZodUnknown: AD,
        ZodNever: FD,
        ZodVoid: DC,
        ZodArray: CC,
        ZodObject: IC,
        ZodUnion: pC,
        ZodDiscriminatedUnion: fC,
        ZodIntersection: QC,
        ZodTuple: wC,
        ZodRecord: SC,
        ZodMap: BC,
        ZodSet: yC,
        ZodFunction: MC,
        ZodLazy: tC,
        ZodLiteral: ZC,
        ZodEnum: vC,
        ZodNativeEnum: NC,
        ZodPromise: gC,
        ZodEffects: XC,
        ZodTransformer: XC,
        ZodOptional: mC,
        ZodNullable: nC,
        ZodDefault: OC,
        ZodCatch: PC,
        ZodNaN: HC,
        BRAND: UC,
        ZodBranded: xC,
        ZodPipeline: qC,
        ZodReadonly: JC,
        custom: KC,
        Schema: aD,
        ZodSchema: aD,
        late: aC,
        get ZodFirstPartyTypeKind() {
          return VC
        },
        coerce: Zc,
        any: YC,
        array: eC,
        bigint: LC,
        boolean: TC,
        date: GC,
        discriminatedUnion: AC,
        effect: Sc,
        enum: bc,
        function: pc,
        instanceof: function(DD) {
          let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${DD.name}`
          };
          return KC((CD => CD instanceof DD), CD)
        },
        intersection: FC,
        lazy: ic,
        literal: fc,
        map: cc,
        nan: lC,
        nativeEnum: Qc,
        never: sC,
        null: dC,
        nullable: yc,
        number: jC,
        object: uC,
        oboolean: () => TC().optional(),
        onumber: () => jC().optional(),
        optional: Bc,
        ostring: () => zC().optional(),
        pipeline: tc,
        preprocess: Mc,
        promise: wc,
        record: Cc,
        set: Ic,
        strictObject: hC,
        string: zC,
        symbol: RC,
        transformer: Sc,
        tuple: Dc,
        undefined: kC,
        union: rC,
        unknown: WC,
        void: EC,
        NEVER: oc,
        ZodIssueCode: yD,
        quotelessJson: DD => JSON.stringify(DD, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: MD
      }),
      Nc = {
        exports: {}
      };
    ! function(DD) {
      var CD = function(DD) {
        var cD = 1e7,
          ID = 9007199254740992,
          pD = yD(ID),
          iD = "0123456789abcdefghijklmnopqrstuvwxyz",
          fD = "function" === typeof BigInt;

        function bD(DD, CD, cD, ID) {
          return "undefined" === typeof DD ? bD[0] : "undefined" !== typeof CD && (10 !== +CD || cD) ? sD(DD, CD, cD, ID) : rD(DD)
        }

        function QD(DD, CD) {
          this.value = DD, this.sign = CD, this.isSmall = !1
        }

        function wD(DD) {
          this.value = DD, this.sign = DD < 0, this.isSmall = !0
        }

        function SD(DD) {
          this.value = DD
        }

        function BD(DD) {
          return -ID < DD && DD < ID
        }

        function yD(DD) {
          return DD < 1e7 ? [DD] : DD < 1e14 ? [DD % 1e7, Math.floor(DD / 1e7)] : [DD % 1e7, Math.floor(DD / 1e7) % 1e7, Math.floor(DD / 1e14)]
        }

        function MD(DD) {
          tD(DD);
          var CD = DD.length;
          if (CD < 4 && KD(DD, pD) < 0) switch (CD) {
            case 0:
              return 0;
            case 1:
              return DD[0];
            case 2:
              return DD[0] + DD[1] * cD;
            default:
              return DD[0] + (DD[1] + DD[2] * cD) * cD
          }
          return DD
        }

        function tD(DD) {
          for (var CD = DD.length; 0 === DD[--CD];);
          DD.length = CD + 1
        }

        function ZD(DD) {
          for (var CD = new Array(DD), cD = -1; ++cD < DD;) CD[cD] = 0;
          return CD
        }

        function oD(DD) {
          return DD > 0 ? Math.floor(DD) : Math.ceil(DD)
        }

        function vD(DD, CD) {
          var ID, pD, iD = DD.length,
            fD = CD.length,
            bD = new Array(iD),
            QD = 0,
            wD = cD;
          for (pD = 0; pD < fD; pD++) QD = (ID = DD[pD] + CD[pD] + QD) >= wD ? 1 : 0, bD[pD] = ID - QD * wD;
          for (; pD < iD;) QD = (ID = DD[pD] + QD) === wD ? 1 : 0, bD[pD++] = ID - QD * wD;
          return QD > 0 && bD.push(QD), bD
        }

        function ND(DD, CD) {
          return DD.length >= CD.length ? vD(DD, CD) : vD(CD, DD)
        }

        function gD(DD, CD) {
          var ID, pD, iD = DD.length,
            fD = new Array(iD),
            bD = cD;
          for (pD = 0; pD < iD; pD++) ID = DD[pD] - bD + CD, CD = Math.floor(ID / bD), fD[pD] = ID - CD * bD, CD += 1;
          for (; CD > 0;) fD[pD++] = CD % bD, CD = Math.floor(CD / bD);
          return fD
        }

        function XD(DD, CD) {
          var ID, pD, iD = DD.length,
            fD = CD.length,
            bD = new Array(iD),
            QD = 0,
            wD = cD;
          for (ID = 0; ID < fD; ID++)(pD = DD[ID] - QD - CD[ID]) < 0 ? (pD += wD, QD = 1) : QD = 0, bD[ID] = pD;
          for (ID = fD; ID < iD; ID++) {
            if (!((pD = DD[ID] - QD) < 0)) {
              bD[ID++] = pD;
              break
            }
            pD += wD, bD[ID] = pD
          }
          for (; ID < iD; ID++) bD[ID] = DD[ID];
          return tD(bD), bD
        }

        function mD(DD, CD, ID) {
          var pD, iD, fD = DD.length,
            bD = new Array(fD),
            SD = -CD,
            BD = cD;
          for (pD = 0; pD < fD; pD++) iD = DD[pD] + SD, SD = Math.floor(iD / BD), iD %= BD, bD[pD] = iD < 0 ? iD + BD : iD;
          return "number" === typeof(bD = MD(bD)) ? (ID && (bD = -bD), new wD(bD)) : new QD(bD, ID)
        }

        function nD(DD, CD) {
          var ID, pD, iD, fD, bD = DD.length,
            QD = CD.length,
            wD = ZD(bD + QD),
            SD = cD;
          for (iD = 0; iD < bD; ++iD) {
            fD = DD[iD];
            for (var BD = 0; BD < QD; ++BD) ID = fD * CD[BD] + wD[iD + BD], pD = Math.floor(ID / SD), wD[iD + BD] = ID - pD * SD, wD[iD + BD + 1] += pD
          }
          return tD(wD), wD
        }

        function OD(DD, CD) {
          var ID, pD, iD = DD.length,
            fD = new Array(iD),
            bD = cD,
            QD = 0;
          for (pD = 0; pD < iD; pD++) ID = DD[pD] * CD + QD, QD = Math.floor(ID / bD), fD[pD] = ID - QD * bD;
          for (; QD > 0;) fD[pD++] = QD % bD, QD = Math.floor(QD / bD);
          return fD
        }

        function PD(DD, CD) {
          for (var cD = []; CD-- > 0;) cD.push(0);
          return cD.concat(DD)
        }

        function HD(DD, CD) {
          var cD = Math.max(DD.length, CD.length);
          if (cD <= 30) return nD(DD, CD);
          cD = Math.ceil(cD / 2);
          var ID = DD.slice(cD),
            pD = DD.slice(0, cD),
            iD = CD.slice(cD),
            fD = CD.slice(0, cD),
            bD = HD(pD, fD),
            QD = HD(ID, iD),
            wD = HD(ND(pD, ID), ND(fD, iD)),
            SD = ND(ND(bD, PD(XD(XD(wD, bD), QD), cD)), PD(QD, 2 * cD));
          return tD(SD), SD
        }

        function UD(DD, CD, ID) {
          return new QD(DD < cD ? OD(CD, DD) : nD(CD, yD(DD)), ID)
        }

        function xD(DD) {
          var CD, ID, pD, iD, fD = DD.length,
            bD = ZD(fD + fD),
            QD = cD;
          for (pD = 0; pD < fD; pD++) {
            ID = 0 - (iD = DD[pD]) * iD;
            for (var wD = pD; wD < fD; wD++) CD = iD * DD[wD] * 2 + bD[pD + wD] + ID, ID = Math.floor(CD / QD), bD[pD + wD] = CD - ID * QD;
            bD[pD + fD] = ID
          }
          return tD(bD), bD
        }

        function qD(DD, CD) {
          var ID, pD, iD, fD, bD = DD.length,
            QD = ZD(bD),
            wD = cD;
          for (iD = 0, ID = bD - 1; ID >= 0; --ID) iD = (fD = iD * wD + DD[ID]) - (pD = oD(fD / CD)) * CD, QD[ID] = 0 | pD;
          return [QD, 0 | iD]
        }

        function JD(DD, CD) {
          var ID, pD = rD(CD);
          if (fD) return [new SD(DD.value / pD.value), new SD(DD.value % pD.value)];
          var iD, BD = DD.value,
            vD = pD.value;
          if (0 === vD) throw new Error("Cannot divide by zero");
          if (DD.isSmall) return pD.isSmall ? [new wD(oD(BD / vD)), new wD(BD % vD)] : [bD[0], DD];
          if (pD.isSmall) {
            if (1 === vD) return [DD, bD[0]];
            if (-1 == vD) return [DD.pp(), bD[0]];
            var ND = Math.abs(vD);
            if (ND < cD) {
              iD = MD((ID = qD(BD, ND))[0]);
              var gD = ID[1];
              return DD.sign && (gD = -gD), "number" === typeof iD ? (DD.sign !== pD.sign && (iD = -iD), [new wD(iD), new wD(gD)]) : [new QD(iD, DD.sign !== pD.sign), new wD(gD)]
            }
            vD = yD(ND)
          }
          var mD = KD(BD, vD);
          if (-1 === mD) return [bD[0], DD];
          if (0 === mD) return [bD[DD.sign === pD.sign ? 1 : -1], bD[0]];
          ID = BD.length + vD.length <= 200 ? function(DD, CD) {
            var ID, pD, iD, fD, bD, QD, wD, SD = DD.length,
              BD = CD.length,
              yD = cD,
              tD = ZD(CD.length),
              oD = CD[BD - 1],
              vD = Math.ceil(yD / (2 * oD)),
              ND = OD(DD, vD),
              gD = OD(CD, vD);
            for (ND.length <= SD && ND.push(0), gD.push(0), oD = gD[BD - 1], pD = SD - BD; pD >= 0; pD--) {
              for (ID = yD - 1, ND[pD + BD] !== oD && (ID = Math.floor((ND[pD + BD] * yD + ND[pD + BD - 1]) / oD)), iD = 0, fD = 0, QD = gD.length, bD = 0; bD < QD; bD++) iD += ID * gD[bD], wD = Math.floor(iD / yD), fD += ND[pD + bD] - (iD - wD * yD), iD = wD, fD < 0 ? (ND[pD + bD] = fD + yD, fD = -1) : (ND[pD + bD] = fD, fD = 0);
              for (; 0 !== fD;) {
                for (ID -= 1, iD = 0, bD = 0; bD < QD; bD++)(iD += ND[pD + bD] - yD + gD[bD]) < 0 ? (ND[pD + bD] = iD + yD, iD = 0) : (ND[pD + bD] = iD, iD = 1);
                fD += iD
              }
              tD[pD] = ID
            }
            return ND = qD(ND, vD)[0], [MD(tD), MD(ND)]
          }(BD, vD) : function(DD, CD) {
            for (var ID, pD, iD, fD, bD, QD = DD.length, wD = CD.length, SD = [], BD = [], yD = cD; QD;)
              if (BD.unshift(DD[--QD]), tD(BD), KD(BD, CD) < 0) SD.push(0);
              else {
                iD = BD[(pD = BD.length) - 1] * yD + BD[pD - 2], fD = CD[wD - 1] * yD + CD[wD - 2], pD > wD && (iD = (iD + 1) * yD), ID = Math.ceil(iD / fD);
                do {
                  if (KD(bD = OD(CD, ID), BD) <= 0) break;
                  ID--
                } while (ID);
                SD.push(ID), BD = XD(BD, bD)
              } return SD.reverse(), [MD(SD), MD(BD)]
          }(BD, vD), iD = ID[0];
          var nD = DD.sign !== pD.sign,
            PD = ID[1],
            HD = DD.sign;
          return "number" === typeof iD ? (nD && (iD = -iD), iD = new wD(iD)) : iD = new QD(iD, nD), "number" === typeof PD ? (HD && (PD = -PD), PD = new wD(PD)) : PD = new QD(PD, HD), [iD, PD]
        }

        function KD(DD, CD) {
          if (DD.length !== CD.length) return DD.length > CD.length ? 1 : -1;
          for (var cD = DD.length - 1; cD >= 0; cD--)
            if (DD[cD] !== CD[cD]) return DD[cD] > CD[cD] ? 1 : -1;
          return 0
        }

        function aD(DD) {
          var CD = DD.abs();
          return !CD.isUnit() && (!!(CD.equals(2) || CD.equals(3) || CD.equals(5)) || !(CD.isEven() || CD.isDivisibleBy(3) || CD.isDivisibleBy(5)) && (!!CD.lesser(49) || void 0))
        }

        function VD(DD, cD) {
          for (var ID, pD, iD, fD = DD.prev(), bD = fD, QD = 0; bD.isEven();) bD = bD.divide(2), QD++;
          DD: for (pD = 0; pD < cD.length; pD++)
            if (!DD.lesser(cD[pD]) && !(iD = CD(cD[pD]).modPow(bD, DD)).isUnit() && !iD.equals(fD)) {
              for (ID = QD - 1; 0 != ID; ID--) {
                if ((iD = iD.square().mod(DD)).isUnit()) return !1;
                if (iD.equals(fD)) continue DD
              }
              return !1
            }
          return !0
        }
        QD.prototype = Object.create(bD.prototype), wD.prototype = Object.create(bD.prototype), SD.prototype = Object.create(bD.prototype), QD.prototype.add = function(DD) {
          var CD = rD(DD);
          if (this.sign !== CD.sign) return this.subtract(CD.pp());
          var cD = this.value,
            ID = CD.value;
          return CD.isSmall ? new QD(gD(cD, Math.abs(ID)), this.sign) : new QD(ND(cD, ID), this.sign)
        }, QD.prototype.plus = QD.prototype.add, wD.prototype.add = function(DD) {
          var CD = rD(DD),
            cD = this.value;
          if (cD < 0 !== CD.sign) return this.subtract(CD.pp());
          var ID = CD.value;
          if (CD.isSmall) {
            if (BD(cD + ID)) return new wD(cD + ID);
            ID = yD(Math.abs(ID))
          }
          return new QD(gD(ID, Math.abs(cD)), cD < 0)
        }, wD.prototype.plus = wD.prototype.add, SD.prototype.add = function(DD) {
          return new SD(this.value + rD(DD).value)
        }, SD.prototype.plus = SD.prototype.add, QD.prototype.subtract = function(DD) {
          var CD = rD(DD);
          if (this.sign !== CD.sign) return this.add(CD.pp());
          var cD = this.value,
            ID = CD.value;
          return CD.isSmall ? mD(cD, Math.abs(ID), this.sign) : function(DD, CD, cD) {
            var ID;
            return KD(DD, CD) >= 0 ? ID = XD(DD, CD) : (ID = XD(CD, DD), cD = !cD), "number" === typeof(ID = MD(ID)) ? (cD && (ID = -ID), new wD(ID)) : new QD(ID, cD)
          }(cD, ID, this.sign)
        }, QD.prototype.minus = QD.prototype.subtract, wD.prototype.subtract = function(DD) {
          var CD = rD(DD),
            cD = this.value;
          if (cD < 0 !== CD.sign) return this.add(CD.pp());
          var ID = CD.value;
          return CD.isSmall ? new wD(cD - ID) : mD(ID, Math.abs(cD), cD >= 0)
        }, wD.prototype.minus = wD.prototype.subtract, SD.prototype.subtract = function(DD) {
          return new SD(this.value - rD(DD).value)
        }, SD.prototype.minus = SD.prototype.subtract, QD.prototype.pp = function() {
          return new QD(this.value, !this.sign)
        }, wD.prototype.pp = function() {
          var DD = this.sign,
            CD = new wD(-this.value);
          return CD.sign = !DD, CD
        }, SD.prototype.pp = function() {
          return new SD(-this.value)
        }, QD.prototype.abs = function() {
          return new QD(this.value, !1)
        }, wD.prototype.abs = function() {
          return new wD(Math.abs(this.value))
        }, SD.prototype.abs = function() {
          return new SD(this.value >= 0 ? this.value : -this.value)
        }, QD.prototype.multiply = function(DD) {
          var CD, ID, pD, iD = rD(DD),
            fD = this.value,
            wD = iD.value,
            SD = this.sign !== iD.sign;
          if (iD.isSmall) {
            if (0 === wD) return bD[0];
            if (1 === wD) return this;
            if (-1 === wD) return this.pp();
            if ((CD = Math.abs(wD)) < cD) return new QD(OD(fD, CD), SD);
            wD = yD(CD)
          }
          return ID = fD.length, pD = wD.length, new QD(-.012 * ID - .012 * pD + 15e-6 * ID * pD > 0 ? HD(fD, wD) : nD(fD, wD), SD)
        }, QD.prototype.times = QD.prototype.multiply, wD.prototype._multiplyBySmall = function(DD) {
          return BD(DD.value * this.value) ? new wD(DD.value * this.value) : UD(Math.abs(DD.value), yD(Math.abs(this.value)), this.sign !== DD.sign)
        }, QD.prototype._multiplyBySmall = function(DD) {
          return 0 === DD.value ? bD[0] : 1 === DD.value ? this : -1 === DD.value ? this.pp() : UD(Math.abs(DD.value), this.value, this.sign !== DD.sign)
        }, wD.prototype.multiply = function(DD) {
          return rD(DD)._multiplyBySmall(this)
        }, wD.prototype.times = wD.prototype.multiply, SD.prototype.multiply = function(DD) {
          return new SD(this.value * rD(DD).value)
        }, SD.prototype.times = SD.prototype.multiply, QD.prototype.square = function() {
          return new QD(xD(this.value), !1)
        }, wD.prototype.square = function() {
          var DD = this.value * this.value;
          return BD(DD) ? new wD(DD) : new QD(xD(yD(Math.abs(this.value))), !1)
        }, SD.prototype.square = function(DD) {
          return new SD(this.value * this.value)
        }, QD.prototype.divmod = function(DD) {
          var CD = JD(this, DD);
          return {
            quotient: CD[0],
            remainder: CD[1]
          }
        }, SD.prototype.divmod = wD.prototype.divmod = QD.prototype.divmod, QD.prototype.divide = function(DD) {
          return JD(this, DD)[0]
        }, SD.prototype.over = SD.prototype.divide = function(DD) {
          return new SD(this.value / rD(DD).value)
        }, wD.prototype.over = wD.prototype.divide = QD.prototype.over = QD.prototype.divide, QD.prototype.mod = function(DD) {
          return JD(this, DD)[1]
        }, SD.prototype.mod = SD.prototype.remainder = function(DD) {
          return new SD(this.value % rD(DD).value)
        }, wD.prototype.remainder = wD.prototype.mod = QD.prototype.remainder = QD.prototype.mod, QD.prototype.pow = function(DD) {
          var CD, cD, ID, pD = rD(DD),
            iD = this.value,
            fD = pD.value;
          if (0 === fD) return bD[1];
          if (0 === iD) return bD[0];
          if (1 === iD) return bD[1];
          if (-1 === iD) return pD.isEven() ? bD[1] : bD[-1];
          if (pD.sign) return bD[0];
          if (!pD.isSmall) throw new Error("The exponent " + pD.toString() + " is too large.");
          if (this.isSmall && BD(CD = Math.pow(iD, fD))) return new wD(oD(CD));
          for (cD = this, ID = bD[1]; !0 & fD && (ID = ID.times(cD), --fD), 0 !== fD;) fD /= 2, cD = cD.square();
          return ID
        }, wD.prototype.pow = QD.prototype.pow, SD.prototype.pow = function(DD) {
          var CD = rD(DD),
            cD = this.value,
            ID = CD.value,
            pD = BigInt(0),
            iD = BigInt(1),
            fD = BigInt(2);
          if (ID === pD) return bD[1];
          if (cD === pD) return bD[0];
          if (cD === iD) return bD[1];
          if (cD === BigInt(-1)) return CD.isEven() ? bD[1] : bD[-1];
          if (CD.isNegative()) return new SD(pD);
          for (var QD = this, wD = bD[1];
            (ID & iD) === iD && (wD = wD.times(QD), --ID), ID !== pD;) ID /= fD, QD = QD.square();
          return wD
        }, QD.prototype.modPow = function(DD, CD) {
          if (DD = rD(DD), (CD = rD(CD)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var cD = bD[1],
            ID = this.mod(CD);
          for (DD.isNegative() && (DD = DD.multiply(bD[-1]), ID = ID.modInv(CD)); DD.isPositive();) {
            if (ID.isZero()) return bD[0];
            DD.isOdd() && (cD = cD.multiply(ID).mod(CD)), DD = DD.divide(2), ID = ID.square().mod(CD)
          }
          return cD
        }, SD.prototype.modPow = wD.prototype.modPow = QD.prototype.modPow, QD.prototype.compareAbs = function(DD) {
          var CD = rD(DD),
            cD = this.value,
            ID = CD.value;
          return CD.isSmall ? 1 : KD(cD, ID)
        }, wD.prototype.compareAbs = function(DD) {
          var CD = rD(DD),
            cD = Math.abs(this.value),
            ID = CD.value;
          return CD.isSmall ? cD === (ID = Math.abs(ID)) ? 0 : cD > ID ? 1 : -1 : -1
        }, SD.prototype.compareAbs = function(DD) {
          var CD = this.value,
            cD = rD(DD).value;
          return (CD = CD >= 0 ? CD : -CD) === (cD = cD >= 0 ? cD : -cD) ? 0 : CD > cD ? 1 : -1
        }, QD.prototype.compare = function(DD) {
          if (DD === 1 / 0) return -1;
          if (DD === -1 / 0) return 1;
          var CD = rD(DD),
            cD = this.value,
            ID = CD.value;
          return this.sign !== CD.sign ? CD.sign ? 1 : -1 : CD.isSmall ? this.sign ? -1 : 1 : KD(cD, ID) * (this.sign ? -1 : 1)
        }, QD.prototype.compareTo = QD.prototype.compare, wD.prototype.compare = function(DD) {
          if (DD === 1 / 0) return -1;
          if (DD === -1 / 0) return 1;
          var CD = rD(DD),
            cD = this.value,
            ID = CD.value;
          return CD.isSmall ? cD == ID ? 0 : cD > ID ? 1 : -1 : cD < 0 !== CD.sign ? cD < 0 ? -1 : 1 : cD < 0 ? 1 : -1
        }, wD.prototype.compareTo = wD.prototype.compare, SD.prototype.compare = function(DD) {
          if (DD === 1 / 0) return -1;
          if (DD === -1 / 0) return 1;
          var CD = this.value,
            cD = rD(DD).value;
          return CD === cD ? 0 : CD > cD ? 1 : -1
        }, SD.prototype.compareTo = SD.prototype.compare, QD.prototype.equals = function(DD) {
          return 0 === this.compare(DD)
        }, SD.prototype.eq = SD.prototype.equals = wD.prototype.eq = wD.prototype.equals = QD.prototype.eq = QD.prototype.equals, QD.prototype.notEquals = function(DD) {
          return 0 !== this.compare(DD)
        }, SD.prototype.neq = SD.prototype.notEquals = wD.prototype.neq = wD.prototype.notEquals = QD.prototype.neq = QD.prototype.notEquals, QD.prototype.greater = function(DD) {
          return this.compare(DD) > 0
        }, SD.prototype.gt = SD.prototype.greater = wD.prototype.gt = wD.prototype.greater = QD.prototype.gt = QD.prototype.greater, QD.prototype.lesser = function(DD) {
          return this.compare(DD) < 0
        }, SD.prototype.lt = SD.prototype.lesser = wD.prototype.lt = wD.prototype.lesser = QD.prototype.lt = QD.prototype.lesser, QD.prototype.greaterOrEquals = function(DD) {
          return this.compare(DD) >= 0
        }, SD.prototype.geq = SD.prototype.greaterOrEquals = wD.prototype.geq = wD.prototype.greaterOrEquals = QD.prototype.geq = QD.prototype.greaterOrEquals, QD.prototype.lesserOrEquals = function(DD) {
          return this.compare(DD) <= 0
        }, SD.prototype.leq = SD.prototype.lesserOrEquals = wD.prototype.leq = wD.prototype.lesserOrEquals = QD.prototype.leq = QD.prototype.lesserOrEquals, QD.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, wD.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, SD.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, QD.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, wD.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, SD.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, QD.prototype.isPositive = function() {
          return !this.sign
        }, wD.prototype.isPositive = function() {
          return this.value > 0
        }, SD.prototype.isPositive = wD.prototype.isPositive, QD.prototype.isNegative = function() {
          return this.sign
        }, wD.prototype.isNegative = function() {
          return this.value < 0
        }, SD.prototype.isNegative = wD.prototype.isNegative, QD.prototype.isUnit = function() {
          return !1
        }, wD.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, SD.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, QD.prototype.isZero = function() {
          return !1
        }, wD.prototype.isZero = function() {
          return 0 === this.value
        }, SD.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, QD.prototype.isDivisibleBy = function(DD) {
          var CD = rD(DD);
          return !CD.isZero() && (!!CD.isUnit() || (0 === CD.compareAbs(2) ? this.isEven() : this.mod(CD).isZero()))
        }, SD.prototype.isDivisibleBy = wD.prototype.isDivisibleBy = QD.prototype.isDivisibleBy, QD.prototype.isPrime = function(cD) {
          var ID = aD(this);
          if (ID !== DD) return ID;
          var pD = this.abs(),
            iD = pD.bitLength();
          if (iD <= 64) return VD(pD, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var fD = Math.log(2) * iD.toJSNumber(), bD = Math.ceil(!0 === cD ? 2 * Math.pow(fD, 2) : fD), QD = [], wD = 0; wD < bD; wD++) QD.push(CD(wD + 2));
          return VD(pD, QD)
        }, SD.prototype.isPrime = wD.prototype.isPrime = QD.prototype.isPrime, QD.prototype.isProbablePrime = function(cD, ID) {
          var pD = aD(this);
          if (pD !== DD) return pD;
          for (var iD = this.abs(), fD = cD === DD ? 5 : cD, bD = [], QD = 0; QD < fD; QD++) bD.push(CD.randBetween(2, iD.minus(2), ID));
          return VD(iD, bD)
        }, SD.prototype.isProbablePrime = wD.prototype.isProbablePrime = QD.prototype.isProbablePrime, QD.prototype.modInv = function(DD) {
          for (var cD, ID, pD, iD = CD.zero, fD = CD.one, bD = rD(DD), QD = this.abs(); !QD.isZero();) cD = bD.divide(QD), ID = iD, pD = bD, iD = fD, bD = QD, fD = ID.subtract(cD.multiply(fD)), QD = pD.subtract(cD.multiply(QD));
          if (!bD.isUnit()) throw new Error(this.toString() + " and " + DD.toString() + " are not co-prime");
          return -1 === iD.compare(0) && (iD = iD.add(DD)), this.isNegative() ? iD.pp() : iD
        }, SD.prototype.modInv = wD.prototype.modInv = QD.prototype.modInv, QD.prototype.next = function() {
          var DD = this.value;
          return this.sign ? mD(DD, 1, this.sign) : new QD(gD(DD, 1), this.sign)
        }, wD.prototype.next = function() {
          var DD = this.value;
          return DD + 1 < ID ? new wD(DD + 1) : new QD(pD, !1)
        }, SD.prototype.next = function() {
          return new SD(this.value + BigInt(1))
        }, QD.prototype.prev = function() {
          var DD = this.value;
          return this.sign ? new QD(gD(DD, 1), !0) : mD(DD, 1, this.sign)
        }, wD.prototype.prev = function() {
          var DD = this.value;
          return DD - 1 > -ID ? new wD(DD - 1) : new QD(pD, !0)
        }, SD.prototype.prev = function() {
          return new SD(this.value - BigInt(1))
        };
        for (var zD = [1]; 2 * zD[zD.length - 1] <= cD;) zD.push(2 * zD[zD.length - 1]);
        var jD = zD.length,
          lD = zD[jD - 1];

        function LD(DD) {
          return Math.abs(DD) <= cD
        }

        function TD(DD, cD, ID) {
          cD = rD(cD);
          for (var pD = DD.isNegative(), iD = cD.isNegative(), fD = pD ? DD.not() : DD, bD = iD ? cD.not() : cD, QD = 0, wD = 0, SD = null, BD = null, yD = []; !fD.isZero() || !bD.isZero();) QD = (SD = JD(fD, lD))[1].toJSNumber(), pD && (QD = lD - 1 - QD), wD = (BD = JD(bD, lD))[1].toJSNumber(), iD && (wD = lD - 1 - wD), fD = SD[0], bD = BD[0], yD.push(ID(QD, wD));
          for (var MD = 0 !== ID(pD ? 1 : 0, iD ? 1 : 0) ? CD(-1) : CD(0), tD = yD.length - 1; tD >= 0; tD -= 1) MD = MD.multiply(lD).add(CD(yD[tD]));
          return MD
        }
        QD.prototype.shiftLeft = function(DD) {
          var CD = rD(DD).toJSNumber();
          if (!LD(CD)) throw new Error(String(CD) + " is too large for shifting.");
          if (CD < 0) return this.shiftRight(-CD);
          var cD = this;
          if (cD.isZero()) return cD;
          for (; CD >= jD;) cD = cD.multiply(lD), CD -= jD - 1;
          return cD.multiply(zD[CD])
        }, SD.prototype.shiftLeft = wD.prototype.shiftLeft = QD.prototype.shiftLeft, QD.prototype.shiftRight = function(DD) {
          var CD, cD = rD(DD).toJSNumber();
          if (!LD(cD)) throw new Error(String(cD) + " is too large for shifting.");
          if (cD < 0) return this.shiftLeft(-cD);
          for (var ID = this; cD >= jD;) {
            if (ID.isZero() || ID.isNegative() && ID.isUnit()) return ID;
            ID = (CD = JD(ID, lD))[1].isNegative() ? CD[0].prev() : CD[0], cD -= jD - 1
          }
          return (CD = JD(ID, zD[cD]))[1].isNegative() ? CD[0].prev() : CD[0]
        }, SD.prototype.shiftRight = wD.prototype.shiftRight = QD.prototype.shiftRight, QD.prototype.not = function() {
          return this.pp().prev()
        }, SD.prototype.not = wD.prototype.not = QD.prototype.not, QD.prototype.and = function(DD) {
          return TD(this, DD, (function(DD, CD) {
            return DD & CD
          }))
        }, SD.prototype.and = wD.prototype.and = QD.prototype.and, QD.prototype.or = function(DD) {
          return TD(this, DD, (function(DD, CD) {
            return DD | CD
          }))
        }, SD.prototype.or = wD.prototype.or = QD.prototype.or, QD.prototype.xor = function(DD) {
          return TD(this, DD, (function(DD, CD) {
            return DD ^ CD
          }))
        }, SD.prototype.xor = wD.prototype.xor = QD.prototype.xor;
        var GD = 1 << 30;

        function RD(DD) {
          var CD = DD.value,
            ID = "number" === typeof CD ? CD | GD : "bigint" === typeof CD ? CD | BigInt(GD) : CD[0] + CD[1] * cD | 1073758208;
          return ID & -ID
        }

        function kD(DD, cD) {
          if (cD.compareTo(DD) <= 0) {
            var ID = kD(DD, cD.square(cD)),
              pD = ID.p,
              iD = ID.e,
              fD = pD.multiply(cD);
            return fD.compareTo(DD) <= 0 ? {
              p: fD,
              e: 2 * iD + 1
            } : {
              p: pD,
              e: 2 * iD
            }
          }
          return {
            p: CD(1),
            e: 0
          }
        }

        function dD(DD, CD) {
          return DD = rD(DD), CD = rD(CD), DD.greater(CD) ? DD : CD
        }

        function YD(DD, CD) {
          return DD = rD(DD), CD = rD(CD), DD.lesser(CD) ? DD : CD
        }

        function WD(DD, CD) {
          if (DD = rD(DD).abs(), CD = rD(CD).abs(), DD.equals(CD)) return DD;
          if (DD.isZero()) return CD;
          if (CD.isZero()) return DD;
          for (var cD, ID, pD = bD[1]; DD.isEven() && CD.isEven();) cD = YD(RD(DD), RD(CD)), DD = DD.divide(cD), CD = CD.divide(cD), pD = pD.multiply(cD);
          for (; DD.isEven();) DD = DD.divide(RD(DD));
          do {
            for (; CD.isEven();) CD = CD.divide(RD(CD));
            DD.greater(CD) && (ID = CD, CD = DD, DD = ID), CD = CD.subtract(DD)
          } while (!CD.isZero());
          return pD.isUnit() ? DD : DD.multiply(pD)
        }
        QD.prototype.bitLength = function() {
          var DD = this;
          return DD.compareTo(CD(0)) < 0 && (DD = DD.pp().subtract(CD(1))), 0 === DD.compareTo(CD(0)) ? CD(0) : CD(kD(DD, CD(2)).e).add(CD(1))
        }, SD.prototype.bitLength = wD.prototype.bitLength = QD.prototype.bitLength;
        var sD = function(DD, CD, cD, ID) {
          cD = cD || iD, DD = String(DD), ID || (DD = DD.toLowerCase(), cD = cD.toLowerCase());
          var pD, fD = DD.length,
            bD = Math.abs(CD),
            QD = {};
          for (pD = 0; pD < cD.length; pD++) QD[cD[pD]] = pD;
          for (pD = 0; pD < fD; pD++) {
            if ("-" !== (BD = DD[pD]) && (BD in QD && QD[BD] >= bD)) {
              if ("1" === BD && 1 === bD) continue;
              throw new Error(BD + " is not a valid digit in base " + CD + ".")
            }
          }
          CD = rD(CD);
          var wD = [],
            SD = "-" === DD[0];
          for (pD = SD ? 1 : 0; pD < DD.length; pD++) {
            var BD;
            if ((BD = DD[pD]) in QD) wD.push(rD(QD[BD]));
            else {
              if ("<" !== BD) throw new Error(BD + " is not a valid character");
              var yD = pD;
              do {
                pD++
              } while (">" !== DD[pD] && pD < DD.length);
              wD.push(rD(DD.slice(yD + 1, pD)))
            }
          }
          return ED(wD, CD, SD)
        };

        function ED(DD, CD, cD) {
          var ID, pD = bD[0],
            iD = bD[1];
          for (ID = DD.length - 1; ID >= 0; ID--) pD = pD.add(DD[ID].times(iD)), iD = iD.times(CD);
          return cD ? pD.pp() : pD
        }

        function eD(DD, cD) {
          if ((cD = CD(cD)).isZero()) {
            if (DD.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (cD.equals(-1)) {
            if (DD.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (DD.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-DD.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var ID = Array.apply(null, Array(DD.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return ID.unshift([1]), {
              value: [].concat.apply([], ID),
              isNegative: !1
            }
          }
          var pD = !1;
          if (DD.isNegative() && cD.isPositive() && (pD = !0, DD = DD.abs()), cD.isUnit()) return DD.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(DD.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: pD
          };
          for (var iD, fD = [], bD = DD; bD.isNegative() || bD.compareAbs(cD) >= 0;) {
            iD = bD.divmod(cD), bD = iD.quotient;
            var QD = iD.remainder;
            QD.isNegative() && (QD = cD.minus(QD).abs(), bD = bD.next()), fD.push(QD.toJSNumber())
          }
          return fD.push(bD.toJSNumber()), {
            value: fD.reverse(),
            isNegative: pD
          }
        }

        function uD(DD, CD, cD) {
          var ID = eD(DD, CD);
          return (ID.isNegative ? "-" : "") + ID.value.map((function(DD) {
            return function(DD, CD) {
              return DD < (CD = CD || iD).length ? CD[DD] : "<" + DD + ">"
            }(DD, cD)
          })).join("")
        }

        function hD(DD) {
          if (BD(+DD)) {
            var CD = +DD;
            if (CD === oD(CD)) return fD ? new SD(BigInt(CD)) : new wD(CD);
            throw new Error("Invalid integer: " + DD)
          }
          var cD = "-" === DD[0];
          cD && (DD = DD.slice(1));
          var ID = DD.split(/e/i);
          if (ID.length > 2) throw new Error("Invalid integer: " + ID.join("e"));
          if (2 === ID.length) {
            var pD = ID[1];
            if ("+" === pD[0] && (pD = pD.slice(1)), (pD = +pD) !== oD(pD) || !BD(pD)) throw new Error("Invalid integer: " + pD + " is not a valid exponent.");
            var iD = ID[0],
              bD = iD.indexOf(".");
            if (bD >= 0 && (pD -= iD.length - bD - 1, iD = iD.slice(0, bD) + iD.slice(bD + 1)), pD < 0) throw new Error("Cannot include negative exponent part for integers");
            DD = iD += new Array(pD + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(DD)) throw new Error("Invalid integer: " + DD);
          if (fD) return new SD(BigInt(cD ? "-" + DD : DD));
          for (var yD = [], MD = DD.length, ZD = MD - 7; MD > 0;) yD.push(+DD.slice(ZD, MD)), (ZD -= 7) < 0 && (ZD = 0), MD -= 7;
          return tD(yD), new QD(yD, cD)
        }

        function rD(DD) {
          return "number" === typeof DD ? function(DD) {
            if (fD) return new SD(BigInt(DD));
            if (BD(DD)) {
              if (DD !== oD(DD)) throw new Error(DD + " is not an integer.");
              return new wD(DD)
            }
            return hD(DD.toString())
          }(DD) : "string" === typeof DD ? hD(DD) : "bigint" === typeof DD ? new SD(DD) : DD
        }
        QD.prototype.toArray = function(DD) {
          return eD(this, DD)
        }, wD.prototype.toArray = function(DD) {
          return eD(this, DD)
        }, SD.prototype.toArray = function(DD) {
          return eD(this, DD)
        }, QD.prototype.toString = function(CD, cD) {
          if (CD === DD && (CD = 10), 10 !== CD) return uD(this, CD, cD);
          for (var ID, pD = this.value, iD = pD.length, fD = String(pD[--iD]); --iD >= 0;) ID = String(pD[iD]), fD += "0000000".slice(ID.length) + ID;
          return (this.sign ? "-" : "") + fD
        }, wD.prototype.toString = function(CD, cD) {
          return CD === DD && (CD = 10), 10 != CD ? uD(this, CD, cD) : String(this.value)
        }, SD.prototype.toString = wD.prototype.toString, SD.prototype.toJSON = QD.prototype.toJSON = wD.prototype.toJSON = function() {
          return this.toString()
        }, QD.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, QD.prototype.toJSNumber = QD.prototype.valueOf, wD.prototype.valueOf = function() {
          return this.value
        }, wD.prototype.toJSNumber = wD.prototype.valueOf, SD.prototype.valueOf = SD.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var AD = 0; AD < 1e3; AD++) bD[AD] = rD(AD), AD > 0 && (bD[-AD] = rD(-AD));
        return bD.one = bD[1], bD.zero = bD[0], bD.minusOne = bD[-1], bD.max = dD, bD.min = YD, bD.gcd = WD, bD.lcm = function(DD, CD) {
          return DD = rD(DD).abs(), CD = rD(CD).abs(), DD.divide(WD(DD, CD)).multiply(CD)
        }, bD.isInstance = function(DD) {
          return DD instanceof QD || DD instanceof wD || DD instanceof SD
        }, bD.randBetween = function(DD, CD, ID) {
          DD = rD(DD), CD = rD(CD);
          var pD = ID || Math.random,
            iD = YD(DD, CD),
            fD = dD(DD, CD).subtract(iD).add(1);
          if (fD.isSmall) return iD.add(Math.floor(pD() * fD));
          for (var QD = eD(fD, cD).value, wD = [], SD = !0, BD = 0; BD < QD.length; BD++) {
            var yD = SD ? QD[BD] : cD,
              MD = oD(pD() * yD);
            wD.push(MD), MD < yD && (SD = !1)
          }
          return iD.add(bD.QCD(wD, cD, !1))
        }, bD.QCD = function(DD, CD, cD) {
          return ED(DD.map(rD), rD(CD || 10), cD)
        }, bD
      }();
      DD.hasOwnProperty("exports") && (DD.exports = CD)
    }(Nc);
    var gc = iD(Nc.exports);

    function Xc(DD, CD, cD) {
      let ID = 0;
      for (let pD = 0; pD < cD; pD++) {
        const cD = DD[CD + pD];
        if (void 0 === cD) break;
        ID += cD * 16 ** pD
      }
      return ID
    }

    function mc(DD) {
      const CD = [];
      for (let cD = 0; cD < DD.length; cD++) {
        let ID = Number(DD[cD]);
        for (let DD = 0; ID || DD < CD.length; DD++) ID += 10 * (CD[DD] || 0), CD[DD] = ID % 16, ID = (ID - CD[DD]) / 16
      }
      return CD
    }
    class nc {
      static fromString(DD) {
        return new nc(function(DD) {
          const CD = mc(DD),
            cD = Array(4);
          for (let ID = 0; ID < 4; ID++) cD[3 - ID] = Xc(CD, 4 * ID, 4);
          return cD
        }(DD), DD)
      }
      static fromBit(DD) {
        const CD = Array(4),
          cD = Math.floor(DD / 16);
        for (let ID = 0; ID < 4; ID++) CD[3 - ID] = ID === cD ? 1 << DD - 16 * cD : 0;
        return new nc(CD)
      }
      constructor(DD, CD) {
        this.parts = DD, this.str = CD
      }
      and(DD) {
        let {
          parts: CD
        } = DD;
        return new nc(this.parts.map(((DD, cD) => DD & CD[cD])))
      }
      or(DD) {
        let {
          parts: CD
        } = DD;
        return new nc(this.parts.map(((DD, cD) => DD | CD[cD])))
      }
      xor(DD) {
        let {
          parts: CD
        } = DD;
        return new nc(this.parts.map(((DD, cD) => DD ^ CD[cD])))
      }
      not() {
        return new nc(this.parts.map((DD => ~DD)))
      }
      equals(DD) {
        let {
          parts: CD
        } = DD;
        return this.parts.every(((DD, cD) => DD === CD[cD]))
      }
      toString() {
        if (null != this.str) return this.str;
        const DD = new Array(16);
        return this.parts.forEach(((CD, cD) => {
          const ID = mc(CD.toString());
          for (let pD = 0; pD < 4; pD++) DD[pD + 4 * cD] = ID[3 - pD] || 0
        })), this.str = gc.QCD(DD, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const Oc = function() {
      try {
        return BigInt, !0
      } catch (DD) {
        return !1
      }
    }();
    Oc && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const Pc = {},
      Hc = Oc ? function(DD) {
        return BigInt(DD)
      } : function(DD) {
        return DD instanceof nc ? DD : ("number" === typeof DD && (DD = DD.toString()), null != Pc[DD] || (Pc[DD] = nc.fromString(DD)), Pc[DD])
      },
      Uc = Hc(0),
      xc = Oc ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uc) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uc)
      } : function() {
        let DD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uc;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uc).and(DD)
      },
      qc = Oc ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uc) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uc)
      } : function() {
        let DD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uc;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uc).or(DD)
      },
      Jc = Oc ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uc) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uc)
      } : function() {
        let DD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uc;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uc).xor(DD)
      },
      Kc = Oc ? function(DD, CD) {
        return DD === CD
      } : function(DD, CD) {
        return null == DD || null == CD ? DD == CD : DD.equals(CD)
      };
    var ac, Vc, zc, jc, lc = {
      combine: function() {
        let DD = arguments.length <= 0 ? void 0 : arguments[0];
        for (let CD = 1; CD < arguments.length; CD++) DD = qc(DD, CD < 0 || arguments.length <= CD ? void 0 : arguments[CD]);
        return DD
      },
      add: function(DD, CD) {
        return CD === Uc ? DD : qc(DD, CD)
      },
      remove: function(DD, CD) {
        return CD === Uc ? DD : Jc(DD, xc(DD, CD))
      },
      filter: xc,
      invert: Oc ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uc)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Uc).not()
      },
      has: function(DD, CD) {
        return Kc(xc(DD, CD), CD)
      },
      hasAny: function(DD, CD) {
        return !Kc(xc(DD, CD), Uc)
      },
      equals: Kc,
      deserialize: Hc,
      getFlag: Oc ? function(DD) {
        return BigInt(1) << BigInt(DD)
      } : function(DD) {
        return nc.fromBit(DD)
      }
    };
    ! function(DD) {
      DD[DD.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", DD[DD.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", DD[DD.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", DD[DD.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", DD[DD.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", DD[DD.RATELIMITED = 4002] = "RATELIMITED", DD[DD.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", DD[DD.INVALID_VERSION = 4004] = "INVALID_VERSION", DD[DD.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(ac || (ac = {})),
    function(DD) {
      DD[DD.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", DD[DD.INVALID_COMMAND = 4002] = "INVALID_COMMAND", DD[DD.INVALID_EVENT = 4004] = "INVALID_EVENT", DD[DD.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(Vc || (Vc = {})),
    function(DD) {
      DD.LANDSCAPE = "landscape", DD.PORTRAIT = "portrait"
    }(zc || (zc = {})),
    function(DD) {
      DD.MOBILE = "mobile", DD.DESKTOP = "desktop"
    }(jc || (jc = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: lc.getFlag(0),
      ADMINISTRATOR: lc.getFlag(3)
    });

    function Lc(DD) {
      return Mc((CD => {
        var cD;
        const [ID] = null !== (cD = Object.entries(DD).find((DD => {
          let [, cD] = DD;
          return cD === CD
        }))) && void 0 !== cD ? cD : [];
        return null != CD && void 0 === ID ? DD.UNHANDLED : CD
      }), zC().or(jC()))
    }
    const Tc = vc.object({
        image_url: vc.string()
      }),
      Gc = vc.object({
        mediaUrl: vc.string().max(1024)
      }),
      Rc = vc.object({
        access_token: vc.union([vc.string(), vc.null()]).optional()
      }),
      kc = vc.object({
        access_token: vc.string(),
        user: vc.object({
          username: vc.string(),
          discriminator: vc.string(),
          id: vc.string(),
          avatar: vc.union([vc.string(), vc.null()]).optional(),
          public_flags: vc.number(),
          global_name: vc.union([vc.string(), vc.null()]).optional()
        }),
        scopes: vc.array(function(DD) {
          const CD = KC().transform((CD => {
            const cD = DD.safeParse(CD);
            return cD.success ? cD.data : DD._def.defaultValue()
          }));
          return CD.overlayType = DD, CD
        }(vc.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(vc.literal(-1)).default(-1))),
        expires: vc.string(),
        application: vc.object({
          description: vc.string(),
          icon: vc.union([vc.string(), vc.null()]).optional(),
          id: vc.string(),
          rpc_origins: vc.array(vc.string()).optional(),
          name: vc.string()
        })
      }),
      dc = vc.object({
        participants: vc.array(vc.object({
          id: vc.string(),
          username: vc.string(),
          global_name: vc.union([vc.string(), vc.null()]).optional(),
          discriminator: vc.string(),
          avatar: vc.union([vc.string(), vc.null()]).optional(),
          flags: vc.number(),
          bot: vc.boolean(),
          avatar_decoration_data: vc.union([vc.object({
            asset: vc.string(),
            skuId: vc.string().optional()
          }), vc.null()]).optional(),
          premium_type: vc.union([vc.number(), vc.null()]).optional(),
          nickname: vc.string().optional()
        }))
      });
    var Yc;
    ! function(DD) {
      DD.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", DD.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", DD.AUTHENTICATE = "AUTHENTICATE", DD.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Yc || (Yc = {}));
    const Wc = vc.object({}).optional().nullable(),
      sc = vc.void(),
      Ec = {
        [Yc.INITIATE_IMAGE_UPLOAD]: {
          request: sc,
          response: Tc
        },
        [Yc.OPEN_SHARE_MOMENT_DIALOG]: {
          request: Gc,
          response: Wc
        },
        [Yc.AUTHENTICATE]: {
          request: Rc,
          response: kc
        },
        [Yc.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: sc,
          response: dc
        }
      },
      ec = "DISPATCH";
    var uc;
    ! function(DD) {
      DD.AUTHORIZE = "AUTHORIZE", DD.AUTHENTICATE = "AUTHENTICATE", DD.GET_GUILDS = "GET_GUILDS", DD.GET_GUILD = "GET_GUILD", DD.GET_CHANNEL = "GET_CHANNEL", DD.GET_CHANNELS = "GET_CHANNELS", DD.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", DD.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", DD.SUBSCRIBE = "SUBSCRIBE", DD.UNSUBSCRIBE = "UNSUBSCRIBE", DD.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", DD.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", DD.SET_ACTIVITY = "SET_ACTIVITY", DD.GET_SKUS = "GET_SKUS", DD.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", DD.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", DD.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", DD.START_PURCHASE = "START_PURCHASE", DD.SET_CONFIG = "SET_CONFIG", DD.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", DD.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", DD.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", DD.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", DD.CAPTURE_LOG = "CAPTURE_LOG", DD.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", DD.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", DD.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", DD.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", DD.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", DD.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", DD.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(uc || (uc = {}));
    const hc = uC({
        cmd: zC(),
        data: WC(),
        evt: dC(),
        nonce: zC()
      }).passthrough(),
      rc = (Lc(Object.assign(Object.assign({}, kc.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), uC({
        id: zC(),
        username: zC(),
        discriminator: zC(),
        global_name: zC().optional().nullable(),
        avatar: zC().optional().nullable(),
        avatar_decoration_data: uC({
          asset: zC(),
          sku_id: zC().optional()
        }).nullable(),
        bot: TC(),
        flags: jC().optional().nullable(),
        premium_type: jC().optional().nullable()
      })),
      Ac = uC({
        user: rc,
        nick: zC().optional().nullable(),
        roles: eC(zC()),
        joined_at: zC(),
        deaf: TC(),
        mute: TC()
      }),
      Fc = uC({
        id: zC(),
        name: zC().optional().nullable(),
        roles: eC(zC()).optional().nullable(),
        user: rc.optional().nullable(),
        require_colons: TC().optional().nullable(),
        managed: TC().optional().nullable(),
        animated: TC().optional().nullable(),
        available: TC().optional().nullable()
      }),
      DI = uC({
        mute: TC(),
        deaf: TC(),
        self_mute: TC(),
        self_deaf: TC(),
        suppress: TC()
      }),
      CI = uC({
        mute: TC(),
        nick: zC(),
        user: rc,
        voice_state: DI,
        volume: jC()
      }),
      cI = Lc({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      II = uC({
        name: zC(),
        type: jC(),
        url: zC().optional().nullable(),
        created_at: jC().optional().nullable(),
        timestamps: uC({
          start: jC(),
          end: jC()
        }).partial().optional().nullable(),
        application_id: zC().optional().nullable(),
        details: zC().optional().nullable(),
        state: zC().optional().nullable(),
        emoji: Fc.optional().nullable(),
        party: uC({
          id: zC().optional().nullable(),
          size: eC(jC()).optional().nullable()
        }).optional().nullable(),
        assets: uC({
          large_image: zC().nullable(),
          large_text: zC().nullable(),
          small_image: zC().nullable(),
          small_text: zC().nullable()
        }).partial().optional().nullable(),
        secrets: uC({
          join: zC(),
          match: zC()
        }).partial().optional().nullable(),
        instance: TC().optional().nullable(),
        flags: jC().optional().nullable()
      }),
      pI = uC({
        id: zC(),
        type: Lc({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: zC(),
        deny: zC()
      }),
      iI = {
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
      fI = uC({
        id: zC(),
        type: Lc(iI),
        guild_id: zC().optional().nullable(),
        position: jC().optional().nullable(),
        permission_overwrites: eC(pI).optional().nullable(),
        name: zC().optional().nullable(),
        topic: zC().optional().nullable(),
        nsfw: TC().optional().nullable(),
        last_message_id: zC().optional().nullable(),
        bitrate: jC().optional().nullable(),
        user_limit: jC().optional().nullable(),
        rate_limit_per_user: jC().optional().nullable(),
        recipients: eC(rc).optional().nullable(),
        icon: zC().optional().nullable(),
        owner_id: zC().optional().nullable(),
        application_id: zC().optional().nullable(),
        parent_id: zC().optional().nullable(),
        last_pin_timestamp: zC().optional().nullable()
      }),
      bI = uC({
        user: rc,
        guild_id: zC(),
        status: cI,
        activities: eC(II),
        client_status: uC({
          desktop: cI,
          mobile: cI,
          web: cI
        }).partial()
      }),
      QI = uC({
        id: zC(),
        name: zC(),
        color: jC(),
        hoist: TC(),
        position: jC(),
        permissions: zC(),
        managed: TC(),
        mentionable: TC()
      }),
      wI = (uC({
        id: zC(),
        name: zC(),
        owner_id: zC(),
        icon: zC().nullable(),
        icon_hash: zC().optional().nullable(),
        splash: zC().nullable(),
        discovery_splash: zC().nullable(),
        owner: TC().optional().nullable(),
        permissions: zC().optional().nullable(),
        region: zC(),
        afk_channel_id: zC().nullable(),
        afk_timeout: jC(),
        widget_enabled: TC().optional().nullable(),
        widget_channel_id: zC().optional().nullable(),
        verification_level: jC(),
        default_message_notifications: jC(),
        explicit_content_filter: jC(),
        roles: eC(QI),
        emojis: eC(Fc),
        features: eC(zC()),
        mfa_level: jC(),
        application_id: zC().nullable(),
        system_channel_id: zC().nullable(),
        system_channel_flags: jC(),
        rules_channel_id: zC().nullable(),
        joined_at: zC().optional().nullable(),
        large: TC().optional().nullable(),
        unavailable: TC().optional().nullable(),
        member_count: jC().optional().nullable(),
        voice_states: eC(DI).optional().nullable(),
        members: eC(Ac).optional().nullable(),
        channels: eC(fI).optional().nullable(),
        presences: eC(bI).optional().nullable(),
        max_presences: jC().optional().nullable(),
        max_members: jC().optional().nullable(),
        vanity_url_code: zC().nullable(),
        description: zC().nullable(),
        banner: zC().nullable(),
        premium_tier: jC(),
        premium_subscription_count: jC().optional().nullable(),
        preferred_locale: zC(),
        public_updates_channel_id: zC().nullable(),
        max_video_channel_users: jC().optional().nullable(),
        approximate_member_count: jC().optional().nullable(),
        approximate_presence_count: jC().optional().nullable()
      }), uC({
        id: zC(),
        guild_id: zC(),
        type: jC(),
        name: zC()
      })),
      SI = uC({
        id: zC(),
        filename: zC(),
        size: jC(),
        url: zC(),
        proxy_url: zC(),
        height: jC().optional().nullable(),
        width: jC().optional().nullable()
      }),
      BI = uC({
        text: zC(),
        icon_url: zC().optional().nullable(),
        proxy_icon_url: zC().optional().nullable()
      }),
      yI = uC({
        url: zC().optional().nullable(),
        proxy_url: zC().optional().nullable(),
        height: jC().optional().nullable(),
        width: jC().optional().nullable()
      }),
      MI = yI.omit({
        proxy_url: !0
      }),
      tI = uC({
        name: zC().optional().nullable(),
        url: zC().optional().nullable()
      }),
      ZI = uC({
        name: zC().optional().nullable(),
        url: zC().optional().nullable(),
        icon_url: zC().optional().nullable(),
        proxy_icon_url: zC().optional().nullable()
      }),
      oI = uC({
        name: zC(),
        value: zC(),
        inline: TC()
      }),
      vI = uC({
        title: zC().optional().nullable(),
        type: zC().optional().nullable(),
        description: zC().optional().nullable(),
        url: zC().optional().nullable(),
        timestamp: zC().optional().nullable(),
        color: jC().optional().nullable(),
        footer: BI.optional().nullable(),
        image: yI.optional().nullable(),
        thumbnail: yI.optional().nullable(),
        video: MI.optional().nullable(),
        provider: tI.optional().nullable(),
        author: ZI.optional().nullable(),
        fields: eC(oI).optional().nullable()
      }),
      NI = uC({
        count: jC(),
        me: TC(),
        emoji: Fc
      }),
      gI = uC({
        type: jC(),
        party_id: zC().optional().nullable()
      }),
      XI = uC({
        id: zC(),
        cover_image: zC().optional().nullable(),
        description: zC(),
        icon: zC().optional().nullable(),
        name: zC()
      }),
      mI = uC({
        message_id: zC().optional().nullable(),
        channel_id: zC().optional().nullable(),
        guild_id: zC().optional().nullable()
      }),
      nI = uC({
        id: zC(),
        channel_id: zC(),
        guild_id: zC().optional().nullable(),
        author: rc.optional().nullable(),
        member: Ac.optional().nullable(),
        content: zC(),
        timestamp: zC(),
        edited_timestamp: zC().optional().nullable(),
        tts: TC(),
        mention_everyone: TC(),
        mentions: eC(rc),
        mention_roles: eC(zC()),
        mention_channels: eC(wI),
        attachments: eC(SI),
        embeds: eC(vI),
        reactions: eC(NI).optional().nullable(),
        nonce: rC([zC(), jC()]).optional().nullable(),
        pinned: TC(),
        webhook_id: zC().optional().nullable(),
        type: jC(),
        activity: gI.optional().nullable(),
        application: XI.optional().nullable(),
        message_reference: mI.optional().nullable(),
        flags: jC().optional().nullable(),
        stickers: eC(WC()).optional().nullable(),
        referenced_message: WC().optional().nullable()
      }),
      OI = uC({
        id: zC(),
        name: zC()
      }),
      PI = uC({
        type: Lc({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: jC(),
        name: zC()
      }),
      HI = uC({
        type: Lc({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: TC(),
        threshold: jC(),
        shortcut: eC(PI),
        delay: jC()
      }),
      UI = uC({
        device_id: zC(),
        volume: jC(),
        available_devices: eC(OI)
      }),
      xI = (uC({
        type: Lc({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: zC(),
        vendor: uC({
          name: zC(),
          url: zC()
        }),
        model: uC({
          name: zC(),
          url: zC()
        }),
        related: eC(zC()),
        echo_cancellation: TC().optional().nullable(),
        noise_suppression: TC().optional().nullable(),
        automatic_gain_control: TC().optional().nullable(),
        hardware_mute: TC().optional().nullable()
      }), uC({
        id: zC(),
        name: zC(),
        type: Lc({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: uC({
          amount: jC(),
          currency: zC()
        }),
        application_id: zC(),
        flags: jC(),
        release_date: zC().nullable()
      })),
      qI = uC({
        id: zC(),
        sku_id: zC(),
        application_id: zC(),
        user_id: zC(),
        gift_code_flags: jC(),
        type: Lc({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: zC().optional().nullable(),
        branches: eC(zC()).optional().nullable(),
        starts_at: zC().optional().nullable(),
        ends_at: zC().optional().nullable(),
        parent_id: zC().optional().nullable(),
        consumed: TC().optional().nullable(),
        deleted: TC().optional().nullable(),
        gift_code_batch_id: zC().optional().nullable()
      }),
      JI = (Lc({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), Lc({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      KI = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      aI = (Lc(KI), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      VI = (Lc(aI), "ERROR");
    var zI;
    ! function(DD) {
      DD.READY = "READY", DD.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", DD.SPEAKING_START = "SPEAKING_START", DD.SPEAKING_STOP = "SPEAKING_STOP", DD.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", DD.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", DD.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", DD.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", DD.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", DD.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(zI || (zI = {}));
    const jI = hc.extend({
        evt: Qc(zI),
        nonce: zC().nullable(),
        cmd: fc(ec),
        data: uC({}).passthrough()
      }),
      lI = hc.extend({
        evt: fc(VI),
        data: uC({
          code: jC(),
          message: zC().optional()
        }).passthrough(),
        cmd: Qc(uc),
        nonce: zC().nullable()
      }),
      LI = jI.extend({
        evt: zC()
      }),
      TI = rC([jI, LI, lI]);
    const GI = {
      [zI.READY]: {
        payload: jI.extend({
          evt: fc(zI.READY),
          data: uC({
            v: jC(),
            config: uC({
              cdn_host: zC().optional(),
              api_endpoint: zC(),
              environment: zC()
            }),
            user: uC({
              id: zC(),
              username: zC(),
              discriminator: zC(),
              avatar: zC().optional()
            }).optional()
          })
        })
      },
      [zI.VOICE_STATE_UPDATE]: {
        payload: jI.extend({
          evt: fc(zI.VOICE_STATE_UPDATE),
          data: CI
        }),
        subscribeArgs: uC({
          channel_id: zC()
        })
      },
      [zI.SPEAKING_START]: {
        payload: jI.extend({
          evt: fc(zI.SPEAKING_START),
          data: uC({
            lobby_id: zC().optional(),
            channel_id: zC().optional(),
            user_id: zC()
          })
        }),
        subscribeArgs: uC({
          lobby_id: zC().nullable().optional(),
          channel_id: zC().nullable().optional()
        })
      },
      [zI.SPEAKING_STOP]: {
        payload: jI.extend({
          evt: fc(zI.SPEAKING_STOP),
          data: uC({
            lobby_id: zC().optional(),
            channel_id: zC().optional(),
            user_id: zC()
          })
        }),
        subscribeArgs: uC({
          lobby_id: zC().nullable().optional(),
          channel_id: zC().nullable().optional()
        })
      },
      [zI.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: jI.extend({
          evt: fc(zI.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: uC({
            layout_mode: Lc(aI)
          })
        })
      },
      [zI.ORIENTATION_UPDATE]: {
        payload: jI.extend({
          evt: fc(zI.ORIENTATION_UPDATE),
          data: uC({
            screen_orientation: Lc(KI),
            orientation: Qc(zc)
          })
        })
      },
      [zI.CURRENT_USER_UPDATE]: {
        payload: jI.extend({
          evt: fc(zI.CURRENT_USER_UPDATE),
          data: rc
        })
      },
      [zI.ENTITLEMENT_CREATE]: {
        payload: jI.extend({
          evt: fc(zI.ENTITLEMENT_CREATE),
          data: uC({
            entitlement: qI
          })
        })
      },
      [zI.THERMAL_STATE_UPDATE]: {
        payload: jI.extend({
          evt: fc(zI.THERMAL_STATE_UPDATE),
          data: uC({
            thermal_state: JI
          })
        })
      },
      [zI.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: jI.extend({
          evt: fc(zI.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: uC({
            participants: dc.shape.participants
          })
        })
      }
    };
    const RI = uC({}).nullable(),
      kI = uC({
        code: zC()
      }),
      dI = uC({
        guilds: eC(uC({
          id: zC(),
          name: zC()
        }))
      }),
      YI = uC({
        id: zC(),
        name: zC(),
        icon_url: zC().optional(),
        members: eC(Ac)
      }),
      WI = uC({
        id: zC(),
        type: Lc(iI),
        guild_id: zC().optional().nullable(),
        name: zC().optional().nullable(),
        topic: zC().optional().nullable(),
        bitrate: jC().optional().nullable(),
        user_limit: jC().optional().nullable(),
        position: jC().optional().nullable(),
        voice_states: eC(CI),
        messages: eC(nI)
      }),
      sI = uC({
        channels: eC(fI)
      }),
      EI = (WI.nullable(), WI.nullable()),
      eI = WI.nullable(),
      uI = (uC({
        input: UI,
        output: UI,
        mode: HI,
        automatic_gain_control: TC(),
        echo_cancellation: TC(),
        noise_suppression: TC(),
        qos: TC(),
        silence_warning: TC(),
        deaf: TC(),
        mute: TC()
      }), uC({
        evt: zC()
      })),
      hI = uC({
        shortcut: PI
      }),
      rI = II,
      AI = uC({
        skus: eC(xI)
      }),
      FI = uC({
        entitlements: eC(qI)
      }),
      Dp = eC(qI).nullable(),
      Cp = uC({
        use_interactive_pip: TC()
      }),
      cp = uC({
        locale: zC()
      }),
      Ip = uC({
        enabled: TC()
      }),
      pp = uC({
        permissions: LC().or(zC())
      }),
      ip = uC({
        iosKeyboardResizesView: Bc(TC())
      }),
      fp = hc.extend({
        cmd: Qc(uc),
        evt: dC()
      });

    function bp(DD) {
      let {
        cmd: CD,
        data: cD
      } = DD;
      switch (CD) {
        case uc.AUTHORIZE:
          return kI.parse(cD);
        case uc.CAPTURE_SHORTCUT:
          return hI.parse(cD);
        case uc.ENCOURAGE_HW_ACCELERATION:
          return Ip.parse(cD);
        case uc.GET_CHANNEL:
          return WI.parse(cD);
        case uc.GET_CHANNELS:
          return sI.parse(cD);
        case uc.GET_CHANNEL_PERMISSIONS:
          return pp.parse(cD);
        case uc.GET_GUILD:
          return YI.parse(cD);
        case uc.GET_GUILDS:
          return dI.parse(cD);
        case uc.GET_PLATFORM_BEHAVIORS:
          return ip.parse(cD);
        case uc.GET_CHANNEL:
          return WI.parse(cD);
        case uc.SELECT_TEXT_CHANNEL:
          return eI.parse(cD);
        case uc.SELECT_VOICE_CHANNEL:
          return EI.parse(cD);
        case uc.SET_ACTIVITY:
          return rI.parse(cD);
        case uc.GET_SKUS_EMBEDDED:
          return AI.parse(cD);
        case uc.GET_ENTITLEMENTS_EMBEDDED:
          return FI.parse(cD);
        case uc.SET_CONFIG:
          return Cp.parse(cD);
        case uc.START_PURCHASE:
          return Dp.parse(cD);
        case uc.SUBSCRIBE:
        case uc.UNSUBSCRIBE:
          return uI.parse(cD);
        case uc.USER_SETTINGS_GET_LOCALE:
          return cp.parse(cD);
        case uc.OPEN_EXTERNAL_LINK:
        case uc.SET_ORIENTATION_LOCK_STATE:
        case uc.SET_CERTIFIED_DEVICES:
        case uc.SEND_ANALYTICS_EVENT:
        case uc.OPEN_INVITE_DIALOG:
        case uc.CAPTURE_LOG:
        case uc.GET_SKUS:
        case uc.GET_ENTITLEMENTS:
          return RI.parse(cD);
        case uc.AUTHENTICATE:
        case uc.INITIATE_IMAGE_UPLOAD:
        case uc.OPEN_SHARE_MOMENT_DIALOG:
        case uc.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: DD
          } = Ec[CD];
          return DD.parse(cD);
        default:
          ! function(DD, CD) {
            throw CD
          }(0, new Error(`Unrecognized command ${CD}`))
      }
    }
    uC({
      frame_id: zC(),
      platform: Qc(jc).optional().nullable()
    }), uC({
      v: fc(1),
      encoding: fc("json").optional(),
      client_id: zC(),
      frame_id: zC()
    });
    const Qp = uC({
        code: jC(),
        message: zC().optional()
      }),
      wp = uC({
        evt: zC().nullable(),
        nonce: zC().nullable(),
        data: WC().nullable(),
        cmd: zC()
      }).passthrough();

    function Sp(DD) {
      const CD = wp.parse(DD);
      return null != CD.evt ? CD.evt === VI ? lI.parse(CD) : function(DD) {
        const CD = DD.evt;
        if (!(CD in zI)) throw new Error(`Unrecognized event type ${DD.evt}`);
        return GI[CD].payload.parse(DD)
      }(TI.parse(CD)) : function(DD) {
        return Object.assign(Object.assign({}, DD), {
          data: bp(DD)
        })
      }(fp.passthrough().parse(CD))
    }

    function Bp(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const pD = hc.extend({
        cmd: fc(CD),
        data: cD
      });
      return async cD => {
        const iD = await DD({
          cmd: CD,
          args: cD,
          transfer: ID(cD)
        });
        return pD.parse(iD).data
      }
    }

    function yp(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const cD = Ec[DD].response,
        ID = hc.extend({
          cmd: fc(DD),
          data: cD
        });
      return cD => async pD => {
        const iD = await cD({
          cmd: DD,
          args: pD,
          transfer: CD(pD)
        });
        return ID.parse(iD).data
      }
    }
    const Mp = yp(Yc.AUTHENTICATE),
      tp = DD => Bp(DD, uc.AUTHORIZE, kI),
      Zp = DD => Bp(DD, uc.CAPTURE_LOG, RI),
      op = DD => Bp(DD, uc.ENCOURAGE_HW_ACCELERATION, Ip),
      vp = DD => Bp(DD, uc.GET_ENTITLEMENTS_EMBEDDED, FI),
      Np = DD => Bp(DD, uc.GET_SKUS_EMBEDDED, AI),
      gp = DD => Bp(DD, uc.GET_CHANNEL_PERMISSIONS, pp),
      Xp = DD => Bp(DD, uc.GET_PLATFORM_BEHAVIORS, ip),
      mp = DD => Bp(DD, uc.OPEN_EXTERNAL_LINK, RI),
      np = DD => Bp(DD, uc.OPEN_INVITE_DIALOG, RI),
      Op = yp(Yc.OPEN_SHARE_MOMENT_DIALOG);
    II.MM({
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
      type: II.shape.type.optional(),
      instance: II.shape.instance.optional()
    }).nullable();
    const Pp = DD => Bp(DD, uc.SET_ACTIVITY, rI),
      Hp = DD => Bp(DD, uc.SET_CONFIG, Cp);
    const Up = DD => ({
        lock_state: DD.lock_state,
        picture_in_picture_lock_state: DD.picture_in_picture_lock_state
      }),
      xp = DD => function(DD) {
        let {
          sendCommand: CD,
          cmd: cD,
          response: ID,
          fallbackTransform: pD,
          transferTransform: iD = () => {}
        } = DD;
        const fD = hc.extend({
          cmd: fc(cD),
          data: ID
        });
        return async DD => {
          try {
            const ID = await CD({
              cmd: cD,
              args: DD,
              transfer: iD(DD)
            });
            return fD.parse(ID).data
          } catch (ID) {
            if (ID.code === Vc.INVALID_PAYLOAD) {
              const ID = pD(DD),
                bD = await CD({
                  cmd: cD,
                  args: ID,
                  transfer: iD(ID)
                });
              return fD.parse(bD).data
            }
            throw ID
          }
        }
      }({
        sendCommand: DD,
        cmd: uc.SET_ORIENTATION_LOCK_STATE,
        response: RI,
        fallbackTransform: Up
      }),
      qp = DD => Bp(DD, uc.START_PURCHASE, Dp),
      Jp = DD => Bp(DD, uc.USER_SETTINGS_GET_LOCALE, cp),
      Kp = yp(Yc.INITIATE_IMAGE_UPLOAD),
      ap = DD => Bp(DD, uc.GET_CHANNEL, WI),
      Vp = yp(Yc.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var zp = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function jp(DD) {
      return "string" === typeof DD && zp.test(DD)
    }
    for (var lp = [], Lp = 0; Lp < 256; ++Lp) lp.push((Lp + 256).toString(16).substr(1));

    function Tp(DD) {
      var CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        cD = (lp[DD[CD + 0]] + lp[DD[CD + 1]] + lp[DD[CD + 2]] + lp[DD[CD + 3]] + "-" + lp[DD[CD + 4]] + lp[DD[CD + 5]] + "-" + lp[DD[CD + 6]] + lp[DD[CD + 7]] + "-" + lp[DD[CD + 8]] + lp[DD[CD + 9]] + "-" + lp[DD[CD + 10]] + lp[DD[CD + 11]] + lp[DD[CD + 12]] + lp[DD[CD + 13]] + lp[DD[CD + 14]] + lp[DD[CD + 15]]).toLowerCase();
      if (!jp(cD)) throw TypeError("Stringified UUID is invalid");
      return cD
    }
    var Gp;

    function Rp(DD, CD, cD) {
      function ID(DD, ID, pD, iD) {
        if ("string" === typeof DD && (DD = function(DD) {
            DD = unescape(encodeURIComponent(DD));
            for (var CD = [], cD = 0; cD < DD.length; ++cD) CD.push(DD.charCodeAt(cD));
            return CD
          }(DD)), "string" === typeof ID && (ID = function(DD) {
            if (!jp(DD)) throw TypeError("Invalid UUID");
            var CD, cD = new Uint8Array(16);
            return cD[0] = (CD = parseInt(DD.slice(0, 8), 16)) >>> 24, cD[1] = CD >>> 16 & 255, cD[2] = CD >>> 8 & 255, cD[3] = 255 & CD, cD[4] = (CD = parseInt(DD.slice(9, 13), 16)) >>> 8, cD[5] = 255 & CD, cD[6] = (CD = parseInt(DD.slice(14, 18), 16)) >>> 8, cD[7] = 255 & CD, cD[8] = (CD = parseInt(DD.slice(19, 23), 16)) >>> 8, cD[9] = 255 & CD, cD[10] = (CD = parseInt(DD.slice(24, 36), 16)) / 1099511627776 & 255, cD[11] = CD / 4294967296 & 255, cD[12] = CD >>> 24 & 255, cD[13] = CD >>> 16 & 255, cD[14] = CD >>> 8 & 255, cD[15] = 255 & CD, cD
          }(ID)), 16 !== ID.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var fD = new Uint8Array(16 + DD.length);
        if (fD.set(ID), fD.set(DD, ID.length), (fD = cD(fD))[6] = 15 & fD[6] | CD, fD[8] = 63 & fD[8] | 128, pD) {
          iD = iD || 0;
          for (var bD = 0; bD < 16; ++bD) pD[iD + bD] = fD[bD];
          return pD
        }
        return Tp(fD)
      }
      try {
        ID.name = DD
      } catch (pD) {}
      return ID.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", ID.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", ID
    }

    function kp(DD) {
      return 14 + (DD + 64 >>> 9 << 4) + 1
    }

    function dp(DD, CD) {
      var cD = (65535 & DD) + (65535 & CD);
      return (DD >> 16) + (CD >> 16) + (cD >> 16) << 16 | 65535 & cD
    }

    function Yp(DD, CD, cD, ID, pD, iD) {
      return dp((fD = dp(dp(CD, DD), dp(ID, iD))) << (bD = pD) | fD >>> 32 - bD, cD);
      var fD, bD
    }

    function Wp(DD, CD, cD, ID, pD, iD, fD) {
      return Yp(CD & cD | ~CD & ID, DD, CD, pD, iD, fD)
    }

    function sp(DD, CD, cD, ID, pD, iD, fD) {
      return Yp(CD & ID | cD & ~ID, DD, CD, pD, iD, fD)
    }

    function Ep(DD, CD, cD, ID, pD, iD, fD) {
      return Yp(CD ^ cD ^ ID, DD, CD, pD, iD, fD)
    }

    function ep(DD, CD, cD, ID, pD, iD, fD) {
      return Yp(cD ^ (CD | ~ID), DD, CD, pD, iD, fD)
    }
    Rp("v3", 48, (function(DD) {
      if ("string" === typeof DD) {
        var CD = unescape(encodeURIComponent(DD));
        DD = new Uint8Array(CD.length);
        for (var cD = 0; cD < CD.length; ++cD) DD[cD] = CD.charCodeAt(cD)
      }
      return function(DD) {
        for (var CD = [], cD = 32 * DD.length, ID = "0123456789abcdef", pD = 0; pD < cD; pD += 8) {
          var iD = DD[pD >> 5] >>> pD % 32 & 255,
            fD = parseInt(ID.charAt(iD >>> 4 & 15) + ID.charAt(15 & iD), 16);
          CD.push(fD)
        }
        return CD
      }(function(DD, CD) {
        DD[CD >> 5] |= 128 << CD % 32, DD[kp(CD) - 1] = CD;
        for (var cD = 1732584193, ID = -271733879, pD = -1732584194, iD = 271733878, fD = 0; fD < DD.length; fD += 16) {
          var bD = cD,
            QD = ID,
            wD = pD,
            SD = iD;
          cD = Wp(cD, ID, pD, iD, DD[fD], 7, -680876936), iD = Wp(iD, cD, ID, pD, DD[fD + 1], 12, -389564586), pD = Wp(pD, iD, cD, ID, DD[fD + 2], 17, 606105819), ID = Wp(ID, pD, iD, cD, DD[fD + 3], 22, -1044525330), cD = Wp(cD, ID, pD, iD, DD[fD + 4], 7, -176418897), iD = Wp(iD, cD, ID, pD, DD[fD + 5], 12, 1200080426), pD = Wp(pD, iD, cD, ID, DD[fD + 6], 17, -1473231341), ID = Wp(ID, pD, iD, cD, DD[fD + 7], 22, -45705983), cD = Wp(cD, ID, pD, iD, DD[fD + 8], 7, 1770035416), iD = Wp(iD, cD, ID, pD, DD[fD + 9], 12, -1958414417), pD = Wp(pD, iD, cD, ID, DD[fD + 10], 17, -42063), ID = Wp(ID, pD, iD, cD, DD[fD + 11], 22, -1990404162), cD = Wp(cD, ID, pD, iD, DD[fD + 12], 7, 1804603682), iD = Wp(iD, cD, ID, pD, DD[fD + 13], 12, -40341101), pD = Wp(pD, iD, cD, ID, DD[fD + 14], 17, -1502002290), cD = sp(cD, ID = Wp(ID, pD, iD, cD, DD[fD + 15], 22, 1236535329), pD, iD, DD[fD + 1], 5, -165796510), iD = sp(iD, cD, ID, pD, DD[fD + 6], 9, -1069501632), pD = sp(pD, iD, cD, ID, DD[fD + 11], 14, 643717713), ID = sp(ID, pD, iD, cD, DD[fD], 20, -373897302), cD = sp(cD, ID, pD, iD, DD[fD + 5], 5, -701558691), iD = sp(iD, cD, ID, pD, DD[fD + 10], 9, 38016083), pD = sp(pD, iD, cD, ID, DD[fD + 15], 14, -660478335), ID = sp(ID, pD, iD, cD, DD[fD + 4], 20, -405537848), cD = sp(cD, ID, pD, iD, DD[fD + 9], 5, 568446438), iD = sp(iD, cD, ID, pD, DD[fD + 14], 9, -1019803690), pD = sp(pD, iD, cD, ID, DD[fD + 3], 14, -187363961), ID = sp(ID, pD, iD, cD, DD[fD + 8], 20, 1163531501), cD = sp(cD, ID, pD, iD, DD[fD + 13], 5, -1444681467), iD = sp(iD, cD, ID, pD, DD[fD + 2], 9, -51403784), pD = sp(pD, iD, cD, ID, DD[fD + 7], 14, 1735328473), cD = Ep(cD, ID = sp(ID, pD, iD, cD, DD[fD + 12], 20, -1926607734), pD, iD, DD[fD + 5], 4, -378558), iD = Ep(iD, cD, ID, pD, DD[fD + 8], 11, -2022574463), pD = Ep(pD, iD, cD, ID, DD[fD + 11], 16, 1839030562), ID = Ep(ID, pD, iD, cD, DD[fD + 14], 23, -35309556), cD = Ep(cD, ID, pD, iD, DD[fD + 1], 4, -1530992060), iD = Ep(iD, cD, ID, pD, DD[fD + 4], 11, 1272893353), pD = Ep(pD, iD, cD, ID, DD[fD + 7], 16, -155497632), ID = Ep(ID, pD, iD, cD, DD[fD + 10], 23, -1094730640), cD = Ep(cD, ID, pD, iD, DD[fD + 13], 4, 681279174), iD = Ep(iD, cD, ID, pD, DD[fD], 11, -358537222), pD = Ep(pD, iD, cD, ID, DD[fD + 3], 16, -722521979), ID = Ep(ID, pD, iD, cD, DD[fD + 6], 23, 76029189), cD = Ep(cD, ID, pD, iD, DD[fD + 9], 4, -640364487), iD = Ep(iD, cD, ID, pD, DD[fD + 12], 11, -421815835), pD = Ep(pD, iD, cD, ID, DD[fD + 15], 16, 530742520), cD = ep(cD, ID = Ep(ID, pD, iD, cD, DD[fD + 2], 23, -995338651), pD, iD, DD[fD], 6, -198630844), iD = ep(iD, cD, ID, pD, DD[fD + 7], 10, 1126891415), pD = ep(pD, iD, cD, ID, DD[fD + 14], 15, -1416354905), ID = ep(ID, pD, iD, cD, DD[fD + 5], 21, -57434055), cD = ep(cD, ID, pD, iD, DD[fD + 12], 6, 1700485571), iD = ep(iD, cD, ID, pD, DD[fD + 3], 10, -1894986606), pD = ep(pD, iD, cD, ID, DD[fD + 10], 15, -1051523), ID = ep(ID, pD, iD, cD, DD[fD + 1], 21, -2054922799), cD = ep(cD, ID, pD, iD, DD[fD + 8], 6, 1873313359), iD = ep(iD, cD, ID, pD, DD[fD + 15], 10, -30611744), pD = ep(pD, iD, cD, ID, DD[fD + 6], 15, -1560198380), ID = ep(ID, pD, iD, cD, DD[fD + 13], 21, 1309151649), cD = ep(cD, ID, pD, iD, DD[fD + 4], 6, -145523070), iD = ep(iD, cD, ID, pD, DD[fD + 11], 10, -1120210379), pD = ep(pD, iD, cD, ID, DD[fD + 2], 15, 718787259), ID = ep(ID, pD, iD, cD, DD[fD + 9], 21, -343485551), cD = dp(cD, bD), ID = dp(ID, QD), pD = dp(pD, wD), iD = dp(iD, SD)
        }
        return [cD, ID, pD, iD]
      }(function(DD) {
        if (0 === DD.length) return [];
        for (var CD = 8 * DD.length, cD = new Uint32Array(kp(CD)), ID = 0; ID < CD; ID += 8) cD[ID >> 5] |= (255 & DD[ID / 8]) << ID % 32;
        return cD
      }(DD), 8 * DD.length))
    }));
    var hp = new Uint8Array(16);

    function rp() {
      if (!Gp && !(Gp = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return Gp(hp)
    }

    function Ap(DD, CD, cD) {
      var ID = (DD = DD || {}).random || (DD.rng || rp)();
      if (ID[6] = 15 & ID[6] | 64, ID[8] = 63 & ID[8] | 128, CD) {
        cD = cD || 0;
        for (var pD = 0; pD < 16; ++pD) CD[cD + pD] = ID[pD];
        return CD
      }
      return Tp(ID)
    }

    function Fp(DD, CD, cD, ID) {
      switch (DD) {
        case 0:
          return CD & cD ^ ~CD & ID;
        case 1:
        case 3:
          return CD ^ cD ^ ID;
        case 2:
          return CD & cD ^ CD & ID ^ cD & ID
      }
    }

    function Di(DD, CD) {
      return DD << CD | DD >>> 32 - CD
    }
    Rp("v5", 80, (function(DD) {
      var CD = [1518500249, 1859775393, 2400959708, 3395469782],
        cD = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof DD) {
        var ID = unescape(encodeURIComponent(DD));
        DD = [];
        for (var pD = 0; pD < ID.length; ++pD) DD.push(ID.charCodeAt(pD))
      } else Array.isArray(DD) || (DD = Array.prototype.slice.call(DD));
      DD.push(128);
      for (var iD = DD.length / 4 + 2, fD = Math.ceil(iD / 16), bD = new Array(fD), QD = 0; QD < fD; ++QD) {
        for (var wD = new Uint32Array(16), SD = 0; SD < 16; ++SD) wD[SD] = DD[64 * QD + 4 * SD] << 24 | DD[64 * QD + 4 * SD + 1] << 16 | DD[64 * QD + 4 * SD + 2] << 8 | DD[64 * QD + 4 * SD + 3];
        bD[QD] = wD
      }
      bD[fD - 1][14] = 8 * (DD.length - 1) / Math.pow(2, 32), bD[fD - 1][14] = Math.floor(bD[fD - 1][14]), bD[fD - 1][15] = 8 * (DD.length - 1) & 4294967295;
      for (var BD = 0; BD < fD; ++BD) {
        for (var yD = new Uint32Array(80), MD = 0; MD < 16; ++MD) yD[MD] = bD[BD][MD];
        for (var tD = 16; tD < 80; ++tD) yD[tD] = Di(yD[tD - 3] ^ yD[tD - 8] ^ yD[tD - 14] ^ yD[tD - 16], 1);
        for (var ZD = cD[0], oD = cD[1], vD = cD[2], ND = cD[3], gD = cD[4], XD = 0; XD < 80; ++XD) {
          var mD = Math.floor(XD / 20),
            nD = Di(ZD, 5) + Fp(mD, oD, vD, ND) + gD + CD[mD] + yD[XD] >>> 0;
          gD = ND, ND = vD, vD = Di(oD, 30) >>> 0, oD = ZD, ZD = nD
        }
        cD[0] = cD[0] + ZD >>> 0, cD[1] = cD[1] + oD >>> 0, cD[2] = cD[2] + vD >>> 0, cD[3] = cD[3] + ND >>> 0, cD[4] = cD[4] + gD >>> 0
      }
      return [cD[0] >> 24 & 255, cD[0] >> 16 & 255, cD[0] >> 8 & 255, 255 & cD[0], cD[1] >> 24 & 255, cD[1] >> 16 & 255, cD[1] >> 8 & 255, 255 & cD[1], cD[2] >> 24 & 255, cD[2] >> 16 & 255, cD[2] >> 8 & 255, 255 & cD[2], cD[3] >> 24 & 255, cD[3] >> 16 & 255, cD[3] >> 8 & 255, 255 & cD[3], cD[4] >> 24 & 255, cD[4] >> 16 & 255, cD[4] >> 8 & 255, 255 & cD[4]]
    }));
    class Ci extends Error {
      constructor(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(CD), this.code = DD, this.message = CD, this.name = "Discord SDK Error"
      }
    }
    const ci = ["log", "warn", "debug", "info", "error"];
    var Ii;
    ! function(DD) {
      DD[DD.HANDSHAKE = 0] = "HANDSHAKE", DD[DD.FRAME = 1] = "FRAME", DD[DD.CLOSE = 2] = "CLOSE", DD[DD.HELLO = 3] = "HELLO"
    }(Ii || (Ii = {}));
    const ii = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class fi {
      getTransfer(DD) {
        var CD;
        switch (DD.cmd) {
          case uc.SUBSCRIBE:
          case uc.UNSUBSCRIBE:
            return;
          default:
            return null !== (CD = DD.transfer) && void 0 !== CD ? CD : void 0
        }
      }
      constructor(DD, CD) {
        var cD;
        if (this.eventBus = new wD, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = DD => {
            var CD;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const cD = Ap();
            null === (CD = this.source) || void 0 === CD || CD.postMessage([Ii.FRAME, Object.assign(Object.assign({}, DD), {
              nonce: cD
            })], this.sourceOrigin, this.getTransfer(DD));
            return new Promise(((DD, CD) => {
              this.pendingCommands.set(cD, {
                resolve: DD,
                reject: CD
              })
            }))
          }, this.commands = (cD = this.sendCommand, {
            authenticate: Mp(cD),
            authorize: tp(cD),
            captureLog: Zp(cD),
            encourageHardwareAcceleration: op(cD),
            getChannel: ap(cD),
            getChannelPermissions: gp(cD),
            getEntitlements: vp(cD),
            getPlatformBehaviors: Xp(cD),
            getSkus: Np(cD),
            openExternalLink: mp(cD),
            openInviteDialog: np(cD),
            openShareMomentDialog: Op(cD),
            setActivity: Pp(cD),
            setConfig: Hp(cD),
            setOrientationLockState: xp(cD),
            startPurchase: qp(cD),
            userSettingsGetLocale: Jp(cD),
            initiateImageUpload: Kp(cD),
            getInstanceConnectedParticipants: Vp(cD)
          }), this.handleMessage = DD => {
            if (!ii.has(DD.origin)) return;
            const CD = DD.data;
            if (!Array.isArray(CD)) return;
            const [cD, ID] = CD;
            switch (cD) {
              case Ii.HELLO:
                return;
              case Ii.CLOSE:
                return this.handleClose(ID);
              case Ii.HANDSHAKE:
                return this.handleHandshake();
              case Ii.FRAME:
                return this.handleFrame(ID);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = DD, this.configuration = null !== CD && void 0 !== CD ? CD : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = jc.DESKTOP, this.guildId = null, void(this.channelId = null);
        const ID = new URLSearchParams(this._getSearch()),
          pD = ID.get("frame_id");
        if (!pD) throw new Error("frame_id query param is not defined");
        this.frameId = pD;
        const iD = ID.get("instance_id");
        if (!iD) throw new Error("instance_id query param is not defined");
        this.instanceId = iD;
        const fD = ID.get("platform");
        if (!fD) throw new Error("platform query param is not defined");
        if (fD !== jc.DESKTOP && fD !== jc.MOBILE) throw new Error(`Invalid query param "platform" of "${fD}". Valid values are "${jc.DESKTOP}" or "${jc.MOBILE}"`);
        this.platform = fD, this.guildId = ID.get("guild_id"), this.channelId = ID.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var DD;
          return [null !== (DD = window.parent.opener) && void 0 !== DD ? DD : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(DD, CD) {
        var cD;
        window.removeEventListener("message", this.handleMessage);
        const ID = Ap();
        null === (cD = this.source) || void 0 === cD || cD.postMessage([Ii.CLOSE, {
          code: DD,
          message: CD,
          nonce: ID
        }], this.sourceOrigin)
      }
      async subscribe(DD, CD) {
        for (var cD = arguments.length, ID = new Array(cD > 2 ? cD - 2 : 0), pD = 2; pD < cD; pD++) ID[pD - 2] = arguments[pD];
        const [iD] = ID, fD = this.eventBus.listenerCount(DD), bD = this.eventBus.on(DD, CD);
        return Object.values(zI).includes(DD) && DD !== zI.READY && 0 === fD && await this.sendCommand({
          cmd: uc.SUBSCRIBE,
          args: iD,
          evt: DD
        }), bD
      }
      async unsubscribe(DD, CD) {
        for (var cD = arguments.length, ID = new Array(cD > 2 ? cD - 2 : 0), pD = 2; pD < cD; pD++) ID[pD - 2] = arguments[pD];
        const [iD] = ID;
        return DD !== zI.READY && 1 === this.eventBus.listenerCount(DD) && await this.sendCommand({
          cmd: uc.UNSUBSCRIBE,
          evt: DD,
          args: iD
        }), this.eventBus.off(DD, CD)
      }
      async ready() {
        this.isReady || await new Promise((DD => {
          this.eventBus.once(zI.READY, DD)
        }))
      }
      handshake() {
        var DD;
        null === (DD = this.source) || void 0 === DD || DD.postMessage([Ii.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(zI.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const DD = (DD, CD) => {
          this.commands.captureLog({
            level: DD,
            message: CD
          })
        };
        ci.forEach((CD => {
          ! function(DD, CD, cD) {
            const ID = DD[CD],
              pD = DD;
            ID && (DD[CD] = function() {
              const DD = [].slice.call(arguments),
                iD = "" + DD.join(" ");
              cD(CD, iD), ID.apply(pD, DD)
            })
          }(console, CD, DD)
        }))
      }
      handleClose(DD) {
        Qp.parse(DD)
      }
      handleHandshake() {}
      handleFrame(DD) {
        var CD, cD;
        let ID;
        try {
          ID = Sp(DD)
        } catch (pD) {
          return console.error("Failed to parse", DD), void console.error(pD)
        }
        if ("DISPATCH" === ID.cmd) this.eventBus.emit(ID.evt, ID.data);
        else {
          if (ID.evt === VI) {
            if (null != ID.nonce) return null === (CD = this.pendingCommands.get(ID.nonce)) || void 0 === CD || CD.reject(ID.data), void this.pendingCommands.delete(ID.nonce);
            this.eventBus.emit("error", new Ci(ID.data.code, ID.data.message))
          }
          if (null == ID.nonce) return void console.error("Missing nonce", DD);
          null === (cD = this.pendingCommands.get(ID.nonce)) || void 0 === cD || cD.resolve(ID), this.pendingCommands.delete(ID.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var bi, Qi = 1e9,
      wi = !0,
      Si = "[DecimalError] ",
      Bi = Si + "Invalid argument: ",
      yi = Si + "Exponent out of range: ",
      Mi = Math.floor,
      ti = Math.pow,
      Zi = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      oi = 1e7,
      vi = 9007199254740991,
      Ni = Mi(1286742750677284.5),
      gi = {};

    function Xi(DD, CD) {
      var cD, ID, pD, iD, fD, bD, QD, wD, SD = DD.constructor,
        BD = SD.precision;
      if (!DD.s || !CD.s) return CD.s || (CD = new SD(DD)), wi ? Ki(CD, BD) : CD;
      if (QD = DD.d, wD = CD.d, fD = DD.e, pD = CD.e, QD = QD.slice(), iD = fD - pD) {
        for (iD < 0 ? (ID = QD, iD = -iD, bD = wD.length) : (ID = wD, pD = fD, bD = QD.length), iD > (bD = (fD = Math.ceil(BD / 7)) > bD ? fD + 1 : bD + 1) && (iD = bD, ID.length = 1), ID.reverse(); iD--;) ID.push(0);
        ID.reverse()
      }
      for ((bD = QD.length) - (iD = wD.length) < 0 && (iD = bD, ID = wD, wD = QD, QD = ID), cD = 0; iD;) cD = (QD[--iD] = QD[iD] + wD[iD] + cD) / oi | 0, QD[iD] %= oi;
      for (cD && (QD.unshift(cD), ++pD), bD = QD.length; 0 == QD[--bD];) QD.pop();
      return CD.d = QD, CD.e = pD, wi ? Ki(CD, BD) : CD
    }

    function mi(DD, CD, cD) {
      if (DD !== ~~DD || DD < CD || DD > cD) throw Error(Bi + DD)
    }

    function ni(DD) {
      var CD, cD, ID, pD = DD.length - 1,
        iD = "",
        fD = DD[0];
      if (pD > 0) {
        for (iD += fD, CD = 1; CD < pD; CD++)(cD = 7 - (ID = DD[CD] + "").length) && (iD += xi(cD)), iD += ID;
        (cD = 7 - (ID = (fD = DD[CD]) + "").length) && (iD += xi(cD))
      } else if (0 === fD) return "0";
      for (; fD % 10 === 0;) fD /= 10;
      return iD + fD
    }
    gi.absoluteValue = gi.abs = function() {
      var DD = new this.constructor(this);
      return DD.s && (DD.s = 1), DD
    }, gi.comparedTo = gi.cmp = function(DD) {
      var CD, cD, ID, pD, iD = this;
      if (DD = new iD.constructor(DD), iD.s !== DD.s) return iD.s || -DD.s;
      if (iD.e !== DD.e) return iD.e > DD.e ^ iD.s < 0 ? 1 : -1;
      for (CD = 0, cD = (ID = iD.d.length) < (pD = DD.d.length) ? ID : pD; CD < cD; ++CD)
        if (iD.d[CD] !== DD.d[CD]) return iD.d[CD] > DD.d[CD] ^ iD.s < 0 ? 1 : -1;
      return ID === pD ? 0 : ID > pD ^ iD.s < 0 ? 1 : -1
    }, gi.decimalPlaces = gi.dp = function() {
      var DD = this,
        CD = DD.d.length - 1,
        cD = 7 * (CD - DD.e);
      if (CD = DD.d[CD])
        for (; CD % 10 == 0; CD /= 10) cD--;
      return cD < 0 ? 0 : cD
    }, gi.dividedBy = gi.div = function(DD) {
      return Oi(this, new this.constructor(DD))
    }, gi.dividedToIntegerBy = gi.idiv = function(DD) {
      var CD = this.constructor;
      return Ki(Oi(this, new CD(DD), 0, 1), CD.precision)
    }, gi.equals = gi.eq = function(DD) {
      return !this.cmp(DD)
    }, gi.exponent = function() {
      return Hi(this)
    }, gi.greaterThan = gi.gt = function(DD) {
      return this.cmp(DD) > 0
    }, gi.greaterThanOrEqualTo = gi.gte = function(DD) {
      return this.cmp(DD) >= 0
    }, gi.isInteger = gi.isint = function() {
      return this.e > this.d.length - 2
    }, gi.isNegative = gi.isneg = function() {
      return this.s < 0
    }, gi.isPositive = gi.ispos = function() {
      return this.s > 0
    }, gi.isZero = function() {
      return 0 === this.s
    }, gi.lessThan = gi.lt = function(DD) {
      return this.cmp(DD) < 0
    }, gi.lessThanOrEqualTo = gi.lte = function(DD) {
      return this.cmp(DD) < 1
    }, gi.logarithm = gi.log = function(DD) {
      var CD, cD = this,
        ID = cD.constructor,
        pD = ID.precision,
        iD = pD + 5;
      if (void 0 === DD) DD = new ID(10);
      else if ((DD = new ID(DD)).s < 1 || DD.eq(bi)) throw Error(Si + "NaN");
      if (cD.s < 1) throw Error(Si + (cD.s ? "NaN" : "-Infinity"));
      return cD.eq(bi) ? new ID(0) : (wi = !1, CD = Oi(qi(cD, iD), qi(DD, iD), iD), wi = !0, Ki(CD, pD))
    }, gi.minus = gi.sub = function(DD) {
      var CD = this;
      return DD = new CD.constructor(DD), CD.s == DD.s ? ai(CD, DD) : Xi(CD, (DD.s = -DD.s, DD))
    }, gi.modulo = gi.mod = function(DD) {
      var CD, cD = this,
        ID = cD.constructor,
        pD = ID.precision;
      if (!(DD = new ID(DD)).s) throw Error(Si + "NaN");
      return cD.s ? (wi = !1, CD = Oi(cD, DD, 0, 1).times(DD), wi = !0, cD.minus(CD)) : Ki(new ID(cD), pD)
    }, gi.naturalExponential = gi.exp = function() {
      return Pi(this)
    }, gi.naturalLogarithm = gi.ln = function() {
      return qi(this)
    }, gi.negated = gi.neg = function() {
      var DD = new this.constructor(this);
      return DD.s = -DD.s || 0, DD
    }, gi.plus = gi.add = function(DD) {
      var CD = this;
      return DD = new CD.constructor(DD), CD.s == DD.s ? Xi(CD, DD) : ai(CD, (DD.s = -DD.s, DD))
    }, gi.precision = gi.sd = function(DD) {
      var CD, cD, ID, pD = this;
      if (void 0 !== DD && DD !== !!DD && 1 !== DD && 0 !== DD) throw Error(Bi + DD);
      if (CD = Hi(pD) + 1, cD = 7 * (ID = pD.d.length - 1) + 1, ID = pD.d[ID]) {
        for (; ID % 10 == 0; ID /= 10) cD--;
        for (ID = pD.d[0]; ID >= 10; ID /= 10) cD++
      }
      return DD && CD > cD ? CD : cD
    }, gi.squareRoot = gi.sqrt = function() {
      var DD, CD, cD, ID, pD, iD, fD, bD = this,
        QD = bD.constructor;
      if (bD.s < 1) {
        if (!bD.s) return new QD(0);
        throw Error(Si + "NaN")
      }
      for (DD = Hi(bD), wi = !1, 0 == (pD = Math.sqrt(+bD)) || pD == 1 / 0 ? (((CD = ni(bD.d)).length + DD) % 2 == 0 && (CD += "0"), pD = Math.sqrt(CD), DD = Mi((DD + 1) / 2) - (DD < 0 || DD % 2), ID = new QD(CD = pD == 1 / 0 ? "1e" + DD : (CD = pD.toExponential()).slice(0, CD.indexOf("e") + 1) + DD)) : ID = new QD(pD.toString()), pD = fD = (cD = QD.precision) + 3;;)
        if (ID = (iD = ID).plus(Oi(bD, iD, fD + 2)).times(.5), ni(iD.d).slice(0, fD) === (CD = ni(ID.d)).slice(0, fD)) {
          if (CD = CD.slice(fD - 3, fD + 1), pD == fD && "4999" == CD) {
            if (Ki(iD, cD + 1, 0), iD.times(iD).eq(bD)) {
              ID = iD;
              break
            }
          } else if ("9999" != CD) break;
          fD += 4
        } return wi = !0, Ki(ID, cD)
    }, gi.times = gi.mul = function(DD) {
      var CD, cD, ID, pD, iD, fD, bD, QD, wD, SD = this,
        BD = SD.constructor,
        yD = SD.d,
        MD = (DD = new BD(DD)).d;
      if (!SD.s || !DD.s) return new BD(0);
      for (DD.s *= SD.s, cD = SD.e + DD.e, (QD = yD.length) < (wD = MD.length) && (iD = yD, yD = MD, MD = iD, fD = QD, QD = wD, wD = fD), iD = [], ID = fD = QD + wD; ID--;) iD.push(0);
      for (ID = wD; --ID >= 0;) {
        for (CD = 0, pD = QD + ID; pD > ID;) bD = iD[pD] + MD[ID] * yD[pD - ID - 1] + CD, iD[pD--] = bD % oi | 0, CD = bD / oi | 0;
        iD[pD] = (iD[pD] + CD) % oi | 0
      }
      for (; !iD[--fD];) iD.pop();
      return CD ? ++cD : iD.shift(), DD.d = iD, DD.e = cD, wi ? Ki(DD, BD.precision) : DD
    }, gi.toDecimalPlaces = gi.todp = function(DD, CD) {
      var cD = this,
        ID = cD.constructor;
      return cD = new ID(cD), void 0 === DD ? cD : (mi(DD, 0, Qi), void 0 === CD ? CD = ID.rounding : mi(CD, 0, 8), Ki(cD, DD + Hi(cD) + 1, CD))
    }, gi.toExponential = function(DD, CD) {
      var cD, ID = this,
        pD = ID.constructor;
      return void 0 === DD ? cD = Vi(ID, !0) : (mi(DD, 0, Qi), void 0 === CD ? CD = pD.rounding : mi(CD, 0, 8), cD = Vi(ID = Ki(new pD(ID), DD + 1, CD), !0, DD + 1)), cD
    }, gi.toFixed = function(DD, CD) {
      var cD, ID, pD = this,
        iD = pD.constructor;
      return void 0 === DD ? Vi(pD) : (mi(DD, 0, Qi), void 0 === CD ? CD = iD.rounding : mi(CD, 0, 8), cD = Vi((ID = Ki(new iD(pD), DD + Hi(pD) + 1, CD)).abs(), !1, DD + Hi(ID) + 1), pD.isneg() && !pD.isZero() ? "-" + cD : cD)
    }, gi.toInteger = gi.toint = function() {
      var DD = this,
        CD = DD.constructor;
      return Ki(new CD(DD), Hi(DD) + 1, CD.rounding)
    }, gi.toNumber = function() {
      return +this
    }, gi.toPower = gi.pow = function(DD) {
      var CD, cD, ID, pD, iD, fD, bD = this,
        QD = bD.constructor,
        wD = +(DD = new QD(DD));
      if (!DD.s) return new QD(bi);
      if (!(bD = new QD(bD)).s) {
        if (DD.s < 1) throw Error(Si + "Infinity");
        return bD
      }
      if (bD.eq(bi)) return bD;
      if (ID = QD.precision, DD.eq(bi)) return Ki(bD, ID);
      if (fD = (CD = DD.e) >= (cD = DD.d.length - 1), iD = bD.s, fD) {
        if ((cD = wD < 0 ? -wD : wD) <= vi) {
          for (pD = new QD(bi), CD = Math.ceil(ID / 7 + 4), wi = !1; cD % 2 && zi((pD = pD.times(bD)).d, CD), 0 !== (cD = Mi(cD / 2));) zi((bD = bD.times(bD)).d, CD);
          return wi = !0, DD.s < 0 ? new QD(bi).div(pD) : Ki(pD, ID)
        }
      } else if (iD < 0) throw Error(Si + "NaN");
      return iD = iD < 0 && 1 & DD.d[Math.max(CD, cD)] ? -1 : 1, bD.s = 1, wi = !1, pD = DD.times(qi(bD, ID + 12)), wi = !0, (pD = Pi(pD)).s = iD, pD
    }, gi.toPrecision = function(DD, CD) {
      var cD, ID, pD = this,
        iD = pD.constructor;
      return void 0 === DD ? ID = Vi(pD, (cD = Hi(pD)) <= iD.toExpNeg || cD >= iD.toExpPos) : (mi(DD, 1, Qi), void 0 === CD ? CD = iD.rounding : mi(CD, 0, 8), ID = Vi(pD = Ki(new iD(pD), DD, CD), DD <= (cD = Hi(pD)) || cD <= iD.toExpNeg, DD)), ID
    }, gi.toSignificantDigits = gi.tosd = function(DD, CD) {
      var cD = this.constructor;
      return void 0 === DD ? (DD = cD.precision, CD = cD.rounding) : (mi(DD, 1, Qi), void 0 === CD ? CD = cD.rounding : mi(CD, 0, 8)), Ki(new cD(this), DD, CD)
    }, gi.toString = gi.valueOf = gi.val = gi.toJSON = gi[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var DD = this,
        CD = Hi(DD),
        cD = DD.constructor;
      return Vi(DD, CD <= cD.toExpNeg || CD >= cD.toExpPos)
    };
    var Oi = function() {
      function DD(DD, CD) {
        var cD, ID = 0,
          pD = DD.length;
        for (DD = DD.slice(); pD--;) cD = DD[pD] * CD + ID, DD[pD] = cD % oi | 0, ID = cD / oi | 0;
        return ID && DD.unshift(ID), DD
      }

      function CD(DD, CD, cD, ID) {
        var pD, iD;
        if (cD != ID) iD = cD > ID ? 1 : -1;
        else
          for (pD = iD = 0; pD < cD; pD++)
            if (DD[pD] != CD[pD]) {
              iD = DD[pD] > CD[pD] ? 1 : -1;
              break
            } return iD
      }

      function cD(DD, CD, cD) {
        for (var ID = 0; cD--;) DD[cD] -= ID, ID = DD[cD] < CD[cD] ? 1 : 0, DD[cD] = ID * oi + DD[cD] - CD[cD];
        for (; !DD[0] && DD.length > 1;) DD.shift()
      }
      return function(ID, pD, iD, fD) {
        var bD, QD, wD, SD, BD, yD, MD, tD, ZD, oD, vD, ND, gD, XD, mD, nD, OD, PD, HD = ID.constructor,
          UD = ID.s == pD.s ? 1 : -1,
          xD = ID.d,
          qD = pD.d;
        if (!ID.s) return new HD(ID);
        if (!pD.s) throw Error(Si + "Division by zero");
        for (QD = ID.e - pD.e, OD = qD.length, mD = xD.length, tD = (MD = new HD(UD)).d = [], wD = 0; qD[wD] == (xD[wD] || 0);) ++wD;
        if (qD[wD] > (xD[wD] || 0) && --QD, (ND = null == iD ? iD = HD.precision : fD ? iD + (Hi(ID) - Hi(pD)) + 1 : iD) < 0) return new HD(0);
        if (ND = ND / 7 + 2 | 0, wD = 0, 1 == OD)
          for (SD = 0, qD = qD[0], ND++;
            (wD < mD || SD) && ND--; wD++) gD = SD * oi + (xD[wD] || 0), tD[wD] = gD / qD | 0, SD = gD % qD | 0;
        else {
          for ((SD = oi / (qD[0] + 1) | 0) > 1 && (qD = DD(qD, SD), xD = DD(xD, SD), OD = qD.length, mD = xD.length), XD = OD, oD = (ZD = xD.slice(0, OD)).length; oD < OD;) ZD[oD++] = 0;
          (PD = qD.slice()).unshift(0), nD = qD[0], qD[1] >= oi / 2 && ++nD;
          do {
            SD = 0, (bD = CD(qD, ZD, OD, oD)) < 0 ? (vD = ZD[0], OD != oD && (vD = vD * oi + (ZD[1] || 0)), (SD = vD / nD | 0) > 1 ? (SD >= oi && (SD = oi - 1), 1 == (bD = CD(BD = DD(qD, SD), ZD, yD = BD.length, oD = ZD.length)) && (SD--, cD(BD, OD < yD ? PD : qD, yD))) : (0 == SD && (bD = SD = 1), BD = qD.slice()), (yD = BD.length) < oD && BD.unshift(0), cD(ZD, BD, oD), -1 == bD && (bD = CD(qD, ZD, OD, oD = ZD.length)) < 1 && (SD++, cD(ZD, OD < oD ? PD : qD, oD)), oD = ZD.length) : 0 === bD && (SD++, ZD = [0]), tD[wD++] = SD, bD && ZD[0] ? ZD[oD++] = xD[XD] || 0 : (ZD = [xD[XD]], oD = 1)
          } while ((XD++ < mD || void 0 !== ZD[0]) && ND--)
        }
        return tD[0] || tD.shift(), MD.e = QD, Ki(MD, fD ? iD + Hi(MD) + 1 : iD)
      }
    }();

    function Pi(DD, CD) {
      var cD, ID, pD, iD, fD, bD = 0,
        QD = 0,
        wD = DD.constructor,
        SD = wD.precision;
      if (Hi(DD) > 16) throw Error(yi + Hi(DD));
      if (!DD.s) return new wD(bi);
      for (null == CD ? (wi = !1, fD = SD) : fD = CD, iD = new wD(.03125); DD.abs().gte(.1);) DD = DD.times(iD), QD += 5;
      for (fD += Math.log(ti(2, QD)) / Math.LN10 * 2 + 5 | 0, cD = ID = pD = new wD(bi), wD.precision = fD;;) {
        if (ID = Ki(ID.times(DD), fD), cD = cD.times(++bD), ni((iD = pD.plus(Oi(ID, cD, fD))).d).slice(0, fD) === ni(pD.d).slice(0, fD)) {
          for (; QD--;) pD = Ki(pD.times(pD), fD);
          return wD.precision = SD, null == CD ? (wi = !0, Ki(pD, SD)) : pD
        }
        pD = iD
      }
    }

    function Hi(DD) {
      for (var CD = 7 * DD.e, cD = DD.d[0]; cD >= 10; cD /= 10) CD++;
      return CD
    }

    function Ui(DD, CD, cD) {
      if (CD > DD.LN10.sd()) throw wi = !0, cD && (DD.precision = cD), Error(Si + "LN10 precision limit exceeded");
      return Ki(new DD(DD.LN10), CD)
    }

    function xi(DD) {
      for (var CD = ""; DD--;) CD += "0";
      return CD
    }

    function qi(DD, CD) {
      var cD, ID, pD, iD, fD, bD, QD, wD, SD, BD = 1,
        yD = DD,
        MD = yD.d,
        tD = yD.constructor,
        ZD = tD.precision;
      if (yD.s < 1) throw Error(Si + (yD.s ? "NaN" : "-Infinity"));
      if (yD.eq(bi)) return new tD(0);
      if (null == CD ? (wi = !1, wD = ZD) : wD = CD, yD.eq(10)) return null == CD && (wi = !0), Ui(tD, wD);
      if (wD += 10, tD.precision = wD, ID = (cD = ni(MD)).charAt(0), iD = Hi(yD), !(Math.abs(iD) < 15e14)) return QD = Ui(tD, wD + 2, ZD).times(iD + ""), yD = qi(new tD(ID + "." + cD.slice(1)), wD - 10).plus(QD), tD.precision = ZD, null == CD ? (wi = !0, Ki(yD, ZD)) : yD;
      for (; ID < 7 && 1 != ID || 1 == ID && cD.charAt(1) > 3;) ID = (cD = ni((yD = yD.times(DD)).d)).charAt(0), BD++;
      for (iD = Hi(yD), ID > 1 ? (yD = new tD("0." + cD), iD++) : yD = new tD(ID + "." + cD.slice(1)), bD = fD = yD = Oi(yD.minus(bi), yD.plus(bi), wD), SD = Ki(yD.times(yD), wD), pD = 3;;) {
        if (fD = Ki(fD.times(SD), wD), ni((QD = bD.plus(Oi(fD, new tD(pD), wD))).d).slice(0, wD) === ni(bD.d).slice(0, wD)) return bD = bD.times(2), 0 !== iD && (bD = bD.plus(Ui(tD, wD + 2, ZD).times(iD + ""))), bD = Oi(bD, new tD(BD), wD), tD.precision = ZD, null == CD ? (wi = !0, Ki(bD, ZD)) : bD;
        bD = QD, pD += 2
      }
    }

    function Ji(DD, CD) {
      var cD, ID, pD;
      for ((cD = CD.indexOf(".")) > -1 && (CD = CD.replace(".", "")), (ID = CD.search(/e/i)) > 0 ? (cD < 0 && (cD = ID), cD += +CD.slice(ID + 1), CD = CD.substring(0, ID)) : cD < 0 && (cD = CD.length), ID = 0; 48 === CD.charCodeAt(ID);) ++ID;
      for (pD = CD.length; 48 === CD.charCodeAt(pD - 1);) --pD;
      if (CD = CD.slice(ID, pD)) {
        if (pD -= ID, cD = cD - ID - 1, DD.e = Mi(cD / 7), DD.d = [], ID = (cD + 1) % 7, cD < 0 && (ID += 7), ID < pD) {
          for (ID && DD.d.push(+CD.slice(0, ID)), pD -= 7; ID < pD;) DD.d.push(+CD.slice(ID, ID += 7));
          ID = 7 - (CD = CD.slice(ID)).length
        } else ID -= pD;
        for (; ID--;) CD += "0";
        if (DD.d.push(+CD), wi && (DD.e > Ni || DD.e < -Ni)) throw Error(yi + cD)
      } else DD.s = 0, DD.e = 0, DD.d = [0];
      return DD
    }

    function Ki(DD, CD, cD) {
      var ID, pD, iD, fD, bD, QD, wD, SD, BD = DD.d;
      for (fD = 1, iD = BD[0]; iD >= 10; iD /= 10) fD++;
      if ((ID = CD - fD) < 0) ID += 7, pD = CD, wD = BD[SD = 0];
      else {
        if ((SD = Math.ceil((ID + 1) / 7)) >= (iD = BD.length)) return DD;
        for (wD = iD = BD[SD], fD = 1; iD >= 10; iD /= 10) fD++;
        pD = (ID %= 7) - 7 + fD
      }
      if (void 0 !== cD && (bD = wD / (iD = ti(10, fD - pD - 1)) % 10 | 0, QD = CD < 0 || void 0 !== BD[SD + 1] || wD % iD, QD = cD < 4 ? (bD || QD) && (0 == cD || cD == (DD.s < 0 ? 3 : 2)) : bD > 5 || 5 == bD && (4 == cD || QD || 6 == cD && (ID > 0 ? pD > 0 ? wD / ti(10, fD - pD) : 0 : BD[SD - 1]) % 10 & 1 || cD == (DD.s < 0 ? 8 : 7))), CD < 1 || !BD[0]) return QD ? (iD = Hi(DD), BD.length = 1, CD = CD - iD - 1, BD[0] = ti(10, (7 - CD % 7) % 7), DD.e = Mi(-CD / 7) || 0) : (BD.length = 1, BD[0] = DD.e = DD.s = 0), DD;
      if (0 == ID ? (BD.length = SD, iD = 1, SD--) : (BD.length = SD + 1, iD = ti(10, 7 - ID), BD[SD] = pD > 0 ? (wD / ti(10, fD - pD) % ti(10, pD) | 0) * iD : 0), QD)
        for (;;) {
          if (0 == SD) {
            (BD[0] += iD) == oi && (BD[0] = 1, ++DD.e);
            break
          }
          if (BD[SD] += iD, BD[SD] != oi) break;
          BD[SD--] = 0, iD = 1
        }
      for (ID = BD.length; 0 === BD[--ID];) BD.pop();
      if (wi && (DD.e > Ni || DD.e < -Ni)) throw Error(yi + Hi(DD));
      return DD
    }

    function ai(DD, CD) {
      var cD, ID, pD, iD, fD, bD, QD, wD, SD, BD, yD = DD.constructor,
        MD = yD.precision;
      if (!DD.s || !CD.s) return CD.s ? CD.s = -CD.s : CD = new yD(DD), wi ? Ki(CD, MD) : CD;
      if (QD = DD.d, BD = CD.d, ID = CD.e, wD = DD.e, QD = QD.slice(), fD = wD - ID) {
        for ((SD = fD < 0) ? (cD = QD, fD = -fD, bD = BD.length) : (cD = BD, ID = wD, bD = QD.length), fD > (pD = Math.max(Math.ceil(MD / 7), bD) + 2) && (fD = pD, cD.length = 1), cD.reverse(), pD = fD; pD--;) cD.push(0);
        cD.reverse()
      } else {
        for ((SD = (pD = QD.length) < (bD = BD.length)) && (bD = pD), pD = 0; pD < bD; pD++)
          if (QD[pD] != BD[pD]) {
            SD = QD[pD] < BD[pD];
            break
          } fD = 0
      }
      for (SD && (cD = QD, QD = BD, BD = cD, CD.s = -CD.s), bD = QD.length, pD = BD.length - bD; pD > 0; --pD) QD[bD++] = 0;
      for (pD = BD.length; pD > fD;) {
        if (QD[--pD] < BD[pD]) {
          for (iD = pD; iD && 0 === QD[--iD];) QD[iD] = oi - 1;
          --QD[iD], QD[pD] += oi
        }
        QD[pD] -= BD[pD]
      }
      for (; 0 === QD[--bD];) QD.pop();
      for (; 0 === QD[0]; QD.shift()) --ID;
      return QD[0] ? (CD.d = QD, CD.e = ID, wi ? Ki(CD, MD) : CD) : new yD(0)
    }

    function Vi(DD, CD, cD) {
      var ID, pD = Hi(DD),
        iD = ni(DD.d),
        fD = iD.length;
      return CD ? (cD && (ID = cD - fD) > 0 ? iD = iD.charAt(0) + "." + iD.slice(1) + xi(ID) : fD > 1 && (iD = iD.charAt(0) + "." + iD.slice(1)), iD = iD + (pD < 0 ? "e" : "e+") + pD) : pD < 0 ? (iD = "0." + xi(-pD - 1) + iD, cD && (ID = cD - fD) > 0 && (iD += xi(ID))) : pD >= fD ? (iD += xi(pD + 1 - fD), cD && (ID = cD - pD - 1) > 0 && (iD = iD + "." + xi(ID))) : ((ID = pD + 1) < fD && (iD = iD.slice(0, ID) + "." + iD.slice(ID)), cD && (ID = cD - fD) > 0 && (pD + 1 === fD && (iD += "."), iD += xi(ID))), DD.s < 0 ? "-" + iD : iD
    }

    function zi(DD, CD) {
      if (DD.length > CD) return DD.length = CD, !0
    }

    function ji(DD) {
      if (!DD || "object" !== typeof DD) throw Error(Si + "Object expected");
      var CD, cD, ID, pD = ["precision", 1, Qi, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (CD = 0; CD < pD.length; CD += 3)
        if (void 0 !== (ID = DD[cD = pD[CD]])) {
          if (!(Mi(ID) === ID && ID >= pD[CD + 1] && ID <= pD[CD + 2])) throw Error(Bi + cD + ": " + ID);
          this[cD] = ID
        } if (void 0 !== (ID = DD[cD = "LN10"])) {
        if (ID != Math.LN10) throw Error(Bi + cD + ": " + ID);
        this[cD] = new this(ID)
      }
      return this
    }
    var li = function DD(CD) {
      var cD, ID, pD;

      function iD(DD) {
        var CD = this;
        if (!(CD instanceof iD)) return new iD(DD);
        if (CD.constructor = iD, DD instanceof iD) return CD.s = DD.s, CD.e = DD.e, void(CD.d = (DD = DD.d) ? DD.slice() : DD);
        if ("number" === typeof DD) {
          if (0 * DD !== 0) throw Error(Bi + DD);
          if (DD > 0) CD.s = 1;
          else {
            if (!(DD < 0)) return CD.s = 0, CD.e = 0, void(CD.d = [0]);
            DD = -DD, CD.s = -1
          }
          return DD === ~~DD && DD < 1e7 ? (CD.e = 0, void(CD.d = [DD])) : Ji(CD, DD.toString())
        }
        if ("string" !== typeof DD) throw Error(Bi + DD);
        if (45 === DD.charCodeAt(0) ? (DD = DD.slice(1), CD.s = -1) : CD.s = 1, !Zi.test(DD)) throw Error(Bi + DD);
        Ji(CD, DD)
      }
      if (iD.prototype = gi, iD.ROUND_UP = 0, iD.ROUND_DOWN = 1, iD.ROUND_CEIL = 2, iD.ROUND_FLOOR = 3, iD.ROUND_HALF_UP = 4, iD.ROUND_HALF_DOWN = 5, iD.ROUND_HALF_EVEN = 6, iD.ROUND_HALF_CEIL = 7, iD.ROUND_HALF_FLOOR = 8, iD.clone = DD, iD.config = iD.set = ji, void 0 === CD && (CD = {}), CD)
        for (pD = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], cD = 0; cD < pD.length;) CD.hasOwnProperty(ID = pD[cD++]) || (CD[ID] = this[ID]);
      return iD.config(CD), iD
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    bi = new li(1);
    var Li;
    ! function(DD) {
      DD.AED = "aed", DD.AFN = "afn", DD.ALL = "all", DD.AMD = "amd", DD.ANG = "ang", DD.AOA = "aoa", DD.ARS = "ars", DD.AUD = "aud", DD.AWG = "awg", DD.AZN = "azn", DD.BAM = "bam", DD.BBD = "bbd", DD.BDT = "bdt", DD.BGN = "bgn", DD.BHD = "bhd", DD.BIF = "bif", DD.BMD = "bmd", DD.BND = "bnd", DD.BOB = "bob", DD.BOV = "bov", DD.BRL = "brl", DD.BSD = "bsd", DD.BTN = "btn", DD.BWP = "bwp", DD.BYN = "byn", DD.BYR = "byr", DD.BZD = "bzd", DD.CAD = "cad", DD.CDF = "cdf", DD.CHE = "che", DD.CHF = "chf", DD.CHW = "chw", DD.CLF = "clf", DD.CLP = "clp", DD.CNY = "cny", DD.COP = "cop", DD.COU = "cou", DD.CRC = "crc", DD.CUC = "cuc", DD.CUP = "cup", DD.CVE = "cve", DD.CZK = "czk", DD.DJF = "djf", DD.DKK = "dkk", DD.DOP = "dop", DD.DZD = "dzd", DD.EGP = "egp", DD.ERN = "ern", DD.ETB = "etb", DD.EUR = "eur", DD.FJD = "fjd", DD.FKP = "fkp", DD.GBP = "gbp", DD.GEL = "gel", DD.GHS = "ghs", DD.GIP = "gip", DD.GMD = "gmd", DD.GNF = "gnf", DD.GTQ = "gtq", DD.GYD = "gyd", DD.HKD = "hkd", DD.HNL = "hnl", DD.HRK = "hrk", DD.HTG = "htg", DD.HUF = "huf", DD.IDR = "idr", DD.ILS = "ils", DD.INR = "inr", DD.IQD = "iqd", DD.IRR = "irr", DD.ISK = "isk", DD.JMD = "jmd", DD.JOD = "jod", DD.JPY = "jpy", DD.KES = "kes", DD.KGS = "kgs", DD.KHR = "khr", DD.KMF = "kmf", DD.KPW = "kpw", DD.KRW = "krw", DD.KWD = "kwd", DD.KYD = "kyd", DD.KZT = "kzt", DD.LAK = "lak", DD.LBP = "lbp", DD.LKR = "lkr", DD.LRD = "lrd", DD.LSL = "lsl", DD.LTL = "ltl", DD.LVL = "lvl", DD.LYD = "lyd", DD.MAD = "mad", DD.MDL = "mdl", DD.MGA = "mga", DD.MKD = "mkd", DD.MMK = "mmk", DD.MNT = "mnt", DD.MOP = "mop", DD.MRO = "mro", DD.MUR = "mur", DD.MVR = "mvr", DD.MWK = "mwk", DD.MXN = "mxn", DD.MXV = "mxv", DD.MYR = "myr", DD.MZN = "mzn", DD.NAD = "nad", DD.NGN = "ngn", DD.NIO = "nio", DD.NOK = "nok", DD.NPR = "npr", DD.NZD = "nzd", DD.OMR = "omr", DD.PAB = "pab", DD.PEN = "pen", DD.PGK = "pgk", DD.PHP = "php", DD.PKR = "pkr", DD.PLN = "pln", DD.PYG = "pyg", DD.QAR = "qar", DD.RON = "ron", DD.RSD = "rsd", DD.RUB = "rub", DD.RWF = "rwf", DD.SAR = "sar", DD.SBD = "sbd", DD.SCR = "scr", DD.SDG = "sdg", DD.SEK = "sek", DD.SGD = "sgd", DD.SHP = "shp", DD.SLL = "sll", DD.SOS = "sos", DD.SRD = "srd", DD.SSP = "ssp", DD.STD = "std", DD.SVC = "svc", DD.SYP = "syp", DD.SZL = "szl", DD.THB = "thb", DD.TJS = "tjs", DD.TMT = "tmt", DD.TND = "tnd", DD.TOP = "top", DD.TRY = "try", DD.TTD = "ttd", DD.TWD = "twd", DD.TZS = "tzs", DD.UAH = "uah", DD.UGX = "ugx", DD.USD = "usd", DD.USN = "usn", DD.USS = "uss", DD.UYI = "uyi", DD.UYU = "uyu", DD.UZS = "uzs", DD.VEF = "vef", DD.VND = "vnd", DD.VUV = "vuv", DD.WST = "wst", DD.XAF = "xaf", DD.XAG = "xag", DD.XAU = "xau", DD.XBA = "xba", DD.XBB = "xbb", DD.XBC = "xbc", DD.XBD = "xbd", DD.XCD = "xcd", DD.XDR = "xdr", DD.XFU = "xfu", DD.XOF = "xof", DD.XPD = "xpd", DD.XPF = "xpf", DD.XPT = "xpt", DD.XSU = "xsu", DD.XTS = "xts", DD.XUA = "xua", DD.YER = "yer", DD.ZAR = "zar", DD.ZMW = "zmw", DD.ZWL = "zwl"
    }(Li || (Li = {}));
    Li.AED, Li.AFN, Li.ALL, Li.AMD, Li.ANG, Li.AOA, Li.ARS, Li.AUD, Li.AWG, Li.AZN, Li.BAM, Li.BBD, Li.BDT, Li.BGN, Li.BHD, Li.BIF, Li.BMD, Li.BND, Li.BOB, Li.BOV, Li.BRL, Li.BSD, Li.BTN, Li.BWP, Li.BYR, Li.BYN, Li.BZD, Li.CAD, Li.CDF, Li.CHE, Li.CHF, Li.CHW, Li.CLF, Li.CLP, Li.CNY, Li.COP, Li.COU, Li.CRC, Li.CUC, Li.CUP, Li.CVE, Li.CZK, Li.DJF, Li.DKK, Li.DOP, Li.DZD, Li.EGP, Li.ERN, Li.ETB, Li.EUR, Li.FJD, Li.FKP, Li.GBP, Li.GEL, Li.GHS, Li.GIP, Li.GMD, Li.GNF, Li.GTQ, Li.GYD, Li.HKD, Li.HNL, Li.HRK, Li.HTG, Li.HUF, Li.IDR, Li.ILS, Li.INR, Li.IQD, Li.IRR, Li.ISK, Li.JMD, Li.JOD, Li.JPY, Li.KES, Li.KGS, Li.KHR, Li.KMF, Li.KPW, Li.KRW, Li.KWD, Li.KYD, Li.KZT, Li.LAK, Li.LBP, Li.LKR, Li.LRD, Li.LSL, Li.LTL, Li.LVL, Li.LYD, Li.MAD, Li.MDL, Li.MGA, Li.MKD, Li.MMK, Li.MNT, Li.MOP, Li.MRO, Li.MUR, Li.MVR, Li.MWK, Li.MXN, Li.MXV, Li.MYR, Li.MZN, Li.NAD, Li.NGN, Li.NIO, Li.NOK, Li.NPR, Li.NZD, Li.OMR, Li.PAB, Li.PEN, Li.PGK, Li.PHP, Li.PKR, Li.PLN, Li.PYG, Li.QAR, Li.RON, Li.RSD, Li.RUB, Li.RWF, Li.SAR, Li.SBD, Li.SCR, Li.SDG, Li.SEK, Li.SGD, Li.SHP, Li.SLL, Li.SOS, Li.SRD, Li.SSP, Li.STD, Li.SVC, Li.SYP, Li.SZL, Li.THB, Li.TJS, Li.TMT, Li.TND, Li.TOP, Li.TRY, Li.TTD, Li.TWD, Li.TZS, Li.UAH, Li.UGX, Li.USD, Li.USN, Li.USS, Li.UYI, Li.UYU, Li.UZS, Li.VEF, Li.VND, Li.VUV, Li.WST, Li.XAF, Li.XAG, Li.XAU, Li.XBA, Li.XBB, Li.XBC, Li.XBD, Li.XCD, Li.XDR, Li.XFU, Li.XOF, Li.XPD, Li.XPF, Li.XPT, Li.XSU, Li.XTS, Li.XUA, Li.YER, Li.ZAR, Li.ZMW, Li.ZWL;
    var Ti = {
      exports: {}
    };
    ! function(DD, CD) {
      var cD = "__lodash_hash_undefined__",
        ID = 9007199254740991,
        iD = "[object Arguments]",
        fD = "[object Array]",
        bD = "[object Boolean]",
        QD = "[object Date]",
        wD = "[object Error]",
        SD = "[object Function]",
        BD = "[object Map]",
        yD = "[object Number]",
        MD = "[object Object]",
        tD = "[object Promise]",
        ZD = "[object RegExp]",
        oD = "[object Set]",
        vD = "[object String]",
        ND = "[object Symbol]",
        gD = "[object WeakMap]",
        XD = "[object ArrayBuffer]",
        mD = "[object DataView]",
        nD = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        OD = /^\w*$/,
        PD = /^\./,
        HD = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        UD = /\\(\\)?/g,
        xD = /^\[object .+?Constructor\]$/,
        qD = /^(?:0|[1-9]\d*)$/,
        JD = {};
      JD["[object Float32Array]"] = JD["[object Float64Array]"] = JD["[object Int8Array]"] = JD["[object Int16Array]"] = JD["[object Int32Array]"] = JD["[object Uint8Array]"] = JD["[object Uint8ClampedArray]"] = JD["[object Uint16Array]"] = JD["[object Uint32Array]"] = !0, JD[iD] = JD[fD] = JD[XD] = JD[bD] = JD[mD] = JD[QD] = JD[wD] = JD[SD] = JD[BD] = JD[yD] = JD[MD] = JD[ZD] = JD[oD] = JD[vD] = JD[gD] = !1;
      var KD = "object" == typeof pD && pD && pD.Object === Object && pD,
        aD = "object" == typeof self && self && self.Object === Object && self,
        VD = KD || aD || Function("return this")(),
        zD = CD && !CD.nodeType && CD,
        jD = zD && DD && !DD.nodeType && DD,
        lD = jD && jD.exports === zD && KD.process,
        LD = function() {
          try {
            return lD && lD.binding("util")
          } catch (DD) {}
        }(),
        TD = LD && LD.isTypedArray;

      function GD(DD, CD) {
        for (var cD = -1, ID = DD ? DD.length : 0; ++cD < ID && !1 !== CD(DD[cD], cD, DD););
        return DD
      }

      function RD(DD, CD) {
        for (var cD = -1, ID = DD ? DD.length : 0; ++cD < ID;)
          if (CD(DD[cD], cD, DD)) return !0;
        return !1
      }

      function kD(DD) {
        var CD = !1;
        if (null != DD && "function" != typeof DD.toString) try {
          CD = !!(DD + "")
        } catch (cD) {}
        return CD
      }

      function dD(DD) {
        var CD = -1,
          cD = Array(DD.size);
        return DD.forEach((function(DD, ID) {
          cD[++CD] = [ID, DD]
        })), cD
      }

      function YD(DD, CD) {
        return function(cD) {
          return DD(CD(cD))
        }
      }

      function WD(DD) {
        var CD = -1,
          cD = Array(DD.size);
        return DD.forEach((function(DD) {
          cD[++CD] = DD
        })), cD
      }
      var sD = Array.prototype,
        ED = Function.prototype,
        eD = Object.prototype,
        uD = VD["__core-js_shared__"],
        hD = function() {
          var DD = /[^.]+$/.exec(uD && uD.keys && uD.keys.IE_PROTO || "");
          return DD ? "Symbol(src)_1." + DD : ""
        }(),
        rD = ED.toString,
        AD = eD.hasOwnProperty,
        FD = eD.toString,
        DC = RegExp("^" + rD.call(AD).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        CC = VD.Symbol,
        cC = VD.Uint8Array,
        IC = YD(Object.getPrototypeOf, Object),
        pC = Object.create,
        iC = eD.propertyIsEnumerable,
        fC = sD.splice,
        bC = YD(Object.keys, Object),
        QC = dC(VD, "DataView"),
        wC = dC(VD, "Map"),
        SC = dC(VD, "Promise"),
        BC = dC(VD, "Set"),
        yC = dC(VD, "WeakMap"),
        MC = dC(Object, "create"),
        tC = rC(QC),
        ZC = rC(wC),
        oC = rC(SC),
        vC = rC(BC),
        NC = rC(yC),
        gC = CC ? CC.prototype : void 0,
        XC = gC ? gC.valueOf : void 0,
        mC = gC ? gC.toString : void 0;

      function nC(DD) {
        var CD = -1,
          cD = DD ? DD.length : 0;
        for (this.clear(); ++CD < cD;) {
          var ID = DD[CD];
          this.set(ID[0], ID[1])
        }
      }

      function OC(DD) {
        var CD = -1,
          cD = DD ? DD.length : 0;
        for (this.clear(); ++CD < cD;) {
          var ID = DD[CD];
          this.set(ID[0], ID[1])
        }
      }

      function PC(DD) {
        var CD = -1,
          cD = DD ? DD.length : 0;
        for (this.clear(); ++CD < cD;) {
          var ID = DD[CD];
          this.set(ID[0], ID[1])
        }
      }

      function HC(DD) {
        var CD = -1,
          cD = DD ? DD.length : 0;
        for (this.__data__ = new PC; ++CD < cD;) this.add(DD[CD])
      }

      function UC(DD) {
        this.__data__ = new OC(DD)
      }

      function xC(DD, CD) {
        var cD = Cc(DD) || Dc(DD) ? function(DD, CD) {
            for (var cD = -1, ID = Array(DD); ++cD < DD;) ID[cD] = CD(cD);
            return ID
          }(DD.length, String) : [],
          ID = cD.length,
          pD = !!ID;
        for (var iD in DD) !CD && !AD.call(DD, iD) || pD && ("length" == iD || WC(iD, ID)) || cD.push(iD);
        return cD
      }

      function qC(DD, CD) {
        for (var cD = DD.length; cD--;)
          if (FC(DD[cD][0], CD)) return cD;
        return -1
      }
      nC.prototype.clear = function() {
        this.__data__ = MC ? MC(null) : {}
      }, nC.prototype.delete = function(DD) {
        return this.has(DD) && delete this.__data__[DD]
      }, nC.prototype.get = function(DD) {
        var CD = this.__data__;
        if (MC) {
          var ID = CD[DD];
          return ID === cD ? void 0 : ID
        }
        return AD.call(CD, DD) ? CD[DD] : void 0
      }, nC.prototype.has = function(DD) {
        var CD = this.__data__;
        return MC ? void 0 !== CD[DD] : AD.call(CD, DD)
      }, nC.prototype.set = function(DD, CD) {
        return this.__data__[DD] = MC && void 0 === CD ? cD : CD, this
      }, OC.prototype.clear = function() {
        this.__data__ = []
      }, OC.prototype.delete = function(DD) {
        var CD = this.__data__,
          cD = qC(CD, DD);
        return !(cD < 0) && (cD == CD.length - 1 ? CD.pop() : fC.call(CD, cD, 1), !0)
      }, OC.prototype.get = function(DD) {
        var CD = this.__data__,
          cD = qC(CD, DD);
        return cD < 0 ? void 0 : CD[cD][1]
      }, OC.prototype.has = function(DD) {
        return qC(this.__data__, DD) > -1
      }, OC.prototype.set = function(DD, CD) {
        var cD = this.__data__,
          ID = qC(cD, DD);
        return ID < 0 ? cD.push([DD, CD]) : cD[ID][1] = CD, this
      }, PC.prototype.clear = function() {
        this.__data__ = {
          hash: new nC,
          map: new(wC || OC),
          string: new nC
        }
      }, PC.prototype.delete = function(DD) {
        return kC(this, DD).delete(DD)
      }, PC.prototype.get = function(DD) {
        return kC(this, DD).get(DD)
      }, PC.prototype.has = function(DD) {
        return kC(this, DD).has(DD)
      }, PC.prototype.set = function(DD, CD) {
        return kC(this, DD).set(DD, CD), this
      }, HC.prototype.add = HC.prototype.push = function(DD) {
        return this.__data__.set(DD, cD), this
      }, HC.prototype.has = function(DD) {
        return this.__data__.has(DD)
      }, UC.prototype.clear = function() {
        this.__data__ = new OC
      }, UC.prototype.delete = function(DD) {
        return this.__data__.delete(DD)
      }, UC.prototype.get = function(DD) {
        return this.__data__.get(DD)
      }, UC.prototype.has = function(DD) {
        return this.__data__.has(DD)
      }, UC.prototype.set = function(DD, CD) {
        var cD = this.__data__;
        if (cD instanceof OC) {
          var ID = cD.__data__;
          if (!wC || ID.length < 199) return ID.push([DD, CD]), this;
          cD = this.__data__ = new PC(ID)
        }
        return cD.set(DD, CD), this
      };
      var JC, KC = function(DD, CD, cD) {
        for (var ID = -1, pD = Object(DD), iD = cD(DD), fD = iD.length; fD--;) {
          var bD = iD[JC ? fD : ++ID];
          if (!1 === CD(pD[bD], bD, pD)) break
        }
        return DD
      };

      function aC(DD, CD) {
        return DD && KC(DD, CD, Sc)
      }

      function VC(DD, CD) {
        for (var cD = 0, ID = (CD = sC(CD, DD) ? [CD] : GC(CD)).length; null != DD && cD < ID;) DD = DD[hC(CD[cD++])];
        return cD && cD == ID ? DD : void 0
      }

      function zC(DD, CD) {
        return null != DD && CD in Object(DD)
      }

      function jC(DD, CD, cD, ID, pD) {
        return DD === CD || (null == DD || null == CD || !ic(DD) && !fc(CD) ? DD !== DD && CD !== CD : function(DD, CD, cD, ID, pD, SD) {
          var tD = Cc(DD),
            gD = Cc(CD),
            nD = fD,
            OD = fD;
          tD || (nD = (nD = YC(DD)) == iD ? MD : nD);
          gD || (OD = (OD = YC(CD)) == iD ? MD : OD);
          var PD = nD == MD && !kD(DD),
            HD = OD == MD && !kD(CD),
            UD = nD == OD;
          if (UD && !PD) return SD || (SD = new UC), tD || wc(DD) ? RC(DD, CD, cD, ID, pD, SD) : function(DD, CD, cD, ID, pD, iD, fD) {
            switch (cD) {
              case mD:
                if (DD.byteLength != CD.byteLength || DD.byteOffset != CD.byteOffset) return !1;
                DD = DD.buffer, CD = CD.buffer;
              case XD:
                return !(DD.byteLength != CD.byteLength || !ID(new cC(DD), new cC(CD)));
              case bD:
              case QD:
              case yD:
                return FC(+DD, +CD);
              case wD:
                return DD.name == CD.name && DD.message == CD.message;
              case ZD:
              case vD:
                return DD == CD + "";
              case BD:
                var SD = dD;
              case oD:
                var MD = 2 & iD;
                if (SD || (SD = WD), DD.size != CD.size && !MD) return !1;
                var tD = fD.get(DD);
                if (tD) return tD == CD;
                iD |= 1, fD.set(DD, CD);
                var gD = RC(SD(DD), SD(CD), ID, pD, iD, fD);
                return fD.delete(DD), gD;
              case ND:
                if (XC) return XC.call(DD) == XC.call(CD)
            }
            return !1
          }(DD, CD, nD, cD, ID, pD, SD);
          if (!(2 & pD)) {
            var xD = PD && AD.call(DD, "__wrapped__"),
              qD = HD && AD.call(CD, "__wrapped__");
            if (xD || qD) {
              var JD = xD ? DD.value() : DD,
                KD = qD ? CD.value() : CD;
              return SD || (SD = new UC), cD(JD, KD, ID, pD, SD)
            }
          }
          if (!UD) return !1;
          return SD || (SD = new UC),
            function(DD, CD, cD, ID, pD, iD) {
              var fD = 2 & pD,
                bD = Sc(DD),
                QD = bD.length,
                wD = Sc(CD),
                SD = wD.length;
              if (QD != SD && !fD) return !1;
              var BD = QD;
              for (; BD--;) {
                var yD = bD[BD];
                if (!(fD ? yD in CD : AD.call(CD, yD))) return !1
              }
              var MD = iD.get(DD);
              if (MD && iD.get(CD)) return MD == CD;
              var tD = !0;
              iD.set(DD, CD), iD.set(CD, DD);
              var ZD = fD;
              for (; ++BD < QD;) {
                var oD = DD[yD = bD[BD]],
                  vD = CD[yD];
                if (ID) var ND = fD ? ID(vD, oD, yD, CD, DD, iD) : ID(oD, vD, yD, DD, CD, iD);
                if (!(void 0 === ND ? oD === vD || cD(oD, vD, ID, pD, iD) : ND)) {
                  tD = !1;
                  break
                }
                ZD || (ZD = "constructor" == yD)
              }
              if (tD && !ZD) {
                var gD = DD.constructor,
                  XD = CD.constructor;
                gD == XD || !("constructor" in DD) || !("constructor" in CD) || "function" == typeof gD && gD instanceof gD && "function" == typeof XD && XD instanceof XD || (tD = !1)
              }
              return iD.delete(DD), iD.delete(CD), tD
            }(DD, CD, cD, ID, pD, SD)
        }(DD, CD, jC, cD, ID, pD))
      }

      function lC(DD) {
        return !(!ic(DD) || (CD = DD, hD && hD in CD)) && (Ic(DD) || kD(DD) ? DC : xD).test(rC(DD));
        var CD
      }

      function LC(DD) {
        return "function" == typeof DD ? DD : null == DD ? Bc : "object" == typeof DD ? Cc(DD) ? function(DD, CD) {
          if (sC(DD) && EC(CD)) return eC(hC(DD), CD);
          return function(cD) {
            var ID = function(DD, CD, cD) {
              var ID = null == DD ? void 0 : VC(DD, CD);
              return void 0 === ID ? cD : ID
            }(cD, DD);
            return void 0 === ID && ID === CD ? function(DD, CD) {
              return null != DD && function(DD, CD, cD) {
                CD = sC(CD, DD) ? [CD] : GC(CD);
                var ID, pD = -1,
                  iD = CD.length;
                for (; ++pD < iD;) {
                  var fD = hC(CD[pD]);
                  if (!(ID = null != DD && cD(DD, fD))) break;
                  DD = DD[fD]
                }
                if (ID) return ID;
                iD = DD ? DD.length : 0;
                return !!iD && pc(iD) && WC(fD, iD) && (Cc(DD) || Dc(DD))
              }(DD, CD, zC)
            }(cD, DD) : jC(CD, ID, void 0, 3)
          }
        }(DD[0], DD[1]) : function(DD) {
          var CD = function(DD) {
            var CD = Sc(DD),
              cD = CD.length;
            for (; cD--;) {
              var ID = CD[cD],
                pD = DD[ID];
              CD[cD] = [ID, pD, EC(pD)]
            }
            return CD
          }(DD);
          if (1 == CD.length && CD[0][2]) return eC(CD[0][0], CD[0][1]);
          return function(cD) {
            return cD === DD || function(DD, CD, cD, ID) {
              var pD = cD.length,
                iD = pD,
                fD = !ID;
              if (null == DD) return !iD;
              for (DD = Object(DD); pD--;) {
                var bD = cD[pD];
                if (fD && bD[2] ? bD[1] !== DD[bD[0]] : !(bD[0] in DD)) return !1
              }
              for (; ++pD < iD;) {
                var QD = (bD = cD[pD])[0],
                  wD = DD[QD],
                  SD = bD[1];
                if (fD && bD[2]) {
                  if (void 0 === wD && !(QD in DD)) return !1
                } else {
                  var BD = new UC;
                  if (ID) var yD = ID(wD, SD, QD, DD, CD, BD);
                  if (!(void 0 === yD ? jC(SD, wD, ID, 3, BD) : yD)) return !1
                }
              }
              return !0
            }(cD, DD, CD)
          }
        }(DD) : function(DD) {
          return sC(DD) ? (CD = hC(DD), function(DD) {
            return null == DD ? void 0 : DD[CD]
          }) : function(DD) {
            return function(CD) {
              return VC(CD, DD)
            }
          }(DD);
          var CD
        }(DD)
      }

      function TC(DD) {
        if (! function(DD) {
            var CD = DD && DD.constructor,
              cD = "function" == typeof CD && CD.prototype || eD;
            return DD === cD
          }(DD)) return bC(DD);
        var CD = [];
        for (var cD in Object(DD)) AD.call(DD, cD) && "constructor" != cD && CD.push(cD);
        return CD
      }

      function GC(DD) {
        return Cc(DD) ? DD : uC(DD)
      }

      function RC(DD, CD, cD, ID, pD, iD) {
        var fD = 2 & pD,
          bD = DD.length,
          QD = CD.length;
        if (bD != QD && !(fD && QD > bD)) return !1;
        var wD = iD.get(DD);
        if (wD && iD.get(CD)) return wD == CD;
        var SD = -1,
          BD = !0,
          yD = 1 & pD ? new HC : void 0;
        for (iD.set(DD, CD), iD.set(CD, DD); ++SD < bD;) {
          var MD = DD[SD],
            tD = CD[SD];
          if (ID) var ZD = fD ? ID(tD, MD, SD, CD, DD, iD) : ID(MD, tD, SD, DD, CD, iD);
          if (void 0 !== ZD) {
            if (ZD) continue;
            BD = !1;
            break
          }
          if (yD) {
            if (!RD(CD, (function(DD, CD) {
                if (!yD.has(CD) && (MD === DD || cD(MD, DD, ID, pD, iD))) return yD.add(CD)
              }))) {
              BD = !1;
              break
            }
          } else if (MD !== tD && !cD(MD, tD, ID, pD, iD)) {
            BD = !1;
            break
          }
        }
        return iD.delete(DD), iD.delete(CD), BD
      }

      function kC(DD, CD) {
        var cD = DD.__data__;
        return function(DD) {
          var CD = typeof DD;
          return "string" == CD || "number" == CD || "symbol" == CD || "boolean" == CD ? "__proto__" !== DD : null === DD
        }(CD) ? cD["string" == typeof CD ? "string" : "hash"] : cD.map
      }

      function dC(DD, CD) {
        var cD = function(DD, CD) {
          return null == DD ? void 0 : DD[CD]
        }(DD, CD);
        return lC(cD) ? cD : void 0
      }
      var YC = function(DD) {
        return FD.call(DD)
      };

      function WC(DD, CD) {
        return !!(CD = null == CD ? ID : CD) && ("number" == typeof DD || qD.test(DD)) && DD > -1 && DD % 1 == 0 && DD < CD
      }

      function sC(DD, CD) {
        if (Cc(DD)) return !1;
        var cD = typeof DD;
        return !("number" != cD && "symbol" != cD && "boolean" != cD && null != DD && !bc(DD)) || (OD.test(DD) || !nD.test(DD) || null != CD && DD in Object(CD))
      }

      function EC(DD) {
        return DD === DD && !ic(DD)
      }

      function eC(DD, CD) {
        return function(cD) {
          return null != cD && (cD[DD] === CD && (void 0 !== CD || DD in Object(cD)))
        }
      }(QC && YC(new QC(new ArrayBuffer(1))) != mD || wC && YC(new wC) != BD || SC && YC(SC.resolve()) != tD || BC && YC(new BC) != oD || yC && YC(new yC) != gD) && (YC = function(DD) {
        var CD = FD.call(DD),
          cD = CD == MD ? DD.constructor : void 0,
          ID = cD ? rC(cD) : void 0;
        if (ID) switch (ID) {
          case tC:
            return mD;
          case ZC:
            return BD;
          case oC:
            return tD;
          case vC:
            return oD;
          case NC:
            return gD
        }
        return CD
      });
      var uC = AC((function(DD) {
        var CD;
        DD = null == (CD = DD) ? "" : function(DD) {
          if ("string" == typeof DD) return DD;
          if (bc(DD)) return mC ? mC.call(DD) : "";
          var CD = DD + "";
          return "0" == CD && 1 / DD == -1 / 0 ? "-0" : CD
        }(CD);
        var cD = [];
        return PD.test(DD) && cD.push(""), DD.replace(HD, (function(DD, CD, ID, pD) {
          cD.push(ID ? pD.replace(UD, "$1") : CD || DD)
        })), cD
      }));

      function hC(DD) {
        if ("string" == typeof DD || bc(DD)) return DD;
        var CD = DD + "";
        return "0" == CD && 1 / DD == -1 / 0 ? "-0" : CD
      }

      function rC(DD) {
        if (null != DD) {
          try {
            return rD.call(DD)
          } catch (CD) {}
          try {
            return DD + ""
          } catch (CD) {}
        }
        return ""
      }

      function AC(DD, CD) {
        if ("function" != typeof DD || CD && "function" != typeof CD) throw new TypeError("Expected a function");
        var cD = function() {
          var ID = arguments,
            pD = CD ? CD.apply(this, ID) : ID[0],
            iD = cD.cache;
          if (iD.has(pD)) return iD.get(pD);
          var fD = DD.apply(this, ID);
          return cD.cache = iD.set(pD, fD), fD
        };
        return cD.cache = new(AC.Cache || PC), cD
      }

      function FC(DD, CD) {
        return DD === CD || DD !== DD && CD !== CD
      }

      function Dc(DD) {
        return function(DD) {
          return fc(DD) && cc(DD)
        }(DD) && AD.call(DD, "callee") && (!iC.call(DD, "callee") || FD.call(DD) == iD)
      }
      AC.Cache = PC;
      var Cc = Array.isArray;

      function cc(DD) {
        return null != DD && pc(DD.length) && !Ic(DD)
      }

      function Ic(DD) {
        var CD = ic(DD) ? FD.call(DD) : "";
        return CD == SD || "[object GeneratorFunction]" == CD
      }

      function pc(DD) {
        return "number" == typeof DD && DD > -1 && DD % 1 == 0 && DD <= ID
      }

      function ic(DD) {
        var CD = typeof DD;
        return !!DD && ("object" == CD || "function" == CD)
      }

      function fc(DD) {
        return !!DD && "object" == typeof DD
      }

      function bc(DD) {
        return "symbol" == typeof DD || fc(DD) && FD.call(DD) == ND
      }
      var Qc, wc = TD ? (Qc = TD, function(DD) {
        return Qc(DD)
      }) : function(DD) {
        return fc(DD) && pc(DD.length) && !!JD[FD.call(DD)]
      };

      function Sc(DD) {
        return cc(DD) ? xC(DD) : TC(DD)
      }

      function Bc(DD) {
        return DD
      }
      DD.exports = function(DD, CD, cD) {
        var ID, pD = Cc(DD) || wc(DD);
        if (CD = LC(CD), null == cD)
          if (pD || ic(DD)) {
            var iD = DD.constructor;
            cD = pD ? Cc(DD) ? new iD : [] : Ic(iD) ? ic(ID = IC(DD)) ? pC(ID) : {} : {}
          } else cD = {};
        return (pD ? GD : aC)(DD, (function(DD, ID, pD) {
          return CD(cD, DD, ID, pD)
        })), cD
      }
    }(Ti, Ti.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      j: Gi
    } = ID
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);