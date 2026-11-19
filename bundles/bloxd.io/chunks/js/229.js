export const id = 229;
export const ids = [228, 229];
export const modules = {
  60208: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      RegisterShaderMaterial: () => FY.e,
      ShaderMaterial: () => FY.t,
      ShaderMaterialCreateFromSnippetAsync: () => FY.h,
      ShaderMaterialParse: () => FY.q,
      ShaderMaterialParseFromFileAsync: () => FY.l,
      ShaderMaterialParseFromSnippetAsync: () => FY.p
    });
    var FY = DY(39587);
    (0, FY.e)()
  },
  37105: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY
    });
    var FY = DY(37107);
    class AY {
      static GetPlanes(YY) {
        const rY = [];
        for (let DY = 0; DY < 6; DY++) rY.push(new FY.c(0, 0, 0, 0));
        return AY.GetPlanesToRef(YY, rY), rY
      }
      static GetNearPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] + DY[2], rY.normal.y = DY[7] + DY[6], rY.normal.z = DY[11] + DY[10], rY.d = DY[15] + DY[14], rY.normalize()
      }
      static GetFarPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] - DY[2], rY.normal.y = DY[7] - DY[6], rY.normal.z = DY[11] - DY[10], rY.d = DY[15] - DY[14], rY.normalize()
      }
      static GetLeftPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] + DY[0], rY.normal.y = DY[7] + DY[4], rY.normal.z = DY[11] + DY[8], rY.d = DY[15] + DY[12], rY.normalize()
      }
      static GetRightPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] - DY[0], rY.normal.y = DY[7] - DY[4], rY.normal.z = DY[11] - DY[8], rY.d = DY[15] - DY[12], rY.normalize()
      }
      static GetTopPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] - DY[1], rY.normal.y = DY[7] - DY[5], rY.normal.z = DY[11] - DY[9], rY.d = DY[15] - DY[13], rY.normalize()
      }
      static GetBottomPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] + DY[1], rY.normal.y = DY[7] + DY[5], rY.normal.z = DY[11] + DY[9], rY.d = DY[15] + DY[13], rY.normalize()
      }
      static GetPlanesToRef(YY, rY) {
        AY.GetNearPlaneToRef(YY, rY[0]), AY.GetFarPlaneToRef(YY, rY[1]), AY.GetLeftPlaneToRef(YY, rY[2]), AY.GetRightPlaneToRef(YY, rY[3]), AY.GetTopPlaneToRef(YY, rY[4]), AY.GetBottomPlaneToRef(YY, rY[5])
      }
      static IsPointInFrustum(YY, rY) {
        for (let DY = 0; DY < 6; DY++)
          if (rY[DY].dotCoordinate(YY) < 0) return !1;
        return !0
      }
    }
  },
  37107: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY
    });
    var FY = DY(36524);
    class AY {
      constructor(YY, rY, DY, AY) {
        this.normal = new FY.r(YY, rY, DY), this.d = AY
      }
      VDY() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new AY(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let YY = this.normal.getHashCode();
        return YY = 397 * YY ^ this.d, YY
      }
      normalize() {
        const YY = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let rY = 0;
        return 0 !== YY && (rY = 1 / YY), this.normal.x *= rY, this.normal.y *= rY, this.normal.z *= rY, this.d *= rY, this
      }
      transform(YY) {
        const rY = AY._TmpMatrix;
        YY.invertToRef(rY);
        const DY = rY.m,
          FY = this.normal.x,
          IY = this.normal.y,
          RY = this.normal.z,
          OY = this.d,
          gY = FY * DY[0] + IY * DY[1] + RY * DY[2] + OY * DY[3],
          aY = FY * DY[4] + IY * DY[5] + RY * DY[6] + OY * DY[7],
          vY = FY * DY[8] + IY * DY[9] + RY * DY[10] + OY * DY[11],
          uY = FY * DY[12] + IY * DY[13] + RY * DY[14] + OY * DY[15];
        return new AY(gY, aY, vY, uY)
      }
      dotCoordinate(YY) {
        return this.normal.x * YY.x + this.normal.y * YY.y + this.normal.z * YY.z + this.d
      }
      copyFromPoints(YY, rY, DY) {
        const FY = rY.x - YY.x,
          AY = rY.y - YY.y,
          IY = rY.z - YY.z,
          RY = DY.x - YY.x,
          OY = DY.y - YY.y,
          gY = DY.z - YY.z,
          aY = AY * gY - IY * OY,
          vY = IY * RY - FY * gY,
          uY = FY * OY - AY * RY,
          sY = Math.sqrt(aY * aY + vY * vY + uY * uY);
        let iY;
        return iY = 0 !== sY ? 1 / sY : 0, this.normal.x = aY * iY, this.normal.y = vY * iY, this.normal.z = uY * iY, this.d = -(this.normal.x * YY.x + this.normal.y * YY.y + this.normal.z * YY.z), this
      }
      isFrontFacingTo(YY, rY) {
        return FY.r.Dot(this.normal, YY) <= rY
      }
      signedDistanceTo(YY) {
        return FY.r.Dot(YY, this.normal) + this.d
      }
      static FromArray(YY) {
        return new AY(YY[0], YY[1], YY[2], YY[3])
      }
      static FromPoints(YY, rY, DY) {
        const FY = new AY(0, 0, 0, 0);
        return FY.copyFromPoints(YY, rY, DY), FY
      }
      static FromPositionAndNormal(YY, rY) {
        const DY = new AY(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(YY, rY, DY)
      }
      static FromPositionAndNormalToRef(YY, rY, DY) {
        return DY.normal.brY(rY), DY.normal.normalize(), DY.d = -YY.dot(DY.normal), DY
      }
      static SignedDistanceToPlaneFromPositionAndNormal(YY, rY, DY) {
        const AY = -(rY.x * YY.x + rY.y * YY.y + rY.z * YY.z);
        return FY.r.Dot(DY, rY) + AY
      }
    }
    AY._TmpMatrix = FY.e.Identity()
  },
  38037: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => IY
    });
    var FY = DY(38040);
    const AY = (YY, rY, DY) => YY ? YY.getClassName && "Mesh" === YY.getClassName() ? null : !YY.getClassName || "SubMesh" !== YY.getClassName() && "PhysicsBody" !== YY.getClassName() ? YY.clone ? YY.clone() : Array.isArray(YY) ? YY.slice() : DY && "object" === typeof YY ? {
      ...YY
    } : null : YY.clone(rY) : null;
    class IY {
      static DeepCopy(YY, rY, DY, IY) {
        let RY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const OY = function(YY) {
          const rY = [];
          do {
            const DY = Object.getOwnPropertyNames(YY);
            for (const YY of DY) - 1 === rY.indexOf(YY) && rY.push(YY)
          } while (YY = Object.getPrototypeOf(YY));
          return rY
        }(YY);
        for (const aY of OY) {
          if ("_" === aY[0] && (!IY || -1 === IY.indexOf(aY))) continue;
          if (aY.endsWith("Observable")) continue;
          if (DY && -1 !== DY.indexOf(aY)) continue;
          const OY = YY[aY],
            vY = typeof OY;
          if ("function" !== vY) try {
            if ("object" === vY)
              if (OY instanceof Uint8Array) rY[aY] = Uint8Array.from(OY);
              else if (OY instanceof Array) {
              if (rY[aY] = [], OY.length > 0)
                if ("object" == typeof OY[0])
                  for (let YY = 0; YY < OY.length; YY++) {
                    const DY = AY(OY[YY], rY, RY); - 1 === rY[aY].indexOf(DY) && rY[aY].push(DY)
                  } else rY[aY] = OY.slice(0)
            } else rY[aY] = AY(OY, rY, RY);
            else rY[aY] = OY
          } catch (gY) {
            FY.d.Warn(gY.message)
          }
        }
      }
    }
  },
  37242: (YY, rY, DY) => {
    function FY() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (YY => {
        const rY = 16 * Math.random() | 0;
        return ("x" === YY ? rY : 3 & rY | 8).toString(16)
      }))
    }
    DY.d(rY, {
      c: () => FY
    })
  },
  38040: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => FY
    });
    class FY {
      static _CheckLimit(YY, rY) {
        let DY = FY._LogLimitOutputs[YY];
        return DY ? DY.current++ : (DY = {
          limit: rY,
          current: 1
        }, FY._LogLimitOutputs[YY] = DY), DY.current <= DY.limit
      }
      static _GenerateLimitMessage(YY) {
        let rY = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const DY = FY._LogLimitOutputs[YY];
        if (!DY || !FY.MessageLimitReached) return;
        const AY = this._Levels[rY];
        DY.current === DY.limit && FY[AY.name](FY.MessageLimitReached.replace(/%LIMIT%/g, "" + DY.limit).replace(/%TYPE%/g, AY.name ?? ""))
      }
      static _AddLogEntry(YY) {
        FY._LogCache = YY + FY._LogCache, FY.OnNewCacheEntry && FY.OnNewCacheEntry(YY)
      }
      static _FormatMessage(YY) {
        const rY = YY => YY < 10 ? "0" + YY : "" + YY,
          DY = new Date;
        return "[" + rY(DY.getHours()) + ":" + rY(DY.getMinutes()) + ":" + rY(DY.getSeconds()) + "]: " + YY
      }
      static _LogDisabled(YY, rY) {}
      static _LogEnabled() {
        let YY = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          rY = arguments.length > 1 ? arguments[1] : void 0,
          DY = arguments.length > 2 ? arguments[2] : void 0;
        const AY = Array.isArray(rY) ? rY[0] : rY;
        if (void 0 !== DY && !FY._CheckLimit(AY, DY)) return;
        const IY = FY._FormatMessage(AY),
          RY = this._Levels[YY],
          OY = Array.isArray(rY) ? rY.slice(1) : [];
        RY.logFunc && RY.logFunc("BJS - " + IY, ...OY);
        const gY = `<div style='color:${RY.color}'>${IY}</div><br>`;
        FY._AddLogEntry(gY), FY._GenerateLimitMessage(AY, YY)
      }
      static get LogCache() {
        return FY._LogCache
      }
      static ClearLogCache() {
        FY._LogCache = "", FY._LogLimitOutputs = {}, FY.errorsCount = 0
      }
      static set LogLevels(YY) {
        FY.Log = FY._LogDisabled, FY.Warn = FY._LogDisabled, FY.Error = FY._LogDisabled;
        const rY = [FY.MessageLogLevel, FY.WarningLogLevel, FY.ErrorLogLevel];
        for (const DY of rY)
          if ((YY & DY) === DY) {
            const YY = this._Levels[DY];
            FY[YY.name] = FY._LogEnabled.bind(FY, DY)
          }
      }
    }
    FY.NoneLogLevel = 0, FY.MessageLogLevel = 1, FY.WarningLogLevel = 2, FY.ErrorLogLevel = 4, FY.AllLogLevel = 7, FY.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", FY._LogCache = "", FY._LogLimitOutputs = {}, FY._Levels = [{}, {
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
    }], FY.errorsCount = 0, FY.Log = FY._LogEnabled.bind(FY, FY.MessageLogLevel), FY.Warn = FY._LogEnabled.bind(FY, FY.WarningLogLevel), FY.Error = FY._LogEnabled.bind(FY, FY.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);