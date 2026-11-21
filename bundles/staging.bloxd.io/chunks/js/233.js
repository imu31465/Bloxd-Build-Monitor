export const id = 233;
export const ids = [233];
export const modules = {
  37320: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => qQ
    });
    var LQ = wQ(37324);
    class qQ {
      static GetPlanes(QQ) {
        const FQ = [];
        for (let wQ = 0; wQ < 6; wQ++) FQ.push(new LQ.d(0, 0, 0, 0));
        return qQ.GetPlanesToRef(QQ, FQ), FQ
      }
      static GetNearPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] + wQ[2], FQ.normal.y = wQ[7] + wQ[6], FQ.normal.z = wQ[11] + wQ[10], FQ.d = wQ[15] + wQ[14], FQ.normalize()
      }
      static GetFarPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] - wQ[2], FQ.normal.y = wQ[7] - wQ[6], FQ.normal.z = wQ[11] - wQ[10], FQ.d = wQ[15] - wQ[14], FQ.normalize()
      }
      static GetLeftPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] + wQ[0], FQ.normal.y = wQ[7] + wQ[4], FQ.normal.z = wQ[11] + wQ[8], FQ.d = wQ[15] + wQ[12], FQ.normalize()
      }
      static GetRightPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] - wQ[0], FQ.normal.y = wQ[7] - wQ[4], FQ.normal.z = wQ[11] - wQ[8], FQ.d = wQ[15] - wQ[12], FQ.normalize()
      }
      static GetTopPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] - wQ[1], FQ.normal.y = wQ[7] - wQ[5], FQ.normal.z = wQ[11] - wQ[9], FQ.d = wQ[15] - wQ[13], FQ.normalize()
      }
      static GetBottomPlaneToRef(QQ, FQ) {
        const wQ = QQ.m;
        FQ.normal.x = wQ[3] + wQ[1], FQ.normal.y = wQ[7] + wQ[5], FQ.normal.z = wQ[11] + wQ[9], FQ.d = wQ[15] + wQ[13], FQ.normalize()
      }
      static GetPlanesToRef(QQ, FQ) {
        qQ.GetNearPlaneToRef(QQ, FQ[0]), qQ.GetFarPlaneToRef(QQ, FQ[1]), qQ.GetLeftPlaneToRef(QQ, FQ[2]), qQ.GetRightPlaneToRef(QQ, FQ[3]), qQ.GetTopPlaneToRef(QQ, FQ[4]), qQ.GetBottomPlaneToRef(QQ, FQ[5])
      }
      static IsPointInFrustum(QQ, FQ) {
        for (let wQ = 0; wQ < 6; wQ++)
          if (FQ[wQ].dotCoordinate(QQ) < 0) return !1;
        return !0
      }
    }
  },
  37324: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      d: () => qQ
    });
    var LQ = wQ(36696);
    class qQ {
      constructor(QQ, FQ, wQ, qQ) {
        this.normal = new LQ.p(QQ, FQ, wQ), this.d = qQ
      }
      RLQ() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new qQ(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let QQ = this.normal.getHashCode();
        return QQ = 397 * QQ ^ this.d, QQ
      }
      normalize() {
        const QQ = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let FQ = 0;
        return 0 !== QQ && (FQ = 1 / QQ), this.normal.x *= FQ, this.normal.y *= FQ, this.normal.z *= FQ, this.d *= FQ, this
      }
      transform(QQ) {
        const FQ = qQ._TmpMatrix;
        QQ.invertToRef(FQ);
        const wQ = FQ.m,
          LQ = this.normal.x,
          oQ = this.normal.y,
          DQ = this.normal.z,
          kQ = this.d,
          vQ = LQ * wQ[0] + oQ * wQ[1] + DQ * wQ[2] + kQ * wQ[3],
          mQ = LQ * wQ[4] + oQ * wQ[5] + DQ * wQ[6] + kQ * wQ[7],
          uQ = LQ * wQ[8] + oQ * wQ[9] + DQ * wQ[10] + kQ * wQ[11],
          HQ = LQ * wQ[12] + oQ * wQ[13] + DQ * wQ[14] + kQ * wQ[15];
        return new qQ(vQ, mQ, uQ, HQ)
      }
      dotCoordinate(QQ) {
        return this.normal.x * QQ.x + this.normal.y * QQ.y + this.normal.z * QQ.z + this.d
      }
      copyFromPoints(QQ, FQ, wQ) {
        const LQ = FQ.x - QQ.x,
          qQ = FQ.y - QQ.y,
          oQ = FQ.z - QQ.z,
          DQ = wQ.x - QQ.x,
          kQ = wQ.y - QQ.y,
          vQ = wQ.z - QQ.z,
          mQ = qQ * vQ - oQ * kQ,
          uQ = oQ * DQ - LQ * vQ,
          HQ = LQ * kQ - qQ * DQ,
          bQ = Math.sqrt(mQ * mQ + uQ * uQ + HQ * HQ);
        let YQ;
        return YQ = 0 !== bQ ? 1 / bQ : 0, this.normal.x = mQ * YQ, this.normal.y = uQ * YQ, this.normal.z = HQ * YQ, this.d = -(this.normal.x * QQ.x + this.normal.y * QQ.y + this.normal.z * QQ.z), this
      }
      isFrontFacingTo(QQ, FQ) {
        return LQ.p.Dot(this.normal, QQ) <= FQ
      }
      signedDistanceTo(QQ) {
        return LQ.p.Dot(QQ, this.normal) + this.d
      }
      static FromArray(QQ) {
        return new qQ(QQ[0], QQ[1], QQ[2], QQ[3])
      }
      static FromPoints(QQ, FQ, wQ) {
        const LQ = new qQ(0, 0, 0, 0);
        return LQ.copyFromPoints(QQ, FQ, wQ), LQ
      }
      static FromPositionAndNormal(QQ, FQ) {
        const wQ = new qQ(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(QQ, FQ, wQ)
      }
      static FromPositionAndNormalToRef(QQ, FQ, wQ) {
        return wQ.normal.Qs(FQ), wQ.normal.normalize(), wQ.d = -QQ.dot(wQ.normal), wQ
      }
      static SignedDistanceToPlaneFromPositionAndNormal(QQ, FQ, wQ) {
        const qQ = -(FQ.x * QQ.x + FQ.y * QQ.y + FQ.z * QQ.z);
        return LQ.p.Dot(wQ, FQ) + qQ
      }
    }
    qQ._TmpMatrix = LQ.c.Identity()
  },
  38200: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ
    });
    var LQ = wQ(38203);
    const qQ = (QQ, FQ, wQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : wQ && "object" === typeof QQ ? {
      ...QQ
    } : null : QQ.clone(FQ) : null;
    class oQ {
      static DeepCopy(QQ, FQ, wQ, oQ) {
        let DQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const kQ = function(QQ) {
          const FQ = [];
          do {
            const wQ = Object.getOwnPropertyNames(QQ);
            for (const QQ of wQ) - 1 === FQ.indexOf(QQ) && FQ.push(QQ)
          } while (QQ = Object.getPrototypeOf(QQ));
          return FQ
        }(QQ);
        for (const mQ of kQ) {
          if ("_" === mQ[0] && (!oQ || -1 === oQ.indexOf(mQ))) continue;
          if (mQ.endsWith("Observable")) continue;
          if (wQ && -1 !== wQ.indexOf(mQ)) continue;
          const kQ = QQ[mQ],
            uQ = typeof kQ;
          if ("function" !== uQ) try {
            if ("object" === uQ)
              if (kQ instanceof Uint8Array) FQ[mQ] = Uint8Array.from(kQ);
              else if (kQ instanceof Array) {
              if (FQ[mQ] = [], kQ.length > 0)
                if ("object" == typeof kQ[0])
                  for (let QQ = 0; QQ < kQ.length; QQ++) {
                    const wQ = qQ(kQ[QQ], FQ, DQ); - 1 === FQ[mQ].indexOf(wQ) && FQ[mQ].push(wQ)
                  } else FQ[mQ] = kQ.slice(0)
            } else FQ[mQ] = qQ(kQ, FQ, DQ);
            else FQ[mQ] = kQ
          } catch (vQ) {
            LQ.c.Warn(vQ.message)
          }
        }
      }
    }
  },
  37452: (QQ, FQ, wQ) => {
    function LQ() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
        const FQ = 16 * Math.random() | 0;
        return ("x" === QQ ? FQ : 3 & FQ | 8).toString(16)
      }))
    }
    wQ.d(FQ, {
      d: () => LQ
    })
  },
  38203: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      c: () => LQ
    });
    class LQ {
      static _CheckLimit(QQ, FQ) {
        let wQ = LQ._LogLimitOutputs[QQ];
        return wQ ? wQ.current++ : (wQ = {
          limit: FQ,
          current: 1
        }, LQ._LogLimitOutputs[QQ] = wQ), wQ.current <= wQ.limit
      }
      static _GenerateLimitMessage(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const wQ = LQ._LogLimitOutputs[QQ];
        if (!wQ || !LQ.MessageLimitReached) return;
        const qQ = this._Levels[FQ];
        wQ.current === wQ.limit && LQ[qQ.name](LQ.MessageLimitReached.replace(/%LIMIT%/g, "" + wQ.limit).replace(/%TYPE%/g, qQ.name ?? ""))
      }
      static _AddLogEntry(QQ) {
        LQ._LogCache = QQ + LQ._LogCache, LQ.OnNewCacheEntry && LQ.OnNewCacheEntry(QQ)
      }
      static _FormatMessage(QQ) {
        const FQ = QQ => QQ < 10 ? "0" + QQ : "" + QQ,
          wQ = new Date;
        return "[" + FQ(wQ.getHours()) + ":" + FQ(wQ.getMinutes()) + ":" + FQ(wQ.getSeconds()) + "]: " + QQ
      }
      static _LogDisabled(QQ, FQ) {}
      static _LogEnabled() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          FQ = arguments.length > 1 ? arguments[1] : void 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        const qQ = Array.isArray(FQ) ? FQ[0] : FQ;
        if (void 0 !== wQ && !LQ._CheckLimit(qQ, wQ)) return;
        const oQ = LQ._FormatMessage(qQ),
          DQ = this._Levels[QQ],
          kQ = Array.isArray(FQ) ? FQ.slice(1) : [];
        DQ.logFunc && DQ.logFunc("BJS - " + oQ, ...kQ);
        const vQ = `<div style='color:${DQ.color}'>${oQ}</div><br>`;
        LQ._AddLogEntry(vQ), LQ._GenerateLimitMessage(qQ, QQ)
      }
      static get LogCache() {
        return LQ._LogCache
      }
      static ClearLogCache() {
        LQ._LogCache = "", LQ._LogLimitOutputs = {}, LQ.errorsCount = 0
      }
      static set LogLevels(QQ) {
        LQ.Log = LQ._LogDisabled, LQ.Warn = LQ._LogDisabled, LQ.Error = LQ._LogDisabled;
        const FQ = [LQ.MessageLogLevel, LQ.WarningLogLevel, LQ.ErrorLogLevel];
        for (const wQ of FQ)
          if ((QQ & wQ) === wQ) {
            const QQ = this._Levels[wQ];
            LQ[QQ.name] = LQ._LogEnabled.bind(LQ, wQ)
          }
      }
    }
    LQ.NoneLogLevel = 0, LQ.MessageLogLevel = 1, LQ.WarningLogLevel = 2, LQ.ErrorLogLevel = 4, LQ.AllLogLevel = 7, LQ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", LQ._LogCache = "", LQ._LogLimitOutputs = {}, LQ._Levels = [{}, {
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
    }], LQ.errorsCount = 0, LQ.Log = LQ._LogEnabled.bind(LQ, LQ.MessageLogLevel), LQ.Warn = LQ._LogEnabled.bind(LQ, LQ.WarningLogLevel), LQ.Error = LQ._LogEnabled.bind(LQ, LQ.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);