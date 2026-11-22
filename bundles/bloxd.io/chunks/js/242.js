export const id = 242;
export const ids = [242];
export const modules = {
  40679: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk,
      e: () => Mk,
      g: () => mk
    });
    var Dk, fk = ik(36729),
      Sk = ik(36698);
    ! function(kk) {
      kk[kk.CW = 0] = "CW", kk[kk.CCW = 1] = "CCW"
    }(Dk || (Dk = {}));
    class bk {
      static Interpolate(kk, ek, ik, Dk, fk) {
        if (0 === kk) return 0;
        const Sk = 1 - 3 * Dk + 3 * ek,
          bk = 3 * Dk - 6 * ek,
          rk = 3 * ek;
        let Pk = kk;
        for (let mk = 0; mk < 5; mk++) {
          const ek = Pk * Pk;
          Pk -= (Sk * (ek * Pk) + bk * ek + rk * Pk - kk) * (1 / (3 * Sk * ek + 2 * bk * Pk + rk)), Pk = Math.min(1, Math.max(0, Pk))
        }
        return 3 * Math.pow(1 - Pk, 2) * Pk * ik + 3 * (1 - Pk) * Math.pow(Pk, 2) * fk + Math.pow(Pk, 3)
      }
    }
    class rk {
      constructor(kk) {
        this._radians = kk, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(kk, ek) {
        const ik = ek.subtract(kk),
          Dk = Math.atan2(ik.y, ik.x);
        return new rk(Dk)
      }
      static BetweenTwoVectors(kk, ek) {
        let ik = kk.lengthSquared() * ek.lengthSquared();
        if (0 === ik) return new rk(Math.PI / 2);
        ik = Math.sqrt(ik);
        let Dk = kk.dot(ek) / ik;
        Dk = (0, fk.Clamp)(Dk, -1, 1);
        const Sk = Math.acos(Dk);
        return new rk(Sk)
      }
      static FromRadians(kk) {
        return new rk(kk)
      }
      static FromDegrees(kk) {
        return new rk(kk * Math.PI / 180)
      }
    }
    class Pk {
      constructor(kk, ek, ik) {
        this.startPoint = kk, this.midPoint = ek, this.endPoint = ik;
        const Dk = Math.pow(ek.x, 2) + Math.pow(ek.y, 2),
          fk = (Math.pow(kk.x, 2) + Math.pow(kk.y, 2) - Dk) / 2,
          bk = (Dk - Math.pow(ik.x, 2) - Math.pow(ik.y, 2)) / 2,
          Pk = (kk.x - ek.x) * (ek.y - ik.y) - (ek.x - ik.x) * (kk.y - ek.y);
        this.centerPoint = new Sk.l((fk * (ek.y - ik.y) - bk * (kk.y - ek.y)) / Pk, ((kk.x - ek.x) * bk - (ek.x - ik.x) * fk) / Pk), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = rk.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const mk = this.startAngle.degrees();
        let Mk = rk.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          Kk = rk.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        Mk - mk > 180 && (Mk -= 360), Mk - mk < -180 && (Mk += 360), Kk - Mk > 180 && (Kk -= 360), Kk - Mk < -180 && (Kk += 360), this.orientation = Mk - mk < 0 ? 0 : 1, this.angle = rk.FromDegrees(0 === this.orientation ? mk - Kk : Kk - mk)
      }
    }
    class mk {
      constructor(kk, ek) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new Sk.l(kk, ek))
      }
      addLineTo(kk, ek) {
        if (this.closed) return this;
        const ik = new Sk.l(kk, ek),
          Dk = this._points[this._points.length - 1];
        return this._points.push(ik), this._length += ik.subtract(Dk).length(), this
      }
      addArcTo(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const bk = this._points[this._points.length - 1],
          rk = new Sk.l(kk, ek),
          mk = new Sk.l(ik, Dk),
          Mk = new Pk(bk, rk, mk);
        let Kk = Mk.angle.radians() / fk;
        0 === Mk.orientation && (Kk *= -1);
        let xk = Mk.startAngle.radians() + Kk;
        for (let Sk = 0; Sk < fk; Sk++) {
          const kk = Math.cos(xk) * Mk.radius + Mk.centerPoint.x,
            ek = Math.sin(xk) * Mk.radius + Mk.centerPoint.y;
          this.addLineTo(kk, ek), xk += Kk
        }
        return this
      }
      addQuadraticCurveTo(kk, ek, ik, Dk) {
        let fk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Sk = (kk, ek, ik, Dk) => (1 - kk) * (1 - kk) * ek + 2 * kk * (1 - kk) * ik + kk * kk * Dk,
          bk = this._points[this._points.length - 1];
        for (let rk = 0; rk <= fk; rk++) {
          const Pk = rk / fk,
            mk = Sk(Pk, bk.x, kk, ik),
            Mk = Sk(Pk, bk.y, ek, Dk);
          this.addLineTo(mk, Mk)
        }
        return this
      }
      addBezierCurveTo(kk, ek, ik, Dk, fk, Sk) {
        let bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const rk = (kk, ek, ik, Dk, fk) => (1 - kk) * (1 - kk) * (1 - kk) * ek + 3 * kk * (1 - kk) * (1 - kk) * ik + 3 * kk * kk * (1 - kk) * Dk + kk * kk * kk * fk,
          Pk = this._points[this._points.length - 1];
        for (let mk = 0; mk <= bk; mk++) {
          const Mk = mk / bk,
            Kk = rk(Mk, Pk.x, kk, ik, fk),
            xk = rk(Mk, Pk.y, ek, Dk, Sk);
          this.addLineTo(Kk, xk)
        }
        return this
      }
      isPointInside(kk) {
        let ek = !1;
        const ik = this._points.length;
        for (let Dk = ik - 1, fk = 0; fk < ik; Dk = fk++) {
          let ik = this._points[Dk],
            Sk = this._points[fk],
            bk = Sk.x - ik.x,
            rk = Sk.y - ik.y;
          if (Math.abs(rk) > Number.EPSILON) {
            if (rk < 0 && (ik = this._points[fk], bk = -bk, Sk = this._points[Dk], rk = -rk), kk.y < ik.y || kk.y > Sk.y) continue;
            if (kk.y === ik.y && kk.x === ik.x) return !0;
            {
              const Dk = rk * (kk.x - ik.x) - bk * (kk.y - ik.y);
              if (0 === Dk) return !0;
              if (Dk < 0) continue;
              ek = !ek
            }
          } else {
            if (kk.y !== ik.y) continue;
            if (Sk.x <= kk.x && kk.x <= ik.x || ik.x <= kk.x && kk.x <= Sk.x) return !0
          }
        }
        return ek
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let kk = this._length;
        if (this.closed) {
          const ek = this._points[this._points.length - 1];
          kk += this._points[0].subtract(ek).length()
        }
        return kk
      }
      area() {
        const kk = this._points.length;
        let ek = 0;
        for (let ik = kk - 1, Dk = 0; Dk < kk; ik = Dk++) ek += this._points[ik].x * this._points[Dk].y - this._points[Dk].x * this._points[ik].y;
        return .5 * ek
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(kk) {
        if (kk < 0 || kk > 1) return Sk.l.Zero();
        const ek = kk * this.length();
        let ik = 0;
        for (let Dk = 0; Dk < this._points.length; Dk++) {
          const kk = (Dk + 1) % this._points.length,
            fk = this._points[Dk],
            bk = this._points[kk].subtract(fk),
            rk = bk.length() + ik;
          if (ek >= ik && ek <= rk) {
            const kk = bk.normalize(),
              Dk = ek - ik;
            return new Sk.l(fk.x + kk.x * Dk, fk.y + kk.y * Dk)
          }
          ik = rk
        }
        return Sk.l.Zero()
      }
      static StartingAt(kk, ek) {
        return new mk(kk, ek)
      }
    }
    class Mk {
      static CreateQuadraticBezier(kk, ek, ik, Dk) {
        Dk = Dk > 2 ? Dk : 3;
        const fk = [],
          bk = (kk, ek, ik, Dk) => (1 - kk) * (1 - kk) * ek + 2 * kk * (1 - kk) * ik + kk * kk * Dk;
        for (let rk = 0; rk <= Dk; rk++) fk.push(new Sk.o(bk(rk / Dk, kk.x, ek.x, ik.x), bk(rk / Dk, kk.y, ek.y, ik.y), bk(rk / Dk, kk.z, ek.z, ik.z)));
        return new Mk(fk)
      }
      static CreateCubicBezier(kk, ek, ik, Dk, fk) {
        fk = fk > 3 ? fk : 4;
        const bk = [],
          rk = (kk, ek, ik, Dk, fk) => (1 - kk) * (1 - kk) * (1 - kk) * ek + 3 * kk * (1 - kk) * (1 - kk) * ik + 3 * kk * kk * (1 - kk) * Dk + kk * kk * kk * fk;
        for (let Pk = 0; Pk <= fk; Pk++) bk.push(new Sk.o(rk(Pk / fk, kk.x, ek.x, ik.x, Dk.x), rk(Pk / fk, kk.y, ek.y, ik.y, Dk.y), rk(Pk / fk, kk.z, ek.z, ik.z, Dk.z)));
        return new Mk(bk)
      }
      static CreateHermiteSpline(kk, ek, ik, Dk, fk) {
        const bk = [],
          rk = 1 / fk;
        for (let Pk = 0; Pk <= fk; Pk++) bk.push(Sk.o.Hermite(kk, ek, ik, Dk, Pk * rk));
        return new Mk(bk)
      }
      static CreateCatmullRomSpline(kk, ek, ik) {
        const Dk = [],
          fk = 1 / ek;
        let bk = 0;
        if (ik) {
          const ik = kk.length;
          for (let rk = 0; rk < ik; rk++) {
            bk = 0;
            for (let Pk = 0; Pk < ek; Pk++) Dk.push(Sk.o.CatmullRom(kk[rk % ik], kk[(rk + 1) % ik], kk[(rk + 2) % ik], kk[(rk + 3) % ik], bk)), bk += fk
          }
          Dk.push(Dk[0])
        } else {
          const ik = [];
          ik.push(kk[0].clone()), ik.push(...kk), ik.push(kk[kk.length - 1].clone());
          let rk = 0;
          for (; rk < ik.length - 3; rk++) {
            bk = 0;
            for (let kk = 0; kk < ek; kk++) Dk.push(Sk.o.CatmullRom(ik[rk], ik[rk + 1], ik[rk + 2], ik[rk + 3], bk)), bk += fk
          }
          rk--, Dk.push(Sk.o.CatmullRom(ik[rk], ik[rk + 1], ik[rk + 2], ik[rk + 3], bk))
        }
        return new Mk(Dk)
      }
      static ArcThru3Points(kk, ek, ik) {
        let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          fk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          bk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const rk = [],
          Pk = ek.subtract(kk),
          mk = ik.subtract(ek),
          Kk = kk.subtract(ik),
          xk = Sk.o.Cross(Pk, mk),
          nk = xk.length();
        if (nk < Math.pow(10, -8)) return new Mk(rk);
        const Uk = Pk.lengthSquared(),
          Hk = mk.lengthSquared(),
          wk = Kk.lengthSquared(),
          lk = xk.lengthSquared(),
          pk = .5 * Pk.length() * mk.length() * Kk.length() / nk,
          yk = -.5 * Hk * Sk.o.Dot(Pk, Kk) / lk,
          Yk = -.5 * wk * Sk.o.Dot(Pk, mk) / lk,
          Lk = -.5 * Uk * Sk.o.Dot(mk, Kk) / lk,
          Ck = kk.scale(yk).add(ek.scale(Yk)).add(ik.scale(Lk)),
          Ak = kk.subtract(Ck).normalize(),
          jk = Sk.o.Cross(xk, Ak).normalize();
        if (bk) {
          const ek = 2 * Math.PI / Dk;
          for (let kk = 0; kk <= 2 * Math.PI; kk += ek) rk.push(Ck.add(Ak.scale(pk * Math.cos(kk)).add(jk.scale(pk * Math.sin(kk)))));
          rk.push(kk)
        } else {
          const ek = 1 / Dk;
          let Sk, bk = 0;
          do {
            Sk = Ck.add(Ak.scale(pk * Math.cos(bk)).add(jk.scale(pk * Math.sin(bk)))), rk.push(Sk), bk += ek
          } while (!Sk.equalsWithEpsilon(ik, pk * ek * 1.1));
          rk.push(ik), fk && rk.push(kk)
        }
        return new Mk(rk)
      }
      constructor(kk) {
        this._length = 0, this._points = kk, this._length = this._computeLength(kk)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (kk) {
        const ek = this._points[this._points.length - 1],
          ik = this._points.slice(),
          Dk = kk.getPoints();
        for (let fk = 1; fk < Dk.length; fk++) ik.push(Dk[fk].subtract(Dk[0]).add(ek));
        return new Mk(ik)
      }
      _computeLength(kk) {
        let ek = 0;
        for (let ik = 1; ik < kk.length; ik++) ek += kk[ik].subtract(kk[ik - 1]).length();
        return ek
      }
    }
  },
  38265: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk
    });
    var Dk = ik(38272);
    const fk = (kk, ek, ik) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : ik && "object" === typeof kk ? {
      ...kk
    } : null : kk.clone(ek) : null;
    class Sk {
      static DeepCopy(kk, ek, ik, Sk) {
        let bk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const rk = function(kk) {
          const ek = [];
          do {
            const ik = Object.getOwnPropertyNames(kk);
            for (const kk of ik) - 1 === ek.indexOf(kk) && ek.push(kk)
          } while (kk = Object.getPrototypeOf(kk));
          return ek
        }(kk);
        for (const mk of rk) {
          if ("_" === mk[0] && (!Sk || -1 === Sk.indexOf(mk))) continue;
          if (mk.endsWith("Observable")) continue;
          if (ik && -1 !== ik.indexOf(mk)) continue;
          const rk = kk[mk],
            Mk = typeof rk;
          if ("function" !== Mk) try {
            if ("object" === Mk)
              if (rk instanceof Uint8Array) ek[mk] = Uint8Array.from(rk);
              else if (rk instanceof Array) {
              if (ek[mk] = [], rk.length > 0)
                if ("object" == typeof rk[0])
                  for (let kk = 0; kk < rk.length; kk++) {
                    const ik = fk(rk[kk], ek, bk); - 1 === ek[mk].indexOf(ik) && ek[mk].push(ik)
                  } else ek[mk] = rk.slice(0)
            } else ek[mk] = fk(rk, ek, bk);
            else ek[mk] = rk
          } catch (Pk) {
            Dk.b.Warn(Pk.message)
          }
        }
      }
    }
  },
  38272: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk
    });
    class Dk {
      static _CheckLimit(kk, ek) {
        let ik = Dk._LogLimitOutputs[kk];
        return ik ? ik.current++ : (ik = {
          limit: ek,
          current: 1
        }, Dk._LogLimitOutputs[kk] = ik), ik.current <= ik.limit
      }
      static _GenerateLimitMessage(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ik = Dk._LogLimitOutputs[kk];
        if (!ik || !Dk.MessageLimitReached) return;
        const fk = this._Levels[ek];
        ik.current === ik.limit && Dk[fk.name](Dk.MessageLimitReached.replace(/%LIMIT%/g, "" + ik.limit).replace(/%TYPE%/g, fk.name ?? ""))
      }
      static _AddLogEntry(kk) {
        Dk._LogCache = kk + Dk._LogCache, Dk.OnNewCacheEntry && Dk.OnNewCacheEntry(kk)
      }
      static _FormatMessage(kk) {
        const ek = kk => kk < 10 ? "0" + kk : "" + kk,
          ik = new Date;
        return "[" + ek(ik.getHours()) + ":" + ek(ik.getMinutes()) + ":" + ek(ik.getSeconds()) + "]: " + kk
      }
      static _LogDisabled(kk, ek) {}
      static _LogEnabled() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ek = arguments.length > 1 ? arguments[1] : void 0,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        const fk = Array.isArray(ek) ? ek[0] : ek;
        if (void 0 !== ik && !Dk._CheckLimit(fk, ik)) return;
        const Sk = Dk._FormatMessage(fk),
          bk = this._Levels[kk],
          rk = Array.isArray(ek) ? ek.slice(1) : [];
        bk.logFunc && bk.logFunc("BJS - " + Sk, ...rk);
        const Pk = `<div style='color:${bk.color}'>${Sk}</div><br>`;
        Dk._AddLogEntry(Pk), Dk._GenerateLimitMessage(fk, kk)
      }
      static get LogCache() {
        return Dk._LogCache
      }
      static ClearLogCache() {
        Dk._LogCache = "", Dk._LogLimitOutputs = {}, Dk.errorsCount = 0
      }
      static set LogLevels(kk) {
        Dk.Log = Dk._LogDisabled, Dk.Warn = Dk._LogDisabled, Dk.Error = Dk._LogDisabled;
        const ek = [Dk.MessageLogLevel, Dk.WarningLogLevel, Dk.ErrorLogLevel];
        for (const ik of ek)
          if ((kk & ik) === ik) {
            const kk = this._Levels[ik];
            Dk[kk.name] = Dk._LogEnabled.bind(Dk, ik)
          }
      }
    }
    Dk.NoneLogLevel = 0, Dk.MessageLogLevel = 1, Dk.WarningLogLevel = 2, Dk.ErrorLogLevel = 4, Dk.AllLogLevel = 7, Dk.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Dk._LogCache = "", Dk._LogLimitOutputs = {}, Dk._Levels = [{}, {
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
    }], Dk.errorsCount = 0, Dk.Log = Dk._LogEnabled.bind(Dk, Dk.MessageLogLevel), Dk.Warn = Dk._LogEnabled.bind(Dk, Dk.WarningLogLevel), Dk.Error = Dk._LogEnabled.bind(Dk, Dk.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);