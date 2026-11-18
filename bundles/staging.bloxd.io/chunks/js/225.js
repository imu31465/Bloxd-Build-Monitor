export const id = 225;
export const ids = [225];
export const modules = {
  39938: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => lB,
      g: () => oB,
      j: () => gB
    });
    var VB, yB = dB(36157),
      pB = dB(36126);
    ! function(BB) {
      BB[BB.CW = 0] = "CW", BB[BB.CCW = 1] = "CCW"
    }(VB || (VB = {}));
    class lB {
      static Interpolate(BB, TB, dB, VB, yB) {
        if (0 === BB) return 0;
        const pB = 1 - 3 * VB + 3 * TB,
          lB = 3 * VB - 6 * TB,
          JB = 3 * TB;
        let YB = BB;
        for (let gB = 0; gB < 5; gB++) {
          const TB = YB * YB;
          YB -= (pB * (TB * YB) + lB * TB + JB * YB - BB) * (1 / (3 * pB * TB + 2 * lB * YB + JB)), YB = Math.min(1, Math.max(0, YB))
        }
        return 3 * Math.pow(1 - YB, 2) * YB * dB + 3 * (1 - YB) * Math.pow(YB, 2) * yB + Math.pow(YB, 3)
      }
    }
    class JB {
      constructor(BB) {
        this._radians = BB, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(BB, TB) {
        const dB = TB.subtract(BB),
          VB = Math.atan2(dB.y, dB.x);
        return new JB(VB)
      }
      static BetweenTwoVectors(BB, TB) {
        let dB = BB.lengthSquared() * TB.lengthSquared();
        if (0 === dB) return new JB(Math.PI / 2);
        dB = Math.sqrt(dB);
        let VB = BB.dot(TB) / dB;
        VB = (0, yB.Clamp)(VB, -1, 1);
        const pB = Math.acos(VB);
        return new JB(pB)
      }
      static FromRadians(BB) {
        return new JB(BB)
      }
      static FromDegrees(BB) {
        return new JB(BB * Math.PI / 180)
      }
    }
    class YB {
      constructor(BB, TB, dB) {
        this.startPoint = BB, this.midPoint = TB, this.endPoint = dB;
        const VB = Math.pow(TB.x, 2) + Math.pow(TB.y, 2),
          yB = (Math.pow(BB.x, 2) + Math.pow(BB.y, 2) - VB) / 2,
          lB = (VB - Math.pow(dB.x, 2) - Math.pow(dB.y, 2)) / 2,
          YB = (BB.x - TB.x) * (TB.y - dB.y) - (TB.x - dB.x) * (BB.y - TB.y);
        this.centerPoint = new pB.l((yB * (TB.y - dB.y) - lB * (BB.y - TB.y)) / YB, ((BB.x - TB.x) * lB - (TB.x - dB.x) * yB) / YB), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = JB.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const gB = this.startAngle.degrees();
        let oB = JB.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          kB = JB.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        oB - gB > 180 && (oB -= 360), oB - gB < -180 && (oB += 360), kB - oB > 180 && (kB -= 360), kB - oB < -180 && (kB += 360), this.orientation = oB - gB < 0 ? 0 : 1, this.angle = JB.FromDegrees(0 === this.orientation ? gB - kB : kB - gB)
      }
    }
    class gB {
      constructor(BB, TB) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new pB.l(BB, TB))
      }
      addLineTo(BB, TB) {
        if (this.closed) return this;
        const dB = new pB.l(BB, TB),
          VB = this._points[this._points.length - 1];
        return this._points.push(dB), this._length += dB.subtract(VB).length(), this
      }
      addArcTo(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const lB = this._points[this._points.length - 1],
          JB = new pB.l(BB, TB),
          gB = new pB.l(dB, VB),
          oB = new YB(lB, JB, gB);
        let kB = oB.angle.radians() / yB;
        0 === oB.orientation && (kB *= -1);
        let LB = oB.startAngle.radians() + kB;
        for (let pB = 0; pB < yB; pB++) {
          const BB = Math.cos(LB) * oB.radius + oB.centerPoint.x,
            TB = Math.sin(LB) * oB.radius + oB.centerPoint.y;
          this.addLineTo(BB, TB), LB += kB
        }
        return this
      }
      addQuadraticCurveTo(BB, TB, dB, VB) {
        let yB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const pB = (BB, TB, dB, VB) => (1 - BB) * (1 - BB) * TB + 2 * BB * (1 - BB) * dB + BB * BB * VB,
          lB = this._points[this._points.length - 1];
        for (let JB = 0; JB <= yB; JB++) {
          const YB = JB / yB,
            gB = pB(YB, lB.x, BB, dB),
            oB = pB(YB, lB.y, TB, VB);
          this.addLineTo(gB, oB)
        }
        return this
      }
      addBezierCurveTo(BB, TB, dB, VB, yB, pB) {
        let lB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const JB = (BB, TB, dB, VB, yB) => (1 - BB) * (1 - BB) * (1 - BB) * TB + 3 * BB * (1 - BB) * (1 - BB) * dB + 3 * BB * BB * (1 - BB) * VB + BB * BB * BB * yB,
          YB = this._points[this._points.length - 1];
        for (let gB = 0; gB <= lB; gB++) {
          const oB = gB / lB,
            kB = JB(oB, YB.x, BB, dB, yB),
            LB = JB(oB, YB.y, TB, VB, pB);
          this.addLineTo(kB, LB)
        }
        return this
      }
      isPointInside(BB) {
        let TB = !1;
        const dB = this._points.length;
        for (let VB = dB - 1, yB = 0; yB < dB; VB = yB++) {
          let dB = this._points[VB],
            pB = this._points[yB],
            lB = pB.x - dB.x,
            JB = pB.y - dB.y;
          if (Math.abs(JB) > Number.EPSILON) {
            if (JB < 0 && (dB = this._points[yB], lB = -lB, pB = this._points[VB], JB = -JB), BB.y < dB.y || BB.y > pB.y) continue;
            if (BB.y === dB.y && BB.x === dB.x) return !0;
            {
              const VB = JB * (BB.x - dB.x) - lB * (BB.y - dB.y);
              if (0 === VB) return !0;
              if (VB < 0) continue;
              TB = !TB
            }
          } else {
            if (BB.y !== dB.y) continue;
            if (pB.x <= BB.x && BB.x <= dB.x || dB.x <= BB.x && BB.x <= pB.x) return !0
          }
        }
        return TB
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let BB = this._length;
        if (this.closed) {
          const TB = this._points[this._points.length - 1];
          BB += this._points[0].subtract(TB).length()
        }
        return BB
      }
      area() {
        const BB = this._points.length;
        let TB = 0;
        for (let dB = BB - 1, VB = 0; VB < BB; dB = VB++) TB += this._points[dB].x * this._points[VB].y - this._points[VB].x * this._points[dB].y;
        return .5 * TB
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(BB) {
        if (BB < 0 || BB > 1) return pB.l.Zero();
        const TB = BB * this.length();
        let dB = 0;
        for (let VB = 0; VB < this._points.length; VB++) {
          const BB = (VB + 1) % this._points.length,
            yB = this._points[VB],
            lB = this._points[BB].subtract(yB),
            JB = lB.length() + dB;
          if (TB >= dB && TB <= JB) {
            const BB = lB.normalize(),
              VB = TB - dB;
            return new pB.l(yB.x + BB.x * VB, yB.y + BB.y * VB)
          }
          dB = JB
        }
        return pB.l.Zero()
      }
      static StartingAt(BB, TB) {
        return new gB(BB, TB)
      }
    }
    class oB {
      static CreateQuadraticBezier(BB, TB, dB, VB) {
        VB = VB > 2 ? VB : 3;
        const yB = [],
          lB = (BB, TB, dB, VB) => (1 - BB) * (1 - BB) * TB + 2 * BB * (1 - BB) * dB + BB * BB * VB;
        for (let JB = 0; JB <= VB; JB++) yB.push(new pB.p(lB(JB / VB, BB.x, TB.x, dB.x), lB(JB / VB, BB.y, TB.y, dB.y), lB(JB / VB, BB.z, TB.z, dB.z)));
        return new oB(yB)
      }
      static CreateCubicBezier(BB, TB, dB, VB, yB) {
        yB = yB > 3 ? yB : 4;
        const lB = [],
          JB = (BB, TB, dB, VB, yB) => (1 - BB) * (1 - BB) * (1 - BB) * TB + 3 * BB * (1 - BB) * (1 - BB) * dB + 3 * BB * BB * (1 - BB) * VB + BB * BB * BB * yB;
        for (let YB = 0; YB <= yB; YB++) lB.push(new pB.p(JB(YB / yB, BB.x, TB.x, dB.x, VB.x), JB(YB / yB, BB.y, TB.y, dB.y, VB.y), JB(YB / yB, BB.z, TB.z, dB.z, VB.z)));
        return new oB(lB)
      }
      static CreateHermiteSpline(BB, TB, dB, VB, yB) {
        const lB = [],
          JB = 1 / yB;
        for (let YB = 0; YB <= yB; YB++) lB.push(pB.p.Hermite(BB, TB, dB, VB, YB * JB));
        return new oB(lB)
      }
      static CreateCatmullRomSpline(BB, TB, dB) {
        const VB = [],
          yB = 1 / TB;
        let lB = 0;
        if (dB) {
          const dB = BB.length;
          for (let JB = 0; JB < dB; JB++) {
            lB = 0;
            for (let YB = 0; YB < TB; YB++) VB.push(pB.p.CatmullRom(BB[JB % dB], BB[(JB + 1) % dB], BB[(JB + 2) % dB], BB[(JB + 3) % dB], lB)), lB += yB
          }
          VB.push(VB[0])
        } else {
          const dB = [];
          dB.push(BB[0].clone()), dB.push(...BB), dB.push(BB[BB.length - 1].clone());
          let JB = 0;
          for (; JB < dB.length - 3; JB++) {
            lB = 0;
            for (let BB = 0; BB < TB; BB++) VB.push(pB.p.CatmullRom(dB[JB], dB[JB + 1], dB[JB + 2], dB[JB + 3], lB)), lB += yB
          }
          JB--, VB.push(pB.p.CatmullRom(dB[JB], dB[JB + 1], dB[JB + 2], dB[JB + 3], lB))
        }
        return new oB(VB)
      }
      static ArcThru3Points(BB, TB, dB) {
        let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          yB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          lB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const JB = [],
          YB = TB.subtract(BB),
          gB = dB.subtract(TB),
          kB = BB.subtract(dB),
          LB = pB.p.Cross(YB, gB),
          OB = LB.length();
        if (OB < Math.pow(10, -8)) return new oB(JB);
        const DB = YB.lengthSquared(),
          uB = gB.lengthSquared(),
          HB = kB.lengthSquared(),
          EB = LB.lengthSquared(),
          vB = .5 * YB.length() * gB.length() * kB.length() / OB,
          mB = -.5 * uB * pB.p.Dot(YB, kB) / EB,
          iB = -.5 * HB * pB.p.Dot(YB, gB) / EB,
          NB = -.5 * DB * pB.p.Dot(gB, kB) / EB,
          tB = BB.scale(mB).add(TB.scale(iB)).add(dB.scale(NB)),
          fB = BB.subtract(tB).normalize(),
          sB = pB.p.Cross(LB, fB).normalize();
        if (lB) {
          const TB = 2 * Math.PI / VB;
          for (let BB = 0; BB <= 2 * Math.PI; BB += TB) JB.push(tB.add(fB.scale(vB * Math.cos(BB)).add(sB.scale(vB * Math.sin(BB)))));
          JB.push(BB)
        } else {
          const TB = 1 / VB;
          let pB, lB = 0;
          do {
            pB = tB.add(fB.scale(vB * Math.cos(lB)).add(sB.scale(vB * Math.sin(lB)))), JB.push(pB), lB += TB
          } while (!pB.equalsWithEpsilon(dB, vB * TB * 1.1));
          JB.push(dB), yB && JB.push(BB)
        }
        return new oB(JB)
      }
      constructor(BB) {
        this._length = 0, this._points = BB, this._length = this._computeLength(BB)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (BB) {
        const TB = this._points[this._points.length - 1],
          dB = this._points.slice(),
          VB = BB.getPoints();
        for (let yB = 1; yB < VB.length; yB++) dB.push(VB[yB].subtract(VB[0]).add(TB));
        return new oB(dB)
      }
      _computeLength(BB) {
        let TB = 0;
        for (let dB = 1; dB < BB.length; dB++) TB += BB[dB].subtract(BB[dB - 1]).length();
        return TB
      }
    }
  },
  37646: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB
    });
    var VB = dB(37651);
    const yB = (BB, TB, dB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : dB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(TB) : null;
    class pB {
      static DeepCopy(BB, TB, dB, pB) {
        let lB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const JB = function(BB) {
          const TB = [];
          do {
            const dB = Object.getOwnPropertyNames(BB);
            for (const BB of dB) - 1 === TB.indexOf(BB) && TB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return TB
        }(BB);
        for (const gB of JB) {
          if ("_" === gB[0] && (!pB || -1 === pB.indexOf(gB))) continue;
          if (gB.endsWith("Observable")) continue;
          if (dB && -1 !== dB.indexOf(gB)) continue;
          const JB = BB[gB],
            oB = typeof JB;
          if ("function" !== oB) try {
            if ("object" === oB)
              if (JB instanceof Uint8Array) TB[gB] = Uint8Array.from(JB);
              else if (JB instanceof Array) {
              if (TB[gB] = [], JB.length > 0)
                if ("object" == typeof JB[0])
                  for (let BB = 0; BB < JB.length; BB++) {
                    const dB = yB(JB[BB], TB, lB); - 1 === TB[gB].indexOf(dB) && TB[gB].push(dB)
                  } else TB[gB] = JB.slice(0)
            } else TB[gB] = yB(JB, TB, lB);
            else TB[gB] = JB
          } catch (YB) {
            VB.b.Warn(YB.message)
          }
        }
      }
    }
  },
  37651: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => VB
    });
    class VB {
      static _CheckLimit(BB, TB) {
        let dB = VB._LogLimitOutputs[BB];
        return dB ? dB.current++ : (dB = {
          limit: TB,
          current: 1
        }, VB._LogLimitOutputs[BB] = dB), dB.current <= dB.limit
      }
      static _GenerateLimitMessage(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const dB = VB._LogLimitOutputs[BB];
        if (!dB || !VB.MessageLimitReached) return;
        const yB = this._Levels[TB];
        dB.current === dB.limit && VB[yB.name](VB.MessageLimitReached.replace(/%LIMIT%/g, "" + dB.limit).replace(/%TYPE%/g, yB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        VB._LogCache = BB + VB._LogCache, VB.OnNewCacheEntry && VB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const TB = BB => BB < 10 ? "0" + BB : "" + BB,
          dB = new Date;
        return "[" + TB(dB.getHours()) + ":" + TB(dB.getMinutes()) + ":" + TB(dB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, TB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          TB = arguments.length > 1 ? arguments[1] : void 0,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        const yB = Array.isArray(TB) ? TB[0] : TB;
        if (void 0 !== dB && !VB._CheckLimit(yB, dB)) return;
        const pB = VB._FormatMessage(yB),
          lB = this._Levels[BB],
          JB = Array.isArray(TB) ? TB.slice(1) : [];
        lB.logFunc && lB.logFunc("BJS - " + pB, ...JB);
        const YB = `<div style='color:${lB.color}'>${pB}</div><br>`;
        VB._AddLogEntry(YB), VB._GenerateLimitMessage(yB, BB)
      }
      static get LogCache() {
        return VB._LogCache
      }
      static ClearLogCache() {
        VB._LogCache = "", VB._LogLimitOutputs = {}, VB.errorsCount = 0
      }
      static set LogLevels(BB) {
        VB.Log = VB._LogDisabled, VB.Warn = VB._LogDisabled, VB.Error = VB._LogDisabled;
        const TB = [VB.MessageLogLevel, VB.WarningLogLevel, VB.ErrorLogLevel];
        for (const dB of TB)
          if ((BB & dB) === dB) {
            const BB = this._Levels[dB];
            VB[BB.name] = VB._LogEnabled.bind(VB, dB)
          }
      }
    }
    VB.NoneLogLevel = 0, VB.MessageLogLevel = 1, VB.WarningLogLevel = 2, VB.ErrorLogLevel = 4, VB.AllLogLevel = 7, VB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", VB._LogCache = "", VB._LogLimitOutputs = {}, VB._Levels = [{}, {
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
    }], VB.errorsCount = 0, VB.Log = VB._LogEnabled.bind(VB, VB.MessageLogLevel), VB.Warn = VB._LogEnabled.bind(VB, VB.WarningLogLevel), VB.Error = VB._LogEnabled.bind(VB, VB.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);