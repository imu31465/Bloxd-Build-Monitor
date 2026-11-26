export const id = 265;
export const ids = [265];
export const modules = {
  42190: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => AU,
      f: () => EU,
      g: () => DU
    });
    var cU, yU = zU(37855),
      QU = zU(37819);
    ! function(UU) {
      UU[UU.CW = 0] = "CW", UU[UU.CCW = 1] = "CCW"
    }(cU || (cU = {}));
    class AU {
      static Interpolate(UU, XU, zU, cU, yU) {
        if (0 === UU) return 0;
        const QU = 1 - 3 * cU + 3 * XU,
          AU = 3 * cU - 6 * XU,
          FU = 3 * XU;
        let oU = UU;
        for (let DU = 0; DU < 5; DU++) {
          const XU = oU * oU;
          oU -= (QU * (XU * oU) + AU * XU + FU * oU - UU) * (1 / (3 * QU * XU + 2 * AU * oU + FU)), oU = Math.min(1, Math.max(0, oU))
        }
        return 3 * Math.pow(1 - oU, 2) * oU * zU + 3 * (1 - oU) * Math.pow(oU, 2) * yU + Math.pow(oU, 3)
      }
    }
    class FU {
      constructor(UU) {
        this._radians = UU, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(UU, XU) {
        const zU = XU.subtract(UU),
          cU = Math.atan2(zU.y, zU.x);
        return new FU(cU)
      }
      static BetweenTwoVectors(UU, XU) {
        let zU = UU.lengthSquared() * XU.lengthSquared();
        if (0 === zU) return new FU(Math.PI / 2);
        zU = Math.sqrt(zU);
        let cU = UU.dot(XU) / zU;
        cU = (0, yU.Clamp)(cU, -1, 1);
        const QU = Math.acos(cU);
        return new FU(QU)
      }
      static FromRadians(UU) {
        return new FU(UU)
      }
      static FromDegrees(UU) {
        return new FU(UU * Math.PI / 180)
      }
    }
    class oU {
      constructor(UU, XU, zU) {
        this.startPoint = UU, this.midPoint = XU, this.endPoint = zU;
        const cU = Math.pow(XU.x, 2) + Math.pow(XU.y, 2),
          yU = (Math.pow(UU.x, 2) + Math.pow(UU.y, 2) - cU) / 2,
          AU = (cU - Math.pow(zU.x, 2) - Math.pow(zU.y, 2)) / 2,
          oU = (UU.x - XU.x) * (XU.y - zU.y) - (XU.x - zU.x) * (UU.y - XU.y);
        this.centerPoint = new QU.m((yU * (XU.y - zU.y) - AU * (UU.y - XU.y)) / oU, ((UU.x - XU.x) * AU - (XU.x - zU.x) * yU) / oU), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = FU.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const DU = this.startAngle.degrees();
        let EU = FU.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          YU = FU.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        EU - DU > 180 && (EU -= 360), EU - DU < -180 && (EU += 360), YU - EU > 180 && (YU -= 360), YU - EU < -180 && (YU += 360), this.orientation = EU - DU < 0 ? 0 : 1, this.angle = FU.FromDegrees(0 === this.orientation ? DU - YU : YU - DU)
      }
    }
    class DU {
      constructor(UU, XU) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new QU.m(UU, XU))
      }
      addLineTo(UU, XU) {
        if (this.closed) return this;
        const zU = new QU.m(UU, XU),
          cU = this._points[this._points.length - 1];
        return this._points.push(zU), this._length += zU.subtract(cU).length(), this
      }
      addArcTo(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const AU = this._points[this._points.length - 1],
          FU = new QU.m(UU, XU),
          DU = new QU.m(zU, cU),
          EU = new oU(AU, FU, DU);
        let YU = EU.angle.radians() / yU;
        0 === EU.orientation && (YU *= -1);
        let NU = EU.startAngle.radians() + YU;
        for (let QU = 0; QU < yU; QU++) {
          const UU = Math.cos(NU) * EU.radius + EU.centerPoint.x,
            XU = Math.sin(NU) * EU.radius + EU.centerPoint.y;
          this.addLineTo(UU, XU), NU += YU
        }
        return this
      }
      addQuadraticCurveTo(UU, XU, zU, cU) {
        let yU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const QU = (UU, XU, zU, cU) => (1 - UU) * (1 - UU) * XU + 2 * UU * (1 - UU) * zU + UU * UU * cU,
          AU = this._points[this._points.length - 1];
        for (let FU = 0; FU <= yU; FU++) {
          const oU = FU / yU,
            DU = QU(oU, AU.x, UU, zU),
            EU = QU(oU, AU.y, XU, cU);
          this.addLineTo(DU, EU)
        }
        return this
      }
      addBezierCurveTo(UU, XU, zU, cU, yU, QU) {
        let AU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const FU = (UU, XU, zU, cU, yU) => (1 - UU) * (1 - UU) * (1 - UU) * XU + 3 * UU * (1 - UU) * (1 - UU) * zU + 3 * UU * UU * (1 - UU) * cU + UU * UU * UU * yU,
          oU = this._points[this._points.length - 1];
        for (let DU = 0; DU <= AU; DU++) {
          const EU = DU / AU,
            YU = FU(EU, oU.x, UU, zU, yU),
            NU = FU(EU, oU.y, XU, cU, QU);
          this.addLineTo(YU, NU)
        }
        return this
      }
      isPointInside(UU) {
        let XU = !1;
        const zU = this._points.length;
        for (let cU = zU - 1, yU = 0; yU < zU; cU = yU++) {
          let zU = this._points[cU],
            QU = this._points[yU],
            AU = QU.x - zU.x,
            FU = QU.y - zU.y;
          if (Math.abs(FU) > Number.EPSILON) {
            if (FU < 0 && (zU = this._points[yU], AU = -AU, QU = this._points[cU], FU = -FU), UU.y < zU.y || UU.y > QU.y) continue;
            if (UU.y === zU.y && UU.x === zU.x) return !0;
            {
              const cU = FU * (UU.x - zU.x) - AU * (UU.y - zU.y);
              if (0 === cU) return !0;
              if (cU < 0) continue;
              XU = !XU
            }
          } else {
            if (UU.y !== zU.y) continue;
            if (QU.x <= UU.x && UU.x <= zU.x || zU.x <= UU.x && UU.x <= QU.x) return !0
          }
        }
        return XU
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let UU = this._length;
        if (this.closed) {
          const XU = this._points[this._points.length - 1];
          UU += this._points[0].subtract(XU).length()
        }
        return UU
      }
      area() {
        const UU = this._points.length;
        let XU = 0;
        for (let zU = UU - 1, cU = 0; cU < UU; zU = cU++) XU += this._points[zU].x * this._points[cU].y - this._points[cU].x * this._points[zU].y;
        return .5 * XU
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(UU) {
        if (UU < 0 || UU > 1) return QU.m.Zero();
        const XU = UU * this.length();
        let zU = 0;
        for (let cU = 0; cU < this._points.length; cU++) {
          const UU = (cU + 1) % this._points.length,
            yU = this._points[cU],
            AU = this._points[UU].subtract(yU),
            FU = AU.length() + zU;
          if (XU >= zU && XU <= FU) {
            const UU = AU.normalize(),
              cU = XU - zU;
            return new QU.m(yU.x + UU.x * cU, yU.y + UU.y * cU)
          }
          zU = FU
        }
        return QU.m.Zero()
      }
      static StartingAt(UU, XU) {
        return new DU(UU, XU)
      }
    }
    class EU {
      static CreateQuadraticBezier(UU, XU, zU, cU) {
        cU = cU > 2 ? cU : 3;
        const yU = [],
          AU = (UU, XU, zU, cU) => (1 - UU) * (1 - UU) * XU + 2 * UU * (1 - UU) * zU + UU * UU * cU;
        for (let FU = 0; FU <= cU; FU++) yU.push(new QU.q(AU(FU / cU, UU.x, XU.x, zU.x), AU(FU / cU, UU.y, XU.y, zU.y), AU(FU / cU, UU.z, XU.z, zU.z)));
        return new EU(yU)
      }
      static CreateCubicBezier(UU, XU, zU, cU, yU) {
        yU = yU > 3 ? yU : 4;
        const AU = [],
          FU = (UU, XU, zU, cU, yU) => (1 - UU) * (1 - UU) * (1 - UU) * XU + 3 * UU * (1 - UU) * (1 - UU) * zU + 3 * UU * UU * (1 - UU) * cU + UU * UU * UU * yU;
        for (let oU = 0; oU <= yU; oU++) AU.push(new QU.q(FU(oU / yU, UU.x, XU.x, zU.x, cU.x), FU(oU / yU, UU.y, XU.y, zU.y, cU.y), FU(oU / yU, UU.z, XU.z, zU.z, cU.z)));
        return new EU(AU)
      }
      static CreateHermiteSpline(UU, XU, zU, cU, yU) {
        const AU = [],
          FU = 1 / yU;
        for (let oU = 0; oU <= yU; oU++) AU.push(QU.q.Hermite(UU, XU, zU, cU, oU * FU));
        return new EU(AU)
      }
      static CreateCatmullRomSpline(UU, XU, zU) {
        const cU = [],
          yU = 1 / XU;
        let AU = 0;
        if (zU) {
          const zU = UU.length;
          for (let FU = 0; FU < zU; FU++) {
            AU = 0;
            for (let oU = 0; oU < XU; oU++) cU.push(QU.q.CatmullRom(UU[FU % zU], UU[(FU + 1) % zU], UU[(FU + 2) % zU], UU[(FU + 3) % zU], AU)), AU += yU
          }
          cU.push(cU[0])
        } else {
          const zU = [];
          zU.push(UU[0].clone()), zU.push(...UU), zU.push(UU[UU.length - 1].clone());
          let FU = 0;
          for (; FU < zU.length - 3; FU++) {
            AU = 0;
            for (let UU = 0; UU < XU; UU++) cU.push(QU.q.CatmullRom(zU[FU], zU[FU + 1], zU[FU + 2], zU[FU + 3], AU)), AU += yU
          }
          FU--, cU.push(QU.q.CatmullRom(zU[FU], zU[FU + 1], zU[FU + 2], zU[FU + 3], AU))
        }
        return new EU(cU)
      }
      static ArcThru3Points(UU, XU, zU) {
        let cU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          yU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          AU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const FU = [],
          oU = XU.subtract(UU),
          DU = zU.subtract(XU),
          YU = UU.subtract(zU),
          NU = QU.q.Cross(oU, DU),
          IU = NU.length();
        if (IU < Math.pow(10, -8)) return new EU(FU);
        const pU = oU.lengthSquared(),
          aU = DU.lengthSquared(),
          tU = YU.lengthSquared(),
          gU = NU.lengthSquared(),
          kU = .5 * oU.length() * DU.length() * YU.length() / IU,
          GU = -.5 * aU * QU.q.Dot(oU, YU) / gU,
          BU = -.5 * tU * QU.q.Dot(oU, DU) / gU,
          ZU = -.5 * pU * QU.q.Dot(DU, YU) / gU,
          RU = UU.scale(GU).add(XU.scale(BU)).add(zU.scale(ZU)),
          PU = UU.subtract(RU).normalize(),
          WU = QU.q.Cross(NU, PU).normalize();
        if (AU) {
          const XU = 2 * Math.PI / cU;
          for (let UU = 0; UU <= 2 * Math.PI; UU += XU) FU.push(RU.add(PU.scale(kU * Math.cos(UU)).add(WU.scale(kU * Math.sin(UU)))));
          FU.push(UU)
        } else {
          const XU = 1 / cU;
          let QU, AU = 0;
          do {
            QU = RU.add(PU.scale(kU * Math.cos(AU)).add(WU.scale(kU * Math.sin(AU)))), FU.push(QU), AU += XU
          } while (!QU.equalsWithEpsilon(zU, kU * XU * 1.1));
          FU.push(zU), yU && FU.push(UU)
        }
        return new EU(FU)
      }
      constructor(UU) {
        this._length = 0, this._points = UU, this._length = this._computeLength(UU)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (UU) {
        const XU = this._points[this._points.length - 1],
          zU = this._points.slice(),
          cU = UU.getPoints();
        for (let yU = 1; yU < cU.length; yU++) zU.push(cU[yU].subtract(cU[0]).add(XU));
        return new EU(zU)
      }
      _computeLength(UU) {
        let XU = 0;
        for (let zU = 1; zU < UU.length; zU++) XU += UU[zU].subtract(UU[zU - 1]).length();
        return XU
      }
    }
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