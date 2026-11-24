export const id = 244;
export const ids = [244];
export const modules = {
  41150: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => xm,
      h: () => Rm,
      k: () => im
    });
    var hm, Am = fm(37208),
      am = fm(37185);
    ! function(mm) {
      mm[mm.CW = 0] = "CW", mm[mm.CCW = 1] = "CCW"
    }(hm || (hm = {}));
    class xm {
      static Interpolate(mm, Tm, fm, hm, Am) {
        if (0 === mm) return 0;
        const am = 1 - 3 * hm + 3 * Tm,
          xm = 3 * hm - 6 * Tm,
          wm = 3 * Tm;
        let Dm = mm;
        for (let im = 0; im < 5; im++) {
          const Tm = Dm * Dm;
          Dm -= (am * (Tm * Dm) + xm * Tm + wm * Dm - mm) * (1 / (3 * am * Tm + 2 * xm * Dm + wm)), Dm = Math.min(1, Math.max(0, Dm))
        }
        return 3 * Math.pow(1 - Dm, 2) * Dm * fm + 3 * (1 - Dm) * Math.pow(Dm, 2) * Am + Math.pow(Dm, 3)
      }
    }
    class wm {
      constructor(mm) {
        this._radians = mm, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(mm, Tm) {
        const fm = Tm.subtract(mm),
          hm = Math.atan2(fm.y, fm.x);
        return new wm(hm)
      }
      static BetweenTwoVectors(mm, Tm) {
        let fm = mm.lengthSquared() * Tm.lengthSquared();
        if (0 === fm) return new wm(Math.PI / 2);
        fm = Math.sqrt(fm);
        let hm = mm.dot(Tm) / fm;
        hm = (0, Am.Clamp)(hm, -1, 1);
        const am = Math.acos(hm);
        return new wm(am)
      }
      static FromRadians(mm) {
        return new wm(mm)
      }
      static FromDegrees(mm) {
        return new wm(mm * Math.PI / 180)
      }
    }
    class Dm {
      constructor(mm, Tm, fm) {
        this.startPoint = mm, this.midPoint = Tm, this.endPoint = fm;
        const hm = Math.pow(Tm.x, 2) + Math.pow(Tm.y, 2),
          Am = (Math.pow(mm.x, 2) + Math.pow(mm.y, 2) - hm) / 2,
          xm = (hm - Math.pow(fm.x, 2) - Math.pow(fm.y, 2)) / 2,
          Dm = (mm.x - Tm.x) * (Tm.y - fm.y) - (Tm.x - fm.x) * (mm.y - Tm.y);
        this.centerPoint = new am.l((Am * (Tm.y - fm.y) - xm * (mm.y - Tm.y)) / Dm, ((mm.x - Tm.x) * xm - (Tm.x - fm.x) * Am) / Dm), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = wm.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const im = this.startAngle.degrees();
        let Rm = wm.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          pm = wm.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        Rm - im > 180 && (Rm -= 360), Rm - im < -180 && (Rm += 360), pm - Rm > 180 && (pm -= 360), pm - Rm < -180 && (pm += 360), this.orientation = Rm - im < 0 ? 0 : 1, this.angle = wm.FromDegrees(0 === this.orientation ? im - pm : pm - im)
      }
    }
    class im {
      constructor(mm, Tm) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new am.l(mm, Tm))
      }
      addLineTo(mm, Tm) {
        if (this.closed) return this;
        const fm = new am.l(mm, Tm),
          hm = this._points[this._points.length - 1];
        return this._points.push(fm), this._length += fm.subtract(hm).length(), this
      }
      addArcTo(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const xm = this._points[this._points.length - 1],
          wm = new am.l(mm, Tm),
          im = new am.l(fm, hm),
          Rm = new Dm(xm, wm, im);
        let pm = Rm.angle.radians() / Am;
        0 === Rm.orientation && (pm *= -1);
        let Em = Rm.startAngle.radians() + pm;
        for (let am = 0; am < Am; am++) {
          const mm = Math.cos(Em) * Rm.radius + Rm.centerPoint.x,
            Tm = Math.sin(Em) * Rm.radius + Rm.centerPoint.y;
          this.addLineTo(mm, Tm), Em += pm
        }
        return this
      }
      addQuadraticCurveTo(mm, Tm, fm, hm) {
        let Am = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const am = (mm, Tm, fm, hm) => (1 - mm) * (1 - mm) * Tm + 2 * mm * (1 - mm) * fm + mm * mm * hm,
          xm = this._points[this._points.length - 1];
        for (let wm = 0; wm <= Am; wm++) {
          const Dm = wm / Am,
            im = am(Dm, xm.x, mm, fm),
            Rm = am(Dm, xm.y, Tm, hm);
          this.addLineTo(im, Rm)
        }
        return this
      }
      addBezierCurveTo(mm, Tm, fm, hm, Am, am) {
        let xm = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const wm = (mm, Tm, fm, hm, Am) => (1 - mm) * (1 - mm) * (1 - mm) * Tm + 3 * mm * (1 - mm) * (1 - mm) * fm + 3 * mm * mm * (1 - mm) * hm + mm * mm * mm * Am,
          Dm = this._points[this._points.length - 1];
        for (let im = 0; im <= xm; im++) {
          const Rm = im / xm,
            pm = wm(Rm, Dm.x, mm, fm, Am),
            Em = wm(Rm, Dm.y, Tm, hm, am);
          this.addLineTo(pm, Em)
        }
        return this
      }
      isPointInside(mm) {
        let Tm = !1;
        const fm = this._points.length;
        for (let hm = fm - 1, Am = 0; Am < fm; hm = Am++) {
          let fm = this._points[hm],
            am = this._points[Am],
            xm = am.x - fm.x,
            wm = am.y - fm.y;
          if (Math.abs(wm) > Number.EPSILON) {
            if (wm < 0 && (fm = this._points[Am], xm = -xm, am = this._points[hm], wm = -wm), mm.y < fm.y || mm.y > am.y) continue;
            if (mm.y === fm.y && mm.x === fm.x) return !0;
            {
              const hm = wm * (mm.x - fm.x) - xm * (mm.y - fm.y);
              if (0 === hm) return !0;
              if (hm < 0) continue;
              Tm = !Tm
            }
          } else {
            if (mm.y !== fm.y) continue;
            if (am.x <= mm.x && mm.x <= fm.x || fm.x <= mm.x && mm.x <= am.x) return !0
          }
        }
        return Tm
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let mm = this._length;
        if (this.closed) {
          const Tm = this._points[this._points.length - 1];
          mm += this._points[0].subtract(Tm).length()
        }
        return mm
      }
      area() {
        const mm = this._points.length;
        let Tm = 0;
        for (let fm = mm - 1, hm = 0; hm < mm; fm = hm++) Tm += this._points[fm].x * this._points[hm].y - this._points[hm].x * this._points[fm].y;
        return .5 * Tm
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(mm) {
        if (mm < 0 || mm > 1) return am.l.Zero();
        const Tm = mm * this.length();
        let fm = 0;
        for (let hm = 0; hm < this._points.length; hm++) {
          const mm = (hm + 1) % this._points.length,
            Am = this._points[hm],
            xm = this._points[mm].subtract(Am),
            wm = xm.length() + fm;
          if (Tm >= fm && Tm <= wm) {
            const mm = xm.normalize(),
              hm = Tm - fm;
            return new am.l(Am.x + mm.x * hm, Am.y + mm.y * hm)
          }
          fm = wm
        }
        return am.l.Zero()
      }
      static StartingAt(mm, Tm) {
        return new im(mm, Tm)
      }
    }
    class Rm {
      static CreateQuadraticBezier(mm, Tm, fm, hm) {
        hm = hm > 2 ? hm : 3;
        const Am = [],
          xm = (mm, Tm, fm, hm) => (1 - mm) * (1 - mm) * Tm + 2 * mm * (1 - mm) * fm + mm * mm * hm;
        for (let wm = 0; wm <= hm; wm++) Am.push(new am.p(xm(wm / hm, mm.x, Tm.x, fm.x), xm(wm / hm, mm.y, Tm.y, fm.y), xm(wm / hm, mm.z, Tm.z, fm.z)));
        return new Rm(Am)
      }
      static CreateCubicBezier(mm, Tm, fm, hm, Am) {
        Am = Am > 3 ? Am : 4;
        const xm = [],
          wm = (mm, Tm, fm, hm, Am) => (1 - mm) * (1 - mm) * (1 - mm) * Tm + 3 * mm * (1 - mm) * (1 - mm) * fm + 3 * mm * mm * (1 - mm) * hm + mm * mm * mm * Am;
        for (let Dm = 0; Dm <= Am; Dm++) xm.push(new am.p(wm(Dm / Am, mm.x, Tm.x, fm.x, hm.x), wm(Dm / Am, mm.y, Tm.y, fm.y, hm.y), wm(Dm / Am, mm.z, Tm.z, fm.z, hm.z)));
        return new Rm(xm)
      }
      static CreateHermiteSpline(mm, Tm, fm, hm, Am) {
        const xm = [],
          wm = 1 / Am;
        for (let Dm = 0; Dm <= Am; Dm++) xm.push(am.p.Hermite(mm, Tm, fm, hm, Dm * wm));
        return new Rm(xm)
      }
      static CreateCatmullRomSpline(mm, Tm, fm) {
        const hm = [],
          Am = 1 / Tm;
        let xm = 0;
        if (fm) {
          const fm = mm.length;
          for (let wm = 0; wm < fm; wm++) {
            xm = 0;
            for (let Dm = 0; Dm < Tm; Dm++) hm.push(am.p.CatmullRom(mm[wm % fm], mm[(wm + 1) % fm], mm[(wm + 2) % fm], mm[(wm + 3) % fm], xm)), xm += Am
          }
          hm.push(hm[0])
        } else {
          const fm = [];
          fm.push(mm[0].clone()), fm.push(...mm), fm.push(mm[mm.length - 1].clone());
          let wm = 0;
          for (; wm < fm.length - 3; wm++) {
            xm = 0;
            for (let mm = 0; mm < Tm; mm++) hm.push(am.p.CatmullRom(fm[wm], fm[wm + 1], fm[wm + 2], fm[wm + 3], xm)), xm += Am
          }
          wm--, hm.push(am.p.CatmullRom(fm[wm], fm[wm + 1], fm[wm + 2], fm[wm + 3], xm))
        }
        return new Rm(hm)
      }
      static ArcThru3Points(mm, Tm, fm) {
        let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          Am = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          xm = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const wm = [],
          Dm = Tm.subtract(mm),
          im = fm.subtract(Tm),
          pm = mm.subtract(fm),
          Em = am.p.Cross(Dm, im),
          om = Em.length();
        if (om < Math.pow(10, -8)) return new Rm(wm);
        const Om = Dm.lengthSquared(),
          Ym = im.lengthSquared(),
          qm = pm.lengthSquared(),
          jm = Em.lengthSquared(),
          Vm = .5 * Dm.length() * im.length() * pm.length() / om,
          Im = -.5 * Ym * am.p.Dot(Dm, pm) / jm,
          Km = -.5 * qm * am.p.Dot(Dm, im) / jm,
          Qm = -.5 * Om * am.p.Dot(im, pm) / jm,
          nm = mm.scale(Im).add(Tm.scale(Km)).add(fm.scale(Qm)),
          Jm = mm.subtract(nm).normalize(),
          cm = am.p.Cross(Em, Jm).normalize();
        if (xm) {
          const Tm = 2 * Math.PI / hm;
          for (let mm = 0; mm <= 2 * Math.PI; mm += Tm) wm.push(nm.add(Jm.scale(Vm * Math.cos(mm)).add(cm.scale(Vm * Math.sin(mm)))));
          wm.push(mm)
        } else {
          const Tm = 1 / hm;
          let am, xm = 0;
          do {
            am = nm.add(Jm.scale(Vm * Math.cos(xm)).add(cm.scale(Vm * Math.sin(xm)))), wm.push(am), xm += Tm
          } while (!am.equalsWithEpsilon(fm, Vm * Tm * 1.1));
          wm.push(fm), Am && wm.push(mm)
        }
        return new Rm(wm)
      }
      constructor(mm) {
        this._length = 0, this._points = mm, this._length = this._computeLength(mm)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (mm) {
        const Tm = this._points[this._points.length - 1],
          fm = this._points.slice(),
          hm = mm.getPoints();
        for (let Am = 1; Am < hm.length; Am++) fm.push(hm[Am].subtract(hm[0]).add(Tm));
        return new Rm(fm)
      }
      _computeLength(mm) {
        let Tm = 0;
        for (let fm = 1; fm < mm.length; fm++) Tm += mm[fm].subtract(mm[fm - 1]).length();
        return Tm
      }
    }
  },
  38764: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am
    });
    var hm = fm(38766);
    const Am = (mm, Tm, fm) => mm ? mm.getClassName && "Mesh" === mm.getClassName() ? null : !mm.getClassName || "SubMesh" !== mm.getClassName() && "PhysicsBody" !== mm.getClassName() ? mm.clone ? mm.clone() : Array.isArray(mm) ? mm.slice() : fm && "object" === typeof mm ? {
      ...mm
    } : null : mm.clone(Tm) : null;
    class am {
      static DeepCopy(mm, Tm, fm, am) {
        let xm = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const wm = function(mm) {
          const Tm = [];
          do {
            const fm = Object.getOwnPropertyNames(mm);
            for (const mm of fm) - 1 === Tm.indexOf(mm) && Tm.push(mm)
          } while (mm = Object.getPrototypeOf(mm));
          return Tm
        }(mm);
        for (const im of wm) {
          if ("_" === im[0] && (!am || -1 === am.indexOf(im))) continue;
          if (im.endsWith("Observable")) continue;
          if (fm && -1 !== fm.indexOf(im)) continue;
          const wm = mm[im],
            Rm = typeof wm;
          if ("function" !== Rm) try {
            if ("object" === Rm)
              if (wm instanceof Uint8Array) Tm[im] = Uint8Array.from(wm);
              else if (wm instanceof Array) {
              if (Tm[im] = [], wm.length > 0)
                if ("object" == typeof wm[0])
                  for (let mm = 0; mm < wm.length; mm++) {
                    const fm = Am(wm[mm], Tm, xm); - 1 === Tm[im].indexOf(fm) && Tm[im].push(fm)
                  } else Tm[im] = wm.slice(0)
            } else Tm[im] = Am(wm, Tm, xm);
            else Tm[im] = wm
          } catch (Dm) {
            hm.b.Warn(Dm.message)
          }
        }
      }
    }
  },
  38766: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm
    });
    class hm {
      static _CheckLimit(mm, Tm) {
        let fm = hm._LogLimitOutputs[mm];
        return fm ? fm.current++ : (fm = {
          limit: Tm,
          current: 1
        }, hm._LogLimitOutputs[mm] = fm), fm.current <= fm.limit
      }
      static _GenerateLimitMessage(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const fm = hm._LogLimitOutputs[mm];
        if (!fm || !hm.MessageLimitReached) return;
        const Am = this._Levels[Tm];
        fm.current === fm.limit && hm[Am.name](hm.MessageLimitReached.replace(/%LIMIT%/g, "" + fm.limit).replace(/%TYPE%/g, Am.name ?? ""))
      }
      static _AddLogEntry(mm) {
        hm._LogCache = mm + hm._LogCache, hm.OnNewCacheEntry && hm.OnNewCacheEntry(mm)
      }
      static _FormatMessage(mm) {
        const Tm = mm => mm < 10 ? "0" + mm : "" + mm,
          fm = new Date;
        return "[" + Tm(fm.getHours()) + ":" + Tm(fm.getMinutes()) + ":" + Tm(fm.getSeconds()) + "]: " + mm
      }
      static _LogDisabled(mm, Tm) {}
      static _LogEnabled() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Tm = arguments.length > 1 ? arguments[1] : void 0,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        const Am = Array.isArray(Tm) ? Tm[0] : Tm;
        if (void 0 !== fm && !hm._CheckLimit(Am, fm)) return;
        const am = hm._FormatMessage(Am),
          xm = this._Levels[mm],
          wm = Array.isArray(Tm) ? Tm.slice(1) : [];
        xm.logFunc && xm.logFunc("BJS - " + am, ...wm);
        const Dm = `<div style='color:${xm.color}'>${am}</div><br>`;
        hm._AddLogEntry(Dm), hm._GenerateLimitMessage(Am, mm)
      }
      static get LogCache() {
        return hm._LogCache
      }
      static ClearLogCache() {
        hm._LogCache = "", hm._LogLimitOutputs = {}, hm.errorsCount = 0
      }
      static set LogLevels(mm) {
        hm.Log = hm._LogDisabled, hm.Warn = hm._LogDisabled, hm.Error = hm._LogDisabled;
        const Tm = [hm.MessageLogLevel, hm.WarningLogLevel, hm.ErrorLogLevel];
        for (const fm of Tm)
          if ((mm & fm) === fm) {
            const mm = this._Levels[fm];
            hm[mm.name] = hm._LogEnabled.bind(hm, fm)
          }
      }
    }
    hm.NoneLogLevel = 0, hm.MessageLogLevel = 1, hm.WarningLogLevel = 2, hm.ErrorLogLevel = 4, hm.AllLogLevel = 7, hm.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", hm._LogCache = "", hm._LogLimitOutputs = {}, hm._Levels = [{}, {
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
    }], hm.errorsCount = 0, hm.Log = hm._LogEnabled.bind(hm, hm.MessageLogLevel), hm.Warn = hm._LogEnabled.bind(hm, hm.WarningLogLevel), hm.Error = hm._LogEnabled.bind(hm, hm.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);