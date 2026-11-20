export const id = 233;
export const ids = [232, 233];
export const modules = {
  60535: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      RegisterShaderMaterial: () => tU.d,
      ShaderMaterial: () => tU.l,
      ShaderMaterialCreateFromSnippetAsync: () => tU.e,
      ShaderMaterialParse: () => tU.i,
      ShaderMaterialParseFromFileAsync: () => tU.f,
      ShaderMaterialParseFromSnippetAsync: () => tU.h
    });
    var tU = gU(39847);
    (0, tU.d)()
  },
  37301: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU
    });
    var tU = gU(37308);
    class pU {
      static GetPlanes(UU) {
        const RU = [];
        for (let gU = 0; gU < 6; gU++) RU.push(new tU.e(0, 0, 0, 0));
        return pU.GetPlanesToRef(UU, RU), RU
      }
      static GetNearPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] + gU[2], RU.normal.y = gU[7] + gU[6], RU.normal.z = gU[11] + gU[10], RU.d = gU[15] + gU[14], RU.normalize()
      }
      static GetFarPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] - gU[2], RU.normal.y = gU[7] - gU[6], RU.normal.z = gU[11] - gU[10], RU.d = gU[15] - gU[14], RU.normalize()
      }
      static GetLeftPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] + gU[0], RU.normal.y = gU[7] + gU[4], RU.normal.z = gU[11] + gU[8], RU.d = gU[15] + gU[12], RU.normalize()
      }
      static GetRightPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] - gU[0], RU.normal.y = gU[7] - gU[4], RU.normal.z = gU[11] - gU[8], RU.d = gU[15] - gU[12], RU.normalize()
      }
      static GetTopPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] - gU[1], RU.normal.y = gU[7] - gU[5], RU.normal.z = gU[11] - gU[9], RU.d = gU[15] - gU[13], RU.normalize()
      }
      static GetBottomPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] + gU[1], RU.normal.y = gU[7] + gU[5], RU.normal.z = gU[11] + gU[9], RU.d = gU[15] + gU[13], RU.normalize()
      }
      static GetPlanesToRef(UU, RU) {
        pU.GetNearPlaneToRef(UU, RU[0]), pU.GetFarPlaneToRef(UU, RU[1]), pU.GetLeftPlaneToRef(UU, RU[2]), pU.GetRightPlaneToRef(UU, RU[3]), pU.GetTopPlaneToRef(UU, RU[4]), pU.GetBottomPlaneToRef(UU, RU[5])
      }
      static IsPointInFrustum(UU, RU) {
        for (let gU = 0; gU < 6; gU++)
          if (RU[gU].dotCoordinate(UU) < 0) return !1;
        return !0
      }
    }
  },
  37308: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU
    });
    var tU = gU(36600);
    class pU {
      constructor(UU, RU, gU, pU) {
        this.normal = new tU.n(UU, RU, gU), this.d = pU
      }
      vgU() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new pU(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let UU = this.normal.getHashCode();
        return UU = 397 * UU ^ this.d, UU
      }
      normalize() {
        const UU = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let RU = 0;
        return 0 !== UU && (RU = 1 / UU), this.normal.x *= RU, this.normal.y *= RU, this.normal.z *= RU, this.d *= RU, this
      }
      transform(UU) {
        const RU = pU._TmpMatrix;
        UU.invertToRef(RU);
        const gU = RU.m,
          tU = this.normal.x,
          EU = this.normal.y,
          PU = this.normal.z,
          TU = this.d,
          qU = tU * gU[0] + EU * gU[1] + PU * gU[2] + TU * gU[3],
          KU = tU * gU[4] + EU * gU[5] + PU * gU[6] + TU * gU[7],
          cU = tU * gU[8] + EU * gU[9] + PU * gU[10] + TU * gU[11],
          GU = tU * gU[12] + EU * gU[13] + PU * gU[14] + TU * gU[15];
        return new pU(qU, KU, cU, GU)
      }
      dotCoordinate(UU) {
        return this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z + this.d
      }
      copyFromPoints(UU, RU, gU) {
        const tU = RU.x - UU.x,
          pU = RU.y - UU.y,
          EU = RU.z - UU.z,
          PU = gU.x - UU.x,
          TU = gU.y - UU.y,
          qU = gU.z - UU.z,
          KU = pU * qU - EU * TU,
          cU = EU * PU - tU * qU,
          GU = tU * TU - pU * PU,
          jU = Math.sqrt(KU * KU + cU * cU + GU * GU);
        let uU;
        return uU = 0 !== jU ? 1 / jU : 0, this.normal.x = KU * uU, this.normal.y = cU * uU, this.normal.z = GU * uU, this.d = -(this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z), this
      }
      isFrontFacingTo(UU, RU) {
        return tU.n.Dot(this.normal, UU) <= RU
      }
      signedDistanceTo(UU) {
        return tU.n.Dot(UU, this.normal) + this.d
      }
      static FromArray(UU) {
        return new pU(UU[0], UU[1], UU[2], UU[3])
      }
      static FromPoints(UU, RU, gU) {
        const tU = new pU(0, 0, 0, 0);
        return tU.copyFromPoints(UU, RU, gU), tU
      }
      static FromPositionAndNormal(UU, RU) {
        const gU = new pU(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(UU, RU, gU)
      }
      static FromPositionAndNormalToRef(UU, RU, gU) {
        return gU.normal.PgU(RU), gU.normal.normalize(), gU.d = -UU.dot(gU.normal), gU
      }
      static SignedDistanceToPlaneFromPositionAndNormal(UU, RU, gU) {
        const pU = -(RU.x * UU.x + RU.y * UU.y + RU.z * UU.z);
        return tU.n.Dot(gU, RU) + pU
      }
    }
    pU._TmpMatrix = tU.c.Identity()
  },
  38234: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU
    });
    var tU = gU(38236);
    const pU = (UU, RU, gU) => UU ? UU.getClassName && "Mesh" === UU.getClassName() ? null : !UU.getClassName || "SubMesh" !== UU.getClassName() && "PhysicsBody" !== UU.getClassName() ? UU.clone ? UU.clone() : Array.isArray(UU) ? UU.slice() : gU && "object" === typeof UU ? {
      ...UU
    } : null : UU.clone(RU) : null;
    class EU {
      static DeepCopy(UU, RU, gU, EU) {
        let PU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const TU = function(UU) {
          const RU = [];
          do {
            const gU = Object.getOwnPropertyNames(UU);
            for (const UU of gU) - 1 === RU.indexOf(UU) && RU.push(UU)
          } while (UU = Object.getPrototypeOf(UU));
          return RU
        }(UU);
        for (const KU of TU) {
          if ("_" === KU[0] && (!EU || -1 === EU.indexOf(KU))) continue;
          if (KU.endsWith("Observable")) continue;
          if (gU && -1 !== gU.indexOf(KU)) continue;
          const TU = UU[KU],
            cU = typeof TU;
          if ("function" !== cU) try {
            if ("object" === cU)
              if (TU instanceof Uint8Array) RU[KU] = Uint8Array.from(TU);
              else if (TU instanceof Array) {
              if (RU[KU] = [], TU.length > 0)
                if ("object" == typeof TU[0])
                  for (let UU = 0; UU < TU.length; UU++) {
                    const gU = pU(TU[UU], RU, PU); - 1 === RU[KU].indexOf(gU) && RU[KU].push(gU)
                  } else RU[KU] = TU.slice(0)
            } else RU[KU] = pU(TU, RU, PU);
            else RU[KU] = TU
          } catch (qU) {
            tU.e.Warn(qU.message)
          }
        }
      }
    }
  },
  37439: (UU, RU, gU) => {
    function tU() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (UU => {
        const RU = 16 * Math.random() | 0;
        return ("x" === UU ? RU : 3 & RU | 8).toString(16)
      }))
    }
    gU.d(RU, {
      b: () => tU
    })
  },
  38236: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU
    });
    class tU {
      static _CheckLimit(UU, RU) {
        let gU = tU._LogLimitOutputs[UU];
        return gU ? gU.current++ : (gU = {
          limit: RU,
          current: 1
        }, tU._LogLimitOutputs[UU] = gU), gU.current <= gU.limit
      }
      static _GenerateLimitMessage(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const gU = tU._LogLimitOutputs[UU];
        if (!gU || !tU.MessageLimitReached) return;
        const pU = this._Levels[RU];
        gU.current === gU.limit && tU[pU.name](tU.MessageLimitReached.replace(/%LIMIT%/g, "" + gU.limit).replace(/%TYPE%/g, pU.name ?? ""))
      }
      static _AddLogEntry(UU) {
        tU._LogCache = UU + tU._LogCache, tU.OnNewCacheEntry && tU.OnNewCacheEntry(UU)
      }
      static _FormatMessage(UU) {
        const RU = UU => UU < 10 ? "0" + UU : "" + UU,
          gU = new Date;
        return "[" + RU(gU.getHours()) + ":" + RU(gU.getMinutes()) + ":" + RU(gU.getSeconds()) + "]: " + UU
      }
      static _LogDisabled(UU, RU) {}
      static _LogEnabled() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RU = arguments.length > 1 ? arguments[1] : void 0,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        const pU = Array.isArray(RU) ? RU[0] : RU;
        if (void 0 !== gU && !tU._CheckLimit(pU, gU)) return;
        const EU = tU._FormatMessage(pU),
          PU = this._Levels[UU],
          TU = Array.isArray(RU) ? RU.slice(1) : [];
        PU.logFunc && PU.logFunc("BJS - " + EU, ...TU);
        const qU = `<div style='color:${PU.color}'>${EU}</div><br>`;
        tU._AddLogEntry(qU), tU._GenerateLimitMessage(pU, UU)
      }
      static get LogCache() {
        return tU._LogCache
      }
      static ClearLogCache() {
        tU._LogCache = "", tU._LogLimitOutputs = {}, tU.errorsCount = 0
      }
      static set LogLevels(UU) {
        tU.Log = tU._LogDisabled, tU.Warn = tU._LogDisabled, tU.Error = tU._LogDisabled;
        const RU = [tU.MessageLogLevel, tU.WarningLogLevel, tU.ErrorLogLevel];
        for (const gU of RU)
          if ((UU & gU) === gU) {
            const UU = this._Levels[gU];
            tU[UU.name] = tU._LogEnabled.bind(tU, gU)
          }
      }
    }
    tU.NoneLogLevel = 0, tU.MessageLogLevel = 1, tU.WarningLogLevel = 2, tU.ErrorLogLevel = 4, tU.AllLogLevel = 7, tU.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", tU._LogCache = "", tU._LogLimitOutputs = {}, tU._Levels = [{}, {
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
    }], tU.errorsCount = 0, tU.Log = tU._LogEnabled.bind(tU, tU.MessageLogLevel), tU.Warn = tU._LogEnabled.bind(tU, tU.WarningLogLevel), tU.Error = tU._LogEnabled.bind(tU, tU.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);