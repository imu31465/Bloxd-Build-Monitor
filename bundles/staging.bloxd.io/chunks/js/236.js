export const id = 236;
export const ids = [236];
export const modules = {
  40192: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Eb,
      h: () => vb,
      j: () => eb
    });
    var Ab, Mb = Ub(36436),
      Tb = Ub(36401);
    ! function(bb) {
      bb[bb.CW = 0] = "CW", bb[bb.CCW = 1] = "CCW"
    }(Ab || (Ab = {}));
    class Eb {
      static Interpolate(bb, ab, Ub, Ab, Mb) {
        if (0 === bb) return 0;
        const Tb = 1 - 3 * Ab + 3 * ab,
          Eb = 3 * Ab - 6 * ab,
          Yb = 3 * ab;
        let Bb = bb;
        for (let eb = 0; eb < 5; eb++) {
          const ab = Bb * Bb;
          Bb -= (Tb * (ab * Bb) + Eb * ab + Yb * Bb - bb) * (1 / (3 * Tb * ab + 2 * Eb * Bb + Yb)), Bb = Math.min(1, Math.max(0, Bb))
        }
        return 3 * Math.pow(1 - Bb, 2) * Bb * Ub + 3 * (1 - Bb) * Math.pow(Bb, 2) * Mb + Math.pow(Bb, 3)
      }
    }
    class Yb {
      constructor(bb) {
        this._radians = bb, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(bb, ab) {
        const Ub = ab.subtract(bb),
          Ab = Math.atan2(Ub.y, Ub.x);
        return new Yb(Ab)
      }
      static BetweenTwoVectors(bb, ab) {
        let Ub = bb.lengthSquared() * ab.lengthSquared();
        if (0 === Ub) return new Yb(Math.PI / 2);
        Ub = Math.sqrt(Ub);
        let Ab = bb.dot(ab) / Ub;
        Ab = (0, Mb.Clamp)(Ab, -1, 1);
        const Tb = Math.acos(Ab);
        return new Yb(Tb)
      }
      static FromRadians(bb) {
        return new Yb(bb)
      }
      static FromDegrees(bb) {
        return new Yb(bb * Math.PI / 180)
      }
    }
    class Bb {
      constructor(bb, ab, Ub) {
        this.startPoint = bb, this.midPoint = ab, this.endPoint = Ub;
        const Ab = Math.pow(ab.x, 2) + Math.pow(ab.y, 2),
          Mb = (Math.pow(bb.x, 2) + Math.pow(bb.y, 2) - Ab) / 2,
          Eb = (Ab - Math.pow(Ub.x, 2) - Math.pow(Ub.y, 2)) / 2,
          Bb = (bb.x - ab.x) * (ab.y - Ub.y) - (ab.x - Ub.x) * (bb.y - ab.y);
        this.centerPoint = new Tb.l((Mb * (ab.y - Ub.y) - Eb * (bb.y - ab.y)) / Bb, ((bb.x - ab.x) * Eb - (ab.x - Ub.x) * Mb) / Bb), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = Yb.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const eb = this.startAngle.degrees();
        let vb = Yb.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          Lb = Yb.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        vb - eb > 180 && (vb -= 360), vb - eb < -180 && (vb += 360), Lb - vb > 180 && (Lb -= 360), Lb - vb < -180 && (Lb += 360), this.orientation = vb - eb < 0 ? 0 : 1, this.angle = Yb.FromDegrees(0 === this.orientation ? eb - Lb : Lb - eb)
      }
    }
    class eb {
      constructor(bb, ab) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new Tb.l(bb, ab))
      }
      addLineTo(bb, ab) {
        if (this.closed) return this;
        const Ub = new Tb.l(bb, ab),
          Ab = this._points[this._points.length - 1];
        return this._points.push(Ub), this._length += Ub.subtract(Ab).length(), this
      }
      addArcTo(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Eb = this._points[this._points.length - 1],
          Yb = new Tb.l(bb, ab),
          eb = new Tb.l(Ub, Ab),
          vb = new Bb(Eb, Yb, eb);
        let Lb = vb.angle.radians() / Mb;
        0 === vb.orientation && (Lb *= -1);
        let Pb = vb.startAngle.radians() + Lb;
        for (let Tb = 0; Tb < Mb; Tb++) {
          const bb = Math.cos(Pb) * vb.radius + vb.centerPoint.x,
            ab = Math.sin(Pb) * vb.radius + vb.centerPoint.y;
          this.addLineTo(bb, ab), Pb += Lb
        }
        return this
      }
      addQuadraticCurveTo(bb, ab, Ub, Ab) {
        let Mb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Tb = (bb, ab, Ub, Ab) => (1 - bb) * (1 - bb) * ab + 2 * bb * (1 - bb) * Ub + bb * bb * Ab,
          Eb = this._points[this._points.length - 1];
        for (let Yb = 0; Yb <= Mb; Yb++) {
          const Bb = Yb / Mb,
            eb = Tb(Bb, Eb.x, bb, Ub),
            vb = Tb(Bb, Eb.y, ab, Ab);
          this.addLineTo(eb, vb)
        }
        return this
      }
      addBezierCurveTo(bb, ab, Ub, Ab, Mb, Tb) {
        let Eb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const Yb = (bb, ab, Ub, Ab, Mb) => (1 - bb) * (1 - bb) * (1 - bb) * ab + 3 * bb * (1 - bb) * (1 - bb) * Ub + 3 * bb * bb * (1 - bb) * Ab + bb * bb * bb * Mb,
          Bb = this._points[this._points.length - 1];
        for (let eb = 0; eb <= Eb; eb++) {
          const vb = eb / Eb,
            Lb = Yb(vb, Bb.x, bb, Ub, Mb),
            Pb = Yb(vb, Bb.y, ab, Ab, Tb);
          this.addLineTo(Lb, Pb)
        }
        return this
      }
      isPointInside(bb) {
        let ab = !1;
        const Ub = this._points.length;
        for (let Ab = Ub - 1, Mb = 0; Mb < Ub; Ab = Mb++) {
          let Ub = this._points[Ab],
            Tb = this._points[Mb],
            Eb = Tb.x - Ub.x,
            Yb = Tb.y - Ub.y;
          if (Math.abs(Yb) > Number.EPSILON) {
            if (Yb < 0 && (Ub = this._points[Mb], Eb = -Eb, Tb = this._points[Ab], Yb = -Yb), bb.y < Ub.y || bb.y > Tb.y) continue;
            if (bb.y === Ub.y && bb.x === Ub.x) return !0;
            {
              const Ab = Yb * (bb.x - Ub.x) - Eb * (bb.y - Ub.y);
              if (0 === Ab) return !0;
              if (Ab < 0) continue;
              ab = !ab
            }
          } else {
            if (bb.y !== Ub.y) continue;
            if (Tb.x <= bb.x && bb.x <= Ub.x || Ub.x <= bb.x && bb.x <= Tb.x) return !0
          }
        }
        return ab
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let bb = this._length;
        if (this.closed) {
          const ab = this._points[this._points.length - 1];
          bb += this._points[0].subtract(ab).length()
        }
        return bb
      }
      area() {
        const bb = this._points.length;
        let ab = 0;
        for (let Ub = bb - 1, Ab = 0; Ab < bb; Ub = Ab++) ab += this._points[Ub].x * this._points[Ab].y - this._points[Ab].x * this._points[Ub].y;
        return .5 * ab
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(bb) {
        if (bb < 0 || bb > 1) return Tb.l.Zero();
        const ab = bb * this.length();
        let Ub = 0;
        for (let Ab = 0; Ab < this._points.length; Ab++) {
          const bb = (Ab + 1) % this._points.length,
            Mb = this._points[Ab],
            Eb = this._points[bb].subtract(Mb),
            Yb = Eb.length() + Ub;
          if (ab >= Ub && ab <= Yb) {
            const bb = Eb.normalize(),
              Ab = ab - Ub;
            return new Tb.l(Mb.x + bb.x * Ab, Mb.y + bb.y * Ab)
          }
          Ub = Yb
        }
        return Tb.l.Zero()
      }
      static StartingAt(bb, ab) {
        return new eb(bb, ab)
      }
    }
    class vb {
      static CreateQuadraticBezier(bb, ab, Ub, Ab) {
        Ab = Ab > 2 ? Ab : 3;
        const Mb = [],
          Eb = (bb, ab, Ub, Ab) => (1 - bb) * (1 - bb) * ab + 2 * bb * (1 - bb) * Ub + bb * bb * Ab;
        for (let Yb = 0; Yb <= Ab; Yb++) Mb.push(new Tb.m(Eb(Yb / Ab, bb.x, ab.x, Ub.x), Eb(Yb / Ab, bb.y, ab.y, Ub.y), Eb(Yb / Ab, bb.z, ab.z, Ub.z)));
        return new vb(Mb)
      }
      static CreateCubicBezier(bb, ab, Ub, Ab, Mb) {
        Mb = Mb > 3 ? Mb : 4;
        const Eb = [],
          Yb = (bb, ab, Ub, Ab, Mb) => (1 - bb) * (1 - bb) * (1 - bb) * ab + 3 * bb * (1 - bb) * (1 - bb) * Ub + 3 * bb * bb * (1 - bb) * Ab + bb * bb * bb * Mb;
        for (let Bb = 0; Bb <= Mb; Bb++) Eb.push(new Tb.m(Yb(Bb / Mb, bb.x, ab.x, Ub.x, Ab.x), Yb(Bb / Mb, bb.y, ab.y, Ub.y, Ab.y), Yb(Bb / Mb, bb.z, ab.z, Ub.z, Ab.z)));
        return new vb(Eb)
      }
      static CreateHermiteSpline(bb, ab, Ub, Ab, Mb) {
        const Eb = [],
          Yb = 1 / Mb;
        for (let Bb = 0; Bb <= Mb; Bb++) Eb.push(Tb.m.Hermite(bb, ab, Ub, Ab, Bb * Yb));
        return new vb(Eb)
      }
      static CreateCatmullRomSpline(bb, ab, Ub) {
        const Ab = [],
          Mb = 1 / ab;
        let Eb = 0;
        if (Ub) {
          const Ub = bb.length;
          for (let Yb = 0; Yb < Ub; Yb++) {
            Eb = 0;
            for (let Bb = 0; Bb < ab; Bb++) Ab.push(Tb.m.CatmullRom(bb[Yb % Ub], bb[(Yb + 1) % Ub], bb[(Yb + 2) % Ub], bb[(Yb + 3) % Ub], Eb)), Eb += Mb
          }
          Ab.push(Ab[0])
        } else {
          const Ub = [];
          Ub.push(bb[0].clone()), Ub.push(...bb), Ub.push(bb[bb.length - 1].clone());
          let Yb = 0;
          for (; Yb < Ub.length - 3; Yb++) {
            Eb = 0;
            for (let bb = 0; bb < ab; bb++) Ab.push(Tb.m.CatmullRom(Ub[Yb], Ub[Yb + 1], Ub[Yb + 2], Ub[Yb + 3], Eb)), Eb += Mb
          }
          Yb--, Ab.push(Tb.m.CatmullRom(Ub[Yb], Ub[Yb + 1], Ub[Yb + 2], Ub[Yb + 3], Eb))
        }
        return new vb(Ab)
      }
      static ArcThru3Points(bb, ab, Ub) {
        let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Eb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Yb = [],
          Bb = ab.subtract(bb),
          eb = Ub.subtract(ab),
          Lb = bb.subtract(Ub),
          Pb = Tb.m.Cross(Bb, eb),
          Xb = Pb.length();
        if (Xb < Math.pow(10, -8)) return new vb(Yb);
        const jb = Bb.lengthSquared(),
          Rb = eb.lengthSquared(),
          kb = Lb.lengthSquared(),
          yb = Pb.lengthSquared(),
          Zb = .5 * Bb.length() * eb.length() * Lb.length() / Xb,
          Db = -.5 * Rb * Tb.m.Dot(Bb, Lb) / yb,
          zb = -.5 * kb * Tb.m.Dot(Bb, eb) / yb,
          xb = -.5 * jb * Tb.m.Dot(eb, Lb) / yb,
          ib = bb.scale(Db).add(ab.scale(zb)).add(Ub.scale(xb)),
          fb = bb.subtract(ib).normalize(),
          mb = Tb.m.Cross(Pb, fb).normalize();
        if (Eb) {
          const ab = 2 * Math.PI / Ab;
          for (let bb = 0; bb <= 2 * Math.PI; bb += ab) Yb.push(ib.add(fb.scale(Zb * Math.cos(bb)).add(mb.scale(Zb * Math.sin(bb)))));
          Yb.push(bb)
        } else {
          const ab = 1 / Ab;
          let Tb, Eb = 0;
          do {
            Tb = ib.add(fb.scale(Zb * Math.cos(Eb)).add(mb.scale(Zb * Math.sin(Eb)))), Yb.push(Tb), Eb += ab
          } while (!Tb.equalsWithEpsilon(Ub, Zb * ab * 1.1));
          Yb.push(Ub), Mb && Yb.push(bb)
        }
        return new vb(Yb)
      }
      constructor(bb) {
        this._length = 0, this._points = bb, this._length = this._computeLength(bb)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (bb) {
        const ab = this._points[this._points.length - 1],
          Ub = this._points.slice(),
          Ab = bb.getPoints();
        for (let Mb = 1; Mb < Ab.length; Mb++) Ub.push(Ab[Mb].subtract(Ab[0]).add(ab));
        return new vb(Ub)
      }
      _computeLength(bb) {
        let ab = 0;
        for (let Ub = 1; Ub < bb.length; Ub++) ab += bb[Ub].subtract(bb[Ub - 1]).length();
        return ab
      }
    }
  },
  37982: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb
    });
    var Ab = Ub(37989);
    const Mb = (bb, ab, Ub) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : Ub && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(ab) : null;
    class Tb {
      static DeepCopy(bb, ab, Ub, Tb) {
        let Eb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Yb = function(bb) {
          const ab = [];
          do {
            const Ub = Object.getOwnPropertyNames(bb);
            for (const bb of Ub) - 1 === ab.indexOf(bb) && ab.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return ab
        }(bb);
        for (const eb of Yb) {
          if ("_" === eb[0] && (!Tb || -1 === Tb.indexOf(eb))) continue;
          if (eb.endsWith("Observable")) continue;
          if (Ub && -1 !== Ub.indexOf(eb)) continue;
          const Yb = bb[eb],
            vb = typeof Yb;
          if ("function" !== vb) try {
            if ("object" === vb)
              if (Yb instanceof Uint8Array) ab[eb] = Uint8Array.from(Yb);
              else if (Yb instanceof Array) {
              if (ab[eb] = [], Yb.length > 0)
                if ("object" == typeof Yb[0])
                  for (let bb = 0; bb < Yb.length; bb++) {
                    const Ub = Mb(Yb[bb], ab, Eb); - 1 === ab[eb].indexOf(Ub) && ab[eb].push(Ub)
                  } else ab[eb] = Yb.slice(0)
            } else ab[eb] = Mb(Yb, ab, Eb);
            else ab[eb] = Yb
          } catch (Bb) {
            Ab.e.Warn(Bb.message)
          }
        }
      }
    }
  },
  37989: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab
    });
    class Ab {
      static _CheckLimit(bb, ab) {
        let Ub = Ab._LogLimitOutputs[bb];
        return Ub ? Ub.current++ : (Ub = {
          limit: ab,
          current: 1
        }, Ab._LogLimitOutputs[bb] = Ub), Ub.current <= Ub.limit
      }
      static _GenerateLimitMessage(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Ub = Ab._LogLimitOutputs[bb];
        if (!Ub || !Ab.MessageLimitReached) return;
        const Mb = this._Levels[ab];
        Ub.current === Ub.limit && Ab[Mb.name](Ab.MessageLimitReached.replace(/%LIMIT%/g, "" + Ub.limit).replace(/%TYPE%/g, Mb.name ?? ""))
      }
      static _AddLogEntry(bb) {
        Ab._LogCache = bb + Ab._LogCache, Ab.OnNewCacheEntry && Ab.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const ab = bb => bb < 10 ? "0" + bb : "" + bb,
          Ub = new Date;
        return "[" + ab(Ub.getHours()) + ":" + ab(Ub.getMinutes()) + ":" + ab(Ub.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, ab) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ab = arguments.length > 1 ? arguments[1] : void 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        const Mb = Array.isArray(ab) ? ab[0] : ab;
        if (void 0 !== Ub && !Ab._CheckLimit(Mb, Ub)) return;
        const Tb = Ab._FormatMessage(Mb),
          Eb = this._Levels[bb],
          Yb = Array.isArray(ab) ? ab.slice(1) : [];
        Eb.logFunc && Eb.logFunc("BJS - " + Tb, ...Yb);
        const Bb = `<div style='color:${Eb.color}'>${Tb}</div><br>`;
        Ab._AddLogEntry(Bb), Ab._GenerateLimitMessage(Mb, bb)
      }
      static get LogCache() {
        return Ab._LogCache
      }
      static ClearLogCache() {
        Ab._LogCache = "", Ab._LogLimitOutputs = {}, Ab.errorsCount = 0
      }
      static set LogLevels(bb) {
        Ab.Log = Ab._LogDisabled, Ab.Warn = Ab._LogDisabled, Ab.Error = Ab._LogDisabled;
        const ab = [Ab.MessageLogLevel, Ab.WarningLogLevel, Ab.ErrorLogLevel];
        for (const Ub of ab)
          if ((bb & Ub) === Ub) {
            const bb = this._Levels[Ub];
            Ab[bb.name] = Ab._LogEnabled.bind(Ab, Ub)
          }
      }
    }
    Ab.NoneLogLevel = 0, Ab.MessageLogLevel = 1, Ab.WarningLogLevel = 2, Ab.ErrorLogLevel = 4, Ab.AllLogLevel = 7, Ab.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Ab._LogCache = "", Ab._LogLimitOutputs = {}, Ab._Levels = [{}, {
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
    }], Ab.errorsCount = 0, Ab.Log = Ab._LogEnabled.bind(Ab, Ab.MessageLogLevel), Ab.Warn = Ab._LogEnabled.bind(Ab, Ab.WarningLogLevel), Ab.Error = Ab._LogEnabled.bind(Ab, Ab.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);