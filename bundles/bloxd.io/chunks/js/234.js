export const id = 234;
export const ids = [234];
export const modules = {
  40298: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => RY,
      d: () => vY,
      h: () => aY
    });
    var FY, AY = DY(36559),
      IY = DY(36524);
    ! function(YY) {
      YY[YY.CW = 0] = "CW", YY[YY.CCW = 1] = "CCW"
    }(FY || (FY = {}));
    class RY {
      static Interpolate(YY, rY, DY, FY, AY) {
        if (0 === YY) return 0;
        const IY = 1 - 3 * FY + 3 * rY,
          RY = 3 * FY - 6 * rY,
          OY = 3 * rY;
        let gY = YY;
        for (let aY = 0; aY < 5; aY++) {
          const rY = gY * gY;
          gY -= (IY * (rY * gY) + RY * rY + OY * gY - YY) * (1 / (3 * IY * rY + 2 * RY * gY + OY)), gY = Math.min(1, Math.max(0, gY))
        }
        return 3 * Math.pow(1 - gY, 2) * gY * DY + 3 * (1 - gY) * Math.pow(gY, 2) * AY + Math.pow(gY, 3)
      }
    }
    class OY {
      constructor(YY) {
        this._radians = YY, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(YY, rY) {
        const DY = rY.subtract(YY),
          FY = Math.atan2(DY.y, DY.x);
        return new OY(FY)
      }
      static BetweenTwoVectors(YY, rY) {
        let DY = YY.lengthSquared() * rY.lengthSquared();
        if (0 === DY) return new OY(Math.PI / 2);
        DY = Math.sqrt(DY);
        let FY = YY.dot(rY) / DY;
        FY = (0, AY.Clamp)(FY, -1, 1);
        const IY = Math.acos(FY);
        return new OY(IY)
      }
      static FromRadians(YY) {
        return new OY(YY)
      }
      static FromDegrees(YY) {
        return new OY(YY * Math.PI / 180)
      }
    }
    class gY {
      constructor(YY, rY, DY) {
        this.startPoint = YY, this.midPoint = rY, this.endPoint = DY;
        const FY = Math.pow(rY.x, 2) + Math.pow(rY.y, 2),
          AY = (Math.pow(YY.x, 2) + Math.pow(YY.y, 2) - FY) / 2,
          RY = (FY - Math.pow(DY.x, 2) - Math.pow(DY.y, 2)) / 2,
          gY = (YY.x - rY.x) * (rY.y - DY.y) - (rY.x - DY.x) * (YY.y - rY.y);
        this.centerPoint = new IY.q((AY * (rY.y - DY.y) - RY * (YY.y - rY.y)) / gY, ((YY.x - rY.x) * RY - (rY.x - DY.x) * AY) / gY), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = OY.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const aY = this.startAngle.degrees();
        let vY = OY.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          uY = OY.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        vY - aY > 180 && (vY -= 360), vY - aY < -180 && (vY += 360), uY - vY > 180 && (uY -= 360), uY - vY < -180 && (uY += 360), this.orientation = vY - aY < 0 ? 0 : 1, this.angle = OY.FromDegrees(0 === this.orientation ? aY - uY : uY - aY)
      }
    }
    class aY {
      constructor(YY, rY) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new IY.q(YY, rY))
      }
      addLineTo(YY, rY) {
        if (this.closed) return this;
        const DY = new IY.q(YY, rY),
          FY = this._points[this._points.length - 1];
        return this._points.push(DY), this._length += DY.subtract(FY).length(), this
      }
      addArcTo(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const RY = this._points[this._points.length - 1],
          OY = new IY.q(YY, rY),
          aY = new IY.q(DY, FY),
          vY = new gY(RY, OY, aY);
        let uY = vY.angle.radians() / AY;
        0 === vY.orientation && (uY *= -1);
        let sY = vY.startAngle.radians() + uY;
        for (let IY = 0; IY < AY; IY++) {
          const YY = Math.cos(sY) * vY.radius + vY.centerPoint.x,
            rY = Math.sin(sY) * vY.radius + vY.centerPoint.y;
          this.addLineTo(YY, rY), sY += uY
        }
        return this
      }
      addQuadraticCurveTo(YY, rY, DY, FY) {
        let AY = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const IY = (YY, rY, DY, FY) => (1 - YY) * (1 - YY) * rY + 2 * YY * (1 - YY) * DY + YY * YY * FY,
          RY = this._points[this._points.length - 1];
        for (let OY = 0; OY <= AY; OY++) {
          const gY = OY / AY,
            aY = IY(gY, RY.x, YY, DY),
            vY = IY(gY, RY.y, rY, FY);
          this.addLineTo(aY, vY)
        }
        return this
      }
      addBezierCurveTo(YY, rY, DY, FY, AY, IY) {
        let RY = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const OY = (YY, rY, DY, FY, AY) => (1 - YY) * (1 - YY) * (1 - YY) * rY + 3 * YY * (1 - YY) * (1 - YY) * DY + 3 * YY * YY * (1 - YY) * FY + YY * YY * YY * AY,
          gY = this._points[this._points.length - 1];
        for (let aY = 0; aY <= RY; aY++) {
          const vY = aY / RY,
            uY = OY(vY, gY.x, YY, DY, AY),
            sY = OY(vY, gY.y, rY, FY, IY);
          this.addLineTo(uY, sY)
        }
        return this
      }
      isPointInside(YY) {
        let rY = !1;
        const DY = this._points.length;
        for (let FY = DY - 1, AY = 0; AY < DY; FY = AY++) {
          let DY = this._points[FY],
            IY = this._points[AY],
            RY = IY.x - DY.x,
            OY = IY.y - DY.y;
          if (Math.abs(OY) > Number.EPSILON) {
            if (OY < 0 && (DY = this._points[AY], RY = -RY, IY = this._points[FY], OY = -OY), YY.y < DY.y || YY.y > IY.y) continue;
            if (YY.y === DY.y && YY.x === DY.x) return !0;
            {
              const FY = OY * (YY.x - DY.x) - RY * (YY.y - DY.y);
              if (0 === FY) return !0;
              if (FY < 0) continue;
              rY = !rY
            }
          } else {
            if (YY.y !== DY.y) continue;
            if (IY.x <= YY.x && YY.x <= DY.x || DY.x <= YY.x && YY.x <= IY.x) return !0
          }
        }
        return rY
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let YY = this._length;
        if (this.closed) {
          const rY = this._points[this._points.length - 1];
          YY += this._points[0].subtract(rY).length()
        }
        return YY
      }
      area() {
        const YY = this._points.length;
        let rY = 0;
        for (let DY = YY - 1, FY = 0; FY < YY; DY = FY++) rY += this._points[DY].x * this._points[FY].y - this._points[FY].x * this._points[DY].y;
        return .5 * rY
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(YY) {
        if (YY < 0 || YY > 1) return IY.q.Zero();
        const rY = YY * this.length();
        let DY = 0;
        for (let FY = 0; FY < this._points.length; FY++) {
          const YY = (FY + 1) % this._points.length,
            AY = this._points[FY],
            RY = this._points[YY].subtract(AY),
            OY = RY.length() + DY;
          if (rY >= DY && rY <= OY) {
            const YY = RY.normalize(),
              FY = rY - DY;
            return new IY.q(AY.x + YY.x * FY, AY.y + YY.y * FY)
          }
          DY = OY
        }
        return IY.q.Zero()
      }
      static StartingAt(YY, rY) {
        return new aY(YY, rY)
      }
    }
    class vY {
      static CreateQuadraticBezier(YY, rY, DY, FY) {
        FY = FY > 2 ? FY : 3;
        const AY = [],
          RY = (YY, rY, DY, FY) => (1 - YY) * (1 - YY) * rY + 2 * YY * (1 - YY) * DY + YY * YY * FY;
        for (let OY = 0; OY <= FY; OY++) AY.push(new IY.r(RY(OY / FY, YY.x, rY.x, DY.x), RY(OY / FY, YY.y, rY.y, DY.y), RY(OY / FY, YY.z, rY.z, DY.z)));
        return new vY(AY)
      }
      static CreateCubicBezier(YY, rY, DY, FY, AY) {
        AY = AY > 3 ? AY : 4;
        const RY = [],
          OY = (YY, rY, DY, FY, AY) => (1 - YY) * (1 - YY) * (1 - YY) * rY + 3 * YY * (1 - YY) * (1 - YY) * DY + 3 * YY * YY * (1 - YY) * FY + YY * YY * YY * AY;
        for (let gY = 0; gY <= AY; gY++) RY.push(new IY.r(OY(gY / AY, YY.x, rY.x, DY.x, FY.x), OY(gY / AY, YY.y, rY.y, DY.y, FY.y), OY(gY / AY, YY.z, rY.z, DY.z, FY.z)));
        return new vY(RY)
      }
      static CreateHermiteSpline(YY, rY, DY, FY, AY) {
        const RY = [],
          OY = 1 / AY;
        for (let gY = 0; gY <= AY; gY++) RY.push(IY.r.Hermite(YY, rY, DY, FY, gY * OY));
        return new vY(RY)
      }
      static CreateCatmullRomSpline(YY, rY, DY) {
        const FY = [],
          AY = 1 / rY;
        let RY = 0;
        if (DY) {
          const DY = YY.length;
          for (let OY = 0; OY < DY; OY++) {
            RY = 0;
            for (let gY = 0; gY < rY; gY++) FY.push(IY.r.CatmullRom(YY[OY % DY], YY[(OY + 1) % DY], YY[(OY + 2) % DY], YY[(OY + 3) % DY], RY)), RY += AY
          }
          FY.push(FY[0])
        } else {
          const DY = [];
          DY.push(YY[0].clone()), DY.push(...YY), DY.push(YY[YY.length - 1].clone());
          let OY = 0;
          for (; OY < DY.length - 3; OY++) {
            RY = 0;
            for (let YY = 0; YY < rY; YY++) FY.push(IY.r.CatmullRom(DY[OY], DY[OY + 1], DY[OY + 2], DY[OY + 3], RY)), RY += AY
          }
          OY--, FY.push(IY.r.CatmullRom(DY[OY], DY[OY + 1], DY[OY + 2], DY[OY + 3], RY))
        }
        return new vY(FY)
      }
      static ArcThru3Points(YY, rY, DY) {
        let FY = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          AY = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          RY = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const OY = [],
          gY = rY.subtract(YY),
          aY = DY.subtract(rY),
          uY = YY.subtract(DY),
          sY = IY.r.Cross(gY, aY),
          iY = sY.length();
        if (iY < Math.pow(10, -8)) return new vY(OY);
        const yY = gY.lengthSquared(),
          QY = aY.lengthSquared(),
          oY = uY.lengthSquared(),
          WY = sY.lengthSquared(),
          EY = .5 * gY.length() * aY.length() * uY.length() / iY,
          mY = -.5 * QY * IY.r.Dot(gY, uY) / WY,
          VY = -.5 * oY * IY.r.Dot(gY, aY) / WY,
          SY = -.5 * yY * IY.r.Dot(aY, uY) / WY,
          lY = YY.scale(mY).add(rY.scale(VY)).add(DY.scale(SY)),
          TY = YY.subtract(lY).normalize(),
          eY = IY.r.Cross(sY, TY).normalize();
        if (RY) {
          const rY = 2 * Math.PI / FY;
          for (let YY = 0; YY <= 2 * Math.PI; YY += rY) OY.push(lY.add(TY.scale(EY * Math.cos(YY)).add(eY.scale(EY * Math.sin(YY)))));
          OY.push(YY)
        } else {
          const rY = 1 / FY;
          let IY, RY = 0;
          do {
            IY = lY.add(TY.scale(EY * Math.cos(RY)).add(eY.scale(EY * Math.sin(RY)))), OY.push(IY), RY += rY
          } while (!IY.equalsWithEpsilon(DY, EY * rY * 1.1));
          OY.push(DY), AY && OY.push(YY)
        }
        return new vY(OY)
      }
      constructor(YY) {
        this._length = 0, this._points = YY, this._length = this._computeLength(YY)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (YY) {
        const rY = this._points[this._points.length - 1],
          DY = this._points.slice(),
          FY = YY.getPoints();
        for (let AY = 1; AY < FY.length; AY++) DY.push(FY[AY].subtract(FY[0]).add(rY));
        return new vY(DY)
      }
      _computeLength(YY) {
        let rY = 0;
        for (let DY = 1; DY < YY.length; DY++) rY += YY[DY].subtract(YY[DY - 1]).length();
        return rY
      }
    }
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