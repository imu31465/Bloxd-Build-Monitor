export const id = 249;
export const ids = [249];
export const modules = {
  41182: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => IB,
      f: () => aB,
      g: () => UB
    });
    var QB, nB = zB(37208),
      dB = zB(37171);
    ! function(BB) {
      BB[BB.CW = 0] = "CW", BB[BB.CCW = 1] = "CCW"
    }(QB || (QB = {}));
    class IB {
      static Interpolate(BB, jB, zB, QB, nB) {
        if (0 === BB) return 0;
        const dB = 1 - 3 * QB + 3 * jB,
          IB = 3 * QB - 6 * jB,
          NB = 3 * jB;
        let uB = BB;
        for (let UB = 0; UB < 5; UB++) {
          const jB = uB * uB;
          uB -= (dB * (jB * uB) + IB * jB + NB * uB - BB) * (1 / (3 * dB * jB + 2 * IB * uB + NB)), uB = Math.min(1, Math.max(0, uB))
        }
        return 3 * Math.pow(1 - uB, 2) * uB * zB + 3 * (1 - uB) * Math.pow(uB, 2) * nB + Math.pow(uB, 3)
      }
    }
    class NB {
      constructor(BB) {
        this._radians = BB, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(BB, jB) {
        const zB = jB.subtract(BB),
          QB = Math.atan2(zB.y, zB.x);
        return new NB(QB)
      }
      static BetweenTwoVectors(BB, jB) {
        let zB = BB.lengthSquared() * jB.lengthSquared();
        if (0 === zB) return new NB(Math.PI / 2);
        zB = Math.sqrt(zB);
        let QB = BB.dot(jB) / zB;
        QB = (0, nB.Clamp)(QB, -1, 1);
        const dB = Math.acos(QB);
        return new NB(dB)
      }
      static FromRadians(BB) {
        return new NB(BB)
      }
      static FromDegrees(BB) {
        return new NB(BB * Math.PI / 180)
      }
    }
    class uB {
      constructor(BB, jB, zB) {
        this.startPoint = BB, this.midPoint = jB, this.endPoint = zB;
        const QB = Math.pow(jB.x, 2) + Math.pow(jB.y, 2),
          nB = (Math.pow(BB.x, 2) + Math.pow(BB.y, 2) - QB) / 2,
          IB = (QB - Math.pow(zB.x, 2) - Math.pow(zB.y, 2)) / 2,
          uB = (BB.x - jB.x) * (jB.y - zB.y) - (jB.x - zB.x) * (BB.y - jB.y);
        this.centerPoint = new dB.i((nB * (jB.y - zB.y) - IB * (BB.y - jB.y)) / uB, ((BB.x - jB.x) * IB - (jB.x - zB.x) * nB) / uB), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = NB.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const UB = this.startAngle.degrees();
        let aB = NB.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          pB = NB.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        aB - UB > 180 && (aB -= 360), aB - UB < -180 && (aB += 360), pB - aB > 180 && (pB -= 360), pB - aB < -180 && (pB += 360), this.orientation = aB - UB < 0 ? 0 : 1, this.angle = NB.FromDegrees(0 === this.orientation ? UB - pB : pB - UB)
      }
    }
    class UB {
      constructor(BB, jB) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new dB.i(BB, jB))
      }
      addLineTo(BB, jB) {
        if (this.closed) return this;
        const zB = new dB.i(BB, jB),
          QB = this._points[this._points.length - 1];
        return this._points.push(zB), this._length += zB.subtract(QB).length(), this
      }
      addArcTo(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const IB = this._points[this._points.length - 1],
          NB = new dB.i(BB, jB),
          UB = new dB.i(zB, QB),
          aB = new uB(IB, NB, UB);
        let pB = aB.angle.radians() / nB;
        0 === aB.orientation && (pB *= -1);
        let rB = aB.startAngle.radians() + pB;
        for (let dB = 0; dB < nB; dB++) {
          const BB = Math.cos(rB) * aB.radius + aB.centerPoint.x,
            jB = Math.sin(rB) * aB.radius + aB.centerPoint.y;
          this.addLineTo(BB, jB), rB += pB
        }
        return this
      }
      addQuadraticCurveTo(BB, jB, zB, QB) {
        let nB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const dB = (BB, jB, zB, QB) => (1 - BB) * (1 - BB) * jB + 2 * BB * (1 - BB) * zB + BB * BB * QB,
          IB = this._points[this._points.length - 1];
        for (let NB = 0; NB <= nB; NB++) {
          const uB = NB / nB,
            UB = dB(uB, IB.x, BB, zB),
            aB = dB(uB, IB.y, jB, QB);
          this.addLineTo(UB, aB)
        }
        return this
      }
      addBezierCurveTo(BB, jB, zB, QB, nB, dB) {
        let IB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const NB = (BB, jB, zB, QB, nB) => (1 - BB) * (1 - BB) * (1 - BB) * jB + 3 * BB * (1 - BB) * (1 - BB) * zB + 3 * BB * BB * (1 - BB) * QB + BB * BB * BB * nB,
          uB = this._points[this._points.length - 1];
        for (let UB = 0; UB <= IB; UB++) {
          const aB = UB / IB,
            pB = NB(aB, uB.x, BB, zB, nB),
            rB = NB(aB, uB.y, jB, QB, dB);
          this.addLineTo(pB, rB)
        }
        return this
      }
      isPointInside(BB) {
        let jB = !1;
        const zB = this._points.length;
        for (let QB = zB - 1, nB = 0; nB < zB; QB = nB++) {
          let zB = this._points[QB],
            dB = this._points[nB],
            IB = dB.x - zB.x,
            NB = dB.y - zB.y;
          if (Math.abs(NB) > Number.EPSILON) {
            if (NB < 0 && (zB = this._points[nB], IB = -IB, dB = this._points[QB], NB = -NB), BB.y < zB.y || BB.y > dB.y) continue;
            if (BB.y === zB.y && BB.x === zB.x) return !0;
            {
              const QB = NB * (BB.x - zB.x) - IB * (BB.y - zB.y);
              if (0 === QB) return !0;
              if (QB < 0) continue;
              jB = !jB
            }
          } else {
            if (BB.y !== zB.y) continue;
            if (dB.x <= BB.x && BB.x <= zB.x || zB.x <= BB.x && BB.x <= dB.x) return !0
          }
        }
        return jB
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let BB = this._length;
        if (this.closed) {
          const jB = this._points[this._points.length - 1];
          BB += this._points[0].subtract(jB).length()
        }
        return BB
      }
      area() {
        const BB = this._points.length;
        let jB = 0;
        for (let zB = BB - 1, QB = 0; QB < BB; zB = QB++) jB += this._points[zB].x * this._points[QB].y - this._points[QB].x * this._points[zB].y;
        return .5 * jB
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(BB) {
        if (BB < 0 || BB > 1) return dB.i.Zero();
        const jB = BB * this.length();
        let zB = 0;
        for (let QB = 0; QB < this._points.length; QB++) {
          const BB = (QB + 1) % this._points.length,
            nB = this._points[QB],
            IB = this._points[BB].subtract(nB),
            NB = IB.length() + zB;
          if (jB >= zB && jB <= NB) {
            const BB = IB.normalize(),
              QB = jB - zB;
            return new dB.i(nB.x + BB.x * QB, nB.y + BB.y * QB)
          }
          zB = NB
        }
        return dB.i.Zero()
      }
      static StartingAt(BB, jB) {
        return new UB(BB, jB)
      }
    }
    class aB {
      static CreateQuadraticBezier(BB, jB, zB, QB) {
        QB = QB > 2 ? QB : 3;
        const nB = [],
          IB = (BB, jB, zB, QB) => (1 - BB) * (1 - BB) * jB + 2 * BB * (1 - BB) * zB + BB * BB * QB;
        for (let NB = 0; NB <= QB; NB++) nB.push(new dB.m(IB(NB / QB, BB.x, jB.x, zB.x), IB(NB / QB, BB.y, jB.y, zB.y), IB(NB / QB, BB.z, jB.z, zB.z)));
        return new aB(nB)
      }
      static CreateCubicBezier(BB, jB, zB, QB, nB) {
        nB = nB > 3 ? nB : 4;
        const IB = [],
          NB = (BB, jB, zB, QB, nB) => (1 - BB) * (1 - BB) * (1 - BB) * jB + 3 * BB * (1 - BB) * (1 - BB) * zB + 3 * BB * BB * (1 - BB) * QB + BB * BB * BB * nB;
        for (let uB = 0; uB <= nB; uB++) IB.push(new dB.m(NB(uB / nB, BB.x, jB.x, zB.x, QB.x), NB(uB / nB, BB.y, jB.y, zB.y, QB.y), NB(uB / nB, BB.z, jB.z, zB.z, QB.z)));
        return new aB(IB)
      }
      static CreateHermiteSpline(BB, jB, zB, QB, nB) {
        const IB = [],
          NB = 1 / nB;
        for (let uB = 0; uB <= nB; uB++) IB.push(dB.m.Hermite(BB, jB, zB, QB, uB * NB));
        return new aB(IB)
      }
      static CreateCatmullRomSpline(BB, jB, zB) {
        const QB = [],
          nB = 1 / jB;
        let IB = 0;
        if (zB) {
          const zB = BB.length;
          for (let NB = 0; NB < zB; NB++) {
            IB = 0;
            for (let uB = 0; uB < jB; uB++) QB.push(dB.m.CatmullRom(BB[NB % zB], BB[(NB + 1) % zB], BB[(NB + 2) % zB], BB[(NB + 3) % zB], IB)), IB += nB
          }
          QB.push(QB[0])
        } else {
          const zB = [];
          zB.push(BB[0].clone()), zB.push(...BB), zB.push(BB[BB.length - 1].clone());
          let NB = 0;
          for (; NB < zB.length - 3; NB++) {
            IB = 0;
            for (let BB = 0; BB < jB; BB++) QB.push(dB.m.CatmullRom(zB[NB], zB[NB + 1], zB[NB + 2], zB[NB + 3], IB)), IB += nB
          }
          NB--, QB.push(dB.m.CatmullRom(zB[NB], zB[NB + 1], zB[NB + 2], zB[NB + 3], IB))
        }
        return new aB(QB)
      }
      static ArcThru3Points(BB, jB, zB) {
        let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          nB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          IB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const NB = [],
          uB = jB.subtract(BB),
          UB = zB.subtract(jB),
          pB = BB.subtract(zB),
          rB = dB.m.Cross(uB, UB),
          sB = rB.length();
        if (sB < Math.pow(10, -8)) return new aB(NB);
        const JB = uB.lengthSquared(),
          mB = UB.lengthSquared(),
          yB = pB.lengthSquared(),
          kB = rB.lengthSquared(),
          GB = .5 * uB.length() * UB.length() * pB.length() / sB,
          LB = -.5 * mB * dB.m.Dot(uB, pB) / kB,
          gB = -.5 * yB * dB.m.Dot(uB, UB) / kB,
          tB = -.5 * JB * dB.m.Dot(UB, pB) / kB,
          SB = BB.scale(LB).add(jB.scale(gB)).add(zB.scale(tB)),
          MB = BB.subtract(SB).normalize(),
          EB = dB.m.Cross(rB, MB).normalize();
        if (IB) {
          const jB = 2 * Math.PI / QB;
          for (let BB = 0; BB <= 2 * Math.PI; BB += jB) NB.push(SB.add(MB.scale(GB * Math.cos(BB)).add(EB.scale(GB * Math.sin(BB)))));
          NB.push(BB)
        } else {
          const jB = 1 / QB;
          let dB, IB = 0;
          do {
            dB = SB.add(MB.scale(GB * Math.cos(IB)).add(EB.scale(GB * Math.sin(IB)))), NB.push(dB), IB += jB
          } while (!dB.equalsWithEpsilon(zB, GB * jB * 1.1));
          NB.push(zB), nB && NB.push(BB)
        }
        return new aB(NB)
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
        const jB = this._points[this._points.length - 1],
          zB = this._points.slice(),
          QB = BB.getPoints();
        for (let nB = 1; nB < QB.length; nB++) zB.push(QB[nB].subtract(QB[0]).add(jB));
        return new aB(zB)
      }
      _computeLength(BB) {
        let jB = 0;
        for (let zB = 1; zB < BB.length; zB++) jB += BB[zB].subtract(BB[zB - 1]).length();
        return jB
      }
    }
  },
  38780: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => dB
    });
    var QB = zB(38783);
    const nB = (BB, jB, zB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : zB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(jB) : null;
    class dB {
      static DeepCopy(BB, jB, zB, dB) {
        let IB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const NB = function(BB) {
          const jB = [];
          do {
            const zB = Object.getOwnPropertyNames(BB);
            for (const BB of zB) - 1 === jB.indexOf(BB) && jB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return jB
        }(BB);
        for (const UB of NB) {
          if ("_" === UB[0] && (!dB || -1 === dB.indexOf(UB))) continue;
          if (UB.endsWith("Observable")) continue;
          if (zB && -1 !== zB.indexOf(UB)) continue;
          const NB = BB[UB],
            aB = typeof NB;
          if ("function" !== aB) try {
            if ("object" === aB)
              if (NB instanceof Uint8Array) jB[UB] = Uint8Array.from(NB);
              else if (NB instanceof Array) {
              if (jB[UB] = [], NB.length > 0)
                if ("object" == typeof NB[0])
                  for (let BB = 0; BB < NB.length; BB++) {
                    const zB = nB(NB[BB], jB, IB); - 1 === jB[UB].indexOf(zB) && jB[UB].push(zB)
                  } else jB[UB] = NB.slice(0)
            } else jB[UB] = nB(NB, jB, IB);
            else jB[UB] = NB
          } catch (uB) {
            QB.c.Warn(uB.message)
          }
        }
      }
    }
  },
  38783: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => QB
    });
    class QB {
      static _CheckLimit(BB, jB) {
        let zB = QB._LogLimitOutputs[BB];
        return zB ? zB.current++ : (zB = {
          limit: jB,
          current: 1
        }, QB._LogLimitOutputs[BB] = zB), zB.current <= zB.limit
      }
      static _GenerateLimitMessage(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const zB = QB._LogLimitOutputs[BB];
        if (!zB || !QB.MessageLimitReached) return;
        const nB = this._Levels[jB];
        zB.current === zB.limit && QB[nB.name](QB.MessageLimitReached.replace(/%LIMIT%/g, "" + zB.limit).replace(/%TYPE%/g, nB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        QB._LogCache = BB + QB._LogCache, QB.OnNewCacheEntry && QB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const jB = BB => BB < 10 ? "0" + BB : "" + BB,
          zB = new Date;
        return "[" + jB(zB.getHours()) + ":" + jB(zB.getMinutes()) + ":" + jB(zB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, jB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          jB = arguments.length > 1 ? arguments[1] : void 0,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        const nB = Array.isArray(jB) ? jB[0] : jB;
        if (void 0 !== zB && !QB._CheckLimit(nB, zB)) return;
        const dB = QB._FormatMessage(nB),
          IB = this._Levels[BB],
          NB = Array.isArray(jB) ? jB.slice(1) : [];
        IB.logFunc && IB.logFunc("BJS - " + dB, ...NB);
        const uB = `<div style='color:${IB.color}'>${dB}</div><br>`;
        QB._AddLogEntry(uB), QB._GenerateLimitMessage(nB, BB)
      }
      static get LogCache() {
        return QB._LogCache
      }
      static ClearLogCache() {
        QB._LogCache = "", QB._LogLimitOutputs = {}, QB.errorsCount = 0
      }
      static set LogLevels(BB) {
        QB.Log = QB._LogDisabled, QB.Warn = QB._LogDisabled, QB.Error = QB._LogDisabled;
        const jB = [QB.MessageLogLevel, QB.WarningLogLevel, QB.ErrorLogLevel];
        for (const zB of jB)
          if ((BB & zB) === zB) {
            const BB = this._Levels[zB];
            QB[BB.name] = QB._LogEnabled.bind(QB, zB)
          }
      }
    }
    QB.NoneLogLevel = 0, QB.MessageLogLevel = 1, QB.WarningLogLevel = 2, QB.ErrorLogLevel = 4, QB.AllLogLevel = 7, QB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", QB._LogCache = "", QB._LogLimitOutputs = {}, QB._Levels = [{}, {
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
    }], QB.errorsCount = 0, QB.Log = QB._LogEnabled.bind(QB, QB.MessageLogLevel), QB.Warn = QB._LogEnabled.bind(QB, QB.WarningLogLevel), QB.Error = QB._LogEnabled.bind(QB, QB.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);