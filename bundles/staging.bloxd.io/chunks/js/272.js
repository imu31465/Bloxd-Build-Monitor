export const id = 272;
export const ids = [272];
export const modules = {
  38928: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR
    });
    var yR = GR(38933);
    class tR {
      static GetPlanes(RR) {
        const JR = [];
        for (let GR = 0; GR < 6; GR++) JR.push(new yR.c(0, 0, 0, 0));
        return tR.GetPlanesToRef(RR, JR), JR
      }
      static GetNearPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] + GR[2], JR.normal.y = GR[7] + GR[6], JR.normal.z = GR[11] + GR[10], JR.d = GR[15] + GR[14], JR.normalize()
      }
      static GetFarPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] - GR[2], JR.normal.y = GR[7] - GR[6], JR.normal.z = GR[11] - GR[10], JR.d = GR[15] - GR[14], JR.normalize()
      }
      static GetLeftPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] + GR[0], JR.normal.y = GR[7] + GR[4], JR.normal.z = GR[11] + GR[8], JR.d = GR[15] + GR[12], JR.normalize()
      }
      static GetRightPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] - GR[0], JR.normal.y = GR[7] - GR[4], JR.normal.z = GR[11] - GR[8], JR.d = GR[15] - GR[12], JR.normalize()
      }
      static GetTopPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] - GR[1], JR.normal.y = GR[7] - GR[5], JR.normal.z = GR[11] - GR[9], JR.d = GR[15] - GR[13], JR.normalize()
      }
      static GetBottomPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] + GR[1], JR.normal.y = GR[7] + GR[5], JR.normal.z = GR[11] + GR[9], JR.d = GR[15] + GR[13], JR.normalize()
      }
      static GetPlanesToRef(RR, JR) {
        tR.GetNearPlaneToRef(RR, JR[0]), tR.GetFarPlaneToRef(RR, JR[1]), tR.GetLeftPlaneToRef(RR, JR[2]), tR.GetRightPlaneToRef(RR, JR[3]), tR.GetTopPlaneToRef(RR, JR[4]), tR.GetBottomPlaneToRef(RR, JR[5])
      }
      static IsPointInFrustum(RR, JR) {
        for (let GR = 0; GR < 6; GR++)
          if (JR[GR].dotCoordinate(RR) < 0) return !1;
        return !0
      }
    }
  },
  38933: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR
    });
    var yR = GR(38204);
    class tR {
      constructor(RR, JR, GR, tR) {
        this.normal = new yR.r(RR, JR, GR), this.d = tR
      }
      QtR() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new tR(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let RR = this.normal.getHashCode();
        return RR = 397 * RR ^ this.d, RR
      }
      normalize() {
        const RR = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let JR = 0;
        return 0 !== RR && (JR = 1 / RR), this.normal.x *= JR, this.normal.y *= JR, this.normal.z *= JR, this.d *= JR, this
      }
      transform(RR) {
        const JR = tR._TmpMatrix;
        RR.invertToRef(JR);
        const GR = JR.m,
          yR = this.normal.x,
          uR = this.normal.y,
          ZR = this.normal.z,
          qR = this.d,
          iR = yR * GR[0] + uR * GR[1] + ZR * GR[2] + qR * GR[3],
          fR = yR * GR[4] + uR * GR[5] + ZR * GR[6] + qR * GR[7],
          VR = yR * GR[8] + uR * GR[9] + ZR * GR[10] + qR * GR[11],
          KR = yR * GR[12] + uR * GR[13] + ZR * GR[14] + qR * GR[15];
        return new tR(iR, fR, VR, KR)
      }
      dotCoordinate(RR) {
        return this.normal.x * RR.x + this.normal.y * RR.y + this.normal.z * RR.z + this.d
      }
      copyFromPoints(RR, JR, GR) {
        const yR = JR.x - RR.x,
          tR = JR.y - RR.y,
          uR = JR.z - RR.z,
          ZR = GR.x - RR.x,
          qR = GR.y - RR.y,
          iR = GR.z - RR.z,
          fR = tR * iR - uR * qR,
          VR = uR * ZR - yR * iR,
          KR = yR * qR - tR * ZR,
          wR = Math.sqrt(fR * fR + VR * VR + KR * KR);
        let rR;
        return rR = 0 !== wR ? 1 / wR : 0, this.normal.x = fR * rR, this.normal.y = VR * rR, this.normal.z = KR * rR, this.d = -(this.normal.x * RR.x + this.normal.y * RR.y + this.normal.z * RR.z), this
      }
      isFrontFacingTo(RR, JR) {
        return yR.r.Dot(this.normal, RR) <= JR
      }
      signedDistanceTo(RR) {
        return yR.r.Dot(RR, this.normal) + this.d
      }
      static FromArray(RR) {
        return new tR(RR[0], RR[1], RR[2], RR[3])
      }
      static FromPoints(RR, JR, GR) {
        const yR = new tR(0, 0, 0, 0);
        return yR.copyFromPoints(RR, JR, GR), yR
      }
      static FromPositionAndNormal(RR, JR) {
        const GR = new tR(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(RR, JR, GR)
      }
      static FromPositionAndNormalToRef(RR, JR, GR) {
        return GR.normal.vN(JR), GR.normal.normalize(), GR.d = -RR.dot(GR.normal), GR
      }
      static SignedDistanceToPlaneFromPositionAndNormal(RR, JR, GR) {
        const tR = -(JR.x * RR.x + JR.y * RR.y + JR.z * RR.z);
        return yR.r.Dot(GR, JR) + tR
      }
    }
    tR._TmpMatrix = yR.e.Identity()
  },
  39912: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR
    });
    var yR = GR(39914);
    const tR = (RR, JR, GR) => RR ? RR.getClassName && "Mesh" === RR.getClassName() ? null : !RR.getClassName || "SubMesh" !== RR.getClassName() && "PhysicsBody" !== RR.getClassName() ? RR.clone ? RR.clone() : Array.isArray(RR) ? RR.slice() : GR && "object" === typeof RR ? {
      ...RR
    } : null : RR.clone(JR) : null;
    class uR {
      static DeepCopy(RR, JR, GR, uR) {
        let ZR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const qR = function(RR) {
          const JR = [];
          do {
            const GR = Object.getOwnPropertyNames(RR);
            for (const RR of GR) - 1 === JR.indexOf(RR) && JR.push(RR)
          } while (RR = Object.getPrototypeOf(RR));
          return JR
        }(RR);
        for (const fR of qR) {
          if ("_" === fR[0] && (!uR || -1 === uR.indexOf(fR))) continue;
          if (fR.endsWith("Observable")) continue;
          if (GR && -1 !== GR.indexOf(fR)) continue;
          const qR = RR[fR],
            VR = typeof qR;
          if ("function" !== VR) try {
            if ("object" === VR)
              if (qR instanceof Uint8Array) JR[fR] = Uint8Array.from(qR);
              else if (qR instanceof Array) {
              if (JR[fR] = [], qR.length > 0)
                if ("object" == typeof qR[0])
                  for (let RR = 0; RR < qR.length; RR++) {
                    const GR = tR(qR[RR], JR, ZR); - 1 === JR[fR].indexOf(GR) && JR[fR].push(GR)
                  } else JR[fR] = qR.slice(0)
            } else JR[fR] = tR(qR, JR, ZR);
            else JR[fR] = qR
          } catch (iR) {
            yR.c.Warn(iR.message)
          }
        }
      }
    }
  },
  39062: (RR, JR, GR) => {
    function yR() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (RR => {
        const JR = 16 * Math.random() | 0;
        return ("x" === RR ? JR : 3 & JR | 8).toString(16)
      }))
    }
    GR.d(JR, {
      c: () => yR
    })
  },
  39914: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    class yR {
      static _CheckLimit(RR, JR) {
        let GR = yR._LogLimitOutputs[RR];
        return GR ? GR.current++ : (GR = {
          limit: JR,
          current: 1
        }, yR._LogLimitOutputs[RR] = GR), GR.current <= GR.limit
      }
      static _GenerateLimitMessage(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const GR = yR._LogLimitOutputs[RR];
        if (!GR || !yR.MessageLimitReached) return;
        const tR = this._Levels[JR];
        GR.current === GR.limit && yR[tR.name](yR.MessageLimitReached.replace(/%LIMIT%/g, "" + GR.limit).replace(/%TYPE%/g, tR.name ?? ""))
      }
      static _AddLogEntry(RR) {
        yR._LogCache = RR + yR._LogCache, yR.OnNewCacheEntry && yR.OnNewCacheEntry(RR)
      }
      static _FormatMessage(RR) {
        const JR = RR => RR < 10 ? "0" + RR : "" + RR,
          GR = new Date;
        return "[" + JR(GR.getHours()) + ":" + JR(GR.getMinutes()) + ":" + JR(GR.getSeconds()) + "]: " + RR
      }
      static _LogDisabled(RR, JR) {}
      static _LogEnabled() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          JR = arguments.length > 1 ? arguments[1] : void 0,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        const tR = Array.isArray(JR) ? JR[0] : JR;
        if (void 0 !== GR && !yR._CheckLimit(tR, GR)) return;
        const uR = yR._FormatMessage(tR),
          ZR = this._Levels[RR],
          qR = Array.isArray(JR) ? JR.slice(1) : [];
        ZR.logFunc && ZR.logFunc("BJS - " + uR, ...qR);
        const iR = `<div style='color:${ZR.color}'>${uR}</div><br>`;
        yR._AddLogEntry(iR), yR._GenerateLimitMessage(tR, RR)
      }
      static get LogCache() {
        return yR._LogCache
      }
      static ClearLogCache() {
        yR._LogCache = "", yR._LogLimitOutputs = {}, yR.errorsCount = 0
      }
      static set LogLevels(RR) {
        yR.Log = yR._LogDisabled, yR.Warn = yR._LogDisabled, yR.Error = yR._LogDisabled;
        const JR = [yR.MessageLogLevel, yR.WarningLogLevel, yR.ErrorLogLevel];
        for (const GR of JR)
          if ((RR & GR) === GR) {
            const RR = this._Levels[GR];
            yR[RR.name] = yR._LogEnabled.bind(yR, GR)
          }
      }
    }
    yR.NoneLogLevel = 0, yR.MessageLogLevel = 1, yR.WarningLogLevel = 2, yR.ErrorLogLevel = 4, yR.AllLogLevel = 7, yR.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", yR._LogCache = "", yR._LogLimitOutputs = {}, yR._Levels = [{}, {
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
    }], yR.errorsCount = 0, yR.Log = yR._LogEnabled.bind(yR, yR.MessageLogLevel), yR.Warn = yR._LogEnabled.bind(yR, yR.WarningLogLevel), yR.Error = yR._LogEnabled.bind(yR, yR.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);