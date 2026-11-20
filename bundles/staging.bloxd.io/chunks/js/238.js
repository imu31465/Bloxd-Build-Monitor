export const id = 238;
export const ids = [238];
export const modules = {
  40387: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => gv,
      e: () => lv,
      h: () => Nv
    });
    var hv, Sv = Pv(36620),
      ev = Pv(36594);
    ! function(vv) {
      vv[vv.CW = 0] = "CW", vv[vv.CCW = 1] = "CCW"
    }(hv || (hv = {}));
    class gv {
      static Interpolate(vv, zv, Pv, hv, Sv) {
        if (0 === vv) return 0;
        const ev = 1 - 3 * hv + 3 * zv,
          gv = 3 * hv - 6 * zv,
          pv = 3 * zv;
        let dv = vv;
        for (let Nv = 0; Nv < 5; Nv++) {
          const zv = dv * dv;
          dv -= (ev * (zv * dv) + gv * zv + pv * dv - vv) * (1 / (3 * ev * zv + 2 * gv * dv + pv)), dv = Math.min(1, Math.max(0, dv))
        }
        return 3 * Math.pow(1 - dv, 2) * dv * Pv + 3 * (1 - dv) * Math.pow(dv, 2) * Sv + Math.pow(dv, 3)
      }
    }
    class pv {
      constructor(vv) {
        this._radians = vv, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(vv, zv) {
        const Pv = zv.subtract(vv),
          hv = Math.atan2(Pv.y, Pv.x);
        return new pv(hv)
      }
      static BetweenTwoVectors(vv, zv) {
        let Pv = vv.lengthSquared() * zv.lengthSquared();
        if (0 === Pv) return new pv(Math.PI / 2);
        Pv = Math.sqrt(Pv);
        let hv = vv.dot(zv) / Pv;
        hv = (0, Sv.Clamp)(hv, -1, 1);
        const ev = Math.acos(hv);
        return new pv(ev)
      }
      static FromRadians(vv) {
        return new pv(vv)
      }
      static FromDegrees(vv) {
        return new pv(vv * Math.PI / 180)
      }
    }
    class dv {
      constructor(vv, zv, Pv) {
        this.startPoint = vv, this.midPoint = zv, this.endPoint = Pv;
        const hv = Math.pow(zv.x, 2) + Math.pow(zv.y, 2),
          Sv = (Math.pow(vv.x, 2) + Math.pow(vv.y, 2) - hv) / 2,
          gv = (hv - Math.pow(Pv.x, 2) - Math.pow(Pv.y, 2)) / 2,
          dv = (vv.x - zv.x) * (zv.y - Pv.y) - (zv.x - Pv.x) * (vv.y - zv.y);
        this.centerPoint = new ev.j((Sv * (zv.y - Pv.y) - gv * (vv.y - zv.y)) / dv, ((vv.x - zv.x) * gv - (zv.x - Pv.x) * Sv) / dv), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = pv.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const Nv = this.startAngle.degrees();
        let lv = pv.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          Tv = pv.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        lv - Nv > 180 && (lv -= 360), lv - Nv < -180 && (lv += 360), Tv - lv > 180 && (Tv -= 360), Tv - lv < -180 && (Tv += 360), this.orientation = lv - Nv < 0 ? 0 : 1, this.angle = pv.FromDegrees(0 === this.orientation ? Nv - Tv : Tv - Nv)
      }
    }
    class Nv {
      constructor(vv, zv) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new ev.j(vv, zv))
      }
      addLineTo(vv, zv) {
        if (this.closed) return this;
        const Pv = new ev.j(vv, zv),
          hv = this._points[this._points.length - 1];
        return this._points.push(Pv), this._length += Pv.subtract(hv).length(), this
      }
      addArcTo(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const gv = this._points[this._points.length - 1],
          pv = new ev.j(vv, zv),
          Nv = new ev.j(Pv, hv),
          lv = new dv(gv, pv, Nv);
        let Tv = lv.angle.radians() / Sv;
        0 === lv.orientation && (Tv *= -1);
        let Wv = lv.startAngle.radians() + Tv;
        for (let ev = 0; ev < Sv; ev++) {
          const vv = Math.cos(Wv) * lv.radius + lv.centerPoint.x,
            zv = Math.sin(Wv) * lv.radius + lv.centerPoint.y;
          this.addLineTo(vv, zv), Wv += Tv
        }
        return this
      }
      addQuadraticCurveTo(vv, zv, Pv, hv) {
        let Sv = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const ev = (vv, zv, Pv, hv) => (1 - vv) * (1 - vv) * zv + 2 * vv * (1 - vv) * Pv + vv * vv * hv,
          gv = this._points[this._points.length - 1];
        for (let pv = 0; pv <= Sv; pv++) {
          const dv = pv / Sv,
            Nv = ev(dv, gv.x, vv, Pv),
            lv = ev(dv, gv.y, zv, hv);
          this.addLineTo(Nv, lv)
        }
        return this
      }
      addBezierCurveTo(vv, zv, Pv, hv, Sv, ev) {
        let gv = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const pv = (vv, zv, Pv, hv, Sv) => (1 - vv) * (1 - vv) * (1 - vv) * zv + 3 * vv * (1 - vv) * (1 - vv) * Pv + 3 * vv * vv * (1 - vv) * hv + vv * vv * vv * Sv,
          dv = this._points[this._points.length - 1];
        for (let Nv = 0; Nv <= gv; Nv++) {
          const lv = Nv / gv,
            Tv = pv(lv, dv.x, vv, Pv, Sv),
            Wv = pv(lv, dv.y, zv, hv, ev);
          this.addLineTo(Tv, Wv)
        }
        return this
      }
      isPointInside(vv) {
        let zv = !1;
        const Pv = this._points.length;
        for (let hv = Pv - 1, Sv = 0; Sv < Pv; hv = Sv++) {
          let Pv = this._points[hv],
            ev = this._points[Sv],
            gv = ev.x - Pv.x,
            pv = ev.y - Pv.y;
          if (Math.abs(pv) > Number.EPSILON) {
            if (pv < 0 && (Pv = this._points[Sv], gv = -gv, ev = this._points[hv], pv = -pv), vv.y < Pv.y || vv.y > ev.y) continue;
            if (vv.y === Pv.y && vv.x === Pv.x) return !0;
            {
              const hv = pv * (vv.x - Pv.x) - gv * (vv.y - Pv.y);
              if (0 === hv) return !0;
              if (hv < 0) continue;
              zv = !zv
            }
          } else {
            if (vv.y !== Pv.y) continue;
            if (ev.x <= vv.x && vv.x <= Pv.x || Pv.x <= vv.x && vv.x <= ev.x) return !0
          }
        }
        return zv
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let vv = this._length;
        if (this.closed) {
          const zv = this._points[this._points.length - 1];
          vv += this._points[0].subtract(zv).length()
        }
        return vv
      }
      area() {
        const vv = this._points.length;
        let zv = 0;
        for (let Pv = vv - 1, hv = 0; hv < vv; Pv = hv++) zv += this._points[Pv].x * this._points[hv].y - this._points[hv].x * this._points[Pv].y;
        return .5 * zv
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(vv) {
        if (vv < 0 || vv > 1) return ev.j.Zero();
        const zv = vv * this.length();
        let Pv = 0;
        for (let hv = 0; hv < this._points.length; hv++) {
          const vv = (hv + 1) % this._points.length,
            Sv = this._points[hv],
            gv = this._points[vv].subtract(Sv),
            pv = gv.length() + Pv;
          if (zv >= Pv && zv <= pv) {
            const vv = gv.normalize(),
              hv = zv - Pv;
            return new ev.j(Sv.x + vv.x * hv, Sv.y + vv.y * hv)
          }
          Pv = pv
        }
        return ev.j.Zero()
      }
      static StartingAt(vv, zv) {
        return new Nv(vv, zv)
      }
    }
    class lv {
      static CreateQuadraticBezier(vv, zv, Pv, hv) {
        hv = hv > 2 ? hv : 3;
        const Sv = [],
          gv = (vv, zv, Pv, hv) => (1 - vv) * (1 - vv) * zv + 2 * vv * (1 - vv) * Pv + vv * vv * hv;
        for (let pv = 0; pv <= hv; pv++) Sv.push(new ev.l(gv(pv / hv, vv.x, zv.x, Pv.x), gv(pv / hv, vv.y, zv.y, Pv.y), gv(pv / hv, vv.z, zv.z, Pv.z)));
        return new lv(Sv)
      }
      static CreateCubicBezier(vv, zv, Pv, hv, Sv) {
        Sv = Sv > 3 ? Sv : 4;
        const gv = [],
          pv = (vv, zv, Pv, hv, Sv) => (1 - vv) * (1 - vv) * (1 - vv) * zv + 3 * vv * (1 - vv) * (1 - vv) * Pv + 3 * vv * vv * (1 - vv) * hv + vv * vv * vv * Sv;
        for (let dv = 0; dv <= Sv; dv++) gv.push(new ev.l(pv(dv / Sv, vv.x, zv.x, Pv.x, hv.x), pv(dv / Sv, vv.y, zv.y, Pv.y, hv.y), pv(dv / Sv, vv.z, zv.z, Pv.z, hv.z)));
        return new lv(gv)
      }
      static CreateHermiteSpline(vv, zv, Pv, hv, Sv) {
        const gv = [],
          pv = 1 / Sv;
        for (let dv = 0; dv <= Sv; dv++) gv.push(ev.l.Hermite(vv, zv, Pv, hv, dv * pv));
        return new lv(gv)
      }
      static CreateCatmullRomSpline(vv, zv, Pv) {
        const hv = [],
          Sv = 1 / zv;
        let gv = 0;
        if (Pv) {
          const Pv = vv.length;
          for (let pv = 0; pv < Pv; pv++) {
            gv = 0;
            for (let dv = 0; dv < zv; dv++) hv.push(ev.l.CatmullRom(vv[pv % Pv], vv[(pv + 1) % Pv], vv[(pv + 2) % Pv], vv[(pv + 3) % Pv], gv)), gv += Sv
          }
          hv.push(hv[0])
        } else {
          const Pv = [];
          Pv.push(vv[0].clone()), Pv.push(...vv), Pv.push(vv[vv.length - 1].clone());
          let pv = 0;
          for (; pv < Pv.length - 3; pv++) {
            gv = 0;
            for (let vv = 0; vv < zv; vv++) hv.push(ev.l.CatmullRom(Pv[pv], Pv[pv + 1], Pv[pv + 2], Pv[pv + 3], gv)), gv += Sv
          }
          pv--, hv.push(ev.l.CatmullRom(Pv[pv], Pv[pv + 1], Pv[pv + 2], Pv[pv + 3], gv))
        }
        return new lv(hv)
      }
      static ArcThru3Points(vv, zv, Pv) {
        let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          Sv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          gv = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const pv = [],
          dv = zv.subtract(vv),
          Nv = Pv.subtract(zv),
          Tv = vv.subtract(Pv),
          Wv = ev.l.Cross(dv, Nv),
          wv = Wv.length();
        if (wv < Math.pow(10, -8)) return new lv(pv);
        const av = dv.lengthSquared(),
          sv = Nv.lengthSquared(),
          Cv = Tv.lengthSquared(),
          iv = Wv.lengthSquared(),
          cv = .5 * dv.length() * Nv.length() * Tv.length() / wv,
          Gv = -.5 * sv * ev.l.Dot(dv, Tv) / iv,
          mv = -.5 * Cv * ev.l.Dot(dv, Nv) / iv,
          jv = -.5 * av * ev.l.Dot(Nv, Tv) / iv,
          fv = vv.scale(Gv).add(zv.scale(mv)).add(Pv.scale(jv)),
          Fv = vv.subtract(fv).normalize(),
          Yv = ev.l.Cross(Wv, Fv).normalize();
        if (gv) {
          const zv = 2 * Math.PI / hv;
          for (let vv = 0; vv <= 2 * Math.PI; vv += zv) pv.push(fv.add(Fv.scale(cv * Math.cos(vv)).add(Yv.scale(cv * Math.sin(vv)))));
          pv.push(vv)
        } else {
          const zv = 1 / hv;
          let ev, gv = 0;
          do {
            ev = fv.add(Fv.scale(cv * Math.cos(gv)).add(Yv.scale(cv * Math.sin(gv)))), pv.push(ev), gv += zv
          } while (!ev.equalsWithEpsilon(Pv, cv * zv * 1.1));
          pv.push(Pv), Sv && pv.push(vv)
        }
        return new lv(pv)
      }
      constructor(vv) {
        this._length = 0, this._points = vv, this._length = this._computeLength(vv)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (vv) {
        const zv = this._points[this._points.length - 1],
          Pv = this._points.slice(),
          hv = vv.getPoints();
        for (let Sv = 1; Sv < hv.length; Sv++) Pv.push(hv[Sv].subtract(hv[0]).add(zv));
        return new lv(Pv)
      }
      _computeLength(vv) {
        let zv = 0;
        for (let Pv = 1; Pv < vv.length; Pv++) zv += vv[Pv].subtract(vv[Pv - 1]).length();
        return zv
      }
    }
  },
  38207: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => ev
    });
    var hv = Pv(38209);
    const Sv = (vv, zv, Pv) => vv ? vv.getClassName && "Mesh" === vv.getClassName() ? null : !vv.getClassName || "SubMesh" !== vv.getClassName() && "PhysicsBody" !== vv.getClassName() ? vv.clone ? vv.clone() : Array.isArray(vv) ? vv.slice() : Pv && "object" === typeof vv ? {
      ...vv
    } : null : vv.clone(zv) : null;
    class ev {
      static DeepCopy(vv, zv, Pv, ev) {
        let gv = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const pv = function(vv) {
          const zv = [];
          do {
            const Pv = Object.getOwnPropertyNames(vv);
            for (const vv of Pv) - 1 === zv.indexOf(vv) && zv.push(vv)
          } while (vv = Object.getPrototypeOf(vv));
          return zv
        }(vv);
        for (const Nv of pv) {
          if ("_" === Nv[0] && (!ev || -1 === ev.indexOf(Nv))) continue;
          if (Nv.endsWith("Observable")) continue;
          if (Pv && -1 !== Pv.indexOf(Nv)) continue;
          const pv = vv[Nv],
            lv = typeof pv;
          if ("function" !== lv) try {
            if ("object" === lv)
              if (pv instanceof Uint8Array) zv[Nv] = Uint8Array.from(pv);
              else if (pv instanceof Array) {
              if (zv[Nv] = [], pv.length > 0)
                if ("object" == typeof pv[0])
                  for (let vv = 0; vv < pv.length; vv++) {
                    const Pv = Sv(pv[vv], zv, gv); - 1 === zv[Nv].indexOf(Pv) && zv[Nv].push(Pv)
                  } else zv[Nv] = pv.slice(0)
            } else zv[Nv] = Sv(pv, zv, gv);
            else zv[Nv] = pv
          } catch (dv) {
            hv.d.Warn(dv.message)
          }
        }
      }
    }
  },
  38209: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    class hv {
      static _CheckLimit(vv, zv) {
        let Pv = hv._LogLimitOutputs[vv];
        return Pv ? Pv.current++ : (Pv = {
          limit: zv,
          current: 1
        }, hv._LogLimitOutputs[vv] = Pv), Pv.current <= Pv.limit
      }
      static _GenerateLimitMessage(vv) {
        let zv = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Pv = hv._LogLimitOutputs[vv];
        if (!Pv || !hv.MessageLimitReached) return;
        const Sv = this._Levels[zv];
        Pv.current === Pv.limit && hv[Sv.name](hv.MessageLimitReached.replace(/%LIMIT%/g, "" + Pv.limit).replace(/%TYPE%/g, Sv.name ?? ""))
      }
      static _AddLogEntry(vv) {
        hv._LogCache = vv + hv._LogCache, hv.OnNewCacheEntry && hv.OnNewCacheEntry(vv)
      }
      static _FormatMessage(vv) {
        const zv = vv => vv < 10 ? "0" + vv : "" + vv,
          Pv = new Date;
        return "[" + zv(Pv.getHours()) + ":" + zv(Pv.getMinutes()) + ":" + zv(Pv.getSeconds()) + "]: " + vv
      }
      static _LogDisabled(vv, zv) {}
      static _LogEnabled() {
        let vv = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          zv = arguments.length > 1 ? arguments[1] : void 0,
          Pv = arguments.length > 2 ? arguments[2] : void 0;
        const Sv = Array.isArray(zv) ? zv[0] : zv;
        if (void 0 !== Pv && !hv._CheckLimit(Sv, Pv)) return;
        const ev = hv._FormatMessage(Sv),
          gv = this._Levels[vv],
          pv = Array.isArray(zv) ? zv.slice(1) : [];
        gv.logFunc && gv.logFunc("BJS - " + ev, ...pv);
        const dv = `<div style='color:${gv.color}'>${ev}</div><br>`;
        hv._AddLogEntry(dv), hv._GenerateLimitMessage(Sv, vv)
      }
      static get LogCache() {
        return hv._LogCache
      }
      static ClearLogCache() {
        hv._LogCache = "", hv._LogLimitOutputs = {}, hv.errorsCount = 0
      }
      static set LogLevels(vv) {
        hv.Log = hv._LogDisabled, hv.Warn = hv._LogDisabled, hv.Error = hv._LogDisabled;
        const zv = [hv.MessageLogLevel, hv.WarningLogLevel, hv.ErrorLogLevel];
        for (const Pv of zv)
          if ((vv & Pv) === Pv) {
            const vv = this._Levels[Pv];
            hv[vv.name] = hv._LogEnabled.bind(hv, Pv)
          }
      }
    }
    hv.NoneLogLevel = 0, hv.MessageLogLevel = 1, hv.WarningLogLevel = 2, hv.ErrorLogLevel = 4, hv.AllLogLevel = 7, hv.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", hv._LogCache = "", hv._LogLimitOutputs = {}, hv._Levels = [{}, {
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
    }], hv.errorsCount = 0, hv.Log = hv._LogEnabled.bind(hv, hv.MessageLogLevel), hv.Warn = hv._LogEnabled.bind(hv, hv.WarningLogLevel), hv.Error = hv._LogEnabled.bind(hv, hv.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);