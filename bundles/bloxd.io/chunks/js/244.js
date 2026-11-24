export const id = 244;
export const ids = [244];
export const modules = {
  41102: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk,
      h: () => Lk,
      l: () => qk
    });
    var Xk, Tk = Ik(37189),
      ik = Ik(37153);
    ! function(kk) {
      kk[kk.CW = 0] = "CW", kk[kk.CCW = 1] = "CCW"
    }(Xk || (Xk = {}));
    class yk {
      static Interpolate(kk, Fk, Ik, Xk, Tk) {
        if (0 === kk) return 0;
        const ik = 1 - 3 * Xk + 3 * Fk,
          yk = 3 * Xk - 6 * Fk,
          lk = 3 * Fk;
        let ak = kk;
        for (let qk = 0; qk < 5; qk++) {
          const Fk = ak * ak;
          ak -= (ik * (Fk * ak) + yk * Fk + lk * ak - kk) * (1 / (3 * ik * Fk + 2 * yk * ak + lk)), ak = Math.min(1, Math.max(0, ak))
        }
        return 3 * Math.pow(1 - ak, 2) * ak * Ik + 3 * (1 - ak) * Math.pow(ak, 2) * Tk + Math.pow(ak, 3)
      }
    }
    class lk {
      constructor(kk) {
        this._radians = kk, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(kk, Fk) {
        const Ik = Fk.subtract(kk),
          Xk = Math.atan2(Ik.y, Ik.x);
        return new lk(Xk)
      }
      static BetweenTwoVectors(kk, Fk) {
        let Ik = kk.lengthSquared() * Fk.lengthSquared();
        if (0 === Ik) return new lk(Math.PI / 2);
        Ik = Math.sqrt(Ik);
        let Xk = kk.dot(Fk) / Ik;
        Xk = (0, Tk.Clamp)(Xk, -1, 1);
        const ik = Math.acos(Xk);
        return new lk(ik)
      }
      static FromRadians(kk) {
        return new lk(kk)
      }
      static FromDegrees(kk) {
        return new lk(kk * Math.PI / 180)
      }
    }
    class ak {
      constructor(kk, Fk, Ik) {
        this.startPoint = kk, this.midPoint = Fk, this.endPoint = Ik;
        const Xk = Math.pow(Fk.x, 2) + Math.pow(Fk.y, 2),
          Tk = (Math.pow(kk.x, 2) + Math.pow(kk.y, 2) - Xk) / 2,
          yk = (Xk - Math.pow(Ik.x, 2) - Math.pow(Ik.y, 2)) / 2,
          ak = (kk.x - Fk.x) * (Fk.y - Ik.y) - (Fk.x - Ik.x) * (kk.y - Fk.y);
        this.centerPoint = new ik.p((Tk * (Fk.y - Ik.y) - yk * (kk.y - Fk.y)) / ak, ((kk.x - Fk.x) * yk - (Fk.x - Ik.x) * Tk) / ak), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = lk.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const qk = this.startAngle.degrees();
        let Lk = lk.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          tk = lk.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        Lk - qk > 180 && (Lk -= 360), Lk - qk < -180 && (Lk += 360), tk - Lk > 180 && (tk -= 360), tk - Lk < -180 && (tk += 360), this.orientation = Lk - qk < 0 ? 0 : 1, this.angle = lk.FromDegrees(0 === this.orientation ? qk - tk : tk - qk)
      }
    }
    class qk {
      constructor(kk, Fk) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new ik.p(kk, Fk))
      }
      addLineTo(kk, Fk) {
        if (this.closed) return this;
        const Ik = new ik.p(kk, Fk),
          Xk = this._points[this._points.length - 1];
        return this._points.push(Ik), this._length += Ik.subtract(Xk).length(), this
      }
      addArcTo(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const yk = this._points[this._points.length - 1],
          lk = new ik.p(kk, Fk),
          qk = new ik.p(Ik, Xk),
          Lk = new ak(yk, lk, qk);
        let tk = Lk.angle.radians() / Tk;
        0 === Lk.orientation && (tk *= -1);
        let Zk = Lk.startAngle.radians() + tk;
        for (let ik = 0; ik < Tk; ik++) {
          const kk = Math.cos(Zk) * Lk.radius + Lk.centerPoint.x,
            Fk = Math.sin(Zk) * Lk.radius + Lk.centerPoint.y;
          this.addLineTo(kk, Fk), Zk += tk
        }
        return this
      }
      addQuadraticCurveTo(kk, Fk, Ik, Xk) {
        let Tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const ik = (kk, Fk, Ik, Xk) => (1 - kk) * (1 - kk) * Fk + 2 * kk * (1 - kk) * Ik + kk * kk * Xk,
          yk = this._points[this._points.length - 1];
        for (let lk = 0; lk <= Tk; lk++) {
          const ak = lk / Tk,
            qk = ik(ak, yk.x, kk, Ik),
            Lk = ik(ak, yk.y, Fk, Xk);
          this.addLineTo(qk, Lk)
        }
        return this
      }
      addBezierCurveTo(kk, Fk, Ik, Xk, Tk, ik) {
        let yk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const lk = (kk, Fk, Ik, Xk, Tk) => (1 - kk) * (1 - kk) * (1 - kk) * Fk + 3 * kk * (1 - kk) * (1 - kk) * Ik + 3 * kk * kk * (1 - kk) * Xk + kk * kk * kk * Tk,
          ak = this._points[this._points.length - 1];
        for (let qk = 0; qk <= yk; qk++) {
          const Lk = qk / yk,
            tk = lk(Lk, ak.x, kk, Ik, Tk),
            Zk = lk(Lk, ak.y, Fk, Xk, ik);
          this.addLineTo(tk, Zk)
        }
        return this
      }
      isPointInside(kk) {
        let Fk = !1;
        const Ik = this._points.length;
        for (let Xk = Ik - 1, Tk = 0; Tk < Ik; Xk = Tk++) {
          let Ik = this._points[Xk],
            ik = this._points[Tk],
            yk = ik.x - Ik.x,
            lk = ik.y - Ik.y;
          if (Math.abs(lk) > Number.EPSILON) {
            if (lk < 0 && (Ik = this._points[Tk], yk = -yk, ik = this._points[Xk], lk = -lk), kk.y < Ik.y || kk.y > ik.y) continue;
            if (kk.y === Ik.y && kk.x === Ik.x) return !0;
            {
              const Xk = lk * (kk.x - Ik.x) - yk * (kk.y - Ik.y);
              if (0 === Xk) return !0;
              if (Xk < 0) continue;
              Fk = !Fk
            }
          } else {
            if (kk.y !== Ik.y) continue;
            if (ik.x <= kk.x && kk.x <= Ik.x || Ik.x <= kk.x && kk.x <= ik.x) return !0
          }
        }
        return Fk
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let kk = this._length;
        if (this.closed) {
          const Fk = this._points[this._points.length - 1];
          kk += this._points[0].subtract(Fk).length()
        }
        return kk
      }
      area() {
        const kk = this._points.length;
        let Fk = 0;
        for (let Ik = kk - 1, Xk = 0; Xk < kk; Ik = Xk++) Fk += this._points[Ik].x * this._points[Xk].y - this._points[Xk].x * this._points[Ik].y;
        return .5 * Fk
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(kk) {
        if (kk < 0 || kk > 1) return ik.p.Zero();
        const Fk = kk * this.length();
        let Ik = 0;
        for (let Xk = 0; Xk < this._points.length; Xk++) {
          const kk = (Xk + 1) % this._points.length,
            Tk = this._points[Xk],
            yk = this._points[kk].subtract(Tk),
            lk = yk.length() + Ik;
          if (Fk >= Ik && Fk <= lk) {
            const kk = yk.normalize(),
              Xk = Fk - Ik;
            return new ik.p(Tk.x + kk.x * Xk, Tk.y + kk.y * Xk)
          }
          Ik = lk
        }
        return ik.p.Zero()
      }
      static StartingAt(kk, Fk) {
        return new qk(kk, Fk)
      }
    }
    class Lk {
      static CreateQuadraticBezier(kk, Fk, Ik, Xk) {
        Xk = Xk > 2 ? Xk : 3;
        const Tk = [],
          yk = (kk, Fk, Ik, Xk) => (1 - kk) * (1 - kk) * Fk + 2 * kk * (1 - kk) * Ik + kk * kk * Xk;
        for (let lk = 0; lk <= Xk; lk++) Tk.push(new ik.t(yk(lk / Xk, kk.x, Fk.x, Ik.x), yk(lk / Xk, kk.y, Fk.y, Ik.y), yk(lk / Xk, kk.z, Fk.z, Ik.z)));
        return new Lk(Tk)
      }
      static CreateCubicBezier(kk, Fk, Ik, Xk, Tk) {
        Tk = Tk > 3 ? Tk : 4;
        const yk = [],
          lk = (kk, Fk, Ik, Xk, Tk) => (1 - kk) * (1 - kk) * (1 - kk) * Fk + 3 * kk * (1 - kk) * (1 - kk) * Ik + 3 * kk * kk * (1 - kk) * Xk + kk * kk * kk * Tk;
        for (let ak = 0; ak <= Tk; ak++) yk.push(new ik.t(lk(ak / Tk, kk.x, Fk.x, Ik.x, Xk.x), lk(ak / Tk, kk.y, Fk.y, Ik.y, Xk.y), lk(ak / Tk, kk.z, Fk.z, Ik.z, Xk.z)));
        return new Lk(yk)
      }
      static CreateHermiteSpline(kk, Fk, Ik, Xk, Tk) {
        const yk = [],
          lk = 1 / Tk;
        for (let ak = 0; ak <= Tk; ak++) yk.push(ik.t.Hermite(kk, Fk, Ik, Xk, ak * lk));
        return new Lk(yk)
      }
      static CreateCatmullRomSpline(kk, Fk, Ik) {
        const Xk = [],
          Tk = 1 / Fk;
        let yk = 0;
        if (Ik) {
          const Ik = kk.length;
          for (let lk = 0; lk < Ik; lk++) {
            yk = 0;
            for (let ak = 0; ak < Fk; ak++) Xk.push(ik.t.CatmullRom(kk[lk % Ik], kk[(lk + 1) % Ik], kk[(lk + 2) % Ik], kk[(lk + 3) % Ik], yk)), yk += Tk
          }
          Xk.push(Xk[0])
        } else {
          const Ik = [];
          Ik.push(kk[0].clone()), Ik.push(...kk), Ik.push(kk[kk.length - 1].clone());
          let lk = 0;
          for (; lk < Ik.length - 3; lk++) {
            yk = 0;
            for (let kk = 0; kk < Fk; kk++) Xk.push(ik.t.CatmullRom(Ik[lk], Ik[lk + 1], Ik[lk + 2], Ik[lk + 3], yk)), yk += Tk
          }
          lk--, Xk.push(ik.t.CatmullRom(Ik[lk], Ik[lk + 1], Ik[lk + 2], Ik[lk + 3], yk))
        }
        return new Lk(Xk)
      }
      static ArcThru3Points(kk, Fk, Ik) {
        let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          Tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          yk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const lk = [],
          ak = Fk.subtract(kk),
          qk = Ik.subtract(Fk),
          tk = kk.subtract(Ik),
          Zk = ik.t.Cross(ak, qk),
          jk = Zk.length();
        if (jk < Math.pow(10, -8)) return new Lk(lk);
        const ek = ak.lengthSquared(),
          wk = qk.lengthSquared(),
          Hk = tk.lengthSquared(),
          Jk = Zk.lengthSquared(),
          xk = .5 * ak.length() * qk.length() * tk.length() / jk,
          Pk = -.5 * wk * ik.t.Dot(ak, tk) / Jk,
          Kk = -.5 * Hk * ik.t.Dot(ak, qk) / Jk,
          Qk = -.5 * ek * ik.t.Dot(qk, tk) / Jk,
          sk = kk.scale(Pk).add(Fk.scale(Kk)).add(Ik.scale(Qk)),
          Vk = kk.subtract(sk).normalize(),
          zk = ik.t.Cross(Zk, Vk).normalize();
        if (yk) {
          const Fk = 2 * Math.PI / Xk;
          for (let kk = 0; kk <= 2 * Math.PI; kk += Fk) lk.push(sk.add(Vk.scale(xk * Math.cos(kk)).add(zk.scale(xk * Math.sin(kk)))));
          lk.push(kk)
        } else {
          const Fk = 1 / Xk;
          let ik, yk = 0;
          do {
            ik = sk.add(Vk.scale(xk * Math.cos(yk)).add(zk.scale(xk * Math.sin(yk)))), lk.push(ik), yk += Fk
          } while (!ik.equalsWithEpsilon(Ik, xk * Fk * 1.1));
          lk.push(Ik), Tk && lk.push(kk)
        }
        return new Lk(lk)
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
        const Fk = this._points[this._points.length - 1],
          Ik = this._points.slice(),
          Xk = kk.getPoints();
        for (let Tk = 1; Tk < Xk.length; Tk++) Ik.push(Xk[Tk].subtract(Xk[0]).add(Fk));
        return new Lk(Ik)
      }
      _computeLength(kk) {
        let Fk = 0;
        for (let Ik = 1; Ik < kk.length; Ik++) Fk += kk[Ik].subtract(kk[Ik - 1]).length();
        return Fk
      }
    }
  },
  38666: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik
    });
    var Xk = Ik(38674);
    const Tk = (kk, Fk, Ik) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : Ik && "object" === typeof kk ? {
      ...kk
    } : null : kk.clone(Fk) : null;
    class ik {
      static DeepCopy(kk, Fk, Ik, ik) {
        let yk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const lk = function(kk) {
          const Fk = [];
          do {
            const Ik = Object.getOwnPropertyNames(kk);
            for (const kk of Ik) - 1 === Fk.indexOf(kk) && Fk.push(kk)
          } while (kk = Object.getPrototypeOf(kk));
          return Fk
        }(kk);
        for (const qk of lk) {
          if ("_" === qk[0] && (!ik || -1 === ik.indexOf(qk))) continue;
          if (qk.endsWith("Observable")) continue;
          if (Ik && -1 !== Ik.indexOf(qk)) continue;
          const lk = kk[qk],
            Lk = typeof lk;
          if ("function" !== Lk) try {
            if ("object" === Lk)
              if (lk instanceof Uint8Array) Fk[qk] = Uint8Array.from(lk);
              else if (lk instanceof Array) {
              if (Fk[qk] = [], lk.length > 0)
                if ("object" == typeof lk[0])
                  for (let kk = 0; kk < lk.length; kk++) {
                    const Ik = Tk(lk[kk], Fk, yk); - 1 === Fk[qk].indexOf(Ik) && Fk[qk].push(Ik)
                  } else Fk[qk] = lk.slice(0)
            } else Fk[qk] = Tk(lk, Fk, yk);
            else Fk[qk] = lk
          } catch (ak) {
            Xk.e.Warn(ak.message)
          }
        }
      }
    }
  },
  38674: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Xk
    });
    class Xk {
      static _CheckLimit(kk, Fk) {
        let Ik = Xk._LogLimitOutputs[kk];
        return Ik ? Ik.current++ : (Ik = {
          limit: Fk,
          current: 1
        }, Xk._LogLimitOutputs[kk] = Ik), Ik.current <= Ik.limit
      }
      static _GenerateLimitMessage(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Ik = Xk._LogLimitOutputs[kk];
        if (!Ik || !Xk.MessageLimitReached) return;
        const Tk = this._Levels[Fk];
        Ik.current === Ik.limit && Xk[Tk.name](Xk.MessageLimitReached.replace(/%LIMIT%/g, "" + Ik.limit).replace(/%TYPE%/g, Tk.name ?? ""))
      }
      static _AddLogEntry(kk) {
        Xk._LogCache = kk + Xk._LogCache, Xk.OnNewCacheEntry && Xk.OnNewCacheEntry(kk)
      }
      static _FormatMessage(kk) {
        const Fk = kk => kk < 10 ? "0" + kk : "" + kk,
          Ik = new Date;
        return "[" + Fk(Ik.getHours()) + ":" + Fk(Ik.getMinutes()) + ":" + Fk(Ik.getSeconds()) + "]: " + kk
      }
      static _LogDisabled(kk, Fk) {}
      static _LogEnabled() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        const Tk = Array.isArray(Fk) ? Fk[0] : Fk;
        if (void 0 !== Ik && !Xk._CheckLimit(Tk, Ik)) return;
        const ik = Xk._FormatMessage(Tk),
          yk = this._Levels[kk],
          lk = Array.isArray(Fk) ? Fk.slice(1) : [];
        yk.logFunc && yk.logFunc("BJS - " + ik, ...lk);
        const ak = `<div style='color:${yk.color}'>${ik}</div><br>`;
        Xk._AddLogEntry(ak), Xk._GenerateLimitMessage(Tk, kk)
      }
      static get LogCache() {
        return Xk._LogCache
      }
      static ClearLogCache() {
        Xk._LogCache = "", Xk._LogLimitOutputs = {}, Xk.errorsCount = 0
      }
      static set LogLevels(kk) {
        Xk.Log = Xk._LogDisabled, Xk.Warn = Xk._LogDisabled, Xk.Error = Xk._LogDisabled;
        const Fk = [Xk.MessageLogLevel, Xk.WarningLogLevel, Xk.ErrorLogLevel];
        for (const Ik of Fk)
          if ((kk & Ik) === Ik) {
            const kk = this._Levels[Ik];
            Xk[kk.name] = Xk._LogEnabled.bind(Xk, Ik)
          }
      }
    }
    Xk.NoneLogLevel = 0, Xk.MessageLogLevel = 1, Xk.WarningLogLevel = 2, Xk.ErrorLogLevel = 4, Xk.AllLogLevel = 7, Xk.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Xk._LogCache = "", Xk._LogLimitOutputs = {}, Xk._Levels = [{}, {
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
    }], Xk.errorsCount = 0, Xk.Log = Xk._LogEnabled.bind(Xk, Xk.MessageLogLevel), Xk.Warn = Xk._LogEnabled.bind(Xk, Xk.WarningLogLevel), Xk.Error = Xk._LogEnabled.bind(Xk, Xk.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);