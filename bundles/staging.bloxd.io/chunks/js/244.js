export const id = 244;
export const ids = [244];
export const modules = {
  41102: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => xS,
      f: () => IS,
      j: () => uS
    });
    var tS, bS = gS(37149),
      XS = gS(37117);
    ! function(SS) {
      SS[SS.CW = 0] = "CW", SS[SS.CCW = 1] = "CCW"
    }(tS || (tS = {}));
    class xS {
      static Interpolate(SS, HS, gS, tS, bS) {
        if (0 === SS) return 0;
        const XS = 1 - 3 * tS + 3 * HS,
          xS = 3 * tS - 6 * HS,
          NS = 3 * HS;
        let qS = SS;
        for (let uS = 0; uS < 5; uS++) {
          const HS = qS * qS;
          qS -= (XS * (HS * qS) + xS * HS + NS * qS - SS) * (1 / (3 * XS * HS + 2 * xS * qS + NS)), qS = Math.min(1, Math.max(0, qS))
        }
        return 3 * Math.pow(1 - qS, 2) * qS * gS + 3 * (1 - qS) * Math.pow(qS, 2) * bS + Math.pow(qS, 3)
      }
    }
    class NS {
      constructor(SS) {
        this._radians = SS, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(SS, HS) {
        const gS = HS.subtract(SS),
          tS = Math.atan2(gS.y, gS.x);
        return new NS(tS)
      }
      static BetweenTwoVectors(SS, HS) {
        let gS = SS.lengthSquared() * HS.lengthSquared();
        if (0 === gS) return new NS(Math.PI / 2);
        gS = Math.sqrt(gS);
        let tS = SS.dot(HS) / gS;
        tS = (0, bS.Clamp)(tS, -1, 1);
        const XS = Math.acos(tS);
        return new NS(XS)
      }
      static FromRadians(SS) {
        return new NS(SS)
      }
      static FromDegrees(SS) {
        return new NS(SS * Math.PI / 180)
      }
    }
    class qS {
      constructor(SS, HS, gS) {
        this.startPoint = SS, this.midPoint = HS, this.endPoint = gS;
        const tS = Math.pow(HS.x, 2) + Math.pow(HS.y, 2),
          bS = (Math.pow(SS.x, 2) + Math.pow(SS.y, 2) - tS) / 2,
          xS = (tS - Math.pow(gS.x, 2) - Math.pow(gS.y, 2)) / 2,
          qS = (SS.x - HS.x) * (HS.y - gS.y) - (HS.x - gS.x) * (SS.y - HS.y);
        this.centerPoint = new XS.m((bS * (HS.y - gS.y) - xS * (SS.y - HS.y)) / qS, ((SS.x - HS.x) * xS - (HS.x - gS.x) * bS) / qS), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = NS.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const uS = this.startAngle.degrees();
        let IS = NS.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          fS = NS.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        IS - uS > 180 && (IS -= 360), IS - uS < -180 && (IS += 360), fS - IS > 180 && (fS -= 360), fS - IS < -180 && (fS += 360), this.orientation = IS - uS < 0 ? 0 : 1, this.angle = NS.FromDegrees(0 === this.orientation ? uS - fS : fS - uS)
      }
    }
    class uS {
      constructor(SS, HS) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new XS.m(SS, HS))
      }
      addLineTo(SS, HS) {
        if (this.closed) return this;
        const gS = new XS.m(SS, HS),
          tS = this._points[this._points.length - 1];
        return this._points.push(gS), this._length += gS.subtract(tS).length(), this
      }
      addArcTo(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const xS = this._points[this._points.length - 1],
          NS = new XS.m(SS, HS),
          uS = new XS.m(gS, tS),
          IS = new qS(xS, NS, uS);
        let fS = IS.angle.radians() / bS;
        0 === IS.orientation && (fS *= -1);
        let kS = IS.startAngle.radians() + fS;
        for (let XS = 0; XS < bS; XS++) {
          const SS = Math.cos(kS) * IS.radius + IS.centerPoint.x,
            HS = Math.sin(kS) * IS.radius + IS.centerPoint.y;
          this.addLineTo(SS, HS), kS += fS
        }
        return this
      }
      addQuadraticCurveTo(SS, HS, gS, tS) {
        let bS = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const XS = (SS, HS, gS, tS) => (1 - SS) * (1 - SS) * HS + 2 * SS * (1 - SS) * gS + SS * SS * tS,
          xS = this._points[this._points.length - 1];
        for (let NS = 0; NS <= bS; NS++) {
          const qS = NS / bS,
            uS = XS(qS, xS.x, SS, gS),
            IS = XS(qS, xS.y, HS, tS);
          this.addLineTo(uS, IS)
        }
        return this
      }
      addBezierCurveTo(SS, HS, gS, tS, bS, XS) {
        let xS = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const NS = (SS, HS, gS, tS, bS) => (1 - SS) * (1 - SS) * (1 - SS) * HS + 3 * SS * (1 - SS) * (1 - SS) * gS + 3 * SS * SS * (1 - SS) * tS + SS * SS * SS * bS,
          qS = this._points[this._points.length - 1];
        for (let uS = 0; uS <= xS; uS++) {
          const IS = uS / xS,
            fS = NS(IS, qS.x, SS, gS, bS),
            kS = NS(IS, qS.y, HS, tS, XS);
          this.addLineTo(fS, kS)
        }
        return this
      }
      isPointInside(SS) {
        let HS = !1;
        const gS = this._points.length;
        for (let tS = gS - 1, bS = 0; bS < gS; tS = bS++) {
          let gS = this._points[tS],
            XS = this._points[bS],
            xS = XS.x - gS.x,
            NS = XS.y - gS.y;
          if (Math.abs(NS) > Number.EPSILON) {
            if (NS < 0 && (gS = this._points[bS], xS = -xS, XS = this._points[tS], NS = -NS), SS.y < gS.y || SS.y > XS.y) continue;
            if (SS.y === gS.y && SS.x === gS.x) return !0;
            {
              const tS = NS * (SS.x - gS.x) - xS * (SS.y - gS.y);
              if (0 === tS) return !0;
              if (tS < 0) continue;
              HS = !HS
            }
          } else {
            if (SS.y !== gS.y) continue;
            if (XS.x <= SS.x && SS.x <= gS.x || gS.x <= SS.x && SS.x <= XS.x) return !0
          }
        }
        return HS
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let SS = this._length;
        if (this.closed) {
          const HS = this._points[this._points.length - 1];
          SS += this._points[0].subtract(HS).length()
        }
        return SS
      }
      area() {
        const SS = this._points.length;
        let HS = 0;
        for (let gS = SS - 1, tS = 0; tS < SS; gS = tS++) HS += this._points[gS].x * this._points[tS].y - this._points[tS].x * this._points[gS].y;
        return .5 * HS
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(SS) {
        if (SS < 0 || SS > 1) return XS.m.Zero();
        const HS = SS * this.length();
        let gS = 0;
        for (let tS = 0; tS < this._points.length; tS++) {
          const SS = (tS + 1) % this._points.length,
            bS = this._points[tS],
            xS = this._points[SS].subtract(bS),
            NS = xS.length() + gS;
          if (HS >= gS && HS <= NS) {
            const SS = xS.normalize(),
              tS = HS - gS;
            return new XS.m(bS.x + SS.x * tS, bS.y + SS.y * tS)
          }
          gS = NS
        }
        return XS.m.Zero()
      }
      static StartingAt(SS, HS) {
        return new uS(SS, HS)
      }
    }
    class IS {
      static CreateQuadraticBezier(SS, HS, gS, tS) {
        tS = tS > 2 ? tS : 3;
        const bS = [],
          xS = (SS, HS, gS, tS) => (1 - SS) * (1 - SS) * HS + 2 * SS * (1 - SS) * gS + SS * SS * tS;
        for (let NS = 0; NS <= tS; NS++) bS.push(new XS.n(xS(NS / tS, SS.x, HS.x, gS.x), xS(NS / tS, SS.y, HS.y, gS.y), xS(NS / tS, SS.z, HS.z, gS.z)));
        return new IS(bS)
      }
      static CreateCubicBezier(SS, HS, gS, tS, bS) {
        bS = bS > 3 ? bS : 4;
        const xS = [],
          NS = (SS, HS, gS, tS, bS) => (1 - SS) * (1 - SS) * (1 - SS) * HS + 3 * SS * (1 - SS) * (1 - SS) * gS + 3 * SS * SS * (1 - SS) * tS + SS * SS * SS * bS;
        for (let qS = 0; qS <= bS; qS++) xS.push(new XS.n(NS(qS / bS, SS.x, HS.x, gS.x, tS.x), NS(qS / bS, SS.y, HS.y, gS.y, tS.y), NS(qS / bS, SS.z, HS.z, gS.z, tS.z)));
        return new IS(xS)
      }
      static CreateHermiteSpline(SS, HS, gS, tS, bS) {
        const xS = [],
          NS = 1 / bS;
        for (let qS = 0; qS <= bS; qS++) xS.push(XS.n.Hermite(SS, HS, gS, tS, qS * NS));
        return new IS(xS)
      }
      static CreateCatmullRomSpline(SS, HS, gS) {
        const tS = [],
          bS = 1 / HS;
        let xS = 0;
        if (gS) {
          const gS = SS.length;
          for (let NS = 0; NS < gS; NS++) {
            xS = 0;
            for (let qS = 0; qS < HS; qS++) tS.push(XS.n.CatmullRom(SS[NS % gS], SS[(NS + 1) % gS], SS[(NS + 2) % gS], SS[(NS + 3) % gS], xS)), xS += bS
          }
          tS.push(tS[0])
        } else {
          const gS = [];
          gS.push(SS[0].clone()), gS.push(...SS), gS.push(SS[SS.length - 1].clone());
          let NS = 0;
          for (; NS < gS.length - 3; NS++) {
            xS = 0;
            for (let SS = 0; SS < HS; SS++) tS.push(XS.n.CatmullRom(gS[NS], gS[NS + 1], gS[NS + 2], gS[NS + 3], xS)), xS += bS
          }
          NS--, tS.push(XS.n.CatmullRom(gS[NS], gS[NS + 1], gS[NS + 2], gS[NS + 3], xS))
        }
        return new IS(tS)
      }
      static ArcThru3Points(SS, HS, gS) {
        let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          bS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          xS = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const NS = [],
          qS = HS.subtract(SS),
          uS = gS.subtract(HS),
          fS = SS.subtract(gS),
          kS = XS.n.Cross(qS, uS),
          aS = kS.length();
        if (aS < Math.pow(10, -8)) return new IS(NS);
        const KS = qS.lengthSquared(),
          jS = uS.lengthSquared(),
          GS = fS.lengthSquared(),
          CS = kS.lengthSquared(),
          nS = .5 * qS.length() * uS.length() * fS.length() / aS,
          PS = -.5 * jS * XS.n.Dot(qS, fS) / CS,
          QS = -.5 * GS * XS.n.Dot(qS, uS) / CS,
          DS = -.5 * KS * XS.n.Dot(uS, fS) / CS,
          wS = SS.scale(PS).add(HS.scale(QS)).add(gS.scale(DS)),
          hS = SS.subtract(wS).normalize(),
          ZS = XS.n.Cross(kS, hS).normalize();
        if (xS) {
          const HS = 2 * Math.PI / tS;
          for (let SS = 0; SS <= 2 * Math.PI; SS += HS) NS.push(wS.add(hS.scale(nS * Math.cos(SS)).add(ZS.scale(nS * Math.sin(SS)))));
          NS.push(SS)
        } else {
          const HS = 1 / tS;
          let XS, xS = 0;
          do {
            XS = wS.add(hS.scale(nS * Math.cos(xS)).add(ZS.scale(nS * Math.sin(xS)))), NS.push(XS), xS += HS
          } while (!XS.equalsWithEpsilon(gS, nS * HS * 1.1));
          NS.push(gS), bS && NS.push(SS)
        }
        return new IS(NS)
      }
      constructor(SS) {
        this._length = 0, this._points = SS, this._length = this._computeLength(SS)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (SS) {
        const HS = this._points[this._points.length - 1],
          gS = this._points.slice(),
          tS = SS.getPoints();
        for (let bS = 1; bS < tS.length; bS++) gS.push(tS[bS].subtract(tS[0]).add(HS));
        return new IS(gS)
      }
      _computeLength(SS) {
        let HS = 0;
        for (let gS = 1; gS < SS.length; gS++) HS += SS[gS].subtract(SS[gS - 1]).length();
        return HS
      }
    }
  },
  38683: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => XS
    });
    var tS = gS(38687);
    const bS = (SS, HS, gS) => SS ? SS.getClassName && "Mesh" === SS.getClassName() ? null : !SS.getClassName || "SubMesh" !== SS.getClassName() && "PhysicsBody" !== SS.getClassName() ? SS.clone ? SS.clone() : Array.isArray(SS) ? SS.slice() : gS && "object" === typeof SS ? {
      ...SS
    } : null : SS.clone(HS) : null;
    class XS {
      static DeepCopy(SS, HS, gS, XS) {
        let xS = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const NS = function(SS) {
          const HS = [];
          do {
            const gS = Object.getOwnPropertyNames(SS);
            for (const SS of gS) - 1 === HS.indexOf(SS) && HS.push(SS)
          } while (SS = Object.getPrototypeOf(SS));
          return HS
        }(SS);
        for (const uS of NS) {
          if ("_" === uS[0] && (!XS || -1 === XS.indexOf(uS))) continue;
          if (uS.endsWith("Observable")) continue;
          if (gS && -1 !== gS.indexOf(uS)) continue;
          const NS = SS[uS],
            IS = typeof NS;
          if ("function" !== IS) try {
            if ("object" === IS)
              if (NS instanceof Uint8Array) HS[uS] = Uint8Array.from(NS);
              else if (NS instanceof Array) {
              if (HS[uS] = [], NS.length > 0)
                if ("object" == typeof NS[0])
                  for (let SS = 0; SS < NS.length; SS++) {
                    const gS = bS(NS[SS], HS, xS); - 1 === HS[uS].indexOf(gS) && HS[uS].push(gS)
                  } else HS[uS] = NS.slice(0)
            } else HS[uS] = bS(NS, HS, xS);
            else HS[uS] = NS
          } catch (qS) {
            tS.b.Warn(qS.message)
          }
        }
      }
    }
  },
  38687: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    class tS {
      static _CheckLimit(SS, HS) {
        let gS = tS._LogLimitOutputs[SS];
        return gS ? gS.current++ : (gS = {
          limit: HS,
          current: 1
        }, tS._LogLimitOutputs[SS] = gS), gS.current <= gS.limit
      }
      static _GenerateLimitMessage(SS) {
        let HS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const gS = tS._LogLimitOutputs[SS];
        if (!gS || !tS.MessageLimitReached) return;
        const bS = this._Levels[HS];
        gS.current === gS.limit && tS[bS.name](tS.MessageLimitReached.replace(/%LIMIT%/g, "" + gS.limit).replace(/%TYPE%/g, bS.name ?? ""))
      }
      static _AddLogEntry(SS) {
        tS._LogCache = SS + tS._LogCache, tS.OnNewCacheEntry && tS.OnNewCacheEntry(SS)
      }
      static _FormatMessage(SS) {
        const HS = SS => SS < 10 ? "0" + SS : "" + SS,
          gS = new Date;
        return "[" + HS(gS.getHours()) + ":" + HS(gS.getMinutes()) + ":" + HS(gS.getSeconds()) + "]: " + SS
      }
      static _LogDisabled(SS, HS) {}
      static _LogEnabled() {
        let SS = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          HS = arguments.length > 1 ? arguments[1] : void 0,
          gS = arguments.length > 2 ? arguments[2] : void 0;
        const bS = Array.isArray(HS) ? HS[0] : HS;
        if (void 0 !== gS && !tS._CheckLimit(bS, gS)) return;
        const XS = tS._FormatMessage(bS),
          xS = this._Levels[SS],
          NS = Array.isArray(HS) ? HS.slice(1) : [];
        xS.logFunc && xS.logFunc("BJS - " + XS, ...NS);
        const qS = `<div style='color:${xS.color}'>${XS}</div><br>`;
        tS._AddLogEntry(qS), tS._GenerateLimitMessage(bS, SS)
      }
      static get LogCache() {
        return tS._LogCache
      }
      static ClearLogCache() {
        tS._LogCache = "", tS._LogLimitOutputs = {}, tS.errorsCount = 0
      }
      static set LogLevels(SS) {
        tS.Log = tS._LogDisabled, tS.Warn = tS._LogDisabled, tS.Error = tS._LogDisabled;
        const HS = [tS.MessageLogLevel, tS.WarningLogLevel, tS.ErrorLogLevel];
        for (const gS of HS)
          if ((SS & gS) === gS) {
            const SS = this._Levels[gS];
            tS[SS.name] = tS._LogEnabled.bind(tS, gS)
          }
      }
    }
    tS.NoneLogLevel = 0, tS.MessageLogLevel = 1, tS.WarningLogLevel = 2, tS.ErrorLogLevel = 4, tS.AllLogLevel = 7, tS.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", tS._LogCache = "", tS._LogLimitOutputs = {}, tS._Levels = [{}, {
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
    }], tS.errorsCount = 0, tS.Log = tS._LogEnabled.bind(tS, tS.MessageLogLevel), tS.Warn = tS._LogEnabled.bind(tS, tS.WarningLogLevel), tS.Error = tS._LogEnabled.bind(tS, tS.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);