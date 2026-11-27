export const id = 279;
export const ids = [279];
export const modules = {
  42952: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => jr,
      h: () => pr,
      k: () => Er
    });
    var Zr, Wr = Qr(38599),
      ar = Qr(38560);
    ! function(rr) {
      rr[rr.CW = 0] = "CW", rr[rr.CCW = 1] = "CCW"
    }(Zr || (Zr = {}));
    class jr {
      static Interpolate(rr, Sr, Qr, Zr, Wr) {
        if (0 === rr) return 0;
        const ar = 1 - 3 * Zr + 3 * Sr,
          jr = 3 * Zr - 6 * Sr,
          Ir = 3 * Sr;
        let fr = rr;
        for (let Er = 0; Er < 5; Er++) {
          const Sr = fr * fr;
          fr -= (ar * (Sr * fr) + jr * Sr + Ir * fr - rr) * (1 / (3 * ar * Sr + 2 * jr * fr + Ir)), fr = Math.min(1, Math.max(0, fr))
        }
        return 3 * Math.pow(1 - fr, 2) * fr * Qr + 3 * (1 - fr) * Math.pow(fr, 2) * Wr + Math.pow(fr, 3)
      }
    }
    class Ir {
      constructor(rr) {
        this._radians = rr, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(rr, Sr) {
        const Qr = Sr.subtract(rr),
          Zr = Math.atan2(Qr.y, Qr.x);
        return new Ir(Zr)
      }
      static BetweenTwoVectors(rr, Sr) {
        let Qr = rr.lengthSquared() * Sr.lengthSquared();
        if (0 === Qr) return new Ir(Math.PI / 2);
        Qr = Math.sqrt(Qr);
        let Zr = rr.dot(Sr) / Qr;
        Zr = (0, Wr.Clamp)(Zr, -1, 1);
        const ar = Math.acos(Zr);
        return new Ir(ar)
      }
      static FromRadians(rr) {
        return new Ir(rr)
      }
      static FromDegrees(rr) {
        return new Ir(rr * Math.PI / 180)
      }
    }
    class fr {
      constructor(rr, Sr, Qr) {
        this.startPoint = rr, this.midPoint = Sr, this.endPoint = Qr;
        const Zr = Math.pow(Sr.x, 2) + Math.pow(Sr.y, 2),
          Wr = (Math.pow(rr.x, 2) + Math.pow(rr.y, 2) - Zr) / 2,
          jr = (Zr - Math.pow(Qr.x, 2) - Math.pow(Qr.y, 2)) / 2,
          fr = (rr.x - Sr.x) * (Sr.y - Qr.y) - (Sr.x - Qr.x) * (rr.y - Sr.y);
        this.centerPoint = new ar.q((Wr * (Sr.y - Qr.y) - jr * (rr.y - Sr.y)) / fr, ((rr.x - Sr.x) * jr - (Sr.x - Qr.x) * Wr) / fr), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = Ir.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const Er = this.startAngle.degrees();
        let pr = Ir.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          xr = Ir.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        pr - Er > 180 && (pr -= 360), pr - Er < -180 && (pr += 360), xr - pr > 180 && (xr -= 360), xr - pr < -180 && (xr += 360), this.orientation = pr - Er < 0 ? 0 : 1, this.angle = Ir.FromDegrees(0 === this.orientation ? Er - xr : xr - Er)
      }
    }
    class Er {
      constructor(rr, Sr) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new ar.q(rr, Sr))
      }
      addLineTo(rr, Sr) {
        if (this.closed) return this;
        const Qr = new ar.q(rr, Sr),
          Zr = this._points[this._points.length - 1];
        return this._points.push(Qr), this._length += Qr.subtract(Zr).length(), this
      }
      addArcTo(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const jr = this._points[this._points.length - 1],
          Ir = new ar.q(rr, Sr),
          Er = new ar.q(Qr, Zr),
          pr = new fr(jr, Ir, Er);
        let xr = pr.angle.radians() / Wr;
        0 === pr.orientation && (xr *= -1);
        let mr = pr.startAngle.radians() + xr;
        for (let ar = 0; ar < Wr; ar++) {
          const rr = Math.cos(mr) * pr.radius + pr.centerPoint.x,
            Sr = Math.sin(mr) * pr.radius + pr.centerPoint.y;
          this.addLineTo(rr, Sr), mr += xr
        }
        return this
      }
      addQuadraticCurveTo(rr, Sr, Qr, Zr) {
        let Wr = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const ar = (rr, Sr, Qr, Zr) => (1 - rr) * (1 - rr) * Sr + 2 * rr * (1 - rr) * Qr + rr * rr * Zr,
          jr = this._points[this._points.length - 1];
        for (let Ir = 0; Ir <= Wr; Ir++) {
          const fr = Ir / Wr,
            Er = ar(fr, jr.x, rr, Qr),
            pr = ar(fr, jr.y, Sr, Zr);
          this.addLineTo(Er, pr)
        }
        return this
      }
      addBezierCurveTo(rr, Sr, Qr, Zr, Wr, ar) {
        let jr = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const Ir = (rr, Sr, Qr, Zr, Wr) => (1 - rr) * (1 - rr) * (1 - rr) * Sr + 3 * rr * (1 - rr) * (1 - rr) * Qr + 3 * rr * rr * (1 - rr) * Zr + rr * rr * rr * Wr,
          fr = this._points[this._points.length - 1];
        for (let Er = 0; Er <= jr; Er++) {
          const pr = Er / jr,
            xr = Ir(pr, fr.x, rr, Qr, Wr),
            mr = Ir(pr, fr.y, Sr, Zr, ar);
          this.addLineTo(xr, mr)
        }
        return this
      }
      isPointInside(rr) {
        let Sr = !1;
        const Qr = this._points.length;
        for (let Zr = Qr - 1, Wr = 0; Wr < Qr; Zr = Wr++) {
          let Qr = this._points[Zr],
            ar = this._points[Wr],
            jr = ar.x - Qr.x,
            Ir = ar.y - Qr.y;
          if (Math.abs(Ir) > Number.EPSILON) {
            if (Ir < 0 && (Qr = this._points[Wr], jr = -jr, ar = this._points[Zr], Ir = -Ir), rr.y < Qr.y || rr.y > ar.y) continue;
            if (rr.y === Qr.y && rr.x === Qr.x) return !0;
            {
              const Zr = Ir * (rr.x - Qr.x) - jr * (rr.y - Qr.y);
              if (0 === Zr) return !0;
              if (Zr < 0) continue;
              Sr = !Sr
            }
          } else {
            if (rr.y !== Qr.y) continue;
            if (ar.x <= rr.x && rr.x <= Qr.x || Qr.x <= rr.x && rr.x <= ar.x) return !0
          }
        }
        return Sr
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let rr = this._length;
        if (this.closed) {
          const Sr = this._points[this._points.length - 1];
          rr += this._points[0].subtract(Sr).length()
        }
        return rr
      }
      area() {
        const rr = this._points.length;
        let Sr = 0;
        for (let Qr = rr - 1, Zr = 0; Zr < rr; Qr = Zr++) Sr += this._points[Qr].x * this._points[Zr].y - this._points[Zr].x * this._points[Qr].y;
        return .5 * Sr
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(rr) {
        if (rr < 0 || rr > 1) return ar.q.Zero();
        const Sr = rr * this.length();
        let Qr = 0;
        for (let Zr = 0; Zr < this._points.length; Zr++) {
          const rr = (Zr + 1) % this._points.length,
            Wr = this._points[Zr],
            jr = this._points[rr].subtract(Wr),
            Ir = jr.length() + Qr;
          if (Sr >= Qr && Sr <= Ir) {
            const rr = jr.normalize(),
              Zr = Sr - Qr;
            return new ar.q(Wr.x + rr.x * Zr, Wr.y + rr.y * Zr)
          }
          Qr = Ir
        }
        return ar.q.Zero()
      }
      static StartingAt(rr, Sr) {
        return new Er(rr, Sr)
      }
    }
    class pr {
      static CreateQuadraticBezier(rr, Sr, Qr, Zr) {
        Zr = Zr > 2 ? Zr : 3;
        const Wr = [],
          jr = (rr, Sr, Qr, Zr) => (1 - rr) * (1 - rr) * Sr + 2 * rr * (1 - rr) * Qr + rr * rr * Zr;
        for (let Ir = 0; Ir <= Zr; Ir++) Wr.push(new ar.u(jr(Ir / Zr, rr.x, Sr.x, Qr.x), jr(Ir / Zr, rr.y, Sr.y, Qr.y), jr(Ir / Zr, rr.z, Sr.z, Qr.z)));
        return new pr(Wr)
      }
      static CreateCubicBezier(rr, Sr, Qr, Zr, Wr) {
        Wr = Wr > 3 ? Wr : 4;
        const jr = [],
          Ir = (rr, Sr, Qr, Zr, Wr) => (1 - rr) * (1 - rr) * (1 - rr) * Sr + 3 * rr * (1 - rr) * (1 - rr) * Qr + 3 * rr * rr * (1 - rr) * Zr + rr * rr * rr * Wr;
        for (let fr = 0; fr <= Wr; fr++) jr.push(new ar.u(Ir(fr / Wr, rr.x, Sr.x, Qr.x, Zr.x), Ir(fr / Wr, rr.y, Sr.y, Qr.y, Zr.y), Ir(fr / Wr, rr.z, Sr.z, Qr.z, Zr.z)));
        return new pr(jr)
      }
      static CreateHermiteSpline(rr, Sr, Qr, Zr, Wr) {
        const jr = [],
          Ir = 1 / Wr;
        for (let fr = 0; fr <= Wr; fr++) jr.push(ar.u.Hermite(rr, Sr, Qr, Zr, fr * Ir));
        return new pr(jr)
      }
      static CreateCatmullRomSpline(rr, Sr, Qr) {
        const Zr = [],
          Wr = 1 / Sr;
        let jr = 0;
        if (Qr) {
          const Qr = rr.length;
          for (let Ir = 0; Ir < Qr; Ir++) {
            jr = 0;
            for (let fr = 0; fr < Sr; fr++) Zr.push(ar.u.CatmullRom(rr[Ir % Qr], rr[(Ir + 1) % Qr], rr[(Ir + 2) % Qr], rr[(Ir + 3) % Qr], jr)), jr += Wr
          }
          Zr.push(Zr[0])
        } else {
          const Qr = [];
          Qr.push(rr[0].clone()), Qr.push(...rr), Qr.push(rr[rr.length - 1].clone());
          let Ir = 0;
          for (; Ir < Qr.length - 3; Ir++) {
            jr = 0;
            for (let rr = 0; rr < Sr; rr++) Zr.push(ar.u.CatmullRom(Qr[Ir], Qr[Ir + 1], Qr[Ir + 2], Qr[Ir + 3], jr)), jr += Wr
          }
          Ir--, Zr.push(ar.u.CatmullRom(Qr[Ir], Qr[Ir + 1], Qr[Ir + 2], Qr[Ir + 3], jr))
        }
        return new pr(Zr)
      }
      static ArcThru3Points(rr, Sr, Qr) {
        let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          Wr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          jr = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Ir = [],
          fr = Sr.subtract(rr),
          Er = Qr.subtract(Sr),
          xr = rr.subtract(Qr),
          mr = ar.u.Cross(fr, Er),
          Nr = mr.length();
        if (Nr < Math.pow(10, -8)) return new pr(Ir);
        const Ur = fr.lengthSquared(),
          tr = Er.lengthSquared(),
          hr = xr.lengthSquared(),
          zr = mr.lengthSquared(),
          Yr = .5 * fr.length() * Er.length() * xr.length() / Nr,
          nr = -.5 * tr * ar.u.Dot(fr, xr) / zr,
          er = -.5 * hr * ar.u.Dot(fr, Er) / zr,
          Kr = -.5 * Ur * ar.u.Dot(Er, xr) / zr,
          yr = rr.scale(nr).add(Sr.scale(er)).add(Qr.scale(Kr)),
          Br = rr.subtract(yr).normalize(),
          Tr = ar.u.Cross(mr, Br).normalize();
        if (jr) {
          const Sr = 2 * Math.PI / Zr;
          for (let rr = 0; rr <= 2 * Math.PI; rr += Sr) Ir.push(yr.add(Br.scale(Yr * Math.cos(rr)).add(Tr.scale(Yr * Math.sin(rr)))));
          Ir.push(rr)
        } else {
          const Sr = 1 / Zr;
          let ar, jr = 0;
          do {
            ar = yr.add(Br.scale(Yr * Math.cos(jr)).add(Tr.scale(Yr * Math.sin(jr)))), Ir.push(ar), jr += Sr
          } while (!ar.equalsWithEpsilon(Qr, Yr * Sr * 1.1));
          Ir.push(Qr), Wr && Ir.push(rr)
        }
        return new pr(Ir)
      }
      constructor(rr) {
        this._length = 0, this._points = rr, this._length = this._computeLength(rr)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (rr) {
        const Sr = this._points[this._points.length - 1],
          Qr = this._points.slice(),
          Zr = rr.getPoints();
        for (let Wr = 1; Wr < Zr.length; Wr++) Qr.push(Zr[Wr].subtract(Zr[0]).add(Sr));
        return new pr(Qr)
      }
      _computeLength(rr) {
        let Sr = 0;
        for (let Qr = 1; Qr < rr.length; Qr++) Sr += rr[Qr].subtract(rr[Qr - 1]).length();
        return Sr
      }
    }
  },
  40237: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => ar
    });
    var Zr = Qr(40246);
    const Wr = (rr, Sr, Qr) => rr ? rr.getClassName && "Mesh" === rr.getClassName() ? null : !rr.getClassName || "SubMesh" !== rr.getClassName() && "PhysicsBody" !== rr.getClassName() ? rr.clone ? rr.clone() : Array.isArray(rr) ? rr.slice() : Qr && "object" === typeof rr ? {
      ...rr
    } : null : rr.clone(Sr) : null;
    class ar {
      static DeepCopy(rr, Sr, Qr, ar) {
        let jr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ir = function(rr) {
          const Sr = [];
          do {
            const Qr = Object.getOwnPropertyNames(rr);
            for (const rr of Qr) - 1 === Sr.indexOf(rr) && Sr.push(rr)
          } while (rr = Object.getPrototypeOf(rr));
          return Sr
        }(rr);
        for (const Er of Ir) {
          if ("_" === Er[0] && (!ar || -1 === ar.indexOf(Er))) continue;
          if (Er.endsWith("Observable")) continue;
          if (Qr && -1 !== Qr.indexOf(Er)) continue;
          const Ir = rr[Er],
            pr = typeof Ir;
          if ("function" !== pr) try {
            if ("object" === pr)
              if (Ir instanceof Uint8Array) Sr[Er] = Uint8Array.from(Ir);
              else if (Ir instanceof Array) {
              if (Sr[Er] = [], Ir.length > 0)
                if ("object" == typeof Ir[0])
                  for (let rr = 0; rr < Ir.length; rr++) {
                    const Qr = Wr(Ir[rr], Sr, jr); - 1 === Sr[Er].indexOf(Qr) && Sr[Er].push(Qr)
                  } else Sr[Er] = Ir.slice(0)
            } else Sr[Er] = Wr(Ir, Sr, jr);
            else Sr[Er] = Ir
          } catch (fr) {
            Zr.c.Warn(fr.message)
          }
        }
      }
    }
  },
  40246: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      c: () => Zr
    });
    class Zr {
      static _CheckLimit(rr, Sr) {
        let Qr = Zr._LogLimitOutputs[rr];
        return Qr ? Qr.current++ : (Qr = {
          limit: Sr,
          current: 1
        }, Zr._LogLimitOutputs[rr] = Qr), Qr.current <= Qr.limit
      }
      static _GenerateLimitMessage(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Qr = Zr._LogLimitOutputs[rr];
        if (!Qr || !Zr.MessageLimitReached) return;
        const Wr = this._Levels[Sr];
        Qr.current === Qr.limit && Zr[Wr.name](Zr.MessageLimitReached.replace(/%LIMIT%/g, "" + Qr.limit).replace(/%TYPE%/g, Wr.name ?? ""))
      }
      static _AddLogEntry(rr) {
        Zr._LogCache = rr + Zr._LogCache, Zr.OnNewCacheEntry && Zr.OnNewCacheEntry(rr)
      }
      static _FormatMessage(rr) {
        const Sr = rr => rr < 10 ? "0" + rr : "" + rr,
          Qr = new Date;
        return "[" + Sr(Qr.getHours()) + ":" + Sr(Qr.getMinutes()) + ":" + Sr(Qr.getSeconds()) + "]: " + rr
      }
      static _LogDisabled(rr, Sr) {}
      static _LogEnabled() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Sr = arguments.length > 1 ? arguments[1] : void 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        const Wr = Array.isArray(Sr) ? Sr[0] : Sr;
        if (void 0 !== Qr && !Zr._CheckLimit(Wr, Qr)) return;
        const ar = Zr._FormatMessage(Wr),
          jr = this._Levels[rr],
          Ir = Array.isArray(Sr) ? Sr.slice(1) : [];
        jr.logFunc && jr.logFunc("BJS - " + ar, ...Ir);
        const fr = `<div style='color:${jr.color}'>${ar}</div><br>`;
        Zr._AddLogEntry(fr), Zr._GenerateLimitMessage(Wr, rr)
      }
      static get LogCache() {
        return Zr._LogCache
      }
      static ClearLogCache() {
        Zr._LogCache = "", Zr._LogLimitOutputs = {}, Zr.errorsCount = 0
      }
      static set LogLevels(rr) {
        Zr.Log = Zr._LogDisabled, Zr.Warn = Zr._LogDisabled, Zr.Error = Zr._LogDisabled;
        const Sr = [Zr.MessageLogLevel, Zr.WarningLogLevel, Zr.ErrorLogLevel];
        for (const Qr of Sr)
          if ((rr & Qr) === Qr) {
            const rr = this._Levels[Qr];
            Zr[rr.name] = Zr._LogEnabled.bind(Zr, Qr)
          }
      }
    }
    Zr.NoneLogLevel = 0, Zr.MessageLogLevel = 1, Zr.WarningLogLevel = 2, Zr.ErrorLogLevel = 4, Zr.AllLogLevel = 7, Zr.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Zr._LogCache = "", Zr._LogLimitOutputs = {}, Zr._Levels = [{}, {
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
    }], Zr.errorsCount = 0, Zr.Log = Zr._LogEnabled.bind(Zr, Zr.MessageLogLevel), Zr.Warn = Zr._LogEnabled.bind(Zr, Zr.WarningLogLevel), Zr.Error = Zr._LogEnabled.bind(Zr, Zr.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);