export const id = 272;
export const ids = [272];
export const modules = {
  42396: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => hH,
      c: () => EH,
      e: () => CH
    });
    var AH, rH = LH(38002),
      SH = LH(37963);
    ! function(HH) {
      HH[HH.CW = 0] = "CW", HH[HH.CCW = 1] = "CCW"
    }(AH || (AH = {}));
    class hH {
      static Interpolate(HH, BH, LH, AH, rH) {
        if (0 === HH) return 0;
        const SH = 1 - 3 * AH + 3 * BH,
          hH = 3 * AH - 6 * BH,
          tH = 3 * BH;
        let zH = HH;
        for (let CH = 0; CH < 5; CH++) {
          const BH = zH * zH;
          zH -= (SH * (BH * zH) + hH * BH + tH * zH - HH) * (1 / (3 * SH * BH + 2 * hH * zH + tH)), zH = Math.min(1, Math.max(0, zH))
        }
        return 3 * Math.pow(1 - zH, 2) * zH * LH + 3 * (1 - zH) * Math.pow(zH, 2) * rH + Math.pow(zH, 3)
      }
    }
    class tH {
      constructor(HH) {
        this._radians = HH, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(HH, BH) {
        const LH = BH.subtract(HH),
          AH = Math.atan2(LH.y, LH.x);
        return new tH(AH)
      }
      static BetweenTwoVectors(HH, BH) {
        let LH = HH.lengthSquared() * BH.lengthSquared();
        if (0 === LH) return new tH(Math.PI / 2);
        LH = Math.sqrt(LH);
        let AH = HH.dot(BH) / LH;
        AH = (0, rH.Clamp)(AH, -1, 1);
        const SH = Math.acos(AH);
        return new tH(SH)
      }
      static FromRadians(HH) {
        return new tH(HH)
      }
      static FromDegrees(HH) {
        return new tH(HH * Math.PI / 180)
      }
    }
    class zH {
      constructor(HH, BH, LH) {
        this.startPoint = HH, this.midPoint = BH, this.endPoint = LH;
        const AH = Math.pow(BH.x, 2) + Math.pow(BH.y, 2),
          rH = (Math.pow(HH.x, 2) + Math.pow(HH.y, 2) - AH) / 2,
          hH = (AH - Math.pow(LH.x, 2) - Math.pow(LH.y, 2)) / 2,
          zH = (HH.x - BH.x) * (BH.y - LH.y) - (BH.x - LH.x) * (HH.y - BH.y);
        this.centerPoint = new SH.n((rH * (BH.y - LH.y) - hH * (HH.y - BH.y)) / zH, ((HH.x - BH.x) * hH - (BH.x - LH.x) * rH) / zH), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = tH.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const CH = this.startAngle.degrees();
        let EH = tH.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          XH = tH.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        EH - CH > 180 && (EH -= 360), EH - CH < -180 && (EH += 360), XH - EH > 180 && (XH -= 360), XH - EH < -180 && (XH += 360), this.orientation = EH - CH < 0 ? 0 : 1, this.angle = tH.FromDegrees(0 === this.orientation ? CH - XH : XH - CH)
      }
    }
    class CH {
      constructor(HH, BH) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new SH.n(HH, BH))
      }
      addLineTo(HH, BH) {
        if (this.closed) return this;
        const LH = new SH.n(HH, BH),
          AH = this._points[this._points.length - 1];
        return this._points.push(LH), this._length += LH.subtract(AH).length(), this
      }
      addArcTo(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const hH = this._points[this._points.length - 1],
          tH = new SH.n(HH, BH),
          CH = new SH.n(LH, AH),
          EH = new zH(hH, tH, CH);
        let XH = EH.angle.radians() / rH;
        0 === EH.orientation && (XH *= -1);
        let GH = EH.startAngle.radians() + XH;
        for (let SH = 0; SH < rH; SH++) {
          const HH = Math.cos(GH) * EH.radius + EH.centerPoint.x,
            BH = Math.sin(GH) * EH.radius + EH.centerPoint.y;
          this.addLineTo(HH, BH), GH += XH
        }
        return this
      }
      addQuadraticCurveTo(HH, BH, LH, AH) {
        let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const SH = (HH, BH, LH, AH) => (1 - HH) * (1 - HH) * BH + 2 * HH * (1 - HH) * LH + HH * HH * AH,
          hH = this._points[this._points.length - 1];
        for (let tH = 0; tH <= rH; tH++) {
          const zH = tH / rH,
            CH = SH(zH, hH.x, HH, LH),
            EH = SH(zH, hH.y, BH, AH);
          this.addLineTo(CH, EH)
        }
        return this
      }
      addBezierCurveTo(HH, BH, LH, AH, rH, SH) {
        let hH = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const tH = (HH, BH, LH, AH, rH) => (1 - HH) * (1 - HH) * (1 - HH) * BH + 3 * HH * (1 - HH) * (1 - HH) * LH + 3 * HH * HH * (1 - HH) * AH + HH * HH * HH * rH,
          zH = this._points[this._points.length - 1];
        for (let CH = 0; CH <= hH; CH++) {
          const EH = CH / hH,
            XH = tH(EH, zH.x, HH, LH, rH),
            GH = tH(EH, zH.y, BH, AH, SH);
          this.addLineTo(XH, GH)
        }
        return this
      }
      isPointInside(HH) {
        let BH = !1;
        const LH = this._points.length;
        for (let AH = LH - 1, rH = 0; rH < LH; AH = rH++) {
          let LH = this._points[AH],
            SH = this._points[rH],
            hH = SH.x - LH.x,
            tH = SH.y - LH.y;
          if (Math.abs(tH) > Number.EPSILON) {
            if (tH < 0 && (LH = this._points[rH], hH = -hH, SH = this._points[AH], tH = -tH), HH.y < LH.y || HH.y > SH.y) continue;
            if (HH.y === LH.y && HH.x === LH.x) return !0;
            {
              const AH = tH * (HH.x - LH.x) - hH * (HH.y - LH.y);
              if (0 === AH) return !0;
              if (AH < 0) continue;
              BH = !BH
            }
          } else {
            if (HH.y !== LH.y) continue;
            if (SH.x <= HH.x && HH.x <= LH.x || LH.x <= HH.x && HH.x <= SH.x) return !0
          }
        }
        return BH
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let HH = this._length;
        if (this.closed) {
          const BH = this._points[this._points.length - 1];
          HH += this._points[0].subtract(BH).length()
        }
        return HH
      }
      area() {
        const HH = this._points.length;
        let BH = 0;
        for (let LH = HH - 1, AH = 0; AH < HH; LH = AH++) BH += this._points[LH].x * this._points[AH].y - this._points[AH].x * this._points[LH].y;
        return .5 * BH
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(HH) {
        if (HH < 0 || HH > 1) return SH.n.Zero();
        const BH = HH * this.length();
        let LH = 0;
        for (let AH = 0; AH < this._points.length; AH++) {
          const HH = (AH + 1) % this._points.length,
            rH = this._points[AH],
            hH = this._points[HH].subtract(rH),
            tH = hH.length() + LH;
          if (BH >= LH && BH <= tH) {
            const HH = hH.normalize(),
              AH = BH - LH;
            return new SH.n(rH.x + HH.x * AH, rH.y + HH.y * AH)
          }
          LH = tH
        }
        return SH.n.Zero()
      }
      static StartingAt(HH, BH) {
        return new CH(HH, BH)
      }
    }
    class EH {
      static CreateQuadraticBezier(HH, BH, LH, AH) {
        AH = AH > 2 ? AH : 3;
        const rH = [],
          hH = (HH, BH, LH, AH) => (1 - HH) * (1 - HH) * BH + 2 * HH * (1 - HH) * LH + HH * HH * AH;
        for (let tH = 0; tH <= AH; tH++) rH.push(new SH.o(hH(tH / AH, HH.x, BH.x, LH.x), hH(tH / AH, HH.y, BH.y, LH.y), hH(tH / AH, HH.z, BH.z, LH.z)));
        return new EH(rH)
      }
      static CreateCubicBezier(HH, BH, LH, AH, rH) {
        rH = rH > 3 ? rH : 4;
        const hH = [],
          tH = (HH, BH, LH, AH, rH) => (1 - HH) * (1 - HH) * (1 - HH) * BH + 3 * HH * (1 - HH) * (1 - HH) * LH + 3 * HH * HH * (1 - HH) * AH + HH * HH * HH * rH;
        for (let zH = 0; zH <= rH; zH++) hH.push(new SH.o(tH(zH / rH, HH.x, BH.x, LH.x, AH.x), tH(zH / rH, HH.y, BH.y, LH.y, AH.y), tH(zH / rH, HH.z, BH.z, LH.z, AH.z)));
        return new EH(hH)
      }
      static CreateHermiteSpline(HH, BH, LH, AH, rH) {
        const hH = [],
          tH = 1 / rH;
        for (let zH = 0; zH <= rH; zH++) hH.push(SH.o.Hermite(HH, BH, LH, AH, zH * tH));
        return new EH(hH)
      }
      static CreateCatmullRomSpline(HH, BH, LH) {
        const AH = [],
          rH = 1 / BH;
        let hH = 0;
        if (LH) {
          const LH = HH.length;
          for (let tH = 0; tH < LH; tH++) {
            hH = 0;
            for (let zH = 0; zH < BH; zH++) AH.push(SH.o.CatmullRom(HH[tH % LH], HH[(tH + 1) % LH], HH[(tH + 2) % LH], HH[(tH + 3) % LH], hH)), hH += rH
          }
          AH.push(AH[0])
        } else {
          const LH = [];
          LH.push(HH[0].clone()), LH.push(...HH), LH.push(HH[HH.length - 1].clone());
          let tH = 0;
          for (; tH < LH.length - 3; tH++) {
            hH = 0;
            for (let HH = 0; HH < BH; HH++) AH.push(SH.o.CatmullRom(LH[tH], LH[tH + 1], LH[tH + 2], LH[tH + 3], hH)), hH += rH
          }
          tH--, AH.push(SH.o.CatmullRom(LH[tH], LH[tH + 1], LH[tH + 2], LH[tH + 3], hH))
        }
        return new EH(AH)
      }
      static ArcThru3Points(HH, BH, LH) {
        let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          rH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          hH = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const tH = [],
          zH = BH.subtract(HH),
          CH = LH.subtract(BH),
          XH = HH.subtract(LH),
          GH = SH.o.Cross(zH, CH),
          YH = GH.length();
        if (YH < Math.pow(10, -8)) return new EH(tH);
        const uH = zH.lengthSquared(),
          QH = CH.lengthSquared(),
          WH = XH.lengthSquared(),
          MH = GH.lengthSquared(),
          xH = .5 * zH.length() * CH.length() * XH.length() / YH,
          vH = -.5 * QH * SH.o.Dot(zH, XH) / MH,
          PH = -.5 * WH * SH.o.Dot(zH, CH) / MH,
          TH = -.5 * uH * SH.o.Dot(CH, XH) / MH,
          UH = HH.scale(vH).add(BH.scale(PH)).add(LH.scale(TH)),
          VH = HH.subtract(UH).normalize(),
          OH = SH.o.Cross(GH, VH).normalize();
        if (hH) {
          const BH = 2 * Math.PI / AH;
          for (let HH = 0; HH <= 2 * Math.PI; HH += BH) tH.push(UH.add(VH.scale(xH * Math.cos(HH)).add(OH.scale(xH * Math.sin(HH)))));
          tH.push(HH)
        } else {
          const BH = 1 / AH;
          let SH, hH = 0;
          do {
            SH = UH.add(VH.scale(xH * Math.cos(hH)).add(OH.scale(xH * Math.sin(hH)))), tH.push(SH), hH += BH
          } while (!SH.equalsWithEpsilon(LH, xH * BH * 1.1));
          tH.push(LH), rH && tH.push(HH)
        }
        return new EH(tH)
      }
      constructor(HH) {
        this._length = 0, this._points = HH, this._length = this._computeLength(HH)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (HH) {
        const BH = this._points[this._points.length - 1],
          LH = this._points.slice(),
          AH = HH.getPoints();
        for (let rH = 1; rH < AH.length; rH++) LH.push(AH[rH].subtract(AH[0]).add(BH));
        return new EH(LH)
      }
      _computeLength(HH) {
        let BH = 0;
        for (let LH = 1; LH < HH.length; LH++) BH += HH[LH].subtract(HH[LH - 1]).length();
        return BH
      }
    }
  },
  39588: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => SH
    });
    var AH = LH(39595);
    const rH = (HH, BH, LH) => HH ? HH.getClassName && "Mesh" === HH.getClassName() ? null : !HH.getClassName || "SubMesh" !== HH.getClassName() && "PhysicsBody" !== HH.getClassName() ? HH.clone ? HH.clone() : Array.isArray(HH) ? HH.slice() : LH && "object" === typeof HH ? {
      ...HH
    } : null : HH.clone(BH) : null;
    class SH {
      static DeepCopy(HH, BH, LH, SH) {
        let hH = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const tH = function(HH) {
          const BH = [];
          do {
            const LH = Object.getOwnPropertyNames(HH);
            for (const HH of LH) - 1 === BH.indexOf(HH) && BH.push(HH)
          } while (HH = Object.getPrototypeOf(HH));
          return BH
        }(HH);
        for (const CH of tH) {
          if ("_" === CH[0] && (!SH || -1 === SH.indexOf(CH))) continue;
          if (CH.endsWith("Observable")) continue;
          if (LH && -1 !== LH.indexOf(CH)) continue;
          const tH = HH[CH],
            EH = typeof tH;
          if ("function" !== EH) try {
            if ("object" === EH)
              if (tH instanceof Uint8Array) BH[CH] = Uint8Array.from(tH);
              else if (tH instanceof Array) {
              if (BH[CH] = [], tH.length > 0)
                if ("object" == typeof tH[0])
                  for (let HH = 0; HH < tH.length; HH++) {
                    const LH = rH(tH[HH], BH, hH); - 1 === BH[CH].indexOf(LH) && BH[CH].push(LH)
                  } else BH[CH] = tH.slice(0)
            } else BH[CH] = rH(tH, BH, hH);
            else BH[CH] = tH
          } catch (zH) {
            AH.e.Warn(zH.message)
          }
        }
      }
    }
  },
  39595: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => AH
    });
    class AH {
      static _CheckLimit(HH, BH) {
        let LH = AH._LogLimitOutputs[HH];
        return LH ? LH.current++ : (LH = {
          limit: BH,
          current: 1
        }, AH._LogLimitOutputs[HH] = LH), LH.current <= LH.limit
      }
      static _GenerateLimitMessage(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const LH = AH._LogLimitOutputs[HH];
        if (!LH || !AH.MessageLimitReached) return;
        const rH = this._Levels[BH];
        LH.current === LH.limit && AH[rH.name](AH.MessageLimitReached.replace(/%LIMIT%/g, "" + LH.limit).replace(/%TYPE%/g, rH.name ?? ""))
      }
      static _AddLogEntry(HH) {
        AH._LogCache = HH + AH._LogCache, AH.OnNewCacheEntry && AH.OnNewCacheEntry(HH)
      }
      static _FormatMessage(HH) {
        const BH = HH => HH < 10 ? "0" + HH : "" + HH,
          LH = new Date;
        return "[" + BH(LH.getHours()) + ":" + BH(LH.getMinutes()) + ":" + BH(LH.getSeconds()) + "]: " + HH
      }
      static _LogDisabled(HH, BH) {}
      static _LogEnabled() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          BH = arguments.length > 1 ? arguments[1] : void 0,
          LH = arguments.length > 2 ? arguments[2] : void 0;
        const rH = Array.isArray(BH) ? BH[0] : BH;
        if (void 0 !== LH && !AH._CheckLimit(rH, LH)) return;
        const SH = AH._FormatMessage(rH),
          hH = this._Levels[HH],
          tH = Array.isArray(BH) ? BH.slice(1) : [];
        hH.logFunc && hH.logFunc("BJS - " + SH, ...tH);
        const zH = `<div style='color:${hH.color}'>${SH}</div><br>`;
        AH._AddLogEntry(zH), AH._GenerateLimitMessage(rH, HH)
      }
      static get LogCache() {
        return AH._LogCache
      }
      static ClearLogCache() {
        AH._LogCache = "", AH._LogLimitOutputs = {}, AH.errorsCount = 0
      }
      static set LogLevels(HH) {
        AH.Log = AH._LogDisabled, AH.Warn = AH._LogDisabled, AH.Error = AH._LogDisabled;
        const BH = [AH.MessageLogLevel, AH.WarningLogLevel, AH.ErrorLogLevel];
        for (const LH of BH)
          if ((HH & LH) === LH) {
            const HH = this._Levels[LH];
            AH[HH.name] = AH._LogEnabled.bind(AH, LH)
          }
      }
    }
    AH.NoneLogLevel = 0, AH.MessageLogLevel = 1, AH.WarningLogLevel = 2, AH.ErrorLogLevel = 4, AH.AllLogLevel = 7, AH.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", AH._LogCache = "", AH._LogLimitOutputs = {}, AH._Levels = [{}, {
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
    }], AH.errorsCount = 0, AH.Log = AH._LogEnabled.bind(AH, AH.MessageLogLevel), AH.Warn = AH._LogEnabled.bind(AH, AH.WarningLogLevel), AH.Error = AH._LogEnabled.bind(AH, AH.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);