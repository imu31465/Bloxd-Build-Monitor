export const id = 236;
export const ids = [236];
export const modules = {
  40472: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => PU,
      f: () => cU,
      h: () => KU
    });
    var tU, pU = gU(36626),
      EU = gU(36600);
    ! function(UU) {
      UU[UU.CW = 0] = "CW", UU[UU.CCW = 1] = "CCW"
    }(tU || (tU = {}));
    class PU {
      static Interpolate(UU, RU, gU, tU, pU) {
        if (0 === UU) return 0;
        const EU = 1 - 3 * tU + 3 * RU,
          PU = 3 * tU - 6 * RU,
          TU = 3 * RU;
        let qU = UU;
        for (let KU = 0; KU < 5; KU++) {
          const RU = qU * qU;
          qU -= (EU * (RU * qU) + PU * RU + TU * qU - UU) * (1 / (3 * EU * RU + 2 * PU * qU + TU)), qU = Math.min(1, Math.max(0, qU))
        }
        return 3 * Math.pow(1 - qU, 2) * qU * gU + 3 * (1 - qU) * Math.pow(qU, 2) * pU + Math.pow(qU, 3)
      }
    }
    class TU {
      constructor(UU) {
        this._radians = UU, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(UU, RU) {
        const gU = RU.subtract(UU),
          tU = Math.atan2(gU.y, gU.x);
        return new TU(tU)
      }
      static BetweenTwoVectors(UU, RU) {
        let gU = UU.lengthSquared() * RU.lengthSquared();
        if (0 === gU) return new TU(Math.PI / 2);
        gU = Math.sqrt(gU);
        let tU = UU.dot(RU) / gU;
        tU = (0, pU.Clamp)(tU, -1, 1);
        const EU = Math.acos(tU);
        return new TU(EU)
      }
      static FromRadians(UU) {
        return new TU(UU)
      }
      static FromDegrees(UU) {
        return new TU(UU * Math.PI / 180)
      }
    }
    class qU {
      constructor(UU, RU, gU) {
        this.startPoint = UU, this.midPoint = RU, this.endPoint = gU;
        const tU = Math.pow(RU.x, 2) + Math.pow(RU.y, 2),
          pU = (Math.pow(UU.x, 2) + Math.pow(UU.y, 2) - tU) / 2,
          PU = (tU - Math.pow(gU.x, 2) - Math.pow(gU.y, 2)) / 2,
          qU = (UU.x - RU.x) * (RU.y - gU.y) - (RU.x - gU.x) * (UU.y - RU.y);
        this.centerPoint = new EU.l((pU * (RU.y - gU.y) - PU * (UU.y - RU.y)) / qU, ((UU.x - RU.x) * PU - (RU.x - gU.x) * pU) / qU), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = TU.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const KU = this.startAngle.degrees();
        let cU = TU.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          GU = TU.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        cU - KU > 180 && (cU -= 360), cU - KU < -180 && (cU += 360), GU - cU > 180 && (GU -= 360), GU - cU < -180 && (GU += 360), this.orientation = cU - KU < 0 ? 0 : 1, this.angle = TU.FromDegrees(0 === this.orientation ? KU - GU : GU - KU)
      }
    }
    class KU {
      constructor(UU, RU) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new EU.l(UU, RU))
      }
      addLineTo(UU, RU) {
        if (this.closed) return this;
        const gU = new EU.l(UU, RU),
          tU = this._points[this._points.length - 1];
        return this._points.push(gU), this._length += gU.subtract(tU).length(), this
      }
      addArcTo(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const PU = this._points[this._points.length - 1],
          TU = new EU.l(UU, RU),
          KU = new EU.l(gU, tU),
          cU = new qU(PU, TU, KU);
        let GU = cU.angle.radians() / pU;
        0 === cU.orientation && (GU *= -1);
        let jU = cU.startAngle.radians() + GU;
        for (let EU = 0; EU < pU; EU++) {
          const UU = Math.cos(jU) * cU.radius + cU.centerPoint.x,
            RU = Math.sin(jU) * cU.radius + cU.centerPoint.y;
          this.addLineTo(UU, RU), jU += GU
        }
        return this
      }
      addQuadraticCurveTo(UU, RU, gU, tU) {
        let pU = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const EU = (UU, RU, gU, tU) => (1 - UU) * (1 - UU) * RU + 2 * UU * (1 - UU) * gU + UU * UU * tU,
          PU = this._points[this._points.length - 1];
        for (let TU = 0; TU <= pU; TU++) {
          const qU = TU / pU,
            KU = EU(qU, PU.x, UU, gU),
            cU = EU(qU, PU.y, RU, tU);
          this.addLineTo(KU, cU)
        }
        return this
      }
      addBezierCurveTo(UU, RU, gU, tU, pU, EU) {
        let PU = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const TU = (UU, RU, gU, tU, pU) => (1 - UU) * (1 - UU) * (1 - UU) * RU + 3 * UU * (1 - UU) * (1 - UU) * gU + 3 * UU * UU * (1 - UU) * tU + UU * UU * UU * pU,
          qU = this._points[this._points.length - 1];
        for (let KU = 0; KU <= PU; KU++) {
          const cU = KU / PU,
            GU = TU(cU, qU.x, UU, gU, pU),
            jU = TU(cU, qU.y, RU, tU, EU);
          this.addLineTo(GU, jU)
        }
        return this
      }
      isPointInside(UU) {
        let RU = !1;
        const gU = this._points.length;
        for (let tU = gU - 1, pU = 0; pU < gU; tU = pU++) {
          let gU = this._points[tU],
            EU = this._points[pU],
            PU = EU.x - gU.x,
            TU = EU.y - gU.y;
          if (Math.abs(TU) > Number.EPSILON) {
            if (TU < 0 && (gU = this._points[pU], PU = -PU, EU = this._points[tU], TU = -TU), UU.y < gU.y || UU.y > EU.y) continue;
            if (UU.y === gU.y && UU.x === gU.x) return !0;
            {
              const tU = TU * (UU.x - gU.x) - PU * (UU.y - gU.y);
              if (0 === tU) return !0;
              if (tU < 0) continue;
              RU = !RU
            }
          } else {
            if (UU.y !== gU.y) continue;
            if (EU.x <= UU.x && UU.x <= gU.x || gU.x <= UU.x && UU.x <= EU.x) return !0
          }
        }
        return RU
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let UU = this._length;
        if (this.closed) {
          const RU = this._points[this._points.length - 1];
          UU += this._points[0].subtract(RU).length()
        }
        return UU
      }
      area() {
        const UU = this._points.length;
        let RU = 0;
        for (let gU = UU - 1, tU = 0; tU < UU; gU = tU++) RU += this._points[gU].x * this._points[tU].y - this._points[tU].x * this._points[gU].y;
        return .5 * RU
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(UU) {
        if (UU < 0 || UU > 1) return EU.l.Zero();
        const RU = UU * this.length();
        let gU = 0;
        for (let tU = 0; tU < this._points.length; tU++) {
          const UU = (tU + 1) % this._points.length,
            pU = this._points[tU],
            PU = this._points[UU].subtract(pU),
            TU = PU.length() + gU;
          if (RU >= gU && RU <= TU) {
            const UU = PU.normalize(),
              tU = RU - gU;
            return new EU.l(pU.x + UU.x * tU, pU.y + UU.y * tU)
          }
          gU = TU
        }
        return EU.l.Zero()
      }
      static StartingAt(UU, RU) {
        return new KU(UU, RU)
      }
    }
    class cU {
      static CreateQuadraticBezier(UU, RU, gU, tU) {
        tU = tU > 2 ? tU : 3;
        const pU = [],
          PU = (UU, RU, gU, tU) => (1 - UU) * (1 - UU) * RU + 2 * UU * (1 - UU) * gU + UU * UU * tU;
        for (let TU = 0; TU <= tU; TU++) pU.push(new EU.n(PU(TU / tU, UU.x, RU.x, gU.x), PU(TU / tU, UU.y, RU.y, gU.y), PU(TU / tU, UU.z, RU.z, gU.z)));
        return new cU(pU)
      }
      static CreateCubicBezier(UU, RU, gU, tU, pU) {
        pU = pU > 3 ? pU : 4;
        const PU = [],
          TU = (UU, RU, gU, tU, pU) => (1 - UU) * (1 - UU) * (1 - UU) * RU + 3 * UU * (1 - UU) * (1 - UU) * gU + 3 * UU * UU * (1 - UU) * tU + UU * UU * UU * pU;
        for (let qU = 0; qU <= pU; qU++) PU.push(new EU.n(TU(qU / pU, UU.x, RU.x, gU.x, tU.x), TU(qU / pU, UU.y, RU.y, gU.y, tU.y), TU(qU / pU, UU.z, RU.z, gU.z, tU.z)));
        return new cU(PU)
      }
      static CreateHermiteSpline(UU, RU, gU, tU, pU) {
        const PU = [],
          TU = 1 / pU;
        for (let qU = 0; qU <= pU; qU++) PU.push(EU.n.Hermite(UU, RU, gU, tU, qU * TU));
        return new cU(PU)
      }
      static CreateCatmullRomSpline(UU, RU, gU) {
        const tU = [],
          pU = 1 / RU;
        let PU = 0;
        if (gU) {
          const gU = UU.length;
          for (let TU = 0; TU < gU; TU++) {
            PU = 0;
            for (let qU = 0; qU < RU; qU++) tU.push(EU.n.CatmullRom(UU[TU % gU], UU[(TU + 1) % gU], UU[(TU + 2) % gU], UU[(TU + 3) % gU], PU)), PU += pU
          }
          tU.push(tU[0])
        } else {
          const gU = [];
          gU.push(UU[0].clone()), gU.push(...UU), gU.push(UU[UU.length - 1].clone());
          let TU = 0;
          for (; TU < gU.length - 3; TU++) {
            PU = 0;
            for (let UU = 0; UU < RU; UU++) tU.push(EU.n.CatmullRom(gU[TU], gU[TU + 1], gU[TU + 2], gU[TU + 3], PU)), PU += pU
          }
          TU--, tU.push(EU.n.CatmullRom(gU[TU], gU[TU + 1], gU[TU + 2], gU[TU + 3], PU))
        }
        return new cU(tU)
      }
      static ArcThru3Points(UU, RU, gU) {
        let tU = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          pU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          PU = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const TU = [],
          qU = RU.subtract(UU),
          KU = gU.subtract(RU),
          GU = UU.subtract(gU),
          jU = EU.n.Cross(qU, KU),
          uU = jU.length();
        if (uU < Math.pow(10, -8)) return new cU(TU);
        const CU = qU.lengthSquared(),
          hU = KU.lengthSquared(),
          QU = GU.lengthSquared(),
          eU = jU.lengthSquared(),
          WU = .5 * qU.length() * KU.length() * GU.length() / uU,
          fU = -.5 * hU * EU.n.Dot(qU, GU) / eU,
          xU = -.5 * QU * EU.n.Dot(qU, KU) / eU,
          mU = -.5 * CU * EU.n.Dot(KU, GU) / eU,
          IU = UU.scale(fU).add(RU.scale(xU)).add(gU.scale(mU)),
          JU = UU.subtract(IU).normalize(),
          wU = EU.n.Cross(jU, JU).normalize();
        if (PU) {
          const RU = 2 * Math.PI / tU;
          for (let UU = 0; UU <= 2 * Math.PI; UU += RU) TU.push(IU.add(JU.scale(WU * Math.cos(UU)).add(wU.scale(WU * Math.sin(UU)))));
          TU.push(UU)
        } else {
          const RU = 1 / tU;
          let EU, PU = 0;
          do {
            EU = IU.add(JU.scale(WU * Math.cos(PU)).add(wU.scale(WU * Math.sin(PU)))), TU.push(EU), PU += RU
          } while (!EU.equalsWithEpsilon(gU, WU * RU * 1.1));
          TU.push(gU), pU && TU.push(UU)
        }
        return new cU(TU)
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
        const RU = this._points[this._points.length - 1],
          gU = this._points.slice(),
          tU = UU.getPoints();
        for (let pU = 1; pU < tU.length; pU++) gU.push(tU[pU].subtract(tU[0]).add(RU));
        return new cU(gU)
      }
      _computeLength(UU) {
        let RU = 0;
        for (let gU = 1; gU < UU.length; gU++) RU += UU[gU].subtract(UU[gU - 1]).length();
        return RU
      }
    }
  },
  38234: (UU, RU, gU) => {
    gU.d(RU, {
      c: () => EU
    });
    var tU = gU(38236);
    const pU = (UU, RU, gU) => UU ? UU.getClassName && "Mesh" === UU.getClassName() ? null : !UU.getClassName || "SubMesh" !== UU.getClassName() && "PhysicsBody" !== UU.getClassName() ? UU.clone ? UU.clone() : Array.isArray(UU) ? UU.slice() : gU && "object" === typeof UU ? {
      ...UU
    } : null : UU.clone(RU) : null;
    class EU {
      static DeepCopy(UU, RU, gU, EU) {
        let PU = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const TU = function(UU) {
          const RU = [];
          do {
            const gU = Object.getOwnPropertyNames(UU);
            for (const UU of gU) - 1 === RU.indexOf(UU) && RU.push(UU)
          } while (UU = Object.getPrototypeOf(UU));
          return RU
        }(UU);
        for (const KU of TU) {
          if ("_" === KU[0] && (!EU || -1 === EU.indexOf(KU))) continue;
          if (KU.endsWith("Observable")) continue;
          if (gU && -1 !== gU.indexOf(KU)) continue;
          const TU = UU[KU],
            cU = typeof TU;
          if ("function" !== cU) try {
            if ("object" === cU)
              if (TU instanceof Uint8Array) RU[KU] = Uint8Array.from(TU);
              else if (TU instanceof Array) {
              if (RU[KU] = [], TU.length > 0)
                if ("object" == typeof TU[0])
                  for (let UU = 0; UU < TU.length; UU++) {
                    const gU = pU(TU[UU], RU, PU); - 1 === RU[KU].indexOf(gU) && RU[KU].push(gU)
                  } else RU[KU] = TU.slice(0)
            } else RU[KU] = pU(TU, RU, PU);
            else RU[KU] = TU
          } catch (qU) {
            tU.e.Warn(qU.message)
          }
        }
      }
    }
  },
  38236: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => tU
    });
    class tU {
      static _CheckLimit(UU, RU) {
        let gU = tU._LogLimitOutputs[UU];
        return gU ? gU.current++ : (gU = {
          limit: RU,
          current: 1
        }, tU._LogLimitOutputs[UU] = gU), gU.current <= gU.limit
      }
      static _GenerateLimitMessage(UU) {
        let RU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const gU = tU._LogLimitOutputs[UU];
        if (!gU || !tU.MessageLimitReached) return;
        const pU = this._Levels[RU];
        gU.current === gU.limit && tU[pU.name](tU.MessageLimitReached.replace(/%LIMIT%/g, "" + gU.limit).replace(/%TYPE%/g, pU.name ?? ""))
      }
      static _AddLogEntry(UU) {
        tU._LogCache = UU + tU._LogCache, tU.OnNewCacheEntry && tU.OnNewCacheEntry(UU)
      }
      static _FormatMessage(UU) {
        const RU = UU => UU < 10 ? "0" + UU : "" + UU,
          gU = new Date;
        return "[" + RU(gU.getHours()) + ":" + RU(gU.getMinutes()) + ":" + RU(gU.getSeconds()) + "]: " + UU
      }
      static _LogDisabled(UU, RU) {}
      static _LogEnabled() {
        let UU = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          RU = arguments.length > 1 ? arguments[1] : void 0,
          gU = arguments.length > 2 ? arguments[2] : void 0;
        const pU = Array.isArray(RU) ? RU[0] : RU;
        if (void 0 !== gU && !tU._CheckLimit(pU, gU)) return;
        const EU = tU._FormatMessage(pU),
          PU = this._Levels[UU],
          TU = Array.isArray(RU) ? RU.slice(1) : [];
        PU.logFunc && PU.logFunc("BJS - " + EU, ...TU);
        const qU = `<div style='color:${PU.color}'>${EU}</div><br>`;
        tU._AddLogEntry(qU), tU._GenerateLimitMessage(pU, UU)
      }
      static get LogCache() {
        return tU._LogCache
      }
      static ClearLogCache() {
        tU._LogCache = "", tU._LogLimitOutputs = {}, tU.errorsCount = 0
      }
      static set LogLevels(UU) {
        tU.Log = tU._LogDisabled, tU.Warn = tU._LogDisabled, tU.Error = tU._LogDisabled;
        const RU = [tU.MessageLogLevel, tU.WarningLogLevel, tU.ErrorLogLevel];
        for (const gU of RU)
          if ((UU & gU) === gU) {
            const UU = this._Levels[gU];
            tU[UU.name] = tU._LogEnabled.bind(tU, gU)
          }
      }
    }
    tU.NoneLogLevel = 0, tU.MessageLogLevel = 1, tU.WarningLogLevel = 2, tU.ErrorLogLevel = 4, tU.AllLogLevel = 7, tU.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", tU._LogCache = "", tU._LogLimitOutputs = {}, tU._Levels = [{}, {
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
    }], tU.errorsCount = 0, tU.Log = tU._LogEnabled.bind(tU, tU.MessageLogLevel), tU.Warn = tU._LogEnabled.bind(tU, tU.WarningLogLevel), tU.Error = tU._LogEnabled.bind(tU, tU.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);