export const id = 142;
export const ids = [142];
export const modules = {
  7542: (TT, oT, IT) => {
    IT.d(oT, {
      e: () => Fk,
      i: () => OI
    });
    var iT = {};
    IT.r(iT), IT.d(iT, {
      e: () => ki,
      k: () => Bi,
      i: () => Xi,
      n: () => PI,
      p: () => NI,
      r: () => Ji,
      s: () => Ti,
      t: () => Yi,
      x: () => ui,
      B: () => ai,
      D: () => dI,
      H: () => Ei,
      L: () => ji,
      N: () => Ui,
      R: () => VI,
      Q: () => ii,
      T: () => Ci,
      V: () => fi
    });
    var zT = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function kT(TT) {
      return TT && TT.__esModule && Object.prototype.hasOwnProperty.call(TT, "default") ? TT.default : TT
    }
    var WT = {
      exports: {}
    };
    ! function(TT) {
      var oT = Object.prototype.hasOwnProperty,
        IT = "~";

      function iT() {}

      function zT(TT, oT, IT) {
        this.Dc = TT, this.context = oT, this.once = IT || !1
      }

      function kT(TT, oT, iT, kT, WT) {
        if ("function" !== typeof iT) throw new TypeError("The listener must be a function");
        var XT = new zT(iT, kT || TT, WT),
          BT = IT ? IT + oT : oT;
        return TT._events[BT] ? TT._events[BT].Dc ? TT._events[BT] = [TT._events[BT], XT] : TT._events[BT].push(XT) : (TT._events[BT] = XT, TT._eventsCount++), TT
      }

      function WT(TT, oT) {
        0 === --TT._eventsCount ? TT._events = new iT : delete TT._events[oT]
      }

      function XT() {
        this._events = new iT, this._eventsCount = 0
      }
      Object.create && (iT.prototype = Object.create(null), (new iT).__proto__ || (IT = !1)), XT.prototype.eventNames = function() {
        var TT, iT, zT = [];
        if (0 === this._eventsCount) return zT;
        for (iT in TT = this._events) oT.call(TT, iT) && zT.push(IT ? iT.slice(1) : iT);
        return Object.getOwnPropertySymbols ? zT.concat(Object.getOwnPropertySymbols(TT)) : zT
      }, XT.prototype.listeners = function(TT) {
        var oT = IT ? IT + TT : TT,
          iT = this._events[oT];
        if (!iT) return [];
        if (iT.Dc) return [iT.Dc];
        for (var zT = 0, kT = iT.length, WT = new Array(kT); zT < kT; zT++) WT[zT] = iT[zT].Dc;
        return WT
      }, XT.prototype.listenerCount = function(TT) {
        var oT = IT ? IT + TT : TT,
          iT = this._events[oT];
        return iT ? iT.Dc ? 1 : iT.length : 0
      }, XT.prototype.emit = function(TT, oT, iT, zT, kT, WT) {
        var XT = IT ? IT + TT : TT;
        if (!this._events[XT]) return !1;
        var BT, FT, ST = this._events[XT],
          DT = arguments.length;
        if (ST.Dc) {
          switch (ST.once && this.removeListener(TT, ST.Dc, void 0, !0), DT) {
            case 1:
              return ST.Dc.call(ST.context), !0;
            case 2:
              return ST.Dc.call(ST.context, oT), !0;
            case 3:
              return ST.Dc.call(ST.context, oT, iT), !0;
            case 4:
              return ST.Dc.call(ST.context, oT, iT, zT), !0;
            case 5:
              return ST.Dc.call(ST.context, oT, iT, zT, kT), !0;
            case 6:
              return ST.Dc.call(ST.context, oT, iT, zT, kT, WT), !0
          }
          for (FT = 1, BT = new Array(DT - 1); FT < DT; FT++) BT[FT - 1] = arguments[FT];
          ST.Dc.apply(ST.context, BT)
        } else {
          var LT, xT = ST.length;
          for (FT = 0; FT < xT; FT++) switch (ST[FT].once && this.removeListener(TT, ST[FT].Dc, void 0, !0), DT) {
            case 1:
              ST[FT].Dc.call(ST[FT].context);
              break;
            case 2:
              ST[FT].Dc.call(ST[FT].context, oT);
              break;
            case 3:
              ST[FT].Dc.call(ST[FT].context, oT, iT);
              break;
            case 4:
              ST[FT].Dc.call(ST[FT].context, oT, iT, zT);
              break;
            default:
              if (!BT)
                for (LT = 1, BT = new Array(DT - 1); LT < DT; LT++) BT[LT - 1] = arguments[LT];
              ST[FT].Dc.apply(ST[FT].context, BT)
          }
        }
        return !0
      }, XT.prototype.on = function(TT, oT, IT) {
        return kT(this, TT, oT, IT, !1)
      }, XT.prototype.once = function(TT, oT, IT) {
        return kT(this, TT, oT, IT, !0)
      }, XT.prototype.removeListener = function(TT, oT, iT, zT) {
        var kT = IT ? IT + TT : TT;
        if (!this._events[kT]) return this;
        if (!oT) return WT(this, kT), this;
        var XT = this._events[kT];
        if (XT.Dc) XT.Dc !== oT || zT && !XT.once || iT && XT.context !== iT || WT(this, kT);
        else {
          for (var BT = 0, FT = [], ST = XT.length; BT < ST; BT++)(XT[BT].Dc !== oT || zT && !XT[BT].once || iT && XT[BT].context !== iT) && FT.push(XT[BT]);
          FT.length ? this._events[kT] = 1 === FT.length ? FT[0] : FT : WT(this, kT)
        }
        return this
      }, XT.prototype.hA = function(TT) {
        var oT;
        return TT ? (oT = IT ? IT + TT : TT, this._events[oT] && WT(this, oT)) : (this._events = new iT, this._eventsCount = 0), this
      }, XT.prototype.off = XT.prototype.removeListener, XT.prototype.addListener = XT.prototype.on, XT.prefixed = IT, XT.EventEmitter = XT, TT.exports = XT
    }(WT);
    var XT, BT, FT = kT(WT.exports);
    ! function(TT) {
      TT.assertEqual = TT => TT, TT.assertIs = function(TT) {}, TT.assertNever = function(TT) {
        throw new Error
      }, TT.arrayToEnum = TT => {
        const oT = {};
        for (const IT of TT) oT[IT] = IT;
        return oT
      }, TT.getValidEnumValues = oT => {
        const IT = TT.objectKeys(oT).filter((TT => "number" !== typeof oT[oT[TT]])),
          iT = {};
        for (const TT of IT) iT[TT] = oT[TT];
        return TT.objectValues(iT)
      }, TT.objectValues = oT => TT.objectKeys(oT).map((function(TT) {
        return oT[TT]
      })), TT.objectKeys = "function" === typeof Object.keys ? TT => Object.keys(TT) : TT => {
        const oT = [];
        for (const IT in TT) Object.prototype.hasOwnProperty.call(TT, IT) && oT.push(IT);
        return oT
      }, TT.find = (TT, oT) => {
        for (const IT of TT)
          if (oT(IT)) return IT
      }, TT.isInteger = "function" === typeof Number.isInteger ? TT => Number.isInteger(TT) : TT => "number" === typeof TT && isFinite(TT) && Math.floor(TT) === TT, TT.joinValues = function(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return TT.map((TT => "string" === typeof TT ? `'${TT}'` : TT)).join(oT)
      }, TT.jsonStringifyReplacer = (TT, oT) => "bigint" === typeof oT ? oT.toString() : oT
    }(XT || (XT = {})),
    function(TT) {
      TT.mergeShapes = (TT, oT) => ({
        ...TT,
        ...oT
      })
    }(BT || (BT = {}));
    const ST = XT.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      DT = TT => {
        switch (typeof TT) {
          case "undefined":
            return ST.undefined;
          case "string":
            return ST.string;
          case "number":
            return isNaN(TT) ? ST.nan : ST.number;
          case "boolean":
            return ST.boolean;
          case "function":
            return ST.function;
          case "bigint":
            return ST.bigint;
          case "symbol":
            return ST.symbol;
          case "object":
            return Array.isArray(TT) ? ST.array : null === TT ? ST.null : TT.then && "function" === typeof TT.then && TT.catch && "function" === typeof TT.catch ? ST.promise : "undefined" !== typeof Map && TT instanceof Map ? ST.map : "undefined" !== typeof Set && TT instanceof Set ? ST.set : "undefined" !== typeof Date && TT instanceof Date ? ST.date : ST.object;
          default:
            return ST.unknown
        }
      },
      LT = XT.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class xT extends Error {
      constructor(TT) {
        var oT;
        super(), oT = this, this.issues = [], this.addIssue = TT => {
          this.issues = [...this.issues, TT]
        }, this.addIssues = function() {
          let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          oT.issues = [...oT.issues, ...TT]
        };
        const IT = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, IT) : this.__proto__ = IT, this.name = "ZodError", this.issues = TT
      }
      get errors() {
        return this.issues
      }
      format(TT) {
        const oT = TT || function(TT) {
            return TT.message
          },
          IT = {
            _errors: []
          },
          iT = TT => {
            for (const zT of TT.issues)
              if ("invalid_union" === zT.code) zT.unionErrors.map(iT);
              else if ("invalid_return_type" === zT.code) iT(zT.returnTypeError);
            else if ("invalid_arguments" === zT.code) iT(zT.argumentsError);
            else if (0 === zT.path.length) IT._errors.push(oT(zT));
            else {
              let TT = IT,
                iT = 0;
              for (; iT < zT.path.length;) {
                const IT = zT.path[iT];
                iT === zT.path.length - 1 ? (TT[IT] = TT[IT] || {
                  _errors: []
                }, TT[IT]._errors.push(oT(zT))) : TT[IT] = TT[IT] || {
                  _errors: []
                }, TT = TT[IT], iT++
              }
            }
          };
        return iT(this), IT
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, XT.jsonStringifyReplacer, 2)
      }
      get Mc() {
        return 0 === this.issues.length
      }
      flatten() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : TT => TT.message;
        const oT = {},
          IT = [];
        for (const iT of this.issues) iT.path.length > 0 ? (oT[iT.path[0]] = oT[iT.path[0]] || [], oT[iT.path[0]].push(TT(iT))) : IT.push(TT(iT));
        return {
          formErrors: IT,
          fieldErrors: oT
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    xT.create = TT => new xT(TT);
    const cT = (TT, oT) => {
      let IT;
      switch (TT.code) {
        case LT.invalid_type:
          IT = TT.received === ST.undefined ? "Required" : `Expected ${TT.expected}, received ${TT.received}`;
          break;
        case LT.invalid_literal:
          IT = `Invalid literal value, expected ${JSON.stringify(TT.expected,XT.jsonStringifyReplacer)}`;
          break;
        case LT.unrecognized_keys:
          IT = `Unrecognized key(s) in object: ${XT.joinValues(TT.keys,", ")}`;
          break;
        case LT.invalid_union:
          IT = "Invalid input";
          break;
        case LT.invalid_union_discriminator:
          IT = `Invalid discriminator value. Expected ${XT.joinValues(TT.options)}`;
          break;
        case LT.invalid_enum_value:
          IT = `Invalid enum value. Expected ${XT.joinValues(TT.options)}, received '${TT.received}'`;
          break;
        case LT.invalid_arguments:
          IT = "Invalid function arguments";
          break;
        case LT.invalid_return_type:
          IT = "Invalid function return type";
          break;
        case LT.invalid_date:
          IT = "Invalid date";
          break;
        case LT.invalid_string:
          "object" === typeof TT.validation ? "includes" in TT.validation ? (IT = `Invalid input: must include "${TT.validation.includes}"`, "number" === typeof TT.validation.position && (IT = `${IT} at one or more positions greater than or equal to ${TT.validation.position}`)) : "startsWith" in TT.validation ? IT = `Invalid input: must start with "${TT.validation.startsWith}"` : "endsWith" in TT.validation ? IT = `Invalid input: must end with "${TT.validation.endsWith}"` : XT.assertNever(TT.validation) : IT = "regex" !== TT.validation ? `Invalid ${TT.validation}` : "Invalid";
          break;
        case LT.too_small:
          IT = "array" === TT.type ? `Array must contain ${TT.exact?"exactly":TT.inclusive?"at least":"more than"} ${TT.minimum} element(s)` : "string" === TT.type ? `String must contain ${TT.exact?"exactly":TT.inclusive?"at least":"over"} ${TT.minimum} character(s)` : "number" === TT.type ? `Number must be ${TT.exact?"exactly equal to ":TT.inclusive?"greater than or equal to ":"greater than "}${TT.minimum}` : "date" === TT.type ? `Date must be ${TT.exact?"exactly equal to ":TT.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(TT.minimum))}` : "Invalid input";
          break;
        case LT.too_big:
          IT = "array" === TT.type ? `Array must contain ${TT.exact?"exactly":TT.inclusive?"at most":"less than"} ${TT.maximum} element(s)` : "string" === TT.type ? `String must contain ${TT.exact?"exactly":TT.inclusive?"at most":"under"} ${TT.maximum} character(s)` : "number" === TT.type ? `Number must be ${TT.exact?"exactly":TT.inclusive?"less than or equal to":"less than"} ${TT.maximum}` : "bigint" === TT.type ? `BigInt must be ${TT.exact?"exactly":TT.inclusive?"less than or equal to":"less than"} ${TT.maximum}` : "date" === TT.type ? `Date must be ${TT.exact?"exactly":TT.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(TT.maximum))}` : "Invalid input";
          break;
        case LT.custom:
          IT = "Invalid input";
          break;
        case LT.invalid_intersection_types:
          IT = "Intersection results could not be merged";
          break;
        case LT.not_multiple_of:
          IT = `Number must be a multiple of ${TT.multipleOf}`;
          break;
        case LT.not_finite:
          IT = "Number must be finite";
          break;
        default:
          IT = oT.defaultError, XT.assertNever(TT)
      }
      return {
        message: IT
      }
    };
    let KT = cT;

    function MT() {
      return KT
    }
    const rT = TT => {
      const {
        data: oT,
        path: IT,
        errorMaps: iT,
        issueData: zT
      } = TT, kT = [...IT, ...zT.path || []], WT = {
        ...zT,
        path: kT
      };
      let XT = "";
      const BT = iT.filter((TT => !!TT)).slice().reverse();
      for (const FT of BT) XT = FT(WT, {
        data: oT,
        defaultError: XT
      }).message;
      return {
        ...zT,
        path: kT,
        message: zT.message || XT
      }
    };

    function AT(TT, oT) {
      const IT = rT({
        issueData: oT,
        data: TT.data,
        path: TT.path,
        errorMaps: [TT.common.contextualErrorMap, TT.schemaErrorMap, MT(), cT].filter((TT => !!TT))
      });
      TT.common.issues.push(IT)
    }
    class gT {
      constructor() {
        this.value = "valid"
      }
      Nc() {
        "valid" === this.value && (this.value = "Nc")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(TT, oT) {
        const IT = [];
        for (const iT of oT) {
          if ("aborted" === iT.status) return hT;
          "Nc" === iT.status && TT.Nc(), IT.push(iT.value)
        }
        return {
          status: TT.value,
          value: IT
        }
      }
      static async mergeObjectAsync(TT, oT) {
        const IT = [];
        for (const iT of oT) IT.push({
          key: await iT.key,
          value: await iT.value
        });
        return gT.mergeObjectSync(TT, IT)
      }
      static mergeObjectSync(TT, oT) {
        const IT = {};
        for (const iT of oT) {
          const {
            key: oT,
            value: zT
          } = iT;
          if ("aborted" === oT.status) return hT;
          if ("aborted" === zT.status) return hT;
          "Nc" === oT.status && TT.Nc(), "Nc" === zT.status && TT.Nc(), "__proto__" === oT.value || "undefined" === typeof zT.value && !iT.alwaysSet || (IT[oT.value] = zT.value)
        }
        return {
          status: TT.value,
          value: IT
        }
      }
    }
    const hT = Object.freeze({
        status: "aborted"
      }),
      wT = TT => ({
        status: "Nc",
        value: TT
      }),
      mT = TT => ({
        status: "valid",
        value: TT
      }),
      eT = TT => "aborted" === TT.status,
      RT = TT => "Nc" === TT.status,
      uT = TT => "valid" === TT.status,
      vT = TT => "undefined" !== typeof Promise && TT instanceof Promise;
    var ET;
    ! function(TT) {
      TT.errToObj = TT => "string" === typeof TT ? {
        message: TT
      } : TT || {}, TT.toString = TT => "string" === typeof TT ? TT : null === TT || void 0 === TT ? void 0 : TT.message
    }(ET || (ET = {}));
    class fT {
      constructor(TT, oT, IT, iT) {
        this._cachedPath = [], this.parent = TT, this.data = oT, this._path = IT, this._key = iT
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const CT = (TT, oT) => {
      if (uT(oT)) return {
        success: !0,
        data: oT.value
      };
      if (!TT.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const oT = new xT(TT.common.issues);
          return this._error = oT, this._error
        }
      }
    };

    function jT(TT) {
      if (!TT) return {};
      const {
        errorMap: oT,
        invalid_type_error: IT,
        required_error: iT,
        description: zT
      } = TT;
      if (oT && (IT || iT)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (oT) return {
        errorMap: oT,
        description: zT
      };
      return {
        errorMap: (TT, oT) => "invalid_type" !== TT.code ? {
          message: oT.defaultError
        } : "undefined" === typeof oT.data ? {
          message: null !== iT && void 0 !== iT ? iT : oT.defaultError
        } : {
          message: null !== IT && void 0 !== IT ? IT : oT.defaultError
        },
        description: zT
      }
    }
    class JT {
      constructor(TT) {
        this.spa = this.safeParseAsync, this._def = TT, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(TT) {
        return DT(TT.data)
      }
      _getOrReturnCtx(TT, oT) {
        return oT || {
          common: TT.parent.common,
          data: TT.data,
          parsedType: DT(TT.data),
          schemaErrorMap: this._def.errorMap,
          path: TT.path,
          parent: TT.parent
        }
      }
      _processInputParams(TT) {
        return {
          status: new gT,
          ctx: {
            common: TT.parent.common,
            data: TT.data,
            parsedType: DT(TT.data),
            schemaErrorMap: this._def.errorMap,
            path: TT.path,
            parent: TT.parent
          }
        }
      }
      _parseSync(TT) {
        const oT = this._parse(TT);
        if (vT(oT)) throw new Error("Synchronous parse encountered promise.");
        return oT
      }
      _parseAsync(TT) {
        const oT = this._parse(TT);
        return Promise.resolve(oT)
      }
      parse(TT, oT) {
        const IT = this.safeParse(TT, oT);
        if (IT.success) return IT.data;
        throw IT.error
      }
      safeParse(TT, oT) {
        var IT;
        const iT = {
            common: {
              issues: [],
              async: null !== (IT = null === oT || void 0 === oT ? void 0 : oT.async) && void 0 !== IT && IT,
              contextualErrorMap: null === oT || void 0 === oT ? void 0 : oT.errorMap
            },
            path: (null === oT || void 0 === oT ? void 0 : oT.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: TT,
            parsedType: DT(TT)
          },
          zT = this._parseSync({
            data: TT,
            path: iT.path,
            parent: iT
          });
        return CT(iT, zT)
      }
      async parseAsync(TT, oT) {
        const IT = await this.safeParseAsync(TT, oT);
        if (IT.success) return IT.data;
        throw IT.error
      }
      async safeParseAsync(TT, oT) {
        const IT = {
            common: {
              issues: [],
              contextualErrorMap: null === oT || void 0 === oT ? void 0 : oT.errorMap,
              async: !0
            },
            path: (null === oT || void 0 === oT ? void 0 : oT.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: TT,
            parsedType: DT(TT)
          },
          iT = this._parse({
            data: TT,
            path: IT.path,
            parent: IT
          }),
          zT = await (vT(iT) ? iT : Promise.resolve(iT));
        return CT(IT, zT)
      }
      refine(TT, oT) {
        const IT = TT => "string" === typeof oT || "undefined" === typeof oT ? {
          message: oT
        } : "function" === typeof oT ? oT(TT) : oT;
        return this._refinement(((oT, iT) => {
          const zT = TT(oT),
            kT = () => iT.addIssue({
              code: LT.custom,
              ...IT(oT)
            });
          return "undefined" !== typeof Promise && zT instanceof Promise ? zT.then((TT => !!TT || (kT(), !1))) : !!zT || (kT(), !1)
        }))
      }
      refinement(TT, oT) {
        return this._refinement(((IT, iT) => !!TT(IT) || (iT.addIssue("function" === typeof oT ? oT(IT, iT) : oT), !1)))
      }
      _refinement(TT) {
        return new ho({
          schema: this,
          typeName: Uo.ZodEffects,
          effect: {
            type: "refinement",
            refinement: TT
          }
        })
      }
      superRefine(TT) {
        return this._refinement(TT)
      }
      optional() {
        return wo.create(this, this._def)
      }
      nullable() {
        return mo.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return oo.create(this, this._def)
      }
      promise() {
        return go.create(this, this._def)
      }
      or(TT) {
        return zo.create([this, TT], this._def)
      }
      and(TT) {
        return Bo.create(this, TT, this._def)
      }
      transform(TT) {
        return new ho({
          ...jT(this._def),
          schema: this,
          typeName: Uo.ZodEffects,
          effect: {
            type: "transform",
            transform: TT
          }
        })
      }
      default (TT) {
        const oT = "function" === typeof TT ? TT : () => TT;
        return new eo({
          ...jT(this._def),
          innerType: this,
          defaultValue: oT,
          typeName: Uo.ZodDefault
        })
      }
      brand() {
        return new Eo({
          typeName: Uo.ZodBranded,
          type: this,
          ...jT(this._def)
        })
      } catch (TT) {
        const oT = "function" === typeof TT ? TT : () => TT;
        return new Ro({
          ...jT(this._def),
          innerType: this,
          catchValue: oT,
          typeName: Uo.ZodCatch
        })
      }
      describe(TT) {
        return new(0, this.constructor)({
          ...this._def,
          description: TT
        })
      }
      pipe(TT) {
        return fo.create(this, TT)
      }
      readonly() {
        return Co.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const UT = /^c[^\s-]{8,}$/i,
      aT = /^[a-z][a-z0-9]*$/,
      YT = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      QT = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      OT = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let HT;
    const nT = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      qT = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class ZT extends JT {
      _parse(TT) {
        this._def.coerce && (TT.data = String(TT.data));
        if (this._getType(TT) !== ST.string) {
          const oT = this._getOrReturnCtx(TT);
          return AT(oT, {
            code: LT.invalid_type,
            expected: ST.string,
            received: oT.parsedType
          }), hT
        }
        const oT = new gT;
        let IT;
        for (const BT of this._def.checks)
          if ("min" === BT.kind) TT.data.length < BT.value && (IT = this._getOrReturnCtx(TT, IT), AT(IT, {
            code: LT.too_small,
            minimum: BT.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: BT.message
          }), oT.Nc());
          else if ("max" === BT.kind) TT.data.length > BT.value && (IT = this._getOrReturnCtx(TT, IT), AT(IT, {
          code: LT.too_big,
          maximum: BT.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: BT.message
        }), oT.Nc());
        else if ("length" === BT.kind) {
          const iT = TT.data.length > BT.value,
            zT = TT.data.length < BT.value;
          (iT || zT) && (IT = this._getOrReturnCtx(TT, IT), iT ? AT(IT, {
            code: LT.too_big,
            maximum: BT.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: BT.message
          }) : zT && AT(IT, {
            code: LT.too_small,
            minimum: BT.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: BT.message
          }), oT.Nc())
        } else if ("email" === BT.kind) OT.test(TT.data) || (IT = this._getOrReturnCtx(TT, IT), AT(IT, {
          validation: "email",
          code: LT.invalid_string,
          message: BT.message
        }), oT.Nc());
        else if ("emoji" === BT.kind) HT || (HT = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), HT.test(TT.data) || (IT = this._getOrReturnCtx(TT, IT), AT(IT, {
          validation: "emoji",
          code: LT.invalid_string,
          message: BT.message
        }), oT.Nc());
        else if ("uuid" === BT.kind) QT.test(TT.data) || (IT = this._getOrReturnCtx(TT, IT), AT(IT, {
          validation: "uuid",
          code: LT.invalid_string,
          message: BT.message
        }), oT.Nc());
        else if ("cuid" === BT.kind) UT.test(TT.data) || (IT = this._getOrReturnCtx(TT, IT), AT(IT, {
          validation: "cuid",
          code: LT.invalid_string,
          message: BT.message
        }), oT.Nc());
        else if ("cuid2" === BT.kind) aT.test(TT.data) || (IT = this._getOrReturnCtx(TT, IT), AT(IT, {
          validation: "cuid2",
          code: LT.invalid_string,
          message: BT.message
        }), oT.Nc());
        else if ("ulid" === BT.kind) YT.test(TT.data) || (IT = this._getOrReturnCtx(TT, IT), AT(IT, {
          validation: "ulid",
          code: LT.invalid_string,
          message: BT.message
        }), oT.Nc());
        else if ("url" === BT.kind) try {
          new URL(TT.data)
        } catch (WT) {
          IT = this._getOrReturnCtx(TT, IT), AT(IT, {
            validation: "url",
            code: LT.invalid_string,
            message: BT.message
          }), oT.Nc()
        } else if ("regex" === BT.kind) {
          BT.regex.lastIndex = 0;
          BT.regex.test(TT.data) || (IT = this._getOrReturnCtx(TT, IT), AT(IT, {
            validation: "regex",
            code: LT.invalid_string,
            message: BT.message
          }), oT.Nc())
        } else if ("trim" === BT.kind) TT.data = TT.data.trim();
        else if ("includes" === BT.kind) TT.data.includes(BT.value, BT.position) || (IT = this._getOrReturnCtx(TT, IT), AT(IT, {
          code: LT.invalid_string,
          validation: {
            includes: BT.value,
            position: BT.position
          },
          message: BT.message
        }), oT.Nc());
        else if ("toLowerCase" === BT.kind) TT.data = TT.data.toLowerCase();
        else if ("toUpperCase" === BT.kind) TT.data = TT.data.toUpperCase();
        else if ("startsWith" === BT.kind) TT.data.startsWith(BT.value) || (IT = this._getOrReturnCtx(TT, IT), AT(IT, {
          code: LT.invalid_string,
          validation: {
            startsWith: BT.value
          },
          message: BT.message
        }), oT.Nc());
        else if ("endsWith" === BT.kind) TT.data.endsWith(BT.value) || (IT = this._getOrReturnCtx(TT, IT), AT(IT, {
          code: LT.invalid_string,
          validation: {
            endsWith: BT.value
          },
          message: BT.message
        }), oT.Nc());
        else if ("datetime" === BT.kind) {
          ((kT = BT).precision ? kT.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${kT.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${kT.precision}}Z$`) : 0 === kT.precision ? kT.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : kT.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(TT.data) || (IT = this._getOrReturnCtx(TT, IT), AT(IT, {
            code: LT.invalid_string,
            validation: "datetime",
            message: BT.message
          }), oT.Nc())
        } else "ip" === BT.kind ? (iT = TT.data, ("v4" !== (zT = BT.version) && zT || !nT.test(iT)) && ("v6" !== zT && zT || !qT.test(iT)) && (IT = this._getOrReturnCtx(TT, IT), AT(IT, {
          validation: "ip",
          code: LT.invalid_string,
          message: BT.message
        }), oT.Nc())) : XT.assertNever(BT);
        var iT, zT, kT;
        return {
          status: oT.value,
          value: TT.data
        }
      }
      _regex(TT, oT, IT) {
        return this.refinement((oT => TT.test(oT)), {
          validation: oT,
          code: LT.invalid_string,
          ...ET.errToObj(IT)
        })
      }
      _addCheck(TT) {
        return new ZT({
          ...this._def,
          checks: [...this._def.checks, TT]
        })
      }
      email(TT) {
        return this._addCheck({
          kind: "email",
          ...ET.errToObj(TT)
        })
      }
      url(TT) {
        return this._addCheck({
          kind: "url",
          ...ET.errToObj(TT)
        })
      }
      emoji(TT) {
        return this._addCheck({
          kind: "emoji",
          ...ET.errToObj(TT)
        })
      }
      uuid(TT) {
        return this._addCheck({
          kind: "uuid",
          ...ET.errToObj(TT)
        })
      }
      cuid(TT) {
        return this._addCheck({
          kind: "cuid",
          ...ET.errToObj(TT)
        })
      }
      cuid2(TT) {
        return this._addCheck({
          kind: "cuid2",
          ...ET.errToObj(TT)
        })
      }
      ulid(TT) {
        return this._addCheck({
          kind: "ulid",
          ...ET.errToObj(TT)
        })
      }
      ip(TT) {
        return this._addCheck({
          kind: "ip",
          ...ET.errToObj(TT)
        })
      }
      datetime(TT) {
        var oT;
        return "string" === typeof TT ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: TT
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === TT || void 0 === TT ? void 0 : TT.precision) ? null : null === TT || void 0 === TT ? void 0 : TT.precision,
          offset: null !== (oT = null === TT || void 0 === TT ? void 0 : TT.offset) && void 0 !== oT && oT,
          ...ET.errToObj(null === TT || void 0 === TT ? void 0 : TT.message)
        })
      }
      regex(TT, oT) {
        return this._addCheck({
          kind: "regex",
          regex: TT,
          ...ET.errToObj(oT)
        })
      }
      includes(TT, oT) {
        return this._addCheck({
          kind: "includes",
          value: TT,
          position: null === oT || void 0 === oT ? void 0 : oT.position,
          ...ET.errToObj(null === oT || void 0 === oT ? void 0 : oT.message)
        })
      }
      startsWith(TT, oT) {
        return this._addCheck({
          kind: "startsWith",
          value: TT,
          ...ET.errToObj(oT)
        })
      }
      endsWith(TT, oT) {
        return this._addCheck({
          kind: "endsWith",
          value: TT,
          ...ET.errToObj(oT)
        })
      }
      min(TT, oT) {
        return this._addCheck({
          kind: "min",
          value: TT,
          ...ET.errToObj(oT)
        })
      }
      max(TT, oT) {
        return this._addCheck({
          kind: "max",
          value: TT,
          ...ET.errToObj(oT)
        })
      }
      length(TT, oT) {
        return this._addCheck({
          kind: "length",
          value: TT,
          ...ET.errToObj(oT)
        })
      }
      nonempty(TT) {
        return this.min(1, ET.errToObj(TT))
      }
      trim() {
        return new ZT({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new ZT({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new ZT({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((TT => "datetime" === TT.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((TT => "email" === TT.kind))
      }
      get isURL() {
        return !!this._def.checks.find((TT => "url" === TT.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((TT => "emoji" === TT.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((TT => "uuid" === TT.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((TT => "cuid" === TT.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((TT => "cuid2" === TT.kind))
      }
      get isULID() {
        return !!this._def.checks.find((TT => "ulid" === TT.kind))
      }
      get isIP() {
        return !!this._def.checks.find((TT => "ip" === TT.kind))
      }
      get minLength() {
        let TT = null;
        for (const oT of this._def.checks) "min" === oT.kind && (null === TT || oT.value > TT) && (TT = oT.value);
        return TT
      }
      get maxLength() {
        let TT = null;
        for (const oT of this._def.checks) "max" === oT.kind && (null === TT || oT.value < TT) && (TT = oT.value);
        return TT
      }
    }

    function lT(TT, oT) {
      const IT = (TT.toString().split(".")[1] || "").length,
        iT = (oT.toString().split(".")[1] || "").length,
        zT = IT > iT ? IT : iT;
      return parseInt(TT.toFixed(zT).replace(".", "")) % parseInt(oT.toFixed(zT).replace(".", "")) / Math.pow(10, zT)
    }
    ZT.create = TT => {
      var oT;
      return new ZT({
        checks: [],
        typeName: Uo.ZodString,
        coerce: null !== (oT = null === TT || void 0 === TT ? void 0 : TT.coerce) && void 0 !== oT && oT,
        ...jT(TT)
      })
    };
    class sT extends JT {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(TT) {
        this._def.coerce && (TT.data = Number(TT.data));
        if (this._getType(TT) !== ST.number) {
          const oT = this._getOrReturnCtx(TT);
          return AT(oT, {
            code: LT.invalid_type,
            expected: ST.number,
            received: oT.parsedType
          }), hT
        }
        let oT;
        const IT = new gT;
        for (const iT of this._def.checks)
          if ("int" === iT.kind) XT.isInteger(TT.data) || (oT = this._getOrReturnCtx(TT, oT), AT(oT, {
            code: LT.invalid_type,
            expected: "integer",
            received: "float",
            message: iT.message
          }), IT.Nc());
          else if ("min" === iT.kind) {
          (iT.inclusive ? TT.data < iT.value : TT.data <= iT.value) && (oT = this._getOrReturnCtx(TT, oT), AT(oT, {
            code: LT.too_small,
            minimum: iT.value,
            type: "number",
            inclusive: iT.inclusive,
            exact: !1,
            message: iT.message
          }), IT.Nc())
        } else if ("max" === iT.kind) {
          (iT.inclusive ? TT.data > iT.value : TT.data >= iT.value) && (oT = this._getOrReturnCtx(TT, oT), AT(oT, {
            code: LT.too_big,
            maximum: iT.value,
            type: "number",
            inclusive: iT.inclusive,
            exact: !1,
            message: iT.message
          }), IT.Nc())
        } else "multipleOf" === iT.kind ? 0 !== lT(TT.data, iT.value) && (oT = this._getOrReturnCtx(TT, oT), AT(oT, {
          code: LT.not_multiple_of,
          multipleOf: iT.value,
          message: iT.message
        }), IT.Nc()) : "finite" === iT.kind ? Number.isFinite(TT.data) || (oT = this._getOrReturnCtx(TT, oT), AT(oT, {
          code: LT.not_finite,
          message: iT.message
        }), IT.Nc()) : XT.assertNever(iT);
        return {
          status: IT.value,
          value: TT.data
        }
      }
      gte(TT, oT) {
        return this.setLimit("min", TT, !0, ET.toString(oT))
      }
      gt(TT, oT) {
        return this.setLimit("min", TT, !1, ET.toString(oT))
      }
      lte(TT, oT) {
        return this.setLimit("max", TT, !0, ET.toString(oT))
      }
      lt(TT, oT) {
        return this.setLimit("max", TT, !1, ET.toString(oT))
      }
      setLimit(TT, oT, IT, iT) {
        return new sT({
          ...this._def,
          checks: [...this._def.checks, {
            kind: TT,
            value: oT,
            inclusive: IT,
            message: ET.toString(iT)
          }]
        })
      }
      _addCheck(TT) {
        return new sT({
          ...this._def,
          checks: [...this._def.checks, TT]
        })
      }
      int(TT) {
        return this._addCheck({
          kind: "int",
          message: ET.toString(TT)
        })
      }
      positive(TT) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: ET.toString(TT)
        })
      }
      negative(TT) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: ET.toString(TT)
        })
      }
      nonpositive(TT) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: ET.toString(TT)
        })
      }
      nonnegative(TT) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: ET.toString(TT)
        })
      }
      multipleOf(TT, oT) {
        return this._addCheck({
          kind: "multipleOf",
          value: TT,
          message: ET.toString(oT)
        })
      }
      finite(TT) {
        return this._addCheck({
          kind: "finite",
          message: ET.toString(TT)
        })
      }
      safe(TT) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: ET.toString(TT)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: ET.toString(TT)
        })
      }
      get minValue() {
        let TT = null;
        for (const oT of this._def.checks) "min" === oT.kind && (null === TT || oT.value > TT) && (TT = oT.value);
        return TT
      }
      get maxValue() {
        let TT = null;
        for (const oT of this._def.checks) "max" === oT.kind && (null === TT || oT.value < TT) && (TT = oT.value);
        return TT
      }
      get isInt() {
        return !!this._def.checks.find((TT => "int" === TT.kind || "multipleOf" === TT.kind && XT.isInteger(TT.value)))
      }
      get isFinite() {
        let TT = null,
          oT = null;
        for (const IT of this._def.checks) {
          if ("finite" === IT.kind || "int" === IT.kind || "multipleOf" === IT.kind) return !0;
          "min" === IT.kind ? (null === oT || IT.value > oT) && (oT = IT.value) : "max" === IT.kind && (null === TT || IT.value < TT) && (TT = IT.value)
        }
        return Number.isFinite(oT) && Number.isFinite(TT)
      }
    }
    sT.create = TT => new sT({
      checks: [],
      typeName: Uo.ZodNumber,
      coerce: (null === TT || void 0 === TT ? void 0 : TT.coerce) || !1,
      ...jT(TT)
    });
    class tT extends JT {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(TT) {
        this._def.coerce && (TT.data = BigInt(TT.data));
        if (this._getType(TT) !== ST.bigint) {
          const oT = this._getOrReturnCtx(TT);
          return AT(oT, {
            code: LT.invalid_type,
            expected: ST.bigint,
            received: oT.parsedType
          }), hT
        }
        let oT;
        const IT = new gT;
        for (const iT of this._def.checks)
          if ("min" === iT.kind) {
            (iT.inclusive ? TT.data < iT.value : TT.data <= iT.value) && (oT = this._getOrReturnCtx(TT, oT), AT(oT, {
              code: LT.too_small,
              type: "bigint",
              minimum: iT.value,
              inclusive: iT.inclusive,
              message: iT.message
            }), IT.Nc())
          } else if ("max" === iT.kind) {
          (iT.inclusive ? TT.data > iT.value : TT.data >= iT.value) && (oT = this._getOrReturnCtx(TT, oT), AT(oT, {
            code: LT.too_big,
            type: "bigint",
            maximum: iT.value,
            inclusive: iT.inclusive,
            message: iT.message
          }), IT.Nc())
        } else "multipleOf" === iT.kind ? TT.data % iT.value !== BigInt(0) && (oT = this._getOrReturnCtx(TT, oT), AT(oT, {
          code: LT.not_multiple_of,
          multipleOf: iT.value,
          message: iT.message
        }), IT.Nc()) : XT.assertNever(iT);
        return {
          status: IT.value,
          value: TT.data
        }
      }
      gte(TT, oT) {
        return this.setLimit("min", TT, !0, ET.toString(oT))
      }
      gt(TT, oT) {
        return this.setLimit("min", TT, !1, ET.toString(oT))
      }
      lte(TT, oT) {
        return this.setLimit("max", TT, !0, ET.toString(oT))
      }
      lt(TT, oT) {
        return this.setLimit("max", TT, !1, ET.toString(oT))
      }
      setLimit(TT, oT, IT, iT) {
        return new tT({
          ...this._def,
          checks: [...this._def.checks, {
            kind: TT,
            value: oT,
            inclusive: IT,
            message: ET.toString(iT)
          }]
        })
      }
      _addCheck(TT) {
        return new tT({
          ...this._def,
          checks: [...this._def.checks, TT]
        })
      }
      positive(TT) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: ET.toString(TT)
        })
      }
      negative(TT) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: ET.toString(TT)
        })
      }
      nonpositive(TT) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: ET.toString(TT)
        })
      }
      nonnegative(TT) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: ET.toString(TT)
        })
      }
      multipleOf(TT, oT) {
        return this._addCheck({
          kind: "multipleOf",
          value: TT,
          message: ET.toString(oT)
        })
      }
      get minValue() {
        let TT = null;
        for (const oT of this._def.checks) "min" === oT.kind && (null === TT || oT.value > TT) && (TT = oT.value);
        return TT
      }
      get maxValue() {
        let TT = null;
        for (const oT of this._def.checks) "max" === oT.kind && (null === TT || oT.value < TT) && (TT = oT.value);
        return TT
      }
    }
    tT.create = TT => {
      var oT;
      return new tT({
        checks: [],
        typeName: Uo.ZodBigInt,
        coerce: null !== (oT = null === TT || void 0 === TT ? void 0 : TT.coerce) && void 0 !== oT && oT,
        ...jT(TT)
      })
    };
    class GT extends JT {
      _parse(TT) {
        this._def.coerce && (TT.data = Boolean(TT.data));
        if (this._getType(TT) !== ST.boolean) {
          const oT = this._getOrReturnCtx(TT);
          return AT(oT, {
            code: LT.invalid_type,
            expected: ST.boolean,
            received: oT.parsedType
          }), hT
        }
        return mT(TT.data)
      }
    }
    GT.create = TT => new GT({
      typeName: Uo.ZodBoolean,
      coerce: (null === TT || void 0 === TT ? void 0 : TT.coerce) || !1,
      ...jT(TT)
    });
    class pT extends JT {
      _parse(TT) {
        this._def.coerce && (TT.data = new Date(TT.data));
        if (this._getType(TT) !== ST.date) {
          const oT = this._getOrReturnCtx(TT);
          return AT(oT, {
            code: LT.invalid_type,
            expected: ST.date,
            received: oT.parsedType
          }), hT
        }
        if (isNaN(TT.data.getTime())) {
          return AT(this._getOrReturnCtx(TT), {
            code: LT.invalid_date
          }), hT
        }
        const oT = new gT;
        let IT;
        for (const iT of this._def.checks) "min" === iT.kind ? TT.data.getTime() < iT.value && (IT = this._getOrReturnCtx(TT, IT), AT(IT, {
          code: LT.too_small,
          message: iT.message,
          inclusive: !0,
          exact: !1,
          minimum: iT.value,
          type: "date"
        }), oT.Nc()) : "max" === iT.kind ? TT.data.getTime() > iT.value && (IT = this._getOrReturnCtx(TT, IT), AT(IT, {
          code: LT.too_big,
          message: iT.message,
          inclusive: !0,
          exact: !1,
          maximum: iT.value,
          type: "date"
        }), oT.Nc()) : XT.assertNever(iT);
        return {
          status: oT.value,
          value: new Date(TT.data.getTime())
        }
      }
      _addCheck(TT) {
        return new pT({
          ...this._def,
          checks: [...this._def.checks, TT]
        })
      }
      min(TT, oT) {
        return this._addCheck({
          kind: "min",
          value: TT.getTime(),
          message: ET.toString(oT)
        })
      }
      max(TT, oT) {
        return this._addCheck({
          kind: "max",
          value: TT.getTime(),
          message: ET.toString(oT)
        })
      }
      get minDate() {
        let TT = null;
        for (const oT of this._def.checks) "min" === oT.kind && (null === TT || oT.value > TT) && (TT = oT.value);
        return null != TT ? new Date(TT) : null
      }
      get maxDate() {
        let TT = null;
        for (const oT of this._def.checks) "max" === oT.kind && (null === TT || oT.value < TT) && (TT = oT.value);
        return null != TT ? new Date(TT) : null
      }
    }
    pT.create = TT => new pT({
      checks: [],
      coerce: (null === TT || void 0 === TT ? void 0 : TT.coerce) || !1,
      typeName: Uo.ZodDate,
      ...jT(TT)
    });
    class bT extends JT {
      _parse(TT) {
        if (this._getType(TT) !== ST.symbol) {
          const oT = this._getOrReturnCtx(TT);
          return AT(oT, {
            code: LT.invalid_type,
            expected: ST.symbol,
            received: oT.parsedType
          }), hT
        }
        return mT(TT.data)
      }
    }
    bT.create = TT => new bT({
      typeName: Uo.ZodSymbol,
      ...jT(TT)
    });
    class yT extends JT {
      _parse(TT) {
        if (this._getType(TT) !== ST.undefined) {
          const oT = this._getOrReturnCtx(TT);
          return AT(oT, {
            code: LT.invalid_type,
            expected: ST.undefined,
            received: oT.parsedType
          }), hT
        }
        return mT(TT.data)
      }
    }
    yT.create = TT => new yT({
      typeName: Uo.ZodUndefined,
      ...jT(TT)
    });
    class NT extends JT {
      _parse(TT) {
        if (this._getType(TT) !== ST.null) {
          const oT = this._getOrReturnCtx(TT);
          return AT(oT, {
            code: LT.invalid_type,
            expected: ST.null,
            received: oT.parsedType
          }), hT
        }
        return mT(TT.data)
      }
    }
    NT.create = TT => new NT({
      typeName: Uo.ZodNull,
      ...jT(TT)
    });
    class PT extends JT {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(TT) {
        return mT(TT.data)
      }
    }
    PT.create = TT => new PT({
      typeName: Uo.ZodAny,
      ...jT(TT)
    });
    class dT extends JT {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(TT) {
        return mT(TT.data)
      }
    }
    dT.create = TT => new dT({
      typeName: Uo.ZodUnknown,
      ...jT(TT)
    });
    class VT extends JT {
      _parse(TT) {
        const oT = this._getOrReturnCtx(TT);
        return AT(oT, {
          code: LT.invalid_type,
          expected: ST.never,
          received: oT.parsedType
        }), hT
      }
    }
    VT.create = TT => new VT({
      typeName: Uo.ZodNever,
      ...jT(TT)
    });
    class To extends JT {
      _parse(TT) {
        if (this._getType(TT) !== ST.undefined) {
          const oT = this._getOrReturnCtx(TT);
          return AT(oT, {
            code: LT.invalid_type,
            expected: ST.void,
            received: oT.parsedType
          }), hT
        }
        return mT(TT.data)
      }
    }
    To.create = TT => new To({
      typeName: Uo.ZodVoid,
      ...jT(TT)
    });
    class oo extends JT {
      _parse(TT) {
        const {
          ctx: oT,
          status: IT
        } = this._processInputParams(TT), iT = this._def;
        if (oT.parsedType !== ST.array) return AT(oT, {
          code: LT.invalid_type,
          expected: ST.array,
          received: oT.parsedType
        }), hT;
        if (null !== iT.exactLength) {
          const TT = oT.data.length > iT.exactLength.value,
            zT = oT.data.length < iT.exactLength.value;
          (TT || zT) && (AT(oT, {
            code: TT ? LT.too_big : LT.too_small,
            minimum: zT ? iT.exactLength.value : void 0,
            maximum: TT ? iT.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: iT.exactLength.message
          }), IT.Nc())
        }
        if (null !== iT.minLength && oT.data.length < iT.minLength.value && (AT(oT, {
            code: LT.too_small,
            minimum: iT.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: iT.minLength.message
          }), IT.Nc()), null !== iT.maxLength && oT.data.length > iT.maxLength.value && (AT(oT, {
            code: LT.too_big,
            maximum: iT.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: iT.maxLength.message
          }), IT.Nc()), oT.common.async) return Promise.all([...oT.data].map(((TT, IT) => iT.type._parseAsync(new fT(oT, TT, oT.path, IT))))).then((TT => gT.mergeArray(IT, TT)));
        const zT = [...oT.data].map(((TT, IT) => iT.type._parseSync(new fT(oT, TT, oT.path, IT))));
        return gT.mergeArray(IT, zT)
      }
      get element() {
        return this._def.type
      }
      min(TT, oT) {
        return new oo({
          ...this._def,
          minLength: {
            value: TT,
            message: ET.toString(oT)
          }
        })
      }
      max(TT, oT) {
        return new oo({
          ...this._def,
          maxLength: {
            value: TT,
            message: ET.toString(oT)
          }
        })
      }
      length(TT, oT) {
        return new oo({
          ...this._def,
          exactLength: {
            value: TT,
            message: ET.toString(oT)
          }
        })
      }
      nonempty(TT) {
        return this.min(1, TT)
      }
    }

    function Io(TT) {
      if (TT instanceof io) {
        const oT = {};
        for (const IT in TT.shape) {
          const iT = TT.shape[IT];
          oT[IT] = wo.create(Io(iT))
        }
        return new io({
          ...TT._def,
          shape: () => oT
        })
      }
      return TT instanceof oo ? new oo({
        ...TT._def,
        type: Io(TT.element)
      }) : TT instanceof wo ? wo.create(Io(TT.unwrap())) : TT instanceof mo ? mo.create(Io(TT.unwrap())) : TT instanceof Fo ? Fo.create(TT.items.map((TT => Io(TT)))) : TT
    }
    oo.create = (TT, oT) => new oo({
      type: TT,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: Uo.ZodArray,
      ...jT(oT)
    });
    class io extends JT {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const TT = this._def.shape(),
          oT = XT.objectKeys(TT);
        return this._cached = {
          shape: TT,
          keys: oT
        }
      }
      _parse(TT) {
        if (this._getType(TT) !== ST.object) {
          const oT = this._getOrReturnCtx(TT);
          return AT(oT, {
            code: LT.invalid_type,
            expected: ST.object,
            received: oT.parsedType
          }), hT
        }
        const {
          status: oT,
          ctx: IT
        } = this._processInputParams(TT), {
          shape: iT,
          keys: zT
        } = this._getCached(), kT = [];
        if (!(this._def.catchall instanceof VT && "strip" === this._def.unknownKeys))
          for (const XT in IT.data) zT.includes(XT) || kT.push(XT);
        const WT = [];
        for (const XT of zT) {
          const TT = iT[XT],
            oT = IT.data[XT];
          WT.push({
            key: {
              status: "valid",
              value: XT
            },
            value: TT._parse(new fT(IT, oT, IT.path, XT)),
            alwaysSet: XT in IT.data
          })
        }
        if (this._def.catchall instanceof VT) {
          const TT = this._def.unknownKeys;
          if ("passthrough" === TT)
            for (const oT of kT) WT.push({
              key: {
                status: "valid",
                value: oT
              },
              value: {
                status: "valid",
                value: IT.data[oT]
              }
            });
          else if ("strict" === TT) kT.length > 0 && (AT(IT, {
            code: LT.unrecognized_keys,
            keys: kT
          }), oT.Nc());
          else if ("strip" !== TT) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const TT = this._def.catchall;
          for (const oT of kT) {
            const iT = IT.data[oT];
            WT.push({
              key: {
                status: "valid",
                value: oT
              },
              value: TT._parse(new fT(IT, iT, IT.path, oT)),
              alwaysSet: oT in IT.data
            })
          }
        }
        return IT.common.async ? Promise.resolve().then((async () => {
          const TT = [];
          for (const oT of WT) {
            const IT = await oT.key;
            TT.push({
              key: IT,
              value: await oT.value,
              alwaysSet: oT.alwaysSet
            })
          }
          return TT
        })).then((TT => gT.mergeObjectSync(oT, TT))) : gT.mergeObjectSync(oT, WT)
      }
      get shape() {
        return this._def.shape()
      }
      strict(TT) {
        return ET.errToObj, new io({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== TT ? {
            errorMap: (oT, IT) => {
              var iT, zT, kT, WT;
              const XT = null !== (kT = null === (zT = (iT = this._def).errorMap) || void 0 === zT ? void 0 : zT.call(iT, oT, IT).message) && void 0 !== kT ? kT : IT.defaultError;
              return "unrecognized_keys" === oT.code ? {
                message: null !== (WT = ET.errToObj(TT).message) && void 0 !== WT ? WT : XT
              } : {
                message: XT
              }
            }
          } : {}
        })
      }
      strip() {
        return new io({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new io({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(TT) {
        return new io({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...TT
          })
        })
      }
      merge(TT) {
        return new io({
          unknownKeys: TT._def.unknownKeys,
          catchall: TT._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...TT._def.shape()
          }),
          typeName: Uo.ZodObject
        })
      }
      setKey(TT, oT) {
        return this.augment({
          [TT]: oT
        })
      }
      catchall(TT) {
        return new io({
          ...this._def,
          catchall: TT
        })
      }
      PL(TT) {
        const oT = {};
        return XT.objectKeys(TT).forEach((IT => {
          TT[IT] && this.shape[IT] && (oT[IT] = this.shape[IT])
        })), new io({
          ...this._def,
          shape: () => oT
        })
      }
      omit(TT) {
        const oT = {};
        return XT.objectKeys(this.shape).forEach((IT => {
          TT[IT] || (oT[IT] = this.shape[IT])
        })), new io({
          ...this._def,
          shape: () => oT
        })
      }
      deepPartial() {
        return Io(this)
      }
      partial(TT) {
        const oT = {};
        return XT.objectKeys(this.shape).forEach((IT => {
          const iT = this.shape[IT];
          TT && !TT[IT] ? oT[IT] = iT : oT[IT] = iT.optional()
        })), new io({
          ...this._def,
          shape: () => oT
        })
      }
      required(TT) {
        const oT = {};
        return XT.objectKeys(this.shape).forEach((IT => {
          if (TT && !TT[IT]) oT[IT] = this.shape[IT];
          else {
            let TT = this.shape[IT];
            for (; TT instanceof wo;) TT = TT._def.innerType;
            oT[IT] = TT
          }
        })), new io({
          ...this._def,
          shape: () => oT
        })
      }
      keyof() {
        return Mo(XT.objectKeys(this.shape))
      }
    }
    io.create = (TT, oT) => new io({
      shape: () => TT,
      unknownKeys: "strip",
      catchall: VT.create(),
      typeName: Uo.ZodObject,
      ...jT(oT)
    }), io.strictCreate = (TT, oT) => new io({
      shape: () => TT,
      unknownKeys: "strict",
      catchall: VT.create(),
      typeName: Uo.ZodObject,
      ...jT(oT)
    }), io.lazycreate = (TT, oT) => new io({
      shape: TT,
      unknownKeys: "strip",
      catchall: VT.create(),
      typeName: Uo.ZodObject,
      ...jT(oT)
    });
    class zo extends JT {
      _parse(TT) {
        const {
          ctx: oT
        } = this._processInputParams(TT), IT = this._def.options;
        if (oT.common.async) return Promise.all(IT.map((async TT => {
          const IT = {
            ...oT,
            common: {
              ...oT.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await TT._parseAsync({
              data: oT.data,
              path: oT.path,
              parent: IT
            }),
            ctx: IT
          }
        }))).then((function(TT) {
          for (const oT of TT)
            if ("valid" === oT.result.status) return oT.result;
          for (const iT of TT)
            if ("Nc" === iT.result.status) return oT.common.issues.push(...iT.ctx.common.issues), iT.result;
          const IT = TT.map((TT => new xT(TT.ctx.common.issues)));
          return AT(oT, {
            code: LT.invalid_union,
            unionErrors: IT
          }), hT
        }));
        {
          let TT;
          const iT = [];
          for (const kT of IT) {
            const IT = {
                ...oT,
                common: {
                  ...oT.common,
                  issues: []
                },
                parent: null
              },
              zT = kT._parseSync({
                data: oT.data,
                path: oT.path,
                parent: IT
              });
            if ("valid" === zT.status) return zT;
            "Nc" !== zT.status || TT || (TT = {
              result: zT,
              ctx: IT
            }), IT.common.issues.length && iT.push(IT.common.issues)
          }
          if (TT) return oT.common.issues.push(...TT.ctx.common.issues), TT.result;
          const zT = iT.map((TT => new xT(TT)));
          return AT(oT, {
            code: LT.invalid_union,
            unionErrors: zT
          }), hT
        }
      }
      get options() {
        return this._def.options
      }
    }
    zo.create = (TT, oT) => new zo({
      options: TT,
      typeName: Uo.ZodUnion,
      ...jT(oT)
    });
    const ko = TT => TT instanceof co ? ko(TT.schema) : TT instanceof ho ? ko(TT.innerType()) : TT instanceof Ko ? [TT.value] : TT instanceof ro ? TT.options : TT instanceof Ao ? Object.keys(TT.enum) : TT instanceof eo ? ko(TT._def.innerType) : TT instanceof yT ? [void 0] : TT instanceof NT ? [null] : null;
    class Wo extends JT {
      _parse(TT) {
        const {
          ctx: oT
        } = this._processInputParams(TT);
        if (oT.parsedType !== ST.object) return AT(oT, {
          code: LT.invalid_type,
          expected: ST.object,
          received: oT.parsedType
        }), hT;
        const IT = this.discriminator,
          iT = oT.data[IT],
          zT = this.optionsMap.get(iT);
        return zT ? oT.common.async ? zT._parseAsync({
          data: oT.data,
          path: oT.path,
          parent: oT
        }) : zT._parseSync({
          data: oT.data,
          path: oT.path,
          parent: oT
        }) : (AT(oT, {
          code: LT.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [IT]
        }), hT)
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
      static create(TT, oT, IT) {
        const iT = new Map;
        for (const zT of oT) {
          const oT = ko(zT.shape[TT]);
          if (!oT) throw new Error(`A discriminator value for key \`${TT}\` could not be extracted from all schema options`);
          for (const IT of oT) {
            if (iT.has(IT)) throw new Error(`Discriminator property ${String(TT)} has duplicate value ${String(IT)}`);
            iT.set(IT, zT)
          }
        }
        return new Wo({
          typeName: Uo.ZodDiscriminatedUnion,
          discriminator: TT,
          options: oT,
          optionsMap: iT,
          ...jT(IT)
        })
      }
    }

    function Xo(TT, oT) {
      const IT = DT(TT),
        iT = DT(oT);
      if (TT === oT) return {
        valid: !0,
        data: TT
      };
      if (IT === ST.object && iT === ST.object) {
        const IT = XT.objectKeys(oT),
          iT = XT.objectKeys(TT).filter((TT => -1 !== IT.indexOf(TT))),
          zT = {
            ...TT,
            ...oT
          };
        for (const kT of iT) {
          const IT = Xo(TT[kT], oT[kT]);
          if (!IT.valid) return {
            valid: !1
          };
          zT[kT] = IT.data
        }
        return {
          valid: !0,
          data: zT
        }
      }
      if (IT === ST.array && iT === ST.array) {
        if (TT.length !== oT.length) return {
          valid: !1
        };
        const IT = [];
        for (let iT = 0; iT < TT.length; iT++) {
          const zT = Xo(TT[iT], oT[iT]);
          if (!zT.valid) return {
            valid: !1
          };
          IT.push(zT.data)
        }
        return {
          valid: !0,
          data: IT
        }
      }
      return IT === ST.date && iT === ST.date && +TT === +oT ? {
        valid: !0,
        data: TT
      } : {
        valid: !1
      }
    }
    class Bo extends JT {
      _parse(TT) {
        const {
          status: oT,
          ctx: IT
        } = this._processInputParams(TT), iT = (TT, iT) => {
          if (eT(TT) || eT(iT)) return hT;
          const zT = Xo(TT.value, iT.value);
          return zT.valid ? ((RT(TT) || RT(iT)) && oT.Nc(), {
            status: oT.value,
            value: zT.data
          }) : (AT(IT, {
            code: LT.invalid_intersection_types
          }), hT)
        };
        return IT.common.async ? Promise.all([this._def.left._parseAsync({
          data: IT.data,
          path: IT.path,
          parent: IT
        }), this._def.right._parseAsync({
          data: IT.data,
          path: IT.path,
          parent: IT
        })]).then((TT => {
          let [oT, IT] = TT;
          return iT(oT, IT)
        })) : iT(this._def.left._parseSync({
          data: IT.data,
          path: IT.path,
          parent: IT
        }), this._def.right._parseSync({
          data: IT.data,
          path: IT.path,
          parent: IT
        }))
      }
    }
    Bo.create = (TT, oT, IT) => new Bo({
      left: TT,
      right: oT,
      typeName: Uo.ZodIntersection,
      ...jT(IT)
    });
    class Fo extends JT {
      _parse(TT) {
        const {
          status: oT,
          ctx: IT
        } = this._processInputParams(TT);
        if (IT.parsedType !== ST.array) return AT(IT, {
          code: LT.invalid_type,
          expected: ST.array,
          received: IT.parsedType
        }), hT;
        if (IT.data.length < this._def.items.length) return AT(IT, {
          code: LT.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), hT;
        !this._def.rest && IT.data.length > this._def.items.length && (AT(IT, {
          code: LT.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), oT.Nc());
        const iT = [...IT.data].map(((TT, oT) => {
          const iT = this._def.items[oT] || this._def.rest;
          return iT ? iT._parse(new fT(IT, TT, IT.path, oT)) : null
        })).filter((TT => !!TT));
        return IT.common.async ? Promise.all(iT).then((TT => gT.mergeArray(oT, TT))) : gT.mergeArray(oT, iT)
      }
      get items() {
        return this._def.items
      }
      rest(TT) {
        return new Fo({
          ...this._def,
          rest: TT
        })
      }
    }
    Fo.create = (TT, oT) => {
      if (!Array.isArray(TT)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new Fo({
        items: TT,
        typeName: Uo.ZodTuple,
        rest: null,
        ...jT(oT)
      })
    };
    class So extends JT {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(TT) {
        const {
          status: oT,
          ctx: IT
        } = this._processInputParams(TT);
        if (IT.parsedType !== ST.object) return AT(IT, {
          code: LT.invalid_type,
          expected: ST.object,
          received: IT.parsedType
        }), hT;
        const iT = [],
          zT = this._def.keyType,
          kT = this._def.valueType;
        for (const WT in IT.data) iT.push({
          key: zT._parse(new fT(IT, WT, IT.path, WT)),
          value: kT._parse(new fT(IT, IT.data[WT], IT.path, WT))
        });
        return IT.common.async ? gT.mergeObjectAsync(oT, iT) : gT.mergeObjectSync(oT, iT)
      }
      get element() {
        return this._def.valueType
      }
      static create(TT, oT, IT) {
        return new So(oT instanceof JT ? {
          keyType: TT,
          valueType: oT,
          typeName: Uo.ZodRecord,
          ...jT(IT)
        } : {
          keyType: ZT.create(),
          valueType: TT,
          typeName: Uo.ZodRecord,
          ...jT(oT)
        })
      }
    }
    class Do extends JT {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(TT) {
        const {
          status: oT,
          ctx: IT
        } = this._processInputParams(TT);
        if (IT.parsedType !== ST.map) return AT(IT, {
          code: LT.invalid_type,
          expected: ST.map,
          received: IT.parsedType
        }), hT;
        const iT = this._def.keyType,
          zT = this._def.valueType,
          kT = [...IT.data.entries()].map(((TT, oT) => {
            let [kT, WT] = TT;
            return {
              key: iT._parse(new fT(IT, kT, IT.path, [oT, "key"])),
              value: zT._parse(new fT(IT, WT, IT.path, [oT, "value"]))
            }
          }));
        if (IT.common.async) {
          const TT = new Map;
          return Promise.resolve().then((async () => {
            for (const IT of kT) {
              const iT = await IT.key,
                zT = await IT.value;
              if ("aborted" === iT.status || "aborted" === zT.status) return hT;
              "Nc" !== iT.status && "Nc" !== zT.status || oT.Nc(), TT.set(iT.value, zT.value)
            }
            return {
              status: oT.value,
              value: TT
            }
          }))
        } {
          const TT = new Map;
          for (const IT of kT) {
            const iT = IT.key,
              zT = IT.value;
            if ("aborted" === iT.status || "aborted" === zT.status) return hT;
            "Nc" !== iT.status && "Nc" !== zT.status || oT.Nc(), TT.set(iT.value, zT.value)
          }
          return {
            status: oT.value,
            value: TT
          }
        }
      }
    }
    Do.create = (TT, oT, IT) => new Do({
      valueType: oT,
      keyType: TT,
      typeName: Uo.ZodMap,
      ...jT(IT)
    });
    class Lo extends JT {
      _parse(TT) {
        const {
          status: oT,
          ctx: IT
        } = this._processInputParams(TT);
        if (IT.parsedType !== ST.set) return AT(IT, {
          code: LT.invalid_type,
          expected: ST.set,
          received: IT.parsedType
        }), hT;
        const iT = this._def;
        null !== iT.minSize && IT.data.size < iT.minSize.value && (AT(IT, {
          code: LT.too_small,
          minimum: iT.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: iT.minSize.message
        }), oT.Nc()), null !== iT.maxSize && IT.data.size > iT.maxSize.value && (AT(IT, {
          code: LT.too_big,
          maximum: iT.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: iT.maxSize.message
        }), oT.Nc());
        const zT = this._def.valueType;

        function kT(TT) {
          const IT = new Set;
          for (const iT of TT) {
            if ("aborted" === iT.status) return hT;
            "Nc" === iT.status && oT.Nc(), IT.add(iT.value)
          }
          return {
            status: oT.value,
            value: IT
          }
        }
        const WT = [...IT.data.values()].map(((TT, oT) => zT._parse(new fT(IT, TT, IT.path, oT))));
        return IT.common.async ? Promise.all(WT).then((TT => kT(TT))) : kT(WT)
      }
      min(TT, oT) {
        return new Lo({
          ...this._def,
          minSize: {
            value: TT,
            message: ET.toString(oT)
          }
        })
      }
      max(TT, oT) {
        return new Lo({
          ...this._def,
          maxSize: {
            value: TT,
            message: ET.toString(oT)
          }
        })
      }
      size(TT, oT) {
        return this.min(TT, oT).max(TT, oT)
      }
      nonempty(TT) {
        return this.min(1, TT)
      }
    }
    Lo.create = (TT, oT) => new Lo({
      valueType: TT,
      minSize: null,
      maxSize: null,
      typeName: Uo.ZodSet,
      ...jT(oT)
    });
    class xo extends JT {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(TT) {
        const {
          ctx: oT
        } = this._processInputParams(TT);
        if (oT.parsedType !== ST.function) return AT(oT, {
          code: LT.invalid_type,
          expected: ST.function,
          received: oT.parsedType
        }), hT;

        function IT(TT, IT) {
          return rT({
            data: TT,
            path: oT.path,
            errorMaps: [oT.common.contextualErrorMap, oT.schemaErrorMap, MT(), cT].filter((TT => !!TT)),
            issueData: {
              code: LT.invalid_arguments,
              argumentsError: IT
            }
          })
        }

        function iT(TT, IT) {
          return rT({
            data: TT,
            path: oT.path,
            errorMaps: [oT.common.contextualErrorMap, oT.schemaErrorMap, MT(), cT].filter((TT => !!TT)),
            issueData: {
              code: LT.invalid_return_type,
              returnTypeError: IT
            }
          })
        }
        const zT = {
            errorMap: oT.common.contextualErrorMap
          },
          kT = oT.data;
        if (this._def.returns instanceof go) {
          const TT = this;
          return mT((async function() {
            for (var oT = arguments.length, WT = new Array(oT), XT = 0; XT < oT; XT++) WT[XT] = arguments[XT];
            const BT = new xT([]),
              FT = await TT._def.args.parseAsync(WT, zT).catch((TT => {
                throw BT.addIssue(IT(WT, TT)), BT
              })),
              ST = await Reflect.apply(kT, this, FT);
            return await TT._def.returns._def.type.parseAsync(ST, zT).catch((TT => {
              throw BT.addIssue(iT(ST, TT)), BT
            }))
          }))
        } {
          const TT = this;
          return mT((function() {
            for (var oT = arguments.length, WT = new Array(oT), XT = 0; XT < oT; XT++) WT[XT] = arguments[XT];
            const BT = TT._def.args.safeParse(WT, zT);
            if (!BT.success) throw new xT([IT(WT, BT.error)]);
            const FT = Reflect.apply(kT, this, BT.data),
              ST = TT._def.returns.safeParse(FT, zT);
            if (!ST.success) throw new xT([iT(FT, ST.error)]);
            return ST.data
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
        for (var TT = arguments.length, oT = new Array(TT), IT = 0; IT < TT; IT++) oT[IT] = arguments[IT];
        return new xo({
          ...this._def,
          args: Fo.create(oT).rest(dT.create())
        })
      }
      returns(TT) {
        return new xo({
          ...this._def,
          returns: TT
        })
      }
      implement(TT) {
        return this.parse(TT)
      }
      strictImplement(TT) {
        return this.parse(TT)
      }
      static create(TT, oT, IT) {
        return new xo({
          args: TT || Fo.create([]).rest(dT.create()),
          returns: oT || dT.create(),
          typeName: Uo.ZodFunction,
          ...jT(IT)
        })
      }
    }
    class co extends JT {
      get schema() {
        return this._def.getter()
      }
      _parse(TT) {
        const {
          ctx: oT
        } = this._processInputParams(TT);
        return this._def.getter()._parse({
          data: oT.data,
          path: oT.path,
          parent: oT
        })
      }
    }
    co.create = (TT, oT) => new co({
      getter: TT,
      typeName: Uo.ZodLazy,
      ...jT(oT)
    });
    class Ko extends JT {
      _parse(TT) {
        if (TT.data !== this._def.value) {
          const oT = this._getOrReturnCtx(TT);
          return AT(oT, {
            received: oT.data,
            code: LT.invalid_literal,
            expected: this._def.value
          }), hT
        }
        return {
          status: "valid",
          value: TT.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function Mo(TT, oT) {
      return new ro({
        values: TT,
        typeName: Uo.ZodEnum,
        ...jT(oT)
      })
    }
    Ko.create = (TT, oT) => new Ko({
      value: TT,
      typeName: Uo.ZodLiteral,
      ...jT(oT)
    });
    class ro extends JT {
      _parse(TT) {
        if ("string" !== typeof TT.data) {
          const oT = this._getOrReturnCtx(TT),
            IT = this._def.values;
          return AT(oT, {
            expected: XT.joinValues(IT),
            received: oT.parsedType,
            code: LT.invalid_type
          }), hT
        }
        if (-1 === this._def.values.indexOf(TT.data)) {
          const oT = this._getOrReturnCtx(TT),
            IT = this._def.values;
          return AT(oT, {
            received: oT.data,
            code: LT.invalid_enum_value,
            options: IT
          }), hT
        }
        return mT(TT.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const TT = {};
        for (const oT of this._def.values) TT[oT] = oT;
        return TT
      }
      get Values() {
        const TT = {};
        for (const oT of this._def.values) TT[oT] = oT;
        return TT
      }
      get Enum() {
        const TT = {};
        for (const oT of this._def.values) TT[oT] = oT;
        return TT
      }
      extract(TT) {
        return ro.create(TT)
      }
      exclude(TT) {
        return ro.create(this.options.filter((oT => !TT.includes(oT))))
      }
    }
    ro.create = Mo;
    class Ao extends JT {
      _parse(TT) {
        const oT = XT.getValidEnumValues(this._def.values),
          IT = this._getOrReturnCtx(TT);
        if (IT.parsedType !== ST.string && IT.parsedType !== ST.number) {
          const TT = XT.objectValues(oT);
          return AT(IT, {
            expected: XT.joinValues(TT),
            received: IT.parsedType,
            code: LT.invalid_type
          }), hT
        }
        if (-1 === oT.indexOf(TT.data)) {
          const TT = XT.objectValues(oT);
          return AT(IT, {
            received: IT.data,
            code: LT.invalid_enum_value,
            options: TT
          }), hT
        }
        return mT(TT.data)
      }
      get enum() {
        return this._def.values
      }
    }
    Ao.create = (TT, oT) => new Ao({
      values: TT,
      typeName: Uo.ZodNativeEnum,
      ...jT(oT)
    });
    class go extends JT {
      unwrap() {
        return this._def.type
      }
      _parse(TT) {
        const {
          ctx: oT
        } = this._processInputParams(TT);
        if (oT.parsedType !== ST.promise && !1 === oT.common.async) return AT(oT, {
          code: LT.invalid_type,
          expected: ST.promise,
          received: oT.parsedType
        }), hT;
        const IT = oT.parsedType === ST.promise ? oT.data : Promise.resolve(oT.data);
        return mT(IT.then((TT => this._def.type.parseAsync(TT, {
          path: oT.path,
          errorMap: oT.common.contextualErrorMap
        }))))
      }
    }
    go.create = (TT, oT) => new go({
      type: TT,
      typeName: Uo.ZodPromise,
      ...jT(oT)
    });
    class ho extends JT {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === Uo.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(TT) {
        const {
          status: oT,
          ctx: IT
        } = this._processInputParams(TT), iT = this._def.effect || null, zT = {
          addIssue: TT => {
            AT(IT, TT), TT.fatal ? oT.abort() : oT.Nc()
          },
          get path() {
            return IT.path
          }
        };
        if (zT.addIssue = zT.addIssue.bind(zT), "preprocess" === iT.type) {
          const TT = iT.transform(IT.data, zT);
          return IT.common.issues.length ? {
            status: "Nc",
            value: IT.data
          } : IT.common.async ? Promise.resolve(TT).then((TT => this._def.schema._parseAsync({
            data: TT,
            path: IT.path,
            parent: IT
          }))) : this._def.schema._parseSync({
            data: TT,
            path: IT.path,
            parent: IT
          })
        }
        if ("refinement" === iT.type) {
          const TT = TT => {
            const oT = iT.refinement(TT, zT);
            if (IT.common.async) return Promise.resolve(oT);
            if (oT instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return TT
          };
          if (!1 === IT.common.async) {
            const iT = this._def.schema._parseSync({
              data: IT.data,
              path: IT.path,
              parent: IT
            });
            return "aborted" === iT.status ? hT : ("Nc" === iT.status && oT.Nc(), TT(iT.value), {
              status: oT.value,
              value: iT.value
            })
          }
          return this._def.schema._parseAsync({
            data: IT.data,
            path: IT.path,
            parent: IT
          }).then((IT => "aborted" === IT.status ? hT : ("Nc" === IT.status && oT.Nc(), TT(IT.value).then((() => ({
            status: oT.value,
            value: IT.value
          }))))))
        }
        if ("transform" === iT.type) {
          if (!1 === IT.common.async) {
            const TT = this._def.schema._parseSync({
              data: IT.data,
              path: IT.path,
              parent: IT
            });
            if (!uT(TT)) return TT;
            const kT = iT.transform(TT.value, zT);
            if (kT instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: oT.value,
              value: kT
            }
          }
          return this._def.schema._parseAsync({
            data: IT.data,
            path: IT.path,
            parent: IT
          }).then((TT => uT(TT) ? Promise.resolve(iT.transform(TT.value, zT)).then((TT => ({
            status: oT.value,
            value: TT
          }))) : TT))
        }
        XT.assertNever(iT)
      }
    }
    ho.create = (TT, oT, IT) => new ho({
      schema: TT,
      typeName: Uo.ZodEffects,
      effect: oT,
      ...jT(IT)
    }), ho.createWithPreprocess = (TT, oT, IT) => new ho({
      schema: oT,
      effect: {
        type: "preprocess",
        transform: TT
      },
      typeName: Uo.ZodEffects,
      ...jT(IT)
    });
    class wo extends JT {
      _parse(TT) {
        return this._getType(TT) === ST.undefined ? mT(void 0) : this._def.innerType._parse(TT)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    wo.create = (TT, oT) => new wo({
      innerType: TT,
      typeName: Uo.ZodOptional,
      ...jT(oT)
    });
    class mo extends JT {
      _parse(TT) {
        return this._getType(TT) === ST.null ? mT(null) : this._def.innerType._parse(TT)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    mo.create = (TT, oT) => new mo({
      innerType: TT,
      typeName: Uo.ZodNullable,
      ...jT(oT)
    });
    class eo extends JT {
      _parse(TT) {
        const {
          ctx: oT
        } = this._processInputParams(TT);
        let IT = oT.data;
        return oT.parsedType === ST.undefined && (IT = this._def.defaultValue()), this._def.innerType._parse({
          data: IT,
          path: oT.path,
          parent: oT
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    eo.create = (TT, oT) => new eo({
      innerType: TT,
      typeName: Uo.ZodDefault,
      defaultValue: "function" === typeof oT.default ? oT.default : () => oT.default,
      ...jT(oT)
    });
    class Ro extends JT {
      _parse(TT) {
        const {
          ctx: oT
        } = this._processInputParams(TT), IT = {
          ...oT,
          common: {
            ...oT.common,
            issues: []
          }
        }, iT = this._def.innerType._parse({
          data: IT.data,
          path: IT.path,
          parent: {
            ...IT
          }
        });
        return vT(iT) ? iT.then((TT => ({
          status: "valid",
          value: "valid" === TT.status ? TT.value : this._def.catchValue({
            get error() {
              return new xT(IT.common.issues)
            },
            input: IT.data
          })
        }))) : {
          status: "valid",
          value: "valid" === iT.status ? iT.value : this._def.catchValue({
            get error() {
              return new xT(IT.common.issues)
            },
            input: IT.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    Ro.create = (TT, oT) => new Ro({
      innerType: TT,
      typeName: Uo.ZodCatch,
      catchValue: "function" === typeof oT.catch ? oT.catch : () => oT.catch,
      ...jT(oT)
    });
    class uo extends JT {
      _parse(TT) {
        if (this._getType(TT) !== ST.nan) {
          const oT = this._getOrReturnCtx(TT);
          return AT(oT, {
            code: LT.invalid_type,
            expected: ST.nan,
            received: oT.parsedType
          }), hT
        }
        return {
          status: "valid",
          value: TT.data
        }
      }
    }
    uo.create = TT => new uo({
      typeName: Uo.ZodNaN,
      ...jT(TT)
    });
    const vo = Symbol("zod_brand");
    class Eo extends JT {
      _parse(TT) {
        const {
          ctx: oT
        } = this._processInputParams(TT), IT = oT.data;
        return this._def.type._parse({
          data: IT,
          path: oT.path,
          parent: oT
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class fo extends JT {
      _parse(TT) {
        const {
          status: oT,
          ctx: IT
        } = this._processInputParams(TT);
        if (IT.common.async) {
          return (async () => {
            const TT = await this._def.in._parseAsync({
              data: IT.data,
              path: IT.path,
              parent: IT
            });
            return "aborted" === TT.status ? hT : "Nc" === TT.status ? (oT.Nc(), wT(TT.value)) : this._def.out._parseAsync({
              data: TT.value,
              path: IT.path,
              parent: IT
            })
          })()
        } {
          const TT = this._def.in._parseSync({
            data: IT.data,
            path: IT.path,
            parent: IT
          });
          return "aborted" === TT.status ? hT : "Nc" === TT.status ? (oT.Nc(), {
            status: "Nc",
            value: TT.value
          }) : this._def.out._parseSync({
            data: TT.value,
            path: IT.path,
            parent: IT
          })
        }
      }
      static create(TT, oT) {
        return new fo({
          in: TT,
          out: oT,
          typeName: Uo.ZodPipeline
        })
      }
    }
    class Co extends JT {
      _parse(TT) {
        const oT = this._def.innerType._parse(TT);
        return uT(oT) && (oT.value = Object.freeze(oT.value)), oT
      }
    }
    Co.create = (TT, oT) => new Co({
      innerType: TT,
      typeName: Uo.ZodReadonly,
      ...jT(oT)
    });
    const jo = function(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          IT = arguments.length > 2 ? arguments[2] : void 0;
        return TT ? PT.create().superRefine(((iT, zT) => {
          var kT, WT;
          if (!TT(iT)) {
            const TT = "function" === typeof oT ? oT(iT) : "string" === typeof oT ? {
                message: oT
              } : oT,
              XT = null === (WT = null !== (kT = TT.fatal) && void 0 !== kT ? kT : IT) || void 0 === WT || WT,
              BT = "string" === typeof TT ? {
                message: TT
              } : TT;
            zT.addIssue({
              code: "custom",
              ...BT,
              fatal: XT
            })
          }
        })) : PT.create()
      },
      Jo = {
        object: io.lazycreate
      };
    var Uo;
    ! function(TT) {
      TT.ZodString = "ZodString", TT.ZodNumber = "ZodNumber", TT.ZodNaN = "ZodNaN", TT.ZodBigInt = "ZodBigInt", TT.ZodBoolean = "ZodBoolean", TT.ZodDate = "ZodDate", TT.ZodSymbol = "ZodSymbol", TT.ZodUndefined = "ZodUndefined", TT.ZodNull = "ZodNull", TT.ZodAny = "ZodAny", TT.ZodUnknown = "ZodUnknown", TT.ZodNever = "ZodNever", TT.ZodVoid = "ZodVoid", TT.ZodArray = "ZodArray", TT.ZodObject = "ZodObject", TT.ZodUnion = "ZodUnion", TT.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", TT.ZodIntersection = "ZodIntersection", TT.ZodTuple = "ZodTuple", TT.ZodRecord = "ZodRecord", TT.ZodMap = "ZodMap", TT.ZodSet = "ZodSet", TT.ZodFunction = "ZodFunction", TT.ZodLazy = "ZodLazy", TT.ZodLiteral = "ZodLiteral", TT.ZodEnum = "ZodEnum", TT.ZodEffects = "ZodEffects", TT.ZodNativeEnum = "ZodNativeEnum", TT.ZodOptional = "ZodOptional", TT.ZodNullable = "ZodNullable", TT.ZodDefault = "ZodDefault", TT.ZodCatch = "ZodCatch", TT.ZodPromise = "ZodPromise", TT.ZodBranded = "ZodBranded", TT.ZodPipeline = "ZodPipeline", TT.ZodReadonly = "ZodReadonly"
    }(Uo || (Uo = {}));
    const ao = ZT.create,
      Yo = sT.create,
      Qo = uo.create,
      Oo = tT.create,
      Ho = GT.create,
      no = pT.create,
      qo = bT.create,
      Zo = yT.create,
      so = NT.create,
      to = PT.create,
      Go = dT.create,
      po = VT.create,
      bo = To.create,
      yo = oo.create,
      No = io.create,
      Po = io.strictCreate,
      Vo = zo.create,
      TI = Wo.create,
      oI = Bo.create,
      II = Fo.create,
      iI = So.create,
      zI = Do.create,
      kI = Lo.create,
      WI = xo.create,
      XI = co.create,
      BI = Ko.create,
      FI = ro.create,
      SI = Ao.create,
      DI = go.create,
      LI = ho.create,
      xI = wo.create,
      cI = mo.create,
      KI = ho.createWithPreprocess,
      MI = fo.create,
      rI = {
        string: TT => ZT.create({
          ...TT,
          coerce: !0
        }),
        number: TT => sT.create({
          ...TT,
          coerce: !0
        }),
        boolean: TT => GT.create({
          ...TT,
          coerce: !0
        }),
        bigint: TT => tT.create({
          ...TT,
          coerce: !0
        }),
        date: TT => pT.create({
          ...TT,
          coerce: !0
        })
      },
      AI = hT;
    var gI = Object.freeze({
        __proto__: null,
        defaultErrorMap: cT,
        setErrorMap: function(TT) {
          KT = TT
        },
        getErrorMap: MT,
        makeIssue: rT,
        EMPTY_PATH: [],
        addIssueToContext: AT,
        ParseStatus: gT,
        INVALID: hT,
        DIRTY: wT,
        OK: mT,
        isAborted: eT,
        isDirty: RT,
        isValid: uT,
        isAsync: vT,
        get util() {
          return XT
        },
        get objectUtil() {
          return BT
        },
        ZodParsedType: ST,
        getParsedType: DT,
        ZodType: JT,
        ZodString: ZT,
        ZodNumber: sT,
        ZodBigInt: tT,
        ZodBoolean: GT,
        ZodDate: pT,
        ZodSymbol: bT,
        ZodUndefined: yT,
        ZodNull: NT,
        ZodAny: PT,
        ZodUnknown: dT,
        ZodNever: VT,
        ZodVoid: To,
        ZodArray: oo,
        ZodObject: io,
        ZodUnion: zo,
        ZodDiscriminatedUnion: Wo,
        ZodIntersection: Bo,
        ZodTuple: Fo,
        ZodRecord: So,
        ZodMap: Do,
        ZodSet: Lo,
        ZodFunction: xo,
        ZodLazy: co,
        ZodLiteral: Ko,
        ZodEnum: ro,
        ZodNativeEnum: Ao,
        ZodPromise: go,
        ZodEffects: ho,
        ZodTransformer: ho,
        ZodOptional: wo,
        ZodNullable: mo,
        ZodDefault: eo,
        ZodCatch: Ro,
        ZodNaN: uo,
        BRAND: vo,
        ZodBranded: Eo,
        ZodPipeline: fo,
        ZodReadonly: Co,
        custom: jo,
        Schema: JT,
        ZodSchema: JT,
        late: Jo,
        get ZodFirstPartyTypeKind() {
          return Uo
        },
        coerce: rI,
        any: to,
        array: yo,
        bigint: Oo,
        boolean: Ho,
        date: no,
        discriminatedUnion: TI,
        effect: LI,
        enum: FI,
        function: WI,
        instanceof: function(TT) {
          let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${TT.name}`
          };
          return jo((oT => oT instanceof TT), oT)
        },
        intersection: oI,
        lazy: XI,
        literal: BI,
        map: zI,
        nan: Qo,
        nativeEnum: SI,
        never: po,
        null: so,
        nullable: cI,
        number: Yo,
        object: No,
        oboolean: () => Ho().optional(),
        onumber: () => Yo().optional(),
        optional: xI,
        ostring: () => ao().optional(),
        pipeline: MI,
        preprocess: KI,
        promise: DI,
        record: iI,
        set: kI,
        strictObject: Po,
        string: ao,
        symbol: qo,
        transformer: LI,
        tuple: II,
        undefined: Zo,
        union: Vo,
        unknown: Go,
        void: bo,
        NEVER: AI,
        ZodIssueCode: LT,
        quotelessJson: TT => JSON.stringify(TT, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: xT
      }),
      hI = {
        exports: {}
      };
    ! function(TT) {
      var oT = function(TT) {
        var IT = 1e7,
          iT = 9007199254740992,
          zT = LT(iT),
          kT = "0123456789abcdefghijklmnopqrstuvwxyz",
          WT = "function" === typeof BigInt;

        function XT(TT, oT, IT, iT) {
          return "undefined" === typeof TT ? XT[0] : "undefined" !== typeof oT && (10 !== +oT || IT) ? GT(TT, oT, IT, iT) : PT(TT)
        }

        function BT(TT, oT) {
          this.value = TT, this.sign = oT, this.isSmall = !1
        }

        function FT(TT) {
          this.value = TT, this.sign = TT < 0, this.isSmall = !0
        }

        function ST(TT) {
          this.value = TT
        }

        function DT(TT) {
          return -iT < TT && TT < iT
        }

        function LT(TT) {
          return TT < 1e7 ? [TT] : TT < 1e14 ? [TT % 1e7, Math.floor(TT / 1e7)] : [TT % 1e7, Math.floor(TT / 1e7) % 1e7, Math.floor(TT / 1e14)]
        }

        function xT(TT) {
          cT(TT);
          var oT = TT.length;
          if (oT < 4 && jT(TT, zT) < 0) switch (oT) {
            case 0:
              return 0;
            case 1:
              return TT[0];
            case 2:
              return TT[0] + TT[1] * IT;
            default:
              return TT[0] + (TT[1] + TT[2] * IT) * IT
          }
          return TT
        }

        function cT(TT) {
          for (var oT = TT.length; 0 === TT[--oT];);
          TT.length = oT + 1
        }

        function KT(TT) {
          for (var oT = new Array(TT), IT = -1; ++IT < TT;) oT[IT] = 0;
          return oT
        }

        function MT(TT) {
          return TT > 0 ? Math.floor(TT) : Math.ceil(TT)
        }

        function rT(TT, oT) {
          var iT, zT, kT = TT.length,
            WT = oT.length,
            XT = new Array(kT),
            BT = 0,
            FT = IT;
          for (zT = 0; zT < WT; zT++) BT = (iT = TT[zT] + oT[zT] + BT) >= FT ? 1 : 0, XT[zT] = iT - BT * FT;
          for (; zT < kT;) BT = (iT = TT[zT] + BT) === FT ? 1 : 0, XT[zT++] = iT - BT * FT;
          return BT > 0 && XT.push(BT), XT
        }

        function AT(TT, oT) {
          return TT.length >= oT.length ? rT(TT, oT) : rT(oT, TT)
        }

        function gT(TT, oT) {
          var iT, zT, kT = TT.length,
            WT = new Array(kT),
            XT = IT;
          for (zT = 0; zT < kT; zT++) iT = TT[zT] - XT + oT, oT = Math.floor(iT / XT), WT[zT] = iT - oT * XT, oT += 1;
          for (; oT > 0;) WT[zT++] = oT % XT, oT = Math.floor(oT / XT);
          return WT
        }

        function hT(TT, oT) {
          var iT, zT, kT = TT.length,
            WT = oT.length,
            XT = new Array(kT),
            BT = 0,
            FT = IT;
          for (iT = 0; iT < WT; iT++)(zT = TT[iT] - BT - oT[iT]) < 0 ? (zT += FT, BT = 1) : BT = 0, XT[iT] = zT;
          for (iT = WT; iT < kT; iT++) {
            if (!((zT = TT[iT] - BT) < 0)) {
              XT[iT++] = zT;
              break
            }
            zT += FT, XT[iT] = zT
          }
          for (; iT < kT; iT++) XT[iT] = TT[iT];
          return cT(XT), XT
        }

        function wT(TT, oT, iT) {
          var zT, kT, WT = TT.length,
            XT = new Array(WT),
            ST = -oT,
            DT = IT;
          for (zT = 0; zT < WT; zT++) kT = TT[zT] + ST, ST = Math.floor(kT / DT), kT %= DT, XT[zT] = kT < 0 ? kT + DT : kT;
          return "number" === typeof(XT = xT(XT)) ? (iT && (XT = -XT), new FT(XT)) : new BT(XT, iT)
        }

        function mT(TT, oT) {
          var iT, zT, kT, WT, XT = TT.length,
            BT = oT.length,
            FT = KT(XT + BT),
            ST = IT;
          for (kT = 0; kT < XT; ++kT) {
            WT = TT[kT];
            for (var DT = 0; DT < BT; ++DT) iT = WT * oT[DT] + FT[kT + DT], zT = Math.floor(iT / ST), FT[kT + DT] = iT - zT * ST, FT[kT + DT + 1] += zT
          }
          return cT(FT), FT
        }

        function eT(TT, oT) {
          var iT, zT, kT = TT.length,
            WT = new Array(kT),
            XT = IT,
            BT = 0;
          for (zT = 0; zT < kT; zT++) iT = TT[zT] * oT + BT, BT = Math.floor(iT / XT), WT[zT] = iT - BT * XT;
          for (; BT > 0;) WT[zT++] = BT % XT, BT = Math.floor(BT / XT);
          return WT
        }

        function RT(TT, oT) {
          for (var IT = []; oT-- > 0;) IT.push(0);
          return IT.concat(TT)
        }

        function uT(TT, oT) {
          var IT = Math.max(TT.length, oT.length);
          if (IT <= 30) return mT(TT, oT);
          IT = Math.ceil(IT / 2);
          var iT = TT.slice(IT),
            zT = TT.slice(0, IT),
            kT = oT.slice(IT),
            WT = oT.slice(0, IT),
            XT = uT(zT, WT),
            BT = uT(iT, kT),
            FT = uT(AT(zT, iT), AT(WT, kT)),
            ST = AT(AT(XT, RT(hT(hT(FT, XT), BT), IT)), RT(BT, 2 * IT));
          return cT(ST), ST
        }

        function vT(TT, oT, iT) {
          return new BT(TT < IT ? eT(oT, TT) : mT(oT, LT(TT)), iT)
        }

        function ET(TT) {
          var oT, iT, zT, kT, WT = TT.length,
            XT = KT(WT + WT),
            BT = IT;
          for (zT = 0; zT < WT; zT++) {
            iT = 0 - (kT = TT[zT]) * kT;
            for (var FT = zT; FT < WT; FT++) oT = kT * TT[FT] * 2 + XT[zT + FT] + iT, iT = Math.floor(oT / BT), XT[zT + FT] = oT - iT * BT;
            XT[zT + WT] = iT
          }
          return cT(XT), XT
        }

        function fT(TT, oT) {
          var iT, zT, kT, WT, XT = TT.length,
            BT = KT(XT),
            FT = IT;
          for (kT = 0, iT = XT - 1; iT >= 0; --iT) kT = (WT = kT * FT + TT[iT]) - (zT = MT(WT / oT)) * oT, BT[iT] = 0 | zT;
          return [BT, 0 | kT]
        }

        function CT(TT, oT) {
          var iT, zT = PT(oT);
          if (WT) return [new ST(TT.value / zT.value), new ST(TT.value % zT.value)];
          var kT, DT = TT.value,
            rT = zT.value;
          if (0 === rT) throw new Error("Cannot divide by zero");
          if (TT.isSmall) return zT.isSmall ? [new FT(MT(DT / rT)), new FT(DT % rT)] : [XT[0], TT];
          if (zT.isSmall) {
            if (1 === rT) return [TT, XT[0]];
            if (-1 == rT) return [TT.ri(), XT[0]];
            var AT = Math.abs(rT);
            if (AT < IT) {
              kT = xT((iT = fT(DT, AT))[0]);
              var gT = iT[1];
              return TT.sign && (gT = -gT), "number" === typeof kT ? (TT.sign !== zT.sign && (kT = -kT), [new FT(kT), new FT(gT)]) : [new BT(kT, TT.sign !== zT.sign), new FT(gT)]
            }
            rT = LT(AT)
          }
          var wT = jT(DT, rT);
          if (-1 === wT) return [XT[0], TT];
          if (0 === wT) return [XT[TT.sign === zT.sign ? 1 : -1], XT[0]];
          iT = DT.length + rT.length <= 200 ? function(TT, oT) {
            var iT, zT, kT, WT, XT, BT, FT, ST = TT.length,
              DT = oT.length,
              LT = IT,
              cT = KT(oT.length),
              MT = oT[DT - 1],
              rT = Math.ceil(LT / (2 * MT)),
              AT = eT(TT, rT),
              gT = eT(oT, rT);
            for (AT.length <= ST && AT.push(0), gT.push(0), MT = gT[DT - 1], zT = ST - DT; zT >= 0; zT--) {
              for (iT = LT - 1, AT[zT + DT] !== MT && (iT = Math.floor((AT[zT + DT] * LT + AT[zT + DT - 1]) / MT)), kT = 0, WT = 0, BT = gT.length, XT = 0; XT < BT; XT++) kT += iT * gT[XT], FT = Math.floor(kT / LT), WT += AT[zT + XT] - (kT - FT * LT), kT = FT, WT < 0 ? (AT[zT + XT] = WT + LT, WT = -1) : (AT[zT + XT] = WT, WT = 0);
              for (; 0 !== WT;) {
                for (iT -= 1, kT = 0, XT = 0; XT < BT; XT++)(kT += AT[zT + XT] - LT + gT[XT]) < 0 ? (AT[zT + XT] = kT + LT, kT = 0) : (AT[zT + XT] = kT, kT = 1);
                WT += kT
              }
              cT[zT] = iT
            }
            return AT = fT(AT, rT)[0], [xT(cT), xT(AT)]
          }(DT, rT) : function(TT, oT) {
            for (var iT, zT, kT, WT, XT, BT = TT.length, FT = oT.length, ST = [], DT = [], LT = IT; BT;)
              if (DT.unshift(TT[--BT]), cT(DT), jT(DT, oT) < 0) ST.push(0);
              else {
                kT = DT[(zT = DT.length) - 1] * LT + DT[zT - 2], WT = oT[FT - 1] * LT + oT[FT - 2], zT > FT && (kT = (kT + 1) * LT), iT = Math.ceil(kT / WT);
                do {
                  if (jT(XT = eT(oT, iT), DT) <= 0) break;
                  iT--
                } while (iT);
                ST.push(iT), DT = hT(DT, XT)
              } return ST.reverse(), [xT(ST), xT(DT)]
          }(DT, rT), kT = iT[0];
          var mT = TT.sign !== zT.sign,
            RT = iT[1],
            uT = TT.sign;
          return "number" === typeof kT ? (mT && (kT = -kT), kT = new FT(kT)) : kT = new BT(kT, mT), "number" === typeof RT ? (uT && (RT = -RT), RT = new FT(RT)) : RT = new BT(RT, uT), [kT, RT]
        }

        function jT(TT, oT) {
          if (TT.length !== oT.length) return TT.length > oT.length ? 1 : -1;
          for (var IT = TT.length - 1; IT >= 0; IT--)
            if (TT[IT] !== oT[IT]) return TT[IT] > oT[IT] ? 1 : -1;
          return 0
        }

        function JT(TT) {
          var oT = TT.abs();
          return !oT.isUnit() && (!!(oT.equals(2) || oT.equals(3) || oT.equals(5)) || !(oT.isEven() || oT.isDivisibleBy(3) || oT.isDivisibleBy(5)) && (!!oT.lesser(49) || void 0))
        }

        function UT(TT, IT) {
          for (var iT, zT, kT, WT = TT.prev(), XT = WT, BT = 0; XT.isEven();) XT = XT.divide(2), BT++;
          TT: for (zT = 0; zT < IT.length; zT++)
            if (!TT.lesser(IT[zT]) && !(kT = oT(IT[zT]).modPow(XT, TT)).isUnit() && !kT.equals(WT)) {
              for (iT = BT - 1; 0 != iT; iT--) {
                if ((kT = kT.square().mod(TT)).isUnit()) return !1;
                if (kT.equals(WT)) continue TT
              }
              return !1
            }
          return !0
        }
        BT.prototype = Object.create(XT.prototype), FT.prototype = Object.create(XT.prototype), ST.prototype = Object.create(XT.prototype), BT.prototype.add = function(TT) {
          var oT = PT(TT);
          if (this.sign !== oT.sign) return this.subtract(oT.ri());
          var IT = this.value,
            iT = oT.value;
          return oT.isSmall ? new BT(gT(IT, Math.abs(iT)), this.sign) : new BT(AT(IT, iT), this.sign)
        }, BT.prototype.plus = BT.prototype.add, FT.prototype.add = function(TT) {
          var oT = PT(TT),
            IT = this.value;
          if (IT < 0 !== oT.sign) return this.subtract(oT.ri());
          var iT = oT.value;
          if (oT.isSmall) {
            if (DT(IT + iT)) return new FT(IT + iT);
            iT = LT(Math.abs(iT))
          }
          return new BT(gT(iT, Math.abs(IT)), IT < 0)
        }, FT.prototype.plus = FT.prototype.add, ST.prototype.add = function(TT) {
          return new ST(this.value + PT(TT).value)
        }, ST.prototype.plus = ST.prototype.add, BT.prototype.subtract = function(TT) {
          var oT = PT(TT);
          if (this.sign !== oT.sign) return this.add(oT.ri());
          var IT = this.value,
            iT = oT.value;
          return oT.isSmall ? wT(IT, Math.abs(iT), this.sign) : function(TT, oT, IT) {
            var iT;
            return jT(TT, oT) >= 0 ? iT = hT(TT, oT) : (iT = hT(oT, TT), IT = !IT), "number" === typeof(iT = xT(iT)) ? (IT && (iT = -iT), new FT(iT)) : new BT(iT, IT)
          }(IT, iT, this.sign)
        }, BT.prototype.minus = BT.prototype.subtract, FT.prototype.subtract = function(TT) {
          var oT = PT(TT),
            IT = this.value;
          if (IT < 0 !== oT.sign) return this.add(oT.ri());
          var iT = oT.value;
          return oT.isSmall ? new FT(IT - iT) : wT(iT, Math.abs(IT), IT >= 0)
        }, FT.prototype.minus = FT.prototype.subtract, ST.prototype.subtract = function(TT) {
          return new ST(this.value - PT(TT).value)
        }, ST.prototype.minus = ST.prototype.subtract, BT.prototype.ri = function() {
          return new BT(this.value, !this.sign)
        }, FT.prototype.ri = function() {
          var TT = this.sign,
            oT = new FT(-this.value);
          return oT.sign = !TT, oT
        }, ST.prototype.ri = function() {
          return new ST(-this.value)
        }, BT.prototype.abs = function() {
          return new BT(this.value, !1)
        }, FT.prototype.abs = function() {
          return new FT(Math.abs(this.value))
        }, ST.prototype.abs = function() {
          return new ST(this.value >= 0 ? this.value : -this.value)
        }, BT.prototype.multiply = function(TT) {
          var oT, iT, zT, kT = PT(TT),
            WT = this.value,
            FT = kT.value,
            ST = this.sign !== kT.sign;
          if (kT.isSmall) {
            if (0 === FT) return XT[0];
            if (1 === FT) return this;
            if (-1 === FT) return this.ri();
            if ((oT = Math.abs(FT)) < IT) return new BT(eT(WT, oT), ST);
            FT = LT(oT)
          }
          return iT = WT.length, zT = FT.length, new BT(-.012 * iT - .012 * zT + 15e-6 * iT * zT > 0 ? uT(WT, FT) : mT(WT, FT), ST)
        }, BT.prototype.times = BT.prototype.multiply, FT.prototype._multiplyBySmall = function(TT) {
          return DT(TT.value * this.value) ? new FT(TT.value * this.value) : vT(Math.abs(TT.value), LT(Math.abs(this.value)), this.sign !== TT.sign)
        }, BT.prototype._multiplyBySmall = function(TT) {
          return 0 === TT.value ? XT[0] : 1 === TT.value ? this : -1 === TT.value ? this.ri() : vT(Math.abs(TT.value), this.value, this.sign !== TT.sign)
        }, FT.prototype.multiply = function(TT) {
          return PT(TT)._multiplyBySmall(this)
        }, FT.prototype.times = FT.prototype.multiply, ST.prototype.multiply = function(TT) {
          return new ST(this.value * PT(TT).value)
        }, ST.prototype.times = ST.prototype.multiply, BT.prototype.square = function() {
          return new BT(ET(this.value), !1)
        }, FT.prototype.square = function() {
          var TT = this.value * this.value;
          return DT(TT) ? new FT(TT) : new BT(ET(LT(Math.abs(this.value))), !1)
        }, ST.prototype.square = function(TT) {
          return new ST(this.value * this.value)
        }, BT.prototype.divmod = function(TT) {
          var oT = CT(this, TT);
          return {
            quotient: oT[0],
            remainder: oT[1]
          }
        }, ST.prototype.divmod = FT.prototype.divmod = BT.prototype.divmod, BT.prototype.divide = function(TT) {
          return CT(this, TT)[0]
        }, ST.prototype.over = ST.prototype.divide = function(TT) {
          return new ST(this.value / PT(TT).value)
        }, FT.prototype.over = FT.prototype.divide = BT.prototype.over = BT.prototype.divide, BT.prototype.mod = function(TT) {
          return CT(this, TT)[1]
        }, ST.prototype.mod = ST.prototype.remainder = function(TT) {
          return new ST(this.value % PT(TT).value)
        }, FT.prototype.remainder = FT.prototype.mod = BT.prototype.remainder = BT.prototype.mod, BT.prototype.pow = function(TT) {
          var oT, IT, iT, zT = PT(TT),
            kT = this.value,
            WT = zT.value;
          if (0 === WT) return XT[1];
          if (0 === kT) return XT[0];
          if (1 === kT) return XT[1];
          if (-1 === kT) return zT.isEven() ? XT[1] : XT[-1];
          if (zT.sign) return XT[0];
          if (!zT.isSmall) throw new Error("The exponent " + zT.toString() + " is too large.");
          if (this.isSmall && DT(oT = Math.pow(kT, WT))) return new FT(MT(oT));
          for (IT = this, iT = XT[1]; !0 & WT && (iT = iT.times(IT), --WT), 0 !== WT;) WT /= 2, IT = IT.square();
          return iT
        }, FT.prototype.pow = BT.prototype.pow, ST.prototype.pow = function(TT) {
          var oT = PT(TT),
            IT = this.value,
            iT = oT.value,
            zT = BigInt(0),
            kT = BigInt(1),
            WT = BigInt(2);
          if (iT === zT) return XT[1];
          if (IT === zT) return XT[0];
          if (IT === kT) return XT[1];
          if (IT === BigInt(-1)) return oT.isEven() ? XT[1] : XT[-1];
          if (oT.isNegative()) return new ST(zT);
          for (var BT = this, FT = XT[1];
            (iT & kT) === kT && (FT = FT.times(BT), --iT), iT !== zT;) iT /= WT, BT = BT.square();
          return FT
        }, BT.prototype.modPow = function(TT, oT) {
          if (TT = PT(TT), (oT = PT(oT)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var IT = XT[1],
            iT = this.mod(oT);
          for (TT.isNegative() && (TT = TT.multiply(XT[-1]), iT = iT.modInv(oT)); TT.isPositive();) {
            if (iT.isZero()) return XT[0];
            TT.isOdd() && (IT = IT.multiply(iT).mod(oT)), TT = TT.divide(2), iT = iT.square().mod(oT)
          }
          return IT
        }, ST.prototype.modPow = FT.prototype.modPow = BT.prototype.modPow, BT.prototype.compareAbs = function(TT) {
          var oT = PT(TT),
            IT = this.value,
            iT = oT.value;
          return oT.isSmall ? 1 : jT(IT, iT)
        }, FT.prototype.compareAbs = function(TT) {
          var oT = PT(TT),
            IT = Math.abs(this.value),
            iT = oT.value;
          return oT.isSmall ? IT === (iT = Math.abs(iT)) ? 0 : IT > iT ? 1 : -1 : -1
        }, ST.prototype.compareAbs = function(TT) {
          var oT = this.value,
            IT = PT(TT).value;
          return (oT = oT >= 0 ? oT : -oT) === (IT = IT >= 0 ? IT : -IT) ? 0 : oT > IT ? 1 : -1
        }, BT.prototype.compare = function(TT) {
          if (TT === 1 / 0) return -1;
          if (TT === -1 / 0) return 1;
          var oT = PT(TT),
            IT = this.value,
            iT = oT.value;
          return this.sign !== oT.sign ? oT.sign ? 1 : -1 : oT.isSmall ? this.sign ? -1 : 1 : jT(IT, iT) * (this.sign ? -1 : 1)
        }, BT.prototype.compareTo = BT.prototype.compare, FT.prototype.compare = function(TT) {
          if (TT === 1 / 0) return -1;
          if (TT === -1 / 0) return 1;
          var oT = PT(TT),
            IT = this.value,
            iT = oT.value;
          return oT.isSmall ? IT == iT ? 0 : IT > iT ? 1 : -1 : IT < 0 !== oT.sign ? IT < 0 ? -1 : 1 : IT < 0 ? 1 : -1
        }, FT.prototype.compareTo = FT.prototype.compare, ST.prototype.compare = function(TT) {
          if (TT === 1 / 0) return -1;
          if (TT === -1 / 0) return 1;
          var oT = this.value,
            IT = PT(TT).value;
          return oT === IT ? 0 : oT > IT ? 1 : -1
        }, ST.prototype.compareTo = ST.prototype.compare, BT.prototype.equals = function(TT) {
          return 0 === this.compare(TT)
        }, ST.prototype.eq = ST.prototype.equals = FT.prototype.eq = FT.prototype.equals = BT.prototype.eq = BT.prototype.equals, BT.prototype.notEquals = function(TT) {
          return 0 !== this.compare(TT)
        }, ST.prototype.neq = ST.prototype.notEquals = FT.prototype.neq = FT.prototype.notEquals = BT.prototype.neq = BT.prototype.notEquals, BT.prototype.greater = function(TT) {
          return this.compare(TT) > 0
        }, ST.prototype.gt = ST.prototype.greater = FT.prototype.gt = FT.prototype.greater = BT.prototype.gt = BT.prototype.greater, BT.prototype.lesser = function(TT) {
          return this.compare(TT) < 0
        }, ST.prototype.lt = ST.prototype.lesser = FT.prototype.lt = FT.prototype.lesser = BT.prototype.lt = BT.prototype.lesser, BT.prototype.greaterOrEquals = function(TT) {
          return this.compare(TT) >= 0
        }, ST.prototype.geq = ST.prototype.greaterOrEquals = FT.prototype.geq = FT.prototype.greaterOrEquals = BT.prototype.geq = BT.prototype.greaterOrEquals, BT.prototype.lesserOrEquals = function(TT) {
          return this.compare(TT) <= 0
        }, ST.prototype.leq = ST.prototype.lesserOrEquals = FT.prototype.leq = FT.prototype.lesserOrEquals = BT.prototype.leq = BT.prototype.lesserOrEquals, BT.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, FT.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, ST.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, BT.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, FT.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, ST.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, BT.prototype.isPositive = function() {
          return !this.sign
        }, FT.prototype.isPositive = function() {
          return this.value > 0
        }, ST.prototype.isPositive = FT.prototype.isPositive, BT.prototype.isNegative = function() {
          return this.sign
        }, FT.prototype.isNegative = function() {
          return this.value < 0
        }, ST.prototype.isNegative = FT.prototype.isNegative, BT.prototype.isUnit = function() {
          return !1
        }, FT.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, ST.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, BT.prototype.isZero = function() {
          return !1
        }, FT.prototype.isZero = function() {
          return 0 === this.value
        }, ST.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, BT.prototype.isDivisibleBy = function(TT) {
          var oT = PT(TT);
          return !oT.isZero() && (!!oT.isUnit() || (0 === oT.compareAbs(2) ? this.isEven() : this.mod(oT).isZero()))
        }, ST.prototype.isDivisibleBy = FT.prototype.isDivisibleBy = BT.prototype.isDivisibleBy, BT.prototype.isPrime = function(IT) {
          var iT = JT(this);
          if (iT !== TT) return iT;
          var zT = this.abs(),
            kT = zT.bitLength();
          if (kT <= 64) return UT(zT, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var WT = Math.log(2) * kT.toJSNumber(), XT = Math.ceil(!0 === IT ? 2 * Math.pow(WT, 2) : WT), BT = [], FT = 0; FT < XT; FT++) BT.push(oT(FT + 2));
          return UT(zT, BT)
        }, ST.prototype.isPrime = FT.prototype.isPrime = BT.prototype.isPrime, BT.prototype.isProbablePrime = function(IT, iT) {
          var zT = JT(this);
          if (zT !== TT) return zT;
          for (var kT = this.abs(), WT = IT === TT ? 5 : IT, XT = [], BT = 0; BT < WT; BT++) XT.push(oT.randBetween(2, kT.minus(2), iT));
          return UT(kT, XT)
        }, ST.prototype.isProbablePrime = FT.prototype.isProbablePrime = BT.prototype.isProbablePrime, BT.prototype.modInv = function(TT) {
          for (var IT, iT, zT, kT = oT.zero, WT = oT.one, XT = PT(TT), BT = this.abs(); !BT.isZero();) IT = XT.divide(BT), iT = kT, zT = XT, kT = WT, XT = BT, WT = iT.subtract(IT.multiply(WT)), BT = zT.subtract(IT.multiply(BT));
          if (!XT.isUnit()) throw new Error(this.toString() + " and " + TT.toString() + " are not co-prime");
          return -1 === kT.compare(0) && (kT = kT.add(TT)), this.isNegative() ? kT.ri() : kT
        }, ST.prototype.modInv = FT.prototype.modInv = BT.prototype.modInv, BT.prototype.next = function() {
          var TT = this.value;
          return this.sign ? wT(TT, 1, this.sign) : new BT(gT(TT, 1), this.sign)
        }, FT.prototype.next = function() {
          var TT = this.value;
          return TT + 1 < iT ? new FT(TT + 1) : new BT(zT, !1)
        }, ST.prototype.next = function() {
          return new ST(this.value + BigInt(1))
        }, BT.prototype.prev = function() {
          var TT = this.value;
          return this.sign ? new BT(gT(TT, 1), !0) : wT(TT, 1, this.sign)
        }, FT.prototype.prev = function() {
          var TT = this.value;
          return TT - 1 > -iT ? new FT(TT - 1) : new BT(zT, !0)
        }, ST.prototype.prev = function() {
          return new ST(this.value - BigInt(1))
        };
        for (var aT = [1]; 2 * aT[aT.length - 1] <= IT;) aT.push(2 * aT[aT.length - 1]);
        var YT = aT.length,
          QT = aT[YT - 1];

        function OT(TT) {
          return Math.abs(TT) <= IT
        }

        function HT(TT, IT, iT) {
          IT = PT(IT);
          for (var zT = TT.isNegative(), kT = IT.isNegative(), WT = zT ? TT.not() : TT, XT = kT ? IT.not() : IT, BT = 0, FT = 0, ST = null, DT = null, LT = []; !WT.isZero() || !XT.isZero();) BT = (ST = CT(WT, QT))[1].toJSNumber(), zT && (BT = QT - 1 - BT), FT = (DT = CT(XT, QT))[1].toJSNumber(), kT && (FT = QT - 1 - FT), WT = ST[0], XT = DT[0], LT.push(iT(BT, FT));
          for (var xT = 0 !== iT(zT ? 1 : 0, kT ? 1 : 0) ? oT(-1) : oT(0), cT = LT.length - 1; cT >= 0; cT -= 1) xT = xT.multiply(QT).add(oT(LT[cT]));
          return xT
        }
        BT.prototype.shiftLeft = function(TT) {
          var oT = PT(TT).toJSNumber();
          if (!OT(oT)) throw new Error(String(oT) + " is too large for shifting.");
          if (oT < 0) return this.shiftRight(-oT);
          var IT = this;
          if (IT.isZero()) return IT;
          for (; oT >= YT;) IT = IT.multiply(QT), oT -= YT - 1;
          return IT.multiply(aT[oT])
        }, ST.prototype.shiftLeft = FT.prototype.shiftLeft = BT.prototype.shiftLeft, BT.prototype.shiftRight = function(TT) {
          var oT, IT = PT(TT).toJSNumber();
          if (!OT(IT)) throw new Error(String(IT) + " is too large for shifting.");
          if (IT < 0) return this.shiftLeft(-IT);
          for (var iT = this; IT >= YT;) {
            if (iT.isZero() || iT.isNegative() && iT.isUnit()) return iT;
            iT = (oT = CT(iT, QT))[1].isNegative() ? oT[0].prev() : oT[0], IT -= YT - 1
          }
          return (oT = CT(iT, aT[IT]))[1].isNegative() ? oT[0].prev() : oT[0]
        }, ST.prototype.shiftRight = FT.prototype.shiftRight = BT.prototype.shiftRight, BT.prototype.not = function() {
          return this.ri().prev()
        }, ST.prototype.not = FT.prototype.not = BT.prototype.not, BT.prototype.and = function(TT) {
          return HT(this, TT, (function(TT, oT) {
            return TT & oT
          }))
        }, ST.prototype.and = FT.prototype.and = BT.prototype.and, BT.prototype.or = function(TT) {
          return HT(this, TT, (function(TT, oT) {
            return TT | oT
          }))
        }, ST.prototype.or = FT.prototype.or = BT.prototype.or, BT.prototype.xor = function(TT) {
          return HT(this, TT, (function(TT, oT) {
            return TT ^ oT
          }))
        }, ST.prototype.xor = FT.prototype.xor = BT.prototype.xor;
        var nT = 1 << 30;

        function qT(TT) {
          var oT = TT.value,
            iT = "number" === typeof oT ? oT | nT : "bigint" === typeof oT ? oT | BigInt(nT) : oT[0] + oT[1] * IT | 1073758208;
          return iT & -iT
        }

        function ZT(TT, IT) {
          if (IT.compareTo(TT) <= 0) {
            var iT = ZT(TT, IT.square(IT)),
              zT = iT.p,
              kT = iT.e,
              WT = zT.multiply(IT);
            return WT.compareTo(TT) <= 0 ? {
              p: WT,
              e: 2 * kT + 1
            } : {
              p: zT,
              e: 2 * kT
            }
          }
          return {
            p: oT(1),
            e: 0
          }
        }

        function lT(TT, oT) {
          return TT = PT(TT), oT = PT(oT), TT.greater(oT) ? TT : oT
        }

        function sT(TT, oT) {
          return TT = PT(TT), oT = PT(oT), TT.lesser(oT) ? TT : oT
        }

        function tT(TT, oT) {
          if (TT = PT(TT).abs(), oT = PT(oT).abs(), TT.equals(oT)) return TT;
          if (TT.isZero()) return oT;
          if (oT.isZero()) return TT;
          for (var IT, iT, zT = XT[1]; TT.isEven() && oT.isEven();) IT = sT(qT(TT), qT(oT)), TT = TT.divide(IT), oT = oT.divide(IT), zT = zT.multiply(IT);
          for (; TT.isEven();) TT = TT.divide(qT(TT));
          do {
            for (; oT.isEven();) oT = oT.divide(qT(oT));
            TT.greater(oT) && (iT = oT, oT = TT, TT = iT), oT = oT.subtract(TT)
          } while (!oT.isZero());
          return zT.isUnit() ? TT : TT.multiply(zT)
        }
        BT.prototype.bitLength = function() {
          var TT = this;
          return TT.compareTo(oT(0)) < 0 && (TT = TT.ri().subtract(oT(1))), 0 === TT.compareTo(oT(0)) ? oT(0) : oT(ZT(TT, oT(2)).e).add(oT(1))
        }, ST.prototype.bitLength = FT.prototype.bitLength = BT.prototype.bitLength;
        var GT = function(TT, oT, IT, iT) {
          IT = IT || kT, TT = String(TT), iT || (TT = TT.toLowerCase(), IT = IT.toLowerCase());
          var zT, WT = TT.length,
            XT = Math.abs(oT),
            BT = {};
          for (zT = 0; zT < IT.length; zT++) BT[IT[zT]] = zT;
          for (zT = 0; zT < WT; zT++) {
            if ("-" !== (DT = TT[zT]) && (DT in BT && BT[DT] >= XT)) {
              if ("1" === DT && 1 === XT) continue;
              throw new Error(DT + " is not a valid digit in base " + oT + ".")
            }
          }
          oT = PT(oT);
          var FT = [],
            ST = "-" === TT[0];
          for (zT = ST ? 1 : 0; zT < TT.length; zT++) {
            var DT;
            if ((DT = TT[zT]) in BT) FT.push(PT(BT[DT]));
            else {
              if ("<" !== DT) throw new Error(DT + " is not a valid character");
              var LT = zT;
              do {
                zT++
              } while (">" !== TT[zT] && zT < TT.length);
              FT.push(PT(TT.slice(LT + 1, zT)))
            }
          }
          return pT(FT, oT, ST)
        };

        function pT(TT, oT, IT) {
          var iT, zT = XT[0],
            kT = XT[1];
          for (iT = TT.length - 1; iT >= 0; iT--) zT = zT.add(TT[iT].times(kT)), kT = kT.times(oT);
          return IT ? zT.ri() : zT
        }

        function bT(TT, IT) {
          if ((IT = oT(IT)).isZero()) {
            if (TT.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (IT.equals(-1)) {
            if (TT.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (TT.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-TT.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var iT = Array.apply(null, Array(TT.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return iT.unshift([1]), {
              value: [].concat.apply([], iT),
              isNegative: !1
            }
          }
          var zT = !1;
          if (TT.isNegative() && IT.isPositive() && (zT = !0, TT = TT.abs()), IT.isUnit()) return TT.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(TT.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: zT
          };
          for (var kT, WT = [], XT = TT; XT.isNegative() || XT.compareAbs(IT) >= 0;) {
            kT = XT.divmod(IT), XT = kT.quotient;
            var BT = kT.remainder;
            BT.isNegative() && (BT = IT.minus(BT).abs(), XT = XT.next()), WT.push(BT.toJSNumber())
          }
          return WT.push(XT.toJSNumber()), {
            value: WT.reverse(),
            isNegative: zT
          }
        }

        function yT(TT, oT, IT) {
          var iT = bT(TT, oT);
          return (iT.isNegative ? "-" : "") + iT.value.map((function(TT) {
            return function(TT, oT) {
              return TT < (oT = oT || kT).length ? oT[TT] : "<" + TT + ">"
            }(TT, IT)
          })).join("")
        }

        function NT(TT) {
          if (DT(+TT)) {
            var oT = +TT;
            if (oT === MT(oT)) return WT ? new ST(BigInt(oT)) : new FT(oT);
            throw new Error("Invalid integer: " + TT)
          }
          var IT = "-" === TT[0];
          IT && (TT = TT.slice(1));
          var iT = TT.split(/e/i);
          if (iT.length > 2) throw new Error("Invalid integer: " + iT.join("e"));
          if (2 === iT.length) {
            var zT = iT[1];
            if ("+" === zT[0] && (zT = zT.slice(1)), (zT = +zT) !== MT(zT) || !DT(zT)) throw new Error("Invalid integer: " + zT + " is not a valid exponent.");
            var kT = iT[0],
              XT = kT.indexOf(".");
            if (XT >= 0 && (zT -= kT.length - XT - 1, kT = kT.slice(0, XT) + kT.slice(XT + 1)), zT < 0) throw new Error("Cannot include negative exponent part for integers");
            TT = kT += new Array(zT + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(TT)) throw new Error("Invalid integer: " + TT);
          if (WT) return new ST(BigInt(IT ? "-" + TT : TT));
          for (var LT = [], xT = TT.length, KT = xT - 7; xT > 0;) LT.push(+TT.slice(KT, xT)), (KT -= 7) < 0 && (KT = 0), xT -= 7;
          return cT(LT), new BT(LT, IT)
        }

        function PT(TT) {
          return "number" === typeof TT ? function(TT) {
            if (WT) return new ST(BigInt(TT));
            if (DT(TT)) {
              if (TT !== MT(TT)) throw new Error(TT + " is not an integer.");
              return new FT(TT)
            }
            return NT(TT.toString())
          }(TT) : "string" === typeof TT ? NT(TT) : "bigint" === typeof TT ? new ST(TT) : TT
        }
        BT.prototype.toArray = function(TT) {
          return bT(this, TT)
        }, FT.prototype.toArray = function(TT) {
          return bT(this, TT)
        }, ST.prototype.toArray = function(TT) {
          return bT(this, TT)
        }, BT.prototype.toString = function(oT, IT) {
          if (oT === TT && (oT = 10), 10 !== oT) return yT(this, oT, IT);
          for (var iT, zT = this.value, kT = zT.length, WT = String(zT[--kT]); --kT >= 0;) iT = String(zT[kT]), WT += "0000000".slice(iT.length) + iT;
          return (this.sign ? "-" : "") + WT
        }, FT.prototype.toString = function(oT, IT) {
          return oT === TT && (oT = 10), 10 != oT ? yT(this, oT, IT) : String(this.value)
        }, ST.prototype.toString = FT.prototype.toString, ST.prototype.toJSON = BT.prototype.toJSON = FT.prototype.toJSON = function() {
          return this.toString()
        }, BT.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, BT.prototype.toJSNumber = BT.prototype.valueOf, FT.prototype.valueOf = function() {
          return this.value
        }, FT.prototype.toJSNumber = FT.prototype.valueOf, ST.prototype.valueOf = ST.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var dT = 0; dT < 1e3; dT++) XT[dT] = PT(dT), dT > 0 && (XT[-dT] = PT(-dT));
        return XT.one = XT[1], XT.zero = XT[0], XT.minusOne = XT[-1], XT.max = lT, XT.min = sT, XT.gcd = tT, XT.lcm = function(TT, oT) {
          return TT = PT(TT).abs(), oT = PT(oT).abs(), TT.divide(tT(TT, oT)).multiply(oT)
        }, XT.isInstance = function(TT) {
          return TT instanceof BT || TT instanceof FT || TT instanceof ST
        }, XT.randBetween = function(TT, oT, iT) {
          TT = PT(TT), oT = PT(oT);
          var zT = iT || Math.random,
            kT = sT(TT, oT),
            WT = lT(TT, oT).subtract(kT).add(1);
          if (WT.isSmall) return kT.add(Math.floor(zT() * WT));
          for (var BT = bT(WT, IT).value, FT = [], ST = !0, DT = 0; DT < BT.length; DT++) {
            var LT = ST ? BT[DT] : IT,
              xT = MT(zT() * LT);
            FT.push(xT), xT < LT && (ST = !1)
          }
          return kT.add(XT.joT(FT, IT, !1))
        }, XT.joT = function(TT, oT, IT) {
          return pT(TT.map(PT), PT(oT || 10), IT)
        }, XT
      }();
      TT.hasOwnProperty("exports") && (TT.exports = oT)
    }(hI);
    var wI = kT(hI.exports);

    function mI(TT, oT, IT) {
      let iT = 0;
      for (let zT = 0; zT < IT; zT++) {
        const IT = TT[oT + zT];
        if (void 0 === IT) break;
        iT += IT * 16 ** zT
      }
      return iT
    }

    function eI(TT) {
      const oT = [];
      for (let IT = 0; IT < TT.length; IT++) {
        let iT = Number(TT[IT]);
        for (let TT = 0; iT || TT < oT.length; TT++) iT += 10 * (oT[TT] || 0), oT[TT] = iT % 16, iT = (iT - oT[TT]) / 16
      }
      return oT
    }
    class RI {
      static fromString(TT) {
        return new RI(function(TT) {
          const oT = eI(TT),
            IT = Array(4);
          for (let iT = 0; iT < 4; iT++) IT[3 - iT] = mI(oT, 4 * iT, 4);
          return IT
        }(TT), TT)
      }
      static fromBit(TT) {
        const oT = Array(4),
          IT = Math.floor(TT / 16);
        for (let iT = 0; iT < 4; iT++) oT[3 - iT] = iT === IT ? 1 << TT - 16 * IT : 0;
        return new RI(oT)
      }
      constructor(TT, oT) {
        this.parts = TT, this.str = oT
      }
      and(TT) {
        let {
          parts: oT
        } = TT;
        return new RI(this.parts.map(((TT, IT) => TT & oT[IT])))
      }
      or(TT) {
        let {
          parts: oT
        } = TT;
        return new RI(this.parts.map(((TT, IT) => TT | oT[IT])))
      }
      xor(TT) {
        let {
          parts: oT
        } = TT;
        return new RI(this.parts.map(((TT, IT) => TT ^ oT[IT])))
      }
      not() {
        return new RI(this.parts.map((TT => ~TT)))
      }
      equals(TT) {
        let {
          parts: oT
        } = TT;
        return this.parts.every(((TT, IT) => TT === oT[IT]))
      }
      toString() {
        if (null != this.str) return this.str;
        const TT = new Array(16);
        return this.parts.forEach(((oT, IT) => {
          const iT = eI(oT.toString());
          for (let zT = 0; zT < 4; zT++) TT[zT + 4 * IT] = iT[3 - zT] || 0
        })), this.str = wI.joT(TT, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const uI = function() {
      try {
        return BigInt, !0
      } catch (TT) {
        return !1
      }
    }();
    uI && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const vI = {},
      EI = uI ? function(TT) {
        return BigInt(TT)
      } : function(TT) {
        return TT instanceof RI ? TT : ("number" === typeof TT && (TT = TT.toString()), null != vI[TT] || (vI[TT] = RI.fromString(TT)), vI[TT])
      },
      fI = EI(0),
      CI = uI ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fI) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fI)
      } : function() {
        let TT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fI;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fI).and(TT)
      },
      jI = uI ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fI) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fI)
      } : function() {
        let TT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fI;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fI).or(TT)
      },
      JI = uI ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fI) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fI)
      } : function() {
        let TT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fI;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fI).xor(TT)
      },
      UI = uI ? function(TT, oT) {
        return TT === oT
      } : function(TT, oT) {
        return null == TT || null == oT ? TT == oT : TT.equals(oT)
      };
    var aI, YI, QI, OI, HI = {
      combine: function() {
        let TT = arguments.length <= 0 ? void 0 : arguments[0];
        for (let oT = 1; oT < arguments.length; oT++) TT = jI(TT, oT < 0 || arguments.length <= oT ? void 0 : arguments[oT]);
        return TT
      },
      add: function(TT, oT) {
        return oT === fI ? TT : jI(TT, oT)
      },
      remove: function(TT, oT) {
        return oT === fI ? TT : JI(TT, CI(TT, oT))
      },
      filter: CI,
      invert: uI ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fI)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : fI).not()
      },
      has: function(TT, oT) {
        return UI(CI(TT, oT), oT)
      },
      hasAny: function(TT, oT) {
        return !UI(CI(TT, oT), fI)
      },
      equals: UI,
      deserialize: EI,
      getFlag: uI ? function(TT) {
        return BigInt(1) << BigInt(TT)
      } : function(TT) {
        return RI.fromBit(TT)
      }
    };
    ! function(TT) {
      TT[TT.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", TT[TT.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", TT[TT.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", TT[TT.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", TT[TT.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", TT[TT.RATELIMITED = 4002] = "RATELIMITED", TT[TT.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", TT[TT.INVALID_VERSION = 4004] = "INVALID_VERSION", TT[TT.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(aI || (aI = {})),
    function(TT) {
      TT[TT.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", TT[TT.INVALID_COMMAND = 4002] = "INVALID_COMMAND", TT[TT.INVALID_EVENT = 4004] = "INVALID_EVENT", TT[TT.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(YI || (YI = {})),
    function(TT) {
      TT.LANDSCAPE = "landscape", TT.PORTRAIT = "portrait"
    }(QI || (QI = {})),
    function(TT) {
      TT.MOBILE = "mobile", TT.DESKTOP = "desktop"
    }(OI || (OI = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: HI.getFlag(0),
      ADMINISTRATOR: HI.getFlag(3)
    });

    function nI(TT) {
      return KI((oT => {
        var IT;
        const [iT] = null !== (IT = Object.entries(TT).find((TT => {
          let [, IT] = TT;
          return IT === oT
        }))) && void 0 !== IT ? IT : [];
        return null != oT && void 0 === iT ? TT.UNHANDLED : oT
      }), ao().or(Yo()))
    }
    const qI = gI.object({
        image_url: gI.string()
      }),
      ZI = gI.object({
        mediaUrl: gI.string().max(1024)
      }),
      lI = gI.object({
        access_token: gI.union([gI.string(), gI.null()]).optional()
      }),
      sI = gI.object({
        access_token: gI.string(),
        user: gI.object({
          username: gI.string(),
          discriminator: gI.string(),
          id: gI.string(),
          avatar: gI.union([gI.string(), gI.null()]).optional(),
          public_flags: gI.number(),
          global_name: gI.union([gI.string(), gI.null()]).optional()
        }),
        scopes: gI.array(function(TT) {
          const oT = jo().transform((oT => {
            const IT = TT.safeParse(oT);
            return IT.success ? IT.data : TT._def.defaultValue()
          }));
          return oT.overlayType = TT, oT
        }(gI.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(gI.literal(-1)).default(-1))),
        expires: gI.string(),
        application: gI.object({
          description: gI.string(),
          icon: gI.union([gI.string(), gI.null()]).optional(),
          id: gI.string(),
          rpc_origins: gI.array(gI.string()).optional(),
          name: gI.string()
        })
      }),
      tI = gI.object({
        participants: gI.array(gI.object({
          id: gI.string(),
          username: gI.string(),
          global_name: gI.union([gI.string(), gI.null()]).optional(),
          discriminator: gI.string(),
          avatar: gI.union([gI.string(), gI.null()]).optional(),
          flags: gI.number(),
          bot: gI.boolean(),
          avatar_decoration_data: gI.union([gI.object({
            asset: gI.string(),
            skuId: gI.string().optional()
          }), gI.null()]).optional(),
          premium_type: gI.union([gI.number(), gI.null()]).optional(),
          nickname: gI.string().optional()
        }))
      });
    var GI;
    ! function(TT) {
      TT.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", TT.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", TT.AUTHENTICATE = "AUTHENTICATE", TT.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(GI || (GI = {}));
    const pI = gI.object({}).optional().nullable(),
      bI = gI.void(),
      yI = {
        [GI.INITIATE_IMAGE_UPLOAD]: {
          request: bI,
          response: qI
        },
        [GI.OPEN_SHARE_MOMENT_DIALOG]: {
          request: ZI,
          response: pI
        },
        [GI.AUTHENTICATE]: {
          request: lI,
          response: sI
        },
        [GI.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: bI,
          response: tI
        }
      },
      NI = "DISPATCH";
    var PI;
    ! function(TT) {
      TT.AUTHORIZE = "AUTHORIZE", TT.AUTHENTICATE = "AUTHENTICATE", TT.GET_GUILDS = "GET_GUILDS", TT.GET_GUILD = "GET_GUILD", TT.GET_CHANNEL = "GET_CHANNEL", TT.GET_CHANNELS = "GET_CHANNELS", TT.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", TT.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", TT.SUBSCRIBE = "SUBSCRIBE", TT.UNSUBSCRIBE = "UNSUBSCRIBE", TT.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", TT.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", TT.SET_ACTIVITY = "SET_ACTIVITY", TT.GET_SKUS = "GET_SKUS", TT.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", TT.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", TT.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", TT.START_PURCHASE = "START_PURCHASE", TT.SET_CONFIG = "SET_CONFIG", TT.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", TT.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", TT.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", TT.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", TT.CAPTURE_LOG = "CAPTURE_LOG", TT.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", TT.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", TT.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", TT.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", TT.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", TT.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", TT.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(PI || (PI = {}));
    const dI = No({
        cmd: ao(),
        data: Go(),
        evt: so(),
        nonce: ao()
      }).passthrough(),
      VI = (nI(Object.assign(Object.assign({}, sI.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), No({
        id: ao(),
        username: ao(),
        discriminator: ao(),
        global_name: ao().optional().nullable(),
        avatar: ao().optional().nullable(),
        avatar_decoration_data: No({
          asset: ao(),
          sku_id: ao().optional()
        }).nullable(),
        bot: Ho(),
        flags: Yo().optional().nullable(),
        premium_type: Yo().optional().nullable()
      })),
      Ti = No({
        user: VI,
        nick: ao().optional().nullable(),
        roles: yo(ao()),
        joined_at: ao(),
        deaf: Ho(),
        mute: Ho()
      }),
      oi = No({
        id: ao(),
        name: ao().optional().nullable(),
        roles: yo(ao()).optional().nullable(),
        user: VI.optional().nullable(),
        require_colons: Ho().optional().nullable(),
        managed: Ho().optional().nullable(),
        animated: Ho().optional().nullable(),
        available: Ho().optional().nullable()
      }),
      Ii = No({
        mute: Ho(),
        deaf: Ho(),
        self_mute: Ho(),
        self_deaf: Ho(),
        suppress: Ho()
      }),
      ii = No({
        mute: Ho(),
        nick: ao(),
        user: VI,
        voice_state: Ii,
        volume: Yo()
      }),
      zi = nI({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      ki = No({
        name: ao(),
        type: Yo(),
        url: ao().optional().nullable(),
        created_at: Yo().optional().nullable(),
        timestamps: No({
          start: Yo(),
          end: Yo()
        }).partial().optional().nullable(),
        application_id: ao().optional().nullable(),
        details: ao().optional().nullable(),
        state: ao().optional().nullable(),
        emoji: oi.optional().nullable(),
        party: No({
          id: ao().optional().nullable(),
          size: yo(Yo()).optional().nullable()
        }).optional().nullable(),
        assets: No({
          large_image: ao().nullable(),
          large_text: ao().nullable(),
          small_image: ao().nullable(),
          small_text: ao().nullable()
        }).partial().optional().nullable(),
        secrets: No({
          join: ao(),
          match: ao()
        }).partial().optional().nullable(),
        instance: Ho().optional().nullable(),
        flags: Yo().optional().nullable()
      }),
      Wi = No({
        id: ao(),
        type: nI({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: ao(),
        deny: ao()
      }),
      Xi = {
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
      Bi = No({
        id: ao(),
        type: nI(Xi),
        guild_id: ao().optional().nullable(),
        position: Yo().optional().nullable(),
        permission_overwrites: yo(Wi).optional().nullable(),
        name: ao().optional().nullable(),
        topic: ao().optional().nullable(),
        nsfw: Ho().optional().nullable(),
        last_message_id: ao().optional().nullable(),
        bitrate: Yo().optional().nullable(),
        user_limit: Yo().optional().nullable(),
        rate_limit_per_user: Yo().optional().nullable(),
        recipients: yo(VI).optional().nullable(),
        icon: ao().optional().nullable(),
        owner_id: ao().optional().nullable(),
        application_id: ao().optional().nullable(),
        parent_id: ao().optional().nullable(),
        last_pin_timestamp: ao().optional().nullable()
      }),
      Fi = No({
        user: VI,
        guild_id: ao(),
        status: zi,
        activities: yo(ki),
        client_status: No({
          desktop: zi,
          mobile: zi,
          web: zi
        }).partial()
      }),
      Si = No({
        id: ao(),
        name: ao(),
        color: Yo(),
        hoist: Ho(),
        position: Yo(),
        permissions: ao(),
        managed: Ho(),
        mentionable: Ho()
      }),
      Di = (No({
        id: ao(),
        name: ao(),
        owner_id: ao(),
        icon: ao().nullable(),
        icon_hash: ao().optional().nullable(),
        splash: ao().nullable(),
        discovery_splash: ao().nullable(),
        owner: Ho().optional().nullable(),
        permissions: ao().optional().nullable(),
        region: ao(),
        afk_channel_id: ao().nullable(),
        afk_timeout: Yo(),
        widget_enabled: Ho().optional().nullable(),
        widget_channel_id: ao().optional().nullable(),
        verification_level: Yo(),
        default_message_notifications: Yo(),
        explicit_content_filter: Yo(),
        roles: yo(Si),
        emojis: yo(oi),
        features: yo(ao()),
        mfa_level: Yo(),
        application_id: ao().nullable(),
        system_channel_id: ao().nullable(),
        system_channel_flags: Yo(),
        rules_channel_id: ao().nullable(),
        joined_at: ao().optional().nullable(),
        large: Ho().optional().nullable(),
        unavailable: Ho().optional().nullable(),
        member_count: Yo().optional().nullable(),
        voice_states: yo(Ii).optional().nullable(),
        members: yo(Ti).optional().nullable(),
        channels: yo(Bi).optional().nullable(),
        presences: yo(Fi).optional().nullable(),
        max_presences: Yo().optional().nullable(),
        max_members: Yo().optional().nullable(),
        vanity_url_code: ao().nullable(),
        description: ao().nullable(),
        banner: ao().nullable(),
        premium_tier: Yo(),
        premium_subscription_count: Yo().optional().nullable(),
        preferred_locale: ao(),
        public_updates_channel_id: ao().nullable(),
        max_video_channel_users: Yo().optional().nullable(),
        approximate_member_count: Yo().optional().nullable(),
        approximate_presence_count: Yo().optional().nullable()
      }), No({
        id: ao(),
        guild_id: ao(),
        type: Yo(),
        name: ao()
      })),
      Li = No({
        id: ao(),
        filename: ao(),
        size: Yo(),
        url: ao(),
        proxy_url: ao(),
        height: Yo().optional().nullable(),
        width: Yo().optional().nullable()
      }),
      xi = No({
        text: ao(),
        icon_url: ao().optional().nullable(),
        proxy_icon_url: ao().optional().nullable()
      }),
      ci = No({
        url: ao().optional().nullable(),
        proxy_url: ao().optional().nullable(),
        height: Yo().optional().nullable(),
        width: Yo().optional().nullable()
      }),
      Ki = ci.omit({
        proxy_url: !0
      }),
      Mi = No({
        name: ao().optional().nullable(),
        url: ao().optional().nullable()
      }),
      ri = No({
        name: ao().optional().nullable(),
        url: ao().optional().nullable(),
        icon_url: ao().optional().nullable(),
        proxy_icon_url: ao().optional().nullable()
      }),
      Ai = No({
        name: ao(),
        value: ao(),
        inline: Ho()
      }),
      gi = No({
        title: ao().optional().nullable(),
        type: ao().optional().nullable(),
        description: ao().optional().nullable(),
        url: ao().optional().nullable(),
        timestamp: ao().optional().nullable(),
        color: Yo().optional().nullable(),
        footer: xi.optional().nullable(),
        image: ci.optional().nullable(),
        thumbnail: ci.optional().nullable(),
        video: Ki.optional().nullable(),
        provider: Mi.optional().nullable(),
        author: ri.optional().nullable(),
        fields: yo(Ai).optional().nullable()
      }),
      wi = No({
        count: Yo(),
        me: Ho(),
        emoji: oi
      }),
      mi = No({
        type: Yo(),
        party_id: ao().optional().nullable()
      }),
      ei = No({
        id: ao(),
        cover_image: ao().optional().nullable(),
        description: ao(),
        icon: ao().optional().nullable(),
        name: ao()
      }),
      Ri = No({
        message_id: ao().optional().nullable(),
        channel_id: ao().optional().nullable(),
        guild_id: ao().optional().nullable()
      }),
      ui = No({
        id: ao(),
        channel_id: ao(),
        guild_id: ao().optional().nullable(),
        author: VI.optional().nullable(),
        member: Ti.optional().nullable(),
        content: ao(),
        timestamp: ao(),
        edited_timestamp: ao().optional().nullable(),
        tts: Ho(),
        mention_everyone: Ho(),
        mentions: yo(VI),
        mention_roles: yo(ao()),
        mention_channels: yo(Di),
        attachments: yo(Li),
        embeds: yo(gi),
        reactions: yo(wi).optional().nullable(),
        nonce: Vo([ao(), Yo()]).optional().nullable(),
        pinned: Ho(),
        webhook_id: ao().optional().nullable(),
        type: Yo(),
        activity: mi.optional().nullable(),
        application: ei.optional().nullable(),
        message_reference: Ri.optional().nullable(),
        flags: Yo().optional().nullable(),
        stickers: yo(Go()).optional().nullable(),
        referenced_message: Go().optional().nullable()
      }),
      vi = No({
        id: ao(),
        name: ao()
      }),
      Ei = No({
        type: nI({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: Yo(),
        name: ao()
      }),
      fi = No({
        type: nI({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: Ho(),
        threshold: Yo(),
        shortcut: yo(Ei),
        delay: Yo()
      }),
      Ci = No({
        device_id: ao(),
        volume: Yo(),
        available_devices: yo(vi)
      }),
      ji = (No({
        type: nI({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: ao(),
        vendor: No({
          name: ao(),
          url: ao()
        }),
        model: No({
          name: ao(),
          url: ao()
        }),
        related: yo(ao()),
        echo_cancellation: Ho().optional().nullable(),
        noise_suppression: Ho().optional().nullable(),
        automatic_gain_control: Ho().optional().nullable(),
        hardware_mute: Ho().optional().nullable()
      }), No({
        id: ao(),
        name: ao(),
        type: nI({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: No({
          amount: Yo(),
          currency: ao()
        }),
        application_id: ao(),
        flags: Yo(),
        release_date: ao().nullable()
      })),
      Ji = No({
        id: ao(),
        sku_id: ao(),
        application_id: ao(),
        user_id: ao(),
        gift_code_flags: Yo(),
        type: nI({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: ao().optional().nullable(),
        branches: yo(ao()).optional().nullable(),
        starts_at: ao().optional().nullable(),
        ends_at: ao().optional().nullable(),
        parent_id: ao().optional().nullable(),
        consumed: Ho().optional().nullable(),
        deleted: Ho().optional().nullable(),
        gift_code_batch_id: ao().optional().nullable()
      }),
      Ui = (nI({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), nI({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      ai = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      Yi = (nI(ai), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      Qi = (nI(Yi), "ERROR");
    var Oi;
    ! function(TT) {
      TT.READY = "READY", TT.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", TT.SPEAKING_START = "SPEAKING_START", TT.SPEAKING_STOP = "SPEAKING_STOP", TT.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", TT.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", TT.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", TT.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", TT.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", TT.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(Oi || (Oi = {}));
    const Hi = dI.extend({
        evt: SI(Oi),
        nonce: ao().nullable(),
        cmd: BI(NI),
        data: No({}).passthrough()
      }),
      ni = dI.extend({
        evt: BI(Qi),
        data: No({
          code: Yo(),
          message: ao().optional()
        }).passthrough(),
        cmd: SI(PI),
        nonce: ao().nullable()
      }),
      qi = Hi.extend({
        evt: ao()
      }),
      Zi = Vo([Hi, qi, ni]);
    const li = {
      [Oi.READY]: {
        payload: Hi.extend({
          evt: BI(Oi.READY),
          data: No({
            v: Yo(),
            config: No({
              cdn_host: ao().optional(),
              api_endpoint: ao(),
              environment: ao()
            }),
            user: No({
              id: ao(),
              username: ao(),
              discriminator: ao(),
              avatar: ao().optional()
            }).optional()
          })
        })
      },
      [Oi.VOICE_STATE_UPDATE]: {
        payload: Hi.extend({
          evt: BI(Oi.VOICE_STATE_UPDATE),
          data: ii
        }),
        subscribeArgs: No({
          channel_id: ao()
        })
      },
      [Oi.SPEAKING_START]: {
        payload: Hi.extend({
          evt: BI(Oi.SPEAKING_START),
          data: No({
            lobby_id: ao().optional(),
            channel_id: ao().optional(),
            user_id: ao()
          })
        }),
        subscribeArgs: No({
          lobby_id: ao().nullable().optional(),
          channel_id: ao().nullable().optional()
        })
      },
      [Oi.SPEAKING_STOP]: {
        payload: Hi.extend({
          evt: BI(Oi.SPEAKING_STOP),
          data: No({
            lobby_id: ao().optional(),
            channel_id: ao().optional(),
            user_id: ao()
          })
        }),
        subscribeArgs: No({
          lobby_id: ao().nullable().optional(),
          channel_id: ao().nullable().optional()
        })
      },
      [Oi.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: Hi.extend({
          evt: BI(Oi.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: No({
            layout_mode: nI(Yi)
          })
        })
      },
      [Oi.ORIENTATION_UPDATE]: {
        payload: Hi.extend({
          evt: BI(Oi.ORIENTATION_UPDATE),
          data: No({
            screen_orientation: nI(ai),
            orientation: SI(QI)
          })
        })
      },
      [Oi.CURRENT_USER_UPDATE]: {
        payload: Hi.extend({
          evt: BI(Oi.CURRENT_USER_UPDATE),
          data: VI
        })
      },
      [Oi.ENTITLEMENT_CREATE]: {
        payload: Hi.extend({
          evt: BI(Oi.ENTITLEMENT_CREATE),
          data: No({
            entitlement: Ji
          })
        })
      },
      [Oi.THERMAL_STATE_UPDATE]: {
        payload: Hi.extend({
          evt: BI(Oi.THERMAL_STATE_UPDATE),
          data: No({
            thermal_state: Ui
          })
        })
      },
      [Oi.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: Hi.extend({
          evt: BI(Oi.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: No({
            participants: tI.shape.participants
          })
        })
      }
    };
    const si = No({}).nullable(),
      ti = No({
        code: ao()
      }),
      Gi = No({
        guilds: yo(No({
          id: ao(),
          name: ao()
        }))
      }),
      bi = No({
        id: ao(),
        name: ao(),
        icon_url: ao().optional(),
        members: yo(Ti)
      }),
      yi = No({
        id: ao(),
        type: nI(Xi),
        guild_id: ao().optional().nullable(),
        name: ao().optional().nullable(),
        topic: ao().optional().nullable(),
        bitrate: Yo().optional().nullable(),
        user_limit: Yo().optional().nullable(),
        position: Yo().optional().nullable(),
        voice_states: yo(ii),
        messages: yo(ui)
      }),
      Ni = No({
        channels: yo(Bi)
      }),
      Pi = (yi.nullable(), yi.nullable()),
      di = yi.nullable(),
      Vi = (No({
        input: Ci,
        output: Ci,
        mode: fi,
        automatic_gain_control: Ho(),
        echo_cancellation: Ho(),
        noise_suppression: Ho(),
        qos: Ho(),
        silence_warning: Ho(),
        deaf: Ho(),
        mute: Ho()
      }), No({
        evt: ao()
      })),
      Tz = No({
        shortcut: Ei
      }),
      oz = ki,
      Iz = No({
        skus: yo(ji)
      }),
      iz = No({
        entitlements: yo(Ji)
      }),
      zz = yo(Ji).nullable(),
      kz = No({
        use_interactive_pip: Ho()
      }),
      Wz = No({
        locale: ao()
      }),
      Xz = No({
        enabled: Ho()
      }),
      Bz = No({
        permissions: Oo().or(ao())
      }),
      Fz = No({
        iosKeyboardResizesView: xI(Ho())
      }),
      Sz = dI.extend({
        cmd: SI(PI),
        evt: so()
      });

    function Dz(TT) {
      let {
        cmd: oT,
        data: IT
      } = TT;
      switch (oT) {
        case PI.AUTHORIZE:
          return ti.parse(IT);
        case PI.CAPTURE_SHORTCUT:
          return Tz.parse(IT);
        case PI.ENCOURAGE_HW_ACCELERATION:
          return Xz.parse(IT);
        case PI.GET_CHANNEL:
          return yi.parse(IT);
        case PI.GET_CHANNELS:
          return Ni.parse(IT);
        case PI.GET_CHANNEL_PERMISSIONS:
          return Bz.parse(IT);
        case PI.GET_GUILD:
          return bi.parse(IT);
        case PI.GET_GUILDS:
          return Gi.parse(IT);
        case PI.GET_PLATFORM_BEHAVIORS:
          return Fz.parse(IT);
        case PI.GET_CHANNEL:
          return yi.parse(IT);
        case PI.SELECT_TEXT_CHANNEL:
          return di.parse(IT);
        case PI.SELECT_VOICE_CHANNEL:
          return Pi.parse(IT);
        case PI.SET_ACTIVITY:
          return oz.parse(IT);
        case PI.GET_SKUS_EMBEDDED:
          return Iz.parse(IT);
        case PI.GET_ENTITLEMENTS_EMBEDDED:
          return iz.parse(IT);
        case PI.SET_CONFIG:
          return kz.parse(IT);
        case PI.START_PURCHASE:
          return zz.parse(IT);
        case PI.SUBSCRIBE:
        case PI.UNSUBSCRIBE:
          return Vi.parse(IT);
        case PI.USER_SETTINGS_GET_LOCALE:
          return Wz.parse(IT);
        case PI.OPEN_EXTERNAL_LINK:
        case PI.SET_ORIENTATION_LOCK_STATE:
        case PI.SET_CERTIFIED_DEVICES:
        case PI.SEND_ANALYTICS_EVENT:
        case PI.OPEN_INVITE_DIALOG:
        case PI.CAPTURE_LOG:
        case PI.GET_SKUS:
        case PI.GET_ENTITLEMENTS:
          return si.parse(IT);
        case PI.AUTHENTICATE:
        case PI.INITIATE_IMAGE_UPLOAD:
        case PI.OPEN_SHARE_MOMENT_DIALOG:
        case PI.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: TT
          } = yI[oT];
          return TT.parse(IT);
        default:
          ! function(TT, oT) {
            throw oT
          }(0, new Error(`Unrecognized command ${oT}`))
      }
    }
    No({
      frame_id: ao(),
      platform: SI(OI).optional().nullable()
    }), No({
      v: BI(1),
      encoding: BI("json").optional(),
      client_id: ao(),
      frame_id: ao()
    });
    const Lz = No({
        code: Yo(),
        message: ao().optional()
      }),
      xz = No({
        evt: ao().nullable(),
        nonce: ao().nullable(),
        data: Go().nullable(),
        cmd: ao()
      }).passthrough();

    function cz(TT) {
      const oT = xz.parse(TT);
      return null != oT.evt ? oT.evt === Qi ? ni.parse(oT) : function(TT) {
        const oT = TT.evt;
        if (!(oT in Oi)) throw new Error(`Unrecognized event type ${TT.evt}`);
        return li[oT].payload.parse(TT)
      }(Zi.parse(oT)) : function(TT) {
        return Object.assign(Object.assign({}, TT), {
          data: Dz(TT)
        })
      }(Sz.passthrough().parse(oT))
    }

    function Kz(TT, oT, IT) {
      let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const zT = dI.extend({
        cmd: BI(oT),
        data: IT
      });
      return async IT => {
        const kT = await TT({
          cmd: oT,
          args: IT,
          transfer: iT(IT)
        });
        return zT.parse(kT).data
      }
    }

    function Mz(TT) {
      let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const IT = yI[TT].response,
        iT = dI.extend({
          cmd: BI(TT),
          data: IT
        });
      return IT => async zT => {
        const kT = await IT({
          cmd: TT,
          args: zT,
          transfer: oT(zT)
        });
        return iT.parse(kT).data
      }
    }
    const rz = Mz(GI.AUTHENTICATE),
      Az = TT => Kz(TT, PI.AUTHORIZE, ti),
      gz = TT => Kz(TT, PI.CAPTURE_LOG, si),
      hz = TT => Kz(TT, PI.ENCOURAGE_HW_ACCELERATION, Xz),
      wz = TT => Kz(TT, PI.GET_ENTITLEMENTS_EMBEDDED, iz),
      mz = TT => Kz(TT, PI.GET_SKUS_EMBEDDED, Iz),
      ez = TT => Kz(TT, PI.GET_CHANNEL_PERMISSIONS, Bz),
      Rz = TT => Kz(TT, PI.GET_PLATFORM_BEHAVIORS, Fz),
      uz = TT => Kz(TT, PI.OPEN_EXTERNAL_LINK, si),
      vz = TT => Kz(TT, PI.OPEN_INVITE_DIALOG, si),
      Ez = Mz(GI.OPEN_SHARE_MOMENT_DIALOG);
    ki.PL({
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
      type: ki.shape.type.optional(),
      instance: ki.shape.instance.optional()
    }).nullable();
    const fz = TT => Kz(TT, PI.SET_ACTIVITY, oz),
      Cz = TT => Kz(TT, PI.SET_CONFIG, kz);
    const jz = TT => ({
        lock_state: TT.lock_state,
        picture_in_picture_lock_state: TT.picture_in_picture_lock_state
      }),
      Jz = TT => function(TT) {
        let {
          sendCommand: oT,
          cmd: IT,
          response: iT,
          fallbackTransform: zT,
          transferTransform: kT = () => {}
        } = TT;
        const WT = dI.extend({
          cmd: BI(IT),
          data: iT
        });
        return async TT => {
          try {
            const iT = await oT({
              cmd: IT,
              args: TT,
              transfer: kT(TT)
            });
            return WT.parse(iT).data
          } catch (iT) {
            if (iT.code === YI.INVALID_PAYLOAD) {
              const iT = zT(TT),
                XT = await oT({
                  cmd: IT,
                  args: iT,
                  transfer: kT(iT)
                });
              return WT.parse(XT).data
            }
            throw iT
          }
        }
      }({
        sendCommand: TT,
        cmd: PI.SET_ORIENTATION_LOCK_STATE,
        response: si,
        fallbackTransform: jz
      }),
      Uz = TT => Kz(TT, PI.START_PURCHASE, zz),
      az = TT => Kz(TT, PI.USER_SETTINGS_GET_LOCALE, Wz),
      Yz = Mz(GI.INITIATE_IMAGE_UPLOAD),
      Qz = TT => Kz(TT, PI.GET_CHANNEL, yi),
      Oz = Mz(GI.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var Hz = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function nz(TT) {
      return "string" === typeof TT && Hz.test(TT)
    }
    for (var qz = [], Zz = 0; Zz < 256; ++Zz) qz.push((Zz + 256).toString(16).substr(1));

    function lz(TT) {
      var oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        IT = (qz[TT[oT + 0]] + qz[TT[oT + 1]] + qz[TT[oT + 2]] + qz[TT[oT + 3]] + "-" + qz[TT[oT + 4]] + qz[TT[oT + 5]] + "-" + qz[TT[oT + 6]] + qz[TT[oT + 7]] + "-" + qz[TT[oT + 8]] + qz[TT[oT + 9]] + "-" + qz[TT[oT + 10]] + qz[TT[oT + 11]] + qz[TT[oT + 12]] + qz[TT[oT + 13]] + qz[TT[oT + 14]] + qz[TT[oT + 15]]).toLowerCase();
      if (!nz(IT)) throw TypeError("Stringified UUID is invalid");
      return IT
    }
    var sz;

    function tz(TT, oT, IT) {
      function iT(TT, iT, zT, kT) {
        if ("string" === typeof TT && (TT = function(TT) {
            TT = unescape(encodeURIComponent(TT));
            for (var oT = [], IT = 0; IT < TT.length; ++IT) oT.push(TT.charCodeAt(IT));
            return oT
          }(TT)), "string" === typeof iT && (iT = function(TT) {
            if (!nz(TT)) throw TypeError("Invalid UUID");
            var oT, IT = new Uint8Array(16);
            return IT[0] = (oT = parseInt(TT.slice(0, 8), 16)) >>> 24, IT[1] = oT >>> 16 & 255, IT[2] = oT >>> 8 & 255, IT[3] = 255 & oT, IT[4] = (oT = parseInt(TT.slice(9, 13), 16)) >>> 8, IT[5] = 255 & oT, IT[6] = (oT = parseInt(TT.slice(14, 18), 16)) >>> 8, IT[7] = 255 & oT, IT[8] = (oT = parseInt(TT.slice(19, 23), 16)) >>> 8, IT[9] = 255 & oT, IT[10] = (oT = parseInt(TT.slice(24, 36), 16)) / 1099511627776 & 255, IT[11] = oT / 4294967296 & 255, IT[12] = oT >>> 24 & 255, IT[13] = oT >>> 16 & 255, IT[14] = oT >>> 8 & 255, IT[15] = 255 & oT, IT
          }(iT)), 16 !== iT.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var WT = new Uint8Array(16 + TT.length);
        if (WT.set(iT), WT.set(TT, iT.length), (WT = IT(WT))[6] = 15 & WT[6] | oT, WT[8] = 63 & WT[8] | 128, zT) {
          kT = kT || 0;
          for (var XT = 0; XT < 16; ++XT) zT[kT + XT] = WT[XT];
          return zT
        }
        return lz(WT)
      }
      try {
        iT.name = TT
      } catch (zT) {}
      return iT.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", iT.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", iT
    }

    function Gz(TT) {
      return 14 + (TT + 64 >>> 9 << 4) + 1
    }

    function pz(TT, oT) {
      var IT = (65535 & TT) + (65535 & oT);
      return (TT >> 16) + (oT >> 16) + (IT >> 16) << 16 | 65535 & IT
    }

    function bz(TT, oT, IT, iT, zT, kT) {
      return pz((WT = pz(pz(oT, TT), pz(iT, kT))) << (XT = zT) | WT >>> 32 - XT, IT);
      var WT, XT
    }

    function yz(TT, oT, IT, iT, zT, kT, WT) {
      return bz(oT & IT | ~oT & iT, TT, oT, zT, kT, WT)
    }

    function Nz(TT, oT, IT, iT, zT, kT, WT) {
      return bz(oT & iT | IT & ~iT, TT, oT, zT, kT, WT)
    }

    function Pz(TT, oT, IT, iT, zT, kT, WT) {
      return bz(oT ^ IT ^ iT, TT, oT, zT, kT, WT)
    }

    function dz(TT, oT, IT, iT, zT, kT, WT) {
      return bz(IT ^ (oT | ~iT), TT, oT, zT, kT, WT)
    }
    tz("v3", 48, (function(TT) {
      if ("string" === typeof TT) {
        var oT = unescape(encodeURIComponent(TT));
        TT = new Uint8Array(oT.length);
        for (var IT = 0; IT < oT.length; ++IT) TT[IT] = oT.charCodeAt(IT)
      }
      return function(TT) {
        for (var oT = [], IT = 32 * TT.length, iT = "0123456789abcdef", zT = 0; zT < IT; zT += 8) {
          var kT = TT[zT >> 5] >>> zT % 32 & 255,
            WT = parseInt(iT.charAt(kT >>> 4 & 15) + iT.charAt(15 & kT), 16);
          oT.push(WT)
        }
        return oT
      }(function(TT, oT) {
        TT[oT >> 5] |= 128 << oT % 32, TT[Gz(oT) - 1] = oT;
        for (var IT = 1732584193, iT = -271733879, zT = -1732584194, kT = 271733878, WT = 0; WT < TT.length; WT += 16) {
          var XT = IT,
            BT = iT,
            FT = zT,
            ST = kT;
          IT = yz(IT, iT, zT, kT, TT[WT], 7, -680876936), kT = yz(kT, IT, iT, zT, TT[WT + 1], 12, -389564586), zT = yz(zT, kT, IT, iT, TT[WT + 2], 17, 606105819), iT = yz(iT, zT, kT, IT, TT[WT + 3], 22, -1044525330), IT = yz(IT, iT, zT, kT, TT[WT + 4], 7, -176418897), kT = yz(kT, IT, iT, zT, TT[WT + 5], 12, 1200080426), zT = yz(zT, kT, IT, iT, TT[WT + 6], 17, -1473231341), iT = yz(iT, zT, kT, IT, TT[WT + 7], 22, -45705983), IT = yz(IT, iT, zT, kT, TT[WT + 8], 7, 1770035416), kT = yz(kT, IT, iT, zT, TT[WT + 9], 12, -1958414417), zT = yz(zT, kT, IT, iT, TT[WT + 10], 17, -42063), iT = yz(iT, zT, kT, IT, TT[WT + 11], 22, -1990404162), IT = yz(IT, iT, zT, kT, TT[WT + 12], 7, 1804603682), kT = yz(kT, IT, iT, zT, TT[WT + 13], 12, -40341101), zT = yz(zT, kT, IT, iT, TT[WT + 14], 17, -1502002290), IT = Nz(IT, iT = yz(iT, zT, kT, IT, TT[WT + 15], 22, 1236535329), zT, kT, TT[WT + 1], 5, -165796510), kT = Nz(kT, IT, iT, zT, TT[WT + 6], 9, -1069501632), zT = Nz(zT, kT, IT, iT, TT[WT + 11], 14, 643717713), iT = Nz(iT, zT, kT, IT, TT[WT], 20, -373897302), IT = Nz(IT, iT, zT, kT, TT[WT + 5], 5, -701558691), kT = Nz(kT, IT, iT, zT, TT[WT + 10], 9, 38016083), zT = Nz(zT, kT, IT, iT, TT[WT + 15], 14, -660478335), iT = Nz(iT, zT, kT, IT, TT[WT + 4], 20, -405537848), IT = Nz(IT, iT, zT, kT, TT[WT + 9], 5, 568446438), kT = Nz(kT, IT, iT, zT, TT[WT + 14], 9, -1019803690), zT = Nz(zT, kT, IT, iT, TT[WT + 3], 14, -187363961), iT = Nz(iT, zT, kT, IT, TT[WT + 8], 20, 1163531501), IT = Nz(IT, iT, zT, kT, TT[WT + 13], 5, -1444681467), kT = Nz(kT, IT, iT, zT, TT[WT + 2], 9, -51403784), zT = Nz(zT, kT, IT, iT, TT[WT + 7], 14, 1735328473), IT = Pz(IT, iT = Nz(iT, zT, kT, IT, TT[WT + 12], 20, -1926607734), zT, kT, TT[WT + 5], 4, -378558), kT = Pz(kT, IT, iT, zT, TT[WT + 8], 11, -2022574463), zT = Pz(zT, kT, IT, iT, TT[WT + 11], 16, 1839030562), iT = Pz(iT, zT, kT, IT, TT[WT + 14], 23, -35309556), IT = Pz(IT, iT, zT, kT, TT[WT + 1], 4, -1530992060), kT = Pz(kT, IT, iT, zT, TT[WT + 4], 11, 1272893353), zT = Pz(zT, kT, IT, iT, TT[WT + 7], 16, -155497632), iT = Pz(iT, zT, kT, IT, TT[WT + 10], 23, -1094730640), IT = Pz(IT, iT, zT, kT, TT[WT + 13], 4, 681279174), kT = Pz(kT, IT, iT, zT, TT[WT], 11, -358537222), zT = Pz(zT, kT, IT, iT, TT[WT + 3], 16, -722521979), iT = Pz(iT, zT, kT, IT, TT[WT + 6], 23, 76029189), IT = Pz(IT, iT, zT, kT, TT[WT + 9], 4, -640364487), kT = Pz(kT, IT, iT, zT, TT[WT + 12], 11, -421815835), zT = Pz(zT, kT, IT, iT, TT[WT + 15], 16, 530742520), IT = dz(IT, iT = Pz(iT, zT, kT, IT, TT[WT + 2], 23, -995338651), zT, kT, TT[WT], 6, -198630844), kT = dz(kT, IT, iT, zT, TT[WT + 7], 10, 1126891415), zT = dz(zT, kT, IT, iT, TT[WT + 14], 15, -1416354905), iT = dz(iT, zT, kT, IT, TT[WT + 5], 21, -57434055), IT = dz(IT, iT, zT, kT, TT[WT + 12], 6, 1700485571), kT = dz(kT, IT, iT, zT, TT[WT + 3], 10, -1894986606), zT = dz(zT, kT, IT, iT, TT[WT + 10], 15, -1051523), iT = dz(iT, zT, kT, IT, TT[WT + 1], 21, -2054922799), IT = dz(IT, iT, zT, kT, TT[WT + 8], 6, 1873313359), kT = dz(kT, IT, iT, zT, TT[WT + 15], 10, -30611744), zT = dz(zT, kT, IT, iT, TT[WT + 6], 15, -1560198380), iT = dz(iT, zT, kT, IT, TT[WT + 13], 21, 1309151649), IT = dz(IT, iT, zT, kT, TT[WT + 4], 6, -145523070), kT = dz(kT, IT, iT, zT, TT[WT + 11], 10, -1120210379), zT = dz(zT, kT, IT, iT, TT[WT + 2], 15, 718787259), iT = dz(iT, zT, kT, IT, TT[WT + 9], 21, -343485551), IT = pz(IT, XT), iT = pz(iT, BT), zT = pz(zT, FT), kT = pz(kT, ST)
        }
        return [IT, iT, zT, kT]
      }(function(TT) {
        if (0 === TT.length) return [];
        for (var oT = 8 * TT.length, IT = new Uint32Array(Gz(oT)), iT = 0; iT < oT; iT += 8) IT[iT >> 5] |= (255 & TT[iT / 8]) << iT % 32;
        return IT
      }(TT), 8 * TT.length))
    }));
    var Vz = new Uint8Array(16);

    function Tk() {
      if (!sz && !(sz = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return sz(Vz)
    }

    function Ik(TT, oT, IT) {
      var iT = (TT = TT || {}).random || (TT.rng || Tk)();
      if (iT[6] = 15 & iT[6] | 64, iT[8] = 63 & iT[8] | 128, oT) {
        IT = IT || 0;
        for (var zT = 0; zT < 16; ++zT) oT[IT + zT] = iT[zT];
        return oT
      }
      return lz(iT)
    }

    function ik(TT, oT, IT, iT) {
      switch (TT) {
        case 0:
          return oT & IT ^ ~oT & iT;
        case 1:
        case 3:
          return oT ^ IT ^ iT;
        case 2:
          return oT & IT ^ oT & iT ^ IT & iT
      }
    }

    function zk(TT, oT) {
      return TT << oT | TT >>> 32 - oT
    }
    tz("v5", 80, (function(TT) {
      var oT = [1518500249, 1859775393, 2400959708, 3395469782],
        IT = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof TT) {
        var iT = unescape(encodeURIComponent(TT));
        TT = [];
        for (var zT = 0; zT < iT.length; ++zT) TT.push(iT.charCodeAt(zT))
      } else Array.isArray(TT) || (TT = Array.prototype.slice.call(TT));
      TT.push(128);
      for (var kT = TT.length / 4 + 2, WT = Math.ceil(kT / 16), XT = new Array(WT), BT = 0; BT < WT; ++BT) {
        for (var FT = new Uint32Array(16), ST = 0; ST < 16; ++ST) FT[ST] = TT[64 * BT + 4 * ST] << 24 | TT[64 * BT + 4 * ST + 1] << 16 | TT[64 * BT + 4 * ST + 2] << 8 | TT[64 * BT + 4 * ST + 3];
        XT[BT] = FT
      }
      XT[WT - 1][14] = 8 * (TT.length - 1) / Math.pow(2, 32), XT[WT - 1][14] = Math.floor(XT[WT - 1][14]), XT[WT - 1][15] = 8 * (TT.length - 1) & 4294967295;
      for (var DT = 0; DT < WT; ++DT) {
        for (var LT = new Uint32Array(80), xT = 0; xT < 16; ++xT) LT[xT] = XT[DT][xT];
        for (var cT = 16; cT < 80; ++cT) LT[cT] = zk(LT[cT - 3] ^ LT[cT - 8] ^ LT[cT - 14] ^ LT[cT - 16], 1);
        for (var KT = IT[0], MT = IT[1], rT = IT[2], AT = IT[3], gT = IT[4], hT = 0; hT < 80; ++hT) {
          var wT = Math.floor(hT / 20),
            mT = zk(KT, 5) + ik(wT, MT, rT, AT) + gT + oT[wT] + LT[hT] >>> 0;
          gT = AT, AT = rT, rT = zk(MT, 30) >>> 0, MT = KT, KT = mT
        }
        IT[0] = IT[0] + KT >>> 0, IT[1] = IT[1] + MT >>> 0, IT[2] = IT[2] + rT >>> 0, IT[3] = IT[3] + AT >>> 0, IT[4] = IT[4] + gT >>> 0
      }
      return [IT[0] >> 24 & 255, IT[0] >> 16 & 255, IT[0] >> 8 & 255, 255 & IT[0], IT[1] >> 24 & 255, IT[1] >> 16 & 255, IT[1] >> 8 & 255, 255 & IT[1], IT[2] >> 24 & 255, IT[2] >> 16 & 255, IT[2] >> 8 & 255, 255 & IT[2], IT[3] >> 24 & 255, IT[3] >> 16 & 255, IT[3] >> 8 & 255, 255 & IT[3], IT[4] >> 24 & 255, IT[4] >> 16 & 255, IT[4] >> 8 & 255, 255 & IT[4]]
    }));
    class kk extends Error {
      constructor(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(oT), this.code = TT, this.message = oT, this.name = "Discord SDK Error"
      }
    }
    const Wk = ["log", "warn", "debug", "info", "error"];
    var Xk;
    ! function(TT) {
      TT[TT.HANDSHAKE = 0] = "HANDSHAKE", TT[TT.FRAME = 1] = "FRAME", TT[TT.CLOSE = 2] = "CLOSE", TT[TT.HELLO = 3] = "HELLO"
    }(Xk || (Xk = {}));
    const Bk = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class Fk {
      getTransfer(TT) {
        var oT;
        switch (TT.cmd) {
          case PI.SUBSCRIBE:
          case PI.UNSUBSCRIBE:
            return;
          default:
            return null !== (oT = TT.transfer) && void 0 !== oT ? oT : void 0
        }
      }
      constructor(TT, oT) {
        var IT;
        if (this.eventBus = new FT, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = TT => {
            var oT;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const IT = Ik();
            null === (oT = this.source) || void 0 === oT || oT.postMessage([Xk.FRAME, Object.assign(Object.assign({}, TT), {
              nonce: IT
            })], this.sourceOrigin, this.getTransfer(TT));
            return new Promise(((TT, oT) => {
              this.pendingCommands.set(IT, {
                resolve: TT,
                reject: oT
              })
            }))
          }, this.commands = (IT = this.sendCommand, {
            authenticate: rz(IT),
            authorize: Az(IT),
            captureLog: gz(IT),
            encourageHardwareAcceleration: hz(IT),
            getChannel: Qz(IT),
            getChannelPermissions: ez(IT),
            getEntitlements: wz(IT),
            getPlatformBehaviors: Rz(IT),
            getSkus: mz(IT),
            openExternalLink: uz(IT),
            openInviteDialog: vz(IT),
            openShareMomentDialog: Ez(IT),
            setActivity: fz(IT),
            setConfig: Cz(IT),
            setOrientationLockState: Jz(IT),
            startPurchase: Uz(IT),
            userSettingsGetLocale: az(IT),
            initiateImageUpload: Yz(IT),
            getInstanceConnectedParticipants: Oz(IT)
          }), this.handleMessage = TT => {
            if (!Bk.has(TT.origin)) return;
            const oT = TT.data;
            if (!Array.isArray(oT)) return;
            const [IT, iT] = oT;
            switch (IT) {
              case Xk.HELLO:
                return;
              case Xk.CLOSE:
                return this.handleClose(iT);
              case Xk.HANDSHAKE:
                return this.handleHandshake();
              case Xk.FRAME:
                return this.handleFrame(iT);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = TT, this.configuration = null !== oT && void 0 !== oT ? oT : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = OI.DESKTOP, this.guildId = null, void(this.channelId = null);
        const iT = new URLSearchParams(this._getSearch()),
          zT = iT.get("frame_id");
        if (!zT) throw new Error("frame_id query param is not defined");
        this.frameId = zT;
        const kT = iT.get("instance_id");
        if (!kT) throw new Error("instance_id query param is not defined");
        this.instanceId = kT;
        const WT = iT.get("platform");
        if (!WT) throw new Error("platform query param is not defined");
        if (WT !== OI.DESKTOP && WT !== OI.MOBILE) throw new Error(`Invalid query param "platform" of "${WT}". Valid values are "${OI.DESKTOP}" or "${OI.MOBILE}"`);
        this.platform = WT, this.guildId = iT.get("guild_id"), this.channelId = iT.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var TT;
          return [null !== (TT = window.parent.opener) && void 0 !== TT ? TT : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(TT, oT) {
        var IT;
        window.removeEventListener("message", this.handleMessage);
        const iT = Ik();
        null === (IT = this.source) || void 0 === IT || IT.postMessage([Xk.CLOSE, {
          code: TT,
          message: oT,
          nonce: iT
        }], this.sourceOrigin)
      }
      async subscribe(TT, oT) {
        for (var IT = arguments.length, iT = new Array(IT > 2 ? IT - 2 : 0), zT = 2; zT < IT; zT++) iT[zT - 2] = arguments[zT];
        const [kT] = iT, WT = this.eventBus.listenerCount(TT), XT = this.eventBus.on(TT, oT);
        return Object.values(Oi).includes(TT) && TT !== Oi.READY && 0 === WT && await this.sendCommand({
          cmd: PI.SUBSCRIBE,
          args: kT,
          evt: TT
        }), XT
      }
      async unsubscribe(TT, oT) {
        for (var IT = arguments.length, iT = new Array(IT > 2 ? IT - 2 : 0), zT = 2; zT < IT; zT++) iT[zT - 2] = arguments[zT];
        const [kT] = iT;
        return TT !== Oi.READY && 1 === this.eventBus.listenerCount(TT) && await this.sendCommand({
          cmd: PI.UNSUBSCRIBE,
          evt: TT,
          args: kT
        }), this.eventBus.off(TT, oT)
      }
      async ready() {
        this.isReady || await new Promise((TT => {
          this.eventBus.once(Oi.READY, TT)
        }))
      }
      handshake() {
        var TT;
        null === (TT = this.source) || void 0 === TT || TT.postMessage([Xk.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(Oi.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const TT = (TT, oT) => {
          this.commands.captureLog({
            level: TT,
            message: oT
          })
        };
        Wk.forEach((oT => {
          ! function(TT, oT, IT) {
            const iT = TT[oT],
              zT = TT;
            iT && (TT[oT] = function() {
              const TT = [].slice.call(arguments),
                kT = "" + TT.join(" ");
              IT(oT, kT), iT.apply(zT, TT)
            })
          }(console, oT, TT)
        }))
      }
      handleClose(TT) {
        Lz.parse(TT)
      }
      handleHandshake() {}
      handleFrame(TT) {
        var oT, IT;
        let iT;
        try {
          iT = cz(TT)
        } catch (zT) {
          return console.error("Failed to parse", TT), void console.error(zT)
        }
        if ("DISPATCH" === iT.cmd) this.eventBus.emit(iT.evt, iT.data);
        else {
          if (iT.evt === Qi) {
            if (null != iT.nonce) return null === (oT = this.pendingCommands.get(iT.nonce)) || void 0 === oT || oT.reject(iT.data), void this.pendingCommands.delete(iT.nonce);
            this.eventBus.emit("error", new kk(iT.data.code, iT.data.message))
          }
          if (null == iT.nonce) return void console.error("Missing nonce", TT);
          null === (IT = this.pendingCommands.get(iT.nonce)) || void 0 === IT || IT.resolve(iT), this.pendingCommands.delete(iT.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var Sk, Dk = 1e9,
      Lk = !0,
      xk = "[DecimalError] ",
      ck = xk + "Invalid argument: ",
      Kk = xk + "Exponent out of range: ",
      Mk = Math.floor,
      rk = Math.pow,
      Ak = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      gk = 1e7,
      hk = 9007199254740991,
      wk = Mk(1286742750677284.5),
      mk = {};

    function ek(TT, oT) {
      var IT, iT, zT, kT, WT, XT, BT, FT, ST = TT.constructor,
        DT = ST.precision;
      if (!TT.s || !oT.s) return oT.s || (oT = new ST(TT)), Lk ? ak(oT, DT) : oT;
      if (BT = TT.d, FT = oT.d, WT = TT.e, zT = oT.e, BT = BT.slice(), kT = WT - zT) {
        for (kT < 0 ? (iT = BT, kT = -kT, XT = FT.length) : (iT = FT, zT = WT, XT = BT.length), kT > (XT = (WT = Math.ceil(DT / 7)) > XT ? WT + 1 : XT + 1) && (kT = XT, iT.length = 1), iT.reverse(); kT--;) iT.push(0);
        iT.reverse()
      }
      for ((XT = BT.length) - (kT = FT.length) < 0 && (kT = XT, iT = FT, FT = BT, BT = iT), IT = 0; kT;) IT = (BT[--kT] = BT[kT] + FT[kT] + IT) / gk | 0, BT[kT] %= gk;
      for (IT && (BT.unshift(IT), ++zT), XT = BT.length; 0 == BT[--XT];) BT.pop();
      return oT.d = BT, oT.e = zT, Lk ? ak(oT, DT) : oT
    }

    function Rk(TT, oT, IT) {
      if (TT !== ~~TT || TT < oT || TT > IT) throw Error(ck + TT)
    }

    function uk(TT) {
      var oT, IT, iT, zT = TT.length - 1,
        kT = "",
        WT = TT[0];
      if (zT > 0) {
        for (kT += WT, oT = 1; oT < zT; oT++)(IT = 7 - (iT = TT[oT] + "").length) && (kT += jk(IT)), kT += iT;
        (IT = 7 - (iT = (WT = TT[oT]) + "").length) && (kT += jk(IT))
      } else if (0 === WT) return "0";
      for (; WT % 10 === 0;) WT /= 10;
      return kT + WT
    }
    mk.absoluteValue = mk.abs = function() {
      var TT = new this.constructor(this);
      return TT.s && (TT.s = 1), TT
    }, mk.comparedTo = mk.cmp = function(TT) {
      var oT, IT, iT, zT, kT = this;
      if (TT = new kT.constructor(TT), kT.s !== TT.s) return kT.s || -TT.s;
      if (kT.e !== TT.e) return kT.e > TT.e ^ kT.s < 0 ? 1 : -1;
      for (oT = 0, IT = (iT = kT.d.length) < (zT = TT.d.length) ? iT : zT; oT < IT; ++oT)
        if (kT.d[oT] !== TT.d[oT]) return kT.d[oT] > TT.d[oT] ^ kT.s < 0 ? 1 : -1;
      return iT === zT ? 0 : iT > zT ^ kT.s < 0 ? 1 : -1
    }, mk.decimalPlaces = mk.dp = function() {
      var TT = this,
        oT = TT.d.length - 1,
        IT = 7 * (oT - TT.e);
      if (oT = TT.d[oT])
        for (; oT % 10 == 0; oT /= 10) IT--;
      return IT < 0 ? 0 : IT
    }, mk.dividedBy = mk.div = function(TT) {
      return vk(this, new this.constructor(TT))
    }, mk.dividedToIntegerBy = mk.idiv = function(TT) {
      var oT = this.constructor;
      return ak(vk(this, new oT(TT), 0, 1), oT.precision)
    }, mk.equals = mk.eq = function(TT) {
      return !this.cmp(TT)
    }, mk.exponent = function() {
      return fk(this)
    }, mk.greaterThan = mk.gt = function(TT) {
      return this.cmp(TT) > 0
    }, mk.greaterThanOrEqualTo = mk.gte = function(TT) {
      return this.cmp(TT) >= 0
    }, mk.isInteger = mk.isint = function() {
      return this.e > this.d.length - 2
    }, mk.isNegative = mk.isneg = function() {
      return this.s < 0
    }, mk.isPositive = mk.ispos = function() {
      return this.s > 0
    }, mk.isZero = function() {
      return 0 === this.s
    }, mk.lessThan = mk.lt = function(TT) {
      return this.cmp(TT) < 0
    }, mk.lessThanOrEqualTo = mk.lte = function(TT) {
      return this.cmp(TT) < 1
    }, mk.logarithm = mk.log = function(TT) {
      var oT, IT = this,
        iT = IT.constructor,
        zT = iT.precision,
        kT = zT + 5;
      if (void 0 === TT) TT = new iT(10);
      else if ((TT = new iT(TT)).s < 1 || TT.eq(Sk)) throw Error(xk + "NaN");
      if (IT.s < 1) throw Error(xk + (IT.s ? "NaN" : "-Infinity"));
      return IT.eq(Sk) ? new iT(0) : (Lk = !1, oT = vk(Jk(IT, kT), Jk(TT, kT), kT), Lk = !0, ak(oT, zT))
    }, mk.minus = mk.sub = function(TT) {
      var oT = this;
      return TT = new oT.constructor(TT), oT.s == TT.s ? Yk(oT, TT) : ek(oT, (TT.s = -TT.s, TT))
    }, mk.modulo = mk.mod = function(TT) {
      var oT, IT = this,
        iT = IT.constructor,
        zT = iT.precision;
      if (!(TT = new iT(TT)).s) throw Error(xk + "NaN");
      return IT.s ? (Lk = !1, oT = vk(IT, TT, 0, 1).times(TT), Lk = !0, IT.minus(oT)) : ak(new iT(IT), zT)
    }, mk.naturalExponential = mk.exp = function() {
      return Ek(this)
    }, mk.naturalLogarithm = mk.ln = function() {
      return Jk(this)
    }, mk.negated = mk.neg = function() {
      var TT = new this.constructor(this);
      return TT.s = -TT.s || 0, TT
    }, mk.plus = mk.add = function(TT) {
      var oT = this;
      return TT = new oT.constructor(TT), oT.s == TT.s ? ek(oT, TT) : Yk(oT, (TT.s = -TT.s, TT))
    }, mk.precision = mk.sd = function(TT) {
      var oT, IT, iT, zT = this;
      if (void 0 !== TT && TT !== !!TT && 1 !== TT && 0 !== TT) throw Error(ck + TT);
      if (oT = fk(zT) + 1, IT = 7 * (iT = zT.d.length - 1) + 1, iT = zT.d[iT]) {
        for (; iT % 10 == 0; iT /= 10) IT--;
        for (iT = zT.d[0]; iT >= 10; iT /= 10) IT++
      }
      return TT && oT > IT ? oT : IT
    }, mk.squareRoot = mk.sqrt = function() {
      var TT, oT, IT, iT, zT, kT, WT, XT = this,
        BT = XT.constructor;
      if (XT.s < 1) {
        if (!XT.s) return new BT(0);
        throw Error(xk + "NaN")
      }
      for (TT = fk(XT), Lk = !1, 0 == (zT = Math.sqrt(+XT)) || zT == 1 / 0 ? (((oT = uk(XT.d)).length + TT) % 2 == 0 && (oT += "0"), zT = Math.sqrt(oT), TT = Mk((TT + 1) / 2) - (TT < 0 || TT % 2), iT = new BT(oT = zT == 1 / 0 ? "1e" + TT : (oT = zT.toExponential()).slice(0, oT.indexOf("e") + 1) + TT)) : iT = new BT(zT.toString()), zT = WT = (IT = BT.precision) + 3;;)
        if (iT = (kT = iT).plus(vk(XT, kT, WT + 2)).times(.5), uk(kT.d).slice(0, WT) === (oT = uk(iT.d)).slice(0, WT)) {
          if (oT = oT.slice(WT - 3, WT + 1), zT == WT && "4999" == oT) {
            if (ak(kT, IT + 1, 0), kT.times(kT).eq(XT)) {
              iT = kT;
              break
            }
          } else if ("9999" != oT) break;
          WT += 4
        } return Lk = !0, ak(iT, IT)
    }, mk.times = mk.mul = function(TT) {
      var oT, IT, iT, zT, kT, WT, XT, BT, FT, ST = this,
        DT = ST.constructor,
        LT = ST.d,
        xT = (TT = new DT(TT)).d;
      if (!ST.s || !TT.s) return new DT(0);
      for (TT.s *= ST.s, IT = ST.e + TT.e, (BT = LT.length) < (FT = xT.length) && (kT = LT, LT = xT, xT = kT, WT = BT, BT = FT, FT = WT), kT = [], iT = WT = BT + FT; iT--;) kT.push(0);
      for (iT = FT; --iT >= 0;) {
        for (oT = 0, zT = BT + iT; zT > iT;) XT = kT[zT] + xT[iT] * LT[zT - iT - 1] + oT, kT[zT--] = XT % gk | 0, oT = XT / gk | 0;
        kT[zT] = (kT[zT] + oT) % gk | 0
      }
      for (; !kT[--WT];) kT.pop();
      return oT ? ++IT : kT.shift(), TT.d = kT, TT.e = IT, Lk ? ak(TT, DT.precision) : TT
    }, mk.toDecimalPlaces = mk.todp = function(TT, oT) {
      var IT = this,
        iT = IT.constructor;
      return IT = new iT(IT), void 0 === TT ? IT : (Rk(TT, 0, Dk), void 0 === oT ? oT = iT.rounding : Rk(oT, 0, 8), ak(IT, TT + fk(IT) + 1, oT))
    }, mk.toExponential = function(TT, oT) {
      var IT, iT = this,
        zT = iT.constructor;
      return void 0 === TT ? IT = Qk(iT, !0) : (Rk(TT, 0, Dk), void 0 === oT ? oT = zT.rounding : Rk(oT, 0, 8), IT = Qk(iT = ak(new zT(iT), TT + 1, oT), !0, TT + 1)), IT
    }, mk.toFixed = function(TT, oT) {
      var IT, iT, zT = this,
        kT = zT.constructor;
      return void 0 === TT ? Qk(zT) : (Rk(TT, 0, Dk), void 0 === oT ? oT = kT.rounding : Rk(oT, 0, 8), IT = Qk((iT = ak(new kT(zT), TT + fk(zT) + 1, oT)).abs(), !1, TT + fk(iT) + 1), zT.isneg() && !zT.isZero() ? "-" + IT : IT)
    }, mk.toInteger = mk.toint = function() {
      var TT = this,
        oT = TT.constructor;
      return ak(new oT(TT), fk(TT) + 1, oT.rounding)
    }, mk.toNumber = function() {
      return +this
    }, mk.toPower = mk.pow = function(TT) {
      var oT, IT, iT, zT, kT, WT, XT = this,
        BT = XT.constructor,
        FT = +(TT = new BT(TT));
      if (!TT.s) return new BT(Sk);
      if (!(XT = new BT(XT)).s) {
        if (TT.s < 1) throw Error(xk + "Infinity");
        return XT
      }
      if (XT.eq(Sk)) return XT;
      if (iT = BT.precision, TT.eq(Sk)) return ak(XT, iT);
      if (WT = (oT = TT.e) >= (IT = TT.d.length - 1), kT = XT.s, WT) {
        if ((IT = FT < 0 ? -FT : FT) <= hk) {
          for (zT = new BT(Sk), oT = Math.ceil(iT / 7 + 4), Lk = !1; IT % 2 && Ok((zT = zT.times(XT)).d, oT), 0 !== (IT = Mk(IT / 2));) Ok((XT = XT.times(XT)).d, oT);
          return Lk = !0, TT.s < 0 ? new BT(Sk).div(zT) : ak(zT, iT)
        }
      } else if (kT < 0) throw Error(xk + "NaN");
      return kT = kT < 0 && 1 & TT.d[Math.max(oT, IT)] ? -1 : 1, XT.s = 1, Lk = !1, zT = TT.times(Jk(XT, iT + 12)), Lk = !0, (zT = Ek(zT)).s = kT, zT
    }, mk.toPrecision = function(TT, oT) {
      var IT, iT, zT = this,
        kT = zT.constructor;
      return void 0 === TT ? iT = Qk(zT, (IT = fk(zT)) <= kT.toExpNeg || IT >= kT.toExpPos) : (Rk(TT, 1, Dk), void 0 === oT ? oT = kT.rounding : Rk(oT, 0, 8), iT = Qk(zT = ak(new kT(zT), TT, oT), TT <= (IT = fk(zT)) || IT <= kT.toExpNeg, TT)), iT
    }, mk.toSignificantDigits = mk.tosd = function(TT, oT) {
      var IT = this.constructor;
      return void 0 === TT ? (TT = IT.precision, oT = IT.rounding) : (Rk(TT, 1, Dk), void 0 === oT ? oT = IT.rounding : Rk(oT, 0, 8)), ak(new IT(this), TT, oT)
    }, mk.toString = mk.valueOf = mk.val = mk.toJSON = mk[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var TT = this,
        oT = fk(TT),
        IT = TT.constructor;
      return Qk(TT, oT <= IT.toExpNeg || oT >= IT.toExpPos)
    };
    var vk = function() {
      function TT(TT, oT) {
        var IT, iT = 0,
          zT = TT.length;
        for (TT = TT.slice(); zT--;) IT = TT[zT] * oT + iT, TT[zT] = IT % gk | 0, iT = IT / gk | 0;
        return iT && TT.unshift(iT), TT
      }

      function oT(TT, oT, IT, iT) {
        var zT, kT;
        if (IT != iT) kT = IT > iT ? 1 : -1;
        else
          for (zT = kT = 0; zT < IT; zT++)
            if (TT[zT] != oT[zT]) {
              kT = TT[zT] > oT[zT] ? 1 : -1;
              break
            } return kT
      }

      function IT(TT, oT, IT) {
        for (var iT = 0; IT--;) TT[IT] -= iT, iT = TT[IT] < oT[IT] ? 1 : 0, TT[IT] = iT * gk + TT[IT] - oT[IT];
        for (; !TT[0] && TT.length > 1;) TT.shift()
      }
      return function(iT, zT, kT, WT) {
        var XT, BT, FT, ST, DT, LT, xT, cT, KT, MT, rT, AT, gT, hT, wT, mT, eT, RT, uT = iT.constructor,
          vT = iT.s == zT.s ? 1 : -1,
          ET = iT.d,
          fT = zT.d;
        if (!iT.s) return new uT(iT);
        if (!zT.s) throw Error(xk + "Division by zero");
        for (BT = iT.e - zT.e, eT = fT.length, wT = ET.length, cT = (xT = new uT(vT)).d = [], FT = 0; fT[FT] == (ET[FT] || 0);) ++FT;
        if (fT[FT] > (ET[FT] || 0) && --BT, (AT = null == kT ? kT = uT.precision : WT ? kT + (fk(iT) - fk(zT)) + 1 : kT) < 0) return new uT(0);
        if (AT = AT / 7 + 2 | 0, FT = 0, 1 == eT)
          for (ST = 0, fT = fT[0], AT++;
            (FT < wT || ST) && AT--; FT++) gT = ST * gk + (ET[FT] || 0), cT[FT] = gT / fT | 0, ST = gT % fT | 0;
        else {
          for ((ST = gk / (fT[0] + 1) | 0) > 1 && (fT = TT(fT, ST), ET = TT(ET, ST), eT = fT.length, wT = ET.length), hT = eT, MT = (KT = ET.slice(0, eT)).length; MT < eT;) KT[MT++] = 0;
          (RT = fT.slice()).unshift(0), mT = fT[0], fT[1] >= gk / 2 && ++mT;
          do {
            ST = 0, (XT = oT(fT, KT, eT, MT)) < 0 ? (rT = KT[0], eT != MT && (rT = rT * gk + (KT[1] || 0)), (ST = rT / mT | 0) > 1 ? (ST >= gk && (ST = gk - 1), 1 == (XT = oT(DT = TT(fT, ST), KT, LT = DT.length, MT = KT.length)) && (ST--, IT(DT, eT < LT ? RT : fT, LT))) : (0 == ST && (XT = ST = 1), DT = fT.slice()), (LT = DT.length) < MT && DT.unshift(0), IT(KT, DT, MT), -1 == XT && (XT = oT(fT, KT, eT, MT = KT.length)) < 1 && (ST++, IT(KT, eT < MT ? RT : fT, MT)), MT = KT.length) : 0 === XT && (ST++, KT = [0]), cT[FT++] = ST, XT && KT[0] ? KT[MT++] = ET[hT] || 0 : (KT = [ET[hT]], MT = 1)
          } while ((hT++ < wT || void 0 !== KT[0]) && AT--)
        }
        return cT[0] || cT.shift(), xT.e = BT, ak(xT, WT ? kT + fk(xT) + 1 : kT)
      }
    }();

    function Ek(TT, oT) {
      var IT, iT, zT, kT, WT, XT = 0,
        BT = 0,
        FT = TT.constructor,
        ST = FT.precision;
      if (fk(TT) > 16) throw Error(Kk + fk(TT));
      if (!TT.s) return new FT(Sk);
      for (null == oT ? (Lk = !1, WT = ST) : WT = oT, kT = new FT(.03125); TT.abs().gte(.1);) TT = TT.times(kT), BT += 5;
      for (WT += Math.log(rk(2, BT)) / Math.LN10 * 2 + 5 | 0, IT = iT = zT = new FT(Sk), FT.precision = WT;;) {
        if (iT = ak(iT.times(TT), WT), IT = IT.times(++XT), uk((kT = zT.plus(vk(iT, IT, WT))).d).slice(0, WT) === uk(zT.d).slice(0, WT)) {
          for (; BT--;) zT = ak(zT.times(zT), WT);
          return FT.precision = ST, null == oT ? (Lk = !0, ak(zT, ST)) : zT
        }
        zT = kT
      }
    }

    function fk(TT) {
      for (var oT = 7 * TT.e, IT = TT.d[0]; IT >= 10; IT /= 10) oT++;
      return oT
    }

    function Ck(TT, oT, IT) {
      if (oT > TT.LN10.sd()) throw Lk = !0, IT && (TT.precision = IT), Error(xk + "LN10 precision limit exceeded");
      return ak(new TT(TT.LN10), oT)
    }

    function jk(TT) {
      for (var oT = ""; TT--;) oT += "0";
      return oT
    }

    function Jk(TT, oT) {
      var IT, iT, zT, kT, WT, XT, BT, FT, ST, DT = 1,
        LT = TT,
        xT = LT.d,
        cT = LT.constructor,
        KT = cT.precision;
      if (LT.s < 1) throw Error(xk + (LT.s ? "NaN" : "-Infinity"));
      if (LT.eq(Sk)) return new cT(0);
      if (null == oT ? (Lk = !1, FT = KT) : FT = oT, LT.eq(10)) return null == oT && (Lk = !0), Ck(cT, FT);
      if (FT += 10, cT.precision = FT, iT = (IT = uk(xT)).charAt(0), kT = fk(LT), !(Math.abs(kT) < 15e14)) return BT = Ck(cT, FT + 2, KT).times(kT + ""), LT = Jk(new cT(iT + "." + IT.slice(1)), FT - 10).plus(BT), cT.precision = KT, null == oT ? (Lk = !0, ak(LT, KT)) : LT;
      for (; iT < 7 && 1 != iT || 1 == iT && IT.charAt(1) > 3;) iT = (IT = uk((LT = LT.times(TT)).d)).charAt(0), DT++;
      for (kT = fk(LT), iT > 1 ? (LT = new cT("0." + IT), kT++) : LT = new cT(iT + "." + IT.slice(1)), XT = WT = LT = vk(LT.minus(Sk), LT.plus(Sk), FT), ST = ak(LT.times(LT), FT), zT = 3;;) {
        if (WT = ak(WT.times(ST), FT), uk((BT = XT.plus(vk(WT, new cT(zT), FT))).d).slice(0, FT) === uk(XT.d).slice(0, FT)) return XT = XT.times(2), 0 !== kT && (XT = XT.plus(Ck(cT, FT + 2, KT).times(kT + ""))), XT = vk(XT, new cT(DT), FT), cT.precision = KT, null == oT ? (Lk = !0, ak(XT, KT)) : XT;
        XT = BT, zT += 2
      }
    }

    function Uk(TT, oT) {
      var IT, iT, zT;
      for ((IT = oT.indexOf(".")) > -1 && (oT = oT.replace(".", "")), (iT = oT.search(/e/i)) > 0 ? (IT < 0 && (IT = iT), IT += +oT.slice(iT + 1), oT = oT.substring(0, iT)) : IT < 0 && (IT = oT.length), iT = 0; 48 === oT.charCodeAt(iT);) ++iT;
      for (zT = oT.length; 48 === oT.charCodeAt(zT - 1);) --zT;
      if (oT = oT.slice(iT, zT)) {
        if (zT -= iT, IT = IT - iT - 1, TT.e = Mk(IT / 7), TT.d = [], iT = (IT + 1) % 7, IT < 0 && (iT += 7), iT < zT) {
          for (iT && TT.d.push(+oT.slice(0, iT)), zT -= 7; iT < zT;) TT.d.push(+oT.slice(iT, iT += 7));
          iT = 7 - (oT = oT.slice(iT)).length
        } else iT -= zT;
        for (; iT--;) oT += "0";
        if (TT.d.push(+oT), Lk && (TT.e > wk || TT.e < -wk)) throw Error(Kk + IT)
      } else TT.s = 0, TT.e = 0, TT.d = [0];
      return TT
    }

    function ak(TT, oT, IT) {
      var iT, zT, kT, WT, XT, BT, FT, ST, DT = TT.d;
      for (WT = 1, kT = DT[0]; kT >= 10; kT /= 10) WT++;
      if ((iT = oT - WT) < 0) iT += 7, zT = oT, FT = DT[ST = 0];
      else {
        if ((ST = Math.ceil((iT + 1) / 7)) >= (kT = DT.length)) return TT;
        for (FT = kT = DT[ST], WT = 1; kT >= 10; kT /= 10) WT++;
        zT = (iT %= 7) - 7 + WT
      }
      if (void 0 !== IT && (XT = FT / (kT = rk(10, WT - zT - 1)) % 10 | 0, BT = oT < 0 || void 0 !== DT[ST + 1] || FT % kT, BT = IT < 4 ? (XT || BT) && (0 == IT || IT == (TT.s < 0 ? 3 : 2)) : XT > 5 || 5 == XT && (4 == IT || BT || 6 == IT && (iT > 0 ? zT > 0 ? FT / rk(10, WT - zT) : 0 : DT[ST - 1]) % 10 & 1 || IT == (TT.s < 0 ? 8 : 7))), oT < 1 || !DT[0]) return BT ? (kT = fk(TT), DT.length = 1, oT = oT - kT - 1, DT[0] = rk(10, (7 - oT % 7) % 7), TT.e = Mk(-oT / 7) || 0) : (DT.length = 1, DT[0] = TT.e = TT.s = 0), TT;
      if (0 == iT ? (DT.length = ST, kT = 1, ST--) : (DT.length = ST + 1, kT = rk(10, 7 - iT), DT[ST] = zT > 0 ? (FT / rk(10, WT - zT) % rk(10, zT) | 0) * kT : 0), BT)
        for (;;) {
          if (0 == ST) {
            (DT[0] += kT) == gk && (DT[0] = 1, ++TT.e);
            break
          }
          if (DT[ST] += kT, DT[ST] != gk) break;
          DT[ST--] = 0, kT = 1
        }
      for (iT = DT.length; 0 === DT[--iT];) DT.pop();
      if (Lk && (TT.e > wk || TT.e < -wk)) throw Error(Kk + fk(TT));
      return TT
    }

    function Yk(TT, oT) {
      var IT, iT, zT, kT, WT, XT, BT, FT, ST, DT, LT = TT.constructor,
        xT = LT.precision;
      if (!TT.s || !oT.s) return oT.s ? oT.s = -oT.s : oT = new LT(TT), Lk ? ak(oT, xT) : oT;
      if (BT = TT.d, DT = oT.d, iT = oT.e, FT = TT.e, BT = BT.slice(), WT = FT - iT) {
        for ((ST = WT < 0) ? (IT = BT, WT = -WT, XT = DT.length) : (IT = DT, iT = FT, XT = BT.length), WT > (zT = Math.max(Math.ceil(xT / 7), XT) + 2) && (WT = zT, IT.length = 1), IT.reverse(), zT = WT; zT--;) IT.push(0);
        IT.reverse()
      } else {
        for ((ST = (zT = BT.length) < (XT = DT.length)) && (XT = zT), zT = 0; zT < XT; zT++)
          if (BT[zT] != DT[zT]) {
            ST = BT[zT] < DT[zT];
            break
          } WT = 0
      }
      for (ST && (IT = BT, BT = DT, DT = IT, oT.s = -oT.s), XT = BT.length, zT = DT.length - XT; zT > 0; --zT) BT[XT++] = 0;
      for (zT = DT.length; zT > WT;) {
        if (BT[--zT] < DT[zT]) {
          for (kT = zT; kT && 0 === BT[--kT];) BT[kT] = gk - 1;
          --BT[kT], BT[zT] += gk
        }
        BT[zT] -= DT[zT]
      }
      for (; 0 === BT[--XT];) BT.pop();
      for (; 0 === BT[0]; BT.shift()) --iT;
      return BT[0] ? (oT.d = BT, oT.e = iT, Lk ? ak(oT, xT) : oT) : new LT(0)
    }

    function Qk(TT, oT, IT) {
      var iT, zT = fk(TT),
        kT = uk(TT.d),
        WT = kT.length;
      return oT ? (IT && (iT = IT - WT) > 0 ? kT = kT.charAt(0) + "." + kT.slice(1) + jk(iT) : WT > 1 && (kT = kT.charAt(0) + "." + kT.slice(1)), kT = kT + (zT < 0 ? "e" : "e+") + zT) : zT < 0 ? (kT = "0." + jk(-zT - 1) + kT, IT && (iT = IT - WT) > 0 && (kT += jk(iT))) : zT >= WT ? (kT += jk(zT + 1 - WT), IT && (iT = IT - zT - 1) > 0 && (kT = kT + "." + jk(iT))) : ((iT = zT + 1) < WT && (kT = kT.slice(0, iT) + "." + kT.slice(iT)), IT && (iT = IT - WT) > 0 && (zT + 1 === WT && (kT += "."), kT += jk(iT))), TT.s < 0 ? "-" + kT : kT
    }

    function Ok(TT, oT) {
      if (TT.length > oT) return TT.length = oT, !0
    }

    function Hk(TT) {
      if (!TT || "object" !== typeof TT) throw Error(xk + "Object expected");
      var oT, IT, iT, zT = ["precision", 1, Dk, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (oT = 0; oT < zT.length; oT += 3)
        if (void 0 !== (iT = TT[IT = zT[oT]])) {
          if (!(Mk(iT) === iT && iT >= zT[oT + 1] && iT <= zT[oT + 2])) throw Error(ck + IT + ": " + iT);
          this[IT] = iT
        } if (void 0 !== (iT = TT[IT = "LN10"])) {
        if (iT != Math.LN10) throw Error(ck + IT + ": " + iT);
        this[IT] = new this(iT)
      }
      return this
    }
    var nk = function TT(oT) {
      var IT, iT, zT;

      function kT(TT) {
        var oT = this;
        if (!(oT instanceof kT)) return new kT(TT);
        if (oT.constructor = kT, TT instanceof kT) return oT.s = TT.s, oT.e = TT.e, void(oT.d = (TT = TT.d) ? TT.slice() : TT);
        if ("number" === typeof TT) {
          if (0 * TT !== 0) throw Error(ck + TT);
          if (TT > 0) oT.s = 1;
          else {
            if (!(TT < 0)) return oT.s = 0, oT.e = 0, void(oT.d = [0]);
            TT = -TT, oT.s = -1
          }
          return TT === ~~TT && TT < 1e7 ? (oT.e = 0, void(oT.d = [TT])) : Uk(oT, TT.toString())
        }
        if ("string" !== typeof TT) throw Error(ck + TT);
        if (45 === TT.charCodeAt(0) ? (TT = TT.slice(1), oT.s = -1) : oT.s = 1, !Ak.test(TT)) throw Error(ck + TT);
        Uk(oT, TT)
      }
      if (kT.prototype = mk, kT.ROUND_UP = 0, kT.ROUND_DOWN = 1, kT.ROUND_CEIL = 2, kT.ROUND_FLOOR = 3, kT.ROUND_HALF_UP = 4, kT.ROUND_HALF_DOWN = 5, kT.ROUND_HALF_EVEN = 6, kT.ROUND_HALF_CEIL = 7, kT.ROUND_HALF_FLOOR = 8, kT.clone = TT, kT.config = kT.set = Hk, void 0 === oT && (oT = {}), oT)
        for (zT = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], IT = 0; IT < zT.length;) oT.hasOwnProperty(iT = zT[IT++]) || (oT[iT] = this[iT]);
      return kT.config(oT), kT
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    Sk = new nk(1);
    var qk;
    ! function(TT) {
      TT.AED = "aed", TT.AFN = "afn", TT.ALL = "all", TT.AMD = "amd", TT.ANG = "ang", TT.AOA = "aoa", TT.ARS = "ars", TT.AUD = "aud", TT.AWG = "awg", TT.AZN = "azn", TT.BAM = "bam", TT.BBD = "bbd", TT.BDT = "bdt", TT.BGN = "bgn", TT.BHD = "bhd", TT.BIF = "bif", TT.BMD = "bmd", TT.BND = "bnd", TT.BOB = "bob", TT.BOV = "bov", TT.BRL = "brl", TT.BSD = "bsd", TT.BTN = "btn", TT.BWP = "bwp", TT.BYN = "byn", TT.BYR = "byr", TT.BZD = "bzd", TT.CAD = "cad", TT.CDF = "cdf", TT.CHE = "che", TT.CHF = "chf", TT.CHW = "chw", TT.CLF = "clf", TT.CLP = "clp", TT.CNY = "cny", TT.COP = "cop", TT.COU = "cou", TT.CRC = "crc", TT.CUC = "cuc", TT.CUP = "cup", TT.CVE = "cve", TT.CZK = "czk", TT.DJF = "djf", TT.DKK = "dkk", TT.DOP = "dop", TT.DZD = "dzd", TT.EGP = "egp", TT.ERN = "ern", TT.ETB = "etb", TT.EUR = "eur", TT.FJD = "fjd", TT.FKP = "fkp", TT.GBP = "gbp", TT.GEL = "gel", TT.GHS = "ghs", TT.GIP = "gip", TT.GMD = "gmd", TT.GNF = "gnf", TT.GTQ = "gtq", TT.GYD = "gyd", TT.HKD = "hkd", TT.HNL = "hnl", TT.HRK = "hrk", TT.HTG = "htg", TT.HUF = "huf", TT.IDR = "idr", TT.ILS = "ils", TT.INR = "inr", TT.IQD = "iqd", TT.IRR = "irr", TT.ISK = "isk", TT.JMD = "jmd", TT.JOD = "jod", TT.JPY = "jpy", TT.KES = "kes", TT.KGS = "kgs", TT.KHR = "khr", TT.KMF = "kmf", TT.KPW = "kpw", TT.KRW = "krw", TT.KWD = "kwd", TT.KYD = "kyd", TT.KZT = "kzt", TT.LAK = "lak", TT.LBP = "lbp", TT.LKR = "lkr", TT.LRD = "lrd", TT.LSL = "lsl", TT.LTL = "ltl", TT.LVL = "lvl", TT.LYD = "lyd", TT.MAD = "mad", TT.MDL = "mdl", TT.MGA = "mga", TT.MKD = "mkd", TT.MMK = "mmk", TT.MNT = "mnt", TT.MOP = "mop", TT.MRO = "mro", TT.MUR = "mur", TT.MVR = "mvr", TT.MWK = "mwk", TT.MXN = "mxn", TT.MXV = "mxv", TT.MYR = "myr", TT.MZN = "mzn", TT.NAD = "nad", TT.NGN = "ngn", TT.NIO = "nio", TT.NOK = "nok", TT.NPR = "npr", TT.NZD = "nzd", TT.OMR = "omr", TT.PAB = "pab", TT.PEN = "pen", TT.PGK = "pgk", TT.PHP = "php", TT.PKR = "pkr", TT.PLN = "pln", TT.PYG = "pyg", TT.QAR = "qar", TT.RON = "ron", TT.RSD = "rsd", TT.RUB = "rub", TT.RWF = "rwf", TT.SAR = "sar", TT.SBD = "sbd", TT.SCR = "scr", TT.SDG = "sdg", TT.SEK = "sek", TT.SGD = "sgd", TT.SHP = "shp", TT.SLL = "sll", TT.SOS = "sos", TT.SRD = "srd", TT.SSP = "ssp", TT.STD = "std", TT.SVC = "svc", TT.SYP = "syp", TT.SZL = "szl", TT.THB = "thb", TT.TJS = "tjs", TT.TMT = "tmt", TT.TND = "tnd", TT.TOP = "top", TT.TRY = "try", TT.TTD = "ttd", TT.TWD = "twd", TT.TZS = "tzs", TT.UAH = "uah", TT.UGX = "ugx", TT.USD = "usd", TT.USN = "usn", TT.USS = "uss", TT.UYI = "uyi", TT.UYU = "uyu", TT.UZS = "uzs", TT.VEF = "vef", TT.VND = "vnd", TT.VUV = "vuv", TT.WST = "wst", TT.XAF = "xaf", TT.XAG = "xag", TT.XAU = "xau", TT.XBA = "xba", TT.XBB = "xbb", TT.XBC = "xbc", TT.XBD = "xbd", TT.XCD = "xcd", TT.XDR = "xdr", TT.XFU = "xfu", TT.XOF = "xof", TT.XPD = "xpd", TT.XPF = "xpf", TT.XPT = "xpt", TT.XSU = "xsu", TT.XTS = "xts", TT.XUA = "xua", TT.YER = "yer", TT.ZAR = "zar", TT.ZMW = "zmw", TT.ZWL = "zwl"
    }(qk || (qk = {}));
    qk.AED, qk.AFN, qk.ALL, qk.AMD, qk.ANG, qk.AOA, qk.ARS, qk.AUD, qk.AWG, qk.AZN, qk.BAM, qk.BBD, qk.BDT, qk.BGN, qk.BHD, qk.BIF, qk.BMD, qk.BND, qk.BOB, qk.BOV, qk.BRL, qk.BSD, qk.BTN, qk.BWP, qk.BYR, qk.BYN, qk.BZD, qk.CAD, qk.CDF, qk.CHE, qk.CHF, qk.CHW, qk.CLF, qk.CLP, qk.CNY, qk.COP, qk.COU, qk.CRC, qk.CUC, qk.CUP, qk.CVE, qk.CZK, qk.DJF, qk.DKK, qk.DOP, qk.DZD, qk.EGP, qk.ERN, qk.ETB, qk.EUR, qk.FJD, qk.FKP, qk.GBP, qk.GEL, qk.GHS, qk.GIP, qk.GMD, qk.GNF, qk.GTQ, qk.GYD, qk.HKD, qk.HNL, qk.HRK, qk.HTG, qk.HUF, qk.IDR, qk.ILS, qk.INR, qk.IQD, qk.IRR, qk.ISK, qk.JMD, qk.JOD, qk.JPY, qk.KES, qk.KGS, qk.KHR, qk.KMF, qk.KPW, qk.KRW, qk.KWD, qk.KYD, qk.KZT, qk.LAK, qk.LBP, qk.LKR, qk.LRD, qk.LSL, qk.LTL, qk.LVL, qk.LYD, qk.MAD, qk.MDL, qk.MGA, qk.MKD, qk.MMK, qk.MNT, qk.MOP, qk.MRO, qk.MUR, qk.MVR, qk.MWK, qk.MXN, qk.MXV, qk.MYR, qk.MZN, qk.NAD, qk.NGN, qk.NIO, qk.NOK, qk.NPR, qk.NZD, qk.OMR, qk.PAB, qk.PEN, qk.PGK, qk.PHP, qk.PKR, qk.PLN, qk.PYG, qk.QAR, qk.RON, qk.RSD, qk.RUB, qk.RWF, qk.SAR, qk.SBD, qk.SCR, qk.SDG, qk.SEK, qk.SGD, qk.SHP, qk.SLL, qk.SOS, qk.SRD, qk.SSP, qk.STD, qk.SVC, qk.SYP, qk.SZL, qk.THB, qk.TJS, qk.TMT, qk.TND, qk.TOP, qk.TRY, qk.TTD, qk.TWD, qk.TZS, qk.UAH, qk.UGX, qk.USD, qk.USN, qk.USS, qk.UYI, qk.UYU, qk.UZS, qk.VEF, qk.VND, qk.VUV, qk.WST, qk.XAF, qk.XAG, qk.XAU, qk.XBA, qk.XBB, qk.XBC, qk.XBD, qk.XCD, qk.XDR, qk.XFU, qk.XOF, qk.XPD, qk.XPF, qk.XPT, qk.XSU, qk.XTS, qk.XUA, qk.YER, qk.ZAR, qk.ZMW, qk.ZWL;
    var Zk = {
      exports: {}
    };
    ! function(TT, oT) {
      var IT = "__lodash_hash_undefined__",
        iT = 9007199254740991,
        kT = "[object Arguments]",
        WT = "[object Array]",
        XT = "[object Boolean]",
        BT = "[object Date]",
        FT = "[object Error]",
        ST = "[object Function]",
        DT = "[object Map]",
        LT = "[object Number]",
        xT = "[object Object]",
        cT = "[object Promise]",
        KT = "[object RegExp]",
        MT = "[object Set]",
        rT = "[object String]",
        AT = "[object Symbol]",
        gT = "[object WeakMap]",
        hT = "[object ArrayBuffer]",
        wT = "[object DataView]",
        mT = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        eT = /^\w*$/,
        RT = /^\./,
        uT = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        vT = /\\(\\)?/g,
        ET = /^\[object .+?Constructor\]$/,
        fT = /^(?:0|[1-9]\d*)$/,
        CT = {};
      CT["[object Float32Array]"] = CT["[object Float64Array]"] = CT["[object Int8Array]"] = CT["[object Int16Array]"] = CT["[object Int32Array]"] = CT["[object Uint8Array]"] = CT["[object Uint8ClampedArray]"] = CT["[object Uint16Array]"] = CT["[object Uint32Array]"] = !0, CT[kT] = CT[WT] = CT[hT] = CT[XT] = CT[wT] = CT[BT] = CT[FT] = CT[ST] = CT[DT] = CT[LT] = CT[xT] = CT[KT] = CT[MT] = CT[rT] = CT[gT] = !1;
      var jT = "object" == typeof zT && zT && zT.Object === Object && zT,
        JT = "object" == typeof self && self && self.Object === Object && self,
        UT = jT || JT || Function("return this")(),
        aT = oT && !oT.nodeType && oT,
        YT = aT && TT && !TT.nodeType && TT,
        QT = YT && YT.exports === aT && jT.process,
        OT = function() {
          try {
            return QT && QT.binding("util")
          } catch (TT) {}
        }(),
        HT = OT && OT.isTypedArray;

      function nT(TT, oT) {
        for (var IT = -1, iT = TT ? TT.length : 0; ++IT < iT && !1 !== oT(TT[IT], IT, TT););
        return TT
      }

      function qT(TT, oT) {
        for (var IT = -1, iT = TT ? TT.length : 0; ++IT < iT;)
          if (oT(TT[IT], IT, TT)) return !0;
        return !1
      }

      function ZT(TT) {
        var oT = !1;
        if (null != TT && "function" != typeof TT.toString) try {
          oT = !!(TT + "")
        } catch (IT) {}
        return oT
      }

      function lT(TT) {
        var oT = -1,
          IT = Array(TT.size);
        return TT.forEach((function(TT, iT) {
          IT[++oT] = [iT, TT]
        })), IT
      }

      function sT(TT, oT) {
        return function(IT) {
          return TT(oT(IT))
        }
      }

      function tT(TT) {
        var oT = -1,
          IT = Array(TT.size);
        return TT.forEach((function(TT) {
          IT[++oT] = TT
        })), IT
      }
      var GT = Array.prototype,
        pT = Function.prototype,
        bT = Object.prototype,
        yT = UT["__core-js_shared__"],
        NT = function() {
          var TT = /[^.]+$/.exec(yT && yT.keys && yT.keys.IE_PROTO || "");
          return TT ? "Symbol(src)_1." + TT : ""
        }(),
        PT = pT.toString,
        dT = bT.hasOwnProperty,
        VT = bT.toString,
        To = RegExp("^" + PT.call(dT).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        oo = UT.Symbol,
        Io = UT.Uint8Array,
        io = sT(Object.getPrototypeOf, Object),
        zo = Object.create,
        ko = bT.propertyIsEnumerable,
        Wo = GT.splice,
        Xo = sT(Object.keys, Object),
        Bo = so(UT, "DataView"),
        Fo = so(UT, "Map"),
        So = so(UT, "Promise"),
        Do = so(UT, "Set"),
        Lo = so(UT, "WeakMap"),
        xo = so(Object, "create"),
        co = Vo(Bo),
        Ko = Vo(Fo),
        Mo = Vo(So),
        ro = Vo(Do),
        Ao = Vo(Lo),
        go = oo ? oo.prototype : void 0,
        ho = go ? go.valueOf : void 0,
        wo = go ? go.toString : void 0;

      function mo(TT) {
        var oT = -1,
          IT = TT ? TT.length : 0;
        for (this.clear(); ++oT < IT;) {
          var iT = TT[oT];
          this.set(iT[0], iT[1])
        }
      }

      function eo(TT) {
        var oT = -1,
          IT = TT ? TT.length : 0;
        for (this.clear(); ++oT < IT;) {
          var iT = TT[oT];
          this.set(iT[0], iT[1])
        }
      }

      function Ro(TT) {
        var oT = -1,
          IT = TT ? TT.length : 0;
        for (this.clear(); ++oT < IT;) {
          var iT = TT[oT];
          this.set(iT[0], iT[1])
        }
      }

      function uo(TT) {
        var oT = -1,
          IT = TT ? TT.length : 0;
        for (this.__data__ = new Ro; ++oT < IT;) this.add(TT[oT])
      }

      function vo(TT) {
        this.__data__ = new eo(TT)
      }

      function Eo(TT, oT) {
        var IT = iI(TT) || II(TT) ? function(TT, oT) {
            for (var IT = -1, iT = Array(TT); ++IT < TT;) iT[IT] = oT(IT);
            return iT
          }(TT.length, String) : [],
          iT = IT.length,
          zT = !!iT;
        for (var kT in TT) !oT && !dT.call(TT, kT) || zT && ("length" == kT || Go(kT, iT)) || IT.push(kT);
        return IT
      }

      function fo(TT, oT) {
        for (var IT = TT.length; IT--;)
          if (oI(TT[IT][0], oT)) return IT;
        return -1
      }
      mo.prototype.clear = function() {
        this.__data__ = xo ? xo(null) : {}
      }, mo.prototype.delete = function(TT) {
        return this.has(TT) && delete this.__data__[TT]
      }, mo.prototype.get = function(TT) {
        var oT = this.__data__;
        if (xo) {
          var iT = oT[TT];
          return iT === IT ? void 0 : iT
        }
        return dT.call(oT, TT) ? oT[TT] : void 0
      }, mo.prototype.has = function(TT) {
        var oT = this.__data__;
        return xo ? void 0 !== oT[TT] : dT.call(oT, TT)
      }, mo.prototype.set = function(TT, oT) {
        return this.__data__[TT] = xo && void 0 === oT ? IT : oT, this
      }, eo.prototype.clear = function() {
        this.__data__ = []
      }, eo.prototype.delete = function(TT) {
        var oT = this.__data__,
          IT = fo(oT, TT);
        return !(IT < 0) && (IT == oT.length - 1 ? oT.pop() : Wo.call(oT, IT, 1), !0)
      }, eo.prototype.get = function(TT) {
        var oT = this.__data__,
          IT = fo(oT, TT);
        return IT < 0 ? void 0 : oT[IT][1]
      }, eo.prototype.has = function(TT) {
        return fo(this.__data__, TT) > -1
      }, eo.prototype.set = function(TT, oT) {
        var IT = this.__data__,
          iT = fo(IT, TT);
        return iT < 0 ? IT.push([TT, oT]) : IT[iT][1] = oT, this
      }, Ro.prototype.clear = function() {
        this.__data__ = {
          hash: new mo,
          map: new(Fo || eo),
          string: new mo
        }
      }, Ro.prototype.delete = function(TT) {
        return Zo(this, TT).delete(TT)
      }, Ro.prototype.get = function(TT) {
        return Zo(this, TT).get(TT)
      }, Ro.prototype.has = function(TT) {
        return Zo(this, TT).has(TT)
      }, Ro.prototype.set = function(TT, oT) {
        return Zo(this, TT).set(TT, oT), this
      }, uo.prototype.add = uo.prototype.push = function(TT) {
        return this.__data__.set(TT, IT), this
      }, uo.prototype.has = function(TT) {
        return this.__data__.has(TT)
      }, vo.prototype.clear = function() {
        this.__data__ = new eo
      }, vo.prototype.delete = function(TT) {
        return this.__data__.delete(TT)
      }, vo.prototype.get = function(TT) {
        return this.__data__.get(TT)
      }, vo.prototype.has = function(TT) {
        return this.__data__.has(TT)
      }, vo.prototype.set = function(TT, oT) {
        var IT = this.__data__;
        if (IT instanceof eo) {
          var iT = IT.__data__;
          if (!Fo || iT.length < 199) return iT.push([TT, oT]), this;
          IT = this.__data__ = new Ro(iT)
        }
        return IT.set(TT, oT), this
      };
      var Co, jo = function(TT, oT, IT) {
        for (var iT = -1, zT = Object(TT), kT = IT(TT), WT = kT.length; WT--;) {
          var XT = kT[Co ? WT : ++iT];
          if (!1 === oT(zT[XT], XT, zT)) break
        }
        return TT
      };

      function Jo(TT, oT) {
        return TT && jo(TT, oT, LI)
      }

      function Uo(TT, oT) {
        for (var IT = 0, iT = (oT = po(oT, TT) ? [oT] : no(oT)).length; null != TT && IT < iT;) TT = TT[Po(oT[IT++])];
        return IT && IT == iT ? TT : void 0
      }

      function ao(TT, oT) {
        return null != TT && oT in Object(TT)
      }

      function Yo(TT, oT, IT, iT, zT) {
        return TT === oT || (null == TT || null == oT || !XI(TT) && !BI(oT) ? TT !== TT && oT !== oT : function(TT, oT, IT, iT, zT, ST) {
          var cT = iI(TT),
            gT = iI(oT),
            mT = WT,
            eT = WT;
          cT || (mT = (mT = to(TT)) == kT ? xT : mT);
          gT || (eT = (eT = to(oT)) == kT ? xT : eT);
          var RT = mT == xT && !ZT(TT),
            uT = eT == xT && !ZT(oT),
            vT = mT == eT;
          if (vT && !RT) return ST || (ST = new vo), cT || DI(TT) ? qo(TT, oT, IT, iT, zT, ST) : function(TT, oT, IT, iT, zT, kT, WT) {
            switch (IT) {
              case wT:
                if (TT.byteLength != oT.byteLength || TT.byteOffset != oT.byteOffset) return !1;
                TT = TT.buffer, oT = oT.buffer;
              case hT:
                return !(TT.byteLength != oT.byteLength || !iT(new Io(TT), new Io(oT)));
              case XT:
              case BT:
              case LT:
                return oI(+TT, +oT);
              case FT:
                return TT.name == oT.name && TT.message == oT.message;
              case KT:
              case rT:
                return TT == oT + "";
              case DT:
                var ST = lT;
              case MT:
                var xT = 2 & kT;
                if (ST || (ST = tT), TT.size != oT.size && !xT) return !1;
                var cT = WT.get(TT);
                if (cT) return cT == oT;
                kT |= 1, WT.set(TT, oT);
                var gT = qo(ST(TT), ST(oT), iT, zT, kT, WT);
                return WT.delete(TT), gT;
              case AT:
                if (ho) return ho.call(TT) == ho.call(oT)
            }
            return !1
          }(TT, oT, mT, IT, iT, zT, ST);
          if (!(2 & zT)) {
            var ET = RT && dT.call(TT, "__wrapped__"),
              fT = uT && dT.call(oT, "__wrapped__");
            if (ET || fT) {
              var CT = ET ? TT.value() : TT,
                jT = fT ? oT.value() : oT;
              return ST || (ST = new vo), IT(CT, jT, iT, zT, ST)
            }
          }
          if (!vT) return !1;
          return ST || (ST = new vo),
            function(TT, oT, IT, iT, zT, kT) {
              var WT = 2 & zT,
                XT = LI(TT),
                BT = XT.length,
                FT = LI(oT),
                ST = FT.length;
              if (BT != ST && !WT) return !1;
              var DT = BT;
              for (; DT--;) {
                var LT = XT[DT];
                if (!(WT ? LT in oT : dT.call(oT, LT))) return !1
              }
              var xT = kT.get(TT);
              if (xT && kT.get(oT)) return xT == oT;
              var cT = !0;
              kT.set(TT, oT), kT.set(oT, TT);
              var KT = WT;
              for (; ++DT < BT;) {
                var MT = TT[LT = XT[DT]],
                  rT = oT[LT];
                if (iT) var AT = WT ? iT(rT, MT, LT, oT, TT, kT) : iT(MT, rT, LT, TT, oT, kT);
                if (!(void 0 === AT ? MT === rT || IT(MT, rT, iT, zT, kT) : AT)) {
                  cT = !1;
                  break
                }
                KT || (KT = "constructor" == LT)
              }
              if (cT && !KT) {
                var gT = TT.constructor,
                  hT = oT.constructor;
                gT == hT || !("constructor" in TT) || !("constructor" in oT) || "function" == typeof gT && gT instanceof gT && "function" == typeof hT && hT instanceof hT || (cT = !1)
              }
              return kT.delete(TT), kT.delete(oT), cT
            }(TT, oT, IT, iT, zT, ST)
        }(TT, oT, Yo, IT, iT, zT))
      }

      function Qo(TT) {
        return !(!XI(TT) || (oT = TT, NT && NT in oT)) && (kI(TT) || ZT(TT) ? To : ET).test(Vo(TT));
        var oT
      }

      function Oo(TT) {
        return "function" == typeof TT ? TT : null == TT ? xI : "object" == typeof TT ? iI(TT) ? function(TT, oT) {
          if (po(TT) && bo(oT)) return yo(Po(TT), oT);
          return function(IT) {
            var iT = function(TT, oT, IT) {
              var iT = null == TT ? void 0 : Uo(TT, oT);
              return void 0 === iT ? IT : iT
            }(IT, TT);
            return void 0 === iT && iT === oT ? function(TT, oT) {
              return null != TT && function(TT, oT, IT) {
                oT = po(oT, TT) ? [oT] : no(oT);
                var iT, zT = -1,
                  kT = oT.length;
                for (; ++zT < kT;) {
                  var WT = Po(oT[zT]);
                  if (!(iT = null != TT && IT(TT, WT))) break;
                  TT = TT[WT]
                }
                if (iT) return iT;
                kT = TT ? TT.length : 0;
                return !!kT && WI(kT) && Go(WT, kT) && (iI(TT) || II(TT))
              }(TT, oT, ao)
            }(IT, TT) : Yo(oT, iT, void 0, 3)
          }
        }(TT[0], TT[1]) : function(TT) {
          var oT = function(TT) {
            var oT = LI(TT),
              IT = oT.length;
            for (; IT--;) {
              var iT = oT[IT],
                zT = TT[iT];
              oT[IT] = [iT, zT, bo(zT)]
            }
            return oT
          }(TT);
          if (1 == oT.length && oT[0][2]) return yo(oT[0][0], oT[0][1]);
          return function(IT) {
            return IT === TT || function(TT, oT, IT, iT) {
              var zT = IT.length,
                kT = zT,
                WT = !iT;
              if (null == TT) return !kT;
              for (TT = Object(TT); zT--;) {
                var XT = IT[zT];
                if (WT && XT[2] ? XT[1] !== TT[XT[0]] : !(XT[0] in TT)) return !1
              }
              for (; ++zT < kT;) {
                var BT = (XT = IT[zT])[0],
                  FT = TT[BT],
                  ST = XT[1];
                if (WT && XT[2]) {
                  if (void 0 === FT && !(BT in TT)) return !1
                } else {
                  var DT = new vo;
                  if (iT) var LT = iT(FT, ST, BT, TT, oT, DT);
                  if (!(void 0 === LT ? Yo(ST, FT, iT, 3, DT) : LT)) return !1
                }
              }
              return !0
            }(IT, TT, oT)
          }
        }(TT) : function(TT) {
          return po(TT) ? (oT = Po(TT), function(TT) {
            return null == TT ? void 0 : TT[oT]
          }) : function(TT) {
            return function(oT) {
              return Uo(oT, TT)
            }
          }(TT);
          var oT
        }(TT)
      }

      function Ho(TT) {
        if (! function(TT) {
            var oT = TT && TT.constructor,
              IT = "function" == typeof oT && oT.prototype || bT;
            return TT === IT
          }(TT)) return Xo(TT);
        var oT = [];
        for (var IT in Object(TT)) dT.call(TT, IT) && "constructor" != IT && oT.push(IT);
        return oT
      }

      function no(TT) {
        return iI(TT) ? TT : No(TT)
      }

      function qo(TT, oT, IT, iT, zT, kT) {
        var WT = 2 & zT,
          XT = TT.length,
          BT = oT.length;
        if (XT != BT && !(WT && BT > XT)) return !1;
        var FT = kT.get(TT);
        if (FT && kT.get(oT)) return FT == oT;
        var ST = -1,
          DT = !0,
          LT = 1 & zT ? new uo : void 0;
        for (kT.set(TT, oT), kT.set(oT, TT); ++ST < XT;) {
          var xT = TT[ST],
            cT = oT[ST];
          if (iT) var KT = WT ? iT(cT, xT, ST, oT, TT, kT) : iT(xT, cT, ST, TT, oT, kT);
          if (void 0 !== KT) {
            if (KT) continue;
            DT = !1;
            break
          }
          if (LT) {
            if (!qT(oT, (function(TT, oT) {
                if (!LT.has(oT) && (xT === TT || IT(xT, TT, iT, zT, kT))) return LT.add(oT)
              }))) {
              DT = !1;
              break
            }
          } else if (xT !== cT && !IT(xT, cT, iT, zT, kT)) {
            DT = !1;
            break
          }
        }
        return kT.delete(TT), kT.delete(oT), DT
      }

      function Zo(TT, oT) {
        var IT = TT.__data__;
        return function(TT) {
          var oT = typeof TT;
          return "string" == oT || "number" == oT || "symbol" == oT || "boolean" == oT ? "__proto__" !== TT : null === TT
        }(oT) ? IT["string" == typeof oT ? "string" : "hash"] : IT.map
      }

      function so(TT, oT) {
        var IT = function(TT, oT) {
          return null == TT ? void 0 : TT[oT]
        }(TT, oT);
        return Qo(IT) ? IT : void 0
      }
      var to = function(TT) {
        return VT.call(TT)
      };

      function Go(TT, oT) {
        return !!(oT = null == oT ? iT : oT) && ("number" == typeof TT || fT.test(TT)) && TT > -1 && TT % 1 == 0 && TT < oT
      }

      function po(TT, oT) {
        if (iI(TT)) return !1;
        var IT = typeof TT;
        return !("number" != IT && "symbol" != IT && "boolean" != IT && null != TT && !FI(TT)) || (eT.test(TT) || !mT.test(TT) || null != oT && TT in Object(oT))
      }

      function bo(TT) {
        return TT === TT && !XI(TT)
      }

      function yo(TT, oT) {
        return function(IT) {
          return null != IT && (IT[TT] === oT && (void 0 !== oT || TT in Object(IT)))
        }
      }(Bo && to(new Bo(new ArrayBuffer(1))) != wT || Fo && to(new Fo) != DT || So && to(So.resolve()) != cT || Do && to(new Do) != MT || Lo && to(new Lo) != gT) && (to = function(TT) {
        var oT = VT.call(TT),
          IT = oT == xT ? TT.constructor : void 0,
          iT = IT ? Vo(IT) : void 0;
        if (iT) switch (iT) {
          case co:
            return wT;
          case Ko:
            return DT;
          case Mo:
            return cT;
          case ro:
            return MT;
          case Ao:
            return gT
        }
        return oT
      });
      var No = TI((function(TT) {
        var oT;
        TT = null == (oT = TT) ? "" : function(TT) {
          if ("string" == typeof TT) return TT;
          if (FI(TT)) return wo ? wo.call(TT) : "";
          var oT = TT + "";
          return "0" == oT && 1 / TT == -1 / 0 ? "-0" : oT
        }(oT);
        var IT = [];
        return RT.test(TT) && IT.push(""), TT.replace(uT, (function(TT, oT, iT, zT) {
          IT.push(iT ? zT.replace(vT, "$1") : oT || TT)
        })), IT
      }));

      function Po(TT) {
        if ("string" == typeof TT || FI(TT)) return TT;
        var oT = TT + "";
        return "0" == oT && 1 / TT == -1 / 0 ? "-0" : oT
      }

      function Vo(TT) {
        if (null != TT) {
          try {
            return PT.call(TT)
          } catch (oT) {}
          try {
            return TT + ""
          } catch (oT) {}
        }
        return ""
      }

      function TI(TT, oT) {
        if ("function" != typeof TT || oT && "function" != typeof oT) throw new TypeError("Expected a function");
        var IT = function() {
          var iT = arguments,
            zT = oT ? oT.apply(this, iT) : iT[0],
            kT = IT.cache;
          if (kT.has(zT)) return kT.get(zT);
          var WT = TT.apply(this, iT);
          return IT.cache = kT.set(zT, WT), WT
        };
        return IT.cache = new(TI.Cache || Ro), IT
      }

      function oI(TT, oT) {
        return TT === oT || TT !== TT && oT !== oT
      }

      function II(TT) {
        return function(TT) {
          return BI(TT) && zI(TT)
        }(TT) && dT.call(TT, "callee") && (!ko.call(TT, "callee") || VT.call(TT) == kT)
      }
      TI.Cache = Ro;
      var iI = Array.isArray;

      function zI(TT) {
        return null != TT && WI(TT.length) && !kI(TT)
      }

      function kI(TT) {
        var oT = XI(TT) ? VT.call(TT) : "";
        return oT == ST || "[object GeneratorFunction]" == oT
      }

      function WI(TT) {
        return "number" == typeof TT && TT > -1 && TT % 1 == 0 && TT <= iT
      }

      function XI(TT) {
        var oT = typeof TT;
        return !!TT && ("object" == oT || "function" == oT)
      }

      function BI(TT) {
        return !!TT && "object" == typeof TT
      }

      function FI(TT) {
        return "symbol" == typeof TT || BI(TT) && VT.call(TT) == AT
      }
      var SI, DI = HT ? (SI = HT, function(TT) {
        return SI(TT)
      }) : function(TT) {
        return BI(TT) && WI(TT.length) && !!CT[VT.call(TT)]
      };

      function LI(TT) {
        return zI(TT) ? Eo(TT) : Ho(TT)
      }

      function xI(TT) {
        return TT
      }
      TT.exports = function(TT, oT, IT) {
        var iT, zT = iI(TT) || DI(TT);
        if (oT = Oo(oT), null == IT)
          if (zT || XI(TT)) {
            var kT = TT.constructor;
            IT = zT ? iI(TT) ? new kT : [] : kI(kT) ? XI(iT = io(TT)) ? zo(iT) : {} : {}
          } else IT = {};
        return (zT ? nT : Jo)(TT, (function(TT, iT, zT) {
          return oT(IT, TT, iT, zT)
        })), IT
      }
    }(Zk, Zk.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      n: lk
    } = iT
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);