export const id = 249;
export const ids = [249];
export const modules = {
  41293: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => mt,
      e: () => Xt,
      i: () => Ht
    });
    var Ot, qt = Vt(37372),
      Dt = Vt(37336);
    ! function(tt) {
      tt[tt.CW = 0] = "CW", tt[tt.CCW = 1] = "CCW"
    }(Ot || (Ot = {}));
    class mt {
      static Interpolate(tt, et, Vt, Ot, qt) {
        if (0 === tt) return 0;
        const Dt = 1 - 3 * Ot + 3 * et,
          mt = 3 * Ot - 6 * et,
          dt = 3 * et;
        let jt = tt;
        for (let Ht = 0; Ht < 5; Ht++) {
          const et = jt * jt;
          jt -= (Dt * (et * jt) + mt * et + dt * jt - tt) * (1 / (3 * Dt * et + 2 * mt * jt + dt)), jt = Math.min(1, Math.max(0, jt))
        }
        return 3 * Math.pow(1 - jt, 2) * jt * Vt + 3 * (1 - jt) * Math.pow(jt, 2) * qt + Math.pow(jt, 3)
      }
    }
    class dt {
      constructor(tt) {
        this._radians = tt, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(tt, et) {
        const Vt = et.subtract(tt),
          Ot = Math.atan2(Vt.y, Vt.x);
        return new dt(Ot)
      }
      static BetweenTwoVectors(tt, et) {
        let Vt = tt.lengthSquared() * et.lengthSquared();
        if (0 === Vt) return new dt(Math.PI / 2);
        Vt = Math.sqrt(Vt);
        let Ot = tt.dot(et) / Vt;
        Ot = (0, qt.Clamp)(Ot, -1, 1);
        const Dt = Math.acos(Ot);
        return new dt(Dt)
      }
      static FromRadians(tt) {
        return new dt(tt)
      }
      static FromDegrees(tt) {
        return new dt(tt * Math.PI / 180)
      }
    }
    class jt {
      constructor(tt, et, Vt) {
        this.startPoint = tt, this.midPoint = et, this.endPoint = Vt;
        const Ot = Math.pow(et.x, 2) + Math.pow(et.y, 2),
          qt = (Math.pow(tt.x, 2) + Math.pow(tt.y, 2) - Ot) / 2,
          mt = (Ot - Math.pow(Vt.x, 2) - Math.pow(Vt.y, 2)) / 2,
          jt = (tt.x - et.x) * (et.y - Vt.y) - (et.x - Vt.x) * (tt.y - et.y);
        this.centerPoint = new Dt.m((qt * (et.y - Vt.y) - mt * (tt.y - et.y)) / jt, ((tt.x - et.x) * mt - (et.x - Vt.x) * qt) / jt), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = dt.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const Ht = this.startAngle.degrees();
        let Xt = dt.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          Qt = dt.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        Xt - Ht > 180 && (Xt -= 360), Xt - Ht < -180 && (Xt += 360), Qt - Xt > 180 && (Qt -= 360), Qt - Xt < -180 && (Qt += 360), this.orientation = Xt - Ht < 0 ? 0 : 1, this.angle = dt.FromDegrees(0 === this.orientation ? Ht - Qt : Qt - Ht)
      }
    }
    class Ht {
      constructor(tt, et) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new Dt.m(tt, et))
      }
      addLineTo(tt, et) {
        if (this.closed) return this;
        const Vt = new Dt.m(tt, et),
          Ot = this._points[this._points.length - 1];
        return this._points.push(Vt), this._length += Vt.subtract(Ot).length(), this
      }
      addArcTo(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const mt = this._points[this._points.length - 1],
          dt = new Dt.m(tt, et),
          Ht = new Dt.m(Vt, Ot),
          Xt = new jt(mt, dt, Ht);
        let Qt = Xt.angle.radians() / qt;
        0 === Xt.orientation && (Qt *= -1);
        let lt = Xt.startAngle.radians() + Qt;
        for (let Dt = 0; Dt < qt; Dt++) {
          const tt = Math.cos(lt) * Xt.radius + Xt.centerPoint.x,
            et = Math.sin(lt) * Xt.radius + Xt.centerPoint.y;
          this.addLineTo(tt, et), lt += Qt
        }
        return this
      }
      addQuadraticCurveTo(tt, et, Vt, Ot) {
        let qt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Dt = (tt, et, Vt, Ot) => (1 - tt) * (1 - tt) * et + 2 * tt * (1 - tt) * Vt + tt * tt * Ot,
          mt = this._points[this._points.length - 1];
        for (let dt = 0; dt <= qt; dt++) {
          const jt = dt / qt,
            Ht = Dt(jt, mt.x, tt, Vt),
            Xt = Dt(jt, mt.y, et, Ot);
          this.addLineTo(Ht, Xt)
        }
        return this
      }
      addBezierCurveTo(tt, et, Vt, Ot, qt, Dt) {
        let mt = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const dt = (tt, et, Vt, Ot, qt) => (1 - tt) * (1 - tt) * (1 - tt) * et + 3 * tt * (1 - tt) * (1 - tt) * Vt + 3 * tt * tt * (1 - tt) * Ot + tt * tt * tt * qt,
          jt = this._points[this._points.length - 1];
        for (let Ht = 0; Ht <= mt; Ht++) {
          const Xt = Ht / mt,
            Qt = dt(Xt, jt.x, tt, Vt, qt),
            lt = dt(Xt, jt.y, et, Ot, Dt);
          this.addLineTo(Qt, lt)
        }
        return this
      }
      isPointInside(tt) {
        let et = !1;
        const Vt = this._points.length;
        for (let Ot = Vt - 1, qt = 0; qt < Vt; Ot = qt++) {
          let Vt = this._points[Ot],
            Dt = this._points[qt],
            mt = Dt.x - Vt.x,
            dt = Dt.y - Vt.y;
          if (Math.abs(dt) > Number.EPSILON) {
            if (dt < 0 && (Vt = this._points[qt], mt = -mt, Dt = this._points[Ot], dt = -dt), tt.y < Vt.y || tt.y > Dt.y) continue;
            if (tt.y === Vt.y && tt.x === Vt.x) return !0;
            {
              const Ot = dt * (tt.x - Vt.x) - mt * (tt.y - Vt.y);
              if (0 === Ot) return !0;
              if (Ot < 0) continue;
              et = !et
            }
          } else {
            if (tt.y !== Vt.y) continue;
            if (Dt.x <= tt.x && tt.x <= Vt.x || Vt.x <= tt.x && tt.x <= Dt.x) return !0
          }
        }
        return et
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let tt = this._length;
        if (this.closed) {
          const et = this._points[this._points.length - 1];
          tt += this._points[0].subtract(et).length()
        }
        return tt
      }
      area() {
        const tt = this._points.length;
        let et = 0;
        for (let Vt = tt - 1, Ot = 0; Ot < tt; Vt = Ot++) et += this._points[Vt].x * this._points[Ot].y - this._points[Ot].x * this._points[Vt].y;
        return .5 * et
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(tt) {
        if (tt < 0 || tt > 1) return Dt.m.Zero();
        const et = tt * this.length();
        let Vt = 0;
        for (let Ot = 0; Ot < this._points.length; Ot++) {
          const tt = (Ot + 1) % this._points.length,
            qt = this._points[Ot],
            mt = this._points[tt].subtract(qt),
            dt = mt.length() + Vt;
          if (et >= Vt && et <= dt) {
            const tt = mt.normalize(),
              Ot = et - Vt;
            return new Dt.m(qt.x + tt.x * Ot, qt.y + tt.y * Ot)
          }
          Vt = dt
        }
        return Dt.m.Zero()
      }
      static StartingAt(tt, et) {
        return new Ht(tt, et)
      }
    }
    class Xt {
      static CreateQuadraticBezier(tt, et, Vt, Ot) {
        Ot = Ot > 2 ? Ot : 3;
        const qt = [],
          mt = (tt, et, Vt, Ot) => (1 - tt) * (1 - tt) * et + 2 * tt * (1 - tt) * Vt + tt * tt * Ot;
        for (let dt = 0; dt <= Ot; dt++) qt.push(new Dt.n(mt(dt / Ot, tt.x, et.x, Vt.x), mt(dt / Ot, tt.y, et.y, Vt.y), mt(dt / Ot, tt.z, et.z, Vt.z)));
        return new Xt(qt)
      }
      static CreateCubicBezier(tt, et, Vt, Ot, qt) {
        qt = qt > 3 ? qt : 4;
        const mt = [],
          dt = (tt, et, Vt, Ot, qt) => (1 - tt) * (1 - tt) * (1 - tt) * et + 3 * tt * (1 - tt) * (1 - tt) * Vt + 3 * tt * tt * (1 - tt) * Ot + tt * tt * tt * qt;
        for (let jt = 0; jt <= qt; jt++) mt.push(new Dt.n(dt(jt / qt, tt.x, et.x, Vt.x, Ot.x), dt(jt / qt, tt.y, et.y, Vt.y, Ot.y), dt(jt / qt, tt.z, et.z, Vt.z, Ot.z)));
        return new Xt(mt)
      }
      static CreateHermiteSpline(tt, et, Vt, Ot, qt) {
        const mt = [],
          dt = 1 / qt;
        for (let jt = 0; jt <= qt; jt++) mt.push(Dt.n.Hermite(tt, et, Vt, Ot, jt * dt));
        return new Xt(mt)
      }
      static CreateCatmullRomSpline(tt, et, Vt) {
        const Ot = [],
          qt = 1 / et;
        let mt = 0;
        if (Vt) {
          const Vt = tt.length;
          for (let dt = 0; dt < Vt; dt++) {
            mt = 0;
            for (let jt = 0; jt < et; jt++) Ot.push(Dt.n.CatmullRom(tt[dt % Vt], tt[(dt + 1) % Vt], tt[(dt + 2) % Vt], tt[(dt + 3) % Vt], mt)), mt += qt
          }
          Ot.push(Ot[0])
        } else {
          const Vt = [];
          Vt.push(tt[0].clone()), Vt.push(...tt), Vt.push(tt[tt.length - 1].clone());
          let dt = 0;
          for (; dt < Vt.length - 3; dt++) {
            mt = 0;
            for (let tt = 0; tt < et; tt++) Ot.push(Dt.n.CatmullRom(Vt[dt], Vt[dt + 1], Vt[dt + 2], Vt[dt + 3], mt)), mt += qt
          }
          dt--, Ot.push(Dt.n.CatmullRom(Vt[dt], Vt[dt + 1], Vt[dt + 2], Vt[dt + 3], mt))
        }
        return new Xt(Ot)
      }
      static ArcThru3Points(tt, et, Vt) {
        let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          qt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          mt = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const dt = [],
          jt = et.subtract(tt),
          Ht = Vt.subtract(et),
          Qt = tt.subtract(Vt),
          lt = Dt.n.Cross(jt, Ht),
          Et = lt.length();
        if (Et < Math.pow(10, -8)) return new Xt(dt);
        const ft = jt.lengthSquared(),
          wt = Ht.lengthSquared(),
          yt = Qt.lengthSquared(),
          Nt = lt.lengthSquared(),
          Mt = .5 * jt.length() * Ht.length() * Qt.length() / Et,
          bt = -.5 * wt * Dt.n.Dot(jt, Qt) / Nt,
          Jt = -.5 * yt * Dt.n.Dot(jt, Ht) / Nt,
          Ct = -.5 * ft * Dt.n.Dot(Ht, Qt) / Nt,
          ut = tt.scale(bt).add(et.scale(Jt)).add(Vt.scale(Ct)),
          Kt = tt.subtract(ut).normalize(),
          ht = Dt.n.Cross(lt, Kt).normalize();
        if (mt) {
          const et = 2 * Math.PI / Ot;
          for (let tt = 0; tt <= 2 * Math.PI; tt += et) dt.push(ut.add(Kt.scale(Mt * Math.cos(tt)).add(ht.scale(Mt * Math.sin(tt)))));
          dt.push(tt)
        } else {
          const et = 1 / Ot;
          let Dt, mt = 0;
          do {
            Dt = ut.add(Kt.scale(Mt * Math.cos(mt)).add(ht.scale(Mt * Math.sin(mt)))), dt.push(Dt), mt += et
          } while (!Dt.equalsWithEpsilon(Vt, Mt * et * 1.1));
          dt.push(Vt), qt && dt.push(tt)
        }
        return new Xt(dt)
      }
      constructor(tt) {
        this._length = 0, this._points = tt, this._length = this._computeLength(tt)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (tt) {
        const et = this._points[this._points.length - 1],
          Vt = this._points.slice(),
          Ot = tt.getPoints();
        for (let qt = 1; qt < Ot.length; qt++) Vt.push(Ot[qt].subtract(Ot[0]).add(et));
        return new Xt(Vt)
      }
      _computeLength(tt) {
        let et = 0;
        for (let Vt = 1; Vt < tt.length; Vt++) et += tt[Vt].subtract(tt[Vt - 1]).length();
        return et
      }
    }
  },
  38897: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt
    });
    var Ot = Vt(38899);
    const qt = (tt, et, Vt) => tt ? tt.getClassName && "Mesh" === tt.getClassName() ? null : !tt.getClassName || "SubMesh" !== tt.getClassName() && "PhysicsBody" !== tt.getClassName() ? tt.clone ? tt.clone() : Array.isArray(tt) ? tt.slice() : Vt && "object" === typeof tt ? {
      ...tt
    } : null : tt.clone(et) : null;
    class Dt {
      static DeepCopy(tt, et, Vt, Dt) {
        let mt = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const dt = function(tt) {
          const et = [];
          do {
            const Vt = Object.getOwnPropertyNames(tt);
            for (const tt of Vt) - 1 === et.indexOf(tt) && et.push(tt)
          } while (tt = Object.getPrototypeOf(tt));
          return et
        }(tt);
        for (const Ht of dt) {
          if ("_" === Ht[0] && (!Dt || -1 === Dt.indexOf(Ht))) continue;
          if (Ht.endsWith("Observable")) continue;
          if (Vt && -1 !== Vt.indexOf(Ht)) continue;
          const dt = tt[Ht],
            Xt = typeof dt;
          if ("function" !== Xt) try {
            if ("object" === Xt)
              if (dt instanceof Uint8Array) et[Ht] = Uint8Array.from(dt);
              else if (dt instanceof Array) {
              if (et[Ht] = [], dt.length > 0)
                if ("object" == typeof dt[0])
                  for (let tt = 0; tt < dt.length; tt++) {
                    const Vt = qt(dt[tt], et, mt); - 1 === et[Ht].indexOf(Vt) && et[Ht].push(Vt)
                  } else et[Ht] = dt.slice(0)
            } else et[Ht] = qt(dt, et, mt);
            else et[Ht] = dt
          } catch (jt) {
            Ot.d.Warn(jt.message)
          }
        }
      }
    }
  },
  38899: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot
    });
    class Ot {
      static _CheckLimit(tt, et) {
        let Vt = Ot._LogLimitOutputs[tt];
        return Vt ? Vt.current++ : (Vt = {
          limit: et,
          current: 1
        }, Ot._LogLimitOutputs[tt] = Vt), Vt.current <= Vt.limit
      }
      static _GenerateLimitMessage(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Vt = Ot._LogLimitOutputs[tt];
        if (!Vt || !Ot.MessageLimitReached) return;
        const qt = this._Levels[et];
        Vt.current === Vt.limit && Ot[qt.name](Ot.MessageLimitReached.replace(/%LIMIT%/g, "" + Vt.limit).replace(/%TYPE%/g, qt.name ?? ""))
      }
      static _AddLogEntry(tt) {
        Ot._LogCache = tt + Ot._LogCache, Ot.OnNewCacheEntry && Ot.OnNewCacheEntry(tt)
      }
      static _FormatMessage(tt) {
        const et = tt => tt < 10 ? "0" + tt : "" + tt,
          Vt = new Date;
        return "[" + et(Vt.getHours()) + ":" + et(Vt.getMinutes()) + ":" + et(Vt.getSeconds()) + "]: " + tt
      }
      static _LogDisabled(tt, et) {}
      static _LogEnabled() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          et = arguments.length > 1 ? arguments[1] : void 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        const qt = Array.isArray(et) ? et[0] : et;
        if (void 0 !== Vt && !Ot._CheckLimit(qt, Vt)) return;
        const Dt = Ot._FormatMessage(qt),
          mt = this._Levels[tt],
          dt = Array.isArray(et) ? et.slice(1) : [];
        mt.logFunc && mt.logFunc("BJS - " + Dt, ...dt);
        const jt = `<div style='color:${mt.color}'>${Dt}</div><br>`;
        Ot._AddLogEntry(jt), Ot._GenerateLimitMessage(qt, tt)
      }
      static get LogCache() {
        return Ot._LogCache
      }
      static ClearLogCache() {
        Ot._LogCache = "", Ot._LogLimitOutputs = {}, Ot.errorsCount = 0
      }
      static set LogLevels(tt) {
        Ot.Log = Ot._LogDisabled, Ot.Warn = Ot._LogDisabled, Ot.Error = Ot._LogDisabled;
        const et = [Ot.MessageLogLevel, Ot.WarningLogLevel, Ot.ErrorLogLevel];
        for (const Vt of et)
          if ((tt & Vt) === Vt) {
            const tt = this._Levels[Vt];
            Ot[tt.name] = Ot._LogEnabled.bind(Ot, Vt)
          }
      }
    }
    Ot.NoneLogLevel = 0, Ot.MessageLogLevel = 1, Ot.WarningLogLevel = 2, Ot.ErrorLogLevel = 4, Ot.AllLogLevel = 7, Ot.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Ot._LogCache = "", Ot._LogLimitOutputs = {}, Ot._Levels = [{}, {
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
    }], Ot.errorsCount = 0, Ot.Log = Ot._LogEnabled.bind(Ot, Ot.MessageLogLevel), Ot.Warn = Ot._LogEnabled.bind(Ot, Ot.WarningLogLevel), Ot.Error = Ot._LogEnabled.bind(Ot, Ot.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);