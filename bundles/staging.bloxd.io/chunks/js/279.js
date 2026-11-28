export const id = 279;
export const ids = [279];
export const modules = {
  42763: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Vb,
      h: () => Ib,
      i: () => Lb
    });
    var eb, Hb = Mb(38322),
      pb = Mb(38285);
    ! function(bb) {
      bb[bb.CW = 0] = "CW", bb[bb.CCW = 1] = "CCW"
    }(eb || (eb = {}));
    class Vb {
      static Interpolate(bb, wb, Mb, eb, Hb) {
        if (0 === bb) return 0;
        const pb = 1 - 3 * eb + 3 * wb,
          Vb = 3 * eb - 6 * wb,
          gb = 3 * wb;
        let lb = bb;
        for (let Lb = 0; Lb < 5; Lb++) {
          const wb = lb * lb;
          lb -= (pb * (wb * lb) + Vb * wb + gb * lb - bb) * (1 / (3 * pb * wb + 2 * Vb * lb + gb)), lb = Math.min(1, Math.max(0, lb))
        }
        return 3 * Math.pow(1 - lb, 2) * lb * Mb + 3 * (1 - lb) * Math.pow(lb, 2) * Hb + Math.pow(lb, 3)
      }
    }
    class gb {
      constructor(bb) {
        this._radians = bb, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(bb, wb) {
        const Mb = wb.subtract(bb),
          eb = Math.atan2(Mb.y, Mb.x);
        return new gb(eb)
      }
      static BetweenTwoVectors(bb, wb) {
        let Mb = bb.lengthSquared() * wb.lengthSquared();
        if (0 === Mb) return new gb(Math.PI / 2);
        Mb = Math.sqrt(Mb);
        let eb = bb.dot(wb) / Mb;
        eb = (0, Hb.Clamp)(eb, -1, 1);
        const pb = Math.acos(eb);
        return new gb(pb)
      }
      static FromRadians(bb) {
        return new gb(bb)
      }
      static FromDegrees(bb) {
        return new gb(bb * Math.PI / 180)
      }
    }
    class lb {
      constructor(bb, wb, Mb) {
        this.startPoint = bb, this.midPoint = wb, this.endPoint = Mb;
        const eb = Math.pow(wb.x, 2) + Math.pow(wb.y, 2),
          Hb = (Math.pow(bb.x, 2) + Math.pow(bb.y, 2) - eb) / 2,
          Vb = (eb - Math.pow(Mb.x, 2) - Math.pow(Mb.y, 2)) / 2,
          lb = (bb.x - wb.x) * (wb.y - Mb.y) - (wb.x - Mb.x) * (bb.y - wb.y);
        this.centerPoint = new pb.m((Hb * (wb.y - Mb.y) - Vb * (bb.y - wb.y)) / lb, ((bb.x - wb.x) * Vb - (wb.x - Mb.x) * Hb) / lb), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = gb.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const Lb = this.startAngle.degrees();
        let Ib = gb.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          Ob = gb.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        Ib - Lb > 180 && (Ib -= 360), Ib - Lb < -180 && (Ib += 360), Ob - Ib > 180 && (Ob -= 360), Ob - Ib < -180 && (Ob += 360), this.orientation = Ib - Lb < 0 ? 0 : 1, this.angle = gb.FromDegrees(0 === this.orientation ? Lb - Ob : Ob - Lb)
      }
    }
    class Lb {
      constructor(bb, wb) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new pb.m(bb, wb))
      }
      addLineTo(bb, wb) {
        if (this.closed) return this;
        const Mb = new pb.m(bb, wb),
          eb = this._points[this._points.length - 1];
        return this._points.push(Mb), this._length += Mb.subtract(eb).length(), this
      }
      addArcTo(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Vb = this._points[this._points.length - 1],
          gb = new pb.m(bb, wb),
          Lb = new pb.m(Mb, eb),
          Ib = new lb(Vb, gb, Lb);
        let Ob = Ib.angle.radians() / Hb;
        0 === Ib.orientation && (Ob *= -1);
        let Ub = Ib.startAngle.radians() + Ob;
        for (let pb = 0; pb < Hb; pb++) {
          const bb = Math.cos(Ub) * Ib.radius + Ib.centerPoint.x,
            wb = Math.sin(Ub) * Ib.radius + Ib.centerPoint.y;
          this.addLineTo(bb, wb), Ub += Ob
        }
        return this
      }
      addQuadraticCurveTo(bb, wb, Mb, eb) {
        let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const pb = (bb, wb, Mb, eb) => (1 - bb) * (1 - bb) * wb + 2 * bb * (1 - bb) * Mb + bb * bb * eb,
          Vb = this._points[this._points.length - 1];
        for (let gb = 0; gb <= Hb; gb++) {
          const lb = gb / Hb,
            Lb = pb(lb, Vb.x, bb, Mb),
            Ib = pb(lb, Vb.y, wb, eb);
          this.addLineTo(Lb, Ib)
        }
        return this
      }
      addBezierCurveTo(bb, wb, Mb, eb, Hb, pb) {
        let Vb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const gb = (bb, wb, Mb, eb, Hb) => (1 - bb) * (1 - bb) * (1 - bb) * wb + 3 * bb * (1 - bb) * (1 - bb) * Mb + 3 * bb * bb * (1 - bb) * eb + bb * bb * bb * Hb,
          lb = this._points[this._points.length - 1];
        for (let Lb = 0; Lb <= Vb; Lb++) {
          const Ib = Lb / Vb,
            Ob = gb(Ib, lb.x, bb, Mb, Hb),
            Ub = gb(Ib, lb.y, wb, eb, pb);
          this.addLineTo(Ob, Ub)
        }
        return this
      }
      isPointInside(bb) {
        let wb = !1;
        const Mb = this._points.length;
        for (let eb = Mb - 1, Hb = 0; Hb < Mb; eb = Hb++) {
          let Mb = this._points[eb],
            pb = this._points[Hb],
            Vb = pb.x - Mb.x,
            gb = pb.y - Mb.y;
          if (Math.abs(gb) > Number.EPSILON) {
            if (gb < 0 && (Mb = this._points[Hb], Vb = -Vb, pb = this._points[eb], gb = -gb), bb.y < Mb.y || bb.y > pb.y) continue;
            if (bb.y === Mb.y && bb.x === Mb.x) return !0;
            {
              const eb = gb * (bb.x - Mb.x) - Vb * (bb.y - Mb.y);
              if (0 === eb) return !0;
              if (eb < 0) continue;
              wb = !wb
            }
          } else {
            if (bb.y !== Mb.y) continue;
            if (pb.x <= bb.x && bb.x <= Mb.x || Mb.x <= bb.x && bb.x <= pb.x) return !0
          }
        }
        return wb
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let bb = this._length;
        if (this.closed) {
          const wb = this._points[this._points.length - 1];
          bb += this._points[0].subtract(wb).length()
        }
        return bb
      }
      area() {
        const bb = this._points.length;
        let wb = 0;
        for (let Mb = bb - 1, eb = 0; eb < bb; Mb = eb++) wb += this._points[Mb].x * this._points[eb].y - this._points[eb].x * this._points[Mb].y;
        return .5 * wb
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(bb) {
        if (bb < 0 || bb > 1) return pb.m.Zero();
        const wb = bb * this.length();
        let Mb = 0;
        for (let eb = 0; eb < this._points.length; eb++) {
          const bb = (eb + 1) % this._points.length,
            Hb = this._points[eb],
            Vb = this._points[bb].subtract(Hb),
            gb = Vb.length() + Mb;
          if (wb >= Mb && wb <= gb) {
            const bb = Vb.normalize(),
              eb = wb - Mb;
            return new pb.m(Hb.x + bb.x * eb, Hb.y + bb.y * eb)
          }
          Mb = gb
        }
        return pb.m.Zero()
      }
      static StartingAt(bb, wb) {
        return new Lb(bb, wb)
      }
    }
    class Ib {
      static CreateQuadraticBezier(bb, wb, Mb, eb) {
        eb = eb > 2 ? eb : 3;
        const Hb = [],
          Vb = (bb, wb, Mb, eb) => (1 - bb) * (1 - bb) * wb + 2 * bb * (1 - bb) * Mb + bb * bb * eb;
        for (let gb = 0; gb <= eb; gb++) Hb.push(new pb.o(Vb(gb / eb, bb.x, wb.x, Mb.x), Vb(gb / eb, bb.y, wb.y, Mb.y), Vb(gb / eb, bb.z, wb.z, Mb.z)));
        return new Ib(Hb)
      }
      static CreateCubicBezier(bb, wb, Mb, eb, Hb) {
        Hb = Hb > 3 ? Hb : 4;
        const Vb = [],
          gb = (bb, wb, Mb, eb, Hb) => (1 - bb) * (1 - bb) * (1 - bb) * wb + 3 * bb * (1 - bb) * (1 - bb) * Mb + 3 * bb * bb * (1 - bb) * eb + bb * bb * bb * Hb;
        for (let lb = 0; lb <= Hb; lb++) Vb.push(new pb.o(gb(lb / Hb, bb.x, wb.x, Mb.x, eb.x), gb(lb / Hb, bb.y, wb.y, Mb.y, eb.y), gb(lb / Hb, bb.z, wb.z, Mb.z, eb.z)));
        return new Ib(Vb)
      }
      static CreateHermiteSpline(bb, wb, Mb, eb, Hb) {
        const Vb = [],
          gb = 1 / Hb;
        for (let lb = 0; lb <= Hb; lb++) Vb.push(pb.o.Hermite(bb, wb, Mb, eb, lb * gb));
        return new Ib(Vb)
      }
      static CreateCatmullRomSpline(bb, wb, Mb) {
        const eb = [],
          Hb = 1 / wb;
        let Vb = 0;
        if (Mb) {
          const Mb = bb.length;
          for (let gb = 0; gb < Mb; gb++) {
            Vb = 0;
            for (let lb = 0; lb < wb; lb++) eb.push(pb.o.CatmullRom(bb[gb % Mb], bb[(gb + 1) % Mb], bb[(gb + 2) % Mb], bb[(gb + 3) % Mb], Vb)), Vb += Hb
          }
          eb.push(eb[0])
        } else {
          const Mb = [];
          Mb.push(bb[0].clone()), Mb.push(...bb), Mb.push(bb[bb.length - 1].clone());
          let gb = 0;
          for (; gb < Mb.length - 3; gb++) {
            Vb = 0;
            for (let bb = 0; bb < wb; bb++) eb.push(pb.o.CatmullRom(Mb[gb], Mb[gb + 1], Mb[gb + 2], Mb[gb + 3], Vb)), Vb += Hb
          }
          gb--, eb.push(pb.o.CatmullRom(Mb[gb], Mb[gb + 1], Mb[gb + 2], Mb[gb + 3], Vb))
        }
        return new Ib(eb)
      }
      static ArcThru3Points(bb, wb, Mb) {
        let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          Hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Vb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const gb = [],
          lb = wb.subtract(bb),
          Lb = Mb.subtract(wb),
          Ob = bb.subtract(Mb),
          Ub = pb.o.Cross(lb, Lb),
          tb = Ub.length();
        if (tb < Math.pow(10, -8)) return new Ib(gb);
        const Cb = lb.lengthSquared(),
          Eb = Lb.lengthSquared(),
          Fb = Ob.lengthSquared(),
          Bb = Ub.lengthSquared(),
          sb = .5 * lb.length() * Lb.length() * Ob.length() / tb,
          mb = -.5 * Eb * pb.o.Dot(lb, Ob) / Bb,
          hb = -.5 * Fb * pb.o.Dot(lb, Lb) / Bb,
          zb = -.5 * Cb * pb.o.Dot(Lb, Ob) / Bb,
          Xb = bb.scale(mb).add(wb.scale(hb)).add(Mb.scale(zb)),
          xb = bb.subtract(Xb).normalize(),
          jb = pb.o.Cross(Ub, xb).normalize();
        if (Vb) {
          const wb = 2 * Math.PI / eb;
          for (let bb = 0; bb <= 2 * Math.PI; bb += wb) gb.push(Xb.add(xb.scale(sb * Math.cos(bb)).add(jb.scale(sb * Math.sin(bb)))));
          gb.push(bb)
        } else {
          const wb = 1 / eb;
          let pb, Vb = 0;
          do {
            pb = Xb.add(xb.scale(sb * Math.cos(Vb)).add(jb.scale(sb * Math.sin(Vb)))), gb.push(pb), Vb += wb
          } while (!pb.equalsWithEpsilon(Mb, sb * wb * 1.1));
          gb.push(Mb), Hb && gb.push(bb)
        }
        return new Ib(gb)
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
        const wb = this._points[this._points.length - 1],
          Mb = this._points.slice(),
          eb = bb.getPoints();
        for (let Hb = 1; Hb < eb.length; Hb++) Mb.push(eb[Hb].subtract(eb[0]).add(wb));
        return new Ib(Mb)
      }
      _computeLength(bb) {
        let wb = 0;
        for (let Mb = 1; Mb < bb.length; Mb++) wb += bb[Mb].subtract(bb[Mb - 1]).length();
        return wb
      }
    }
  },
  39966: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb
    });
    var eb = Mb(39971);
    const Hb = (bb, wb, Mb) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : Mb && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(wb) : null;
    class pb {
      static DeepCopy(bb, wb, Mb, pb) {
        let Vb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const gb = function(bb) {
          const wb = [];
          do {
            const Mb = Object.getOwnPropertyNames(bb);
            for (const bb of Mb) - 1 === wb.indexOf(bb) && wb.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return wb
        }(bb);
        for (const Lb of gb) {
          if ("_" === Lb[0] && (!pb || -1 === pb.indexOf(Lb))) continue;
          if (Lb.endsWith("Observable")) continue;
          if (Mb && -1 !== Mb.indexOf(Lb)) continue;
          const gb = bb[Lb],
            Ib = typeof gb;
          if ("function" !== Ib) try {
            if ("object" === Ib)
              if (gb instanceof Uint8Array) wb[Lb] = Uint8Array.from(gb);
              else if (gb instanceof Array) {
              if (wb[Lb] = [], gb.length > 0)
                if ("object" == typeof gb[0])
                  for (let bb = 0; bb < gb.length; bb++) {
                    const Mb = Hb(gb[bb], wb, Vb); - 1 === wb[Lb].indexOf(Mb) && wb[Lb].push(Mb)
                  } else wb[Lb] = gb.slice(0)
            } else wb[Lb] = Hb(gb, wb, Vb);
            else wb[Lb] = gb
          } catch (lb) {
            eb.b.Warn(lb.message)
          }
        }
      }
    }
  },
  39971: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb
    });
    class eb {
      static _CheckLimit(bb, wb) {
        let Mb = eb._LogLimitOutputs[bb];
        return Mb ? Mb.current++ : (Mb = {
          limit: wb,
          current: 1
        }, eb._LogLimitOutputs[bb] = Mb), Mb.current <= Mb.limit
      }
      static _GenerateLimitMessage(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Mb = eb._LogLimitOutputs[bb];
        if (!Mb || !eb.MessageLimitReached) return;
        const Hb = this._Levels[wb];
        Mb.current === Mb.limit && eb[Hb.name](eb.MessageLimitReached.replace(/%LIMIT%/g, "" + Mb.limit).replace(/%TYPE%/g, Hb.name ?? ""))
      }
      static _AddLogEntry(bb) {
        eb._LogCache = bb + eb._LogCache, eb.OnNewCacheEntry && eb.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const wb = bb => bb < 10 ? "0" + bb : "" + bb,
          Mb = new Date;
        return "[" + wb(Mb.getHours()) + ":" + wb(Mb.getMinutes()) + ":" + wb(Mb.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, wb) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          wb = arguments.length > 1 ? arguments[1] : void 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        const Hb = Array.isArray(wb) ? wb[0] : wb;
        if (void 0 !== Mb && !eb._CheckLimit(Hb, Mb)) return;
        const pb = eb._FormatMessage(Hb),
          Vb = this._Levels[bb],
          gb = Array.isArray(wb) ? wb.slice(1) : [];
        Vb.logFunc && Vb.logFunc("BJS - " + pb, ...gb);
        const lb = `<div style='color:${Vb.color}'>${pb}</div><br>`;
        eb._AddLogEntry(lb), eb._GenerateLimitMessage(Hb, bb)
      }
      static get LogCache() {
        return eb._LogCache
      }
      static ClearLogCache() {
        eb._LogCache = "", eb._LogLimitOutputs = {}, eb.errorsCount = 0
      }
      static set LogLevels(bb) {
        eb.Log = eb._LogDisabled, eb.Warn = eb._LogDisabled, eb.Error = eb._LogDisabled;
        const wb = [eb.MessageLogLevel, eb.WarningLogLevel, eb.ErrorLogLevel];
        for (const Mb of wb)
          if ((bb & Mb) === Mb) {
            const bb = this._Levels[Mb];
            eb[bb.name] = eb._LogEnabled.bind(eb, Mb)
          }
      }
    }
    eb.NoneLogLevel = 0, eb.MessageLogLevel = 1, eb.WarningLogLevel = 2, eb.ErrorLogLevel = 4, eb.AllLogLevel = 7, eb.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", eb._LogCache = "", eb._LogLimitOutputs = {}, eb._Levels = [{}, {
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
    }], eb.errorsCount = 0, eb.Log = eb._LogEnabled.bind(eb, eb.MessageLogLevel), eb.Warn = eb._LogEnabled.bind(eb, eb.WarningLogLevel), eb.Error = eb._LogEnabled.bind(eb, eb.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);