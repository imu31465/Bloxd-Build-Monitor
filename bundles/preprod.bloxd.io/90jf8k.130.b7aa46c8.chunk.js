export const id = 130;
export const ids = [130];
export const modules = {
  7054: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => Au,
      e: () => GS
    });
    var CF = {};
    SF.r(CF), SF.d(CF, {
      d: () => CC,
      f: () => hC,
      e: () => uC,
      h: () => jC,
      l: () => BS,
      p: () => xA,
      t: () => pS,
      x: () => YC,
      y: () => VC,
      B: () => oC,
      C: () => vC,
      G: () => DC,
      H: () => OC,
      I: () => ZC,
      M: () => JS,
      J: () => WC,
      Q: () => mA,
      R: () => LC
    });
    var AF = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function uF(FF) {
      return FF && FF.__esModule && Object.prototype.hasOwnProperty.call(FF, "default") ? FF.default : FF
    }
    var hF = {
      exports: {}
    };
    ! function(FF) {
      var WF = Object.prototype.hasOwnProperty,
        SF = "~";

      function CF() {}

      function AF(FF, WF, SF) {
        this.bA = FF, this.context = WF, this.once = SF || !1
      }

      function uF(FF, WF, CF, uF, hF) {
        if ("function" !== typeof CF) throw new TypeError("The listener must be a function");
        var bW = new AF(CF, uF || FF, hF),
          dF = SF ? SF + WF : WF;
        return FF._events[dF] ? FF._events[dF].bA ? FF._events[dF] = [FF._events[dF], bW] : FF._events[dF].push(bW) : (FF._events[dF] = bW, FF._eventsCount++), FF
      }

      function hF(FF, WF) {
        0 === --FF._eventsCount ? FF._events = new CF : delete FF._events[WF]
      }

      function bW() {
        this._events = new CF, this._eventsCount = 0
      }
      Object.create && (CF.prototype = Object.create(null), (new CF).__proto__ || (SF = !1)), bW.prototype.eventNames = function() {
        var FF, CF, AF = [];
        if (0 === this._eventsCount) return AF;
        for (CF in FF = this._events) WF.call(FF, CF) && AF.push(SF ? CF.slice(1) : CF);
        return Object.getOwnPropertySymbols ? AF.concat(Object.getOwnPropertySymbols(FF)) : AF
      }, bW.prototype.listeners = function(FF) {
        var WF = SF ? SF + FF : FF,
          CF = this._events[WF];
        if (!CF) return [];
        if (CF.bA) return [CF.bA];
        for (var AF = 0, uF = CF.length, hF = new Array(uF); AF < uF; AF++) hF[AF] = CF[AF].bA;
        return hF
      }, bW.prototype.listenerCount = function(FF) {
        var WF = SF ? SF + FF : FF,
          CF = this._events[WF];
        return CF ? CF.bA ? 1 : CF.length : 0
      }, bW.prototype.emit = function(FF, WF, CF, AF, uF, hF) {
        var bW = SF ? SF + FF : FF;
        if (!this._events[bW]) return !1;
        var dF, PF, RF = this._events[bW],
          iW = arguments.length;
        if (RF.bA) {
          switch (RF.once && this.removeListener(FF, RF.bA, void 0, !0), iW) {
            case 1:
              return RF.bA.call(RF.context), !0;
            case 2:
              return RF.bA.call(RF.context, WF), !0;
            case 3:
              return RF.bA.call(RF.context, WF, CF), !0;
            case 4:
              return RF.bA.call(RF.context, WF, CF, AF), !0;
            case 5:
              return RF.bA.call(RF.context, WF, CF, AF, uF), !0;
            case 6:
              return RF.bA.call(RF.context, WF, CF, AF, uF, hF), !0
          }
          for (PF = 1, dF = new Array(iW - 1); PF < iW; PF++) dF[PF - 1] = arguments[PF];
          RF.bA.apply(RF.context, dF)
        } else {
          var eF, EF = RF.length;
          for (PF = 0; PF < EF; PF++) switch (RF[PF].once && this.removeListener(FF, RF[PF].bA, void 0, !0), iW) {
            case 1:
              RF[PF].bA.call(RF[PF].context);
              break;
            case 2:
              RF[PF].bA.call(RF[PF].context, WF);
              break;
            case 3:
              RF[PF].bA.call(RF[PF].context, WF, CF);
              break;
            case 4:
              RF[PF].bA.call(RF[PF].context, WF, CF, AF);
              break;
            default:
              if (!dF)
                for (eF = 1, dF = new Array(iW - 1); eF < iW; eF++) dF[eF - 1] = arguments[eF];
              RF[PF].bA.apply(RF[PF].context, dF)
          }
        }
        return !0
      }, bW.prototype.on = function(FF, WF, SF) {
        return uF(this, FF, WF, SF, !1)
      }, bW.prototype.once = function(FF, WF, SF) {
        return uF(this, FF, WF, SF, !0)
      }, bW.prototype.removeListener = function(FF, WF, CF, AF) {
        var uF = SF ? SF + FF : FF;
        if (!this._events[uF]) return this;
        if (!WF) return hF(this, uF), this;
        var bW = this._events[uF];
        if (bW.bA) bW.bA !== WF || AF && !bW.once || CF && bW.context !== CF || hF(this, uF);
        else {
          for (var dF = 0, PF = [], RF = bW.length; dF < RF; dF++)(bW[dF].bA !== WF || AF && !bW[dF].once || CF && bW[dF].context !== CF) && PF.push(bW[dF]);
          PF.length ? this._events[uF] = 1 === PF.length ? PF[0] : PF : hF(this, uF)
        }
        return this
      }, bW.prototype.JR = function(FF) {
        var WF;
        return FF ? (WF = SF ? SF + FF : FF, this._events[WF] && hF(this, WF)) : (this._events = new CF, this._eventsCount = 0), this
      }, bW.prototype.off = bW.prototype.removeListener, bW.prototype.addListener = bW.prototype.on, bW.prefixed = SF, bW.EventEmitter = bW, FF.exports = bW
    }(hF);
    var bW, dF, PF = uF(hF.exports);
    ! function(FF) {
      FF.assertEqual = FF => FF, FF.assertIs = function(FF) {}, FF.assertNever = function(FF) {
        throw new Error
      }, FF.arrayToEnum = FF => {
        const WF = {};
        for (const SF of FF) WF[SF] = SF;
        return WF
      }, FF.getValidEnumValues = WF => {
        const SF = FF.objectKeys(WF).filter((FF => "number" !== typeof WF[WF[FF]])),
          CF = {};
        for (const FF of SF) CF[FF] = WF[FF];
        return FF.objectValues(CF)
      }, FF.objectValues = WF => FF.objectKeys(WF).map((function(FF) {
        return WF[FF]
      })), FF.objectKeys = "function" === typeof Object.keys ? FF => Object.keys(FF) : FF => {
        const WF = [];
        for (const SF in FF) Object.prototype.hasOwnProperty.call(FF, SF) && WF.push(SF);
        return WF
      }, FF.find = (FF, WF) => {
        for (const SF of FF)
          if (WF(SF)) return SF
      }, FF.isInteger = "function" === typeof Number.isInteger ? FF => Number.isInteger(FF) : FF => "number" === typeof FF && isFinite(FF) && Math.floor(FF) === FF, FF.joinValues = function(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return FF.map((FF => "string" === typeof FF ? `'${FF}'` : FF)).join(WF)
      }, FF.jsonStringifyReplacer = (FF, WF) => "bigint" === typeof WF ? WF.toString() : WF
    }(bW || (bW = {})),
    function(FF) {
      FF.mergeShapes = (FF, WF) => ({
        ...FF,
        ...WF
      })
    }(dF || (dF = {}));
    const RF = bW.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      iW = FF => {
        switch (typeof FF) {
          case "undefined":
            return RF.undefined;
          case "string":
            return RF.string;
          case "number":
            return isNaN(FF) ? RF.nan : RF.number;
          case "boolean":
            return RF.boolean;
          case "function":
            return RF.function;
          case "bigint":
            return RF.bigint;
          case "symbol":
            return RF.symbol;
          case "object":
            return Array.isArray(FF) ? RF.array : null === FF ? RF.null : FF.then && "function" === typeof FF.then && FF.catch && "function" === typeof FF.catch ? RF.promise : "undefined" !== typeof Map && FF instanceof Map ? RF.map : "undefined" !== typeof Set && FF instanceof Set ? RF.set : "undefined" !== typeof Date && FF instanceof Date ? RF.date : RF.object;
          default:
            return RF.unknown
        }
      },
      eF = bW.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class EF extends Error {
      constructor(FF) {
        var WF;
        super(), WF = this, this.issues = [], this.addIssue = FF => {
          this.issues = [...this.issues, FF]
        }, this.addIssues = function() {
          let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          WF.issues = [...WF.issues, ...FF]
        };
        const SF = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, SF) : this.__proto__ = SF, this.name = "ZodError", this.issues = FF
      }
      get errors() {
        return this.issues
      }
      format(FF) {
        const WF = FF || function(FF) {
            return FF.message
          },
          SF = {
            _errors: []
          },
          CF = FF => {
            for (const AF of FF.issues)
              if ("invalid_union" === AF.code) AF.unionErrors.map(CF);
              else if ("invalid_return_type" === AF.code) CF(AF.returnTypeError);
            else if ("invalid_arguments" === AF.code) CF(AF.argumentsError);
            else if (0 === AF.path.length) SF._errors.push(WF(AF));
            else {
              let FF = SF,
                CF = 0;
              for (; CF < AF.path.length;) {
                const SF = AF.path[CF];
                CF === AF.path.length - 1 ? (FF[SF] = FF[SF] || {
                  _errors: []
                }, FF[SF]._errors.push(WF(AF))) : FF[SF] = FF[SF] || {
                  _errors: []
                }, FF = FF[SF], CF++
              }
            }
          };
        return CF(this), SF
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, bW.jsonStringifyReplacer, 2)
      }
      get QC() {
        return 0 === this.issues.length
      }
      flatten() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : FF => FF.message;
        const WF = {},
          SF = [];
        for (const CF of this.issues) CF.path.length > 0 ? (WF[CF.path[0]] = WF[CF.path[0]] || [], WF[CF.path[0]].push(FF(CF))) : SF.push(FF(CF));
        return {
          formErrors: SF,
          fieldErrors: WF
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    EF.create = FF => new EF(FF);
    const QF = (FF, WF) => {
      let SF;
      switch (FF.code) {
        case eF.invalid_type:
          SF = FF.received === RF.undefined ? "Required" : `Expected ${FF.expected}, received ${FF.received}`;
          break;
        case eF.invalid_literal:
          SF = `Invalid literal value, expected ${JSON.stringify(FF.expected,bW.jsonStringifyReplacer)}`;
          break;
        case eF.unrecognized_keys:
          SF = `Unrecognized key(s) in object: ${bW.joinValues(FF.keys,", ")}`;
          break;
        case eF.invalid_union:
          SF = "Invalid input";
          break;
        case eF.invalid_union_discriminator:
          SF = `Invalid discriminator value. Expected ${bW.joinValues(FF.options)}`;
          break;
        case eF.invalid_enum_value:
          SF = `Invalid enum value. Expected ${bW.joinValues(FF.options)}, received '${FF.received}'`;
          break;
        case eF.invalid_arguments:
          SF = "Invalid function arguments";
          break;
        case eF.invalid_return_type:
          SF = "Invalid function return type";
          break;
        case eF.invalid_date:
          SF = "Invalid date";
          break;
        case eF.invalid_string:
          "object" === typeof FF.validation ? "includes" in FF.validation ? (SF = `Invalid input: must include "${FF.validation.includes}"`, "number" === typeof FF.validation.position && (SF = `${SF} at one or more positions greater than or equal to ${FF.validation.position}`)) : "startsWith" in FF.validation ? SF = `Invalid input: must start with "${FF.validation.startsWith}"` : "endsWith" in FF.validation ? SF = `Invalid input: must end with "${FF.validation.endsWith}"` : bW.assertNever(FF.validation) : SF = "regex" !== FF.validation ? `Invalid ${FF.validation}` : "Invalid";
          break;
        case eF.too_small:
          SF = "array" === FF.type ? `Array must contain ${FF.exact?"exactly":FF.inclusive?"at least":"more than"} ${FF.minimum} element(s)` : "string" === FF.type ? `String must contain ${FF.exact?"exactly":FF.inclusive?"at least":"over"} ${FF.minimum} character(s)` : "number" === FF.type ? `Number must be ${FF.exact?"exactly equal to ":FF.inclusive?"greater than or equal to ":"greater than "}${FF.minimum}` : "date" === FF.type ? `Date must be ${FF.exact?"exactly equal to ":FF.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(FF.minimum))}` : "Invalid input";
          break;
        case eF.too_big:
          SF = "array" === FF.type ? `Array must contain ${FF.exact?"exactly":FF.inclusive?"at most":"less than"} ${FF.maximum} element(s)` : "string" === FF.type ? `String must contain ${FF.exact?"exactly":FF.inclusive?"at most":"under"} ${FF.maximum} character(s)` : "number" === FF.type ? `Number must be ${FF.exact?"exactly":FF.inclusive?"less than or equal to":"less than"} ${FF.maximum}` : "bigint" === FF.type ? `BigInt must be ${FF.exact?"exactly":FF.inclusive?"less than or equal to":"less than"} ${FF.maximum}` : "date" === FF.type ? `Date must be ${FF.exact?"exactly":FF.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(FF.maximum))}` : "Invalid input";
          break;
        case eF.custom:
          SF = "Invalid input";
          break;
        case eF.invalid_intersection_types:
          SF = "Intersection results could not be merged";
          break;
        case eF.not_multiple_of:
          SF = `Number must be a multiple of ${FF.multipleOf}`;
          break;
        case eF.not_finite:
          SF = "Number must be finite";
          break;
        default:
          SF = WF.defaultError, bW.assertNever(FF)
      }
      return {
        message: SF
      }
    };
    let rW = QF;

    function gW() {
      return rW
    }
    const tW = FF => {
      const {
        data: WF,
        path: SF,
        errorMaps: CF,
        issueData: AF
      } = FF, uF = [...SF, ...AF.path || []], hF = {
        ...AF,
        path: uF
      };
      let bW = "";
      const dF = CF.filter((FF => !!FF)).slice().reverse();
      for (const PF of dF) bW = PF(hF, {
        data: WF,
        defaultError: bW
      }).message;
      return {
        ...AF,
        path: uF,
        message: AF.message || bW
      }
    };

    function TF(FF, WF) {
      const SF = tW({
        issueData: WF,
        data: FF.data,
        path: FF.path,
        errorMaps: [FF.common.contextualErrorMap, FF.schemaErrorMap, gW(), QF].filter((FF => !!FF))
      });
      FF.common.issues.push(SF)
    }
    class aW {
      constructor() {
        this.value = "valid"
      }
      BC() {
        "valid" === this.value && (this.value = "BC")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(FF, WF) {
        const SF = [];
        for (const CF of WF) {
          if ("aborted" === CF.status) return kW;
          "BC" === CF.status && FF.BC(), SF.push(CF.value)
        }
        return {
          status: FF.value,
          value: SF
        }
      }
      static async mergeObjectAsync(FF, WF) {
        const SF = [];
        for (const CF of WF) SF.push({
          key: await CF.key,
          value: await CF.value
        });
        return aW.mergeObjectSync(FF, SF)
      }
      static mergeObjectSync(FF, WF) {
        const SF = {};
        for (const CF of WF) {
          const {
            key: WF,
            value: AF
          } = CF;
          if ("aborted" === WF.status) return kW;
          if ("aborted" === AF.status) return kW;
          "BC" === WF.status && FF.BC(), "BC" === AF.status && FF.BC(), "__proto__" === WF.value || "undefined" === typeof AF.value && !CF.alwaysSet || (SF[WF.value] = AF.value)
        }
        return {
          status: FF.value,
          value: SF
        }
      }
    }
    const kW = Object.freeze({
        status: "aborted"
      }),
      qW = FF => ({
        status: "BC",
        value: FF
      }),
      VF = FF => ({
        status: "valid",
        value: FF
      }),
      NF = FF => "aborted" === FF.status,
      DF = FF => "BC" === FF.status,
      LF = FF => "valid" === FF.status,
      mW = FF => "undefined" !== typeof Promise && FF instanceof Promise;
    var OF;
    ! function(FF) {
      FF.errToObj = FF => "string" === typeof FF ? {
        message: FF
      } : FF || {}, FF.toString = FF => "string" === typeof FF ? FF : null === FF || void 0 === FF ? void 0 : FF.message
    }(OF || (OF = {}));
    class xW {
      constructor(FF, WF, SF, CF) {
        this._cachedPath = [], this.parent = FF, this.data = WF, this._path = SF, this._key = CF
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const ZF = (FF, WF) => {
      if (LF(WF)) return {
        success: !0,
        data: WF.value
      };
      if (!FF.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const WF = new EF(FF.common.issues);
          return this._error = WF, this._error
        }
      }
    };

    function oF(FF) {
      if (!FF) return {};
      const {
        errorMap: WF,
        invalid_type_error: SF,
        required_error: CF,
        description: AF
      } = FF;
      if (WF && (SF || CF)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (WF) return {
        errorMap: WF,
        description: AF
      };
      return {
        errorMap: (FF, WF) => "invalid_type" !== FF.code ? {
          message: WF.defaultError
        } : "undefined" === typeof WF.data ? {
          message: null !== CF && void 0 !== CF ? CF : WF.defaultError
        } : {
          message: null !== SF && void 0 !== SF ? SF : WF.defaultError
        },
        description: AF
      }
    }
    class YF {
      constructor(FF) {
        this.spa = this.safeParseAsync, this._def = FF, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(FF) {
        return iW(FF.data)
      }
      _getOrReturnCtx(FF, WF) {
        return WF || {
          common: FF.parent.common,
          data: FF.data,
          parsedType: iW(FF.data),
          schemaErrorMap: this._def.errorMap,
          path: FF.path,
          parent: FF.parent
        }
      }
      _processInputParams(FF) {
        return {
          status: new aW,
          ctx: {
            common: FF.parent.common,
            data: FF.data,
            parsedType: iW(FF.data),
            schemaErrorMap: this._def.errorMap,
            path: FF.path,
            parent: FF.parent
          }
        }
      }
      _parseSync(FF) {
        const WF = this._parse(FF);
        if (mW(WF)) throw new Error("Synchronous parse encountered promise.");
        return WF
      }
      _parseAsync(FF) {
        const WF = this._parse(FF);
        return Promise.resolve(WF)
      }
      parse(FF, WF) {
        const SF = this.safeParse(FF, WF);
        if (SF.success) return SF.data;
        throw SF.error
      }
      safeParse(FF, WF) {
        var SF;
        const CF = {
            common: {
              issues: [],
              async: null !== (SF = null === WF || void 0 === WF ? void 0 : WF.async) && void 0 !== SF && SF,
              contextualErrorMap: null === WF || void 0 === WF ? void 0 : WF.errorMap
            },
            path: (null === WF || void 0 === WF ? void 0 : WF.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: FF,
            parsedType: iW(FF)
          },
          AF = this._parseSync({
            data: FF,
            path: CF.path,
            parent: CF
          });
        return ZF(CF, AF)
      }
      async parseAsync(FF, WF) {
        const SF = await this.safeParseAsync(FF, WF);
        if (SF.success) return SF.data;
        throw SF.error
      }
      async safeParseAsync(FF, WF) {
        const SF = {
            common: {
              issues: [],
              contextualErrorMap: null === WF || void 0 === WF ? void 0 : WF.errorMap,
              async: !0
            },
            path: (null === WF || void 0 === WF ? void 0 : WF.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: FF,
            parsedType: iW(FF)
          },
          CF = this._parse({
            data: FF,
            path: SF.path,
            parent: SF
          }),
          AF = await (mW(CF) ? CF : Promise.resolve(CF));
        return ZF(SF, AF)
      }
      refine(FF, WF) {
        const SF = FF => "string" === typeof WF || "undefined" === typeof WF ? {
          message: WF
        } : "function" === typeof WF ? WF(FF) : WF;
        return this._refinement(((WF, CF) => {
          const AF = FF(WF),
            uF = () => CF.addIssue({
              code: eF.custom,
              ...SF(WF)
            });
          return "undefined" !== typeof Promise && AF instanceof Promise ? AF.then((FF => !!FF || (uF(), !1))) : !!AF || (uF(), !1)
        }))
      }
      refinement(FF, WF) {
        return this._refinement(((SF, CF) => !!FF(SF) || (CF.addIssue("function" === typeof WF ? WF(SF, CF) : WF), !1)))
      }
      _refinement(FF) {
        return new kS({
          schema: this,
          typeName: MW.ZodEffects,
          effect: {
            type: "refinement",
            refinement: FF
          }
        })
      }
      superRefine(FF) {
        return this._refinement(FF)
      }
      optional() {
        return qS.create(this, this._def)
      }
      nullable() {
        return VW.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return WW.create(this, this._def)
      }
      promise() {
        return aS.create(this, this._def)
      }
      or(FF) {
        return AW.create([this, FF], this._def)
      }
      and(FF) {
        return dW.create(this, FF, this._def)
      }
      transform(FF) {
        return new kS({
          ...oF(this._def),
          schema: this,
          typeName: MW.ZodEffects,
          effect: {
            type: "transform",
            transform: FF
          }
        })
      }
      default (FF) {
        const WF = "function" === typeof FF ? FF : () => FF;
        return new NW({
          ...oF(this._def),
          innerType: this,
          defaultValue: WF,
          typeName: MW.ZodDefault
        })
      }
      brand() {
        return new OW({
          typeName: MW.ZodBranded,
          type: this,
          ...oF(this._def)
        })
      } catch (FF) {
        const WF = "function" === typeof FF ? FF : () => FF;
        return new DW({
          ...oF(this._def),
          innerType: this,
          catchValue: WF,
          typeName: MW.ZodCatch
        })
      }
      describe(FF) {
        return new(0, this.constructor)({
          ...this._def,
          description: FF
        })
      }
      pipe(FF) {
        return xS.create(this, FF)
      }
      readonly() {
        return ZW.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const MF = /^c[^\s-]{8,}$/i,
      cW = /^[a-z][a-z0-9]*$/,
      GF = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      zW = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      IF = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let fF;
    const yW = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      sF = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class nF extends YF {
      _parse(FF) {
        this._def.coerce && (FF.data = String(FF.data));
        if (this._getType(FF) !== RF.string) {
          const WF = this._getOrReturnCtx(FF);
          return TF(WF, {
            code: eF.invalid_type,
            expected: RF.string,
            received: WF.parsedType
          }), kW
        }
        const WF = new aW;
        let SF;
        for (const dF of this._def.checks)
          if ("min" === dF.kind) FF.data.length < dF.value && (SF = this._getOrReturnCtx(FF, SF), TF(SF, {
            code: eF.too_small,
            minimum: dF.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: dF.message
          }), WF.BC());
          else if ("max" === dF.kind) FF.data.length > dF.value && (SF = this._getOrReturnCtx(FF, SF), TF(SF, {
          code: eF.too_big,
          maximum: dF.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: dF.message
        }), WF.BC());
        else if ("length" === dF.kind) {
          const CF = FF.data.length > dF.value,
            AF = FF.data.length < dF.value;
          (CF || AF) && (SF = this._getOrReturnCtx(FF, SF), CF ? TF(SF, {
            code: eF.too_big,
            maximum: dF.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: dF.message
          }) : AF && TF(SF, {
            code: eF.too_small,
            minimum: dF.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: dF.message
          }), WF.BC())
        } else if ("email" === dF.kind) IF.test(FF.data) || (SF = this._getOrReturnCtx(FF, SF), TF(SF, {
          validation: "email",
          code: eF.invalid_string,
          message: dF.message
        }), WF.BC());
        else if ("emoji" === dF.kind) fF || (fF = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), fF.test(FF.data) || (SF = this._getOrReturnCtx(FF, SF), TF(SF, {
          validation: "emoji",
          code: eF.invalid_string,
          message: dF.message
        }), WF.BC());
        else if ("uuid" === dF.kind) zW.test(FF.data) || (SF = this._getOrReturnCtx(FF, SF), TF(SF, {
          validation: "uuid",
          code: eF.invalid_string,
          message: dF.message
        }), WF.BC());
        else if ("cuid" === dF.kind) MF.test(FF.data) || (SF = this._getOrReturnCtx(FF, SF), TF(SF, {
          validation: "cuid",
          code: eF.invalid_string,
          message: dF.message
        }), WF.BC());
        else if ("cuid2" === dF.kind) cW.test(FF.data) || (SF = this._getOrReturnCtx(FF, SF), TF(SF, {
          validation: "cuid2",
          code: eF.invalid_string,
          message: dF.message
        }), WF.BC());
        else if ("ulid" === dF.kind) GF.test(FF.data) || (SF = this._getOrReturnCtx(FF, SF), TF(SF, {
          validation: "ulid",
          code: eF.invalid_string,
          message: dF.message
        }), WF.BC());
        else if ("url" === dF.kind) try {
          new URL(FF.data)
        } catch (hF) {
          SF = this._getOrReturnCtx(FF, SF), TF(SF, {
            validation: "url",
            code: eF.invalid_string,
            message: dF.message
          }), WF.BC()
        } else if ("regex" === dF.kind) {
          dF.regex.lastIndex = 0;
          dF.regex.test(FF.data) || (SF = this._getOrReturnCtx(FF, SF), TF(SF, {
            validation: "regex",
            code: eF.invalid_string,
            message: dF.message
          }), WF.BC())
        } else if ("trim" === dF.kind) FF.data = FF.data.trim();
        else if ("includes" === dF.kind) FF.data.includes(dF.value, dF.position) || (SF = this._getOrReturnCtx(FF, SF), TF(SF, {
          code: eF.invalid_string,
          validation: {
            includes: dF.value,
            position: dF.position
          },
          message: dF.message
        }), WF.BC());
        else if ("toLowerCase" === dF.kind) FF.data = FF.data.toLowerCase();
        else if ("toUpperCase" === dF.kind) FF.data = FF.data.toUpperCase();
        else if ("startsWith" === dF.kind) FF.data.startsWith(dF.value) || (SF = this._getOrReturnCtx(FF, SF), TF(SF, {
          code: eF.invalid_string,
          validation: {
            startsWith: dF.value
          },
          message: dF.message
        }), WF.BC());
        else if ("endsWith" === dF.kind) FF.data.endsWith(dF.value) || (SF = this._getOrReturnCtx(FF, SF), TF(SF, {
          code: eF.invalid_string,
          validation: {
            endsWith: dF.value
          },
          message: dF.message
        }), WF.BC());
        else if ("datetime" === dF.kind) {
          ((uF = dF).precision ? uF.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${uF.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${uF.precision}}Z$`) : 0 === uF.precision ? uF.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : uF.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(FF.data) || (SF = this._getOrReturnCtx(FF, SF), TF(SF, {
            code: eF.invalid_string,
            validation: "datetime",
            message: dF.message
          }), WF.BC())
        } else "ip" === dF.kind ? (CF = FF.data, ("v4" !== (AF = dF.version) && AF || !yW.test(CF)) && ("v6" !== AF && AF || !sF.test(CF)) && (SF = this._getOrReturnCtx(FF, SF), TF(SF, {
          validation: "ip",
          code: eF.invalid_string,
          message: dF.message
        }), WF.BC())) : bW.assertNever(dF);
        var CF, AF, uF;
        return {
          status: WF.value,
          value: FF.data
        }
      }
      _regex(FF, WF, SF) {
        return this.refinement((WF => FF.test(WF)), {
          validation: WF,
          code: eF.invalid_string,
          ...OF.errToObj(SF)
        })
      }
      _addCheck(FF) {
        return new nF({
          ...this._def,
          checks: [...this._def.checks, FF]
        })
      }
      email(FF) {
        return this._addCheck({
          kind: "email",
          ...OF.errToObj(FF)
        })
      }
      url(FF) {
        return this._addCheck({
          kind: "url",
          ...OF.errToObj(FF)
        })
      }
      emoji(FF) {
        return this._addCheck({
          kind: "emoji",
          ...OF.errToObj(FF)
        })
      }
      uuid(FF) {
        return this._addCheck({
          kind: "uuid",
          ...OF.errToObj(FF)
        })
      }
      cuid(FF) {
        return this._addCheck({
          kind: "cuid",
          ...OF.errToObj(FF)
        })
      }
      cuid2(FF) {
        return this._addCheck({
          kind: "cuid2",
          ...OF.errToObj(FF)
        })
      }
      ulid(FF) {
        return this._addCheck({
          kind: "ulid",
          ...OF.errToObj(FF)
        })
      }
      ip(FF) {
        return this._addCheck({
          kind: "ip",
          ...OF.errToObj(FF)
        })
      }
      datetime(FF) {
        var WF;
        return "string" === typeof FF ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: FF
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === FF || void 0 === FF ? void 0 : FF.precision) ? null : null === FF || void 0 === FF ? void 0 : FF.precision,
          offset: null !== (WF = null === FF || void 0 === FF ? void 0 : FF.offset) && void 0 !== WF && WF,
          ...OF.errToObj(null === FF || void 0 === FF ? void 0 : FF.message)
        })
      }
      regex(FF, WF) {
        return this._addCheck({
          kind: "regex",
          regex: FF,
          ...OF.errToObj(WF)
        })
      }
      includes(FF, WF) {
        return this._addCheck({
          kind: "includes",
          value: FF,
          position: null === WF || void 0 === WF ? void 0 : WF.position,
          ...OF.errToObj(null === WF || void 0 === WF ? void 0 : WF.message)
        })
      }
      startsWith(FF, WF) {
        return this._addCheck({
          kind: "startsWith",
          value: FF,
          ...OF.errToObj(WF)
        })
      }
      endsWith(FF, WF) {
        return this._addCheck({
          kind: "endsWith",
          value: FF,
          ...OF.errToObj(WF)
        })
      }
      min(FF, WF) {
        return this._addCheck({
          kind: "min",
          value: FF,
          ...OF.errToObj(WF)
        })
      }
      max(FF, WF) {
        return this._addCheck({
          kind: "max",
          value: FF,
          ...OF.errToObj(WF)
        })
      }
      length(FF, WF) {
        return this._addCheck({
          kind: "length",
          value: FF,
          ...OF.errToObj(WF)
        })
      }
      nonempty(FF) {
        return this.min(1, OF.errToObj(FF))
      }
      trim() {
        return new nF({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new nF({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new nF({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((FF => "datetime" === FF.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((FF => "email" === FF.kind))
      }
      get isURL() {
        return !!this._def.checks.find((FF => "url" === FF.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((FF => "emoji" === FF.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((FF => "uuid" === FF.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((FF => "cuid" === FF.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((FF => "cuid2" === FF.kind))
      }
      get isULID() {
        return !!this._def.checks.find((FF => "ulid" === FF.kind))
      }
      get isIP() {
        return !!this._def.checks.find((FF => "ip" === FF.kind))
      }
      get minLength() {
        let FF = null;
        for (const WF of this._def.checks) "min" === WF.kind && (null === FF || WF.value > FF) && (FF = WF.value);
        return FF
      }
      get maxLength() {
        let FF = null;
        for (const WF of this._def.checks) "max" === WF.kind && (null === FF || WF.value < FF) && (FF = WF.value);
        return FF
      }
    }

    function HF(FF, WF) {
      const SF = (FF.toString().split(".")[1] || "").length,
        CF = (WF.toString().split(".")[1] || "").length,
        AF = SF > CF ? SF : CF;
      return parseInt(FF.toFixed(AF).replace(".", "")) % parseInt(WF.toFixed(AF).replace(".", "")) / Math.pow(10, AF)
    }
    nF.create = FF => {
      var WF;
      return new nF({
        checks: [],
        typeName: MW.ZodString,
        coerce: null !== (WF = null === FF || void 0 === FF ? void 0 : FF.coerce) && void 0 !== WF && WF,
        ...oF(FF)
      })
    };
    class KF extends YF {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(FF) {
        this._def.coerce && (FF.data = Number(FF.data));
        if (this._getType(FF) !== RF.number) {
          const WF = this._getOrReturnCtx(FF);
          return TF(WF, {
            code: eF.invalid_type,
            expected: RF.number,
            received: WF.parsedType
          }), kW
        }
        let WF;
        const SF = new aW;
        for (const CF of this._def.checks)
          if ("int" === CF.kind) bW.isInteger(FF.data) || (WF = this._getOrReturnCtx(FF, WF), TF(WF, {
            code: eF.invalid_type,
            expected: "integer",
            received: "float",
            message: CF.message
          }), SF.BC());
          else if ("min" === CF.kind) {
          (CF.inclusive ? FF.data < CF.value : FF.data <= CF.value) && (WF = this._getOrReturnCtx(FF, WF), TF(WF, {
            code: eF.too_small,
            minimum: CF.value,
            type: "number",
            inclusive: CF.inclusive,
            exact: !1,
            message: CF.message
          }), SF.BC())
        } else if ("max" === CF.kind) {
          (CF.inclusive ? FF.data > CF.value : FF.data >= CF.value) && (WF = this._getOrReturnCtx(FF, WF), TF(WF, {
            code: eF.too_big,
            maximum: CF.value,
            type: "number",
            inclusive: CF.inclusive,
            exact: !1,
            message: CF.message
          }), SF.BC())
        } else "multipleOf" === CF.kind ? 0 !== HF(FF.data, CF.value) && (WF = this._getOrReturnCtx(FF, WF), TF(WF, {
          code: eF.not_multiple_of,
          multipleOf: CF.value,
          message: CF.message
        }), SF.BC()) : "finite" === CF.kind ? Number.isFinite(FF.data) || (WF = this._getOrReturnCtx(FF, WF), TF(WF, {
          code: eF.not_finite,
          message: CF.message
        }), SF.BC()) : bW.assertNever(CF);
        return {
          status: SF.value,
          value: FF.data
        }
      }
      gte(FF, WF) {
        return this.setLimit("min", FF, !0, OF.toString(WF))
      }
      gt(FF, WF) {
        return this.setLimit("min", FF, !1, OF.toString(WF))
      }
      lte(FF, WF) {
        return this.setLimit("max", FF, !0, OF.toString(WF))
      }
      lt(FF, WF) {
        return this.setLimit("max", FF, !1, OF.toString(WF))
      }
      setLimit(FF, WF, SF, CF) {
        return new KF({
          ...this._def,
          checks: [...this._def.checks, {
            kind: FF,
            value: WF,
            inclusive: SF,
            message: OF.toString(CF)
          }]
        })
      }
      _addCheck(FF) {
        return new KF({
          ...this._def,
          checks: [...this._def.checks, FF]
        })
      }
      int(FF) {
        return this._addCheck({
          kind: "int",
          message: OF.toString(FF)
        })
      }
      positive(FF) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: OF.toString(FF)
        })
      }
      negative(FF) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: OF.toString(FF)
        })
      }
      nonpositive(FF) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: OF.toString(FF)
        })
      }
      nonnegative(FF) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: OF.toString(FF)
        })
      }
      multipleOf(FF, WF) {
        return this._addCheck({
          kind: "multipleOf",
          value: FF,
          message: OF.toString(WF)
        })
      }
      finite(FF) {
        return this._addCheck({
          kind: "finite",
          message: OF.toString(FF)
        })
      }
      safe(FF) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: OF.toString(FF)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: OF.toString(FF)
        })
      }
      get minValue() {
        let FF = null;
        for (const WF of this._def.checks) "min" === WF.kind && (null === FF || WF.value > FF) && (FF = WF.value);
        return FF
      }
      get maxValue() {
        let FF = null;
        for (const WF of this._def.checks) "max" === WF.kind && (null === FF || WF.value < FF) && (FF = WF.value);
        return FF
      }
      get isInt() {
        return !!this._def.checks.find((FF => "int" === FF.kind || "multipleOf" === FF.kind && bW.isInteger(FF.value)))
      }
      get isFinite() {
        let FF = null,
          WF = null;
        for (const SF of this._def.checks) {
          if ("finite" === SF.kind || "int" === SF.kind || "multipleOf" === SF.kind) return !0;
          "min" === SF.kind ? (null === WF || SF.value > WF) && (WF = SF.value) : "max" === SF.kind && (null === FF || SF.value < FF) && (FF = SF.value)
        }
        return Number.isFinite(WF) && Number.isFinite(FF)
      }
    }
    KF.create = FF => new KF({
      checks: [],
      typeName: MW.ZodNumber,
      coerce: (null === FF || void 0 === FF ? void 0 : FF.coerce) || !1,
      ...oF(FF)
    });
    class wF extends YF {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(FF) {
        this._def.coerce && (FF.data = BigInt(FF.data));
        if (this._getType(FF) !== RF.bigint) {
          const WF = this._getOrReturnCtx(FF);
          return TF(WF, {
            code: eF.invalid_type,
            expected: RF.bigint,
            received: WF.parsedType
          }), kW
        }
        let WF;
        const SF = new aW;
        for (const CF of this._def.checks)
          if ("min" === CF.kind) {
            (CF.inclusive ? FF.data < CF.value : FF.data <= CF.value) && (WF = this._getOrReturnCtx(FF, WF), TF(WF, {
              code: eF.too_small,
              type: "bigint",
              minimum: CF.value,
              inclusive: CF.inclusive,
              message: CF.message
            }), SF.BC())
          } else if ("max" === CF.kind) {
          (CF.inclusive ? FF.data > CF.value : FF.data >= CF.value) && (WF = this._getOrReturnCtx(FF, WF), TF(WF, {
            code: eF.too_big,
            type: "bigint",
            maximum: CF.value,
            inclusive: CF.inclusive,
            message: CF.message
          }), SF.BC())
        } else "multipleOf" === CF.kind ? FF.data % CF.value !== BigInt(0) && (WF = this._getOrReturnCtx(FF, WF), TF(WF, {
          code: eF.not_multiple_of,
          multipleOf: CF.value,
          message: CF.message
        }), SF.BC()) : bW.assertNever(CF);
        return {
          status: SF.value,
          value: FF.data
        }
      }
      gte(FF, WF) {
        return this.setLimit("min", FF, !0, OF.toString(WF))
      }
      gt(FF, WF) {
        return this.setLimit("min", FF, !1, OF.toString(WF))
      }
      lte(FF, WF) {
        return this.setLimit("max", FF, !0, OF.toString(WF))
      }
      lt(FF, WF) {
        return this.setLimit("max", FF, !1, OF.toString(WF))
      }
      setLimit(FF, WF, SF, CF) {
        return new wF({
          ...this._def,
          checks: [...this._def.checks, {
            kind: FF,
            value: WF,
            inclusive: SF,
            message: OF.toString(CF)
          }]
        })
      }
      _addCheck(FF) {
        return new wF({
          ...this._def,
          checks: [...this._def.checks, FF]
        })
      }
      positive(FF) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: OF.toString(FF)
        })
      }
      negative(FF) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: OF.toString(FF)
        })
      }
      nonpositive(FF) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: OF.toString(FF)
        })
      }
      nonnegative(FF) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: OF.toString(FF)
        })
      }
      multipleOf(FF, WF) {
        return this._addCheck({
          kind: "multipleOf",
          value: FF,
          message: OF.toString(WF)
        })
      }
      get minValue() {
        let FF = null;
        for (const WF of this._def.checks) "min" === WF.kind && (null === FF || WF.value > FF) && (FF = WF.value);
        return FF
      }
      get maxValue() {
        let FF = null;
        for (const WF of this._def.checks) "max" === WF.kind && (null === FF || WF.value < FF) && (FF = WF.value);
        return FF
      }
    }
    wF.create = FF => {
      var WF;
      return new wF({
        checks: [],
        typeName: MW.ZodBigInt,
        coerce: null !== (WF = null === FF || void 0 === FF ? void 0 : FF.coerce) && void 0 !== WF && WF,
        ...oF(FF)
      })
    };
    class XF extends YF {
      _parse(FF) {
        this._def.coerce && (FF.data = Boolean(FF.data));
        if (this._getType(FF) !== RF.boolean) {
          const WF = this._getOrReturnCtx(FF);
          return TF(WF, {
            code: eF.invalid_type,
            expected: RF.boolean,
            received: WF.parsedType
          }), kW
        }
        return VF(FF.data)
      }
    }
    XF.create = FF => new XF({
      typeName: MW.ZodBoolean,
      coerce: (null === FF || void 0 === FF ? void 0 : FF.coerce) || !1,
      ...oF(FF)
    });
    class UF extends YF {
      _parse(FF) {
        this._def.coerce && (FF.data = new Date(FF.data));
        if (this._getType(FF) !== RF.date) {
          const WF = this._getOrReturnCtx(FF);
          return TF(WF, {
            code: eF.invalid_type,
            expected: RF.date,
            received: WF.parsedType
          }), kW
        }
        if (isNaN(FF.data.getTime())) {
          return TF(this._getOrReturnCtx(FF), {
            code: eF.invalid_date
          }), kW
        }
        const WF = new aW;
        let SF;
        for (const CF of this._def.checks) "min" === CF.kind ? FF.data.getTime() < CF.value && (SF = this._getOrReturnCtx(FF, SF), TF(SF, {
          code: eF.too_small,
          message: CF.message,
          inclusive: !0,
          exact: !1,
          minimum: CF.value,
          type: "date"
        }), WF.BC()) : "max" === CF.kind ? FF.data.getTime() > CF.value && (SF = this._getOrReturnCtx(FF, SF), TF(SF, {
          code: eF.too_big,
          message: CF.message,
          inclusive: !0,
          exact: !1,
          maximum: CF.value,
          type: "date"
        }), WF.BC()) : bW.assertNever(CF);
        return {
          status: WF.value,
          value: new Date(FF.data.getTime())
        }
      }
      _addCheck(FF) {
        return new UF({
          ...this._def,
          checks: [...this._def.checks, FF]
        })
      }
      min(FF, WF) {
        return this._addCheck({
          kind: "min",
          value: FF.getTime(),
          message: OF.toString(WF)
        })
      }
      max(FF, WF) {
        return this._addCheck({
          kind: "max",
          value: FF.getTime(),
          message: OF.toString(WF)
        })
      }
      get minDate() {
        let FF = null;
        for (const WF of this._def.checks) "min" === WF.kind && (null === FF || WF.value > FF) && (FF = WF.value);
        return null != FF ? new Date(FF) : null
      }
      get maxDate() {
        let FF = null;
        for (const WF of this._def.checks) "max" === WF.kind && (null === FF || WF.value < FF) && (FF = WF.value);
        return null != FF ? new Date(FF) : null
      }
    }
    UF.create = FF => new UF({
      checks: [],
      coerce: (null === FF || void 0 === FF ? void 0 : FF.coerce) || !1,
      typeName: MW.ZodDate,
      ...oF(FF)
    });
    class BF extends YF {
      _parse(FF) {
        if (this._getType(FF) !== RF.symbol) {
          const WF = this._getOrReturnCtx(FF);
          return TF(WF, {
            code: eF.invalid_type,
            expected: RF.symbol,
            received: WF.parsedType
          }), kW
        }
        return VF(FF.data)
      }
    }
    BF.create = FF => new BF({
      typeName: MW.ZodSymbol,
      ...oF(FF)
    });
    class jW extends YF {
      _parse(FF) {
        if (this._getType(FF) !== RF.undefined) {
          const WF = this._getOrReturnCtx(FF);
          return TF(WF, {
            code: eF.invalid_type,
            expected: RF.undefined,
            received: WF.parsedType
          }), kW
        }
        return VF(FF.data)
      }
    }
    jW.create = FF => new jW({
      typeName: MW.ZodUndefined,
      ...oF(FF)
    });
    class vW extends YF {
      _parse(FF) {
        if (this._getType(FF) !== RF.null) {
          const WF = this._getOrReturnCtx(FF);
          return TF(WF, {
            code: eF.invalid_type,
            expected: RF.null,
            received: WF.parsedType
          }), kW
        }
        return VF(FF.data)
      }
    }
    vW.create = FF => new vW({
      typeName: MW.ZodNull,
      ...oF(FF)
    });
    class JF extends YF {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(FF) {
        return VF(FF.data)
      }
    }
    JF.create = FF => new JF({
      typeName: MW.ZodAny,
      ...oF(FF)
    });
    class pF extends YF {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(FF) {
        return VF(FF.data)
      }
    }
    pF.create = FF => new pF({
      typeName: MW.ZodUnknown,
      ...oF(FF)
    });
    class lF extends YF {
      _parse(FF) {
        const WF = this._getOrReturnCtx(FF);
        return TF(WF, {
          code: eF.invalid_type,
          expected: RF.never,
          received: WF.parsedType
        }), kW
      }
    }
    lF.create = FF => new lF({
      typeName: MW.ZodNever,
      ...oF(FF)
    });
    class FW extends YF {
      _parse(FF) {
        if (this._getType(FF) !== RF.undefined) {
          const WF = this._getOrReturnCtx(FF);
          return TF(WF, {
            code: eF.invalid_type,
            expected: RF.void,
            received: WF.parsedType
          }), kW
        }
        return VF(FF.data)
      }
    }
    FW.create = FF => new FW({
      typeName: MW.ZodVoid,
      ...oF(FF)
    });
    class WW extends YF {
      _parse(FF) {
        const {
          ctx: WF,
          status: SF
        } = this._processInputParams(FF), CF = this._def;
        if (WF.parsedType !== RF.array) return TF(WF, {
          code: eF.invalid_type,
          expected: RF.array,
          received: WF.parsedType
        }), kW;
        if (null !== CF.exactLength) {
          const FF = WF.data.length > CF.exactLength.value,
            AF = WF.data.length < CF.exactLength.value;
          (FF || AF) && (TF(WF, {
            code: FF ? eF.too_big : eF.too_small,
            minimum: AF ? CF.exactLength.value : void 0,
            maximum: FF ? CF.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: CF.exactLength.message
          }), SF.BC())
        }
        if (null !== CF.minLength && WF.data.length < CF.minLength.value && (TF(WF, {
            code: eF.too_small,
            minimum: CF.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: CF.minLength.message
          }), SF.BC()), null !== CF.maxLength && WF.data.length > CF.maxLength.value && (TF(WF, {
            code: eF.too_big,
            maximum: CF.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: CF.maxLength.message
          }), SF.BC()), WF.common.async) return Promise.all([...WF.data].map(((FF, SF) => CF.type._parseAsync(new xW(WF, FF, WF.path, SF))))).then((FF => aW.mergeArray(SF, FF)));
        const AF = [...WF.data].map(((FF, SF) => CF.type._parseSync(new xW(WF, FF, WF.path, SF))));
        return aW.mergeArray(SF, AF)
      }
      get element() {
        return this._def.type
      }
      min(FF, WF) {
        return new WW({
          ...this._def,
          minLength: {
            value: FF,
            message: OF.toString(WF)
          }
        })
      }
      max(FF, WF) {
        return new WW({
          ...this._def,
          maxLength: {
            value: FF,
            message: OF.toString(WF)
          }
        })
      }
      length(FF, WF) {
        return new WW({
          ...this._def,
          exactLength: {
            value: FF,
            message: OF.toString(WF)
          }
        })
      }
      nonempty(FF) {
        return this.min(1, FF)
      }
    }

    function SW(FF) {
      if (FF instanceof CW) {
        const WF = {};
        for (const SF in FF.shape) {
          const CF = FF.shape[SF];
          WF[SF] = qS.create(SW(CF))
        }
        return new CW({
          ...FF._def,
          shape: () => WF
        })
      }
      return FF instanceof WW ? new WW({
        ...FF._def,
        type: SW(FF.element)
      }) : FF instanceof qS ? qS.create(SW(FF.unwrap())) : FF instanceof VW ? VW.create(SW(FF.unwrap())) : FF instanceof PW ? PW.create(FF.items.map((FF => SW(FF)))) : FF
    }
    WW.create = (FF, WF) => new WW({
      type: FF,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: MW.ZodArray,
      ...oF(WF)
    });
    class CW extends YF {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const FF = this._def.shape(),
          WF = bW.objectKeys(FF);
        return this._cached = {
          shape: FF,
          keys: WF
        }
      }
      _parse(FF) {
        if (this._getType(FF) !== RF.object) {
          const WF = this._getOrReturnCtx(FF);
          return TF(WF, {
            code: eF.invalid_type,
            expected: RF.object,
            received: WF.parsedType
          }), kW
        }
        const {
          status: WF,
          ctx: SF
        } = this._processInputParams(FF), {
          shape: CF,
          keys: AF
        } = this._getCached(), uF = [];
        if (!(this._def.catchall instanceof lF && "strip" === this._def.unknownKeys))
          for (const bW in SF.data) AF.includes(bW) || uF.push(bW);
        const hF = [];
        for (const bW of AF) {
          const FF = CF[bW],
            WF = SF.data[bW];
          hF.push({
            key: {
              status: "valid",
              value: bW
            },
            value: FF._parse(new xW(SF, WF, SF.path, bW)),
            alwaysSet: bW in SF.data
          })
        }
        if (this._def.catchall instanceof lF) {
          const FF = this._def.unknownKeys;
          if ("passthrough" === FF)
            for (const WF of uF) hF.push({
              key: {
                status: "valid",
                value: WF
              },
              value: {
                status: "valid",
                value: SF.data[WF]
              }
            });
          else if ("strict" === FF) uF.length > 0 && (TF(SF, {
            code: eF.unrecognized_keys,
            keys: uF
          }), WF.BC());
          else if ("strip" !== FF) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const FF = this._def.catchall;
          for (const WF of uF) {
            const CF = SF.data[WF];
            hF.push({
              key: {
                status: "valid",
                value: WF
              },
              value: FF._parse(new xW(SF, CF, SF.path, WF)),
              alwaysSet: WF in SF.data
            })
          }
        }
        return SF.common.async ? Promise.resolve().then((async () => {
          const FF = [];
          for (const WF of hF) {
            const SF = await WF.key;
            FF.push({
              key: SF,
              value: await WF.value,
              alwaysSet: WF.alwaysSet
            })
          }
          return FF
        })).then((FF => aW.mergeObjectSync(WF, FF))) : aW.mergeObjectSync(WF, hF)
      }
      get shape() {
        return this._def.shape()
      }
      strict(FF) {
        return OF.errToObj, new CW({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== FF ? {
            errorMap: (WF, SF) => {
              var CF, AF, uF, hF;
              const bW = null !== (uF = null === (AF = (CF = this._def).errorMap) || void 0 === AF ? void 0 : AF.call(CF, WF, SF).message) && void 0 !== uF ? uF : SF.defaultError;
              return "unrecognized_keys" === WF.code ? {
                message: null !== (hF = OF.errToObj(FF).message) && void 0 !== hF ? hF : bW
              } : {
                message: bW
              }
            }
          } : {}
        })
      }
      strip() {
        return new CW({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new CW({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(FF) {
        return new CW({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...FF
          })
        })
      }
      merge(FF) {
        return new CW({
          unknownKeys: FF._def.unknownKeys,
          catchall: FF._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...FF._def.shape()
          }),
          typeName: MW.ZodObject
        })
      }
      setKey(FF, WF) {
        return this.augment({
          [FF]: WF
        })
      }
      catchall(FF) {
        return new CW({
          ...this._def,
          catchall: FF
        })
      }
      lW(FF) {
        const WF = {};
        return bW.objectKeys(FF).forEach((SF => {
          FF[SF] && this.shape[SF] && (WF[SF] = this.shape[SF])
        })), new CW({
          ...this._def,
          shape: () => WF
        })
      }
      omit(FF) {
        const WF = {};
        return bW.objectKeys(this.shape).forEach((SF => {
          FF[SF] || (WF[SF] = this.shape[SF])
        })), new CW({
          ...this._def,
          shape: () => WF
        })
      }
      deepPartial() {
        return SW(this)
      }
      partial(FF) {
        const WF = {};
        return bW.objectKeys(this.shape).forEach((SF => {
          const CF = this.shape[SF];
          FF && !FF[SF] ? WF[SF] = CF : WF[SF] = CF.optional()
        })), new CW({
          ...this._def,
          shape: () => WF
        })
      }
      required(FF) {
        const WF = {};
        return bW.objectKeys(this.shape).forEach((SF => {
          if (FF && !FF[SF]) WF[SF] = this.shape[SF];
          else {
            let FF = this.shape[SF];
            for (; FF instanceof qS;) FF = FF._def.innerType;
            WF[SF] = FF
          }
        })), new CW({
          ...this._def,
          shape: () => WF
        })
      }
      keyof() {
        return gS(bW.objectKeys(this.shape))
      }
    }
    CW.create = (FF, WF) => new CW({
      shape: () => FF,
      unknownKeys: "strip",
      catchall: lF.create(),
      typeName: MW.ZodObject,
      ...oF(WF)
    }), CW.strictCreate = (FF, WF) => new CW({
      shape: () => FF,
      unknownKeys: "strict",
      catchall: lF.create(),
      typeName: MW.ZodObject,
      ...oF(WF)
    }), CW.lazycreate = (FF, WF) => new CW({
      shape: FF,
      unknownKeys: "strip",
      catchall: lF.create(),
      typeName: MW.ZodObject,
      ...oF(WF)
    });
    class AW extends YF {
      _parse(FF) {
        const {
          ctx: WF
        } = this._processInputParams(FF), SF = this._def.options;
        if (WF.common.async) return Promise.all(SF.map((async FF => {
          const SF = {
            ...WF,
            common: {
              ...WF.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await FF._parseAsync({
              data: WF.data,
              path: WF.path,
              parent: SF
            }),
            ctx: SF
          }
        }))).then((function(FF) {
          for (const WF of FF)
            if ("valid" === WF.result.status) return WF.result;
          for (const CF of FF)
            if ("BC" === CF.result.status) return WF.common.issues.push(...CF.ctx.common.issues), CF.result;
          const SF = FF.map((FF => new EF(FF.ctx.common.issues)));
          return TF(WF, {
            code: eF.invalid_union,
            unionErrors: SF
          }), kW
        }));
        {
          let FF;
          const CF = [];
          for (const uF of SF) {
            const SF = {
                ...WF,
                common: {
                  ...WF.common,
                  issues: []
                },
                parent: null
              },
              AF = uF._parseSync({
                data: WF.data,
                path: WF.path,
                parent: SF
              });
            if ("valid" === AF.status) return AF;
            "BC" !== AF.status || FF || (FF = {
              result: AF,
              ctx: SF
            }), SF.common.issues.length && CF.push(SF.common.issues)
          }
          if (FF) return WF.common.issues.push(...FF.ctx.common.issues), FF.result;
          const AF = CF.map((FF => new EF(FF)));
          return TF(WF, {
            code: eF.invalid_union,
            unionErrors: AF
          }), kW
        }
      }
      get options() {
        return this._def.options
      }
    }
    AW.create = (FF, WF) => new AW({
      options: FF,
      typeName: MW.ZodUnion,
      ...oF(WF)
    });
    const uW = FF => FF instanceof QW ? uW(FF.schema) : FF instanceof kS ? uW(FF.innerType()) : FF instanceof rS ? [FF.value] : FF instanceof tS ? FF.options : FF instanceof TW ? Object.keys(FF.enum) : FF instanceof NW ? uW(FF._def.innerType) : FF instanceof jW ? [void 0] : FF instanceof vW ? [null] : null;
    class hW extends YF {
      _parse(FF) {
        const {
          ctx: WF
        } = this._processInputParams(FF);
        if (WF.parsedType !== RF.object) return TF(WF, {
          code: eF.invalid_type,
          expected: RF.object,
          received: WF.parsedType
        }), kW;
        const SF = this.discriminator,
          CF = WF.data[SF],
          AF = this.optionsMap.get(CF);
        return AF ? WF.common.async ? AF._parseAsync({
          data: WF.data,
          path: WF.path,
          parent: WF
        }) : AF._parseSync({
          data: WF.data,
          path: WF.path,
          parent: WF
        }) : (TF(WF, {
          code: eF.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [SF]
        }), kW)
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
      static create(FF, WF, SF) {
        const CF = new Map;
        for (const AF of WF) {
          const WF = uW(AF.shape[FF]);
          if (!WF) throw new Error(`A discriminator value for key \`${FF}\` could not be extracted from all schema options`);
          for (const SF of WF) {
            if (CF.has(SF)) throw new Error(`Discriminator property ${String(FF)} has duplicate value ${String(SF)}`);
            CF.set(SF, AF)
          }
        }
        return new hW({
          typeName: MW.ZodDiscriminatedUnion,
          discriminator: FF,
          options: WF,
          optionsMap: CF,
          ...oF(SF)
        })
      }
    }

    function bS(FF, WF) {
      const SF = iW(FF),
        CF = iW(WF);
      if (FF === WF) return {
        valid: !0,
        data: FF
      };
      if (SF === RF.object && CF === RF.object) {
        const SF = bW.objectKeys(WF),
          CF = bW.objectKeys(FF).filter((FF => -1 !== SF.indexOf(FF))),
          AF = {
            ...FF,
            ...WF
          };
        for (const uF of CF) {
          const SF = bS(FF[uF], WF[uF]);
          if (!SF.valid) return {
            valid: !1
          };
          AF[uF] = SF.data
        }
        return {
          valid: !0,
          data: AF
        }
      }
      if (SF === RF.array && CF === RF.array) {
        if (FF.length !== WF.length) return {
          valid: !1
        };
        const SF = [];
        for (let CF = 0; CF < FF.length; CF++) {
          const AF = bS(FF[CF], WF[CF]);
          if (!AF.valid) return {
            valid: !1
          };
          SF.push(AF.data)
        }
        return {
          valid: !0,
          data: SF
        }
      }
      return SF === RF.date && CF === RF.date && +FF === +WF ? {
        valid: !0,
        data: FF
      } : {
        valid: !1
      }
    }
    class dW extends YF {
      _parse(FF) {
        const {
          status: WF,
          ctx: SF
        } = this._processInputParams(FF), CF = (FF, CF) => {
          if (NF(FF) || NF(CF)) return kW;
          const AF = bS(FF.value, CF.value);
          return AF.valid ? ((DF(FF) || DF(CF)) && WF.BC(), {
            status: WF.value,
            value: AF.data
          }) : (TF(SF, {
            code: eF.invalid_intersection_types
          }), kW)
        };
        return SF.common.async ? Promise.all([this._def.left._parseAsync({
          data: SF.data,
          path: SF.path,
          parent: SF
        }), this._def.right._parseAsync({
          data: SF.data,
          path: SF.path,
          parent: SF
        })]).then((FF => {
          let [WF, SF] = FF;
          return CF(WF, SF)
        })) : CF(this._def.left._parseSync({
          data: SF.data,
          path: SF.path,
          parent: SF
        }), this._def.right._parseSync({
          data: SF.data,
          path: SF.path,
          parent: SF
        }))
      }
    }
    dW.create = (FF, WF, SF) => new dW({
      left: FF,
      right: WF,
      typeName: MW.ZodIntersection,
      ...oF(SF)
    });
    class PW extends YF {
      _parse(FF) {
        const {
          status: WF,
          ctx: SF
        } = this._processInputParams(FF);
        if (SF.parsedType !== RF.array) return TF(SF, {
          code: eF.invalid_type,
          expected: RF.array,
          received: SF.parsedType
        }), kW;
        if (SF.data.length < this._def.items.length) return TF(SF, {
          code: eF.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), kW;
        !this._def.rest && SF.data.length > this._def.items.length && (TF(SF, {
          code: eF.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), WF.BC());
        const CF = [...SF.data].map(((FF, WF) => {
          const CF = this._def.items[WF] || this._def.rest;
          return CF ? CF._parse(new xW(SF, FF, SF.path, WF)) : null
        })).filter((FF => !!FF));
        return SF.common.async ? Promise.all(CF).then((FF => aW.mergeArray(WF, FF))) : aW.mergeArray(WF, CF)
      }
      get items() {
        return this._def.items
      }
      rest(FF) {
        return new PW({
          ...this._def,
          rest: FF
        })
      }
    }
    PW.create = (FF, WF) => {
      if (!Array.isArray(FF)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new PW({
        items: FF,
        typeName: MW.ZodTuple,
        rest: null,
        ...oF(WF)
      })
    };
    class RW extends YF {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(FF) {
        const {
          status: WF,
          ctx: SF
        } = this._processInputParams(FF);
        if (SF.parsedType !== RF.object) return TF(SF, {
          code: eF.invalid_type,
          expected: RF.object,
          received: SF.parsedType
        }), kW;
        const CF = [],
          AF = this._def.keyType,
          uF = this._def.valueType;
        for (const hF in SF.data) CF.push({
          key: AF._parse(new xW(SF, hF, SF.path, hF)),
          value: uF._parse(new xW(SF, SF.data[hF], SF.path, hF))
        });
        return SF.common.async ? aW.mergeObjectAsync(WF, CF) : aW.mergeObjectSync(WF, CF)
      }
      get element() {
        return this._def.valueType
      }
      static create(FF, WF, SF) {
        return new RW(WF instanceof YF ? {
          keyType: FF,
          valueType: WF,
          typeName: MW.ZodRecord,
          ...oF(SF)
        } : {
          keyType: nF.create(),
          valueType: FF,
          typeName: MW.ZodRecord,
          ...oF(WF)
        })
      }
    }
    class iS extends YF {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(FF) {
        const {
          status: WF,
          ctx: SF
        } = this._processInputParams(FF);
        if (SF.parsedType !== RF.map) return TF(SF, {
          code: eF.invalid_type,
          expected: RF.map,
          received: SF.parsedType
        }), kW;
        const CF = this._def.keyType,
          AF = this._def.valueType,
          uF = [...SF.data.entries()].map(((FF, WF) => {
            let [uF, hF] = FF;
            return {
              key: CF._parse(new xW(SF, uF, SF.path, [WF, "key"])),
              value: AF._parse(new xW(SF, hF, SF.path, [WF, "value"]))
            }
          }));
        if (SF.common.async) {
          const FF = new Map;
          return Promise.resolve().then((async () => {
            for (const SF of uF) {
              const CF = await SF.key,
                AF = await SF.value;
              if ("aborted" === CF.status || "aborted" === AF.status) return kW;
              "BC" !== CF.status && "BC" !== AF.status || WF.BC(), FF.set(CF.value, AF.value)
            }
            return {
              status: WF.value,
              value: FF
            }
          }))
        } {
          const FF = new Map;
          for (const SF of uF) {
            const CF = SF.key,
              AF = SF.value;
            if ("aborted" === CF.status || "aborted" === AF.status) return kW;
            "BC" !== CF.status && "BC" !== AF.status || WF.BC(), FF.set(CF.value, AF.value)
          }
          return {
            status: WF.value,
            value: FF
          }
        }
      }
    }
    iS.create = (FF, WF, SF) => new iS({
      valueType: WF,
      keyType: FF,
      typeName: MW.ZodMap,
      ...oF(SF)
    });
    class eW extends YF {
      _parse(FF) {
        const {
          status: WF,
          ctx: SF
        } = this._processInputParams(FF);
        if (SF.parsedType !== RF.set) return TF(SF, {
          code: eF.invalid_type,
          expected: RF.set,
          received: SF.parsedType
        }), kW;
        const CF = this._def;
        null !== CF.minSize && SF.data.size < CF.minSize.value && (TF(SF, {
          code: eF.too_small,
          minimum: CF.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: CF.minSize.message
        }), WF.BC()), null !== CF.maxSize && SF.data.size > CF.maxSize.value && (TF(SF, {
          code: eF.too_big,
          maximum: CF.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: CF.maxSize.message
        }), WF.BC());
        const AF = this._def.valueType;

        function uF(FF) {
          const SF = new Set;
          for (const CF of FF) {
            if ("aborted" === CF.status) return kW;
            "BC" === CF.status && WF.BC(), SF.add(CF.value)
          }
          return {
            status: WF.value,
            value: SF
          }
        }
        const hF = [...SF.data.values()].map(((FF, WF) => AF._parse(new xW(SF, FF, SF.path, WF))));
        return SF.common.async ? Promise.all(hF).then((FF => uF(FF))) : uF(hF)
      }
      min(FF, WF) {
        return new eW({
          ...this._def,
          minSize: {
            value: FF,
            message: OF.toString(WF)
          }
        })
      }
      max(FF, WF) {
        return new eW({
          ...this._def,
          maxSize: {
            value: FF,
            message: OF.toString(WF)
          }
        })
      }
      size(FF, WF) {
        return this.min(FF, WF).max(FF, WF)
      }
      nonempty(FF) {
        return this.min(1, FF)
      }
    }
    eW.create = (FF, WF) => new eW({
      valueType: FF,
      minSize: null,
      maxSize: null,
      typeName: MW.ZodSet,
      ...oF(WF)
    });
    class EW extends YF {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(FF) {
        const {
          ctx: WF
        } = this._processInputParams(FF);
        if (WF.parsedType !== RF.function) return TF(WF, {
          code: eF.invalid_type,
          expected: RF.function,
          received: WF.parsedType
        }), kW;

        function SF(FF, SF) {
          return tW({
            data: FF,
            path: WF.path,
            errorMaps: [WF.common.contextualErrorMap, WF.schemaErrorMap, gW(), QF].filter((FF => !!FF)),
            issueData: {
              code: eF.invalid_arguments,
              argumentsError: SF
            }
          })
        }

        function CF(FF, SF) {
          return tW({
            data: FF,
            path: WF.path,
            errorMaps: [WF.common.contextualErrorMap, WF.schemaErrorMap, gW(), QF].filter((FF => !!FF)),
            issueData: {
              code: eF.invalid_return_type,
              returnTypeError: SF
            }
          })
        }
        const AF = {
            errorMap: WF.common.contextualErrorMap
          },
          uF = WF.data;
        if (this._def.returns instanceof aS) {
          const FF = this;
          return VF((async function() {
            for (var WF = arguments.length, hF = new Array(WF), bW = 0; bW < WF; bW++) hF[bW] = arguments[bW];
            const dF = new EF([]),
              PF = await FF._def.args.parseAsync(hF, AF).catch((FF => {
                throw dF.addIssue(SF(hF, FF)), dF
              })),
              RF = await Reflect.apply(uF, this, PF);
            return await FF._def.returns._def.type.parseAsync(RF, AF).catch((FF => {
              throw dF.addIssue(CF(RF, FF)), dF
            }))
          }))
        } {
          const FF = this;
          return VF((function() {
            for (var WF = arguments.length, hF = new Array(WF), bW = 0; bW < WF; bW++) hF[bW] = arguments[bW];
            const dF = FF._def.args.safeParse(hF, AF);
            if (!dF.success) throw new EF([SF(hF, dF.error)]);
            const PF = Reflect.apply(uF, this, dF.data),
              RF = FF._def.returns.safeParse(PF, AF);
            if (!RF.success) throw new EF([CF(PF, RF.error)]);
            return RF.data
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
        for (var FF = arguments.length, WF = new Array(FF), SF = 0; SF < FF; SF++) WF[SF] = arguments[SF];
        return new EW({
          ...this._def,
          args: PW.create(WF).rest(pF.create())
        })
      }
      returns(FF) {
        return new EW({
          ...this._def,
          returns: FF
        })
      }
      implement(FF) {
        return this.parse(FF)
      }
      strictImplement(FF) {
        return this.parse(FF)
      }
      static create(FF, WF, SF) {
        return new EW({
          args: FF || PW.create([]).rest(pF.create()),
          returns: WF || pF.create(),
          typeName: MW.ZodFunction,
          ...oF(SF)
        })
      }
    }
    class QW extends YF {
      get schema() {
        return this._def.getter()
      }
      _parse(FF) {
        const {
          ctx: WF
        } = this._processInputParams(FF);
        return this._def.getter()._parse({
          data: WF.data,
          path: WF.path,
          parent: WF
        })
      }
    }
    QW.create = (FF, WF) => new QW({
      getter: FF,
      typeName: MW.ZodLazy,
      ...oF(WF)
    });
    class rS extends YF {
      _parse(FF) {
        if (FF.data !== this._def.value) {
          const WF = this._getOrReturnCtx(FF);
          return TF(WF, {
            received: WF.data,
            code: eF.invalid_literal,
            expected: this._def.value
          }), kW
        }
        return {
          status: "valid",
          value: FF.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function gS(FF, WF) {
      return new tS({
        values: FF,
        typeName: MW.ZodEnum,
        ...oF(WF)
      })
    }
    rS.create = (FF, WF) => new rS({
      value: FF,
      typeName: MW.ZodLiteral,
      ...oF(WF)
    });
    class tS extends YF {
      _parse(FF) {
        if ("string" !== typeof FF.data) {
          const WF = this._getOrReturnCtx(FF),
            SF = this._def.values;
          return TF(WF, {
            expected: bW.joinValues(SF),
            received: WF.parsedType,
            code: eF.invalid_type
          }), kW
        }
        if (-1 === this._def.values.indexOf(FF.data)) {
          const WF = this._getOrReturnCtx(FF),
            SF = this._def.values;
          return TF(WF, {
            received: WF.data,
            code: eF.invalid_enum_value,
            options: SF
          }), kW
        }
        return VF(FF.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const FF = {};
        for (const WF of this._def.values) FF[WF] = WF;
        return FF
      }
      get Values() {
        const FF = {};
        for (const WF of this._def.values) FF[WF] = WF;
        return FF
      }
      get Enum() {
        const FF = {};
        for (const WF of this._def.values) FF[WF] = WF;
        return FF
      }
      extract(FF) {
        return tS.create(FF)
      }
      exclude(FF) {
        return tS.create(this.options.filter((WF => !FF.includes(WF))))
      }
    }
    tS.create = gS;
    class TW extends YF {
      _parse(FF) {
        const WF = bW.getValidEnumValues(this._def.values),
          SF = this._getOrReturnCtx(FF);
        if (SF.parsedType !== RF.string && SF.parsedType !== RF.number) {
          const FF = bW.objectValues(WF);
          return TF(SF, {
            expected: bW.joinValues(FF),
            received: SF.parsedType,
            code: eF.invalid_type
          }), kW
        }
        if (-1 === WF.indexOf(FF.data)) {
          const FF = bW.objectValues(WF);
          return TF(SF, {
            received: SF.data,
            code: eF.invalid_enum_value,
            options: FF
          }), kW
        }
        return VF(FF.data)
      }
      get enum() {
        return this._def.values
      }
    }
    TW.create = (FF, WF) => new TW({
      values: FF,
      typeName: MW.ZodNativeEnum,
      ...oF(WF)
    });
    class aS extends YF {
      unwrap() {
        return this._def.type
      }
      _parse(FF) {
        const {
          ctx: WF
        } = this._processInputParams(FF);
        if (WF.parsedType !== RF.promise && !1 === WF.common.async) return TF(WF, {
          code: eF.invalid_type,
          expected: RF.promise,
          received: WF.parsedType
        }), kW;
        const SF = WF.parsedType === RF.promise ? WF.data : Promise.resolve(WF.data);
        return VF(SF.then((FF => this._def.type.parseAsync(FF, {
          path: WF.path,
          errorMap: WF.common.contextualErrorMap
        }))))
      }
    }
    aS.create = (FF, WF) => new aS({
      type: FF,
      typeName: MW.ZodPromise,
      ...oF(WF)
    });
    class kS extends YF {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === MW.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(FF) {
        const {
          status: WF,
          ctx: SF
        } = this._processInputParams(FF), CF = this._def.effect || null, AF = {
          addIssue: FF => {
            TF(SF, FF), FF.fatal ? WF.abort() : WF.BC()
          },
          get path() {
            return SF.path
          }
        };
        if (AF.addIssue = AF.addIssue.bind(AF), "preprocess" === CF.type) {
          const FF = CF.transform(SF.data, AF);
          return SF.common.issues.length ? {
            status: "BC",
            value: SF.data
          } : SF.common.async ? Promise.resolve(FF).then((FF => this._def.schema._parseAsync({
            data: FF,
            path: SF.path,
            parent: SF
          }))) : this._def.schema._parseSync({
            data: FF,
            path: SF.path,
            parent: SF
          })
        }
        if ("refinement" === CF.type) {
          const FF = FF => {
            const WF = CF.refinement(FF, AF);
            if (SF.common.async) return Promise.resolve(WF);
            if (WF instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return FF
          };
          if (!1 === SF.common.async) {
            const CF = this._def.schema._parseSync({
              data: SF.data,
              path: SF.path,
              parent: SF
            });
            return "aborted" === CF.status ? kW : ("BC" === CF.status && WF.BC(), FF(CF.value), {
              status: WF.value,
              value: CF.value
            })
          }
          return this._def.schema._parseAsync({
            data: SF.data,
            path: SF.path,
            parent: SF
          }).then((SF => "aborted" === SF.status ? kW : ("BC" === SF.status && WF.BC(), FF(SF.value).then((() => ({
            status: WF.value,
            value: SF.value
          }))))))
        }
        if ("transform" === CF.type) {
          if (!1 === SF.common.async) {
            const FF = this._def.schema._parseSync({
              data: SF.data,
              path: SF.path,
              parent: SF
            });
            if (!LF(FF)) return FF;
            const uF = CF.transform(FF.value, AF);
            if (uF instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: WF.value,
              value: uF
            }
          }
          return this._def.schema._parseAsync({
            data: SF.data,
            path: SF.path,
            parent: SF
          }).then((FF => LF(FF) ? Promise.resolve(CF.transform(FF.value, AF)).then((FF => ({
            status: WF.value,
            value: FF
          }))) : FF))
        }
        bW.assertNever(CF)
      }
    }
    kS.create = (FF, WF, SF) => new kS({
      schema: FF,
      typeName: MW.ZodEffects,
      effect: WF,
      ...oF(SF)
    }), kS.createWithPreprocess = (FF, WF, SF) => new kS({
      schema: WF,
      effect: {
        type: "preprocess",
        transform: FF
      },
      typeName: MW.ZodEffects,
      ...oF(SF)
    });
    class qS extends YF {
      _parse(FF) {
        return this._getType(FF) === RF.undefined ? VF(void 0) : this._def.innerType._parse(FF)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    qS.create = (FF, WF) => new qS({
      innerType: FF,
      typeName: MW.ZodOptional,
      ...oF(WF)
    });
    class VW extends YF {
      _parse(FF) {
        return this._getType(FF) === RF.null ? VF(null) : this._def.innerType._parse(FF)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    VW.create = (FF, WF) => new VW({
      innerType: FF,
      typeName: MW.ZodNullable,
      ...oF(WF)
    });
    class NW extends YF {
      _parse(FF) {
        const {
          ctx: WF
        } = this._processInputParams(FF);
        let SF = WF.data;
        return WF.parsedType === RF.undefined && (SF = this._def.defaultValue()), this._def.innerType._parse({
          data: SF,
          path: WF.path,
          parent: WF
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    NW.create = (FF, WF) => new NW({
      innerType: FF,
      typeName: MW.ZodDefault,
      defaultValue: "function" === typeof WF.default ? WF.default : () => WF.default,
      ...oF(WF)
    });
    class DW extends YF {
      _parse(FF) {
        const {
          ctx: WF
        } = this._processInputParams(FF), SF = {
          ...WF,
          common: {
            ...WF.common,
            issues: []
          }
        }, CF = this._def.innerType._parse({
          data: SF.data,
          path: SF.path,
          parent: {
            ...SF
          }
        });
        return mW(CF) ? CF.then((FF => ({
          status: "valid",
          value: "valid" === FF.status ? FF.value : this._def.catchValue({
            get error() {
              return new EF(SF.common.issues)
            },
            input: SF.data
          })
        }))) : {
          status: "valid",
          value: "valid" === CF.status ? CF.value : this._def.catchValue({
            get error() {
              return new EF(SF.common.issues)
            },
            input: SF.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    DW.create = (FF, WF) => new DW({
      innerType: FF,
      typeName: MW.ZodCatch,
      catchValue: "function" === typeof WF.catch ? WF.catch : () => WF.catch,
      ...oF(WF)
    });
    class LW extends YF {
      _parse(FF) {
        if (this._getType(FF) !== RF.nan) {
          const WF = this._getOrReturnCtx(FF);
          return TF(WF, {
            code: eF.invalid_type,
            expected: RF.nan,
            received: WF.parsedType
          }), kW
        }
        return {
          status: "valid",
          value: FF.data
        }
      }
    }
    LW.create = FF => new LW({
      typeName: MW.ZodNaN,
      ...oF(FF)
    });
    const mS = Symbol("zod_brand");
    class OW extends YF {
      _parse(FF) {
        const {
          ctx: WF
        } = this._processInputParams(FF), SF = WF.data;
        return this._def.type._parse({
          data: SF,
          path: WF.path,
          parent: WF
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class xS extends YF {
      _parse(FF) {
        const {
          status: WF,
          ctx: SF
        } = this._processInputParams(FF);
        if (SF.common.async) {
          return (async () => {
            const FF = await this._def.in._parseAsync({
              data: SF.data,
              path: SF.path,
              parent: SF
            });
            return "aborted" === FF.status ? kW : "BC" === FF.status ? (WF.BC(), qW(FF.value)) : this._def.out._parseAsync({
              data: FF.value,
              path: SF.path,
              parent: SF
            })
          })()
        } {
          const FF = this._def.in._parseSync({
            data: SF.data,
            path: SF.path,
            parent: SF
          });
          return "aborted" === FF.status ? kW : "BC" === FF.status ? (WF.BC(), {
            status: "BC",
            value: FF.value
          }) : this._def.out._parseSync({
            data: FF.value,
            path: SF.path,
            parent: SF
          })
        }
      }
      static create(FF, WF) {
        return new xS({
          in: FF,
          out: WF,
          typeName: MW.ZodPipeline
        })
      }
    }
    class ZW extends YF {
      _parse(FF) {
        const WF = this._def.innerType._parse(FF);
        return LF(WF) && (WF.value = Object.freeze(WF.value)), WF
      }
    }
    ZW.create = (FF, WF) => new ZW({
      innerType: FF,
      typeName: MW.ZodReadonly,
      ...oF(WF)
    });
    const oW = function(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          SF = arguments.length > 2 ? arguments[2] : void 0;
        return FF ? JF.create().superRefine(((CF, AF) => {
          var uF, hF;
          if (!FF(CF)) {
            const FF = "function" === typeof WF ? WF(CF) : "string" === typeof WF ? {
                message: WF
              } : WF,
              bW = null === (hF = null !== (uF = FF.fatal) && void 0 !== uF ? uF : SF) || void 0 === hF || hF,
              dF = "string" === typeof FF ? {
                message: FF
              } : FF;
            AF.addIssue({
              code: "custom",
              ...dF,
              fatal: bW
            })
          }
        })) : JF.create()
      },
      YW = {
        object: CW.lazycreate
      };
    var MW;
    ! function(FF) {
      FF.ZodString = "ZodString", FF.ZodNumber = "ZodNumber", FF.ZodNaN = "ZodNaN", FF.ZodBigInt = "ZodBigInt", FF.ZodBoolean = "ZodBoolean", FF.ZodDate = "ZodDate", FF.ZodSymbol = "ZodSymbol", FF.ZodUndefined = "ZodUndefined", FF.ZodNull = "ZodNull", FF.ZodAny = "ZodAny", FF.ZodUnknown = "ZodUnknown", FF.ZodNever = "ZodNever", FF.ZodVoid = "ZodVoid", FF.ZodArray = "ZodArray", FF.ZodObject = "ZodObject", FF.ZodUnion = "ZodUnion", FF.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", FF.ZodIntersection = "ZodIntersection", FF.ZodTuple = "ZodTuple", FF.ZodRecord = "ZodRecord", FF.ZodMap = "ZodMap", FF.ZodSet = "ZodSet", FF.ZodFunction = "ZodFunction", FF.ZodLazy = "ZodLazy", FF.ZodLiteral = "ZodLiteral", FF.ZodEnum = "ZodEnum", FF.ZodEffects = "ZodEffects", FF.ZodNativeEnum = "ZodNativeEnum", FF.ZodOptional = "ZodOptional", FF.ZodNullable = "ZodNullable", FF.ZodDefault = "ZodDefault", FF.ZodCatch = "ZodCatch", FF.ZodPromise = "ZodPromise", FF.ZodBranded = "ZodBranded", FF.ZodPipeline = "ZodPipeline", FF.ZodReadonly = "ZodReadonly"
    }(MW || (MW = {}));
    const cS = nF.create,
      GW = KF.create,
      zS = LW.create,
      IW = wF.create,
      fW = XF.create,
      yS = UF.create,
      sW = BF.create,
      nW = jW.create,
      HW = vW.create,
      KW = JF.create,
      wW = pF.create,
      XW = lF.create,
      UW = FW.create,
      BW = WW.create,
      jS = CW.create,
      vS = CW.strictCreate,
      JW = AW.create,
      pW = hW.create,
      lW = dW.create,
      FS = PW.create,
      WS = RW.create,
      SS = iS.create,
      CS = eW.create,
      AS = EW.create,
      uS = QW.create,
      hS = rS.create,
      bC = tS.create,
      dS = TW.create,
      PS = aS.create,
      RS = kS.create,
      iC = qS.create,
      eS = VW.create,
      ES = kS.createWithPreprocess,
      QS = xS.create,
      rC = {
        string: FF => nF.create({
          ...FF,
          coerce: !0
        }),
        number: FF => KF.create({
          ...FF,
          coerce: !0
        }),
        boolean: FF => XF.create({
          ...FF,
          coerce: !0
        }),
        bigint: FF => wF.create({
          ...FF,
          coerce: !0
        }),
        date: FF => UF.create({
          ...FF,
          coerce: !0
        })
      },
      gC = kW;
    var tC = Object.freeze({
        __proto__: null,
        defaultErrorMap: QF,
        setErrorMap: function(FF) {
          rW = FF
        },
        getErrorMap: gW,
        makeIssue: tW,
        EMPTY_PATH: [],
        addIssueToContext: TF,
        ParseStatus: aW,
        INVALID: kW,
        DIRTY: qW,
        OK: VF,
        isAborted: NF,
        isDirty: DF,
        isValid: LF,
        isAsync: mW,
        get util() {
          return bW
        },
        get objectUtil() {
          return dF
        },
        ZodParsedType: RF,
        getParsedType: iW,
        ZodType: YF,
        ZodString: nF,
        ZodNumber: KF,
        ZodBigInt: wF,
        ZodBoolean: XF,
        ZodDate: UF,
        ZodSymbol: BF,
        ZodUndefined: jW,
        ZodNull: vW,
        ZodAny: JF,
        ZodUnknown: pF,
        ZodNever: lF,
        ZodVoid: FW,
        ZodArray: WW,
        ZodObject: CW,
        ZodUnion: AW,
        ZodDiscriminatedUnion: hW,
        ZodIntersection: dW,
        ZodTuple: PW,
        ZodRecord: RW,
        ZodMap: iS,
        ZodSet: eW,
        ZodFunction: EW,
        ZodLazy: QW,
        ZodLiteral: rS,
        ZodEnum: tS,
        ZodNativeEnum: TW,
        ZodPromise: aS,
        ZodEffects: kS,
        ZodTransformer: kS,
        ZodOptional: qS,
        ZodNullable: VW,
        ZodDefault: NW,
        ZodCatch: DW,
        ZodNaN: LW,
        BRAND: mS,
        ZodBranded: OW,
        ZodPipeline: xS,
        ZodReadonly: ZW,
        custom: oW,
        Schema: YF,
        ZodSchema: YF,
        late: YW,
        get ZodFirstPartyTypeKind() {
          return MW
        },
        coerce: rC,
        any: KW,
        array: BW,
        bigint: IW,
        boolean: fW,
        date: yS,
        discriminatedUnion: pW,
        effect: RS,
        enum: bC,
        function: AS,
        instanceof: function(FF) {
          let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${FF.name}`
          };
          return oW((WF => WF instanceof FF), WF)
        },
        intersection: lW,
        lazy: uS,
        literal: hS,
        map: SS,
        nan: zS,
        nativeEnum: dS,
        never: XW,
        null: HW,
        nullable: eS,
        number: GW,
        object: jS,
        oboolean: () => fW().optional(),
        onumber: () => GW().optional(),
        optional: iC,
        ostring: () => cS().optional(),
        pipeline: QS,
        preprocess: ES,
        promise: PS,
        record: WS,
        set: CS,
        strictObject: vS,
        string: cS,
        symbol: sW,
        transformer: RS,
        tuple: FS,
        undefined: nW,
        union: JW,
        unknown: wW,
        void: UW,
        NEVER: gC,
        ZodIssueCode: eF,
        quotelessJson: FF => JSON.stringify(FF, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: EF
      }),
      TS = {
        exports: {}
      };
    ! function(FF) {
      var WF = function(FF) {
        var SF = 1e7,
          CF = 9007199254740992,
          AF = eF(CF),
          uF = "0123456789abcdefghijklmnopqrstuvwxyz",
          hF = "function" === typeof BigInt;

        function bW(FF, WF, SF, CF) {
          return "undefined" === typeof FF ? bW[0] : "undefined" !== typeof WF && (10 !== +WF || SF) ? XF(FF, WF, SF, CF) : JF(FF)
        }

        function dF(FF, WF) {
          this.value = FF, this.sign = WF, this.isSmall = !1
        }

        function PF(FF) {
          this.value = FF, this.sign = FF < 0, this.isSmall = !0
        }

        function RF(FF) {
          this.value = FF
        }

        function iW(FF) {
          return -CF < FF && FF < CF
        }

        function eF(FF) {
          return FF < 1e7 ? [FF] : FF < 1e14 ? [FF % 1e7, Math.floor(FF / 1e7)] : [FF % 1e7, Math.floor(FF / 1e7) % 1e7, Math.floor(FF / 1e14)]
        }

        function EF(FF) {
          QF(FF);
          var WF = FF.length;
          if (WF < 4 && oF(FF, AF) < 0) switch (WF) {
            case 0:
              return 0;
            case 1:
              return FF[0];
            case 2:
              return FF[0] + FF[1] * SF;
            default:
              return FF[0] + (FF[1] + FF[2] * SF) * SF
          }
          return FF
        }

        function QF(FF) {
          for (var WF = FF.length; 0 === FF[--WF];);
          FF.length = WF + 1
        }

        function rW(FF) {
          for (var WF = new Array(FF), SF = -1; ++SF < FF;) WF[SF] = 0;
          return WF
        }

        function gW(FF) {
          return FF > 0 ? Math.floor(FF) : Math.ceil(FF)
        }

        function tW(FF, WF) {
          var CF, AF, uF = FF.length,
            hF = WF.length,
            bW = new Array(uF),
            dF = 0,
            PF = SF;
          for (AF = 0; AF < hF; AF++) dF = (CF = FF[AF] + WF[AF] + dF) >= PF ? 1 : 0, bW[AF] = CF - dF * PF;
          for (; AF < uF;) dF = (CF = FF[AF] + dF) === PF ? 1 : 0, bW[AF++] = CF - dF * PF;
          return dF > 0 && bW.push(dF), bW
        }

        function TF(FF, WF) {
          return FF.length >= WF.length ? tW(FF, WF) : tW(WF, FF)
        }

        function aW(FF, WF) {
          var CF, AF, uF = FF.length,
            hF = new Array(uF),
            bW = SF;
          for (AF = 0; AF < uF; AF++) CF = FF[AF] - bW + WF, WF = Math.floor(CF / bW), hF[AF] = CF - WF * bW, WF += 1;
          for (; WF > 0;) hF[AF++] = WF % bW, WF = Math.floor(WF / bW);
          return hF
        }

        function kW(FF, WF) {
          var CF, AF, uF = FF.length,
            hF = WF.length,
            bW = new Array(uF),
            dF = 0,
            PF = SF;
          for (CF = 0; CF < hF; CF++)(AF = FF[CF] - dF - WF[CF]) < 0 ? (AF += PF, dF = 1) : dF = 0, bW[CF] = AF;
          for (CF = hF; CF < uF; CF++) {
            if (!((AF = FF[CF] - dF) < 0)) {
              bW[CF++] = AF;
              break
            }
            AF += PF, bW[CF] = AF
          }
          for (; CF < uF; CF++) bW[CF] = FF[CF];
          return QF(bW), bW
        }

        function qW(FF, WF, CF) {
          var AF, uF, hF = FF.length,
            bW = new Array(hF),
            RF = -WF,
            iW = SF;
          for (AF = 0; AF < hF; AF++) uF = FF[AF] + RF, RF = Math.floor(uF / iW), uF %= iW, bW[AF] = uF < 0 ? uF + iW : uF;
          return "number" === typeof(bW = EF(bW)) ? (CF && (bW = -bW), new PF(bW)) : new dF(bW, CF)
        }

        function VF(FF, WF) {
          var CF, AF, uF, hF, bW = FF.length,
            dF = WF.length,
            PF = rW(bW + dF),
            RF = SF;
          for (uF = 0; uF < bW; ++uF) {
            hF = FF[uF];
            for (var iW = 0; iW < dF; ++iW) CF = hF * WF[iW] + PF[uF + iW], AF = Math.floor(CF / RF), PF[uF + iW] = CF - AF * RF, PF[uF + iW + 1] += AF
          }
          return QF(PF), PF
        }

        function NF(FF, WF) {
          var CF, AF, uF = FF.length,
            hF = new Array(uF),
            bW = SF,
            dF = 0;
          for (AF = 0; AF < uF; AF++) CF = FF[AF] * WF + dF, dF = Math.floor(CF / bW), hF[AF] = CF - dF * bW;
          for (; dF > 0;) hF[AF++] = dF % bW, dF = Math.floor(dF / bW);
          return hF
        }

        function DF(FF, WF) {
          for (var SF = []; WF-- > 0;) SF.push(0);
          return SF.concat(FF)
        }

        function LF(FF, WF) {
          var SF = Math.max(FF.length, WF.length);
          if (SF <= 30) return VF(FF, WF);
          SF = Math.ceil(SF / 2);
          var CF = FF.slice(SF),
            AF = FF.slice(0, SF),
            uF = WF.slice(SF),
            hF = WF.slice(0, SF),
            bW = LF(AF, hF),
            dF = LF(CF, uF),
            PF = LF(TF(AF, CF), TF(hF, uF)),
            RF = TF(TF(bW, DF(kW(kW(PF, bW), dF), SF)), DF(dF, 2 * SF));
          return QF(RF), RF
        }

        function mW(FF, WF, CF) {
          return new dF(FF < SF ? NF(WF, FF) : VF(WF, eF(FF)), CF)
        }

        function OF(FF) {
          var WF, CF, AF, uF, hF = FF.length,
            bW = rW(hF + hF),
            dF = SF;
          for (AF = 0; AF < hF; AF++) {
            CF = 0 - (uF = FF[AF]) * uF;
            for (var PF = AF; PF < hF; PF++) WF = uF * FF[PF] * 2 + bW[AF + PF] + CF, CF = Math.floor(WF / dF), bW[AF + PF] = WF - CF * dF;
            bW[AF + hF] = CF
          }
          return QF(bW), bW
        }

        function xW(FF, WF) {
          var CF, AF, uF, hF, bW = FF.length,
            dF = rW(bW),
            PF = SF;
          for (uF = 0, CF = bW - 1; CF >= 0; --CF) uF = (hF = uF * PF + FF[CF]) - (AF = gW(hF / WF)) * WF, dF[CF] = 0 | AF;
          return [dF, 0 | uF]
        }

        function ZF(FF, WF) {
          var CF, AF = JF(WF);
          if (hF) return [new RF(FF.value / AF.value), new RF(FF.value % AF.value)];
          var uF, iW = FF.value,
            tW = AF.value;
          if (0 === tW) throw new Error("Cannot divide by zero");
          if (FF.isSmall) return AF.isSmall ? [new PF(gW(iW / tW)), new PF(iW % tW)] : [bW[0], FF];
          if (AF.isSmall) {
            if (1 === tW) return [FF, bW[0]];
            if (-1 == tW) return [FF.Fh(), bW[0]];
            var TF = Math.abs(tW);
            if (TF < SF) {
              uF = EF((CF = xW(iW, TF))[0]);
              var aW = CF[1];
              return FF.sign && (aW = -aW), "number" === typeof uF ? (FF.sign !== AF.sign && (uF = -uF), [new PF(uF), new PF(aW)]) : [new dF(uF, FF.sign !== AF.sign), new PF(aW)]
            }
            tW = eF(TF)
          }
          var qW = oF(iW, tW);
          if (-1 === qW) return [bW[0], FF];
          if (0 === qW) return [bW[FF.sign === AF.sign ? 1 : -1], bW[0]];
          CF = iW.length + tW.length <= 200 ? function(FF, WF) {
            var CF, AF, uF, hF, bW, dF, PF, RF = FF.length,
              iW = WF.length,
              eF = SF,
              QF = rW(WF.length),
              gW = WF[iW - 1],
              tW = Math.ceil(eF / (2 * gW)),
              TF = NF(FF, tW),
              aW = NF(WF, tW);
            for (TF.length <= RF && TF.push(0), aW.push(0), gW = aW[iW - 1], AF = RF - iW; AF >= 0; AF--) {
              for (CF = eF - 1, TF[AF + iW] !== gW && (CF = Math.floor((TF[AF + iW] * eF + TF[AF + iW - 1]) / gW)), uF = 0, hF = 0, dF = aW.length, bW = 0; bW < dF; bW++) uF += CF * aW[bW], PF = Math.floor(uF / eF), hF += TF[AF + bW] - (uF - PF * eF), uF = PF, hF < 0 ? (TF[AF + bW] = hF + eF, hF = -1) : (TF[AF + bW] = hF, hF = 0);
              for (; 0 !== hF;) {
                for (CF -= 1, uF = 0, bW = 0; bW < dF; bW++)(uF += TF[AF + bW] - eF + aW[bW]) < 0 ? (TF[AF + bW] = uF + eF, uF = 0) : (TF[AF + bW] = uF, uF = 1);
                hF += uF
              }
              QF[AF] = CF
            }
            return TF = xW(TF, tW)[0], [EF(QF), EF(TF)]
          }(iW, tW) : function(FF, WF) {
            for (var CF, AF, uF, hF, bW, dF = FF.length, PF = WF.length, RF = [], iW = [], eF = SF; dF;)
              if (iW.unshift(FF[--dF]), QF(iW), oF(iW, WF) < 0) RF.push(0);
              else {
                uF = iW[(AF = iW.length) - 1] * eF + iW[AF - 2], hF = WF[PF - 1] * eF + WF[PF - 2], AF > PF && (uF = (uF + 1) * eF), CF = Math.ceil(uF / hF);
                do {
                  if (oF(bW = NF(WF, CF), iW) <= 0) break;
                  CF--
                } while (CF);
                RF.push(CF), iW = kW(iW, bW)
              } return RF.reverse(), [EF(RF), EF(iW)]
          }(iW, tW), uF = CF[0];
          var VF = FF.sign !== AF.sign,
            DF = CF[1],
            LF = FF.sign;
          return "number" === typeof uF ? (VF && (uF = -uF), uF = new PF(uF)) : uF = new dF(uF, VF), "number" === typeof DF ? (LF && (DF = -DF), DF = new PF(DF)) : DF = new dF(DF, LF), [uF, DF]
        }

        function oF(FF, WF) {
          if (FF.length !== WF.length) return FF.length > WF.length ? 1 : -1;
          for (var SF = FF.length - 1; SF >= 0; SF--)
            if (FF[SF] !== WF[SF]) return FF[SF] > WF[SF] ? 1 : -1;
          return 0
        }

        function YF(FF) {
          var WF = FF.abs();
          return !WF.isUnit() && (!!(WF.equals(2) || WF.equals(3) || WF.equals(5)) || !(WF.isEven() || WF.isDivisibleBy(3) || WF.isDivisibleBy(5)) && (!!WF.lesser(49) || void 0))
        }

        function MF(FF, SF) {
          for (var CF, AF, uF, hF = FF.prev(), bW = hF, dF = 0; bW.isEven();) bW = bW.divide(2), dF++;
          FF: for (AF = 0; AF < SF.length; AF++)
            if (!FF.lesser(SF[AF]) && !(uF = WF(SF[AF]).modPow(bW, FF)).isUnit() && !uF.equals(hF)) {
              for (CF = dF - 1; 0 != CF; CF--) {
                if ((uF = uF.square().mod(FF)).isUnit()) return !1;
                if (uF.equals(hF)) continue FF
              }
              return !1
            }
          return !0
        }
        dF.prototype = Object.create(bW.prototype), PF.prototype = Object.create(bW.prototype), RF.prototype = Object.create(bW.prototype), dF.prototype.add = function(FF) {
          var WF = JF(FF);
          if (this.sign !== WF.sign) return this.subtract(WF.Fh());
          var SF = this.value,
            CF = WF.value;
          return WF.isSmall ? new dF(aW(SF, Math.abs(CF)), this.sign) : new dF(TF(SF, CF), this.sign)
        }, dF.prototype.plus = dF.prototype.add, PF.prototype.add = function(FF) {
          var WF = JF(FF),
            SF = this.value;
          if (SF < 0 !== WF.sign) return this.subtract(WF.Fh());
          var CF = WF.value;
          if (WF.isSmall) {
            if (iW(SF + CF)) return new PF(SF + CF);
            CF = eF(Math.abs(CF))
          }
          return new dF(aW(CF, Math.abs(SF)), SF < 0)
        }, PF.prototype.plus = PF.prototype.add, RF.prototype.add = function(FF) {
          return new RF(this.value + JF(FF).value)
        }, RF.prototype.plus = RF.prototype.add, dF.prototype.subtract = function(FF) {
          var WF = JF(FF);
          if (this.sign !== WF.sign) return this.add(WF.Fh());
          var SF = this.value,
            CF = WF.value;
          return WF.isSmall ? qW(SF, Math.abs(CF), this.sign) : function(FF, WF, SF) {
            var CF;
            return oF(FF, WF) >= 0 ? CF = kW(FF, WF) : (CF = kW(WF, FF), SF = !SF), "number" === typeof(CF = EF(CF)) ? (SF && (CF = -CF), new PF(CF)) : new dF(CF, SF)
          }(SF, CF, this.sign)
        }, dF.prototype.minus = dF.prototype.subtract, PF.prototype.subtract = function(FF) {
          var WF = JF(FF),
            SF = this.value;
          if (SF < 0 !== WF.sign) return this.add(WF.Fh());
          var CF = WF.value;
          return WF.isSmall ? new PF(SF - CF) : qW(CF, Math.abs(SF), SF >= 0)
        }, PF.prototype.minus = PF.prototype.subtract, RF.prototype.subtract = function(FF) {
          return new RF(this.value - JF(FF).value)
        }, RF.prototype.minus = RF.prototype.subtract, dF.prototype.Fh = function() {
          return new dF(this.value, !this.sign)
        }, PF.prototype.Fh = function() {
          var FF = this.sign,
            WF = new PF(-this.value);
          return WF.sign = !FF, WF
        }, RF.prototype.Fh = function() {
          return new RF(-this.value)
        }, dF.prototype.abs = function() {
          return new dF(this.value, !1)
        }, PF.prototype.abs = function() {
          return new PF(Math.abs(this.value))
        }, RF.prototype.abs = function() {
          return new RF(this.value >= 0 ? this.value : -this.value)
        }, dF.prototype.multiply = function(FF) {
          var WF, CF, AF, uF = JF(FF),
            hF = this.value,
            PF = uF.value,
            RF = this.sign !== uF.sign;
          if (uF.isSmall) {
            if (0 === PF) return bW[0];
            if (1 === PF) return this;
            if (-1 === PF) return this.Fh();
            if ((WF = Math.abs(PF)) < SF) return new dF(NF(hF, WF), RF);
            PF = eF(WF)
          }
          return CF = hF.length, AF = PF.length, new dF(-.012 * CF - .012 * AF + 15e-6 * CF * AF > 0 ? LF(hF, PF) : VF(hF, PF), RF)
        }, dF.prototype.times = dF.prototype.multiply, PF.prototype._multiplyBySmall = function(FF) {
          return iW(FF.value * this.value) ? new PF(FF.value * this.value) : mW(Math.abs(FF.value), eF(Math.abs(this.value)), this.sign !== FF.sign)
        }, dF.prototype._multiplyBySmall = function(FF) {
          return 0 === FF.value ? bW[0] : 1 === FF.value ? this : -1 === FF.value ? this.Fh() : mW(Math.abs(FF.value), this.value, this.sign !== FF.sign)
        }, PF.prototype.multiply = function(FF) {
          return JF(FF)._multiplyBySmall(this)
        }, PF.prototype.times = PF.prototype.multiply, RF.prototype.multiply = function(FF) {
          return new RF(this.value * JF(FF).value)
        }, RF.prototype.times = RF.prototype.multiply, dF.prototype.square = function() {
          return new dF(OF(this.value), !1)
        }, PF.prototype.square = function() {
          var FF = this.value * this.value;
          return iW(FF) ? new PF(FF) : new dF(OF(eF(Math.abs(this.value))), !1)
        }, RF.prototype.square = function(FF) {
          return new RF(this.value * this.value)
        }, dF.prototype.divmod = function(FF) {
          var WF = ZF(this, FF);
          return {
            quotient: WF[0],
            remainder: WF[1]
          }
        }, RF.prototype.divmod = PF.prototype.divmod = dF.prototype.divmod, dF.prototype.divide = function(FF) {
          return ZF(this, FF)[0]
        }, RF.prototype.over = RF.prototype.divide = function(FF) {
          return new RF(this.value / JF(FF).value)
        }, PF.prototype.over = PF.prototype.divide = dF.prototype.over = dF.prototype.divide, dF.prototype.mod = function(FF) {
          return ZF(this, FF)[1]
        }, RF.prototype.mod = RF.prototype.remainder = function(FF) {
          return new RF(this.value % JF(FF).value)
        }, PF.prototype.remainder = PF.prototype.mod = dF.prototype.remainder = dF.prototype.mod, dF.prototype.pow = function(FF) {
          var WF, SF, CF, AF = JF(FF),
            uF = this.value,
            hF = AF.value;
          if (0 === hF) return bW[1];
          if (0 === uF) return bW[0];
          if (1 === uF) return bW[1];
          if (-1 === uF) return AF.isEven() ? bW[1] : bW[-1];
          if (AF.sign) return bW[0];
          if (!AF.isSmall) throw new Error("The exponent " + AF.toString() + " is too large.");
          if (this.isSmall && iW(WF = Math.pow(uF, hF))) return new PF(gW(WF));
          for (SF = this, CF = bW[1]; !0 & hF && (CF = CF.times(SF), --hF), 0 !== hF;) hF /= 2, SF = SF.square();
          return CF
        }, PF.prototype.pow = dF.prototype.pow, RF.prototype.pow = function(FF) {
          var WF = JF(FF),
            SF = this.value,
            CF = WF.value,
            AF = BigInt(0),
            uF = BigInt(1),
            hF = BigInt(2);
          if (CF === AF) return bW[1];
          if (SF === AF) return bW[0];
          if (SF === uF) return bW[1];
          if (SF === BigInt(-1)) return WF.isEven() ? bW[1] : bW[-1];
          if (WF.isNegative()) return new RF(AF);
          for (var dF = this, PF = bW[1];
            (CF & uF) === uF && (PF = PF.times(dF), --CF), CF !== AF;) CF /= hF, dF = dF.square();
          return PF
        }, dF.prototype.modPow = function(FF, WF) {
          if (FF = JF(FF), (WF = JF(WF)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var SF = bW[1],
            CF = this.mod(WF);
          for (FF.isNegative() && (FF = FF.multiply(bW[-1]), CF = CF.modInv(WF)); FF.isPositive();) {
            if (CF.isZero()) return bW[0];
            FF.isOdd() && (SF = SF.multiply(CF).mod(WF)), FF = FF.divide(2), CF = CF.square().mod(WF)
          }
          return SF
        }, RF.prototype.modPow = PF.prototype.modPow = dF.prototype.modPow, dF.prototype.compareAbs = function(FF) {
          var WF = JF(FF),
            SF = this.value,
            CF = WF.value;
          return WF.isSmall ? 1 : oF(SF, CF)
        }, PF.prototype.compareAbs = function(FF) {
          var WF = JF(FF),
            SF = Math.abs(this.value),
            CF = WF.value;
          return WF.isSmall ? SF === (CF = Math.abs(CF)) ? 0 : SF > CF ? 1 : -1 : -1
        }, RF.prototype.compareAbs = function(FF) {
          var WF = this.value,
            SF = JF(FF).value;
          return (WF = WF >= 0 ? WF : -WF) === (SF = SF >= 0 ? SF : -SF) ? 0 : WF > SF ? 1 : -1
        }, dF.prototype.compare = function(FF) {
          if (FF === 1 / 0) return -1;
          if (FF === -1 / 0) return 1;
          var WF = JF(FF),
            SF = this.value,
            CF = WF.value;
          return this.sign !== WF.sign ? WF.sign ? 1 : -1 : WF.isSmall ? this.sign ? -1 : 1 : oF(SF, CF) * (this.sign ? -1 : 1)
        }, dF.prototype.compareTo = dF.prototype.compare, PF.prototype.compare = function(FF) {
          if (FF === 1 / 0) return -1;
          if (FF === -1 / 0) return 1;
          var WF = JF(FF),
            SF = this.value,
            CF = WF.value;
          return WF.isSmall ? SF == CF ? 0 : SF > CF ? 1 : -1 : SF < 0 !== WF.sign ? SF < 0 ? -1 : 1 : SF < 0 ? 1 : -1
        }, PF.prototype.compareTo = PF.prototype.compare, RF.prototype.compare = function(FF) {
          if (FF === 1 / 0) return -1;
          if (FF === -1 / 0) return 1;
          var WF = this.value,
            SF = JF(FF).value;
          return WF === SF ? 0 : WF > SF ? 1 : -1
        }, RF.prototype.compareTo = RF.prototype.compare, dF.prototype.equals = function(FF) {
          return 0 === this.compare(FF)
        }, RF.prototype.eq = RF.prototype.equals = PF.prototype.eq = PF.prototype.equals = dF.prototype.eq = dF.prototype.equals, dF.prototype.notEquals = function(FF) {
          return 0 !== this.compare(FF)
        }, RF.prototype.neq = RF.prototype.notEquals = PF.prototype.neq = PF.prototype.notEquals = dF.prototype.neq = dF.prototype.notEquals, dF.prototype.greater = function(FF) {
          return this.compare(FF) > 0
        }, RF.prototype.gt = RF.prototype.greater = PF.prototype.gt = PF.prototype.greater = dF.prototype.gt = dF.prototype.greater, dF.prototype.lesser = function(FF) {
          return this.compare(FF) < 0
        }, RF.prototype.lt = RF.prototype.lesser = PF.prototype.lt = PF.prototype.lesser = dF.prototype.lt = dF.prototype.lesser, dF.prototype.greaterOrEquals = function(FF) {
          return this.compare(FF) >= 0
        }, RF.prototype.geq = RF.prototype.greaterOrEquals = PF.prototype.geq = PF.prototype.greaterOrEquals = dF.prototype.geq = dF.prototype.greaterOrEquals, dF.prototype.lesserOrEquals = function(FF) {
          return this.compare(FF) <= 0
        }, RF.prototype.leq = RF.prototype.lesserOrEquals = PF.prototype.leq = PF.prototype.lesserOrEquals = dF.prototype.leq = dF.prototype.lesserOrEquals, dF.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, PF.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, RF.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, dF.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, PF.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, RF.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, dF.prototype.isPositive = function() {
          return !this.sign
        }, PF.prototype.isPositive = function() {
          return this.value > 0
        }, RF.prototype.isPositive = PF.prototype.isPositive, dF.prototype.isNegative = function() {
          return this.sign
        }, PF.prototype.isNegative = function() {
          return this.value < 0
        }, RF.prototype.isNegative = PF.prototype.isNegative, dF.prototype.isUnit = function() {
          return !1
        }, PF.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, RF.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, dF.prototype.isZero = function() {
          return !1
        }, PF.prototype.isZero = function() {
          return 0 === this.value
        }, RF.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, dF.prototype.isDivisibleBy = function(FF) {
          var WF = JF(FF);
          return !WF.isZero() && (!!WF.isUnit() || (0 === WF.compareAbs(2) ? this.isEven() : this.mod(WF).isZero()))
        }, RF.prototype.isDivisibleBy = PF.prototype.isDivisibleBy = dF.prototype.isDivisibleBy, dF.prototype.isPrime = function(SF) {
          var CF = YF(this);
          if (CF !== FF) return CF;
          var AF = this.abs(),
            uF = AF.bitLength();
          if (uF <= 64) return MF(AF, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var hF = Math.log(2) * uF.toJSNumber(), bW = Math.ceil(!0 === SF ? 2 * Math.pow(hF, 2) : hF), dF = [], PF = 0; PF < bW; PF++) dF.push(WF(PF + 2));
          return MF(AF, dF)
        }, RF.prototype.isPrime = PF.prototype.isPrime = dF.prototype.isPrime, dF.prototype.isProbablePrime = function(SF, CF) {
          var AF = YF(this);
          if (AF !== FF) return AF;
          for (var uF = this.abs(), hF = SF === FF ? 5 : SF, bW = [], dF = 0; dF < hF; dF++) bW.push(WF.randBetween(2, uF.minus(2), CF));
          return MF(uF, bW)
        }, RF.prototype.isProbablePrime = PF.prototype.isProbablePrime = dF.prototype.isProbablePrime, dF.prototype.modInv = function(FF) {
          for (var SF, CF, AF, uF = WF.zero, hF = WF.one, bW = JF(FF), dF = this.abs(); !dF.isZero();) SF = bW.divide(dF), CF = uF, AF = bW, uF = hF, bW = dF, hF = CF.subtract(SF.multiply(hF)), dF = AF.subtract(SF.multiply(dF));
          if (!bW.isUnit()) throw new Error(this.toString() + " and " + FF.toString() + " are not co-prime");
          return -1 === uF.compare(0) && (uF = uF.add(FF)), this.isNegative() ? uF.Fh() : uF
        }, RF.prototype.modInv = PF.prototype.modInv = dF.prototype.modInv, dF.prototype.next = function() {
          var FF = this.value;
          return this.sign ? qW(FF, 1, this.sign) : new dF(aW(FF, 1), this.sign)
        }, PF.prototype.next = function() {
          var FF = this.value;
          return FF + 1 < CF ? new PF(FF + 1) : new dF(AF, !1)
        }, RF.prototype.next = function() {
          return new RF(this.value + BigInt(1))
        }, dF.prototype.prev = function() {
          var FF = this.value;
          return this.sign ? new dF(aW(FF, 1), !0) : qW(FF, 1, this.sign)
        }, PF.prototype.prev = function() {
          var FF = this.value;
          return FF - 1 > -CF ? new PF(FF - 1) : new dF(AF, !0)
        }, RF.prototype.prev = function() {
          return new RF(this.value - BigInt(1))
        };
        for (var cW = [1]; 2 * cW[cW.length - 1] <= SF;) cW.push(2 * cW[cW.length - 1]);
        var GF = cW.length,
          zW = cW[GF - 1];

        function IF(FF) {
          return Math.abs(FF) <= SF
        }

        function fF(FF, SF, CF) {
          SF = JF(SF);
          for (var AF = FF.isNegative(), uF = SF.isNegative(), hF = AF ? FF.not() : FF, bW = uF ? SF.not() : SF, dF = 0, PF = 0, RF = null, iW = null, eF = []; !hF.isZero() || !bW.isZero();) dF = (RF = ZF(hF, zW))[1].toJSNumber(), AF && (dF = zW - 1 - dF), PF = (iW = ZF(bW, zW))[1].toJSNumber(), uF && (PF = zW - 1 - PF), hF = RF[0], bW = iW[0], eF.push(CF(dF, PF));
          for (var EF = 0 !== CF(AF ? 1 : 0, uF ? 1 : 0) ? WF(-1) : WF(0), QF = eF.length - 1; QF >= 0; QF -= 1) EF = EF.multiply(zW).add(WF(eF[QF]));
          return EF
        }
        dF.prototype.shiftLeft = function(FF) {
          var WF = JF(FF).toJSNumber();
          if (!IF(WF)) throw new Error(String(WF) + " is too large for shifting.");
          if (WF < 0) return this.shiftRight(-WF);
          var SF = this;
          if (SF.isZero()) return SF;
          for (; WF >= GF;) SF = SF.multiply(zW), WF -= GF - 1;
          return SF.multiply(cW[WF])
        }, RF.prototype.shiftLeft = PF.prototype.shiftLeft = dF.prototype.shiftLeft, dF.prototype.shiftRight = function(FF) {
          var WF, SF = JF(FF).toJSNumber();
          if (!IF(SF)) throw new Error(String(SF) + " is too large for shifting.");
          if (SF < 0) return this.shiftLeft(-SF);
          for (var CF = this; SF >= GF;) {
            if (CF.isZero() || CF.isNegative() && CF.isUnit()) return CF;
            CF = (WF = ZF(CF, zW))[1].isNegative() ? WF[0].prev() : WF[0], SF -= GF - 1
          }
          return (WF = ZF(CF, cW[SF]))[1].isNegative() ? WF[0].prev() : WF[0]
        }, RF.prototype.shiftRight = PF.prototype.shiftRight = dF.prototype.shiftRight, dF.prototype.not = function() {
          return this.Fh().prev()
        }, RF.prototype.not = PF.prototype.not = dF.prototype.not, dF.prototype.and = function(FF) {
          return fF(this, FF, (function(FF, WF) {
            return FF & WF
          }))
        }, RF.prototype.and = PF.prototype.and = dF.prototype.and, dF.prototype.or = function(FF) {
          return fF(this, FF, (function(FF, WF) {
            return FF | WF
          }))
        }, RF.prototype.or = PF.prototype.or = dF.prototype.or, dF.prototype.xor = function(FF) {
          return fF(this, FF, (function(FF, WF) {
            return FF ^ WF
          }))
        }, RF.prototype.xor = PF.prototype.xor = dF.prototype.xor;
        var yW = 1 << 30;

        function sF(FF) {
          var WF = FF.value,
            CF = "number" === typeof WF ? WF | yW : "bigint" === typeof WF ? WF | BigInt(yW) : WF[0] + WF[1] * SF | 1073758208;
          return CF & -CF
        }

        function nF(FF, SF) {
          if (SF.compareTo(FF) <= 0) {
            var CF = nF(FF, SF.square(SF)),
              AF = CF.p,
              uF = CF.e,
              hF = AF.multiply(SF);
            return hF.compareTo(FF) <= 0 ? {
              p: hF,
              e: 2 * uF + 1
            } : {
              p: AF,
              e: 2 * uF
            }
          }
          return {
            p: WF(1),
            e: 0
          }
        }

        function HF(FF, WF) {
          return FF = JF(FF), WF = JF(WF), FF.greater(WF) ? FF : WF
        }

        function KF(FF, WF) {
          return FF = JF(FF), WF = JF(WF), FF.lesser(WF) ? FF : WF
        }

        function wF(FF, WF) {
          if (FF = JF(FF).abs(), WF = JF(WF).abs(), FF.equals(WF)) return FF;
          if (FF.isZero()) return WF;
          if (WF.isZero()) return FF;
          for (var SF, CF, AF = bW[1]; FF.isEven() && WF.isEven();) SF = KF(sF(FF), sF(WF)), FF = FF.divide(SF), WF = WF.divide(SF), AF = AF.multiply(SF);
          for (; FF.isEven();) FF = FF.divide(sF(FF));
          do {
            for (; WF.isEven();) WF = WF.divide(sF(WF));
            FF.greater(WF) && (CF = WF, WF = FF, FF = CF), WF = WF.subtract(FF)
          } while (!WF.isZero());
          return AF.isUnit() ? FF : FF.multiply(AF)
        }
        dF.prototype.bitLength = function() {
          var FF = this;
          return FF.compareTo(WF(0)) < 0 && (FF = FF.Fh().subtract(WF(1))), 0 === FF.compareTo(WF(0)) ? WF(0) : WF(nF(FF, WF(2)).e).add(WF(1))
        }, RF.prototype.bitLength = PF.prototype.bitLength = dF.prototype.bitLength;
        var XF = function(FF, WF, SF, CF) {
          SF = SF || uF, FF = String(FF), CF || (FF = FF.toLowerCase(), SF = SF.toLowerCase());
          var AF, hF = FF.length,
            bW = Math.abs(WF),
            dF = {};
          for (AF = 0; AF < SF.length; AF++) dF[SF[AF]] = AF;
          for (AF = 0; AF < hF; AF++) {
            if ("-" !== (iW = FF[AF]) && (iW in dF && dF[iW] >= bW)) {
              if ("1" === iW && 1 === bW) continue;
              throw new Error(iW + " is not a valid digit in base " + WF + ".")
            }
          }
          WF = JF(WF);
          var PF = [],
            RF = "-" === FF[0];
          for (AF = RF ? 1 : 0; AF < FF.length; AF++) {
            var iW;
            if ((iW = FF[AF]) in dF) PF.push(JF(dF[iW]));
            else {
              if ("<" !== iW) throw new Error(iW + " is not a valid character");
              var eF = AF;
              do {
                AF++
              } while (">" !== FF[AF] && AF < FF.length);
              PF.push(JF(FF.slice(eF + 1, AF)))
            }
          }
          return UF(PF, WF, RF)
        };

        function UF(FF, WF, SF) {
          var CF, AF = bW[0],
            uF = bW[1];
          for (CF = FF.length - 1; CF >= 0; CF--) AF = AF.add(FF[CF].times(uF)), uF = uF.times(WF);
          return SF ? AF.Fh() : AF
        }

        function BF(FF, SF) {
          if ((SF = WF(SF)).isZero()) {
            if (FF.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (SF.equals(-1)) {
            if (FF.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (FF.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-FF.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var CF = Array.apply(null, Array(FF.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return CF.unshift([1]), {
              value: [].concat.apply([], CF),
              isNegative: !1
            }
          }
          var AF = !1;
          if (FF.isNegative() && SF.isPositive() && (AF = !0, FF = FF.abs()), SF.isUnit()) return FF.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(FF.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: AF
          };
          for (var uF, hF = [], bW = FF; bW.isNegative() || bW.compareAbs(SF) >= 0;) {
            uF = bW.divmod(SF), bW = uF.quotient;
            var dF = uF.remainder;
            dF.isNegative() && (dF = SF.minus(dF).abs(), bW = bW.next()), hF.push(dF.toJSNumber())
          }
          return hF.push(bW.toJSNumber()), {
            value: hF.reverse(),
            isNegative: AF
          }
        }

        function jW(FF, WF, SF) {
          var CF = BF(FF, WF);
          return (CF.isNegative ? "-" : "") + CF.value.map((function(FF) {
            return function(FF, WF) {
              return FF < (WF = WF || uF).length ? WF[FF] : "<" + FF + ">"
            }(FF, SF)
          })).join("")
        }

        function vW(FF) {
          if (iW(+FF)) {
            var WF = +FF;
            if (WF === gW(WF)) return hF ? new RF(BigInt(WF)) : new PF(WF);
            throw new Error("Invalid integer: " + FF)
          }
          var SF = "-" === FF[0];
          SF && (FF = FF.slice(1));
          var CF = FF.split(/e/i);
          if (CF.length > 2) throw new Error("Invalid integer: " + CF.join("e"));
          if (2 === CF.length) {
            var AF = CF[1];
            if ("+" === AF[0] && (AF = AF.slice(1)), (AF = +AF) !== gW(AF) || !iW(AF)) throw new Error("Invalid integer: " + AF + " is not a valid exponent.");
            var uF = CF[0],
              bW = uF.indexOf(".");
            if (bW >= 0 && (AF -= uF.length - bW - 1, uF = uF.slice(0, bW) + uF.slice(bW + 1)), AF < 0) throw new Error("Cannot include negative exponent part for integers");
            FF = uF += new Array(AF + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(FF)) throw new Error("Invalid integer: " + FF);
          if (hF) return new RF(BigInt(SF ? "-" + FF : FF));
          for (var eF = [], EF = FF.length, rW = EF - 7; EF > 0;) eF.push(+FF.slice(rW, EF)), (rW -= 7) < 0 && (rW = 0), EF -= 7;
          return QF(eF), new dF(eF, SF)
        }

        function JF(FF) {
          return "number" === typeof FF ? function(FF) {
            if (hF) return new RF(BigInt(FF));
            if (iW(FF)) {
              if (FF !== gW(FF)) throw new Error(FF + " is not an integer.");
              return new PF(FF)
            }
            return vW(FF.toString())
          }(FF) : "string" === typeof FF ? vW(FF) : "bigint" === typeof FF ? new RF(FF) : FF
        }
        dF.prototype.toArray = function(FF) {
          return BF(this, FF)
        }, PF.prototype.toArray = function(FF) {
          return BF(this, FF)
        }, RF.prototype.toArray = function(FF) {
          return BF(this, FF)
        }, dF.prototype.toString = function(WF, SF) {
          if (WF === FF && (WF = 10), 10 !== WF) return jW(this, WF, SF);
          for (var CF, AF = this.value, uF = AF.length, hF = String(AF[--uF]); --uF >= 0;) CF = String(AF[uF]), hF += "0000000".slice(CF.length) + CF;
          return (this.sign ? "-" : "") + hF
        }, PF.prototype.toString = function(WF, SF) {
          return WF === FF && (WF = 10), 10 != WF ? jW(this, WF, SF) : String(this.value)
        }, RF.prototype.toString = PF.prototype.toString, RF.prototype.toJSON = dF.prototype.toJSON = PF.prototype.toJSON = function() {
          return this.toString()
        }, dF.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, dF.prototype.toJSNumber = dF.prototype.valueOf, PF.prototype.valueOf = function() {
          return this.value
        }, PF.prototype.toJSNumber = PF.prototype.valueOf, RF.prototype.valueOf = RF.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var pF = 0; pF < 1e3; pF++) bW[pF] = JF(pF), pF > 0 && (bW[-pF] = JF(-pF));
        return bW.one = bW[1], bW.zero = bW[0], bW.minusOne = bW[-1], bW.max = HF, bW.min = KF, bW.gcd = wF, bW.lcm = function(FF, WF) {
          return FF = JF(FF).abs(), WF = JF(WF).abs(), FF.divide(wF(FF, WF)).multiply(WF)
        }, bW.isInstance = function(FF) {
          return FF instanceof dF || FF instanceof PF || FF instanceof RF
        }, bW.randBetween = function(FF, WF, CF) {
          FF = JF(FF), WF = JF(WF);
          var AF = CF || Math.random,
            uF = KF(FF, WF),
            hF = HF(FF, WF).subtract(uF).add(1);
          if (hF.isSmall) return uF.add(Math.floor(AF() * hF));
          for (var dF = BF(hF, SF).value, PF = [], RF = !0, iW = 0; iW < dF.length; iW++) {
            var eF = RF ? dF[iW] : SF,
              EF = gW(AF() * eF);
            PF.push(EF), EF < eF && (RF = !1)
          }
          return uF.add(bW.udF(PF, SF, !1))
        }, bW.udF = function(FF, WF, SF) {
          return UF(FF.map(JF), JF(WF || 10), SF)
        }, bW
      }();
      FF.hasOwnProperty("exports") && (FF.exports = WF)
    }(TS);
    var aC = uF(TS.exports);

    function kC(FF, WF, SF) {
      let CF = 0;
      for (let AF = 0; AF < SF; AF++) {
        const SF = FF[WF + AF];
        if (void 0 === SF) break;
        CF += SF * 16 ** AF
      }
      return CF
    }

    function qC(FF) {
      const WF = [];
      for (let SF = 0; SF < FF.length; SF++) {
        let CF = Number(FF[SF]);
        for (let FF = 0; CF || FF < WF.length; FF++) CF += 10 * (WF[FF] || 0), WF[FF] = CF % 16, CF = (CF - WF[FF]) / 16
      }
      return WF
    }
    class VS {
      static fromString(FF) {
        return new VS(function(FF) {
          const WF = qC(FF),
            SF = Array(4);
          for (let CF = 0; CF < 4; CF++) SF[3 - CF] = kC(WF, 4 * CF, 4);
          return SF
        }(FF), FF)
      }
      static fromBit(FF) {
        const WF = Array(4),
          SF = Math.floor(FF / 16);
        for (let CF = 0; CF < 4; CF++) WF[3 - CF] = CF === SF ? 1 << FF - 16 * SF : 0;
        return new VS(WF)
      }
      constructor(FF, WF) {
        this.parts = FF, this.str = WF
      }
      and(FF) {
        let {
          parts: WF
        } = FF;
        return new VS(this.parts.map(((FF, SF) => FF & WF[SF])))
      }
      or(FF) {
        let {
          parts: WF
        } = FF;
        return new VS(this.parts.map(((FF, SF) => FF | WF[SF])))
      }
      xor(FF) {
        let {
          parts: WF
        } = FF;
        return new VS(this.parts.map(((FF, SF) => FF ^ WF[SF])))
      }
      not() {
        return new VS(this.parts.map((FF => ~FF)))
      }
      equals(FF) {
        let {
          parts: WF
        } = FF;
        return this.parts.every(((FF, SF) => FF === WF[SF]))
      }
      toString() {
        if (null != this.str) return this.str;
        const FF = new Array(16);
        return this.parts.forEach(((WF, SF) => {
          const CF = qC(WF.toString());
          for (let AF = 0; AF < 4; AF++) FF[AF + 4 * SF] = CF[3 - AF] || 0
        })), this.str = aC.udF(FF, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const NS = function() {
      try {
        return BigInt, !0
      } catch (FF) {
        return !1
      }
    }();
    NS && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const DS = {},
      LS = NS ? function(FF) {
        return BigInt(FF)
      } : function(FF) {
        return FF instanceof VS ? FF : ("number" === typeof FF && (FF = FF.toString()), null != DS[FF] || (DS[FF] = VS.fromString(FF)), DS[FF])
      },
      mC = LS(0),
      OS = NS ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mC) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mC)
      } : function() {
        let FF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mC;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mC).and(FF)
      },
      xC = NS ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mC) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mC)
      } : function() {
        let FF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mC;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mC).or(FF)
      },
      ZS = NS ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mC) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mC)
      } : function() {
        let FF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mC;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mC).xor(FF)
      },
      oS = NS ? function(FF, WF) {
        return FF === WF
      } : function(FF, WF) {
        return null == FF || null == WF ? FF == WF : FF.equals(WF)
      };
    var YS, MS, cC, GS, zC = {
      combine: function() {
        let FF = arguments.length <= 0 ? void 0 : arguments[0];
        for (let WF = 1; WF < arguments.length; WF++) FF = xC(FF, WF < 0 || arguments.length <= WF ? void 0 : arguments[WF]);
        return FF
      },
      add: function(FF, WF) {
        return WF === mC ? FF : xC(FF, WF)
      },
      remove: function(FF, WF) {
        return WF === mC ? FF : ZS(FF, OS(FF, WF))
      },
      filter: OS,
      invert: NS ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mC)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mC).not()
      },
      has: function(FF, WF) {
        return oS(OS(FF, WF), WF)
      },
      hasAny: function(FF, WF) {
        return !oS(OS(FF, WF), mC)
      },
      equals: oS,
      deserialize: LS,
      getFlag: NS ? function(FF) {
        return BigInt(1) << BigInt(FF)
      } : function(FF) {
        return VS.fromBit(FF)
      }
    };
    ! function(FF) {
      FF[FF.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", FF[FF.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", FF[FF.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", FF[FF.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", FF[FF.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", FF[FF.RATELIMITED = 4002] = "RATELIMITED", FF[FF.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", FF[FF.INVALID_VERSION = 4004] = "INVALID_VERSION", FF[FF.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(YS || (YS = {})),
    function(FF) {
      FF[FF.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", FF[FF.INVALID_COMMAND = 4002] = "INVALID_COMMAND", FF[FF.INVALID_EVENT = 4004] = "INVALID_EVENT", FF[FF.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(MS || (MS = {})),
    function(FF) {
      FF.LANDSCAPE = "landscape", FF.PORTRAIT = "portrait"
    }(cC || (cC = {})),
    function(FF) {
      FF.MOBILE = "mobile", FF.DESKTOP = "desktop"
    }(GS || (GS = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: zC.getFlag(0),
      ADMINISTRATOR: zC.getFlag(3)
    });

    function IS(FF) {
      return ES((WF => {
        var SF;
        const [CF] = null !== (SF = Object.entries(FF).find((FF => {
          let [, SF] = FF;
          return SF === WF
        }))) && void 0 !== SF ? SF : [];
        return null != WF && void 0 === CF ? FF.UNHANDLED : WF
      }), cS().or(GW()))
    }
    const fS = tC.object({
        image_url: tC.string()
      }),
      yC = tC.object({
        mediaUrl: tC.string().max(1024)
      }),
      sS = tC.object({
        access_token: tC.union([tC.string(), tC.null()]).optional()
      }),
      nS = tC.object({
        access_token: tC.string(),
        user: tC.object({
          username: tC.string(),
          discriminator: tC.string(),
          id: tC.string(),
          avatar: tC.union([tC.string(), tC.null()]).optional(),
          public_flags: tC.number(),
          global_name: tC.union([tC.string(), tC.null()]).optional()
        }),
        scopes: tC.array(function(FF) {
          const WF = oW().transform((WF => {
            const SF = FF.safeParse(WF);
            return SF.success ? SF.data : FF._def.defaultValue()
          }));
          return WF.overlayType = FF, WF
        }(tC.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(tC.literal(-1)).default(-1))),
        expires: tC.string(),
        application: tC.object({
          description: tC.string(),
          icon: tC.union([tC.string(), tC.null()]).optional(),
          id: tC.string(),
          rpc_origins: tC.array(tC.string()).optional(),
          name: tC.string()
        })
      }),
      HS = tC.object({
        participants: tC.array(tC.object({
          id: tC.string(),
          username: tC.string(),
          global_name: tC.union([tC.string(), tC.null()]).optional(),
          discriminator: tC.string(),
          avatar: tC.union([tC.string(), tC.null()]).optional(),
          flags: tC.number(),
          bot: tC.boolean(),
          avatar_decoration_data: tC.union([tC.object({
            asset: tC.string(),
            skuId: tC.string().optional()
          }), tC.null()]).optional(),
          premium_type: tC.union([tC.number(), tC.null()]).optional(),
          nickname: tC.string().optional()
        }))
      });
    var KS;
    ! function(FF) {
      FF.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", FF.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", FF.AUTHENTICATE = "AUTHENTICATE", FF.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(KS || (KS = {}));
    const wS = tC.object({}).optional().nullable(),
      XS = tC.void(),
      US = {
        [KS.INITIATE_IMAGE_UPLOAD]: {
          request: XS,
          response: fS
        },
        [KS.OPEN_SHARE_MOMENT_DIALOG]: {
          request: yC,
          response: wS
        },
        [KS.AUTHENTICATE]: {
          request: sS,
          response: nS
        },
        [KS.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: XS,
          response: HS
        }
      },
      BS = "DISPATCH";
    var jC;
    ! function(FF) {
      FF.AUTHORIZE = "AUTHORIZE", FF.AUTHENTICATE = "AUTHENTICATE", FF.GET_GUILDS = "GET_GUILDS", FF.GET_GUILD = "GET_GUILD", FF.GET_CHANNEL = "GET_CHANNEL", FF.GET_CHANNELS = "GET_CHANNELS", FF.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", FF.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", FF.SUBSCRIBE = "SUBSCRIBE", FF.UNSUBSCRIBE = "UNSUBSCRIBE", FF.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", FF.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", FF.SET_ACTIVITY = "SET_ACTIVITY", FF.GET_SKUS = "GET_SKUS", FF.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", FF.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", FF.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", FF.START_PURCHASE = "START_PURCHASE", FF.SET_CONFIG = "SET_CONFIG", FF.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", FF.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", FF.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", FF.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", FF.CAPTURE_LOG = "CAPTURE_LOG", FF.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", FF.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", FF.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", FF.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", FF.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", FF.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", FF.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(jC || (jC = {}));
    const vC = jS({
        cmd: cS(),
        data: wW(),
        evt: HW(),
        nonce: cS()
      }).passthrough(),
      JS = (IS(Object.assign(Object.assign({}, nS.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), jS({
        id: cS(),
        username: cS(),
        discriminator: cS(),
        global_name: cS().optional().nullable(),
        avatar: cS().optional().nullable(),
        avatar_decoration_data: jS({
          asset: cS(),
          sku_id: cS().optional()
        }).nullable(),
        bot: fW(),
        flags: GW().optional().nullable(),
        premium_type: GW().optional().nullable()
      })),
      pS = jS({
        user: JS,
        nick: cS().optional().nullable(),
        roles: BW(cS()),
        joined_at: cS(),
        deaf: fW(),
        mute: fW()
      }),
      lS = jS({
        id: cS(),
        name: cS().optional().nullable(),
        roles: BW(cS()).optional().nullable(),
        user: JS.optional().nullable(),
        require_colons: fW().optional().nullable(),
        managed: fW().optional().nullable(),
        animated: fW().optional().nullable(),
        available: fW().optional().nullable()
      }),
      FC = jS({
        mute: fW(),
        deaf: fW(),
        self_mute: fW(),
        self_deaf: fW(),
        suppress: fW()
      }),
      WC = jS({
        mute: fW(),
        nick: cS(),
        user: JS,
        voice_state: FC,
        volume: GW()
      }),
      SC = IS({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      CC = jS({
        name: cS(),
        type: GW(),
        url: cS().optional().nullable(),
        created_at: GW().optional().nullable(),
        timestamps: jS({
          start: GW(),
          end: GW()
        }).partial().optional().nullable(),
        application_id: cS().optional().nullable(),
        details: cS().optional().nullable(),
        state: cS().optional().nullable(),
        emoji: lS.optional().nullable(),
        party: jS({
          id: cS().optional().nullable(),
          size: BW(GW()).optional().nullable()
        }).optional().nullable(),
        assets: jS({
          large_image: cS().nullable(),
          large_text: cS().nullable(),
          small_image: cS().nullable(),
          small_text: cS().nullable()
        }).partial().optional().nullable(),
        secrets: jS({
          join: cS(),
          match: cS()
        }).partial().optional().nullable(),
        instance: fW().optional().nullable(),
        flags: GW().optional().nullable()
      }),
      AC = jS({
        id: cS(),
        type: IS({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: cS(),
        deny: cS()
      }),
      uC = {
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
      hC = jS({
        id: cS(),
        type: IS(uC),
        guild_id: cS().optional().nullable(),
        position: GW().optional().nullable(),
        permission_overwrites: BW(AC).optional().nullable(),
        name: cS().optional().nullable(),
        topic: cS().optional().nullable(),
        nsfw: fW().optional().nullable(),
        last_message_id: cS().optional().nullable(),
        bitrate: GW().optional().nullable(),
        user_limit: GW().optional().nullable(),
        rate_limit_per_user: GW().optional().nullable(),
        recipients: BW(JS).optional().nullable(),
        icon: cS().optional().nullable(),
        owner_id: cS().optional().nullable(),
        application_id: cS().optional().nullable(),
        parent_id: cS().optional().nullable(),
        last_pin_timestamp: cS().optional().nullable()
      }),
      bA = jS({
        user: JS,
        guild_id: cS(),
        status: SC,
        activities: BW(CC),
        client_status: jS({
          desktop: SC,
          mobile: SC,
          web: SC
        }).partial()
      }),
      dC = jS({
        id: cS(),
        name: cS(),
        color: GW(),
        hoist: fW(),
        position: GW(),
        permissions: cS(),
        managed: fW(),
        mentionable: fW()
      }),
      PC = (jS({
        id: cS(),
        name: cS(),
        owner_id: cS(),
        icon: cS().nullable(),
        icon_hash: cS().optional().nullable(),
        splash: cS().nullable(),
        discovery_splash: cS().nullable(),
        owner: fW().optional().nullable(),
        permissions: cS().optional().nullable(),
        region: cS(),
        afk_channel_id: cS().nullable(),
        afk_timeout: GW(),
        widget_enabled: fW().optional().nullable(),
        widget_channel_id: cS().optional().nullable(),
        verification_level: GW(),
        default_message_notifications: GW(),
        explicit_content_filter: GW(),
        roles: BW(dC),
        emojis: BW(lS),
        features: BW(cS()),
        mfa_level: GW(),
        application_id: cS().nullable(),
        system_channel_id: cS().nullable(),
        system_channel_flags: GW(),
        rules_channel_id: cS().nullable(),
        joined_at: cS().optional().nullable(),
        large: fW().optional().nullable(),
        unavailable: fW().optional().nullable(),
        member_count: GW().optional().nullable(),
        voice_states: BW(FC).optional().nullable(),
        members: BW(pS).optional().nullable(),
        channels: BW(hC).optional().nullable(),
        presences: BW(bA).optional().nullable(),
        max_presences: GW().optional().nullable(),
        max_members: GW().optional().nullable(),
        vanity_url_code: cS().nullable(),
        description: cS().nullable(),
        banner: cS().nullable(),
        premium_tier: GW(),
        premium_subscription_count: GW().optional().nullable(),
        preferred_locale: cS(),
        public_updates_channel_id: cS().nullable(),
        max_video_channel_users: GW().optional().nullable(),
        approximate_member_count: GW().optional().nullable(),
        approximate_presence_count: GW().optional().nullable()
      }), jS({
        id: cS(),
        guild_id: cS(),
        type: GW(),
        name: cS()
      })),
      RC = jS({
        id: cS(),
        filename: cS(),
        size: GW(),
        url: cS(),
        proxy_url: cS(),
        height: GW().optional().nullable(),
        width: GW().optional().nullable()
      }),
      iA = jS({
        text: cS(),
        icon_url: cS().optional().nullable(),
        proxy_icon_url: cS().optional().nullable()
      }),
      eC = jS({
        url: cS().optional().nullable(),
        proxy_url: cS().optional().nullable(),
        height: GW().optional().nullable(),
        width: GW().optional().nullable()
      }),
      EC = eC.omit({
        proxy_url: !0
      }),
      QC = jS({
        name: cS().optional().nullable(),
        url: cS().optional().nullable()
      }),
      rA = jS({
        name: cS().optional().nullable(),
        url: cS().optional().nullable(),
        icon_url: cS().optional().nullable(),
        proxy_icon_url: cS().optional().nullable()
      }),
      gA = jS({
        name: cS(),
        value: cS(),
        inline: fW()
      }),
      tA = jS({
        title: cS().optional().nullable(),
        type: cS().optional().nullable(),
        description: cS().optional().nullable(),
        url: cS().optional().nullable(),
        timestamp: cS().optional().nullable(),
        color: GW().optional().nullable(),
        footer: iA.optional().nullable(),
        image: eC.optional().nullable(),
        thumbnail: eC.optional().nullable(),
        video: EC.optional().nullable(),
        provider: QC.optional().nullable(),
        author: rA.optional().nullable(),
        fields: BW(gA).optional().nullable()
      }),
      TC = jS({
        count: GW(),
        me: fW(),
        emoji: lS
      }),
      aA = jS({
        type: GW(),
        party_id: cS().optional().nullable()
      }),
      kA = jS({
        id: cS(),
        cover_image: cS().optional().nullable(),
        description: cS(),
        icon: cS().optional().nullable(),
        name: cS()
      }),
      qA = jS({
        message_id: cS().optional().nullable(),
        channel_id: cS().optional().nullable(),
        guild_id: cS().optional().nullable()
      }),
      VC = jS({
        id: cS(),
        channel_id: cS(),
        guild_id: cS().optional().nullable(),
        author: JS.optional().nullable(),
        member: pS.optional().nullable(),
        content: cS(),
        timestamp: cS(),
        edited_timestamp: cS().optional().nullable(),
        tts: fW(),
        mention_everyone: fW(),
        mentions: BW(JS),
        mention_roles: BW(cS()),
        mention_channels: BW(PC),
        attachments: BW(RC),
        embeds: BW(tA),
        reactions: BW(TC).optional().nullable(),
        nonce: JW([cS(), GW()]).optional().nullable(),
        pinned: fW(),
        webhook_id: cS().optional().nullable(),
        type: GW(),
        activity: aA.optional().nullable(),
        application: kA.optional().nullable(),
        message_reference: qA.optional().nullable(),
        flags: GW().optional().nullable(),
        stickers: BW(wW()).optional().nullable(),
        referenced_message: wW().optional().nullable()
      }),
      NC = jS({
        id: cS(),
        name: cS()
      }),
      DC = jS({
        type: IS({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: GW(),
        name: cS()
      }),
      LC = jS({
        type: IS({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: fW(),
        threshold: GW(),
        shortcut: BW(DC),
        delay: GW()
      }),
      mA = jS({
        device_id: cS(),
        volume: GW(),
        available_devices: BW(NC)
      }),
      OC = (jS({
        type: IS({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: cS(),
        vendor: jS({
          name: cS(),
          url: cS()
        }),
        model: jS({
          name: cS(),
          url: cS()
        }),
        related: BW(cS()),
        echo_cancellation: fW().optional().nullable(),
        noise_suppression: fW().optional().nullable(),
        automatic_gain_control: fW().optional().nullable(),
        hardware_mute: fW().optional().nullable()
      }), jS({
        id: cS(),
        name: cS(),
        type: IS({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: jS({
          amount: GW(),
          currency: cS()
        }),
        application_id: cS(),
        flags: GW(),
        release_date: cS().nullable()
      })),
      xA = jS({
        id: cS(),
        sku_id: cS(),
        application_id: cS(),
        user_id: cS(),
        gift_code_flags: GW(),
        type: IS({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: cS().optional().nullable(),
        branches: BW(cS()).optional().nullable(),
        starts_at: cS().optional().nullable(),
        ends_at: cS().optional().nullable(),
        parent_id: cS().optional().nullable(),
        consumed: fW().optional().nullable(),
        deleted: fW().optional().nullable(),
        gift_code_batch_id: cS().optional().nullable()
      }),
      ZC = (IS({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), IS({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      oC = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      YC = (IS(oC), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      MC = (IS(YC), "ERROR");
    var cA;
    ! function(FF) {
      FF.READY = "READY", FF.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", FF.SPEAKING_START = "SPEAKING_START", FF.SPEAKING_STOP = "SPEAKING_STOP", FF.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", FF.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", FF.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", FF.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", FF.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", FF.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(cA || (cA = {}));
    const GC = vC.extend({
        evt: dS(cA),
        nonce: cS().nullable(),
        cmd: hS(BS),
        data: jS({}).passthrough()
      }),
      zA = vC.extend({
        evt: hS(MC),
        data: jS({
          code: GW(),
          message: cS().optional()
        }).passthrough(),
        cmd: dS(jC),
        nonce: cS().nullable()
      }),
      IC = GC.extend({
        evt: cS()
      }),
      fC = JW([GC, IC, zA]);
    const yA = {
      [cA.READY]: {
        payload: GC.extend({
          evt: hS(cA.READY),
          data: jS({
            v: GW(),
            config: jS({
              cdn_host: cS().optional(),
              api_endpoint: cS(),
              environment: cS()
            }),
            user: jS({
              id: cS(),
              username: cS(),
              discriminator: cS(),
              avatar: cS().optional()
            }).optional()
          })
        })
      },
      [cA.VOICE_STATE_UPDATE]: {
        payload: GC.extend({
          evt: hS(cA.VOICE_STATE_UPDATE),
          data: WC
        }),
        subscribeArgs: jS({
          channel_id: cS()
        })
      },
      [cA.SPEAKING_START]: {
        payload: GC.extend({
          evt: hS(cA.SPEAKING_START),
          data: jS({
            lobby_id: cS().optional(),
            channel_id: cS().optional(),
            user_id: cS()
          })
        }),
        subscribeArgs: jS({
          lobby_id: cS().nullable().optional(),
          channel_id: cS().nullable().optional()
        })
      },
      [cA.SPEAKING_STOP]: {
        payload: GC.extend({
          evt: hS(cA.SPEAKING_STOP),
          data: jS({
            lobby_id: cS().optional(),
            channel_id: cS().optional(),
            user_id: cS()
          })
        }),
        subscribeArgs: jS({
          lobby_id: cS().nullable().optional(),
          channel_id: cS().nullable().optional()
        })
      },
      [cA.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: GC.extend({
          evt: hS(cA.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: jS({
            layout_mode: IS(YC)
          })
        })
      },
      [cA.ORIENTATION_UPDATE]: {
        payload: GC.extend({
          evt: hS(cA.ORIENTATION_UPDATE),
          data: jS({
            screen_orientation: IS(oC),
            orientation: dS(cC)
          })
        })
      },
      [cA.CURRENT_USER_UPDATE]: {
        payload: GC.extend({
          evt: hS(cA.CURRENT_USER_UPDATE),
          data: JS
        })
      },
      [cA.ENTITLEMENT_CREATE]: {
        payload: GC.extend({
          evt: hS(cA.ENTITLEMENT_CREATE),
          data: jS({
            entitlement: xA
          })
        })
      },
      [cA.THERMAL_STATE_UPDATE]: {
        payload: GC.extend({
          evt: hS(cA.THERMAL_STATE_UPDATE),
          data: jS({
            thermal_state: ZC
          })
        })
      },
      [cA.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: GC.extend({
          evt: hS(cA.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: jS({
            participants: HS.shape.participants
          })
        })
      }
    };
    const sC = jS({}).nullable(),
      nC = jS({
        code: cS()
      }),
      HC = jS({
        guilds: BW(jS({
          id: cS(),
          name: cS()
        }))
      }),
      KC = jS({
        id: cS(),
        name: cS(),
        icon_url: cS().optional(),
        members: BW(pS)
      }),
      wC = jS({
        id: cS(),
        type: IS(uC),
        guild_id: cS().optional().nullable(),
        name: cS().optional().nullable(),
        topic: cS().optional().nullable(),
        bitrate: GW().optional().nullable(),
        user_limit: GW().optional().nullable(),
        position: GW().optional().nullable(),
        voice_states: BW(WC),
        messages: BW(VC)
      }),
      XC = jS({
        channels: BW(hC)
      }),
      UC = (wC.nullable(), wC.nullable()),
      BC = wC.nullable(),
      jA = (jS({
        input: mA,
        output: mA,
        mode: LC,
        automatic_gain_control: fW(),
        echo_cancellation: fW(),
        noise_suppression: fW(),
        qos: fW(),
        silence_warning: fW(),
        deaf: fW(),
        mute: fW()
      }), jS({
        evt: cS()
      })),
      vA = jS({
        shortcut: DC
      }),
      JC = CC,
      pC = jS({
        skus: BW(OC)
      }),
      lC = jS({
        entitlements: BW(xA)
      }),
      FA = BW(xA).nullable(),
      WA = jS({
        use_interactive_pip: fW()
      }),
      SA = jS({
        locale: cS()
      }),
      CA = jS({
        enabled: fW()
      }),
      AA = jS({
        permissions: IW().or(cS())
      }),
      uA = jS({
        iosKeyboardResizesView: iC(fW())
      }),
      hA = vC.extend({
        cmd: dS(jC),
        evt: HW()
      });

    function bu(FF) {
      let {
        cmd: WF,
        data: SF
      } = FF;
      switch (WF) {
        case jC.AUTHORIZE:
          return nC.parse(SF);
        case jC.CAPTURE_SHORTCUT:
          return vA.parse(SF);
        case jC.ENCOURAGE_HW_ACCELERATION:
          return CA.parse(SF);
        case jC.GET_CHANNEL:
          return wC.parse(SF);
        case jC.GET_CHANNELS:
          return XC.parse(SF);
        case jC.GET_CHANNEL_PERMISSIONS:
          return AA.parse(SF);
        case jC.GET_GUILD:
          return KC.parse(SF);
        case jC.GET_GUILDS:
          return HC.parse(SF);
        case jC.GET_PLATFORM_BEHAVIORS:
          return uA.parse(SF);
        case jC.GET_CHANNEL:
          return wC.parse(SF);
        case jC.SELECT_TEXT_CHANNEL:
          return BC.parse(SF);
        case jC.SELECT_VOICE_CHANNEL:
          return UC.parse(SF);
        case jC.SET_ACTIVITY:
          return JC.parse(SF);
        case jC.GET_SKUS_EMBEDDED:
          return pC.parse(SF);
        case jC.GET_ENTITLEMENTS_EMBEDDED:
          return lC.parse(SF);
        case jC.SET_CONFIG:
          return WA.parse(SF);
        case jC.START_PURCHASE:
          return FA.parse(SF);
        case jC.SUBSCRIBE:
        case jC.UNSUBSCRIBE:
          return jA.parse(SF);
        case jC.USER_SETTINGS_GET_LOCALE:
          return SA.parse(SF);
        case jC.OPEN_EXTERNAL_LINK:
        case jC.SET_ORIENTATION_LOCK_STATE:
        case jC.SET_CERTIFIED_DEVICES:
        case jC.SEND_ANALYTICS_EVENT:
        case jC.OPEN_INVITE_DIALOG:
        case jC.CAPTURE_LOG:
        case jC.GET_SKUS:
        case jC.GET_ENTITLEMENTS:
          return sC.parse(SF);
        case jC.AUTHENTICATE:
        case jC.INITIATE_IMAGE_UPLOAD:
        case jC.OPEN_SHARE_MOMENT_DIALOG:
        case jC.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: FF
          } = US[WF];
          return FF.parse(SF);
        default:
          ! function(FF, WF) {
            throw WF
          }(0, new Error(`Unrecognized command ${WF}`))
      }
    }
    jS({
      frame_id: cS(),
      platform: dS(GS).optional().nullable()
    }), jS({
      v: hS(1),
      encoding: hS("json").optional(),
      client_id: cS(),
      frame_id: cS()
    });
    const dA = jS({
        code: GW(),
        message: cS().optional()
      }),
      PA = jS({
        evt: cS().nullable(),
        nonce: cS().nullable(),
        data: wW().nullable(),
        cmd: cS()
      }).passthrough();

    function RA(FF) {
      const WF = PA.parse(FF);
      return null != WF.evt ? WF.evt === MC ? zA.parse(WF) : function(FF) {
        const WF = FF.evt;
        if (!(WF in cA)) throw new Error(`Unrecognized event type ${FF.evt}`);
        return yA[WF].payload.parse(FF)
      }(fC.parse(WF)) : function(FF) {
        return Object.assign(Object.assign({}, FF), {
          data: bu(FF)
        })
      }(hA.passthrough().parse(WF))
    }

    function iu(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const AF = vC.extend({
        cmd: hS(WF),
        data: SF
      });
      return async SF => {
        const uF = await FF({
          cmd: WF,
          args: SF,
          transfer: CF(SF)
        });
        return AF.parse(uF).data
      }
    }

    function eA(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const SF = US[FF].response,
        CF = vC.extend({
          cmd: hS(FF),
          data: SF
        });
      return SF => async AF => {
        const uF = await SF({
          cmd: FF,
          args: AF,
          transfer: WF(AF)
        });
        return CF.parse(uF).data
      }
    }
    const EA = eA(KS.AUTHENTICATE),
      QA = FF => iu(FF, jC.AUTHORIZE, nC),
      ru = FF => iu(FF, jC.CAPTURE_LOG, sC),
      gu = FF => iu(FF, jC.ENCOURAGE_HW_ACCELERATION, CA),
      tu = FF => iu(FF, jC.GET_ENTITLEMENTS_EMBEDDED, lC),
      TA = FF => iu(FF, jC.GET_SKUS_EMBEDDED, pC),
      au = FF => iu(FF, jC.GET_CHANNEL_PERMISSIONS, AA),
      ku = FF => iu(FF, jC.GET_PLATFORM_BEHAVIORS, uA),
      qu = FF => iu(FF, jC.OPEN_EXTERNAL_LINK, sC),
      VA = FF => iu(FF, jC.OPEN_INVITE_DIALOG, sC),
      NA = eA(KS.OPEN_SHARE_MOMENT_DIALOG);
    CC.lW({
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
      type: CC.shape.type.optional(),
      instance: CC.shape.instance.optional()
    }).nullable();
    const DA = FF => iu(FF, jC.SET_ACTIVITY, JC),
      LA = FF => iu(FF, jC.SET_CONFIG, WA);
    const mu = FF => ({
        lock_state: FF.lock_state,
        picture_in_picture_lock_state: FF.picture_in_picture_lock_state
      }),
      OA = FF => function(FF) {
        let {
          sendCommand: WF,
          cmd: SF,
          response: CF,
          fallbackTransform: AF,
          transferTransform: uF = () => {}
        } = FF;
        const hF = vC.extend({
          cmd: hS(SF),
          data: CF
        });
        return async FF => {
          try {
            const CF = await WF({
              cmd: SF,
              args: FF,
              transfer: uF(FF)
            });
            return hF.parse(CF).data
          } catch (CF) {
            if (CF.code === MS.INVALID_PAYLOAD) {
              const CF = AF(FF),
                bW = await WF({
                  cmd: SF,
                  args: CF,
                  transfer: uF(CF)
                });
              return hF.parse(bW).data
            }
            throw CF
          }
        }
      }({
        sendCommand: FF,
        cmd: jC.SET_ORIENTATION_LOCK_STATE,
        response: sC,
        fallbackTransform: mu
      }),
      xu = FF => iu(FF, jC.START_PURCHASE, FA),
      ZA = FF => iu(FF, jC.USER_SETTINGS_GET_LOCALE, SA),
      oA = eA(KS.INITIATE_IMAGE_UPLOAD),
      YA = FF => iu(FF, jC.GET_CHANNEL, wC),
      MA = eA(KS.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var cu = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function GA(FF) {
      return "string" === typeof FF && cu.test(FF)
    }
    for (var zu = [], IA = 0; IA < 256; ++IA) zu.push((IA + 256).toString(16).substr(1));

    function fA(FF) {
      var WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        SF = (zu[FF[WF + 0]] + zu[FF[WF + 1]] + zu[FF[WF + 2]] + zu[FF[WF + 3]] + "-" + zu[FF[WF + 4]] + zu[FF[WF + 5]] + "-" + zu[FF[WF + 6]] + zu[FF[WF + 7]] + "-" + zu[FF[WF + 8]] + zu[FF[WF + 9]] + "-" + zu[FF[WF + 10]] + zu[FF[WF + 11]] + zu[FF[WF + 12]] + zu[FF[WF + 13]] + zu[FF[WF + 14]] + zu[FF[WF + 15]]).toLowerCase();
      if (!GA(SF)) throw TypeError("Stringified UUID is invalid");
      return SF
    }
    var yu;

    function sA(FF, WF, SF) {
      function CF(FF, CF, AF, uF) {
        if ("string" === typeof FF && (FF = function(FF) {
            FF = unescape(encodeURIComponent(FF));
            for (var WF = [], SF = 0; SF < FF.length; ++SF) WF.push(FF.charCodeAt(SF));
            return WF
          }(FF)), "string" === typeof CF && (CF = function(FF) {
            if (!GA(FF)) throw TypeError("Invalid UUID");
            var WF, SF = new Uint8Array(16);
            return SF[0] = (WF = parseInt(FF.slice(0, 8), 16)) >>> 24, SF[1] = WF >>> 16 & 255, SF[2] = WF >>> 8 & 255, SF[3] = 255 & WF, SF[4] = (WF = parseInt(FF.slice(9, 13), 16)) >>> 8, SF[5] = 255 & WF, SF[6] = (WF = parseInt(FF.slice(14, 18), 16)) >>> 8, SF[7] = 255 & WF, SF[8] = (WF = parseInt(FF.slice(19, 23), 16)) >>> 8, SF[9] = 255 & WF, SF[10] = (WF = parseInt(FF.slice(24, 36), 16)) / 1099511627776 & 255, SF[11] = WF / 4294967296 & 255, SF[12] = WF >>> 24 & 255, SF[13] = WF >>> 16 & 255, SF[14] = WF >>> 8 & 255, SF[15] = 255 & WF, SF
          }(CF)), 16 !== CF.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var hF = new Uint8Array(16 + FF.length);
        if (hF.set(CF), hF.set(FF, CF.length), (hF = SF(hF))[6] = 15 & hF[6] | WF, hF[8] = 63 & hF[8] | 128, AF) {
          uF = uF || 0;
          for (var bW = 0; bW < 16; ++bW) AF[uF + bW] = hF[bW];
          return AF
        }
        return fA(hF)
      }
      try {
        CF.name = FF
      } catch (AF) {}
      return CF.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", CF.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", CF
    }

    function nA(FF) {
      return 14 + (FF + 64 >>> 9 << 4) + 1
    }

    function HA(FF, WF) {
      var SF = (65535 & FF) + (65535 & WF);
      return (FF >> 16) + (WF >> 16) + (SF >> 16) << 16 | 65535 & SF
    }

    function KA(FF, WF, SF, CF, AF, uF) {
      return HA((hF = HA(HA(WF, FF), HA(CF, uF))) << (bW = AF) | hF >>> 32 - bW, SF);
      var hF, bW
    }

    function wA(FF, WF, SF, CF, AF, uF, hF) {
      return KA(WF & SF | ~WF & CF, FF, WF, AF, uF, hF)
    }

    function XA(FF, WF, SF, CF, AF, uF, hF) {
      return KA(WF & CF | SF & ~CF, FF, WF, AF, uF, hF)
    }

    function UA(FF, WF, SF, CF, AF, uF, hF) {
      return KA(WF ^ SF ^ CF, FF, WF, AF, uF, hF)
    }

    function BA(FF, WF, SF, CF, AF, uF, hF) {
      return KA(SF ^ (WF | ~CF), FF, WF, AF, uF, hF)
    }
    sA("v3", 48, (function(FF) {
      if ("string" === typeof FF) {
        var WF = unescape(encodeURIComponent(FF));
        FF = new Uint8Array(WF.length);
        for (var SF = 0; SF < WF.length; ++SF) FF[SF] = WF.charCodeAt(SF)
      }
      return function(FF) {
        for (var WF = [], SF = 32 * FF.length, CF = "0123456789abcdef", AF = 0; AF < SF; AF += 8) {
          var uF = FF[AF >> 5] >>> AF % 32 & 255,
            hF = parseInt(CF.charAt(uF >>> 4 & 15) + CF.charAt(15 & uF), 16);
          WF.push(hF)
        }
        return WF
      }(function(FF, WF) {
        FF[WF >> 5] |= 128 << WF % 32, FF[nA(WF) - 1] = WF;
        for (var SF = 1732584193, CF = -271733879, AF = -1732584194, uF = 271733878, hF = 0; hF < FF.length; hF += 16) {
          var bW = SF,
            dF = CF,
            PF = AF,
            RF = uF;
          SF = wA(SF, CF, AF, uF, FF[hF], 7, -680876936), uF = wA(uF, SF, CF, AF, FF[hF + 1], 12, -389564586), AF = wA(AF, uF, SF, CF, FF[hF + 2], 17, 606105819), CF = wA(CF, AF, uF, SF, FF[hF + 3], 22, -1044525330), SF = wA(SF, CF, AF, uF, FF[hF + 4], 7, -176418897), uF = wA(uF, SF, CF, AF, FF[hF + 5], 12, 1200080426), AF = wA(AF, uF, SF, CF, FF[hF + 6], 17, -1473231341), CF = wA(CF, AF, uF, SF, FF[hF + 7], 22, -45705983), SF = wA(SF, CF, AF, uF, FF[hF + 8], 7, 1770035416), uF = wA(uF, SF, CF, AF, FF[hF + 9], 12, -1958414417), AF = wA(AF, uF, SF, CF, FF[hF + 10], 17, -42063), CF = wA(CF, AF, uF, SF, FF[hF + 11], 22, -1990404162), SF = wA(SF, CF, AF, uF, FF[hF + 12], 7, 1804603682), uF = wA(uF, SF, CF, AF, FF[hF + 13], 12, -40341101), AF = wA(AF, uF, SF, CF, FF[hF + 14], 17, -1502002290), SF = XA(SF, CF = wA(CF, AF, uF, SF, FF[hF + 15], 22, 1236535329), AF, uF, FF[hF + 1], 5, -165796510), uF = XA(uF, SF, CF, AF, FF[hF + 6], 9, -1069501632), AF = XA(AF, uF, SF, CF, FF[hF + 11], 14, 643717713), CF = XA(CF, AF, uF, SF, FF[hF], 20, -373897302), SF = XA(SF, CF, AF, uF, FF[hF + 5], 5, -701558691), uF = XA(uF, SF, CF, AF, FF[hF + 10], 9, 38016083), AF = XA(AF, uF, SF, CF, FF[hF + 15], 14, -660478335), CF = XA(CF, AF, uF, SF, FF[hF + 4], 20, -405537848), SF = XA(SF, CF, AF, uF, FF[hF + 9], 5, 568446438), uF = XA(uF, SF, CF, AF, FF[hF + 14], 9, -1019803690), AF = XA(AF, uF, SF, CF, FF[hF + 3], 14, -187363961), CF = XA(CF, AF, uF, SF, FF[hF + 8], 20, 1163531501), SF = XA(SF, CF, AF, uF, FF[hF + 13], 5, -1444681467), uF = XA(uF, SF, CF, AF, FF[hF + 2], 9, -51403784), AF = XA(AF, uF, SF, CF, FF[hF + 7], 14, 1735328473), SF = UA(SF, CF = XA(CF, AF, uF, SF, FF[hF + 12], 20, -1926607734), AF, uF, FF[hF + 5], 4, -378558), uF = UA(uF, SF, CF, AF, FF[hF + 8], 11, -2022574463), AF = UA(AF, uF, SF, CF, FF[hF + 11], 16, 1839030562), CF = UA(CF, AF, uF, SF, FF[hF + 14], 23, -35309556), SF = UA(SF, CF, AF, uF, FF[hF + 1], 4, -1530992060), uF = UA(uF, SF, CF, AF, FF[hF + 4], 11, 1272893353), AF = UA(AF, uF, SF, CF, FF[hF + 7], 16, -155497632), CF = UA(CF, AF, uF, SF, FF[hF + 10], 23, -1094730640), SF = UA(SF, CF, AF, uF, FF[hF + 13], 4, 681279174), uF = UA(uF, SF, CF, AF, FF[hF], 11, -358537222), AF = UA(AF, uF, SF, CF, FF[hF + 3], 16, -722521979), CF = UA(CF, AF, uF, SF, FF[hF + 6], 23, 76029189), SF = UA(SF, CF, AF, uF, FF[hF + 9], 4, -640364487), uF = UA(uF, SF, CF, AF, FF[hF + 12], 11, -421815835), AF = UA(AF, uF, SF, CF, FF[hF + 15], 16, 530742520), SF = BA(SF, CF = UA(CF, AF, uF, SF, FF[hF + 2], 23, -995338651), AF, uF, FF[hF], 6, -198630844), uF = BA(uF, SF, CF, AF, FF[hF + 7], 10, 1126891415), AF = BA(AF, uF, SF, CF, FF[hF + 14], 15, -1416354905), CF = BA(CF, AF, uF, SF, FF[hF + 5], 21, -57434055), SF = BA(SF, CF, AF, uF, FF[hF + 12], 6, 1700485571), uF = BA(uF, SF, CF, AF, FF[hF + 3], 10, -1894986606), AF = BA(AF, uF, SF, CF, FF[hF + 10], 15, -1051523), CF = BA(CF, AF, uF, SF, FF[hF + 1], 21, -2054922799), SF = BA(SF, CF, AF, uF, FF[hF + 8], 6, 1873313359), uF = BA(uF, SF, CF, AF, FF[hF + 15], 10, -30611744), AF = BA(AF, uF, SF, CF, FF[hF + 6], 15, -1560198380), CF = BA(CF, AF, uF, SF, FF[hF + 13], 21, 1309151649), SF = BA(SF, CF, AF, uF, FF[hF + 4], 6, -145523070), uF = BA(uF, SF, CF, AF, FF[hF + 11], 10, -1120210379), AF = BA(AF, uF, SF, CF, FF[hF + 2], 15, 718787259), CF = BA(CF, AF, uF, SF, FF[hF + 9], 21, -343485551), SF = HA(SF, bW), CF = HA(CF, dF), AF = HA(AF, PF), uF = HA(uF, RF)
        }
        return [SF, CF, AF, uF]
      }(function(FF) {
        if (0 === FF.length) return [];
        for (var WF = 8 * FF.length, SF = new Uint32Array(nA(WF)), CF = 0; CF < WF; CF += 8) SF[CF >> 5] |= (255 & FF[CF / 8]) << CF % 32;
        return SF
      }(FF), 8 * FF.length))
    }));
    var ju = new Uint8Array(16);

    function vu() {
      if (!yu && !(yu = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return yu(ju)
    }

    function JA(FF, WF, SF) {
      var CF = (FF = FF || {}).random || (FF.rng || vu)();
      if (CF[6] = 15 & CF[6] | 64, CF[8] = 63 & CF[8] | 128, WF) {
        SF = SF || 0;
        for (var AF = 0; AF < 16; ++AF) WF[SF + AF] = CF[AF];
        return WF
      }
      return fA(CF)
    }

    function pA(FF, WF, SF, CF) {
      switch (FF) {
        case 0:
          return WF & SF ^ ~WF & CF;
        case 1:
        case 3:
          return WF ^ SF ^ CF;
        case 2:
          return WF & SF ^ WF & CF ^ SF & CF
      }
    }

    function lA(FF, WF) {
      return FF << WF | FF >>> 32 - WF
    }
    sA("v5", 80, (function(FF) {
      var WF = [1518500249, 1859775393, 2400959708, 3395469782],
        SF = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof FF) {
        var CF = unescape(encodeURIComponent(FF));
        FF = [];
        for (var AF = 0; AF < CF.length; ++AF) FF.push(CF.charCodeAt(AF))
      } else Array.isArray(FF) || (FF = Array.prototype.slice.call(FF));
      FF.push(128);
      for (var uF = FF.length / 4 + 2, hF = Math.ceil(uF / 16), bW = new Array(hF), dF = 0; dF < hF; ++dF) {
        for (var PF = new Uint32Array(16), RF = 0; RF < 16; ++RF) PF[RF] = FF[64 * dF + 4 * RF] << 24 | FF[64 * dF + 4 * RF + 1] << 16 | FF[64 * dF + 4 * RF + 2] << 8 | FF[64 * dF + 4 * RF + 3];
        bW[dF] = PF
      }
      bW[hF - 1][14] = 8 * (FF.length - 1) / Math.pow(2, 32), bW[hF - 1][14] = Math.floor(bW[hF - 1][14]), bW[hF - 1][15] = 8 * (FF.length - 1) & 4294967295;
      for (var iW = 0; iW < hF; ++iW) {
        for (var eF = new Uint32Array(80), EF = 0; EF < 16; ++EF) eF[EF] = bW[iW][EF];
        for (var QF = 16; QF < 80; ++QF) eF[QF] = lA(eF[QF - 3] ^ eF[QF - 8] ^ eF[QF - 14] ^ eF[QF - 16], 1);
        for (var rW = SF[0], gW = SF[1], tW = SF[2], TF = SF[3], aW = SF[4], kW = 0; kW < 80; ++kW) {
          var qW = Math.floor(kW / 20),
            VF = lA(rW, 5) + pA(qW, gW, tW, TF) + aW + WF[qW] + eF[kW] >>> 0;
          aW = TF, TF = tW, tW = lA(gW, 30) >>> 0, gW = rW, rW = VF
        }
        SF[0] = SF[0] + rW >>> 0, SF[1] = SF[1] + gW >>> 0, SF[2] = SF[2] + tW >>> 0, SF[3] = SF[3] + TF >>> 0, SF[4] = SF[4] + aW >>> 0
      }
      return [SF[0] >> 24 & 255, SF[0] >> 16 & 255, SF[0] >> 8 & 255, 255 & SF[0], SF[1] >> 24 & 255, SF[1] >> 16 & 255, SF[1] >> 8 & 255, 255 & SF[1], SF[2] >> 24 & 255, SF[2] >> 16 & 255, SF[2] >> 8 & 255, 255 & SF[2], SF[3] >> 24 & 255, SF[3] >> 16 & 255, SF[3] >> 8 & 255, 255 & SF[3], SF[4] >> 24 & 255, SF[4] >> 16 & 255, SF[4] >> 8 & 255, 255 & SF[4]]
    }));
    class Fu extends Error {
      constructor(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(WF), this.code = FF, this.message = WF, this.name = "Discord SDK Error"
      }
    }
    const Wu = ["log", "warn", "debug", "info", "error"];
    var Su;
    ! function(FF) {
      FF[FF.HANDSHAKE = 0] = "HANDSHAKE", FF[FF.FRAME = 1] = "FRAME", FF[FF.CLOSE = 2] = "CLOSE", FF[FF.HELLO = 3] = "HELLO"
    }(Su || (Su = {}));
    const Cu = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class Au {
      getTransfer(FF) {
        var WF;
        switch (FF.cmd) {
          case jC.SUBSCRIBE:
          case jC.UNSUBSCRIBE:
            return;
          default:
            return null !== (WF = FF.transfer) && void 0 !== WF ? WF : void 0
        }
      }
      constructor(FF, WF) {
        var SF;
        if (this.eventBus = new PF, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = FF => {
            var WF;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const SF = JA();
            null === (WF = this.source) || void 0 === WF || WF.postMessage([Su.FRAME, Object.assign(Object.assign({}, FF), {
              nonce: SF
            })], this.sourceOrigin, this.getTransfer(FF));
            return new Promise(((FF, WF) => {
              this.pendingCommands.set(SF, {
                resolve: FF,
                reject: WF
              })
            }))
          }, this.commands = (SF = this.sendCommand, {
            authenticate: EA(SF),
            authorize: QA(SF),
            captureLog: ru(SF),
            encourageHardwareAcceleration: gu(SF),
            getChannel: YA(SF),
            getChannelPermissions: au(SF),
            getEntitlements: tu(SF),
            getPlatformBehaviors: ku(SF),
            getSkus: TA(SF),
            openExternalLink: qu(SF),
            openInviteDialog: VA(SF),
            openShareMomentDialog: NA(SF),
            setActivity: DA(SF),
            setConfig: LA(SF),
            setOrientationLockState: OA(SF),
            startPurchase: xu(SF),
            userSettingsGetLocale: ZA(SF),
            initiateImageUpload: oA(SF),
            getInstanceConnectedParticipants: MA(SF)
          }), this.handleMessage = FF => {
            if (!Cu.has(FF.origin)) return;
            const WF = FF.data;
            if (!Array.isArray(WF)) return;
            const [SF, CF] = WF;
            switch (SF) {
              case Su.HELLO:
                return;
              case Su.CLOSE:
                return this.handleClose(CF);
              case Su.HANDSHAKE:
                return this.handleHandshake();
              case Su.FRAME:
                return this.handleFrame(CF);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = FF, this.configuration = null !== WF && void 0 !== WF ? WF : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = GS.DESKTOP, this.guildId = null, void(this.channelId = null);
        const CF = new URLSearchParams(this._getSearch()),
          AF = CF.get("frame_id");
        if (!AF) throw new Error("frame_id query param is not defined");
        this.frameId = AF;
        const uF = CF.get("instance_id");
        if (!uF) throw new Error("instance_id query param is not defined");
        this.instanceId = uF;
        const hF = CF.get("platform");
        if (!hF) throw new Error("platform query param is not defined");
        if (hF !== GS.DESKTOP && hF !== GS.MOBILE) throw new Error(`Invalid query param "platform" of "${hF}". Valid values are "${GS.DESKTOP}" or "${GS.MOBILE}"`);
        this.platform = hF, this.guildId = CF.get("guild_id"), this.channelId = CF.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var FF;
          return [null !== (FF = window.parent.opener) && void 0 !== FF ? FF : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(FF, WF) {
        var SF;
        window.removeEventListener("message", this.handleMessage);
        const CF = JA();
        null === (SF = this.source) || void 0 === SF || SF.postMessage([Su.CLOSE, {
          code: FF,
          message: WF,
          nonce: CF
        }], this.sourceOrigin)
      }
      async subscribe(FF, WF) {
        for (var SF = arguments.length, CF = new Array(SF > 2 ? SF - 2 : 0), AF = 2; AF < SF; AF++) CF[AF - 2] = arguments[AF];
        const [uF] = CF, hF = this.eventBus.listenerCount(FF), bW = this.eventBus.on(FF, WF);
        return Object.values(cA).includes(FF) && FF !== cA.READY && 0 === hF && await this.sendCommand({
          cmd: jC.SUBSCRIBE,
          args: uF,
          evt: FF
        }), bW
      }
      async unsubscribe(FF, WF) {
        for (var SF = arguments.length, CF = new Array(SF > 2 ? SF - 2 : 0), AF = 2; AF < SF; AF++) CF[AF - 2] = arguments[AF];
        const [uF] = CF;
        return FF !== cA.READY && 1 === this.eventBus.listenerCount(FF) && await this.sendCommand({
          cmd: jC.UNSUBSCRIBE,
          evt: FF,
          args: uF
        }), this.eventBus.off(FF, WF)
      }
      async ready() {
        this.isReady || await new Promise((FF => {
          this.eventBus.once(cA.READY, FF)
        }))
      }
      handshake() {
        var FF;
        null === (FF = this.source) || void 0 === FF || FF.postMessage([Su.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(cA.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const FF = (FF, WF) => {
          this.commands.captureLog({
            level: FF,
            message: WF
          })
        };
        Wu.forEach((WF => {
          ! function(FF, WF, SF) {
            const CF = FF[WF],
              AF = FF;
            CF && (FF[WF] = function() {
              const FF = [].slice.call(arguments),
                uF = "" + FF.join(" ");
              SF(WF, uF), CF.apply(AF, FF)
            })
          }(console, WF, FF)
        }))
      }
      handleClose(FF) {
        dA.parse(FF)
      }
      handleHandshake() {}
      handleFrame(FF) {
        var WF, SF;
        let CF;
        try {
          CF = RA(FF)
        } catch (AF) {
          return console.error("Failed to parse", FF), void console.error(AF)
        }
        if ("DISPATCH" === CF.cmd) this.eventBus.emit(CF.evt, CF.data);
        else {
          if (CF.evt === MC) {
            if (null != CF.nonce) return null === (WF = this.pendingCommands.get(CF.nonce)) || void 0 === WF || WF.reject(CF.data), void this.pendingCommands.delete(CF.nonce);
            this.eventBus.emit("error", new Fu(CF.data.code, CF.data.message))
          }
          if (null == CF.nonce) return void console.error("Missing nonce", FF);
          null === (SF = this.pendingCommands.get(CF.nonce)) || void 0 === SF || SF.resolve(CF), this.pendingCommands.delete(CF.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var uu, hu = 1e9,
      bh = !0,
      du = "[DecimalError] ",
      Pu = du + "Invalid argument: ",
      Ru = du + "Exponent out of range: ",
      ih = Math.floor,
      eu = Math.pow,
      Eu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      Qu = 1e7,
      rh = 9007199254740991,
      gh = ih(1286742750677284.5),
      th = {};

    function Tu(FF, WF) {
      var SF, CF, AF, uF, hF, bW, dF, PF, RF = FF.constructor,
        iW = RF.precision;
      if (!FF.s || !WF.s) return WF.s || (WF = new RF(FF)), bh ? xh(WF, iW) : WF;
      if (dF = FF.d, PF = WF.d, hF = FF.e, AF = WF.e, dF = dF.slice(), uF = hF - AF) {
        for (uF < 0 ? (CF = dF, uF = -uF, bW = PF.length) : (CF = PF, AF = hF, bW = dF.length), uF > (bW = (hF = Math.ceil(iW / 7)) > bW ? hF + 1 : bW + 1) && (uF = bW, CF.length = 1), CF.reverse(); uF--;) CF.push(0);
        CF.reverse()
      }
      for ((bW = dF.length) - (uF = PF.length) < 0 && (uF = bW, CF = PF, PF = dF, dF = CF), SF = 0; uF;) SF = (dF[--uF] = dF[uF] + PF[uF] + SF) / Qu | 0, dF[uF] %= Qu;
      for (SF && (dF.unshift(SF), ++AF), bW = dF.length; 0 == dF[--bW];) dF.pop();
      return WF.d = dF, WF.e = AF, bh ? xh(WF, iW) : WF
    }

    function ah(FF, WF, SF) {
      if (FF !== ~~FF || FF < WF || FF > SF) throw Error(Pu + FF)
    }

    function kh(FF) {
      var WF, SF, CF, AF = FF.length - 1,
        uF = "",
        hF = FF[0];
      if (AF > 0) {
        for (uF += hF, WF = 1; WF < AF; WF++)(SF = 7 - (CF = FF[WF] + "").length) && (uF += Lu(SF)), uF += CF;
        (SF = 7 - (CF = (hF = FF[WF]) + "").length) && (uF += Lu(SF))
      } else if (0 === hF) return "0";
      for (; hF % 10 === 0;) hF /= 10;
      return uF + hF
    }
    th.absoluteValue = th.abs = function() {
      var FF = new this.constructor(this);
      return FF.s && (FF.s = 1), FF
    }, th.comparedTo = th.cmp = function(FF) {
      var WF, SF, CF, AF, uF = this;
      if (FF = new uF.constructor(FF), uF.s !== FF.s) return uF.s || -FF.s;
      if (uF.e !== FF.e) return uF.e > FF.e ^ uF.s < 0 ? 1 : -1;
      for (WF = 0, SF = (CF = uF.d.length) < (AF = FF.d.length) ? CF : AF; WF < SF; ++WF)
        if (uF.d[WF] !== FF.d[WF]) return uF.d[WF] > FF.d[WF] ^ uF.s < 0 ? 1 : -1;
      return CF === AF ? 0 : CF > AF ^ uF.s < 0 ? 1 : -1
    }, th.decimalPlaces = th.dp = function() {
      var FF = this,
        WF = FF.d.length - 1,
        SF = 7 * (WF - FF.e);
      if (WF = FF.d[WF])
        for (; WF % 10 == 0; WF /= 10) SF--;
      return SF < 0 ? 0 : SF
    }, th.dividedBy = th.div = function(FF) {
      return qh(this, new this.constructor(FF))
    }, th.dividedToIntegerBy = th.idiv = function(FF) {
      var WF = this.constructor;
      return xh(qh(this, new WF(FF), 0, 1), WF.precision)
    }, th.equals = th.eq = function(FF) {
      return !this.cmp(FF)
    }, th.exponent = function() {
      return Nu(this)
    }, th.greaterThan = th.gt = function(FF) {
      return this.cmp(FF) > 0
    }, th.greaterThanOrEqualTo = th.gte = function(FF) {
      return this.cmp(FF) >= 0
    }, th.isInteger = th.isint = function() {
      return this.e > this.d.length - 2
    }, th.isNegative = th.isneg = function() {
      return this.s < 0
    }, th.isPositive = th.ispos = function() {
      return this.s > 0
    }, th.isZero = function() {
      return 0 === this.s
    }, th.lessThan = th.lt = function(FF) {
      return this.cmp(FF) < 0
    }, th.lessThanOrEqualTo = th.lte = function(FF) {
      return this.cmp(FF) < 1
    }, th.logarithm = th.log = function(FF) {
      var WF, SF = this,
        CF = SF.constructor,
        AF = CF.precision,
        uF = AF + 5;
      if (void 0 === FF) FF = new CF(10);
      else if ((FF = new CF(FF)).s < 1 || FF.eq(uu)) throw Error(du + "NaN");
      if (SF.s < 1) throw Error(du + (SF.s ? "NaN" : "-Infinity"));
      return SF.eq(uu) ? new CF(0) : (bh = !1, WF = qh(mh(SF, uF), mh(FF, uF), uF), bh = !0, xh(WF, AF))
    }, th.minus = th.sub = function(FF) {
      var WF = this;
      return FF = new WF.constructor(FF), WF.s == FF.s ? Zu(WF, FF) : Tu(WF, (FF.s = -FF.s, FF))
    }, th.modulo = th.mod = function(FF) {
      var WF, SF = this,
        CF = SF.constructor,
        AF = CF.precision;
      if (!(FF = new CF(FF)).s) throw Error(du + "NaN");
      return SF.s ? (bh = !1, WF = qh(SF, FF, 0, 1).times(FF), bh = !0, SF.minus(WF)) : xh(new CF(SF), AF)
    }, th.naturalExponential = th.exp = function() {
      return Vu(this)
    }, th.naturalLogarithm = th.ln = function() {
      return mh(this)
    }, th.negated = th.neg = function() {
      var FF = new this.constructor(this);
      return FF.s = -FF.s || 0, FF
    }, th.plus = th.add = function(FF) {
      var WF = this;
      return FF = new WF.constructor(FF), WF.s == FF.s ? Tu(WF, FF) : Zu(WF, (FF.s = -FF.s, FF))
    }, th.precision = th.sd = function(FF) {
      var WF, SF, CF, AF = this;
      if (void 0 !== FF && FF !== !!FF && 1 !== FF && 0 !== FF) throw Error(Pu + FF);
      if (WF = Nu(AF) + 1, SF = 7 * (CF = AF.d.length - 1) + 1, CF = AF.d[CF]) {
        for (; CF % 10 == 0; CF /= 10) SF--;
        for (CF = AF.d[0]; CF >= 10; CF /= 10) SF++
      }
      return FF && WF > SF ? WF : SF
    }, th.squareRoot = th.sqrt = function() {
      var FF, WF, SF, CF, AF, uF, hF, bW = this,
        dF = bW.constructor;
      if (bW.s < 1) {
        if (!bW.s) return new dF(0);
        throw Error(du + "NaN")
      }
      for (FF = Nu(bW), bh = !1, 0 == (AF = Math.sqrt(+bW)) || AF == 1 / 0 ? (((WF = kh(bW.d)).length + FF) % 2 == 0 && (WF += "0"), AF = Math.sqrt(WF), FF = ih((FF + 1) / 2) - (FF < 0 || FF % 2), CF = new dF(WF = AF == 1 / 0 ? "1e" + FF : (WF = AF.toExponential()).slice(0, WF.indexOf("e") + 1) + FF)) : CF = new dF(AF.toString()), AF = hF = (SF = dF.precision) + 3;;)
        if (CF = (uF = CF).plus(qh(bW, uF, hF + 2)).times(.5), kh(uF.d).slice(0, hF) === (WF = kh(CF.d)).slice(0, hF)) {
          if (WF = WF.slice(hF - 3, hF + 1), AF == hF && "4999" == WF) {
            if (xh(uF, SF + 1, 0), uF.times(uF).eq(bW)) {
              CF = uF;
              break
            }
          } else if ("9999" != WF) break;
          hF += 4
        } return bh = !0, xh(CF, SF)
    }, th.times = th.mul = function(FF) {
      var WF, SF, CF, AF, uF, hF, bW, dF, PF, RF = this,
        iW = RF.constructor,
        eF = RF.d,
        EF = (FF = new iW(FF)).d;
      if (!RF.s || !FF.s) return new iW(0);
      for (FF.s *= RF.s, SF = RF.e + FF.e, (dF = eF.length) < (PF = EF.length) && (uF = eF, eF = EF, EF = uF, hF = dF, dF = PF, PF = hF), uF = [], CF = hF = dF + PF; CF--;) uF.push(0);
      for (CF = PF; --CF >= 0;) {
        for (WF = 0, AF = dF + CF; AF > CF;) bW = uF[AF] + EF[CF] * eF[AF - CF - 1] + WF, uF[AF--] = bW % Qu | 0, WF = bW / Qu | 0;
        uF[AF] = (uF[AF] + WF) % Qu | 0
      }
      for (; !uF[--hF];) uF.pop();
      return WF ? ++SF : uF.shift(), FF.d = uF, FF.e = SF, bh ? xh(FF, iW.precision) : FF
    }, th.toDecimalPlaces = th.todp = function(FF, WF) {
      var SF = this,
        CF = SF.constructor;
      return SF = new CF(SF), void 0 === FF ? SF : (ah(FF, 0, hu), void 0 === WF ? WF = CF.rounding : ah(WF, 0, 8), xh(SF, FF + Nu(SF) + 1, WF))
    }, th.toExponential = function(FF, WF) {
      var SF, CF = this,
        AF = CF.constructor;
      return void 0 === FF ? SF = ou(CF, !0) : (ah(FF, 0, hu), void 0 === WF ? WF = AF.rounding : ah(WF, 0, 8), SF = ou(CF = xh(new AF(CF), FF + 1, WF), !0, FF + 1)), SF
    }, th.toFixed = function(FF, WF) {
      var SF, CF, AF = this,
        uF = AF.constructor;
      return void 0 === FF ? ou(AF) : (ah(FF, 0, hu), void 0 === WF ? WF = uF.rounding : ah(WF, 0, 8), SF = ou((CF = xh(new uF(AF), FF + Nu(AF) + 1, WF)).abs(), !1, FF + Nu(CF) + 1), AF.isneg() && !AF.isZero() ? "-" + SF : SF)
    }, th.toInteger = th.toint = function() {
      var FF = this,
        WF = FF.constructor;
      return xh(new WF(FF), Nu(FF) + 1, WF.rounding)
    }, th.toNumber = function() {
      return +this
    }, th.toPower = th.pow = function(FF) {
      var WF, SF, CF, AF, uF, hF, bW = this,
        dF = bW.constructor,
        PF = +(FF = new dF(FF));
      if (!FF.s) return new dF(uu);
      if (!(bW = new dF(bW)).s) {
        if (FF.s < 1) throw Error(du + "Infinity");
        return bW
      }
      if (bW.eq(uu)) return bW;
      if (CF = dF.precision, FF.eq(uu)) return xh(bW, CF);
      if (hF = (WF = FF.e) >= (SF = FF.d.length - 1), uF = bW.s, hF) {
        if ((SF = PF < 0 ? -PF : PF) <= rh) {
          for (AF = new dF(uu), WF = Math.ceil(CF / 7 + 4), bh = !1; SF % 2 && Yu((AF = AF.times(bW)).d, WF), 0 !== (SF = ih(SF / 2));) Yu((bW = bW.times(bW)).d, WF);
          return bh = !0, FF.s < 0 ? new dF(uu).div(AF) : xh(AF, CF)
        }
      } else if (uF < 0) throw Error(du + "NaN");
      return uF = uF < 0 && 1 & FF.d[Math.max(WF, SF)] ? -1 : 1, bW.s = 1, bh = !1, AF = FF.times(mh(bW, CF + 12)), bh = !0, (AF = Vu(AF)).s = uF, AF
    }, th.toPrecision = function(FF, WF) {
      var SF, CF, AF = this,
        uF = AF.constructor;
      return void 0 === FF ? CF = ou(AF, (SF = Nu(AF)) <= uF.toExpNeg || SF >= uF.toExpPos) : (ah(FF, 1, hu), void 0 === WF ? WF = uF.rounding : ah(WF, 0, 8), CF = ou(AF = xh(new uF(AF), FF, WF), FF <= (SF = Nu(AF)) || SF <= uF.toExpNeg, FF)), CF
    }, th.toSignificantDigits = th.tosd = function(FF, WF) {
      var SF = this.constructor;
      return void 0 === FF ? (FF = SF.precision, WF = SF.rounding) : (ah(FF, 1, hu), void 0 === WF ? WF = SF.rounding : ah(WF, 0, 8)), xh(new SF(this), FF, WF)
    }, th.toString = th.valueOf = th.val = th.toJSON = th[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var FF = this,
        WF = Nu(FF),
        SF = FF.constructor;
      return ou(FF, WF <= SF.toExpNeg || WF >= SF.toExpPos)
    };
    var qh = function() {
      function FF(FF, WF) {
        var SF, CF = 0,
          AF = FF.length;
        for (FF = FF.slice(); AF--;) SF = FF[AF] * WF + CF, FF[AF] = SF % Qu | 0, CF = SF / Qu | 0;
        return CF && FF.unshift(CF), FF
      }

      function WF(FF, WF, SF, CF) {
        var AF, uF;
        if (SF != CF) uF = SF > CF ? 1 : -1;
        else
          for (AF = uF = 0; AF < SF; AF++)
            if (FF[AF] != WF[AF]) {
              uF = FF[AF] > WF[AF] ? 1 : -1;
              break
            } return uF
      }

      function SF(FF, WF, SF) {
        for (var CF = 0; SF--;) FF[SF] -= CF, CF = FF[SF] < WF[SF] ? 1 : 0, FF[SF] = CF * Qu + FF[SF] - WF[SF];
        for (; !FF[0] && FF.length > 1;) FF.shift()
      }
      return function(CF, AF, uF, hF) {
        var bW, dF, PF, RF, iW, eF, EF, QF, rW, gW, tW, TF, aW, kW, qW, VF, NF, DF, LF = CF.constructor,
          mW = CF.s == AF.s ? 1 : -1,
          OF = CF.d,
          xW = AF.d;
        if (!CF.s) return new LF(CF);
        if (!AF.s) throw Error(du + "Division by zero");
        for (dF = CF.e - AF.e, NF = xW.length, qW = OF.length, QF = (EF = new LF(mW)).d = [], PF = 0; xW[PF] == (OF[PF] || 0);) ++PF;
        if (xW[PF] > (OF[PF] || 0) && --dF, (TF = null == uF ? uF = LF.precision : hF ? uF + (Nu(CF) - Nu(AF)) + 1 : uF) < 0) return new LF(0);
        if (TF = TF / 7 + 2 | 0, PF = 0, 1 == NF)
          for (RF = 0, xW = xW[0], TF++;
            (PF < qW || RF) && TF--; PF++) aW = RF * Qu + (OF[PF] || 0), QF[PF] = aW / xW | 0, RF = aW % xW | 0;
        else {
          for ((RF = Qu / (xW[0] + 1) | 0) > 1 && (xW = FF(xW, RF), OF = FF(OF, RF), NF = xW.length, qW = OF.length), kW = NF, gW = (rW = OF.slice(0, NF)).length; gW < NF;) rW[gW++] = 0;
          (DF = xW.slice()).unshift(0), VF = xW[0], xW[1] >= Qu / 2 && ++VF;
          do {
            RF = 0, (bW = WF(xW, rW, NF, gW)) < 0 ? (tW = rW[0], NF != gW && (tW = tW * Qu + (rW[1] || 0)), (RF = tW / VF | 0) > 1 ? (RF >= Qu && (RF = Qu - 1), 1 == (bW = WF(iW = FF(xW, RF), rW, eF = iW.length, gW = rW.length)) && (RF--, SF(iW, NF < eF ? DF : xW, eF))) : (0 == RF && (bW = RF = 1), iW = xW.slice()), (eF = iW.length) < gW && iW.unshift(0), SF(rW, iW, gW), -1 == bW && (bW = WF(xW, rW, NF, gW = rW.length)) < 1 && (RF++, SF(rW, NF < gW ? DF : xW, gW)), gW = rW.length) : 0 === bW && (RF++, rW = [0]), QF[PF++] = RF, bW && rW[0] ? rW[gW++] = OF[kW] || 0 : (rW = [OF[kW]], gW = 1)
          } while ((kW++ < qW || void 0 !== rW[0]) && TF--)
        }
        return QF[0] || QF.shift(), EF.e = dF, xh(EF, hF ? uF + Nu(EF) + 1 : uF)
      }
    }();

    function Vu(FF, WF) {
      var SF, CF, AF, uF, hF, bW = 0,
        dF = 0,
        PF = FF.constructor,
        RF = PF.precision;
      if (Nu(FF) > 16) throw Error(Ru + Nu(FF));
      if (!FF.s) return new PF(uu);
      for (null == WF ? (bh = !1, hF = RF) : hF = WF, uF = new PF(.03125); FF.abs().gte(.1);) FF = FF.times(uF), dF += 5;
      for (hF += Math.log(eu(2, dF)) / Math.LN10 * 2 + 5 | 0, SF = CF = AF = new PF(uu), PF.precision = hF;;) {
        if (CF = xh(CF.times(FF), hF), SF = SF.times(++bW), kh((uF = AF.plus(qh(CF, SF, hF))).d).slice(0, hF) === kh(AF.d).slice(0, hF)) {
          for (; dF--;) AF = xh(AF.times(AF), hF);
          return PF.precision = RF, null == WF ? (bh = !0, xh(AF, RF)) : AF
        }
        AF = uF
      }
    }

    function Nu(FF) {
      for (var WF = 7 * FF.e, SF = FF.d[0]; SF >= 10; SF /= 10) WF++;
      return WF
    }

    function Du(FF, WF, SF) {
      if (WF > FF.LN10.sd()) throw bh = !0, SF && (FF.precision = SF), Error(du + "LN10 precision limit exceeded");
      return xh(new FF(FF.LN10), WF)
    }

    function Lu(FF) {
      for (var WF = ""; FF--;) WF += "0";
      return WF
    }

    function mh(FF, WF) {
      var SF, CF, AF, uF, hF, bW, dF, PF, RF, iW = 1,
        eF = FF,
        EF = eF.d,
        QF = eF.constructor,
        rW = QF.precision;
      if (eF.s < 1) throw Error(du + (eF.s ? "NaN" : "-Infinity"));
      if (eF.eq(uu)) return new QF(0);
      if (null == WF ? (bh = !1, PF = rW) : PF = WF, eF.eq(10)) return null == WF && (bh = !0), Du(QF, PF);
      if (PF += 10, QF.precision = PF, CF = (SF = kh(EF)).charAt(0), uF = Nu(eF), !(Math.abs(uF) < 15e14)) return dF = Du(QF, PF + 2, rW).times(uF + ""), eF = mh(new QF(CF + "." + SF.slice(1)), PF - 10).plus(dF), QF.precision = rW, null == WF ? (bh = !0, xh(eF, rW)) : eF;
      for (; CF < 7 && 1 != CF || 1 == CF && SF.charAt(1) > 3;) CF = (SF = kh((eF = eF.times(FF)).d)).charAt(0), iW++;
      for (uF = Nu(eF), CF > 1 ? (eF = new QF("0." + SF), uF++) : eF = new QF(CF + "." + SF.slice(1)), bW = hF = eF = qh(eF.minus(uu), eF.plus(uu), PF), RF = xh(eF.times(eF), PF), AF = 3;;) {
        if (hF = xh(hF.times(RF), PF), kh((dF = bW.plus(qh(hF, new QF(AF), PF))).d).slice(0, PF) === kh(bW.d).slice(0, PF)) return bW = bW.times(2), 0 !== uF && (bW = bW.plus(Du(QF, PF + 2, rW).times(uF + ""))), bW = qh(bW, new QF(iW), PF), QF.precision = rW, null == WF ? (bh = !0, xh(bW, rW)) : bW;
        bW = dF, AF += 2
      }
    }

    function Ou(FF, WF) {
      var SF, CF, AF;
      for ((SF = WF.indexOf(".")) > -1 && (WF = WF.replace(".", "")), (CF = WF.search(/e/i)) > 0 ? (SF < 0 && (SF = CF), SF += +WF.slice(CF + 1), WF = WF.substring(0, CF)) : SF < 0 && (SF = WF.length), CF = 0; 48 === WF.charCodeAt(CF);) ++CF;
      for (AF = WF.length; 48 === WF.charCodeAt(AF - 1);) --AF;
      if (WF = WF.slice(CF, AF)) {
        if (AF -= CF, SF = SF - CF - 1, FF.e = ih(SF / 7), FF.d = [], CF = (SF + 1) % 7, SF < 0 && (CF += 7), CF < AF) {
          for (CF && FF.d.push(+WF.slice(0, CF)), AF -= 7; CF < AF;) FF.d.push(+WF.slice(CF, CF += 7));
          CF = 7 - (WF = WF.slice(CF)).length
        } else CF -= AF;
        for (; CF--;) WF += "0";
        if (FF.d.push(+WF), bh && (FF.e > gh || FF.e < -gh)) throw Error(Ru + SF)
      } else FF.s = 0, FF.e = 0, FF.d = [0];
      return FF
    }

    function xh(FF, WF, SF) {
      var CF, AF, uF, hF, bW, dF, PF, RF, iW = FF.d;
      for (hF = 1, uF = iW[0]; uF >= 10; uF /= 10) hF++;
      if ((CF = WF - hF) < 0) CF += 7, AF = WF, PF = iW[RF = 0];
      else {
        if ((RF = Math.ceil((CF + 1) / 7)) >= (uF = iW.length)) return FF;
        for (PF = uF = iW[RF], hF = 1; uF >= 10; uF /= 10) hF++;
        AF = (CF %= 7) - 7 + hF
      }
      if (void 0 !== SF && (bW = PF / (uF = eu(10, hF - AF - 1)) % 10 | 0, dF = WF < 0 || void 0 !== iW[RF + 1] || PF % uF, dF = SF < 4 ? (bW || dF) && (0 == SF || SF == (FF.s < 0 ? 3 : 2)) : bW > 5 || 5 == bW && (4 == SF || dF || 6 == SF && (CF > 0 ? AF > 0 ? PF / eu(10, hF - AF) : 0 : iW[RF - 1]) % 10 & 1 || SF == (FF.s < 0 ? 8 : 7))), WF < 1 || !iW[0]) return dF ? (uF = Nu(FF), iW.length = 1, WF = WF - uF - 1, iW[0] = eu(10, (7 - WF % 7) % 7), FF.e = ih(-WF / 7) || 0) : (iW.length = 1, iW[0] = FF.e = FF.s = 0), FF;
      if (0 == CF ? (iW.length = RF, uF = 1, RF--) : (iW.length = RF + 1, uF = eu(10, 7 - CF), iW[RF] = AF > 0 ? (PF / eu(10, hF - AF) % eu(10, AF) | 0) * uF : 0), dF)
        for (;;) {
          if (0 == RF) {
            (iW[0] += uF) == Qu && (iW[0] = 1, ++FF.e);
            break
          }
          if (iW[RF] += uF, iW[RF] != Qu) break;
          iW[RF--] = 0, uF = 1
        }
      for (CF = iW.length; 0 === iW[--CF];) iW.pop();
      if (bh && (FF.e > gh || FF.e < -gh)) throw Error(Ru + Nu(FF));
      return FF
    }

    function Zu(FF, WF) {
      var SF, CF, AF, uF, hF, bW, dF, PF, RF, iW, eF = FF.constructor,
        EF = eF.precision;
      if (!FF.s || !WF.s) return WF.s ? WF.s = -WF.s : WF = new eF(FF), bh ? xh(WF, EF) : WF;
      if (dF = FF.d, iW = WF.d, CF = WF.e, PF = FF.e, dF = dF.slice(), hF = PF - CF) {
        for ((RF = hF < 0) ? (SF = dF, hF = -hF, bW = iW.length) : (SF = iW, CF = PF, bW = dF.length), hF > (AF = Math.max(Math.ceil(EF / 7), bW) + 2) && (hF = AF, SF.length = 1), SF.reverse(), AF = hF; AF--;) SF.push(0);
        SF.reverse()
      } else {
        for ((RF = (AF = dF.length) < (bW = iW.length)) && (bW = AF), AF = 0; AF < bW; AF++)
          if (dF[AF] != iW[AF]) {
            RF = dF[AF] < iW[AF];
            break
          } hF = 0
      }
      for (RF && (SF = dF, dF = iW, iW = SF, WF.s = -WF.s), bW = dF.length, AF = iW.length - bW; AF > 0; --AF) dF[bW++] = 0;
      for (AF = iW.length; AF > hF;) {
        if (dF[--AF] < iW[AF]) {
          for (uF = AF; uF && 0 === dF[--uF];) dF[uF] = Qu - 1;
          --dF[uF], dF[AF] += Qu
        }
        dF[AF] -= iW[AF]
      }
      for (; 0 === dF[--bW];) dF.pop();
      for (; 0 === dF[0]; dF.shift()) --CF;
      return dF[0] ? (WF.d = dF, WF.e = CF, bh ? xh(WF, EF) : WF) : new eF(0)
    }

    function ou(FF, WF, SF) {
      var CF, AF = Nu(FF),
        uF = kh(FF.d),
        hF = uF.length;
      return WF ? (SF && (CF = SF - hF) > 0 ? uF = uF.charAt(0) + "." + uF.slice(1) + Lu(CF) : hF > 1 && (uF = uF.charAt(0) + "." + uF.slice(1)), uF = uF + (AF < 0 ? "e" : "e+") + AF) : AF < 0 ? (uF = "0." + Lu(-AF - 1) + uF, SF && (CF = SF - hF) > 0 && (uF += Lu(CF))) : AF >= hF ? (uF += Lu(AF + 1 - hF), SF && (CF = SF - AF - 1) > 0 && (uF = uF + "." + Lu(CF))) : ((CF = AF + 1) < hF && (uF = uF.slice(0, CF) + "." + uF.slice(CF)), SF && (CF = SF - hF) > 0 && (AF + 1 === hF && (uF += "."), uF += Lu(CF))), FF.s < 0 ? "-" + uF : uF
    }

    function Yu(FF, WF) {
      if (FF.length > WF) return FF.length = WF, !0
    }

    function Mu(FF) {
      if (!FF || "object" !== typeof FF) throw Error(du + "Object expected");
      var WF, SF, CF, AF = ["precision", 1, hu, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (WF = 0; WF < AF.length; WF += 3)
        if (void 0 !== (CF = FF[SF = AF[WF]])) {
          if (!(ih(CF) === CF && CF >= AF[WF + 1] && CF <= AF[WF + 2])) throw Error(Pu + SF + ": " + CF);
          this[SF] = CF
        } if (void 0 !== (CF = FF[SF = "LN10"])) {
        if (CF != Math.LN10) throw Error(Pu + SF + ": " + CF);
        this[SF] = new this(CF)
      }
      return this
    }
    var ch = function FF(WF) {
      var SF, CF, AF;

      function uF(FF) {
        var WF = this;
        if (!(WF instanceof uF)) return new uF(FF);
        if (WF.constructor = uF, FF instanceof uF) return WF.s = FF.s, WF.e = FF.e, void(WF.d = (FF = FF.d) ? FF.slice() : FF);
        if ("number" === typeof FF) {
          if (0 * FF !== 0) throw Error(Pu + FF);
          if (FF > 0) WF.s = 1;
          else {
            if (!(FF < 0)) return WF.s = 0, WF.e = 0, void(WF.d = [0]);
            FF = -FF, WF.s = -1
          }
          return FF === ~~FF && FF < 1e7 ? (WF.e = 0, void(WF.d = [FF])) : Ou(WF, FF.toString())
        }
        if ("string" !== typeof FF) throw Error(Pu + FF);
        if (45 === FF.charCodeAt(0) ? (FF = FF.slice(1), WF.s = -1) : WF.s = 1, !Eu.test(FF)) throw Error(Pu + FF);
        Ou(WF, FF)
      }
      if (uF.prototype = th, uF.ROUND_UP = 0, uF.ROUND_DOWN = 1, uF.ROUND_CEIL = 2, uF.ROUND_FLOOR = 3, uF.ROUND_HALF_UP = 4, uF.ROUND_HALF_DOWN = 5, uF.ROUND_HALF_EVEN = 6, uF.ROUND_HALF_CEIL = 7, uF.ROUND_HALF_FLOOR = 8, uF.clone = FF, uF.config = uF.set = Mu, void 0 === WF && (WF = {}), WF)
        for (AF = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], SF = 0; SF < AF.length;) WF.hasOwnProperty(CF = AF[SF++]) || (WF[CF] = this[CF]);
      return uF.config(WF), uF
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    uu = new ch(1);
    var Gu;
    ! function(FF) {
      FF.AED = "aed", FF.AFN = "afn", FF.ALL = "all", FF.AMD = "amd", FF.ANG = "ang", FF.AOA = "aoa", FF.ARS = "ars", FF.AUD = "aud", FF.AWG = "awg", FF.AZN = "azn", FF.BAM = "bam", FF.BBD = "bbd", FF.BDT = "bdt", FF.BGN = "bgn", FF.BHD = "bhd", FF.BIF = "bif", FF.BMD = "bmd", FF.BND = "bnd", FF.BOB = "bob", FF.BOV = "bov", FF.BRL = "brl", FF.BSD = "bsd", FF.BTN = "btn", FF.BWP = "bwp", FF.BYN = "byn", FF.BYR = "byr", FF.BZD = "bzd", FF.CAD = "cad", FF.CDF = "cdf", FF.CHE = "che", FF.CHF = "chf", FF.CHW = "chw", FF.CLF = "clf", FF.CLP = "clp", FF.CNY = "cny", FF.COP = "cop", FF.COU = "cou", FF.CRC = "crc", FF.CUC = "cuc", FF.CUP = "cup", FF.CVE = "cve", FF.CZK = "czk", FF.DJF = "djf", FF.DKK = "dkk", FF.DOP = "dop", FF.DZD = "dzd", FF.EGP = "egp", FF.ERN = "ern", FF.ETB = "etb", FF.EUR = "eur", FF.FJD = "fjd", FF.FKP = "fkp", FF.GBP = "gbp", FF.GEL = "gel", FF.GHS = "ghs", FF.GIP = "gip", FF.GMD = "gmd", FF.GNF = "gnf", FF.GTQ = "gtq", FF.GYD = "gyd", FF.HKD = "hkd", FF.HNL = "hnl", FF.HRK = "hrk", FF.HTG = "htg", FF.HUF = "huf", FF.IDR = "idr", FF.ILS = "ils", FF.INR = "inr", FF.IQD = "iqd", FF.IRR = "irr", FF.ISK = "isk", FF.JMD = "jmd", FF.JOD = "jod", FF.JPY = "jpy", FF.KES = "kes", FF.KGS = "kgs", FF.KHR = "khr", FF.KMF = "kmf", FF.KPW = "kpw", FF.KRW = "krw", FF.KWD = "kwd", FF.KYD = "kyd", FF.KZT = "kzt", FF.LAK = "lak", FF.LBP = "lbp", FF.LKR = "lkr", FF.LRD = "lrd", FF.LSL = "lsl", FF.LTL = "ltl", FF.LVL = "lvl", FF.LYD = "lyd", FF.MAD = "mad", FF.MDL = "mdl", FF.MGA = "mga", FF.MKD = "mkd", FF.MMK = "mmk", FF.MNT = "mnt", FF.MOP = "mop", FF.MRO = "mro", FF.MUR = "mur", FF.MVR = "mvr", FF.MWK = "mwk", FF.MXN = "mxn", FF.MXV = "mxv", FF.MYR = "myr", FF.MZN = "mzn", FF.NAD = "nad", FF.NGN = "ngn", FF.NIO = "nio", FF.NOK = "nok", FF.NPR = "npr", FF.NZD = "nzd", FF.OMR = "omr", FF.PAB = "pab", FF.PEN = "pen", FF.PGK = "pgk", FF.PHP = "php", FF.PKR = "pkr", FF.PLN = "pln", FF.PYG = "pyg", FF.QAR = "qar", FF.RON = "ron", FF.RSD = "rsd", FF.RUB = "rub", FF.RWF = "rwf", FF.SAR = "sar", FF.SBD = "sbd", FF.SCR = "scr", FF.SDG = "sdg", FF.SEK = "sek", FF.SGD = "sgd", FF.SHP = "shp", FF.SLL = "sll", FF.SOS = "sos", FF.SRD = "srd", FF.SSP = "ssp", FF.STD = "std", FF.SVC = "svc", FF.SYP = "syp", FF.SZL = "szl", FF.THB = "thb", FF.TJS = "tjs", FF.TMT = "tmt", FF.TND = "tnd", FF.TOP = "top", FF.TRY = "try", FF.TTD = "ttd", FF.TWD = "twd", FF.TZS = "tzs", FF.UAH = "uah", FF.UGX = "ugx", FF.USD = "usd", FF.USN = "usn", FF.USS = "uss", FF.UYI = "uyi", FF.UYU = "uyu", FF.UZS = "uzs", FF.VEF = "vef", FF.VND = "vnd", FF.VUV = "vuv", FF.WST = "wst", FF.XAF = "xaf", FF.XAG = "xag", FF.XAU = "xau", FF.XBA = "xba", FF.XBB = "xbb", FF.XBC = "xbc", FF.XBD = "xbd", FF.XCD = "xcd", FF.XDR = "xdr", FF.XFU = "xfu", FF.XOF = "xof", FF.XPD = "xpd", FF.XPF = "xpf", FF.XPT = "xpt", FF.XSU = "xsu", FF.XTS = "xts", FF.XUA = "xua", FF.YER = "yer", FF.ZAR = "zar", FF.ZMW = "zmw", FF.ZWL = "zwl"
    }(Gu || (Gu = {}));
    Gu.AED, Gu.AFN, Gu.ALL, Gu.AMD, Gu.ANG, Gu.AOA, Gu.ARS, Gu.AUD, Gu.AWG, Gu.AZN, Gu.BAM, Gu.BBD, Gu.BDT, Gu.BGN, Gu.BHD, Gu.BIF, Gu.BMD, Gu.BND, Gu.BOB, Gu.BOV, Gu.BRL, Gu.BSD, Gu.BTN, Gu.BWP, Gu.BYR, Gu.BYN, Gu.BZD, Gu.CAD, Gu.CDF, Gu.CHE, Gu.CHF, Gu.CHW, Gu.CLF, Gu.CLP, Gu.CNY, Gu.COP, Gu.COU, Gu.CRC, Gu.CUC, Gu.CUP, Gu.CVE, Gu.CZK, Gu.DJF, Gu.DKK, Gu.DOP, Gu.DZD, Gu.EGP, Gu.ERN, Gu.ETB, Gu.EUR, Gu.FJD, Gu.FKP, Gu.GBP, Gu.GEL, Gu.GHS, Gu.GIP, Gu.GMD, Gu.GNF, Gu.GTQ, Gu.GYD, Gu.HKD, Gu.HNL, Gu.HRK, Gu.HTG, Gu.HUF, Gu.IDR, Gu.ILS, Gu.INR, Gu.IQD, Gu.IRR, Gu.ISK, Gu.JMD, Gu.JOD, Gu.JPY, Gu.KES, Gu.KGS, Gu.KHR, Gu.KMF, Gu.KPW, Gu.KRW, Gu.KWD, Gu.KYD, Gu.KZT, Gu.LAK, Gu.LBP, Gu.LKR, Gu.LRD, Gu.LSL, Gu.LTL, Gu.LVL, Gu.LYD, Gu.MAD, Gu.MDL, Gu.MGA, Gu.MKD, Gu.MMK, Gu.MNT, Gu.MOP, Gu.MRO, Gu.MUR, Gu.MVR, Gu.MWK, Gu.MXN, Gu.MXV, Gu.MYR, Gu.MZN, Gu.NAD, Gu.NGN, Gu.NIO, Gu.NOK, Gu.NPR, Gu.NZD, Gu.OMR, Gu.PAB, Gu.PEN, Gu.PGK, Gu.PHP, Gu.PKR, Gu.PLN, Gu.PYG, Gu.QAR, Gu.RON, Gu.RSD, Gu.RUB, Gu.RWF, Gu.SAR, Gu.SBD, Gu.SCR, Gu.SDG, Gu.SEK, Gu.SGD, Gu.SHP, Gu.SLL, Gu.SOS, Gu.SRD, Gu.SSP, Gu.STD, Gu.SVC, Gu.SYP, Gu.SZL, Gu.THB, Gu.TJS, Gu.TMT, Gu.TND, Gu.TOP, Gu.TRY, Gu.TTD, Gu.TWD, Gu.TZS, Gu.UAH, Gu.UGX, Gu.USD, Gu.USN, Gu.USS, Gu.UYI, Gu.UYU, Gu.UZS, Gu.VEF, Gu.VND, Gu.VUV, Gu.WST, Gu.XAF, Gu.XAG, Gu.XAU, Gu.XBA, Gu.XBB, Gu.XBC, Gu.XBD, Gu.XCD, Gu.XDR, Gu.XFU, Gu.XOF, Gu.XPD, Gu.XPF, Gu.XPT, Gu.XSU, Gu.XTS, Gu.XUA, Gu.YER, Gu.ZAR, Gu.ZMW, Gu.ZWL;
    var zh = {
      exports: {}
    };
    ! function(FF, WF) {
      var SF = "__lodash_hash_undefined__",
        CF = 9007199254740991,
        uF = "[object Arguments]",
        hF = "[object Array]",
        bW = "[object Boolean]",
        dF = "[object Date]",
        PF = "[object Error]",
        RF = "[object Function]",
        iW = "[object Map]",
        eF = "[object Number]",
        EF = "[object Object]",
        QF = "[object Promise]",
        rW = "[object RegExp]",
        gW = "[object Set]",
        tW = "[object String]",
        TF = "[object Symbol]",
        aW = "[object WeakMap]",
        kW = "[object ArrayBuffer]",
        qW = "[object DataView]",
        VF = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        NF = /^\w*$/,
        DF = /^\./,
        LF = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        mW = /\\(\\)?/g,
        OF = /^\[object .+?Constructor\]$/,
        xW = /^(?:0|[1-9]\d*)$/,
        ZF = {};
      ZF["[object Float32Array]"] = ZF["[object Float64Array]"] = ZF["[object Int8Array]"] = ZF["[object Int16Array]"] = ZF["[object Int32Array]"] = ZF["[object Uint8Array]"] = ZF["[object Uint8ClampedArray]"] = ZF["[object Uint16Array]"] = ZF["[object Uint32Array]"] = !0, ZF[uF] = ZF[hF] = ZF[kW] = ZF[bW] = ZF[qW] = ZF[dF] = ZF[PF] = ZF[RF] = ZF[iW] = ZF[eF] = ZF[EF] = ZF[rW] = ZF[gW] = ZF[tW] = ZF[aW] = !1;
      var oF = "object" == typeof AF && AF && AF.Object === Object && AF,
        YF = "object" == typeof self && self && self.Object === Object && self,
        MF = oF || YF || Function("return this")(),
        cW = WF && !WF.nodeType && WF,
        GF = cW && FF && !FF.nodeType && FF,
        zW = GF && GF.exports === cW && oF.process,
        IF = function() {
          try {
            return zW && zW.binding("util")
          } catch (FF) {}
        }(),
        fF = IF && IF.isTypedArray;

      function yW(FF, WF) {
        for (var SF = -1, CF = FF ? FF.length : 0; ++SF < CF && !1 !== WF(FF[SF], SF, FF););
        return FF
      }

      function sF(FF, WF) {
        for (var SF = -1, CF = FF ? FF.length : 0; ++SF < CF;)
          if (WF(FF[SF], SF, FF)) return !0;
        return !1
      }

      function nF(FF) {
        var WF = !1;
        if (null != FF && "function" != typeof FF.toString) try {
          WF = !!(FF + "")
        } catch (SF) {}
        return WF
      }

      function HF(FF) {
        var WF = -1,
          SF = Array(FF.size);
        return FF.forEach((function(FF, CF) {
          SF[++WF] = [CF, FF]
        })), SF
      }

      function KF(FF, WF) {
        return function(SF) {
          return FF(WF(SF))
        }
      }

      function wF(FF) {
        var WF = -1,
          SF = Array(FF.size);
        return FF.forEach((function(FF) {
          SF[++WF] = FF
        })), SF
      }
      var XF = Array.prototype,
        UF = Function.prototype,
        BF = Object.prototype,
        jW = MF["__core-js_shared__"],
        vW = function() {
          var FF = /[^.]+$/.exec(jW && jW.keys && jW.keys.IE_PROTO || "");
          return FF ? "Symbol(src)_1." + FF : ""
        }(),
        JF = UF.toString,
        pF = BF.hasOwnProperty,
        lF = BF.toString,
        FW = RegExp("^" + JF.call(pF).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        WW = MF.Symbol,
        SW = MF.Uint8Array,
        CW = KF(Object.getPrototypeOf, Object),
        AW = Object.create,
        uW = BF.propertyIsEnumerable,
        hW = XF.splice,
        bS = KF(Object.keys, Object),
        dW = HW(MF, "DataView"),
        PW = HW(MF, "Map"),
        RW = HW(MF, "Promise"),
        iS = HW(MF, "Set"),
        eW = HW(MF, "WeakMap"),
        EW = HW(Object, "create"),
        QW = JW(dW),
        rS = JW(PW),
        gS = JW(RW),
        tS = JW(iS),
        TW = JW(eW),
        aS = WW ? WW.prototype : void 0,
        kS = aS ? aS.valueOf : void 0,
        qS = aS ? aS.toString : void 0;

      function VW(FF) {
        var WF = -1,
          SF = FF ? FF.length : 0;
        for (this.clear(); ++WF < SF;) {
          var CF = FF[WF];
          this.set(CF[0], CF[1])
        }
      }

      function NW(FF) {
        var WF = -1,
          SF = FF ? FF.length : 0;
        for (this.clear(); ++WF < SF;) {
          var CF = FF[WF];
          this.set(CF[0], CF[1])
        }
      }

      function DW(FF) {
        var WF = -1,
          SF = FF ? FF.length : 0;
        for (this.clear(); ++WF < SF;) {
          var CF = FF[WF];
          this.set(CF[0], CF[1])
        }
      }

      function LW(FF) {
        var WF = -1,
          SF = FF ? FF.length : 0;
        for (this.__data__ = new DW; ++WF < SF;) this.add(FF[WF])
      }

      function mS(FF) {
        this.__data__ = new NW(FF)
      }

      function OW(FF, WF) {
        var SF = WS(FF) || FS(FF) ? function(FF, WF) {
            for (var SF = -1, CF = Array(FF); ++SF < FF;) CF[SF] = WF(SF);
            return CF
          }(FF.length, String) : [],
          CF = SF.length,
          AF = !!CF;
        for (var uF in FF) !WF && !pF.call(FF, uF) || AF && ("length" == uF || wW(uF, CF)) || SF.push(uF);
        return SF
      }

      function xS(FF, WF) {
        for (var SF = FF.length; SF--;)
          if (lW(FF[SF][0], WF)) return SF;
        return -1
      }
      VW.prototype.clear = function() {
        this.__data__ = EW ? EW(null) : {}
      }, VW.prototype.delete = function(FF) {
        return this.has(FF) && delete this.__data__[FF]
      }, VW.prototype.get = function(FF) {
        var WF = this.__data__;
        if (EW) {
          var CF = WF[FF];
          return CF === SF ? void 0 : CF
        }
        return pF.call(WF, FF) ? WF[FF] : void 0
      }, VW.prototype.has = function(FF) {
        var WF = this.__data__;
        return EW ? void 0 !== WF[FF] : pF.call(WF, FF)
      }, VW.prototype.set = function(FF, WF) {
        return this.__data__[FF] = EW && void 0 === WF ? SF : WF, this
      }, NW.prototype.clear = function() {
        this.__data__ = []
      }, NW.prototype.delete = function(FF) {
        var WF = this.__data__,
          SF = xS(WF, FF);
        return !(SF < 0) && (SF == WF.length - 1 ? WF.pop() : hW.call(WF, SF, 1), !0)
      }, NW.prototype.get = function(FF) {
        var WF = this.__data__,
          SF = xS(WF, FF);
        return SF < 0 ? void 0 : WF[SF][1]
      }, NW.prototype.has = function(FF) {
        return xS(this.__data__, FF) > -1
      }, NW.prototype.set = function(FF, WF) {
        var SF = this.__data__,
          CF = xS(SF, FF);
        return CF < 0 ? SF.push([FF, WF]) : SF[CF][1] = WF, this
      }, DW.prototype.clear = function() {
        this.__data__ = {
          hash: new VW,
          map: new(PW || NW),
          string: new VW
        }
      }, DW.prototype.delete = function(FF) {
        return nW(this, FF).delete(FF)
      }, DW.prototype.get = function(FF) {
        return nW(this, FF).get(FF)
      }, DW.prototype.has = function(FF) {
        return nW(this, FF).has(FF)
      }, DW.prototype.set = function(FF, WF) {
        return nW(this, FF).set(FF, WF), this
      }, LW.prototype.add = LW.prototype.push = function(FF) {
        return this.__data__.set(FF, SF), this
      }, LW.prototype.has = function(FF) {
        return this.__data__.has(FF)
      }, mS.prototype.clear = function() {
        this.__data__ = new NW
      }, mS.prototype.delete = function(FF) {
        return this.__data__.delete(FF)
      }, mS.prototype.get = function(FF) {
        return this.__data__.get(FF)
      }, mS.prototype.has = function(FF) {
        return this.__data__.has(FF)
      }, mS.prototype.set = function(FF, WF) {
        var SF = this.__data__;
        if (SF instanceof NW) {
          var CF = SF.__data__;
          if (!PW || CF.length < 199) return CF.push([FF, WF]), this;
          SF = this.__data__ = new DW(CF)
        }
        return SF.set(FF, WF), this
      };
      var ZW, oW = function(FF, WF, SF) {
        for (var CF = -1, AF = Object(FF), uF = SF(FF), hF = uF.length; hF--;) {
          var bW = uF[ZW ? hF : ++CF];
          if (!1 === WF(AF[bW], bW, AF)) break
        }
        return FF
      };

      function YW(FF, WF) {
        return FF && oW(FF, WF, RS)
      }

      function MW(FF, WF) {
        for (var SF = 0, CF = (WF = XW(WF, FF) ? [WF] : yS(WF)).length; null != FF && SF < CF;) FF = FF[vS(WF[SF++])];
        return SF && SF == CF ? FF : void 0
      }

      function cS(FF, WF) {
        return null != FF && WF in Object(FF)
      }

      function GW(FF, WF, SF, CF, AF) {
        return FF === WF || (null == FF || null == WF || !uS(FF) && !hS(WF) ? FF !== FF && WF !== WF : function(FF, WF, SF, CF, AF, RF) {
          var QF = WS(FF),
            aW = WS(WF),
            VF = hF,
            NF = hF;
          QF || (VF = (VF = KW(FF)) == uF ? EF : VF);
          aW || (NF = (NF = KW(WF)) == uF ? EF : NF);
          var DF = VF == EF && !nF(FF),
            LF = NF == EF && !nF(WF),
            mW = VF == NF;
          if (mW && !DF) return RF || (RF = new mS), QF || PS(FF) ? sW(FF, WF, SF, CF, AF, RF) : function(FF, WF, SF, CF, AF, uF, hF) {
            switch (SF) {
              case qW:
                if (FF.byteLength != WF.byteLength || FF.byteOffset != WF.byteOffset) return !1;
                FF = FF.buffer, WF = WF.buffer;
              case kW:
                return !(FF.byteLength != WF.byteLength || !CF(new SW(FF), new SW(WF)));
              case bW:
              case dF:
              case eF:
                return lW(+FF, +WF);
              case PF:
                return FF.name == WF.name && FF.message == WF.message;
              case rW:
              case tW:
                return FF == WF + "";
              case iW:
                var RF = HF;
              case gW:
                var EF = 2 & uF;
                if (RF || (RF = wF), FF.size != WF.size && !EF) return !1;
                var QF = hF.get(FF);
                if (QF) return QF == WF;
                uF |= 1, hF.set(FF, WF);
                var aW = sW(RF(FF), RF(WF), CF, AF, uF, hF);
                return hF.delete(FF), aW;
              case TF:
                if (kS) return kS.call(FF) == kS.call(WF)
            }
            return !1
          }(FF, WF, VF, SF, CF, AF, RF);
          if (!(2 & AF)) {
            var OF = DF && pF.call(FF, "__wrapped__"),
              xW = LF && pF.call(WF, "__wrapped__");
            if (OF || xW) {
              var ZF = OF ? FF.value() : FF,
                oF = xW ? WF.value() : WF;
              return RF || (RF = new mS), SF(ZF, oF, CF, AF, RF)
            }
          }
          if (!mW) return !1;
          return RF || (RF = new mS),
            function(FF, WF, SF, CF, AF, uF) {
              var hF = 2 & AF,
                bW = RS(FF),
                dF = bW.length,
                PF = RS(WF),
                RF = PF.length;
              if (dF != RF && !hF) return !1;
              var iW = dF;
              for (; iW--;) {
                var eF = bW[iW];
                if (!(hF ? eF in WF : pF.call(WF, eF))) return !1
              }
              var EF = uF.get(FF);
              if (EF && uF.get(WF)) return EF == WF;
              var QF = !0;
              uF.set(FF, WF), uF.set(WF, FF);
              var rW = hF;
              for (; ++iW < dF;) {
                var gW = FF[eF = bW[iW]],
                  tW = WF[eF];
                if (CF) var TF = hF ? CF(tW, gW, eF, WF, FF, uF) : CF(gW, tW, eF, FF, WF, uF);
                if (!(void 0 === TF ? gW === tW || SF(gW, tW, CF, AF, uF) : TF)) {
                  QF = !1;
                  break
                }
                rW || (rW = "constructor" == eF)
              }
              if (QF && !rW) {
                var aW = FF.constructor,
                  kW = WF.constructor;
                aW == kW || !("constructor" in FF) || !("constructor" in WF) || "function" == typeof aW && aW instanceof aW && "function" == typeof kW && kW instanceof kW || (QF = !1)
              }
              return uF.delete(FF), uF.delete(WF), QF
            }(FF, WF, SF, CF, AF, RF)
        }(FF, WF, GW, SF, CF, AF))
      }

      function zS(FF) {
        return !(!uS(FF) || (WF = FF, vW && vW in WF)) && (CS(FF) || nF(FF) ? FW : OF).test(JW(FF));
        var WF
      }

      function IW(FF) {
        return "function" == typeof FF ? FF : null == FF ? iC : "object" == typeof FF ? WS(FF) ? function(FF, WF) {
          if (XW(FF) && UW(WF)) return BW(vS(FF), WF);
          return function(SF) {
            var CF = function(FF, WF, SF) {
              var CF = null == FF ? void 0 : MW(FF, WF);
              return void 0 === CF ? SF : CF
            }(SF, FF);
            return void 0 === CF && CF === WF ? function(FF, WF) {
              return null != FF && function(FF, WF, SF) {
                WF = XW(WF, FF) ? [WF] : yS(WF);
                var CF, AF = -1,
                  uF = WF.length;
                for (; ++AF < uF;) {
                  var hF = vS(WF[AF]);
                  if (!(CF = null != FF && SF(FF, hF))) break;
                  FF = FF[hF]
                }
                if (CF) return CF;
                uF = FF ? FF.length : 0;
                return !!uF && AS(uF) && wW(hF, uF) && (WS(FF) || FS(FF))
              }(FF, WF, cS)
            }(SF, FF) : GW(WF, CF, void 0, 3)
          }
        }(FF[0], FF[1]) : function(FF) {
          var WF = function(FF) {
            var WF = RS(FF),
              SF = WF.length;
            for (; SF--;) {
              var CF = WF[SF],
                AF = FF[CF];
              WF[SF] = [CF, AF, UW(AF)]
            }
            return WF
          }(FF);
          if (1 == WF.length && WF[0][2]) return BW(WF[0][0], WF[0][1]);
          return function(SF) {
            return SF === FF || function(FF, WF, SF, CF) {
              var AF = SF.length,
                uF = AF,
                hF = !CF;
              if (null == FF) return !uF;
              for (FF = Object(FF); AF--;) {
                var bW = SF[AF];
                if (hF && bW[2] ? bW[1] !== FF[bW[0]] : !(bW[0] in FF)) return !1
              }
              for (; ++AF < uF;) {
                var dF = (bW = SF[AF])[0],
                  PF = FF[dF],
                  RF = bW[1];
                if (hF && bW[2]) {
                  if (void 0 === PF && !(dF in FF)) return !1
                } else {
                  var iW = new mS;
                  if (CF) var eF = CF(PF, RF, dF, FF, WF, iW);
                  if (!(void 0 === eF ? GW(RF, PF, CF, 3, iW) : eF)) return !1
                }
              }
              return !0
            }(SF, FF, WF)
          }
        }(FF) : function(FF) {
          return XW(FF) ? (WF = vS(FF), function(FF) {
            return null == FF ? void 0 : FF[WF]
          }) : function(FF) {
            return function(WF) {
              return MW(WF, FF)
            }
          }(FF);
          var WF
        }(FF)
      }

      function fW(FF) {
        if (! function(FF) {
            var WF = FF && FF.constructor,
              SF = "function" == typeof WF && WF.prototype || BF;
            return FF === SF
          }(FF)) return bS(FF);
        var WF = [];
        for (var SF in Object(FF)) pF.call(FF, SF) && "constructor" != SF && WF.push(SF);
        return WF
      }

      function yS(FF) {
        return WS(FF) ? FF : jS(FF)
      }

      function sW(FF, WF, SF, CF, AF, uF) {
        var hF = 2 & AF,
          bW = FF.length,
          dF = WF.length;
        if (bW != dF && !(hF && dF > bW)) return !1;
        var PF = uF.get(FF);
        if (PF && uF.get(WF)) return PF == WF;
        var RF = -1,
          iW = !0,
          eF = 1 & AF ? new LW : void 0;
        for (uF.set(FF, WF), uF.set(WF, FF); ++RF < bW;) {
          var EF = FF[RF],
            QF = WF[RF];
          if (CF) var rW = hF ? CF(QF, EF, RF, WF, FF, uF) : CF(EF, QF, RF, FF, WF, uF);
          if (void 0 !== rW) {
            if (rW) continue;
            iW = !1;
            break
          }
          if (eF) {
            if (!sF(WF, (function(FF, WF) {
                if (!eF.has(WF) && (EF === FF || SF(EF, FF, CF, AF, uF))) return eF.add(WF)
              }))) {
              iW = !1;
              break
            }
          } else if (EF !== QF && !SF(EF, QF, CF, AF, uF)) {
            iW = !1;
            break
          }
        }
        return uF.delete(FF), uF.delete(WF), iW
      }

      function nW(FF, WF) {
        var SF = FF.__data__;
        return function(FF) {
          var WF = typeof FF;
          return "string" == WF || "number" == WF || "symbol" == WF || "boolean" == WF ? "__proto__" !== FF : null === FF
        }(WF) ? SF["string" == typeof WF ? "string" : "hash"] : SF.map
      }

      function HW(FF, WF) {
        var SF = function(FF, WF) {
          return null == FF ? void 0 : FF[WF]
        }(FF, WF);
        return zS(SF) ? SF : void 0
      }
      var KW = function(FF) {
        return lF.call(FF)
      };

      function wW(FF, WF) {
        return !!(WF = null == WF ? CF : WF) && ("number" == typeof FF || xW.test(FF)) && FF > -1 && FF % 1 == 0 && FF < WF
      }

      function XW(FF, WF) {
        if (WS(FF)) return !1;
        var SF = typeof FF;
        return !("number" != SF && "symbol" != SF && "boolean" != SF && null != FF && !bC(FF)) || (NF.test(FF) || !VF.test(FF) || null != WF && FF in Object(WF))
      }

      function UW(FF) {
        return FF === FF && !uS(FF)
      }

      function BW(FF, WF) {
        return function(SF) {
          return null != SF && (SF[FF] === WF && (void 0 !== WF || FF in Object(SF)))
        }
      }(dW && KW(new dW(new ArrayBuffer(1))) != qW || PW && KW(new PW) != iW || RW && KW(RW.resolve()) != QF || iS && KW(new iS) != gW || eW && KW(new eW) != aW) && (KW = function(FF) {
        var WF = lF.call(FF),
          SF = WF == EF ? FF.constructor : void 0,
          CF = SF ? JW(SF) : void 0;
        if (CF) switch (CF) {
          case QW:
            return qW;
          case rS:
            return iW;
          case gS:
            return QF;
          case tS:
            return gW;
          case TW:
            return aW
        }
        return WF
      });
      var jS = pW((function(FF) {
        var WF;
        FF = null == (WF = FF) ? "" : function(FF) {
          if ("string" == typeof FF) return FF;
          if (bC(FF)) return qS ? qS.call(FF) : "";
          var WF = FF + "";
          return "0" == WF && 1 / FF == -1 / 0 ? "-0" : WF
        }(WF);
        var SF = [];
        return DF.test(FF) && SF.push(""), FF.replace(LF, (function(FF, WF, CF, AF) {
          SF.push(CF ? AF.replace(mW, "$1") : WF || FF)
        })), SF
      }));

      function vS(FF) {
        if ("string" == typeof FF || bC(FF)) return FF;
        var WF = FF + "";
        return "0" == WF && 1 / FF == -1 / 0 ? "-0" : WF
      }

      function JW(FF) {
        if (null != FF) {
          try {
            return JF.call(FF)
          } catch (WF) {}
          try {
            return FF + ""
          } catch (WF) {}
        }
        return ""
      }

      function pW(FF, WF) {
        if ("function" != typeof FF || WF && "function" != typeof WF) throw new TypeError("Expected a function");
        var SF = function() {
          var CF = arguments,
            AF = WF ? WF.apply(this, CF) : CF[0],
            uF = SF.cache;
          if (uF.has(AF)) return uF.get(AF);
          var hF = FF.apply(this, CF);
          return SF.cache = uF.set(AF, hF), hF
        };
        return SF.cache = new(pW.Cache || DW), SF
      }

      function lW(FF, WF) {
        return FF === WF || FF !== FF && WF !== WF
      }

      function FS(FF) {
        return function(FF) {
          return hS(FF) && SS(FF)
        }(FF) && pF.call(FF, "callee") && (!uW.call(FF, "callee") || lF.call(FF) == uF)
      }
      pW.Cache = DW;
      var WS = Array.isArray;

      function SS(FF) {
        return null != FF && AS(FF.length) && !CS(FF)
      }

      function CS(FF) {
        var WF = uS(FF) ? lF.call(FF) : "";
        return WF == RF || "[object GeneratorFunction]" == WF
      }

      function AS(FF) {
        return "number" == typeof FF && FF > -1 && FF % 1 == 0 && FF <= CF
      }

      function uS(FF) {
        var WF = typeof FF;
        return !!FF && ("object" == WF || "function" == WF)
      }

      function hS(FF) {
        return !!FF && "object" == typeof FF
      }

      function bC(FF) {
        return "symbol" == typeof FF || hS(FF) && lF.call(FF) == TF
      }
      var dS, PS = fF ? (dS = fF, function(FF) {
        return dS(FF)
      }) : function(FF) {
        return hS(FF) && AS(FF.length) && !!ZF[lF.call(FF)]
      };

      function RS(FF) {
        return SS(FF) ? OW(FF) : fW(FF)
      }

      function iC(FF) {
        return FF
      }
      FF.exports = function(FF, WF, SF) {
        var CF, AF = WS(FF) || PS(FF);
        if (WF = IW(WF), null == SF)
          if (AF || uS(FF)) {
            var uF = FF.constructor;
            SF = AF ? WS(FF) ? new uF : [] : CS(uF) ? uS(CF = CW(FF)) ? AW(CF) : {} : {}
          } else SF = {};
        return (AF ? yW : YW)(FF, (function(FF, CF, AF) {
          return WF(SF, FF, CF, AF)
        })), SF
      }
    }(zh, zh.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      h: Iu
    } = CF
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);