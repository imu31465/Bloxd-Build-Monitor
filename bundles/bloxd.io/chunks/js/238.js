export const id = 238;
export const ids = [238];
export const modules = {
  40706: (TT, kT, cT) => {
    cT.d(kT, {
      b: () => OT,
      d: () => IT,
      e: () => xT
    });
    var lT, MT = cT(36937),
      KT = cT(36892);
    ! function(TT) {
      TT[TT.CW = 0] = "CW", TT[TT.CCW = 1] = "CCW"
    }(lT || (lT = {}));
    class OT {
      static Interpolate(TT, kT, cT, lT, MT) {
        if (0 === TT) return 0;
        const KT = 1 - 3 * lT + 3 * kT,
          OT = 3 * lT - 6 * kT,
          yT = 3 * kT;
        let fT = TT;
        for (let xT = 0; xT < 5; xT++) {
          const kT = fT * fT;
          fT -= (KT * (kT * fT) + OT * kT + yT * fT - TT) * (1 / (3 * KT * kT + 2 * OT * fT + yT)), fT = Math.min(1, Math.max(0, fT))
        }
        return 3 * Math.pow(1 - fT, 2) * fT * cT + 3 * (1 - fT) * Math.pow(fT, 2) * MT + Math.pow(fT, 3)
      }
    }
    class yT {
      constructor(TT) {
        this._radians = TT, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(TT, kT) {
        const cT = kT.subtract(TT),
          lT = Math.atan2(cT.y, cT.x);
        return new yT(lT)
      }
      static BetweenTwoVectors(TT, kT) {
        let cT = TT.lengthSquared() * kT.lengthSquared();
        if (0 === cT) return new yT(Math.PI / 2);
        cT = Math.sqrt(cT);
        let lT = TT.dot(kT) / cT;
        lT = (0, MT.Clamp)(lT, -1, 1);
        const KT = Math.acos(lT);
        return new yT(KT)
      }
      static FromRadians(TT) {
        return new yT(TT)
      }
      static FromDegrees(TT) {
        return new yT(TT * Math.PI / 180)
      }
    }
    class fT {
      constructor(TT, kT, cT) {
        this.startPoint = TT, this.midPoint = kT, this.endPoint = cT;
        const lT = Math.pow(kT.x, 2) + Math.pow(kT.y, 2),
          MT = (Math.pow(TT.x, 2) + Math.pow(TT.y, 2) - lT) / 2,
          OT = (lT - Math.pow(cT.x, 2) - Math.pow(cT.y, 2)) / 2,
          fT = (TT.x - kT.x) * (kT.y - cT.y) - (kT.x - cT.x) * (TT.y - kT.y);
        this.centerPoint = new KT.i((MT * (kT.y - cT.y) - OT * (TT.y - kT.y)) / fT, ((TT.x - kT.x) * OT - (kT.x - cT.x) * MT) / fT), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = yT.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const xT = this.startAngle.degrees();
        let IT = yT.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          AT = yT.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        IT - xT > 180 && (IT -= 360), IT - xT < -180 && (IT += 360), AT - IT > 180 && (AT -= 360), AT - IT < -180 && (AT += 360), this.orientation = IT - xT < 0 ? 0 : 1, this.angle = yT.FromDegrees(0 === this.orientation ? xT - AT : AT - xT)
      }
    }
    class xT {
      constructor(TT, kT) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new KT.i(TT, kT))
      }
      addLineTo(TT, kT) {
        if (this.closed) return this;
        const cT = new KT.i(TT, kT),
          lT = this._points[this._points.length - 1];
        return this._points.push(cT), this._length += cT.subtract(lT).length(), this
      }
      addArcTo(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const OT = this._points[this._points.length - 1],
          yT = new KT.i(TT, kT),
          xT = new KT.i(cT, lT),
          IT = new fT(OT, yT, xT);
        let AT = IT.angle.radians() / MT;
        0 === IT.orientation && (AT *= -1);
        let CT = IT.startAngle.radians() + AT;
        for (let KT = 0; KT < MT; KT++) {
          const TT = Math.cos(CT) * IT.radius + IT.centerPoint.x,
            kT = Math.sin(CT) * IT.radius + IT.centerPoint.y;
          this.addLineTo(TT, kT), CT += AT
        }
        return this
      }
      addQuadraticCurveTo(TT, kT, cT, lT) {
        let MT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const KT = (TT, kT, cT, lT) => (1 - TT) * (1 - TT) * kT + 2 * TT * (1 - TT) * cT + TT * TT * lT,
          OT = this._points[this._points.length - 1];
        for (let yT = 0; yT <= MT; yT++) {
          const fT = yT / MT,
            xT = KT(fT, OT.x, TT, cT),
            IT = KT(fT, OT.y, kT, lT);
          this.addLineTo(xT, IT)
        }
        return this
      }
      addBezierCurveTo(TT, kT, cT, lT, MT, KT) {
        let OT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const yT = (TT, kT, cT, lT, MT) => (1 - TT) * (1 - TT) * (1 - TT) * kT + 3 * TT * (1 - TT) * (1 - TT) * cT + 3 * TT * TT * (1 - TT) * lT + TT * TT * TT * MT,
          fT = this._points[this._points.length - 1];
        for (let xT = 0; xT <= OT; xT++) {
          const IT = xT / OT,
            AT = yT(IT, fT.x, TT, cT, MT),
            CT = yT(IT, fT.y, kT, lT, KT);
          this.addLineTo(AT, CT)
        }
        return this
      }
      isPointInside(TT) {
        let kT = !1;
        const cT = this._points.length;
        for (let lT = cT - 1, MT = 0; MT < cT; lT = MT++) {
          let cT = this._points[lT],
            KT = this._points[MT],
            OT = KT.x - cT.x,
            yT = KT.y - cT.y;
          if (Math.abs(yT) > Number.EPSILON) {
            if (yT < 0 && (cT = this._points[MT], OT = -OT, KT = this._points[lT], yT = -yT), TT.y < cT.y || TT.y > KT.y) continue;
            if (TT.y === cT.y && TT.x === cT.x) return !0;
            {
              const lT = yT * (TT.x - cT.x) - OT * (TT.y - cT.y);
              if (0 === lT) return !0;
              if (lT < 0) continue;
              kT = !kT
            }
          } else {
            if (TT.y !== cT.y) continue;
            if (KT.x <= TT.x && TT.x <= cT.x || cT.x <= TT.x && TT.x <= KT.x) return !0
          }
        }
        return kT
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let TT = this._length;
        if (this.closed) {
          const kT = this._points[this._points.length - 1];
          TT += this._points[0].subtract(kT).length()
        }
        return TT
      }
      area() {
        const TT = this._points.length;
        let kT = 0;
        for (let cT = TT - 1, lT = 0; lT < TT; cT = lT++) kT += this._points[cT].x * this._points[lT].y - this._points[lT].x * this._points[cT].y;
        return .5 * kT
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(TT) {
        if (TT < 0 || TT > 1) return KT.i.Zero();
        const kT = TT * this.length();
        let cT = 0;
        for (let lT = 0; lT < this._points.length; lT++) {
          const TT = (lT + 1) % this._points.length,
            MT = this._points[lT],
            OT = this._points[TT].subtract(MT),
            yT = OT.length() + cT;
          if (kT >= cT && kT <= yT) {
            const TT = OT.normalize(),
              lT = kT - cT;
            return new KT.i(MT.x + TT.x * lT, MT.y + TT.y * lT)
          }
          cT = yT
        }
        return KT.i.Zero()
      }
      static StartingAt(TT, kT) {
        return new xT(TT, kT)
      }
    }
    class IT {
      static CreateQuadraticBezier(TT, kT, cT, lT) {
        lT = lT > 2 ? lT : 3;
        const MT = [],
          OT = (TT, kT, cT, lT) => (1 - TT) * (1 - TT) * kT + 2 * TT * (1 - TT) * cT + TT * TT * lT;
        for (let yT = 0; yT <= lT; yT++) MT.push(new KT.m(OT(yT / lT, TT.x, kT.x, cT.x), OT(yT / lT, TT.y, kT.y, cT.y), OT(yT / lT, TT.z, kT.z, cT.z)));
        return new IT(MT)
      }
      static CreateCubicBezier(TT, kT, cT, lT, MT) {
        MT = MT > 3 ? MT : 4;
        const OT = [],
          yT = (TT, kT, cT, lT, MT) => (1 - TT) * (1 - TT) * (1 - TT) * kT + 3 * TT * (1 - TT) * (1 - TT) * cT + 3 * TT * TT * (1 - TT) * lT + TT * TT * TT * MT;
        for (let fT = 0; fT <= MT; fT++) OT.push(new KT.m(yT(fT / MT, TT.x, kT.x, cT.x, lT.x), yT(fT / MT, TT.y, kT.y, cT.y, lT.y), yT(fT / MT, TT.z, kT.z, cT.z, lT.z)));
        return new IT(OT)
      }
      static CreateHermiteSpline(TT, kT, cT, lT, MT) {
        const OT = [],
          yT = 1 / MT;
        for (let fT = 0; fT <= MT; fT++) OT.push(KT.m.Hermite(TT, kT, cT, lT, fT * yT));
        return new IT(OT)
      }
      static CreateCatmullRomSpline(TT, kT, cT) {
        const lT = [],
          MT = 1 / kT;
        let OT = 0;
        if (cT) {
          const cT = TT.length;
          for (let yT = 0; yT < cT; yT++) {
            OT = 0;
            for (let fT = 0; fT < kT; fT++) lT.push(KT.m.CatmullRom(TT[yT % cT], TT[(yT + 1) % cT], TT[(yT + 2) % cT], TT[(yT + 3) % cT], OT)), OT += MT
          }
          lT.push(lT[0])
        } else {
          const cT = [];
          cT.push(TT[0].clone()), cT.push(...TT), cT.push(TT[TT.length - 1].clone());
          let yT = 0;
          for (; yT < cT.length - 3; yT++) {
            OT = 0;
            for (let TT = 0; TT < kT; TT++) lT.push(KT.m.CatmullRom(cT[yT], cT[yT + 1], cT[yT + 2], cT[yT + 3], OT)), OT += MT
          }
          yT--, lT.push(KT.m.CatmullRom(cT[yT], cT[yT + 1], cT[yT + 2], cT[yT + 3], OT))
        }
        return new IT(lT)
      }
      static ArcThru3Points(TT, kT, cT) {
        let lT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          MT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          OT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const yT = [],
          fT = kT.subtract(TT),
          xT = cT.subtract(kT),
          AT = TT.subtract(cT),
          CT = KT.m.Cross(fT, xT),
          jT = CT.length();
        if (jT < Math.pow(10, -8)) return new IT(yT);
        const vT = fT.lengthSquared(),
          tT = xT.lengthSquared(),
          hT = AT.lengthSquared(),
          NT = CT.lengthSquared(),
          QT = .5 * fT.length() * xT.length() * AT.length() / jT,
          ST = -.5 * tT * KT.m.Dot(fT, AT) / NT,
          DT = -.5 * hT * KT.m.Dot(fT, xT) / NT,
          aT = -.5 * vT * KT.m.Dot(xT, AT) / NT,
          FT = TT.scale(ST).add(kT.scale(DT)).add(cT.scale(aT)),
          rT = TT.subtract(FT).normalize(),
          PT = KT.m.Cross(CT, rT).normalize();
        if (OT) {
          const kT = 2 * Math.PI / lT;
          for (let TT = 0; TT <= 2 * Math.PI; TT += kT) yT.push(FT.add(rT.scale(QT * Math.cos(TT)).add(PT.scale(QT * Math.sin(TT)))));
          yT.push(TT)
        } else {
          const kT = 1 / lT;
          let KT, OT = 0;
          do {
            KT = FT.add(rT.scale(QT * Math.cos(OT)).add(PT.scale(QT * Math.sin(OT)))), yT.push(KT), OT += kT
          } while (!KT.equalsWithEpsilon(cT, QT * kT * 1.1));
          yT.push(cT), MT && yT.push(TT)
        }
        return new IT(yT)
      }
      constructor(TT) {
        this._length = 0, this._points = TT, this._length = this._computeLength(TT)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (TT) {
        const kT = this._points[this._points.length - 1],
          cT = this._points.slice(),
          lT = TT.getPoints();
        for (let MT = 1; MT < lT.length; MT++) cT.push(lT[MT].subtract(lT[0]).add(kT));
        return new IT(cT)
      }
      _computeLength(TT) {
        let kT = 0;
        for (let cT = 1; cT < TT.length; cT++) kT += TT[cT].subtract(TT[cT - 1]).length();
        return kT
      }
    }
  },
  38507: (TT, kT, cT) => {
    cT.d(kT, {
      d: () => KT
    });
    var lT = cT(38512);
    const MT = (TT, kT, cT) => TT ? TT.getClassName && "Mesh" === TT.getClassName() ? null : !TT.getClassName || "SubMesh" !== TT.getClassName() && "PhysicsBody" !== TT.getClassName() ? TT.clone ? TT.clone() : Array.isArray(TT) ? TT.slice() : cT && "object" === typeof TT ? {
      ...TT
    } : null : TT.clone(kT) : null;
    class KT {
      static DeepCopy(TT, kT, cT, KT) {
        let OT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const yT = function(TT) {
          const kT = [];
          do {
            const cT = Object.getOwnPropertyNames(TT);
            for (const TT of cT) - 1 === kT.indexOf(TT) && kT.push(TT)
          } while (TT = Object.getPrototypeOf(TT));
          return kT
        }(TT);
        for (const xT of yT) {
          if ("_" === xT[0] && (!KT || -1 === KT.indexOf(xT))) continue;
          if (xT.endsWith("Observable")) continue;
          if (cT && -1 !== cT.indexOf(xT)) continue;
          const yT = TT[xT],
            IT = typeof yT;
          if ("function" !== IT) try {
            if ("object" === IT)
              if (yT instanceof Uint8Array) kT[xT] = Uint8Array.from(yT);
              else if (yT instanceof Array) {
              if (kT[xT] = [], yT.length > 0)
                if ("object" == typeof yT[0])
                  for (let TT = 0; TT < yT.length; TT++) {
                    const cT = MT(yT[TT], kT, OT); - 1 === kT[xT].indexOf(cT) && kT[xT].push(cT)
                  } else kT[xT] = yT.slice(0)
            } else kT[xT] = MT(yT, kT, OT);
            else kT[xT] = yT
          } catch (fT) {
            lT.e.Warn(fT.message)
          }
        }
      }
    }
  },
  38512: (TT, kT, cT) => {
    cT.d(kT, {
      e: () => lT
    });
    class lT {
      static _CheckLimit(TT, kT) {
        let cT = lT._LogLimitOutputs[TT];
        return cT ? cT.current++ : (cT = {
          limit: kT,
          current: 1
        }, lT._LogLimitOutputs[TT] = cT), cT.current <= cT.limit
      }
      static _GenerateLimitMessage(TT) {
        let kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const cT = lT._LogLimitOutputs[TT];
        if (!cT || !lT.MessageLimitReached) return;
        const MT = this._Levels[kT];
        cT.current === cT.limit && lT[MT.name](lT.MessageLimitReached.replace(/%LIMIT%/g, "" + cT.limit).replace(/%TYPE%/g, MT.name ?? ""))
      }
      static _AddLogEntry(TT) {
        lT._LogCache = TT + lT._LogCache, lT.OnNewCacheEntry && lT.OnNewCacheEntry(TT)
      }
      static _FormatMessage(TT) {
        const kT = TT => TT < 10 ? "0" + TT : "" + TT,
          cT = new Date;
        return "[" + kT(cT.getHours()) + ":" + kT(cT.getMinutes()) + ":" + kT(cT.getSeconds()) + "]: " + TT
      }
      static _LogDisabled(TT, kT) {}
      static _LogEnabled() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          kT = arguments.length > 1 ? arguments[1] : void 0,
          cT = arguments.length > 2 ? arguments[2] : void 0;
        const MT = Array.isArray(kT) ? kT[0] : kT;
        if (void 0 !== cT && !lT._CheckLimit(MT, cT)) return;
        const KT = lT._FormatMessage(MT),
          OT = this._Levels[TT],
          yT = Array.isArray(kT) ? kT.slice(1) : [];
        OT.logFunc && OT.logFunc("BJS - " + KT, ...yT);
        const fT = `<div style='color:${OT.color}'>${KT}</div><br>`;
        lT._AddLogEntry(fT), lT._GenerateLimitMessage(MT, TT)
      }
      static get LogCache() {
        return lT._LogCache
      }
      static ClearLogCache() {
        lT._LogCache = "", lT._LogLimitOutputs = {}, lT.errorsCount = 0
      }
      static set LogLevels(TT) {
        lT.Log = lT._LogDisabled, lT.Warn = lT._LogDisabled, lT.Error = lT._LogDisabled;
        const kT = [lT.MessageLogLevel, lT.WarningLogLevel, lT.ErrorLogLevel];
        for (const cT of kT)
          if ((TT & cT) === cT) {
            const TT = this._Levels[cT];
            lT[TT.name] = lT._LogEnabled.bind(lT, cT)
          }
      }
    }
    lT.NoneLogLevel = 0, lT.MessageLogLevel = 1, lT.WarningLogLevel = 2, lT.ErrorLogLevel = 4, lT.AllLogLevel = 7, lT.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", lT._LogCache = "", lT._LogLimitOutputs = {}, lT._Levels = [{}, {
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
    }], lT.errorsCount = 0, lT.Log = lT._LogEnabled.bind(lT, lT.MessageLogLevel), lT.Warn = lT._LogEnabled.bind(lT, lT.WarningLogLevel), lT.Error = lT._LogEnabled.bind(lT, lT.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);