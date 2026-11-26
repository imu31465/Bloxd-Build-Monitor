export const id = 266;
export const ids = [266];
export const modules = {
  38610: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH
    });
    var AH = LH(38619);
    class rH {
      static GetPlanes(HH) {
        const BH = [];
        for (let LH = 0; LH < 6; LH++) BH.push(new AH.d(0, 0, 0, 0));
        return rH.GetPlanesToRef(HH, BH), BH
      }
      static GetNearPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] + LH[2], BH.normal.y = LH[7] + LH[6], BH.normal.z = LH[11] + LH[10], BH.d = LH[15] + LH[14], BH.normalize()
      }
      static GetFarPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] - LH[2], BH.normal.y = LH[7] - LH[6], BH.normal.z = LH[11] - LH[10], BH.d = LH[15] - LH[14], BH.normalize()
      }
      static GetLeftPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] + LH[0], BH.normal.y = LH[7] + LH[4], BH.normal.z = LH[11] + LH[8], BH.d = LH[15] + LH[12], BH.normalize()
      }
      static GetRightPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] - LH[0], BH.normal.y = LH[7] - LH[4], BH.normal.z = LH[11] - LH[8], BH.d = LH[15] - LH[12], BH.normalize()
      }
      static GetTopPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] - LH[1], BH.normal.y = LH[7] - LH[5], BH.normal.z = LH[11] - LH[9], BH.d = LH[15] - LH[13], BH.normalize()
      }
      static GetBottomPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] + LH[1], BH.normal.y = LH[7] + LH[5], BH.normal.z = LH[11] + LH[9], BH.d = LH[15] + LH[13], BH.normalize()
      }
      static GetPlanesToRef(HH, BH) {
        rH.GetNearPlaneToRef(HH, BH[0]), rH.GetFarPlaneToRef(HH, BH[1]), rH.GetLeftPlaneToRef(HH, BH[2]), rH.GetRightPlaneToRef(HH, BH[3]), rH.GetTopPlaneToRef(HH, BH[4]), rH.GetBottomPlaneToRef(HH, BH[5])
      }
      static IsPointInFrustum(HH, BH) {
        for (let LH = 0; LH < 6; LH++)
          if (BH[LH].dotCoordinate(HH) < 0) return !1;
        return !0
      }
    }
  },
  38619: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH
    });
    var AH = LH(37963);
    class rH {
      constructor(HH, BH, LH, rH) {
        this.normal = new AH.o(HH, BH, LH), this.d = rH
      }
      xrH() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new rH(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let HH = this.normal.getHashCode();
        return HH = 397 * HH ^ this.d, HH
      }
      normalize() {
        const HH = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let BH = 0;
        return 0 !== HH && (BH = 1 / HH), this.normal.x *= BH, this.normal.y *= BH, this.normal.z *= BH, this.d *= BH, this
      }
      transform(HH) {
        const BH = rH._TmpMatrix;
        HH.invertToRef(BH);
        const LH = BH.m,
          AH = this.normal.x,
          SH = this.normal.y,
          hH = this.normal.z,
          tH = this.d,
          zH = AH * LH[0] + SH * LH[1] + hH * LH[2] + tH * LH[3],
          CH = AH * LH[4] + SH * LH[5] + hH * LH[6] + tH * LH[7],
          EH = AH * LH[8] + SH * LH[9] + hH * LH[10] + tH * LH[11],
          XH = AH * LH[12] + SH * LH[13] + hH * LH[14] + tH * LH[15];
        return new rH(zH, CH, EH, XH)
      }
      dotCoordinate(HH) {
        return this.normal.x * HH.x + this.normal.y * HH.y + this.normal.z * HH.z + this.d
      }
      copyFromPoints(HH, BH, LH) {
        const AH = BH.x - HH.x,
          rH = BH.y - HH.y,
          SH = BH.z - HH.z,
          hH = LH.x - HH.x,
          tH = LH.y - HH.y,
          zH = LH.z - HH.z,
          CH = rH * zH - SH * tH,
          EH = SH * hH - AH * zH,
          XH = AH * tH - rH * hH,
          GH = Math.sqrt(CH * CH + EH * EH + XH * XH);
        let YH;
        return YH = 0 !== GH ? 1 / GH : 0, this.normal.x = CH * YH, this.normal.y = EH * YH, this.normal.z = XH * YH, this.d = -(this.normal.x * HH.x + this.normal.y * HH.y + this.normal.z * HH.z), this
      }
      isFrontFacingTo(HH, BH) {
        return AH.o.Dot(this.normal, HH) <= BH
      }
      signedDistanceTo(HH) {
        return AH.o.Dot(HH, this.normal) + this.d
      }
      static FromArray(HH) {
        return new rH(HH[0], HH[1], HH[2], HH[3])
      }
      static FromPoints(HH, BH, LH) {
        const AH = new rH(0, 0, 0, 0);
        return AH.copyFromPoints(HH, BH, LH), AH
      }
      static FromPositionAndNormal(HH, BH) {
        const LH = new rH(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(HH, BH, LH)
      }
      static FromPositionAndNormalToRef(HH, BH, LH) {
        return LH.normal.Tm(BH), LH.normal.normalize(), LH.d = -HH.dot(LH.normal), LH
      }
      static SignedDistanceToPlaneFromPositionAndNormal(HH, BH, LH) {
        const rH = -(BH.x * HH.x + BH.y * HH.y + BH.z * HH.z);
        return AH.o.Dot(LH, BH) + rH
      }
    }
    rH._TmpMatrix = AH.e.Identity()
  },
  39588: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH
    });
    var AH = LH(39595);
    const rH = (HH, BH, LH) => HH ? HH.getClassName && "Mesh" === HH.getClassName() ? null : !HH.getClassName || "SubMesh" !== HH.getClassName() && "PhysicsBody" !== HH.getClassName() ? HH.clone ? HH.clone() : Array.isArray(HH) ? HH.slice() : LH && "object" === typeof HH ? {
      ...HH
    } : null : HH.clone(BH) : null;
    class SH {
      static DeepCopy(HH, BH, LH, SH) {
        let hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const tH = function(HH) {
          const BH = [];
          do {
            const LH = Object.getOwnPropertyNames(HH);
            for (const HH of LH) - 1 === BH.indexOf(HH) && BH.push(HH)
          } while (HH = Object.getPrototypeOf(HH));
          return BH
        }(HH);
        for (const CH of tH) {
          if ("_" === CH[0] && (!SH || -1 === SH.indexOf(CH))) continue;
          if (CH.endsWith("Observable")) continue;
          if (LH && -1 !== LH.indexOf(CH)) continue;
          const tH = HH[CH],
            EH = typeof tH;
          if ("function" !== EH) try {
            if ("object" === EH)
              if (tH instanceof Uint8Array) BH[CH] = Uint8Array.from(tH);
              else if (tH instanceof Array) {
              if (BH[CH] = [], tH.length > 0)
                if ("object" == typeof tH[0])
                  for (let HH = 0; HH < tH.length; HH++) {
                    const LH = rH(tH[HH], BH, hH); - 1 === BH[CH].indexOf(LH) && BH[CH].push(LH)
                  } else BH[CH] = tH.slice(0)
            } else BH[CH] = rH(tH, BH, hH);
            else BH[CH] = tH
          } catch (zH) {
            AH.e.Warn(zH.message)
          }
        }
      }
    }
  },
  38790: (HH, BH, LH) => {
    function AH() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (HH => {
        const BH = 16 * Math.random() | 0;
        return ("x" === HH ? BH : 3 & BH | 8).toString(16)
      }))
    }
    LH.d(BH, {
      e: () => AH
    })
  },
  39595: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH
    });
    class AH {
      static _CheckLimit(HH, BH) {
        let LH = AH._LogLimitOutputs[HH];
        return LH ? LH.current++ : (LH = {
          limit: BH,
          current: 1
        }, AH._LogLimitOutputs[HH] = LH), LH.current <= LH.limit
      }
      static _GenerateLimitMessage(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const LH = AH._LogLimitOutputs[HH];
        if (!LH || !AH.MessageLimitReached) return;
        const rH = this._Levels[BH];
        LH.current === LH.limit && AH[rH.name](AH.MessageLimitReached.replace(/%LIMIT%/g, "" + LH.limit).replace(/%TYPE%/g, rH.name ?? ""))
      }
      static _AddLogEntry(HH) {
        AH._LogCache = HH + AH._LogCache, AH.OnNewCacheEntry && AH.OnNewCacheEntry(HH)
      }
      static _FormatMessage(HH) {
        const BH = HH => HH < 10 ? "0" + HH : "" + HH,
          LH = new Date;
        return "[" + BH(LH.getHours()) + ":" + BH(LH.getMinutes()) + ":" + BH(LH.getSeconds()) + "]: " + HH
      }
      static _LogDisabled(HH, BH) {}
      static _LogEnabled() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          BH = arguments.length > 1 ? arguments[1] : void 0,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        const rH = Array.isArray(BH) ? BH[0] : BH;
        if (void 0 !== LH && !AH._CheckLimit(rH, LH)) return;
        const SH = AH._FormatMessage(rH),
          hH = this._Levels[HH],
          tH = Array.isArray(BH) ? BH.slice(1) : [];
        hH.logFunc && hH.logFunc("BJS - " + SH, ...tH);
        const zH = `<div style='color:${hH.color}'>${SH}</div><br>`;
        AH._AddLogEntry(zH), AH._GenerateLimitMessage(rH, HH)
      }
      static get LogCache() {
        return AH._LogCache
      }
      static ClearLogCache() {
        AH._LogCache = "", AH._LogLimitOutputs = {}, AH.errorsCount = 0
      }
      static set LogLevels(HH) {
        AH.Log = AH._LogDisabled, AH.Warn = AH._LogDisabled, AH.Error = AH._LogDisabled;
        const BH = [AH.MessageLogLevel, AH.WarningLogLevel, AH.ErrorLogLevel];
        for (const LH of BH)
          if ((HH & LH) === LH) {
            const HH = this._Levels[LH];
            AH[HH.name] = AH._LogEnabled.bind(AH, LH)
          }
      }
    }
    AH.NoneLogLevel = 0, AH.MessageLogLevel = 1, AH.WarningLogLevel = 2, AH.ErrorLogLevel = 4, AH.AllLogLevel = 7, AH.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", AH._LogCache = "", AH._LogLimitOutputs = {}, AH._Levels = [{}, {
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
    }], AH.errorsCount = 0, AH.Log = AH._LogEnabled.bind(AH, AH.MessageLogLevel), AH.Warn = AH._LogEnabled.bind(AH, AH.WarningLogLevel), AH.Error = AH._LogEnabled.bind(AH, AH.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);