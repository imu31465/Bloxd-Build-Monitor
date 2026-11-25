export const id = 263;
export const ids = [262, 263];
export const modules = {
  63896: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      RegisterShaderMaterial: () => OM.d,
      ShaderMaterial: () => OM.n,
      ShaderMaterialCreateFromSnippetAsync: () => OM.f,
      ShaderMaterialParse: () => OM.m,
      ShaderMaterialParseFromFileAsync: () => OM.g,
      ShaderMaterialParseFromSnippetAsync: () => OM.j
    });
    var OM = iM(41556);
    (0, OM.d)()
  },
  38740: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM
    });
    var OM = iM(38744);
    class SM {
      static GetPlanes(MM) {
        const rM = [];
        for (let iM = 0; iM < 6; iM++) rM.push(new OM.d(0, 0, 0, 0));
        return SM.GetPlanesToRef(MM, rM), rM
      }
      static GetNearPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] + iM[2], rM.normal.y = iM[7] + iM[6], rM.normal.z = iM[11] + iM[10], rM.d = iM[15] + iM[14], rM.normalize()
      }
      static GetFarPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] - iM[2], rM.normal.y = iM[7] - iM[6], rM.normal.z = iM[11] - iM[10], rM.d = iM[15] - iM[14], rM.normalize()
      }
      static GetLeftPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] + iM[0], rM.normal.y = iM[7] + iM[4], rM.normal.z = iM[11] + iM[8], rM.d = iM[15] + iM[12], rM.normalize()
      }
      static GetRightPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] - iM[0], rM.normal.y = iM[7] - iM[4], rM.normal.z = iM[11] - iM[8], rM.d = iM[15] - iM[12], rM.normalize()
      }
      static GetTopPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] - iM[1], rM.normal.y = iM[7] - iM[5], rM.normal.z = iM[11] - iM[9], rM.d = iM[15] - iM[13], rM.normalize()
      }
      static GetBottomPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] + iM[1], rM.normal.y = iM[7] + iM[5], rM.normal.z = iM[11] + iM[9], rM.d = iM[15] + iM[13], rM.normalize()
      }
      static GetPlanesToRef(MM, rM) {
        SM.GetNearPlaneToRef(MM, rM[0]), SM.GetFarPlaneToRef(MM, rM[1]), SM.GetLeftPlaneToRef(MM, rM[2]), SM.GetRightPlaneToRef(MM, rM[3]), SM.GetTopPlaneToRef(MM, rM[4]), SM.GetBottomPlaneToRef(MM, rM[5])
      }
      static IsPointInFrustum(MM, rM) {
        for (let iM = 0; iM < 6; iM++)
          if (rM[iM].dotCoordinate(MM) < 0) return !1;
        return !0
      }
    }
  },
  38744: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM
    });
    var OM = iM(38040);
    class SM {
      constructor(MM, rM, iM, SM) {
        this.normal = new OM.q(MM, rM, iM), this.d = SM
      }
      HOM() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new SM(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let MM = this.normal.getHashCode();
        return MM = 397 * MM ^ this.d, MM
      }
      normalize() {
        const MM = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let rM = 0;
        return 0 !== MM && (rM = 1 / MM), this.normal.x *= rM, this.normal.y *= rM, this.normal.z *= rM, this.d *= rM, this
      }
      transform(MM) {
        const rM = SM._TmpMatrix;
        MM.invertToRef(rM);
        const iM = rM.m,
          OM = this.normal.x,
          jM = this.normal.y,
          aM = this.normal.z,
          PM = this.d,
          nM = OM * iM[0] + jM * iM[1] + aM * iM[2] + PM * iM[3],
          QM = OM * iM[4] + jM * iM[5] + aM * iM[6] + PM * iM[7],
          zM = OM * iM[8] + jM * iM[9] + aM * iM[10] + PM * iM[11],
          LM = OM * iM[12] + jM * iM[13] + aM * iM[14] + PM * iM[15];
        return new SM(nM, QM, zM, LM)
      }
      dotCoordinate(MM) {
        return this.normal.x * MM.x + this.normal.y * MM.y + this.normal.z * MM.z + this.d
      }
      copyFromPoints(MM, rM, iM) {
        const OM = rM.x - MM.x,
          SM = rM.y - MM.y,
          jM = rM.z - MM.z,
          aM = iM.x - MM.x,
          PM = iM.y - MM.y,
          nM = iM.z - MM.z,
          QM = SM * nM - jM * PM,
          zM = jM * aM - OM * nM,
          LM = OM * PM - SM * aM,
          mM = Math.sqrt(QM * QM + zM * zM + LM * LM);
        let HM;
        return HM = 0 !== mM ? 1 / mM : 0, this.normal.x = QM * HM, this.normal.y = zM * HM, this.normal.z = LM * HM, this.d = -(this.normal.x * MM.x + this.normal.y * MM.y + this.normal.z * MM.z), this
      }
      isFrontFacingTo(MM, rM) {
        return OM.q.Dot(this.normal, MM) <= rM
      }
      signedDistanceTo(MM) {
        return OM.q.Dot(MM, this.normal) + this.d
      }
      static FromArray(MM) {
        return new SM(MM[0], MM[1], MM[2], MM[3])
      }
      static FromPoints(MM, rM, iM) {
        const OM = new SM(0, 0, 0, 0);
        return OM.copyFromPoints(MM, rM, iM), OM
      }
      static FromPositionAndNormal(MM, rM) {
        const iM = new SM(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(MM, rM, iM)
      }
      static FromPositionAndNormalToRef(MM, rM, iM) {
        return iM.normal.jR(rM), iM.normal.normalize(), iM.d = -MM.dot(iM.normal), iM
      }
      static SignedDistanceToPlaneFromPositionAndNormal(MM, rM, iM) {
        const SM = -(rM.x * MM.x + rM.y * MM.y + rM.z * MM.z);
        return OM.q.Dot(iM, rM) + SM
      }
    }
    SM._TmpMatrix = OM.d.Identity()
  },
  39705: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM
    });
    var OM = iM(39711);
    const SM = (MM, rM, iM) => MM ? MM.getClassName && "Mesh" === MM.getClassName() ? null : !MM.getClassName || "SubMesh" !== MM.getClassName() && "PhysicsBody" !== MM.getClassName() ? MM.clone ? MM.clone() : Array.isArray(MM) ? MM.slice() : iM && "object" === typeof MM ? {
      ...MM
    } : null : MM.clone(rM) : null;
    class jM {
      static DeepCopy(MM, rM, iM, jM) {
        let aM = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const PM = function(MM) {
          const rM = [];
          do {
            const iM = Object.getOwnPropertyNames(MM);
            for (const MM of iM) - 1 === rM.indexOf(MM) && rM.push(MM)
          } while (MM = Object.getPrototypeOf(MM));
          return rM
        }(MM);
        for (const QM of PM) {
          if ("_" === QM[0] && (!jM || -1 === jM.indexOf(QM))) continue;
          if (QM.endsWith("Observable")) continue;
          if (iM && -1 !== iM.indexOf(QM)) continue;
          const PM = MM[QM],
            zM = typeof PM;
          if ("function" !== zM) try {
            if ("object" === zM)
              if (PM instanceof Uint8Array) rM[QM] = Uint8Array.from(PM);
              else if (PM instanceof Array) {
              if (rM[QM] = [], PM.length > 0)
                if ("object" == typeof PM[0])
                  for (let MM = 0; MM < PM.length; MM++) {
                    const iM = SM(PM[MM], rM, aM); - 1 === rM[QM].indexOf(iM) && rM[QM].push(iM)
                  } else rM[QM] = PM.slice(0)
            } else rM[QM] = SM(PM, rM, aM);
            else rM[QM] = PM
          } catch (nM) {
            OM.e.Warn(nM.message)
          }
        }
      }
    }
  },
  38885: (MM, rM, iM) => {
    function OM() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (MM => {
        const rM = 16 * Math.random() | 0;
        return ("x" === MM ? rM : 3 & rM | 8).toString(16)
      }))
    }
    iM.d(rM, {
      d: () => OM
    })
  },
  39711: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    class OM {
      static _CheckLimit(MM, rM) {
        let iM = OM._LogLimitOutputs[MM];
        return iM ? iM.current++ : (iM = {
          limit: rM,
          current: 1
        }, OM._LogLimitOutputs[MM] = iM), iM.current <= iM.limit
      }
      static _GenerateLimitMessage(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const iM = OM._LogLimitOutputs[MM];
        if (!iM || !OM.MessageLimitReached) return;
        const SM = this._Levels[rM];
        iM.current === iM.limit && OM[SM.name](OM.MessageLimitReached.replace(/%LIMIT%/g, "" + iM.limit).replace(/%TYPE%/g, SM.name ?? ""))
      }
      static _AddLogEntry(MM) {
        OM._LogCache = MM + OM._LogCache, OM.OnNewCacheEntry && OM.OnNewCacheEntry(MM)
      }
      static _FormatMessage(MM) {
        const rM = MM => MM < 10 ? "0" + MM : "" + MM,
          iM = new Date;
        return "[" + rM(iM.getHours()) + ":" + rM(iM.getMinutes()) + ":" + rM(iM.getSeconds()) + "]: " + MM
      }
      static _LogDisabled(MM, rM) {}
      static _LogEnabled() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rM = arguments.length > 1 ? arguments[1] : void 0,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        const SM = Array.isArray(rM) ? rM[0] : rM;
        if (void 0 !== iM && !OM._CheckLimit(SM, iM)) return;
        const jM = OM._FormatMessage(SM),
          aM = this._Levels[MM],
          PM = Array.isArray(rM) ? rM.slice(1) : [];
        aM.logFunc && aM.logFunc("BJS - " + jM, ...PM);
        const nM = `<div style='color:${aM.color}'>${jM}</div><br>`;
        OM._AddLogEntry(nM), OM._GenerateLimitMessage(SM, MM)
      }
      static get LogCache() {
        return OM._LogCache
      }
      static ClearLogCache() {
        OM._LogCache = "", OM._LogLimitOutputs = {}, OM.errorsCount = 0
      }
      static set LogLevels(MM) {
        OM.Log = OM._LogDisabled, OM.Warn = OM._LogDisabled, OM.Error = OM._LogDisabled;
        const rM = [OM.MessageLogLevel, OM.WarningLogLevel, OM.ErrorLogLevel];
        for (const iM of rM)
          if ((MM & iM) === iM) {
            const MM = this._Levels[iM];
            OM[MM.name] = OM._LogEnabled.bind(OM, iM)
          }
      }
    }
    OM.NoneLogLevel = 0, OM.MessageLogLevel = 1, OM.WarningLogLevel = 2, OM.ErrorLogLevel = 4, OM.AllLogLevel = 7, OM.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", OM._LogCache = "", OM._LogLimitOutputs = {}, OM._Levels = [{}, {
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
    }], OM.errorsCount = 0, OM.Log = OM._LogEnabled.bind(OM, OM.MessageLogLevel), OM.Warn = OM._LogEnabled.bind(OM, OM.WarningLogLevel), OM.Error = OM._LogEnabled.bind(OM, OM.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);