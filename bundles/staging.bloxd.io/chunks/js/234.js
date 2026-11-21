export const id = 234;
export const ids = [233, 234];
export const modules = {
  60873: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      RegisterShaderMaterial: () => pd.e,
      ShaderMaterial: () => pd.v,
      ShaderMaterialCreateFromSnippetAsync: () => pd.i,
      ShaderMaterialParse: () => pd.s,
      ShaderMaterialParseFromFileAsync: () => pd.m,
      ShaderMaterialParseFromSnippetAsync: () => pd.p
    });
    var pd = kd(40465);
    (0, pd.e)()
  },
  37966: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd
    });
    var pd = kd(37969);
    class Nd {
      static GetPlanes(dd) {
        const Jd = [];
        for (let kd = 0; kd < 6; kd++) Jd.push(new pd.c(0, 0, 0, 0));
        return Nd.GetPlanesToRef(dd, Jd), Jd
      }
      static GetNearPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] + kd[2], Jd.normal.y = kd[7] + kd[6], Jd.normal.z = kd[11] + kd[10], Jd.d = kd[15] + kd[14], Jd.normalize()
      }
      static GetFarPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] - kd[2], Jd.normal.y = kd[7] - kd[6], Jd.normal.z = kd[11] - kd[10], Jd.d = kd[15] - kd[14], Jd.normalize()
      }
      static GetLeftPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] + kd[0], Jd.normal.y = kd[7] + kd[4], Jd.normal.z = kd[11] + kd[8], Jd.d = kd[15] + kd[12], Jd.normalize()
      }
      static GetRightPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] - kd[0], Jd.normal.y = kd[7] - kd[4], Jd.normal.z = kd[11] - kd[8], Jd.d = kd[15] - kd[12], Jd.normalize()
      }
      static GetTopPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] - kd[1], Jd.normal.y = kd[7] - kd[5], Jd.normal.z = kd[11] - kd[9], Jd.d = kd[15] - kd[13], Jd.normalize()
      }
      static GetBottomPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] + kd[1], Jd.normal.y = kd[7] + kd[5], Jd.normal.z = kd[11] + kd[9], Jd.d = kd[15] + kd[13], Jd.normalize()
      }
      static GetPlanesToRef(dd, Jd) {
        Nd.GetNearPlaneToRef(dd, Jd[0]), Nd.GetFarPlaneToRef(dd, Jd[1]), Nd.GetLeftPlaneToRef(dd, Jd[2]), Nd.GetRightPlaneToRef(dd, Jd[3]), Nd.GetTopPlaneToRef(dd, Jd[4]), Nd.GetBottomPlaneToRef(dd, Jd[5])
      }
      static IsPointInFrustum(dd, Jd) {
        for (let kd = 0; kd < 6; kd++)
          if (Jd[kd].dotCoordinate(dd) < 0) return !1;
        return !0
      }
    }
  },
  37969: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd
    });
    var pd = kd(37251);
    class Nd {
      constructor(dd, Jd, kd, Nd) {
        this.normal = new pd.n(dd, Jd, kd), this.d = Nd
      }
      spd() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Nd(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let dd = this.normal.getHashCode();
        return dd = 397 * dd ^ this.d, dd
      }
      normalize() {
        const dd = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Jd = 0;
        return 0 !== dd && (Jd = 1 / dd), this.normal.x *= Jd, this.normal.y *= Jd, this.normal.z *= Jd, this.d *= Jd, this
      }
      transform(dd) {
        const Jd = Nd._TmpMatrix;
        dd.invertToRef(Jd);
        const kd = Jd.m,
          pd = this.normal.x,
          Wd = this.normal.y,
          Pd = this.normal.z,
          Zd = this.d,
          gd = pd * kd[0] + Wd * kd[1] + Pd * kd[2] + Zd * kd[3],
          Cd = pd * kd[4] + Wd * kd[5] + Pd * kd[6] + Zd * kd[7],
          Kd = pd * kd[8] + Wd * kd[9] + Pd * kd[10] + Zd * kd[11],
          od = pd * kd[12] + Wd * kd[13] + Pd * kd[14] + Zd * kd[15];
        return new Nd(gd, Cd, Kd, od)
      }
      dotCoordinate(dd) {
        return this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z + this.d
      }
      copyFromPoints(dd, Jd, kd) {
        const pd = Jd.x - dd.x,
          Nd = Jd.y - dd.y,
          Wd = Jd.z - dd.z,
          Pd = kd.x - dd.x,
          Zd = kd.y - dd.y,
          gd = kd.z - dd.z,
          Cd = Nd * gd - Wd * Zd,
          Kd = Wd * Pd - pd * gd,
          od = pd * Zd - Nd * Pd,
          ld = Math.sqrt(Cd * Cd + Kd * Kd + od * od);
        let Qd;
        return Qd = 0 !== ld ? 1 / ld : 0, this.normal.x = Cd * Qd, this.normal.y = Kd * Qd, this.normal.z = od * Qd, this.d = -(this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z), this
      }
      isFrontFacingTo(dd, Jd) {
        return pd.n.Dot(this.normal, dd) <= Jd
      }
      signedDistanceTo(dd) {
        return pd.n.Dot(dd, this.normal) + this.d
      }
      static FromArray(dd) {
        return new Nd(dd[0], dd[1], dd[2], dd[3])
      }
      static FromPoints(dd, Jd, kd) {
        const pd = new Nd(0, 0, 0, 0);
        return pd.copyFromPoints(dd, Jd, kd), pd
      }
      static FromPositionAndNormal(dd, Jd) {
        const kd = new Nd(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(dd, Jd, kd)
      }
      static FromPositionAndNormalToRef(dd, Jd, kd) {
        return kd.normal.Fs(Jd), kd.normal.normalize(), kd.d = -dd.dot(kd.normal), kd
      }
      static SignedDistanceToPlaneFromPositionAndNormal(dd, Jd, kd) {
        const Nd = -(Jd.x * dd.x + Jd.y * dd.y + Jd.z * dd.z);
        return pd.n.Dot(kd, Jd) + Nd
      }
    }
    Nd._TmpMatrix = pd.b.Identity()
  },
  38806: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Wd
    });
    var pd = kd(38812);
    const Nd = (dd, Jd, kd) => dd ? dd.getClassName && "Mesh" === dd.getClassName() ? null : !dd.getClassName || "SubMesh" !== dd.getClassName() && "PhysicsBody" !== dd.getClassName() ? dd.clone ? dd.clone() : Array.isArray(dd) ? dd.slice() : kd && "object" === typeof dd ? {
      ...dd
    } : null : dd.clone(Jd) : null;
    class Wd {
      static DeepCopy(dd, Jd, kd, Wd) {
        let Pd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Zd = function(dd) {
          const Jd = [];
          do {
            const kd = Object.getOwnPropertyNames(dd);
            for (const dd of kd) - 1 === Jd.indexOf(dd) && Jd.push(dd)
          } while (dd = Object.getPrototypeOf(dd));
          return Jd
        }(dd);
        for (const Cd of Zd) {
          if ("_" === Cd[0] && (!Wd || -1 === Wd.indexOf(Cd))) continue;
          if (Cd.endsWith("Observable")) continue;
          if (kd && -1 !== kd.indexOf(Cd)) continue;
          const Zd = dd[Cd],
            Kd = typeof Zd;
          if ("function" !== Kd) try {
            if ("object" === Kd)
              if (Zd instanceof Uint8Array) Jd[Cd] = Uint8Array.from(Zd);
              else if (Zd instanceof Array) {
              if (Jd[Cd] = [], Zd.length > 0)
                if ("object" == typeof Zd[0])
                  for (let dd = 0; dd < Zd.length; dd++) {
                    const kd = Nd(Zd[dd], Jd, Pd); - 1 === Jd[Cd].indexOf(kd) && Jd[Cd].push(kd)
                  } else Jd[Cd] = Zd.slice(0)
            } else Jd[Cd] = Nd(Zd, Jd, Pd);
            else Jd[Cd] = Zd
          } catch (gd) {
            pd.c.Warn(gd.message)
          }
        }
      }
    }
  },
  38105: (dd, Jd, kd) => {
    function pd() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (dd => {
        const Jd = 16 * Math.random() | 0;
        return ("x" === dd ? Jd : 3 & Jd | 8).toString(16)
      }))
    }
    kd.d(Jd, {
      c: () => pd
    })
  },
  38812: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd
    });
    class pd {
      static _CheckLimit(dd, Jd) {
        let kd = pd._LogLimitOutputs[dd];
        return kd ? kd.current++ : (kd = {
          limit: Jd,
          current: 1
        }, pd._LogLimitOutputs[dd] = kd), kd.current <= kd.limit
      }
      static _GenerateLimitMessage(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const kd = pd._LogLimitOutputs[dd];
        if (!kd || !pd.MessageLimitReached) return;
        const Nd = this._Levels[Jd];
        kd.current === kd.limit && pd[Nd.name](pd.MessageLimitReached.replace(/%LIMIT%/g, "" + kd.limit).replace(/%TYPE%/g, Nd.name ?? ""))
      }
      static _AddLogEntry(dd) {
        pd._LogCache = dd + pd._LogCache, pd.OnNewCacheEntry && pd.OnNewCacheEntry(dd)
      }
      static _FormatMessage(dd) {
        const Jd = dd => dd < 10 ? "0" + dd : "" + dd,
          kd = new Date;
        return "[" + Jd(kd.getHours()) + ":" + Jd(kd.getMinutes()) + ":" + Jd(kd.getSeconds()) + "]: " + dd
      }
      static _LogDisabled(dd, Jd) {}
      static _LogEnabled() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Jd = arguments.length > 1 ? arguments[1] : void 0,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        const Nd = Array.isArray(Jd) ? Jd[0] : Jd;
        if (void 0 !== kd && !pd._CheckLimit(Nd, kd)) return;
        const Wd = pd._FormatMessage(Nd),
          Pd = this._Levels[dd],
          Zd = Array.isArray(Jd) ? Jd.slice(1) : [];
        Pd.logFunc && Pd.logFunc("BJS - " + Wd, ...Zd);
        const gd = `<div style='color:${Pd.color}'>${Wd}</div><br>`;
        pd._AddLogEntry(gd), pd._GenerateLimitMessage(Nd, dd)
      }
      static get LogCache() {
        return pd._LogCache
      }
      static ClearLogCache() {
        pd._LogCache = "", pd._LogLimitOutputs = {}, pd.errorsCount = 0
      }
      static set LogLevels(dd) {
        pd.Log = pd._LogDisabled, pd.Warn = pd._LogDisabled, pd.Error = pd._LogDisabled;
        const Jd = [pd.MessageLogLevel, pd.WarningLogLevel, pd.ErrorLogLevel];
        for (const kd of Jd)
          if ((dd & kd) === kd) {
            const dd = this._Levels[kd];
            pd[dd.name] = pd._LogEnabled.bind(pd, kd)
          }
      }
    }
    pd.NoneLogLevel = 0, pd.MessageLogLevel = 1, pd.WarningLogLevel = 2, pd.ErrorLogLevel = 4, pd.AllLogLevel = 7, pd.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", pd._LogCache = "", pd._LogLimitOutputs = {}, pd._Levels = [{}, {
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
    }], pd.errorsCount = 0, pd.Log = pd._LogEnabled.bind(pd, pd.MessageLogLevel), pd.Warn = pd._LogEnabled.bind(pd, pd.WarningLogLevel), pd.Error = pd._LogEnabled.bind(pd, pd.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);