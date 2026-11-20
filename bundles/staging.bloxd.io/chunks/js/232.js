export const id = 232;
export const ids = [232];
export const modules = {
  37459: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk
    });
    var Rk = Bk(37467);
    class tk {
      static GetPlanes(kk) {
        const Fk = [];
        for (let Bk = 0; Bk < 6; Bk++) Fk.push(new Rk.c(0, 0, 0, 0));
        return tk.GetPlanesToRef(kk, Fk), Fk
      }
      static GetNearPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] + Bk[2], Fk.normal.y = Bk[7] + Bk[6], Fk.normal.z = Bk[11] + Bk[10], Fk.d = Bk[15] + Bk[14], Fk.normalize()
      }
      static GetFarPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] - Bk[2], Fk.normal.y = Bk[7] - Bk[6], Fk.normal.z = Bk[11] - Bk[10], Fk.d = Bk[15] - Bk[14], Fk.normalize()
      }
      static GetLeftPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] + Bk[0], Fk.normal.y = Bk[7] + Bk[4], Fk.normal.z = Bk[11] + Bk[8], Fk.d = Bk[15] + Bk[12], Fk.normalize()
      }
      static GetRightPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] - Bk[0], Fk.normal.y = Bk[7] - Bk[4], Fk.normal.z = Bk[11] - Bk[8], Fk.d = Bk[15] - Bk[12], Fk.normalize()
      }
      static GetTopPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] - Bk[1], Fk.normal.y = Bk[7] - Bk[5], Fk.normal.z = Bk[11] - Bk[9], Fk.d = Bk[15] - Bk[13], Fk.normalize()
      }
      static GetBottomPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] + Bk[1], Fk.normal.y = Bk[7] + Bk[5], Fk.normal.z = Bk[11] + Bk[9], Fk.d = Bk[15] + Bk[13], Fk.normalize()
      }
      static GetPlanesToRef(kk, Fk) {
        tk.GetNearPlaneToRef(kk, Fk[0]), tk.GetFarPlaneToRef(kk, Fk[1]), tk.GetLeftPlaneToRef(kk, Fk[2]), tk.GetRightPlaneToRef(kk, Fk[3]), tk.GetTopPlaneToRef(kk, Fk[4]), tk.GetBottomPlaneToRef(kk, Fk[5])
      }
      static IsPointInFrustum(kk, Fk) {
        for (let Bk = 0; Bk < 6; Bk++)
          if (Fk[Bk].dotCoordinate(kk) < 0) return !1;
        return !0
      }
    }
  },
  37467: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk
    });
    var Rk = Bk(36758);
    class tk {
      constructor(kk, Fk, Bk, tk) {
        this.normal = new Rk.s(kk, Fk, Bk), this.d = tk
      }
      PBk() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new tk(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let kk = this.normal.getHashCode();
        return kk = 397 * kk ^ this.d, kk
      }
      normalize() {
        const kk = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Fk = 0;
        return 0 !== kk && (Fk = 1 / kk), this.normal.x *= Fk, this.normal.y *= Fk, this.normal.z *= Fk, this.d *= Fk, this
      }
      transform(kk) {
        const Fk = tk._TmpMatrix;
        kk.invertToRef(Fk);
        const Bk = Fk.m,
          Rk = this.normal.x,
          ak = this.normal.y,
          Xk = this.normal.z,
          bk = this.d,
          wk = Rk * Bk[0] + ak * Bk[1] + Xk * Bk[2] + bk * Bk[3],
          dk = Rk * Bk[4] + ak * Bk[5] + Xk * Bk[6] + bk * Bk[7],
          sk = Rk * Bk[8] + ak * Bk[9] + Xk * Bk[10] + bk * Bk[11],
          Vk = Rk * Bk[12] + ak * Bk[13] + Xk * Bk[14] + bk * Bk[15];
        return new tk(wk, dk, sk, Vk)
      }
      dotCoordinate(kk) {
        return this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z + this.d
      }
      copyFromPoints(kk, Fk, Bk) {
        const Rk = Fk.x - kk.x,
          tk = Fk.y - kk.y,
          ak = Fk.z - kk.z,
          Xk = Bk.x - kk.x,
          bk = Bk.y - kk.y,
          wk = Bk.z - kk.z,
          dk = tk * wk - ak * bk,
          sk = ak * Xk - Rk * wk,
          Vk = Rk * bk - tk * Xk,
          Jk = Math.sqrt(dk * dk + sk * sk + Vk * Vk);
        let Ak;
        return Ak = 0 !== Jk ? 1 / Jk : 0, this.normal.x = dk * Ak, this.normal.y = sk * Ak, this.normal.z = Vk * Ak, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
      }
      isFrontFacingTo(kk, Fk) {
        return Rk.s.Dot(this.normal, kk) <= Fk
      }
      signedDistanceTo(kk) {
        return Rk.s.Dot(kk, this.normal) + this.d
      }
      static FromArray(kk) {
        return new tk(kk[0], kk[1], kk[2], kk[3])
      }
      static FromPoints(kk, Fk, Bk) {
        const Rk = new tk(0, 0, 0, 0);
        return Rk.copyFromPoints(kk, Fk, Bk), Rk
      }
      static FromPositionAndNormal(kk, Fk) {
        const Bk = new tk(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(kk, Fk, Bk)
      }
      static FromPositionAndNormalToRef(kk, Fk, Bk) {
        return Bk.normal.sBk(Fk), Bk.normal.normalize(), Bk.d = -kk.dot(Bk.normal), Bk
      }
      static SignedDistanceToPlaneFromPositionAndNormal(kk, Fk, Bk) {
        const tk = -(Fk.x * kk.x + Fk.y * kk.y + Fk.z * kk.z);
        return Rk.s.Dot(Bk, Fk) + tk
      }
    }
    tk._TmpMatrix = Rk.c.Identity()
  },
  38318: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak
    });
    var Rk = Bk(38320);
    const tk = (kk, Fk, Bk) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : Bk && "object" === typeof kk ? {
      ...kk
    } : null : kk.clone(Fk) : null;
    class ak {
      static DeepCopy(kk, Fk, Bk, ak) {
        let Xk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bk = function(kk) {
          const Fk = [];
          do {
            const Bk = Object.getOwnPropertyNames(kk);
            for (const kk of Bk) - 1 === Fk.indexOf(kk) && Fk.push(kk)
          } while (kk = Object.getPrototypeOf(kk));
          return Fk
        }(kk);
        for (const dk of bk) {
          if ("_" === dk[0] && (!ak || -1 === ak.indexOf(dk))) continue;
          if (dk.endsWith("Observable")) continue;
          if (Bk && -1 !== Bk.indexOf(dk)) continue;
          const bk = kk[dk],
            sk = typeof bk;
          if ("function" !== sk) try {
            if ("object" === sk)
              if (bk instanceof Uint8Array) Fk[dk] = Uint8Array.from(bk);
              else if (bk instanceof Array) {
              if (Fk[dk] = [], bk.length > 0)
                if ("object" == typeof bk[0])
                  for (let kk = 0; kk < bk.length; kk++) {
                    const Bk = tk(bk[kk], Fk, Xk); - 1 === Fk[dk].indexOf(Bk) && Fk[dk].push(Bk)
                  } else Fk[dk] = bk.slice(0)
            } else Fk[dk] = tk(bk, Fk, Xk);
            else Fk[dk] = bk
          } catch (wk) {
            Rk.b.Warn(wk.message)
          }
        }
      }
    }
  },
  37578: (kk, Fk, Bk) => {
    function Rk() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
        const Fk = 16 * Math.random() | 0;
        return ("x" === kk ? Fk : 3 & Fk | 8).toString(16)
      }))
    }
    Bk.d(Fk, {
      e: () => Rk
    })
  },
  38320: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Rk
    });
    class Rk {
      static _CheckLimit(kk, Fk) {
        let Bk = Rk._LogLimitOutputs[kk];
        return Bk ? Bk.current++ : (Bk = {
          limit: Fk,
          current: 1
        }, Rk._LogLimitOutputs[kk] = Bk), Bk.current <= Bk.limit
      }
      static _GenerateLimitMessage(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Bk = Rk._LogLimitOutputs[kk];
        if (!Bk || !Rk.MessageLimitReached) return;
        const tk = this._Levels[Fk];
        Bk.current === Bk.limit && Rk[tk.name](Rk.MessageLimitReached.replace(/%LIMIT%/g, "" + Bk.limit).replace(/%TYPE%/g, tk.name ?? ""))
      }
      static _AddLogEntry(kk) {
        Rk._LogCache = kk + Rk._LogCache, Rk.OnNewCacheEntry && Rk.OnNewCacheEntry(kk)
      }
      static _FormatMessage(kk) {
        const Fk = kk => kk < 10 ? "0" + kk : "" + kk,
          Bk = new Date;
        return "[" + Fk(Bk.getHours()) + ":" + Fk(Bk.getMinutes()) + ":" + Fk(Bk.getSeconds()) + "]: " + kk
      }
      static _LogDisabled(kk, Fk) {}
      static _LogEnabled() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        const tk = Array.isArray(Fk) ? Fk[0] : Fk;
        if (void 0 !== Bk && !Rk._CheckLimit(tk, Bk)) return;
        const ak = Rk._FormatMessage(tk),
          Xk = this._Levels[kk],
          bk = Array.isArray(Fk) ? Fk.slice(1) : [];
        Xk.logFunc && Xk.logFunc("BJS - " + ak, ...bk);
        const wk = `<div style='color:${Xk.color}'>${ak}</div><br>`;
        Rk._AddLogEntry(wk), Rk._GenerateLimitMessage(tk, kk)
      }
      static get LogCache() {
        return Rk._LogCache
      }
      static ClearLogCache() {
        Rk._LogCache = "", Rk._LogLimitOutputs = {}, Rk.errorsCount = 0
      }
      static set LogLevels(kk) {
        Rk.Log = Rk._LogDisabled, Rk.Warn = Rk._LogDisabled, Rk.Error = Rk._LogDisabled;
        const Fk = [Rk.MessageLogLevel, Rk.WarningLogLevel, Rk.ErrorLogLevel];
        for (const Bk of Fk)
          if ((kk & Bk) === Bk) {
            const kk = this._Levels[Bk];
            Rk[kk.name] = Rk._LogEnabled.bind(Rk, Bk)
          }
      }
    }
    Rk.NoneLogLevel = 0, Rk.MessageLogLevel = 1, Rk.WarningLogLevel = 2, Rk.ErrorLogLevel = 4, Rk.AllLogLevel = 7, Rk.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Rk._LogCache = "", Rk._LogLimitOutputs = {}, Rk._Levels = [{}, {
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
    }], Rk.errorsCount = 0, Rk.Log = Rk._LogEnabled.bind(Rk, Rk.MessageLogLevel), Rk.Warn = Rk._LogEnabled.bind(Rk, Rk.WarningLogLevel), Rk.Error = Rk._LogEnabled.bind(Rk, Rk.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);