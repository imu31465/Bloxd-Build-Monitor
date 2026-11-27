export const id = 278;
export const ids = [278];
export const modules = {
  42573: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => PW,
      g: () => tW,
      h: () => wW
    });
    var mW, EW = OW(38285),
      NW = OW(38241);
    ! function(WW) {
      WW[WW.CW = 0] = "CW", WW[WW.CCW = 1] = "CCW"
    }(mW || (mW = {}));
    class PW {
      static Interpolate(WW, iW, OW, mW, EW) {
        if (0 === WW) return 0;
        const NW = 1 - 3 * mW + 3 * iW,
          PW = 3 * mW - 6 * iW,
          LW = 3 * iW;
        let cW = WW;
        for (let wW = 0; wW < 5; wW++) {
          const iW = cW * cW;
          cW -= (NW * (iW * cW) + PW * iW + LW * cW - WW) * (1 / (3 * NW * iW + 2 * PW * cW + LW)), cW = Math.min(1, Math.max(0, cW))
        }
        return 3 * Math.pow(1 - cW, 2) * cW * OW + 3 * (1 - cW) * Math.pow(cW, 2) * EW + Math.pow(cW, 3)
      }
    }
    class LW {
      constructor(WW) {
        this._radians = WW, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(WW, iW) {
        const OW = iW.subtract(WW),
          mW = Math.atan2(OW.y, OW.x);
        return new LW(mW)
      }
      static BetweenTwoVectors(WW, iW) {
        let OW = WW.lengthSquared() * iW.lengthSquared();
        if (0 === OW) return new LW(Math.PI / 2);
        OW = Math.sqrt(OW);
        let mW = WW.dot(iW) / OW;
        mW = (0, EW.Clamp)(mW, -1, 1);
        const NW = Math.acos(mW);
        return new LW(NW)
      }
      static FromRadians(WW) {
        return new LW(WW)
      }
      static FromDegrees(WW) {
        return new LW(WW * Math.PI / 180)
      }
    }
    class cW {
      constructor(WW, iW, OW) {
        this.startPoint = WW, this.midPoint = iW, this.endPoint = OW;
        const mW = Math.pow(iW.x, 2) + Math.pow(iW.y, 2),
          EW = (Math.pow(WW.x, 2) + Math.pow(WW.y, 2) - mW) / 2,
          PW = (mW - Math.pow(OW.x, 2) - Math.pow(OW.y, 2)) / 2,
          cW = (WW.x - iW.x) * (iW.y - OW.y) - (iW.x - OW.x) * (WW.y - iW.y);
        this.centerPoint = new NW.m((EW * (iW.y - OW.y) - PW * (WW.y - iW.y)) / cW, ((WW.x - iW.x) * PW - (iW.x - OW.x) * EW) / cW), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = LW.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const wW = this.startAngle.degrees();
        let tW = LW.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          ZW = LW.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        tW - wW > 180 && (tW -= 360), tW - wW < -180 && (tW += 360), ZW - tW > 180 && (ZW -= 360), ZW - tW < -180 && (ZW += 360), this.orientation = tW - wW < 0 ? 0 : 1, this.angle = LW.FromDegrees(0 === this.orientation ? wW - ZW : ZW - wW)
      }
    }
    class wW {
      constructor(WW, iW) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new NW.m(WW, iW))
      }
      addLineTo(WW, iW) {
        if (this.closed) return this;
        const OW = new NW.m(WW, iW),
          mW = this._points[this._points.length - 1];
        return this._points.push(OW), this._length += OW.subtract(mW).length(), this
      }
      addArcTo(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const PW = this._points[this._points.length - 1],
          LW = new NW.m(WW, iW),
          wW = new NW.m(OW, mW),
          tW = new cW(PW, LW, wW);
        let ZW = tW.angle.radians() / EW;
        0 === tW.orientation && (ZW *= -1);
        let xW = tW.startAngle.radians() + ZW;
        for (let NW = 0; NW < EW; NW++) {
          const WW = Math.cos(xW) * tW.radius + tW.centerPoint.x,
            iW = Math.sin(xW) * tW.radius + tW.centerPoint.y;
          this.addLineTo(WW, iW), xW += ZW
        }
        return this
      }
      addQuadraticCurveTo(WW, iW, OW, mW) {
        let EW = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const NW = (WW, iW, OW, mW) => (1 - WW) * (1 - WW) * iW + 2 * WW * (1 - WW) * OW + WW * WW * mW,
          PW = this._points[this._points.length - 1];
        for (let LW = 0; LW <= EW; LW++) {
          const cW = LW / EW,
            wW = NW(cW, PW.x, WW, OW),
            tW = NW(cW, PW.y, iW, mW);
          this.addLineTo(wW, tW)
        }
        return this
      }
      addBezierCurveTo(WW, iW, OW, mW, EW, NW) {
        let PW = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const LW = (WW, iW, OW, mW, EW) => (1 - WW) * (1 - WW) * (1 - WW) * iW + 3 * WW * (1 - WW) * (1 - WW) * OW + 3 * WW * WW * (1 - WW) * mW + WW * WW * WW * EW,
          cW = this._points[this._points.length - 1];
        for (let wW = 0; wW <= PW; wW++) {
          const tW = wW / PW,
            ZW = LW(tW, cW.x, WW, OW, EW),
            xW = LW(tW, cW.y, iW, mW, NW);
          this.addLineTo(ZW, xW)
        }
        return this
      }
      isPointInside(WW) {
        let iW = !1;
        const OW = this._points.length;
        for (let mW = OW - 1, EW = 0; EW < OW; mW = EW++) {
          let OW = this._points[mW],
            NW = this._points[EW],
            PW = NW.x - OW.x,
            LW = NW.y - OW.y;
          if (Math.abs(LW) > Number.EPSILON) {
            if (LW < 0 && (OW = this._points[EW], PW = -PW, NW = this._points[mW], LW = -LW), WW.y < OW.y || WW.y > NW.y) continue;
            if (WW.y === OW.y && WW.x === OW.x) return !0;
            {
              const mW = LW * (WW.x - OW.x) - PW * (WW.y - OW.y);
              if (0 === mW) return !0;
              if (mW < 0) continue;
              iW = !iW
            }
          } else {
            if (WW.y !== OW.y) continue;
            if (NW.x <= WW.x && WW.x <= OW.x || OW.x <= WW.x && WW.x <= NW.x) return !0
          }
        }
        return iW
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let WW = this._length;
        if (this.closed) {
          const iW = this._points[this._points.length - 1];
          WW += this._points[0].subtract(iW).length()
        }
        return WW
      }
      area() {
        const WW = this._points.length;
        let iW = 0;
        for (let OW = WW - 1, mW = 0; mW < WW; OW = mW++) iW += this._points[OW].x * this._points[mW].y - this._points[mW].x * this._points[OW].y;
        return .5 * iW
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(WW) {
        if (WW < 0 || WW > 1) return NW.m.Zero();
        const iW = WW * this.length();
        let OW = 0;
        for (let mW = 0; mW < this._points.length; mW++) {
          const WW = (mW + 1) % this._points.length,
            EW = this._points[mW],
            PW = this._points[WW].subtract(EW),
            LW = PW.length() + OW;
          if (iW >= OW && iW <= LW) {
            const WW = PW.normalize(),
              mW = iW - OW;
            return new NW.m(EW.x + WW.x * mW, EW.y + WW.y * mW)
          }
          OW = LW
        }
        return NW.m.Zero()
      }
      static StartingAt(WW, iW) {
        return new wW(WW, iW)
      }
    }
    class tW {
      static CreateQuadraticBezier(WW, iW, OW, mW) {
        mW = mW > 2 ? mW : 3;
        const EW = [],
          PW = (WW, iW, OW, mW) => (1 - WW) * (1 - WW) * iW + 2 * WW * (1 - WW) * OW + WW * WW * mW;
        for (let LW = 0; LW <= mW; LW++) EW.push(new NW.q(PW(LW / mW, WW.x, iW.x, OW.x), PW(LW / mW, WW.y, iW.y, OW.y), PW(LW / mW, WW.z, iW.z, OW.z)));
        return new tW(EW)
      }
      static CreateCubicBezier(WW, iW, OW, mW, EW) {
        EW = EW > 3 ? EW : 4;
        const PW = [],
          LW = (WW, iW, OW, mW, EW) => (1 - WW) * (1 - WW) * (1 - WW) * iW + 3 * WW * (1 - WW) * (1 - WW) * OW + 3 * WW * WW * (1 - WW) * mW + WW * WW * WW * EW;
        for (let cW = 0; cW <= EW; cW++) PW.push(new NW.q(LW(cW / EW, WW.x, iW.x, OW.x, mW.x), LW(cW / EW, WW.y, iW.y, OW.y, mW.y), LW(cW / EW, WW.z, iW.z, OW.z, mW.z)));
        return new tW(PW)
      }
      static CreateHermiteSpline(WW, iW, OW, mW, EW) {
        const PW = [],
          LW = 1 / EW;
        for (let cW = 0; cW <= EW; cW++) PW.push(NW.q.Hermite(WW, iW, OW, mW, cW * LW));
        return new tW(PW)
      }
      static CreateCatmullRomSpline(WW, iW, OW) {
        const mW = [],
          EW = 1 / iW;
        let PW = 0;
        if (OW) {
          const OW = WW.length;
          for (let LW = 0; LW < OW; LW++) {
            PW = 0;
            for (let cW = 0; cW < iW; cW++) mW.push(NW.q.CatmullRom(WW[LW % OW], WW[(LW + 1) % OW], WW[(LW + 2) % OW], WW[(LW + 3) % OW], PW)), PW += EW
          }
          mW.push(mW[0])
        } else {
          const OW = [];
          OW.push(WW[0].clone()), OW.push(...WW), OW.push(WW[WW.length - 1].clone());
          let LW = 0;
          for (; LW < OW.length - 3; LW++) {
            PW = 0;
            for (let WW = 0; WW < iW; WW++) mW.push(NW.q.CatmullRom(OW[LW], OW[LW + 1], OW[LW + 2], OW[LW + 3], PW)), PW += EW
          }
          LW--, mW.push(NW.q.CatmullRom(OW[LW], OW[LW + 1], OW[LW + 2], OW[LW + 3], PW))
        }
        return new tW(mW)
      }
      static ArcThru3Points(WW, iW, OW) {
        let mW = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          EW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          PW = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const LW = [],
          cW = iW.subtract(WW),
          wW = OW.subtract(iW),
          ZW = WW.subtract(OW),
          xW = NW.q.Cross(cW, wW),
          lW = xW.length();
        if (lW < Math.pow(10, -8)) return new tW(LW);
        const AW = cW.lengthSquared(),
          bW = wW.lengthSquared(),
          jW = ZW.lengthSquared(),
          UW = xW.lengthSquared(),
          kW = .5 * cW.length() * wW.length() * ZW.length() / lW,
          sW = -.5 * bW * NW.q.Dot(cW, ZW) / UW,
          MW = -.5 * jW * NW.q.Dot(cW, wW) / UW,
          KW = -.5 * AW * NW.q.Dot(wW, ZW) / UW,
          SW = WW.scale(sW).add(iW.scale(MW)).add(OW.scale(KW)),
          YW = WW.subtract(SW).normalize(),
          yW = NW.q.Cross(xW, YW).normalize();
        if (PW) {
          const iW = 2 * Math.PI / mW;
          for (let WW = 0; WW <= 2 * Math.PI; WW += iW) LW.push(SW.add(YW.scale(kW * Math.cos(WW)).add(yW.scale(kW * Math.sin(WW)))));
          LW.push(WW)
        } else {
          const iW = 1 / mW;
          let NW, PW = 0;
          do {
            NW = SW.add(YW.scale(kW * Math.cos(PW)).add(yW.scale(kW * Math.sin(PW)))), LW.push(NW), PW += iW
          } while (!NW.equalsWithEpsilon(OW, kW * iW * 1.1));
          LW.push(OW), EW && LW.push(WW)
        }
        return new tW(LW)
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
        const iW = this._points[this._points.length - 1],
          OW = this._points.slice(),
          mW = WW.getPoints();
        for (let EW = 1; EW < mW.length; EW++) OW.push(mW[EW].subtract(mW[0]).add(iW));
        return new tW(OW)
      }
      _computeLength(WW) {
        let iW = 0;
        for (let OW = 1; OW < WW.length; OW++) iW += WW[OW].subtract(WW[OW - 1]).length();
        return iW
      }
    }
  },
  39908: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => NW
    });
    var mW = OW(39911);
    const EW = (WW, iW, OW) => WW ? WW.getClassName && "Mesh" === WW.getClassName() ? null : !WW.getClassName || "SubMesh" !== WW.getClassName() && "PhysicsBody" !== WW.getClassName() ? WW.clone ? WW.clone() : Array.isArray(WW) ? WW.slice() : OW && "object" === typeof WW ? {
      ...WW
    } : null : WW.clone(iW) : null;
    class NW {
      static DeepCopy(WW, iW, OW, NW) {
        let PW = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const LW = function(WW) {
          const iW = [];
          do {
            const OW = Object.getOwnPropertyNames(WW);
            for (const WW of OW) - 1 === iW.indexOf(WW) && iW.push(WW)
          } while (WW = Object.getPrototypeOf(WW));
          return iW
        }(WW);
        for (const wW of LW) {
          if ("_" === wW[0] && (!NW || -1 === NW.indexOf(wW))) continue;
          if (wW.endsWith("Observable")) continue;
          if (OW && -1 !== OW.indexOf(wW)) continue;
          const LW = WW[wW],
            tW = typeof LW;
          if ("function" !== tW) try {
            if ("object" === tW)
              if (LW instanceof Uint8Array) iW[wW] = Uint8Array.from(LW);
              else if (LW instanceof Array) {
              if (iW[wW] = [], LW.length > 0)
                if ("object" == typeof LW[0])
                  for (let WW = 0; WW < LW.length; WW++) {
                    const OW = EW(LW[WW], iW, PW); - 1 === iW[wW].indexOf(OW) && iW[wW].push(OW)
                  } else iW[wW] = LW.slice(0)
            } else iW[wW] = EW(LW, iW, PW);
            else iW[wW] = LW
          } catch (cW) {
            mW.b.Warn(cW.message)
          }
        }
      }
    }
  },
  39911: (WW, iW, OW) => {
    OW.d(iW, {
      b: () => mW
    });
    class mW {
      static _CheckLimit(WW, iW) {
        let OW = mW._LogLimitOutputs[WW];
        return OW ? OW.current++ : (OW = {
          limit: iW,
          current: 1
        }, mW._LogLimitOutputs[WW] = OW), OW.current <= OW.limit
      }
      static _GenerateLimitMessage(WW) {
        let iW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const OW = mW._LogLimitOutputs[WW];
        if (!OW || !mW.MessageLimitReached) return;
        const EW = this._Levels[iW];
        OW.current === OW.limit && mW[EW.name](mW.MessageLimitReached.replace(/%LIMIT%/g, "" + OW.limit).replace(/%TYPE%/g, EW.name ?? ""))
      }
      static _AddLogEntry(WW) {
        mW._LogCache = WW + mW._LogCache, mW.OnNewCacheEntry && mW.OnNewCacheEntry(WW)
      }
      static _FormatMessage(WW) {
        const iW = WW => WW < 10 ? "0" + WW : "" + WW,
          OW = new Date;
        return "[" + iW(OW.getHours()) + ":" + iW(OW.getMinutes()) + ":" + iW(OW.getSeconds()) + "]: " + WW
      }
      static _LogDisabled(WW, iW) {}
      static _LogEnabled() {
        let WW = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          iW = arguments.length > 1 ? arguments[1] : void 0,
          OW = arguments.length > 2 ? arguments[2] : void 0;
        const EW = Array.isArray(iW) ? iW[0] : iW;
        if (void 0 !== OW && !mW._CheckLimit(EW, OW)) return;
        const NW = mW._FormatMessage(EW),
          PW = this._Levels[WW],
          LW = Array.isArray(iW) ? iW.slice(1) : [];
        PW.logFunc && PW.logFunc("BJS - " + NW, ...LW);
        const cW = `<div style='color:${PW.color}'>${NW}</div><br>`;
        mW._AddLogEntry(cW), mW._GenerateLimitMessage(EW, WW)
      }
      static get LogCache() {
        return mW._LogCache
      }
      static ClearLogCache() {
        mW._LogCache = "", mW._LogLimitOutputs = {}, mW.errorsCount = 0
      }
      static set LogLevels(WW) {
        mW.Log = mW._LogDisabled, mW.Warn = mW._LogDisabled, mW.Error = mW._LogDisabled;
        const iW = [mW.MessageLogLevel, mW.WarningLogLevel, mW.ErrorLogLevel];
        for (const OW of iW)
          if ((WW & OW) === OW) {
            const WW = this._Levels[OW];
            mW[WW.name] = mW._LogEnabled.bind(mW, OW)
          }
      }
    }
    mW.NoneLogLevel = 0, mW.MessageLogLevel = 1, mW.WarningLogLevel = 2, mW.ErrorLogLevel = 4, mW.AllLogLevel = 7, mW.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", mW._LogCache = "", mW._LogLimitOutputs = {}, mW._Levels = [{}, {
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
    }], mW.errorsCount = 0, mW.Log = mW._LogEnabled.bind(mW, mW.MessageLogLevel), mW.Warn = mW._LogEnabled.bind(mW, mW.WarningLogLevel), mW.Error = mW._LogEnabled.bind(mW, mW.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);