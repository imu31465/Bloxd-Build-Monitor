export const id = 238;
export const ids = [238];
export const modules = {
  37590: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => wC
    });
    var QC = ZC(37596);
    class wC {
      static GetPlanes(CC) {
        const zC = [];
        for (let ZC = 0; ZC < 6; ZC++) zC.push(new QC.d(0, 0, 0, 0));
        return wC.GetPlanesToRef(CC, zC), zC
      }
      static GetNearPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] + ZC[2], zC.normal.y = ZC[7] + ZC[6], zC.normal.z = ZC[11] + ZC[10], zC.d = ZC[15] + ZC[14], zC.normalize()
      }
      static GetFarPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] - ZC[2], zC.normal.y = ZC[7] - ZC[6], zC.normal.z = ZC[11] - ZC[10], zC.d = ZC[15] - ZC[14], zC.normalize()
      }
      static GetLeftPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] + ZC[0], zC.normal.y = ZC[7] + ZC[4], zC.normal.z = ZC[11] + ZC[8], zC.d = ZC[15] + ZC[12], zC.normalize()
      }
      static GetRightPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] - ZC[0], zC.normal.y = ZC[7] - ZC[4], zC.normal.z = ZC[11] - ZC[8], zC.d = ZC[15] - ZC[12], zC.normalize()
      }
      static GetTopPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] - ZC[1], zC.normal.y = ZC[7] - ZC[5], zC.normal.z = ZC[11] - ZC[9], zC.d = ZC[15] - ZC[13], zC.normalize()
      }
      static GetBottomPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] + ZC[1], zC.normal.y = ZC[7] + ZC[5], zC.normal.z = ZC[11] + ZC[9], zC.d = ZC[15] + ZC[13], zC.normalize()
      }
      static GetPlanesToRef(CC, zC) {
        wC.GetNearPlaneToRef(CC, zC[0]), wC.GetFarPlaneToRef(CC, zC[1]), wC.GetLeftPlaneToRef(CC, zC[2]), wC.GetRightPlaneToRef(CC, zC[3]), wC.GetTopPlaneToRef(CC, zC[4]), wC.GetBottomPlaneToRef(CC, zC[5])
      }
      static IsPointInFrustum(CC, zC) {
        for (let ZC = 0; ZC < 6; ZC++)
          if (zC[ZC].dotCoordinate(CC) < 0) return !1;
        return !0
      }
    }
  },
  37596: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC
    });
    var QC = ZC(36963);
    class wC {
      constructor(CC, zC, ZC, wC) {
        this.normal = new QC.r(CC, zC, ZC), this.d = wC
      }
      VZC() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new wC(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let CC = this.normal.getHashCode();
        return CC = 397 * CC ^ this.d, CC
      }
      normalize() {
        const CC = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let zC = 0;
        return 0 !== CC && (zC = 1 / CC), this.normal.x *= zC, this.normal.y *= zC, this.normal.z *= zC, this.d *= zC, this
      }
      transform(CC) {
        const zC = wC._TmpMatrix;
        CC.invertToRef(zC);
        const ZC = zC.m,
          QC = this.normal.x,
          bC = this.normal.y,
          nC = this.normal.z,
          fC = this.d,
          oC = QC * ZC[0] + bC * ZC[1] + nC * ZC[2] + fC * ZC[3],
          qC = QC * ZC[4] + bC * ZC[5] + nC * ZC[6] + fC * ZC[7],
          FC = QC * ZC[8] + bC * ZC[9] + nC * ZC[10] + fC * ZC[11],
          WC = QC * ZC[12] + bC * ZC[13] + nC * ZC[14] + fC * ZC[15];
        return new wC(oC, qC, FC, WC)
      }
      dotCoordinate(CC) {
        return this.normal.x * CC.x + this.normal.y * CC.y + this.normal.z * CC.z + this.d
      }
      copyFromPoints(CC, zC, ZC) {
        const QC = zC.x - CC.x,
          wC = zC.y - CC.y,
          bC = zC.z - CC.z,
          nC = ZC.x - CC.x,
          fC = ZC.y - CC.y,
          oC = ZC.z - CC.z,
          qC = wC * oC - bC * fC,
          FC = bC * nC - QC * oC,
          WC = QC * fC - wC * nC,
          NC = Math.sqrt(qC * qC + FC * FC + WC * WC);
        let MC;
        return MC = 0 !== NC ? 1 / NC : 0, this.normal.x = qC * MC, this.normal.y = FC * MC, this.normal.z = WC * MC, this.d = -(this.normal.x * CC.x + this.normal.y * CC.y + this.normal.z * CC.z), this
      }
      isFrontFacingTo(CC, zC) {
        return QC.r.Dot(this.normal, CC) <= zC
      }
      signedDistanceTo(CC) {
        return QC.r.Dot(CC, this.normal) + this.d
      }
      static FromArray(CC) {
        return new wC(CC[0], CC[1], CC[2], CC[3])
      }
      static FromPoints(CC, zC, ZC) {
        const QC = new wC(0, 0, 0, 0);
        return QC.copyFromPoints(CC, zC, ZC), QC
      }
      static FromPositionAndNormal(CC, zC) {
        const ZC = new wC(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(CC, zC, ZC)
      }
      static FromPositionAndNormalToRef(CC, zC, ZC) {
        return ZC.normal.Av(zC), ZC.normal.normalize(), ZC.d = -CC.dot(ZC.normal), ZC
      }
      static SignedDistanceToPlaneFromPositionAndNormal(CC, zC, ZC) {
        const wC = -(zC.x * CC.x + zC.y * CC.y + zC.z * CC.z);
        return QC.r.Dot(ZC, zC) + wC
      }
    }
    wC._TmpMatrix = QC.b.Identity()
  },
  38501: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC
    });
    var QC = ZC(38507);
    const wC = (CC, zC, ZC) => CC ? CC.getClassName && "Mesh" === CC.getClassName() ? null : !CC.getClassName || "SubMesh" !== CC.getClassName() && "PhysicsBody" !== CC.getClassName() ? CC.clone ? CC.clone() : Array.isArray(CC) ? CC.slice() : ZC && "object" === typeof CC ? {
      ...CC
    } : null : CC.clone(zC) : null;
    class bC {
      static DeepCopy(CC, zC, ZC, bC) {
        let nC = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const fC = function(CC) {
          const zC = [];
          do {
            const ZC = Object.getOwnPropertyNames(CC);
            for (const CC of ZC) - 1 === zC.indexOf(CC) && zC.push(CC)
          } while (CC = Object.getPrototypeOf(CC));
          return zC
        }(CC);
        for (const qC of fC) {
          if ("_" === qC[0] && (!bC || -1 === bC.indexOf(qC))) continue;
          if (qC.endsWith("Observable")) continue;
          if (ZC && -1 !== ZC.indexOf(qC)) continue;
          const fC = CC[qC],
            FC = typeof fC;
          if ("function" !== FC) try {
            if ("object" === FC)
              if (fC instanceof Uint8Array) zC[qC] = Uint8Array.from(fC);
              else if (fC instanceof Array) {
              if (zC[qC] = [], fC.length > 0)
                if ("object" == typeof fC[0])
                  for (let CC = 0; CC < fC.length; CC++) {
                    const ZC = wC(fC[CC], zC, nC); - 1 === zC[qC].indexOf(ZC) && zC[qC].push(ZC)
                  } else zC[qC] = fC.slice(0)
            } else zC[qC] = wC(fC, zC, nC);
            else zC[qC] = fC
          } catch (oC) {
            QC.c.Warn(oC.message)
          }
        }
      }
    }
  },
  37731: (CC, zC, ZC) => {
    function QC() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (CC => {
        const zC = 16 * Math.random() | 0;
        return ("x" === CC ? zC : 3 & zC | 8).toString(16)
      }))
    }
    ZC.d(zC, {
      b: () => QC
    })
  },
  38507: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => QC
    });
    class QC {
      static _CheckLimit(CC, zC) {
        let ZC = QC._LogLimitOutputs[CC];
        return ZC ? ZC.current++ : (ZC = {
          limit: zC,
          current: 1
        }, QC._LogLimitOutputs[CC] = ZC), ZC.current <= ZC.limit
      }
      static _GenerateLimitMessage(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZC = QC._LogLimitOutputs[CC];
        if (!ZC || !QC.MessageLimitReached) return;
        const wC = this._Levels[zC];
        ZC.current === ZC.limit && QC[wC.name](QC.MessageLimitReached.replace(/%LIMIT%/g, "" + ZC.limit).replace(/%TYPE%/g, wC.name ?? ""))
      }
      static _AddLogEntry(CC) {
        QC._LogCache = CC + QC._LogCache, QC.OnNewCacheEntry && QC.OnNewCacheEntry(CC)
      }
      static _FormatMessage(CC) {
        const zC = CC => CC < 10 ? "0" + CC : "" + CC,
          ZC = new Date;
        return "[" + zC(ZC.getHours()) + ":" + zC(ZC.getMinutes()) + ":" + zC(ZC.getSeconds()) + "]: " + CC
      }
      static _LogDisabled(CC, zC) {}
      static _LogEnabled() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zC = arguments.length > 1 ? arguments[1] : void 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        const wC = Array.isArray(zC) ? zC[0] : zC;
        if (void 0 !== ZC && !QC._CheckLimit(wC, ZC)) return;
        const bC = QC._FormatMessage(wC),
          nC = this._Levels[CC],
          fC = Array.isArray(zC) ? zC.slice(1) : [];
        nC.logFunc && nC.logFunc("BJS - " + bC, ...fC);
        const oC = `<div style='color:${nC.color}'>${bC}</div><br>`;
        QC._AddLogEntry(oC), QC._GenerateLimitMessage(wC, CC)
      }
      static get LogCache() {
        return QC._LogCache
      }
      static ClearLogCache() {
        QC._LogCache = "", QC._LogLimitOutputs = {}, QC.errorsCount = 0
      }
      static set LogLevels(CC) {
        QC.Log = QC._LogDisabled, QC.Warn = QC._LogDisabled, QC.Error = QC._LogDisabled;
        const zC = [QC.MessageLogLevel, QC.WarningLogLevel, QC.ErrorLogLevel];
        for (const ZC of zC)
          if ((CC & ZC) === ZC) {
            const CC = this._Levels[ZC];
            QC[CC.name] = QC._LogEnabled.bind(QC, ZC)
          }
      }
    }
    QC.NoneLogLevel = 0, QC.MessageLogLevel = 1, QC.WarningLogLevel = 2, QC.ErrorLogLevel = 4, QC.AllLogLevel = 7, QC.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", QC._LogCache = "", QC._LogLimitOutputs = {}, QC._Levels = [{}, {
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
    }], QC.errorsCount = 0, QC.Log = QC._LogEnabled.bind(QC, QC.MessageLogLevel), QC.Warn = QC._LogEnabled.bind(QC, QC.WarningLogLevel), QC.Error = QC._LogEnabled.bind(QC, QC.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);