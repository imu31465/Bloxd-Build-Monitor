export const id = 228;
export const ids = [228];
export const modules = {
  36710: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT
    });
    var iT = IT(36717);
    class zT {
      static GetPlanes(TT) {
        const oT = [];
        for (let IT = 0; IT < 6; IT++) oT.push(new iT.b(0, 0, 0, 0));
        return zT.GetPlanesToRef(TT, oT), oT
      }
      static GetNearPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] + IT[2], oT.normal.y = IT[7] + IT[6], oT.normal.z = IT[11] + IT[10], oT.d = IT[15] + IT[14], oT.normalize()
      }
      static GetFarPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] - IT[2], oT.normal.y = IT[7] - IT[6], oT.normal.z = IT[11] - IT[10], oT.d = IT[15] - IT[14], oT.normalize()
      }
      static GetLeftPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] + IT[0], oT.normal.y = IT[7] + IT[4], oT.normal.z = IT[11] + IT[8], oT.d = IT[15] + IT[12], oT.normalize()
      }
      static GetRightPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] - IT[0], oT.normal.y = IT[7] - IT[4], oT.normal.z = IT[11] - IT[8], oT.d = IT[15] - IT[12], oT.normalize()
      }
      static GetTopPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] - IT[1], oT.normal.y = IT[7] - IT[5], oT.normal.z = IT[11] - IT[9], oT.d = IT[15] - IT[13], oT.normalize()
      }
      static GetBottomPlaneToRef(TT, oT) {
        const IT = TT.m;
        oT.normal.x = IT[3] + IT[1], oT.normal.y = IT[7] + IT[5], oT.normal.z = IT[11] + IT[9], oT.d = IT[15] + IT[13], oT.normalize()
      }
      static GetPlanesToRef(TT, oT) {
        zT.GetNearPlaneToRef(TT, oT[0]), zT.GetFarPlaneToRef(TT, oT[1]), zT.GetLeftPlaneToRef(TT, oT[2]), zT.GetRightPlaneToRef(TT, oT[3]), zT.GetTopPlaneToRef(TT, oT[4]), zT.GetBottomPlaneToRef(TT, oT[5])
      }
      static IsPointInFrustum(TT, oT) {
        for (let IT = 0; IT < 6; IT++)
          if (oT[IT].dotCoordinate(TT) < 0) return !1;
        return !0
      }
    }
  },
  36717: (TT, oT, IT) => {
    IT.d(oT, {
      b: () => zT
    });
    var iT = IT(36118);
    class zT {
      constructor(TT, oT, IT, zT) {
        this.normal = new iT.m(TT, oT, IT), this.d = zT
      }
      bIT() {
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
        let oT = 0;
        return 0 !== TT && (oT = 1 / TT), this.normal.x *= oT, this.normal.y *= oT, this.normal.z *= oT, this.d *= oT, this
      }
      transform(TT) {
        const oT = zT._TmpMatrix;
        TT.invertToRef(oT);
        const IT = oT.m,
          iT = this.normal.x,
          kT = this.normal.y,
          WT = this.normal.z,
          XT = this.d,
          BT = iT * IT[0] + kT * IT[1] + WT * IT[2] + XT * IT[3],
          FT = iT * IT[4] + kT * IT[5] + WT * IT[6] + XT * IT[7],
          ST = iT * IT[8] + kT * IT[9] + WT * IT[10] + XT * IT[11],
          DT = iT * IT[12] + kT * IT[13] + WT * IT[14] + XT * IT[15];
        return new zT(BT, FT, ST, DT)
      }
      dotCoordinate(TT) {
        return this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z + this.d
      }
      copyFromPoints(TT, oT, IT) {
        const iT = oT.x - TT.x,
          zT = oT.y - TT.y,
          kT = oT.z - TT.z,
          WT = IT.x - TT.x,
          XT = IT.y - TT.y,
          BT = IT.z - TT.z,
          FT = zT * BT - kT * XT,
          ST = kT * WT - iT * BT,
          DT = iT * XT - zT * WT,
          LT = Math.sqrt(FT * FT + ST * ST + DT * DT);
        let xT;
        return xT = 0 !== LT ? 1 / LT : 0, this.normal.x = FT * xT, this.normal.y = ST * xT, this.normal.z = DT * xT, this.d = -(this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z), this
      }
      isFrontFacingTo(TT, oT) {
        return iT.m.Dot(this.normal, TT) <= oT
      }
      signedDistanceTo(TT) {
        return iT.m.Dot(TT, this.normal) + this.d
      }
      static FromArray(TT) {
        return new zT(TT[0], TT[1], TT[2], TT[3])
      }
      static FromPoints(TT, oT, IT) {
        const iT = new zT(0, 0, 0, 0);
        return iT.copyFromPoints(TT, oT, IT), iT
      }
      static FromPositionAndNormal(TT, oT) {
        const IT = new zT(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(TT, oT, IT)
      }
      static FromPositionAndNormalToRef(TT, oT, IT) {
        return IT.normal.SIT(oT), IT.normal.normalize(), IT.d = -TT.dot(IT.normal), IT
      }
      static SignedDistanceToPlaneFromPositionAndNormal(TT, oT, IT) {
        const zT = -(oT.x * TT.x + oT.y * TT.y + oT.z * TT.z);
        return iT.m.Dot(IT, oT) + zT
      }
    }
    zT._TmpMatrix = iT.b.Identity()
  },
  37658: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT
    });
    var iT = IT(37660);
    const zT = (TT, oT, IT) => TT ? TT.getClassName && "Mesh" === TT.getClassName() ? null : !TT.getClassName || "SubMesh" !== TT.getClassName() && "PhysicsBody" !== TT.getClassName() ? TT.clone ? TT.clone() : Array.isArray(TT) ? TT.slice() : IT && "object" === typeof TT ? {
      ...TT
    } : null : TT.clone(oT) : null;
    class kT {
      static DeepCopy(TT, oT, IT, kT) {
        let WT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const XT = function(TT) {
          const oT = [];
          do {
            const IT = Object.getOwnPropertyNames(TT);
            for (const TT of IT) - 1 === oT.indexOf(TT) && oT.push(TT)
          } while (TT = Object.getPrototypeOf(TT));
          return oT
        }(TT);
        for (const FT of XT) {
          if ("_" === FT[0] && (!kT || -1 === kT.indexOf(FT))) continue;
          if (FT.endsWith("Observable")) continue;
          if (IT && -1 !== IT.indexOf(FT)) continue;
          const XT = TT[FT],
            ST = typeof XT;
          if ("function" !== ST) try {
            if ("object" === ST)
              if (XT instanceof Uint8Array) oT[FT] = Uint8Array.from(XT);
              else if (XT instanceof Array) {
              if (oT[FT] = [], XT.length > 0)
                if ("object" == typeof XT[0])
                  for (let TT = 0; TT < XT.length; TT++) {
                    const IT = zT(XT[TT], oT, WT); - 1 === oT[FT].indexOf(IT) && oT[FT].push(IT)
                  } else oT[FT] = XT.slice(0)
            } else oT[FT] = zT(XT, oT, WT);
            else oT[FT] = XT
          } catch (BT) {
            iT.d.Warn(BT.message)
          }
        }
      }
    }
  },
  36851: (TT, oT, IT) => {
    function iT() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (TT => {
        const oT = 16 * Math.random() | 0;
        return ("x" === TT ? oT : 3 & oT | 8).toString(16)
      }))
    }
    IT.d(oT, {
      e: () => iT
    })
  },
  37660: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT
    });
    class iT {
      static _CheckLimit(TT, oT) {
        let IT = iT._LogLimitOutputs[TT];
        return IT ? IT.current++ : (IT = {
          limit: oT,
          current: 1
        }, iT._LogLimitOutputs[TT] = IT), IT.current <= IT.limit
      }
      static _GenerateLimitMessage(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const IT = iT._LogLimitOutputs[TT];
        if (!IT || !iT.MessageLimitReached) return;
        const zT = this._Levels[oT];
        IT.current === IT.limit && iT[zT.name](iT.MessageLimitReached.replace(/%LIMIT%/g, "" + IT.limit).replace(/%TYPE%/g, zT.name ?? ""))
      }
      static _AddLogEntry(TT) {
        iT._LogCache = TT + iT._LogCache, iT.OnNewCacheEntry && iT.OnNewCacheEntry(TT)
      }
      static _FormatMessage(TT) {
        const oT = TT => TT < 10 ? "0" + TT : "" + TT,
          IT = new Date;
        return "[" + oT(IT.getHours()) + ":" + oT(IT.getMinutes()) + ":" + oT(IT.getSeconds()) + "]: " + TT
      }
      static _LogDisabled(TT, oT) {}
      static _LogEnabled() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          oT = arguments.length > 1 ? arguments[1] : void 0,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        const zT = Array.isArray(oT) ? oT[0] : oT;
        if (void 0 !== IT && !iT._CheckLimit(zT, IT)) return;
        const kT = iT._FormatMessage(zT),
          WT = this._Levels[TT],
          XT = Array.isArray(oT) ? oT.slice(1) : [];
        WT.logFunc && WT.logFunc("BJS - " + kT, ...XT);
        const BT = `<div style='color:${WT.color}'>${kT}</div><br>`;
        iT._AddLogEntry(BT), iT._GenerateLimitMessage(zT, TT)
      }
      static get LogCache() {
        return iT._LogCache
      }
      static ClearLogCache() {
        iT._LogCache = "", iT._LogLimitOutputs = {}, iT.errorsCount = 0
      }
      static set LogLevels(TT) {
        iT.Log = iT._LogDisabled, iT.Warn = iT._LogDisabled, iT.Error = iT._LogDisabled;
        const oT = [iT.MessageLogLevel, iT.WarningLogLevel, iT.ErrorLogLevel];
        for (const IT of oT)
          if ((TT & IT) === IT) {
            const TT = this._Levels[IT];
            iT[TT.name] = iT._LogEnabled.bind(iT, IT)
          }
      }
    }
    iT.NoneLogLevel = 0, iT.MessageLogLevel = 1, iT.WarningLogLevel = 2, iT.ErrorLogLevel = 4, iT.AllLogLevel = 7, iT.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", iT._LogCache = "", iT._LogLimitOutputs = {}, iT._Levels = [{}, {
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
    }], iT.errorsCount = 0, iT.Log = iT._LogEnabled.bind(iT, iT.MessageLogLevel), iT.Warn = iT._LogEnabled.bind(iT, iT.WarningLogLevel), iT.Error = iT._LogEnabled.bind(iT, iT.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);