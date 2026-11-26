export const id = 269;
export const ids = [269];
export const modules = {
  42426: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => yV,
      f: () => wV,
      j: () => nV
    });
    var JV, YV = xV(38303),
      UV = xV(38269);
    ! function(VV) {
      VV[VV.CW = 0] = "CW", VV[VV.CCW = 1] = "CCW"
    }(JV || (JV = {}));
    class yV {
      static Interpolate(VV, eV, xV, JV, YV) {
        if (0 === VV) return 0;
        const UV = 1 - 3 * JV + 3 * eV,
          yV = 3 * JV - 6 * eV,
          pV = 3 * eV;
        let QV = VV;
        for (let nV = 0; nV < 5; nV++) {
          const eV = QV * QV;
          QV -= (UV * (eV * QV) + yV * eV + pV * QV - VV) * (1 / (3 * UV * eV + 2 * yV * QV + pV)), QV = Math.min(1, Math.max(0, QV))
        }
        return 3 * Math.pow(1 - QV, 2) * QV * xV + 3 * (1 - QV) * Math.pow(QV, 2) * YV + Math.pow(QV, 3)
      }
    }
    class pV {
      constructor(VV) {
        this._radians = VV, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(VV, eV) {
        const xV = eV.subtract(VV),
          JV = Math.atan2(xV.y, xV.x);
        return new pV(JV)
      }
      static BetweenTwoVectors(VV, eV) {
        let xV = VV.lengthSquared() * eV.lengthSquared();
        if (0 === xV) return new pV(Math.PI / 2);
        xV = Math.sqrt(xV);
        let JV = VV.dot(eV) / xV;
        JV = (0, YV.Clamp)(JV, -1, 1);
        const UV = Math.acos(JV);
        return new pV(UV)
      }
      static FromRadians(VV) {
        return new pV(VV)
      }
      static FromDegrees(VV) {
        return new pV(VV * Math.PI / 180)
      }
    }
    class QV {
      constructor(VV, eV, xV) {
        this.startPoint = VV, this.midPoint = eV, this.endPoint = xV;
        const JV = Math.pow(eV.x, 2) + Math.pow(eV.y, 2),
          YV = (Math.pow(VV.x, 2) + Math.pow(VV.y, 2) - JV) / 2,
          yV = (JV - Math.pow(xV.x, 2) - Math.pow(xV.y, 2)) / 2,
          QV = (VV.x - eV.x) * (eV.y - xV.y) - (eV.x - xV.x) * (VV.y - eV.y);
        this.centerPoint = new UV.n((YV * (eV.y - xV.y) - yV * (VV.y - eV.y)) / QV, ((VV.x - eV.x) * yV - (eV.x - xV.x) * YV) / QV), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = pV.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const nV = this.startAngle.degrees();
        let wV = pV.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          ZV = pV.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        wV - nV > 180 && (wV -= 360), wV - nV < -180 && (wV += 360), ZV - wV > 180 && (ZV -= 360), ZV - wV < -180 && (ZV += 360), this.orientation = wV - nV < 0 ? 0 : 1, this.angle = pV.FromDegrees(0 === this.orientation ? nV - ZV : ZV - nV)
      }
    }
    class nV {
      constructor(VV, eV) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new UV.n(VV, eV))
      }
      addLineTo(VV, eV) {
        if (this.closed) return this;
        const xV = new UV.n(VV, eV),
          JV = this._points[this._points.length - 1];
        return this._points.push(xV), this._length += xV.subtract(JV).length(), this
      }
      addArcTo(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const yV = this._points[this._points.length - 1],
          pV = new UV.n(VV, eV),
          nV = new UV.n(xV, JV),
          wV = new QV(yV, pV, nV);
        let ZV = wV.angle.radians() / YV;
        0 === wV.orientation && (ZV *= -1);
        let vV = wV.startAngle.radians() + ZV;
        for (let UV = 0; UV < YV; UV++) {
          const VV = Math.cos(vV) * wV.radius + wV.centerPoint.x,
            eV = Math.sin(vV) * wV.radius + wV.centerPoint.y;
          this.addLineTo(VV, eV), vV += ZV
        }
        return this
      }
      addQuadraticCurveTo(VV, eV, xV, JV) {
        let YV = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const UV = (VV, eV, xV, JV) => (1 - VV) * (1 - VV) * eV + 2 * VV * (1 - VV) * xV + VV * VV * JV,
          yV = this._points[this._points.length - 1];
        for (let pV = 0; pV <= YV; pV++) {
          const QV = pV / YV,
            nV = UV(QV, yV.x, VV, xV),
            wV = UV(QV, yV.y, eV, JV);
          this.addLineTo(nV, wV)
        }
        return this
      }
      addBezierCurveTo(VV, eV, xV, JV, YV, UV) {
        let yV = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const pV = (VV, eV, xV, JV, YV) => (1 - VV) * (1 - VV) * (1 - VV) * eV + 3 * VV * (1 - VV) * (1 - VV) * xV + 3 * VV * VV * (1 - VV) * JV + VV * VV * VV * YV,
          QV = this._points[this._points.length - 1];
        for (let nV = 0; nV <= yV; nV++) {
          const wV = nV / yV,
            ZV = pV(wV, QV.x, VV, xV, YV),
            vV = pV(wV, QV.y, eV, JV, UV);
          this.addLineTo(ZV, vV)
        }
        return this
      }
      isPointInside(VV) {
        let eV = !1;
        const xV = this._points.length;
        for (let JV = xV - 1, YV = 0; YV < xV; JV = YV++) {
          let xV = this._points[JV],
            UV = this._points[YV],
            yV = UV.x - xV.x,
            pV = UV.y - xV.y;
          if (Math.abs(pV) > Number.EPSILON) {
            if (pV < 0 && (xV = this._points[YV], yV = -yV, UV = this._points[JV], pV = -pV), VV.y < xV.y || VV.y > UV.y) continue;
            if (VV.y === xV.y && VV.x === xV.x) return !0;
            {
              const JV = pV * (VV.x - xV.x) - yV * (VV.y - xV.y);
              if (0 === JV) return !0;
              if (JV < 0) continue;
              eV = !eV
            }
          } else {
            if (VV.y !== xV.y) continue;
            if (UV.x <= VV.x && VV.x <= xV.x || xV.x <= VV.x && VV.x <= UV.x) return !0
          }
        }
        return eV
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let VV = this._length;
        if (this.closed) {
          const eV = this._points[this._points.length - 1];
          VV += this._points[0].subtract(eV).length()
        }
        return VV
      }
      area() {
        const VV = this._points.length;
        let eV = 0;
        for (let xV = VV - 1, JV = 0; JV < VV; xV = JV++) eV += this._points[xV].x * this._points[JV].y - this._points[JV].x * this._points[xV].y;
        return .5 * eV
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(VV) {
        if (VV < 0 || VV > 1) return UV.n.Zero();
        const eV = VV * this.length();
        let xV = 0;
        for (let JV = 0; JV < this._points.length; JV++) {
          const VV = (JV + 1) % this._points.length,
            YV = this._points[JV],
            yV = this._points[VV].subtract(YV),
            pV = yV.length() + xV;
          if (eV >= xV && eV <= pV) {
            const VV = yV.normalize(),
              JV = eV - xV;
            return new UV.n(YV.x + VV.x * JV, YV.y + VV.y * JV)
          }
          xV = pV
        }
        return UV.n.Zero()
      }
      static StartingAt(VV, eV) {
        return new nV(VV, eV)
      }
    }
    class wV {
      static CreateQuadraticBezier(VV, eV, xV, JV) {
        JV = JV > 2 ? JV : 3;
        const YV = [],
          yV = (VV, eV, xV, JV) => (1 - VV) * (1 - VV) * eV + 2 * VV * (1 - VV) * xV + VV * VV * JV;
        for (let pV = 0; pV <= JV; pV++) YV.push(new UV.o(yV(pV / JV, VV.x, eV.x, xV.x), yV(pV / JV, VV.y, eV.y, xV.y), yV(pV / JV, VV.z, eV.z, xV.z)));
        return new wV(YV)
      }
      static CreateCubicBezier(VV, eV, xV, JV, YV) {
        YV = YV > 3 ? YV : 4;
        const yV = [],
          pV = (VV, eV, xV, JV, YV) => (1 - VV) * (1 - VV) * (1 - VV) * eV + 3 * VV * (1 - VV) * (1 - VV) * xV + 3 * VV * VV * (1 - VV) * JV + VV * VV * VV * YV;
        for (let QV = 0; QV <= YV; QV++) yV.push(new UV.o(pV(QV / YV, VV.x, eV.x, xV.x, JV.x), pV(QV / YV, VV.y, eV.y, xV.y, JV.y), pV(QV / YV, VV.z, eV.z, xV.z, JV.z)));
        return new wV(yV)
      }
      static CreateHermiteSpline(VV, eV, xV, JV, YV) {
        const yV = [],
          pV = 1 / YV;
        for (let QV = 0; QV <= YV; QV++) yV.push(UV.o.Hermite(VV, eV, xV, JV, QV * pV));
        return new wV(yV)
      }
      static CreateCatmullRomSpline(VV, eV, xV) {
        const JV = [],
          YV = 1 / eV;
        let yV = 0;
        if (xV) {
          const xV = VV.length;
          for (let pV = 0; pV < xV; pV++) {
            yV = 0;
            for (let QV = 0; QV < eV; QV++) JV.push(UV.o.CatmullRom(VV[pV % xV], VV[(pV + 1) % xV], VV[(pV + 2) % xV], VV[(pV + 3) % xV], yV)), yV += YV
          }
          JV.push(JV[0])
        } else {
          const xV = [];
          xV.push(VV[0].clone()), xV.push(...VV), xV.push(VV[VV.length - 1].clone());
          let pV = 0;
          for (; pV < xV.length - 3; pV++) {
            yV = 0;
            for (let VV = 0; VV < eV; VV++) JV.push(UV.o.CatmullRom(xV[pV], xV[pV + 1], xV[pV + 2], xV[pV + 3], yV)), yV += YV
          }
          pV--, JV.push(UV.o.CatmullRom(xV[pV], xV[pV + 1], xV[pV + 2], xV[pV + 3], yV))
        }
        return new wV(JV)
      }
      static ArcThru3Points(VV, eV, xV) {
        let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          YV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          yV = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const pV = [],
          QV = eV.subtract(VV),
          nV = xV.subtract(eV),
          ZV = VV.subtract(xV),
          vV = UV.o.Cross(QV, nV),
          rV = vV.length();
        if (rV < Math.pow(10, -8)) return new wV(pV);
        const kV = QV.lengthSquared(),
          bV = nV.lengthSquared(),
          EV = ZV.lengthSquared(),
          BV = vV.lengthSquared(),
          jV = .5 * QV.length() * nV.length() * ZV.length() / rV,
          qV = -.5 * bV * UV.o.Dot(QV, ZV) / BV,
          tV = -.5 * EV * UV.o.Dot(QV, nV) / BV,
          FV = -.5 * kV * UV.o.Dot(nV, ZV) / BV,
          TV = VV.scale(qV).add(eV.scale(tV)).add(xV.scale(FV)),
          PV = VV.subtract(TV).normalize(),
          AV = UV.o.Cross(vV, PV).normalize();
        if (yV) {
          const eV = 2 * Math.PI / JV;
          for (let VV = 0; VV <= 2 * Math.PI; VV += eV) pV.push(TV.add(PV.scale(jV * Math.cos(VV)).add(AV.scale(jV * Math.sin(VV)))));
          pV.push(VV)
        } else {
          const eV = 1 / JV;
          let UV, yV = 0;
          do {
            UV = TV.add(PV.scale(jV * Math.cos(yV)).add(AV.scale(jV * Math.sin(yV)))), pV.push(UV), yV += eV
          } while (!UV.equalsWithEpsilon(xV, jV * eV * 1.1));
          pV.push(xV), YV && pV.push(VV)
        }
        return new wV(pV)
      }
      constructor(VV) {
        this._length = 0, this._points = VV, this._length = this._computeLength(VV)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (VV) {
        const eV = this._points[this._points.length - 1],
          xV = this._points.slice(),
          JV = VV.getPoints();
        for (let YV = 1; YV < JV.length; YV++) xV.push(JV[YV].subtract(JV[0]).add(eV));
        return new wV(xV)
      }
      _computeLength(VV) {
        let eV = 0;
        for (let xV = 1; xV < VV.length; xV++) eV += VV[xV].subtract(VV[xV - 1]).length();
        return eV
      }
    }
  },
  39867: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => UV
    });
    var JV = xV(39870);
    const YV = (VV, eV, xV) => VV ? VV.getClassName && "Mesh" === VV.getClassName() ? null : !VV.getClassName || "SubMesh" !== VV.getClassName() && "PhysicsBody" !== VV.getClassName() ? VV.clone ? VV.clone() : Array.isArray(VV) ? VV.slice() : xV && "object" === typeof VV ? {
      ...VV
    } : null : VV.clone(eV) : null;
    class UV {
      static DeepCopy(VV, eV, xV, UV) {
        let yV = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const pV = function(VV) {
          const eV = [];
          do {
            const xV = Object.getOwnPropertyNames(VV);
            for (const VV of xV) - 1 === eV.indexOf(VV) && eV.push(VV)
          } while (VV = Object.getPrototypeOf(VV));
          return eV
        }(VV);
        for (const nV of pV) {
          if ("_" === nV[0] && (!UV || -1 === UV.indexOf(nV))) continue;
          if (nV.endsWith("Observable")) continue;
          if (xV && -1 !== xV.indexOf(nV)) continue;
          const pV = VV[nV],
            wV = typeof pV;
          if ("function" !== wV) try {
            if ("object" === wV)
              if (pV instanceof Uint8Array) eV[nV] = Uint8Array.from(pV);
              else if (pV instanceof Array) {
              if (eV[nV] = [], pV.length > 0)
                if ("object" == typeof pV[0])
                  for (let VV = 0; VV < pV.length; VV++) {
                    const xV = YV(pV[VV], eV, yV); - 1 === eV[nV].indexOf(xV) && eV[nV].push(xV)
                  } else eV[nV] = pV.slice(0)
            } else eV[nV] = YV(pV, eV, yV);
            else eV[nV] = pV
          } catch (QV) {
            JV.b.Warn(QV.message)
          }
        }
      }
    }
  },
  39870: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => JV
    });
    class JV {
      static _CheckLimit(VV, eV) {
        let xV = JV._LogLimitOutputs[VV];
        return xV ? xV.current++ : (xV = {
          limit: eV,
          current: 1
        }, JV._LogLimitOutputs[VV] = xV), xV.current <= xV.limit
      }
      static _GenerateLimitMessage(VV) {
        let eV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const xV = JV._LogLimitOutputs[VV];
        if (!xV || !JV.MessageLimitReached) return;
        const YV = this._Levels[eV];
        xV.current === xV.limit && JV[YV.name](JV.MessageLimitReached.replace(/%LIMIT%/g, "" + xV.limit).replace(/%TYPE%/g, YV.name ?? ""))
      }
      static _AddLogEntry(VV) {
        JV._LogCache = VV + JV._LogCache, JV.OnNewCacheEntry && JV.OnNewCacheEntry(VV)
      }
      static _FormatMessage(VV) {
        const eV = VV => VV < 10 ? "0" + VV : "" + VV,
          xV = new Date;
        return "[" + eV(xV.getHours()) + ":" + eV(xV.getMinutes()) + ":" + eV(xV.getSeconds()) + "]: " + VV
      }
      static _LogDisabled(VV, eV) {}
      static _LogEnabled() {
        let VV = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          eV = arguments.length > 1 ? arguments[1] : void 0,
          xV = arguments.length > 2 ? arguments[2] : void 0;
        const YV = Array.isArray(eV) ? eV[0] : eV;
        if (void 0 !== xV && !JV._CheckLimit(YV, xV)) return;
        const UV = JV._FormatMessage(YV),
          yV = this._Levels[VV],
          pV = Array.isArray(eV) ? eV.slice(1) : [];
        yV.logFunc && yV.logFunc("BJS - " + UV, ...pV);
        const QV = `<div style='color:${yV.color}'>${UV}</div><br>`;
        JV._AddLogEntry(QV), JV._GenerateLimitMessage(YV, VV)
      }
      static get LogCache() {
        return JV._LogCache
      }
      static ClearLogCache() {
        JV._LogCache = "", JV._LogLimitOutputs = {}, JV.errorsCount = 0
      }
      static set LogLevels(VV) {
        JV.Log = JV._LogDisabled, JV.Warn = JV._LogDisabled, JV.Error = JV._LogDisabled;
        const eV = [JV.MessageLogLevel, JV.WarningLogLevel, JV.ErrorLogLevel];
        for (const xV of eV)
          if ((VV & xV) === xV) {
            const VV = this._Levels[xV];
            JV[VV.name] = JV._LogEnabled.bind(JV, xV)
          }
      }
    }
    JV.NoneLogLevel = 0, JV.MessageLogLevel = 1, JV.WarningLogLevel = 2, JV.ErrorLogLevel = 4, JV.AllLogLevel = 7, JV.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", JV._LogCache = "", JV._LogLimitOutputs = {}, JV._Levels = [{}, {
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
    }], JV.errorsCount = 0, JV.Log = JV._LogEnabled.bind(JV, JV.MessageLogLevel), JV.Warn = JV._LogEnabled.bind(JV, JV.WarningLogLevel), JV.Error = JV._LogEnabled.bind(JV, JV.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);