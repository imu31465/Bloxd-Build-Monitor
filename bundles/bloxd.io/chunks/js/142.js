export const id = 142;
export const ids = [142];
export const modules = {
  7541: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AI,
      g: () => jD
    });
    var FY = {};
    DY.r(FY), DY.d(FY, {
      c: () => FF,
      g: () => RF,
      d: () => IF,
      k: () => nD,
      l: () => xD,
      m: () => KF,
      q: () => LD,
      u: () => ZF,
      v: () => lF,
      w: () => zF,
      z: () => PD,
      C: () => eF,
      G: () => cF,
      J: () => HF,
      O: () => UD,
      L: () => rF,
      R: () => BF,
      S: () => NF
    });
    var AY = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function IY(YY) {
      return YY && YY.__esModule && Object.prototype.hasOwnProperty.call(YY, "default") ? YY.default : YY
    }
    var RY = {
      exports: {}
    };
    ! function(YY) {
      var rY = Object.prototype.hasOwnProperty,
        DY = "~";

      function FY() {}

      function AY(YY, rY, DY) {
        this.iy = YY, this.context = rY, this.once = DY || !1
      }

      function IY(YY, rY, FY, IY, RY) {
        if ("function" !== typeof FY) throw new TypeError("The listener must be a function");
        var OY = new AY(FY, IY || YY, RY),
          gY = DY ? DY + rY : rY;
        return YY._events[gY] ? YY._events[gY].iy ? YY._events[gY] = [YY._events[gY], OY] : YY._events[gY].push(OY) : (YY._events[gY] = OY, YY._eventsCount++), YY
      }

      function RY(YY, rY) {
        0 === --YY._eventsCount ? YY._events = new FY : delete YY._events[rY]
      }

      function OY() {
        this._events = new FY, this._eventsCount = 0
      }
      Object.create && (FY.prototype = Object.create(null), (new FY).__proto__ || (DY = !1)), OY.prototype.eventNames = function() {
        var YY, FY, AY = [];
        if (0 === this._eventsCount) return AY;
        for (FY in YY = this._events) rY.call(YY, FY) && AY.push(DY ? FY.slice(1) : FY);
        return Object.getOwnPropertySymbols ? AY.concat(Object.getOwnPropertySymbols(YY)) : AY
      }, OY.prototype.listeners = function(YY) {
        var rY = DY ? DY + YY : YY,
          FY = this._events[rY];
        if (!FY) return [];
        if (FY.iy) return [FY.iy];
        for (var AY = 0, IY = FY.length, RY = new Array(IY); AY < IY; AY++) RY[AY] = FY[AY].iy;
        return RY
      }, OY.prototype.listenerCount = function(YY) {
        var rY = DY ? DY + YY : YY,
          FY = this._events[rY];
        return FY ? FY.iy ? 1 : FY.length : 0
      }, OY.prototype.emit = function(YY, rY, FY, AY, IY, RY) {
        var OY = DY ? DY + YY : YY;
        if (!this._events[OY]) return !1;
        var gY, aY, vY = this._events[OY],
          uY = arguments.length;
        if (vY.iy) {
          switch (vY.once && this.removeListener(YY, vY.iy, void 0, !0), uY) {
            case 1:
              return vY.iy.call(vY.context), !0;
            case 2:
              return vY.iy.call(vY.context, rY), !0;
            case 3:
              return vY.iy.call(vY.context, rY, FY), !0;
            case 4:
              return vY.iy.call(vY.context, rY, FY, AY), !0;
            case 5:
              return vY.iy.call(vY.context, rY, FY, AY, IY), !0;
            case 6:
              return vY.iy.call(vY.context, rY, FY, AY, IY, RY), !0
          }
          for (aY = 1, gY = new Array(uY - 1); aY < uY; aY++) gY[aY - 1] = arguments[aY];
          vY.iy.apply(vY.context, gY)
        } else {
          var sY, iY = vY.length;
          for (aY = 0; aY < iY; aY++) switch (vY[aY].once && this.removeListener(YY, vY[aY].iy, void 0, !0), uY) {
            case 1:
              vY[aY].iy.call(vY[aY].context);
              break;
            case 2:
              vY[aY].iy.call(vY[aY].context, rY);
              break;
            case 3:
              vY[aY].iy.call(vY[aY].context, rY, FY);
              break;
            case 4:
              vY[aY].iy.call(vY[aY].context, rY, FY, AY);
              break;
            default:
              if (!gY)
                for (sY = 1, gY = new Array(uY - 1); sY < uY; sY++) gY[sY - 1] = arguments[sY];
              vY[aY].iy.apply(vY[aY].context, gY)
          }
        }
        return !0
      }, OY.prototype.on = function(YY, rY, DY) {
        return IY(this, YY, rY, DY, !1)
      }, OY.prototype.once = function(YY, rY, DY) {
        return IY(this, YY, rY, DY, !0)
      }, OY.prototype.removeListener = function(YY, rY, FY, AY) {
        var IY = DY ? DY + YY : YY;
        if (!this._events[IY]) return this;
        if (!rY) return RY(this, IY), this;
        var OY = this._events[IY];
        if (OY.iy) OY.iy !== rY || AY && !OY.once || FY && OY.context !== FY || RY(this, IY);
        else {
          for (var gY = 0, aY = [], vY = OY.length; gY < vY; gY++)(OY[gY].iy !== rY || AY && !OY[gY].once || FY && OY[gY].context !== FY) && aY.push(OY[gY]);
          aY.length ? this._events[IY] = 1 === aY.length ? aY[0] : aY : RY(this, IY)
        }
        return this
      }, OY.prototype.oW = function(YY) {
        var rY;
        return YY ? (rY = DY ? DY + YY : YY, this._events[rY] && RY(this, rY)) : (this._events = new FY, this._eventsCount = 0), this
      }, OY.prototype.off = OY.prototype.removeListener, OY.prototype.addListener = OY.prototype.on, OY.prefixed = DY, OY.EventEmitter = OY, YY.exports = OY
    }(RY);
    var OY, gY, aY = IY(RY.exports);
    ! function(YY) {
      YY.assertEqual = YY => YY, YY.assertIs = function(YY) {}, YY.assertNever = function(YY) {
        throw new Error
      }, YY.arrayToEnum = YY => {
        const rY = {};
        for (const DY of YY) rY[DY] = DY;
        return rY
      }, YY.getValidEnumValues = rY => {
        const DY = YY.objectKeys(rY).filter((YY => "number" !== typeof rY[rY[YY]])),
          FY = {};
        for (const YY of DY) FY[YY] = rY[YY];
        return YY.objectValues(FY)
      }, YY.objectValues = rY => YY.objectKeys(rY).map((function(YY) {
        return rY[YY]
      })), YY.objectKeys = "function" === typeof Object.keys ? YY => Object.keys(YY) : YY => {
        const rY = [];
        for (const DY in YY) Object.prototype.hasOwnProperty.call(YY, DY) && rY.push(DY);
        return rY
      }, YY.find = (YY, rY) => {
        for (const DY of YY)
          if (rY(DY)) return DY
      }, YY.isInteger = "function" === typeof Number.isInteger ? YY => Number.isInteger(YY) : YY => "number" === typeof YY && isFinite(YY) && Math.floor(YY) === YY, YY.joinValues = function(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return YY.map((YY => "string" === typeof YY ? `'${YY}'` : YY)).join(rY)
      }, YY.jsonStringifyReplacer = (YY, rY) => "bigint" === typeof rY ? rY.toString() : rY
    }(OY || (OY = {})),
    function(YY) {
      YY.mergeShapes = (YY, rY) => ({
        ...YY,
        ...rY
      })
    }(gY || (gY = {}));
    const vY = OY.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      uY = YY => {
        switch (typeof YY) {
          case "undefined":
            return vY.undefined;
          case "string":
            return vY.string;
          case "number":
            return isNaN(YY) ? vY.nan : vY.number;
          case "boolean":
            return vY.boolean;
          case "function":
            return vY.function;
          case "bigint":
            return vY.bigint;
          case "symbol":
            return vY.symbol;
          case "object":
            return Array.isArray(YY) ? vY.array : null === YY ? vY.null : YY.then && "function" === typeof YY.then && YY.catch && "function" === typeof YY.catch ? vY.promise : "undefined" !== typeof Map && YY instanceof Map ? vY.map : "undefined" !== typeof Set && YY instanceof Set ? vY.set : "undefined" !== typeof Date && YY instanceof Date ? vY.date : vY.object;
          default:
            return vY.unknown
        }
      },
      sY = OY.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class iY extends Error {
      constructor(YY) {
        var rY;
        super(), rY = this, this.issues = [], this.addIssue = YY => {
          this.issues = [...this.issues, YY]
        }, this.addIssues = function() {
          let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          rY.issues = [...rY.issues, ...YY]
        };
        const DY = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, DY) : this.__proto__ = DY, this.name = "ZodError", this.issues = YY
      }
      get errors() {
        return this.issues
      }
      format(YY) {
        const rY = YY || function(YY) {
            return YY.message
          },
          DY = {
            _errors: []
          },
          FY = YY => {
            for (const AY of YY.issues)
              if ("invalid_union" === AY.code) AY.unionErrors.map(FY);
              else if ("invalid_return_type" === AY.code) FY(AY.returnTypeError);
            else if ("invalid_arguments" === AY.code) FY(AY.argumentsError);
            else if (0 === AY.path.length) DY._errors.push(rY(AY));
            else {
              let YY = DY,
                FY = 0;
              for (; FY < AY.path.length;) {
                const DY = AY.path[FY];
                FY === AY.path.length - 1 ? (YY[DY] = YY[DY] || {
                  _errors: []
                }, YY[DY]._errors.push(rY(AY))) : YY[DY] = YY[DY] || {
                  _errors: []
                }, YY = YY[DY], FY++
              }
            }
          };
        return FY(this), DY
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, OY.jsonStringifyReplacer, 2)
      }
      get Ey() {
        return 0 === this.issues.length
      }
      flatten() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YY => YY.message;
        const rY = {},
          DY = [];
        for (const FY of this.issues) FY.path.length > 0 ? (rY[FY.path[0]] = rY[FY.path[0]] || [], rY[FY.path[0]].push(YY(FY))) : DY.push(YY(FY));
        return {
          formErrors: DY,
          fieldErrors: rY
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    iY.create = YY => new iY(YY);
    const yY = (YY, rY) => {
      let DY;
      switch (YY.code) {
        case sY.invalid_type:
          DY = YY.received === vY.undefined ? "Required" : `Expected ${YY.expected}, received ${YY.received}`;
          break;
        case sY.invalid_literal:
          DY = `Invalid literal value, expected ${JSON.stringify(YY.expected,OY.jsonStringifyReplacer)}`;
          break;
        case sY.unrecognized_keys:
          DY = `Unrecognized key(s) in object: ${OY.joinValues(YY.keys,", ")}`;
          break;
        case sY.invalid_union:
          DY = "Invalid input";
          break;
        case sY.invalid_union_discriminator:
          DY = `Invalid discriminator value. Expected ${OY.joinValues(YY.options)}`;
          break;
        case sY.invalid_enum_value:
          DY = `Invalid enum value. Expected ${OY.joinValues(YY.options)}, received '${YY.received}'`;
          break;
        case sY.invalid_arguments:
          DY = "Invalid function arguments";
          break;
        case sY.invalid_return_type:
          DY = "Invalid function return type";
          break;
        case sY.invalid_date:
          DY = "Invalid date";
          break;
        case sY.invalid_string:
          "object" === typeof YY.validation ? "includes" in YY.validation ? (DY = `Invalid input: must include "${YY.validation.includes}"`, "number" === typeof YY.validation.position && (DY = `${DY} at one or more positions greater than or equal to ${YY.validation.position}`)) : "startsWith" in YY.validation ? DY = `Invalid input: must start with "${YY.validation.startsWith}"` : "endsWith" in YY.validation ? DY = `Invalid input: must end with "${YY.validation.endsWith}"` : OY.assertNever(YY.validation) : DY = "regex" !== YY.validation ? `Invalid ${YY.validation}` : "Invalid";
          break;
        case sY.too_small:
          DY = "array" === YY.type ? `Array must contain ${YY.exact?"exactly":YY.inclusive?"at least":"more than"} ${YY.minimum} element(s)` : "string" === YY.type ? `String must contain ${YY.exact?"exactly":YY.inclusive?"at least":"over"} ${YY.minimum} character(s)` : "number" === YY.type ? `Number must be ${YY.exact?"exactly equal to ":YY.inclusive?"greater than or equal to ":"greater than "}${YY.minimum}` : "date" === YY.type ? `Date must be ${YY.exact?"exactly equal to ":YY.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(YY.minimum))}` : "Invalid input";
          break;
        case sY.too_big:
          DY = "array" === YY.type ? `Array must contain ${YY.exact?"exactly":YY.inclusive?"at most":"less than"} ${YY.maximum} element(s)` : "string" === YY.type ? `String must contain ${YY.exact?"exactly":YY.inclusive?"at most":"under"} ${YY.maximum} character(s)` : "number" === YY.type ? `Number must be ${YY.exact?"exactly":YY.inclusive?"less than or equal to":"less than"} ${YY.maximum}` : "bigint" === YY.type ? `BigInt must be ${YY.exact?"exactly":YY.inclusive?"less than or equal to":"less than"} ${YY.maximum}` : "date" === YY.type ? `Date must be ${YY.exact?"exactly":YY.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(YY.maximum))}` : "Invalid input";
          break;
        case sY.custom:
          DY = "Invalid input";
          break;
        case sY.invalid_intersection_types:
          DY = "Intersection results could not be merged";
          break;
        case sY.not_multiple_of:
          DY = `Number must be a multiple of ${YY.multipleOf}`;
          break;
        case sY.not_finite:
          DY = "Number must be finite";
          break;
        default:
          DY = rY.defaultError, OY.assertNever(YY)
      }
      return {
        message: DY
      }
    };
    let QY = yY;

    function oY() {
      return QY
    }
    const WY = YY => {
      const {
        data: rY,
        path: DY,
        errorMaps: FY,
        issueData: AY
      } = YY, IY = [...DY, ...AY.path || []], RY = {
        ...AY,
        path: IY
      };
      let OY = "";
      const gY = FY.filter((YY => !!YY)).slice().reverse();
      for (const aY of gY) OY = aY(RY, {
        data: rY,
        defaultError: OY
      }).message;
      return {
        ...AY,
        path: IY,
        message: AY.message || OY
      }
    };

    function EY(YY, rY) {
      const DY = WY({
        issueData: rY,
        data: YY.data,
        path: YY.path,
        errorMaps: [YY.common.contextualErrorMap, YY.schemaErrorMap, oY(), yY].filter((YY => !!YY))
      });
      YY.common.issues.push(DY)
    }
    class mY {
      constructor() {
        this.value = "valid"
      }
      ty() {
        "valid" === this.value && (this.value = "ty")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(YY, rY) {
        const DY = [];
        for (const FY of rY) {
          if ("aborted" === FY.status) return VY;
          "ty" === FY.status && YY.ty(), DY.push(FY.value)
        }
        return {
          status: YY.value,
          value: DY
        }
      }
      static async mergeObjectAsync(YY, rY) {
        const DY = [];
        for (const FY of rY) DY.push({
          key: await FY.key,
          value: await FY.value
        });
        return mY.mergeObjectSync(YY, DY)
      }
      static mergeObjectSync(YY, rY) {
        const DY = {};
        for (const FY of rY) {
          const {
            key: rY,
            value: AY
          } = FY;
          if ("aborted" === rY.status) return VY;
          if ("aborted" === AY.status) return VY;
          "ty" === rY.status && YY.ty(), "ty" === AY.status && YY.ty(), "__proto__" === rY.value || "undefined" === typeof AY.value && !FY.alwaysSet || (DY[rY.value] = AY.value)
        }
        return {
          status: YY.value,
          value: DY
        }
      }
    }
    const VY = Object.freeze({
        status: "aborted"
      }),
      SY = YY => ({
        status: "ty",
        value: YY
      }),
      lY = YY => ({
        status: "valid",
        value: YY
      }),
      TY = YY => "aborted" === YY.status,
      eY = YY => "ty" === YY.status,
      NY = YY => "valid" === YY.status,
      BY = YY => "undefined" !== typeof Promise && YY instanceof Promise;
    var cY;
    ! function(YY) {
      YY.errToObj = YY => "string" === typeof YY ? {
        message: YY
      } : YY || {}, YY.toString = YY => "string" === typeof YY ? YY : null === YY || void 0 === YY ? void 0 : YY.message
    }(cY || (cY = {}));
    class KY {
      constructor(YY, rY, DY, FY) {
        this._cachedPath = [], this.parent = YY, this.data = rY, this._path = DY, this._key = FY
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const HY = (YY, rY) => {
      if (NY(rY)) return {
        success: !0,
        data: rY.value
      };
      if (!YY.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const rY = new iY(YY.common.issues);
          return this._error = rY, this._error
        }
      }
    };

    function zY(YY) {
      if (!YY) return {};
      const {
        errorMap: rY,
        invalid_type_error: DY,
        required_error: FY,
        description: AY
      } = YY;
      if (rY && (DY || FY)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (rY) return {
        errorMap: rY,
        description: AY
      };
      return {
        errorMap: (YY, rY) => "invalid_type" !== YY.code ? {
          message: rY.defaultError
        } : "undefined" === typeof rY.data ? {
          message: null !== FY && void 0 !== FY ? FY : rY.defaultError
        } : {
          message: null !== DY && void 0 !== DY ? DY : rY.defaultError
        },
        description: AY
      }
    }
    class ZY {
      constructor(YY) {
        this.spa = this.safeParseAsync, this._def = YY, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(YY) {
        return uY(YY.data)
      }
      _getOrReturnCtx(YY, rY) {
        return rY || {
          common: YY.parent.common,
          data: YY.data,
          parsedType: uY(YY.data),
          schemaErrorMap: this._def.errorMap,
          path: YY.path,
          parent: YY.parent
        }
      }
      _processInputParams(YY) {
        return {
          status: new mY,
          ctx: {
            common: YY.parent.common,
            data: YY.data,
            parsedType: uY(YY.data),
            schemaErrorMap: this._def.errorMap,
            path: YY.path,
            parent: YY.parent
          }
        }
      }
      _parseSync(YY) {
        const rY = this._parse(YY);
        if (BY(rY)) throw new Error("Synchronous parse encountered promise.");
        return rY
      }
      _parseAsync(YY) {
        const rY = this._parse(YY);
        return Promise.resolve(rY)
      }
      parse(YY, rY) {
        const DY = this.safeParse(YY, rY);
        if (DY.success) return DY.data;
        throw DY.error
      }
      safeParse(YY, rY) {
        var DY;
        const FY = {
            common: {
              issues: [],
              async: null !== (DY = null === rY || void 0 === rY ? void 0 : rY.async) && void 0 !== DY && DY,
              contextualErrorMap: null === rY || void 0 === rY ? void 0 : rY.errorMap
            },
            path: (null === rY || void 0 === rY ? void 0 : rY.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: YY,
            parsedType: uY(YY)
          },
          AY = this._parseSync({
            data: YY,
            path: FY.path,
            parent: FY
          });
        return HY(FY, AY)
      }
      async parseAsync(YY, rY) {
        const DY = await this.safeParseAsync(YY, rY);
        if (DY.success) return DY.data;
        throw DY.error
      }
      async safeParseAsync(YY, rY) {
        const DY = {
            common: {
              issues: [],
              contextualErrorMap: null === rY || void 0 === rY ? void 0 : rY.errorMap,
              async: !0
            },
            path: (null === rY || void 0 === rY ? void 0 : rY.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: YY,
            parsedType: uY(YY)
          },
          FY = this._parse({
            data: YY,
            path: DY.path,
            parent: DY
          }),
          AY = await (BY(FY) ? FY : Promise.resolve(FY));
        return HY(DY, AY)
      }
      refine(YY, rY) {
        const DY = YY => "string" === typeof rY || "undefined" === typeof rY ? {
          message: rY
        } : "function" === typeof rY ? rY(YY) : rY;
        return this._refinement(((rY, FY) => {
          const AY = YY(rY),
            IY = () => FY.addIssue({
              code: sY.custom,
              ...DY(rY)
            });
          return "undefined" !== typeof Promise && AY instanceof Promise ? AY.then((YY => !!YY || (IY(), !1))) : !!AY || (IY(), !1)
        }))
      }
      refinement(YY, rY) {
        return this._refinement(((DY, FY) => !!YY(DY) || (FY.addIssue("function" === typeof rY ? rY(DY, FY) : rY), !1)))
      }
      _refinement(YY) {
        return new Vr({
          schema: this,
          typeName: Cr.ZodEffects,
          effect: {
            type: "refinement",
            refinement: YY
          }
        })
      }
      superRefine(YY) {
        return this._refinement(YY)
      }
      optional() {
        return Sr.create(this, this._def)
      }
      nullable() {
        return lr.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return rr.create(this, this._def)
      }
      promise() {
        return mr.create(this, this._def)
      }
      or(YY) {
        return Ar.create([this, YY], this._def)
      }
      and(YY) {
        return gr.create(this, YY, this._def)
      }
      transform(YY) {
        return new Vr({
          ...zY(this._def),
          schema: this,
          typeName: Cr.ZodEffects,
          effect: {
            type: "transform",
            transform: YY
          }
        })
      }
      default (YY) {
        const rY = "function" === typeof YY ? YY : () => YY;
        return new Tr({
          ...zY(this._def),
          innerType: this,
          defaultValue: rY,
          typeName: Cr.ZodDefault
        })
      }
      brand() {
        return new cr({
          typeName: Cr.ZodBranded,
          type: this,
          ...zY(this._def)
        })
      } catch (YY) {
        const rY = "function" === typeof YY ? YY : () => YY;
        return new er({
          ...zY(this._def),
          innerType: this,
          catchValue: rY,
          typeName: Cr.ZodCatch
        })
      }
      describe(YY) {
        return new(0, this.constructor)({
          ...this._def,
          description: YY
        })
      }
      pipe(YY) {
        return Kr.create(this, YY)
      }
      readonly() {
        return Hr.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const CY = /^c[^\s-]{8,}$/i,
      fY = /^[a-z][a-z0-9]*$/,
      jY = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      hY = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      dY = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let JY;
    const MY = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      wY = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class bY extends ZY {
      _parse(YY) {
        this._def.coerce && (YY.data = String(YY.data));
        if (this._getType(YY) !== vY.string) {
          const rY = this._getOrReturnCtx(YY);
          return EY(rY, {
            code: sY.invalid_type,
            expected: vY.string,
            received: rY.parsedType
          }), VY
        }
        const rY = new mY;
        let DY;
        for (const gY of this._def.checks)
          if ("min" === gY.kind) YY.data.length < gY.value && (DY = this._getOrReturnCtx(YY, DY), EY(DY, {
            code: sY.too_small,
            minimum: gY.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: gY.message
          }), rY.ty());
          else if ("max" === gY.kind) YY.data.length > gY.value && (DY = this._getOrReturnCtx(YY, DY), EY(DY, {
          code: sY.too_big,
          maximum: gY.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: gY.message
        }), rY.ty());
        else if ("length" === gY.kind) {
          const FY = YY.data.length > gY.value,
            AY = YY.data.length < gY.value;
          (FY || AY) && (DY = this._getOrReturnCtx(YY, DY), FY ? EY(DY, {
            code: sY.too_big,
            maximum: gY.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: gY.message
          }) : AY && EY(DY, {
            code: sY.too_small,
            minimum: gY.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: gY.message
          }), rY.ty())
        } else if ("email" === gY.kind) dY.test(YY.data) || (DY = this._getOrReturnCtx(YY, DY), EY(DY, {
          validation: "email",
          code: sY.invalid_string,
          message: gY.message
        }), rY.ty());
        else if ("emoji" === gY.kind) JY || (JY = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), JY.test(YY.data) || (DY = this._getOrReturnCtx(YY, DY), EY(DY, {
          validation: "emoji",
          code: sY.invalid_string,
          message: gY.message
        }), rY.ty());
        else if ("uuid" === gY.kind) hY.test(YY.data) || (DY = this._getOrReturnCtx(YY, DY), EY(DY, {
          validation: "uuid",
          code: sY.invalid_string,
          message: gY.message
        }), rY.ty());
        else if ("cuid" === gY.kind) CY.test(YY.data) || (DY = this._getOrReturnCtx(YY, DY), EY(DY, {
          validation: "cuid",
          code: sY.invalid_string,
          message: gY.message
        }), rY.ty());
        else if ("cuid2" === gY.kind) fY.test(YY.data) || (DY = this._getOrReturnCtx(YY, DY), EY(DY, {
          validation: "cuid2",
          code: sY.invalid_string,
          message: gY.message
        }), rY.ty());
        else if ("ulid" === gY.kind) jY.test(YY.data) || (DY = this._getOrReturnCtx(YY, DY), EY(DY, {
          validation: "ulid",
          code: sY.invalid_string,
          message: gY.message
        }), rY.ty());
        else if ("url" === gY.kind) try {
          new URL(YY.data)
        } catch (RY) {
          DY = this._getOrReturnCtx(YY, DY), EY(DY, {
            validation: "url",
            code: sY.invalid_string,
            message: gY.message
          }), rY.ty()
        } else if ("regex" === gY.kind) {
          gY.regex.lastIndex = 0;
          gY.regex.test(YY.data) || (DY = this._getOrReturnCtx(YY, DY), EY(DY, {
            validation: "regex",
            code: sY.invalid_string,
            message: gY.message
          }), rY.ty())
        } else if ("trim" === gY.kind) YY.data = YY.data.trim();
        else if ("includes" === gY.kind) YY.data.includes(gY.value, gY.position) || (DY = this._getOrReturnCtx(YY, DY), EY(DY, {
          code: sY.invalid_string,
          validation: {
            includes: gY.value,
            position: gY.position
          },
          message: gY.message
        }), rY.ty());
        else if ("toLowerCase" === gY.kind) YY.data = YY.data.toLowerCase();
        else if ("toUpperCase" === gY.kind) YY.data = YY.data.toUpperCase();
        else if ("startsWith" === gY.kind) YY.data.startsWith(gY.value) || (DY = this._getOrReturnCtx(YY, DY), EY(DY, {
          code: sY.invalid_string,
          validation: {
            startsWith: gY.value
          },
          message: gY.message
        }), rY.ty());
        else if ("endsWith" === gY.kind) YY.data.endsWith(gY.value) || (DY = this._getOrReturnCtx(YY, DY), EY(DY, {
          code: sY.invalid_string,
          validation: {
            endsWith: gY.value
          },
          message: gY.message
        }), rY.ty());
        else if ("datetime" === gY.kind) {
          ((IY = gY).precision ? IY.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${IY.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${IY.precision}}Z$`) : 0 === IY.precision ? IY.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : IY.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(YY.data) || (DY = this._getOrReturnCtx(YY, DY), EY(DY, {
            code: sY.invalid_string,
            validation: "datetime",
            message: gY.message
          }), rY.ty())
        } else "ip" === gY.kind ? (FY = YY.data, ("v4" !== (AY = gY.version) && AY || !MY.test(FY)) && ("v6" !== AY && AY || !wY.test(FY)) && (DY = this._getOrReturnCtx(YY, DY), EY(DY, {
          validation: "ip",
          code: sY.invalid_string,
          message: gY.message
        }), rY.ty())) : OY.assertNever(gY);
        var FY, AY, IY;
        return {
          status: rY.value,
          value: YY.data
        }
      }
      _regex(YY, rY, DY) {
        return this.refinement((rY => YY.test(rY)), {
          validation: rY,
          code: sY.invalid_string,
          ...cY.errToObj(DY)
        })
      }
      _addCheck(YY) {
        return new bY({
          ...this._def,
          checks: [...this._def.checks, YY]
        })
      }
      email(YY) {
        return this._addCheck({
          kind: "email",
          ...cY.errToObj(YY)
        })
      }
      url(YY) {
        return this._addCheck({
          kind: "url",
          ...cY.errToObj(YY)
        })
      }
      emoji(YY) {
        return this._addCheck({
          kind: "emoji",
          ...cY.errToObj(YY)
        })
      }
      uuid(YY) {
        return this._addCheck({
          kind: "uuid",
          ...cY.errToObj(YY)
        })
      }
      cuid(YY) {
        return this._addCheck({
          kind: "cuid",
          ...cY.errToObj(YY)
        })
      }
      cuid2(YY) {
        return this._addCheck({
          kind: "cuid2",
          ...cY.errToObj(YY)
        })
      }
      ulid(YY) {
        return this._addCheck({
          kind: "ulid",
          ...cY.errToObj(YY)
        })
      }
      ip(YY) {
        return this._addCheck({
          kind: "ip",
          ...cY.errToObj(YY)
        })
      }
      datetime(YY) {
        var rY;
        return "string" === typeof YY ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: YY
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === YY || void 0 === YY ? void 0 : YY.precision) ? null : null === YY || void 0 === YY ? void 0 : YY.precision,
          offset: null !== (rY = null === YY || void 0 === YY ? void 0 : YY.offset) && void 0 !== rY && rY,
          ...cY.errToObj(null === YY || void 0 === YY ? void 0 : YY.message)
        })
      }
      regex(YY, rY) {
        return this._addCheck({
          kind: "regex",
          regex: YY,
          ...cY.errToObj(rY)
        })
      }
      includes(YY, rY) {
        return this._addCheck({
          kind: "includes",
          value: YY,
          position: null === rY || void 0 === rY ? void 0 : rY.position,
          ...cY.errToObj(null === rY || void 0 === rY ? void 0 : rY.message)
        })
      }
      startsWith(YY, rY) {
        return this._addCheck({
          kind: "startsWith",
          value: YY,
          ...cY.errToObj(rY)
        })
      }
      endsWith(YY, rY) {
        return this._addCheck({
          kind: "endsWith",
          value: YY,
          ...cY.errToObj(rY)
        })
      }
      min(YY, rY) {
        return this._addCheck({
          kind: "min",
          value: YY,
          ...cY.errToObj(rY)
        })
      }
      max(YY, rY) {
        return this._addCheck({
          kind: "max",
          value: YY,
          ...cY.errToObj(rY)
        })
      }
      length(YY, rY) {
        return this._addCheck({
          kind: "length",
          value: YY,
          ...cY.errToObj(rY)
        })
      }
      nonempty(YY) {
        return this.min(1, cY.errToObj(YY))
      }
      trim() {
        return new bY({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new bY({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new bY({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((YY => "datetime" === YY.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((YY => "email" === YY.kind))
      }
      get isURL() {
        return !!this._def.checks.find((YY => "url" === YY.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((YY => "emoji" === YY.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((YY => "uuid" === YY.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((YY => "cuid" === YY.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((YY => "cuid2" === YY.kind))
      }
      get isULID() {
        return !!this._def.checks.find((YY => "ulid" === YY.kind))
      }
      get isIP() {
        return !!this._def.checks.find((YY => "ip" === YY.kind))
      }
      get minLength() {
        let YY = null;
        for (const rY of this._def.checks) "min" === rY.kind && (null === YY || rY.value > YY) && (YY = rY.value);
        return YY
      }
      get maxLength() {
        let YY = null;
        for (const rY of this._def.checks) "max" === rY.kind && (null === YY || rY.value < YY) && (YY = rY.value);
        return YY
      }
    }

    function XY(YY, rY) {
      const DY = (YY.toString().split(".")[1] || "").length,
        FY = (rY.toString().split(".")[1] || "").length,
        AY = DY > FY ? DY : FY;
      return parseInt(YY.toFixed(AY).replace(".", "")) % parseInt(rY.toFixed(AY).replace(".", "")) / Math.pow(10, AY)
    }
    bY.create = YY => {
      var rY;
      return new bY({
        checks: [],
        typeName: Cr.ZodString,
        coerce: null !== (rY = null === YY || void 0 === YY ? void 0 : YY.coerce) && void 0 !== rY && rY,
        ...zY(YY)
      })
    };
    class qY extends ZY {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(YY) {
        this._def.coerce && (YY.data = Number(YY.data));
        if (this._getType(YY) !== vY.number) {
          const rY = this._getOrReturnCtx(YY);
          return EY(rY, {
            code: sY.invalid_type,
            expected: vY.number,
            received: rY.parsedType
          }), VY
        }
        let rY;
        const DY = new mY;
        for (const FY of this._def.checks)
          if ("int" === FY.kind) OY.isInteger(YY.data) || (rY = this._getOrReturnCtx(YY, rY), EY(rY, {
            code: sY.invalid_type,
            expected: "integer",
            received: "float",
            message: FY.message
          }), DY.ty());
          else if ("min" === FY.kind) {
          (FY.inclusive ? YY.data < FY.value : YY.data <= FY.value) && (rY = this._getOrReturnCtx(YY, rY), EY(rY, {
            code: sY.too_small,
            minimum: FY.value,
            type: "number",
            inclusive: FY.inclusive,
            exact: !1,
            message: FY.message
          }), DY.ty())
        } else if ("max" === FY.kind) {
          (FY.inclusive ? YY.data > FY.value : YY.data >= FY.value) && (rY = this._getOrReturnCtx(YY, rY), EY(rY, {
            code: sY.too_big,
            maximum: FY.value,
            type: "number",
            inclusive: FY.inclusive,
            exact: !1,
            message: FY.message
          }), DY.ty())
        } else "multipleOf" === FY.kind ? 0 !== XY(YY.data, FY.value) && (rY = this._getOrReturnCtx(YY, rY), EY(rY, {
          code: sY.not_multiple_of,
          multipleOf: FY.value,
          message: FY.message
        }), DY.ty()) : "finite" === FY.kind ? Number.isFinite(YY.data) || (rY = this._getOrReturnCtx(YY, rY), EY(rY, {
          code: sY.not_finite,
          message: FY.message
        }), DY.ty()) : OY.assertNever(FY);
        return {
          status: DY.value,
          value: YY.data
        }
      }
      gte(YY, rY) {
        return this.setLimit("min", YY, !0, cY.toString(rY))
      }
      gt(YY, rY) {
        return this.setLimit("min", YY, !1, cY.toString(rY))
      }
      lte(YY, rY) {
        return this.setLimit("max", YY, !0, cY.toString(rY))
      }
      lt(YY, rY) {
        return this.setLimit("max", YY, !1, cY.toString(rY))
      }
      setLimit(YY, rY, DY, FY) {
        return new qY({
          ...this._def,
          checks: [...this._def.checks, {
            kind: YY,
            value: rY,
            inclusive: DY,
            message: cY.toString(FY)
          }]
        })
      }
      _addCheck(YY) {
        return new qY({
          ...this._def,
          checks: [...this._def.checks, YY]
        })
      }
      int(YY) {
        return this._addCheck({
          kind: "int",
          message: cY.toString(YY)
        })
      }
      positive(YY) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: cY.toString(YY)
        })
      }
      negative(YY) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: cY.toString(YY)
        })
      }
      nonpositive(YY) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: cY.toString(YY)
        })
      }
      nonnegative(YY) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: cY.toString(YY)
        })
      }
      multipleOf(YY, rY) {
        return this._addCheck({
          kind: "multipleOf",
          value: YY,
          message: cY.toString(rY)
        })
      }
      finite(YY) {
        return this._addCheck({
          kind: "finite",
          message: cY.toString(YY)
        })
      }
      safe(YY) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: cY.toString(YY)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: cY.toString(YY)
        })
      }
      get minValue() {
        let YY = null;
        for (const rY of this._def.checks) "min" === rY.kind && (null === YY || rY.value > YY) && (YY = rY.value);
        return YY
      }
      get maxValue() {
        let YY = null;
        for (const rY of this._def.checks) "max" === rY.kind && (null === YY || rY.value < YY) && (YY = rY.value);
        return YY
      }
      get isInt() {
        return !!this._def.checks.find((YY => "int" === YY.kind || "multipleOf" === YY.kind && OY.isInteger(YY.value)))
      }
      get isFinite() {
        let YY = null,
          rY = null;
        for (const DY of this._def.checks) {
          if ("finite" === DY.kind || "int" === DY.kind || "multipleOf" === DY.kind) return !0;
          "min" === DY.kind ? (null === rY || DY.value > rY) && (rY = DY.value) : "max" === DY.kind && (null === YY || DY.value < YY) && (YY = DY.value)
        }
        return Number.isFinite(rY) && Number.isFinite(YY)
      }
    }
    qY.create = YY => new qY({
      checks: [],
      typeName: Cr.ZodNumber,
      coerce: (null === YY || void 0 === YY ? void 0 : YY.coerce) || !1,
      ...zY(YY)
    });
    class pY extends ZY {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(YY) {
        this._def.coerce && (YY.data = BigInt(YY.data));
        if (this._getType(YY) !== vY.bigint) {
          const rY = this._getOrReturnCtx(YY);
          return EY(rY, {
            code: sY.invalid_type,
            expected: vY.bigint,
            received: rY.parsedType
          }), VY
        }
        let rY;
        const DY = new mY;
        for (const FY of this._def.checks)
          if ("min" === FY.kind) {
            (FY.inclusive ? YY.data < FY.value : YY.data <= FY.value) && (rY = this._getOrReturnCtx(YY, rY), EY(rY, {
              code: sY.too_small,
              type: "bigint",
              minimum: FY.value,
              inclusive: FY.inclusive,
              message: FY.message
            }), DY.ty())
          } else if ("max" === FY.kind) {
          (FY.inclusive ? YY.data > FY.value : YY.data >= FY.value) && (rY = this._getOrReturnCtx(YY, rY), EY(rY, {
            code: sY.too_big,
            type: "bigint",
            maximum: FY.value,
            inclusive: FY.inclusive,
            message: FY.message
          }), DY.ty())
        } else "multipleOf" === FY.kind ? YY.data % FY.value !== BigInt(0) && (rY = this._getOrReturnCtx(YY, rY), EY(rY, {
          code: sY.not_multiple_of,
          multipleOf: FY.value,
          message: FY.message
        }), DY.ty()) : OY.assertNever(FY);
        return {
          status: DY.value,
          value: YY.data
        }
      }
      gte(YY, rY) {
        return this.setLimit("min", YY, !0, cY.toString(rY))
      }
      gt(YY, rY) {
        return this.setLimit("min", YY, !1, cY.toString(rY))
      }
      lte(YY, rY) {
        return this.setLimit("max", YY, !0, cY.toString(rY))
      }
      lt(YY, rY) {
        return this.setLimit("max", YY, !1, cY.toString(rY))
      }
      setLimit(YY, rY, DY, FY) {
        return new pY({
          ...this._def,
          checks: [...this._def.checks, {
            kind: YY,
            value: rY,
            inclusive: DY,
            message: cY.toString(FY)
          }]
        })
      }
      _addCheck(YY) {
        return new pY({
          ...this._def,
          checks: [...this._def.checks, YY]
        })
      }
      positive(YY) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: cY.toString(YY)
        })
      }
      negative(YY) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: cY.toString(YY)
        })
      }
      nonpositive(YY) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: cY.toString(YY)
        })
      }
      nonnegative(YY) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: cY.toString(YY)
        })
      }
      multipleOf(YY, rY) {
        return this._addCheck({
          kind: "multipleOf",
          value: YY,
          message: cY.toString(rY)
        })
      }
      get minValue() {
        let YY = null;
        for (const rY of this._def.checks) "min" === rY.kind && (null === YY || rY.value > YY) && (YY = rY.value);
        return YY
      }
      get maxValue() {
        let YY = null;
        for (const rY of this._def.checks) "max" === rY.kind && (null === YY || rY.value < YY) && (YY = rY.value);
        return YY
      }
    }
    pY.create = YY => {
      var rY;
      return new pY({
        checks: [],
        typeName: Cr.ZodBigInt,
        coerce: null !== (rY = null === YY || void 0 === YY ? void 0 : YY.coerce) && void 0 !== rY && rY,
        ...zY(YY)
      })
    };
    class kY extends ZY {
      _parse(YY) {
        this._def.coerce && (YY.data = Boolean(YY.data));
        if (this._getType(YY) !== vY.boolean) {
          const rY = this._getOrReturnCtx(YY);
          return EY(rY, {
            code: sY.invalid_type,
            expected: vY.boolean,
            received: rY.parsedType
          }), VY
        }
        return lY(YY.data)
      }
    }
    kY.create = YY => new kY({
      typeName: Cr.ZodBoolean,
      coerce: (null === YY || void 0 === YY ? void 0 : YY.coerce) || !1,
      ...zY(YY)
    });
    class GY extends ZY {
      _parse(YY) {
        this._def.coerce && (YY.data = new Date(YY.data));
        if (this._getType(YY) !== vY.date) {
          const rY = this._getOrReturnCtx(YY);
          return EY(rY, {
            code: sY.invalid_type,
            expected: vY.date,
            received: rY.parsedType
          }), VY
        }
        if (isNaN(YY.data.getTime())) {
          return EY(this._getOrReturnCtx(YY), {
            code: sY.invalid_date
          }), VY
        }
        const rY = new mY;
        let DY;
        for (const FY of this._def.checks) "min" === FY.kind ? YY.data.getTime() < FY.value && (DY = this._getOrReturnCtx(YY, DY), EY(DY, {
          code: sY.too_small,
          message: FY.message,
          inclusive: !0,
          exact: !1,
          minimum: FY.value,
          type: "date"
        }), rY.ty()) : "max" === FY.kind ? YY.data.getTime() > FY.value && (DY = this._getOrReturnCtx(YY, DY), EY(DY, {
          code: sY.too_big,
          message: FY.message,
          inclusive: !0,
          exact: !1,
          maximum: FY.value,
          type: "date"
        }), rY.ty()) : OY.assertNever(FY);
        return {
          status: rY.value,
          value: new Date(YY.data.getTime())
        }
      }
      _addCheck(YY) {
        return new GY({
          ...this._def,
          checks: [...this._def.checks, YY]
        })
      }
      min(YY, rY) {
        return this._addCheck({
          kind: "min",
          value: YY.getTime(),
          message: cY.toString(rY)
        })
      }
      max(YY, rY) {
        return this._addCheck({
          kind: "max",
          value: YY.getTime(),
          message: cY.toString(rY)
        })
      }
      get minDate() {
        let YY = null;
        for (const rY of this._def.checks) "min" === rY.kind && (null === YY || rY.value > YY) && (YY = rY.value);
        return null != YY ? new Date(YY) : null
      }
      get maxDate() {
        let YY = null;
        for (const rY of this._def.checks) "max" === rY.kind && (null === YY || rY.value < YY) && (YY = rY.value);
        return null != YY ? new Date(YY) : null
      }
    }
    GY.create = YY => new GY({
      checks: [],
      coerce: (null === YY || void 0 === YY ? void 0 : YY.coerce) || !1,
      typeName: Cr.ZodDate,
      ...zY(YY)
    });
    class xY extends ZY {
      _parse(YY) {
        if (this._getType(YY) !== vY.symbol) {
          const rY = this._getOrReturnCtx(YY);
          return EY(rY, {
            code: sY.invalid_type,
            expected: vY.symbol,
            received: rY.parsedType
          }), VY
        }
        return lY(YY.data)
      }
    }
    xY.create = YY => new xY({
      typeName: Cr.ZodSymbol,
      ...zY(YY)
    });
    class nY extends ZY {
      _parse(YY) {
        if (this._getType(YY) !== vY.undefined) {
          const rY = this._getOrReturnCtx(YY);
          return EY(rY, {
            code: sY.invalid_type,
            expected: vY.undefined,
            received: rY.parsedType
          }), VY
        }
        return lY(YY.data)
      }
    }
    nY.create = YY => new nY({
      typeName: Cr.ZodUndefined,
      ...zY(YY)
    });
    class PY extends ZY {
      _parse(YY) {
        if (this._getType(YY) !== vY.null) {
          const rY = this._getOrReturnCtx(YY);
          return EY(rY, {
            code: sY.invalid_type,
            expected: vY.null,
            received: rY.parsedType
          }), VY
        }
        return lY(YY.data)
      }
    }
    PY.create = YY => new PY({
      typeName: Cr.ZodNull,
      ...zY(YY)
    });
    class UY extends ZY {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(YY) {
        return lY(YY.data)
      }
    }
    UY.create = YY => new UY({
      typeName: Cr.ZodAny,
      ...zY(YY)
    });
    class LY extends ZY {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(YY) {
        return lY(YY.data)
      }
    }
    LY.create = YY => new LY({
      typeName: Cr.ZodUnknown,
      ...zY(YY)
    });
    class tY extends ZY {
      _parse(YY) {
        const rY = this._getOrReturnCtx(YY);
        return EY(rY, {
          code: sY.invalid_type,
          expected: vY.never,
          received: rY.parsedType
        }), VY
      }
    }
    tY.create = YY => new tY({
      typeName: Cr.ZodNever,
      ...zY(YY)
    });
    class Yr extends ZY {
      _parse(YY) {
        if (this._getType(YY) !== vY.undefined) {
          const rY = this._getOrReturnCtx(YY);
          return EY(rY, {
            code: sY.invalid_type,
            expected: vY.void,
            received: rY.parsedType
          }), VY
        }
        return lY(YY.data)
      }
    }
    Yr.create = YY => new Yr({
      typeName: Cr.ZodVoid,
      ...zY(YY)
    });
    class rr extends ZY {
      _parse(YY) {
        const {
          ctx: rY,
          status: DY
        } = this._processInputParams(YY), FY = this._def;
        if (rY.parsedType !== vY.array) return EY(rY, {
          code: sY.invalid_type,
          expected: vY.array,
          received: rY.parsedType
        }), VY;
        if (null !== FY.exactLength) {
          const YY = rY.data.length > FY.exactLength.value,
            AY = rY.data.length < FY.exactLength.value;
          (YY || AY) && (EY(rY, {
            code: YY ? sY.too_big : sY.too_small,
            minimum: AY ? FY.exactLength.value : void 0,
            maximum: YY ? FY.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: FY.exactLength.message
          }), DY.ty())
        }
        if (null !== FY.minLength && rY.data.length < FY.minLength.value && (EY(rY, {
            code: sY.too_small,
            minimum: FY.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: FY.minLength.message
          }), DY.ty()), null !== FY.maxLength && rY.data.length > FY.maxLength.value && (EY(rY, {
            code: sY.too_big,
            maximum: FY.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: FY.maxLength.message
          }), DY.ty()), rY.common.async) return Promise.all([...rY.data].map(((YY, DY) => FY.type._parseAsync(new KY(rY, YY, rY.path, DY))))).then((YY => mY.mergeArray(DY, YY)));
        const AY = [...rY.data].map(((YY, DY) => FY.type._parseSync(new KY(rY, YY, rY.path, DY))));
        return mY.mergeArray(DY, AY)
      }
      get element() {
        return this._def.type
      }
      min(YY, rY) {
        return new rr({
          ...this._def,
          minLength: {
            value: YY,
            message: cY.toString(rY)
          }
        })
      }
      max(YY, rY) {
        return new rr({
          ...this._def,
          maxLength: {
            value: YY,
            message: cY.toString(rY)
          }
        })
      }
      length(YY, rY) {
        return new rr({
          ...this._def,
          exactLength: {
            value: YY,
            message: cY.toString(rY)
          }
        })
      }
      nonempty(YY) {
        return this.min(1, YY)
      }
    }

    function Dr(YY) {
      if (YY instanceof Fr) {
        const rY = {};
        for (const DY in YY.shape) {
          const FY = YY.shape[DY];
          rY[DY] = Sr.create(Dr(FY))
        }
        return new Fr({
          ...YY._def,
          shape: () => rY
        })
      }
      return YY instanceof rr ? new rr({
        ...YY._def,
        type: Dr(YY.element)
      }) : YY instanceof Sr ? Sr.create(Dr(YY.unwrap())) : YY instanceof lr ? lr.create(Dr(YY.unwrap())) : YY instanceof ar ? ar.create(YY.items.map((YY => Dr(YY)))) : YY
    }
    rr.create = (YY, rY) => new rr({
      type: YY,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: Cr.ZodArray,
      ...zY(rY)
    });
    class Fr extends ZY {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const YY = this._def.shape(),
          rY = OY.objectKeys(YY);
        return this._cached = {
          shape: YY,
          keys: rY
        }
      }
      _parse(YY) {
        if (this._getType(YY) !== vY.object) {
          const rY = this._getOrReturnCtx(YY);
          return EY(rY, {
            code: sY.invalid_type,
            expected: vY.object,
            received: rY.parsedType
          }), VY
        }
        const {
          status: rY,
          ctx: DY
        } = this._processInputParams(YY), {
          shape: FY,
          keys: AY
        } = this._getCached(), IY = [];
        if (!(this._def.catchall instanceof tY && "strip" === this._def.unknownKeys))
          for (const OY in DY.data) AY.includes(OY) || IY.push(OY);
        const RY = [];
        for (const OY of AY) {
          const YY = FY[OY],
            rY = DY.data[OY];
          RY.push({
            key: {
              status: "valid",
              value: OY
            },
            value: YY._parse(new KY(DY, rY, DY.path, OY)),
            alwaysSet: OY in DY.data
          })
        }
        if (this._def.catchall instanceof tY) {
          const YY = this._def.unknownKeys;
          if ("passthrough" === YY)
            for (const rY of IY) RY.push({
              key: {
                status: "valid",
                value: rY
              },
              value: {
                status: "valid",
                value: DY.data[rY]
              }
            });
          else if ("strict" === YY) IY.length > 0 && (EY(DY, {
            code: sY.unrecognized_keys,
            keys: IY
          }), rY.ty());
          else if ("strip" !== YY) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const YY = this._def.catchall;
          for (const rY of IY) {
            const FY = DY.data[rY];
            RY.push({
              key: {
                status: "valid",
                value: rY
              },
              value: YY._parse(new KY(DY, FY, DY.path, rY)),
              alwaysSet: rY in DY.data
            })
          }
        }
        return DY.common.async ? Promise.resolve().then((async () => {
          const YY = [];
          for (const rY of RY) {
            const DY = await rY.key;
            YY.push({
              key: DY,
              value: await rY.value,
              alwaysSet: rY.alwaysSet
            })
          }
          return YY
        })).then((YY => mY.mergeObjectSync(rY, YY))) : mY.mergeObjectSync(rY, RY)
      }
      get shape() {
        return this._def.shape()
      }
      strict(YY) {
        return cY.errToObj, new Fr({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== YY ? {
            errorMap: (rY, DY) => {
              var FY, AY, IY, RY;
              const OY = null !== (IY = null === (AY = (FY = this._def).errorMap) || void 0 === AY ? void 0 : AY.call(FY, rY, DY).message) && void 0 !== IY ? IY : DY.defaultError;
              return "unrecognized_keys" === rY.code ? {
                message: null !== (RY = cY.errToObj(YY).message) && void 0 !== RY ? RY : OY
              } : {
                message: OY
              }
            }
          } : {}
        })
      }
      strip() {
        return new Fr({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new Fr({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(YY) {
        return new Fr({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...YY
          })
        })
      }
      merge(YY) {
        return new Fr({
          unknownKeys: YY._def.unknownKeys,
          catchall: YY._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...YY._def.shape()
          }),
          typeName: Cr.ZodObject
        })
      }
      setKey(YY, rY) {
        return this.augment({
          [YY]: rY
        })
      }
      catchall(YY) {
        return new Fr({
          ...this._def,
          catchall: YY
        })
      }
      Ps(YY) {
        const rY = {};
        return OY.objectKeys(YY).forEach((DY => {
          YY[DY] && this.shape[DY] && (rY[DY] = this.shape[DY])
        })), new Fr({
          ...this._def,
          shape: () => rY
        })
      }
      omit(YY) {
        const rY = {};
        return OY.objectKeys(this.shape).forEach((DY => {
          YY[DY] || (rY[DY] = this.shape[DY])
        })), new Fr({
          ...this._def,
          shape: () => rY
        })
      }
      deepPartial() {
        return Dr(this)
      }
      partial(YY) {
        const rY = {};
        return OY.objectKeys(this.shape).forEach((DY => {
          const FY = this.shape[DY];
          YY && !YY[DY] ? rY[DY] = FY : rY[DY] = FY.optional()
        })), new Fr({
          ...this._def,
          shape: () => rY
        })
      }
      required(YY) {
        const rY = {};
        return OY.objectKeys(this.shape).forEach((DY => {
          if (YY && !YY[DY]) rY[DY] = this.shape[DY];
          else {
            let YY = this.shape[DY];
            for (; YY instanceof Sr;) YY = YY._def.innerType;
            rY[DY] = YY
          }
        })), new Fr({
          ...this._def,
          shape: () => rY
        })
      }
      keyof() {
        return or(OY.objectKeys(this.shape))
      }
    }
    Fr.create = (YY, rY) => new Fr({
      shape: () => YY,
      unknownKeys: "strip",
      catchall: tY.create(),
      typeName: Cr.ZodObject,
      ...zY(rY)
    }), Fr.strictCreate = (YY, rY) => new Fr({
      shape: () => YY,
      unknownKeys: "strict",
      catchall: tY.create(),
      typeName: Cr.ZodObject,
      ...zY(rY)
    }), Fr.lazycreate = (YY, rY) => new Fr({
      shape: YY,
      unknownKeys: "strip",
      catchall: tY.create(),
      typeName: Cr.ZodObject,
      ...zY(rY)
    });
    class Ar extends ZY {
      _parse(YY) {
        const {
          ctx: rY
        } = this._processInputParams(YY), DY = this._def.options;
        if (rY.common.async) return Promise.all(DY.map((async YY => {
          const DY = {
            ...rY,
            common: {
              ...rY.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await YY._parseAsync({
              data: rY.data,
              path: rY.path,
              parent: DY
            }),
            ctx: DY
          }
        }))).then((function(YY) {
          for (const rY of YY)
            if ("valid" === rY.result.status) return rY.result;
          for (const FY of YY)
            if ("ty" === FY.result.status) return rY.common.issues.push(...FY.ctx.common.issues), FY.result;
          const DY = YY.map((YY => new iY(YY.ctx.common.issues)));
          return EY(rY, {
            code: sY.invalid_union,
            unionErrors: DY
          }), VY
        }));
        {
          let YY;
          const FY = [];
          for (const IY of DY) {
            const DY = {
                ...rY,
                common: {
                  ...rY.common,
                  issues: []
                },
                parent: null
              },
              AY = IY._parseSync({
                data: rY.data,
                path: rY.path,
                parent: DY
              });
            if ("valid" === AY.status) return AY;
            "ty" !== AY.status || YY || (YY = {
              result: AY,
              ctx: DY
            }), DY.common.issues.length && FY.push(DY.common.issues)
          }
          if (YY) return rY.common.issues.push(...YY.ctx.common.issues), YY.result;
          const AY = FY.map((YY => new iY(YY)));
          return EY(rY, {
            code: sY.invalid_union,
            unionErrors: AY
          }), VY
        }
      }
      get options() {
        return this._def.options
      }
    }
    Ar.create = (YY, rY) => new Ar({
      options: YY,
      typeName: Cr.ZodUnion,
      ...zY(rY)
    });
    const Ir = YY => YY instanceof yr ? Ir(YY.schema) : YY instanceof Vr ? Ir(YY.innerType()) : YY instanceof Qr ? [YY.value] : YY instanceof Wr ? YY.options : YY instanceof Er ? Object.keys(YY.enum) : YY instanceof Tr ? Ir(YY._def.innerType) : YY instanceof nY ? [void 0] : YY instanceof PY ? [null] : null;
    class Rr extends ZY {
      _parse(YY) {
        const {
          ctx: rY
        } = this._processInputParams(YY);
        if (rY.parsedType !== vY.object) return EY(rY, {
          code: sY.invalid_type,
          expected: vY.object,
          received: rY.parsedType
        }), VY;
        const DY = this.discriminator,
          FY = rY.data[DY],
          AY = this.optionsMap.get(FY);
        return AY ? rY.common.async ? AY._parseAsync({
          data: rY.data,
          path: rY.path,
          parent: rY
        }) : AY._parseSync({
          data: rY.data,
          path: rY.path,
          parent: rY
        }) : (EY(rY, {
          code: sY.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [DY]
        }), VY)
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
      static create(YY, rY, DY) {
        const FY = new Map;
        for (const AY of rY) {
          const rY = Ir(AY.shape[YY]);
          if (!rY) throw new Error(`A discriminator value for key \`${YY}\` could not be extracted from all schema options`);
          for (const DY of rY) {
            if (FY.has(DY)) throw new Error(`Discriminator property ${String(YY)} has duplicate value ${String(DY)}`);
            FY.set(DY, AY)
          }
        }
        return new Rr({
          typeName: Cr.ZodDiscriminatedUnion,
          discriminator: YY,
          options: rY,
          optionsMap: FY,
          ...zY(DY)
        })
      }
    }

    function Or(YY, rY) {
      const DY = uY(YY),
        FY = uY(rY);
      if (YY === rY) return {
        valid: !0,
        data: YY
      };
      if (DY === vY.object && FY === vY.object) {
        const DY = OY.objectKeys(rY),
          FY = OY.objectKeys(YY).filter((YY => -1 !== DY.indexOf(YY))),
          AY = {
            ...YY,
            ...rY
          };
        for (const IY of FY) {
          const DY = Or(YY[IY], rY[IY]);
          if (!DY.valid) return {
            valid: !1
          };
          AY[IY] = DY.data
        }
        return {
          valid: !0,
          data: AY
        }
      }
      if (DY === vY.array && FY === vY.array) {
        if (YY.length !== rY.length) return {
          valid: !1
        };
        const DY = [];
        for (let FY = 0; FY < YY.length; FY++) {
          const AY = Or(YY[FY], rY[FY]);
          if (!AY.valid) return {
            valid: !1
          };
          DY.push(AY.data)
        }
        return {
          valid: !0,
          data: DY
        }
      }
      return DY === vY.date && FY === vY.date && +YY === +rY ? {
        valid: !0,
        data: YY
      } : {
        valid: !1
      }
    }
    class gr extends ZY {
      _parse(YY) {
        const {
          status: rY,
          ctx: DY
        } = this._processInputParams(YY), FY = (YY, FY) => {
          if (TY(YY) || TY(FY)) return VY;
          const AY = Or(YY.value, FY.value);
          return AY.valid ? ((eY(YY) || eY(FY)) && rY.ty(), {
            status: rY.value,
            value: AY.data
          }) : (EY(DY, {
            code: sY.invalid_intersection_types
          }), VY)
        };
        return DY.common.async ? Promise.all([this._def.left._parseAsync({
          data: DY.data,
          path: DY.path,
          parent: DY
        }), this._def.right._parseAsync({
          data: DY.data,
          path: DY.path,
          parent: DY
        })]).then((YY => {
          let [rY, DY] = YY;
          return FY(rY, DY)
        })) : FY(this._def.left._parseSync({
          data: DY.data,
          path: DY.path,
          parent: DY
        }), this._def.right._parseSync({
          data: DY.data,
          path: DY.path,
          parent: DY
        }))
      }
    }
    gr.create = (YY, rY, DY) => new gr({
      left: YY,
      right: rY,
      typeName: Cr.ZodIntersection,
      ...zY(DY)
    });
    class ar extends ZY {
      _parse(YY) {
        const {
          status: rY,
          ctx: DY
        } = this._processInputParams(YY);
        if (DY.parsedType !== vY.array) return EY(DY, {
          code: sY.invalid_type,
          expected: vY.array,
          received: DY.parsedType
        }), VY;
        if (DY.data.length < this._def.items.length) return EY(DY, {
          code: sY.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), VY;
        !this._def.rest && DY.data.length > this._def.items.length && (EY(DY, {
          code: sY.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), rY.ty());
        const FY = [...DY.data].map(((YY, rY) => {
          const FY = this._def.items[rY] || this._def.rest;
          return FY ? FY._parse(new KY(DY, YY, DY.path, rY)) : null
        })).filter((YY => !!YY));
        return DY.common.async ? Promise.all(FY).then((YY => mY.mergeArray(rY, YY))) : mY.mergeArray(rY, FY)
      }
      get items() {
        return this._def.items
      }
      rest(YY) {
        return new ar({
          ...this._def,
          rest: YY
        })
      }
    }
    ar.create = (YY, rY) => {
      if (!Array.isArray(YY)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new ar({
        items: YY,
        typeName: Cr.ZodTuple,
        rest: null,
        ...zY(rY)
      })
    };
    class vr extends ZY {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(YY) {
        const {
          status: rY,
          ctx: DY
        } = this._processInputParams(YY);
        if (DY.parsedType !== vY.object) return EY(DY, {
          code: sY.invalid_type,
          expected: vY.object,
          received: DY.parsedType
        }), VY;
        const FY = [],
          AY = this._def.keyType,
          IY = this._def.valueType;
        for (const RY in DY.data) FY.push({
          key: AY._parse(new KY(DY, RY, DY.path, RY)),
          value: IY._parse(new KY(DY, DY.data[RY], DY.path, RY))
        });
        return DY.common.async ? mY.mergeObjectAsync(rY, FY) : mY.mergeObjectSync(rY, FY)
      }
      get element() {
        return this._def.valueType
      }
      static create(YY, rY, DY) {
        return new vr(rY instanceof ZY ? {
          keyType: YY,
          valueType: rY,
          typeName: Cr.ZodRecord,
          ...zY(DY)
        } : {
          keyType: bY.create(),
          valueType: YY,
          typeName: Cr.ZodRecord,
          ...zY(rY)
        })
      }
    }
    class ur extends ZY {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(YY) {
        const {
          status: rY,
          ctx: DY
        } = this._processInputParams(YY);
        if (DY.parsedType !== vY.map) return EY(DY, {
          code: sY.invalid_type,
          expected: vY.map,
          received: DY.parsedType
        }), VY;
        const FY = this._def.keyType,
          AY = this._def.valueType,
          IY = [...DY.data.entries()].map(((YY, rY) => {
            let [IY, RY] = YY;
            return {
              key: FY._parse(new KY(DY, IY, DY.path, [rY, "key"])),
              value: AY._parse(new KY(DY, RY, DY.path, [rY, "value"]))
            }
          }));
        if (DY.common.async) {
          const YY = new Map;
          return Promise.resolve().then((async () => {
            for (const DY of IY) {
              const FY = await DY.key,
                AY = await DY.value;
              if ("aborted" === FY.status || "aborted" === AY.status) return VY;
              "ty" !== FY.status && "ty" !== AY.status || rY.ty(), YY.set(FY.value, AY.value)
            }
            return {
              status: rY.value,
              value: YY
            }
          }))
        } {
          const YY = new Map;
          for (const DY of IY) {
            const FY = DY.key,
              AY = DY.value;
            if ("aborted" === FY.status || "aborted" === AY.status) return VY;
            "ty" !== FY.status && "ty" !== AY.status || rY.ty(), YY.set(FY.value, AY.value)
          }
          return {
            status: rY.value,
            value: YY
          }
        }
      }
    }
    ur.create = (YY, rY, DY) => new ur({
      valueType: rY,
      keyType: YY,
      typeName: Cr.ZodMap,
      ...zY(DY)
    });
    class sr extends ZY {
      _parse(YY) {
        const {
          status: rY,
          ctx: DY
        } = this._processInputParams(YY);
        if (DY.parsedType !== vY.set) return EY(DY, {
          code: sY.invalid_type,
          expected: vY.set,
          received: DY.parsedType
        }), VY;
        const FY = this._def;
        null !== FY.minSize && DY.data.size < FY.minSize.value && (EY(DY, {
          code: sY.too_small,
          minimum: FY.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: FY.minSize.message
        }), rY.ty()), null !== FY.maxSize && DY.data.size > FY.maxSize.value && (EY(DY, {
          code: sY.too_big,
          maximum: FY.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: FY.maxSize.message
        }), rY.ty());
        const AY = this._def.valueType;

        function IY(YY) {
          const DY = new Set;
          for (const FY of YY) {
            if ("aborted" === FY.status) return VY;
            "ty" === FY.status && rY.ty(), DY.add(FY.value)
          }
          return {
            status: rY.value,
            value: DY
          }
        }
        const RY = [...DY.data.values()].map(((YY, rY) => AY._parse(new KY(DY, YY, DY.path, rY))));
        return DY.common.async ? Promise.all(RY).then((YY => IY(YY))) : IY(RY)
      }
      min(YY, rY) {
        return new sr({
          ...this._def,
          minSize: {
            value: YY,
            message: cY.toString(rY)
          }
        })
      }
      max(YY, rY) {
        return new sr({
          ...this._def,
          maxSize: {
            value: YY,
            message: cY.toString(rY)
          }
        })
      }
      size(YY, rY) {
        return this.min(YY, rY).max(YY, rY)
      }
      nonempty(YY) {
        return this.min(1, YY)
      }
    }
    sr.create = (YY, rY) => new sr({
      valueType: YY,
      minSize: null,
      maxSize: null,
      typeName: Cr.ZodSet,
      ...zY(rY)
    });
    class ir extends ZY {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(YY) {
        const {
          ctx: rY
        } = this._processInputParams(YY);
        if (rY.parsedType !== vY.function) return EY(rY, {
          code: sY.invalid_type,
          expected: vY.function,
          received: rY.parsedType
        }), VY;

        function DY(YY, DY) {
          return WY({
            data: YY,
            path: rY.path,
            errorMaps: [rY.common.contextualErrorMap, rY.schemaErrorMap, oY(), yY].filter((YY => !!YY)),
            issueData: {
              code: sY.invalid_arguments,
              argumentsError: DY
            }
          })
        }

        function FY(YY, DY) {
          return WY({
            data: YY,
            path: rY.path,
            errorMaps: [rY.common.contextualErrorMap, rY.schemaErrorMap, oY(), yY].filter((YY => !!YY)),
            issueData: {
              code: sY.invalid_return_type,
              returnTypeError: DY
            }
          })
        }
        const AY = {
            errorMap: rY.common.contextualErrorMap
          },
          IY = rY.data;
        if (this._def.returns instanceof mr) {
          const YY = this;
          return lY((async function() {
            for (var rY = arguments.length, RY = new Array(rY), OY = 0; OY < rY; OY++) RY[OY] = arguments[OY];
            const gY = new iY([]),
              aY = await YY._def.args.parseAsync(RY, AY).catch((YY => {
                throw gY.addIssue(DY(RY, YY)), gY
              })),
              vY = await Reflect.apply(IY, this, aY);
            return await YY._def.returns._def.type.parseAsync(vY, AY).catch((YY => {
              throw gY.addIssue(FY(vY, YY)), gY
            }))
          }))
        } {
          const YY = this;
          return lY((function() {
            for (var rY = arguments.length, RY = new Array(rY), OY = 0; OY < rY; OY++) RY[OY] = arguments[OY];
            const gY = YY._def.args.safeParse(RY, AY);
            if (!gY.success) throw new iY([DY(RY, gY.error)]);
            const aY = Reflect.apply(IY, this, gY.data),
              vY = YY._def.returns.safeParse(aY, AY);
            if (!vY.success) throw new iY([FY(aY, vY.error)]);
            return vY.data
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
        for (var YY = arguments.length, rY = new Array(YY), DY = 0; DY < YY; DY++) rY[DY] = arguments[DY];
        return new ir({
          ...this._def,
          args: ar.create(rY).rest(LY.create())
        })
      }
      returns(YY) {
        return new ir({
          ...this._def,
          returns: YY
        })
      }
      implement(YY) {
        return this.parse(YY)
      }
      strictImplement(YY) {
        return this.parse(YY)
      }
      static create(YY, rY, DY) {
        return new ir({
          args: YY || ar.create([]).rest(LY.create()),
          returns: rY || LY.create(),
          typeName: Cr.ZodFunction,
          ...zY(DY)
        })
      }
    }
    class yr extends ZY {
      get schema() {
        return this._def.getter()
      }
      _parse(YY) {
        const {
          ctx: rY
        } = this._processInputParams(YY);
        return this._def.getter()._parse({
          data: rY.data,
          path: rY.path,
          parent: rY
        })
      }
    }
    yr.create = (YY, rY) => new yr({
      getter: YY,
      typeName: Cr.ZodLazy,
      ...zY(rY)
    });
    class Qr extends ZY {
      _parse(YY) {
        if (YY.data !== this._def.value) {
          const rY = this._getOrReturnCtx(YY);
          return EY(rY, {
            received: rY.data,
            code: sY.invalid_literal,
            expected: this._def.value
          }), VY
        }
        return {
          status: "valid",
          value: YY.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function or(YY, rY) {
      return new Wr({
        values: YY,
        typeName: Cr.ZodEnum,
        ...zY(rY)
      })
    }
    Qr.create = (YY, rY) => new Qr({
      value: YY,
      typeName: Cr.ZodLiteral,
      ...zY(rY)
    });
    class Wr extends ZY {
      _parse(YY) {
        if ("string" !== typeof YY.data) {
          const rY = this._getOrReturnCtx(YY),
            DY = this._def.values;
          return EY(rY, {
            expected: OY.joinValues(DY),
            received: rY.parsedType,
            code: sY.invalid_type
          }), VY
        }
        if (-1 === this._def.values.indexOf(YY.data)) {
          const rY = this._getOrReturnCtx(YY),
            DY = this._def.values;
          return EY(rY, {
            received: rY.data,
            code: sY.invalid_enum_value,
            options: DY
          }), VY
        }
        return lY(YY.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const YY = {};
        for (const rY of this._def.values) YY[rY] = rY;
        return YY
      }
      get Values() {
        const YY = {};
        for (const rY of this._def.values) YY[rY] = rY;
        return YY
      }
      get Enum() {
        const YY = {};
        for (const rY of this._def.values) YY[rY] = rY;
        return YY
      }
      extract(YY) {
        return Wr.create(YY)
      }
      exclude(YY) {
        return Wr.create(this.options.filter((rY => !YY.includes(rY))))
      }
    }
    Wr.create = or;
    class Er extends ZY {
      _parse(YY) {
        const rY = OY.getValidEnumValues(this._def.values),
          DY = this._getOrReturnCtx(YY);
        if (DY.parsedType !== vY.string && DY.parsedType !== vY.number) {
          const YY = OY.objectValues(rY);
          return EY(DY, {
            expected: OY.joinValues(YY),
            received: DY.parsedType,
            code: sY.invalid_type
          }), VY
        }
        if (-1 === rY.indexOf(YY.data)) {
          const YY = OY.objectValues(rY);
          return EY(DY, {
            received: DY.data,
            code: sY.invalid_enum_value,
            options: YY
          }), VY
        }
        return lY(YY.data)
      }
      get enum() {
        return this._def.values
      }
    }
    Er.create = (YY, rY) => new Er({
      values: YY,
      typeName: Cr.ZodNativeEnum,
      ...zY(rY)
    });
    class mr extends ZY {
      unwrap() {
        return this._def.type
      }
      _parse(YY) {
        const {
          ctx: rY
        } = this._processInputParams(YY);
        if (rY.parsedType !== vY.promise && !1 === rY.common.async) return EY(rY, {
          code: sY.invalid_type,
          expected: vY.promise,
          received: rY.parsedType
        }), VY;
        const DY = rY.parsedType === vY.promise ? rY.data : Promise.resolve(rY.data);
        return lY(DY.then((YY => this._def.type.parseAsync(YY, {
          path: rY.path,
          errorMap: rY.common.contextualErrorMap
        }))))
      }
    }
    mr.create = (YY, rY) => new mr({
      type: YY,
      typeName: Cr.ZodPromise,
      ...zY(rY)
    });
    class Vr extends ZY {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === Cr.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(YY) {
        const {
          status: rY,
          ctx: DY
        } = this._processInputParams(YY), FY = this._def.effect || null, AY = {
          addIssue: YY => {
            EY(DY, YY), YY.fatal ? rY.abort() : rY.ty()
          },
          get path() {
            return DY.path
          }
        };
        if (AY.addIssue = AY.addIssue.bind(AY), "preprocess" === FY.type) {
          const YY = FY.transform(DY.data, AY);
          return DY.common.issues.length ? {
            status: "ty",
            value: DY.data
          } : DY.common.async ? Promise.resolve(YY).then((YY => this._def.schema._parseAsync({
            data: YY,
            path: DY.path,
            parent: DY
          }))) : this._def.schema._parseSync({
            data: YY,
            path: DY.path,
            parent: DY
          })
        }
        if ("refinement" === FY.type) {
          const YY = YY => {
            const rY = FY.refinement(YY, AY);
            if (DY.common.async) return Promise.resolve(rY);
            if (rY instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return YY
          };
          if (!1 === DY.common.async) {
            const FY = this._def.schema._parseSync({
              data: DY.data,
              path: DY.path,
              parent: DY
            });
            return "aborted" === FY.status ? VY : ("ty" === FY.status && rY.ty(), YY(FY.value), {
              status: rY.value,
              value: FY.value
            })
          }
          return this._def.schema._parseAsync({
            data: DY.data,
            path: DY.path,
            parent: DY
          }).then((DY => "aborted" === DY.status ? VY : ("ty" === DY.status && rY.ty(), YY(DY.value).then((() => ({
            status: rY.value,
            value: DY.value
          }))))))
        }
        if ("transform" === FY.type) {
          if (!1 === DY.common.async) {
            const YY = this._def.schema._parseSync({
              data: DY.data,
              path: DY.path,
              parent: DY
            });
            if (!NY(YY)) return YY;
            const IY = FY.transform(YY.value, AY);
            if (IY instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: rY.value,
              value: IY
            }
          }
          return this._def.schema._parseAsync({
            data: DY.data,
            path: DY.path,
            parent: DY
          }).then((YY => NY(YY) ? Promise.resolve(FY.transform(YY.value, AY)).then((YY => ({
            status: rY.value,
            value: YY
          }))) : YY))
        }
        OY.assertNever(FY)
      }
    }
    Vr.create = (YY, rY, DY) => new Vr({
      schema: YY,
      typeName: Cr.ZodEffects,
      effect: rY,
      ...zY(DY)
    }), Vr.createWithPreprocess = (YY, rY, DY) => new Vr({
      schema: rY,
      effect: {
        type: "preprocess",
        transform: YY
      },
      typeName: Cr.ZodEffects,
      ...zY(DY)
    });
    class Sr extends ZY {
      _parse(YY) {
        return this._getType(YY) === vY.undefined ? lY(void 0) : this._def.innerType._parse(YY)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Sr.create = (YY, rY) => new Sr({
      innerType: YY,
      typeName: Cr.ZodOptional,
      ...zY(rY)
    });
    class lr extends ZY {
      _parse(YY) {
        return this._getType(YY) === vY.null ? lY(null) : this._def.innerType._parse(YY)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    lr.create = (YY, rY) => new lr({
      innerType: YY,
      typeName: Cr.ZodNullable,
      ...zY(rY)
    });
    class Tr extends ZY {
      _parse(YY) {
        const {
          ctx: rY
        } = this._processInputParams(YY);
        let DY = rY.data;
        return rY.parsedType === vY.undefined && (DY = this._def.defaultValue()), this._def.innerType._parse({
          data: DY,
          path: rY.path,
          parent: rY
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    Tr.create = (YY, rY) => new Tr({
      innerType: YY,
      typeName: Cr.ZodDefault,
      defaultValue: "function" === typeof rY.default ? rY.default : () => rY.default,
      ...zY(rY)
    });
    class er extends ZY {
      _parse(YY) {
        const {
          ctx: rY
        } = this._processInputParams(YY), DY = {
          ...rY,
          common: {
            ...rY.common,
            issues: []
          }
        }, FY = this._def.innerType._parse({
          data: DY.data,
          path: DY.path,
          parent: {
            ...DY
          }
        });
        return BY(FY) ? FY.then((YY => ({
          status: "valid",
          value: "valid" === YY.status ? YY.value : this._def.catchValue({
            get error() {
              return new iY(DY.common.issues)
            },
            input: DY.data
          })
        }))) : {
          status: "valid",
          value: "valid" === FY.status ? FY.value : this._def.catchValue({
            get error() {
              return new iY(DY.common.issues)
            },
            input: DY.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    er.create = (YY, rY) => new er({
      innerType: YY,
      typeName: Cr.ZodCatch,
      catchValue: "function" === typeof rY.catch ? rY.catch : () => rY.catch,
      ...zY(rY)
    });
    class Nr extends ZY {
      _parse(YY) {
        if (this._getType(YY) !== vY.nan) {
          const rY = this._getOrReturnCtx(YY);
          return EY(rY, {
            code: sY.invalid_type,
            expected: vY.nan,
            received: rY.parsedType
          }), VY
        }
        return {
          status: "valid",
          value: YY.data
        }
      }
    }
    Nr.create = YY => new Nr({
      typeName: Cr.ZodNaN,
      ...zY(YY)
    });
    const Br = Symbol("zod_brand");
    class cr extends ZY {
      _parse(YY) {
        const {
          ctx: rY
        } = this._processInputParams(YY), DY = rY.data;
        return this._def.type._parse({
          data: DY,
          path: rY.path,
          parent: rY
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class Kr extends ZY {
      _parse(YY) {
        const {
          status: rY,
          ctx: DY
        } = this._processInputParams(YY);
        if (DY.common.async) {
          return (async () => {
            const YY = await this._def.in._parseAsync({
              data: DY.data,
              path: DY.path,
              parent: DY
            });
            return "aborted" === YY.status ? VY : "ty" === YY.status ? (rY.ty(), SY(YY.value)) : this._def.out._parseAsync({
              data: YY.value,
              path: DY.path,
              parent: DY
            })
          })()
        } {
          const YY = this._def.in._parseSync({
            data: DY.data,
            path: DY.path,
            parent: DY
          });
          return "aborted" === YY.status ? VY : "ty" === YY.status ? (rY.ty(), {
            status: "ty",
            value: YY.value
          }) : this._def.out._parseSync({
            data: YY.value,
            path: DY.path,
            parent: DY
          })
        }
      }
      static create(YY, rY) {
        return new Kr({
          in: YY,
          out: rY,
          typeName: Cr.ZodPipeline
        })
      }
    }
    class Hr extends ZY {
      _parse(YY) {
        const rY = this._def.innerType._parse(YY);
        return NY(rY) && (rY.value = Object.freeze(rY.value)), rY
      }
    }
    Hr.create = (YY, rY) => new Hr({
      innerType: YY,
      typeName: Cr.ZodReadonly,
      ...zY(rY)
    });
    const zr = function(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          DY = arguments.length > 2 ? arguments[2] : void 0;
        return YY ? UY.create().superRefine(((FY, AY) => {
          var IY, RY;
          if (!YY(FY)) {
            const YY = "function" === typeof rY ? rY(FY) : "string" === typeof rY ? {
                message: rY
              } : rY,
              OY = null === (RY = null !== (IY = YY.fatal) && void 0 !== IY ? IY : DY) || void 0 === RY || RY,
              gY = "string" === typeof YY ? {
                message: YY
              } : YY;
            AY.addIssue({
              code: "custom",
              ...gY,
              fatal: OY
            })
          }
        })) : UY.create()
      },
      Zr = {
        object: Fr.lazycreate
      };
    var Cr;
    ! function(YY) {
      YY.ZodString = "ZodString", YY.ZodNumber = "ZodNumber", YY.ZodNaN = "ZodNaN", YY.ZodBigInt = "ZodBigInt", YY.ZodBoolean = "ZodBoolean", YY.ZodDate = "ZodDate", YY.ZodSymbol = "ZodSymbol", YY.ZodUndefined = "ZodUndefined", YY.ZodNull = "ZodNull", YY.ZodAny = "ZodAny", YY.ZodUnknown = "ZodUnknown", YY.ZodNever = "ZodNever", YY.ZodVoid = "ZodVoid", YY.ZodArray = "ZodArray", YY.ZodObject = "ZodObject", YY.ZodUnion = "ZodUnion", YY.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", YY.ZodIntersection = "ZodIntersection", YY.ZodTuple = "ZodTuple", YY.ZodRecord = "ZodRecord", YY.ZodMap = "ZodMap", YY.ZodSet = "ZodSet", YY.ZodFunction = "ZodFunction", YY.ZodLazy = "ZodLazy", YY.ZodLiteral = "ZodLiteral", YY.ZodEnum = "ZodEnum", YY.ZodEffects = "ZodEffects", YY.ZodNativeEnum = "ZodNativeEnum", YY.ZodOptional = "ZodOptional", YY.ZodNullable = "ZodNullable", YY.ZodDefault = "ZodDefault", YY.ZodCatch = "ZodCatch", YY.ZodPromise = "ZodPromise", YY.ZodBranded = "ZodBranded", YY.ZodPipeline = "ZodPipeline", YY.ZodReadonly = "ZodReadonly"
    }(Cr || (Cr = {}));
    const fr = bY.create,
      jr = qY.create,
      hr = Nr.create,
      dr = pY.create,
      Jr = kY.create,
      Mr = GY.create,
      wr = xY.create,
      br = nY.create,
      Xr = PY.create,
      qr = UY.create,
      pr = LY.create,
      kr = tY.create,
      Gr = Yr.create,
      xr = rr.create,
      nr = Fr.create,
      Pr = Fr.strictCreate,
      Ur = Ar.create,
      Lr = Rr.create,
      tr = gr.create,
      YD = ar.create,
      rD = vr.create,
      DD = ur.create,
      FD = sr.create,
      AD = ir.create,
      ID = yr.create,
      RD = Qr.create,
      OD = Wr.create,
      gD = Er.create,
      aD = mr.create,
      vD = Vr.create,
      uD = Sr.create,
      sD = lr.create,
      iD = Vr.createWithPreprocess,
      yD = Kr.create,
      QD = {
        string: YY => bY.create({
          ...YY,
          coerce: !0
        }),
        number: YY => qY.create({
          ...YY,
          coerce: !0
        }),
        boolean: YY => kY.create({
          ...YY,
          coerce: !0
        }),
        bigint: YY => pY.create({
          ...YY,
          coerce: !0
        }),
        date: YY => GY.create({
          ...YY,
          coerce: !0
        })
      },
      oD = VY;
    var WD = Object.freeze({
        __proto__: null,
        defaultErrorMap: yY,
        setErrorMap: function(YY) {
          QY = YY
        },
        getErrorMap: oY,
        makeIssue: WY,
        EMPTY_PATH: [],
        addIssueToContext: EY,
        ParseStatus: mY,
        INVALID: VY,
        DIRTY: SY,
        OK: lY,
        isAborted: TY,
        isDirty: eY,
        isValid: NY,
        isAsync: BY,
        get util() {
          return OY
        },
        get objectUtil() {
          return gY
        },
        ZodParsedType: vY,
        getParsedType: uY,
        ZodType: ZY,
        ZodString: bY,
        ZodNumber: qY,
        ZodBigInt: pY,
        ZodBoolean: kY,
        ZodDate: GY,
        ZodSymbol: xY,
        ZodUndefined: nY,
        ZodNull: PY,
        ZodAny: UY,
        ZodUnknown: LY,
        ZodNever: tY,
        ZodVoid: Yr,
        ZodArray: rr,
        ZodObject: Fr,
        ZodUnion: Ar,
        ZodDiscriminatedUnion: Rr,
        ZodIntersection: gr,
        ZodTuple: ar,
        ZodRecord: vr,
        ZodMap: ur,
        ZodSet: sr,
        ZodFunction: ir,
        ZodLazy: yr,
        ZodLiteral: Qr,
        ZodEnum: Wr,
        ZodNativeEnum: Er,
        ZodPromise: mr,
        ZodEffects: Vr,
        ZodTransformer: Vr,
        ZodOptional: Sr,
        ZodNullable: lr,
        ZodDefault: Tr,
        ZodCatch: er,
        ZodNaN: Nr,
        BRAND: Br,
        ZodBranded: cr,
        ZodPipeline: Kr,
        ZodReadonly: Hr,
        custom: zr,
        Schema: ZY,
        ZodSchema: ZY,
        late: Zr,
        get ZodFirstPartyTypeKind() {
          return Cr
        },
        coerce: QD,
        any: qr,
        array: xr,
        bigint: dr,
        boolean: Jr,
        date: Mr,
        discriminatedUnion: Lr,
        effect: vD,
        enum: OD,
        function: AD,
        instanceof: function(YY) {
          let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${YY.name}`
          };
          return zr((rY => rY instanceof YY), rY)
        },
        intersection: tr,
        lazy: ID,
        literal: RD,
        map: DD,
        nan: hr,
        nativeEnum: gD,
        never: kr,
        null: Xr,
        nullable: sD,
        number: jr,
        object: nr,
        oboolean: () => Jr().optional(),
        onumber: () => jr().optional(),
        optional: uD,
        ostring: () => fr().optional(),
        pipeline: yD,
        preprocess: iD,
        promise: aD,
        record: rD,
        set: FD,
        strictObject: Pr,
        string: fr,
        symbol: wr,
        transformer: vD,
        tuple: YD,
        undefined: br,
        union: Ur,
        unknown: pr,
        void: Gr,
        NEVER: oD,
        ZodIssueCode: sY,
        quotelessJson: YY => JSON.stringify(YY, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: iY
      }),
      ED = {
        exports: {}
      };
    ! function(YY) {
      var rY = function(YY) {
        var DY = 1e7,
          FY = 9007199254740992,
          AY = sY(FY),
          IY = "0123456789abcdefghijklmnopqrstuvwxyz",
          RY = "function" === typeof BigInt;

        function OY(YY, rY, DY, FY) {
          return "undefined" === typeof YY ? OY[0] : "undefined" !== typeof rY && (10 !== +rY || DY) ? kY(YY, rY, DY, FY) : UY(YY)
        }

        function gY(YY, rY) {
          this.value = YY, this.sign = rY, this.isSmall = !1
        }

        function aY(YY) {
          this.value = YY, this.sign = YY < 0, this.isSmall = !0
        }

        function vY(YY) {
          this.value = YY
        }

        function uY(YY) {
          return -FY < YY && YY < FY
        }

        function sY(YY) {
          return YY < 1e7 ? [YY] : YY < 1e14 ? [YY % 1e7, Math.floor(YY / 1e7)] : [YY % 1e7, Math.floor(YY / 1e7) % 1e7, Math.floor(YY / 1e14)]
        }

        function iY(YY) {
          yY(YY);
          var rY = YY.length;
          if (rY < 4 && zY(YY, AY) < 0) switch (rY) {
            case 0:
              return 0;
            case 1:
              return YY[0];
            case 2:
              return YY[0] + YY[1] * DY;
            default:
              return YY[0] + (YY[1] + YY[2] * DY) * DY
          }
          return YY
        }

        function yY(YY) {
          for (var rY = YY.length; 0 === YY[--rY];);
          YY.length = rY + 1
        }

        function QY(YY) {
          for (var rY = new Array(YY), DY = -1; ++DY < YY;) rY[DY] = 0;
          return rY
        }

        function oY(YY) {
          return YY > 0 ? Math.floor(YY) : Math.ceil(YY)
        }

        function WY(YY, rY) {
          var FY, AY, IY = YY.length,
            RY = rY.length,
            OY = new Array(IY),
            gY = 0,
            aY = DY;
          for (AY = 0; AY < RY; AY++) gY = (FY = YY[AY] + rY[AY] + gY) >= aY ? 1 : 0, OY[AY] = FY - gY * aY;
          for (; AY < IY;) gY = (FY = YY[AY] + gY) === aY ? 1 : 0, OY[AY++] = FY - gY * aY;
          return gY > 0 && OY.push(gY), OY
        }

        function EY(YY, rY) {
          return YY.length >= rY.length ? WY(YY, rY) : WY(rY, YY)
        }

        function mY(YY, rY) {
          var FY, AY, IY = YY.length,
            RY = new Array(IY),
            OY = DY;
          for (AY = 0; AY < IY; AY++) FY = YY[AY] - OY + rY, rY = Math.floor(FY / OY), RY[AY] = FY - rY * OY, rY += 1;
          for (; rY > 0;) RY[AY++] = rY % OY, rY = Math.floor(rY / OY);
          return RY
        }

        function VY(YY, rY) {
          var FY, AY, IY = YY.length,
            RY = rY.length,
            OY = new Array(IY),
            gY = 0,
            aY = DY;
          for (FY = 0; FY < RY; FY++)(AY = YY[FY] - gY - rY[FY]) < 0 ? (AY += aY, gY = 1) : gY = 0, OY[FY] = AY;
          for (FY = RY; FY < IY; FY++) {
            if (!((AY = YY[FY] - gY) < 0)) {
              OY[FY++] = AY;
              break
            }
            AY += aY, OY[FY] = AY
          }
          for (; FY < IY; FY++) OY[FY] = YY[FY];
          return yY(OY), OY
        }

        function SY(YY, rY, FY) {
          var AY, IY, RY = YY.length,
            OY = new Array(RY),
            vY = -rY,
            uY = DY;
          for (AY = 0; AY < RY; AY++) IY = YY[AY] + vY, vY = Math.floor(IY / uY), IY %= uY, OY[AY] = IY < 0 ? IY + uY : IY;
          return "number" === typeof(OY = iY(OY)) ? (FY && (OY = -OY), new aY(OY)) : new gY(OY, FY)
        }

        function lY(YY, rY) {
          var FY, AY, IY, RY, OY = YY.length,
            gY = rY.length,
            aY = QY(OY + gY),
            vY = DY;
          for (IY = 0; IY < OY; ++IY) {
            RY = YY[IY];
            for (var uY = 0; uY < gY; ++uY) FY = RY * rY[uY] + aY[IY + uY], AY = Math.floor(FY / vY), aY[IY + uY] = FY - AY * vY, aY[IY + uY + 1] += AY
          }
          return yY(aY), aY
        }

        function TY(YY, rY) {
          var FY, AY, IY = YY.length,
            RY = new Array(IY),
            OY = DY,
            gY = 0;
          for (AY = 0; AY < IY; AY++) FY = YY[AY] * rY + gY, gY = Math.floor(FY / OY), RY[AY] = FY - gY * OY;
          for (; gY > 0;) RY[AY++] = gY % OY, gY = Math.floor(gY / OY);
          return RY
        }

        function eY(YY, rY) {
          for (var DY = []; rY-- > 0;) DY.push(0);
          return DY.concat(YY)
        }

        function NY(YY, rY) {
          var DY = Math.max(YY.length, rY.length);
          if (DY <= 30) return lY(YY, rY);
          DY = Math.ceil(DY / 2);
          var FY = YY.slice(DY),
            AY = YY.slice(0, DY),
            IY = rY.slice(DY),
            RY = rY.slice(0, DY),
            OY = NY(AY, RY),
            gY = NY(FY, IY),
            aY = NY(EY(AY, FY), EY(RY, IY)),
            vY = EY(EY(OY, eY(VY(VY(aY, OY), gY), DY)), eY(gY, 2 * DY));
          return yY(vY), vY
        }

        function BY(YY, rY, FY) {
          return new gY(YY < DY ? TY(rY, YY) : lY(rY, sY(YY)), FY)
        }

        function cY(YY) {
          var rY, FY, AY, IY, RY = YY.length,
            OY = QY(RY + RY),
            gY = DY;
          for (AY = 0; AY < RY; AY++) {
            FY = 0 - (IY = YY[AY]) * IY;
            for (var aY = AY; aY < RY; aY++) rY = IY * YY[aY] * 2 + OY[AY + aY] + FY, FY = Math.floor(rY / gY), OY[AY + aY] = rY - FY * gY;
            OY[AY + RY] = FY
          }
          return yY(OY), OY
        }

        function KY(YY, rY) {
          var FY, AY, IY, RY, OY = YY.length,
            gY = QY(OY),
            aY = DY;
          for (IY = 0, FY = OY - 1; FY >= 0; --FY) IY = (RY = IY * aY + YY[FY]) - (AY = oY(RY / rY)) * rY, gY[FY] = 0 | AY;
          return [gY, 0 | IY]
        }

        function HY(YY, rY) {
          var FY, AY = UY(rY);
          if (RY) return [new vY(YY.value / AY.value), new vY(YY.value % AY.value)];
          var IY, uY = YY.value,
            WY = AY.value;
          if (0 === WY) throw new Error("Cannot divide by zero");
          if (YY.isSmall) return AY.isSmall ? [new aY(oY(uY / WY)), new aY(uY % WY)] : [OY[0], YY];
          if (AY.isSmall) {
            if (1 === WY) return [YY, OY[0]];
            if (-1 == WY) return [YY.GA(), OY[0]];
            var EY = Math.abs(WY);
            if (EY < DY) {
              IY = iY((FY = KY(uY, EY))[0]);
              var mY = FY[1];
              return YY.sign && (mY = -mY), "number" === typeof IY ? (YY.sign !== AY.sign && (IY = -IY), [new aY(IY), new aY(mY)]) : [new gY(IY, YY.sign !== AY.sign), new aY(mY)]
            }
            WY = sY(EY)
          }
          var SY = zY(uY, WY);
          if (-1 === SY) return [OY[0], YY];
          if (0 === SY) return [OY[YY.sign === AY.sign ? 1 : -1], OY[0]];
          FY = uY.length + WY.length <= 200 ? function(YY, rY) {
            var FY, AY, IY, RY, OY, gY, aY, vY = YY.length,
              uY = rY.length,
              sY = DY,
              yY = QY(rY.length),
              oY = rY[uY - 1],
              WY = Math.ceil(sY / (2 * oY)),
              EY = TY(YY, WY),
              mY = TY(rY, WY);
            for (EY.length <= vY && EY.push(0), mY.push(0), oY = mY[uY - 1], AY = vY - uY; AY >= 0; AY--) {
              for (FY = sY - 1, EY[AY + uY] !== oY && (FY = Math.floor((EY[AY + uY] * sY + EY[AY + uY - 1]) / oY)), IY = 0, RY = 0, gY = mY.length, OY = 0; OY < gY; OY++) IY += FY * mY[OY], aY = Math.floor(IY / sY), RY += EY[AY + OY] - (IY - aY * sY), IY = aY, RY < 0 ? (EY[AY + OY] = RY + sY, RY = -1) : (EY[AY + OY] = RY, RY = 0);
              for (; 0 !== RY;) {
                for (FY -= 1, IY = 0, OY = 0; OY < gY; OY++)(IY += EY[AY + OY] - sY + mY[OY]) < 0 ? (EY[AY + OY] = IY + sY, IY = 0) : (EY[AY + OY] = IY, IY = 1);
                RY += IY
              }
              yY[AY] = FY
            }
            return EY = KY(EY, WY)[0], [iY(yY), iY(EY)]
          }(uY, WY) : function(YY, rY) {
            for (var FY, AY, IY, RY, OY, gY = YY.length, aY = rY.length, vY = [], uY = [], sY = DY; gY;)
              if (uY.unshift(YY[--gY]), yY(uY), zY(uY, rY) < 0) vY.push(0);
              else {
                IY = uY[(AY = uY.length) - 1] * sY + uY[AY - 2], RY = rY[aY - 1] * sY + rY[aY - 2], AY > aY && (IY = (IY + 1) * sY), FY = Math.ceil(IY / RY);
                do {
                  if (zY(OY = TY(rY, FY), uY) <= 0) break;
                  FY--
                } while (FY);
                vY.push(FY), uY = VY(uY, OY)
              } return vY.reverse(), [iY(vY), iY(uY)]
          }(uY, WY), IY = FY[0];
          var lY = YY.sign !== AY.sign,
            eY = FY[1],
            NY = YY.sign;
          return "number" === typeof IY ? (lY && (IY = -IY), IY = new aY(IY)) : IY = new gY(IY, lY), "number" === typeof eY ? (NY && (eY = -eY), eY = new aY(eY)) : eY = new gY(eY, NY), [IY, eY]
        }

        function zY(YY, rY) {
          if (YY.length !== rY.length) return YY.length > rY.length ? 1 : -1;
          for (var DY = YY.length - 1; DY >= 0; DY--)
            if (YY[DY] !== rY[DY]) return YY[DY] > rY[DY] ? 1 : -1;
          return 0
        }

        function ZY(YY) {
          var rY = YY.abs();
          return !rY.isUnit() && (!!(rY.equals(2) || rY.equals(3) || rY.equals(5)) || !(rY.isEven() || rY.isDivisibleBy(3) || rY.isDivisibleBy(5)) && (!!rY.lesser(49) || void 0))
        }

        function CY(YY, DY) {
          for (var FY, AY, IY, RY = YY.prev(), OY = RY, gY = 0; OY.isEven();) OY = OY.divide(2), gY++;
          YY: for (AY = 0; AY < DY.length; AY++)
            if (!YY.lesser(DY[AY]) && !(IY = rY(DY[AY]).modPow(OY, YY)).isUnit() && !IY.equals(RY)) {
              for (FY = gY - 1; 0 != FY; FY--) {
                if ((IY = IY.square().mod(YY)).isUnit()) return !1;
                if (IY.equals(RY)) continue YY
              }
              return !1
            }
          return !0
        }
        gY.prototype = Object.create(OY.prototype), aY.prototype = Object.create(OY.prototype), vY.prototype = Object.create(OY.prototype), gY.prototype.add = function(YY) {
          var rY = UY(YY);
          if (this.sign !== rY.sign) return this.subtract(rY.GA());
          var DY = this.value,
            FY = rY.value;
          return rY.isSmall ? new gY(mY(DY, Math.abs(FY)), this.sign) : new gY(EY(DY, FY), this.sign)
        }, gY.prototype.plus = gY.prototype.add, aY.prototype.add = function(YY) {
          var rY = UY(YY),
            DY = this.value;
          if (DY < 0 !== rY.sign) return this.subtract(rY.GA());
          var FY = rY.value;
          if (rY.isSmall) {
            if (uY(DY + FY)) return new aY(DY + FY);
            FY = sY(Math.abs(FY))
          }
          return new gY(mY(FY, Math.abs(DY)), DY < 0)
        }, aY.prototype.plus = aY.prototype.add, vY.prototype.add = function(YY) {
          return new vY(this.value + UY(YY).value)
        }, vY.prototype.plus = vY.prototype.add, gY.prototype.subtract = function(YY) {
          var rY = UY(YY);
          if (this.sign !== rY.sign) return this.add(rY.GA());
          var DY = this.value,
            FY = rY.value;
          return rY.isSmall ? SY(DY, Math.abs(FY), this.sign) : function(YY, rY, DY) {
            var FY;
            return zY(YY, rY) >= 0 ? FY = VY(YY, rY) : (FY = VY(rY, YY), DY = !DY), "number" === typeof(FY = iY(FY)) ? (DY && (FY = -FY), new aY(FY)) : new gY(FY, DY)
          }(DY, FY, this.sign)
        }, gY.prototype.minus = gY.prototype.subtract, aY.prototype.subtract = function(YY) {
          var rY = UY(YY),
            DY = this.value;
          if (DY < 0 !== rY.sign) return this.add(rY.GA());
          var FY = rY.value;
          return rY.isSmall ? new aY(DY - FY) : SY(FY, Math.abs(DY), DY >= 0)
        }, aY.prototype.minus = aY.prototype.subtract, vY.prototype.subtract = function(YY) {
          return new vY(this.value - UY(YY).value)
        }, vY.prototype.minus = vY.prototype.subtract, gY.prototype.GA = function() {
          return new gY(this.value, !this.sign)
        }, aY.prototype.GA = function() {
          var YY = this.sign,
            rY = new aY(-this.value);
          return rY.sign = !YY, rY
        }, vY.prototype.GA = function() {
          return new vY(-this.value)
        }, gY.prototype.abs = function() {
          return new gY(this.value, !1)
        }, aY.prototype.abs = function() {
          return new aY(Math.abs(this.value))
        }, vY.prototype.abs = function() {
          return new vY(this.value >= 0 ? this.value : -this.value)
        }, gY.prototype.multiply = function(YY) {
          var rY, FY, AY, IY = UY(YY),
            RY = this.value,
            aY = IY.value,
            vY = this.sign !== IY.sign;
          if (IY.isSmall) {
            if (0 === aY) return OY[0];
            if (1 === aY) return this;
            if (-1 === aY) return this.GA();
            if ((rY = Math.abs(aY)) < DY) return new gY(TY(RY, rY), vY);
            aY = sY(rY)
          }
          return FY = RY.length, AY = aY.length, new gY(-.012 * FY - .012 * AY + 15e-6 * FY * AY > 0 ? NY(RY, aY) : lY(RY, aY), vY)
        }, gY.prototype.times = gY.prototype.multiply, aY.prototype._multiplyBySmall = function(YY) {
          return uY(YY.value * this.value) ? new aY(YY.value * this.value) : BY(Math.abs(YY.value), sY(Math.abs(this.value)), this.sign !== YY.sign)
        }, gY.prototype._multiplyBySmall = function(YY) {
          return 0 === YY.value ? OY[0] : 1 === YY.value ? this : -1 === YY.value ? this.GA() : BY(Math.abs(YY.value), this.value, this.sign !== YY.sign)
        }, aY.prototype.multiply = function(YY) {
          return UY(YY)._multiplyBySmall(this)
        }, aY.prototype.times = aY.prototype.multiply, vY.prototype.multiply = function(YY) {
          return new vY(this.value * UY(YY).value)
        }, vY.prototype.times = vY.prototype.multiply, gY.prototype.square = function() {
          return new gY(cY(this.value), !1)
        }, aY.prototype.square = function() {
          var YY = this.value * this.value;
          return uY(YY) ? new aY(YY) : new gY(cY(sY(Math.abs(this.value))), !1)
        }, vY.prototype.square = function(YY) {
          return new vY(this.value * this.value)
        }, gY.prototype.divmod = function(YY) {
          var rY = HY(this, YY);
          return {
            quotient: rY[0],
            remainder: rY[1]
          }
        }, vY.prototype.divmod = aY.prototype.divmod = gY.prototype.divmod, gY.prototype.divide = function(YY) {
          return HY(this, YY)[0]
        }, vY.prototype.over = vY.prototype.divide = function(YY) {
          return new vY(this.value / UY(YY).value)
        }, aY.prototype.over = aY.prototype.divide = gY.prototype.over = gY.prototype.divide, gY.prototype.mod = function(YY) {
          return HY(this, YY)[1]
        }, vY.prototype.mod = vY.prototype.remainder = function(YY) {
          return new vY(this.value % UY(YY).value)
        }, aY.prototype.remainder = aY.prototype.mod = gY.prototype.remainder = gY.prototype.mod, gY.prototype.pow = function(YY) {
          var rY, DY, FY, AY = UY(YY),
            IY = this.value,
            RY = AY.value;
          if (0 === RY) return OY[1];
          if (0 === IY) return OY[0];
          if (1 === IY) return OY[1];
          if (-1 === IY) return AY.isEven() ? OY[1] : OY[-1];
          if (AY.sign) return OY[0];
          if (!AY.isSmall) throw new Error("The exponent " + AY.toString() + " is too large.");
          if (this.isSmall && uY(rY = Math.pow(IY, RY))) return new aY(oY(rY));
          for (DY = this, FY = OY[1]; !0 & RY && (FY = FY.times(DY), --RY), 0 !== RY;) RY /= 2, DY = DY.square();
          return FY
        }, aY.prototype.pow = gY.prototype.pow, vY.prototype.pow = function(YY) {
          var rY = UY(YY),
            DY = this.value,
            FY = rY.value,
            AY = BigInt(0),
            IY = BigInt(1),
            RY = BigInt(2);
          if (FY === AY) return OY[1];
          if (DY === AY) return OY[0];
          if (DY === IY) return OY[1];
          if (DY === BigInt(-1)) return rY.isEven() ? OY[1] : OY[-1];
          if (rY.isNegative()) return new vY(AY);
          for (var gY = this, aY = OY[1];
            (FY & IY) === IY && (aY = aY.times(gY), --FY), FY !== AY;) FY /= RY, gY = gY.square();
          return aY
        }, gY.prototype.modPow = function(YY, rY) {
          if (YY = UY(YY), (rY = UY(rY)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var DY = OY[1],
            FY = this.mod(rY);
          for (YY.isNegative() && (YY = YY.multiply(OY[-1]), FY = FY.modInv(rY)); YY.isPositive();) {
            if (FY.isZero()) return OY[0];
            YY.isOdd() && (DY = DY.multiply(FY).mod(rY)), YY = YY.divide(2), FY = FY.square().mod(rY)
          }
          return DY
        }, vY.prototype.modPow = aY.prototype.modPow = gY.prototype.modPow, gY.prototype.compareAbs = function(YY) {
          var rY = UY(YY),
            DY = this.value,
            FY = rY.value;
          return rY.isSmall ? 1 : zY(DY, FY)
        }, aY.prototype.compareAbs = function(YY) {
          var rY = UY(YY),
            DY = Math.abs(this.value),
            FY = rY.value;
          return rY.isSmall ? DY === (FY = Math.abs(FY)) ? 0 : DY > FY ? 1 : -1 : -1
        }, vY.prototype.compareAbs = function(YY) {
          var rY = this.value,
            DY = UY(YY).value;
          return (rY = rY >= 0 ? rY : -rY) === (DY = DY >= 0 ? DY : -DY) ? 0 : rY > DY ? 1 : -1
        }, gY.prototype.compare = function(YY) {
          if (YY === 1 / 0) return -1;
          if (YY === -1 / 0) return 1;
          var rY = UY(YY),
            DY = this.value,
            FY = rY.value;
          return this.sign !== rY.sign ? rY.sign ? 1 : -1 : rY.isSmall ? this.sign ? -1 : 1 : zY(DY, FY) * (this.sign ? -1 : 1)
        }, gY.prototype.compareTo = gY.prototype.compare, aY.prototype.compare = function(YY) {
          if (YY === 1 / 0) return -1;
          if (YY === -1 / 0) return 1;
          var rY = UY(YY),
            DY = this.value,
            FY = rY.value;
          return rY.isSmall ? DY == FY ? 0 : DY > FY ? 1 : -1 : DY < 0 !== rY.sign ? DY < 0 ? -1 : 1 : DY < 0 ? 1 : -1
        }, aY.prototype.compareTo = aY.prototype.compare, vY.prototype.compare = function(YY) {
          if (YY === 1 / 0) return -1;
          if (YY === -1 / 0) return 1;
          var rY = this.value,
            DY = UY(YY).value;
          return rY === DY ? 0 : rY > DY ? 1 : -1
        }, vY.prototype.compareTo = vY.prototype.compare, gY.prototype.equals = function(YY) {
          return 0 === this.compare(YY)
        }, vY.prototype.eq = vY.prototype.equals = aY.prototype.eq = aY.prototype.equals = gY.prototype.eq = gY.prototype.equals, gY.prototype.notEquals = function(YY) {
          return 0 !== this.compare(YY)
        }, vY.prototype.neq = vY.prototype.notEquals = aY.prototype.neq = aY.prototype.notEquals = gY.prototype.neq = gY.prototype.notEquals, gY.prototype.greater = function(YY) {
          return this.compare(YY) > 0
        }, vY.prototype.gt = vY.prototype.greater = aY.prototype.gt = aY.prototype.greater = gY.prototype.gt = gY.prototype.greater, gY.prototype.lesser = function(YY) {
          return this.compare(YY) < 0
        }, vY.prototype.lt = vY.prototype.lesser = aY.prototype.lt = aY.prototype.lesser = gY.prototype.lt = gY.prototype.lesser, gY.prototype.greaterOrEquals = function(YY) {
          return this.compare(YY) >= 0
        }, vY.prototype.geq = vY.prototype.greaterOrEquals = aY.prototype.geq = aY.prototype.greaterOrEquals = gY.prototype.geq = gY.prototype.greaterOrEquals, gY.prototype.lesserOrEquals = function(YY) {
          return this.compare(YY) <= 0
        }, vY.prototype.leq = vY.prototype.lesserOrEquals = aY.prototype.leq = aY.prototype.lesserOrEquals = gY.prototype.leq = gY.prototype.lesserOrEquals, gY.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, aY.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, vY.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, gY.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, aY.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, vY.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, gY.prototype.isPositive = function() {
          return !this.sign
        }, aY.prototype.isPositive = function() {
          return this.value > 0
        }, vY.prototype.isPositive = aY.prototype.isPositive, gY.prototype.isNegative = function() {
          return this.sign
        }, aY.prototype.isNegative = function() {
          return this.value < 0
        }, vY.prototype.isNegative = aY.prototype.isNegative, gY.prototype.isUnit = function() {
          return !1
        }, aY.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, vY.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, gY.prototype.isZero = function() {
          return !1
        }, aY.prototype.isZero = function() {
          return 0 === this.value
        }, vY.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, gY.prototype.isDivisibleBy = function(YY) {
          var rY = UY(YY);
          return !rY.isZero() && (!!rY.isUnit() || (0 === rY.compareAbs(2) ? this.isEven() : this.mod(rY).isZero()))
        }, vY.prototype.isDivisibleBy = aY.prototype.isDivisibleBy = gY.prototype.isDivisibleBy, gY.prototype.isPrime = function(DY) {
          var FY = ZY(this);
          if (FY !== YY) return FY;
          var AY = this.abs(),
            IY = AY.bitLength();
          if (IY <= 64) return CY(AY, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var RY = Math.log(2) * IY.toJSNumber(), OY = Math.ceil(!0 === DY ? 2 * Math.pow(RY, 2) : RY), gY = [], aY = 0; aY < OY; aY++) gY.push(rY(aY + 2));
          return CY(AY, gY)
        }, vY.prototype.isPrime = aY.prototype.isPrime = gY.prototype.isPrime, gY.prototype.isProbablePrime = function(DY, FY) {
          var AY = ZY(this);
          if (AY !== YY) return AY;
          for (var IY = this.abs(), RY = DY === YY ? 5 : DY, OY = [], gY = 0; gY < RY; gY++) OY.push(rY.randBetween(2, IY.minus(2), FY));
          return CY(IY, OY)
        }, vY.prototype.isProbablePrime = aY.prototype.isProbablePrime = gY.prototype.isProbablePrime, gY.prototype.modInv = function(YY) {
          for (var DY, FY, AY, IY = rY.zero, RY = rY.one, OY = UY(YY), gY = this.abs(); !gY.isZero();) DY = OY.divide(gY), FY = IY, AY = OY, IY = RY, OY = gY, RY = FY.subtract(DY.multiply(RY)), gY = AY.subtract(DY.multiply(gY));
          if (!OY.isUnit()) throw new Error(this.toString() + " and " + YY.toString() + " are not co-prime");
          return -1 === IY.compare(0) && (IY = IY.add(YY)), this.isNegative() ? IY.GA() : IY
        }, vY.prototype.modInv = aY.prototype.modInv = gY.prototype.modInv, gY.prototype.next = function() {
          var YY = this.value;
          return this.sign ? SY(YY, 1, this.sign) : new gY(mY(YY, 1), this.sign)
        }, aY.prototype.next = function() {
          var YY = this.value;
          return YY + 1 < FY ? new aY(YY + 1) : new gY(AY, !1)
        }, vY.prototype.next = function() {
          return new vY(this.value + BigInt(1))
        }, gY.prototype.prev = function() {
          var YY = this.value;
          return this.sign ? new gY(mY(YY, 1), !0) : SY(YY, 1, this.sign)
        }, aY.prototype.prev = function() {
          var YY = this.value;
          return YY - 1 > -FY ? new aY(YY - 1) : new gY(AY, !0)
        }, vY.prototype.prev = function() {
          return new vY(this.value - BigInt(1))
        };
        for (var fY = [1]; 2 * fY[fY.length - 1] <= DY;) fY.push(2 * fY[fY.length - 1]);
        var jY = fY.length,
          hY = fY[jY - 1];

        function dY(YY) {
          return Math.abs(YY) <= DY
        }

        function JY(YY, DY, FY) {
          DY = UY(DY);
          for (var AY = YY.isNegative(), IY = DY.isNegative(), RY = AY ? YY.not() : YY, OY = IY ? DY.not() : DY, gY = 0, aY = 0, vY = null, uY = null, sY = []; !RY.isZero() || !OY.isZero();) gY = (vY = HY(RY, hY))[1].toJSNumber(), AY && (gY = hY - 1 - gY), aY = (uY = HY(OY, hY))[1].toJSNumber(), IY && (aY = hY - 1 - aY), RY = vY[0], OY = uY[0], sY.push(FY(gY, aY));
          for (var iY = 0 !== FY(AY ? 1 : 0, IY ? 1 : 0) ? rY(-1) : rY(0), yY = sY.length - 1; yY >= 0; yY -= 1) iY = iY.multiply(hY).add(rY(sY[yY]));
          return iY
        }
        gY.prototype.shiftLeft = function(YY) {
          var rY = UY(YY).toJSNumber();
          if (!dY(rY)) throw new Error(String(rY) + " is too large for shifting.");
          if (rY < 0) return this.shiftRight(-rY);
          var DY = this;
          if (DY.isZero()) return DY;
          for (; rY >= jY;) DY = DY.multiply(hY), rY -= jY - 1;
          return DY.multiply(fY[rY])
        }, vY.prototype.shiftLeft = aY.prototype.shiftLeft = gY.prototype.shiftLeft, gY.prototype.shiftRight = function(YY) {
          var rY, DY = UY(YY).toJSNumber();
          if (!dY(DY)) throw new Error(String(DY) + " is too large for shifting.");
          if (DY < 0) return this.shiftLeft(-DY);
          for (var FY = this; DY >= jY;) {
            if (FY.isZero() || FY.isNegative() && FY.isUnit()) return FY;
            FY = (rY = HY(FY, hY))[1].isNegative() ? rY[0].prev() : rY[0], DY -= jY - 1
          }
          return (rY = HY(FY, fY[DY]))[1].isNegative() ? rY[0].prev() : rY[0]
        }, vY.prototype.shiftRight = aY.prototype.shiftRight = gY.prototype.shiftRight, gY.prototype.not = function() {
          return this.GA().prev()
        }, vY.prototype.not = aY.prototype.not = gY.prototype.not, gY.prototype.and = function(YY) {
          return JY(this, YY, (function(YY, rY) {
            return YY & rY
          }))
        }, vY.prototype.and = aY.prototype.and = gY.prototype.and, gY.prototype.or = function(YY) {
          return JY(this, YY, (function(YY, rY) {
            return YY | rY
          }))
        }, vY.prototype.or = aY.prototype.or = gY.prototype.or, gY.prototype.xor = function(YY) {
          return JY(this, YY, (function(YY, rY) {
            return YY ^ rY
          }))
        }, vY.prototype.xor = aY.prototype.xor = gY.prototype.xor;
        var MY = 1 << 30;

        function wY(YY) {
          var rY = YY.value,
            FY = "number" === typeof rY ? rY | MY : "bigint" === typeof rY ? rY | BigInt(MY) : rY[0] + rY[1] * DY | 1073758208;
          return FY & -FY
        }

        function bY(YY, DY) {
          if (DY.compareTo(YY) <= 0) {
            var FY = bY(YY, DY.square(DY)),
              AY = FY.p,
              IY = FY.e,
              RY = AY.multiply(DY);
            return RY.compareTo(YY) <= 0 ? {
              p: RY,
              e: 2 * IY + 1
            } : {
              p: AY,
              e: 2 * IY
            }
          }
          return {
            p: rY(1),
            e: 0
          }
        }

        function XY(YY, rY) {
          return YY = UY(YY), rY = UY(rY), YY.greater(rY) ? YY : rY
        }

        function qY(YY, rY) {
          return YY = UY(YY), rY = UY(rY), YY.lesser(rY) ? YY : rY
        }

        function pY(YY, rY) {
          if (YY = UY(YY).abs(), rY = UY(rY).abs(), YY.equals(rY)) return YY;
          if (YY.isZero()) return rY;
          if (rY.isZero()) return YY;
          for (var DY, FY, AY = OY[1]; YY.isEven() && rY.isEven();) DY = qY(wY(YY), wY(rY)), YY = YY.divide(DY), rY = rY.divide(DY), AY = AY.multiply(DY);
          for (; YY.isEven();) YY = YY.divide(wY(YY));
          do {
            for (; rY.isEven();) rY = rY.divide(wY(rY));
            YY.greater(rY) && (FY = rY, rY = YY, YY = FY), rY = rY.subtract(YY)
          } while (!rY.isZero());
          return AY.isUnit() ? YY : YY.multiply(AY)
        }
        gY.prototype.bitLength = function() {
          var YY = this;
          return YY.compareTo(rY(0)) < 0 && (YY = YY.GA().subtract(rY(1))), 0 === YY.compareTo(rY(0)) ? rY(0) : rY(bY(YY, rY(2)).e).add(rY(1))
        }, vY.prototype.bitLength = aY.prototype.bitLength = gY.prototype.bitLength;
        var kY = function(YY, rY, DY, FY) {
          DY = DY || IY, YY = String(YY), FY || (YY = YY.toLowerCase(), DY = DY.toLowerCase());
          var AY, RY = YY.length,
            OY = Math.abs(rY),
            gY = {};
          for (AY = 0; AY < DY.length; AY++) gY[DY[AY]] = AY;
          for (AY = 0; AY < RY; AY++) {
            if ("-" !== (uY = YY[AY]) && (uY in gY && gY[uY] >= OY)) {
              if ("1" === uY && 1 === OY) continue;
              throw new Error(uY + " is not a valid digit in base " + rY + ".")
            }
          }
          rY = UY(rY);
          var aY = [],
            vY = "-" === YY[0];
          for (AY = vY ? 1 : 0; AY < YY.length; AY++) {
            var uY;
            if ((uY = YY[AY]) in gY) aY.push(UY(gY[uY]));
            else {
              if ("<" !== uY) throw new Error(uY + " is not a valid character");
              var sY = AY;
              do {
                AY++
              } while (">" !== YY[AY] && AY < YY.length);
              aY.push(UY(YY.slice(sY + 1, AY)))
            }
          }
          return GY(aY, rY, vY)
        };

        function GY(YY, rY, DY) {
          var FY, AY = OY[0],
            IY = OY[1];
          for (FY = YY.length - 1; FY >= 0; FY--) AY = AY.add(YY[FY].times(IY)), IY = IY.times(rY);
          return DY ? AY.GA() : AY
        }

        function xY(YY, DY) {
          if ((DY = rY(DY)).isZero()) {
            if (YY.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (DY.equals(-1)) {
            if (YY.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (YY.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-YY.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var FY = Array.apply(null, Array(YY.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return FY.unshift([1]), {
              value: [].concat.apply([], FY),
              isNegative: !1
            }
          }
          var AY = !1;
          if (YY.isNegative() && DY.isPositive() && (AY = !0, YY = YY.abs()), DY.isUnit()) return YY.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(YY.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: AY
          };
          for (var IY, RY = [], OY = YY; OY.isNegative() || OY.compareAbs(DY) >= 0;) {
            IY = OY.divmod(DY), OY = IY.quotient;
            var gY = IY.remainder;
            gY.isNegative() && (gY = DY.minus(gY).abs(), OY = OY.next()), RY.push(gY.toJSNumber())
          }
          return RY.push(OY.toJSNumber()), {
            value: RY.reverse(),
            isNegative: AY
          }
        }

        function nY(YY, rY, DY) {
          var FY = xY(YY, rY);
          return (FY.isNegative ? "-" : "") + FY.value.map((function(YY) {
            return function(YY, rY) {
              return YY < (rY = rY || IY).length ? rY[YY] : "<" + YY + ">"
            }(YY, DY)
          })).join("")
        }

        function PY(YY) {
          if (uY(+YY)) {
            var rY = +YY;
            if (rY === oY(rY)) return RY ? new vY(BigInt(rY)) : new aY(rY);
            throw new Error("Invalid integer: " + YY)
          }
          var DY = "-" === YY[0];
          DY && (YY = YY.slice(1));
          var FY = YY.split(/e/i);
          if (FY.length > 2) throw new Error("Invalid integer: " + FY.join("e"));
          if (2 === FY.length) {
            var AY = FY[1];
            if ("+" === AY[0] && (AY = AY.slice(1)), (AY = +AY) !== oY(AY) || !uY(AY)) throw new Error("Invalid integer: " + AY + " is not a valid exponent.");
            var IY = FY[0],
              OY = IY.indexOf(".");
            if (OY >= 0 && (AY -= IY.length - OY - 1, IY = IY.slice(0, OY) + IY.slice(OY + 1)), AY < 0) throw new Error("Cannot include negative exponent part for integers");
            YY = IY += new Array(AY + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(YY)) throw new Error("Invalid integer: " + YY);
          if (RY) return new vY(BigInt(DY ? "-" + YY : YY));
          for (var sY = [], iY = YY.length, QY = iY - 7; iY > 0;) sY.push(+YY.slice(QY, iY)), (QY -= 7) < 0 && (QY = 0), iY -= 7;
          return yY(sY), new gY(sY, DY)
        }

        function UY(YY) {
          return "number" === typeof YY ? function(YY) {
            if (RY) return new vY(BigInt(YY));
            if (uY(YY)) {
              if (YY !== oY(YY)) throw new Error(YY + " is not an integer.");
              return new aY(YY)
            }
            return PY(YY.toString())
          }(YY) : "string" === typeof YY ? PY(YY) : "bigint" === typeof YY ? new vY(YY) : YY
        }
        gY.prototype.toArray = function(YY) {
          return xY(this, YY)
        }, aY.prototype.toArray = function(YY) {
          return xY(this, YY)
        }, vY.prototype.toArray = function(YY) {
          return xY(this, YY)
        }, gY.prototype.toString = function(rY, DY) {
          if (rY === YY && (rY = 10), 10 !== rY) return nY(this, rY, DY);
          for (var FY, AY = this.value, IY = AY.length, RY = String(AY[--IY]); --IY >= 0;) FY = String(AY[IY]), RY += "0000000".slice(FY.length) + FY;
          return (this.sign ? "-" : "") + RY
        }, aY.prototype.toString = function(rY, DY) {
          return rY === YY && (rY = 10), 10 != rY ? nY(this, rY, DY) : String(this.value)
        }, vY.prototype.toString = aY.prototype.toString, vY.prototype.toJSON = gY.prototype.toJSON = aY.prototype.toJSON = function() {
          return this.toString()
        }, gY.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, gY.prototype.toJSNumber = gY.prototype.valueOf, aY.prototype.valueOf = function() {
          return this.value
        }, aY.prototype.toJSNumber = aY.prototype.valueOf, vY.prototype.valueOf = vY.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var LY = 0; LY < 1e3; LY++) OY[LY] = UY(LY), LY > 0 && (OY[-LY] = UY(-LY));
        return OY.one = OY[1], OY.zero = OY[0], OY.minusOne = OY[-1], OY.max = XY, OY.min = qY, OY.gcd = pY, OY.lcm = function(YY, rY) {
          return YY = UY(YY).abs(), rY = UY(rY).abs(), YY.divide(pY(YY, rY)).multiply(rY)
        }, OY.isInstance = function(YY) {
          return YY instanceof gY || YY instanceof aY || YY instanceof vY
        }, OY.randBetween = function(YY, rY, FY) {
          YY = UY(YY), rY = UY(rY);
          var AY = FY || Math.random,
            IY = qY(YY, rY),
            RY = XY(YY, rY).subtract(IY).add(1);
          if (RY.isSmall) return IY.add(Math.floor(AY() * RY));
          for (var gY = xY(RY, DY).value, aY = [], vY = !0, uY = 0; uY < gY.length; uY++) {
            var sY = vY ? gY[uY] : DY,
              iY = oY(AY() * sY);
            aY.push(iY), iY < sY && (vY = !1)
          }
          return IY.add(OY.grY(aY, DY, !1))
        }, OY.grY = function(YY, rY, DY) {
          return GY(YY.map(UY), UY(rY || 10), DY)
        }, OY
      }();
      YY.hasOwnProperty("exports") && (YY.exports = rY)
    }(ED);
    var mD = IY(ED.exports);

    function VD(YY, rY, DY) {
      let FY = 0;
      for (let AY = 0; AY < DY; AY++) {
        const DY = YY[rY + AY];
        if (void 0 === DY) break;
        FY += DY * 16 ** AY
      }
      return FY
    }

    function SD(YY) {
      const rY = [];
      for (let DY = 0; DY < YY.length; DY++) {
        let FY = Number(YY[DY]);
        for (let YY = 0; FY || YY < rY.length; YY++) FY += 10 * (rY[YY] || 0), rY[YY] = FY % 16, FY = (FY - rY[YY]) / 16
      }
      return rY
    }
    class lD {
      static fromString(YY) {
        return new lD(function(YY) {
          const rY = SD(YY),
            DY = Array(4);
          for (let FY = 0; FY < 4; FY++) DY[3 - FY] = VD(rY, 4 * FY, 4);
          return DY
        }(YY), YY)
      }
      static fromBit(YY) {
        const rY = Array(4),
          DY = Math.floor(YY / 16);
        for (let FY = 0; FY < 4; FY++) rY[3 - FY] = FY === DY ? 1 << YY - 16 * DY : 0;
        return new lD(rY)
      }
      constructor(YY, rY) {
        this.parts = YY, this.str = rY
      }
      and(YY) {
        let {
          parts: rY
        } = YY;
        return new lD(this.parts.map(((YY, DY) => YY & rY[DY])))
      }
      or(YY) {
        let {
          parts: rY
        } = YY;
        return new lD(this.parts.map(((YY, DY) => YY | rY[DY])))
      }
      xor(YY) {
        let {
          parts: rY
        } = YY;
        return new lD(this.parts.map(((YY, DY) => YY ^ rY[DY])))
      }
      not() {
        return new lD(this.parts.map((YY => ~YY)))
      }
      equals(YY) {
        let {
          parts: rY
        } = YY;
        return this.parts.every(((YY, DY) => YY === rY[DY]))
      }
      toString() {
        if (null != this.str) return this.str;
        const YY = new Array(16);
        return this.parts.forEach(((rY, DY) => {
          const FY = SD(rY.toString());
          for (let AY = 0; AY < 4; AY++) YY[AY + 4 * DY] = FY[3 - AY] || 0
        })), this.str = mD.grY(YY, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const TD = function() {
      try {
        return BigInt, !0
      } catch (YY) {
        return !1
      }
    }();
    TD && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const eD = {},
      ND = TD ? function(YY) {
        return BigInt(YY)
      } : function(YY) {
        return YY instanceof lD ? YY : ("number" === typeof YY && (YY = YY.toString()), null != eD[YY] || (eD[YY] = lD.fromString(YY)), eD[YY])
      },
      BD = ND(0),
      cD = TD ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BD) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BD)
      } : function() {
        let YY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BD;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BD).and(YY)
      },
      KD = TD ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BD) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BD)
      } : function() {
        let YY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BD;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BD).or(YY)
      },
      HD = TD ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BD) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BD)
      } : function() {
        let YY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : BD;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BD).xor(YY)
      },
      zD = TD ? function(YY, rY) {
        return YY === rY
      } : function(YY, rY) {
        return null == YY || null == rY ? YY == rY : YY.equals(rY)
      };
    var ZD, CD, fD, jD, hD = {
      combine: function() {
        let YY = arguments.length <= 0 ? void 0 : arguments[0];
        for (let rY = 1; rY < arguments.length; rY++) YY = KD(YY, rY < 0 || arguments.length <= rY ? void 0 : arguments[rY]);
        return YY
      },
      add: function(YY, rY) {
        return rY === BD ? YY : KD(YY, rY)
      },
      remove: function(YY, rY) {
        return rY === BD ? YY : HD(YY, cD(YY, rY))
      },
      filter: cD,
      invert: TD ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BD)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BD).not()
      },
      has: function(YY, rY) {
        return zD(cD(YY, rY), rY)
      },
      hasAny: function(YY, rY) {
        return !zD(cD(YY, rY), BD)
      },
      equals: zD,
      deserialize: ND,
      getFlag: TD ? function(YY) {
        return BigInt(1) << BigInt(YY)
      } : function(YY) {
        return lD.fromBit(YY)
      }
    };
    ! function(YY) {
      YY[YY.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", YY[YY.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", YY[YY.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", YY[YY.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", YY[YY.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", YY[YY.RATELIMITED = 4002] = "RATELIMITED", YY[YY.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", YY[YY.INVALID_VERSION = 4004] = "INVALID_VERSION", YY[YY.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(ZD || (ZD = {})),
    function(YY) {
      YY[YY.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", YY[YY.INVALID_COMMAND = 4002] = "INVALID_COMMAND", YY[YY.INVALID_EVENT = 4004] = "INVALID_EVENT", YY[YY.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(CD || (CD = {})),
    function(YY) {
      YY.LANDSCAPE = "landscape", YY.PORTRAIT = "portrait"
    }(fD || (fD = {})),
    function(YY) {
      YY.MOBILE = "mobile", YY.DESKTOP = "desktop"
    }(jD || (jD = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: hD.getFlag(0),
      ADMINISTRATOR: hD.getFlag(3)
    });

    function dD(YY) {
      return iD((rY => {
        var DY;
        const [FY] = null !== (DY = Object.entries(YY).find((YY => {
          let [, DY] = YY;
          return DY === rY
        }))) && void 0 !== DY ? DY : [];
        return null != rY && void 0 === FY ? YY.UNHANDLED : rY
      }), fr().or(jr()))
    }
    const JD = WD.object({
        image_url: WD.string()
      }),
      MD = WD.object({
        mediaUrl: WD.string().max(1024)
      }),
      wD = WD.object({
        access_token: WD.union([WD.string(), WD.null()]).optional()
      }),
      bD = WD.object({
        access_token: WD.string(),
        user: WD.object({
          username: WD.string(),
          discriminator: WD.string(),
          id: WD.string(),
          avatar: WD.union([WD.string(), WD.null()]).optional(),
          public_flags: WD.number(),
          global_name: WD.union([WD.string(), WD.null()]).optional()
        }),
        scopes: WD.array(function(YY) {
          const rY = zr().transform((rY => {
            const DY = YY.safeParse(rY);
            return DY.success ? DY.data : YY._def.defaultValue()
          }));
          return rY.overlayType = YY, rY
        }(WD.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(WD.literal(-1)).default(-1))),
        expires: WD.string(),
        application: WD.object({
          description: WD.string(),
          icon: WD.union([WD.string(), WD.null()]).optional(),
          id: WD.string(),
          rpc_origins: WD.array(WD.string()).optional(),
          name: WD.string()
        })
      }),
      XD = WD.object({
        participants: WD.array(WD.object({
          id: WD.string(),
          username: WD.string(),
          global_name: WD.union([WD.string(), WD.null()]).optional(),
          discriminator: WD.string(),
          avatar: WD.union([WD.string(), WD.null()]).optional(),
          flags: WD.number(),
          bot: WD.boolean(),
          avatar_decoration_data: WD.union([WD.object({
            asset: WD.string(),
            skuId: WD.string().optional()
          }), WD.null()]).optional(),
          premium_type: WD.union([WD.number(), WD.null()]).optional(),
          nickname: WD.string().optional()
        }))
      });
    var qD;
    ! function(YY) {
      YY.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", YY.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", YY.AUTHENTICATE = "AUTHENTICATE", YY.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(qD || (qD = {}));
    const pD = WD.object({}).optional().nullable(),
      kD = WD.void(),
      GD = {
        [qD.INITIATE_IMAGE_UPLOAD]: {
          request: kD,
          response: JD
        },
        [qD.OPEN_SHARE_MOMENT_DIALOG]: {
          request: MD,
          response: pD
        },
        [qD.AUTHENTICATE]: {
          request: wD,
          response: bD
        },
        [qD.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: kD,
          response: XD
        }
      },
      xD = "DISPATCH";
    var nD;
    ! function(YY) {
      YY.AUTHORIZE = "AUTHORIZE", YY.AUTHENTICATE = "AUTHENTICATE", YY.GET_GUILDS = "GET_GUILDS", YY.GET_GUILD = "GET_GUILD", YY.GET_CHANNEL = "GET_CHANNEL", YY.GET_CHANNELS = "GET_CHANNELS", YY.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", YY.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", YY.SUBSCRIBE = "SUBSCRIBE", YY.UNSUBSCRIBE = "UNSUBSCRIBE", YY.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", YY.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", YY.SET_ACTIVITY = "SET_ACTIVITY", YY.GET_SKUS = "GET_SKUS", YY.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", YY.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", YY.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", YY.START_PURCHASE = "START_PURCHASE", YY.SET_CONFIG = "SET_CONFIG", YY.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", YY.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", YY.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", YY.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", YY.CAPTURE_LOG = "CAPTURE_LOG", YY.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", YY.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", YY.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", YY.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", YY.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", YY.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", YY.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(nD || (nD = {}));
    const PD = nr({
        cmd: fr(),
        data: pr(),
        evt: Xr(),
        nonce: fr()
      }).passthrough(),
      UD = (dD(Object.assign(Object.assign({}, bD.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), nr({
        id: fr(),
        username: fr(),
        discriminator: fr(),
        global_name: fr().optional().nullable(),
        avatar: fr().optional().nullable(),
        avatar_decoration_data: nr({
          asset: fr(),
          sku_id: fr().optional()
        }).nullable(),
        bot: Jr(),
        flags: jr().optional().nullable(),
        premium_type: jr().optional().nullable()
      })),
      LD = nr({
        user: UD,
        nick: fr().optional().nullable(),
        roles: xr(fr()),
        joined_at: fr(),
        deaf: Jr(),
        mute: Jr()
      }),
      tD = nr({
        id: fr(),
        name: fr().optional().nullable(),
        roles: xr(fr()).optional().nullable(),
        user: UD.optional().nullable(),
        require_colons: Jr().optional().nullable(),
        managed: Jr().optional().nullable(),
        animated: Jr().optional().nullable(),
        available: Jr().optional().nullable()
      }),
      YF = nr({
        mute: Jr(),
        deaf: Jr(),
        self_mute: Jr(),
        self_deaf: Jr(),
        suppress: Jr()
      }),
      rF = nr({
        mute: Jr(),
        nick: fr(),
        user: UD,
        voice_state: YF,
        volume: jr()
      }),
      DF = dD({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      FF = nr({
        name: fr(),
        type: jr(),
        url: fr().optional().nullable(),
        created_at: jr().optional().nullable(),
        timestamps: nr({
          start: jr(),
          end: jr()
        }).partial().optional().nullable(),
        application_id: fr().optional().nullable(),
        details: fr().optional().nullable(),
        state: fr().optional().nullable(),
        emoji: tD.optional().nullable(),
        party: nr({
          id: fr().optional().nullable(),
          size: xr(jr()).optional().nullable()
        }).optional().nullable(),
        assets: nr({
          large_image: fr().nullable(),
          large_text: fr().nullable(),
          small_image: fr().nullable(),
          small_text: fr().nullable()
        }).partial().optional().nullable(),
        secrets: nr({
          join: fr(),
          match: fr()
        }).partial().optional().nullable(),
        instance: Jr().optional().nullable(),
        flags: jr().optional().nullable()
      }),
      AF = nr({
        id: fr(),
        type: dD({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: fr(),
        deny: fr()
      }),
      IF = {
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
      RF = nr({
        id: fr(),
        type: dD(IF),
        guild_id: fr().optional().nullable(),
        position: jr().optional().nullable(),
        permission_overwrites: xr(AF).optional().nullable(),
        name: fr().optional().nullable(),
        topic: fr().optional().nullable(),
        nsfw: Jr().optional().nullable(),
        last_message_id: fr().optional().nullable(),
        bitrate: jr().optional().nullable(),
        user_limit: jr().optional().nullable(),
        rate_limit_per_user: jr().optional().nullable(),
        recipients: xr(UD).optional().nullable(),
        icon: fr().optional().nullable(),
        owner_id: fr().optional().nullable(),
        application_id: fr().optional().nullable(),
        parent_id: fr().optional().nullable(),
        last_pin_timestamp: fr().optional().nullable()
      }),
      OF = nr({
        user: UD,
        guild_id: fr(),
        status: DF,
        activities: xr(FF),
        client_status: nr({
          desktop: DF,
          mobile: DF,
          web: DF
        }).partial()
      }),
      gF = nr({
        id: fr(),
        name: fr(),
        color: jr(),
        hoist: Jr(),
        position: jr(),
        permissions: fr(),
        managed: Jr(),
        mentionable: Jr()
      }),
      aF = (nr({
        id: fr(),
        name: fr(),
        owner_id: fr(),
        icon: fr().nullable(),
        icon_hash: fr().optional().nullable(),
        splash: fr().nullable(),
        discovery_splash: fr().nullable(),
        owner: Jr().optional().nullable(),
        permissions: fr().optional().nullable(),
        region: fr(),
        afk_channel_id: fr().nullable(),
        afk_timeout: jr(),
        widget_enabled: Jr().optional().nullable(),
        widget_channel_id: fr().optional().nullable(),
        verification_level: jr(),
        default_message_notifications: jr(),
        explicit_content_filter: jr(),
        roles: xr(gF),
        emojis: xr(tD),
        features: xr(fr()),
        mfa_level: jr(),
        application_id: fr().nullable(),
        system_channel_id: fr().nullable(),
        system_channel_flags: jr(),
        rules_channel_id: fr().nullable(),
        joined_at: fr().optional().nullable(),
        large: Jr().optional().nullable(),
        unavailable: Jr().optional().nullable(),
        member_count: jr().optional().nullable(),
        voice_states: xr(YF).optional().nullable(),
        members: xr(LD).optional().nullable(),
        channels: xr(RF).optional().nullable(),
        presences: xr(OF).optional().nullable(),
        max_presences: jr().optional().nullable(),
        max_members: jr().optional().nullable(),
        vanity_url_code: fr().nullable(),
        description: fr().nullable(),
        banner: fr().nullable(),
        premium_tier: jr(),
        premium_subscription_count: jr().optional().nullable(),
        preferred_locale: fr(),
        public_updates_channel_id: fr().nullable(),
        max_video_channel_users: jr().optional().nullable(),
        approximate_member_count: jr().optional().nullable(),
        approximate_presence_count: jr().optional().nullable()
      }), nr({
        id: fr(),
        guild_id: fr(),
        type: jr(),
        name: fr()
      })),
      vF = nr({
        id: fr(),
        filename: fr(),
        size: jr(),
        url: fr(),
        proxy_url: fr(),
        height: jr().optional().nullable(),
        width: jr().optional().nullable()
      }),
      uF = nr({
        text: fr(),
        icon_url: fr().optional().nullable(),
        proxy_icon_url: fr().optional().nullable()
      }),
      sF = nr({
        url: fr().optional().nullable(),
        proxy_url: fr().optional().nullable(),
        height: jr().optional().nullable(),
        width: jr().optional().nullable()
      }),
      iF = sF.omit({
        proxy_url: !0
      }),
      yF = nr({
        name: fr().optional().nullable(),
        url: fr().optional().nullable()
      }),
      QF = nr({
        name: fr().optional().nullable(),
        url: fr().optional().nullable(),
        icon_url: fr().optional().nullable(),
        proxy_icon_url: fr().optional().nullable()
      }),
      oF = nr({
        name: fr(),
        value: fr(),
        inline: Jr()
      }),
      WF = nr({
        title: fr().optional().nullable(),
        type: fr().optional().nullable(),
        description: fr().optional().nullable(),
        url: fr().optional().nullable(),
        timestamp: fr().optional().nullable(),
        color: jr().optional().nullable(),
        footer: uF.optional().nullable(),
        image: sF.optional().nullable(),
        thumbnail: sF.optional().nullable(),
        video: iF.optional().nullable(),
        provider: yF.optional().nullable(),
        author: QF.optional().nullable(),
        fields: xr(oF).optional().nullable()
      }),
      EF = nr({
        count: jr(),
        me: Jr(),
        emoji: tD
      }),
      mF = nr({
        type: jr(),
        party_id: fr().optional().nullable()
      }),
      VF = nr({
        id: fr(),
        cover_image: fr().optional().nullable(),
        description: fr(),
        icon: fr().optional().nullable(),
        name: fr()
      }),
      SF = nr({
        message_id: fr().optional().nullable(),
        channel_id: fr().optional().nullable(),
        guild_id: fr().optional().nullable()
      }),
      lF = nr({
        id: fr(),
        channel_id: fr(),
        guild_id: fr().optional().nullable(),
        author: UD.optional().nullable(),
        member: LD.optional().nullable(),
        content: fr(),
        timestamp: fr(),
        edited_timestamp: fr().optional().nullable(),
        tts: Jr(),
        mention_everyone: Jr(),
        mentions: xr(UD),
        mention_roles: xr(fr()),
        mention_channels: xr(aF),
        attachments: xr(vF),
        embeds: xr(WF),
        reactions: xr(EF).optional().nullable(),
        nonce: Ur([fr(), jr()]).optional().nullable(),
        pinned: Jr(),
        webhook_id: fr().optional().nullable(),
        type: jr(),
        activity: mF.optional().nullable(),
        application: VF.optional().nullable(),
        message_reference: SF.optional().nullable(),
        flags: jr().optional().nullable(),
        stickers: xr(pr()).optional().nullable(),
        referenced_message: pr().optional().nullable()
      }),
      TF = nr({
        id: fr(),
        name: fr()
      }),
      eF = nr({
        type: dD({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: jr(),
        name: fr()
      }),
      NF = nr({
        type: dD({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: Jr(),
        threshold: jr(),
        shortcut: xr(eF),
        delay: jr()
      }),
      BF = nr({
        device_id: fr(),
        volume: jr(),
        available_devices: xr(TF)
      }),
      cF = (nr({
        type: dD({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: fr(),
        vendor: nr({
          name: fr(),
          url: fr()
        }),
        model: nr({
          name: fr(),
          url: fr()
        }),
        related: xr(fr()),
        echo_cancellation: Jr().optional().nullable(),
        noise_suppression: Jr().optional().nullable(),
        automatic_gain_control: Jr().optional().nullable(),
        hardware_mute: Jr().optional().nullable()
      }), nr({
        id: fr(),
        name: fr(),
        type: dD({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: nr({
          amount: jr(),
          currency: fr()
        }),
        application_id: fr(),
        flags: jr(),
        release_date: fr().nullable()
      })),
      KF = nr({
        id: fr(),
        sku_id: fr(),
        application_id: fr(),
        user_id: fr(),
        gift_code_flags: jr(),
        type: dD({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: fr().optional().nullable(),
        branches: xr(fr()).optional().nullable(),
        starts_at: fr().optional().nullable(),
        ends_at: fr().optional().nullable(),
        parent_id: fr().optional().nullable(),
        consumed: Jr().optional().nullable(),
        deleted: Jr().optional().nullable(),
        gift_code_batch_id: fr().optional().nullable()
      }),
      HF = (dD({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), dD({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      zF = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      ZF = (dD(zF), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      CF = (dD(ZF), "ERROR");
    var fF;
    ! function(YY) {
      YY.READY = "READY", YY.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", YY.SPEAKING_START = "SPEAKING_START", YY.SPEAKING_STOP = "SPEAKING_STOP", YY.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", YY.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", YY.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", YY.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", YY.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", YY.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(fF || (fF = {}));
    const jF = PD.extend({
        evt: gD(fF),
        nonce: fr().nullable(),
        cmd: RD(xD),
        data: nr({}).passthrough()
      }),
      hF = PD.extend({
        evt: RD(CF),
        data: nr({
          code: jr(),
          message: fr().optional()
        }).passthrough(),
        cmd: gD(nD),
        nonce: fr().nullable()
      }),
      dF = jF.extend({
        evt: fr()
      }),
      JF = Ur([jF, dF, hF]);
    const MF = {
      [fF.READY]: {
        payload: jF.extend({
          evt: RD(fF.READY),
          data: nr({
            v: jr(),
            config: nr({
              cdn_host: fr().optional(),
              api_endpoint: fr(),
              environment: fr()
            }),
            user: nr({
              id: fr(),
              username: fr(),
              discriminator: fr(),
              avatar: fr().optional()
            }).optional()
          })
        })
      },
      [fF.VOICE_STATE_UPDATE]: {
        payload: jF.extend({
          evt: RD(fF.VOICE_STATE_UPDATE),
          data: rF
        }),
        subscribeArgs: nr({
          channel_id: fr()
        })
      },
      [fF.SPEAKING_START]: {
        payload: jF.extend({
          evt: RD(fF.SPEAKING_START),
          data: nr({
            lobby_id: fr().optional(),
            channel_id: fr().optional(),
            user_id: fr()
          })
        }),
        subscribeArgs: nr({
          lobby_id: fr().nullable().optional(),
          channel_id: fr().nullable().optional()
        })
      },
      [fF.SPEAKING_STOP]: {
        payload: jF.extend({
          evt: RD(fF.SPEAKING_STOP),
          data: nr({
            lobby_id: fr().optional(),
            channel_id: fr().optional(),
            user_id: fr()
          })
        }),
        subscribeArgs: nr({
          lobby_id: fr().nullable().optional(),
          channel_id: fr().nullable().optional()
        })
      },
      [fF.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: jF.extend({
          evt: RD(fF.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: nr({
            layout_mode: dD(ZF)
          })
        })
      },
      [fF.ORIENTATION_UPDATE]: {
        payload: jF.extend({
          evt: RD(fF.ORIENTATION_UPDATE),
          data: nr({
            screen_orientation: dD(zF),
            orientation: gD(fD)
          })
        })
      },
      [fF.CURRENT_USER_UPDATE]: {
        payload: jF.extend({
          evt: RD(fF.CURRENT_USER_UPDATE),
          data: UD
        })
      },
      [fF.ENTITLEMENT_CREATE]: {
        payload: jF.extend({
          evt: RD(fF.ENTITLEMENT_CREATE),
          data: nr({
            entitlement: KF
          })
        })
      },
      [fF.THERMAL_STATE_UPDATE]: {
        payload: jF.extend({
          evt: RD(fF.THERMAL_STATE_UPDATE),
          data: nr({
            thermal_state: HF
          })
        })
      },
      [fF.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: jF.extend({
          evt: RD(fF.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: nr({
            participants: XD.shape.participants
          })
        })
      }
    };
    const wF = nr({}).nullable(),
      bF = nr({
        code: fr()
      }),
      XF = nr({
        guilds: xr(nr({
          id: fr(),
          name: fr()
        }))
      }),
      qF = nr({
        id: fr(),
        name: fr(),
        icon_url: fr().optional(),
        members: xr(LD)
      }),
      pF = nr({
        id: fr(),
        type: dD(IF),
        guild_id: fr().optional().nullable(),
        name: fr().optional().nullable(),
        topic: fr().optional().nullable(),
        bitrate: jr().optional().nullable(),
        user_limit: jr().optional().nullable(),
        position: jr().optional().nullable(),
        voice_states: xr(rF),
        messages: xr(lF)
      }),
      kF = nr({
        channels: xr(RF)
      }),
      GF = (pF.nullable(), pF.nullable()),
      xF = pF.nullable(),
      nF = (nr({
        input: BF,
        output: BF,
        mode: NF,
        automatic_gain_control: Jr(),
        echo_cancellation: Jr(),
        noise_suppression: Jr(),
        qos: Jr(),
        silence_warning: Jr(),
        deaf: Jr(),
        mute: Jr()
      }), nr({
        evt: fr()
      })),
      PF = nr({
        shortcut: eF
      }),
      UF = FF,
      LF = nr({
        skus: xr(cF)
      }),
      tF = nr({
        entitlements: xr(KF)
      }),
      YA = xr(KF).nullable(),
      rA = nr({
        use_interactive_pip: Jr()
      }),
      DA = nr({
        locale: fr()
      }),
      FA = nr({
        enabled: Jr()
      }),
      AA = nr({
        permissions: dr().or(fr())
      }),
      IA = nr({
        iosKeyboardResizesView: uD(Jr())
      }),
      RA = PD.extend({
        cmd: gD(nD),
        evt: Xr()
      });

    function OA(YY) {
      let {
        cmd: rY,
        data: DY
      } = YY;
      switch (rY) {
        case nD.AUTHORIZE:
          return bF.parse(DY);
        case nD.CAPTURE_SHORTCUT:
          return PF.parse(DY);
        case nD.ENCOURAGE_HW_ACCELERATION:
          return FA.parse(DY);
        case nD.GET_CHANNEL:
          return pF.parse(DY);
        case nD.GET_CHANNELS:
          return kF.parse(DY);
        case nD.GET_CHANNEL_PERMISSIONS:
          return AA.parse(DY);
        case nD.GET_GUILD:
          return qF.parse(DY);
        case nD.GET_GUILDS:
          return XF.parse(DY);
        case nD.GET_PLATFORM_BEHAVIORS:
          return IA.parse(DY);
        case nD.GET_CHANNEL:
          return pF.parse(DY);
        case nD.SELECT_TEXT_CHANNEL:
          return xF.parse(DY);
        case nD.SELECT_VOICE_CHANNEL:
          return GF.parse(DY);
        case nD.SET_ACTIVITY:
          return UF.parse(DY);
        case nD.GET_SKUS_EMBEDDED:
          return LF.parse(DY);
        case nD.GET_ENTITLEMENTS_EMBEDDED:
          return tF.parse(DY);
        case nD.SET_CONFIG:
          return rA.parse(DY);
        case nD.START_PURCHASE:
          return YA.parse(DY);
        case nD.SUBSCRIBE:
        case nD.UNSUBSCRIBE:
          return nF.parse(DY);
        case nD.USER_SETTINGS_GET_LOCALE:
          return DA.parse(DY);
        case nD.OPEN_EXTERNAL_LINK:
        case nD.SET_ORIENTATION_LOCK_STATE:
        case nD.SET_CERTIFIED_DEVICES:
        case nD.SEND_ANALYTICS_EVENT:
        case nD.OPEN_INVITE_DIALOG:
        case nD.CAPTURE_LOG:
        case nD.GET_SKUS:
        case nD.GET_ENTITLEMENTS:
          return wF.parse(DY);
        case nD.AUTHENTICATE:
        case nD.INITIATE_IMAGE_UPLOAD:
        case nD.OPEN_SHARE_MOMENT_DIALOG:
        case nD.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: YY
          } = GD[rY];
          return YY.parse(DY);
        default:
          ! function(YY, rY) {
            throw rY
          }(0, new Error(`Unrecognized command ${rY}`))
      }
    }
    nr({
      frame_id: fr(),
      platform: gD(jD).optional().nullable()
    }), nr({
      v: RD(1),
      encoding: RD("json").optional(),
      client_id: fr(),
      frame_id: fr()
    });
    const gA = nr({
        code: jr(),
        message: fr().optional()
      }),
      aA = nr({
        evt: fr().nullable(),
        nonce: fr().nullable(),
        data: pr().nullable(),
        cmd: fr()
      }).passthrough();

    function vA(YY) {
      const rY = aA.parse(YY);
      return null != rY.evt ? rY.evt === CF ? hF.parse(rY) : function(YY) {
        const rY = YY.evt;
        if (!(rY in fF)) throw new Error(`Unrecognized event type ${YY.evt}`);
        return MF[rY].payload.parse(YY)
      }(JF.parse(rY)) : function(YY) {
        return Object.assign(Object.assign({}, YY), {
          data: OA(YY)
        })
      }(RA.passthrough().parse(rY))
    }

    function uA(YY, rY, DY) {
      let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const AY = PD.extend({
        cmd: RD(rY),
        data: DY
      });
      return async DY => {
        const IY = await YY({
          cmd: rY,
          args: DY,
          transfer: FY(DY)
        });
        return AY.parse(IY).data
      }
    }

    function sA(YY) {
      let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const DY = GD[YY].response,
        FY = PD.extend({
          cmd: RD(YY),
          data: DY
        });
      return DY => async AY => {
        const IY = await DY({
          cmd: YY,
          args: AY,
          transfer: rY(AY)
        });
        return FY.parse(IY).data
      }
    }
    const iA = sA(qD.AUTHENTICATE),
      yA = YY => uA(YY, nD.AUTHORIZE, bF),
      QA = YY => uA(YY, nD.CAPTURE_LOG, wF),
      oA = YY => uA(YY, nD.ENCOURAGE_HW_ACCELERATION, FA),
      WA = YY => uA(YY, nD.GET_ENTITLEMENTS_EMBEDDED, tF),
      EA = YY => uA(YY, nD.GET_SKUS_EMBEDDED, LF),
      mA = YY => uA(YY, nD.GET_CHANNEL_PERMISSIONS, AA),
      VA = YY => uA(YY, nD.GET_PLATFORM_BEHAVIORS, IA),
      SA = YY => uA(YY, nD.OPEN_EXTERNAL_LINK, wF),
      lA = YY => uA(YY, nD.OPEN_INVITE_DIALOG, wF),
      TA = sA(qD.OPEN_SHARE_MOMENT_DIALOG);
    FF.Ps({
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
      type: FF.shape.type.optional(),
      instance: FF.shape.instance.optional()
    }).nullable();
    const eA = YY => uA(YY, nD.SET_ACTIVITY, UF),
      NA = YY => uA(YY, nD.SET_CONFIG, rA);
    const BA = YY => ({
        lock_state: YY.lock_state,
        picture_in_picture_lock_state: YY.picture_in_picture_lock_state
      }),
      cA = YY => function(YY) {
        let {
          sendCommand: rY,
          cmd: DY,
          response: FY,
          fallbackTransform: AY,
          transferTransform: IY = () => {}
        } = YY;
        const RY = PD.extend({
          cmd: RD(DY),
          data: FY
        });
        return async YY => {
          try {
            const FY = await rY({
              cmd: DY,
              args: YY,
              transfer: IY(YY)
            });
            return RY.parse(FY).data
          } catch (FY) {
            if (FY.code === CD.INVALID_PAYLOAD) {
              const FY = AY(YY),
                OY = await rY({
                  cmd: DY,
                  args: FY,
                  transfer: IY(FY)
                });
              return RY.parse(OY).data
            }
            throw FY
          }
        }
      }({
        sendCommand: YY,
        cmd: nD.SET_ORIENTATION_LOCK_STATE,
        response: wF,
        fallbackTransform: BA
      }),
      KA = YY => uA(YY, nD.START_PURCHASE, YA),
      HA = YY => uA(YY, nD.USER_SETTINGS_GET_LOCALE, DA),
      zA = sA(qD.INITIATE_IMAGE_UPLOAD),
      ZA = YY => uA(YY, nD.GET_CHANNEL, pF),
      CA = sA(qD.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var fA = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function jA(YY) {
      return "string" === typeof YY && fA.test(YY)
    }
    for (var hA = [], dA = 0; dA < 256; ++dA) hA.push((dA + 256).toString(16).substr(1));

    function JA(YY) {
      var rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        DY = (hA[YY[rY + 0]] + hA[YY[rY + 1]] + hA[YY[rY + 2]] + hA[YY[rY + 3]] + "-" + hA[YY[rY + 4]] + hA[YY[rY + 5]] + "-" + hA[YY[rY + 6]] + hA[YY[rY + 7]] + "-" + hA[YY[rY + 8]] + hA[YY[rY + 9]] + "-" + hA[YY[rY + 10]] + hA[YY[rY + 11]] + hA[YY[rY + 12]] + hA[YY[rY + 13]] + hA[YY[rY + 14]] + hA[YY[rY + 15]]).toLowerCase();
      if (!jA(DY)) throw TypeError("Stringified UUID is invalid");
      return DY
    }
    var MA;

    function wA(YY, rY, DY) {
      function FY(YY, FY, AY, IY) {
        if ("string" === typeof YY && (YY = function(YY) {
            YY = unescape(encodeURIComponent(YY));
            for (var rY = [], DY = 0; DY < YY.length; ++DY) rY.push(YY.charCodeAt(DY));
            return rY
          }(YY)), "string" === typeof FY && (FY = function(YY) {
            if (!jA(YY)) throw TypeError("Invalid UUID");
            var rY, DY = new Uint8Array(16);
            return DY[0] = (rY = parseInt(YY.slice(0, 8), 16)) >>> 24, DY[1] = rY >>> 16 & 255, DY[2] = rY >>> 8 & 255, DY[3] = 255 & rY, DY[4] = (rY = parseInt(YY.slice(9, 13), 16)) >>> 8, DY[5] = 255 & rY, DY[6] = (rY = parseInt(YY.slice(14, 18), 16)) >>> 8, DY[7] = 255 & rY, DY[8] = (rY = parseInt(YY.slice(19, 23), 16)) >>> 8, DY[9] = 255 & rY, DY[10] = (rY = parseInt(YY.slice(24, 36), 16)) / 1099511627776 & 255, DY[11] = rY / 4294967296 & 255, DY[12] = rY >>> 24 & 255, DY[13] = rY >>> 16 & 255, DY[14] = rY >>> 8 & 255, DY[15] = 255 & rY, DY
          }(FY)), 16 !== FY.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var RY = new Uint8Array(16 + YY.length);
        if (RY.set(FY), RY.set(YY, FY.length), (RY = DY(RY))[6] = 15 & RY[6] | rY, RY[8] = 63 & RY[8] | 128, AY) {
          IY = IY || 0;
          for (var OY = 0; OY < 16; ++OY) AY[IY + OY] = RY[OY];
          return AY
        }
        return JA(RY)
      }
      try {
        FY.name = YY
      } catch (AY) {}
      return FY.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", FY.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", FY
    }

    function bA(YY) {
      return 14 + (YY + 64 >>> 9 << 4) + 1
    }

    function XA(YY, rY) {
      var DY = (65535 & YY) + (65535 & rY);
      return (YY >> 16) + (rY >> 16) + (DY >> 16) << 16 | 65535 & DY
    }

    function qA(YY, rY, DY, FY, AY, IY) {
      return XA((RY = XA(XA(rY, YY), XA(FY, IY))) << (OY = AY) | RY >>> 32 - OY, DY);
      var RY, OY
    }

    function pA(YY, rY, DY, FY, AY, IY, RY) {
      return qA(rY & DY | ~rY & FY, YY, rY, AY, IY, RY)
    }

    function kA(YY, rY, DY, FY, AY, IY, RY) {
      return qA(rY & FY | DY & ~FY, YY, rY, AY, IY, RY)
    }

    function GA(YY, rY, DY, FY, AY, IY, RY) {
      return qA(rY ^ DY ^ FY, YY, rY, AY, IY, RY)
    }

    function xA(YY, rY, DY, FY, AY, IY, RY) {
      return qA(DY ^ (rY | ~FY), YY, rY, AY, IY, RY)
    }
    wA("v3", 48, (function(YY) {
      if ("string" === typeof YY) {
        var rY = unescape(encodeURIComponent(YY));
        YY = new Uint8Array(rY.length);
        for (var DY = 0; DY < rY.length; ++DY) YY[DY] = rY.charCodeAt(DY)
      }
      return function(YY) {
        for (var rY = [], DY = 32 * YY.length, FY = "0123456789abcdef", AY = 0; AY < DY; AY += 8) {
          var IY = YY[AY >> 5] >>> AY % 32 & 255,
            RY = parseInt(FY.charAt(IY >>> 4 & 15) + FY.charAt(15 & IY), 16);
          rY.push(RY)
        }
        return rY
      }(function(YY, rY) {
        YY[rY >> 5] |= 128 << rY % 32, YY[bA(rY) - 1] = rY;
        for (var DY = 1732584193, FY = -271733879, AY = -1732584194, IY = 271733878, RY = 0; RY < YY.length; RY += 16) {
          var OY = DY,
            gY = FY,
            aY = AY,
            vY = IY;
          DY = pA(DY, FY, AY, IY, YY[RY], 7, -680876936), IY = pA(IY, DY, FY, AY, YY[RY + 1], 12, -389564586), AY = pA(AY, IY, DY, FY, YY[RY + 2], 17, 606105819), FY = pA(FY, AY, IY, DY, YY[RY + 3], 22, -1044525330), DY = pA(DY, FY, AY, IY, YY[RY + 4], 7, -176418897), IY = pA(IY, DY, FY, AY, YY[RY + 5], 12, 1200080426), AY = pA(AY, IY, DY, FY, YY[RY + 6], 17, -1473231341), FY = pA(FY, AY, IY, DY, YY[RY + 7], 22, -45705983), DY = pA(DY, FY, AY, IY, YY[RY + 8], 7, 1770035416), IY = pA(IY, DY, FY, AY, YY[RY + 9], 12, -1958414417), AY = pA(AY, IY, DY, FY, YY[RY + 10], 17, -42063), FY = pA(FY, AY, IY, DY, YY[RY + 11], 22, -1990404162), DY = pA(DY, FY, AY, IY, YY[RY + 12], 7, 1804603682), IY = pA(IY, DY, FY, AY, YY[RY + 13], 12, -40341101), AY = pA(AY, IY, DY, FY, YY[RY + 14], 17, -1502002290), DY = kA(DY, FY = pA(FY, AY, IY, DY, YY[RY + 15], 22, 1236535329), AY, IY, YY[RY + 1], 5, -165796510), IY = kA(IY, DY, FY, AY, YY[RY + 6], 9, -1069501632), AY = kA(AY, IY, DY, FY, YY[RY + 11], 14, 643717713), FY = kA(FY, AY, IY, DY, YY[RY], 20, -373897302), DY = kA(DY, FY, AY, IY, YY[RY + 5], 5, -701558691), IY = kA(IY, DY, FY, AY, YY[RY + 10], 9, 38016083), AY = kA(AY, IY, DY, FY, YY[RY + 15], 14, -660478335), FY = kA(FY, AY, IY, DY, YY[RY + 4], 20, -405537848), DY = kA(DY, FY, AY, IY, YY[RY + 9], 5, 568446438), IY = kA(IY, DY, FY, AY, YY[RY + 14], 9, -1019803690), AY = kA(AY, IY, DY, FY, YY[RY + 3], 14, -187363961), FY = kA(FY, AY, IY, DY, YY[RY + 8], 20, 1163531501), DY = kA(DY, FY, AY, IY, YY[RY + 13], 5, -1444681467), IY = kA(IY, DY, FY, AY, YY[RY + 2], 9, -51403784), AY = kA(AY, IY, DY, FY, YY[RY + 7], 14, 1735328473), DY = GA(DY, FY = kA(FY, AY, IY, DY, YY[RY + 12], 20, -1926607734), AY, IY, YY[RY + 5], 4, -378558), IY = GA(IY, DY, FY, AY, YY[RY + 8], 11, -2022574463), AY = GA(AY, IY, DY, FY, YY[RY + 11], 16, 1839030562), FY = GA(FY, AY, IY, DY, YY[RY + 14], 23, -35309556), DY = GA(DY, FY, AY, IY, YY[RY + 1], 4, -1530992060), IY = GA(IY, DY, FY, AY, YY[RY + 4], 11, 1272893353), AY = GA(AY, IY, DY, FY, YY[RY + 7], 16, -155497632), FY = GA(FY, AY, IY, DY, YY[RY + 10], 23, -1094730640), DY = GA(DY, FY, AY, IY, YY[RY + 13], 4, 681279174), IY = GA(IY, DY, FY, AY, YY[RY], 11, -358537222), AY = GA(AY, IY, DY, FY, YY[RY + 3], 16, -722521979), FY = GA(FY, AY, IY, DY, YY[RY + 6], 23, 76029189), DY = GA(DY, FY, AY, IY, YY[RY + 9], 4, -640364487), IY = GA(IY, DY, FY, AY, YY[RY + 12], 11, -421815835), AY = GA(AY, IY, DY, FY, YY[RY + 15], 16, 530742520), DY = xA(DY, FY = GA(FY, AY, IY, DY, YY[RY + 2], 23, -995338651), AY, IY, YY[RY], 6, -198630844), IY = xA(IY, DY, FY, AY, YY[RY + 7], 10, 1126891415), AY = xA(AY, IY, DY, FY, YY[RY + 14], 15, -1416354905), FY = xA(FY, AY, IY, DY, YY[RY + 5], 21, -57434055), DY = xA(DY, FY, AY, IY, YY[RY + 12], 6, 1700485571), IY = xA(IY, DY, FY, AY, YY[RY + 3], 10, -1894986606), AY = xA(AY, IY, DY, FY, YY[RY + 10], 15, -1051523), FY = xA(FY, AY, IY, DY, YY[RY + 1], 21, -2054922799), DY = xA(DY, FY, AY, IY, YY[RY + 8], 6, 1873313359), IY = xA(IY, DY, FY, AY, YY[RY + 15], 10, -30611744), AY = xA(AY, IY, DY, FY, YY[RY + 6], 15, -1560198380), FY = xA(FY, AY, IY, DY, YY[RY + 13], 21, 1309151649), DY = xA(DY, FY, AY, IY, YY[RY + 4], 6, -145523070), IY = xA(IY, DY, FY, AY, YY[RY + 11], 10, -1120210379), AY = xA(AY, IY, DY, FY, YY[RY + 2], 15, 718787259), FY = xA(FY, AY, IY, DY, YY[RY + 9], 21, -343485551), DY = XA(DY, OY), FY = XA(FY, gY), AY = XA(AY, aY), IY = XA(IY, vY)
        }
        return [DY, FY, AY, IY]
      }(function(YY) {
        if (0 === YY.length) return [];
        for (var rY = 8 * YY.length, DY = new Uint32Array(bA(rY)), FY = 0; FY < rY; FY += 8) DY[FY >> 5] |= (255 & YY[FY / 8]) << FY % 32;
        return DY
      }(YY), 8 * YY.length))
    }));
    var nA = new Uint8Array(16);

    function PA() {
      if (!MA && !(MA = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return MA(nA)
    }

    function UA(YY, rY, DY) {
      var FY = (YY = YY || {}).random || (YY.rng || PA)();
      if (FY[6] = 15 & FY[6] | 64, FY[8] = 63 & FY[8] | 128, rY) {
        DY = DY || 0;
        for (var AY = 0; AY < 16; ++AY) rY[DY + AY] = FY[AY];
        return rY
      }
      return JA(FY)
    }

    function LA(YY, rY, DY, FY) {
      switch (YY) {
        case 0:
          return rY & DY ^ ~rY & FY;
        case 1:
        case 3:
          return rY ^ DY ^ FY;
        case 2:
          return rY & DY ^ rY & FY ^ DY & FY
      }
    }

    function tA(YY, rY) {
      return YY << rY | YY >>> 32 - rY
    }
    wA("v5", 80, (function(YY) {
      var rY = [1518500249, 1859775393, 2400959708, 3395469782],
        DY = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof YY) {
        var FY = unescape(encodeURIComponent(YY));
        YY = [];
        for (var AY = 0; AY < FY.length; ++AY) YY.push(FY.charCodeAt(AY))
      } else Array.isArray(YY) || (YY = Array.prototype.slice.call(YY));
      YY.push(128);
      for (var IY = YY.length / 4 + 2, RY = Math.ceil(IY / 16), OY = new Array(RY), gY = 0; gY < RY; ++gY) {
        for (var aY = new Uint32Array(16), vY = 0; vY < 16; ++vY) aY[vY] = YY[64 * gY + 4 * vY] << 24 | YY[64 * gY + 4 * vY + 1] << 16 | YY[64 * gY + 4 * vY + 2] << 8 | YY[64 * gY + 4 * vY + 3];
        OY[gY] = aY
      }
      OY[RY - 1][14] = 8 * (YY.length - 1) / Math.pow(2, 32), OY[RY - 1][14] = Math.floor(OY[RY - 1][14]), OY[RY - 1][15] = 8 * (YY.length - 1) & 4294967295;
      for (var uY = 0; uY < RY; ++uY) {
        for (var sY = new Uint32Array(80), iY = 0; iY < 16; ++iY) sY[iY] = OY[uY][iY];
        for (var yY = 16; yY < 80; ++yY) sY[yY] = tA(sY[yY - 3] ^ sY[yY - 8] ^ sY[yY - 14] ^ sY[yY - 16], 1);
        for (var QY = DY[0], oY = DY[1], WY = DY[2], EY = DY[3], mY = DY[4], VY = 0; VY < 80; ++VY) {
          var SY = Math.floor(VY / 20),
            lY = tA(QY, 5) + LA(SY, oY, WY, EY) + mY + rY[SY] + sY[VY] >>> 0;
          mY = EY, EY = WY, WY = tA(oY, 30) >>> 0, oY = QY, QY = lY
        }
        DY[0] = DY[0] + QY >>> 0, DY[1] = DY[1] + oY >>> 0, DY[2] = DY[2] + WY >>> 0, DY[3] = DY[3] + EY >>> 0, DY[4] = DY[4] + mY >>> 0
      }
      return [DY[0] >> 24 & 255, DY[0] >> 16 & 255, DY[0] >> 8 & 255, 255 & DY[0], DY[1] >> 24 & 255, DY[1] >> 16 & 255, DY[1] >> 8 & 255, 255 & DY[1], DY[2] >> 24 & 255, DY[2] >> 16 & 255, DY[2] >> 8 & 255, 255 & DY[2], DY[3] >> 24 & 255, DY[3] >> 16 & 255, DY[3] >> 8 & 255, 255 & DY[3], DY[4] >> 24 & 255, DY[4] >> 16 & 255, DY[4] >> 8 & 255, 255 & DY[4]]
    }));
    class YI extends Error {
      constructor(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(rY), this.code = YY, this.message = rY, this.name = "Discord SDK Error"
      }
    }
    const rI = ["log", "warn", "debug", "info", "error"];
    var DI;
    ! function(YY) {
      YY[YY.HANDSHAKE = 0] = "HANDSHAKE", YY[YY.FRAME = 1] = "FRAME", YY[YY.CLOSE = 2] = "CLOSE", YY[YY.HELLO = 3] = "HELLO"
    }(DI || (DI = {}));
    const FI = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class AI {
      getTransfer(YY) {
        var rY;
        switch (YY.cmd) {
          case nD.SUBSCRIBE:
          case nD.UNSUBSCRIBE:
            return;
          default:
            return null !== (rY = YY.transfer) && void 0 !== rY ? rY : void 0
        }
      }
      constructor(YY, rY) {
        var DY;
        if (this.eventBus = new aY, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = YY => {
            var rY;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const DY = UA();
            null === (rY = this.source) || void 0 === rY || rY.postMessage([DI.FRAME, Object.assign(Object.assign({}, YY), {
              nonce: DY
            })], this.sourceOrigin, this.getTransfer(YY));
            return new Promise(((YY, rY) => {
              this.pendingCommands.set(DY, {
                resolve: YY,
                reject: rY
              })
            }))
          }, this.commands = (DY = this.sendCommand, {
            authenticate: iA(DY),
            authorize: yA(DY),
            captureLog: QA(DY),
            encourageHardwareAcceleration: oA(DY),
            getChannel: ZA(DY),
            getChannelPermissions: mA(DY),
            getEntitlements: WA(DY),
            getPlatformBehaviors: VA(DY),
            getSkus: EA(DY),
            openExternalLink: SA(DY),
            openInviteDialog: lA(DY),
            openShareMomentDialog: TA(DY),
            setActivity: eA(DY),
            setConfig: NA(DY),
            setOrientationLockState: cA(DY),
            startPurchase: KA(DY),
            userSettingsGetLocale: HA(DY),
            initiateImageUpload: zA(DY),
            getInstanceConnectedParticipants: CA(DY)
          }), this.handleMessage = YY => {
            if (!FI.has(YY.origin)) return;
            const rY = YY.data;
            if (!Array.isArray(rY)) return;
            const [DY, FY] = rY;
            switch (DY) {
              case DI.HELLO:
                return;
              case DI.CLOSE:
                return this.handleClose(FY);
              case DI.HANDSHAKE:
                return this.handleHandshake();
              case DI.FRAME:
                return this.handleFrame(FY);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = YY, this.configuration = null !== rY && void 0 !== rY ? rY : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = jD.DESKTOP, this.guildId = null, void(this.channelId = null);
        const FY = new URLSearchParams(this._getSearch()),
          AY = FY.get("frame_id");
        if (!AY) throw new Error("frame_id query param is not defined");
        this.frameId = AY;
        const IY = FY.get("instance_id");
        if (!IY) throw new Error("instance_id query param is not defined");
        this.instanceId = IY;
        const RY = FY.get("platform");
        if (!RY) throw new Error("platform query param is not defined");
        if (RY !== jD.DESKTOP && RY !== jD.MOBILE) throw new Error(`Invalid query param "platform" of "${RY}". Valid values are "${jD.DESKTOP}" or "${jD.MOBILE}"`);
        this.platform = RY, this.guildId = FY.get("guild_id"), this.channelId = FY.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var YY;
          return [null !== (YY = window.parent.opener) && void 0 !== YY ? YY : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(YY, rY) {
        var DY;
        window.removeEventListener("message", this.handleMessage);
        const FY = UA();
        null === (DY = this.source) || void 0 === DY || DY.postMessage([DI.CLOSE, {
          code: YY,
          message: rY,
          nonce: FY
        }], this.sourceOrigin)
      }
      async subscribe(YY, rY) {
        for (var DY = arguments.length, FY = new Array(DY > 2 ? DY - 2 : 0), AY = 2; AY < DY; AY++) FY[AY - 2] = arguments[AY];
        const [IY] = FY, RY = this.eventBus.listenerCount(YY), OY = this.eventBus.on(YY, rY);
        return Object.values(fF).includes(YY) && YY !== fF.READY && 0 === RY && await this.sendCommand({
          cmd: nD.SUBSCRIBE,
          args: IY,
          evt: YY
        }), OY
      }
      async unsubscribe(YY, rY) {
        for (var DY = arguments.length, FY = new Array(DY > 2 ? DY - 2 : 0), AY = 2; AY < DY; AY++) FY[AY - 2] = arguments[AY];
        const [IY] = FY;
        return YY !== fF.READY && 1 === this.eventBus.listenerCount(YY) && await this.sendCommand({
          cmd: nD.UNSUBSCRIBE,
          evt: YY,
          args: IY
        }), this.eventBus.off(YY, rY)
      }
      async ready() {
        this.isReady || await new Promise((YY => {
          this.eventBus.once(fF.READY, YY)
        }))
      }
      handshake() {
        var YY;
        null === (YY = this.source) || void 0 === YY || YY.postMessage([DI.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(fF.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const YY = (YY, rY) => {
          this.commands.captureLog({
            level: YY,
            message: rY
          })
        };
        rI.forEach((rY => {
          ! function(YY, rY, DY) {
            const FY = YY[rY],
              AY = YY;
            FY && (YY[rY] = function() {
              const YY = [].slice.call(arguments),
                IY = "" + YY.join(" ");
              DY(rY, IY), FY.apply(AY, YY)
            })
          }(console, rY, YY)
        }))
      }
      handleClose(YY) {
        gA.parse(YY)
      }
      handleHandshake() {}
      handleFrame(YY) {
        var rY, DY;
        let FY;
        try {
          FY = vA(YY)
        } catch (AY) {
          return console.error("Failed to parse", YY), void console.error(AY)
        }
        if ("DISPATCH" === FY.cmd) this.eventBus.emit(FY.evt, FY.data);
        else {
          if (FY.evt === CF) {
            if (null != FY.nonce) return null === (rY = this.pendingCommands.get(FY.nonce)) || void 0 === rY || rY.reject(FY.data), void this.pendingCommands.delete(FY.nonce);
            this.eventBus.emit("error", new YI(FY.data.code, FY.data.message))
          }
          if (null == FY.nonce) return void console.error("Missing nonce", YY);
          null === (DY = this.pendingCommands.get(FY.nonce)) || void 0 === DY || DY.resolve(FY), this.pendingCommands.delete(FY.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var II, RI = 1e9,
      OI = !0,
      gI = "[DecimalError] ",
      aI = gI + "Invalid argument: ",
      vI = gI + "Exponent out of range: ",
      uI = Math.floor,
      sI = Math.pow,
      iI = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      yI = 1e7,
      QI = 9007199254740991,
      oI = uI(1286742750677284.5),
      WI = {};

    function EI(YY, rY) {
      var DY, FY, AY, IY, RY, OY, gY, aY, vY = YY.constructor,
        uY = vY.precision;
      if (!YY.s || !rY.s) return rY.s || (rY = new vY(YY)), OI ? KI(rY, uY) : rY;
      if (gY = YY.d, aY = rY.d, RY = YY.e, AY = rY.e, gY = gY.slice(), IY = RY - AY) {
        for (IY < 0 ? (FY = gY, IY = -IY, OY = aY.length) : (FY = aY, AY = RY, OY = gY.length), IY > (OY = (RY = Math.ceil(uY / 7)) > OY ? RY + 1 : OY + 1) && (IY = OY, FY.length = 1), FY.reverse(); IY--;) FY.push(0);
        FY.reverse()
      }
      for ((OY = gY.length) - (IY = aY.length) < 0 && (IY = OY, FY = aY, aY = gY, gY = FY), DY = 0; IY;) DY = (gY[--IY] = gY[IY] + aY[IY] + DY) / yI | 0, gY[IY] %= yI;
      for (DY && (gY.unshift(DY), ++AY), OY = gY.length; 0 == gY[--OY];) gY.pop();
      return rY.d = gY, rY.e = AY, OI ? KI(rY, uY) : rY
    }

    function mI(YY, rY, DY) {
      if (YY !== ~~YY || YY < rY || YY > DY) throw Error(aI + YY)
    }

    function VI(YY) {
      var rY, DY, FY, AY = YY.length - 1,
        IY = "",
        RY = YY[0];
      if (AY > 0) {
        for (IY += RY, rY = 1; rY < AY; rY++)(DY = 7 - (FY = YY[rY] + "").length) && (IY += NI(DY)), IY += FY;
        (DY = 7 - (FY = (RY = YY[rY]) + "").length) && (IY += NI(DY))
      } else if (0 === RY) return "0";
      for (; RY % 10 === 0;) RY /= 10;
      return IY + RY
    }
    WI.absoluteValue = WI.abs = function() {
      var YY = new this.constructor(this);
      return YY.s && (YY.s = 1), YY
    }, WI.comparedTo = WI.cmp = function(YY) {
      var rY, DY, FY, AY, IY = this;
      if (YY = new IY.constructor(YY), IY.s !== YY.s) return IY.s || -YY.s;
      if (IY.e !== YY.e) return IY.e > YY.e ^ IY.s < 0 ? 1 : -1;
      for (rY = 0, DY = (FY = IY.d.length) < (AY = YY.d.length) ? FY : AY; rY < DY; ++rY)
        if (IY.d[rY] !== YY.d[rY]) return IY.d[rY] > YY.d[rY] ^ IY.s < 0 ? 1 : -1;
      return FY === AY ? 0 : FY > AY ^ IY.s < 0 ? 1 : -1
    }, WI.decimalPlaces = WI.dp = function() {
      var YY = this,
        rY = YY.d.length - 1,
        DY = 7 * (rY - YY.e);
      if (rY = YY.d[rY])
        for (; rY % 10 == 0; rY /= 10) DY--;
      return DY < 0 ? 0 : DY
    }, WI.dividedBy = WI.div = function(YY) {
      return SI(this, new this.constructor(YY))
    }, WI.dividedToIntegerBy = WI.idiv = function(YY) {
      var rY = this.constructor;
      return KI(SI(this, new rY(YY), 0, 1), rY.precision)
    }, WI.equals = WI.eq = function(YY) {
      return !this.cmp(YY)
    }, WI.exponent = function() {
      return TI(this)
    }, WI.greaterThan = WI.gt = function(YY) {
      return this.cmp(YY) > 0
    }, WI.greaterThanOrEqualTo = WI.gte = function(YY) {
      return this.cmp(YY) >= 0
    }, WI.isInteger = WI.isint = function() {
      return this.e > this.d.length - 2
    }, WI.isNegative = WI.isneg = function() {
      return this.s < 0
    }, WI.isPositive = WI.ispos = function() {
      return this.s > 0
    }, WI.isZero = function() {
      return 0 === this.s
    }, WI.lessThan = WI.lt = function(YY) {
      return this.cmp(YY) < 0
    }, WI.lessThanOrEqualTo = WI.lte = function(YY) {
      return this.cmp(YY) < 1
    }, WI.logarithm = WI.log = function(YY) {
      var rY, DY = this,
        FY = DY.constructor,
        AY = FY.precision,
        IY = AY + 5;
      if (void 0 === YY) YY = new FY(10);
      else if ((YY = new FY(YY)).s < 1 || YY.eq(II)) throw Error(gI + "NaN");
      if (DY.s < 1) throw Error(gI + (DY.s ? "NaN" : "-Infinity"));
      return DY.eq(II) ? new FY(0) : (OI = !1, rY = SI(BI(DY, IY), BI(YY, IY), IY), OI = !0, KI(rY, AY))
    }, WI.minus = WI.sub = function(YY) {
      var rY = this;
      return YY = new rY.constructor(YY), rY.s == YY.s ? HI(rY, YY) : EI(rY, (YY.s = -YY.s, YY))
    }, WI.modulo = WI.mod = function(YY) {
      var rY, DY = this,
        FY = DY.constructor,
        AY = FY.precision;
      if (!(YY = new FY(YY)).s) throw Error(gI + "NaN");
      return DY.s ? (OI = !1, rY = SI(DY, YY, 0, 1).times(YY), OI = !0, DY.minus(rY)) : KI(new FY(DY), AY)
    }, WI.naturalExponential = WI.exp = function() {
      return lI(this)
    }, WI.naturalLogarithm = WI.ln = function() {
      return BI(this)
    }, WI.negated = WI.neg = function() {
      var YY = new this.constructor(this);
      return YY.s = -YY.s || 0, YY
    }, WI.plus = WI.add = function(YY) {
      var rY = this;
      return YY = new rY.constructor(YY), rY.s == YY.s ? EI(rY, YY) : HI(rY, (YY.s = -YY.s, YY))
    }, WI.precision = WI.sd = function(YY) {
      var rY, DY, FY, AY = this;
      if (void 0 !== YY && YY !== !!YY && 1 !== YY && 0 !== YY) throw Error(aI + YY);
      if (rY = TI(AY) + 1, DY = 7 * (FY = AY.d.length - 1) + 1, FY = AY.d[FY]) {
        for (; FY % 10 == 0; FY /= 10) DY--;
        for (FY = AY.d[0]; FY >= 10; FY /= 10) DY++
      }
      return YY && rY > DY ? rY : DY
    }, WI.squareRoot = WI.sqrt = function() {
      var YY, rY, DY, FY, AY, IY, RY, OY = this,
        gY = OY.constructor;
      if (OY.s < 1) {
        if (!OY.s) return new gY(0);
        throw Error(gI + "NaN")
      }
      for (YY = TI(OY), OI = !1, 0 == (AY = Math.sqrt(+OY)) || AY == 1 / 0 ? (((rY = VI(OY.d)).length + YY) % 2 == 0 && (rY += "0"), AY = Math.sqrt(rY), YY = uI((YY + 1) / 2) - (YY < 0 || YY % 2), FY = new gY(rY = AY == 1 / 0 ? "1e" + YY : (rY = AY.toExponential()).slice(0, rY.indexOf("e") + 1) + YY)) : FY = new gY(AY.toString()), AY = RY = (DY = gY.precision) + 3;;)
        if (FY = (IY = FY).plus(SI(OY, IY, RY + 2)).times(.5), VI(IY.d).slice(0, RY) === (rY = VI(FY.d)).slice(0, RY)) {
          if (rY = rY.slice(RY - 3, RY + 1), AY == RY && "4999" == rY) {
            if (KI(IY, DY + 1, 0), IY.times(IY).eq(OY)) {
              FY = IY;
              break
            }
          } else if ("9999" != rY) break;
          RY += 4
        } return OI = !0, KI(FY, DY)
    }, WI.times = WI.mul = function(YY) {
      var rY, DY, FY, AY, IY, RY, OY, gY, aY, vY = this,
        uY = vY.constructor,
        sY = vY.d,
        iY = (YY = new uY(YY)).d;
      if (!vY.s || !YY.s) return new uY(0);
      for (YY.s *= vY.s, DY = vY.e + YY.e, (gY = sY.length) < (aY = iY.length) && (IY = sY, sY = iY, iY = IY, RY = gY, gY = aY, aY = RY), IY = [], FY = RY = gY + aY; FY--;) IY.push(0);
      for (FY = aY; --FY >= 0;) {
        for (rY = 0, AY = gY + FY; AY > FY;) OY = IY[AY] + iY[FY] * sY[AY - FY - 1] + rY, IY[AY--] = OY % yI | 0, rY = OY / yI | 0;
        IY[AY] = (IY[AY] + rY) % yI | 0
      }
      for (; !IY[--RY];) IY.pop();
      return rY ? ++DY : IY.shift(), YY.d = IY, YY.e = DY, OI ? KI(YY, uY.precision) : YY
    }, WI.toDecimalPlaces = WI.todp = function(YY, rY) {
      var DY = this,
        FY = DY.constructor;
      return DY = new FY(DY), void 0 === YY ? DY : (mI(YY, 0, RI), void 0 === rY ? rY = FY.rounding : mI(rY, 0, 8), KI(DY, YY + TI(DY) + 1, rY))
    }, WI.toExponential = function(YY, rY) {
      var DY, FY = this,
        AY = FY.constructor;
      return void 0 === YY ? DY = zI(FY, !0) : (mI(YY, 0, RI), void 0 === rY ? rY = AY.rounding : mI(rY, 0, 8), DY = zI(FY = KI(new AY(FY), YY + 1, rY), !0, YY + 1)), DY
    }, WI.toFixed = function(YY, rY) {
      var DY, FY, AY = this,
        IY = AY.constructor;
      return void 0 === YY ? zI(AY) : (mI(YY, 0, RI), void 0 === rY ? rY = IY.rounding : mI(rY, 0, 8), DY = zI((FY = KI(new IY(AY), YY + TI(AY) + 1, rY)).abs(), !1, YY + TI(FY) + 1), AY.isneg() && !AY.isZero() ? "-" + DY : DY)
    }, WI.toInteger = WI.toint = function() {
      var YY = this,
        rY = YY.constructor;
      return KI(new rY(YY), TI(YY) + 1, rY.rounding)
    }, WI.toNumber = function() {
      return +this
    }, WI.toPower = WI.pow = function(YY) {
      var rY, DY, FY, AY, IY, RY, OY = this,
        gY = OY.constructor,
        aY = +(YY = new gY(YY));
      if (!YY.s) return new gY(II);
      if (!(OY = new gY(OY)).s) {
        if (YY.s < 1) throw Error(gI + "Infinity");
        return OY
      }
      if (OY.eq(II)) return OY;
      if (FY = gY.precision, YY.eq(II)) return KI(OY, FY);
      if (RY = (rY = YY.e) >= (DY = YY.d.length - 1), IY = OY.s, RY) {
        if ((DY = aY < 0 ? -aY : aY) <= QI) {
          for (AY = new gY(II), rY = Math.ceil(FY / 7 + 4), OI = !1; DY % 2 && ZI((AY = AY.times(OY)).d, rY), 0 !== (DY = uI(DY / 2));) ZI((OY = OY.times(OY)).d, rY);
          return OI = !0, YY.s < 0 ? new gY(II).div(AY) : KI(AY, FY)
        }
      } else if (IY < 0) throw Error(gI + "NaN");
      return IY = IY < 0 && 1 & YY.d[Math.max(rY, DY)] ? -1 : 1, OY.s = 1, OI = !1, AY = YY.times(BI(OY, FY + 12)), OI = !0, (AY = lI(AY)).s = IY, AY
    }, WI.toPrecision = function(YY, rY) {
      var DY, FY, AY = this,
        IY = AY.constructor;
      return void 0 === YY ? FY = zI(AY, (DY = TI(AY)) <= IY.toExpNeg || DY >= IY.toExpPos) : (mI(YY, 1, RI), void 0 === rY ? rY = IY.rounding : mI(rY, 0, 8), FY = zI(AY = KI(new IY(AY), YY, rY), YY <= (DY = TI(AY)) || DY <= IY.toExpNeg, YY)), FY
    }, WI.toSignificantDigits = WI.tosd = function(YY, rY) {
      var DY = this.constructor;
      return void 0 === YY ? (YY = DY.precision, rY = DY.rounding) : (mI(YY, 1, RI), void 0 === rY ? rY = DY.rounding : mI(rY, 0, 8)), KI(new DY(this), YY, rY)
    }, WI.toString = WI.valueOf = WI.val = WI.toJSON = WI[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var YY = this,
        rY = TI(YY),
        DY = YY.constructor;
      return zI(YY, rY <= DY.toExpNeg || rY >= DY.toExpPos)
    };
    var SI = function() {
      function YY(YY, rY) {
        var DY, FY = 0,
          AY = YY.length;
        for (YY = YY.slice(); AY--;) DY = YY[AY] * rY + FY, YY[AY] = DY % yI | 0, FY = DY / yI | 0;
        return FY && YY.unshift(FY), YY
      }

      function rY(YY, rY, DY, FY) {
        var AY, IY;
        if (DY != FY) IY = DY > FY ? 1 : -1;
        else
          for (AY = IY = 0; AY < DY; AY++)
            if (YY[AY] != rY[AY]) {
              IY = YY[AY] > rY[AY] ? 1 : -1;
              break
            } return IY
      }

      function DY(YY, rY, DY) {
        for (var FY = 0; DY--;) YY[DY] -= FY, FY = YY[DY] < rY[DY] ? 1 : 0, YY[DY] = FY * yI + YY[DY] - rY[DY];
        for (; !YY[0] && YY.length > 1;) YY.shift()
      }
      return function(FY, AY, IY, RY) {
        var OY, gY, aY, vY, uY, sY, iY, yY, QY, oY, WY, EY, mY, VY, SY, lY, TY, eY, NY = FY.constructor,
          BY = FY.s == AY.s ? 1 : -1,
          cY = FY.d,
          KY = AY.d;
        if (!FY.s) return new NY(FY);
        if (!AY.s) throw Error(gI + "Division by zero");
        for (gY = FY.e - AY.e, TY = KY.length, SY = cY.length, yY = (iY = new NY(BY)).d = [], aY = 0; KY[aY] == (cY[aY] || 0);) ++aY;
        if (KY[aY] > (cY[aY] || 0) && --gY, (EY = null == IY ? IY = NY.precision : RY ? IY + (TI(FY) - TI(AY)) + 1 : IY) < 0) return new NY(0);
        if (EY = EY / 7 + 2 | 0, aY = 0, 1 == TY)
          for (vY = 0, KY = KY[0], EY++;
            (aY < SY || vY) && EY--; aY++) mY = vY * yI + (cY[aY] || 0), yY[aY] = mY / KY | 0, vY = mY % KY | 0;
        else {
          for ((vY = yI / (KY[0] + 1) | 0) > 1 && (KY = YY(KY, vY), cY = YY(cY, vY), TY = KY.length, SY = cY.length), VY = TY, oY = (QY = cY.slice(0, TY)).length; oY < TY;) QY[oY++] = 0;
          (eY = KY.slice()).unshift(0), lY = KY[0], KY[1] >= yI / 2 && ++lY;
          do {
            vY = 0, (OY = rY(KY, QY, TY, oY)) < 0 ? (WY = QY[0], TY != oY && (WY = WY * yI + (QY[1] || 0)), (vY = WY / lY | 0) > 1 ? (vY >= yI && (vY = yI - 1), 1 == (OY = rY(uY = YY(KY, vY), QY, sY = uY.length, oY = QY.length)) && (vY--, DY(uY, TY < sY ? eY : KY, sY))) : (0 == vY && (OY = vY = 1), uY = KY.slice()), (sY = uY.length) < oY && uY.unshift(0), DY(QY, uY, oY), -1 == OY && (OY = rY(KY, QY, TY, oY = QY.length)) < 1 && (vY++, DY(QY, TY < oY ? eY : KY, oY)), oY = QY.length) : 0 === OY && (vY++, QY = [0]), yY[aY++] = vY, OY && QY[0] ? QY[oY++] = cY[VY] || 0 : (QY = [cY[VY]], oY = 1)
          } while ((VY++ < SY || void 0 !== QY[0]) && EY--)
        }
        return yY[0] || yY.shift(), iY.e = gY, KI(iY, RY ? IY + TI(iY) + 1 : IY)
      }
    }();

    function lI(YY, rY) {
      var DY, FY, AY, IY, RY, OY = 0,
        gY = 0,
        aY = YY.constructor,
        vY = aY.precision;
      if (TI(YY) > 16) throw Error(vI + TI(YY));
      if (!YY.s) return new aY(II);
      for (null == rY ? (OI = !1, RY = vY) : RY = rY, IY = new aY(.03125); YY.abs().gte(.1);) YY = YY.times(IY), gY += 5;
      for (RY += Math.log(sI(2, gY)) / Math.LN10 * 2 + 5 | 0, DY = FY = AY = new aY(II), aY.precision = RY;;) {
        if (FY = KI(FY.times(YY), RY), DY = DY.times(++OY), VI((IY = AY.plus(SI(FY, DY, RY))).d).slice(0, RY) === VI(AY.d).slice(0, RY)) {
          for (; gY--;) AY = KI(AY.times(AY), RY);
          return aY.precision = vY, null == rY ? (OI = !0, KI(AY, vY)) : AY
        }
        AY = IY
      }
    }

    function TI(YY) {
      for (var rY = 7 * YY.e, DY = YY.d[0]; DY >= 10; DY /= 10) rY++;
      return rY
    }

    function eI(YY, rY, DY) {
      if (rY > YY.LN10.sd()) throw OI = !0, DY && (YY.precision = DY), Error(gI + "LN10 precision limit exceeded");
      return KI(new YY(YY.LN10), rY)
    }

    function NI(YY) {
      for (var rY = ""; YY--;) rY += "0";
      return rY
    }

    function BI(YY, rY) {
      var DY, FY, AY, IY, RY, OY, gY, aY, vY, uY = 1,
        sY = YY,
        iY = sY.d,
        yY = sY.constructor,
        QY = yY.precision;
      if (sY.s < 1) throw Error(gI + (sY.s ? "NaN" : "-Infinity"));
      if (sY.eq(II)) return new yY(0);
      if (null == rY ? (OI = !1, aY = QY) : aY = rY, sY.eq(10)) return null == rY && (OI = !0), eI(yY, aY);
      if (aY += 10, yY.precision = aY, FY = (DY = VI(iY)).charAt(0), IY = TI(sY), !(Math.abs(IY) < 15e14)) return gY = eI(yY, aY + 2, QY).times(IY + ""), sY = BI(new yY(FY + "." + DY.slice(1)), aY - 10).plus(gY), yY.precision = QY, null == rY ? (OI = !0, KI(sY, QY)) : sY;
      for (; FY < 7 && 1 != FY || 1 == FY && DY.charAt(1) > 3;) FY = (DY = VI((sY = sY.times(YY)).d)).charAt(0), uY++;
      for (IY = TI(sY), FY > 1 ? (sY = new yY("0." + DY), IY++) : sY = new yY(FY + "." + DY.slice(1)), OY = RY = sY = SI(sY.minus(II), sY.plus(II), aY), vY = KI(sY.times(sY), aY), AY = 3;;) {
        if (RY = KI(RY.times(vY), aY), VI((gY = OY.plus(SI(RY, new yY(AY), aY))).d).slice(0, aY) === VI(OY.d).slice(0, aY)) return OY = OY.times(2), 0 !== IY && (OY = OY.plus(eI(yY, aY + 2, QY).times(IY + ""))), OY = SI(OY, new yY(uY), aY), yY.precision = QY, null == rY ? (OI = !0, KI(OY, QY)) : OY;
        OY = gY, AY += 2
      }
    }

    function cI(YY, rY) {
      var DY, FY, AY;
      for ((DY = rY.indexOf(".")) > -1 && (rY = rY.replace(".", "")), (FY = rY.search(/e/i)) > 0 ? (DY < 0 && (DY = FY), DY += +rY.slice(FY + 1), rY = rY.substring(0, FY)) : DY < 0 && (DY = rY.length), FY = 0; 48 === rY.charCodeAt(FY);) ++FY;
      for (AY = rY.length; 48 === rY.charCodeAt(AY - 1);) --AY;
      if (rY = rY.slice(FY, AY)) {
        if (AY -= FY, DY = DY - FY - 1, YY.e = uI(DY / 7), YY.d = [], FY = (DY + 1) % 7, DY < 0 && (FY += 7), FY < AY) {
          for (FY && YY.d.push(+rY.slice(0, FY)), AY -= 7; FY < AY;) YY.d.push(+rY.slice(FY, FY += 7));
          FY = 7 - (rY = rY.slice(FY)).length
        } else FY -= AY;
        for (; FY--;) rY += "0";
        if (YY.d.push(+rY), OI && (YY.e > oI || YY.e < -oI)) throw Error(vI + DY)
      } else YY.s = 0, YY.e = 0, YY.d = [0];
      return YY
    }

    function KI(YY, rY, DY) {
      var FY, AY, IY, RY, OY, gY, aY, vY, uY = YY.d;
      for (RY = 1, IY = uY[0]; IY >= 10; IY /= 10) RY++;
      if ((FY = rY - RY) < 0) FY += 7, AY = rY, aY = uY[vY = 0];
      else {
        if ((vY = Math.ceil((FY + 1) / 7)) >= (IY = uY.length)) return YY;
        for (aY = IY = uY[vY], RY = 1; IY >= 10; IY /= 10) RY++;
        AY = (FY %= 7) - 7 + RY
      }
      if (void 0 !== DY && (OY = aY / (IY = sI(10, RY - AY - 1)) % 10 | 0, gY = rY < 0 || void 0 !== uY[vY + 1] || aY % IY, gY = DY < 4 ? (OY || gY) && (0 == DY || DY == (YY.s < 0 ? 3 : 2)) : OY > 5 || 5 == OY && (4 == DY || gY || 6 == DY && (FY > 0 ? AY > 0 ? aY / sI(10, RY - AY) : 0 : uY[vY - 1]) % 10 & 1 || DY == (YY.s < 0 ? 8 : 7))), rY < 1 || !uY[0]) return gY ? (IY = TI(YY), uY.length = 1, rY = rY - IY - 1, uY[0] = sI(10, (7 - rY % 7) % 7), YY.e = uI(-rY / 7) || 0) : (uY.length = 1, uY[0] = YY.e = YY.s = 0), YY;
      if (0 == FY ? (uY.length = vY, IY = 1, vY--) : (uY.length = vY + 1, IY = sI(10, 7 - FY), uY[vY] = AY > 0 ? (aY / sI(10, RY - AY) % sI(10, AY) | 0) * IY : 0), gY)
        for (;;) {
          if (0 == vY) {
            (uY[0] += IY) == yI && (uY[0] = 1, ++YY.e);
            break
          }
          if (uY[vY] += IY, uY[vY] != yI) break;
          uY[vY--] = 0, IY = 1
        }
      for (FY = uY.length; 0 === uY[--FY];) uY.pop();
      if (OI && (YY.e > oI || YY.e < -oI)) throw Error(vI + TI(YY));
      return YY
    }

    function HI(YY, rY) {
      var DY, FY, AY, IY, RY, OY, gY, aY, vY, uY, sY = YY.constructor,
        iY = sY.precision;
      if (!YY.s || !rY.s) return rY.s ? rY.s = -rY.s : rY = new sY(YY), OI ? KI(rY, iY) : rY;
      if (gY = YY.d, uY = rY.d, FY = rY.e, aY = YY.e, gY = gY.slice(), RY = aY - FY) {
        for ((vY = RY < 0) ? (DY = gY, RY = -RY, OY = uY.length) : (DY = uY, FY = aY, OY = gY.length), RY > (AY = Math.max(Math.ceil(iY / 7), OY) + 2) && (RY = AY, DY.length = 1), DY.reverse(), AY = RY; AY--;) DY.push(0);
        DY.reverse()
      } else {
        for ((vY = (AY = gY.length) < (OY = uY.length)) && (OY = AY), AY = 0; AY < OY; AY++)
          if (gY[AY] != uY[AY]) {
            vY = gY[AY] < uY[AY];
            break
          } RY = 0
      }
      for (vY && (DY = gY, gY = uY, uY = DY, rY.s = -rY.s), OY = gY.length, AY = uY.length - OY; AY > 0; --AY) gY[OY++] = 0;
      for (AY = uY.length; AY > RY;) {
        if (gY[--AY] < uY[AY]) {
          for (IY = AY; IY && 0 === gY[--IY];) gY[IY] = yI - 1;
          --gY[IY], gY[AY] += yI
        }
        gY[AY] -= uY[AY]
      }
      for (; 0 === gY[--OY];) gY.pop();
      for (; 0 === gY[0]; gY.shift()) --FY;
      return gY[0] ? (rY.d = gY, rY.e = FY, OI ? KI(rY, iY) : rY) : new sY(0)
    }

    function zI(YY, rY, DY) {
      var FY, AY = TI(YY),
        IY = VI(YY.d),
        RY = IY.length;
      return rY ? (DY && (FY = DY - RY) > 0 ? IY = IY.charAt(0) + "." + IY.slice(1) + NI(FY) : RY > 1 && (IY = IY.charAt(0) + "." + IY.slice(1)), IY = IY + (AY < 0 ? "e" : "e+") + AY) : AY < 0 ? (IY = "0." + NI(-AY - 1) + IY, DY && (FY = DY - RY) > 0 && (IY += NI(FY))) : AY >= RY ? (IY += NI(AY + 1 - RY), DY && (FY = DY - AY - 1) > 0 && (IY = IY + "." + NI(FY))) : ((FY = AY + 1) < RY && (IY = IY.slice(0, FY) + "." + IY.slice(FY)), DY && (FY = DY - RY) > 0 && (AY + 1 === RY && (IY += "."), IY += NI(FY))), YY.s < 0 ? "-" + IY : IY
    }

    function ZI(YY, rY) {
      if (YY.length > rY) return YY.length = rY, !0
    }

    function CI(YY) {
      if (!YY || "object" !== typeof YY) throw Error(gI + "Object expected");
      var rY, DY, FY, AY = ["precision", 1, RI, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (rY = 0; rY < AY.length; rY += 3)
        if (void 0 !== (FY = YY[DY = AY[rY]])) {
          if (!(uI(FY) === FY && FY >= AY[rY + 1] && FY <= AY[rY + 2])) throw Error(aI + DY + ": " + FY);
          this[DY] = FY
        } if (void 0 !== (FY = YY[DY = "LN10"])) {
        if (FY != Math.LN10) throw Error(aI + DY + ": " + FY);
        this[DY] = new this(FY)
      }
      return this
    }
    var fI = function YY(rY) {
      var DY, FY, AY;

      function IY(YY) {
        var rY = this;
        if (!(rY instanceof IY)) return new IY(YY);
        if (rY.constructor = IY, YY instanceof IY) return rY.s = YY.s, rY.e = YY.e, void(rY.d = (YY = YY.d) ? YY.slice() : YY);
        if ("number" === typeof YY) {
          if (0 * YY !== 0) throw Error(aI + YY);
          if (YY > 0) rY.s = 1;
          else {
            if (!(YY < 0)) return rY.s = 0, rY.e = 0, void(rY.d = [0]);
            YY = -YY, rY.s = -1
          }
          return YY === ~~YY && YY < 1e7 ? (rY.e = 0, void(rY.d = [YY])) : cI(rY, YY.toString())
        }
        if ("string" !== typeof YY) throw Error(aI + YY);
        if (45 === YY.charCodeAt(0) ? (YY = YY.slice(1), rY.s = -1) : rY.s = 1, !iI.test(YY)) throw Error(aI + YY);
        cI(rY, YY)
      }
      if (IY.prototype = WI, IY.ROUND_UP = 0, IY.ROUND_DOWN = 1, IY.ROUND_CEIL = 2, IY.ROUND_FLOOR = 3, IY.ROUND_HALF_UP = 4, IY.ROUND_HALF_DOWN = 5, IY.ROUND_HALF_EVEN = 6, IY.ROUND_HALF_CEIL = 7, IY.ROUND_HALF_FLOOR = 8, IY.clone = YY, IY.config = IY.set = CI, void 0 === rY && (rY = {}), rY)
        for (AY = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], DY = 0; DY < AY.length;) rY.hasOwnProperty(FY = AY[DY++]) || (rY[FY] = this[FY]);
      return IY.config(rY), IY
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    II = new fI(1);
    var jI;
    ! function(YY) {
      YY.AED = "aed", YY.AFN = "afn", YY.ALL = "all", YY.AMD = "amd", YY.ANG = "ang", YY.AOA = "aoa", YY.ARS = "ars", YY.AUD = "aud", YY.AWG = "awg", YY.AZN = "azn", YY.BAM = "bam", YY.BBD = "bbd", YY.BDT = "bdt", YY.BGN = "bgn", YY.BHD = "bhd", YY.BIF = "bif", YY.BMD = "bmd", YY.BND = "bnd", YY.BOB = "bob", YY.BOV = "bov", YY.BRL = "brl", YY.BSD = "bsd", YY.BTN = "btn", YY.BWP = "bwp", YY.BYN = "byn", YY.BYR = "byr", YY.BZD = "bzd", YY.CAD = "cad", YY.CDF = "cdf", YY.CHE = "che", YY.CHF = "chf", YY.CHW = "chw", YY.CLF = "clf", YY.CLP = "clp", YY.CNY = "cny", YY.COP = "cop", YY.COU = "cou", YY.CRC = "crc", YY.CUC = "cuc", YY.CUP = "cup", YY.CVE = "cve", YY.CZK = "czk", YY.DJF = "djf", YY.DKK = "dkk", YY.DOP = "dop", YY.DZD = "dzd", YY.EGP = "egp", YY.ERN = "ern", YY.ETB = "etb", YY.EUR = "eur", YY.FJD = "fjd", YY.FKP = "fkp", YY.GBP = "gbp", YY.GEL = "gel", YY.GHS = "ghs", YY.GIP = "gip", YY.GMD = "gmd", YY.GNF = "gnf", YY.GTQ = "gtq", YY.GYD = "gyd", YY.HKD = "hkd", YY.HNL = "hnl", YY.HRK = "hrk", YY.HTG = "htg", YY.HUF = "huf", YY.IDR = "idr", YY.ILS = "ils", YY.INR = "inr", YY.IQD = "iqd", YY.IRR = "irr", YY.ISK = "isk", YY.JMD = "jmd", YY.JOD = "jod", YY.JPY = "jpy", YY.KES = "kes", YY.KGS = "kgs", YY.KHR = "khr", YY.KMF = "kmf", YY.KPW = "kpw", YY.KRW = "krw", YY.KWD = "kwd", YY.KYD = "kyd", YY.KZT = "kzt", YY.LAK = "lak", YY.LBP = "lbp", YY.LKR = "lkr", YY.LRD = "lrd", YY.LSL = "lsl", YY.LTL = "ltl", YY.LVL = "lvl", YY.LYD = "lyd", YY.MAD = "mad", YY.MDL = "mdl", YY.MGA = "mga", YY.MKD = "mkd", YY.MMK = "mmk", YY.MNT = "mnt", YY.MOP = "mop", YY.MRO = "mro", YY.MUR = "mur", YY.MVR = "mvr", YY.MWK = "mwk", YY.MXN = "mxn", YY.MXV = "mxv", YY.MYR = "myr", YY.MZN = "mzn", YY.NAD = "nad", YY.NGN = "ngn", YY.NIO = "nio", YY.NOK = "nok", YY.NPR = "npr", YY.NZD = "nzd", YY.OMR = "omr", YY.PAB = "pab", YY.PEN = "pen", YY.PGK = "pgk", YY.PHP = "php", YY.PKR = "pkr", YY.PLN = "pln", YY.PYG = "pyg", YY.QAR = "qar", YY.RON = "ron", YY.RSD = "rsd", YY.RUB = "rub", YY.RWF = "rwf", YY.SAR = "sar", YY.SBD = "sbd", YY.SCR = "scr", YY.SDG = "sdg", YY.SEK = "sek", YY.SGD = "sgd", YY.SHP = "shp", YY.SLL = "sll", YY.SOS = "sos", YY.SRD = "srd", YY.SSP = "ssp", YY.STD = "std", YY.SVC = "svc", YY.SYP = "syp", YY.SZL = "szl", YY.THB = "thb", YY.TJS = "tjs", YY.TMT = "tmt", YY.TND = "tnd", YY.TOP = "top", YY.TRY = "try", YY.TTD = "ttd", YY.TWD = "twd", YY.TZS = "tzs", YY.UAH = "uah", YY.UGX = "ugx", YY.USD = "usd", YY.USN = "usn", YY.USS = "uss", YY.UYI = "uyi", YY.UYU = "uyu", YY.UZS = "uzs", YY.VEF = "vef", YY.VND = "vnd", YY.VUV = "vuv", YY.WST = "wst", YY.XAF = "xaf", YY.XAG = "xag", YY.XAU = "xau", YY.XBA = "xba", YY.XBB = "xbb", YY.XBC = "xbc", YY.XBD = "xbd", YY.XCD = "xcd", YY.XDR = "xdr", YY.XFU = "xfu", YY.XOF = "xof", YY.XPD = "xpd", YY.XPF = "xpf", YY.XPT = "xpt", YY.XSU = "xsu", YY.XTS = "xts", YY.XUA = "xua", YY.YER = "yer", YY.ZAR = "zar", YY.ZMW = "zmw", YY.ZWL = "zwl"
    }(jI || (jI = {}));
    jI.AED, jI.AFN, jI.ALL, jI.AMD, jI.ANG, jI.AOA, jI.ARS, jI.AUD, jI.AWG, jI.AZN, jI.BAM, jI.BBD, jI.BDT, jI.BGN, jI.BHD, jI.BIF, jI.BMD, jI.BND, jI.BOB, jI.BOV, jI.BRL, jI.BSD, jI.BTN, jI.BWP, jI.BYR, jI.BYN, jI.BZD, jI.CAD, jI.CDF, jI.CHE, jI.CHF, jI.CHW, jI.CLF, jI.CLP, jI.CNY, jI.COP, jI.COU, jI.CRC, jI.CUC, jI.CUP, jI.CVE, jI.CZK, jI.DJF, jI.DKK, jI.DOP, jI.DZD, jI.EGP, jI.ERN, jI.ETB, jI.EUR, jI.FJD, jI.FKP, jI.GBP, jI.GEL, jI.GHS, jI.GIP, jI.GMD, jI.GNF, jI.GTQ, jI.GYD, jI.HKD, jI.HNL, jI.HRK, jI.HTG, jI.HUF, jI.IDR, jI.ILS, jI.INR, jI.IQD, jI.IRR, jI.ISK, jI.JMD, jI.JOD, jI.JPY, jI.KES, jI.KGS, jI.KHR, jI.KMF, jI.KPW, jI.KRW, jI.KWD, jI.KYD, jI.KZT, jI.LAK, jI.LBP, jI.LKR, jI.LRD, jI.LSL, jI.LTL, jI.LVL, jI.LYD, jI.MAD, jI.MDL, jI.MGA, jI.MKD, jI.MMK, jI.MNT, jI.MOP, jI.MRO, jI.MUR, jI.MVR, jI.MWK, jI.MXN, jI.MXV, jI.MYR, jI.MZN, jI.NAD, jI.NGN, jI.NIO, jI.NOK, jI.NPR, jI.NZD, jI.OMR, jI.PAB, jI.PEN, jI.PGK, jI.PHP, jI.PKR, jI.PLN, jI.PYG, jI.QAR, jI.RON, jI.RSD, jI.RUB, jI.RWF, jI.SAR, jI.SBD, jI.SCR, jI.SDG, jI.SEK, jI.SGD, jI.SHP, jI.SLL, jI.SOS, jI.SRD, jI.SSP, jI.STD, jI.SVC, jI.SYP, jI.SZL, jI.THB, jI.TJS, jI.TMT, jI.TND, jI.TOP, jI.TRY, jI.TTD, jI.TWD, jI.TZS, jI.UAH, jI.UGX, jI.USD, jI.USN, jI.USS, jI.UYI, jI.UYU, jI.UZS, jI.VEF, jI.VND, jI.VUV, jI.WST, jI.XAF, jI.XAG, jI.XAU, jI.XBA, jI.XBB, jI.XBC, jI.XBD, jI.XCD, jI.XDR, jI.XFU, jI.XOF, jI.XPD, jI.XPF, jI.XPT, jI.XSU, jI.XTS, jI.XUA, jI.YER, jI.ZAR, jI.ZMW, jI.ZWL;
    var hI = {
      exports: {}
    };
    ! function(YY, rY) {
      var DY = "__lodash_hash_undefined__",
        FY = 9007199254740991,
        IY = "[object Arguments]",
        RY = "[object Array]",
        OY = "[object Boolean]",
        gY = "[object Date]",
        aY = "[object Error]",
        vY = "[object Function]",
        uY = "[object Map]",
        sY = "[object Number]",
        iY = "[object Object]",
        yY = "[object Promise]",
        QY = "[object RegExp]",
        oY = "[object Set]",
        WY = "[object String]",
        EY = "[object Symbol]",
        mY = "[object WeakMap]",
        VY = "[object ArrayBuffer]",
        SY = "[object DataView]",
        lY = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        TY = /^\w*$/,
        eY = /^\./,
        NY = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        BY = /\\(\\)?/g,
        cY = /^\[object .+?Constructor\]$/,
        KY = /^(?:0|[1-9]\d*)$/,
        HY = {};
      HY["[object Float32Array]"] = HY["[object Float64Array]"] = HY["[object Int8Array]"] = HY["[object Int16Array]"] = HY["[object Int32Array]"] = HY["[object Uint8Array]"] = HY["[object Uint8ClampedArray]"] = HY["[object Uint16Array]"] = HY["[object Uint32Array]"] = !0, HY[IY] = HY[RY] = HY[VY] = HY[OY] = HY[SY] = HY[gY] = HY[aY] = HY[vY] = HY[uY] = HY[sY] = HY[iY] = HY[QY] = HY[oY] = HY[WY] = HY[mY] = !1;
      var zY = "object" == typeof AY && AY && AY.Object === Object && AY,
        ZY = "object" == typeof self && self && self.Object === Object && self,
        CY = zY || ZY || Function("return this")(),
        fY = rY && !rY.nodeType && rY,
        jY = fY && YY && !YY.nodeType && YY,
        hY = jY && jY.exports === fY && zY.process,
        dY = function() {
          try {
            return hY && hY.binding("util")
          } catch (YY) {}
        }(),
        JY = dY && dY.isTypedArray;

      function MY(YY, rY) {
        for (var DY = -1, FY = YY ? YY.length : 0; ++DY < FY && !1 !== rY(YY[DY], DY, YY););
        return YY
      }

      function wY(YY, rY) {
        for (var DY = -1, FY = YY ? YY.length : 0; ++DY < FY;)
          if (rY(YY[DY], DY, YY)) return !0;
        return !1
      }

      function bY(YY) {
        var rY = !1;
        if (null != YY && "function" != typeof YY.toString) try {
          rY = !!(YY + "")
        } catch (DY) {}
        return rY
      }

      function XY(YY) {
        var rY = -1,
          DY = Array(YY.size);
        return YY.forEach((function(YY, FY) {
          DY[++rY] = [FY, YY]
        })), DY
      }

      function qY(YY, rY) {
        return function(DY) {
          return YY(rY(DY))
        }
      }

      function pY(YY) {
        var rY = -1,
          DY = Array(YY.size);
        return YY.forEach((function(YY) {
          DY[++rY] = YY
        })), DY
      }
      var kY = Array.prototype,
        GY = Function.prototype,
        xY = Object.prototype,
        nY = CY["__core-js_shared__"],
        PY = function() {
          var YY = /[^.]+$/.exec(nY && nY.keys && nY.keys.IE_PROTO || "");
          return YY ? "Symbol(src)_1." + YY : ""
        }(),
        UY = GY.toString,
        LY = xY.hasOwnProperty,
        tY = xY.toString,
        Yr = RegExp("^" + UY.call(LY).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        rr = CY.Symbol,
        Dr = CY.Uint8Array,
        Fr = qY(Object.getPrototypeOf, Object),
        Ar = Object.create,
        Ir = xY.propertyIsEnumerable,
        Rr = kY.splice,
        Or = qY(Object.keys, Object),
        gr = Xr(CY, "DataView"),
        ar = Xr(CY, "Map"),
        vr = Xr(CY, "Promise"),
        ur = Xr(CY, "Set"),
        sr = Xr(CY, "WeakMap"),
        ir = Xr(Object, "create"),
        yr = Ur(gr),
        Qr = Ur(ar),
        or = Ur(vr),
        Wr = Ur(ur),
        Er = Ur(sr),
        mr = rr ? rr.prototype : void 0,
        Vr = mr ? mr.valueOf : void 0,
        Sr = mr ? mr.toString : void 0;

      function lr(YY) {
        var rY = -1,
          DY = YY ? YY.length : 0;
        for (this.clear(); ++rY < DY;) {
          var FY = YY[rY];
          this.set(FY[0], FY[1])
        }
      }

      function Tr(YY) {
        var rY = -1,
          DY = YY ? YY.length : 0;
        for (this.clear(); ++rY < DY;) {
          var FY = YY[rY];
          this.set(FY[0], FY[1])
        }
      }

      function er(YY) {
        var rY = -1,
          DY = YY ? YY.length : 0;
        for (this.clear(); ++rY < DY;) {
          var FY = YY[rY];
          this.set(FY[0], FY[1])
        }
      }

      function Nr(YY) {
        var rY = -1,
          DY = YY ? YY.length : 0;
        for (this.__data__ = new er; ++rY < DY;) this.add(YY[rY])
      }

      function Br(YY) {
        this.__data__ = new Tr(YY)
      }

      function cr(YY, rY) {
        var DY = rD(YY) || YD(YY) ? function(YY, rY) {
            for (var DY = -1, FY = Array(YY); ++DY < YY;) FY[DY] = rY(DY);
            return FY
          }(YY.length, String) : [],
          FY = DY.length,
          AY = !!FY;
        for (var IY in YY) !rY && !LY.call(YY, IY) || AY && ("length" == IY || pr(IY, FY)) || DY.push(IY);
        return DY
      }

      function Kr(YY, rY) {
        for (var DY = YY.length; DY--;)
          if (tr(YY[DY][0], rY)) return DY;
        return -1
      }
      lr.prototype.clear = function() {
        this.__data__ = ir ? ir(null) : {}
      }, lr.prototype.delete = function(YY) {
        return this.has(YY) && delete this.__data__[YY]
      }, lr.prototype.get = function(YY) {
        var rY = this.__data__;
        if (ir) {
          var FY = rY[YY];
          return FY === DY ? void 0 : FY
        }
        return LY.call(rY, YY) ? rY[YY] : void 0
      }, lr.prototype.has = function(YY) {
        var rY = this.__data__;
        return ir ? void 0 !== rY[YY] : LY.call(rY, YY)
      }, lr.prototype.set = function(YY, rY) {
        return this.__data__[YY] = ir && void 0 === rY ? DY : rY, this
      }, Tr.prototype.clear = function() {
        this.__data__ = []
      }, Tr.prototype.delete = function(YY) {
        var rY = this.__data__,
          DY = Kr(rY, YY);
        return !(DY < 0) && (DY == rY.length - 1 ? rY.pop() : Rr.call(rY, DY, 1), !0)
      }, Tr.prototype.get = function(YY) {
        var rY = this.__data__,
          DY = Kr(rY, YY);
        return DY < 0 ? void 0 : rY[DY][1]
      }, Tr.prototype.has = function(YY) {
        return Kr(this.__data__, YY) > -1
      }, Tr.prototype.set = function(YY, rY) {
        var DY = this.__data__,
          FY = Kr(DY, YY);
        return FY < 0 ? DY.push([YY, rY]) : DY[FY][1] = rY, this
      }, er.prototype.clear = function() {
        this.__data__ = {
          hash: new lr,
          map: new(ar || Tr),
          string: new lr
        }
      }, er.prototype.delete = function(YY) {
        return br(this, YY).delete(YY)
      }, er.prototype.get = function(YY) {
        return br(this, YY).get(YY)
      }, er.prototype.has = function(YY) {
        return br(this, YY).has(YY)
      }, er.prototype.set = function(YY, rY) {
        return br(this, YY).set(YY, rY), this
      }, Nr.prototype.add = Nr.prototype.push = function(YY) {
        return this.__data__.set(YY, DY), this
      }, Nr.prototype.has = function(YY) {
        return this.__data__.has(YY)
      }, Br.prototype.clear = function() {
        this.__data__ = new Tr
      }, Br.prototype.delete = function(YY) {
        return this.__data__.delete(YY)
      }, Br.prototype.get = function(YY) {
        return this.__data__.get(YY)
      }, Br.prototype.has = function(YY) {
        return this.__data__.has(YY)
      }, Br.prototype.set = function(YY, rY) {
        var DY = this.__data__;
        if (DY instanceof Tr) {
          var FY = DY.__data__;
          if (!ar || FY.length < 199) return FY.push([YY, rY]), this;
          DY = this.__data__ = new er(FY)
        }
        return DY.set(YY, rY), this
      };
      var Hr, zr = function(YY, rY, DY) {
        for (var FY = -1, AY = Object(YY), IY = DY(YY), RY = IY.length; RY--;) {
          var OY = IY[Hr ? RY : ++FY];
          if (!1 === rY(AY[OY], OY, AY)) break
        }
        return YY
      };

      function Zr(YY, rY) {
        return YY && zr(YY, rY, vD)
      }

      function Cr(YY, rY) {
        for (var DY = 0, FY = (rY = kr(rY, YY) ? [rY] : Mr(rY)).length; null != YY && DY < FY;) YY = YY[Pr(rY[DY++])];
        return DY && DY == FY ? YY : void 0
      }

      function fr(YY, rY) {
        return null != YY && rY in Object(YY)
      }

      function jr(YY, rY, DY, FY, AY) {
        return YY === rY || (null == YY || null == rY || !ID(YY) && !RD(rY) ? YY !== YY && rY !== rY : function(YY, rY, DY, FY, AY, vY) {
          var yY = rD(YY),
            mY = rD(rY),
            lY = RY,
            TY = RY;
          yY || (lY = (lY = qr(YY)) == IY ? iY : lY);
          mY || (TY = (TY = qr(rY)) == IY ? iY : TY);
          var eY = lY == iY && !bY(YY),
            NY = TY == iY && !bY(rY),
            BY = lY == TY;
          if (BY && !eY) return vY || (vY = new Br), yY || aD(YY) ? wr(YY, rY, DY, FY, AY, vY) : function(YY, rY, DY, FY, AY, IY, RY) {
            switch (DY) {
              case SY:
                if (YY.byteLength != rY.byteLength || YY.byteOffset != rY.byteOffset) return !1;
                YY = YY.buffer, rY = rY.buffer;
              case VY:
                return !(YY.byteLength != rY.byteLength || !FY(new Dr(YY), new Dr(rY)));
              case OY:
              case gY:
              case sY:
                return tr(+YY, +rY);
              case aY:
                return YY.name == rY.name && YY.message == rY.message;
              case QY:
              case WY:
                return YY == rY + "";
              case uY:
                var vY = XY;
              case oY:
                var iY = 2 & IY;
                if (vY || (vY = pY), YY.size != rY.size && !iY) return !1;
                var yY = RY.get(YY);
                if (yY) return yY == rY;
                IY |= 1, RY.set(YY, rY);
                var mY = wr(vY(YY), vY(rY), FY, AY, IY, RY);
                return RY.delete(YY), mY;
              case EY:
                if (Vr) return Vr.call(YY) == Vr.call(rY)
            }
            return !1
          }(YY, rY, lY, DY, FY, AY, vY);
          if (!(2 & AY)) {
            var cY = eY && LY.call(YY, "__wrapped__"),
              KY = NY && LY.call(rY, "__wrapped__");
            if (cY || KY) {
              var HY = cY ? YY.value() : YY,
                zY = KY ? rY.value() : rY;
              return vY || (vY = new Br), DY(HY, zY, FY, AY, vY)
            }
          }
          if (!BY) return !1;
          return vY || (vY = new Br),
            function(YY, rY, DY, FY, AY, IY) {
              var RY = 2 & AY,
                OY = vD(YY),
                gY = OY.length,
                aY = vD(rY),
                vY = aY.length;
              if (gY != vY && !RY) return !1;
              var uY = gY;
              for (; uY--;) {
                var sY = OY[uY];
                if (!(RY ? sY in rY : LY.call(rY, sY))) return !1
              }
              var iY = IY.get(YY);
              if (iY && IY.get(rY)) return iY == rY;
              var yY = !0;
              IY.set(YY, rY), IY.set(rY, YY);
              var QY = RY;
              for (; ++uY < gY;) {
                var oY = YY[sY = OY[uY]],
                  WY = rY[sY];
                if (FY) var EY = RY ? FY(WY, oY, sY, rY, YY, IY) : FY(oY, WY, sY, YY, rY, IY);
                if (!(void 0 === EY ? oY === WY || DY(oY, WY, FY, AY, IY) : EY)) {
                  yY = !1;
                  break
                }
                QY || (QY = "constructor" == sY)
              }
              if (yY && !QY) {
                var mY = YY.constructor,
                  VY = rY.constructor;
                mY == VY || !("constructor" in YY) || !("constructor" in rY) || "function" == typeof mY && mY instanceof mY && "function" == typeof VY && VY instanceof VY || (yY = !1)
              }
              return IY.delete(YY), IY.delete(rY), yY
            }(YY, rY, DY, FY, AY, vY)
        }(YY, rY, jr, DY, FY, AY))
      }

      function hr(YY) {
        return !(!ID(YY) || (rY = YY, PY && PY in rY)) && (FD(YY) || bY(YY) ? Yr : cY).test(Ur(YY));
        var rY
      }

      function dr(YY) {
        return "function" == typeof YY ? YY : null == YY ? uD : "object" == typeof YY ? rD(YY) ? function(YY, rY) {
          if (kr(YY) && Gr(rY)) return xr(Pr(YY), rY);
          return function(DY) {
            var FY = function(YY, rY, DY) {
              var FY = null == YY ? void 0 : Cr(YY, rY);
              return void 0 === FY ? DY : FY
            }(DY, YY);
            return void 0 === FY && FY === rY ? function(YY, rY) {
              return null != YY && function(YY, rY, DY) {
                rY = kr(rY, YY) ? [rY] : Mr(rY);
                var FY, AY = -1,
                  IY = rY.length;
                for (; ++AY < IY;) {
                  var RY = Pr(rY[AY]);
                  if (!(FY = null != YY && DY(YY, RY))) break;
                  YY = YY[RY]
                }
                if (FY) return FY;
                IY = YY ? YY.length : 0;
                return !!IY && AD(IY) && pr(RY, IY) && (rD(YY) || YD(YY))
              }(YY, rY, fr)
            }(DY, YY) : jr(rY, FY, void 0, 3)
          }
        }(YY[0], YY[1]) : function(YY) {
          var rY = function(YY) {
            var rY = vD(YY),
              DY = rY.length;
            for (; DY--;) {
              var FY = rY[DY],
                AY = YY[FY];
              rY[DY] = [FY, AY, Gr(AY)]
            }
            return rY
          }(YY);
          if (1 == rY.length && rY[0][2]) return xr(rY[0][0], rY[0][1]);
          return function(DY) {
            return DY === YY || function(YY, rY, DY, FY) {
              var AY = DY.length,
                IY = AY,
                RY = !FY;
              if (null == YY) return !IY;
              for (YY = Object(YY); AY--;) {
                var OY = DY[AY];
                if (RY && OY[2] ? OY[1] !== YY[OY[0]] : !(OY[0] in YY)) return !1
              }
              for (; ++AY < IY;) {
                var gY = (OY = DY[AY])[0],
                  aY = YY[gY],
                  vY = OY[1];
                if (RY && OY[2]) {
                  if (void 0 === aY && !(gY in YY)) return !1
                } else {
                  var uY = new Br;
                  if (FY) var sY = FY(aY, vY, gY, YY, rY, uY);
                  if (!(void 0 === sY ? jr(vY, aY, FY, 3, uY) : sY)) return !1
                }
              }
              return !0
            }(DY, YY, rY)
          }
        }(YY) : function(YY) {
          return kr(YY) ? (rY = Pr(YY), function(YY) {
            return null == YY ? void 0 : YY[rY]
          }) : function(YY) {
            return function(rY) {
              return Cr(rY, YY)
            }
          }(YY);
          var rY
        }(YY)
      }

      function Jr(YY) {
        if (! function(YY) {
            var rY = YY && YY.constructor,
              DY = "function" == typeof rY && rY.prototype || xY;
            return YY === DY
          }(YY)) return Or(YY);
        var rY = [];
        for (var DY in Object(YY)) LY.call(YY, DY) && "constructor" != DY && rY.push(DY);
        return rY
      }

      function Mr(YY) {
        return rD(YY) ? YY : nr(YY)
      }

      function wr(YY, rY, DY, FY, AY, IY) {
        var RY = 2 & AY,
          OY = YY.length,
          gY = rY.length;
        if (OY != gY && !(RY && gY > OY)) return !1;
        var aY = IY.get(YY);
        if (aY && IY.get(rY)) return aY == rY;
        var vY = -1,
          uY = !0,
          sY = 1 & AY ? new Nr : void 0;
        for (IY.set(YY, rY), IY.set(rY, YY); ++vY < OY;) {
          var iY = YY[vY],
            yY = rY[vY];
          if (FY) var QY = RY ? FY(yY, iY, vY, rY, YY, IY) : FY(iY, yY, vY, YY, rY, IY);
          if (void 0 !== QY) {
            if (QY) continue;
            uY = !1;
            break
          }
          if (sY) {
            if (!wY(rY, (function(YY, rY) {
                if (!sY.has(rY) && (iY === YY || DY(iY, YY, FY, AY, IY))) return sY.add(rY)
              }))) {
              uY = !1;
              break
            }
          } else if (iY !== yY && !DY(iY, yY, FY, AY, IY)) {
            uY = !1;
            break
          }
        }
        return IY.delete(YY), IY.delete(rY), uY
      }

      function br(YY, rY) {
        var DY = YY.__data__;
        return function(YY) {
          var rY = typeof YY;
          return "string" == rY || "number" == rY || "symbol" == rY || "boolean" == rY ? "__proto__" !== YY : null === YY
        }(rY) ? DY["string" == typeof rY ? "string" : "hash"] : DY.map
      }

      function Xr(YY, rY) {
        var DY = function(YY, rY) {
          return null == YY ? void 0 : YY[rY]
        }(YY, rY);
        return hr(DY) ? DY : void 0
      }
      var qr = function(YY) {
        return tY.call(YY)
      };

      function pr(YY, rY) {
        return !!(rY = null == rY ? FY : rY) && ("number" == typeof YY || KY.test(YY)) && YY > -1 && YY % 1 == 0 && YY < rY
      }

      function kr(YY, rY) {
        if (rD(YY)) return !1;
        var DY = typeof YY;
        return !("number" != DY && "symbol" != DY && "boolean" != DY && null != YY && !OD(YY)) || (TY.test(YY) || !lY.test(YY) || null != rY && YY in Object(rY))
      }

      function Gr(YY) {
        return YY === YY && !ID(YY)
      }

      function xr(YY, rY) {
        return function(DY) {
          return null != DY && (DY[YY] === rY && (void 0 !== rY || YY in Object(DY)))
        }
      }(gr && qr(new gr(new ArrayBuffer(1))) != SY || ar && qr(new ar) != uY || vr && qr(vr.resolve()) != yY || ur && qr(new ur) != oY || sr && qr(new sr) != mY) && (qr = function(YY) {
        var rY = tY.call(YY),
          DY = rY == iY ? YY.constructor : void 0,
          FY = DY ? Ur(DY) : void 0;
        if (FY) switch (FY) {
          case yr:
            return SY;
          case Qr:
            return uY;
          case or:
            return yY;
          case Wr:
            return oY;
          case Er:
            return mY
        }
        return rY
      });
      var nr = Lr((function(YY) {
        var rY;
        YY = null == (rY = YY) ? "" : function(YY) {
          if ("string" == typeof YY) return YY;
          if (OD(YY)) return Sr ? Sr.call(YY) : "";
          var rY = YY + "";
          return "0" == rY && 1 / YY == -1 / 0 ? "-0" : rY
        }(rY);
        var DY = [];
        return eY.test(YY) && DY.push(""), YY.replace(NY, (function(YY, rY, FY, AY) {
          DY.push(FY ? AY.replace(BY, "$1") : rY || YY)
        })), DY
      }));

      function Pr(YY) {
        if ("string" == typeof YY || OD(YY)) return YY;
        var rY = YY + "";
        return "0" == rY && 1 / YY == -1 / 0 ? "-0" : rY
      }

      function Ur(YY) {
        if (null != YY) {
          try {
            return UY.call(YY)
          } catch (rY) {}
          try {
            return YY + ""
          } catch (rY) {}
        }
        return ""
      }

      function Lr(YY, rY) {
        if ("function" != typeof YY || rY && "function" != typeof rY) throw new TypeError("Expected a function");
        var DY = function() {
          var FY = arguments,
            AY = rY ? rY.apply(this, FY) : FY[0],
            IY = DY.cache;
          if (IY.has(AY)) return IY.get(AY);
          var RY = YY.apply(this, FY);
          return DY.cache = IY.set(AY, RY), RY
        };
        return DY.cache = new(Lr.Cache || er), DY
      }

      function tr(YY, rY) {
        return YY === rY || YY !== YY && rY !== rY
      }

      function YD(YY) {
        return function(YY) {
          return RD(YY) && DD(YY)
        }(YY) && LY.call(YY, "callee") && (!Ir.call(YY, "callee") || tY.call(YY) == IY)
      }
      Lr.Cache = er;
      var rD = Array.isArray;

      function DD(YY) {
        return null != YY && AD(YY.length) && !FD(YY)
      }

      function FD(YY) {
        var rY = ID(YY) ? tY.call(YY) : "";
        return rY == vY || "[object GeneratorFunction]" == rY
      }

      function AD(YY) {
        return "number" == typeof YY && YY > -1 && YY % 1 == 0 && YY <= FY
      }

      function ID(YY) {
        var rY = typeof YY;
        return !!YY && ("object" == rY || "function" == rY)
      }

      function RD(YY) {
        return !!YY && "object" == typeof YY
      }

      function OD(YY) {
        return "symbol" == typeof YY || RD(YY) && tY.call(YY) == EY
      }
      var gD, aD = JY ? (gD = JY, function(YY) {
        return gD(YY)
      }) : function(YY) {
        return RD(YY) && AD(YY.length) && !!HY[tY.call(YY)]
      };

      function vD(YY) {
        return DD(YY) ? cr(YY) : Jr(YY)
      }

      function uD(YY) {
        return YY
      }
      YY.exports = function(YY, rY, DY) {
        var FY, AY = rD(YY) || aD(YY);
        if (rY = dr(rY), null == DY)
          if (AY || ID(YY)) {
            var IY = YY.constructor;
            DY = AY ? rD(YY) ? new IY : [] : FD(IY) ? ID(FY = Fr(YY)) ? Ar(FY) : {} : {}
          } else DY = {};
        return (AY ? MY : Zr)(YY, (function(YY, FY, AY) {
          return rY(DY, YY, FY, AY)
        })), DY
      }
    }(hI, hI.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      k: dI
    } = FY
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);