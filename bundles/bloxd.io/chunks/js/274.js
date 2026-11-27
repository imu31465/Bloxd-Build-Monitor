export const id = 274;
export const ids = [273, 274];
export const modules = {
  64605: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      RegisterShaderMaterial: () => Zr.c,
      ShaderMaterial: () => Zr.o,
      ShaderMaterialCreateFromSnippetAsync: () => Zr.d,
      ShaderMaterialParse: () => Zr.k,
      ShaderMaterialParseFromFileAsync: () => Zr.h,
      ShaderMaterialParseFromSnippetAsync: () => Zr.j
    });
    var Zr = Qr(42308);
    (0, Zr.c)()
  },
  39262: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr
    });
    var Zr = Qr(39264);
    class Wr {
      static GetPlanes(rr) {
        const Sr = [];
        for (let Qr = 0; Qr < 6; Qr++) Sr.push(new Zr.d(0, 0, 0, 0));
        return Wr.GetPlanesToRef(rr, Sr), Sr
      }
      static GetNearPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] + Qr[2], Sr.normal.y = Qr[7] + Qr[6], Sr.normal.z = Qr[11] + Qr[10], Sr.d = Qr[15] + Qr[14], Sr.normalize()
      }
      static GetFarPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] - Qr[2], Sr.normal.y = Qr[7] - Qr[6], Sr.normal.z = Qr[11] - Qr[10], Sr.d = Qr[15] - Qr[14], Sr.normalize()
      }
      static GetLeftPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] + Qr[0], Sr.normal.y = Qr[7] + Qr[4], Sr.normal.z = Qr[11] + Qr[8], Sr.d = Qr[15] + Qr[12], Sr.normalize()
      }
      static GetRightPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] - Qr[0], Sr.normal.y = Qr[7] - Qr[4], Sr.normal.z = Qr[11] - Qr[8], Sr.d = Qr[15] - Qr[12], Sr.normalize()
      }
      static GetTopPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] - Qr[1], Sr.normal.y = Qr[7] - Qr[5], Sr.normal.z = Qr[11] - Qr[9], Sr.d = Qr[15] - Qr[13], Sr.normalize()
      }
      static GetBottomPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] + Qr[1], Sr.normal.y = Qr[7] + Qr[5], Sr.normal.z = Qr[11] + Qr[9], Sr.d = Qr[15] + Qr[13], Sr.normalize()
      }
      static GetPlanesToRef(rr, Sr) {
        Wr.GetNearPlaneToRef(rr, Sr[0]), Wr.GetFarPlaneToRef(rr, Sr[1]), Wr.GetLeftPlaneToRef(rr, Sr[2]), Wr.GetRightPlaneToRef(rr, Sr[3]), Wr.GetTopPlaneToRef(rr, Sr[4]), Wr.GetBottomPlaneToRef(rr, Sr[5])
      }
      static IsPointInFrustum(rr, Sr) {
        for (let Qr = 0; Qr < 6; Qr++)
          if (Sr[Qr].dotCoordinate(rr) < 0) return !1;
        return !0
      }
    }
  },
  39264: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    var Zr = Qr(38560);
    class Wr {
      constructor(rr, Sr, Qr, Wr) {
        this.normal = new Zr.u(rr, Sr, Qr), this.d = Wr
      }
      OWr() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Wr(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let rr = this.normal.getHashCode();
        return rr = 397 * rr ^ this.d, rr
      }
      normalize() {
        const rr = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Sr = 0;
        return 0 !== rr && (Sr = 1 / rr), this.normal.x *= Sr, this.normal.y *= Sr, this.normal.z *= Sr, this.d *= Sr, this
      }
      transform(rr) {
        const Sr = Wr._TmpMatrix;
        rr.invertToRef(Sr);
        const Qr = Sr.m,
          Zr = this.normal.x,
          ar = this.normal.y,
          jr = this.normal.z,
          Ir = this.d,
          fr = Zr * Qr[0] + ar * Qr[1] + jr * Qr[2] + Ir * Qr[3],
          Er = Zr * Qr[4] + ar * Qr[5] + jr * Qr[6] + Ir * Qr[7],
          pr = Zr * Qr[8] + ar * Qr[9] + jr * Qr[10] + Ir * Qr[11],
          xr = Zr * Qr[12] + ar * Qr[13] + jr * Qr[14] + Ir * Qr[15];
        return new Wr(fr, Er, pr, xr)
      }
      dotCoordinate(rr) {
        return this.normal.x * rr.x + this.normal.y * rr.y + this.normal.z * rr.z + this.d
      }
      copyFromPoints(rr, Sr, Qr) {
        const Zr = Sr.x - rr.x,
          Wr = Sr.y - rr.y,
          ar = Sr.z - rr.z,
          jr = Qr.x - rr.x,
          Ir = Qr.y - rr.y,
          fr = Qr.z - rr.z,
          Er = Wr * fr - ar * Ir,
          pr = ar * jr - Zr * fr,
          xr = Zr * Ir - Wr * jr,
          mr = Math.sqrt(Er * Er + pr * pr + xr * xr);
        let Nr;
        return Nr = 0 !== mr ? 1 / mr : 0, this.normal.x = Er * Nr, this.normal.y = pr * Nr, this.normal.z = xr * Nr, this.d = -(this.normal.x * rr.x + this.normal.y * rr.y + this.normal.z * rr.z), this
      }
      isFrontFacingTo(rr, Sr) {
        return Zr.u.Dot(this.normal, rr) <= Sr
      }
      signedDistanceTo(rr) {
        return Zr.u.Dot(rr, this.normal) + this.d
      }
      static FromArray(rr) {
        return new Wr(rr[0], rr[1], rr[2], rr[3])
      }
      static FromPoints(rr, Sr, Qr) {
        const Zr = new Wr(0, 0, 0, 0);
        return Zr.copyFromPoints(rr, Sr, Qr), Zr
      }
      static FromPositionAndNormal(rr, Sr) {
        const Qr = new Wr(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(rr, Sr, Qr)
      }
      static FromPositionAndNormalToRef(rr, Sr, Qr) {
        return Qr.normal.iH(Sr), Qr.normal.normalize(), Qr.d = -rr.dot(Qr.normal), Qr
      }
      static SignedDistanceToPlaneFromPositionAndNormal(rr, Sr, Qr) {
        const Wr = -(Sr.x * rr.x + Sr.y * rr.y + Sr.z * rr.z);
        return Zr.u.Dot(Qr, Sr) + Wr
      }
    }
    Wr._TmpMatrix = Zr.d.Identity()
  },
  40237: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar
    });
    var Zr = Qr(40246);
    const Wr = (rr, Sr, Qr) => rr ? rr.getClassName && "Mesh" === rr.getClassName() ? null : !rr.getClassName || "SubMesh" !== rr.getClassName() && "PhysicsBody" !== rr.getClassName() ? rr.clone ? rr.clone() : Array.isArray(rr) ? rr.slice() : Qr && "object" === typeof rr ? {
      ...rr
    } : null : rr.clone(Sr) : null;
    class ar {
      static DeepCopy(rr, Sr, Qr, ar) {
        let jr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ir = function(rr) {
          const Sr = [];
          do {
            const Qr = Object.getOwnPropertyNames(rr);
            for (const rr of Qr) - 1 === Sr.indexOf(rr) && Sr.push(rr)
          } while (rr = Object.getPrototypeOf(rr));
          return Sr
        }(rr);
        for (const Er of Ir) {
          if ("_" === Er[0] && (!ar || -1 === ar.indexOf(Er))) continue;
          if (Er.endsWith("Observable")) continue;
          if (Qr && -1 !== Qr.indexOf(Er)) continue;
          const Ir = rr[Er],
            pr = typeof Ir;
          if ("function" !== pr) try {
            if ("object" === pr)
              if (Ir instanceof Uint8Array) Sr[Er] = Uint8Array.from(Ir);
              else if (Ir instanceof Array) {
              if (Sr[Er] = [], Ir.length > 0)
                if ("object" == typeof Ir[0])
                  for (let rr = 0; rr < Ir.length; rr++) {
                    const Qr = Wr(Ir[rr], Sr, jr); - 1 === Sr[Er].indexOf(Qr) && Sr[Er].push(Qr)
                  } else Sr[Er] = Ir.slice(0)
            } else Sr[Er] = Wr(Ir, Sr, jr);
            else Sr[Er] = Ir
          } catch (fr) {
            Zr.c.Warn(fr.message)
          }
        }
      }
    }
  },
  39405: (rr, Sr, Qr) => {
    function Zr() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (rr => {
        const Sr = 16 * Math.random() | 0;
        return ("x" === rr ? Sr : 3 & Sr | 8).toString(16)
      }))
    }
    Qr.d(Sr, {
      b: () => Zr
    })
  },
  40246: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr
    });
    class Zr {
      static _CheckLimit(rr, Sr) {
        let Qr = Zr._LogLimitOutputs[rr];
        return Qr ? Qr.current++ : (Qr = {
          limit: Sr,
          current: 1
        }, Zr._LogLimitOutputs[rr] = Qr), Qr.current <= Qr.limit
      }
      static _GenerateLimitMessage(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Qr = Zr._LogLimitOutputs[rr];
        if (!Qr || !Zr.MessageLimitReached) return;
        const Wr = this._Levels[Sr];
        Qr.current === Qr.limit && Zr[Wr.name](Zr.MessageLimitReached.replace(/%LIMIT%/g, "" + Qr.limit).replace(/%TYPE%/g, Wr.name ?? ""))
      }
      static _AddLogEntry(rr) {
        Zr._LogCache = rr + Zr._LogCache, Zr.OnNewCacheEntry && Zr.OnNewCacheEntry(rr)
      }
      static _FormatMessage(rr) {
        const Sr = rr => rr < 10 ? "0" + rr : "" + rr,
          Qr = new Date;
        return "[" + Sr(Qr.getHours()) + ":" + Sr(Qr.getMinutes()) + ":" + Sr(Qr.getSeconds()) + "]: " + rr
      }
      static _LogDisabled(rr, Sr) {}
      static _LogEnabled() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Sr = arguments.length > 1 ? arguments[1] : void 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        const Wr = Array.isArray(Sr) ? Sr[0] : Sr;
        if (void 0 !== Qr && !Zr._CheckLimit(Wr, Qr)) return;
        const ar = Zr._FormatMessage(Wr),
          jr = this._Levels[rr],
          Ir = Array.isArray(Sr) ? Sr.slice(1) : [];
        jr.logFunc && jr.logFunc("BJS - " + ar, ...Ir);
        const fr = `<div style='color:${jr.color}'>${ar}</div><br>`;
        Zr._AddLogEntry(fr), Zr._GenerateLimitMessage(Wr, rr)
      }
      static get LogCache() {
        return Zr._LogCache
      }
      static ClearLogCache() {
        Zr._LogCache = "", Zr._LogLimitOutputs = {}, Zr.errorsCount = 0
      }
      static set LogLevels(rr) {
        Zr.Log = Zr._LogDisabled, Zr.Warn = Zr._LogDisabled, Zr.Error = Zr._LogDisabled;
        const Sr = [Zr.MessageLogLevel, Zr.WarningLogLevel, Zr.ErrorLogLevel];
        for (const Qr of Sr)
          if ((rr & Qr) === Qr) {
            const rr = this._Levels[Qr];
            Zr[rr.name] = Zr._LogEnabled.bind(Zr, Qr)
          }
      }
    }
    Zr.NoneLogLevel = 0, Zr.MessageLogLevel = 1, Zr.WarningLogLevel = 2, Zr.ErrorLogLevel = 4, Zr.AllLogLevel = 7, Zr.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Zr._LogCache = "", Zr._LogLimitOutputs = {}, Zr._Levels = [{}, {
      color: "white",
      logFunc: console.log,
      name: "Log"
    }, {
      color: "orange",
      logFunc: console.warn,
      name: "Warn"
    }, {}, {
      color: "red",
      logFunc: console.error,
      name: "Error"
    }], Zr.errorsCount = 0, Zr.Log = Zr._LogEnabled.bind(Zr, Zr.MessageLogLevel), Zr.Warn = Zr._LogEnabled.bind(Zr, Zr.WarningLogLevel), Zr.Error = Zr._LogEnabled.bind(Zr, Zr.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);