export const id = 278;
export const ids = [278];
export const modules = {
  42629: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => ZR,
      f: () => VR,
      j: () => fR
    });
    var yR, tR = GR(38239),
      uR = GR(38204);
    ! function(RR) {
      RR[RR.CW = 0] = "CW", RR[RR.CCW = 1] = "CCW"
    }(yR || (yR = {}));
    class ZR {
      static Interpolate(RR, JR, GR, yR, tR) {
        if (0 === RR) return 0;
        const uR = 1 - 3 * yR + 3 * JR,
          ZR = 3 * yR - 6 * JR,
          qR = 3 * JR;
        let iR = RR;
        for (let fR = 0; fR < 5; fR++) {
          const JR = iR * iR;
          iR -= (uR * (JR * iR) + ZR * JR + qR * iR - RR) * (1 / (3 * uR * JR + 2 * ZR * iR + qR)), iR = Math.min(1, Math.max(0, iR))
        }
        return 3 * Math.pow(1 - iR, 2) * iR * GR + 3 * (1 - iR) * Math.pow(iR, 2) * tR + Math.pow(iR, 3)
      }
    }
    class qR {
      constructor(RR) {
        this._radians = RR, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(RR, JR) {
        const GR = JR.subtract(RR),
          yR = Math.atan2(GR.y, GR.x);
        return new qR(yR)
      }
      static BetweenTwoVectors(RR, JR) {
        let GR = RR.lengthSquared() * JR.lengthSquared();
        if (0 === GR) return new qR(Math.PI / 2);
        GR = Math.sqrt(GR);
        let yR = RR.dot(JR) / GR;
        yR = (0, tR.Clamp)(yR, -1, 1);
        const uR = Math.acos(yR);
        return new qR(uR)
      }
      static FromRadians(RR) {
        return new qR(RR)
      }
      static FromDegrees(RR) {
        return new qR(RR * Math.PI / 180)
      }
    }
    class iR {
      constructor(RR, JR, GR) {
        this.startPoint = RR, this.midPoint = JR, this.endPoint = GR;
        const yR = Math.pow(JR.x, 2) + Math.pow(JR.y, 2),
          tR = (Math.pow(RR.x, 2) + Math.pow(RR.y, 2) - yR) / 2,
          ZR = (yR - Math.pow(GR.x, 2) - Math.pow(GR.y, 2)) / 2,
          iR = (RR.x - JR.x) * (JR.y - GR.y) - (JR.x - GR.x) * (RR.y - JR.y);
        this.centerPoint = new uR.n((tR * (JR.y - GR.y) - ZR * (RR.y - JR.y)) / iR, ((RR.x - JR.x) * ZR - (JR.x - GR.x) * tR) / iR), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = qR.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const fR = this.startAngle.degrees();
        let VR = qR.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          KR = qR.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        VR - fR > 180 && (VR -= 360), VR - fR < -180 && (VR += 360), KR - VR > 180 && (KR -= 360), KR - VR < -180 && (KR += 360), this.orientation = VR - fR < 0 ? 0 : 1, this.angle = qR.FromDegrees(0 === this.orientation ? fR - KR : KR - fR)
      }
    }
    class fR {
      constructor(RR, JR) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new uR.n(RR, JR))
      }
      addLineTo(RR, JR) {
        if (this.closed) return this;
        const GR = new uR.n(RR, JR),
          yR = this._points[this._points.length - 1];
        return this._points.push(GR), this._length += GR.subtract(yR).length(), this
      }
      addArcTo(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const ZR = this._points[this._points.length - 1],
          qR = new uR.n(RR, JR),
          fR = new uR.n(GR, yR),
          VR = new iR(ZR, qR, fR);
        let KR = VR.angle.radians() / tR;
        0 === VR.orientation && (KR *= -1);
        let wR = VR.startAngle.radians() + KR;
        for (let uR = 0; uR < tR; uR++) {
          const RR = Math.cos(wR) * VR.radius + VR.centerPoint.x,
            JR = Math.sin(wR) * VR.radius + VR.centerPoint.y;
          this.addLineTo(RR, JR), wR += KR
        }
        return this
      }
      addQuadraticCurveTo(RR, JR, GR, yR) {
        let tR = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const uR = (RR, JR, GR, yR) => (1 - RR) * (1 - RR) * JR + 2 * RR * (1 - RR) * GR + RR * RR * yR,
          ZR = this._points[this._points.length - 1];
        for (let qR = 0; qR <= tR; qR++) {
          const iR = qR / tR,
            fR = uR(iR, ZR.x, RR, GR),
            VR = uR(iR, ZR.y, JR, yR);
          this.addLineTo(fR, VR)
        }
        return this
      }
      addBezierCurveTo(RR, JR, GR, yR, tR, uR) {
        let ZR = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const qR = (RR, JR, GR, yR, tR) => (1 - RR) * (1 - RR) * (1 - RR) * JR + 3 * RR * (1 - RR) * (1 - RR) * GR + 3 * RR * RR * (1 - RR) * yR + RR * RR * RR * tR,
          iR = this._points[this._points.length - 1];
        for (let fR = 0; fR <= ZR; fR++) {
          const VR = fR / ZR,
            KR = qR(VR, iR.x, RR, GR, tR),
            wR = qR(VR, iR.y, JR, yR, uR);
          this.addLineTo(KR, wR)
        }
        return this
      }
      isPointInside(RR) {
        let JR = !1;
        const GR = this._points.length;
        for (let yR = GR - 1, tR = 0; tR < GR; yR = tR++) {
          let GR = this._points[yR],
            uR = this._points[tR],
            ZR = uR.x - GR.x,
            qR = uR.y - GR.y;
          if (Math.abs(qR) > Number.EPSILON) {
            if (qR < 0 && (GR = this._points[tR], ZR = -ZR, uR = this._points[yR], qR = -qR), RR.y < GR.y || RR.y > uR.y) continue;
            if (RR.y === GR.y && RR.x === GR.x) return !0;
            {
              const yR = qR * (RR.x - GR.x) - ZR * (RR.y - GR.y);
              if (0 === yR) return !0;
              if (yR < 0) continue;
              JR = !JR
            }
          } else {
            if (RR.y !== GR.y) continue;
            if (uR.x <= RR.x && RR.x <= GR.x || GR.x <= RR.x && RR.x <= uR.x) return !0
          }
        }
        return JR
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let RR = this._length;
        if (this.closed) {
          const JR = this._points[this._points.length - 1];
          RR += this._points[0].subtract(JR).length()
        }
        return RR
      }
      area() {
        const RR = this._points.length;
        let JR = 0;
        for (let GR = RR - 1, yR = 0; yR < RR; GR = yR++) JR += this._points[GR].x * this._points[yR].y - this._points[yR].x * this._points[GR].y;
        return .5 * JR
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(RR) {
        if (RR < 0 || RR > 1) return uR.n.Zero();
        const JR = RR * this.length();
        let GR = 0;
        for (let yR = 0; yR < this._points.length; yR++) {
          const RR = (yR + 1) % this._points.length,
            tR = this._points[yR],
            ZR = this._points[RR].subtract(tR),
            qR = ZR.length() + GR;
          if (JR >= GR && JR <= qR) {
            const RR = ZR.normalize(),
              yR = JR - GR;
            return new uR.n(tR.x + RR.x * yR, tR.y + RR.y * yR)
          }
          GR = qR
        }
        return uR.n.Zero()
      }
      static StartingAt(RR, JR) {
        return new fR(RR, JR)
      }
    }
    class VR {
      static CreateQuadraticBezier(RR, JR, GR, yR) {
        yR = yR > 2 ? yR : 3;
        const tR = [],
          ZR = (RR, JR, GR, yR) => (1 - RR) * (1 - RR) * JR + 2 * RR * (1 - RR) * GR + RR * RR * yR;
        for (let qR = 0; qR <= yR; qR++) tR.push(new uR.r(ZR(qR / yR, RR.x, JR.x, GR.x), ZR(qR / yR, RR.y, JR.y, GR.y), ZR(qR / yR, RR.z, JR.z, GR.z)));
        return new VR(tR)
      }
      static CreateCubicBezier(RR, JR, GR, yR, tR) {
        tR = tR > 3 ? tR : 4;
        const ZR = [],
          qR = (RR, JR, GR, yR, tR) => (1 - RR) * (1 - RR) * (1 - RR) * JR + 3 * RR * (1 - RR) * (1 - RR) * GR + 3 * RR * RR * (1 - RR) * yR + RR * RR * RR * tR;
        for (let iR = 0; iR <= tR; iR++) ZR.push(new uR.r(qR(iR / tR, RR.x, JR.x, GR.x, yR.x), qR(iR / tR, RR.y, JR.y, GR.y, yR.y), qR(iR / tR, RR.z, JR.z, GR.z, yR.z)));
        return new VR(ZR)
      }
      static CreateHermiteSpline(RR, JR, GR, yR, tR) {
        const ZR = [],
          qR = 1 / tR;
        for (let iR = 0; iR <= tR; iR++) ZR.push(uR.r.Hermite(RR, JR, GR, yR, iR * qR));
        return new VR(ZR)
      }
      static CreateCatmullRomSpline(RR, JR, GR) {
        const yR = [],
          tR = 1 / JR;
        let ZR = 0;
        if (GR) {
          const GR = RR.length;
          for (let qR = 0; qR < GR; qR++) {
            ZR = 0;
            for (let iR = 0; iR < JR; iR++) yR.push(uR.r.CatmullRom(RR[qR % GR], RR[(qR + 1) % GR], RR[(qR + 2) % GR], RR[(qR + 3) % GR], ZR)), ZR += tR
          }
          yR.push(yR[0])
        } else {
          const GR = [];
          GR.push(RR[0].clone()), GR.push(...RR), GR.push(RR[RR.length - 1].clone());
          let qR = 0;
          for (; qR < GR.length - 3; qR++) {
            ZR = 0;
            for (let RR = 0; RR < JR; RR++) yR.push(uR.r.CatmullRom(GR[qR], GR[qR + 1], GR[qR + 2], GR[qR + 3], ZR)), ZR += tR
          }
          qR--, yR.push(uR.r.CatmullRom(GR[qR], GR[qR + 1], GR[qR + 2], GR[qR + 3], ZR))
        }
        return new VR(yR)
      }
      static ArcThru3Points(RR, JR, GR) {
        let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          tR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          ZR = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const qR = [],
          iR = JR.subtract(RR),
          fR = GR.subtract(JR),
          KR = RR.subtract(GR),
          wR = uR.r.Cross(iR, fR),
          rR = wR.length();
        if (rR < Math.pow(10, -8)) return new VR(qR);
        const eR = iR.lengthSquared(),
          aR = fR.lengthSquared(),
          LR = KR.lengthSquared(),
          nR = wR.lengthSquared(),
          UR = .5 * iR.length() * fR.length() * KR.length() / rR,
          WR = -.5 * aR * uR.r.Dot(iR, KR) / nR,
          AR = -.5 * LR * uR.r.Dot(iR, fR) / nR,
          CR = -.5 * eR * uR.r.Dot(fR, KR) / nR,
          XR = RR.scale(WR).add(JR.scale(AR)).add(GR.scale(CR)),
          MR = RR.subtract(XR).normalize(),
          BR = uR.r.Cross(wR, MR).normalize();
        if (ZR) {
          const JR = 2 * Math.PI / yR;
          for (let RR = 0; RR <= 2 * Math.PI; RR += JR) qR.push(XR.add(MR.scale(UR * Math.cos(RR)).add(BR.scale(UR * Math.sin(RR)))));
          qR.push(RR)
        } else {
          const JR = 1 / yR;
          let uR, ZR = 0;
          do {
            uR = XR.add(MR.scale(UR * Math.cos(ZR)).add(BR.scale(UR * Math.sin(ZR)))), qR.push(uR), ZR += JR
          } while (!uR.equalsWithEpsilon(GR, UR * JR * 1.1));
          qR.push(GR), tR && qR.push(RR)
        }
        return new VR(qR)
      }
      constructor(RR) {
        this._length = 0, this._points = RR, this._length = this._computeLength(RR)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (RR) {
        const JR = this._points[this._points.length - 1],
          GR = this._points.slice(),
          yR = RR.getPoints();
        for (let tR = 1; tR < yR.length; tR++) GR.push(yR[tR].subtract(yR[0]).add(JR));
        return new VR(GR)
      }
      _computeLength(RR) {
        let JR = 0;
        for (let GR = 1; GR < RR.length; GR++) JR += RR[GR].subtract(RR[GR - 1]).length();
        return JR
      }
    }
  },
  39912: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => uR
    });
    var yR = GR(39914);
    const tR = (RR, JR, GR) => RR ? RR.getClassName && "Mesh" === RR.getClassName() ? null : !RR.getClassName || "SubMesh" !== RR.getClassName() && "PhysicsBody" !== RR.getClassName() ? RR.clone ? RR.clone() : Array.isArray(RR) ? RR.slice() : GR && "object" === typeof RR ? {
      ...RR
    } : null : RR.clone(JR) : null;
    class uR {
      static DeepCopy(RR, JR, GR, uR) {
        let ZR = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const qR = function(RR) {
          const JR = [];
          do {
            const GR = Object.getOwnPropertyNames(RR);
            for (const RR of GR) - 1 === JR.indexOf(RR) && JR.push(RR)
          } while (RR = Object.getPrototypeOf(RR));
          return JR
        }(RR);
        for (const fR of qR) {
          if ("_" === fR[0] && (!uR || -1 === uR.indexOf(fR))) continue;
          if (fR.endsWith("Observable")) continue;
          if (GR && -1 !== GR.indexOf(fR)) continue;
          const qR = RR[fR],
            VR = typeof qR;
          if ("function" !== VR) try {
            if ("object" === VR)
              if (qR instanceof Uint8Array) JR[fR] = Uint8Array.from(qR);
              else if (qR instanceof Array) {
              if (JR[fR] = [], qR.length > 0)
                if ("object" == typeof qR[0])
                  for (let RR = 0; RR < qR.length; RR++) {
                    const GR = tR(qR[RR], JR, ZR); - 1 === JR[fR].indexOf(GR) && JR[fR].push(GR)
                  } else JR[fR] = qR.slice(0)
            } else JR[fR] = tR(qR, JR, ZR);
            else JR[fR] = qR
          } catch (iR) {
            yR.c.Warn(iR.message)
          }
        }
      }
    }
  },
  39914: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    class yR {
      static _CheckLimit(RR, JR) {
        let GR = yR._LogLimitOutputs[RR];
        return GR ? GR.current++ : (GR = {
          limit: JR,
          current: 1
        }, yR._LogLimitOutputs[RR] = GR), GR.current <= GR.limit
      }
      static _GenerateLimitMessage(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const GR = yR._LogLimitOutputs[RR];
        if (!GR || !yR.MessageLimitReached) return;
        const tR = this._Levels[JR];
        GR.current === GR.limit && yR[tR.name](yR.MessageLimitReached.replace(/%LIMIT%/g, "" + GR.limit).replace(/%TYPE%/g, tR.name ?? ""))
      }
      static _AddLogEntry(RR) {
        yR._LogCache = RR + yR._LogCache, yR.OnNewCacheEntry && yR.OnNewCacheEntry(RR)
      }
      static _FormatMessage(RR) {
        const JR = RR => RR < 10 ? "0" + RR : "" + RR,
          GR = new Date;
        return "[" + JR(GR.getHours()) + ":" + JR(GR.getMinutes()) + ":" + JR(GR.getSeconds()) + "]: " + RR
      }
      static _LogDisabled(RR, JR) {}
      static _LogEnabled() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          JR = arguments.length > 1 ? arguments[1] : void 0,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        const tR = Array.isArray(JR) ? JR[0] : JR;
        if (void 0 !== GR && !yR._CheckLimit(tR, GR)) return;
        const uR = yR._FormatMessage(tR),
          ZR = this._Levels[RR],
          qR = Array.isArray(JR) ? JR.slice(1) : [];
        ZR.logFunc && ZR.logFunc("BJS - " + uR, ...qR);
        const iR = `<div style='color:${ZR.color}'>${uR}</div><br>`;
        yR._AddLogEntry(iR), yR._GenerateLimitMessage(tR, RR)
      }
      static get LogCache() {
        return yR._LogCache
      }
      static ClearLogCache() {
        yR._LogCache = "", yR._LogLimitOutputs = {}, yR.errorsCount = 0
      }
      static set LogLevels(RR) {
        yR.Log = yR._LogDisabled, yR.Warn = yR._LogDisabled, yR.Error = yR._LogDisabled;
        const JR = [yR.MessageLogLevel, yR.WarningLogLevel, yR.ErrorLogLevel];
        for (const GR of JR)
          if ((RR & GR) === GR) {
            const RR = this._Levels[GR];
            yR[RR.name] = yR._LogEnabled.bind(yR, GR)
          }
      }
    }
    yR.NoneLogLevel = 0, yR.MessageLogLevel = 1, yR.WarningLogLevel = 2, yR.ErrorLogLevel = 4, yR.AllLogLevel = 7, yR.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", yR._LogCache = "", yR._LogLimitOutputs = {}, yR._Levels = [{}, {
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
    }], yR.errorsCount = 0, yR.Log = yR._LogEnabled.bind(yR, yR.MessageLogLevel), yR.Warn = yR._LogEnabled.bind(yR, yR.WarningLogLevel), yR.Error = yR._LogEnabled.bind(yR, yR.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);