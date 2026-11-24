export const id = 239;
export const ids = [238, 239];
export const modules = {
  61311: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      RegisterShaderMaterial: () => tS.d,
      ShaderMaterial: () => tS.o,
      ShaderMaterialCreateFromSnippetAsync: () => tS.f,
      ShaderMaterialParse: () => tS.k,
      ShaderMaterialParseFromFileAsync: () => tS.g,
      ShaderMaterialParseFromSnippetAsync: () => tS.i
    });
    var tS = gS(40504);
    (0, tS.d)()
  },
  37783: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS
    });
    var tS = gS(37791);
    class bS {
      static GetPlanes(SS) {
        const HS = [];
        for (let gS = 0; gS < 6; gS++) HS.push(new tS.e(0, 0, 0, 0));
        return bS.GetPlanesToRef(SS, HS), HS
      }
      static GetNearPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] + gS[2], HS.normal.y = gS[7] + gS[6], HS.normal.z = gS[11] + gS[10], HS.d = gS[15] + gS[14], HS.normalize()
      }
      static GetFarPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] - gS[2], HS.normal.y = gS[7] - gS[6], HS.normal.z = gS[11] - gS[10], HS.d = gS[15] - gS[14], HS.normalize()
      }
      static GetLeftPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] + gS[0], HS.normal.y = gS[7] + gS[4], HS.normal.z = gS[11] + gS[8], HS.d = gS[15] + gS[12], HS.normalize()
      }
      static GetRightPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] - gS[0], HS.normal.y = gS[7] - gS[4], HS.normal.z = gS[11] - gS[8], HS.d = gS[15] - gS[12], HS.normalize()
      }
      static GetTopPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] - gS[1], HS.normal.y = gS[7] - gS[5], HS.normal.z = gS[11] - gS[9], HS.d = gS[15] - gS[13], HS.normalize()
      }
      static GetBottomPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] + gS[1], HS.normal.y = gS[7] + gS[5], HS.normal.z = gS[11] + gS[9], HS.d = gS[15] + gS[13], HS.normalize()
      }
      static GetPlanesToRef(SS, HS) {
        bS.GetNearPlaneToRef(SS, HS[0]), bS.GetFarPlaneToRef(SS, HS[1]), bS.GetLeftPlaneToRef(SS, HS[2]), bS.GetRightPlaneToRef(SS, HS[3]), bS.GetTopPlaneToRef(SS, HS[4]), bS.GetBottomPlaneToRef(SS, HS[5])
      }
      static IsPointInFrustum(SS, HS) {
        for (let gS = 0; gS < 6; gS++)
          if (HS[gS].dotCoordinate(SS) < 0) return !1;
        return !0
      }
    }
  },
  37791: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS
    });
    var tS = gS(37117);
    class bS {
      constructor(SS, HS, gS, bS) {
        this.normal = new tS.n(SS, HS, gS), this.d = bS
      }
      lgS() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new bS(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let SS = this.normal.getHashCode();
        return SS = 397 * SS ^ this.d, SS
      }
      normalize() {
        const SS = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let HS = 0;
        return 0 !== SS && (HS = 1 / SS), this.normal.x *= HS, this.normal.y *= HS, this.normal.z *= HS, this.d *= HS, this
      }
      transform(SS) {
        const HS = bS._TmpMatrix;
        SS.invertToRef(HS);
        const gS = HS.m,
          tS = this.normal.x,
          XS = this.normal.y,
          xS = this.normal.z,
          NS = this.d,
          qS = tS * gS[0] + XS * gS[1] + xS * gS[2] + NS * gS[3],
          uS = tS * gS[4] + XS * gS[5] + xS * gS[6] + NS * gS[7],
          IS = tS * gS[8] + XS * gS[9] + xS * gS[10] + NS * gS[11],
          fS = tS * gS[12] + XS * gS[13] + xS * gS[14] + NS * gS[15];
        return new bS(qS, uS, IS, fS)
      }
      dotCoordinate(SS) {
        return this.normal.x * SS.x + this.normal.y * SS.y + this.normal.z * SS.z + this.d
      }
      copyFromPoints(SS, HS, gS) {
        const tS = HS.x - SS.x,
          bS = HS.y - SS.y,
          XS = HS.z - SS.z,
          xS = gS.x - SS.x,
          NS = gS.y - SS.y,
          qS = gS.z - SS.z,
          uS = bS * qS - XS * NS,
          IS = XS * xS - tS * qS,
          fS = tS * NS - bS * xS,
          kS = Math.sqrt(uS * uS + IS * IS + fS * fS);
        let aS;
        return aS = 0 !== kS ? 1 / kS : 0, this.normal.x = uS * aS, this.normal.y = IS * aS, this.normal.z = fS * aS, this.d = -(this.normal.x * SS.x + this.normal.y * SS.y + this.normal.z * SS.z), this
      }
      isFrontFacingTo(SS, HS) {
        return tS.n.Dot(this.normal, SS) <= HS
      }
      signedDistanceTo(SS) {
        return tS.n.Dot(SS, this.normal) + this.d
      }
      static FromArray(SS) {
        return new bS(SS[0], SS[1], SS[2], SS[3])
      }
      static FromPoints(SS, HS, gS) {
        const tS = new bS(0, 0, 0, 0);
        return tS.copyFromPoints(SS, HS, gS), tS
      }
      static FromPositionAndNormal(SS, HS) {
        const gS = new bS(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(SS, HS, gS)
      }
      static FromPositionAndNormalToRef(SS, HS, gS) {
        return gS.normal.dJ(HS), gS.normal.normalize(), gS.d = -SS.dot(gS.normal), gS
      }
      static SignedDistanceToPlaneFromPositionAndNormal(SS, HS, gS) {
        const bS = -(HS.x * SS.x + HS.y * SS.y + HS.z * SS.z);
        return tS.n.Dot(gS, HS) + bS
      }
    }
    bS._TmpMatrix = tS.e.Identity()
  },
  38683: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS
    });
    var tS = gS(38687);
    const bS = (SS, HS, gS) => SS ? SS.getClassName && "Mesh" === SS.getClassName() ? null : !SS.getClassName || "SubMesh" !== SS.getClassName() && "PhysicsBody" !== SS.getClassName() ? SS.clone ? SS.clone() : Array.isArray(SS) ? SS.slice() : gS && "object" === typeof SS ? {
      ...SS
    } : null : SS.clone(HS) : null;
    class XS {
      static DeepCopy(SS, HS, gS, XS) {
        let xS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const NS = function(SS) {
          const HS = [];
          do {
            const gS = Object.getOwnPropertyNames(SS);
            for (const SS of gS) - 1 === HS.indexOf(SS) && HS.push(SS)
          } while (SS = Object.getPrototypeOf(SS));
          return HS
        }(SS);
        for (const uS of NS) {
          if ("_" === uS[0] && (!XS || -1 === XS.indexOf(uS))) continue;
          if (uS.endsWith("Observable")) continue;
          if (gS && -1 !== gS.indexOf(uS)) continue;
          const NS = SS[uS],
            IS = typeof NS;
          if ("function" !== IS) try {
            if ("object" === IS)
              if (NS instanceof Uint8Array) HS[uS] = Uint8Array.from(NS);
              else if (NS instanceof Array) {
              if (HS[uS] = [], NS.length > 0)
                if ("object" == typeof NS[0])
                  for (let SS = 0; SS < NS.length; SS++) {
                    const gS = bS(NS[SS], HS, xS); - 1 === HS[uS].indexOf(gS) && HS[uS].push(gS)
                  } else HS[uS] = NS.slice(0)
            } else HS[uS] = bS(NS, HS, xS);
            else HS[uS] = NS
          } catch (qS) {
            tS.b.Warn(qS.message)
          }
        }
      }
    }
  },
  37933: (SS, HS, gS) => {
    function tS() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (SS => {
        const HS = 16 * Math.random() | 0;
        return ("x" === SS ? HS : 3 & HS | 8).toString(16)
      }))
    }
    gS.d(HS, {
      c: () => tS
    })
  },
  38687: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    class tS {
      static _CheckLimit(SS, HS) {
        let gS = tS._LogLimitOutputs[SS];
        return gS ? gS.current++ : (gS = {
          limit: HS,
          current: 1
        }, tS._LogLimitOutputs[SS] = gS), gS.current <= gS.limit
      }
      static _GenerateLimitMessage(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const gS = tS._LogLimitOutputs[SS];
        if (!gS || !tS.MessageLimitReached) return;
        const bS = this._Levels[HS];
        gS.current === gS.limit && tS[bS.name](tS.MessageLimitReached.replace(/%LIMIT%/g, "" + gS.limit).replace(/%TYPE%/g, bS.name ?? ""))
      }
      static _AddLogEntry(SS) {
        tS._LogCache = SS + tS._LogCache, tS.OnNewCacheEntry && tS.OnNewCacheEntry(SS)
      }
      static _FormatMessage(SS) {
        const HS = SS => SS < 10 ? "0" + SS : "" + SS,
          gS = new Date;
        return "[" + HS(gS.getHours()) + ":" + HS(gS.getMinutes()) + ":" + HS(gS.getSeconds()) + "]: " + SS
      }
      static _LogDisabled(SS, HS) {}
      static _LogEnabled() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          HS = arguments.length > 1 ? arguments[1] : void 0,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        const bS = Array.isArray(HS) ? HS[0] : HS;
        if (void 0 !== gS && !tS._CheckLimit(bS, gS)) return;
        const XS = tS._FormatMessage(bS),
          xS = this._Levels[SS],
          NS = Array.isArray(HS) ? HS.slice(1) : [];
        xS.logFunc && xS.logFunc("BJS - " + XS, ...NS);
        const qS = `<div style='color:${xS.color}'>${XS}</div><br>`;
        tS._AddLogEntry(qS), tS._GenerateLimitMessage(bS, SS)
      }
      static get LogCache() {
        return tS._LogCache
      }
      static ClearLogCache() {
        tS._LogCache = "", tS._LogLimitOutputs = {}, tS.errorsCount = 0
      }
      static set LogLevels(SS) {
        tS.Log = tS._LogDisabled, tS.Warn = tS._LogDisabled, tS.Error = tS._LogDisabled;
        const HS = [tS.MessageLogLevel, tS.WarningLogLevel, tS.ErrorLogLevel];
        for (const gS of HS)
          if ((SS & gS) === gS) {
            const SS = this._Levels[gS];
            tS[SS.name] = tS._LogEnabled.bind(tS, gS)
          }
      }
    }
    tS.NoneLogLevel = 0, tS.MessageLogLevel = 1, tS.WarningLogLevel = 2, tS.ErrorLogLevel = 4, tS.AllLogLevel = 7, tS.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", tS._LogCache = "", tS._LogLimitOutputs = {}, tS._Levels = [{}, {
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
    }], tS.errorsCount = 0, tS.Log = tS._LogEnabled.bind(tS, tS.MessageLogLevel), tS.Warn = tS._LogEnabled.bind(tS, tS.WarningLogLevel), tS.Error = tS._LogEnabled.bind(tS, tS.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);