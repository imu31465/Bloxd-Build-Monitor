export const id = 236;
export const ids = [236];
export const modules = {
  40516: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Tb,
      e: () => fb,
      i: () => Hb
    });
    var kb, Wb = sb(36688),
      ab = sb(36656);
    ! function(bb) {
      bb[bb.CW = 0] = "CW", bb[bb.CCW = 1] = "CCW"
    }(kb || (kb = {}));
    class Tb {
      static Interpolate(bb, cb, sb, kb, Wb) {
        if (0 === bb) return 0;
        const ab = 1 - 3 * kb + 3 * cb,
          Tb = 3 * kb - 6 * cb,
          Ub = 3 * cb;
        let Ib = bb;
        for (let Hb = 0; Hb < 5; Hb++) {
          const cb = Ib * Ib;
          Ib -= (ab * (cb * Ib) + Tb * cb + Ub * Ib - bb) * (1 / (3 * ab * cb + 2 * Tb * Ib + Ub)), Ib = Math.min(1, Math.max(0, Ib))
        }
        return 3 * Math.pow(1 - Ib, 2) * Ib * sb + 3 * (1 - Ib) * Math.pow(Ib, 2) * Wb + Math.pow(Ib, 3)
      }
    }
    class Ub {
      constructor(bb) {
        this._radians = bb, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(bb, cb) {
        const sb = cb.subtract(bb),
          kb = Math.atan2(sb.y, sb.x);
        return new Ub(kb)
      }
      static BetweenTwoVectors(bb, cb) {
        let sb = bb.lengthSquared() * cb.lengthSquared();
        if (0 === sb) return new Ub(Math.PI / 2);
        sb = Math.sqrt(sb);
        let kb = bb.dot(cb) / sb;
        kb = (0, Wb.Clamp)(kb, -1, 1);
        const ab = Math.acos(kb);
        return new Ub(ab)
      }
      static FromRadians(bb) {
        return new Ub(bb)
      }
      static FromDegrees(bb) {
        return new Ub(bb * Math.PI / 180)
      }
    }
    class Ib {
      constructor(bb, cb, sb) {
        this.startPoint = bb, this.midPoint = cb, this.endPoint = sb;
        const kb = Math.pow(cb.x, 2) + Math.pow(cb.y, 2),
          Wb = (Math.pow(bb.x, 2) + Math.pow(bb.y, 2) - kb) / 2,
          Tb = (kb - Math.pow(sb.x, 2) - Math.pow(sb.y, 2)) / 2,
          Ib = (bb.x - cb.x) * (cb.y - sb.y) - (cb.x - sb.x) * (bb.y - cb.y);
        this.centerPoint = new ab.n((Wb * (cb.y - sb.y) - Tb * (bb.y - cb.y)) / Ib, ((bb.x - cb.x) * Tb - (cb.x - sb.x) * Wb) / Ib), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = Ub.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const Hb = this.startAngle.degrees();
        let fb = Ub.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          Mb = Ub.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        fb - Hb > 180 && (fb -= 360), fb - Hb < -180 && (fb += 360), Mb - fb > 180 && (Mb -= 360), Mb - fb < -180 && (Mb += 360), this.orientation = fb - Hb < 0 ? 0 : 1, this.angle = Ub.FromDegrees(0 === this.orientation ? Hb - Mb : Mb - Hb)
      }
    }
    class Hb {
      constructor(bb, cb) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new ab.n(bb, cb))
      }
      addLineTo(bb, cb) {
        if (this.closed) return this;
        const sb = new ab.n(bb, cb),
          kb = this._points[this._points.length - 1];
        return this._points.push(sb), this._length += sb.subtract(kb).length(), this
      }
      addArcTo(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Tb = this._points[this._points.length - 1],
          Ub = new ab.n(bb, cb),
          Hb = new ab.n(sb, kb),
          fb = new Ib(Tb, Ub, Hb);
        let Mb = fb.angle.radians() / Wb;
        0 === fb.orientation && (Mb *= -1);
        let Xb = fb.startAngle.radians() + Mb;
        for (let ab = 0; ab < Wb; ab++) {
          const bb = Math.cos(Xb) * fb.radius + fb.centerPoint.x,
            cb = Math.sin(Xb) * fb.radius + fb.centerPoint.y;
          this.addLineTo(bb, cb), Xb += Mb
        }
        return this
      }
      addQuadraticCurveTo(bb, cb, sb, kb) {
        let Wb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const ab = (bb, cb, sb, kb) => (1 - bb) * (1 - bb) * cb + 2 * bb * (1 - bb) * sb + bb * bb * kb,
          Tb = this._points[this._points.length - 1];
        for (let Ub = 0; Ub <= Wb; Ub++) {
          const Ib = Ub / Wb,
            Hb = ab(Ib, Tb.x, bb, sb),
            fb = ab(Ib, Tb.y, cb, kb);
          this.addLineTo(Hb, fb)
        }
        return this
      }
      addBezierCurveTo(bb, cb, sb, kb, Wb, ab) {
        let Tb = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const Ub = (bb, cb, sb, kb, Wb) => (1 - bb) * (1 - bb) * (1 - bb) * cb + 3 * bb * (1 - bb) * (1 - bb) * sb + 3 * bb * bb * (1 - bb) * kb + bb * bb * bb * Wb,
          Ib = this._points[this._points.length - 1];
        for (let Hb = 0; Hb <= Tb; Hb++) {
          const fb = Hb / Tb,
            Mb = Ub(fb, Ib.x, bb, sb, Wb),
            Xb = Ub(fb, Ib.y, cb, kb, ab);
          this.addLineTo(Mb, Xb)
        }
        return this
      }
      isPointInside(bb) {
        let cb = !1;
        const sb = this._points.length;
        for (let kb = sb - 1, Wb = 0; Wb < sb; kb = Wb++) {
          let sb = this._points[kb],
            ab = this._points[Wb],
            Tb = ab.x - sb.x,
            Ub = ab.y - sb.y;
          if (Math.abs(Ub) > Number.EPSILON) {
            if (Ub < 0 && (sb = this._points[Wb], Tb = -Tb, ab = this._points[kb], Ub = -Ub), bb.y < sb.y || bb.y > ab.y) continue;
            if (bb.y === sb.y && bb.x === sb.x) return !0;
            {
              const kb = Ub * (bb.x - sb.x) - Tb * (bb.y - sb.y);
              if (0 === kb) return !0;
              if (kb < 0) continue;
              cb = !cb
            }
          } else {
            if (bb.y !== sb.y) continue;
            if (ab.x <= bb.x && bb.x <= sb.x || sb.x <= bb.x && bb.x <= ab.x) return !0
          }
        }
        return cb
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let bb = this._length;
        if (this.closed) {
          const cb = this._points[this._points.length - 1];
          bb += this._points[0].subtract(cb).length()
        }
        return bb
      }
      area() {
        const bb = this._points.length;
        let cb = 0;
        for (let sb = bb - 1, kb = 0; kb < bb; sb = kb++) cb += this._points[sb].x * this._points[kb].y - this._points[kb].x * this._points[sb].y;
        return .5 * cb
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(bb) {
        if (bb < 0 || bb > 1) return ab.n.Zero();
        const cb = bb * this.length();
        let sb = 0;
        for (let kb = 0; kb < this._points.length; kb++) {
          const bb = (kb + 1) % this._points.length,
            Wb = this._points[kb],
            Tb = this._points[bb].subtract(Wb),
            Ub = Tb.length() + sb;
          if (cb >= sb && cb <= Ub) {
            const bb = Tb.normalize(),
              kb = cb - sb;
            return new ab.n(Wb.x + bb.x * kb, Wb.y + bb.y * kb)
          }
          sb = Ub
        }
        return ab.n.Zero()
      }
      static StartingAt(bb, cb) {
        return new Hb(bb, cb)
      }
    }
    class fb {
      static CreateQuadraticBezier(bb, cb, sb, kb) {
        kb = kb > 2 ? kb : 3;
        const Wb = [],
          Tb = (bb, cb, sb, kb) => (1 - bb) * (1 - bb) * cb + 2 * bb * (1 - bb) * sb + bb * bb * kb;
        for (let Ub = 0; Ub <= kb; Ub++) Wb.push(new ab.p(Tb(Ub / kb, bb.x, cb.x, sb.x), Tb(Ub / kb, bb.y, cb.y, sb.y), Tb(Ub / kb, bb.z, cb.z, sb.z)));
        return new fb(Wb)
      }
      static CreateCubicBezier(bb, cb, sb, kb, Wb) {
        Wb = Wb > 3 ? Wb : 4;
        const Tb = [],
          Ub = (bb, cb, sb, kb, Wb) => (1 - bb) * (1 - bb) * (1 - bb) * cb + 3 * bb * (1 - bb) * (1 - bb) * sb + 3 * bb * bb * (1 - bb) * kb + bb * bb * bb * Wb;
        for (let Ib = 0; Ib <= Wb; Ib++) Tb.push(new ab.p(Ub(Ib / Wb, bb.x, cb.x, sb.x, kb.x), Ub(Ib / Wb, bb.y, cb.y, sb.y, kb.y), Ub(Ib / Wb, bb.z, cb.z, sb.z, kb.z)));
        return new fb(Tb)
      }
      static CreateHermiteSpline(bb, cb, sb, kb, Wb) {
        const Tb = [],
          Ub = 1 / Wb;
        for (let Ib = 0; Ib <= Wb; Ib++) Tb.push(ab.p.Hermite(bb, cb, sb, kb, Ib * Ub));
        return new fb(Tb)
      }
      static CreateCatmullRomSpline(bb, cb, sb) {
        const kb = [],
          Wb = 1 / cb;
        let Tb = 0;
        if (sb) {
          const sb = bb.length;
          for (let Ub = 0; Ub < sb; Ub++) {
            Tb = 0;
            for (let Ib = 0; Ib < cb; Ib++) kb.push(ab.p.CatmullRom(bb[Ub % sb], bb[(Ub + 1) % sb], bb[(Ub + 2) % sb], bb[(Ub + 3) % sb], Tb)), Tb += Wb
          }
          kb.push(kb[0])
        } else {
          const sb = [];
          sb.push(bb[0].clone()), sb.push(...bb), sb.push(bb[bb.length - 1].clone());
          let Ub = 0;
          for (; Ub < sb.length - 3; Ub++) {
            Tb = 0;
            for (let bb = 0; bb < cb; bb++) kb.push(ab.p.CatmullRom(sb[Ub], sb[Ub + 1], sb[Ub + 2], sb[Ub + 3], Tb)), Tb += Wb
          }
          Ub--, kb.push(ab.p.CatmullRom(sb[Ub], sb[Ub + 1], sb[Ub + 2], sb[Ub + 3], Tb))
        }
        return new fb(kb)
      }
      static ArcThru3Points(bb, cb, sb) {
        let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          Wb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Tb = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const Ub = [],
          Ib = cb.subtract(bb),
          Hb = sb.subtract(cb),
          Mb = bb.subtract(sb),
          Xb = ab.p.Cross(Ib, Hb),
          nb = Xb.length();
        if (nb < Math.pow(10, -8)) return new fb(Ub);
        const mb = Ib.lengthSquared(),
          lb = Hb.lengthSquared(),
          Qb = Mb.lengthSquared(),
          eb = Xb.lengthSquared(),
          Cb = .5 * Ib.length() * Hb.length() * Mb.length() / nb,
          Nb = -.5 * lb * ab.p.Dot(Ib, Mb) / eb,
          Vb = -.5 * Qb * ab.p.Dot(Ib, Hb) / eb,
          Lb = -.5 * mb * ab.p.Dot(Hb, Mb) / eb,
          ub = bb.scale(Nb).add(cb.scale(Vb)).add(sb.scale(Lb)),
          Yb = bb.subtract(ub).normalize(),
          hb = ab.p.Cross(Xb, Yb).normalize();
        if (Tb) {
          const cb = 2 * Math.PI / kb;
          for (let bb = 0; bb <= 2 * Math.PI; bb += cb) Ub.push(ub.add(Yb.scale(Cb * Math.cos(bb)).add(hb.scale(Cb * Math.sin(bb)))));
          Ub.push(bb)
        } else {
          const cb = 1 / kb;
          let ab, Tb = 0;
          do {
            ab = ub.add(Yb.scale(Cb * Math.cos(Tb)).add(hb.scale(Cb * Math.sin(Tb)))), Ub.push(ab), Tb += cb
          } while (!ab.equalsWithEpsilon(sb, Cb * cb * 1.1));
          Ub.push(sb), Wb && Ub.push(bb)
        }
        return new fb(Ub)
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
        const cb = this._points[this._points.length - 1],
          sb = this._points.slice(),
          kb = bb.getPoints();
        for (let Wb = 1; Wb < kb.length; Wb++) sb.push(kb[Wb].subtract(kb[0]).add(cb));
        return new fb(sb)
      }
      _computeLength(bb) {
        let cb = 0;
        for (let sb = 1; sb < bb.length; sb++) cb += bb[sb].subtract(bb[sb - 1]).length();
        return cb
      }
    }
  },
  38279: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab
    });
    var kb = sb(38284);
    const Wb = (bb, cb, sb) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : sb && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(cb) : null;
    class ab {
      static DeepCopy(bb, cb, sb, ab) {
        let Tb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ub = function(bb) {
          const cb = [];
          do {
            const sb = Object.getOwnPropertyNames(bb);
            for (const bb of sb) - 1 === cb.indexOf(bb) && cb.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return cb
        }(bb);
        for (const Hb of Ub) {
          if ("_" === Hb[0] && (!ab || -1 === ab.indexOf(Hb))) continue;
          if (Hb.endsWith("Observable")) continue;
          if (sb && -1 !== sb.indexOf(Hb)) continue;
          const Ub = bb[Hb],
            fb = typeof Ub;
          if ("function" !== fb) try {
            if ("object" === fb)
              if (Ub instanceof Uint8Array) cb[Hb] = Uint8Array.from(Ub);
              else if (Ub instanceof Array) {
              if (cb[Hb] = [], Ub.length > 0)
                if ("object" == typeof Ub[0])
                  for (let bb = 0; bb < Ub.length; bb++) {
                    const sb = Wb(Ub[bb], cb, Tb); - 1 === cb[Hb].indexOf(sb) && cb[Hb].push(sb)
                  } else cb[Hb] = Ub.slice(0)
            } else cb[Hb] = Wb(Ub, cb, Tb);
            else cb[Hb] = Ub
          } catch (Ib) {
            kb.c.Warn(Ib.message)
          }
        }
      }
    }
  },
  38284: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    class kb {
      static _CheckLimit(bb, cb) {
        let sb = kb._LogLimitOutputs[bb];
        return sb ? sb.current++ : (sb = {
          limit: cb,
          current: 1
        }, kb._LogLimitOutputs[bb] = sb), sb.current <= sb.limit
      }
      static _GenerateLimitMessage(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const sb = kb._LogLimitOutputs[bb];
        if (!sb || !kb.MessageLimitReached) return;
        const Wb = this._Levels[cb];
        sb.current === sb.limit && kb[Wb.name](kb.MessageLimitReached.replace(/%LIMIT%/g, "" + sb.limit).replace(/%TYPE%/g, Wb.name ?? ""))
      }
      static _AddLogEntry(bb) {
        kb._LogCache = bb + kb._LogCache, kb.OnNewCacheEntry && kb.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const cb = bb => bb < 10 ? "0" + bb : "" + bb,
          sb = new Date;
        return "[" + cb(sb.getHours()) + ":" + cb(sb.getMinutes()) + ":" + cb(sb.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, cb) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cb = arguments.length > 1 ? arguments[1] : void 0,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        const Wb = Array.isArray(cb) ? cb[0] : cb;
        if (void 0 !== sb && !kb._CheckLimit(Wb, sb)) return;
        const ab = kb._FormatMessage(Wb),
          Tb = this._Levels[bb],
          Ub = Array.isArray(cb) ? cb.slice(1) : [];
        Tb.logFunc && Tb.logFunc("BJS - " + ab, ...Ub);
        const Ib = `<div style='color:${Tb.color}'>${ab}</div><br>`;
        kb._AddLogEntry(Ib), kb._GenerateLimitMessage(Wb, bb)
      }
      static get LogCache() {
        return kb._LogCache
      }
      static ClearLogCache() {
        kb._LogCache = "", kb._LogLimitOutputs = {}, kb.errorsCount = 0
      }
      static set LogLevels(bb) {
        kb.Log = kb._LogDisabled, kb.Warn = kb._LogDisabled, kb.Error = kb._LogDisabled;
        const cb = [kb.MessageLogLevel, kb.WarningLogLevel, kb.ErrorLogLevel];
        for (const sb of cb)
          if ((bb & sb) === sb) {
            const bb = this._Levels[sb];
            kb[bb.name] = kb._LogEnabled.bind(kb, sb)
          }
      }
    }
    kb.NoneLogLevel = 0, kb.MessageLogLevel = 1, kb.WarningLogLevel = 2, kb.ErrorLogLevel = 4, kb.AllLogLevel = 7, kb.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", kb._LogCache = "", kb._LogLimitOutputs = {}, kb._Levels = [{}, {
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
    }], kb.errorsCount = 0, kb.Log = kb._LogEnabled.bind(kb, kb.MessageLogLevel), kb.Warn = kb._LogEnabled.bind(kb, kb.WarningLogLevel), kb.Error = kb._LogEnabled.bind(kb, kb.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);