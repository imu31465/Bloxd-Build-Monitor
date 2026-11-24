export const id = 238;
export const ids = [238];
export const modules = {
  37780: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk
    });
    var Xk = Ik(37785);
    class Tk {
      static GetPlanes(kk) {
        const Fk = [];
        for (let Ik = 0; Ik < 6; Ik++) Fk.push(new Xk.e(0, 0, 0, 0));
        return Tk.GetPlanesToRef(kk, Fk), Fk
      }
      static GetNearPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] + Ik[2], Fk.normal.y = Ik[7] + Ik[6], Fk.normal.z = Ik[11] + Ik[10], Fk.d = Ik[15] + Ik[14], Fk.normalize()
      }
      static GetFarPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] - Ik[2], Fk.normal.y = Ik[7] - Ik[6], Fk.normal.z = Ik[11] - Ik[10], Fk.d = Ik[15] - Ik[14], Fk.normalize()
      }
      static GetLeftPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] + Ik[0], Fk.normal.y = Ik[7] + Ik[4], Fk.normal.z = Ik[11] + Ik[8], Fk.d = Ik[15] + Ik[12], Fk.normalize()
      }
      static GetRightPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] - Ik[0], Fk.normal.y = Ik[7] - Ik[4], Fk.normal.z = Ik[11] - Ik[8], Fk.d = Ik[15] - Ik[12], Fk.normalize()
      }
      static GetTopPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] - Ik[1], Fk.normal.y = Ik[7] - Ik[5], Fk.normal.z = Ik[11] - Ik[9], Fk.d = Ik[15] - Ik[13], Fk.normalize()
      }
      static GetBottomPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] + Ik[1], Fk.normal.y = Ik[7] + Ik[5], Fk.normal.z = Ik[11] + Ik[9], Fk.d = Ik[15] + Ik[13], Fk.normalize()
      }
      static GetPlanesToRef(kk, Fk) {
        Tk.GetNearPlaneToRef(kk, Fk[0]), Tk.GetFarPlaneToRef(kk, Fk[1]), Tk.GetLeftPlaneToRef(kk, Fk[2]), Tk.GetRightPlaneToRef(kk, Fk[3]), Tk.GetTopPlaneToRef(kk, Fk[4]), Tk.GetBottomPlaneToRef(kk, Fk[5])
      }
      static IsPointInFrustum(kk, Fk) {
        for (let Ik = 0; Ik < 6; Ik++)
          if (Fk[Ik].dotCoordinate(kk) < 0) return !1;
        return !0
      }
    }
  },
  37785: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk
    });
    var Xk = Ik(37153);
    class Tk {
      constructor(kk, Fk, Ik, Tk) {
        this.normal = new Xk.t(kk, Fk, Ik), this.d = Tk
      }
      iXk() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Tk(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        const Fk = Tk._TmpMatrix;
        kk.invertToRef(Fk);
        const Ik = Fk.m,
          Xk = this.normal.x,
          ik = this.normal.y,
          yk = this.normal.z,
          lk = this.d,
          ak = Xk * Ik[0] + ik * Ik[1] + yk * Ik[2] + lk * Ik[3],
          qk = Xk * Ik[4] + ik * Ik[5] + yk * Ik[6] + lk * Ik[7],
          Lk = Xk * Ik[8] + ik * Ik[9] + yk * Ik[10] + lk * Ik[11],
          tk = Xk * Ik[12] + ik * Ik[13] + yk * Ik[14] + lk * Ik[15];
        return new Tk(ak, qk, Lk, tk)
      }
      dotCoordinate(kk) {
        return this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z + this.d
      }
      copyFromPoints(kk, Fk, Ik) {
        const Xk = Fk.x - kk.x,
          Tk = Fk.y - kk.y,
          ik = Fk.z - kk.z,
          yk = Ik.x - kk.x,
          lk = Ik.y - kk.y,
          ak = Ik.z - kk.z,
          qk = Tk * ak - ik * lk,
          Lk = ik * yk - Xk * ak,
          tk = Xk * lk - Tk * yk,
          Zk = Math.sqrt(qk * qk + Lk * Lk + tk * tk);
        let jk;
        return jk = 0 !== Zk ? 1 / Zk : 0, this.normal.x = qk * jk, this.normal.y = Lk * jk, this.normal.z = tk * jk, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
      }
      isFrontFacingTo(kk, Fk) {
        return Xk.t.Dot(this.normal, kk) <= Fk
      }
      signedDistanceTo(kk) {
        return Xk.t.Dot(kk, this.normal) + this.d
      }
      static FromArray(kk) {
        return new Tk(kk[0], kk[1], kk[2], kk[3])
      }
      static FromPoints(kk, Fk, Ik) {
        const Xk = new Tk(0, 0, 0, 0);
        return Xk.copyFromPoints(kk, Fk, Ik), Xk
      }
      static FromPositionAndNormal(kk, Fk) {
        const Ik = new Tk(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(kk, Fk, Ik)
      }
      static FromPositionAndNormalToRef(kk, Fk, Ik) {
        return Ik.normal.kS(Fk), Ik.normal.normalize(), Ik.d = -kk.dot(Ik.normal), Ik
      }
      static SignedDistanceToPlaneFromPositionAndNormal(kk, Fk, Ik) {
        const Tk = -(Fk.x * kk.x + Fk.y * kk.y + Fk.z * kk.z);
        return Xk.t.Dot(Ik, Fk) + Tk
      }
    }
    Tk._TmpMatrix = Xk.c.Identity()
  },
  38666: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik
    });
    var Xk = Ik(38674);
    const Tk = (kk, Fk, Ik) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : Ik && "object" === typeof kk ? {
      ...kk
    } : null : kk.clone(Fk) : null;
    class ik {
      static DeepCopy(kk, Fk, Ik, ik) {
        let yk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const lk = function(kk) {
          const Fk = [];
          do {
            const Ik = Object.getOwnPropertyNames(kk);
            for (const kk of Ik) - 1 === Fk.indexOf(kk) && Fk.push(kk)
          } while (kk = Object.getPrototypeOf(kk));
          return Fk
        }(kk);
        for (const qk of lk) {
          if ("_" === qk[0] && (!ik || -1 === ik.indexOf(qk))) continue;
          if (qk.endsWith("Observable")) continue;
          if (Ik && -1 !== Ik.indexOf(qk)) continue;
          const lk = kk[qk],
            Lk = typeof lk;
          if ("function" !== Lk) try {
            if ("object" === Lk)
              if (lk instanceof Uint8Array) Fk[qk] = Uint8Array.from(lk);
              else if (lk instanceof Array) {
              if (Fk[qk] = [], lk.length > 0)
                if ("object" == typeof lk[0])
                  for (let kk = 0; kk < lk.length; kk++) {
                    const Ik = Tk(lk[kk], Fk, yk); - 1 === Fk[qk].indexOf(Ik) && Fk[qk].push(Ik)
                  } else Fk[qk] = lk.slice(0)
            } else Fk[qk] = Tk(lk, Fk, yk);
            else Fk[qk] = lk
          } catch (ak) {
            Xk.e.Warn(ak.message)
          }
        }
      }
    }
  },
  37902: (kk, Fk, Ik) => {
    function Xk() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
        const Fk = 16 * Math.random() | 0;
        return ("x" === kk ? Fk : 3 & Fk | 8).toString(16)
      }))
    }
    Ik.d(Fk, {
      e: () => Xk
    })
  },
  38674: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk
    });
    class Xk {
      static _CheckLimit(kk, Fk) {
        let Ik = Xk._LogLimitOutputs[kk];
        return Ik ? Ik.current++ : (Ik = {
          limit: Fk,
          current: 1
        }, Xk._LogLimitOutputs[kk] = Ik), Ik.current <= Ik.limit
      }
      static _GenerateLimitMessage(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Ik = Xk._LogLimitOutputs[kk];
        if (!Ik || !Xk.MessageLimitReached) return;
        const Tk = this._Levels[Fk];
        Ik.current === Ik.limit && Xk[Tk.name](Xk.MessageLimitReached.replace(/%LIMIT%/g, "" + Ik.limit).replace(/%TYPE%/g, Tk.name ?? ""))
      }
      static _AddLogEntry(kk) {
        Xk._LogCache = kk + Xk._LogCache, Xk.OnNewCacheEntry && Xk.OnNewCacheEntry(kk)
      }
      static _FormatMessage(kk) {
        const Fk = kk => kk < 10 ? "0" + kk : "" + kk,
          Ik = new Date;
        return "[" + Fk(Ik.getHours()) + ":" + Fk(Ik.getMinutes()) + ":" + Fk(Ik.getSeconds()) + "]: " + kk
      }
      static _LogDisabled(kk, Fk) {}
      static _LogEnabled() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        const Tk = Array.isArray(Fk) ? Fk[0] : Fk;
        if (void 0 !== Ik && !Xk._CheckLimit(Tk, Ik)) return;
        const ik = Xk._FormatMessage(Tk),
          yk = this._Levels[kk],
          lk = Array.isArray(Fk) ? Fk.slice(1) : [];
        yk.logFunc && yk.logFunc("BJS - " + ik, ...lk);
        const ak = `<div style='color:${yk.color}'>${ik}</div><br>`;
        Xk._AddLogEntry(ak), Xk._GenerateLimitMessage(Tk, kk)
      }
      static get LogCache() {
        return Xk._LogCache
      }
      static ClearLogCache() {
        Xk._LogCache = "", Xk._LogLimitOutputs = {}, Xk.errorsCount = 0
      }
      static set LogLevels(kk) {
        Xk.Log = Xk._LogDisabled, Xk.Warn = Xk._LogDisabled, Xk.Error = Xk._LogDisabled;
        const Fk = [Xk.MessageLogLevel, Xk.WarningLogLevel, Xk.ErrorLogLevel];
        for (const Ik of Fk)
          if ((kk & Ik) === Ik) {
            const kk = this._Levels[Ik];
            Xk[kk.name] = Xk._LogEnabled.bind(Xk, Ik)
          }
      }
    }
    Xk.NoneLogLevel = 0, Xk.MessageLogLevel = 1, Xk.WarningLogLevel = 2, Xk.ErrorLogLevel = 4, Xk.AllLogLevel = 7, Xk.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Xk._LogCache = "", Xk._LogLimitOutputs = {}, Xk._Levels = [{}, {
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
    }], Xk.errorsCount = 0, Xk.Log = Xk._LogEnabled.bind(Xk, Xk.MessageLogLevel), Xk.Warn = Xk._LogEnabled.bind(Xk, Xk.WarningLogLevel), Xk.Error = Xk._LogEnabled.bind(Xk, Xk.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);