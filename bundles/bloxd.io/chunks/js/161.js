export const id = 161;
export const ids = [161];
export const modules = {
  7262: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => rS,
      d: () => eL
    });
    var AH = {};
    LH.r(AH), LH.d(AH, {
      c: () => AA,
      k: () => hA,
      g: () => SA,
      n: () => sL,
      q: () => aL,
      t: () => oA,
      w: () => pL,
      z: () => lA,
      A: () => UA,
      C: () => fA,
      G: () => JL,
      K: () => OA,
      N: () => mA,
      O: () => IA,
      R: () => iL,
      Q: () => BA,
      V: () => kA,
      Z: () => bA
    });
    var rH = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function SH(HH) {
      return HH && HH.__esModule && Object.prototype.hasOwnProperty.call(HH, "default") ? HH.default : HH
    }
    var hH = {
      exports: {}
    };
    ! function(HH) {
      var BH = Object.prototype.hasOwnProperty,
        LH = "~";

      function AH() {}

      function rH(HH, BH, LH) {
        this.EX = HH, this.context = BH, this.once = LH || !1
      }

      function SH(HH, BH, AH, SH, hH) {
        if ("function" !== typeof AH) throw new TypeError("The listener must be a function");
        var tH = new rH(AH, SH || HH, hH),
          zH = LH ? LH + BH : BH;
        return HH._events[zH] ? HH._events[zH].EX ? HH._events[zH] = [HH._events[zH], tH] : HH._events[zH].push(tH) : (HH._events[zH] = tH, HH._eventsCount++), HH
      }

      function hH(HH, BH) {
        0 === --HH._eventsCount ? HH._events = new AH : delete HH._events[BH]
      }

      function tH() {
        this._events = new AH, this._eventsCount = 0
      }
      Object.create && (AH.prototype = Object.create(null), (new AH).__proto__ || (LH = !1)), tH.prototype.eventNames = function() {
        var HH, AH, rH = [];
        if (0 === this._eventsCount) return rH;
        for (AH in HH = this._events) BH.call(HH, AH) && rH.push(LH ? AH.slice(1) : AH);
        return Object.getOwnPropertySymbols ? rH.concat(Object.getOwnPropertySymbols(HH)) : rH
      }, tH.prototype.listeners = function(HH) {
        var BH = LH ? LH + HH : HH,
          AH = this._events[BH];
        if (!AH) return [];
        if (AH.EX) return [AH.EX];
        for (var rH = 0, SH = AH.length, hH = new Array(SH); rH < SH; rH++) hH[rH] = AH[rH].EX;
        return hH
      }, tH.prototype.listenerCount = function(HH) {
        var BH = LH ? LH + HH : HH,
          AH = this._events[BH];
        return AH ? AH.EX ? 1 : AH.length : 0
      }, tH.prototype.emit = function(HH, BH, AH, rH, SH, hH) {
        var tH = LH ? LH + HH : HH;
        if (!this._events[tH]) return !1;
        var zH, CH, EH = this._events[tH],
          XH = arguments.length;
        if (EH.EX) {
          switch (EH.once && this.removeListener(HH, EH.EX, void 0, !0), XH) {
            case 1:
              return EH.EX.call(EH.context), !0;
            case 2:
              return EH.EX.call(EH.context, BH), !0;
            case 3:
              return EH.EX.call(EH.context, BH, AH), !0;
            case 4:
              return EH.EX.call(EH.context, BH, AH, rH), !0;
            case 5:
              return EH.EX.call(EH.context, BH, AH, rH, SH), !0;
            case 6:
              return EH.EX.call(EH.context, BH, AH, rH, SH, hH), !0
          }
          for (CH = 1, zH = new Array(XH - 1); CH < XH; CH++) zH[CH - 1] = arguments[CH];
          EH.EX.apply(EH.context, zH)
        } else {
          var GH, YH = EH.length;
          for (CH = 0; CH < YH; CH++) switch (EH[CH].once && this.removeListener(HH, EH[CH].EX, void 0, !0), XH) {
            case 1:
              EH[CH].EX.call(EH[CH].context);
              break;
            case 2:
              EH[CH].EX.call(EH[CH].context, BH);
              break;
            case 3:
              EH[CH].EX.call(EH[CH].context, BH, AH);
              break;
            case 4:
              EH[CH].EX.call(EH[CH].context, BH, AH, rH);
              break;
            default:
              if (!zH)
                for (GH = 1, zH = new Array(XH - 1); GH < XH; GH++) zH[GH - 1] = arguments[GH];
              EH[CH].EX.apply(EH[CH].context, zH)
          }
        }
        return !0
      }, tH.prototype.on = function(HH, BH, LH) {
        return SH(this, HH, BH, LH, !1)
      }, tH.prototype.once = function(HH, BH, LH) {
        return SH(this, HH, BH, LH, !0)
      }, tH.prototype.removeListener = function(HH, BH, AH, rH) {
        var SH = LH ? LH + HH : HH;
        if (!this._events[SH]) return this;
        if (!BH) return hH(this, SH), this;
        var tH = this._events[SH];
        if (tH.EX) tH.EX !== BH || rH && !tH.once || AH && tH.context !== AH || hH(this, SH);
        else {
          for (var zH = 0, CH = [], EH = tH.length; zH < EH; zH++)(tH[zH].EX !== BH || rH && !tH[zH].once || AH && tH[zH].context !== AH) && CH.push(tH[zH]);
          CH.length ? this._events[SH] = 1 === CH.length ? CH[0] : CH : hH(this, SH)
        }
        return this
      }, tH.prototype.Bx = function(HH) {
        var BH;
        return HH ? (BH = LH ? LH + HH : HH, this._events[BH] && hH(this, BH)) : (this._events = new AH, this._eventsCount = 0), this
      }, tH.prototype.off = tH.prototype.removeListener, tH.prototype.addListener = tH.prototype.on, tH.prefixed = LH, tH.EventEmitter = tH, HH.exports = tH
    }(hH);
    var tH, zH, CH = SH(hH.exports);
    ! function(HH) {
      HH.assertEqual = HH => HH, HH.assertIs = function(HH) {}, HH.assertNever = function(HH) {
        throw new Error
      }, HH.arrayToEnum = HH => {
        const BH = {};
        for (const LH of HH) BH[LH] = LH;
        return BH
      }, HH.getValidEnumValues = BH => {
        const LH = HH.objectKeys(BH).filter((HH => "number" !== typeof BH[BH[HH]])),
          AH = {};
        for (const HH of LH) AH[HH] = BH[HH];
        return HH.objectValues(AH)
      }, HH.objectValues = BH => HH.objectKeys(BH).map((function(HH) {
        return BH[HH]
      })), HH.objectKeys = "function" === typeof Object.keys ? HH => Object.keys(HH) : HH => {
        const BH = [];
        for (const LH in HH) Object.prototype.hasOwnProperty.call(HH, LH) && BH.push(LH);
        return BH
      }, HH.find = (HH, BH) => {
        for (const LH of HH)
          if (BH(LH)) return LH
      }, HH.isInteger = "function" === typeof Number.isInteger ? HH => Number.isInteger(HH) : HH => "number" === typeof HH && isFinite(HH) && Math.floor(HH) === HH, HH.joinValues = function(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return HH.map((HH => "string" === typeof HH ? `'${HH}'` : HH)).join(BH)
      }, HH.jsonStringifyReplacer = (HH, BH) => "bigint" === typeof BH ? BH.toString() : BH
    }(tH || (tH = {})),
    function(HH) {
      HH.mergeShapes = (HH, BH) => ({
        ...HH,
        ...BH
      })
    }(zH || (zH = {}));
    const EH = tH.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      XH = HH => {
        switch (typeof HH) {
          case "undefined":
            return EH.undefined;
          case "string":
            return EH.string;
          case "number":
            return isNaN(HH) ? EH.nan : EH.number;
          case "boolean":
            return EH.boolean;
          case "function":
            return EH.function;
          case "bigint":
            return EH.bigint;
          case "symbol":
            return EH.symbol;
          case "object":
            return Array.isArray(HH) ? EH.array : null === HH ? EH.null : HH.then && "function" === typeof HH.then && HH.catch && "function" === typeof HH.catch ? EH.promise : "undefined" !== typeof Map && HH instanceof Map ? EH.map : "undefined" !== typeof Set && HH instanceof Set ? EH.set : "undefined" !== typeof Date && HH instanceof Date ? EH.date : EH.object;
          default:
            return EH.unknown
        }
      },
      GH = tH.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class YH extends Error {
      constructor(HH) {
        var BH;
        super(), BH = this, this.issues = [], this.addIssue = HH => {
          this.issues = [...this.issues, HH]
        }, this.addIssues = function() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          BH.issues = [...BH.issues, ...HH]
        };
        const LH = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, LH) : this.__proto__ = LH, this.name = "ZodError", this.issues = HH
      }
      get errors() {
        return this.issues
      }
      format(HH) {
        const BH = HH || function(HH) {
            return HH.message
          },
          LH = {
            _errors: []
          },
          AH = HH => {
            for (const rH of HH.issues)
              if ("invalid_union" === rH.code) rH.unionErrors.map(AH);
              else if ("invalid_return_type" === rH.code) AH(rH.returnTypeError);
            else if ("invalid_arguments" === rH.code) AH(rH.argumentsError);
            else if (0 === rH.path.length) LH._errors.push(BH(rH));
            else {
              let HH = LH,
                AH = 0;
              for (; AH < rH.path.length;) {
                const LH = rH.path[AH];
                AH === rH.path.length - 1 ? (HH[LH] = HH[LH] || {
                  _errors: []
                }, HH[LH]._errors.push(BH(rH))) : HH[LH] = HH[LH] || {
                  _errors: []
                }, HH = HH[LH], AH++
              }
            }
          };
        return AH(this), LH
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, tH.jsonStringifyReplacer, 2)
      }
      get TX() {
        return 0 === this.issues.length
      }
      flatten() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : HH => HH.message;
        const BH = {},
          LH = [];
        for (const AH of this.issues) AH.path.length > 0 ? (BH[AH.path[0]] = BH[AH.path[0]] || [], BH[AH.path[0]].push(HH(AH))) : LH.push(HH(AH));
        return {
          formErrors: LH,
          fieldErrors: BH
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    YH.create = HH => new YH(HH);
    const uH = (HH, BH) => {
      let LH;
      switch (HH.code) {
        case GH.invalid_type:
          LH = HH.received === EH.undefined ? "Required" : `Expected ${HH.expected}, received ${HH.received}`;
          break;
        case GH.invalid_literal:
          LH = `Invalid literal value, expected ${JSON.stringify(HH.expected,tH.jsonStringifyReplacer)}`;
          break;
        case GH.unrecognized_keys:
          LH = `Unrecognized key(s) in object: ${tH.joinValues(HH.keys,", ")}`;
          break;
        case GH.invalid_union:
          LH = "Invalid input";
          break;
        case GH.invalid_union_discriminator:
          LH = `Invalid discriminator value. Expected ${tH.joinValues(HH.options)}`;
          break;
        case GH.invalid_enum_value:
          LH = `Invalid enum value. Expected ${tH.joinValues(HH.options)}, received '${HH.received}'`;
          break;
        case GH.invalid_arguments:
          LH = "Invalid function arguments";
          break;
        case GH.invalid_return_type:
          LH = "Invalid function return type";
          break;
        case GH.invalid_date:
          LH = "Invalid date";
          break;
        case GH.invalid_string:
          "object" === typeof HH.validation ? "includes" in HH.validation ? (LH = `Invalid input: must include "${HH.validation.includes}"`, "number" === typeof HH.validation.position && (LH = `${LH} at one or more positions greater than or equal to ${HH.validation.position}`)) : "startsWith" in HH.validation ? LH = `Invalid input: must start with "${HH.validation.startsWith}"` : "endsWith" in HH.validation ? LH = `Invalid input: must end with "${HH.validation.endsWith}"` : tH.assertNever(HH.validation) : LH = "regex" !== HH.validation ? `Invalid ${HH.validation}` : "Invalid";
          break;
        case GH.too_small:
          LH = "array" === HH.type ? `Array must contain ${HH.exact?"exactly":HH.inclusive?"at least":"more than"} ${HH.minimum} element(s)` : "string" === HH.type ? `String must contain ${HH.exact?"exactly":HH.inclusive?"at least":"over"} ${HH.minimum} character(s)` : "number" === HH.type ? `Number must be ${HH.exact?"exactly equal to ":HH.inclusive?"greater than or equal to ":"greater than "}${HH.minimum}` : "date" === HH.type ? `Date must be ${HH.exact?"exactly equal to ":HH.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(HH.minimum))}` : "Invalid input";
          break;
        case GH.too_big:
          LH = "array" === HH.type ? `Array must contain ${HH.exact?"exactly":HH.inclusive?"at most":"less than"} ${HH.maximum} element(s)` : "string" === HH.type ? `String must contain ${HH.exact?"exactly":HH.inclusive?"at most":"under"} ${HH.maximum} character(s)` : "number" === HH.type ? `Number must be ${HH.exact?"exactly":HH.inclusive?"less than or equal to":"less than"} ${HH.maximum}` : "bigint" === HH.type ? `BigInt must be ${HH.exact?"exactly":HH.inclusive?"less than or equal to":"less than"} ${HH.maximum}` : "date" === HH.type ? `Date must be ${HH.exact?"exactly":HH.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(HH.maximum))}` : "Invalid input";
          break;
        case GH.custom:
          LH = "Invalid input";
          break;
        case GH.invalid_intersection_types:
          LH = "Intersection results could not be merged";
          break;
        case GH.not_multiple_of:
          LH = `Number must be a multiple of ${HH.multipleOf}`;
          break;
        case GH.not_finite:
          LH = "Number must be finite";
          break;
        default:
          LH = BH.defaultError, tH.assertNever(HH)
      }
      return {
        message: LH
      }
    };
    let QH = uH;

    function WH() {
      return QH
    }
    const MH = HH => {
      const {
        data: BH,
        path: LH,
        errorMaps: AH,
        issueData: rH
      } = HH, SH = [...LH, ...rH.path || []], hH = {
        ...rH,
        path: SH
      };
      let tH = "";
      const zH = AH.filter((HH => !!HH)).slice().reverse();
      for (const CH of zH) tH = CH(hH, {
        data: BH,
        defaultError: tH
      }).message;
      return {
        ...rH,
        path: SH,
        message: rH.message || tH
      }
    };

    function xH(HH, BH) {
      const LH = MH({
        issueData: BH,
        data: HH.data,
        path: HH.path,
        errorMaps: [HH.common.contextualErrorMap, HH.schemaErrorMap, WH(), uH].filter((HH => !!HH))
      });
      HH.common.issues.push(LH)
    }
    class vH {
      constructor() {
        this.value = "valid"
      }
      gu() {
        "valid" === this.value && (this.value = "gu")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(HH, BH) {
        const LH = [];
        for (const AH of BH) {
          if ("aborted" === AH.status) return PH;
          "gu" === AH.status && HH.gu(), LH.push(AH.value)
        }
        return {
          status: HH.value,
          value: LH
        }
      }
      static async mergeObjectAsync(HH, BH) {
        const LH = [];
        for (const AH of BH) LH.push({
          key: await AH.key,
          value: await AH.value
        });
        return vH.mergeObjectSync(HH, LH)
      }
      static mergeObjectSync(HH, BH) {
        const LH = {};
        for (const AH of BH) {
          const {
            key: BH,
            value: rH
          } = AH;
          if ("aborted" === BH.status) return PH;
          if ("aborted" === rH.status) return PH;
          "gu" === BH.status && HH.gu(), "gu" === rH.status && HH.gu(), "__proto__" === BH.value || "undefined" === typeof rH.value && !AH.alwaysSet || (LH[BH.value] = rH.value)
        }
        return {
          status: HH.value,
          value: LH
        }
      }
    }
    const PH = Object.freeze({
        status: "aborted"
      }),
      TH = HH => ({
        status: "gu",
        value: HH
      }),
      UH = HH => ({
        status: "valid",
        value: HH
      }),
      VH = HH => "aborted" === HH.status,
      OH = HH => "gu" === HH.status,
      bH = HH => "valid" === HH.status,
      kH = HH => "undefined" !== typeof Promise && HH instanceof Promise;
    var mH;
    ! function(HH) {
      HH.errToObj = HH => "string" === typeof HH ? {
        message: HH
      } : HH || {}, HH.toString = HH => "string" === typeof HH ? HH : null === HH || void 0 === HH ? void 0 : HH.message
    }(mH || (mH = {}));
    class oH {
      constructor(HH, BH, LH, AH) {
        this._cachedPath = [], this.parent = HH, this.data = BH, this._path = LH, this._key = AH
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const IH = (HH, BH) => {
      if (bH(BH)) return {
        success: !0,
        data: BH.value
      };
      if (!HH.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const BH = new YH(HH.common.issues);
          return this._error = BH, this._error
        }
      }
    };

    function fH(HH) {
      if (!HH) return {};
      const {
        errorMap: BH,
        invalid_type_error: LH,
        required_error: AH,
        description: rH
      } = HH;
      if (BH && (LH || AH)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (BH) return {
        errorMap: BH,
        description: rH
      };
      return {
        errorMap: (HH, BH) => "invalid_type" !== HH.code ? {
          message: BH.defaultError
        } : "undefined" === typeof BH.data ? {
          message: null !== AH && void 0 !== AH ? AH : BH.defaultError
        } : {
          message: null !== LH && void 0 !== LH ? LH : BH.defaultError
        },
        description: rH
      }
    }
    class lH {
      constructor(HH) {
        this.spa = this.safeParseAsync, this._def = HH, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(HH) {
        return XH(HH.data)
      }
      _getOrReturnCtx(HH, BH) {
        return BH || {
          common: HH.parent.common,
          data: HH.data,
          parsedType: XH(HH.data),
          schemaErrorMap: this._def.errorMap,
          path: HH.path,
          parent: HH.parent
        }
      }
      _processInputParams(HH) {
        return {
          status: new vH,
          ctx: {
            common: HH.parent.common,
            data: HH.data,
            parsedType: XH(HH.data),
            schemaErrorMap: this._def.errorMap,
            path: HH.path,
            parent: HH.parent
          }
        }
      }
      _parseSync(HH) {
        const BH = this._parse(HH);
        if (kH(BH)) throw new Error("Synchronous parse encountered promise.");
        return BH
      }
      _parseAsync(HH) {
        const BH = this._parse(HH);
        return Promise.resolve(BH)
      }
      parse(HH, BH) {
        const LH = this.safeParse(HH, BH);
        if (LH.success) return LH.data;
        throw LH.error
      }
      safeParse(HH, BH) {
        var LH;
        const AH = {
            common: {
              issues: [],
              async: null !== (LH = null === BH || void 0 === BH ? void 0 : BH.async) && void 0 !== LH && LH,
              contextualErrorMap: null === BH || void 0 === BH ? void 0 : BH.errorMap
            },
            path: (null === BH || void 0 === BH ? void 0 : BH.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: HH,
            parsedType: XH(HH)
          },
          rH = this._parseSync({
            data: HH,
            path: AH.path,
            parent: AH
          });
        return IH(AH, rH)
      }
      async parseAsync(HH, BH) {
        const LH = await this.safeParseAsync(HH, BH);
        if (LH.success) return LH.data;
        throw LH.error
      }
      async safeParseAsync(HH, BH) {
        const LH = {
            common: {
              issues: [],
              contextualErrorMap: null === BH || void 0 === BH ? void 0 : BH.errorMap,
              async: !0
            },
            path: (null === BH || void 0 === BH ? void 0 : BH.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: HH,
            parsedType: XH(HH)
          },
          AH = this._parse({
            data: HH,
            path: LH.path,
            parent: LH
          }),
          rH = await (kH(AH) ? AH : Promise.resolve(AH));
        return IH(LH, rH)
      }
      refine(HH, BH) {
        const LH = HH => "string" === typeof BH || "undefined" === typeof BH ? {
          message: BH
        } : "function" === typeof BH ? BH(HH) : BH;
        return this._refinement(((BH, AH) => {
          const rH = HH(BH),
            SH = () => AH.addIssue({
              code: GH.custom,
              ...LH(BH)
            });
          return "undefined" !== typeof Promise && rH instanceof Promise ? rH.then((HH => !!HH || (SH(), !1))) : !!rH || (SH(), !1)
        }))
      }
      refinement(HH, BH) {
        return this._refinement(((LH, AH) => !!HH(LH) || (AH.addIssue("function" === typeof BH ? BH(LH, AH) : BH), !1)))
      }
      _refinement(HH) {
        return new PB({
          schema: this,
          typeName: KB.ZodEffects,
          effect: {
            type: "refinement",
            refinement: HH
          }
        })
      }
      superRefine(HH) {
        return this._refinement(HH)
      }
      optional() {
        return TB.create(this, this._def)
      }
      nullable() {
        return UB.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return BB.create(this, this._def)
      }
      promise() {
        return vB.create(this, this._def)
      }
      or(HH) {
        return rB.create([this, HH], this._def)
      }
      and(HH) {
        return zB.create(this, HH, this._def)
      }
      transform(HH) {
        return new PB({
          ...fH(this._def),
          schema: this,
          typeName: KB.ZodEffects,
          effect: {
            type: "transform",
            transform: HH
          }
        })
      }
      default (HH) {
        const BH = "function" === typeof HH ? HH : () => HH;
        return new VB({
          ...fH(this._def),
          innerType: this,
          defaultValue: BH,
          typeName: KB.ZodDefault
        })
      }
      brand() {
        return new mB({
          typeName: KB.ZodBranded,
          type: this,
          ...fH(this._def)
        })
      } catch (HH) {
        const BH = "function" === typeof HH ? HH : () => HH;
        return new OB({
          ...fH(this._def),
          innerType: this,
          catchValue: BH,
          typeName: KB.ZodCatch
        })
      }
      describe(HH) {
        return new(0, this.constructor)({
          ...this._def,
          description: HH
        })
      }
      pipe(HH) {
        return oB.create(this, HH)
      }
      readonly() {
        return IB.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const KH = /^c[^\s-]{8,}$/i,
      cH = /^[a-z][a-z0-9]*$/,
      eH = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      qH = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      gH = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let NH;
    const RH = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      jH = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class nH extends lH {
      _parse(HH) {
        this._def.coerce && (HH.data = String(HH.data));
        if (this._getType(HH) !== EH.string) {
          const BH = this._getOrReturnCtx(HH);
          return xH(BH, {
            code: GH.invalid_type,
            expected: EH.string,
            received: BH.parsedType
          }), PH
        }
        const BH = new vH;
        let LH;
        for (const zH of this._def.checks)
          if ("min" === zH.kind) HH.data.length < zH.value && (LH = this._getOrReturnCtx(HH, LH), xH(LH, {
            code: GH.too_small,
            minimum: zH.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: zH.message
          }), BH.gu());
          else if ("max" === zH.kind) HH.data.length > zH.value && (LH = this._getOrReturnCtx(HH, LH), xH(LH, {
          code: GH.too_big,
          maximum: zH.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: zH.message
        }), BH.gu());
        else if ("length" === zH.kind) {
          const AH = HH.data.length > zH.value,
            rH = HH.data.length < zH.value;
          (AH || rH) && (LH = this._getOrReturnCtx(HH, LH), AH ? xH(LH, {
            code: GH.too_big,
            maximum: zH.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: zH.message
          }) : rH && xH(LH, {
            code: GH.too_small,
            minimum: zH.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: zH.message
          }), BH.gu())
        } else if ("email" === zH.kind) gH.test(HH.data) || (LH = this._getOrReturnCtx(HH, LH), xH(LH, {
          validation: "email",
          code: GH.invalid_string,
          message: zH.message
        }), BH.gu());
        else if ("emoji" === zH.kind) NH || (NH = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), NH.test(HH.data) || (LH = this._getOrReturnCtx(HH, LH), xH(LH, {
          validation: "emoji",
          code: GH.invalid_string,
          message: zH.message
        }), BH.gu());
        else if ("uuid" === zH.kind) qH.test(HH.data) || (LH = this._getOrReturnCtx(HH, LH), xH(LH, {
          validation: "uuid",
          code: GH.invalid_string,
          message: zH.message
        }), BH.gu());
        else if ("cuid" === zH.kind) KH.test(HH.data) || (LH = this._getOrReturnCtx(HH, LH), xH(LH, {
          validation: "cuid",
          code: GH.invalid_string,
          message: zH.message
        }), BH.gu());
        else if ("cuid2" === zH.kind) cH.test(HH.data) || (LH = this._getOrReturnCtx(HH, LH), xH(LH, {
          validation: "cuid2",
          code: GH.invalid_string,
          message: zH.message
        }), BH.gu());
        else if ("ulid" === zH.kind) eH.test(HH.data) || (LH = this._getOrReturnCtx(HH, LH), xH(LH, {
          validation: "ulid",
          code: GH.invalid_string,
          message: zH.message
        }), BH.gu());
        else if ("url" === zH.kind) try {
          new URL(HH.data)
        } catch (hH) {
          LH = this._getOrReturnCtx(HH, LH), xH(LH, {
            validation: "url",
            code: GH.invalid_string,
            message: zH.message
          }), BH.gu()
        } else if ("regex" === zH.kind) {
          zH.regex.lastIndex = 0;
          zH.regex.test(HH.data) || (LH = this._getOrReturnCtx(HH, LH), xH(LH, {
            validation: "regex",
            code: GH.invalid_string,
            message: zH.message
          }), BH.gu())
        } else if ("trim" === zH.kind) HH.data = HH.data.trim();
        else if ("includes" === zH.kind) HH.data.includes(zH.value, zH.position) || (LH = this._getOrReturnCtx(HH, LH), xH(LH, {
          code: GH.invalid_string,
          validation: {
            includes: zH.value,
            position: zH.position
          },
          message: zH.message
        }), BH.gu());
        else if ("toLowerCase" === zH.kind) HH.data = HH.data.toLowerCase();
        else if ("toUpperCase" === zH.kind) HH.data = HH.data.toUpperCase();
        else if ("startsWith" === zH.kind) HH.data.startsWith(zH.value) || (LH = this._getOrReturnCtx(HH, LH), xH(LH, {
          code: GH.invalid_string,
          validation: {
            startsWith: zH.value
          },
          message: zH.message
        }), BH.gu());
        else if ("endsWith" === zH.kind) HH.data.endsWith(zH.value) || (LH = this._getOrReturnCtx(HH, LH), xH(LH, {
          code: GH.invalid_string,
          validation: {
            endsWith: zH.value
          },
          message: zH.message
        }), BH.gu());
        else if ("datetime" === zH.kind) {
          ((SH = zH).precision ? SH.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${SH.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${SH.precision}}Z$`) : 0 === SH.precision ? SH.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : SH.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(HH.data) || (LH = this._getOrReturnCtx(HH, LH), xH(LH, {
            code: GH.invalid_string,
            validation: "datetime",
            message: zH.message
          }), BH.gu())
        } else "ip" === zH.kind ? (AH = HH.data, ("v4" !== (rH = zH.version) && rH || !RH.test(AH)) && ("v6" !== rH && rH || !jH.test(AH)) && (LH = this._getOrReturnCtx(HH, LH), xH(LH, {
          validation: "ip",
          code: GH.invalid_string,
          message: zH.message
        }), BH.gu())) : tH.assertNever(zH);
        var AH, rH, SH;
        return {
          status: BH.value,
          value: HH.data
        }
      }
      _regex(HH, BH, LH) {
        return this.refinement((BH => HH.test(BH)), {
          validation: BH,
          code: GH.invalid_string,
          ...mH.errToObj(LH)
        })
      }
      _addCheck(HH) {
        return new nH({
          ...this._def,
          checks: [...this._def.checks, HH]
        })
      }
      email(HH) {
        return this._addCheck({
          kind: "email",
          ...mH.errToObj(HH)
        })
      }
      url(HH) {
        return this._addCheck({
          kind: "url",
          ...mH.errToObj(HH)
        })
      }
      emoji(HH) {
        return this._addCheck({
          kind: "emoji",
          ...mH.errToObj(HH)
        })
      }
      uuid(HH) {
        return this._addCheck({
          kind: "uuid",
          ...mH.errToObj(HH)
        })
      }
      cuid(HH) {
        return this._addCheck({
          kind: "cuid",
          ...mH.errToObj(HH)
        })
      }
      cuid2(HH) {
        return this._addCheck({
          kind: "cuid2",
          ...mH.errToObj(HH)
        })
      }
      ulid(HH) {
        return this._addCheck({
          kind: "ulid",
          ...mH.errToObj(HH)
        })
      }
      ip(HH) {
        return this._addCheck({
          kind: "ip",
          ...mH.errToObj(HH)
        })
      }
      datetime(HH) {
        var BH;
        return "string" === typeof HH ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: HH
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === HH || void 0 === HH ? void 0 : HH.precision) ? null : null === HH || void 0 === HH ? void 0 : HH.precision,
          offset: null !== (BH = null === HH || void 0 === HH ? void 0 : HH.offset) && void 0 !== BH && BH,
          ...mH.errToObj(null === HH || void 0 === HH ? void 0 : HH.message)
        })
      }
      regex(HH, BH) {
        return this._addCheck({
          kind: "regex",
          regex: HH,
          ...mH.errToObj(BH)
        })
      }
      includes(HH, BH) {
        return this._addCheck({
          kind: "includes",
          value: HH,
          position: null === BH || void 0 === BH ? void 0 : BH.position,
          ...mH.errToObj(null === BH || void 0 === BH ? void 0 : BH.message)
        })
      }
      startsWith(HH, BH) {
        return this._addCheck({
          kind: "startsWith",
          value: HH,
          ...mH.errToObj(BH)
        })
      }
      endsWith(HH, BH) {
        return this._addCheck({
          kind: "endsWith",
          value: HH,
          ...mH.errToObj(BH)
        })
      }
      min(HH, BH) {
        return this._addCheck({
          kind: "min",
          value: HH,
          ...mH.errToObj(BH)
        })
      }
      max(HH, BH) {
        return this._addCheck({
          kind: "max",
          value: HH,
          ...mH.errToObj(BH)
        })
      }
      length(HH, BH) {
        return this._addCheck({
          kind: "length",
          value: HH,
          ...mH.errToObj(BH)
        })
      }
      nonempty(HH) {
        return this.min(1, mH.errToObj(HH))
      }
      trim() {
        return new nH({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new nH({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new nH({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((HH => "datetime" === HH.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((HH => "email" === HH.kind))
      }
      get isURL() {
        return !!this._def.checks.find((HH => "url" === HH.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((HH => "emoji" === HH.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((HH => "uuid" === HH.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((HH => "cuid" === HH.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((HH => "cuid2" === HH.kind))
      }
      get isULID() {
        return !!this._def.checks.find((HH => "ulid" === HH.kind))
      }
      get isIP() {
        return !!this._def.checks.find((HH => "ip" === HH.kind))
      }
      get minLength() {
        let HH = null;
        for (const BH of this._def.checks) "min" === BH.kind && (null === HH || BH.value > HH) && (HH = BH.value);
        return HH
      }
      get maxLength() {
        let HH = null;
        for (const BH of this._def.checks) "max" === BH.kind && (null === HH || BH.value < HH) && (HH = BH.value);
        return HH
      }
    }

    function FH(HH, BH) {
      const LH = (HH.toString().split(".")[1] || "").length,
        AH = (BH.toString().split(".")[1] || "").length,
        rH = LH > AH ? LH : AH;
      return parseInt(HH.toFixed(rH).replace(".", "")) % parseInt(BH.toFixed(rH).replace(".", "")) / Math.pow(10, rH)
    }
    nH.create = HH => {
      var BH;
      return new nH({
        checks: [],
        typeName: KB.ZodString,
        coerce: null !== (BH = null === HH || void 0 === HH ? void 0 : HH.coerce) && void 0 !== BH && BH,
        ...fH(HH)
      })
    };
    class DH extends lH {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(HH) {
        this._def.coerce && (HH.data = Number(HH.data));
        if (this._getType(HH) !== EH.number) {
          const BH = this._getOrReturnCtx(HH);
          return xH(BH, {
            code: GH.invalid_type,
            expected: EH.number,
            received: BH.parsedType
          }), PH
        }
        let BH;
        const LH = new vH;
        for (const AH of this._def.checks)
          if ("int" === AH.kind) tH.isInteger(HH.data) || (BH = this._getOrReturnCtx(HH, BH), xH(BH, {
            code: GH.invalid_type,
            expected: "integer",
            received: "float",
            message: AH.message
          }), LH.gu());
          else if ("min" === AH.kind) {
          (AH.inclusive ? HH.data < AH.value : HH.data <= AH.value) && (BH = this._getOrReturnCtx(HH, BH), xH(BH, {
            code: GH.too_small,
            minimum: AH.value,
            type: "number",
            inclusive: AH.inclusive,
            exact: !1,
            message: AH.message
          }), LH.gu())
        } else if ("max" === AH.kind) {
          (AH.inclusive ? HH.data > AH.value : HH.data >= AH.value) && (BH = this._getOrReturnCtx(HH, BH), xH(BH, {
            code: GH.too_big,
            maximum: AH.value,
            type: "number",
            inclusive: AH.inclusive,
            exact: !1,
            message: AH.message
          }), LH.gu())
        } else "multipleOf" === AH.kind ? 0 !== FH(HH.data, AH.value) && (BH = this._getOrReturnCtx(HH, BH), xH(BH, {
          code: GH.not_multiple_of,
          multipleOf: AH.value,
          message: AH.message
        }), LH.gu()) : "finite" === AH.kind ? Number.isFinite(HH.data) || (BH = this._getOrReturnCtx(HH, BH), xH(BH, {
          code: GH.not_finite,
          message: AH.message
        }), LH.gu()) : tH.assertNever(AH);
        return {
          status: LH.value,
          value: HH.data
        }
      }
      gte(HH, BH) {
        return this.setLimit("min", HH, !0, mH.toString(BH))
      }
      gt(HH, BH) {
        return this.setLimit("min", HH, !1, mH.toString(BH))
      }
      lte(HH, BH) {
        return this.setLimit("max", HH, !0, mH.toString(BH))
      }
      lt(HH, BH) {
        return this.setLimit("max", HH, !1, mH.toString(BH))
      }
      setLimit(HH, BH, LH, AH) {
        return new DH({
          ...this._def,
          checks: [...this._def.checks, {
            kind: HH,
            value: BH,
            inclusive: LH,
            message: mH.toString(AH)
          }]
        })
      }
      _addCheck(HH) {
        return new DH({
          ...this._def,
          checks: [...this._def.checks, HH]
        })
      }
      int(HH) {
        return this._addCheck({
          kind: "int",
          message: mH.toString(HH)
        })
      }
      positive(HH) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: mH.toString(HH)
        })
      }
      negative(HH) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: mH.toString(HH)
        })
      }
      nonpositive(HH) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: mH.toString(HH)
        })
      }
      nonnegative(HH) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: mH.toString(HH)
        })
      }
      multipleOf(HH, BH) {
        return this._addCheck({
          kind: "multipleOf",
          value: HH,
          message: mH.toString(BH)
        })
      }
      finite(HH) {
        return this._addCheck({
          kind: "finite",
          message: mH.toString(HH)
        })
      }
      safe(HH) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: mH.toString(HH)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: mH.toString(HH)
        })
      }
      get minValue() {
        let HH = null;
        for (const BH of this._def.checks) "min" === BH.kind && (null === HH || BH.value > HH) && (HH = BH.value);
        return HH
      }
      get maxValue() {
        let HH = null;
        for (const BH of this._def.checks) "max" === BH.kind && (null === HH || BH.value < HH) && (HH = BH.value);
        return HH
      }
      get isInt() {
        return !!this._def.checks.find((HH => "int" === HH.kind || "multipleOf" === HH.kind && tH.isInteger(HH.value)))
      }
      get isFinite() {
        let HH = null,
          BH = null;
        for (const LH of this._def.checks) {
          if ("finite" === LH.kind || "int" === LH.kind || "multipleOf" === LH.kind) return !0;
          "min" === LH.kind ? (null === BH || LH.value > BH) && (BH = LH.value) : "max" === LH.kind && (null === HH || LH.value < HH) && (HH = LH.value)
        }
        return Number.isFinite(BH) && Number.isFinite(HH)
      }
    }
    DH.create = HH => new DH({
      checks: [],
      typeName: KB.ZodNumber,
      coerce: (null === HH || void 0 === HH ? void 0 : HH.coerce) || !1,
      ...fH(HH)
    });
    class wH extends lH {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(HH) {
        this._def.coerce && (HH.data = BigInt(HH.data));
        if (this._getType(HH) !== EH.bigint) {
          const BH = this._getOrReturnCtx(HH);
          return xH(BH, {
            code: GH.invalid_type,
            expected: EH.bigint,
            received: BH.parsedType
          }), PH
        }
        let BH;
        const LH = new vH;
        for (const AH of this._def.checks)
          if ("min" === AH.kind) {
            (AH.inclusive ? HH.data < AH.value : HH.data <= AH.value) && (BH = this._getOrReturnCtx(HH, BH), xH(BH, {
              code: GH.too_small,
              type: "bigint",
              minimum: AH.value,
              inclusive: AH.inclusive,
              message: AH.message
            }), LH.gu())
          } else if ("max" === AH.kind) {
          (AH.inclusive ? HH.data > AH.value : HH.data >= AH.value) && (BH = this._getOrReturnCtx(HH, BH), xH(BH, {
            code: GH.too_big,
            type: "bigint",
            maximum: AH.value,
            inclusive: AH.inclusive,
            message: AH.message
          }), LH.gu())
        } else "multipleOf" === AH.kind ? HH.data % AH.value !== BigInt(0) && (BH = this._getOrReturnCtx(HH, BH), xH(BH, {
          code: GH.not_multiple_of,
          multipleOf: AH.value,
          message: AH.message
        }), LH.gu()) : tH.assertNever(AH);
        return {
          status: LH.value,
          value: HH.data
        }
      }
      gte(HH, BH) {
        return this.setLimit("min", HH, !0, mH.toString(BH))
      }
      gt(HH, BH) {
        return this.setLimit("min", HH, !1, mH.toString(BH))
      }
      lte(HH, BH) {
        return this.setLimit("max", HH, !0, mH.toString(BH))
      }
      lt(HH, BH) {
        return this.setLimit("max", HH, !1, mH.toString(BH))
      }
      setLimit(HH, BH, LH, AH) {
        return new wH({
          ...this._def,
          checks: [...this._def.checks, {
            kind: HH,
            value: BH,
            inclusive: LH,
            message: mH.toString(AH)
          }]
        })
      }
      _addCheck(HH) {
        return new wH({
          ...this._def,
          checks: [...this._def.checks, HH]
        })
      }
      positive(HH) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: mH.toString(HH)
        })
      }
      negative(HH) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: mH.toString(HH)
        })
      }
      nonpositive(HH) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: mH.toString(HH)
        })
      }
      nonnegative(HH) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: mH.toString(HH)
        })
      }
      multipleOf(HH, BH) {
        return this._addCheck({
          kind: "multipleOf",
          value: HH,
          message: mH.toString(BH)
        })
      }
      get minValue() {
        let HH = null;
        for (const BH of this._def.checks) "min" === BH.kind && (null === HH || BH.value > HH) && (HH = BH.value);
        return HH
      }
      get maxValue() {
        let HH = null;
        for (const BH of this._def.checks) "max" === BH.kind && (null === HH || BH.value < HH) && (HH = BH.value);
        return HH
      }
    }
    wH.create = HH => {
      var BH;
      return new wH({
        checks: [],
        typeName: KB.ZodBigInt,
        coerce: null !== (BH = null === HH || void 0 === HH ? void 0 : HH.coerce) && void 0 !== BH && BH,
        ...fH(HH)
      })
    };
    class ZH extends lH {
      _parse(HH) {
        this._def.coerce && (HH.data = Boolean(HH.data));
        if (this._getType(HH) !== EH.boolean) {
          const BH = this._getOrReturnCtx(HH);
          return xH(BH, {
            code: GH.invalid_type,
            expected: EH.boolean,
            received: BH.parsedType
          }), PH
        }
        return UH(HH.data)
      }
    }
    ZH.create = HH => new ZH({
      typeName: KB.ZodBoolean,
      coerce: (null === HH || void 0 === HH ? void 0 : HH.coerce) || !1,
      ...fH(HH)
    });
    class dH extends lH {
      _parse(HH) {
        this._def.coerce && (HH.data = new Date(HH.data));
        if (this._getType(HH) !== EH.date) {
          const BH = this._getOrReturnCtx(HH);
          return xH(BH, {
            code: GH.invalid_type,
            expected: EH.date,
            received: BH.parsedType
          }), PH
        }
        if (isNaN(HH.data.getTime())) {
          return xH(this._getOrReturnCtx(HH), {
            code: GH.invalid_date
          }), PH
        }
        const BH = new vH;
        let LH;
        for (const AH of this._def.checks) "min" === AH.kind ? HH.data.getTime() < AH.value && (LH = this._getOrReturnCtx(HH, LH), xH(LH, {
          code: GH.too_small,
          message: AH.message,
          inclusive: !0,
          exact: !1,
          minimum: AH.value,
          type: "date"
        }), BH.gu()) : "max" === AH.kind ? HH.data.getTime() > AH.value && (LH = this._getOrReturnCtx(HH, LH), xH(LH, {
          code: GH.too_big,
          message: AH.message,
          inclusive: !0,
          exact: !1,
          maximum: AH.value,
          type: "date"
        }), BH.gu()) : tH.assertNever(AH);
        return {
          status: BH.value,
          value: new Date(HH.data.getTime())
        }
      }
      _addCheck(HH) {
        return new dH({
          ...this._def,
          checks: [...this._def.checks, HH]
        })
      }
      min(HH, BH) {
        return this._addCheck({
          kind: "min",
          value: HH.getTime(),
          message: mH.toString(BH)
        })
      }
      max(HH, BH) {
        return this._addCheck({
          kind: "max",
          value: HH.getTime(),
          message: mH.toString(BH)
        })
      }
      get minDate() {
        let HH = null;
        for (const BH of this._def.checks) "min" === BH.kind && (null === HH || BH.value > HH) && (HH = BH.value);
        return null != HH ? new Date(HH) : null
      }
      get maxDate() {
        let HH = null;
        for (const BH of this._def.checks) "max" === BH.kind && (null === HH || BH.value < HH) && (HH = BH.value);
        return null != HH ? new Date(HH) : null
      }
    }
    dH.create = HH => new dH({
      checks: [],
      coerce: (null === HH || void 0 === HH ? void 0 : HH.coerce) || !1,
      typeName: KB.ZodDate,
      ...fH(HH)
    });
    class aH extends lH {
      _parse(HH) {
        if (this._getType(HH) !== EH.symbol) {
          const BH = this._getOrReturnCtx(HH);
          return xH(BH, {
            code: GH.invalid_type,
            expected: EH.symbol,
            received: BH.parsedType
          }), PH
        }
        return UH(HH.data)
      }
    }
    aH.create = HH => new aH({
      typeName: KB.ZodSymbol,
      ...fH(HH)
    });
    class sH extends lH {
      _parse(HH) {
        if (this._getType(HH) !== EH.undefined) {
          const BH = this._getOrReturnCtx(HH);
          return xH(BH, {
            code: GH.invalid_type,
            expected: EH.undefined,
            received: BH.parsedType
          }), PH
        }
        return UH(HH.data)
      }
    }
    sH.create = HH => new sH({
      typeName: KB.ZodUndefined,
      ...fH(HH)
    });
    class JH extends lH {
      _parse(HH) {
        if (this._getType(HH) !== EH.null) {
          const BH = this._getOrReturnCtx(HH);
          return xH(BH, {
            code: GH.invalid_type,
            expected: EH.null,
            received: BH.parsedType
          }), PH
        }
        return UH(HH.data)
      }
    }
    JH.create = HH => new JH({
      typeName: KB.ZodNull,
      ...fH(HH)
    });
    class iH extends lH {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(HH) {
        return UH(HH.data)
      }
    }
    iH.create = HH => new iH({
      typeName: KB.ZodAny,
      ...fH(HH)
    });
    class pH extends lH {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(HH) {
        return UH(HH.data)
      }
    }
    pH.create = HH => new pH({
      typeName: KB.ZodUnknown,
      ...fH(HH)
    });
    class yH extends lH {
      _parse(HH) {
        const BH = this._getOrReturnCtx(HH);
        return xH(BH, {
          code: GH.invalid_type,
          expected: EH.never,
          received: BH.parsedType
        }), PH
      }
    }
    yH.create = HH => new yH({
      typeName: KB.ZodNever,
      ...fH(HH)
    });
    class HB extends lH {
      _parse(HH) {
        if (this._getType(HH) !== EH.undefined) {
          const BH = this._getOrReturnCtx(HH);
          return xH(BH, {
            code: GH.invalid_type,
            expected: EH.void,
            received: BH.parsedType
          }), PH
        }
        return UH(HH.data)
      }
    }
    HB.create = HH => new HB({
      typeName: KB.ZodVoid,
      ...fH(HH)
    });
    class BB extends lH {
      _parse(HH) {
        const {
          ctx: BH,
          status: LH
        } = this._processInputParams(HH), AH = this._def;
        if (BH.parsedType !== EH.array) return xH(BH, {
          code: GH.invalid_type,
          expected: EH.array,
          received: BH.parsedType
        }), PH;
        if (null !== AH.exactLength) {
          const HH = BH.data.length > AH.exactLength.value,
            rH = BH.data.length < AH.exactLength.value;
          (HH || rH) && (xH(BH, {
            code: HH ? GH.too_big : GH.too_small,
            minimum: rH ? AH.exactLength.value : void 0,
            maximum: HH ? AH.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: AH.exactLength.message
          }), LH.gu())
        }
        if (null !== AH.minLength && BH.data.length < AH.minLength.value && (xH(BH, {
            code: GH.too_small,
            minimum: AH.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: AH.minLength.message
          }), LH.gu()), null !== AH.maxLength && BH.data.length > AH.maxLength.value && (xH(BH, {
            code: GH.too_big,
            maximum: AH.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: AH.maxLength.message
          }), LH.gu()), BH.common.async) return Promise.all([...BH.data].map(((HH, LH) => AH.type._parseAsync(new oH(BH, HH, BH.path, LH))))).then((HH => vH.mergeArray(LH, HH)));
        const rH = [...BH.data].map(((HH, LH) => AH.type._parseSync(new oH(BH, HH, BH.path, LH))));
        return vH.mergeArray(LH, rH)
      }
      get element() {
        return this._def.type
      }
      min(HH, BH) {
        return new BB({
          ...this._def,
          minLength: {
            value: HH,
            message: mH.toString(BH)
          }
        })
      }
      max(HH, BH) {
        return new BB({
          ...this._def,
          maxLength: {
            value: HH,
            message: mH.toString(BH)
          }
        })
      }
      length(HH, BH) {
        return new BB({
          ...this._def,
          exactLength: {
            value: HH,
            message: mH.toString(BH)
          }
        })
      }
      nonempty(HH) {
        return this.min(1, HH)
      }
    }

    function LB(HH) {
      if (HH instanceof AB) {
        const BH = {};
        for (const LH in HH.shape) {
          const AH = HH.shape[LH];
          BH[LH] = TB.create(LB(AH))
        }
        return new AB({
          ...HH._def,
          shape: () => BH
        })
      }
      return HH instanceof BB ? new BB({
        ...HH._def,
        type: LB(HH.element)
      }) : HH instanceof TB ? TB.create(LB(HH.unwrap())) : HH instanceof UB ? UB.create(LB(HH.unwrap())) : HH instanceof CB ? CB.create(HH.items.map((HH => LB(HH)))) : HH
    }
    BB.create = (HH, BH) => new BB({
      type: HH,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: KB.ZodArray,
      ...fH(BH)
    });
    class AB extends lH {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const HH = this._def.shape(),
          BH = tH.objectKeys(HH);
        return this._cached = {
          shape: HH,
          keys: BH
        }
      }
      _parse(HH) {
        if (this._getType(HH) !== EH.object) {
          const BH = this._getOrReturnCtx(HH);
          return xH(BH, {
            code: GH.invalid_type,
            expected: EH.object,
            received: BH.parsedType
          }), PH
        }
        const {
          status: BH,
          ctx: LH
        } = this._processInputParams(HH), {
          shape: AH,
          keys: rH
        } = this._getCached(), SH = [];
        if (!(this._def.catchall instanceof yH && "strip" === this._def.unknownKeys))
          for (const tH in LH.data) rH.includes(tH) || SH.push(tH);
        const hH = [];
        for (const tH of rH) {
          const HH = AH[tH],
            BH = LH.data[tH];
          hH.push({
            key: {
              status: "valid",
              value: tH
            },
            value: HH._parse(new oH(LH, BH, LH.path, tH)),
            alwaysSet: tH in LH.data
          })
        }
        if (this._def.catchall instanceof yH) {
          const HH = this._def.unknownKeys;
          if ("passthrough" === HH)
            for (const BH of SH) hH.push({
              key: {
                status: "valid",
                value: BH
              },
              value: {
                status: "valid",
                value: LH.data[BH]
              }
            });
          else if ("strict" === HH) SH.length > 0 && (xH(LH, {
            code: GH.unrecognized_keys,
            keys: SH
          }), BH.gu());
          else if ("strip" !== HH) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const HH = this._def.catchall;
          for (const BH of SH) {
            const AH = LH.data[BH];
            hH.push({
              key: {
                status: "valid",
                value: BH
              },
              value: HH._parse(new oH(LH, AH, LH.path, BH)),
              alwaysSet: BH in LH.data
            })
          }
        }
        return LH.common.async ? Promise.resolve().then((async () => {
          const HH = [];
          for (const BH of hH) {
            const LH = await BH.key;
            HH.push({
              key: LH,
              value: await BH.value,
              alwaysSet: BH.alwaysSet
            })
          }
          return HH
        })).then((HH => vH.mergeObjectSync(BH, HH))) : vH.mergeObjectSync(BH, hH)
      }
      get shape() {
        return this._def.shape()
      }
      strict(HH) {
        return mH.errToObj, new AB({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== HH ? {
            errorMap: (BH, LH) => {
              var AH, rH, SH, hH;
              const tH = null !== (SH = null === (rH = (AH = this._def).errorMap) || void 0 === rH ? void 0 : rH.call(AH, BH, LH).message) && void 0 !== SH ? SH : LH.defaultError;
              return "unrecognized_keys" === BH.code ? {
                message: null !== (hH = mH.errToObj(HH).message) && void 0 !== hH ? hH : tH
              } : {
                message: tH
              }
            }
          } : {}
        })
      }
      strip() {
        return new AB({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new AB({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(HH) {
        return new AB({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...HH
          })
        })
      }
      merge(HH) {
        return new AB({
          unknownKeys: HH._def.unknownKeys,
          catchall: HH._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...HH._def.shape()
          }),
          typeName: KB.ZodObject
        })
      }
      setKey(HH, BH) {
        return this.augment({
          [HH]: BH
        })
      }
      catchall(HH) {
        return new AB({
          ...this._def,
          catchall: HH
        })
      }
      XY(HH) {
        const BH = {};
        return tH.objectKeys(HH).forEach((LH => {
          HH[LH] && this.shape[LH] && (BH[LH] = this.shape[LH])
        })), new AB({
          ...this._def,
          shape: () => BH
        })
      }
      omit(HH) {
        const BH = {};
        return tH.objectKeys(this.shape).forEach((LH => {
          HH[LH] || (BH[LH] = this.shape[LH])
        })), new AB({
          ...this._def,
          shape: () => BH
        })
      }
      deepPartial() {
        return LB(this)
      }
      partial(HH) {
        const BH = {};
        return tH.objectKeys(this.shape).forEach((LH => {
          const AH = this.shape[LH];
          HH && !HH[LH] ? BH[LH] = AH : BH[LH] = AH.optional()
        })), new AB({
          ...this._def,
          shape: () => BH
        })
      }
      required(HH) {
        const BH = {};
        return tH.objectKeys(this.shape).forEach((LH => {
          if (HH && !HH[LH]) BH[LH] = this.shape[LH];
          else {
            let HH = this.shape[LH];
            for (; HH instanceof TB;) HH = HH._def.innerType;
            BH[LH] = HH
          }
        })), new AB({
          ...this._def,
          shape: () => BH
        })
      }
      keyof() {
        return WB(tH.objectKeys(this.shape))
      }
    }
    AB.create = (HH, BH) => new AB({
      shape: () => HH,
      unknownKeys: "strip",
      catchall: yH.create(),
      typeName: KB.ZodObject,
      ...fH(BH)
    }), AB.strictCreate = (HH, BH) => new AB({
      shape: () => HH,
      unknownKeys: "strict",
      catchall: yH.create(),
      typeName: KB.ZodObject,
      ...fH(BH)
    }), AB.lazycreate = (HH, BH) => new AB({
      shape: HH,
      unknownKeys: "strip",
      catchall: yH.create(),
      typeName: KB.ZodObject,
      ...fH(BH)
    });
    class rB extends lH {
      _parse(HH) {
        const {
          ctx: BH
        } = this._processInputParams(HH), LH = this._def.options;
        if (BH.common.async) return Promise.all(LH.map((async HH => {
          const LH = {
            ...BH,
            common: {
              ...BH.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await HH._parseAsync({
              data: BH.data,
              path: BH.path,
              parent: LH
            }),
            ctx: LH
          }
        }))).then((function(HH) {
          for (const BH of HH)
            if ("valid" === BH.result.status) return BH.result;
          for (const AH of HH)
            if ("gu" === AH.result.status) return BH.common.issues.push(...AH.ctx.common.issues), AH.result;
          const LH = HH.map((HH => new YH(HH.ctx.common.issues)));
          return xH(BH, {
            code: GH.invalid_union,
            unionErrors: LH
          }), PH
        }));
        {
          let HH;
          const AH = [];
          for (const SH of LH) {
            const LH = {
                ...BH,
                common: {
                  ...BH.common,
                  issues: []
                },
                parent: null
              },
              rH = SH._parseSync({
                data: BH.data,
                path: BH.path,
                parent: LH
              });
            if ("valid" === rH.status) return rH;
            "gu" !== rH.status || HH || (HH = {
              result: rH,
              ctx: LH
            }), LH.common.issues.length && AH.push(LH.common.issues)
          }
          if (HH) return BH.common.issues.push(...HH.ctx.common.issues), HH.result;
          const rH = AH.map((HH => new YH(HH)));
          return xH(BH, {
            code: GH.invalid_union,
            unionErrors: rH
          }), PH
        }
      }
      get options() {
        return this._def.options
      }
    }
    rB.create = (HH, BH) => new rB({
      options: HH,
      typeName: KB.ZodUnion,
      ...fH(BH)
    });
    const SB = HH => HH instanceof uB ? SB(HH.schema) : HH instanceof PB ? SB(HH.innerType()) : HH instanceof QB ? [HH.value] : HH instanceof MB ? HH.options : HH instanceof xB ? Object.keys(HH.enum) : HH instanceof VB ? SB(HH._def.innerType) : HH instanceof sH ? [void 0] : HH instanceof JH ? [null] : null;
    class hB extends lH {
      _parse(HH) {
        const {
          ctx: BH
        } = this._processInputParams(HH);
        if (BH.parsedType !== EH.object) return xH(BH, {
          code: GH.invalid_type,
          expected: EH.object,
          received: BH.parsedType
        }), PH;
        const LH = this.discriminator,
          AH = BH.data[LH],
          rH = this.optionsMap.get(AH);
        return rH ? BH.common.async ? rH._parseAsync({
          data: BH.data,
          path: BH.path,
          parent: BH
        }) : rH._parseSync({
          data: BH.data,
          path: BH.path,
          parent: BH
        }) : (xH(BH, {
          code: GH.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [LH]
        }), PH)
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
      static create(HH, BH, LH) {
        const AH = new Map;
        for (const rH of BH) {
          const BH = SB(rH.shape[HH]);
          if (!BH) throw new Error(`A discriminator value for key \`${HH}\` could not be extracted from all schema options`);
          for (const LH of BH) {
            if (AH.has(LH)) throw new Error(`Discriminator property ${String(HH)} has duplicate value ${String(LH)}`);
            AH.set(LH, rH)
          }
        }
        return new hB({
          typeName: KB.ZodDiscriminatedUnion,
          discriminator: HH,
          options: BH,
          optionsMap: AH,
          ...fH(LH)
        })
      }
    }

    function tB(HH, BH) {
      const LH = XH(HH),
        AH = XH(BH);
      if (HH === BH) return {
        valid: !0,
        data: HH
      };
      if (LH === EH.object && AH === EH.object) {
        const LH = tH.objectKeys(BH),
          AH = tH.objectKeys(HH).filter((HH => -1 !== LH.indexOf(HH))),
          rH = {
            ...HH,
            ...BH
          };
        for (const SH of AH) {
          const LH = tB(HH[SH], BH[SH]);
          if (!LH.valid) return {
            valid: !1
          };
          rH[SH] = LH.data
        }
        return {
          valid: !0,
          data: rH
        }
      }
      if (LH === EH.array && AH === EH.array) {
        if (HH.length !== BH.length) return {
          valid: !1
        };
        const LH = [];
        for (let AH = 0; AH < HH.length; AH++) {
          const rH = tB(HH[AH], BH[AH]);
          if (!rH.valid) return {
            valid: !1
          };
          LH.push(rH.data)
        }
        return {
          valid: !0,
          data: LH
        }
      }
      return LH === EH.date && AH === EH.date && +HH === +BH ? {
        valid: !0,
        data: HH
      } : {
        valid: !1
      }
    }
    class zB extends lH {
      _parse(HH) {
        const {
          status: BH,
          ctx: LH
        } = this._processInputParams(HH), AH = (HH, AH) => {
          if (VH(HH) || VH(AH)) return PH;
          const rH = tB(HH.value, AH.value);
          return rH.valid ? ((OH(HH) || OH(AH)) && BH.gu(), {
            status: BH.value,
            value: rH.data
          }) : (xH(LH, {
            code: GH.invalid_intersection_types
          }), PH)
        };
        return LH.common.async ? Promise.all([this._def.left._parseAsync({
          data: LH.data,
          path: LH.path,
          parent: LH
        }), this._def.right._parseAsync({
          data: LH.data,
          path: LH.path,
          parent: LH
        })]).then((HH => {
          let [BH, LH] = HH;
          return AH(BH, LH)
        })) : AH(this._def.left._parseSync({
          data: LH.data,
          path: LH.path,
          parent: LH
        }), this._def.right._parseSync({
          data: LH.data,
          path: LH.path,
          parent: LH
        }))
      }
    }
    zB.create = (HH, BH, LH) => new zB({
      left: HH,
      right: BH,
      typeName: KB.ZodIntersection,
      ...fH(LH)
    });
    class CB extends lH {
      _parse(HH) {
        const {
          status: BH,
          ctx: LH
        } = this._processInputParams(HH);
        if (LH.parsedType !== EH.array) return xH(LH, {
          code: GH.invalid_type,
          expected: EH.array,
          received: LH.parsedType
        }), PH;
        if (LH.data.length < this._def.items.length) return xH(LH, {
          code: GH.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), PH;
        !this._def.rest && LH.data.length > this._def.items.length && (xH(LH, {
          code: GH.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), BH.gu());
        const AH = [...LH.data].map(((HH, BH) => {
          const AH = this._def.items[BH] || this._def.rest;
          return AH ? AH._parse(new oH(LH, HH, LH.path, BH)) : null
        })).filter((HH => !!HH));
        return LH.common.async ? Promise.all(AH).then((HH => vH.mergeArray(BH, HH))) : vH.mergeArray(BH, AH)
      }
      get items() {
        return this._def.items
      }
      rest(HH) {
        return new CB({
          ...this._def,
          rest: HH
        })
      }
    }
    CB.create = (HH, BH) => {
      if (!Array.isArray(HH)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new CB({
        items: HH,
        typeName: KB.ZodTuple,
        rest: null,
        ...fH(BH)
      })
    };
    class EB extends lH {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(HH) {
        const {
          status: BH,
          ctx: LH
        } = this._processInputParams(HH);
        if (LH.parsedType !== EH.object) return xH(LH, {
          code: GH.invalid_type,
          expected: EH.object,
          received: LH.parsedType
        }), PH;
        const AH = [],
          rH = this._def.keyType,
          SH = this._def.valueType;
        for (const hH in LH.data) AH.push({
          key: rH._parse(new oH(LH, hH, LH.path, hH)),
          value: SH._parse(new oH(LH, LH.data[hH], LH.path, hH))
        });
        return LH.common.async ? vH.mergeObjectAsync(BH, AH) : vH.mergeObjectSync(BH, AH)
      }
      get element() {
        return this._def.valueType
      }
      static create(HH, BH, LH) {
        return new EB(BH instanceof lH ? {
          keyType: HH,
          valueType: BH,
          typeName: KB.ZodRecord,
          ...fH(LH)
        } : {
          keyType: nH.create(),
          valueType: HH,
          typeName: KB.ZodRecord,
          ...fH(BH)
        })
      }
    }
    class XB extends lH {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(HH) {
        const {
          status: BH,
          ctx: LH
        } = this._processInputParams(HH);
        if (LH.parsedType !== EH.map) return xH(LH, {
          code: GH.invalid_type,
          expected: EH.map,
          received: LH.parsedType
        }), PH;
        const AH = this._def.keyType,
          rH = this._def.valueType,
          SH = [...LH.data.entries()].map(((HH, BH) => {
            let [SH, hH] = HH;
            return {
              key: AH._parse(new oH(LH, SH, LH.path, [BH, "key"])),
              value: rH._parse(new oH(LH, hH, LH.path, [BH, "value"]))
            }
          }));
        if (LH.common.async) {
          const HH = new Map;
          return Promise.resolve().then((async () => {
            for (const LH of SH) {
              const AH = await LH.key,
                rH = await LH.value;
              if ("aborted" === AH.status || "aborted" === rH.status) return PH;
              "gu" !== AH.status && "gu" !== rH.status || BH.gu(), HH.set(AH.value, rH.value)
            }
            return {
              status: BH.value,
              value: HH
            }
          }))
        } {
          const HH = new Map;
          for (const LH of SH) {
            const AH = LH.key,
              rH = LH.value;
            if ("aborted" === AH.status || "aborted" === rH.status) return PH;
            "gu" !== AH.status && "gu" !== rH.status || BH.gu(), HH.set(AH.value, rH.value)
          }
          return {
            status: BH.value,
            value: HH
          }
        }
      }
    }
    XB.create = (HH, BH, LH) => new XB({
      valueType: BH,
      keyType: HH,
      typeName: KB.ZodMap,
      ...fH(LH)
    });
    class GB extends lH {
      _parse(HH) {
        const {
          status: BH,
          ctx: LH
        } = this._processInputParams(HH);
        if (LH.parsedType !== EH.set) return xH(LH, {
          code: GH.invalid_type,
          expected: EH.set,
          received: LH.parsedType
        }), PH;
        const AH = this._def;
        null !== AH.minSize && LH.data.size < AH.minSize.value && (xH(LH, {
          code: GH.too_small,
          minimum: AH.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: AH.minSize.message
        }), BH.gu()), null !== AH.maxSize && LH.data.size > AH.maxSize.value && (xH(LH, {
          code: GH.too_big,
          maximum: AH.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: AH.maxSize.message
        }), BH.gu());
        const rH = this._def.valueType;

        function SH(HH) {
          const LH = new Set;
          for (const AH of HH) {
            if ("aborted" === AH.status) return PH;
            "gu" === AH.status && BH.gu(), LH.add(AH.value)
          }
          return {
            status: BH.value,
            value: LH
          }
        }
        const hH = [...LH.data.values()].map(((HH, BH) => rH._parse(new oH(LH, HH, LH.path, BH))));
        return LH.common.async ? Promise.all(hH).then((HH => SH(HH))) : SH(hH)
      }
      min(HH, BH) {
        return new GB({
          ...this._def,
          minSize: {
            value: HH,
            message: mH.toString(BH)
          }
        })
      }
      max(HH, BH) {
        return new GB({
          ...this._def,
          maxSize: {
            value: HH,
            message: mH.toString(BH)
          }
        })
      }
      size(HH, BH) {
        return this.min(HH, BH).max(HH, BH)
      }
      nonempty(HH) {
        return this.min(1, HH)
      }
    }
    GB.create = (HH, BH) => new GB({
      valueType: HH,
      minSize: null,
      maxSize: null,
      typeName: KB.ZodSet,
      ...fH(BH)
    });
    class YB extends lH {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(HH) {
        const {
          ctx: BH
        } = this._processInputParams(HH);
        if (BH.parsedType !== EH.function) return xH(BH, {
          code: GH.invalid_type,
          expected: EH.function,
          received: BH.parsedType
        }), PH;

        function LH(HH, LH) {
          return MH({
            data: HH,
            path: BH.path,
            errorMaps: [BH.common.contextualErrorMap, BH.schemaErrorMap, WH(), uH].filter((HH => !!HH)),
            issueData: {
              code: GH.invalid_arguments,
              argumentsError: LH
            }
          })
        }

        function AH(HH, LH) {
          return MH({
            data: HH,
            path: BH.path,
            errorMaps: [BH.common.contextualErrorMap, BH.schemaErrorMap, WH(), uH].filter((HH => !!HH)),
            issueData: {
              code: GH.invalid_return_type,
              returnTypeError: LH
            }
          })
        }
        const rH = {
            errorMap: BH.common.contextualErrorMap
          },
          SH = BH.data;
        if (this._def.returns instanceof vB) {
          const HH = this;
          return UH((async function() {
            for (var BH = arguments.length, hH = new Array(BH), tH = 0; tH < BH; tH++) hH[tH] = arguments[tH];
            const zH = new YH([]),
              CH = await HH._def.args.parseAsync(hH, rH).catch((HH => {
                throw zH.addIssue(LH(hH, HH)), zH
              })),
              EH = await Reflect.apply(SH, this, CH);
            return await HH._def.returns._def.type.parseAsync(EH, rH).catch((HH => {
              throw zH.addIssue(AH(EH, HH)), zH
            }))
          }))
        } {
          const HH = this;
          return UH((function() {
            for (var BH = arguments.length, hH = new Array(BH), tH = 0; tH < BH; tH++) hH[tH] = arguments[tH];
            const zH = HH._def.args.safeParse(hH, rH);
            if (!zH.success) throw new YH([LH(hH, zH.error)]);
            const CH = Reflect.apply(SH, this, zH.data),
              EH = HH._def.returns.safeParse(CH, rH);
            if (!EH.success) throw new YH([AH(CH, EH.error)]);
            return EH.data
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
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        return new YB({
          ...this._def,
          args: CB.create(BH).rest(pH.create())
        })
      }
      returns(HH) {
        return new YB({
          ...this._def,
          returns: HH
        })
      }
      implement(HH) {
        return this.parse(HH)
      }
      strictImplement(HH) {
        return this.parse(HH)
      }
      static create(HH, BH, LH) {
        return new YB({
          args: HH || CB.create([]).rest(pH.create()),
          returns: BH || pH.create(),
          typeName: KB.ZodFunction,
          ...fH(LH)
        })
      }
    }
    class uB extends lH {
      get schema() {
        return this._def.getter()
      }
      _parse(HH) {
        const {
          ctx: BH
        } = this._processInputParams(HH);
        return this._def.getter()._parse({
          data: BH.data,
          path: BH.path,
          parent: BH
        })
      }
    }
    uB.create = (HH, BH) => new uB({
      getter: HH,
      typeName: KB.ZodLazy,
      ...fH(BH)
    });
    class QB extends lH {
      _parse(HH) {
        if (HH.data !== this._def.value) {
          const BH = this._getOrReturnCtx(HH);
          return xH(BH, {
            received: BH.data,
            code: GH.invalid_literal,
            expected: this._def.value
          }), PH
        }
        return {
          status: "valid",
          value: HH.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function WB(HH, BH) {
      return new MB({
        values: HH,
        typeName: KB.ZodEnum,
        ...fH(BH)
      })
    }
    QB.create = (HH, BH) => new QB({
      value: HH,
      typeName: KB.ZodLiteral,
      ...fH(BH)
    });
    class MB extends lH {
      _parse(HH) {
        if ("string" !== typeof HH.data) {
          const BH = this._getOrReturnCtx(HH),
            LH = this._def.values;
          return xH(BH, {
            expected: tH.joinValues(LH),
            received: BH.parsedType,
            code: GH.invalid_type
          }), PH
        }
        if (-1 === this._def.values.indexOf(HH.data)) {
          const BH = this._getOrReturnCtx(HH),
            LH = this._def.values;
          return xH(BH, {
            received: BH.data,
            code: GH.invalid_enum_value,
            options: LH
          }), PH
        }
        return UH(HH.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const HH = {};
        for (const BH of this._def.values) HH[BH] = BH;
        return HH
      }
      get Values() {
        const HH = {};
        for (const BH of this._def.values) HH[BH] = BH;
        return HH
      }
      get Enum() {
        const HH = {};
        for (const BH of this._def.values) HH[BH] = BH;
        return HH
      }
      extract(HH) {
        return MB.create(HH)
      }
      exclude(HH) {
        return MB.create(this.options.filter((BH => !HH.includes(BH))))
      }
    }
    MB.create = WB;
    class xB extends lH {
      _parse(HH) {
        const BH = tH.getValidEnumValues(this._def.values),
          LH = this._getOrReturnCtx(HH);
        if (LH.parsedType !== EH.string && LH.parsedType !== EH.number) {
          const HH = tH.objectValues(BH);
          return xH(LH, {
            expected: tH.joinValues(HH),
            received: LH.parsedType,
            code: GH.invalid_type
          }), PH
        }
        if (-1 === BH.indexOf(HH.data)) {
          const HH = tH.objectValues(BH);
          return xH(LH, {
            received: LH.data,
            code: GH.invalid_enum_value,
            options: HH
          }), PH
        }
        return UH(HH.data)
      }
      get enum() {
        return this._def.values
      }
    }
    xB.create = (HH, BH) => new xB({
      values: HH,
      typeName: KB.ZodNativeEnum,
      ...fH(BH)
    });
    class vB extends lH {
      unwrap() {
        return this._def.type
      }
      _parse(HH) {
        const {
          ctx: BH
        } = this._processInputParams(HH);
        if (BH.parsedType !== EH.promise && !1 === BH.common.async) return xH(BH, {
          code: GH.invalid_type,
          expected: EH.promise,
          received: BH.parsedType
        }), PH;
        const LH = BH.parsedType === EH.promise ? BH.data : Promise.resolve(BH.data);
        return UH(LH.then((HH => this._def.type.parseAsync(HH, {
          path: BH.path,
          errorMap: BH.common.contextualErrorMap
        }))))
      }
    }
    vB.create = (HH, BH) => new vB({
      type: HH,
      typeName: KB.ZodPromise,
      ...fH(BH)
    });
    class PB extends lH {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === KB.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(HH) {
        const {
          status: BH,
          ctx: LH
        } = this._processInputParams(HH), AH = this._def.effect || null, rH = {
          addIssue: HH => {
            xH(LH, HH), HH.fatal ? BH.abort() : BH.gu()
          },
          get path() {
            return LH.path
          }
        };
        if (rH.addIssue = rH.addIssue.bind(rH), "preprocess" === AH.type) {
          const HH = AH.transform(LH.data, rH);
          return LH.common.issues.length ? {
            status: "gu",
            value: LH.data
          } : LH.common.async ? Promise.resolve(HH).then((HH => this._def.schema._parseAsync({
            data: HH,
            path: LH.path,
            parent: LH
          }))) : this._def.schema._parseSync({
            data: HH,
            path: LH.path,
            parent: LH
          })
        }
        if ("refinement" === AH.type) {
          const HH = HH => {
            const BH = AH.refinement(HH, rH);
            if (LH.common.async) return Promise.resolve(BH);
            if (BH instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return HH
          };
          if (!1 === LH.common.async) {
            const AH = this._def.schema._parseSync({
              data: LH.data,
              path: LH.path,
              parent: LH
            });
            return "aborted" === AH.status ? PH : ("gu" === AH.status && BH.gu(), HH(AH.value), {
              status: BH.value,
              value: AH.value
            })
          }
          return this._def.schema._parseAsync({
            data: LH.data,
            path: LH.path,
            parent: LH
          }).then((LH => "aborted" === LH.status ? PH : ("gu" === LH.status && BH.gu(), HH(LH.value).then((() => ({
            status: BH.value,
            value: LH.value
          }))))))
        }
        if ("transform" === AH.type) {
          if (!1 === LH.common.async) {
            const HH = this._def.schema._parseSync({
              data: LH.data,
              path: LH.path,
              parent: LH
            });
            if (!bH(HH)) return HH;
            const SH = AH.transform(HH.value, rH);
            if (SH instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: BH.value,
              value: SH
            }
          }
          return this._def.schema._parseAsync({
            data: LH.data,
            path: LH.path,
            parent: LH
          }).then((HH => bH(HH) ? Promise.resolve(AH.transform(HH.value, rH)).then((HH => ({
            status: BH.value,
            value: HH
          }))) : HH))
        }
        tH.assertNever(AH)
      }
    }
    PB.create = (HH, BH, LH) => new PB({
      schema: HH,
      typeName: KB.ZodEffects,
      effect: BH,
      ...fH(LH)
    }), PB.createWithPreprocess = (HH, BH, LH) => new PB({
      schema: BH,
      effect: {
        type: "preprocess",
        transform: HH
      },
      typeName: KB.ZodEffects,
      ...fH(LH)
    });
    class TB extends lH {
      _parse(HH) {
        return this._getType(HH) === EH.undefined ? UH(void 0) : this._def.innerType._parse(HH)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    TB.create = (HH, BH) => new TB({
      innerType: HH,
      typeName: KB.ZodOptional,
      ...fH(BH)
    });
    class UB extends lH {
      _parse(HH) {
        return this._getType(HH) === EH.null ? UH(null) : this._def.innerType._parse(HH)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    UB.create = (HH, BH) => new UB({
      innerType: HH,
      typeName: KB.ZodNullable,
      ...fH(BH)
    });
    class VB extends lH {
      _parse(HH) {
        const {
          ctx: BH
        } = this._processInputParams(HH);
        let LH = BH.data;
        return BH.parsedType === EH.undefined && (LH = this._def.defaultValue()), this._def.innerType._parse({
          data: LH,
          path: BH.path,
          parent: BH
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    VB.create = (HH, BH) => new VB({
      innerType: HH,
      typeName: KB.ZodDefault,
      defaultValue: "function" === typeof BH.default ? BH.default : () => BH.default,
      ...fH(BH)
    });
    class OB extends lH {
      _parse(HH) {
        const {
          ctx: BH
        } = this._processInputParams(HH), LH = {
          ...BH,
          common: {
            ...BH.common,
            issues: []
          }
        }, AH = this._def.innerType._parse({
          data: LH.data,
          path: LH.path,
          parent: {
            ...LH
          }
        });
        return kH(AH) ? AH.then((HH => ({
          status: "valid",
          value: "valid" === HH.status ? HH.value : this._def.catchValue({
            get error() {
              return new YH(LH.common.issues)
            },
            input: LH.data
          })
        }))) : {
          status: "valid",
          value: "valid" === AH.status ? AH.value : this._def.catchValue({
            get error() {
              return new YH(LH.common.issues)
            },
            input: LH.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    OB.create = (HH, BH) => new OB({
      innerType: HH,
      typeName: KB.ZodCatch,
      catchValue: "function" === typeof BH.catch ? BH.catch : () => BH.catch,
      ...fH(BH)
    });
    class bB extends lH {
      _parse(HH) {
        if (this._getType(HH) !== EH.nan) {
          const BH = this._getOrReturnCtx(HH);
          return xH(BH, {
            code: GH.invalid_type,
            expected: EH.nan,
            received: BH.parsedType
          }), PH
        }
        return {
          status: "valid",
          value: HH.data
        }
      }
    }
    bB.create = HH => new bB({
      typeName: KB.ZodNaN,
      ...fH(HH)
    });
    const kB = Symbol("zod_brand");
    class mB extends lH {
      _parse(HH) {
        const {
          ctx: BH
        } = this._processInputParams(HH), LH = BH.data;
        return this._def.type._parse({
          data: LH,
          path: BH.path,
          parent: BH
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class oB extends lH {
      _parse(HH) {
        const {
          status: BH,
          ctx: LH
        } = this._processInputParams(HH);
        if (LH.common.async) {
          return (async () => {
            const HH = await this._def.in._parseAsync({
              data: LH.data,
              path: LH.path,
              parent: LH
            });
            return "aborted" === HH.status ? PH : "gu" === HH.status ? (BH.gu(), TH(HH.value)) : this._def.out._parseAsync({
              data: HH.value,
              path: LH.path,
              parent: LH
            })
          })()
        } {
          const HH = this._def.in._parseSync({
            data: LH.data,
            path: LH.path,
            parent: LH
          });
          return "aborted" === HH.status ? PH : "gu" === HH.status ? (BH.gu(), {
            status: "gu",
            value: HH.value
          }) : this._def.out._parseSync({
            data: HH.value,
            path: LH.path,
            parent: LH
          })
        }
      }
      static create(HH, BH) {
        return new oB({
          in: HH,
          out: BH,
          typeName: KB.ZodPipeline
        })
      }
    }
    class IB extends lH {
      _parse(HH) {
        const BH = this._def.innerType._parse(HH);
        return bH(BH) && (BH.value = Object.freeze(BH.value)), BH
      }
    }
    IB.create = (HH, BH) => new IB({
      innerType: HH,
      typeName: KB.ZodReadonly,
      ...fH(BH)
    });
    const fB = function(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          LH = arguments.length > 2 ? arguments[2] : void 0;
        return HH ? iH.create().superRefine(((AH, rH) => {
          var SH, hH;
          if (!HH(AH)) {
            const HH = "function" === typeof BH ? BH(AH) : "string" === typeof BH ? {
                message: BH
              } : BH,
              tH = null === (hH = null !== (SH = HH.fatal) && void 0 !== SH ? SH : LH) || void 0 === hH || hH,
              zH = "string" === typeof HH ? {
                message: HH
              } : HH;
            rH.addIssue({
              code: "custom",
              ...zH,
              fatal: tH
            })
          }
        })) : iH.create()
      },
      lB = {
        object: AB.lazycreate
      };
    var KB;
    ! function(HH) {
      HH.ZodString = "ZodString", HH.ZodNumber = "ZodNumber", HH.ZodNaN = "ZodNaN", HH.ZodBigInt = "ZodBigInt", HH.ZodBoolean = "ZodBoolean", HH.ZodDate = "ZodDate", HH.ZodSymbol = "ZodSymbol", HH.ZodUndefined = "ZodUndefined", HH.ZodNull = "ZodNull", HH.ZodAny = "ZodAny", HH.ZodUnknown = "ZodUnknown", HH.ZodNever = "ZodNever", HH.ZodVoid = "ZodVoid", HH.ZodArray = "ZodArray", HH.ZodObject = "ZodObject", HH.ZodUnion = "ZodUnion", HH.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", HH.ZodIntersection = "ZodIntersection", HH.ZodTuple = "ZodTuple", HH.ZodRecord = "ZodRecord", HH.ZodMap = "ZodMap", HH.ZodSet = "ZodSet", HH.ZodFunction = "ZodFunction", HH.ZodLazy = "ZodLazy", HH.ZodLiteral = "ZodLiteral", HH.ZodEnum = "ZodEnum", HH.ZodEffects = "ZodEffects", HH.ZodNativeEnum = "ZodNativeEnum", HH.ZodOptional = "ZodOptional", HH.ZodNullable = "ZodNullable", HH.ZodDefault = "ZodDefault", HH.ZodCatch = "ZodCatch", HH.ZodPromise = "ZodPromise", HH.ZodBranded = "ZodBranded", HH.ZodPipeline = "ZodPipeline", HH.ZodReadonly = "ZodReadonly"
    }(KB || (KB = {}));
    const cB = nH.create,
      eB = DH.create,
      qB = bB.create,
      gB = wH.create,
      NB = ZH.create,
      RB = dH.create,
      jB = aH.create,
      nB = sH.create,
      FB = JH.create,
      DB = iH.create,
      wB = pH.create,
      ZB = yH.create,
      dB = HB.create,
      aB = BB.create,
      sB = AB.create,
      JB = AB.strictCreate,
      iB = rB.create,
      pB = hB.create,
      yB = zB.create,
      HL = CB.create,
      BL = EB.create,
      LL = XB.create,
      AL = GB.create,
      rL = YB.create,
      SL = uB.create,
      hL = QB.create,
      tL = MB.create,
      zL = xB.create,
      CL = vB.create,
      EL = PB.create,
      XL = TB.create,
      GL = UB.create,
      YL = PB.createWithPreprocess,
      uL = oB.create,
      QL = {
        string: HH => nH.create({
          ...HH,
          coerce: !0
        }),
        number: HH => DH.create({
          ...HH,
          coerce: !0
        }),
        boolean: HH => ZH.create({
          ...HH,
          coerce: !0
        }),
        bigint: HH => wH.create({
          ...HH,
          coerce: !0
        }),
        date: HH => dH.create({
          ...HH,
          coerce: !0
        })
      },
      WL = PH;
    var ML = Object.freeze({
        __proto__: null,
        defaultErrorMap: uH,
        setErrorMap: function(HH) {
          QH = HH
        },
        getErrorMap: WH,
        makeIssue: MH,
        EMPTY_PATH: [],
        addIssueToContext: xH,
        ParseStatus: vH,
        INVALID: PH,
        DIRTY: TH,
        OK: UH,
        isAborted: VH,
        isDirty: OH,
        isValid: bH,
        isAsync: kH,
        get util() {
          return tH
        },
        get objectUtil() {
          return zH
        },
        ZodParsedType: EH,
        getParsedType: XH,
        ZodType: lH,
        ZodString: nH,
        ZodNumber: DH,
        ZodBigInt: wH,
        ZodBoolean: ZH,
        ZodDate: dH,
        ZodSymbol: aH,
        ZodUndefined: sH,
        ZodNull: JH,
        ZodAny: iH,
        ZodUnknown: pH,
        ZodNever: yH,
        ZodVoid: HB,
        ZodArray: BB,
        ZodObject: AB,
        ZodUnion: rB,
        ZodDiscriminatedUnion: hB,
        ZodIntersection: zB,
        ZodTuple: CB,
        ZodRecord: EB,
        ZodMap: XB,
        ZodSet: GB,
        ZodFunction: YB,
        ZodLazy: uB,
        ZodLiteral: QB,
        ZodEnum: MB,
        ZodNativeEnum: xB,
        ZodPromise: vB,
        ZodEffects: PB,
        ZodTransformer: PB,
        ZodOptional: TB,
        ZodNullable: UB,
        ZodDefault: VB,
        ZodCatch: OB,
        ZodNaN: bB,
        BRAND: kB,
        ZodBranded: mB,
        ZodPipeline: oB,
        ZodReadonly: IB,
        custom: fB,
        Schema: lH,
        ZodSchema: lH,
        late: lB,
        get ZodFirstPartyTypeKind() {
          return KB
        },
        coerce: QL,
        any: DB,
        array: aB,
        bigint: gB,
        boolean: NB,
        date: RB,
        discriminatedUnion: pB,
        effect: EL,
        enum: tL,
        function: rL,
        instanceof: function(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${HH.name}`
          };
          return fB((BH => BH instanceof HH), BH)
        },
        intersection: yB,
        lazy: SL,
        literal: hL,
        map: LL,
        nan: qB,
        nativeEnum: zL,
        never: ZB,
        null: FB,
        nullable: GL,
        number: eB,
        object: sB,
        oboolean: () => NB().optional(),
        onumber: () => eB().optional(),
        optional: XL,
        ostring: () => cB().optional(),
        pipeline: uL,
        preprocess: YL,
        promise: CL,
        record: BL,
        set: AL,
        strictObject: JB,
        string: cB,
        symbol: jB,
        transformer: EL,
        tuple: HL,
        undefined: nB,
        union: iB,
        unknown: wB,
        void: dB,
        NEVER: WL,
        ZodIssueCode: GH,
        quotelessJson: HH => JSON.stringify(HH, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: YH
      }),
      xL = {
        exports: {}
      };
    ! function(HH) {
      var BH = function(HH) {
        var LH = 1e7,
          AH = 9007199254740992,
          rH = GH(AH),
          SH = "0123456789abcdefghijklmnopqrstuvwxyz",
          hH = "function" === typeof BigInt;

        function tH(HH, BH, LH, AH) {
          return "undefined" === typeof HH ? tH[0] : "undefined" !== typeof BH && (10 !== +BH || LH) ? ZH(HH, BH, LH, AH) : iH(HH)
        }

        function zH(HH, BH) {
          this.value = HH, this.sign = BH, this.isSmall = !1
        }

        function CH(HH) {
          this.value = HH, this.sign = HH < 0, this.isSmall = !0
        }

        function EH(HH) {
          this.value = HH
        }

        function XH(HH) {
          return -AH < HH && HH < AH
        }

        function GH(HH) {
          return HH < 1e7 ? [HH] : HH < 1e14 ? [HH % 1e7, Math.floor(HH / 1e7)] : [HH % 1e7, Math.floor(HH / 1e7) % 1e7, Math.floor(HH / 1e14)]
        }

        function YH(HH) {
          uH(HH);
          var BH = HH.length;
          if (BH < 4 && fH(HH, rH) < 0) switch (BH) {
            case 0:
              return 0;
            case 1:
              return HH[0];
            case 2:
              return HH[0] + HH[1] * LH;
            default:
              return HH[0] + (HH[1] + HH[2] * LH) * LH
          }
          return HH
        }

        function uH(HH) {
          for (var BH = HH.length; 0 === HH[--BH];);
          HH.length = BH + 1
        }

        function QH(HH) {
          for (var BH = new Array(HH), LH = -1; ++LH < HH;) BH[LH] = 0;
          return BH
        }

        function WH(HH) {
          return HH > 0 ? Math.floor(HH) : Math.ceil(HH)
        }

        function MH(HH, BH) {
          var AH, rH, SH = HH.length,
            hH = BH.length,
            tH = new Array(SH),
            zH = 0,
            CH = LH;
          for (rH = 0; rH < hH; rH++) zH = (AH = HH[rH] + BH[rH] + zH) >= CH ? 1 : 0, tH[rH] = AH - zH * CH;
          for (; rH < SH;) zH = (AH = HH[rH] + zH) === CH ? 1 : 0, tH[rH++] = AH - zH * CH;
          return zH > 0 && tH.push(zH), tH
        }

        function xH(HH, BH) {
          return HH.length >= BH.length ? MH(HH, BH) : MH(BH, HH)
        }

        function vH(HH, BH) {
          var AH, rH, SH = HH.length,
            hH = new Array(SH),
            tH = LH;
          for (rH = 0; rH < SH; rH++) AH = HH[rH] - tH + BH, BH = Math.floor(AH / tH), hH[rH] = AH - BH * tH, BH += 1;
          for (; BH > 0;) hH[rH++] = BH % tH, BH = Math.floor(BH / tH);
          return hH
        }

        function PH(HH, BH) {
          var AH, rH, SH = HH.length,
            hH = BH.length,
            tH = new Array(SH),
            zH = 0,
            CH = LH;
          for (AH = 0; AH < hH; AH++)(rH = HH[AH] - zH - BH[AH]) < 0 ? (rH += CH, zH = 1) : zH = 0, tH[AH] = rH;
          for (AH = hH; AH < SH; AH++) {
            if (!((rH = HH[AH] - zH) < 0)) {
              tH[AH++] = rH;
              break
            }
            rH += CH, tH[AH] = rH
          }
          for (; AH < SH; AH++) tH[AH] = HH[AH];
          return uH(tH), tH
        }

        function TH(HH, BH, AH) {
          var rH, SH, hH = HH.length,
            tH = new Array(hH),
            EH = -BH,
            XH = LH;
          for (rH = 0; rH < hH; rH++) SH = HH[rH] + EH, EH = Math.floor(SH / XH), SH %= XH, tH[rH] = SH < 0 ? SH + XH : SH;
          return "number" === typeof(tH = YH(tH)) ? (AH && (tH = -tH), new CH(tH)) : new zH(tH, AH)
        }

        function UH(HH, BH) {
          var AH, rH, SH, hH, tH = HH.length,
            zH = BH.length,
            CH = QH(tH + zH),
            EH = LH;
          for (SH = 0; SH < tH; ++SH) {
            hH = HH[SH];
            for (var XH = 0; XH < zH; ++XH) AH = hH * BH[XH] + CH[SH + XH], rH = Math.floor(AH / EH), CH[SH + XH] = AH - rH * EH, CH[SH + XH + 1] += rH
          }
          return uH(CH), CH
        }

        function VH(HH, BH) {
          var AH, rH, SH = HH.length,
            hH = new Array(SH),
            tH = LH,
            zH = 0;
          for (rH = 0; rH < SH; rH++) AH = HH[rH] * BH + zH, zH = Math.floor(AH / tH), hH[rH] = AH - zH * tH;
          for (; zH > 0;) hH[rH++] = zH % tH, zH = Math.floor(zH / tH);
          return hH
        }

        function OH(HH, BH) {
          for (var LH = []; BH-- > 0;) LH.push(0);
          return LH.concat(HH)
        }

        function bH(HH, BH) {
          var LH = Math.max(HH.length, BH.length);
          if (LH <= 30) return UH(HH, BH);
          LH = Math.ceil(LH / 2);
          var AH = HH.slice(LH),
            rH = HH.slice(0, LH),
            SH = BH.slice(LH),
            hH = BH.slice(0, LH),
            tH = bH(rH, hH),
            zH = bH(AH, SH),
            CH = bH(xH(rH, AH), xH(hH, SH)),
            EH = xH(xH(tH, OH(PH(PH(CH, tH), zH), LH)), OH(zH, 2 * LH));
          return uH(EH), EH
        }

        function kH(HH, BH, AH) {
          return new zH(HH < LH ? VH(BH, HH) : UH(BH, GH(HH)), AH)
        }

        function mH(HH) {
          var BH, AH, rH, SH, hH = HH.length,
            tH = QH(hH + hH),
            zH = LH;
          for (rH = 0; rH < hH; rH++) {
            AH = 0 - (SH = HH[rH]) * SH;
            for (var CH = rH; CH < hH; CH++) BH = SH * HH[CH] * 2 + tH[rH + CH] + AH, AH = Math.floor(BH / zH), tH[rH + CH] = BH - AH * zH;
            tH[rH + hH] = AH
          }
          return uH(tH), tH
        }

        function oH(HH, BH) {
          var AH, rH, SH, hH, tH = HH.length,
            zH = QH(tH),
            CH = LH;
          for (SH = 0, AH = tH - 1; AH >= 0; --AH) SH = (hH = SH * CH + HH[AH]) - (rH = WH(hH / BH)) * BH, zH[AH] = 0 | rH;
          return [zH, 0 | SH]
        }

        function IH(HH, BH) {
          var AH, rH = iH(BH);
          if (hH) return [new EH(HH.value / rH.value), new EH(HH.value % rH.value)];
          var SH, XH = HH.value,
            MH = rH.value;
          if (0 === MH) throw new Error("Cannot divide by zero");
          if (HH.isSmall) return rH.isSmall ? [new CH(WH(XH / MH)), new CH(XH % MH)] : [tH[0], HH];
          if (rH.isSmall) {
            if (1 === MH) return [HH, tH[0]];
            if (-1 == MH) return [HH.du(), tH[0]];
            var xH = Math.abs(MH);
            if (xH < LH) {
              SH = YH((AH = oH(XH, xH))[0]);
              var vH = AH[1];
              return HH.sign && (vH = -vH), "number" === typeof SH ? (HH.sign !== rH.sign && (SH = -SH), [new CH(SH), new CH(vH)]) : [new zH(SH, HH.sign !== rH.sign), new CH(vH)]
            }
            MH = GH(xH)
          }
          var TH = fH(XH, MH);
          if (-1 === TH) return [tH[0], HH];
          if (0 === TH) return [tH[HH.sign === rH.sign ? 1 : -1], tH[0]];
          AH = XH.length + MH.length <= 200 ? function(HH, BH) {
            var AH, rH, SH, hH, tH, zH, CH, EH = HH.length,
              XH = BH.length,
              GH = LH,
              uH = QH(BH.length),
              WH = BH[XH - 1],
              MH = Math.ceil(GH / (2 * WH)),
              xH = VH(HH, MH),
              vH = VH(BH, MH);
            for (xH.length <= EH && xH.push(0), vH.push(0), WH = vH[XH - 1], rH = EH - XH; rH >= 0; rH--) {
              for (AH = GH - 1, xH[rH + XH] !== WH && (AH = Math.floor((xH[rH + XH] * GH + xH[rH + XH - 1]) / WH)), SH = 0, hH = 0, zH = vH.length, tH = 0; tH < zH; tH++) SH += AH * vH[tH], CH = Math.floor(SH / GH), hH += xH[rH + tH] - (SH - CH * GH), SH = CH, hH < 0 ? (xH[rH + tH] = hH + GH, hH = -1) : (xH[rH + tH] = hH, hH = 0);
              for (; 0 !== hH;) {
                for (AH -= 1, SH = 0, tH = 0; tH < zH; tH++)(SH += xH[rH + tH] - GH + vH[tH]) < 0 ? (xH[rH + tH] = SH + GH, SH = 0) : (xH[rH + tH] = SH, SH = 1);
                hH += SH
              }
              uH[rH] = AH
            }
            return xH = oH(xH, MH)[0], [YH(uH), YH(xH)]
          }(XH, MH) : function(HH, BH) {
            for (var AH, rH, SH, hH, tH, zH = HH.length, CH = BH.length, EH = [], XH = [], GH = LH; zH;)
              if (XH.unshift(HH[--zH]), uH(XH), fH(XH, BH) < 0) EH.push(0);
              else {
                SH = XH[(rH = XH.length) - 1] * GH + XH[rH - 2], hH = BH[CH - 1] * GH + BH[CH - 2], rH > CH && (SH = (SH + 1) * GH), AH = Math.ceil(SH / hH);
                do {
                  if (fH(tH = VH(BH, AH), XH) <= 0) break;
                  AH--
                } while (AH);
                EH.push(AH), XH = PH(XH, tH)
              } return EH.reverse(), [YH(EH), YH(XH)]
          }(XH, MH), SH = AH[0];
          var UH = HH.sign !== rH.sign,
            OH = AH[1],
            bH = HH.sign;
          return "number" === typeof SH ? (UH && (SH = -SH), SH = new CH(SH)) : SH = new zH(SH, UH), "number" === typeof OH ? (bH && (OH = -OH), OH = new CH(OH)) : OH = new zH(OH, bH), [SH, OH]
        }

        function fH(HH, BH) {
          if (HH.length !== BH.length) return HH.length > BH.length ? 1 : -1;
          for (var LH = HH.length - 1; LH >= 0; LH--)
            if (HH[LH] !== BH[LH]) return HH[LH] > BH[LH] ? 1 : -1;
          return 0
        }

        function lH(HH) {
          var BH = HH.abs();
          return !BH.isUnit() && (!!(BH.equals(2) || BH.equals(3) || BH.equals(5)) || !(BH.isEven() || BH.isDivisibleBy(3) || BH.isDivisibleBy(5)) && (!!BH.lesser(49) || void 0))
        }

        function KH(HH, LH) {
          for (var AH, rH, SH, hH = HH.prev(), tH = hH, zH = 0; tH.isEven();) tH = tH.divide(2), zH++;
          HH: for (rH = 0; rH < LH.length; rH++)
            if (!HH.lesser(LH[rH]) && !(SH = BH(LH[rH]).modPow(tH, HH)).isUnit() && !SH.equals(hH)) {
              for (AH = zH - 1; 0 != AH; AH--) {
                if ((SH = SH.square().mod(HH)).isUnit()) return !1;
                if (SH.equals(hH)) continue HH
              }
              return !1
            }
          return !0
        }
        zH.prototype = Object.create(tH.prototype), CH.prototype = Object.create(tH.prototype), EH.prototype = Object.create(tH.prototype), zH.prototype.add = function(HH) {
          var BH = iH(HH);
          if (this.sign !== BH.sign) return this.subtract(BH.du());
          var LH = this.value,
            AH = BH.value;
          return BH.isSmall ? new zH(vH(LH, Math.abs(AH)), this.sign) : new zH(xH(LH, AH), this.sign)
        }, zH.prototype.plus = zH.prototype.add, CH.prototype.add = function(HH) {
          var BH = iH(HH),
            LH = this.value;
          if (LH < 0 !== BH.sign) return this.subtract(BH.du());
          var AH = BH.value;
          if (BH.isSmall) {
            if (XH(LH + AH)) return new CH(LH + AH);
            AH = GH(Math.abs(AH))
          }
          return new zH(vH(AH, Math.abs(LH)), LH < 0)
        }, CH.prototype.plus = CH.prototype.add, EH.prototype.add = function(HH) {
          return new EH(this.value + iH(HH).value)
        }, EH.prototype.plus = EH.prototype.add, zH.prototype.subtract = function(HH) {
          var BH = iH(HH);
          if (this.sign !== BH.sign) return this.add(BH.du());
          var LH = this.value,
            AH = BH.value;
          return BH.isSmall ? TH(LH, Math.abs(AH), this.sign) : function(HH, BH, LH) {
            var AH;
            return fH(HH, BH) >= 0 ? AH = PH(HH, BH) : (AH = PH(BH, HH), LH = !LH), "number" === typeof(AH = YH(AH)) ? (LH && (AH = -AH), new CH(AH)) : new zH(AH, LH)
          }(LH, AH, this.sign)
        }, zH.prototype.minus = zH.prototype.subtract, CH.prototype.subtract = function(HH) {
          var BH = iH(HH),
            LH = this.value;
          if (LH < 0 !== BH.sign) return this.add(BH.du());
          var AH = BH.value;
          return BH.isSmall ? new CH(LH - AH) : TH(AH, Math.abs(LH), LH >= 0)
        }, CH.prototype.minus = CH.prototype.subtract, EH.prototype.subtract = function(HH) {
          return new EH(this.value - iH(HH).value)
        }, EH.prototype.minus = EH.prototype.subtract, zH.prototype.du = function() {
          return new zH(this.value, !this.sign)
        }, CH.prototype.du = function() {
          var HH = this.sign,
            BH = new CH(-this.value);
          return BH.sign = !HH, BH
        }, EH.prototype.du = function() {
          return new EH(-this.value)
        }, zH.prototype.abs = function() {
          return new zH(this.value, !1)
        }, CH.prototype.abs = function() {
          return new CH(Math.abs(this.value))
        }, EH.prototype.abs = function() {
          return new EH(this.value >= 0 ? this.value : -this.value)
        }, zH.prototype.multiply = function(HH) {
          var BH, AH, rH, SH = iH(HH),
            hH = this.value,
            CH = SH.value,
            EH = this.sign !== SH.sign;
          if (SH.isSmall) {
            if (0 === CH) return tH[0];
            if (1 === CH) return this;
            if (-1 === CH) return this.du();
            if ((BH = Math.abs(CH)) < LH) return new zH(VH(hH, BH), EH);
            CH = GH(BH)
          }
          return AH = hH.length, rH = CH.length, new zH(-.012 * AH - .012 * rH + 15e-6 * AH * rH > 0 ? bH(hH, CH) : UH(hH, CH), EH)
        }, zH.prototype.times = zH.prototype.multiply, CH.prototype._multiplyBySmall = function(HH) {
          return XH(HH.value * this.value) ? new CH(HH.value * this.value) : kH(Math.abs(HH.value), GH(Math.abs(this.value)), this.sign !== HH.sign)
        }, zH.prototype._multiplyBySmall = function(HH) {
          return 0 === HH.value ? tH[0] : 1 === HH.value ? this : -1 === HH.value ? this.du() : kH(Math.abs(HH.value), this.value, this.sign !== HH.sign)
        }, CH.prototype.multiply = function(HH) {
          return iH(HH)._multiplyBySmall(this)
        }, CH.prototype.times = CH.prototype.multiply, EH.prototype.multiply = function(HH) {
          return new EH(this.value * iH(HH).value)
        }, EH.prototype.times = EH.prototype.multiply, zH.prototype.square = function() {
          return new zH(mH(this.value), !1)
        }, CH.prototype.square = function() {
          var HH = this.value * this.value;
          return XH(HH) ? new CH(HH) : new zH(mH(GH(Math.abs(this.value))), !1)
        }, EH.prototype.square = function(HH) {
          return new EH(this.value * this.value)
        }, zH.prototype.divmod = function(HH) {
          var BH = IH(this, HH);
          return {
            quotient: BH[0],
            remainder: BH[1]
          }
        }, EH.prototype.divmod = CH.prototype.divmod = zH.prototype.divmod, zH.prototype.divide = function(HH) {
          return IH(this, HH)[0]
        }, EH.prototype.over = EH.prototype.divide = function(HH) {
          return new EH(this.value / iH(HH).value)
        }, CH.prototype.over = CH.prototype.divide = zH.prototype.over = zH.prototype.divide, zH.prototype.mod = function(HH) {
          return IH(this, HH)[1]
        }, EH.prototype.mod = EH.prototype.remainder = function(HH) {
          return new EH(this.value % iH(HH).value)
        }, CH.prototype.remainder = CH.prototype.mod = zH.prototype.remainder = zH.prototype.mod, zH.prototype.pow = function(HH) {
          var BH, LH, AH, rH = iH(HH),
            SH = this.value,
            hH = rH.value;
          if (0 === hH) return tH[1];
          if (0 === SH) return tH[0];
          if (1 === SH) return tH[1];
          if (-1 === SH) return rH.isEven() ? tH[1] : tH[-1];
          if (rH.sign) return tH[0];
          if (!rH.isSmall) throw new Error("The exponent " + rH.toString() + " is too large.");
          if (this.isSmall && XH(BH = Math.pow(SH, hH))) return new CH(WH(BH));
          for (LH = this, AH = tH[1]; !0 & hH && (AH = AH.times(LH), --hH), 0 !== hH;) hH /= 2, LH = LH.square();
          return AH
        }, CH.prototype.pow = zH.prototype.pow, EH.prototype.pow = function(HH) {
          var BH = iH(HH),
            LH = this.value,
            AH = BH.value,
            rH = BigInt(0),
            SH = BigInt(1),
            hH = BigInt(2);
          if (AH === rH) return tH[1];
          if (LH === rH) return tH[0];
          if (LH === SH) return tH[1];
          if (LH === BigInt(-1)) return BH.isEven() ? tH[1] : tH[-1];
          if (BH.isNegative()) return new EH(rH);
          for (var zH = this, CH = tH[1];
            (AH & SH) === SH && (CH = CH.times(zH), --AH), AH !== rH;) AH /= hH, zH = zH.square();
          return CH
        }, zH.prototype.modPow = function(HH, BH) {
          if (HH = iH(HH), (BH = iH(BH)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var LH = tH[1],
            AH = this.mod(BH);
          for (HH.isNegative() && (HH = HH.multiply(tH[-1]), AH = AH.modInv(BH)); HH.isPositive();) {
            if (AH.isZero()) return tH[0];
            HH.isOdd() && (LH = LH.multiply(AH).mod(BH)), HH = HH.divide(2), AH = AH.square().mod(BH)
          }
          return LH
        }, EH.prototype.modPow = CH.prototype.modPow = zH.prototype.modPow, zH.prototype.compareAbs = function(HH) {
          var BH = iH(HH),
            LH = this.value,
            AH = BH.value;
          return BH.isSmall ? 1 : fH(LH, AH)
        }, CH.prototype.compareAbs = function(HH) {
          var BH = iH(HH),
            LH = Math.abs(this.value),
            AH = BH.value;
          return BH.isSmall ? LH === (AH = Math.abs(AH)) ? 0 : LH > AH ? 1 : -1 : -1
        }, EH.prototype.compareAbs = function(HH) {
          var BH = this.value,
            LH = iH(HH).value;
          return (BH = BH >= 0 ? BH : -BH) === (LH = LH >= 0 ? LH : -LH) ? 0 : BH > LH ? 1 : -1
        }, zH.prototype.compare = function(HH) {
          if (HH === 1 / 0) return -1;
          if (HH === -1 / 0) return 1;
          var BH = iH(HH),
            LH = this.value,
            AH = BH.value;
          return this.sign !== BH.sign ? BH.sign ? 1 : -1 : BH.isSmall ? this.sign ? -1 : 1 : fH(LH, AH) * (this.sign ? -1 : 1)
        }, zH.prototype.compareTo = zH.prototype.compare, CH.prototype.compare = function(HH) {
          if (HH === 1 / 0) return -1;
          if (HH === -1 / 0) return 1;
          var BH = iH(HH),
            LH = this.value,
            AH = BH.value;
          return BH.isSmall ? LH == AH ? 0 : LH > AH ? 1 : -1 : LH < 0 !== BH.sign ? LH < 0 ? -1 : 1 : LH < 0 ? 1 : -1
        }, CH.prototype.compareTo = CH.prototype.compare, EH.prototype.compare = function(HH) {
          if (HH === 1 / 0) return -1;
          if (HH === -1 / 0) return 1;
          var BH = this.value,
            LH = iH(HH).value;
          return BH === LH ? 0 : BH > LH ? 1 : -1
        }, EH.prototype.compareTo = EH.prototype.compare, zH.prototype.equals = function(HH) {
          return 0 === this.compare(HH)
        }, EH.prototype.eq = EH.prototype.equals = CH.prototype.eq = CH.prototype.equals = zH.prototype.eq = zH.prototype.equals, zH.prototype.notEquals = function(HH) {
          return 0 !== this.compare(HH)
        }, EH.prototype.neq = EH.prototype.notEquals = CH.prototype.neq = CH.prototype.notEquals = zH.prototype.neq = zH.prototype.notEquals, zH.prototype.greater = function(HH) {
          return this.compare(HH) > 0
        }, EH.prototype.gt = EH.prototype.greater = CH.prototype.gt = CH.prototype.greater = zH.prototype.gt = zH.prototype.greater, zH.prototype.lesser = function(HH) {
          return this.compare(HH) < 0
        }, EH.prototype.lt = EH.prototype.lesser = CH.prototype.lt = CH.prototype.lesser = zH.prototype.lt = zH.prototype.lesser, zH.prototype.greaterOrEquals = function(HH) {
          return this.compare(HH) >= 0
        }, EH.prototype.geq = EH.prototype.greaterOrEquals = CH.prototype.geq = CH.prototype.greaterOrEquals = zH.prototype.geq = zH.prototype.greaterOrEquals, zH.prototype.lesserOrEquals = function(HH) {
          return this.compare(HH) <= 0
        }, EH.prototype.leq = EH.prototype.lesserOrEquals = CH.prototype.leq = CH.prototype.lesserOrEquals = zH.prototype.leq = zH.prototype.lesserOrEquals, zH.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, CH.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, EH.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, zH.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, CH.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, EH.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, zH.prototype.isPositive = function() {
          return !this.sign
        }, CH.prototype.isPositive = function() {
          return this.value > 0
        }, EH.prototype.isPositive = CH.prototype.isPositive, zH.prototype.isNegative = function() {
          return this.sign
        }, CH.prototype.isNegative = function() {
          return this.value < 0
        }, EH.prototype.isNegative = CH.prototype.isNegative, zH.prototype.isUnit = function() {
          return !1
        }, CH.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, EH.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, zH.prototype.isZero = function() {
          return !1
        }, CH.prototype.isZero = function() {
          return 0 === this.value
        }, EH.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, zH.prototype.isDivisibleBy = function(HH) {
          var BH = iH(HH);
          return !BH.isZero() && (!!BH.isUnit() || (0 === BH.compareAbs(2) ? this.isEven() : this.mod(BH).isZero()))
        }, EH.prototype.isDivisibleBy = CH.prototype.isDivisibleBy = zH.prototype.isDivisibleBy, zH.prototype.isPrime = function(LH) {
          var AH = lH(this);
          if (AH !== HH) return AH;
          var rH = this.abs(),
            SH = rH.bitLength();
          if (SH <= 64) return KH(rH, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var hH = Math.log(2) * SH.toJSNumber(), tH = Math.ceil(!0 === LH ? 2 * Math.pow(hH, 2) : hH), zH = [], CH = 0; CH < tH; CH++) zH.push(BH(CH + 2));
          return KH(rH, zH)
        }, EH.prototype.isPrime = CH.prototype.isPrime = zH.prototype.isPrime, zH.prototype.isProbablePrime = function(LH, AH) {
          var rH = lH(this);
          if (rH !== HH) return rH;
          for (var SH = this.abs(), hH = LH === HH ? 5 : LH, tH = [], zH = 0; zH < hH; zH++) tH.push(BH.randBetween(2, SH.minus(2), AH));
          return KH(SH, tH)
        }, EH.prototype.isProbablePrime = CH.prototype.isProbablePrime = zH.prototype.isProbablePrime, zH.prototype.modInv = function(HH) {
          for (var LH, AH, rH, SH = BH.zero, hH = BH.one, tH = iH(HH), zH = this.abs(); !zH.isZero();) LH = tH.divide(zH), AH = SH, rH = tH, SH = hH, tH = zH, hH = AH.subtract(LH.multiply(hH)), zH = rH.subtract(LH.multiply(zH));
          if (!tH.isUnit()) throw new Error(this.toString() + " and " + HH.toString() + " are not co-prime");
          return -1 === SH.compare(0) && (SH = SH.add(HH)), this.isNegative() ? SH.du() : SH
        }, EH.prototype.modInv = CH.prototype.modInv = zH.prototype.modInv, zH.prototype.next = function() {
          var HH = this.value;
          return this.sign ? TH(HH, 1, this.sign) : new zH(vH(HH, 1), this.sign)
        }, CH.prototype.next = function() {
          var HH = this.value;
          return HH + 1 < AH ? new CH(HH + 1) : new zH(rH, !1)
        }, EH.prototype.next = function() {
          return new EH(this.value + BigInt(1))
        }, zH.prototype.prev = function() {
          var HH = this.value;
          return this.sign ? new zH(vH(HH, 1), !0) : TH(HH, 1, this.sign)
        }, CH.prototype.prev = function() {
          var HH = this.value;
          return HH - 1 > -AH ? new CH(HH - 1) : new zH(rH, !0)
        }, EH.prototype.prev = function() {
          return new EH(this.value - BigInt(1))
        };
        for (var cH = [1]; 2 * cH[cH.length - 1] <= LH;) cH.push(2 * cH[cH.length - 1]);
        var eH = cH.length,
          qH = cH[eH - 1];

        function gH(HH) {
          return Math.abs(HH) <= LH
        }

        function NH(HH, LH, AH) {
          LH = iH(LH);
          for (var rH = HH.isNegative(), SH = LH.isNegative(), hH = rH ? HH.not() : HH, tH = SH ? LH.not() : LH, zH = 0, CH = 0, EH = null, XH = null, GH = []; !hH.isZero() || !tH.isZero();) zH = (EH = IH(hH, qH))[1].toJSNumber(), rH && (zH = qH - 1 - zH), CH = (XH = IH(tH, qH))[1].toJSNumber(), SH && (CH = qH - 1 - CH), hH = EH[0], tH = XH[0], GH.push(AH(zH, CH));
          for (var YH = 0 !== AH(rH ? 1 : 0, SH ? 1 : 0) ? BH(-1) : BH(0), uH = GH.length - 1; uH >= 0; uH -= 1) YH = YH.multiply(qH).add(BH(GH[uH]));
          return YH
        }
        zH.prototype.shiftLeft = function(HH) {
          var BH = iH(HH).toJSNumber();
          if (!gH(BH)) throw new Error(String(BH) + " is too large for shifting.");
          if (BH < 0) return this.shiftRight(-BH);
          var LH = this;
          if (LH.isZero()) return LH;
          for (; BH >= eH;) LH = LH.multiply(qH), BH -= eH - 1;
          return LH.multiply(cH[BH])
        }, EH.prototype.shiftLeft = CH.prototype.shiftLeft = zH.prototype.shiftLeft, zH.prototype.shiftRight = function(HH) {
          var BH, LH = iH(HH).toJSNumber();
          if (!gH(LH)) throw new Error(String(LH) + " is too large for shifting.");
          if (LH < 0) return this.shiftLeft(-LH);
          for (var AH = this; LH >= eH;) {
            if (AH.isZero() || AH.isNegative() && AH.isUnit()) return AH;
            AH = (BH = IH(AH, qH))[1].isNegative() ? BH[0].prev() : BH[0], LH -= eH - 1
          }
          return (BH = IH(AH, cH[LH]))[1].isNegative() ? BH[0].prev() : BH[0]
        }, EH.prototype.shiftRight = CH.prototype.shiftRight = zH.prototype.shiftRight, zH.prototype.not = function() {
          return this.du().prev()
        }, EH.prototype.not = CH.prototype.not = zH.prototype.not, zH.prototype.and = function(HH) {
          return NH(this, HH, (function(HH, BH) {
            return HH & BH
          }))
        }, EH.prototype.and = CH.prototype.and = zH.prototype.and, zH.prototype.or = function(HH) {
          return NH(this, HH, (function(HH, BH) {
            return HH | BH
          }))
        }, EH.prototype.or = CH.prototype.or = zH.prototype.or, zH.prototype.xor = function(HH) {
          return NH(this, HH, (function(HH, BH) {
            return HH ^ BH
          }))
        }, EH.prototype.xor = CH.prototype.xor = zH.prototype.xor;
        var RH = 1 << 30;

        function jH(HH) {
          var BH = HH.value,
            AH = "number" === typeof BH ? BH | RH : "bigint" === typeof BH ? BH | BigInt(RH) : BH[0] + BH[1] * LH | 1073758208;
          return AH & -AH
        }

        function nH(HH, LH) {
          if (LH.compareTo(HH) <= 0) {
            var AH = nH(HH, LH.square(LH)),
              rH = AH.p,
              SH = AH.e,
              hH = rH.multiply(LH);
            return hH.compareTo(HH) <= 0 ? {
              p: hH,
              e: 2 * SH + 1
            } : {
              p: rH,
              e: 2 * SH
            }
          }
          return {
            p: BH(1),
            e: 0
          }
        }

        function FH(HH, BH) {
          return HH = iH(HH), BH = iH(BH), HH.greater(BH) ? HH : BH
        }

        function DH(HH, BH) {
          return HH = iH(HH), BH = iH(BH), HH.lesser(BH) ? HH : BH
        }

        function wH(HH, BH) {
          if (HH = iH(HH).abs(), BH = iH(BH).abs(), HH.equals(BH)) return HH;
          if (HH.isZero()) return BH;
          if (BH.isZero()) return HH;
          for (var LH, AH, rH = tH[1]; HH.isEven() && BH.isEven();) LH = DH(jH(HH), jH(BH)), HH = HH.divide(LH), BH = BH.divide(LH), rH = rH.multiply(LH);
          for (; HH.isEven();) HH = HH.divide(jH(HH));
          do {
            for (; BH.isEven();) BH = BH.divide(jH(BH));
            HH.greater(BH) && (AH = BH, BH = HH, HH = AH), BH = BH.subtract(HH)
          } while (!BH.isZero());
          return rH.isUnit() ? HH : HH.multiply(rH)
        }
        zH.prototype.bitLength = function() {
          var HH = this;
          return HH.compareTo(BH(0)) < 0 && (HH = HH.du().subtract(BH(1))), 0 === HH.compareTo(BH(0)) ? BH(0) : BH(nH(HH, BH(2)).e).add(BH(1))
        }, EH.prototype.bitLength = CH.prototype.bitLength = zH.prototype.bitLength;
        var ZH = function(HH, BH, LH, AH) {
          LH = LH || SH, HH = String(HH), AH || (HH = HH.toLowerCase(), LH = LH.toLowerCase());
          var rH, hH = HH.length,
            tH = Math.abs(BH),
            zH = {};
          for (rH = 0; rH < LH.length; rH++) zH[LH[rH]] = rH;
          for (rH = 0; rH < hH; rH++) {
            if ("-" !== (XH = HH[rH]) && (XH in zH && zH[XH] >= tH)) {
              if ("1" === XH && 1 === tH) continue;
              throw new Error(XH + " is not a valid digit in base " + BH + ".")
            }
          }
          BH = iH(BH);
          var CH = [],
            EH = "-" === HH[0];
          for (rH = EH ? 1 : 0; rH < HH.length; rH++) {
            var XH;
            if ((XH = HH[rH]) in zH) CH.push(iH(zH[XH]));
            else {
              if ("<" !== XH) throw new Error(XH + " is not a valid character");
              var GH = rH;
              do {
                rH++
              } while (">" !== HH[rH] && rH < HH.length);
              CH.push(iH(HH.slice(GH + 1, rH)))
            }
          }
          return dH(CH, BH, EH)
        };

        function dH(HH, BH, LH) {
          var AH, rH = tH[0],
            SH = tH[1];
          for (AH = HH.length - 1; AH >= 0; AH--) rH = rH.add(HH[AH].times(SH)), SH = SH.times(BH);
          return LH ? rH.du() : rH
        }

        function aH(HH, LH) {
          if ((LH = BH(LH)).isZero()) {
            if (HH.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (LH.equals(-1)) {
            if (HH.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (HH.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-HH.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var AH = Array.apply(null, Array(HH.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return AH.unshift([1]), {
              value: [].concat.apply([], AH),
              isNegative: !1
            }
          }
          var rH = !1;
          if (HH.isNegative() && LH.isPositive() && (rH = !0, HH = HH.abs()), LH.isUnit()) return HH.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(HH.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: rH
          };
          for (var SH, hH = [], tH = HH; tH.isNegative() || tH.compareAbs(LH) >= 0;) {
            SH = tH.divmod(LH), tH = SH.quotient;
            var zH = SH.remainder;
            zH.isNegative() && (zH = LH.minus(zH).abs(), tH = tH.next()), hH.push(zH.toJSNumber())
          }
          return hH.push(tH.toJSNumber()), {
            value: hH.reverse(),
            isNegative: rH
          }
        }

        function sH(HH, BH, LH) {
          var AH = aH(HH, BH);
          return (AH.isNegative ? "-" : "") + AH.value.map((function(HH) {
            return function(HH, BH) {
              return HH < (BH = BH || SH).length ? BH[HH] : "<" + HH + ">"
            }(HH, LH)
          })).join("")
        }

        function JH(HH) {
          if (XH(+HH)) {
            var BH = +HH;
            if (BH === WH(BH)) return hH ? new EH(BigInt(BH)) : new CH(BH);
            throw new Error("Invalid integer: " + HH)
          }
          var LH = "-" === HH[0];
          LH && (HH = HH.slice(1));
          var AH = HH.split(/e/i);
          if (AH.length > 2) throw new Error("Invalid integer: " + AH.join("e"));
          if (2 === AH.length) {
            var rH = AH[1];
            if ("+" === rH[0] && (rH = rH.slice(1)), (rH = +rH) !== WH(rH) || !XH(rH)) throw new Error("Invalid integer: " + rH + " is not a valid exponent.");
            var SH = AH[0],
              tH = SH.indexOf(".");
            if (tH >= 0 && (rH -= SH.length - tH - 1, SH = SH.slice(0, tH) + SH.slice(tH + 1)), rH < 0) throw new Error("Cannot include negative exponent part for integers");
            HH = SH += new Array(rH + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(HH)) throw new Error("Invalid integer: " + HH);
          if (hH) return new EH(BigInt(LH ? "-" + HH : HH));
          for (var GH = [], YH = HH.length, QH = YH - 7; YH > 0;) GH.push(+HH.slice(QH, YH)), (QH -= 7) < 0 && (QH = 0), YH -= 7;
          return uH(GH), new zH(GH, LH)
        }

        function iH(HH) {
          return "number" === typeof HH ? function(HH) {
            if (hH) return new EH(BigInt(HH));
            if (XH(HH)) {
              if (HH !== WH(HH)) throw new Error(HH + " is not an integer.");
              return new CH(HH)
            }
            return JH(HH.toString())
          }(HH) : "string" === typeof HH ? JH(HH) : "bigint" === typeof HH ? new EH(HH) : HH
        }
        zH.prototype.toArray = function(HH) {
          return aH(this, HH)
        }, CH.prototype.toArray = function(HH) {
          return aH(this, HH)
        }, EH.prototype.toArray = function(HH) {
          return aH(this, HH)
        }, zH.prototype.toString = function(BH, LH) {
          if (BH === HH && (BH = 10), 10 !== BH) return sH(this, BH, LH);
          for (var AH, rH = this.value, SH = rH.length, hH = String(rH[--SH]); --SH >= 0;) AH = String(rH[SH]), hH += "0000000".slice(AH.length) + AH;
          return (this.sign ? "-" : "") + hH
        }, CH.prototype.toString = function(BH, LH) {
          return BH === HH && (BH = 10), 10 != BH ? sH(this, BH, LH) : String(this.value)
        }, EH.prototype.toString = CH.prototype.toString, EH.prototype.toJSON = zH.prototype.toJSON = CH.prototype.toJSON = function() {
          return this.toString()
        }, zH.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, zH.prototype.toJSNumber = zH.prototype.valueOf, CH.prototype.valueOf = function() {
          return this.value
        }, CH.prototype.toJSNumber = CH.prototype.valueOf, EH.prototype.valueOf = EH.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var pH = 0; pH < 1e3; pH++) tH[pH] = iH(pH), pH > 0 && (tH[-pH] = iH(-pH));
        return tH.one = tH[1], tH.zero = tH[0], tH.minusOne = tH[-1], tH.max = FH, tH.min = DH, tH.gcd = wH, tH.lcm = function(HH, BH) {
          return HH = iH(HH).abs(), BH = iH(BH).abs(), HH.divide(wH(HH, BH)).multiply(BH)
        }, tH.isInstance = function(HH) {
          return HH instanceof zH || HH instanceof CH || HH instanceof EH
        }, tH.randBetween = function(HH, BH, AH) {
          HH = iH(HH), BH = iH(BH);
          var rH = AH || Math.random,
            SH = DH(HH, BH),
            hH = FH(HH, BH).subtract(SH).add(1);
          if (hH.isSmall) return SH.add(Math.floor(rH() * hH));
          for (var zH = aH(hH, LH).value, CH = [], EH = !0, XH = 0; XH < zH.length; XH++) {
            var GH = EH ? zH[XH] : LH,
              YH = WH(rH() * GH);
            CH.push(YH), YH < GH && (EH = !1)
          }
          return SH.add(tH.SX(CH, LH, !1))
        }, tH.SX = function(HH, BH, LH) {
          return dH(HH.map(iH), iH(BH || 10), LH)
        }, tH
      }();
      HH.hasOwnProperty("exports") && (HH.exports = BH)
    }(xL);
    var vL = SH(xL.exports);

    function PL(HH, BH, LH) {
      let AH = 0;
      for (let rH = 0; rH < LH; rH++) {
        const LH = HH[BH + rH];
        if (void 0 === LH) break;
        AH += LH * 16 ** rH
      }
      return AH
    }

    function TL(HH) {
      const BH = [];
      for (let LH = 0; LH < HH.length; LH++) {
        let AH = Number(HH[LH]);
        for (let HH = 0; AH || HH < BH.length; HH++) AH += 10 * (BH[HH] || 0), BH[HH] = AH % 16, AH = (AH - BH[HH]) / 16
      }
      return BH
    }
    class UL {
      static fromString(HH) {
        return new UL(function(HH) {
          const BH = TL(HH),
            LH = Array(4);
          for (let AH = 0; AH < 4; AH++) LH[3 - AH] = PL(BH, 4 * AH, 4);
          return LH
        }(HH), HH)
      }
      static fromBit(HH) {
        const BH = Array(4),
          LH = Math.floor(HH / 16);
        for (let AH = 0; AH < 4; AH++) BH[3 - AH] = AH === LH ? 1 << HH - 16 * LH : 0;
        return new UL(BH)
      }
      constructor(HH, BH) {
        this.parts = HH, this.str = BH
      }
      and(HH) {
        let {
          parts: BH
        } = HH;
        return new UL(this.parts.map(((HH, LH) => HH & BH[LH])))
      }
      or(HH) {
        let {
          parts: BH
        } = HH;
        return new UL(this.parts.map(((HH, LH) => HH | BH[LH])))
      }
      xor(HH) {
        let {
          parts: BH
        } = HH;
        return new UL(this.parts.map(((HH, LH) => HH ^ BH[LH])))
      }
      not() {
        return new UL(this.parts.map((HH => ~HH)))
      }
      equals(HH) {
        let {
          parts: BH
        } = HH;
        return this.parts.every(((HH, LH) => HH === BH[LH]))
      }
      toString() {
        if (null != this.str) return this.str;
        const HH = new Array(16);
        return this.parts.forEach(((BH, LH) => {
          const AH = TL(BH.toString());
          for (let rH = 0; rH < 4; rH++) HH[rH + 4 * LH] = AH[3 - rH] || 0
        })), this.str = vL.SX(HH, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const VL = function() {
      try {
        return BigInt, !0
      } catch (HH) {
        return !1
      }
    }();
    VL && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const OL = {},
      bL = VL ? function(HH) {
        return BigInt(HH)
      } : function(HH) {
        return HH instanceof UL ? HH : ("number" === typeof HH && (HH = HH.toString()), null != OL[HH] || (OL[HH] = UL.fromString(HH)), OL[HH])
      },
      kL = bL(0),
      mL = VL ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kL) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kL)
      } : function() {
        let HH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kL;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kL).and(HH)
      },
      oL = VL ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kL) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kL)
      } : function() {
        let HH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kL;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kL).or(HH)
      },
      IL = VL ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kL) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kL)
      } : function() {
        let HH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kL;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kL).xor(HH)
      },
      fL = VL ? function(HH, BH) {
        return HH === BH
      } : function(HH, BH) {
        return null == HH || null == BH ? HH == BH : HH.equals(BH)
      };
    var lL, KL, cL, eL, qL = {
      combine: function() {
        let HH = arguments.length <= 0 ? void 0 : arguments[0];
        for (let BH = 1; BH < arguments.length; BH++) HH = oL(HH, BH < 0 || arguments.length <= BH ? void 0 : arguments[BH]);
        return HH
      },
      add: function(HH, BH) {
        return BH === kL ? HH : oL(HH, BH)
      },
      remove: function(HH, BH) {
        return BH === kL ? HH : IL(HH, mL(HH, BH))
      },
      filter: mL,
      invert: VL ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kL)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : kL).not()
      },
      has: function(HH, BH) {
        return fL(mL(HH, BH), BH)
      },
      hasAny: function(HH, BH) {
        return !fL(mL(HH, BH), kL)
      },
      equals: fL,
      deserialize: bL,
      getFlag: VL ? function(HH) {
        return BigInt(1) << BigInt(HH)
      } : function(HH) {
        return UL.fromBit(HH)
      }
    };
    ! function(HH) {
      HH[HH.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", HH[HH.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", HH[HH.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", HH[HH.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", HH[HH.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", HH[HH.RATELIMITED = 4002] = "RATELIMITED", HH[HH.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", HH[HH.INVALID_VERSION = 4004] = "INVALID_VERSION", HH[HH.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(lL || (lL = {})),
    function(HH) {
      HH[HH.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", HH[HH.INVALID_COMMAND = 4002] = "INVALID_COMMAND", HH[HH.INVALID_EVENT = 4004] = "INVALID_EVENT", HH[HH.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(KL || (KL = {})),
    function(HH) {
      HH.LANDSCAPE = "landscape", HH.PORTRAIT = "portrait"
    }(cL || (cL = {})),
    function(HH) {
      HH.MOBILE = "mobile", HH.DESKTOP = "desktop"
    }(eL || (eL = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: qL.getFlag(0),
      ADMINISTRATOR: qL.getFlag(3)
    });

    function gL(HH) {
      return YL((BH => {
        var LH;
        const [AH] = null !== (LH = Object.entries(HH).find((HH => {
          let [, LH] = HH;
          return LH === BH
        }))) && void 0 !== LH ? LH : [];
        return null != BH && void 0 === AH ? HH.UNHANDLED : BH
      }), cB().or(eB()))
    }
    const NL = ML.object({
        image_url: ML.string()
      }),
      RL = ML.object({
        mediaUrl: ML.string().max(1024)
      }),
      jL = ML.object({
        access_token: ML.union([ML.string(), ML.null()]).optional()
      }),
      nL = ML.object({
        access_token: ML.string(),
        user: ML.object({
          username: ML.string(),
          discriminator: ML.string(),
          id: ML.string(),
          avatar: ML.union([ML.string(), ML.null()]).optional(),
          public_flags: ML.number(),
          global_name: ML.union([ML.string(), ML.null()]).optional()
        }),
        scopes: ML.array(function(HH) {
          const BH = fB().transform((BH => {
            const LH = HH.safeParse(BH);
            return LH.success ? LH.data : HH._def.defaultValue()
          }));
          return BH.overlayType = HH, BH
        }(ML.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(ML.literal(-1)).default(-1))),
        expires: ML.string(),
        application: ML.object({
          description: ML.string(),
          icon: ML.union([ML.string(), ML.null()]).optional(),
          id: ML.string(),
          rpc_origins: ML.array(ML.string()).optional(),
          name: ML.string()
        })
      }),
      FL = ML.object({
        participants: ML.array(ML.object({
          id: ML.string(),
          username: ML.string(),
          global_name: ML.union([ML.string(), ML.null()]).optional(),
          discriminator: ML.string(),
          avatar: ML.union([ML.string(), ML.null()]).optional(),
          flags: ML.number(),
          bot: ML.boolean(),
          avatar_decoration_data: ML.union([ML.object({
            asset: ML.string(),
            skuId: ML.string().optional()
          }), ML.null()]).optional(),
          premium_type: ML.union([ML.number(), ML.null()]).optional(),
          nickname: ML.string().optional()
        }))
      });
    var DL;
    ! function(HH) {
      HH.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", HH.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", HH.AUTHENTICATE = "AUTHENTICATE", HH.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(DL || (DL = {}));
    const wL = ML.object({}).optional().nullable(),
      ZL = ML.void(),
      dL = {
        [DL.INITIATE_IMAGE_UPLOAD]: {
          request: ZL,
          response: NL
        },
        [DL.OPEN_SHARE_MOMENT_DIALOG]: {
          request: RL,
          response: wL
        },
        [DL.AUTHENTICATE]: {
          request: jL,
          response: nL
        },
        [DL.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: ZL,
          response: FL
        }
      },
      aL = "DISPATCH";
    var sL;
    ! function(HH) {
      HH.AUTHORIZE = "AUTHORIZE", HH.AUTHENTICATE = "AUTHENTICATE", HH.GET_GUILDS = "GET_GUILDS", HH.GET_GUILD = "GET_GUILD", HH.GET_CHANNEL = "GET_CHANNEL", HH.GET_CHANNELS = "GET_CHANNELS", HH.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", HH.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", HH.SUBSCRIBE = "SUBSCRIBE", HH.UNSUBSCRIBE = "UNSUBSCRIBE", HH.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", HH.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", HH.SET_ACTIVITY = "SET_ACTIVITY", HH.GET_SKUS = "GET_SKUS", HH.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", HH.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", HH.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", HH.START_PURCHASE = "START_PURCHASE", HH.SET_CONFIG = "SET_CONFIG", HH.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", HH.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", HH.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", HH.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", HH.CAPTURE_LOG = "CAPTURE_LOG", HH.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", HH.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", HH.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", HH.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", HH.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", HH.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", HH.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(sL || (sL = {}));
    const JL = sB({
        cmd: cB(),
        data: wB(),
        evt: FB(),
        nonce: cB()
      }).passthrough(),
      iL = (gL(Object.assign(Object.assign({}, nL.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), sB({
        id: cB(),
        username: cB(),
        discriminator: cB(),
        global_name: cB().optional().nullable(),
        avatar: cB().optional().nullable(),
        avatar_decoration_data: sB({
          asset: cB(),
          sku_id: cB().optional()
        }).nullable(),
        bot: NB(),
        flags: eB().optional().nullable(),
        premium_type: eB().optional().nullable()
      })),
      pL = sB({
        user: iL,
        nick: cB().optional().nullable(),
        roles: aB(cB()),
        joined_at: cB(),
        deaf: NB(),
        mute: NB()
      }),
      yL = sB({
        id: cB(),
        name: cB().optional().nullable(),
        roles: aB(cB()).optional().nullable(),
        user: iL.optional().nullable(),
        require_colons: NB().optional().nullable(),
        managed: NB().optional().nullable(),
        animated: NB().optional().nullable(),
        available: NB().optional().nullable()
      }),
      HA = sB({
        mute: NB(),
        deaf: NB(),
        self_mute: NB(),
        self_deaf: NB(),
        suppress: NB()
      }),
      BA = sB({
        mute: NB(),
        nick: cB(),
        user: iL,
        voice_state: HA,
        volume: eB()
      }),
      LA = gL({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      AA = sB({
        name: cB(),
        type: eB(),
        url: cB().optional().nullable(),
        created_at: eB().optional().nullable(),
        timestamps: sB({
          start: eB(),
          end: eB()
        }).partial().optional().nullable(),
        application_id: cB().optional().nullable(),
        details: cB().optional().nullable(),
        state: cB().optional().nullable(),
        emoji: yL.optional().nullable(),
        party: sB({
          id: cB().optional().nullable(),
          size: aB(eB()).optional().nullable()
        }).optional().nullable(),
        assets: sB({
          large_image: cB().nullable(),
          large_text: cB().nullable(),
          small_image: cB().nullable(),
          small_text: cB().nullable()
        }).partial().optional().nullable(),
        secrets: sB({
          join: cB(),
          match: cB()
        }).partial().optional().nullable(),
        instance: NB().optional().nullable(),
        flags: eB().optional().nullable()
      }),
      rA = sB({
        id: cB(),
        type: gL({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: cB(),
        deny: cB()
      }),
      SA = {
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
      hA = sB({
        id: cB(),
        type: gL(SA),
        guild_id: cB().optional().nullable(),
        position: eB().optional().nullable(),
        permission_overwrites: aB(rA).optional().nullable(),
        name: cB().optional().nullable(),
        topic: cB().optional().nullable(),
        nsfw: NB().optional().nullable(),
        last_message_id: cB().optional().nullable(),
        bitrate: eB().optional().nullable(),
        user_limit: eB().optional().nullable(),
        rate_limit_per_user: eB().optional().nullable(),
        recipients: aB(iL).optional().nullable(),
        icon: cB().optional().nullable(),
        owner_id: cB().optional().nullable(),
        application_id: cB().optional().nullable(),
        parent_id: cB().optional().nullable(),
        last_pin_timestamp: cB().optional().nullable()
      }),
      tA = sB({
        user: iL,
        guild_id: cB(),
        status: LA,
        activities: aB(AA),
        client_status: sB({
          desktop: LA,
          mobile: LA,
          web: LA
        }).partial()
      }),
      zA = sB({
        id: cB(),
        name: cB(),
        color: eB(),
        hoist: NB(),
        position: eB(),
        permissions: cB(),
        managed: NB(),
        mentionable: NB()
      }),
      CA = (sB({
        id: cB(),
        name: cB(),
        owner_id: cB(),
        icon: cB().nullable(),
        icon_hash: cB().optional().nullable(),
        splash: cB().nullable(),
        discovery_splash: cB().nullable(),
        owner: NB().optional().nullable(),
        permissions: cB().optional().nullable(),
        region: cB(),
        afk_channel_id: cB().nullable(),
        afk_timeout: eB(),
        widget_enabled: NB().optional().nullable(),
        widget_channel_id: cB().optional().nullable(),
        verification_level: eB(),
        default_message_notifications: eB(),
        explicit_content_filter: eB(),
        roles: aB(zA),
        emojis: aB(yL),
        features: aB(cB()),
        mfa_level: eB(),
        application_id: cB().nullable(),
        system_channel_id: cB().nullable(),
        system_channel_flags: eB(),
        rules_channel_id: cB().nullable(),
        joined_at: cB().optional().nullable(),
        large: NB().optional().nullable(),
        unavailable: NB().optional().nullable(),
        member_count: eB().optional().nullable(),
        voice_states: aB(HA).optional().nullable(),
        members: aB(pL).optional().nullable(),
        channels: aB(hA).optional().nullable(),
        presences: aB(tA).optional().nullable(),
        max_presences: eB().optional().nullable(),
        max_members: eB().optional().nullable(),
        vanity_url_code: cB().nullable(),
        description: cB().nullable(),
        banner: cB().nullable(),
        premium_tier: eB(),
        premium_subscription_count: eB().optional().nullable(),
        preferred_locale: cB(),
        public_updates_channel_id: cB().nullable(),
        max_video_channel_users: eB().optional().nullable(),
        approximate_member_count: eB().optional().nullable(),
        approximate_presence_count: eB().optional().nullable()
      }), sB({
        id: cB(),
        guild_id: cB(),
        type: eB(),
        name: cB()
      })),
      EA = sB({
        id: cB(),
        filename: cB(),
        size: eB(),
        url: cB(),
        proxy_url: cB(),
        height: eB().optional().nullable(),
        width: eB().optional().nullable()
      }),
      XA = sB({
        text: cB(),
        icon_url: cB().optional().nullable(),
        proxy_icon_url: cB().optional().nullable()
      }),
      GA = sB({
        url: cB().optional().nullable(),
        proxy_url: cB().optional().nullable(),
        height: eB().optional().nullable(),
        width: eB().optional().nullable()
      }),
      YA = GA.omit({
        proxy_url: !0
      }),
      uA = sB({
        name: cB().optional().nullable(),
        url: cB().optional().nullable()
      }),
      QA = sB({
        name: cB().optional().nullable(),
        url: cB().optional().nullable(),
        icon_url: cB().optional().nullable(),
        proxy_icon_url: cB().optional().nullable()
      }),
      WA = sB({
        name: cB(),
        value: cB(),
        inline: NB()
      }),
      MA = sB({
        title: cB().optional().nullable(),
        type: cB().optional().nullable(),
        description: cB().optional().nullable(),
        url: cB().optional().nullable(),
        timestamp: cB().optional().nullable(),
        color: eB().optional().nullable(),
        footer: XA.optional().nullable(),
        image: GA.optional().nullable(),
        thumbnail: GA.optional().nullable(),
        video: YA.optional().nullable(),
        provider: uA.optional().nullable(),
        author: QA.optional().nullable(),
        fields: aB(WA).optional().nullable()
      }),
      xA = sB({
        count: eB(),
        me: NB(),
        emoji: yL
      }),
      vA = sB({
        type: eB(),
        party_id: cB().optional().nullable()
      }),
      PA = sB({
        id: cB(),
        cover_image: cB().optional().nullable(),
        description: cB(),
        icon: cB().optional().nullable(),
        name: cB()
      }),
      TA = sB({
        message_id: cB().optional().nullable(),
        channel_id: cB().optional().nullable(),
        guild_id: cB().optional().nullable()
      }),
      UA = sB({
        id: cB(),
        channel_id: cB(),
        guild_id: cB().optional().nullable(),
        author: iL.optional().nullable(),
        member: pL.optional().nullable(),
        content: cB(),
        timestamp: cB(),
        edited_timestamp: cB().optional().nullable(),
        tts: NB(),
        mention_everyone: NB(),
        mentions: aB(iL),
        mention_roles: aB(cB()),
        mention_channels: aB(CA),
        attachments: aB(EA),
        embeds: aB(MA),
        reactions: aB(xA).optional().nullable(),
        nonce: iB([cB(), eB()]).optional().nullable(),
        pinned: NB(),
        webhook_id: cB().optional().nullable(),
        type: eB(),
        activity: vA.optional().nullable(),
        application: PA.optional().nullable(),
        message_reference: TA.optional().nullable(),
        flags: eB().optional().nullable(),
        stickers: aB(wB()).optional().nullable(),
        referenced_message: wB().optional().nullable()
      }),
      VA = sB({
        id: cB(),
        name: cB()
      }),
      OA = sB({
        type: gL({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: eB(),
        name: cB()
      }),
      bA = sB({
        type: gL({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: NB(),
        threshold: eB(),
        shortcut: aB(OA),
        delay: eB()
      }),
      kA = sB({
        device_id: cB(),
        volume: eB(),
        available_devices: aB(VA)
      }),
      mA = (sB({
        type: gL({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: cB(),
        vendor: sB({
          name: cB(),
          url: cB()
        }),
        model: sB({
          name: cB(),
          url: cB()
        }),
        related: aB(cB()),
        echo_cancellation: NB().optional().nullable(),
        noise_suppression: NB().optional().nullable(),
        automatic_gain_control: NB().optional().nullable(),
        hardware_mute: NB().optional().nullable()
      }), sB({
        id: cB(),
        name: cB(),
        type: gL({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: sB({
          amount: eB(),
          currency: cB()
        }),
        application_id: cB(),
        flags: eB(),
        release_date: cB().nullable()
      })),
      oA = sB({
        id: cB(),
        sku_id: cB(),
        application_id: cB(),
        user_id: cB(),
        gift_code_flags: eB(),
        type: gL({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: cB().optional().nullable(),
        branches: aB(cB()).optional().nullable(),
        starts_at: cB().optional().nullable(),
        ends_at: cB().optional().nullable(),
        parent_id: cB().optional().nullable(),
        consumed: NB().optional().nullable(),
        deleted: NB().optional().nullable(),
        gift_code_batch_id: cB().optional().nullable()
      }),
      IA = (gL({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), gL({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      fA = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      lA = (gL(fA), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      KA = (gL(lA), "ERROR");
    var cA;
    ! function(HH) {
      HH.READY = "READY", HH.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", HH.SPEAKING_START = "SPEAKING_START", HH.SPEAKING_STOP = "SPEAKING_STOP", HH.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", HH.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", HH.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", HH.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", HH.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", HH.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(cA || (cA = {}));
    const eA = JL.extend({
        evt: zL(cA),
        nonce: cB().nullable(),
        cmd: hL(aL),
        data: sB({}).passthrough()
      }),
      qA = JL.extend({
        evt: hL(KA),
        data: sB({
          code: eB(),
          message: cB().optional()
        }).passthrough(),
        cmd: zL(sL),
        nonce: cB().nullable()
      }),
      gA = eA.extend({
        evt: cB()
      }),
      NA = iB([eA, gA, qA]);
    const RA = {
      [cA.READY]: {
        payload: eA.extend({
          evt: hL(cA.READY),
          data: sB({
            v: eB(),
            config: sB({
              cdn_host: cB().optional(),
              api_endpoint: cB(),
              environment: cB()
            }),
            user: sB({
              id: cB(),
              username: cB(),
              discriminator: cB(),
              avatar: cB().optional()
            }).optional()
          })
        })
      },
      [cA.VOICE_STATE_UPDATE]: {
        payload: eA.extend({
          evt: hL(cA.VOICE_STATE_UPDATE),
          data: BA
        }),
        subscribeArgs: sB({
          channel_id: cB()
        })
      },
      [cA.SPEAKING_START]: {
        payload: eA.extend({
          evt: hL(cA.SPEAKING_START),
          data: sB({
            lobby_id: cB().optional(),
            channel_id: cB().optional(),
            user_id: cB()
          })
        }),
        subscribeArgs: sB({
          lobby_id: cB().nullable().optional(),
          channel_id: cB().nullable().optional()
        })
      },
      [cA.SPEAKING_STOP]: {
        payload: eA.extend({
          evt: hL(cA.SPEAKING_STOP),
          data: sB({
            lobby_id: cB().optional(),
            channel_id: cB().optional(),
            user_id: cB()
          })
        }),
        subscribeArgs: sB({
          lobby_id: cB().nullable().optional(),
          channel_id: cB().nullable().optional()
        })
      },
      [cA.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: eA.extend({
          evt: hL(cA.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: sB({
            layout_mode: gL(lA)
          })
        })
      },
      [cA.ORIENTATION_UPDATE]: {
        payload: eA.extend({
          evt: hL(cA.ORIENTATION_UPDATE),
          data: sB({
            screen_orientation: gL(fA),
            orientation: zL(cL)
          })
        })
      },
      [cA.CURRENT_USER_UPDATE]: {
        payload: eA.extend({
          evt: hL(cA.CURRENT_USER_UPDATE),
          data: iL
        })
      },
      [cA.ENTITLEMENT_CREATE]: {
        payload: eA.extend({
          evt: hL(cA.ENTITLEMENT_CREATE),
          data: sB({
            entitlement: oA
          })
        })
      },
      [cA.THERMAL_STATE_UPDATE]: {
        payload: eA.extend({
          evt: hL(cA.THERMAL_STATE_UPDATE),
          data: sB({
            thermal_state: IA
          })
        })
      },
      [cA.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: eA.extend({
          evt: hL(cA.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: sB({
            participants: FL.shape.participants
          })
        })
      }
    };
    const jA = sB({}).nullable(),
      nA = sB({
        code: cB()
      }),
      FA = sB({
        guilds: aB(sB({
          id: cB(),
          name: cB()
        }))
      }),
      DA = sB({
        id: cB(),
        name: cB(),
        icon_url: cB().optional(),
        members: aB(pL)
      }),
      wA = sB({
        id: cB(),
        type: gL(SA),
        guild_id: cB().optional().nullable(),
        name: cB().optional().nullable(),
        topic: cB().optional().nullable(),
        bitrate: eB().optional().nullable(),
        user_limit: eB().optional().nullable(),
        position: eB().optional().nullable(),
        voice_states: aB(BA),
        messages: aB(UA)
      }),
      ZA = sB({
        channels: aB(hA)
      }),
      dA = (wA.nullable(), wA.nullable()),
      aA = wA.nullable(),
      sA = (sB({
        input: kA,
        output: kA,
        mode: bA,
        automatic_gain_control: NB(),
        echo_cancellation: NB(),
        noise_suppression: NB(),
        qos: NB(),
        silence_warning: NB(),
        deaf: NB(),
        mute: NB()
      }), sB({
        evt: cB()
      })),
      JA = sB({
        shortcut: OA
      }),
      iA = AA,
      pA = sB({
        skus: aB(mA)
      }),
      yA = sB({
        entitlements: aB(oA)
      }),
      Hr = aB(oA).nullable(),
      Br = sB({
        use_interactive_pip: NB()
      }),
      Lr = sB({
        locale: cB()
      }),
      Ar = sB({
        enabled: NB()
      }),
      rr = sB({
        permissions: gB().or(cB())
      }),
      Sr = sB({
        iosKeyboardResizesView: XL(NB())
      }),
      hr = JL.extend({
        cmd: zL(sL),
        evt: FB()
      });

    function tr(HH) {
      let {
        cmd: BH,
        data: LH
      } = HH;
      switch (BH) {
        case sL.AUTHORIZE:
          return nA.parse(LH);
        case sL.CAPTURE_SHORTCUT:
          return JA.parse(LH);
        case sL.ENCOURAGE_HW_ACCELERATION:
          return Ar.parse(LH);
        case sL.GET_CHANNEL:
          return wA.parse(LH);
        case sL.GET_CHANNELS:
          return ZA.parse(LH);
        case sL.GET_CHANNEL_PERMISSIONS:
          return rr.parse(LH);
        case sL.GET_GUILD:
          return DA.parse(LH);
        case sL.GET_GUILDS:
          return FA.parse(LH);
        case sL.GET_PLATFORM_BEHAVIORS:
          return Sr.parse(LH);
        case sL.GET_CHANNEL:
          return wA.parse(LH);
        case sL.SELECT_TEXT_CHANNEL:
          return aA.parse(LH);
        case sL.SELECT_VOICE_CHANNEL:
          return dA.parse(LH);
        case sL.SET_ACTIVITY:
          return iA.parse(LH);
        case sL.GET_SKUS_EMBEDDED:
          return pA.parse(LH);
        case sL.GET_ENTITLEMENTS_EMBEDDED:
          return yA.parse(LH);
        case sL.SET_CONFIG:
          return Br.parse(LH);
        case sL.START_PURCHASE:
          return Hr.parse(LH);
        case sL.SUBSCRIBE:
        case sL.UNSUBSCRIBE:
          return sA.parse(LH);
        case sL.USER_SETTINGS_GET_LOCALE:
          return Lr.parse(LH);
        case sL.OPEN_EXTERNAL_LINK:
        case sL.SET_ORIENTATION_LOCK_STATE:
        case sL.SET_CERTIFIED_DEVICES:
        case sL.SEND_ANALYTICS_EVENT:
        case sL.OPEN_INVITE_DIALOG:
        case sL.CAPTURE_LOG:
        case sL.GET_SKUS:
        case sL.GET_ENTITLEMENTS:
          return jA.parse(LH);
        case sL.AUTHENTICATE:
        case sL.INITIATE_IMAGE_UPLOAD:
        case sL.OPEN_SHARE_MOMENT_DIALOG:
        case sL.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: HH
          } = dL[BH];
          return HH.parse(LH);
        default:
          ! function(HH, BH) {
            throw BH
          }(0, new Error(`Unrecognized command ${BH}`))
      }
    }
    sB({
      frame_id: cB(),
      platform: zL(eL).optional().nullable()
    }), sB({
      v: hL(1),
      encoding: hL("json").optional(),
      client_id: cB(),
      frame_id: cB()
    });
    const zr = sB({
        code: eB(),
        message: cB().optional()
      }),
      Cr = sB({
        evt: cB().nullable(),
        nonce: cB().nullable(),
        data: wB().nullable(),
        cmd: cB()
      }).passthrough();

    function Er(HH) {
      const BH = Cr.parse(HH);
      return null != BH.evt ? BH.evt === KA ? qA.parse(BH) : function(HH) {
        const BH = HH.evt;
        if (!(BH in cA)) throw new Error(`Unrecognized event type ${HH.evt}`);
        return RA[BH].payload.parse(HH)
      }(NA.parse(BH)) : function(HH) {
        return Object.assign(Object.assign({}, HH), {
          data: tr(HH)
        })
      }(hr.passthrough().parse(BH))
    }

    function Xr(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const rH = JL.extend({
        cmd: hL(BH),
        data: LH
      });
      return async LH => {
        const SH = await HH({
          cmd: BH,
          args: LH,
          transfer: AH(LH)
        });
        return rH.parse(SH).data
      }
    }

    function Gr(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const LH = dL[HH].response,
        AH = JL.extend({
          cmd: hL(HH),
          data: LH
        });
      return LH => async rH => {
        const SH = await LH({
          cmd: HH,
          args: rH,
          transfer: BH(rH)
        });
        return AH.parse(SH).data
      }
    }
    const Yr = Gr(DL.AUTHENTICATE),
      ur = HH => Xr(HH, sL.AUTHORIZE, nA),
      Qr = HH => Xr(HH, sL.CAPTURE_LOG, jA),
      Wr = HH => Xr(HH, sL.ENCOURAGE_HW_ACCELERATION, Ar),
      Mr = HH => Xr(HH, sL.GET_ENTITLEMENTS_EMBEDDED, yA),
      xr = HH => Xr(HH, sL.GET_SKUS_EMBEDDED, pA),
      vr = HH => Xr(HH, sL.GET_CHANNEL_PERMISSIONS, rr),
      Pr = HH => Xr(HH, sL.GET_PLATFORM_BEHAVIORS, Sr),
      Tr = HH => Xr(HH, sL.OPEN_EXTERNAL_LINK, jA),
      Ur = HH => Xr(HH, sL.OPEN_INVITE_DIALOG, jA),
      Vr = Gr(DL.OPEN_SHARE_MOMENT_DIALOG);
    AA.XY({
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
      type: AA.shape.type.optional(),
      instance: AA.shape.instance.optional()
    }).nullable();
    const Or = HH => Xr(HH, sL.SET_ACTIVITY, iA),
      br = HH => Xr(HH, sL.SET_CONFIG, Br);
    const kr = HH => ({
        lock_state: HH.lock_state,
        picture_in_picture_lock_state: HH.picture_in_picture_lock_state
      }),
      mr = HH => function(HH) {
        let {
          sendCommand: BH,
          cmd: LH,
          response: AH,
          fallbackTransform: rH,
          transferTransform: SH = () => {}
        } = HH;
        const hH = JL.extend({
          cmd: hL(LH),
          data: AH
        });
        return async HH => {
          try {
            const AH = await BH({
              cmd: LH,
              args: HH,
              transfer: SH(HH)
            });
            return hH.parse(AH).data
          } catch (AH) {
            if (AH.code === KL.INVALID_PAYLOAD) {
              const AH = rH(HH),
                tH = await BH({
                  cmd: LH,
                  args: AH,
                  transfer: SH(AH)
                });
              return hH.parse(tH).data
            }
            throw AH
          }
        }
      }({
        sendCommand: HH,
        cmd: sL.SET_ORIENTATION_LOCK_STATE,
        response: jA,
        fallbackTransform: kr
      }),
      or = HH => Xr(HH, sL.START_PURCHASE, Hr),
      Ir = HH => Xr(HH, sL.USER_SETTINGS_GET_LOCALE, Lr),
      fr = Gr(DL.INITIATE_IMAGE_UPLOAD),
      lr = HH => Xr(HH, sL.GET_CHANNEL, wA),
      Kr = Gr(DL.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var cr = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function er(HH) {
      return "string" === typeof HH && cr.test(HH)
    }
    for (var qr = [], gr = 0; gr < 256; ++gr) qr.push((gr + 256).toString(16).substr(1));

    function Nr(HH) {
      var BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        LH = (qr[HH[BH + 0]] + qr[HH[BH + 1]] + qr[HH[BH + 2]] + qr[HH[BH + 3]] + "-" + qr[HH[BH + 4]] + qr[HH[BH + 5]] + "-" + qr[HH[BH + 6]] + qr[HH[BH + 7]] + "-" + qr[HH[BH + 8]] + qr[HH[BH + 9]] + "-" + qr[HH[BH + 10]] + qr[HH[BH + 11]] + qr[HH[BH + 12]] + qr[HH[BH + 13]] + qr[HH[BH + 14]] + qr[HH[BH + 15]]).toLowerCase();
      if (!er(LH)) throw TypeError("Stringified UUID is invalid");
      return LH
    }
    var Rr;

    function jr(HH, BH, LH) {
      function AH(HH, AH, rH, SH) {
        if ("string" === typeof HH && (HH = function(HH) {
            HH = unescape(encodeURIComponent(HH));
            for (var BH = [], LH = 0; LH < HH.length; ++LH) BH.push(HH.charCodeAt(LH));
            return BH
          }(HH)), "string" === typeof AH && (AH = function(HH) {
            if (!er(HH)) throw TypeError("Invalid UUID");
            var BH, LH = new Uint8Array(16);
            return LH[0] = (BH = parseInt(HH.slice(0, 8), 16)) >>> 24, LH[1] = BH >>> 16 & 255, LH[2] = BH >>> 8 & 255, LH[3] = 255 & BH, LH[4] = (BH = parseInt(HH.slice(9, 13), 16)) >>> 8, LH[5] = 255 & BH, LH[6] = (BH = parseInt(HH.slice(14, 18), 16)) >>> 8, LH[7] = 255 & BH, LH[8] = (BH = parseInt(HH.slice(19, 23), 16)) >>> 8, LH[9] = 255 & BH, LH[10] = (BH = parseInt(HH.slice(24, 36), 16)) / 1099511627776 & 255, LH[11] = BH / 4294967296 & 255, LH[12] = BH >>> 24 & 255, LH[13] = BH >>> 16 & 255, LH[14] = BH >>> 8 & 255, LH[15] = 255 & BH, LH
          }(AH)), 16 !== AH.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var hH = new Uint8Array(16 + HH.length);
        if (hH.set(AH), hH.set(HH, AH.length), (hH = LH(hH))[6] = 15 & hH[6] | BH, hH[8] = 63 & hH[8] | 128, rH) {
          SH = SH || 0;
          for (var tH = 0; tH < 16; ++tH) rH[SH + tH] = hH[tH];
          return rH
        }
        return Nr(hH)
      }
      try {
        AH.name = HH
      } catch (rH) {}
      return AH.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", AH.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", AH
    }

    function nr(HH) {
      return 14 + (HH + 64 >>> 9 << 4) + 1
    }

    function Fr(HH, BH) {
      var LH = (65535 & HH) + (65535 & BH);
      return (HH >> 16) + (BH >> 16) + (LH >> 16) << 16 | 65535 & LH
    }

    function Dr(HH, BH, LH, AH, rH, SH) {
      return Fr((hH = Fr(Fr(BH, HH), Fr(AH, SH))) << (tH = rH) | hH >>> 32 - tH, LH);
      var hH, tH
    }

    function wr(HH, BH, LH, AH, rH, SH, hH) {
      return Dr(BH & LH | ~BH & AH, HH, BH, rH, SH, hH)
    }

    function Zr(HH, BH, LH, AH, rH, SH, hH) {
      return Dr(BH & AH | LH & ~AH, HH, BH, rH, SH, hH)
    }

    function dr(HH, BH, LH, AH, rH, SH, hH) {
      return Dr(BH ^ LH ^ AH, HH, BH, rH, SH, hH)
    }

    function ar(HH, BH, LH, AH, rH, SH, hH) {
      return Dr(LH ^ (BH | ~AH), HH, BH, rH, SH, hH)
    }
    jr("v3", 48, (function(HH) {
      if ("string" === typeof HH) {
        var BH = unescape(encodeURIComponent(HH));
        HH = new Uint8Array(BH.length);
        for (var LH = 0; LH < BH.length; ++LH) HH[LH] = BH.charCodeAt(LH)
      }
      return function(HH) {
        for (var BH = [], LH = 32 * HH.length, AH = "0123456789abcdef", rH = 0; rH < LH; rH += 8) {
          var SH = HH[rH >> 5] >>> rH % 32 & 255,
            hH = parseInt(AH.charAt(SH >>> 4 & 15) + AH.charAt(15 & SH), 16);
          BH.push(hH)
        }
        return BH
      }(function(HH, BH) {
        HH[BH >> 5] |= 128 << BH % 32, HH[nr(BH) - 1] = BH;
        for (var LH = 1732584193, AH = -271733879, rH = -1732584194, SH = 271733878, hH = 0; hH < HH.length; hH += 16) {
          var tH = LH,
            zH = AH,
            CH = rH,
            EH = SH;
          LH = wr(LH, AH, rH, SH, HH[hH], 7, -680876936), SH = wr(SH, LH, AH, rH, HH[hH + 1], 12, -389564586), rH = wr(rH, SH, LH, AH, HH[hH + 2], 17, 606105819), AH = wr(AH, rH, SH, LH, HH[hH + 3], 22, -1044525330), LH = wr(LH, AH, rH, SH, HH[hH + 4], 7, -176418897), SH = wr(SH, LH, AH, rH, HH[hH + 5], 12, 1200080426), rH = wr(rH, SH, LH, AH, HH[hH + 6], 17, -1473231341), AH = wr(AH, rH, SH, LH, HH[hH + 7], 22, -45705983), LH = wr(LH, AH, rH, SH, HH[hH + 8], 7, 1770035416), SH = wr(SH, LH, AH, rH, HH[hH + 9], 12, -1958414417), rH = wr(rH, SH, LH, AH, HH[hH + 10], 17, -42063), AH = wr(AH, rH, SH, LH, HH[hH + 11], 22, -1990404162), LH = wr(LH, AH, rH, SH, HH[hH + 12], 7, 1804603682), SH = wr(SH, LH, AH, rH, HH[hH + 13], 12, -40341101), rH = wr(rH, SH, LH, AH, HH[hH + 14], 17, -1502002290), LH = Zr(LH, AH = wr(AH, rH, SH, LH, HH[hH + 15], 22, 1236535329), rH, SH, HH[hH + 1], 5, -165796510), SH = Zr(SH, LH, AH, rH, HH[hH + 6], 9, -1069501632), rH = Zr(rH, SH, LH, AH, HH[hH + 11], 14, 643717713), AH = Zr(AH, rH, SH, LH, HH[hH], 20, -373897302), LH = Zr(LH, AH, rH, SH, HH[hH + 5], 5, -701558691), SH = Zr(SH, LH, AH, rH, HH[hH + 10], 9, 38016083), rH = Zr(rH, SH, LH, AH, HH[hH + 15], 14, -660478335), AH = Zr(AH, rH, SH, LH, HH[hH + 4], 20, -405537848), LH = Zr(LH, AH, rH, SH, HH[hH + 9], 5, 568446438), SH = Zr(SH, LH, AH, rH, HH[hH + 14], 9, -1019803690), rH = Zr(rH, SH, LH, AH, HH[hH + 3], 14, -187363961), AH = Zr(AH, rH, SH, LH, HH[hH + 8], 20, 1163531501), LH = Zr(LH, AH, rH, SH, HH[hH + 13], 5, -1444681467), SH = Zr(SH, LH, AH, rH, HH[hH + 2], 9, -51403784), rH = Zr(rH, SH, LH, AH, HH[hH + 7], 14, 1735328473), LH = dr(LH, AH = Zr(AH, rH, SH, LH, HH[hH + 12], 20, -1926607734), rH, SH, HH[hH + 5], 4, -378558), SH = dr(SH, LH, AH, rH, HH[hH + 8], 11, -2022574463), rH = dr(rH, SH, LH, AH, HH[hH + 11], 16, 1839030562), AH = dr(AH, rH, SH, LH, HH[hH + 14], 23, -35309556), LH = dr(LH, AH, rH, SH, HH[hH + 1], 4, -1530992060), SH = dr(SH, LH, AH, rH, HH[hH + 4], 11, 1272893353), rH = dr(rH, SH, LH, AH, HH[hH + 7], 16, -155497632), AH = dr(AH, rH, SH, LH, HH[hH + 10], 23, -1094730640), LH = dr(LH, AH, rH, SH, HH[hH + 13], 4, 681279174), SH = dr(SH, LH, AH, rH, HH[hH], 11, -358537222), rH = dr(rH, SH, LH, AH, HH[hH + 3], 16, -722521979), AH = dr(AH, rH, SH, LH, HH[hH + 6], 23, 76029189), LH = dr(LH, AH, rH, SH, HH[hH + 9], 4, -640364487), SH = dr(SH, LH, AH, rH, HH[hH + 12], 11, -421815835), rH = dr(rH, SH, LH, AH, HH[hH + 15], 16, 530742520), LH = ar(LH, AH = dr(AH, rH, SH, LH, HH[hH + 2], 23, -995338651), rH, SH, HH[hH], 6, -198630844), SH = ar(SH, LH, AH, rH, HH[hH + 7], 10, 1126891415), rH = ar(rH, SH, LH, AH, HH[hH + 14], 15, -1416354905), AH = ar(AH, rH, SH, LH, HH[hH + 5], 21, -57434055), LH = ar(LH, AH, rH, SH, HH[hH + 12], 6, 1700485571), SH = ar(SH, LH, AH, rH, HH[hH + 3], 10, -1894986606), rH = ar(rH, SH, LH, AH, HH[hH + 10], 15, -1051523), AH = ar(AH, rH, SH, LH, HH[hH + 1], 21, -2054922799), LH = ar(LH, AH, rH, SH, HH[hH + 8], 6, 1873313359), SH = ar(SH, LH, AH, rH, HH[hH + 15], 10, -30611744), rH = ar(rH, SH, LH, AH, HH[hH + 6], 15, -1560198380), AH = ar(AH, rH, SH, LH, HH[hH + 13], 21, 1309151649), LH = ar(LH, AH, rH, SH, HH[hH + 4], 6, -145523070), SH = ar(SH, LH, AH, rH, HH[hH + 11], 10, -1120210379), rH = ar(rH, SH, LH, AH, HH[hH + 2], 15, 718787259), AH = ar(AH, rH, SH, LH, HH[hH + 9], 21, -343485551), LH = Fr(LH, tH), AH = Fr(AH, zH), rH = Fr(rH, CH), SH = Fr(SH, EH)
        }
        return [LH, AH, rH, SH]
      }(function(HH) {
        if (0 === HH.length) return [];
        for (var BH = 8 * HH.length, LH = new Uint32Array(nr(BH)), AH = 0; AH < BH; AH += 8) LH[AH >> 5] |= (255 & HH[AH / 8]) << AH % 32;
        return LH
      }(HH), 8 * HH.length))
    }));
    var sr = new Uint8Array(16);

    function Jr() {
      if (!Rr && !(Rr = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return Rr(sr)
    }

    function ir(HH, BH, LH) {
      var AH = (HH = HH || {}).random || (HH.rng || Jr)();
      if (AH[6] = 15 & AH[6] | 64, AH[8] = 63 & AH[8] | 128, BH) {
        LH = LH || 0;
        for (var rH = 0; rH < 16; ++rH) BH[LH + rH] = AH[rH];
        return BH
      }
      return Nr(AH)
    }

    function pr(HH, BH, LH, AH) {
      switch (HH) {
        case 0:
          return BH & LH ^ ~BH & AH;
        case 1:
        case 3:
          return BH ^ LH ^ AH;
        case 2:
          return BH & LH ^ BH & AH ^ LH & AH
      }
    }

    function yr(HH, BH) {
      return HH << BH | HH >>> 32 - BH
    }
    jr("v5", 80, (function(HH) {
      var BH = [1518500249, 1859775393, 2400959708, 3395469782],
        LH = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof HH) {
        var AH = unescape(encodeURIComponent(HH));
        HH = [];
        for (var rH = 0; rH < AH.length; ++rH) HH.push(AH.charCodeAt(rH))
      } else Array.isArray(HH) || (HH = Array.prototype.slice.call(HH));
      HH.push(128);
      for (var SH = HH.length / 4 + 2, hH = Math.ceil(SH / 16), tH = new Array(hH), zH = 0; zH < hH; ++zH) {
        for (var CH = new Uint32Array(16), EH = 0; EH < 16; ++EH) CH[EH] = HH[64 * zH + 4 * EH] << 24 | HH[64 * zH + 4 * EH + 1] << 16 | HH[64 * zH + 4 * EH + 2] << 8 | HH[64 * zH + 4 * EH + 3];
        tH[zH] = CH
      }
      tH[hH - 1][14] = 8 * (HH.length - 1) / Math.pow(2, 32), tH[hH - 1][14] = Math.floor(tH[hH - 1][14]), tH[hH - 1][15] = 8 * (HH.length - 1) & 4294967295;
      for (var XH = 0; XH < hH; ++XH) {
        for (var GH = new Uint32Array(80), YH = 0; YH < 16; ++YH) GH[YH] = tH[XH][YH];
        for (var uH = 16; uH < 80; ++uH) GH[uH] = yr(GH[uH - 3] ^ GH[uH - 8] ^ GH[uH - 14] ^ GH[uH - 16], 1);
        for (var QH = LH[0], WH = LH[1], MH = LH[2], xH = LH[3], vH = LH[4], PH = 0; PH < 80; ++PH) {
          var TH = Math.floor(PH / 20),
            UH = yr(QH, 5) + pr(TH, WH, MH, xH) + vH + BH[TH] + GH[PH] >>> 0;
          vH = xH, xH = MH, MH = yr(WH, 30) >>> 0, WH = QH, QH = UH
        }
        LH[0] = LH[0] + QH >>> 0, LH[1] = LH[1] + WH >>> 0, LH[2] = LH[2] + MH >>> 0, LH[3] = LH[3] + xH >>> 0, LH[4] = LH[4] + vH >>> 0
      }
      return [LH[0] >> 24 & 255, LH[0] >> 16 & 255, LH[0] >> 8 & 255, 255 & LH[0], LH[1] >> 24 & 255, LH[1] >> 16 & 255, LH[1] >> 8 & 255, 255 & LH[1], LH[2] >> 24 & 255, LH[2] >> 16 & 255, LH[2] >> 8 & 255, 255 & LH[2], LH[3] >> 24 & 255, LH[3] >> 16 & 255, LH[3] >> 8 & 255, 255 & LH[3], LH[4] >> 24 & 255, LH[4] >> 16 & 255, LH[4] >> 8 & 255, 255 & LH[4]]
    }));
    class HS extends Error {
      constructor(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(BH), this.code = HH, this.message = BH, this.name = "Discord SDK Error"
      }
    }
    const BS = ["log", "warn", "debug", "info", "error"];
    var LS;
    ! function(HH) {
      HH[HH.HANDSHAKE = 0] = "HANDSHAKE", HH[HH.FRAME = 1] = "FRAME", HH[HH.CLOSE = 2] = "CLOSE", HH[HH.HELLO = 3] = "HELLO"
    }(LS || (LS = {}));
    const AS = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class rS {
      getTransfer(HH) {
        var BH;
        switch (HH.cmd) {
          case sL.SUBSCRIBE:
          case sL.UNSUBSCRIBE:
            return;
          default:
            return null !== (BH = HH.transfer) && void 0 !== BH ? BH : void 0
        }
      }
      constructor(HH, BH) {
        var LH;
        if (this.eventBus = new CH, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = HH => {
            var BH;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const LH = ir();
            null === (BH = this.source) || void 0 === BH || BH.postMessage([LS.FRAME, Object.assign(Object.assign({}, HH), {
              nonce: LH
            })], this.sourceOrigin, this.getTransfer(HH));
            return new Promise(((HH, BH) => {
              this.pendingCommands.set(LH, {
                resolve: HH,
                reject: BH
              })
            }))
          }, this.commands = (LH = this.sendCommand, {
            authenticate: Yr(LH),
            authorize: ur(LH),
            captureLog: Qr(LH),
            encourageHardwareAcceleration: Wr(LH),
            getChannel: lr(LH),
            getChannelPermissions: vr(LH),
            getEntitlements: Mr(LH),
            getPlatformBehaviors: Pr(LH),
            getSkus: xr(LH),
            openExternalLink: Tr(LH),
            openInviteDialog: Ur(LH),
            openShareMomentDialog: Vr(LH),
            setActivity: Or(LH),
            setConfig: br(LH),
            setOrientationLockState: mr(LH),
            startPurchase: or(LH),
            userSettingsGetLocale: Ir(LH),
            initiateImageUpload: fr(LH),
            getInstanceConnectedParticipants: Kr(LH)
          }), this.handleMessage = HH => {
            if (!AS.has(HH.origin)) return;
            const BH = HH.data;
            if (!Array.isArray(BH)) return;
            const [LH, AH] = BH;
            switch (LH) {
              case LS.HELLO:
                return;
              case LS.CLOSE:
                return this.handleClose(AH);
              case LS.HANDSHAKE:
                return this.handleHandshake();
              case LS.FRAME:
                return this.handleFrame(AH);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = HH, this.configuration = null !== BH && void 0 !== BH ? BH : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = eL.DESKTOP, this.guildId = null, void(this.channelId = null);
        const AH = new URLSearchParams(this._getSearch()),
          rH = AH.get("frame_id");
        if (!rH) throw new Error("frame_id query param is not defined");
        this.frameId = rH;
        const SH = AH.get("instance_id");
        if (!SH) throw new Error("instance_id query param is not defined");
        this.instanceId = SH;
        const hH = AH.get("platform");
        if (!hH) throw new Error("platform query param is not defined");
        if (hH !== eL.DESKTOP && hH !== eL.MOBILE) throw new Error(`Invalid query param "platform" of "${hH}". Valid values are "${eL.DESKTOP}" or "${eL.MOBILE}"`);
        this.platform = hH, this.guildId = AH.get("guild_id"), this.channelId = AH.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var HH;
          return [null !== (HH = window.parent.opener) && void 0 !== HH ? HH : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(HH, BH) {
        var LH;
        window.removeEventListener("message", this.handleMessage);
        const AH = ir();
        null === (LH = this.source) || void 0 === LH || LH.postMessage([LS.CLOSE, {
          code: HH,
          message: BH,
          nonce: AH
        }], this.sourceOrigin)
      }
      async subscribe(HH, BH) {
        for (var LH = arguments.length, AH = new Array(LH > 2 ? LH - 2 : 0), rH = 2; rH < LH; rH++) AH[rH - 2] = arguments[rH];
        const [SH] = AH, hH = this.eventBus.listenerCount(HH), tH = this.eventBus.on(HH, BH);
        return Object.values(cA).includes(HH) && HH !== cA.READY && 0 === hH && await this.sendCommand({
          cmd: sL.SUBSCRIBE,
          args: SH,
          evt: HH
        }), tH
      }
      async unsubscribe(HH, BH) {
        for (var LH = arguments.length, AH = new Array(LH > 2 ? LH - 2 : 0), rH = 2; rH < LH; rH++) AH[rH - 2] = arguments[rH];
        const [SH] = AH;
        return HH !== cA.READY && 1 === this.eventBus.listenerCount(HH) && await this.sendCommand({
          cmd: sL.UNSUBSCRIBE,
          evt: HH,
          args: SH
        }), this.eventBus.off(HH, BH)
      }
      async ready() {
        this.isReady || await new Promise((HH => {
          this.eventBus.once(cA.READY, HH)
        }))
      }
      handshake() {
        var HH;
        null === (HH = this.source) || void 0 === HH || HH.postMessage([LS.HANDSHAKE, {
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
        const HH = (HH, BH) => {
          this.commands.captureLog({
            level: HH,
            message: BH
          })
        };
        BS.forEach((BH => {
          ! function(HH, BH, LH) {
            const AH = HH[BH],
              rH = HH;
            AH && (HH[BH] = function() {
              const HH = [].slice.call(arguments),
                SH = "" + HH.join(" ");
              LH(BH, SH), AH.apply(rH, HH)
            })
          }(console, BH, HH)
        }))
      }
      handleClose(HH) {
        zr.parse(HH)
      }
      handleHandshake() {}
      handleFrame(HH) {
        var BH, LH;
        let AH;
        try {
          AH = Er(HH)
        } catch (rH) {
          return console.error("Failed to parse", HH), void console.error(rH)
        }
        if ("DISPATCH" === AH.cmd) this.eventBus.emit(AH.evt, AH.data);
        else {
          if (AH.evt === KA) {
            if (null != AH.nonce) return null === (BH = this.pendingCommands.get(AH.nonce)) || void 0 === BH || BH.reject(AH.data), void this.pendingCommands.delete(AH.nonce);
            this.eventBus.emit("error", new HS(AH.data.code, AH.data.message))
          }
          if (null == AH.nonce) return void console.error("Missing nonce", HH);
          null === (LH = this.pendingCommands.get(AH.nonce)) || void 0 === LH || LH.resolve(AH), this.pendingCommands.delete(AH.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var SS, hS = 1e9,
      tS = !0,
      zS = "[DecimalError] ",
      CS = zS + "Invalid argument: ",
      ES = zS + "Exponent out of range: ",
      XS = Math.floor,
      GS = Math.pow,
      YS = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      uS = 1e7,
      QS = 9007199254740991,
      WS = XS(1286742750677284.5),
      MS = {};

    function xS(HH, BH) {
      var LH, AH, rH, SH, hH, tH, zH, CH, EH = HH.constructor,
        XH = EH.precision;
      if (!HH.s || !BH.s) return BH.s || (BH = new EH(HH)), tS ? oS(BH, XH) : BH;
      if (zH = HH.d, CH = BH.d, hH = HH.e, rH = BH.e, zH = zH.slice(), SH = hH - rH) {
        for (SH < 0 ? (AH = zH, SH = -SH, tH = CH.length) : (AH = CH, rH = hH, tH = zH.length), SH > (tH = (hH = Math.ceil(XH / 7)) > tH ? hH + 1 : tH + 1) && (SH = tH, AH.length = 1), AH.reverse(); SH--;) AH.push(0);
        AH.reverse()
      }
      for ((tH = zH.length) - (SH = CH.length) < 0 && (SH = tH, AH = CH, CH = zH, zH = AH), LH = 0; SH;) LH = (zH[--SH] = zH[SH] + CH[SH] + LH) / uS | 0, zH[SH] %= uS;
      for (LH && (zH.unshift(LH), ++rH), tH = zH.length; 0 == zH[--tH];) zH.pop();
      return BH.d = zH, BH.e = rH, tS ? oS(BH, XH) : BH
    }

    function vS(HH, BH, LH) {
      if (HH !== ~~HH || HH < BH || HH > LH) throw Error(CS + HH)
    }

    function PS(HH) {
      var BH, LH, AH, rH = HH.length - 1,
        SH = "",
        hH = HH[0];
      if (rH > 0) {
        for (SH += hH, BH = 1; BH < rH; BH++)(LH = 7 - (AH = HH[BH] + "").length) && (SH += bS(LH)), SH += AH;
        (LH = 7 - (AH = (hH = HH[BH]) + "").length) && (SH += bS(LH))
      } else if (0 === hH) return "0";
      for (; hH % 10 === 0;) hH /= 10;
      return SH + hH
    }
    MS.absoluteValue = MS.abs = function() {
      var HH = new this.constructor(this);
      return HH.s && (HH.s = 1), HH
    }, MS.comparedTo = MS.cmp = function(HH) {
      var BH, LH, AH, rH, SH = this;
      if (HH = new SH.constructor(HH), SH.s !== HH.s) return SH.s || -HH.s;
      if (SH.e !== HH.e) return SH.e > HH.e ^ SH.s < 0 ? 1 : -1;
      for (BH = 0, LH = (AH = SH.d.length) < (rH = HH.d.length) ? AH : rH; BH < LH; ++BH)
        if (SH.d[BH] !== HH.d[BH]) return SH.d[BH] > HH.d[BH] ^ SH.s < 0 ? 1 : -1;
      return AH === rH ? 0 : AH > rH ^ SH.s < 0 ? 1 : -1
    }, MS.decimalPlaces = MS.dp = function() {
      var HH = this,
        BH = HH.d.length - 1,
        LH = 7 * (BH - HH.e);
      if (BH = HH.d[BH])
        for (; BH % 10 == 0; BH /= 10) LH--;
      return LH < 0 ? 0 : LH
    }, MS.dividedBy = MS.div = function(HH) {
      return TS(this, new this.constructor(HH))
    }, MS.dividedToIntegerBy = MS.idiv = function(HH) {
      var BH = this.constructor;
      return oS(TS(this, new BH(HH), 0, 1), BH.precision)
    }, MS.equals = MS.eq = function(HH) {
      return !this.cmp(HH)
    }, MS.exponent = function() {
      return VS(this)
    }, MS.greaterThan = MS.gt = function(HH) {
      return this.cmp(HH) > 0
    }, MS.greaterThanOrEqualTo = MS.gte = function(HH) {
      return this.cmp(HH) >= 0
    }, MS.isInteger = MS.isint = function() {
      return this.e > this.d.length - 2
    }, MS.isNegative = MS.isneg = function() {
      return this.s < 0
    }, MS.isPositive = MS.ispos = function() {
      return this.s > 0
    }, MS.isZero = function() {
      return 0 === this.s
    }, MS.lessThan = MS.lt = function(HH) {
      return this.cmp(HH) < 0
    }, MS.lessThanOrEqualTo = MS.lte = function(HH) {
      return this.cmp(HH) < 1
    }, MS.logarithm = MS.log = function(HH) {
      var BH, LH = this,
        AH = LH.constructor,
        rH = AH.precision,
        SH = rH + 5;
      if (void 0 === HH) HH = new AH(10);
      else if ((HH = new AH(HH)).s < 1 || HH.eq(SS)) throw Error(zS + "NaN");
      if (LH.s < 1) throw Error(zS + (LH.s ? "NaN" : "-Infinity"));
      return LH.eq(SS) ? new AH(0) : (tS = !1, BH = TS(kS(LH, SH), kS(HH, SH), SH), tS = !0, oS(BH, rH))
    }, MS.minus = MS.sub = function(HH) {
      var BH = this;
      return HH = new BH.constructor(HH), BH.s == HH.s ? IS(BH, HH) : xS(BH, (HH.s = -HH.s, HH))
    }, MS.modulo = MS.mod = function(HH) {
      var BH, LH = this,
        AH = LH.constructor,
        rH = AH.precision;
      if (!(HH = new AH(HH)).s) throw Error(zS + "NaN");
      return LH.s ? (tS = !1, BH = TS(LH, HH, 0, 1).times(HH), tS = !0, LH.minus(BH)) : oS(new AH(LH), rH)
    }, MS.naturalExponential = MS.exp = function() {
      return US(this)
    }, MS.naturalLogarithm = MS.ln = function() {
      return kS(this)
    }, MS.negated = MS.neg = function() {
      var HH = new this.constructor(this);
      return HH.s = -HH.s || 0, HH
    }, MS.plus = MS.add = function(HH) {
      var BH = this;
      return HH = new BH.constructor(HH), BH.s == HH.s ? xS(BH, HH) : IS(BH, (HH.s = -HH.s, HH))
    }, MS.precision = MS.sd = function(HH) {
      var BH, LH, AH, rH = this;
      if (void 0 !== HH && HH !== !!HH && 1 !== HH && 0 !== HH) throw Error(CS + HH);
      if (BH = VS(rH) + 1, LH = 7 * (AH = rH.d.length - 1) + 1, AH = rH.d[AH]) {
        for (; AH % 10 == 0; AH /= 10) LH--;
        for (AH = rH.d[0]; AH >= 10; AH /= 10) LH++
      }
      return HH && BH > LH ? BH : LH
    }, MS.squareRoot = MS.sqrt = function() {
      var HH, BH, LH, AH, rH, SH, hH, tH = this,
        zH = tH.constructor;
      if (tH.s < 1) {
        if (!tH.s) return new zH(0);
        throw Error(zS + "NaN")
      }
      for (HH = VS(tH), tS = !1, 0 == (rH = Math.sqrt(+tH)) || rH == 1 / 0 ? (((BH = PS(tH.d)).length + HH) % 2 == 0 && (BH += "0"), rH = Math.sqrt(BH), HH = XS((HH + 1) / 2) - (HH < 0 || HH % 2), AH = new zH(BH = rH == 1 / 0 ? "1e" + HH : (BH = rH.toExponential()).slice(0, BH.indexOf("e") + 1) + HH)) : AH = new zH(rH.toString()), rH = hH = (LH = zH.precision) + 3;;)
        if (AH = (SH = AH).plus(TS(tH, SH, hH + 2)).times(.5), PS(SH.d).slice(0, hH) === (BH = PS(AH.d)).slice(0, hH)) {
          if (BH = BH.slice(hH - 3, hH + 1), rH == hH && "4999" == BH) {
            if (oS(SH, LH + 1, 0), SH.times(SH).eq(tH)) {
              AH = SH;
              break
            }
          } else if ("9999" != BH) break;
          hH += 4
        } return tS = !0, oS(AH, LH)
    }, MS.times = MS.mul = function(HH) {
      var BH, LH, AH, rH, SH, hH, tH, zH, CH, EH = this,
        XH = EH.constructor,
        GH = EH.d,
        YH = (HH = new XH(HH)).d;
      if (!EH.s || !HH.s) return new XH(0);
      for (HH.s *= EH.s, LH = EH.e + HH.e, (zH = GH.length) < (CH = YH.length) && (SH = GH, GH = YH, YH = SH, hH = zH, zH = CH, CH = hH), SH = [], AH = hH = zH + CH; AH--;) SH.push(0);
      for (AH = CH; --AH >= 0;) {
        for (BH = 0, rH = zH + AH; rH > AH;) tH = SH[rH] + YH[AH] * GH[rH - AH - 1] + BH, SH[rH--] = tH % uS | 0, BH = tH / uS | 0;
        SH[rH] = (SH[rH] + BH) % uS | 0
      }
      for (; !SH[--hH];) SH.pop();
      return BH ? ++LH : SH.shift(), HH.d = SH, HH.e = LH, tS ? oS(HH, XH.precision) : HH
    }, MS.toDecimalPlaces = MS.todp = function(HH, BH) {
      var LH = this,
        AH = LH.constructor;
      return LH = new AH(LH), void 0 === HH ? LH : (vS(HH, 0, hS), void 0 === BH ? BH = AH.rounding : vS(BH, 0, 8), oS(LH, HH + VS(LH) + 1, BH))
    }, MS.toExponential = function(HH, BH) {
      var LH, AH = this,
        rH = AH.constructor;
      return void 0 === HH ? LH = fS(AH, !0) : (vS(HH, 0, hS), void 0 === BH ? BH = rH.rounding : vS(BH, 0, 8), LH = fS(AH = oS(new rH(AH), HH + 1, BH), !0, HH + 1)), LH
    }, MS.toFixed = function(HH, BH) {
      var LH, AH, rH = this,
        SH = rH.constructor;
      return void 0 === HH ? fS(rH) : (vS(HH, 0, hS), void 0 === BH ? BH = SH.rounding : vS(BH, 0, 8), LH = fS((AH = oS(new SH(rH), HH + VS(rH) + 1, BH)).abs(), !1, HH + VS(AH) + 1), rH.isneg() && !rH.isZero() ? "-" + LH : LH)
    }, MS.toInteger = MS.toint = function() {
      var HH = this,
        BH = HH.constructor;
      return oS(new BH(HH), VS(HH) + 1, BH.rounding)
    }, MS.toNumber = function() {
      return +this
    }, MS.toPower = MS.pow = function(HH) {
      var BH, LH, AH, rH, SH, hH, tH = this,
        zH = tH.constructor,
        CH = +(HH = new zH(HH));
      if (!HH.s) return new zH(SS);
      if (!(tH = new zH(tH)).s) {
        if (HH.s < 1) throw Error(zS + "Infinity");
        return tH
      }
      if (tH.eq(SS)) return tH;
      if (AH = zH.precision, HH.eq(SS)) return oS(tH, AH);
      if (hH = (BH = HH.e) >= (LH = HH.d.length - 1), SH = tH.s, hH) {
        if ((LH = CH < 0 ? -CH : CH) <= QS) {
          for (rH = new zH(SS), BH = Math.ceil(AH / 7 + 4), tS = !1; LH % 2 && lS((rH = rH.times(tH)).d, BH), 0 !== (LH = XS(LH / 2));) lS((tH = tH.times(tH)).d, BH);
          return tS = !0, HH.s < 0 ? new zH(SS).div(rH) : oS(rH, AH)
        }
      } else if (SH < 0) throw Error(zS + "NaN");
      return SH = SH < 0 && 1 & HH.d[Math.max(BH, LH)] ? -1 : 1, tH.s = 1, tS = !1, rH = HH.times(kS(tH, AH + 12)), tS = !0, (rH = US(rH)).s = SH, rH
    }, MS.toPrecision = function(HH, BH) {
      var LH, AH, rH = this,
        SH = rH.constructor;
      return void 0 === HH ? AH = fS(rH, (LH = VS(rH)) <= SH.toExpNeg || LH >= SH.toExpPos) : (vS(HH, 1, hS), void 0 === BH ? BH = SH.rounding : vS(BH, 0, 8), AH = fS(rH = oS(new SH(rH), HH, BH), HH <= (LH = VS(rH)) || LH <= SH.toExpNeg, HH)), AH
    }, MS.toSignificantDigits = MS.tosd = function(HH, BH) {
      var LH = this.constructor;
      return void 0 === HH ? (HH = LH.precision, BH = LH.rounding) : (vS(HH, 1, hS), void 0 === BH ? BH = LH.rounding : vS(BH, 0, 8)), oS(new LH(this), HH, BH)
    }, MS.toString = MS.valueOf = MS.val = MS.toJSON = MS[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var HH = this,
        BH = VS(HH),
        LH = HH.constructor;
      return fS(HH, BH <= LH.toExpNeg || BH >= LH.toExpPos)
    };
    var TS = function() {
      function HH(HH, BH) {
        var LH, AH = 0,
          rH = HH.length;
        for (HH = HH.slice(); rH--;) LH = HH[rH] * BH + AH, HH[rH] = LH % uS | 0, AH = LH / uS | 0;
        return AH && HH.unshift(AH), HH
      }

      function BH(HH, BH, LH, AH) {
        var rH, SH;
        if (LH != AH) SH = LH > AH ? 1 : -1;
        else
          for (rH = SH = 0; rH < LH; rH++)
            if (HH[rH] != BH[rH]) {
              SH = HH[rH] > BH[rH] ? 1 : -1;
              break
            } return SH
      }

      function LH(HH, BH, LH) {
        for (var AH = 0; LH--;) HH[LH] -= AH, AH = HH[LH] < BH[LH] ? 1 : 0, HH[LH] = AH * uS + HH[LH] - BH[LH];
        for (; !HH[0] && HH.length > 1;) HH.shift()
      }
      return function(AH, rH, SH, hH) {
        var tH, zH, CH, EH, XH, GH, YH, uH, QH, WH, MH, xH, vH, PH, TH, UH, VH, OH, bH = AH.constructor,
          kH = AH.s == rH.s ? 1 : -1,
          mH = AH.d,
          oH = rH.d;
        if (!AH.s) return new bH(AH);
        if (!rH.s) throw Error(zS + "Division by zero");
        for (zH = AH.e - rH.e, VH = oH.length, TH = mH.length, uH = (YH = new bH(kH)).d = [], CH = 0; oH[CH] == (mH[CH] || 0);) ++CH;
        if (oH[CH] > (mH[CH] || 0) && --zH, (xH = null == SH ? SH = bH.precision : hH ? SH + (VS(AH) - VS(rH)) + 1 : SH) < 0) return new bH(0);
        if (xH = xH / 7 + 2 | 0, CH = 0, 1 == VH)
          for (EH = 0, oH = oH[0], xH++;
            (CH < TH || EH) && xH--; CH++) vH = EH * uS + (mH[CH] || 0), uH[CH] = vH / oH | 0, EH = vH % oH | 0;
        else {
          for ((EH = uS / (oH[0] + 1) | 0) > 1 && (oH = HH(oH, EH), mH = HH(mH, EH), VH = oH.length, TH = mH.length), PH = VH, WH = (QH = mH.slice(0, VH)).length; WH < VH;) QH[WH++] = 0;
          (OH = oH.slice()).unshift(0), UH = oH[0], oH[1] >= uS / 2 && ++UH;
          do {
            EH = 0, (tH = BH(oH, QH, VH, WH)) < 0 ? (MH = QH[0], VH != WH && (MH = MH * uS + (QH[1] || 0)), (EH = MH / UH | 0) > 1 ? (EH >= uS && (EH = uS - 1), 1 == (tH = BH(XH = HH(oH, EH), QH, GH = XH.length, WH = QH.length)) && (EH--, LH(XH, VH < GH ? OH : oH, GH))) : (0 == EH && (tH = EH = 1), XH = oH.slice()), (GH = XH.length) < WH && XH.unshift(0), LH(QH, XH, WH), -1 == tH && (tH = BH(oH, QH, VH, WH = QH.length)) < 1 && (EH++, LH(QH, VH < WH ? OH : oH, WH)), WH = QH.length) : 0 === tH && (EH++, QH = [0]), uH[CH++] = EH, tH && QH[0] ? QH[WH++] = mH[PH] || 0 : (QH = [mH[PH]], WH = 1)
          } while ((PH++ < TH || void 0 !== QH[0]) && xH--)
        }
        return uH[0] || uH.shift(), YH.e = zH, oS(YH, hH ? SH + VS(YH) + 1 : SH)
      }
    }();

    function US(HH, BH) {
      var LH, AH, rH, SH, hH, tH = 0,
        zH = 0,
        CH = HH.constructor,
        EH = CH.precision;
      if (VS(HH) > 16) throw Error(ES + VS(HH));
      if (!HH.s) return new CH(SS);
      for (null == BH ? (tS = !1, hH = EH) : hH = BH, SH = new CH(.03125); HH.abs().gte(.1);) HH = HH.times(SH), zH += 5;
      for (hH += Math.log(GS(2, zH)) / Math.LN10 * 2 + 5 | 0, LH = AH = rH = new CH(SS), CH.precision = hH;;) {
        if (AH = oS(AH.times(HH), hH), LH = LH.times(++tH), PS((SH = rH.plus(TS(AH, LH, hH))).d).slice(0, hH) === PS(rH.d).slice(0, hH)) {
          for (; zH--;) rH = oS(rH.times(rH), hH);
          return CH.precision = EH, null == BH ? (tS = !0, oS(rH, EH)) : rH
        }
        rH = SH
      }
    }

    function VS(HH) {
      for (var BH = 7 * HH.e, LH = HH.d[0]; LH >= 10; LH /= 10) BH++;
      return BH
    }

    function OS(HH, BH, LH) {
      if (BH > HH.LN10.sd()) throw tS = !0, LH && (HH.precision = LH), Error(zS + "LN10 precision limit exceeded");
      return oS(new HH(HH.LN10), BH)
    }

    function bS(HH) {
      for (var BH = ""; HH--;) BH += "0";
      return BH
    }

    function kS(HH, BH) {
      var LH, AH, rH, SH, hH, tH, zH, CH, EH, XH = 1,
        GH = HH,
        YH = GH.d,
        uH = GH.constructor,
        QH = uH.precision;
      if (GH.s < 1) throw Error(zS + (GH.s ? "NaN" : "-Infinity"));
      if (GH.eq(SS)) return new uH(0);
      if (null == BH ? (tS = !1, CH = QH) : CH = BH, GH.eq(10)) return null == BH && (tS = !0), OS(uH, CH);
      if (CH += 10, uH.precision = CH, AH = (LH = PS(YH)).charAt(0), SH = VS(GH), !(Math.abs(SH) < 15e14)) return zH = OS(uH, CH + 2, QH).times(SH + ""), GH = kS(new uH(AH + "." + LH.slice(1)), CH - 10).plus(zH), uH.precision = QH, null == BH ? (tS = !0, oS(GH, QH)) : GH;
      for (; AH < 7 && 1 != AH || 1 == AH && LH.charAt(1) > 3;) AH = (LH = PS((GH = GH.times(HH)).d)).charAt(0), XH++;
      for (SH = VS(GH), AH > 1 ? (GH = new uH("0." + LH), SH++) : GH = new uH(AH + "." + LH.slice(1)), tH = hH = GH = TS(GH.minus(SS), GH.plus(SS), CH), EH = oS(GH.times(GH), CH), rH = 3;;) {
        if (hH = oS(hH.times(EH), CH), PS((zH = tH.plus(TS(hH, new uH(rH), CH))).d).slice(0, CH) === PS(tH.d).slice(0, CH)) return tH = tH.times(2), 0 !== SH && (tH = tH.plus(OS(uH, CH + 2, QH).times(SH + ""))), tH = TS(tH, new uH(XH), CH), uH.precision = QH, null == BH ? (tS = !0, oS(tH, QH)) : tH;
        tH = zH, rH += 2
      }
    }

    function mS(HH, BH) {
      var LH, AH, rH;
      for ((LH = BH.indexOf(".")) > -1 && (BH = BH.replace(".", "")), (AH = BH.search(/e/i)) > 0 ? (LH < 0 && (LH = AH), LH += +BH.slice(AH + 1), BH = BH.substring(0, AH)) : LH < 0 && (LH = BH.length), AH = 0; 48 === BH.charCodeAt(AH);) ++AH;
      for (rH = BH.length; 48 === BH.charCodeAt(rH - 1);) --rH;
      if (BH = BH.slice(AH, rH)) {
        if (rH -= AH, LH = LH - AH - 1, HH.e = XS(LH / 7), HH.d = [], AH = (LH + 1) % 7, LH < 0 && (AH += 7), AH < rH) {
          for (AH && HH.d.push(+BH.slice(0, AH)), rH -= 7; AH < rH;) HH.d.push(+BH.slice(AH, AH += 7));
          AH = 7 - (BH = BH.slice(AH)).length
        } else AH -= rH;
        for (; AH--;) BH += "0";
        if (HH.d.push(+BH), tS && (HH.e > WS || HH.e < -WS)) throw Error(ES + LH)
      } else HH.s = 0, HH.e = 0, HH.d = [0];
      return HH
    }

    function oS(HH, BH, LH) {
      var AH, rH, SH, hH, tH, zH, CH, EH, XH = HH.d;
      for (hH = 1, SH = XH[0]; SH >= 10; SH /= 10) hH++;
      if ((AH = BH - hH) < 0) AH += 7, rH = BH, CH = XH[EH = 0];
      else {
        if ((EH = Math.ceil((AH + 1) / 7)) >= (SH = XH.length)) return HH;
        for (CH = SH = XH[EH], hH = 1; SH >= 10; SH /= 10) hH++;
        rH = (AH %= 7) - 7 + hH
      }
      if (void 0 !== LH && (tH = CH / (SH = GS(10, hH - rH - 1)) % 10 | 0, zH = BH < 0 || void 0 !== XH[EH + 1] || CH % SH, zH = LH < 4 ? (tH || zH) && (0 == LH || LH == (HH.s < 0 ? 3 : 2)) : tH > 5 || 5 == tH && (4 == LH || zH || 6 == LH && (AH > 0 ? rH > 0 ? CH / GS(10, hH - rH) : 0 : XH[EH - 1]) % 10 & 1 || LH == (HH.s < 0 ? 8 : 7))), BH < 1 || !XH[0]) return zH ? (SH = VS(HH), XH.length = 1, BH = BH - SH - 1, XH[0] = GS(10, (7 - BH % 7) % 7), HH.e = XS(-BH / 7) || 0) : (XH.length = 1, XH[0] = HH.e = HH.s = 0), HH;
      if (0 == AH ? (XH.length = EH, SH = 1, EH--) : (XH.length = EH + 1, SH = GS(10, 7 - AH), XH[EH] = rH > 0 ? (CH / GS(10, hH - rH) % GS(10, rH) | 0) * SH : 0), zH)
        for (;;) {
          if (0 == EH) {
            (XH[0] += SH) == uS && (XH[0] = 1, ++HH.e);
            break
          }
          if (XH[EH] += SH, XH[EH] != uS) break;
          XH[EH--] = 0, SH = 1
        }
      for (AH = XH.length; 0 === XH[--AH];) XH.pop();
      if (tS && (HH.e > WS || HH.e < -WS)) throw Error(ES + VS(HH));
      return HH
    }

    function IS(HH, BH) {
      var LH, AH, rH, SH, hH, tH, zH, CH, EH, XH, GH = HH.constructor,
        YH = GH.precision;
      if (!HH.s || !BH.s) return BH.s ? BH.s = -BH.s : BH = new GH(HH), tS ? oS(BH, YH) : BH;
      if (zH = HH.d, XH = BH.d, AH = BH.e, CH = HH.e, zH = zH.slice(), hH = CH - AH) {
        for ((EH = hH < 0) ? (LH = zH, hH = -hH, tH = XH.length) : (LH = XH, AH = CH, tH = zH.length), hH > (rH = Math.max(Math.ceil(YH / 7), tH) + 2) && (hH = rH, LH.length = 1), LH.reverse(), rH = hH; rH--;) LH.push(0);
        LH.reverse()
      } else {
        for ((EH = (rH = zH.length) < (tH = XH.length)) && (tH = rH), rH = 0; rH < tH; rH++)
          if (zH[rH] != XH[rH]) {
            EH = zH[rH] < XH[rH];
            break
          } hH = 0
      }
      for (EH && (LH = zH, zH = XH, XH = LH, BH.s = -BH.s), tH = zH.length, rH = XH.length - tH; rH > 0; --rH) zH[tH++] = 0;
      for (rH = XH.length; rH > hH;) {
        if (zH[--rH] < XH[rH]) {
          for (SH = rH; SH && 0 === zH[--SH];) zH[SH] = uS - 1;
          --zH[SH], zH[rH] += uS
        }
        zH[rH] -= XH[rH]
      }
      for (; 0 === zH[--tH];) zH.pop();
      for (; 0 === zH[0]; zH.shift()) --AH;
      return zH[0] ? (BH.d = zH, BH.e = AH, tS ? oS(BH, YH) : BH) : new GH(0)
    }

    function fS(HH, BH, LH) {
      var AH, rH = VS(HH),
        SH = PS(HH.d),
        hH = SH.length;
      return BH ? (LH && (AH = LH - hH) > 0 ? SH = SH.charAt(0) + "." + SH.slice(1) + bS(AH) : hH > 1 && (SH = SH.charAt(0) + "." + SH.slice(1)), SH = SH + (rH < 0 ? "e" : "e+") + rH) : rH < 0 ? (SH = "0." + bS(-rH - 1) + SH, LH && (AH = LH - hH) > 0 && (SH += bS(AH))) : rH >= hH ? (SH += bS(rH + 1 - hH), LH && (AH = LH - rH - 1) > 0 && (SH = SH + "." + bS(AH))) : ((AH = rH + 1) < hH && (SH = SH.slice(0, AH) + "." + SH.slice(AH)), LH && (AH = LH - hH) > 0 && (rH + 1 === hH && (SH += "."), SH += bS(AH))), HH.s < 0 ? "-" + SH : SH
    }

    function lS(HH, BH) {
      if (HH.length > BH) return HH.length = BH, !0
    }

    function KS(HH) {
      if (!HH || "object" !== typeof HH) throw Error(zS + "Object expected");
      var BH, LH, AH, rH = ["precision", 1, hS, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (BH = 0; BH < rH.length; BH += 3)
        if (void 0 !== (AH = HH[LH = rH[BH]])) {
          if (!(XS(AH) === AH && AH >= rH[BH + 1] && AH <= rH[BH + 2])) throw Error(CS + LH + ": " + AH);
          this[LH] = AH
        } if (void 0 !== (AH = HH[LH = "LN10"])) {
        if (AH != Math.LN10) throw Error(CS + LH + ": " + AH);
        this[LH] = new this(AH)
      }
      return this
    }
    var cS = function HH(BH) {
      var LH, AH, rH;

      function SH(HH) {
        var BH = this;
        if (!(BH instanceof SH)) return new SH(HH);
        if (BH.constructor = SH, HH instanceof SH) return BH.s = HH.s, BH.e = HH.e, void(BH.d = (HH = HH.d) ? HH.slice() : HH);
        if ("number" === typeof HH) {
          if (0 * HH !== 0) throw Error(CS + HH);
          if (HH > 0) BH.s = 1;
          else {
            if (!(HH < 0)) return BH.s = 0, BH.e = 0, void(BH.d = [0]);
            HH = -HH, BH.s = -1
          }
          return HH === ~~HH && HH < 1e7 ? (BH.e = 0, void(BH.d = [HH])) : mS(BH, HH.toString())
        }
        if ("string" !== typeof HH) throw Error(CS + HH);
        if (45 === HH.charCodeAt(0) ? (HH = HH.slice(1), BH.s = -1) : BH.s = 1, !YS.test(HH)) throw Error(CS + HH);
        mS(BH, HH)
      }
      if (SH.prototype = MS, SH.ROUND_UP = 0, SH.ROUND_DOWN = 1, SH.ROUND_CEIL = 2, SH.ROUND_FLOOR = 3, SH.ROUND_HALF_UP = 4, SH.ROUND_HALF_DOWN = 5, SH.ROUND_HALF_EVEN = 6, SH.ROUND_HALF_CEIL = 7, SH.ROUND_HALF_FLOOR = 8, SH.clone = HH, SH.config = SH.set = KS, void 0 === BH && (BH = {}), BH)
        for (rH = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], LH = 0; LH < rH.length;) BH.hasOwnProperty(AH = rH[LH++]) || (BH[AH] = this[AH]);
      return SH.config(BH), SH
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    SS = new cS(1);
    var eS;
    ! function(HH) {
      HH.AED = "aed", HH.AFN = "afn", HH.ALL = "all", HH.AMD = "amd", HH.ANG = "ang", HH.AOA = "aoa", HH.ARS = "ars", HH.AUD = "aud", HH.AWG = "awg", HH.AZN = "azn", HH.BAM = "bam", HH.BBD = "bbd", HH.BDT = "bdt", HH.BGN = "bgn", HH.BHD = "bhd", HH.BIF = "bif", HH.BMD = "bmd", HH.BND = "bnd", HH.BOB = "bob", HH.BOV = "bov", HH.BRL = "brl", HH.BSD = "bsd", HH.BTN = "btn", HH.BWP = "bwp", HH.BYN = "byn", HH.BYR = "byr", HH.BZD = "bzd", HH.CAD = "cad", HH.CDF = "cdf", HH.CHE = "che", HH.CHF = "chf", HH.CHW = "chw", HH.CLF = "clf", HH.CLP = "clp", HH.CNY = "cny", HH.COP = "cop", HH.COU = "cou", HH.CRC = "crc", HH.CUC = "cuc", HH.CUP = "cup", HH.CVE = "cve", HH.CZK = "czk", HH.DJF = "djf", HH.DKK = "dkk", HH.DOP = "dop", HH.DZD = "dzd", HH.EGP = "egp", HH.ERN = "ern", HH.ETB = "etb", HH.EUR = "eur", HH.FJD = "fjd", HH.FKP = "fkp", HH.GBP = "gbp", HH.GEL = "gel", HH.GHS = "ghs", HH.GIP = "gip", HH.GMD = "gmd", HH.GNF = "gnf", HH.GTQ = "gtq", HH.GYD = "gyd", HH.HKD = "hkd", HH.HNL = "hnl", HH.HRK = "hrk", HH.HTG = "htg", HH.HUF = "huf", HH.IDR = "idr", HH.ILS = "ils", HH.INR = "inr", HH.IQD = "iqd", HH.IRR = "irr", HH.ISK = "isk", HH.JMD = "jmd", HH.JOD = "jod", HH.JPY = "jpy", HH.KES = "kes", HH.KGS = "kgs", HH.KHR = "khr", HH.KMF = "kmf", HH.KPW = "kpw", HH.KRW = "krw", HH.KWD = "kwd", HH.KYD = "kyd", HH.KZT = "kzt", HH.LAK = "lak", HH.LBP = "lbp", HH.LKR = "lkr", HH.LRD = "lrd", HH.LSL = "lsl", HH.LTL = "ltl", HH.LVL = "lvl", HH.LYD = "lyd", HH.MAD = "mad", HH.MDL = "mdl", HH.MGA = "mga", HH.MKD = "mkd", HH.MMK = "mmk", HH.MNT = "mnt", HH.MOP = "mop", HH.MRO = "mro", HH.MUR = "mur", HH.MVR = "mvr", HH.MWK = "mwk", HH.MXN = "mxn", HH.MXV = "mxv", HH.MYR = "myr", HH.MZN = "mzn", HH.NAD = "nad", HH.NGN = "ngn", HH.NIO = "nio", HH.NOK = "nok", HH.NPR = "npr", HH.NZD = "nzd", HH.OMR = "omr", HH.PAB = "pab", HH.PEN = "pen", HH.PGK = "pgk", HH.PHP = "php", HH.PKR = "pkr", HH.PLN = "pln", HH.PYG = "pyg", HH.QAR = "qar", HH.RON = "ron", HH.RSD = "rsd", HH.RUB = "rub", HH.RWF = "rwf", HH.SAR = "sar", HH.SBD = "sbd", HH.SCR = "scr", HH.SDG = "sdg", HH.SEK = "sek", HH.SGD = "sgd", HH.SHP = "shp", HH.SLL = "sll", HH.SOS = "sos", HH.SRD = "srd", HH.SSP = "ssp", HH.STD = "std", HH.SVC = "svc", HH.SYP = "syp", HH.SZL = "szl", HH.THB = "thb", HH.TJS = "tjs", HH.TMT = "tmt", HH.TND = "tnd", HH.TOP = "top", HH.TRY = "try", HH.TTD = "ttd", HH.TWD = "twd", HH.TZS = "tzs", HH.UAH = "uah", HH.UGX = "ugx", HH.USD = "usd", HH.USN = "usn", HH.USS = "uss", HH.UYI = "uyi", HH.UYU = "uyu", HH.UZS = "uzs", HH.VEF = "vef", HH.VND = "vnd", HH.VUV = "vuv", HH.WST = "wst", HH.XAF = "xaf", HH.XAG = "xag", HH.XAU = "xau", HH.XBA = "xba", HH.XBB = "xbb", HH.XBC = "xbc", HH.XBD = "xbd", HH.XCD = "xcd", HH.XDR = "xdr", HH.XFU = "xfu", HH.XOF = "xof", HH.XPD = "xpd", HH.XPF = "xpf", HH.XPT = "xpt", HH.XSU = "xsu", HH.XTS = "xts", HH.XUA = "xua", HH.YER = "yer", HH.ZAR = "zar", HH.ZMW = "zmw", HH.ZWL = "zwl"
    }(eS || (eS = {}));
    eS.AED, eS.AFN, eS.ALL, eS.AMD, eS.ANG, eS.AOA, eS.ARS, eS.AUD, eS.AWG, eS.AZN, eS.BAM, eS.BBD, eS.BDT, eS.BGN, eS.BHD, eS.BIF, eS.BMD, eS.BND, eS.BOB, eS.BOV, eS.BRL, eS.BSD, eS.BTN, eS.BWP, eS.BYR, eS.BYN, eS.BZD, eS.CAD, eS.CDF, eS.CHE, eS.CHF, eS.CHW, eS.CLF, eS.CLP, eS.CNY, eS.COP, eS.COU, eS.CRC, eS.CUC, eS.CUP, eS.CVE, eS.CZK, eS.DJF, eS.DKK, eS.DOP, eS.DZD, eS.EGP, eS.ERN, eS.ETB, eS.EUR, eS.FJD, eS.FKP, eS.GBP, eS.GEL, eS.GHS, eS.GIP, eS.GMD, eS.GNF, eS.GTQ, eS.GYD, eS.HKD, eS.HNL, eS.HRK, eS.HTG, eS.HUF, eS.IDR, eS.ILS, eS.INR, eS.IQD, eS.IRR, eS.ISK, eS.JMD, eS.JOD, eS.JPY, eS.KES, eS.KGS, eS.KHR, eS.KMF, eS.KPW, eS.KRW, eS.KWD, eS.KYD, eS.KZT, eS.LAK, eS.LBP, eS.LKR, eS.LRD, eS.LSL, eS.LTL, eS.LVL, eS.LYD, eS.MAD, eS.MDL, eS.MGA, eS.MKD, eS.MMK, eS.MNT, eS.MOP, eS.MRO, eS.MUR, eS.MVR, eS.MWK, eS.MXN, eS.MXV, eS.MYR, eS.MZN, eS.NAD, eS.NGN, eS.NIO, eS.NOK, eS.NPR, eS.NZD, eS.OMR, eS.PAB, eS.PEN, eS.PGK, eS.PHP, eS.PKR, eS.PLN, eS.PYG, eS.QAR, eS.RON, eS.RSD, eS.RUB, eS.RWF, eS.SAR, eS.SBD, eS.SCR, eS.SDG, eS.SEK, eS.SGD, eS.SHP, eS.SLL, eS.SOS, eS.SRD, eS.SSP, eS.STD, eS.SVC, eS.SYP, eS.SZL, eS.THB, eS.TJS, eS.TMT, eS.TND, eS.TOP, eS.TRY, eS.TTD, eS.TWD, eS.TZS, eS.UAH, eS.UGX, eS.USD, eS.USN, eS.USS, eS.UYI, eS.UYU, eS.UZS, eS.VEF, eS.VND, eS.VUV, eS.WST, eS.XAF, eS.XAG, eS.XAU, eS.XBA, eS.XBB, eS.XBC, eS.XBD, eS.XCD, eS.XDR, eS.XFU, eS.XOF, eS.XPD, eS.XPF, eS.XPT, eS.XSU, eS.XTS, eS.XUA, eS.YER, eS.ZAR, eS.ZMW, eS.ZWL;
    var qS = {
      exports: {}
    };
    ! function(HH, BH) {
      var LH = "__lodash_hash_undefined__",
        AH = 9007199254740991,
        SH = "[object Arguments]",
        hH = "[object Array]",
        tH = "[object Boolean]",
        zH = "[object Date]",
        CH = "[object Error]",
        EH = "[object Function]",
        XH = "[object Map]",
        GH = "[object Number]",
        YH = "[object Object]",
        uH = "[object Promise]",
        QH = "[object RegExp]",
        WH = "[object Set]",
        MH = "[object String]",
        xH = "[object Symbol]",
        vH = "[object WeakMap]",
        PH = "[object ArrayBuffer]",
        TH = "[object DataView]",
        UH = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        VH = /^\w*$/,
        OH = /^\./,
        bH = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        kH = /\\(\\)?/g,
        mH = /^\[object .+?Constructor\]$/,
        oH = /^(?:0|[1-9]\d*)$/,
        IH = {};
      IH["[object Float32Array]"] = IH["[object Float64Array]"] = IH["[object Int8Array]"] = IH["[object Int16Array]"] = IH["[object Int32Array]"] = IH["[object Uint8Array]"] = IH["[object Uint8ClampedArray]"] = IH["[object Uint16Array]"] = IH["[object Uint32Array]"] = !0, IH[SH] = IH[hH] = IH[PH] = IH[tH] = IH[TH] = IH[zH] = IH[CH] = IH[EH] = IH[XH] = IH[GH] = IH[YH] = IH[QH] = IH[WH] = IH[MH] = IH[vH] = !1;
      var fH = "object" == typeof rH && rH && rH.Object === Object && rH,
        lH = "object" == typeof self && self && self.Object === Object && self,
        KH = fH || lH || Function("return this")(),
        cH = BH && !BH.nodeType && BH,
        eH = cH && HH && !HH.nodeType && HH,
        qH = eH && eH.exports === cH && fH.process,
        gH = function() {
          try {
            return qH && qH.binding("util")
          } catch (HH) {}
        }(),
        NH = gH && gH.isTypedArray;

      function RH(HH, BH) {
        for (var LH = -1, AH = HH ? HH.length : 0; ++LH < AH && !1 !== BH(HH[LH], LH, HH););
        return HH
      }

      function jH(HH, BH) {
        for (var LH = -1, AH = HH ? HH.length : 0; ++LH < AH;)
          if (BH(HH[LH], LH, HH)) return !0;
        return !1
      }

      function nH(HH) {
        var BH = !1;
        if (null != HH && "function" != typeof HH.toString) try {
          BH = !!(HH + "")
        } catch (LH) {}
        return BH
      }

      function FH(HH) {
        var BH = -1,
          LH = Array(HH.size);
        return HH.forEach((function(HH, AH) {
          LH[++BH] = [AH, HH]
        })), LH
      }

      function DH(HH, BH) {
        return function(LH) {
          return HH(BH(LH))
        }
      }

      function wH(HH) {
        var BH = -1,
          LH = Array(HH.size);
        return HH.forEach((function(HH) {
          LH[++BH] = HH
        })), LH
      }
      var ZH = Array.prototype,
        dH = Function.prototype,
        aH = Object.prototype,
        sH = KH["__core-js_shared__"],
        JH = function() {
          var HH = /[^.]+$/.exec(sH && sH.keys && sH.keys.IE_PROTO || "");
          return HH ? "Symbol(src)_1." + HH : ""
        }(),
        iH = dH.toString,
        pH = aH.hasOwnProperty,
        yH = aH.toString,
        HB = RegExp("^" + iH.call(pH).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        BB = KH.Symbol,
        LB = KH.Uint8Array,
        AB = DH(Object.getPrototypeOf, Object),
        rB = Object.create,
        SB = aH.propertyIsEnumerable,
        hB = ZH.splice,
        tB = DH(Object.keys, Object),
        zB = FB(KH, "DataView"),
        CB = FB(KH, "Map"),
        EB = FB(KH, "Promise"),
        XB = FB(KH, "Set"),
        GB = FB(KH, "WeakMap"),
        YB = FB(Object, "create"),
        uB = iB(zB),
        QB = iB(CB),
        WB = iB(EB),
        MB = iB(XB),
        xB = iB(GB),
        vB = BB ? BB.prototype : void 0,
        PB = vB ? vB.valueOf : void 0,
        TB = vB ? vB.toString : void 0;

      function UB(HH) {
        var BH = -1,
          LH = HH ? HH.length : 0;
        for (this.clear(); ++BH < LH;) {
          var AH = HH[BH];
          this.set(AH[0], AH[1])
        }
      }

      function VB(HH) {
        var BH = -1,
          LH = HH ? HH.length : 0;
        for (this.clear(); ++BH < LH;) {
          var AH = HH[BH];
          this.set(AH[0], AH[1])
        }
      }

      function OB(HH) {
        var BH = -1,
          LH = HH ? HH.length : 0;
        for (this.clear(); ++BH < LH;) {
          var AH = HH[BH];
          this.set(AH[0], AH[1])
        }
      }

      function bB(HH) {
        var BH = -1,
          LH = HH ? HH.length : 0;
        for (this.__data__ = new OB; ++BH < LH;) this.add(HH[BH])
      }

      function kB(HH) {
        this.__data__ = new VB(HH)
      }

      function mB(HH, BH) {
        var LH = BL(HH) || HL(HH) ? function(HH, BH) {
            for (var LH = -1, AH = Array(HH); ++LH < HH;) AH[LH] = BH(LH);
            return AH
          }(HH.length, String) : [],
          AH = LH.length,
          rH = !!AH;
        for (var SH in HH) !BH && !pH.call(HH, SH) || rH && ("length" == SH || wB(SH, AH)) || LH.push(SH);
        return LH
      }

      function oB(HH, BH) {
        for (var LH = HH.length; LH--;)
          if (yB(HH[LH][0], BH)) return LH;
        return -1
      }
      UB.prototype.clear = function() {
        this.__data__ = YB ? YB(null) : {}
      }, UB.prototype.delete = function(HH) {
        return this.has(HH) && delete this.__data__[HH]
      }, UB.prototype.get = function(HH) {
        var BH = this.__data__;
        if (YB) {
          var AH = BH[HH];
          return AH === LH ? void 0 : AH
        }
        return pH.call(BH, HH) ? BH[HH] : void 0
      }, UB.prototype.has = function(HH) {
        var BH = this.__data__;
        return YB ? void 0 !== BH[HH] : pH.call(BH, HH)
      }, UB.prototype.set = function(HH, BH) {
        return this.__data__[HH] = YB && void 0 === BH ? LH : BH, this
      }, VB.prototype.clear = function() {
        this.__data__ = []
      }, VB.prototype.delete = function(HH) {
        var BH = this.__data__,
          LH = oB(BH, HH);
        return !(LH < 0) && (LH == BH.length - 1 ? BH.pop() : hB.call(BH, LH, 1), !0)
      }, VB.prototype.get = function(HH) {
        var BH = this.__data__,
          LH = oB(BH, HH);
        return LH < 0 ? void 0 : BH[LH][1]
      }, VB.prototype.has = function(HH) {
        return oB(this.__data__, HH) > -1
      }, VB.prototype.set = function(HH, BH) {
        var LH = this.__data__,
          AH = oB(LH, HH);
        return AH < 0 ? LH.push([HH, BH]) : LH[AH][1] = BH, this
      }, OB.prototype.clear = function() {
        this.__data__ = {
          hash: new UB,
          map: new(CB || VB),
          string: new UB
        }
      }, OB.prototype.delete = function(HH) {
        return nB(this, HH).delete(HH)
      }, OB.prototype.get = function(HH) {
        return nB(this, HH).get(HH)
      }, OB.prototype.has = function(HH) {
        return nB(this, HH).has(HH)
      }, OB.prototype.set = function(HH, BH) {
        return nB(this, HH).set(HH, BH), this
      }, bB.prototype.add = bB.prototype.push = function(HH) {
        return this.__data__.set(HH, LH), this
      }, bB.prototype.has = function(HH) {
        return this.__data__.has(HH)
      }, kB.prototype.clear = function() {
        this.__data__ = new VB
      }, kB.prototype.delete = function(HH) {
        return this.__data__.delete(HH)
      }, kB.prototype.get = function(HH) {
        return this.__data__.get(HH)
      }, kB.prototype.has = function(HH) {
        return this.__data__.has(HH)
      }, kB.prototype.set = function(HH, BH) {
        var LH = this.__data__;
        if (LH instanceof VB) {
          var AH = LH.__data__;
          if (!CB || AH.length < 199) return AH.push([HH, BH]), this;
          LH = this.__data__ = new OB(AH)
        }
        return LH.set(HH, BH), this
      };
      var IB, fB = function(HH, BH, LH) {
        for (var AH = -1, rH = Object(HH), SH = LH(HH), hH = SH.length; hH--;) {
          var tH = SH[IB ? hH : ++AH];
          if (!1 === BH(rH[tH], tH, rH)) break
        }
        return HH
      };

      function lB(HH, BH) {
        return HH && fB(HH, BH, EL)
      }

      function KB(HH, BH) {
        for (var LH = 0, AH = (BH = ZB(BH, HH) ? [BH] : RB(BH)).length; null != HH && LH < AH;) HH = HH[JB(BH[LH++])];
        return LH && LH == AH ? HH : void 0
      }

      function cB(HH, BH) {
        return null != HH && BH in Object(HH)
      }

      function eB(HH, BH, LH, AH, rH) {
        return HH === BH || (null == HH || null == BH || !SL(HH) && !hL(BH) ? HH !== HH && BH !== BH : function(HH, BH, LH, AH, rH, EH) {
          var uH = BL(HH),
            vH = BL(BH),
            UH = hH,
            VH = hH;
          uH || (UH = (UH = DB(HH)) == SH ? YH : UH);
          vH || (VH = (VH = DB(BH)) == SH ? YH : VH);
          var OH = UH == YH && !nH(HH),
            bH = VH == YH && !nH(BH),
            kH = UH == VH;
          if (kH && !OH) return EH || (EH = new kB), uH || CL(HH) ? jB(HH, BH, LH, AH, rH, EH) : function(HH, BH, LH, AH, rH, SH, hH) {
            switch (LH) {
              case TH:
                if (HH.byteLength != BH.byteLength || HH.byteOffset != BH.byteOffset) return !1;
                HH = HH.buffer, BH = BH.buffer;
              case PH:
                return !(HH.byteLength != BH.byteLength || !AH(new LB(HH), new LB(BH)));
              case tH:
              case zH:
              case GH:
                return yB(+HH, +BH);
              case CH:
                return HH.name == BH.name && HH.message == BH.message;
              case QH:
              case MH:
                return HH == BH + "";
              case XH:
                var EH = FH;
              case WH:
                var YH = 2 & SH;
                if (EH || (EH = wH), HH.size != BH.size && !YH) return !1;
                var uH = hH.get(HH);
                if (uH) return uH == BH;
                SH |= 1, hH.set(HH, BH);
                var vH = jB(EH(HH), EH(BH), AH, rH, SH, hH);
                return hH.delete(HH), vH;
              case xH:
                if (PB) return PB.call(HH) == PB.call(BH)
            }
            return !1
          }(HH, BH, UH, LH, AH, rH, EH);
          if (!(2 & rH)) {
            var mH = OH && pH.call(HH, "__wrapped__"),
              oH = bH && pH.call(BH, "__wrapped__");
            if (mH || oH) {
              var IH = mH ? HH.value() : HH,
                fH = oH ? BH.value() : BH;
              return EH || (EH = new kB), LH(IH, fH, AH, rH, EH)
            }
          }
          if (!kH) return !1;
          return EH || (EH = new kB),
            function(HH, BH, LH, AH, rH, SH) {
              var hH = 2 & rH,
                tH = EL(HH),
                zH = tH.length,
                CH = EL(BH),
                EH = CH.length;
              if (zH != EH && !hH) return !1;
              var XH = zH;
              for (; XH--;) {
                var GH = tH[XH];
                if (!(hH ? GH in BH : pH.call(BH, GH))) return !1
              }
              var YH = SH.get(HH);
              if (YH && SH.get(BH)) return YH == BH;
              var uH = !0;
              SH.set(HH, BH), SH.set(BH, HH);
              var QH = hH;
              for (; ++XH < zH;) {
                var WH = HH[GH = tH[XH]],
                  MH = BH[GH];
                if (AH) var xH = hH ? AH(MH, WH, GH, BH, HH, SH) : AH(WH, MH, GH, HH, BH, SH);
                if (!(void 0 === xH ? WH === MH || LH(WH, MH, AH, rH, SH) : xH)) {
                  uH = !1;
                  break
                }
                QH || (QH = "constructor" == GH)
              }
              if (uH && !QH) {
                var vH = HH.constructor,
                  PH = BH.constructor;
                vH == PH || !("constructor" in HH) || !("constructor" in BH) || "function" == typeof vH && vH instanceof vH && "function" == typeof PH && PH instanceof PH || (uH = !1)
              }
              return SH.delete(HH), SH.delete(BH), uH
            }(HH, BH, LH, AH, rH, EH)
        }(HH, BH, eB, LH, AH, rH))
      }

      function qB(HH) {
        return !(!SL(HH) || (BH = HH, JH && JH in BH)) && (AL(HH) || nH(HH) ? HB : mH).test(iB(HH));
        var BH
      }

      function gB(HH) {
        return "function" == typeof HH ? HH : null == HH ? XL : "object" == typeof HH ? BL(HH) ? function(HH, BH) {
          if (ZB(HH) && dB(BH)) return aB(JB(HH), BH);
          return function(LH) {
            var AH = function(HH, BH, LH) {
              var AH = null == HH ? void 0 : KB(HH, BH);
              return void 0 === AH ? LH : AH
            }(LH, HH);
            return void 0 === AH && AH === BH ? function(HH, BH) {
              return null != HH && function(HH, BH, LH) {
                BH = ZB(BH, HH) ? [BH] : RB(BH);
                var AH, rH = -1,
                  SH = BH.length;
                for (; ++rH < SH;) {
                  var hH = JB(BH[rH]);
                  if (!(AH = null != HH && LH(HH, hH))) break;
                  HH = HH[hH]
                }
                if (AH) return AH;
                SH = HH ? HH.length : 0;
                return !!SH && rL(SH) && wB(hH, SH) && (BL(HH) || HL(HH))
              }(HH, BH, cB)
            }(LH, HH) : eB(BH, AH, void 0, 3)
          }
        }(HH[0], HH[1]) : function(HH) {
          var BH = function(HH) {
            var BH = EL(HH),
              LH = BH.length;
            for (; LH--;) {
              var AH = BH[LH],
                rH = HH[AH];
              BH[LH] = [AH, rH, dB(rH)]
            }
            return BH
          }(HH);
          if (1 == BH.length && BH[0][2]) return aB(BH[0][0], BH[0][1]);
          return function(LH) {
            return LH === HH || function(HH, BH, LH, AH) {
              var rH = LH.length,
                SH = rH,
                hH = !AH;
              if (null == HH) return !SH;
              for (HH = Object(HH); rH--;) {
                var tH = LH[rH];
                if (hH && tH[2] ? tH[1] !== HH[tH[0]] : !(tH[0] in HH)) return !1
              }
              for (; ++rH < SH;) {
                var zH = (tH = LH[rH])[0],
                  CH = HH[zH],
                  EH = tH[1];
                if (hH && tH[2]) {
                  if (void 0 === CH && !(zH in HH)) return !1
                } else {
                  var XH = new kB;
                  if (AH) var GH = AH(CH, EH, zH, HH, BH, XH);
                  if (!(void 0 === GH ? eB(EH, CH, AH, 3, XH) : GH)) return !1
                }
              }
              return !0
            }(LH, HH, BH)
          }
        }(HH) : function(HH) {
          return ZB(HH) ? (BH = JB(HH), function(HH) {
            return null == HH ? void 0 : HH[BH]
          }) : function(HH) {
            return function(BH) {
              return KB(BH, HH)
            }
          }(HH);
          var BH
        }(HH)
      }

      function NB(HH) {
        if (! function(HH) {
            var BH = HH && HH.constructor,
              LH = "function" == typeof BH && BH.prototype || aH;
            return HH === LH
          }(HH)) return tB(HH);
        var BH = [];
        for (var LH in Object(HH)) pH.call(HH, LH) && "constructor" != LH && BH.push(LH);
        return BH
      }

      function RB(HH) {
        return BL(HH) ? HH : sB(HH)
      }

      function jB(HH, BH, LH, AH, rH, SH) {
        var hH = 2 & rH,
          tH = HH.length,
          zH = BH.length;
        if (tH != zH && !(hH && zH > tH)) return !1;
        var CH = SH.get(HH);
        if (CH && SH.get(BH)) return CH == BH;
        var EH = -1,
          XH = !0,
          GH = 1 & rH ? new bB : void 0;
        for (SH.set(HH, BH), SH.set(BH, HH); ++EH < tH;) {
          var YH = HH[EH],
            uH = BH[EH];
          if (AH) var QH = hH ? AH(uH, YH, EH, BH, HH, SH) : AH(YH, uH, EH, HH, BH, SH);
          if (void 0 !== QH) {
            if (QH) continue;
            XH = !1;
            break
          }
          if (GH) {
            if (!jH(BH, (function(HH, BH) {
                if (!GH.has(BH) && (YH === HH || LH(YH, HH, AH, rH, SH))) return GH.add(BH)
              }))) {
              XH = !1;
              break
            }
          } else if (YH !== uH && !LH(YH, uH, AH, rH, SH)) {
            XH = !1;
            break
          }
        }
        return SH.delete(HH), SH.delete(BH), XH
      }

      function nB(HH, BH) {
        var LH = HH.__data__;
        return function(HH) {
          var BH = typeof HH;
          return "string" == BH || "number" == BH || "symbol" == BH || "boolean" == BH ? "__proto__" !== HH : null === HH
        }(BH) ? LH["string" == typeof BH ? "string" : "hash"] : LH.map
      }

      function FB(HH, BH) {
        var LH = function(HH, BH) {
          return null == HH ? void 0 : HH[BH]
        }(HH, BH);
        return qB(LH) ? LH : void 0
      }
      var DB = function(HH) {
        return yH.call(HH)
      };

      function wB(HH, BH) {
        return !!(BH = null == BH ? AH : BH) && ("number" == typeof HH || oH.test(HH)) && HH > -1 && HH % 1 == 0 && HH < BH
      }

      function ZB(HH, BH) {
        if (BL(HH)) return !1;
        var LH = typeof HH;
        return !("number" != LH && "symbol" != LH && "boolean" != LH && null != HH && !tL(HH)) || (VH.test(HH) || !UH.test(HH) || null != BH && HH in Object(BH))
      }

      function dB(HH) {
        return HH === HH && !SL(HH)
      }

      function aB(HH, BH) {
        return function(LH) {
          return null != LH && (LH[HH] === BH && (void 0 !== BH || HH in Object(LH)))
        }
      }(zB && DB(new zB(new ArrayBuffer(1))) != TH || CB && DB(new CB) != XH || EB && DB(EB.resolve()) != uH || XB && DB(new XB) != WH || GB && DB(new GB) != vH) && (DB = function(HH) {
        var BH = yH.call(HH),
          LH = BH == YH ? HH.constructor : void 0,
          AH = LH ? iB(LH) : void 0;
        if (AH) switch (AH) {
          case uB:
            return TH;
          case QB:
            return XH;
          case WB:
            return uH;
          case MB:
            return WH;
          case xB:
            return vH
        }
        return BH
      });
      var sB = pB((function(HH) {
        var BH;
        HH = null == (BH = HH) ? "" : function(HH) {
          if ("string" == typeof HH) return HH;
          if (tL(HH)) return TB ? TB.call(HH) : "";
          var BH = HH + "";
          return "0" == BH && 1 / HH == -1 / 0 ? "-0" : BH
        }(BH);
        var LH = [];
        return OH.test(HH) && LH.push(""), HH.replace(bH, (function(HH, BH, AH, rH) {
          LH.push(AH ? rH.replace(kH, "$1") : BH || HH)
        })), LH
      }));

      function JB(HH) {
        if ("string" == typeof HH || tL(HH)) return HH;
        var BH = HH + "";
        return "0" == BH && 1 / HH == -1 / 0 ? "-0" : BH
      }

      function iB(HH) {
        if (null != HH) {
          try {
            return iH.call(HH)
          } catch (BH) {}
          try {
            return HH + ""
          } catch (BH) {}
        }
        return ""
      }

      function pB(HH, BH) {
        if ("function" != typeof HH || BH && "function" != typeof BH) throw new TypeError("Expected a function");
        var LH = function() {
          var AH = arguments,
            rH = BH ? BH.apply(this, AH) : AH[0],
            SH = LH.cache;
          if (SH.has(rH)) return SH.get(rH);
          var hH = HH.apply(this, AH);
          return LH.cache = SH.set(rH, hH), hH
        };
        return LH.cache = new(pB.Cache || OB), LH
      }

      function yB(HH, BH) {
        return HH === BH || HH !== HH && BH !== BH
      }

      function HL(HH) {
        return function(HH) {
          return hL(HH) && LL(HH)
        }(HH) && pH.call(HH, "callee") && (!SB.call(HH, "callee") || yH.call(HH) == SH)
      }
      pB.Cache = OB;
      var BL = Array.isArray;

      function LL(HH) {
        return null != HH && rL(HH.length) && !AL(HH)
      }

      function AL(HH) {
        var BH = SL(HH) ? yH.call(HH) : "";
        return BH == EH || "[object GeneratorFunction]" == BH
      }

      function rL(HH) {
        return "number" == typeof HH && HH > -1 && HH % 1 == 0 && HH <= AH
      }

      function SL(HH) {
        var BH = typeof HH;
        return !!HH && ("object" == BH || "function" == BH)
      }

      function hL(HH) {
        return !!HH && "object" == typeof HH
      }

      function tL(HH) {
        return "symbol" == typeof HH || hL(HH) && yH.call(HH) == xH
      }
      var zL, CL = NH ? (zL = NH, function(HH) {
        return zL(HH)
      }) : function(HH) {
        return hL(HH) && rL(HH.length) && !!IH[yH.call(HH)]
      };

      function EL(HH) {
        return LL(HH) ? mB(HH) : NB(HH)
      }

      function XL(HH) {
        return HH
      }
      HH.exports = function(HH, BH, LH) {
        var AH, rH = BL(HH) || CL(HH);
        if (BH = gB(BH), null == LH)
          if (rH || SL(HH)) {
            var SH = HH.constructor;
            LH = rH ? BL(HH) ? new SH : [] : AL(SH) ? SL(AH = AB(HH)) ? rB(AH) : {} : {}
          } else LH = {};
        return (rH ? RH : lB)(HH, (function(HH, AH, rH) {
          return BH(LH, HH, AH, rH)
        })), LH
      }
    }(qS, qS.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      n: gS
    } = AH
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);