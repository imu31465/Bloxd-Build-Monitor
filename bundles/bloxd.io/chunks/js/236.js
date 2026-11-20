export const id = 236;
export const ids = [236];
export const modules = {
  40516: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk,
      f: () => sk,
      i: () => dk
    });
    var Rk, tk = Bk(36790),
      ak = Bk(36758);
    ! function(kk) {
      kk[kk.CW = 0] = "CW", kk[kk.CCW = 1] = "CCW"
    }(Rk || (Rk = {}));
    class Xk {
      static Interpolate(kk, Fk, Bk, Rk, tk) {
        if (0 === kk) return 0;
        const ak = 1 - 3 * Rk + 3 * Fk,
          Xk = 3 * Rk - 6 * Fk,
          bk = 3 * Fk;
        let wk = kk;
        for (let dk = 0; dk < 5; dk++) {
          const Fk = wk * wk;
          wk -= (ak * (Fk * wk) + Xk * Fk + bk * wk - kk) * (1 / (3 * ak * Fk + 2 * Xk * wk + bk)), wk = Math.min(1, Math.max(0, wk))
        }
        return 3 * Math.pow(1 - wk, 2) * wk * Bk + 3 * (1 - wk) * Math.pow(wk, 2) * tk + Math.pow(wk, 3)
      }
    }
    class bk {
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
        const Bk = Fk.subtract(kk),
          Rk = Math.atan2(Bk.y, Bk.x);
        return new bk(Rk)
      }
      static BetweenTwoVectors(kk, Fk) {
        let Bk = kk.lengthSquared() * Fk.lengthSquared();
        if (0 === Bk) return new bk(Math.PI / 2);
        Bk = Math.sqrt(Bk);
        let Rk = kk.dot(Fk) / Bk;
        Rk = (0, tk.Clamp)(Rk, -1, 1);
        const ak = Math.acos(Rk);
        return new bk(ak)
      }
      static FromRadians(kk) {
        return new bk(kk)
      }
      static FromDegrees(kk) {
        return new bk(kk * Math.PI / 180)
      }
    }
    class wk {
      constructor(kk, Fk, Bk) {
        this.startPoint = kk, this.midPoint = Fk, this.endPoint = Bk;
        const Rk = Math.pow(Fk.x, 2) + Math.pow(Fk.y, 2),
          tk = (Math.pow(kk.x, 2) + Math.pow(kk.y, 2) - Rk) / 2,
          Xk = (Rk - Math.pow(Bk.x, 2) - Math.pow(Bk.y, 2)) / 2,
          wk = (kk.x - Fk.x) * (Fk.y - Bk.y) - (Fk.x - Bk.x) * (kk.y - Fk.y);
        this.centerPoint = new ak.p((tk * (Fk.y - Bk.y) - Xk * (kk.y - Fk.y)) / wk, ((kk.x - Fk.x) * Xk - (Fk.x - Bk.x) * tk) / wk), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = bk.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const dk = this.startAngle.degrees();
        let sk = bk.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          Vk = bk.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        sk - dk > 180 && (sk -= 360), sk - dk < -180 && (sk += 360), Vk - sk > 180 && (Vk -= 360), Vk - sk < -180 && (Vk += 360), this.orientation = sk - dk < 0 ? 0 : 1, this.angle = bk.FromDegrees(0 === this.orientation ? dk - Vk : Vk - dk)
      }
    }
    class dk {
      constructor(kk, Fk) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new ak.p(kk, Fk))
      }
      addLineTo(kk, Fk) {
        if (this.closed) return this;
        const Bk = new ak.p(kk, Fk),
          Rk = this._points[this._points.length - 1];
        return this._points.push(Bk), this._length += Bk.subtract(Rk).length(), this
      }
      addArcTo(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Xk = this._points[this._points.length - 1],
          bk = new ak.p(kk, Fk),
          dk = new ak.p(Bk, Rk),
          sk = new wk(Xk, bk, dk);
        let Vk = sk.angle.radians() / tk;
        0 === sk.orientation && (Vk *= -1);
        let Jk = sk.startAngle.radians() + Vk;
        for (let ak = 0; ak < tk; ak++) {
          const kk = Math.cos(Jk) * sk.radius + sk.centerPoint.x,
            Fk = Math.sin(Jk) * sk.radius + sk.centerPoint.y;
          this.addLineTo(kk, Fk), Jk += Vk
        }
        return this
      }
      addQuadraticCurveTo(kk, Fk, Bk, Rk) {
        let tk = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const ak = (kk, Fk, Bk, Rk) => (1 - kk) * (1 - kk) * Fk + 2 * kk * (1 - kk) * Bk + kk * kk * Rk,
          Xk = this._points[this._points.length - 1];
        for (let bk = 0; bk <= tk; bk++) {
          const wk = bk / tk,
            dk = ak(wk, Xk.x, kk, Bk),
            sk = ak(wk, Xk.y, Fk, Rk);
          this.addLineTo(dk, sk)
        }
        return this
      }
      addBezierCurveTo(kk, Fk, Bk, Rk, tk, ak) {
        let Xk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const bk = (kk, Fk, Bk, Rk, tk) => (1 - kk) * (1 - kk) * (1 - kk) * Fk + 3 * kk * (1 - kk) * (1 - kk) * Bk + 3 * kk * kk * (1 - kk) * Rk + kk * kk * kk * tk,
          wk = this._points[this._points.length - 1];
        for (let dk = 0; dk <= Xk; dk++) {
          const sk = dk / Xk,
            Vk = bk(sk, wk.x, kk, Bk, tk),
            Jk = bk(sk, wk.y, Fk, Rk, ak);
          this.addLineTo(Vk, Jk)
        }
        return this
      }
      isPointInside(kk) {
        let Fk = !1;
        const Bk = this._points.length;
        for (let Rk = Bk - 1, tk = 0; tk < Bk; Rk = tk++) {
          let Bk = this._points[Rk],
            ak = this._points[tk],
            Xk = ak.x - Bk.x,
            bk = ak.y - Bk.y;
          if (Math.abs(bk) > Number.EPSILON) {
            if (bk < 0 && (Bk = this._points[tk], Xk = -Xk, ak = this._points[Rk], bk = -bk), kk.y < Bk.y || kk.y > ak.y) continue;
            if (kk.y === Bk.y && kk.x === Bk.x) return !0;
            {
              const Rk = bk * (kk.x - Bk.x) - Xk * (kk.y - Bk.y);
              if (0 === Rk) return !0;
              if (Rk < 0) continue;
              Fk = !Fk
            }
          } else {
            if (kk.y !== Bk.y) continue;
            if (ak.x <= kk.x && kk.x <= Bk.x || Bk.x <= kk.x && kk.x <= ak.x) return !0
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
        for (let Bk = kk - 1, Rk = 0; Rk < kk; Bk = Rk++) Fk += this._points[Bk].x * this._points[Rk].y - this._points[Rk].x * this._points[Bk].y;
        return .5 * Fk
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(kk) {
        if (kk < 0 || kk > 1) return ak.p.Zero();
        const Fk = kk * this.length();
        let Bk = 0;
        for (let Rk = 0; Rk < this._points.length; Rk++) {
          const kk = (Rk + 1) % this._points.length,
            tk = this._points[Rk],
            Xk = this._points[kk].subtract(tk),
            bk = Xk.length() + Bk;
          if (Fk >= Bk && Fk <= bk) {
            const kk = Xk.normalize(),
              Rk = Fk - Bk;
            return new ak.p(tk.x + kk.x * Rk, tk.y + kk.y * Rk)
          }
          Bk = bk
        }
        return ak.p.Zero()
      }
      static StartingAt(kk, Fk) {
        return new dk(kk, Fk)
      }
    }
    class sk {
      static CreateQuadraticBezier(kk, Fk, Bk, Rk) {
        Rk = Rk > 2 ? Rk : 3;
        const tk = [],
          Xk = (kk, Fk, Bk, Rk) => (1 - kk) * (1 - kk) * Fk + 2 * kk * (1 - kk) * Bk + kk * kk * Rk;
        for (let bk = 0; bk <= Rk; bk++) tk.push(new ak.s(Xk(bk / Rk, kk.x, Fk.x, Bk.x), Xk(bk / Rk, kk.y, Fk.y, Bk.y), Xk(bk / Rk, kk.z, Fk.z, Bk.z)));
        return new sk(tk)
      }
      static CreateCubicBezier(kk, Fk, Bk, Rk, tk) {
        tk = tk > 3 ? tk : 4;
        const Xk = [],
          bk = (kk, Fk, Bk, Rk, tk) => (1 - kk) * (1 - kk) * (1 - kk) * Fk + 3 * kk * (1 - kk) * (1 - kk) * Bk + 3 * kk * kk * (1 - kk) * Rk + kk * kk * kk * tk;
        for (let wk = 0; wk <= tk; wk++) Xk.push(new ak.s(bk(wk / tk, kk.x, Fk.x, Bk.x, Rk.x), bk(wk / tk, kk.y, Fk.y, Bk.y, Rk.y), bk(wk / tk, kk.z, Fk.z, Bk.z, Rk.z)));
        return new sk(Xk)
      }
      static CreateHermiteSpline(kk, Fk, Bk, Rk, tk) {
        const Xk = [],
          bk = 1 / tk;
        for (let wk = 0; wk <= tk; wk++) Xk.push(ak.s.Hermite(kk, Fk, Bk, Rk, wk * bk));
        return new sk(Xk)
      }
      static CreateCatmullRomSpline(kk, Fk, Bk) {
        const Rk = [],
          tk = 1 / Fk;
        let Xk = 0;
        if (Bk) {
          const Bk = kk.length;
          for (let bk = 0; bk < Bk; bk++) {
            Xk = 0;
            for (let wk = 0; wk < Fk; wk++) Rk.push(ak.s.CatmullRom(kk[bk % Bk], kk[(bk + 1) % Bk], kk[(bk + 2) % Bk], kk[(bk + 3) % Bk], Xk)), Xk += tk
          }
          Rk.push(Rk[0])
        } else {
          const Bk = [];
          Bk.push(kk[0].clone()), Bk.push(...kk), Bk.push(kk[kk.length - 1].clone());
          let bk = 0;
          for (; bk < Bk.length - 3; bk++) {
            Xk = 0;
            for (let kk = 0; kk < Fk; kk++) Rk.push(ak.s.CatmullRom(Bk[bk], Bk[bk + 1], Bk[bk + 2], Bk[bk + 3], Xk)), Xk += tk
          }
          bk--, Rk.push(ak.s.CatmullRom(Bk[bk], Bk[bk + 1], Bk[bk + 2], Bk[bk + 3], Xk))
        }
        return new sk(Rk)
      }
      static ArcThru3Points(kk, Fk, Bk) {
        let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          tk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Xk = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const bk = [],
          wk = Fk.subtract(kk),
          dk = Bk.subtract(Fk),
          Vk = kk.subtract(Bk),
          Jk = ak.s.Cross(wk, dk),
          Ak = Jk.length();
        if (Ak < Math.pow(10, -8)) return new sk(bk);
        const ek = wk.lengthSquared(),
          yk = dk.lengthSquared(),
          fk = Vk.lengthSquared(),
          mk = Jk.lengthSquared(),
          Wk = .5 * wk.length() * dk.length() * Vk.length() / Ak,
          vk = -.5 * yk * ak.s.Dot(wk, Vk) / mk,
          ik = -.5 * fk * ak.s.Dot(wk, dk) / mk,
          Yk = -.5 * ek * ak.s.Dot(dk, Vk) / mk,
          Lk = kk.scale(vk).add(Fk.scale(ik)).add(Bk.scale(Yk)),
          Ok = kk.subtract(Lk).normalize(),
          Ek = ak.s.Cross(Jk, Ok).normalize();
        if (Xk) {
          const Fk = 2 * Math.PI / Rk;
          for (let kk = 0; kk <= 2 * Math.PI; kk += Fk) bk.push(Lk.add(Ok.scale(Wk * Math.cos(kk)).add(Ek.scale(Wk * Math.sin(kk)))));
          bk.push(kk)
        } else {
          const Fk = 1 / Rk;
          let ak, Xk = 0;
          do {
            ak = Lk.add(Ok.scale(Wk * Math.cos(Xk)).add(Ek.scale(Wk * Math.sin(Xk)))), bk.push(ak), Xk += Fk
          } while (!ak.equalsWithEpsilon(Bk, Wk * Fk * 1.1));
          bk.push(Bk), tk && bk.push(kk)
        }
        return new sk(bk)
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
          Bk = this._points.slice(),
          Rk = kk.getPoints();
        for (let tk = 1; tk < Rk.length; tk++) Bk.push(Rk[tk].subtract(Rk[0]).add(Fk));
        return new sk(Bk)
      }
      _computeLength(kk) {
        let Fk = 0;
        for (let Bk = 1; Bk < kk.length; Bk++) Fk += kk[Bk].subtract(kk[Bk - 1]).length();
        return Fk
      }
    }
  },
  38318: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => ak
    });
    var Rk = Bk(38320);
    const tk = (kk, Fk, Bk) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : Bk && "object" === typeof kk ? {
      ...kk
    } : null : kk.clone(Fk) : null;
    class ak {
      static DeepCopy(kk, Fk, Bk, ak) {
        let Xk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const bk = function(kk) {
          const Fk = [];
          do {
            const Bk = Object.getOwnPropertyNames(kk);
            for (const kk of Bk) - 1 === Fk.indexOf(kk) && Fk.push(kk)
          } while (kk = Object.getPrototypeOf(kk));
          return Fk
        }(kk);
        for (const dk of bk) {
          if ("_" === dk[0] && (!ak || -1 === ak.indexOf(dk))) continue;
          if (dk.endsWith("Observable")) continue;
          if (Bk && -1 !== Bk.indexOf(dk)) continue;
          const bk = kk[dk],
            sk = typeof bk;
          if ("function" !== sk) try {
            if ("object" === sk)
              if (bk instanceof Uint8Array) Fk[dk] = Uint8Array.from(bk);
              else if (bk instanceof Array) {
              if (Fk[dk] = [], bk.length > 0)
                if ("object" == typeof bk[0])
                  for (let kk = 0; kk < bk.length; kk++) {
                    const Bk = tk(bk[kk], Fk, Xk); - 1 === Fk[dk].indexOf(Bk) && Fk[dk].push(Bk)
                  } else Fk[dk] = bk.slice(0)
            } else Fk[dk] = tk(bk, Fk, Xk);
            else Fk[dk] = bk
          } catch (wk) {
            Rk.b.Warn(wk.message)
          }
        }
      }
    }
  },
  38320: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => Rk
    });
    class Rk {
      static _CheckLimit(kk, Fk) {
        let Bk = Rk._LogLimitOutputs[kk];
        return Bk ? Bk.current++ : (Bk = {
          limit: Fk,
          current: 1
        }, Rk._LogLimitOutputs[kk] = Bk), Bk.current <= Bk.limit
      }
      static _GenerateLimitMessage(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Bk = Rk._LogLimitOutputs[kk];
        if (!Bk || !Rk.MessageLimitReached) return;
        const tk = this._Levels[Fk];
        Bk.current === Bk.limit && Rk[tk.name](Rk.MessageLimitReached.replace(/%LIMIT%/g, "" + Bk.limit).replace(/%TYPE%/g, tk.name ?? ""))
      }
      static _AddLogEntry(kk) {
        Rk._LogCache = kk + Rk._LogCache, Rk.OnNewCacheEntry && Rk.OnNewCacheEntry(kk)
      }
      static _FormatMessage(kk) {
        const Fk = kk => kk < 10 ? "0" + kk : "" + kk,
          Bk = new Date;
        return "[" + Fk(Bk.getHours()) + ":" + Fk(Bk.getMinutes()) + ":" + Fk(Bk.getSeconds()) + "]: " + kk
      }
      static _LogDisabled(kk, Fk) {}
      static _LogEnabled() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Fk = arguments.length > 1 ? arguments[1] : void 0,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        const tk = Array.isArray(Fk) ? Fk[0] : Fk;
        if (void 0 !== Bk && !Rk._CheckLimit(tk, Bk)) return;
        const ak = Rk._FormatMessage(tk),
          Xk = this._Levels[kk],
          bk = Array.isArray(Fk) ? Fk.slice(1) : [];
        Xk.logFunc && Xk.logFunc("BJS - " + ak, ...bk);
        const wk = `<div style='color:${Xk.color}'>${ak}</div><br>`;
        Rk._AddLogEntry(wk), Rk._GenerateLimitMessage(tk, kk)
      }
      static get LogCache() {
        return Rk._LogCache
      }
      static ClearLogCache() {
        Rk._LogCache = "", Rk._LogLimitOutputs = {}, Rk.errorsCount = 0
      }
      static set LogLevels(kk) {
        Rk.Log = Rk._LogDisabled, Rk.Warn = Rk._LogDisabled, Rk.Error = Rk._LogDisabled;
        const Fk = [Rk.MessageLogLevel, Rk.WarningLogLevel, Rk.ErrorLogLevel];
        for (const Bk of Fk)
          if ((kk & Bk) === Bk) {
            const kk = this._Levels[Bk];
            Rk[kk.name] = Rk._LogEnabled.bind(Rk, Bk)
          }
      }
    }
    Rk.NoneLogLevel = 0, Rk.MessageLogLevel = 1, Rk.WarningLogLevel = 2, Rk.ErrorLogLevel = 4, Rk.AllLogLevel = 7, Rk.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Rk._LogCache = "", Rk._LogLimitOutputs = {}, Rk._Levels = [{}, {
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
    }], Rk.errorsCount = 0, Rk.Log = Rk._LogEnabled.bind(Rk, Rk.MessageLogLevel), Rk.Warn = Rk._LogEnabled.bind(Rk, Rk.WarningLogLevel), Rk.Error = Rk._LogEnabled.bind(Rk, Rk.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);