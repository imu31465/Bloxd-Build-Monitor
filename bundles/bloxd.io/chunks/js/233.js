export const id = 233;
export const ids = [233];
export const modules = {
  37632: (TT, kT, cT) => {
    cT.d(kT, {
      c: () => MT
    });
    var lT = cT(37637);
    class MT {
      static GetPlanes(TT) {
        const kT = [];
        for (let cT = 0; cT < 6; cT++) kT.push(new lT.e(0, 0, 0, 0));
        return MT.GetPlanesToRef(TT, kT), kT
      }
      static GetNearPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] + cT[2], kT.normal.y = cT[7] + cT[6], kT.normal.z = cT[11] + cT[10], kT.d = cT[15] + cT[14], kT.normalize()
      }
      static GetFarPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] - cT[2], kT.normal.y = cT[7] - cT[6], kT.normal.z = cT[11] - cT[10], kT.d = cT[15] - cT[14], kT.normalize()
      }
      static GetLeftPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] + cT[0], kT.normal.y = cT[7] + cT[4], kT.normal.z = cT[11] + cT[8], kT.d = cT[15] + cT[12], kT.normalize()
      }
      static GetRightPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] - cT[0], kT.normal.y = cT[7] - cT[4], kT.normal.z = cT[11] - cT[8], kT.d = cT[15] - cT[12], kT.normalize()
      }
      static GetTopPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] - cT[1], kT.normal.y = cT[7] - cT[5], kT.normal.z = cT[11] - cT[9], kT.d = cT[15] - cT[13], kT.normalize()
      }
      static GetBottomPlaneToRef(TT, kT) {
        const cT = TT.m;
        kT.normal.x = cT[3] + cT[1], kT.normal.y = cT[7] + cT[5], kT.normal.z = cT[11] + cT[9], kT.d = cT[15] + cT[13], kT.normalize()
      }
      static GetPlanesToRef(TT, kT) {
        MT.GetNearPlaneToRef(TT, kT[0]), MT.GetFarPlaneToRef(TT, kT[1]), MT.GetLeftPlaneToRef(TT, kT[2]), MT.GetRightPlaneToRef(TT, kT[3]), MT.GetTopPlaneToRef(TT, kT[4]), MT.GetBottomPlaneToRef(TT, kT[5])
      }
      static IsPointInFrustum(TT, kT) {
        for (let cT = 0; cT < 6; cT++)
          if (kT[cT].dotCoordinate(TT) < 0) return !1;
        return !0
      }
    }
  },
  37637: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => MT
    });
    var lT = cT(36892);
    class MT {
      constructor(TT, kT, cT, MT) {
        this.normal = new lT.m(TT, kT, cT), this.d = MT
      }
      acT() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new MT(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let kT = 0;
        return 0 !== TT && (kT = 1 / TT), this.normal.x *= kT, this.normal.y *= kT, this.normal.z *= kT, this.d *= kT, this
      }
      transform(TT) {
        const kT = MT._TmpMatrix;
        TT.invertToRef(kT);
        const cT = kT.m,
          lT = this.normal.x,
          KT = this.normal.y,
          OT = this.normal.z,
          yT = this.d,
          fT = lT * cT[0] + KT * cT[1] + OT * cT[2] + yT * cT[3],
          xT = lT * cT[4] + KT * cT[5] + OT * cT[6] + yT * cT[7],
          IT = lT * cT[8] + KT * cT[9] + OT * cT[10] + yT * cT[11],
          AT = lT * cT[12] + KT * cT[13] + OT * cT[14] + yT * cT[15];
        return new MT(fT, xT, IT, AT)
      }
      dotCoordinate(TT) {
        return this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z + this.d
      }
      copyFromPoints(TT, kT, cT) {
        const lT = kT.x - TT.x,
          MT = kT.y - TT.y,
          KT = kT.z - TT.z,
          OT = cT.x - TT.x,
          yT = cT.y - TT.y,
          fT = cT.z - TT.z,
          xT = MT * fT - KT * yT,
          IT = KT * OT - lT * fT,
          AT = lT * yT - MT * OT,
          CT = Math.sqrt(xT * xT + IT * IT + AT * AT);
        let jT;
        return jT = 0 !== CT ? 1 / CT : 0, this.normal.x = xT * jT, this.normal.y = IT * jT, this.normal.z = AT * jT, this.d = -(this.normal.x * TT.x + this.normal.y * TT.y + this.normal.z * TT.z), this
      }
      isFrontFacingTo(TT, kT) {
        return lT.m.Dot(this.normal, TT) <= kT
      }
      signedDistanceTo(TT) {
        return lT.m.Dot(TT, this.normal) + this.d
      }
      static FromArray(TT) {
        return new MT(TT[0], TT[1], TT[2], TT[3])
      }
      static FromPoints(TT, kT, cT) {
        const lT = new MT(0, 0, 0, 0);
        return lT.copyFromPoints(TT, kT, cT), lT
      }
      static FromPositionAndNormal(TT, kT) {
        const cT = new MT(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(TT, kT, cT)
      }
      static FromPositionAndNormalToRef(TT, kT, cT) {
        return cT.normal.UkT(kT), cT.normal.normalize(), cT.d = -TT.dot(cT.normal), cT
      }
      static SignedDistanceToPlaneFromPositionAndNormal(TT, kT, cT) {
        const MT = -(kT.x * TT.x + kT.y * TT.y + kT.z * TT.z);
        return lT.m.Dot(cT, kT) + MT
      }
    }
    MT._TmpMatrix = lT.d.Identity()
  },
  38507: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT
    });
    var lT = cT(38512);
    const MT = (TT, kT, cT) => TT ? TT.getClassName && "Mesh" === TT.getClassName() ? null : !TT.getClassName || "SubMesh" !== TT.getClassName() && "PhysicsBody" !== TT.getClassName() ? TT.clone ? TT.clone() : Array.isArray(TT) ? TT.slice() : cT && "object" === typeof TT ? {
      ...TT
    } : null : TT.clone(kT) : null;
    class KT {
      static DeepCopy(TT, kT, cT, KT) {
        let OT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const yT = function(TT) {
          const kT = [];
          do {
            const cT = Object.getOwnPropertyNames(TT);
            for (const TT of cT) - 1 === kT.indexOf(TT) && kT.push(TT)
          } while (TT = Object.getPrototypeOf(TT));
          return kT
        }(TT);
        for (const xT of yT) {
          if ("_" === xT[0] && (!KT || -1 === KT.indexOf(xT))) continue;
          if (xT.endsWith("Observable")) continue;
          if (cT && -1 !== cT.indexOf(xT)) continue;
          const yT = TT[xT],
            IT = typeof yT;
          if ("function" !== IT) try {
            if ("object" === IT)
              if (yT instanceof Uint8Array) kT[xT] = Uint8Array.from(yT);
              else if (yT instanceof Array) {
              if (kT[xT] = [], yT.length > 0)
                if ("object" == typeof yT[0])
                  for (let TT = 0; TT < yT.length; TT++) {
                    const cT = MT(yT[TT], kT, OT); - 1 === kT[xT].indexOf(cT) && kT[xT].push(cT)
                  } else kT[xT] = yT.slice(0)
            } else kT[xT] = MT(yT, kT, OT);
            else kT[xT] = yT
          } catch (fT) {
            lT.e.Warn(fT.message)
          }
        }
      }
    }
  },
  37760: (TT, kT, cT) => {
    function lT() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (TT => {
        const kT = 16 * Math.random() | 0;
        return ("x" === TT ? kT : 3 & kT | 8).toString(16)
      }))
    }
    cT.d(kT, {
      c: () => lT
    })
  },
  38512: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT
    });
    class lT {
      static _CheckLimit(TT, kT) {
        let cT = lT._LogLimitOutputs[TT];
        return cT ? cT.current++ : (cT = {
          limit: kT,
          current: 1
        }, lT._LogLimitOutputs[TT] = cT), cT.current <= cT.limit
      }
      static _GenerateLimitMessage(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const cT = lT._LogLimitOutputs[TT];
        if (!cT || !lT.MessageLimitReached) return;
        const MT = this._Levels[kT];
        cT.current === cT.limit && lT[MT.name](lT.MessageLimitReached.replace(/%LIMIT%/g, "" + cT.limit).replace(/%TYPE%/g, MT.name ?? ""))
      }
      static _AddLogEntry(TT) {
        lT._LogCache = TT + lT._LogCache, lT.OnNewCacheEntry && lT.OnNewCacheEntry(TT)
      }
      static _FormatMessage(TT) {
        const kT = TT => TT < 10 ? "0" + TT : "" + TT,
          cT = new Date;
        return "[" + kT(cT.getHours()) + ":" + kT(cT.getMinutes()) + ":" + kT(cT.getSeconds()) + "]: " + TT
      }
      static _LogDisabled(TT, kT) {}
      static _LogEnabled() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          kT = arguments.length > 1 ? arguments[1] : void 0,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        const MT = Array.isArray(kT) ? kT[0] : kT;
        if (void 0 !== cT && !lT._CheckLimit(MT, cT)) return;
        const KT = lT._FormatMessage(MT),
          OT = this._Levels[TT],
          yT = Array.isArray(kT) ? kT.slice(1) : [];
        OT.logFunc && OT.logFunc("BJS - " + KT, ...yT);
        const fT = `<div style='color:${OT.color}'>${KT}</div><br>`;
        lT._AddLogEntry(fT), lT._GenerateLimitMessage(MT, TT)
      }
      static get LogCache() {
        return lT._LogCache
      }
      static ClearLogCache() {
        lT._LogCache = "", lT._LogLimitOutputs = {}, lT.errorsCount = 0
      }
      static set LogLevels(TT) {
        lT.Log = lT._LogDisabled, lT.Warn = lT._LogDisabled, lT.Error = lT._LogDisabled;
        const kT = [lT.MessageLogLevel, lT.WarningLogLevel, lT.ErrorLogLevel];
        for (const cT of kT)
          if ((TT & cT) === cT) {
            const TT = this._Levels[cT];
            lT[TT.name] = lT._LogEnabled.bind(lT, cT)
          }
      }
    }
    lT.NoneLogLevel = 0, lT.MessageLogLevel = 1, lT.WarningLogLevel = 2, lT.ErrorLogLevel = 4, lT.AllLogLevel = 7, lT.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", lT._LogCache = "", lT._LogLimitOutputs = {}, lT._Levels = [{}, {
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
    }], lT.errorsCount = 0, lT.Log = lT._LogEnabled.bind(lT, lT.MessageLogLevel), lT.Warn = lT._LogEnabled.bind(lT, lT.WarningLogLevel), lT.Error = lT._LogEnabled.bind(lT, lT.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);