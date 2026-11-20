export const id = 234;
export const ids = [233, 234];
export const modules = {
  60574: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      RegisterShaderMaterial: () => hv.d,
      ShaderMaterial: () => hv.o,
      ShaderMaterialCreateFromSnippetAsync: () => hv.f,
      ShaderMaterialParse: () => hv.m,
      ShaderMaterialParseFromFileAsync: () => hv.i,
      ShaderMaterialParseFromSnippetAsync: () => hv.k
    });
    var hv = Pv(39790);
    (0, hv.d)()
  },
  37290: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv
    });
    var hv = Pv(37293);
    class Sv {
      static GetPlanes(vv) {
        const zv = [];
        for (let Pv = 0; Pv < 6; Pv++) zv.push(new hv.b(0, 0, 0, 0));
        return Sv.GetPlanesToRef(vv, zv), zv
      }
      static GetNearPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] + Pv[2], zv.normal.y = Pv[7] + Pv[6], zv.normal.z = Pv[11] + Pv[10], zv.d = Pv[15] + Pv[14], zv.normalize()
      }
      static GetFarPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] - Pv[2], zv.normal.y = Pv[7] - Pv[6], zv.normal.z = Pv[11] - Pv[10], zv.d = Pv[15] - Pv[14], zv.normalize()
      }
      static GetLeftPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] + Pv[0], zv.normal.y = Pv[7] + Pv[4], zv.normal.z = Pv[11] + Pv[8], zv.d = Pv[15] + Pv[12], zv.normalize()
      }
      static GetRightPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] - Pv[0], zv.normal.y = Pv[7] - Pv[4], zv.normal.z = Pv[11] - Pv[8], zv.d = Pv[15] - Pv[12], zv.normalize()
      }
      static GetTopPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] - Pv[1], zv.normal.y = Pv[7] - Pv[5], zv.normal.z = Pv[11] - Pv[9], zv.d = Pv[15] - Pv[13], zv.normalize()
      }
      static GetBottomPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] + Pv[1], zv.normal.y = Pv[7] + Pv[5], zv.normal.z = Pv[11] + Pv[9], zv.d = Pv[15] + Pv[13], zv.normalize()
      }
      static GetPlanesToRef(vv, zv) {
        Sv.GetNearPlaneToRef(vv, zv[0]), Sv.GetFarPlaneToRef(vv, zv[1]), Sv.GetLeftPlaneToRef(vv, zv[2]), Sv.GetRightPlaneToRef(vv, zv[3]), Sv.GetTopPlaneToRef(vv, zv[4]), Sv.GetBottomPlaneToRef(vv, zv[5])
      }
      static IsPointInFrustum(vv, zv) {
        for (let Pv = 0; Pv < 6; Pv++)
          if (zv[Pv].dotCoordinate(vv) < 0) return !1;
        return !0
      }
    }
  },
  37293: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv
    });
    var hv = Pv(36594);
    class Sv {
      constructor(vv, zv, Pv, Sv) {
        this.normal = new hv.l(vv, zv, Pv), this.d = Sv
      }
      pPv() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Sv(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let vv = this.normal.getHashCode();
        return vv = 397 * vv ^ this.d, vv
      }
      normalize() {
        const vv = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let zv = 0;
        return 0 !== vv && (zv = 1 / vv), this.normal.x *= zv, this.normal.y *= zv, this.normal.z *= zv, this.d *= zv, this
      }
      transform(vv) {
        const zv = Sv._TmpMatrix;
        vv.invertToRef(zv);
        const Pv = zv.m,
          hv = this.normal.x,
          ev = this.normal.y,
          gv = this.normal.z,
          pv = this.d,
          dv = hv * Pv[0] + ev * Pv[1] + gv * Pv[2] + pv * Pv[3],
          Nv = hv * Pv[4] + ev * Pv[5] + gv * Pv[6] + pv * Pv[7],
          lv = hv * Pv[8] + ev * Pv[9] + gv * Pv[10] + pv * Pv[11],
          Tv = hv * Pv[12] + ev * Pv[13] + gv * Pv[14] + pv * Pv[15];
        return new Sv(dv, Nv, lv, Tv)
      }
      dotCoordinate(vv) {
        return this.normal.x * vv.x + this.normal.y * vv.y + this.normal.z * vv.z + this.d
      }
      copyFromPoints(vv, zv, Pv) {
        const hv = zv.x - vv.x,
          Sv = zv.y - vv.y,
          ev = zv.z - vv.z,
          gv = Pv.x - vv.x,
          pv = Pv.y - vv.y,
          dv = Pv.z - vv.z,
          Nv = Sv * dv - ev * pv,
          lv = ev * gv - hv * dv,
          Tv = hv * pv - Sv * gv,
          Wv = Math.sqrt(Nv * Nv + lv * lv + Tv * Tv);
        let wv;
        return wv = 0 !== Wv ? 1 / Wv : 0, this.normal.x = Nv * wv, this.normal.y = lv * wv, this.normal.z = Tv * wv, this.d = -(this.normal.x * vv.x + this.normal.y * vv.y + this.normal.z * vv.z), this
      }
      isFrontFacingTo(vv, zv) {
        return hv.l.Dot(this.normal, vv) <= zv
      }
      signedDistanceTo(vv) {
        return hv.l.Dot(vv, this.normal) + this.d
      }
      static FromArray(vv) {
        return new Sv(vv[0], vv[1], vv[2], vv[3])
      }
      static FromPoints(vv, zv, Pv) {
        const hv = new Sv(0, 0, 0, 0);
        return hv.copyFromPoints(vv, zv, Pv), hv
      }
      static FromPositionAndNormal(vv, zv) {
        const Pv = new Sv(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(vv, zv, Pv)
      }
      static FromPositionAndNormalToRef(vv, zv, Pv) {
        return Pv.normal.Vzv(zv), Pv.normal.normalize(), Pv.d = -vv.dot(Pv.normal), Pv
      }
      static SignedDistanceToPlaneFromPositionAndNormal(vv, zv, Pv) {
        const Sv = -(zv.x * vv.x + zv.y * vv.y + zv.z * vv.z);
        return hv.l.Dot(Pv, zv) + Sv
      }
    }
    Sv._TmpMatrix = hv.c.Identity()
  },
  38207: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev
    });
    var hv = Pv(38209);
    const Sv = (vv, zv, Pv) => vv ? vv.getClassName && "Mesh" === vv.getClassName() ? null : !vv.getClassName || "SubMesh" !== vv.getClassName() && "PhysicsBody" !== vv.getClassName() ? vv.clone ? vv.clone() : Array.isArray(vv) ? vv.slice() : Pv && "object" === typeof vv ? {
      ...vv
    } : null : vv.clone(zv) : null;
    class ev {
      static DeepCopy(vv, zv, Pv, ev) {
        let gv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const pv = function(vv) {
          const zv = [];
          do {
            const Pv = Object.getOwnPropertyNames(vv);
            for (const vv of Pv) - 1 === zv.indexOf(vv) && zv.push(vv)
          } while (vv = Object.getPrototypeOf(vv));
          return zv
        }(vv);
        for (const Nv of pv) {
          if ("_" === Nv[0] && (!ev || -1 === ev.indexOf(Nv))) continue;
          if (Nv.endsWith("Observable")) continue;
          if (Pv && -1 !== Pv.indexOf(Nv)) continue;
          const pv = vv[Nv],
            lv = typeof pv;
          if ("function" !== lv) try {
            if ("object" === lv)
              if (pv instanceof Uint8Array) zv[Nv] = Uint8Array.from(pv);
              else if (pv instanceof Array) {
              if (zv[Nv] = [], pv.length > 0)
                if ("object" == typeof pv[0])
                  for (let vv = 0; vv < pv.length; vv++) {
                    const Pv = Sv(pv[vv], zv, gv); - 1 === zv[Nv].indexOf(Pv) && zv[Nv].push(Pv)
                  } else zv[Nv] = pv.slice(0)
            } else zv[Nv] = Sv(pv, zv, gv);
            else zv[Nv] = pv
          } catch (dv) {
            hv.d.Warn(dv.message)
          }
        }
      }
    }
  },
  37431: (vv, zv, Pv) => {
    function hv() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (vv => {
        const zv = 16 * Math.random() | 0;
        return ("x" === vv ? zv : 3 & zv | 8).toString(16)
      }))
    }
    Pv.d(zv, {
      b: () => hv
    })
  },
  38209: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    class hv {
      static _CheckLimit(vv, zv) {
        let Pv = hv._LogLimitOutputs[vv];
        return Pv ? Pv.current++ : (Pv = {
          limit: zv,
          current: 1
        }, hv._LogLimitOutputs[vv] = Pv), Pv.current <= Pv.limit
      }
      static _GenerateLimitMessage(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Pv = hv._LogLimitOutputs[vv];
        if (!Pv || !hv.MessageLimitReached) return;
        const Sv = this._Levels[zv];
        Pv.current === Pv.limit && hv[Sv.name](hv.MessageLimitReached.replace(/%LIMIT%/g, "" + Pv.limit).replace(/%TYPE%/g, Sv.name ?? ""))
      }
      static _AddLogEntry(vv) {
        hv._LogCache = vv + hv._LogCache, hv.OnNewCacheEntry && hv.OnNewCacheEntry(vv)
      }
      static _FormatMessage(vv) {
        const zv = vv => vv < 10 ? "0" + vv : "" + vv,
          Pv = new Date;
        return "[" + zv(Pv.getHours()) + ":" + zv(Pv.getMinutes()) + ":" + zv(Pv.getSeconds()) + "]: " + vv
      }
      static _LogDisabled(vv, zv) {}
      static _LogEnabled() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zv = arguments.length > 1 ? arguments[1] : void 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        const Sv = Array.isArray(zv) ? zv[0] : zv;
        if (void 0 !== Pv && !hv._CheckLimit(Sv, Pv)) return;
        const ev = hv._FormatMessage(Sv),
          gv = this._Levels[vv],
          pv = Array.isArray(zv) ? zv.slice(1) : [];
        gv.logFunc && gv.logFunc("BJS - " + ev, ...pv);
        const dv = `<div style='color:${gv.color}'>${ev}</div><br>`;
        hv._AddLogEntry(dv), hv._GenerateLimitMessage(Sv, vv)
      }
      static get LogCache() {
        return hv._LogCache
      }
      static ClearLogCache() {
        hv._LogCache = "", hv._LogLimitOutputs = {}, hv.errorsCount = 0
      }
      static set LogLevels(vv) {
        hv.Log = hv._LogDisabled, hv.Warn = hv._LogDisabled, hv.Error = hv._LogDisabled;
        const zv = [hv.MessageLogLevel, hv.WarningLogLevel, hv.ErrorLogLevel];
        for (const Pv of zv)
          if ((vv & Pv) === Pv) {
            const vv = this._Levels[Pv];
            hv[vv.name] = hv._LogEnabled.bind(hv, Pv)
          }
      }
    }
    hv.NoneLogLevel = 0, hv.MessageLogLevel = 1, hv.WarningLogLevel = 2, hv.ErrorLogLevel = 4, hv.AllLogLevel = 7, hv.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", hv._LogCache = "", hv._LogLimitOutputs = {}, hv._Levels = [{}, {
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
    }], hv.errorsCount = 0, hv.Log = hv._LogEnabled.bind(hv, hv.MessageLogLevel), hv.Warn = hv._LogEnabled.bind(hv, hv.WarningLogLevel), hv.Error = hv._LogEnabled.bind(hv, hv.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);