export const id = 272;
export const ids = [272];
export const modules = {
  42166: (ee, ie, He) => {
    He.d(ie, {
      c: () => Ke,
      f: () => oe,
      j: () => Je
    });
    var ye, be = He(37938),
      Me = He(37917);
    ! function(ee) {
      ee[ee.CW = 0] = "CW", ee[ee.CCW = 1] = "CCW"
    }(ye || (ye = {}));
    class Ke {
      static Interpolate(ee, ie, He, ye, be) {
        if (0 === ee) return 0;
        const Me = 1 - 3 * ye + 3 * ie,
          Ke = 3 * ye - 6 * ie,
          Ue = 3 * ie;
        let Fe = ee;
        for (let Je = 0; Je < 5; Je++) {
          const ie = Fe * Fe;
          Fe -= (Me * (ie * Fe) + Ke * ie + Ue * Fe - ee) * (1 / (3 * Me * ie + 2 * Ke * Fe + Ue)), Fe = Math.min(1, Math.max(0, Fe))
        }
        return 3 * Math.pow(1 - Fe, 2) * Fe * He + 3 * (1 - Fe) * Math.pow(Fe, 2) * be + Math.pow(Fe, 3)
      }
    }
    class Ue {
      constructor(ee) {
        this._radians = ee, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(ee, ie) {
        const He = ie.subtract(ee),
          ye = Math.atan2(He.y, He.x);
        return new Ue(ye)
      }
      static BetweenTwoVectors(ee, ie) {
        let He = ee.lengthSquared() * ie.lengthSquared();
        if (0 === He) return new Ue(Math.PI / 2);
        He = Math.sqrt(He);
        let ye = ee.dot(ie) / He;
        ye = (0, be.Clamp)(ye, -1, 1);
        const Me = Math.acos(ye);
        return new Ue(Me)
      }
      static FromRadians(ee) {
        return new Ue(ee)
      }
      static FromDegrees(ee) {
        return new Ue(ee * Math.PI / 180)
      }
    }
    class Fe {
      constructor(ee, ie, He) {
        this.startPoint = ee, this.midPoint = ie, this.endPoint = He;
        const ye = Math.pow(ie.x, 2) + Math.pow(ie.y, 2),
          be = (Math.pow(ee.x, 2) + Math.pow(ee.y, 2) - ye) / 2,
          Ke = (ye - Math.pow(He.x, 2) - Math.pow(He.y, 2)) / 2,
          Fe = (ee.x - ie.x) * (ie.y - He.y) - (ie.x - He.x) * (ee.y - ie.y);
        this.centerPoint = new Me.n((be * (ie.y - He.y) - Ke * (ee.y - ie.y)) / Fe, ((ee.x - ie.x) * Ke - (ie.x - He.x) * be) / Fe), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = Ue.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const Je = this.startAngle.degrees();
        let oe = Ue.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          Re = Ue.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        oe - Je > 180 && (oe -= 360), oe - Je < -180 && (oe += 360), Re - oe > 180 && (Re -= 360), Re - oe < -180 && (Re += 360), this.orientation = oe - Je < 0 ? 0 : 1, this.angle = Ue.FromDegrees(0 === this.orientation ? Je - Re : Re - Je)
      }
    }
    class Je {
      constructor(ee, ie) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new Me.n(ee, ie))
      }
      addLineTo(ee, ie) {
        if (this.closed) return this;
        const He = new Me.n(ee, ie),
          ye = this._points[this._points.length - 1];
        return this._points.push(He), this._length += He.subtract(ye).length(), this
      }
      addArcTo(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Ke = this._points[this._points.length - 1],
          Ue = new Me.n(ee, ie),
          Je = new Me.n(He, ye),
          oe = new Fe(Ke, Ue, Je);
        let Re = oe.angle.radians() / be;
        0 === oe.orientation && (Re *= -1);
        let ke = oe.startAngle.radians() + Re;
        for (let Me = 0; Me < be; Me++) {
          const ee = Math.cos(ke) * oe.radius + oe.centerPoint.x,
            ie = Math.sin(ke) * oe.radius + oe.centerPoint.y;
          this.addLineTo(ee, ie), ke += Re
        }
        return this
      }
      addQuadraticCurveTo(ee, ie, He, ye) {
        let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Me = (ee, ie, He, ye) => (1 - ee) * (1 - ee) * ie + 2 * ee * (1 - ee) * He + ee * ee * ye,
          Ke = this._points[this._points.length - 1];
        for (let Ue = 0; Ue <= be; Ue++) {
          const Fe = Ue / be,
            Je = Me(Fe, Ke.x, ee, He),
            oe = Me(Fe, Ke.y, ie, ye);
          this.addLineTo(Je, oe)
        }
        return this
      }
      addBezierCurveTo(ee, ie, He, ye, be, Me) {
        let Ke = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const Ue = (ee, ie, He, ye, be) => (1 - ee) * (1 - ee) * (1 - ee) * ie + 3 * ee * (1 - ee) * (1 - ee) * He + 3 * ee * ee * (1 - ee) * ye + ee * ee * ee * be,
          Fe = this._points[this._points.length - 1];
        for (let Je = 0; Je <= Ke; Je++) {
          const oe = Je / Ke,
            Re = Ue(oe, Fe.x, ee, He, be),
            ke = Ue(oe, Fe.y, ie, ye, Me);
          this.addLineTo(Re, ke)
        }
        return this
      }
      isPointInside(ee) {
        let ie = !1;
        const He = this._points.length;
        for (let ye = He - 1, be = 0; be < He; ye = be++) {
          let He = this._points[ye],
            Me = this._points[be],
            Ke = Me.x - He.x,
            Ue = Me.y - He.y;
          if (Math.abs(Ue) > Number.EPSILON) {
            if (Ue < 0 && (He = this._points[be], Ke = -Ke, Me = this._points[ye], Ue = -Ue), ee.y < He.y || ee.y > Me.y) continue;
            if (ee.y === He.y && ee.x === He.x) return !0;
            {
              const ye = Ue * (ee.x - He.x) - Ke * (ee.y - He.y);
              if (0 === ye) return !0;
              if (ye < 0) continue;
              ie = !ie
            }
          } else {
            if (ee.y !== He.y) continue;
            if (Me.x <= ee.x && ee.x <= He.x || He.x <= ee.x && ee.x <= Me.x) return !0
          }
        }
        return ie
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let ee = this._length;
        if (this.closed) {
          const ie = this._points[this._points.length - 1];
          ee += this._points[0].subtract(ie).length()
        }
        return ee
      }
      area() {
        const ee = this._points.length;
        let ie = 0;
        for (let He = ee - 1, ye = 0; ye < ee; He = ye++) ie += this._points[He].x * this._points[ye].y - this._points[ye].x * this._points[He].y;
        return .5 * ie
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(ee) {
        if (ee < 0 || ee > 1) return Me.n.Zero();
        const ie = ee * this.length();
        let He = 0;
        for (let ye = 0; ye < this._points.length; ye++) {
          const ee = (ye + 1) % this._points.length,
            be = this._points[ye],
            Ke = this._points[ee].subtract(be),
            Ue = Ke.length() + He;
          if (ie >= He && ie <= Ue) {
            const ee = Ke.normalize(),
              ye = ie - He;
            return new Me.n(be.x + ee.x * ye, be.y + ee.y * ye)
          }
          He = Ue
        }
        return Me.n.Zero()
      }
      static StartingAt(ee, ie) {
        return new Je(ee, ie)
      }
    }
    class oe {
      static CreateQuadraticBezier(ee, ie, He, ye) {
        ye = ye > 2 ? ye : 3;
        const be = [],
          Ke = (ee, ie, He, ye) => (1 - ee) * (1 - ee) * ie + 2 * ee * (1 - ee) * He + ee * ee * ye;
        for (let Ue = 0; Ue <= ye; Ue++) be.push(new Me.p(Ke(Ue / ye, ee.x, ie.x, He.x), Ke(Ue / ye, ee.y, ie.y, He.y), Ke(Ue / ye, ee.z, ie.z, He.z)));
        return new oe(be)
      }
      static CreateCubicBezier(ee, ie, He, ye, be) {
        be = be > 3 ? be : 4;
        const Ke = [],
          Ue = (ee, ie, He, ye, be) => (1 - ee) * (1 - ee) * (1 - ee) * ie + 3 * ee * (1 - ee) * (1 - ee) * He + 3 * ee * ee * (1 - ee) * ye + ee * ee * ee * be;
        for (let Fe = 0; Fe <= be; Fe++) Ke.push(new Me.p(Ue(Fe / be, ee.x, ie.x, He.x, ye.x), Ue(Fe / be, ee.y, ie.y, He.y, ye.y), Ue(Fe / be, ee.z, ie.z, He.z, ye.z)));
        return new oe(Ke)
      }
      static CreateHermiteSpline(ee, ie, He, ye, be) {
        const Ke = [],
          Ue = 1 / be;
        for (let Fe = 0; Fe <= be; Fe++) Ke.push(Me.p.Hermite(ee, ie, He, ye, Fe * Ue));
        return new oe(Ke)
      }
      static CreateCatmullRomSpline(ee, ie, He) {
        const ye = [],
          be = 1 / ie;
        let Ke = 0;
        if (He) {
          const He = ee.length;
          for (let Ue = 0; Ue < He; Ue++) {
            Ke = 0;
            for (let Fe = 0; Fe < ie; Fe++) ye.push(Me.p.CatmullRom(ee[Ue % He], ee[(Ue + 1) % He], ee[(Ue + 2) % He], ee[(Ue + 3) % He], Ke)), Ke += be
          }
          ye.push(ye[0])
        } else {
          const He = [];
          He.push(ee[0].clone()), He.push(...ee), He.push(ee[ee.length - 1].clone());
          let Ue = 0;
          for (; Ue < He.length - 3; Ue++) {
            Ke = 0;
            for (let ee = 0; ee < ie; ee++) ye.push(Me.p.CatmullRom(He[Ue], He[Ue + 1], He[Ue + 2], He[Ue + 3], Ke)), Ke += be
          }
          Ue--, ye.push(Me.p.CatmullRom(He[Ue], He[Ue + 1], He[Ue + 2], He[Ue + 3], Ke))
        }
        return new oe(ye)
      }
      static ArcThru3Points(ee, ie, He) {
        let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          be = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Ke = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Ue = [],
          Fe = ie.subtract(ee),
          Je = He.subtract(ie),
          Re = ee.subtract(He),
          ke = Me.p.Cross(Fe, Je),
          qe = ke.length();
        if (qe < Math.pow(10, -8)) return new oe(Ue);
        const fe = Fe.lengthSquared(),
          Te = Je.lengthSquared(),
          pe = Re.lengthSquared(),
          Xe = ke.lengthSquared(),
          ze = .5 * Fe.length() * Je.length() * Re.length() / qe,
          Be = -.5 * Te * Me.p.Dot(Fe, Re) / Xe,
          Ee = -.5 * pe * Me.p.Dot(Fe, Je) / Xe,
          ge = -.5 * fe * Me.p.Dot(Je, Re) / Xe,
          Oe = ee.scale(Be).add(ie.scale(Ee)).add(He.scale(ge)),
          de = ee.subtract(Oe).normalize(),
          We = Me.p.Cross(ke, de).normalize();
        if (Ke) {
          const ie = 2 * Math.PI / ye;
          for (let ee = 0; ee <= 2 * Math.PI; ee += ie) Ue.push(Oe.add(de.scale(ze * Math.cos(ee)).add(We.scale(ze * Math.sin(ee)))));
          Ue.push(ee)
        } else {
          const ie = 1 / ye;
          let Me, Ke = 0;
          do {
            Me = Oe.add(de.scale(ze * Math.cos(Ke)).add(We.scale(ze * Math.sin(Ke)))), Ue.push(Me), Ke += ie
          } while (!Me.equalsWithEpsilon(He, ze * ie * 1.1));
          Ue.push(He), be && Ue.push(ee)
        }
        return new oe(Ue)
      }
      constructor(ee) {
        this._length = 0, this._points = ee, this._length = this._computeLength(ee)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (ee) {
        const ie = this._points[this._points.length - 1],
          He = this._points.slice(),
          ye = ee.getPoints();
        for (let be = 1; be < ye.length; be++) He.push(ye[be].subtract(ye[0]).add(ie));
        return new oe(He)
      }
      _computeLength(ee) {
        let ie = 0;
        for (let He = 1; He < ee.length; He++) ie += ee[He].subtract(ee[He - 1]).length();
        return ie
      }
    }
  },
  39463: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me
    });
    var ye = He(39467);
    const be = (ee, ie, He) => ee ? ee.getClassName && "Mesh" === ee.getClassName() ? null : !ee.getClassName || "SubMesh" !== ee.getClassName() && "PhysicsBody" !== ee.getClassName() ? ee.clone ? ee.clone() : Array.isArray(ee) ? ee.slice() : He && "object" === typeof ee ? {
      ...ee
    } : null : ee.clone(ie) : null;
    class Me {
      static DeepCopy(ee, ie, He, Me) {
        let Ke = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ue = function(ee) {
          const ie = [];
          do {
            const He = Object.getOwnPropertyNames(ee);
            for (const ee of He) - 1 === ie.indexOf(ee) && ie.push(ee)
          } while (ee = Object.getPrototypeOf(ee));
          return ie
        }(ee);
        for (const Je of Ue) {
          if ("_" === Je[0] && (!Me || -1 === Me.indexOf(Je))) continue;
          if (Je.endsWith("Observable")) continue;
          if (He && -1 !== He.indexOf(Je)) continue;
          const Ue = ee[Je],
            oe = typeof Ue;
          if ("function" !== oe) try {
            if ("object" === oe)
              if (Ue instanceof Uint8Array) ie[Je] = Uint8Array.from(Ue);
              else if (Ue instanceof Array) {
              if (ie[Je] = [], Ue.length > 0)
                if ("object" == typeof Ue[0])
                  for (let ee = 0; ee < Ue.length; ee++) {
                    const He = be(Ue[ee], ie, Ke); - 1 === ie[Je].indexOf(He) && ie[Je].push(He)
                  } else ie[Je] = Ue.slice(0)
            } else ie[Je] = be(Ue, ie, Ke);
            else ie[Je] = Ue
          } catch (Fe) {
            ye.e.Warn(Fe.message)
          }
        }
      }
    }
  },
  39467: (ee, ie, He) => {
    He.d(ie, {
      e: () => ye
    });
    class ye {
      static _CheckLimit(ee, ie) {
        let He = ye._LogLimitOutputs[ee];
        return He ? He.current++ : (He = {
          limit: ie,
          current: 1
        }, ye._LogLimitOutputs[ee] = He), He.current <= He.limit
      }
      static _GenerateLimitMessage(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const He = ye._LogLimitOutputs[ee];
        if (!He || !ye.MessageLimitReached) return;
        const be = this._Levels[ie];
        He.current === He.limit && ye[be.name](ye.MessageLimitReached.replace(/%LIMIT%/g, "" + He.limit).replace(/%TYPE%/g, be.name ?? ""))
      }
      static _AddLogEntry(ee) {
        ye._LogCache = ee + ye._LogCache, ye.OnNewCacheEntry && ye.OnNewCacheEntry(ee)
      }
      static _FormatMessage(ee) {
        const ie = ee => ee < 10 ? "0" + ee : "" + ee,
          He = new Date;
        return "[" + ie(He.getHours()) + ":" + ie(He.getMinutes()) + ":" + ie(He.getSeconds()) + "]: " + ee
      }
      static _LogDisabled(ee, ie) {}
      static _LogEnabled() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ie = arguments.length > 1 ? arguments[1] : void 0,
          He = arguments.length > 2 ? arguments[2] : void 0;
        const be = Array.isArray(ie) ? ie[0] : ie;
        if (void 0 !== He && !ye._CheckLimit(be, He)) return;
        const Me = ye._FormatMessage(be),
          Ke = this._Levels[ee],
          Ue = Array.isArray(ie) ? ie.slice(1) : [];
        Ke.logFunc && Ke.logFunc("BJS - " + Me, ...Ue);
        const Fe = `<div style='color:${Ke.color}'>${Me}</div><br>`;
        ye._AddLogEntry(Fe), ye._GenerateLimitMessage(be, ee)
      }
      static get LogCache() {
        return ye._LogCache
      }
      static ClearLogCache() {
        ye._LogCache = "", ye._LogLimitOutputs = {}, ye.errorsCount = 0
      }
      static set LogLevels(ee) {
        ye.Log = ye._LogDisabled, ye.Warn = ye._LogDisabled, ye.Error = ye._LogDisabled;
        const ie = [ye.MessageLogLevel, ye.WarningLogLevel, ye.ErrorLogLevel];
        for (const He of ie)
          if ((ee & He) === He) {
            const ee = this._Levels[He];
            ye[ee.name] = ye._LogEnabled.bind(ye, He)
          }
      }
    }
    ye.NoneLogLevel = 0, ye.MessageLogLevel = 1, ye.WarningLogLevel = 2, ye.ErrorLogLevel = 4, ye.AllLogLevel = 7, ye.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", ye._LogCache = "", ye._LogLimitOutputs = {}, ye._Levels = [{}, {
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
    }], ye.errorsCount = 0, ye.Log = ye._LogEnabled.bind(ye, ye.MessageLogLevel), ye.Warn = ye._LogEnabled.bind(ye, ye.WarningLogLevel), ye.Error = ye._LogEnabled.bind(ye, ye.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);