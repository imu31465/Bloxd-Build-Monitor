export const id = 249;
export const ids = [249];
export const modules = {
  41115: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => GB,
      e: () => nB,
      h: () => cB
    });
    var TB, JB = ZB(37158),
      oB = ZB(37120);
    ! function(BB) {
      BB[BB.CW = 0] = "CW", BB[BB.CCW = 1] = "CCW"
    }(TB || (TB = {}));
    class GB {
      static Interpolate(BB, IB, ZB, TB, JB) {
        if (0 === BB) return 0;
        const oB = 1 - 3 * TB + 3 * IB,
          GB = 3 * TB - 6 * IB,
          vB = 3 * IB;
        let kB = BB;
        for (let cB = 0; cB < 5; cB++) {
          const IB = kB * kB;
          kB -= (oB * (IB * kB) + GB * IB + vB * kB - BB) * (1 / (3 * oB * IB + 2 * GB * kB + vB)), kB = Math.min(1, Math.max(0, kB))
        }
        return 3 * Math.pow(1 - kB, 2) * kB * ZB + 3 * (1 - kB) * Math.pow(kB, 2) * JB + Math.pow(kB, 3)
      }
    }
    class vB {
      constructor(BB) {
        this._radians = BB, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(BB, IB) {
        const ZB = IB.subtract(BB),
          TB = Math.atan2(ZB.y, ZB.x);
        return new vB(TB)
      }
      static BetweenTwoVectors(BB, IB) {
        let ZB = BB.lengthSquared() * IB.lengthSquared();
        if (0 === ZB) return new vB(Math.PI / 2);
        ZB = Math.sqrt(ZB);
        let TB = BB.dot(IB) / ZB;
        TB = (0, JB.Clamp)(TB, -1, 1);
        const oB = Math.acos(TB);
        return new vB(oB)
      }
      static FromRadians(BB) {
        return new vB(BB)
      }
      static FromDegrees(BB) {
        return new vB(BB * Math.PI / 180)
      }
    }
    class kB {
      constructor(BB, IB, ZB) {
        this.startPoint = BB, this.midPoint = IB, this.endPoint = ZB;
        const TB = Math.pow(IB.x, 2) + Math.pow(IB.y, 2),
          JB = (Math.pow(BB.x, 2) + Math.pow(BB.y, 2) - TB) / 2,
          GB = (TB - Math.pow(ZB.x, 2) - Math.pow(ZB.y, 2)) / 2,
          kB = (BB.x - IB.x) * (IB.y - ZB.y) - (IB.x - ZB.x) * (BB.y - IB.y);
        this.centerPoint = new oB.p((JB * (IB.y - ZB.y) - GB * (BB.y - IB.y)) / kB, ((BB.x - IB.x) * GB - (IB.x - ZB.x) * JB) / kB), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = vB.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const cB = this.startAngle.degrees();
        let nB = vB.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          hB = vB.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        nB - cB > 180 && (nB -= 360), nB - cB < -180 && (nB += 360), hB - nB > 180 && (hB -= 360), hB - nB < -180 && (hB += 360), this.orientation = nB - cB < 0 ? 0 : 1, this.angle = vB.FromDegrees(0 === this.orientation ? cB - hB : hB - cB)
      }
    }
    class cB {
      constructor(BB, IB) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new oB.p(BB, IB))
      }
      addLineTo(BB, IB) {
        if (this.closed) return this;
        const ZB = new oB.p(BB, IB),
          TB = this._points[this._points.length - 1];
        return this._points.push(ZB), this._length += ZB.subtract(TB).length(), this
      }
      addArcTo(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const GB = this._points[this._points.length - 1],
          vB = new oB.p(BB, IB),
          cB = new oB.p(ZB, TB),
          nB = new kB(GB, vB, cB);
        let hB = nB.angle.radians() / JB;
        0 === nB.orientation && (hB *= -1);
        let zB = nB.startAngle.radians() + hB;
        for (let oB = 0; oB < JB; oB++) {
          const BB = Math.cos(zB) * nB.radius + nB.centerPoint.x,
            IB = Math.sin(zB) * nB.radius + nB.centerPoint.y;
          this.addLineTo(BB, IB), zB += hB
        }
        return this
      }
      addQuadraticCurveTo(BB, IB, ZB, TB) {
        let JB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const oB = (BB, IB, ZB, TB) => (1 - BB) * (1 - BB) * IB + 2 * BB * (1 - BB) * ZB + BB * BB * TB,
          GB = this._points[this._points.length - 1];
        for (let vB = 0; vB <= JB; vB++) {
          const kB = vB / JB,
            cB = oB(kB, GB.x, BB, ZB),
            nB = oB(kB, GB.y, IB, TB);
          this.addLineTo(cB, nB)
        }
        return this
      }
      addBezierCurveTo(BB, IB, ZB, TB, JB, oB) {
        let GB = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const vB = (BB, IB, ZB, TB, JB) => (1 - BB) * (1 - BB) * (1 - BB) * IB + 3 * BB * (1 - BB) * (1 - BB) * ZB + 3 * BB * BB * (1 - BB) * TB + BB * BB * BB * JB,
          kB = this._points[this._points.length - 1];
        for (let cB = 0; cB <= GB; cB++) {
          const nB = cB / GB,
            hB = vB(nB, kB.x, BB, ZB, JB),
            zB = vB(nB, kB.y, IB, TB, oB);
          this.addLineTo(hB, zB)
        }
        return this
      }
      isPointInside(BB) {
        let IB = !1;
        const ZB = this._points.length;
        for (let TB = ZB - 1, JB = 0; JB < ZB; TB = JB++) {
          let ZB = this._points[TB],
            oB = this._points[JB],
            GB = oB.x - ZB.x,
            vB = oB.y - ZB.y;
          if (Math.abs(vB) > Number.EPSILON) {
            if (vB < 0 && (ZB = this._points[JB], GB = -GB, oB = this._points[TB], vB = -vB), BB.y < ZB.y || BB.y > oB.y) continue;
            if (BB.y === ZB.y && BB.x === ZB.x) return !0;
            {
              const TB = vB * (BB.x - ZB.x) - GB * (BB.y - ZB.y);
              if (0 === TB) return !0;
              if (TB < 0) continue;
              IB = !IB
            }
          } else {
            if (BB.y !== ZB.y) continue;
            if (oB.x <= BB.x && BB.x <= ZB.x || ZB.x <= BB.x && BB.x <= oB.x) return !0
          }
        }
        return IB
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let BB = this._length;
        if (this.closed) {
          const IB = this._points[this._points.length - 1];
          BB += this._points[0].subtract(IB).length()
        }
        return BB
      }
      area() {
        const BB = this._points.length;
        let IB = 0;
        for (let ZB = BB - 1, TB = 0; TB < BB; ZB = TB++) IB += this._points[ZB].x * this._points[TB].y - this._points[TB].x * this._points[ZB].y;
        return .5 * IB
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(BB) {
        if (BB < 0 || BB > 1) return oB.p.Zero();
        const IB = BB * this.length();
        let ZB = 0;
        for (let TB = 0; TB < this._points.length; TB++) {
          const BB = (TB + 1) % this._points.length,
            JB = this._points[TB],
            GB = this._points[BB].subtract(JB),
            vB = GB.length() + ZB;
          if (IB >= ZB && IB <= vB) {
            const BB = GB.normalize(),
              TB = IB - ZB;
            return new oB.p(JB.x + BB.x * TB, JB.y + BB.y * TB)
          }
          ZB = vB
        }
        return oB.p.Zero()
      }
      static StartingAt(BB, IB) {
        return new cB(BB, IB)
      }
    }
    class nB {
      static CreateQuadraticBezier(BB, IB, ZB, TB) {
        TB = TB > 2 ? TB : 3;
        const JB = [],
          GB = (BB, IB, ZB, TB) => (1 - BB) * (1 - BB) * IB + 2 * BB * (1 - BB) * ZB + BB * BB * TB;
        for (let vB = 0; vB <= TB; vB++) JB.push(new oB.s(GB(vB / TB, BB.x, IB.x, ZB.x), GB(vB / TB, BB.y, IB.y, ZB.y), GB(vB / TB, BB.z, IB.z, ZB.z)));
        return new nB(JB)
      }
      static CreateCubicBezier(BB, IB, ZB, TB, JB) {
        JB = JB > 3 ? JB : 4;
        const GB = [],
          vB = (BB, IB, ZB, TB, JB) => (1 - BB) * (1 - BB) * (1 - BB) * IB + 3 * BB * (1 - BB) * (1 - BB) * ZB + 3 * BB * BB * (1 - BB) * TB + BB * BB * BB * JB;
        for (let kB = 0; kB <= JB; kB++) GB.push(new oB.s(vB(kB / JB, BB.x, IB.x, ZB.x, TB.x), vB(kB / JB, BB.y, IB.y, ZB.y, TB.y), vB(kB / JB, BB.z, IB.z, ZB.z, TB.z)));
        return new nB(GB)
      }
      static CreateHermiteSpline(BB, IB, ZB, TB, JB) {
        const GB = [],
          vB = 1 / JB;
        for (let kB = 0; kB <= JB; kB++) GB.push(oB.s.Hermite(BB, IB, ZB, TB, kB * vB));
        return new nB(GB)
      }
      static CreateCatmullRomSpline(BB, IB, ZB) {
        const TB = [],
          JB = 1 / IB;
        let GB = 0;
        if (ZB) {
          const ZB = BB.length;
          for (let vB = 0; vB < ZB; vB++) {
            GB = 0;
            for (let kB = 0; kB < IB; kB++) TB.push(oB.s.CatmullRom(BB[vB % ZB], BB[(vB + 1) % ZB], BB[(vB + 2) % ZB], BB[(vB + 3) % ZB], GB)), GB += JB
          }
          TB.push(TB[0])
        } else {
          const ZB = [];
          ZB.push(BB[0].clone()), ZB.push(...BB), ZB.push(BB[BB.length - 1].clone());
          let vB = 0;
          for (; vB < ZB.length - 3; vB++) {
            GB = 0;
            for (let BB = 0; BB < IB; BB++) TB.push(oB.s.CatmullRom(ZB[vB], ZB[vB + 1], ZB[vB + 2], ZB[vB + 3], GB)), GB += JB
          }
          vB--, TB.push(oB.s.CatmullRom(ZB[vB], ZB[vB + 1], ZB[vB + 2], ZB[vB + 3], GB))
        }
        return new nB(TB)
      }
      static ArcThru3Points(BB, IB, ZB) {
        let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          JB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          GB = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const vB = [],
          kB = IB.subtract(BB),
          cB = ZB.subtract(IB),
          hB = BB.subtract(ZB),
          zB = oB.s.Cross(kB, cB),
          FB = zB.length();
        if (FB < Math.pow(10, -8)) return new nB(vB);
        const NB = kB.lengthSquared(),
          gB = cB.lengthSquared(),
          qB = hB.lengthSquared(),
          yB = zB.lengthSquared(),
          UB = .5 * kB.length() * cB.length() * hB.length() / FB,
          WB = -.5 * gB * oB.s.Dot(kB, hB) / yB,
          dB = -.5 * qB * oB.s.Dot(kB, cB) / yB,
          CB = -.5 * NB * oB.s.Dot(cB, hB) / yB,
          QB = BB.scale(WB).add(IB.scale(dB)).add(ZB.scale(CB)),
          sB = BB.subtract(QB).normalize(),
          wB = oB.s.Cross(zB, sB).normalize();
        if (GB) {
          const IB = 2 * Math.PI / TB;
          for (let BB = 0; BB <= 2 * Math.PI; BB += IB) vB.push(QB.add(sB.scale(UB * Math.cos(BB)).add(wB.scale(UB * Math.sin(BB)))));
          vB.push(BB)
        } else {
          const IB = 1 / TB;
          let oB, GB = 0;
          do {
            oB = QB.add(sB.scale(UB * Math.cos(GB)).add(wB.scale(UB * Math.sin(GB)))), vB.push(oB), GB += IB
          } while (!oB.equalsWithEpsilon(ZB, UB * IB * 1.1));
          vB.push(ZB), JB && vB.push(BB)
        }
        return new nB(vB)
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
        const IB = this._points[this._points.length - 1],
          ZB = this._points.slice(),
          TB = BB.getPoints();
        for (let JB = 1; JB < TB.length; JB++) ZB.push(TB[JB].subtract(TB[0]).add(IB));
        return new nB(ZB)
      }
      _computeLength(BB) {
        let IB = 0;
        for (let ZB = 1; ZB < BB.length; ZB++) IB += BB[ZB].subtract(BB[ZB - 1]).length();
        return IB
      }
    }
  },
  38714: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => oB
    });
    var TB = ZB(38718);
    const JB = (BB, IB, ZB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : ZB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(IB) : null;
    class oB {
      static DeepCopy(BB, IB, ZB, oB) {
        let GB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const vB = function(BB) {
          const IB = [];
          do {
            const ZB = Object.getOwnPropertyNames(BB);
            for (const BB of ZB) - 1 === IB.indexOf(BB) && IB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return IB
        }(BB);
        for (const cB of vB) {
          if ("_" === cB[0] && (!oB || -1 === oB.indexOf(cB))) continue;
          if (cB.endsWith("Observable")) continue;
          if (ZB && -1 !== ZB.indexOf(cB)) continue;
          const vB = BB[cB],
            nB = typeof vB;
          if ("function" !== nB) try {
            if ("object" === nB)
              if (vB instanceof Uint8Array) IB[cB] = Uint8Array.from(vB);
              else if (vB instanceof Array) {
              if (IB[cB] = [], vB.length > 0)
                if ("object" == typeof vB[0])
                  for (let BB = 0; BB < vB.length; BB++) {
                    const ZB = JB(vB[BB], IB, GB); - 1 === IB[cB].indexOf(ZB) && IB[cB].push(ZB)
                  } else IB[cB] = vB.slice(0)
            } else IB[cB] = JB(vB, IB, GB);
            else IB[cB] = vB
          } catch (kB) {
            TB.d.Warn(kB.message)
          }
        }
      }
    }
  },
  38718: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => TB
    });
    class TB {
      static _CheckLimit(BB, IB) {
        let ZB = TB._LogLimitOutputs[BB];
        return ZB ? ZB.current++ : (ZB = {
          limit: IB,
          current: 1
        }, TB._LogLimitOutputs[BB] = ZB), ZB.current <= ZB.limit
      }
      static _GenerateLimitMessage(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ZB = TB._LogLimitOutputs[BB];
        if (!ZB || !TB.MessageLimitReached) return;
        const JB = this._Levels[IB];
        ZB.current === ZB.limit && TB[JB.name](TB.MessageLimitReached.replace(/%LIMIT%/g, "" + ZB.limit).replace(/%TYPE%/g, JB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        TB._LogCache = BB + TB._LogCache, TB.OnNewCacheEntry && TB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const IB = BB => BB < 10 ? "0" + BB : "" + BB,
          ZB = new Date;
        return "[" + IB(ZB.getHours()) + ":" + IB(ZB.getMinutes()) + ":" + IB(ZB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, IB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          IB = arguments.length > 1 ? arguments[1] : void 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        const JB = Array.isArray(IB) ? IB[0] : IB;
        if (void 0 !== ZB && !TB._CheckLimit(JB, ZB)) return;
        const oB = TB._FormatMessage(JB),
          GB = this._Levels[BB],
          vB = Array.isArray(IB) ? IB.slice(1) : [];
        GB.logFunc && GB.logFunc("BJS - " + oB, ...vB);
        const kB = `<div style='color:${GB.color}'>${oB}</div><br>`;
        TB._AddLogEntry(kB), TB._GenerateLimitMessage(JB, BB)
      }
      static get LogCache() {
        return TB._LogCache
      }
      static ClearLogCache() {
        TB._LogCache = "", TB._LogLimitOutputs = {}, TB.errorsCount = 0
      }
      static set LogLevels(BB) {
        TB.Log = TB._LogDisabled, TB.Warn = TB._LogDisabled, TB.Error = TB._LogDisabled;
        const IB = [TB.MessageLogLevel, TB.WarningLogLevel, TB.ErrorLogLevel];
        for (const ZB of IB)
          if ((BB & ZB) === ZB) {
            const BB = this._Levels[ZB];
            TB[BB.name] = TB._LogEnabled.bind(TB, ZB)
          }
      }
    }
    TB.NoneLogLevel = 0, TB.MessageLogLevel = 1, TB.WarningLogLevel = 2, TB.ErrorLogLevel = 4, TB.AllLogLevel = 7, TB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", TB._LogCache = "", TB._LogLimitOutputs = {}, TB._Levels = [{}, {
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
    }], TB.errorsCount = 0, TB.Log = TB._LogEnabled.bind(TB, TB.MessageLogLevel), TB.Warn = TB._LogEnabled.bind(TB, TB.WarningLogLevel), TB.Error = TB._LogEnabled.bind(TB, TB.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);