export const id = 236;
export const ids = [236];
export const modules = {
  40663: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => mu,
      g: () => Vu,
      k: () => Xu
    });
    var Eu, Ku = yu(36865),
      Qu = yu(36830);
    ! function(uu) {
      uu[uu.CW = 0] = "CW", uu[uu.CCW = 1] = "CCW"
    }(Eu || (Eu = {}));
    class mu {
      static Interpolate(uu, Ru, yu, Eu, Ku) {
        if (0 === uu) return 0;
        const Qu = 1 - 3 * Eu + 3 * Ru,
          mu = 3 * Eu - 6 * Ru,
          Ju = 3 * Ru;
        let Nu = uu;
        for (let Xu = 0; Xu < 5; Xu++) {
          const Ru = Nu * Nu;
          Nu -= (Qu * (Ru * Nu) + mu * Ru + Ju * Nu - uu) * (1 / (3 * Qu * Ru + 2 * mu * Nu + Ju)), Nu = Math.min(1, Math.max(0, Nu))
        }
        return 3 * Math.pow(1 - Nu, 2) * Nu * yu + 3 * (1 - Nu) * Math.pow(Nu, 2) * Ku + Math.pow(Nu, 3)
      }
    }
    class Ju {
      constructor(uu) {
        this._radians = uu, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(uu, Ru) {
        const yu = Ru.subtract(uu),
          Eu = Math.atan2(yu.y, yu.x);
        return new Ju(Eu)
      }
      static BetweenTwoVectors(uu, Ru) {
        let yu = uu.lengthSquared() * Ru.lengthSquared();
        if (0 === yu) return new Ju(Math.PI / 2);
        yu = Math.sqrt(yu);
        let Eu = uu.dot(Ru) / yu;
        Eu = (0, Ku.Clamp)(Eu, -1, 1);
        const Qu = Math.acos(Eu);
        return new Ju(Qu)
      }
      static FromRadians(uu) {
        return new Ju(uu)
      }
      static FromDegrees(uu) {
        return new Ju(uu * Math.PI / 180)
      }
    }
    class Nu {
      constructor(uu, Ru, yu) {
        this.startPoint = uu, this.midPoint = Ru, this.endPoint = yu;
        const Eu = Math.pow(Ru.x, 2) + Math.pow(Ru.y, 2),
          Ku = (Math.pow(uu.x, 2) + Math.pow(uu.y, 2) - Eu) / 2,
          mu = (Eu - Math.pow(yu.x, 2) - Math.pow(yu.y, 2)) / 2,
          Nu = (uu.x - Ru.x) * (Ru.y - yu.y) - (Ru.x - yu.x) * (uu.y - Ru.y);
        this.centerPoint = new Qu.n((Ku * (Ru.y - yu.y) - mu * (uu.y - Ru.y)) / Nu, ((uu.x - Ru.x) * mu - (Ru.x - yu.x) * Ku) / Nu), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = Ju.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const Xu = this.startAngle.degrees();
        let Vu = Ju.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          ru = Ju.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        Vu - Xu > 180 && (Vu -= 360), Vu - Xu < -180 && (Vu += 360), ru - Vu > 180 && (ru -= 360), ru - Vu < -180 && (ru += 360), this.orientation = Vu - Xu < 0 ? 0 : 1, this.angle = Ju.FromDegrees(0 === this.orientation ? Xu - ru : ru - Xu)
      }
    }
    class Xu {
      constructor(uu, Ru) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new Qu.n(uu, Ru))
      }
      addLineTo(uu, Ru) {
        if (this.closed) return this;
        const yu = new Qu.n(uu, Ru),
          Eu = this._points[this._points.length - 1];
        return this._points.push(yu), this._length += yu.subtract(Eu).length(), this
      }
      addArcTo(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const mu = this._points[this._points.length - 1],
          Ju = new Qu.n(uu, Ru),
          Xu = new Qu.n(yu, Eu),
          Vu = new Nu(mu, Ju, Xu);
        let ru = Vu.angle.radians() / Ku;
        0 === Vu.orientation && (ru *= -1);
        let Bu = Vu.startAngle.radians() + ru;
        for (let Qu = 0; Qu < Ku; Qu++) {
          const uu = Math.cos(Bu) * Vu.radius + Vu.centerPoint.x,
            Ru = Math.sin(Bu) * Vu.radius + Vu.centerPoint.y;
          this.addLineTo(uu, Ru), Bu += ru
        }
        return this
      }
      addQuadraticCurveTo(uu, Ru, yu, Eu) {
        let Ku = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Qu = (uu, Ru, yu, Eu) => (1 - uu) * (1 - uu) * Ru + 2 * uu * (1 - uu) * yu + uu * uu * Eu,
          mu = this._points[this._points.length - 1];
        for (let Ju = 0; Ju <= Ku; Ju++) {
          const Nu = Ju / Ku,
            Xu = Qu(Nu, mu.x, uu, yu),
            Vu = Qu(Nu, mu.y, Ru, Eu);
          this.addLineTo(Xu, Vu)
        }
        return this
      }
      addBezierCurveTo(uu, Ru, yu, Eu, Ku, Qu) {
        let mu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const Ju = (uu, Ru, yu, Eu, Ku) => (1 - uu) * (1 - uu) * (1 - uu) * Ru + 3 * uu * (1 - uu) * (1 - uu) * yu + 3 * uu * uu * (1 - uu) * Eu + uu * uu * uu * Ku,
          Nu = this._points[this._points.length - 1];
        for (let Xu = 0; Xu <= mu; Xu++) {
          const Vu = Xu / mu,
            ru = Ju(Vu, Nu.x, uu, yu, Ku),
            Bu = Ju(Vu, Nu.y, Ru, Eu, Qu);
          this.addLineTo(ru, Bu)
        }
        return this
      }
      isPointInside(uu) {
        let Ru = !1;
        const yu = this._points.length;
        for (let Eu = yu - 1, Ku = 0; Ku < yu; Eu = Ku++) {
          let yu = this._points[Eu],
            Qu = this._points[Ku],
            mu = Qu.x - yu.x,
            Ju = Qu.y - yu.y;
          if (Math.abs(Ju) > Number.EPSILON) {
            if (Ju < 0 && (yu = this._points[Ku], mu = -mu, Qu = this._points[Eu], Ju = -Ju), uu.y < yu.y || uu.y > Qu.y) continue;
            if (uu.y === yu.y && uu.x === yu.x) return !0;
            {
              const Eu = Ju * (uu.x - yu.x) - mu * (uu.y - yu.y);
              if (0 === Eu) return !0;
              if (Eu < 0) continue;
              Ru = !Ru
            }
          } else {
            if (uu.y !== yu.y) continue;
            if (Qu.x <= uu.x && uu.x <= yu.x || yu.x <= uu.x && uu.x <= Qu.x) return !0
          }
        }
        return Ru
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let uu = this._length;
        if (this.closed) {
          const Ru = this._points[this._points.length - 1];
          uu += this._points[0].subtract(Ru).length()
        }
        return uu
      }
      area() {
        const uu = this._points.length;
        let Ru = 0;
        for (let yu = uu - 1, Eu = 0; Eu < uu; yu = Eu++) Ru += this._points[yu].x * this._points[Eu].y - this._points[Eu].x * this._points[yu].y;
        return .5 * Ru
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(uu) {
        if (uu < 0 || uu > 1) return Qu.n.Zero();
        const Ru = uu * this.length();
        let yu = 0;
        for (let Eu = 0; Eu < this._points.length; Eu++) {
          const uu = (Eu + 1) % this._points.length,
            Ku = this._points[Eu],
            mu = this._points[uu].subtract(Ku),
            Ju = mu.length() + yu;
          if (Ru >= yu && Ru <= Ju) {
            const uu = mu.normalize(),
              Eu = Ru - yu;
            return new Qu.n(Ku.x + uu.x * Eu, Ku.y + uu.y * Eu)
          }
          yu = Ju
        }
        return Qu.n.Zero()
      }
      static StartingAt(uu, Ru) {
        return new Xu(uu, Ru)
      }
    }
    class Vu {
      static CreateQuadraticBezier(uu, Ru, yu, Eu) {
        Eu = Eu > 2 ? Eu : 3;
        const Ku = [],
          mu = (uu, Ru, yu, Eu) => (1 - uu) * (1 - uu) * Ru + 2 * uu * (1 - uu) * yu + uu * uu * Eu;
        for (let Ju = 0; Ju <= Eu; Ju++) Ku.push(new Qu.p(mu(Ju / Eu, uu.x, Ru.x, yu.x), mu(Ju / Eu, uu.y, Ru.y, yu.y), mu(Ju / Eu, uu.z, Ru.z, yu.z)));
        return new Vu(Ku)
      }
      static CreateCubicBezier(uu, Ru, yu, Eu, Ku) {
        Ku = Ku > 3 ? Ku : 4;
        const mu = [],
          Ju = (uu, Ru, yu, Eu, Ku) => (1 - uu) * (1 - uu) * (1 - uu) * Ru + 3 * uu * (1 - uu) * (1 - uu) * yu + 3 * uu * uu * (1 - uu) * Eu + uu * uu * uu * Ku;
        for (let Nu = 0; Nu <= Ku; Nu++) mu.push(new Qu.p(Ju(Nu / Ku, uu.x, Ru.x, yu.x, Eu.x), Ju(Nu / Ku, uu.y, Ru.y, yu.y, Eu.y), Ju(Nu / Ku, uu.z, Ru.z, yu.z, Eu.z)));
        return new Vu(mu)
      }
      static CreateHermiteSpline(uu, Ru, yu, Eu, Ku) {
        const mu = [],
          Ju = 1 / Ku;
        for (let Nu = 0; Nu <= Ku; Nu++) mu.push(Qu.p.Hermite(uu, Ru, yu, Eu, Nu * Ju));
        return new Vu(mu)
      }
      static CreateCatmullRomSpline(uu, Ru, yu) {
        const Eu = [],
          Ku = 1 / Ru;
        let mu = 0;
        if (yu) {
          const yu = uu.length;
          for (let Ju = 0; Ju < yu; Ju++) {
            mu = 0;
            for (let Nu = 0; Nu < Ru; Nu++) Eu.push(Qu.p.CatmullRom(uu[Ju % yu], uu[(Ju + 1) % yu], uu[(Ju + 2) % yu], uu[(Ju + 3) % yu], mu)), mu += Ku
          }
          Eu.push(Eu[0])
        } else {
          const yu = [];
          yu.push(uu[0].clone()), yu.push(...uu), yu.push(uu[uu.length - 1].clone());
          let Ju = 0;
          for (; Ju < yu.length - 3; Ju++) {
            mu = 0;
            for (let uu = 0; uu < Ru; uu++) Eu.push(Qu.p.CatmullRom(yu[Ju], yu[Ju + 1], yu[Ju + 2], yu[Ju + 3], mu)), mu += Ku
          }
          Ju--, Eu.push(Qu.p.CatmullRom(yu[Ju], yu[Ju + 1], yu[Ju + 2], yu[Ju + 3], mu))
        }
        return new Vu(Eu)
      }
      static ArcThru3Points(uu, Ru, yu) {
        let Eu = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          Ku = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          mu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Ju = [],
          Nu = Ru.subtract(uu),
          Xu = yu.subtract(Ru),
          ru = uu.subtract(yu),
          Bu = Qu.p.Cross(Nu, Xu),
          xu = Bu.length();
        if (xu < Math.pow(10, -8)) return new Vu(Ju);
        const Su = Nu.lengthSquared(),
          pu = Xu.lengthSquared(),
          Tu = ru.lengthSquared(),
          Wu = Bu.lengthSquared(),
          ju = .5 * Nu.length() * Xu.length() * ru.length() / xu,
          Hu = -.5 * pu * Qu.p.Dot(Nu, ru) / Wu,
          du = -.5 * Tu * Qu.p.Dot(Nu, Xu) / Wu,
          bu = -.5 * Su * Qu.p.Dot(Xu, ru) / Wu,
          Cu = uu.scale(Hu).add(Ru.scale(du)).add(yu.scale(bu)),
          ku = uu.subtract(Cu).normalize(),
          eu = Qu.p.Cross(Bu, ku).normalize();
        if (mu) {
          const Ru = 2 * Math.PI / Eu;
          for (let uu = 0; uu <= 2 * Math.PI; uu += Ru) Ju.push(Cu.add(ku.scale(ju * Math.cos(uu)).add(eu.scale(ju * Math.sin(uu)))));
          Ju.push(uu)
        } else {
          const Ru = 1 / Eu;
          let Qu, mu = 0;
          do {
            Qu = Cu.add(ku.scale(ju * Math.cos(mu)).add(eu.scale(ju * Math.sin(mu)))), Ju.push(Qu), mu += Ru
          } while (!Qu.equalsWithEpsilon(yu, ju * Ru * 1.1));
          Ju.push(yu), Ku && Ju.push(uu)
        }
        return new Vu(Ju)
      }
      constructor(uu) {
        this._length = 0, this._points = uu, this._length = this._computeLength(uu)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (uu) {
        const Ru = this._points[this._points.length - 1],
          yu = this._points.slice(),
          Eu = uu.getPoints();
        for (let Ku = 1; Ku < Eu.length; Ku++) yu.push(Eu[Ku].subtract(Eu[0]).add(Ru));
        return new Vu(yu)
      }
      _computeLength(uu) {
        let Ru = 0;
        for (let yu = 1; yu < uu.length; yu++) Ru += uu[yu].subtract(uu[yu - 1]).length();
        return Ru
      }
    }
  },
  38444: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Qu
    });
    var Eu = yu(38448);
    const Ku = (uu, Ru, yu) => uu ? uu.getClassName && "Mesh" === uu.getClassName() ? null : !uu.getClassName || "SubMesh" !== uu.getClassName() && "PhysicsBody" !== uu.getClassName() ? uu.clone ? uu.clone() : Array.isArray(uu) ? uu.slice() : yu && "object" === typeof uu ? {
      ...uu
    } : null : uu.clone(Ru) : null;
    class Qu {
      static DeepCopy(uu, Ru, yu, Qu) {
        let mu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ju = function(uu) {
          const Ru = [];
          do {
            const yu = Object.getOwnPropertyNames(uu);
            for (const uu of yu) - 1 === Ru.indexOf(uu) && Ru.push(uu)
          } while (uu = Object.getPrototypeOf(uu));
          return Ru
        }(uu);
        for (const Xu of Ju) {
          if ("_" === Xu[0] && (!Qu || -1 === Qu.indexOf(Xu))) continue;
          if (Xu.endsWith("Observable")) continue;
          if (yu && -1 !== yu.indexOf(Xu)) continue;
          const Ju = uu[Xu],
            Vu = typeof Ju;
          if ("function" !== Vu) try {
            if ("object" === Vu)
              if (Ju instanceof Uint8Array) Ru[Xu] = Uint8Array.from(Ju);
              else if (Ju instanceof Array) {
              if (Ru[Xu] = [], Ju.length > 0)
                if ("object" == typeof Ju[0])
                  for (let uu = 0; uu < Ju.length; uu++) {
                    const yu = Ku(Ju[uu], Ru, mu); - 1 === Ru[Xu].indexOf(yu) && Ru[Xu].push(yu)
                  } else Ru[Xu] = Ju.slice(0)
            } else Ru[Xu] = Ku(Ju, Ru, mu);
            else Ru[Xu] = Ju
          } catch (Nu) {
            Eu.e.Warn(Nu.message)
          }
        }
      }
    }
  },
  38448: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Eu
    });
    class Eu {
      static _CheckLimit(uu, Ru) {
        let yu = Eu._LogLimitOutputs[uu];
        return yu ? yu.current++ : (yu = {
          limit: Ru,
          current: 1
        }, Eu._LogLimitOutputs[uu] = yu), yu.current <= yu.limit
      }
      static _GenerateLimitMessage(uu) {
        let Ru = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const yu = Eu._LogLimitOutputs[uu];
        if (!yu || !Eu.MessageLimitReached) return;
        const Ku = this._Levels[Ru];
        yu.current === yu.limit && Eu[Ku.name](Eu.MessageLimitReached.replace(/%LIMIT%/g, "" + yu.limit).replace(/%TYPE%/g, Ku.name ?? ""))
      }
      static _AddLogEntry(uu) {
        Eu._LogCache = uu + Eu._LogCache, Eu.OnNewCacheEntry && Eu.OnNewCacheEntry(uu)
      }
      static _FormatMessage(uu) {
        const Ru = uu => uu < 10 ? "0" + uu : "" + uu,
          yu = new Date;
        return "[" + Ru(yu.getHours()) + ":" + Ru(yu.getMinutes()) + ":" + Ru(yu.getSeconds()) + "]: " + uu
      }
      static _LogDisabled(uu, Ru) {}
      static _LogEnabled() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Ru = arguments.length > 1 ? arguments[1] : void 0,
          yu = arguments.length > 2 ? arguments[2] : void 0;
        const Ku = Array.isArray(Ru) ? Ru[0] : Ru;
        if (void 0 !== yu && !Eu._CheckLimit(Ku, yu)) return;
        const Qu = Eu._FormatMessage(Ku),
          mu = this._Levels[uu],
          Ju = Array.isArray(Ru) ? Ru.slice(1) : [];
        mu.logFunc && mu.logFunc("BJS - " + Qu, ...Ju);
        const Nu = `<div style='color:${mu.color}'>${Qu}</div><br>`;
        Eu._AddLogEntry(Nu), Eu._GenerateLimitMessage(Ku, uu)
      }
      static get LogCache() {
        return Eu._LogCache
      }
      static ClearLogCache() {
        Eu._LogCache = "", Eu._LogLimitOutputs = {}, Eu.errorsCount = 0
      }
      static set LogLevels(uu) {
        Eu.Log = Eu._LogDisabled, Eu.Warn = Eu._LogDisabled, Eu.Error = Eu._LogDisabled;
        const Ru = [Eu.MessageLogLevel, Eu.WarningLogLevel, Eu.ErrorLogLevel];
        for (const yu of Ru)
          if ((uu & yu) === yu) {
            const uu = this._Levels[yu];
            Eu[uu.name] = Eu._LogEnabled.bind(Eu, yu)
          }
      }
    }
    Eu.NoneLogLevel = 0, Eu.MessageLogLevel = 1, Eu.WarningLogLevel = 2, Eu.ErrorLogLevel = 4, Eu.AllLogLevel = 7, Eu.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Eu._LogCache = "", Eu._LogLimitOutputs = {}, Eu._Levels = [{}, {
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
    }], Eu.errorsCount = 0, Eu.Log = Eu._LogEnabled.bind(Eu, Eu.MessageLogLevel), Eu.Warn = Eu._LogEnabled.bind(Eu, Eu.WarningLogLevel), Eu.Error = Eu._LogEnabled.bind(Eu, Eu.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);