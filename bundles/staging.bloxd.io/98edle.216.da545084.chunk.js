export const id = 216;
export const ids = [216];
export const modules = {
  38685: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => AW,
      f: () => eW,
      g: () => NW
    });
    var wW, CW = MW(35353),
      zR = MW(35324);
    ! function(WW) {
      WW[WW.CW = 0] = "CW", WW[WW.CCW = 1] = "CCW"
    }(wW || (wW = {}));
    class AW {
      static Interpolate(WW, RW, MW, wW, CW) {
        if (0 === WW) return 0;
        const zR = 1 - 3 * wW + 3 * RW,
          AW = 3 * wW - 6 * RW,
          bR = 3 * RW;
        let yR = WW;
        for (let NW = 0; NW < 5; NW++) {
          const RW = yR * yR;
          yR -= (zR * (RW * yR) + AW * RW + bR * yR - WW) * (1 / (3 * zR * RW + 2 * AW * yR + bR)), yR = Math.min(1, Math.max(0, yR))
        }
        return 3 * Math.pow(1 - yR, 2) * yR * MW + 3 * (1 - yR) * Math.pow(yR, 2) * CW + Math.pow(yR, 3)
      }
    }
    class bR {
      constructor(WW) {
        this._radians = WW, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(WW, RW) {
        const MW = RW.subtract(WW),
          wW = Math.atan2(MW.y, MW.x);
        return new bR(wW)
      }
      static BetweenTwoVectors(WW, RW) {
        let MW = WW.lengthSquared() * RW.lengthSquared();
        if (0 === MW) return new bR(Math.PI / 2);
        MW = Math.sqrt(MW);
        let wW = WW.dot(RW) / MW;
        wW = (0, CW.Clamp)(wW, -1, 1);
        const zR = Math.acos(wW);
        return new bR(zR)
      }
      static FromRadians(WW) {
        return new bR(WW)
      }
      static FromDegrees(WW) {
        return new bR(WW * Math.PI / 180)
      }
    }
    class yR {
      constructor(WW, RW, MW) {
        this.startPoint = WW, this.midPoint = RW, this.endPoint = MW;
        const wW = Math.pow(RW.x, 2) + Math.pow(RW.y, 2),
          CW = (Math.pow(WW.x, 2) + Math.pow(WW.y, 2) - wW) / 2,
          AW = (wW - Math.pow(MW.x, 2) - Math.pow(MW.y, 2)) / 2,
          yR = (WW.x - RW.x) * (RW.y - MW.y) - (RW.x - MW.x) * (WW.y - RW.y);
        this.centerPoint = new zR.n((CW * (RW.y - MW.y) - AW * (WW.y - RW.y)) / yR, ((WW.x - RW.x) * AW - (RW.x - MW.x) * CW) / yR), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = bR.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const NW = this.startAngle.degrees();
        let eW = bR.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          BW = bR.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        eW - NW > 180 && (eW -= 360), eW - NW < -180 && (eW += 360), BW - eW > 180 && (BW -= 360), BW - eW < -180 && (BW += 360), this.orientation = eW - NW < 0 ? 0 : 1, this.angle = bR.FromDegrees(0 === this.orientation ? NW - BW : BW - NW)
      }
    }
    class NW {
      constructor(WW, RW) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new zR.n(WW, RW))
      }
      addLineTo(WW, RW) {
        if (this.closed) return this;
        const MW = new zR.n(WW, RW),
          wW = this._points[this._points.length - 1];
        return this._points.push(MW), this._length += MW.subtract(wW).length(), this
      }
      addArcTo(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const AW = this._points[this._points.length - 1],
          bR = new zR.n(WW, RW),
          NW = new zR.n(MW, wW),
          eW = new yR(AW, bR, NW);
        let BW = eW.angle.radians() / CW;
        0 === eW.orientation && (BW *= -1);
        let tR = eW.startAngle.radians() + BW;
        for (let zR = 0; zR < CW; zR++) {
          const WW = Math.cos(tR) * eW.radius + eW.centerPoint.x,
            RW = Math.sin(tR) * eW.radius + eW.centerPoint.y;
          this.addLineTo(WW, RW), tR += BW
        }
        return this
      }
      addQuadraticCurveTo(WW, RW, MW, wW) {
        let CW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const zR = (WW, RW, MW, wW) => (1 - WW) * (1 - WW) * RW + 2 * WW * (1 - WW) * MW + WW * WW * wW,
          AW = this._points[this._points.length - 1];
        for (let bR = 0; bR <= CW; bR++) {
          const yR = bR / CW,
            NW = zR(yR, AW.x, WW, MW),
            eW = zR(yR, AW.y, RW, wW);
          this.addLineTo(NW, eW)
        }
        return this
      }
      addBezierCurveTo(WW, RW, MW, wW, CW, zR) {
        let AW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const bR = (WW, RW, MW, wW, CW) => (1 - WW) * (1 - WW) * (1 - WW) * RW + 3 * WW * (1 - WW) * (1 - WW) * MW + 3 * WW * WW * (1 - WW) * wW + WW * WW * WW * CW,
          yR = this._points[this._points.length - 1];
        for (let NW = 0; NW <= AW; NW++) {
          const eW = NW / AW,
            BW = bR(eW, yR.x, WW, MW, CW),
            tR = bR(eW, yR.y, RW, wW, zR);
          this.addLineTo(BW, tR)
        }
        return this
      }
      isPointInside(WW) {
        let RW = !1;
        const MW = this._points.length;
        for (let wW = MW - 1, CW = 0; CW < MW; wW = CW++) {
          let MW = this._points[wW],
            zR = this._points[CW],
            AW = zR.x - MW.x,
            bR = zR.y - MW.y;
          if (Math.abs(bR) > Number.EPSILON) {
            if (bR < 0 && (MW = this._points[CW], AW = -AW, zR = this._points[wW], bR = -bR), WW.y < MW.y || WW.y > zR.y) continue;
            if (WW.y === MW.y && WW.x === MW.x) return !0;
            {
              const wW = bR * (WW.x - MW.x) - AW * (WW.y - MW.y);
              if (0 === wW) return !0;
              if (wW < 0) continue;
              RW = !RW
            }
          } else {
            if (WW.y !== MW.y) continue;
            if (zR.x <= WW.x && WW.x <= MW.x || MW.x <= WW.x && WW.x <= zR.x) return !0
          }
        }
        return RW
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let WW = this._length;
        if (this.closed) {
          const RW = this._points[this._points.length - 1];
          WW += this._points[0].subtract(RW).length()
        }
        return WW
      }
      area() {
        const WW = this._points.length;
        let RW = 0;
        for (let MW = WW - 1, wW = 0; wW < WW; MW = wW++) RW += this._points[MW].x * this._points[wW].y - this._points[wW].x * this._points[MW].y;
        return .5 * RW
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(WW) {
        if (WW < 0 || WW > 1) return zR.n.Zero();
        const RW = WW * this.length();
        let MW = 0;
        for (let wW = 0; wW < this._points.length; wW++) {
          const WW = (wW + 1) % this._points.length,
            CW = this._points[wW],
            AW = this._points[WW].subtract(CW),
            bR = AW.length() + MW;
          if (RW >= MW && RW <= bR) {
            const WW = AW.normalize(),
              wW = RW - MW;
            return new zR.n(CW.x + WW.x * wW, CW.y + WW.y * wW)
          }
          MW = bR
        }
        return zR.n.Zero()
      }
      static StartingAt(WW, RW) {
        return new NW(WW, RW)
      }
    }
    class eW {
      static CreateQuadraticBezier(WW, RW, MW, wW) {
        wW = wW > 2 ? wW : 3;
        const CW = [],
          AW = (WW, RW, MW, wW) => (1 - WW) * (1 - WW) * RW + 2 * WW * (1 - WW) * MW + WW * WW * wW;
        for (let bR = 0; bR <= wW; bR++) CW.push(new zR.q(AW(bR / wW, WW.x, RW.x, MW.x), AW(bR / wW, WW.y, RW.y, MW.y), AW(bR / wW, WW.z, RW.z, MW.z)));
        return new eW(CW)
      }
      static CreateCubicBezier(WW, RW, MW, wW, CW) {
        CW = CW > 3 ? CW : 4;
        const AW = [],
          bR = (WW, RW, MW, wW, CW) => (1 - WW) * (1 - WW) * (1 - WW) * RW + 3 * WW * (1 - WW) * (1 - WW) * MW + 3 * WW * WW * (1 - WW) * wW + WW * WW * WW * CW;
        for (let yR = 0; yR <= CW; yR++) AW.push(new zR.q(bR(yR / CW, WW.x, RW.x, MW.x, wW.x), bR(yR / CW, WW.y, RW.y, MW.y, wW.y), bR(yR / CW, WW.z, RW.z, MW.z, wW.z)));
        return new eW(AW)
      }
      static CreateHermiteSpline(WW, RW, MW, wW, CW) {
        const AW = [],
          bR = 1 / CW;
        for (let yR = 0; yR <= CW; yR++) AW.push(zR.q.Hermite(WW, RW, MW, wW, yR * bR));
        return new eW(AW)
      }
      static CreateCatmullRomSpline(WW, RW, MW) {
        const wW = [],
          CW = 1 / RW;
        let AW = 0;
        if (MW) {
          const MW = WW.length;
          for (let bR = 0; bR < MW; bR++) {
            AW = 0;
            for (let yR = 0; yR < RW; yR++) wW.push(zR.q.CatmullRom(WW[bR % MW], WW[(bR + 1) % MW], WW[(bR + 2) % MW], WW[(bR + 3) % MW], AW)), AW += CW
          }
          wW.push(wW[0])
        } else {
          const MW = [];
          MW.push(WW[0].clone()), MW.push(...WW), MW.push(WW[WW.length - 1].clone());
          let bR = 0;
          for (; bR < MW.length - 3; bR++) {
            AW = 0;
            for (let WW = 0; WW < RW; WW++) wW.push(zR.q.CatmullRom(MW[bR], MW[bR + 1], MW[bR + 2], MW[bR + 3], AW)), AW += CW
          }
          bR--, wW.push(zR.q.CatmullRom(MW[bR], MW[bR + 1], MW[bR + 2], MW[bR + 3], AW))
        }
        return new eW(wW)
      }
      static ArcThru3Points(WW, RW, MW) {
        let wW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          CW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          AW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const bR = [],
          yR = RW.subtract(WW),
          NW = MW.subtract(RW),
          BW = WW.subtract(MW),
          tR = zR.q.Cross(yR, NW),
          TW = tR.length();
        if (TW < Math.pow(10, -8)) return new eW(bR);
        const gR = yR.lengthSquared(),
          iR = NW.lengthSquared(),
          YW = BW.lengthSquared(),
          JW = tR.lengthSquared(),
          PW = .5 * yR.length() * NW.length() * BW.length() / TW,
          IW = -.5 * iR * zR.q.Dot(yR, BW) / JW,
          oW = -.5 * YW * zR.q.Dot(yR, NW) / JW,
          lW = -.5 * gR * zR.q.Dot(NW, BW) / JW,
          FW = WW.scale(IW).add(RW.scale(oW)).add(MW.scale(lW)),
          fW = WW.subtract(FW).normalize(),
          QW = zR.q.Cross(tR, fW).normalize();
        if (AW) {
          const RW = 2 * Math.PI / wW;
          for (let WW = 0; WW <= 2 * Math.PI; WW += RW) bR.push(FW.add(fW.scale(PW * Math.cos(WW)).add(QW.scale(PW * Math.sin(WW)))));
          bR.push(WW)
        } else {
          const RW = 1 / wW;
          let zR, AW = 0;
          do {
            zR = FW.add(fW.scale(PW * Math.cos(AW)).add(QW.scale(PW * Math.sin(AW)))), bR.push(zR), AW += RW
          } while (!zR.equalsWithEpsilon(MW, PW * RW * 1.1));
          bR.push(MW), CW && bR.push(WW)
        }
        return new eW(bR)
      }
      constructor(WW) {
        this._length = 0, this._points = WW, this._length = this._computeLength(WW)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (WW) {
        const RW = this._points[this._points.length - 1],
          MW = this._points.slice(),
          wW = WW.getPoints();
        for (let CW = 1; CW < wW.length; CW++) MW.push(wW[CW].subtract(wW[0]).add(RW));
        return new eW(MW)
      }
      _computeLength(WW) {
        let RW = 0;
        for (let MW = 1; MW < WW.length; MW++) RW += WW[MW].subtract(WW[MW - 1]).length();
        return RW
      }
    }
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