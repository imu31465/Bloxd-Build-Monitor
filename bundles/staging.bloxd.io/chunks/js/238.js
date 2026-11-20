export const id = 238;
export const ids = [238];
export const modules = {
  40835: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq,
      e: () => uq,
      h: () => cq
    });
    var Yq, lq = gq(37158),
      Oq = gq(37139);
    ! function(qq) {
      qq[qq.CW = 0] = "CW", qq[qq.CCW = 1] = "CCW"
    }(Yq || (Yq = {}));
    class mq {
      static Interpolate(qq, Eq, gq, Yq, lq) {
        if (0 === qq) return 0;
        const Oq = 1 - 3 * Yq + 3 * Eq,
          mq = 3 * Yq - 6 * Eq,
          xq = 3 * Eq;
        let Aq = qq;
        for (let cq = 0; cq < 5; cq++) {
          const Eq = Aq * Aq;
          Aq -= (Oq * (Eq * Aq) + mq * Eq + xq * Aq - qq) * (1 / (3 * Oq * Eq + 2 * mq * Aq + xq)), Aq = Math.min(1, Math.max(0, Aq))
        }
        return 3 * Math.pow(1 - Aq, 2) * Aq * gq + 3 * (1 - Aq) * Math.pow(Aq, 2) * lq + Math.pow(Aq, 3)
      }
    }
    class xq {
      constructor(qq) {
        this._radians = qq, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(qq, Eq) {
        const gq = Eq.subtract(qq),
          Yq = Math.atan2(gq.y, gq.x);
        return new xq(Yq)
      }
      static BetweenTwoVectors(qq, Eq) {
        let gq = qq.lengthSquared() * Eq.lengthSquared();
        if (0 === gq) return new xq(Math.PI / 2);
        gq = Math.sqrt(gq);
        let Yq = qq.dot(Eq) / gq;
        Yq = (0, lq.Clamp)(Yq, -1, 1);
        const Oq = Math.acos(Yq);
        return new xq(Oq)
      }
      static FromRadians(qq) {
        return new xq(qq)
      }
      static FromDegrees(qq) {
        return new xq(qq * Math.PI / 180)
      }
    }
    class Aq {
      constructor(qq, Eq, gq) {
        this.startPoint = qq, this.midPoint = Eq, this.endPoint = gq;
        const Yq = Math.pow(Eq.x, 2) + Math.pow(Eq.y, 2),
          lq = (Math.pow(qq.x, 2) + Math.pow(qq.y, 2) - Yq) / 2,
          mq = (Yq - Math.pow(gq.x, 2) - Math.pow(gq.y, 2)) / 2,
          Aq = (qq.x - Eq.x) * (Eq.y - gq.y) - (Eq.x - gq.x) * (qq.y - Eq.y);
        this.centerPoint = new Oq.p((lq * (Eq.y - gq.y) - mq * (qq.y - Eq.y)) / Aq, ((qq.x - Eq.x) * mq - (Eq.x - gq.x) * lq) / Aq), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = xq.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const cq = this.startAngle.degrees();
        let uq = xq.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          Bq = xq.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        uq - cq > 180 && (uq -= 360), uq - cq < -180 && (uq += 360), Bq - uq > 180 && (Bq -= 360), Bq - uq < -180 && (Bq += 360), this.orientation = uq - cq < 0 ? 0 : 1, this.angle = xq.FromDegrees(0 === this.orientation ? cq - Bq : Bq - cq)
      }
    }
    class cq {
      constructor(qq, Eq) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new Oq.p(qq, Eq))
      }
      addLineTo(qq, Eq) {
        if (this.closed) return this;
        const gq = new Oq.p(qq, Eq),
          Yq = this._points[this._points.length - 1];
        return this._points.push(gq), this._length += gq.subtract(Yq).length(), this
      }
      addArcTo(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const mq = this._points[this._points.length - 1],
          xq = new Oq.p(qq, Eq),
          cq = new Oq.p(gq, Yq),
          uq = new Aq(mq, xq, cq);
        let Bq = uq.angle.radians() / lq;
        0 === uq.orientation && (Bq *= -1);
        let Wq = uq.startAngle.radians() + Bq;
        for (let Oq = 0; Oq < lq; Oq++) {
          const qq = Math.cos(Wq) * uq.radius + uq.centerPoint.x,
            Eq = Math.sin(Wq) * uq.radius + uq.centerPoint.y;
          this.addLineTo(qq, Eq), Wq += Bq
        }
        return this
      }
      addQuadraticCurveTo(qq, Eq, gq, Yq) {
        let lq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Oq = (qq, Eq, gq, Yq) => (1 - qq) * (1 - qq) * Eq + 2 * qq * (1 - qq) * gq + qq * qq * Yq,
          mq = this._points[this._points.length - 1];
        for (let xq = 0; xq <= lq; xq++) {
          const Aq = xq / lq,
            cq = Oq(Aq, mq.x, qq, gq),
            uq = Oq(Aq, mq.y, Eq, Yq);
          this.addLineTo(cq, uq)
        }
        return this
      }
      addBezierCurveTo(qq, Eq, gq, Yq, lq, Oq) {
        let mq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const xq = (qq, Eq, gq, Yq, lq) => (1 - qq) * (1 - qq) * (1 - qq) * Eq + 3 * qq * (1 - qq) * (1 - qq) * gq + 3 * qq * qq * (1 - qq) * Yq + qq * qq * qq * lq,
          Aq = this._points[this._points.length - 1];
        for (let cq = 0; cq <= mq; cq++) {
          const uq = cq / mq,
            Bq = xq(uq, Aq.x, qq, gq, lq),
            Wq = xq(uq, Aq.y, Eq, Yq, Oq);
          this.addLineTo(Bq, Wq)
        }
        return this
      }
      isPointInside(qq) {
        let Eq = !1;
        const gq = this._points.length;
        for (let Yq = gq - 1, lq = 0; lq < gq; Yq = lq++) {
          let gq = this._points[Yq],
            Oq = this._points[lq],
            mq = Oq.x - gq.x,
            xq = Oq.y - gq.y;
          if (Math.abs(xq) > Number.EPSILON) {
            if (xq < 0 && (gq = this._points[lq], mq = -mq, Oq = this._points[Yq], xq = -xq), qq.y < gq.y || qq.y > Oq.y) continue;
            if (qq.y === gq.y && qq.x === gq.x) return !0;
            {
              const Yq = xq * (qq.x - gq.x) - mq * (qq.y - gq.y);
              if (0 === Yq) return !0;
              if (Yq < 0) continue;
              Eq = !Eq
            }
          } else {
            if (qq.y !== gq.y) continue;
            if (Oq.x <= qq.x && qq.x <= gq.x || gq.x <= qq.x && qq.x <= Oq.x) return !0
          }
        }
        return Eq
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let qq = this._length;
        if (this.closed) {
          const Eq = this._points[this._points.length - 1];
          qq += this._points[0].subtract(Eq).length()
        }
        return qq
      }
      area() {
        const qq = this._points.length;
        let Eq = 0;
        for (let gq = qq - 1, Yq = 0; Yq < qq; gq = Yq++) Eq += this._points[gq].x * this._points[Yq].y - this._points[Yq].x * this._points[gq].y;
        return .5 * Eq
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(qq) {
        if (qq < 0 || qq > 1) return Oq.p.Zero();
        const Eq = qq * this.length();
        let gq = 0;
        for (let Yq = 0; Yq < this._points.length; Yq++) {
          const qq = (Yq + 1) % this._points.length,
            lq = this._points[Yq],
            mq = this._points[qq].subtract(lq),
            xq = mq.length() + gq;
          if (Eq >= gq && Eq <= xq) {
            const qq = mq.normalize(),
              Yq = Eq - gq;
            return new Oq.p(lq.x + qq.x * Yq, lq.y + qq.y * Yq)
          }
          gq = xq
        }
        return Oq.p.Zero()
      }
      static StartingAt(qq, Eq) {
        return new cq(qq, Eq)
      }
    }
    class uq {
      static CreateQuadraticBezier(qq, Eq, gq, Yq) {
        Yq = Yq > 2 ? Yq : 3;
        const lq = [],
          mq = (qq, Eq, gq, Yq) => (1 - qq) * (1 - qq) * Eq + 2 * qq * (1 - qq) * gq + qq * qq * Yq;
        for (let xq = 0; xq <= Yq; xq++) lq.push(new Oq.q(mq(xq / Yq, qq.x, Eq.x, gq.x), mq(xq / Yq, qq.y, Eq.y, gq.y), mq(xq / Yq, qq.z, Eq.z, gq.z)));
        return new uq(lq)
      }
      static CreateCubicBezier(qq, Eq, gq, Yq, lq) {
        lq = lq > 3 ? lq : 4;
        const mq = [],
          xq = (qq, Eq, gq, Yq, lq) => (1 - qq) * (1 - qq) * (1 - qq) * Eq + 3 * qq * (1 - qq) * (1 - qq) * gq + 3 * qq * qq * (1 - qq) * Yq + qq * qq * qq * lq;
        for (let Aq = 0; Aq <= lq; Aq++) mq.push(new Oq.q(xq(Aq / lq, qq.x, Eq.x, gq.x, Yq.x), xq(Aq / lq, qq.y, Eq.y, gq.y, Yq.y), xq(Aq / lq, qq.z, Eq.z, gq.z, Yq.z)));
        return new uq(mq)
      }
      static CreateHermiteSpline(qq, Eq, gq, Yq, lq) {
        const mq = [],
          xq = 1 / lq;
        for (let Aq = 0; Aq <= lq; Aq++) mq.push(Oq.q.Hermite(qq, Eq, gq, Yq, Aq * xq));
        return new uq(mq)
      }
      static CreateCatmullRomSpline(qq, Eq, gq) {
        const Yq = [],
          lq = 1 / Eq;
        let mq = 0;
        if (gq) {
          const gq = qq.length;
          for (let xq = 0; xq < gq; xq++) {
            mq = 0;
            for (let Aq = 0; Aq < Eq; Aq++) Yq.push(Oq.q.CatmullRom(qq[xq % gq], qq[(xq + 1) % gq], qq[(xq + 2) % gq], qq[(xq + 3) % gq], mq)), mq += lq
          }
          Yq.push(Yq[0])
        } else {
          const gq = [];
          gq.push(qq[0].clone()), gq.push(...qq), gq.push(qq[qq.length - 1].clone());
          let xq = 0;
          for (; xq < gq.length - 3; xq++) {
            mq = 0;
            for (let qq = 0; qq < Eq; qq++) Yq.push(Oq.q.CatmullRom(gq[xq], gq[xq + 1], gq[xq + 2], gq[xq + 3], mq)), mq += lq
          }
          xq--, Yq.push(Oq.q.CatmullRom(gq[xq], gq[xq + 1], gq[xq + 2], gq[xq + 3], mq))
        }
        return new uq(Yq)
      }
      static ArcThru3Points(qq, Eq, gq) {
        let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          lq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          mq = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const xq = [],
          Aq = Eq.subtract(qq),
          cq = gq.subtract(Eq),
          Bq = qq.subtract(gq),
          Wq = Oq.q.Cross(Aq, cq),
          Nq = Wq.length();
        if (Nq < Math.pow(10, -8)) return new uq(xq);
        const aq = Aq.lengthSquared(),
          Vq = cq.lengthSquared(),
          dq = Bq.lengthSquared(),
          jq = Wq.lengthSquared(),
          Hq = .5 * Aq.length() * cq.length() * Bq.length() / Nq,
          oq = -.5 * Vq * Oq.q.Dot(Aq, Bq) / jq,
          Pq = -.5 * dq * Oq.q.Dot(Aq, cq) / jq,
          Qq = -.5 * aq * Oq.q.Dot(cq, Bq) / jq,
          yq = qq.scale(oq).add(Eq.scale(Pq)).add(gq.scale(Qq)),
          tq = qq.subtract(yq).normalize(),
          rq = Oq.q.Cross(Wq, tq).normalize();
        if (mq) {
          const Eq = 2 * Math.PI / Yq;
          for (let qq = 0; qq <= 2 * Math.PI; qq += Eq) xq.push(yq.add(tq.scale(Hq * Math.cos(qq)).add(rq.scale(Hq * Math.sin(qq)))));
          xq.push(qq)
        } else {
          const Eq = 1 / Yq;
          let Oq, mq = 0;
          do {
            Oq = yq.add(tq.scale(Hq * Math.cos(mq)).add(rq.scale(Hq * Math.sin(mq)))), xq.push(Oq), mq += Eq
          } while (!Oq.equalsWithEpsilon(gq, Hq * Eq * 1.1));
          xq.push(gq), lq && xq.push(qq)
        }
        return new uq(xq)
      }
      constructor(qq) {
        this._length = 0, this._points = qq, this._length = this._computeLength(qq)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (qq) {
        const Eq = this._points[this._points.length - 1],
          gq = this._points.slice(),
          Yq = qq.getPoints();
        for (let lq = 1; lq < Yq.length; lq++) gq.push(Yq[lq].subtract(Yq[0]).add(Eq));
        return new uq(gq)
      }
      _computeLength(qq) {
        let Eq = 0;
        for (let gq = 1; gq < qq.length; gq++) Eq += qq[gq].subtract(qq[gq - 1]).length();
        return Eq
      }
    }
  },
  38649: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Oq
    });
    var Yq = gq(38653);
    const lq = (qq, Eq, gq) => qq ? qq.getClassName && "Mesh" === qq.getClassName() ? null : !qq.getClassName || "SubMesh" !== qq.getClassName() && "PhysicsBody" !== qq.getClassName() ? qq.clone ? qq.clone() : Array.isArray(qq) ? qq.slice() : gq && "object" === typeof qq ? {
      ...qq
    } : null : qq.clone(Eq) : null;
    class Oq {
      static DeepCopy(qq, Eq, gq, Oq) {
        let mq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const xq = function(qq) {
          const Eq = [];
          do {
            const gq = Object.getOwnPropertyNames(qq);
            for (const qq of gq) - 1 === Eq.indexOf(qq) && Eq.push(qq)
          } while (qq = Object.getPrototypeOf(qq));
          return Eq
        }(qq);
        for (const cq of xq) {
          if ("_" === cq[0] && (!Oq || -1 === Oq.indexOf(cq))) continue;
          if (cq.endsWith("Observable")) continue;
          if (gq && -1 !== gq.indexOf(cq)) continue;
          const xq = qq[cq],
            uq = typeof xq;
          if ("function" !== uq) try {
            if ("object" === uq)
              if (xq instanceof Uint8Array) Eq[cq] = Uint8Array.from(xq);
              else if (xq instanceof Array) {
              if (Eq[cq] = [], xq.length > 0)
                if ("object" == typeof xq[0])
                  for (let qq = 0; qq < xq.length; qq++) {
                    const gq = lq(xq[qq], Eq, mq); - 1 === Eq[cq].indexOf(gq) && Eq[cq].push(gq)
                  } else Eq[cq] = xq.slice(0)
            } else Eq[cq] = lq(xq, Eq, mq);
            else Eq[cq] = xq
          } catch (Aq) {
            Yq.b.Warn(Aq.message)
          }
        }
      }
    }
  },
  38653: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq
    });
    class Yq {
      static _CheckLimit(qq, Eq) {
        let gq = Yq._LogLimitOutputs[qq];
        return gq ? gq.current++ : (gq = {
          limit: Eq,
          current: 1
        }, Yq._LogLimitOutputs[qq] = gq), gq.current <= gq.limit
      }
      static _GenerateLimitMessage(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const gq = Yq._LogLimitOutputs[qq];
        if (!gq || !Yq.MessageLimitReached) return;
        const lq = this._Levels[Eq];
        gq.current === gq.limit && Yq[lq.name](Yq.MessageLimitReached.replace(/%LIMIT%/g, "" + gq.limit).replace(/%TYPE%/g, lq.name ?? ""))
      }
      static _AddLogEntry(qq) {
        Yq._LogCache = qq + Yq._LogCache, Yq.OnNewCacheEntry && Yq.OnNewCacheEntry(qq)
      }
      static _FormatMessage(qq) {
        const Eq = qq => qq < 10 ? "0" + qq : "" + qq,
          gq = new Date;
        return "[" + Eq(gq.getHours()) + ":" + Eq(gq.getMinutes()) + ":" + Eq(gq.getSeconds()) + "]: " + qq
      }
      static _LogDisabled(qq, Eq) {}
      static _LogEnabled() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Eq = arguments.length > 1 ? arguments[1] : void 0,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        const lq = Array.isArray(Eq) ? Eq[0] : Eq;
        if (void 0 !== gq && !Yq._CheckLimit(lq, gq)) return;
        const Oq = Yq._FormatMessage(lq),
          mq = this._Levels[qq],
          xq = Array.isArray(Eq) ? Eq.slice(1) : [];
        mq.logFunc && mq.logFunc("BJS - " + Oq, ...xq);
        const Aq = `<div style='color:${mq.color}'>${Oq}</div><br>`;
        Yq._AddLogEntry(Aq), Yq._GenerateLimitMessage(lq, qq)
      }
      static get LogCache() {
        return Yq._LogCache
      }
      static ClearLogCache() {
        Yq._LogCache = "", Yq._LogLimitOutputs = {}, Yq.errorsCount = 0
      }
      static set LogLevels(qq) {
        Yq.Log = Yq._LogDisabled, Yq.Warn = Yq._LogDisabled, Yq.Error = Yq._LogDisabled;
        const Eq = [Yq.MessageLogLevel, Yq.WarningLogLevel, Yq.ErrorLogLevel];
        for (const gq of Eq)
          if ((qq & gq) === gq) {
            const qq = this._Levels[gq];
            Yq[qq.name] = Yq._LogEnabled.bind(Yq, gq)
          }
      }
    }
    Yq.NoneLogLevel = 0, Yq.MessageLogLevel = 1, Yq.WarningLogLevel = 2, Yq.ErrorLogLevel = 4, Yq.AllLogLevel = 7, Yq.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Yq._LogCache = "", Yq._LogLimitOutputs = {}, Yq._Levels = [{}, {
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
    }], Yq.errorsCount = 0, Yq.Log = Yq._LogEnabled.bind(Yq, Yq.MessageLogLevel), Yq.Warn = Yq._LogEnabled.bind(Yq, Yq.WarningLogLevel), Yq.Error = Yq._LogEnabled.bind(Yq, Yq.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);