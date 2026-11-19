export const id = 233;
export const ids = [232, 233];
export const modules = {
  60383: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      RegisterShaderMaterial: () => ID.e,
      ShaderMaterial: () => ID.p,
      ShaderMaterialCreateFromSnippetAsync: () => ID.g,
      ShaderMaterialParse: () => ID.o,
      ShaderMaterialParseFromFileAsync: () => ID.i,
      ShaderMaterialParseFromSnippetAsync: () => ID.l
    });
    var ID = cD(39590);
    (0, ID.e)()
  },
  37159: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD
    });
    var ID = cD(37167);
    class pD {
      static GetPlanes(DD) {
        const CD = [];
        for (let cD = 0; cD < 6; cD++) CD.push(new ID.c(0, 0, 0, 0));
        return pD.GetPlanesToRef(DD, CD), CD
      }
      static GetNearPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] + cD[2], CD.normal.y = cD[7] + cD[6], CD.normal.z = cD[11] + cD[10], CD.d = cD[15] + cD[14], CD.normalize()
      }
      static GetFarPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] - cD[2], CD.normal.y = cD[7] - cD[6], CD.normal.z = cD[11] - cD[10], CD.d = cD[15] - cD[14], CD.normalize()
      }
      static GetLeftPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] + cD[0], CD.normal.y = cD[7] + cD[4], CD.normal.z = cD[11] + cD[8], CD.d = cD[15] + cD[12], CD.normalize()
      }
      static GetRightPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] - cD[0], CD.normal.y = cD[7] - cD[4], CD.normal.z = cD[11] - cD[8], CD.d = cD[15] - cD[12], CD.normalize()
      }
      static GetTopPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] - cD[1], CD.normal.y = cD[7] - cD[5], CD.normal.z = cD[11] - cD[9], CD.d = cD[15] - cD[13], CD.normalize()
      }
      static GetBottomPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] + cD[1], CD.normal.y = cD[7] + cD[5], CD.normal.z = cD[11] + cD[9], CD.d = cD[15] + cD[13], CD.normalize()
      }
      static GetPlanesToRef(DD, CD) {
        pD.GetNearPlaneToRef(DD, CD[0]), pD.GetFarPlaneToRef(DD, CD[1]), pD.GetLeftPlaneToRef(DD, CD[2]), pD.GetRightPlaneToRef(DD, CD[3]), pD.GetTopPlaneToRef(DD, CD[4]), pD.GetBottomPlaneToRef(DD, CD[5])
      }
      static IsPointInFrustum(DD, CD) {
        for (let cD = 0; cD < 6; cD++)
          if (CD[cD].dotCoordinate(DD) < 0) return !1;
        return !0
      }
    }
  },
  37167: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD
    });
    var ID = cD(36446);
    class pD {
      constructor(DD, CD, cD, pD) {
        this.normal = new ID.p(DD, CD, cD), this.d = pD
      }
      XcD() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new pD(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let DD = this.normal.getHashCode();
        return DD = 397 * DD ^ this.d, DD
      }
      normalize() {
        const DD = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let CD = 0;
        return 0 !== DD && (CD = 1 / DD), this.normal.x *= CD, this.normal.y *= CD, this.normal.z *= CD, this.d *= CD, this
      }
      transform(DD) {
        const CD = pD._TmpMatrix;
        DD.invertToRef(CD);
        const cD = CD.m,
          ID = this.normal.x,
          iD = this.normal.y,
          fD = this.normal.z,
          bD = this.d,
          QD = ID * cD[0] + iD * cD[1] + fD * cD[2] + bD * cD[3],
          wD = ID * cD[4] + iD * cD[5] + fD * cD[6] + bD * cD[7],
          SD = ID * cD[8] + iD * cD[9] + fD * cD[10] + bD * cD[11],
          BD = ID * cD[12] + iD * cD[13] + fD * cD[14] + bD * cD[15];
        return new pD(QD, wD, SD, BD)
      }
      dotCoordinate(DD) {
        return this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z + this.d
      }
      copyFromPoints(DD, CD, cD) {
        const ID = CD.x - DD.x,
          pD = CD.y - DD.y,
          iD = CD.z - DD.z,
          fD = cD.x - DD.x,
          bD = cD.y - DD.y,
          QD = cD.z - DD.z,
          wD = pD * QD - iD * bD,
          SD = iD * fD - ID * QD,
          BD = ID * bD - pD * fD,
          yD = Math.sqrt(wD * wD + SD * SD + BD * BD);
        let MD;
        return MD = 0 !== yD ? 1 / yD : 0, this.normal.x = wD * MD, this.normal.y = SD * MD, this.normal.z = BD * MD, this.d = -(this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z), this
      }
      isFrontFacingTo(DD, CD) {
        return ID.p.Dot(this.normal, DD) <= CD
      }
      signedDistanceTo(DD) {
        return ID.p.Dot(DD, this.normal) + this.d
      }
      static FromArray(DD) {
        return new pD(DD[0], DD[1], DD[2], DD[3])
      }
      static FromPoints(DD, CD, cD) {
        const ID = new pD(0, 0, 0, 0);
        return ID.copyFromPoints(DD, CD, cD), ID
      }
      static FromPositionAndNormal(DD, CD) {
        const cD = new pD(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(DD, CD, cD)
      }
      static FromPositionAndNormalToRef(DD, CD, cD) {
        return cD.normal.YCD(CD), cD.normal.normalize(), cD.d = -DD.dot(cD.normal), cD
      }
      static SignedDistanceToPlaneFromPositionAndNormal(DD, CD, cD) {
        const pD = -(CD.x * DD.x + CD.y * DD.y + CD.z * DD.z);
        return ID.p.Dot(cD, CD) + pD
      }
    }
    pD._TmpMatrix = ID.d.Identity()
  },
  38045: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => iD
    });
    var ID = cD(38048);
    const pD = (DD, CD, cD) => DD ? DD.getClassName && "Mesh" === DD.getClassName() ? null : !DD.getClassName || "SubMesh" !== DD.getClassName() && "PhysicsBody" !== DD.getClassName() ? DD.clone ? DD.clone() : Array.isArray(DD) ? DD.slice() : cD && "object" === typeof DD ? {
      ...DD
    } : null : DD.clone(CD) : null;
    class iD {
      static DeepCopy(DD, CD, cD, iD) {
        let fD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bD = function(DD) {
          const CD = [];
          do {
            const cD = Object.getOwnPropertyNames(DD);
            for (const DD of cD) - 1 === CD.indexOf(DD) && CD.push(DD)
          } while (DD = Object.getPrototypeOf(DD));
          return CD
        }(DD);
        for (const wD of bD) {
          if ("_" === wD[0] && (!iD || -1 === iD.indexOf(wD))) continue;
          if (wD.endsWith("Observable")) continue;
          if (cD && -1 !== cD.indexOf(wD)) continue;
          const bD = DD[wD],
            SD = typeof bD;
          if ("function" !== SD) try {
            if ("object" === SD)
              if (bD instanceof Uint8Array) CD[wD] = Uint8Array.from(bD);
              else if (bD instanceof Array) {
              if (CD[wD] = [], bD.length > 0)
                if ("object" == typeof bD[0])
                  for (let DD = 0; DD < bD.length; DD++) {
                    const cD = pD(bD[DD], CD, fD); - 1 === CD[wD].indexOf(cD) && CD[wD].push(cD)
                  } else CD[wD] = bD.slice(0)
            } else CD[wD] = pD(bD, CD, fD);
            else CD[wD] = bD
          } catch (QD) {
            ID.e.Warn(QD.message)
          }
        }
      }
    }
  },
  37290: (DD, CD, cD) => {
    function ID() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (DD => {
        const CD = 16 * Math.random() | 0;
        return ("x" === DD ? CD : 3 & CD | 8).toString(16)
      }))
    }
    cD.d(CD, {
      d: () => ID
    })
  },
  38048: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    class ID {
      static _CheckLimit(DD, CD) {
        let cD = ID._LogLimitOutputs[DD];
        return cD ? cD.current++ : (cD = {
          limit: CD,
          current: 1
        }, ID._LogLimitOutputs[DD] = cD), cD.current <= cD.limit
      }
      static _GenerateLimitMessage(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const cD = ID._LogLimitOutputs[DD];
        if (!cD || !ID.MessageLimitReached) return;
        const pD = this._Levels[CD];
        cD.current === cD.limit && ID[pD.name](ID.MessageLimitReached.replace(/%LIMIT%/g, "" + cD.limit).replace(/%TYPE%/g, pD.name ?? ""))
      }
      static _AddLogEntry(DD) {
        ID._LogCache = DD + ID._LogCache, ID.OnNewCacheEntry && ID.OnNewCacheEntry(DD)
      }
      static _FormatMessage(DD) {
        const CD = DD => DD < 10 ? "0" + DD : "" + DD,
          cD = new Date;
        return "[" + CD(cD.getHours()) + ":" + CD(cD.getMinutes()) + ":" + CD(cD.getSeconds()) + "]: " + DD
      }
      static _LogDisabled(DD, CD) {}
      static _LogEnabled() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          CD = arguments.length > 1 ? arguments[1] : void 0,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        const pD = Array.isArray(CD) ? CD[0] : CD;
        if (void 0 !== cD && !ID._CheckLimit(pD, cD)) return;
        const iD = ID._FormatMessage(pD),
          fD = this._Levels[DD],
          bD = Array.isArray(CD) ? CD.slice(1) : [];
        fD.logFunc && fD.logFunc("BJS - " + iD, ...bD);
        const QD = `<div style='color:${fD.color}'>${iD}</div><br>`;
        ID._AddLogEntry(QD), ID._GenerateLimitMessage(pD, DD)
      }
      static get LogCache() {
        return ID._LogCache
      }
      static ClearLogCache() {
        ID._LogCache = "", ID._LogLimitOutputs = {}, ID.errorsCount = 0
      }
      static set LogLevels(DD) {
        ID.Log = ID._LogDisabled, ID.Warn = ID._LogDisabled, ID.Error = ID._LogDisabled;
        const CD = [ID.MessageLogLevel, ID.WarningLogLevel, ID.ErrorLogLevel];
        for (const cD of CD)
          if ((DD & cD) === cD) {
            const DD = this._Levels[cD];
            ID[DD.name] = ID._LogEnabled.bind(ID, cD)
          }
      }
    }
    ID.NoneLogLevel = 0, ID.MessageLogLevel = 1, ID.WarningLogLevel = 2, ID.ErrorLogLevel = 4, ID.AllLogLevel = 7, ID.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", ID._LogCache = "", ID._LogLimitOutputs = {}, ID._Levels = [{}, {
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
    }], ID.errorsCount = 0, ID.Log = ID._LogEnabled.bind(ID, ID.MessageLogLevel), ID.Warn = ID._LogEnabled.bind(ID, ID.WarningLogLevel), ID.Error = ID._LogEnabled.bind(ID, ID.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);