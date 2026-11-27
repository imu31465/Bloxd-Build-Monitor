export const id = 272;
export const ids = [272];
export const modules = {
  38937: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW
    });
    var mW = OW(38939);
    class EW {
      static GetPlanes(WW) {
        const iW = [];
        for (let OW = 0; OW < 6; OW++) iW.push(new mW.c(0, 0, 0, 0));
        return EW.GetPlanesToRef(WW, iW), iW
      }
      static GetNearPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] + OW[2], iW.normal.y = OW[7] + OW[6], iW.normal.z = OW[11] + OW[10], iW.d = OW[15] + OW[14], iW.normalize()
      }
      static GetFarPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] - OW[2], iW.normal.y = OW[7] - OW[6], iW.normal.z = OW[11] - OW[10], iW.d = OW[15] - OW[14], iW.normalize()
      }
      static GetLeftPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] + OW[0], iW.normal.y = OW[7] + OW[4], iW.normal.z = OW[11] + OW[8], iW.d = OW[15] + OW[12], iW.normalize()
      }
      static GetRightPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] - OW[0], iW.normal.y = OW[7] - OW[4], iW.normal.z = OW[11] - OW[8], iW.d = OW[15] - OW[12], iW.normalize()
      }
      static GetTopPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] - OW[1], iW.normal.y = OW[7] - OW[5], iW.normal.z = OW[11] - OW[9], iW.d = OW[15] - OW[13], iW.normalize()
      }
      static GetBottomPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] + OW[1], iW.normal.y = OW[7] + OW[5], iW.normal.z = OW[11] + OW[9], iW.d = OW[15] + OW[13], iW.normalize()
      }
      static GetPlanesToRef(WW, iW) {
        EW.GetNearPlaneToRef(WW, iW[0]), EW.GetFarPlaneToRef(WW, iW[1]), EW.GetLeftPlaneToRef(WW, iW[2]), EW.GetRightPlaneToRef(WW, iW[3]), EW.GetTopPlaneToRef(WW, iW[4]), EW.GetBottomPlaneToRef(WW, iW[5])
      }
      static IsPointInFrustum(WW, iW) {
        for (let OW = 0; OW < 6; OW++)
          if (iW[OW].dotCoordinate(WW) < 0) return !1;
        return !0
      }
    }
  },
  38939: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => EW
    });
    var mW = OW(38241);
    class EW {
      constructor(WW, iW, OW, EW) {
        this.normal = new mW.q(WW, iW, OW), this.d = EW
      }
      wEW() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new EW(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let WW = this.normal.getHashCode();
        return WW = 397 * WW ^ this.d, WW
      }
      normalize() {
        const WW = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let iW = 0;
        return 0 !== WW && (iW = 1 / WW), this.normal.x *= iW, this.normal.y *= iW, this.normal.z *= iW, this.d *= iW, this
      }
      transform(WW) {
        const iW = EW._TmpMatrix;
        WW.invertToRef(iW);
        const OW = iW.m,
          mW = this.normal.x,
          NW = this.normal.y,
          PW = this.normal.z,
          LW = this.d,
          cW = mW * OW[0] + NW * OW[1] + PW * OW[2] + LW * OW[3],
          wW = mW * OW[4] + NW * OW[5] + PW * OW[6] + LW * OW[7],
          tW = mW * OW[8] + NW * OW[9] + PW * OW[10] + LW * OW[11],
          ZW = mW * OW[12] + NW * OW[13] + PW * OW[14] + LW * OW[15];
        return new EW(cW, wW, tW, ZW)
      }
      dotCoordinate(WW) {
        return this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z + this.d
      }
      copyFromPoints(WW, iW, OW) {
        const mW = iW.x - WW.x,
          EW = iW.y - WW.y,
          NW = iW.z - WW.z,
          PW = OW.x - WW.x,
          LW = OW.y - WW.y,
          cW = OW.z - WW.z,
          wW = EW * cW - NW * LW,
          tW = NW * PW - mW * cW,
          ZW = mW * LW - EW * PW,
          xW = Math.sqrt(wW * wW + tW * tW + ZW * ZW);
        let lW;
        return lW = 0 !== xW ? 1 / xW : 0, this.normal.x = wW * lW, this.normal.y = tW * lW, this.normal.z = ZW * lW, this.d = -(this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z), this
      }
      isFrontFacingTo(WW, iW) {
        return mW.q.Dot(this.normal, WW) <= iW
      }
      signedDistanceTo(WW) {
        return mW.q.Dot(WW, this.normal) + this.d
      }
      static FromArray(WW) {
        return new EW(WW[0], WW[1], WW[2], WW[3])
      }
      static FromPoints(WW, iW, OW) {
        const mW = new EW(0, 0, 0, 0);
        return mW.copyFromPoints(WW, iW, OW), mW
      }
      static FromPositionAndNormal(WW, iW) {
        const OW = new EW(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(WW, iW, OW)
      }
      static FromPositionAndNormalToRef(WW, iW, OW) {
        return OW.normal.HJ(iW), OW.normal.normalize(), OW.d = -WW.dot(OW.normal), OW
      }
      static SignedDistanceToPlaneFromPositionAndNormal(WW, iW, OW) {
        const EW = -(iW.x * WW.x + iW.y * WW.y + iW.z * WW.z);
        return mW.q.Dot(OW, iW) + EW
      }
    }
    EW._TmpMatrix = mW.d.Identity()
  },
  39908: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW
    });
    var mW = OW(39911);
    const EW = (WW, iW, OW) => WW ? WW.getClassName && "Mesh" === WW.getClassName() ? null : !WW.getClassName || "SubMesh" !== WW.getClassName() && "PhysicsBody" !== WW.getClassName() ? WW.clone ? WW.clone() : Array.isArray(WW) ? WW.slice() : OW && "object" === typeof WW ? {
      ...WW
    } : null : WW.clone(iW) : null;
    class NW {
      static DeepCopy(WW, iW, OW, NW) {
        let PW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const LW = function(WW) {
          const iW = [];
          do {
            const OW = Object.getOwnPropertyNames(WW);
            for (const WW of OW) - 1 === iW.indexOf(WW) && iW.push(WW)
          } while (WW = Object.getPrototypeOf(WW));
          return iW
        }(WW);
        for (const wW of LW) {
          if ("_" === wW[0] && (!NW || -1 === NW.indexOf(wW))) continue;
          if (wW.endsWith("Observable")) continue;
          if (OW && -1 !== OW.indexOf(wW)) continue;
          const LW = WW[wW],
            tW = typeof LW;
          if ("function" !== tW) try {
            if ("object" === tW)
              if (LW instanceof Uint8Array) iW[wW] = Uint8Array.from(LW);
              else if (LW instanceof Array) {
              if (iW[wW] = [], LW.length > 0)
                if ("object" == typeof LW[0])
                  for (let WW = 0; WW < LW.length; WW++) {
                    const OW = EW(LW[WW], iW, PW); - 1 === iW[wW].indexOf(OW) && iW[wW].push(OW)
                  } else iW[wW] = LW.slice(0)
            } else iW[wW] = EW(LW, iW, PW);
            else iW[wW] = LW
          } catch (cW) {
            mW.b.Warn(cW.message)
          }
        }
      }
    }
  },
  39088: (WW, iW, OW) => {
    function mW() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
        const iW = 16 * Math.random() | 0;
        return ("x" === WW ? iW : 3 & iW | 8).toString(16)
      }))
    }
    OW.d(iW, {
      b: () => mW
    })
  },
  39911: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW
    });
    class mW {
      static _CheckLimit(WW, iW) {
        let OW = mW._LogLimitOutputs[WW];
        return OW ? OW.current++ : (OW = {
          limit: iW,
          current: 1
        }, mW._LogLimitOutputs[WW] = OW), OW.current <= OW.limit
      }
      static _GenerateLimitMessage(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const OW = mW._LogLimitOutputs[WW];
        if (!OW || !mW.MessageLimitReached) return;
        const EW = this._Levels[iW];
        OW.current === OW.limit && mW[EW.name](mW.MessageLimitReached.replace(/%LIMIT%/g, "" + OW.limit).replace(/%TYPE%/g, EW.name ?? ""))
      }
      static _AddLogEntry(WW) {
        mW._LogCache = WW + mW._LogCache, mW.OnNewCacheEntry && mW.OnNewCacheEntry(WW)
      }
      static _FormatMessage(WW) {
        const iW = WW => WW < 10 ? "0" + WW : "" + WW,
          OW = new Date;
        return "[" + iW(OW.getHours()) + ":" + iW(OW.getMinutes()) + ":" + iW(OW.getSeconds()) + "]: " + WW
      }
      static _LogDisabled(WW, iW) {}
      static _LogEnabled() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          iW = arguments.length > 1 ? arguments[1] : void 0,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        const EW = Array.isArray(iW) ? iW[0] : iW;
        if (void 0 !== OW && !mW._CheckLimit(EW, OW)) return;
        const NW = mW._FormatMessage(EW),
          PW = this._Levels[WW],
          LW = Array.isArray(iW) ? iW.slice(1) : [];
        PW.logFunc && PW.logFunc("BJS - " + NW, ...LW);
        const cW = `<div style='color:${PW.color}'>${NW}</div><br>`;
        mW._AddLogEntry(cW), mW._GenerateLimitMessage(EW, WW)
      }
      static get LogCache() {
        return mW._LogCache
      }
      static ClearLogCache() {
        mW._LogCache = "", mW._LogLimitOutputs = {}, mW.errorsCount = 0
      }
      static set LogLevels(WW) {
        mW.Log = mW._LogDisabled, mW.Warn = mW._LogDisabled, mW.Error = mW._LogDisabled;
        const iW = [mW.MessageLogLevel, mW.WarningLogLevel, mW.ErrorLogLevel];
        for (const OW of iW)
          if ((WW & OW) === OW) {
            const WW = this._Levels[OW];
            mW[WW.name] = mW._LogEnabled.bind(mW, OW)
          }
      }
    }
    mW.NoneLogLevel = 0, mW.MessageLogLevel = 1, mW.WarningLogLevel = 2, mW.ErrorLogLevel = 4, mW.AllLogLevel = 7, mW.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", mW._LogCache = "", mW._LogLimitOutputs = {}, mW._Levels = [{}, {
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
    }], mW.errorsCount = 0, mW.Log = mW._LogEnabled.bind(mW, mW.MessageLogLevel), mW.Warn = mW._LogEnabled.bind(mW, mW.WarningLogLevel), mW.Error = mW._LogEnabled.bind(mW, mW.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);