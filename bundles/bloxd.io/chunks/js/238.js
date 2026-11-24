export const id = 238;
export const ids = [238];
export const modules = {
  37752: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD
    });
    var pD = wD(37754);
    class sD {
      static GetPlanes(DD) {
        const zD = [];
        for (let wD = 0; wD < 6; wD++) zD.push(new pD.e(0, 0, 0, 0));
        return sD.GetPlanesToRef(DD, zD), zD
      }
      static GetNearPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] + wD[2], zD.normal.y = wD[7] + wD[6], zD.normal.z = wD[11] + wD[10], zD.d = wD[15] + wD[14], zD.normalize()
      }
      static GetFarPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] - wD[2], zD.normal.y = wD[7] - wD[6], zD.normal.z = wD[11] - wD[10], zD.d = wD[15] - wD[14], zD.normalize()
      }
      static GetLeftPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] + wD[0], zD.normal.y = wD[7] + wD[4], zD.normal.z = wD[11] + wD[8], zD.d = wD[15] + wD[12], zD.normalize()
      }
      static GetRightPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] - wD[0], zD.normal.y = wD[7] - wD[4], zD.normal.z = wD[11] - wD[8], zD.d = wD[15] - wD[12], zD.normalize()
      }
      static GetTopPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] - wD[1], zD.normal.y = wD[7] - wD[5], zD.normal.z = wD[11] - wD[9], zD.d = wD[15] - wD[13], zD.normalize()
      }
      static GetBottomPlaneToRef(DD, zD) {
        const wD = DD.m;
        zD.normal.x = wD[3] + wD[1], zD.normal.y = wD[7] + wD[5], zD.normal.z = wD[11] + wD[9], zD.d = wD[15] + wD[13], zD.normalize()
      }
      static GetPlanesToRef(DD, zD) {
        sD.GetNearPlaneToRef(DD, zD[0]), sD.GetFarPlaneToRef(DD, zD[1]), sD.GetLeftPlaneToRef(DD, zD[2]), sD.GetRightPlaneToRef(DD, zD[3]), sD.GetTopPlaneToRef(DD, zD[4]), sD.GetBottomPlaneToRef(DD, zD[5])
      }
      static IsPointInFrustum(DD, zD) {
        for (let wD = 0; wD < 6; wD++)
          if (zD[wD].dotCoordinate(DD) < 0) return !1;
        return !0
      }
    }
  },
  37754: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => sD
    });
    var pD = wD(37079);
    class sD {
      constructor(DD, zD, wD, sD) {
        this.normal = new pD.s(DD, zD, wD), this.d = sD
      }
      QpD() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new sD(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let DD = this.normal.getHashCode();
        return DD = 397 * DD ^ this.d, DD
      }
      normalize() {
        const DD = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let zD = 0;
        return 0 !== DD && (zD = 1 / DD), this.normal.x *= zD, this.normal.y *= zD, this.normal.z *= zD, this.d *= zD, this
      }
      transform(DD) {
        const zD = sD._TmpMatrix;
        DD.invertToRef(zD);
        const wD = zD.m,
          pD = this.normal.x,
          KD = this.normal.y,
          rD = this.normal.z,
          LD = this.d,
          cD = pD * wD[0] + KD * wD[1] + rD * wD[2] + LD * wD[3],
          gD = pD * wD[4] + KD * wD[5] + rD * wD[6] + LD * wD[7],
          RD = pD * wD[8] + KD * wD[9] + rD * wD[10] + LD * wD[11],
          AD = pD * wD[12] + KD * wD[13] + rD * wD[14] + LD * wD[15];
        return new sD(cD, gD, RD, AD)
      }
      dotCoordinate(DD) {
        return this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z + this.d
      }
      copyFromPoints(DD, zD, wD) {
        const pD = zD.x - DD.x,
          sD = zD.y - DD.y,
          KD = zD.z - DD.z,
          rD = wD.x - DD.x,
          LD = wD.y - DD.y,
          cD = wD.z - DD.z,
          gD = sD * cD - KD * LD,
          RD = KD * rD - pD * cD,
          AD = pD * LD - sD * rD,
          UD = Math.sqrt(gD * gD + RD * RD + AD * AD);
        let fD;
        return fD = 0 !== UD ? 1 / UD : 0, this.normal.x = gD * fD, this.normal.y = RD * fD, this.normal.z = AD * fD, this.d = -(this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z), this
      }
      isFrontFacingTo(DD, zD) {
        return pD.s.Dot(this.normal, DD) <= zD
      }
      signedDistanceTo(DD) {
        return pD.s.Dot(DD, this.normal) + this.d
      }
      static FromArray(DD) {
        return new sD(DD[0], DD[1], DD[2], DD[3])
      }
      static FromPoints(DD, zD, wD) {
        const pD = new sD(0, 0, 0, 0);
        return pD.copyFromPoints(DD, zD, wD), pD
      }
      static FromPositionAndNormal(DD, zD) {
        const wD = new sD(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(DD, zD, wD)
      }
      static FromPositionAndNormalToRef(DD, zD, wD) {
        return wD.normal.pC(zD), wD.normal.normalize(), wD.d = -DD.dot(wD.normal), wD
      }
      static SignedDistanceToPlaneFromPositionAndNormal(DD, zD, wD) {
        const sD = -(zD.x * DD.x + zD.y * DD.y + zD.z * DD.z);
        return pD.s.Dot(wD, zD) + sD
      }
    }
    sD._TmpMatrix = pD.e.Identity()
  },
  38658: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD
    });
    var pD = wD(38662);
    const sD = (DD, zD, wD) => DD ? DD.getClassName && "Mesh" === DD.getClassName() ? null : !DD.getClassName || "SubMesh" !== DD.getClassName() && "PhysicsBody" !== DD.getClassName() ? DD.clone ? DD.clone() : Array.isArray(DD) ? DD.slice() : wD && "object" === typeof DD ? {
      ...DD
    } : null : DD.clone(zD) : null;
    class KD {
      static DeepCopy(DD, zD, wD, KD) {
        let rD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const LD = function(DD) {
          const zD = [];
          do {
            const wD = Object.getOwnPropertyNames(DD);
            for (const DD of wD) - 1 === zD.indexOf(DD) && zD.push(DD)
          } while (DD = Object.getPrototypeOf(DD));
          return zD
        }(DD);
        for (const gD of LD) {
          if ("_" === gD[0] && (!KD || -1 === KD.indexOf(gD))) continue;
          if (gD.endsWith("Observable")) continue;
          if (wD && -1 !== wD.indexOf(gD)) continue;
          const LD = DD[gD],
            RD = typeof LD;
          if ("function" !== RD) try {
            if ("object" === RD)
              if (LD instanceof Uint8Array) zD[gD] = Uint8Array.from(LD);
              else if (LD instanceof Array) {
              if (zD[gD] = [], LD.length > 0)
                if ("object" == typeof LD[0])
                  for (let DD = 0; DD < LD.length; DD++) {
                    const wD = sD(LD[DD], zD, rD); - 1 === zD[gD].indexOf(wD) && zD[gD].push(wD)
                  } else zD[gD] = LD.slice(0)
            } else zD[gD] = sD(LD, zD, rD);
            else zD[gD] = LD
          } catch (cD) {
            pD.d.Warn(cD.message)
          }
        }
      }
    }
  },
  37891: (DD, zD, wD) => {
    function pD() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (DD => {
        const zD = 16 * Math.random() | 0;
        return ("x" === DD ? zD : 3 & zD | 8).toString(16)
      }))
    }
    wD.d(zD, {
      c: () => pD
    })
  },
  38662: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    class pD {
      static _CheckLimit(DD, zD) {
        let wD = pD._LogLimitOutputs[DD];
        return wD ? wD.current++ : (wD = {
          limit: zD,
          current: 1
        }, pD._LogLimitOutputs[DD] = wD), wD.current <= wD.limit
      }
      static _GenerateLimitMessage(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const wD = pD._LogLimitOutputs[DD];
        if (!wD || !pD.MessageLimitReached) return;
        const sD = this._Levels[zD];
        wD.current === wD.limit && pD[sD.name](pD.MessageLimitReached.replace(/%LIMIT%/g, "" + wD.limit).replace(/%TYPE%/g, sD.name ?? ""))
      }
      static _AddLogEntry(DD) {
        pD._LogCache = DD + pD._LogCache, pD.OnNewCacheEntry && pD.OnNewCacheEntry(DD)
      }
      static _FormatMessage(DD) {
        const zD = DD => DD < 10 ? "0" + DD : "" + DD,
          wD = new Date;
        return "[" + zD(wD.getHours()) + ":" + zD(wD.getMinutes()) + ":" + zD(wD.getSeconds()) + "]: " + DD
      }
      static _LogDisabled(DD, zD) {}
      static _LogEnabled() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zD = arguments.length > 1 ? arguments[1] : void 0,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        const sD = Array.isArray(zD) ? zD[0] : zD;
        if (void 0 !== wD && !pD._CheckLimit(sD, wD)) return;
        const KD = pD._FormatMessage(sD),
          rD = this._Levels[DD],
          LD = Array.isArray(zD) ? zD.slice(1) : [];
        rD.logFunc && rD.logFunc("BJS - " + KD, ...LD);
        const cD = `<div style='color:${rD.color}'>${KD}</div><br>`;
        pD._AddLogEntry(cD), pD._GenerateLimitMessage(sD, DD)
      }
      static get LogCache() {
        return pD._LogCache
      }
      static ClearLogCache() {
        pD._LogCache = "", pD._LogLimitOutputs = {}, pD.errorsCount = 0
      }
      static set LogLevels(DD) {
        pD.Log = pD._LogDisabled, pD.Warn = pD._LogDisabled, pD.Error = pD._LogDisabled;
        const zD = [pD.MessageLogLevel, pD.WarningLogLevel, pD.ErrorLogLevel];
        for (const wD of zD)
          if ((DD & wD) === wD) {
            const DD = this._Levels[wD];
            pD[DD.name] = pD._LogEnabled.bind(pD, wD)
          }
      }
    }
    pD.NoneLogLevel = 0, pD.MessageLogLevel = 1, pD.WarningLogLevel = 2, pD.ErrorLogLevel = 4, pD.AllLogLevel = 7, pD.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", pD._LogCache = "", pD._LogLimitOutputs = {}, pD._Levels = [{}, {
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
    }], pD.errorsCount = 0, pD.Log = pD._LogEnabled.bind(pD, pD.MessageLogLevel), pD.Warn = pD._LogEnabled.bind(pD, pD.WarningLogLevel), pD.Error = pD._LogEnabled.bind(pD, pD.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);