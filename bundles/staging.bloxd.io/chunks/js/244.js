export const id = 244;
export const ids = [244];
export const modules = {
  41008: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => rD,
      h: () => RD,
      l: () => gD
    });
    var pD, sD = wD(37125),
      KD = wD(37079);
    ! function(DD) {
      DD[DD.CW = 0] = "CW", DD[DD.CCW = 1] = "CCW"
    }(pD || (pD = {}));
    class rD {
      static Interpolate(DD, zD, wD, pD, sD) {
        if (0 === DD) return 0;
        const KD = 1 - 3 * pD + 3 * zD,
          rD = 3 * pD - 6 * zD,
          LD = 3 * zD;
        let cD = DD;
        for (let gD = 0; gD < 5; gD++) {
          const zD = cD * cD;
          cD -= (KD * (zD * cD) + rD * zD + LD * cD - DD) * (1 / (3 * KD * zD + 2 * rD * cD + LD)), cD = Math.min(1, Math.max(0, cD))
        }
        return 3 * Math.pow(1 - cD, 2) * cD * wD + 3 * (1 - cD) * Math.pow(cD, 2) * sD + Math.pow(cD, 3)
      }
    }
    class LD {
      constructor(DD) {
        this._radians = DD, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(DD, zD) {
        const wD = zD.subtract(DD),
          pD = Math.atan2(wD.y, wD.x);
        return new LD(pD)
      }
      static BetweenTwoVectors(DD, zD) {
        let wD = DD.lengthSquared() * zD.lengthSquared();
        if (0 === wD) return new LD(Math.PI / 2);
        wD = Math.sqrt(wD);
        let pD = DD.dot(zD) / wD;
        pD = (0, sD.Clamp)(pD, -1, 1);
        const KD = Math.acos(pD);
        return new LD(KD)
      }
      static FromRadians(DD) {
        return new LD(DD)
      }
      static FromDegrees(DD) {
        return new LD(DD * Math.PI / 180)
      }
    }
    class cD {
      constructor(DD, zD, wD) {
        this.startPoint = DD, this.midPoint = zD, this.endPoint = wD;
        const pD = Math.pow(zD.x, 2) + Math.pow(zD.y, 2),
          sD = (Math.pow(DD.x, 2) + Math.pow(DD.y, 2) - pD) / 2,
          rD = (pD - Math.pow(wD.x, 2) - Math.pow(wD.y, 2)) / 2,
          cD = (DD.x - zD.x) * (zD.y - wD.y) - (zD.x - wD.x) * (DD.y - zD.y);
        this.centerPoint = new KD.r((sD * (zD.y - wD.y) - rD * (DD.y - zD.y)) / cD, ((DD.x - zD.x) * rD - (zD.x - wD.x) * sD) / cD), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = LD.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const gD = this.startAngle.degrees();
        let RD = LD.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          AD = LD.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        RD - gD > 180 && (RD -= 360), RD - gD < -180 && (RD += 360), AD - RD > 180 && (AD -= 360), AD - RD < -180 && (AD += 360), this.orientation = RD - gD < 0 ? 0 : 1, this.angle = LD.FromDegrees(0 === this.orientation ? gD - AD : AD - gD)
      }
    }
    class gD {
      constructor(DD, zD) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new KD.r(DD, zD))
      }
      addLineTo(DD, zD) {
        if (this.closed) return this;
        const wD = new KD.r(DD, zD),
          pD = this._points[this._points.length - 1];
        return this._points.push(wD), this._length += wD.subtract(pD).length(), this
      }
      addArcTo(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const rD = this._points[this._points.length - 1],
          LD = new KD.r(DD, zD),
          gD = new KD.r(wD, pD),
          RD = new cD(rD, LD, gD);
        let AD = RD.angle.radians() / sD;
        0 === RD.orientation && (AD *= -1);
        let UD = RD.startAngle.radians() + AD;
        for (let KD = 0; KD < sD; KD++) {
          const DD = Math.cos(UD) * RD.radius + RD.centerPoint.x,
            zD = Math.sin(UD) * RD.radius + RD.centerPoint.y;
          this.addLineTo(DD, zD), UD += AD
        }
        return this
      }
      addQuadraticCurveTo(DD, zD, wD, pD) {
        let sD = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const KD = (DD, zD, wD, pD) => (1 - DD) * (1 - DD) * zD + 2 * DD * (1 - DD) * wD + DD * DD * pD,
          rD = this._points[this._points.length - 1];
        for (let LD = 0; LD <= sD; LD++) {
          const cD = LD / sD,
            gD = KD(cD, rD.x, DD, wD),
            RD = KD(cD, rD.y, zD, pD);
          this.addLineTo(gD, RD)
        }
        return this
      }
      addBezierCurveTo(DD, zD, wD, pD, sD, KD) {
        let rD = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const LD = (DD, zD, wD, pD, sD) => (1 - DD) * (1 - DD) * (1 - DD) * zD + 3 * DD * (1 - DD) * (1 - DD) * wD + 3 * DD * DD * (1 - DD) * pD + DD * DD * DD * sD,
          cD = this._points[this._points.length - 1];
        for (let gD = 0; gD <= rD; gD++) {
          const RD = gD / rD,
            AD = LD(RD, cD.x, DD, wD, sD),
            UD = LD(RD, cD.y, zD, pD, KD);
          this.addLineTo(AD, UD)
        }
        return this
      }
      isPointInside(DD) {
        let zD = !1;
        const wD = this._points.length;
        for (let pD = wD - 1, sD = 0; sD < wD; pD = sD++) {
          let wD = this._points[pD],
            KD = this._points[sD],
            rD = KD.x - wD.x,
            LD = KD.y - wD.y;
          if (Math.abs(LD) > Number.EPSILON) {
            if (LD < 0 && (wD = this._points[sD], rD = -rD, KD = this._points[pD], LD = -LD), DD.y < wD.y || DD.y > KD.y) continue;
            if (DD.y === wD.y && DD.x === wD.x) return !0;
            {
              const pD = LD * (DD.x - wD.x) - rD * (DD.y - wD.y);
              if (0 === pD) return !0;
              if (pD < 0) continue;
              zD = !zD
            }
          } else {
            if (DD.y !== wD.y) continue;
            if (KD.x <= DD.x && DD.x <= wD.x || wD.x <= DD.x && DD.x <= KD.x) return !0
          }
        }
        return zD
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let DD = this._length;
        if (this.closed) {
          const zD = this._points[this._points.length - 1];
          DD += this._points[0].subtract(zD).length()
        }
        return DD
      }
      area() {
        const DD = this._points.length;
        let zD = 0;
        for (let wD = DD - 1, pD = 0; pD < DD; wD = pD++) zD += this._points[wD].x * this._points[pD].y - this._points[pD].x * this._points[wD].y;
        return .5 * zD
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(DD) {
        if (DD < 0 || DD > 1) return KD.r.Zero();
        const zD = DD * this.length();
        let wD = 0;
        for (let pD = 0; pD < this._points.length; pD++) {
          const DD = (pD + 1) % this._points.length,
            sD = this._points[pD],
            rD = this._points[DD].subtract(sD),
            LD = rD.length() + wD;
          if (zD >= wD && zD <= LD) {
            const DD = rD.normalize(),
              pD = zD - wD;
            return new KD.r(sD.x + DD.x * pD, sD.y + DD.y * pD)
          }
          wD = LD
        }
        return KD.r.Zero()
      }
      static StartingAt(DD, zD) {
        return new gD(DD, zD)
      }
    }
    class RD {
      static CreateQuadraticBezier(DD, zD, wD, pD) {
        pD = pD > 2 ? pD : 3;
        const sD = [],
          rD = (DD, zD, wD, pD) => (1 - DD) * (1 - DD) * zD + 2 * DD * (1 - DD) * wD + DD * DD * pD;
        for (let LD = 0; LD <= pD; LD++) sD.push(new KD.s(rD(LD / pD, DD.x, zD.x, wD.x), rD(LD / pD, DD.y, zD.y, wD.y), rD(LD / pD, DD.z, zD.z, wD.z)));
        return new RD(sD)
      }
      static CreateCubicBezier(DD, zD, wD, pD, sD) {
        sD = sD > 3 ? sD : 4;
        const rD = [],
          LD = (DD, zD, wD, pD, sD) => (1 - DD) * (1 - DD) * (1 - DD) * zD + 3 * DD * (1 - DD) * (1 - DD) * wD + 3 * DD * DD * (1 - DD) * pD + DD * DD * DD * sD;
        for (let cD = 0; cD <= sD; cD++) rD.push(new KD.s(LD(cD / sD, DD.x, zD.x, wD.x, pD.x), LD(cD / sD, DD.y, zD.y, wD.y, pD.y), LD(cD / sD, DD.z, zD.z, wD.z, pD.z)));
        return new RD(rD)
      }
      static CreateHermiteSpline(DD, zD, wD, pD, sD) {
        const rD = [],
          LD = 1 / sD;
        for (let cD = 0; cD <= sD; cD++) rD.push(KD.s.Hermite(DD, zD, wD, pD, cD * LD));
        return new RD(rD)
      }
      static CreateCatmullRomSpline(DD, zD, wD) {
        const pD = [],
          sD = 1 / zD;
        let rD = 0;
        if (wD) {
          const wD = DD.length;
          for (let LD = 0; LD < wD; LD++) {
            rD = 0;
            for (let cD = 0; cD < zD; cD++) pD.push(KD.s.CatmullRom(DD[LD % wD], DD[(LD + 1) % wD], DD[(LD + 2) % wD], DD[(LD + 3) % wD], rD)), rD += sD
          }
          pD.push(pD[0])
        } else {
          const wD = [];
          wD.push(DD[0].clone()), wD.push(...DD), wD.push(DD[DD.length - 1].clone());
          let LD = 0;
          for (; LD < wD.length - 3; LD++) {
            rD = 0;
            for (let DD = 0; DD < zD; DD++) pD.push(KD.s.CatmullRom(wD[LD], wD[LD + 1], wD[LD + 2], wD[LD + 3], rD)), rD += sD
          }
          LD--, pD.push(KD.s.CatmullRom(wD[LD], wD[LD + 1], wD[LD + 2], wD[LD + 3], rD))
        }
        return new RD(pD)
      }
      static ArcThru3Points(DD, zD, wD) {
        let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          sD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          rD = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const LD = [],
          cD = zD.subtract(DD),
          gD = wD.subtract(zD),
          AD = DD.subtract(wD),
          UD = KD.s.Cross(cD, gD),
          fD = UD.length();
        if (fD < Math.pow(10, -8)) return new RD(LD);
        const ID = cD.lengthSquared(),
          BD = gD.lengthSquared(),
          GD = AD.lengthSquared(),
          hD = UD.lengthSquared(),
          nD = .5 * cD.length() * gD.length() * AD.length() / fD,
          MD = -.5 * BD * KD.s.Dot(cD, AD) / hD,
          OD = -.5 * GD * KD.s.Dot(cD, gD) / hD,
          JD = -.5 * ID * KD.s.Dot(gD, AD) / hD,
          ED = DD.scale(MD).add(zD.scale(OD)).add(wD.scale(JD)),
          QD = DD.subtract(ED).normalize(),
          XD = KD.s.Cross(UD, QD).normalize();
        if (rD) {
          const zD = 2 * Math.PI / pD;
          for (let DD = 0; DD <= 2 * Math.PI; DD += zD) LD.push(ED.add(QD.scale(nD * Math.cos(DD)).add(XD.scale(nD * Math.sin(DD)))));
          LD.push(DD)
        } else {
          const zD = 1 / pD;
          let KD, rD = 0;
          do {
            KD = ED.add(QD.scale(nD * Math.cos(rD)).add(XD.scale(nD * Math.sin(rD)))), LD.push(KD), rD += zD
          } while (!KD.equalsWithEpsilon(wD, nD * zD * 1.1));
          LD.push(wD), sD && LD.push(DD)
        }
        return new RD(LD)
      }
      constructor(DD) {
        this._length = 0, this._points = DD, this._length = this._computeLength(DD)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (DD) {
        const zD = this._points[this._points.length - 1],
          wD = this._points.slice(),
          pD = DD.getPoints();
        for (let sD = 1; sD < pD.length; sD++) wD.push(pD[sD].subtract(pD[0]).add(zD));
        return new RD(wD)
      }
      _computeLength(DD) {
        let zD = 0;
        for (let wD = 1; wD < DD.length; wD++) zD += DD[wD].subtract(DD[wD - 1]).length();
        return zD
      }
    }
  },
  38658: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => KD
    });
    var pD = wD(38662);
    const sD = (DD, zD, wD) => DD ? DD.getClassName && "Mesh" === DD.getClassName() ? null : !DD.getClassName || "SubMesh" !== DD.getClassName() && "PhysicsBody" !== DD.getClassName() ? DD.clone ? DD.clone() : Array.isArray(DD) ? DD.slice() : wD && "object" === typeof DD ? {
      ...DD
    } : null : DD.clone(zD) : null;
    class KD {
      static DeepCopy(DD, zD, wD, KD) {
        let rD = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const LD = function(DD) {
          const zD = [];
          do {
            const wD = Object.getOwnPropertyNames(DD);
            for (const DD of wD) - 1 === zD.indexOf(DD) && zD.push(DD)
          } while (DD = Object.getPrototypeOf(DD));
          return zD
        }(DD);
        for (const gD of LD) {
          if ("_" === gD[0] && (!KD || -1 === KD.indexOf(gD))) continue;
          if (gD.endsWith("Observable")) continue;
          if (wD && -1 !== wD.indexOf(gD)) continue;
          const LD = DD[gD],
            RD = typeof LD;
          if ("function" !== RD) try {
            if ("object" === RD)
              if (LD instanceof Uint8Array) zD[gD] = Uint8Array.from(LD);
              else if (LD instanceof Array) {
              if (zD[gD] = [], LD.length > 0)
                if ("object" == typeof LD[0])
                  for (let DD = 0; DD < LD.length; DD++) {
                    const wD = sD(LD[DD], zD, rD); - 1 === zD[gD].indexOf(wD) && zD[gD].push(wD)
                  } else zD[gD] = LD.slice(0)
            } else zD[gD] = sD(LD, zD, rD);
            else zD[gD] = LD
          } catch (cD) {
            pD.d.Warn(cD.message)
          }
        }
      }
    }
  },
  38662: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => pD
    });
    class pD {
      static _CheckLimit(DD, zD) {
        let wD = pD._LogLimitOutputs[DD];
        return wD ? wD.current++ : (wD = {
          limit: zD,
          current: 1
        }, pD._LogLimitOutputs[DD] = wD), wD.current <= wD.limit
      }
      static _GenerateLimitMessage(DD) {
        let zD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const wD = pD._LogLimitOutputs[DD];
        if (!wD || !pD.MessageLimitReached) return;
        const sD = this._Levels[zD];
        wD.current === wD.limit && pD[sD.name](pD.MessageLimitReached.replace(/%LIMIT%/g, "" + wD.limit).replace(/%TYPE%/g, sD.name ?? ""))
      }
      static _AddLogEntry(DD) {
        pD._LogCache = DD + pD._LogCache, pD.OnNewCacheEntry && pD.OnNewCacheEntry(DD)
      }
      static _FormatMessage(DD) {
        const zD = DD => DD < 10 ? "0" + DD : "" + DD,
          wD = new Date;
        return "[" + zD(wD.getHours()) + ":" + zD(wD.getMinutes()) + ":" + zD(wD.getSeconds()) + "]: " + DD
      }
      static _LogDisabled(DD, zD) {}
      static _LogEnabled() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zD = arguments.length > 1 ? arguments[1] : void 0,
          wD = arguments.length > 2 ? arguments[2] : void 0;
        const sD = Array.isArray(zD) ? zD[0] : zD;
        if (void 0 !== wD && !pD._CheckLimit(sD, wD)) return;
        const KD = pD._FormatMessage(sD),
          rD = this._Levels[DD],
          LD = Array.isArray(zD) ? zD.slice(1) : [];
        rD.logFunc && rD.logFunc("BJS - " + KD, ...LD);
        const cD = `<div style='color:${rD.color}'>${KD}</div><br>`;
        pD._AddLogEntry(cD), pD._GenerateLimitMessage(sD, DD)
      }
      static get LogCache() {
        return pD._LogCache
      }
      static ClearLogCache() {
        pD._LogCache = "", pD._LogLimitOutputs = {}, pD.errorsCount = 0
      }
      static set LogLevels(DD) {
        pD.Log = pD._LogDisabled, pD.Warn = pD._LogDisabled, pD.Error = pD._LogDisabled;
        const zD = [pD.MessageLogLevel, pD.WarningLogLevel, pD.ErrorLogLevel];
        for (const wD of zD)
          if ((DD & wD) === wD) {
            const DD = this._Levels[wD];
            pD[DD.name] = pD._LogEnabled.bind(pD, wD)
          }
      }
    }
    pD.NoneLogLevel = 0, pD.MessageLogLevel = 1, pD.WarningLogLevel = 2, pD.ErrorLogLevel = 4, pD.AllLogLevel = 7, pD.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", pD._LogCache = "", pD._LogLimitOutputs = {}, pD._Levels = [{}, {
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
    }], pD.errorsCount = 0, pD.Log = pD._LogEnabled.bind(pD, pD.MessageLogLevel), pD.Warn = pD._LogEnabled.bind(pD, pD.WarningLogLevel), pD.Error = pD._LogEnabled.bind(pD, pD.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);