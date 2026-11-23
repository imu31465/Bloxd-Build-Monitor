export const id = 147;
export const ids = [147];
export const modules = {
  8113: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => bb,
      g: () => lZ
    });
    var QC = {};
    ZC.r(QC), ZC.d(QC, {
      e: () => QQ,
      j: () => nQ,
      i: () => bQ,
      k: () => UZ,
      n: () => LZ,
      q: () => KQ,
      t: () => kZ,
      v: () => mQ,
      w: () => JQ,
      A: () => dQ,
      B: () => BZ,
      C: () => iQ,
      F: () => hQ,
      J: () => YQ,
      N: () => OZ,
      M: () => zQ,
      R: () => eQ,
      T: () => vQ
    });
    var wC = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function bC(CC) {
      return CC && CC.__esModule && Object.prototype.hasOwnProperty.call(CC, "default") ? CC.default : CC
    }
    var nC = {
      exports: {}
    };
    ! function(CC) {
      var zC = Object.prototype.hasOwnProperty,
        ZC = "~";

      function QC() {}

      function wC(CC, zC, ZC) {
        this.Qg = CC, this.context = zC, this.once = ZC || !1
      }

      function bC(CC, zC, QC, bC, nC) {
        if ("function" !== typeof QC) throw new TypeError("The listener must be a function");
        var fC = new wC(QC, bC || CC, nC),
          oC = ZC ? ZC + zC : zC;
        return CC._events[oC] ? CC._events[oC].Qg ? CC._events[oC] = [CC._events[oC], fC] : CC._events[oC].push(fC) : (CC._events[oC] = fC, CC._eventsCount++), CC
      }

      function nC(CC, zC) {
        0 === --CC._eventsCount ? CC._events = new QC : delete CC._events[zC]
      }

      function fC() {
        this._events = new QC, this._eventsCount = 0
      }
      Object.create && (QC.prototype = Object.create(null), (new QC).__proto__ || (ZC = !1)), fC.prototype.eventNames = function() {
        var CC, QC, wC = [];
        if (0 === this._eventsCount) return wC;
        for (QC in CC = this._events) zC.call(CC, QC) && wC.push(ZC ? QC.slice(1) : QC);
        return Object.getOwnPropertySymbols ? wC.concat(Object.getOwnPropertySymbols(CC)) : wC
      }, fC.prototype.listeners = function(CC) {
        var zC = ZC ? ZC + CC : CC,
          QC = this._events[zC];
        if (!QC) return [];
        if (QC.Qg) return [QC.Qg];
        for (var wC = 0, bC = QC.length, nC = new Array(bC); wC < bC; wC++) nC[wC] = QC[wC].Qg;
        return nC
      }, fC.prototype.listenerCount = function(CC) {
        var zC = ZC ? ZC + CC : CC,
          QC = this._events[zC];
        return QC ? QC.Qg ? 1 : QC.length : 0
      }, fC.prototype.emit = function(CC, zC, QC, wC, bC, nC) {
        var fC = ZC ? ZC + CC : CC;
        if (!this._events[fC]) return !1;
        var oC, qC, FC = this._events[fC],
          WC = arguments.length;
        if (FC.Qg) {
          switch (FC.once && this.removeListener(CC, FC.Qg, void 0, !0), WC) {
            case 1:
              return FC.Qg.call(FC.context), !0;
            case 2:
              return FC.Qg.call(FC.context, zC), !0;
            case 3:
              return FC.Qg.call(FC.context, zC, QC), !0;
            case 4:
              return FC.Qg.call(FC.context, zC, QC, wC), !0;
            case 5:
              return FC.Qg.call(FC.context, zC, QC, wC, bC), !0;
            case 6:
              return FC.Qg.call(FC.context, zC, QC, wC, bC, nC), !0
          }
          for (qC = 1, oC = new Array(WC - 1); qC < WC; qC++) oC[qC - 1] = arguments[qC];
          FC.Qg.apply(FC.context, oC)
        } else {
          var NC, MC = FC.length;
          for (qC = 0; qC < MC; qC++) switch (FC[qC].once && this.removeListener(CC, FC[qC].Qg, void 0, !0), WC) {
            case 1:
              FC[qC].Qg.call(FC[qC].context);
              break;
            case 2:
              FC[qC].Qg.call(FC[qC].context, zC);
              break;
            case 3:
              FC[qC].Qg.call(FC[qC].context, zC, QC);
              break;
            case 4:
              FC[qC].Qg.call(FC[qC].context, zC, QC, wC);
              break;
            default:
              if (!oC)
                for (NC = 1, oC = new Array(WC - 1); NC < WC; NC++) oC[NC - 1] = arguments[NC];
              FC[qC].Qg.apply(FC[qC].context, oC)
          }
        }
        return !0
      }, fC.prototype.on = function(CC, zC, ZC) {
        return bC(this, CC, zC, ZC, !1)
      }, fC.prototype.once = function(CC, zC, ZC) {
        return bC(this, CC, zC, ZC, !0)
      }, fC.prototype.removeListener = function(CC, zC, QC, wC) {
        var bC = ZC ? ZC + CC : CC;
        if (!this._events[bC]) return this;
        if (!zC) return nC(this, bC), this;
        var fC = this._events[bC];
        if (fC.Qg) fC.Qg !== zC || wC && !fC.once || QC && fC.context !== QC || nC(this, bC);
        else {
          for (var oC = 0, qC = [], FC = fC.length; oC < FC; oC++)(fC[oC].Qg !== zC || wC && !fC[oC].once || QC && fC[oC].context !== QC) && qC.push(fC[oC]);
          qC.length ? this._events[bC] = 1 === qC.length ? qC[0] : qC : nC(this, bC)
        }
        return this
      }, fC.prototype.xG = function(CC) {
        var zC;
        return CC ? (zC = ZC ? ZC + CC : CC, this._events[zC] && nC(this, zC)) : (this._events = new QC, this._eventsCount = 0), this
      }, fC.prototype.off = fC.prototype.removeListener, fC.prototype.addListener = fC.prototype.on, fC.prefixed = ZC, fC.EventEmitter = fC, CC.exports = fC
    }(nC);
    var fC, oC, qC = bC(nC.exports);
    ! function(CC) {
      CC.assertEqual = CC => CC, CC.assertIs = function(CC) {}, CC.assertNever = function(CC) {
        throw new Error
      }, CC.arrayToEnum = CC => {
        const zC = {};
        for (const ZC of CC) zC[ZC] = ZC;
        return zC
      }, CC.getValidEnumValues = zC => {
        const ZC = CC.objectKeys(zC).filter((CC => "number" !== typeof zC[zC[CC]])),
          QC = {};
        for (const CC of ZC) QC[CC] = zC[CC];
        return CC.objectValues(QC)
      }, CC.objectValues = zC => CC.objectKeys(zC).map((function(CC) {
        return zC[CC]
      })), CC.objectKeys = "function" === typeof Object.keys ? CC => Object.keys(CC) : CC => {
        const zC = [];
        for (const ZC in CC) Object.prototype.hasOwnProperty.call(CC, ZC) && zC.push(ZC);
        return zC
      }, CC.find = (CC, zC) => {
        for (const ZC of CC)
          if (zC(ZC)) return ZC
      }, CC.isInteger = "function" === typeof Number.isInteger ? CC => Number.isInteger(CC) : CC => "number" === typeof CC && isFinite(CC) && Math.floor(CC) === CC, CC.joinValues = function(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return CC.map((CC => "string" === typeof CC ? `'${CC}'` : CC)).join(zC)
      }, CC.jsonStringifyReplacer = (CC, zC) => "bigint" === typeof zC ? zC.toString() : zC
    }(fC || (fC = {})),
    function(CC) {
      CC.mergeShapes = (CC, zC) => ({
        ...CC,
        ...zC
      })
    }(oC || (oC = {}));
    const FC = fC.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      WC = CC => {
        switch (typeof CC) {
          case "undefined":
            return FC.undefined;
          case "string":
            return FC.string;
          case "number":
            return isNaN(CC) ? FC.nan : FC.number;
          case "boolean":
            return FC.boolean;
          case "function":
            return FC.function;
          case "bigint":
            return FC.bigint;
          case "symbol":
            return FC.symbol;
          case "object":
            return Array.isArray(CC) ? FC.array : null === CC ? FC.null : CC.then && "function" === typeof CC.then && CC.catch && "function" === typeof CC.catch ? FC.promise : "undefined" !== typeof Map && CC instanceof Map ? FC.map : "undefined" !== typeof Set && CC instanceof Set ? FC.set : "undefined" !== typeof Date && CC instanceof Date ? FC.date : FC.object;
          default:
            return FC.unknown
        }
      },
      NC = fC.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class MC extends Error {
      constructor(CC) {
        var zC;
        super(), zC = this, this.issues = [], this.addIssue = CC => {
          this.issues = [...this.issues, CC]
        }, this.addIssues = function() {
          let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          zC.issues = [...zC.issues, ...CC]
        };
        const ZC = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, ZC) : this.__proto__ = ZC, this.name = "ZodError", this.issues = CC
      }
      get errors() {
        return this.issues
      }
      format(CC) {
        const zC = CC || function(CC) {
            return CC.message
          },
          ZC = {
            _errors: []
          },
          QC = CC => {
            for (const wC of CC.issues)
              if ("invalid_union" === wC.code) wC.unionErrors.map(QC);
              else if ("invalid_return_type" === wC.code) QC(wC.returnTypeError);
            else if ("invalid_arguments" === wC.code) QC(wC.argumentsError);
            else if (0 === wC.path.length) ZC._errors.push(zC(wC));
            else {
              let CC = ZC,
                QC = 0;
              for (; QC < wC.path.length;) {
                const ZC = wC.path[QC];
                QC === wC.path.length - 1 ? (CC[ZC] = CC[ZC] || {
                  _errors: []
                }, CC[ZC]._errors.push(zC(wC))) : CC[ZC] = CC[ZC] || {
                  _errors: []
                }, CC = CC[ZC], QC++
              }
            }
          };
        return QC(this), ZC
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, fC.jsonStringifyReplacer, 2)
      }
      get fg() {
        return 0 === this.issues.length
      }
      flatten() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : CC => CC.message;
        const zC = {},
          ZC = [];
        for (const QC of this.issues) QC.path.length > 0 ? (zC[QC.path[0]] = zC[QC.path[0]] || [], zC[QC.path[0]].push(CC(QC))) : ZC.push(CC(QC));
        return {
          formErrors: ZC,
          fieldErrors: zC
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    MC.create = CC => new MC(CC);
    const gC = (CC, zC) => {
      let ZC;
      switch (CC.code) {
        case NC.invalid_type:
          ZC = CC.received === FC.undefined ? "Required" : `Expected ${CC.expected}, received ${CC.received}`;
          break;
        case NC.invalid_literal:
          ZC = `Invalid literal value, expected ${JSON.stringify(CC.expected,fC.jsonStringifyReplacer)}`;
          break;
        case NC.unrecognized_keys:
          ZC = `Unrecognized key(s) in object: ${fC.joinValues(CC.keys,", ")}`;
          break;
        case NC.invalid_union:
          ZC = "Invalid input";
          break;
        case NC.invalid_union_discriminator:
          ZC = `Invalid discriminator value. Expected ${fC.joinValues(CC.options)}`;
          break;
        case NC.invalid_enum_value:
          ZC = `Invalid enum value. Expected ${fC.joinValues(CC.options)}, received '${CC.received}'`;
          break;
        case NC.invalid_arguments:
          ZC = "Invalid function arguments";
          break;
        case NC.invalid_return_type:
          ZC = "Invalid function return type";
          break;
        case NC.invalid_date:
          ZC = "Invalid date";
          break;
        case NC.invalid_string:
          "object" === typeof CC.validation ? "includes" in CC.validation ? (ZC = `Invalid input: must include "${CC.validation.includes}"`, "number" === typeof CC.validation.position && (ZC = `${ZC} at one or more positions greater than or equal to ${CC.validation.position}`)) : "startsWith" in CC.validation ? ZC = `Invalid input: must start with "${CC.validation.startsWith}"` : "endsWith" in CC.validation ? ZC = `Invalid input: must end with "${CC.validation.endsWith}"` : fC.assertNever(CC.validation) : ZC = "regex" !== CC.validation ? `Invalid ${CC.validation}` : "Invalid";
          break;
        case NC.too_small:
          ZC = "array" === CC.type ? `Array must contain ${CC.exact?"exactly":CC.inclusive?"at least":"more than"} ${CC.minimum} element(s)` : "string" === CC.type ? `String must contain ${CC.exact?"exactly":CC.inclusive?"at least":"over"} ${CC.minimum} character(s)` : "number" === CC.type ? `Number must be ${CC.exact?"exactly equal to ":CC.inclusive?"greater than or equal to ":"greater than "}${CC.minimum}` : "date" === CC.type ? `Date must be ${CC.exact?"exactly equal to ":CC.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(CC.minimum))}` : "Invalid input";
          break;
        case NC.too_big:
          ZC = "array" === CC.type ? `Array must contain ${CC.exact?"exactly":CC.inclusive?"at most":"less than"} ${CC.maximum} element(s)` : "string" === CC.type ? `String must contain ${CC.exact?"exactly":CC.inclusive?"at most":"under"} ${CC.maximum} character(s)` : "number" === CC.type ? `Number must be ${CC.exact?"exactly":CC.inclusive?"less than or equal to":"less than"} ${CC.maximum}` : "bigint" === CC.type ? `BigInt must be ${CC.exact?"exactly":CC.inclusive?"less than or equal to":"less than"} ${CC.maximum}` : "date" === CC.type ? `Date must be ${CC.exact?"exactly":CC.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(CC.maximum))}` : "Invalid input";
          break;
        case NC.custom:
          ZC = "Invalid input";
          break;
        case NC.invalid_intersection_types:
          ZC = "Intersection results could not be merged";
          break;
        case NC.not_multiple_of:
          ZC = `Number must be a multiple of ${CC.multipleOf}`;
          break;
        case NC.not_finite:
          ZC = "Number must be finite";
          break;
        default:
          ZC = zC.defaultError, fC.assertNever(CC)
      }
      return {
        message: ZC
      }
    };
    let SC = gC;

    function pC() {
      return SC
    }
    const PC = CC => {
      const {
        data: zC,
        path: ZC,
        errorMaps: QC,
        issueData: wC
      } = CC, bC = [...ZC, ...wC.path || []], nC = {
        ...wC,
        path: bC
      };
      let fC = "";
      const oC = QC.filter((CC => !!CC)).slice().reverse();
      for (const qC of oC) fC = qC(nC, {
        data: zC,
        defaultError: fC
      }).message;
      return {
        ...wC,
        path: bC,
        message: wC.message || fC
      }
    };

    function GC(CC, zC) {
      const ZC = PC({
        issueData: zC,
        data: CC.data,
        path: CC.path,
        errorMaps: [CC.common.contextualErrorMap, CC.schemaErrorMap, pC(), gC].filter((CC => !!CC))
      });
      CC.common.issues.push(ZC)
    }
    class RC {
      constructor() {
        this.value = "valid"
      }
      rg() {
        "valid" === this.value && (this.value = "rg")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(CC, zC) {
        const ZC = [];
        for (const QC of zC) {
          if ("aborted" === QC.status) return AC;
          "rg" === QC.status && CC.rg(), ZC.push(QC.value)
        }
        return {
          status: CC.value,
          value: ZC
        }
      }
      static async mergeObjectAsync(CC, zC) {
        const ZC = [];
        for (const QC of zC) ZC.push({
          key: await QC.key,
          value: await QC.value
        });
        return RC.mergeObjectSync(CC, ZC)
      }
      static mergeObjectSync(CC, zC) {
        const ZC = {};
        for (const QC of zC) {
          const {
            key: zC,
            value: wC
          } = QC;
          if ("aborted" === zC.status) return AC;
          if ("aborted" === wC.status) return AC;
          "rg" === zC.status && CC.rg(), "rg" === wC.status && CC.rg(), "__proto__" === zC.value || "undefined" === typeof wC.value && !QC.alwaysSet || (ZC[zC.value] = wC.value)
        }
        return {
          status: CC.value,
          value: ZC
        }
      }
    }
    const AC = Object.freeze({
        status: "aborted"
      }),
      xC = CC => ({
        status: "rg",
        value: CC
      }),
      JC = CC => ({
        status: "valid",
        value: CC
      }),
      IC = CC => "aborted" === CC.status,
      iC = CC => "rg" === CC.status,
      vC = CC => "valid" === CC.status,
      eC = CC => "undefined" !== typeof Promise && CC instanceof Promise;
    var hC;
    ! function(CC) {
      CC.errToObj = CC => "string" === typeof CC ? {
        message: CC
      } : CC || {}, CC.toString = CC => "string" === typeof CC ? CC : null === CC || void 0 === CC ? void 0 : CC.message
    }(hC || (hC = {}));
    class KC {
      constructor(CC, zC, ZC, QC) {
        this._cachedPath = [], this.parent = CC, this.data = zC, this._path = ZC, this._key = QC
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const YC = (CC, zC) => {
      if (vC(zC)) return {
        success: !0,
        data: zC.value
      };
      if (!CC.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const zC = new MC(CC.common.issues);
          return this._error = zC, this._error
        }
      }
    };

    function dC(CC) {
      if (!CC) return {};
      const {
        errorMap: zC,
        invalid_type_error: ZC,
        required_error: QC,
        description: wC
      } = CC;
      if (zC && (ZC || QC)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (zC) return {
        errorMap: zC,
        description: wC
      };
      return {
        errorMap: (CC, zC) => "invalid_type" !== CC.code ? {
          message: zC.defaultError
        } : "undefined" === typeof zC.data ? {
          message: null !== QC && void 0 !== QC ? QC : zC.defaultError
        } : {
          message: null !== ZC && void 0 !== ZC ? ZC : zC.defaultError
        },
        description: wC
      }
    }
    class mC {
      constructor(CC) {
        this.spa = this.safeParseAsync, this._def = CC, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(CC) {
        return WC(CC.data)
      }
      _getOrReturnCtx(CC, zC) {
        return zC || {
          common: CC.parent.common,
          data: CC.data,
          parsedType: WC(CC.data),
          schemaErrorMap: this._def.errorMap,
          path: CC.path,
          parent: CC.parent
        }
      }
      _processInputParams(CC) {
        return {
          status: new RC,
          ctx: {
            common: CC.parent.common,
            data: CC.data,
            parsedType: WC(CC.data),
            schemaErrorMap: this._def.errorMap,
            path: CC.path,
            parent: CC.parent
          }
        }
      }
      _parseSync(CC) {
        const zC = this._parse(CC);
        if (eC(zC)) throw new Error("Synchronous parse encountered promise.");
        return zC
      }
      _parseAsync(CC) {
        const zC = this._parse(CC);
        return Promise.resolve(zC)
      }
      parse(CC, zC) {
        const ZC = this.safeParse(CC, zC);
        if (ZC.success) return ZC.data;
        throw ZC.error
      }
      safeParse(CC, zC) {
        var ZC;
        const QC = {
            common: {
              issues: [],
              async: null !== (ZC = null === zC || void 0 === zC ? void 0 : zC.async) && void 0 !== ZC && ZC,
              contextualErrorMap: null === zC || void 0 === zC ? void 0 : zC.errorMap
            },
            path: (null === zC || void 0 === zC ? void 0 : zC.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: CC,
            parsedType: WC(CC)
          },
          wC = this._parseSync({
            data: CC,
            path: QC.path,
            parent: QC
          });
        return YC(QC, wC)
      }
      async parseAsync(CC, zC) {
        const ZC = await this.safeParseAsync(CC, zC);
        if (ZC.success) return ZC.data;
        throw ZC.error
      }
      async safeParseAsync(CC, zC) {
        const ZC = {
            common: {
              issues: [],
              contextualErrorMap: null === zC || void 0 === zC ? void 0 : zC.errorMap,
              async: !0
            },
            path: (null === zC || void 0 === zC ? void 0 : zC.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: CC,
            parsedType: WC(CC)
          },
          QC = this._parse({
            data: CC,
            path: ZC.path,
            parent: ZC
          }),
          wC = await (eC(QC) ? QC : Promise.resolve(QC));
        return YC(ZC, wC)
      }
      refine(CC, zC) {
        const ZC = CC => "string" === typeof zC || "undefined" === typeof zC ? {
          message: zC
        } : "function" === typeof zC ? zC(CC) : zC;
        return this._refinement(((zC, QC) => {
          const wC = CC(zC),
            bC = () => QC.addIssue({
              code: NC.custom,
              ...ZC(zC)
            });
          return "undefined" !== typeof Promise && wC instanceof Promise ? wC.then((CC => !!CC || (bC(), !1))) : !!wC || (bC(), !1)
        }))
      }
      refinement(CC, zC) {
        return this._refinement(((ZC, QC) => !!CC(ZC) || (QC.addIssue("function" === typeof zC ? zC(ZC, QC) : zC), !1)))
      }
      _refinement(CC) {
        return new Az({
          schema: this,
          typeName: Hz.ZodEffects,
          effect: {
            type: "refinement",
            refinement: CC
          }
        })
      }
      superRefine(CC) {
        return this._refinement(CC)
      }
      optional() {
        return xz.create(this, this._def)
      }
      nullable() {
        return Jz.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return zz.create(this, this._def)
      }
      promise() {
        return Rz.create(this, this._def)
      }
      or(CC) {
        return wz.create([this, CC], this._def)
      }
      and(CC) {
        return oz.create(this, CC, this._def)
      }
      transform(CC) {
        return new Az({
          ...dC(this._def),
          schema: this,
          typeName: Hz.ZodEffects,
          effect: {
            type: "transform",
            transform: CC
          }
        })
      }
      default (CC) {
        const zC = "function" === typeof CC ? CC : () => CC;
        return new Iz({
          ...dC(this._def),
          innerType: this,
          defaultValue: zC,
          typeName: Hz.ZodDefault
        })
      }
      brand() {
        return new hz({
          typeName: Hz.ZodBranded,
          type: this,
          ...dC(this._def)
        })
      } catch (CC) {
        const zC = "function" === typeof CC ? CC : () => CC;
        return new iz({
          ...dC(this._def),
          innerType: this,
          catchValue: zC,
          typeName: Hz.ZodCatch
        })
      }
      describe(CC) {
        return new(0, this.constructor)({
          ...this._def,
          description: CC
        })
      }
      pipe(CC) {
        return Kz.create(this, CC)
      }
      readonly() {
        return Yz.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const HC = /^c[^\s-]{8,}$/i,
      EC = /^[a-z][a-z0-9]*$/,
      lC = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      XC = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      cC = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let uC;
    const rC = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      sC = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class TC extends mC {
      _parse(CC) {
        this._def.coerce && (CC.data = String(CC.data));
        if (this._getType(CC) !== FC.string) {
          const zC = this._getOrReturnCtx(CC);
          return GC(zC, {
            code: NC.invalid_type,
            expected: FC.string,
            received: zC.parsedType
          }), AC
        }
        const zC = new RC;
        let ZC;
        for (const oC of this._def.checks)
          if ("min" === oC.kind) CC.data.length < oC.value && (ZC = this._getOrReturnCtx(CC, ZC), GC(ZC, {
            code: NC.too_small,
            minimum: oC.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: oC.message
          }), zC.rg());
          else if ("max" === oC.kind) CC.data.length > oC.value && (ZC = this._getOrReturnCtx(CC, ZC), GC(ZC, {
          code: NC.too_big,
          maximum: oC.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: oC.message
        }), zC.rg());
        else if ("length" === oC.kind) {
          const QC = CC.data.length > oC.value,
            wC = CC.data.length < oC.value;
          (QC || wC) && (ZC = this._getOrReturnCtx(CC, ZC), QC ? GC(ZC, {
            code: NC.too_big,
            maximum: oC.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: oC.message
          }) : wC && GC(ZC, {
            code: NC.too_small,
            minimum: oC.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: oC.message
          }), zC.rg())
        } else if ("email" === oC.kind) cC.test(CC.data) || (ZC = this._getOrReturnCtx(CC, ZC), GC(ZC, {
          validation: "email",
          code: NC.invalid_string,
          message: oC.message
        }), zC.rg());
        else if ("emoji" === oC.kind) uC || (uC = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), uC.test(CC.data) || (ZC = this._getOrReturnCtx(CC, ZC), GC(ZC, {
          validation: "emoji",
          code: NC.invalid_string,
          message: oC.message
        }), zC.rg());
        else if ("uuid" === oC.kind) XC.test(CC.data) || (ZC = this._getOrReturnCtx(CC, ZC), GC(ZC, {
          validation: "uuid",
          code: NC.invalid_string,
          message: oC.message
        }), zC.rg());
        else if ("cuid" === oC.kind) HC.test(CC.data) || (ZC = this._getOrReturnCtx(CC, ZC), GC(ZC, {
          validation: "cuid",
          code: NC.invalid_string,
          message: oC.message
        }), zC.rg());
        else if ("cuid2" === oC.kind) EC.test(CC.data) || (ZC = this._getOrReturnCtx(CC, ZC), GC(ZC, {
          validation: "cuid2",
          code: NC.invalid_string,
          message: oC.message
        }), zC.rg());
        else if ("ulid" === oC.kind) lC.test(CC.data) || (ZC = this._getOrReturnCtx(CC, ZC), GC(ZC, {
          validation: "ulid",
          code: NC.invalid_string,
          message: oC.message
        }), zC.rg());
        else if ("url" === oC.kind) try {
          new URL(CC.data)
        } catch (nC) {
          ZC = this._getOrReturnCtx(CC, ZC), GC(ZC, {
            validation: "url",
            code: NC.invalid_string,
            message: oC.message
          }), zC.rg()
        } else if ("regex" === oC.kind) {
          oC.regex.lastIndex = 0;
          oC.regex.test(CC.data) || (ZC = this._getOrReturnCtx(CC, ZC), GC(ZC, {
            validation: "regex",
            code: NC.invalid_string,
            message: oC.message
          }), zC.rg())
        } else if ("trim" === oC.kind) CC.data = CC.data.trim();
        else if ("includes" === oC.kind) CC.data.includes(oC.value, oC.position) || (ZC = this._getOrReturnCtx(CC, ZC), GC(ZC, {
          code: NC.invalid_string,
          validation: {
            includes: oC.value,
            position: oC.position
          },
          message: oC.message
        }), zC.rg());
        else if ("toLowerCase" === oC.kind) CC.data = CC.data.toLowerCase();
        else if ("toUpperCase" === oC.kind) CC.data = CC.data.toUpperCase();
        else if ("startsWith" === oC.kind) CC.data.startsWith(oC.value) || (ZC = this._getOrReturnCtx(CC, ZC), GC(ZC, {
          code: NC.invalid_string,
          validation: {
            startsWith: oC.value
          },
          message: oC.message
        }), zC.rg());
        else if ("endsWith" === oC.kind) CC.data.endsWith(oC.value) || (ZC = this._getOrReturnCtx(CC, ZC), GC(ZC, {
          code: NC.invalid_string,
          validation: {
            endsWith: oC.value
          },
          message: oC.message
        }), zC.rg());
        else if ("datetime" === oC.kind) {
          ((bC = oC).precision ? bC.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${bC.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${bC.precision}}Z$`) : 0 === bC.precision ? bC.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : bC.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(CC.data) || (ZC = this._getOrReturnCtx(CC, ZC), GC(ZC, {
            code: NC.invalid_string,
            validation: "datetime",
            message: oC.message
          }), zC.rg())
        } else "ip" === oC.kind ? (QC = CC.data, ("v4" !== (wC = oC.version) && wC || !rC.test(QC)) && ("v6" !== wC && wC || !sC.test(QC)) && (ZC = this._getOrReturnCtx(CC, ZC), GC(ZC, {
          validation: "ip",
          code: NC.invalid_string,
          message: oC.message
        }), zC.rg())) : fC.assertNever(oC);
        var QC, wC, bC;
        return {
          status: zC.value,
          value: CC.data
        }
      }
      _regex(CC, zC, ZC) {
        return this.refinement((zC => CC.test(zC)), {
          validation: zC,
          code: NC.invalid_string,
          ...hC.errToObj(ZC)
        })
      }
      _addCheck(CC) {
        return new TC({
          ...this._def,
          checks: [...this._def.checks, CC]
        })
      }
      email(CC) {
        return this._addCheck({
          kind: "email",
          ...hC.errToObj(CC)
        })
      }
      url(CC) {
        return this._addCheck({
          kind: "url",
          ...hC.errToObj(CC)
        })
      }
      emoji(CC) {
        return this._addCheck({
          kind: "emoji",
          ...hC.errToObj(CC)
        })
      }
      uuid(CC) {
        return this._addCheck({
          kind: "uuid",
          ...hC.errToObj(CC)
        })
      }
      cuid(CC) {
        return this._addCheck({
          kind: "cuid",
          ...hC.errToObj(CC)
        })
      }
      cuid2(CC) {
        return this._addCheck({
          kind: "cuid2",
          ...hC.errToObj(CC)
        })
      }
      ulid(CC) {
        return this._addCheck({
          kind: "ulid",
          ...hC.errToObj(CC)
        })
      }
      ip(CC) {
        return this._addCheck({
          kind: "ip",
          ...hC.errToObj(CC)
        })
      }
      datetime(CC) {
        var zC;
        return "string" === typeof CC ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: CC
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === CC || void 0 === CC ? void 0 : CC.precision) ? null : null === CC || void 0 === CC ? void 0 : CC.precision,
          offset: null !== (zC = null === CC || void 0 === CC ? void 0 : CC.offset) && void 0 !== zC && zC,
          ...hC.errToObj(null === CC || void 0 === CC ? void 0 : CC.message)
        })
      }
      regex(CC, zC) {
        return this._addCheck({
          kind: "regex",
          regex: CC,
          ...hC.errToObj(zC)
        })
      }
      includes(CC, zC) {
        return this._addCheck({
          kind: "includes",
          value: CC,
          position: null === zC || void 0 === zC ? void 0 : zC.position,
          ...hC.errToObj(null === zC || void 0 === zC ? void 0 : zC.message)
        })
      }
      startsWith(CC, zC) {
        return this._addCheck({
          kind: "startsWith",
          value: CC,
          ...hC.errToObj(zC)
        })
      }
      endsWith(CC, zC) {
        return this._addCheck({
          kind: "endsWith",
          value: CC,
          ...hC.errToObj(zC)
        })
      }
      min(CC, zC) {
        return this._addCheck({
          kind: "min",
          value: CC,
          ...hC.errToObj(zC)
        })
      }
      max(CC, zC) {
        return this._addCheck({
          kind: "max",
          value: CC,
          ...hC.errToObj(zC)
        })
      }
      length(CC, zC) {
        return this._addCheck({
          kind: "length",
          value: CC,
          ...hC.errToObj(zC)
        })
      }
      nonempty(CC) {
        return this.min(1, hC.errToObj(CC))
      }
      trim() {
        return new TC({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new TC({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new TC({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((CC => "datetime" === CC.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((CC => "email" === CC.kind))
      }
      get isURL() {
        return !!this._def.checks.find((CC => "url" === CC.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((CC => "emoji" === CC.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((CC => "uuid" === CC.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((CC => "cuid" === CC.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((CC => "cuid2" === CC.kind))
      }
      get isULID() {
        return !!this._def.checks.find((CC => "ulid" === CC.kind))
      }
      get isIP() {
        return !!this._def.checks.find((CC => "ip" === CC.kind))
      }
      get minLength() {
        let CC = null;
        for (const zC of this._def.checks) "min" === zC.kind && (null === CC || zC.value > CC) && (CC = zC.value);
        return CC
      }
      get maxLength() {
        let CC = null;
        for (const zC of this._def.checks) "max" === zC.kind && (null === CC || zC.value < CC) && (CC = zC.value);
        return CC
      }
    }

    function aC(CC, zC) {
      const ZC = (CC.toString().split(".")[1] || "").length,
        QC = (zC.toString().split(".")[1] || "").length,
        wC = ZC > QC ? ZC : QC;
      return parseInt(CC.toFixed(wC).replace(".", "")) % parseInt(zC.toFixed(wC).replace(".", "")) / Math.pow(10, wC)
    }
    TC.create = CC => {
      var zC;
      return new TC({
        checks: [],
        typeName: Hz.ZodString,
        coerce: null !== (zC = null === CC || void 0 === CC ? void 0 : CC.coerce) && void 0 !== zC && zC,
        ...dC(CC)
      })
    };
    class tC extends mC {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(CC) {
        this._def.coerce && (CC.data = Number(CC.data));
        if (this._getType(CC) !== FC.number) {
          const zC = this._getOrReturnCtx(CC);
          return GC(zC, {
            code: NC.invalid_type,
            expected: FC.number,
            received: zC.parsedType
          }), AC
        }
        let zC;
        const ZC = new RC;
        for (const QC of this._def.checks)
          if ("int" === QC.kind) fC.isInteger(CC.data) || (zC = this._getOrReturnCtx(CC, zC), GC(zC, {
            code: NC.invalid_type,
            expected: "integer",
            received: "float",
            message: QC.message
          }), ZC.rg());
          else if ("min" === QC.kind) {
          (QC.inclusive ? CC.data < QC.value : CC.data <= QC.value) && (zC = this._getOrReturnCtx(CC, zC), GC(zC, {
            code: NC.too_small,
            minimum: QC.value,
            type: "number",
            inclusive: QC.inclusive,
            exact: !1,
            message: QC.message
          }), ZC.rg())
        } else if ("max" === QC.kind) {
          (QC.inclusive ? CC.data > QC.value : CC.data >= QC.value) && (zC = this._getOrReturnCtx(CC, zC), GC(zC, {
            code: NC.too_big,
            maximum: QC.value,
            type: "number",
            inclusive: QC.inclusive,
            exact: !1,
            message: QC.message
          }), ZC.rg())
        } else "multipleOf" === QC.kind ? 0 !== aC(CC.data, QC.value) && (zC = this._getOrReturnCtx(CC, zC), GC(zC, {
          code: NC.not_multiple_of,
          multipleOf: QC.value,
          message: QC.message
        }), ZC.rg()) : "finite" === QC.kind ? Number.isFinite(CC.data) || (zC = this._getOrReturnCtx(CC, zC), GC(zC, {
          code: NC.not_finite,
          message: QC.message
        }), ZC.rg()) : fC.assertNever(QC);
        return {
          status: ZC.value,
          value: CC.data
        }
      }
      gte(CC, zC) {
        return this.setLimit("min", CC, !0, hC.toString(zC))
      }
      gt(CC, zC) {
        return this.setLimit("min", CC, !1, hC.toString(zC))
      }
      lte(CC, zC) {
        return this.setLimit("max", CC, !0, hC.toString(zC))
      }
      lt(CC, zC) {
        return this.setLimit("max", CC, !1, hC.toString(zC))
      }
      setLimit(CC, zC, ZC, QC) {
        return new tC({
          ...this._def,
          checks: [...this._def.checks, {
            kind: CC,
            value: zC,
            inclusive: ZC,
            message: hC.toString(QC)
          }]
        })
      }
      _addCheck(CC) {
        return new tC({
          ...this._def,
          checks: [...this._def.checks, CC]
        })
      }
      int(CC) {
        return this._addCheck({
          kind: "int",
          message: hC.toString(CC)
        })
      }
      positive(CC) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: hC.toString(CC)
        })
      }
      negative(CC) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: hC.toString(CC)
        })
      }
      nonpositive(CC) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: hC.toString(CC)
        })
      }
      nonnegative(CC) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: hC.toString(CC)
        })
      }
      multipleOf(CC, zC) {
        return this._addCheck({
          kind: "multipleOf",
          value: CC,
          message: hC.toString(zC)
        })
      }
      finite(CC) {
        return this._addCheck({
          kind: "finite",
          message: hC.toString(CC)
        })
      }
      safe(CC) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: hC.toString(CC)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: hC.toString(CC)
        })
      }
      get minValue() {
        let CC = null;
        for (const zC of this._def.checks) "min" === zC.kind && (null === CC || zC.value > CC) && (CC = zC.value);
        return CC
      }
      get maxValue() {
        let CC = null;
        for (const zC of this._def.checks) "max" === zC.kind && (null === CC || zC.value < CC) && (CC = zC.value);
        return CC
      }
      get isInt() {
        return !!this._def.checks.find((CC => "int" === CC.kind || "multipleOf" === CC.kind && fC.isInteger(CC.value)))
      }
      get isFinite() {
        let CC = null,
          zC = null;
        for (const ZC of this._def.checks) {
          if ("finite" === ZC.kind || "int" === ZC.kind || "multipleOf" === ZC.kind) return !0;
          "min" === ZC.kind ? (null === zC || ZC.value > zC) && (zC = ZC.value) : "max" === ZC.kind && (null === CC || ZC.value < CC) && (CC = ZC.value)
        }
        return Number.isFinite(zC) && Number.isFinite(CC)
      }
    }
    tC.create = CC => new tC({
      checks: [],
      typeName: Hz.ZodNumber,
      coerce: (null === CC || void 0 === CC ? void 0 : CC.coerce) || !1,
      ...dC(CC)
    });
    class DC extends mC {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(CC) {
        this._def.coerce && (CC.data = BigInt(CC.data));
        if (this._getType(CC) !== FC.bigint) {
          const zC = this._getOrReturnCtx(CC);
          return GC(zC, {
            code: NC.invalid_type,
            expected: FC.bigint,
            received: zC.parsedType
          }), AC
        }
        let zC;
        const ZC = new RC;
        for (const QC of this._def.checks)
          if ("min" === QC.kind) {
            (QC.inclusive ? CC.data < QC.value : CC.data <= QC.value) && (zC = this._getOrReturnCtx(CC, zC), GC(zC, {
              code: NC.too_small,
              type: "bigint",
              minimum: QC.value,
              inclusive: QC.inclusive,
              message: QC.message
            }), ZC.rg())
          } else if ("max" === QC.kind) {
          (QC.inclusive ? CC.data > QC.value : CC.data >= QC.value) && (zC = this._getOrReturnCtx(CC, zC), GC(zC, {
            code: NC.too_big,
            type: "bigint",
            maximum: QC.value,
            inclusive: QC.inclusive,
            message: QC.message
          }), ZC.rg())
        } else "multipleOf" === QC.kind ? CC.data % QC.value !== BigInt(0) && (zC = this._getOrReturnCtx(CC, zC), GC(zC, {
          code: NC.not_multiple_of,
          multipleOf: QC.value,
          message: QC.message
        }), ZC.rg()) : fC.assertNever(QC);
        return {
          status: ZC.value,
          value: CC.data
        }
      }
      gte(CC, zC) {
        return this.setLimit("min", CC, !0, hC.toString(zC))
      }
      gt(CC, zC) {
        return this.setLimit("min", CC, !1, hC.toString(zC))
      }
      lte(CC, zC) {
        return this.setLimit("max", CC, !0, hC.toString(zC))
      }
      lt(CC, zC) {
        return this.setLimit("max", CC, !1, hC.toString(zC))
      }
      setLimit(CC, zC, ZC, QC) {
        return new DC({
          ...this._def,
          checks: [...this._def.checks, {
            kind: CC,
            value: zC,
            inclusive: ZC,
            message: hC.toString(QC)
          }]
        })
      }
      _addCheck(CC) {
        return new DC({
          ...this._def,
          checks: [...this._def.checks, CC]
        })
      }
      positive(CC) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: hC.toString(CC)
        })
      }
      negative(CC) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: hC.toString(CC)
        })
      }
      nonpositive(CC) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: hC.toString(CC)
        })
      }
      nonnegative(CC) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: hC.toString(CC)
        })
      }
      multipleOf(CC, zC) {
        return this._addCheck({
          kind: "multipleOf",
          value: CC,
          message: hC.toString(zC)
        })
      }
      get minValue() {
        let CC = null;
        for (const zC of this._def.checks) "min" === zC.kind && (null === CC || zC.value > CC) && (CC = zC.value);
        return CC
      }
      get maxValue() {
        let CC = null;
        for (const zC of this._def.checks) "max" === zC.kind && (null === CC || zC.value < CC) && (CC = zC.value);
        return CC
      }
    }
    DC.create = CC => {
      var zC;
      return new DC({
        checks: [],
        typeName: Hz.ZodBigInt,
        coerce: null !== (zC = null === CC || void 0 === CC ? void 0 : CC.coerce) && void 0 !== zC && zC,
        ...dC(CC)
      })
    };
    class jC extends mC {
      _parse(CC) {
        this._def.coerce && (CC.data = Boolean(CC.data));
        if (this._getType(CC) !== FC.boolean) {
          const zC = this._getOrReturnCtx(CC);
          return GC(zC, {
            code: NC.invalid_type,
            expected: FC.boolean,
            received: zC.parsedType
          }), AC
        }
        return JC(CC.data)
      }
    }
    jC.create = CC => new jC({
      typeName: Hz.ZodBoolean,
      coerce: (null === CC || void 0 === CC ? void 0 : CC.coerce) || !1,
      ...dC(CC)
    });
    class yC extends mC {
      _parse(CC) {
        this._def.coerce && (CC.data = new Date(CC.data));
        if (this._getType(CC) !== FC.date) {
          const zC = this._getOrReturnCtx(CC);
          return GC(zC, {
            code: NC.invalid_type,
            expected: FC.date,
            received: zC.parsedType
          }), AC
        }
        if (isNaN(CC.data.getTime())) {
          return GC(this._getOrReturnCtx(CC), {
            code: NC.invalid_date
          }), AC
        }
        const zC = new RC;
        let ZC;
        for (const QC of this._def.checks) "min" === QC.kind ? CC.data.getTime() < QC.value && (ZC = this._getOrReturnCtx(CC, ZC), GC(ZC, {
          code: NC.too_small,
          message: QC.message,
          inclusive: !0,
          exact: !1,
          minimum: QC.value,
          type: "date"
        }), zC.rg()) : "max" === QC.kind ? CC.data.getTime() > QC.value && (ZC = this._getOrReturnCtx(CC, ZC), GC(ZC, {
          code: NC.too_big,
          message: QC.message,
          inclusive: !0,
          exact: !1,
          maximum: QC.value,
          type: "date"
        }), zC.rg()) : fC.assertNever(QC);
        return {
          status: zC.value,
          value: new Date(CC.data.getTime())
        }
      }
      _addCheck(CC) {
        return new yC({
          ...this._def,
          checks: [...this._def.checks, CC]
        })
      }
      min(CC, zC) {
        return this._addCheck({
          kind: "min",
          value: CC.getTime(),
          message: hC.toString(zC)
        })
      }
      max(CC, zC) {
        return this._addCheck({
          kind: "max",
          value: CC.getTime(),
          message: hC.toString(zC)
        })
      }
      get minDate() {
        let CC = null;
        for (const zC of this._def.checks) "min" === zC.kind && (null === CC || zC.value > CC) && (CC = zC.value);
        return null != CC ? new Date(CC) : null
      }
      get maxDate() {
        let CC = null;
        for (const zC of this._def.checks) "max" === zC.kind && (null === CC || zC.value < CC) && (CC = zC.value);
        return null != CC ? new Date(CC) : null
      }
    }
    yC.create = CC => new yC({
      checks: [],
      coerce: (null === CC || void 0 === CC ? void 0 : CC.coerce) || !1,
      typeName: Hz.ZodDate,
      ...dC(CC)
    });
    class LC extends mC {
      _parse(CC) {
        if (this._getType(CC) !== FC.symbol) {
          const zC = this._getOrReturnCtx(CC);
          return GC(zC, {
            code: NC.invalid_type,
            expected: FC.symbol,
            received: zC.parsedType
          }), AC
        }
        return JC(CC.data)
      }
    }
    LC.create = CC => new LC({
      typeName: Hz.ZodSymbol,
      ...dC(CC)
    });
    class UC extends mC {
      _parse(CC) {
        if (this._getType(CC) !== FC.undefined) {
          const zC = this._getOrReturnCtx(CC);
          return GC(zC, {
            code: NC.invalid_type,
            expected: FC.undefined,
            received: zC.parsedType
          }), AC
        }
        return JC(CC.data)
      }
    }
    UC.create = CC => new UC({
      typeName: Hz.ZodUndefined,
      ...dC(CC)
    });
    class BC extends mC {
      _parse(CC) {
        if (this._getType(CC) !== FC.null) {
          const zC = this._getOrReturnCtx(CC);
          return GC(zC, {
            code: NC.invalid_type,
            expected: FC.null,
            received: zC.parsedType
          }), AC
        }
        return JC(CC.data)
      }
    }
    BC.create = CC => new BC({
      typeName: Hz.ZodNull,
      ...dC(CC)
    });
    class OC extends mC {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(CC) {
        return JC(CC.data)
      }
    }
    OC.create = CC => new OC({
      typeName: Hz.ZodAny,
      ...dC(CC)
    });
    class kC extends mC {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(CC) {
        return JC(CC.data)
      }
    }
    kC.create = CC => new kC({
      typeName: Hz.ZodUnknown,
      ...dC(CC)
    });
    class VC extends mC {
      _parse(CC) {
        const zC = this._getOrReturnCtx(CC);
        return GC(zC, {
          code: NC.invalid_type,
          expected: FC.never,
          received: zC.parsedType
        }), AC
      }
    }
    VC.create = CC => new VC({
      typeName: Hz.ZodNever,
      ...dC(CC)
    });
    class Cz extends mC {
      _parse(CC) {
        if (this._getType(CC) !== FC.undefined) {
          const zC = this._getOrReturnCtx(CC);
          return GC(zC, {
            code: NC.invalid_type,
            expected: FC.void,
            received: zC.parsedType
          }), AC
        }
        return JC(CC.data)
      }
    }
    Cz.create = CC => new Cz({
      typeName: Hz.ZodVoid,
      ...dC(CC)
    });
    class zz extends mC {
      _parse(CC) {
        const {
          ctx: zC,
          status: ZC
        } = this._processInputParams(CC), QC = this._def;
        if (zC.parsedType !== FC.array) return GC(zC, {
          code: NC.invalid_type,
          expected: FC.array,
          received: zC.parsedType
        }), AC;
        if (null !== QC.exactLength) {
          const CC = zC.data.length > QC.exactLength.value,
            wC = zC.data.length < QC.exactLength.value;
          (CC || wC) && (GC(zC, {
            code: CC ? NC.too_big : NC.too_small,
            minimum: wC ? QC.exactLength.value : void 0,
            maximum: CC ? QC.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: QC.exactLength.message
          }), ZC.rg())
        }
        if (null !== QC.minLength && zC.data.length < QC.minLength.value && (GC(zC, {
            code: NC.too_small,
            minimum: QC.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: QC.minLength.message
          }), ZC.rg()), null !== QC.maxLength && zC.data.length > QC.maxLength.value && (GC(zC, {
            code: NC.too_big,
            maximum: QC.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: QC.maxLength.message
          }), ZC.rg()), zC.common.async) return Promise.all([...zC.data].map(((CC, ZC) => QC.type._parseAsync(new KC(zC, CC, zC.path, ZC))))).then((CC => RC.mergeArray(ZC, CC)));
        const wC = [...zC.data].map(((CC, ZC) => QC.type._parseSync(new KC(zC, CC, zC.path, ZC))));
        return RC.mergeArray(ZC, wC)
      }
      get element() {
        return this._def.type
      }
      min(CC, zC) {
        return new zz({
          ...this._def,
          minLength: {
            value: CC,
            message: hC.toString(zC)
          }
        })
      }
      max(CC, zC) {
        return new zz({
          ...this._def,
          maxLength: {
            value: CC,
            message: hC.toString(zC)
          }
        })
      }
      length(CC, zC) {
        return new zz({
          ...this._def,
          exactLength: {
            value: CC,
            message: hC.toString(zC)
          }
        })
      }
      nonempty(CC) {
        return this.min(1, CC)
      }
    }

    function Zz(CC) {
      if (CC instanceof Qz) {
        const zC = {};
        for (const ZC in CC.shape) {
          const QC = CC.shape[ZC];
          zC[ZC] = xz.create(Zz(QC))
        }
        return new Qz({
          ...CC._def,
          shape: () => zC
        })
      }
      return CC instanceof zz ? new zz({
        ...CC._def,
        type: Zz(CC.element)
      }) : CC instanceof xz ? xz.create(Zz(CC.unwrap())) : CC instanceof Jz ? Jz.create(Zz(CC.unwrap())) : CC instanceof qz ? qz.create(CC.items.map((CC => Zz(CC)))) : CC
    }
    zz.create = (CC, zC) => new zz({
      type: CC,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: Hz.ZodArray,
      ...dC(zC)
    });
    class Qz extends mC {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const CC = this._def.shape(),
          zC = fC.objectKeys(CC);
        return this._cached = {
          shape: CC,
          keys: zC
        }
      }
      _parse(CC) {
        if (this._getType(CC) !== FC.object) {
          const zC = this._getOrReturnCtx(CC);
          return GC(zC, {
            code: NC.invalid_type,
            expected: FC.object,
            received: zC.parsedType
          }), AC
        }
        const {
          status: zC,
          ctx: ZC
        } = this._processInputParams(CC), {
          shape: QC,
          keys: wC
        } = this._getCached(), bC = [];
        if (!(this._def.catchall instanceof VC && "strip" === this._def.unknownKeys))
          for (const fC in ZC.data) wC.includes(fC) || bC.push(fC);
        const nC = [];
        for (const fC of wC) {
          const CC = QC[fC],
            zC = ZC.data[fC];
          nC.push({
            key: {
              status: "valid",
              value: fC
            },
            value: CC._parse(new KC(ZC, zC, ZC.path, fC)),
            alwaysSet: fC in ZC.data
          })
        }
        if (this._def.catchall instanceof VC) {
          const CC = this._def.unknownKeys;
          if ("passthrough" === CC)
            for (const zC of bC) nC.push({
              key: {
                status: "valid",
                value: zC
              },
              value: {
                status: "valid",
                value: ZC.data[zC]
              }
            });
          else if ("strict" === CC) bC.length > 0 && (GC(ZC, {
            code: NC.unrecognized_keys,
            keys: bC
          }), zC.rg());
          else if ("strip" !== CC) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const CC = this._def.catchall;
          for (const zC of bC) {
            const QC = ZC.data[zC];
            nC.push({
              key: {
                status: "valid",
                value: zC
              },
              value: CC._parse(new KC(ZC, QC, ZC.path, zC)),
              alwaysSet: zC in ZC.data
            })
          }
        }
        return ZC.common.async ? Promise.resolve().then((async () => {
          const CC = [];
          for (const zC of nC) {
            const ZC = await zC.key;
            CC.push({
              key: ZC,
              value: await zC.value,
              alwaysSet: zC.alwaysSet
            })
          }
          return CC
        })).then((CC => RC.mergeObjectSync(zC, CC))) : RC.mergeObjectSync(zC, nC)
      }
      get shape() {
        return this._def.shape()
      }
      strict(CC) {
        return hC.errToObj, new Qz({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== CC ? {
            errorMap: (zC, ZC) => {
              var QC, wC, bC, nC;
              const fC = null !== (bC = null === (wC = (QC = this._def).errorMap) || void 0 === wC ? void 0 : wC.call(QC, zC, ZC).message) && void 0 !== bC ? bC : ZC.defaultError;
              return "unrecognized_keys" === zC.code ? {
                message: null !== (nC = hC.errToObj(CC).message) && void 0 !== nC ? nC : fC
              } : {
                message: fC
              }
            }
          } : {}
        })
      }
      strip() {
        return new Qz({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new Qz({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(CC) {
        return new Qz({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...CC
          })
        })
      }
      merge(CC) {
        return new Qz({
          unknownKeys: CC._def.unknownKeys,
          catchall: CC._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...CC._def.shape()
          }),
          typeName: Hz.ZodObject
        })
      }
      setKey(CC, zC) {
        return this.augment({
          [CC]: zC
        })
      }
      catchall(CC) {
        return new Qz({
          ...this._def,
          catchall: CC
        })
      }
      CM(CC) {
        const zC = {};
        return fC.objectKeys(CC).forEach((ZC => {
          CC[ZC] && this.shape[ZC] && (zC[ZC] = this.shape[ZC])
        })), new Qz({
          ...this._def,
          shape: () => zC
        })
      }
      omit(CC) {
        const zC = {};
        return fC.objectKeys(this.shape).forEach((ZC => {
          CC[ZC] || (zC[ZC] = this.shape[ZC])
        })), new Qz({
          ...this._def,
          shape: () => zC
        })
      }
      deepPartial() {
        return Zz(this)
      }
      partial(CC) {
        const zC = {};
        return fC.objectKeys(this.shape).forEach((ZC => {
          const QC = this.shape[ZC];
          CC && !CC[ZC] ? zC[ZC] = QC : zC[ZC] = QC.optional()
        })), new Qz({
          ...this._def,
          shape: () => zC
        })
      }
      required(CC) {
        const zC = {};
        return fC.objectKeys(this.shape).forEach((ZC => {
          if (CC && !CC[ZC]) zC[ZC] = this.shape[ZC];
          else {
            let CC = this.shape[ZC];
            for (; CC instanceof xz;) CC = CC._def.innerType;
            zC[ZC] = CC
          }
        })), new Qz({
          ...this._def,
          shape: () => zC
        })
      }
      keyof() {
        return pz(fC.objectKeys(this.shape))
      }
    }
    Qz.create = (CC, zC) => new Qz({
      shape: () => CC,
      unknownKeys: "strip",
      catchall: VC.create(),
      typeName: Hz.ZodObject,
      ...dC(zC)
    }), Qz.strictCreate = (CC, zC) => new Qz({
      shape: () => CC,
      unknownKeys: "strict",
      catchall: VC.create(),
      typeName: Hz.ZodObject,
      ...dC(zC)
    }), Qz.lazycreate = (CC, zC) => new Qz({
      shape: CC,
      unknownKeys: "strip",
      catchall: VC.create(),
      typeName: Hz.ZodObject,
      ...dC(zC)
    });
    class wz extends mC {
      _parse(CC) {
        const {
          ctx: zC
        } = this._processInputParams(CC), ZC = this._def.options;
        if (zC.common.async) return Promise.all(ZC.map((async CC => {
          const ZC = {
            ...zC,
            common: {
              ...zC.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await CC._parseAsync({
              data: zC.data,
              path: zC.path,
              parent: ZC
            }),
            ctx: ZC
          }
        }))).then((function(CC) {
          for (const zC of CC)
            if ("valid" === zC.result.status) return zC.result;
          for (const QC of CC)
            if ("rg" === QC.result.status) return zC.common.issues.push(...QC.ctx.common.issues), QC.result;
          const ZC = CC.map((CC => new MC(CC.ctx.common.issues)));
          return GC(zC, {
            code: NC.invalid_union,
            unionErrors: ZC
          }), AC
        }));
        {
          let CC;
          const QC = [];
          for (const bC of ZC) {
            const ZC = {
                ...zC,
                common: {
                  ...zC.common,
                  issues: []
                },
                parent: null
              },
              wC = bC._parseSync({
                data: zC.data,
                path: zC.path,
                parent: ZC
              });
            if ("valid" === wC.status) return wC;
            "rg" !== wC.status || CC || (CC = {
              result: wC,
              ctx: ZC
            }), ZC.common.issues.length && QC.push(ZC.common.issues)
          }
          if (CC) return zC.common.issues.push(...CC.ctx.common.issues), CC.result;
          const wC = QC.map((CC => new MC(CC)));
          return GC(zC, {
            code: NC.invalid_union,
            unionErrors: wC
          }), AC
        }
      }
      get options() {
        return this._def.options
      }
    }
    wz.create = (CC, zC) => new wz({
      options: CC,
      typeName: Hz.ZodUnion,
      ...dC(zC)
    });
    const bz = CC => CC instanceof gz ? bz(CC.schema) : CC instanceof Az ? bz(CC.innerType()) : CC instanceof Sz ? [CC.value] : CC instanceof Pz ? CC.options : CC instanceof Gz ? Object.keys(CC.enum) : CC instanceof Iz ? bz(CC._def.innerType) : CC instanceof UC ? [void 0] : CC instanceof BC ? [null] : null;
    class nz extends mC {
      _parse(CC) {
        const {
          ctx: zC
        } = this._processInputParams(CC);
        if (zC.parsedType !== FC.object) return GC(zC, {
          code: NC.invalid_type,
          expected: FC.object,
          received: zC.parsedType
        }), AC;
        const ZC = this.discriminator,
          QC = zC.data[ZC],
          wC = this.optionsMap.get(QC);
        return wC ? zC.common.async ? wC._parseAsync({
          data: zC.data,
          path: zC.path,
          parent: zC
        }) : wC._parseSync({
          data: zC.data,
          path: zC.path,
          parent: zC
        }) : (GC(zC, {
          code: NC.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [ZC]
        }), AC)
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
      static create(CC, zC, ZC) {
        const QC = new Map;
        for (const wC of zC) {
          const zC = bz(wC.shape[CC]);
          if (!zC) throw new Error(`A discriminator value for key \`${CC}\` could not be extracted from all schema options`);
          for (const ZC of zC) {
            if (QC.has(ZC)) throw new Error(`Discriminator property ${String(CC)} has duplicate value ${String(ZC)}`);
            QC.set(ZC, wC)
          }
        }
        return new nz({
          typeName: Hz.ZodDiscriminatedUnion,
          discriminator: CC,
          options: zC,
          optionsMap: QC,
          ...dC(ZC)
        })
      }
    }

    function fz(CC, zC) {
      const ZC = WC(CC),
        QC = WC(zC);
      if (CC === zC) return {
        valid: !0,
        data: CC
      };
      if (ZC === FC.object && QC === FC.object) {
        const ZC = fC.objectKeys(zC),
          QC = fC.objectKeys(CC).filter((CC => -1 !== ZC.indexOf(CC))),
          wC = {
            ...CC,
            ...zC
          };
        for (const bC of QC) {
          const ZC = fz(CC[bC], zC[bC]);
          if (!ZC.valid) return {
            valid: !1
          };
          wC[bC] = ZC.data
        }
        return {
          valid: !0,
          data: wC
        }
      }
      if (ZC === FC.array && QC === FC.array) {
        if (CC.length !== zC.length) return {
          valid: !1
        };
        const ZC = [];
        for (let QC = 0; QC < CC.length; QC++) {
          const wC = fz(CC[QC], zC[QC]);
          if (!wC.valid) return {
            valid: !1
          };
          ZC.push(wC.data)
        }
        return {
          valid: !0,
          data: ZC
        }
      }
      return ZC === FC.date && QC === FC.date && +CC === +zC ? {
        valid: !0,
        data: CC
      } : {
        valid: !1
      }
    }
    class oz extends mC {
      _parse(CC) {
        const {
          status: zC,
          ctx: ZC
        } = this._processInputParams(CC), QC = (CC, QC) => {
          if (IC(CC) || IC(QC)) return AC;
          const wC = fz(CC.value, QC.value);
          return wC.valid ? ((iC(CC) || iC(QC)) && zC.rg(), {
            status: zC.value,
            value: wC.data
          }) : (GC(ZC, {
            code: NC.invalid_intersection_types
          }), AC)
        };
        return ZC.common.async ? Promise.all([this._def.left._parseAsync({
          data: ZC.data,
          path: ZC.path,
          parent: ZC
        }), this._def.right._parseAsync({
          data: ZC.data,
          path: ZC.path,
          parent: ZC
        })]).then((CC => {
          let [zC, ZC] = CC;
          return QC(zC, ZC)
        })) : QC(this._def.left._parseSync({
          data: ZC.data,
          path: ZC.path,
          parent: ZC
        }), this._def.right._parseSync({
          data: ZC.data,
          path: ZC.path,
          parent: ZC
        }))
      }
    }
    oz.create = (CC, zC, ZC) => new oz({
      left: CC,
      right: zC,
      typeName: Hz.ZodIntersection,
      ...dC(ZC)
    });
    class qz extends mC {
      _parse(CC) {
        const {
          status: zC,
          ctx: ZC
        } = this._processInputParams(CC);
        if (ZC.parsedType !== FC.array) return GC(ZC, {
          code: NC.invalid_type,
          expected: FC.array,
          received: ZC.parsedType
        }), AC;
        if (ZC.data.length < this._def.items.length) return GC(ZC, {
          code: NC.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), AC;
        !this._def.rest && ZC.data.length > this._def.items.length && (GC(ZC, {
          code: NC.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), zC.rg());
        const QC = [...ZC.data].map(((CC, zC) => {
          const QC = this._def.items[zC] || this._def.rest;
          return QC ? QC._parse(new KC(ZC, CC, ZC.path, zC)) : null
        })).filter((CC => !!CC));
        return ZC.common.async ? Promise.all(QC).then((CC => RC.mergeArray(zC, CC))) : RC.mergeArray(zC, QC)
      }
      get items() {
        return this._def.items
      }
      rest(CC) {
        return new qz({
          ...this._def,
          rest: CC
        })
      }
    }
    qz.create = (CC, zC) => {
      if (!Array.isArray(CC)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new qz({
        items: CC,
        typeName: Hz.ZodTuple,
        rest: null,
        ...dC(zC)
      })
    };
    class Fz extends mC {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(CC) {
        const {
          status: zC,
          ctx: ZC
        } = this._processInputParams(CC);
        if (ZC.parsedType !== FC.object) return GC(ZC, {
          code: NC.invalid_type,
          expected: FC.object,
          received: ZC.parsedType
        }), AC;
        const QC = [],
          wC = this._def.keyType,
          bC = this._def.valueType;
        for (const nC in ZC.data) QC.push({
          key: wC._parse(new KC(ZC, nC, ZC.path, nC)),
          value: bC._parse(new KC(ZC, ZC.data[nC], ZC.path, nC))
        });
        return ZC.common.async ? RC.mergeObjectAsync(zC, QC) : RC.mergeObjectSync(zC, QC)
      }
      get element() {
        return this._def.valueType
      }
      static create(CC, zC, ZC) {
        return new Fz(zC instanceof mC ? {
          keyType: CC,
          valueType: zC,
          typeName: Hz.ZodRecord,
          ...dC(ZC)
        } : {
          keyType: TC.create(),
          valueType: CC,
          typeName: Hz.ZodRecord,
          ...dC(zC)
        })
      }
    }
    class Wz extends mC {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(CC) {
        const {
          status: zC,
          ctx: ZC
        } = this._processInputParams(CC);
        if (ZC.parsedType !== FC.map) return GC(ZC, {
          code: NC.invalid_type,
          expected: FC.map,
          received: ZC.parsedType
        }), AC;
        const QC = this._def.keyType,
          wC = this._def.valueType,
          bC = [...ZC.data.entries()].map(((CC, zC) => {
            let [bC, nC] = CC;
            return {
              key: QC._parse(new KC(ZC, bC, ZC.path, [zC, "key"])),
              value: wC._parse(new KC(ZC, nC, ZC.path, [zC, "value"]))
            }
          }));
        if (ZC.common.async) {
          const CC = new Map;
          return Promise.resolve().then((async () => {
            for (const ZC of bC) {
              const QC = await ZC.key,
                wC = await ZC.value;
              if ("aborted" === QC.status || "aborted" === wC.status) return AC;
              "rg" !== QC.status && "rg" !== wC.status || zC.rg(), CC.set(QC.value, wC.value)
            }
            return {
              status: zC.value,
              value: CC
            }
          }))
        } {
          const CC = new Map;
          for (const ZC of bC) {
            const QC = ZC.key,
              wC = ZC.value;
            if ("aborted" === QC.status || "aborted" === wC.status) return AC;
            "rg" !== QC.status && "rg" !== wC.status || zC.rg(), CC.set(QC.value, wC.value)
          }
          return {
            status: zC.value,
            value: CC
          }
        }
      }
    }
    Wz.create = (CC, zC, ZC) => new Wz({
      valueType: zC,
      keyType: CC,
      typeName: Hz.ZodMap,
      ...dC(ZC)
    });
    class Nz extends mC {
      _parse(CC) {
        const {
          status: zC,
          ctx: ZC
        } = this._processInputParams(CC);
        if (ZC.parsedType !== FC.set) return GC(ZC, {
          code: NC.invalid_type,
          expected: FC.set,
          received: ZC.parsedType
        }), AC;
        const QC = this._def;
        null !== QC.minSize && ZC.data.size < QC.minSize.value && (GC(ZC, {
          code: NC.too_small,
          minimum: QC.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: QC.minSize.message
        }), zC.rg()), null !== QC.maxSize && ZC.data.size > QC.maxSize.value && (GC(ZC, {
          code: NC.too_big,
          maximum: QC.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: QC.maxSize.message
        }), zC.rg());
        const wC = this._def.valueType;

        function bC(CC) {
          const ZC = new Set;
          for (const QC of CC) {
            if ("aborted" === QC.status) return AC;
            "rg" === QC.status && zC.rg(), ZC.add(QC.value)
          }
          return {
            status: zC.value,
            value: ZC
          }
        }
        const nC = [...ZC.data.values()].map(((CC, zC) => wC._parse(new KC(ZC, CC, ZC.path, zC))));
        return ZC.common.async ? Promise.all(nC).then((CC => bC(CC))) : bC(nC)
      }
      min(CC, zC) {
        return new Nz({
          ...this._def,
          minSize: {
            value: CC,
            message: hC.toString(zC)
          }
        })
      }
      max(CC, zC) {
        return new Nz({
          ...this._def,
          maxSize: {
            value: CC,
            message: hC.toString(zC)
          }
        })
      }
      size(CC, zC) {
        return this.min(CC, zC).max(CC, zC)
      }
      nonempty(CC) {
        return this.min(1, CC)
      }
    }
    Nz.create = (CC, zC) => new Nz({
      valueType: CC,
      minSize: null,
      maxSize: null,
      typeName: Hz.ZodSet,
      ...dC(zC)
    });
    class Mz extends mC {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(CC) {
        const {
          ctx: zC
        } = this._processInputParams(CC);
        if (zC.parsedType !== FC.function) return GC(zC, {
          code: NC.invalid_type,
          expected: FC.function,
          received: zC.parsedType
        }), AC;

        function ZC(CC, ZC) {
          return PC({
            data: CC,
            path: zC.path,
            errorMaps: [zC.common.contextualErrorMap, zC.schemaErrorMap, pC(), gC].filter((CC => !!CC)),
            issueData: {
              code: NC.invalid_arguments,
              argumentsError: ZC
            }
          })
        }

        function QC(CC, ZC) {
          return PC({
            data: CC,
            path: zC.path,
            errorMaps: [zC.common.contextualErrorMap, zC.schemaErrorMap, pC(), gC].filter((CC => !!CC)),
            issueData: {
              code: NC.invalid_return_type,
              returnTypeError: ZC
            }
          })
        }
        const wC = {
            errorMap: zC.common.contextualErrorMap
          },
          bC = zC.data;
        if (this._def.returns instanceof Rz) {
          const CC = this;
          return JC((async function() {
            for (var zC = arguments.length, nC = new Array(zC), fC = 0; fC < zC; fC++) nC[fC] = arguments[fC];
            const oC = new MC([]),
              qC = await CC._def.args.parseAsync(nC, wC).catch((CC => {
                throw oC.addIssue(ZC(nC, CC)), oC
              })),
              FC = await Reflect.apply(bC, this, qC);
            return await CC._def.returns._def.type.parseAsync(FC, wC).catch((CC => {
              throw oC.addIssue(QC(FC, CC)), oC
            }))
          }))
        } {
          const CC = this;
          return JC((function() {
            for (var zC = arguments.length, nC = new Array(zC), fC = 0; fC < zC; fC++) nC[fC] = arguments[fC];
            const oC = CC._def.args.safeParse(nC, wC);
            if (!oC.success) throw new MC([ZC(nC, oC.error)]);
            const qC = Reflect.apply(bC, this, oC.data),
              FC = CC._def.returns.safeParse(qC, wC);
            if (!FC.success) throw new MC([QC(qC, FC.error)]);
            return FC.data
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
        for (var CC = arguments.length, zC = new Array(CC), ZC = 0; ZC < CC; ZC++) zC[ZC] = arguments[ZC];
        return new Mz({
          ...this._def,
          args: qz.create(zC).rest(kC.create())
        })
      }
      returns(CC) {
        return new Mz({
          ...this._def,
          returns: CC
        })
      }
      implement(CC) {
        return this.parse(CC)
      }
      strictImplement(CC) {
        return this.parse(CC)
      }
      static create(CC, zC, ZC) {
        return new Mz({
          args: CC || qz.create([]).rest(kC.create()),
          returns: zC || kC.create(),
          typeName: Hz.ZodFunction,
          ...dC(ZC)
        })
      }
    }
    class gz extends mC {
      get schema() {
        return this._def.getter()
      }
      _parse(CC) {
        const {
          ctx: zC
        } = this._processInputParams(CC);
        return this._def.getter()._parse({
          data: zC.data,
          path: zC.path,
          parent: zC
        })
      }
    }
    gz.create = (CC, zC) => new gz({
      getter: CC,
      typeName: Hz.ZodLazy,
      ...dC(zC)
    });
    class Sz extends mC {
      _parse(CC) {
        if (CC.data !== this._def.value) {
          const zC = this._getOrReturnCtx(CC);
          return GC(zC, {
            received: zC.data,
            code: NC.invalid_literal,
            expected: this._def.value
          }), AC
        }
        return {
          status: "valid",
          value: CC.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function pz(CC, zC) {
      return new Pz({
        values: CC,
        typeName: Hz.ZodEnum,
        ...dC(zC)
      })
    }
    Sz.create = (CC, zC) => new Sz({
      value: CC,
      typeName: Hz.ZodLiteral,
      ...dC(zC)
    });
    class Pz extends mC {
      _parse(CC) {
        if ("string" !== typeof CC.data) {
          const zC = this._getOrReturnCtx(CC),
            ZC = this._def.values;
          return GC(zC, {
            expected: fC.joinValues(ZC),
            received: zC.parsedType,
            code: NC.invalid_type
          }), AC
        }
        if (-1 === this._def.values.indexOf(CC.data)) {
          const zC = this._getOrReturnCtx(CC),
            ZC = this._def.values;
          return GC(zC, {
            received: zC.data,
            code: NC.invalid_enum_value,
            options: ZC
          }), AC
        }
        return JC(CC.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const CC = {};
        for (const zC of this._def.values) CC[zC] = zC;
        return CC
      }
      get Values() {
        const CC = {};
        for (const zC of this._def.values) CC[zC] = zC;
        return CC
      }
      get Enum() {
        const CC = {};
        for (const zC of this._def.values) CC[zC] = zC;
        return CC
      }
      extract(CC) {
        return Pz.create(CC)
      }
      exclude(CC) {
        return Pz.create(this.options.filter((zC => !CC.includes(zC))))
      }
    }
    Pz.create = pz;
    class Gz extends mC {
      _parse(CC) {
        const zC = fC.getValidEnumValues(this._def.values),
          ZC = this._getOrReturnCtx(CC);
        if (ZC.parsedType !== FC.string && ZC.parsedType !== FC.number) {
          const CC = fC.objectValues(zC);
          return GC(ZC, {
            expected: fC.joinValues(CC),
            received: ZC.parsedType,
            code: NC.invalid_type
          }), AC
        }
        if (-1 === zC.indexOf(CC.data)) {
          const CC = fC.objectValues(zC);
          return GC(ZC, {
            received: ZC.data,
            code: NC.invalid_enum_value,
            options: CC
          }), AC
        }
        return JC(CC.data)
      }
      get enum() {
        return this._def.values
      }
    }
    Gz.create = (CC, zC) => new Gz({
      values: CC,
      typeName: Hz.ZodNativeEnum,
      ...dC(zC)
    });
    class Rz extends mC {
      unwrap() {
        return this._def.type
      }
      _parse(CC) {
        const {
          ctx: zC
        } = this._processInputParams(CC);
        if (zC.parsedType !== FC.promise && !1 === zC.common.async) return GC(zC, {
          code: NC.invalid_type,
          expected: FC.promise,
          received: zC.parsedType
        }), AC;
        const ZC = zC.parsedType === FC.promise ? zC.data : Promise.resolve(zC.data);
        return JC(ZC.then((CC => this._def.type.parseAsync(CC, {
          path: zC.path,
          errorMap: zC.common.contextualErrorMap
        }))))
      }
    }
    Rz.create = (CC, zC) => new Rz({
      type: CC,
      typeName: Hz.ZodPromise,
      ...dC(zC)
    });
    class Az extends mC {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === Hz.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(CC) {
        const {
          status: zC,
          ctx: ZC
        } = this._processInputParams(CC), QC = this._def.effect || null, wC = {
          addIssue: CC => {
            GC(ZC, CC), CC.fatal ? zC.abort() : zC.rg()
          },
          get path() {
            return ZC.path
          }
        };
        if (wC.addIssue = wC.addIssue.bind(wC), "preprocess" === QC.type) {
          const CC = QC.transform(ZC.data, wC);
          return ZC.common.issues.length ? {
            status: "rg",
            value: ZC.data
          } : ZC.common.async ? Promise.resolve(CC).then((CC => this._def.schema._parseAsync({
            data: CC,
            path: ZC.path,
            parent: ZC
          }))) : this._def.schema._parseSync({
            data: CC,
            path: ZC.path,
            parent: ZC
          })
        }
        if ("refinement" === QC.type) {
          const CC = CC => {
            const zC = QC.refinement(CC, wC);
            if (ZC.common.async) return Promise.resolve(zC);
            if (zC instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return CC
          };
          if (!1 === ZC.common.async) {
            const QC = this._def.schema._parseSync({
              data: ZC.data,
              path: ZC.path,
              parent: ZC
            });
            return "aborted" === QC.status ? AC : ("rg" === QC.status && zC.rg(), CC(QC.value), {
              status: zC.value,
              value: QC.value
            })
          }
          return this._def.schema._parseAsync({
            data: ZC.data,
            path: ZC.path,
            parent: ZC
          }).then((ZC => "aborted" === ZC.status ? AC : ("rg" === ZC.status && zC.rg(), CC(ZC.value).then((() => ({
            status: zC.value,
            value: ZC.value
          }))))))
        }
        if ("transform" === QC.type) {
          if (!1 === ZC.common.async) {
            const CC = this._def.schema._parseSync({
              data: ZC.data,
              path: ZC.path,
              parent: ZC
            });
            if (!vC(CC)) return CC;
            const bC = QC.transform(CC.value, wC);
            if (bC instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: zC.value,
              value: bC
            }
          }
          return this._def.schema._parseAsync({
            data: ZC.data,
            path: ZC.path,
            parent: ZC
          }).then((CC => vC(CC) ? Promise.resolve(QC.transform(CC.value, wC)).then((CC => ({
            status: zC.value,
            value: CC
          }))) : CC))
        }
        fC.assertNever(QC)
      }
    }
    Az.create = (CC, zC, ZC) => new Az({
      schema: CC,
      typeName: Hz.ZodEffects,
      effect: zC,
      ...dC(ZC)
    }), Az.createWithPreprocess = (CC, zC, ZC) => new Az({
      schema: zC,
      effect: {
        type: "preprocess",
        transform: CC
      },
      typeName: Hz.ZodEffects,
      ...dC(ZC)
    });
    class xz extends mC {
      _parse(CC) {
        return this._getType(CC) === FC.undefined ? JC(void 0) : this._def.innerType._parse(CC)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    xz.create = (CC, zC) => new xz({
      innerType: CC,
      typeName: Hz.ZodOptional,
      ...dC(zC)
    });
    class Jz extends mC {
      _parse(CC) {
        return this._getType(CC) === FC.null ? JC(null) : this._def.innerType._parse(CC)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    Jz.create = (CC, zC) => new Jz({
      innerType: CC,
      typeName: Hz.ZodNullable,
      ...dC(zC)
    });
    class Iz extends mC {
      _parse(CC) {
        const {
          ctx: zC
        } = this._processInputParams(CC);
        let ZC = zC.data;
        return zC.parsedType === FC.undefined && (ZC = this._def.defaultValue()), this._def.innerType._parse({
          data: ZC,
          path: zC.path,
          parent: zC
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    Iz.create = (CC, zC) => new Iz({
      innerType: CC,
      typeName: Hz.ZodDefault,
      defaultValue: "function" === typeof zC.default ? zC.default : () => zC.default,
      ...dC(zC)
    });
    class iz extends mC {
      _parse(CC) {
        const {
          ctx: zC
        } = this._processInputParams(CC), ZC = {
          ...zC,
          common: {
            ...zC.common,
            issues: []
          }
        }, QC = this._def.innerType._parse({
          data: ZC.data,
          path: ZC.path,
          parent: {
            ...ZC
          }
        });
        return eC(QC) ? QC.then((CC => ({
          status: "valid",
          value: "valid" === CC.status ? CC.value : this._def.catchValue({
            get error() {
              return new MC(ZC.common.issues)
            },
            input: ZC.data
          })
        }))) : {
          status: "valid",
          value: "valid" === QC.status ? QC.value : this._def.catchValue({
            get error() {
              return new MC(ZC.common.issues)
            },
            input: ZC.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    iz.create = (CC, zC) => new iz({
      innerType: CC,
      typeName: Hz.ZodCatch,
      catchValue: "function" === typeof zC.catch ? zC.catch : () => zC.catch,
      ...dC(zC)
    });
    class vz extends mC {
      _parse(CC) {
        if (this._getType(CC) !== FC.nan) {
          const zC = this._getOrReturnCtx(CC);
          return GC(zC, {
            code: NC.invalid_type,
            expected: FC.nan,
            received: zC.parsedType
          }), AC
        }
        return {
          status: "valid",
          value: CC.data
        }
      }
    }
    vz.create = CC => new vz({
      typeName: Hz.ZodNaN,
      ...dC(CC)
    });
    const ez = Symbol("zod_brand");
    class hz extends mC {
      _parse(CC) {
        const {
          ctx: zC
        } = this._processInputParams(CC), ZC = zC.data;
        return this._def.type._parse({
          data: ZC,
          path: zC.path,
          parent: zC
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class Kz extends mC {
      _parse(CC) {
        const {
          status: zC,
          ctx: ZC
        } = this._processInputParams(CC);
        if (ZC.common.async) {
          return (async () => {
            const CC = await this._def.in._parseAsync({
              data: ZC.data,
              path: ZC.path,
              parent: ZC
            });
            return "aborted" === CC.status ? AC : "rg" === CC.status ? (zC.rg(), xC(CC.value)) : this._def.out._parseAsync({
              data: CC.value,
              path: ZC.path,
              parent: ZC
            })
          })()
        } {
          const CC = this._def.in._parseSync({
            data: ZC.data,
            path: ZC.path,
            parent: ZC
          });
          return "aborted" === CC.status ? AC : "rg" === CC.status ? (zC.rg(), {
            status: "rg",
            value: CC.value
          }) : this._def.out._parseSync({
            data: CC.value,
            path: ZC.path,
            parent: ZC
          })
        }
      }
      static create(CC, zC) {
        return new Kz({
          in: CC,
          out: zC,
          typeName: Hz.ZodPipeline
        })
      }
    }
    class Yz extends mC {
      _parse(CC) {
        const zC = this._def.innerType._parse(CC);
        return vC(zC) && (zC.value = Object.freeze(zC.value)), zC
      }
    }
    Yz.create = (CC, zC) => new Yz({
      innerType: CC,
      typeName: Hz.ZodReadonly,
      ...dC(zC)
    });
    const dz = function(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        return CC ? OC.create().superRefine(((QC, wC) => {
          var bC, nC;
          if (!CC(QC)) {
            const CC = "function" === typeof zC ? zC(QC) : "string" === typeof zC ? {
                message: zC
              } : zC,
              fC = null === (nC = null !== (bC = CC.fatal) && void 0 !== bC ? bC : ZC) || void 0 === nC || nC,
              oC = "string" === typeof CC ? {
                message: CC
              } : CC;
            wC.addIssue({
              code: "custom",
              ...oC,
              fatal: fC
            })
          }
        })) : OC.create()
      },
      mz = {
        object: Qz.lazycreate
      };
    var Hz;
    ! function(CC) {
      CC.ZodString = "ZodString", CC.ZodNumber = "ZodNumber", CC.ZodNaN = "ZodNaN", CC.ZodBigInt = "ZodBigInt", CC.ZodBoolean = "ZodBoolean", CC.ZodDate = "ZodDate", CC.ZodSymbol = "ZodSymbol", CC.ZodUndefined = "ZodUndefined", CC.ZodNull = "ZodNull", CC.ZodAny = "ZodAny", CC.ZodUnknown = "ZodUnknown", CC.ZodNever = "ZodNever", CC.ZodVoid = "ZodVoid", CC.ZodArray = "ZodArray", CC.ZodObject = "ZodObject", CC.ZodUnion = "ZodUnion", CC.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", CC.ZodIntersection = "ZodIntersection", CC.ZodTuple = "ZodTuple", CC.ZodRecord = "ZodRecord", CC.ZodMap = "ZodMap", CC.ZodSet = "ZodSet", CC.ZodFunction = "ZodFunction", CC.ZodLazy = "ZodLazy", CC.ZodLiteral = "ZodLiteral", CC.ZodEnum = "ZodEnum", CC.ZodEffects = "ZodEffects", CC.ZodNativeEnum = "ZodNativeEnum", CC.ZodOptional = "ZodOptional", CC.ZodNullable = "ZodNullable", CC.ZodDefault = "ZodDefault", CC.ZodCatch = "ZodCatch", CC.ZodPromise = "ZodPromise", CC.ZodBranded = "ZodBranded", CC.ZodPipeline = "ZodPipeline", CC.ZodReadonly = "ZodReadonly"
    }(Hz || (Hz = {}));
    const Ez = TC.create,
      lz = tC.create,
      Xz = vz.create,
      cz = DC.create,
      uz = jC.create,
      rz = yC.create,
      sz = LC.create,
      Tz = UC.create,
      az = BC.create,
      tz = OC.create,
      Dz = kC.create,
      jz = VC.create,
      yz = Cz.create,
      Lz = zz.create,
      Uz = Qz.create,
      Bz = Qz.strictCreate,
      Oz = wz.create,
      kz = nz.create,
      Vz = oz.create,
      CZ = qz.create,
      zZ = Fz.create,
      ZZ = Wz.create,
      QZ = Nz.create,
      wZ = Mz.create,
      bZ = gz.create,
      nZ = Sz.create,
      fZ = Pz.create,
      oZ = Gz.create,
      qZ = Rz.create,
      FZ = Az.create,
      WZ = xz.create,
      NZ = Jz.create,
      MZ = Az.createWithPreprocess,
      gZ = Kz.create,
      SZ = {
        string: CC => TC.create({
          ...CC,
          coerce: !0
        }),
        number: CC => tC.create({
          ...CC,
          coerce: !0
        }),
        boolean: CC => jC.create({
          ...CC,
          coerce: !0
        }),
        bigint: CC => DC.create({
          ...CC,
          coerce: !0
        }),
        date: CC => yC.create({
          ...CC,
          coerce: !0
        })
      },
      pZ = AC;
    var PZ = Object.freeze({
        __proto__: null,
        defaultErrorMap: gC,
        setErrorMap: function(CC) {
          SC = CC
        },
        getErrorMap: pC,
        makeIssue: PC,
        EMPTY_PATH: [],
        addIssueToContext: GC,
        ParseStatus: RC,
        INVALID: AC,
        DIRTY: xC,
        OK: JC,
        isAborted: IC,
        isDirty: iC,
        isValid: vC,
        isAsync: eC,
        get util() {
          return fC
        },
        get objectUtil() {
          return oC
        },
        ZodParsedType: FC,
        getParsedType: WC,
        ZodType: mC,
        ZodString: TC,
        ZodNumber: tC,
        ZodBigInt: DC,
        ZodBoolean: jC,
        ZodDate: yC,
        ZodSymbol: LC,
        ZodUndefined: UC,
        ZodNull: BC,
        ZodAny: OC,
        ZodUnknown: kC,
        ZodNever: VC,
        ZodVoid: Cz,
        ZodArray: zz,
        ZodObject: Qz,
        ZodUnion: wz,
        ZodDiscriminatedUnion: nz,
        ZodIntersection: oz,
        ZodTuple: qz,
        ZodRecord: Fz,
        ZodMap: Wz,
        ZodSet: Nz,
        ZodFunction: Mz,
        ZodLazy: gz,
        ZodLiteral: Sz,
        ZodEnum: Pz,
        ZodNativeEnum: Gz,
        ZodPromise: Rz,
        ZodEffects: Az,
        ZodTransformer: Az,
        ZodOptional: xz,
        ZodNullable: Jz,
        ZodDefault: Iz,
        ZodCatch: iz,
        ZodNaN: vz,
        BRAND: ez,
        ZodBranded: hz,
        ZodPipeline: Kz,
        ZodReadonly: Yz,
        custom: dz,
        Schema: mC,
        ZodSchema: mC,
        late: mz,
        get ZodFirstPartyTypeKind() {
          return Hz
        },
        coerce: SZ,
        any: tz,
        array: Lz,
        bigint: cz,
        boolean: uz,
        date: rz,
        discriminatedUnion: kz,
        effect: FZ,
        enum: fZ,
        function: wZ,
        instanceof: function(CC) {
          let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${CC.name}`
          };
          return dz((zC => zC instanceof CC), zC)
        },
        intersection: Vz,
        lazy: bZ,
        literal: nZ,
        map: ZZ,
        nan: Xz,
        nativeEnum: oZ,
        never: jz,
        null: az,
        nullable: NZ,
        number: lz,
        object: Uz,
        oboolean: () => uz().optional(),
        onumber: () => lz().optional(),
        optional: WZ,
        ostring: () => Ez().optional(),
        pipeline: gZ,
        preprocess: MZ,
        promise: qZ,
        record: zZ,
        set: QZ,
        strictObject: Bz,
        string: Ez,
        symbol: sz,
        transformer: FZ,
        tuple: CZ,
        undefined: Tz,
        union: Oz,
        unknown: Dz,
        void: yz,
        NEVER: pZ,
        ZodIssueCode: NC,
        quotelessJson: CC => JSON.stringify(CC, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: MC
      }),
      GZ = {
        exports: {}
      };
    ! function(CC) {
      var zC = function(CC) {
        var ZC = 1e7,
          QC = 9007199254740992,
          wC = NC(QC),
          bC = "0123456789abcdefghijklmnopqrstuvwxyz",
          nC = "function" === typeof BigInt;

        function fC(CC, zC, ZC, QC) {
          return "undefined" === typeof CC ? fC[0] : "undefined" !== typeof zC && (10 !== +zC || ZC) ? jC(CC, zC, ZC, QC) : OC(CC)
        }

        function oC(CC, zC) {
          this.value = CC, this.sign = zC, this.isSmall = !1
        }

        function qC(CC) {
          this.value = CC, this.sign = CC < 0, this.isSmall = !0
        }

        function FC(CC) {
          this.value = CC
        }

        function WC(CC) {
          return -QC < CC && CC < QC
        }

        function NC(CC) {
          return CC < 1e7 ? [CC] : CC < 1e14 ? [CC % 1e7, Math.floor(CC / 1e7)] : [CC % 1e7, Math.floor(CC / 1e7) % 1e7, Math.floor(CC / 1e14)]
        }

        function MC(CC) {
          gC(CC);
          var zC = CC.length;
          if (zC < 4 && dC(CC, wC) < 0) switch (zC) {
            case 0:
              return 0;
            case 1:
              return CC[0];
            case 2:
              return CC[0] + CC[1] * ZC;
            default:
              return CC[0] + (CC[1] + CC[2] * ZC) * ZC
          }
          return CC
        }

        function gC(CC) {
          for (var zC = CC.length; 0 === CC[--zC];);
          CC.length = zC + 1
        }

        function SC(CC) {
          for (var zC = new Array(CC), ZC = -1; ++ZC < CC;) zC[ZC] = 0;
          return zC
        }

        function pC(CC) {
          return CC > 0 ? Math.floor(CC) : Math.ceil(CC)
        }

        function PC(CC, zC) {
          var QC, wC, bC = CC.length,
            nC = zC.length,
            fC = new Array(bC),
            oC = 0,
            qC = ZC;
          for (wC = 0; wC < nC; wC++) oC = (QC = CC[wC] + zC[wC] + oC) >= qC ? 1 : 0, fC[wC] = QC - oC * qC;
          for (; wC < bC;) oC = (QC = CC[wC] + oC) === qC ? 1 : 0, fC[wC++] = QC - oC * qC;
          return oC > 0 && fC.push(oC), fC
        }

        function GC(CC, zC) {
          return CC.length >= zC.length ? PC(CC, zC) : PC(zC, CC)
        }

        function RC(CC, zC) {
          var QC, wC, bC = CC.length,
            nC = new Array(bC),
            fC = ZC;
          for (wC = 0; wC < bC; wC++) QC = CC[wC] - fC + zC, zC = Math.floor(QC / fC), nC[wC] = QC - zC * fC, zC += 1;
          for (; zC > 0;) nC[wC++] = zC % fC, zC = Math.floor(zC / fC);
          return nC
        }

        function AC(CC, zC) {
          var QC, wC, bC = CC.length,
            nC = zC.length,
            fC = new Array(bC),
            oC = 0,
            qC = ZC;
          for (QC = 0; QC < nC; QC++)(wC = CC[QC] - oC - zC[QC]) < 0 ? (wC += qC, oC = 1) : oC = 0, fC[QC] = wC;
          for (QC = nC; QC < bC; QC++) {
            if (!((wC = CC[QC] - oC) < 0)) {
              fC[QC++] = wC;
              break
            }
            wC += qC, fC[QC] = wC
          }
          for (; QC < bC; QC++) fC[QC] = CC[QC];
          return gC(fC), fC
        }

        function xC(CC, zC, QC) {
          var wC, bC, nC = CC.length,
            fC = new Array(nC),
            FC = -zC,
            WC = ZC;
          for (wC = 0; wC < nC; wC++) bC = CC[wC] + FC, FC = Math.floor(bC / WC), bC %= WC, fC[wC] = bC < 0 ? bC + WC : bC;
          return "number" === typeof(fC = MC(fC)) ? (QC && (fC = -fC), new qC(fC)) : new oC(fC, QC)
        }

        function JC(CC, zC) {
          var QC, wC, bC, nC, fC = CC.length,
            oC = zC.length,
            qC = SC(fC + oC),
            FC = ZC;
          for (bC = 0; bC < fC; ++bC) {
            nC = CC[bC];
            for (var WC = 0; WC < oC; ++WC) QC = nC * zC[WC] + qC[bC + WC], wC = Math.floor(QC / FC), qC[bC + WC] = QC - wC * FC, qC[bC + WC + 1] += wC
          }
          return gC(qC), qC
        }

        function IC(CC, zC) {
          var QC, wC, bC = CC.length,
            nC = new Array(bC),
            fC = ZC,
            oC = 0;
          for (wC = 0; wC < bC; wC++) QC = CC[wC] * zC + oC, oC = Math.floor(QC / fC), nC[wC] = QC - oC * fC;
          for (; oC > 0;) nC[wC++] = oC % fC, oC = Math.floor(oC / fC);
          return nC
        }

        function iC(CC, zC) {
          for (var ZC = []; zC-- > 0;) ZC.push(0);
          return ZC.concat(CC)
        }

        function vC(CC, zC) {
          var ZC = Math.max(CC.length, zC.length);
          if (ZC <= 30) return JC(CC, zC);
          ZC = Math.ceil(ZC / 2);
          var QC = CC.slice(ZC),
            wC = CC.slice(0, ZC),
            bC = zC.slice(ZC),
            nC = zC.slice(0, ZC),
            fC = vC(wC, nC),
            oC = vC(QC, bC),
            qC = vC(GC(wC, QC), GC(nC, bC)),
            FC = GC(GC(fC, iC(AC(AC(qC, fC), oC), ZC)), iC(oC, 2 * ZC));
          return gC(FC), FC
        }

        function eC(CC, zC, QC) {
          return new oC(CC < ZC ? IC(zC, CC) : JC(zC, NC(CC)), QC)
        }

        function hC(CC) {
          var zC, QC, wC, bC, nC = CC.length,
            fC = SC(nC + nC),
            oC = ZC;
          for (wC = 0; wC < nC; wC++) {
            QC = 0 - (bC = CC[wC]) * bC;
            for (var qC = wC; qC < nC; qC++) zC = bC * CC[qC] * 2 + fC[wC + qC] + QC, QC = Math.floor(zC / oC), fC[wC + qC] = zC - QC * oC;
            fC[wC + nC] = QC
          }
          return gC(fC), fC
        }

        function KC(CC, zC) {
          var QC, wC, bC, nC, fC = CC.length,
            oC = SC(fC),
            qC = ZC;
          for (bC = 0, QC = fC - 1; QC >= 0; --QC) bC = (nC = bC * qC + CC[QC]) - (wC = pC(nC / zC)) * zC, oC[QC] = 0 | wC;
          return [oC, 0 | bC]
        }

        function YC(CC, zC) {
          var QC, wC = OC(zC);
          if (nC) return [new FC(CC.value / wC.value), new FC(CC.value % wC.value)];
          var bC, WC = CC.value,
            PC = wC.value;
          if (0 === PC) throw new Error("Cannot divide by zero");
          if (CC.isSmall) return wC.isSmall ? [new qC(pC(WC / PC)), new qC(WC % PC)] : [fC[0], CC];
          if (wC.isSmall) {
            if (1 === PC) return [CC, fC[0]];
            if (-1 == PC) return [CC.Of(), fC[0]];
            var GC = Math.abs(PC);
            if (GC < ZC) {
              bC = MC((QC = KC(WC, GC))[0]);
              var RC = QC[1];
              return CC.sign && (RC = -RC), "number" === typeof bC ? (CC.sign !== wC.sign && (bC = -bC), [new qC(bC), new qC(RC)]) : [new oC(bC, CC.sign !== wC.sign), new qC(RC)]
            }
            PC = NC(GC)
          }
          var xC = dC(WC, PC);
          if (-1 === xC) return [fC[0], CC];
          if (0 === xC) return [fC[CC.sign === wC.sign ? 1 : -1], fC[0]];
          QC = WC.length + PC.length <= 200 ? function(CC, zC) {
            var QC, wC, bC, nC, fC, oC, qC, FC = CC.length,
              WC = zC.length,
              NC = ZC,
              gC = SC(zC.length),
              pC = zC[WC - 1],
              PC = Math.ceil(NC / (2 * pC)),
              GC = IC(CC, PC),
              RC = IC(zC, PC);
            for (GC.length <= FC && GC.push(0), RC.push(0), pC = RC[WC - 1], wC = FC - WC; wC >= 0; wC--) {
              for (QC = NC - 1, GC[wC + WC] !== pC && (QC = Math.floor((GC[wC + WC] * NC + GC[wC + WC - 1]) / pC)), bC = 0, nC = 0, oC = RC.length, fC = 0; fC < oC; fC++) bC += QC * RC[fC], qC = Math.floor(bC / NC), nC += GC[wC + fC] - (bC - qC * NC), bC = qC, nC < 0 ? (GC[wC + fC] = nC + NC, nC = -1) : (GC[wC + fC] = nC, nC = 0);
              for (; 0 !== nC;) {
                for (QC -= 1, bC = 0, fC = 0; fC < oC; fC++)(bC += GC[wC + fC] - NC + RC[fC]) < 0 ? (GC[wC + fC] = bC + NC, bC = 0) : (GC[wC + fC] = bC, bC = 1);
                nC += bC
              }
              gC[wC] = QC
            }
            return GC = KC(GC, PC)[0], [MC(gC), MC(GC)]
          }(WC, PC) : function(CC, zC) {
            for (var QC, wC, bC, nC, fC, oC = CC.length, qC = zC.length, FC = [], WC = [], NC = ZC; oC;)
              if (WC.unshift(CC[--oC]), gC(WC), dC(WC, zC) < 0) FC.push(0);
              else {
                bC = WC[(wC = WC.length) - 1] * NC + WC[wC - 2], nC = zC[qC - 1] * NC + zC[qC - 2], wC > qC && (bC = (bC + 1) * NC), QC = Math.ceil(bC / nC);
                do {
                  if (dC(fC = IC(zC, QC), WC) <= 0) break;
                  QC--
                } while (QC);
                FC.push(QC), WC = AC(WC, fC)
              } return FC.reverse(), [MC(FC), MC(WC)]
          }(WC, PC), bC = QC[0];
          var JC = CC.sign !== wC.sign,
            iC = QC[1],
            vC = CC.sign;
          return "number" === typeof bC ? (JC && (bC = -bC), bC = new qC(bC)) : bC = new oC(bC, JC), "number" === typeof iC ? (vC && (iC = -iC), iC = new qC(iC)) : iC = new oC(iC, vC), [bC, iC]
        }

        function dC(CC, zC) {
          if (CC.length !== zC.length) return CC.length > zC.length ? 1 : -1;
          for (var ZC = CC.length - 1; ZC >= 0; ZC--)
            if (CC[ZC] !== zC[ZC]) return CC[ZC] > zC[ZC] ? 1 : -1;
          return 0
        }

        function mC(CC) {
          var zC = CC.abs();
          return !zC.isUnit() && (!!(zC.equals(2) || zC.equals(3) || zC.equals(5)) || !(zC.isEven() || zC.isDivisibleBy(3) || zC.isDivisibleBy(5)) && (!!zC.lesser(49) || void 0))
        }

        function HC(CC, ZC) {
          for (var QC, wC, bC, nC = CC.prev(), fC = nC, oC = 0; fC.isEven();) fC = fC.divide(2), oC++;
          CC: for (wC = 0; wC < ZC.length; wC++)
            if (!CC.lesser(ZC[wC]) && !(bC = zC(ZC[wC]).modPow(fC, CC)).isUnit() && !bC.equals(nC)) {
              for (QC = oC - 1; 0 != QC; QC--) {
                if ((bC = bC.square().mod(CC)).isUnit()) return !1;
                if (bC.equals(nC)) continue CC
              }
              return !1
            }
          return !0
        }
        oC.prototype = Object.create(fC.prototype), qC.prototype = Object.create(fC.prototype), FC.prototype = Object.create(fC.prototype), oC.prototype.add = function(CC) {
          var zC = OC(CC);
          if (this.sign !== zC.sign) return this.subtract(zC.Of());
          var ZC = this.value,
            QC = zC.value;
          return zC.isSmall ? new oC(RC(ZC, Math.abs(QC)), this.sign) : new oC(GC(ZC, QC), this.sign)
        }, oC.prototype.plus = oC.prototype.add, qC.prototype.add = function(CC) {
          var zC = OC(CC),
            ZC = this.value;
          if (ZC < 0 !== zC.sign) return this.subtract(zC.Of());
          var QC = zC.value;
          if (zC.isSmall) {
            if (WC(ZC + QC)) return new qC(ZC + QC);
            QC = NC(Math.abs(QC))
          }
          return new oC(RC(QC, Math.abs(ZC)), ZC < 0)
        }, qC.prototype.plus = qC.prototype.add, FC.prototype.add = function(CC) {
          return new FC(this.value + OC(CC).value)
        }, FC.prototype.plus = FC.prototype.add, oC.prototype.subtract = function(CC) {
          var zC = OC(CC);
          if (this.sign !== zC.sign) return this.add(zC.Of());
          var ZC = this.value,
            QC = zC.value;
          return zC.isSmall ? xC(ZC, Math.abs(QC), this.sign) : function(CC, zC, ZC) {
            var QC;
            return dC(CC, zC) >= 0 ? QC = AC(CC, zC) : (QC = AC(zC, CC), ZC = !ZC), "number" === typeof(QC = MC(QC)) ? (ZC && (QC = -QC), new qC(QC)) : new oC(QC, ZC)
          }(ZC, QC, this.sign)
        }, oC.prototype.minus = oC.prototype.subtract, qC.prototype.subtract = function(CC) {
          var zC = OC(CC),
            ZC = this.value;
          if (ZC < 0 !== zC.sign) return this.add(zC.Of());
          var QC = zC.value;
          return zC.isSmall ? new qC(ZC - QC) : xC(QC, Math.abs(ZC), ZC >= 0)
        }, qC.prototype.minus = qC.prototype.subtract, FC.prototype.subtract = function(CC) {
          return new FC(this.value - OC(CC).value)
        }, FC.prototype.minus = FC.prototype.subtract, oC.prototype.Of = function() {
          return new oC(this.value, !this.sign)
        }, qC.prototype.Of = function() {
          var CC = this.sign,
            zC = new qC(-this.value);
          return zC.sign = !CC, zC
        }, FC.prototype.Of = function() {
          return new FC(-this.value)
        }, oC.prototype.abs = function() {
          return new oC(this.value, !1)
        }, qC.prototype.abs = function() {
          return new qC(Math.abs(this.value))
        }, FC.prototype.abs = function() {
          return new FC(this.value >= 0 ? this.value : -this.value)
        }, oC.prototype.multiply = function(CC) {
          var zC, QC, wC, bC = OC(CC),
            nC = this.value,
            qC = bC.value,
            FC = this.sign !== bC.sign;
          if (bC.isSmall) {
            if (0 === qC) return fC[0];
            if (1 === qC) return this;
            if (-1 === qC) return this.Of();
            if ((zC = Math.abs(qC)) < ZC) return new oC(IC(nC, zC), FC);
            qC = NC(zC)
          }
          return QC = nC.length, wC = qC.length, new oC(-.012 * QC - .012 * wC + 15e-6 * QC * wC > 0 ? vC(nC, qC) : JC(nC, qC), FC)
        }, oC.prototype.times = oC.prototype.multiply, qC.prototype._multiplyBySmall = function(CC) {
          return WC(CC.value * this.value) ? new qC(CC.value * this.value) : eC(Math.abs(CC.value), NC(Math.abs(this.value)), this.sign !== CC.sign)
        }, oC.prototype._multiplyBySmall = function(CC) {
          return 0 === CC.value ? fC[0] : 1 === CC.value ? this : -1 === CC.value ? this.Of() : eC(Math.abs(CC.value), this.value, this.sign !== CC.sign)
        }, qC.prototype.multiply = function(CC) {
          return OC(CC)._multiplyBySmall(this)
        }, qC.prototype.times = qC.prototype.multiply, FC.prototype.multiply = function(CC) {
          return new FC(this.value * OC(CC).value)
        }, FC.prototype.times = FC.prototype.multiply, oC.prototype.square = function() {
          return new oC(hC(this.value), !1)
        }, qC.prototype.square = function() {
          var CC = this.value * this.value;
          return WC(CC) ? new qC(CC) : new oC(hC(NC(Math.abs(this.value))), !1)
        }, FC.prototype.square = function(CC) {
          return new FC(this.value * this.value)
        }, oC.prototype.divmod = function(CC) {
          var zC = YC(this, CC);
          return {
            quotient: zC[0],
            remainder: zC[1]
          }
        }, FC.prototype.divmod = qC.prototype.divmod = oC.prototype.divmod, oC.prototype.divide = function(CC) {
          return YC(this, CC)[0]
        }, FC.prototype.over = FC.prototype.divide = function(CC) {
          return new FC(this.value / OC(CC).value)
        }, qC.prototype.over = qC.prototype.divide = oC.prototype.over = oC.prototype.divide, oC.prototype.mod = function(CC) {
          return YC(this, CC)[1]
        }, FC.prototype.mod = FC.prototype.remainder = function(CC) {
          return new FC(this.value % OC(CC).value)
        }, qC.prototype.remainder = qC.prototype.mod = oC.prototype.remainder = oC.prototype.mod, oC.prototype.pow = function(CC) {
          var zC, ZC, QC, wC = OC(CC),
            bC = this.value,
            nC = wC.value;
          if (0 === nC) return fC[1];
          if (0 === bC) return fC[0];
          if (1 === bC) return fC[1];
          if (-1 === bC) return wC.isEven() ? fC[1] : fC[-1];
          if (wC.sign) return fC[0];
          if (!wC.isSmall) throw new Error("The exponent " + wC.toString() + " is too large.");
          if (this.isSmall && WC(zC = Math.pow(bC, nC))) return new qC(pC(zC));
          for (ZC = this, QC = fC[1]; !0 & nC && (QC = QC.times(ZC), --nC), 0 !== nC;) nC /= 2, ZC = ZC.square();
          return QC
        }, qC.prototype.pow = oC.prototype.pow, FC.prototype.pow = function(CC) {
          var zC = OC(CC),
            ZC = this.value,
            QC = zC.value,
            wC = BigInt(0),
            bC = BigInt(1),
            nC = BigInt(2);
          if (QC === wC) return fC[1];
          if (ZC === wC) return fC[0];
          if (ZC === bC) return fC[1];
          if (ZC === BigInt(-1)) return zC.isEven() ? fC[1] : fC[-1];
          if (zC.isNegative()) return new FC(wC);
          for (var oC = this, qC = fC[1];
            (QC & bC) === bC && (qC = qC.times(oC), --QC), QC !== wC;) QC /= nC, oC = oC.square();
          return qC
        }, oC.prototype.modPow = function(CC, zC) {
          if (CC = OC(CC), (zC = OC(zC)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var ZC = fC[1],
            QC = this.mod(zC);
          for (CC.isNegative() && (CC = CC.multiply(fC[-1]), QC = QC.modInv(zC)); CC.isPositive();) {
            if (QC.isZero()) return fC[0];
            CC.isOdd() && (ZC = ZC.multiply(QC).mod(zC)), CC = CC.divide(2), QC = QC.square().mod(zC)
          }
          return ZC
        }, FC.prototype.modPow = qC.prototype.modPow = oC.prototype.modPow, oC.prototype.compareAbs = function(CC) {
          var zC = OC(CC),
            ZC = this.value,
            QC = zC.value;
          return zC.isSmall ? 1 : dC(ZC, QC)
        }, qC.prototype.compareAbs = function(CC) {
          var zC = OC(CC),
            ZC = Math.abs(this.value),
            QC = zC.value;
          return zC.isSmall ? ZC === (QC = Math.abs(QC)) ? 0 : ZC > QC ? 1 : -1 : -1
        }, FC.prototype.compareAbs = function(CC) {
          var zC = this.value,
            ZC = OC(CC).value;
          return (zC = zC >= 0 ? zC : -zC) === (ZC = ZC >= 0 ? ZC : -ZC) ? 0 : zC > ZC ? 1 : -1
        }, oC.prototype.compare = function(CC) {
          if (CC === 1 / 0) return -1;
          if (CC === -1 / 0) return 1;
          var zC = OC(CC),
            ZC = this.value,
            QC = zC.value;
          return this.sign !== zC.sign ? zC.sign ? 1 : -1 : zC.isSmall ? this.sign ? -1 : 1 : dC(ZC, QC) * (this.sign ? -1 : 1)
        }, oC.prototype.compareTo = oC.prototype.compare, qC.prototype.compare = function(CC) {
          if (CC === 1 / 0) return -1;
          if (CC === -1 / 0) return 1;
          var zC = OC(CC),
            ZC = this.value,
            QC = zC.value;
          return zC.isSmall ? ZC == QC ? 0 : ZC > QC ? 1 : -1 : ZC < 0 !== zC.sign ? ZC < 0 ? -1 : 1 : ZC < 0 ? 1 : -1
        }, qC.prototype.compareTo = qC.prototype.compare, FC.prototype.compare = function(CC) {
          if (CC === 1 / 0) return -1;
          if (CC === -1 / 0) return 1;
          var zC = this.value,
            ZC = OC(CC).value;
          return zC === ZC ? 0 : zC > ZC ? 1 : -1
        }, FC.prototype.compareTo = FC.prototype.compare, oC.prototype.equals = function(CC) {
          return 0 === this.compare(CC)
        }, FC.prototype.eq = FC.prototype.equals = qC.prototype.eq = qC.prototype.equals = oC.prototype.eq = oC.prototype.equals, oC.prototype.notEquals = function(CC) {
          return 0 !== this.compare(CC)
        }, FC.prototype.neq = FC.prototype.notEquals = qC.prototype.neq = qC.prototype.notEquals = oC.prototype.neq = oC.prototype.notEquals, oC.prototype.greater = function(CC) {
          return this.compare(CC) > 0
        }, FC.prototype.gt = FC.prototype.greater = qC.prototype.gt = qC.prototype.greater = oC.prototype.gt = oC.prototype.greater, oC.prototype.lesser = function(CC) {
          return this.compare(CC) < 0
        }, FC.prototype.lt = FC.prototype.lesser = qC.prototype.lt = qC.prototype.lesser = oC.prototype.lt = oC.prototype.lesser, oC.prototype.greaterOrEquals = function(CC) {
          return this.compare(CC) >= 0
        }, FC.prototype.geq = FC.prototype.greaterOrEquals = qC.prototype.geq = qC.prototype.greaterOrEquals = oC.prototype.geq = oC.prototype.greaterOrEquals, oC.prototype.lesserOrEquals = function(CC) {
          return this.compare(CC) <= 0
        }, FC.prototype.leq = FC.prototype.lesserOrEquals = qC.prototype.leq = qC.prototype.lesserOrEquals = oC.prototype.leq = oC.prototype.lesserOrEquals, oC.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, qC.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, FC.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, oC.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, qC.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, FC.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, oC.prototype.isPositive = function() {
          return !this.sign
        }, qC.prototype.isPositive = function() {
          return this.value > 0
        }, FC.prototype.isPositive = qC.prototype.isPositive, oC.prototype.isNegative = function() {
          return this.sign
        }, qC.prototype.isNegative = function() {
          return this.value < 0
        }, FC.prototype.isNegative = qC.prototype.isNegative, oC.prototype.isUnit = function() {
          return !1
        }, qC.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, FC.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, oC.prototype.isZero = function() {
          return !1
        }, qC.prototype.isZero = function() {
          return 0 === this.value
        }, FC.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, oC.prototype.isDivisibleBy = function(CC) {
          var zC = OC(CC);
          return !zC.isZero() && (!!zC.isUnit() || (0 === zC.compareAbs(2) ? this.isEven() : this.mod(zC).isZero()))
        }, FC.prototype.isDivisibleBy = qC.prototype.isDivisibleBy = oC.prototype.isDivisibleBy, oC.prototype.isPrime = function(ZC) {
          var QC = mC(this);
          if (QC !== CC) return QC;
          var wC = this.abs(),
            bC = wC.bitLength();
          if (bC <= 64) return HC(wC, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var nC = Math.log(2) * bC.toJSNumber(), fC = Math.ceil(!0 === ZC ? 2 * Math.pow(nC, 2) : nC), oC = [], qC = 0; qC < fC; qC++) oC.push(zC(qC + 2));
          return HC(wC, oC)
        }, FC.prototype.isPrime = qC.prototype.isPrime = oC.prototype.isPrime, oC.prototype.isProbablePrime = function(ZC, QC) {
          var wC = mC(this);
          if (wC !== CC) return wC;
          for (var bC = this.abs(), nC = ZC === CC ? 5 : ZC, fC = [], oC = 0; oC < nC; oC++) fC.push(zC.randBetween(2, bC.minus(2), QC));
          return HC(bC, fC)
        }, FC.prototype.isProbablePrime = qC.prototype.isProbablePrime = oC.prototype.isProbablePrime, oC.prototype.modInv = function(CC) {
          for (var ZC, QC, wC, bC = zC.zero, nC = zC.one, fC = OC(CC), oC = this.abs(); !oC.isZero();) ZC = fC.divide(oC), QC = bC, wC = fC, bC = nC, fC = oC, nC = QC.subtract(ZC.multiply(nC)), oC = wC.subtract(ZC.multiply(oC));
          if (!fC.isUnit()) throw new Error(this.toString() + " and " + CC.toString() + " are not co-prime");
          return -1 === bC.compare(0) && (bC = bC.add(CC)), this.isNegative() ? bC.Of() : bC
        }, FC.prototype.modInv = qC.prototype.modInv = oC.prototype.modInv, oC.prototype.next = function() {
          var CC = this.value;
          return this.sign ? xC(CC, 1, this.sign) : new oC(RC(CC, 1), this.sign)
        }, qC.prototype.next = function() {
          var CC = this.value;
          return CC + 1 < QC ? new qC(CC + 1) : new oC(wC, !1)
        }, FC.prototype.next = function() {
          return new FC(this.value + BigInt(1))
        }, oC.prototype.prev = function() {
          var CC = this.value;
          return this.sign ? new oC(RC(CC, 1), !0) : xC(CC, 1, this.sign)
        }, qC.prototype.prev = function() {
          var CC = this.value;
          return CC - 1 > -QC ? new qC(CC - 1) : new oC(wC, !0)
        }, FC.prototype.prev = function() {
          return new FC(this.value - BigInt(1))
        };
        for (var EC = [1]; 2 * EC[EC.length - 1] <= ZC;) EC.push(2 * EC[EC.length - 1]);
        var lC = EC.length,
          XC = EC[lC - 1];

        function cC(CC) {
          return Math.abs(CC) <= ZC
        }

        function uC(CC, ZC, QC) {
          ZC = OC(ZC);
          for (var wC = CC.isNegative(), bC = ZC.isNegative(), nC = wC ? CC.not() : CC, fC = bC ? ZC.not() : ZC, oC = 0, qC = 0, FC = null, WC = null, NC = []; !nC.isZero() || !fC.isZero();) oC = (FC = YC(nC, XC))[1].toJSNumber(), wC && (oC = XC - 1 - oC), qC = (WC = YC(fC, XC))[1].toJSNumber(), bC && (qC = XC - 1 - qC), nC = FC[0], fC = WC[0], NC.push(QC(oC, qC));
          for (var MC = 0 !== QC(wC ? 1 : 0, bC ? 1 : 0) ? zC(-1) : zC(0), gC = NC.length - 1; gC >= 0; gC -= 1) MC = MC.multiply(XC).add(zC(NC[gC]));
          return MC
        }
        oC.prototype.shiftLeft = function(CC) {
          var zC = OC(CC).toJSNumber();
          if (!cC(zC)) throw new Error(String(zC) + " is too large for shifting.");
          if (zC < 0) return this.shiftRight(-zC);
          var ZC = this;
          if (ZC.isZero()) return ZC;
          for (; zC >= lC;) ZC = ZC.multiply(XC), zC -= lC - 1;
          return ZC.multiply(EC[zC])
        }, FC.prototype.shiftLeft = qC.prototype.shiftLeft = oC.prototype.shiftLeft, oC.prototype.shiftRight = function(CC) {
          var zC, ZC = OC(CC).toJSNumber();
          if (!cC(ZC)) throw new Error(String(ZC) + " is too large for shifting.");
          if (ZC < 0) return this.shiftLeft(-ZC);
          for (var QC = this; ZC >= lC;) {
            if (QC.isZero() || QC.isNegative() && QC.isUnit()) return QC;
            QC = (zC = YC(QC, XC))[1].isNegative() ? zC[0].prev() : zC[0], ZC -= lC - 1
          }
          return (zC = YC(QC, EC[ZC]))[1].isNegative() ? zC[0].prev() : zC[0]
        }, FC.prototype.shiftRight = qC.prototype.shiftRight = oC.prototype.shiftRight, oC.prototype.not = function() {
          return this.Of().prev()
        }, FC.prototype.not = qC.prototype.not = oC.prototype.not, oC.prototype.and = function(CC) {
          return uC(this, CC, (function(CC, zC) {
            return CC & zC
          }))
        }, FC.prototype.and = qC.prototype.and = oC.prototype.and, oC.prototype.or = function(CC) {
          return uC(this, CC, (function(CC, zC) {
            return CC | zC
          }))
        }, FC.prototype.or = qC.prototype.or = oC.prototype.or, oC.prototype.xor = function(CC) {
          return uC(this, CC, (function(CC, zC) {
            return CC ^ zC
          }))
        }, FC.prototype.xor = qC.prototype.xor = oC.prototype.xor;
        var rC = 1 << 30;

        function sC(CC) {
          var zC = CC.value,
            QC = "number" === typeof zC ? zC | rC : "bigint" === typeof zC ? zC | BigInt(rC) : zC[0] + zC[1] * ZC | 1073758208;
          return QC & -QC
        }

        function TC(CC, ZC) {
          if (ZC.compareTo(CC) <= 0) {
            var QC = TC(CC, ZC.square(ZC)),
              wC = QC.p,
              bC = QC.e,
              nC = wC.multiply(ZC);
            return nC.compareTo(CC) <= 0 ? {
              p: nC,
              e: 2 * bC + 1
            } : {
              p: wC,
              e: 2 * bC
            }
          }
          return {
            p: zC(1),
            e: 0
          }
        }

        function aC(CC, zC) {
          return CC = OC(CC), zC = OC(zC), CC.greater(zC) ? CC : zC
        }

        function tC(CC, zC) {
          return CC = OC(CC), zC = OC(zC), CC.lesser(zC) ? CC : zC
        }

        function DC(CC, zC) {
          if (CC = OC(CC).abs(), zC = OC(zC).abs(), CC.equals(zC)) return CC;
          if (CC.isZero()) return zC;
          if (zC.isZero()) return CC;
          for (var ZC, QC, wC = fC[1]; CC.isEven() && zC.isEven();) ZC = tC(sC(CC), sC(zC)), CC = CC.divide(ZC), zC = zC.divide(ZC), wC = wC.multiply(ZC);
          for (; CC.isEven();) CC = CC.divide(sC(CC));
          do {
            for (; zC.isEven();) zC = zC.divide(sC(zC));
            CC.greater(zC) && (QC = zC, zC = CC, CC = QC), zC = zC.subtract(CC)
          } while (!zC.isZero());
          return wC.isUnit() ? CC : CC.multiply(wC)
        }
        oC.prototype.bitLength = function() {
          var CC = this;
          return CC.compareTo(zC(0)) < 0 && (CC = CC.Of().subtract(zC(1))), 0 === CC.compareTo(zC(0)) ? zC(0) : zC(TC(CC, zC(2)).e).add(zC(1))
        }, FC.prototype.bitLength = qC.prototype.bitLength = oC.prototype.bitLength;
        var jC = function(CC, zC, ZC, QC) {
          ZC = ZC || bC, CC = String(CC), QC || (CC = CC.toLowerCase(), ZC = ZC.toLowerCase());
          var wC, nC = CC.length,
            fC = Math.abs(zC),
            oC = {};
          for (wC = 0; wC < ZC.length; wC++) oC[ZC[wC]] = wC;
          for (wC = 0; wC < nC; wC++) {
            if ("-" !== (WC = CC[wC]) && (WC in oC && oC[WC] >= fC)) {
              if ("1" === WC && 1 === fC) continue;
              throw new Error(WC + " is not a valid digit in base " + zC + ".")
            }
          }
          zC = OC(zC);
          var qC = [],
            FC = "-" === CC[0];
          for (wC = FC ? 1 : 0; wC < CC.length; wC++) {
            var WC;
            if ((WC = CC[wC]) in oC) qC.push(OC(oC[WC]));
            else {
              if ("<" !== WC) throw new Error(WC + " is not a valid character");
              var NC = wC;
              do {
                wC++
              } while (">" !== CC[wC] && wC < CC.length);
              qC.push(OC(CC.slice(NC + 1, wC)))
            }
          }
          return yC(qC, zC, FC)
        };

        function yC(CC, zC, ZC) {
          var QC, wC = fC[0],
            bC = fC[1];
          for (QC = CC.length - 1; QC >= 0; QC--) wC = wC.add(CC[QC].times(bC)), bC = bC.times(zC);
          return ZC ? wC.Of() : wC
        }

        function LC(CC, ZC) {
          if ((ZC = zC(ZC)).isZero()) {
            if (CC.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (ZC.equals(-1)) {
            if (CC.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (CC.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-CC.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var QC = Array.apply(null, Array(CC.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return QC.unshift([1]), {
              value: [].concat.apply([], QC),
              isNegative: !1
            }
          }
          var wC = !1;
          if (CC.isNegative() && ZC.isPositive() && (wC = !0, CC = CC.abs()), ZC.isUnit()) return CC.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(CC.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: wC
          };
          for (var bC, nC = [], fC = CC; fC.isNegative() || fC.compareAbs(ZC) >= 0;) {
            bC = fC.divmod(ZC), fC = bC.quotient;
            var oC = bC.remainder;
            oC.isNegative() && (oC = ZC.minus(oC).abs(), fC = fC.next()), nC.push(oC.toJSNumber())
          }
          return nC.push(fC.toJSNumber()), {
            value: nC.reverse(),
            isNegative: wC
          }
        }

        function UC(CC, zC, ZC) {
          var QC = LC(CC, zC);
          return (QC.isNegative ? "-" : "") + QC.value.map((function(CC) {
            return function(CC, zC) {
              return CC < (zC = zC || bC).length ? zC[CC] : "<" + CC + ">"
            }(CC, ZC)
          })).join("")
        }

        function BC(CC) {
          if (WC(+CC)) {
            var zC = +CC;
            if (zC === pC(zC)) return nC ? new FC(BigInt(zC)) : new qC(zC);
            throw new Error("Invalid integer: " + CC)
          }
          var ZC = "-" === CC[0];
          ZC && (CC = CC.slice(1));
          var QC = CC.split(/e/i);
          if (QC.length > 2) throw new Error("Invalid integer: " + QC.join("e"));
          if (2 === QC.length) {
            var wC = QC[1];
            if ("+" === wC[0] && (wC = wC.slice(1)), (wC = +wC) !== pC(wC) || !WC(wC)) throw new Error("Invalid integer: " + wC + " is not a valid exponent.");
            var bC = QC[0],
              fC = bC.indexOf(".");
            if (fC >= 0 && (wC -= bC.length - fC - 1, bC = bC.slice(0, fC) + bC.slice(fC + 1)), wC < 0) throw new Error("Cannot include negative exponent part for integers");
            CC = bC += new Array(wC + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(CC)) throw new Error("Invalid integer: " + CC);
          if (nC) return new FC(BigInt(ZC ? "-" + CC : CC));
          for (var NC = [], MC = CC.length, SC = MC - 7; MC > 0;) NC.push(+CC.slice(SC, MC)), (SC -= 7) < 0 && (SC = 0), MC -= 7;
          return gC(NC), new oC(NC, ZC)
        }

        function OC(CC) {
          return "number" === typeof CC ? function(CC) {
            if (nC) return new FC(BigInt(CC));
            if (WC(CC)) {
              if (CC !== pC(CC)) throw new Error(CC + " is not an integer.");
              return new qC(CC)
            }
            return BC(CC.toString())
          }(CC) : "string" === typeof CC ? BC(CC) : "bigint" === typeof CC ? new FC(CC) : CC
        }
        oC.prototype.toArray = function(CC) {
          return LC(this, CC)
        }, qC.prototype.toArray = function(CC) {
          return LC(this, CC)
        }, FC.prototype.toArray = function(CC) {
          return LC(this, CC)
        }, oC.prototype.toString = function(zC, ZC) {
          if (zC === CC && (zC = 10), 10 !== zC) return UC(this, zC, ZC);
          for (var QC, wC = this.value, bC = wC.length, nC = String(wC[--bC]); --bC >= 0;) QC = String(wC[bC]), nC += "0000000".slice(QC.length) + QC;
          return (this.sign ? "-" : "") + nC
        }, qC.prototype.toString = function(zC, ZC) {
          return zC === CC && (zC = 10), 10 != zC ? UC(this, zC, ZC) : String(this.value)
        }, FC.prototype.toString = qC.prototype.toString, FC.prototype.toJSON = oC.prototype.toJSON = qC.prototype.toJSON = function() {
          return this.toString()
        }, oC.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, oC.prototype.toJSNumber = oC.prototype.valueOf, qC.prototype.valueOf = function() {
          return this.value
        }, qC.prototype.toJSNumber = qC.prototype.valueOf, FC.prototype.valueOf = FC.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var kC = 0; kC < 1e3; kC++) fC[kC] = OC(kC), kC > 0 && (fC[-kC] = OC(-kC));
        return fC.one = fC[1], fC.zero = fC[0], fC.minusOne = fC[-1], fC.max = aC, fC.min = tC, fC.gcd = DC, fC.lcm = function(CC, zC) {
          return CC = OC(CC).abs(), zC = OC(zC).abs(), CC.divide(DC(CC, zC)).multiply(zC)
        }, fC.isInstance = function(CC) {
          return CC instanceof oC || CC instanceof qC || CC instanceof FC
        }, fC.randBetween = function(CC, zC, QC) {
          CC = OC(CC), zC = OC(zC);
          var wC = QC || Math.random,
            bC = tC(CC, zC),
            nC = aC(CC, zC).subtract(bC).add(1);
          if (nC.isSmall) return bC.add(Math.floor(wC() * nC));
          for (var oC = LC(nC, ZC).value, qC = [], FC = !0, WC = 0; WC < oC.length; WC++) {
            var NC = FC ? oC[WC] : ZC,
              MC = pC(wC() * NC);
            qC.push(MC), MC < NC && (FC = !1)
          }
          return bC.add(fC.azC(qC, ZC, !1))
        }, fC.azC = function(CC, zC, ZC) {
          return yC(CC.map(OC), OC(zC || 10), ZC)
        }, fC
      }();
      CC.hasOwnProperty("exports") && (CC.exports = zC)
    }(GZ);
    var RZ = bC(GZ.exports);

    function AZ(CC, zC, ZC) {
      let QC = 0;
      for (let wC = 0; wC < ZC; wC++) {
        const ZC = CC[zC + wC];
        if (void 0 === ZC) break;
        QC += ZC * 16 ** wC
      }
      return QC
    }

    function xZ(CC) {
      const zC = [];
      for (let ZC = 0; ZC < CC.length; ZC++) {
        let QC = Number(CC[ZC]);
        for (let CC = 0; QC || CC < zC.length; CC++) QC += 10 * (zC[CC] || 0), zC[CC] = QC % 16, QC = (QC - zC[CC]) / 16
      }
      return zC
    }
    class JZ {
      static fromString(CC) {
        return new JZ(function(CC) {
          const zC = xZ(CC),
            ZC = Array(4);
          for (let QC = 0; QC < 4; QC++) ZC[3 - QC] = AZ(zC, 4 * QC, 4);
          return ZC
        }(CC), CC)
      }
      static fromBit(CC) {
        const zC = Array(4),
          ZC = Math.floor(CC / 16);
        for (let QC = 0; QC < 4; QC++) zC[3 - QC] = QC === ZC ? 1 << CC - 16 * ZC : 0;
        return new JZ(zC)
      }
      constructor(CC, zC) {
        this.parts = CC, this.str = zC
      }
      and(CC) {
        let {
          parts: zC
        } = CC;
        return new JZ(this.parts.map(((CC, ZC) => CC & zC[ZC])))
      }
      or(CC) {
        let {
          parts: zC
        } = CC;
        return new JZ(this.parts.map(((CC, ZC) => CC | zC[ZC])))
      }
      xor(CC) {
        let {
          parts: zC
        } = CC;
        return new JZ(this.parts.map(((CC, ZC) => CC ^ zC[ZC])))
      }
      not() {
        return new JZ(this.parts.map((CC => ~CC)))
      }
      equals(CC) {
        let {
          parts: zC
        } = CC;
        return this.parts.every(((CC, ZC) => CC === zC[ZC]))
      }
      toString() {
        if (null != this.str) return this.str;
        const CC = new Array(16);
        return this.parts.forEach(((zC, ZC) => {
          const QC = xZ(zC.toString());
          for (let wC = 0; wC < 4; wC++) CC[wC + 4 * ZC] = QC[3 - wC] || 0
        })), this.str = RZ.azC(CC, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const IZ = function() {
      try {
        return BigInt, !0
      } catch (CC) {
        return !1
      }
    }();
    IZ && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const iZ = {},
      vZ = IZ ? function(CC) {
        return BigInt(CC)
      } : function(CC) {
        return CC instanceof JZ ? CC : ("number" === typeof CC && (CC = CC.toString()), null != iZ[CC] || (iZ[CC] = JZ.fromString(CC)), iZ[CC])
      },
      eZ = vZ(0),
      hZ = IZ ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ)
      } : function() {
        let CC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ).and(CC)
      },
      KZ = IZ ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ)
      } : function() {
        let CC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ).or(CC)
      },
      YZ = IZ ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ)
      } : function() {
        let CC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eZ;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ).xor(CC)
      },
      dZ = IZ ? function(CC, zC) {
        return CC === zC
      } : function(CC, zC) {
        return null == CC || null == zC ? CC == zC : CC.equals(zC)
      };
    var mZ, HZ, EZ, lZ, XZ = {
      combine: function() {
        let CC = arguments.length <= 0 ? void 0 : arguments[0];
        for (let zC = 1; zC < arguments.length; zC++) CC = KZ(CC, zC < 0 || arguments.length <= zC ? void 0 : arguments[zC]);
        return CC
      },
      add: function(CC, zC) {
        return zC === eZ ? CC : KZ(CC, zC)
      },
      remove: function(CC, zC) {
        return zC === eZ ? CC : YZ(CC, hZ(CC, zC))
      },
      filter: hZ,
      invert: IZ ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : eZ).not()
      },
      has: function(CC, zC) {
        return dZ(hZ(CC, zC), zC)
      },
      hasAny: function(CC, zC) {
        return !dZ(hZ(CC, zC), eZ)
      },
      equals: dZ,
      deserialize: vZ,
      getFlag: IZ ? function(CC) {
        return BigInt(1) << BigInt(CC)
      } : function(CC) {
        return JZ.fromBit(CC)
      }
    };
    ! function(CC) {
      CC[CC.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", CC[CC.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", CC[CC.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", CC[CC.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", CC[CC.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", CC[CC.RATELIMITED = 4002] = "RATELIMITED", CC[CC.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", CC[CC.INVALID_VERSION = 4004] = "INVALID_VERSION", CC[CC.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(mZ || (mZ = {})),
    function(CC) {
      CC[CC.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", CC[CC.INVALID_COMMAND = 4002] = "INVALID_COMMAND", CC[CC.INVALID_EVENT = 4004] = "INVALID_EVENT", CC[CC.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(HZ || (HZ = {})),
    function(CC) {
      CC.LANDSCAPE = "landscape", CC.PORTRAIT = "portrait"
    }(EZ || (EZ = {})),
    function(CC) {
      CC.MOBILE = "mobile", CC.DESKTOP = "desktop"
    }(lZ || (lZ = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: XZ.getFlag(0),
      ADMINISTRATOR: XZ.getFlag(3)
    });

    function cZ(CC) {
      return MZ((zC => {
        var ZC;
        const [QC] = null !== (ZC = Object.entries(CC).find((CC => {
          let [, ZC] = CC;
          return ZC === zC
        }))) && void 0 !== ZC ? ZC : [];
        return null != zC && void 0 === QC ? CC.UNHANDLED : zC
      }), Ez().or(lz()))
    }
    const uZ = PZ.object({
        image_url: PZ.string()
      }),
      rZ = PZ.object({
        mediaUrl: PZ.string().max(1024)
      }),
      sZ = PZ.object({
        access_token: PZ.union([PZ.string(), PZ.null()]).optional()
      }),
      TZ = PZ.object({
        access_token: PZ.string(),
        user: PZ.object({
          username: PZ.string(),
          discriminator: PZ.string(),
          id: PZ.string(),
          avatar: PZ.union([PZ.string(), PZ.null()]).optional(),
          public_flags: PZ.number(),
          global_name: PZ.union([PZ.string(), PZ.null()]).optional()
        }),
        scopes: PZ.array(function(CC) {
          const zC = dz().transform((zC => {
            const ZC = CC.safeParse(zC);
            return ZC.success ? ZC.data : CC._def.defaultValue()
          }));
          return zC.overlayType = CC, zC
        }(PZ.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(PZ.literal(-1)).default(-1))),
        expires: PZ.string(),
        application: PZ.object({
          description: PZ.string(),
          icon: PZ.union([PZ.string(), PZ.null()]).optional(),
          id: PZ.string(),
          rpc_origins: PZ.array(PZ.string()).optional(),
          name: PZ.string()
        })
      }),
      aZ = PZ.object({
        participants: PZ.array(PZ.object({
          id: PZ.string(),
          username: PZ.string(),
          global_name: PZ.union([PZ.string(), PZ.null()]).optional(),
          discriminator: PZ.string(),
          avatar: PZ.union([PZ.string(), PZ.null()]).optional(),
          flags: PZ.number(),
          bot: PZ.boolean(),
          avatar_decoration_data: PZ.union([PZ.object({
            asset: PZ.string(),
            skuId: PZ.string().optional()
          }), PZ.null()]).optional(),
          premium_type: PZ.union([PZ.number(), PZ.null()]).optional(),
          nickname: PZ.string().optional()
        }))
      });
    var tZ;
    ! function(CC) {
      CC.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", CC.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", CC.AUTHENTICATE = "AUTHENTICATE", CC.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(tZ || (tZ = {}));
    const DZ = PZ.object({}).optional().nullable(),
      jZ = PZ.void(),
      yZ = {
        [tZ.INITIATE_IMAGE_UPLOAD]: {
          request: jZ,
          response: uZ
        },
        [tZ.OPEN_SHARE_MOMENT_DIALOG]: {
          request: rZ,
          response: DZ
        },
        [tZ.AUTHENTICATE]: {
          request: sZ,
          response: TZ
        },
        [tZ.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: jZ,
          response: aZ
        }
      },
      LZ = "DISPATCH";
    var UZ;
    ! function(CC) {
      CC.AUTHORIZE = "AUTHORIZE", CC.AUTHENTICATE = "AUTHENTICATE", CC.GET_GUILDS = "GET_GUILDS", CC.GET_GUILD = "GET_GUILD", CC.GET_CHANNEL = "GET_CHANNEL", CC.GET_CHANNELS = "GET_CHANNELS", CC.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", CC.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", CC.SUBSCRIBE = "SUBSCRIBE", CC.UNSUBSCRIBE = "UNSUBSCRIBE", CC.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", CC.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", CC.SET_ACTIVITY = "SET_ACTIVITY", CC.GET_SKUS = "GET_SKUS", CC.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", CC.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", CC.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", CC.START_PURCHASE = "START_PURCHASE", CC.SET_CONFIG = "SET_CONFIG", CC.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", CC.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", CC.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", CC.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", CC.CAPTURE_LOG = "CAPTURE_LOG", CC.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", CC.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", CC.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", CC.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", CC.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", CC.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", CC.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(UZ || (UZ = {}));
    const BZ = Uz({
        cmd: Ez(),
        data: Dz(),
        evt: az(),
        nonce: Ez()
      }).passthrough(),
      OZ = (cZ(Object.assign(Object.assign({}, TZ.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), Uz({
        id: Ez(),
        username: Ez(),
        discriminator: Ez(),
        global_name: Ez().optional().nullable(),
        avatar: Ez().optional().nullable(),
        avatar_decoration_data: Uz({
          asset: Ez(),
          sku_id: Ez().optional()
        }).nullable(),
        bot: uz(),
        flags: lz().optional().nullable(),
        premium_type: lz().optional().nullable()
      })),
      kZ = Uz({
        user: OZ,
        nick: Ez().optional().nullable(),
        roles: Lz(Ez()),
        joined_at: Ez(),
        deaf: uz(),
        mute: uz()
      }),
      VZ = Uz({
        id: Ez(),
        name: Ez().optional().nullable(),
        roles: Lz(Ez()).optional().nullable(),
        user: OZ.optional().nullable(),
        require_colons: uz().optional().nullable(),
        managed: uz().optional().nullable(),
        animated: uz().optional().nullable(),
        available: uz().optional().nullable()
      }),
      CQ = Uz({
        mute: uz(),
        deaf: uz(),
        self_mute: uz(),
        self_deaf: uz(),
        suppress: uz()
      }),
      zQ = Uz({
        mute: uz(),
        nick: Ez(),
        user: OZ,
        voice_state: CQ,
        volume: lz()
      }),
      ZQ = cZ({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      QQ = Uz({
        name: Ez(),
        type: lz(),
        url: Ez().optional().nullable(),
        created_at: lz().optional().nullable(),
        timestamps: Uz({
          start: lz(),
          end: lz()
        }).partial().optional().nullable(),
        application_id: Ez().optional().nullable(),
        details: Ez().optional().nullable(),
        state: Ez().optional().nullable(),
        emoji: VZ.optional().nullable(),
        party: Uz({
          id: Ez().optional().nullable(),
          size: Lz(lz()).optional().nullable()
        }).optional().nullable(),
        assets: Uz({
          large_image: Ez().nullable(),
          large_text: Ez().nullable(),
          small_image: Ez().nullable(),
          small_text: Ez().nullable()
        }).partial().optional().nullable(),
        secrets: Uz({
          join: Ez(),
          match: Ez()
        }).partial().optional().nullable(),
        instance: uz().optional().nullable(),
        flags: lz().optional().nullable()
      }),
      wQ = Uz({
        id: Ez(),
        type: cZ({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: Ez(),
        deny: Ez()
      }),
      bQ = {
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
      nQ = Uz({
        id: Ez(),
        type: cZ(bQ),
        guild_id: Ez().optional().nullable(),
        position: lz().optional().nullable(),
        permission_overwrites: Lz(wQ).optional().nullable(),
        name: Ez().optional().nullable(),
        topic: Ez().optional().nullable(),
        nsfw: uz().optional().nullable(),
        last_message_id: Ez().optional().nullable(),
        bitrate: lz().optional().nullable(),
        user_limit: lz().optional().nullable(),
        rate_limit_per_user: lz().optional().nullable(),
        recipients: Lz(OZ).optional().nullable(),
        icon: Ez().optional().nullable(),
        owner_id: Ez().optional().nullable(),
        application_id: Ez().optional().nullable(),
        parent_id: Ez().optional().nullable(),
        last_pin_timestamp: Ez().optional().nullable()
      }),
      fQ = Uz({
        user: OZ,
        guild_id: Ez(),
        status: ZQ,
        activities: Lz(QQ),
        client_status: Uz({
          desktop: ZQ,
          mobile: ZQ,
          web: ZQ
        }).partial()
      }),
      oQ = Uz({
        id: Ez(),
        name: Ez(),
        color: lz(),
        hoist: uz(),
        position: lz(),
        permissions: Ez(),
        managed: uz(),
        mentionable: uz()
      }),
      qQ = (Uz({
        id: Ez(),
        name: Ez(),
        owner_id: Ez(),
        icon: Ez().nullable(),
        icon_hash: Ez().optional().nullable(),
        splash: Ez().nullable(),
        discovery_splash: Ez().nullable(),
        owner: uz().optional().nullable(),
        permissions: Ez().optional().nullable(),
        region: Ez(),
        afk_channel_id: Ez().nullable(),
        afk_timeout: lz(),
        widget_enabled: uz().optional().nullable(),
        widget_channel_id: Ez().optional().nullable(),
        verification_level: lz(),
        default_message_notifications: lz(),
        explicit_content_filter: lz(),
        roles: Lz(oQ),
        emojis: Lz(VZ),
        features: Lz(Ez()),
        mfa_level: lz(),
        application_id: Ez().nullable(),
        system_channel_id: Ez().nullable(),
        system_channel_flags: lz(),
        rules_channel_id: Ez().nullable(),
        joined_at: Ez().optional().nullable(),
        large: uz().optional().nullable(),
        unavailable: uz().optional().nullable(),
        member_count: lz().optional().nullable(),
        voice_states: Lz(CQ).optional().nullable(),
        members: Lz(kZ).optional().nullable(),
        channels: Lz(nQ).optional().nullable(),
        presences: Lz(fQ).optional().nullable(),
        max_presences: lz().optional().nullable(),
        max_members: lz().optional().nullable(),
        vanity_url_code: Ez().nullable(),
        description: Ez().nullable(),
        banner: Ez().nullable(),
        premium_tier: lz(),
        premium_subscription_count: lz().optional().nullable(),
        preferred_locale: Ez(),
        public_updates_channel_id: Ez().nullable(),
        max_video_channel_users: lz().optional().nullable(),
        approximate_member_count: lz().optional().nullable(),
        approximate_presence_count: lz().optional().nullable()
      }), Uz({
        id: Ez(),
        guild_id: Ez(),
        type: lz(),
        name: Ez()
      })),
      FQ = Uz({
        id: Ez(),
        filename: Ez(),
        size: lz(),
        url: Ez(),
        proxy_url: Ez(),
        height: lz().optional().nullable(),
        width: lz().optional().nullable()
      }),
      WQ = Uz({
        text: Ez(),
        icon_url: Ez().optional().nullable(),
        proxy_icon_url: Ez().optional().nullable()
      }),
      NQ = Uz({
        url: Ez().optional().nullable(),
        proxy_url: Ez().optional().nullable(),
        height: lz().optional().nullable(),
        width: lz().optional().nullable()
      }),
      MQ = NQ.omit({
        proxy_url: !0
      }),
      gQ = Uz({
        name: Ez().optional().nullable(),
        url: Ez().optional().nullable()
      }),
      SQ = Uz({
        name: Ez().optional().nullable(),
        url: Ez().optional().nullable(),
        icon_url: Ez().optional().nullable(),
        proxy_icon_url: Ez().optional().nullable()
      }),
      pQ = Uz({
        name: Ez(),
        value: Ez(),
        inline: uz()
      }),
      PQ = Uz({
        title: Ez().optional().nullable(),
        type: Ez().optional().nullable(),
        description: Ez().optional().nullable(),
        url: Ez().optional().nullable(),
        timestamp: Ez().optional().nullable(),
        color: lz().optional().nullable(),
        footer: WQ.optional().nullable(),
        image: NQ.optional().nullable(),
        thumbnail: NQ.optional().nullable(),
        video: MQ.optional().nullable(),
        provider: gQ.optional().nullable(),
        author: SQ.optional().nullable(),
        fields: Lz(pQ).optional().nullable()
      }),
      GQ = Uz({
        count: lz(),
        me: uz(),
        emoji: VZ
      }),
      RQ = Uz({
        type: lz(),
        party_id: Ez().optional().nullable()
      }),
      AQ = Uz({
        id: Ez(),
        cover_image: Ez().optional().nullable(),
        description: Ez(),
        icon: Ez().optional().nullable(),
        name: Ez()
      }),
      xQ = Uz({
        message_id: Ez().optional().nullable(),
        channel_id: Ez().optional().nullable(),
        guild_id: Ez().optional().nullable()
      }),
      JQ = Uz({
        id: Ez(),
        channel_id: Ez(),
        guild_id: Ez().optional().nullable(),
        author: OZ.optional().nullable(),
        member: kZ.optional().nullable(),
        content: Ez(),
        timestamp: Ez(),
        edited_timestamp: Ez().optional().nullable(),
        tts: uz(),
        mention_everyone: uz(),
        mentions: Lz(OZ),
        mention_roles: Lz(Ez()),
        mention_channels: Lz(qQ),
        attachments: Lz(FQ),
        embeds: Lz(PQ),
        reactions: Lz(GQ).optional().nullable(),
        nonce: Oz([Ez(), lz()]).optional().nullable(),
        pinned: uz(),
        webhook_id: Ez().optional().nullable(),
        type: lz(),
        activity: RQ.optional().nullable(),
        application: AQ.optional().nullable(),
        message_reference: xQ.optional().nullable(),
        flags: lz().optional().nullable(),
        stickers: Lz(Dz()).optional().nullable(),
        referenced_message: Dz().optional().nullable()
      }),
      IQ = Uz({
        id: Ez(),
        name: Ez()
      }),
      iQ = Uz({
        type: cZ({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: lz(),
        name: Ez()
      }),
      vQ = Uz({
        type: cZ({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: uz(),
        threshold: lz(),
        shortcut: Lz(iQ),
        delay: lz()
      }),
      eQ = Uz({
        device_id: Ez(),
        volume: lz(),
        available_devices: Lz(IQ)
      }),
      hQ = (Uz({
        type: cZ({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: Ez(),
        vendor: Uz({
          name: Ez(),
          url: Ez()
        }),
        model: Uz({
          name: Ez(),
          url: Ez()
        }),
        related: Lz(Ez()),
        echo_cancellation: uz().optional().nullable(),
        noise_suppression: uz().optional().nullable(),
        automatic_gain_control: uz().optional().nullable(),
        hardware_mute: uz().optional().nullable()
      }), Uz({
        id: Ez(),
        name: Ez(),
        type: cZ({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: Uz({
          amount: lz(),
          currency: Ez()
        }),
        application_id: Ez(),
        flags: lz(),
        release_date: Ez().nullable()
      })),
      KQ = Uz({
        id: Ez(),
        sku_id: Ez(),
        application_id: Ez(),
        user_id: Ez(),
        gift_code_flags: lz(),
        type: cZ({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: Ez().optional().nullable(),
        branches: Lz(Ez()).optional().nullable(),
        starts_at: Ez().optional().nullable(),
        ends_at: Ez().optional().nullable(),
        parent_id: Ez().optional().nullable(),
        consumed: uz().optional().nullable(),
        deleted: uz().optional().nullable(),
        gift_code_batch_id: Ez().optional().nullable()
      }),
      YQ = (cZ({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), cZ({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      dQ = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      mQ = (cZ(dQ), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      HQ = (cZ(mQ), "ERROR");
    var EQ;
    ! function(CC) {
      CC.READY = "READY", CC.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", CC.SPEAKING_START = "SPEAKING_START", CC.SPEAKING_STOP = "SPEAKING_STOP", CC.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", CC.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", CC.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", CC.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", CC.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", CC.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(EQ || (EQ = {}));
    const lQ = BZ.extend({
        evt: oZ(EQ),
        nonce: Ez().nullable(),
        cmd: nZ(LZ),
        data: Uz({}).passthrough()
      }),
      XQ = BZ.extend({
        evt: nZ(HQ),
        data: Uz({
          code: lz(),
          message: Ez().optional()
        }).passthrough(),
        cmd: oZ(UZ),
        nonce: Ez().nullable()
      }),
      cQ = lQ.extend({
        evt: Ez()
      }),
      uQ = Oz([lQ, cQ, XQ]);
    const rQ = {
      [EQ.READY]: {
        payload: lQ.extend({
          evt: nZ(EQ.READY),
          data: Uz({
            v: lz(),
            config: Uz({
              cdn_host: Ez().optional(),
              api_endpoint: Ez(),
              environment: Ez()
            }),
            user: Uz({
              id: Ez(),
              username: Ez(),
              discriminator: Ez(),
              avatar: Ez().optional()
            }).optional()
          })
        })
      },
      [EQ.VOICE_STATE_UPDATE]: {
        payload: lQ.extend({
          evt: nZ(EQ.VOICE_STATE_UPDATE),
          data: zQ
        }),
        subscribeArgs: Uz({
          channel_id: Ez()
        })
      },
      [EQ.SPEAKING_START]: {
        payload: lQ.extend({
          evt: nZ(EQ.SPEAKING_START),
          data: Uz({
            lobby_id: Ez().optional(),
            channel_id: Ez().optional(),
            user_id: Ez()
          })
        }),
        subscribeArgs: Uz({
          lobby_id: Ez().nullable().optional(),
          channel_id: Ez().nullable().optional()
        })
      },
      [EQ.SPEAKING_STOP]: {
        payload: lQ.extend({
          evt: nZ(EQ.SPEAKING_STOP),
          data: Uz({
            lobby_id: Ez().optional(),
            channel_id: Ez().optional(),
            user_id: Ez()
          })
        }),
        subscribeArgs: Uz({
          lobby_id: Ez().nullable().optional(),
          channel_id: Ez().nullable().optional()
        })
      },
      [EQ.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: lQ.extend({
          evt: nZ(EQ.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: Uz({
            layout_mode: cZ(mQ)
          })
        })
      },
      [EQ.ORIENTATION_UPDATE]: {
        payload: lQ.extend({
          evt: nZ(EQ.ORIENTATION_UPDATE),
          data: Uz({
            screen_orientation: cZ(dQ),
            orientation: oZ(EZ)
          })
        })
      },
      [EQ.CURRENT_USER_UPDATE]: {
        payload: lQ.extend({
          evt: nZ(EQ.CURRENT_USER_UPDATE),
          data: OZ
        })
      },
      [EQ.ENTITLEMENT_CREATE]: {
        payload: lQ.extend({
          evt: nZ(EQ.ENTITLEMENT_CREATE),
          data: Uz({
            entitlement: KQ
          })
        })
      },
      [EQ.THERMAL_STATE_UPDATE]: {
        payload: lQ.extend({
          evt: nZ(EQ.THERMAL_STATE_UPDATE),
          data: Uz({
            thermal_state: YQ
          })
        })
      },
      [EQ.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: lQ.extend({
          evt: nZ(EQ.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: Uz({
            participants: aZ.shape.participants
          })
        })
      }
    };
    const sQ = Uz({}).nullable(),
      TQ = Uz({
        code: Ez()
      }),
      aQ = Uz({
        guilds: Lz(Uz({
          id: Ez(),
          name: Ez()
        }))
      }),
      tQ = Uz({
        id: Ez(),
        name: Ez(),
        icon_url: Ez().optional(),
        members: Lz(kZ)
      }),
      DQ = Uz({
        id: Ez(),
        type: cZ(bQ),
        guild_id: Ez().optional().nullable(),
        name: Ez().optional().nullable(),
        topic: Ez().optional().nullable(),
        bitrate: lz().optional().nullable(),
        user_limit: lz().optional().nullable(),
        position: lz().optional().nullable(),
        voice_states: Lz(zQ),
        messages: Lz(JQ)
      }),
      jQ = Uz({
        channels: Lz(nQ)
      }),
      yQ = (DQ.nullable(), DQ.nullable()),
      LQ = DQ.nullable(),
      UQ = (Uz({
        input: eQ,
        output: eQ,
        mode: vQ,
        automatic_gain_control: uz(),
        echo_cancellation: uz(),
        noise_suppression: uz(),
        qos: uz(),
        silence_warning: uz(),
        deaf: uz(),
        mute: uz()
      }), Uz({
        evt: Ez()
      })),
      BQ = Uz({
        shortcut: iQ
      }),
      OQ = QQ,
      kQ = Uz({
        skus: Lz(hQ)
      }),
      VQ = Uz({
        entitlements: Lz(KQ)
      }),
      Cw = Lz(KQ).nullable(),
      zw = Uz({
        use_interactive_pip: uz()
      }),
      Zw = Uz({
        locale: Ez()
      }),
      Qw = Uz({
        enabled: uz()
      }),
      ww = Uz({
        permissions: cz().or(Ez())
      }),
      bw = Uz({
        iosKeyboardResizesView: WZ(uz())
      }),
      nw = BZ.extend({
        cmd: oZ(UZ),
        evt: az()
      });

    function fw(CC) {
      let {
        cmd: zC,
        data: ZC
      } = CC;
      switch (zC) {
        case UZ.AUTHORIZE:
          return TQ.parse(ZC);
        case UZ.CAPTURE_SHORTCUT:
          return BQ.parse(ZC);
        case UZ.ENCOURAGE_HW_ACCELERATION:
          return Qw.parse(ZC);
        case UZ.GET_CHANNEL:
          return DQ.parse(ZC);
        case UZ.GET_CHANNELS:
          return jQ.parse(ZC);
        case UZ.GET_CHANNEL_PERMISSIONS:
          return ww.parse(ZC);
        case UZ.GET_GUILD:
          return tQ.parse(ZC);
        case UZ.GET_GUILDS:
          return aQ.parse(ZC);
        case UZ.GET_PLATFORM_BEHAVIORS:
          return bw.parse(ZC);
        case UZ.GET_CHANNEL:
          return DQ.parse(ZC);
        case UZ.SELECT_TEXT_CHANNEL:
          return LQ.parse(ZC);
        case UZ.SELECT_VOICE_CHANNEL:
          return yQ.parse(ZC);
        case UZ.SET_ACTIVITY:
          return OQ.parse(ZC);
        case UZ.GET_SKUS_EMBEDDED:
          return kQ.parse(ZC);
        case UZ.GET_ENTITLEMENTS_EMBEDDED:
          return VQ.parse(ZC);
        case UZ.SET_CONFIG:
          return zw.parse(ZC);
        case UZ.START_PURCHASE:
          return Cw.parse(ZC);
        case UZ.SUBSCRIBE:
        case UZ.UNSUBSCRIBE:
          return UQ.parse(ZC);
        case UZ.USER_SETTINGS_GET_LOCALE:
          return Zw.parse(ZC);
        case UZ.OPEN_EXTERNAL_LINK:
        case UZ.SET_ORIENTATION_LOCK_STATE:
        case UZ.SET_CERTIFIED_DEVICES:
        case UZ.SEND_ANALYTICS_EVENT:
        case UZ.OPEN_INVITE_DIALOG:
        case UZ.CAPTURE_LOG:
        case UZ.GET_SKUS:
        case UZ.GET_ENTITLEMENTS:
          return sQ.parse(ZC);
        case UZ.AUTHENTICATE:
        case UZ.INITIATE_IMAGE_UPLOAD:
        case UZ.OPEN_SHARE_MOMENT_DIALOG:
        case UZ.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: CC
          } = yZ[zC];
          return CC.parse(ZC);
        default:
          ! function(CC, zC) {
            throw zC
          }(0, new Error(`Unrecognized command ${zC}`))
      }
    }
    Uz({
      frame_id: Ez(),
      platform: oZ(lZ).optional().nullable()
    }), Uz({
      v: nZ(1),
      encoding: nZ("json").optional(),
      client_id: Ez(),
      frame_id: Ez()
    });
    const ow = Uz({
        code: lz(),
        message: Ez().optional()
      }),
      qw = Uz({
        evt: Ez().nullable(),
        nonce: Ez().nullable(),
        data: Dz().nullable(),
        cmd: Ez()
      }).passthrough();

    function Fw(CC) {
      const zC = qw.parse(CC);
      return null != zC.evt ? zC.evt === HQ ? XQ.parse(zC) : function(CC) {
        const zC = CC.evt;
        if (!(zC in EQ)) throw new Error(`Unrecognized event type ${CC.evt}`);
        return rQ[zC].payload.parse(CC)
      }(uQ.parse(zC)) : function(CC) {
        return Object.assign(Object.assign({}, CC), {
          data: fw(CC)
        })
      }(nw.passthrough().parse(zC))
    }

    function Ww(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const wC = BZ.extend({
        cmd: nZ(zC),
        data: ZC
      });
      return async ZC => {
        const bC = await CC({
          cmd: zC,
          args: ZC,
          transfer: QC(ZC)
        });
        return wC.parse(bC).data
      }
    }

    function Nw(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const ZC = yZ[CC].response,
        QC = BZ.extend({
          cmd: nZ(CC),
          data: ZC
        });
      return ZC => async wC => {
        const bC = await ZC({
          cmd: CC,
          args: wC,
          transfer: zC(wC)
        });
        return QC.parse(bC).data
      }
    }
    const Mw = Nw(tZ.AUTHENTICATE),
      gw = CC => Ww(CC, UZ.AUTHORIZE, TQ),
      Sw = CC => Ww(CC, UZ.CAPTURE_LOG, sQ),
      pw = CC => Ww(CC, UZ.ENCOURAGE_HW_ACCELERATION, Qw),
      Pw = CC => Ww(CC, UZ.GET_ENTITLEMENTS_EMBEDDED, VQ),
      Gw = CC => Ww(CC, UZ.GET_SKUS_EMBEDDED, kQ),
      Rw = CC => Ww(CC, UZ.GET_CHANNEL_PERMISSIONS, ww),
      Aw = CC => Ww(CC, UZ.GET_PLATFORM_BEHAVIORS, bw),
      xw = CC => Ww(CC, UZ.OPEN_EXTERNAL_LINK, sQ),
      Jw = CC => Ww(CC, UZ.OPEN_INVITE_DIALOG, sQ),
      Iw = Nw(tZ.OPEN_SHARE_MOMENT_DIALOG);
    QQ.CM({
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
      type: QQ.shape.type.optional(),
      instance: QQ.shape.instance.optional()
    }).nullable();
    const iw = CC => Ww(CC, UZ.SET_ACTIVITY, OQ),
      vw = CC => Ww(CC, UZ.SET_CONFIG, zw);
    const ew = CC => ({
        lock_state: CC.lock_state,
        picture_in_picture_lock_state: CC.picture_in_picture_lock_state
      }),
      hw = CC => function(CC) {
        let {
          sendCommand: zC,
          cmd: ZC,
          response: QC,
          fallbackTransform: wC,
          transferTransform: bC = () => {}
        } = CC;
        const nC = BZ.extend({
          cmd: nZ(ZC),
          data: QC
        });
        return async CC => {
          try {
            const QC = await zC({
              cmd: ZC,
              args: CC,
              transfer: bC(CC)
            });
            return nC.parse(QC).data
          } catch (QC) {
            if (QC.code === HZ.INVALID_PAYLOAD) {
              const QC = wC(CC),
                fC = await zC({
                  cmd: ZC,
                  args: QC,
                  transfer: bC(QC)
                });
              return nC.parse(fC).data
            }
            throw QC
          }
        }
      }({
        sendCommand: CC,
        cmd: UZ.SET_ORIENTATION_LOCK_STATE,
        response: sQ,
        fallbackTransform: ew
      }),
      Kw = CC => Ww(CC, UZ.START_PURCHASE, Cw),
      Yw = CC => Ww(CC, UZ.USER_SETTINGS_GET_LOCALE, Zw),
      dw = Nw(tZ.INITIATE_IMAGE_UPLOAD),
      mw = CC => Ww(CC, UZ.GET_CHANNEL, DQ),
      Hw = Nw(tZ.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var Ew = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function lw(CC) {
      return "string" === typeof CC && Ew.test(CC)
    }
    for (var Xw = [], uw = 0; uw < 256; ++uw) Xw.push((uw + 256).toString(16).substr(1));

    function rw(CC) {
      var zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZC = (Xw[CC[zC + 0]] + Xw[CC[zC + 1]] + Xw[CC[zC + 2]] + Xw[CC[zC + 3]] + "-" + Xw[CC[zC + 4]] + Xw[CC[zC + 5]] + "-" + Xw[CC[zC + 6]] + Xw[CC[zC + 7]] + "-" + Xw[CC[zC + 8]] + Xw[CC[zC + 9]] + "-" + Xw[CC[zC + 10]] + Xw[CC[zC + 11]] + Xw[CC[zC + 12]] + Xw[CC[zC + 13]] + Xw[CC[zC + 14]] + Xw[CC[zC + 15]]).toLowerCase();
      if (!lw(ZC)) throw TypeError("Stringified UUID is invalid");
      return ZC
    }
    var sw;

    function Tw(CC, zC, ZC) {
      function QC(CC, QC, wC, bC) {
        if ("string" === typeof CC && (CC = function(CC) {
            CC = unescape(encodeURIComponent(CC));
            for (var zC = [], ZC = 0; ZC < CC.length; ++ZC) zC.push(CC.charCodeAt(ZC));
            return zC
          }(CC)), "string" === typeof QC && (QC = function(CC) {
            if (!lw(CC)) throw TypeError("Invalid UUID");
            var zC, ZC = new Uint8Array(16);
            return ZC[0] = (zC = parseInt(CC.slice(0, 8), 16)) >>> 24, ZC[1] = zC >>> 16 & 255, ZC[2] = zC >>> 8 & 255, ZC[3] = 255 & zC, ZC[4] = (zC = parseInt(CC.slice(9, 13), 16)) >>> 8, ZC[5] = 255 & zC, ZC[6] = (zC = parseInt(CC.slice(14, 18), 16)) >>> 8, ZC[7] = 255 & zC, ZC[8] = (zC = parseInt(CC.slice(19, 23), 16)) >>> 8, ZC[9] = 255 & zC, ZC[10] = (zC = parseInt(CC.slice(24, 36), 16)) / 1099511627776 & 255, ZC[11] = zC / 4294967296 & 255, ZC[12] = zC >>> 24 & 255, ZC[13] = zC >>> 16 & 255, ZC[14] = zC >>> 8 & 255, ZC[15] = 255 & zC, ZC
          }(QC)), 16 !== QC.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var nC = new Uint8Array(16 + CC.length);
        if (nC.set(QC), nC.set(CC, QC.length), (nC = ZC(nC))[6] = 15 & nC[6] | zC, nC[8] = 63 & nC[8] | 128, wC) {
          bC = bC || 0;
          for (var fC = 0; fC < 16; ++fC) wC[bC + fC] = nC[fC];
          return wC
        }
        return rw(nC)
      }
      try {
        QC.name = CC
      } catch (wC) {}
      return QC.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", QC.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", QC
    }

    function aw(CC) {
      return 14 + (CC + 64 >>> 9 << 4) + 1
    }

    function tw(CC, zC) {
      var ZC = (65535 & CC) + (65535 & zC);
      return (CC >> 16) + (zC >> 16) + (ZC >> 16) << 16 | 65535 & ZC
    }

    function Dw(CC, zC, ZC, QC, wC, bC) {
      return tw((nC = tw(tw(zC, CC), tw(QC, bC))) << (fC = wC) | nC >>> 32 - fC, ZC);
      var nC, fC
    }

    function jw(CC, zC, ZC, QC, wC, bC, nC) {
      return Dw(zC & ZC | ~zC & QC, CC, zC, wC, bC, nC)
    }

    function yw(CC, zC, ZC, QC, wC, bC, nC) {
      return Dw(zC & QC | ZC & ~QC, CC, zC, wC, bC, nC)
    }

    function Lw(CC, zC, ZC, QC, wC, bC, nC) {
      return Dw(zC ^ ZC ^ QC, CC, zC, wC, bC, nC)
    }

    function Uw(CC, zC, ZC, QC, wC, bC, nC) {
      return Dw(ZC ^ (zC | ~QC), CC, zC, wC, bC, nC)
    }
    Tw("v3", 48, (function(CC) {
      if ("string" === typeof CC) {
        var zC = unescape(encodeURIComponent(CC));
        CC = new Uint8Array(zC.length);
        for (var ZC = 0; ZC < zC.length; ++ZC) CC[ZC] = zC.charCodeAt(ZC)
      }
      return function(CC) {
        for (var zC = [], ZC = 32 * CC.length, QC = "0123456789abcdef", wC = 0; wC < ZC; wC += 8) {
          var bC = CC[wC >> 5] >>> wC % 32 & 255,
            nC = parseInt(QC.charAt(bC >>> 4 & 15) + QC.charAt(15 & bC), 16);
          zC.push(nC)
        }
        return zC
      }(function(CC, zC) {
        CC[zC >> 5] |= 128 << zC % 32, CC[aw(zC) - 1] = zC;
        for (var ZC = 1732584193, QC = -271733879, wC = -1732584194, bC = 271733878, nC = 0; nC < CC.length; nC += 16) {
          var fC = ZC,
            oC = QC,
            qC = wC,
            FC = bC;
          ZC = jw(ZC, QC, wC, bC, CC[nC], 7, -680876936), bC = jw(bC, ZC, QC, wC, CC[nC + 1], 12, -389564586), wC = jw(wC, bC, ZC, QC, CC[nC + 2], 17, 606105819), QC = jw(QC, wC, bC, ZC, CC[nC + 3], 22, -1044525330), ZC = jw(ZC, QC, wC, bC, CC[nC + 4], 7, -176418897), bC = jw(bC, ZC, QC, wC, CC[nC + 5], 12, 1200080426), wC = jw(wC, bC, ZC, QC, CC[nC + 6], 17, -1473231341), QC = jw(QC, wC, bC, ZC, CC[nC + 7], 22, -45705983), ZC = jw(ZC, QC, wC, bC, CC[nC + 8], 7, 1770035416), bC = jw(bC, ZC, QC, wC, CC[nC + 9], 12, -1958414417), wC = jw(wC, bC, ZC, QC, CC[nC + 10], 17, -42063), QC = jw(QC, wC, bC, ZC, CC[nC + 11], 22, -1990404162), ZC = jw(ZC, QC, wC, bC, CC[nC + 12], 7, 1804603682), bC = jw(bC, ZC, QC, wC, CC[nC + 13], 12, -40341101), wC = jw(wC, bC, ZC, QC, CC[nC + 14], 17, -1502002290), ZC = yw(ZC, QC = jw(QC, wC, bC, ZC, CC[nC + 15], 22, 1236535329), wC, bC, CC[nC + 1], 5, -165796510), bC = yw(bC, ZC, QC, wC, CC[nC + 6], 9, -1069501632), wC = yw(wC, bC, ZC, QC, CC[nC + 11], 14, 643717713), QC = yw(QC, wC, bC, ZC, CC[nC], 20, -373897302), ZC = yw(ZC, QC, wC, bC, CC[nC + 5], 5, -701558691), bC = yw(bC, ZC, QC, wC, CC[nC + 10], 9, 38016083), wC = yw(wC, bC, ZC, QC, CC[nC + 15], 14, -660478335), QC = yw(QC, wC, bC, ZC, CC[nC + 4], 20, -405537848), ZC = yw(ZC, QC, wC, bC, CC[nC + 9], 5, 568446438), bC = yw(bC, ZC, QC, wC, CC[nC + 14], 9, -1019803690), wC = yw(wC, bC, ZC, QC, CC[nC + 3], 14, -187363961), QC = yw(QC, wC, bC, ZC, CC[nC + 8], 20, 1163531501), ZC = yw(ZC, QC, wC, bC, CC[nC + 13], 5, -1444681467), bC = yw(bC, ZC, QC, wC, CC[nC + 2], 9, -51403784), wC = yw(wC, bC, ZC, QC, CC[nC + 7], 14, 1735328473), ZC = Lw(ZC, QC = yw(QC, wC, bC, ZC, CC[nC + 12], 20, -1926607734), wC, bC, CC[nC + 5], 4, -378558), bC = Lw(bC, ZC, QC, wC, CC[nC + 8], 11, -2022574463), wC = Lw(wC, bC, ZC, QC, CC[nC + 11], 16, 1839030562), QC = Lw(QC, wC, bC, ZC, CC[nC + 14], 23, -35309556), ZC = Lw(ZC, QC, wC, bC, CC[nC + 1], 4, -1530992060), bC = Lw(bC, ZC, QC, wC, CC[nC + 4], 11, 1272893353), wC = Lw(wC, bC, ZC, QC, CC[nC + 7], 16, -155497632), QC = Lw(QC, wC, bC, ZC, CC[nC + 10], 23, -1094730640), ZC = Lw(ZC, QC, wC, bC, CC[nC + 13], 4, 681279174), bC = Lw(bC, ZC, QC, wC, CC[nC], 11, -358537222), wC = Lw(wC, bC, ZC, QC, CC[nC + 3], 16, -722521979), QC = Lw(QC, wC, bC, ZC, CC[nC + 6], 23, 76029189), ZC = Lw(ZC, QC, wC, bC, CC[nC + 9], 4, -640364487), bC = Lw(bC, ZC, QC, wC, CC[nC + 12], 11, -421815835), wC = Lw(wC, bC, ZC, QC, CC[nC + 15], 16, 530742520), ZC = Uw(ZC, QC = Lw(QC, wC, bC, ZC, CC[nC + 2], 23, -995338651), wC, bC, CC[nC], 6, -198630844), bC = Uw(bC, ZC, QC, wC, CC[nC + 7], 10, 1126891415), wC = Uw(wC, bC, ZC, QC, CC[nC + 14], 15, -1416354905), QC = Uw(QC, wC, bC, ZC, CC[nC + 5], 21, -57434055), ZC = Uw(ZC, QC, wC, bC, CC[nC + 12], 6, 1700485571), bC = Uw(bC, ZC, QC, wC, CC[nC + 3], 10, -1894986606), wC = Uw(wC, bC, ZC, QC, CC[nC + 10], 15, -1051523), QC = Uw(QC, wC, bC, ZC, CC[nC + 1], 21, -2054922799), ZC = Uw(ZC, QC, wC, bC, CC[nC + 8], 6, 1873313359), bC = Uw(bC, ZC, QC, wC, CC[nC + 15], 10, -30611744), wC = Uw(wC, bC, ZC, QC, CC[nC + 6], 15, -1560198380), QC = Uw(QC, wC, bC, ZC, CC[nC + 13], 21, 1309151649), ZC = Uw(ZC, QC, wC, bC, CC[nC + 4], 6, -145523070), bC = Uw(bC, ZC, QC, wC, CC[nC + 11], 10, -1120210379), wC = Uw(wC, bC, ZC, QC, CC[nC + 2], 15, 718787259), QC = Uw(QC, wC, bC, ZC, CC[nC + 9], 21, -343485551), ZC = tw(ZC, fC), QC = tw(QC, oC), wC = tw(wC, qC), bC = tw(bC, FC)
        }
        return [ZC, QC, wC, bC]
      }(function(CC) {
        if (0 === CC.length) return [];
        for (var zC = 8 * CC.length, ZC = new Uint32Array(aw(zC)), QC = 0; QC < zC; QC += 8) ZC[QC >> 5] |= (255 & CC[QC / 8]) << QC % 32;
        return ZC
      }(CC), 8 * CC.length))
    }));
    var Bw = new Uint8Array(16);

    function Ow() {
      if (!sw && !(sw = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return sw(Bw)
    }

    function kw(CC, zC, ZC) {
      var QC = (CC = CC || {}).random || (CC.rng || Ow)();
      if (QC[6] = 15 & QC[6] | 64, QC[8] = 63 & QC[8] | 128, zC) {
        ZC = ZC || 0;
        for (var wC = 0; wC < 16; ++wC) zC[ZC + wC] = QC[wC];
        return zC
      }
      return rw(QC)
    }

    function Vw(CC, zC, ZC, QC) {
      switch (CC) {
        case 0:
          return zC & ZC ^ ~zC & QC;
        case 1:
        case 3:
          return zC ^ ZC ^ QC;
        case 2:
          return zC & ZC ^ zC & QC ^ ZC & QC
      }
    }

    function Cb(CC, zC) {
      return CC << zC | CC >>> 32 - zC
    }
    Tw("v5", 80, (function(CC) {
      var zC = [1518500249, 1859775393, 2400959708, 3395469782],
        ZC = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof CC) {
        var QC = unescape(encodeURIComponent(CC));
        CC = [];
        for (var wC = 0; wC < QC.length; ++wC) CC.push(QC.charCodeAt(wC))
      } else Array.isArray(CC) || (CC = Array.prototype.slice.call(CC));
      CC.push(128);
      for (var bC = CC.length / 4 + 2, nC = Math.ceil(bC / 16), fC = new Array(nC), oC = 0; oC < nC; ++oC) {
        for (var qC = new Uint32Array(16), FC = 0; FC < 16; ++FC) qC[FC] = CC[64 * oC + 4 * FC] << 24 | CC[64 * oC + 4 * FC + 1] << 16 | CC[64 * oC + 4 * FC + 2] << 8 | CC[64 * oC + 4 * FC + 3];
        fC[oC] = qC
      }
      fC[nC - 1][14] = 8 * (CC.length - 1) / Math.pow(2, 32), fC[nC - 1][14] = Math.floor(fC[nC - 1][14]), fC[nC - 1][15] = 8 * (CC.length - 1) & 4294967295;
      for (var WC = 0; WC < nC; ++WC) {
        for (var NC = new Uint32Array(80), MC = 0; MC < 16; ++MC) NC[MC] = fC[WC][MC];
        for (var gC = 16; gC < 80; ++gC) NC[gC] = Cb(NC[gC - 3] ^ NC[gC - 8] ^ NC[gC - 14] ^ NC[gC - 16], 1);
        for (var SC = ZC[0], pC = ZC[1], PC = ZC[2], GC = ZC[3], RC = ZC[4], AC = 0; AC < 80; ++AC) {
          var xC = Math.floor(AC / 20),
            JC = Cb(SC, 5) + Vw(xC, pC, PC, GC) + RC + zC[xC] + NC[AC] >>> 0;
          RC = GC, GC = PC, PC = Cb(pC, 30) >>> 0, pC = SC, SC = JC
        }
        ZC[0] = ZC[0] + SC >>> 0, ZC[1] = ZC[1] + pC >>> 0, ZC[2] = ZC[2] + PC >>> 0, ZC[3] = ZC[3] + GC >>> 0, ZC[4] = ZC[4] + RC >>> 0
      }
      return [ZC[0] >> 24 & 255, ZC[0] >> 16 & 255, ZC[0] >> 8 & 255, 255 & ZC[0], ZC[1] >> 24 & 255, ZC[1] >> 16 & 255, ZC[1] >> 8 & 255, 255 & ZC[1], ZC[2] >> 24 & 255, ZC[2] >> 16 & 255, ZC[2] >> 8 & 255, 255 & ZC[2], ZC[3] >> 24 & 255, ZC[3] >> 16 & 255, ZC[3] >> 8 & 255, 255 & ZC[3], ZC[4] >> 24 & 255, ZC[4] >> 16 & 255, ZC[4] >> 8 & 255, 255 & ZC[4]]
    }));
    class zb extends Error {
      constructor(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(zC), this.code = CC, this.message = zC, this.name = "Discord SDK Error"
      }
    }
    const Zb = ["log", "warn", "debug", "info", "error"];
    var Qb;
    ! function(CC) {
      CC[CC.HANDSHAKE = 0] = "HANDSHAKE", CC[CC.FRAME = 1] = "FRAME", CC[CC.CLOSE = 2] = "CLOSE", CC[CC.HELLO = 3] = "HELLO"
    }(Qb || (Qb = {}));
    const wb = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class bb {
      getTransfer(CC) {
        var zC;
        switch (CC.cmd) {
          case UZ.SUBSCRIBE:
          case UZ.UNSUBSCRIBE:
            return;
          default:
            return null !== (zC = CC.transfer) && void 0 !== zC ? zC : void 0
        }
      }
      constructor(CC, zC) {
        var ZC;
        if (this.eventBus = new qC, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = CC => {
            var zC;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const ZC = kw();
            null === (zC = this.source) || void 0 === zC || zC.postMessage([Qb.FRAME, Object.assign(Object.assign({}, CC), {
              nonce: ZC
            })], this.sourceOrigin, this.getTransfer(CC));
            return new Promise(((CC, zC) => {
              this.pendingCommands.set(ZC, {
                resolve: CC,
                reject: zC
              })
            }))
          }, this.commands = (ZC = this.sendCommand, {
            authenticate: Mw(ZC),
            authorize: gw(ZC),
            captureLog: Sw(ZC),
            encourageHardwareAcceleration: pw(ZC),
            getChannel: mw(ZC),
            getChannelPermissions: Rw(ZC),
            getEntitlements: Pw(ZC),
            getPlatformBehaviors: Aw(ZC),
            getSkus: Gw(ZC),
            openExternalLink: xw(ZC),
            openInviteDialog: Jw(ZC),
            openShareMomentDialog: Iw(ZC),
            setActivity: iw(ZC),
            setConfig: vw(ZC),
            setOrientationLockState: hw(ZC),
            startPurchase: Kw(ZC),
            userSettingsGetLocale: Yw(ZC),
            initiateImageUpload: dw(ZC),
            getInstanceConnectedParticipants: Hw(ZC)
          }), this.handleMessage = CC => {
            if (!wb.has(CC.origin)) return;
            const zC = CC.data;
            if (!Array.isArray(zC)) return;
            const [ZC, QC] = zC;
            switch (ZC) {
              case Qb.HELLO:
                return;
              case Qb.CLOSE:
                return this.handleClose(QC);
              case Qb.HANDSHAKE:
                return this.handleHandshake();
              case Qb.FRAME:
                return this.handleFrame(QC);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = CC, this.configuration = null !== zC && void 0 !== zC ? zC : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = lZ.DESKTOP, this.guildId = null, void(this.channelId = null);
        const QC = new URLSearchParams(this._getSearch()),
          wC = QC.get("frame_id");
        if (!wC) throw new Error("frame_id query param is not defined");
        this.frameId = wC;
        const bC = QC.get("instance_id");
        if (!bC) throw new Error("instance_id query param is not defined");
        this.instanceId = bC;
        const nC = QC.get("platform");
        if (!nC) throw new Error("platform query param is not defined");
        if (nC !== lZ.DESKTOP && nC !== lZ.MOBILE) throw new Error(`Invalid query param "platform" of "${nC}". Valid values are "${lZ.DESKTOP}" or "${lZ.MOBILE}"`);
        this.platform = nC, this.guildId = QC.get("guild_id"), this.channelId = QC.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var CC;
          return [null !== (CC = window.parent.opener) && void 0 !== CC ? CC : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(CC, zC) {
        var ZC;
        window.removeEventListener("message", this.handleMessage);
        const QC = kw();
        null === (ZC = this.source) || void 0 === ZC || ZC.postMessage([Qb.CLOSE, {
          code: CC,
          message: zC,
          nonce: QC
        }], this.sourceOrigin)
      }
      async subscribe(CC, zC) {
        for (var ZC = arguments.length, QC = new Array(ZC > 2 ? ZC - 2 : 0), wC = 2; wC < ZC; wC++) QC[wC - 2] = arguments[wC];
        const [bC] = QC, nC = this.eventBus.listenerCount(CC), fC = this.eventBus.on(CC, zC);
        return Object.values(EQ).includes(CC) && CC !== EQ.READY && 0 === nC && await this.sendCommand({
          cmd: UZ.SUBSCRIBE,
          args: bC,
          evt: CC
        }), fC
      }
      async unsubscribe(CC, zC) {
        for (var ZC = arguments.length, QC = new Array(ZC > 2 ? ZC - 2 : 0), wC = 2; wC < ZC; wC++) QC[wC - 2] = arguments[wC];
        const [bC] = QC;
        return CC !== EQ.READY && 1 === this.eventBus.listenerCount(CC) && await this.sendCommand({
          cmd: UZ.UNSUBSCRIBE,
          evt: CC,
          args: bC
        }), this.eventBus.off(CC, zC)
      }
      async ready() {
        this.isReady || await new Promise((CC => {
          this.eventBus.once(EQ.READY, CC)
        }))
      }
      handshake() {
        var CC;
        null === (CC = this.source) || void 0 === CC || CC.postMessage([Qb.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(EQ.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const CC = (CC, zC) => {
          this.commands.captureLog({
            level: CC,
            message: zC
          })
        };
        Zb.forEach((zC => {
          ! function(CC, zC, ZC) {
            const QC = CC[zC],
              wC = CC;
            QC && (CC[zC] = function() {
              const CC = [].slice.call(arguments),
                bC = "" + CC.join(" ");
              ZC(zC, bC), QC.apply(wC, CC)
            })
          }(console, zC, CC)
        }))
      }
      handleClose(CC) {
        ow.parse(CC)
      }
      handleHandshake() {}
      handleFrame(CC) {
        var zC, ZC;
        let QC;
        try {
          QC = Fw(CC)
        } catch (wC) {
          return console.error("Failed to parse", CC), void console.error(wC)
        }
        if ("DISPATCH" === QC.cmd) this.eventBus.emit(QC.evt, QC.data);
        else {
          if (QC.evt === HQ) {
            if (null != QC.nonce) return null === (zC = this.pendingCommands.get(QC.nonce)) || void 0 === zC || zC.reject(QC.data), void this.pendingCommands.delete(QC.nonce);
            this.eventBus.emit("error", new zb(QC.data.code, QC.data.message))
          }
          if (null == QC.nonce) return void console.error("Missing nonce", CC);
          null === (ZC = this.pendingCommands.get(QC.nonce)) || void 0 === ZC || ZC.resolve(QC), this.pendingCommands.delete(QC.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var nb, fb = 1e9,
      ob = !0,
      qb = "[DecimalError] ",
      Fb = qb + "Invalid argument: ",
      Wb = qb + "Exponent out of range: ",
      Nb = Math.floor,
      Mb = Math.pow,
      gb = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      Sb = 1e7,
      pb = 9007199254740991,
      Pb = Nb(1286742750677284.5),
      Gb = {};

    function Rb(CC, zC) {
      var ZC, QC, wC, bC, nC, fC, oC, qC, FC = CC.constructor,
        WC = FC.precision;
      if (!CC.s || !zC.s) return zC.s || (zC = new FC(CC)), ob ? Yb(zC, WC) : zC;
      if (oC = CC.d, qC = zC.d, nC = CC.e, wC = zC.e, oC = oC.slice(), bC = nC - wC) {
        for (bC < 0 ? (QC = oC, bC = -bC, fC = qC.length) : (QC = qC, wC = nC, fC = oC.length), bC > (fC = (nC = Math.ceil(WC / 7)) > fC ? nC + 1 : fC + 1) && (bC = fC, QC.length = 1), QC.reverse(); bC--;) QC.push(0);
        QC.reverse()
      }
      for ((fC = oC.length) - (bC = qC.length) < 0 && (bC = fC, QC = qC, qC = oC, oC = QC), ZC = 0; bC;) ZC = (oC[--bC] = oC[bC] + qC[bC] + ZC) / Sb | 0, oC[bC] %= Sb;
      for (ZC && (oC.unshift(ZC), ++wC), fC = oC.length; 0 == oC[--fC];) oC.pop();
      return zC.d = oC, zC.e = wC, ob ? Yb(zC, WC) : zC
    }

    function Ab(CC, zC, ZC) {
      if (CC !== ~~CC || CC < zC || CC > ZC) throw Error(Fb + CC)
    }

    function xb(CC) {
      var zC, ZC, QC, wC = CC.length - 1,
        bC = "",
        nC = CC[0];
      if (wC > 0) {
        for (bC += nC, zC = 1; zC < wC; zC++)(ZC = 7 - (QC = CC[zC] + "").length) && (bC += eb(ZC)), bC += QC;
        (ZC = 7 - (QC = (nC = CC[zC]) + "").length) && (bC += eb(ZC))
      } else if (0 === nC) return "0";
      for (; nC % 10 === 0;) nC /= 10;
      return bC + nC
    }
    Gb.absoluteValue = Gb.abs = function() {
      var CC = new this.constructor(this);
      return CC.s && (CC.s = 1), CC
    }, Gb.comparedTo = Gb.cmp = function(CC) {
      var zC, ZC, QC, wC, bC = this;
      if (CC = new bC.constructor(CC), bC.s !== CC.s) return bC.s || -CC.s;
      if (bC.e !== CC.e) return bC.e > CC.e ^ bC.s < 0 ? 1 : -1;
      for (zC = 0, ZC = (QC = bC.d.length) < (wC = CC.d.length) ? QC : wC; zC < ZC; ++zC)
        if (bC.d[zC] !== CC.d[zC]) return bC.d[zC] > CC.d[zC] ^ bC.s < 0 ? 1 : -1;
      return QC === wC ? 0 : QC > wC ^ bC.s < 0 ? 1 : -1
    }, Gb.decimalPlaces = Gb.dp = function() {
      var CC = this,
        zC = CC.d.length - 1,
        ZC = 7 * (zC - CC.e);
      if (zC = CC.d[zC])
        for (; zC % 10 == 0; zC /= 10) ZC--;
      return ZC < 0 ? 0 : ZC
    }, Gb.dividedBy = Gb.div = function(CC) {
      return Jb(this, new this.constructor(CC))
    }, Gb.dividedToIntegerBy = Gb.idiv = function(CC) {
      var zC = this.constructor;
      return Yb(Jb(this, new zC(CC), 0, 1), zC.precision)
    }, Gb.equals = Gb.eq = function(CC) {
      return !this.cmp(CC)
    }, Gb.exponent = function() {
      return ib(this)
    }, Gb.greaterThan = Gb.gt = function(CC) {
      return this.cmp(CC) > 0
    }, Gb.greaterThanOrEqualTo = Gb.gte = function(CC) {
      return this.cmp(CC) >= 0
    }, Gb.isInteger = Gb.isint = function() {
      return this.e > this.d.length - 2
    }, Gb.isNegative = Gb.isneg = function() {
      return this.s < 0
    }, Gb.isPositive = Gb.ispos = function() {
      return this.s > 0
    }, Gb.isZero = function() {
      return 0 === this.s
    }, Gb.lessThan = Gb.lt = function(CC) {
      return this.cmp(CC) < 0
    }, Gb.lessThanOrEqualTo = Gb.lte = function(CC) {
      return this.cmp(CC) < 1
    }, Gb.logarithm = Gb.log = function(CC) {
      var zC, ZC = this,
        QC = ZC.constructor,
        wC = QC.precision,
        bC = wC + 5;
      if (void 0 === CC) CC = new QC(10);
      else if ((CC = new QC(CC)).s < 1 || CC.eq(nb)) throw Error(qb + "NaN");
      if (ZC.s < 1) throw Error(qb + (ZC.s ? "NaN" : "-Infinity"));
      return ZC.eq(nb) ? new QC(0) : (ob = !1, zC = Jb(hb(ZC, bC), hb(CC, bC), bC), ob = !0, Yb(zC, wC))
    }, Gb.minus = Gb.sub = function(CC) {
      var zC = this;
      return CC = new zC.constructor(CC), zC.s == CC.s ? db(zC, CC) : Rb(zC, (CC.s = -CC.s, CC))
    }, Gb.modulo = Gb.mod = function(CC) {
      var zC, ZC = this,
        QC = ZC.constructor,
        wC = QC.precision;
      if (!(CC = new QC(CC)).s) throw Error(qb + "NaN");
      return ZC.s ? (ob = !1, zC = Jb(ZC, CC, 0, 1).times(CC), ob = !0, ZC.minus(zC)) : Yb(new QC(ZC), wC)
    }, Gb.naturalExponential = Gb.exp = function() {
      return Ib(this)
    }, Gb.naturalLogarithm = Gb.ln = function() {
      return hb(this)
    }, Gb.negated = Gb.neg = function() {
      var CC = new this.constructor(this);
      return CC.s = -CC.s || 0, CC
    }, Gb.plus = Gb.add = function(CC) {
      var zC = this;
      return CC = new zC.constructor(CC), zC.s == CC.s ? Rb(zC, CC) : db(zC, (CC.s = -CC.s, CC))
    }, Gb.precision = Gb.sd = function(CC) {
      var zC, ZC, QC, wC = this;
      if (void 0 !== CC && CC !== !!CC && 1 !== CC && 0 !== CC) throw Error(Fb + CC);
      if (zC = ib(wC) + 1, ZC = 7 * (QC = wC.d.length - 1) + 1, QC = wC.d[QC]) {
        for (; QC % 10 == 0; QC /= 10) ZC--;
        for (QC = wC.d[0]; QC >= 10; QC /= 10) ZC++
      }
      return CC && zC > ZC ? zC : ZC
    }, Gb.squareRoot = Gb.sqrt = function() {
      var CC, zC, ZC, QC, wC, bC, nC, fC = this,
        oC = fC.constructor;
      if (fC.s < 1) {
        if (!fC.s) return new oC(0);
        throw Error(qb + "NaN")
      }
      for (CC = ib(fC), ob = !1, 0 == (wC = Math.sqrt(+fC)) || wC == 1 / 0 ? (((zC = xb(fC.d)).length + CC) % 2 == 0 && (zC += "0"), wC = Math.sqrt(zC), CC = Nb((CC + 1) / 2) - (CC < 0 || CC % 2), QC = new oC(zC = wC == 1 / 0 ? "1e" + CC : (zC = wC.toExponential()).slice(0, zC.indexOf("e") + 1) + CC)) : QC = new oC(wC.toString()), wC = nC = (ZC = oC.precision) + 3;;)
        if (QC = (bC = QC).plus(Jb(fC, bC, nC + 2)).times(.5), xb(bC.d).slice(0, nC) === (zC = xb(QC.d)).slice(0, nC)) {
          if (zC = zC.slice(nC - 3, nC + 1), wC == nC && "4999" == zC) {
            if (Yb(bC, ZC + 1, 0), bC.times(bC).eq(fC)) {
              QC = bC;
              break
            }
          } else if ("9999" != zC) break;
          nC += 4
        } return ob = !0, Yb(QC, ZC)
    }, Gb.times = Gb.mul = function(CC) {
      var zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC = this,
        WC = FC.constructor,
        NC = FC.d,
        MC = (CC = new WC(CC)).d;
      if (!FC.s || !CC.s) return new WC(0);
      for (CC.s *= FC.s, ZC = FC.e + CC.e, (oC = NC.length) < (qC = MC.length) && (bC = NC, NC = MC, MC = bC, nC = oC, oC = qC, qC = nC), bC = [], QC = nC = oC + qC; QC--;) bC.push(0);
      for (QC = qC; --QC >= 0;) {
        for (zC = 0, wC = oC + QC; wC > QC;) fC = bC[wC] + MC[QC] * NC[wC - QC - 1] + zC, bC[wC--] = fC % Sb | 0, zC = fC / Sb | 0;
        bC[wC] = (bC[wC] + zC) % Sb | 0
      }
      for (; !bC[--nC];) bC.pop();
      return zC ? ++ZC : bC.shift(), CC.d = bC, CC.e = ZC, ob ? Yb(CC, WC.precision) : CC
    }, Gb.toDecimalPlaces = Gb.todp = function(CC, zC) {
      var ZC = this,
        QC = ZC.constructor;
      return ZC = new QC(ZC), void 0 === CC ? ZC : (Ab(CC, 0, fb), void 0 === zC ? zC = QC.rounding : Ab(zC, 0, 8), Yb(ZC, CC + ib(ZC) + 1, zC))
    }, Gb.toExponential = function(CC, zC) {
      var ZC, QC = this,
        wC = QC.constructor;
      return void 0 === CC ? ZC = mb(QC, !0) : (Ab(CC, 0, fb), void 0 === zC ? zC = wC.rounding : Ab(zC, 0, 8), ZC = mb(QC = Yb(new wC(QC), CC + 1, zC), !0, CC + 1)), ZC
    }, Gb.toFixed = function(CC, zC) {
      var ZC, QC, wC = this,
        bC = wC.constructor;
      return void 0 === CC ? mb(wC) : (Ab(CC, 0, fb), void 0 === zC ? zC = bC.rounding : Ab(zC, 0, 8), ZC = mb((QC = Yb(new bC(wC), CC + ib(wC) + 1, zC)).abs(), !1, CC + ib(QC) + 1), wC.isneg() && !wC.isZero() ? "-" + ZC : ZC)
    }, Gb.toInteger = Gb.toint = function() {
      var CC = this,
        zC = CC.constructor;
      return Yb(new zC(CC), ib(CC) + 1, zC.rounding)
    }, Gb.toNumber = function() {
      return +this
    }, Gb.toPower = Gb.pow = function(CC) {
      var zC, ZC, QC, wC, bC, nC, fC = this,
        oC = fC.constructor,
        qC = +(CC = new oC(CC));
      if (!CC.s) return new oC(nb);
      if (!(fC = new oC(fC)).s) {
        if (CC.s < 1) throw Error(qb + "Infinity");
        return fC
      }
      if (fC.eq(nb)) return fC;
      if (QC = oC.precision, CC.eq(nb)) return Yb(fC, QC);
      if (nC = (zC = CC.e) >= (ZC = CC.d.length - 1), bC = fC.s, nC) {
        if ((ZC = qC < 0 ? -qC : qC) <= pb) {
          for (wC = new oC(nb), zC = Math.ceil(QC / 7 + 4), ob = !1; ZC % 2 && Hb((wC = wC.times(fC)).d, zC), 0 !== (ZC = Nb(ZC / 2));) Hb((fC = fC.times(fC)).d, zC);
          return ob = !0, CC.s < 0 ? new oC(nb).div(wC) : Yb(wC, QC)
        }
      } else if (bC < 0) throw Error(qb + "NaN");
      return bC = bC < 0 && 1 & CC.d[Math.max(zC, ZC)] ? -1 : 1, fC.s = 1, ob = !1, wC = CC.times(hb(fC, QC + 12)), ob = !0, (wC = Ib(wC)).s = bC, wC
    }, Gb.toPrecision = function(CC, zC) {
      var ZC, QC, wC = this,
        bC = wC.constructor;
      return void 0 === CC ? QC = mb(wC, (ZC = ib(wC)) <= bC.toExpNeg || ZC >= bC.toExpPos) : (Ab(CC, 1, fb), void 0 === zC ? zC = bC.rounding : Ab(zC, 0, 8), QC = mb(wC = Yb(new bC(wC), CC, zC), CC <= (ZC = ib(wC)) || ZC <= bC.toExpNeg, CC)), QC
    }, Gb.toSignificantDigits = Gb.tosd = function(CC, zC) {
      var ZC = this.constructor;
      return void 0 === CC ? (CC = ZC.precision, zC = ZC.rounding) : (Ab(CC, 1, fb), void 0 === zC ? zC = ZC.rounding : Ab(zC, 0, 8)), Yb(new ZC(this), CC, zC)
    }, Gb.toString = Gb.valueOf = Gb.val = Gb.toJSON = Gb[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var CC = this,
        zC = ib(CC),
        ZC = CC.constructor;
      return mb(CC, zC <= ZC.toExpNeg || zC >= ZC.toExpPos)
    };
    var Jb = function() {
      function CC(CC, zC) {
        var ZC, QC = 0,
          wC = CC.length;
        for (CC = CC.slice(); wC--;) ZC = CC[wC] * zC + QC, CC[wC] = ZC % Sb | 0, QC = ZC / Sb | 0;
        return QC && CC.unshift(QC), CC
      }

      function zC(CC, zC, ZC, QC) {
        var wC, bC;
        if (ZC != QC) bC = ZC > QC ? 1 : -1;
        else
          for (wC = bC = 0; wC < ZC; wC++)
            if (CC[wC] != zC[wC]) {
              bC = CC[wC] > zC[wC] ? 1 : -1;
              break
            } return bC
      }

      function ZC(CC, zC, ZC) {
        for (var QC = 0; ZC--;) CC[ZC] -= QC, QC = CC[ZC] < zC[ZC] ? 1 : 0, CC[ZC] = QC * Sb + CC[ZC] - zC[ZC];
        for (; !CC[0] && CC.length > 1;) CC.shift()
      }
      return function(QC, wC, bC, nC) {
        var fC, oC, qC, FC, WC, NC, MC, gC, SC, pC, PC, GC, RC, AC, xC, JC, IC, iC, vC = QC.constructor,
          eC = QC.s == wC.s ? 1 : -1,
          hC = QC.d,
          KC = wC.d;
        if (!QC.s) return new vC(QC);
        if (!wC.s) throw Error(qb + "Division by zero");
        for (oC = QC.e - wC.e, IC = KC.length, xC = hC.length, gC = (MC = new vC(eC)).d = [], qC = 0; KC[qC] == (hC[qC] || 0);) ++qC;
        if (KC[qC] > (hC[qC] || 0) && --oC, (GC = null == bC ? bC = vC.precision : nC ? bC + (ib(QC) - ib(wC)) + 1 : bC) < 0) return new vC(0);
        if (GC = GC / 7 + 2 | 0, qC = 0, 1 == IC)
          for (FC = 0, KC = KC[0], GC++;
            (qC < xC || FC) && GC--; qC++) RC = FC * Sb + (hC[qC] || 0), gC[qC] = RC / KC | 0, FC = RC % KC | 0;
        else {
          for ((FC = Sb / (KC[0] + 1) | 0) > 1 && (KC = CC(KC, FC), hC = CC(hC, FC), IC = KC.length, xC = hC.length), AC = IC, pC = (SC = hC.slice(0, IC)).length; pC < IC;) SC[pC++] = 0;
          (iC = KC.slice()).unshift(0), JC = KC[0], KC[1] >= Sb / 2 && ++JC;
          do {
            FC = 0, (fC = zC(KC, SC, IC, pC)) < 0 ? (PC = SC[0], IC != pC && (PC = PC * Sb + (SC[1] || 0)), (FC = PC / JC | 0) > 1 ? (FC >= Sb && (FC = Sb - 1), 1 == (fC = zC(WC = CC(KC, FC), SC, NC = WC.length, pC = SC.length)) && (FC--, ZC(WC, IC < NC ? iC : KC, NC))) : (0 == FC && (fC = FC = 1), WC = KC.slice()), (NC = WC.length) < pC && WC.unshift(0), ZC(SC, WC, pC), -1 == fC && (fC = zC(KC, SC, IC, pC = SC.length)) < 1 && (FC++, ZC(SC, IC < pC ? iC : KC, pC)), pC = SC.length) : 0 === fC && (FC++, SC = [0]), gC[qC++] = FC, fC && SC[0] ? SC[pC++] = hC[AC] || 0 : (SC = [hC[AC]], pC = 1)
          } while ((AC++ < xC || void 0 !== SC[0]) && GC--)
        }
        return gC[0] || gC.shift(), MC.e = oC, Yb(MC, nC ? bC + ib(MC) + 1 : bC)
      }
    }();

    function Ib(CC, zC) {
      var ZC, QC, wC, bC, nC, fC = 0,
        oC = 0,
        qC = CC.constructor,
        FC = qC.precision;
      if (ib(CC) > 16) throw Error(Wb + ib(CC));
      if (!CC.s) return new qC(nb);
      for (null == zC ? (ob = !1, nC = FC) : nC = zC, bC = new qC(.03125); CC.abs().gte(.1);) CC = CC.times(bC), oC += 5;
      for (nC += Math.log(Mb(2, oC)) / Math.LN10 * 2 + 5 | 0, ZC = QC = wC = new qC(nb), qC.precision = nC;;) {
        if (QC = Yb(QC.times(CC), nC), ZC = ZC.times(++fC), xb((bC = wC.plus(Jb(QC, ZC, nC))).d).slice(0, nC) === xb(wC.d).slice(0, nC)) {
          for (; oC--;) wC = Yb(wC.times(wC), nC);
          return qC.precision = FC, null == zC ? (ob = !0, Yb(wC, FC)) : wC
        }
        wC = bC
      }
    }

    function ib(CC) {
      for (var zC = 7 * CC.e, ZC = CC.d[0]; ZC >= 10; ZC /= 10) zC++;
      return zC
    }

    function vb(CC, zC, ZC) {
      if (zC > CC.LN10.sd()) throw ob = !0, ZC && (CC.precision = ZC), Error(qb + "LN10 precision limit exceeded");
      return Yb(new CC(CC.LN10), zC)
    }

    function eb(CC) {
      for (var zC = ""; CC--;) zC += "0";
      return zC
    }

    function hb(CC, zC) {
      var ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC = 1,
        NC = CC,
        MC = NC.d,
        gC = NC.constructor,
        SC = gC.precision;
      if (NC.s < 1) throw Error(qb + (NC.s ? "NaN" : "-Infinity"));
      if (NC.eq(nb)) return new gC(0);
      if (null == zC ? (ob = !1, qC = SC) : qC = zC, NC.eq(10)) return null == zC && (ob = !0), vb(gC, qC);
      if (qC += 10, gC.precision = qC, QC = (ZC = xb(MC)).charAt(0), bC = ib(NC), !(Math.abs(bC) < 15e14)) return oC = vb(gC, qC + 2, SC).times(bC + ""), NC = hb(new gC(QC + "." + ZC.slice(1)), qC - 10).plus(oC), gC.precision = SC, null == zC ? (ob = !0, Yb(NC, SC)) : NC;
      for (; QC < 7 && 1 != QC || 1 == QC && ZC.charAt(1) > 3;) QC = (ZC = xb((NC = NC.times(CC)).d)).charAt(0), WC++;
      for (bC = ib(NC), QC > 1 ? (NC = new gC("0." + ZC), bC++) : NC = new gC(QC + "." + ZC.slice(1)), fC = nC = NC = Jb(NC.minus(nb), NC.plus(nb), qC), FC = Yb(NC.times(NC), qC), wC = 3;;) {
        if (nC = Yb(nC.times(FC), qC), xb((oC = fC.plus(Jb(nC, new gC(wC), qC))).d).slice(0, qC) === xb(fC.d).slice(0, qC)) return fC = fC.times(2), 0 !== bC && (fC = fC.plus(vb(gC, qC + 2, SC).times(bC + ""))), fC = Jb(fC, new gC(WC), qC), gC.precision = SC, null == zC ? (ob = !0, Yb(fC, SC)) : fC;
        fC = oC, wC += 2
      }
    }

    function Kb(CC, zC) {
      var ZC, QC, wC;
      for ((ZC = zC.indexOf(".")) > -1 && (zC = zC.replace(".", "")), (QC = zC.search(/e/i)) > 0 ? (ZC < 0 && (ZC = QC), ZC += +zC.slice(QC + 1), zC = zC.substring(0, QC)) : ZC < 0 && (ZC = zC.length), QC = 0; 48 === zC.charCodeAt(QC);) ++QC;
      for (wC = zC.length; 48 === zC.charCodeAt(wC - 1);) --wC;
      if (zC = zC.slice(QC, wC)) {
        if (wC -= QC, ZC = ZC - QC - 1, CC.e = Nb(ZC / 7), CC.d = [], QC = (ZC + 1) % 7, ZC < 0 && (QC += 7), QC < wC) {
          for (QC && CC.d.push(+zC.slice(0, QC)), wC -= 7; QC < wC;) CC.d.push(+zC.slice(QC, QC += 7));
          QC = 7 - (zC = zC.slice(QC)).length
        } else QC -= wC;
        for (; QC--;) zC += "0";
        if (CC.d.push(+zC), ob && (CC.e > Pb || CC.e < -Pb)) throw Error(Wb + ZC)
      } else CC.s = 0, CC.e = 0, CC.d = [0];
      return CC
    }

    function Yb(CC, zC, ZC) {
      var QC, wC, bC, nC, fC, oC, qC, FC, WC = CC.d;
      for (nC = 1, bC = WC[0]; bC >= 10; bC /= 10) nC++;
      if ((QC = zC - nC) < 0) QC += 7, wC = zC, qC = WC[FC = 0];
      else {
        if ((FC = Math.ceil((QC + 1) / 7)) >= (bC = WC.length)) return CC;
        for (qC = bC = WC[FC], nC = 1; bC >= 10; bC /= 10) nC++;
        wC = (QC %= 7) - 7 + nC
      }
      if (void 0 !== ZC && (fC = qC / (bC = Mb(10, nC - wC - 1)) % 10 | 0, oC = zC < 0 || void 0 !== WC[FC + 1] || qC % bC, oC = ZC < 4 ? (fC || oC) && (0 == ZC || ZC == (CC.s < 0 ? 3 : 2)) : fC > 5 || 5 == fC && (4 == ZC || oC || 6 == ZC && (QC > 0 ? wC > 0 ? qC / Mb(10, nC - wC) : 0 : WC[FC - 1]) % 10 & 1 || ZC == (CC.s < 0 ? 8 : 7))), zC < 1 || !WC[0]) return oC ? (bC = ib(CC), WC.length = 1, zC = zC - bC - 1, WC[0] = Mb(10, (7 - zC % 7) % 7), CC.e = Nb(-zC / 7) || 0) : (WC.length = 1, WC[0] = CC.e = CC.s = 0), CC;
      if (0 == QC ? (WC.length = FC, bC = 1, FC--) : (WC.length = FC + 1, bC = Mb(10, 7 - QC), WC[FC] = wC > 0 ? (qC / Mb(10, nC - wC) % Mb(10, wC) | 0) * bC : 0), oC)
        for (;;) {
          if (0 == FC) {
            (WC[0] += bC) == Sb && (WC[0] = 1, ++CC.e);
            break
          }
          if (WC[FC] += bC, WC[FC] != Sb) break;
          WC[FC--] = 0, bC = 1
        }
      for (QC = WC.length; 0 === WC[--QC];) WC.pop();
      if (ob && (CC.e > Pb || CC.e < -Pb)) throw Error(Wb + ib(CC));
      return CC
    }

    function db(CC, zC) {
      var ZC, QC, wC, bC, nC, fC, oC, qC, FC, WC, NC = CC.constructor,
        MC = NC.precision;
      if (!CC.s || !zC.s) return zC.s ? zC.s = -zC.s : zC = new NC(CC), ob ? Yb(zC, MC) : zC;
      if (oC = CC.d, WC = zC.d, QC = zC.e, qC = CC.e, oC = oC.slice(), nC = qC - QC) {
        for ((FC = nC < 0) ? (ZC = oC, nC = -nC, fC = WC.length) : (ZC = WC, QC = qC, fC = oC.length), nC > (wC = Math.max(Math.ceil(MC / 7), fC) + 2) && (nC = wC, ZC.length = 1), ZC.reverse(), wC = nC; wC--;) ZC.push(0);
        ZC.reverse()
      } else {
        for ((FC = (wC = oC.length) < (fC = WC.length)) && (fC = wC), wC = 0; wC < fC; wC++)
          if (oC[wC] != WC[wC]) {
            FC = oC[wC] < WC[wC];
            break
          } nC = 0
      }
      for (FC && (ZC = oC, oC = WC, WC = ZC, zC.s = -zC.s), fC = oC.length, wC = WC.length - fC; wC > 0; --wC) oC[fC++] = 0;
      for (wC = WC.length; wC > nC;) {
        if (oC[--wC] < WC[wC]) {
          for (bC = wC; bC && 0 === oC[--bC];) oC[bC] = Sb - 1;
          --oC[bC], oC[wC] += Sb
        }
        oC[wC] -= WC[wC]
      }
      for (; 0 === oC[--fC];) oC.pop();
      for (; 0 === oC[0]; oC.shift()) --QC;
      return oC[0] ? (zC.d = oC, zC.e = QC, ob ? Yb(zC, MC) : zC) : new NC(0)
    }

    function mb(CC, zC, ZC) {
      var QC, wC = ib(CC),
        bC = xb(CC.d),
        nC = bC.length;
      return zC ? (ZC && (QC = ZC - nC) > 0 ? bC = bC.charAt(0) + "." + bC.slice(1) + eb(QC) : nC > 1 && (bC = bC.charAt(0) + "." + bC.slice(1)), bC = bC + (wC < 0 ? "e" : "e+") + wC) : wC < 0 ? (bC = "0." + eb(-wC - 1) + bC, ZC && (QC = ZC - nC) > 0 && (bC += eb(QC))) : wC >= nC ? (bC += eb(wC + 1 - nC), ZC && (QC = ZC - wC - 1) > 0 && (bC = bC + "." + eb(QC))) : ((QC = wC + 1) < nC && (bC = bC.slice(0, QC) + "." + bC.slice(QC)), ZC && (QC = ZC - nC) > 0 && (wC + 1 === nC && (bC += "."), bC += eb(QC))), CC.s < 0 ? "-" + bC : bC
    }

    function Hb(CC, zC) {
      if (CC.length > zC) return CC.length = zC, !0
    }

    function Eb(CC) {
      if (!CC || "object" !== typeof CC) throw Error(qb + "Object expected");
      var zC, ZC, QC, wC = ["precision", 1, fb, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (zC = 0; zC < wC.length; zC += 3)
        if (void 0 !== (QC = CC[ZC = wC[zC]])) {
          if (!(Nb(QC) === QC && QC >= wC[zC + 1] && QC <= wC[zC + 2])) throw Error(Fb + ZC + ": " + QC);
          this[ZC] = QC
        } if (void 0 !== (QC = CC[ZC = "LN10"])) {
        if (QC != Math.LN10) throw Error(Fb + ZC + ": " + QC);
        this[ZC] = new this(QC)
      }
      return this
    }
    var lb = function CC(zC) {
      var ZC, QC, wC;

      function bC(CC) {
        var zC = this;
        if (!(zC instanceof bC)) return new bC(CC);
        if (zC.constructor = bC, CC instanceof bC) return zC.s = CC.s, zC.e = CC.e, void(zC.d = (CC = CC.d) ? CC.slice() : CC);
        if ("number" === typeof CC) {
          if (0 * CC !== 0) throw Error(Fb + CC);
          if (CC > 0) zC.s = 1;
          else {
            if (!(CC < 0)) return zC.s = 0, zC.e = 0, void(zC.d = [0]);
            CC = -CC, zC.s = -1
          }
          return CC === ~~CC && CC < 1e7 ? (zC.e = 0, void(zC.d = [CC])) : Kb(zC, CC.toString())
        }
        if ("string" !== typeof CC) throw Error(Fb + CC);
        if (45 === CC.charCodeAt(0) ? (CC = CC.slice(1), zC.s = -1) : zC.s = 1, !gb.test(CC)) throw Error(Fb + CC);
        Kb(zC, CC)
      }
      if (bC.prototype = Gb, bC.ROUND_UP = 0, bC.ROUND_DOWN = 1, bC.ROUND_CEIL = 2, bC.ROUND_FLOOR = 3, bC.ROUND_HALF_UP = 4, bC.ROUND_HALF_DOWN = 5, bC.ROUND_HALF_EVEN = 6, bC.ROUND_HALF_CEIL = 7, bC.ROUND_HALF_FLOOR = 8, bC.clone = CC, bC.config = bC.set = Eb, void 0 === zC && (zC = {}), zC)
        for (wC = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], ZC = 0; ZC < wC.length;) zC.hasOwnProperty(QC = wC[ZC++]) || (zC[QC] = this[QC]);
      return bC.config(zC), bC
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    nb = new lb(1);
    var Xb;
    ! function(CC) {
      CC.AED = "aed", CC.AFN = "afn", CC.ALL = "all", CC.AMD = "amd", CC.ANG = "ang", CC.AOA = "aoa", CC.ARS = "ars", CC.AUD = "aud", CC.AWG = "awg", CC.AZN = "azn", CC.BAM = "bam", CC.BBD = "bbd", CC.BDT = "bdt", CC.BGN = "bgn", CC.BHD = "bhd", CC.BIF = "bif", CC.BMD = "bmd", CC.BND = "bnd", CC.BOB = "bob", CC.BOV = "bov", CC.BRL = "brl", CC.BSD = "bsd", CC.BTN = "btn", CC.BWP = "bwp", CC.BYN = "byn", CC.BYR = "byr", CC.BZD = "bzd", CC.CAD = "cad", CC.CDF = "cdf", CC.CHE = "che", CC.CHF = "chf", CC.CHW = "chw", CC.CLF = "clf", CC.CLP = "clp", CC.CNY = "cny", CC.COP = "cop", CC.COU = "cou", CC.CRC = "crc", CC.CUC = "cuc", CC.CUP = "cup", CC.CVE = "cve", CC.CZK = "czk", CC.DJF = "djf", CC.DKK = "dkk", CC.DOP = "dop", CC.DZD = "dzd", CC.EGP = "egp", CC.ERN = "ern", CC.ETB = "etb", CC.EUR = "eur", CC.FJD = "fjd", CC.FKP = "fkp", CC.GBP = "gbp", CC.GEL = "gel", CC.GHS = "ghs", CC.GIP = "gip", CC.GMD = "gmd", CC.GNF = "gnf", CC.GTQ = "gtq", CC.GYD = "gyd", CC.HKD = "hkd", CC.HNL = "hnl", CC.HRK = "hrk", CC.HTG = "htg", CC.HUF = "huf", CC.IDR = "idr", CC.ILS = "ils", CC.INR = "inr", CC.IQD = "iqd", CC.IRR = "irr", CC.ISK = "isk", CC.JMD = "jmd", CC.JOD = "jod", CC.JPY = "jpy", CC.KES = "kes", CC.KGS = "kgs", CC.KHR = "khr", CC.KMF = "kmf", CC.KPW = "kpw", CC.KRW = "krw", CC.KWD = "kwd", CC.KYD = "kyd", CC.KZT = "kzt", CC.LAK = "lak", CC.LBP = "lbp", CC.LKR = "lkr", CC.LRD = "lrd", CC.LSL = "lsl", CC.LTL = "ltl", CC.LVL = "lvl", CC.LYD = "lyd", CC.MAD = "mad", CC.MDL = "mdl", CC.MGA = "mga", CC.MKD = "mkd", CC.MMK = "mmk", CC.MNT = "mnt", CC.MOP = "mop", CC.MRO = "mro", CC.MUR = "mur", CC.MVR = "mvr", CC.MWK = "mwk", CC.MXN = "mxn", CC.MXV = "mxv", CC.MYR = "myr", CC.MZN = "mzn", CC.NAD = "nad", CC.NGN = "ngn", CC.NIO = "nio", CC.NOK = "nok", CC.NPR = "npr", CC.NZD = "nzd", CC.OMR = "omr", CC.PAB = "pab", CC.PEN = "pen", CC.PGK = "pgk", CC.PHP = "php", CC.PKR = "pkr", CC.PLN = "pln", CC.PYG = "pyg", CC.QAR = "qar", CC.RON = "ron", CC.RSD = "rsd", CC.RUB = "rub", CC.RWF = "rwf", CC.SAR = "sar", CC.SBD = "sbd", CC.SCR = "scr", CC.SDG = "sdg", CC.SEK = "sek", CC.SGD = "sgd", CC.SHP = "shp", CC.SLL = "sll", CC.SOS = "sos", CC.SRD = "srd", CC.SSP = "ssp", CC.STD = "std", CC.SVC = "svc", CC.SYP = "syp", CC.SZL = "szl", CC.THB = "thb", CC.TJS = "tjs", CC.TMT = "tmt", CC.TND = "tnd", CC.TOP = "top", CC.TRY = "try", CC.TTD = "ttd", CC.TWD = "twd", CC.TZS = "tzs", CC.UAH = "uah", CC.UGX = "ugx", CC.USD = "usd", CC.USN = "usn", CC.USS = "uss", CC.UYI = "uyi", CC.UYU = "uyu", CC.UZS = "uzs", CC.VEF = "vef", CC.VND = "vnd", CC.VUV = "vuv", CC.WST = "wst", CC.XAF = "xaf", CC.XAG = "xag", CC.XAU = "xau", CC.XBA = "xba", CC.XBB = "xbb", CC.XBC = "xbc", CC.XBD = "xbd", CC.XCD = "xcd", CC.XDR = "xdr", CC.XFU = "xfu", CC.XOF = "xof", CC.XPD = "xpd", CC.XPF = "xpf", CC.XPT = "xpt", CC.XSU = "xsu", CC.XTS = "xts", CC.XUA = "xua", CC.YER = "yer", CC.ZAR = "zar", CC.ZMW = "zmw", CC.ZWL = "zwl"
    }(Xb || (Xb = {}));
    Xb.AED, Xb.AFN, Xb.ALL, Xb.AMD, Xb.ANG, Xb.AOA, Xb.ARS, Xb.AUD, Xb.AWG, Xb.AZN, Xb.BAM, Xb.BBD, Xb.BDT, Xb.BGN, Xb.BHD, Xb.BIF, Xb.BMD, Xb.BND, Xb.BOB, Xb.BOV, Xb.BRL, Xb.BSD, Xb.BTN, Xb.BWP, Xb.BYR, Xb.BYN, Xb.BZD, Xb.CAD, Xb.CDF, Xb.CHE, Xb.CHF, Xb.CHW, Xb.CLF, Xb.CLP, Xb.CNY, Xb.COP, Xb.COU, Xb.CRC, Xb.CUC, Xb.CUP, Xb.CVE, Xb.CZK, Xb.DJF, Xb.DKK, Xb.DOP, Xb.DZD, Xb.EGP, Xb.ERN, Xb.ETB, Xb.EUR, Xb.FJD, Xb.FKP, Xb.GBP, Xb.GEL, Xb.GHS, Xb.GIP, Xb.GMD, Xb.GNF, Xb.GTQ, Xb.GYD, Xb.HKD, Xb.HNL, Xb.HRK, Xb.HTG, Xb.HUF, Xb.IDR, Xb.ILS, Xb.INR, Xb.IQD, Xb.IRR, Xb.ISK, Xb.JMD, Xb.JOD, Xb.JPY, Xb.KES, Xb.KGS, Xb.KHR, Xb.KMF, Xb.KPW, Xb.KRW, Xb.KWD, Xb.KYD, Xb.KZT, Xb.LAK, Xb.LBP, Xb.LKR, Xb.LRD, Xb.LSL, Xb.LTL, Xb.LVL, Xb.LYD, Xb.MAD, Xb.MDL, Xb.MGA, Xb.MKD, Xb.MMK, Xb.MNT, Xb.MOP, Xb.MRO, Xb.MUR, Xb.MVR, Xb.MWK, Xb.MXN, Xb.MXV, Xb.MYR, Xb.MZN, Xb.NAD, Xb.NGN, Xb.NIO, Xb.NOK, Xb.NPR, Xb.NZD, Xb.OMR, Xb.PAB, Xb.PEN, Xb.PGK, Xb.PHP, Xb.PKR, Xb.PLN, Xb.PYG, Xb.QAR, Xb.RON, Xb.RSD, Xb.RUB, Xb.RWF, Xb.SAR, Xb.SBD, Xb.SCR, Xb.SDG, Xb.SEK, Xb.SGD, Xb.SHP, Xb.SLL, Xb.SOS, Xb.SRD, Xb.SSP, Xb.STD, Xb.SVC, Xb.SYP, Xb.SZL, Xb.THB, Xb.TJS, Xb.TMT, Xb.TND, Xb.TOP, Xb.TRY, Xb.TTD, Xb.TWD, Xb.TZS, Xb.UAH, Xb.UGX, Xb.USD, Xb.USN, Xb.USS, Xb.UYI, Xb.UYU, Xb.UZS, Xb.VEF, Xb.VND, Xb.VUV, Xb.WST, Xb.XAF, Xb.XAG, Xb.XAU, Xb.XBA, Xb.XBB, Xb.XBC, Xb.XBD, Xb.XCD, Xb.XDR, Xb.XFU, Xb.XOF, Xb.XPD, Xb.XPF, Xb.XPT, Xb.XSU, Xb.XTS, Xb.XUA, Xb.YER, Xb.ZAR, Xb.ZMW, Xb.ZWL;
    var cb = {
      exports: {}
    };
    ! function(CC, zC) {
      var ZC = "__lodash_hash_undefined__",
        QC = 9007199254740991,
        bC = "[object Arguments]",
        nC = "[object Array]",
        fC = "[object Boolean]",
        oC = "[object Date]",
        qC = "[object Error]",
        FC = "[object Function]",
        WC = "[object Map]",
        NC = "[object Number]",
        MC = "[object Object]",
        gC = "[object Promise]",
        SC = "[object RegExp]",
        pC = "[object Set]",
        PC = "[object String]",
        GC = "[object Symbol]",
        RC = "[object WeakMap]",
        AC = "[object ArrayBuffer]",
        xC = "[object DataView]",
        JC = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        IC = /^\w*$/,
        iC = /^\./,
        vC = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        eC = /\\(\\)?/g,
        hC = /^\[object .+?Constructor\]$/,
        KC = /^(?:0|[1-9]\d*)$/,
        YC = {};
      YC["[object Float32Array]"] = YC["[object Float64Array]"] = YC["[object Int8Array]"] = YC["[object Int16Array]"] = YC["[object Int32Array]"] = YC["[object Uint8Array]"] = YC["[object Uint8ClampedArray]"] = YC["[object Uint16Array]"] = YC["[object Uint32Array]"] = !0, YC[bC] = YC[nC] = YC[AC] = YC[fC] = YC[xC] = YC[oC] = YC[qC] = YC[FC] = YC[WC] = YC[NC] = YC[MC] = YC[SC] = YC[pC] = YC[PC] = YC[RC] = !1;
      var dC = "object" == typeof wC && wC && wC.Object === Object && wC,
        mC = "object" == typeof self && self && self.Object === Object && self,
        HC = dC || mC || Function("return this")(),
        EC = zC && !zC.nodeType && zC,
        lC = EC && CC && !CC.nodeType && CC,
        XC = lC && lC.exports === EC && dC.process,
        cC = function() {
          try {
            return XC && XC.binding("util")
          } catch (CC) {}
        }(),
        uC = cC && cC.isTypedArray;

      function rC(CC, zC) {
        for (var ZC = -1, QC = CC ? CC.length : 0; ++ZC < QC && !1 !== zC(CC[ZC], ZC, CC););
        return CC
      }

      function sC(CC, zC) {
        for (var ZC = -1, QC = CC ? CC.length : 0; ++ZC < QC;)
          if (zC(CC[ZC], ZC, CC)) return !0;
        return !1
      }

      function TC(CC) {
        var zC = !1;
        if (null != CC && "function" != typeof CC.toString) try {
          zC = !!(CC + "")
        } catch (ZC) {}
        return zC
      }

      function aC(CC) {
        var zC = -1,
          ZC = Array(CC.size);
        return CC.forEach((function(CC, QC) {
          ZC[++zC] = [QC, CC]
        })), ZC
      }

      function tC(CC, zC) {
        return function(ZC) {
          return CC(zC(ZC))
        }
      }

      function DC(CC) {
        var zC = -1,
          ZC = Array(CC.size);
        return CC.forEach((function(CC) {
          ZC[++zC] = CC
        })), ZC
      }
      var jC = Array.prototype,
        yC = Function.prototype,
        LC = Object.prototype,
        UC = HC["__core-js_shared__"],
        BC = function() {
          var CC = /[^.]+$/.exec(UC && UC.keys && UC.keys.IE_PROTO || "");
          return CC ? "Symbol(src)_1." + CC : ""
        }(),
        OC = yC.toString,
        kC = LC.hasOwnProperty,
        VC = LC.toString,
        Cz = RegExp("^" + OC.call(kC).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        zz = HC.Symbol,
        Zz = HC.Uint8Array,
        Qz = tC(Object.getPrototypeOf, Object),
        wz = Object.create,
        bz = LC.propertyIsEnumerable,
        nz = jC.splice,
        fz = tC(Object.keys, Object),
        oz = az(HC, "DataView"),
        qz = az(HC, "Map"),
        Fz = az(HC, "Promise"),
        Wz = az(HC, "Set"),
        Nz = az(HC, "WeakMap"),
        Mz = az(Object, "create"),
        gz = Oz(oz),
        Sz = Oz(qz),
        pz = Oz(Fz),
        Pz = Oz(Wz),
        Gz = Oz(Nz),
        Rz = zz ? zz.prototype : void 0,
        Az = Rz ? Rz.valueOf : void 0,
        xz = Rz ? Rz.toString : void 0;

      function Jz(CC) {
        var zC = -1,
          ZC = CC ? CC.length : 0;
        for (this.clear(); ++zC < ZC;) {
          var QC = CC[zC];
          this.set(QC[0], QC[1])
        }
      }

      function Iz(CC) {
        var zC = -1,
          ZC = CC ? CC.length : 0;
        for (this.clear(); ++zC < ZC;) {
          var QC = CC[zC];
          this.set(QC[0], QC[1])
        }
      }

      function iz(CC) {
        var zC = -1,
          ZC = CC ? CC.length : 0;
        for (this.clear(); ++zC < ZC;) {
          var QC = CC[zC];
          this.set(QC[0], QC[1])
        }
      }

      function vz(CC) {
        var zC = -1,
          ZC = CC ? CC.length : 0;
        for (this.__data__ = new iz; ++zC < ZC;) this.add(CC[zC])
      }

      function ez(CC) {
        this.__data__ = new Iz(CC)
      }

      function hz(CC, zC) {
        var ZC = zZ(CC) || CZ(CC) ? function(CC, zC) {
            for (var ZC = -1, QC = Array(CC); ++ZC < CC;) QC[ZC] = zC(ZC);
            return QC
          }(CC.length, String) : [],
          QC = ZC.length,
          wC = !!QC;
        for (var bC in CC) !zC && !kC.call(CC, bC) || wC && ("length" == bC || Dz(bC, QC)) || ZC.push(bC);
        return ZC
      }

      function Kz(CC, zC) {
        for (var ZC = CC.length; ZC--;)
          if (Vz(CC[ZC][0], zC)) return ZC;
        return -1
      }
      Jz.prototype.clear = function() {
        this.__data__ = Mz ? Mz(null) : {}
      }, Jz.prototype.delete = function(CC) {
        return this.has(CC) && delete this.__data__[CC]
      }, Jz.prototype.get = function(CC) {
        var zC = this.__data__;
        if (Mz) {
          var QC = zC[CC];
          return QC === ZC ? void 0 : QC
        }
        return kC.call(zC, CC) ? zC[CC] : void 0
      }, Jz.prototype.has = function(CC) {
        var zC = this.__data__;
        return Mz ? void 0 !== zC[CC] : kC.call(zC, CC)
      }, Jz.prototype.set = function(CC, zC) {
        return this.__data__[CC] = Mz && void 0 === zC ? ZC : zC, this
      }, Iz.prototype.clear = function() {
        this.__data__ = []
      }, Iz.prototype.delete = function(CC) {
        var zC = this.__data__,
          ZC = Kz(zC, CC);
        return !(ZC < 0) && (ZC == zC.length - 1 ? zC.pop() : nz.call(zC, ZC, 1), !0)
      }, Iz.prototype.get = function(CC) {
        var zC = this.__data__,
          ZC = Kz(zC, CC);
        return ZC < 0 ? void 0 : zC[ZC][1]
      }, Iz.prototype.has = function(CC) {
        return Kz(this.__data__, CC) > -1
      }, Iz.prototype.set = function(CC, zC) {
        var ZC = this.__data__,
          QC = Kz(ZC, CC);
        return QC < 0 ? ZC.push([CC, zC]) : ZC[QC][1] = zC, this
      }, iz.prototype.clear = function() {
        this.__data__ = {
          hash: new Jz,
          map: new(qz || Iz),
          string: new Jz
        }
      }, iz.prototype.delete = function(CC) {
        return Tz(this, CC).delete(CC)
      }, iz.prototype.get = function(CC) {
        return Tz(this, CC).get(CC)
      }, iz.prototype.has = function(CC) {
        return Tz(this, CC).has(CC)
      }, iz.prototype.set = function(CC, zC) {
        return Tz(this, CC).set(CC, zC), this
      }, vz.prototype.add = vz.prototype.push = function(CC) {
        return this.__data__.set(CC, ZC), this
      }, vz.prototype.has = function(CC) {
        return this.__data__.has(CC)
      }, ez.prototype.clear = function() {
        this.__data__ = new Iz
      }, ez.prototype.delete = function(CC) {
        return this.__data__.delete(CC)
      }, ez.prototype.get = function(CC) {
        return this.__data__.get(CC)
      }, ez.prototype.has = function(CC) {
        return this.__data__.has(CC)
      }, ez.prototype.set = function(CC, zC) {
        var ZC = this.__data__;
        if (ZC instanceof Iz) {
          var QC = ZC.__data__;
          if (!qz || QC.length < 199) return QC.push([CC, zC]), this;
          ZC = this.__data__ = new iz(QC)
        }
        return ZC.set(CC, zC), this
      };
      var Yz, dz = function(CC, zC, ZC) {
        for (var QC = -1, wC = Object(CC), bC = ZC(CC), nC = bC.length; nC--;) {
          var fC = bC[Yz ? nC : ++QC];
          if (!1 === zC(wC[fC], fC, wC)) break
        }
        return CC
      };

      function mz(CC, zC) {
        return CC && dz(CC, zC, FZ)
      }

      function Hz(CC, zC) {
        for (var ZC = 0, QC = (zC = jz(zC, CC) ? [zC] : rz(zC)).length; null != CC && ZC < QC;) CC = CC[Bz(zC[ZC++])];
        return ZC && ZC == QC ? CC : void 0
      }

      function Ez(CC, zC) {
        return null != CC && zC in Object(CC)
      }

      function lz(CC, zC, ZC, QC, wC) {
        return CC === zC || (null == CC || null == zC || !bZ(CC) && !nZ(zC) ? CC !== CC && zC !== zC : function(CC, zC, ZC, QC, wC, FC) {
          var gC = zZ(CC),
            RC = zZ(zC),
            JC = nC,
            IC = nC;
          gC || (JC = (JC = tz(CC)) == bC ? MC : JC);
          RC || (IC = (IC = tz(zC)) == bC ? MC : IC);
          var iC = JC == MC && !TC(CC),
            vC = IC == MC && !TC(zC),
            eC = JC == IC;
          if (eC && !iC) return FC || (FC = new ez), gC || qZ(CC) ? sz(CC, zC, ZC, QC, wC, FC) : function(CC, zC, ZC, QC, wC, bC, nC) {
            switch (ZC) {
              case xC:
                if (CC.byteLength != zC.byteLength || CC.byteOffset != zC.byteOffset) return !1;
                CC = CC.buffer, zC = zC.buffer;
              case AC:
                return !(CC.byteLength != zC.byteLength || !QC(new Zz(CC), new Zz(zC)));
              case fC:
              case oC:
              case NC:
                return Vz(+CC, +zC);
              case qC:
                return CC.name == zC.name && CC.message == zC.message;
              case SC:
              case PC:
                return CC == zC + "";
              case WC:
                var FC = aC;
              case pC:
                var MC = 2 & bC;
                if (FC || (FC = DC), CC.size != zC.size && !MC) return !1;
                var gC = nC.get(CC);
                if (gC) return gC == zC;
                bC |= 1, nC.set(CC, zC);
                var RC = sz(FC(CC), FC(zC), QC, wC, bC, nC);
                return nC.delete(CC), RC;
              case GC:
                if (Az) return Az.call(CC) == Az.call(zC)
            }
            return !1
          }(CC, zC, JC, ZC, QC, wC, FC);
          if (!(2 & wC)) {
            var hC = iC && kC.call(CC, "__wrapped__"),
              KC = vC && kC.call(zC, "__wrapped__");
            if (hC || KC) {
              var YC = hC ? CC.value() : CC,
                dC = KC ? zC.value() : zC;
              return FC || (FC = new ez), ZC(YC, dC, QC, wC, FC)
            }
          }
          if (!eC) return !1;
          return FC || (FC = new ez),
            function(CC, zC, ZC, QC, wC, bC) {
              var nC = 2 & wC,
                fC = FZ(CC),
                oC = fC.length,
                qC = FZ(zC),
                FC = qC.length;
              if (oC != FC && !nC) return !1;
              var WC = oC;
              for (; WC--;) {
                var NC = fC[WC];
                if (!(nC ? NC in zC : kC.call(zC, NC))) return !1
              }
              var MC = bC.get(CC);
              if (MC && bC.get(zC)) return MC == zC;
              var gC = !0;
              bC.set(CC, zC), bC.set(zC, CC);
              var SC = nC;
              for (; ++WC < oC;) {
                var pC = CC[NC = fC[WC]],
                  PC = zC[NC];
                if (QC) var GC = nC ? QC(PC, pC, NC, zC, CC, bC) : QC(pC, PC, NC, CC, zC, bC);
                if (!(void 0 === GC ? pC === PC || ZC(pC, PC, QC, wC, bC) : GC)) {
                  gC = !1;
                  break
                }
                SC || (SC = "constructor" == NC)
              }
              if (gC && !SC) {
                var RC = CC.constructor,
                  AC = zC.constructor;
                RC == AC || !("constructor" in CC) || !("constructor" in zC) || "function" == typeof RC && RC instanceof RC && "function" == typeof AC && AC instanceof AC || (gC = !1)
              }
              return bC.delete(CC), bC.delete(zC), gC
            }(CC, zC, ZC, QC, wC, FC)
        }(CC, zC, lz, ZC, QC, wC))
      }

      function Xz(CC) {
        return !(!bZ(CC) || (zC = CC, BC && BC in zC)) && (QZ(CC) || TC(CC) ? Cz : hC).test(Oz(CC));
        var zC
      }

      function cz(CC) {
        return "function" == typeof CC ? CC : null == CC ? WZ : "object" == typeof CC ? zZ(CC) ? function(CC, zC) {
          if (jz(CC) && yz(zC)) return Lz(Bz(CC), zC);
          return function(ZC) {
            var QC = function(CC, zC, ZC) {
              var QC = null == CC ? void 0 : Hz(CC, zC);
              return void 0 === QC ? ZC : QC
            }(ZC, CC);
            return void 0 === QC && QC === zC ? function(CC, zC) {
              return null != CC && function(CC, zC, ZC) {
                zC = jz(zC, CC) ? [zC] : rz(zC);
                var QC, wC = -1,
                  bC = zC.length;
                for (; ++wC < bC;) {
                  var nC = Bz(zC[wC]);
                  if (!(QC = null != CC && ZC(CC, nC))) break;
                  CC = CC[nC]
                }
                if (QC) return QC;
                bC = CC ? CC.length : 0;
                return !!bC && wZ(bC) && Dz(nC, bC) && (zZ(CC) || CZ(CC))
              }(CC, zC, Ez)
            }(ZC, CC) : lz(zC, QC, void 0, 3)
          }
        }(CC[0], CC[1]) : function(CC) {
          var zC = function(CC) {
            var zC = FZ(CC),
              ZC = zC.length;
            for (; ZC--;) {
              var QC = zC[ZC],
                wC = CC[QC];
              zC[ZC] = [QC, wC, yz(wC)]
            }
            return zC
          }(CC);
          if (1 == zC.length && zC[0][2]) return Lz(zC[0][0], zC[0][1]);
          return function(ZC) {
            return ZC === CC || function(CC, zC, ZC, QC) {
              var wC = ZC.length,
                bC = wC,
                nC = !QC;
              if (null == CC) return !bC;
              for (CC = Object(CC); wC--;) {
                var fC = ZC[wC];
                if (nC && fC[2] ? fC[1] !== CC[fC[0]] : !(fC[0] in CC)) return !1
              }
              for (; ++wC < bC;) {
                var oC = (fC = ZC[wC])[0],
                  qC = CC[oC],
                  FC = fC[1];
                if (nC && fC[2]) {
                  if (void 0 === qC && !(oC in CC)) return !1
                } else {
                  var WC = new ez;
                  if (QC) var NC = QC(qC, FC, oC, CC, zC, WC);
                  if (!(void 0 === NC ? lz(FC, qC, QC, 3, WC) : NC)) return !1
                }
              }
              return !0
            }(ZC, CC, zC)
          }
        }(CC) : function(CC) {
          return jz(CC) ? (zC = Bz(CC), function(CC) {
            return null == CC ? void 0 : CC[zC]
          }) : function(CC) {
            return function(zC) {
              return Hz(zC, CC)
            }
          }(CC);
          var zC
        }(CC)
      }

      function uz(CC) {
        if (! function(CC) {
            var zC = CC && CC.constructor,
              ZC = "function" == typeof zC && zC.prototype || LC;
            return CC === ZC
          }(CC)) return fz(CC);
        var zC = [];
        for (var ZC in Object(CC)) kC.call(CC, ZC) && "constructor" != ZC && zC.push(ZC);
        return zC
      }

      function rz(CC) {
        return zZ(CC) ? CC : Uz(CC)
      }

      function sz(CC, zC, ZC, QC, wC, bC) {
        var nC = 2 & wC,
          fC = CC.length,
          oC = zC.length;
        if (fC != oC && !(nC && oC > fC)) return !1;
        var qC = bC.get(CC);
        if (qC && bC.get(zC)) return qC == zC;
        var FC = -1,
          WC = !0,
          NC = 1 & wC ? new vz : void 0;
        for (bC.set(CC, zC), bC.set(zC, CC); ++FC < fC;) {
          var MC = CC[FC],
            gC = zC[FC];
          if (QC) var SC = nC ? QC(gC, MC, FC, zC, CC, bC) : QC(MC, gC, FC, CC, zC, bC);
          if (void 0 !== SC) {
            if (SC) continue;
            WC = !1;
            break
          }
          if (NC) {
            if (!sC(zC, (function(CC, zC) {
                if (!NC.has(zC) && (MC === CC || ZC(MC, CC, QC, wC, bC))) return NC.add(zC)
              }))) {
              WC = !1;
              break
            }
          } else if (MC !== gC && !ZC(MC, gC, QC, wC, bC)) {
            WC = !1;
            break
          }
        }
        return bC.delete(CC), bC.delete(zC), WC
      }

      function Tz(CC, zC) {
        var ZC = CC.__data__;
        return function(CC) {
          var zC = typeof CC;
          return "string" == zC || "number" == zC || "symbol" == zC || "boolean" == zC ? "__proto__" !== CC : null === CC
        }(zC) ? ZC["string" == typeof zC ? "string" : "hash"] : ZC.map
      }

      function az(CC, zC) {
        var ZC = function(CC, zC) {
          return null == CC ? void 0 : CC[zC]
        }(CC, zC);
        return Xz(ZC) ? ZC : void 0
      }
      var tz = function(CC) {
        return VC.call(CC)
      };

      function Dz(CC, zC) {
        return !!(zC = null == zC ? QC : zC) && ("number" == typeof CC || KC.test(CC)) && CC > -1 && CC % 1 == 0 && CC < zC
      }

      function jz(CC, zC) {
        if (zZ(CC)) return !1;
        var ZC = typeof CC;
        return !("number" != ZC && "symbol" != ZC && "boolean" != ZC && null != CC && !fZ(CC)) || (IC.test(CC) || !JC.test(CC) || null != zC && CC in Object(zC))
      }

      function yz(CC) {
        return CC === CC && !bZ(CC)
      }

      function Lz(CC, zC) {
        return function(ZC) {
          return null != ZC && (ZC[CC] === zC && (void 0 !== zC || CC in Object(ZC)))
        }
      }(oz && tz(new oz(new ArrayBuffer(1))) != xC || qz && tz(new qz) != WC || Fz && tz(Fz.resolve()) != gC || Wz && tz(new Wz) != pC || Nz && tz(new Nz) != RC) && (tz = function(CC) {
        var zC = VC.call(CC),
          ZC = zC == MC ? CC.constructor : void 0,
          QC = ZC ? Oz(ZC) : void 0;
        if (QC) switch (QC) {
          case gz:
            return xC;
          case Sz:
            return WC;
          case pz:
            return gC;
          case Pz:
            return pC;
          case Gz:
            return RC
        }
        return zC
      });
      var Uz = kz((function(CC) {
        var zC;
        CC = null == (zC = CC) ? "" : function(CC) {
          if ("string" == typeof CC) return CC;
          if (fZ(CC)) return xz ? xz.call(CC) : "";
          var zC = CC + "";
          return "0" == zC && 1 / CC == -1 / 0 ? "-0" : zC
        }(zC);
        var ZC = [];
        return iC.test(CC) && ZC.push(""), CC.replace(vC, (function(CC, zC, QC, wC) {
          ZC.push(QC ? wC.replace(eC, "$1") : zC || CC)
        })), ZC
      }));

      function Bz(CC) {
        if ("string" == typeof CC || fZ(CC)) return CC;
        var zC = CC + "";
        return "0" == zC && 1 / CC == -1 / 0 ? "-0" : zC
      }

      function Oz(CC) {
        if (null != CC) {
          try {
            return OC.call(CC)
          } catch (zC) {}
          try {
            return CC + ""
          } catch (zC) {}
        }
        return ""
      }

      function kz(CC, zC) {
        if ("function" != typeof CC || zC && "function" != typeof zC) throw new TypeError("Expected a function");
        var ZC = function() {
          var QC = arguments,
            wC = zC ? zC.apply(this, QC) : QC[0],
            bC = ZC.cache;
          if (bC.has(wC)) return bC.get(wC);
          var nC = CC.apply(this, QC);
          return ZC.cache = bC.set(wC, nC), nC
        };
        return ZC.cache = new(kz.Cache || iz), ZC
      }

      function Vz(CC, zC) {
        return CC === zC || CC !== CC && zC !== zC
      }

      function CZ(CC) {
        return function(CC) {
          return nZ(CC) && ZZ(CC)
        }(CC) && kC.call(CC, "callee") && (!bz.call(CC, "callee") || VC.call(CC) == bC)
      }
      kz.Cache = iz;
      var zZ = Array.isArray;

      function ZZ(CC) {
        return null != CC && wZ(CC.length) && !QZ(CC)
      }

      function QZ(CC) {
        var zC = bZ(CC) ? VC.call(CC) : "";
        return zC == FC || "[object GeneratorFunction]" == zC
      }

      function wZ(CC) {
        return "number" == typeof CC && CC > -1 && CC % 1 == 0 && CC <= QC
      }

      function bZ(CC) {
        var zC = typeof CC;
        return !!CC && ("object" == zC || "function" == zC)
      }

      function nZ(CC) {
        return !!CC && "object" == typeof CC
      }

      function fZ(CC) {
        return "symbol" == typeof CC || nZ(CC) && VC.call(CC) == GC
      }
      var oZ, qZ = uC ? (oZ = uC, function(CC) {
        return oZ(CC)
      }) : function(CC) {
        return nZ(CC) && wZ(CC.length) && !!YC[VC.call(CC)]
      };

      function FZ(CC) {
        return ZZ(CC) ? hz(CC) : uz(CC)
      }

      function WZ(CC) {
        return CC
      }
      CC.exports = function(CC, zC, ZC) {
        var QC, wC = zZ(CC) || qZ(CC);
        if (zC = cz(zC), null == ZC)
          if (wC || bZ(CC)) {
            var bC = CC.constructor;
            ZC = wC ? zZ(CC) ? new bC : [] : QZ(bC) ? bZ(QC = Qz(CC)) ? wz(QC) : {} : {}
          } else ZC = {};
        return (wC ? rC : mz)(CC, (function(CC, QC, wC) {
          return zC(ZC, CC, QC, wC)
        })), ZC
      }
    }(cb, cb.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      k: ub
    } = QC
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);