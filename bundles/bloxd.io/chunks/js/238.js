export const id = 238;
export const ids = [238];
export const modules = {
  40532: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ub,
      g: () => ab,
      i: () => Sb
    });
    var Bb, Ob = hb(36757),
      Gb = hb(36727);
    ! function(bb) {
      bb[bb.CW = 0] = "CW", bb[bb.CCW = 1] = "CCW"
    }(Bb || (Bb = {}));
    class Ub {
      static Interpolate(bb, ub, hb, Bb, Ob) {
        if (0 === bb) return 0;
        const Gb = 1 - 3 * Bb + 3 * ub,
          Ub = 3 * Bb - 6 * ub,
          Lb = 3 * ub;
        let Yb = bb;
        for (let Sb = 0; Sb < 5; Sb++) {
          const ub = Yb * Yb;
          Yb -= (Gb * (ub * Yb) + Ub * ub + Lb * Yb - bb) * (1 / (3 * Gb * ub + 2 * Ub * Yb + Lb)), Yb = Math.min(1, Math.max(0, Yb))
        }
        return 3 * Math.pow(1 - Yb, 2) * Yb * hb + 3 * (1 - Yb) * Math.pow(Yb, 2) * Ob + Math.pow(Yb, 3)
      }
    }
    class Lb {
      constructor(bb) {
        this._radians = bb, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(bb, ub) {
        const hb = ub.subtract(bb),
          Bb = Math.atan2(hb.y, hb.x);
        return new Lb(Bb)
      }
      static BetweenTwoVectors(bb, ub) {
        let hb = bb.lengthSquared() * ub.lengthSquared();
        if (0 === hb) return new Lb(Math.PI / 2);
        hb = Math.sqrt(hb);
        let Bb = bb.dot(ub) / hb;
        Bb = (0, Ob.Clamp)(Bb, -1, 1);
        const Gb = Math.acos(Bb);
        return new Lb(Gb)
      }
      static FromRadians(bb) {
        return new Lb(bb)
      }
      static FromDegrees(bb) {
        return new Lb(bb * Math.PI / 180)
      }
    }
    class Yb {
      constructor(bb, ub, hb) {
        this.startPoint = bb, this.midPoint = ub, this.endPoint = hb;
        const Bb = Math.pow(ub.x, 2) + Math.pow(ub.y, 2),
          Ob = (Math.pow(bb.x, 2) + Math.pow(bb.y, 2) - Bb) / 2,
          Ub = (Bb - Math.pow(hb.x, 2) - Math.pow(hb.y, 2)) / 2,
          Yb = (bb.x - ub.x) * (ub.y - hb.y) - (ub.x - hb.x) * (bb.y - ub.y);
        this.centerPoint = new Gb.m((Ob * (ub.y - hb.y) - Ub * (bb.y - ub.y)) / Yb, ((bb.x - ub.x) * Ub - (ub.x - hb.x) * Ob) / Yb), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = Lb.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const Sb = this.startAngle.degrees();
        let ab = Lb.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          Hb = Lb.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        ab - Sb > 180 && (ab -= 360), ab - Sb < -180 && (ab += 360), Hb - ab > 180 && (Hb -= 360), Hb - ab < -180 && (Hb += 360), this.orientation = ab - Sb < 0 ? 0 : 1, this.angle = Lb.FromDegrees(0 === this.orientation ? Sb - Hb : Hb - Sb)
      }
    }
    class Sb {
      constructor(bb, ub) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new Gb.m(bb, ub))
      }
      addLineTo(bb, ub) {
        if (this.closed) return this;
        const hb = new Gb.m(bb, ub),
          Bb = this._points[this._points.length - 1];
        return this._points.push(hb), this._length += hb.subtract(Bb).length(), this
      }
      addArcTo(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Ub = this._points[this._points.length - 1],
          Lb = new Gb.m(bb, ub),
          Sb = new Gb.m(hb, Bb),
          ab = new Yb(Ub, Lb, Sb);
        let Hb = ab.angle.radians() / Ob;
        0 === ab.orientation && (Hb *= -1);
        let wb = ab.startAngle.radians() + Hb;
        for (let Gb = 0; Gb < Ob; Gb++) {
          const bb = Math.cos(wb) * ab.radius + ab.centerPoint.x,
            ub = Math.sin(wb) * ab.radius + ab.centerPoint.y;
          this.addLineTo(bb, ub), wb += Hb
        }
        return this
      }
      addQuadraticCurveTo(bb, ub, hb, Bb) {
        let Ob = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Gb = (bb, ub, hb, Bb) => (1 - bb) * (1 - bb) * ub + 2 * bb * (1 - bb) * hb + bb * bb * Bb,
          Ub = this._points[this._points.length - 1];
        for (let Lb = 0; Lb <= Ob; Lb++) {
          const Yb = Lb / Ob,
            Sb = Gb(Yb, Ub.x, bb, hb),
            ab = Gb(Yb, Ub.y, ub, Bb);
          this.addLineTo(Sb, ab)
        }
        return this
      }
      addBezierCurveTo(bb, ub, hb, Bb, Ob, Gb) {
        let Ub = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const Lb = (bb, ub, hb, Bb, Ob) => (1 - bb) * (1 - bb) * (1 - bb) * ub + 3 * bb * (1 - bb) * (1 - bb) * hb + 3 * bb * bb * (1 - bb) * Bb + bb * bb * bb * Ob,
          Yb = this._points[this._points.length - 1];
        for (let Sb = 0; Sb <= Ub; Sb++) {
          const ab = Sb / Ub,
            Hb = Lb(ab, Yb.x, bb, hb, Ob),
            wb = Lb(ab, Yb.y, ub, Bb, Gb);
          this.addLineTo(Hb, wb)
        }
        return this
      }
      isPointInside(bb) {
        let ub = !1;
        const hb = this._points.length;
        for (let Bb = hb - 1, Ob = 0; Ob < hb; Bb = Ob++) {
          let hb = this._points[Bb],
            Gb = this._points[Ob],
            Ub = Gb.x - hb.x,
            Lb = Gb.y - hb.y;
          if (Math.abs(Lb) > Number.EPSILON) {
            if (Lb < 0 && (hb = this._points[Ob], Ub = -Ub, Gb = this._points[Bb], Lb = -Lb), bb.y < hb.y || bb.y > Gb.y) continue;
            if (bb.y === hb.y && bb.x === hb.x) return !0;
            {
              const Bb = Lb * (bb.x - hb.x) - Ub * (bb.y - hb.y);
              if (0 === Bb) return !0;
              if (Bb < 0) continue;
              ub = !ub
            }
          } else {
            if (bb.y !== hb.y) continue;
            if (Gb.x <= bb.x && bb.x <= hb.x || hb.x <= bb.x && bb.x <= Gb.x) return !0
          }
        }
        return ub
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let bb = this._length;
        if (this.closed) {
          const ub = this._points[this._points.length - 1];
          bb += this._points[0].subtract(ub).length()
        }
        return bb
      }
      area() {
        const bb = this._points.length;
        let ub = 0;
        for (let hb = bb - 1, Bb = 0; Bb < bb; hb = Bb++) ub += this._points[hb].x * this._points[Bb].y - this._points[Bb].x * this._points[hb].y;
        return .5 * ub
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(bb) {
        if (bb < 0 || bb > 1) return Gb.m.Zero();
        const ub = bb * this.length();
        let hb = 0;
        for (let Bb = 0; Bb < this._points.length; Bb++) {
          const bb = (Bb + 1) % this._points.length,
            Ob = this._points[Bb],
            Ub = this._points[bb].subtract(Ob),
            Lb = Ub.length() + hb;
          if (ub >= hb && ub <= Lb) {
            const bb = Ub.normalize(),
              Bb = ub - hb;
            return new Gb.m(Ob.x + bb.x * Bb, Ob.y + bb.y * Bb)
          }
          hb = Lb
        }
        return Gb.m.Zero()
      }
      static StartingAt(bb, ub) {
        return new Sb(bb, ub)
      }
    }
    class ab {
      static CreateQuadraticBezier(bb, ub, hb, Bb) {
        Bb = Bb > 2 ? Bb : 3;
        const Ob = [],
          Ub = (bb, ub, hb, Bb) => (1 - bb) * (1 - bb) * ub + 2 * bb * (1 - bb) * hb + bb * bb * Bb;
        for (let Lb = 0; Lb <= Bb; Lb++) Ob.push(new Gb.q(Ub(Lb / Bb, bb.x, ub.x, hb.x), Ub(Lb / Bb, bb.y, ub.y, hb.y), Ub(Lb / Bb, bb.z, ub.z, hb.z)));
        return new ab(Ob)
      }
      static CreateCubicBezier(bb, ub, hb, Bb, Ob) {
        Ob = Ob > 3 ? Ob : 4;
        const Ub = [],
          Lb = (bb, ub, hb, Bb, Ob) => (1 - bb) * (1 - bb) * (1 - bb) * ub + 3 * bb * (1 - bb) * (1 - bb) * hb + 3 * bb * bb * (1 - bb) * Bb + bb * bb * bb * Ob;
        for (let Yb = 0; Yb <= Ob; Yb++) Ub.push(new Gb.q(Lb(Yb / Ob, bb.x, ub.x, hb.x, Bb.x), Lb(Yb / Ob, bb.y, ub.y, hb.y, Bb.y), Lb(Yb / Ob, bb.z, ub.z, hb.z, Bb.z)));
        return new ab(Ub)
      }
      static CreateHermiteSpline(bb, ub, hb, Bb, Ob) {
        const Ub = [],
          Lb = 1 / Ob;
        for (let Yb = 0; Yb <= Ob; Yb++) Ub.push(Gb.q.Hermite(bb, ub, hb, Bb, Yb * Lb));
        return new ab(Ub)
      }
      static CreateCatmullRomSpline(bb, ub, hb) {
        const Bb = [],
          Ob = 1 / ub;
        let Ub = 0;
        if (hb) {
          const hb = bb.length;
          for (let Lb = 0; Lb < hb; Lb++) {
            Ub = 0;
            for (let Yb = 0; Yb < ub; Yb++) Bb.push(Gb.q.CatmullRom(bb[Lb % hb], bb[(Lb + 1) % hb], bb[(Lb + 2) % hb], bb[(Lb + 3) % hb], Ub)), Ub += Ob
          }
          Bb.push(Bb[0])
        } else {
          const hb = [];
          hb.push(bb[0].clone()), hb.push(...bb), hb.push(bb[bb.length - 1].clone());
          let Lb = 0;
          for (; Lb < hb.length - 3; Lb++) {
            Ub = 0;
            for (let bb = 0; bb < ub; bb++) Bb.push(Gb.q.CatmullRom(hb[Lb], hb[Lb + 1], hb[Lb + 2], hb[Lb + 3], Ub)), Ub += Ob
          }
          Lb--, Bb.push(Gb.q.CatmullRom(hb[Lb], hb[Lb + 1], hb[Lb + 2], hb[Lb + 3], Ub))
        }
        return new ab(Bb)
      }
      static ArcThru3Points(bb, ub, hb) {
        let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          Ob = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Ub = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Lb = [],
          Yb = ub.subtract(bb),
          Sb = hb.subtract(ub),
          Hb = bb.subtract(hb),
          wb = Gb.q.Cross(Yb, Sb),
          Zb = wb.length();
        if (Zb < Math.pow(10, -8)) return new ab(Lb);
        const Xb = Yb.lengthSquared(),
          pb = Sb.lengthSquared(),
          ob = Hb.lengthSquared(),
          Ab = wb.lengthSquared(),
          lb = .5 * Yb.length() * Sb.length() * Hb.length() / Zb,
          Kb = -.5 * pb * Gb.q.Dot(Yb, Hb) / Ab,
          Wb = -.5 * ob * Gb.q.Dot(Yb, Sb) / Ab,
          Cb = -.5 * Xb * Gb.q.Dot(Sb, Hb) / Ab,
          db = bb.scale(Kb).add(ub.scale(Wb)).add(hb.scale(Cb)),
          rb = bb.subtract(db).normalize(),
          jb = Gb.q.Cross(wb, rb).normalize();
        if (Ub) {
          const ub = 2 * Math.PI / Bb;
          for (let bb = 0; bb <= 2 * Math.PI; bb += ub) Lb.push(db.add(rb.scale(lb * Math.cos(bb)).add(jb.scale(lb * Math.sin(bb)))));
          Lb.push(bb)
        } else {
          const ub = 1 / Bb;
          let Gb, Ub = 0;
          do {
            Gb = db.add(rb.scale(lb * Math.cos(Ub)).add(jb.scale(lb * Math.sin(Ub)))), Lb.push(Gb), Ub += ub
          } while (!Gb.equalsWithEpsilon(hb, lb * ub * 1.1));
          Lb.push(hb), Ob && Lb.push(bb)
        }
        return new ab(Lb)
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
        const ub = this._points[this._points.length - 1],
          hb = this._points.slice(),
          Bb = bb.getPoints();
        for (let Ob = 1; Ob < Bb.length; Ob++) hb.push(Bb[Ob].subtract(Bb[0]).add(ub));
        return new ab(hb)
      }
      _computeLength(bb) {
        let ub = 0;
        for (let hb = 1; hb < bb.length; hb++) ub += bb[hb].subtract(bb[hb - 1]).length();
        return ub
      }
    }
  },
  38296: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb
    });
    var Bb = hb(38302);
    const Ob = (bb, ub, hb) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : hb && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(ub) : null;
    class Gb {
      static DeepCopy(bb, ub, hb, Gb) {
        let Ub = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Lb = function(bb) {
          const ub = [];
          do {
            const hb = Object.getOwnPropertyNames(bb);
            for (const bb of hb) - 1 === ub.indexOf(bb) && ub.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return ub
        }(bb);
        for (const Sb of Lb) {
          if ("_" === Sb[0] && (!Gb || -1 === Gb.indexOf(Sb))) continue;
          if (Sb.endsWith("Observable")) continue;
          if (hb && -1 !== hb.indexOf(Sb)) continue;
          const Lb = bb[Sb],
            ab = typeof Lb;
          if ("function" !== ab) try {
            if ("object" === ab)
              if (Lb instanceof Uint8Array) ub[Sb] = Uint8Array.from(Lb);
              else if (Lb instanceof Array) {
              if (ub[Sb] = [], Lb.length > 0)
                if ("object" == typeof Lb[0])
                  for (let bb = 0; bb < Lb.length; bb++) {
                    const hb = Ob(Lb[bb], ub, Ub); - 1 === ub[Sb].indexOf(hb) && ub[Sb].push(hb)
                  } else ub[Sb] = Lb.slice(0)
            } else ub[Sb] = Ob(Lb, ub, Ub);
            else ub[Sb] = Lb
          } catch (Yb) {
            Bb.b.Warn(Yb.message)
          }
        }
      }
    }
  },
  38302: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb
    });
    class Bb {
      static _CheckLimit(bb, ub) {
        let hb = Bb._LogLimitOutputs[bb];
        return hb ? hb.current++ : (hb = {
          limit: ub,
          current: 1
        }, Bb._LogLimitOutputs[bb] = hb), hb.current <= hb.limit
      }
      static _GenerateLimitMessage(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const hb = Bb._LogLimitOutputs[bb];
        if (!hb || !Bb.MessageLimitReached) return;
        const Ob = this._Levels[ub];
        hb.current === hb.limit && Bb[Ob.name](Bb.MessageLimitReached.replace(/%LIMIT%/g, "" + hb.limit).replace(/%TYPE%/g, Ob.name ?? ""))
      }
      static _AddLogEntry(bb) {
        Bb._LogCache = bb + Bb._LogCache, Bb.OnNewCacheEntry && Bb.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const ub = bb => bb < 10 ? "0" + bb : "" + bb,
          hb = new Date;
        return "[" + ub(hb.getHours()) + ":" + ub(hb.getMinutes()) + ":" + ub(hb.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, ub) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ub = arguments.length > 1 ? arguments[1] : void 0,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        const Ob = Array.isArray(ub) ? ub[0] : ub;
        if (void 0 !== hb && !Bb._CheckLimit(Ob, hb)) return;
        const Gb = Bb._FormatMessage(Ob),
          Ub = this._Levels[bb],
          Lb = Array.isArray(ub) ? ub.slice(1) : [];
        Ub.logFunc && Ub.logFunc("BJS - " + Gb, ...Lb);
        const Yb = `<div style='color:${Ub.color}'>${Gb}</div><br>`;
        Bb._AddLogEntry(Yb), Bb._GenerateLimitMessage(Ob, bb)
      }
      static get LogCache() {
        return Bb._LogCache
      }
      static ClearLogCache() {
        Bb._LogCache = "", Bb._LogLimitOutputs = {}, Bb.errorsCount = 0
      }
      static set LogLevels(bb) {
        Bb.Log = Bb._LogDisabled, Bb.Warn = Bb._LogDisabled, Bb.Error = Bb._LogDisabled;
        const ub = [Bb.MessageLogLevel, Bb.WarningLogLevel, Bb.ErrorLogLevel];
        for (const hb of ub)
          if ((bb & hb) === hb) {
            const bb = this._Levels[hb];
            Bb[bb.name] = Bb._LogEnabled.bind(Bb, hb)
          }
      }
    }
    Bb.NoneLogLevel = 0, Bb.MessageLogLevel = 1, Bb.WarningLogLevel = 2, Bb.ErrorLogLevel = 4, Bb.AllLogLevel = 7, Bb.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Bb._LogCache = "", Bb._LogLimitOutputs = {}, Bb._Levels = [{}, {
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
    }], Bb.errorsCount = 0, Bb.Log = Bb._LogEnabled.bind(Bb, Bb.MessageLogLevel), Bb.Warn = Bb._LogEnabled.bind(Bb, Bb.WarningLogLevel), Bb.Error = Bb._LogEnabled.bind(Bb, Bb.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);