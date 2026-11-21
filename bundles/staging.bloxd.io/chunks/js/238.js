export const id = 238;
export const ids = [238];
export const modules = {
  41077: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Pd,
      e: () => Kd,
      f: () => Cd
    });
    var pd, Nd = kd(37289),
      Wd = kd(37251);
    ! function(dd) {
      dd[dd.CW = 0] = "CW", dd[dd.CCW = 1] = "CCW"
    }(pd || (pd = {}));
    class Pd {
      static Interpolate(dd, Jd, kd, pd, Nd) {
        if (0 === dd) return 0;
        const Wd = 1 - 3 * pd + 3 * Jd,
          Pd = 3 * pd - 6 * Jd,
          Zd = 3 * Jd;
        let gd = dd;
        for (let Cd = 0; Cd < 5; Cd++) {
          const Jd = gd * gd;
          gd -= (Wd * (Jd * gd) + Pd * Jd + Zd * gd - dd) * (1 / (3 * Wd * Jd + 2 * Pd * gd + Zd)), gd = Math.min(1, Math.max(0, gd))
        }
        return 3 * Math.pow(1 - gd, 2) * gd * kd + 3 * (1 - gd) * Math.pow(gd, 2) * Nd + Math.pow(gd, 3)
      }
    }
    class Zd {
      constructor(dd) {
        this._radians = dd, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(dd, Jd) {
        const kd = Jd.subtract(dd),
          pd = Math.atan2(kd.y, kd.x);
        return new Zd(pd)
      }
      static BetweenTwoVectors(dd, Jd) {
        let kd = dd.lengthSquared() * Jd.lengthSquared();
        if (0 === kd) return new Zd(Math.PI / 2);
        kd = Math.sqrt(kd);
        let pd = dd.dot(Jd) / kd;
        pd = (0, Nd.Clamp)(pd, -1, 1);
        const Wd = Math.acos(pd);
        return new Zd(Wd)
      }
      static FromRadians(dd) {
        return new Zd(dd)
      }
      static FromDegrees(dd) {
        return new Zd(dd * Math.PI / 180)
      }
    }
    class gd {
      constructor(dd, Jd, kd) {
        this.startPoint = dd, this.midPoint = Jd, this.endPoint = kd;
        const pd = Math.pow(Jd.x, 2) + Math.pow(Jd.y, 2),
          Nd = (Math.pow(dd.x, 2) + Math.pow(dd.y, 2) - pd) / 2,
          Pd = (pd - Math.pow(kd.x, 2) - Math.pow(kd.y, 2)) / 2,
          gd = (dd.x - Jd.x) * (Jd.y - kd.y) - (Jd.x - kd.x) * (dd.y - Jd.y);
        this.centerPoint = new Wd.k((Nd * (Jd.y - kd.y) - Pd * (dd.y - Jd.y)) / gd, ((dd.x - Jd.x) * Pd - (Jd.x - kd.x) * Nd) / gd), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = Zd.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const Cd = this.startAngle.degrees();
        let Kd = Zd.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          od = Zd.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        Kd - Cd > 180 && (Kd -= 360), Kd - Cd < -180 && (Kd += 360), od - Kd > 180 && (od -= 360), od - Kd < -180 && (od += 360), this.orientation = Kd - Cd < 0 ? 0 : 1, this.angle = Zd.FromDegrees(0 === this.orientation ? Cd - od : od - Cd)
      }
    }
    class Cd {
      constructor(dd, Jd) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new Wd.k(dd, Jd))
      }
      addLineTo(dd, Jd) {
        if (this.closed) return this;
        const kd = new Wd.k(dd, Jd),
          pd = this._points[this._points.length - 1];
        return this._points.push(kd), this._length += kd.subtract(pd).length(), this
      }
      addArcTo(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Pd = this._points[this._points.length - 1],
          Zd = new Wd.k(dd, Jd),
          Cd = new Wd.k(kd, pd),
          Kd = new gd(Pd, Zd, Cd);
        let od = Kd.angle.radians() / Nd;
        0 === Kd.orientation && (od *= -1);
        let ld = Kd.startAngle.radians() + od;
        for (let Wd = 0; Wd < Nd; Wd++) {
          const dd = Math.cos(ld) * Kd.radius + Kd.centerPoint.x,
            Jd = Math.sin(ld) * Kd.radius + Kd.centerPoint.y;
          this.addLineTo(dd, Jd), ld += od
        }
        return this
      }
      addQuadraticCurveTo(dd, Jd, kd, pd) {
        let Nd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Wd = (dd, Jd, kd, pd) => (1 - dd) * (1 - dd) * Jd + 2 * dd * (1 - dd) * kd + dd * dd * pd,
          Pd = this._points[this._points.length - 1];
        for (let Zd = 0; Zd <= Nd; Zd++) {
          const gd = Zd / Nd,
            Cd = Wd(gd, Pd.x, dd, kd),
            Kd = Wd(gd, Pd.y, Jd, pd);
          this.addLineTo(Cd, Kd)
        }
        return this
      }
      addBezierCurveTo(dd, Jd, kd, pd, Nd, Wd) {
        let Pd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const Zd = (dd, Jd, kd, pd, Nd) => (1 - dd) * (1 - dd) * (1 - dd) * Jd + 3 * dd * (1 - dd) * (1 - dd) * kd + 3 * dd * dd * (1 - dd) * pd + dd * dd * dd * Nd,
          gd = this._points[this._points.length - 1];
        for (let Cd = 0; Cd <= Pd; Cd++) {
          const Kd = Cd / Pd,
            od = Zd(Kd, gd.x, dd, kd, Nd),
            ld = Zd(Kd, gd.y, Jd, pd, Wd);
          this.addLineTo(od, ld)
        }
        return this
      }
      isPointInside(dd) {
        let Jd = !1;
        const kd = this._points.length;
        for (let pd = kd - 1, Nd = 0; Nd < kd; pd = Nd++) {
          let kd = this._points[pd],
            Wd = this._points[Nd],
            Pd = Wd.x - kd.x,
            Zd = Wd.y - kd.y;
          if (Math.abs(Zd) > Number.EPSILON) {
            if (Zd < 0 && (kd = this._points[Nd], Pd = -Pd, Wd = this._points[pd], Zd = -Zd), dd.y < kd.y || dd.y > Wd.y) continue;
            if (dd.y === kd.y && dd.x === kd.x) return !0;
            {
              const pd = Zd * (dd.x - kd.x) - Pd * (dd.y - kd.y);
              if (0 === pd) return !0;
              if (pd < 0) continue;
              Jd = !Jd
            }
          } else {
            if (dd.y !== kd.y) continue;
            if (Wd.x <= dd.x && dd.x <= kd.x || kd.x <= dd.x && dd.x <= Wd.x) return !0
          }
        }
        return Jd
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let dd = this._length;
        if (this.closed) {
          const Jd = this._points[this._points.length - 1];
          dd += this._points[0].subtract(Jd).length()
        }
        return dd
      }
      area() {
        const dd = this._points.length;
        let Jd = 0;
        for (let kd = dd - 1, pd = 0; pd < dd; kd = pd++) Jd += this._points[kd].x * this._points[pd].y - this._points[pd].x * this._points[kd].y;
        return .5 * Jd
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(dd) {
        if (dd < 0 || dd > 1) return Wd.k.Zero();
        const Jd = dd * this.length();
        let kd = 0;
        for (let pd = 0; pd < this._points.length; pd++) {
          const dd = (pd + 1) % this._points.length,
            Nd = this._points[pd],
            Pd = this._points[dd].subtract(Nd),
            Zd = Pd.length() + kd;
          if (Jd >= kd && Jd <= Zd) {
            const dd = Pd.normalize(),
              pd = Jd - kd;
            return new Wd.k(Nd.x + dd.x * pd, Nd.y + dd.y * pd)
          }
          kd = Zd
        }
        return Wd.k.Zero()
      }
      static StartingAt(dd, Jd) {
        return new Cd(dd, Jd)
      }
    }
    class Kd {
      static CreateQuadraticBezier(dd, Jd, kd, pd) {
        pd = pd > 2 ? pd : 3;
        const Nd = [],
          Pd = (dd, Jd, kd, pd) => (1 - dd) * (1 - dd) * Jd + 2 * dd * (1 - dd) * kd + dd * dd * pd;
        for (let Zd = 0; Zd <= pd; Zd++) Nd.push(new Wd.n(Pd(Zd / pd, dd.x, Jd.x, kd.x), Pd(Zd / pd, dd.y, Jd.y, kd.y), Pd(Zd / pd, dd.z, Jd.z, kd.z)));
        return new Kd(Nd)
      }
      static CreateCubicBezier(dd, Jd, kd, pd, Nd) {
        Nd = Nd > 3 ? Nd : 4;
        const Pd = [],
          Zd = (dd, Jd, kd, pd, Nd) => (1 - dd) * (1 - dd) * (1 - dd) * Jd + 3 * dd * (1 - dd) * (1 - dd) * kd + 3 * dd * dd * (1 - dd) * pd + dd * dd * dd * Nd;
        for (let gd = 0; gd <= Nd; gd++) Pd.push(new Wd.n(Zd(gd / Nd, dd.x, Jd.x, kd.x, pd.x), Zd(gd / Nd, dd.y, Jd.y, kd.y, pd.y), Zd(gd / Nd, dd.z, Jd.z, kd.z, pd.z)));
        return new Kd(Pd)
      }
      static CreateHermiteSpline(dd, Jd, kd, pd, Nd) {
        const Pd = [],
          Zd = 1 / Nd;
        for (let gd = 0; gd <= Nd; gd++) Pd.push(Wd.n.Hermite(dd, Jd, kd, pd, gd * Zd));
        return new Kd(Pd)
      }
      static CreateCatmullRomSpline(dd, Jd, kd) {
        const pd = [],
          Nd = 1 / Jd;
        let Pd = 0;
        if (kd) {
          const kd = dd.length;
          for (let Zd = 0; Zd < kd; Zd++) {
            Pd = 0;
            for (let gd = 0; gd < Jd; gd++) pd.push(Wd.n.CatmullRom(dd[Zd % kd], dd[(Zd + 1) % kd], dd[(Zd + 2) % kd], dd[(Zd + 3) % kd], Pd)), Pd += Nd
          }
          pd.push(pd[0])
        } else {
          const kd = [];
          kd.push(dd[0].clone()), kd.push(...dd), kd.push(dd[dd.length - 1].clone());
          let Zd = 0;
          for (; Zd < kd.length - 3; Zd++) {
            Pd = 0;
            for (let dd = 0; dd < Jd; dd++) pd.push(Wd.n.CatmullRom(kd[Zd], kd[Zd + 1], kd[Zd + 2], kd[Zd + 3], Pd)), Pd += Nd
          }
          Zd--, pd.push(Wd.n.CatmullRom(kd[Zd], kd[Zd + 1], kd[Zd + 2], kd[Zd + 3], Pd))
        }
        return new Kd(pd)
      }
      static ArcThru3Points(dd, Jd, kd) {
        let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          Nd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Pd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Zd = [],
          gd = Jd.subtract(dd),
          Cd = kd.subtract(Jd),
          od = dd.subtract(kd),
          ld = Wd.n.Cross(gd, Cd),
          Qd = ld.length();
        if (Qd < Math.pow(10, -8)) return new Kd(Zd);
        const Ld = gd.lengthSquared(),
          Od = Cd.lengthSquared(),
          ed = od.lengthSquared(),
          Rd = ld.lengthSquared(),
          Id = .5 * gd.length() * Cd.length() * od.length() / Qd,
          Gd = -.5 * Od * Wd.n.Dot(gd, od) / Rd,
          vd = -.5 * ed * Wd.n.Dot(gd, Cd) / Rd,
          xd = -.5 * Ld * Wd.n.Dot(Cd, od) / Rd,
          qd = dd.scale(Gd).add(Jd.scale(vd)).add(kd.scale(xd)),
          Bd = dd.subtract(qd).normalize(),
          sd = Wd.n.Cross(ld, Bd).normalize();
        if (Pd) {
          const Jd = 2 * Math.PI / pd;
          for (let dd = 0; dd <= 2 * Math.PI; dd += Jd) Zd.push(qd.add(Bd.scale(Id * Math.cos(dd)).add(sd.scale(Id * Math.sin(dd)))));
          Zd.push(dd)
        } else {
          const Jd = 1 / pd;
          let Wd, Pd = 0;
          do {
            Wd = qd.add(Bd.scale(Id * Math.cos(Pd)).add(sd.scale(Id * Math.sin(Pd)))), Zd.push(Wd), Pd += Jd
          } while (!Wd.equalsWithEpsilon(kd, Id * Jd * 1.1));
          Zd.push(kd), Nd && Zd.push(dd)
        }
        return new Kd(Zd)
      }
      constructor(dd) {
        this._length = 0, this._points = dd, this._length = this._computeLength(dd)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (dd) {
        const Jd = this._points[this._points.length - 1],
          kd = this._points.slice(),
          pd = dd.getPoints();
        for (let Nd = 1; Nd < pd.length; Nd++) kd.push(pd[Nd].subtract(pd[0]).add(Jd));
        return new Kd(kd)
      }
      _computeLength(dd) {
        let Jd = 0;
        for (let kd = 1; kd < dd.length; kd++) Jd += dd[kd].subtract(dd[kd - 1]).length();
        return Jd
      }
    }
  },
  38806: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Wd
    });
    var pd = kd(38812);
    const Nd = (dd, Jd, kd) => dd ? dd.getClassName && "Mesh" === dd.getClassName() ? null : !dd.getClassName || "SubMesh" !== dd.getClassName() && "PhysicsBody" !== dd.getClassName() ? dd.clone ? dd.clone() : Array.isArray(dd) ? dd.slice() : kd && "object" === typeof dd ? {
      ...dd
    } : null : dd.clone(Jd) : null;
    class Wd {
      static DeepCopy(dd, Jd, kd, Wd) {
        let Pd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Zd = function(dd) {
          const Jd = [];
          do {
            const kd = Object.getOwnPropertyNames(dd);
            for (const dd of kd) - 1 === Jd.indexOf(dd) && Jd.push(dd)
          } while (dd = Object.getPrototypeOf(dd));
          return Jd
        }(dd);
        for (const Cd of Zd) {
          if ("_" === Cd[0] && (!Wd || -1 === Wd.indexOf(Cd))) continue;
          if (Cd.endsWith("Observable")) continue;
          if (kd && -1 !== kd.indexOf(Cd)) continue;
          const Zd = dd[Cd],
            Kd = typeof Zd;
          if ("function" !== Kd) try {
            if ("object" === Kd)
              if (Zd instanceof Uint8Array) Jd[Cd] = Uint8Array.from(Zd);
              else if (Zd instanceof Array) {
              if (Jd[Cd] = [], Zd.length > 0)
                if ("object" == typeof Zd[0])
                  for (let dd = 0; dd < Zd.length; dd++) {
                    const kd = Nd(Zd[dd], Jd, Pd); - 1 === Jd[Cd].indexOf(kd) && Jd[Cd].push(kd)
                  } else Jd[Cd] = Zd.slice(0)
            } else Jd[Cd] = Nd(Zd, Jd, Pd);
            else Jd[Cd] = Zd
          } catch (gd) {
            pd.c.Warn(gd.message)
          }
        }
      }
    }
  },
  38812: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => pd
    });
    class pd {
      static _CheckLimit(dd, Jd) {
        let kd = pd._LogLimitOutputs[dd];
        return kd ? kd.current++ : (kd = {
          limit: Jd,
          current: 1
        }, pd._LogLimitOutputs[dd] = kd), kd.current <= kd.limit
      }
      static _GenerateLimitMessage(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const kd = pd._LogLimitOutputs[dd];
        if (!kd || !pd.MessageLimitReached) return;
        const Nd = this._Levels[Jd];
        kd.current === kd.limit && pd[Nd.name](pd.MessageLimitReached.replace(/%LIMIT%/g, "" + kd.limit).replace(/%TYPE%/g, Nd.name ?? ""))
      }
      static _AddLogEntry(dd) {
        pd._LogCache = dd + pd._LogCache, pd.OnNewCacheEntry && pd.OnNewCacheEntry(dd)
      }
      static _FormatMessage(dd) {
        const Jd = dd => dd < 10 ? "0" + dd : "" + dd,
          kd = new Date;
        return "[" + Jd(kd.getHours()) + ":" + Jd(kd.getMinutes()) + ":" + Jd(kd.getSeconds()) + "]: " + dd
      }
      static _LogDisabled(dd, Jd) {}
      static _LogEnabled() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Jd = arguments.length > 1 ? arguments[1] : void 0,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        const Nd = Array.isArray(Jd) ? Jd[0] : Jd;
        if (void 0 !== kd && !pd._CheckLimit(Nd, kd)) return;
        const Wd = pd._FormatMessage(Nd),
          Pd = this._Levels[dd],
          Zd = Array.isArray(Jd) ? Jd.slice(1) : [];
        Pd.logFunc && Pd.logFunc("BJS - " + Wd, ...Zd);
        const gd = `<div style='color:${Pd.color}'>${Wd}</div><br>`;
        pd._AddLogEntry(gd), pd._GenerateLimitMessage(Nd, dd)
      }
      static get LogCache() {
        return pd._LogCache
      }
      static ClearLogCache() {
        pd._LogCache = "", pd._LogLimitOutputs = {}, pd.errorsCount = 0
      }
      static set LogLevels(dd) {
        pd.Log = pd._LogDisabled, pd.Warn = pd._LogDisabled, pd.Error = pd._LogDisabled;
        const Jd = [pd.MessageLogLevel, pd.WarningLogLevel, pd.ErrorLogLevel];
        for (const kd of Jd)
          if ((dd & kd) === kd) {
            const dd = this._Levels[kd];
            pd[dd.name] = pd._LogEnabled.bind(pd, kd)
          }
      }
    }
    pd.NoneLogLevel = 0, pd.MessageLogLevel = 1, pd.WarningLogLevel = 2, pd.ErrorLogLevel = 4, pd.AllLogLevel = 7, pd.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", pd._LogCache = "", pd._LogLimitOutputs = {}, pd._Levels = [{}, {
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
    }], pd.errorsCount = 0, pd.Log = pd._LogEnabled.bind(pd, pd.MessageLogLevel), pd.Warn = pd._LogEnabled.bind(pd, pd.WarningLogLevel), pd.Error = pd._LogEnabled.bind(pd, pd.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);