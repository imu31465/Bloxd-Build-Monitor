export const id = 244;
export const ids = [244];
export const modules = {
  37885: (TT, UT, mT) => {
    mT.d(UT, {
      d: () => zT
    });
    var WT = mT(37889);
    class zT {
      static GetPlanes(TT) {
        const UT = [];
        for (let mT = 0; mT < 6; mT++) UT.push(new WT.e(0, 0, 0, 0));
        return zT.GetPlanesToRef(TT, UT), UT
      }
      static GetNearPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] + mT[2], UT.normal.y = mT[7] + mT[6], UT.normal.z = mT[11] + mT[10], UT.d = mT[15] + mT[14], UT.normalize()
      }
      static GetFarPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] - mT[2], UT.normal.y = mT[7] - mT[6], UT.normal.z = mT[11] - mT[10], UT.d = mT[15] - mT[14], UT.normalize()
      }
      static GetLeftPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] + mT[0], UT.normal.y = mT[7] + mT[4], UT.normal.z = mT[11] + mT[8], UT.d = mT[15] + mT[12], UT.normalize()
      }
      static GetRightPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] - mT[0], UT.normal.y = mT[7] - mT[4], UT.normal.z = mT[11] - mT[8], UT.d = mT[15] - mT[12], UT.normalize()
      }
      static GetTopPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] - mT[1], UT.normal.y = mT[7] - mT[5], UT.normal.z = mT[11] - mT[9], UT.d = mT[15] - mT[13], UT.normalize()
      }
      static GetBottomPlaneToRef(TT, UT) {
        const mT = TT.m;
        UT.normal.x = mT[3] + mT[1], UT.normal.y = mT[7] + mT[5], UT.normal.z = mT[11] + mT[9], UT.d = mT[15] + mT[13], UT.normalize()
      }
      static GetPlanesToRef(TT, UT) {
        zT.GetNearPlaneToRef(TT, UT[0]), zT.GetFarPlaneToRef(TT, UT[1]), zT.GetLeftPlaneToRef(TT, UT[2]), zT.GetRightPlaneToRef(TT, UT[3]), zT.GetTopPlaneToRef(TT, UT[4]), zT.GetBottomPlaneToRef(TT, UT[5])
      }
      static IsPointInFrustum(TT, UT) {
        for (let mT = 0; mT < 6; mT++)
          if (UT[mT].dotCoordinate(TT) < 0) return !1;
        return !0
      }
    }
  },
  37889: (TT, UT, mT) => {
    mT.d(UT, {
      e: () => zT
    });
    var WT = mT(37188);
    class zT {
      constructor(TT, UT, mT, zT) {
        this.normal = new WT.p(TT, UT, mT), this.d = zT
      }
      cWT() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new zT(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let TT = this.normal.getHashCode();
        return TT = 397 * TT ^ this.d, TT
      }
      normalize() {
        const TT = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let UT = 0;
        return 0 !== TT && (UT = 1 / TT), this.normal.x *= UT, this.normal.y *= UT, this.normal.z *= UT, this.d *= UT, this
      }
      transform(TT) {
        const UT = zT._TmpMatrix;
        TT.invertToRef(UT);
        const mT = UT.m,
          WT = this.normal.x,
          MT = this.normal.y,
          gT = this.normal.z,
          nT = this.d,
          HT = WT * mT[0] + MT * mT[1] + gT * mT[2] + nT * mT[3],
          kT = WT * mT[4] + MT * mT[5] + gT * mT[6] + nT * mT[7],
          jT = WT * mT[8] + MT * mT[9] + gT * mT[10] + nT * mT[11],
          lT = WT * mT[12] + MT * mT[13] + gT * mT[14] + nT * mT[15];
        return new zT(HT, kT, jT, lT)
      }
      dotCoordinate(TT) {
        return this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z + this.d
      }
      copyFromPoints(TT, UT, mT) {
        const WT = UT.x - TT.x,
          zT = UT.y - TT.y,
          MT = UT.z - TT.z,
          gT = mT.x - TT.x,
          nT = mT.y - TT.y,
          HT = mT.z - TT.z,
          kT = zT * HT - MT * nT,
          jT = MT * gT - WT * HT,
          lT = WT * nT - zT * gT,
          LT = Math.sqrt(kT * kT + jT * jT + lT * lT);
        let pT;
        return pT = 0 !== LT ? 1 / LT : 0, this.normal.x = kT * pT, this.normal.y = jT * pT, this.normal.z = lT * pT, this.d = -(this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z), this
      }
      isFrontFacingTo(TT, UT) {
        return WT.p.Dot(this.normal, TT) <= UT
      }
      signedDistanceTo(TT) {
        return WT.p.Dot(TT, this.normal) + this.d
      }
      static FromArray(TT) {
        return new zT(TT[0], TT[1], TT[2], TT[3])
      }
      static FromPoints(TT, UT, mT) {
        const WT = new zT(0, 0, 0, 0);
        return WT.copyFromPoints(TT, UT, mT), WT
      }
      static FromPositionAndNormal(TT, UT) {
        const mT = new zT(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(TT, UT, mT)
      }
      static FromPositionAndNormalToRef(TT, UT, mT) {
        return mT.normal.Gw(UT), mT.normal.normalize(), mT.d = -TT.dot(mT.normal), mT
      }
      static SignedDistanceToPlaneFromPositionAndNormal(TT, UT, mT) {
        const zT = -(UT.x * TT.x + UT.y * TT.y + UT.z * TT.z);
        return WT.p.Dot(mT, UT) + zT
      }
    }
    zT._TmpMatrix = WT.e.Identity()
  },
  38793: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT
    });
    var WT = mT(38800);
    const zT = (TT, UT, mT) => TT ? TT.getClassName && "Mesh" === TT.getClassName() ? null : !TT.getClassName || "SubMesh" !== TT.getClassName() && "PhysicsBody" !== TT.getClassName() ? TT.clone ? TT.clone() : Array.isArray(TT) ? TT.slice() : mT && "object" === typeof TT ? {
      ...TT
    } : null : TT.clone(UT) : null;
    class MT {
      static DeepCopy(TT, UT, mT, MT) {
        let gT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const nT = function(TT) {
          const UT = [];
          do {
            const mT = Object.getOwnPropertyNames(TT);
            for (const TT of mT) - 1 === UT.indexOf(TT) && UT.push(TT)
          } while (TT = Object.getPrototypeOf(TT));
          return UT
        }(TT);
        for (const kT of nT) {
          if ("_" === kT[0] && (!MT || -1 === MT.indexOf(kT))) continue;
          if (kT.endsWith("Observable")) continue;
          if (mT && -1 !== mT.indexOf(kT)) continue;
          const nT = TT[kT],
            jT = typeof nT;
          if ("function" !== jT) try {
            if ("object" === jT)
              if (nT instanceof Uint8Array) UT[kT] = Uint8Array.from(nT);
              else if (nT instanceof Array) {
              if (UT[kT] = [], nT.length > 0)
                if ("object" == typeof nT[0])
                  for (let TT = 0; TT < nT.length; TT++) {
                    const mT = zT(nT[TT], UT, gT); - 1 === UT[kT].indexOf(mT) && UT[kT].push(mT)
                  } else UT[kT] = nT.slice(0)
            } else UT[kT] = zT(nT, UT, gT);
            else UT[kT] = nT
          } catch (HT) {
            WT.b.Warn(HT.message)
          }
        }
      }
    }
  },
  38045: (TT, UT, mT) => {
    function WT() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (TT => {
        const UT = 16 * Math.random() | 0;
        return ("x" === TT ? UT : 3 & UT | 8).toString(16)
      }))
    }
    mT.d(UT, {
      c: () => WT
    })
  },
  38800: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT
    });
    class WT {
      static _CheckLimit(TT, UT) {
        let mT = WT._LogLimitOutputs[TT];
        return mT ? mT.current++ : (mT = {
          limit: UT,
          current: 1
        }, WT._LogLimitOutputs[TT] = mT), mT.current <= mT.limit
      }
      static _GenerateLimitMessage(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const mT = WT._LogLimitOutputs[TT];
        if (!mT || !WT.MessageLimitReached) return;
        const zT = this._Levels[UT];
        mT.current === mT.limit && WT[zT.name](WT.MessageLimitReached.replace(/%LIMIT%/g, "" + mT.limit).replace(/%TYPE%/g, zT.name ?? ""))
      }
      static _AddLogEntry(TT) {
        WT._LogCache = TT + WT._LogCache, WT.OnNewCacheEntry && WT.OnNewCacheEntry(TT)
      }
      static _FormatMessage(TT) {
        const UT = TT => TT < 10 ? "0" + TT : "" + TT,
          mT = new Date;
        return "[" + UT(mT.getHours()) + ":" + UT(mT.getMinutes()) + ":" + UT(mT.getSeconds()) + "]: " + TT
      }
      static _LogDisabled(TT, UT) {}
      static _LogEnabled() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          UT = arguments.length > 1 ? arguments[1] : void 0,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        const zT = Array.isArray(UT) ? UT[0] : UT;
        if (void 0 !== mT && !WT._CheckLimit(zT, mT)) return;
        const MT = WT._FormatMessage(zT),
          gT = this._Levels[TT],
          nT = Array.isArray(UT) ? UT.slice(1) : [];
        gT.logFunc && gT.logFunc("BJS - " + MT, ...nT);
        const HT = `<div style='color:${gT.color}'>${MT}</div><br>`;
        WT._AddLogEntry(HT), WT._GenerateLimitMessage(zT, TT)
      }
      static get LogCache() {
        return WT._LogCache
      }
      static ClearLogCache() {
        WT._LogCache = "", WT._LogLimitOutputs = {}, WT.errorsCount = 0
      }
      static set LogLevels(TT) {
        WT.Log = WT._LogDisabled, WT.Warn = WT._LogDisabled, WT.Error = WT._LogDisabled;
        const UT = [WT.MessageLogLevel, WT.WarningLogLevel, WT.ErrorLogLevel];
        for (const mT of UT)
          if ((TT & mT) === mT) {
            const TT = this._Levels[mT];
            WT[TT.name] = WT._LogEnabled.bind(WT, mT)
          }
      }
    }
    WT.NoneLogLevel = 0, WT.MessageLogLevel = 1, WT.WarningLogLevel = 2, WT.ErrorLogLevel = 4, WT.AllLogLevel = 7, WT.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", WT._LogCache = "", WT._LogLimitOutputs = {}, WT._Levels = [{}, {
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
    }], WT.errorsCount = 0, WT.Log = WT._LogEnabled.bind(WT, WT.MessageLogLevel), WT.Warn = WT._LogEnabled.bind(WT, WT.WarningLogLevel), WT.Error = WT._LogEnabled.bind(WT, WT.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);