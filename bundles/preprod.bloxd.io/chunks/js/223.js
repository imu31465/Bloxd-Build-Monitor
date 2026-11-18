export const id = 223;
export const ids = [223];
export const modules = {
  39674: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Zy,
      e: () => By,
      g: () => oy
    });
    var Uy, hy = Wy(35902),
      fy = Wy(35861);
    ! function(yb) {
      yb[yb.CW = 0] = "CW", yb[yb.CCW = 1] = "CCW"
    }(Uy || (Uy = {}));
    class Zy {
      static Interpolate(yb, bb, Wy, Uy, hy) {
        if (0 === yb) return 0;
        const fy = 1 - 3 * Uy + 3 * bb,
          Zy = 3 * Uy - 6 * bb,
          cb = 3 * bb;
        let Py = yb;
        for (let oy = 0; oy < 5; oy++) {
          const bb = Py * Py;
          Py -= (fy * (bb * Py) + Zy * bb + cb * Py - yb) * (1 / (3 * fy * bb + 2 * Zy * Py + cb)), Py = Math.min(1, Math.max(0, Py))
        }
        return 3 * Math.pow(1 - Py, 2) * Py * Wy + 3 * (1 - Py) * Math.pow(Py, 2) * hy + Math.pow(Py, 3)
      }
    }
    class cb {
      constructor(yb) {
        this._radians = yb, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(yb, bb) {
        const Wy = bb.subtract(yb),
          Uy = Math.atan2(Wy.y, Wy.x);
        return new cb(Uy)
      }
      static BetweenTwoVectors(yb, bb) {
        let Wy = yb.lengthSquared() * bb.lengthSquared();
        if (0 === Wy) return new cb(Math.PI / 2);
        Wy = Math.sqrt(Wy);
        let Uy = yb.dot(bb) / Wy;
        Uy = (0, hy.Clamp)(Uy, -1, 1);
        const fy = Math.acos(Uy);
        return new cb(fy)
      }
      static FromRadians(yb) {
        return new cb(yb)
      }
      static FromDegrees(yb) {
        return new cb(yb * Math.PI / 180)
      }
    }
    class Py {
      constructor(yb, bb, Wy) {
        this.startPoint = yb, this.midPoint = bb, this.endPoint = Wy;
        const Uy = Math.pow(bb.x, 2) + Math.pow(bb.y, 2),
          hy = (Math.pow(yb.x, 2) + Math.pow(yb.y, 2) - Uy) / 2,
          Zy = (Uy - Math.pow(Wy.x, 2) - Math.pow(Wy.y, 2)) / 2,
          Py = (yb.x - bb.x) * (bb.y - Wy.y) - (bb.x - Wy.x) * (yb.y - bb.y);
        this.centerPoint = new fy.m((hy * (bb.y - Wy.y) - Zy * (yb.y - bb.y)) / Py, ((yb.x - bb.x) * Zy - (bb.x - Wy.x) * hy) / Py), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = cb.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const oy = this.startAngle.degrees();
        let By = cb.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          Ky = cb.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        By - oy > 180 && (By -= 360), By - oy < -180 && (By += 360), Ky - By > 180 && (Ky -= 360), Ky - By < -180 && (Ky += 360), this.orientation = By - oy < 0 ? 0 : 1, this.angle = cb.FromDegrees(0 === this.orientation ? oy - Ky : Ky - oy)
      }
    }
    class oy {
      constructor(yb, bb) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new fy.m(yb, bb))
      }
      addLineTo(yb, bb) {
        if (this.closed) return this;
        const Wy = new fy.m(yb, bb),
          Uy = this._points[this._points.length - 1];
        return this._points.push(Wy), this._length += Wy.subtract(Uy).length(), this
      }
      addArcTo(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Zy = this._points[this._points.length - 1],
          cb = new fy.m(yb, bb),
          oy = new fy.m(Wy, Uy),
          By = new Py(Zy, cb, oy);
        let Ky = By.angle.radians() / hy;
        0 === By.orientation && (Ky *= -1);
        let ey = By.startAngle.radians() + Ky;
        for (let fy = 0; fy < hy; fy++) {
          const yb = Math.cos(ey) * By.radius + By.centerPoint.x,
            bb = Math.sin(ey) * By.radius + By.centerPoint.y;
          this.addLineTo(yb, bb), ey += Ky
        }
        return this
      }
      addQuadraticCurveTo(yb, bb, Wy, Uy) {
        let hy = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const fy = (yb, bb, Wy, Uy) => (1 - yb) * (1 - yb) * bb + 2 * yb * (1 - yb) * Wy + yb * yb * Uy,
          Zy = this._points[this._points.length - 1];
        for (let cb = 0; cb <= hy; cb++) {
          const Py = cb / hy,
            oy = fy(Py, Zy.x, yb, Wy),
            By = fy(Py, Zy.y, bb, Uy);
          this.addLineTo(oy, By)
        }
        return this
      }
      addBezierCurveTo(yb, bb, Wy, Uy, hy, fy) {
        let Zy = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const cb = (yb, bb, Wy, Uy, hy) => (1 - yb) * (1 - yb) * (1 - yb) * bb + 3 * yb * (1 - yb) * (1 - yb) * Wy + 3 * yb * yb * (1 - yb) * Uy + yb * yb * yb * hy,
          Py = this._points[this._points.length - 1];
        for (let oy = 0; oy <= Zy; oy++) {
          const By = oy / Zy,
            Ky = cb(By, Py.x, yb, Wy, hy),
            ey = cb(By, Py.y, bb, Uy, fy);
          this.addLineTo(Ky, ey)
        }
        return this
      }
      isPointInside(yb) {
        let bb = !1;
        const Wy = this._points.length;
        for (let Uy = Wy - 1, hy = 0; hy < Wy; Uy = hy++) {
          let Wy = this._points[Uy],
            fy = this._points[hy],
            Zy = fy.x - Wy.x,
            cb = fy.y - Wy.y;
          if (Math.abs(cb) > Number.EPSILON) {
            if (cb < 0 && (Wy = this._points[hy], Zy = -Zy, fy = this._points[Uy], cb = -cb), yb.y < Wy.y || yb.y > fy.y) continue;
            if (yb.y === Wy.y && yb.x === Wy.x) return !0;
            {
              const Uy = cb * (yb.x - Wy.x) - Zy * (yb.y - Wy.y);
              if (0 === Uy) return !0;
              if (Uy < 0) continue;
              bb = !bb
            }
          } else {
            if (yb.y !== Wy.y) continue;
            if (fy.x <= yb.x && yb.x <= Wy.x || Wy.x <= yb.x && yb.x <= fy.x) return !0
          }
        }
        return bb
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let yb = this._length;
        if (this.closed) {
          const bb = this._points[this._points.length - 1];
          yb += this._points[0].subtract(bb).length()
        }
        return yb
      }
      area() {
        const yb = this._points.length;
        let bb = 0;
        for (let Wy = yb - 1, Uy = 0; Uy < yb; Wy = Uy++) bb += this._points[Wy].x * this._points[Uy].y - this._points[Uy].x * this._points[Wy].y;
        return .5 * bb
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(yb) {
        if (yb < 0 || yb > 1) return fy.m.Zero();
        const bb = yb * this.length();
        let Wy = 0;
        for (let Uy = 0; Uy < this._points.length; Uy++) {
          const yb = (Uy + 1) % this._points.length,
            hy = this._points[Uy],
            Zy = this._points[yb].subtract(hy),
            cb = Zy.length() + Wy;
          if (bb >= Wy && bb <= cb) {
            const yb = Zy.normalize(),
              Uy = bb - Wy;
            return new fy.m(hy.x + yb.x * Uy, hy.y + yb.y * Uy)
          }
          Wy = cb
        }
        return fy.m.Zero()
      }
      static StartingAt(yb, bb) {
        return new oy(yb, bb)
      }
    }
    class By {
      static CreateQuadraticBezier(yb, bb, Wy, Uy) {
        Uy = Uy > 2 ? Uy : 3;
        const hy = [],
          Zy = (yb, bb, Wy, Uy) => (1 - yb) * (1 - yb) * bb + 2 * yb * (1 - yb) * Wy + yb * yb * Uy;
        for (let cb = 0; cb <= Uy; cb++) hy.push(new fy.n(Zy(cb / Uy, yb.x, bb.x, Wy.x), Zy(cb / Uy, yb.y, bb.y, Wy.y), Zy(cb / Uy, yb.z, bb.z, Wy.z)));
        return new By(hy)
      }
      static CreateCubicBezier(yb, bb, Wy, Uy, hy) {
        hy = hy > 3 ? hy : 4;
        const Zy = [],
          cb = (yb, bb, Wy, Uy, hy) => (1 - yb) * (1 - yb) * (1 - yb) * bb + 3 * yb * (1 - yb) * (1 - yb) * Wy + 3 * yb * yb * (1 - yb) * Uy + yb * yb * yb * hy;
        for (let Py = 0; Py <= hy; Py++) Zy.push(new fy.n(cb(Py / hy, yb.x, bb.x, Wy.x, Uy.x), cb(Py / hy, yb.y, bb.y, Wy.y, Uy.y), cb(Py / hy, yb.z, bb.z, Wy.z, Uy.z)));
        return new By(Zy)
      }
      static CreateHermiteSpline(yb, bb, Wy, Uy, hy) {
        const Zy = [],
          cb = 1 / hy;
        for (let Py = 0; Py <= hy; Py++) Zy.push(fy.n.Hermite(yb, bb, Wy, Uy, Py * cb));
        return new By(Zy)
      }
      static CreateCatmullRomSpline(yb, bb, Wy) {
        const Uy = [],
          hy = 1 / bb;
        let Zy = 0;
        if (Wy) {
          const Wy = yb.length;
          for (let cb = 0; cb < Wy; cb++) {
            Zy = 0;
            for (let Py = 0; Py < bb; Py++) Uy.push(fy.n.CatmullRom(yb[cb % Wy], yb[(cb + 1) % Wy], yb[(cb + 2) % Wy], yb[(cb + 3) % Wy], Zy)), Zy += hy
          }
          Uy.push(Uy[0])
        } else {
          const Wy = [];
          Wy.push(yb[0].clone()), Wy.push(...yb), Wy.push(yb[yb.length - 1].clone());
          let cb = 0;
          for (; cb < Wy.length - 3; cb++) {
            Zy = 0;
            for (let yb = 0; yb < bb; yb++) Uy.push(fy.n.CatmullRom(Wy[cb], Wy[cb + 1], Wy[cb + 2], Wy[cb + 3], Zy)), Zy += hy
          }
          cb--, Uy.push(fy.n.CatmullRom(Wy[cb], Wy[cb + 1], Wy[cb + 2], Wy[cb + 3], Zy))
        }
        return new By(Uy)
      }
      static ArcThru3Points(yb, bb, Wy) {
        let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          hy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Zy = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const cb = [],
          Py = bb.subtract(yb),
          oy = Wy.subtract(bb),
          Ky = yb.subtract(Wy),
          ey = fy.n.Cross(Py, oy),
          qb = ey.length();
        if (qb < Math.pow(10, -8)) return new By(cb);
        const sy = Py.lengthSquared(),
          Sy = oy.lengthSquared(),
          Ey = Ky.lengthSquared(),
          ly = ey.lengthSquared(),
          mb = .5 * Py.length() * oy.length() * Ky.length() / qb,
          Cy = -.5 * Sy * fy.n.Dot(Py, Ky) / ly,
          Ty = -.5 * Ey * fy.n.Dot(Py, oy) / ly,
          Vy = -.5 * sy * fy.n.Dot(oy, Ky) / ly,
          Jy = yb.scale(Cy).add(bb.scale(Ty)).add(Wy.scale(Vy)),
          gb = yb.subtract(Jy).normalize(),
          Gy = fy.n.Cross(ey, gb).normalize();
        if (Zy) {
          const bb = 2 * Math.PI / Uy;
          for (let yb = 0; yb <= 2 * Math.PI; yb += bb) cb.push(Jy.add(gb.scale(mb * Math.cos(yb)).add(Gy.scale(mb * Math.sin(yb)))));
          cb.push(yb)
        } else {
          const bb = 1 / Uy;
          let fy, Zy = 0;
          do {
            fy = Jy.add(gb.scale(mb * Math.cos(Zy)).add(Gy.scale(mb * Math.sin(Zy)))), cb.push(fy), Zy += bb
          } while (!fy.equalsWithEpsilon(Wy, mb * bb * 1.1));
          cb.push(Wy), hy && cb.push(yb)
        }
        return new By(cb)
      }
      constructor(yb) {
        this._length = 0, this._points = yb, this._length = this._computeLength(yb)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (yb) {
        const bb = this._points[this._points.length - 1],
          Wy = this._points.slice(),
          Uy = yb.getPoints();
        for (let hy = 1; hy < Uy.length; hy++) Wy.push(Uy[hy].subtract(Uy[0]).add(bb));
        return new By(Wy)
      }
      _computeLength(yb) {
        let bb = 0;
        for (let Wy = 1; Wy < yb.length; Wy++) bb += yb[Wy].subtract(yb[Wy - 1]).length();
        return bb
      }
    }
  },
  37346: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy
    });
    var Uy = Wy(37350);
    const hy = (yb, bb, Wy) => yb ? yb.getClassName && "Mesh" === yb.getClassName() ? null : !yb.getClassName || "SubMesh" !== yb.getClassName() && "PhysicsBody" !== yb.getClassName() ? yb.clone ? yb.clone() : Array.isArray(yb) ? yb.slice() : Wy && "object" === typeof yb ? {
      ...yb
    } : null : yb.clone(bb) : null;
    class fy {
      static DeepCopy(yb, bb, Wy, fy) {
        let Zy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const cb = function(yb) {
          const bb = [];
          do {
            const Wy = Object.getOwnPropertyNames(yb);
            for (const yb of Wy) - 1 === bb.indexOf(yb) && bb.push(yb)
          } while (yb = Object.getPrototypeOf(yb));
          return bb
        }(yb);
        for (const oy of cb) {
          if ("_" === oy[0] && (!fy || -1 === fy.indexOf(oy))) continue;
          if (oy.endsWith("Observable")) continue;
          if (Wy && -1 !== Wy.indexOf(oy)) continue;
          const cb = yb[oy],
            By = typeof cb;
          if ("function" !== By) try {
            if ("object" === By)
              if (cb instanceof Uint8Array) bb[oy] = Uint8Array.from(cb);
              else if (cb instanceof Array) {
              if (bb[oy] = [], cb.length > 0)
                if ("object" == typeof cb[0])
                  for (let yb = 0; yb < cb.length; yb++) {
                    const Wy = hy(cb[yb], bb, Zy); - 1 === bb[oy].indexOf(Wy) && bb[oy].push(Wy)
                  } else bb[oy] = cb.slice(0)
            } else bb[oy] = hy(cb, bb, Zy);
            else bb[oy] = cb
          } catch (Py) {
            Uy.b.Warn(Py.message)
          }
        }
      }
    }
  },
  37350: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy
    });
    class Uy {
      static _CheckLimit(yb, bb) {
        let Wy = Uy._LogLimitOutputs[yb];
        return Wy ? Wy.current++ : (Wy = {
          limit: bb,
          current: 1
        }, Uy._LogLimitOutputs[yb] = Wy), Wy.current <= Wy.limit
      }
      static _GenerateLimitMessage(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Wy = Uy._LogLimitOutputs[yb];
        if (!Wy || !Uy.MessageLimitReached) return;
        const hy = this._Levels[bb];
        Wy.current === Wy.limit && Uy[hy.name](Uy.MessageLimitReached.replace(/%LIMIT%/g, "" + Wy.limit).replace(/%TYPE%/g, hy.name ?? ""))
      }
      static _AddLogEntry(yb) {
        Uy._LogCache = yb + Uy._LogCache, Uy.OnNewCacheEntry && Uy.OnNewCacheEntry(yb)
      }
      static _FormatMessage(yb) {
        const bb = yb => yb < 10 ? "0" + yb : "" + yb,
          Wy = new Date;
        return "[" + bb(Wy.getHours()) + ":" + bb(Wy.getMinutes()) + ":" + bb(Wy.getSeconds()) + "]: " + yb
      }
      static _LogDisabled(yb, bb) {}
      static _LogEnabled() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bb = arguments.length > 1 ? arguments[1] : void 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        const hy = Array.isArray(bb) ? bb[0] : bb;
        if (void 0 !== Wy && !Uy._CheckLimit(hy, Wy)) return;
        const fy = Uy._FormatMessage(hy),
          Zy = this._Levels[yb],
          cb = Array.isArray(bb) ? bb.slice(1) : [];
        Zy.logFunc && Zy.logFunc("BJS - " + fy, ...cb);
        const Py = `<div style='color:${Zy.color}'>${fy}</div><br>`;
        Uy._AddLogEntry(Py), Uy._GenerateLimitMessage(hy, yb)
      }
      static get LogCache() {
        return Uy._LogCache
      }
      static ClearLogCache() {
        Uy._LogCache = "", Uy._LogLimitOutputs = {}, Uy.errorsCount = 0
      }
      static set LogLevels(yb) {
        Uy.Log = Uy._LogDisabled, Uy.Warn = Uy._LogDisabled, Uy.Error = Uy._LogDisabled;
        const bb = [Uy.MessageLogLevel, Uy.WarningLogLevel, Uy.ErrorLogLevel];
        for (const Wy of bb)
          if ((yb & Wy) === Wy) {
            const yb = this._Levels[Wy];
            Uy[yb.name] = Uy._LogEnabled.bind(Uy, Wy)
          }
      }
    }
    Uy.NoneLogLevel = 0, Uy.MessageLogLevel = 1, Uy.WarningLogLevel = 2, Uy.ErrorLogLevel = 4, Uy.AllLogLevel = 7, Uy.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Uy._LogCache = "", Uy._LogLimitOutputs = {}, Uy._Levels = [{}, {
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
    }], Uy.errorsCount = 0, Uy.Log = Uy._LogEnabled.bind(Uy, Uy.MessageLogLevel), Uy.Warn = Uy._LogEnabled.bind(Uy, Uy.WarningLogLevel), Uy.Error = Uy._LogEnabled.bind(Uy, Uy.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);