export const id = 234;
export const ids = [234];
export const modules = {
  40008: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => WT,
      g: () => ST,
      k: () => FT
    });
    var iT, zT = IT(36156),
      kT = IT(36118);
    ! function(TT) {
      TT[TT.CW = 0] = "CW", TT[TT.CCW = 1] = "CCW"
    }(iT || (iT = {}));
    class WT {
      static Interpolate(TT, oT, IT, iT, zT) {
        if (0 === TT) return 0;
        const kT = 1 - 3 * iT + 3 * oT,
          WT = 3 * iT - 6 * oT,
          XT = 3 * oT;
        let BT = TT;
        for (let FT = 0; FT < 5; FT++) {
          const oT = BT * BT;
          BT -= (kT * (oT * BT) + WT * oT + XT * BT - TT) * (1 / (3 * kT * oT + 2 * WT * BT + XT)), BT = Math.min(1, Math.max(0, BT))
        }
        return 3 * Math.pow(1 - BT, 2) * BT * IT + 3 * (1 - BT) * Math.pow(BT, 2) * zT + Math.pow(BT, 3)
      }
    }
    class XT {
      constructor(TT) {
        this._radians = TT, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(TT, oT) {
        const IT = oT.subtract(TT),
          iT = Math.atan2(IT.y, IT.x);
        return new XT(iT)
      }
      static BetweenTwoVectors(TT, oT) {
        let IT = TT.lengthSquared() * oT.lengthSquared();
        if (0 === IT) return new XT(Math.PI / 2);
        IT = Math.sqrt(IT);
        let iT = TT.dot(oT) / IT;
        iT = (0, zT.Clamp)(iT, -1, 1);
        const kT = Math.acos(iT);
        return new XT(kT)
      }
      static FromRadians(TT) {
        return new XT(TT)
      }
      static FromDegrees(TT) {
        return new XT(TT * Math.PI / 180)
      }
    }
    class BT {
      constructor(TT, oT, IT) {
        this.startPoint = TT, this.midPoint = oT, this.endPoint = IT;
        const iT = Math.pow(oT.x, 2) + Math.pow(oT.y, 2),
          zT = (Math.pow(TT.x, 2) + Math.pow(TT.y, 2) - iT) / 2,
          WT = (iT - Math.pow(IT.x, 2) - Math.pow(IT.y, 2)) / 2,
          BT = (TT.x - oT.x) * (oT.y - IT.y) - (oT.x - IT.x) * (TT.y - oT.y);
        this.centerPoint = new kT.j((zT * (oT.y - IT.y) - WT * (TT.y - oT.y)) / BT, ((TT.x - oT.x) * WT - (oT.x - IT.x) * zT) / BT), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = XT.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const FT = this.startAngle.degrees();
        let ST = XT.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          DT = XT.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        ST - FT > 180 && (ST -= 360), ST - FT < -180 && (ST += 360), DT - ST > 180 && (DT -= 360), DT - ST < -180 && (DT += 360), this.orientation = ST - FT < 0 ? 0 : 1, this.angle = XT.FromDegrees(0 === this.orientation ? FT - DT : DT - FT)
      }
    }
    class FT {
      constructor(TT, oT) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new kT.j(TT, oT))
      }
      addLineTo(TT, oT) {
        if (this.closed) return this;
        const IT = new kT.j(TT, oT),
          iT = this._points[this._points.length - 1];
        return this._points.push(IT), this._length += IT.subtract(iT).length(), this
      }
      addArcTo(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const WT = this._points[this._points.length - 1],
          XT = new kT.j(TT, oT),
          FT = new kT.j(IT, iT),
          ST = new BT(WT, XT, FT);
        let DT = ST.angle.radians() / zT;
        0 === ST.orientation && (DT *= -1);
        let LT = ST.startAngle.radians() + DT;
        for (let kT = 0; kT < zT; kT++) {
          const TT = Math.cos(LT) * ST.radius + ST.centerPoint.x,
            oT = Math.sin(LT) * ST.radius + ST.centerPoint.y;
          this.addLineTo(TT, oT), LT += DT
        }
        return this
      }
      addQuadraticCurveTo(TT, oT, IT, iT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const kT = (TT, oT, IT, iT) => (1 - TT) * (1 - TT) * oT + 2 * TT * (1 - TT) * IT + TT * TT * iT,
          WT = this._points[this._points.length - 1];
        for (let XT = 0; XT <= zT; XT++) {
          const BT = XT / zT,
            FT = kT(BT, WT.x, TT, IT),
            ST = kT(BT, WT.y, oT, iT);
          this.addLineTo(FT, ST)
        }
        return this
      }
      addBezierCurveTo(TT, oT, IT, iT, zT, kT) {
        let WT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const XT = (TT, oT, IT, iT, zT) => (1 - TT) * (1 - TT) * (1 - TT) * oT + 3 * TT * (1 - TT) * (1 - TT) * IT + 3 * TT * TT * (1 - TT) * iT + TT * TT * TT * zT,
          BT = this._points[this._points.length - 1];
        for (let FT = 0; FT <= WT; FT++) {
          const ST = FT / WT,
            DT = XT(ST, BT.x, TT, IT, zT),
            LT = XT(ST, BT.y, oT, iT, kT);
          this.addLineTo(DT, LT)
        }
        return this
      }
      isPointInside(TT) {
        let oT = !1;
        const IT = this._points.length;
        for (let iT = IT - 1, zT = 0; zT < IT; iT = zT++) {
          let IT = this._points[iT],
            kT = this._points[zT],
            WT = kT.x - IT.x,
            XT = kT.y - IT.y;
          if (Math.abs(XT) > Number.EPSILON) {
            if (XT < 0 && (IT = this._points[zT], WT = -WT, kT = this._points[iT], XT = -XT), TT.y < IT.y || TT.y > kT.y) continue;
            if (TT.y === IT.y && TT.x === IT.x) return !0;
            {
              const iT = XT * (TT.x - IT.x) - WT * (TT.y - IT.y);
              if (0 === iT) return !0;
              if (iT < 0) continue;
              oT = !oT
            }
          } else {
            if (TT.y !== IT.y) continue;
            if (kT.x <= TT.x && TT.x <= IT.x || IT.x <= TT.x && TT.x <= kT.x) return !0
          }
        }
        return oT
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let TT = this._length;
        if (this.closed) {
          const oT = this._points[this._points.length - 1];
          TT += this._points[0].subtract(oT).length()
        }
        return TT
      }
      area() {
        const TT = this._points.length;
        let oT = 0;
        for (let IT = TT - 1, iT = 0; iT < TT; IT = iT++) oT += this._points[IT].x * this._points[iT].y - this._points[iT].x * this._points[IT].y;
        return .5 * oT
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(TT) {
        if (TT < 0 || TT > 1) return kT.j.Zero();
        const oT = TT * this.length();
        let IT = 0;
        for (let iT = 0; iT < this._points.length; iT++) {
          const TT = (iT + 1) % this._points.length,
            zT = this._points[iT],
            WT = this._points[TT].subtract(zT),
            XT = WT.length() + IT;
          if (oT >= IT && oT <= XT) {
            const TT = WT.normalize(),
              iT = oT - IT;
            return new kT.j(zT.x + TT.x * iT, zT.y + TT.y * iT)
          }
          IT = XT
        }
        return kT.j.Zero()
      }
      static StartingAt(TT, oT) {
        return new FT(TT, oT)
      }
    }
    class ST {
      static CreateQuadraticBezier(TT, oT, IT, iT) {
        iT = iT > 2 ? iT : 3;
        const zT = [],
          WT = (TT, oT, IT, iT) => (1 - TT) * (1 - TT) * oT + 2 * TT * (1 - TT) * IT + TT * TT * iT;
        for (let XT = 0; XT <= iT; XT++) zT.push(new kT.m(WT(XT / iT, TT.x, oT.x, IT.x), WT(XT / iT, TT.y, oT.y, IT.y), WT(XT / iT, TT.z, oT.z, IT.z)));
        return new ST(zT)
      }
      static CreateCubicBezier(TT, oT, IT, iT, zT) {
        zT = zT > 3 ? zT : 4;
        const WT = [],
          XT = (TT, oT, IT, iT, zT) => (1 - TT) * (1 - TT) * (1 - TT) * oT + 3 * TT * (1 - TT) * (1 - TT) * IT + 3 * TT * TT * (1 - TT) * iT + TT * TT * TT * zT;
        for (let BT = 0; BT <= zT; BT++) WT.push(new kT.m(XT(BT / zT, TT.x, oT.x, IT.x, iT.x), XT(BT / zT, TT.y, oT.y, IT.y, iT.y), XT(BT / zT, TT.z, oT.z, IT.z, iT.z)));
        return new ST(WT)
      }
      static CreateHermiteSpline(TT, oT, IT, iT, zT) {
        const WT = [],
          XT = 1 / zT;
        for (let BT = 0; BT <= zT; BT++) WT.push(kT.m.Hermite(TT, oT, IT, iT, BT * XT));
        return new ST(WT)
      }
      static CreateCatmullRomSpline(TT, oT, IT) {
        const iT = [],
          zT = 1 / oT;
        let WT = 0;
        if (IT) {
          const IT = TT.length;
          for (let XT = 0; XT < IT; XT++) {
            WT = 0;
            for (let BT = 0; BT < oT; BT++) iT.push(kT.m.CatmullRom(TT[XT % IT], TT[(XT + 1) % IT], TT[(XT + 2) % IT], TT[(XT + 3) % IT], WT)), WT += zT
          }
          iT.push(iT[0])
        } else {
          const IT = [];
          IT.push(TT[0].clone()), IT.push(...TT), IT.push(TT[TT.length - 1].clone());
          let XT = 0;
          for (; XT < IT.length - 3; XT++) {
            WT = 0;
            for (let TT = 0; TT < oT; TT++) iT.push(kT.m.CatmullRom(IT[XT], IT[XT + 1], IT[XT + 2], IT[XT + 3], WT)), WT += zT
          }
          XT--, iT.push(kT.m.CatmullRom(IT[XT], IT[XT + 1], IT[XT + 2], IT[XT + 3], WT))
        }
        return new ST(iT)
      }
      static ArcThru3Points(TT, oT, IT) {
        let iT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          WT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const XT = [],
          BT = oT.subtract(TT),
          FT = IT.subtract(oT),
          DT = TT.subtract(IT),
          LT = kT.m.Cross(BT, FT),
          xT = LT.length();
        if (xT < Math.pow(10, -8)) return new ST(XT);
        const cT = BT.lengthSquared(),
          KT = FT.lengthSquared(),
          MT = DT.lengthSquared(),
          rT = LT.lengthSquared(),
          AT = .5 * BT.length() * FT.length() * DT.length() / xT,
          gT = -.5 * KT * kT.m.Dot(BT, DT) / rT,
          hT = -.5 * MT * kT.m.Dot(BT, FT) / rT,
          wT = -.5 * cT * kT.m.Dot(FT, DT) / rT,
          mT = TT.scale(gT).add(oT.scale(hT)).add(IT.scale(wT)),
          eT = TT.subtract(mT).normalize(),
          RT = kT.m.Cross(LT, eT).normalize();
        if (WT) {
          const oT = 2 * Math.PI / iT;
          for (let TT = 0; TT <= 2 * Math.PI; TT += oT) XT.push(mT.add(eT.scale(AT * Math.cos(TT)).add(RT.scale(AT * Math.sin(TT)))));
          XT.push(TT)
        } else {
          const oT = 1 / iT;
          let kT, WT = 0;
          do {
            kT = mT.add(eT.scale(AT * Math.cos(WT)).add(RT.scale(AT * Math.sin(WT)))), XT.push(kT), WT += oT
          } while (!kT.equalsWithEpsilon(IT, AT * oT * 1.1));
          XT.push(IT), zT && XT.push(TT)
        }
        return new ST(XT)
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
        const oT = this._points[this._points.length - 1],
          IT = this._points.slice(),
          iT = TT.getPoints();
        for (let zT = 1; zT < iT.length; zT++) IT.push(iT[zT].subtract(iT[0]).add(oT));
        return new ST(IT)
      }
      _computeLength(TT) {
        let oT = 0;
        for (let IT = 1; IT < TT.length; IT++) oT += TT[IT].subtract(TT[IT - 1]).length();
        return oT
      }
    }
  },
  37658: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => kT
    });
    var iT = IT(37660);
    const zT = (TT, oT, IT) => TT ? TT.getClassName && "Mesh" === TT.getClassName() ? null : !TT.getClassName || "SubMesh" !== TT.getClassName() && "PhysicsBody" !== TT.getClassName() ? TT.clone ? TT.clone() : Array.isArray(TT) ? TT.slice() : IT && "object" === typeof TT ? {
      ...TT
    } : null : TT.clone(oT) : null;
    class kT {
      static DeepCopy(TT, oT, IT, kT) {
        let WT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const XT = function(TT) {
          const oT = [];
          do {
            const IT = Object.getOwnPropertyNames(TT);
            for (const TT of IT) - 1 === oT.indexOf(TT) && oT.push(TT)
          } while (TT = Object.getPrototypeOf(TT));
          return oT
        }(TT);
        for (const FT of XT) {
          if ("_" === FT[0] && (!kT || -1 === kT.indexOf(FT))) continue;
          if (FT.endsWith("Observable")) continue;
          if (IT && -1 !== IT.indexOf(FT)) continue;
          const XT = TT[FT],
            ST = typeof XT;
          if ("function" !== ST) try {
            if ("object" === ST)
              if (XT instanceof Uint8Array) oT[FT] = Uint8Array.from(XT);
              else if (XT instanceof Array) {
              if (oT[FT] = [], XT.length > 0)
                if ("object" == typeof XT[0])
                  for (let TT = 0; TT < XT.length; TT++) {
                    const IT = zT(XT[TT], oT, WT); - 1 === oT[FT].indexOf(IT) && oT[FT].push(IT)
                  } else oT[FT] = XT.slice(0)
            } else oT[FT] = zT(XT, oT, WT);
            else oT[FT] = XT
          } catch (BT) {
            iT.d.Warn(BT.message)
          }
        }
      }
    }
  },
  37660: (TT, oT, IT) => {
    IT.d(oT, {
      d: () => iT
    });
    class iT {
      static _CheckLimit(TT, oT) {
        let IT = iT._LogLimitOutputs[TT];
        return IT ? IT.current++ : (IT = {
          limit: oT,
          current: 1
        }, iT._LogLimitOutputs[TT] = IT), IT.current <= IT.limit
      }
      static _GenerateLimitMessage(TT) {
        let oT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const IT = iT._LogLimitOutputs[TT];
        if (!IT || !iT.MessageLimitReached) return;
        const zT = this._Levels[oT];
        IT.current === IT.limit && iT[zT.name](iT.MessageLimitReached.replace(/%LIMIT%/g, "" + IT.limit).replace(/%TYPE%/g, zT.name ?? ""))
      }
      static _AddLogEntry(TT) {
        iT._LogCache = TT + iT._LogCache, iT.OnNewCacheEntry && iT.OnNewCacheEntry(TT)
      }
      static _FormatMessage(TT) {
        const oT = TT => TT < 10 ? "0" + TT : "" + TT,
          IT = new Date;
        return "[" + oT(IT.getHours()) + ":" + oT(IT.getMinutes()) + ":" + oT(IT.getSeconds()) + "]: " + TT
      }
      static _LogDisabled(TT, oT) {}
      static _LogEnabled() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          oT = arguments.length > 1 ? arguments[1] : void 0,
          IT = arguments.length > 2 ? arguments[2] : void 0;
        const zT = Array.isArray(oT) ? oT[0] : oT;
        if (void 0 !== IT && !iT._CheckLimit(zT, IT)) return;
        const kT = iT._FormatMessage(zT),
          WT = this._Levels[TT],
          XT = Array.isArray(oT) ? oT.slice(1) : [];
        WT.logFunc && WT.logFunc("BJS - " + kT, ...XT);
        const BT = `<div style='color:${WT.color}'>${kT}</div><br>`;
        iT._AddLogEntry(BT), iT._GenerateLimitMessage(zT, TT)
      }
      static get LogCache() {
        return iT._LogCache
      }
      static ClearLogCache() {
        iT._LogCache = "", iT._LogLimitOutputs = {}, iT.errorsCount = 0
      }
      static set LogLevels(TT) {
        iT.Log = iT._LogDisabled, iT.Warn = iT._LogDisabled, iT.Error = iT._LogDisabled;
        const oT = [iT.MessageLogLevel, iT.WarningLogLevel, iT.ErrorLogLevel];
        for (const IT of oT)
          if ((TT & IT) === IT) {
            const TT = this._Levels[IT];
            iT[TT.name] = iT._LogEnabled.bind(iT, IT)
          }
      }
    }
    iT.NoneLogLevel = 0, iT.MessageLogLevel = 1, iT.WarningLogLevel = 2, iT.ErrorLogLevel = 4, iT.AllLogLevel = 7, iT.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", iT._LogCache = "", iT._LogLimitOutputs = {}, iT._Levels = [{}, {
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
    }], iT.errorsCount = 0, iT.Log = iT._LogEnabled.bind(iT, iT.MessageLogLevel), iT.Warn = iT._LogEnabled.bind(iT, iT.WarningLogLevel), iT.Error = iT._LogEnabled.bind(iT, iT.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);