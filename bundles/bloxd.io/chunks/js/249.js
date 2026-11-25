export const id = 249;
export const ids = [249];
export const modules = {
  41481: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => yG,
      e: () => VG,
      h: () => YG
    });
    var wG, SG = ZG(37471),
      LG = ZG(37439);
    ! function(GG) {
      GG[GG.CW = 0] = "CW", GG[GG.CCW = 1] = "CCW"
    }(wG || (wG = {}));
    class yG {
      static Interpolate(GG, bG, ZG, wG, SG) {
        if (0 === GG) return 0;
        const LG = 1 - 3 * wG + 3 * bG,
          yG = 3 * wG - 6 * bG,
          kG = 3 * bG;
        let UG = GG;
        for (let YG = 0; YG < 5; YG++) {
          const bG = UG * UG;
          UG -= (LG * (bG * UG) + yG * bG + kG * UG - GG) * (1 / (3 * LG * bG + 2 * yG * UG + kG)), UG = Math.min(1, Math.max(0, UG))
        }
        return 3 * Math.pow(1 - UG, 2) * UG * ZG + 3 * (1 - UG) * Math.pow(UG, 2) * SG + Math.pow(UG, 3)
      }
    }
    class kG {
      constructor(GG) {
        this._radians = GG, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(GG, bG) {
        const ZG = bG.subtract(GG),
          wG = Math.atan2(ZG.y, ZG.x);
        return new kG(wG)
      }
      static BetweenTwoVectors(GG, bG) {
        let ZG = GG.lengthSquared() * bG.lengthSquared();
        if (0 === ZG) return new kG(Math.PI / 2);
        ZG = Math.sqrt(ZG);
        let wG = GG.dot(bG) / ZG;
        wG = (0, SG.Clamp)(wG, -1, 1);
        const LG = Math.acos(wG);
        return new kG(LG)
      }
      static FromRadians(GG) {
        return new kG(GG)
      }
      static FromDegrees(GG) {
        return new kG(GG * Math.PI / 180)
      }
    }
    class UG {
      constructor(GG, bG, ZG) {
        this.startPoint = GG, this.midPoint = bG, this.endPoint = ZG;
        const wG = Math.pow(bG.x, 2) + Math.pow(bG.y, 2),
          SG = (Math.pow(GG.x, 2) + Math.pow(GG.y, 2) - wG) / 2,
          yG = (wG - Math.pow(ZG.x, 2) - Math.pow(ZG.y, 2)) / 2,
          UG = (GG.x - bG.x) * (bG.y - ZG.y) - (bG.x - ZG.x) * (GG.y - bG.y);
        this.centerPoint = new LG.m((SG * (bG.y - ZG.y) - yG * (GG.y - bG.y)) / UG, ((GG.x - bG.x) * yG - (bG.x - ZG.x) * SG) / UG), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = kG.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const YG = this.startAngle.degrees();
        let VG = kG.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          pG = kG.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        VG - YG > 180 && (VG -= 360), VG - YG < -180 && (VG += 360), pG - VG > 180 && (pG -= 360), pG - VG < -180 && (pG += 360), this.orientation = VG - YG < 0 ? 0 : 1, this.angle = kG.FromDegrees(0 === this.orientation ? YG - pG : pG - YG)
      }
    }
    class YG {
      constructor(GG, bG) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new LG.m(GG, bG))
      }
      addLineTo(GG, bG) {
        if (this.closed) return this;
        const ZG = new LG.m(GG, bG),
          wG = this._points[this._points.length - 1];
        return this._points.push(ZG), this._length += ZG.subtract(wG).length(), this
      }
      addArcTo(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const yG = this._points[this._points.length - 1],
          kG = new LG.m(GG, bG),
          YG = new LG.m(ZG, wG),
          VG = new UG(yG, kG, YG);
        let pG = VG.angle.radians() / SG;
        0 === VG.orientation && (pG *= -1);
        let fG = VG.startAngle.radians() + pG;
        for (let LG = 0; LG < SG; LG++) {
          const GG = Math.cos(fG) * VG.radius + VG.centerPoint.x,
            bG = Math.sin(fG) * VG.radius + VG.centerPoint.y;
          this.addLineTo(GG, bG), fG += pG
        }
        return this
      }
      addQuadraticCurveTo(GG, bG, ZG, wG) {
        let SG = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const LG = (GG, bG, ZG, wG) => (1 - GG) * (1 - GG) * bG + 2 * GG * (1 - GG) * ZG + GG * GG * wG,
          yG = this._points[this._points.length - 1];
        for (let kG = 0; kG <= SG; kG++) {
          const UG = kG / SG,
            YG = LG(UG, yG.x, GG, ZG),
            VG = LG(UG, yG.y, bG, wG);
          this.addLineTo(YG, VG)
        }
        return this
      }
      addBezierCurveTo(GG, bG, ZG, wG, SG, LG) {
        let yG = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const kG = (GG, bG, ZG, wG, SG) => (1 - GG) * (1 - GG) * (1 - GG) * bG + 3 * GG * (1 - GG) * (1 - GG) * ZG + 3 * GG * GG * (1 - GG) * wG + GG * GG * GG * SG,
          UG = this._points[this._points.length - 1];
        for (let YG = 0; YG <= yG; YG++) {
          const VG = YG / yG,
            pG = kG(VG, UG.x, GG, ZG, SG),
            fG = kG(VG, UG.y, bG, wG, LG);
          this.addLineTo(pG, fG)
        }
        return this
      }
      isPointInside(GG) {
        let bG = !1;
        const ZG = this._points.length;
        for (let wG = ZG - 1, SG = 0; SG < ZG; wG = SG++) {
          let ZG = this._points[wG],
            LG = this._points[SG],
            yG = LG.x - ZG.x,
            kG = LG.y - ZG.y;
          if (Math.abs(kG) > Number.EPSILON) {
            if (kG < 0 && (ZG = this._points[SG], yG = -yG, LG = this._points[wG], kG = -kG), GG.y < ZG.y || GG.y > LG.y) continue;
            if (GG.y === ZG.y && GG.x === ZG.x) return !0;
            {
              const wG = kG * (GG.x - ZG.x) - yG * (GG.y - ZG.y);
              if (0 === wG) return !0;
              if (wG < 0) continue;
              bG = !bG
            }
          } else {
            if (GG.y !== ZG.y) continue;
            if (LG.x <= GG.x && GG.x <= ZG.x || ZG.x <= GG.x && GG.x <= LG.x) return !0
          }
        }
        return bG
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let GG = this._length;
        if (this.closed) {
          const bG = this._points[this._points.length - 1];
          GG += this._points[0].subtract(bG).length()
        }
        return GG
      }
      area() {
        const GG = this._points.length;
        let bG = 0;
        for (let ZG = GG - 1, wG = 0; wG < GG; ZG = wG++) bG += this._points[ZG].x * this._points[wG].y - this._points[wG].x * this._points[ZG].y;
        return .5 * bG
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(GG) {
        if (GG < 0 || GG > 1) return LG.m.Zero();
        const bG = GG * this.length();
        let ZG = 0;
        for (let wG = 0; wG < this._points.length; wG++) {
          const GG = (wG + 1) % this._points.length,
            SG = this._points[wG],
            yG = this._points[GG].subtract(SG),
            kG = yG.length() + ZG;
          if (bG >= ZG && bG <= kG) {
            const GG = yG.normalize(),
              wG = bG - ZG;
            return new LG.m(SG.x + GG.x * wG, SG.y + GG.y * wG)
          }
          ZG = kG
        }
        return LG.m.Zero()
      }
      static StartingAt(GG, bG) {
        return new YG(GG, bG)
      }
    }
    class VG {
      static CreateQuadraticBezier(GG, bG, ZG, wG) {
        wG = wG > 2 ? wG : 3;
        const SG = [],
          yG = (GG, bG, ZG, wG) => (1 - GG) * (1 - GG) * bG + 2 * GG * (1 - GG) * ZG + GG * GG * wG;
        for (let kG = 0; kG <= wG; kG++) SG.push(new LG.p(yG(kG / wG, GG.x, bG.x, ZG.x), yG(kG / wG, GG.y, bG.y, ZG.y), yG(kG / wG, GG.z, bG.z, ZG.z)));
        return new VG(SG)
      }
      static CreateCubicBezier(GG, bG, ZG, wG, SG) {
        SG = SG > 3 ? SG : 4;
        const yG = [],
          kG = (GG, bG, ZG, wG, SG) => (1 - GG) * (1 - GG) * (1 - GG) * bG + 3 * GG * (1 - GG) * (1 - GG) * ZG + 3 * GG * GG * (1 - GG) * wG + GG * GG * GG * SG;
        for (let UG = 0; UG <= SG; UG++) yG.push(new LG.p(kG(UG / SG, GG.x, bG.x, ZG.x, wG.x), kG(UG / SG, GG.y, bG.y, ZG.y, wG.y), kG(UG / SG, GG.z, bG.z, ZG.z, wG.z)));
        return new VG(yG)
      }
      static CreateHermiteSpline(GG, bG, ZG, wG, SG) {
        const yG = [],
          kG = 1 / SG;
        for (let UG = 0; UG <= SG; UG++) yG.push(LG.p.Hermite(GG, bG, ZG, wG, UG * kG));
        return new VG(yG)
      }
      static CreateCatmullRomSpline(GG, bG, ZG) {
        const wG = [],
          SG = 1 / bG;
        let yG = 0;
        if (ZG) {
          const ZG = GG.length;
          for (let kG = 0; kG < ZG; kG++) {
            yG = 0;
            for (let UG = 0; UG < bG; UG++) wG.push(LG.p.CatmullRom(GG[kG % ZG], GG[(kG + 1) % ZG], GG[(kG + 2) % ZG], GG[(kG + 3) % ZG], yG)), yG += SG
          }
          wG.push(wG[0])
        } else {
          const ZG = [];
          ZG.push(GG[0].clone()), ZG.push(...GG), ZG.push(GG[GG.length - 1].clone());
          let kG = 0;
          for (; kG < ZG.length - 3; kG++) {
            yG = 0;
            for (let GG = 0; GG < bG; GG++) wG.push(LG.p.CatmullRom(ZG[kG], ZG[kG + 1], ZG[kG + 2], ZG[kG + 3], yG)), yG += SG
          }
          kG--, wG.push(LG.p.CatmullRom(ZG[kG], ZG[kG + 1], ZG[kG + 2], ZG[kG + 3], yG))
        }
        return new VG(wG)
      }
      static ArcThru3Points(GG, bG, ZG) {
        let wG = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          SG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          yG = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const kG = [],
          UG = bG.subtract(GG),
          YG = ZG.subtract(bG),
          pG = GG.subtract(ZG),
          fG = LG.p.Cross(UG, YG),
          QG = fG.length();
        if (QG < Math.pow(10, -8)) return new VG(kG);
        const KG = UG.lengthSquared(),
          hG = YG.lengthSquared(),
          dG = pG.lengthSquared(),
          JG = fG.lengthSquared(),
          rG = .5 * UG.length() * YG.length() * pG.length() / QG,
          zG = -.5 * hG * LG.p.Dot(UG, pG) / JG,
          EG = -.5 * dG * LG.p.Dot(UG, YG) / JG,
          oG = -.5 * KG * LG.p.Dot(YG, pG) / JG,
          XG = GG.scale(zG).add(bG.scale(EG)).add(ZG.scale(oG)),
          uG = GG.subtract(XG).normalize(),
          iG = LG.p.Cross(fG, uG).normalize();
        if (yG) {
          const bG = 2 * Math.PI / wG;
          for (let GG = 0; GG <= 2 * Math.PI; GG += bG) kG.push(XG.add(uG.scale(rG * Math.cos(GG)).add(iG.scale(rG * Math.sin(GG)))));
          kG.push(GG)
        } else {
          const bG = 1 / wG;
          let LG, yG = 0;
          do {
            LG = XG.add(uG.scale(rG * Math.cos(yG)).add(iG.scale(rG * Math.sin(yG)))), kG.push(LG), yG += bG
          } while (!LG.equalsWithEpsilon(ZG, rG * bG * 1.1));
          kG.push(ZG), SG && kG.push(GG)
        }
        return new VG(kG)
      }
      constructor(GG) {
        this._length = 0, this._points = GG, this._length = this._computeLength(GG)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (GG) {
        const bG = this._points[this._points.length - 1],
          ZG = this._points.slice(),
          wG = GG.getPoints();
        for (let SG = 1; SG < wG.length; SG++) ZG.push(wG[SG].subtract(wG[0]).add(bG));
        return new VG(ZG)
      }
      _computeLength(GG) {
        let bG = 0;
        for (let ZG = 1; ZG < GG.length; ZG++) bG += GG[ZG].subtract(GG[ZG - 1]).length();
        return bG
      }
    }
  },
  39086: (GG, bG, ZG) => {
    ZG.d(bG, {
      e: () => LG
    });
    var wG = ZG(39093);
    const SG = (GG, bG, ZG) => GG ? GG.getClassName && "Mesh" === GG.getClassName() ? null : !GG.getClassName || "SubMesh" !== GG.getClassName() && "PhysicsBody" !== GG.getClassName() ? GG.clone ? GG.clone() : Array.isArray(GG) ? GG.slice() : ZG && "object" === typeof GG ? {
      ...GG
    } : null : GG.clone(bG) : null;
    class LG {
      static DeepCopy(GG, bG, ZG, LG) {
        let yG = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const kG = function(GG) {
          const bG = [];
          do {
            const ZG = Object.getOwnPropertyNames(GG);
            for (const GG of ZG) - 1 === bG.indexOf(GG) && bG.push(GG)
          } while (GG = Object.getPrototypeOf(GG));
          return bG
        }(GG);
        for (const YG of kG) {
          if ("_" === YG[0] && (!LG || -1 === LG.indexOf(YG))) continue;
          if (YG.endsWith("Observable")) continue;
          if (ZG && -1 !== ZG.indexOf(YG)) continue;
          const kG = GG[YG],
            VG = typeof kG;
          if ("function" !== VG) try {
            if ("object" === VG)
              if (kG instanceof Uint8Array) bG[YG] = Uint8Array.from(kG);
              else if (kG instanceof Array) {
              if (bG[YG] = [], kG.length > 0)
                if ("object" == typeof kG[0])
                  for (let GG = 0; GG < kG.length; GG++) {
                    const ZG = SG(kG[GG], bG, yG); - 1 === bG[YG].indexOf(ZG) && bG[YG].push(ZG)
                  } else bG[YG] = kG.slice(0)
            } else bG[YG] = SG(kG, bG, yG);
            else bG[YG] = kG
          } catch (UG) {
            wG.c.Warn(UG.message)
          }
        }
      }
    }
  },
  39093: (GG, bG, ZG) => {
    ZG.d(bG, {
      c: () => wG
    });
    class wG {
      static _CheckLimit(GG, bG) {
        let ZG = wG._LogLimitOutputs[GG];
        return ZG ? ZG.current++ : (ZG = {
          limit: bG,
          current: 1
        }, wG._LogLimitOutputs[GG] = ZG), ZG.current <= ZG.limit
      }
      static _GenerateLimitMessage(GG) {
        let bG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZG = wG._LogLimitOutputs[GG];
        if (!ZG || !wG.MessageLimitReached) return;
        const SG = this._Levels[bG];
        ZG.current === ZG.limit && wG[SG.name](wG.MessageLimitReached.replace(/%LIMIT%/g, "" + ZG.limit).replace(/%TYPE%/g, SG.name ?? ""))
      }
      static _AddLogEntry(GG) {
        wG._LogCache = GG + wG._LogCache, wG.OnNewCacheEntry && wG.OnNewCacheEntry(GG)
      }
      static _FormatMessage(GG) {
        const bG = GG => GG < 10 ? "0" + GG : "" + GG,
          ZG = new Date;
        return "[" + bG(ZG.getHours()) + ":" + bG(ZG.getMinutes()) + ":" + bG(ZG.getSeconds()) + "]: " + GG
      }
      static _LogDisabled(GG, bG) {}
      static _LogEnabled() {
        let GG = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bG = arguments.length > 1 ? arguments[1] : void 0,
          ZG = arguments.length > 2 ? arguments[2] : void 0;
        const SG = Array.isArray(bG) ? bG[0] : bG;
        if (void 0 !== ZG && !wG._CheckLimit(SG, ZG)) return;
        const LG = wG._FormatMessage(SG),
          yG = this._Levels[GG],
          kG = Array.isArray(bG) ? bG.slice(1) : [];
        yG.logFunc && yG.logFunc("BJS - " + LG, ...kG);
        const UG = `<div style='color:${yG.color}'>${LG}</div><br>`;
        wG._AddLogEntry(UG), wG._GenerateLimitMessage(SG, GG)
      }
      static get LogCache() {
        return wG._LogCache
      }
      static ClearLogCache() {
        wG._LogCache = "", wG._LogLimitOutputs = {}, wG.errorsCount = 0
      }
      static set LogLevels(GG) {
        wG.Log = wG._LogDisabled, wG.Warn = wG._LogDisabled, wG.Error = wG._LogDisabled;
        const bG = [wG.MessageLogLevel, wG.WarningLogLevel, wG.ErrorLogLevel];
        for (const ZG of bG)
          if ((GG & ZG) === ZG) {
            const GG = this._Levels[ZG];
            wG[GG.name] = wG._LogEnabled.bind(wG, ZG)
          }
      }
    }
    wG.NoneLogLevel = 0, wG.MessageLogLevel = 1, wG.WarningLogLevel = 2, wG.ErrorLogLevel = 4, wG.AllLogLevel = 7, wG.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", wG._LogCache = "", wG._LogLimitOutputs = {}, wG._Levels = [{}, {
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
    }], wG.errorsCount = 0, wG.Log = wG._LogEnabled.bind(wG, wG.MessageLogLevel), wG.Warn = wG._LogEnabled.bind(wG, wG.WarningLogLevel), wG.Error = wG._LogEnabled.bind(wG, wG.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);