export const id = 225;
export const ids = [225];
export const modules = {
  39956: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      d: () => XJ,
      g: () => YJ,
      k: () => jJ
    });
    var FJ, UJ = ZJ(36207),
      eJ = ZJ(36174);
    ! function(JJ) {
      JJ[JJ.CW = 0] = "CW", JJ[JJ.CCW = 1] = "CCW"
    }(FJ || (FJ = {}));
    class XJ {
      static Interpolate(JJ, cJ, ZJ, FJ, UJ) {
        if (0 === JJ) return 0;
        const eJ = 1 - 3 * FJ + 3 * cJ,
          XJ = 3 * FJ - 6 * cJ,
          AJ = 3 * cJ;
        let qJ = JJ;
        for (let jJ = 0; jJ < 5; jJ++) {
          const cJ = qJ * qJ;
          qJ -= (eJ * (cJ * qJ) + XJ * cJ + AJ * qJ - JJ) * (1 / (3 * eJ * cJ + 2 * XJ * qJ + AJ)), qJ = Math.min(1, Math.max(0, qJ))
        }
        return 3 * Math.pow(1 - qJ, 2) * qJ * ZJ + 3 * (1 - qJ) * Math.pow(qJ, 2) * UJ + Math.pow(qJ, 3)
      }
    }
    class AJ {
      constructor(JJ) {
        this._radians = JJ, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(JJ, cJ) {
        const ZJ = cJ.subtract(JJ),
          FJ = Math.atan2(ZJ.y, ZJ.x);
        return new AJ(FJ)
      }
      static BetweenTwoVectors(JJ, cJ) {
        let ZJ = JJ.lengthSquared() * cJ.lengthSquared();
        if (0 === ZJ) return new AJ(Math.PI / 2);
        ZJ = Math.sqrt(ZJ);
        let FJ = JJ.dot(cJ) / ZJ;
        FJ = (0, UJ.Clamp)(FJ, -1, 1);
        const eJ = Math.acos(FJ);
        return new AJ(eJ)
      }
      static FromRadians(JJ) {
        return new AJ(JJ)
      }
      static FromDegrees(JJ) {
        return new AJ(JJ * Math.PI / 180)
      }
    }
    class qJ {
      constructor(JJ, cJ, ZJ) {
        this.startPoint = JJ, this.midPoint = cJ, this.endPoint = ZJ;
        const FJ = Math.pow(cJ.x, 2) + Math.pow(cJ.y, 2),
          UJ = (Math.pow(JJ.x, 2) + Math.pow(JJ.y, 2) - FJ) / 2,
          XJ = (FJ - Math.pow(ZJ.x, 2) - Math.pow(ZJ.y, 2)) / 2,
          qJ = (JJ.x - cJ.x) * (cJ.y - ZJ.y) - (cJ.x - ZJ.x) * (JJ.y - cJ.y);
        this.centerPoint = new eJ.i((UJ * (cJ.y - ZJ.y) - XJ * (JJ.y - cJ.y)) / qJ, ((JJ.x - cJ.x) * XJ - (cJ.x - ZJ.x) * UJ) / qJ), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = AJ.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const jJ = this.startAngle.degrees();
        let YJ = AJ.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          hJ = AJ.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        YJ - jJ > 180 && (YJ -= 360), YJ - jJ < -180 && (YJ += 360), hJ - YJ > 180 && (hJ -= 360), hJ - YJ < -180 && (hJ += 360), this.orientation = YJ - jJ < 0 ? 0 : 1, this.angle = AJ.FromDegrees(0 === this.orientation ? jJ - hJ : hJ - jJ)
      }
    }
    class jJ {
      constructor(JJ, cJ) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new eJ.i(JJ, cJ))
      }
      addLineTo(JJ, cJ) {
        if (this.closed) return this;
        const ZJ = new eJ.i(JJ, cJ),
          FJ = this._points[this._points.length - 1];
        return this._points.push(ZJ), this._length += ZJ.subtract(FJ).length(), this
      }
      addArcTo(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const XJ = this._points[this._points.length - 1],
          AJ = new eJ.i(JJ, cJ),
          jJ = new eJ.i(ZJ, FJ),
          YJ = new qJ(XJ, AJ, jJ);
        let hJ = YJ.angle.radians() / UJ;
        0 === YJ.orientation && (hJ *= -1);
        let DJ = YJ.startAngle.radians() + hJ;
        for (let eJ = 0; eJ < UJ; eJ++) {
          const JJ = Math.cos(DJ) * YJ.radius + YJ.centerPoint.x,
            cJ = Math.sin(DJ) * YJ.radius + YJ.centerPoint.y;
          this.addLineTo(JJ, cJ), DJ += hJ
        }
        return this
      }
      addQuadraticCurveTo(JJ, cJ, ZJ, FJ) {
        let UJ = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const eJ = (JJ, cJ, ZJ, FJ) => (1 - JJ) * (1 - JJ) * cJ + 2 * JJ * (1 - JJ) * ZJ + JJ * JJ * FJ,
          XJ = this._points[this._points.length - 1];
        for (let AJ = 0; AJ <= UJ; AJ++) {
          const qJ = AJ / UJ,
            jJ = eJ(qJ, XJ.x, JJ, ZJ),
            YJ = eJ(qJ, XJ.y, cJ, FJ);
          this.addLineTo(jJ, YJ)
        }
        return this
      }
      addBezierCurveTo(JJ, cJ, ZJ, FJ, UJ, eJ) {
        let XJ = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const AJ = (JJ, cJ, ZJ, FJ, UJ) => (1 - JJ) * (1 - JJ) * (1 - JJ) * cJ + 3 * JJ * (1 - JJ) * (1 - JJ) * ZJ + 3 * JJ * JJ * (1 - JJ) * FJ + JJ * JJ * JJ * UJ,
          qJ = this._points[this._points.length - 1];
        for (let jJ = 0; jJ <= XJ; jJ++) {
          const YJ = jJ / XJ,
            hJ = AJ(YJ, qJ.x, JJ, ZJ, UJ),
            DJ = AJ(YJ, qJ.y, cJ, FJ, eJ);
          this.addLineTo(hJ, DJ)
        }
        return this
      }
      isPointInside(JJ) {
        let cJ = !1;
        const ZJ = this._points.length;
        for (let FJ = ZJ - 1, UJ = 0; UJ < ZJ; FJ = UJ++) {
          let ZJ = this._points[FJ],
            eJ = this._points[UJ],
            XJ = eJ.x - ZJ.x,
            AJ = eJ.y - ZJ.y;
          if (Math.abs(AJ) > Number.EPSILON) {
            if (AJ < 0 && (ZJ = this._points[UJ], XJ = -XJ, eJ = this._points[FJ], AJ = -AJ), JJ.y < ZJ.y || JJ.y > eJ.y) continue;
            if (JJ.y === ZJ.y && JJ.x === ZJ.x) return !0;
            {
              const FJ = AJ * (JJ.x - ZJ.x) - XJ * (JJ.y - ZJ.y);
              if (0 === FJ) return !0;
              if (FJ < 0) continue;
              cJ = !cJ
            }
          } else {
            if (JJ.y !== ZJ.y) continue;
            if (eJ.x <= JJ.x && JJ.x <= ZJ.x || ZJ.x <= JJ.x && JJ.x <= eJ.x) return !0
          }
        }
        return cJ
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let JJ = this._length;
        if (this.closed) {
          const cJ = this._points[this._points.length - 1];
          JJ += this._points[0].subtract(cJ).length()
        }
        return JJ
      }
      area() {
        const JJ = this._points.length;
        let cJ = 0;
        for (let ZJ = JJ - 1, FJ = 0; FJ < JJ; ZJ = FJ++) cJ += this._points[ZJ].x * this._points[FJ].y - this._points[FJ].x * this._points[ZJ].y;
        return .5 * cJ
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(JJ) {
        if (JJ < 0 || JJ > 1) return eJ.i.Zero();
        const cJ = JJ * this.length();
        let ZJ = 0;
        for (let FJ = 0; FJ < this._points.length; FJ++) {
          const JJ = (FJ + 1) % this._points.length,
            UJ = this._points[FJ],
            XJ = this._points[JJ].subtract(UJ),
            AJ = XJ.length() + ZJ;
          if (cJ >= ZJ && cJ <= AJ) {
            const JJ = XJ.normalize(),
              FJ = cJ - ZJ;
            return new eJ.i(UJ.x + JJ.x * FJ, UJ.y + JJ.y * FJ)
          }
          ZJ = AJ
        }
        return eJ.i.Zero()
      }
      static StartingAt(JJ, cJ) {
        return new jJ(JJ, cJ)
      }
    }
    class YJ {
      static CreateQuadraticBezier(JJ, cJ, ZJ, FJ) {
        FJ = FJ > 2 ? FJ : 3;
        const UJ = [],
          XJ = (JJ, cJ, ZJ, FJ) => (1 - JJ) * (1 - JJ) * cJ + 2 * JJ * (1 - JJ) * ZJ + JJ * JJ * FJ;
        for (let AJ = 0; AJ <= FJ; AJ++) UJ.push(new eJ.j(XJ(AJ / FJ, JJ.x, cJ.x, ZJ.x), XJ(AJ / FJ, JJ.y, cJ.y, ZJ.y), XJ(AJ / FJ, JJ.z, cJ.z, ZJ.z)));
        return new YJ(UJ)
      }
      static CreateCubicBezier(JJ, cJ, ZJ, FJ, UJ) {
        UJ = UJ > 3 ? UJ : 4;
        const XJ = [],
          AJ = (JJ, cJ, ZJ, FJ, UJ) => (1 - JJ) * (1 - JJ) * (1 - JJ) * cJ + 3 * JJ * (1 - JJ) * (1 - JJ) * ZJ + 3 * JJ * JJ * (1 - JJ) * FJ + JJ * JJ * JJ * UJ;
        for (let qJ = 0; qJ <= UJ; qJ++) XJ.push(new eJ.j(AJ(qJ / UJ, JJ.x, cJ.x, ZJ.x, FJ.x), AJ(qJ / UJ, JJ.y, cJ.y, ZJ.y, FJ.y), AJ(qJ / UJ, JJ.z, cJ.z, ZJ.z, FJ.z)));
        return new YJ(XJ)
      }
      static CreateHermiteSpline(JJ, cJ, ZJ, FJ, UJ) {
        const XJ = [],
          AJ = 1 / UJ;
        for (let qJ = 0; qJ <= UJ; qJ++) XJ.push(eJ.j.Hermite(JJ, cJ, ZJ, FJ, qJ * AJ));
        return new YJ(XJ)
      }
      static CreateCatmullRomSpline(JJ, cJ, ZJ) {
        const FJ = [],
          UJ = 1 / cJ;
        let XJ = 0;
        if (ZJ) {
          const ZJ = JJ.length;
          for (let AJ = 0; AJ < ZJ; AJ++) {
            XJ = 0;
            for (let qJ = 0; qJ < cJ; qJ++) FJ.push(eJ.j.CatmullRom(JJ[AJ % ZJ], JJ[(AJ + 1) % ZJ], JJ[(AJ + 2) % ZJ], JJ[(AJ + 3) % ZJ], XJ)), XJ += UJ
          }
          FJ.push(FJ[0])
        } else {
          const ZJ = [];
          ZJ.push(JJ[0].clone()), ZJ.push(...JJ), ZJ.push(JJ[JJ.length - 1].clone());
          let AJ = 0;
          for (; AJ < ZJ.length - 3; AJ++) {
            XJ = 0;
            for (let JJ = 0; JJ < cJ; JJ++) FJ.push(eJ.j.CatmullRom(ZJ[AJ], ZJ[AJ + 1], ZJ[AJ + 2], ZJ[AJ + 3], XJ)), XJ += UJ
          }
          AJ--, FJ.push(eJ.j.CatmullRom(ZJ[AJ], ZJ[AJ + 1], ZJ[AJ + 2], ZJ[AJ + 3], XJ))
        }
        return new YJ(FJ)
      }
      static ArcThru3Points(JJ, cJ, ZJ) {
        let FJ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          UJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          XJ = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const AJ = [],
          qJ = cJ.subtract(JJ),
          jJ = ZJ.subtract(cJ),
          hJ = JJ.subtract(ZJ),
          DJ = eJ.j.Cross(qJ, jJ),
          sJ = DJ.length();
        if (sJ < Math.pow(10, -8)) return new YJ(AJ);
        const nJ = qJ.lengthSquared(),
          GJ = jJ.lengthSquared(),
          fJ = hJ.lengthSquared(),
          xJ = DJ.lengthSquared(),
          rJ = .5 * qJ.length() * jJ.length() * hJ.length() / sJ,
          vJ = -.5 * GJ * eJ.j.Dot(qJ, hJ) / xJ,
          mJ = -.5 * fJ * eJ.j.Dot(qJ, jJ) / xJ,
          QJ = -.5 * nJ * eJ.j.Dot(jJ, hJ) / xJ,
          EJ = JJ.scale(vJ).add(cJ.scale(mJ)).add(ZJ.scale(QJ)),
          VJ = JJ.subtract(EJ).normalize(),
          KJ = eJ.j.Cross(DJ, VJ).normalize();
        if (XJ) {
          const cJ = 2 * Math.PI / FJ;
          for (let JJ = 0; JJ <= 2 * Math.PI; JJ += cJ) AJ.push(EJ.add(VJ.scale(rJ * Math.cos(JJ)).add(KJ.scale(rJ * Math.sin(JJ)))));
          AJ.push(JJ)
        } else {
          const cJ = 1 / FJ;
          let eJ, XJ = 0;
          do {
            eJ = EJ.add(VJ.scale(rJ * Math.cos(XJ)).add(KJ.scale(rJ * Math.sin(XJ)))), AJ.push(eJ), XJ += cJ
          } while (!eJ.equalsWithEpsilon(ZJ, rJ * cJ * 1.1));
          AJ.push(ZJ), UJ && AJ.push(JJ)
        }
        return new YJ(AJ)
      }
      constructor(JJ) {
        this._length = 0, this._points = JJ, this._length = this._computeLength(JJ)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (JJ) {
        const cJ = this._points[this._points.length - 1],
          ZJ = this._points.slice(),
          FJ = JJ.getPoints();
        for (let UJ = 1; UJ < FJ.length; UJ++) ZJ.push(FJ[UJ].subtract(FJ[0]).add(cJ));
        return new YJ(ZJ)
      }
      _computeLength(JJ) {
        let cJ = 0;
        for (let ZJ = 1; ZJ < JJ.length; ZJ++) cJ += JJ[ZJ].subtract(JJ[ZJ - 1]).length();
        return cJ
      }
    }
  },
  37658: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => eJ
    });
    var FJ = ZJ(37660);
    const UJ = (JJ, cJ, ZJ) => JJ ? JJ.getClassName && "Mesh" === JJ.getClassName() ? null : !JJ.getClassName || "SubMesh" !== JJ.getClassName() && "PhysicsBody" !== JJ.getClassName() ? JJ.clone ? JJ.clone() : Array.isArray(JJ) ? JJ.slice() : ZJ && "object" === typeof JJ ? {
      ...JJ
    } : null : JJ.clone(cJ) : null;
    class eJ {
      static DeepCopy(JJ, cJ, ZJ, eJ) {
        let XJ = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const AJ = function(JJ) {
          const cJ = [];
          do {
            const ZJ = Object.getOwnPropertyNames(JJ);
            for (const JJ of ZJ) - 1 === cJ.indexOf(JJ) && cJ.push(JJ)
          } while (JJ = Object.getPrototypeOf(JJ));
          return cJ
        }(JJ);
        for (const jJ of AJ) {
          if ("_" === jJ[0] && (!eJ || -1 === eJ.indexOf(jJ))) continue;
          if (jJ.endsWith("Observable")) continue;
          if (ZJ && -1 !== ZJ.indexOf(jJ)) continue;
          const AJ = JJ[jJ],
            YJ = typeof AJ;
          if ("function" !== YJ) try {
            if ("object" === YJ)
              if (AJ instanceof Uint8Array) cJ[jJ] = Uint8Array.from(AJ);
              else if (AJ instanceof Array) {
              if (cJ[jJ] = [], AJ.length > 0)
                if ("object" == typeof AJ[0])
                  for (let JJ = 0; JJ < AJ.length; JJ++) {
                    const ZJ = UJ(AJ[JJ], cJ, XJ); - 1 === cJ[jJ].indexOf(ZJ) && cJ[jJ].push(ZJ)
                  } else cJ[jJ] = AJ.slice(0)
            } else cJ[jJ] = UJ(AJ, cJ, XJ);
            else cJ[jJ] = AJ
          } catch (qJ) {
            FJ.c.Warn(qJ.message)
          }
        }
      }
    }
  },
  37660: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      c: () => FJ
    });
    class FJ {
      static _CheckLimit(JJ, cJ) {
        let ZJ = FJ._LogLimitOutputs[JJ];
        return ZJ ? ZJ.current++ : (ZJ = {
          limit: cJ,
          current: 1
        }, FJ._LogLimitOutputs[JJ] = ZJ), ZJ.current <= ZJ.limit
      }
      static _GenerateLimitMessage(JJ) {
        let cJ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZJ = FJ._LogLimitOutputs[JJ];
        if (!ZJ || !FJ.MessageLimitReached) return;
        const UJ = this._Levels[cJ];
        ZJ.current === ZJ.limit && FJ[UJ.name](FJ.MessageLimitReached.replace(/%LIMIT%/g, "" + ZJ.limit).replace(/%TYPE%/g, UJ.name ?? ""))
      }
      static _AddLogEntry(JJ) {
        FJ._LogCache = JJ + FJ._LogCache, FJ.OnNewCacheEntry && FJ.OnNewCacheEntry(JJ)
      }
      static _FormatMessage(JJ) {
        const cJ = JJ => JJ < 10 ? "0" + JJ : "" + JJ,
          ZJ = new Date;
        return "[" + cJ(ZJ.getHours()) + ":" + cJ(ZJ.getMinutes()) + ":" + cJ(ZJ.getSeconds()) + "]: " + JJ
      }
      static _LogDisabled(JJ, cJ) {}
      static _LogEnabled() {
        let JJ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cJ = arguments.length > 1 ? arguments[1] : void 0,
          ZJ = arguments.length > 2 ? arguments[2] : void 0;
        const UJ = Array.isArray(cJ) ? cJ[0] : cJ;
        if (void 0 !== ZJ && !FJ._CheckLimit(UJ, ZJ)) return;
        const eJ = FJ._FormatMessage(UJ),
          XJ = this._Levels[JJ],
          AJ = Array.isArray(cJ) ? cJ.slice(1) : [];
        XJ.logFunc && XJ.logFunc("BJS - " + eJ, ...AJ);
        const qJ = `<div style='color:${XJ.color}'>${eJ}</div><br>`;
        FJ._AddLogEntry(qJ), FJ._GenerateLimitMessage(UJ, JJ)
      }
      static get LogCache() {
        return FJ._LogCache
      }
      static ClearLogCache() {
        FJ._LogCache = "", FJ._LogLimitOutputs = {}, FJ.errorsCount = 0
      }
      static set LogLevels(JJ) {
        FJ.Log = FJ._LogDisabled, FJ.Warn = FJ._LogDisabled, FJ.Error = FJ._LogDisabled;
        const cJ = [FJ.MessageLogLevel, FJ.WarningLogLevel, FJ.ErrorLogLevel];
        for (const ZJ of cJ)
          if ((JJ & ZJ) === ZJ) {
            const JJ = this._Levels[ZJ];
            FJ[JJ.name] = FJ._LogEnabled.bind(FJ, ZJ)
          }
      }
    }
    FJ.NoneLogLevel = 0, FJ.MessageLogLevel = 1, FJ.WarningLogLevel = 2, FJ.ErrorLogLevel = 4, FJ.AllLogLevel = 7, FJ.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", FJ._LogCache = "", FJ._LogLimitOutputs = {}, FJ._Levels = [{}, {
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
    }], FJ.errorsCount = 0, FJ.Log = FJ._LogEnabled.bind(FJ, FJ.MessageLogLevel), FJ.Warn = FJ._LogEnabled.bind(FJ, FJ.WarningLogLevel), FJ.Error = FJ._LogEnabled.bind(FJ, FJ.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);