export const id = 216;
export const ids = [216];
export const modules = {
  39061: (FF, WF, SF) => {
    SF.d(WF, {
      b: () => hF,
      d: () => RF,
      g: () => PF
    });
    var CF, AF = SF(35650),
      uF = SF(35623);
    ! function(FF) {
      FF[FF.CW = 0] = "CW", FF[FF.CCW = 1] = "CCW"
    }(CF || (CF = {}));
    class hF {
      static Interpolate(FF, WF, SF, CF, AF) {
        if (0 === FF) return 0;
        const uF = 1 - 3 * CF + 3 * WF,
          hF = 3 * CF - 6 * WF,
          bW = 3 * WF;
        let dF = FF;
        for (let PF = 0; PF < 5; PF++) {
          const WF = dF * dF;
          dF -= (uF * (WF * dF) + hF * WF + bW * dF - FF) * (1 / (3 * uF * WF + 2 * hF * dF + bW)), dF = Math.min(1, Math.max(0, dF))
        }
        return 3 * Math.pow(1 - dF, 2) * dF * SF + 3 * (1 - dF) * Math.pow(dF, 2) * AF + Math.pow(dF, 3)
      }
    }
    class bW {
      constructor(FF) {
        this._radians = FF, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(FF, WF) {
        const SF = WF.subtract(FF),
          CF = Math.atan2(SF.y, SF.x);
        return new bW(CF)
      }
      static BetweenTwoVectors(FF, WF) {
        let SF = FF.lengthSquared() * WF.lengthSquared();
        if (0 === SF) return new bW(Math.PI / 2);
        SF = Math.sqrt(SF);
        let CF = FF.dot(WF) / SF;
        CF = (0, AF.Clamp)(CF, -1, 1);
        const uF = Math.acos(CF);
        return new bW(uF)
      }
      static FromRadians(FF) {
        return new bW(FF)
      }
      static FromDegrees(FF) {
        return new bW(FF * Math.PI / 180)
      }
    }
    class dF {
      constructor(FF, WF, SF) {
        this.startPoint = FF, this.midPoint = WF, this.endPoint = SF;
        const CF = Math.pow(WF.x, 2) + Math.pow(WF.y, 2),
          AF = (Math.pow(FF.x, 2) + Math.pow(FF.y, 2) - CF) / 2,
          hF = (CF - Math.pow(SF.x, 2) - Math.pow(SF.y, 2)) / 2,
          dF = (FF.x - WF.x) * (WF.y - SF.y) - (WF.x - SF.x) * (FF.y - WF.y);
        this.centerPoint = new uF.n((AF * (WF.y - SF.y) - hF * (FF.y - WF.y)) / dF, ((FF.x - WF.x) * hF - (WF.x - SF.x) * AF) / dF), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = bW.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const PF = this.startAngle.degrees();
        let RF = bW.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          iW = bW.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        RF - PF > 180 && (RF -= 360), RF - PF < -180 && (RF += 360), iW - RF > 180 && (iW -= 360), iW - RF < -180 && (iW += 360), this.orientation = RF - PF < 0 ? 0 : 1, this.angle = bW.FromDegrees(0 === this.orientation ? PF - iW : iW - PF)
      }
    }
    class PF {
      constructor(FF, WF) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new uF.n(FF, WF))
      }
      addLineTo(FF, WF) {
        if (this.closed) return this;
        const SF = new uF.n(FF, WF),
          CF = this._points[this._points.length - 1];
        return this._points.push(SF), this._length += SF.subtract(CF).length(), this
      }
      addArcTo(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const hF = this._points[this._points.length - 1],
          bW = new uF.n(FF, WF),
          PF = new uF.n(SF, CF),
          RF = new dF(hF, bW, PF);
        let iW = RF.angle.radians() / AF;
        0 === RF.orientation && (iW *= -1);
        let eF = RF.startAngle.radians() + iW;
        for (let uF = 0; uF < AF; uF++) {
          const FF = Math.cos(eF) * RF.radius + RF.centerPoint.x,
            WF = Math.sin(eF) * RF.radius + RF.centerPoint.y;
          this.addLineTo(FF, WF), eF += iW
        }
        return this
      }
      addQuadraticCurveTo(FF, WF, SF, CF) {
        let AF = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const uF = (FF, WF, SF, CF) => (1 - FF) * (1 - FF) * WF + 2 * FF * (1 - FF) * SF + FF * FF * CF,
          hF = this._points[this._points.length - 1];
        for (let bW = 0; bW <= AF; bW++) {
          const dF = bW / AF,
            PF = uF(dF, hF.x, FF, SF),
            RF = uF(dF, hF.y, WF, CF);
          this.addLineTo(PF, RF)
        }
        return this
      }
      addBezierCurveTo(FF, WF, SF, CF, AF, uF) {
        let hF = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const bW = (FF, WF, SF, CF, AF) => (1 - FF) * (1 - FF) * (1 - FF) * WF + 3 * FF * (1 - FF) * (1 - FF) * SF + 3 * FF * FF * (1 - FF) * CF + FF * FF * FF * AF,
          dF = this._points[this._points.length - 1];
        for (let PF = 0; PF <= hF; PF++) {
          const RF = PF / hF,
            iW = bW(RF, dF.x, FF, SF, AF),
            eF = bW(RF, dF.y, WF, CF, uF);
          this.addLineTo(iW, eF)
        }
        return this
      }
      isPointInside(FF) {
        let WF = !1;
        const SF = this._points.length;
        for (let CF = SF - 1, AF = 0; AF < SF; CF = AF++) {
          let SF = this._points[CF],
            uF = this._points[AF],
            hF = uF.x - SF.x,
            bW = uF.y - SF.y;
          if (Math.abs(bW) > Number.EPSILON) {
            if (bW < 0 && (SF = this._points[AF], hF = -hF, uF = this._points[CF], bW = -bW), FF.y < SF.y || FF.y > uF.y) continue;
            if (FF.y === SF.y && FF.x === SF.x) return !0;
            {
              const CF = bW * (FF.x - SF.x) - hF * (FF.y - SF.y);
              if (0 === CF) return !0;
              if (CF < 0) continue;
              WF = !WF
            }
          } else {
            if (FF.y !== SF.y) continue;
            if (uF.x <= FF.x && FF.x <= SF.x || SF.x <= FF.x && FF.x <= uF.x) return !0
          }
        }
        return WF
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let FF = this._length;
        if (this.closed) {
          const WF = this._points[this._points.length - 1];
          FF += this._points[0].subtract(WF).length()
        }
        return FF
      }
      area() {
        const FF = this._points.length;
        let WF = 0;
        for (let SF = FF - 1, CF = 0; CF < FF; SF = CF++) WF += this._points[SF].x * this._points[CF].y - this._points[CF].x * this._points[SF].y;
        return .5 * WF
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(FF) {
        if (FF < 0 || FF > 1) return uF.n.Zero();
        const WF = FF * this.length();
        let SF = 0;
        for (let CF = 0; CF < this._points.length; CF++) {
          const FF = (CF + 1) % this._points.length,
            AF = this._points[CF],
            hF = this._points[FF].subtract(AF),
            bW = hF.length() + SF;
          if (WF >= SF && WF <= bW) {
            const FF = hF.normalize(),
              CF = WF - SF;
            return new uF.n(AF.x + FF.x * CF, AF.y + FF.y * CF)
          }
          SF = bW
        }
        return uF.n.Zero()
      }
      static StartingAt(FF, WF) {
        return new PF(FF, WF)
      }
    }
    class RF {
      static CreateQuadraticBezier(FF, WF, SF, CF) {
        CF = CF > 2 ? CF : 3;
        const AF = [],
          hF = (FF, WF, SF, CF) => (1 - FF) * (1 - FF) * WF + 2 * FF * (1 - FF) * SF + FF * FF * CF;
        for (let bW = 0; bW <= CF; bW++) AF.push(new uF.r(hF(bW / CF, FF.x, WF.x, SF.x), hF(bW / CF, FF.y, WF.y, SF.y), hF(bW / CF, FF.z, WF.z, SF.z)));
        return new RF(AF)
      }
      static CreateCubicBezier(FF, WF, SF, CF, AF) {
        AF = AF > 3 ? AF : 4;
        const hF = [],
          bW = (FF, WF, SF, CF, AF) => (1 - FF) * (1 - FF) * (1 - FF) * WF + 3 * FF * (1 - FF) * (1 - FF) * SF + 3 * FF * FF * (1 - FF) * CF + FF * FF * FF * AF;
        for (let dF = 0; dF <= AF; dF++) hF.push(new uF.r(bW(dF / AF, FF.x, WF.x, SF.x, CF.x), bW(dF / AF, FF.y, WF.y, SF.y, CF.y), bW(dF / AF, FF.z, WF.z, SF.z, CF.z)));
        return new RF(hF)
      }
      static CreateHermiteSpline(FF, WF, SF, CF, AF) {
        const hF = [],
          bW = 1 / AF;
        for (let dF = 0; dF <= AF; dF++) hF.push(uF.r.Hermite(FF, WF, SF, CF, dF * bW));
        return new RF(hF)
      }
      static CreateCatmullRomSpline(FF, WF, SF) {
        const CF = [],
          AF = 1 / WF;
        let hF = 0;
        if (SF) {
          const SF = FF.length;
          for (let bW = 0; bW < SF; bW++) {
            hF = 0;
            for (let dF = 0; dF < WF; dF++) CF.push(uF.r.CatmullRom(FF[bW % SF], FF[(bW + 1) % SF], FF[(bW + 2) % SF], FF[(bW + 3) % SF], hF)), hF += AF
          }
          CF.push(CF[0])
        } else {
          const SF = [];
          SF.push(FF[0].clone()), SF.push(...FF), SF.push(FF[FF.length - 1].clone());
          let bW = 0;
          for (; bW < SF.length - 3; bW++) {
            hF = 0;
            for (let FF = 0; FF < WF; FF++) CF.push(uF.r.CatmullRom(SF[bW], SF[bW + 1], SF[bW + 2], SF[bW + 3], hF)), hF += AF
          }
          bW--, CF.push(uF.r.CatmullRom(SF[bW], SF[bW + 1], SF[bW + 2], SF[bW + 3], hF))
        }
        return new RF(CF)
      }
      static ArcThru3Points(FF, WF, SF) {
        let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          AF = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          hF = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const bW = [],
          dF = WF.subtract(FF),
          PF = SF.subtract(WF),
          iW = FF.subtract(SF),
          eF = uF.r.Cross(dF, PF),
          EF = eF.length();
        if (EF < Math.pow(10, -8)) return new RF(bW);
        const QF = dF.lengthSquared(),
          rW = PF.lengthSquared(),
          gW = iW.lengthSquared(),
          tW = eF.lengthSquared(),
          TF = .5 * dF.length() * PF.length() * iW.length() / EF,
          aW = -.5 * rW * uF.r.Dot(dF, iW) / tW,
          kW = -.5 * gW * uF.r.Dot(dF, PF) / tW,
          qW = -.5 * QF * uF.r.Dot(PF, iW) / tW,
          VF = FF.scale(aW).add(WF.scale(kW)).add(SF.scale(qW)),
          NF = FF.subtract(VF).normalize(),
          DF = uF.r.Cross(eF, NF).normalize();
        if (hF) {
          const WF = 2 * Math.PI / CF;
          for (let FF = 0; FF <= 2 * Math.PI; FF += WF) bW.push(VF.add(NF.scale(TF * Math.cos(FF)).add(DF.scale(TF * Math.sin(FF)))));
          bW.push(FF)
        } else {
          const WF = 1 / CF;
          let uF, hF = 0;
          do {
            uF = VF.add(NF.scale(TF * Math.cos(hF)).add(DF.scale(TF * Math.sin(hF)))), bW.push(uF), hF += WF
          } while (!uF.equalsWithEpsilon(SF, TF * WF * 1.1));
          bW.push(SF), AF && bW.push(FF)
        }
        return new RF(bW)
      }
      constructor(FF) {
        this._length = 0, this._points = FF, this._length = this._computeLength(FF)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (FF) {
        const WF = this._points[this._points.length - 1],
          SF = this._points.slice(),
          CF = FF.getPoints();
        for (let AF = 1; AF < CF.length; AF++) SF.push(CF[AF].subtract(CF[0]).add(WF));
        return new RF(SF)
      }
      _computeLength(FF) {
        let WF = 0;
        for (let SF = 1; SF < FF.length; SF++) WF += FF[SF].subtract(FF[SF - 1]).length();
        return WF
      }
    }
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