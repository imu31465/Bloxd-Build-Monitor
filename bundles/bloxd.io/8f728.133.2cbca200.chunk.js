export const id = 133;
export const ids = [133];
export const modules = {
  6986: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => ru,
      f: () => En
    });
    var Vc = {};
    nc.r(Vc), nc.d(Vc, {
      d: () => IV,
      i: () => sV,
      h: () => uV,
      k: () => xV,
      m: () => Kn,
      o: () => ZV,
      q: () => Gn,
      t: () => vI,
      v: () => lV,
      y: () => CV,
      B: () => dn,
      F: () => LV,
      G: () => bI,
      I: () => QV,
      K: () => An,
      J: () => nV,
      M: () => UV,
      P: () => gI
    });
    var Ic = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : {};

    function rB(cB) {
      return cB && cB.__esModule && Object.prototype.hasOwnProperty.call(cB, "default") ? cB.default : cB
    }
    var uc = {
      exports: {}
    };
    ! function(cB) {
      var Bc = Object.prototype.hasOwnProperty,
        nc = "~";

      function Vc() {}

      function Ic(cB, Bc, nc) {
        this.mI = cB, this.context = Bc, this.once = nc || !1
      }

      function rB(cB, Bc, Vc, rB, uc) {
        if ("function" !== typeof Vc) throw new TypeError("The listener must be a function");
        var sc = new Ic(Vc, rB || cB, uc),
          Mc = nc ? nc + Bc : Bc;
        return cB._events[Mc] ? cB._events[Mc].mI ? cB._events[Mc] = [cB._events[Mc], sc] : cB._events[Mc].push(sc) : (cB._events[Mc] = sc, cB._eventsCount++), cB
      }

      function uc(cB, Bc) {
        0 === --cB._eventsCount ? cB._events = new Vc : delete cB._events[Bc]
      }

      function sc() {
        this._events = new Vc, this._eventsCount = 0
      }
      Object.create && (Vc.prototype = Object.create(null), (new Vc).__proto__ || (nc = !1)), sc.prototype.eventNames = function() {
        var cB, Vc, Ic = [];
        if (0 === this._eventsCount) return Ic;
        for (Vc in cB = this._events) Bc.call(cB, Vc) && Ic.push(nc ? Vc.slice(1) : Vc);
        return Object.getOwnPropertySymbols ? Ic.concat(Object.getOwnPropertySymbols(cB)) : Ic
      }, sc.prototype.listeners = function(cB) {
        var Bc = nc ? nc + cB : cB,
          Vc = this._events[Bc];
        if (!Vc) return [];
        if (Vc.mI) return [Vc.mI];
        for (var Ic = 0, rB = Vc.length, uc = new Array(rB); Ic < rB; Ic++) uc[Ic] = Vc[Ic].mI;
        return uc
      }, sc.prototype.listenerCount = function(cB) {
        var Bc = nc ? nc + cB : cB,
          Vc = this._events[Bc];
        return Vc ? Vc.mI ? 1 : Vc.length : 0
      }, sc.prototype.emit = function(cB, Bc, Vc, Ic, rB, uc) {
        var sc = nc ? nc + cB : cB;
        if (!this._events[sc]) return !1;
        var Mc, Pc, qB = this._events[sc],
          Oc = arguments.length;
        if (qB.mI) {
          switch (qB.once && this.removeListener(cB, qB.mI, void 0, !0), Oc) {
            case 1:
              return qB.mI.call(qB.context), !0;
            case 2:
              return qB.mI.call(qB.context, Bc), !0;
            case 3:
              return qB.mI.call(qB.context, Bc, Vc), !0;
            case 4:
              return qB.mI.call(qB.context, Bc, Vc, Ic), !0;
            case 5:
              return qB.mI.call(qB.context, Bc, Vc, Ic, rB), !0;
            case 6:
              return qB.mI.call(qB.context, Bc, Vc, Ic, rB, uc), !0
          }
          for (Pc = 1, Mc = new Array(Oc - 1); Pc < Oc; Pc++) Mc[Pc - 1] = arguments[Pc];
          qB.mI.apply(qB.context, Mc)
        } else {
          var Tc, fc = qB.length;
          for (Pc = 0; Pc < fc; Pc++) switch (qB[Pc].once && this.removeListener(cB, qB[Pc].mI, void 0, !0), Oc) {
            case 1:
              qB[Pc].mI.call(qB[Pc].context);
              break;
            case 2:
              qB[Pc].mI.call(qB[Pc].context, Bc);
              break;
            case 3:
              qB[Pc].mI.call(qB[Pc].context, Bc, Vc);
              break;
            case 4:
              qB[Pc].mI.call(qB[Pc].context, Bc, Vc, Ic);
              break;
            default:
              if (!Mc)
                for (Tc = 1, Mc = new Array(Oc - 1); Tc < Oc; Tc++) Mc[Tc - 1] = arguments[Tc];
              qB[Pc].mI.apply(qB[Pc].context, Mc)
          }
        }
        return !0
      }, sc.prototype.on = function(cB, Bc, nc) {
        return rB(this, cB, Bc, nc, !1)
      }, sc.prototype.once = function(cB, Bc, nc) {
        return rB(this, cB, Bc, nc, !0)
      }, sc.prototype.removeListener = function(cB, Bc, Vc, Ic) {
        var rB = nc ? nc + cB : cB;
        if (!this._events[rB]) return this;
        if (!Bc) return uc(this, rB), this;
        var sc = this._events[rB];
        if (sc.mI) sc.mI !== Bc || Ic && !sc.once || Vc && sc.context !== Vc || uc(this, rB);
        else {
          for (var Mc = 0, Pc = [], qB = sc.length; Mc < qB; Mc++)(sc[Mc].mI !== Bc || Ic && !sc[Mc].once || Vc && sc[Mc].context !== Vc) && Pc.push(sc[Mc]);
          Pc.length ? this._events[rB] = 1 === Pc.length ? Pc[0] : Pc : uc(this, rB)
        }
        return this
      }, sc.prototype.uq = function(cB) {
        var Bc;
        return cB ? (Bc = nc ? nc + cB : cB, this._events[Bc] && uc(this, Bc)) : (this._events = new Vc, this._eventsCount = 0), this
      }, sc.prototype.off = sc.prototype.removeListener, sc.prototype.addListener = sc.prototype.on, sc.prefixed = nc, sc.EventEmitter = sc, cB.exports = sc
    }(uc);
    var sc, Mc, Pc = rB(uc.exports);
    ! function(cB) {
      cB.assertEqual = cB => cB, cB.assertIs = function(cB) {}, cB.assertNever = function(cB) {
        throw new Error
      }, cB.arrayToEnum = cB => {
        const Bc = {};
        for (const nc of cB) Bc[nc] = nc;
        return Bc
      }, cB.getValidEnumValues = Bc => {
        const nc = cB.objectKeys(Bc).filter((cB => "number" !== typeof Bc[Bc[cB]])),
          Vc = {};
        for (const cB of nc) Vc[cB] = Bc[cB];
        return cB.objectValues(Vc)
      }, cB.objectValues = Bc => cB.objectKeys(Bc).map((function(cB) {
        return Bc[cB]
      })), cB.objectKeys = "function" === typeof Object.keys ? cB => Object.keys(cB) : cB => {
        const Bc = [];
        for (const nc in cB) Object.prototype.hasOwnProperty.call(cB, nc) && Bc.push(nc);
        return Bc
      }, cB.find = (cB, Bc) => {
        for (const nc of cB)
          if (Bc(nc)) return nc
      }, cB.isInteger = "function" === typeof Number.isInteger ? cB => Number.isInteger(cB) : cB => "number" === typeof cB && isFinite(cB) && Math.floor(cB) === cB, cB.joinValues = function(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " | ";
        return cB.map((cB => "string" === typeof cB ? `'${cB}'` : cB)).join(Bc)
      }, cB.jsonStringifyReplacer = (cB, Bc) => "bigint" === typeof Bc ? Bc.toString() : Bc
    }(sc || (sc = {})),
    function(cB) {
      cB.mergeShapes = (cB, Bc) => ({
        ...cB,
        ...Bc
      })
    }(Mc || (Mc = {}));
    const qB = sc.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
      Oc = cB => {
        switch (typeof cB) {
          case "undefined":
            return qB.undefined;
          case "string":
            return qB.string;
          case "number":
            return isNaN(cB) ? qB.nan : qB.number;
          case "boolean":
            return qB.boolean;
          case "function":
            return qB.function;
          case "bigint":
            return qB.bigint;
          case "symbol":
            return qB.symbol;
          case "object":
            return Array.isArray(cB) ? qB.array : null === cB ? qB.null : cB.then && "function" === typeof cB.then && cB.catch && "function" === typeof cB.catch ? qB.promise : "undefined" !== typeof Map && cB instanceof Map ? qB.map : "undefined" !== typeof Set && cB instanceof Set ? qB.set : "undefined" !== typeof Date && cB instanceof Date ? qB.date : qB.object;
          default:
            return qB.unknown
        }
      },
      Tc = sc.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
    class fc extends Error {
      constructor(cB) {
        var Bc;
        super(), Bc = this, this.issues = [], this.addIssue = cB => {
          this.issues = [...this.issues, cB]
        }, this.addIssues = function() {
          let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          Bc.issues = [...Bc.issues, ...cB]
        };
        const nc = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, nc) : this.__proto__ = nc, this.name = "ZodError", this.issues = cB
      }
      get errors() {
        return this.issues
      }
      format(cB) {
        const Bc = cB || function(cB) {
            return cB.message
          },
          nc = {
            _errors: []
          },
          Vc = cB => {
            for (const Ic of cB.issues)
              if ("invalid_union" === Ic.code) Ic.unionErrors.map(Vc);
              else if ("invalid_return_type" === Ic.code) Vc(Ic.returnTypeError);
            else if ("invalid_arguments" === Ic.code) Vc(Ic.argumentsError);
            else if (0 === Ic.path.length) nc._errors.push(Bc(Ic));
            else {
              let cB = nc,
                Vc = 0;
              for (; Vc < Ic.path.length;) {
                const nc = Ic.path[Vc];
                Vc === Ic.path.length - 1 ? (cB[nc] = cB[nc] || {
                  _errors: []
                }, cB[nc]._errors.push(Bc(Ic))) : cB[nc] = cB[nc] || {
                  _errors: []
                }, cB = cB[nc], Vc++
              }
            }
          };
        return Vc(this), nc
      }
      toString() {
        return this.message
      }
      get message() {
        return JSON.stringify(this.issues, sc.jsonStringifyReplacer, 2)
      }
      get hV() {
        return 0 === this.issues.length
      }
      flatten() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : cB => cB.message;
        const Bc = {},
          nc = [];
        for (const Vc of this.issues) Vc.path.length > 0 ? (Bc[Vc.path[0]] = Bc[Vc.path[0]] || [], Bc[Vc.path[0]].push(cB(Vc))) : nc.push(cB(Vc));
        return {
          formErrors: nc,
          fieldErrors: Bc
        }
      }
      get formErrors() {
        return this.flatten()
      }
    }
    fc.create = cB => new fc(cB);
    const mB = (cB, Bc) => {
      let nc;
      switch (cB.code) {
        case Tc.invalid_type:
          nc = cB.received === qB.undefined ? "Required" : `Expected ${cB.expected}, received ${cB.received}`;
          break;
        case Tc.invalid_literal:
          nc = `Invalid literal value, expected ${JSON.stringify(cB.expected,sc.jsonStringifyReplacer)}`;
          break;
        case Tc.unrecognized_keys:
          nc = `Unrecognized key(s) in object: ${sc.joinValues(cB.keys,", ")}`;
          break;
        case Tc.invalid_union:
          nc = "Invalid input";
          break;
        case Tc.invalid_union_discriminator:
          nc = `Invalid discriminator value. Expected ${sc.joinValues(cB.options)}`;
          break;
        case Tc.invalid_enum_value:
          nc = `Invalid enum value. Expected ${sc.joinValues(cB.options)}, received '${cB.received}'`;
          break;
        case Tc.invalid_arguments:
          nc = "Invalid function arguments";
          break;
        case Tc.invalid_return_type:
          nc = "Invalid function return type";
          break;
        case Tc.invalid_date:
          nc = "Invalid date";
          break;
        case Tc.invalid_string:
          "object" === typeof cB.validation ? "includes" in cB.validation ? (nc = `Invalid input: must include "${cB.validation.includes}"`, "number" === typeof cB.validation.position && (nc = `${nc} at one or more positions greater than or equal to ${cB.validation.position}`)) : "startsWith" in cB.validation ? nc = `Invalid input: must start with "${cB.validation.startsWith}"` : "endsWith" in cB.validation ? nc = `Invalid input: must end with "${cB.validation.endsWith}"` : sc.assertNever(cB.validation) : nc = "regex" !== cB.validation ? `Invalid ${cB.validation}` : "Invalid";
          break;
        case Tc.too_small:
          nc = "array" === cB.type ? `Array must contain ${cB.exact?"exactly":cB.inclusive?"at least":"more than"} ${cB.minimum} element(s)` : "string" === cB.type ? `String must contain ${cB.exact?"exactly":cB.inclusive?"at least":"over"} ${cB.minimum} character(s)` : "number" === cB.type ? `Number must be ${cB.exact?"exactly equal to ":cB.inclusive?"greater than or equal to ":"greater than "}${cB.minimum}` : "date" === cB.type ? `Date must be ${cB.exact?"exactly equal to ":cB.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(cB.minimum))}` : "Invalid input";
          break;
        case Tc.too_big:
          nc = "array" === cB.type ? `Array must contain ${cB.exact?"exactly":cB.inclusive?"at most":"less than"} ${cB.maximum} element(s)` : "string" === cB.type ? `String must contain ${cB.exact?"exactly":cB.inclusive?"at most":"under"} ${cB.maximum} character(s)` : "number" === cB.type ? `Number must be ${cB.exact?"exactly":cB.inclusive?"less than or equal to":"less than"} ${cB.maximum}` : "bigint" === cB.type ? `BigInt must be ${cB.exact?"exactly":cB.inclusive?"less than or equal to":"less than"} ${cB.maximum}` : "date" === cB.type ? `Date must be ${cB.exact?"exactly":cB.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(cB.maximum))}` : "Invalid input";
          break;
        case Tc.custom:
          nc = "Invalid input";
          break;
        case Tc.invalid_intersection_types:
          nc = "Intersection results could not be merged";
          break;
        case Tc.not_multiple_of:
          nc = `Number must be a multiple of ${cB.multipleOf}`;
          break;
        case Tc.not_finite:
          nc = "Number must be finite";
          break;
        default:
          nc = Bc.defaultError, sc.assertNever(cB)
      }
      return {
        message: nc
      }
    };
    let ec = mB;

    function tB() {
      return ec
    }
    const Sc = cB => {
      const {
        data: Bc,
        path: nc,
        errorMaps: Vc,
        issueData: Ic
      } = cB, rB = [...nc, ...Ic.path || []], uc = {
        ...Ic,
        path: rB
      };
      let sc = "";
      const Mc = Vc.filter((cB => !!cB)).slice().reverse();
      for (const Pc of Mc) sc = Pc(uc, {
        data: Bc,
        defaultError: sc
      }).message;
      return {
        ...Ic,
        path: rB,
        message: Ic.message || sc
      }
    };

    function yB(cB, Bc) {
      const nc = Sc({
        issueData: Bc,
        data: cB.data,
        path: cB.path,
        errorMaps: [cB.common.contextualErrorMap, cB.schemaErrorMap, tB(), mB].filter((cB => !!cB))
      });
      cB.common.issues.push(nc)
    }
    class zB {
      constructor() {
        this.value = "valid"
      }
      BI() {
        "valid" === this.value && (this.value = "BI")
      }
      abort() {
        "aborted" !== this.value && (this.value = "aborted")
      }
      static mergeArray(cB, Bc) {
        const nc = [];
        for (const Vc of Bc) {
          if ("aborted" === Vc.status) return pc;
          "BI" === Vc.status && cB.BI(), nc.push(Vc.value)
        }
        return {
          status: cB.value,
          value: nc
        }
      }
      static async mergeObjectAsync(cB, Bc) {
        const nc = [];
        for (const Vc of Bc) nc.push({
          key: await Vc.key,
          value: await Vc.value
        });
        return zB.mergeObjectSync(cB, nc)
      }
      static mergeObjectSync(cB, Bc) {
        const nc = {};
        for (const Vc of Bc) {
          const {
            key: Bc,
            value: Ic
          } = Vc;
          if ("aborted" === Bc.status) return pc;
          if ("aborted" === Ic.status) return pc;
          "BI" === Bc.status && cB.BI(), "BI" === Ic.status && cB.BI(), "__proto__" === Bc.value || "undefined" === typeof Ic.value && !Vc.alwaysSet || (nc[Bc.value] = Ic.value)
        }
        return {
          status: cB.value,
          value: nc
        }
      }
    }
    const pc = Object.freeze({
        status: "aborted"
      }),
      hc = cB => ({
        status: "BI",
        value: cB
      }),
      aB = cB => ({
        status: "valid",
        value: cB
      }),
      lc = cB => "aborted" === cB.status,
      Yc = cB => "BI" === cB.status,
      Lc = cB => "valid" === cB.status,
      gB = cB => "undefined" !== typeof Promise && cB instanceof Promise;
    var Uc;
    ! function(cB) {
      cB.errToObj = cB => "string" === typeof cB ? {
        message: cB
      } : cB || {}, cB.toString = cB => "string" === typeof cB ? cB : null === cB || void 0 === cB ? void 0 : cB.message
    }(Uc || (Uc = {}));
    class bB {
      constructor(cB, Bc, nc, Vc) {
        this._cachedPath = [], this.parent = cB, this.data = Bc, this._path = nc, this._key = Vc
      }
      get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
      }
    }
    const Zc = (cB, Bc) => {
      if (Lc(Bc)) return {
        success: !0,
        data: Bc.value
      };
      if (!cB.common.issues.length) throw new Error("Validation failed but no issues detected.");
      return {
        success: !1,
        get error() {
          if (this._error) return this._error;
          const Bc = new fc(cB.common.issues);
          return this._error = Bc, this._error
        }
      }
    };

    function Qc(cB) {
      if (!cB) return {};
      const {
        errorMap: Bc,
        invalid_type_error: nc,
        required_error: Vc,
        description: Ic
      } = cB;
      if (Bc && (nc || Vc)) throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
      if (Bc) return {
        errorMap: Bc,
        description: Ic
      };
      return {
        errorMap: (cB, Bc) => "invalid_type" !== cB.code ? {
          message: Bc.defaultError
        } : "undefined" === typeof Bc.data ? {
          message: null !== Vc && void 0 !== Vc ? Vc : Bc.defaultError
        } : {
          message: null !== nc && void 0 !== nc ? nc : Bc.defaultError
        },
        description: Ic
      }
    }
    class Cc {
      constructor(cB) {
        this.spa = this.safeParseAsync, this._def = cB, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
      }
      get description() {
        return this._def.description
      }
      _getType(cB) {
        return Oc(cB.data)
      }
      _getOrReturnCtx(cB, Bc) {
        return Bc || {
          common: cB.parent.common,
          data: cB.data,
          parsedType: Oc(cB.data),
          schemaErrorMap: this._def.errorMap,
          path: cB.path,
          parent: cB.parent
        }
      }
      _processInputParams(cB) {
        return {
          status: new zB,
          ctx: {
            common: cB.parent.common,
            data: cB.data,
            parsedType: Oc(cB.data),
            schemaErrorMap: this._def.errorMap,
            path: cB.path,
            parent: cB.parent
          }
        }
      }
      _parseSync(cB) {
        const Bc = this._parse(cB);
        if (gB(Bc)) throw new Error("Synchronous parse encountered promise.");
        return Bc
      }
      _parseAsync(cB) {
        const Bc = this._parse(cB);
        return Promise.resolve(Bc)
      }
      parse(cB, Bc) {
        const nc = this.safeParse(cB, Bc);
        if (nc.success) return nc.data;
        throw nc.error
      }
      safeParse(cB, Bc) {
        var nc;
        const Vc = {
            common: {
              issues: [],
              async: null !== (nc = null === Bc || void 0 === Bc ? void 0 : Bc.async) && void 0 !== nc && nc,
              contextualErrorMap: null === Bc || void 0 === Bc ? void 0 : Bc.errorMap
            },
            path: (null === Bc || void 0 === Bc ? void 0 : Bc.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: cB,
            parsedType: Oc(cB)
          },
          Ic = this._parseSync({
            data: cB,
            path: Vc.path,
            parent: Vc
          });
        return Zc(Vc, Ic)
      }
      async parseAsync(cB, Bc) {
        const nc = await this.safeParseAsync(cB, Bc);
        if (nc.success) return nc.data;
        throw nc.error
      }
      async safeParseAsync(cB, Bc) {
        const nc = {
            common: {
              issues: [],
              contextualErrorMap: null === Bc || void 0 === Bc ? void 0 : Bc.errorMap,
              async: !0
            },
            path: (null === Bc || void 0 === Bc ? void 0 : Bc.path) || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: cB,
            parsedType: Oc(cB)
          },
          Vc = this._parse({
            data: cB,
            path: nc.path,
            parent: nc
          }),
          Ic = await (gB(Vc) ? Vc : Promise.resolve(Vc));
        return Zc(nc, Ic)
      }
      refine(cB, Bc) {
        const nc = cB => "string" === typeof Bc || "undefined" === typeof Bc ? {
          message: Bc
        } : "function" === typeof Bc ? Bc(cB) : Bc;
        return this._refinement(((Bc, Vc) => {
          const Ic = cB(Bc),
            rB = () => Vc.addIssue({
              code: Tc.custom,
              ...nc(Bc)
            });
          return "undefined" !== typeof Promise && Ic instanceof Promise ? Ic.then((cB => !!cB || (rB(), !1))) : !!Ic || (rB(), !1)
        }))
      }
      refinement(cB, Bc) {
        return this._refinement(((nc, Vc) => !!cB(nc) || (Vc.addIssue("function" === typeof Bc ? Bc(nc, Vc) : Bc), !1)))
      }
      _refinement(cB) {
        return new pB({
          schema: this,
          typeName: vn.ZodEffects,
          effect: {
            type: "refinement",
            refinement: cB
          }
        })
      }
      superRefine(cB) {
        return this._refinement(cB)
      }
      optional() {
        return hB.create(this, this._def)
      }
      nullable() {
        return an.create(this, this._def)
      }
      nullish() {
        return this.nullable().optional()
      }
      array() {
        return BB.create(this, this._def)
      }
      promise() {
        return zn.create(this, this._def)
      }
      or(cB) {
        return IB.create([this, cB], this._def)
      }
      and(cB) {
        return MB.create(this, cB, this._def)
      }
      transform(cB) {
        return new pB({
          ...Qc(this._def),
          schema: this,
          typeName: vn.ZodEffects,
          effect: {
            type: "transform",
            transform: cB
          }
        })
      }
      default (cB) {
        const Bc = "function" === typeof cB ? cB : () => cB;
        return new lB({
          ...Qc(this._def),
          innerType: this,
          defaultValue: Bc,
          typeName: vn.ZodDefault
        })
      }
      brand() {
        return new UB({
          typeName: vn.ZodBranded,
          type: this,
          ...Qc(this._def)
        })
      } catch (cB) {
        const Bc = "function" === typeof cB ? cB : () => cB;
        return new YB({
          ...Qc(this._def),
          innerType: this,
          catchValue: Bc,
          typeName: vn.ZodCatch
        })
      }
      describe(cB) {
        return new(0, this.constructor)({
          ...this._def,
          description: cB
        })
      }
      pipe(cB) {
        return bn.create(this, cB)
      }
      readonly() {
        return ZB.create(this)
      }
      isOptional() {
        return this.safeParse(void 0).success
      }
      isNullable() {
        return this.safeParse(null).success
      }
    }
    const vB = /^c[^\s-]{8,}$/i,
      Dc = /^[a-z][a-z0-9]*$/,
      Nc = /^[0-9A-HJKMNP-TV-Z]{26}$/,
      Ec = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
      oc = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    let Wc;
    const wc = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
      kB = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;
    class Xc extends Cc {
      _parse(cB) {
        this._def.coerce && (cB.data = String(cB.data));
        if (this._getType(cB) !== qB.string) {
          const Bc = this._getOrReturnCtx(cB);
          return yB(Bc, {
            code: Tc.invalid_type,
            expected: qB.string,
            received: Bc.parsedType
          }), pc
        }
        const Bc = new zB;
        let nc;
        for (const Mc of this._def.checks)
          if ("min" === Mc.kind) cB.data.length < Mc.value && (nc = this._getOrReturnCtx(cB, nc), yB(nc, {
            code: Tc.too_small,
            minimum: Mc.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: Mc.message
          }), Bc.BI());
          else if ("max" === Mc.kind) cB.data.length > Mc.value && (nc = this._getOrReturnCtx(cB, nc), yB(nc, {
          code: Tc.too_big,
          maximum: Mc.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: Mc.message
        }), Bc.BI());
        else if ("length" === Mc.kind) {
          const Vc = cB.data.length > Mc.value,
            Ic = cB.data.length < Mc.value;
          (Vc || Ic) && (nc = this._getOrReturnCtx(cB, nc), Vc ? yB(nc, {
            code: Tc.too_big,
            maximum: Mc.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: Mc.message
          }) : Ic && yB(nc, {
            code: Tc.too_small,
            minimum: Mc.value,
            type: "string",
            inclusive: !0,
            exact: !0,
            message: Mc.message
          }), Bc.BI())
        } else if ("email" === Mc.kind) oc.test(cB.data) || (nc = this._getOrReturnCtx(cB, nc), yB(nc, {
          validation: "email",
          code: Tc.invalid_string,
          message: Mc.message
        }), Bc.BI());
        else if ("emoji" === Mc.kind) Wc || (Wc = new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), Wc.test(cB.data) || (nc = this._getOrReturnCtx(cB, nc), yB(nc, {
          validation: "emoji",
          code: Tc.invalid_string,
          message: Mc.message
        }), Bc.BI());
        else if ("uuid" === Mc.kind) Ec.test(cB.data) || (nc = this._getOrReturnCtx(cB, nc), yB(nc, {
          validation: "uuid",
          code: Tc.invalid_string,
          message: Mc.message
        }), Bc.BI());
        else if ("cuid" === Mc.kind) vB.test(cB.data) || (nc = this._getOrReturnCtx(cB, nc), yB(nc, {
          validation: "cuid",
          code: Tc.invalid_string,
          message: Mc.message
        }), Bc.BI());
        else if ("cuid2" === Mc.kind) Dc.test(cB.data) || (nc = this._getOrReturnCtx(cB, nc), yB(nc, {
          validation: "cuid2",
          code: Tc.invalid_string,
          message: Mc.message
        }), Bc.BI());
        else if ("ulid" === Mc.kind) Nc.test(cB.data) || (nc = this._getOrReturnCtx(cB, nc), yB(nc, {
          validation: "ulid",
          code: Tc.invalid_string,
          message: Mc.message
        }), Bc.BI());
        else if ("url" === Mc.kind) try {
          new URL(cB.data)
        } catch (uc) {
          nc = this._getOrReturnCtx(cB, nc), yB(nc, {
            validation: "url",
            code: Tc.invalid_string,
            message: Mc.message
          }), Bc.BI()
        } else if ("regex" === Mc.kind) {
          Mc.regex.lastIndex = 0;
          Mc.regex.test(cB.data) || (nc = this._getOrReturnCtx(cB, nc), yB(nc, {
            validation: "regex",
            code: Tc.invalid_string,
            message: Mc.message
          }), Bc.BI())
        } else if ("trim" === Mc.kind) cB.data = cB.data.trim();
        else if ("includes" === Mc.kind) cB.data.includes(Mc.value, Mc.position) || (nc = this._getOrReturnCtx(cB, nc), yB(nc, {
          code: Tc.invalid_string,
          validation: {
            includes: Mc.value,
            position: Mc.position
          },
          message: Mc.message
        }), Bc.BI());
        else if ("toLowerCase" === Mc.kind) cB.data = cB.data.toLowerCase();
        else if ("toUpperCase" === Mc.kind) cB.data = cB.data.toUpperCase();
        else if ("startsWith" === Mc.kind) cB.data.startsWith(Mc.value) || (nc = this._getOrReturnCtx(cB, nc), yB(nc, {
          code: Tc.invalid_string,
          validation: {
            startsWith: Mc.value
          },
          message: Mc.message
        }), Bc.BI());
        else if ("endsWith" === Mc.kind) cB.data.endsWith(Mc.value) || (nc = this._getOrReturnCtx(cB, nc), yB(nc, {
          code: Tc.invalid_string,
          validation: {
            endsWith: Mc.value
          },
          message: Mc.message
        }), Bc.BI());
        else if ("datetime" === Mc.kind) {
          ((rB = Mc).precision ? rB.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${rB.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${rB.precision}}Z$`) : 0 === rB.precision ? rB.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : rB.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$")).test(cB.data) || (nc = this._getOrReturnCtx(cB, nc), yB(nc, {
            code: Tc.invalid_string,
            validation: "datetime",
            message: Mc.message
          }), Bc.BI())
        } else "ip" === Mc.kind ? (Vc = cB.data, ("v4" !== (Ic = Mc.version) && Ic || !wc.test(Vc)) && ("v6" !== Ic && Ic || !kB.test(Vc)) && (nc = this._getOrReturnCtx(cB, nc), yB(nc, {
          validation: "ip",
          code: Tc.invalid_string,
          message: Mc.message
        }), Bc.BI())) : sc.assertNever(Mc);
        var Vc, Ic, rB;
        return {
          status: Bc.value,
          value: cB.data
        }
      }
      _regex(cB, Bc, nc) {
        return this.refinement((Bc => cB.test(Bc)), {
          validation: Bc,
          code: Tc.invalid_string,
          ...Uc.errToObj(nc)
        })
      }
      _addCheck(cB) {
        return new Xc({
          ...this._def,
          checks: [...this._def.checks, cB]
        })
      }
      email(cB) {
        return this._addCheck({
          kind: "email",
          ...Uc.errToObj(cB)
        })
      }
      url(cB) {
        return this._addCheck({
          kind: "url",
          ...Uc.errToObj(cB)
        })
      }
      emoji(cB) {
        return this._addCheck({
          kind: "emoji",
          ...Uc.errToObj(cB)
        })
      }
      uuid(cB) {
        return this._addCheck({
          kind: "uuid",
          ...Uc.errToObj(cB)
        })
      }
      cuid(cB) {
        return this._addCheck({
          kind: "cuid",
          ...Uc.errToObj(cB)
        })
      }
      cuid2(cB) {
        return this._addCheck({
          kind: "cuid2",
          ...Uc.errToObj(cB)
        })
      }
      ulid(cB) {
        return this._addCheck({
          kind: "ulid",
          ...Uc.errToObj(cB)
        })
      }
      ip(cB) {
        return this._addCheck({
          kind: "ip",
          ...Uc.errToObj(cB)
        })
      }
      datetime(cB) {
        var Bc;
        return "string" === typeof cB ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          message: cB
        }) : this._addCheck({
          kind: "datetime",
          precision: "undefined" === typeof(null === cB || void 0 === cB ? void 0 : cB.precision) ? null : null === cB || void 0 === cB ? void 0 : cB.precision,
          offset: null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.offset) && void 0 !== Bc && Bc,
          ...Uc.errToObj(null === cB || void 0 === cB ? void 0 : cB.message)
        })
      }
      regex(cB, Bc) {
        return this._addCheck({
          kind: "regex",
          regex: cB,
          ...Uc.errToObj(Bc)
        })
      }
      includes(cB, Bc) {
        return this._addCheck({
          kind: "includes",
          value: cB,
          position: null === Bc || void 0 === Bc ? void 0 : Bc.position,
          ...Uc.errToObj(null === Bc || void 0 === Bc ? void 0 : Bc.message)
        })
      }
      startsWith(cB, Bc) {
        return this._addCheck({
          kind: "startsWith",
          value: cB,
          ...Uc.errToObj(Bc)
        })
      }
      endsWith(cB, Bc) {
        return this._addCheck({
          kind: "endsWith",
          value: cB,
          ...Uc.errToObj(Bc)
        })
      }
      min(cB, Bc) {
        return this._addCheck({
          kind: "min",
          value: cB,
          ...Uc.errToObj(Bc)
        })
      }
      max(cB, Bc) {
        return this._addCheck({
          kind: "max",
          value: cB,
          ...Uc.errToObj(Bc)
        })
      }
      length(cB, Bc) {
        return this._addCheck({
          kind: "length",
          value: cB,
          ...Uc.errToObj(Bc)
        })
      }
      nonempty(cB) {
        return this.min(1, Uc.errToObj(cB))
      }
      trim() {
        return new Xc({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "trim"
          }]
        })
      }
      toLowerCase() {
        return new Xc({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toLowerCase"
          }]
        })
      }
      toUpperCase() {
        return new Xc({
          ...this._def,
          checks: [...this._def.checks, {
            kind: "toUpperCase"
          }]
        })
      }
      get isDatetime() {
        return !!this._def.checks.find((cB => "datetime" === cB.kind))
      }
      get isEmail() {
        return !!this._def.checks.find((cB => "email" === cB.kind))
      }
      get isURL() {
        return !!this._def.checks.find((cB => "url" === cB.kind))
      }
      get isEmoji() {
        return !!this._def.checks.find((cB => "emoji" === cB.kind))
      }
      get isUUID() {
        return !!this._def.checks.find((cB => "uuid" === cB.kind))
      }
      get isCUID() {
        return !!this._def.checks.find((cB => "cuid" === cB.kind))
      }
      get isCUID2() {
        return !!this._def.checks.find((cB => "cuid2" === cB.kind))
      }
      get isULID() {
        return !!this._def.checks.find((cB => "ulid" === cB.kind))
      }
      get isIP() {
        return !!this._def.checks.find((cB => "ip" === cB.kind))
      }
      get minLength() {
        let cB = null;
        for (const Bc of this._def.checks) "min" === Bc.kind && (null === cB || Bc.value > cB) && (cB = Bc.value);
        return cB
      }
      get maxLength() {
        let cB = null;
        for (const Bc of this._def.checks) "max" === Bc.kind && (null === cB || Bc.value < cB) && (cB = Bc.value);
        return cB
      }
    }

    function Hc(cB, Bc) {
      const nc = (cB.toString().split(".")[1] || "").length,
        Vc = (Bc.toString().split(".")[1] || "").length,
        Ic = nc > Vc ? nc : Vc;
      return parseInt(cB.toFixed(Ic).replace(".", "")) % parseInt(Bc.toFixed(Ic).replace(".", "")) / Math.pow(10, Ic)
    }
    Xc.create = cB => {
      var Bc;
      return new Xc({
        checks: [],
        typeName: vn.ZodString,
        coerce: null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.coerce) && void 0 !== Bc && Bc,
        ...Qc(cB)
      })
    };
    class Fc extends Cc {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
      }
      _parse(cB) {
        this._def.coerce && (cB.data = Number(cB.data));
        if (this._getType(cB) !== qB.number) {
          const Bc = this._getOrReturnCtx(cB);
          return yB(Bc, {
            code: Tc.invalid_type,
            expected: qB.number,
            received: Bc.parsedType
          }), pc
        }
        let Bc;
        const nc = new zB;
        for (const Vc of this._def.checks)
          if ("int" === Vc.kind) sc.isInteger(cB.data) || (Bc = this._getOrReturnCtx(cB, Bc), yB(Bc, {
            code: Tc.invalid_type,
            expected: "integer",
            received: "float",
            message: Vc.message
          }), nc.BI());
          else if ("min" === Vc.kind) {
          (Vc.inclusive ? cB.data < Vc.value : cB.data <= Vc.value) && (Bc = this._getOrReturnCtx(cB, Bc), yB(Bc, {
            code: Tc.too_small,
            minimum: Vc.value,
            type: "number",
            inclusive: Vc.inclusive,
            exact: !1,
            message: Vc.message
          }), nc.BI())
        } else if ("max" === Vc.kind) {
          (Vc.inclusive ? cB.data > Vc.value : cB.data >= Vc.value) && (Bc = this._getOrReturnCtx(cB, Bc), yB(Bc, {
            code: Tc.too_big,
            maximum: Vc.value,
            type: "number",
            inclusive: Vc.inclusive,
            exact: !1,
            message: Vc.message
          }), nc.BI())
        } else "multipleOf" === Vc.kind ? 0 !== Hc(cB.data, Vc.value) && (Bc = this._getOrReturnCtx(cB, Bc), yB(Bc, {
          code: Tc.not_multiple_of,
          multipleOf: Vc.value,
          message: Vc.message
        }), nc.BI()) : "finite" === Vc.kind ? Number.isFinite(cB.data) || (Bc = this._getOrReturnCtx(cB, Bc), yB(Bc, {
          code: Tc.not_finite,
          message: Vc.message
        }), nc.BI()) : sc.assertNever(Vc);
        return {
          status: nc.value,
          value: cB.data
        }
      }
      gte(cB, Bc) {
        return this.setLimit("min", cB, !0, Uc.toString(Bc))
      }
      gt(cB, Bc) {
        return this.setLimit("min", cB, !1, Uc.toString(Bc))
      }
      lte(cB, Bc) {
        return this.setLimit("max", cB, !0, Uc.toString(Bc))
      }
      lt(cB, Bc) {
        return this.setLimit("max", cB, !1, Uc.toString(Bc))
      }
      setLimit(cB, Bc, nc, Vc) {
        return new Fc({
          ...this._def,
          checks: [...this._def.checks, {
            kind: cB,
            value: Bc,
            inclusive: nc,
            message: Uc.toString(Vc)
          }]
        })
      }
      _addCheck(cB) {
        return new Fc({
          ...this._def,
          checks: [...this._def.checks, cB]
        })
      }
      int(cB) {
        return this._addCheck({
          kind: "int",
          message: Uc.toString(cB)
        })
      }
      positive(cB) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !1,
          message: Uc.toString(cB)
        })
      }
      negative(cB) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !1,
          message: Uc.toString(cB)
        })
      }
      nonpositive(cB) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: !0,
          message: Uc.toString(cB)
        })
      }
      nonnegative(cB) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: !0,
          message: Uc.toString(cB)
        })
      }
      multipleOf(cB, Bc) {
        return this._addCheck({
          kind: "multipleOf",
          value: cB,
          message: Uc.toString(Bc)
        })
      }
      finite(cB) {
        return this._addCheck({
          kind: "finite",
          message: Uc.toString(cB)
        })
      }
      safe(cB) {
        return this._addCheck({
          kind: "min",
          inclusive: !0,
          value: Number.MIN_SAFE_INTEGER,
          message: Uc.toString(cB)
        })._addCheck({
          kind: "max",
          inclusive: !0,
          value: Number.MAX_SAFE_INTEGER,
          message: Uc.toString(cB)
        })
      }
      get minValue() {
        let cB = null;
        for (const Bc of this._def.checks) "min" === Bc.kind && (null === cB || Bc.value > cB) && (cB = Bc.value);
        return cB
      }
      get maxValue() {
        let cB = null;
        for (const Bc of this._def.checks) "max" === Bc.kind && (null === cB || Bc.value < cB) && (cB = Bc.value);
        return cB
      }
      get isInt() {
        return !!this._def.checks.find((cB => "int" === cB.kind || "multipleOf" === cB.kind && sc.isInteger(cB.value)))
      }
      get isFinite() {
        let cB = null,
          Bc = null;
        for (const nc of this._def.checks) {
          if ("finite" === nc.kind || "int" === nc.kind || "multipleOf" === nc.kind) return !0;
          "min" === nc.kind ? (null === Bc || nc.value > Bc) && (Bc = nc.value) : "max" === nc.kind && (null === cB || nc.value < cB) && (cB = nc.value)
        }
        return Number.isFinite(Bc) && Number.isFinite(cB)
      }
    }
    Fc.create = cB => new Fc({
      checks: [],
      typeName: vn.ZodNumber,
      coerce: (null === cB || void 0 === cB ? void 0 : cB.coerce) || !1,
      ...Qc(cB)
    });
    class Jc extends Cc {
      constructor() {
        super(...arguments), this.min = this.gte, this.max = this.lte
      }
      _parse(cB) {
        this._def.coerce && (cB.data = BigInt(cB.data));
        if (this._getType(cB) !== qB.bigint) {
          const Bc = this._getOrReturnCtx(cB);
          return yB(Bc, {
            code: Tc.invalid_type,
            expected: qB.bigint,
            received: Bc.parsedType
          }), pc
        }
        let Bc;
        const nc = new zB;
        for (const Vc of this._def.checks)
          if ("min" === Vc.kind) {
            (Vc.inclusive ? cB.data < Vc.value : cB.data <= Vc.value) && (Bc = this._getOrReturnCtx(cB, Bc), yB(Bc, {
              code: Tc.too_small,
              type: "bigint",
              minimum: Vc.value,
              inclusive: Vc.inclusive,
              message: Vc.message
            }), nc.BI())
          } else if ("max" === Vc.kind) {
          (Vc.inclusive ? cB.data > Vc.value : cB.data >= Vc.value) && (Bc = this._getOrReturnCtx(cB, Bc), yB(Bc, {
            code: Tc.too_big,
            type: "bigint",
            maximum: Vc.value,
            inclusive: Vc.inclusive,
            message: Vc.message
          }), nc.BI())
        } else "multipleOf" === Vc.kind ? cB.data % Vc.value !== BigInt(0) && (Bc = this._getOrReturnCtx(cB, Bc), yB(Bc, {
          code: Tc.not_multiple_of,
          multipleOf: Vc.value,
          message: Vc.message
        }), nc.BI()) : sc.assertNever(Vc);
        return {
          status: nc.value,
          value: cB.data
        }
      }
      gte(cB, Bc) {
        return this.setLimit("min", cB, !0, Uc.toString(Bc))
      }
      gt(cB, Bc) {
        return this.setLimit("min", cB, !1, Uc.toString(Bc))
      }
      lte(cB, Bc) {
        return this.setLimit("max", cB, !0, Uc.toString(Bc))
      }
      lt(cB, Bc) {
        return this.setLimit("max", cB, !1, Uc.toString(Bc))
      }
      setLimit(cB, Bc, nc, Vc) {
        return new Jc({
          ...this._def,
          checks: [...this._def.checks, {
            kind: cB,
            value: Bc,
            inclusive: nc,
            message: Uc.toString(Vc)
          }]
        })
      }
      _addCheck(cB) {
        return new Jc({
          ...this._def,
          checks: [...this._def.checks, cB]
        })
      }
      positive(cB) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !1,
          message: Uc.toString(cB)
        })
      }
      negative(cB) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !1,
          message: Uc.toString(cB)
        })
      }
      nonpositive(cB) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: !0,
          message: Uc.toString(cB)
        })
      }
      nonnegative(cB) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: !0,
          message: Uc.toString(cB)
        })
      }
      multipleOf(cB, Bc) {
        return this._addCheck({
          kind: "multipleOf",
          value: cB,
          message: Uc.toString(Bc)
        })
      }
      get minValue() {
        let cB = null;
        for (const Bc of this._def.checks) "min" === Bc.kind && (null === cB || Bc.value > cB) && (cB = Bc.value);
        return cB
      }
      get maxValue() {
        let cB = null;
        for (const Bc of this._def.checks) "max" === Bc.kind && (null === cB || Bc.value < cB) && (cB = Bc.value);
        return cB
      }
    }
    Jc.create = cB => {
      var Bc;
      return new Jc({
        checks: [],
        typeName: vn.ZodBigInt,
        coerce: null !== (Bc = null === cB || void 0 === cB ? void 0 : cB.coerce) && void 0 !== Bc && Bc,
        ...Qc(cB)
      })
    };
    class jB extends Cc {
      _parse(cB) {
        this._def.coerce && (cB.data = Boolean(cB.data));
        if (this._getType(cB) !== qB.boolean) {
          const Bc = this._getOrReturnCtx(cB);
          return yB(Bc, {
            code: Tc.invalid_type,
            expected: qB.boolean,
            received: Bc.parsedType
          }), pc
        }
        return aB(cB.data)
      }
    }
    jB.create = cB => new jB({
      typeName: vn.ZodBoolean,
      coerce: (null === cB || void 0 === cB ? void 0 : cB.coerce) || !1,
      ...Qc(cB)
    });
    class Rc extends Cc {
      _parse(cB) {
        this._def.coerce && (cB.data = new Date(cB.data));
        if (this._getType(cB) !== qB.date) {
          const Bc = this._getOrReturnCtx(cB);
          return yB(Bc, {
            code: Tc.invalid_type,
            expected: qB.date,
            received: Bc.parsedType
          }), pc
        }
        if (isNaN(cB.data.getTime())) {
          return yB(this._getOrReturnCtx(cB), {
            code: Tc.invalid_date
          }), pc
        }
        const Bc = new zB;
        let nc;
        for (const Vc of this._def.checks) "min" === Vc.kind ? cB.data.getTime() < Vc.value && (nc = this._getOrReturnCtx(cB, nc), yB(nc, {
          code: Tc.too_small,
          message: Vc.message,
          inclusive: !0,
          exact: !1,
          minimum: Vc.value,
          type: "date"
        }), Bc.BI()) : "max" === Vc.kind ? cB.data.getTime() > Vc.value && (nc = this._getOrReturnCtx(cB, nc), yB(nc, {
          code: Tc.too_big,
          message: Vc.message,
          inclusive: !0,
          exact: !1,
          maximum: Vc.value,
          type: "date"
        }), Bc.BI()) : sc.assertNever(Vc);
        return {
          status: Bc.value,
          value: new Date(cB.data.getTime())
        }
      }
      _addCheck(cB) {
        return new Rc({
          ...this._def,
          checks: [...this._def.checks, cB]
        })
      }
      min(cB, Bc) {
        return this._addCheck({
          kind: "min",
          value: cB.getTime(),
          message: Uc.toString(Bc)
        })
      }
      max(cB, Bc) {
        return this._addCheck({
          kind: "max",
          value: cB.getTime(),
          message: Uc.toString(Bc)
        })
      }
      get minDate() {
        let cB = null;
        for (const Bc of this._def.checks) "min" === Bc.kind && (null === cB || Bc.value > cB) && (cB = Bc.value);
        return null != cB ? new Date(cB) : null
      }
      get maxDate() {
        let cB = null;
        for (const Bc of this._def.checks) "max" === Bc.kind && (null === cB || Bc.value < cB) && (cB = Bc.value);
        return null != cB ? new Date(cB) : null
      }
    }
    Rc.create = cB => new Rc({
      checks: [],
      coerce: (null === cB || void 0 === cB ? void 0 : cB.coerce) || !1,
      typeName: vn.ZodDate,
      ...Qc(cB)
    });
    class iB extends Cc {
      _parse(cB) {
        if (this._getType(cB) !== qB.symbol) {
          const Bc = this._getOrReturnCtx(cB);
          return yB(Bc, {
            code: Tc.invalid_type,
            expected: qB.symbol,
            received: Bc.parsedType
          }), pc
        }
        return aB(cB.data)
      }
    }
    iB.create = cB => new iB({
      typeName: vn.ZodSymbol,
      ...Qc(cB)
    });
    class Kc extends Cc {
      _parse(cB) {
        if (this._getType(cB) !== qB.undefined) {
          const Bc = this._getOrReturnCtx(cB);
          return yB(Bc, {
            code: Tc.invalid_type,
            expected: qB.undefined,
            received: Bc.parsedType
          }), pc
        }
        return aB(cB.data)
      }
    }
    Kc.create = cB => new Kc({
      typeName: vn.ZodUndefined,
      ...Qc(cB)
    });
    class xB extends Cc {
      _parse(cB) {
        if (this._getType(cB) !== qB.null) {
          const Bc = this._getOrReturnCtx(cB);
          return yB(Bc, {
            code: Tc.invalid_type,
            expected: qB.null,
            received: Bc.parsedType
          }), pc
        }
        return aB(cB.data)
      }
    }
    xB.create = cB => new xB({
      typeName: vn.ZodNull,
      ...Qc(cB)
    });
    class dc extends Cc {
      constructor() {
        super(...arguments), this._any = !0
      }
      _parse(cB) {
        return aB(cB.data)
      }
    }
    dc.create = cB => new dc({
      typeName: vn.ZodAny,
      ...Qc(cB)
    });
    class Ac extends Cc {
      constructor() {
        super(...arguments), this._unknown = !0
      }
      _parse(cB) {
        return aB(cB.data)
      }
    }
    Ac.create = cB => new Ac({
      typeName: vn.ZodUnknown,
      ...Qc(cB)
    });
    class Gc extends Cc {
      _parse(cB) {
        const Bc = this._getOrReturnCtx(cB);
        return yB(Bc, {
          code: Tc.invalid_type,
          expected: qB.never,
          received: Bc.parsedType
        }), pc
      }
    }
    Gc.create = cB => new Gc({
      typeName: vn.ZodNever,
      ...Qc(cB)
    });
    class cn extends Cc {
      _parse(cB) {
        if (this._getType(cB) !== qB.undefined) {
          const Bc = this._getOrReturnCtx(cB);
          return yB(Bc, {
            code: Tc.invalid_type,
            expected: qB.void,
            received: Bc.parsedType
          }), pc
        }
        return aB(cB.data)
      }
    }
    cn.create = cB => new cn({
      typeName: vn.ZodVoid,
      ...Qc(cB)
    });
    class BB extends Cc {
      _parse(cB) {
        const {
          ctx: Bc,
          status: nc
        } = this._processInputParams(cB), Vc = this._def;
        if (Bc.parsedType !== qB.array) return yB(Bc, {
          code: Tc.invalid_type,
          expected: qB.array,
          received: Bc.parsedType
        }), pc;
        if (null !== Vc.exactLength) {
          const cB = Bc.data.length > Vc.exactLength.value,
            Ic = Bc.data.length < Vc.exactLength.value;
          (cB || Ic) && (yB(Bc, {
            code: cB ? Tc.too_big : Tc.too_small,
            minimum: Ic ? Vc.exactLength.value : void 0,
            maximum: cB ? Vc.exactLength.value : void 0,
            type: "array",
            inclusive: !0,
            exact: !0,
            message: Vc.exactLength.message
          }), nc.BI())
        }
        if (null !== Vc.minLength && Bc.data.length < Vc.minLength.value && (yB(Bc, {
            code: Tc.too_small,
            minimum: Vc.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Vc.minLength.message
          }), nc.BI()), null !== Vc.maxLength && Bc.data.length > Vc.maxLength.value && (yB(Bc, {
            code: Tc.too_big,
            maximum: Vc.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: Vc.maxLength.message
          }), nc.BI()), Bc.common.async) return Promise.all([...Bc.data].map(((cB, nc) => Vc.type._parseAsync(new bB(Bc, cB, Bc.path, nc))))).then((cB => zB.mergeArray(nc, cB)));
        const Ic = [...Bc.data].map(((cB, nc) => Vc.type._parseSync(new bB(Bc, cB, Bc.path, nc))));
        return zB.mergeArray(nc, Ic)
      }
      get element() {
        return this._def.type
      }
      min(cB, Bc) {
        return new BB({
          ...this._def,
          minLength: {
            value: cB,
            message: Uc.toString(Bc)
          }
        })
      }
      max(cB, Bc) {
        return new BB({
          ...this._def,
          maxLength: {
            value: cB,
            message: Uc.toString(Bc)
          }
        })
      }
      length(cB, Bc) {
        return new BB({
          ...this._def,
          exactLength: {
            value: cB,
            message: Uc.toString(Bc)
          }
        })
      }
      nonempty(cB) {
        return this.min(1, cB)
      }
    }

    function nB(cB) {
      if (cB instanceof VB) {
        const Bc = {};
        for (const nc in cB.shape) {
          const Vc = cB.shape[nc];
          Bc[nc] = hB.create(nB(Vc))
        }
        return new VB({
          ...cB._def,
          shape: () => Bc
        })
      }
      return cB instanceof BB ? new BB({
        ...cB._def,
        type: nB(cB.element)
      }) : cB instanceof hB ? hB.create(nB(cB.unwrap())) : cB instanceof an ? an.create(nB(cB.unwrap())) : cB instanceof PB ? PB.create(cB.items.map((cB => nB(cB)))) : cB
    }
    BB.create = (cB, Bc) => new BB({
      type: cB,
      minLength: null,
      maxLength: null,
      exactLength: null,
      typeName: vn.ZodArray,
      ...Qc(Bc)
    });
    class VB extends Cc {
      constructor() {
        super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
      }
      _getCached() {
        if (null !== this._cached) return this._cached;
        const cB = this._def.shape(),
          Bc = sc.objectKeys(cB);
        return this._cached = {
          shape: cB,
          keys: Bc
        }
      }
      _parse(cB) {
        if (this._getType(cB) !== qB.object) {
          const Bc = this._getOrReturnCtx(cB);
          return yB(Bc, {
            code: Tc.invalid_type,
            expected: qB.object,
            received: Bc.parsedType
          }), pc
        }
        const {
          status: Bc,
          ctx: nc
        } = this._processInputParams(cB), {
          shape: Vc,
          keys: Ic
        } = this._getCached(), rB = [];
        if (!(this._def.catchall instanceof Gc && "strip" === this._def.unknownKeys))
          for (const sc in nc.data) Ic.includes(sc) || rB.push(sc);
        const uc = [];
        for (const sc of Ic) {
          const cB = Vc[sc],
            Bc = nc.data[sc];
          uc.push({
            key: {
              status: "valid",
              value: sc
            },
            value: cB._parse(new bB(nc, Bc, nc.path, sc)),
            alwaysSet: sc in nc.data
          })
        }
        if (this._def.catchall instanceof Gc) {
          const cB = this._def.unknownKeys;
          if ("passthrough" === cB)
            for (const Bc of rB) uc.push({
              key: {
                status: "valid",
                value: Bc
              },
              value: {
                status: "valid",
                value: nc.data[Bc]
              }
            });
          else if ("strict" === cB) rB.length > 0 && (yB(nc, {
            code: Tc.unrecognized_keys,
            keys: rB
          }), Bc.BI());
          else if ("strip" !== cB) throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
          const cB = this._def.catchall;
          for (const Bc of rB) {
            const Vc = nc.data[Bc];
            uc.push({
              key: {
                status: "valid",
                value: Bc
              },
              value: cB._parse(new bB(nc, Vc, nc.path, Bc)),
              alwaysSet: Bc in nc.data
            })
          }
        }
        return nc.common.async ? Promise.resolve().then((async () => {
          const cB = [];
          for (const Bc of uc) {
            const nc = await Bc.key;
            cB.push({
              key: nc,
              value: await Bc.value,
              alwaysSet: Bc.alwaysSet
            })
          }
          return cB
        })).then((cB => zB.mergeObjectSync(Bc, cB))) : zB.mergeObjectSync(Bc, uc)
      }
      get shape() {
        return this._def.shape()
      }
      strict(cB) {
        return Uc.errToObj, new VB({
          ...this._def,
          unknownKeys: "strict",
          ...void 0 !== cB ? {
            errorMap: (Bc, nc) => {
              var Vc, Ic, rB, uc;
              const sc = null !== (rB = null === (Ic = (Vc = this._def).errorMap) || void 0 === Ic ? void 0 : Ic.call(Vc, Bc, nc).message) && void 0 !== rB ? rB : nc.defaultError;
              return "unrecognized_keys" === Bc.code ? {
                message: null !== (uc = Uc.errToObj(cB).message) && void 0 !== uc ? uc : sc
              } : {
                message: sc
              }
            }
          } : {}
        })
      }
      strip() {
        return new VB({
          ...this._def,
          unknownKeys: "strip"
        })
      }
      passthrough() {
        return new VB({
          ...this._def,
          unknownKeys: "passthrough"
        })
      }
      extend(cB) {
        return new VB({
          ...this._def,
          shape: () => ({
            ...this._def.shape(),
            ...cB
          })
        })
      }
      merge(cB) {
        return new VB({
          unknownKeys: cB._def.unknownKeys,
          catchall: cB._def.catchall,
          shape: () => ({
            ...this._def.shape(),
            ...cB._def.shape()
          }),
          typeName: vn.ZodObject
        })
      }
      setKey(cB, Bc) {
        return this.augment({
          [cB]: Bc
        })
      }
      catchall(cB) {
        return new VB({
          ...this._def,
          catchall: cB
        })
      }
      Vn(cB) {
        const Bc = {};
        return sc.objectKeys(cB).forEach((nc => {
          cB[nc] && this.shape[nc] && (Bc[nc] = this.shape[nc])
        })), new VB({
          ...this._def,
          shape: () => Bc
        })
      }
      omit(cB) {
        const Bc = {};
        return sc.objectKeys(this.shape).forEach((nc => {
          cB[nc] || (Bc[nc] = this.shape[nc])
        })), new VB({
          ...this._def,
          shape: () => Bc
        })
      }
      deepPartial() {
        return nB(this)
      }
      partial(cB) {
        const Bc = {};
        return sc.objectKeys(this.shape).forEach((nc => {
          const Vc = this.shape[nc];
          cB && !cB[nc] ? Bc[nc] = Vc : Bc[nc] = Vc.optional()
        })), new VB({
          ...this._def,
          shape: () => Bc
        })
      }
      required(cB) {
        const Bc = {};
        return sc.objectKeys(this.shape).forEach((nc => {
          if (cB && !cB[nc]) Bc[nc] = this.shape[nc];
          else {
            let cB = this.shape[nc];
            for (; cB instanceof hB;) cB = cB._def.innerType;
            Bc[nc] = cB
          }
        })), new VB({
          ...this._def,
          shape: () => Bc
        })
      }
      keyof() {
        return tn(sc.objectKeys(this.shape))
      }
    }
    VB.create = (cB, Bc) => new VB({
      shape: () => cB,
      unknownKeys: "strip",
      catchall: Gc.create(),
      typeName: vn.ZodObject,
      ...Qc(Bc)
    }), VB.strictCreate = (cB, Bc) => new VB({
      shape: () => cB,
      unknownKeys: "strict",
      catchall: Gc.create(),
      typeName: vn.ZodObject,
      ...Qc(Bc)
    }), VB.lazycreate = (cB, Bc) => new VB({
      shape: cB,
      unknownKeys: "strip",
      catchall: Gc.create(),
      typeName: vn.ZodObject,
      ...Qc(Bc)
    });
    class IB extends Cc {
      _parse(cB) {
        const {
          ctx: Bc
        } = this._processInputParams(cB), nc = this._def.options;
        if (Bc.common.async) return Promise.all(nc.map((async cB => {
          const nc = {
            ...Bc,
            common: {
              ...Bc.common,
              issues: []
            },
            parent: null
          };
          return {
            result: await cB._parseAsync({
              data: Bc.data,
              path: Bc.path,
              parent: nc
            }),
            ctx: nc
          }
        }))).then((function(cB) {
          for (const Bc of cB)
            if ("valid" === Bc.result.status) return Bc.result;
          for (const Vc of cB)
            if ("BI" === Vc.result.status) return Bc.common.issues.push(...Vc.ctx.common.issues), Vc.result;
          const nc = cB.map((cB => new fc(cB.ctx.common.issues)));
          return yB(Bc, {
            code: Tc.invalid_union,
            unionErrors: nc
          }), pc
        }));
        {
          let cB;
          const Vc = [];
          for (const rB of nc) {
            const nc = {
                ...Bc,
                common: {
                  ...Bc.common,
                  issues: []
                },
                parent: null
              },
              Ic = rB._parseSync({
                data: Bc.data,
                path: Bc.path,
                parent: nc
              });
            if ("valid" === Ic.status) return Ic;
            "BI" !== Ic.status || cB || (cB = {
              result: Ic,
              ctx: nc
            }), nc.common.issues.length && Vc.push(nc.common.issues)
          }
          if (cB) return Bc.common.issues.push(...cB.ctx.common.issues), cB.result;
          const Ic = Vc.map((cB => new fc(cB)));
          return yB(Bc, {
            code: Tc.invalid_union,
            unionErrors: Ic
          }), pc
        }
      }
      get options() {
        return this._def.options
      }
    }
    IB.create = (cB, Bc) => new IB({
      options: cB,
      typeName: vn.ZodUnion,
      ...Qc(Bc)
    });
    const rn = cB => cB instanceof mn ? rn(cB.schema) : cB instanceof pB ? rn(cB.innerType()) : cB instanceof eB ? [cB.value] : cB instanceof SB ? cB.options : cB instanceof yn ? Object.keys(cB.enum) : cB instanceof lB ? rn(cB._def.innerType) : cB instanceof Kc ? [void 0] : cB instanceof xB ? [null] : null;
    class uB extends Cc {
      _parse(cB) {
        const {
          ctx: Bc
        } = this._processInputParams(cB);
        if (Bc.parsedType !== qB.object) return yB(Bc, {
          code: Tc.invalid_type,
          expected: qB.object,
          received: Bc.parsedType
        }), pc;
        const nc = this.discriminator,
          Vc = Bc.data[nc],
          Ic = this.optionsMap.get(Vc);
        return Ic ? Bc.common.async ? Ic._parseAsync({
          data: Bc.data,
          path: Bc.path,
          parent: Bc
        }) : Ic._parseSync({
          data: Bc.data,
          path: Bc.path,
          parent: Bc
        }) : (yB(Bc, {
          code: Tc.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [nc]
        }), pc)
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
      static create(cB, Bc, nc) {
        const Vc = new Map;
        for (const Ic of Bc) {
          const Bc = rn(Ic.shape[cB]);
          if (!Bc) throw new Error(`A discriminator value for key \`${cB}\` could not be extracted from all schema options`);
          for (const nc of Bc) {
            if (Vc.has(nc)) throw new Error(`Discriminator property ${String(cB)} has duplicate value ${String(nc)}`);
            Vc.set(nc, Ic)
          }
        }
        return new uB({
          typeName: vn.ZodDiscriminatedUnion,
          discriminator: cB,
          options: Bc,
          optionsMap: Vc,
          ...Qc(nc)
        })
      }
    }

    function sB(cB, Bc) {
      const nc = Oc(cB),
        Vc = Oc(Bc);
      if (cB === Bc) return {
        valid: !0,
        data: cB
      };
      if (nc === qB.object && Vc === qB.object) {
        const nc = sc.objectKeys(Bc),
          Vc = sc.objectKeys(cB).filter((cB => -1 !== nc.indexOf(cB))),
          Ic = {
            ...cB,
            ...Bc
          };
        for (const rB of Vc) {
          const nc = sB(cB[rB], Bc[rB]);
          if (!nc.valid) return {
            valid: !1
          };
          Ic[rB] = nc.data
        }
        return {
          valid: !0,
          data: Ic
        }
      }
      if (nc === qB.array && Vc === qB.array) {
        if (cB.length !== Bc.length) return {
          valid: !1
        };
        const nc = [];
        for (let Vc = 0; Vc < cB.length; Vc++) {
          const Ic = sB(cB[Vc], Bc[Vc]);
          if (!Ic.valid) return {
            valid: !1
          };
          nc.push(Ic.data)
        }
        return {
          valid: !0,
          data: nc
        }
      }
      return nc === qB.date && Vc === qB.date && +cB === +Bc ? {
        valid: !0,
        data: cB
      } : {
        valid: !1
      }
    }
    class MB extends Cc {
      _parse(cB) {
        const {
          status: Bc,
          ctx: nc
        } = this._processInputParams(cB), Vc = (cB, Vc) => {
          if (lc(cB) || lc(Vc)) return pc;
          const Ic = sB(cB.value, Vc.value);
          return Ic.valid ? ((Yc(cB) || Yc(Vc)) && Bc.BI(), {
            status: Bc.value,
            value: Ic.data
          }) : (yB(nc, {
            code: Tc.invalid_intersection_types
          }), pc)
        };
        return nc.common.async ? Promise.all([this._def.left._parseAsync({
          data: nc.data,
          path: nc.path,
          parent: nc
        }), this._def.right._parseAsync({
          data: nc.data,
          path: nc.path,
          parent: nc
        })]).then((cB => {
          let [Bc, nc] = cB;
          return Vc(Bc, nc)
        })) : Vc(this._def.left._parseSync({
          data: nc.data,
          path: nc.path,
          parent: nc
        }), this._def.right._parseSync({
          data: nc.data,
          path: nc.path,
          parent: nc
        }))
      }
    }
    MB.create = (cB, Bc, nc) => new MB({
      left: cB,
      right: Bc,
      typeName: vn.ZodIntersection,
      ...Qc(nc)
    });
    class PB extends Cc {
      _parse(cB) {
        const {
          status: Bc,
          ctx: nc
        } = this._processInputParams(cB);
        if (nc.parsedType !== qB.array) return yB(nc, {
          code: Tc.invalid_type,
          expected: qB.array,
          received: nc.parsedType
        }), pc;
        if (nc.data.length < this._def.items.length) return yB(nc, {
          code: Tc.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), pc;
        !this._def.rest && nc.data.length > this._def.items.length && (yB(nc, {
          code: Tc.too_big,
          maximum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array"
        }), Bc.BI());
        const Vc = [...nc.data].map(((cB, Bc) => {
          const Vc = this._def.items[Bc] || this._def.rest;
          return Vc ? Vc._parse(new bB(nc, cB, nc.path, Bc)) : null
        })).filter((cB => !!cB));
        return nc.common.async ? Promise.all(Vc).then((cB => zB.mergeArray(Bc, cB))) : zB.mergeArray(Bc, Vc)
      }
      get items() {
        return this._def.items
      }
      rest(cB) {
        return new PB({
          ...this._def,
          rest: cB
        })
      }
    }
    PB.create = (cB, Bc) => {
      if (!Array.isArray(cB)) throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      return new PB({
        items: cB,
        typeName: vn.ZodTuple,
        rest: null,
        ...Qc(Bc)
      })
    };
    class qn extends Cc {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(cB) {
        const {
          status: Bc,
          ctx: nc
        } = this._processInputParams(cB);
        if (nc.parsedType !== qB.object) return yB(nc, {
          code: Tc.invalid_type,
          expected: qB.object,
          received: nc.parsedType
        }), pc;
        const Vc = [],
          Ic = this._def.keyType,
          rB = this._def.valueType;
        for (const uc in nc.data) Vc.push({
          key: Ic._parse(new bB(nc, uc, nc.path, uc)),
          value: rB._parse(new bB(nc, nc.data[uc], nc.path, uc))
        });
        return nc.common.async ? zB.mergeObjectAsync(Bc, Vc) : zB.mergeObjectSync(Bc, Vc)
      }
      get element() {
        return this._def.valueType
      }
      static create(cB, Bc, nc) {
        return new qn(Bc instanceof Cc ? {
          keyType: cB,
          valueType: Bc,
          typeName: vn.ZodRecord,
          ...Qc(nc)
        } : {
          keyType: Xc.create(),
          valueType: cB,
          typeName: vn.ZodRecord,
          ...Qc(Bc)
        })
      }
    }
    class OB extends Cc {
      get keySchema() {
        return this._def.keyType
      }
      get valueSchema() {
        return this._def.valueType
      }
      _parse(cB) {
        const {
          status: Bc,
          ctx: nc
        } = this._processInputParams(cB);
        if (nc.parsedType !== qB.map) return yB(nc, {
          code: Tc.invalid_type,
          expected: qB.map,
          received: nc.parsedType
        }), pc;
        const Vc = this._def.keyType,
          Ic = this._def.valueType,
          rB = [...nc.data.entries()].map(((cB, Bc) => {
            let [rB, uc] = cB;
            return {
              key: Vc._parse(new bB(nc, rB, nc.path, [Bc, "key"])),
              value: Ic._parse(new bB(nc, uc, nc.path, [Bc, "value"]))
            }
          }));
        if (nc.common.async) {
          const cB = new Map;
          return Promise.resolve().then((async () => {
            for (const nc of rB) {
              const Vc = await nc.key,
                Ic = await nc.value;
              if ("aborted" === Vc.status || "aborted" === Ic.status) return pc;
              "BI" !== Vc.status && "BI" !== Ic.status || Bc.BI(), cB.set(Vc.value, Ic.value)
            }
            return {
              status: Bc.value,
              value: cB
            }
          }))
        } {
          const cB = new Map;
          for (const nc of rB) {
            const Vc = nc.key,
              Ic = nc.value;
            if ("aborted" === Vc.status || "aborted" === Ic.status) return pc;
            "BI" !== Vc.status && "BI" !== Ic.status || Bc.BI(), cB.set(Vc.value, Ic.value)
          }
          return {
            status: Bc.value,
            value: cB
          }
        }
      }
    }
    OB.create = (cB, Bc, nc) => new OB({
      valueType: Bc,
      keyType: cB,
      typeName: vn.ZodMap,
      ...Qc(nc)
    });
    class TB extends Cc {
      _parse(cB) {
        const {
          status: Bc,
          ctx: nc
        } = this._processInputParams(cB);
        if (nc.parsedType !== qB.set) return yB(nc, {
          code: Tc.invalid_type,
          expected: qB.set,
          received: nc.parsedType
        }), pc;
        const Vc = this._def;
        null !== Vc.minSize && nc.data.size < Vc.minSize.value && (yB(nc, {
          code: Tc.too_small,
          minimum: Vc.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Vc.minSize.message
        }), Bc.BI()), null !== Vc.maxSize && nc.data.size > Vc.maxSize.value && (yB(nc, {
          code: Tc.too_big,
          maximum: Vc.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Vc.maxSize.message
        }), Bc.BI());
        const Ic = this._def.valueType;

        function rB(cB) {
          const nc = new Set;
          for (const Vc of cB) {
            if ("aborted" === Vc.status) return pc;
            "BI" === Vc.status && Bc.BI(), nc.add(Vc.value)
          }
          return {
            status: Bc.value,
            value: nc
          }
        }
        const uc = [...nc.data.values()].map(((cB, Bc) => Ic._parse(new bB(nc, cB, nc.path, Bc))));
        return nc.common.async ? Promise.all(uc).then((cB => rB(cB))) : rB(uc)
      }
      min(cB, Bc) {
        return new TB({
          ...this._def,
          minSize: {
            value: cB,
            message: Uc.toString(Bc)
          }
        })
      }
      max(cB, Bc) {
        return new TB({
          ...this._def,
          maxSize: {
            value: cB,
            message: Uc.toString(Bc)
          }
        })
      }
      size(cB, Bc) {
        return this.min(cB, Bc).max(cB, Bc)
      }
      nonempty(cB) {
        return this.min(1, cB)
      }
    }
    TB.create = (cB, Bc) => new TB({
      valueType: cB,
      minSize: null,
      maxSize: null,
      typeName: vn.ZodSet,
      ...Qc(Bc)
    });
    class fB extends Cc {
      constructor() {
        super(...arguments), this.validate = this.implement
      }
      _parse(cB) {
        const {
          ctx: Bc
        } = this._processInputParams(cB);
        if (Bc.parsedType !== qB.function) return yB(Bc, {
          code: Tc.invalid_type,
          expected: qB.function,
          received: Bc.parsedType
        }), pc;

        function nc(cB, nc) {
          return Sc({
            data: cB,
            path: Bc.path,
            errorMaps: [Bc.common.contextualErrorMap, Bc.schemaErrorMap, tB(), mB].filter((cB => !!cB)),
            issueData: {
              code: Tc.invalid_arguments,
              argumentsError: nc
            }
          })
        }

        function Vc(cB, nc) {
          return Sc({
            data: cB,
            path: Bc.path,
            errorMaps: [Bc.common.contextualErrorMap, Bc.schemaErrorMap, tB(), mB].filter((cB => !!cB)),
            issueData: {
              code: Tc.invalid_return_type,
              returnTypeError: nc
            }
          })
        }
        const Ic = {
            errorMap: Bc.common.contextualErrorMap
          },
          rB = Bc.data;
        if (this._def.returns instanceof zn) {
          const cB = this;
          return aB((async function() {
            for (var Bc = arguments.length, uc = new Array(Bc), sc = 0; sc < Bc; sc++) uc[sc] = arguments[sc];
            const Mc = new fc([]),
              Pc = await cB._def.args.parseAsync(uc, Ic).catch((cB => {
                throw Mc.addIssue(nc(uc, cB)), Mc
              })),
              qB = await Reflect.apply(rB, this, Pc);
            return await cB._def.returns._def.type.parseAsync(qB, Ic).catch((cB => {
              throw Mc.addIssue(Vc(qB, cB)), Mc
            }))
          }))
        } {
          const cB = this;
          return aB((function() {
            for (var Bc = arguments.length, uc = new Array(Bc), sc = 0; sc < Bc; sc++) uc[sc] = arguments[sc];
            const Mc = cB._def.args.safeParse(uc, Ic);
            if (!Mc.success) throw new fc([nc(uc, Mc.error)]);
            const Pc = Reflect.apply(rB, this, Mc.data),
              qB = cB._def.returns.safeParse(Pc, Ic);
            if (!qB.success) throw new fc([Vc(Pc, qB.error)]);
            return qB.data
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
        for (var cB = arguments.length, Bc = new Array(cB), nc = 0; nc < cB; nc++) Bc[nc] = arguments[nc];
        return new fB({
          ...this._def,
          args: PB.create(Bc).rest(Ac.create())
        })
      }
      returns(cB) {
        return new fB({
          ...this._def,
          returns: cB
        })
      }
      implement(cB) {
        return this.parse(cB)
      }
      strictImplement(cB) {
        return this.parse(cB)
      }
      static create(cB, Bc, nc) {
        return new fB({
          args: cB || PB.create([]).rest(Ac.create()),
          returns: Bc || Ac.create(),
          typeName: vn.ZodFunction,
          ...Qc(nc)
        })
      }
    }
    class mn extends Cc {
      get schema() {
        return this._def.getter()
      }
      _parse(cB) {
        const {
          ctx: Bc
        } = this._processInputParams(cB);
        return this._def.getter()._parse({
          data: Bc.data,
          path: Bc.path,
          parent: Bc
        })
      }
    }
    mn.create = (cB, Bc) => new mn({
      getter: cB,
      typeName: vn.ZodLazy,
      ...Qc(Bc)
    });
    class eB extends Cc {
      _parse(cB) {
        if (cB.data !== this._def.value) {
          const Bc = this._getOrReturnCtx(cB);
          return yB(Bc, {
            received: Bc.data,
            code: Tc.invalid_literal,
            expected: this._def.value
          }), pc
        }
        return {
          status: "valid",
          value: cB.data
        }
      }
      get value() {
        return this._def.value
      }
    }

    function tn(cB, Bc) {
      return new SB({
        values: cB,
        typeName: vn.ZodEnum,
        ...Qc(Bc)
      })
    }
    eB.create = (cB, Bc) => new eB({
      value: cB,
      typeName: vn.ZodLiteral,
      ...Qc(Bc)
    });
    class SB extends Cc {
      _parse(cB) {
        if ("string" !== typeof cB.data) {
          const Bc = this._getOrReturnCtx(cB),
            nc = this._def.values;
          return yB(Bc, {
            expected: sc.joinValues(nc),
            received: Bc.parsedType,
            code: Tc.invalid_type
          }), pc
        }
        if (-1 === this._def.values.indexOf(cB.data)) {
          const Bc = this._getOrReturnCtx(cB),
            nc = this._def.values;
          return yB(Bc, {
            received: Bc.data,
            code: Tc.invalid_enum_value,
            options: nc
          }), pc
        }
        return aB(cB.data)
      }
      get options() {
        return this._def.values
      }
      get enum() {
        const cB = {};
        for (const Bc of this._def.values) cB[Bc] = Bc;
        return cB
      }
      get Values() {
        const cB = {};
        for (const Bc of this._def.values) cB[Bc] = Bc;
        return cB
      }
      get Enum() {
        const cB = {};
        for (const Bc of this._def.values) cB[Bc] = Bc;
        return cB
      }
      extract(cB) {
        return SB.create(cB)
      }
      exclude(cB) {
        return SB.create(this.options.filter((Bc => !cB.includes(Bc))))
      }
    }
    SB.create = tn;
    class yn extends Cc {
      _parse(cB) {
        const Bc = sc.getValidEnumValues(this._def.values),
          nc = this._getOrReturnCtx(cB);
        if (nc.parsedType !== qB.string && nc.parsedType !== qB.number) {
          const cB = sc.objectValues(Bc);
          return yB(nc, {
            expected: sc.joinValues(cB),
            received: nc.parsedType,
            code: Tc.invalid_type
          }), pc
        }
        if (-1 === Bc.indexOf(cB.data)) {
          const cB = sc.objectValues(Bc);
          return yB(nc, {
            received: nc.data,
            code: Tc.invalid_enum_value,
            options: cB
          }), pc
        }
        return aB(cB.data)
      }
      get enum() {
        return this._def.values
      }
    }
    yn.create = (cB, Bc) => new yn({
      values: cB,
      typeName: vn.ZodNativeEnum,
      ...Qc(Bc)
    });
    class zn extends Cc {
      unwrap() {
        return this._def.type
      }
      _parse(cB) {
        const {
          ctx: Bc
        } = this._processInputParams(cB);
        if (Bc.parsedType !== qB.promise && !1 === Bc.common.async) return yB(Bc, {
          code: Tc.invalid_type,
          expected: qB.promise,
          received: Bc.parsedType
        }), pc;
        const nc = Bc.parsedType === qB.promise ? Bc.data : Promise.resolve(Bc.data);
        return aB(nc.then((cB => this._def.type.parseAsync(cB, {
          path: Bc.path,
          errorMap: Bc.common.contextualErrorMap
        }))))
      }
    }
    zn.create = (cB, Bc) => new zn({
      type: cB,
      typeName: vn.ZodPromise,
      ...Qc(Bc)
    });
    class pB extends Cc {
      innerType() {
        return this._def.schema
      }
      sourceType() {
        return this._def.schema._def.typeName === vn.ZodEffects ? this._def.schema.sourceType() : this._def.schema
      }
      _parse(cB) {
        const {
          status: Bc,
          ctx: nc
        } = this._processInputParams(cB), Vc = this._def.effect || null, Ic = {
          addIssue: cB => {
            yB(nc, cB), cB.fatal ? Bc.abort() : Bc.BI()
          },
          get path() {
            return nc.path
          }
        };
        if (Ic.addIssue = Ic.addIssue.bind(Ic), "preprocess" === Vc.type) {
          const cB = Vc.transform(nc.data, Ic);
          return nc.common.issues.length ? {
            status: "BI",
            value: nc.data
          } : nc.common.async ? Promise.resolve(cB).then((cB => this._def.schema._parseAsync({
            data: cB,
            path: nc.path,
            parent: nc
          }))) : this._def.schema._parseSync({
            data: cB,
            path: nc.path,
            parent: nc
          })
        }
        if ("refinement" === Vc.type) {
          const cB = cB => {
            const Bc = Vc.refinement(cB, Ic);
            if (nc.common.async) return Promise.resolve(Bc);
            if (Bc instanceof Promise) throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            return cB
          };
          if (!1 === nc.common.async) {
            const Vc = this._def.schema._parseSync({
              data: nc.data,
              path: nc.path,
              parent: nc
            });
            return "aborted" === Vc.status ? pc : ("BI" === Vc.status && Bc.BI(), cB(Vc.value), {
              status: Bc.value,
              value: Vc.value
            })
          }
          return this._def.schema._parseAsync({
            data: nc.data,
            path: nc.path,
            parent: nc
          }).then((nc => "aborted" === nc.status ? pc : ("BI" === nc.status && Bc.BI(), cB(nc.value).then((() => ({
            status: Bc.value,
            value: nc.value
          }))))))
        }
        if ("transform" === Vc.type) {
          if (!1 === nc.common.async) {
            const cB = this._def.schema._parseSync({
              data: nc.data,
              path: nc.path,
              parent: nc
            });
            if (!Lc(cB)) return cB;
            const rB = Vc.transform(cB.value, Ic);
            if (rB instanceof Promise) throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
            return {
              status: Bc.value,
              value: rB
            }
          }
          return this._def.schema._parseAsync({
            data: nc.data,
            path: nc.path,
            parent: nc
          }).then((cB => Lc(cB) ? Promise.resolve(Vc.transform(cB.value, Ic)).then((cB => ({
            status: Bc.value,
            value: cB
          }))) : cB))
        }
        sc.assertNever(Vc)
      }
    }
    pB.create = (cB, Bc, nc) => new pB({
      schema: cB,
      typeName: vn.ZodEffects,
      effect: Bc,
      ...Qc(nc)
    }), pB.createWithPreprocess = (cB, Bc, nc) => new pB({
      schema: Bc,
      effect: {
        type: "preprocess",
        transform: cB
      },
      typeName: vn.ZodEffects,
      ...Qc(nc)
    });
    class hB extends Cc {
      _parse(cB) {
        return this._getType(cB) === qB.undefined ? aB(void 0) : this._def.innerType._parse(cB)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    hB.create = (cB, Bc) => new hB({
      innerType: cB,
      typeName: vn.ZodOptional,
      ...Qc(Bc)
    });
    class an extends Cc {
      _parse(cB) {
        return this._getType(cB) === qB.null ? aB(null) : this._def.innerType._parse(cB)
      }
      unwrap() {
        return this._def.innerType
      }
    }
    an.create = (cB, Bc) => new an({
      innerType: cB,
      typeName: vn.ZodNullable,
      ...Qc(Bc)
    });
    class lB extends Cc {
      _parse(cB) {
        const {
          ctx: Bc
        } = this._processInputParams(cB);
        let nc = Bc.data;
        return Bc.parsedType === qB.undefined && (nc = this._def.defaultValue()), this._def.innerType._parse({
          data: nc,
          path: Bc.path,
          parent: Bc
        })
      }
      removeDefault() {
        return this._def.innerType
      }
    }
    lB.create = (cB, Bc) => new lB({
      innerType: cB,
      typeName: vn.ZodDefault,
      defaultValue: "function" === typeof Bc.default ? Bc.default : () => Bc.default,
      ...Qc(Bc)
    });
    class YB extends Cc {
      _parse(cB) {
        const {
          ctx: Bc
        } = this._processInputParams(cB), nc = {
          ...Bc,
          common: {
            ...Bc.common,
            issues: []
          }
        }, Vc = this._def.innerType._parse({
          data: nc.data,
          path: nc.path,
          parent: {
            ...nc
          }
        });
        return gB(Vc) ? Vc.then((cB => ({
          status: "valid",
          value: "valid" === cB.status ? cB.value : this._def.catchValue({
            get error() {
              return new fc(nc.common.issues)
            },
            input: nc.data
          })
        }))) : {
          status: "valid",
          value: "valid" === Vc.status ? Vc.value : this._def.catchValue({
            get error() {
              return new fc(nc.common.issues)
            },
            input: nc.data
          })
        }
      }
      removeCatch() {
        return this._def.innerType
      }
    }
    YB.create = (cB, Bc) => new YB({
      innerType: cB,
      typeName: vn.ZodCatch,
      catchValue: "function" === typeof Bc.catch ? Bc.catch : () => Bc.catch,
      ...Qc(Bc)
    });
    class LB extends Cc {
      _parse(cB) {
        if (this._getType(cB) !== qB.nan) {
          const Bc = this._getOrReturnCtx(cB);
          return yB(Bc, {
            code: Tc.invalid_type,
            expected: qB.nan,
            received: Bc.parsedType
          }), pc
        }
        return {
          status: "valid",
          value: cB.data
        }
      }
    }
    LB.create = cB => new LB({
      typeName: vn.ZodNaN,
      ...Qc(cB)
    });
    const gn = Symbol("zod_brand");
    class UB extends Cc {
      _parse(cB) {
        const {
          ctx: Bc
        } = this._processInputParams(cB), nc = Bc.data;
        return this._def.type._parse({
          data: nc,
          path: Bc.path,
          parent: Bc
        })
      }
      unwrap() {
        return this._def.type
      }
    }
    class bn extends Cc {
      _parse(cB) {
        const {
          status: Bc,
          ctx: nc
        } = this._processInputParams(cB);
        if (nc.common.async) {
          return (async () => {
            const cB = await this._def.in._parseAsync({
              data: nc.data,
              path: nc.path,
              parent: nc
            });
            return "aborted" === cB.status ? pc : "BI" === cB.status ? (Bc.BI(), hc(cB.value)) : this._def.out._parseAsync({
              data: cB.value,
              path: nc.path,
              parent: nc
            })
          })()
        } {
          const cB = this._def.in._parseSync({
            data: nc.data,
            path: nc.path,
            parent: nc
          });
          return "aborted" === cB.status ? pc : "BI" === cB.status ? (Bc.BI(), {
            status: "BI",
            value: cB.value
          }) : this._def.out._parseSync({
            data: cB.value,
            path: nc.path,
            parent: nc
          })
        }
      }
      static create(cB, Bc) {
        return new bn({
          in: cB,
          out: Bc,
          typeName: vn.ZodPipeline
        })
      }
    }
    class ZB extends Cc {
      _parse(cB) {
        const Bc = this._def.innerType._parse(cB);
        return Lc(Bc) && (Bc.value = Object.freeze(Bc.value)), Bc
      }
    }
    ZB.create = (cB, Bc) => new ZB({
      innerType: cB,
      typeName: vn.ZodReadonly,
      ...Qc(Bc)
    });
    const QB = function(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          nc = arguments.length > 2 ? arguments[2] : void 0;
        return cB ? dc.create().superRefine(((Vc, Ic) => {
          var rB, uc;
          if (!cB(Vc)) {
            const cB = "function" === typeof Bc ? Bc(Vc) : "string" === typeof Bc ? {
                message: Bc
              } : Bc,
              sc = null === (uc = null !== (rB = cB.fatal) && void 0 !== rB ? rB : nc) || void 0 === uc || uc,
              Mc = "string" === typeof cB ? {
                message: cB
              } : cB;
            Ic.addIssue({
              code: "custom",
              ...Mc,
              fatal: sc
            })
          }
        })) : dc.create()
      },
      CB = {
        object: VB.lazycreate
      };
    var vn;
    ! function(cB) {
      cB.ZodString = "ZodString", cB.ZodNumber = "ZodNumber", cB.ZodNaN = "ZodNaN", cB.ZodBigInt = "ZodBigInt", cB.ZodBoolean = "ZodBoolean", cB.ZodDate = "ZodDate", cB.ZodSymbol = "ZodSymbol", cB.ZodUndefined = "ZodUndefined", cB.ZodNull = "ZodNull", cB.ZodAny = "ZodAny", cB.ZodUnknown = "ZodUnknown", cB.ZodNever = "ZodNever", cB.ZodVoid = "ZodVoid", cB.ZodArray = "ZodArray", cB.ZodObject = "ZodObject", cB.ZodUnion = "ZodUnion", cB.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", cB.ZodIntersection = "ZodIntersection", cB.ZodTuple = "ZodTuple", cB.ZodRecord = "ZodRecord", cB.ZodMap = "ZodMap", cB.ZodSet = "ZodSet", cB.ZodFunction = "ZodFunction", cB.ZodLazy = "ZodLazy", cB.ZodLiteral = "ZodLiteral", cB.ZodEnum = "ZodEnum", cB.ZodEffects = "ZodEffects", cB.ZodNativeEnum = "ZodNativeEnum", cB.ZodOptional = "ZodOptional", cB.ZodNullable = "ZodNullable", cB.ZodDefault = "ZodDefault", cB.ZodCatch = "ZodCatch", cB.ZodPromise = "ZodPromise", cB.ZodBranded = "ZodBranded", cB.ZodPipeline = "ZodPipeline", cB.ZodReadonly = "ZodReadonly"
    }(vn || (vn = {}));
    const DB = Xc.create,
      NB = Fc.create,
      EB = LB.create,
      oB = Jc.create,
      WB = jB.create,
      wB = Rc.create,
      kn = iB.create,
      XB = Kc.create,
      HB = xB.create,
      FB = dc.create,
      JB = Ac.create,
      jn = Gc.create,
      RB = cn.create,
      KB = BB.create,
      xn = VB.create,
      dB = VB.strictCreate,
      AB = IB.create,
      GB = uB.create,
      cV = MB.create,
      Bn = PB.create,
      nn = qn.create,
      Vn = OB.create,
      In = TB.create,
      rV = fB.create,
      un = mn.create,
      sn = eB.create,
      Mn = SB.create,
      Pn = yn.create,
      qV = zn.create,
      On = pB.create,
      Tn = hB.create,
      fn = an.create,
      mV = pB.createWithPreprocess,
      en = bn.create,
      tV = {
        string: cB => Xc.create({
          ...cB,
          coerce: !0
        }),
        number: cB => Fc.create({
          ...cB,
          coerce: !0
        }),
        boolean: cB => jB.create({
          ...cB,
          coerce: !0
        }),
        bigint: cB => Jc.create({
          ...cB,
          coerce: !0
        }),
        date: cB => Rc.create({
          ...cB,
          coerce: !0
        })
      },
      Sn = pc;
    var yV = Object.freeze({
        __proto__: null,
        defaultErrorMap: mB,
        setErrorMap: function(cB) {
          ec = cB
        },
        getErrorMap: tB,
        makeIssue: Sc,
        EMPTY_PATH: [],
        addIssueToContext: yB,
        ParseStatus: zB,
        INVALID: pc,
        DIRTY: hc,
        OK: aB,
        isAborted: lc,
        isDirty: Yc,
        isValid: Lc,
        isAsync: gB,
        get util() {
          return sc
        },
        get objectUtil() {
          return Mc
        },
        ZodParsedType: qB,
        getParsedType: Oc,
        ZodType: Cc,
        ZodString: Xc,
        ZodNumber: Fc,
        ZodBigInt: Jc,
        ZodBoolean: jB,
        ZodDate: Rc,
        ZodSymbol: iB,
        ZodUndefined: Kc,
        ZodNull: xB,
        ZodAny: dc,
        ZodUnknown: Ac,
        ZodNever: Gc,
        ZodVoid: cn,
        ZodArray: BB,
        ZodObject: VB,
        ZodUnion: IB,
        ZodDiscriminatedUnion: uB,
        ZodIntersection: MB,
        ZodTuple: PB,
        ZodRecord: qn,
        ZodMap: OB,
        ZodSet: TB,
        ZodFunction: fB,
        ZodLazy: mn,
        ZodLiteral: eB,
        ZodEnum: SB,
        ZodNativeEnum: yn,
        ZodPromise: zn,
        ZodEffects: pB,
        ZodTransformer: pB,
        ZodOptional: hB,
        ZodNullable: an,
        ZodDefault: lB,
        ZodCatch: YB,
        ZodNaN: LB,
        BRAND: gn,
        ZodBranded: UB,
        ZodPipeline: bn,
        ZodReadonly: ZB,
        custom: QB,
        Schema: Cc,
        ZodSchema: Cc,
        late: CB,
        get ZodFirstPartyTypeKind() {
          return vn
        },
        coerce: tV,
        any: FB,
        array: KB,
        bigint: oB,
        boolean: WB,
        date: wB,
        discriminatedUnion: GB,
        effect: On,
        enum: Mn,
        function: rV,
        instanceof: function(cB) {
          let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            message: `Input not instance of ${cB.name}`
          };
          return QB((Bc => Bc instanceof cB), Bc)
        },
        intersection: cV,
        lazy: un,
        literal: sn,
        map: Vn,
        nan: EB,
        nativeEnum: Pn,
        never: jn,
        null: HB,
        nullable: fn,
        number: NB,
        object: xn,
        oboolean: () => WB().optional(),
        onumber: () => NB().optional(),
        optional: Tn,
        ostring: () => DB().optional(),
        pipeline: en,
        preprocess: mV,
        promise: qV,
        record: nn,
        set: In,
        strictObject: dB,
        string: DB,
        symbol: kn,
        transformer: On,
        tuple: Bn,
        undefined: XB,
        union: AB,
        unknown: JB,
        void: RB,
        NEVER: Sn,
        ZodIssueCode: Tc,
        quotelessJson: cB => JSON.stringify(cB, null, 2).replace(/"([^"]+)":/g, "$1:"),
        ZodError: fc
      }),
      zV = {
        exports: {}
      };
    ! function(cB) {
      var Bc = function(cB) {
        var nc = 1e7,
          Vc = 9007199254740992,
          Ic = Tc(Vc),
          rB = "0123456789abcdefghijklmnopqrstuvwxyz",
          uc = "function" === typeof BigInt;

        function sc(cB, Bc, nc, Vc) {
          return "undefined" === typeof cB ? sc[0] : "undefined" !== typeof Bc && (10 !== +Bc || nc) ? jB(cB, Bc, nc, Vc) : dc(cB)
        }

        function Mc(cB, Bc) {
          this.value = cB, this.sign = Bc, this.isSmall = !1
        }

        function Pc(cB) {
          this.value = cB, this.sign = cB < 0, this.isSmall = !0
        }

        function qB(cB) {
          this.value = cB
        }

        function Oc(cB) {
          return -Vc < cB && cB < Vc
        }

        function Tc(cB) {
          return cB < 1e7 ? [cB] : cB < 1e14 ? [cB % 1e7, Math.floor(cB / 1e7)] : [cB % 1e7, Math.floor(cB / 1e7) % 1e7, Math.floor(cB / 1e14)]
        }

        function fc(cB) {
          mB(cB);
          var Bc = cB.length;
          if (Bc < 4 && Qc(cB, Ic) < 0) switch (Bc) {
            case 0:
              return 0;
            case 1:
              return cB[0];
            case 2:
              return cB[0] + cB[1] * nc;
            default:
              return cB[0] + (cB[1] + cB[2] * nc) * nc
          }
          return cB
        }

        function mB(cB) {
          for (var Bc = cB.length; 0 === cB[--Bc];);
          cB.length = Bc + 1
        }

        function ec(cB) {
          for (var Bc = new Array(cB), nc = -1; ++nc < cB;) Bc[nc] = 0;
          return Bc
        }

        function tB(cB) {
          return cB > 0 ? Math.floor(cB) : Math.ceil(cB)
        }

        function Sc(cB, Bc) {
          var Vc, Ic, rB = cB.length,
            uc = Bc.length,
            sc = new Array(rB),
            Mc = 0,
            Pc = nc;
          for (Ic = 0; Ic < uc; Ic++) Mc = (Vc = cB[Ic] + Bc[Ic] + Mc) >= Pc ? 1 : 0, sc[Ic] = Vc - Mc * Pc;
          for (; Ic < rB;) Mc = (Vc = cB[Ic] + Mc) === Pc ? 1 : 0, sc[Ic++] = Vc - Mc * Pc;
          return Mc > 0 && sc.push(Mc), sc
        }

        function yB(cB, Bc) {
          return cB.length >= Bc.length ? Sc(cB, Bc) : Sc(Bc, cB)
        }

        function zB(cB, Bc) {
          var Vc, Ic, rB = cB.length,
            uc = new Array(rB),
            sc = nc;
          for (Ic = 0; Ic < rB; Ic++) Vc = cB[Ic] - sc + Bc, Bc = Math.floor(Vc / sc), uc[Ic] = Vc - Bc * sc, Bc += 1;
          for (; Bc > 0;) uc[Ic++] = Bc % sc, Bc = Math.floor(Bc / sc);
          return uc
        }

        function pc(cB, Bc) {
          var Vc, Ic, rB = cB.length,
            uc = Bc.length,
            sc = new Array(rB),
            Mc = 0,
            Pc = nc;
          for (Vc = 0; Vc < uc; Vc++)(Ic = cB[Vc] - Mc - Bc[Vc]) < 0 ? (Ic += Pc, Mc = 1) : Mc = 0, sc[Vc] = Ic;
          for (Vc = uc; Vc < rB; Vc++) {
            if (!((Ic = cB[Vc] - Mc) < 0)) {
              sc[Vc++] = Ic;
              break
            }
            Ic += Pc, sc[Vc] = Ic
          }
          for (; Vc < rB; Vc++) sc[Vc] = cB[Vc];
          return mB(sc), sc
        }

        function hc(cB, Bc, Vc) {
          var Ic, rB, uc = cB.length,
            sc = new Array(uc),
            qB = -Bc,
            Oc = nc;
          for (Ic = 0; Ic < uc; Ic++) rB = cB[Ic] + qB, qB = Math.floor(rB / Oc), rB %= Oc, sc[Ic] = rB < 0 ? rB + Oc : rB;
          return "number" === typeof(sc = fc(sc)) ? (Vc && (sc = -sc), new Pc(sc)) : new Mc(sc, Vc)
        }

        function aB(cB, Bc) {
          var Vc, Ic, rB, uc, sc = cB.length,
            Mc = Bc.length,
            Pc = ec(sc + Mc),
            qB = nc;
          for (rB = 0; rB < sc; ++rB) {
            uc = cB[rB];
            for (var Oc = 0; Oc < Mc; ++Oc) Vc = uc * Bc[Oc] + Pc[rB + Oc], Ic = Math.floor(Vc / qB), Pc[rB + Oc] = Vc - Ic * qB, Pc[rB + Oc + 1] += Ic
          }
          return mB(Pc), Pc
        }

        function lc(cB, Bc) {
          var Vc, Ic, rB = cB.length,
            uc = new Array(rB),
            sc = nc,
            Mc = 0;
          for (Ic = 0; Ic < rB; Ic++) Vc = cB[Ic] * Bc + Mc, Mc = Math.floor(Vc / sc), uc[Ic] = Vc - Mc * sc;
          for (; Mc > 0;) uc[Ic++] = Mc % sc, Mc = Math.floor(Mc / sc);
          return uc
        }

        function Yc(cB, Bc) {
          for (var nc = []; Bc-- > 0;) nc.push(0);
          return nc.concat(cB)
        }

        function Lc(cB, Bc) {
          var nc = Math.max(cB.length, Bc.length);
          if (nc <= 30) return aB(cB, Bc);
          nc = Math.ceil(nc / 2);
          var Vc = cB.slice(nc),
            Ic = cB.slice(0, nc),
            rB = Bc.slice(nc),
            uc = Bc.slice(0, nc),
            sc = Lc(Ic, uc),
            Mc = Lc(Vc, rB),
            Pc = Lc(yB(Ic, Vc), yB(uc, rB)),
            qB = yB(yB(sc, Yc(pc(pc(Pc, sc), Mc), nc)), Yc(Mc, 2 * nc));
          return mB(qB), qB
        }

        function gB(cB, Bc, Vc) {
          return new Mc(cB < nc ? lc(Bc, cB) : aB(Bc, Tc(cB)), Vc)
        }

        function Uc(cB) {
          var Bc, Vc, Ic, rB, uc = cB.length,
            sc = ec(uc + uc),
            Mc = nc;
          for (Ic = 0; Ic < uc; Ic++) {
            Vc = 0 - (rB = cB[Ic]) * rB;
            for (var Pc = Ic; Pc < uc; Pc++) Bc = rB * cB[Pc] * 2 + sc[Ic + Pc] + Vc, Vc = Math.floor(Bc / Mc), sc[Ic + Pc] = Bc - Vc * Mc;
            sc[Ic + uc] = Vc
          }
          return mB(sc), sc
        }

        function bB(cB, Bc) {
          var Vc, Ic, rB, uc, sc = cB.length,
            Mc = ec(sc),
            Pc = nc;
          for (rB = 0, Vc = sc - 1; Vc >= 0; --Vc) rB = (uc = rB * Pc + cB[Vc]) - (Ic = tB(uc / Bc)) * Bc, Mc[Vc] = 0 | Ic;
          return [Mc, 0 | rB]
        }

        function Zc(cB, Bc) {
          var Vc, Ic = dc(Bc);
          if (uc) return [new qB(cB.value / Ic.value), new qB(cB.value % Ic.value)];
          var rB, Oc = cB.value,
            Sc = Ic.value;
          if (0 === Sc) throw new Error("Cannot divide by zero");
          if (cB.isSmall) return Ic.isSmall ? [new Pc(tB(Oc / Sc)), new Pc(Oc % Sc)] : [sc[0], cB];
          if (Ic.isSmall) {
            if (1 === Sc) return [cB, sc[0]];
            if (-1 == Sc) return [cB.Ou(), sc[0]];
            var yB = Math.abs(Sc);
            if (yB < nc) {
              rB = fc((Vc = bB(Oc, yB))[0]);
              var zB = Vc[1];
              return cB.sign && (zB = -zB), "number" === typeof rB ? (cB.sign !== Ic.sign && (rB = -rB), [new Pc(rB), new Pc(zB)]) : [new Mc(rB, cB.sign !== Ic.sign), new Pc(zB)]
            }
            Sc = Tc(yB)
          }
          var hc = Qc(Oc, Sc);
          if (-1 === hc) return [sc[0], cB];
          if (0 === hc) return [sc[cB.sign === Ic.sign ? 1 : -1], sc[0]];
          Vc = Oc.length + Sc.length <= 200 ? function(cB, Bc) {
            var Vc, Ic, rB, uc, sc, Mc, Pc, qB = cB.length,
              Oc = Bc.length,
              Tc = nc,
              mB = ec(Bc.length),
              tB = Bc[Oc - 1],
              Sc = Math.ceil(Tc / (2 * tB)),
              yB = lc(cB, Sc),
              zB = lc(Bc, Sc);
            for (yB.length <= qB && yB.push(0), zB.push(0), tB = zB[Oc - 1], Ic = qB - Oc; Ic >= 0; Ic--) {
              for (Vc = Tc - 1, yB[Ic + Oc] !== tB && (Vc = Math.floor((yB[Ic + Oc] * Tc + yB[Ic + Oc - 1]) / tB)), rB = 0, uc = 0, Mc = zB.length, sc = 0; sc < Mc; sc++) rB += Vc * zB[sc], Pc = Math.floor(rB / Tc), uc += yB[Ic + sc] - (rB - Pc * Tc), rB = Pc, uc < 0 ? (yB[Ic + sc] = uc + Tc, uc = -1) : (yB[Ic + sc] = uc, uc = 0);
              for (; 0 !== uc;) {
                for (Vc -= 1, rB = 0, sc = 0; sc < Mc; sc++)(rB += yB[Ic + sc] - Tc + zB[sc]) < 0 ? (yB[Ic + sc] = rB + Tc, rB = 0) : (yB[Ic + sc] = rB, rB = 1);
                uc += rB
              }
              mB[Ic] = Vc
            }
            return yB = bB(yB, Sc)[0], [fc(mB), fc(yB)]
          }(Oc, Sc) : function(cB, Bc) {
            for (var Vc, Ic, rB, uc, sc, Mc = cB.length, Pc = Bc.length, qB = [], Oc = [], Tc = nc; Mc;)
              if (Oc.unshift(cB[--Mc]), mB(Oc), Qc(Oc, Bc) < 0) qB.push(0);
              else {
                rB = Oc[(Ic = Oc.length) - 1] * Tc + Oc[Ic - 2], uc = Bc[Pc - 1] * Tc + Bc[Pc - 2], Ic > Pc && (rB = (rB + 1) * Tc), Vc = Math.ceil(rB / uc);
                do {
                  if (Qc(sc = lc(Bc, Vc), Oc) <= 0) break;
                  Vc--
                } while (Vc);
                qB.push(Vc), Oc = pc(Oc, sc)
              } return qB.reverse(), [fc(qB), fc(Oc)]
          }(Oc, Sc), rB = Vc[0];
          var aB = cB.sign !== Ic.sign,
            Yc = Vc[1],
            Lc = cB.sign;
          return "number" === typeof rB ? (aB && (rB = -rB), rB = new Pc(rB)) : rB = new Mc(rB, aB), "number" === typeof Yc ? (Lc && (Yc = -Yc), Yc = new Pc(Yc)) : Yc = new Mc(Yc, Lc), [rB, Yc]
        }

        function Qc(cB, Bc) {
          if (cB.length !== Bc.length) return cB.length > Bc.length ? 1 : -1;
          for (var nc = cB.length - 1; nc >= 0; nc--)
            if (cB[nc] !== Bc[nc]) return cB[nc] > Bc[nc] ? 1 : -1;
          return 0
        }

        function Cc(cB) {
          var Bc = cB.abs();
          return !Bc.isUnit() && (!!(Bc.equals(2) || Bc.equals(3) || Bc.equals(5)) || !(Bc.isEven() || Bc.isDivisibleBy(3) || Bc.isDivisibleBy(5)) && (!!Bc.lesser(49) || void 0))
        }

        function vB(cB, nc) {
          for (var Vc, Ic, rB, uc = cB.prev(), sc = uc, Mc = 0; sc.isEven();) sc = sc.divide(2), Mc++;
          cB: for (Ic = 0; Ic < nc.length; Ic++)
            if (!cB.lesser(nc[Ic]) && !(rB = Bc(nc[Ic]).modPow(sc, cB)).isUnit() && !rB.equals(uc)) {
              for (Vc = Mc - 1; 0 != Vc; Vc--) {
                if ((rB = rB.square().mod(cB)).isUnit()) return !1;
                if (rB.equals(uc)) continue cB
              }
              return !1
            }
          return !0
        }
        Mc.prototype = Object.create(sc.prototype), Pc.prototype = Object.create(sc.prototype), qB.prototype = Object.create(sc.prototype), Mc.prototype.add = function(cB) {
          var Bc = dc(cB);
          if (this.sign !== Bc.sign) return this.subtract(Bc.Ou());
          var nc = this.value,
            Vc = Bc.value;
          return Bc.isSmall ? new Mc(zB(nc, Math.abs(Vc)), this.sign) : new Mc(yB(nc, Vc), this.sign)
        }, Mc.prototype.plus = Mc.prototype.add, Pc.prototype.add = function(cB) {
          var Bc = dc(cB),
            nc = this.value;
          if (nc < 0 !== Bc.sign) return this.subtract(Bc.Ou());
          var Vc = Bc.value;
          if (Bc.isSmall) {
            if (Oc(nc + Vc)) return new Pc(nc + Vc);
            Vc = Tc(Math.abs(Vc))
          }
          return new Mc(zB(Vc, Math.abs(nc)), nc < 0)
        }, Pc.prototype.plus = Pc.prototype.add, qB.prototype.add = function(cB) {
          return new qB(this.value + dc(cB).value)
        }, qB.prototype.plus = qB.prototype.add, Mc.prototype.subtract = function(cB) {
          var Bc = dc(cB);
          if (this.sign !== Bc.sign) return this.add(Bc.Ou());
          var nc = this.value,
            Vc = Bc.value;
          return Bc.isSmall ? hc(nc, Math.abs(Vc), this.sign) : function(cB, Bc, nc) {
            var Vc;
            return Qc(cB, Bc) >= 0 ? Vc = pc(cB, Bc) : (Vc = pc(Bc, cB), nc = !nc), "number" === typeof(Vc = fc(Vc)) ? (nc && (Vc = -Vc), new Pc(Vc)) : new Mc(Vc, nc)
          }(nc, Vc, this.sign)
        }, Mc.prototype.minus = Mc.prototype.subtract, Pc.prototype.subtract = function(cB) {
          var Bc = dc(cB),
            nc = this.value;
          if (nc < 0 !== Bc.sign) return this.add(Bc.Ou());
          var Vc = Bc.value;
          return Bc.isSmall ? new Pc(nc - Vc) : hc(Vc, Math.abs(nc), nc >= 0)
        }, Pc.prototype.minus = Pc.prototype.subtract, qB.prototype.subtract = function(cB) {
          return new qB(this.value - dc(cB).value)
        }, qB.prototype.minus = qB.prototype.subtract, Mc.prototype.Ou = function() {
          return new Mc(this.value, !this.sign)
        }, Pc.prototype.Ou = function() {
          var cB = this.sign,
            Bc = new Pc(-this.value);
          return Bc.sign = !cB, Bc
        }, qB.prototype.Ou = function() {
          return new qB(-this.value)
        }, Mc.prototype.abs = function() {
          return new Mc(this.value, !1)
        }, Pc.prototype.abs = function() {
          return new Pc(Math.abs(this.value))
        }, qB.prototype.abs = function() {
          return new qB(this.value >= 0 ? this.value : -this.value)
        }, Mc.prototype.multiply = function(cB) {
          var Bc, Vc, Ic, rB = dc(cB),
            uc = this.value,
            Pc = rB.value,
            qB = this.sign !== rB.sign;
          if (rB.isSmall) {
            if (0 === Pc) return sc[0];
            if (1 === Pc) return this;
            if (-1 === Pc) return this.Ou();
            if ((Bc = Math.abs(Pc)) < nc) return new Mc(lc(uc, Bc), qB);
            Pc = Tc(Bc)
          }
          return Vc = uc.length, Ic = Pc.length, new Mc(-.012 * Vc - .012 * Ic + 15e-6 * Vc * Ic > 0 ? Lc(uc, Pc) : aB(uc, Pc), qB)
        }, Mc.prototype.times = Mc.prototype.multiply, Pc.prototype._multiplyBySmall = function(cB) {
          return Oc(cB.value * this.value) ? new Pc(cB.value * this.value) : gB(Math.abs(cB.value), Tc(Math.abs(this.value)), this.sign !== cB.sign)
        }, Mc.prototype._multiplyBySmall = function(cB) {
          return 0 === cB.value ? sc[0] : 1 === cB.value ? this : -1 === cB.value ? this.Ou() : gB(Math.abs(cB.value), this.value, this.sign !== cB.sign)
        }, Pc.prototype.multiply = function(cB) {
          return dc(cB)._multiplyBySmall(this)
        }, Pc.prototype.times = Pc.prototype.multiply, qB.prototype.multiply = function(cB) {
          return new qB(this.value * dc(cB).value)
        }, qB.prototype.times = qB.prototype.multiply, Mc.prototype.square = function() {
          return new Mc(Uc(this.value), !1)
        }, Pc.prototype.square = function() {
          var cB = this.value * this.value;
          return Oc(cB) ? new Pc(cB) : new Mc(Uc(Tc(Math.abs(this.value))), !1)
        }, qB.prototype.square = function(cB) {
          return new qB(this.value * this.value)
        }, Mc.prototype.divmod = function(cB) {
          var Bc = Zc(this, cB);
          return {
            quotient: Bc[0],
            remainder: Bc[1]
          }
        }, qB.prototype.divmod = Pc.prototype.divmod = Mc.prototype.divmod, Mc.prototype.divide = function(cB) {
          return Zc(this, cB)[0]
        }, qB.prototype.over = qB.prototype.divide = function(cB) {
          return new qB(this.value / dc(cB).value)
        }, Pc.prototype.over = Pc.prototype.divide = Mc.prototype.over = Mc.prototype.divide, Mc.prototype.mod = function(cB) {
          return Zc(this, cB)[1]
        }, qB.prototype.mod = qB.prototype.remainder = function(cB) {
          return new qB(this.value % dc(cB).value)
        }, Pc.prototype.remainder = Pc.prototype.mod = Mc.prototype.remainder = Mc.prototype.mod, Mc.prototype.pow = function(cB) {
          var Bc, nc, Vc, Ic = dc(cB),
            rB = this.value,
            uc = Ic.value;
          if (0 === uc) return sc[1];
          if (0 === rB) return sc[0];
          if (1 === rB) return sc[1];
          if (-1 === rB) return Ic.isEven() ? sc[1] : sc[-1];
          if (Ic.sign) return sc[0];
          if (!Ic.isSmall) throw new Error("The exponent " + Ic.toString() + " is too large.");
          if (this.isSmall && Oc(Bc = Math.pow(rB, uc))) return new Pc(tB(Bc));
          for (nc = this, Vc = sc[1]; !0 & uc && (Vc = Vc.times(nc), --uc), 0 !== uc;) uc /= 2, nc = nc.square();
          return Vc
        }, Pc.prototype.pow = Mc.prototype.pow, qB.prototype.pow = function(cB) {
          var Bc = dc(cB),
            nc = this.value,
            Vc = Bc.value,
            Ic = BigInt(0),
            rB = BigInt(1),
            uc = BigInt(2);
          if (Vc === Ic) return sc[1];
          if (nc === Ic) return sc[0];
          if (nc === rB) return sc[1];
          if (nc === BigInt(-1)) return Bc.isEven() ? sc[1] : sc[-1];
          if (Bc.isNegative()) return new qB(Ic);
          for (var Mc = this, Pc = sc[1];
            (Vc & rB) === rB && (Pc = Pc.times(Mc), --Vc), Vc !== Ic;) Vc /= uc, Mc = Mc.square();
          return Pc
        }, Mc.prototype.modPow = function(cB, Bc) {
          if (cB = dc(cB), (Bc = dc(Bc)).isZero()) throw new Error("Cannot take modPow with modulus 0");
          var nc = sc[1],
            Vc = this.mod(Bc);
          for (cB.isNegative() && (cB = cB.multiply(sc[-1]), Vc = Vc.modInv(Bc)); cB.isPositive();) {
            if (Vc.isZero()) return sc[0];
            cB.isOdd() && (nc = nc.multiply(Vc).mod(Bc)), cB = cB.divide(2), Vc = Vc.square().mod(Bc)
          }
          return nc
        }, qB.prototype.modPow = Pc.prototype.modPow = Mc.prototype.modPow, Mc.prototype.compareAbs = function(cB) {
          var Bc = dc(cB),
            nc = this.value,
            Vc = Bc.value;
          return Bc.isSmall ? 1 : Qc(nc, Vc)
        }, Pc.prototype.compareAbs = function(cB) {
          var Bc = dc(cB),
            nc = Math.abs(this.value),
            Vc = Bc.value;
          return Bc.isSmall ? nc === (Vc = Math.abs(Vc)) ? 0 : nc > Vc ? 1 : -1 : -1
        }, qB.prototype.compareAbs = function(cB) {
          var Bc = this.value,
            nc = dc(cB).value;
          return (Bc = Bc >= 0 ? Bc : -Bc) === (nc = nc >= 0 ? nc : -nc) ? 0 : Bc > nc ? 1 : -1
        }, Mc.prototype.compare = function(cB) {
          if (cB === 1 / 0) return -1;
          if (cB === -1 / 0) return 1;
          var Bc = dc(cB),
            nc = this.value,
            Vc = Bc.value;
          return this.sign !== Bc.sign ? Bc.sign ? 1 : -1 : Bc.isSmall ? this.sign ? -1 : 1 : Qc(nc, Vc) * (this.sign ? -1 : 1)
        }, Mc.prototype.compareTo = Mc.prototype.compare, Pc.prototype.compare = function(cB) {
          if (cB === 1 / 0) return -1;
          if (cB === -1 / 0) return 1;
          var Bc = dc(cB),
            nc = this.value,
            Vc = Bc.value;
          return Bc.isSmall ? nc == Vc ? 0 : nc > Vc ? 1 : -1 : nc < 0 !== Bc.sign ? nc < 0 ? -1 : 1 : nc < 0 ? 1 : -1
        }, Pc.prototype.compareTo = Pc.prototype.compare, qB.prototype.compare = function(cB) {
          if (cB === 1 / 0) return -1;
          if (cB === -1 / 0) return 1;
          var Bc = this.value,
            nc = dc(cB).value;
          return Bc === nc ? 0 : Bc > nc ? 1 : -1
        }, qB.prototype.compareTo = qB.prototype.compare, Mc.prototype.equals = function(cB) {
          return 0 === this.compare(cB)
        }, qB.prototype.eq = qB.prototype.equals = Pc.prototype.eq = Pc.prototype.equals = Mc.prototype.eq = Mc.prototype.equals, Mc.prototype.notEquals = function(cB) {
          return 0 !== this.compare(cB)
        }, qB.prototype.neq = qB.prototype.notEquals = Pc.prototype.neq = Pc.prototype.notEquals = Mc.prototype.neq = Mc.prototype.notEquals, Mc.prototype.greater = function(cB) {
          return this.compare(cB) > 0
        }, qB.prototype.gt = qB.prototype.greater = Pc.prototype.gt = Pc.prototype.greater = Mc.prototype.gt = Mc.prototype.greater, Mc.prototype.lesser = function(cB) {
          return this.compare(cB) < 0
        }, qB.prototype.lt = qB.prototype.lesser = Pc.prototype.lt = Pc.prototype.lesser = Mc.prototype.lt = Mc.prototype.lesser, Mc.prototype.greaterOrEquals = function(cB) {
          return this.compare(cB) >= 0
        }, qB.prototype.geq = qB.prototype.greaterOrEquals = Pc.prototype.geq = Pc.prototype.greaterOrEquals = Mc.prototype.geq = Mc.prototype.greaterOrEquals, Mc.prototype.lesserOrEquals = function(cB) {
          return this.compare(cB) <= 0
        }, qB.prototype.leq = qB.prototype.lesserOrEquals = Pc.prototype.leq = Pc.prototype.lesserOrEquals = Mc.prototype.leq = Mc.prototype.lesserOrEquals, Mc.prototype.isEven = function() {
          return 0 === (1 & this.value[0])
        }, Pc.prototype.isEven = function() {
          return 0 === (1 & this.value)
        }, qB.prototype.isEven = function() {
          return (this.value & BigInt(1)) === BigInt(0)
        }, Mc.prototype.isOdd = function() {
          return 1 === (1 & this.value[0])
        }, Pc.prototype.isOdd = function() {
          return 1 === (1 & this.value)
        }, qB.prototype.isOdd = function() {
          return (this.value & BigInt(1)) === BigInt(1)
        }, Mc.prototype.isPositive = function() {
          return !this.sign
        }, Pc.prototype.isPositive = function() {
          return this.value > 0
        }, qB.prototype.isPositive = Pc.prototype.isPositive, Mc.prototype.isNegative = function() {
          return this.sign
        }, Pc.prototype.isNegative = function() {
          return this.value < 0
        }, qB.prototype.isNegative = Pc.prototype.isNegative, Mc.prototype.isUnit = function() {
          return !1
        }, Pc.prototype.isUnit = function() {
          return 1 === Math.abs(this.value)
        }, qB.prototype.isUnit = function() {
          return this.abs().value === BigInt(1)
        }, Mc.prototype.isZero = function() {
          return !1
        }, Pc.prototype.isZero = function() {
          return 0 === this.value
        }, qB.prototype.isZero = function() {
          return this.value === BigInt(0)
        }, Mc.prototype.isDivisibleBy = function(cB) {
          var Bc = dc(cB);
          return !Bc.isZero() && (!!Bc.isUnit() || (0 === Bc.compareAbs(2) ? this.isEven() : this.mod(Bc).isZero()))
        }, qB.prototype.isDivisibleBy = Pc.prototype.isDivisibleBy = Mc.prototype.isDivisibleBy, Mc.prototype.isPrime = function(nc) {
          var Vc = Cc(this);
          if (Vc !== cB) return Vc;
          var Ic = this.abs(),
            rB = Ic.bitLength();
          if (rB <= 64) return vB(Ic, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
          for (var uc = Math.log(2) * rB.toJSNumber(), sc = Math.ceil(!0 === nc ? 2 * Math.pow(uc, 2) : uc), Mc = [], Pc = 0; Pc < sc; Pc++) Mc.push(Bc(Pc + 2));
          return vB(Ic, Mc)
        }, qB.prototype.isPrime = Pc.prototype.isPrime = Mc.prototype.isPrime, Mc.prototype.isProbablePrime = function(nc, Vc) {
          var Ic = Cc(this);
          if (Ic !== cB) return Ic;
          for (var rB = this.abs(), uc = nc === cB ? 5 : nc, sc = [], Mc = 0; Mc < uc; Mc++) sc.push(Bc.randBetween(2, rB.minus(2), Vc));
          return vB(rB, sc)
        }, qB.prototype.isProbablePrime = Pc.prototype.isProbablePrime = Mc.prototype.isProbablePrime, Mc.prototype.modInv = function(cB) {
          for (var nc, Vc, Ic, rB = Bc.zero, uc = Bc.one, sc = dc(cB), Mc = this.abs(); !Mc.isZero();) nc = sc.divide(Mc), Vc = rB, Ic = sc, rB = uc, sc = Mc, uc = Vc.subtract(nc.multiply(uc)), Mc = Ic.subtract(nc.multiply(Mc));
          if (!sc.isUnit()) throw new Error(this.toString() + " and " + cB.toString() + " are not co-prime");
          return -1 === rB.compare(0) && (rB = rB.add(cB)), this.isNegative() ? rB.Ou() : rB
        }, qB.prototype.modInv = Pc.prototype.modInv = Mc.prototype.modInv, Mc.prototype.next = function() {
          var cB = this.value;
          return this.sign ? hc(cB, 1, this.sign) : new Mc(zB(cB, 1), this.sign)
        }, Pc.prototype.next = function() {
          var cB = this.value;
          return cB + 1 < Vc ? new Pc(cB + 1) : new Mc(Ic, !1)
        }, qB.prototype.next = function() {
          return new qB(this.value + BigInt(1))
        }, Mc.prototype.prev = function() {
          var cB = this.value;
          return this.sign ? new Mc(zB(cB, 1), !0) : hc(cB, 1, this.sign)
        }, Pc.prototype.prev = function() {
          var cB = this.value;
          return cB - 1 > -Vc ? new Pc(cB - 1) : new Mc(Ic, !0)
        }, qB.prototype.prev = function() {
          return new qB(this.value - BigInt(1))
        };
        for (var Dc = [1]; 2 * Dc[Dc.length - 1] <= nc;) Dc.push(2 * Dc[Dc.length - 1]);
        var Nc = Dc.length,
          Ec = Dc[Nc - 1];

        function oc(cB) {
          return Math.abs(cB) <= nc
        }

        function Wc(cB, nc, Vc) {
          nc = dc(nc);
          for (var Ic = cB.isNegative(), rB = nc.isNegative(), uc = Ic ? cB.not() : cB, sc = rB ? nc.not() : nc, Mc = 0, Pc = 0, qB = null, Oc = null, Tc = []; !uc.isZero() || !sc.isZero();) Mc = (qB = Zc(uc, Ec))[1].toJSNumber(), Ic && (Mc = Ec - 1 - Mc), Pc = (Oc = Zc(sc, Ec))[1].toJSNumber(), rB && (Pc = Ec - 1 - Pc), uc = qB[0], sc = Oc[0], Tc.push(Vc(Mc, Pc));
          for (var fc = 0 !== Vc(Ic ? 1 : 0, rB ? 1 : 0) ? Bc(-1) : Bc(0), mB = Tc.length - 1; mB >= 0; mB -= 1) fc = fc.multiply(Ec).add(Bc(Tc[mB]));
          return fc
        }
        Mc.prototype.shiftLeft = function(cB) {
          var Bc = dc(cB).toJSNumber();
          if (!oc(Bc)) throw new Error(String(Bc) + " is too large for shifting.");
          if (Bc < 0) return this.shiftRight(-Bc);
          var nc = this;
          if (nc.isZero()) return nc;
          for (; Bc >= Nc;) nc = nc.multiply(Ec), Bc -= Nc - 1;
          return nc.multiply(Dc[Bc])
        }, qB.prototype.shiftLeft = Pc.prototype.shiftLeft = Mc.prototype.shiftLeft, Mc.prototype.shiftRight = function(cB) {
          var Bc, nc = dc(cB).toJSNumber();
          if (!oc(nc)) throw new Error(String(nc) + " is too large for shifting.");
          if (nc < 0) return this.shiftLeft(-nc);
          for (var Vc = this; nc >= Nc;) {
            if (Vc.isZero() || Vc.isNegative() && Vc.isUnit()) return Vc;
            Vc = (Bc = Zc(Vc, Ec))[1].isNegative() ? Bc[0].prev() : Bc[0], nc -= Nc - 1
          }
          return (Bc = Zc(Vc, Dc[nc]))[1].isNegative() ? Bc[0].prev() : Bc[0]
        }, qB.prototype.shiftRight = Pc.prototype.shiftRight = Mc.prototype.shiftRight, Mc.prototype.not = function() {
          return this.Ou().prev()
        }, qB.prototype.not = Pc.prototype.not = Mc.prototype.not, Mc.prototype.and = function(cB) {
          return Wc(this, cB, (function(cB, Bc) {
            return cB & Bc
          }))
        }, qB.prototype.and = Pc.prototype.and = Mc.prototype.and, Mc.prototype.or = function(cB) {
          return Wc(this, cB, (function(cB, Bc) {
            return cB | Bc
          }))
        }, qB.prototype.or = Pc.prototype.or = Mc.prototype.or, Mc.prototype.xor = function(cB) {
          return Wc(this, cB, (function(cB, Bc) {
            return cB ^ Bc
          }))
        }, qB.prototype.xor = Pc.prototype.xor = Mc.prototype.xor;
        var wc = 1 << 30;

        function kB(cB) {
          var Bc = cB.value,
            Vc = "number" === typeof Bc ? Bc | wc : "bigint" === typeof Bc ? Bc | BigInt(wc) : Bc[0] + Bc[1] * nc | 1073758208;
          return Vc & -Vc
        }

        function Xc(cB, nc) {
          if (nc.compareTo(cB) <= 0) {
            var Vc = Xc(cB, nc.square(nc)),
              Ic = Vc.p,
              rB = Vc.e,
              uc = Ic.multiply(nc);
            return uc.compareTo(cB) <= 0 ? {
              p: uc,
              e: 2 * rB + 1
            } : {
              p: Ic,
              e: 2 * rB
            }
          }
          return {
            p: Bc(1),
            e: 0
          }
        }

        function Hc(cB, Bc) {
          return cB = dc(cB), Bc = dc(Bc), cB.greater(Bc) ? cB : Bc
        }

        function Fc(cB, Bc) {
          return cB = dc(cB), Bc = dc(Bc), cB.lesser(Bc) ? cB : Bc
        }

        function Jc(cB, Bc) {
          if (cB = dc(cB).abs(), Bc = dc(Bc).abs(), cB.equals(Bc)) return cB;
          if (cB.isZero()) return Bc;
          if (Bc.isZero()) return cB;
          for (var nc, Vc, Ic = sc[1]; cB.isEven() && Bc.isEven();) nc = Fc(kB(cB), kB(Bc)), cB = cB.divide(nc), Bc = Bc.divide(nc), Ic = Ic.multiply(nc);
          for (; cB.isEven();) cB = cB.divide(kB(cB));
          do {
            for (; Bc.isEven();) Bc = Bc.divide(kB(Bc));
            cB.greater(Bc) && (Vc = Bc, Bc = cB, cB = Vc), Bc = Bc.subtract(cB)
          } while (!Bc.isZero());
          return Ic.isUnit() ? cB : cB.multiply(Ic)
        }
        Mc.prototype.bitLength = function() {
          var cB = this;
          return cB.compareTo(Bc(0)) < 0 && (cB = cB.Ou().subtract(Bc(1))), 0 === cB.compareTo(Bc(0)) ? Bc(0) : Bc(Xc(cB, Bc(2)).e).add(Bc(1))
        }, qB.prototype.bitLength = Pc.prototype.bitLength = Mc.prototype.bitLength;
        var jB = function(cB, Bc, nc, Vc) {
          nc = nc || rB, cB = String(cB), Vc || (cB = cB.toLowerCase(), nc = nc.toLowerCase());
          var Ic, uc = cB.length,
            sc = Math.abs(Bc),
            Mc = {};
          for (Ic = 0; Ic < nc.length; Ic++) Mc[nc[Ic]] = Ic;
          for (Ic = 0; Ic < uc; Ic++) {
            if ("-" !== (Oc = cB[Ic]) && (Oc in Mc && Mc[Oc] >= sc)) {
              if ("1" === Oc && 1 === sc) continue;
              throw new Error(Oc + " is not a valid digit in base " + Bc + ".")
            }
          }
          Bc = dc(Bc);
          var Pc = [],
            qB = "-" === cB[0];
          for (Ic = qB ? 1 : 0; Ic < cB.length; Ic++) {
            var Oc;
            if ((Oc = cB[Ic]) in Mc) Pc.push(dc(Mc[Oc]));
            else {
              if ("<" !== Oc) throw new Error(Oc + " is not a valid character");
              var Tc = Ic;
              do {
                Ic++
              } while (">" !== cB[Ic] && Ic < cB.length);
              Pc.push(dc(cB.slice(Tc + 1, Ic)))
            }
          }
          return Rc(Pc, Bc, qB)
        };

        function Rc(cB, Bc, nc) {
          var Vc, Ic = sc[0],
            rB = sc[1];
          for (Vc = cB.length - 1; Vc >= 0; Vc--) Ic = Ic.add(cB[Vc].times(rB)), rB = rB.times(Bc);
          return nc ? Ic.Ou() : Ic
        }

        function iB(cB, nc) {
          if ((nc = Bc(nc)).isZero()) {
            if (cB.isZero()) return {
              value: [0],
              isNegative: !1
            };
            throw new Error("Cannot convert nonzero numbers to base 0.")
          }
          if (nc.equals(-1)) {
            if (cB.isZero()) return {
              value: [0],
              isNegative: !1
            };
            if (cB.isNegative()) return {
              value: [].concat.apply([], Array.apply(null, Array(-cB.toJSNumber())).map(Array.prototype.valueOf, [1, 0])),
              isNegative: !1
            };
            var Vc = Array.apply(null, Array(cB.toJSNumber() - 1)).map(Array.prototype.valueOf, [0, 1]);
            return Vc.unshift([1]), {
              value: [].concat.apply([], Vc),
              isNegative: !1
            }
          }
          var Ic = !1;
          if (cB.isNegative() && nc.isPositive() && (Ic = !0, cB = cB.abs()), nc.isUnit()) return cB.isZero() ? {
            value: [0],
            isNegative: !1
          } : {
            value: Array.apply(null, Array(cB.toJSNumber())).map(Number.prototype.valueOf, 1),
            isNegative: Ic
          };
          for (var rB, uc = [], sc = cB; sc.isNegative() || sc.compareAbs(nc) >= 0;) {
            rB = sc.divmod(nc), sc = rB.quotient;
            var Mc = rB.remainder;
            Mc.isNegative() && (Mc = nc.minus(Mc).abs(), sc = sc.next()), uc.push(Mc.toJSNumber())
          }
          return uc.push(sc.toJSNumber()), {
            value: uc.reverse(),
            isNegative: Ic
          }
        }

        function Kc(cB, Bc, nc) {
          var Vc = iB(cB, Bc);
          return (Vc.isNegative ? "-" : "") + Vc.value.map((function(cB) {
            return function(cB, Bc) {
              return cB < (Bc = Bc || rB).length ? Bc[cB] : "<" + cB + ">"
            }(cB, nc)
          })).join("")
        }

        function xB(cB) {
          if (Oc(+cB)) {
            var Bc = +cB;
            if (Bc === tB(Bc)) return uc ? new qB(BigInt(Bc)) : new Pc(Bc);
            throw new Error("Invalid integer: " + cB)
          }
          var nc = "-" === cB[0];
          nc && (cB = cB.slice(1));
          var Vc = cB.split(/e/i);
          if (Vc.length > 2) throw new Error("Invalid integer: " + Vc.join("e"));
          if (2 === Vc.length) {
            var Ic = Vc[1];
            if ("+" === Ic[0] && (Ic = Ic.slice(1)), (Ic = +Ic) !== tB(Ic) || !Oc(Ic)) throw new Error("Invalid integer: " + Ic + " is not a valid exponent.");
            var rB = Vc[0],
              sc = rB.indexOf(".");
            if (sc >= 0 && (Ic -= rB.length - sc - 1, rB = rB.slice(0, sc) + rB.slice(sc + 1)), Ic < 0) throw new Error("Cannot include negative exponent part for integers");
            cB = rB += new Array(Ic + 1).join("0")
          }
          if (!/^([0-9][0-9]*)$/.test(cB)) throw new Error("Invalid integer: " + cB);
          if (uc) return new qB(BigInt(nc ? "-" + cB : cB));
          for (var Tc = [], fc = cB.length, ec = fc - 7; fc > 0;) Tc.push(+cB.slice(ec, fc)), (ec -= 7) < 0 && (ec = 0), fc -= 7;
          return mB(Tc), new Mc(Tc, nc)
        }

        function dc(cB) {
          return "number" === typeof cB ? function(cB) {
            if (uc) return new qB(BigInt(cB));
            if (Oc(cB)) {
              if (cB !== tB(cB)) throw new Error(cB + " is not an integer.");
              return new Pc(cB)
            }
            return xB(cB.toString())
          }(cB) : "string" === typeof cB ? xB(cB) : "bigint" === typeof cB ? new qB(cB) : cB
        }
        Mc.prototype.toArray = function(cB) {
          return iB(this, cB)
        }, Pc.prototype.toArray = function(cB) {
          return iB(this, cB)
        }, qB.prototype.toArray = function(cB) {
          return iB(this, cB)
        }, Mc.prototype.toString = function(Bc, nc) {
          if (Bc === cB && (Bc = 10), 10 !== Bc) return Kc(this, Bc, nc);
          for (var Vc, Ic = this.value, rB = Ic.length, uc = String(Ic[--rB]); --rB >= 0;) Vc = String(Ic[rB]), uc += "0000000".slice(Vc.length) + Vc;
          return (this.sign ? "-" : "") + uc
        }, Pc.prototype.toString = function(Bc, nc) {
          return Bc === cB && (Bc = 10), 10 != Bc ? Kc(this, Bc, nc) : String(this.value)
        }, qB.prototype.toString = Pc.prototype.toString, qB.prototype.toJSON = Mc.prototype.toJSON = Pc.prototype.toJSON = function() {
          return this.toString()
        }, Mc.prototype.valueOf = function() {
          return parseInt(this.toString(), 10)
        }, Mc.prototype.toJSNumber = Mc.prototype.valueOf, Pc.prototype.valueOf = function() {
          return this.value
        }, Pc.prototype.toJSNumber = Pc.prototype.valueOf, qB.prototype.valueOf = qB.prototype.toJSNumber = function() {
          return parseInt(this.toString(), 10)
        };
        for (var Ac = 0; Ac < 1e3; Ac++) sc[Ac] = dc(Ac), Ac > 0 && (sc[-Ac] = dc(-Ac));
        return sc.one = sc[1], sc.zero = sc[0], sc.minusOne = sc[-1], sc.max = Hc, sc.min = Fc, sc.gcd = Jc, sc.lcm = function(cB, Bc) {
          return cB = dc(cB).abs(), Bc = dc(Bc).abs(), cB.divide(Jc(cB, Bc)).multiply(Bc)
        }, sc.isInstance = function(cB) {
          return cB instanceof Mc || cB instanceof Pc || cB instanceof qB
        }, sc.randBetween = function(cB, Bc, Vc) {
          cB = dc(cB), Bc = dc(Bc);
          var Ic = Vc || Math.random,
            rB = Fc(cB, Bc),
            uc = Hc(cB, Bc).subtract(rB).add(1);
          if (uc.isSmall) return rB.add(Math.floor(Ic() * uc));
          for (var Mc = iB(uc, nc).value, Pc = [], qB = !0, Oc = 0; Oc < Mc.length; Oc++) {
            var Tc = qB ? Mc[Oc] : nc,
              fc = tB(Ic() * Tc);
            Pc.push(fc), fc < Tc && (qB = !1)
          }
          return rB.add(sc.QMc(Pc, nc, !1))
        }, sc.QMc = function(cB, Bc, nc) {
          return Rc(cB.map(dc), dc(Bc || 10), nc)
        }, sc
      }();
      cB.hasOwnProperty("exports") && (cB.exports = Bc)
    }(zV);
    var pn = rB(zV.exports);

    function hn(cB, Bc, nc) {
      let Vc = 0;
      for (let Ic = 0; Ic < nc; Ic++) {
        const nc = cB[Bc + Ic];
        if (void 0 === nc) break;
        Vc += nc * 16 ** Ic
      }
      return Vc
    }

    function aV(cB) {
      const Bc = [];
      for (let nc = 0; nc < cB.length; nc++) {
        let Vc = Number(cB[nc]);
        for (let cB = 0; Vc || cB < Bc.length; cB++) Vc += 10 * (Bc[cB] || 0), Bc[cB] = Vc % 16, Vc = (Vc - Bc[cB]) / 16
      }
      return Bc
    }
    class lnc {
      static fromString(cB) {
        return new lnc(function(cB) {
          const Bc = aV(cB),
            nc = Array(4);
          for (let Vc = 0; Vc < 4; Vc++) nc[3 - Vc] = hn(Bc, 4 * Vc, 4);
          return nc
        }(cB), cB)
      }
      static fromBit(cB) {
        const Bc = Array(4),
          nc = Math.floor(cB / 16);
        for (let Vc = 0; Vc < 4; Vc++) Bc[3 - Vc] = Vc === nc ? 1 << cB - 16 * nc : 0;
        return new lnc(Bc)
      }
      constructor(cB, Bc) {
        this.parts = cB, this.str = Bc
      }
      and(cB) {
        let {
          parts: Bc
        } = cB;
        return new lnc(this.parts.map(((cB, nc) => cB & Bc[nc])))
      }
      or(cB) {
        let {
          parts: Bc
        } = cB;
        return new lnc(this.parts.map(((cB, nc) => cB | Bc[nc])))
      }
      xor(cB) {
        let {
          parts: Bc
        } = cB;
        return new lnc(this.parts.map(((cB, nc) => cB ^ Bc[nc])))
      }
      not() {
        return new lnc(this.parts.map((cB => ~cB)))
      }
      equals(cB) {
        let {
          parts: Bc
        } = cB;
        return this.parts.every(((cB, nc) => cB === Bc[nc]))
      }
      toString() {
        if (null != this.str) return this.str;
        const cB = new Array(16);
        return this.parts.forEach(((Bc, nc) => {
          const Vc = aV(Bc.toString());
          for (let Ic = 0; Ic < 4; Ic++) cB[Ic + 4 * nc] = Vc[3 - Ic] || 0
        })), this.str = pn.QMc(cB, 16).toString()
      }
      toJSON() {
        return this.toString()
      }
    }
    const Yn = function() {
      try {
        return BigInt, !0
      } catch (cB) {
        return !1
      }
    }();
    Yn && null == BigInt.prototype.toJSON && (BigInt.prototype.toJSON = function() {
      return this.toString()
    });
    const Ln = {},
      gV = Yn ? function(cB) {
        return BigInt(cB)
      } : function(cB) {
        return cB instanceof lnc ? cB : ("number" === typeof cB && (cB = cB.toString()), null != Ln[cB] || (Ln[cB] = lnc.fromString(cB)), Ln[cB])
      },
      Un = gV(0),
      bV = Yn ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Un) & (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Un)
      } : function() {
        let cB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Un;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Un).and(cB)
      },
      Zn = Yn ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Un) | (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Un)
      } : function() {
        let cB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Un;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Un).or(cB)
      },
      Qn = Yn ? function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Un) ^ (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Un)
      } : function() {
        let cB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Un;
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Un).xor(cB)
      },
      Cn = Yn ? function(cB, Bc) {
        return cB === Bc
      } : function(cB, Bc) {
        return null == cB || null == Bc ? cB == Bc : cB.equals(Bc)
      };
    var vV, Dn, Nn, En, onc = {
      combine: function() {
        let cB = arguments.length <= 0 ? void 0 : arguments[0];
        for (let Bc = 1; Bc < arguments.length; Bc++) cB = Zn(cB, Bc < 0 || arguments.length <= Bc ? void 0 : arguments[Bc]);
        return cB
      },
      add: function(cB, Bc) {
        return Bc === Un ? cB : Zn(cB, Bc)
      },
      remove: function(cB, Bc) {
        return Bc === Un ? cB : Qn(cB, bV(cB, Bc))
      },
      filter: bV,
      invert: Yn ? function() {
        return ~(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Un)
      } : function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Un).not()
      },
      has: function(cB, Bc) {
        return Cn(bV(cB, Bc), Bc)
      },
      hasAny: function(cB, Bc) {
        return !Cn(bV(cB, Bc), Un)
      },
      equals: Cn,
      deserialize: gV,
      getFlag: Yn ? function(cB) {
        return BigInt(1) << BigInt(cB)
      } : function(cB) {
        return lnc.fromBit(cB)
      }
    };
    ! function(cB) {
      cB[cB.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", cB[cB.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", cB[cB.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", cB[cB.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", cB[cB.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", cB[cB.RATELIMITED = 4002] = "RATELIMITED", cB[cB.TOKEN_REVOKED = 4003] = "TOKEN_REVOKED", cB[cB.INVALID_VERSION = 4004] = "INVALID_VERSION", cB[cB.INVALID_ENCODING = 4005] = "INVALID_ENCODING"
    }(vV || (vV = {})),
    function(cB) {
      cB[cB.INVALID_PAYLOAD = 4e3] = "INVALID_PAYLOAD", cB[cB.INVALID_COMMAND = 4002] = "INVALID_COMMAND", cB[cB.INVALID_EVENT = 4004] = "INVALID_EVENT", cB[cB.INVALID_PERMISSIONS = 4006] = "INVALID_PERMISSIONS"
    }(Dn || (Dn = {})),
    function(cB) {
      cB.LANDSCAPE = "landscape", cB.PORTRAIT = "portrait"
    }(Nn || (Nn = {})),
    function(cB) {
      cB.MOBILE = "mobile", cB.DESKTOP = "desktop"
    }(En || (En = {}));
    Object.freeze({
      CREATE_INSTANT_INVITE: onc.getFlag(0),
      ADMINISTRATOR: onc.getFlag(3)
    });

    function Wn(cB) {
      return mV((Bc => {
        var nc;
        const [Vc] = null !== (nc = Object.entries(cB).find((cB => {
          let [, nc] = cB;
          return nc === Bc
        }))) && void 0 !== nc ? nc : [];
        return null != Bc && void 0 === Vc ? cB.UNHANDLED : Bc
      }), DB().or(NB()))
    }
    const wn = yV.object({
        image_url: yV.string()
      }),
      kV = yV.object({
        mediaUrl: yV.string().max(1024)
      }),
      Xn = yV.object({
        access_token: yV.union([yV.string(), yV.null()]).optional()
      }),
      Hn = yV.object({
        access_token: yV.string(),
        user: yV.object({
          username: yV.string(),
          discriminator: yV.string(),
          id: yV.string(),
          avatar: yV.union([yV.string(), yV.null()]).optional(),
          public_flags: yV.number(),
          global_name: yV.union([yV.string(), yV.null()]).optional()
        }),
        scopes: yV.array(function(cB) {
          const Bc = QB().transform((Bc => {
            const nc = cB.safeParse(Bc);
            return nc.success ? nc.data : cB._def.defaultValue()
          }));
          return Bc.overlayType = cB, Bc
        }(yV.enum(["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]).or(yV.literal(-1)).default(-1))),
        expires: yV.string(),
        application: yV.object({
          description: yV.string(),
          icon: yV.union([yV.string(), yV.null()]).optional(),
          id: yV.string(),
          rpc_origins: yV.array(yV.string()).optional(),
          name: yV.string()
        })
      }),
      Fn = yV.object({
        participants: yV.array(yV.object({
          id: yV.string(),
          username: yV.string(),
          global_name: yV.union([yV.string(), yV.null()]).optional(),
          discriminator: yV.string(),
          avatar: yV.union([yV.string(), yV.null()]).optional(),
          flags: yV.number(),
          bot: yV.boolean(),
          avatar_decoration_data: yV.union([yV.object({
            asset: yV.string(),
            skuId: yV.string().optional()
          }), yV.null()]).optional(),
          premium_type: yV.union([yV.number(), yV.null()]).optional(),
          nickname: yV.string().optional()
        }))
      });
    var Jn;
    ! function(cB) {
      cB.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", cB.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", cB.AUTHENTICATE = "AUTHENTICATE", cB.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(Jn || (Jn = {}));
    const jV = yV.object({}).optional().nullable(),
      Rn = yV.void(),
      iV = {
        [Jn.INITIATE_IMAGE_UPLOAD]: {
          request: Rn,
          response: wn
        },
        [Jn.OPEN_SHARE_MOMENT_DIALOG]: {
          request: kV,
          response: jV
        },
        [Jn.AUTHENTICATE]: {
          request: Xn,
          response: Hn
        },
        [Jn.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
          request: Rn,
          response: Fn
        }
      },
      Kn = "DISPATCH";
    var xV;
    ! function(cB) {
      cB.AUTHORIZE = "AUTHORIZE", cB.AUTHENTICATE = "AUTHENTICATE", cB.GET_GUILDS = "GET_GUILDS", cB.GET_GUILD = "GET_GUILD", cB.GET_CHANNEL = "GET_CHANNEL", cB.GET_CHANNELS = "GET_CHANNELS", cB.SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL", cB.SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL", cB.SUBSCRIBE = "SUBSCRIBE", cB.UNSUBSCRIBE = "UNSUBSCRIBE", cB.CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT", cB.SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES", cB.SET_ACTIVITY = "SET_ACTIVITY", cB.GET_SKUS = "GET_SKUS", cB.GET_ENTITLEMENTS = "GET_ENTITLEMENTS", cB.GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED", cB.GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED", cB.START_PURCHASE = "START_PURCHASE", cB.SET_CONFIG = "SET_CONFIG", cB.SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT", cB.USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE", cB.OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK", cB.ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION", cB.CAPTURE_LOG = "CAPTURE_LOG", cB.SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE", cB.OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG", cB.GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS", cB.GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS", cB.OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG", cB.INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD", cB.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
    }(xV || (xV = {}));
    const dn = xn({
        cmd: DB(),
        data: JB(),
        evt: HB(),
        nonce: DB()
      }).passthrough(),
      An = (Wn(Object.assign(Object.assign({}, Hn.shape.scopes.element.overlayType._def.innerType.options[0].Values), {
        UNHANDLED: -1
      })), xn({
        id: DB(),
        username: DB(),
        discriminator: DB(),
        global_name: DB().optional().nullable(),
        avatar: DB().optional().nullable(),
        avatar_decoration_data: xn({
          asset: DB(),
          sku_id: DB().optional()
        }).nullable(),
        bot: WB(),
        flags: NB().optional().nullable(),
        premium_type: NB().optional().nullable()
      })),
      Gn = xn({
        user: An,
        nick: DB().optional().nullable(),
        roles: KB(DB()),
        joined_at: DB(),
        deaf: WB(),
        mute: WB()
      }),
      cI = xn({
        id: DB(),
        name: DB().optional().nullable(),
        roles: KB(DB()).optional().nullable(),
        user: An.optional().nullable(),
        require_colons: WB().optional().nullable(),
        managed: WB().optional().nullable(),
        animated: WB().optional().nullable(),
        available: WB().optional().nullable()
      }),
      BV = xn({
        mute: WB(),
        deaf: WB(),
        self_mute: WB(),
        self_deaf: WB(),
        suppress: WB()
      }),
      nV = xn({
        mute: WB(),
        nick: DB(),
        user: An,
        voice_state: BV,
        volume: NB()
      }),
      VV = Wn({
        UNHANDLED: -1,
        IDLE: "idle",
        DND: "dnd",
        ONLINE: "online",
        OFFLINE: "offline"
      }),
      IV = xn({
        name: DB(),
        type: NB(),
        url: DB().optional().nullable(),
        created_at: NB().optional().nullable(),
        timestamps: xn({
          start: NB(),
          end: NB()
        }).partial().optional().nullable(),
        application_id: DB().optional().nullable(),
        details: DB().optional().nullable(),
        state: DB().optional().nullable(),
        emoji: cI.optional().nullable(),
        party: xn({
          id: DB().optional().nullable(),
          size: KB(NB()).optional().nullable()
        }).optional().nullable(),
        assets: xn({
          large_image: DB().nullable(),
          large_text: DB().nullable(),
          small_image: DB().nullable(),
          small_text: DB().nullable()
        }).partial().optional().nullable(),
        secrets: xn({
          join: DB(),
          match: DB()
        }).partial().optional().nullable(),
        instance: WB().optional().nullable(),
        flags: NB().optional().nullable()
      }),
      rI = xn({
        id: DB(),
        type: Wn({
          UNHANDLED: -1,
          ROLE: 0,
          MEMBER: 1
        }),
        allow: DB(),
        deny: DB()
      }),
      uV = {
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
      sV = xn({
        id: DB(),
        type: Wn(uV),
        guild_id: DB().optional().nullable(),
        position: NB().optional().nullable(),
        permission_overwrites: KB(rI).optional().nullable(),
        name: DB().optional().nullable(),
        topic: DB().optional().nullable(),
        nsfw: WB().optional().nullable(),
        last_message_id: DB().optional().nullable(),
        bitrate: NB().optional().nullable(),
        user_limit: NB().optional().nullable(),
        rate_limit_per_user: NB().optional().nullable(),
        recipients: KB(An).optional().nullable(),
        icon: DB().optional().nullable(),
        owner_id: DB().optional().nullable(),
        application_id: DB().optional().nullable(),
        parent_id: DB().optional().nullable(),
        last_pin_timestamp: DB().optional().nullable()
      }),
      MV = xn({
        user: An,
        guild_id: DB(),
        status: VV,
        activities: KB(IV),
        client_status: xn({
          desktop: VV,
          mobile: VV,
          web: VV
        }).partial()
      }),
      PV = xn({
        id: DB(),
        name: DB(),
        color: NB(),
        hoist: WB(),
        position: NB(),
        permissions: DB(),
        managed: WB(),
        mentionable: WB()
      }),
      qI = (xn({
        id: DB(),
        name: DB(),
        owner_id: DB(),
        icon: DB().nullable(),
        icon_hash: DB().optional().nullable(),
        splash: DB().nullable(),
        discovery_splash: DB().nullable(),
        owner: WB().optional().nullable(),
        permissions: DB().optional().nullable(),
        region: DB(),
        afk_channel_id: DB().nullable(),
        afk_timeout: NB(),
        widget_enabled: WB().optional().nullable(),
        widget_channel_id: DB().optional().nullable(),
        verification_level: NB(),
        default_message_notifications: NB(),
        explicit_content_filter: NB(),
        roles: KB(PV),
        emojis: KB(cI),
        features: KB(DB()),
        mfa_level: NB(),
        application_id: DB().nullable(),
        system_channel_id: DB().nullable(),
        system_channel_flags: NB(),
        rules_channel_id: DB().nullable(),
        joined_at: DB().optional().nullable(),
        large: WB().optional().nullable(),
        unavailable: WB().optional().nullable(),
        member_count: NB().optional().nullable(),
        voice_states: KB(BV).optional().nullable(),
        members: KB(Gn).optional().nullable(),
        channels: KB(sV).optional().nullable(),
        presences: KB(MV).optional().nullable(),
        max_presences: NB().optional().nullable(),
        max_members: NB().optional().nullable(),
        vanity_url_code: DB().nullable(),
        description: DB().nullable(),
        banner: DB().nullable(),
        premium_tier: NB(),
        premium_subscription_count: NB().optional().nullable(),
        preferred_locale: DB(),
        public_updates_channel_id: DB().nullable(),
        max_video_channel_users: NB().optional().nullable(),
        approximate_member_count: NB().optional().nullable(),
        approximate_presence_count: NB().optional().nullable()
      }), xn({
        id: DB(),
        guild_id: DB(),
        type: NB(),
        name: DB()
      })),
      OV = xn({
        id: DB(),
        filename: DB(),
        size: NB(),
        url: DB(),
        proxy_url: DB(),
        height: NB().optional().nullable(),
        width: NB().optional().nullable()
      }),
      TV = xn({
        text: DB(),
        icon_url: DB().optional().nullable(),
        proxy_icon_url: DB().optional().nullable()
      }),
      fV = xn({
        url: DB().optional().nullable(),
        proxy_url: DB().optional().nullable(),
        height: NB().optional().nullable(),
        width: NB().optional().nullable()
      }),
      mI = fV.omit({
        proxy_url: !0
      }),
      eV = xn({
        name: DB().optional().nullable(),
        url: DB().optional().nullable()
      }),
      tI = xn({
        name: DB().optional().nullable(),
        url: DB().optional().nullable(),
        icon_url: DB().optional().nullable(),
        proxy_icon_url: DB().optional().nullable()
      }),
      SV = xn({
        name: DB(),
        value: DB(),
        inline: WB()
      }),
      yI = xn({
        title: DB().optional().nullable(),
        type: DB().optional().nullable(),
        description: DB().optional().nullable(),
        url: DB().optional().nullable(),
        timestamp: DB().optional().nullable(),
        color: NB().optional().nullable(),
        footer: TV.optional().nullable(),
        image: fV.optional().nullable(),
        thumbnail: fV.optional().nullable(),
        video: mI.optional().nullable(),
        provider: eV.optional().nullable(),
        author: tI.optional().nullable(),
        fields: KB(SV).optional().nullable()
      }),
      zI = xn({
        count: NB(),
        me: WB(),
        emoji: cI
      }),
      pV = xn({
        type: NB(),
        party_id: DB().optional().nullable()
      }),
      hV = xn({
        id: DB(),
        cover_image: DB().optional().nullable(),
        description: DB(),
        icon: DB().optional().nullable(),
        name: DB()
      }),
      aI = xn({
        message_id: DB().optional().nullable(),
        channel_id: DB().optional().nullable(),
        guild_id: DB().optional().nullable()
      }),
      lV = xn({
        id: DB(),
        channel_id: DB(),
        guild_id: DB().optional().nullable(),
        author: An.optional().nullable(),
        member: Gn.optional().nullable(),
        content: DB(),
        timestamp: DB(),
        edited_timestamp: DB().optional().nullable(),
        tts: WB(),
        mention_everyone: WB(),
        mentions: KB(An),
        mention_roles: KB(DB()),
        mention_channels: KB(qI),
        attachments: KB(OV),
        embeds: KB(yI),
        reactions: KB(zI).optional().nullable(),
        nonce: AB([DB(), NB()]).optional().nullable(),
        pinned: WB(),
        webhook_id: DB().optional().nullable(),
        type: NB(),
        activity: pV.optional().nullable(),
        application: hV.optional().nullable(),
        message_reference: aI.optional().nullable(),
        flags: NB().optional().nullable(),
        stickers: KB(JB()).optional().nullable(),
        referenced_message: JB().optional().nullable()
      }),
      YV = xn({
        id: DB(),
        name: DB()
      }),
      LV = xn({
        type: Wn({
          UNHANDLED: -1,
          KEYBOARD_KEY: 0,
          MOUSE_BUTTON: 1,
          KEYBOARD_MODIFIER_KEY: 2,
          GAMEPAD_BUTTON: 3
        }),
        code: NB(),
        name: DB()
      }),
      gI = xn({
        type: Wn({
          UNHANDLED: -1,
          PUSH_TO_TALK: "PUSH_TO_TALK",
          VOICE_ACTIVITY: "VOICE_ACTIVITY"
        }),
        auto_threshold: WB(),
        threshold: NB(),
        shortcut: KB(LV),
        delay: NB()
      }),
      UV = xn({
        device_id: DB(),
        volume: NB(),
        available_devices: KB(YV)
      }),
      bI = (xn({
        type: Wn({
          UNHANDLED: -1,
          AUDIO_INPUT: "AUDIO_INPUT",
          AUDIO_OUTPUT: "AUDIO_OUTPUT",
          VIDEO_INPUT: "VIDEO_INPUT"
        }),
        id: DB(),
        vendor: xn({
          name: DB(),
          url: DB()
        }),
        model: xn({
          name: DB(),
          url: DB()
        }),
        related: KB(DB()),
        echo_cancellation: WB().optional().nullable(),
        noise_suppression: WB().optional().nullable(),
        automatic_gain_control: WB().optional().nullable(),
        hardware_mute: WB().optional().nullable()
      }), xn({
        id: DB(),
        name: DB(),
        type: Wn({
          UNHANDLED: -1,
          APPLICATION: 1,
          DLC: 2,
          CONSUMABLE: 3,
          BUNDLE: 4,
          SUBSCRIPTION: 5
        }),
        price: xn({
          amount: NB(),
          currency: DB()
        }),
        application_id: DB(),
        flags: NB(),
        release_date: DB().nullable()
      })),
      ZV = xn({
        id: DB(),
        sku_id: DB(),
        application_id: DB(),
        user_id: DB(),
        gift_code_flags: NB(),
        type: Wn({
          UNHANDLED: -1,
          PURCHASE: 1,
          PREMIUM_SUBSCRIPTION: 2,
          DEVELOPER_GIFT: 3,
          TEST_MODE_PURCHASE: 4,
          FREE_PURCHASE: 5,
          USER_GIFT: 6,
          PREMIUM_PURCHASE: 7
        }),
        gifter_user_id: DB().optional().nullable(),
        branches: KB(DB()).optional().nullable(),
        starts_at: DB().optional().nullable(),
        ends_at: DB().optional().nullable(),
        parent_id: DB().optional().nullable(),
        consumed: WB().optional().nullable(),
        deleted: WB().optional().nullable(),
        gift_code_batch_id: DB().optional().nullable()
      }),
      QV = (Wn({
        UNHANDLED: -1,
        UNLOCKED: 1,
        PORTRAIT: 2,
        LANDSCAPE: 3
      }), Wn({
        UNHANDLED: -1,
        NOMINAL: 0,
        FAIR: 1,
        SERIOUS: 2,
        CRITICAL: 3
      })),
      CV = {
        UNHANDLED: -1,
        PORTRAIT: 0,
        LANDSCAPE: 1
      },
      vI = (Wn(CV), {
        UNHANDLED: -1,
        FOCUSED: 0,
        PIP: 1,
        GRID: 2
      }),
      DV = (Wn(vI), "ERROR");
    var NV;
    ! function(cB) {
      cB.READY = "READY", cB.VOICE_STATE_UPDATE = "VOICE_STATE_UPDATE", cB.SPEAKING_START = "SPEAKING_START", cB.SPEAKING_STOP = "SPEAKING_STOP", cB.ACTIVITY_LAYOUT_MODE_UPDATE = "ACTIVITY_LAYOUT_MODE_UPDATE", cB.ORIENTATION_UPDATE = "ORIENTATION_UPDATE", cB.CURRENT_USER_UPDATE = "CURRENT_USER_UPDATE", cB.ENTITLEMENT_CREATE = "ENTITLEMENT_CREATE", cB.THERMAL_STATE_UPDATE = "THERMAL_STATE_UPDATE", cB.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"
    }(NV || (NV = {}));
    const EV = dn.extend({
        evt: Pn(NV),
        nonce: DB().nullable(),
        cmd: sn(Kn),
        data: xn({}).passthrough()
      }),
      oV = dn.extend({
        evt: sn(DV),
        data: xn({
          code: NB(),
          message: DB().optional()
        }).passthrough(),
        cmd: Pn(xV),
        nonce: DB().nullable()
      }),
      WV = EV.extend({
        evt: DB()
      }),
      wV = AB([EV, WV, oV]);
    const kI = {
      [NV.READY]: {
        payload: EV.extend({
          evt: sn(NV.READY),
          data: xn({
            v: NB(),
            config: xn({
              cdn_host: DB().optional(),
              api_endpoint: DB(),
              environment: DB()
            }),
            user: xn({
              id: DB(),
              username: DB(),
              discriminator: DB(),
              avatar: DB().optional()
            }).optional()
          })
        })
      },
      [NV.VOICE_STATE_UPDATE]: {
        payload: EV.extend({
          evt: sn(NV.VOICE_STATE_UPDATE),
          data: nV
        }),
        subscribeArgs: xn({
          channel_id: DB()
        })
      },
      [NV.SPEAKING_START]: {
        payload: EV.extend({
          evt: sn(NV.SPEAKING_START),
          data: xn({
            lobby_id: DB().optional(),
            channel_id: DB().optional(),
            user_id: DB()
          })
        }),
        subscribeArgs: xn({
          lobby_id: DB().nullable().optional(),
          channel_id: DB().nullable().optional()
        })
      },
      [NV.SPEAKING_STOP]: {
        payload: EV.extend({
          evt: sn(NV.SPEAKING_STOP),
          data: xn({
            lobby_id: DB().optional(),
            channel_id: DB().optional(),
            user_id: DB()
          })
        }),
        subscribeArgs: xn({
          lobby_id: DB().nullable().optional(),
          channel_id: DB().nullable().optional()
        })
      },
      [NV.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: EV.extend({
          evt: sn(NV.ACTIVITY_LAYOUT_MODE_UPDATE),
          data: xn({
            layout_mode: Wn(vI)
          })
        })
      },
      [NV.ORIENTATION_UPDATE]: {
        payload: EV.extend({
          evt: sn(NV.ORIENTATION_UPDATE),
          data: xn({
            screen_orientation: Wn(CV),
            orientation: Pn(Nn)
          })
        })
      },
      [NV.CURRENT_USER_UPDATE]: {
        payload: EV.extend({
          evt: sn(NV.CURRENT_USER_UPDATE),
          data: An
        })
      },
      [NV.ENTITLEMENT_CREATE]: {
        payload: EV.extend({
          evt: sn(NV.ENTITLEMENT_CREATE),
          data: xn({
            entitlement: ZV
          })
        })
      },
      [NV.THERMAL_STATE_UPDATE]: {
        payload: EV.extend({
          evt: sn(NV.THERMAL_STATE_UPDATE),
          data: xn({
            thermal_state: QV
          })
        })
      },
      [NV.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: EV.extend({
          evt: sn(NV.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
          data: xn({
            participants: Fn.shape.participants
          })
        })
      }
    };
    const XV = xn({}).nullable(),
      HV = xn({
        code: DB()
      }),
      FV = xn({
        guilds: KB(xn({
          id: DB(),
          name: DB()
        }))
      }),
      JV = xn({
        id: DB(),
        name: DB(),
        icon_url: DB().optional(),
        members: KB(Gn)
      }),
      jI = xn({
        id: DB(),
        type: Wn(uV),
        guild_id: DB().optional().nullable(),
        name: DB().optional().nullable(),
        topic: DB().optional().nullable(),
        bitrate: NB().optional().nullable(),
        user_limit: NB().optional().nullable(),
        position: NB().optional().nullable(),
        voice_states: KB(nV),
        messages: KB(lV)
      }),
      RV = xn({
        channels: KB(sV)
      }),
      iI = (jI.nullable(), jI.nullable()),
      KV = jI.nullable(),
      xI = (xn({
        input: UV,
        output: UV,
        mode: gI,
        automatic_gain_control: WB(),
        echo_cancellation: WB(),
        noise_suppression: WB(),
        qos: WB(),
        silence_warning: WB(),
        deaf: WB(),
        mute: WB()
      }), xn({
        evt: DB()
      })),
      dV = xn({
        shortcut: LV
      }),
      AV = IV,
      GV = xn({
        skus: KB(bI)
      }),
      cr = xn({
        entitlements: KB(ZV)
      }),
      BI = KB(ZV).nullable(),
      nI = xn({
        use_interactive_pip: WB()
      }),
      VI = xn({
        locale: DB()
      }),
      II = xn({
        enabled: WB()
      }),
      rr = xn({
        permissions: oB().or(DB())
      }),
      uI = xn({
        iosKeyboardResizesView: Tn(WB())
      }),
      sI = dn.extend({
        cmd: Pn(xV),
        evt: HB()
      });

    function MI(cB) {
      let {
        cmd: Bc,
        data: nc
      } = cB;
      switch (Bc) {
        case xV.AUTHORIZE:
          return HV.parse(nc);
        case xV.CAPTURE_SHORTCUT:
          return dV.parse(nc);
        case xV.ENCOURAGE_HW_ACCELERATION:
          return II.parse(nc);
        case xV.GET_CHANNEL:
          return jI.parse(nc);
        case xV.GET_CHANNELS:
          return RV.parse(nc);
        case xV.GET_CHANNEL_PERMISSIONS:
          return rr.parse(nc);
        case xV.GET_GUILD:
          return JV.parse(nc);
        case xV.GET_GUILDS:
          return FV.parse(nc);
        case xV.GET_PLATFORM_BEHAVIORS:
          return uI.parse(nc);
        case xV.GET_CHANNEL:
          return jI.parse(nc);
        case xV.SELECT_TEXT_CHANNEL:
          return KV.parse(nc);
        case xV.SELECT_VOICE_CHANNEL:
          return iI.parse(nc);
        case xV.SET_ACTIVITY:
          return AV.parse(nc);
        case xV.GET_SKUS_EMBEDDED:
          return GV.parse(nc);
        case xV.GET_ENTITLEMENTS_EMBEDDED:
          return cr.parse(nc);
        case xV.SET_CONFIG:
          return nI.parse(nc);
        case xV.START_PURCHASE:
          return BI.parse(nc);
        case xV.SUBSCRIBE:
        case xV.UNSUBSCRIBE:
          return xI.parse(nc);
        case xV.USER_SETTINGS_GET_LOCALE:
          return VI.parse(nc);
        case xV.OPEN_EXTERNAL_LINK:
        case xV.SET_ORIENTATION_LOCK_STATE:
        case xV.SET_CERTIFIED_DEVICES:
        case xV.SEND_ANALYTICS_EVENT:
        case xV.OPEN_INVITE_DIALOG:
        case xV.CAPTURE_LOG:
        case xV.GET_SKUS:
        case xV.GET_ENTITLEMENTS:
          return XV.parse(nc);
        case xV.AUTHENTICATE:
        case xV.INITIATE_IMAGE_UPLOAD:
        case xV.OPEN_SHARE_MOMENT_DIALOG:
        case xV.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
          const {
            response: cB
          } = iV[Bc];
          return cB.parse(nc);
        default:
          ! function(cB, Bc) {
            throw Bc
          }(0, new Error(`Unrecognized command ${Bc}`))
      }
    }
    xn({
      frame_id: DB(),
      platform: Pn(En).optional().nullable()
    }), xn({
      v: sn(1),
      encoding: sn("json").optional(),
      client_id: DB(),
      frame_id: DB()
    });
    const PI = xn({
        code: NB(),
        message: DB().optional()
      }),
      qr = xn({
        evt: DB().nullable(),
        nonce: DB().nullable(),
        data: JB().nullable(),
        cmd: DB()
      }).passthrough();

    function OI(cB) {
      const Bc = qr.parse(cB);
      return null != Bc.evt ? Bc.evt === DV ? oV.parse(Bc) : function(cB) {
        const Bc = cB.evt;
        if (!(Bc in NV)) throw new Error(`Unrecognized event type ${cB.evt}`);
        return kI[Bc].payload.parse(cB)
      }(wV.parse(Bc)) : function(cB) {
        return Object.assign(Object.assign({}, cB), {
          data: MI(cB)
        })
      }(sI.passthrough().parse(Bc))
    }

    function TI(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
      const Ic = dn.extend({
        cmd: sn(Bc),
        data: nc
      });
      return async nc => {
        const rB = await cB({
          cmd: Bc,
          args: nc,
          transfer: Vc(nc)
        });
        return Ic.parse(rB).data
      }
    }

    function fI(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
      const nc = iV[cB].response,
        Vc = dn.extend({
          cmd: sn(cB),
          data: nc
        });
      return nc => async Ic => {
        const rB = await nc({
          cmd: cB,
          args: Ic,
          transfer: Bc(Ic)
        });
        return Vc.parse(rB).data
      }
    }
    const mr = fI(Jn.AUTHENTICATE),
      eI = cB => TI(cB, xV.AUTHORIZE, HV),
      tr = cB => TI(cB, xV.CAPTURE_LOG, XV),
      SI = cB => TI(cB, xV.ENCOURAGE_HW_ACCELERATION, II),
      yr = cB => TI(cB, xV.GET_ENTITLEMENTS_EMBEDDED, cr),
      zr = cB => TI(cB, xV.GET_SKUS_EMBEDDED, GV),
      pI = cB => TI(cB, xV.GET_CHANNEL_PERMISSIONS, rr),
      hI = cB => TI(cB, xV.GET_PLATFORM_BEHAVIORS, uI),
      ar = cB => TI(cB, xV.OPEN_EXTERNAL_LINK, XV),
      lI = cB => TI(cB, xV.OPEN_INVITE_DIALOG, XV),
      YI = fI(Jn.OPEN_SHARE_MOMENT_DIALOG);
    IV.Vn({
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
      type: IV.shape.type.optional(),
      instance: IV.shape.instance.optional()
    }).nullable();
    const LI = cB => TI(cB, xV.SET_ACTIVITY, AV),
      gr = cB => TI(cB, xV.SET_CONFIG, nI);
    const UI = cB => ({
        lock_state: cB.lock_state,
        picture_in_picture_lock_state: cB.picture_in_picture_lock_state
      }),
      br = cB => function(cB) {
        let {
          sendCommand: Bc,
          cmd: nc,
          response: Vc,
          fallbackTransform: Ic,
          transferTransform: rB = () => {}
        } = cB;
        const uc = dn.extend({
          cmd: sn(nc),
          data: Vc
        });
        return async cB => {
          try {
            const Vc = await Bc({
              cmd: nc,
              args: cB,
              transfer: rB(cB)
            });
            return uc.parse(Vc).data
          } catch (Vc) {
            if (Vc.code === Dn.INVALID_PAYLOAD) {
              const Vc = Ic(cB),
                sc = await Bc({
                  cmd: nc,
                  args: Vc,
                  transfer: rB(Vc)
                });
              return uc.parse(sc).data
            }
            throw Vc
          }
        }
      }({
        sendCommand: cB,
        cmd: xV.SET_ORIENTATION_LOCK_STATE,
        response: XV,
        fallbackTransform: UI
      }),
      ZI = cB => TI(cB, xV.START_PURCHASE, BI),
      QI = cB => TI(cB, xV.USER_SETTINGS_GET_LOCALE, VI),
      CI = fI(Jn.INITIATE_IMAGE_UPLOAD),
      vr = cB => TI(cB, xV.GET_CHANNEL, jI),
      DI = fI(Jn.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);
    var NI = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

    function EI(cB) {
      return "string" === typeof cB && NI.test(cB)
    }
    for (var oI = [], WI = 0; WI < 256; ++WI) oI.push((WI + 256).toString(16).substr(1));

    function wI(cB) {
      var Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        nc = (oI[cB[Bc + 0]] + oI[cB[Bc + 1]] + oI[cB[Bc + 2]] + oI[cB[Bc + 3]] + "-" + oI[cB[Bc + 4]] + oI[cB[Bc + 5]] + "-" + oI[cB[Bc + 6]] + oI[cB[Bc + 7]] + "-" + oI[cB[Bc + 8]] + oI[cB[Bc + 9]] + "-" + oI[cB[Bc + 10]] + oI[cB[Bc + 11]] + oI[cB[Bc + 12]] + oI[cB[Bc + 13]] + oI[cB[Bc + 14]] + oI[cB[Bc + 15]]).toLowerCase();
      if (!EI(nc)) throw TypeError("Stringified UUID is invalid");
      return nc
    }
    var kr;

    function XI(cB, Bc, nc) {
      function Vc(cB, Vc, Ic, rB) {
        if ("string" === typeof cB && (cB = function(cB) {
            cB = unescape(encodeURIComponent(cB));
            for (var Bc = [], nc = 0; nc < cB.length; ++nc) Bc.push(cB.charCodeAt(nc));
            return Bc
          }(cB)), "string" === typeof Vc && (Vc = function(cB) {
            if (!EI(cB)) throw TypeError("Invalid UUID");
            var Bc, nc = new Uint8Array(16);
            return nc[0] = (Bc = parseInt(cB.slice(0, 8), 16)) >>> 24, nc[1] = Bc >>> 16 & 255, nc[2] = Bc >>> 8 & 255, nc[3] = 255 & Bc, nc[4] = (Bc = parseInt(cB.slice(9, 13), 16)) >>> 8, nc[5] = 255 & Bc, nc[6] = (Bc = parseInt(cB.slice(14, 18), 16)) >>> 8, nc[7] = 255 & Bc, nc[8] = (Bc = parseInt(cB.slice(19, 23), 16)) >>> 8, nc[9] = 255 & Bc, nc[10] = (Bc = parseInt(cB.slice(24, 36), 16)) / 1099511627776 & 255, nc[11] = Bc / 4294967296 & 255, nc[12] = Bc >>> 24 & 255, nc[13] = Bc >>> 16 & 255, nc[14] = Bc >>> 8 & 255, nc[15] = 255 & Bc, nc
          }(Vc)), 16 !== Vc.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
        var uc = new Uint8Array(16 + cB.length);
        if (uc.set(Vc), uc.set(cB, Vc.length), (uc = nc(uc))[6] = 15 & uc[6] | Bc, uc[8] = 63 & uc[8] | 128, Ic) {
          rB = rB || 0;
          for (var sc = 0; sc < 16; ++sc) Ic[rB + sc] = uc[sc];
          return Ic
        }
        return wI(uc)
      }
      try {
        Vc.name = cB
      } catch (Ic) {}
      return Vc.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", Vc.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", Vc
    }

    function HI(cB) {
      return 14 + (cB + 64 >>> 9 << 4) + 1
    }

    function FI(cB, Bc) {
      var nc = (65535 & cB) + (65535 & Bc);
      return (cB >> 16) + (Bc >> 16) + (nc >> 16) << 16 | 65535 & nc
    }

    function JI(cB, Bc, nc, Vc, Ic, rB) {
      return FI((uc = FI(FI(Bc, cB), FI(Vc, rB))) << (sc = Ic) | uc >>> 32 - sc, nc);
      var uc, sc
    }

    function jr(cB, Bc, nc, Vc, Ic, rB, uc) {
      return JI(Bc & nc | ~Bc & Vc, cB, Bc, Ic, rB, uc)
    }

    function RI(cB, Bc, nc, Vc, Ic, rB, uc) {
      return JI(Bc & Vc | nc & ~Vc, cB, Bc, Ic, rB, uc)
    }

    function ir(cB, Bc, nc, Vc, Ic, rB, uc) {
      return JI(Bc ^ nc ^ Vc, cB, Bc, Ic, rB, uc)
    }

    function KI(cB, Bc, nc, Vc, Ic, rB, uc) {
      return JI(nc ^ (Bc | ~Vc), cB, Bc, Ic, rB, uc)
    }
    XI("v3", 48, (function(cB) {
      if ("string" === typeof cB) {
        var Bc = unescape(encodeURIComponent(cB));
        cB = new Uint8Array(Bc.length);
        for (var nc = 0; nc < Bc.length; ++nc) cB[nc] = Bc.charCodeAt(nc)
      }
      return function(cB) {
        for (var Bc = [], nc = 32 * cB.length, Vc = "0123456789abcdef", Ic = 0; Ic < nc; Ic += 8) {
          var rB = cB[Ic >> 5] >>> Ic % 32 & 255,
            uc = parseInt(Vc.charAt(rB >>> 4 & 15) + Vc.charAt(15 & rB), 16);
          Bc.push(uc)
        }
        return Bc
      }(function(cB, Bc) {
        cB[Bc >> 5] |= 128 << Bc % 32, cB[HI(Bc) - 1] = Bc;
        for (var nc = 1732584193, Vc = -271733879, Ic = -1732584194, rB = 271733878, uc = 0; uc < cB.length; uc += 16) {
          var sc = nc,
            Mc = Vc,
            Pc = Ic,
            qB = rB;
          nc = jr(nc, Vc, Ic, rB, cB[uc], 7, -680876936), rB = jr(rB, nc, Vc, Ic, cB[uc + 1], 12, -389564586), Ic = jr(Ic, rB, nc, Vc, cB[uc + 2], 17, 606105819), Vc = jr(Vc, Ic, rB, nc, cB[uc + 3], 22, -1044525330), nc = jr(nc, Vc, Ic, rB, cB[uc + 4], 7, -176418897), rB = jr(rB, nc, Vc, Ic, cB[uc + 5], 12, 1200080426), Ic = jr(Ic, rB, nc, Vc, cB[uc + 6], 17, -1473231341), Vc = jr(Vc, Ic, rB, nc, cB[uc + 7], 22, -45705983), nc = jr(nc, Vc, Ic, rB, cB[uc + 8], 7, 1770035416), rB = jr(rB, nc, Vc, Ic, cB[uc + 9], 12, -1958414417), Ic = jr(Ic, rB, nc, Vc, cB[uc + 10], 17, -42063), Vc = jr(Vc, Ic, rB, nc, cB[uc + 11], 22, -1990404162), nc = jr(nc, Vc, Ic, rB, cB[uc + 12], 7, 1804603682), rB = jr(rB, nc, Vc, Ic, cB[uc + 13], 12, -40341101), Ic = jr(Ic, rB, nc, Vc, cB[uc + 14], 17, -1502002290), nc = RI(nc, Vc = jr(Vc, Ic, rB, nc, cB[uc + 15], 22, 1236535329), Ic, rB, cB[uc + 1], 5, -165796510), rB = RI(rB, nc, Vc, Ic, cB[uc + 6], 9, -1069501632), Ic = RI(Ic, rB, nc, Vc, cB[uc + 11], 14, 643717713), Vc = RI(Vc, Ic, rB, nc, cB[uc], 20, -373897302), nc = RI(nc, Vc, Ic, rB, cB[uc + 5], 5, -701558691), rB = RI(rB, nc, Vc, Ic, cB[uc + 10], 9, 38016083), Ic = RI(Ic, rB, nc, Vc, cB[uc + 15], 14, -660478335), Vc = RI(Vc, Ic, rB, nc, cB[uc + 4], 20, -405537848), nc = RI(nc, Vc, Ic, rB, cB[uc + 9], 5, 568446438), rB = RI(rB, nc, Vc, Ic, cB[uc + 14], 9, -1019803690), Ic = RI(Ic, rB, nc, Vc, cB[uc + 3], 14, -187363961), Vc = RI(Vc, Ic, rB, nc, cB[uc + 8], 20, 1163531501), nc = RI(nc, Vc, Ic, rB, cB[uc + 13], 5, -1444681467), rB = RI(rB, nc, Vc, Ic, cB[uc + 2], 9, -51403784), Ic = RI(Ic, rB, nc, Vc, cB[uc + 7], 14, 1735328473), nc = ir(nc, Vc = RI(Vc, Ic, rB, nc, cB[uc + 12], 20, -1926607734), Ic, rB, cB[uc + 5], 4, -378558), rB = ir(rB, nc, Vc, Ic, cB[uc + 8], 11, -2022574463), Ic = ir(Ic, rB, nc, Vc, cB[uc + 11], 16, 1839030562), Vc = ir(Vc, Ic, rB, nc, cB[uc + 14], 23, -35309556), nc = ir(nc, Vc, Ic, rB, cB[uc + 1], 4, -1530992060), rB = ir(rB, nc, Vc, Ic, cB[uc + 4], 11, 1272893353), Ic = ir(Ic, rB, nc, Vc, cB[uc + 7], 16, -155497632), Vc = ir(Vc, Ic, rB, nc, cB[uc + 10], 23, -1094730640), nc = ir(nc, Vc, Ic, rB, cB[uc + 13], 4, 681279174), rB = ir(rB, nc, Vc, Ic, cB[uc], 11, -358537222), Ic = ir(Ic, rB, nc, Vc, cB[uc + 3], 16, -722521979), Vc = ir(Vc, Ic, rB, nc, cB[uc + 6], 23, 76029189), nc = ir(nc, Vc, Ic, rB, cB[uc + 9], 4, -640364487), rB = ir(rB, nc, Vc, Ic, cB[uc + 12], 11, -421815835), Ic = ir(Ic, rB, nc, Vc, cB[uc + 15], 16, 530742520), nc = KI(nc, Vc = ir(Vc, Ic, rB, nc, cB[uc + 2], 23, -995338651), Ic, rB, cB[uc], 6, -198630844), rB = KI(rB, nc, Vc, Ic, cB[uc + 7], 10, 1126891415), Ic = KI(Ic, rB, nc, Vc, cB[uc + 14], 15, -1416354905), Vc = KI(Vc, Ic, rB, nc, cB[uc + 5], 21, -57434055), nc = KI(nc, Vc, Ic, rB, cB[uc + 12], 6, 1700485571), rB = KI(rB, nc, Vc, Ic, cB[uc + 3], 10, -1894986606), Ic = KI(Ic, rB, nc, Vc, cB[uc + 10], 15, -1051523), Vc = KI(Vc, Ic, rB, nc, cB[uc + 1], 21, -2054922799), nc = KI(nc, Vc, Ic, rB, cB[uc + 8], 6, 1873313359), rB = KI(rB, nc, Vc, Ic, cB[uc + 15], 10, -30611744), Ic = KI(Ic, rB, nc, Vc, cB[uc + 6], 15, -1560198380), Vc = KI(Vc, Ic, rB, nc, cB[uc + 13], 21, 1309151649), nc = KI(nc, Vc, Ic, rB, cB[uc + 4], 6, -145523070), rB = KI(rB, nc, Vc, Ic, cB[uc + 11], 10, -1120210379), Ic = KI(Ic, rB, nc, Vc, cB[uc + 2], 15, 718787259), Vc = KI(Vc, Ic, rB, nc, cB[uc + 9], 21, -343485551), nc = FI(nc, sc), Vc = FI(Vc, Mc), Ic = FI(Ic, Pc), rB = FI(rB, qB)
        }
        return [nc, Vc, Ic, rB]
      }(function(cB) {
        if (0 === cB.length) return [];
        for (var Bc = 8 * cB.length, nc = new Uint32Array(HI(Bc)), Vc = 0; Vc < Bc; Vc += 8) nc[Vc >> 5] |= (255 & cB[Vc / 8]) << Vc % 32;
        return nc
      }(cB), 8 * cB.length))
    }));
    var xr = new Uint8Array(16);

    function dI() {
      if (!kr && !(kr = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      return kr(xr)
    }

    function AI(cB, Bc, nc) {
      var Vc = (cB = cB || {}).random || (cB.rng || dI)();
      if (Vc[6] = 15 & Vc[6] | 64, Vc[8] = 63 & Vc[8] | 128, Bc) {
        nc = nc || 0;
        for (var Ic = 0; Ic < 16; ++Ic) Bc[nc + Ic] = Vc[Ic];
        return Bc
      }
      return wI(Vc)
    }

    function GI(cB, Bc, nc, Vc) {
      switch (cB) {
        case 0:
          return Bc & nc ^ ~Bc & Vc;
        case 1:
        case 3:
          return Bc ^ nc ^ Vc;
        case 2:
          return Bc & nc ^ Bc & Vc ^ nc & Vc
      }
    }

    function cu(cB, Bc) {
      return cB << Bc | cB >>> 32 - Bc
    }
    XI("v5", 80, (function(cB) {
      var Bc = [1518500249, 1859775393, 2400959708, 3395469782],
        nc = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
      if ("string" === typeof cB) {
        var Vc = unescape(encodeURIComponent(cB));
        cB = [];
        for (var Ic = 0; Ic < Vc.length; ++Ic) cB.push(Vc.charCodeAt(Ic))
      } else Array.isArray(cB) || (cB = Array.prototype.slice.call(cB));
      cB.push(128);
      for (var rB = cB.length / 4 + 2, uc = Math.ceil(rB / 16), sc = new Array(uc), Mc = 0; Mc < uc; ++Mc) {
        for (var Pc = new Uint32Array(16), qB = 0; qB < 16; ++qB) Pc[qB] = cB[64 * Mc + 4 * qB] << 24 | cB[64 * Mc + 4 * qB + 1] << 16 | cB[64 * Mc + 4 * qB + 2] << 8 | cB[64 * Mc + 4 * qB + 3];
        sc[Mc] = Pc
      }
      sc[uc - 1][14] = 8 * (cB.length - 1) / Math.pow(2, 32), sc[uc - 1][14] = Math.floor(sc[uc - 1][14]), sc[uc - 1][15] = 8 * (cB.length - 1) & 4294967295;
      for (var Oc = 0; Oc < uc; ++Oc) {
        for (var Tc = new Uint32Array(80), fc = 0; fc < 16; ++fc) Tc[fc] = sc[Oc][fc];
        for (var mB = 16; mB < 80; ++mB) Tc[mB] = cu(Tc[mB - 3] ^ Tc[mB - 8] ^ Tc[mB - 14] ^ Tc[mB - 16], 1);
        for (var ec = nc[0], tB = nc[1], Sc = nc[2], yB = nc[3], zB = nc[4], pc = 0; pc < 80; ++pc) {
          var hc = Math.floor(pc / 20),
            aB = cu(ec, 5) + GI(hc, tB, Sc, yB) + zB + Bc[hc] + Tc[pc] >>> 0;
          zB = yB, yB = Sc, Sc = cu(tB, 30) >>> 0, tB = ec, ec = aB
        }
        nc[0] = nc[0] + ec >>> 0, nc[1] = nc[1] + tB >>> 0, nc[2] = nc[2] + Sc >>> 0, nc[3] = nc[3] + yB >>> 0, nc[4] = nc[4] + zB >>> 0
      }
      return [nc[0] >> 24 & 255, nc[0] >> 16 & 255, nc[0] >> 8 & 255, 255 & nc[0], nc[1] >> 24 & 255, nc[1] >> 16 & 255, nc[1] >> 8 & 255, 255 & nc[1], nc[2] >> 24 & 255, nc[2] >> 16 & 255, nc[2] >> 8 & 255, 255 & nc[2], nc[3] >> 24 & 255, nc[3] >> 16 & 255, nc[3] >> 8 & 255, 255 & nc[3], nc[4] >> 24 & 255, nc[4] >> 16 & 255, nc[4] >> 8 & 255, 255 & nc[4]]
    }));
    class Br extends Error {
      constructor(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        super(Bc), this.code = cB, this.message = Bc, this.name = "Discord SDK Error"
      }
    }
    const nr = ["log", "warn", "debug", "info", "error"];
    var Vr;
    ! function(cB) {
      cB[cB.HANDSHAKE = 0] = "HANDSHAKE", cB[cB.FRAME = 1] = "FRAME", cB[cB.CLOSE = 2] = "CLOSE", cB[cB.HELLO = 3] = "HELLO"
    }(Vr || (Vr = {}));
    const Ir = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.co", "http://localhost:3333", "https://pax.discord.com", "null"]);
    class ru {
      getTransfer(cB) {
        var Bc;
        switch (cB.cmd) {
          case xV.SUBSCRIBE:
          case xV.UNSUBSCRIBE:
            return;
          default:
            return null !== (Bc = cB.transfer) && void 0 !== Bc ? Bc : void 0
        }
      }
      constructor(cB, Bc) {
        var nc;
        if (this.eventBus = new Pc, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = cB => {
            var Bc;
            if (null == this.source) throw new Error("Attempting to send message before initialization");
            const nc = AI();
            null === (Bc = this.source) || void 0 === Bc || Bc.postMessage([Vr.FRAME, Object.assign(Object.assign({}, cB), {
              nonce: nc
            })], this.sourceOrigin, this.getTransfer(cB));
            return new Promise(((cB, Bc) => {
              this.pendingCommands.set(nc, {
                resolve: cB,
                reject: Bc
              })
            }))
          }, this.commands = (nc = this.sendCommand, {
            authenticate: mr(nc),
            authorize: eI(nc),
            captureLog: tr(nc),
            encourageHardwareAcceleration: SI(nc),
            getChannel: vr(nc),
            getChannelPermissions: pI(nc),
            getEntitlements: yr(nc),
            getPlatformBehaviors: hI(nc),
            getSkus: zr(nc),
            openExternalLink: ar(nc),
            openInviteDialog: lI(nc),
            openShareMomentDialog: YI(nc),
            setActivity: LI(nc),
            setConfig: gr(nc),
            setOrientationLockState: br(nc),
            startPurchase: ZI(nc),
            userSettingsGetLocale: QI(nc),
            initiateImageUpload: CI(nc),
            getInstanceConnectedParticipants: DI(nc)
          }), this.handleMessage = cB => {
            if (!Ir.has(cB.origin)) return;
            const Bc = cB.data;
            if (!Array.isArray(Bc)) return;
            const [nc, Vc] = Bc;
            switch (nc) {
              case Vr.HELLO:
                return;
              case Vr.CLOSE:
                return this.handleClose(Vc);
              case Vr.HANDSHAKE:
                return this.handleHandshake();
              case Vr.FRAME:
                return this.handleFrame(Vc);
              default:
                throw new Error("Invalid message format")
            }
          }, this.isReady = !1, this.clientId = cB, this.configuration = null !== Bc && void 0 !== Bc ? Bc : {
            disableConsoleLogOverride: !1
          }, "undefined" !== typeof window && window.addEventListener("message", this.handleMessage), "undefined" === typeof window) return this.frameId = "", this.instanceId = "", this.platform = En.DESKTOP, this.guildId = null, void(this.channelId = null);
        const Vc = new URLSearchParams(this._getSearch()),
          Ic = Vc.get("frame_id");
        if (!Ic) throw new Error("frame_id query param is not defined");
        this.frameId = Ic;
        const rB = Vc.get("instance_id");
        if (!rB) throw new Error("instance_id query param is not defined");
        this.instanceId = rB;
        const uc = Vc.get("platform");
        if (!uc) throw new Error("platform query param is not defined");
        if (uc !== En.DESKTOP && uc !== En.MOBILE) throw new Error(`Invalid query param "platform" of "${uc}". Valid values are "${En.DESKTOP}" or "${En.MOBILE}"`);
        this.platform = uc, this.guildId = Vc.get("guild_id"), this.channelId = Vc.get("channel_id"), [this.source, this.sourceOrigin] = function() {
          var cB;
          return [null !== (cB = window.parent.opener) && void 0 !== cB ? cB : window.parent, document.referrer ? document.referrer : "*"]
        }(), this.addOnReadyListener(), this.handshake()
      }
      close(cB, Bc) {
        var nc;
        window.removeEventListener("message", this.handleMessage);
        const Vc = AI();
        null === (nc = this.source) || void 0 === nc || nc.postMessage([Vr.CLOSE, {
          code: cB,
          message: Bc,
          nonce: Vc
        }], this.sourceOrigin)
      }
      async subscribe(cB, Bc) {
        for (var nc = arguments.length, Vc = new Array(nc > 2 ? nc - 2 : 0), Ic = 2; Ic < nc; Ic++) Vc[Ic - 2] = arguments[Ic];
        const [rB] = Vc, uc = this.eventBus.listenerCount(cB), sc = this.eventBus.on(cB, Bc);
        return Object.values(NV).includes(cB) && cB !== NV.READY && 0 === uc && await this.sendCommand({
          cmd: xV.SUBSCRIBE,
          args: rB,
          evt: cB
        }), sc
      }
      async unsubscribe(cB, Bc) {
        for (var nc = arguments.length, Vc = new Array(nc > 2 ? nc - 2 : 0), Ic = 2; Ic < nc; Ic++) Vc[Ic - 2] = arguments[Ic];
        const [rB] = Vc;
        return cB !== NV.READY && 1 === this.eventBus.listenerCount(cB) && await this.sendCommand({
          cmd: xV.UNSUBSCRIBE,
          evt: cB,
          args: rB
        }), this.eventBus.off(cB, Bc)
      }
      async ready() {
        this.isReady || await new Promise((cB => {
          this.eventBus.once(NV.READY, cB)
        }))
      }
      handshake() {
        var cB;
        null === (cB = this.source) || void 0 === cB || cB.postMessage([Vr.HANDSHAKE, {
          v: 1,
          encoding: "json",
          client_id: this.clientId,
          frame_id: this.frameId
        }], this.sourceOrigin)
      }
      addOnReadyListener() {
        this.eventBus.once(NV.READY, (() => {
          this.overrideConsoleLogging(), this.isReady = !0
        }))
      }
      overrideConsoleLogging() {
        if (this.configuration.disableConsoleLogOverride) return;
        const cB = (cB, Bc) => {
          this.commands.captureLog({
            level: cB,
            message: Bc
          })
        };
        nr.forEach((Bc => {
          ! function(cB, Bc, nc) {
            const Vc = cB[Bc],
              Ic = cB;
            Vc && (cB[Bc] = function() {
              const cB = [].slice.call(arguments),
                rB = "" + cB.join(" ");
              nc(Bc, rB), Vc.apply(Ic, cB)
            })
          }(console, Bc, cB)
        }))
      }
      handleClose(cB) {
        PI.parse(cB)
      }
      handleHandshake() {}
      handleFrame(cB) {
        var Bc, nc;
        let Vc;
        try {
          Vc = OI(cB)
        } catch (Ic) {
          return console.error("Failed to parse", cB), void console.error(Ic)
        }
        if ("DISPATCH" === Vc.cmd) this.eventBus.emit(Vc.evt, Vc.data);
        else {
          if (Vc.evt === DV) {
            if (null != Vc.nonce) return null === (Bc = this.pendingCommands.get(Vc.nonce)) || void 0 === Bc || Bc.reject(Vc.data), void this.pendingCommands.delete(Vc.nonce);
            this.eventBus.emit("error", new Br(Vc.data.code, Vc.data.message))
          }
          if (null == Vc.nonce) return void console.error("Missing nonce", cB);
          null === (nc = this.pendingCommands.get(Vc.nonce)) || void 0 === nc || nc.resolve(Vc), this.pendingCommands.delete(Vc.nonce)
        }
      }
      _getSearch() {
        return "undefined" === typeof window ? "" : window.location.search
      }
    }
    var ur, sr = 1e9,
      Mr = !0,
      Pr = "[DecimalError] ",
      qu = Pr + "Invalid argument: ",
      Or = Pr + "Exponent out of range: ",
      Tr = Math.floor,
      fr = Math.pow,
      mu = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
      er = 1e7,
      tu = 9007199254740991,
      Sr = Tr(1286742750677284.5),
      yu = {};

    function zu(cB, Bc) {
      var nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB = cB.constructor,
        Oc = qB.precision;
      if (!cB.s || !Bc.s) return Bc.s || (Bc = new qB(cB)), Mr ? Zr(Bc, Oc) : Bc;
      if (Mc = cB.d, Pc = Bc.d, uc = cB.e, Ic = Bc.e, Mc = Mc.slice(), rB = uc - Ic) {
        for (rB < 0 ? (Vc = Mc, rB = -rB, sc = Pc.length) : (Vc = Pc, Ic = uc, sc = Mc.length), rB > (sc = (uc = Math.ceil(Oc / 7)) > sc ? uc + 1 : sc + 1) && (rB = sc, Vc.length = 1), Vc.reverse(); rB--;) Vc.push(0);
        Vc.reverse()
      }
      for ((sc = Mc.length) - (rB = Pc.length) < 0 && (rB = sc, Vc = Pc, Pc = Mc, Mc = Vc), nc = 0; rB;) nc = (Mc[--rB] = Mc[rB] + Pc[rB] + nc) / er | 0, Mc[rB] %= er;
      for (nc && (Mc.unshift(nc), ++Ic), sc = Mc.length; 0 == Mc[--sc];) Mc.pop();
      return Bc.d = Mc, Bc.e = Ic, Mr ? Zr(Bc, Oc) : Bc
    }

    function pr(cB, Bc, nc) {
      if (cB !== ~~cB || cB < Bc || cB > nc) throw Error(qu + cB)
    }

    function hr(cB) {
      var Bc, nc, Vc, Ic = cB.length - 1,
        rB = "",
        uc = cB[0];
      if (Ic > 0) {
        for (rB += uc, Bc = 1; Bc < Ic; Bc++)(nc = 7 - (Vc = cB[Bc] + "").length) && (rB += gu(nc)), rB += Vc;
        (nc = 7 - (Vc = (uc = cB[Bc]) + "").length) && (rB += gu(nc))
      } else if (0 === uc) return "0";
      for (; uc % 10 === 0;) uc /= 10;
      return rB + uc
    }
    yu.absoluteValue = yu.abs = function() {
      var cB = new this.constructor(this);
      return cB.s && (cB.s = 1), cB
    }, yu.comparedTo = yu.cmp = function(cB) {
      var Bc, nc, Vc, Ic, rB = this;
      if (cB = new rB.constructor(cB), rB.s !== cB.s) return rB.s || -cB.s;
      if (rB.e !== cB.e) return rB.e > cB.e ^ rB.s < 0 ? 1 : -1;
      for (Bc = 0, nc = (Vc = rB.d.length) < (Ic = cB.d.length) ? Vc : Ic; Bc < nc; ++Bc)
        if (rB.d[Bc] !== cB.d[Bc]) return rB.d[Bc] > cB.d[Bc] ^ rB.s < 0 ? 1 : -1;
      return Vc === Ic ? 0 : Vc > Ic ^ rB.s < 0 ? 1 : -1
    }, yu.decimalPlaces = yu.dp = function() {
      var cB = this,
        Bc = cB.d.length - 1,
        nc = 7 * (Bc - cB.e);
      if (Bc = cB.d[Bc])
        for (; Bc % 10 == 0; Bc /= 10) nc--;
      return nc < 0 ? 0 : nc
    }, yu.dividedBy = yu.div = function(cB) {
      return au(this, new this.constructor(cB))
    }, yu.dividedToIntegerBy = yu.idiv = function(cB) {
      var Bc = this.constructor;
      return Zr(au(this, new Bc(cB), 0, 1), Bc.precision)
    }, yu.equals = yu.eq = function(cB) {
      return !this.cmp(cB)
    }, yu.exponent = function() {
      return Yr(this)
    }, yu.greaterThan = yu.gt = function(cB) {
      return this.cmp(cB) > 0
    }, yu.greaterThanOrEqualTo = yu.gte = function(cB) {
      return this.cmp(cB) >= 0
    }, yu.isInteger = yu.isint = function() {
      return this.e > this.d.length - 2
    }, yu.isNegative = yu.isneg = function() {
      return this.s < 0
    }, yu.isPositive = yu.ispos = function() {
      return this.s > 0
    }, yu.isZero = function() {
      return 0 === this.s
    }, yu.lessThan = yu.lt = function(cB) {
      return this.cmp(cB) < 0
    }, yu.lessThanOrEqualTo = yu.lte = function(cB) {
      return this.cmp(cB) < 1
    }, yu.logarithm = yu.log = function(cB) {
      var Bc, nc = this,
        Vc = nc.constructor,
        Ic = Vc.precision,
        rB = Ic + 5;
      if (void 0 === cB) cB = new Vc(10);
      else if ((cB = new Vc(cB)).s < 1 || cB.eq(ur)) throw Error(Pr + "NaN");
      if (nc.s < 1) throw Error(Pr + (nc.s ? "NaN" : "-Infinity"));
      return nc.eq(ur) ? new Vc(0) : (Mr = !1, Bc = au(Ur(nc, rB), Ur(cB, rB), rB), Mr = !0, Zr(Bc, Ic))
    }, yu.minus = yu.sub = function(cB) {
      var Bc = this;
      return cB = new Bc.constructor(cB), Bc.s == cB.s ? Qr(Bc, cB) : zu(Bc, (cB.s = -cB.s, cB))
    }, yu.modulo = yu.mod = function(cB) {
      var Bc, nc = this,
        Vc = nc.constructor,
        Ic = Vc.precision;
      if (!(cB = new Vc(cB)).s) throw Error(Pr + "NaN");
      return nc.s ? (Mr = !1, Bc = au(nc, cB, 0, 1).times(cB), Mr = !0, nc.minus(Bc)) : Zr(new Vc(nc), Ic)
    }, yu.naturalExponential = yu.exp = function() {
      return lr(this)
    }, yu.naturalLogarithm = yu.ln = function() {
      return Ur(this)
    }, yu.negated = yu.neg = function() {
      var cB = new this.constructor(this);
      return cB.s = -cB.s || 0, cB
    }, yu.plus = yu.add = function(cB) {
      var Bc = this;
      return cB = new Bc.constructor(cB), Bc.s == cB.s ? zu(Bc, cB) : Qr(Bc, (cB.s = -cB.s, cB))
    }, yu.precision = yu.sd = function(cB) {
      var Bc, nc, Vc, Ic = this;
      if (void 0 !== cB && cB !== !!cB && 1 !== cB && 0 !== cB) throw Error(qu + cB);
      if (Bc = Yr(Ic) + 1, nc = 7 * (Vc = Ic.d.length - 1) + 1, Vc = Ic.d[Vc]) {
        for (; Vc % 10 == 0; Vc /= 10) nc--;
        for (Vc = Ic.d[0]; Vc >= 10; Vc /= 10) nc++
      }
      return cB && Bc > nc ? Bc : nc
    }, yu.squareRoot = yu.sqrt = function() {
      var cB, Bc, nc, Vc, Ic, rB, uc, sc = this,
        Mc = sc.constructor;
      if (sc.s < 1) {
        if (!sc.s) return new Mc(0);
        throw Error(Pr + "NaN")
      }
      for (cB = Yr(sc), Mr = !1, 0 == (Ic = Math.sqrt(+sc)) || Ic == 1 / 0 ? (((Bc = hr(sc.d)).length + cB) % 2 == 0 && (Bc += "0"), Ic = Math.sqrt(Bc), cB = Tr((cB + 1) / 2) - (cB < 0 || cB % 2), Vc = new Mc(Bc = Ic == 1 / 0 ? "1e" + cB : (Bc = Ic.toExponential()).slice(0, Bc.indexOf("e") + 1) + cB)) : Vc = new Mc(Ic.toString()), Ic = uc = (nc = Mc.precision) + 3;;)
        if (Vc = (rB = Vc).plus(au(sc, rB, uc + 2)).times(.5), hr(rB.d).slice(0, uc) === (Bc = hr(Vc.d)).slice(0, uc)) {
          if (Bc = Bc.slice(uc - 3, uc + 1), Ic == uc && "4999" == Bc) {
            if (Zr(rB, nc + 1, 0), rB.times(rB).eq(sc)) {
              Vc = rB;
              break
            }
          } else if ("9999" != Bc) break;
          uc += 4
        } return Mr = !0, Zr(Vc, nc)
    }, yu.times = yu.mul = function(cB) {
      var Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB = this,
        Oc = qB.constructor,
        Tc = qB.d,
        fc = (cB = new Oc(cB)).d;
      if (!qB.s || !cB.s) return new Oc(0);
      for (cB.s *= qB.s, nc = qB.e + cB.e, (Mc = Tc.length) < (Pc = fc.length) && (rB = Tc, Tc = fc, fc = rB, uc = Mc, Mc = Pc, Pc = uc), rB = [], Vc = uc = Mc + Pc; Vc--;) rB.push(0);
      for (Vc = Pc; --Vc >= 0;) {
        for (Bc = 0, Ic = Mc + Vc; Ic > Vc;) sc = rB[Ic] + fc[Vc] * Tc[Ic - Vc - 1] + Bc, rB[Ic--] = sc % er | 0, Bc = sc / er | 0;
        rB[Ic] = (rB[Ic] + Bc) % er | 0
      }
      for (; !rB[--uc];) rB.pop();
      return Bc ? ++nc : rB.shift(), cB.d = rB, cB.e = nc, Mr ? Zr(cB, Oc.precision) : cB
    }, yu.toDecimalPlaces = yu.todp = function(cB, Bc) {
      var nc = this,
        Vc = nc.constructor;
      return nc = new Vc(nc), void 0 === cB ? nc : (pr(cB, 0, sr), void 0 === Bc ? Bc = Vc.rounding : pr(Bc, 0, 8), Zr(nc, cB + Yr(nc) + 1, Bc))
    }, yu.toExponential = function(cB, Bc) {
      var nc, Vc = this,
        Ic = Vc.constructor;
      return void 0 === cB ? nc = Cr(Vc, !0) : (pr(cB, 0, sr), void 0 === Bc ? Bc = Ic.rounding : pr(Bc, 0, 8), nc = Cr(Vc = Zr(new Ic(Vc), cB + 1, Bc), !0, cB + 1)), nc
    }, yu.toFixed = function(cB, Bc) {
      var nc, Vc, Ic = this,
        rB = Ic.constructor;
      return void 0 === cB ? Cr(Ic) : (pr(cB, 0, sr), void 0 === Bc ? Bc = rB.rounding : pr(Bc, 0, 8), nc = Cr((Vc = Zr(new rB(Ic), cB + Yr(Ic) + 1, Bc)).abs(), !1, cB + Yr(Vc) + 1), Ic.isneg() && !Ic.isZero() ? "-" + nc : nc)
    }, yu.toInteger = yu.toint = function() {
      var cB = this,
        Bc = cB.constructor;
      return Zr(new Bc(cB), Yr(cB) + 1, Bc.rounding)
    }, yu.toNumber = function() {
      return +this
    }, yu.toPower = yu.pow = function(cB) {
      var Bc, nc, Vc, Ic, rB, uc, sc = this,
        Mc = sc.constructor,
        Pc = +(cB = new Mc(cB));
      if (!cB.s) return new Mc(ur);
      if (!(sc = new Mc(sc)).s) {
        if (cB.s < 1) throw Error(Pr + "Infinity");
        return sc
      }
      if (sc.eq(ur)) return sc;
      if (Vc = Mc.precision, cB.eq(ur)) return Zr(sc, Vc);
      if (uc = (Bc = cB.e) >= (nc = cB.d.length - 1), rB = sc.s, uc) {
        if ((nc = Pc < 0 ? -Pc : Pc) <= tu) {
          for (Ic = new Mc(ur), Bc = Math.ceil(Vc / 7 + 4), Mr = !1; nc % 2 && vu((Ic = Ic.times(sc)).d, Bc), 0 !== (nc = Tr(nc / 2));) vu((sc = sc.times(sc)).d, Bc);
          return Mr = !0, cB.s < 0 ? new Mc(ur).div(Ic) : Zr(Ic, Vc)
        }
      } else if (rB < 0) throw Error(Pr + "NaN");
      return rB = rB < 0 && 1 & cB.d[Math.max(Bc, nc)] ? -1 : 1, sc.s = 1, Mr = !1, Ic = cB.times(Ur(sc, Vc + 12)), Mr = !0, (Ic = lr(Ic)).s = rB, Ic
    }, yu.toPrecision = function(cB, Bc) {
      var nc, Vc, Ic = this,
        rB = Ic.constructor;
      return void 0 === cB ? Vc = Cr(Ic, (nc = Yr(Ic)) <= rB.toExpNeg || nc >= rB.toExpPos) : (pr(cB, 1, sr), void 0 === Bc ? Bc = rB.rounding : pr(Bc, 0, 8), Vc = Cr(Ic = Zr(new rB(Ic), cB, Bc), cB <= (nc = Yr(Ic)) || nc <= rB.toExpNeg, cB)), Vc
    }, yu.toSignificantDigits = yu.tosd = function(cB, Bc) {
      var nc = this.constructor;
      return void 0 === cB ? (cB = nc.precision, Bc = nc.rounding) : (pr(cB, 1, sr), void 0 === Bc ? Bc = nc.rounding : pr(Bc, 0, 8)), Zr(new nc(this), cB, Bc)
    }, yu.toString = yu.valueOf = yu.val = yu.toJSON = yu[Symbol.for("nodejs.util.inspect.custom")] = function() {
      var cB = this,
        Bc = Yr(cB),
        nc = cB.constructor;
      return Cr(cB, Bc <= nc.toExpNeg || Bc >= nc.toExpPos)
    };
    var au = function() {
      function cB(cB, Bc) {
        var nc, Vc = 0,
          Ic = cB.length;
        for (cB = cB.slice(); Ic--;) nc = cB[Ic] * Bc + Vc, cB[Ic] = nc % er | 0, Vc = nc / er | 0;
        return Vc && cB.unshift(Vc), cB
      }

      function Bc(cB, Bc, nc, Vc) {
        var Ic, rB;
        if (nc != Vc) rB = nc > Vc ? 1 : -1;
        else
          for (Ic = rB = 0; Ic < nc; Ic++)
            if (cB[Ic] != Bc[Ic]) {
              rB = cB[Ic] > Bc[Ic] ? 1 : -1;
              break
            } return rB
      }

      function nc(cB, Bc, nc) {
        for (var Vc = 0; nc--;) cB[nc] -= Vc, Vc = cB[nc] < Bc[nc] ? 1 : 0, cB[nc] = Vc * er + cB[nc] - Bc[nc];
        for (; !cB[0] && cB.length > 1;) cB.shift()
      }
      return function(Vc, Ic, rB, uc) {
        var sc, Mc, Pc, qB, Oc, Tc, fc, mB, ec, tB, Sc, yB, zB, pc, hc, aB, lc, Yc, Lc = Vc.constructor,
          gB = Vc.s == Ic.s ? 1 : -1,
          Uc = Vc.d,
          bB = Ic.d;
        if (!Vc.s) return new Lc(Vc);
        if (!Ic.s) throw Error(Pr + "Division by zero");
        for (Mc = Vc.e - Ic.e, lc = bB.length, hc = Uc.length, mB = (fc = new Lc(gB)).d = [], Pc = 0; bB[Pc] == (Uc[Pc] || 0);) ++Pc;
        if (bB[Pc] > (Uc[Pc] || 0) && --Mc, (yB = null == rB ? rB = Lc.precision : uc ? rB + (Yr(Vc) - Yr(Ic)) + 1 : rB) < 0) return new Lc(0);
        if (yB = yB / 7 + 2 | 0, Pc = 0, 1 == lc)
          for (qB = 0, bB = bB[0], yB++;
            (Pc < hc || qB) && yB--; Pc++) zB = qB * er + (Uc[Pc] || 0), mB[Pc] = zB / bB | 0, qB = zB % bB | 0;
        else {
          for ((qB = er / (bB[0] + 1) | 0) > 1 && (bB = cB(bB, qB), Uc = cB(Uc, qB), lc = bB.length, hc = Uc.length), pc = lc, tB = (ec = Uc.slice(0, lc)).length; tB < lc;) ec[tB++] = 0;
          (Yc = bB.slice()).unshift(0), aB = bB[0], bB[1] >= er / 2 && ++aB;
          do {
            qB = 0, (sc = Bc(bB, ec, lc, tB)) < 0 ? (Sc = ec[0], lc != tB && (Sc = Sc * er + (ec[1] || 0)), (qB = Sc / aB | 0) > 1 ? (qB >= er && (qB = er - 1), 1 == (sc = Bc(Oc = cB(bB, qB), ec, Tc = Oc.length, tB = ec.length)) && (qB--, nc(Oc, lc < Tc ? Yc : bB, Tc))) : (0 == qB && (sc = qB = 1), Oc = bB.slice()), (Tc = Oc.length) < tB && Oc.unshift(0), nc(ec, Oc, tB), -1 == sc && (sc = Bc(bB, ec, lc, tB = ec.length)) < 1 && (qB++, nc(ec, lc < tB ? Yc : bB, tB)), tB = ec.length) : 0 === sc && (qB++, ec = [0]), mB[Pc++] = qB, sc && ec[0] ? ec[tB++] = Uc[pc] || 0 : (ec = [Uc[pc]], tB = 1)
          } while ((pc++ < hc || void 0 !== ec[0]) && yB--)
        }
        return mB[0] || mB.shift(), fc.e = Mc, Zr(fc, uc ? rB + Yr(fc) + 1 : rB)
      }
    }();

    function lr(cB, Bc) {
      var nc, Vc, Ic, rB, uc, sc = 0,
        Mc = 0,
        Pc = cB.constructor,
        qB = Pc.precision;
      if (Yr(cB) > 16) throw Error(Or + Yr(cB));
      if (!cB.s) return new Pc(ur);
      for (null == Bc ? (Mr = !1, uc = qB) : uc = Bc, rB = new Pc(.03125); cB.abs().gte(.1);) cB = cB.times(rB), Mc += 5;
      for (uc += Math.log(fr(2, Mc)) / Math.LN10 * 2 + 5 | 0, nc = Vc = Ic = new Pc(ur), Pc.precision = uc;;) {
        if (Vc = Zr(Vc.times(cB), uc), nc = nc.times(++sc), hr((rB = Ic.plus(au(Vc, nc, uc))).d).slice(0, uc) === hr(Ic.d).slice(0, uc)) {
          for (; Mc--;) Ic = Zr(Ic.times(Ic), uc);
          return Pc.precision = qB, null == Bc ? (Mr = !0, Zr(Ic, qB)) : Ic
        }
        Ic = rB
      }
    }

    function Yr(cB) {
      for (var Bc = 7 * cB.e, nc = cB.d[0]; nc >= 10; nc /= 10) Bc++;
      return Bc
    }

    function Lr(cB, Bc, nc) {
      if (Bc > cB.LN10.sd()) throw Mr = !0, nc && (cB.precision = nc), Error(Pr + "LN10 precision limit exceeded");
      return Zr(new cB(cB.LN10), Bc)
    }

    function gu(cB) {
      for (var Bc = ""; cB--;) Bc += "0";
      return Bc
    }

    function Ur(cB, Bc) {
      var nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB, Oc = 1,
        Tc = cB,
        fc = Tc.d,
        mB = Tc.constructor,
        ec = mB.precision;
      if (Tc.s < 1) throw Error(Pr + (Tc.s ? "NaN" : "-Infinity"));
      if (Tc.eq(ur)) return new mB(0);
      if (null == Bc ? (Mr = !1, Pc = ec) : Pc = Bc, Tc.eq(10)) return null == Bc && (Mr = !0), Lr(mB, Pc);
      if (Pc += 10, mB.precision = Pc, Vc = (nc = hr(fc)).charAt(0), rB = Yr(Tc), !(Math.abs(rB) < 15e14)) return Mc = Lr(mB, Pc + 2, ec).times(rB + ""), Tc = Ur(new mB(Vc + "." + nc.slice(1)), Pc - 10).plus(Mc), mB.precision = ec, null == Bc ? (Mr = !0, Zr(Tc, ec)) : Tc;
      for (; Vc < 7 && 1 != Vc || 1 == Vc && nc.charAt(1) > 3;) Vc = (nc = hr((Tc = Tc.times(cB)).d)).charAt(0), Oc++;
      for (rB = Yr(Tc), Vc > 1 ? (Tc = new mB("0." + nc), rB++) : Tc = new mB(Vc + "." + nc.slice(1)), sc = uc = Tc = au(Tc.minus(ur), Tc.plus(ur), Pc), qB = Zr(Tc.times(Tc), Pc), Ic = 3;;) {
        if (uc = Zr(uc.times(qB), Pc), hr((Mc = sc.plus(au(uc, new mB(Ic), Pc))).d).slice(0, Pc) === hr(sc.d).slice(0, Pc)) return sc = sc.times(2), 0 !== rB && (sc = sc.plus(Lr(mB, Pc + 2, ec).times(rB + ""))), sc = au(sc, new mB(Oc), Pc), mB.precision = ec, null == Bc ? (Mr = !0, Zr(sc, ec)) : sc;
        sc = Mc, Ic += 2
      }
    }

    function bu(cB, Bc) {
      var nc, Vc, Ic;
      for ((nc = Bc.indexOf(".")) > -1 && (Bc = Bc.replace(".", "")), (Vc = Bc.search(/e/i)) > 0 ? (nc < 0 && (nc = Vc), nc += +Bc.slice(Vc + 1), Bc = Bc.substring(0, Vc)) : nc < 0 && (nc = Bc.length), Vc = 0; 48 === Bc.charCodeAt(Vc);) ++Vc;
      for (Ic = Bc.length; 48 === Bc.charCodeAt(Ic - 1);) --Ic;
      if (Bc = Bc.slice(Vc, Ic)) {
        if (Ic -= Vc, nc = nc - Vc - 1, cB.e = Tr(nc / 7), cB.d = [], Vc = (nc + 1) % 7, nc < 0 && (Vc += 7), Vc < Ic) {
          for (Vc && cB.d.push(+Bc.slice(0, Vc)), Ic -= 7; Vc < Ic;) cB.d.push(+Bc.slice(Vc, Vc += 7));
          Vc = 7 - (Bc = Bc.slice(Vc)).length
        } else Vc -= Ic;
        for (; Vc--;) Bc += "0";
        if (cB.d.push(+Bc), Mr && (cB.e > Sr || cB.e < -Sr)) throw Error(Or + nc)
      } else cB.s = 0, cB.e = 0, cB.d = [0];
      return cB
    }

    function Zr(cB, Bc, nc) {
      var Vc, Ic, rB, uc, sc, Mc, Pc, qB, Oc = cB.d;
      for (uc = 1, rB = Oc[0]; rB >= 10; rB /= 10) uc++;
      if ((Vc = Bc - uc) < 0) Vc += 7, Ic = Bc, Pc = Oc[qB = 0];
      else {
        if ((qB = Math.ceil((Vc + 1) / 7)) >= (rB = Oc.length)) return cB;
        for (Pc = rB = Oc[qB], uc = 1; rB >= 10; rB /= 10) uc++;
        Ic = (Vc %= 7) - 7 + uc
      }
      if (void 0 !== nc && (sc = Pc / (rB = fr(10, uc - Ic - 1)) % 10 | 0, Mc = Bc < 0 || void 0 !== Oc[qB + 1] || Pc % rB, Mc = nc < 4 ? (sc || Mc) && (0 == nc || nc == (cB.s < 0 ? 3 : 2)) : sc > 5 || 5 == sc && (4 == nc || Mc || 6 == nc && (Vc > 0 ? Ic > 0 ? Pc / fr(10, uc - Ic) : 0 : Oc[qB - 1]) % 10 & 1 || nc == (cB.s < 0 ? 8 : 7))), Bc < 1 || !Oc[0]) return Mc ? (rB = Yr(cB), Oc.length = 1, Bc = Bc - rB - 1, Oc[0] = fr(10, (7 - Bc % 7) % 7), cB.e = Tr(-Bc / 7) || 0) : (Oc.length = 1, Oc[0] = cB.e = cB.s = 0), cB;
      if (0 == Vc ? (Oc.length = qB, rB = 1, qB--) : (Oc.length = qB + 1, rB = fr(10, 7 - Vc), Oc[qB] = Ic > 0 ? (Pc / fr(10, uc - Ic) % fr(10, Ic) | 0) * rB : 0), Mc)
        for (;;) {
          if (0 == qB) {
            (Oc[0] += rB) == er && (Oc[0] = 1, ++cB.e);
            break
          }
          if (Oc[qB] += rB, Oc[qB] != er) break;
          Oc[qB--] = 0, rB = 1
        }
      for (Vc = Oc.length; 0 === Oc[--Vc];) Oc.pop();
      if (Mr && (cB.e > Sr || cB.e < -Sr)) throw Error(Or + Yr(cB));
      return cB
    }

    function Qr(cB, Bc) {
      var nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB, Oc, Tc = cB.constructor,
        fc = Tc.precision;
      if (!cB.s || !Bc.s) return Bc.s ? Bc.s = -Bc.s : Bc = new Tc(cB), Mr ? Zr(Bc, fc) : Bc;
      if (Mc = cB.d, Oc = Bc.d, Vc = Bc.e, Pc = cB.e, Mc = Mc.slice(), uc = Pc - Vc) {
        for ((qB = uc < 0) ? (nc = Mc, uc = -uc, sc = Oc.length) : (nc = Oc, Vc = Pc, sc = Mc.length), uc > (Ic = Math.max(Math.ceil(fc / 7), sc) + 2) && (uc = Ic, nc.length = 1), nc.reverse(), Ic = uc; Ic--;) nc.push(0);
        nc.reverse()
      } else {
        for ((qB = (Ic = Mc.length) < (sc = Oc.length)) && (sc = Ic), Ic = 0; Ic < sc; Ic++)
          if (Mc[Ic] != Oc[Ic]) {
            qB = Mc[Ic] < Oc[Ic];
            break
          } uc = 0
      }
      for (qB && (nc = Mc, Mc = Oc, Oc = nc, Bc.s = -Bc.s), sc = Mc.length, Ic = Oc.length - sc; Ic > 0; --Ic) Mc[sc++] = 0;
      for (Ic = Oc.length; Ic > uc;) {
        if (Mc[--Ic] < Oc[Ic]) {
          for (rB = Ic; rB && 0 === Mc[--rB];) Mc[rB] = er - 1;
          --Mc[rB], Mc[Ic] += er
        }
        Mc[Ic] -= Oc[Ic]
      }
      for (; 0 === Mc[--sc];) Mc.pop();
      for (; 0 === Mc[0]; Mc.shift()) --Vc;
      return Mc[0] ? (Bc.d = Mc, Bc.e = Vc, Mr ? Zr(Bc, fc) : Bc) : new Tc(0)
    }

    function Cr(cB, Bc, nc) {
      var Vc, Ic = Yr(cB),
        rB = hr(cB.d),
        uc = rB.length;
      return Bc ? (nc && (Vc = nc - uc) > 0 ? rB = rB.charAt(0) + "." + rB.slice(1) + gu(Vc) : uc > 1 && (rB = rB.charAt(0) + "." + rB.slice(1)), rB = rB + (Ic < 0 ? "e" : "e+") + Ic) : Ic < 0 ? (rB = "0." + gu(-Ic - 1) + rB, nc && (Vc = nc - uc) > 0 && (rB += gu(Vc))) : Ic >= uc ? (rB += gu(Ic + 1 - uc), nc && (Vc = nc - Ic - 1) > 0 && (rB = rB + "." + gu(Vc))) : ((Vc = Ic + 1) < uc && (rB = rB.slice(0, Vc) + "." + rB.slice(Vc)), nc && (Vc = nc - uc) > 0 && (Ic + 1 === uc && (rB += "."), rB += gu(Vc))), cB.s < 0 ? "-" + rB : rB
    }

    function vu(cB, Bc) {
      if (cB.length > Bc) return cB.length = Bc, !0
    }

    function Dr(cB) {
      if (!cB || "object" !== typeof cB) throw Error(Pr + "Object expected");
      var Bc, nc, Vc, Ic = ["precision", 1, sr, "rounding", 0, 8, "toExpNeg", -1 / 0, 0, "toExpPos", 0, 1 / 0];
      for (Bc = 0; Bc < Ic.length; Bc += 3)
        if (void 0 !== (Vc = cB[nc = Ic[Bc]])) {
          if (!(Tr(Vc) === Vc && Vc >= Ic[Bc + 1] && Vc <= Ic[Bc + 2])) throw Error(qu + nc + ": " + Vc);
          this[nc] = Vc
        } if (void 0 !== (Vc = cB[nc = "LN10"])) {
        if (Vc != Math.LN10) throw Error(qu + nc + ": " + Vc);
        this[nc] = new this(Vc)
      }
      return this
    }
    var Nr = function cB(Bc) {
      var nc, Vc, Ic;

      function rB(cB) {
        var Bc = this;
        if (!(Bc instanceof rB)) return new rB(cB);
        if (Bc.constructor = rB, cB instanceof rB) return Bc.s = cB.s, Bc.e = cB.e, void(Bc.d = (cB = cB.d) ? cB.slice() : cB);
        if ("number" === typeof cB) {
          if (0 * cB !== 0) throw Error(qu + cB);
          if (cB > 0) Bc.s = 1;
          else {
            if (!(cB < 0)) return Bc.s = 0, Bc.e = 0, void(Bc.d = [0]);
            cB = -cB, Bc.s = -1
          }
          return cB === ~~cB && cB < 1e7 ? (Bc.e = 0, void(Bc.d = [cB])) : bu(Bc, cB.toString())
        }
        if ("string" !== typeof cB) throw Error(qu + cB);
        if (45 === cB.charCodeAt(0) ? (cB = cB.slice(1), Bc.s = -1) : Bc.s = 1, !mu.test(cB)) throw Error(qu + cB);
        bu(Bc, cB)
      }
      if (rB.prototype = yu, rB.ROUND_UP = 0, rB.ROUND_DOWN = 1, rB.ROUND_CEIL = 2, rB.ROUND_FLOOR = 3, rB.ROUND_HALF_UP = 4, rB.ROUND_HALF_DOWN = 5, rB.ROUND_HALF_EVEN = 6, rB.ROUND_HALF_CEIL = 7, rB.ROUND_HALF_FLOOR = 8, rB.clone = cB, rB.config = rB.set = Dr, void 0 === Bc && (Bc = {}), Bc)
        for (Ic = ["precision", "rounding", "toExpNeg", "toExpPos", "LN10"], nc = 0; nc < Ic.length;) Bc.hasOwnProperty(Vc = Ic[nc++]) || (Bc[Vc] = this[Vc]);
      return rB.config(Bc), rB
    }({
      precision: 20,
      rounding: 4,
      toExpNeg: -7,
      toExpPos: 21,
      LN10: "2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"
    });
    ur = new Nr(1);
    var Er;
    ! function(cB) {
      cB.AED = "aed", cB.AFN = "afn", cB.ALL = "all", cB.AMD = "amd", cB.ANG = "ang", cB.AOA = "aoa", cB.ARS = "ars", cB.AUD = "aud", cB.AWG = "awg", cB.AZN = "azn", cB.BAM = "bam", cB.BBD = "bbd", cB.BDT = "bdt", cB.BGN = "bgn", cB.BHD = "bhd", cB.BIF = "bif", cB.BMD = "bmd", cB.BND = "bnd", cB.BOB = "bob", cB.BOV = "bov", cB.BRL = "brl", cB.BSD = "bsd", cB.BTN = "btn", cB.BWP = "bwp", cB.BYN = "byn", cB.BYR = "byr", cB.BZD = "bzd", cB.CAD = "cad", cB.CDF = "cdf", cB.CHE = "che", cB.CHF = "chf", cB.CHW = "chw", cB.CLF = "clf", cB.CLP = "clp", cB.CNY = "cny", cB.COP = "cop", cB.COU = "cou", cB.CRC = "crc", cB.CUC = "cuc", cB.CUP = "cup", cB.CVE = "cve", cB.CZK = "czk", cB.DJF = "djf", cB.DKK = "dkk", cB.DOP = "dop", cB.DZD = "dzd", cB.EGP = "egp", cB.ERN = "ern", cB.ETB = "etb", cB.EUR = "eur", cB.FJD = "fjd", cB.FKP = "fkp", cB.GBP = "gbp", cB.GEL = "gel", cB.GHS = "ghs", cB.GIP = "gip", cB.GMD = "gmd", cB.GNF = "gnf", cB.GTQ = "gtq", cB.GYD = "gyd", cB.HKD = "hkd", cB.HNL = "hnl", cB.HRK = "hrk", cB.HTG = "htg", cB.HUF = "huf", cB.IDR = "idr", cB.ILS = "ils", cB.INR = "inr", cB.IQD = "iqd", cB.IRR = "irr", cB.ISK = "isk", cB.JMD = "jmd", cB.JOD = "jod", cB.JPY = "jpy", cB.KES = "kes", cB.KGS = "kgs", cB.KHR = "khr", cB.KMF = "kmf", cB.KPW = "kpw", cB.KRW = "krw", cB.KWD = "kwd", cB.KYD = "kyd", cB.KZT = "kzt", cB.LAK = "lak", cB.LBP = "lbp", cB.LKR = "lkr", cB.LRD = "lrd", cB.LSL = "lsl", cB.LTL = "ltl", cB.LVL = "lvl", cB.LYD = "lyd", cB.MAD = "mad", cB.MDL = "mdl", cB.MGA = "mga", cB.MKD = "mkd", cB.MMK = "mmk", cB.MNT = "mnt", cB.MOP = "mop", cB.MRO = "mro", cB.MUR = "mur", cB.MVR = "mvr", cB.MWK = "mwk", cB.MXN = "mxn", cB.MXV = "mxv", cB.MYR = "myr", cB.MZN = "mzn", cB.NAD = "nad", cB.NGN = "ngn", cB.NIO = "nio", cB.NOK = "nok", cB.NPR = "npr", cB.NZD = "nzd", cB.OMR = "omr", cB.PAB = "pab", cB.PEN = "pen", cB.PGK = "pgk", cB.PHP = "php", cB.PKR = "pkr", cB.PLN = "pln", cB.PYG = "pyg", cB.QAR = "qar", cB.RON = "ron", cB.RSD = "rsd", cB.RUB = "rub", cB.RWF = "rwf", cB.SAR = "sar", cB.SBD = "sbd", cB.SCR = "scr", cB.SDG = "sdg", cB.SEK = "sek", cB.SGD = "sgd", cB.SHP = "shp", cB.SLL = "sll", cB.SOS = "sos", cB.SRD = "srd", cB.SSP = "ssp", cB.STD = "std", cB.SVC = "svc", cB.SYP = "syp", cB.SZL = "szl", cB.THB = "thb", cB.TJS = "tjs", cB.TMT = "tmt", cB.TND = "tnd", cB.TOP = "top", cB.TRY = "try", cB.TTD = "ttd", cB.TWD = "twd", cB.TZS = "tzs", cB.UAH = "uah", cB.UGX = "ugx", cB.USD = "usd", cB.USN = "usn", cB.USS = "uss", cB.UYI = "uyi", cB.UYU = "uyu", cB.UZS = "uzs", cB.VEF = "vef", cB.VND = "vnd", cB.VUV = "vuv", cB.WST = "wst", cB.XAF = "xaf", cB.XAG = "xag", cB.XAU = "xau", cB.XBA = "xba", cB.XBB = "xbb", cB.XBC = "xbc", cB.XBD = "xbd", cB.XCD = "xcd", cB.XDR = "xdr", cB.XFU = "xfu", cB.XOF = "xof", cB.XPD = "xpd", cB.XPF = "xpf", cB.XPT = "xpt", cB.XSU = "xsu", cB.XTS = "xts", cB.XUA = "xua", cB.YER = "yer", cB.ZAR = "zar", cB.ZMW = "zmw", cB.ZWL = "zwl"
    }(Er || (Er = {}));
    Er.AED, Er.AFN, Er.ALL, Er.AMD, Er.ANG, Er.AOA, Er.ARS, Er.AUD, Er.AWG, Er.AZN, Er.BAM, Er.BBD, Er.BDT, Er.BGN, Er.BHD, Er.BIF, Er.BMD, Er.BND, Er.BOB, Er.BOV, Er.BRL, Er.BSD, Er.BTN, Er.BWP, Er.BYR, Er.BYN, Er.BZD, Er.CAD, Er.CDF, Er.CHE, Er.CHF, Er.CHW, Er.CLF, Er.CLP, Er.CNY, Er.COP, Er.COU, Er.CRC, Er.CUC, Er.CUP, Er.CVE, Er.CZK, Er.DJF, Er.DKK, Er.DOP, Er.DZD, Er.EGP, Er.ERN, Er.ETB, Er.EUR, Er.FJD, Er.FKP, Er.GBP, Er.GEL, Er.GHS, Er.GIP, Er.GMD, Er.GNF, Er.GTQ, Er.GYD, Er.HKD, Er.HNL, Er.HRK, Er.HTG, Er.HUF, Er.IDR, Er.ILS, Er.INR, Er.IQD, Er.IRR, Er.ISK, Er.JMD, Er.JOD, Er.JPY, Er.KES, Er.KGS, Er.KHR, Er.KMF, Er.KPW, Er.KRW, Er.KWD, Er.KYD, Er.KZT, Er.LAK, Er.LBP, Er.LKR, Er.LRD, Er.LSL, Er.LTL, Er.LVL, Er.LYD, Er.MAD, Er.MDL, Er.MGA, Er.MKD, Er.MMK, Er.MNT, Er.MOP, Er.MRO, Er.MUR, Er.MVR, Er.MWK, Er.MXN, Er.MXV, Er.MYR, Er.MZN, Er.NAD, Er.NGN, Er.NIO, Er.NOK, Er.NPR, Er.NZD, Er.OMR, Er.PAB, Er.PEN, Er.PGK, Er.PHP, Er.PKR, Er.PLN, Er.PYG, Er.QAR, Er.RON, Er.RSD, Er.RUB, Er.RWF, Er.SAR, Er.SBD, Er.SCR, Er.SDG, Er.SEK, Er.SGD, Er.SHP, Er.SLL, Er.SOS, Er.SRD, Er.SSP, Er.STD, Er.SVC, Er.SYP, Er.SZL, Er.THB, Er.TJS, Er.TMT, Er.TND, Er.TOP, Er.TRY, Er.TTD, Er.TWD, Er.TZS, Er.UAH, Er.UGX, Er.USD, Er.USN, Er.USS, Er.UYI, Er.UYU, Er.UZS, Er.VEF, Er.VND, Er.VUV, Er.WST, Er.XAF, Er.XAG, Er.XAU, Er.XBA, Er.XBB, Er.XBC, Er.XBD, Er.XCD, Er.XDR, Er.XFU, Er.XOF, Er.XPD, Er.XPF, Er.XPT, Er.XSU, Er.XTS, Er.XUA, Er.YER, Er.ZAR, Er.ZMW, Er.ZWL;
    var or = {
      exports: {}
    };
    ! function(cB, Bc) {
      var nc = "__lodash_hash_undefined__",
        Vc = 9007199254740991,
        rB = "[object Arguments]",
        uc = "[object Array]",
        sc = "[object Boolean]",
        Mc = "[object Date]",
        Pc = "[object Error]",
        qB = "[object Function]",
        Oc = "[object Map]",
        Tc = "[object Number]",
        fc = "[object Object]",
        mB = "[object Promise]",
        ec = "[object RegExp]",
        tB = "[object Set]",
        Sc = "[object String]",
        yB = "[object Symbol]",
        zB = "[object WeakMap]",
        pc = "[object ArrayBuffer]",
        hc = "[object DataView]",
        aB = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        lc = /^\w*$/,
        Yc = /^\./,
        Lc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        gB = /\\(\\)?/g,
        Uc = /^\[object .+?Constructor\]$/,
        bB = /^(?:0|[1-9]\d*)$/,
        Zc = {};
      Zc["[object Float32Array]"] = Zc["[object Float64Array]"] = Zc["[object Int8Array]"] = Zc["[object Int16Array]"] = Zc["[object Int32Array]"] = Zc["[object Uint8Array]"] = Zc["[object Uint8ClampedArray]"] = Zc["[object Uint16Array]"] = Zc["[object Uint32Array]"] = !0, Zc[rB] = Zc[uc] = Zc[pc] = Zc[sc] = Zc[hc] = Zc[Mc] = Zc[Pc] = Zc[qB] = Zc[Oc] = Zc[Tc] = Zc[fc] = Zc[ec] = Zc[tB] = Zc[Sc] = Zc[zB] = !1;
      var Qc = "object" == typeof Ic && Ic && Ic.Object === Object && Ic,
        Cc = "object" == typeof self && self && self.Object === Object && self,
        vB = Qc || Cc || Function("return this")(),
        Dc = Bc && !Bc.nodeType && Bc,
        Nc = Dc && cB && !cB.nodeType && cB,
        Ec = Nc && Nc.exports === Dc && Qc.process,
        oc = function() {
          try {
            return Ec && Ec.binding("util")
          } catch (cB) {}
        }(),
        Wc = oc && oc.isTypedArray;

      function wc(cB, Bc) {
        for (var nc = -1, Vc = cB ? cB.length : 0; ++nc < Vc && !1 !== Bc(cB[nc], nc, cB););
        return cB
      }

      function kB(cB, Bc) {
        for (var nc = -1, Vc = cB ? cB.length : 0; ++nc < Vc;)
          if (Bc(cB[nc], nc, cB)) return !0;
        return !1
      }

      function Xc(cB) {
        var Bc = !1;
        if (null != cB && "function" != typeof cB.toString) try {
          Bc = !!(cB + "")
        } catch (nc) {}
        return Bc
      }

      function Hc(cB) {
        var Bc = -1,
          nc = Array(cB.size);
        return cB.forEach((function(cB, Vc) {
          nc[++Bc] = [Vc, cB]
        })), nc
      }

      function Fc(cB, Bc) {
        return function(nc) {
          return cB(Bc(nc))
        }
      }

      function Jc(cB) {
        var Bc = -1,
          nc = Array(cB.size);
        return cB.forEach((function(cB) {
          nc[++Bc] = cB
        })), nc
      }
      var jB = Array.prototype,
        Rc = Function.prototype,
        iB = Object.prototype,
        Kc = vB["__core-js_shared__"],
        xB = function() {
          var cB = /[^.]+$/.exec(Kc && Kc.keys && Kc.keys.IE_PROTO || "");
          return cB ? "Symbol(src)_1." + cB : ""
        }(),
        dc = Rc.toString,
        Ac = iB.hasOwnProperty,
        Gc = iB.toString,
        cn = RegExp("^" + dc.call(Ac).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
        BB = vB.Symbol,
        nB = vB.Uint8Array,
        VB = Fc(Object.getPrototypeOf, Object),
        IB = Object.create,
        rn = iB.propertyIsEnumerable,
        uB = jB.splice,
        sB = Fc(Object.keys, Object),
        MB = HB(vB, "DataView"),
        PB = HB(vB, "Map"),
        qn = HB(vB, "Promise"),
        OB = HB(vB, "Set"),
        TB = HB(vB, "WeakMap"),
        fB = HB(Object, "create"),
        mn = AB(MB),
        eB = AB(PB),
        tn = AB(qn),
        SB = AB(OB),
        yn = AB(TB),
        zn = BB ? BB.prototype : void 0,
        pB = zn ? zn.valueOf : void 0,
        hB = zn ? zn.toString : void 0;

      function an(cB) {
        var Bc = -1,
          nc = cB ? cB.length : 0;
        for (this.clear(); ++Bc < nc;) {
          var Vc = cB[Bc];
          this.set(Vc[0], Vc[1])
        }
      }

      function lB(cB) {
        var Bc = -1,
          nc = cB ? cB.length : 0;
        for (this.clear(); ++Bc < nc;) {
          var Vc = cB[Bc];
          this.set(Vc[0], Vc[1])
        }
      }

      function YB(cB) {
        var Bc = -1,
          nc = cB ? cB.length : 0;
        for (this.clear(); ++Bc < nc;) {
          var Vc = cB[Bc];
          this.set(Vc[0], Vc[1])
        }
      }

      function LB(cB) {
        var Bc = -1,
          nc = cB ? cB.length : 0;
        for (this.__data__ = new YB; ++Bc < nc;) this.add(cB[Bc])
      }

      function gn(cB) {
        this.__data__ = new lB(cB)
      }

      function UB(cB, Bc) {
        var nc = nn(cB) || Bn(cB) ? function(cB, Bc) {
            for (var nc = -1, Vc = Array(cB); ++nc < cB;) Vc[nc] = Bc(nc);
            return Vc
          }(cB.length, String) : [],
          Vc = nc.length,
          Ic = !!Vc;
        for (var rB in cB) !Bc && !Ac.call(cB, rB) || Ic && ("length" == rB || JB(rB, Vc)) || nc.push(rB);
        return nc
      }

      function bn(cB, Bc) {
        for (var nc = cB.length; nc--;)
          if (cV(cB[nc][0], Bc)) return nc;
        return -1
      }
      an.prototype.clear = function() {
        this.__data__ = fB ? fB(null) : {}
      }, an.prototype.delete = function(cB) {
        return this.has(cB) && delete this.__data__[cB]
      }, an.prototype.get = function(cB) {
        var Bc = this.__data__;
        if (fB) {
          var Vc = Bc[cB];
          return Vc === nc ? void 0 : Vc
        }
        return Ac.call(Bc, cB) ? Bc[cB] : void 0
      }, an.prototype.has = function(cB) {
        var Bc = this.__data__;
        return fB ? void 0 !== Bc[cB] : Ac.call(Bc, cB)
      }, an.prototype.set = function(cB, Bc) {
        return this.__data__[cB] = fB && void 0 === Bc ? nc : Bc, this
      }, lB.prototype.clear = function() {
        this.__data__ = []
      }, lB.prototype.delete = function(cB) {
        var Bc = this.__data__,
          nc = bn(Bc, cB);
        return !(nc < 0) && (nc == Bc.length - 1 ? Bc.pop() : uB.call(Bc, nc, 1), !0)
      }, lB.prototype.get = function(cB) {
        var Bc = this.__data__,
          nc = bn(Bc, cB);
        return nc < 0 ? void 0 : Bc[nc][1]
      }, lB.prototype.has = function(cB) {
        return bn(this.__data__, cB) > -1
      }, lB.prototype.set = function(cB, Bc) {
        var nc = this.__data__,
          Vc = bn(nc, cB);
        return Vc < 0 ? nc.push([cB, Bc]) : nc[Vc][1] = Bc, this
      }, YB.prototype.clear = function() {
        this.__data__ = {
          hash: new an,
          map: new(PB || lB),
          string: new an
        }
      }, YB.prototype.delete = function(cB) {
        return XB(this, cB).delete(cB)
      }, YB.prototype.get = function(cB) {
        return XB(this, cB).get(cB)
      }, YB.prototype.has = function(cB) {
        return XB(this, cB).has(cB)
      }, YB.prototype.set = function(cB, Bc) {
        return XB(this, cB).set(cB, Bc), this
      }, LB.prototype.add = LB.prototype.push = function(cB) {
        return this.__data__.set(cB, nc), this
      }, LB.prototype.has = function(cB) {
        return this.__data__.has(cB)
      }, gn.prototype.clear = function() {
        this.__data__ = new lB
      }, gn.prototype.delete = function(cB) {
        return this.__data__.delete(cB)
      }, gn.prototype.get = function(cB) {
        return this.__data__.get(cB)
      }, gn.prototype.has = function(cB) {
        return this.__data__.has(cB)
      }, gn.prototype.set = function(cB, Bc) {
        var nc = this.__data__;
        if (nc instanceof lB) {
          var Vc = nc.__data__;
          if (!PB || Vc.length < 199) return Vc.push([cB, Bc]), this;
          nc = this.__data__ = new YB(Vc)
        }
        return nc.set(cB, Bc), this
      };
      var ZB, QB = function(cB, Bc, nc) {
        for (var Vc = -1, Ic = Object(cB), rB = nc(cB), uc = rB.length; uc--;) {
          var sc = rB[ZB ? uc : ++Vc];
          if (!1 === Bc(Ic[sc], sc, Ic)) break
        }
        return cB
      };

      function CB(cB, Bc) {
        return cB && QB(cB, Bc, On)
      }

      function vn(cB, Bc) {
        for (var nc = 0, Vc = (Bc = jn(Bc, cB) ? [Bc] : wB(Bc)).length; null != cB && nc < Vc;) cB = cB[dB(Bc[nc++])];
        return nc && nc == Vc ? cB : void 0
      }

      function DB(cB, Bc) {
        return null != cB && Bc in Object(cB)
      }

      function NB(cB, Bc, nc, Vc, Ic) {
        return cB === Bc || (null == cB || null == Bc || !un(cB) && !sn(Bc) ? cB !== cB && Bc !== Bc : function(cB, Bc, nc, Vc, Ic, qB) {
          var mB = nn(cB),
            zB = nn(Bc),
            aB = uc,
            lc = uc;
          mB || (aB = (aB = FB(cB)) == rB ? fc : aB);
          zB || (lc = (lc = FB(Bc)) == rB ? fc : lc);
          var Yc = aB == fc && !Xc(cB),
            Lc = lc == fc && !Xc(Bc),
            gB = aB == lc;
          if (gB && !Yc) return qB || (qB = new gn), mB || qV(cB) ? kn(cB, Bc, nc, Vc, Ic, qB) : function(cB, Bc, nc, Vc, Ic, rB, uc) {
            switch (nc) {
              case hc:
                if (cB.byteLength != Bc.byteLength || cB.byteOffset != Bc.byteOffset) return !1;
                cB = cB.buffer, Bc = Bc.buffer;
              case pc:
                return !(cB.byteLength != Bc.byteLength || !Vc(new nB(cB), new nB(Bc)));
              case sc:
              case Mc:
              case Tc:
                return cV(+cB, +Bc);
              case Pc:
                return cB.name == Bc.name && cB.message == Bc.message;
              case ec:
              case Sc:
                return cB == Bc + "";
              case Oc:
                var qB = Hc;
              case tB:
                var fc = 2 & rB;
                if (qB || (qB = Jc), cB.size != Bc.size && !fc) return !1;
                var mB = uc.get(cB);
                if (mB) return mB == Bc;
                rB |= 1, uc.set(cB, Bc);
                var zB = kn(qB(cB), qB(Bc), Vc, Ic, rB, uc);
                return uc.delete(cB), zB;
              case yB:
                if (pB) return pB.call(cB) == pB.call(Bc)
            }
            return !1
          }(cB, Bc, aB, nc, Vc, Ic, qB);
          if (!(2 & Ic)) {
            var Uc = Yc && Ac.call(cB, "__wrapped__"),
              bB = Lc && Ac.call(Bc, "__wrapped__");
            if (Uc || bB) {
              var Zc = Uc ? cB.value() : cB,
                Qc = bB ? Bc.value() : Bc;
              return qB || (qB = new gn), nc(Zc, Qc, Vc, Ic, qB)
            }
          }
          if (!gB) return !1;
          return qB || (qB = new gn),
            function(cB, Bc, nc, Vc, Ic, rB) {
              var uc = 2 & Ic,
                sc = On(cB),
                Mc = sc.length,
                Pc = On(Bc),
                qB = Pc.length;
              if (Mc != qB && !uc) return !1;
              var Oc = Mc;
              for (; Oc--;) {
                var Tc = sc[Oc];
                if (!(uc ? Tc in Bc : Ac.call(Bc, Tc))) return !1
              }
              var fc = rB.get(cB);
              if (fc && rB.get(Bc)) return fc == Bc;
              var mB = !0;
              rB.set(cB, Bc), rB.set(Bc, cB);
              var ec = uc;
              for (; ++Oc < Mc;) {
                var tB = cB[Tc = sc[Oc]],
                  Sc = Bc[Tc];
                if (Vc) var yB = uc ? Vc(Sc, tB, Tc, Bc, cB, rB) : Vc(tB, Sc, Tc, cB, Bc, rB);
                if (!(void 0 === yB ? tB === Sc || nc(tB, Sc, Vc, Ic, rB) : yB)) {
                  mB = !1;
                  break
                }
                ec || (ec = "constructor" == Tc)
              }
              if (mB && !ec) {
                var zB = cB.constructor,
                  pc = Bc.constructor;
                zB == pc || !("constructor" in cB) || !("constructor" in Bc) || "function" == typeof zB && zB instanceof zB && "function" == typeof pc && pc instanceof pc || (mB = !1)
              }
              return rB.delete(cB), rB.delete(Bc), mB
            }(cB, Bc, nc, Vc, Ic, qB)
        }(cB, Bc, NB, nc, Vc, Ic))
      }

      function EB(cB) {
        return !(!un(cB) || (Bc = cB, xB && xB in Bc)) && (In(cB) || Xc(cB) ? cn : Uc).test(AB(cB));
        var Bc
      }

      function oB(cB) {
        return "function" == typeof cB ? cB : null == cB ? Tn : "object" == typeof cB ? nn(cB) ? function(cB, Bc) {
          if (jn(cB) && RB(Bc)) return KB(dB(cB), Bc);
          return function(nc) {
            var Vc = function(cB, Bc, nc) {
              var Vc = null == cB ? void 0 : vn(cB, Bc);
              return void 0 === Vc ? nc : Vc
            }(nc, cB);
            return void 0 === Vc && Vc === Bc ? function(cB, Bc) {
              return null != cB && function(cB, Bc, nc) {
                Bc = jn(Bc, cB) ? [Bc] : wB(Bc);
                var Vc, Ic = -1,
                  rB = Bc.length;
                for (; ++Ic < rB;) {
                  var uc = dB(Bc[Ic]);
                  if (!(Vc = null != cB && nc(cB, uc))) break;
                  cB = cB[uc]
                }
                if (Vc) return Vc;
                rB = cB ? cB.length : 0;
                return !!rB && rV(rB) && JB(uc, rB) && (nn(cB) || Bn(cB))
              }(cB, Bc, DB)
            }(nc, cB) : NB(Bc, Vc, void 0, 3)
          }
        }(cB[0], cB[1]) : function(cB) {
          var Bc = function(cB) {
            var Bc = On(cB),
              nc = Bc.length;
            for (; nc--;) {
              var Vc = Bc[nc],
                Ic = cB[Vc];
              Bc[nc] = [Vc, Ic, RB(Ic)]
            }
            return Bc
          }(cB);
          if (1 == Bc.length && Bc[0][2]) return KB(Bc[0][0], Bc[0][1]);
          return function(nc) {
            return nc === cB || function(cB, Bc, nc, Vc) {
              var Ic = nc.length,
                rB = Ic,
                uc = !Vc;
              if (null == cB) return !rB;
              for (cB = Object(cB); Ic--;) {
                var sc = nc[Ic];
                if (uc && sc[2] ? sc[1] !== cB[sc[0]] : !(sc[0] in cB)) return !1
              }
              for (; ++Ic < rB;) {
                var Mc = (sc = nc[Ic])[0],
                  Pc = cB[Mc],
                  qB = sc[1];
                if (uc && sc[2]) {
                  if (void 0 === Pc && !(Mc in cB)) return !1
                } else {
                  var Oc = new gn;
                  if (Vc) var Tc = Vc(Pc, qB, Mc, cB, Bc, Oc);
                  if (!(void 0 === Tc ? NB(qB, Pc, Vc, 3, Oc) : Tc)) return !1
                }
              }
              return !0
            }(nc, cB, Bc)
          }
        }(cB) : function(cB) {
          return jn(cB) ? (Bc = dB(cB), function(cB) {
            return null == cB ? void 0 : cB[Bc]
          }) : function(cB) {
            return function(Bc) {
              return vn(Bc, cB)
            }
          }(cB);
          var Bc
        }(cB)
      }

      function WB(cB) {
        if (! function(cB) {
            var Bc = cB && cB.constructor,
              nc = "function" == typeof Bc && Bc.prototype || iB;
            return cB === nc
          }(cB)) return sB(cB);
        var Bc = [];
        for (var nc in Object(cB)) Ac.call(cB, nc) && "constructor" != nc && Bc.push(nc);
        return Bc
      }

      function wB(cB) {
        return nn(cB) ? cB : xn(cB)
      }

      function kn(cB, Bc, nc, Vc, Ic, rB) {
        var uc = 2 & Ic,
          sc = cB.length,
          Mc = Bc.length;
        if (sc != Mc && !(uc && Mc > sc)) return !1;
        var Pc = rB.get(cB);
        if (Pc && rB.get(Bc)) return Pc == Bc;
        var qB = -1,
          Oc = !0,
          Tc = 1 & Ic ? new LB : void 0;
        for (rB.set(cB, Bc), rB.set(Bc, cB); ++qB < sc;) {
          var fc = cB[qB],
            mB = Bc[qB];
          if (Vc) var ec = uc ? Vc(mB, fc, qB, Bc, cB, rB) : Vc(fc, mB, qB, cB, Bc, rB);
          if (void 0 !== ec) {
            if (ec) continue;
            Oc = !1;
            break
          }
          if (Tc) {
            if (!kB(Bc, (function(cB, Bc) {
                if (!Tc.has(Bc) && (fc === cB || nc(fc, cB, Vc, Ic, rB))) return Tc.add(Bc)
              }))) {
              Oc = !1;
              break
            }
          } else if (fc !== mB && !nc(fc, mB, Vc, Ic, rB)) {
            Oc = !1;
            break
          }
        }
        return rB.delete(cB), rB.delete(Bc), Oc
      }

      function XB(cB, Bc) {
        var nc = cB.__data__;
        return function(cB) {
          var Bc = typeof cB;
          return "string" == Bc || "number" == Bc || "symbol" == Bc || "boolean" == Bc ? "__proto__" !== cB : null === cB
        }(Bc) ? nc["string" == typeof Bc ? "string" : "hash"] : nc.map
      }

      function HB(cB, Bc) {
        var nc = function(cB, Bc) {
          return null == cB ? void 0 : cB[Bc]
        }(cB, Bc);
        return EB(nc) ? nc : void 0
      }
      var FB = function(cB) {
        return Gc.call(cB)
      };

      function JB(cB, Bc) {
        return !!(Bc = null == Bc ? Vc : Bc) && ("number" == typeof cB || bB.test(cB)) && cB > -1 && cB % 1 == 0 && cB < Bc
      }

      function jn(cB, Bc) {
        if (nn(cB)) return !1;
        var nc = typeof cB;
        return !("number" != nc && "symbol" != nc && "boolean" != nc && null != cB && !Mn(cB)) || (lc.test(cB) || !aB.test(cB) || null != Bc && cB in Object(Bc))
      }

      function RB(cB) {
        return cB === cB && !un(cB)
      }

      function KB(cB, Bc) {
        return function(nc) {
          return null != nc && (nc[cB] === Bc && (void 0 !== Bc || cB in Object(nc)))
        }
      }(MB && FB(new MB(new ArrayBuffer(1))) != hc || PB && FB(new PB) != Oc || qn && FB(qn.resolve()) != mB || OB && FB(new OB) != tB || TB && FB(new TB) != zB) && (FB = function(cB) {
        var Bc = Gc.call(cB),
          nc = Bc == fc ? cB.constructor : void 0,
          Vc = nc ? AB(nc) : void 0;
        if (Vc) switch (Vc) {
          case mn:
            return hc;
          case eB:
            return Oc;
          case tn:
            return mB;
          case SB:
            return tB;
          case yn:
            return zB
        }
        return Bc
      });
      var xn = GB((function(cB) {
        var Bc;
        cB = null == (Bc = cB) ? "" : function(cB) {
          if ("string" == typeof cB) return cB;
          if (Mn(cB)) return hB ? hB.call(cB) : "";
          var Bc = cB + "";
          return "0" == Bc && 1 / cB == -1 / 0 ? "-0" : Bc
        }(Bc);
        var nc = [];
        return Yc.test(cB) && nc.push(""), cB.replace(Lc, (function(cB, Bc, Vc, Ic) {
          nc.push(Vc ? Ic.replace(gB, "$1") : Bc || cB)
        })), nc
      }));

      function dB(cB) {
        if ("string" == typeof cB || Mn(cB)) return cB;
        var Bc = cB + "";
        return "0" == Bc && 1 / cB == -1 / 0 ? "-0" : Bc
      }

      function AB(cB) {
        if (null != cB) {
          try {
            return dc.call(cB)
          } catch (Bc) {}
          try {
            return cB + ""
          } catch (Bc) {}
        }
        return ""
      }

      function GB(cB, Bc) {
        if ("function" != typeof cB || Bc && "function" != typeof Bc) throw new TypeError("Expected a function");
        var nc = function() {
          var Vc = arguments,
            Ic = Bc ? Bc.apply(this, Vc) : Vc[0],
            rB = nc.cache;
          if (rB.has(Ic)) return rB.get(Ic);
          var uc = cB.apply(this, Vc);
          return nc.cache = rB.set(Ic, uc), uc
        };
        return nc.cache = new(GB.Cache || YB), nc
      }

      function cV(cB, Bc) {
        return cB === Bc || cB !== cB && Bc !== Bc
      }

      function Bn(cB) {
        return function(cB) {
          return sn(cB) && Vn(cB)
        }(cB) && Ac.call(cB, "callee") && (!rn.call(cB, "callee") || Gc.call(cB) == rB)
      }
      GB.Cache = YB;
      var nn = Array.isArray;

      function Vn(cB) {
        return null != cB && rV(cB.length) && !In(cB)
      }

      function In(cB) {
        var Bc = un(cB) ? Gc.call(cB) : "";
        return Bc == qB || "[object GeneratorFunction]" == Bc
      }

      function rV(cB) {
        return "number" == typeof cB && cB > -1 && cB % 1 == 0 && cB <= Vc
      }

      function un(cB) {
        var Bc = typeof cB;
        return !!cB && ("object" == Bc || "function" == Bc)
      }

      function sn(cB) {
        return !!cB && "object" == typeof cB
      }

      function Mn(cB) {
        return "symbol" == typeof cB || sn(cB) && Gc.call(cB) == yB
      }
      var Pn, qV = Wc ? (Pn = Wc, function(cB) {
        return Pn(cB)
      }) : function(cB) {
        return sn(cB) && rV(cB.length) && !!Zc[Gc.call(cB)]
      };

      function On(cB) {
        return Vn(cB) ? UB(cB) : WB(cB)
      }

      function Tn(cB) {
        return cB
      }
      cB.exports = function(cB, Bc, nc) {
        var Vc, Ic = nn(cB) || qV(cB);
        if (Bc = oB(Bc), null == nc)
          if (Ic || un(cB)) {
            var rB = cB.constructor;
            nc = Ic ? nn(cB) ? new rB : [] : In(rB) ? un(Vc = VB(cB)) ? IB(Vc) : {} : {}
          } else nc = {};
        return (Ic ? wc : CB)(cB, (function(cB, Vc, Ic) {
          return Bc(nc, cB, Vc, Ic)
        })), nc
      }
    }(or, or.exports);
    "function" === typeof SuppressedError && SuppressedError;
    const {
      k: Wr
    } = Vc
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);