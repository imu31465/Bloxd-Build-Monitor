export const id = 249;
export const ids = [249];
export const modules = {
  41317: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => Xu,
      e: () => Cu,
      g: () => fu
    });
    var su, Uu = ju(37519),
      Zu = ju(37494);
    ! function(uu) {
      uu[uu.CW = 0] = "CW", uu[uu.CCW = 1] = "CCW"
    }(su || (su = {}));
    class Xu {
      static Interpolate(uu, Eu, ju, su, Uu) {
        if (0 === uu) return 0;
        const Zu = 1 - 3 * su + 3 * Eu,
          Xu = 3 * su - 6 * Eu,
          lu = 3 * Eu;
        let qu = uu;
        for (let fu = 0; fu < 5; fu++) {
          const Eu = qu * qu;
          qu -= (Zu * (Eu * qu) + Xu * Eu + lu * qu - uu) * (1 / (3 * Zu * Eu + 2 * Xu * qu + lu)), qu = Math.min(1, Math.max(0, qu))
        }
        return 3 * Math.pow(1 - qu, 2) * qu * ju + 3 * (1 - qu) * Math.pow(qu, 2) * Uu + Math.pow(qu, 3)
      }
    }
    class lu {
      constructor(uu) {
        this._radians = uu, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(uu, Eu) {
        const ju = Eu.subtract(uu),
          su = Math.atan2(ju.y, ju.x);
        return new lu(su)
      }
      static BetweenTwoVectors(uu, Eu) {
        let ju = uu.lengthSquared() * Eu.lengthSquared();
        if (0 === ju) return new lu(Math.PI / 2);
        ju = Math.sqrt(ju);
        let su = uu.dot(Eu) / ju;
        su = (0, Uu.Clamp)(su, -1, 1);
        const Zu = Math.acos(su);
        return new lu(Zu)
      }
      static FromRadians(uu) {
        return new lu(uu)
      }
      static FromDegrees(uu) {
        return new lu(uu * Math.PI / 180)
      }
    }
    class qu {
      constructor(uu, Eu, ju) {
        this.startPoint = uu, this.midPoint = Eu, this.endPoint = ju;
        const su = Math.pow(Eu.x, 2) + Math.pow(Eu.y, 2),
          Uu = (Math.pow(uu.x, 2) + Math.pow(uu.y, 2) - su) / 2,
          Xu = (su - Math.pow(ju.x, 2) - Math.pow(ju.y, 2)) / 2,
          qu = (uu.x - Eu.x) * (Eu.y - ju.y) - (Eu.x - ju.x) * (uu.y - Eu.y);
        this.centerPoint = new Zu.p((Uu * (Eu.y - ju.y) - Xu * (uu.y - Eu.y)) / qu, ((uu.x - Eu.x) * Xu - (Eu.x - ju.x) * Uu) / qu), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = lu.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const fu = this.startAngle.degrees();
        let Cu = lu.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          bu = lu.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        Cu - fu > 180 && (Cu -= 360), Cu - fu < -180 && (Cu += 360), bu - Cu > 180 && (bu -= 360), bu - Cu < -180 && (bu += 360), this.orientation = Cu - fu < 0 ? 0 : 1, this.angle = lu.FromDegrees(0 === this.orientation ? fu - bu : bu - fu)
      }
    }
    class fu {
      constructor(uu, Eu) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new Zu.p(uu, Eu))
      }
      addLineTo(uu, Eu) {
        if (this.closed) return this;
        const ju = new Zu.p(uu, Eu),
          su = this._points[this._points.length - 1];
        return this._points.push(ju), this._length += ju.subtract(su).length(), this
      }
      addArcTo(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Xu = this._points[this._points.length - 1],
          lu = new Zu.p(uu, Eu),
          fu = new Zu.p(ju, su),
          Cu = new qu(Xu, lu, fu);
        let bu = Cu.angle.radians() / Uu;
        0 === Cu.orientation && (bu *= -1);
        let cu = Cu.startAngle.radians() + bu;
        for (let Zu = 0; Zu < Uu; Zu++) {
          const uu = Math.cos(cu) * Cu.radius + Cu.centerPoint.x,
            Eu = Math.sin(cu) * Cu.radius + Cu.centerPoint.y;
          this.addLineTo(uu, Eu), cu += bu
        }
        return this
      }
      addQuadraticCurveTo(uu, Eu, ju, su) {
        let Uu = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Zu = (uu, Eu, ju, su) => (1 - uu) * (1 - uu) * Eu + 2 * uu * (1 - uu) * ju + uu * uu * su,
          Xu = this._points[this._points.length - 1];
        for (let lu = 0; lu <= Uu; lu++) {
          const qu = lu / Uu,
            fu = Zu(qu, Xu.x, uu, ju),
            Cu = Zu(qu, Xu.y, Eu, su);
          this.addLineTo(fu, Cu)
        }
        return this
      }
      addBezierCurveTo(uu, Eu, ju, su, Uu, Zu) {
        let Xu = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const lu = (uu, Eu, ju, su, Uu) => (1 - uu) * (1 - uu) * (1 - uu) * Eu + 3 * uu * (1 - uu) * (1 - uu) * ju + 3 * uu * uu * (1 - uu) * su + uu * uu * uu * Uu,
          qu = this._points[this._points.length - 1];
        for (let fu = 0; fu <= Xu; fu++) {
          const Cu = fu / Xu,
            bu = lu(Cu, qu.x, uu, ju, Uu),
            cu = lu(Cu, qu.y, Eu, su, Zu);
          this.addLineTo(bu, cu)
        }
        return this
      }
      isPointInside(uu) {
        let Eu = !1;
        const ju = this._points.length;
        for (let su = ju - 1, Uu = 0; Uu < ju; su = Uu++) {
          let ju = this._points[su],
            Zu = this._points[Uu],
            Xu = Zu.x - ju.x,
            lu = Zu.y - ju.y;
          if (Math.abs(lu) > Number.EPSILON) {
            if (lu < 0 && (ju = this._points[Uu], Xu = -Xu, Zu = this._points[su], lu = -lu), uu.y < ju.y || uu.y > Zu.y) continue;
            if (uu.y === ju.y && uu.x === ju.x) return !0;
            {
              const su = lu * (uu.x - ju.x) - Xu * (uu.y - ju.y);
              if (0 === su) return !0;
              if (su < 0) continue;
              Eu = !Eu
            }
          } else {
            if (uu.y !== ju.y) continue;
            if (Zu.x <= uu.x && uu.x <= ju.x || ju.x <= uu.x && uu.x <= Zu.x) return !0
          }
        }
        return Eu
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let uu = this._length;
        if (this.closed) {
          const Eu = this._points[this._points.length - 1];
          uu += this._points[0].subtract(Eu).length()
        }
        return uu
      }
      area() {
        const uu = this._points.length;
        let Eu = 0;
        for (let ju = uu - 1, su = 0; su < uu; ju = su++) Eu += this._points[ju].x * this._points[su].y - this._points[su].x * this._points[ju].y;
        return .5 * Eu
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(uu) {
        if (uu < 0 || uu > 1) return Zu.p.Zero();
        const Eu = uu * this.length();
        let ju = 0;
        for (let su = 0; su < this._points.length; su++) {
          const uu = (su + 1) % this._points.length,
            Uu = this._points[su],
            Xu = this._points[uu].subtract(Uu),
            lu = Xu.length() + ju;
          if (Eu >= ju && Eu <= lu) {
            const uu = Xu.normalize(),
              su = Eu - ju;
            return new Zu.p(Uu.x + uu.x * su, Uu.y + uu.y * su)
          }
          ju = lu
        }
        return Zu.p.Zero()
      }
      static StartingAt(uu, Eu) {
        return new fu(uu, Eu)
      }
    }
    class Cu {
      static CreateQuadraticBezier(uu, Eu, ju, su) {
        su = su > 2 ? su : 3;
        const Uu = [],
          Xu = (uu, Eu, ju, su) => (1 - uu) * (1 - uu) * Eu + 2 * uu * (1 - uu) * ju + uu * uu * su;
        for (let lu = 0; lu <= su; lu++) Uu.push(new Zu.t(Xu(lu / su, uu.x, Eu.x, ju.x), Xu(lu / su, uu.y, Eu.y, ju.y), Xu(lu / su, uu.z, Eu.z, ju.z)));
        return new Cu(Uu)
      }
      static CreateCubicBezier(uu, Eu, ju, su, Uu) {
        Uu = Uu > 3 ? Uu : 4;
        const Xu = [],
          lu = (uu, Eu, ju, su, Uu) => (1 - uu) * (1 - uu) * (1 - uu) * Eu + 3 * uu * (1 - uu) * (1 - uu) * ju + 3 * uu * uu * (1 - uu) * su + uu * uu * uu * Uu;
        for (let qu = 0; qu <= Uu; qu++) Xu.push(new Zu.t(lu(qu / Uu, uu.x, Eu.x, ju.x, su.x), lu(qu / Uu, uu.y, Eu.y, ju.y, su.y), lu(qu / Uu, uu.z, Eu.z, ju.z, su.z)));
        return new Cu(Xu)
      }
      static CreateHermiteSpline(uu, Eu, ju, su, Uu) {
        const Xu = [],
          lu = 1 / Uu;
        for (let qu = 0; qu <= Uu; qu++) Xu.push(Zu.t.Hermite(uu, Eu, ju, su, qu * lu));
        return new Cu(Xu)
      }
      static CreateCatmullRomSpline(uu, Eu, ju) {
        const su = [],
          Uu = 1 / Eu;
        let Xu = 0;
        if (ju) {
          const ju = uu.length;
          for (let lu = 0; lu < ju; lu++) {
            Xu = 0;
            for (let qu = 0; qu < Eu; qu++) su.push(Zu.t.CatmullRom(uu[lu % ju], uu[(lu + 1) % ju], uu[(lu + 2) % ju], uu[(lu + 3) % ju], Xu)), Xu += Uu
          }
          su.push(su[0])
        } else {
          const ju = [];
          ju.push(uu[0].clone()), ju.push(...uu), ju.push(uu[uu.length - 1].clone());
          let lu = 0;
          for (; lu < ju.length - 3; lu++) {
            Xu = 0;
            for (let uu = 0; uu < Eu; uu++) su.push(Zu.t.CatmullRom(ju[lu], ju[lu + 1], ju[lu + 2], ju[lu + 3], Xu)), Xu += Uu
          }
          lu--, su.push(Zu.t.CatmullRom(ju[lu], ju[lu + 1], ju[lu + 2], ju[lu + 3], Xu))
        }
        return new Cu(su)
      }
      static ArcThru3Points(uu, Eu, ju) {
        let su = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          Uu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Xu = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const lu = [],
          qu = Eu.subtract(uu),
          fu = ju.subtract(Eu),
          bu = uu.subtract(ju),
          cu = Zu.t.Cross(qu, fu),
          Nu = cu.length();
        if (Nu < Math.pow(10, -8)) return new Cu(lu);
        const Ou = qu.lengthSquared(),
          Yu = fu.lengthSquared(),
          hu = bu.lengthSquared(),
          Du = cu.lengthSquared(),
          gu = .5 * qu.length() * fu.length() * bu.length() / Nu,
          Mu = -.5 * Yu * Zu.t.Dot(qu, bu) / Du,
          eu = -.5 * hu * Zu.t.Dot(qu, fu) / Du,
          Gu = -.5 * Ou * Zu.t.Dot(fu, bu) / Du,
          pu = uu.scale(Mu).add(Eu.scale(eu)).add(ju.scale(Gu)),
          wu = uu.subtract(pu).normalize(),
          Ju = Zu.t.Cross(cu, wu).normalize();
        if (Xu) {
          const Eu = 2 * Math.PI / su;
          for (let uu = 0; uu <= 2 * Math.PI; uu += Eu) lu.push(pu.add(wu.scale(gu * Math.cos(uu)).add(Ju.scale(gu * Math.sin(uu)))));
          lu.push(uu)
        } else {
          const Eu = 1 / su;
          let Zu, Xu = 0;
          do {
            Zu = pu.add(wu.scale(gu * Math.cos(Xu)).add(Ju.scale(gu * Math.sin(Xu)))), lu.push(Zu), Xu += Eu
          } while (!Zu.equalsWithEpsilon(ju, gu * Eu * 1.1));
          lu.push(ju), Uu && lu.push(uu)
        }
        return new Cu(lu)
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
        const Eu = this._points[this._points.length - 1],
          ju = this._points.slice(),
          su = uu.getPoints();
        for (let Uu = 1; Uu < su.length; Uu++) ju.push(su[Uu].subtract(su[0]).add(Eu));
        return new Cu(ju)
      }
      _computeLength(uu) {
        let Eu = 0;
        for (let ju = 1; ju < uu.length; ju++) Eu += uu[ju].subtract(uu[ju - 1]).length();
        return Eu
      }
    }
  },
  39030: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Zu
    });
    var su = ju(39032);
    const Uu = (uu, Eu, ju) => uu ? uu.getClassName && "Mesh" === uu.getClassName() ? null : !uu.getClassName || "SubMesh" !== uu.getClassName() && "PhysicsBody" !== uu.getClassName() ? uu.clone ? uu.clone() : Array.isArray(uu) ? uu.slice() : ju && "object" === typeof uu ? {
      ...uu
    } : null : uu.clone(Eu) : null;
    class Zu {
      static DeepCopy(uu, Eu, ju, Zu) {
        let Xu = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const lu = function(uu) {
          const Eu = [];
          do {
            const ju = Object.getOwnPropertyNames(uu);
            for (const uu of ju) - 1 === Eu.indexOf(uu) && Eu.push(uu)
          } while (uu = Object.getPrototypeOf(uu));
          return Eu
        }(uu);
        for (const fu of lu) {
          if ("_" === fu[0] && (!Zu || -1 === Zu.indexOf(fu))) continue;
          if (fu.endsWith("Observable")) continue;
          if (ju && -1 !== ju.indexOf(fu)) continue;
          const lu = uu[fu],
            Cu = typeof lu;
          if ("function" !== Cu) try {
            if ("object" === Cu)
              if (lu instanceof Uint8Array) Eu[fu] = Uint8Array.from(lu);
              else if (lu instanceof Array) {
              if (Eu[fu] = [], lu.length > 0)
                if ("object" == typeof lu[0])
                  for (let uu = 0; uu < lu.length; uu++) {
                    const ju = Uu(lu[uu], Eu, Xu); - 1 === Eu[fu].indexOf(ju) && Eu[fu].push(ju)
                  } else Eu[fu] = lu.slice(0)
            } else Eu[fu] = Uu(lu, Eu, Xu);
            else Eu[fu] = lu
          } catch (qu) {
            su.b.Warn(qu.message)
          }
        }
      }
    }
  },
  39032: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su
    });
    class su {
      static _CheckLimit(uu, Eu) {
        let ju = su._LogLimitOutputs[uu];
        return ju ? ju.current++ : (ju = {
          limit: Eu,
          current: 1
        }, su._LogLimitOutputs[uu] = ju), ju.current <= ju.limit
      }
      static _GenerateLimitMessage(uu) {
        let Eu = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ju = su._LogLimitOutputs[uu];
        if (!ju || !su.MessageLimitReached) return;
        const Uu = this._Levels[Eu];
        ju.current === ju.limit && su[Uu.name](su.MessageLimitReached.replace(/%LIMIT%/g, "" + ju.limit).replace(/%TYPE%/g, Uu.name ?? ""))
      }
      static _AddLogEntry(uu) {
        su._LogCache = uu + su._LogCache, su.OnNewCacheEntry && su.OnNewCacheEntry(uu)
      }
      static _FormatMessage(uu) {
        const Eu = uu => uu < 10 ? "0" + uu : "" + uu,
          ju = new Date;
        return "[" + Eu(ju.getHours()) + ":" + Eu(ju.getMinutes()) + ":" + Eu(ju.getSeconds()) + "]: " + uu
      }
      static _LogDisabled(uu, Eu) {}
      static _LogEnabled() {
        let uu = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eu = arguments.length > 1 ? arguments[1] : void 0,
          ju = arguments.length > 2 ? arguments[2] : void 0;
        const Uu = Array.isArray(Eu) ? Eu[0] : Eu;
        if (void 0 !== ju && !su._CheckLimit(Uu, ju)) return;
        const Zu = su._FormatMessage(Uu),
          Xu = this._Levels[uu],
          lu = Array.isArray(Eu) ? Eu.slice(1) : [];
        Xu.logFunc && Xu.logFunc("BJS - " + Zu, ...lu);
        const qu = `<div style='color:${Xu.color}'>${Zu}</div><br>`;
        su._AddLogEntry(qu), su._GenerateLimitMessage(Uu, uu)
      }
      static get LogCache() {
        return su._LogCache
      }
      static ClearLogCache() {
        su._LogCache = "", su._LogLimitOutputs = {}, su.errorsCount = 0
      }
      static set LogLevels(uu) {
        su.Log = su._LogDisabled, su.Warn = su._LogDisabled, su.Error = su._LogDisabled;
        const Eu = [su.MessageLogLevel, su.WarningLogLevel, su.ErrorLogLevel];
        for (const ju of Eu)
          if ((uu & ju) === ju) {
            const uu = this._Levels[ju];
            su[uu.name] = su._LogEnabled.bind(su, ju)
          }
      }
    }
    su.NoneLogLevel = 0, su.MessageLogLevel = 1, su.WarningLogLevel = 2, su.ErrorLogLevel = 4, su.AllLogLevel = 7, su.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", su._LogCache = "", su._LogLimitOutputs = {}, su._Levels = [{}, {
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
    }], su.errorsCount = 0, su.Log = su._LogEnabled.bind(su, su.MessageLogLevel), su.Warn = su._LogEnabled.bind(su, su.WarningLogLevel), su.Error = su._LogEnabled.bind(su, su.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);