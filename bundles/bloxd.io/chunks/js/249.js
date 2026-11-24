export const id = 249;
export const ids = [249];
export const modules = {
  41239: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => gT,
      e: () => jT,
      g: () => kT
    });
    var WT, zT = mT(37226),
      MT = mT(37188);
    ! function(TT) {
      TT[TT.CW = 0] = "CW", TT[TT.CCW = 1] = "CCW"
    }(WT || (WT = {}));
    class gT {
      static Interpolate(TT, UT, mT, WT, zT) {
        if (0 === TT) return 0;
        const MT = 1 - 3 * WT + 3 * UT,
          gT = 3 * WT - 6 * UT,
          nT = 3 * UT;
        let HT = TT;
        for (let kT = 0; kT < 5; kT++) {
          const UT = HT * HT;
          HT -= (MT * (UT * HT) + gT * UT + nT * HT - TT) * (1 / (3 * MT * UT + 2 * gT * HT + nT)), HT = Math.min(1, Math.max(0, HT))
        }
        return 3 * Math.pow(1 - HT, 2) * HT * mT + 3 * (1 - HT) * Math.pow(HT, 2) * zT + Math.pow(HT, 3)
      }
    }
    class nT {
      constructor(TT) {
        this._radians = TT, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(TT, UT) {
        const mT = UT.subtract(TT),
          WT = Math.atan2(mT.y, mT.x);
        return new nT(WT)
      }
      static BetweenTwoVectors(TT, UT) {
        let mT = TT.lengthSquared() * UT.lengthSquared();
        if (0 === mT) return new nT(Math.PI / 2);
        mT = Math.sqrt(mT);
        let WT = TT.dot(UT) / mT;
        WT = (0, zT.Clamp)(WT, -1, 1);
        const MT = Math.acos(WT);
        return new nT(MT)
      }
      static FromRadians(TT) {
        return new nT(TT)
      }
      static FromDegrees(TT) {
        return new nT(TT * Math.PI / 180)
      }
    }
    class HT {
      constructor(TT, UT, mT) {
        this.startPoint = TT, this.midPoint = UT, this.endPoint = mT;
        const WT = Math.pow(UT.x, 2) + Math.pow(UT.y, 2),
          zT = (Math.pow(TT.x, 2) + Math.pow(TT.y, 2) - WT) / 2,
          gT = (WT - Math.pow(mT.x, 2) - Math.pow(mT.y, 2)) / 2,
          HT = (TT.x - UT.x) * (UT.y - mT.y) - (UT.x - mT.x) * (TT.y - UT.y);
        this.centerPoint = new MT.o((zT * (UT.y - mT.y) - gT * (TT.y - UT.y)) / HT, ((TT.x - UT.x) * gT - (UT.x - mT.x) * zT) / HT), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = nT.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const kT = this.startAngle.degrees();
        let jT = nT.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          lT = nT.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        jT - kT > 180 && (jT -= 360), jT - kT < -180 && (jT += 360), lT - jT > 180 && (lT -= 360), lT - jT < -180 && (lT += 360), this.orientation = jT - kT < 0 ? 0 : 1, this.angle = nT.FromDegrees(0 === this.orientation ? kT - lT : lT - kT)
      }
    }
    class kT {
      constructor(TT, UT) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new MT.o(TT, UT))
      }
      addLineTo(TT, UT) {
        if (this.closed) return this;
        const mT = new MT.o(TT, UT),
          WT = this._points[this._points.length - 1];
        return this._points.push(mT), this._length += mT.subtract(WT).length(), this
      }
      addArcTo(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const gT = this._points[this._points.length - 1],
          nT = new MT.o(TT, UT),
          kT = new MT.o(mT, WT),
          jT = new HT(gT, nT, kT);
        let lT = jT.angle.radians() / zT;
        0 === jT.orientation && (lT *= -1);
        let LT = jT.startAngle.radians() + lT;
        for (let MT = 0; MT < zT; MT++) {
          const TT = Math.cos(LT) * jT.radius + jT.centerPoint.x,
            UT = Math.sin(LT) * jT.radius + jT.centerPoint.y;
          this.addLineTo(TT, UT), LT += lT
        }
        return this
      }
      addQuadraticCurveTo(TT, UT, mT, WT) {
        let zT = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const MT = (TT, UT, mT, WT) => (1 - TT) * (1 - TT) * UT + 2 * TT * (1 - TT) * mT + TT * TT * WT,
          gT = this._points[this._points.length - 1];
        for (let nT = 0; nT <= zT; nT++) {
          const HT = nT / zT,
            kT = MT(HT, gT.x, TT, mT),
            jT = MT(HT, gT.y, UT, WT);
          this.addLineTo(kT, jT)
        }
        return this
      }
      addBezierCurveTo(TT, UT, mT, WT, zT, MT) {
        let gT = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const nT = (TT, UT, mT, WT, zT) => (1 - TT) * (1 - TT) * (1 - TT) * UT + 3 * TT * (1 - TT) * (1 - TT) * mT + 3 * TT * TT * (1 - TT) * WT + TT * TT * TT * zT,
          HT = this._points[this._points.length - 1];
        for (let kT = 0; kT <= gT; kT++) {
          const jT = kT / gT,
            lT = nT(jT, HT.x, TT, mT, zT),
            LT = nT(jT, HT.y, UT, WT, MT);
          this.addLineTo(lT, LT)
        }
        return this
      }
      isPointInside(TT) {
        let UT = !1;
        const mT = this._points.length;
        for (let WT = mT - 1, zT = 0; zT < mT; WT = zT++) {
          let mT = this._points[WT],
            MT = this._points[zT],
            gT = MT.x - mT.x,
            nT = MT.y - mT.y;
          if (Math.abs(nT) > Number.EPSILON) {
            if (nT < 0 && (mT = this._points[zT], gT = -gT, MT = this._points[WT], nT = -nT), TT.y < mT.y || TT.y > MT.y) continue;
            if (TT.y === mT.y && TT.x === mT.x) return !0;
            {
              const WT = nT * (TT.x - mT.x) - gT * (TT.y - mT.y);
              if (0 === WT) return !0;
              if (WT < 0) continue;
              UT = !UT
            }
          } else {
            if (TT.y !== mT.y) continue;
            if (MT.x <= TT.x && TT.x <= mT.x || mT.x <= TT.x && TT.x <= MT.x) return !0
          }
        }
        return UT
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let TT = this._length;
        if (this.closed) {
          const UT = this._points[this._points.length - 1];
          TT += this._points[0].subtract(UT).length()
        }
        return TT
      }
      area() {
        const TT = this._points.length;
        let UT = 0;
        for (let mT = TT - 1, WT = 0; WT < TT; mT = WT++) UT += this._points[mT].x * this._points[WT].y - this._points[WT].x * this._points[mT].y;
        return .5 * UT
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(TT) {
        if (TT < 0 || TT > 1) return MT.o.Zero();
        const UT = TT * this.length();
        let mT = 0;
        for (let WT = 0; WT < this._points.length; WT++) {
          const TT = (WT + 1) % this._points.length,
            zT = this._points[WT],
            gT = this._points[TT].subtract(zT),
            nT = gT.length() + mT;
          if (UT >= mT && UT <= nT) {
            const TT = gT.normalize(),
              WT = UT - mT;
            return new MT.o(zT.x + TT.x * WT, zT.y + TT.y * WT)
          }
          mT = nT
        }
        return MT.o.Zero()
      }
      static StartingAt(TT, UT) {
        return new kT(TT, UT)
      }
    }
    class jT {
      static CreateQuadraticBezier(TT, UT, mT, WT) {
        WT = WT > 2 ? WT : 3;
        const zT = [],
          gT = (TT, UT, mT, WT) => (1 - TT) * (1 - TT) * UT + 2 * TT * (1 - TT) * mT + TT * TT * WT;
        for (let nT = 0; nT <= WT; nT++) zT.push(new MT.p(gT(nT / WT, TT.x, UT.x, mT.x), gT(nT / WT, TT.y, UT.y, mT.y), gT(nT / WT, TT.z, UT.z, mT.z)));
        return new jT(zT)
      }
      static CreateCubicBezier(TT, UT, mT, WT, zT) {
        zT = zT > 3 ? zT : 4;
        const gT = [],
          nT = (TT, UT, mT, WT, zT) => (1 - TT) * (1 - TT) * (1 - TT) * UT + 3 * TT * (1 - TT) * (1 - TT) * mT + 3 * TT * TT * (1 - TT) * WT + TT * TT * TT * zT;
        for (let HT = 0; HT <= zT; HT++) gT.push(new MT.p(nT(HT / zT, TT.x, UT.x, mT.x, WT.x), nT(HT / zT, TT.y, UT.y, mT.y, WT.y), nT(HT / zT, TT.z, UT.z, mT.z, WT.z)));
        return new jT(gT)
      }
      static CreateHermiteSpline(TT, UT, mT, WT, zT) {
        const gT = [],
          nT = 1 / zT;
        for (let HT = 0; HT <= zT; HT++) gT.push(MT.p.Hermite(TT, UT, mT, WT, HT * nT));
        return new jT(gT)
      }
      static CreateCatmullRomSpline(TT, UT, mT) {
        const WT = [],
          zT = 1 / UT;
        let gT = 0;
        if (mT) {
          const mT = TT.length;
          for (let nT = 0; nT < mT; nT++) {
            gT = 0;
            for (let HT = 0; HT < UT; HT++) WT.push(MT.p.CatmullRom(TT[nT % mT], TT[(nT + 1) % mT], TT[(nT + 2) % mT], TT[(nT + 3) % mT], gT)), gT += zT
          }
          WT.push(WT[0])
        } else {
          const mT = [];
          mT.push(TT[0].clone()), mT.push(...TT), mT.push(TT[TT.length - 1].clone());
          let nT = 0;
          for (; nT < mT.length - 3; nT++) {
            gT = 0;
            for (let TT = 0; TT < UT; TT++) WT.push(MT.p.CatmullRom(mT[nT], mT[nT + 1], mT[nT + 2], mT[nT + 3], gT)), gT += zT
          }
          nT--, WT.push(MT.p.CatmullRom(mT[nT], mT[nT + 1], mT[nT + 2], mT[nT + 3], gT))
        }
        return new jT(WT)
      }
      static ArcThru3Points(TT, UT, mT) {
        let WT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          zT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          gT = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const nT = [],
          HT = UT.subtract(TT),
          kT = mT.subtract(UT),
          lT = TT.subtract(mT),
          LT = MT.p.Cross(HT, kT),
          pT = LT.length();
        if (pT < Math.pow(10, -8)) return new jT(nT);
        const BT = HT.lengthSquared(),
          ZT = kT.lengthSquared(),
          cT = lT.lengthSquared(),
          vT = LT.lengthSquared(),
          fT = .5 * HT.length() * kT.length() * lT.length() / pT,
          qT = -.5 * ZT * MT.p.Dot(HT, lT) / vT,
          iT = -.5 * cT * MT.p.Dot(HT, kT) / vT,
          bT = -.5 * BT * MT.p.Dot(kT, lT) / vT,
          OT = TT.scale(qT).add(UT.scale(iT)).add(mT.scale(bT)),
          eT = TT.subtract(OT).normalize(),
          YT = MT.p.Cross(LT, eT).normalize();
        if (gT) {
          const UT = 2 * Math.PI / WT;
          for (let TT = 0; TT <= 2 * Math.PI; TT += UT) nT.push(OT.add(eT.scale(fT * Math.cos(TT)).add(YT.scale(fT * Math.sin(TT)))));
          nT.push(TT)
        } else {
          const UT = 1 / WT;
          let MT, gT = 0;
          do {
            MT = OT.add(eT.scale(fT * Math.cos(gT)).add(YT.scale(fT * Math.sin(gT)))), nT.push(MT), gT += UT
          } while (!MT.equalsWithEpsilon(mT, fT * UT * 1.1));
          nT.push(mT), zT && nT.push(TT)
        }
        return new jT(nT)
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
        const UT = this._points[this._points.length - 1],
          mT = this._points.slice(),
          WT = TT.getPoints();
        for (let zT = 1; zT < WT.length; zT++) mT.push(WT[zT].subtract(WT[0]).add(UT));
        return new jT(mT)
      }
      _computeLength(TT) {
        let UT = 0;
        for (let mT = 1; mT < TT.length; mT++) UT += TT[mT].subtract(TT[mT - 1]).length();
        return UT
      }
    }
  },
  38793: (TT, UT, mT) => {
    mT.d(UT, {
      c: () => MT
    });
    var WT = mT(38800);
    const zT = (TT, UT, mT) => TT ? TT.getClassName && "Mesh" === TT.getClassName() ? null : !TT.getClassName || "SubMesh" !== TT.getClassName() && "PhysicsBody" !== TT.getClassName() ? TT.clone ? TT.clone() : Array.isArray(TT) ? TT.slice() : mT && "object" === typeof TT ? {
      ...TT
    } : null : TT.clone(UT) : null;
    class MT {
      static DeepCopy(TT, UT, mT, MT) {
        let gT = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const nT = function(TT) {
          const UT = [];
          do {
            const mT = Object.getOwnPropertyNames(TT);
            for (const TT of mT) - 1 === UT.indexOf(TT) && UT.push(TT)
          } while (TT = Object.getPrototypeOf(TT));
          return UT
        }(TT);
        for (const kT of nT) {
          if ("_" === kT[0] && (!MT || -1 === MT.indexOf(kT))) continue;
          if (kT.endsWith("Observable")) continue;
          if (mT && -1 !== mT.indexOf(kT)) continue;
          const nT = TT[kT],
            jT = typeof nT;
          if ("function" !== jT) try {
            if ("object" === jT)
              if (nT instanceof Uint8Array) UT[kT] = Uint8Array.from(nT);
              else if (nT instanceof Array) {
              if (UT[kT] = [], nT.length > 0)
                if ("object" == typeof nT[0])
                  for (let TT = 0; TT < nT.length; TT++) {
                    const mT = zT(nT[TT], UT, gT); - 1 === UT[kT].indexOf(mT) && UT[kT].push(mT)
                  } else UT[kT] = nT.slice(0)
            } else UT[kT] = zT(nT, UT, gT);
            else UT[kT] = nT
          } catch (HT) {
            WT.b.Warn(HT.message)
          }
        }
      }
    }
  },
  38800: (TT, UT, mT) => {
    mT.d(UT, {
      b: () => WT
    });
    class WT {
      static _CheckLimit(TT, UT) {
        let mT = WT._LogLimitOutputs[TT];
        return mT ? mT.current++ : (mT = {
          limit: UT,
          current: 1
        }, WT._LogLimitOutputs[TT] = mT), mT.current <= mT.limit
      }
      static _GenerateLimitMessage(TT) {
        let UT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const mT = WT._LogLimitOutputs[TT];
        if (!mT || !WT.MessageLimitReached) return;
        const zT = this._Levels[UT];
        mT.current === mT.limit && WT[zT.name](WT.MessageLimitReached.replace(/%LIMIT%/g, "" + mT.limit).replace(/%TYPE%/g, zT.name ?? ""))
      }
      static _AddLogEntry(TT) {
        WT._LogCache = TT + WT._LogCache, WT.OnNewCacheEntry && WT.OnNewCacheEntry(TT)
      }
      static _FormatMessage(TT) {
        const UT = TT => TT < 10 ? "0" + TT : "" + TT,
          mT = new Date;
        return "[" + UT(mT.getHours()) + ":" + UT(mT.getMinutes()) + ":" + UT(mT.getSeconds()) + "]: " + TT
      }
      static _LogDisabled(TT, UT) {}
      static _LogEnabled() {
        let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          UT = arguments.length > 1 ? arguments[1] : void 0,
          mT = arguments.length > 2 ? arguments[2] : void 0;
        const zT = Array.isArray(UT) ? UT[0] : UT;
        if (void 0 !== mT && !WT._CheckLimit(zT, mT)) return;
        const MT = WT._FormatMessage(zT),
          gT = this._Levels[TT],
          nT = Array.isArray(UT) ? UT.slice(1) : [];
        gT.logFunc && gT.logFunc("BJS - " + MT, ...nT);
        const HT = `<div style='color:${gT.color}'>${MT}</div><br>`;
        WT._AddLogEntry(HT), WT._GenerateLimitMessage(zT, TT)
      }
      static get LogCache() {
        return WT._LogCache
      }
      static ClearLogCache() {
        WT._LogCache = "", WT._LogLimitOutputs = {}, WT.errorsCount = 0
      }
      static set LogLevels(TT) {
        WT.Log = WT._LogDisabled, WT.Warn = WT._LogDisabled, WT.Error = WT._LogDisabled;
        const UT = [WT.MessageLogLevel, WT.WarningLogLevel, WT.ErrorLogLevel];
        for (const mT of UT)
          if ((TT & mT) === mT) {
            const TT = this._Levels[mT];
            WT[TT.name] = WT._LogEnabled.bind(WT, mT)
          }
      }
    }
    WT.NoneLogLevel = 0, WT.MessageLogLevel = 1, WT.WarningLogLevel = 2, WT.ErrorLogLevel = 4, WT.AllLogLevel = 7, WT.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", WT._LogCache = "", WT._LogLimitOutputs = {}, WT._Levels = [{}, {
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
    }], WT.errorsCount = 0, WT.Log = WT._LogEnabled.bind(WT, WT.MessageLogLevel), WT.Warn = WT._LogEnabled.bind(WT, WT.WarningLogLevel), WT.Error = WT._LogEnabled.bind(WT, WT.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);