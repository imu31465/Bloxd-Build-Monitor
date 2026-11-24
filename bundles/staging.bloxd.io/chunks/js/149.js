export const id = 149;
export const ids = [149];
export const modules = {
  8228: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => Jo,
      h: () => RZ
    });
    var TB = {};
    ZB.r(TB), ZB.d(TB, {
      c: () => TT,
      j: () => GT,
      g: () => oT,
      n: () => EZ,
      p: () => xZ,
      s: () => pT,
      t: () => VZ,
      w: () => MT,
      x: () => QT,
      A: () => HT,
      C: () => DZ,
      E: () => wT,
      F: () => iT,
      H: () => aT,
      O: () => KZ,
      K: () => IT,
      Q: () => YT,
      S: () => OT
    });
    var JB = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function oB(BB) {
      return BB && BB.__esModule && Object.prototype.hasOwnProperty.call(BB, "default") ? BB.default : BB
    }
    var GB = {
      exports: {}
    };
    ! function(BB) {
      var IB = Object.prototype.hasOwnProperty,
        ZB = "~";

      function TB() {}

      function JB(BB, IB, ZB) {
        this.vN = BB, this.context = IB, this.once = ZB || !1
      }

      function oB(BB, IB, TB, oB, GB) {
        if ("function" !== typeof TB) throw new TypeError("The listener must be a function");
        var vB = new JB(TB, oB || BB, GB),
          kB = ZB ? ZB + IB : IB;
        return BB._events[kB] ? BB._events[kB].vN ? BB._events[kB] = [BB._events[kB], vB] : BB._events[kB].push(vB) : (BB._events[kB] = vB, BB._eventsCount++), BB
      }

      function GB(BB, IB) {
        0 === --BB._eventsCount ? BB._events = new TB : delete BB._events[IB]
      }

      function vB() {
        this._events = new TB, this._eventsCount = 0
      }
      Object.create && (TB.prototype = Object.create(null), (new TB).__proto__ || (ZB = !1)), vB.prototype.eventNames = function() {
        var BB, TB, JB = [];
        if (0 === this._eventsCount) return JB;
        for (TB in BB = this._events) IB.call(BB, TB) && JB.push(ZB ? TB.slice(1) : TB);
        return Object.getOwnPropertySymbols ? JB.concat(Object.getOwnPropertySymbols(BB)) : JB
      }, vB.prototype.listeners = function(BB) {
        var IB = ZB ? ZB + BB : BB,
          TB = this._events[IB];
        if (!TB) return [];
        if (TB.vN) return [TB.vN];
        for (var JB = 0, oB = TB.length, GB = new Array(oB); JB < oB; JB++) GB[JB] = TB[JB].vN;
        return GB
      }, vB.prototype.listenerCount = function(BB) {
        var IB = ZB ? ZB + BB : BB,
          TB = this._events[IB];
        return TB ? TB.vN ? 1 : TB.length : 0
      }, vB.prototype.emit = function(BB, IB, TB, JB, oB, GB) {
        var vB = ZB ? ZB + BB : BB;
        if (!this._events[vB]) return !1;
        var kB, cB, nB = this._events[vB],
          hB = arguments.length;
        if (nB.vN) {
          switch (nB.once && this.removeListener(BB, nB.vN, void 0, !0), hB) {
            case 1:
              return nB.vN.call(nB.context), !0;
            case 2:
              return nB.vN.call(nB.context, IB), !0;
            case 3:
              return nB.vN.call(nB.context, IB, TB), !0;
            case 4:
              return nB.vN.call(nB.context, IB, TB, JB), !0;
            case 5:
              return nB.vN.call(nB.context, IB, TB, JB, oB), !0;
            case 6:
              return nB.vN.call(nB.context, IB, TB, JB, oB, GB), !0
          }
          for (cB = 1, kB = new Array(hB - 1); cB < hB; cB++) kB[cB - 1] = arguments[cB];
          nB.vN.apply(nB.context, kB)
        } else {
          var zB, FB = nB.length;
          for (cB = 0; cB < FB; cB++) switch (nB[cB].once && this.removeListener(BB, nB[cB].vN, void 0, !0), hB) {
            case 1:
              nB[cB].vN.call(nB[cB].context);
              break;
            case 2:
              nB[cB].vN.call(nB[cB].context, IB);
              break;
            case 3:
              nB[cB].vN.call(nB[cB].context, IB, TB);
              break;
            case 4:
              nB[cB].vN.call(nB[cB].context, IB, TB, JB);
              break;
            default:
              if (!kB)
                for (zB = 1, kB = new Array(hB - 1); zB < hB; zB++) kB[zB - 1] = arguments[zB];
              nB[cB].vN.apply(nB[cB].context, kB)
          }
        }
        return !0
      }, vB.prototype.on = function(BB, IB, ZB) {
        return oB(this, BB, IB, ZB, !1)
      }, vB.prototype.once = function(BB, IB, ZB) {
        return oB(this, BB, IB, ZB, !0)
      }, vB.prototype.removeListener = function(BB, IB, TB, JB) {
        var oB = ZB ? ZB + BB : BB;
        if (!this._events[oB]) return this;
        if (!IB) return GB(this, oB), this;
        var vB = this._events[oB];
        if (vB.vN) vB.vN !== IB || JB && !vB.once || TB && vB.context !== TB || GB(this, oB);
        else {
          for (var kB = 0, cB = [], nB = vB.length; kB < nB; kB++)(vB[kB].vN !== IB || JB && !vB[kB].once || TB && vB[kB].context !== TB) && cB.push(vB[kB]);
          cB.length ? this._events[oB] = 1 === cB.length ? cB[0] : cB : GB(this, oB)
        }
        return this
      }, vB.prototype.jy = function(BB) {
        var IB;
        return BB ? (IB = ZB ? ZB + BB : BB, this._events[IB] && GB(this, IB)) : (this._events = new TB, this._eventsCount = 0), this
      }, vB.prototype.off = vB.prototype.removeListener, vB.prototype.addListener = vB.prototype.on, vB.prefixed = ZB, vB.EventEmitter = vB, BB.exports = vB
    }(GB);
    var vB, kB, cB = oB(GB.exports);
    ! function(BB) {
      BB.assertEqual = BB => BB, BB.assertIs = function(BB) {}, BB.assertNever = function(BB) {
        throw new Error
      }, BB.arrayToEnum = BB => {
        const IB = {};
        for (const ZB of BB) IB[ZB] = ZB;
        return IB
      }, BB.getValidEnumValues = IB => {
        const ZB = BB.objectKeys(IB).filter((BB => "number" !== typeof IB[IB[BB]])),
          TB = {};
        for (const BB of ZB) TB[BB] = IB[BB];
        return BB.objectValues(TB)
      }, BB.objectValues = IB => BB.objectKeys(IB).map((function(BB) {
        return IB[BB]
      })), BB.objectKeys = "function" === typeof Object.keys ? BB => Object.keys(BB) : BB => {
        const IB = [];
        for (const ZB in BB) Object.prototype.hasOwnProperty.call(BB, ZB) && IB.push(ZB);
        return IB
      }, BB.find = (BB, IB) => {
        for (const ZB of BB)
          if (IB(ZB)) return ZB
      }, BB.isInteger = "function" === typeof Number.isInteger ? BB => Number.isInteger(BB) : BB => "number" === typeof BB && isFinite(BB) && Math.floor(BB) === BB, BB.joinValues = function(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return BB.map((BB => "string" === typeof BB ? `'${BB}'` : BB)).join(IB)
      }, BB.jsonStringifyReplacer = (BB, IB) => "bigint" === typeof IB ? IB.toString() : IB
    }(vB || (vB = {})),
    function(BB) {
      BB.mergeShapes = (BB, IB) => ({
        ...BB,
        ...IB
      })
    }(kB || (kB = {}));
    const nB = vB.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      hB = BB => {
        switch (typeof BB) {
          case "undefined":
            return nB.undefined;
          case "string":
            return nB.string;
          case "number":
            return isNaN(BB) ? nB.nan : nB.number;
          case "boolean":
            return nB.boolean;
          case "function":
            return nB.function;
          case "bigint":
            return nB.bigint;
          case "symbol":
            return nB.symbol;
          case "object":
            return Array.isArray(BB) ? nB.array : null === BB ? nB.null : BB.then && "function" === typeof BB.then && BB.catch && "function" === typeof BB.catch ? nB.promise : "undefined" !== typeof Map && BB instanceof Map ? nB.map : "undefined" !== typeof Set && BB instanceof Set ? nB.set : "undefined" !== typeof Date && BB instanceof Date ? nB.date : nB.object;
          default:
            return nB.unknown
        }
      },
      zB = vB.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class FB extends Error {
      constructor(BB) {
        var IB;
        super(), IB = this, this.issues = [], this.addIssue = BB => {
          this.issues = [...this.issues, BB]
        }, this.addIssues = function() {
          let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          IB.issues = [...IB.issues, ...BB]
        };
        const ZB = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, ZB) : this.__proto__ = ZB, this.name = "ZodError", this.issues = BB
      }
      get errors() {
        return this.issues
      }
      format(BB) {
        const IB = BB || function(BB) {
            return BB.message
          },
          ZB = {
            _errors: []
          },
          TB = BB => {
            for (const JB of BB.issues)
              if ("invalid_union" === JB.code) JB.unionErrors.map(TB);
              else if ("invalid_return_type" === JB.code) TB(JB.returnTypeError);
            else if ("invalid_arguments" === JB.code) TB(JB.argumentsError);
            else if (0 === JB.path.length) ZB._errors.push(IB(JB));
            else {
              let BB = ZB,
                TB = 0;
              for (; TB < JB.path.length;) {
                const ZB = JB.path[TB];
                TB === JB.path.length - 1 ? (BB[ZB] = BB[ZB] || {
                  _errors: []
                }, BB[ZB]._errors.push(IB(JB))) : BB[ZB] = BB[ZB] || {
                  _errors: []
                }, BB = BB[ZB], TB++
              }
            }
          };
        return TB(this), ZB
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, vB.jsonStringifyReplacer, 2)
      }
      get hN() {
        return 0 === this.issues.length
      }
      flatten() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BB => BB.message;
        const IB = {},
          ZB = [];
        for (const TB of this.issues) TB.path.length > 0 ? (IB[TB.path[0]] = IB[TB.path[0]] || [], IB[TB.path[0]].push(BB(TB))) : ZB.push(BB(TB));
        return {
          formErrors: ZB,
          fieldErrors: IB
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    FB.create = BB => new FB(BB);
    const NB = (BB, IB) => {
      let ZB;
      switch (BB.code) {
        case zB.invalid_type:
          ZB = BB.received === nB.undefined ? "Required" : `Expected ${BB.expected}, received ${BB.received}`;
          break;
        case zB.invalid_literal:
          ZB = `Invalid literal value, expected ${JSON.stringify(BB.expected,vB.jsonStringifyReplacer)}`;
          break;
        case zB.unrecognized_keys:
          ZB = `Unrecognized key(s) in object: ${vB.joinValues(BB.keys,", ")}`;
          break;
        case zB.invalid_union:
          ZB = "Invalid input";
          break;
        case zB.invalid_union_discriminator:
          ZB = `Invalid discriminator value. Expected ${vB.joinValues(BB.options)}`;
          break;
        case zB.invalid_enum_value:
          ZB = `Invalid enum value. Expected ${vB.joinValues(BB.options)}, received '${BB.received}'`;
          break;
        case zB.invalid_arguments:
          ZB = "Invalid function arguments";
          break;
        case zB.invalid_return_type:
          ZB = "Invalid function return type";
          break;
        case zB.invalid_date:
          ZB = "Invalid date";
          break;
        case zB.invalid_string:
          "object" === typeof BB.validation ? "includes" in BB.validation ? (ZB = `Invalid input: must include "${BB.validation.includes}"`, "number" === typeof BB.validation.position && (ZB = `${ZB} at one or more positions greater than or equal to ${BB.validation.position}`)) : "startsWith" in BB.validation ? ZB = `Invalid input: must start with "${BB.validation.startsWith}"` : "endsWith" in BB.validation ? ZB = `Invalid input: must end with "${BB.validation.endsWith}"` : vB.assertNever(BB.validation) : ZB = "regex" !== BB.validation ? `Invalid ${BB.validation}` : "Invalid";
          break;
        case zB.too_small:
          ZB = "array" === BB.type ? `Array must contain ${BB.exact?"exactly":BB.inclusive?"at least":"more than"} ${BB.minimum} element(s)` : "string" === BB.type ? `String must contain ${BB.exact?"exactly":BB.inclusive?"at least":"over"} ${BB.minimum} character(s)` : "number" === BB.type ? `Number must be ${BB.exact?"exactly equal to ":BB.inclusive?"greater than or equal to ":"greater than "}${BB.minimum}` : "date" === BB.type ? `Date must be ${BB.exact?"exactly equal to ":BB.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(BB.minimum))}` : "Invalid input";
          break;
        case zB.too_big:
          ZB = "array" === BB.type ? `Array must contain ${BB.exact?"exactly":BB.inclusive?"at most":"less than"} ${BB.maximum} element(s)` : "string" === BB.type ? `String must contain ${BB.exact?"exactly":BB.inclusive?"at most":"under"} ${BB.maximum} character(s)` : "number" === BB.type ? `Number must be ${BB.exact?"exactly":BB.inclusive?"less than or equal to":"less than"} ${BB.maximum}` : "bigint" === BB.type ? `BigInt must be ${BB.exact?"exactly":BB.inclusive?"less than or equal to":"less than"} ${BB.maximum}` : "date" === BB.type ? `Date must be ${BB.exact?"exactly":BB.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(BB.maximum))}` : "Invalid input";
          break;
        case zB.custom:
          ZB = "Invalid input";
          break;
        case zB.invalid_intersection_types:
          ZB = "Intersection results could not be merged";
          break;
        case zB.not_multiple_of:
          ZB = `Number must be a multiple of ${BB.multipleOf}`;
          break;
        case zB.not_finite:
          ZB = "Number must be finite";
          break;
        default:
          ZB = IB.defaultError, vB.assertNever(BB)
      }
      return {
        message: ZB
      }
    };
    let gB = NB;

    function qB() {
      return gB
    }
    const yB = BB => {
      const {
        data: IB,
        path: ZB,
        errorMaps: TB,
        issueData: JB
      } = BB, oB = [...ZB, ...JB.path || []], GB = {
        ...JB,
        path: oB
      };
      let vB = "";
      const kB = TB.filter((BB => !!BB)).slice().reverse();
      for (const cB of kB) vB = cB(GB, {
        data: IB,
        defaultError: vB
      }).message;
      return {
        ...JB,
        path: oB,
        message: JB.message || vB
      }
    };

    function UB(BB, IB) {
      const ZB = yB({
        issueData: IB,
        data: BB.data,
        path: BB.path,
        errorMaps: [BB.common.contextualErrorMap, BB.schemaErrorMap, qB(), NB].filter((BB => !!BB))
      });
      BB.common.issues.push(ZB)
    }
    class WB {
      constructor() {
        this.value = "valid"
      }
      uN() {
        "valid" === this.value && (this.value = "uN")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(BB, IB) {
        const ZB = [];
        for (const TB of IB) {
          if ("aborted" === TB.status) return dB;
          "uN" === TB.status && BB.uN(), ZB.push(TB.value)
        }
        return {
          status: BB.value,
          value: ZB
        }
      }
      static async mergeObjectAsync(BB, IB) {
        const ZB = [];
        for (const TB of IB) ZB.push({
          key: await TB.key,
          value: await TB.value
        });
        return WB.mergeObjectSync(BB, ZB)
      }
      static mergeObjectSync(BB, IB) {
        const ZB = {};
        for (const TB of IB) {
          const {
            key: IB,
            value: JB
          } = TB;
          if ("aborted" === IB.status) return dB;
          if ("aborted" === JB.status) return dB;
          "uN" === IB.status && BB.uN(), "uN" === JB.status && BB.uN(), "__proto__" === IB.value || "undefined" === typeof JB.value && !TB.alwaysSet || (ZB[IB.value] = JB.value)
        }
        return {
          status: BB.value,
          value: ZB
        }
      }
    }
    const dB = Object.freeze({
        status: "aborted"
      }),
      CB = BB => ({
        status: "uN",
        value: BB
      }),
      QB = BB => ({
        status: "valid",
        value: BB
      }),
      sB = BB => "aborted" === BB.status,
      wB = BB => "uN" === BB.status,
      OB = BB => "valid" === BB.status,
      YB = BB => "undefined" !== typeof Promise && BB instanceof Promise;
    var iB;
    ! function(BB) {
      BB.errToObj = BB => "string" === typeof BB ? {
        message: BB
      } : BB || {}, BB.toString = BB => "string" === typeof BB ? BB : null === BB || void 0 === BB ? void 0 : BB.message
    }(iB || (iB = {}));
    class pB {
      constructor(BB, IB, ZB, TB) {
        this._cachedPath = [], this.parent = BB, this.data = IB, this._path = ZB, this._key = TB
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const aB = (BB, IB) => {
      if (OB(IB)) return {
        success: !0,
        data: IB.value
      };
      if (!BB.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const IB = new FB(BB.common.issues);
          return this._error = IB, this._error
        }
      }
    };

    function HB(BB) {
      if (!BB) return {};
      const {
        errorMap: IB,
        invalid_type_error: ZB,
        required_error: TB,
        description: JB
      } = BB;
      if (IB && (ZB || TB)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (IB) return {
        errorMap: IB,
        description: JB
      };
      return {
        errorMap: (BB, IB) => "invalid_type" !== BB.code ? {
          message: IB.defaultError
        } : "undefined" === typeof IB.data ? {
          message: null !== TB && void 0 !== TB ? TB : IB.defaultError
        } : {
          message: null !== ZB && void 0 !== ZB ? ZB : IB.defaultError
        },
        description: JB
      }
    }
    class MB {
      constructor(BB) {
        this.spa = this.safeParseAsync, this._def = BB, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(BB) {
        return hB(BB.data)
      }
      _getOrReturnCtx(BB, IB) {
        return IB || {
          common: BB.parent.common,
          data: BB.data,
          parsedType: hB(BB.data),
          schemaErrorMap: this._def.errorMap,
          path: BB.path,
          parent: BB.parent
        }
      }
      _processInputParams(BB) {
        return {
          status: new WB,
          ctx: {
            common: BB.parent.common,
            data: BB.data,
            parsedType: hB(BB.data),
            schemaErrorMap: this._def.errorMap,
            path: BB.path,
            parent: BB.parent
          }
        }
      }
      _parseSync(BB) {
        const IB = this._parse(BB);
        if (YB(IB)) throw new Error("Synchronous parse encountered promise.");
        return IB
      }
      _parseAsync(BB) {
        const IB = this._parse(BB);
        return Promise.resolve(IB)
      }
      parse(BB, IB) {
        const ZB = this.safeParse(BB, IB);
        if (ZB.success) return ZB.data;
        throw ZB.error
      }
      safeParse(BB, IB) {
        var ZB;
        const TB = {
            common: {
              issues: [],
              async: null !== (ZB = null === IB || void 0 === IB ? void 0 : IB.async) && void 0 !== ZB && ZB,
              contextualErrorMap: null === IB || void 0 === IB ? void 0 : IB.errorMap
            },
            path: (null === IB || void 0 === IB ? void 0 : IB.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: BB,
            parsedType: hB(BB)
          },
          JB = this._parseSync({
            data: BB,
            path: TB.path,
            parent: TB
          });
        return aB(TB, JB)
      }
      async parseAsync(BB, IB) {
        const ZB = await this.safeParseAsync(BB, IB);
        if (ZB.success) return ZB.data;
        throw ZB.error
      }
      async safeParseAsync(BB, IB) {
        const ZB = {
            common: {
              issues: [],
              contextualErrorMap: null === IB || void 0 === IB ? void 0 : IB.errorMap,
              async: !0
            },
            path: (null === IB || void 0 === IB ? void 0 : IB.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: BB,
            parsedType: hB(BB)
          },
          TB = this._parse({
            data: BB,
            path: ZB.path,
            parent: ZB
          }),
          JB = await (YB(TB) ? TB : Promise.resolve(TB));
        return aB(ZB, JB)
      }
      refine(BB, IB) {
        const ZB = BB => "string" === typeof IB || "undefined" === typeof IB ? {
          message: IB
        } : "function" === typeof IB ? IB(BB) : IB;
        return this._refinement(((IB, TB) => {
          const JB = BB(IB),
            oB = () => TB.addIssue({
              code: zB.custom,
              ...ZB(IB)
            });
          return "undefined" !== typeof Promise && JB instanceof Promise ? JB.then((BB => !!BB || (oB(), !1))) : !!JB || (oB(), !1)
        }))
      }
      refinement(BB, IB) {
        return this._refinement(((ZB, TB) => !!BB(ZB) || (TB.addIssue("function" === typeof IB ? IB(ZB, TB) : IB), !1)))
      }
      _refinement(BB) {
        return new dI({
          schema: this,
          typeName: jI.ZodEffects,
          effect: {
            type: "refinement",
            refinement: BB
          }
        })
      }
      superRefine(BB) {
        return this._refinement(BB)
      }
      optional() {
        return CI.create(this, this._def)
      }
      nullable() {
        return QI.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return II.create(this, this._def)
      }
      promise() {
        return WI.create(this, this._def)
      }
      or(BB) {
        return JI.create([this, BB], this._def)
      }
      and(BB) {
        return kI.create(this, BB, this._def)
      }
      transform(BB) {
        return new dI({
          ...HB(this._def),
          schema: this,
          typeName: jI.ZodEffects,
          effect: {
            type: "transform",
            transform: BB
          }
        })
      }
      default (BB) {
        const IB = "function" === typeof BB ? BB : () => BB;
        return new sI({
          ...HB(this._def),
          innerType: this,
          defaultValue: IB,
          typeName: jI.ZodDefault
        })
      }
      brand() {
        return new iI({
          typeName: jI.ZodBranded,
          type: this,
          ...HB(this._def)
        })
      } catch (BB) {
        const IB = "function" === typeof BB ? BB : () => BB;
        return new wI({
          ...HB(this._def),
          innerType: this,
          catchValue: IB,
          typeName: jI.ZodCatch
        })
      }
      describe(BB) {
        return new(0, this.constructor)({
          ...this._def,
          description: BB
        })
      }
      pipe(BB) {
        return pI.create(this, BB)
      }
      readonly() {
        return aI.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const jB = /^c[^\s-]{8,}$/i,
      PB = /^[a-z][a-z0-9]*$/,
      RB = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      rB = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      mB = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let XB;
    const LB = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      eB = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class uB extends MB {
      _parse(BB) {
        this._def.coerce && (BB.data = String(BB.data));
        if (this._getType(BB) !== nB.string) {
          const IB = this._getOrReturnCtx(BB);
          return UB(IB, {
            code: zB.invalid_type,
            expected: nB.string,
            received: IB.parsedType
          }), dB
        }
        const IB = new WB;
        let ZB;
        for (const kB of this._def.checks)
          if ("min" === kB.kind) BB.data.length < kB.value && (ZB = this._getOrReturnCtx(BB, ZB), UB(ZB, {
            code: zB.too_small,
            minimum: kB.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: kB.message
          }), IB.uN());
          else if ("max" === kB.kind) BB.data.length > kB.value && (ZB = this._getOrReturnCtx(BB, ZB), UB(ZB, {
          code: zB.too_big,
          maximum: kB.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: kB.message
        }), IB.uN());
        else if ("length" === kB.kind) {
          const TB = BB.data.length > kB.value,
            JB = BB.data.length < kB.value;
          (TB || JB) && (ZB = this._getOrReturnCtx(BB, ZB), TB ? UB(ZB, {
            code: zB.too_big,
            maximum: kB.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: kB.message
          }) : JB && UB(ZB, {
            code: zB.too_small,
            minimum: kB.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: kB.message
          }), IB.uN())
        } else if ("email" === kB.kind) mB.test(BB.data) || (ZB = this._getOrReturnCtx(BB, ZB), UB(ZB, {
          validation: "email",
          code: zB.invalid_string,
          message: kB.message
        }), IB.uN());
        else if ("emoji" === kB.kind) XB || (XB = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), XB.test(BB.data) || (ZB = this._getOrReturnCtx(BB, ZB), UB(ZB, {
          validation: "emoji",
          code: zB.invalid_string,
          message: kB.message
        }), IB.uN());
        else if ("uuid" === kB.kind) rB.test(BB.data) || (ZB = this._getOrReturnCtx(BB, ZB), UB(ZB, {
          validation: "uuid",
          code: zB.invalid_string,
          message: kB.message
        }), IB.uN());
        else if ("cuid" === kB.kind) jB.test(BB.data) || (ZB = this._getOrReturnCtx(BB, ZB), UB(ZB, {
          validation: "cuid",
          code: zB.invalid_string,
          message: kB.message
        }), IB.uN());
        else if ("cuid2" === kB.kind) PB.test(BB.data) || (ZB = this._getOrReturnCtx(BB, ZB), UB(ZB, {
          validation: "cuid2",
          code: zB.invalid_string,
          message: kB.message
        }), IB.uN());
        else if ("ulid" === kB.kind) RB.test(BB.data) || (ZB = this._getOrReturnCtx(BB, ZB), UB(ZB, {
          validation: "ulid",
          code: zB.invalid_string,
          message: kB.message
        }), IB.uN());
        else if ("url" === kB.kind) try {
          new URL(BB.data)
        } catch (GB) {
          ZB = this._getOrReturnCtx(BB, ZB), UB(ZB, {
            validation: "url",
            code: zB.invalid_string,
            message: kB.message
          }), IB.uN()
        } else if ("regex" === kB.kind) {
          kB.regex.lastIndex = 0;
          kB.regex.test(BB.data) || (ZB = this._getOrReturnCtx(BB, ZB), UB(ZB, {
            validation: "regex",
            code: zB.invalid_string,
            message: kB.message
          }), IB.uN())
        } else if ("trim" === kB.kind) BB.data = BB.data.trim();
        else if ("includes" === kB.kind) BB.data.includes(kB.value, kB.position) || (ZB = this._getOrReturnCtx(BB, ZB), UB(ZB, {
          code: zB.invalid_string,
          validation: {
            includes: kB.value,
            position: kB.position
          },
          message: kB.message
        }), IB.uN());
        else if ("toLowerCase" === kB.kind) BB.data = BB.data.toLowerCase();
        else if ("toUpperCase" === kB.kind) BB.data = BB.data.toUpperCase();
        else if ("startsWith" === kB.kind) BB.data.startsWith(kB.value) || (ZB = this._getOrReturnCtx(BB, ZB), UB(ZB, {
          code: zB.invalid_string,
          validation: {
            startsWith: kB.value
          },
          message: kB.message
        }), IB.uN());
        else if ("endsWith" === kB.kind) BB.data.endsWith(kB.value) || (ZB = this._getOrReturnCtx(BB, ZB), UB(ZB, {
          code: zB.invalid_string,
          validation: {
            endsWith: kB.value
          },
          message: kB.message
        }), IB.uN());
        else if ("datetime" === kB.kind) {
          ((oB = kB).precision ? oB.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${oB.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${oB.precision}}Z$`) : 0 === oB.precision ? oB.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : oB.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(BB.data) || (ZB = this._getOrReturnCtx(BB, ZB), UB(ZB, {
            code: zB.invalid_string,
            validation: "datetime",
            message: kB.message
          }), IB.uN())
        } else "ip" === kB.kind ? (TB = BB.data, ("v4" !== (JB = kB.version) && JB || !LB.test(TB)) && ("v6" !== JB && JB || !eB.test(TB)) && (ZB = this._getOrReturnCtx(BB, ZB), UB(ZB, {
          validation: "ip",
          code: zB.invalid_string,
          message: kB.message
        }), IB.uN())) : vB.assertNever(kB);
        var TB, JB, oB;
        return {
          status: IB.value,
          value: BB.data
        }
      }
      _regex(BB, IB, ZB) {
        return this.refinement((IB => BB.test(IB)), {
          validation: IB,
          code: zB.invalid_string,
          ...iB.errToObj(ZB)
        })
      }
      _addCheck(BB) {
        return new uB({
          ...this._def,
          checks: [...this._def.checks, BB]
        })
      }
      email(BB) {
        return this._addCheck({
          kind: "email",
          ...iB.errToObj(BB)
        })
      }
      url(BB) {
        return this._addCheck({
          kind: "url",
          ...iB.errToObj(BB)
        })
      }
      emoji(BB) {
        return this._addCheck({
          kind: "emoji",
          ...iB.errToObj(BB)
        })
      }
      uuid(BB) {
        return this._addCheck({
          kind: "uuid",
          ...iB.errToObj(BB)
        })
      }
      cuid(BB) {
        return this._addCheck({
          kind: "cuid",
          ...iB.errToObj(BB)
        })
      }
      cuid2(BB) {
        return this._addCheck({
          kind: "cuid2",
          ...iB.errToObj(BB)
        })
      }
      ulid(BB) {
        return this._addCheck({
          kind: "ulid",
          ...iB.errToObj(BB)
        })
      }
      ip(BB) {
        return this._addCheck({
          kind: "ip",
          ...iB.errToObj(BB)
        })
      }
      datetime(BB) {
        var IB;
        return "string" === typeof BB ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: BB
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === BB || void 0 === BB ? void 0 : BB.precision) ? null : null === BB || void 0 === BB ? void 0 : BB.precision,
          offset: null !== (IB = null === BB || void 0 === BB ? void 0 : BB.offset) && void 0 !== IB && IB,
          ...iB.errToObj(null === BB || void 0 === BB ? void 0 : BB.message)
        })
      }
      regex(BB, IB) {
        return this._addCheck({
          kind: "regex",
          regex: BB,
          ...iB.errToObj(IB)
        })
      }
      includes(BB, IB) {
        return this._addCheck({
          kind: "includes",
          value: BB,
          position: null === IB || void 0 === IB ? void 0 : IB.position,
          ...iB.errToObj(null === IB || void 0 === IB ? void 0 : IB.message)
        })
      }
      startsWith(BB, IB) {
        return this._addCheck({
          kind: "startsWith",
          value: BB,
          ...iB.errToObj(IB)
        })
      }
      endsWith(BB, IB) {
        return this._addCheck({
          kind: "endsWith",
          value: BB,
          ...iB.errToObj(IB)
        })
      }
      min(BB, IB) {
        return this._addCheck({
          kind: "min",
          value: BB,
          ...iB.errToObj(IB)
        })
      }
      max(BB, IB) {
        return this._addCheck({
          kind: "max",
          value: BB,
          ...iB.errToObj(IB)
        })
      }
      length(BB, IB) {
        return this._addCheck({
          kind: "length",
          value: BB,
          ...iB.errToObj(IB)
        })
      }
      nonempty(BB) {
        return this.min(1, iB.errToObj(BB))
      }
      trim() {
        return new uB({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new uB({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new uB({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((BB => "datetime" === BB.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((BB => "email" === BB.kind))
      }
      get isURL() {
        return !!this._def.checks.find((BB => "url" === BB.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((BB => "emoji" === BB.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((BB => "uuid" === BB.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((BB => "cuid" === BB.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((BB => "cuid2" === BB.kind))
      }
      get isULID() {
        return !!this._def.checks.find((BB => "ulid" === BB.kind))
      }
      get isIP() {
        return !!this._def.checks.find((BB => "ip" === BB.kind))
      }
      get minLength() {
        let BB = null;
        for (const IB of this._def.checks) "min" === IB.kind && (null === BB || IB.value > BB) && (BB = IB.value);
        return BB
      }
      get maxLength() {
        let BB = null;
        for (const IB of this._def.checks) "max" === IB.kind && (null === BB || IB.value < BB) && (BB = IB.value);
        return BB
      }
    }

    function fB(BB, IB) {
      const ZB = (BB.toString().split(".")[1] || "").length,
        TB = (IB.toString().split(".")[1] || "").length,
        JB = ZB > TB ? ZB : TB;
      return parseInt(BB.toFixed(JB).replace(".", "")) % parseInt(IB.toFixed(JB).replace(".", "")) / Math.pow(10, JB)
    }
    uB.create = BB => {
      var IB;
      return new uB({
        checks: [],
        typeName: jI.ZodString,
        coerce: null !== (IB = null === BB || void 0 === BB ? void 0 : BB.coerce) && void 0 !== IB && IB,
        ...HB(BB)
      })
    };
    class lB extends MB {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(BB) {
        this._def.coerce && (BB.data = Number(BB.data));
        if (this._getType(BB) !== nB.number) {
          const IB = this._getOrReturnCtx(BB);
          return UB(IB, {
            code: zB.invalid_type,
            expected: nB.number,
            received: IB.parsedType
          }), dB
        }
        let IB;
        const ZB = new WB;
        for (const TB of this._def.checks)
          if ("int" === TB.kind) vB.isInteger(BB.data) || (IB = this._getOrReturnCtx(BB, IB), UB(IB, {
            code: zB.invalid_type,
            expected: "integer",
            received: "float",
            message: TB.message
          }), ZB.uN());
          else if ("min" === TB.kind) {
          (TB.inclusive ? BB.data < TB.value : BB.data <= TB.value) && (IB = this._getOrReturnCtx(BB, IB), UB(IB, {
            code: zB.too_small,
            minimum: TB.value,
            type: "number",
            inclusive: TB.inclusive,
            exact: !1,
            message: TB.message
          }), ZB.uN())
        } else if ("max" === TB.kind) {
          (TB.inclusive ? BB.data > TB.value : BB.data >= TB.value) && (IB = this._getOrReturnCtx(BB, IB), UB(IB, {
            code: zB.too_big,
            maximum: TB.value,
            type: "number",
            inclusive: TB.inclusive,
            exact: !1,
            message: TB.message
          }), ZB.uN())
        } else "multipleOf" === TB.kind ? 0 !== fB(BB.data, TB.value) && (IB = this._getOrReturnCtx(BB, IB), UB(IB, {
          code: zB.not_multiple_of,
          multipleOf: TB.value,
          message: TB.message
        }), ZB.uN()) : "finite" === TB.kind ? Number.isFinite(BB.data) || (IB = this._getOrReturnCtx(BB, IB), UB(IB, {
          code: zB.not_finite,
          message: TB.message
        }), ZB.uN()) : vB.assertNever(TB);
        return {
          status: ZB.value,
          value: BB.data
        }
      }
      gte(BB, IB) {
        return this.setLimit("min", BB, !0, iB.toString(IB))
      }
      gt(BB, IB) {
        return this.setLimit("min", BB, !1, iB.toString(IB))
      }
      lte(BB, IB) {
        return this.setLimit("max", BB, !0, iB.toString(IB))
      }
      lt(BB, IB) {
        return this.setLimit("max", BB, !1, iB.toString(IB))
      }
      setLimit(BB, IB, ZB, TB) {
        return new lB({
          ...this._def,
          checks: [...this._def.checks, {
            kind: BB,
            value: IB,
            inclusive: ZB,
            message: iB.toString(TB)
          }]
        })
      }
      _addCheck(BB) {
        return new lB({
          ...this._def,
          checks: [...this._def.checks, BB]
        })
      }
      int(BB) {
        return this._addCheck({
          kind: "int",
          message: iB.toString(BB)
        })
      }
      positive(BB) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: iB.toString(BB)
        })
      }
      negative(BB) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: iB.toString(BB)
        })
      }
      nonpositive(BB) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: iB.toString(BB)
        })
      }
      nonnegative(BB) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: iB.toString(BB)
        })
      }
      multipleOf(BB, IB) {
        return this._addCheck({
          kind: "multipleOf",
          value: BB,
          message: iB.toString(IB)
        })
      }
      finite(BB) {
        return this._addCheck({
          kind: "finite",
          message: iB.toString(BB)
        })
      }
      safe(BB) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: iB.toString(BB)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: iB.toString(BB)
        })
      }
      get minValue() {
        let BB = null;
        for (const IB of this._def.checks) "min" === IB.kind && (null === BB || IB.value > BB) && (BB = IB.value);
        return BB
      }
      get maxValue() {
        let BB = null;
        for (const IB of this._def.checks) "max" === IB.kind && (null === BB || IB.value < BB) && (BB = IB.value);
        return BB
      }
      get isInt() {
        return !!this._def.checks.find((BB => "int" === BB.kind || "multipleOf" === BB.kind && vB.isInteger(BB.value)))
      }
      get isFinite() {
        let BB = null,
          IB = null;
        for (const ZB of this._def.checks) {
          if ("finite" === ZB.kind || "int" === ZB.kind || "multipleOf" === ZB.kind) return !0;
          "min" === ZB.kind ? (null === IB || ZB.value > IB) && (IB = ZB.value) : "max" === ZB.kind && (null === BB || ZB.value < BB) && (BB = ZB.value)
        }
        return Number.isFinite(IB) && Number.isFinite(BB)
      }
    }
    lB.create = BB => new lB({
      checks: [],
      typeName: jI.ZodNumber,
      coerce: (null === BB || void 0 === BB ? void 0 : BB.coerce) || !1,
      ...HB(BB)
    });
    class AB extends MB {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(BB) {
        this._def.coerce && (BB.data = BigInt(BB.data));
        if (this._getType(BB) !== nB.bigint) {
          const IB = this._getOrReturnCtx(BB);
          return UB(IB, {
            code: zB.invalid_type,
            expected: nB.bigint,
            received: IB.parsedType
          }), dB
        }
        let IB;
        const ZB = new WB;
        for (const TB of this._def.checks)
          if ("min" === TB.kind) {
            (TB.inclusive ? BB.data < TB.value : BB.data <= TB.value) && (IB = this._getOrReturnCtx(BB, IB), UB(IB, {
              code: zB.too_small,
              type: "bigint",
              minimum: TB.value,
              inclusive: TB.inclusive,
              message: TB.message
            }), ZB.uN())
          } else if ("max" === TB.kind) {
          (TB.inclusive ? BB.data > TB.value : BB.data >= TB.value) && (IB = this._getOrReturnCtx(BB, IB), UB(IB, {
            code: zB.too_big,
            type: "bigint",
            maximum: TB.value,
            inclusive: TB.inclusive,
            message: TB.message
          }), ZB.uN())
        } else "multipleOf" === TB.kind ? BB.data % TB.value !== BigInt(0) && (IB = this._getOrReturnCtx(BB, IB), UB(IB, {
          code: zB.not_multiple_of,
          multipleOf: TB.value,
          message: TB.message
        }), ZB.uN()) : vB.assertNever(TB);
        return {
          status: ZB.value,
          value: BB.data
        }
      }
      gte(BB, IB) {
        return this.setLimit("min", BB, !0, iB.toString(IB))
      }
      gt(BB, IB) {
        return this.setLimit("min", BB, !1, iB.toString(IB))
      }
      lte(BB, IB) {
        return this.setLimit("max", BB, !0, iB.toString(IB))
      }
      lt(BB, IB) {
        return this.setLimit("max", BB, !1, iB.toString(IB))
      }
      setLimit(BB, IB, ZB, TB) {
        return new AB({
          ...this._def,
          checks: [...this._def.checks, {
            kind: BB,
            value: IB,
            inclusive: ZB,
            message: iB.toString(TB)
          }]
        })
      }
      _addCheck(BB) {
        return new AB({
          ...this._def,
          checks: [...this._def.checks, BB]
        })
      }
      positive(BB) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: iB.toString(BB)
        })
      }
      negative(BB) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: iB.toString(BB)
        })
      }
      nonpositive(BB) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: iB.toString(BB)
        })
      }
      nonnegative(BB) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: iB.toString(BB)
        })
      }
      multipleOf(BB, IB) {
        return this._addCheck({
          kind: "multipleOf",
          value: BB,
          message: iB.toString(IB)
        })
      }
      get minValue() {
        let BB = null;
        for (const IB of this._def.checks) "min" === IB.kind && (null === BB || IB.value > BB) && (BB = IB.value);
        return BB
      }
      get maxValue() {
        let BB = null;
        for (const IB of this._def.checks) "max" === IB.kind && (null === BB || IB.value < BB) && (BB = IB.value);
        return BB
      }
    }
    AB.create = BB => {
      var IB;
      return new AB({
        checks: [],
        typeName: jI.ZodBigInt,
        coerce: null !== (IB = null === BB || void 0 === BB ? void 0 : BB.coerce) && void 0 !== IB && IB,
        ...HB(BB)
      })
    };
    class tB extends MB {
      _parse(BB) {
        this._def.coerce && (BB.data = Boolean(BB.data));
        if (this._getType(BB) !== nB.boolean) {
          const IB = this._getOrReturnCtx(BB);
          return UB(IB, {
            code: zB.invalid_type,
            expected: nB.boolean,
            received: IB.parsedType
          }), dB
        }
        return QB(BB.data)
      }
    }
    tB.create = BB => new tB({
      typeName: jI.ZodBoolean,
      coerce: (null === BB || void 0 === BB ? void 0 : BB.coerce) || !1,
      ...HB(BB)
    });
    class bB extends MB {
      _parse(BB) {
        this._def.coerce && (BB.data = new Date(BB.data));
        if (this._getType(BB) !== nB.date) {
          const IB = this._getOrReturnCtx(BB);
          return UB(IB, {
            code: zB.invalid_type,
            expected: nB.date,
            received: IB.parsedType
          }), dB
        }
        if (isNaN(BB.data.getTime())) {
          return UB(this._getOrReturnCtx(BB), {
            code: zB.invalid_date
          }), dB
        }
        const IB = new WB;
        let ZB;
        for (const TB of this._def.checks) "min" === TB.kind ? BB.data.getTime() < TB.value && (ZB = this._getOrReturnCtx(BB, ZB), UB(ZB, {
          code: zB.too_small,
          message: TB.message,
          inclusive: !0,
          exact: !1,
          minimum: TB.value,
          type: "date"
        }), IB.uN()) : "max" === TB.kind ? BB.data.getTime() > TB.value && (ZB = this._getOrReturnCtx(BB, ZB), UB(ZB, {
          code: zB.too_big,
          message: TB.message,
          inclusive: !0,
          exact: !1,
          maximum: TB.value,
          type: "date"
        }), IB.uN()) : vB.assertNever(TB);
        return {
          status: IB.value,
          value: new Date(BB.data.getTime())
        }
      }
      _addCheck(BB) {
        return new bB({
          ...this._def,
          checks: [...this._def.checks, BB]
        })
      }
      min(BB, IB) {
        return this._addCheck({
          kind: "min",
          value: BB.getTime(),
          message: iB.toString(IB)
        })
      }
      max(BB, IB) {
        return this._addCheck({
          kind: "max",
          value: BB.getTime(),
          message: iB.toString(IB)
        })
      }
      get minDate() {
        let BB = null;
        for (const IB of this._def.checks) "min" === IB.kind && (null === BB || IB.value > BB) && (BB = IB.value);
        return null != BB ? new Date(BB) : null
      }
      get maxDate() {
        let BB = null;
        for (const IB of this._def.checks) "max" === IB.kind && (null === BB || IB.value < BB) && (BB = IB.value);
        return null != BB ? new Date(BB) : null
      }
    }
    bB.create = BB => new bB({
      checks: [],
      coerce: (null === BB || void 0 === BB ? void 0 : BB.coerce) || !1,
      typeName: jI.ZodDate,
      ...HB(BB)
    });
    class xB extends MB {
      _parse(BB) {
        if (this._getType(BB) !== nB.symbol) {
          const IB = this._getOrReturnCtx(BB);
          return UB(IB, {
            code: zB.invalid_type,
            expected: nB.symbol,
            received: IB.parsedType
          }), dB
        }
        return QB(BB.data)
      }
    }
    xB.create = BB => new xB({
      typeName: jI.ZodSymbol,
      ...HB(BB)
    });
    class EB extends MB {
      _parse(BB) {
        if (this._getType(BB) !== nB.undefined) {
          const IB = this._getOrReturnCtx(BB);
          return UB(IB, {
            code: zB.invalid_type,
            expected: nB.undefined,
            received: IB.parsedType
          }), dB
        }
        return QB(BB.data)
      }
    }
    EB.create = BB => new EB({
      typeName: jI.ZodUndefined,
      ...HB(BB)
    });
    class DB extends MB {
      _parse(BB) {
        if (this._getType(BB) !== nB.null) {
          const IB = this._getOrReturnCtx(BB);
          return UB(IB, {
            code: zB.invalid_type,
            expected: nB.null,
            received: IB.parsedType
          }), dB
        }
        return QB(BB.data)
      }
    }
    DB.create = BB => new DB({
      typeName: jI.ZodNull,
      ...HB(BB)
    });
    class KB extends MB {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(BB) {
        return QB(BB.data)
      }
    }
    KB.create = BB => new KB({
      typeName: jI.ZodAny,
      ...HB(BB)
    });
    class VB extends MB {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(BB) {
        return QB(BB.data)
      }
    }
    VB.create = BB => new VB({
      typeName: jI.ZodUnknown,
      ...HB(BB)
    });
    class SB extends MB {
      _parse(BB) {
        const IB = this._getOrReturnCtx(BB);
        return UB(IB, {
          code: zB.invalid_type,
          expected: nB.never,
          received: IB.parsedType
        }), dB
      }
    }
    SB.create = BB => new SB({
      typeName: jI.ZodNever,
      ...HB(BB)
    });
    class BI extends MB {
      _parse(BB) {
        if (this._getType(BB) !== nB.undefined) {
          const IB = this._getOrReturnCtx(BB);
          return UB(IB, {
            code: zB.invalid_type,
            expected: nB.void,
            received: IB.parsedType
          }), dB
        }
        return QB(BB.data)
      }
    }
    BI.create = BB => new BI({
      typeName: jI.ZodVoid,
      ...HB(BB)
    });
    class II extends MB {
      _parse(BB) {
        const {
          ctx: IB,
          status: ZB
        } = this._processInputParams(BB), TB = this._def;
        if (IB.parsedType !== nB.array) return UB(IB, {
          code: zB.invalid_type,
          expected: nB.array,
          received: IB.parsedType
        }), dB;
        if (null !== TB.exactLength) {
          const BB = IB.data.length > TB.exactLength.value,
            JB = IB.data.length < TB.exactLength.value;
          (BB || JB) && (UB(IB, {
            code: BB ? zB.too_big : zB.too_small,
            minimum: JB ? TB.exactLength.value : void 0,
            maximum: BB ? TB.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: TB.exactLength.message
          }), ZB.uN())
        }
        if (null !== TB.minLength && IB.data.length < TB.minLength.value && (UB(IB, {
            code: zB.too_small,
            minimum: TB.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: TB.minLength.message
          }), ZB.uN()), null !== TB.maxLength && IB.data.length > TB.maxLength.value && (UB(IB, {
            code: zB.too_big,
            maximum: TB.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: TB.maxLength.message
          }), ZB.uN()), IB.common.async) return Promise.all([...IB.data].map(((BB, ZB) => TB.type._parseAsync(new pB(IB, BB, IB.path, ZB))))).then((BB => WB.mergeArray(ZB, BB)));
        const JB = [...IB.data].map(((BB, ZB) => TB.type._parseSync(new pB(IB, BB, IB.path, ZB))));
        return WB.mergeArray(ZB, JB)
      }
      get element() {
        return this._def.type
      }
      min(BB, IB) {
        return new II({
          ...this._def,
          minLength: {
            value: BB,
            message: iB.toString(IB)
          }
        })
      }
      max(BB, IB) {
        return new II({
          ...this._def,
          maxLength: {
            value: BB,
            message: iB.toString(IB)
          }
        })
      }
      length(BB, IB) {
        return new II({
          ...this._def,
          exactLength: {
            value: BB,
            message: iB.toString(IB)
          }
        })
      }
      nonempty(BB) {
        return this.min(1, BB)
      }
    }

    function ZI(BB) {
      if (BB instanceof TI) {
        const IB = {};
        for (const ZB in BB.shape) {
          const TB = BB.shape[ZB];
          IB[ZB] = CI.create(ZI(TB))
        }
        return new TI({
          ...BB._def,
          shape: () => IB
        })
      }
      return BB instanceof II ? new II({
        ...BB._def,
        type: ZI(BB.element)
      }) : BB instanceof CI ? CI.create(ZI(BB.unwrap())) : BB instanceof QI ? QI.create(ZI(BB.unwrap())) : BB instanceof cI ? cI.create(BB.items.map((BB => ZI(BB)))) : BB
    }
    II.create = (BB, IB) => new II({
      type: BB,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: jI.ZodArray,
      ...HB(IB)
    });
    class TI extends MB {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const BB = this._def.shape(),
          IB = vB.objectKeys(BB);
        return this._cached = {
          shape: BB,
          keys: IB
        }
      }
      _parse(BB) {
        if (this._getType(BB) !== nB.object) {
          const IB = this._getOrReturnCtx(BB);
          return UB(IB, {
            code: zB.invalid_type,
            expected: nB.object,
            received: IB.parsedType
          }), dB
        }
        const {
          status: IB,
          ctx: ZB
        } = this._processInputParams(BB), {
          shape: TB,
          keys: JB
        } = this._getCached(), oB = [];
        if (!(this._def.catchall instanceof SB && "strip" === this._def.unknownKeys))
          for (const vB in ZB.data) JB.includes(vB) || oB.push(vB);
        const GB = [];
        for (const vB of JB) {
          const BB = TB[vB],
            IB = ZB.data[vB];
          GB.push({
            key: {
              status: "valid",
              value: vB
            },
            value: BB._parse(new pB(ZB, IB, ZB.path, vB)),
            alwaysSet: vB in ZB.data
          })
        }
        if (this._def.catchall instanceof SB) {
          const BB = this._def.unknownKeys;
          if ("passthrough" === BB)
            for (const IB of oB) GB.push({
              key: {
                status: "valid",
                value: IB
              },
              value: {
                status: "valid",
                value: ZB.data[IB]
              }
            });
          else if ("strict" === BB) oB.length > 0 && (UB(ZB, {
            code: zB.unrecognized_keys,
            keys: oB
          }), IB.uN());
          else if ("strip" !== BB) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const BB = this._def.catchall;
          for (const IB of oB) {
            const TB = ZB.data[IB];
            GB.push({
              key: {
                status: "valid",
                value: IB
              },
              value: BB._parse(new pB(ZB, TB, ZB.path, IB)),
              alwaysSet: IB in ZB.data
            })
          }
        }
        return ZB.common.async ? Promise.resolve().then((async () => {
          const BB = [];
          for (const IB of GB) {
            const ZB = await IB.key;
            BB.push({
              key: ZB,
              value: await IB.value,
              alwaysSet: IB.alwaysSet
            })
          }
          return BB
        })).then((BB => WB.mergeObjectSync(IB, BB))) : WB.mergeObjectSync(IB, GB)
      }
      get shape() {
        return this._def.shape()
      }
      strict(BB) {
        return iB.errToObj, new TI({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== BB ? {
            errorMap: (IB, ZB) => {
              var TB, JB, oB, GB;
              const vB = null !== (oB = null === (JB = (TB = this._def).errorMap) || void 0 === JB ? void 0 : JB.call(TB, IB, ZB).message) && void 0 !== oB ? oB : ZB.defaultError;
              return "unrecognized_keys" === IB.code ? {
                message: null !== (GB = iB.errToObj(BB).message) && void 0 !== GB ? GB : vB
              } : {
                message: vB
              }
            }
          } : {}
        })
      }
      strip() {
        return new TI({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new TI({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(BB) {
        return new TI({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...BB
          })
        })
      }
      merge(BB) {
        return new TI({
          unknownKeys: BB._def.unknownKeys,
          catchall: BB._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...BB._def.shape()
          }),
          typeName: jI.ZodObject
        })
      }
      setKey(BB, IB) {
        return this.augment({
          [BB]: IB
        })
      }
      catchall(BB) {
        return new TI({
          ...this._def,
          catchall: BB
        })
      }
      TF(BB) {
        const IB = {};
        return vB.objectKeys(BB).forEach((ZB => {
          BB[ZB] && this.shape[ZB] && (IB[ZB] = this.shape[ZB])
        })), new TI({
          ...this._def,
          shape: () => IB
        })
      }
      omit(BB) {
        const IB = {};
        return vB.objectKeys(this.shape).forEach((ZB => {
          BB[ZB] || (IB[ZB] = this.shape[ZB])
        })), new TI({
          ...this._def,
          shape: () => IB
        })
      }
      deepPartial() {
        return ZI(this)
      }
      partial(BB) {
        const IB = {};
        return vB.objectKeys(this.shape).forEach((ZB => {
          const TB = this.shape[ZB];
          BB && !BB[ZB] ? IB[ZB] = TB : IB[ZB] = TB.optional()
        })), new TI({
          ...this._def,
          shape: () => IB
        })
      }
      required(BB) {
        const IB = {};
        return vB.objectKeys(this.shape).forEach((ZB => {
          if (BB && !BB[ZB]) IB[ZB] = this.shape[ZB];
          else {
            let BB = this.shape[ZB];
            for (; BB instanceof CI;) BB = BB._def.innerType;
            IB[ZB] = BB
          }
        })), new TI({
          ...this._def,
          shape: () => IB
        })
      }
      keyof() {
        return qI(vB.objectKeys(this.shape))
      }
    }
    TI.create = (BB, IB) => new TI({
      shape: () => BB,
      unknownKeys: "strip",
      catchall: SB.create(),
      typeName: jI.ZodObject,
      ...HB(IB)
    }), TI.strictCreate = (BB, IB) => new TI({
      shape: () => BB,
      unknownKeys: "strict",
      catchall: SB.create(),
      typeName: jI.ZodObject,
      ...HB(IB)
    }), TI.lazycreate = (BB, IB) => new TI({
      shape: BB,
      unknownKeys: "strip",
      catchall: SB.create(),
      typeName: jI.ZodObject,
      ...HB(IB)
    });
    class JI extends MB {
      _parse(BB) {
        const {
          ctx: IB
        } = this._processInputParams(BB), ZB = this._def.options;
        if (IB.common.async) return Promise.all(ZB.map((async BB => {
          const ZB = {
            ...IB,
            common: {
              ...IB.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await BB._parseAsync({
              data: IB.data,
              path: IB.path,
              parent: ZB
            }),
            ctx: ZB
          }
        }))).then((function(BB) {
          for (const IB of BB)
            if ("valid" === IB.result.status) return IB.result;
          for (const TB of BB)
            if ("uN" === TB.result.status) return IB.common.issues.push(...TB.ctx.common.issues), TB.result;
          const ZB = BB.map((BB => new FB(BB.ctx.common.issues)));
          return UB(IB, {
            code: zB.invalid_union,
            unionErrors: ZB
          }), dB
        }));
        {
          let BB;
          const TB = [];
          for (const oB of ZB) {
            const ZB = {
                ...IB,
                common: {
                  ...IB.common,
                  issues: []
                },
                parent: null
              },
              JB = oB._parseSync({
                data: IB.data,
                path: IB.path,
                parent: ZB
              });
            if ("valid" === JB.status) return JB;
            "uN" !== JB.status || BB || (BB = {
              result: JB,
              ctx: ZB
            }), ZB.common.issues.length && TB.push(ZB.common.issues)
          }
          if (BB) return IB.common.issues.push(...BB.ctx.common.issues), BB.result;
          const JB = TB.map((BB => new FB(BB)));
          return UB(IB, {
            code: zB.invalid_union,
            unionErrors: JB
          }), dB
        }
      }
      get options() {
        return this._def.options
      }
    }
    JI.create = (BB, IB) => new JI({
      options: BB,
      typeName: jI.ZodUnion,
      ...HB(IB)
    });
    const oI = BB => BB instanceof NI ? oI(BB.schema) : BB instanceof dI ? oI(BB.innerType()) : BB instanceof gI ? [BB.value] : BB instanceof yI ? BB.options : BB instanceof UI ? Object.keys(BB.enum) : BB instanceof sI ? oI(BB._def.innerType) : BB instanceof EB ? [void 0] : BB instanceof DB ? [null] : null;
    class GI extends MB {
      _parse(BB) {
        const {
          ctx: IB
        } = this._processInputParams(BB);
        if (IB.parsedType !== nB.object) return UB(IB, {
          code: zB.invalid_type,
          expected: nB.object,
          received: IB.parsedType
        }), dB;
        const ZB = this.discriminator,
          TB = IB.data[ZB],
          JB = this.optionsMap.get(TB);
        return JB ? IB.common.async ? JB._parseAsync({
          data: IB.data,
          path: IB.path,
          parent: IB
        }) : JB._parseSync({
          data: IB.data,
          path: IB.path,
          parent: IB
        }) : (UB(IB, {
          code: zB.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [ZB]
        }), dB)
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
      static create(BB, IB, ZB) {
        const TB = new Map;
        for (const JB of IB) {
          const IB = oI(JB.shape[BB]);
          if (!IB) throw new Error(`A discriminator value for key \`${BB}\` could not be extracted from all schema options`);
          for (const ZB of IB) {
            if (TB.has(ZB)) throw new Error(`Discriminator property ${String(BB)} has duplicate value ${String(ZB)}`);
            TB.set(ZB, JB)
          }
        }
        return new GI({
          typeName: jI.ZodDiscriminatedUnion,
          discriminator: BB,
          options: IB,
          optionsMap: TB,
          ...HB(ZB)
        })
      }
    }

    function vI(BB, IB) {
      const ZB = hB(BB),
        TB = hB(IB);
      if (BB === IB) return {
        valid: !0,
        data: BB
      };
      if (ZB === nB.object && TB === nB.object) {
        const ZB = vB.objectKeys(IB),
          TB = vB.objectKeys(BB).filter((BB => -1 !== ZB.indexOf(BB))),
          JB = {
            ...BB,
            ...IB
          };
        for (const oB of TB) {
          const ZB = vI(BB[oB], IB[oB]);
          if (!ZB.valid) return {
            valid: !1
          };
          JB[oB] = ZB.data
        }
        return {
          valid: !0,
          data: JB
        }
      }
      if (ZB === nB.array && TB === nB.array) {
        if (BB.length !== IB.length) return {
          valid: !1
        };
        const ZB = [];
        for (let TB = 0; TB < BB.length; TB++) {
          const JB = vI(BB[TB], IB[TB]);
          if (!JB.valid) return {
            valid: !1
          };
          ZB.push(JB.data)
        }
        return {
          valid: !0,
          data: ZB
        }
      }
      return ZB === nB.date && TB === nB.date && +BB === +IB ? {
        valid: !0,
        data: BB
      } : {
        valid: !1
      }
    }
    class kI extends MB {
      _parse(BB) {
        const {
          status: IB,
          ctx: ZB
        } = this._processInputParams(BB), TB = (BB, TB) => {
          if (sB(BB) || sB(TB)) return dB;
          const JB = vI(BB.value, TB.value);
          return JB.valid ? ((wB(BB) || wB(TB)) && IB.uN(), {
            status: IB.value,
            value: JB.data
          }) : (UB(ZB, {
            code: zB.invalid_intersection_types
          }), dB)
        };
        return ZB.common.async ? Promise.all([this._def.left._parseAsync({
          data: ZB.data,
          path: ZB.path,
          parent: ZB
        }), this._def.right._parseAsync({
          data: ZB.data,
          path: ZB.path,
          parent: ZB
        })]).then((BB => {
          let [IB, ZB] = BB;
          return TB(IB, ZB)
        })) : TB(this._def.left._parseSync({
          data: ZB.data,
          path: ZB.path,
          parent: ZB
        }), this._def.right._parseSync({
          data: ZB.data,
          path: ZB.path,
          parent: ZB
        }))
      }
    }
    kI.create = (BB, IB, ZB) => new kI({
      left: BB,
      right: IB,
      typeName: jI.ZodIntersection,
      ...HB(ZB)
    });
    class cI extends MB {
      _parse(BB) {
        const {
          status: IB,
          ctx: ZB
        } = this._processInputParams(BB);
        if (ZB.parsedType !== nB.array) return UB(ZB, {
          code: zB.invalid_type,
          expected: nB.array,
          received: ZB.parsedType
        }), dB;
        if (ZB.data.length < this._def.items.length) return UB(ZB, {
          code: zB.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), dB;
        !this._def.rest && ZB.data.length > this._def.items.length && (UB(ZB, {
          code: zB.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), IB.uN());
        const TB = [...ZB.data].map(((BB, IB) => {
          const TB = this._def.items[IB] || this._def.rest;
          return TB ? TB._parse(new pB(ZB, BB, ZB.path, IB)) : null
        })).filter((BB => !!BB));
        return ZB.common.async ? Promise.all(TB).then((BB => WB.mergeArray(IB, BB))) : WB.mergeArray(IB, TB)
      }
      get items() {
        return this._def.items
      }
      rest(BB) {
        return new cI({
          ...this._def,
          rest: BB
        })
      }
    }
    cI.create = (BB, IB) => {
      if (!Array.isArray(BB)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new cI({
        items: BB,
        typeName: jI.ZodTuple,
        rest: null,
        ...HB(IB)
      })
    };
    class nI extends MB {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(BB) {
        const {
          status: IB,
          ctx: ZB
        } = this._processInputParams(BB);
        if (ZB.parsedType !== nB.object) return UB(ZB, {
          code: zB.invalid_type,
          expected: nB.object,
          received: ZB.parsedType
        }), dB;
        const TB = [],
          JB = this._def.keyType,
          oB = this._def.valueType;
        for (const GB in ZB.data) TB.push({
          key: JB._parse(new pB(ZB, GB, ZB.path, GB)),
          value: oB._parse(new pB(ZB, ZB.data[GB], ZB.path, GB))
        });
        return ZB.common.async ? WB.mergeObjectAsync(IB, TB) : WB.mergeObjectSync(IB, TB)
      }
      get element() {
        return this._def.valueType
      }
      static create(BB, IB, ZB) {
        return new nI(IB instanceof MB ? {
          keyType: BB,
          valueType: IB,
          typeName: jI.ZodRecord,
          ...HB(ZB)
        } : {
          keyType: uB.create(),
          valueType: BB,
          typeName: jI.ZodRecord,
          ...HB(IB)
        })
      }
    }
    class hI extends MB {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(BB) {
        const {
          status: IB,
          ctx: ZB
        } = this._processInputParams(BB);
        if (ZB.parsedType !== nB.map) return UB(ZB, {
          code: zB.invalid_type,
          expected: nB.map,
          received: ZB.parsedType
        }), dB;
        const TB = this._def.keyType,
          JB = this._def.valueType,
          oB = [...ZB.data.entries()].map(((BB, IB) => {
            let [oB, GB] = BB;
            return {
              key: TB._parse(new pB(ZB, oB, ZB.path, [IB, "key"])),
              value: JB._parse(new pB(ZB, GB, ZB.path, [IB, "value"]))
            }
          }));
        if (ZB.common.async) {
          const BB = new Map;
          return Promise.resolve().then((async () => {
            for (const ZB of oB) {
              const TB = await ZB.key,
                JB = await ZB.value;
              if ("aborted" === TB.status || "aborted" === JB.status) return dB;
              "uN" !== TB.status && "uN" !== JB.status || IB.uN(), BB.set(TB.value, JB.value)
            }
            return {
              status: IB.value,
              value: BB
            }
          }))
        } {
          const BB = new Map;
          for (const ZB of oB) {
            const TB = ZB.key,
              JB = ZB.value;
            if ("aborted" === TB.status || "aborted" === JB.status) return dB;
            "uN" !== TB.status && "uN" !== JB.status || IB.uN(), BB.set(TB.value, JB.value)
          }
          return {
            status: IB.value,
            value: BB
          }
        }
      }
    }
    hI.create = (BB, IB, ZB) => new hI({
      valueType: IB,
      keyType: BB,
      typeName: jI.ZodMap,
      ...HB(ZB)
    });
    class zI extends MB {
      _parse(BB) {
        const {
          status: IB,
          ctx: ZB
        } = this._processInputParams(BB);
        if (ZB.parsedType !== nB.set) return UB(ZB, {
          code: zB.invalid_type,
          expected: nB.set,
          received: ZB.parsedType
        }), dB;
        const TB = this._def;
        null !== TB.minSize && ZB.data.size < TB.minSize.value && (UB(ZB, {
          code: zB.too_small,
          minimum: TB.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: TB.minSize.message
        }), IB.uN()), null !== TB.maxSize && ZB.data.size > TB.maxSize.value && (UB(ZB, {
          code: zB.too_big,
          maximum: TB.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: TB.maxSize.message
        }), IB.uN());
        const JB = this._def.valueType;

        function oB(BB) {
          const ZB = new Set;
          for (const TB of BB) {
            if ("aborted" === TB.status) return dB;
            "uN" === TB.status && IB.uN(), ZB.add(TB.value)
          }
          return {
            status: IB.value,
            value: ZB
          }
        }
        const GB = [...ZB.data.values()].map(((BB, IB) => JB._parse(new pB(ZB, BB, ZB.path, IB))));
        return ZB.common.async ? Promise.all(GB).then((BB => oB(BB))) : oB(GB)
      }
      min(BB, IB) {
        return new zI({
          ...this._def,
          minSize: {
            value: BB,
            message: iB.toString(IB)
          }
        })
      }
      max(BB, IB) {
        return new zI({
          ...this._def,
          maxSize: {
            value: BB,
            message: iB.toString(IB)
          }
        })
      }
      size(BB, IB) {
        return this.min(BB, IB).max(BB, IB)
      }
      nonempty(BB) {
        return this.min(1, BB)
      }
    }
    zI.create = (BB, IB) => new zI({
      valueType: BB,
      minSize: null,
      maxSize: null,
      typeName: jI.ZodSet,
      ...HB(IB)
    });
    class FI extends MB {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(BB) {
        const {
          ctx: IB
        } = this._processInputParams(BB);
        if (IB.parsedType !== nB.function) return UB(IB, {
          code: zB.invalid_type,
          expected: nB.function,
          received: IB.parsedType
        }), dB;

        function ZB(BB, ZB) {
          return yB({
            data: BB,
            path: IB.path,
            errorMaps: [IB.common.contextualErrorMap, IB.schemaErrorMap, qB(), NB].filter((BB => !!BB)),
            issueData: {
              code: zB.invalid_arguments,
              argumentsError: ZB
            }
          })
        }

        function TB(BB, ZB) {
          return yB({
            data: BB,
            path: IB.path,
            errorMaps: [IB.common.contextualErrorMap, IB.schemaErrorMap, qB(), NB].filter((BB => !!BB)),
            issueData: {
              code: zB.invalid_return_type,
              returnTypeError: ZB
            }
          })
        }
        const JB = {
            errorMap: IB.common.contextualErrorMap
          },
          oB = IB.data;
        if (this._def.returns instanceof WI) {
          const BB = this;
          return QB((async function() {
            for (var IB = arguments.length, GB = new Array(IB), vB = 0; vB < IB; vB++) GB[vB] = arguments[vB];
            const kB = new FB([]),
              cB = await BB._def.args.parseAsync(GB, JB).catch((BB => {
                throw kB.addIssue(ZB(GB, BB)), kB
              })),
              nB = await Reflect.apply(oB, this, cB);
            return await BB._def.returns._def.type.parseAsync(nB, JB).catch((BB => {
              throw kB.addIssue(TB(nB, BB)), kB
            }))
          }))
        } {
          const BB = this;
          return QB((function() {
            for (var IB = arguments.length, GB = new Array(IB), vB = 0; vB < IB; vB++) GB[vB] = arguments[vB];
            const kB = BB._def.args.safeParse(GB, JB);
            if (!kB.success) throw new FB([ZB(GB, kB.error)]);
            const cB = Reflect.apply(oB, this, kB.data),
              nB = BB._def.returns.safeParse(cB, JB);
            if (!nB.success) throw new FB([TB(cB, nB.error)]);
            return nB.data
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
        for (var BB = arguments.length, IB = new Array(BB), ZB = 0; ZB < BB; ZB++) IB[ZB] = arguments[ZB];
        return new FI({
          ...this._def,
          args: cI.create(IB).rest(VB.create())
        })
      }
      returns(BB) {
        return new FI({
          ...this._def,
          returns: BB
        })
      }
      implement(BB) {
        return this.parse(BB)
      }
      strictImplement(BB) {
        return this.parse(BB)
      }
      static create(BB, IB, ZB) {
        return new FI({
          args: BB || cI.create([]).rest(VB.create()),
          returns: IB || VB.create(),
          typeName: jI.ZodFunction,
          ...HB(ZB)
        })
      }
    }
    class NI extends MB {
      get schema() {
        return this._def.getter()
      }
      _parse(BB) {
        const {
          ctx: IB
        } = this._processInputParams(BB);
        return this._def.getter()._parse({
          data: IB.data,
          path: IB.path,
          parent: IB
        })
      }
    }
    NI.create = (BB, IB) => new NI({
      getter: BB,
      typeName: jI.ZodLazy,
      ...HB(IB)
    });
    class gI extends MB {
      _parse(BB) {
        if (BB.data !== this._def.value) {
          const IB = this._getOrReturnCtx(BB);
          return UB(IB, {
            received: IB.data,
            code: zB.invalid_literal,
            expected: this._def.value
          }), dB
        }
        return {
          status: "valid",
          value: BB.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function qI(BB, IB) {
      return new yI({
        values: BB,
        typeName: jI.ZodEnum,
        ...HB(IB)
      })
    }
    gI.create = (BB, IB) => new gI({
      value: BB,
      typeName: jI.ZodLiteral,
      ...HB(IB)
    });
    class yI extends MB {
      _parse(BB) {
        if ("string" !== typeof BB.data) {
          const IB = this._getOrReturnCtx(BB),
            ZB = this._def.values;
          return UB(IB, {
            expected: vB.joinValues(ZB),
            received: IB.parsedType,
            code: zB.invalid_type
          }), dB
        }
        if (-1 === this._def.values.indexOf(BB.data)) {
          const IB = this._getOrReturnCtx(BB),
            ZB = this._def.values;
          return UB(IB, {
            received: IB.data,
            code: zB.invalid_enum_value,
            options: ZB
          }), dB
        }
        return QB(BB.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const BB = {};
        for (const IB of this._def.values) BB[IB] = IB;
        return BB
      }
      get Values() {
        const BB = {};
        for (const IB of this._def.values) BB[IB] = IB;
        return BB
      }
      get Enum() {
        const BB = {};
        for (const IB of this._def.values) BB[IB] = IB;
        return BB
      }
      extract(BB) {
        return yI.create(BB)
      }
      exclude(BB) {
        return yI.create(this.options.filter((IB => !BB.includes(IB))))
      }
    }
    yI.create = qI;
    class UI extends MB {
      _parse(BB) {
        const IB = vB.getValidEnumValues(this._def.values),
          ZB = this._getOrReturnCtx(BB);
        if (ZB.parsedType !== nB.string && ZB.parsedType !== nB.number) {
          const BB = vB.objectValues(IB);
          return UB(ZB, {
            expected: vB.joinValues(BB),
            received: ZB.parsedType,
            code: zB.invalid_type
          }), dB
        }
        if (-1 === IB.indexOf(BB.data)) {
          const BB = vB.objectValues(IB);
          return UB(ZB, {
            received: ZB.data,
            code: zB.invalid_enum_value,
            options: BB
          }), dB
        }
        return QB(BB.data)
      }
      get enum() {
        return this._def.values
      }
    }
    UI.create = (BB, IB) => new UI({
      values: BB,
      typeName: jI.ZodNativeEnum,
      ...HB(IB)
    });
    class WI extends MB {
      unwrap() {
        return this._def.type
      }
      _parse(BB) {
        const {
          ctx: IB
        } = this._processInputParams(BB);
        if (IB.parsedType !== nB.promise && !1 === IB.common.async) return UB(IB, {
          code: zB.invalid_type,
          expected: nB.promise,
          received: IB.parsedType
        }), dB;
        const ZB = IB.parsedType === nB.promise ? IB.data : Promise.resolve(IB.data);
        return QB(ZB.then((BB => this._def.type.parseAsync(BB, {
          path: IB.path,
          errorMap: IB.common.contextualErrorMap
        }))))
      }
    }
    WI.create = (BB, IB) => new WI({
      type: BB,
      typeName: jI.ZodPromise,
      ...HB(IB)
    });
    class dI extends MB {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === jI.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(BB) {
        const {
          status: IB,
          ctx: ZB
        } = this._processInputParams(BB), TB = this._def.effect || null, JB = {
          addIssue: BB => {
            UB(ZB, BB), BB.fatal ? IB.abort() : IB.uN()
          },
          get path() {
            return ZB.path
          }
        };
        if (JB.addIssue = JB.addIssue.bind(JB), "preprocess" === TB.type) {
          const BB = TB.transform(ZB.data, JB);
          return ZB.common.issues.length ? {
            status: "uN",
            value: ZB.data
          } : ZB.common.async ? Promise.resolve(BB).then((BB => this._def.schema._parseAsync({
            data: BB,
            path: ZB.path,
            parent: ZB
          }))) : this._def.schema._parseSync({
            data: BB,
            path: ZB.path,
            parent: ZB
          })
        }
        if ("refinement" === TB.type) {
          const BB = BB => {
            const IB = TB.refinement(BB, JB);
            if (ZB.common.async) return Promise.resolve(IB);
            if (IB instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return BB
          };
          if (!1 === ZB.common.async) {
            const TB = this._def.schema._parseSync({
              data: ZB.data,
              path: ZB.path,
              parent: ZB
            });
            return "aborted" === TB.status ? dB : ("uN" === TB.status && IB.uN(), BB(TB.value), {
              status: IB.value,
              value: TB.value
            })
          }
          return this._def.schema._parseAsync({
            data: ZB.data,
            path: ZB.path,
            parent: ZB
          }).then((ZB => "aborted" === ZB.status ? dB : ("uN" === ZB.status && IB.uN(), BB(ZB.value).then((() => ({
            status: IB.value,
            value: ZB.value
          }))))))
        }
        if ("transform" === TB.type) {
          if (!1 === ZB.common.async) {
            const BB = this._def.schema._parseSync({
              data: ZB.data,
              path: ZB.path,
              parent: ZB
            });
            if (!OB(BB)) return BB;
            const oB = TB.transform(BB.value, JB);
            if (oB instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: IB.value,
              value: oB
            }
          }
          return this._def.schema._parseAsync({
            data: ZB.data,
            path: ZB.path,
            parent: ZB
          }).then((BB => OB(BB) ? Promise.resolve(TB.transform(BB.value, JB)).then((BB => ({
            status: IB.value,
            value: BB
          }))) : BB))
        }
        vB.assertNever(TB)
      }
    }
    dI.create = (BB, IB, ZB) => new dI({
      schema: BB,
      typeName: jI.ZodEffects,
      effect: IB,
      ...HB(ZB)
    }), dI.createWithPreprocess = (BB, IB, ZB) => new dI({
      schema: IB,
      effect: {
        type: "preprocess",
        transform: BB
      },
      typeName: jI.ZodEffects,
      ...HB(ZB)
    });
    class CI extends MB {
      _parse(BB) {
        return this._getType(BB) === nB.undefined ? QB(void 0) : this._def.innerType._parse(BB)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    CI.create = (BB, IB) => new CI({
      innerType: BB,
      typeName: jI.ZodOptional,
      ...HB(IB)
    });
    class QI extends MB {
      _parse(BB) {
        return this._getType(BB) === nB.null ? QB(null) : this._def.innerType._parse(BB)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    QI.create = (BB, IB) => new QI({
      innerType: BB,
      typeName: jI.ZodNullable,
      ...HB(IB)
    });
    class sI extends MB {
      _parse(BB) {
        const {
          ctx: IB
        } = this._processInputParams(BB);
        let ZB = IB.data;
        return IB.parsedType === nB.undefined && (ZB = this._def.defaultValue()), this._def.innerType._parse({
          data: ZB,
          path: IB.path,
          parent: IB
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    sI.create = (BB, IB) => new sI({
      innerType: BB,
      typeName: jI.ZodDefault,
      defaultValue: "function" === typeof IB.default ? IB.default : () => IB.default,
      ...HB(IB)
    });
    class wI extends MB {
      _parse(BB) {
        const {
          ctx: IB
        } = this._processInputParams(BB), ZB = {
          ...IB,
          common: {
            ...IB.common,
            issues: []
          }
        }, TB = this._def.innerType._parse({
          data: ZB.data,
          path: ZB.path,
          parent: {
            ...ZB
          }
        });
        return YB(TB) ? TB.then((BB => ({
          status: "valid",
          value: "valid" === BB.status ? BB.value : this._def.catchValue({
            get error() {
              return new FB(ZB.common.issues)
            },
            input: ZB.data
          })
        }))) : {
          status: "valid",
          value: "valid" === TB.status ? TB.value : this._def.catchValue({
            get error() {
              return new FB(ZB.common.issues)
            },
            input: ZB.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    wI.create = (BB, IB) => new wI({
      innerType: BB,
      typeName: jI.ZodCatch,
      catchValue: "function" === typeof IB.catch ? IB.catch : () => IB.catch,
      ...HB(IB)
    });
    class OI extends MB {
      _parse(BB) {
        if (this._getType(BB) !== nB.nan) {
          const IB = this._getOrReturnCtx(BB);
          return UB(IB, {
            code: zB.invalid_type,
            expected: nB.nan,
            received: IB.parsedType
          }), dB
        }
        return {
          status: "valid",
          value: BB.data
        }
      }
    }
    OI.create = BB => new OI({
      typeName: jI.ZodNaN,
      ...HB(BB)
    });
    const YI = Symbol("zod_brand");
    class iI extends MB {
      _parse(BB) {
        const {
          ctx: IB
        } = this._processInputParams(BB), ZB = IB.data;
        return this._def.type._parse({
          data: ZB,
          path: IB.path,
          parent: IB
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class pI extends MB {
      _parse(BB) {
        const {
          status: IB,
          ctx: ZB
        } = this._processInputParams(BB);
        if (ZB.common.async) {
          return (async () => {
            const BB = await this._def.in._parseAsync({
              data: ZB.data,
              path: ZB.path,
              parent: ZB
            });
            return "aborted" === BB.status ? dB : "uN" === BB.status ? (IB.uN(), CB(BB.value)) : this._def.out._parseAsync({
              data: BB.value,
              path: ZB.path,
              parent: ZB
            })
          })()
        } {
          const BB = this._def.in._parseSync({
            data: ZB.data,
            path: ZB.path,
            parent: ZB
          });
          return "aborted" === BB.status ? dB : "uN" === BB.status ? (IB.uN(), {
            status: "uN",
            value: BB.value
          }) : this._def.out._parseSync({
            data: BB.value,
            path: ZB.path,
            parent: ZB
          })
        }
      }
      static create(BB, IB) {
        return new pI({
          in: BB,
          out: IB,
          typeName: jI.ZodPipeline
        })
      }
    }
    class aI extends MB {
      _parse(BB) {
        const IB = this._def.innerType._parse(BB);
        return OB(IB) && (IB.value = Object.freeze(IB.value)), IB
      }
    }
    aI.create = (BB, IB) => new aI({
      innerType: BB,
      typeName: jI.ZodReadonly,
      ...HB(IB)
    });
    const HI = function(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        return BB ? KB.create().superRefine(((TB, JB) => {
          var oB, GB;
          if (!BB(TB)) {
            const BB = "function" === typeof IB ? IB(TB) : "string" === typeof IB ? {
                message: IB
              } : IB,
              vB = null === (GB = null !== (oB = BB.fatal) && void 0 !== oB ? oB : ZB) || void 0 === GB || GB,
              kB = "string" === typeof BB ? {
                message: BB
              } : BB;
            JB.addIssue({
              code: "custom",
              ...kB,
              fatal: vB
            })
          }
        })) : KB.create()
      },
      MI = {
        object: TI.lazycreate
      };
    var jI;
    ! function(BB) {
      BB.ZodString = "ZodString", BB.ZodNumber = "ZodNumber", BB.ZodNaN = "ZodNaN", BB.ZodBigInt = "ZodBigInt", BB.ZodBoolean = "ZodBoolean", BB.ZodDate = "ZodDate", BB.ZodSymbol = "ZodSymbol", BB.ZodUndefined = "ZodUndefined", BB.ZodNull = "ZodNull", BB.ZodAny = "ZodAny", BB.ZodUnknown = "ZodUnknown", BB.ZodNever = "ZodNever", BB.ZodVoid = "ZodVoid", BB.ZodArray = "ZodArray", BB.ZodObject = "ZodObject", BB.ZodUnion = "ZodUnion", BB.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", BB.ZodIntersection = "ZodIntersection", BB.ZodTuple = "ZodTuple", BB.ZodRecord = "ZodRecord", BB.ZodMap = "ZodMap", BB.ZodSet = "ZodSet", BB.ZodFunction = "ZodFunction", BB.ZodLazy = "ZodLazy", BB.ZodLiteral = "ZodLiteral", BB.ZodEnum = "ZodEnum", BB.ZodEffects = "ZodEffects", BB.ZodNativeEnum = "ZodNativeEnum", BB.ZodOptional = "ZodOptional", BB.ZodNullable = "ZodNullable", BB.ZodDefault = "ZodDefault", BB.ZodCatch = "ZodCatch", BB.ZodPromise = "ZodPromise", BB.ZodBranded = "ZodBranded", BB.ZodPipeline = "ZodPipeline", BB.ZodReadonly = "ZodReadonly"
    }(jI || (jI = {}));
    const PI = uB.create,
      RI = lB.create,
      rI = OI.create,
      mI = AB.create,
      XI = tB.create,
      LI = bB.create,
      eI = xB.create,
      uI = EB.create,
      fI = DB.create,
      lI = KB.create,
      AI = VB.create,
      tI = SB.create,
      bI = BI.create,
      xI = II.create,
      EI = TI.create,
      DI = TI.strictCreate,
      KI = JI.create,
      VI = GI.create,
      SI = kI.create,
      BZ = cI.create,
      IZ = nI.create,
      ZZ = hI.create,
      TZ = zI.create,
      JZ = FI.create,
      oZ = NI.create,
      GZ = gI.create,
      vZ = yI.create,
      kZ = UI.create,
      cZ = WI.create,
      nZ = dI.create,
      hZ = CI.create,
      zZ = QI.create,
      FZ = dI.createWithPreprocess,
      NZ = pI.create,
      gZ = {
        string: BB => uB.create({
          ...BB,
          coerce: !0
        }),
        number: BB => lB.create({
          ...BB,
          coerce: !0
        }),
        boolean: BB => tB.create({
          ...BB,
          coerce: !0
        }),
        bigint: BB => AB.create({
          ...BB,
          coerce: !0
        }),
        date: BB => bB.create({
          ...BB,
          coerce: !0
        })
      },
      qZ = dB;
    var yZ = Object.freeze({
        __proto__: null,
        defaultErrorMap: NB,
        setErrorMap: function(BB) {
          gB = BB
        },
        getErrorMap: qB,
        makeIssue: yB,
        EMPTY_PATH: [],
        addIssueToContext: UB,
        ParseStatus: WB,
        INVALID: dB,
        DIRTY: CB,
        OK: QB,
        isAborted: sB,
        isDirty: wB,
        isValid: OB,
        isAsync: YB,
        get util() {
          return vB
        },
        get objectUtil() {
          return kB
        },
        ZodParsedType: nB,
        getParsedType: hB,
        ZodType: MB,
        ZodString: uB,
        ZodNumber: lB,
        ZodBigInt: AB,
        ZodBoolean: tB,
        ZodDate: bB,
        ZodSymbol: xB,
        ZodUndefined: EB,
        ZodNull: DB,
        ZodAny: KB,
        ZodUnknown: VB,
        ZodNever: SB,
        ZodVoid: BI,
        ZodArray: II,
        ZodObject: TI,
        ZodUnion: JI,
        ZodDiscriminatedUnion: GI,
        ZodIntersection: kI,
        ZodTuple: cI,
        ZodRecord: nI,
        ZodMap: hI,
        ZodSet: zI,
        ZodFunction: FI,
        ZodLazy: NI,
        ZodLiteral: gI,
        ZodEnum: yI,
        ZodNativeEnum: UI,
        ZodPromise: WI,
        ZodEffects: dI,
        ZodTransformer: dI,
        ZodOptional: CI,
        ZodNullable: QI,
        ZodDefault: sI,
        ZodCatch: wI,
        ZodNaN: OI,
        BRAND: YI,
        ZodBranded: iI,
        ZodPipeline: pI,
        ZodReadonly: aI,
        custom: HI,
        Schema: MB,
        ZodSchema: MB,
        late: MI,
        get ZodFirstPartyTypeKind() {
          return jI
        },
        coerce: gZ,
        any: lI,
        array: xI,
        bigint: mI,
        boolean: XI,
        date: LI,
        discriminatedUnion: VI,
        effect: nZ,
        enum: vZ,
        function: JZ,
        instanceof: function(BB) {
          let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${BB.name}`
          };
          return HI((IB => IB instanceof BB), IB)
        },
        intersection: SI,
        lazy: oZ,
        literal: GZ,
        map: ZZ,
        nan: rI,
        nativeEnum: kZ,
        never: tI,
        null: fI,
        nullable: zZ,
        number: RI,
        object: EI,
        oboolean: () => XI().optional(),
        onumber: () => RI().optional(),
        optional: hZ,
        ostring: () => PI().optional(),
        pipeline: NZ,
        preprocess: FZ,
        promise: cZ,
        record: IZ,
        set: TZ,
        strictObject: DI,
        string: PI,
        symbol: eI,
        transformer: nZ,
        tuple: BZ,
        undefined: uI,
        union: KI,
        unknown: AI,
        void: bI,
        NEVER: qZ,
        ZodIssueCode: zB,
        quotelessJson: BB => JSON.stringify(BB, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: FB
      }),
      UZ = {
        exports: {}
      };
    ! function(BB) {
      var IB = function(BB) {
        var ZB = 1e7,
          TB = 9007199254740992,
          JB = zB(TB),
          oB = "0123456789abcdefghijklmnopqrstuvwxyz",
          GB = "function" === typeof BigInt;

        function vB(BB, IB, ZB, TB) {
          return "undefined" === typeof BB ? vB[0] : "undefined" !== typeof IB && (10 !== +IB || ZB) ? tB(BB, IB, ZB, TB) : KB(BB)
        }

        function kB(BB, IB) {
          this.value = BB, this.sign = IB, this.isSmall = !1
        }

        function cB(BB) {
          this.value = BB, this.sign = BB < 0, this.isSmall = !0
        }

        function nB(BB) {
          this.value = BB
        }

        function hB(BB) {
          return -TB < BB && BB < TB
        }

        function zB(BB) {
          return BB < 1e7 ? [BB] : BB < 1e14 ? [BB % 1e7, Math.floor(BB / 1e7)] : [BB % 1e7, Math.floor(BB / 1e7) % 1e7, Math.floor(BB / 1e14)]
        }

        function FB(BB) {
          NB(BB);
          var IB = BB.length;
          if (IB < 4 && HB(BB, JB) < 0) switch (IB) {
            case 0:
              return 0;
            case 1:
              return BB[0];
            case 2:
              return BB[0] + BB[1] * ZB;
            default:
              return BB[0] + (BB[1] + BB[2] * ZB) * ZB
          }
          return BB
        }

        function NB(BB) {
          for (var IB = BB.length; 0 === BB[--IB];);
          BB.length = IB + 1
        }

        function gB(BB) {
          for (var IB = new Array(BB), ZB = -1; ++ZB < BB;) IB[ZB] = 0;
          return IB
        }

        function qB(BB) {
          return BB > 0 ? Math.floor(BB) : Math.ceil(BB)
        }

        function yB(BB, IB) {
          var TB, JB, oB = BB.length,
            GB = IB.length,
            vB = new Array(oB),
            kB = 0,
            cB = ZB;
          for (JB = 0; JB < GB; JB++) kB = (TB = BB[JB] + IB[JB] + kB) >= cB ? 1 : 0, vB[JB] = TB - kB * cB;
          for (; JB < oB;) kB = (TB = BB[JB] + kB) === cB ? 1 : 0, vB[JB++] = TB - kB * cB;
          return kB > 0 && vB.push(kB), vB
        }

        function UB(BB, IB) {
          return BB.length >= IB.length ? yB(BB, IB) : yB(IB, BB)
        }

        function WB(BB, IB) {
          var TB, JB, oB = BB.length,
            GB = new Array(oB),
            vB = ZB;
          for (JB = 0; JB < oB; JB++) TB = BB[JB] - vB + IB, IB = Math.floor(TB / vB), GB[JB] = TB - IB * vB, IB += 1;
          for (; IB > 0;) GB[JB++] = IB % vB, IB = Math.floor(IB / vB);
          return GB
        }

        function dB(BB, IB) {
          var TB, JB, oB = BB.length,
            GB = IB.length,
            vB = new Array(oB),
            kB = 0,
            cB = ZB;
          for (TB = 0; TB < GB; TB++)(JB = BB[TB] - kB - IB[TB]) < 0 ? (JB += cB, kB = 1) : kB = 0, vB[TB] = JB;
          for (TB = GB; TB < oB; TB++) {
            if (!((JB = BB[TB] - kB) < 0)) {
              vB[TB++] = JB;
              break
            }
            JB += cB, vB[TB] = JB
          }
          for (; TB < oB; TB++) vB[TB] = BB[TB];
          return NB(vB), vB
        }

        function CB(BB, IB, TB) {
          var JB, oB, GB = BB.length,
            vB = new Array(GB),
            nB = -IB,
            hB = ZB;
          for (JB = 0; JB < GB; JB++) oB = BB[JB] + nB, nB = Math.floor(oB / hB), oB %= hB, vB[JB] = oB < 0 ? oB + hB : oB;
          return "number" === typeof(vB = FB(vB)) ? (TB && (vB = -vB), new cB(vB)) : new kB(vB, TB)
        }

        function QB(BB, IB) {
          var TB, JB, oB, GB, vB = BB.length,
            kB = IB.length,
            cB = gB(vB + kB),
            nB = ZB;
          for (oB = 0; oB < vB; ++oB) {
            GB = BB[oB];
            for (var hB = 0; hB < kB; ++hB) TB = GB * IB[hB] + cB[oB + hB], JB = Math.floor(TB / nB), cB[oB + hB] = TB - JB * nB, cB[oB + hB + 1] += JB
          }
          return NB(cB), cB
        }

        function sB(BB, IB) {
          var TB, JB, oB = BB.length,
            GB = new Array(oB),
            vB = ZB,
            kB = 0;
          for (JB = 0; JB < oB; JB++) TB = BB[JB] * IB + kB, kB = Math.floor(TB / vB), GB[JB] = TB - kB * vB;
          for (; kB > 0;) GB[JB++] = kB % vB, kB = Math.floor(kB / vB);
          return GB
        }

        function wB(BB, IB) {
          for (var ZB = []; IB-- > 0;) ZB.push(0);
          return ZB.concat(BB)
        }

        function OB(BB, IB) {
          var ZB = Math.max(BB.length, IB.length);
          if (ZB <= 30) return QB(BB, IB);
          ZB = Math.ceil(ZB / 2);
          var TB = BB.slice(ZB),
            JB = BB.slice(0, ZB),
            oB = IB.slice(ZB),
            GB = IB.slice(0, ZB),
            vB = OB(JB, GB),
            kB = OB(TB, oB),
            cB = OB(UB(JB, TB), UB(GB, oB)),
            nB = UB(UB(vB, wB(dB(dB(cB, vB), kB), ZB)), wB(kB, 2 * ZB));
          return NB(nB), nB
        }

        function YB(BB, IB, TB) {
          return new kB(BB < ZB ? sB(IB, BB) : QB(IB, zB(BB)), TB)
        }

        function iB(BB) {
          var IB, TB, JB, oB, GB = BB.length,
            vB = gB(GB + GB),
            kB = ZB;
          for (JB = 0; JB < GB; JB++) {
            TB = 0 - (oB = BB[JB]) * oB;
            for (var cB = JB; cB < GB; cB++) IB = oB * BB[cB] * 2 + vB[JB + cB] + TB, TB = Math.floor(IB / kB), vB[JB + cB] = IB - TB * kB;
            vB[JB + GB] = TB
          }
          return NB(vB), vB
        }

        function pB(BB, IB) {
          var TB, JB, oB, GB, vB = BB.length,
            kB = gB(vB),
            cB = ZB;
          for (oB = 0, TB = vB - 1; TB >= 0; --TB) oB = (GB = oB * cB + BB[TB]) - (JB = qB(GB / IB)) * IB, kB[TB] = 0 | JB;
          return [kB, 0 | oB]
        }

        function aB(BB, IB) {
          var TB, JB = KB(IB);
          if (GB) return [new nB(BB.value / JB.value), new nB(BB.value % JB.value)];
          var oB, hB = BB.value,
            yB = JB.value;
          if (0 === yB) throw new Error("Cannot divide by zero");
          if (BB.isSmall) return JB.isSmall ? [new cB(qB(hB / yB)), new cB(hB % yB)] : [vB[0], BB];
          if (JB.isSmall) {
            if (1 === yB) return [BB, vB[0]];
            if (-1 == yB) return [BB.dv(), vB[0]];
            var UB = Math.abs(yB);
            if (UB < ZB) {
              oB = FB((TB = pB(hB, UB))[0]);
              var WB = TB[1];
              return BB.sign && (WB = -WB), "number" === typeof oB ? (BB.sign !== JB.sign && (oB = -oB), [new cB(oB), new cB(WB)]) : [new kB(oB, BB.sign !== JB.sign), new cB(WB)]
            }
            yB = zB(UB)
          }
          var CB = HB(hB, yB);
          if (-1 === CB) return [vB[0], BB];
          if (0 === CB) return [vB[BB.sign === JB.sign ? 1 : -1], vB[0]];
          TB = hB.length + yB.length <= 200 ? function(BB, IB) {
            var TB, JB, oB, GB, vB, kB, cB, nB = BB.length,
              hB = IB.length,
              zB = ZB,
              NB = gB(IB.length),
              qB = IB[hB - 1],
              yB = Math.ceil(zB / (2 * qB)),
              UB = sB(BB, yB),
              WB = sB(IB, yB);
            for (UB.length <= nB && UB.push(0), WB.push(0), qB = WB[hB - 1], JB = nB - hB; JB >= 0; JB--) {
              for (TB = zB - 1, UB[JB + hB] !== qB && (TB = Math.floor((UB[JB + hB] * zB + UB[JB + hB - 1]) / qB)), oB = 0, GB = 0, kB = WB.length, vB = 0; vB < kB; vB++) oB += TB * WB[vB], cB = Math.floor(oB / zB), GB += UB[JB + vB] - (oB - cB * zB), oB = cB, GB < 0 ? (UB[JB + vB] = GB + zB, GB = -1) : (UB[JB + vB] = GB, GB = 0);
              for (; 0 !== GB;) {
                for (TB -= 1, oB = 0, vB = 0; vB < kB; vB++)(oB += UB[JB + vB] - zB + WB[vB]) < 0 ? (UB[JB + vB] = oB + zB, oB = 0) : (UB[JB + vB] = oB, oB = 1);
                GB += oB
              }
              NB[JB] = TB
            }
            return UB = pB(UB, yB)[0], [FB(NB), FB(UB)]
          }(hB, yB) : function(BB, IB) {
            for (var TB, JB, oB, GB, vB, kB = BB.length, cB = IB.length, nB = [], hB = [], zB = ZB; kB;)
              if (hB.unshift(BB[--kB]), NB(hB), HB(hB, IB) < 0) nB.push(0);
              else {
                oB = hB[(JB = hB.length) - 1] * zB + hB[JB - 2], GB = IB[cB - 1] * zB + IB[cB - 2], JB > cB && (oB = (oB + 1) * zB), TB = Math.ceil(oB / GB);
                do {
                  if (HB(vB = sB(IB, TB), hB) <= 0) break;
                  TB--
                } while (TB);
                nB.push(TB), hB = dB(hB, vB)
              } return nB.reverse(), [FB(nB), FB(hB)]
          }(hB, yB), oB = TB[0];
          var QB = BB.sign !== JB.sign,
            wB = TB[1],
            OB = BB.sign;
          return "number" === typeof oB ? (QB && (oB = -oB), oB = new cB(oB)) : oB = new kB(oB, QB), "number" === typeof wB ? (OB && (wB = -wB), wB = new cB(wB)) : wB = new kB(wB, OB), [oB, wB]
        }

        function HB(BB, IB) {
          if (BB.length !== IB.length) return BB.length > IB.length ? 1 : -1;
          for (var ZB = BB.length - 1; ZB >= 0; ZB--)
            if (BB[ZB] !== IB[ZB]) return BB[ZB] > IB[ZB] ? 1 : -1;
          return 0
        }

        function MB(BB) {
          var IB = BB.abs();
          return !IB.isUnit() && (!!(IB.equals(2) || IB.equals(3) || IB.equals(5)) || !(IB.isEven() || IB.isDivisibleBy(3) || IB.isDivisibleBy(5)) && (!!IB.lesser(49) || void 0))
        }

        function jB(BB, ZB) {
          for (var TB, JB, oB, GB = BB.prev(), vB = GB, kB = 0; vB.isEven();) vB = vB.divide(2), kB++;
          BB: for (JB = 0; JB < ZB.length; JB++)
            if (!BB.lesser(ZB[JB]) && !(oB = IB(ZB[JB]).modPow(vB, BB)).isUnit() && !oB.equals(GB)) {
              for (TB = kB - 1; 0 != TB; TB--) {
                if ((oB = oB.square().mod(BB)).isUnit()) return !1;
                if (oB.equals(GB)) continue BB
              }
              return !1
            }
          return !0
        }
        kB.prototype = Object.create(vB.prototype), cB.prototype = Object.create(vB.prototype), nB.prototype = Object.create(vB.prototype), kB.prototype.add = function(BB) {
          var IB = KB(BB);
          if (this.sign !== IB.sign) return this.subtract(IB.dv());
          var ZB = this.value,
            TB = IB.value;
          return IB.isSmall ? new kB(WB(ZB, Math.abs(TB)), this.sign) : new kB(UB(ZB, TB), this.sign)
        }, kB.prototype.plus = kB.prototype.add, cB.prototype.add = function(BB) {
          var IB = KB(BB),
            ZB = this.value;
          if (ZB < 0 !== IB.sign) return this.subtract(IB.dv());
          var TB = IB.value;
          if (IB.isSmall) {
            if (hB(ZB + TB)) return new cB(ZB + TB);
            TB = zB(Math.abs(TB))
          }
          return new kB(WB(TB, Math.abs(ZB)), ZB < 0)
        }, cB.prototype.plus = cB.prototype.add, nB.prototype.add = function(BB) {
          return new nB(this.value + KB(BB).value)
        }, nB.prototype.plus = nB.prototype.add, kB.prototype.subtract = function(BB) {
          var IB = KB(BB);
          if (this.sign !== IB.sign) return this.add(IB.dv());
          var ZB = this.value,
            TB = IB.value;
          return IB.isSmall ? CB(ZB, Math.abs(TB), this.sign) : function(BB, IB, ZB) {
            var TB;
            return HB(BB, IB) >= 0 ? TB = dB(BB, IB) : (TB = dB(IB, BB), ZB = !ZB), "number" === typeof(TB = FB(TB)) ? (ZB && (TB = -TB), new cB(TB)) : new kB(TB, ZB)
          }(ZB, TB, this.sign)
        }, kB.prototype.minus = kB.prototype.subtract, cB.prototype.subtract = function(BB) {
          var IB = KB(BB),
            ZB = this.value;
          if (ZB < 0 !== IB.sign) return this.add(IB.dv());
          var TB = IB.value;
          return IB.isSmall ? new cB(ZB - TB) : CB(TB, Math.abs(ZB), ZB >= 0)
        }, cB.prototype.minus = cB.prototype.subtract, nB.prototype.subtract = function(BB) {
          return new nB(this.value - KB(BB).value)
        }, nB.prototype.minus = nB.prototype.subtract, kB.prototype.dv = function() {
          return new kB(this.value, !this.sign)
        }, cB.prototype.dv = function() {
          var BB = this.sign,
            IB = new cB(-this.value);
          return IB.sign = !BB, IB
        }, nB.prototype.dv = function() {
          return new nB(-this.value)
        }, kB.prototype.abs = function() {
          return new kB(this.value, !1)
        }, cB.prototype.abs = function() {
          return new cB(Math.abs(this.value))
        }, nB.prototype.abs = function() {
          return new nB(this.value >= 0 ? this.value : -this.value)
        }, kB.prototype.multiply = function(BB) {
          var IB, TB, JB, oB = KB(BB),
            GB = this.value,
            cB = oB.value,
            nB = this.sign !== oB.sign;
          if (oB.isSmall) {
            if (0 === cB) return vB[0];
            if (1 === cB) return this;
            if (-1 === cB) return this.dv();
            if ((IB = Math.abs(cB)) < ZB) return new kB(sB(GB, IB), nB);
            cB = zB(IB)
          }
          return TB = GB.length, JB = cB.length, new kB(-.012 * TB - .012 * JB + 15e-6 * TB * JB > 0 ? OB(GB, cB) : QB(GB, cB), nB)
        }, kB.prototype.times = kB.prototype.multiply, cB.prototype._multiplyBySmall = function(BB) {
          return hB(BB.value * this.value) ? new cB(BB.value * this.value) : YB(Math.abs(BB.value), zB(Math.abs(this.value)), this.sign !== BB.sign)
        }, kB.prototype._multiplyBySmall = function(BB) {
          return 0 === BB.value ? vB[0] : 1 === BB.value ? this : -1 === BB.value ? this.dv() : YB(Math.abs(BB.value), this.value, this.sign !== BB.sign)
        }, cB.prototype.multiply = function(BB) {
          return KB(BB)._multiplyBySmall(this)
        }, cB.prototype.times = cB.prototype.multiply, nB.prototype.multiply = function(BB) {
          return new nB(this.value * KB(BB).value)
        }, nB.prototype.times = nB.prototype.multiply, kB.prototype.square = function() {
          return new kB(iB(this.value), !1)
        }, cB.prototype.square = function() {
          var BB = this.value * this.value;
          return hB(BB) ? new cB(BB) : new kB(iB(zB(Math.abs(this.value))), !1)
        }, nB.prototype.square = function(BB) {
          return new nB(this.value * this.value)
        }, kB.prototype.divmod = function(BB) {
          var IB = aB(this, BB);
          return {
            quotient: IB[0],
            remainder: IB[1]
          }
        }, nB.prototype.divmod = cB.prototype.divmod = kB.prototype.divmod, kB.prototype.divide = function(BB) {
          return aB(this, BB)[0]
        }, nB.prototype.over = nB.prototype.divide = function(BB) {
          return new nB(this.value / KB(BB).value)
        }, cB.prototype.over = cB.prototype.divide = kB.prototype.over = kB.prototype.divide, kB.prototype.mod = function(BB) {
          return aB(this, BB)[1]
        }, nB.prototype.mod = nB.prototype.remainder = function(BB) {
          return new nB(this.value % KB(BB).value)
        }, cB.prototype.remainder = cB.prototype.mod = kB.prototype.remainder = kB.prototype.mod, kB.prototype.pow = function(BB) {
          var IB, ZB, TB, JB = KB(BB),
            oB = this.value,
            GB = JB.value;
          if (0 === GB) return vB[1];
          if (0 === oB) return vB[0];
          if (1 === oB) return vB[1];
          if (-1 === oB) return JB.isEven() ? vB[1] : vB[-1];
          if (JB.sign) return vB[0];
          if (!JB.isSmall) throw new Error("The exponent " + JB.toString() + " is too large.");
          if (this.isSmall && hB(IB = Math.pow(oB, GB))) return new cB(qB(IB));
          for (ZB = this, TB = vB[1]; !0 & GB && (TB = TB.times(ZB), --GB), 0 !== GB;) GB /= 2, ZB = ZB.square();
          return TB
        }, cB.prototype.pow = kB.prototype.pow, nB.prototype.pow = function(BB) {
          var IB = KB(BB),
            ZB = this.value,
            TB = IB.value,
            JB = BigInt(0),
            oB = BigInt(1),
            GB = BigInt(2);
          if (TB === JB) return vB[1];
          if (ZB === JB) return vB[0];
          if (ZB === oB) return vB[1];
          if (ZB === BigInt(-1)) return IB.isEven() ? vB[1] : vB[-1];
          if (IB.isNegative()) return new nB(JB);
          for (var kB = this, cB = vB[1];
            (TB & oB) === oB && (cB = cB.times(kB), --TB), TB !== JB;) TB /= GB, kB = kB.square();
          return cB
        }, kB.prototype.modPow = function(BB, IB) {
          if (BB = KB(BB), (IB = KB(IB)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var ZB = vB[1],
            TB = this.mod(IB);
          for (BB.isNegative() && (BB = BB.multiply(vB[-1]), TB = TB.modInv(IB)); BB.isPositive();) {
            if (TB.isZero()) return vB[0];
            BB.isOdd() && (ZB = ZB.multiply(TB).mod(IB)), BB = BB.divide(2), TB = TB.square().mod(IB)
          }
          return ZB
        }, nB.prototype.modPow = cB.prototype.modPow = kB.prototype.modPow, kB.prototype.compareAbs = function(BB) {
          var IB = KB(BB),
            ZB = this.value,
            TB = IB.value;
          return IB.isSmall ? 1 : HB(ZB, TB)
        }, cB.prototype.compareAbs = function(BB) {
          var IB = KB(BB),
            ZB = Math.abs(this.value),
            TB = IB.value;
          return IB.isSmall ? ZB === (TB = Math.abs(TB)) ? 0 : ZB > TB ? 1 : -1 : -1
        }, nB.prototype.compareAbs = function(BB) {
          var IB = this.value,
            ZB = KB(BB).value;
          return (IB = IB >= 0 ? IB : -IB) === (ZB = ZB >= 0 ? ZB : -ZB) ? 0 : IB > ZB ? 1 : -1
        }, kB.prototype.compare = function(BB) {
          if (BB === 1 / 0) return -1;
          if (BB === -1 / 0) return 1;
          var IB = KB(BB),
            ZB = this.value,
            TB = IB.value;
          return this.sign !== IB.sign ? IB.sign ? 1 : -1 : IB.isSmall ? this.sign ? -1 : 1 : HB(ZB, TB) * (this.sign ? -1 : 1)
        }, kB.prototype.compareTo = kB.prototype.compare, cB.prototype.compare = function(BB) {
          if (BB === 1 / 0) return -1;
          if (BB === -1 / 0) return 1;
          var IB = KB(BB),
            ZB = this.value,
            TB = IB.value;
          return IB.isSmall ? ZB == TB ? 0 : ZB > TB ? 1 : -1 : ZB < 0 !== IB.sign ? ZB < 0 ? -1 : 1 : ZB < 0 ? 1 : -1
        }, cB.prototype.compareTo = cB.prototype.compare, nB.prototype.compare = function(BB) {
          if (BB === 1 / 0) return -1;
          if (BB === -1 / 0) return 1;
          var IB = this.value,
            ZB = KB(BB).value;
          return IB === ZB ? 0 : IB > ZB ? 1 : -1
        }, nB.prototype.compareTo = nB.prototype.compare, kB.prototype.equals = function(BB) {
          return 0 === this.compare(BB)
        }, nB.prototype.eq = nB.prototype.equals = cB.prototype.eq = cB.prototype.equals = kB.prototype.eq = kB.prototype.equals, kB.prototype.notEquals = function(BB) {
          return 0 !== this.compare(BB)
        }, nB.prototype.neq = nB.prototype.notEquals = cB.prototype.neq = cB.prototype.notEquals = kB.prototype.neq = kB.prototype.notEquals, kB.prototype.greater = function(BB) {
          return this.compare(BB) > 0
        }, nB.prototype.gt = nB.prototype.greater = cB.prototype.gt = cB.prototype.greater = kB.prototype.gt = kB.prototype.greater, kB.prototype.lesser = function(BB) {
          return this.compare(BB) < 0
        }, nB.prototype.lt = nB.prototype.lesser = cB.prototype.lt = cB.prototype.lesser = kB.prototype.lt = kB.prototype.lesser, kB.prototype.greaterOrEquals = function(BB) {
          return this.compare(BB) >= 0
        }, nB.prototype.geq = nB.prototype.greaterOrEquals = cB.prototype.geq = cB.prototype.greaterOrEquals = kB.prototype.geq = kB.prototype.greaterOrEquals, kB.prototype.lesserOrEquals = function(BB) {
          return this.compare(BB) <= 0
        }, nB.prototype.leq = nB.prototype.lesserOrEquals = cB.prototype.leq = cB.prototype.lesserOrEquals = kB.prototype.leq = kB.prototype.lesserOrEquals, kB.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, cB.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, nB.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, kB.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, cB.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, nB.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, kB.prototype.isPositive = function() {
          return !this.sign
        }, cB.prototype.isPositive = function() {
          return this.value > 0
        }, nB.prototype.isPositive = cB.prototype.isPositive, kB.prototype.isNegative = function() {
          return this.sign
        }, cB.prototype.isNegative = function() {
          return this.value < 0
        }, nB.prototype.isNegative = cB.prototype.isNegative, kB.prototype.isUnit = function() {
          return !1
        }, cB.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, nB.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, kB.prototype.isZero = function() {
          return !1
        }, cB.prototype.isZero = function() {
          return 0 === this.value
        }, nB.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, kB.prototype.isDivisibleBy = function(BB) {
          var IB = KB(BB);
          return !IB.isZero() && (!!IB.isUnit() || (0 === IB.compareAbs(2) ? this.isEven() : this.mod(IB).isZero()))
        }, nB.prototype.isDivisibleBy = cB.prototype.isDivisibleBy = kB.prototype.isDivisibleBy, kB.prototype.isPrime = function(ZB) {
          var TB = MB(this);
          if (TB !== BB) return TB;
          var JB = this.abs(),
            oB = JB.bitLength();
          if (oB <= 64) return jB(JB, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var GB = Math.log(2) * oB.toJSNumber(), vB = Math.ceil(!0 === ZB ? 2 * Math.pow(GB, 2) : GB), kB = [], cB = 0; cB < vB; cB++) kB.push(IB(cB + 2));
          return jB(JB, kB)
        }, nB.prototype.isPrime = cB.prototype.isPrime = kB.prototype.isPrime, kB.prototype.isProbablePrime = function(ZB, TB) {
          var JB = MB(this);
          if (JB !== BB) return JB;
          for (var oB = this.abs(), GB = ZB === BB ? 5 : ZB, vB = [], kB = 0; kB < GB; kB++) vB.push(IB.randBetween(2, oB.minus(2), TB));
          return jB(oB, vB)
        }, nB.prototype.isProbablePrime = cB.prototype.isProbablePrime = kB.prototype.isProbablePrime, kB.prototype.modInv = function(BB) {
          for (var ZB, TB, JB, oB = IB.zero, GB = IB.one, vB = KB(BB), kB = this.abs(); !kB.isZero();) ZB = vB.divide(kB), TB = oB, JB = vB, oB = GB, vB = kB, GB = TB.subtract(ZB.multiply(GB)), kB = JB.subtract(ZB.multiply(kB));
          if (!vB.isUnit()) throw new Error(this.toString() + " and " + BB.toString() + " are not co-prime");
          return -1 === oB.compare(0) && (oB = oB.add(BB)), this.isNegative() ? oB.dv() : oB
        }, nB.prototype.modInv = cB.prototype.modInv = kB.prototype.modInv, kB.prototype.next = function() {
          var BB = this.value;
          return this.sign ? CB(BB, 1, this.sign) : new kB(WB(BB, 1), this.sign)
        }, cB.prototype.next = function() {
          var BB = this.value;
          return BB + 1 < TB ? new cB(BB + 1) : new kB(JB, !1)
        }, nB.prototype.next = function() {
          return new nB(this.value + BigInt(1))
        }, kB.prototype.prev = function() {
          var BB = this.value;
          return this.sign ? new kB(WB(BB, 1), !0) : CB(BB, 1, this.sign)
        }, cB.prototype.prev = function() {
          var BB = this.value;
          return BB - 1 > -TB ? new cB(BB - 1) : new kB(JB, !0)
        }, nB.prototype.prev = function() {
          return new nB(this.value - BigInt(1))
        };
        for (var PB = [1]; 2 * PB[PB.length - 1] <= ZB;) PB.push(2 * PB[PB.length - 1]);
        var RB = PB.length,
          rB = PB[RB - 1];

        function mB(BB) {
          return Math.abs(BB) <= ZB
        }

        function XB(BB, ZB, TB) {
          ZB = KB(ZB);
          for (var JB = BB.isNegative(), oB = ZB.isNegative(), GB = JB ? BB.not() : BB, vB = oB ? ZB.not() : ZB, kB = 0, cB = 0, nB = null, hB = null, zB = []; !GB.isZero() || !vB.isZero();) kB = (nB = aB(GB, rB))[1].toJSNumber(), JB && (kB = rB - 1 - kB), cB = (hB = aB(vB, rB))[1].toJSNumber(), oB && (cB = rB - 1 - cB), GB = nB[0], vB = hB[0], zB.push(TB(kB, cB));
          for (var FB = 0 !== TB(JB ? 1 : 0, oB ? 1 : 0) ? IB(-1) : IB(0), NB = zB.length - 1; NB >= 0; NB -= 1) FB = FB.multiply(rB).add(IB(zB[NB]));
          return FB
        }
        kB.prototype.shiftLeft = function(BB) {
          var IB = KB(BB).toJSNumber();
          if (!mB(IB)) throw new Error(String(IB) + " is too large for shifting.");
          if (IB < 0) return this.shiftRight(-IB);
          var ZB = this;
          if (ZB.isZero()) return ZB;
          for (; IB >= RB;) ZB = ZB.multiply(rB), IB -= RB - 1;
          return ZB.multiply(PB[IB])
        }, nB.prototype.shiftLeft = cB.prototype.shiftLeft = kB.prototype.shiftLeft, kB.prototype.shiftRight = function(BB) {
          var IB, ZB = KB(BB).toJSNumber();
          if (!mB(ZB)) throw new Error(String(ZB) + " is too large for shifting.");
          if (ZB < 0) return this.shiftLeft(-ZB);
          for (var TB = this; ZB >= RB;) {
            if (TB.isZero() || TB.isNegative() && TB.isUnit()) return TB;
            TB = (IB = aB(TB, rB))[1].isNegative() ? IB[0].prev() : IB[0], ZB -= RB - 1
          }
          return (IB = aB(TB, PB[ZB]))[1].isNegative() ? IB[0].prev() : IB[0]
        }, nB.prototype.shiftRight = cB.prototype.shiftRight = kB.prototype.shiftRight, kB.prototype.not = function() {
          return this.dv().prev()
        }, nB.prototype.not = cB.prototype.not = kB.prototype.not, kB.prototype.and = function(BB) {
          return XB(this, BB, (function(BB, IB) {
            return BB & IB
          }))
        }, nB.prototype.and = cB.prototype.and = kB.prototype.and, kB.prototype.or = function(BB) {
          return XB(this, BB, (function(BB, IB) {
            return BB | IB
          }))
        }, nB.prototype.or = cB.prototype.or = kB.prototype.or, kB.prototype.xor = function(BB) {
          return XB(this, BB, (function(BB, IB) {
            return BB ^ IB
          }))
        }, nB.prototype.xor = cB.prototype.xor = kB.prototype.xor;
        var LB = 1 << 30;

        function eB(BB) {
          var IB = BB.value,
            TB = "number" === typeof IB ? IB | LB : "bigint" === typeof IB ? IB | BigInt(LB) : IB[0] + IB[1] * ZB | 1073758208;
          return TB & -TB
        }

        function uB(BB, ZB) {
          if (ZB.compareTo(BB) <= 0) {
            var TB = uB(BB, ZB.square(ZB)),
              JB = TB.p,
              oB = TB.e,
              GB = JB.multiply(ZB);
            return GB.compareTo(BB) <= 0 ? {
              p: GB,
              e: 2 * oB + 1
            } : {
              p: JB,
              e: 2 * oB
            }
          }
          return {
            p: IB(1),
            e: 0
          }
        }

        function fB(BB, IB) {
          return BB = KB(BB), IB = KB(IB), BB.greater(IB) ? BB : IB
        }

        function lB(BB, IB) {
          return BB = KB(BB), IB = KB(IB), BB.lesser(IB) ? BB : IB
        }

        function AB(BB, IB) {
          if (BB = KB(BB).abs(), IB = KB(IB).abs(), BB.equals(IB)) return BB;
          if (BB.isZero()) return IB;
          if (IB.isZero()) return BB;
          for (var ZB, TB, JB = vB[1]; BB.isEven() && IB.isEven();) ZB = lB(eB(BB), eB(IB)), BB = BB.divide(ZB), IB = IB.divide(ZB), JB = JB.multiply(ZB);
          for (; BB.isEven();) BB = BB.divide(eB(BB));
          do {
            for (; IB.isEven();) IB = IB.divide(eB(IB));
            BB.greater(IB) && (TB = IB, IB = BB, BB = TB), IB = IB.subtract(BB)
          } while (!IB.isZero());
          return JB.isUnit() ? BB : BB.multiply(JB)
        }
        kB.prototype.bitLength = function() {
          var BB = this;
          return BB.compareTo(IB(0)) < 0 && (BB = BB.dv().subtract(IB(1))), 0 === BB.compareTo(IB(0)) ? IB(0) : IB(uB(BB, IB(2)).e).add(IB(1))
        }, nB.prototype.bitLength = cB.prototype.bitLength = kB.prototype.bitLength;
        var tB = function(BB, IB, ZB, TB) {
          ZB = ZB || oB, BB = String(BB), TB || (BB = BB.toLowerCase(), ZB = ZB.toLowerCase());
          var JB, GB = BB.length,
            vB = Math.abs(IB),
            kB = {};
          for (JB = 0; JB < ZB.length; JB++) kB[ZB[JB]] = JB;
          for (JB = 0; JB < GB; JB++) {
            if ("-" !== (hB = BB[JB]) && (hB in kB && kB[hB] >= vB)) {
              if ("1" === hB && 1 === vB) continue;
              throw new Error(hB + " is not a valid digit in base " + IB + ".")
            }
          }
          IB = KB(IB);
          var cB = [],
            nB = "-" === BB[0];
          for (JB = nB ? 1 : 0; JB < BB.length; JB++) {
            var hB;
            if ((hB = BB[JB]) in kB) cB.push(KB(kB[hB]));
            else {
              if ("<" !== hB) throw new Error(hB + " is not a valid character");
              var zB = JB;
              do {
                JB++
              } while (">" !== BB[JB] && JB < BB.length);
              cB.push(KB(BB.slice(zB + 1, JB)))
            }
          }
          return bB(cB, IB, nB)
        };

        function bB(BB, IB, ZB) {
          var TB, JB = vB[0],
            oB = vB[1];
          for (TB = BB.length - 1; TB >= 0; TB--) JB = JB.add(BB[TB].times(oB)), oB = oB.times(IB);
          return ZB ? JB.dv() : JB
        }

        function xB(BB, ZB) {
          if ((ZB = IB(ZB)).isZero()) {
            if (BB.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (ZB.equals(-1)) {
            if (BB.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (BB.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-BB.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var TB = Array.apply(null, Array(BB.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return TB.unshift([1]), {
              value: [].concat.apply([], TB),
              isNegative: !1
            }
          }
          var JB = !1;
          if (BB.isNegative() && ZB.isPositive() && (JB = !0, BB = BB.abs()), ZB.isUnit()) return BB.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(BB.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: JB
          };
          for (var oB, GB = [], vB = BB; vB.isNegative() || vB.compareAbs(ZB) >= 0;) {
            oB = vB.divmod(ZB), vB = oB.quotient;
            var kB = oB.remainder;
            kB.isNegative() && (kB = ZB.minus(kB).abs(), vB = vB.next()), GB.push(kB.toJSNumber())
          }
          return GB.push(vB.toJSNumber()), {
            value: GB.reverse(),
            isNegative: JB
          }
        }

        function EB(BB, IB, ZB) {
          var TB = xB(BB, IB);
          return (TB.isNegative ? "-" : "") + TB.value.map((function(BB) {
            return function(BB, IB) {
              return BB < (IB = IB || oB).length ? IB[BB] : "<" + BB + ">"
            }(BB, ZB)
          })).join("")
        }

        function DB(BB) {
          if (hB(+BB)) {
            var IB = +BB;
            if (IB === qB(IB)) return GB ? new nB(BigInt(IB)) : new cB(IB);
            throw new Error("Invalid integer: " + BB)
          }
          var ZB = "-" === BB[0];
          ZB && (BB = BB.slice(1));
          var TB = BB.split(/e/i);
          if (TB.length > 2) throw new Error("Invalid integer: " + TB.join("e"));
          if (2 === TB.length) {
            var JB = TB[1];
            if ("+" === JB[0] && (JB = JB.slice(1)), (JB = +JB) !== qB(JB) || !hB(JB)) throw new Error("Invalid integer: " + JB + " is not a valid exponent.");
            var oB = TB[0],
              vB = oB.indexOf(".");
            if (vB >= 0 && (JB -= oB.length - vB - 1, oB = oB.slice(0, vB) + oB.slice(vB + 1)), JB < 0) throw new Error("Cannot include negative exponent part for integers");
            BB = oB += new Array(JB + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(BB)) throw new Error("Invalid integer: " + BB);
          if (GB) return new nB(BigInt(ZB ? "-" + BB : BB));
          for (var zB = [], FB = BB.length, gB = FB - 7; FB > 0;) zB.push(+BB.slice(gB, FB)), (gB -= 7) < 0 && (gB = 0), FB -= 7;
          return NB(zB), new kB(zB, ZB)
        }

        function KB(BB) {
          return "number" === typeof BB ? function(BB) {
            if (GB) return new nB(BigInt(BB));
            if (hB(BB)) {
              if (BB !== qB(BB)) throw new Error(BB + " is not an integer.");
              return new cB(BB)
            }
            return DB(BB.toString())
          }(BB) : "string" === typeof BB ? DB(BB) : "bigint" === typeof BB ? new nB(BB) : BB
        }
        kB.prototype.toArray = function(BB) {
          return xB(this, BB)
        }, cB.prototype.toArray = function(BB) {
          return xB(this, BB)
        }, nB.prototype.toArray = function(BB) {
          return xB(this, BB)
        }, kB.prototype.toString = function(IB, ZB) {
          if (IB === BB && (IB = 10), 10 !== IB) return EB(this, IB, ZB);
          for (var TB, JB = this.value, oB = JB.length, GB = String(JB[--oB]); --oB >= 0;) TB = String(JB[oB]), GB += "0000000".slice(TB.length) + TB;
          return (this.sign ? "-" : "") + GB
        }, cB.prototype.toString = function(IB, ZB) {
          return IB === BB && (IB = 10), 10 != IB ? EB(this, IB, ZB) : String(this.value)
        }, nB.prototype.toString = cB.prototype.toString, nB.prototype.toJSON = kB.prototype.toJSON = cB.prototype.toJSON = function() {
          return this.toString()
        }, kB.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, kB.prototype.toJSNumber = kB.prototype.valueOf, cB.prototype.valueOf = function() {
          return this.value
        }, cB.prototype.toJSNumber = cB.prototype.valueOf, nB.prototype.valueOf = nB.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var VB = 0; VB < 1e3; VB++) vB[VB] = KB(VB), VB > 0 && (vB[-VB] = KB(-VB));
        return vB.one = vB[1], vB.zero = vB[0], vB.minusOne = vB[-1], vB.max = fB, vB.min = lB, vB.gcd = AB, vB.lcm = function(BB, IB) {
          return BB = KB(BB).abs(), IB = KB(IB).abs(), BB.divide(AB(BB, IB)).multiply(IB)
        }, vB.isInstance = function(BB) {
          return BB instanceof kB || BB instanceof cB || BB instanceof nB
        }, vB.randBetween = function(BB, IB, TB) {
          BB = KB(BB), IB = KB(IB);
          var JB = TB || Math.random,
            oB = lB(BB, IB),
            GB = fB(BB, IB).subtract(oB).add(1);
          if (GB.isSmall) return oB.add(Math.floor(JB() * GB));
          for (var kB = xB(GB, ZB).value, cB = [], nB = !0, hB = 0; hB < kB.length; hB++) {
            var zB = nB ? kB[hB] : ZB,
              FB = qB(JB() * zB);
            cB.push(FB), FB < zB && (nB = !1)
          }
          return oB.add(vB.WZB(cB, ZB, !1))
        }, vB.WZB = function(BB, IB, ZB) {
          return bB(BB.map(KB), KB(IB || 10), ZB)
        }, vB
      }();
      BB.hasOwnProperty("exports") && (BB.exports = IB)
    }(UZ);
    var WZ = oB(UZ.exports);

    function dZ(BB, IB, ZB) {
      let TB = 0;
      for (let JB = 0; JB < ZB; JB++) {
        const ZB = BB[IB + JB];
        if (void 0 === ZB) break;
        TB += ZB * 16 ** JB
      }
      return TB
    }

    function CZ(BB) {
      const IB = [];
      for (let ZB = 0; ZB < BB.length; ZB++) {
        let TB = Number(BB[ZB]);
        for (let BB = 0; TB || BB < IB.length; BB++) TB += 10 * (IB[BB] || 0), IB[BB] = TB % 16, TB = (TB - IB[BB]) / 16
      }
      return IB
    }
    class QZ {
      static fromString(BB) {
        return new QZ(function(BB) {
          const IB = CZ(BB),
            ZB = Array(4);
          for (let TB = 0; TB < 4; TB++) ZB[3 - TB] = dZ(IB, 4 * TB, 4);
          return ZB
        }(BB), BB)
      }
      static fromBit(BB) {
        const IB = Array(4),
          ZB = Math.floor(BB / 16);
        for (let TB = 0; TB < 4; TB++) IB[3 - TB] = TB === ZB ? 1 << BB - 16 * ZB : 0;
        return new QZ(IB)
      }
      constructor(BB, IB) {
        this.parts = BB, this.str = IB
      }
      and(BB) {
        let {
          parts: IB
        } = BB;
        return new QZ(this.parts.map(((BB, ZB) => BB & IB[ZB])))
      }
      or(BB) {
        let {
          parts: IB
        } = BB;
        return new QZ(this.parts.map(((BB, ZB) => BB | IB[ZB])))
      }
      xor(BB) {
        let {
          parts: IB
        } = BB;
        return new QZ(this.parts.map(((BB, ZB) => BB ^ IB[ZB])))
      }
      not() {
        return new QZ(this.parts.map((BB => ~BB)))
      }
      equals(BB) {
        let {
          parts: IB
        } = BB;
        return this.parts.every(((BB, ZB) => BB === IB[ZB]))
      }
      toString() {
        if (null != this.str) return this.str;
        const BB = new Array(16);
        return this.parts.forEach(((IB, ZB) => {
          const TB = CZ(IB.toString());
          for (let JB = 0; JB < 4; JB++) BB[JB + 4 * ZB] = TB[3 - JB] || 0
        })), this.str = WZ.WZB(BB, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const sZ = function() {
      try {
        return BigInt, !0
      } catch (BB) {
        return !1
      }
    }();
    sZ && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const wZ = {},
      OZ = sZ ? function(BB) {
        return BigInt(BB)
      } : function(BB) {
        return BB instanceof QZ ? BB : ("number" === typeof BB && (BB = BB.toString()), null != wZ[BB] || (wZ[BB] = QZ.fromString(BB)), wZ[BB])
      },
      YZ = OZ(0),
      iZ = sZ ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YZ) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YZ)
      } : function() {
        let BB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YZ;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YZ).and(BB)
      },
      pZ = sZ ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YZ) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YZ)
      } : function() {
        let BB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YZ;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YZ).or(BB)
      },
      aZ = sZ ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YZ) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YZ)
      } : function() {
        let BB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : YZ;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YZ).xor(BB)
      },
      HZ = sZ ? function(BB, IB) {
        return BB === IB
      } : function(BB, IB) {
        return null == BB || null == IB ? BB == IB : BB.equals(IB)
      };
    var MZ, jZ, PZ, RZ, rZ = {
      combine: function() {
        let BB = arguments.length <= 0 ? void 0 : arguments[0];
        for (let IB = 1; IB < arguments.length; IB++) BB = pZ(BB, IB < 0 || arguments.length <= IB ? void 0 : arguments[IB]);
        return BB
      },
      add: function(BB, IB) {
        return IB === YZ ? BB : pZ(BB, IB)
      },
      remove: function(BB, IB) {
        return IB === YZ ? BB : aZ(BB, iZ(BB, IB))
      },
      filter: iZ,
      invert: sZ ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YZ)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : YZ).not()
      },
      has: function(BB, IB) {
        return HZ(iZ(BB, IB), IB)
      },
      hasAny: function(BB, IB) {
        return !HZ(iZ(BB, IB), YZ)
      },
      equals: HZ,
      deserialize: OZ,
      getFlag: sZ ? function(BB) {
        return BigInt(1) << BigInt(BB)
      } : function(BB) {
        return QZ.fromBit(BB)
      }
    };
    ! function(BB) {
      BB[BB.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", BB[BB.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", BB[BB.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", BB[BB.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", BB[BB.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", BB[BB.RATELIMITED = 4002] = "RATELIMITED", BB[BB.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", BB[BB.INVALID_VERSION = 4004] = "INVALID_VERSION", BB[BB.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(MZ || (MZ = {})),
    function(BB) {
      BB[BB.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", BB[BB.INVALID_COMMAND = 4002] = "INVALID_COMMAND", BB[BB.INVALID_EVENT = 4004] = "INVALID_EVENT", BB[BB.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(jZ || (jZ = {})),
    function(BB) {
      BB.LANDSCAPE = "landscape", BB.PORTRAIT = "portrait"
    }(PZ || (PZ = {})),
    function(BB) {
      BB.MOBILE = "mobile", BB.DESKTOP = "desktop"
    }(RZ || (RZ = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: rZ.getFlag(0),
      ADMINISTRATOR: rZ.getFlag(3)
    });

    function mZ(BB) {
      return FZ((IB => {
        var ZB;
        const [TB] = null !== (ZB = Object.entries(BB).find((BB => {
          let [, ZB] = BB;
          return ZB === IB
        }))) && void 0 !== ZB ? ZB : [];
        return null != IB && void 0 === TB ? BB.UNHANDLED : IB
      }), PI().or(RI()))
    }
    const XZ = yZ.object({
        image_url: yZ.string()
      }),
      LZ = yZ.object({
        mediaUrl: yZ.string().max(1024)
      }),
      eZ = yZ.object({
        access_token: yZ.union([yZ.string(), yZ.null()]).optional()
      }),
      uZ = yZ.object({
        access_token: yZ.string(),
        user: yZ.object({
          username: yZ.string(),
          discriminator: yZ.string(),
          id: yZ.string(),
          avatar: yZ.union([yZ.string(), yZ.null()]).optional(),
          public_flags: yZ.number(),
          global_name: yZ.union([yZ.string(), yZ.null()]).optional()
        }),
        scopes: yZ.array(function(BB) {
          const IB = HI().transform((IB => {
            const ZB = BB.safeParse(IB);
            return ZB.success ? ZB.data : BB._def.defaultValue()
          }));
          return IB.overlayType = BB, IB
        }(yZ.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(yZ.literal(-1)).default(-1))),
        expires: yZ.string(),
        application: yZ.object({
          description: yZ.string(),
          icon: yZ.union([yZ.string(), yZ.null()]).optional(),
          id: yZ.string(),
          rpc_origins: yZ.array(yZ.string()).optional(),
          name: yZ.string()
        })
      }),
      fZ = yZ.object({
        participants: yZ.array(yZ.object({
          id: yZ.string(),
          username: yZ.string(),
          global_name: yZ.union([yZ.string(), yZ.null()]).optional(),
          discriminator: yZ.string(),
          avatar: yZ.union([yZ.string(), yZ.null()]).optional(),
          flags: yZ.number(),
          bot: yZ.boolean(),
          avatar_decoration_data: yZ.union([yZ.object({
            asset: yZ.string(),
            skuId: yZ.string().optional()
          }), yZ.null()]).optional(),
          premium_type: yZ.union([yZ.number(), yZ.null()]).optional(),
          nickname: yZ.string().optional()
        }))
      });
    var lZ;
    ! function(BB) {
      BB.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", BB.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", BB.AUTHENTICATE = "AUTHENTICATE", BB.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(lZ || (lZ = {}));
    const AZ = yZ.object({}).optional().nullable(),
      tZ = yZ.void(),
      bZ = {
        [lZ.INITIATE_IMAGE_UPLOAD]: {
          request: tZ,
          response: XZ
        },
        [lZ.OPEN_SHARE_MOMENT_DIALOG]: {
          request: LZ,
          response: AZ
        },
        [lZ.AUTHENTICATE]: {
          request: eZ,
          response: uZ
        },
        [lZ.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: tZ,
          response: fZ
        }
      },
      xZ = "DISPATCH";
    var EZ;
    ! function(BB) {
      BB.AUTHORIZE = "AUTHORIZE", BB.AUTHENTICATE = "AUTHENTICATE", BB.GET_GUILDS = "GET_GUILDS", BB.GET_GUILD = "GET_GUILD", BB.GET_CHANNEL = "GET_CHANNEL", BB.GET_CHANNELS = "GET_CHANNELS", BB.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", BB.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", BB.SUBSCRIBE = "SUBSCRIBE", BB.UNSUBSCRIBE = "UNSUBSCRIBE", BB.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", BB.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", BB.SET_ACTIVITY = "SET_ACTIVITY", BB.GET_SKUS = "GET_SKUS", BB.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", BB.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", BB.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", BB.START_PURCHASE = "START_PURCHASE", BB.SET_CONFIG = "SET_CONFIG", BB.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", BB.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", BB.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", BB.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", BB.CAPTURE_LOG = "CAPTURE_LOG", BB.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", BB.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", BB.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", BB.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", BB.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", BB.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", BB.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(EZ || (EZ = {}));
    const DZ = EI({
        cmd: PI(),
        data: AI(),
        evt: fI(),
        nonce: PI()
      }).passthrough(),
      KZ = (mZ(Object.assign(Object.assign({}, uZ.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), EI({
        id: PI(),
        username: PI(),
        discriminator: PI(),
        global_name: PI().optional().nullable(),
        avatar: PI().optional().nullable(),
        avatar_decoration_data: EI({
          asset: PI(),
          sku_id: PI().optional()
        }).nullable(),
        bot: XI(),
        flags: RI().optional().nullable(),
        premium_type: RI().optional().nullable()
      })),
      VZ = EI({
        user: KZ,
        nick: PI().optional().nullable(),
        roles: xI(PI()),
        joined_at: PI(),
        deaf: XI(),
        mute: XI()
      }),
      SZ = EI({
        id: PI(),
        name: PI().optional().nullable(),
        roles: xI(PI()).optional().nullable(),
        user: KZ.optional().nullable(),
        require_colons: XI().optional().nullable(),
        managed: XI().optional().nullable(),
        animated: XI().optional().nullable(),
        available: XI().optional().nullable()
      }),
      BT = EI({
        mute: XI(),
        deaf: XI(),
        self_mute: XI(),
        self_deaf: XI(),
        suppress: XI()
      }),
      IT = EI({
        mute: XI(),
        nick: PI(),
        user: KZ,
        voice_state: BT,
        volume: RI()
      }),
      ZT = mZ({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      TT = EI({
        name: PI(),
        type: RI(),
        url: PI().optional().nullable(),
        created_at: RI().optional().nullable(),
        timestamps: EI({
          start: RI(),
          end: RI()
        }).partial().optional().nullable(),
        application_id: PI().optional().nullable(),
        details: PI().optional().nullable(),
        state: PI().optional().nullable(),
        emoji: SZ.optional().nullable(),
        party: EI({
          id: PI().optional().nullable(),
          size: xI(RI()).optional().nullable()
        }).optional().nullable(),
        assets: EI({
          large_image: PI().nullable(),
          large_text: PI().nullable(),
          small_image: PI().nullable(),
          small_text: PI().nullable()
        }).partial().optional().nullable(),
        secrets: EI({
          join: PI(),
          match: PI()
        }).partial().optional().nullable(),
        instance: XI().optional().nullable(),
        flags: RI().optional().nullable()
      }),
      JT = EI({
        id: PI(),
        type: mZ({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: PI(),
        deny: PI()
      }),
      oT = {
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
      GT = EI({
        id: PI(),
        type: mZ(oT),
        guild_id: PI().optional().nullable(),
        position: RI().optional().nullable(),
        permission_overwrites: xI(JT).optional().nullable(),
        name: PI().optional().nullable(),
        topic: PI().optional().nullable(),
        nsfw: XI().optional().nullable(),
        last_message_id: PI().optional().nullable(),
        bitrate: RI().optional().nullable(),
        user_limit: RI().optional().nullable(),
        rate_limit_per_user: RI().optional().nullable(),
        recipients: xI(KZ).optional().nullable(),
        icon: PI().optional().nullable(),
        owner_id: PI().optional().nullable(),
        application_id: PI().optional().nullable(),
        parent_id: PI().optional().nullable(),
        last_pin_timestamp: PI().optional().nullable()
      }),
      vT = EI({
        user: KZ,
        guild_id: PI(),
        status: ZT,
        activities: xI(TT),
        client_status: EI({
          desktop: ZT,
          mobile: ZT,
          web: ZT
        }).partial()
      }),
      kT = EI({
        id: PI(),
        name: PI(),
        color: RI(),
        hoist: XI(),
        position: RI(),
        permissions: PI(),
        managed: XI(),
        mentionable: XI()
      }),
      cT = (EI({
        id: PI(),
        name: PI(),
        owner_id: PI(),
        icon: PI().nullable(),
        icon_hash: PI().optional().nullable(),
        splash: PI().nullable(),
        discovery_splash: PI().nullable(),
        owner: XI().optional().nullable(),
        permissions: PI().optional().nullable(),
        region: PI(),
        afk_channel_id: PI().nullable(),
        afk_timeout: RI(),
        widget_enabled: XI().optional().nullable(),
        widget_channel_id: PI().optional().nullable(),
        verification_level: RI(),
        default_message_notifications: RI(),
        explicit_content_filter: RI(),
        roles: xI(kT),
        emojis: xI(SZ),
        features: xI(PI()),
        mfa_level: RI(),
        application_id: PI().nullable(),
        system_channel_id: PI().nullable(),
        system_channel_flags: RI(),
        rules_channel_id: PI().nullable(),
        joined_at: PI().optional().nullable(),
        large: XI().optional().nullable(),
        unavailable: XI().optional().nullable(),
        member_count: RI().optional().nullable(),
        voice_states: xI(BT).optional().nullable(),
        members: xI(VZ).optional().nullable(),
        channels: xI(GT).optional().nullable(),
        presences: xI(vT).optional().nullable(),
        max_presences: RI().optional().nullable(),
        max_members: RI().optional().nullable(),
        vanity_url_code: PI().nullable(),
        description: PI().nullable(),
        banner: PI().nullable(),
        premium_tier: RI(),
        premium_subscription_count: RI().optional().nullable(),
        preferred_locale: PI(),
        public_updates_channel_id: PI().nullable(),
        max_video_channel_users: RI().optional().nullable(),
        approximate_member_count: RI().optional().nullable(),
        approximate_presence_count: RI().optional().nullable()
      }), EI({
        id: PI(),
        guild_id: PI(),
        type: RI(),
        name: PI()
      })),
      nT = EI({
        id: PI(),
        filename: PI(),
        size: RI(),
        url: PI(),
        proxy_url: PI(),
        height: RI().optional().nullable(),
        width: RI().optional().nullable()
      }),
      hT = EI({
        text: PI(),
        icon_url: PI().optional().nullable(),
        proxy_icon_url: PI().optional().nullable()
      }),
      zT = EI({
        url: PI().optional().nullable(),
        proxy_url: PI().optional().nullable(),
        height: RI().optional().nullable(),
        width: RI().optional().nullable()
      }),
      FT = zT.omit({
        proxy_url: !0
      }),
      NT = EI({
        name: PI().optional().nullable(),
        url: PI().optional().nullable()
      }),
      gT = EI({
        name: PI().optional().nullable(),
        url: PI().optional().nullable(),
        icon_url: PI().optional().nullable(),
        proxy_icon_url: PI().optional().nullable()
      }),
      qT = EI({
        name: PI(),
        value: PI(),
        inline: XI()
      }),
      yT = EI({
        title: PI().optional().nullable(),
        type: PI().optional().nullable(),
        description: PI().optional().nullable(),
        url: PI().optional().nullable(),
        timestamp: PI().optional().nullable(),
        color: RI().optional().nullable(),
        footer: hT.optional().nullable(),
        image: zT.optional().nullable(),
        thumbnail: zT.optional().nullable(),
        video: FT.optional().nullable(),
        provider: NT.optional().nullable(),
        author: gT.optional().nullable(),
        fields: xI(qT).optional().nullable()
      }),
      UT = EI({
        count: RI(),
        me: XI(),
        emoji: SZ
      }),
      WT = EI({
        type: RI(),
        party_id: PI().optional().nullable()
      }),
      dT = EI({
        id: PI(),
        cover_image: PI().optional().nullable(),
        description: PI(),
        icon: PI().optional().nullable(),
        name: PI()
      }),
      CT = EI({
        message_id: PI().optional().nullable(),
        channel_id: PI().optional().nullable(),
        guild_id: PI().optional().nullable()
      }),
      QT = EI({
        id: PI(),
        channel_id: PI(),
        guild_id: PI().optional().nullable(),
        author: KZ.optional().nullable(),
        member: VZ.optional().nullable(),
        content: PI(),
        timestamp: PI(),
        edited_timestamp: PI().optional().nullable(),
        tts: XI(),
        mention_everyone: XI(),
        mentions: xI(KZ),
        mention_roles: xI(PI()),
        mention_channels: xI(cT),
        attachments: xI(nT),
        embeds: xI(yT),
        reactions: xI(UT).optional().nullable(),
        nonce: KI([PI(), RI()]).optional().nullable(),
        pinned: XI(),
        webhook_id: PI().optional().nullable(),
        type: RI(),
        activity: WT.optional().nullable(),
        application: dT.optional().nullable(),
        message_reference: CT.optional().nullable(),
        flags: RI().optional().nullable(),
        stickers: xI(AI()).optional().nullable(),
        referenced_message: AI().optional().nullable()
      }),
      sT = EI({
        id: PI(),
        name: PI()
      }),
      wT = EI({
        type: mZ({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: RI(),
        name: PI()
      }),
      OT = EI({
        type: mZ({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: XI(),
        threshold: RI(),
        shortcut: xI(wT),
        delay: RI()
      }),
      YT = EI({
        device_id: PI(),
        volume: RI(),
        available_devices: xI(sT)
      }),
      iT = (EI({
        type: mZ({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: PI(),
        vendor: EI({
          name: PI(),
          url: PI()
        }),
        model: EI({
          name: PI(),
          url: PI()
        }),
        related: xI(PI()),
        echo_cancellation: XI().optional().nullable(),
        noise_suppression: XI().optional().nullable(),
        automatic_gain_control: XI().optional().nullable(),
        hardware_mute: XI().optional().nullable()
      }), EI({
        id: PI(),
        name: PI(),
        type: mZ({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: EI({
          amount: RI(),
          currency: PI()
        }),
        application_id: PI(),
        flags: RI(),
        release_date: PI().nullable()
      })),
      pT = EI({
        id: PI(),
        sku_id: PI(),
        application_id: PI(),
        user_id: PI(),
        gift_code_flags: RI(),
        type: mZ({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: PI().optional().nullable(),
        branches: xI(PI()).optional().nullable(),
        starts_at: PI().optional().nullable(),
        ends_at: PI().optional().nullable(),
        parent_id: PI().optional().nullable(),
        consumed: XI().optional().nullable(),
        deleted: XI().optional().nullable(),
        gift_code_batch_id: PI().optional().nullable()
      }),
      aT = (mZ({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), mZ({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      HT = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      MT = (mZ(HT), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      jT = (mZ(MT), "ERROR");
    var PT;
    ! function(BB) {
      BB.READY = "READY", BB.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", BB.SPEAKING_START = "SPEAKING_START", BB.SPEAKING_STOP = "SPEAKING_STOP", BB.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", BB.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", BB.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", BB.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", BB.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", BB.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(PT || (PT = {}));
    const RT = DZ.extend({
        evt: kZ(PT),
        nonce: PI().nullable(),
        cmd: GZ(xZ),
        data: EI({}).passthrough()
      }),
      rT = DZ.extend({
        evt: GZ(jT),
        data: EI({
          code: RI(),
          message: PI().optional()
        }).passthrough(),
        cmd: kZ(EZ),
        nonce: PI().nullable()
      }),
      mT = RT.extend({
        evt: PI()
      }),
      XT = KI([RT, mT, rT]);
    const LT = {
      [PT.READY]: {
        payload: RT.extend({
          evt: GZ(PT.READY),
          data: EI({
            v: RI(),
            config: EI({
              cdn_host: PI().optional(),
              api_endpoint: PI(),
              environment: PI()
            }),
            user: EI({
              id: PI(),
              username: PI(),
              discriminator: PI(),
              avatar: PI().optional()
            }).optional()
          })
        })
      },
      [PT.VOICE_STATE_UPDATE]: {
        payload: RT.extend({
          evt: GZ(PT.VOICE_STATE_UPDATE),
          data: IT
        }),
        subscribeArgs: EI({
          channel_id: PI()
        })
      },
      [PT.SPEAKING_START]: {
        payload: RT.extend({
          evt: GZ(PT.SPEAKING_START),
          data: EI({
            lobby_id: PI().optional(),
            channel_id: PI().optional(),
            user_id: PI()
          })
        }),
        subscribeArgs: EI({
          lobby_id: PI().nullable().optional(),
          channel_id: PI().nullable().optional()
        })
      },
      [PT.SPEAKING_STOP]: {
        payload: RT.extend({
          evt: GZ(PT.SPEAKING_STOP),
          data: EI({
            lobby_id: PI().optional(),
            channel_id: PI().optional(),
            user_id: PI()
          })
        }),
        subscribeArgs: EI({
          lobby_id: PI().nullable().optional(),
          channel_id: PI().nullable().optional()
        })
      },
      [PT.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: RT.extend({
          evt: GZ(PT.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: EI({
            layout_mode: mZ(MT)
          })
        })
      },
      [PT.ORIENTATION_UPDATE]: {
        payload: RT.extend({
          evt: GZ(PT.ORIENTATION_UPDATE),
          data: EI({
            screen_orientation: mZ(HT),
            orientation: kZ(PZ)
          })
        })
      },
      [PT.CURRENT_USER_UPDATE]: {
        payload: RT.extend({
          evt: GZ(PT.CURRENT_USER_UPDATE),
          data: KZ
        })
      },
      [PT.ENTITLEMENT_CREATE]: {
        payload: RT.extend({
          evt: GZ(PT.ENTITLEMENT_CREATE),
          data: EI({
            entitlement: pT
          })
        })
      },
      [PT.THERMAL_STATE_UPDATE]: {
        payload: RT.extend({
          evt: GZ(PT.THERMAL_STATE_UPDATE),
          data: EI({
            thermal_state: aT
          })
        })
      },
      [PT.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: RT.extend({
          evt: GZ(PT.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: EI({
            participants: fZ.shape.participants
          })
        })
      }
    };
    const eT = EI({}).nullable(),
      uT = EI({
        code: PI()
      }),
      fT = EI({
        guilds: xI(EI({
          id: PI(),
          name: PI()
        }))
      }),
      lT = EI({
        id: PI(),
        name: PI(),
        icon_url: PI().optional(),
        members: xI(VZ)
      }),
      AT = EI({
        id: PI(),
        type: mZ(oT),
        guild_id: PI().optional().nullable(),
        name: PI().optional().nullable(),
        topic: PI().optional().nullable(),
        bitrate: RI().optional().nullable(),
        user_limit: RI().optional().nullable(),
        position: RI().optional().nullable(),
        voice_states: xI(IT),
        messages: xI(QT)
      }),
      tT = EI({
        channels: xI(GT)
      }),
      bT = (AT.nullable(), AT.nullable()),
      xT = AT.nullable(),
      ET = (EI({
        input: YT,
        output: YT,
        mode: OT,
        automatic_gain_control: XI(),
        echo_cancellation: XI(),
        noise_suppression: XI(),
        qos: XI(),
        silence_warning: XI(),
        deaf: XI(),
        mute: XI()
      }), EI({
        evt: PI()
      })),
      DT = EI({
        shortcut: wT
      }),
      KT = TT,
      VT = EI({
        skus: xI(iT)
      }),
      ST = EI({
        entitlements: xI(pT)
      }),
      BJ = xI(pT).nullable(),
      IJ = EI({
        use_interactive_pip: XI()
      }),
      ZJ = EI({
        locale: PI()
      }),
      TJ = EI({
        enabled: XI()
      }),
      JJ = EI({
        permissions: mI().or(PI())
      }),
      oJ = EI({
        iosKeyboardResizesView: hZ(XI())
      }),
      GJ = DZ.extend({
        cmd: kZ(EZ),
        evt: fI()
      });

    function vJ(BB) {
      let {
        cmd: IB,
        data: ZB
      } = BB;
      switch (IB) {
        case EZ.AUTHORIZE:
          return uT.parse(ZB);
        case EZ.CAPTURE_SHORTCUT:
          return DT.parse(ZB);
        case EZ.ENCOURAGE_HW_ACCELERATION:
          return TJ.parse(ZB);
        case EZ.GET_CHANNEL:
          return AT.parse(ZB);
        case EZ.GET_CHANNELS:
          return tT.parse(ZB);
        case EZ.GET_CHANNEL_PERMISSIONS:
          return JJ.parse(ZB);
        case EZ.GET_GUILD:
          return lT.parse(ZB);
        case EZ.GET_GUILDS:
          return fT.parse(ZB);
        case EZ.GET_PLATFORM_BEHAVIORS:
          return oJ.parse(ZB);
        case EZ.GET_CHANNEL:
          return AT.parse(ZB);
        case EZ.SELECT_TEXT_CHANNEL:
          return xT.parse(ZB);
        case EZ.SELECT_VOICE_CHANNEL:
          return bT.parse(ZB);
        case EZ.SET_ACTIVITY:
          return KT.parse(ZB);
        case EZ.GET_SKUS_EMBEDDED:
          return VT.parse(ZB);
        case EZ.GET_ENTITLEMENTS_EMBEDDED:
          return ST.parse(ZB);
        case EZ.SET_CONFIG:
          return IJ.parse(ZB);
        case EZ.START_PURCHASE:
          return BJ.parse(ZB);
        case EZ.SUBSCRIBE:
        case EZ.UNSUBSCRIBE:
          return ET.parse(ZB);
        case EZ.USER_SETTINGS_GET_LOCALE:
          return ZJ.parse(ZB);
        case EZ.OPEN_EXTERNAL_LINK:
        case EZ.SET_ORIENTATION_LOCK_STATE:
        case EZ.SET_CERTIFIED_DEVICES:
        case EZ.SEND_ANALYTICS_EVENT:
        case EZ.OPEN_INVITE_DIALOG:
        case EZ.CAPTURE_LOG:
        case EZ.GET_SKUS:
        case EZ.GET_ENTITLEMENTS:
          return eT.parse(ZB);
        case EZ.AUTHENTICATE:
        case EZ.INITIATE_IMAGE_UPLOAD:
        case EZ.OPEN_SHARE_MOMENT_DIALOG:
        case EZ.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: BB
          } = bZ[IB];
          return BB.parse(ZB);
        default:
          ! function(BB, IB) {
            throw IB
          }(0, new Error(`Unrecognized command ${IB}`))
      }
    }
    EI({
      frame_id: PI(),
      platform: kZ(RZ).optional().nullable()
    }), EI({
      v: GZ(1),
      encoding: GZ("json").optional(),
      client_id: PI(),
      frame_id: PI()
    });
    const kJ = EI({
        code: RI(),
        message: PI().optional()
      }),
      cJ = EI({
        evt: PI().nullable(),
        nonce: PI().nullable(),
        data: AI().nullable(),
        cmd: PI()
      }).passthrough();

    function nJ(BB) {
      const IB = cJ.parse(BB);
      return null != IB.evt ? IB.evt === jT ? rT.parse(IB) : function(BB) {
        const IB = BB.evt;
        if (!(IB in PT)) throw new Error(`Unrecognized event type ${BB.evt}`);
        return LT[IB].payload.parse(BB)
      }(XT.parse(IB)) : function(BB) {
        return Object.assign(Object.assign({}, BB), {
          data: vJ(BB)
        })
      }(GJ.passthrough().parse(IB))
    }

    function hJ(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const JB = DZ.extend({
        cmd: GZ(IB),
        data: ZB
      });
      return async ZB => {
        const oB = await BB({
          cmd: IB,
          args: ZB,
          transfer: TB(ZB)
        });
        return JB.parse(oB).data
      }
    }

    function zJ(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const ZB = bZ[BB].response,
        TB = DZ.extend({
          cmd: GZ(BB),
          data: ZB
        });
      return ZB => async JB => {
        const oB = await ZB({
          cmd: BB,
          args: JB,
          transfer: IB(JB)
        });
        return TB.parse(oB).data
      }
    }
    const FJ = zJ(lZ.AUTHENTICATE),
      NJ = BB => hJ(BB, EZ.AUTHORIZE, uT),
      gJ = BB => hJ(BB, EZ.CAPTURE_LOG, eT),
      qJ = BB => hJ(BB, EZ.ENCOURAGE_HW_ACCELERATION, TJ),
      yJ = BB => hJ(BB, EZ.GET_ENTITLEMENTS_EMBEDDED, ST),
      UJ = BB => hJ(BB, EZ.GET_SKUS_EMBEDDED, VT),
      WJ = BB => hJ(BB, EZ.GET_CHANNEL_PERMISSIONS, JJ),
      dJ = BB => hJ(BB, EZ.GET_PLATFORM_BEHAVIORS, oJ),
      CJ = BB => hJ(BB, EZ.OPEN_EXTERNAL_LINK, eT),
      QJ = BB => hJ(BB, EZ.OPEN_INVITE_DIALOG, eT),
      sJ = zJ(lZ.OPEN_SHARE_MOMENT_DIALOG);
    TT.TF({
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
      type: TT.shape.type.optional(),
      instance: TT.shape.instance.optional()
    }).nullable();
    const wJ = BB => hJ(BB, EZ.SET_ACTIVITY, KT),
      OJ = BB => hJ(BB, EZ.SET_CONFIG, IJ);
    const YJ = BB => ({
        lock_state: BB.lock_state,
        picture_in_picture_lock_state: BB.picture_in_picture_lock_state
      }),
      iJ = BB => function(BB) {
        let {
          sendCommand: IB,
          cmd: ZB,
          response: TB,
          fallbackTransform: JB,
          transferTransform: oB = () => {}
        } = BB;
        const GB = DZ.extend({
          cmd: GZ(ZB),
          data: TB
        });
        return async BB => {
          try {
            const TB = await IB({
              cmd: ZB,
              args: BB,
              transfer: oB(BB)
            });
            return GB.parse(TB).data
          } catch (TB) {
            if (TB.code === jZ.INVALID_PAYLOAD) {
              const TB = JB(BB),
                vB = await IB({
                  cmd: ZB,
                  args: TB,
                  transfer: oB(TB)
                });
              return GB.parse(vB).data
            }
            throw TB
          }
        }
      }({
        sendCommand: BB,
        cmd: EZ.SET_ORIENTATION_LOCK_STATE,
        response: eT,
        fallbackTransform: YJ
      }),
      pJ = BB => hJ(BB, EZ.START_PURCHASE, BJ),
      aJ = BB => hJ(BB, EZ.USER_SETTINGS_GET_LOCALE, ZJ),
      HJ = zJ(lZ.INITIATE_IMAGE_UPLOAD),
      MJ = BB => hJ(BB, EZ.GET_CHANNEL, AT),
      jJ = zJ(lZ.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var PJ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function RJ(BB) {
      return "string" === typeof BB && PJ.test(BB)
    }
    for (var rJ = [], mJ = 0; mJ < 256; ++mJ) rJ.push((mJ + 256).toString(16).substr(1));

    function XJ(BB) {
      var IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZB = (rJ[BB[IB + 0]] + rJ[BB[IB + 1]] + rJ[BB[IB + 2]] + rJ[BB[IB + 3]] + "-" + rJ[BB[IB + 4]] + rJ[BB[IB + 5]] + "-" + rJ[BB[IB + 6]] + rJ[BB[IB + 7]] + "-" + rJ[BB[IB + 8]] + rJ[BB[IB + 9]] + "-" + rJ[BB[IB + 10]] + rJ[BB[IB + 11]] + rJ[BB[IB + 12]] + rJ[BB[IB + 13]] + rJ[BB[IB + 14]] + rJ[BB[IB + 15]]).toLowerCase();
      if (!RJ(ZB)) throw TypeError("Stringified UUID is invalid");
      return ZB
    }
    var LJ;

    function eJ(BB, IB, ZB) {
      function TB(BB, TB, JB, oB) {
        if ("string" === typeof BB && (BB = function(BB) {
            BB = unescape(encodeURIComponent(BB));
            for (var IB = [], ZB = 0; ZB < BB.length; ++ZB) IB.push(BB.charCodeAt(ZB));
            return IB
          }(BB)), "string" === typeof TB && (TB = function(BB) {
            if (!RJ(BB)) throw TypeError("Invalid UUID");
            var IB, ZB = new Uint8Array(16);
            return ZB[0] = (IB = parseInt(BB.slice(0, 8), 16)) >>> 24, ZB[1] = IB >>> 16 & 255, ZB[2] = IB >>> 8 & 255, ZB[3] = 255 & IB, ZB[4] = (IB = parseInt(BB.slice(9, 13), 16)) >>> 8, ZB[5] = 255 & IB, ZB[6] = (IB = parseInt(BB.slice(14, 18), 16)) >>> 8, ZB[7] = 255 & IB, ZB[8] = (IB = parseInt(BB.slice(19, 23), 16)) >>> 8, ZB[9] = 255 & IB, ZB[10] = (IB = parseInt(BB.slice(24, 36), 16)) / 1099511627776 & 255, ZB[11] = IB / 4294967296 & 255, ZB[12] = IB >>> 24 & 255, ZB[13] = IB >>> 16 & 255, ZB[14] = IB >>> 8 & 255, ZB[15] = 255 & IB, ZB
          }(TB)), 16 !== TB.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var GB = new Uint8Array(16 + BB.length);
        if (GB.set(TB), GB.set(BB, TB.length), (GB = ZB(GB))[6] = 15 & GB[6] | IB, GB[8] = 63 & GB[8] | 128, JB) {
          oB = oB || 0;
          for (var vB = 0; vB < 16; ++vB) JB[oB + vB] = GB[vB];
          return JB
        }
        return XJ(GB)
      }
      try {
        TB.name = BB
      } catch (JB) {}
      return TB.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", TB.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", TB
    }

    function uJ(BB) {
      return 14 + (BB + 64 >>> 9 << 4) + 1
    }

    function fJ(BB, IB) {
      var ZB = (65535 & BB) + (65535 & IB);
      return (BB >> 16) + (IB >> 16) + (ZB >> 16) << 16 | 65535 & ZB
    }

    function lJ(BB, IB, ZB, TB, JB, oB) {
      return fJ((GB = fJ(fJ(IB, BB), fJ(TB, oB))) << (vB = JB) | GB >>> 32 - vB, ZB);
      var GB, vB
    }

    function AJ(BB, IB, ZB, TB, JB, oB, GB) {
      return lJ(IB & ZB | ~IB & TB, BB, IB, JB, oB, GB)
    }

    function tJ(BB, IB, ZB, TB, JB, oB, GB) {
      return lJ(IB & TB | ZB & ~TB, BB, IB, JB, oB, GB)
    }

    function bJ(BB, IB, ZB, TB, JB, oB, GB) {
      return lJ(IB ^ ZB ^ TB, BB, IB, JB, oB, GB)
    }

    function xJ(BB, IB, ZB, TB, JB, oB, GB) {
      return lJ(ZB ^ (IB | ~TB), BB, IB, JB, oB, GB)
    }
    eJ("v3", 48, (function(BB) {
      if ("string" === typeof BB) {
        var IB = unescape(encodeURIComponent(BB));
        BB = new Uint8Array(IB.length);
        for (var ZB = 0; ZB < IB.length; ++ZB) BB[ZB] = IB.charCodeAt(ZB)
      }
      return function(BB) {
        for (var IB = [], ZB = 32 * BB.length, TB = "0123456789abcdef", JB = 0; JB < ZB; JB += 8) {
          var oB = BB[JB >> 5] >>> JB % 32 & 255,
            GB = parseInt(TB.charAt(oB >>> 4 & 15) + TB.charAt(15 & oB), 16);
          IB.push(GB)
        }
        return IB
      }(function(BB, IB) {
        BB[IB >> 5] |= 128 << IB % 32, BB[uJ(IB) - 1] = IB;
        for (var ZB = 1732584193, TB = -271733879, JB = -1732584194, oB = 271733878, GB = 0; GB < BB.length; GB += 16) {
          var vB = ZB,
            kB = TB,
            cB = JB,
            nB = oB;
          ZB = AJ(ZB, TB, JB, oB, BB[GB], 7, -680876936), oB = AJ(oB, ZB, TB, JB, BB[GB + 1], 12, -389564586), JB = AJ(JB, oB, ZB, TB, BB[GB + 2], 17, 606105819), TB = AJ(TB, JB, oB, ZB, BB[GB + 3], 22, -1044525330), ZB = AJ(ZB, TB, JB, oB, BB[GB + 4], 7, -176418897), oB = AJ(oB, ZB, TB, JB, BB[GB + 5], 12, 1200080426), JB = AJ(JB, oB, ZB, TB, BB[GB + 6], 17, -1473231341), TB = AJ(TB, JB, oB, ZB, BB[GB + 7], 22, -45705983), ZB = AJ(ZB, TB, JB, oB, BB[GB + 8], 7, 1770035416), oB = AJ(oB, ZB, TB, JB, BB[GB + 9], 12, -1958414417), JB = AJ(JB, oB, ZB, TB, BB[GB + 10], 17, -42063), TB = AJ(TB, JB, oB, ZB, BB[GB + 11], 22, -1990404162), ZB = AJ(ZB, TB, JB, oB, BB[GB + 12], 7, 1804603682), oB = AJ(oB, ZB, TB, JB, BB[GB + 13], 12, -40341101), JB = AJ(JB, oB, ZB, TB, BB[GB + 14], 17, -1502002290), ZB = tJ(ZB, TB = AJ(TB, JB, oB, ZB, BB[GB + 15], 22, 1236535329), JB, oB, BB[GB + 1], 5, -165796510), oB = tJ(oB, ZB, TB, JB, BB[GB + 6], 9, -1069501632), JB = tJ(JB, oB, ZB, TB, BB[GB + 11], 14, 643717713), TB = tJ(TB, JB, oB, ZB, BB[GB], 20, -373897302), ZB = tJ(ZB, TB, JB, oB, BB[GB + 5], 5, -701558691), oB = tJ(oB, ZB, TB, JB, BB[GB + 10], 9, 38016083), JB = tJ(JB, oB, ZB, TB, BB[GB + 15], 14, -660478335), TB = tJ(TB, JB, oB, ZB, BB[GB + 4], 20, -405537848), ZB = tJ(ZB, TB, JB, oB, BB[GB + 9], 5, 568446438), oB = tJ(oB, ZB, TB, JB, BB[GB + 14], 9, -1019803690), JB = tJ(JB, oB, ZB, TB, BB[GB + 3], 14, -187363961), TB = tJ(TB, JB, oB, ZB, BB[GB + 8], 20, 1163531501), ZB = tJ(ZB, TB, JB, oB, BB[GB + 13], 5, -1444681467), oB = tJ(oB, ZB, TB, JB, BB[GB + 2], 9, -51403784), JB = tJ(JB, oB, ZB, TB, BB[GB + 7], 14, 1735328473), ZB = bJ(ZB, TB = tJ(TB, JB, oB, ZB, BB[GB + 12], 20, -1926607734), JB, oB, BB[GB + 5], 4, -378558), oB = bJ(oB, ZB, TB, JB, BB[GB + 8], 11, -2022574463), JB = bJ(JB, oB, ZB, TB, BB[GB + 11], 16, 1839030562), TB = bJ(TB, JB, oB, ZB, BB[GB + 14], 23, -35309556), ZB = bJ(ZB, TB, JB, oB, BB[GB + 1], 4, -1530992060), oB = bJ(oB, ZB, TB, JB, BB[GB + 4], 11, 1272893353), JB = bJ(JB, oB, ZB, TB, BB[GB + 7], 16, -155497632), TB = bJ(TB, JB, oB, ZB, BB[GB + 10], 23, -1094730640), ZB = bJ(ZB, TB, JB, oB, BB[GB + 13], 4, 681279174), oB = bJ(oB, ZB, TB, JB, BB[GB], 11, -358537222), JB = bJ(JB, oB, ZB, TB, BB[GB + 3], 16, -722521979), TB = bJ(TB, JB, oB, ZB, BB[GB + 6], 23, 76029189), ZB = bJ(ZB, TB, JB, oB, BB[GB + 9], 4, -640364487), oB = bJ(oB, ZB, TB, JB, BB[GB + 12], 11, -421815835), JB = bJ(JB, oB, ZB, TB, BB[GB + 15], 16, 530742520), ZB = xJ(ZB, TB = bJ(TB, JB, oB, ZB, BB[GB + 2], 23, -995338651), JB, oB, BB[GB], 6, -198630844), oB = xJ(oB, ZB, TB, JB, BB[GB + 7], 10, 1126891415), JB = xJ(JB, oB, ZB, TB, BB[GB + 14], 15, -1416354905), TB = xJ(TB, JB, oB, ZB, BB[GB + 5], 21, -57434055), ZB = xJ(ZB, TB, JB, oB, BB[GB + 12], 6, 1700485571), oB = xJ(oB, ZB, TB, JB, BB[GB + 3], 10, -1894986606), JB = xJ(JB, oB, ZB, TB, BB[GB + 10], 15, -1051523), TB = xJ(TB, JB, oB, ZB, BB[GB + 1], 21, -2054922799), ZB = xJ(ZB, TB, JB, oB, BB[GB + 8], 6, 1873313359), oB = xJ(oB, ZB, TB, JB, BB[GB + 15], 10, -30611744), JB = xJ(JB, oB, ZB, TB, BB[GB + 6], 15, -1560198380), TB = xJ(TB, JB, oB, ZB, BB[GB + 13], 21, 1309151649), ZB = xJ(ZB, TB, JB, oB, BB[GB + 4], 6, -145523070), oB = xJ(oB, ZB, TB, JB, BB[GB + 11], 10, -1120210379), JB = xJ(JB, oB, ZB, TB, BB[GB + 2], 15, 718787259), TB = xJ(TB, JB, oB, ZB, BB[GB + 9], 21, -343485551), ZB = fJ(ZB, vB), TB = fJ(TB, kB), JB = fJ(JB, cB), oB = fJ(oB, nB)
        }
        return [ZB, TB, JB, oB]
      }(function(BB) {
        if (0 === BB.length) return [];
        for (var IB = 8 * BB.length, ZB = new Uint32Array(uJ(IB)), TB = 0; TB < IB; TB += 8) ZB[TB >> 5] |= (255 & BB[TB / 8]) << TB % 32;
        return ZB
      }(BB), 8 * BB.length))
    }));
    var EJ = new Uint8Array(16);

    function DJ() {
      if (!LJ && !(LJ = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return LJ(EJ)
    }

    function KJ(BB, IB, ZB) {
      var TB = (BB = BB || {}).random || (BB.rng || DJ)();
      if (TB[6] = 15 & TB[6] | 64, TB[8] = 63 & TB[8] | 128, IB) {
        ZB = ZB || 0;
        for (var JB = 0; JB < 16; ++JB) IB[ZB + JB] = TB[JB];
        return IB
      }
      return XJ(TB)
    }

    function VJ(BB, IB, ZB, TB) {
      switch (BB) {
        case 0:
          return IB & ZB ^ ~IB & TB;
        case 1:
        case 3:
          return IB ^ ZB ^ TB;
        case 2:
          return IB & ZB ^ IB & TB ^ ZB & TB
      }
    }

    function SJ(BB, IB) {
      return BB << IB | BB >>> 32 - IB
    }
    eJ("v5", 80, (function(BB) {
      var IB = [1518500249, 1859775393, 2400959708, 3395469782],
        ZB = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof BB) {
        var TB = unescape(encodeURIComponent(BB));
        BB = [];
        for (var JB = 0; JB < TB.length; ++JB) BB.push(TB.charCodeAt(JB))
      } else Array.isArray(BB) || (BB = Array.prototype.slice.call(BB));
      BB.push(128);
      for (var oB = BB.length / 4 + 2, GB = Math.ceil(oB / 16), vB = new Array(GB), kB = 0; kB < GB; ++kB) {
        for (var cB = new Uint32Array(16), nB = 0; nB < 16; ++nB) cB[nB] = BB[64 * kB + 4 * nB] << 24 | BB[64 * kB + 4 * nB + 1] << 16 | BB[64 * kB + 4 * nB + 2] << 8 | BB[64 * kB + 4 * nB + 3];
        vB[kB] = cB
      }
      vB[GB - 1][14] = 8 * (BB.length - 1) / Math.pow(2, 32), vB[GB - 1][14] = Math.floor(vB[GB - 1][14]), vB[GB - 1][15] = 8 * (BB.length - 1) & 4294967295;
      for (var hB = 0; hB < GB; ++hB) {
        for (var zB = new Uint32Array(80), FB = 0; FB < 16; ++FB) zB[FB] = vB[hB][FB];
        for (var NB = 16; NB < 80; ++NB) zB[NB] = SJ(zB[NB - 3] ^ zB[NB - 8] ^ zB[NB - 14] ^ zB[NB - 16], 1);
        for (var gB = ZB[0], qB = ZB[1], yB = ZB[2], UB = ZB[3], WB = ZB[4], dB = 0; dB < 80; ++dB) {
          var CB = Math.floor(dB / 20),
            QB = SJ(gB, 5) + VJ(CB, qB, yB, UB) + WB + IB[CB] + zB[dB] >>> 0;
          WB = UB, UB = yB, yB = SJ(qB, 30) >>> 0, qB = gB, gB = QB
        }
        ZB[0] = ZB[0] + gB >>> 0, ZB[1] = ZB[1] + qB >>> 0, ZB[2] = ZB[2] + yB >>> 0, ZB[3] = ZB[3] + UB >>> 0, ZB[4] = ZB[4] + WB >>> 0
      }
      return [ZB[0] >> 24 & 255, ZB[0] >> 16 & 255, ZB[0] >> 8 & 255, 255 & ZB[0], ZB[1] >> 24 & 255, ZB[1] >> 16 & 255, ZB[1] >> 8 & 255, 255 & ZB[1], ZB[2] >> 24 & 255, ZB[2] >> 16 & 255, ZB[2] >> 8 & 255, 255 & ZB[2], ZB[3] >> 24 & 255, ZB[3] >> 16 & 255, ZB[3] >> 8 & 255, 255 & ZB[3], ZB[4] >> 24 & 255, ZB[4] >> 16 & 255, ZB[4] >> 8 & 255, 255 & ZB[4]]
    }));
    class Bo extends Error {
      constructor(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(IB), this.code = BB, this.message = IB, this.name = "Discord SDK Error"
      }
    }
    const Io = ["log", "warn", "debug", "info", "error"];
    var Zo;
    ! function(BB) {
      BB[BB.HANDSHAKE = 0] = "HANDSHAKE", BB[BB.FRAME = 1] = "FRAME", BB[BB.CLOSE = 2] = "CLOSE", BB[BB.HELLO = 3] = "HELLO"
    }(Zo || (Zo = {}));
    const To = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class Jo {
      getTransfer(BB) {
        var IB;
        switch (BB.cmd) {
          case EZ.SUBSCRIBE:
          case EZ.UNSUBSCRIBE:
            return;
          default:
            return null !== (IB = BB.transfer) && void 0 !== IB ? IB : void 0
        }
      }
      constructor(BB, IB) {
        var ZB;
        if (this.eventBus = new cB, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = BB => {
            var IB;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const ZB = KJ();
            null === (IB = this.source) || void 0 === IB || IB.postMessage([Zo.FRAME, Object.assign(Object.assign({}, BB), {
              nonce: ZB
            })], this.sourceOrigin, this.getTransfer(BB));
            return new Promise(((BB, IB) => {
              this.pendingCommands.set(ZB, {
                resolve: BB,
                reject: IB
              })
            }))
          }, this.commands = (ZB = this.sendCommand, {
            authenticate: FJ(ZB),
            authorize: NJ(ZB),
            captureLog: gJ(ZB),
            encourageHardwareAcceleration: qJ(ZB),
            getChannel: MJ(ZB),
            getChannelPermissions: WJ(ZB),
            getEntitlements: yJ(ZB),
            getPlatformBehaviors: dJ(ZB),
            getSkus: UJ(ZB),
            openExternalLink: CJ(ZB),
            openInviteDialog: QJ(ZB),
            openShareMomentDialog: sJ(ZB),
            setActivity: wJ(ZB),
            setConfig: OJ(ZB),
            setOrientationLockState: iJ(ZB),
            startPurchase: pJ(ZB),
            userSettingsGetLocale: aJ(ZB),
            initiateImageUpload: HJ(ZB),
            getInstanceConnectedParticipants: jJ(ZB)
          }), this.handleMessage = BB => {
            if (!To.has(BB.origin)) return;
            const IB = BB.data;
            if (!Array.isArray(IB)) return;
            const [ZB, TB] = IB;
            switch (ZB) {
              case Zo.HELLO:
                return;
              case Zo.CLOSE:
                return this.handleClose(TB);
              case Zo.HANDSHAKE:
                return this.handleHandshake();
              case Zo.FRAME:
                return this.handleFrame(TB);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = BB, this.configuration = null !== IB && void 0 !== IB ? IB : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = RZ.DESKTOP, this.guildId = null, void(this.channelId = null);
        const TB = new URLSearchParams(this._getSearch()),
          JB = TB.get("frame_id");
        if (!JB) throw new Error("frame_id query param is not defined");
        this.frameId = JB;
        const oB = TB.get("instance_id");
        if (!oB) throw new Error("instance_id query param is not defined");
        this.instanceId = oB;
        const GB = TB.get("platform");
        if (!GB) throw new Error("platform query param is not defined");
        if (GB !== RZ.DESKTOP && GB !== RZ.MOBILE) throw new Error(`Invalid query param "platform" of "${GB}". Valid values are "${RZ.DESKTOP}" or "${RZ.MOBILE}"`);
        this.platform = GB, this.guildId = TB.get("guild_id"), this.channelId = TB.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var BB;
          return [null !== (BB = window.parent.opener) && void 0 !== BB ? BB : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(BB, IB) {
        var ZB;
        window.removeEventListener("message", this.handleMessage);
        const TB = KJ();
        null === (ZB = this.source) || void 0 === ZB || ZB.postMessage([Zo.CLOSE, {
          code: BB,
          message: IB,
          nonce: TB
        }], this.sourceOrigin)
      }
      async subscribe(BB, IB) {
        for (var ZB = arguments.length, TB = new Array(ZB > 2 ? ZB - 2 : 0), JB = 2; JB < ZB; JB++) TB[JB - 2] = arguments[JB];
        const [oB] = TB, GB = this.eventBus.listenerCount(BB), vB = this.eventBus.on(BB, IB);
        return Object.values(PT).includes(BB) && BB !== PT.READY && 0 === GB && await this.sendCommand({
          cmd: EZ.SUBSCRIBE,
          args: oB,
          evt: BB
        }), vB
      }
      async unsubscribe(BB, IB) {
        for (var ZB = arguments.length, TB = new Array(ZB > 2 ? ZB - 2 : 0), JB = 2; JB < ZB; JB++) TB[JB - 2] = arguments[JB];
        const [oB] = TB;
        return BB !== PT.READY && 1 === this.eventBus.listenerCount(BB) && await this.sendCommand({
          cmd: EZ.UNSUBSCRIBE,
          evt: BB,
          args: oB
        }), this.eventBus.off(BB, IB)
      }
      async ready() {
        this.isReady || await new Promise((BB => {
          this.eventBus.once(PT.READY, BB)
        }))
      }
      handshake() {
        var BB;
        null === (BB = this.source) || void 0 === BB || BB.postMessage([Zo.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(PT.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const BB = (BB, IB) => {
          this.commands.captureLog({
            level: BB,
            message: IB
          })
        };
        Io.forEach((IB => {
          ! function(BB, IB, ZB) {
            const TB = BB[IB],
              JB = BB;
            TB && (BB[IB] = function() {
              const BB = [].slice.call(arguments),
                oB = "" + BB.join(" ");
              ZB(IB, oB), TB.apply(JB, BB)
            })
          }(console, IB, BB)
        }))
      }
      handleClose(BB) {
        kJ.parse(BB)
      }
      handleHandshake() {}
      handleFrame(BB) {
        var IB, ZB;
        let TB;
        try {
          TB = nJ(BB)
        } catch (JB) {
          return console.error("Failed to parse", BB), void console.error(JB)
        }
        if ("DISPATCH" === TB.cmd) this.eventBus.emit(TB.evt, TB.data);
        else {
          if (TB.evt === jT) {
            if (null != TB.nonce) return null === (IB = this.pendingCommands.get(TB.nonce)) || void 0 === IB || IB.reject(TB.data), void this.pendingCommands.delete(TB.nonce);
            this.eventBus.emit("error", new Bo(TB.data.code, TB.data.message))
          }
          if (null == TB.nonce) return void console.error("Missing nonce", BB);
          null === (ZB = this.pendingCommands.get(TB.nonce)) || void 0 === ZB || ZB.resolve(TB), this.pendingCommands.delete(TB.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var oo, Go = 1e9,
      vo = !0,
      ko = "[DecimalError] ",
      co = ko + "Invalid argument: ",
      no = ko + "Exponent out of range: ",
      ho = Math.floor,
      zo = Math.pow,
      Fo = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      No = 1e7,
      go = 9007199254740991,
      qo = ho(1286742750677284.5),
      yo = {};

    function Uo(BB, IB) {
      var ZB, TB, JB, oB, GB, vB, kB, cB, nB = BB.constructor,
        hB = nB.precision;
      if (!BB.s || !IB.s) return IB.s || (IB = new nB(BB)), vo ? ao(IB, hB) : IB;
      if (kB = BB.d, cB = IB.d, GB = BB.e, JB = IB.e, kB = kB.slice(), oB = GB - JB) {
        for (oB < 0 ? (TB = kB, oB = -oB, vB = cB.length) : (TB = cB, JB = GB, vB = kB.length), oB > (vB = (GB = Math.ceil(hB / 7)) > vB ? GB + 1 : vB + 1) && (oB = vB, TB.length = 1), TB.reverse(); oB--;) TB.push(0);
        TB.reverse()
      }
      for ((vB = kB.length) - (oB = cB.length) < 0 && (oB = vB, TB = cB, cB = kB, kB = TB), ZB = 0; oB;) ZB = (kB[--oB] = kB[oB] + cB[oB] + ZB) / No | 0, kB[oB] %= No;
      for (ZB && (kB.unshift(ZB), ++JB), vB = kB.length; 0 == kB[--vB];) kB.pop();
      return IB.d = kB, IB.e = JB, vo ? ao(IB, hB) : IB
    }

    function Wo(BB, IB, ZB) {
      if (BB !== ~~BB || BB < IB || BB > ZB) throw Error(co + BB)
    }

    function Co(BB) {
      var IB, ZB, TB, JB = BB.length - 1,
        oB = "",
        GB = BB[0];
      if (JB > 0) {
        for (oB += GB, IB = 1; IB < JB; IB++)(ZB = 7 - (TB = BB[IB] + "").length) && (oB += Yo(ZB)), oB += TB;
        (ZB = 7 - (TB = (GB = BB[IB]) + "").length) && (oB += Yo(ZB))
      } else if (0 === GB) return "0";
      for (; GB % 10 === 0;) GB /= 10;
      return oB + GB
    }
    yo.absoluteValue = yo.abs = function() {
      var BB = new this.constructor(this);
      return BB.s && (BB.s = 1), BB
    }, yo.comparedTo = yo.cmp = function(BB) {
      var IB, ZB, TB, JB, oB = this;
      if (BB = new oB.constructor(BB), oB.s !== BB.s) return oB.s || -BB.s;
      if (oB.e !== BB.e) return oB.e > BB.e ^ oB.s < 0 ? 1 : -1;
      for (IB = 0, ZB = (TB = oB.d.length) < (JB = BB.d.length) ? TB : JB; IB < ZB; ++IB)
        if (oB.d[IB] !== BB.d[IB]) return oB.d[IB] > BB.d[IB] ^ oB.s < 0 ? 1 : -1;
      return TB === JB ? 0 : TB > JB ^ oB.s < 0 ? 1 : -1
    }, yo.decimalPlaces = yo.dp = function() {
      var BB = this,
        IB = BB.d.length - 1,
        ZB = 7 * (IB - BB.e);
      if (IB = BB.d[IB])
        for (; IB % 10 == 0; IB /= 10) ZB--;
      return ZB < 0 ? 0 : ZB
    }, yo.dividedBy = yo.div = function(BB) {
      return Qo(this, new this.constructor(BB))
    }, yo.dividedToIntegerBy = yo.idiv = function(BB) {
      var IB = this.constructor;
      return ao(Qo(this, new IB(BB), 0, 1), IB.precision)
    }, yo.equals = yo.eq = function(BB) {
      return !this.cmp(BB)
    }, yo.exponent = function() {
      return wo(this)
    }, yo.greaterThan = yo.gt = function(BB) {
      return this.cmp(BB) > 0
    }, yo.greaterThanOrEqualTo = yo.gte = function(BB) {
      return this.cmp(BB) >= 0
    }, yo.isInteger = yo.isint = function() {
      return this.e > this.d.length - 2
    }, yo.isNegative = yo.isneg = function() {
      return this.s < 0
    }, yo.isPositive = yo.ispos = function() {
      return this.s > 0
    }, yo.isZero = function() {
      return 0 === this.s
    }, yo.lessThan = yo.lt = function(BB) {
      return this.cmp(BB) < 0
    }, yo.lessThanOrEqualTo = yo.lte = function(BB) {
      return this.cmp(BB) < 1
    }, yo.logarithm = yo.log = function(BB) {
      var IB, ZB = this,
        TB = ZB.constructor,
        JB = TB.precision,
        oB = JB + 5;
      if (void 0 === BB) BB = new TB(10);
      else if ((BB = new TB(BB)).s < 1 || BB.eq(oo)) throw Error(ko + "NaN");
      if (ZB.s < 1) throw Error(ko + (ZB.s ? "NaN" : "-Infinity"));
      return ZB.eq(oo) ? new TB(0) : (vo = !1, IB = Qo(io(ZB, oB), io(BB, oB), oB), vo = !0, ao(IB, JB))
    }, yo.minus = yo.sub = function(BB) {
      var IB = this;
      return BB = new IB.constructor(BB), IB.s == BB.s ? Ho(IB, BB) : Uo(IB, (BB.s = -BB.s, BB))
    }, yo.modulo = yo.mod = function(BB) {
      var IB, ZB = this,
        TB = ZB.constructor,
        JB = TB.precision;
      if (!(BB = new TB(BB)).s) throw Error(ko + "NaN");
      return ZB.s ? (vo = !1, IB = Qo(ZB, BB, 0, 1).times(BB), vo = !0, ZB.minus(IB)) : ao(new TB(ZB), JB)
    }, yo.naturalExponential = yo.exp = function() {
      return so(this)
    }, yo.naturalLogarithm = yo.ln = function() {
      return io(this)
    }, yo.negated = yo.neg = function() {
      var BB = new this.constructor(this);
      return BB.s = -BB.s || 0, BB
    }, yo.plus = yo.add = function(BB) {
      var IB = this;
      return BB = new IB.constructor(BB), IB.s == BB.s ? Uo(IB, BB) : Ho(IB, (BB.s = -BB.s, BB))
    }, yo.precision = yo.sd = function(BB) {
      var IB, ZB, TB, JB = this;
      if (void 0 !== BB && BB !== !!BB && 1 !== BB && 0 !== BB) throw Error(co + BB);
      if (IB = wo(JB) + 1, ZB = 7 * (TB = JB.d.length - 1) + 1, TB = JB.d[TB]) {
        for (; TB % 10 == 0; TB /= 10) ZB--;
        for (TB = JB.d[0]; TB >= 10; TB /= 10) ZB++
      }
      return BB && IB > ZB ? IB : ZB
    }, yo.squareRoot = yo.sqrt = function() {
      var BB, IB, ZB, TB, JB, oB, GB, vB = this,
        kB = vB.constructor;
      if (vB.s < 1) {
        if (!vB.s) return new kB(0);
        throw Error(ko + "NaN")
      }
      for (BB = wo(vB), vo = !1, 0 == (JB = Math.sqrt(+vB)) || JB == 1 / 0 ? (((IB = Co(vB.d)).length + BB) % 2 == 0 && (IB += "0"), JB = Math.sqrt(IB), BB = ho((BB + 1) / 2) - (BB < 0 || BB % 2), TB = new kB(IB = JB == 1 / 0 ? "1e" + BB : (IB = JB.toExponential()).slice(0, IB.indexOf("e") + 1) + BB)) : TB = new kB(JB.toString()), JB = GB = (ZB = kB.precision) + 3;;)
        if (TB = (oB = TB).plus(Qo(vB, oB, GB + 2)).times(.5), Co(oB.d).slice(0, GB) === (IB = Co(TB.d)).slice(0, GB)) {
          if (IB = IB.slice(GB - 3, GB + 1), JB == GB && "4999" == IB) {
            if (ao(oB, ZB + 1, 0), oB.times(oB).eq(vB)) {
              TB = oB;
              break
            }
          } else if ("9999" != IB) break;
          GB += 4
        } return vo = !0, ao(TB, ZB)
    }, yo.times = yo.mul = function(BB) {
      var IB, ZB, TB, JB, oB, GB, vB, kB, cB, nB = this,
        hB = nB.constructor,
        zB = nB.d,
        FB = (BB = new hB(BB)).d;
      if (!nB.s || !BB.s) return new hB(0);
      for (BB.s *= nB.s, ZB = nB.e + BB.e, (kB = zB.length) < (cB = FB.length) && (oB = zB, zB = FB, FB = oB, GB = kB, kB = cB, cB = GB), oB = [], TB = GB = kB + cB; TB--;) oB.push(0);
      for (TB = cB; --TB >= 0;) {
        for (IB = 0, JB = kB + TB; JB > TB;) vB = oB[JB] + FB[TB] * zB[JB - TB - 1] + IB, oB[JB--] = vB % No | 0, IB = vB / No | 0;
        oB[JB] = (oB[JB] + IB) % No | 0
      }
      for (; !oB[--GB];) oB.pop();
      return IB ? ++ZB : oB.shift(), BB.d = oB, BB.e = ZB, vo ? ao(BB, hB.precision) : BB
    }, yo.toDecimalPlaces = yo.todp = function(BB, IB) {
      var ZB = this,
        TB = ZB.constructor;
      return ZB = new TB(ZB), void 0 === BB ? ZB : (Wo(BB, 0, Go), void 0 === IB ? IB = TB.rounding : Wo(IB, 0, 8), ao(ZB, BB + wo(ZB) + 1, IB))
    }, yo.toExponential = function(BB, IB) {
      var ZB, TB = this,
        JB = TB.constructor;
      return void 0 === BB ? ZB = Mo(TB, !0) : (Wo(BB, 0, Go), void 0 === IB ? IB = JB.rounding : Wo(IB, 0, 8), ZB = Mo(TB = ao(new JB(TB), BB + 1, IB), !0, BB + 1)), ZB
    }, yo.toFixed = function(BB, IB) {
      var ZB, TB, JB = this,
        oB = JB.constructor;
      return void 0 === BB ? Mo(JB) : (Wo(BB, 0, Go), void 0 === IB ? IB = oB.rounding : Wo(IB, 0, 8), ZB = Mo((TB = ao(new oB(JB), BB + wo(JB) + 1, IB)).abs(), !1, BB + wo(TB) + 1), JB.isneg() && !JB.isZero() ? "-" + ZB : ZB)
    }, yo.toInteger = yo.toint = function() {
      var BB = this,
        IB = BB.constructor;
      return ao(new IB(BB), wo(BB) + 1, IB.rounding)
    }, yo.toNumber = function() {
      return +this
    }, yo.toPower = yo.pow = function(BB) {
      var IB, ZB, TB, JB, oB, GB, vB = this,
        kB = vB.constructor,
        cB = +(BB = new kB(BB));
      if (!BB.s) return new kB(oo);
      if (!(vB = new kB(vB)).s) {
        if (BB.s < 1) throw Error(ko + "Infinity");
        return vB
      }
      if (vB.eq(oo)) return vB;
      if (TB = kB.precision, BB.eq(oo)) return ao(vB, TB);
      if (GB = (IB = BB.e) >= (ZB = BB.d.length - 1), oB = vB.s, GB) {
        if ((ZB = cB < 0 ? -cB : cB) <= go) {
          for (JB = new kB(oo), IB = Math.ceil(TB / 7 + 4), vo = !1; ZB % 2 && jo((JB = JB.times(vB)).d, IB), 0 !== (ZB = ho(ZB / 2));) jo((vB = vB.times(vB)).d, IB);
          return vo = !0, BB.s < 0 ? new kB(oo).div(JB) : ao(JB, TB)
        }
      } else if (oB < 0) throw Error(ko + "NaN");
      return oB = oB < 0 && 1 & BB.d[Math.max(IB, ZB)] ? -1 : 1, vB.s = 1, vo = !1, JB = BB.times(io(vB, TB + 12)), vo = !0, (JB = so(JB)).s = oB, JB
    }, yo.toPrecision = function(BB, IB) {
      var ZB, TB, JB = this,
        oB = JB.constructor;
      return void 0 === BB ? TB = Mo(JB, (ZB = wo(JB)) <= oB.toExpNeg || ZB >= oB.toExpPos) : (Wo(BB, 1, Go), void 0 === IB ? IB = oB.rounding : Wo(IB, 0, 8), TB = Mo(JB = ao(new oB(JB), BB, IB), BB <= (ZB = wo(JB)) || ZB <= oB.toExpNeg, BB)), TB
    }, yo.toSignificantDigits = yo.tosd = function(BB, IB) {
      var ZB = this.constructor;
      return void 0 === BB ? (BB = ZB.precision, IB = ZB.rounding) : (Wo(BB, 1, Go), void 0 === IB ? IB = ZB.rounding : Wo(IB, 0, 8)), ao(new ZB(this), BB, IB)
    }, yo.toString = yo.valueOf = yo.val = yo.toJSON = yo[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var BB = this,
        IB = wo(BB),
        ZB = BB.constructor;
      return Mo(BB, IB <= ZB.toExpNeg || IB >= ZB.toExpPos)
    };
    var Qo = function() {
      function BB(BB, IB) {
        var ZB, TB = 0,
          JB = BB.length;
        for (BB = BB.slice(); JB--;) ZB = BB[JB] * IB + TB, BB[JB] = ZB % No | 0, TB = ZB / No | 0;
        return TB && BB.unshift(TB), BB
      }

      function IB(BB, IB, ZB, TB) {
        var JB, oB;
        if (ZB != TB) oB = ZB > TB ? 1 : -1;
        else
          for (JB = oB = 0; JB < ZB; JB++)
            if (BB[JB] != IB[JB]) {
              oB = BB[JB] > IB[JB] ? 1 : -1;
              break
            } return oB
      }

      function ZB(BB, IB, ZB) {
        for (var TB = 0; ZB--;) BB[ZB] -= TB, TB = BB[ZB] < IB[ZB] ? 1 : 0, BB[ZB] = TB * No + BB[ZB] - IB[ZB];
        for (; !BB[0] && BB.length > 1;) BB.shift()
      }
      return function(TB, JB, oB, GB) {
        var vB, kB, cB, nB, hB, zB, FB, NB, gB, qB, yB, UB, WB, dB, CB, QB, sB, wB, OB = TB.constructor,
          YB = TB.s == JB.s ? 1 : -1,
          iB = TB.d,
          pB = JB.d;
        if (!TB.s) return new OB(TB);
        if (!JB.s) throw Error(ko + "Division by zero");
        for (kB = TB.e - JB.e, sB = pB.length, CB = iB.length, NB = (FB = new OB(YB)).d = [], cB = 0; pB[cB] == (iB[cB] || 0);) ++cB;
        if (pB[cB] > (iB[cB] || 0) && --kB, (UB = null == oB ? oB = OB.precision : GB ? oB + (wo(TB) - wo(JB)) + 1 : oB) < 0) return new OB(0);
        if (UB = UB / 7 + 2 | 0, cB = 0, 1 == sB)
          for (nB = 0, pB = pB[0], UB++;
            (cB < CB || nB) && UB--; cB++) WB = nB * No + (iB[cB] || 0), NB[cB] = WB / pB | 0, nB = WB % pB | 0;
        else {
          for ((nB = No / (pB[0] + 1) | 0) > 1 && (pB = BB(pB, nB), iB = BB(iB, nB), sB = pB.length, CB = iB.length), dB = sB, qB = (gB = iB.slice(0, sB)).length; qB < sB;) gB[qB++] = 0;
          (wB = pB.slice()).unshift(0), QB = pB[0], pB[1] >= No / 2 && ++QB;
          do {
            nB = 0, (vB = IB(pB, gB, sB, qB)) < 0 ? (yB = gB[0], sB != qB && (yB = yB * No + (gB[1] || 0)), (nB = yB / QB | 0) > 1 ? (nB >= No && (nB = No - 1), 1 == (vB = IB(hB = BB(pB, nB), gB, zB = hB.length, qB = gB.length)) && (nB--, ZB(hB, sB < zB ? wB : pB, zB))) : (0 == nB && (vB = nB = 1), hB = pB.slice()), (zB = hB.length) < qB && hB.unshift(0), ZB(gB, hB, qB), -1 == vB && (vB = IB(pB, gB, sB, qB = gB.length)) < 1 && (nB++, ZB(gB, sB < qB ? wB : pB, qB)), qB = gB.length) : 0 === vB && (nB++, gB = [0]), NB[cB++] = nB, vB && gB[0] ? gB[qB++] = iB[dB] || 0 : (gB = [iB[dB]], qB = 1)
          } while ((dB++ < CB || void 0 !== gB[0]) && UB--)
        }
        return NB[0] || NB.shift(), FB.e = kB, ao(FB, GB ? oB + wo(FB) + 1 : oB)
      }
    }();

    function so(BB, IB) {
      var ZB, TB, JB, oB, GB, vB = 0,
        kB = 0,
        cB = BB.constructor,
        nB = cB.precision;
      if (wo(BB) > 16) throw Error(no + wo(BB));
      if (!BB.s) return new cB(oo);
      for (null == IB ? (vo = !1, GB = nB) : GB = IB, oB = new cB(.03125); BB.abs().gte(.1);) BB = BB.times(oB), kB += 5;
      for (GB += Math.log(zo(2, kB)) / Math.LN10 * 2 + 5 | 0, ZB = TB = JB = new cB(oo), cB.precision = GB;;) {
        if (TB = ao(TB.times(BB), GB), ZB = ZB.times(++vB), Co((oB = JB.plus(Qo(TB, ZB, GB))).d).slice(0, GB) === Co(JB.d).slice(0, GB)) {
          for (; kB--;) JB = ao(JB.times(JB), GB);
          return cB.precision = nB, null == IB ? (vo = !0, ao(JB, nB)) : JB
        }
        JB = oB
      }
    }

    function wo(BB) {
      for (var IB = 7 * BB.e, ZB = BB.d[0]; ZB >= 10; ZB /= 10) IB++;
      return IB
    }

    function Oo(BB, IB, ZB) {
      if (IB > BB.LN10.sd()) throw vo = !0, ZB && (BB.precision = ZB), Error(ko + "LN10 precision limit exceeded");
      return ao(new BB(BB.LN10), IB)
    }

    function Yo(BB) {
      for (var IB = ""; BB--;) IB += "0";
      return IB
    }

    function io(BB, IB) {
      var ZB, TB, JB, oB, GB, vB, kB, cB, nB, hB = 1,
        zB = BB,
        FB = zB.d,
        NB = zB.constructor,
        gB = NB.precision;
      if (zB.s < 1) throw Error(ko + (zB.s ? "NaN" : "-Infinity"));
      if (zB.eq(oo)) return new NB(0);
      if (null == IB ? (vo = !1, cB = gB) : cB = IB, zB.eq(10)) return null == IB && (vo = !0), Oo(NB, cB);
      if (cB += 10, NB.precision = cB, TB = (ZB = Co(FB)).charAt(0), oB = wo(zB), !(Math.abs(oB) < 15e14)) return kB = Oo(NB, cB + 2, gB).times(oB + ""), zB = io(new NB(TB + "." + ZB.slice(1)), cB - 10).plus(kB), NB.precision = gB, null == IB ? (vo = !0, ao(zB, gB)) : zB;
      for (; TB < 7 && 1 != TB || 1 == TB && ZB.charAt(1) > 3;) TB = (ZB = Co((zB = zB.times(BB)).d)).charAt(0), hB++;
      for (oB = wo(zB), TB > 1 ? (zB = new NB("0." + ZB), oB++) : zB = new NB(TB + "." + ZB.slice(1)), vB = GB = zB = Qo(zB.minus(oo), zB.plus(oo), cB), nB = ao(zB.times(zB), cB), JB = 3;;) {
        if (GB = ao(GB.times(nB), cB), Co((kB = vB.plus(Qo(GB, new NB(JB), cB))).d).slice(0, cB) === Co(vB.d).slice(0, cB)) return vB = vB.times(2), 0 !== oB && (vB = vB.plus(Oo(NB, cB + 2, gB).times(oB + ""))), vB = Qo(vB, new NB(hB), cB), NB.precision = gB, null == IB ? (vo = !0, ao(vB, gB)) : vB;
        vB = kB, JB += 2
      }
    }

    function po(BB, IB) {
      var ZB, TB, JB;
      for ((ZB = IB.indexOf(".")) > -1 && (IB = IB.replace(".", "")), (TB = IB.search(/e/i)) > 0 ? (ZB < 0 && (ZB = TB), ZB += +IB.slice(TB + 1), IB = IB.substring(0, TB)) : ZB < 0 && (ZB = IB.length), TB = 0; 48 === IB.charCodeAt(TB);) ++TB;
      for (JB = IB.length; 48 === IB.charCodeAt(JB - 1);) --JB;
      if (IB = IB.slice(TB, JB)) {
        if (JB -= TB, ZB = ZB - TB - 1, BB.e = ho(ZB / 7), BB.d = [], TB = (ZB + 1) % 7, ZB < 0 && (TB += 7), TB < JB) {
          for (TB && BB.d.push(+IB.slice(0, TB)), JB -= 7; TB < JB;) BB.d.push(+IB.slice(TB, TB += 7));
          TB = 7 - (IB = IB.slice(TB)).length
        } else TB -= JB;
        for (; TB--;) IB += "0";
        if (BB.d.push(+IB), vo && (BB.e > qo || BB.e < -qo)) throw Error(no + ZB)
      } else BB.s = 0, BB.e = 0, BB.d = [0];
      return BB
    }

    function ao(BB, IB, ZB) {
      var TB, JB, oB, GB, vB, kB, cB, nB, hB = BB.d;
      for (GB = 1, oB = hB[0]; oB >= 10; oB /= 10) GB++;
      if ((TB = IB - GB) < 0) TB += 7, JB = IB, cB = hB[nB = 0];
      else {
        if ((nB = Math.ceil((TB + 1) / 7)) >= (oB = hB.length)) return BB;
        for (cB = oB = hB[nB], GB = 1; oB >= 10; oB /= 10) GB++;
        JB = (TB %= 7) - 7 + GB
      }
      if (void 0 !== ZB && (vB = cB / (oB = zo(10, GB - JB - 1)) % 10 | 0, kB = IB < 0 || void 0 !== hB[nB + 1] || cB % oB, kB = ZB < 4 ? (vB || kB) && (0 == ZB || ZB == (BB.s < 0 ? 3 : 2)) : vB > 5 || 5 == vB && (4 == ZB || kB || 6 == ZB && (TB > 0 ? JB > 0 ? cB / zo(10, GB - JB) : 0 : hB[nB - 1]) % 10 & 1 || ZB == (BB.s < 0 ? 8 : 7))), IB < 1 || !hB[0]) return kB ? (oB = wo(BB), hB.length = 1, IB = IB - oB - 1, hB[0] = zo(10, (7 - IB % 7) % 7), BB.e = ho(-IB / 7) || 0) : (hB.length = 1, hB[0] = BB.e = BB.s = 0), BB;
      if (0 == TB ? (hB.length = nB, oB = 1, nB--) : (hB.length = nB + 1, oB = zo(10, 7 - TB), hB[nB] = JB > 0 ? (cB / zo(10, GB - JB) % zo(10, JB) | 0) * oB : 0), kB)
        for (;;) {
          if (0 == nB) {
            (hB[0] += oB) == No && (hB[0] = 1, ++BB.e);
            break
          }
          if (hB[nB] += oB, hB[nB] != No) break;
          hB[nB--] = 0, oB = 1
        }
      for (TB = hB.length; 0 === hB[--TB];) hB.pop();
      if (vo && (BB.e > qo || BB.e < -qo)) throw Error(no + wo(BB));
      return BB
    }

    function Ho(BB, IB) {
      var ZB, TB, JB, oB, GB, vB, kB, cB, nB, hB, zB = BB.constructor,
        FB = zB.precision;
      if (!BB.s || !IB.s) return IB.s ? IB.s = -IB.s : IB = new zB(BB), vo ? ao(IB, FB) : IB;
      if (kB = BB.d, hB = IB.d, TB = IB.e, cB = BB.e, kB = kB.slice(), GB = cB - TB) {
        for ((nB = GB < 0) ? (ZB = kB, GB = -GB, vB = hB.length) : (ZB = hB, TB = cB, vB = kB.length), GB > (JB = Math.max(Math.ceil(FB / 7), vB) + 2) && (GB = JB, ZB.length = 1), ZB.reverse(), JB = GB; JB--;) ZB.push(0);
        ZB.reverse()
      } else {
        for ((nB = (JB = kB.length) < (vB = hB.length)) && (vB = JB), JB = 0; JB < vB; JB++)
          if (kB[JB] != hB[JB]) {
            nB = kB[JB] < hB[JB];
            break
          } GB = 0
      }
      for (nB && (ZB = kB, kB = hB, hB = ZB, IB.s = -IB.s), vB = kB.length, JB = hB.length - vB; JB > 0; --JB) kB[vB++] = 0;
      for (JB = hB.length; JB > GB;) {
        if (kB[--JB] < hB[JB]) {
          for (oB = JB; oB && 0 === kB[--oB];) kB[oB] = No - 1;
          --kB[oB], kB[JB] += No
        }
        kB[JB] -= hB[JB]
      }
      for (; 0 === kB[--vB];) kB.pop();
      for (; 0 === kB[0]; kB.shift()) --TB;
      return kB[0] ? (IB.d = kB, IB.e = TB, vo ? ao(IB, FB) : IB) : new zB(0)
    }

    function Mo(BB, IB, ZB) {
      var TB, JB = wo(BB),
        oB = Co(BB.d),
        GB = oB.length;
      return IB ? (ZB && (TB = ZB - GB) > 0 ? oB = oB.charAt(0) + "." + oB.slice(1) + Yo(TB) : GB > 1 && (oB = oB.charAt(0) + "." + oB.slice(1)), oB = oB + (JB < 0 ? "e" : "e+") + JB) : JB < 0 ? (oB = "0." + Yo(-JB - 1) + oB, ZB && (TB = ZB - GB) > 0 && (oB += Yo(TB))) : JB >= GB ? (oB += Yo(JB + 1 - GB), ZB && (TB = ZB - JB - 1) > 0 && (oB = oB + "." + Yo(TB))) : ((TB = JB + 1) < GB && (oB = oB.slice(0, TB) + "." + oB.slice(TB)), ZB && (TB = ZB - GB) > 0 && (JB + 1 === GB && (oB += "."), oB += Yo(TB))), BB.s < 0 ? "-" + oB : oB
    }

    function jo(BB, IB) {
      if (BB.length > IB) return BB.length = IB, !0
    }

    function Po(BB) {
      if (!BB || "object" !== typeof BB) throw Error(ko + "Object expected");
      var IB, ZB, TB, JB = ["precision", 1, Go, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (IB = 0; IB < JB.length; IB += 3)
        if (void 0 !== (TB = BB[ZB = JB[IB]])) {
          if (!(ho(TB) === TB && TB >= JB[IB + 1] && TB <= JB[IB + 2])) throw Error(co + ZB + ": " + TB);
          this[ZB] = TB
        } if (void 0 !== (TB = BB[ZB = "LN10"])) {
        if (TB != Math.LN10) throw Error(co + ZB + ": " + TB);
        this[ZB] = new this(TB)
      }
      return this
    }
    var Ro = function BB(IB) {
      var ZB, TB, JB;

      function oB(BB) {
        var IB = this;
        if (!(IB instanceof oB)) return new oB(BB);
        if (IB.constructor = oB, BB instanceof oB) return IB.s = BB.s, IB.e = BB.e, void(IB.d = (BB = BB.d) ? BB.slice() : BB);
        if ("number" === typeof BB) {
          if (0 * BB !== 0) throw Error(co + BB);
          if (BB > 0) IB.s = 1;
          else {
            if (!(BB < 0)) return IB.s = 0, IB.e = 0, void(IB.d = [0]);
            BB = -BB, IB.s = -1
          }
          return BB === ~~BB && BB < 1e7 ? (IB.e = 0, void(IB.d = [BB])) : po(IB, BB.toString())
        }
        if ("string" !== typeof BB) throw Error(co + BB);
        if (45 === BB.charCodeAt(0) ? (BB = BB.slice(1), IB.s = -1) : IB.s = 1, !Fo.test(BB)) throw Error(co + BB);
        po(IB, BB)
      }
      if (oB.prototype = yo, oB.ROUND_UP = 0, oB.ROUND_DOWN = 1, oB.ROUND_CEIL = 2, oB.ROUND_FLOOR = 3, oB.ROUND_HALF_UP = 4, oB.ROUND_HALF_DOWN = 5, oB.ROUND_HALF_EVEN = 6, oB.ROUND_HALF_CEIL = 7, oB.ROUND_HALF_FLOOR = 8, oB.clone = BB, oB.config = oB.set = Po, void 0 === IB && (IB = {}), IB)
        for (JB = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], ZB = 0; ZB < JB.length;) IB.hasOwnProperty(TB = JB[ZB++]) || (IB[TB] = this[TB]);
      return oB.config(IB), oB
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    oo = new Ro(1);
    var ro;
    ! function(BB) {
      BB.AED = "aed", BB.AFN = "afn", BB.ALL = "all", BB.AMD = "amd", BB.ANG = "ang", BB.AOA = "aoa", BB.ARS = "ars", BB.AUD = "aud", BB.AWG = "awg", BB.AZN = "azn", BB.BAM = "bam", BB.BBD = "bbd", BB.BDT = "bdt", BB.BGN = "bgn", BB.BHD = "bhd", BB.BIF = "bif", BB.BMD = "bmd", BB.BND = "bnd", BB.BOB = "bob", BB.BOV = "bov", BB.BRL = "brl", BB.BSD = "bsd", BB.BTN = "btn", BB.BWP = "bwp", BB.BYN = "byn", BB.BYR = "byr", BB.BZD = "bzd", BB.CAD = "cad", BB.CDF = "cdf", BB.CHE = "che", BB.CHF = "chf", BB.CHW = "chw", BB.CLF = "clf", BB.CLP = "clp", BB.CNY = "cny", BB.COP = "cop", BB.COU = "cou", BB.CRC = "crc", BB.CUC = "cuc", BB.CUP = "cup", BB.CVE = "cve", BB.CZK = "czk", BB.DJF = "djf", BB.DKK = "dkk", BB.DOP = "dop", BB.DZD = "dzd", BB.EGP = "egp", BB.ERN = "ern", BB.ETB = "etb", BB.EUR = "eur", BB.FJD = "fjd", BB.FKP = "fkp", BB.GBP = "gbp", BB.GEL = "gel", BB.GHS = "ghs", BB.GIP = "gip", BB.GMD = "gmd", BB.GNF = "gnf", BB.GTQ = "gtq", BB.GYD = "gyd", BB.HKD = "hkd", BB.HNL = "hnl", BB.HRK = "hrk", BB.HTG = "htg", BB.HUF = "huf", BB.IDR = "idr", BB.ILS = "ils", BB.INR = "inr", BB.IQD = "iqd", BB.IRR = "irr", BB.ISK = "isk", BB.JMD = "jmd", BB.JOD = "jod", BB.JPY = "jpy", BB.KES = "kes", BB.KGS = "kgs", BB.KHR = "khr", BB.KMF = "kmf", BB.KPW = "kpw", BB.KRW = "krw", BB.KWD = "kwd", BB.KYD = "kyd", BB.KZT = "kzt", BB.LAK = "lak", BB.LBP = "lbp", BB.LKR = "lkr", BB.LRD = "lrd", BB.LSL = "lsl", BB.LTL = "ltl", BB.LVL = "lvl", BB.LYD = "lyd", BB.MAD = "mad", BB.MDL = "mdl", BB.MGA = "mga", BB.MKD = "mkd", BB.MMK = "mmk", BB.MNT = "mnt", BB.MOP = "mop", BB.MRO = "mro", BB.MUR = "mur", BB.MVR = "mvr", BB.MWK = "mwk", BB.MXN = "mxn", BB.MXV = "mxv", BB.MYR = "myr", BB.MZN = "mzn", BB.NAD = "nad", BB.NGN = "ngn", BB.NIO = "nio", BB.NOK = "nok", BB.NPR = "npr", BB.NZD = "nzd", BB.OMR = "omr", BB.PAB = "pab", BB.PEN = "pen", BB.PGK = "pgk", BB.PHP = "php", BB.PKR = "pkr", BB.PLN = "pln", BB.PYG = "pyg", BB.QAR = "qar", BB.RON = "ron", BB.RSD = "rsd", BB.RUB = "rub", BB.RWF = "rwf", BB.SAR = "sar", BB.SBD = "sbd", BB.SCR = "scr", BB.SDG = "sdg", BB.SEK = "sek", BB.SGD = "sgd", BB.SHP = "shp", BB.SLL = "sll", BB.SOS = "sos", BB.SRD = "srd", BB.SSP = "ssp", BB.STD = "std", BB.SVC = "svc", BB.SYP = "syp", BB.SZL = "szl", BB.THB = "thb", BB.TJS = "tjs", BB.TMT = "tmt", BB.TND = "tnd", BB.TOP = "top", BB.TRY = "try", BB.TTD = "ttd", BB.TWD = "twd", BB.TZS = "tzs", BB.UAH = "uah", BB.UGX = "ugx", BB.USD = "usd", BB.USN = "usn", BB.USS = "uss", BB.UYI = "uyi", BB.UYU = "uyu", BB.UZS = "uzs", BB.VEF = "vef", BB.VND = "vnd", BB.VUV = "vuv", BB.WST = "wst", BB.XAF = "xaf", BB.XAG = "xag", BB.XAU = "xau", BB.XBA = "xba", BB.XBB = "xbb", BB.XBC = "xbc", BB.XBD = "xbd", BB.XCD = "xcd", BB.XDR = "xdr", BB.XFU = "xfu", BB.XOF = "xof", BB.XPD = "xpd", BB.XPF = "xpf", BB.XPT = "xpt", BB.XSU = "xsu", BB.XTS = "xts", BB.XUA = "xua", BB.YER = "yer", BB.ZAR = "zar", BB.ZMW = "zmw", BB.ZWL = "zwl"
    }(ro || (ro = {}));
    ro.AED, ro.AFN, ro.ALL, ro.AMD, ro.ANG, ro.AOA, ro.ARS, ro.AUD, ro.AWG, ro.AZN, ro.BAM, ro.BBD, ro.BDT, ro.BGN, ro.BHD, ro.BIF, ro.BMD, ro.BND, ro.BOB, ro.BOV, ro.BRL, ro.BSD, ro.BTN, ro.BWP, ro.BYR, ro.BYN, ro.BZD, ro.CAD, ro.CDF, ro.CHE, ro.CHF, ro.CHW, ro.CLF, ro.CLP, ro.CNY, ro.COP, ro.COU, ro.CRC, ro.CUC, ro.CUP, ro.CVE, ro.CZK, ro.DJF, ro.DKK, ro.DOP, ro.DZD, ro.EGP, ro.ERN, ro.ETB, ro.EUR, ro.FJD, ro.FKP, ro.GBP, ro.GEL, ro.GHS, ro.GIP, ro.GMD, ro.GNF, ro.GTQ, ro.GYD, ro.HKD, ro.HNL, ro.HRK, ro.HTG, ro.HUF, ro.IDR, ro.ILS, ro.INR, ro.IQD, ro.IRR, ro.ISK, ro.JMD, ro.JOD, ro.JPY, ro.KES, ro.KGS, ro.KHR, ro.KMF, ro.KPW, ro.KRW, ro.KWD, ro.KYD, ro.KZT, ro.LAK, ro.LBP, ro.LKR, ro.LRD, ro.LSL, ro.LTL, ro.LVL, ro.LYD, ro.MAD, ro.MDL, ro.MGA, ro.MKD, ro.MMK, ro.MNT, ro.MOP, ro.MRO, ro.MUR, ro.MVR, ro.MWK, ro.MXN, ro.MXV, ro.MYR, ro.MZN, ro.NAD, ro.NGN, ro.NIO, ro.NOK, ro.NPR, ro.NZD, ro.OMR, ro.PAB, ro.PEN, ro.PGK, ro.PHP, ro.PKR, ro.PLN, ro.PYG, ro.QAR, ro.RON, ro.RSD, ro.RUB, ro.RWF, ro.SAR, ro.SBD, ro.SCR, ro.SDG, ro.SEK, ro.SGD, ro.SHP, ro.SLL, ro.SOS, ro.SRD, ro.SSP, ro.STD, ro.SVC, ro.SYP, ro.SZL, ro.THB, ro.TJS, ro.TMT, ro.TND, ro.TOP, ro.TRY, ro.TTD, ro.TWD, ro.TZS, ro.UAH, ro.UGX, ro.USD, ro.USN, ro.USS, ro.UYI, ro.UYU, ro.UZS, ro.VEF, ro.VND, ro.VUV, ro.WST, ro.XAF, ro.XAG, ro.XAU, ro.XBA, ro.XBB, ro.XBC, ro.XBD, ro.XCD, ro.XDR, ro.XFU, ro.XOF, ro.XPD, ro.XPF, ro.XPT, ro.XSU, ro.XTS, ro.XUA, ro.YER, ro.ZAR, ro.ZMW, ro.ZWL;
    var mo = {
      exports: {}
    };
    ! function(BB, IB) {
      var ZB = "__lodash_hash_undefined__",
        TB = 9007199254740991,
        oB = "[object Arguments]",
        GB = "[object Array]",
        vB = "[object Boolean]",
        kB = "[object Date]",
        cB = "[object Error]",
        nB = "[object Function]",
        hB = "[object Map]",
        zB = "[object Number]",
        FB = "[object Object]",
        NB = "[object Promise]",
        gB = "[object RegExp]",
        qB = "[object Set]",
        yB = "[object String]",
        UB = "[object Symbol]",
        WB = "[object WeakMap]",
        dB = "[object ArrayBuffer]",
        CB = "[object DataView]",
        QB = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        sB = /^\w*$/,
        wB = /^\./,
        OB = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        YB = /\\(\\)?/g,
        iB = /^\[object .+?Constructor\]$/,
        pB = /^(?:0|[1-9]\d*)$/,
        aB = {};
      aB["[object Float32Array]"] = aB["[object Float64Array]"] = aB["[object Int8Array]"] = aB["[object Int16Array]"] = aB["[object Int32Array]"] = aB["[object Uint8Array]"] = aB["[object Uint8ClampedArray]"] = aB["[object Uint16Array]"] = aB["[object Uint32Array]"] = !0, aB[oB] = aB[GB] = aB[dB] = aB[vB] = aB[CB] = aB[kB] = aB[cB] = aB[nB] = aB[hB] = aB[zB] = aB[FB] = aB[gB] = aB[qB] = aB[yB] = aB[WB] = !1;
      var HB = "object" == typeof JB && JB && JB.Object === Object && JB,
        MB = "object" == typeof self && self && self.Object === Object && self,
        jB = HB || MB || Function("return this")(),
        PB = IB && !IB.nodeType && IB,
        RB = PB && BB && !BB.nodeType && BB,
        rB = RB && RB.exports === PB && HB.process,
        mB = function() {
          try {
            return rB && rB.binding("util")
          } catch (BB) {}
        }(),
        XB = mB && mB.isTypedArray;

      function LB(BB, IB) {
        for (var ZB = -1, TB = BB ? BB.length : 0; ++ZB < TB && !1 !== IB(BB[ZB], ZB, BB););
        return BB
      }

      function eB(BB, IB) {
        for (var ZB = -1, TB = BB ? BB.length : 0; ++ZB < TB;)
          if (IB(BB[ZB], ZB, BB)) return !0;
        return !1
      }

      function uB(BB) {
        var IB = !1;
        if (null != BB && "function" != typeof BB.toString) try {
          IB = !!(BB + "")
        } catch (ZB) {}
        return IB
      }

      function fB(BB) {
        var IB = -1,
          ZB = Array(BB.size);
        return BB.forEach((function(BB, TB) {
          ZB[++IB] = [TB, BB]
        })), ZB
      }

      function lB(BB, IB) {
        return function(ZB) {
          return BB(IB(ZB))
        }
      }

      function AB(BB) {
        var IB = -1,
          ZB = Array(BB.size);
        return BB.forEach((function(BB) {
          ZB[++IB] = BB
        })), ZB
      }
      var tB = Array.prototype,
        bB = Function.prototype,
        xB = Object.prototype,
        EB = jB["__core-js_shared__"],
        DB = function() {
          var BB = /[^.]+$/.exec(EB && EB.keys && EB.keys.IE_PROTO || "");
          return BB ? "Symbol(src)_1." + BB : ""
        }(),
        KB = bB.toString,
        VB = xB.hasOwnProperty,
        SB = xB.toString,
        BI = RegExp("^" + KB.call(VB).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        II = jB.Symbol,
        ZI = jB.Uint8Array,
        TI = lB(Object.getPrototypeOf, Object),
        JI = Object.create,
        oI = xB.propertyIsEnumerable,
        GI = tB.splice,
        vI = lB(Object.keys, Object),
        kI = fI(jB, "DataView"),
        cI = fI(jB, "Map"),
        nI = fI(jB, "Promise"),
        hI = fI(jB, "Set"),
        zI = fI(jB, "WeakMap"),
        FI = fI(Object, "create"),
        NI = KI(kI),
        gI = KI(cI),
        qI = KI(nI),
        yI = KI(hI),
        UI = KI(zI),
        WI = II ? II.prototype : void 0,
        dI = WI ? WI.valueOf : void 0,
        CI = WI ? WI.toString : void 0;

      function QI(BB) {
        var IB = -1,
          ZB = BB ? BB.length : 0;
        for (this.clear(); ++IB < ZB;) {
          var TB = BB[IB];
          this.set(TB[0], TB[1])
        }
      }

      function sI(BB) {
        var IB = -1,
          ZB = BB ? BB.length : 0;
        for (this.clear(); ++IB < ZB;) {
          var TB = BB[IB];
          this.set(TB[0], TB[1])
        }
      }

      function wI(BB) {
        var IB = -1,
          ZB = BB ? BB.length : 0;
        for (this.clear(); ++IB < ZB;) {
          var TB = BB[IB];
          this.set(TB[0], TB[1])
        }
      }

      function OI(BB) {
        var IB = -1,
          ZB = BB ? BB.length : 0;
        for (this.__data__ = new wI; ++IB < ZB;) this.add(BB[IB])
      }

      function YI(BB) {
        this.__data__ = new sI(BB)
      }

      function iI(BB, IB) {
        var ZB = IZ(BB) || BZ(BB) ? function(BB, IB) {
            for (var ZB = -1, TB = Array(BB); ++ZB < BB;) TB[ZB] = IB(ZB);
            return TB
          }(BB.length, String) : [],
          TB = ZB.length,
          JB = !!TB;
        for (var oB in BB) !IB && !VB.call(BB, oB) || JB && ("length" == oB || AI(oB, TB)) || ZB.push(oB);
        return ZB
      }

      function pI(BB, IB) {
        for (var ZB = BB.length; ZB--;)
          if (SI(BB[ZB][0], IB)) return ZB;
        return -1
      }
      QI.prototype.clear = function() {
        this.__data__ = FI ? FI(null) : {}
      }, QI.prototype.delete = function(BB) {
        return this.has(BB) && delete this.__data__[BB]
      }, QI.prototype.get = function(BB) {
        var IB = this.__data__;
        if (FI) {
          var TB = IB[BB];
          return TB === ZB ? void 0 : TB
        }
        return VB.call(IB, BB) ? IB[BB] : void 0
      }, QI.prototype.has = function(BB) {
        var IB = this.__data__;
        return FI ? void 0 !== IB[BB] : VB.call(IB, BB)
      }, QI.prototype.set = function(BB, IB) {
        return this.__data__[BB] = FI && void 0 === IB ? ZB : IB, this
      }, sI.prototype.clear = function() {
        this.__data__ = []
      }, sI.prototype.delete = function(BB) {
        var IB = this.__data__,
          ZB = pI(IB, BB);
        return !(ZB < 0) && (ZB == IB.length - 1 ? IB.pop() : GI.call(IB, ZB, 1), !0)
      }, sI.prototype.get = function(BB) {
        var IB = this.__data__,
          ZB = pI(IB, BB);
        return ZB < 0 ? void 0 : IB[ZB][1]
      }, sI.prototype.has = function(BB) {
        return pI(this.__data__, BB) > -1
      }, sI.prototype.set = function(BB, IB) {
        var ZB = this.__data__,
          TB = pI(ZB, BB);
        return TB < 0 ? ZB.push([BB, IB]) : ZB[TB][1] = IB, this
      }, wI.prototype.clear = function() {
        this.__data__ = {
          hash: new QI,
          map: new(cI || sI),
          string: new QI
        }
      }, wI.prototype.delete = function(BB) {
        return uI(this, BB).delete(BB)
      }, wI.prototype.get = function(BB) {
        return uI(this, BB).get(BB)
      }, wI.prototype.has = function(BB) {
        return uI(this, BB).has(BB)
      }, wI.prototype.set = function(BB, IB) {
        return uI(this, BB).set(BB, IB), this
      }, OI.prototype.add = OI.prototype.push = function(BB) {
        return this.__data__.set(BB, ZB), this
      }, OI.prototype.has = function(BB) {
        return this.__data__.has(BB)
      }, YI.prototype.clear = function() {
        this.__data__ = new sI
      }, YI.prototype.delete = function(BB) {
        return this.__data__.delete(BB)
      }, YI.prototype.get = function(BB) {
        return this.__data__.get(BB)
      }, YI.prototype.has = function(BB) {
        return this.__data__.has(BB)
      }, YI.prototype.set = function(BB, IB) {
        var ZB = this.__data__;
        if (ZB instanceof sI) {
          var TB = ZB.__data__;
          if (!cI || TB.length < 199) return TB.push([BB, IB]), this;
          ZB = this.__data__ = new wI(TB)
        }
        return ZB.set(BB, IB), this
      };
      var aI, HI = function(BB, IB, ZB) {
        for (var TB = -1, JB = Object(BB), oB = ZB(BB), GB = oB.length; GB--;) {
          var vB = oB[aI ? GB : ++TB];
          if (!1 === IB(JB[vB], vB, JB)) break
        }
        return BB
      };

      function MI(BB, IB) {
        return BB && HI(BB, IB, nZ)
      }

      function jI(BB, IB) {
        for (var ZB = 0, TB = (IB = tI(IB, BB) ? [IB] : LI(IB)).length; null != BB && ZB < TB;) BB = BB[DI(IB[ZB++])];
        return ZB && ZB == TB ? BB : void 0
      }

      function PI(BB, IB) {
        return null != BB && IB in Object(BB)
      }

      function RI(BB, IB, ZB, TB, JB) {
        return BB === IB || (null == BB || null == IB || !oZ(BB) && !GZ(IB) ? BB !== BB && IB !== IB : function(BB, IB, ZB, TB, JB, nB) {
          var NB = IZ(BB),
            WB = IZ(IB),
            QB = GB,
            sB = GB;
          NB || (QB = (QB = lI(BB)) == oB ? FB : QB);
          WB || (sB = (sB = lI(IB)) == oB ? FB : sB);
          var wB = QB == FB && !uB(BB),
            OB = sB == FB && !uB(IB),
            YB = QB == sB;
          if (YB && !wB) return nB || (nB = new YI), NB || cZ(BB) ? eI(BB, IB, ZB, TB, JB, nB) : function(BB, IB, ZB, TB, JB, oB, GB) {
            switch (ZB) {
              case CB:
                if (BB.byteLength != IB.byteLength || BB.byteOffset != IB.byteOffset) return !1;
                BB = BB.buffer, IB = IB.buffer;
              case dB:
                return !(BB.byteLength != IB.byteLength || !TB(new ZI(BB), new ZI(IB)));
              case vB:
              case kB:
              case zB:
                return SI(+BB, +IB);
              case cB:
                return BB.name == IB.name && BB.message == IB.message;
              case gB:
              case yB:
                return BB == IB + "";
              case hB:
                var nB = fB;
              case qB:
                var FB = 2 & oB;
                if (nB || (nB = AB), BB.size != IB.size && !FB) return !1;
                var NB = GB.get(BB);
                if (NB) return NB == IB;
                oB |= 1, GB.set(BB, IB);
                var WB = eI(nB(BB), nB(IB), TB, JB, oB, GB);
                return GB.delete(BB), WB;
              case UB:
                if (dI) return dI.call(BB) == dI.call(IB)
            }
            return !1
          }(BB, IB, QB, ZB, TB, JB, nB);
          if (!(2 & JB)) {
            var iB = wB && VB.call(BB, "__wrapped__"),
              pB = OB && VB.call(IB, "__wrapped__");
            if (iB || pB) {
              var aB = iB ? BB.value() : BB,
                HB = pB ? IB.value() : IB;
              return nB || (nB = new YI), ZB(aB, HB, TB, JB, nB)
            }
          }
          if (!YB) return !1;
          return nB || (nB = new YI),
            function(BB, IB, ZB, TB, JB, oB) {
              var GB = 2 & JB,
                vB = nZ(BB),
                kB = vB.length,
                cB = nZ(IB),
                nB = cB.length;
              if (kB != nB && !GB) return !1;
              var hB = kB;
              for (; hB--;) {
                var zB = vB[hB];
                if (!(GB ? zB in IB : VB.call(IB, zB))) return !1
              }
              var FB = oB.get(BB);
              if (FB && oB.get(IB)) return FB == IB;
              var NB = !0;
              oB.set(BB, IB), oB.set(IB, BB);
              var gB = GB;
              for (; ++hB < kB;) {
                var qB = BB[zB = vB[hB]],
                  yB = IB[zB];
                if (TB) var UB = GB ? TB(yB, qB, zB, IB, BB, oB) : TB(qB, yB, zB, BB, IB, oB);
                if (!(void 0 === UB ? qB === yB || ZB(qB, yB, TB, JB, oB) : UB)) {
                  NB = !1;
                  break
                }
                gB || (gB = "constructor" == zB)
              }
              if (NB && !gB) {
                var WB = BB.constructor,
                  dB = IB.constructor;
                WB == dB || !("constructor" in BB) || !("constructor" in IB) || "function" == typeof WB && WB instanceof WB && "function" == typeof dB && dB instanceof dB || (NB = !1)
              }
              return oB.delete(BB), oB.delete(IB), NB
            }(BB, IB, ZB, TB, JB, nB)
        }(BB, IB, RI, ZB, TB, JB))
      }

      function rI(BB) {
        return !(!oZ(BB) || (IB = BB, DB && DB in IB)) && (TZ(BB) || uB(BB) ? BI : iB).test(KI(BB));
        var IB
      }

      function mI(BB) {
        return "function" == typeof BB ? BB : null == BB ? hZ : "object" == typeof BB ? IZ(BB) ? function(BB, IB) {
          if (tI(BB) && bI(IB)) return xI(DI(BB), IB);
          return function(ZB) {
            var TB = function(BB, IB, ZB) {
              var TB = null == BB ? void 0 : jI(BB, IB);
              return void 0 === TB ? ZB : TB
            }(ZB, BB);
            return void 0 === TB && TB === IB ? function(BB, IB) {
              return null != BB && function(BB, IB, ZB) {
                IB = tI(IB, BB) ? [IB] : LI(IB);
                var TB, JB = -1,
                  oB = IB.length;
                for (; ++JB < oB;) {
                  var GB = DI(IB[JB]);
                  if (!(TB = null != BB && ZB(BB, GB))) break;
                  BB = BB[GB]
                }
                if (TB) return TB;
                oB = BB ? BB.length : 0;
                return !!oB && JZ(oB) && AI(GB, oB) && (IZ(BB) || BZ(BB))
              }(BB, IB, PI)
            }(ZB, BB) : RI(IB, TB, void 0, 3)
          }
        }(BB[0], BB[1]) : function(BB) {
          var IB = function(BB) {
            var IB = nZ(BB),
              ZB = IB.length;
            for (; ZB--;) {
              var TB = IB[ZB],
                JB = BB[TB];
              IB[ZB] = [TB, JB, bI(JB)]
            }
            return IB
          }(BB);
          if (1 == IB.length && IB[0][2]) return xI(IB[0][0], IB[0][1]);
          return function(ZB) {
            return ZB === BB || function(BB, IB, ZB, TB) {
              var JB = ZB.length,
                oB = JB,
                GB = !TB;
              if (null == BB) return !oB;
              for (BB = Object(BB); JB--;) {
                var vB = ZB[JB];
                if (GB && vB[2] ? vB[1] !== BB[vB[0]] : !(vB[0] in BB)) return !1
              }
              for (; ++JB < oB;) {
                var kB = (vB = ZB[JB])[0],
                  cB = BB[kB],
                  nB = vB[1];
                if (GB && vB[2]) {
                  if (void 0 === cB && !(kB in BB)) return !1
                } else {
                  var hB = new YI;
                  if (TB) var zB = TB(cB, nB, kB, BB, IB, hB);
                  if (!(void 0 === zB ? RI(nB, cB, TB, 3, hB) : zB)) return !1
                }
              }
              return !0
            }(ZB, BB, IB)
          }
        }(BB) : function(BB) {
          return tI(BB) ? (IB = DI(BB), function(BB) {
            return null == BB ? void 0 : BB[IB]
          }) : function(BB) {
            return function(IB) {
              return jI(IB, BB)
            }
          }(BB);
          var IB
        }(BB)
      }

      function XI(BB) {
        if (! function(BB) {
            var IB = BB && BB.constructor,
              ZB = "function" == typeof IB && IB.prototype || xB;
            return BB === ZB
          }(BB)) return vI(BB);
        var IB = [];
        for (var ZB in Object(BB)) VB.call(BB, ZB) && "constructor" != ZB && IB.push(ZB);
        return IB
      }

      function LI(BB) {
        return IZ(BB) ? BB : EI(BB)
      }

      function eI(BB, IB, ZB, TB, JB, oB) {
        var GB = 2 & JB,
          vB = BB.length,
          kB = IB.length;
        if (vB != kB && !(GB && kB > vB)) return !1;
        var cB = oB.get(BB);
        if (cB && oB.get(IB)) return cB == IB;
        var nB = -1,
          hB = !0,
          zB = 1 & JB ? new OI : void 0;
        for (oB.set(BB, IB), oB.set(IB, BB); ++nB < vB;) {
          var FB = BB[nB],
            NB = IB[nB];
          if (TB) var gB = GB ? TB(NB, FB, nB, IB, BB, oB) : TB(FB, NB, nB, BB, IB, oB);
          if (void 0 !== gB) {
            if (gB) continue;
            hB = !1;
            break
          }
          if (zB) {
            if (!eB(IB, (function(BB, IB) {
                if (!zB.has(IB) && (FB === BB || ZB(FB, BB, TB, JB, oB))) return zB.add(IB)
              }))) {
              hB = !1;
              break
            }
          } else if (FB !== NB && !ZB(FB, NB, TB, JB, oB)) {
            hB = !1;
            break
          }
        }
        return oB.delete(BB), oB.delete(IB), hB
      }

      function uI(BB, IB) {
        var ZB = BB.__data__;
        return function(BB) {
          var IB = typeof BB;
          return "string" == IB || "number" == IB || "symbol" == IB || "boolean" == IB ? "__proto__" !== BB : null === BB
        }(IB) ? ZB["string" == typeof IB ? "string" : "hash"] : ZB.map
      }

      function fI(BB, IB) {
        var ZB = function(BB, IB) {
          return null == BB ? void 0 : BB[IB]
        }(BB, IB);
        return rI(ZB) ? ZB : void 0
      }
      var lI = function(BB) {
        return SB.call(BB)
      };

      function AI(BB, IB) {
        return !!(IB = null == IB ? TB : IB) && ("number" == typeof BB || pB.test(BB)) && BB > -1 && BB % 1 == 0 && BB < IB
      }

      function tI(BB, IB) {
        if (IZ(BB)) return !1;
        var ZB = typeof BB;
        return !("number" != ZB && "symbol" != ZB && "boolean" != ZB && null != BB && !vZ(BB)) || (sB.test(BB) || !QB.test(BB) || null != IB && BB in Object(IB))
      }

      function bI(BB) {
        return BB === BB && !oZ(BB)
      }

      function xI(BB, IB) {
        return function(ZB) {
          return null != ZB && (ZB[BB] === IB && (void 0 !== IB || BB in Object(ZB)))
        }
      }(kI && lI(new kI(new ArrayBuffer(1))) != CB || cI && lI(new cI) != hB || nI && lI(nI.resolve()) != NB || hI && lI(new hI) != qB || zI && lI(new zI) != WB) && (lI = function(BB) {
        var IB = SB.call(BB),
          ZB = IB == FB ? BB.constructor : void 0,
          TB = ZB ? KI(ZB) : void 0;
        if (TB) switch (TB) {
          case NI:
            return CB;
          case gI:
            return hB;
          case qI:
            return NB;
          case yI:
            return qB;
          case UI:
            return WB
        }
        return IB
      });
      var EI = VI((function(BB) {
        var IB;
        BB = null == (IB = BB) ? "" : function(BB) {
          if ("string" == typeof BB) return BB;
          if (vZ(BB)) return CI ? CI.call(BB) : "";
          var IB = BB + "";
          return "0" == IB && 1 / BB == -1 / 0 ? "-0" : IB
        }(IB);
        var ZB = [];
        return wB.test(BB) && ZB.push(""), BB.replace(OB, (function(BB, IB, TB, JB) {
          ZB.push(TB ? JB.replace(YB, "$1") : IB || BB)
        })), ZB
      }));

      function DI(BB) {
        if ("string" == typeof BB || vZ(BB)) return BB;
        var IB = BB + "";
        return "0" == IB && 1 / BB == -1 / 0 ? "-0" : IB
      }

      function KI(BB) {
        if (null != BB) {
          try {
            return KB.call(BB)
          } catch (IB) {}
          try {
            return BB + ""
          } catch (IB) {}
        }
        return ""
      }

      function VI(BB, IB) {
        if ("function" != typeof BB || IB && "function" != typeof IB) throw new TypeError("Expected a function");
        var ZB = function() {
          var TB = arguments,
            JB = IB ? IB.apply(this, TB) : TB[0],
            oB = ZB.cache;
          if (oB.has(JB)) return oB.get(JB);
          var GB = BB.apply(this, TB);
          return ZB.cache = oB.set(JB, GB), GB
        };
        return ZB.cache = new(VI.Cache || wI), ZB
      }

      function SI(BB, IB) {
        return BB === IB || BB !== BB && IB !== IB
      }

      function BZ(BB) {
        return function(BB) {
          return GZ(BB) && ZZ(BB)
        }(BB) && VB.call(BB, "callee") && (!oI.call(BB, "callee") || SB.call(BB) == oB)
      }
      VI.Cache = wI;
      var IZ = Array.isArray;

      function ZZ(BB) {
        return null != BB && JZ(BB.length) && !TZ(BB)
      }

      function TZ(BB) {
        var IB = oZ(BB) ? SB.call(BB) : "";
        return IB == nB || "[object GeneratorFunction]" == IB
      }

      function JZ(BB) {
        return "number" == typeof BB && BB > -1 && BB % 1 == 0 && BB <= TB
      }

      function oZ(BB) {
        var IB = typeof BB;
        return !!BB && ("object" == IB || "function" == IB)
      }

      function GZ(BB) {
        return !!BB && "object" == typeof BB
      }

      function vZ(BB) {
        return "symbol" == typeof BB || GZ(BB) && SB.call(BB) == UB
      }
      var kZ, cZ = XB ? (kZ = XB, function(BB) {
        return kZ(BB)
      }) : function(BB) {
        return GZ(BB) && JZ(BB.length) && !!aB[SB.call(BB)]
      };

      function nZ(BB) {
        return ZZ(BB) ? iI(BB) : XI(BB)
      }

      function hZ(BB) {
        return BB
      }
      BB.exports = function(BB, IB, ZB) {
        var TB, JB = IZ(BB) || cZ(BB);
        if (IB = mI(IB), null == ZB)
          if (JB || oZ(BB)) {
            var oB = BB.constructor;
            ZB = JB ? IZ(BB) ? new oB : [] : TZ(oB) ? oZ(TB = TI(BB)) ? JI(TB) : {} : {}
          } else ZB = {};
        return (JB ? LB : MI)(BB, (function(BB, TB, JB) {
          return IB(ZB, BB, TB, JB)
        })), ZB
      }
    }(mo, mo.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      n: Xo
    } = TB
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);