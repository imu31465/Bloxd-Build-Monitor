export const id = 262;
export const ids = [262];
export const modules = {
  38908: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => YV
    });
    var JV = xV(38917);
    class YV {
      static GetPlanes(VV) {
        const eV = [];
        for (let xV = 0; xV < 6; xV++) eV.push(new JV.d(0, 0, 0, 0));
        return YV.GetPlanesToRef(VV, eV), eV
      }
      static GetNearPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] + xV[2], eV.normal.y = xV[7] + xV[6], eV.normal.z = xV[11] + xV[10], eV.d = xV[15] + xV[14], eV.normalize()
      }
      static GetFarPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] - xV[2], eV.normal.y = xV[7] - xV[6], eV.normal.z = xV[11] - xV[10], eV.d = xV[15] - xV[14], eV.normalize()
      }
      static GetLeftPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] + xV[0], eV.normal.y = xV[7] + xV[4], eV.normal.z = xV[11] + xV[8], eV.d = xV[15] + xV[12], eV.normalize()
      }
      static GetRightPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] - xV[0], eV.normal.y = xV[7] - xV[4], eV.normal.z = xV[11] - xV[8], eV.d = xV[15] - xV[12], eV.normalize()
      }
      static GetTopPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] - xV[1], eV.normal.y = xV[7] - xV[5], eV.normal.z = xV[11] - xV[9], eV.d = xV[15] - xV[13], eV.normalize()
      }
      static GetBottomPlaneToRef(VV, eV) {
        const xV = VV.m;
        eV.normal.x = xV[3] + xV[1], eV.normal.y = xV[7] + xV[5], eV.normal.z = xV[11] + xV[9], eV.d = xV[15] + xV[13], eV.normalize()
      }
      static GetPlanesToRef(VV, eV) {
        YV.GetNearPlaneToRef(VV, eV[0]), YV.GetFarPlaneToRef(VV, eV[1]), YV.GetLeftPlaneToRef(VV, eV[2]), YV.GetRightPlaneToRef(VV, eV[3]), YV.GetTopPlaneToRef(VV, eV[4]), YV.GetBottomPlaneToRef(VV, eV[5])
      }
      static IsPointInFrustum(VV, eV) {
        for (let xV = 0; xV < 6; xV++)
          if (eV[xV].dotCoordinate(VV) < 0) return !1;
        return !0
      }
    }
  },
  38917: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV
    });
    var JV = xV(38269);
    class YV {
      constructor(VV, eV, xV, YV) {
        this.normal = new JV.o(VV, eV, xV), this.d = YV
      }
      WYV() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new YV(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let VV = this.normal.getHashCode();
        return VV = 397 * VV ^ this.d, VV
      }
      normalize() {
        const VV = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let eV = 0;
        return 0 !== VV && (eV = 1 / VV), this.normal.x *= eV, this.normal.y *= eV, this.normal.z *= eV, this.d *= eV, this
      }
      transform(VV) {
        const eV = YV._TmpMatrix;
        VV.invertToRef(eV);
        const xV = eV.m,
          JV = this.normal.x,
          UV = this.normal.y,
          yV = this.normal.z,
          pV = this.d,
          QV = JV * xV[0] + UV * xV[1] + yV * xV[2] + pV * xV[3],
          nV = JV * xV[4] + UV * xV[5] + yV * xV[6] + pV * xV[7],
          wV = JV * xV[8] + UV * xV[9] + yV * xV[10] + pV * xV[11],
          ZV = JV * xV[12] + UV * xV[13] + yV * xV[14] + pV * xV[15];
        return new YV(QV, nV, wV, ZV)
      }
      dotCoordinate(VV) {
        return this.normal.x * VV.x + this.normal.y * VV.y + this.normal.z * VV.z + this.d
      }
      copyFromPoints(VV, eV, xV) {
        const JV = eV.x - VV.x,
          YV = eV.y - VV.y,
          UV = eV.z - VV.z,
          yV = xV.x - VV.x,
          pV = xV.y - VV.y,
          QV = xV.z - VV.z,
          nV = YV * QV - UV * pV,
          wV = UV * yV - JV * QV,
          ZV = JV * pV - YV * yV,
          vV = Math.sqrt(nV * nV + wV * wV + ZV * ZV);
        let rV;
        return rV = 0 !== vV ? 1 / vV : 0, this.normal.x = nV * rV, this.normal.y = wV * rV, this.normal.z = ZV * rV, this.d = -(this.normal.x * VV.x + this.normal.y * VV.y + this.normal.z * VV.z), this
      }
      isFrontFacingTo(VV, eV) {
        return JV.o.Dot(this.normal, VV) <= eV
      }
      signedDistanceTo(VV) {
        return JV.o.Dot(VV, this.normal) + this.d
      }
      static FromArray(VV) {
        return new YV(VV[0], VV[1], VV[2], VV[3])
      }
      static FromPoints(VV, eV, xV) {
        const JV = new YV(0, 0, 0, 0);
        return JV.copyFromPoints(VV, eV, xV), JV
      }
      static FromPositionAndNormal(VV, eV) {
        const xV = new YV(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(VV, eV, xV)
      }
      static FromPositionAndNormalToRef(VV, eV, xV) {
        return xV.normal.iG(eV), xV.normal.normalize(), xV.d = -VV.dot(xV.normal), xV
      }
      static SignedDistanceToPlaneFromPositionAndNormal(VV, eV, xV) {
        const YV = -(eV.x * VV.x + eV.y * VV.y + eV.z * VV.z);
        return JV.o.Dot(xV, eV) + YV
      }
    }
    YV._TmpMatrix = JV.d.Identity()
  },
  39867: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV
    });
    var JV = xV(39870);
    const YV = (VV, eV, xV) => VV ? VV.getClassName && "Mesh" === VV.getClassName() ? null : !VV.getClassName || "SubMesh" !== VV.getClassName() && "PhysicsBody" !== VV.getClassName() ? VV.clone ? VV.clone() : Array.isArray(VV) ? VV.slice() : xV && "object" === typeof VV ? {
      ...VV
    } : null : VV.clone(eV) : null;
    class UV {
      static DeepCopy(VV, eV, xV, UV) {
        let yV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const pV = function(VV) {
          const eV = [];
          do {
            const xV = Object.getOwnPropertyNames(VV);
            for (const VV of xV) - 1 === eV.indexOf(VV) && eV.push(VV)
          } while (VV = Object.getPrototypeOf(VV));
          return eV
        }(VV);
        for (const nV of pV) {
          if ("_" === nV[0] && (!UV || -1 === UV.indexOf(nV))) continue;
          if (nV.endsWith("Observable")) continue;
          if (xV && -1 !== xV.indexOf(nV)) continue;
          const pV = VV[nV],
            wV = typeof pV;
          if ("function" !== wV) try {
            if ("object" === wV)
              if (pV instanceof Uint8Array) eV[nV] = Uint8Array.from(pV);
              else if (pV instanceof Array) {
              if (eV[nV] = [], pV.length > 0)
                if ("object" == typeof pV[0])
                  for (let VV = 0; VV < pV.length; VV++) {
                    const xV = YV(pV[VV], eV, yV); - 1 === eV[nV].indexOf(xV) && eV[nV].push(xV)
                  } else eV[nV] = pV.slice(0)
            } else eV[nV] = YV(pV, eV, yV);
            else eV[nV] = pV
          } catch (QV) {
            JV.b.Warn(QV.message)
          }
        }
      }
    }
  },
  39058: (VV, eV, xV) => {
    function JV() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (VV => {
        const eV = 16 * Math.random() | 0;
        return ("x" === VV ? eV : 3 & eV | 8).toString(16)
      }))
    }
    xV.d(eV, {
      d: () => JV
    })
  },
  39870: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    class JV {
      static _CheckLimit(VV, eV) {
        let xV = JV._LogLimitOutputs[VV];
        return xV ? xV.current++ : (xV = {
          limit: eV,
          current: 1
        }, JV._LogLimitOutputs[VV] = xV), xV.current <= xV.limit
      }
      static _GenerateLimitMessage(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const xV = JV._LogLimitOutputs[VV];
        if (!xV || !JV.MessageLimitReached) return;
        const YV = this._Levels[eV];
        xV.current === xV.limit && JV[YV.name](JV.MessageLimitReached.replace(/%LIMIT%/g, "" + xV.limit).replace(/%TYPE%/g, YV.name ?? ""))
      }
      static _AddLogEntry(VV) {
        JV._LogCache = VV + JV._LogCache, JV.OnNewCacheEntry && JV.OnNewCacheEntry(VV)
      }
      static _FormatMessage(VV) {
        const eV = VV => VV < 10 ? "0" + VV : "" + VV,
          xV = new Date;
        return "[" + eV(xV.getHours()) + ":" + eV(xV.getMinutes()) + ":" + eV(xV.getSeconds()) + "]: " + VV
      }
      static _LogDisabled(VV, eV) {}
      static _LogEnabled() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          eV = arguments.length > 1 ? arguments[1] : void 0,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        const YV = Array.isArray(eV) ? eV[0] : eV;
        if (void 0 !== xV && !JV._CheckLimit(YV, xV)) return;
        const UV = JV._FormatMessage(YV),
          yV = this._Levels[VV],
          pV = Array.isArray(eV) ? eV.slice(1) : [];
        yV.logFunc && yV.logFunc("BJS - " + UV, ...pV);
        const QV = `<div style='color:${yV.color}'>${UV}</div><br>`;
        JV._AddLogEntry(QV), JV._GenerateLimitMessage(YV, VV)
      }
      static get LogCache() {
        return JV._LogCache
      }
      static ClearLogCache() {
        JV._LogCache = "", JV._LogLimitOutputs = {}, JV.errorsCount = 0
      }
      static set LogLevels(VV) {
        JV.Log = JV._LogDisabled, JV.Warn = JV._LogDisabled, JV.Error = JV._LogDisabled;
        const eV = [JV.MessageLogLevel, JV.WarningLogLevel, JV.ErrorLogLevel];
        for (const xV of eV)
          if ((VV & xV) === xV) {
            const VV = this._Levels[xV];
            JV[VV.name] = JV._LogEnabled.bind(JV, xV)
          }
      }
    }
    JV.NoneLogLevel = 0, JV.MessageLogLevel = 1, JV.WarningLogLevel = 2, JV.ErrorLogLevel = 4, JV.AllLogLevel = 7, JV.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", JV._LogCache = "", JV._LogLimitOutputs = {}, JV._Levels = [{}, {
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
    }], JV.errorsCount = 0, JV.Log = JV._LogEnabled.bind(JV, JV.MessageLogLevel), JV.Warn = JV._LogEnabled.bind(JV, JV.WarningLogLevel), JV.Error = JV._LogEnabled.bind(JV, JV.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);