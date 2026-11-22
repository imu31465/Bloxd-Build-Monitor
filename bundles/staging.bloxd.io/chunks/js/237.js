export const id = 237;
export const ids = [236, 237];
export const modules = {
  60665: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      RegisterShaderMaterial: () => Dk.b,
      ShaderMaterial: () => Dk.o,
      ShaderMaterialCreateFromSnippetAsync: () => Dk.d,
      ShaderMaterialParse: () => Dk.l,
      ShaderMaterialParseFromFileAsync: () => Dk.h,
      ShaderMaterialParseFromSnippetAsync: () => Dk.j
    });
    var Dk = ik(40049);
    (0, Dk.b)()
  },
  37365: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk
    });
    var Dk = ik(37372);
    class fk {
      static GetPlanes(kk) {
        const ek = [];
        for (let ik = 0; ik < 6; ik++) ek.push(new Dk.c(0, 0, 0, 0));
        return fk.GetPlanesToRef(kk, ek), ek
      }
      static GetNearPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] + ik[2], ek.normal.y = ik[7] + ik[6], ek.normal.z = ik[11] + ik[10], ek.d = ik[15] + ik[14], ek.normalize()
      }
      static GetFarPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] - ik[2], ek.normal.y = ik[7] - ik[6], ek.normal.z = ik[11] - ik[10], ek.d = ik[15] - ik[14], ek.normalize()
      }
      static GetLeftPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] + ik[0], ek.normal.y = ik[7] + ik[4], ek.normal.z = ik[11] + ik[8], ek.d = ik[15] + ik[12], ek.normalize()
      }
      static GetRightPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] - ik[0], ek.normal.y = ik[7] - ik[4], ek.normal.z = ik[11] - ik[8], ek.d = ik[15] - ik[12], ek.normalize()
      }
      static GetTopPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] - ik[1], ek.normal.y = ik[7] - ik[5], ek.normal.z = ik[11] - ik[9], ek.d = ik[15] - ik[13], ek.normalize()
      }
      static GetBottomPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] + ik[1], ek.normal.y = ik[7] + ik[5], ek.normal.z = ik[11] + ik[9], ek.d = ik[15] + ik[13], ek.normalize()
      }
      static GetPlanesToRef(kk, ek) {
        fk.GetNearPlaneToRef(kk, ek[0]), fk.GetFarPlaneToRef(kk, ek[1]), fk.GetLeftPlaneToRef(kk, ek[2]), fk.GetRightPlaneToRef(kk, ek[3]), fk.GetTopPlaneToRef(kk, ek[4]), fk.GetBottomPlaneToRef(kk, ek[5])
      }
      static IsPointInFrustum(kk, ek) {
        for (let ik = 0; ik < 6; ik++)
          if (ek[ik].dotCoordinate(kk) < 0) return !1;
        return !0
      }
    }
  },
  37372: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk
    });
    var Dk = ik(36698);
    class fk {
      constructor(kk, ek, ik, fk) {
        this.normal = new Dk.o(kk, ek, ik), this.d = fk
      }
      Tik() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new fk(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let ek = 0;
        return 0 !== kk && (ek = 1 / kk), this.normal.x *= ek, this.normal.y *= ek, this.normal.z *= ek, this.d *= ek, this
      }
      transform(kk) {
        const ek = fk._TmpMatrix;
        kk.invertToRef(ek);
        const ik = ek.m,
          Dk = this.normal.x,
          Sk = this.normal.y,
          bk = this.normal.z,
          rk = this.d,
          Pk = Dk * ik[0] + Sk * ik[1] + bk * ik[2] + rk * ik[3],
          mk = Dk * ik[4] + Sk * ik[5] + bk * ik[6] + rk * ik[7],
          Mk = Dk * ik[8] + Sk * ik[9] + bk * ik[10] + rk * ik[11],
          Kk = Dk * ik[12] + Sk * ik[13] + bk * ik[14] + rk * ik[15];
        return new fk(Pk, mk, Mk, Kk)
      }
      dotCoordinate(kk) {
        return this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z + this.d
      }
      copyFromPoints(kk, ek, ik) {
        const Dk = ek.x - kk.x,
          fk = ek.y - kk.y,
          Sk = ek.z - kk.z,
          bk = ik.x - kk.x,
          rk = ik.y - kk.y,
          Pk = ik.z - kk.z,
          mk = fk * Pk - Sk * rk,
          Mk = Sk * bk - Dk * Pk,
          Kk = Dk * rk - fk * bk,
          xk = Math.sqrt(mk * mk + Mk * Mk + Kk * Kk);
        let nk;
        return nk = 0 !== xk ? 1 / xk : 0, this.normal.x = mk * nk, this.normal.y = Mk * nk, this.normal.z = Kk * nk, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
      }
      isFrontFacingTo(kk, ek) {
        return Dk.o.Dot(this.normal, kk) <= ek
      }
      signedDistanceTo(kk) {
        return Dk.o.Dot(kk, this.normal) + this.d
      }
      static FromArray(kk) {
        return new fk(kk[0], kk[1], kk[2], kk[3])
      }
      static FromPoints(kk, ek, ik) {
        const Dk = new fk(0, 0, 0, 0);
        return Dk.copyFromPoints(kk, ek, ik), Dk
      }
      static FromPositionAndNormal(kk, ek) {
        const ik = new fk(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(kk, ek, ik)
      }
      static FromPositionAndNormalToRef(kk, ek, ik) {
        return ik.normal.Fs(ek), ik.normal.normalize(), ik.d = -kk.dot(ik.normal), ik
      }
      static SignedDistanceToPlaneFromPositionAndNormal(kk, ek, ik) {
        const fk = -(ek.x * kk.x + ek.y * kk.y + ek.z * kk.z);
        return Dk.o.Dot(ik, ek) + fk
      }
    }
    fk._TmpMatrix = Dk.b.Identity()
  },
  38265: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk
    });
    var Dk = ik(38272);
    const fk = (kk, ek, ik) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : ik && "object" === typeof kk ? {
      ...kk
    } : null : kk.clone(ek) : null;
    class Sk {
      static DeepCopy(kk, ek, ik, Sk) {
        let bk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const rk = function(kk) {
          const ek = [];
          do {
            const ik = Object.getOwnPropertyNames(kk);
            for (const kk of ik) - 1 === ek.indexOf(kk) && ek.push(kk)
          } while (kk = Object.getPrototypeOf(kk));
          return ek
        }(kk);
        for (const mk of rk) {
          if ("_" === mk[0] && (!Sk || -1 === Sk.indexOf(mk))) continue;
          if (mk.endsWith("Observable")) continue;
          if (ik && -1 !== ik.indexOf(mk)) continue;
          const rk = kk[mk],
            Mk = typeof rk;
          if ("function" !== Mk) try {
            if ("object" === Mk)
              if (rk instanceof Uint8Array) ek[mk] = Uint8Array.from(rk);
              else if (rk instanceof Array) {
              if (ek[mk] = [], rk.length > 0)
                if ("object" == typeof rk[0])
                  for (let kk = 0; kk < rk.length; kk++) {
                    const ik = fk(rk[kk], ek, bk); - 1 === ek[mk].indexOf(ik) && ek[mk].push(ik)
                  } else ek[mk] = rk.slice(0)
            } else ek[mk] = fk(rk, ek, bk);
            else ek[mk] = rk
          } catch (Pk) {
            Dk.b.Warn(Pk.message)
          }
        }
      }
    }
  },
  37497: (kk, ek, ik) => {
    function Dk() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
        const ek = 16 * Math.random() | 0;
        return ("x" === kk ? ek : 3 & ek | 8).toString(16)
      }))
    }
    ik.d(ek, {
      b: () => Dk
    })
  },
  38272: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk
    });
    class Dk {
      static _CheckLimit(kk, ek) {
        let ik = Dk._LogLimitOutputs[kk];
        return ik ? ik.current++ : (ik = {
          limit: ek,
          current: 1
        }, Dk._LogLimitOutputs[kk] = ik), ik.current <= ik.limit
      }
      static _GenerateLimitMessage(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ik = Dk._LogLimitOutputs[kk];
        if (!ik || !Dk.MessageLimitReached) return;
        const fk = this._Levels[ek];
        ik.current === ik.limit && Dk[fk.name](Dk.MessageLimitReached.replace(/%LIMIT%/g, "" + ik.limit).replace(/%TYPE%/g, fk.name ?? ""))
      }
      static _AddLogEntry(kk) {
        Dk._LogCache = kk + Dk._LogCache, Dk.OnNewCacheEntry && Dk.OnNewCacheEntry(kk)
      }
      static _FormatMessage(kk) {
        const ek = kk => kk < 10 ? "0" + kk : "" + kk,
          ik = new Date;
        return "[" + ek(ik.getHours()) + ":" + ek(ik.getMinutes()) + ":" + ek(ik.getSeconds()) + "]: " + kk
      }
      static _LogDisabled(kk, ek) {}
      static _LogEnabled() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ek = arguments.length > 1 ? arguments[1] : void 0,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        const fk = Array.isArray(ek) ? ek[0] : ek;
        if (void 0 !== ik && !Dk._CheckLimit(fk, ik)) return;
        const Sk = Dk._FormatMessage(fk),
          bk = this._Levels[kk],
          rk = Array.isArray(ek) ? ek.slice(1) : [];
        bk.logFunc && bk.logFunc("BJS - " + Sk, ...rk);
        const Pk = `<div style='color:${bk.color}'>${Sk}</div><br>`;
        Dk._AddLogEntry(Pk), Dk._GenerateLimitMessage(fk, kk)
      }
      static get LogCache() {
        return Dk._LogCache
      }
      static ClearLogCache() {
        Dk._LogCache = "", Dk._LogLimitOutputs = {}, Dk.errorsCount = 0
      }
      static set LogLevels(kk) {
        Dk.Log = Dk._LogDisabled, Dk.Warn = Dk._LogDisabled, Dk.Error = Dk._LogDisabled;
        const ek = [Dk.MessageLogLevel, Dk.WarningLogLevel, Dk.ErrorLogLevel];
        for (const ik of ek)
          if ((kk & ik) === ik) {
            const kk = this._Levels[ik];
            Dk[kk.name] = Dk._LogEnabled.bind(Dk, ik)
          }
      }
    }
    Dk.NoneLogLevel = 0, Dk.MessageLogLevel = 1, Dk.WarningLogLevel = 2, Dk.ErrorLogLevel = 4, Dk.AllLogLevel = 7, Dk.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Dk._LogCache = "", Dk._LogLimitOutputs = {}, Dk._Levels = [{}, {
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
    }], Dk.errorsCount = 0, Dk.Log = Dk._LogEnabled.bind(Dk, Dk.MessageLogLevel), Dk.Warn = Dk._LogEnabled.bind(Dk, Dk.WarningLogLevel), Dk.Error = Dk._LogEnabled.bind(Dk, Dk.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);