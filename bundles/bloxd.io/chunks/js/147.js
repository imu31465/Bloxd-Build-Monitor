export const id = 147;
export const ids = [147];
export const modules = {
  8262: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XX,
      h: () => yg
    });
    var tS = {};
    gS.r(tS), gS.d(tS, {
      e: () => tt,
      k: () => xt,
      i: () => Xt,
      l: () => og,
      n: () => Tg,
      r: () => vt,
      t: () => eg,
      u: () => Yt,
      w: () => ht,
      x: () => Lt,
      A: () => lg,
      C: () => Jt,
      F: () => ct,
      J: () => Et,
      O: () => mg,
      K: () => Ht,
      S: () => dt,
      U: () => Ot
    });
    var bS = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function XS(SS) {
      return SS && SS.__esModule && Object.prototype.hasOwnProperty.call(SS, "default") ? SS.default : SS
    }
    var xS = {
      exports: {}
    };
    ! function(SS) {
      var HS = Object.prototype.hasOwnProperty,
        gS = "~";

      function tS() {}

      function bS(SS, HS, gS) {
        this.xK = SS, this.context = HS, this.once = gS || !1
      }

      function XS(SS, HS, tS, XS, xS) {
        if ("function" !== typeof tS) throw new TypeError("The listener must be a function");
        var NS = new bS(tS, XS || SS, xS),
          qS = gS ? gS + HS : HS;
        return SS._events[qS] ? SS._events[qS].xK ? SS._events[qS] = [SS._events[qS], NS] : SS._events[qS].push(NS) : (SS._events[qS] = NS, SS._eventsCount++), SS
      }

      function xS(SS, HS) {
        0 === --SS._eventsCount ? SS._events = new tS : delete SS._events[HS]
      }

      function NS() {
        this._events = new tS, this._eventsCount = 0
      }
      Object.create && (tS.prototype = Object.create(null), (new tS).__proto__ || (gS = !1)), NS.prototype.eventNames = function() {
        var SS, tS, bS = [];
        if (0 === this._eventsCount) return bS;
        for (tS in SS = this._events) HS.call(SS, tS) && bS.push(gS ? tS.slice(1) : tS);
        return Object.getOwnPropertySymbols ? bS.concat(Object.getOwnPropertySymbols(SS)) : bS
      }, NS.prototype.listeners = function(SS) {
        var HS = gS ? gS + SS : SS,
          tS = this._events[HS];
        if (!tS) return [];
        if (tS.xK) return [tS.xK];
        for (var bS = 0, XS = tS.length, xS = new Array(XS); bS < XS; bS++) xS[bS] = tS[bS].xK;
        return xS
      }, NS.prototype.listenerCount = function(SS) {
        var HS = gS ? gS + SS : SS,
          tS = this._events[HS];
        return tS ? tS.xK ? 1 : tS.length : 0
      }, NS.prototype.emit = function(SS, HS, tS, bS, XS, xS) {
        var NS = gS ? gS + SS : SS;
        if (!this._events[NS]) return !1;
        var qS, uS, IS = this._events[NS],
          fS = arguments.length;
        if (IS.xK) {
          switch (IS.once && this.removeListener(SS, IS.xK, void 0, !0), fS) {
            case 1:
              return IS.xK.call(IS.context), !0;
            case 2:
              return IS.xK.call(IS.context, HS), !0;
            case 3:
              return IS.xK.call(IS.context, HS, tS), !0;
            case 4:
              return IS.xK.call(IS.context, HS, tS, bS), !0;
            case 5:
              return IS.xK.call(IS.context, HS, tS, bS, XS), !0;
            case 6:
              return IS.xK.call(IS.context, HS, tS, bS, XS, xS), !0
          }
          for (uS = 1, qS = new Array(fS - 1); uS < fS; uS++) qS[uS - 1] = arguments[uS];
          IS.xK.apply(IS.context, qS)
        } else {
          var kS, aS = IS.length;
          for (uS = 0; uS < aS; uS++) switch (IS[uS].once && this.removeListener(SS, IS[uS].xK, void 0, !0), fS) {
            case 1:
              IS[uS].xK.call(IS[uS].context);
              break;
            case 2:
              IS[uS].xK.call(IS[uS].context, HS);
              break;
            case 3:
              IS[uS].xK.call(IS[uS].context, HS, tS);
              break;
            case 4:
              IS[uS].xK.call(IS[uS].context, HS, tS, bS);
              break;
            default:
              if (!qS)
                for (kS = 1, qS = new Array(fS - 1); kS < fS; kS++) qS[kS - 1] = arguments[kS];
              IS[uS].xK.apply(IS[uS].context, qS)
          }
        }
        return !0
      }, NS.prototype.on = function(SS, HS, gS) {
        return XS(this, SS, HS, gS, !1)
      }, NS.prototype.once = function(SS, HS, gS) {
        return XS(this, SS, HS, gS, !0)
      }, NS.prototype.removeListener = function(SS, HS, tS, bS) {
        var XS = gS ? gS + SS : SS;
        if (!this._events[XS]) return this;
        if (!HS) return xS(this, XS), this;
        var NS = this._events[XS];
        if (NS.xK) NS.xK !== HS || bS && !NS.once || tS && NS.context !== tS || xS(this, XS);
        else {
          for (var qS = 0, uS = [], IS = NS.length; qS < IS; qS++)(NS[qS].xK !== HS || bS && !NS[qS].once || tS && NS[qS].context !== tS) && uS.push(NS[qS]);
          uS.length ? this._events[XS] = 1 === uS.length ? uS[0] : uS : xS(this, XS)
        }
        return this
      }, NS.prototype.fC = function(SS) {
        var HS;
        return SS ? (HS = gS ? gS + SS : SS, this._events[HS] && xS(this, HS)) : (this._events = new tS, this._eventsCount = 0), this
      }, NS.prototype.off = NS.prototype.removeListener, NS.prototype.addListener = NS.prototype.on, NS.prefixed = gS, NS.EventEmitter = NS, SS.exports = NS
    }(xS);
    var NS, qS, uS = XS(xS.exports);
    ! function(SS) {
      SS.assertEqual = SS => SS, SS.assertIs = function(SS) {}, SS.assertNever = function(SS) {
        throw new Error
      }, SS.arrayToEnum = SS => {
        const HS = {};
        for (const gS of SS) HS[gS] = gS;
        return HS
      }, SS.getValidEnumValues = HS => {
        const gS = SS.objectKeys(HS).filter((SS => "number" !== typeof HS[HS[SS]])),
          tS = {};
        for (const SS of gS) tS[SS] = HS[SS];
        return SS.objectValues(tS)
      }, SS.objectValues = HS => SS.objectKeys(HS).map((function(SS) {
        return HS[SS]
      })), SS.objectKeys = "function" === typeof Object.keys ? SS => Object.keys(SS) : SS => {
        const HS = [];
        for (const gS in SS) Object.prototype.hasOwnProperty.call(SS, gS) && HS.push(gS);
        return HS
      }, SS.find = (SS, HS) => {
        for (const gS of SS)
          if (HS(gS)) return gS
      }, SS.isInteger = "function" === typeof Number.isInteger ? SS => Number.isInteger(SS) : SS => "number" === typeof SS && isFinite(SS) && Math.floor(SS) === SS, SS.joinValues = function(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return SS.map((SS => "string" === typeof SS ? `'${SS}'` : SS)).join(HS)
      }, SS.jsonStringifyReplacer = (SS, HS) => "bigint" === typeof HS ? HS.toString() : HS
    }(NS || (NS = {})),
    function(SS) {
      SS.mergeShapes = (SS, HS) => ({
        ...SS,
        ...HS
      })
    }(qS || (qS = {}));
    const IS = NS.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      fS = SS => {
        switch (typeof SS) {
          case "undefined":
            return IS.undefined;
          case "string":
            return IS.string;
          case "number":
            return isNaN(SS) ? IS.nan : IS.number;
          case "boolean":
            return IS.boolean;
          case "function":
            return IS.function;
          case "bigint":
            return IS.bigint;
          case "symbol":
            return IS.symbol;
          case "object":
            return Array.isArray(SS) ? IS.array : null === SS ? IS.null : SS.then && "function" === typeof SS.then && SS.catch && "function" === typeof SS.catch ? IS.promise : "undefined" !== typeof Map && SS instanceof Map ? IS.map : "undefined" !== typeof Set && SS instanceof Set ? IS.set : "undefined" !== typeof Date && SS instanceof Date ? IS.date : IS.object;
          default:
            return IS.unknown
        }
      },
      kS = NS.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class aS extends Error {
      constructor(SS) {
        var HS;
        super(), HS = this, this.issues = [], this.addIssue = SS => {
          this.issues = [...this.issues, SS]
        }, this.addIssues = function() {
          let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          HS.issues = [...HS.issues, ...SS]
        };
        const gS = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, gS) : this.__proto__ = gS, this.name = "ZodError", this.issues = SS
      }
      get errors() {
        return this.issues
      }
      format(SS) {
        const HS = SS || function(SS) {
            return SS.message
          },
          gS = {
            _errors: []
          },
          tS = SS => {
            for (const bS of SS.issues)
              if ("invalid_union" === bS.code) bS.unionErrors.map(tS);
              else if ("invalid_return_type" === bS.code) tS(bS.returnTypeError);
            else if ("invalid_arguments" === bS.code) tS(bS.argumentsError);
            else if (0 === bS.path.length) gS._errors.push(HS(bS));
            else {
              let SS = gS,
                tS = 0;
              for (; tS < bS.path.length;) {
                const gS = bS.path[tS];
                tS === bS.path.length - 1 ? (SS[gS] = SS[gS] || {
                  _errors: []
                }, SS[gS]._errors.push(HS(bS))) : SS[gS] = SS[gS] || {
                  _errors: []
                }, SS = SS[gS], tS++
              }
            }
          };
        return tS(this), gS
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, NS.jsonStringifyReplacer, 2)
      }
      get IK() {
        return 0 === this.issues.length
      }
      flatten() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : SS => SS.message;
        const HS = {},
          gS = [];
        for (const tS of this.issues) tS.path.length > 0 ? (HS[tS.path[0]] = HS[tS.path[0]] || [], HS[tS.path[0]].push(SS(tS))) : gS.push(SS(tS));
        return {
          formErrors: gS,
          fieldErrors: HS
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    aS.create = SS => new aS(SS);
    const KS = (SS, HS) => {
      let gS;
      switch (SS.code) {
        case kS.invalid_type:
          gS = SS.received === IS.undefined ? "Required" : `Expected ${SS.expected}, received ${SS.received}`;
          break;
        case kS.invalid_literal:
          gS = `Invalid literal value, expected ${JSON.stringify(SS.expected,NS.jsonStringifyReplacer)}`;
          break;
        case kS.unrecognized_keys:
          gS = `Unrecognized key(s) in object: ${NS.joinValues(SS.keys,", ")}`;
          break;
        case kS.invalid_union:
          gS = "Invalid input";
          break;
        case kS.invalid_union_discriminator:
          gS = `Invalid discriminator value. Expected ${NS.joinValues(SS.options)}`;
          break;
        case kS.invalid_enum_value:
          gS = `Invalid enum value. Expected ${NS.joinValues(SS.options)}, received '${SS.received}'`;
          break;
        case kS.invalid_arguments:
          gS = "Invalid function arguments";
          break;
        case kS.invalid_return_type:
          gS = "Invalid function return type";
          break;
        case kS.invalid_date:
          gS = "Invalid date";
          break;
        case kS.invalid_string:
          "object" === typeof SS.validation ? "includes" in SS.validation ? (gS = `Invalid input: must include "${SS.validation.includes}"`, "number" === typeof SS.validation.position && (gS = `${gS} at one or more positions greater than or equal to ${SS.validation.position}`)) : "startsWith" in SS.validation ? gS = `Invalid input: must start with "${SS.validation.startsWith}"` : "endsWith" in SS.validation ? gS = `Invalid input: must end with "${SS.validation.endsWith}"` : NS.assertNever(SS.validation) : gS = "regex" !== SS.validation ? `Invalid ${SS.validation}` : "Invalid";
          break;
        case kS.too_small:
          gS = "array" === SS.type ? `Array must contain ${SS.exact?"exactly":SS.inclusive?"at least":"more than"} ${SS.minimum} element(s)` : "string" === SS.type ? `String must contain ${SS.exact?"exactly":SS.inclusive?"at least":"over"} ${SS.minimum} character(s)` : "number" === SS.type ? `Number must be ${SS.exact?"exactly equal to ":SS.inclusive?"greater than or equal to ":"greater than "}${SS.minimum}` : "date" === SS.type ? `Date must be ${SS.exact?"exactly equal to ":SS.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(SS.minimum))}` : "Invalid input";
          break;
        case kS.too_big:
          gS = "array" === SS.type ? `Array must contain ${SS.exact?"exactly":SS.inclusive?"at most":"less than"} ${SS.maximum} element(s)` : "string" === SS.type ? `String must contain ${SS.exact?"exactly":SS.inclusive?"at most":"under"} ${SS.maximum} character(s)` : "number" === SS.type ? `Number must be ${SS.exact?"exactly":SS.inclusive?"less than or equal to":"less than"} ${SS.maximum}` : "bigint" === SS.type ? `BigInt must be ${SS.exact?"exactly":SS.inclusive?"less than or equal to":"less than"} ${SS.maximum}` : "date" === SS.type ? `Date must be ${SS.exact?"exactly":SS.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(SS.maximum))}` : "Invalid input";
          break;
        case kS.custom:
          gS = "Invalid input";
          break;
        case kS.invalid_intersection_types:
          gS = "Intersection results could not be merged";
          break;
        case kS.not_multiple_of:
          gS = `Number must be a multiple of ${SS.multipleOf}`;
          break;
        case kS.not_finite:
          gS = "Number must be finite";
          break;
        default:
          gS = HS.defaultError, NS.assertNever(SS)
      }
      return {
        message: gS
      }
    };
    let jS = KS;

    function GS() {
      return jS
    }
    const CS = SS => {
      const {
        data: HS,
        path: gS,
        errorMaps: tS,
        issueData: bS
      } = SS, XS = [...gS, ...bS.path || []], xS = {
        ...bS,
        path: XS
      };
      let NS = "";
      const qS = tS.filter((SS => !!SS)).slice().reverse();
      for (const uS of qS) NS = uS(xS, {
        data: HS,
        defaultError: NS
      }).message;
      return {
        ...bS,
        path: XS,
        message: bS.message || NS
      }
    };

    function nS(SS, HS) {
      const gS = CS({
        issueData: HS,
        data: SS.data,
        path: SS.path,
        errorMaps: [SS.common.contextualErrorMap, SS.schemaErrorMap, GS(), KS].filter((SS => !!SS))
      });
      SS.common.issues.push(gS)
    }
    class PS {
      constructor() {
        this.value = "valid"
      }
      pK() {
        "valid" === this.value && (this.value = "pK")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(SS, HS) {
        const gS = [];
        for (const tS of HS) {
          if ("aborted" === tS.status) return QS;
          "pK" === tS.status && SS.pK(), gS.push(tS.value)
        }
        return {
          status: SS.value,
          value: gS
        }
      }
      static async mergeObjectAsync(SS, HS) {
        const gS = [];
        for (const tS of HS) gS.push({
          key: await tS.key,
          value: await tS.value
        });
        return PS.mergeObjectSync(SS, gS)
      }
      static mergeObjectSync(SS, HS) {
        const gS = {};
        for (const tS of HS) {
          const {
            key: HS,
            value: bS
          } = tS;
          if ("aborted" === HS.status) return QS;
          if ("aborted" === bS.status) return QS;
          "pK" === HS.status && SS.pK(), "pK" === bS.status && SS.pK(), "__proto__" === HS.value || "undefined" === typeof bS.value && !tS.alwaysSet || (gS[HS.value] = bS.value)
        }
        return {
          status: SS.value,
          value: gS
        }
      }
    }
    const QS = Object.freeze({
        status: "aborted"
      }),
      DS = SS => ({
        status: "pK",
        value: SS
      }),
      wS = SS => ({
        status: "valid",
        value: SS
      }),
      hS = SS => "aborted" === SS.status,
      ZS = SS => "pK" === SS.status,
      JS = SS => "valid" === SS.status,
      OS = SS => "undefined" !== typeof Promise && SS instanceof Promise;
    var dS;
    ! function(SS) {
      SS.errToObj = SS => "string" === typeof SS ? {
        message: SS
      } : SS || {}, SS.toString = SS => "string" === typeof SS ? SS : null === SS || void 0 === SS ? void 0 : SS.message
    }(dS || (dS = {}));
    class cS {
      constructor(SS, HS, gS, tS) {
        this._cachedPath = [], this.parent = SS, this.data = HS, this._path = gS, this._key = tS
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const vS = (SS, HS) => {
      if (JS(HS)) return {
        success: !0,
        data: HS.value
      };
      if (!SS.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const HS = new aS(SS.common.issues);
          return this._error = HS, this._error
        }
      }
    };

    function ES(SS) {
      if (!SS) return {};
      const {
        errorMap: HS,
        invalid_type_error: gS,
        required_error: tS,
        description: bS
      } = SS;
      if (HS && (gS || tS)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (HS) return {
        errorMap: HS,
        description: bS
      };
      return {
        errorMap: (SS, HS) => "invalid_type" !== SS.code ? {
          message: HS.defaultError
        } : "undefined" === typeof HS.data ? {
          message: null !== tS && void 0 !== tS ? tS : HS.defaultError
        } : {
          message: null !== gS && void 0 !== gS ? gS : HS.defaultError
        },
        description: bS
      }
    }
    class LS {
      constructor(SS) {
        this.spa = this.safeParseAsync, this._def = SS, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(SS) {
        return fS(SS.data)
      }
      _getOrReturnCtx(SS, HS) {
        return HS || {
          common: SS.parent.common,
          data: SS.data,
          parsedType: fS(SS.data),
          schemaErrorMap: this._def.errorMap,
          path: SS.path,
          parent: SS.parent
        }
      }
      _processInputParams(SS) {
        return {
          status: new PS,
          ctx: {
            common: SS.parent.common,
            data: SS.data,
            parsedType: fS(SS.data),
            schemaErrorMap: this._def.errorMap,
            path: SS.path,
            parent: SS.parent
          }
        }
      }
      _parseSync(SS) {
        const HS = this._parse(SS);
        if (OS(HS)) throw new Error("Synchronous parse encountered promise.");
        return HS
      }
      _parseAsync(SS) {
        const HS = this._parse(SS);
        return Promise.resolve(HS)
      }
      parse(SS, HS) {
        const gS = this.safeParse(SS, HS);
        if (gS.success) return gS.data;
        throw gS.error
      }
      safeParse(SS, HS) {
        var gS;
        const tS = {
            common: {
              issues: [],
              async: null !== (gS = null === HS || void 0 === HS ? void 0 : HS.async) && void 0 !== gS && gS,
              contextualErrorMap: null === HS || void 0 === HS ? void 0 : HS.errorMap
            },
            path: (null === HS || void 0 === HS ? void 0 : HS.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: SS,
            parsedType: fS(SS)
          },
          bS = this._parseSync({
            data: SS,
            path: tS.path,
            parent: tS
          });
        return vS(tS, bS)
      }
      async parseAsync(SS, HS) {
        const gS = await this.safeParseAsync(SS, HS);
        if (gS.success) return gS.data;
        throw gS.error
      }
      async safeParseAsync(SS, HS) {
        const gS = {
            common: {
              issues: [],
              contextualErrorMap: null === HS || void 0 === HS ? void 0 : HS.errorMap,
              async: !0
            },
            path: (null === HS || void 0 === HS ? void 0 : HS.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: SS,
            parsedType: fS(SS)
          },
          tS = this._parse({
            data: SS,
            path: gS.path,
            parent: gS
          }),
          bS = await (OS(tS) ? tS : Promise.resolve(tS));
        return vS(gS, bS)
      }
      refine(SS, HS) {
        const gS = SS => "string" === typeof HS || "undefined" === typeof HS ? {
          message: HS
        } : "function" === typeof HS ? HS(SS) : HS;
        return this._refinement(((HS, tS) => {
          const bS = SS(HS),
            XS = () => tS.addIssue({
              code: kS.custom,
              ...gS(HS)
            });
          return "undefined" !== typeof Promise && bS instanceof Promise ? bS.then((SS => !!SS || (XS(), !1))) : !!bS || (XS(), !1)
        }))
      }
      refinement(SS, HS) {
        return this._refinement(((gS, tS) => !!SS(gS) || (tS.addIssue("function" === typeof HS ? HS(gS, tS) : HS), !1)))
      }
      _refinement(SS) {
        return new QH({
          schema: this,
          typeName: YH.ZodEffects,
          effect: {
            type: "refinement",
            refinement: SS
          }
        })
      }
      superRefine(SS) {
        return this._refinement(SS)
      }
      optional() {
        return DH.create(this, this._def)
      }
      nullable() {
        return wH.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return HH.create(this, this._def)
      }
      promise() {
        return PH.create(this, this._def)
      }
      or(SS) {
        return bH.create([this, SS], this._def)
      }
      and(SS) {
        return qH.create(this, SS, this._def)
      }
      transform(SS) {
        return new QH({
          ...ES(this._def),
          schema: this,
          typeName: YH.ZodEffects,
          effect: {
            type: "transform",
            transform: SS
          }
        })
      }
      default (SS) {
        const HS = "function" === typeof SS ? SS : () => SS;
        return new hH({
          ...ES(this._def),
          innerType: this,
          defaultValue: HS,
          typeName: YH.ZodDefault
        })
      }
      brand() {
        return new dH({
          typeName: YH.ZodBranded,
          type: this,
          ...ES(this._def)
        })
      } catch (SS) {
        const HS = "function" === typeof SS ? SS : () => SS;
        return new ZH({
          ...ES(this._def),
          innerType: this,
          catchValue: HS,
          typeName: YH.ZodCatch
        })
      }
      describe(SS) {
        return new(0, this.constructor)({
          ...this._def,
          description: SS
        })
      }
      pipe(SS) {
        return cH.create(this, SS)
      }
      readonly() {
        return vH.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const YS = /^c[^\s-]{8,}$/i,
      AS = /^[a-z][a-z0-9]*$/,
      yS = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      VS = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      iS = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let WS;
    const zS = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      US = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class pS extends LS {
      _parse(SS) {
        this._def.coerce && (SS.data = String(SS.data));
        if (this._getType(SS) !== IS.string) {
          const HS = this._getOrReturnCtx(SS);
          return nS(HS, {
            code: kS.invalid_type,
            expected: IS.string,
            received: HS.parsedType
          }), QS
        }
        const HS = new PS;
        let gS;
        for (const qS of this._def.checks)
          if ("min" === qS.kind) SS.data.length < qS.value && (gS = this._getOrReturnCtx(SS, gS), nS(gS, {
            code: kS.too_small,
            minimum: qS.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: qS.message
          }), HS.pK());
          else if ("max" === qS.kind) SS.data.length > qS.value && (gS = this._getOrReturnCtx(SS, gS), nS(gS, {
          code: kS.too_big,
          maximum: qS.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: qS.message
        }), HS.pK());
        else if ("length" === qS.kind) {
          const tS = SS.data.length > qS.value,
            bS = SS.data.length < qS.value;
          (tS || bS) && (gS = this._getOrReturnCtx(SS, gS), tS ? nS(gS, {
            code: kS.too_big,
            maximum: qS.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: qS.message
          }) : bS && nS(gS, {
            code: kS.too_small,
            minimum: qS.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: qS.message
          }), HS.pK())
        } else if ("email" === qS.kind) iS.test(SS.data) || (gS = this._getOrReturnCtx(SS, gS), nS(gS, {
          validation: "email",
          code: kS.invalid_string,
          message: qS.message
        }), HS.pK());
        else if ("emoji" === qS.kind) WS || (WS = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), WS.test(SS.data) || (gS = this._getOrReturnCtx(SS, gS), nS(gS, {
          validation: "emoji",
          code: kS.invalid_string,
          message: qS.message
        }), HS.pK());
        else if ("uuid" === qS.kind) VS.test(SS.data) || (gS = this._getOrReturnCtx(SS, gS), nS(gS, {
          validation: "uuid",
          code: kS.invalid_string,
          message: qS.message
        }), HS.pK());
        else if ("cuid" === qS.kind) YS.test(SS.data) || (gS = this._getOrReturnCtx(SS, gS), nS(gS, {
          validation: "cuid",
          code: kS.invalid_string,
          message: qS.message
        }), HS.pK());
        else if ("cuid2" === qS.kind) AS.test(SS.data) || (gS = this._getOrReturnCtx(SS, gS), nS(gS, {
          validation: "cuid2",
          code: kS.invalid_string,
          message: qS.message
        }), HS.pK());
        else if ("ulid" === qS.kind) yS.test(SS.data) || (gS = this._getOrReturnCtx(SS, gS), nS(gS, {
          validation: "ulid",
          code: kS.invalid_string,
          message: qS.message
        }), HS.pK());
        else if ("url" === qS.kind) try {
          new URL(SS.data)
        } catch (xS) {
          gS = this._getOrReturnCtx(SS, gS), nS(gS, {
            validation: "url",
            code: kS.invalid_string,
            message: qS.message
          }), HS.pK()
        } else if ("regex" === qS.kind) {
          qS.regex.lastIndex = 0;
          qS.regex.test(SS.data) || (gS = this._getOrReturnCtx(SS, gS), nS(gS, {
            validation: "regex",
            code: kS.invalid_string,
            message: qS.message
          }), HS.pK())
        } else if ("trim" === qS.kind) SS.data = SS.data.trim();
        else if ("includes" === qS.kind) SS.data.includes(qS.value, qS.position) || (gS = this._getOrReturnCtx(SS, gS), nS(gS, {
          code: kS.invalid_string,
          validation: {
            includes: qS.value,
            position: qS.position
          },
          message: qS.message
        }), HS.pK());
        else if ("toLowerCase" === qS.kind) SS.data = SS.data.toLowerCase();
        else if ("toUpperCase" === qS.kind) SS.data = SS.data.toUpperCase();
        else if ("startsWith" === qS.kind) SS.data.startsWith(qS.value) || (gS = this._getOrReturnCtx(SS, gS), nS(gS, {
          code: kS.invalid_string,
          validation: {
            startsWith: qS.value
          },
          message: qS.message
        }), HS.pK());
        else if ("endsWith" === qS.kind) SS.data.endsWith(qS.value) || (gS = this._getOrReturnCtx(SS, gS), nS(gS, {
          code: kS.invalid_string,
          validation: {
            endsWith: qS.value
          },
          message: qS.message
        }), HS.pK());
        else if ("datetime" === qS.kind) {
          ((XS = qS).precision ? XS.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${XS.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${XS.precision}}Z$`) : 0 === XS.precision ? XS.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : XS.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(SS.data) || (gS = this._getOrReturnCtx(SS, gS), nS(gS, {
            code: kS.invalid_string,
            validation: "datetime",
            message: qS.message
          }), HS.pK())
        } else "ip" === qS.kind ? (tS = SS.data, ("v4" !== (bS = qS.version) && bS || !zS.test(tS)) && ("v6" !== bS && bS || !US.test(tS)) && (gS = this._getOrReturnCtx(SS, gS), nS(gS, {
          validation: "ip",
          code: kS.invalid_string,
          message: qS.message
        }), HS.pK())) : NS.assertNever(qS);
        var tS, bS, XS;
        return {
          status: HS.value,
          value: SS.data
        }
      }
      _regex(SS, HS, gS) {
        return this.refinement((HS => SS.test(HS)), {
          validation: HS,
          code: kS.invalid_string,
          ...dS.errToObj(gS)
        })
      }
      _addCheck(SS) {
        return new pS({
          ...this._def,
          checks: [...this._def.checks, SS]
        })
      }
      email(SS) {
        return this._addCheck({
          kind: "email",
          ...dS.errToObj(SS)
        })
      }
      url(SS) {
        return this._addCheck({
          kind: "url",
          ...dS.errToObj(SS)
        })
      }
      emoji(SS) {
        return this._addCheck({
          kind: "emoji",
          ...dS.errToObj(SS)
        })
      }
      uuid(SS) {
        return this._addCheck({
          kind: "uuid",
          ...dS.errToObj(SS)
        })
      }
      cuid(SS) {
        return this._addCheck({
          kind: "cuid",
          ...dS.errToObj(SS)
        })
      }
      cuid2(SS) {
        return this._addCheck({
          kind: "cuid2",
          ...dS.errToObj(SS)
        })
      }
      ulid(SS) {
        return this._addCheck({
          kind: "ulid",
          ...dS.errToObj(SS)
        })
      }
      ip(SS) {
        return this._addCheck({
          kind: "ip",
          ...dS.errToObj(SS)
        })
      }
      datetime(SS) {
        var HS;
        return "string" === typeof SS ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: SS
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === SS || void 0 === SS ? void 0 : SS.precision) ? null : null === SS || void 0 === SS ? void 0 : SS.precision,
          offset: null !== (HS = null === SS || void 0 === SS ? void 0 : SS.offset) && void 0 !== HS && HS,
          ...dS.errToObj(null === SS || void 0 === SS ? void 0 : SS.message)
        })
      }
      regex(SS, HS) {
        return this._addCheck({
          kind: "regex",
          regex: SS,
          ...dS.errToObj(HS)
        })
      }
      includes(SS, HS) {
        return this._addCheck({
          kind: "includes",
          value: SS,
          position: null === HS || void 0 === HS ? void 0 : HS.position,
          ...dS.errToObj(null === HS || void 0 === HS ? void 0 : HS.message)
        })
      }
      startsWith(SS, HS) {
        return this._addCheck({
          kind: "startsWith",
          value: SS,
          ...dS.errToObj(HS)
        })
      }
      endsWith(SS, HS) {
        return this._addCheck({
          kind: "endsWith",
          value: SS,
          ...dS.errToObj(HS)
        })
      }
      min(SS, HS) {
        return this._addCheck({
          kind: "min",
          value: SS,
          ...dS.errToObj(HS)
        })
      }
      max(SS, HS) {
        return this._addCheck({
          kind: "max",
          value: SS,
          ...dS.errToObj(HS)
        })
      }
      length(SS, HS) {
        return this._addCheck({
          kind: "length",
          value: SS,
          ...dS.errToObj(HS)
        })
      }
      nonempty(SS) {
        return this.min(1, dS.errToObj(SS))
      }
      trim() {
        return new pS({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new pS({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new pS({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((SS => "datetime" === SS.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((SS => "email" === SS.kind))
      }
      get isURL() {
        return !!this._def.checks.find((SS => "url" === SS.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((SS => "emoji" === SS.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((SS => "uuid" === SS.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((SS => "cuid" === SS.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((SS => "cuid2" === SS.kind))
      }
      get isULID() {
        return !!this._def.checks.find((SS => "ulid" === SS.kind))
      }
      get isIP() {
        return !!this._def.checks.find((SS => "ip" === SS.kind))
      }
      get minLength() {
        let SS = null;
        for (const HS of this._def.checks) "min" === HS.kind && (null === SS || HS.value > SS) && (SS = HS.value);
        return SS
      }
      get maxLength() {
        let SS = null;
        for (const HS of this._def.checks) "max" === HS.kind && (null === SS || HS.value < SS) && (SS = HS.value);
        return SS
      }
    }

    function sS(SS, HS) {
      const gS = (SS.toString().split(".")[1] || "").length,
        tS = (HS.toString().split(".")[1] || "").length,
        bS = gS > tS ? gS : tS;
      return parseInt(SS.toFixed(bS).replace(".", "")) % parseInt(HS.toFixed(bS).replace(".", "")) / Math.pow(10, bS)
    }
    pS.create = SS => {
      var HS;
      return new pS({
        checks: [],
        typeName: YH.ZodString,
        coerce: null !== (HS = null === SS || void 0 === SS ? void 0 : SS.coerce) && void 0 !== HS && HS,
        ...ES(SS)
      })
    };
    class BS extends LS {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(SS) {
        this._def.coerce && (SS.data = Number(SS.data));
        if (this._getType(SS) !== IS.number) {
          const HS = this._getOrReturnCtx(SS);
          return nS(HS, {
            code: kS.invalid_type,
            expected: IS.number,
            received: HS.parsedType
          }), QS
        }
        let HS;
        const gS = new PS;
        for (const tS of this._def.checks)
          if ("int" === tS.kind) NS.isInteger(SS.data) || (HS = this._getOrReturnCtx(SS, HS), nS(HS, {
            code: kS.invalid_type,
            expected: "integer",
            received: "float",
            message: tS.message
          }), gS.pK());
          else if ("min" === tS.kind) {
          (tS.inclusive ? SS.data < tS.value : SS.data <= tS.value) && (HS = this._getOrReturnCtx(SS, HS), nS(HS, {
            code: kS.too_small,
            minimum: tS.value,
            type: "number",
            inclusive: tS.inclusive,
            exact: !1,
            message: tS.message
          }), gS.pK())
        } else if ("max" === tS.kind) {
          (tS.inclusive ? SS.data > tS.value : SS.data >= tS.value) && (HS = this._getOrReturnCtx(SS, HS), nS(HS, {
            code: kS.too_big,
            maximum: tS.value,
            type: "number",
            inclusive: tS.inclusive,
            exact: !1,
            message: tS.message
          }), gS.pK())
        } else "multipleOf" === tS.kind ? 0 !== sS(SS.data, tS.value) && (HS = this._getOrReturnCtx(SS, HS), nS(HS, {
          code: kS.not_multiple_of,
          multipleOf: tS.value,
          message: tS.message
        }), gS.pK()) : "finite" === tS.kind ? Number.isFinite(SS.data) || (HS = this._getOrReturnCtx(SS, HS), nS(HS, {
          code: kS.not_finite,
          message: tS.message
        }), gS.pK()) : NS.assertNever(tS);
        return {
          status: gS.value,
          value: SS.data
        }
      }
      gte(SS, HS) {
        return this.setLimit("min", SS, !0, dS.toString(HS))
      }
      gt(SS, HS) {
        return this.setLimit("min", SS, !1, dS.toString(HS))
      }
      lte(SS, HS) {
        return this.setLimit("max", SS, !0, dS.toString(HS))
      }
      lt(SS, HS) {
        return this.setLimit("max", SS, !1, dS.toString(HS))
      }
      setLimit(SS, HS, gS, tS) {
        return new BS({
          ...this._def,
          checks: [...this._def.checks, {
            kind: SS,
            value: HS,
            inclusive: gS,
            message: dS.toString(tS)
          }]
        })
      }
      _addCheck(SS) {
        return new BS({
          ...this._def,
          checks: [...this._def.checks, SS]
        })
      }
      int(SS) {
        return this._addCheck({
          kind: "int",
          message: dS.toString(SS)
        })
      }
      positive(SS) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: dS.toString(SS)
        })
      }
      negative(SS) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: dS.toString(SS)
        })
      }
      nonpositive(SS) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: dS.toString(SS)
        })
      }
      nonnegative(SS) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: dS.toString(SS)
        })
      }
      multipleOf(SS, HS) {
        return this._addCheck({
          kind: "multipleOf",
          value: SS,
          message: dS.toString(HS)
        })
      }
      finite(SS) {
        return this._addCheck({
          kind: "finite",
          message: dS.toString(SS)
        })
      }
      safe(SS) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: dS.toString(SS)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: dS.toString(SS)
        })
      }
      get minValue() {
        let SS = null;
        for (const HS of this._def.checks) "min" === HS.kind && (null === SS || HS.value > SS) && (SS = HS.value);
        return SS
      }
      get maxValue() {
        let SS = null;
        for (const HS of this._def.checks) "max" === HS.kind && (null === SS || HS.value < SS) && (SS = HS.value);
        return SS
      }
      get isInt() {
        return !!this._def.checks.find((SS => "int" === SS.kind || "multipleOf" === SS.kind && NS.isInteger(SS.value)))
      }
      get isFinite() {
        let SS = null,
          HS = null;
        for (const gS of this._def.checks) {
          if ("finite" === gS.kind || "int" === gS.kind || "multipleOf" === gS.kind) return !0;
          "min" === gS.kind ? (null === HS || gS.value > HS) && (HS = gS.value) : "max" === gS.kind && (null === SS || gS.value < SS) && (SS = gS.value)
        }
        return Number.isFinite(HS) && Number.isFinite(SS)
      }
    }
    BS.create = SS => new BS({
      checks: [],
      typeName: YH.ZodNumber,
      coerce: (null === SS || void 0 === SS ? void 0 : SS.coerce) || !1,
      ...ES(SS)
    });
    class MS extends LS {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(SS) {
        this._def.coerce && (SS.data = BigInt(SS.data));
        if (this._getType(SS) !== IS.bigint) {
          const HS = this._getOrReturnCtx(SS);
          return nS(HS, {
            code: kS.invalid_type,
            expected: IS.bigint,
            received: HS.parsedType
          }), QS
        }
        let HS;
        const gS = new PS;
        for (const tS of this._def.checks)
          if ("min" === tS.kind) {
            (tS.inclusive ? SS.data < tS.value : SS.data <= tS.value) && (HS = this._getOrReturnCtx(SS, HS), nS(HS, {
              code: kS.too_small,
              type: "bigint",
              minimum: tS.value,
              inclusive: tS.inclusive,
              message: tS.message
            }), gS.pK())
          } else if ("max" === tS.kind) {
          (tS.inclusive ? SS.data > tS.value : SS.data >= tS.value) && (HS = this._getOrReturnCtx(SS, HS), nS(HS, {
            code: kS.too_big,
            type: "bigint",
            maximum: tS.value,
            inclusive: tS.inclusive,
            message: tS.message
          }), gS.pK())
        } else "multipleOf" === tS.kind ? SS.data % tS.value !== BigInt(0) && (HS = this._getOrReturnCtx(SS, HS), nS(HS, {
          code: kS.not_multiple_of,
          multipleOf: tS.value,
          message: tS.message
        }), gS.pK()) : NS.assertNever(tS);
        return {
          status: gS.value,
          value: SS.data
        }
      }
      gte(SS, HS) {
        return this.setLimit("min", SS, !0, dS.toString(HS))
      }
      gt(SS, HS) {
        return this.setLimit("min", SS, !1, dS.toString(HS))
      }
      lte(SS, HS) {
        return this.setLimit("max", SS, !0, dS.toString(HS))
      }
      lt(SS, HS) {
        return this.setLimit("max", SS, !1, dS.toString(HS))
      }
      setLimit(SS, HS, gS, tS) {
        return new MS({
          ...this._def,
          checks: [...this._def.checks, {
            kind: SS,
            value: HS,
            inclusive: gS,
            message: dS.toString(tS)
          }]
        })
      }
      _addCheck(SS) {
        return new MS({
          ...this._def,
          checks: [...this._def.checks, SS]
        })
      }
      positive(SS) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: dS.toString(SS)
        })
      }
      negative(SS) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: dS.toString(SS)
        })
      }
      nonpositive(SS) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: dS.toString(SS)
        })
      }
      nonnegative(SS) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: dS.toString(SS)
        })
      }
      multipleOf(SS, HS) {
        return this._addCheck({
          kind: "multipleOf",
          value: SS,
          message: dS.toString(HS)
        })
      }
      get minValue() {
        let SS = null;
        for (const HS of this._def.checks) "min" === HS.kind && (null === SS || HS.value > SS) && (SS = HS.value);
        return SS
      }
      get maxValue() {
        let SS = null;
        for (const HS of this._def.checks) "max" === HS.kind && (null === SS || HS.value < SS) && (SS = HS.value);
        return SS
      }
    }
    MS.create = SS => {
      var HS;
      return new MS({
        checks: [],
        typeName: YH.ZodBigInt,
        coerce: null !== (HS = null === SS || void 0 === SS ? void 0 : SS.coerce) && void 0 !== HS && HS,
        ...ES(SS)
      })
    };
    class FS extends LS {
      _parse(SS) {
        this._def.coerce && (SS.data = Boolean(SS.data));
        if (this._getType(SS) !== IS.boolean) {
          const HS = this._getOrReturnCtx(SS);
          return nS(HS, {
            code: kS.invalid_type,
            expected: IS.boolean,
            received: HS.parsedType
          }), QS
        }
        return wS(SS.data)
      }
    }
    FS.create = SS => new FS({
      typeName: YH.ZodBoolean,
      coerce: (null === SS || void 0 === SS ? void 0 : SS.coerce) || !1,
      ...ES(SS)
    });
    class RS extends LS {
      _parse(SS) {
        this._def.coerce && (SS.data = new Date(SS.data));
        if (this._getType(SS) !== IS.date) {
          const HS = this._getOrReturnCtx(SS);
          return nS(HS, {
            code: kS.invalid_type,
            expected: IS.date,
            received: HS.parsedType
          }), QS
        }
        if (isNaN(SS.data.getTime())) {
          return nS(this._getOrReturnCtx(SS), {
            code: kS.invalid_date
          }), QS
        }
        const HS = new PS;
        let gS;
        for (const tS of this._def.checks) "min" === tS.kind ? SS.data.getTime() < tS.value && (gS = this._getOrReturnCtx(SS, gS), nS(gS, {
          code: kS.too_small,
          message: tS.message,
          inclusive: !0,
          exact: !1,
          minimum: tS.value,
          type: "date"
        }), HS.pK()) : "max" === tS.kind ? SS.data.getTime() > tS.value && (gS = this._getOrReturnCtx(SS, gS), nS(gS, {
          code: kS.too_big,
          message: tS.message,
          inclusive: !0,
          exact: !1,
          maximum: tS.value,
          type: "date"
        }), HS.pK()) : NS.assertNever(tS);
        return {
          status: HS.value,
          value: new Date(SS.data.getTime())
        }
      }
      _addCheck(SS) {
        return new RS({
          ...this._def,
          checks: [...this._def.checks, SS]
        })
      }
      min(SS, HS) {
        return this._addCheck({
          kind: "min",
          value: SS.getTime(),
          message: dS.toString(HS)
        })
      }
      max(SS, HS) {
        return this._addCheck({
          kind: "max",
          value: SS.getTime(),
          message: dS.toString(HS)
        })
      }
      get minDate() {
        let SS = null;
        for (const HS of this._def.checks) "min" === HS.kind && (null === SS || HS.value > SS) && (SS = HS.value);
        return null != SS ? new Date(SS) : null
      }
      get maxDate() {
        let SS = null;
        for (const HS of this._def.checks) "max" === HS.kind && (null === SS || HS.value < SS) && (SS = HS.value);
        return null != SS ? new Date(SS) : null
      }
    }
    RS.create = SS => new RS({
      checks: [],
      coerce: (null === SS || void 0 === SS ? void 0 : SS.coerce) || !1,
      typeName: YH.ZodDate,
      ...ES(SS)
    });
    class TS extends LS {
      _parse(SS) {
        if (this._getType(SS) !== IS.symbol) {
          const HS = this._getOrReturnCtx(SS);
          return nS(HS, {
            code: kS.invalid_type,
            expected: IS.symbol,
            received: HS.parsedType
          }), QS
        }
        return wS(SS.data)
      }
    }
    TS.create = SS => new TS({
      typeName: YH.ZodSymbol,
      ...ES(SS)
    });
    class oS extends LS {
      _parse(SS) {
        if (this._getType(SS) !== IS.undefined) {
          const HS = this._getOrReturnCtx(SS);
          return nS(HS, {
            code: kS.invalid_type,
            expected: IS.undefined,
            received: HS.parsedType
          }), QS
        }
        return wS(SS.data)
      }
    }
    oS.create = SS => new oS({
      typeName: YH.ZodUndefined,
      ...ES(SS)
    });
    class lS extends LS {
      _parse(SS) {
        if (this._getType(SS) !== IS.null) {
          const HS = this._getOrReturnCtx(SS);
          return nS(HS, {
            code: kS.invalid_type,
            expected: IS.null,
            received: HS.parsedType
          }), QS
        }
        return wS(SS.data)
      }
    }
    lS.create = SS => new lS({
      typeName: YH.ZodNull,
      ...ES(SS)
    });
    class mS extends LS {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(SS) {
        return wS(SS.data)
      }
    }
    mS.create = SS => new mS({
      typeName: YH.ZodAny,
      ...ES(SS)
    });
    class eS extends LS {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(SS) {
        return wS(SS.data)
      }
    }
    eS.create = SS => new eS({
      typeName: YH.ZodUnknown,
      ...ES(SS)
    });
    class rS extends LS {
      _parse(SS) {
        const HS = this._getOrReturnCtx(SS);
        return nS(HS, {
          code: kS.invalid_type,
          expected: IS.never,
          received: HS.parsedType
        }), QS
      }
    }
    rS.create = SS => new rS({
      typeName: YH.ZodNever,
      ...ES(SS)
    });
    class SH extends LS {
      _parse(SS) {
        if (this._getType(SS) !== IS.undefined) {
          const HS = this._getOrReturnCtx(SS);
          return nS(HS, {
            code: kS.invalid_type,
            expected: IS.void,
            received: HS.parsedType
          }), QS
        }
        return wS(SS.data)
      }
    }
    SH.create = SS => new SH({
      typeName: YH.ZodVoid,
      ...ES(SS)
    });
    class HH extends LS {
      _parse(SS) {
        const {
          ctx: HS,
          status: gS
        } = this._processInputParams(SS), tS = this._def;
        if (HS.parsedType !== IS.array) return nS(HS, {
          code: kS.invalid_type,
          expected: IS.array,
          received: HS.parsedType
        }), QS;
        if (null !== tS.exactLength) {
          const SS = HS.data.length > tS.exactLength.value,
            bS = HS.data.length < tS.exactLength.value;
          (SS || bS) && (nS(HS, {
            code: SS ? kS.too_big : kS.too_small,
            minimum: bS ? tS.exactLength.value : void 0,
            maximum: SS ? tS.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: tS.exactLength.message
          }), gS.pK())
        }
        if (null !== tS.minLength && HS.data.length < tS.minLength.value && (nS(HS, {
            code: kS.too_small,
            minimum: tS.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: tS.minLength.message
          }), gS.pK()), null !== tS.maxLength && HS.data.length > tS.maxLength.value && (nS(HS, {
            code: kS.too_big,
            maximum: tS.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: tS.maxLength.message
          }), gS.pK()), HS.common.async) return Promise.all([...HS.data].map(((SS, gS) => tS.type._parseAsync(new cS(HS, SS, HS.path, gS))))).then((SS => PS.mergeArray(gS, SS)));
        const bS = [...HS.data].map(((SS, gS) => tS.type._parseSync(new cS(HS, SS, HS.path, gS))));
        return PS.mergeArray(gS, bS)
      }
      get element() {
        return this._def.type
      }
      min(SS, HS) {
        return new HH({
          ...this._def,
          minLength: {
            value: SS,
            message: dS.toString(HS)
          }
        })
      }
      max(SS, HS) {
        return new HH({
          ...this._def,
          maxLength: {
            value: SS,
            message: dS.toString(HS)
          }
        })
      }
      length(SS, HS) {
        return new HH({
          ...this._def,
          exactLength: {
            value: SS,
            message: dS.toString(HS)
          }
        })
      }
      nonempty(SS) {
        return this.min(1, SS)
      }
    }

    function gH(SS) {
      if (SS instanceof tH) {
        const HS = {};
        for (const gS in SS.shape) {
          const tS = SS.shape[gS];
          HS[gS] = DH.create(gH(tS))
        }
        return new tH({
          ...SS._def,
          shape: () => HS
        })
      }
      return SS instanceof HH ? new HH({
        ...SS._def,
        type: gH(SS.element)
      }) : SS instanceof DH ? DH.create(gH(SS.unwrap())) : SS instanceof wH ? wH.create(gH(SS.unwrap())) : SS instanceof uH ? uH.create(SS.items.map((SS => gH(SS)))) : SS
    }
    HH.create = (SS, HS) => new HH({
      type: SS,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: YH.ZodArray,
      ...ES(HS)
    });
    class tH extends LS {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const SS = this._def.shape(),
          HS = NS.objectKeys(SS);
        return this._cached = {
          shape: SS,
          keys: HS
        }
      }
      _parse(SS) {
        if (this._getType(SS) !== IS.object) {
          const HS = this._getOrReturnCtx(SS);
          return nS(HS, {
            code: kS.invalid_type,
            expected: IS.object,
            received: HS.parsedType
          }), QS
        }
        const {
          status: HS,
          ctx: gS
        } = this._processInputParams(SS), {
          shape: tS,
          keys: bS
        } = this._getCached(), XS = [];
        if (!(this._def.catchall instanceof rS && "strip" === this._def.unknownKeys))
          for (const NS in gS.data) bS.includes(NS) || XS.push(NS);
        const xS = [];
        for (const NS of bS) {
          const SS = tS[NS],
            HS = gS.data[NS];
          xS.push({
            key: {
              status: "valid",
              value: NS
            },
            value: SS._parse(new cS(gS, HS, gS.path, NS)),
            alwaysSet: NS in gS.data
          })
        }
        if (this._def.catchall instanceof rS) {
          const SS = this._def.unknownKeys;
          if ("passthrough" === SS)
            for (const HS of XS) xS.push({
              key: {
                status: "valid",
                value: HS
              },
              value: {
                status: "valid",
                value: gS.data[HS]
              }
            });
          else if ("strict" === SS) XS.length > 0 && (nS(gS, {
            code: kS.unrecognized_keys,
            keys: XS
          }), HS.pK());
          else if ("strip" !== SS) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const SS = this._def.catchall;
          for (const HS of XS) {
            const tS = gS.data[HS];
            xS.push({
              key: {
                status: "valid",
                value: HS
              },
              value: SS._parse(new cS(gS, tS, gS.path, HS)),
              alwaysSet: HS in gS.data
            })
          }
        }
        return gS.common.async ? Promise.resolve().then((async () => {
          const SS = [];
          for (const HS of xS) {
            const gS = await HS.key;
            SS.push({
              key: gS,
              value: await HS.value,
              alwaysSet: HS.alwaysSet
            })
          }
          return SS
        })).then((SS => PS.mergeObjectSync(HS, SS))) : PS.mergeObjectSync(HS, xS)
      }
      get shape() {
        return this._def.shape()
      }
      strict(SS) {
        return dS.errToObj, new tH({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== SS ? {
            errorMap: (HS, gS) => {
              var tS, bS, XS, xS;
              const NS = null !== (XS = null === (bS = (tS = this._def).errorMap) || void 0 === bS ? void 0 : bS.call(tS, HS, gS).message) && void 0 !== XS ? XS : gS.defaultError;
              return "unrecognized_keys" === HS.code ? {
                message: null !== (xS = dS.errToObj(SS).message) && void 0 !== xS ? xS : NS
              } : {
                message: NS
              }
            }
          } : {}
        })
      }
      strip() {
        return new tH({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new tH({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(SS) {
        return new tH({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...SS
          })
        })
      }
      merge(SS) {
        return new tH({
          unknownKeys: SS._def.unknownKeys,
          catchall: SS._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...SS._def.shape()
          }),
          typeName: YH.ZodObject
        })
      }
      setKey(SS, HS) {
        return this.augment({
          [SS]: HS
        })
      }
      catchall(SS) {
        return new tH({
          ...this._def,
          catchall: SS
        })
      }
      Sa(SS) {
        const HS = {};
        return NS.objectKeys(SS).forEach((gS => {
          SS[gS] && this.shape[gS] && (HS[gS] = this.shape[gS])
        })), new tH({
          ...this._def,
          shape: () => HS
        })
      }
      omit(SS) {
        const HS = {};
        return NS.objectKeys(this.shape).forEach((gS => {
          SS[gS] || (HS[gS] = this.shape[gS])
        })), new tH({
          ...this._def,
          shape: () => HS
        })
      }
      deepPartial() {
        return gH(this)
      }
      partial(SS) {
        const HS = {};
        return NS.objectKeys(this.shape).forEach((gS => {
          const tS = this.shape[gS];
          SS && !SS[gS] ? HS[gS] = tS : HS[gS] = tS.optional()
        })), new tH({
          ...this._def,
          shape: () => HS
        })
      }
      required(SS) {
        const HS = {};
        return NS.objectKeys(this.shape).forEach((gS => {
          if (SS && !SS[gS]) HS[gS] = this.shape[gS];
          else {
            let SS = this.shape[gS];
            for (; SS instanceof DH;) SS = SS._def.innerType;
            HS[gS] = SS
          }
        })), new tH({
          ...this._def,
          shape: () => HS
        })
      }
      keyof() {
        return GH(NS.objectKeys(this.shape))
      }
    }
    tH.create = (SS, HS) => new tH({
      shape: () => SS,
      unknownKeys: "strip",
      catchall: rS.create(),
      typeName: YH.ZodObject,
      ...ES(HS)
    }), tH.strictCreate = (SS, HS) => new tH({
      shape: () => SS,
      unknownKeys: "strict",
      catchall: rS.create(),
      typeName: YH.ZodObject,
      ...ES(HS)
    }), tH.lazycreate = (SS, HS) => new tH({
      shape: SS,
      unknownKeys: "strip",
      catchall: rS.create(),
      typeName: YH.ZodObject,
      ...ES(HS)
    });
    class bH extends LS {
      _parse(SS) {
        const {
          ctx: HS
        } = this._processInputParams(SS), gS = this._def.options;
        if (HS.common.async) return Promise.all(gS.map((async SS => {
          const gS = {
            ...HS,
            common: {
              ...HS.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await SS._parseAsync({
              data: HS.data,
              path: HS.path,
              parent: gS
            }),
            ctx: gS
          }
        }))).then((function(SS) {
          for (const HS of SS)
            if ("valid" === HS.result.status) return HS.result;
          for (const tS of SS)
            if ("pK" === tS.result.status) return HS.common.issues.push(...tS.ctx.common.issues), tS.result;
          const gS = SS.map((SS => new aS(SS.ctx.common.issues)));
          return nS(HS, {
            code: kS.invalid_union,
            unionErrors: gS
          }), QS
        }));
        {
          let SS;
          const tS = [];
          for (const XS of gS) {
            const gS = {
                ...HS,
                common: {
                  ...HS.common,
                  issues: []
                },
                parent: null
              },
              bS = XS._parseSync({
                data: HS.data,
                path: HS.path,
                parent: gS
              });
            if ("valid" === bS.status) return bS;
            "pK" !== bS.status || SS || (SS = {
              result: bS,
              ctx: gS
            }), gS.common.issues.length && tS.push(gS.common.issues)
          }
          if (SS) return HS.common.issues.push(...SS.ctx.common.issues), SS.result;
          const bS = tS.map((SS => new aS(SS)));
          return nS(HS, {
            code: kS.invalid_union,
            unionErrors: bS
          }), QS
        }
      }
      get options() {
        return this._def.options
      }
    }
    bH.create = (SS, HS) => new bH({
      options: SS,
      typeName: YH.ZodUnion,
      ...ES(HS)
    });
    const XH = SS => SS instanceof KH ? XH(SS.schema) : SS instanceof QH ? XH(SS.innerType()) : SS instanceof jH ? [SS.value] : SS instanceof CH ? SS.options : SS instanceof nH ? Object.keys(SS.enum) : SS instanceof hH ? XH(SS._def.innerType) : SS instanceof oS ? [void 0] : SS instanceof lS ? [null] : null;
    class xH extends LS {
      _parse(SS) {
        const {
          ctx: HS
        } = this._processInputParams(SS);
        if (HS.parsedType !== IS.object) return nS(HS, {
          code: kS.invalid_type,
          expected: IS.object,
          received: HS.parsedType
        }), QS;
        const gS = this.discriminator,
          tS = HS.data[gS],
          bS = this.optionsMap.get(tS);
        return bS ? HS.common.async ? bS._parseAsync({
          data: HS.data,
          path: HS.path,
          parent: HS
        }) : bS._parseSync({
          data: HS.data,
          path: HS.path,
          parent: HS
        }) : (nS(HS, {
          code: kS.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [gS]
        }), QS)
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
      static create(SS, HS, gS) {
        const tS = new Map;
        for (const bS of HS) {
          const HS = XH(bS.shape[SS]);
          if (!HS) throw new Error(`A discriminator value for key \`${SS}\` could not be extracted from all schema options`);
          for (const gS of HS) {
            if (tS.has(gS)) throw new Error(`Discriminator property ${String(SS)} has duplicate value ${String(gS)}`);
            tS.set(gS, bS)
          }
        }
        return new xH({
          typeName: YH.ZodDiscriminatedUnion,
          discriminator: SS,
          options: HS,
          optionsMap: tS,
          ...ES(gS)
        })
      }
    }

    function NH(SS, HS) {
      const gS = fS(SS),
        tS = fS(HS);
      if (SS === HS) return {
        valid: !0,
        data: SS
      };
      if (gS === IS.object && tS === IS.object) {
        const gS = NS.objectKeys(HS),
          tS = NS.objectKeys(SS).filter((SS => -1 !== gS.indexOf(SS))),
          bS = {
            ...SS,
            ...HS
          };
        for (const XS of tS) {
          const gS = NH(SS[XS], HS[XS]);
          if (!gS.valid) return {
            valid: !1
          };
          bS[XS] = gS.data
        }
        return {
          valid: !0,
          data: bS
        }
      }
      if (gS === IS.array && tS === IS.array) {
        if (SS.length !== HS.length) return {
          valid: !1
        };
        const gS = [];
        for (let tS = 0; tS < SS.length; tS++) {
          const bS = NH(SS[tS], HS[tS]);
          if (!bS.valid) return {
            valid: !1
          };
          gS.push(bS.data)
        }
        return {
          valid: !0,
          data: gS
        }
      }
      return gS === IS.date && tS === IS.date && +SS === +HS ? {
        valid: !0,
        data: SS
      } : {
        valid: !1
      }
    }
    class qH extends LS {
      _parse(SS) {
        const {
          status: HS,
          ctx: gS
        } = this._processInputParams(SS), tS = (SS, tS) => {
          if (hS(SS) || hS(tS)) return QS;
          const bS = NH(SS.value, tS.value);
          return bS.valid ? ((ZS(SS) || ZS(tS)) && HS.pK(), {
            status: HS.value,
            value: bS.data
          }) : (nS(gS, {
            code: kS.invalid_intersection_types
          }), QS)
        };
        return gS.common.async ? Promise.all([this._def.left._parseAsync({
          data: gS.data,
          path: gS.path,
          parent: gS
        }), this._def.right._parseAsync({
          data: gS.data,
          path: gS.path,
          parent: gS
        })]).then((SS => {
          let [HS, gS] = SS;
          return tS(HS, gS)
        })) : tS(this._def.left._parseSync({
          data: gS.data,
          path: gS.path,
          parent: gS
        }), this._def.right._parseSync({
          data: gS.data,
          path: gS.path,
          parent: gS
        }))
      }
    }
    qH.create = (SS, HS, gS) => new qH({
      left: SS,
      right: HS,
      typeName: YH.ZodIntersection,
      ...ES(gS)
    });
    class uH extends LS {
      _parse(SS) {
        const {
          status: HS,
          ctx: gS
        } = this._processInputParams(SS);
        if (gS.parsedType !== IS.array) return nS(gS, {
          code: kS.invalid_type,
          expected: IS.array,
          received: gS.parsedType
        }), QS;
        if (gS.data.length < this._def.items.length) return nS(gS, {
          code: kS.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), QS;
        !this._def.rest && gS.data.length > this._def.items.length && (nS(gS, {
          code: kS.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), HS.pK());
        const tS = [...gS.data].map(((SS, HS) => {
          const tS = this._def.items[HS] || this._def.rest;
          return tS ? tS._parse(new cS(gS, SS, gS.path, HS)) : null
        })).filter((SS => !!SS));
        return gS.common.async ? Promise.all(tS).then((SS => PS.mergeArray(HS, SS))) : PS.mergeArray(HS, tS)
      }
      get items() {
        return this._def.items
      }
      rest(SS) {
        return new uH({
          ...this._def,
          rest: SS
        })
      }
    }
    uH.create = (SS, HS) => {
      if (!Array.isArray(SS)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new uH({
        items: SS,
        typeName: YH.ZodTuple,
        rest: null,
        ...ES(HS)
      })
    };
    class IH extends LS {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(SS) {
        const {
          status: HS,
          ctx: gS
        } = this._processInputParams(SS);
        if (gS.parsedType !== IS.object) return nS(gS, {
          code: kS.invalid_type,
          expected: IS.object,
          received: gS.parsedType
        }), QS;
        const tS = [],
          bS = this._def.keyType,
          XS = this._def.valueType;
        for (const xS in gS.data) tS.push({
          key: bS._parse(new cS(gS, xS, gS.path, xS)),
          value: XS._parse(new cS(gS, gS.data[xS], gS.path, xS))
        });
        return gS.common.async ? PS.mergeObjectAsync(HS, tS) : PS.mergeObjectSync(HS, tS)
      }
      get element() {
        return this._def.valueType
      }
      static create(SS, HS, gS) {
        return new IH(HS instanceof LS ? {
          keyType: SS,
          valueType: HS,
          typeName: YH.ZodRecord,
          ...ES(gS)
        } : {
          keyType: pS.create(),
          valueType: SS,
          typeName: YH.ZodRecord,
          ...ES(HS)
        })
      }
    }
    class fH extends LS {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(SS) {
        const {
          status: HS,
          ctx: gS
        } = this._processInputParams(SS);
        if (gS.parsedType !== IS.map) return nS(gS, {
          code: kS.invalid_type,
          expected: IS.map,
          received: gS.parsedType
        }), QS;
        const tS = this._def.keyType,
          bS = this._def.valueType,
          XS = [...gS.data.entries()].map(((SS, HS) => {
            let [XS, xS] = SS;
            return {
              key: tS._parse(new cS(gS, XS, gS.path, [HS, "key"])),
              value: bS._parse(new cS(gS, xS, gS.path, [HS, "value"]))
            }
          }));
        if (gS.common.async) {
          const SS = new Map;
          return Promise.resolve().then((async () => {
            for (const gS of XS) {
              const tS = await gS.key,
                bS = await gS.value;
              if ("aborted" === tS.status || "aborted" === bS.status) return QS;
              "pK" !== tS.status && "pK" !== bS.status || HS.pK(), SS.set(tS.value, bS.value)
            }
            return {
              status: HS.value,
              value: SS
            }
          }))
        } {
          const SS = new Map;
          for (const gS of XS) {
            const tS = gS.key,
              bS = gS.value;
            if ("aborted" === tS.status || "aborted" === bS.status) return QS;
            "pK" !== tS.status && "pK" !== bS.status || HS.pK(), SS.set(tS.value, bS.value)
          }
          return {
            status: HS.value,
            value: SS
          }
        }
      }
    }
    fH.create = (SS, HS, gS) => new fH({
      valueType: HS,
      keyType: SS,
      typeName: YH.ZodMap,
      ...ES(gS)
    });
    class kH extends LS {
      _parse(SS) {
        const {
          status: HS,
          ctx: gS
        } = this._processInputParams(SS);
        if (gS.parsedType !== IS.set) return nS(gS, {
          code: kS.invalid_type,
          expected: IS.set,
          received: gS.parsedType
        }), QS;
        const tS = this._def;
        null !== tS.minSize && gS.data.size < tS.minSize.value && (nS(gS, {
          code: kS.too_small,
          minimum: tS.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: tS.minSize.message
        }), HS.pK()), null !== tS.maxSize && gS.data.size > tS.maxSize.value && (nS(gS, {
          code: kS.too_big,
          maximum: tS.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: tS.maxSize.message
        }), HS.pK());
        const bS = this._def.valueType;

        function XS(SS) {
          const gS = new Set;
          for (const tS of SS) {
            if ("aborted" === tS.status) return QS;
            "pK" === tS.status && HS.pK(), gS.add(tS.value)
          }
          return {
            status: HS.value,
            value: gS
          }
        }
        const xS = [...gS.data.values()].map(((SS, HS) => bS._parse(new cS(gS, SS, gS.path, HS))));
        return gS.common.async ? Promise.all(xS).then((SS => XS(SS))) : XS(xS)
      }
      min(SS, HS) {
        return new kH({
          ...this._def,
          minSize: {
            value: SS,
            message: dS.toString(HS)
          }
        })
      }
      max(SS, HS) {
        return new kH({
          ...this._def,
          maxSize: {
            value: SS,
            message: dS.toString(HS)
          }
        })
      }
      size(SS, HS) {
        return this.min(SS, HS).max(SS, HS)
      }
      nonempty(SS) {
        return this.min(1, SS)
      }
    }
    kH.create = (SS, HS) => new kH({
      valueType: SS,
      minSize: null,
      maxSize: null,
      typeName: YH.ZodSet,
      ...ES(HS)
    });
    class aH extends LS {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(SS) {
        const {
          ctx: HS
        } = this._processInputParams(SS);
        if (HS.parsedType !== IS.function) return nS(HS, {
          code: kS.invalid_type,
          expected: IS.function,
          received: HS.parsedType
        }), QS;

        function gS(SS, gS) {
          return CS({
            data: SS,
            path: HS.path,
            errorMaps: [HS.common.contextualErrorMap, HS.schemaErrorMap, GS(), KS].filter((SS => !!SS)),
            issueData: {
              code: kS.invalid_arguments,
              argumentsError: gS
            }
          })
        }

        function tS(SS, gS) {
          return CS({
            data: SS,
            path: HS.path,
            errorMaps: [HS.common.contextualErrorMap, HS.schemaErrorMap, GS(), KS].filter((SS => !!SS)),
            issueData: {
              code: kS.invalid_return_type,
              returnTypeError: gS
            }
          })
        }
        const bS = {
            errorMap: HS.common.contextualErrorMap
          },
          XS = HS.data;
        if (this._def.returns instanceof PH) {
          const SS = this;
          return wS((async function() {
            for (var HS = arguments.length, xS = new Array(HS), NS = 0; NS < HS; NS++) xS[NS] = arguments[NS];
            const qS = new aS([]),
              uS = await SS._def.args.parseAsync(xS, bS).catch((SS => {
                throw qS.addIssue(gS(xS, SS)), qS
              })),
              IS = await Reflect.apply(XS, this, uS);
            return await SS._def.returns._def.type.parseAsync(IS, bS).catch((SS => {
              throw qS.addIssue(tS(IS, SS)), qS
            }))
          }))
        } {
          const SS = this;
          return wS((function() {
            for (var HS = arguments.length, xS = new Array(HS), NS = 0; NS < HS; NS++) xS[NS] = arguments[NS];
            const qS = SS._def.args.safeParse(xS, bS);
            if (!qS.success) throw new aS([gS(xS, qS.error)]);
            const uS = Reflect.apply(XS, this, qS.data),
              IS = SS._def.returns.safeParse(uS, bS);
            if (!IS.success) throw new aS([tS(uS, IS.error)]);
            return IS.data
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
        for (var SS = arguments.length, HS = new Array(SS), gS = 0; gS < SS; gS++) HS[gS] = arguments[gS];
        return new aH({
          ...this._def,
          args: uH.create(HS).rest(eS.create())
        })
      }
      returns(SS) {
        return new aH({
          ...this._def,
          returns: SS
        })
      }
      implement(SS) {
        return this.parse(SS)
      }
      strictImplement(SS) {
        return this.parse(SS)
      }
      static create(SS, HS, gS) {
        return new aH({
          args: SS || uH.create([]).rest(eS.create()),
          returns: HS || eS.create(),
          typeName: YH.ZodFunction,
          ...ES(gS)
        })
      }
    }
    class KH extends LS {
      get schema() {
        return this._def.getter()
      }
      _parse(SS) {
        const {
          ctx: HS
        } = this._processInputParams(SS);
        return this._def.getter()._parse({
          data: HS.data,
          path: HS.path,
          parent: HS
        })
      }
    }
    KH.create = (SS, HS) => new KH({
      getter: SS,
      typeName: YH.ZodLazy,
      ...ES(HS)
    });
    class jH extends LS {
      _parse(SS) {
        if (SS.data !== this._def.value) {
          const HS = this._getOrReturnCtx(SS);
          return nS(HS, {
            received: HS.data,
            code: kS.invalid_literal,
            expected: this._def.value
          }), QS
        }
        return {
          status: "valid",
          value: SS.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function GH(SS, HS) {
      return new CH({
        values: SS,
        typeName: YH.ZodEnum,
        ...ES(HS)
      })
    }
    jH.create = (SS, HS) => new jH({
      value: SS,
      typeName: YH.ZodLiteral,
      ...ES(HS)
    });
    class CH extends LS {
      _parse(SS) {
        if ("string" !== typeof SS.data) {
          const HS = this._getOrReturnCtx(SS),
            gS = this._def.values;
          return nS(HS, {
            expected: NS.joinValues(gS),
            received: HS.parsedType,
            code: kS.invalid_type
          }), QS
        }
        if (-1 === this._def.values.indexOf(SS.data)) {
          const HS = this._getOrReturnCtx(SS),
            gS = this._def.values;
          return nS(HS, {
            received: HS.data,
            code: kS.invalid_enum_value,
            options: gS
          }), QS
        }
        return wS(SS.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const SS = {};
        for (const HS of this._def.values) SS[HS] = HS;
        return SS
      }
      get Values() {
        const SS = {};
        for (const HS of this._def.values) SS[HS] = HS;
        return SS
      }
      get Enum() {
        const SS = {};
        for (const HS of this._def.values) SS[HS] = HS;
        return SS
      }
      extract(SS) {
        return CH.create(SS)
      }
      exclude(SS) {
        return CH.create(this.options.filter((HS => !SS.includes(HS))))
      }
    }
    CH.create = GH;
    class nH extends LS {
      _parse(SS) {
        const HS = NS.getValidEnumValues(this._def.values),
          gS = this._getOrReturnCtx(SS);
        if (gS.parsedType !== IS.string && gS.parsedType !== IS.number) {
          const SS = NS.objectValues(HS);
          return nS(gS, {
            expected: NS.joinValues(SS),
            received: gS.parsedType,
            code: kS.invalid_type
          }), QS
        }
        if (-1 === HS.indexOf(SS.data)) {
          const SS = NS.objectValues(HS);
          return nS(gS, {
            received: gS.data,
            code: kS.invalid_enum_value,
            options: SS
          }), QS
        }
        return wS(SS.data)
      }
      get enum() {
        return this._def.values
      }
    }
    nH.create = (SS, HS) => new nH({
      values: SS,
      typeName: YH.ZodNativeEnum,
      ...ES(HS)
    });
    class PH extends LS {
      unwrap() {
        return this._def.type
      }
      _parse(SS) {
        const {
          ctx: HS
        } = this._processInputParams(SS);
        if (HS.parsedType !== IS.promise && !1 === HS.common.async) return nS(HS, {
          code: kS.invalid_type,
          expected: IS.promise,
          received: HS.parsedType
        }), QS;
        const gS = HS.parsedType === IS.promise ? HS.data : Promise.resolve(HS.data);
        return wS(gS.then((SS => this._def.type.parseAsync(SS, {
          path: HS.path,
          errorMap: HS.common.contextualErrorMap
        }))))
      }
    }
    PH.create = (SS, HS) => new PH({
      type: SS,
      typeName: YH.ZodPromise,
      ...ES(HS)
    });
    class QH extends LS {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === YH.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(SS) {
        const {
          status: HS,
          ctx: gS
        } = this._processInputParams(SS), tS = this._def.effect || null, bS = {
          addIssue: SS => {
            nS(gS, SS), SS.fatal ? HS.abort() : HS.pK()
          },
          get path() {
            return gS.path
          }
        };
        if (bS.addIssue = bS.addIssue.bind(bS), "preprocess" === tS.type) {
          const SS = tS.transform(gS.data, bS);
          return gS.common.issues.length ? {
            status: "pK",
            value: gS.data
          } : gS.common.async ? Promise.resolve(SS).then((SS => this._def.schema._parseAsync({
            data: SS,
            path: gS.path,
            parent: gS
          }))) : this._def.schema._parseSync({
            data: SS,
            path: gS.path,
            parent: gS
          })
        }
        if ("refinement" === tS.type) {
          const SS = SS => {
            const HS = tS.refinement(SS, bS);
            if (gS.common.async) return Promise.resolve(HS);
            if (HS instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return SS
          };
          if (!1 === gS.common.async) {
            const tS = this._def.schema._parseSync({
              data: gS.data,
              path: gS.path,
              parent: gS
            });
            return "aborted" === tS.status ? QS : ("pK" === tS.status && HS.pK(), SS(tS.value), {
              status: HS.value,
              value: tS.value
            })
          }
          return this._def.schema._parseAsync({
            data: gS.data,
            path: gS.path,
            parent: gS
          }).then((gS => "aborted" === gS.status ? QS : ("pK" === gS.status && HS.pK(), SS(gS.value).then((() => ({
            status: HS.value,
            value: gS.value
          }))))))
        }
        if ("transform" === tS.type) {
          if (!1 === gS.common.async) {
            const SS = this._def.schema._parseSync({
              data: gS.data,
              path: gS.path,
              parent: gS
            });
            if (!JS(SS)) return SS;
            const XS = tS.transform(SS.value, bS);
            if (XS instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: HS.value,
              value: XS
            }
          }
          return this._def.schema._parseAsync({
            data: gS.data,
            path: gS.path,
            parent: gS
          }).then((SS => JS(SS) ? Promise.resolve(tS.transform(SS.value, bS)).then((SS => ({
            status: HS.value,
            value: SS
          }))) : SS))
        }
        NS.assertNever(tS)
      }
    }
    QH.create = (SS, HS, gS) => new QH({
      schema: SS,
      typeName: YH.ZodEffects,
      effect: HS,
      ...ES(gS)
    }), QH.createWithPreprocess = (SS, HS, gS) => new QH({
      schema: HS,
      effect: {
        type: "preprocess",
        transform: SS
      },
      typeName: YH.ZodEffects,
      ...ES(gS)
    });
    class DH extends LS {
      _parse(SS) {
        return this._getType(SS) === IS.undefined ? wS(void 0) : this._def.innerType._parse(SS)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    DH.create = (SS, HS) => new DH({
      innerType: SS,
      typeName: YH.ZodOptional,
      ...ES(HS)
    });
    class wH extends LS {
      _parse(SS) {
        return this._getType(SS) === IS.null ? wS(null) : this._def.innerType._parse(SS)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    wH.create = (SS, HS) => new wH({
      innerType: SS,
      typeName: YH.ZodNullable,
      ...ES(HS)
    });
    class hH extends LS {
      _parse(SS) {
        const {
          ctx: HS
        } = this._processInputParams(SS);
        let gS = HS.data;
        return HS.parsedType === IS.undefined && (gS = this._def.defaultValue()), this._def.innerType._parse({
          data: gS,
          path: HS.path,
          parent: HS
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    hH.create = (SS, HS) => new hH({
      innerType: SS,
      typeName: YH.ZodDefault,
      defaultValue: "function" === typeof HS.default ? HS.default : () => HS.default,
      ...ES(HS)
    });
    class ZH extends LS {
      _parse(SS) {
        const {
          ctx: HS
        } = this._processInputParams(SS), gS = {
          ...HS,
          common: {
            ...HS.common,
            issues: []
          }
        }, tS = this._def.innerType._parse({
          data: gS.data,
          path: gS.path,
          parent: {
            ...gS
          }
        });
        return OS(tS) ? tS.then((SS => ({
          status: "valid",
          value: "valid" === SS.status ? SS.value : this._def.catchValue({
            get error() {
              return new aS(gS.common.issues)
            },
            input: gS.data
          })
        }))) : {
          status: "valid",
          value: "valid" === tS.status ? tS.value : this._def.catchValue({
            get error() {
              return new aS(gS.common.issues)
            },
            input: gS.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    ZH.create = (SS, HS) => new ZH({
      innerType: SS,
      typeName: YH.ZodCatch,
      catchValue: "function" === typeof HS.catch ? HS.catch : () => HS.catch,
      ...ES(HS)
    });
    class JH extends LS {
      _parse(SS) {
        if (this._getType(SS) !== IS.nan) {
          const HS = this._getOrReturnCtx(SS);
          return nS(HS, {
            code: kS.invalid_type,
            expected: IS.nan,
            received: HS.parsedType
          }), QS
        }
        return {
          status: "valid",
          value: SS.data
        }
      }
    }
    JH.create = SS => new JH({
      typeName: YH.ZodNaN,
      ...ES(SS)
    });
    const OH = Symbol("zod_brand");
    class dH extends LS {
      _parse(SS) {
        const {
          ctx: HS
        } = this._processInputParams(SS), gS = HS.data;
        return this._def.type._parse({
          data: gS,
          path: HS.path,
          parent: HS
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class cH extends LS {
      _parse(SS) {
        const {
          status: HS,
          ctx: gS
        } = this._processInputParams(SS);
        if (gS.common.async) {
          return (async () => {
            const SS = await this._def.in._parseAsync({
              data: gS.data,
              path: gS.path,
              parent: gS
            });
            return "aborted" === SS.status ? QS : "pK" === SS.status ? (HS.pK(), DS(SS.value)) : this._def.out._parseAsync({
              data: SS.value,
              path: gS.path,
              parent: gS
            })
          })()
        } {
          const SS = this._def.in._parseSync({
            data: gS.data,
            path: gS.path,
            parent: gS
          });
          return "aborted" === SS.status ? QS : "pK" === SS.status ? (HS.pK(), {
            status: "pK",
            value: SS.value
          }) : this._def.out._parseSync({
            data: SS.value,
            path: gS.path,
            parent: gS
          })
        }
      }
      static create(SS, HS) {
        return new cH({
          in: SS,
          out: HS,
          typeName: YH.ZodPipeline
        })
      }
    }
    class vH extends LS {
      _parse(SS) {
        const HS = this._def.innerType._parse(SS);
        return JS(HS) && (HS.value = Object.freeze(HS.value)), HS
      }
    }
    vH.create = (SS, HS) => new vH({
      innerType: SS,
      typeName: YH.ZodReadonly,
      ...ES(HS)
    });
    const EH = function(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          gS = arguments.length > 2 ? arguments[2] : void 0;
        return SS ? mS.create().superRefine(((tS, bS) => {
          var XS, xS;
          if (!SS(tS)) {
            const SS = "function" === typeof HS ? HS(tS) : "string" === typeof HS ? {
                message: HS
              } : HS,
              NS = null === (xS = null !== (XS = SS.fatal) && void 0 !== XS ? XS : gS) || void 0 === xS || xS,
              qS = "string" === typeof SS ? {
                message: SS
              } : SS;
            bS.addIssue({
              code: "custom",
              ...qS,
              fatal: NS
            })
          }
        })) : mS.create()
      },
      LH = {
        object: tH.lazycreate
      };
    var YH;
    ! function(SS) {
      SS.ZodString = "ZodString", SS.ZodNumber = "ZodNumber", SS.ZodNaN = "ZodNaN", SS.ZodBigInt = "ZodBigInt", SS.ZodBoolean = "ZodBoolean", SS.ZodDate = "ZodDate", SS.ZodSymbol = "ZodSymbol", SS.ZodUndefined = "ZodUndefined", SS.ZodNull = "ZodNull", SS.ZodAny = "ZodAny", SS.ZodUnknown = "ZodUnknown", SS.ZodNever = "ZodNever", SS.ZodVoid = "ZodVoid", SS.ZodArray = "ZodArray", SS.ZodObject = "ZodObject", SS.ZodUnion = "ZodUnion", SS.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", SS.ZodIntersection = "ZodIntersection", SS.ZodTuple = "ZodTuple", SS.ZodRecord = "ZodRecord", SS.ZodMap = "ZodMap", SS.ZodSet = "ZodSet", SS.ZodFunction = "ZodFunction", SS.ZodLazy = "ZodLazy", SS.ZodLiteral = "ZodLiteral", SS.ZodEnum = "ZodEnum", SS.ZodEffects = "ZodEffects", SS.ZodNativeEnum = "ZodNativeEnum", SS.ZodOptional = "ZodOptional", SS.ZodNullable = "ZodNullable", SS.ZodDefault = "ZodDefault", SS.ZodCatch = "ZodCatch", SS.ZodPromise = "ZodPromise", SS.ZodBranded = "ZodBranded", SS.ZodPipeline = "ZodPipeline", SS.ZodReadonly = "ZodReadonly"
    }(YH || (YH = {}));
    const AH = pS.create,
      yH = BS.create,
      VH = JH.create,
      iH = MS.create,
      WH = FS.create,
      zH = RS.create,
      UH = TS.create,
      pH = oS.create,
      sH = lS.create,
      BH = mS.create,
      MH = eS.create,
      FH = rS.create,
      RH = SH.create,
      TH = HH.create,
      oH = tH.create,
      lH = tH.strictCreate,
      mH = bH.create,
      eH = xH.create,
      rH = qH.create,
      Sg = uH.create,
      Hg = IH.create,
      gg = fH.create,
      tg = kH.create,
      bg = aH.create,
      Xg = KH.create,
      xg = jH.create,
      Ng = CH.create,
      qg = nH.create,
      ug = PH.create,
      Ig = QH.create,
      fg = DH.create,
      kg = wH.create,
      ag = QH.createWithPreprocess,
      Kg = cH.create,
      jg = {
        string: SS => pS.create({
          ...SS,
          coerce: !0
        }),
        number: SS => BS.create({
          ...SS,
          coerce: !0
        }),
        boolean: SS => FS.create({
          ...SS,
          coerce: !0
        }),
        bigint: SS => MS.create({
          ...SS,
          coerce: !0
        }),
        date: SS => RS.create({
          ...SS,
          coerce: !0
        })
      },
      Gg = QS;
    var Cg = Object.freeze({
        __proto__: null,
        defaultErrorMap: KS,
        setErrorMap: function(SS) {
          jS = SS
        },
        getErrorMap: GS,
        makeIssue: CS,
        EMPTY_PATH: [],
        addIssueToContext: nS,
        ParseStatus: PS,
        INVALID: QS,
        DIRTY: DS,
        OK: wS,
        isAborted: hS,
        isDirty: ZS,
        isValid: JS,
        isAsync: OS,
        get util() {
          return NS
        },
        get objectUtil() {
          return qS
        },
        ZodParsedType: IS,
        getParsedType: fS,
        ZodType: LS,
        ZodString: pS,
        ZodNumber: BS,
        ZodBigInt: MS,
        ZodBoolean: FS,
        ZodDate: RS,
        ZodSymbol: TS,
        ZodUndefined: oS,
        ZodNull: lS,
        ZodAny: mS,
        ZodUnknown: eS,
        ZodNever: rS,
        ZodVoid: SH,
        ZodArray: HH,
        ZodObject: tH,
        ZodUnion: bH,
        ZodDiscriminatedUnion: xH,
        ZodIntersection: qH,
        ZodTuple: uH,
        ZodRecord: IH,
        ZodMap: fH,
        ZodSet: kH,
        ZodFunction: aH,
        ZodLazy: KH,
        ZodLiteral: jH,
        ZodEnum: CH,
        ZodNativeEnum: nH,
        ZodPromise: PH,
        ZodEffects: QH,
        ZodTransformer: QH,
        ZodOptional: DH,
        ZodNullable: wH,
        ZodDefault: hH,
        ZodCatch: ZH,
        ZodNaN: JH,
        BRAND: OH,
        ZodBranded: dH,
        ZodPipeline: cH,
        ZodReadonly: vH,
        custom: EH,
        Schema: LS,
        ZodSchema: LS,
        late: LH,
        get ZodFirstPartyTypeKind() {
          return YH
        },
        coerce: jg,
        any: BH,
        array: TH,
        bigint: iH,
        boolean: WH,
        date: zH,
        discriminatedUnion: eH,
        effect: Ig,
        enum: Ng,
        function: bg,
        instanceof: function(SS) {
          let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${SS.name}`
          };
          return EH((HS => HS instanceof SS), HS)
        },
        intersection: rH,
        lazy: Xg,
        literal: xg,
        map: gg,
        nan: VH,
        nativeEnum: qg,
        never: FH,
        null: sH,
        nullable: kg,
        number: yH,
        object: oH,
        oboolean: () => WH().optional(),
        onumber: () => yH().optional(),
        optional: fg,
        ostring: () => AH().optional(),
        pipeline: Kg,
        preprocess: ag,
        promise: ug,
        record: Hg,
        set: tg,
        strictObject: lH,
        string: AH,
        symbol: UH,
        transformer: Ig,
        tuple: Sg,
        undefined: pH,
        union: mH,
        unknown: MH,
        void: RH,
        NEVER: Gg,
        ZodIssueCode: kS,
        quotelessJson: SS => JSON.stringify(SS, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: aS
      }),
      ng = {
        exports: {}
      };
    ! function(SS) {
      var HS = function(SS) {
        var gS = 1e7,
          tS = 9007199254740992,
          bS = kS(tS),
          XS = "0123456789abcdefghijklmnopqrstuvwxyz",
          xS = "function" === typeof BigInt;

        function NS(SS, HS, gS, tS) {
          return "undefined" === typeof SS ? NS[0] : "undefined" !== typeof HS && (10 !== +HS || gS) ? FS(SS, HS, gS, tS) : mS(SS)
        }

        function qS(SS, HS) {
          this.value = SS, this.sign = HS, this.isSmall = !1
        }

        function uS(SS) {
          this.value = SS, this.sign = SS < 0, this.isSmall = !0
        }

        function IS(SS) {
          this.value = SS
        }

        function fS(SS) {
          return -tS < SS && SS < tS
        }

        function kS(SS) {
          return SS < 1e7 ? [SS] : SS < 1e14 ? [SS % 1e7, Math.floor(SS / 1e7)] : [SS % 1e7, Math.floor(SS / 1e7) % 1e7, Math.floor(SS / 1e14)]
        }

        function aS(SS) {
          KS(SS);
          var HS = SS.length;
          if (HS < 4 && ES(SS, bS) < 0) switch (HS) {
            case 0:
              return 0;
            case 1:
              return SS[0];
            case 2:
              return SS[0] + SS[1] * gS;
            default:
              return SS[0] + (SS[1] + SS[2] * gS) * gS
          }
          return SS
        }

        function KS(SS) {
          for (var HS = SS.length; 0 === SS[--HS];);
          SS.length = HS + 1
        }

        function jS(SS) {
          for (var HS = new Array(SS), gS = -1; ++gS < SS;) HS[gS] = 0;
          return HS
        }

        function GS(SS) {
          return SS > 0 ? Math.floor(SS) : Math.ceil(SS)
        }

        function CS(SS, HS) {
          var tS, bS, XS = SS.length,
            xS = HS.length,
            NS = new Array(XS),
            qS = 0,
            uS = gS;
          for (bS = 0; bS < xS; bS++) qS = (tS = SS[bS] + HS[bS] + qS) >= uS ? 1 : 0, NS[bS] = tS - qS * uS;
          for (; bS < XS;) qS = (tS = SS[bS] + qS) === uS ? 1 : 0, NS[bS++] = tS - qS * uS;
          return qS > 0 && NS.push(qS), NS
        }

        function nS(SS, HS) {
          return SS.length >= HS.length ? CS(SS, HS) : CS(HS, SS)
        }

        function PS(SS, HS) {
          var tS, bS, XS = SS.length,
            xS = new Array(XS),
            NS = gS;
          for (bS = 0; bS < XS; bS++) tS = SS[bS] - NS + HS, HS = Math.floor(tS / NS), xS[bS] = tS - HS * NS, HS += 1;
          for (; HS > 0;) xS[bS++] = HS % NS, HS = Math.floor(HS / NS);
          return xS
        }

        function QS(SS, HS) {
          var tS, bS, XS = SS.length,
            xS = HS.length,
            NS = new Array(XS),
            qS = 0,
            uS = gS;
          for (tS = 0; tS < xS; tS++)(bS = SS[tS] - qS - HS[tS]) < 0 ? (bS += uS, qS = 1) : qS = 0, NS[tS] = bS;
          for (tS = xS; tS < XS; tS++) {
            if (!((bS = SS[tS] - qS) < 0)) {
              NS[tS++] = bS;
              break
            }
            bS += uS, NS[tS] = bS
          }
          for (; tS < XS; tS++) NS[tS] = SS[tS];
          return KS(NS), NS
        }

        function DS(SS, HS, tS) {
          var bS, XS, xS = SS.length,
            NS = new Array(xS),
            IS = -HS,
            fS = gS;
          for (bS = 0; bS < xS; bS++) XS = SS[bS] + IS, IS = Math.floor(XS / fS), XS %= fS, NS[bS] = XS < 0 ? XS + fS : XS;
          return "number" === typeof(NS = aS(NS)) ? (tS && (NS = -NS), new uS(NS)) : new qS(NS, tS)
        }

        function wS(SS, HS) {
          var tS, bS, XS, xS, NS = SS.length,
            qS = HS.length,
            uS = jS(NS + qS),
            IS = gS;
          for (XS = 0; XS < NS; ++XS) {
            xS = SS[XS];
            for (var fS = 0; fS < qS; ++fS) tS = xS * HS[fS] + uS[XS + fS], bS = Math.floor(tS / IS), uS[XS + fS] = tS - bS * IS, uS[XS + fS + 1] += bS
          }
          return KS(uS), uS
        }

        function hS(SS, HS) {
          var tS, bS, XS = SS.length,
            xS = new Array(XS),
            NS = gS,
            qS = 0;
          for (bS = 0; bS < XS; bS++) tS = SS[bS] * HS + qS, qS = Math.floor(tS / NS), xS[bS] = tS - qS * NS;
          for (; qS > 0;) xS[bS++] = qS % NS, qS = Math.floor(qS / NS);
          return xS
        }

        function ZS(SS, HS) {
          for (var gS = []; HS-- > 0;) gS.push(0);
          return gS.concat(SS)
        }

        function JS(SS, HS) {
          var gS = Math.max(SS.length, HS.length);
          if (gS <= 30) return wS(SS, HS);
          gS = Math.ceil(gS / 2);
          var tS = SS.slice(gS),
            bS = SS.slice(0, gS),
            XS = HS.slice(gS),
            xS = HS.slice(0, gS),
            NS = JS(bS, xS),
            qS = JS(tS, XS),
            uS = JS(nS(bS, tS), nS(xS, XS)),
            IS = nS(nS(NS, ZS(QS(QS(uS, NS), qS), gS)), ZS(qS, 2 * gS));
          return KS(IS), IS
        }

        function OS(SS, HS, tS) {
          return new qS(SS < gS ? hS(HS, SS) : wS(HS, kS(SS)), tS)
        }

        function dS(SS) {
          var HS, tS, bS, XS, xS = SS.length,
            NS = jS(xS + xS),
            qS = gS;
          for (bS = 0; bS < xS; bS++) {
            tS = 0 - (XS = SS[bS]) * XS;
            for (var uS = bS; uS < xS; uS++) HS = XS * SS[uS] * 2 + NS[bS + uS] + tS, tS = Math.floor(HS / qS), NS[bS + uS] = HS - tS * qS;
            NS[bS + xS] = tS
          }
          return KS(NS), NS
        }

        function cS(SS, HS) {
          var tS, bS, XS, xS, NS = SS.length,
            qS = jS(NS),
            uS = gS;
          for (XS = 0, tS = NS - 1; tS >= 0; --tS) XS = (xS = XS * uS + SS[tS]) - (bS = GS(xS / HS)) * HS, qS[tS] = 0 | bS;
          return [qS, 0 | XS]
        }

        function vS(SS, HS) {
          var tS, bS = mS(HS);
          if (xS) return [new IS(SS.value / bS.value), new IS(SS.value % bS.value)];
          var XS, fS = SS.value,
            CS = bS.value;
          if (0 === CS) throw new Error("Cannot divide by zero");
          if (SS.isSmall) return bS.isSmall ? [new uS(GS(fS / CS)), new uS(fS % CS)] : [NS[0], SS];
          if (bS.isSmall) {
            if (1 === CS) return [SS, NS[0]];
            if (-1 == CS) return [SS.gq(), NS[0]];
            var nS = Math.abs(CS);
            if (nS < gS) {
              XS = aS((tS = cS(fS, nS))[0]);
              var PS = tS[1];
              return SS.sign && (PS = -PS), "number" === typeof XS ? (SS.sign !== bS.sign && (XS = -XS), [new uS(XS), new uS(PS)]) : [new qS(XS, SS.sign !== bS.sign), new uS(PS)]
            }
            CS = kS(nS)
          }
          var DS = ES(fS, CS);
          if (-1 === DS) return [NS[0], SS];
          if (0 === DS) return [NS[SS.sign === bS.sign ? 1 : -1], NS[0]];
          tS = fS.length + CS.length <= 200 ? function(SS, HS) {
            var tS, bS, XS, xS, NS, qS, uS, IS = SS.length,
              fS = HS.length,
              kS = gS,
              KS = jS(HS.length),
              GS = HS[fS - 1],
              CS = Math.ceil(kS / (2 * GS)),
              nS = hS(SS, CS),
              PS = hS(HS, CS);
            for (nS.length <= IS && nS.push(0), PS.push(0), GS = PS[fS - 1], bS = IS - fS; bS >= 0; bS--) {
              for (tS = kS - 1, nS[bS + fS] !== GS && (tS = Math.floor((nS[bS + fS] * kS + nS[bS + fS - 1]) / GS)), XS = 0, xS = 0, qS = PS.length, NS = 0; NS < qS; NS++) XS += tS * PS[NS], uS = Math.floor(XS / kS), xS += nS[bS + NS] - (XS - uS * kS), XS = uS, xS < 0 ? (nS[bS + NS] = xS + kS, xS = -1) : (nS[bS + NS] = xS, xS = 0);
              for (; 0 !== xS;) {
                for (tS -= 1, XS = 0, NS = 0; NS < qS; NS++)(XS += nS[bS + NS] - kS + PS[NS]) < 0 ? (nS[bS + NS] = XS + kS, XS = 0) : (nS[bS + NS] = XS, XS = 1);
                xS += XS
              }
              KS[bS] = tS
            }
            return nS = cS(nS, CS)[0], [aS(KS), aS(nS)]
          }(fS, CS) : function(SS, HS) {
            for (var tS, bS, XS, xS, NS, qS = SS.length, uS = HS.length, IS = [], fS = [], kS = gS; qS;)
              if (fS.unshift(SS[--qS]), KS(fS), ES(fS, HS) < 0) IS.push(0);
              else {
                XS = fS[(bS = fS.length) - 1] * kS + fS[bS - 2], xS = HS[uS - 1] * kS + HS[uS - 2], bS > uS && (XS = (XS + 1) * kS), tS = Math.ceil(XS / xS);
                do {
                  if (ES(NS = hS(HS, tS), fS) <= 0) break;
                  tS--
                } while (tS);
                IS.push(tS), fS = QS(fS, NS)
              } return IS.reverse(), [aS(IS), aS(fS)]
          }(fS, CS), XS = tS[0];
          var wS = SS.sign !== bS.sign,
            ZS = tS[1],
            JS = SS.sign;
          return "number" === typeof XS ? (wS && (XS = -XS), XS = new uS(XS)) : XS = new qS(XS, wS), "number" === typeof ZS ? (JS && (ZS = -ZS), ZS = new uS(ZS)) : ZS = new qS(ZS, JS), [XS, ZS]
        }

        function ES(SS, HS) {
          if (SS.length !== HS.length) return SS.length > HS.length ? 1 : -1;
          for (var gS = SS.length - 1; gS >= 0; gS--)
            if (SS[gS] !== HS[gS]) return SS[gS] > HS[gS] ? 1 : -1;
          return 0
        }

        function LS(SS) {
          var HS = SS.abs();
          return !HS.isUnit() && (!!(HS.equals(2) || HS.equals(3) || HS.equals(5)) || !(HS.isEven() || HS.isDivisibleBy(3) || HS.isDivisibleBy(5)) && (!!HS.lesser(49) || void 0))
        }

        function YS(SS, gS) {
          for (var tS, bS, XS, xS = SS.prev(), NS = xS, qS = 0; NS.isEven();) NS = NS.divide(2), qS++;
          SS: for (bS = 0; bS < gS.length; bS++)
            if (!SS.lesser(gS[bS]) && !(XS = HS(gS[bS]).modPow(NS, SS)).isUnit() && !XS.equals(xS)) {
              for (tS = qS - 1; 0 != tS; tS--) {
                if ((XS = XS.square().mod(SS)).isUnit()) return !1;
                if (XS.equals(xS)) continue SS
              }
              return !1
            }
          return !0
        }
        qS.prototype = Object.create(NS.prototype), uS.prototype = Object.create(NS.prototype), IS.prototype = Object.create(NS.prototype), qS.prototype.add = function(SS) {
          var HS = mS(SS);
          if (this.sign !== HS.sign) return this.subtract(HS.gq());
          var gS = this.value,
            tS = HS.value;
          return HS.isSmall ? new qS(PS(gS, Math.abs(tS)), this.sign) : new qS(nS(gS, tS), this.sign)
        }, qS.prototype.plus = qS.prototype.add, uS.prototype.add = function(SS) {
          var HS = mS(SS),
            gS = this.value;
          if (gS < 0 !== HS.sign) return this.subtract(HS.gq());
          var tS = HS.value;
          if (HS.isSmall) {
            if (fS(gS + tS)) return new uS(gS + tS);
            tS = kS(Math.abs(tS))
          }
          return new qS(PS(tS, Math.abs(gS)), gS < 0)
        }, uS.prototype.plus = uS.prototype.add, IS.prototype.add = function(SS) {
          return new IS(this.value + mS(SS).value)
        }, IS.prototype.plus = IS.prototype.add, qS.prototype.subtract = function(SS) {
          var HS = mS(SS);
          if (this.sign !== HS.sign) return this.add(HS.gq());
          var gS = this.value,
            tS = HS.value;
          return HS.isSmall ? DS(gS, Math.abs(tS), this.sign) : function(SS, HS, gS) {
            var tS;
            return ES(SS, HS) >= 0 ? tS = QS(SS, HS) : (tS = QS(HS, SS), gS = !gS), "number" === typeof(tS = aS(tS)) ? (gS && (tS = -tS), new uS(tS)) : new qS(tS, gS)
          }(gS, tS, this.sign)
        }, qS.prototype.minus = qS.prototype.subtract, uS.prototype.subtract = function(SS) {
          var HS = mS(SS),
            gS = this.value;
          if (gS < 0 !== HS.sign) return this.add(HS.gq());
          var tS = HS.value;
          return HS.isSmall ? new uS(gS - tS) : DS(tS, Math.abs(gS), gS >= 0)
        }, uS.prototype.minus = uS.prototype.subtract, IS.prototype.subtract = function(SS) {
          return new IS(this.value - mS(SS).value)
        }, IS.prototype.minus = IS.prototype.subtract, qS.prototype.gq = function() {
          return new qS(this.value, !this.sign)
        }, uS.prototype.gq = function() {
          var SS = this.sign,
            HS = new uS(-this.value);
          return HS.sign = !SS, HS
        }, IS.prototype.gq = function() {
          return new IS(-this.value)
        }, qS.prototype.abs = function() {
          return new qS(this.value, !1)
        }, uS.prototype.abs = function() {
          return new uS(Math.abs(this.value))
        }, IS.prototype.abs = function() {
          return new IS(this.value >= 0 ? this.value : -this.value)
        }, qS.prototype.multiply = function(SS) {
          var HS, tS, bS, XS = mS(SS),
            xS = this.value,
            uS = XS.value,
            IS = this.sign !== XS.sign;
          if (XS.isSmall) {
            if (0 === uS) return NS[0];
            if (1 === uS) return this;
            if (-1 === uS) return this.gq();
            if ((HS = Math.abs(uS)) < gS) return new qS(hS(xS, HS), IS);
            uS = kS(HS)
          }
          return tS = xS.length, bS = uS.length, new qS(-.012 * tS - .012 * bS + 15e-6 * tS * bS > 0 ? JS(xS, uS) : wS(xS, uS), IS)
        }, qS.prototype.times = qS.prototype.multiply, uS.prototype._multiplyBySmall = function(SS) {
          return fS(SS.value * this.value) ? new uS(SS.value * this.value) : OS(Math.abs(SS.value), kS(Math.abs(this.value)), this.sign !== SS.sign)
        }, qS.prototype._multiplyBySmall = function(SS) {
          return 0 === SS.value ? NS[0] : 1 === SS.value ? this : -1 === SS.value ? this.gq() : OS(Math.abs(SS.value), this.value, this.sign !== SS.sign)
        }, uS.prototype.multiply = function(SS) {
          return mS(SS)._multiplyBySmall(this)
        }, uS.prototype.times = uS.prototype.multiply, IS.prototype.multiply = function(SS) {
          return new IS(this.value * mS(SS).value)
        }, IS.prototype.times = IS.prototype.multiply, qS.prototype.square = function() {
          return new qS(dS(this.value), !1)
        }, uS.prototype.square = function() {
          var SS = this.value * this.value;
          return fS(SS) ? new uS(SS) : new qS(dS(kS(Math.abs(this.value))), !1)
        }, IS.prototype.square = function(SS) {
          return new IS(this.value * this.value)
        }, qS.prototype.divmod = function(SS) {
          var HS = vS(this, SS);
          return {
            quotient: HS[0],
            remainder: HS[1]
          }
        }, IS.prototype.divmod = uS.prototype.divmod = qS.prototype.divmod, qS.prototype.divide = function(SS) {
          return vS(this, SS)[0]
        }, IS.prototype.over = IS.prototype.divide = function(SS) {
          return new IS(this.value / mS(SS).value)
        }, uS.prototype.over = uS.prototype.divide = qS.prototype.over = qS.prototype.divide, qS.prototype.mod = function(SS) {
          return vS(this, SS)[1]
        }, IS.prototype.mod = IS.prototype.remainder = function(SS) {
          return new IS(this.value % mS(SS).value)
        }, uS.prototype.remainder = uS.prototype.mod = qS.prototype.remainder = qS.prototype.mod, qS.prototype.pow = function(SS) {
          var HS, gS, tS, bS = mS(SS),
            XS = this.value,
            xS = bS.value;
          if (0 === xS) return NS[1];
          if (0 === XS) return NS[0];
          if (1 === XS) return NS[1];
          if (-1 === XS) return bS.isEven() ? NS[1] : NS[-1];
          if (bS.sign) return NS[0];
          if (!bS.isSmall) throw new Error("The exponent " + bS.toString() + " is too large.");
          if (this.isSmall && fS(HS = Math.pow(XS, xS))) return new uS(GS(HS));
          for (gS = this, tS = NS[1]; !0 & xS && (tS = tS.times(gS), --xS), 0 !== xS;) xS /= 2, gS = gS.square();
          return tS
        }, uS.prototype.pow = qS.prototype.pow, IS.prototype.pow = function(SS) {
          var HS = mS(SS),
            gS = this.value,
            tS = HS.value,
            bS = BigInt(0),
            XS = BigInt(1),
            xS = BigInt(2);
          if (tS === bS) return NS[1];
          if (gS === bS) return NS[0];
          if (gS === XS) return NS[1];
          if (gS === BigInt(-1)) return HS.isEven() ? NS[1] : NS[-1];
          if (HS.isNegative()) return new IS(bS);
          for (var qS = this, uS = NS[1];
            (tS & XS) === XS && (uS = uS.times(qS), --tS), tS !== bS;) tS /= xS, qS = qS.square();
          return uS
        }, qS.prototype.modPow = function(SS, HS) {
          if (SS = mS(SS), (HS = mS(HS)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var gS = NS[1],
            tS = this.mod(HS);
          for (SS.isNegative() && (SS = SS.multiply(NS[-1]), tS = tS.modInv(HS)); SS.isPositive();) {
            if (tS.isZero()) return NS[0];
            SS.isOdd() && (gS = gS.multiply(tS).mod(HS)), SS = SS.divide(2), tS = tS.square().mod(HS)
          }
          return gS
        }, IS.prototype.modPow = uS.prototype.modPow = qS.prototype.modPow, qS.prototype.compareAbs = function(SS) {
          var HS = mS(SS),
            gS = this.value,
            tS = HS.value;
          return HS.isSmall ? 1 : ES(gS, tS)
        }, uS.prototype.compareAbs = function(SS) {
          var HS = mS(SS),
            gS = Math.abs(this.value),
            tS = HS.value;
          return HS.isSmall ? gS === (tS = Math.abs(tS)) ? 0 : gS > tS ? 1 : -1 : -1
        }, IS.prototype.compareAbs = function(SS) {
          var HS = this.value,
            gS = mS(SS).value;
          return (HS = HS >= 0 ? HS : -HS) === (gS = gS >= 0 ? gS : -gS) ? 0 : HS > gS ? 1 : -1
        }, qS.prototype.compare = function(SS) {
          if (SS === 1 / 0) return -1;
          if (SS === -1 / 0) return 1;
          var HS = mS(SS),
            gS = this.value,
            tS = HS.value;
          return this.sign !== HS.sign ? HS.sign ? 1 : -1 : HS.isSmall ? this.sign ? -1 : 1 : ES(gS, tS) * (this.sign ? -1 : 1)
        }, qS.prototype.compareTo = qS.prototype.compare, uS.prototype.compare = function(SS) {
          if (SS === 1 / 0) return -1;
          if (SS === -1 / 0) return 1;
          var HS = mS(SS),
            gS = this.value,
            tS = HS.value;
          return HS.isSmall ? gS == tS ? 0 : gS > tS ? 1 : -1 : gS < 0 !== HS.sign ? gS < 0 ? -1 : 1 : gS < 0 ? 1 : -1
        }, uS.prototype.compareTo = uS.prototype.compare, IS.prototype.compare = function(SS) {
          if (SS === 1 / 0) return -1;
          if (SS === -1 / 0) return 1;
          var HS = this.value,
            gS = mS(SS).value;
          return HS === gS ? 0 : HS > gS ? 1 : -1
        }, IS.prototype.compareTo = IS.prototype.compare, qS.prototype.equals = function(SS) {
          return 0 === this.compare(SS)
        }, IS.prototype.eq = IS.prototype.equals = uS.prototype.eq = uS.prototype.equals = qS.prototype.eq = qS.prototype.equals, qS.prototype.notEquals = function(SS) {
          return 0 !== this.compare(SS)
        }, IS.prototype.neq = IS.prototype.notEquals = uS.prototype.neq = uS.prototype.notEquals = qS.prototype.neq = qS.prototype.notEquals, qS.prototype.greater = function(SS) {
          return this.compare(SS) > 0
        }, IS.prototype.gt = IS.prototype.greater = uS.prototype.gt = uS.prototype.greater = qS.prototype.gt = qS.prototype.greater, qS.prototype.lesser = function(SS) {
          return this.compare(SS) < 0
        }, IS.prototype.lt = IS.prototype.lesser = uS.prototype.lt = uS.prototype.lesser = qS.prototype.lt = qS.prototype.lesser, qS.prototype.greaterOrEquals = function(SS) {
          return this.compare(SS) >= 0
        }, IS.prototype.geq = IS.prototype.greaterOrEquals = uS.prototype.geq = uS.prototype.greaterOrEquals = qS.prototype.geq = qS.prototype.greaterOrEquals, qS.prototype.lesserOrEquals = function(SS) {
          return this.compare(SS) <= 0
        }, IS.prototype.leq = IS.prototype.lesserOrEquals = uS.prototype.leq = uS.prototype.lesserOrEquals = qS.prototype.leq = qS.prototype.lesserOrEquals, qS.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, uS.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, IS.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, qS.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, uS.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, IS.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, qS.prototype.isPositive = function() {
          return !this.sign
        }, uS.prototype.isPositive = function() {
          return this.value > 0
        }, IS.prototype.isPositive = uS.prototype.isPositive, qS.prototype.isNegative = function() {
          return this.sign
        }, uS.prototype.isNegative = function() {
          return this.value < 0
        }, IS.prototype.isNegative = uS.prototype.isNegative, qS.prototype.isUnit = function() {
          return !1
        }, uS.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, IS.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, qS.prototype.isZero = function() {
          return !1
        }, uS.prototype.isZero = function() {
          return 0 === this.value
        }, IS.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, qS.prototype.isDivisibleBy = function(SS) {
          var HS = mS(SS);
          return !HS.isZero() && (!!HS.isUnit() || (0 === HS.compareAbs(2) ? this.isEven() : this.mod(HS).isZero()))
        }, IS.prototype.isDivisibleBy = uS.prototype.isDivisibleBy = qS.prototype.isDivisibleBy, qS.prototype.isPrime = function(gS) {
          var tS = LS(this);
          if (tS !== SS) return tS;
          var bS = this.abs(),
            XS = bS.bitLength();
          if (XS <= 64) return YS(bS, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var xS = Math.log(2) * XS.toJSNumber(), NS = Math.ceil(!0 === gS ? 2 * Math.pow(xS, 2) : xS), qS = [], uS = 0; uS < NS; uS++) qS.push(HS(uS + 2));
          return YS(bS, qS)
        }, IS.prototype.isPrime = uS.prototype.isPrime = qS.prototype.isPrime, qS.prototype.isProbablePrime = function(gS, tS) {
          var bS = LS(this);
          if (bS !== SS) return bS;
          for (var XS = this.abs(), xS = gS === SS ? 5 : gS, NS = [], qS = 0; qS < xS; qS++) NS.push(HS.randBetween(2, XS.minus(2), tS));
          return YS(XS, NS)
        }, IS.prototype.isProbablePrime = uS.prototype.isProbablePrime = qS.prototype.isProbablePrime, qS.prototype.modInv = function(SS) {
          for (var gS, tS, bS, XS = HS.zero, xS = HS.one, NS = mS(SS), qS = this.abs(); !qS.isZero();) gS = NS.divide(qS), tS = XS, bS = NS, XS = xS, NS = qS, xS = tS.subtract(gS.multiply(xS)), qS = bS.subtract(gS.multiply(qS));
          if (!NS.isUnit()) throw new Error(this.toString() + " and " + SS.toString() + " are not co-prime");
          return -1 === XS.compare(0) && (XS = XS.add(SS)), this.isNegative() ? XS.gq() : XS
        }, IS.prototype.modInv = uS.prototype.modInv = qS.prototype.modInv, qS.prototype.next = function() {
          var SS = this.value;
          return this.sign ? DS(SS, 1, this.sign) : new qS(PS(SS, 1), this.sign)
        }, uS.prototype.next = function() {
          var SS = this.value;
          return SS + 1 < tS ? new uS(SS + 1) : new qS(bS, !1)
        }, IS.prototype.next = function() {
          return new IS(this.value + BigInt(1))
        }, qS.prototype.prev = function() {
          var SS = this.value;
          return this.sign ? new qS(PS(SS, 1), !0) : DS(SS, 1, this.sign)
        }, uS.prototype.prev = function() {
          var SS = this.value;
          return SS - 1 > -tS ? new uS(SS - 1) : new qS(bS, !0)
        }, IS.prototype.prev = function() {
          return new IS(this.value - BigInt(1))
        };
        for (var AS = [1]; 2 * AS[AS.length - 1] <= gS;) AS.push(2 * AS[AS.length - 1]);
        var yS = AS.length,
          VS = AS[yS - 1];

        function iS(SS) {
          return Math.abs(SS) <= gS
        }

        function WS(SS, gS, tS) {
          gS = mS(gS);
          for (var bS = SS.isNegative(), XS = gS.isNegative(), xS = bS ? SS.not() : SS, NS = XS ? gS.not() : gS, qS = 0, uS = 0, IS = null, fS = null, kS = []; !xS.isZero() || !NS.isZero();) qS = (IS = vS(xS, VS))[1].toJSNumber(), bS && (qS = VS - 1 - qS), uS = (fS = vS(NS, VS))[1].toJSNumber(), XS && (uS = VS - 1 - uS), xS = IS[0], NS = fS[0], kS.push(tS(qS, uS));
          for (var aS = 0 !== tS(bS ? 1 : 0, XS ? 1 : 0) ? HS(-1) : HS(0), KS = kS.length - 1; KS >= 0; KS -= 1) aS = aS.multiply(VS).add(HS(kS[KS]));
          return aS
        }
        qS.prototype.shiftLeft = function(SS) {
          var HS = mS(SS).toJSNumber();
          if (!iS(HS)) throw new Error(String(HS) + " is too large for shifting.");
          if (HS < 0) return this.shiftRight(-HS);
          var gS = this;
          if (gS.isZero()) return gS;
          for (; HS >= yS;) gS = gS.multiply(VS), HS -= yS - 1;
          return gS.multiply(AS[HS])
        }, IS.prototype.shiftLeft = uS.prototype.shiftLeft = qS.prototype.shiftLeft, qS.prototype.shiftRight = function(SS) {
          var HS, gS = mS(SS).toJSNumber();
          if (!iS(gS)) throw new Error(String(gS) + " is too large for shifting.");
          if (gS < 0) return this.shiftLeft(-gS);
          for (var tS = this; gS >= yS;) {
            if (tS.isZero() || tS.isNegative() && tS.isUnit()) return tS;
            tS = (HS = vS(tS, VS))[1].isNegative() ? HS[0].prev() : HS[0], gS -= yS - 1
          }
          return (HS = vS(tS, AS[gS]))[1].isNegative() ? HS[0].prev() : HS[0]
        }, IS.prototype.shiftRight = uS.prototype.shiftRight = qS.prototype.shiftRight, qS.prototype.not = function() {
          return this.gq().prev()
        }, IS.prototype.not = uS.prototype.not = qS.prototype.not, qS.prototype.and = function(SS) {
          return WS(this, SS, (function(SS, HS) {
            return SS & HS
          }))
        }, IS.prototype.and = uS.prototype.and = qS.prototype.and, qS.prototype.or = function(SS) {
          return WS(this, SS, (function(SS, HS) {
            return SS | HS
          }))
        }, IS.prototype.or = uS.prototype.or = qS.prototype.or, qS.prototype.xor = function(SS) {
          return WS(this, SS, (function(SS, HS) {
            return SS ^ HS
          }))
        }, IS.prototype.xor = uS.prototype.xor = qS.prototype.xor;
        var zS = 1 << 30;

        function US(SS) {
          var HS = SS.value,
            tS = "number" === typeof HS ? HS | zS : "bigint" === typeof HS ? HS | BigInt(zS) : HS[0] + HS[1] * gS | 1073758208;
          return tS & -tS
        }

        function pS(SS, gS) {
          if (gS.compareTo(SS) <= 0) {
            var tS = pS(SS, gS.square(gS)),
              bS = tS.p,
              XS = tS.e,
              xS = bS.multiply(gS);
            return xS.compareTo(SS) <= 0 ? {
              p: xS,
              e: 2 * XS + 1
            } : {
              p: bS,
              e: 2 * XS
            }
          }
          return {
            p: HS(1),
            e: 0
          }
        }

        function sS(SS, HS) {
          return SS = mS(SS), HS = mS(HS), SS.greater(HS) ? SS : HS
        }

        function BS(SS, HS) {
          return SS = mS(SS), HS = mS(HS), SS.lesser(HS) ? SS : HS
        }

        function MS(SS, HS) {
          if (SS = mS(SS).abs(), HS = mS(HS).abs(), SS.equals(HS)) return SS;
          if (SS.isZero()) return HS;
          if (HS.isZero()) return SS;
          for (var gS, tS, bS = NS[1]; SS.isEven() && HS.isEven();) gS = BS(US(SS), US(HS)), SS = SS.divide(gS), HS = HS.divide(gS), bS = bS.multiply(gS);
          for (; SS.isEven();) SS = SS.divide(US(SS));
          do {
            for (; HS.isEven();) HS = HS.divide(US(HS));
            SS.greater(HS) && (tS = HS, HS = SS, SS = tS), HS = HS.subtract(SS)
          } while (!HS.isZero());
          return bS.isUnit() ? SS : SS.multiply(bS)
        }
        qS.prototype.bitLength = function() {
          var SS = this;
          return SS.compareTo(HS(0)) < 0 && (SS = SS.gq().subtract(HS(1))), 0 === SS.compareTo(HS(0)) ? HS(0) : HS(pS(SS, HS(2)).e).add(HS(1))
        }, IS.prototype.bitLength = uS.prototype.bitLength = qS.prototype.bitLength;
        var FS = function(SS, HS, gS, tS) {
          gS = gS || XS, SS = String(SS), tS || (SS = SS.toLowerCase(), gS = gS.toLowerCase());
          var bS, xS = SS.length,
            NS = Math.abs(HS),
            qS = {};
          for (bS = 0; bS < gS.length; bS++) qS[gS[bS]] = bS;
          for (bS = 0; bS < xS; bS++) {
            if ("-" !== (fS = SS[bS]) && (fS in qS && qS[fS] >= NS)) {
              if ("1" === fS && 1 === NS) continue;
              throw new Error(fS + " is not a valid digit in base " + HS + ".")
            }
          }
          HS = mS(HS);
          var uS = [],
            IS = "-" === SS[0];
          for (bS = IS ? 1 : 0; bS < SS.length; bS++) {
            var fS;
            if ((fS = SS[bS]) in qS) uS.push(mS(qS[fS]));
            else {
              if ("<" !== fS) throw new Error(fS + " is not a valid character");
              var kS = bS;
              do {
                bS++
              } while (">" !== SS[bS] && bS < SS.length);
              uS.push(mS(SS.slice(kS + 1, bS)))
            }
          }
          return RS(uS, HS, IS)
        };

        function RS(SS, HS, gS) {
          var tS, bS = NS[0],
            XS = NS[1];
          for (tS = SS.length - 1; tS >= 0; tS--) bS = bS.add(SS[tS].times(XS)), XS = XS.times(HS);
          return gS ? bS.gq() : bS
        }

        function TS(SS, gS) {
          if ((gS = HS(gS)).isZero()) {
            if (SS.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (gS.equals(-1)) {
            if (SS.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (SS.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-SS.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var tS = Array.apply(null, Array(SS.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return tS.unshift([1]), {
              value: [].concat.apply([], tS),
              isNegative: !1
            }
          }
          var bS = !1;
          if (SS.isNegative() && gS.isPositive() && (bS = !0, SS = SS.abs()), gS.isUnit()) return SS.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(SS.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: bS
          };
          for (var XS, xS = [], NS = SS; NS.isNegative() || NS.compareAbs(gS) >= 0;) {
            XS = NS.divmod(gS), NS = XS.quotient;
            var qS = XS.remainder;
            qS.isNegative() && (qS = gS.minus(qS).abs(), NS = NS.next()), xS.push(qS.toJSNumber())
          }
          return xS.push(NS.toJSNumber()), {
            value: xS.reverse(),
            isNegative: bS
          }
        }

        function oS(SS, HS, gS) {
          var tS = TS(SS, HS);
          return (tS.isNegative ? "-" : "") + tS.value.map((function(SS) {
            return function(SS, HS) {
              return SS < (HS = HS || XS).length ? HS[SS] : "<" + SS + ">"
            }(SS, gS)
          })).join("")
        }

        function lS(SS) {
          if (fS(+SS)) {
            var HS = +SS;
            if (HS === GS(HS)) return xS ? new IS(BigInt(HS)) : new uS(HS);
            throw new Error("Invalid integer: " + SS)
          }
          var gS = "-" === SS[0];
          gS && (SS = SS.slice(1));
          var tS = SS.split(/e/i);
          if (tS.length > 2) throw new Error("Invalid integer: " + tS.join("e"));
          if (2 === tS.length) {
            var bS = tS[1];
            if ("+" === bS[0] && (bS = bS.slice(1)), (bS = +bS) !== GS(bS) || !fS(bS)) throw new Error("Invalid integer: " + bS + " is not a valid exponent.");
            var XS = tS[0],
              NS = XS.indexOf(".");
            if (NS >= 0 && (bS -= XS.length - NS - 1, XS = XS.slice(0, NS) + XS.slice(NS + 1)), bS < 0) throw new Error("Cannot include negative exponent part for integers");
            SS = XS += new Array(bS + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(SS)) throw new Error("Invalid integer: " + SS);
          if (xS) return new IS(BigInt(gS ? "-" + SS : SS));
          for (var kS = [], aS = SS.length, jS = aS - 7; aS > 0;) kS.push(+SS.slice(jS, aS)), (jS -= 7) < 0 && (jS = 0), aS -= 7;
          return KS(kS), new qS(kS, gS)
        }

        function mS(SS) {
          return "number" === typeof SS ? function(SS) {
            if (xS) return new IS(BigInt(SS));
            if (fS(SS)) {
              if (SS !== GS(SS)) throw new Error(SS + " is not an integer.");
              return new uS(SS)
            }
            return lS(SS.toString())
          }(SS) : "string" === typeof SS ? lS(SS) : "bigint" === typeof SS ? new IS(SS) : SS
        }
        qS.prototype.toArray = function(SS) {
          return TS(this, SS)
        }, uS.prototype.toArray = function(SS) {
          return TS(this, SS)
        }, IS.prototype.toArray = function(SS) {
          return TS(this, SS)
        }, qS.prototype.toString = function(HS, gS) {
          if (HS === SS && (HS = 10), 10 !== HS) return oS(this, HS, gS);
          for (var tS, bS = this.value, XS = bS.length, xS = String(bS[--XS]); --XS >= 0;) tS = String(bS[XS]), xS += "0000000".slice(tS.length) + tS;
          return (this.sign ? "-" : "") + xS
        }, uS.prototype.toString = function(HS, gS) {
          return HS === SS && (HS = 10), 10 != HS ? oS(this, HS, gS) : String(this.value)
        }, IS.prototype.toString = uS.prototype.toString, IS.prototype.toJSON = qS.prototype.toJSON = uS.prototype.toJSON = function() {
          return this.toString()
        }, qS.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, qS.prototype.toJSNumber = qS.prototype.valueOf, uS.prototype.valueOf = function() {
          return this.value
        }, uS.prototype.toJSNumber = uS.prototype.valueOf, IS.prototype.valueOf = IS.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var eS = 0; eS < 1e3; eS++) NS[eS] = mS(eS), eS > 0 && (NS[-eS] = mS(-eS));
        return NS.one = NS[1], NS.zero = NS[0], NS.minusOne = NS[-1], NS.max = sS, NS.min = BS, NS.gcd = MS, NS.lcm = function(SS, HS) {
          return SS = mS(SS).abs(), HS = mS(HS).abs(), SS.divide(MS(SS, HS)).multiply(HS)
        }, NS.isInstance = function(SS) {
          return SS instanceof qS || SS instanceof uS || SS instanceof IS
        }, NS.randBetween = function(SS, HS, tS) {
          SS = mS(SS), HS = mS(HS);
          var bS = tS || Math.random,
            XS = BS(SS, HS),
            xS = sS(SS, HS).subtract(XS).add(1);
          if (xS.isSmall) return XS.add(Math.floor(bS() * xS));
          for (var qS = TS(xS, gS).value, uS = [], IS = !0, fS = 0; fS < qS.length; fS++) {
            var kS = IS ? qS[fS] : gS,
              aS = GS(bS() * kS);
            uS.push(aS), aS < kS && (IS = !1)
          }
          return XS.add(NS.UHS(uS, gS, !1))
        }, NS.UHS = function(SS, HS, gS) {
          return RS(SS.map(mS), mS(HS || 10), gS)
        }, NS
      }();
      SS.hasOwnProperty("exports") && (SS.exports = HS)
    }(ng);
    var Pg = XS(ng.exports);

    function Qg(SS, HS, gS) {
      let tS = 0;
      for (let bS = 0; bS < gS; bS++) {
        const gS = SS[HS + bS];
        if (void 0 === gS) break;
        tS += gS * 16 ** bS
      }
      return tS
    }

    function Dg(SS) {
      const HS = [];
      for (let gS = 0; gS < SS.length; gS++) {
        let tS = Number(SS[gS]);
        for (let SS = 0; tS || SS < HS.length; SS++) tS += 10 * (HS[SS] || 0), HS[SS] = tS % 16, tS = (tS - HS[SS]) / 16
      }
      return HS
    }
    class wg {
      static fromString(SS) {
        return new wg(function(SS) {
          const HS = Dg(SS),
            gS = Array(4);
          for (let tS = 0; tS < 4; tS++) gS[3 - tS] = Qg(HS, 4 * tS, 4);
          return gS
        }(SS), SS)
      }
      static fromBit(SS) {
        const HS = Array(4),
          gS = Math.floor(SS / 16);
        for (let tS = 0; tS < 4; tS++) HS[3 - tS] = tS === gS ? 1 << SS - 16 * gS : 0;
        return new wg(HS)
      }
      constructor(SS, HS) {
        this.parts = SS, this.str = HS
      }
      and(SS) {
        let {
          parts: HS
        } = SS;
        return new wg(this.parts.map(((SS, gS) => SS & HS[gS])))
      }
      or(SS) {
        let {
          parts: HS
        } = SS;
        return new wg(this.parts.map(((SS, gS) => SS | HS[gS])))
      }
      xor(SS) {
        let {
          parts: HS
        } = SS;
        return new wg(this.parts.map(((SS, gS) => SS ^ HS[gS])))
      }
      not() {
        return new wg(this.parts.map((SS => ~SS)))
      }
      equals(SS) {
        let {
          parts: HS
        } = SS;
        return this.parts.every(((SS, gS) => SS === HS[gS]))
      }
      toString() {
        if (null != this.str) return this.str;
        const SS = new Array(16);
        return this.parts.forEach(((HS, gS) => {
          const tS = Dg(HS.toString());
          for (let bS = 0; bS < 4; bS++) SS[bS + 4 * gS] = tS[3 - bS] || 0
        })), this.str = Pg.UHS(SS, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const hg = function() {
      try {
        return BigInt, !0
      } catch (SS) {
        return !1
      }
    }();
    hg && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const Zg = {},
      Jg = hg ? function(SS) {
        return BigInt(SS)
      } : function(SS) {
        return SS instanceof wg ? SS : ("number" === typeof SS && (SS = SS.toString()), null != Zg[SS] || (Zg[SS] = wg.fromString(SS)), Zg[SS])
      },
      Og = Jg(0),
      dg = hg ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Og) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Og)
      } : function() {
        let SS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Og;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Og).and(SS)
      },
      cg = hg ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Og) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Og)
      } : function() {
        let SS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Og;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Og).or(SS)
      },
      vg = hg ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Og) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Og)
      } : function() {
        let SS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Og;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Og).xor(SS)
      },
      Eg = hg ? function(SS, HS) {
        return SS === HS
      } : function(SS, HS) {
        return null == SS || null == HS ? SS == HS : SS.equals(HS)
      };
    var Lg, Yg, Ag, yg, Vg = {
      combine: function() {
        let SS = arguments.length <= 0 ? void 0 : arguments[0];
        for (let HS = 1; HS < arguments.length; HS++) SS = cg(SS, HS < 0 || arguments.length <= HS ? void 0 : arguments[HS]);
        return SS
      },
      add: function(SS, HS) {
        return HS === Og ? SS : cg(SS, HS)
      },
      remove: function(SS, HS) {
        return HS === Og ? SS : vg(SS, dg(SS, HS))
      },
      filter: dg,
      invert: hg ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Og)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Og).not()
      },
      has: function(SS, HS) {
        return Eg(dg(SS, HS), HS)
      },
      hasAny: function(SS, HS) {
        return !Eg(dg(SS, HS), Og)
      },
      equals: Eg,
      deserialize: Jg,
      getFlag: hg ? function(SS) {
        return BigInt(1) << BigInt(SS)
      } : function(SS) {
        return wg.fromBit(SS)
      }
    };
    ! function(SS) {
      SS[SS.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", SS[SS.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", SS[SS.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", SS[SS.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", SS[SS.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", SS[SS.RATELIMITED = 4002] = "RATELIMITED", SS[SS.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", SS[SS.INVALID_VERSION = 4004] = "INVALID_VERSION", SS[SS.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(Lg || (Lg = {})),
    function(SS) {
      SS[SS.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", SS[SS.INVALID_COMMAND = 4002] = "INVALID_COMMAND", SS[SS.INVALID_EVENT = 4004] = "INVALID_EVENT", SS[SS.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(Yg || (Yg = {})),
    function(SS) {
      SS.LANDSCAPE = "landscape", SS.PORTRAIT = "portrait"
    }(Ag || (Ag = {})),
    function(SS) {
      SS.MOBILE = "mobile", SS.DESKTOP = "desktop"
    }(yg || (yg = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: Vg.getFlag(0),
      ADMINISTRATOR: Vg.getFlag(3)
    });

    function ig(SS) {
      return ag((HS => {
        var gS;
        const [tS] = null !== (gS = Object.entries(SS).find((SS => {
          let [, gS] = SS;
          return gS === HS
        }))) && void 0 !== gS ? gS : [];
        return null != HS && void 0 === tS ? SS.UNHANDLED : HS
      }), AH().or(yH()))
    }
    const Wg = Cg.object({
        image_url: Cg.string()
      }),
      zg = Cg.object({
        mediaUrl: Cg.string().max(1024)
      }),
      Ug = Cg.object({
        access_token: Cg.union([Cg.string(), Cg.null()]).optional()
      }),
      pg = Cg.object({
        access_token: Cg.string(),
        user: Cg.object({
          username: Cg.string(),
          discriminator: Cg.string(),
          id: Cg.string(),
          avatar: Cg.union([Cg.string(), Cg.null()]).optional(),
          public_flags: Cg.number(),
          global_name: Cg.union([Cg.string(), Cg.null()]).optional()
        }),
        scopes: Cg.array(function(SS) {
          const HS = EH().transform((HS => {
            const gS = SS.safeParse(HS);
            return gS.success ? gS.data : SS._def.defaultValue()
          }));
          return HS.overlayType = SS, HS
        }(Cg.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(Cg.literal(-1)).default(-1))),
        expires: Cg.string(),
        application: Cg.object({
          description: Cg.string(),
          icon: Cg.union([Cg.string(), Cg.null()]).optional(),
          id: Cg.string(),
          rpc_origins: Cg.array(Cg.string()).optional(),
          name: Cg.string()
        })
      }),
      sg = Cg.object({
        participants: Cg.array(Cg.object({
          id: Cg.string(),
          username: Cg.string(),
          global_name: Cg.union([Cg.string(), Cg.null()]).optional(),
          discriminator: Cg.string(),
          avatar: Cg.union([Cg.string(), Cg.null()]).optional(),
          flags: Cg.number(),
          bot: Cg.boolean(),
          avatar_decoration_data: Cg.union([Cg.object({
            asset: Cg.string(),
            skuId: Cg.string().optional()
          }), Cg.null()]).optional(),
          premium_type: Cg.union([Cg.number(), Cg.null()]).optional(),
          nickname: Cg.string().optional()
        }))
      });
    var Bg;
    ! function(SS) {
      SS.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", SS.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", SS.AUTHENTICATE = "AUTHENTICATE", SS.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Bg || (Bg = {}));
    const Mg = Cg.object({}).optional().nullable(),
      Fg = Cg.void(),
      Rg = {
        [Bg.INITIATE_IMAGE_UPLOAD]: {
          request: Fg,
          response: Wg
        },
        [Bg.OPEN_SHARE_MOMENT_DIALOG]: {
          request: zg,
          response: Mg
        },
        [Bg.AUTHENTICATE]: {
          request: Ug,
          response: pg
        },
        [Bg.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: Fg,
          response: sg
        }
      },
      Tg = "DISPATCH";
    var og;
    ! function(SS) {
      SS.AUTHORIZE = "AUTHORIZE", SS.AUTHENTICATE = "AUTHENTICATE", SS.GET_GUILDS = "GET_GUILDS", SS.GET_GUILD = "GET_GUILD", SS.GET_CHANNEL = "GET_CHANNEL", SS.GET_CHANNELS = "GET_CHANNELS", SS.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", SS.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", SS.SUBSCRIBE = "SUBSCRIBE", SS.UNSUBSCRIBE = "UNSUBSCRIBE", SS.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", SS.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", SS.SET_ACTIVITY = "SET_ACTIVITY", SS.GET_SKUS = "GET_SKUS", SS.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", SS.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", SS.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", SS.START_PURCHASE = "START_PURCHASE", SS.SET_CONFIG = "SET_CONFIG", SS.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", SS.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", SS.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", SS.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", SS.CAPTURE_LOG = "CAPTURE_LOG", SS.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", SS.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", SS.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", SS.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", SS.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", SS.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", SS.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(og || (og = {}));
    const lg = oH({
        cmd: AH(),
        data: MH(),
        evt: sH(),
        nonce: AH()
      }).passthrough(),
      mg = (ig(Object.assign(Object.assign({}, pg.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), oH({
        id: AH(),
        username: AH(),
        discriminator: AH(),
        global_name: AH().optional().nullable(),
        avatar: AH().optional().nullable(),
        avatar_decoration_data: oH({
          asset: AH(),
          sku_id: AH().optional()
        }).nullable(),
        bot: WH(),
        flags: yH().optional().nullable(),
        premium_type: yH().optional().nullable()
      })),
      eg = oH({
        user: mg,
        nick: AH().optional().nullable(),
        roles: TH(AH()),
        joined_at: AH(),
        deaf: WH(),
        mute: WH()
      }),
      rg = oH({
        id: AH(),
        name: AH().optional().nullable(),
        roles: TH(AH()).optional().nullable(),
        user: mg.optional().nullable(),
        require_colons: WH().optional().nullable(),
        managed: WH().optional().nullable(),
        animated: WH().optional().nullable(),
        available: WH().optional().nullable()
      }),
      St = oH({
        mute: WH(),
        deaf: WH(),
        self_mute: WH(),
        self_deaf: WH(),
        suppress: WH()
      }),
      Ht = oH({
        mute: WH(),
        nick: AH(),
        user: mg,
        voice_state: St,
        volume: yH()
      }),
      gt = ig({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      tt = oH({
        name: AH(),
        type: yH(),
        url: AH().optional().nullable(),
        created_at: yH().optional().nullable(),
        timestamps: oH({
          start: yH(),
          end: yH()
        }).partial().optional().nullable(),
        application_id: AH().optional().nullable(),
        details: AH().optional().nullable(),
        state: AH().optional().nullable(),
        emoji: rg.optional().nullable(),
        party: oH({
          id: AH().optional().nullable(),
          size: TH(yH()).optional().nullable()
        }).optional().nullable(),
        assets: oH({
          large_image: AH().nullable(),
          large_text: AH().nullable(),
          small_image: AH().nullable(),
          small_text: AH().nullable()
        }).partial().optional().nullable(),
        secrets: oH({
          join: AH(),
          match: AH()
        }).partial().optional().nullable(),
        instance: WH().optional().nullable(),
        flags: yH().optional().nullable()
      }),
      bt = oH({
        id: AH(),
        type: ig({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: AH(),
        deny: AH()
      }),
      Xt = {
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
      xt = oH({
        id: AH(),
        type: ig(Xt),
        guild_id: AH().optional().nullable(),
        position: yH().optional().nullable(),
        permission_overwrites: TH(bt).optional().nullable(),
        name: AH().optional().nullable(),
        topic: AH().optional().nullable(),
        nsfw: WH().optional().nullable(),
        last_message_id: AH().optional().nullable(),
        bitrate: yH().optional().nullable(),
        user_limit: yH().optional().nullable(),
        rate_limit_per_user: yH().optional().nullable(),
        recipients: TH(mg).optional().nullable(),
        icon: AH().optional().nullable(),
        owner_id: AH().optional().nullable(),
        application_id: AH().optional().nullable(),
        parent_id: AH().optional().nullable(),
        last_pin_timestamp: AH().optional().nullable()
      }),
      Nt = oH({
        user: mg,
        guild_id: AH(),
        status: gt,
        activities: TH(tt),
        client_status: oH({
          desktop: gt,
          mobile: gt,
          web: gt
        }).partial()
      }),
      qt = oH({
        id: AH(),
        name: AH(),
        color: yH(),
        hoist: WH(),
        position: yH(),
        permissions: AH(),
        managed: WH(),
        mentionable: WH()
      }),
      ut = (oH({
        id: AH(),
        name: AH(),
        owner_id: AH(),
        icon: AH().nullable(),
        icon_hash: AH().optional().nullable(),
        splash: AH().nullable(),
        discovery_splash: AH().nullable(),
        owner: WH().optional().nullable(),
        permissions: AH().optional().nullable(),
        region: AH(),
        afk_channel_id: AH().nullable(),
        afk_timeout: yH(),
        widget_enabled: WH().optional().nullable(),
        widget_channel_id: AH().optional().nullable(),
        verification_level: yH(),
        default_message_notifications: yH(),
        explicit_content_filter: yH(),
        roles: TH(qt),
        emojis: TH(rg),
        features: TH(AH()),
        mfa_level: yH(),
        application_id: AH().nullable(),
        system_channel_id: AH().nullable(),
        system_channel_flags: yH(),
        rules_channel_id: AH().nullable(),
        joined_at: AH().optional().nullable(),
        large: WH().optional().nullable(),
        unavailable: WH().optional().nullable(),
        member_count: yH().optional().nullable(),
        voice_states: TH(St).optional().nullable(),
        members: TH(eg).optional().nullable(),
        channels: TH(xt).optional().nullable(),
        presences: TH(Nt).optional().nullable(),
        max_presences: yH().optional().nullable(),
        max_members: yH().optional().nullable(),
        vanity_url_code: AH().nullable(),
        description: AH().nullable(),
        banner: AH().nullable(),
        premium_tier: yH(),
        premium_subscription_count: yH().optional().nullable(),
        preferred_locale: AH(),
        public_updates_channel_id: AH().nullable(),
        max_video_channel_users: yH().optional().nullable(),
        approximate_member_count: yH().optional().nullable(),
        approximate_presence_count: yH().optional().nullable()
      }), oH({
        id: AH(),
        guild_id: AH(),
        type: yH(),
        name: AH()
      })),
      It = oH({
        id: AH(),
        filename: AH(),
        size: yH(),
        url: AH(),
        proxy_url: AH(),
        height: yH().optional().nullable(),
        width: yH().optional().nullable()
      }),
      ft = oH({
        text: AH(),
        icon_url: AH().optional().nullable(),
        proxy_icon_url: AH().optional().nullable()
      }),
      kt = oH({
        url: AH().optional().nullable(),
        proxy_url: AH().optional().nullable(),
        height: yH().optional().nullable(),
        width: yH().optional().nullable()
      }),
      Kt = kt.omit({
        proxy_url: !0
      }),
      jt = oH({
        name: AH().optional().nullable(),
        url: AH().optional().nullable()
      }),
      Gt = oH({
        name: AH().optional().nullable(),
        url: AH().optional().nullable(),
        icon_url: AH().optional().nullable(),
        proxy_icon_url: AH().optional().nullable()
      }),
      Ct = oH({
        name: AH(),
        value: AH(),
        inline: WH()
      }),
      nt = oH({
        title: AH().optional().nullable(),
        type: AH().optional().nullable(),
        description: AH().optional().nullable(),
        url: AH().optional().nullable(),
        timestamp: AH().optional().nullable(),
        color: yH().optional().nullable(),
        footer: ft.optional().nullable(),
        image: kt.optional().nullable(),
        thumbnail: kt.optional().nullable(),
        video: Kt.optional().nullable(),
        provider: jt.optional().nullable(),
        author: Gt.optional().nullable(),
        fields: TH(Ct).optional().nullable()
      }),
      Pt = oH({
        count: yH(),
        me: WH(),
        emoji: rg
      }),
      Qt = oH({
        type: yH(),
        party_id: AH().optional().nullable()
      }),
      Dt = oH({
        id: AH(),
        cover_image: AH().optional().nullable(),
        description: AH(),
        icon: AH().optional().nullable(),
        name: AH()
      }),
      wt = oH({
        message_id: AH().optional().nullable(),
        channel_id: AH().optional().nullable(),
        guild_id: AH().optional().nullable()
      }),
      ht = oH({
        id: AH(),
        channel_id: AH(),
        guild_id: AH().optional().nullable(),
        author: mg.optional().nullable(),
        member: eg.optional().nullable(),
        content: AH(),
        timestamp: AH(),
        edited_timestamp: AH().optional().nullable(),
        tts: WH(),
        mention_everyone: WH(),
        mentions: TH(mg),
        mention_roles: TH(AH()),
        mention_channels: TH(ut),
        attachments: TH(It),
        embeds: TH(nt),
        reactions: TH(Pt).optional().nullable(),
        nonce: mH([AH(), yH()]).optional().nullable(),
        pinned: WH(),
        webhook_id: AH().optional().nullable(),
        type: yH(),
        activity: Qt.optional().nullable(),
        application: Dt.optional().nullable(),
        message_reference: wt.optional().nullable(),
        flags: yH().optional().nullable(),
        stickers: TH(MH()).optional().nullable(),
        referenced_message: MH().optional().nullable()
      }),
      Zt = oH({
        id: AH(),
        name: AH()
      }),
      Jt = oH({
        type: ig({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: yH(),
        name: AH()
      }),
      Ot = oH({
        type: ig({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: WH(),
        threshold: yH(),
        shortcut: TH(Jt),
        delay: yH()
      }),
      dt = oH({
        device_id: AH(),
        volume: yH(),
        available_devices: TH(Zt)
      }),
      ct = (oH({
        type: ig({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: AH(),
        vendor: oH({
          name: AH(),
          url: AH()
        }),
        model: oH({
          name: AH(),
          url: AH()
        }),
        related: TH(AH()),
        echo_cancellation: WH().optional().nullable(),
        noise_suppression: WH().optional().nullable(),
        automatic_gain_control: WH().optional().nullable(),
        hardware_mute: WH().optional().nullable()
      }), oH({
        id: AH(),
        name: AH(),
        type: ig({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: oH({
          amount: yH(),
          currency: AH()
        }),
        application_id: AH(),
        flags: yH(),
        release_date: AH().nullable()
      })),
      vt = oH({
        id: AH(),
        sku_id: AH(),
        application_id: AH(),
        user_id: AH(),
        gift_code_flags: yH(),
        type: ig({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: AH().optional().nullable(),
        branches: TH(AH()).optional().nullable(),
        starts_at: AH().optional().nullable(),
        ends_at: AH().optional().nullable(),
        parent_id: AH().optional().nullable(),
        consumed: WH().optional().nullable(),
        deleted: WH().optional().nullable(),
        gift_code_batch_id: AH().optional().nullable()
      }),
      Et = (ig({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), ig({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      Lt = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      Yt = (ig(Lt), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      At = (ig(Yt), "ERROR");
    var yt;
    ! function(SS) {
      SS.READY = "READY", SS.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", SS.SPEAKING_START = "SPEAKING_START", SS.SPEAKING_STOP = "SPEAKING_STOP", SS.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", SS.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", SS.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", SS.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", SS.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", SS.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(yt || (yt = {}));
    const Vt = lg.extend({
        evt: qg(yt),
        nonce: AH().nullable(),
        cmd: xg(Tg),
        data: oH({}).passthrough()
      }),
      it = lg.extend({
        evt: xg(At),
        data: oH({
          code: yH(),
          message: AH().optional()
        }).passthrough(),
        cmd: qg(og),
        nonce: AH().nullable()
      }),
      Wt = Vt.extend({
        evt: AH()
      }),
      zt = mH([Vt, Wt, it]);
    const Ut = {
      [yt.READY]: {
        payload: Vt.extend({
          evt: xg(yt.READY),
          data: oH({
            v: yH(),
            config: oH({
              cdn_host: AH().optional(),
              api_endpoint: AH(),
              environment: AH()
            }),
            user: oH({
              id: AH(),
              username: AH(),
              discriminator: AH(),
              avatar: AH().optional()
            }).optional()
          })
        })
      },
      [yt.VOICE_STATE_UPDATE]: {
        payload: Vt.extend({
          evt: xg(yt.VOICE_STATE_UPDATE),
          data: Ht
        }),
        subscribeArgs: oH({
          channel_id: AH()
        })
      },
      [yt.SPEAKING_START]: {
        payload: Vt.extend({
          evt: xg(yt.SPEAKING_START),
          data: oH({
            lobby_id: AH().optional(),
            channel_id: AH().optional(),
            user_id: AH()
          })
        }),
        subscribeArgs: oH({
          lobby_id: AH().nullable().optional(),
          channel_id: AH().nullable().optional()
        })
      },
      [yt.SPEAKING_STOP]: {
        payload: Vt.extend({
          evt: xg(yt.SPEAKING_STOP),
          data: oH({
            lobby_id: AH().optional(),
            channel_id: AH().optional(),
            user_id: AH()
          })
        }),
        subscribeArgs: oH({
          lobby_id: AH().nullable().optional(),
          channel_id: AH().nullable().optional()
        })
      },
      [yt.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: Vt.extend({
          evt: xg(yt.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: oH({
            layout_mode: ig(Yt)
          })
        })
      },
      [yt.ORIENTATION_UPDATE]: {
        payload: Vt.extend({
          evt: xg(yt.ORIENTATION_UPDATE),
          data: oH({
            screen_orientation: ig(Lt),
            orientation: qg(Ag)
          })
        })
      },
      [yt.CURRENT_USER_UPDATE]: {
        payload: Vt.extend({
          evt: xg(yt.CURRENT_USER_UPDATE),
          data: mg
        })
      },
      [yt.ENTITLEMENT_CREATE]: {
        payload: Vt.extend({
          evt: xg(yt.ENTITLEMENT_CREATE),
          data: oH({
            entitlement: vt
          })
        })
      },
      [yt.THERMAL_STATE_UPDATE]: {
        payload: Vt.extend({
          evt: xg(yt.THERMAL_STATE_UPDATE),
          data: oH({
            thermal_state: Et
          })
        })
      },
      [yt.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: Vt.extend({
          evt: xg(yt.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: oH({
            participants: sg.shape.participants
          })
        })
      }
    };
    const pt = oH({}).nullable(),
      st = oH({
        code: AH()
      }),
      Bt = oH({
        guilds: TH(oH({
          id: AH(),
          name: AH()
        }))
      }),
      Mt = oH({
        id: AH(),
        name: AH(),
        icon_url: AH().optional(),
        members: TH(eg)
      }),
      Ft = oH({
        id: AH(),
        type: ig(Xt),
        guild_id: AH().optional().nullable(),
        name: AH().optional().nullable(),
        topic: AH().optional().nullable(),
        bitrate: yH().optional().nullable(),
        user_limit: yH().optional().nullable(),
        position: yH().optional().nullable(),
        voice_states: TH(Ht),
        messages: TH(ht)
      }),
      Rt = oH({
        channels: TH(xt)
      }),
      Tt = (Ft.nullable(), Ft.nullable()),
      ot = Ft.nullable(),
      lt = (oH({
        input: dt,
        output: dt,
        mode: Ot,
        automatic_gain_control: WH(),
        echo_cancellation: WH(),
        noise_suppression: WH(),
        qos: WH(),
        silence_warning: WH(),
        deaf: WH(),
        mute: WH()
      }), oH({
        evt: AH()
      })),
      mt = oH({
        shortcut: Jt
      }),
      et = tt,
      rt = oH({
        skus: TH(ct)
      }),
      Sb = oH({
        entitlements: TH(vt)
      }),
      Hb = TH(vt).nullable(),
      gb = oH({
        use_interactive_pip: WH()
      }),
      tb = oH({
        locale: AH()
      }),
      bb = oH({
        enabled: WH()
      }),
      Xb = oH({
        permissions: iH().or(AH())
      }),
      xb = oH({
        iosKeyboardResizesView: fg(WH())
      }),
      Nb = lg.extend({
        cmd: qg(og),
        evt: sH()
      });

    function qb(SS) {
      let {
        cmd: HS,
        data: gS
      } = SS;
      switch (HS) {
        case og.AUTHORIZE:
          return st.parse(gS);
        case og.CAPTURE_SHORTCUT:
          return mt.parse(gS);
        case og.ENCOURAGE_HW_ACCELERATION:
          return bb.parse(gS);
        case og.GET_CHANNEL:
          return Ft.parse(gS);
        case og.GET_CHANNELS:
          return Rt.parse(gS);
        case og.GET_CHANNEL_PERMISSIONS:
          return Xb.parse(gS);
        case og.GET_GUILD:
          return Mt.parse(gS);
        case og.GET_GUILDS:
          return Bt.parse(gS);
        case og.GET_PLATFORM_BEHAVIORS:
          return xb.parse(gS);
        case og.GET_CHANNEL:
          return Ft.parse(gS);
        case og.SELECT_TEXT_CHANNEL:
          return ot.parse(gS);
        case og.SELECT_VOICE_CHANNEL:
          return Tt.parse(gS);
        case og.SET_ACTIVITY:
          return et.parse(gS);
        case og.GET_SKUS_EMBEDDED:
          return rt.parse(gS);
        case og.GET_ENTITLEMENTS_EMBEDDED:
          return Sb.parse(gS);
        case og.SET_CONFIG:
          return gb.parse(gS);
        case og.START_PURCHASE:
          return Hb.parse(gS);
        case og.SUBSCRIBE:
        case og.UNSUBSCRIBE:
          return lt.parse(gS);
        case og.USER_SETTINGS_GET_LOCALE:
          return tb.parse(gS);
        case og.OPEN_EXTERNAL_LINK:
        case og.SET_ORIENTATION_LOCK_STATE:
        case og.SET_CERTIFIED_DEVICES:
        case og.SEND_ANALYTICS_EVENT:
        case og.OPEN_INVITE_DIALOG:
        case og.CAPTURE_LOG:
        case og.GET_SKUS:
        case og.GET_ENTITLEMENTS:
          return pt.parse(gS);
        case og.AUTHENTICATE:
        case og.INITIATE_IMAGE_UPLOAD:
        case og.OPEN_SHARE_MOMENT_DIALOG:
        case og.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: SS
          } = Rg[HS];
          return SS.parse(gS);
        default:
          ! function(SS, HS) {
            throw HS
          }(0, new Error(`Unrecognized command ${HS}`))
      }
    }
    oH({
      frame_id: AH(),
      platform: qg(yg).optional().nullable()
    }), oH({
      v: xg(1),
      encoding: xg("json").optional(),
      client_id: AH(),
      frame_id: AH()
    });
    const ub = oH({
        code: yH(),
        message: AH().optional()
      }),
      Ib = oH({
        evt: AH().nullable(),
        nonce: AH().nullable(),
        data: MH().nullable(),
        cmd: AH()
      }).passthrough();

    function fb(SS) {
      const HS = Ib.parse(SS);
      return null != HS.evt ? HS.evt === At ? it.parse(HS) : function(SS) {
        const HS = SS.evt;
        if (!(HS in yt)) throw new Error(`Unrecognized event type ${SS.evt}`);
        return Ut[HS].payload.parse(SS)
      }(zt.parse(HS)) : function(SS) {
        return Object.assign(Object.assign({}, SS), {
          data: qb(SS)
        })
      }(Nb.passthrough().parse(HS))
    }

    function kb(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const bS = lg.extend({
        cmd: xg(HS),
        data: gS
      });
      return async gS => {
        const XS = await SS({
          cmd: HS,
          args: gS,
          transfer: tS(gS)
        });
        return bS.parse(XS).data
      }
    }

    function ab(SS) {
      let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const gS = Rg[SS].response,
        tS = lg.extend({
          cmd: xg(SS),
          data: gS
        });
      return gS => async bS => {
        const XS = await gS({
          cmd: SS,
          args: bS,
          transfer: HS(bS)
        });
        return tS.parse(XS).data
      }
    }
    const Kb = ab(Bg.AUTHENTICATE),
      jb = SS => kb(SS, og.AUTHORIZE, st),
      Gb = SS => kb(SS, og.CAPTURE_LOG, pt),
      Cb = SS => kb(SS, og.ENCOURAGE_HW_ACCELERATION, bb),
      nb = SS => kb(SS, og.GET_ENTITLEMENTS_EMBEDDED, Sb),
      Pb = SS => kb(SS, og.GET_SKUS_EMBEDDED, rt),
      Qb = SS => kb(SS, og.GET_CHANNEL_PERMISSIONS, Xb),
      Db = SS => kb(SS, og.GET_PLATFORM_BEHAVIORS, xb),
      wb = SS => kb(SS, og.OPEN_EXTERNAL_LINK, pt),
      hb = SS => kb(SS, og.OPEN_INVITE_DIALOG, pt),
      Zb = ab(Bg.OPEN_SHARE_MOMENT_DIALOG);
    tt.Sa({
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
      type: tt.shape.type.optional(),
      instance: tt.shape.instance.optional()
    }).nullable();
    const Jb = SS => kb(SS, og.SET_ACTIVITY, et),
      Ob = SS => kb(SS, og.SET_CONFIG, gb);
    const db = SS => ({
        lock_state: SS.lock_state,
        picture_in_picture_lock_state: SS.picture_in_picture_lock_state
      }),
      cb = SS => function(SS) {
        let {
          sendCommand: HS,
          cmd: gS,
          response: tS,
          fallbackTransform: bS,
          transferTransform: XS = () => {}
        } = SS;
        const xS = lg.extend({
          cmd: xg(gS),
          data: tS
        });
        return async SS => {
          try {
            const tS = await HS({
              cmd: gS,
              args: SS,
              transfer: XS(SS)
            });
            return xS.parse(tS).data
          } catch (tS) {
            if (tS.code === Yg.INVALID_PAYLOAD) {
              const tS = bS(SS),
                NS = await HS({
                  cmd: gS,
                  args: tS,
                  transfer: XS(tS)
                });
              return xS.parse(NS).data
            }
            throw tS
          }
        }
      }({
        sendCommand: SS,
        cmd: og.SET_ORIENTATION_LOCK_STATE,
        response: pt,
        fallbackTransform: db
      }),
      vb = SS => kb(SS, og.START_PURCHASE, Hb),
      Eb = SS => kb(SS, og.USER_SETTINGS_GET_LOCALE, tb),
      Lb = ab(Bg.INITIATE_IMAGE_UPLOAD),
      Yb = SS => kb(SS, og.GET_CHANNEL, Ft),
      Ab = ab(Bg.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var yb = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function Vb(SS) {
      return "string" === typeof SS && yb.test(SS)
    }
    for (var ib = [], Wb = 0; Wb < 256; ++Wb) ib.push((Wb + 256).toString(16).substr(1));

    function zb(SS) {
      var HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        gS = (ib[SS[HS + 0]] + ib[SS[HS + 1]] + ib[SS[HS + 2]] + ib[SS[HS + 3]] + "-" + ib[SS[HS + 4]] + ib[SS[HS + 5]] + "-" + ib[SS[HS + 6]] + ib[SS[HS + 7]] + "-" + ib[SS[HS + 8]] + ib[SS[HS + 9]] + "-" + ib[SS[HS + 10]] + ib[SS[HS + 11]] + ib[SS[HS + 12]] + ib[SS[HS + 13]] + ib[SS[HS + 14]] + ib[SS[HS + 15]]).toLowerCase();
      if (!Vb(gS)) throw TypeError("Stringified UUID is invalid");
      return gS
    }
    var Ub;

    function pb(SS, HS, gS) {
      function tS(SS, tS, bS, XS) {
        if ("string" === typeof SS && (SS = function(SS) {
            SS = unescape(encodeURIComponent(SS));
            for (var HS = [], gS = 0; gS < SS.length; ++gS) HS.push(SS.charCodeAt(gS));
            return HS
          }(SS)), "string" === typeof tS && (tS = function(SS) {
            if (!Vb(SS)) throw TypeError("Invalid UUID");
            var HS, gS = new Uint8Array(16);
            return gS[0] = (HS = parseInt(SS.slice(0, 8), 16)) >>> 24, gS[1] = HS >>> 16 & 255, gS[2] = HS >>> 8 & 255, gS[3] = 255 & HS, gS[4] = (HS = parseInt(SS.slice(9, 13), 16)) >>> 8, gS[5] = 255 & HS, gS[6] = (HS = parseInt(SS.slice(14, 18), 16)) >>> 8, gS[7] = 255 & HS, gS[8] = (HS = parseInt(SS.slice(19, 23), 16)) >>> 8, gS[9] = 255 & HS, gS[10] = (HS = parseInt(SS.slice(24, 36), 16)) / 1099511627776 & 255, gS[11] = HS / 4294967296 & 255, gS[12] = HS >>> 24 & 255, gS[13] = HS >>> 16 & 255, gS[14] = HS >>> 8 & 255, gS[15] = 255 & HS, gS
          }(tS)), 16 !== tS.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var xS = new Uint8Array(16 + SS.length);
        if (xS.set(tS), xS.set(SS, tS.length), (xS = gS(xS))[6] = 15 & xS[6] | HS, xS[8] = 63 & xS[8] | 128, bS) {
          XS = XS || 0;
          for (var NS = 0; NS < 16; ++NS) bS[XS + NS] = xS[NS];
          return bS
        }
        return zb(xS)
      }
      try {
        tS.name = SS
      } catch (bS) {}
      return tS.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", tS.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", tS
    }

    function sb(SS) {
      return 14 + (SS + 64 >>> 9 << 4) + 1
    }

    function Bb(SS, HS) {
      var gS = (65535 & SS) + (65535 & HS);
      return (SS >> 16) + (HS >> 16) + (gS >> 16) << 16 | 65535 & gS
    }

    function Mb(SS, HS, gS, tS, bS, XS) {
      return Bb((xS = Bb(Bb(HS, SS), Bb(tS, XS))) << (NS = bS) | xS >>> 32 - NS, gS);
      var xS, NS
    }

    function Fb(SS, HS, gS, tS, bS, XS, xS) {
      return Mb(HS & gS | ~HS & tS, SS, HS, bS, XS, xS)
    }

    function Rb(SS, HS, gS, tS, bS, XS, xS) {
      return Mb(HS & tS | gS & ~tS, SS, HS, bS, XS, xS)
    }

    function Tb(SS, HS, gS, tS, bS, XS, xS) {
      return Mb(HS ^ gS ^ tS, SS, HS, bS, XS, xS)
    }

    function ob(SS, HS, gS, tS, bS, XS, xS) {
      return Mb(gS ^ (HS | ~tS), SS, HS, bS, XS, xS)
    }
    pb("v3", 48, (function(SS) {
      if ("string" === typeof SS) {
        var HS = unescape(encodeURIComponent(SS));
        SS = new Uint8Array(HS.length);
        for (var gS = 0; gS < HS.length; ++gS) SS[gS] = HS.charCodeAt(gS)
      }
      return function(SS) {
        for (var HS = [], gS = 32 * SS.length, tS = "0123456789abcdef", bS = 0; bS < gS; bS += 8) {
          var XS = SS[bS >> 5] >>> bS % 32 & 255,
            xS = parseInt(tS.charAt(XS >>> 4 & 15) + tS.charAt(15 & XS), 16);
          HS.push(xS)
        }
        return HS
      }(function(SS, HS) {
        SS[HS >> 5] |= 128 << HS % 32, SS[sb(HS) - 1] = HS;
        for (var gS = 1732584193, tS = -271733879, bS = -1732584194, XS = 271733878, xS = 0; xS < SS.length; xS += 16) {
          var NS = gS,
            qS = tS,
            uS = bS,
            IS = XS;
          gS = Fb(gS, tS, bS, XS, SS[xS], 7, -680876936), XS = Fb(XS, gS, tS, bS, SS[xS + 1], 12, -389564586), bS = Fb(bS, XS, gS, tS, SS[xS + 2], 17, 606105819), tS = Fb(tS, bS, XS, gS, SS[xS + 3], 22, -1044525330), gS = Fb(gS, tS, bS, XS, SS[xS + 4], 7, -176418897), XS = Fb(XS, gS, tS, bS, SS[xS + 5], 12, 1200080426), bS = Fb(bS, XS, gS, tS, SS[xS + 6], 17, -1473231341), tS = Fb(tS, bS, XS, gS, SS[xS + 7], 22, -45705983), gS = Fb(gS, tS, bS, XS, SS[xS + 8], 7, 1770035416), XS = Fb(XS, gS, tS, bS, SS[xS + 9], 12, -1958414417), bS = Fb(bS, XS, gS, tS, SS[xS + 10], 17, -42063), tS = Fb(tS, bS, XS, gS, SS[xS + 11], 22, -1990404162), gS = Fb(gS, tS, bS, XS, SS[xS + 12], 7, 1804603682), XS = Fb(XS, gS, tS, bS, SS[xS + 13], 12, -40341101), bS = Fb(bS, XS, gS, tS, SS[xS + 14], 17, -1502002290), gS = Rb(gS, tS = Fb(tS, bS, XS, gS, SS[xS + 15], 22, 1236535329), bS, XS, SS[xS + 1], 5, -165796510), XS = Rb(XS, gS, tS, bS, SS[xS + 6], 9, -1069501632), bS = Rb(bS, XS, gS, tS, SS[xS + 11], 14, 643717713), tS = Rb(tS, bS, XS, gS, SS[xS], 20, -373897302), gS = Rb(gS, tS, bS, XS, SS[xS + 5], 5, -701558691), XS = Rb(XS, gS, tS, bS, SS[xS + 10], 9, 38016083), bS = Rb(bS, XS, gS, tS, SS[xS + 15], 14, -660478335), tS = Rb(tS, bS, XS, gS, SS[xS + 4], 20, -405537848), gS = Rb(gS, tS, bS, XS, SS[xS + 9], 5, 568446438), XS = Rb(XS, gS, tS, bS, SS[xS + 14], 9, -1019803690), bS = Rb(bS, XS, gS, tS, SS[xS + 3], 14, -187363961), tS = Rb(tS, bS, XS, gS, SS[xS + 8], 20, 1163531501), gS = Rb(gS, tS, bS, XS, SS[xS + 13], 5, -1444681467), XS = Rb(XS, gS, tS, bS, SS[xS + 2], 9, -51403784), bS = Rb(bS, XS, gS, tS, SS[xS + 7], 14, 1735328473), gS = Tb(gS, tS = Rb(tS, bS, XS, gS, SS[xS + 12], 20, -1926607734), bS, XS, SS[xS + 5], 4, -378558), XS = Tb(XS, gS, tS, bS, SS[xS + 8], 11, -2022574463), bS = Tb(bS, XS, gS, tS, SS[xS + 11], 16, 1839030562), tS = Tb(tS, bS, XS, gS, SS[xS + 14], 23, -35309556), gS = Tb(gS, tS, bS, XS, SS[xS + 1], 4, -1530992060), XS = Tb(XS, gS, tS, bS, SS[xS + 4], 11, 1272893353), bS = Tb(bS, XS, gS, tS, SS[xS + 7], 16, -155497632), tS = Tb(tS, bS, XS, gS, SS[xS + 10], 23, -1094730640), gS = Tb(gS, tS, bS, XS, SS[xS + 13], 4, 681279174), XS = Tb(XS, gS, tS, bS, SS[xS], 11, -358537222), bS = Tb(bS, XS, gS, tS, SS[xS + 3], 16, -722521979), tS = Tb(tS, bS, XS, gS, SS[xS + 6], 23, 76029189), gS = Tb(gS, tS, bS, XS, SS[xS + 9], 4, -640364487), XS = Tb(XS, gS, tS, bS, SS[xS + 12], 11, -421815835), bS = Tb(bS, XS, gS, tS, SS[xS + 15], 16, 530742520), gS = ob(gS, tS = Tb(tS, bS, XS, gS, SS[xS + 2], 23, -995338651), bS, XS, SS[xS], 6, -198630844), XS = ob(XS, gS, tS, bS, SS[xS + 7], 10, 1126891415), bS = ob(bS, XS, gS, tS, SS[xS + 14], 15, -1416354905), tS = ob(tS, bS, XS, gS, SS[xS + 5], 21, -57434055), gS = ob(gS, tS, bS, XS, SS[xS + 12], 6, 1700485571), XS = ob(XS, gS, tS, bS, SS[xS + 3], 10, -1894986606), bS = ob(bS, XS, gS, tS, SS[xS + 10], 15, -1051523), tS = ob(tS, bS, XS, gS, SS[xS + 1], 21, -2054922799), gS = ob(gS, tS, bS, XS, SS[xS + 8], 6, 1873313359), XS = ob(XS, gS, tS, bS, SS[xS + 15], 10, -30611744), bS = ob(bS, XS, gS, tS, SS[xS + 6], 15, -1560198380), tS = ob(tS, bS, XS, gS, SS[xS + 13], 21, 1309151649), gS = ob(gS, tS, bS, XS, SS[xS + 4], 6, -145523070), XS = ob(XS, gS, tS, bS, SS[xS + 11], 10, -1120210379), bS = ob(bS, XS, gS, tS, SS[xS + 2], 15, 718787259), tS = ob(tS, bS, XS, gS, SS[xS + 9], 21, -343485551), gS = Bb(gS, NS), tS = Bb(tS, qS), bS = Bb(bS, uS), XS = Bb(XS, IS)
        }
        return [gS, tS, bS, XS]
      }(function(SS) {
        if (0 === SS.length) return [];
        for (var HS = 8 * SS.length, gS = new Uint32Array(sb(HS)), tS = 0; tS < HS; tS += 8) gS[tS >> 5] |= (255 & SS[tS / 8]) << tS % 32;
        return gS
      }(SS), 8 * SS.length))
    }));
    var lb = new Uint8Array(16);

    function mb() {
      if (!Ub && !(Ub = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return Ub(lb)
    }

    function eb(SS, HS, gS) {
      var tS = (SS = SS || {}).random || (SS.rng || mb)();
      if (tS[6] = 15 & tS[6] | 64, tS[8] = 63 & tS[8] | 128, HS) {
        gS = gS || 0;
        for (var bS = 0; bS < 16; ++bS) HS[gS + bS] = tS[bS];
        return HS
      }
      return zb(tS)
    }

    function rb(SS, HS, gS, tS) {
      switch (SS) {
        case 0:
          return HS & gS ^ ~HS & tS;
        case 1:
        case 3:
          return HS ^ gS ^ tS;
        case 2:
          return HS & gS ^ HS & tS ^ gS & tS
      }
    }

    function SX(SS, HS) {
      return SS << HS | SS >>> 32 - HS
    }
    pb("v5", 80, (function(SS) {
      var HS = [1518500249, 1859775393, 2400959708, 3395469782],
        gS = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof SS) {
        var tS = unescape(encodeURIComponent(SS));
        SS = [];
        for (var bS = 0; bS < tS.length; ++bS) SS.push(tS.charCodeAt(bS))
      } else Array.isArray(SS) || (SS = Array.prototype.slice.call(SS));
      SS.push(128);
      for (var XS = SS.length / 4 + 2, xS = Math.ceil(XS / 16), NS = new Array(xS), qS = 0; qS < xS; ++qS) {
        for (var uS = new Uint32Array(16), IS = 0; IS < 16; ++IS) uS[IS] = SS[64 * qS + 4 * IS] << 24 | SS[64 * qS + 4 * IS + 1] << 16 | SS[64 * qS + 4 * IS + 2] << 8 | SS[64 * qS + 4 * IS + 3];
        NS[qS] = uS
      }
      NS[xS - 1][14] = 8 * (SS.length - 1) / Math.pow(2, 32), NS[xS - 1][14] = Math.floor(NS[xS - 1][14]), NS[xS - 1][15] = 8 * (SS.length - 1) & 4294967295;
      for (var fS = 0; fS < xS; ++fS) {
        for (var kS = new Uint32Array(80), aS = 0; aS < 16; ++aS) kS[aS] = NS[fS][aS];
        for (var KS = 16; KS < 80; ++KS) kS[KS] = SX(kS[KS - 3] ^ kS[KS - 8] ^ kS[KS - 14] ^ kS[KS - 16], 1);
        for (var jS = gS[0], GS = gS[1], CS = gS[2], nS = gS[3], PS = gS[4], QS = 0; QS < 80; ++QS) {
          var DS = Math.floor(QS / 20),
            wS = SX(jS, 5) + rb(DS, GS, CS, nS) + PS + HS[DS] + kS[QS] >>> 0;
          PS = nS, nS = CS, CS = SX(GS, 30) >>> 0, GS = jS, jS = wS
        }
        gS[0] = gS[0] + jS >>> 0, gS[1] = gS[1] + GS >>> 0, gS[2] = gS[2] + CS >>> 0, gS[3] = gS[3] + nS >>> 0, gS[4] = gS[4] + PS >>> 0
      }
      return [gS[0] >> 24 & 255, gS[0] >> 16 & 255, gS[0] >> 8 & 255, 255 & gS[0], gS[1] >> 24 & 255, gS[1] >> 16 & 255, gS[1] >> 8 & 255, 255 & gS[1], gS[2] >> 24 & 255, gS[2] >> 16 & 255, gS[2] >> 8 & 255, 255 & gS[2], gS[3] >> 24 & 255, gS[3] >> 16 & 255, gS[3] >> 8 & 255, 255 & gS[3], gS[4] >> 24 & 255, gS[4] >> 16 & 255, gS[4] >> 8 & 255, 255 & gS[4]]
    }));
    class HX extends Error {
      constructor(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(HS), this.code = SS, this.message = HS, this.name = "Discord SDK Error"
      }
    }
    const gX = ["log", "warn", "debug", "info", "error"];
    var tX;
    ! function(SS) {
      SS[SS.HANDSHAKE = 0] = "HANDSHAKE", SS[SS.FRAME = 1] = "FRAME", SS[SS.CLOSE = 2] = "CLOSE", SS[SS.HELLO = 3] = "HELLO"
    }(tX || (tX = {}));
    const bX = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class XX {
      getTransfer(SS) {
        var HS;
        switch (SS.cmd) {
          case og.SUBSCRIBE:
          case og.UNSUBSCRIBE:
            return;
          default:
            return null !== (HS = SS.transfer) && void 0 !== HS ? HS : void 0
        }
      }
      constructor(SS, HS) {
        var gS;
        if (this.eventBus = new uS, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = SS => {
            var HS;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const gS = eb();
            null === (HS = this.source) || void 0 === HS || HS.postMessage([tX.FRAME, Object.assign(Object.assign({}, SS), {
              nonce: gS
            })], this.sourceOrigin, this.getTransfer(SS));
            return new Promise(((SS, HS) => {
              this.pendingCommands.set(gS, {
                resolve: SS,
                reject: HS
              })
            }))
          }, this.commands = (gS = this.sendCommand, {
            authenticate: Kb(gS),
            authorize: jb(gS),
            captureLog: Gb(gS),
            encourageHardwareAcceleration: Cb(gS),
            getChannel: Yb(gS),
            getChannelPermissions: Qb(gS),
            getEntitlements: nb(gS),
            getPlatformBehaviors: Db(gS),
            getSkus: Pb(gS),
            openExternalLink: wb(gS),
            openInviteDialog: hb(gS),
            openShareMomentDialog: Zb(gS),
            setActivity: Jb(gS),
            setConfig: Ob(gS),
            setOrientationLockState: cb(gS),
            startPurchase: vb(gS),
            userSettingsGetLocale: Eb(gS),
            initiateImageUpload: Lb(gS),
            getInstanceConnectedParticipants: Ab(gS)
          }), this.handleMessage = SS => {
            if (!bX.has(SS.origin)) return;
            const HS = SS.data;
            if (!Array.isArray(HS)) return;
            const [gS, tS] = HS;
            switch (gS) {
              case tX.HELLO:
                return;
              case tX.CLOSE:
                return this.handleClose(tS);
              case tX.HANDSHAKE:
                return this.handleHandshake();
              case tX.FRAME:
                return this.handleFrame(tS);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = SS, this.configuration = null !== HS && void 0 !== HS ? HS : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = yg.DESKTOP, this.guildId = null, void(this.channelId = null);
        const tS = new URLSearchParams(this._getSearch()),
          bS = tS.get("frame_id");
        if (!bS) throw new Error("frame_id query param is not defined");
        this.frameId = bS;
        const XS = tS.get("instance_id");
        if (!XS) throw new Error("instance_id query param is not defined");
        this.instanceId = XS;
        const xS = tS.get("platform");
        if (!xS) throw new Error("platform query param is not defined");
        if (xS !== yg.DESKTOP && xS !== yg.MOBILE) throw new Error(`Invalid query param "platform" of "${xS}". Valid values are "${yg.DESKTOP}" or "${yg.MOBILE}"`);
        this.platform = xS, this.guildId = tS.get("guild_id"), this.channelId = tS.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var SS;
          return [null !== (SS = window.parent.opener) && void 0 !== SS ? SS : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(SS, HS) {
        var gS;
        window.removeEventListener("message", this.handleMessage);
        const tS = eb();
        null === (gS = this.source) || void 0 === gS || gS.postMessage([tX.CLOSE, {
          code: SS,
          message: HS,
          nonce: tS
        }], this.sourceOrigin)
      }
      async subscribe(SS, HS) {
        for (var gS = arguments.length, tS = new Array(gS > 2 ? gS - 2 : 0), bS = 2; bS < gS; bS++) tS[bS - 2] = arguments[bS];
        const [XS] = tS, xS = this.eventBus.listenerCount(SS), NS = this.eventBus.on(SS, HS);
        return Object.values(yt).includes(SS) && SS !== yt.READY && 0 === xS && await this.sendCommand({
          cmd: og.SUBSCRIBE,
          args: XS,
          evt: SS
        }), NS
      }
      async unsubscribe(SS, HS) {
        for (var gS = arguments.length, tS = new Array(gS > 2 ? gS - 2 : 0), bS = 2; bS < gS; bS++) tS[bS - 2] = arguments[bS];
        const [XS] = tS;
        return SS !== yt.READY && 1 === this.eventBus.listenerCount(SS) && await this.sendCommand({
          cmd: og.UNSUBSCRIBE,
          evt: SS,
          args: XS
        }), this.eventBus.off(SS, HS)
      }
      async ready() {
        this.isReady || await new Promise((SS => {
          this.eventBus.once(yt.READY, SS)
        }))
      }
      handshake() {
        var SS;
        null === (SS = this.source) || void 0 === SS || SS.postMessage([tX.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(yt.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const SS = (SS, HS) => {
          this.commands.captureLog({
            level: SS,
            message: HS
          })
        };
        gX.forEach((HS => {
          ! function(SS, HS, gS) {
            const tS = SS[HS],
              bS = SS;
            tS && (SS[HS] = function() {
              const SS = [].slice.call(arguments),
                XS = "" + SS.join(" ");
              gS(HS, XS), tS.apply(bS, SS)
            })
          }(console, HS, SS)
        }))
      }
      handleClose(SS) {
        ub.parse(SS)
      }
      handleHandshake() {}
      handleFrame(SS) {
        var HS, gS;
        let tS;
        try {
          tS = fb(SS)
        } catch (bS) {
          return console.error("Failed to parse", SS), void console.error(bS)
        }
        if ("DISPATCH" === tS.cmd) this.eventBus.emit(tS.evt, tS.data);
        else {
          if (tS.evt === At) {
            if (null != tS.nonce) return null === (HS = this.pendingCommands.get(tS.nonce)) || void 0 === HS || HS.reject(tS.data), void this.pendingCommands.delete(tS.nonce);
            this.eventBus.emit("error", new HX(tS.data.code, tS.data.message))
          }
          if (null == tS.nonce) return void console.error("Missing nonce", SS);
          null === (gS = this.pendingCommands.get(tS.nonce)) || void 0 === gS || gS.resolve(tS), this.pendingCommands.delete(tS.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var xX, NX = 1e9,
      qX = !0,
      uX = "[DecimalError] ",
      IX = uX + "Invalid argument: ",
      fX = uX + "Exponent out of range: ",
      kX = Math.floor,
      aX = Math.pow,
      KX = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      jX = 1e7,
      GX = 9007199254740991,
      CX = kX(1286742750677284.5),
      nX = {};

    function PX(SS, HS) {
      var gS, tS, bS, XS, xS, NS, qS, uS, IS = SS.constructor,
        fS = IS.precision;
      if (!SS.s || !HS.s) return HS.s || (HS = new IS(SS)), qX ? vX(HS, fS) : HS;
      if (qS = SS.d, uS = HS.d, xS = SS.e, bS = HS.e, qS = qS.slice(), XS = xS - bS) {
        for (XS < 0 ? (tS = qS, XS = -XS, NS = uS.length) : (tS = uS, bS = xS, NS = qS.length), XS > (NS = (xS = Math.ceil(fS / 7)) > NS ? xS + 1 : NS + 1) && (XS = NS, tS.length = 1), tS.reverse(); XS--;) tS.push(0);
        tS.reverse()
      }
      for ((NS = qS.length) - (XS = uS.length) < 0 && (XS = NS, tS = uS, uS = qS, qS = tS), gS = 0; XS;) gS = (qS[--XS] = qS[XS] + uS[XS] + gS) / jX | 0, qS[XS] %= jX;
      for (gS && (qS.unshift(gS), ++bS), NS = qS.length; 0 == qS[--NS];) qS.pop();
      return HS.d = qS, HS.e = bS, qX ? vX(HS, fS) : HS
    }

    function QX(SS, HS, gS) {
      if (SS !== ~~SS || SS < HS || SS > gS) throw Error(IX + SS)
    }

    function DX(SS) {
      var HS, gS, tS, bS = SS.length - 1,
        XS = "",
        xS = SS[0];
      if (bS > 0) {
        for (XS += xS, HS = 1; HS < bS; HS++)(gS = 7 - (tS = SS[HS] + "").length) && (XS += OX(gS)), XS += tS;
        (gS = 7 - (tS = (xS = SS[HS]) + "").length) && (XS += OX(gS))
      } else if (0 === xS) return "0";
      for (; xS % 10 === 0;) xS /= 10;
      return XS + xS
    }
    nX.absoluteValue = nX.abs = function() {
      var SS = new this.constructor(this);
      return SS.s && (SS.s = 1), SS
    }, nX.comparedTo = nX.cmp = function(SS) {
      var HS, gS, tS, bS, XS = this;
      if (SS = new XS.constructor(SS), XS.s !== SS.s) return XS.s || -SS.s;
      if (XS.e !== SS.e) return XS.e > SS.e ^ XS.s < 0 ? 1 : -1;
      for (HS = 0, gS = (tS = XS.d.length) < (bS = SS.d.length) ? tS : bS; HS < gS; ++HS)
        if (XS.d[HS] !== SS.d[HS]) return XS.d[HS] > SS.d[HS] ^ XS.s < 0 ? 1 : -1;
      return tS === bS ? 0 : tS > bS ^ XS.s < 0 ? 1 : -1
    }, nX.decimalPlaces = nX.dp = function() {
      var SS = this,
        HS = SS.d.length - 1,
        gS = 7 * (HS - SS.e);
      if (HS = SS.d[HS])
        for (; HS % 10 == 0; HS /= 10) gS--;
      return gS < 0 ? 0 : gS
    }, nX.dividedBy = nX.div = function(SS) {
      return wX(this, new this.constructor(SS))
    }, nX.dividedToIntegerBy = nX.idiv = function(SS) {
      var HS = this.constructor;
      return vX(wX(this, new HS(SS), 0, 1), HS.precision)
    }, nX.equals = nX.eq = function(SS) {
      return !this.cmp(SS)
    }, nX.exponent = function() {
      return ZX(this)
    }, nX.greaterThan = nX.gt = function(SS) {
      return this.cmp(SS) > 0
    }, nX.greaterThanOrEqualTo = nX.gte = function(SS) {
      return this.cmp(SS) >= 0
    }, nX.isInteger = nX.isint = function() {
      return this.e > this.d.length - 2
    }, nX.isNegative = nX.isneg = function() {
      return this.s < 0
    }, nX.isPositive = nX.ispos = function() {
      return this.s > 0
    }, nX.isZero = function() {
      return 0 === this.s
    }, nX.lessThan = nX.lt = function(SS) {
      return this.cmp(SS) < 0
    }, nX.lessThanOrEqualTo = nX.lte = function(SS) {
      return this.cmp(SS) < 1
    }, nX.logarithm = nX.log = function(SS) {
      var HS, gS = this,
        tS = gS.constructor,
        bS = tS.precision,
        XS = bS + 5;
      if (void 0 === SS) SS = new tS(10);
      else if ((SS = new tS(SS)).s < 1 || SS.eq(xX)) throw Error(uX + "NaN");
      if (gS.s < 1) throw Error(uX + (gS.s ? "NaN" : "-Infinity"));
      return gS.eq(xX) ? new tS(0) : (qX = !1, HS = wX(dX(gS, XS), dX(SS, XS), XS), qX = !0, vX(HS, bS))
    }, nX.minus = nX.sub = function(SS) {
      var HS = this;
      return SS = new HS.constructor(SS), HS.s == SS.s ? EX(HS, SS) : PX(HS, (SS.s = -SS.s, SS))
    }, nX.modulo = nX.mod = function(SS) {
      var HS, gS = this,
        tS = gS.constructor,
        bS = tS.precision;
      if (!(SS = new tS(SS)).s) throw Error(uX + "NaN");
      return gS.s ? (qX = !1, HS = wX(gS, SS, 0, 1).times(SS), qX = !0, gS.minus(HS)) : vX(new tS(gS), bS)
    }, nX.naturalExponential = nX.exp = function() {
      return hX(this)
    }, nX.naturalLogarithm = nX.ln = function() {
      return dX(this)
    }, nX.negated = nX.neg = function() {
      var SS = new this.constructor(this);
      return SS.s = -SS.s || 0, SS
    }, nX.plus = nX.add = function(SS) {
      var HS = this;
      return SS = new HS.constructor(SS), HS.s == SS.s ? PX(HS, SS) : EX(HS, (SS.s = -SS.s, SS))
    }, nX.precision = nX.sd = function(SS) {
      var HS, gS, tS, bS = this;
      if (void 0 !== SS && SS !== !!SS && 1 !== SS && 0 !== SS) throw Error(IX + SS);
      if (HS = ZX(bS) + 1, gS = 7 * (tS = bS.d.length - 1) + 1, tS = bS.d[tS]) {
        for (; tS % 10 == 0; tS /= 10) gS--;
        for (tS = bS.d[0]; tS >= 10; tS /= 10) gS++
      }
      return SS && HS > gS ? HS : gS
    }, nX.squareRoot = nX.sqrt = function() {
      var SS, HS, gS, tS, bS, XS, xS, NS = this,
        qS = NS.constructor;
      if (NS.s < 1) {
        if (!NS.s) return new qS(0);
        throw Error(uX + "NaN")
      }
      for (SS = ZX(NS), qX = !1, 0 == (bS = Math.sqrt(+NS)) || bS == 1 / 0 ? (((HS = DX(NS.d)).length + SS) % 2 == 0 && (HS += "0"), bS = Math.sqrt(HS), SS = kX((SS + 1) / 2) - (SS < 0 || SS % 2), tS = new qS(HS = bS == 1 / 0 ? "1e" + SS : (HS = bS.toExponential()).slice(0, HS.indexOf("e") + 1) + SS)) : tS = new qS(bS.toString()), bS = xS = (gS = qS.precision) + 3;;)
        if (tS = (XS = tS).plus(wX(NS, XS, xS + 2)).times(.5), DX(XS.d).slice(0, xS) === (HS = DX(tS.d)).slice(0, xS)) {
          if (HS = HS.slice(xS - 3, xS + 1), bS == xS && "4999" == HS) {
            if (vX(XS, gS + 1, 0), XS.times(XS).eq(NS)) {
              tS = XS;
              break
            }
          } else if ("9999" != HS) break;
          xS += 4
        } return qX = !0, vX(tS, gS)
    }, nX.times = nX.mul = function(SS) {
      var HS, gS, tS, bS, XS, xS, NS, qS, uS, IS = this,
        fS = IS.constructor,
        kS = IS.d,
        aS = (SS = new fS(SS)).d;
      if (!IS.s || !SS.s) return new fS(0);
      for (SS.s *= IS.s, gS = IS.e + SS.e, (qS = kS.length) < (uS = aS.length) && (XS = kS, kS = aS, aS = XS, xS = qS, qS = uS, uS = xS), XS = [], tS = xS = qS + uS; tS--;) XS.push(0);
      for (tS = uS; --tS >= 0;) {
        for (HS = 0, bS = qS + tS; bS > tS;) NS = XS[bS] + aS[tS] * kS[bS - tS - 1] + HS, XS[bS--] = NS % jX | 0, HS = NS / jX | 0;
        XS[bS] = (XS[bS] + HS) % jX | 0
      }
      for (; !XS[--xS];) XS.pop();
      return HS ? ++gS : XS.shift(), SS.d = XS, SS.e = gS, qX ? vX(SS, fS.precision) : SS
    }, nX.toDecimalPlaces = nX.todp = function(SS, HS) {
      var gS = this,
        tS = gS.constructor;
      return gS = new tS(gS), void 0 === SS ? gS : (QX(SS, 0, NX), void 0 === HS ? HS = tS.rounding : QX(HS, 0, 8), vX(gS, SS + ZX(gS) + 1, HS))
    }, nX.toExponential = function(SS, HS) {
      var gS, tS = this,
        bS = tS.constructor;
      return void 0 === SS ? gS = LX(tS, !0) : (QX(SS, 0, NX), void 0 === HS ? HS = bS.rounding : QX(HS, 0, 8), gS = LX(tS = vX(new bS(tS), SS + 1, HS), !0, SS + 1)), gS
    }, nX.toFixed = function(SS, HS) {
      var gS, tS, bS = this,
        XS = bS.constructor;
      return void 0 === SS ? LX(bS) : (QX(SS, 0, NX), void 0 === HS ? HS = XS.rounding : QX(HS, 0, 8), gS = LX((tS = vX(new XS(bS), SS + ZX(bS) + 1, HS)).abs(), !1, SS + ZX(tS) + 1), bS.isneg() && !bS.isZero() ? "-" + gS : gS)
    }, nX.toInteger = nX.toint = function() {
      var SS = this,
        HS = SS.constructor;
      return vX(new HS(SS), ZX(SS) + 1, HS.rounding)
    }, nX.toNumber = function() {
      return +this
    }, nX.toPower = nX.pow = function(SS) {
      var HS, gS, tS, bS, XS, xS, NS = this,
        qS = NS.constructor,
        uS = +(SS = new qS(SS));
      if (!SS.s) return new qS(xX);
      if (!(NS = new qS(NS)).s) {
        if (SS.s < 1) throw Error(uX + "Infinity");
        return NS
      }
      if (NS.eq(xX)) return NS;
      if (tS = qS.precision, SS.eq(xX)) return vX(NS, tS);
      if (xS = (HS = SS.e) >= (gS = SS.d.length - 1), XS = NS.s, xS) {
        if ((gS = uS < 0 ? -uS : uS) <= GX) {
          for (bS = new qS(xX), HS = Math.ceil(tS / 7 + 4), qX = !1; gS % 2 && YX((bS = bS.times(NS)).d, HS), 0 !== (gS = kX(gS / 2));) YX((NS = NS.times(NS)).d, HS);
          return qX = !0, SS.s < 0 ? new qS(xX).div(bS) : vX(bS, tS)
        }
      } else if (XS < 0) throw Error(uX + "NaN");
      return XS = XS < 0 && 1 & SS.d[Math.max(HS, gS)] ? -1 : 1, NS.s = 1, qX = !1, bS = SS.times(dX(NS, tS + 12)), qX = !0, (bS = hX(bS)).s = XS, bS
    }, nX.toPrecision = function(SS, HS) {
      var gS, tS, bS = this,
        XS = bS.constructor;
      return void 0 === SS ? tS = LX(bS, (gS = ZX(bS)) <= XS.toExpNeg || gS >= XS.toExpPos) : (QX(SS, 1, NX), void 0 === HS ? HS = XS.rounding : QX(HS, 0, 8), tS = LX(bS = vX(new XS(bS), SS, HS), SS <= (gS = ZX(bS)) || gS <= XS.toExpNeg, SS)), tS
    }, nX.toSignificantDigits = nX.tosd = function(SS, HS) {
      var gS = this.constructor;
      return void 0 === SS ? (SS = gS.precision, HS = gS.rounding) : (QX(SS, 1, NX), void 0 === HS ? HS = gS.rounding : QX(HS, 0, 8)), vX(new gS(this), SS, HS)
    }, nX.toString = nX.valueOf = nX.val = nX.toJSON = nX[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var SS = this,
        HS = ZX(SS),
        gS = SS.constructor;
      return LX(SS, HS <= gS.toExpNeg || HS >= gS.toExpPos)
    };
    var wX = function() {
      function SS(SS, HS) {
        var gS, tS = 0,
          bS = SS.length;
        for (SS = SS.slice(); bS--;) gS = SS[bS] * HS + tS, SS[bS] = gS % jX | 0, tS = gS / jX | 0;
        return tS && SS.unshift(tS), SS
      }

      function HS(SS, HS, gS, tS) {
        var bS, XS;
        if (gS != tS) XS = gS > tS ? 1 : -1;
        else
          for (bS = XS = 0; bS < gS; bS++)
            if (SS[bS] != HS[bS]) {
              XS = SS[bS] > HS[bS] ? 1 : -1;
              break
            } return XS
      }

      function gS(SS, HS, gS) {
        for (var tS = 0; gS--;) SS[gS] -= tS, tS = SS[gS] < HS[gS] ? 1 : 0, SS[gS] = tS * jX + SS[gS] - HS[gS];
        for (; !SS[0] && SS.length > 1;) SS.shift()
      }
      return function(tS, bS, XS, xS) {
        var NS, qS, uS, IS, fS, kS, aS, KS, jS, GS, CS, nS, PS, QS, DS, wS, hS, ZS, JS = tS.constructor,
          OS = tS.s == bS.s ? 1 : -1,
          dS = tS.d,
          cS = bS.d;
        if (!tS.s) return new JS(tS);
        if (!bS.s) throw Error(uX + "Division by zero");
        for (qS = tS.e - bS.e, hS = cS.length, DS = dS.length, KS = (aS = new JS(OS)).d = [], uS = 0; cS[uS] == (dS[uS] || 0);) ++uS;
        if (cS[uS] > (dS[uS] || 0) && --qS, (nS = null == XS ? XS = JS.precision : xS ? XS + (ZX(tS) - ZX(bS)) + 1 : XS) < 0) return new JS(0);
        if (nS = nS / 7 + 2 | 0, uS = 0, 1 == hS)
          for (IS = 0, cS = cS[0], nS++;
            (uS < DS || IS) && nS--; uS++) PS = IS * jX + (dS[uS] || 0), KS[uS] = PS / cS | 0, IS = PS % cS | 0;
        else {
          for ((IS = jX / (cS[0] + 1) | 0) > 1 && (cS = SS(cS, IS), dS = SS(dS, IS), hS = cS.length, DS = dS.length), QS = hS, GS = (jS = dS.slice(0, hS)).length; GS < hS;) jS[GS++] = 0;
          (ZS = cS.slice()).unshift(0), wS = cS[0], cS[1] >= jX / 2 && ++wS;
          do {
            IS = 0, (NS = HS(cS, jS, hS, GS)) < 0 ? (CS = jS[0], hS != GS && (CS = CS * jX + (jS[1] || 0)), (IS = CS / wS | 0) > 1 ? (IS >= jX && (IS = jX - 1), 1 == (NS = HS(fS = SS(cS, IS), jS, kS = fS.length, GS = jS.length)) && (IS--, gS(fS, hS < kS ? ZS : cS, kS))) : (0 == IS && (NS = IS = 1), fS = cS.slice()), (kS = fS.length) < GS && fS.unshift(0), gS(jS, fS, GS), -1 == NS && (NS = HS(cS, jS, hS, GS = jS.length)) < 1 && (IS++, gS(jS, hS < GS ? ZS : cS, GS)), GS = jS.length) : 0 === NS && (IS++, jS = [0]), KS[uS++] = IS, NS && jS[0] ? jS[GS++] = dS[QS] || 0 : (jS = [dS[QS]], GS = 1)
          } while ((QS++ < DS || void 0 !== jS[0]) && nS--)
        }
        return KS[0] || KS.shift(), aS.e = qS, vX(aS, xS ? XS + ZX(aS) + 1 : XS)
      }
    }();

    function hX(SS, HS) {
      var gS, tS, bS, XS, xS, NS = 0,
        qS = 0,
        uS = SS.constructor,
        IS = uS.precision;
      if (ZX(SS) > 16) throw Error(fX + ZX(SS));
      if (!SS.s) return new uS(xX);
      for (null == HS ? (qX = !1, xS = IS) : xS = HS, XS = new uS(.03125); SS.abs().gte(.1);) SS = SS.times(XS), qS += 5;
      for (xS += Math.log(aX(2, qS)) / Math.LN10 * 2 + 5 | 0, gS = tS = bS = new uS(xX), uS.precision = xS;;) {
        if (tS = vX(tS.times(SS), xS), gS = gS.times(++NS), DX((XS = bS.plus(wX(tS, gS, xS))).d).slice(0, xS) === DX(bS.d).slice(0, xS)) {
          for (; qS--;) bS = vX(bS.times(bS), xS);
          return uS.precision = IS, null == HS ? (qX = !0, vX(bS, IS)) : bS
        }
        bS = XS
      }
    }

    function ZX(SS) {
      for (var HS = 7 * SS.e, gS = SS.d[0]; gS >= 10; gS /= 10) HS++;
      return HS
    }

    function JX(SS, HS, gS) {
      if (HS > SS.LN10.sd()) throw qX = !0, gS && (SS.precision = gS), Error(uX + "LN10 precision limit exceeded");
      return vX(new SS(SS.LN10), HS)
    }

    function OX(SS) {
      for (var HS = ""; SS--;) HS += "0";
      return HS
    }

    function dX(SS, HS) {
      var gS, tS, bS, XS, xS, NS, qS, uS, IS, fS = 1,
        kS = SS,
        aS = kS.d,
        KS = kS.constructor,
        jS = KS.precision;
      if (kS.s < 1) throw Error(uX + (kS.s ? "NaN" : "-Infinity"));
      if (kS.eq(xX)) return new KS(0);
      if (null == HS ? (qX = !1, uS = jS) : uS = HS, kS.eq(10)) return null == HS && (qX = !0), JX(KS, uS);
      if (uS += 10, KS.precision = uS, tS = (gS = DX(aS)).charAt(0), XS = ZX(kS), !(Math.abs(XS) < 15e14)) return qS = JX(KS, uS + 2, jS).times(XS + ""), kS = dX(new KS(tS + "." + gS.slice(1)), uS - 10).plus(qS), KS.precision = jS, null == HS ? (qX = !0, vX(kS, jS)) : kS;
      for (; tS < 7 && 1 != tS || 1 == tS && gS.charAt(1) > 3;) tS = (gS = DX((kS = kS.times(SS)).d)).charAt(0), fS++;
      for (XS = ZX(kS), tS > 1 ? (kS = new KS("0." + gS), XS++) : kS = new KS(tS + "." + gS.slice(1)), NS = xS = kS = wX(kS.minus(xX), kS.plus(xX), uS), IS = vX(kS.times(kS), uS), bS = 3;;) {
        if (xS = vX(xS.times(IS), uS), DX((qS = NS.plus(wX(xS, new KS(bS), uS))).d).slice(0, uS) === DX(NS.d).slice(0, uS)) return NS = NS.times(2), 0 !== XS && (NS = NS.plus(JX(KS, uS + 2, jS).times(XS + ""))), NS = wX(NS, new KS(fS), uS), KS.precision = jS, null == HS ? (qX = !0, vX(NS, jS)) : NS;
        NS = qS, bS += 2
      }
    }

    function cX(SS, HS) {
      var gS, tS, bS;
      for ((gS = HS.indexOf(".")) > -1 && (HS = HS.replace(".", "")), (tS = HS.search(/e/i)) > 0 ? (gS < 0 && (gS = tS), gS += +HS.slice(tS + 1), HS = HS.substring(0, tS)) : gS < 0 && (gS = HS.length), tS = 0; 48 === HS.charCodeAt(tS);) ++tS;
      for (bS = HS.length; 48 === HS.charCodeAt(bS - 1);) --bS;
      if (HS = HS.slice(tS, bS)) {
        if (bS -= tS, gS = gS - tS - 1, SS.e = kX(gS / 7), SS.d = [], tS = (gS + 1) % 7, gS < 0 && (tS += 7), tS < bS) {
          for (tS && SS.d.push(+HS.slice(0, tS)), bS -= 7; tS < bS;) SS.d.push(+HS.slice(tS, tS += 7));
          tS = 7 - (HS = HS.slice(tS)).length
        } else tS -= bS;
        for (; tS--;) HS += "0";
        if (SS.d.push(+HS), qX && (SS.e > CX || SS.e < -CX)) throw Error(fX + gS)
      } else SS.s = 0, SS.e = 0, SS.d = [0];
      return SS
    }

    function vX(SS, HS, gS) {
      var tS, bS, XS, xS, NS, qS, uS, IS, fS = SS.d;
      for (xS = 1, XS = fS[0]; XS >= 10; XS /= 10) xS++;
      if ((tS = HS - xS) < 0) tS += 7, bS = HS, uS = fS[IS = 0];
      else {
        if ((IS = Math.ceil((tS + 1) / 7)) >= (XS = fS.length)) return SS;
        for (uS = XS = fS[IS], xS = 1; XS >= 10; XS /= 10) xS++;
        bS = (tS %= 7) - 7 + xS
      }
      if (void 0 !== gS && (NS = uS / (XS = aX(10, xS - bS - 1)) % 10 | 0, qS = HS < 0 || void 0 !== fS[IS + 1] || uS % XS, qS = gS < 4 ? (NS || qS) && (0 == gS || gS == (SS.s < 0 ? 3 : 2)) : NS > 5 || 5 == NS && (4 == gS || qS || 6 == gS && (tS > 0 ? bS > 0 ? uS / aX(10, xS - bS) : 0 : fS[IS - 1]) % 10 & 1 || gS == (SS.s < 0 ? 8 : 7))), HS < 1 || !fS[0]) return qS ? (XS = ZX(SS), fS.length = 1, HS = HS - XS - 1, fS[0] = aX(10, (7 - HS % 7) % 7), SS.e = kX(-HS / 7) || 0) : (fS.length = 1, fS[0] = SS.e = SS.s = 0), SS;
      if (0 == tS ? (fS.length = IS, XS = 1, IS--) : (fS.length = IS + 1, XS = aX(10, 7 - tS), fS[IS] = bS > 0 ? (uS / aX(10, xS - bS) % aX(10, bS) | 0) * XS : 0), qS)
        for (;;) {
          if (0 == IS) {
            (fS[0] += XS) == jX && (fS[0] = 1, ++SS.e);
            break
          }
          if (fS[IS] += XS, fS[IS] != jX) break;
          fS[IS--] = 0, XS = 1
        }
      for (tS = fS.length; 0 === fS[--tS];) fS.pop();
      if (qX && (SS.e > CX || SS.e < -CX)) throw Error(fX + ZX(SS));
      return SS
    }

    function EX(SS, HS) {
      var gS, tS, bS, XS, xS, NS, qS, uS, IS, fS, kS = SS.constructor,
        aS = kS.precision;
      if (!SS.s || !HS.s) return HS.s ? HS.s = -HS.s : HS = new kS(SS), qX ? vX(HS, aS) : HS;
      if (qS = SS.d, fS = HS.d, tS = HS.e, uS = SS.e, qS = qS.slice(), xS = uS - tS) {
        for ((IS = xS < 0) ? (gS = qS, xS = -xS, NS = fS.length) : (gS = fS, tS = uS, NS = qS.length), xS > (bS = Math.max(Math.ceil(aS / 7), NS) + 2) && (xS = bS, gS.length = 1), gS.reverse(), bS = xS; bS--;) gS.push(0);
        gS.reverse()
      } else {
        for ((IS = (bS = qS.length) < (NS = fS.length)) && (NS = bS), bS = 0; bS < NS; bS++)
          if (qS[bS] != fS[bS]) {
            IS = qS[bS] < fS[bS];
            break
          } xS = 0
      }
      for (IS && (gS = qS, qS = fS, fS = gS, HS.s = -HS.s), NS = qS.length, bS = fS.length - NS; bS > 0; --bS) qS[NS++] = 0;
      for (bS = fS.length; bS > xS;) {
        if (qS[--bS] < fS[bS]) {
          for (XS = bS; XS && 0 === qS[--XS];) qS[XS] = jX - 1;
          --qS[XS], qS[bS] += jX
        }
        qS[bS] -= fS[bS]
      }
      for (; 0 === qS[--NS];) qS.pop();
      for (; 0 === qS[0]; qS.shift()) --tS;
      return qS[0] ? (HS.d = qS, HS.e = tS, qX ? vX(HS, aS) : HS) : new kS(0)
    }

    function LX(SS, HS, gS) {
      var tS, bS = ZX(SS),
        XS = DX(SS.d),
        xS = XS.length;
      return HS ? (gS && (tS = gS - xS) > 0 ? XS = XS.charAt(0) + "." + XS.slice(1) + OX(tS) : xS > 1 && (XS = XS.charAt(0) + "." + XS.slice(1)), XS = XS + (bS < 0 ? "e" : "e+") + bS) : bS < 0 ? (XS = "0." + OX(-bS - 1) + XS, gS && (tS = gS - xS) > 0 && (XS += OX(tS))) : bS >= xS ? (XS += OX(bS + 1 - xS), gS && (tS = gS - bS - 1) > 0 && (XS = XS + "." + OX(tS))) : ((tS = bS + 1) < xS && (XS = XS.slice(0, tS) + "." + XS.slice(tS)), gS && (tS = gS - xS) > 0 && (bS + 1 === xS && (XS += "."), XS += OX(tS))), SS.s < 0 ? "-" + XS : XS
    }

    function YX(SS, HS) {
      if (SS.length > HS) return SS.length = HS, !0
    }

    function AX(SS) {
      if (!SS || "object" !== typeof SS) throw Error(uX + "Object expected");
      var HS, gS, tS, bS = ["precision", 1, NX, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (HS = 0; HS < bS.length; HS += 3)
        if (void 0 !== (tS = SS[gS = bS[HS]])) {
          if (!(kX(tS) === tS && tS >= bS[HS + 1] && tS <= bS[HS + 2])) throw Error(IX + gS + ": " + tS);
          this[gS] = tS
        } if (void 0 !== (tS = SS[gS = "LN10"])) {
        if (tS != Math.LN10) throw Error(IX + gS + ": " + tS);
        this[gS] = new this(tS)
      }
      return this
    }
    var yX = function SS(HS) {
      var gS, tS, bS;

      function XS(SS) {
        var HS = this;
        if (!(HS instanceof XS)) return new XS(SS);
        if (HS.constructor = XS, SS instanceof XS) return HS.s = SS.s, HS.e = SS.e, void(HS.d = (SS = SS.d) ? SS.slice() : SS);
        if ("number" === typeof SS) {
          if (0 * SS !== 0) throw Error(IX + SS);
          if (SS > 0) HS.s = 1;
          else {
            if (!(SS < 0)) return HS.s = 0, HS.e = 0, void(HS.d = [0]);
            SS = -SS, HS.s = -1
          }
          return SS === ~~SS && SS < 1e7 ? (HS.e = 0, void(HS.d = [SS])) : cX(HS, SS.toString())
        }
        if ("string" !== typeof SS) throw Error(IX + SS);
        if (45 === SS.charCodeAt(0) ? (SS = SS.slice(1), HS.s = -1) : HS.s = 1, !KX.test(SS)) throw Error(IX + SS);
        cX(HS, SS)
      }
      if (XS.prototype = nX, XS.ROUND_UP = 0, XS.ROUND_DOWN = 1, XS.ROUND_CEIL = 2, XS.ROUND_FLOOR = 3, XS.ROUND_HALF_UP = 4, XS.ROUND_HALF_DOWN = 5, XS.ROUND_HALF_EVEN = 6, XS.ROUND_HALF_CEIL = 7, XS.ROUND_HALF_FLOOR = 8, XS.clone = SS, XS.config = XS.set = AX, void 0 === HS && (HS = {}), HS)
        for (bS = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], gS = 0; gS < bS.length;) HS.hasOwnProperty(tS = bS[gS++]) || (HS[tS] = this[tS]);
      return XS.config(HS), XS
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    xX = new yX(1);
    var VX;
    ! function(SS) {
      SS.AED = "aed", SS.AFN = "afn", SS.ALL = "all", SS.AMD = "amd", SS.ANG = "ang", SS.AOA = "aoa", SS.ARS = "ars", SS.AUD = "aud", SS.AWG = "awg", SS.AZN = "azn", SS.BAM = "bam", SS.BBD = "bbd", SS.BDT = "bdt", SS.BGN = "bgn", SS.BHD = "bhd", SS.BIF = "bif", SS.BMD = "bmd", SS.BND = "bnd", SS.BOB = "bob", SS.BOV = "bov", SS.BRL = "brl", SS.BSD = "bsd", SS.BTN = "btn", SS.BWP = "bwp", SS.BYN = "byn", SS.BYR = "byr", SS.BZD = "bzd", SS.CAD = "cad", SS.CDF = "cdf", SS.CHE = "che", SS.CHF = "chf", SS.CHW = "chw", SS.CLF = "clf", SS.CLP = "clp", SS.CNY = "cny", SS.COP = "cop", SS.COU = "cou", SS.CRC = "crc", SS.CUC = "cuc", SS.CUP = "cup", SS.CVE = "cve", SS.CZK = "czk", SS.DJF = "djf", SS.DKK = "dkk", SS.DOP = "dop", SS.DZD = "dzd", SS.EGP = "egp", SS.ERN = "ern", SS.ETB = "etb", SS.EUR = "eur", SS.FJD = "fjd", SS.FKP = "fkp", SS.GBP = "gbp", SS.GEL = "gel", SS.GHS = "ghs", SS.GIP = "gip", SS.GMD = "gmd", SS.GNF = "gnf", SS.GTQ = "gtq", SS.GYD = "gyd", SS.HKD = "hkd", SS.HNL = "hnl", SS.HRK = "hrk", SS.HTG = "htg", SS.HUF = "huf", SS.IDR = "idr", SS.ILS = "ils", SS.INR = "inr", SS.IQD = "iqd", SS.IRR = "irr", SS.ISK = "isk", SS.JMD = "jmd", SS.JOD = "jod", SS.JPY = "jpy", SS.KES = "kes", SS.KGS = "kgs", SS.KHR = "khr", SS.KMF = "kmf", SS.KPW = "kpw", SS.KRW = "krw", SS.KWD = "kwd", SS.KYD = "kyd", SS.KZT = "kzt", SS.LAK = "lak", SS.LBP = "lbp", SS.LKR = "lkr", SS.LRD = "lrd", SS.LSL = "lsl", SS.LTL = "ltl", SS.LVL = "lvl", SS.LYD = "lyd", SS.MAD = "mad", SS.MDL = "mdl", SS.MGA = "mga", SS.MKD = "mkd", SS.MMK = "mmk", SS.MNT = "mnt", SS.MOP = "mop", SS.MRO = "mro", SS.MUR = "mur", SS.MVR = "mvr", SS.MWK = "mwk", SS.MXN = "mxn", SS.MXV = "mxv", SS.MYR = "myr", SS.MZN = "mzn", SS.NAD = "nad", SS.NGN = "ngn", SS.NIO = "nio", SS.NOK = "nok", SS.NPR = "npr", SS.NZD = "nzd", SS.OMR = "omr", SS.PAB = "pab", SS.PEN = "pen", SS.PGK = "pgk", SS.PHP = "php", SS.PKR = "pkr", SS.PLN = "pln", SS.PYG = "pyg", SS.QAR = "qar", SS.RON = "ron", SS.RSD = "rsd", SS.RUB = "rub", SS.RWF = "rwf", SS.SAR = "sar", SS.SBD = "sbd", SS.SCR = "scr", SS.SDG = "sdg", SS.SEK = "sek", SS.SGD = "sgd", SS.SHP = "shp", SS.SLL = "sll", SS.SOS = "sos", SS.SRD = "srd", SS.SSP = "ssp", SS.STD = "std", SS.SVC = "svc", SS.SYP = "syp", SS.SZL = "szl", SS.THB = "thb", SS.TJS = "tjs", SS.TMT = "tmt", SS.TND = "tnd", SS.TOP = "top", SS.TRY = "try", SS.TTD = "ttd", SS.TWD = "twd", SS.TZS = "tzs", SS.UAH = "uah", SS.UGX = "ugx", SS.USD = "usd", SS.USN = "usn", SS.USS = "uss", SS.UYI = "uyi", SS.UYU = "uyu", SS.UZS = "uzs", SS.VEF = "vef", SS.VND = "vnd", SS.VUV = "vuv", SS.WST = "wst", SS.XAF = "xaf", SS.XAG = "xag", SS.XAU = "xau", SS.XBA = "xba", SS.XBB = "xbb", SS.XBC = "xbc", SS.XBD = "xbd", SS.XCD = "xcd", SS.XDR = "xdr", SS.XFU = "xfu", SS.XOF = "xof", SS.XPD = "xpd", SS.XPF = "xpf", SS.XPT = "xpt", SS.XSU = "xsu", SS.XTS = "xts", SS.XUA = "xua", SS.YER = "yer", SS.ZAR = "zar", SS.ZMW = "zmw", SS.ZWL = "zwl"
    }(VX || (VX = {}));
    VX.AED, VX.AFN, VX.ALL, VX.AMD, VX.ANG, VX.AOA, VX.ARS, VX.AUD, VX.AWG, VX.AZN, VX.BAM, VX.BBD, VX.BDT, VX.BGN, VX.BHD, VX.BIF, VX.BMD, VX.BND, VX.BOB, VX.BOV, VX.BRL, VX.BSD, VX.BTN, VX.BWP, VX.BYR, VX.BYN, VX.BZD, VX.CAD, VX.CDF, VX.CHE, VX.CHF, VX.CHW, VX.CLF, VX.CLP, VX.CNY, VX.COP, VX.COU, VX.CRC, VX.CUC, VX.CUP, VX.CVE, VX.CZK, VX.DJF, VX.DKK, VX.DOP, VX.DZD, VX.EGP, VX.ERN, VX.ETB, VX.EUR, VX.FJD, VX.FKP, VX.GBP, VX.GEL, VX.GHS, VX.GIP, VX.GMD, VX.GNF, VX.GTQ, VX.GYD, VX.HKD, VX.HNL, VX.HRK, VX.HTG, VX.HUF, VX.IDR, VX.ILS, VX.INR, VX.IQD, VX.IRR, VX.ISK, VX.JMD, VX.JOD, VX.JPY, VX.KES, VX.KGS, VX.KHR, VX.KMF, VX.KPW, VX.KRW, VX.KWD, VX.KYD, VX.KZT, VX.LAK, VX.LBP, VX.LKR, VX.LRD, VX.LSL, VX.LTL, VX.LVL, VX.LYD, VX.MAD, VX.MDL, VX.MGA, VX.MKD, VX.MMK, VX.MNT, VX.MOP, VX.MRO, VX.MUR, VX.MVR, VX.MWK, VX.MXN, VX.MXV, VX.MYR, VX.MZN, VX.NAD, VX.NGN, VX.NIO, VX.NOK, VX.NPR, VX.NZD, VX.OMR, VX.PAB, VX.PEN, VX.PGK, VX.PHP, VX.PKR, VX.PLN, VX.PYG, VX.QAR, VX.RON, VX.RSD, VX.RUB, VX.RWF, VX.SAR, VX.SBD, VX.SCR, VX.SDG, VX.SEK, VX.SGD, VX.SHP, VX.SLL, VX.SOS, VX.SRD, VX.SSP, VX.STD, VX.SVC, VX.SYP, VX.SZL, VX.THB, VX.TJS, VX.TMT, VX.TND, VX.TOP, VX.TRY, VX.TTD, VX.TWD, VX.TZS, VX.UAH, VX.UGX, VX.USD, VX.USN, VX.USS, VX.UYI, VX.UYU, VX.UZS, VX.VEF, VX.VND, VX.VUV, VX.WST, VX.XAF, VX.XAG, VX.XAU, VX.XBA, VX.XBB, VX.XBC, VX.XBD, VX.XCD, VX.XDR, VX.XFU, VX.XOF, VX.XPD, VX.XPF, VX.XPT, VX.XSU, VX.XTS, VX.XUA, VX.YER, VX.ZAR, VX.ZMW, VX.ZWL;
    var iX = {
      exports: {}
    };
    ! function(SS, HS) {
      var gS = "__lodash_hash_undefined__",
        tS = 9007199254740991,
        XS = "[object Arguments]",
        xS = "[object Array]",
        NS = "[object Boolean]",
        qS = "[object Date]",
        uS = "[object Error]",
        IS = "[object Function]",
        fS = "[object Map]",
        kS = "[object Number]",
        aS = "[object Object]",
        KS = "[object Promise]",
        jS = "[object RegExp]",
        GS = "[object Set]",
        CS = "[object String]",
        nS = "[object Symbol]",
        PS = "[object WeakMap]",
        QS = "[object ArrayBuffer]",
        DS = "[object DataView]",
        wS = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        hS = /^\w*$/,
        ZS = /^\./,
        JS = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        OS = /\\(\\)?/g,
        dS = /^\[object .+?Constructor\]$/,
        cS = /^(?:0|[1-9]\d*)$/,
        vS = {};
      vS["[object Float32Array]"] = vS["[object Float64Array]"] = vS["[object Int8Array]"] = vS["[object Int16Array]"] = vS["[object Int32Array]"] = vS["[object Uint8Array]"] = vS["[object Uint8ClampedArray]"] = vS["[object Uint16Array]"] = vS["[object Uint32Array]"] = !0, vS[XS] = vS[xS] = vS[QS] = vS[NS] = vS[DS] = vS[qS] = vS[uS] = vS[IS] = vS[fS] = vS[kS] = vS[aS] = vS[jS] = vS[GS] = vS[CS] = vS[PS] = !1;
      var ES = "object" == typeof bS && bS && bS.Object === Object && bS,
        LS = "object" == typeof self && self && self.Object === Object && self,
        YS = ES || LS || Function("return this")(),
        AS = HS && !HS.nodeType && HS,
        yS = AS && SS && !SS.nodeType && SS,
        VS = yS && yS.exports === AS && ES.process,
        iS = function() {
          try {
            return VS && VS.binding("util")
          } catch (SS) {}
        }(),
        WS = iS && iS.isTypedArray;

      function zS(SS, HS) {
        for (var gS = -1, tS = SS ? SS.length : 0; ++gS < tS && !1 !== HS(SS[gS], gS, SS););
        return SS
      }

      function US(SS, HS) {
        for (var gS = -1, tS = SS ? SS.length : 0; ++gS < tS;)
          if (HS(SS[gS], gS, SS)) return !0;
        return !1
      }

      function pS(SS) {
        var HS = !1;
        if (null != SS && "function" != typeof SS.toString) try {
          HS = !!(SS + "")
        } catch (gS) {}
        return HS
      }

      function sS(SS) {
        var HS = -1,
          gS = Array(SS.size);
        return SS.forEach((function(SS, tS) {
          gS[++HS] = [tS, SS]
        })), gS
      }

      function BS(SS, HS) {
        return function(gS) {
          return SS(HS(gS))
        }
      }

      function MS(SS) {
        var HS = -1,
          gS = Array(SS.size);
        return SS.forEach((function(SS) {
          gS[++HS] = SS
        })), gS
      }
      var FS = Array.prototype,
        RS = Function.prototype,
        TS = Object.prototype,
        oS = YS["__core-js_shared__"],
        lS = function() {
          var SS = /[^.]+$/.exec(oS && oS.keys && oS.keys.IE_PROTO || "");
          return SS ? "Symbol(src)_1." + SS : ""
        }(),
        mS = RS.toString,
        eS = TS.hasOwnProperty,
        rS = TS.toString,
        SH = RegExp("^" + mS.call(eS).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        HH = YS.Symbol,
        gH = YS.Uint8Array,
        tH = BS(Object.getPrototypeOf, Object),
        bH = Object.create,
        XH = TS.propertyIsEnumerable,
        xH = FS.splice,
        NH = BS(Object.keys, Object),
        qH = sH(YS, "DataView"),
        uH = sH(YS, "Map"),
        IH = sH(YS, "Promise"),
        fH = sH(YS, "Set"),
        kH = sH(YS, "WeakMap"),
        aH = sH(Object, "create"),
        KH = mH(qH),
        jH = mH(uH),
        GH = mH(IH),
        CH = mH(fH),
        nH = mH(kH),
        PH = HH ? HH.prototype : void 0,
        QH = PH ? PH.valueOf : void 0,
        DH = PH ? PH.toString : void 0;

      function wH(SS) {
        var HS = -1,
          gS = SS ? SS.length : 0;
        for (this.clear(); ++HS < gS;) {
          var tS = SS[HS];
          this.set(tS[0], tS[1])
        }
      }

      function hH(SS) {
        var HS = -1,
          gS = SS ? SS.length : 0;
        for (this.clear(); ++HS < gS;) {
          var tS = SS[HS];
          this.set(tS[0], tS[1])
        }
      }

      function ZH(SS) {
        var HS = -1,
          gS = SS ? SS.length : 0;
        for (this.clear(); ++HS < gS;) {
          var tS = SS[HS];
          this.set(tS[0], tS[1])
        }
      }

      function JH(SS) {
        var HS = -1,
          gS = SS ? SS.length : 0;
        for (this.__data__ = new ZH; ++HS < gS;) this.add(SS[HS])
      }

      function OH(SS) {
        this.__data__ = new hH(SS)
      }

      function dH(SS, HS) {
        var gS = Hg(SS) || Sg(SS) ? function(SS, HS) {
            for (var gS = -1, tS = Array(SS); ++gS < SS;) tS[gS] = HS(gS);
            return tS
          }(SS.length, String) : [],
          tS = gS.length,
          bS = !!tS;
        for (var XS in SS) !HS && !eS.call(SS, XS) || bS && ("length" == XS || MH(XS, tS)) || gS.push(XS);
        return gS
      }

      function cH(SS, HS) {
        for (var gS = SS.length; gS--;)
          if (rH(SS[gS][0], HS)) return gS;
        return -1
      }
      wH.prototype.clear = function() {
        this.__data__ = aH ? aH(null) : {}
      }, wH.prototype.delete = function(SS) {
        return this.has(SS) && delete this.__data__[SS]
      }, wH.prototype.get = function(SS) {
        var HS = this.__data__;
        if (aH) {
          var tS = HS[SS];
          return tS === gS ? void 0 : tS
        }
        return eS.call(HS, SS) ? HS[SS] : void 0
      }, wH.prototype.has = function(SS) {
        var HS = this.__data__;
        return aH ? void 0 !== HS[SS] : eS.call(HS, SS)
      }, wH.prototype.set = function(SS, HS) {
        return this.__data__[SS] = aH && void 0 === HS ? gS : HS, this
      }, hH.prototype.clear = function() {
        this.__data__ = []
      }, hH.prototype.delete = function(SS) {
        var HS = this.__data__,
          gS = cH(HS, SS);
        return !(gS < 0) && (gS == HS.length - 1 ? HS.pop() : xH.call(HS, gS, 1), !0)
      }, hH.prototype.get = function(SS) {
        var HS = this.__data__,
          gS = cH(HS, SS);
        return gS < 0 ? void 0 : HS[gS][1]
      }, hH.prototype.has = function(SS) {
        return cH(this.__data__, SS) > -1
      }, hH.prototype.set = function(SS, HS) {
        var gS = this.__data__,
          tS = cH(gS, SS);
        return tS < 0 ? gS.push([SS, HS]) : gS[tS][1] = HS, this
      }, ZH.prototype.clear = function() {
        this.__data__ = {
          hash: new wH,
          map: new(uH || hH),
          string: new wH
        }
      }, ZH.prototype.delete = function(SS) {
        return pH(this, SS).delete(SS)
      }, ZH.prototype.get = function(SS) {
        return pH(this, SS).get(SS)
      }, ZH.prototype.has = function(SS) {
        return pH(this, SS).has(SS)
      }, ZH.prototype.set = function(SS, HS) {
        return pH(this, SS).set(SS, HS), this
      }, JH.prototype.add = JH.prototype.push = function(SS) {
        return this.__data__.set(SS, gS), this
      }, JH.prototype.has = function(SS) {
        return this.__data__.has(SS)
      }, OH.prototype.clear = function() {
        this.__data__ = new hH
      }, OH.prototype.delete = function(SS) {
        return this.__data__.delete(SS)
      }, OH.prototype.get = function(SS) {
        return this.__data__.get(SS)
      }, OH.prototype.has = function(SS) {
        return this.__data__.has(SS)
      }, OH.prototype.set = function(SS, HS) {
        var gS = this.__data__;
        if (gS instanceof hH) {
          var tS = gS.__data__;
          if (!uH || tS.length < 199) return tS.push([SS, HS]), this;
          gS = this.__data__ = new ZH(tS)
        }
        return gS.set(SS, HS), this
      };
      var vH, EH = function(SS, HS, gS) {
        for (var tS = -1, bS = Object(SS), XS = gS(SS), xS = XS.length; xS--;) {
          var NS = XS[vH ? xS : ++tS];
          if (!1 === HS(bS[NS], NS, bS)) break
        }
        return SS
      };

      function LH(SS, HS) {
        return SS && EH(SS, HS, Ig)
      }

      function YH(SS, HS) {
        for (var gS = 0, tS = (HS = FH(HS, SS) ? [HS] : zH(HS)).length; null != SS && gS < tS;) SS = SS[lH(HS[gS++])];
        return gS && gS == tS ? SS : void 0
      }

      function AH(SS, HS) {
        return null != SS && HS in Object(SS)
      }

      function yH(SS, HS, gS, tS, bS) {
        return SS === HS || (null == SS || null == HS || !Xg(SS) && !xg(HS) ? SS !== SS && HS !== HS : function(SS, HS, gS, tS, bS, IS) {
          var KS = Hg(SS),
            PS = Hg(HS),
            wS = xS,
            hS = xS;
          KS || (wS = (wS = BH(SS)) == XS ? aS : wS);
          PS || (hS = (hS = BH(HS)) == XS ? aS : hS);
          var ZS = wS == aS && !pS(SS),
            JS = hS == aS && !pS(HS),
            OS = wS == hS;
          if (OS && !ZS) return IS || (IS = new OH), KS || ug(SS) ? UH(SS, HS, gS, tS, bS, IS) : function(SS, HS, gS, tS, bS, XS, xS) {
            switch (gS) {
              case DS:
                if (SS.byteLength != HS.byteLength || SS.byteOffset != HS.byteOffset) return !1;
                SS = SS.buffer, HS = HS.buffer;
              case QS:
                return !(SS.byteLength != HS.byteLength || !tS(new gH(SS), new gH(HS)));
              case NS:
              case qS:
              case kS:
                return rH(+SS, +HS);
              case uS:
                return SS.name == HS.name && SS.message == HS.message;
              case jS:
              case CS:
                return SS == HS + "";
              case fS:
                var IS = sS;
              case GS:
                var aS = 2 & XS;
                if (IS || (IS = MS), SS.size != HS.size && !aS) return !1;
                var KS = xS.get(SS);
                if (KS) return KS == HS;
                XS |= 1, xS.set(SS, HS);
                var PS = UH(IS(SS), IS(HS), tS, bS, XS, xS);
                return xS.delete(SS), PS;
              case nS:
                if (QH) return QH.call(SS) == QH.call(HS)
            }
            return !1
          }(SS, HS, wS, gS, tS, bS, IS);
          if (!(2 & bS)) {
            var dS = ZS && eS.call(SS, "__wrapped__"),
              cS = JS && eS.call(HS, "__wrapped__");
            if (dS || cS) {
              var vS = dS ? SS.value() : SS,
                ES = cS ? HS.value() : HS;
              return IS || (IS = new OH), gS(vS, ES, tS, bS, IS)
            }
          }
          if (!OS) return !1;
          return IS || (IS = new OH),
            function(SS, HS, gS, tS, bS, XS) {
              var xS = 2 & bS,
                NS = Ig(SS),
                qS = NS.length,
                uS = Ig(HS),
                IS = uS.length;
              if (qS != IS && !xS) return !1;
              var fS = qS;
              for (; fS--;) {
                var kS = NS[fS];
                if (!(xS ? kS in HS : eS.call(HS, kS))) return !1
              }
              var aS = XS.get(SS);
              if (aS && XS.get(HS)) return aS == HS;
              var KS = !0;
              XS.set(SS, HS), XS.set(HS, SS);
              var jS = xS;
              for (; ++fS < qS;) {
                var GS = SS[kS = NS[fS]],
                  CS = HS[kS];
                if (tS) var nS = xS ? tS(CS, GS, kS, HS, SS, XS) : tS(GS, CS, kS, SS, HS, XS);
                if (!(void 0 === nS ? GS === CS || gS(GS, CS, tS, bS, XS) : nS)) {
                  KS = !1;
                  break
                }
                jS || (jS = "constructor" == kS)
              }
              if (KS && !jS) {
                var PS = SS.constructor,
                  QS = HS.constructor;
                PS == QS || !("constructor" in SS) || !("constructor" in HS) || "function" == typeof PS && PS instanceof PS && "function" == typeof QS && QS instanceof QS || (KS = !1)
              }
              return XS.delete(SS), XS.delete(HS), KS
            }(SS, HS, gS, tS, bS, IS)
        }(SS, HS, yH, gS, tS, bS))
      }

      function VH(SS) {
        return !(!Xg(SS) || (HS = SS, lS && lS in HS)) && (tg(SS) || pS(SS) ? SH : dS).test(mH(SS));
        var HS
      }

      function iH(SS) {
        return "function" == typeof SS ? SS : null == SS ? fg : "object" == typeof SS ? Hg(SS) ? function(SS, HS) {
          if (FH(SS) && RH(HS)) return TH(lH(SS), HS);
          return function(gS) {
            var tS = function(SS, HS, gS) {
              var tS = null == SS ? void 0 : YH(SS, HS);
              return void 0 === tS ? gS : tS
            }(gS, SS);
            return void 0 === tS && tS === HS ? function(SS, HS) {
              return null != SS && function(SS, HS, gS) {
                HS = FH(HS, SS) ? [HS] : zH(HS);
                var tS, bS = -1,
                  XS = HS.length;
                for (; ++bS < XS;) {
                  var xS = lH(HS[bS]);
                  if (!(tS = null != SS && gS(SS, xS))) break;
                  SS = SS[xS]
                }
                if (tS) return tS;
                XS = SS ? SS.length : 0;
                return !!XS && bg(XS) && MH(xS, XS) && (Hg(SS) || Sg(SS))
              }(SS, HS, AH)
            }(gS, SS) : yH(HS, tS, void 0, 3)
          }
        }(SS[0], SS[1]) : function(SS) {
          var HS = function(SS) {
            var HS = Ig(SS),
              gS = HS.length;
            for (; gS--;) {
              var tS = HS[gS],
                bS = SS[tS];
              HS[gS] = [tS, bS, RH(bS)]
            }
            return HS
          }(SS);
          if (1 == HS.length && HS[0][2]) return TH(HS[0][0], HS[0][1]);
          return function(gS) {
            return gS === SS || function(SS, HS, gS, tS) {
              var bS = gS.length,
                XS = bS,
                xS = !tS;
              if (null == SS) return !XS;
              for (SS = Object(SS); bS--;) {
                var NS = gS[bS];
                if (xS && NS[2] ? NS[1] !== SS[NS[0]] : !(NS[0] in SS)) return !1
              }
              for (; ++bS < XS;) {
                var qS = (NS = gS[bS])[0],
                  uS = SS[qS],
                  IS = NS[1];
                if (xS && NS[2]) {
                  if (void 0 === uS && !(qS in SS)) return !1
                } else {
                  var fS = new OH;
                  if (tS) var kS = tS(uS, IS, qS, SS, HS, fS);
                  if (!(void 0 === kS ? yH(IS, uS, tS, 3, fS) : kS)) return !1
                }
              }
              return !0
            }(gS, SS, HS)
          }
        }(SS) : function(SS) {
          return FH(SS) ? (HS = lH(SS), function(SS) {
            return null == SS ? void 0 : SS[HS]
          }) : function(SS) {
            return function(HS) {
              return YH(HS, SS)
            }
          }(SS);
          var HS
        }(SS)
      }

      function WH(SS) {
        if (! function(SS) {
            var HS = SS && SS.constructor,
              gS = "function" == typeof HS && HS.prototype || TS;
            return SS === gS
          }(SS)) return NH(SS);
        var HS = [];
        for (var gS in Object(SS)) eS.call(SS, gS) && "constructor" != gS && HS.push(gS);
        return HS
      }

      function zH(SS) {
        return Hg(SS) ? SS : oH(SS)
      }

      function UH(SS, HS, gS, tS, bS, XS) {
        var xS = 2 & bS,
          NS = SS.length,
          qS = HS.length;
        if (NS != qS && !(xS && qS > NS)) return !1;
        var uS = XS.get(SS);
        if (uS && XS.get(HS)) return uS == HS;
        var IS = -1,
          fS = !0,
          kS = 1 & bS ? new JH : void 0;
        for (XS.set(SS, HS), XS.set(HS, SS); ++IS < NS;) {
          var aS = SS[IS],
            KS = HS[IS];
          if (tS) var jS = xS ? tS(KS, aS, IS, HS, SS, XS) : tS(aS, KS, IS, SS, HS, XS);
          if (void 0 !== jS) {
            if (jS) continue;
            fS = !1;
            break
          }
          if (kS) {
            if (!US(HS, (function(SS, HS) {
                if (!kS.has(HS) && (aS === SS || gS(aS, SS, tS, bS, XS))) return kS.add(HS)
              }))) {
              fS = !1;
              break
            }
          } else if (aS !== KS && !gS(aS, KS, tS, bS, XS)) {
            fS = !1;
            break
          }
        }
        return XS.delete(SS), XS.delete(HS), fS
      }

      function pH(SS, HS) {
        var gS = SS.__data__;
        return function(SS) {
          var HS = typeof SS;
          return "string" == HS || "number" == HS || "symbol" == HS || "boolean" == HS ? "__proto__" !== SS : null === SS
        }(HS) ? gS["string" == typeof HS ? "string" : "hash"] : gS.map
      }

      function sH(SS, HS) {
        var gS = function(SS, HS) {
          return null == SS ? void 0 : SS[HS]
        }(SS, HS);
        return VH(gS) ? gS : void 0
      }
      var BH = function(SS) {
        return rS.call(SS)
      };

      function MH(SS, HS) {
        return !!(HS = null == HS ? tS : HS) && ("number" == typeof SS || cS.test(SS)) && SS > -1 && SS % 1 == 0 && SS < HS
      }

      function FH(SS, HS) {
        if (Hg(SS)) return !1;
        var gS = typeof SS;
        return !("number" != gS && "symbol" != gS && "boolean" != gS && null != SS && !Ng(SS)) || (hS.test(SS) || !wS.test(SS) || null != HS && SS in Object(HS))
      }

      function RH(SS) {
        return SS === SS && !Xg(SS)
      }

      function TH(SS, HS) {
        return function(gS) {
          return null != gS && (gS[SS] === HS && (void 0 !== HS || SS in Object(gS)))
        }
      }(qH && BH(new qH(new ArrayBuffer(1))) != DS || uH && BH(new uH) != fS || IH && BH(IH.resolve()) != KS || fH && BH(new fH) != GS || kH && BH(new kH) != PS) && (BH = function(SS) {
        var HS = rS.call(SS),
          gS = HS == aS ? SS.constructor : void 0,
          tS = gS ? mH(gS) : void 0;
        if (tS) switch (tS) {
          case KH:
            return DS;
          case jH:
            return fS;
          case GH:
            return KS;
          case CH:
            return GS;
          case nH:
            return PS
        }
        return HS
      });
      var oH = eH((function(SS) {
        var HS;
        SS = null == (HS = SS) ? "" : function(SS) {
          if ("string" == typeof SS) return SS;
          if (Ng(SS)) return DH ? DH.call(SS) : "";
          var HS = SS + "";
          return "0" == HS && 1 / SS == -1 / 0 ? "-0" : HS
        }(HS);
        var gS = [];
        return ZS.test(SS) && gS.push(""), SS.replace(JS, (function(SS, HS, tS, bS) {
          gS.push(tS ? bS.replace(OS, "$1") : HS || SS)
        })), gS
      }));

      function lH(SS) {
        if ("string" == typeof SS || Ng(SS)) return SS;
        var HS = SS + "";
        return "0" == HS && 1 / SS == -1 / 0 ? "-0" : HS
      }

      function mH(SS) {
        if (null != SS) {
          try {
            return mS.call(SS)
          } catch (HS) {}
          try {
            return SS + ""
          } catch (HS) {}
        }
        return ""
      }

      function eH(SS, HS) {
        if ("function" != typeof SS || HS && "function" != typeof HS) throw new TypeError("Expected a function");
        var gS = function() {
          var tS = arguments,
            bS = HS ? HS.apply(this, tS) : tS[0],
            XS = gS.cache;
          if (XS.has(bS)) return XS.get(bS);
          var xS = SS.apply(this, tS);
          return gS.cache = XS.set(bS, xS), xS
        };
        return gS.cache = new(eH.Cache || ZH), gS
      }

      function rH(SS, HS) {
        return SS === HS || SS !== SS && HS !== HS
      }

      function Sg(SS) {
        return function(SS) {
          return xg(SS) && gg(SS)
        }(SS) && eS.call(SS, "callee") && (!XH.call(SS, "callee") || rS.call(SS) == XS)
      }
      eH.Cache = ZH;
      var Hg = Array.isArray;

      function gg(SS) {
        return null != SS && bg(SS.length) && !tg(SS)
      }

      function tg(SS) {
        var HS = Xg(SS) ? rS.call(SS) : "";
        return HS == IS || "[object GeneratorFunction]" == HS
      }

      function bg(SS) {
        return "number" == typeof SS && SS > -1 && SS % 1 == 0 && SS <= tS
      }

      function Xg(SS) {
        var HS = typeof SS;
        return !!SS && ("object" == HS || "function" == HS)
      }

      function xg(SS) {
        return !!SS && "object" == typeof SS
      }

      function Ng(SS) {
        return "symbol" == typeof SS || xg(SS) && rS.call(SS) == nS
      }
      var qg, ug = WS ? (qg = WS, function(SS) {
        return qg(SS)
      }) : function(SS) {
        return xg(SS) && bg(SS.length) && !!vS[rS.call(SS)]
      };

      function Ig(SS) {
        return gg(SS) ? dH(SS) : WH(SS)
      }

      function fg(SS) {
        return SS
      }
      SS.exports = function(SS, HS, gS) {
        var tS, bS = Hg(SS) || ug(SS);
        if (HS = iH(HS), null == gS)
          if (bS || Xg(SS)) {
            var XS = SS.constructor;
            gS = bS ? Hg(SS) ? new XS : [] : tg(XS) ? Xg(tS = tH(SS)) ? bH(tS) : {} : {}
          } else gS = {};
        return (bS ? zS : LH)(SS, (function(SS, tS, bS) {
          return HS(gS, SS, tS, bS)
        })), gS
      }
    }(iX, iX.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      l: WX
    } = tS
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);