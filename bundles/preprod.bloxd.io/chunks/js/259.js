export const id = 259;
export const ids = [258, 259];
export const modules = {
  63952: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      RegisterShaderMaterial: () => cU.d,
      ShaderMaterial: () => cU.o,
      ShaderMaterialCreateFromSnippetAsync: () => cU.h,
      ShaderMaterialParse: () => cU.n,
      ShaderMaterialParseFromFileAsync: () => cU.i,
      ShaderMaterialParseFromSnippetAsync: () => cU.k
    });
    var cU = zU(41549);
    (0, cU.d)()
  },
  38502: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU
    });
    var cU = zU(38505);
    class yU {
      static GetPlanes(UU) {
        const XU = [];
        for (let zU = 0; zU < 6; zU++) XU.push(new cU.d(0, 0, 0, 0));
        return yU.GetPlanesToRef(UU, XU), XU
      }
      static GetNearPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] + zU[2], XU.normal.y = zU[7] + zU[6], XU.normal.z = zU[11] + zU[10], XU.d = zU[15] + zU[14], XU.normalize()
      }
      static GetFarPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] - zU[2], XU.normal.y = zU[7] - zU[6], XU.normal.z = zU[11] - zU[10], XU.d = zU[15] - zU[14], XU.normalize()
      }
      static GetLeftPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] + zU[0], XU.normal.y = zU[7] + zU[4], XU.normal.z = zU[11] + zU[8], XU.d = zU[15] + zU[12], XU.normalize()
      }
      static GetRightPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] - zU[0], XU.normal.y = zU[7] - zU[4], XU.normal.z = zU[11] - zU[8], XU.d = zU[15] - zU[12], XU.normalize()
      }
      static GetTopPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] - zU[1], XU.normal.y = zU[7] - zU[5], XU.normal.z = zU[11] - zU[9], XU.d = zU[15] - zU[13], XU.normalize()
      }
      static GetBottomPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] + zU[1], XU.normal.y = zU[7] + zU[5], XU.normal.z = zU[11] + zU[9], XU.d = zU[15] + zU[13], XU.normalize()
      }
      static GetPlanesToRef(UU, XU) {
        yU.GetNearPlaneToRef(UU, XU[0]), yU.GetFarPlaneToRef(UU, XU[1]), yU.GetLeftPlaneToRef(UU, XU[2]), yU.GetRightPlaneToRef(UU, XU[3]), yU.GetTopPlaneToRef(UU, XU[4]), yU.GetBottomPlaneToRef(UU, XU[5])
      }
      static IsPointInFrustum(UU, XU) {
        for (let zU = 0; zU < 6; zU++)
          if (XU[zU].dotCoordinate(UU) < 0) return !1;
        return !0
      }
    }
  },
  38505: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU
    });
    var cU = zU(37819);
    class yU {
      constructor(UU, XU, zU, yU) {
        this.normal = new cU.q(UU, XU, zU), this.d = yU
      }
      cyU() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new yU(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let XU = 0;
        return 0 !== UU && (XU = 1 / UU), this.normal.x *= XU, this.normal.y *= XU, this.normal.z *= XU, this.d *= XU, this
      }
      transform(UU) {
        const XU = yU._TmpMatrix;
        UU.invertToRef(XU);
        const zU = XU.m,
          cU = this.normal.x,
          QU = this.normal.y,
          AU = this.normal.z,
          FU = this.d,
          oU = cU * zU[0] + QU * zU[1] + AU * zU[2] + FU * zU[3],
          DU = cU * zU[4] + QU * zU[5] + AU * zU[6] + FU * zU[7],
          EU = cU * zU[8] + QU * zU[9] + AU * zU[10] + FU * zU[11],
          YU = cU * zU[12] + QU * zU[13] + AU * zU[14] + FU * zU[15];
        return new yU(oU, DU, EU, YU)
      }
      dotCoordinate(UU) {
        return this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z + this.d
      }
      copyFromPoints(UU, XU, zU) {
        const cU = XU.x - UU.x,
          yU = XU.y - UU.y,
          QU = XU.z - UU.z,
          AU = zU.x - UU.x,
          FU = zU.y - UU.y,
          oU = zU.z - UU.z,
          DU = yU * oU - QU * FU,
          EU = QU * AU - cU * oU,
          YU = cU * FU - yU * AU,
          NU = Math.sqrt(DU * DU + EU * EU + YU * YU);
        let IU;
        return IU = 0 !== NU ? 1 / NU : 0, this.normal.x = DU * IU, this.normal.y = EU * IU, this.normal.z = YU * IU, this.d = -(this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z), this
      }
      isFrontFacingTo(UU, XU) {
        return cU.q.Dot(this.normal, UU) <= XU
      }
      signedDistanceTo(UU) {
        return cU.q.Dot(UU, this.normal) + this.d
      }
      static FromArray(UU) {
        return new yU(UU[0], UU[1], UU[2], UU[3])
      }
      static FromPoints(UU, XU, zU) {
        const cU = new yU(0, 0, 0, 0);
        return cU.copyFromPoints(UU, XU, zU), cU
      }
      static FromPositionAndNormal(UU, XU) {
        const zU = new yU(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(UU, XU, zU)
      }
      static FromPositionAndNormalToRef(UU, XU, zU) {
        return zU.normal.YL(XU), zU.normal.normalize(), zU.d = -UU.dot(zU.normal), zU
      }
      static SignedDistanceToPlaneFromPositionAndNormal(UU, XU, zU) {
        const yU = -(XU.x * UU.x + XU.y * UU.y + XU.z * UU.z);
        return cU.q.Dot(zU, XU) + yU
      }
    }
    yU._TmpMatrix = cU.e.Identity()
  },
  39486: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => QU
    });
    var cU = zU(39493);
    const yU = (UU, XU, zU) => UU ? UU.getClassName && "Mesh" === UU.getClassName() ? null : !UU.getClassName || "SubMesh" !== UU.getClassName() && "PhysicsBody" !== UU.getClassName() ? UU.clone ? UU.clone() : Array.isArray(UU) ? UU.slice() : zU && "object" === typeof UU ? {
      ...UU
    } : null : UU.clone(XU) : null;
    class QU {
      static DeepCopy(UU, XU, zU, QU) {
        let AU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const FU = function(UU) {
          const XU = [];
          do {
            const zU = Object.getOwnPropertyNames(UU);
            for (const UU of zU) - 1 === XU.indexOf(UU) && XU.push(UU)
          } while (UU = Object.getPrototypeOf(UU));
          return XU
        }(UU);
        for (const DU of FU) {
          if ("_" === DU[0] && (!QU || -1 === QU.indexOf(DU))) continue;
          if (DU.endsWith("Observable")) continue;
          if (zU && -1 !== zU.indexOf(DU)) continue;
          const FU = UU[DU],
            EU = typeof FU;
          if ("function" !== EU) try {
            if ("object" === EU)
              if (FU instanceof Uint8Array) XU[DU] = Uint8Array.from(FU);
              else if (FU instanceof Array) {
              if (XU[DU] = [], FU.length > 0)
                if ("object" == typeof FU[0])
                  for (let UU = 0; UU < FU.length; UU++) {
                    const zU = yU(FU[UU], XU, AU); - 1 === XU[DU].indexOf(zU) && XU[DU].push(zU)
                  } else XU[DU] = FU.slice(0)
            } else XU[DU] = yU(FU, XU, AU);
            else XU[DU] = FU
          } catch (oU) {
            cU.b.Warn(oU.message)
          }
        }
      }
    }
  },
  38649: (UU, XU, zU) => {
    function cU() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (UU => {
        const XU = 16 * Math.random() | 0;
        return ("x" === UU ? XU : 3 & XU | 8).toString(16)
      }))
    }
    zU.d(XU, {
      d: () => cU
    })
  },
  39493: (UU, XU, zU) => {
    zU.d(XU, {
      b: () => cU
    });
    class cU {
      static _CheckLimit(UU, XU) {
        let zU = cU._LogLimitOutputs[UU];
        return zU ? zU.current++ : (zU = {
          limit: XU,
          current: 1
        }, cU._LogLimitOutputs[UU] = zU), zU.current <= zU.limit
      }
      static _GenerateLimitMessage(UU) {
        let XU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const zU = cU._LogLimitOutputs[UU];
        if (!zU || !cU.MessageLimitReached) return;
        const yU = this._Levels[XU];
        zU.current === zU.limit && cU[yU.name](cU.MessageLimitReached.replace(/%LIMIT%/g, "" + zU.limit).replace(/%TYPE%/g, yU.name ?? ""))
      }
      static _AddLogEntry(UU) {
        cU._LogCache = UU + cU._LogCache, cU.OnNewCacheEntry && cU.OnNewCacheEntry(UU)
      }
      static _FormatMessage(UU) {
        const XU = UU => UU < 10 ? "0" + UU : "" + UU,
          zU = new Date;
        return "[" + XU(zU.getHours()) + ":" + XU(zU.getMinutes()) + ":" + XU(zU.getSeconds()) + "]: " + UU
      }
      static _LogDisabled(UU, XU) {}
      static _LogEnabled() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          XU = arguments.length > 1 ? arguments[1] : void 0,
          zU = arguments.length > 2 ? arguments[2] : void 0;
        const yU = Array.isArray(XU) ? XU[0] : XU;
        if (void 0 !== zU && !cU._CheckLimit(yU, zU)) return;
        const QU = cU._FormatMessage(yU),
          AU = this._Levels[UU],
          FU = Array.isArray(XU) ? XU.slice(1) : [];
        AU.logFunc && AU.logFunc("BJS - " + QU, ...FU);
        const oU = `<div style='color:${AU.color}'>${QU}</div><br>`;
        cU._AddLogEntry(oU), cU._GenerateLimitMessage(yU, UU)
      }
      static get LogCache() {
        return cU._LogCache
      }
      static ClearLogCache() {
        cU._LogCache = "", cU._LogLimitOutputs = {}, cU.errorsCount = 0
      }
      static set LogLevels(UU) {
        cU.Log = cU._LogDisabled, cU.Warn = cU._LogDisabled, cU.Error = cU._LogDisabled;
        const XU = [cU.MessageLogLevel, cU.WarningLogLevel, cU.ErrorLogLevel];
        for (const zU of XU)
          if ((UU & zU) === zU) {
            const UU = this._Levels[zU];
            cU[UU.name] = cU._LogEnabled.bind(cU, zU)
          }
      }
    }
    cU.NoneLogLevel = 0, cU.MessageLogLevel = 1, cU.WarningLogLevel = 2, cU.ErrorLogLevel = 4, cU.AllLogLevel = 7, cU.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", cU._LogCache = "", cU._LogLimitOutputs = {}, cU._Levels = [{}, {
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
    }], cU.errorsCount = 0, cU.Log = cU._LogEnabled.bind(cU, cU.MessageLogLevel), cU.Warn = cU._LogEnabled.bind(cU, cU.WarningLogLevel), cU.Error = cU._LogEnabled.bind(cU, cU.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);