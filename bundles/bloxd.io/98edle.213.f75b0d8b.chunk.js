export const id = 213;
export const ids = [212, 213];
export const modules = {
  58583: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      RegisterShaderMaterial: () => wW.d,
      ShaderMaterial: () => wW.r,
      ShaderMaterialCreateFromSnippetAsync: () => wW.f,
      ShaderMaterialParse: () => wW.o,
      ShaderMaterialParseFromFileAsync: () => wW.i,
      ShaderMaterialParseFromSnippetAsync: () => wW.m
    });
    var wW = MW(38062);
    (0, wW.d)()
  },
  35845: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW
    });
    var wW = MW(35852);
    class CW {
      static GetPlanes(WW) {
        const RW = [];
        for (let MW = 0; MW < 6; MW++) RW.push(new wW.c(0, 0, 0, 0));
        return CW.GetPlanesToRef(WW, RW), RW
      }
      static GetNearPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] + MW[2], RW.normal.y = MW[7] + MW[6], RW.normal.z = MW[11] + MW[10], RW.d = MW[15] + MW[14], RW.normalize()
      }
      static GetFarPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] - MW[2], RW.normal.y = MW[7] - MW[6], RW.normal.z = MW[11] - MW[10], RW.d = MW[15] - MW[14], RW.normalize()
      }
      static GetLeftPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] + MW[0], RW.normal.y = MW[7] + MW[4], RW.normal.z = MW[11] + MW[8], RW.d = MW[15] + MW[12], RW.normalize()
      }
      static GetRightPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] - MW[0], RW.normal.y = MW[7] - MW[4], RW.normal.z = MW[11] - MW[8], RW.d = MW[15] - MW[12], RW.normalize()
      }
      static GetTopPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] - MW[1], RW.normal.y = MW[7] - MW[5], RW.normal.z = MW[11] - MW[9], RW.d = MW[15] - MW[13], RW.normalize()
      }
      static GetBottomPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] + MW[1], RW.normal.y = MW[7] + MW[5], RW.normal.z = MW[11] + MW[9], RW.d = MW[15] + MW[13], RW.normalize()
      }
      static GetPlanesToRef(WW, RW) {
        CW.GetNearPlaneToRef(WW, RW[0]), CW.GetFarPlaneToRef(WW, RW[1]), CW.GetLeftPlaneToRef(WW, RW[2]), CW.GetRightPlaneToRef(WW, RW[3]), CW.GetTopPlaneToRef(WW, RW[4]), CW.GetBottomPlaneToRef(WW, RW[5])
      }
      static IsPointInFrustum(WW, RW) {
        for (let MW = 0; MW < 6; MW++)
          if (RW[MW].dotCoordinate(WW) < 0) return !1;
        return !0
      }
    }
  },
  35852: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW
    });
    var wW = MW(35324);
    class CW {
      constructor(WW, RW, MW, CW) {
        this.normal = new wW.q(WW, RW, MW), this.d = CW
      }
      JNW() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new CW(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let WW = this.normal.getHashCode();
        return WW = 397 * WW ^ this.d, WW
      }
      normalize() {
        const WW = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let RW = 0;
        return 0 !== WW && (RW = 1 / WW), this.normal.x *= RW, this.normal.y *= RW, this.normal.z *= RW, this.d *= RW, this
      }
      transform(WW) {
        const RW = CW._TmpMatrix;
        WW.invertToRef(RW);
        const MW = RW.m,
          wW = this.normal.x,
          zR = this.normal.y,
          AW = this.normal.z,
          bR = this.d,
          yR = wW * MW[0] + zR * MW[1] + AW * MW[2] + bR * MW[3],
          NW = wW * MW[4] + zR * MW[5] + AW * MW[6] + bR * MW[7],
          eW = wW * MW[8] + zR * MW[9] + AW * MW[10] + bR * MW[11],
          BW = wW * MW[12] + zR * MW[13] + AW * MW[14] + bR * MW[15];
        return new CW(yR, NW, eW, BW)
      }
      dotCoordinate(WW) {
        return this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z + this.d
      }
      copyFromPoints(WW, RW, MW) {
        const wW = RW.x - WW.x,
          CW = RW.y - WW.y,
          zR = RW.z - WW.z,
          AW = MW.x - WW.x,
          bR = MW.y - WW.y,
          yR = MW.z - WW.z,
          NW = CW * yR - zR * bR,
          eW = zR * AW - wW * yR,
          BW = wW * bR - CW * AW,
          tR = Math.sqrt(NW * NW + eW * eW + BW * BW);
        let TW;
        return TW = 0 !== tR ? 1 / tR : 0, this.normal.x = NW * TW, this.normal.y = eW * TW, this.normal.z = BW * TW, this.d = -(this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z), this
      }
      isFrontFacingTo(WW, RW) {
        return wW.q.Dot(this.normal, WW) <= RW
      }
      signedDistanceTo(WW) {
        return wW.q.Dot(WW, this.normal) + this.d
      }
      static FromArray(WW) {
        return new CW(WW[0], WW[1], WW[2], WW[3])
      }
      static FromPoints(WW, RW, MW) {
        const wW = new CW(0, 0, 0, 0);
        return wW.copyFromPoints(WW, RW, MW), wW
      }
      static FromPositionAndNormal(WW, RW) {
        const MW = new CW(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(WW, RW, MW)
      }
      static FromPositionAndNormalToRef(WW, RW, MW) {
        return MW.normal.hyW(RW), MW.normal.normalize(), MW.d = -WW.dot(MW.normal), MW
      }
      static SignedDistanceToPlaneFromPositionAndNormal(WW, RW, MW) {
        const CW = -(RW.x * WW.x + RW.y * WW.y + RW.z * WW.z);
        return wW.q.Dot(MW, RW) + CW
      }
    }
    CW._TmpMatrix = wW.d.Identity()
  },
  36716: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => zR
    });
    var wW = MW(36721);
    const CW = (WW, RW, MW) => WW ? WW.getClassName && "Mesh" === WW.getClassName() ? null : !WW.getClassName || "SubMesh" !== WW.getClassName() && "PhysicsBody" !== WW.getClassName() ? WW.clone ? WW.clone() : Array.isArray(WW) ? WW.slice() : MW && "object" === typeof WW ? {
      ...WW
    } : null : WW.clone(RW) : null;
    class zR {
      static DeepCopy(WW, RW, MW, zR) {
        let AW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bR = function(WW) {
          const RW = [];
          do {
            const MW = Object.getOwnPropertyNames(WW);
            for (const WW of MW) - 1 === RW.indexOf(WW) && RW.push(WW)
          } while (WW = Object.getPrototypeOf(WW));
          return RW
        }(WW);
        for (const NW of bR) {
          if ("_" === NW[0] && (!zR || -1 === zR.indexOf(NW))) continue;
          if (NW.endsWith("Observable")) continue;
          if (MW && -1 !== MW.indexOf(NW)) continue;
          const bR = WW[NW],
            eW = typeof bR;
          if ("function" !== eW) try {
            if ("object" === eW)
              if (bR instanceof Uint8Array) RW[NW] = Uint8Array.from(bR);
              else if (bR instanceof Array) {
              if (RW[NW] = [], bR.length > 0)
                if ("object" == typeof bR[0])
                  for (let WW = 0; WW < bR.length; WW++) {
                    const MW = CW(bR[WW], RW, AW); - 1 === RW[NW].indexOf(MW) && RW[NW].push(MW)
                  } else RW[NW] = bR.slice(0)
            } else RW[NW] = CW(bR, RW, AW);
            else RW[NW] = bR
          } catch (yR) {
            wW.b.Warn(yR.message)
          }
        }
      }
    }
  },
  35984: (WW, RW, MW) => {
    function wW() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
        const RW = 16 * Math.random() | 0;
        return ("x" === WW ? RW : 3 & RW | 8).toString(16)
      }))
    }
    MW.d(RW, {
      e: () => wW
    })
  },
  36721: (WW, RW, MW) => {
    MW.d(RW, {
      b: () => wW
    });
    class wW {
      static _CheckLimit(WW, RW) {
        let MW = wW._LogLimitOutputs[WW];
        return MW ? MW.current++ : (MW = {
          limit: RW,
          current: 1
        }, wW._LogLimitOutputs[WW] = MW), MW.current <= MW.limit
      }
      static _GenerateLimitMessage(WW) {
        let RW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const MW = wW._LogLimitOutputs[WW];
        if (!MW || !wW.MessageLimitReached) return;
        const CW = this._Levels[RW];
        MW.current === MW.limit && wW[CW.name](wW.MessageLimitReached.replace(/%LIMIT%/g, "" + MW.limit).replace(/%TYPE%/g, CW.name ?? ""))
      }
      static _AddLogEntry(WW) {
        wW._LogCache = WW + wW._LogCache, wW.OnNewCacheEntry && wW.OnNewCacheEntry(WW)
      }
      static _FormatMessage(WW) {
        const RW = WW => WW < 10 ? "0" + WW : "" + WW,
          MW = new Date;
        return "[" + RW(MW.getHours()) + ":" + RW(MW.getMinutes()) + ":" + RW(MW.getSeconds()) + "]: " + WW
      }
      static _LogDisabled(WW, RW) {}
      static _LogEnabled() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RW = arguments.length > 1 ? arguments[1] : void 0,
          MW = arguments.length > 2 ? arguments[2] : void 0;
        const CW = Array.isArray(RW) ? RW[0] : RW;
        if (void 0 !== MW && !wW._CheckLimit(CW, MW)) return;
        const zR = wW._FormatMessage(CW),
          AW = this._Levels[WW],
          bR = Array.isArray(RW) ? RW.slice(1) : [];
        AW.logFunc && AW.logFunc("BJS - " + zR, ...bR);
        const yR = `<div style='color:${AW.color}'>${zR}</div><br>`;
        wW._AddLogEntry(yR), wW._GenerateLimitMessage(CW, WW)
      }
      static get LogCache() {
        return wW._LogCache
      }
      static ClearLogCache() {
        wW._LogCache = "", wW._LogLimitOutputs = {}, wW.errorsCount = 0
      }
      static set LogLevels(WW) {
        wW.Log = wW._LogDisabled, wW.Warn = wW._LogDisabled, wW.Error = wW._LogDisabled;
        const RW = [wW.MessageLogLevel, wW.WarningLogLevel, wW.ErrorLogLevel];
        for (const MW of RW)
          if ((WW & MW) === MW) {
            const WW = this._Levels[MW];
            wW[WW.name] = wW._LogEnabled.bind(wW, MW)
          }
      }
    }
    wW.NoneLogLevel = 0, wW.MessageLogLevel = 1, wW.WarningLogLevel = 2, wW.ErrorLogLevel = 4, wW.AllLogLevel = 7, wW.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", wW._LogCache = "", wW._LogLimitOutputs = {}, wW._Levels = [{}, {
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
    }], wW.errorsCount = 0, wW.Log = wW._LogEnabled.bind(wW, wW.MessageLogLevel), wW.Warn = wW._LogEnabled.bind(wW, wW.WarningLogLevel), wW.Error = wW._LogEnabled.bind(wW, wW.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);