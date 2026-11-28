export const id = 279;
export const ids = [279];
export const modules = {
  43045: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd,
      d: () => Qd,
      h: () => vd
    });
    var Wd, Fd = md(38663),
      Rd = md(38636);
    ! function(dd) {
      dd[dd.CW = 0] = "CW", dd[dd.CCW = 1] = "CCW"
    }(Wd || (Wd = {}));
    class Xd {
      static Interpolate(dd, Od, md, Wd, Fd) {
        if (0 === dd) return 0;
        const Rd = 1 - 3 * Wd + 3 * Od,
          Xd = 3 * Wd - 6 * Od,
          Kd = 3 * Od;
        let hd = dd;
        for (let vd = 0; vd < 5; vd++) {
          const Od = hd * hd;
          hd -= (Rd * (Od * hd) + Xd * Od + Kd * hd - dd) * (1 / (3 * Rd * Od + 2 * Xd * hd + Kd)), hd = Math.min(1, Math.max(0, hd))
        }
        return 3 * Math.pow(1 - hd, 2) * hd * md + 3 * (1 - hd) * Math.pow(hd, 2) * Fd + Math.pow(hd, 3)
      }
    }
    class Kd {
      constructor(dd) {
        this._radians = dd, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(dd, Od) {
        const md = Od.subtract(dd),
          Wd = Math.atan2(md.y, md.x);
        return new Kd(Wd)
      }
      static BetweenTwoVectors(dd, Od) {
        let md = dd.lengthSquared() * Od.lengthSquared();
        if (0 === md) return new Kd(Math.PI / 2);
        md = Math.sqrt(md);
        let Wd = dd.dot(Od) / md;
        Wd = (0, Fd.Clamp)(Wd, -1, 1);
        const Rd = Math.acos(Wd);
        return new Kd(Rd)
      }
      static FromRadians(dd) {
        return new Kd(dd)
      }
      static FromDegrees(dd) {
        return new Kd(dd * Math.PI / 180)
      }
    }
    class hd {
      constructor(dd, Od, md) {
        this.startPoint = dd, this.midPoint = Od, this.endPoint = md;
        const Wd = Math.pow(Od.x, 2) + Math.pow(Od.y, 2),
          Fd = (Math.pow(dd.x, 2) + Math.pow(dd.y, 2) - Wd) / 2,
          Xd = (Wd - Math.pow(md.x, 2) - Math.pow(md.y, 2)) / 2,
          hd = (dd.x - Od.x) * (Od.y - md.y) - (Od.x - md.x) * (dd.y - Od.y);
        this.centerPoint = new Rd.i((Fd * (Od.y - md.y) - Xd * (dd.y - Od.y)) / hd, ((dd.x - Od.x) * Xd - (Od.x - md.x) * Fd) / hd), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = Kd.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const vd = this.startAngle.degrees();
        let Qd = Kd.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          td = Kd.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        Qd - vd > 180 && (Qd -= 360), Qd - vd < -180 && (Qd += 360), td - Qd > 180 && (td -= 360), td - Qd < -180 && (td += 360), this.orientation = Qd - vd < 0 ? 0 : 1, this.angle = Kd.FromDegrees(0 === this.orientation ? vd - td : td - vd)
      }
    }
    class vd {
      constructor(dd, Od) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new Rd.i(dd, Od))
      }
      addLineTo(dd, Od) {
        if (this.closed) return this;
        const md = new Rd.i(dd, Od),
          Wd = this._points[this._points.length - 1];
        return this._points.push(md), this._length += md.subtract(Wd).length(), this
      }
      addArcTo(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Xd = this._points[this._points.length - 1],
          Kd = new Rd.i(dd, Od),
          vd = new Rd.i(md, Wd),
          Qd = new hd(Xd, Kd, vd);
        let td = Qd.angle.radians() / Fd;
        0 === Qd.orientation && (td *= -1);
        let od = Qd.startAngle.radians() + td;
        for (let Rd = 0; Rd < Fd; Rd++) {
          const dd = Math.cos(od) * Qd.radius + Qd.centerPoint.x,
            Od = Math.sin(od) * Qd.radius + Qd.centerPoint.y;
          this.addLineTo(dd, Od), od += td
        }
        return this
      }
      addQuadraticCurveTo(dd, Od, md, Wd) {
        let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Rd = (dd, Od, md, Wd) => (1 - dd) * (1 - dd) * Od + 2 * dd * (1 - dd) * md + dd * dd * Wd,
          Xd = this._points[this._points.length - 1];
        for (let Kd = 0; Kd <= Fd; Kd++) {
          const hd = Kd / Fd,
            vd = Rd(hd, Xd.x, dd, md),
            Qd = Rd(hd, Xd.y, Od, Wd);
          this.addLineTo(vd, Qd)
        }
        return this
      }
      addBezierCurveTo(dd, Od, md, Wd, Fd, Rd) {
        let Xd = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const Kd = (dd, Od, md, Wd, Fd) => (1 - dd) * (1 - dd) * (1 - dd) * Od + 3 * dd * (1 - dd) * (1 - dd) * md + 3 * dd * dd * (1 - dd) * Wd + dd * dd * dd * Fd,
          hd = this._points[this._points.length - 1];
        for (let vd = 0; vd <= Xd; vd++) {
          const Qd = vd / Xd,
            td = Kd(Qd, hd.x, dd, md, Fd),
            od = Kd(Qd, hd.y, Od, Wd, Rd);
          this.addLineTo(td, od)
        }
        return this
      }
      isPointInside(dd) {
        let Od = !1;
        const md = this._points.length;
        for (let Wd = md - 1, Fd = 0; Fd < md; Wd = Fd++) {
          let md = this._points[Wd],
            Rd = this._points[Fd],
            Xd = Rd.x - md.x,
            Kd = Rd.y - md.y;
          if (Math.abs(Kd) > Number.EPSILON) {
            if (Kd < 0 && (md = this._points[Fd], Xd = -Xd, Rd = this._points[Wd], Kd = -Kd), dd.y < md.y || dd.y > Rd.y) continue;
            if (dd.y === md.y && dd.x === md.x) return !0;
            {
              const Wd = Kd * (dd.x - md.x) - Xd * (dd.y - md.y);
              if (0 === Wd) return !0;
              if (Wd < 0) continue;
              Od = !Od
            }
          } else {
            if (dd.y !== md.y) continue;
            if (Rd.x <= dd.x && dd.x <= md.x || md.x <= dd.x && dd.x <= Rd.x) return !0
          }
        }
        return Od
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let dd = this._length;
        if (this.closed) {
          const Od = this._points[this._points.length - 1];
          dd += this._points[0].subtract(Od).length()
        }
        return dd
      }
      area() {
        const dd = this._points.length;
        let Od = 0;
        for (let md = dd - 1, Wd = 0; Wd < dd; md = Wd++) Od += this._points[md].x * this._points[Wd].y - this._points[Wd].x * this._points[md].y;
        return .5 * Od
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(dd) {
        if (dd < 0 || dd > 1) return Rd.i.Zero();
        const Od = dd * this.length();
        let md = 0;
        for (let Wd = 0; Wd < this._points.length; Wd++) {
          const dd = (Wd + 1) % this._points.length,
            Fd = this._points[Wd],
            Xd = this._points[dd].subtract(Fd),
            Kd = Xd.length() + md;
          if (Od >= md && Od <= Kd) {
            const dd = Xd.normalize(),
              Wd = Od - md;
            return new Rd.i(Fd.x + dd.x * Wd, Fd.y + dd.y * Wd)
          }
          md = Kd
        }
        return Rd.i.Zero()
      }
      static StartingAt(dd, Od) {
        return new vd(dd, Od)
      }
    }
    class Qd {
      static CreateQuadraticBezier(dd, Od, md, Wd) {
        Wd = Wd > 2 ? Wd : 3;
        const Fd = [],
          Xd = (dd, Od, md, Wd) => (1 - dd) * (1 - dd) * Od + 2 * dd * (1 - dd) * md + dd * dd * Wd;
        for (let Kd = 0; Kd <= Wd; Kd++) Fd.push(new Rd.j(Xd(Kd / Wd, dd.x, Od.x, md.x), Xd(Kd / Wd, dd.y, Od.y, md.y), Xd(Kd / Wd, dd.z, Od.z, md.z)));
        return new Qd(Fd)
      }
      static CreateCubicBezier(dd, Od, md, Wd, Fd) {
        Fd = Fd > 3 ? Fd : 4;
        const Xd = [],
          Kd = (dd, Od, md, Wd, Fd) => (1 - dd) * (1 - dd) * (1 - dd) * Od + 3 * dd * (1 - dd) * (1 - dd) * md + 3 * dd * dd * (1 - dd) * Wd + dd * dd * dd * Fd;
        for (let hd = 0; hd <= Fd; hd++) Xd.push(new Rd.j(Kd(hd / Fd, dd.x, Od.x, md.x, Wd.x), Kd(hd / Fd, dd.y, Od.y, md.y, Wd.y), Kd(hd / Fd, dd.z, Od.z, md.z, Wd.z)));
        return new Qd(Xd)
      }
      static CreateHermiteSpline(dd, Od, md, Wd, Fd) {
        const Xd = [],
          Kd = 1 / Fd;
        for (let hd = 0; hd <= Fd; hd++) Xd.push(Rd.j.Hermite(dd, Od, md, Wd, hd * Kd));
        return new Qd(Xd)
      }
      static CreateCatmullRomSpline(dd, Od, md) {
        const Wd = [],
          Fd = 1 / Od;
        let Xd = 0;
        if (md) {
          const md = dd.length;
          for (let Kd = 0; Kd < md; Kd++) {
            Xd = 0;
            for (let hd = 0; hd < Od; hd++) Wd.push(Rd.j.CatmullRom(dd[Kd % md], dd[(Kd + 1) % md], dd[(Kd + 2) % md], dd[(Kd + 3) % md], Xd)), Xd += Fd
          }
          Wd.push(Wd[0])
        } else {
          const md = [];
          md.push(dd[0].clone()), md.push(...dd), md.push(dd[dd.length - 1].clone());
          let Kd = 0;
          for (; Kd < md.length - 3; Kd++) {
            Xd = 0;
            for (let dd = 0; dd < Od; dd++) Wd.push(Rd.j.CatmullRom(md[Kd], md[Kd + 1], md[Kd + 2], md[Kd + 3], Xd)), Xd += Fd
          }
          Kd--, Wd.push(Rd.j.CatmullRom(md[Kd], md[Kd + 1], md[Kd + 2], md[Kd + 3], Xd))
        }
        return new Qd(Wd)
      }
      static ArcThru3Points(dd, Od, md) {
        let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          Fd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Xd = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Kd = [],
          hd = Od.subtract(dd),
          vd = md.subtract(Od),
          td = dd.subtract(md),
          od = Rd.j.Cross(hd, vd),
          Nd = od.length();
        if (Nd < Math.pow(10, -8)) return new Qd(Kd);
        const qd = hd.lengthSquared(),
          Hd = vd.lengthSquared(),
          yd = td.lengthSquared(),
          bd = od.lengthSquared(),
          Td = .5 * hd.length() * vd.length() * td.length() / Nd,
          pd = -.5 * Hd * Rd.j.Dot(hd, td) / bd,
          Yd = -.5 * yd * Rd.j.Dot(hd, vd) / bd,
          gd = -.5 * qd * Rd.j.Dot(vd, td) / bd,
          wd = dd.scale(pd).add(Od.scale(Yd)).add(md.scale(gd)),
          Ed = dd.subtract(wd).normalize(),
          Jd = Rd.j.Cross(od, Ed).normalize();
        if (Xd) {
          const Od = 2 * Math.PI / Wd;
          for (let dd = 0; dd <= 2 * Math.PI; dd += Od) Kd.push(wd.add(Ed.scale(Td * Math.cos(dd)).add(Jd.scale(Td * Math.sin(dd)))));
          Kd.push(dd)
        } else {
          const Od = 1 / Wd;
          let Rd, Xd = 0;
          do {
            Rd = wd.add(Ed.scale(Td * Math.cos(Xd)).add(Jd.scale(Td * Math.sin(Xd)))), Kd.push(Rd), Xd += Od
          } while (!Rd.equalsWithEpsilon(md, Td * Od * 1.1));
          Kd.push(md), Fd && Kd.push(dd)
        }
        return new Qd(Kd)
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
        const Od = this._points[this._points.length - 1],
          md = this._points.slice(),
          Wd = dd.getPoints();
        for (let Fd = 1; Fd < Wd.length; Fd++) md.push(Wd[Fd].subtract(Wd[0]).add(Od));
        return new Qd(md)
      }
      _computeLength(dd) {
        let Od = 0;
        for (let md = 1; md < dd.length; md++) Od += dd[md].subtract(dd[md - 1]).length();
        return Od
      }
    }
  },
  40260: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd
    });
    var Wd = md(40262);
    const Fd = (dd, Od, md) => dd ? dd.getClassName && "Mesh" === dd.getClassName() ? null : !dd.getClassName || "SubMesh" !== dd.getClassName() && "PhysicsBody" !== dd.getClassName() ? dd.clone ? dd.clone() : Array.isArray(dd) ? dd.slice() : md && "object" === typeof dd ? {
      ...dd
    } : null : dd.clone(Od) : null;
    class Rd {
      static DeepCopy(dd, Od, md, Rd) {
        let Xd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Kd = function(dd) {
          const Od = [];
          do {
            const md = Object.getOwnPropertyNames(dd);
            for (const dd of md) - 1 === Od.indexOf(dd) && Od.push(dd)
          } while (dd = Object.getPrototypeOf(dd));
          return Od
        }(dd);
        for (const vd of Kd) {
          if ("_" === vd[0] && (!Rd || -1 === Rd.indexOf(vd))) continue;
          if (vd.endsWith("Observable")) continue;
          if (md && -1 !== md.indexOf(vd)) continue;
          const Kd = dd[vd],
            Qd = typeof Kd;
          if ("function" !== Qd) try {
            if ("object" === Qd)
              if (Kd instanceof Uint8Array) Od[vd] = Uint8Array.from(Kd);
              else if (Kd instanceof Array) {
              if (Od[vd] = [], Kd.length > 0)
                if ("object" == typeof Kd[0])
                  for (let dd = 0; dd < Kd.length; dd++) {
                    const md = Fd(Kd[dd], Od, Xd); - 1 === Od[vd].indexOf(md) && Od[vd].push(md)
                  } else Od[vd] = Kd.slice(0)
            } else Od[vd] = Fd(Kd, Od, Xd);
            else Od[vd] = Kd
          } catch (hd) {
            Wd.c.Warn(hd.message)
          }
        }
      }
    }
  },
  40262: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd
    });
    class Wd {
      static _CheckLimit(dd, Od) {
        let md = Wd._LogLimitOutputs[dd];
        return md ? md.current++ : (md = {
          limit: Od,
          current: 1
        }, Wd._LogLimitOutputs[dd] = md), md.current <= md.limit
      }
      static _GenerateLimitMessage(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const md = Wd._LogLimitOutputs[dd];
        if (!md || !Wd.MessageLimitReached) return;
        const Fd = this._Levels[Od];
        md.current === md.limit && Wd[Fd.name](Wd.MessageLimitReached.replace(/%LIMIT%/g, "" + md.limit).replace(/%TYPE%/g, Fd.name ?? ""))
      }
      static _AddLogEntry(dd) {
        Wd._LogCache = dd + Wd._LogCache, Wd.OnNewCacheEntry && Wd.OnNewCacheEntry(dd)
      }
      static _FormatMessage(dd) {
        const Od = dd => dd < 10 ? "0" + dd : "" + dd,
          md = new Date;
        return "[" + Od(md.getHours()) + ":" + Od(md.getMinutes()) + ":" + Od(md.getSeconds()) + "]: " + dd
      }
      static _LogDisabled(dd, Od) {}
      static _LogEnabled() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Od = arguments.length > 1 ? arguments[1] : void 0,
          md = arguments.length > 2 ? arguments[2] : void 0;
        const Fd = Array.isArray(Od) ? Od[0] : Od;
        if (void 0 !== md && !Wd._CheckLimit(Fd, md)) return;
        const Rd = Wd._FormatMessage(Fd),
          Xd = this._Levels[dd],
          Kd = Array.isArray(Od) ? Od.slice(1) : [];
        Xd.logFunc && Xd.logFunc("BJS - " + Rd, ...Kd);
        const hd = `<div style='color:${Xd.color}'>${Rd}</div><br>`;
        Wd._AddLogEntry(hd), Wd._GenerateLimitMessage(Fd, dd)
      }
      static get LogCache() {
        return Wd._LogCache
      }
      static ClearLogCache() {
        Wd._LogCache = "", Wd._LogLimitOutputs = {}, Wd.errorsCount = 0
      }
      static set LogLevels(dd) {
        Wd.Log = Wd._LogDisabled, Wd.Warn = Wd._LogDisabled, Wd.Error = Wd._LogDisabled;
        const Od = [Wd.MessageLogLevel, Wd.WarningLogLevel, Wd.ErrorLogLevel];
        for (const md of Od)
          if ((dd & md) === md) {
            const dd = this._Levels[md];
            Wd[dd.name] = Wd._LogEnabled.bind(Wd, md)
          }
      }
    }
    Wd.NoneLogLevel = 0, Wd.MessageLogLevel = 1, Wd.WarningLogLevel = 2, Wd.ErrorLogLevel = 4, Wd.AllLogLevel = 7, Wd.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Wd._LogCache = "", Wd._LogLimitOutputs = {}, Wd._Levels = [{}, {
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
    }], Wd.errorsCount = 0, Wd.Log = Wd._LogEnabled.bind(Wd, Wd.MessageLogLevel), Wd.Warn = Wd._LogEnabled.bind(Wd, Wd.WarningLogLevel), Wd.Error = Wd._LogEnabled.bind(Wd, Wd.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);