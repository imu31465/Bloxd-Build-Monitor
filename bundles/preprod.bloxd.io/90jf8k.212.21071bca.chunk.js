export const id = 212;
export const ids = [212];
export const modules = {
  36173: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF
    });
    var CF = SF(36181);
    class AF {
      static GetPlanes(FF) {
        const WF = [];
        for (let SF = 0; SF < 6; SF++) WF.push(new CF.d(0, 0, 0, 0));
        return AF.GetPlanesToRef(FF, WF), WF
      }
      static GetNearPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] + SF[2], WF.normal.y = SF[7] + SF[6], WF.normal.z = SF[11] + SF[10], WF.d = SF[15] + SF[14], WF.normalize()
      }
      static GetFarPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] - SF[2], WF.normal.y = SF[7] - SF[6], WF.normal.z = SF[11] - SF[10], WF.d = SF[15] - SF[14], WF.normalize()
      }
      static GetLeftPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] + SF[0], WF.normal.y = SF[7] + SF[4], WF.normal.z = SF[11] + SF[8], WF.d = SF[15] + SF[12], WF.normalize()
      }
      static GetRightPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] - SF[0], WF.normal.y = SF[7] - SF[4], WF.normal.z = SF[11] - SF[8], WF.d = SF[15] - SF[12], WF.normalize()
      }
      static GetTopPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] - SF[1], WF.normal.y = SF[7] - SF[5], WF.normal.z = SF[11] - SF[9], WF.d = SF[15] - SF[13], WF.normalize()
      }
      static GetBottomPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] + SF[1], WF.normal.y = SF[7] + SF[5], WF.normal.z = SF[11] + SF[9], WF.d = SF[15] + SF[13], WF.normalize()
      }
      static GetPlanesToRef(FF, WF) {
        AF.GetNearPlaneToRef(FF, WF[0]), AF.GetFarPlaneToRef(FF, WF[1]), AF.GetLeftPlaneToRef(FF, WF[2]), AF.GetRightPlaneToRef(FF, WF[3]), AF.GetTopPlaneToRef(FF, WF[4]), AF.GetBottomPlaneToRef(FF, WF[5])
      }
      static IsPointInFrustum(FF, WF) {
        for (let SF = 0; SF < 6; SF++)
          if (WF[SF].dotCoordinate(FF) < 0) return !1;
        return !0
      }
    }
  },
  36181: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF
    });
    var CF = SF(35623);
    class AF {
      constructor(FF, WF, SF, AF) {
        this.normal = new CF.r(FF, WF, SF), this.d = AF
      }
      kRF() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new AF(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let FF = this.normal.getHashCode();
        return FF = 397 * FF ^ this.d, FF
      }
      normalize() {
        const FF = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let WF = 0;
        return 0 !== FF && (WF = 1 / FF), this.normal.x *= WF, this.normal.y *= WF, this.normal.z *= WF, this.d *= WF, this
      }
      transform(FF) {
        const WF = AF._TmpMatrix;
        FF.invertToRef(WF);
        const SF = WF.m,
          CF = this.normal.x,
          uF = this.normal.y,
          hF = this.normal.z,
          bW = this.d,
          dF = CF * SF[0] + uF * SF[1] + hF * SF[2] + bW * SF[3],
          PF = CF * SF[4] + uF * SF[5] + hF * SF[6] + bW * SF[7],
          RF = CF * SF[8] + uF * SF[9] + hF * SF[10] + bW * SF[11],
          iW = CF * SF[12] + uF * SF[13] + hF * SF[14] + bW * SF[15];
        return new AF(dF, PF, RF, iW)
      }
      dotCoordinate(FF) {
        return this.normal.x * FF.x + this.normal.y * FF.y + this.normal.z * FF.z + this.d
      }
      copyFromPoints(FF, WF, SF) {
        const CF = WF.x - FF.x,
          AF = WF.y - FF.y,
          uF = WF.z - FF.z,
          hF = SF.x - FF.x,
          bW = SF.y - FF.y,
          dF = SF.z - FF.z,
          PF = AF * dF - uF * bW,
          RF = uF * hF - CF * dF,
          iW = CF * bW - AF * hF,
          eF = Math.sqrt(PF * PF + RF * RF + iW * iW);
        let EF;
        return EF = 0 !== eF ? 1 / eF : 0, this.normal.x = PF * EF, this.normal.y = RF * EF, this.normal.z = iW * EF, this.d = -(this.normal.x * FF.x + this.normal.y * FF.y + this.normal.z * FF.z), this
      }
      isFrontFacingTo(FF, WF) {
        return CF.r.Dot(this.normal, FF) <= WF
      }
      signedDistanceTo(FF) {
        return CF.r.Dot(FF, this.normal) + this.d
      }
      static FromArray(FF) {
        return new AF(FF[0], FF[1], FF[2], FF[3])
      }
      static FromPoints(FF, WF, SF) {
        const CF = new AF(0, 0, 0, 0);
        return CF.copyFromPoints(FF, WF, SF), CF
      }
      static FromPositionAndNormal(FF, WF) {
        const SF = new AF(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(FF, WF, SF)
      }
      static FromPositionAndNormalToRef(FF, WF, SF) {
        return SF.normal.fdF(WF), SF.normal.normalize(), SF.d = -FF.dot(SF.normal), SF
      }
      static SignedDistanceToPlaneFromPositionAndNormal(FF, WF, SF) {
        const AF = -(WF.x * FF.x + WF.y * FF.y + WF.z * FF.z);
        return CF.r.Dot(SF, WF) + AF
      }
    }
    AF._TmpMatrix = CF.b.Identity()
  },
  37069: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => uF
    });
    var CF = SF(37076);
    const AF = (FF, WF, SF) => FF ? FF.getClassName && "Mesh" === FF.getClassName() ? null : !FF.getClassName || "SubMesh" !== FF.getClassName() && "PhysicsBody" !== FF.getClassName() ? FF.clone ? FF.clone() : Array.isArray(FF) ? FF.slice() : SF && "object" === typeof FF ? {
      ...FF
    } : null : FF.clone(WF) : null;
    class uF {
      static DeepCopy(FF, WF, SF, uF) {
        let hF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bW = function(FF) {
          const WF = [];
          do {
            const SF = Object.getOwnPropertyNames(FF);
            for (const FF of SF) - 1 === WF.indexOf(FF) && WF.push(FF)
          } while (FF = Object.getPrototypeOf(FF));
          return WF
        }(FF);
        for (const PF of bW) {
          if ("_" === PF[0] && (!uF || -1 === uF.indexOf(PF))) continue;
          if (PF.endsWith("Observable")) continue;
          if (SF && -1 !== SF.indexOf(PF)) continue;
          const bW = FF[PF],
            RF = typeof bW;
          if ("function" !== RF) try {
            if ("object" === RF)
              if (bW instanceof Uint8Array) WF[PF] = Uint8Array.from(bW);
              else if (bW instanceof Array) {
              if (WF[PF] = [], bW.length > 0)
                if ("object" == typeof bW[0])
                  for (let FF = 0; FF < bW.length; FF++) {
                    const SF = AF(bW[FF], WF, hF); - 1 === WF[PF].indexOf(SF) && WF[PF].push(SF)
                  } else WF[PF] = bW.slice(0)
            } else WF[PF] = AF(bW, WF, hF);
            else WF[PF] = bW
          } catch (dF) {
            CF.b.Warn(dF.message)
          }
        }
      }
    }
  },
  36308: (FF, WF, SF) => {
    function CF() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (FF => {
        const WF = 16 * Math.random() | 0;
        return ("x" === FF ? WF : 3 & WF | 8).toString(16)
      }))
    }
    SF.d(WF, {
      b: () => CF
    })
  },
  37076: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => CF
    });
    class CF {
      static _CheckLimit(FF, WF) {
        let SF = CF._LogLimitOutputs[FF];
        return SF ? SF.current++ : (SF = {
          limit: WF,
          current: 1
        }, CF._LogLimitOutputs[FF] = SF), SF.current <= SF.limit
      }
      static _GenerateLimitMessage(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const SF = CF._LogLimitOutputs[FF];
        if (!SF || !CF.MessageLimitReached) return;
        const AF = this._Levels[WF];
        SF.current === SF.limit && CF[AF.name](CF.MessageLimitReached.replace(/%LIMIT%/g, "" + SF.limit).replace(/%TYPE%/g, AF.name ?? ""))
      }
      static _AddLogEntry(FF) {
        CF._LogCache = FF + CF._LogCache, CF.OnNewCacheEntry && CF.OnNewCacheEntry(FF)
      }
      static _FormatMessage(FF) {
        const WF = FF => FF < 10 ? "0" + FF : "" + FF,
          SF = new Date;
        return "[" + WF(SF.getHours()) + ":" + WF(SF.getMinutes()) + ":" + WF(SF.getSeconds()) + "]: " + FF
      }
      static _LogDisabled(FF, WF) {}
      static _LogEnabled() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          WF = arguments.length > 1 ? arguments[1] : void 0,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        const AF = Array.isArray(WF) ? WF[0] : WF;
        if (void 0 !== SF && !CF._CheckLimit(AF, SF)) return;
        const uF = CF._FormatMessage(AF),
          hF = this._Levels[FF],
          bW = Array.isArray(WF) ? WF.slice(1) : [];
        hF.logFunc && hF.logFunc("BJS - " + uF, ...bW);
        const dF = `<div style='color:${hF.color}'>${uF}</div><br>`;
        CF._AddLogEntry(dF), CF._GenerateLimitMessage(AF, FF)
      }
      static get LogCache() {
        return CF._LogCache
      }
      static ClearLogCache() {
        CF._LogCache = "", CF._LogLimitOutputs = {}, CF.errorsCount = 0
      }
      static set LogLevels(FF) {
        CF.Log = CF._LogDisabled, CF.Warn = CF._LogDisabled, CF.Error = CF._LogDisabled;
        const WF = [CF.MessageLogLevel, CF.WarningLogLevel, CF.ErrorLogLevel];
        for (const SF of WF)
          if ((FF & SF) === SF) {
            const FF = this._Levels[SF];
            CF[FF.name] = CF._LogEnabled.bind(CF, SF)
          }
      }
    }
    CF.NoneLogLevel = 0, CF.MessageLogLevel = 1, CF.WarningLogLevel = 2, CF.ErrorLogLevel = 4, CF.AllLogLevel = 7, CF.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", CF._LogCache = "", CF._LogLimitOutputs = {}, CF._Levels = [{}, {
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
    }], CF.errorsCount = 0, CF.Log = CF._LogEnabled.bind(CF, CF.MessageLogLevel), CF.Warn = CF._LogEnabled.bind(CF, CF.WarningLogLevel), CF.Error = CF._LogEnabled.bind(CF, CF.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);