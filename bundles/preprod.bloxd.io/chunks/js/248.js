export const id = 248;
export const ids = [248];
export const modules = {
  38041: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      e: () => qQ
    });
    var wQ = XQ(38047);
    class qQ {
      static GetPlanes(QQ) {
        const WQ = [];
        for (let XQ = 0; XQ < 6; XQ++) WQ.push(new wQ.b(0, 0, 0, 0));
        return qQ.GetPlanesToRef(QQ, WQ), WQ
      }
      static GetNearPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] + XQ[2], WQ.normal.y = XQ[7] + XQ[6], WQ.normal.z = XQ[11] + XQ[10], WQ.d = XQ[15] + XQ[14], WQ.normalize()
      }
      static GetFarPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] - XQ[2], WQ.normal.y = XQ[7] - XQ[6], WQ.normal.z = XQ[11] - XQ[10], WQ.d = XQ[15] - XQ[14], WQ.normalize()
      }
      static GetLeftPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] + XQ[0], WQ.normal.y = XQ[7] + XQ[4], WQ.normal.z = XQ[11] + XQ[8], WQ.d = XQ[15] + XQ[12], WQ.normalize()
      }
      static GetRightPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] - XQ[0], WQ.normal.y = XQ[7] - XQ[4], WQ.normal.z = XQ[11] - XQ[8], WQ.d = XQ[15] - XQ[12], WQ.normalize()
      }
      static GetTopPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] - XQ[1], WQ.normal.y = XQ[7] - XQ[5], WQ.normal.z = XQ[11] - XQ[9], WQ.d = XQ[15] - XQ[13], WQ.normalize()
      }
      static GetBottomPlaneToRef(QQ, WQ) {
        const XQ = QQ.m;
        WQ.normal.x = XQ[3] + XQ[1], WQ.normal.y = XQ[7] + XQ[5], WQ.normal.z = XQ[11] + XQ[9], WQ.d = XQ[15] + XQ[13], WQ.normalize()
      }
      static GetPlanesToRef(QQ, WQ) {
        qQ.GetNearPlaneToRef(QQ, WQ[0]), qQ.GetFarPlaneToRef(QQ, WQ[1]), qQ.GetLeftPlaneToRef(QQ, WQ[2]), qQ.GetRightPlaneToRef(QQ, WQ[3]), qQ.GetTopPlaneToRef(QQ, WQ[4]), qQ.GetBottomPlaneToRef(QQ, WQ[5])
      }
      static IsPointInFrustum(QQ, WQ) {
        for (let XQ = 0; XQ < 6; XQ++)
          if (WQ[XQ].dotCoordinate(QQ) < 0) return !1;
        return !0
      }
    }
  },
  38047: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ
    });
    var wQ = XQ(37370);
    class qQ {
      constructor(QQ, WQ, XQ, qQ) {
        this.normal = new wQ.s(QQ, WQ, XQ), this.d = qQ
      }
      awQ() {
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
        let WQ = 0;
        return 0 !== QQ && (WQ = 1 / QQ), this.normal.x *= WQ, this.normal.y *= WQ, this.normal.z *= WQ, this.d *= WQ, this
      }
      transform(QQ) {
        const WQ = qQ._TmpMatrix;
        QQ.invertToRef(WQ);
        const XQ = WQ.m,
          wQ = this.normal.x,
          TQ = this.normal.y,
          zQ = this.normal.z,
          sQ = this.d,
          FQ = wQ * XQ[0] + TQ * XQ[1] + zQ * XQ[2] + sQ * XQ[3],
          PQ = wQ * XQ[4] + TQ * XQ[5] + zQ * XQ[6] + sQ * XQ[7],
          gQ = wQ * XQ[8] + TQ * XQ[9] + zQ * XQ[10] + sQ * XQ[11],
          JQ = wQ * XQ[12] + TQ * XQ[13] + zQ * XQ[14] + sQ * XQ[15];
        return new qQ(FQ, PQ, gQ, JQ)
      }
      dotCoordinate(QQ) {
        return this.normal.x * QQ.x + this.normal.y * QQ.y + this.normal.z * QQ.z + this.d
      }
      copyFromPoints(QQ, WQ, XQ) {
        const wQ = WQ.x - QQ.x,
          qQ = WQ.y - QQ.y,
          TQ = WQ.z - QQ.z,
          zQ = XQ.x - QQ.x,
          sQ = XQ.y - QQ.y,
          FQ = XQ.z - QQ.z,
          PQ = qQ * FQ - TQ * sQ,
          gQ = TQ * zQ - wQ * FQ,
          JQ = wQ * sQ - qQ * zQ,
          rQ = Math.sqrt(PQ * PQ + gQ * gQ + JQ * JQ);
        let IQ;
        return IQ = 0 !== rQ ? 1 / rQ : 0, this.normal.x = PQ * IQ, this.normal.y = gQ * IQ, this.normal.z = JQ * IQ, this.d = -(this.normal.x * QQ.x + this.normal.y * QQ.y + this.normal.z * QQ.z), this
      }
      isFrontFacingTo(QQ, WQ) {
        return wQ.s.Dot(this.normal, QQ) <= WQ
      }
      signedDistanceTo(QQ) {
        return wQ.s.Dot(QQ, this.normal) + this.d
      }
      static FromArray(QQ) {
        return new qQ(QQ[0], QQ[1], QQ[2], QQ[3])
      }
      static FromPoints(QQ, WQ, XQ) {
        const wQ = new qQ(0, 0, 0, 0);
        return wQ.copyFromPoints(QQ, WQ, XQ), wQ
      }
      static FromPositionAndNormal(QQ, WQ) {
        const XQ = new qQ(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(QQ, WQ, XQ)
      }
      static FromPositionAndNormalToRef(QQ, WQ, XQ) {
        return XQ.normal.WH(WQ), XQ.normal.normalize(), XQ.d = -QQ.dot(XQ.normal), XQ
      }
      static SignedDistanceToPlaneFromPositionAndNormal(QQ, WQ, XQ) {
        const qQ = -(WQ.x * QQ.x + WQ.y * QQ.y + WQ.z * QQ.z);
        return wQ.s.Dot(XQ, WQ) + qQ
      }
    }
    qQ._TmpMatrix = wQ.e.Identity()
  },
  38947: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => TQ
    });
    var wQ = XQ(38956);
    const qQ = (QQ, WQ, XQ) => QQ ? QQ.getClassName && "Mesh" === QQ.getClassName() ? null : !QQ.getClassName || "SubMesh" !== QQ.getClassName() && "PhysicsBody" !== QQ.getClassName() ? QQ.clone ? QQ.clone() : Array.isArray(QQ) ? QQ.slice() : XQ && "object" === typeof QQ ? {
      ...QQ
    } : null : QQ.clone(WQ) : null;
    class TQ {
      static DeepCopy(QQ, WQ, XQ, TQ) {
        let zQ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const sQ = function(QQ) {
          const WQ = [];
          do {
            const XQ = Object.getOwnPropertyNames(QQ);
            for (const QQ of XQ) - 1 === WQ.indexOf(QQ) && WQ.push(QQ)
          } while (QQ = Object.getPrototypeOf(QQ));
          return WQ
        }(QQ);
        for (const PQ of sQ) {
          if ("_" === PQ[0] && (!TQ || -1 === TQ.indexOf(PQ))) continue;
          if (PQ.endsWith("Observable")) continue;
          if (XQ && -1 !== XQ.indexOf(PQ)) continue;
          const sQ = QQ[PQ],
            gQ = typeof sQ;
          if ("function" !== gQ) try {
            if ("object" === gQ)
              if (sQ instanceof Uint8Array) WQ[PQ] = Uint8Array.from(sQ);
              else if (sQ instanceof Array) {
              if (WQ[PQ] = [], sQ.length > 0)
                if ("object" == typeof sQ[0])
                  for (let QQ = 0; QQ < sQ.length; QQ++) {
                    const XQ = qQ(sQ[QQ], WQ, zQ); - 1 === WQ[PQ].indexOf(XQ) && WQ[PQ].push(XQ)
                  } else WQ[PQ] = sQ.slice(0)
            } else WQ[PQ] = qQ(sQ, WQ, zQ);
            else WQ[PQ] = sQ
          } catch (FQ) {
            wQ.b.Warn(FQ.message)
          }
        }
      }
    }
  },
  38191: (QQ, WQ, XQ) => {
    function wQ() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (QQ => {
        const WQ = 16 * Math.random() | 0;
        return ("x" === QQ ? WQ : 3 & WQ | 8).toString(16)
      }))
    }
    XQ.d(WQ, {
      d: () => wQ
    })
  },
  38956: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ
    });
    class wQ {
      static _CheckLimit(QQ, WQ) {
        let XQ = wQ._LogLimitOutputs[QQ];
        return XQ ? XQ.current++ : (XQ = {
          limit: WQ,
          current: 1
        }, wQ._LogLimitOutputs[QQ] = XQ), XQ.current <= XQ.limit
      }
      static _GenerateLimitMessage(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const XQ = wQ._LogLimitOutputs[QQ];
        if (!XQ || !wQ.MessageLimitReached) return;
        const qQ = this._Levels[WQ];
        XQ.current === XQ.limit && wQ[qQ.name](wQ.MessageLimitReached.replace(/%LIMIT%/g, "" + XQ.limit).replace(/%TYPE%/g, qQ.name ?? ""))
      }
      static _AddLogEntry(QQ) {
        wQ._LogCache = QQ + wQ._LogCache, wQ.OnNewCacheEntry && wQ.OnNewCacheEntry(QQ)
      }
      static _FormatMessage(QQ) {
        const WQ = QQ => QQ < 10 ? "0" + QQ : "" + QQ,
          XQ = new Date;
        return "[" + WQ(XQ.getHours()) + ":" + WQ(XQ.getMinutes()) + ":" + WQ(XQ.getSeconds()) + "]: " + QQ
      }
      static _LogDisabled(QQ, WQ) {}
      static _LogEnabled() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WQ = arguments.length > 1 ? arguments[1] : void 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        const qQ = Array.isArray(WQ) ? WQ[0] : WQ;
        if (void 0 !== XQ && !wQ._CheckLimit(qQ, XQ)) return;
        const TQ = wQ._FormatMessage(qQ),
          zQ = this._Levels[QQ],
          sQ = Array.isArray(WQ) ? WQ.slice(1) : [];
        zQ.logFunc && zQ.logFunc("BJS - " + TQ, ...sQ);
        const FQ = `<div style='color:${zQ.color}'>${TQ}</div><br>`;
        wQ._AddLogEntry(FQ), wQ._GenerateLimitMessage(qQ, QQ)
      }
      static get LogCache() {
        return wQ._LogCache
      }
      static ClearLogCache() {
        wQ._LogCache = "", wQ._LogLimitOutputs = {}, wQ.errorsCount = 0
      }
      static set LogLevels(QQ) {
        wQ.Log = wQ._LogDisabled, wQ.Warn = wQ._LogDisabled, wQ.Error = wQ._LogDisabled;
        const WQ = [wQ.MessageLogLevel, wQ.WarningLogLevel, wQ.ErrorLogLevel];
        for (const XQ of WQ)
          if ((QQ & XQ) === XQ) {
            const QQ = this._Levels[XQ];
            wQ[QQ.name] = wQ._LogEnabled.bind(wQ, XQ)
          }
      }
    }
    wQ.NoneLogLevel = 0, wQ.MessageLogLevel = 1, wQ.WarningLogLevel = 2, wQ.ErrorLogLevel = 4, wQ.AllLogLevel = 7, wQ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", wQ._LogCache = "", wQ._LogLimitOutputs = {}, wQ._Levels = [{}, {
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
    }], wQ.errorsCount = 0, wQ.Log = wQ._LogEnabled.bind(wQ, wQ.MessageLogLevel), wQ.Warn = wQ._LogEnabled.bind(wQ, wQ.WarningLogLevel), wQ.Error = wQ._LogEnabled.bind(wQ, wQ.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);