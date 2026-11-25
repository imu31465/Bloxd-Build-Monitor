export const id = 244;
export const ids = [244];
export const modules = {
  38167: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG
    });
    var wG = ZG(38175);
    class SG {
      static GetPlanes(GG) {
        const bG = [];
        for (let ZG = 0; ZG < 6; ZG++) bG.push(new wG.b(0, 0, 0, 0));
        return SG.GetPlanesToRef(GG, bG), bG
      }
      static GetNearPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] + ZG[2], bG.normal.y = ZG[7] + ZG[6], bG.normal.z = ZG[11] + ZG[10], bG.d = ZG[15] + ZG[14], bG.normalize()
      }
      static GetFarPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] - ZG[2], bG.normal.y = ZG[7] - ZG[6], bG.normal.z = ZG[11] - ZG[10], bG.d = ZG[15] - ZG[14], bG.normalize()
      }
      static GetLeftPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] + ZG[0], bG.normal.y = ZG[7] + ZG[4], bG.normal.z = ZG[11] + ZG[8], bG.d = ZG[15] + ZG[12], bG.normalize()
      }
      static GetRightPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] - ZG[0], bG.normal.y = ZG[7] - ZG[4], bG.normal.z = ZG[11] - ZG[8], bG.d = ZG[15] - ZG[12], bG.normalize()
      }
      static GetTopPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] - ZG[1], bG.normal.y = ZG[7] - ZG[5], bG.normal.z = ZG[11] - ZG[9], bG.d = ZG[15] - ZG[13], bG.normalize()
      }
      static GetBottomPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] + ZG[1], bG.normal.y = ZG[7] + ZG[5], bG.normal.z = ZG[11] + ZG[9], bG.d = ZG[15] + ZG[13], bG.normalize()
      }
      static GetPlanesToRef(GG, bG) {
        SG.GetNearPlaneToRef(GG, bG[0]), SG.GetFarPlaneToRef(GG, bG[1]), SG.GetLeftPlaneToRef(GG, bG[2]), SG.GetRightPlaneToRef(GG, bG[3]), SG.GetTopPlaneToRef(GG, bG[4]), SG.GetBottomPlaneToRef(GG, bG[5])
      }
      static IsPointInFrustum(GG, bG) {
        for (let ZG = 0; ZG < 6; ZG++)
          if (bG[ZG].dotCoordinate(GG) < 0) return !1;
        return !0
      }
    }
  },
  38175: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG
    });
    var wG = ZG(37439);
    class SG {
      constructor(GG, bG, ZG, SG) {
        this.normal = new wG.p(GG, bG, ZG), this.d = SG
      }
      mwG() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new SG(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let GG = this.normal.getHashCode();
        return GG = 397 * GG ^ this.d, GG
      }
      normalize() {
        const GG = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let bG = 0;
        return 0 !== GG && (bG = 1 / GG), this.normal.x *= bG, this.normal.y *= bG, this.normal.z *= bG, this.d *= bG, this
      }
      transform(GG) {
        const bG = SG._TmpMatrix;
        GG.invertToRef(bG);
        const ZG = bG.m,
          wG = this.normal.x,
          LG = this.normal.y,
          yG = this.normal.z,
          kG = this.d,
          UG = wG * ZG[0] + LG * ZG[1] + yG * ZG[2] + kG * ZG[3],
          YG = wG * ZG[4] + LG * ZG[5] + yG * ZG[6] + kG * ZG[7],
          VG = wG * ZG[8] + LG * ZG[9] + yG * ZG[10] + kG * ZG[11],
          pG = wG * ZG[12] + LG * ZG[13] + yG * ZG[14] + kG * ZG[15];
        return new SG(UG, YG, VG, pG)
      }
      dotCoordinate(GG) {
        return this.normal.x * GG.x + this.normal.y * GG.y + this.normal.z * GG.z + this.d
      }
      copyFromPoints(GG, bG, ZG) {
        const wG = bG.x - GG.x,
          SG = bG.y - GG.y,
          LG = bG.z - GG.z,
          yG = ZG.x - GG.x,
          kG = ZG.y - GG.y,
          UG = ZG.z - GG.z,
          YG = SG * UG - LG * kG,
          VG = LG * yG - wG * UG,
          pG = wG * kG - SG * yG,
          fG = Math.sqrt(YG * YG + VG * VG + pG * pG);
        let QG;
        return QG = 0 !== fG ? 1 / fG : 0, this.normal.x = YG * QG, this.normal.y = VG * QG, this.normal.z = pG * QG, this.d = -(this.normal.x * GG.x + this.normal.y * GG.y + this.normal.z * GG.z), this
      }
      isFrontFacingTo(GG, bG) {
        return wG.p.Dot(this.normal, GG) <= bG
      }
      signedDistanceTo(GG) {
        return wG.p.Dot(GG, this.normal) + this.d
      }
      static FromArray(GG) {
        return new SG(GG[0], GG[1], GG[2], GG[3])
      }
      static FromPoints(GG, bG, ZG) {
        const wG = new SG(0, 0, 0, 0);
        return wG.copyFromPoints(GG, bG, ZG), wG
      }
      static FromPositionAndNormal(GG, bG) {
        const ZG = new SG(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(GG, bG, ZG)
      }
      static FromPositionAndNormalToRef(GG, bG, ZG) {
        return ZG.normal.oW(bG), ZG.normal.normalize(), ZG.d = -GG.dot(ZG.normal), ZG
      }
      static SignedDistanceToPlaneFromPositionAndNormal(GG, bG, ZG) {
        const SG = -(bG.x * GG.x + bG.y * GG.y + bG.z * GG.z);
        return wG.p.Dot(ZG, bG) + SG
      }
    }
    SG._TmpMatrix = wG.e.Identity()
  },
  39086: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG
    });
    var wG = ZG(39093);
    const SG = (GG, bG, ZG) => GG ? GG.getClassName && "Mesh" === GG.getClassName() ? null : !GG.getClassName || "SubMesh" !== GG.getClassName() && "PhysicsBody" !== GG.getClassName() ? GG.clone ? GG.clone() : Array.isArray(GG) ? GG.slice() : ZG && "object" === typeof GG ? {
      ...GG
    } : null : GG.clone(bG) : null;
    class LG {
      static DeepCopy(GG, bG, ZG, LG) {
        let yG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const kG = function(GG) {
          const bG = [];
          do {
            const ZG = Object.getOwnPropertyNames(GG);
            for (const GG of ZG) - 1 === bG.indexOf(GG) && bG.push(GG)
          } while (GG = Object.getPrototypeOf(GG));
          return bG
        }(GG);
        for (const YG of kG) {
          if ("_" === YG[0] && (!LG || -1 === LG.indexOf(YG))) continue;
          if (YG.endsWith("Observable")) continue;
          if (ZG && -1 !== ZG.indexOf(YG)) continue;
          const kG = GG[YG],
            VG = typeof kG;
          if ("function" !== VG) try {
            if ("object" === VG)
              if (kG instanceof Uint8Array) bG[YG] = Uint8Array.from(kG);
              else if (kG instanceof Array) {
              if (bG[YG] = [], kG.length > 0)
                if ("object" == typeof kG[0])
                  for (let GG = 0; GG < kG.length; GG++) {
                    const ZG = SG(kG[GG], bG, yG); - 1 === bG[YG].indexOf(ZG) && bG[YG].push(ZG)
                  } else bG[YG] = kG.slice(0)
            } else bG[YG] = SG(kG, bG, yG);
            else bG[YG] = kG
          } catch (UG) {
            wG.c.Warn(UG.message)
          }
        }
      }
    }
  },
  38311: (GG, bG, ZG) => {
    function wG() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (GG => {
        const bG = 16 * Math.random() | 0;
        return ("x" === GG ? bG : 3 & bG | 8).toString(16)
      }))
    }
    ZG.d(bG, {
      e: () => wG
    })
  },
  39093: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG
    });
    class wG {
      static _CheckLimit(GG, bG) {
        let ZG = wG._LogLimitOutputs[GG];
        return ZG ? ZG.current++ : (ZG = {
          limit: bG,
          current: 1
        }, wG._LogLimitOutputs[GG] = ZG), ZG.current <= ZG.limit
      }
      static _GenerateLimitMessage(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZG = wG._LogLimitOutputs[GG];
        if (!ZG || !wG.MessageLimitReached) return;
        const SG = this._Levels[bG];
        ZG.current === ZG.limit && wG[SG.name](wG.MessageLimitReached.replace(/%LIMIT%/g, "" + ZG.limit).replace(/%TYPE%/g, SG.name ?? ""))
      }
      static _AddLogEntry(GG) {
        wG._LogCache = GG + wG._LogCache, wG.OnNewCacheEntry && wG.OnNewCacheEntry(GG)
      }
      static _FormatMessage(GG) {
        const bG = GG => GG < 10 ? "0" + GG : "" + GG,
          ZG = new Date;
        return "[" + bG(ZG.getHours()) + ":" + bG(ZG.getMinutes()) + ":" + bG(ZG.getSeconds()) + "]: " + GG
      }
      static _LogDisabled(GG, bG) {}
      static _LogEnabled() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bG = arguments.length > 1 ? arguments[1] : void 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        const SG = Array.isArray(bG) ? bG[0] : bG;
        if (void 0 !== ZG && !wG._CheckLimit(SG, ZG)) return;
        const LG = wG._FormatMessage(SG),
          yG = this._Levels[GG],
          kG = Array.isArray(bG) ? bG.slice(1) : [];
        yG.logFunc && yG.logFunc("BJS - " + LG, ...kG);
        const UG = `<div style='color:${yG.color}'>${LG}</div><br>`;
        wG._AddLogEntry(UG), wG._GenerateLimitMessage(SG, GG)
      }
      static get LogCache() {
        return wG._LogCache
      }
      static ClearLogCache() {
        wG._LogCache = "", wG._LogLimitOutputs = {}, wG.errorsCount = 0
      }
      static set LogLevels(GG) {
        wG.Log = wG._LogDisabled, wG.Warn = wG._LogDisabled, wG.Error = wG._LogDisabled;
        const bG = [wG.MessageLogLevel, wG.WarningLogLevel, wG.ErrorLogLevel];
        for (const ZG of bG)
          if ((GG & ZG) === ZG) {
            const GG = this._Levels[ZG];
            wG[GG.name] = wG._LogEnabled.bind(wG, ZG)
          }
      }
    }
    wG.NoneLogLevel = 0, wG.MessageLogLevel = 1, wG.WarningLogLevel = 2, wG.ErrorLogLevel = 4, wG.AllLogLevel = 7, wG.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", wG._LogCache = "", wG._LogLimitOutputs = {}, wG._Levels = [{}, {
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
    }], wG.errorsCount = 0, wG.Log = wG._LogEnabled.bind(wG, wG.MessageLogLevel), wG.Warn = wG._LogEnabled.bind(wG, wG.WarningLogLevel), wG.Error = wG._LogEnabled.bind(wG, wG.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);