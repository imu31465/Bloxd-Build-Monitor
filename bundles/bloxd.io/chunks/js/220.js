export const id = 220;
export const ids = [220];
export const modules = {
  36742: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ
    });
    var FJ = ZJ(36744);
    class UJ {
      static GetPlanes(JJ) {
        const cJ = [];
        for (let ZJ = 0; ZJ < 6; ZJ++) cJ.push(new FJ.c(0, 0, 0, 0));
        return UJ.GetPlanesToRef(JJ, cJ), cJ
      }
      static GetNearPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] + ZJ[2], cJ.normal.y = ZJ[7] + ZJ[6], cJ.normal.z = ZJ[11] + ZJ[10], cJ.d = ZJ[15] + ZJ[14], cJ.normalize()
      }
      static GetFarPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] - ZJ[2], cJ.normal.y = ZJ[7] - ZJ[6], cJ.normal.z = ZJ[11] - ZJ[10], cJ.d = ZJ[15] - ZJ[14], cJ.normalize()
      }
      static GetLeftPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] + ZJ[0], cJ.normal.y = ZJ[7] + ZJ[4], cJ.normal.z = ZJ[11] + ZJ[8], cJ.d = ZJ[15] + ZJ[12], cJ.normalize()
      }
      static GetRightPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] - ZJ[0], cJ.normal.y = ZJ[7] - ZJ[4], cJ.normal.z = ZJ[11] - ZJ[8], cJ.d = ZJ[15] - ZJ[12], cJ.normalize()
      }
      static GetTopPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] - ZJ[1], cJ.normal.y = ZJ[7] - ZJ[5], cJ.normal.z = ZJ[11] - ZJ[9], cJ.d = ZJ[15] - ZJ[13], cJ.normalize()
      }
      static GetBottomPlaneToRef(JJ, cJ) {
        const ZJ = JJ.m;
        cJ.normal.x = ZJ[3] + ZJ[1], cJ.normal.y = ZJ[7] + ZJ[5], cJ.normal.z = ZJ[11] + ZJ[9], cJ.d = ZJ[15] + ZJ[13], cJ.normalize()
      }
      static GetPlanesToRef(JJ, cJ) {
        UJ.GetNearPlaneToRef(JJ, cJ[0]), UJ.GetFarPlaneToRef(JJ, cJ[1]), UJ.GetLeftPlaneToRef(JJ, cJ[2]), UJ.GetRightPlaneToRef(JJ, cJ[3]), UJ.GetTopPlaneToRef(JJ, cJ[4]), UJ.GetBottomPlaneToRef(JJ, cJ[5])
      }
      static IsPointInFrustum(JJ, cJ) {
        for (let ZJ = 0; ZJ < 6; ZJ++)
          if (cJ[ZJ].dotCoordinate(JJ) < 0) return !1;
        return !0
      }
    }
  },
  36744: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => UJ
    });
    var FJ = ZJ(36174);
    class UJ {
      constructor(JJ, cJ, ZJ, UJ) {
        this.normal = new FJ.j(JJ, cJ, ZJ), this.d = UJ
      }
      JFJ() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new UJ(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let JJ = this.normal.getHashCode();
        return JJ = 397 * JJ ^ this.d, JJ
      }
      normalize() {
        const JJ = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let cJ = 0;
        return 0 !== JJ && (cJ = 1 / JJ), this.normal.x *= cJ, this.normal.y *= cJ, this.normal.z *= cJ, this.d *= cJ, this
      }
      transform(JJ) {
        const cJ = UJ._TmpMatrix;
        JJ.invertToRef(cJ);
        const ZJ = cJ.m,
          FJ = this.normal.x,
          eJ = this.normal.y,
          XJ = this.normal.z,
          AJ = this.d,
          qJ = FJ * ZJ[0] + eJ * ZJ[1] + XJ * ZJ[2] + AJ * ZJ[3],
          jJ = FJ * ZJ[4] + eJ * ZJ[5] + XJ * ZJ[6] + AJ * ZJ[7],
          YJ = FJ * ZJ[8] + eJ * ZJ[9] + XJ * ZJ[10] + AJ * ZJ[11],
          hJ = FJ * ZJ[12] + eJ * ZJ[13] + XJ * ZJ[14] + AJ * ZJ[15];
        return new UJ(qJ, jJ, YJ, hJ)
      }
      dotCoordinate(JJ) {
        return this.normal.x * JJ.x + this.normal.y * JJ.y + this.normal.z * JJ.z + this.d
      }
      copyFromPoints(JJ, cJ, ZJ) {
        const FJ = cJ.x - JJ.x,
          UJ = cJ.y - JJ.y,
          eJ = cJ.z - JJ.z,
          XJ = ZJ.x - JJ.x,
          AJ = ZJ.y - JJ.y,
          qJ = ZJ.z - JJ.z,
          jJ = UJ * qJ - eJ * AJ,
          YJ = eJ * XJ - FJ * qJ,
          hJ = FJ * AJ - UJ * XJ,
          DJ = Math.sqrt(jJ * jJ + YJ * YJ + hJ * hJ);
        let sJ;
        return sJ = 0 !== DJ ? 1 / DJ : 0, this.normal.x = jJ * sJ, this.normal.y = YJ * sJ, this.normal.z = hJ * sJ, this.d = -(this.normal.x * JJ.x + this.normal.y * JJ.y + this.normal.z * JJ.z), this
      }
      isFrontFacingTo(JJ, cJ) {
        return FJ.j.Dot(this.normal, JJ) <= cJ
      }
      signedDistanceTo(JJ) {
        return FJ.j.Dot(JJ, this.normal) + this.d
      }
      static FromArray(JJ) {
        return new UJ(JJ[0], JJ[1], JJ[2], JJ[3])
      }
      static FromPoints(JJ, cJ, ZJ) {
        const FJ = new UJ(0, 0, 0, 0);
        return FJ.copyFromPoints(JJ, cJ, ZJ), FJ
      }
      static FromPositionAndNormal(JJ, cJ) {
        const ZJ = new UJ(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(JJ, cJ, ZJ)
      }
      static FromPositionAndNormalToRef(JJ, cJ, ZJ) {
        return ZJ.normal.rZJ(cJ), ZJ.normal.normalize(), ZJ.d = -JJ.dot(ZJ.normal), ZJ
      }
      static SignedDistanceToPlaneFromPositionAndNormal(JJ, cJ, ZJ) {
        const UJ = -(cJ.x * JJ.x + cJ.y * JJ.y + cJ.z * JJ.z);
        return FJ.j.Dot(ZJ, cJ) + UJ
      }
    }
    UJ._TmpMatrix = FJ.b.Identity()
  },
  37658: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ
    });
    var FJ = ZJ(37660);
    const UJ = (JJ, cJ, ZJ) => JJ ? JJ.getClassName && "Mesh" === JJ.getClassName() ? null : !JJ.getClassName || "SubMesh" !== JJ.getClassName() && "PhysicsBody" !== JJ.getClassName() ? JJ.clone ? JJ.clone() : Array.isArray(JJ) ? JJ.slice() : ZJ && "object" === typeof JJ ? {
      ...JJ
    } : null : JJ.clone(cJ) : null;
    class eJ {
      static DeepCopy(JJ, cJ, ZJ, eJ) {
        let XJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const AJ = function(JJ) {
          const cJ = [];
          do {
            const ZJ = Object.getOwnPropertyNames(JJ);
            for (const JJ of ZJ) - 1 === cJ.indexOf(JJ) && cJ.push(JJ)
          } while (JJ = Object.getPrototypeOf(JJ));
          return cJ
        }(JJ);
        for (const jJ of AJ) {
          if ("_" === jJ[0] && (!eJ || -1 === eJ.indexOf(jJ))) continue;
          if (jJ.endsWith("Observable")) continue;
          if (ZJ && -1 !== ZJ.indexOf(jJ)) continue;
          const AJ = JJ[jJ],
            YJ = typeof AJ;
          if ("function" !== YJ) try {
            if ("object" === YJ)
              if (AJ instanceof Uint8Array) cJ[jJ] = Uint8Array.from(AJ);
              else if (AJ instanceof Array) {
              if (cJ[jJ] = [], AJ.length > 0)
                if ("object" == typeof AJ[0])
                  for (let JJ = 0; JJ < AJ.length; JJ++) {
                    const ZJ = UJ(AJ[JJ], cJ, XJ); - 1 === cJ[jJ].indexOf(ZJ) && cJ[jJ].push(ZJ)
                  } else cJ[jJ] = AJ.slice(0)
            } else cJ[jJ] = UJ(AJ, cJ, XJ);
            else cJ[jJ] = AJ
          } catch (qJ) {
            FJ.c.Warn(qJ.message)
          }
        }
      }
    }
  },
  36865: (JJ, cJ, ZJ) => {
    function FJ() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (JJ => {
        const cJ = 16 * Math.random() | 0;
        return ("x" === JJ ? cJ : 3 & cJ | 8).toString(16)
      }))
    }
    ZJ.d(cJ, {
      d: () => FJ
    })
  },
  37660: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ
    });
    class FJ {
      static _CheckLimit(JJ, cJ) {
        let ZJ = FJ._LogLimitOutputs[JJ];
        return ZJ ? ZJ.current++ : (ZJ = {
          limit: cJ,
          current: 1
        }, FJ._LogLimitOutputs[JJ] = ZJ), ZJ.current <= ZJ.limit
      }
      static _GenerateLimitMessage(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZJ = FJ._LogLimitOutputs[JJ];
        if (!ZJ || !FJ.MessageLimitReached) return;
        const UJ = this._Levels[cJ];
        ZJ.current === ZJ.limit && FJ[UJ.name](FJ.MessageLimitReached.replace(/%LIMIT%/g, "" + ZJ.limit).replace(/%TYPE%/g, UJ.name ?? ""))
      }
      static _AddLogEntry(JJ) {
        FJ._LogCache = JJ + FJ._LogCache, FJ.OnNewCacheEntry && FJ.OnNewCacheEntry(JJ)
      }
      static _FormatMessage(JJ) {
        const cJ = JJ => JJ < 10 ? "0" + JJ : "" + JJ,
          ZJ = new Date;
        return "[" + cJ(ZJ.getHours()) + ":" + cJ(ZJ.getMinutes()) + ":" + cJ(ZJ.getSeconds()) + "]: " + JJ
      }
      static _LogDisabled(JJ, cJ) {}
      static _LogEnabled() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cJ = arguments.length > 1 ? arguments[1] : void 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        const UJ = Array.isArray(cJ) ? cJ[0] : cJ;
        if (void 0 !== ZJ && !FJ._CheckLimit(UJ, ZJ)) return;
        const eJ = FJ._FormatMessage(UJ),
          XJ = this._Levels[JJ],
          AJ = Array.isArray(cJ) ? cJ.slice(1) : [];
        XJ.logFunc && XJ.logFunc("BJS - " + eJ, ...AJ);
        const qJ = `<div style='color:${XJ.color}'>${eJ}</div><br>`;
        FJ._AddLogEntry(qJ), FJ._GenerateLimitMessage(UJ, JJ)
      }
      static get LogCache() {
        return FJ._LogCache
      }
      static ClearLogCache() {
        FJ._LogCache = "", FJ._LogLimitOutputs = {}, FJ.errorsCount = 0
      }
      static set LogLevels(JJ) {
        FJ.Log = FJ._LogDisabled, FJ.Warn = FJ._LogDisabled, FJ.Error = FJ._LogDisabled;
        const cJ = [FJ.MessageLogLevel, FJ.WarningLogLevel, FJ.ErrorLogLevel];
        for (const ZJ of cJ)
          if ((JJ & ZJ) === ZJ) {
            const JJ = this._Levels[ZJ];
            FJ[JJ.name] = FJ._LogEnabled.bind(FJ, ZJ)
          }
      }
    }
    FJ.NoneLogLevel = 0, FJ.MessageLogLevel = 1, FJ.WarningLogLevel = 2, FJ.ErrorLogLevel = 4, FJ.AllLogLevel = 7, FJ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", FJ._LogCache = "", FJ._LogLimitOutputs = {}, FJ._Levels = [{}, {
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
    }], FJ.errorsCount = 0, FJ.Log = FJ._LogEnabled.bind(FJ, FJ.MessageLogLevel), FJ.Warn = FJ._LogEnabled.bind(FJ, FJ.WarningLogLevel), FJ.Error = FJ._LogEnabled.bind(FJ, FJ.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);