export const id = 249;
export const ids = [249];
export const modules = {
  41309: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Sp,
      h: () => Dp,
      k: () => Yp
    });
    var Op, op = cp(37356),
      Ip = cp(37320);
    ! function(pp) {
      pp[pp.CW = 0] = "CW", pp[pp.CCW = 1] = "CCW"
    }(Op || (Op = {}));
    class Sp {
      static Interpolate(pp, ip, cp, Op, op) {
        if (0 === pp) return 0;
        const Ip = 1 - 3 * Op + 3 * ip,
          Sp = 3 * Op - 6 * ip,
          xp = 3 * ip;
        let Lp = pp;
        for (let Yp = 0; Yp < 5; Yp++) {
          const ip = Lp * Lp;
          Lp -= (Ip * (ip * Lp) + Sp * ip + xp * Lp - pp) * (1 / (3 * Ip * ip + 2 * Sp * Lp + xp)), Lp = Math.min(1, Math.max(0, Lp))
        }
        return 3 * Math.pow(1 - Lp, 2) * Lp * cp + 3 * (1 - Lp) * Math.pow(Lp, 2) * op + Math.pow(Lp, 3)
      }
    }
    class xp {
      constructor(pp) {
        this._radians = pp, this._radians < 0 && (this._radians += 2 * Math.PI)
      }
      degrees() {
        return 180 * this._radians / Math.PI
      }
      radians() {
        return this._radians
      }
      static BetweenTwoPoints(pp, ip) {
        const cp = ip.subtract(pp),
          Op = Math.atan2(cp.y, cp.x);
        return new xp(Op)
      }
      static BetweenTwoVectors(pp, ip) {
        let cp = pp.lengthSquared() * ip.lengthSquared();
        if (0 === cp) return new xp(Math.PI / 2);
        cp = Math.sqrt(cp);
        let Op = pp.dot(ip) / cp;
        Op = (0, op.Clamp)(Op, -1, 1);
        const Ip = Math.acos(Op);
        return new xp(Ip)
      }
      static FromRadians(pp) {
        return new xp(pp)
      }
      static FromDegrees(pp) {
        return new xp(pp * Math.PI / 180)
      }
    }
    class Lp {
      constructor(pp, ip, cp) {
        this.startPoint = pp, this.midPoint = ip, this.endPoint = cp;
        const Op = Math.pow(ip.x, 2) + Math.pow(ip.y, 2),
          op = (Math.pow(pp.x, 2) + Math.pow(pp.y, 2) - Op) / 2,
          Sp = (Op - Math.pow(cp.x, 2) - Math.pow(cp.y, 2)) / 2,
          Lp = (pp.x - ip.x) * (ip.y - cp.y) - (ip.x - cp.x) * (pp.y - ip.y);
        this.centerPoint = new Ip.l((op * (ip.y - cp.y) - Sp * (pp.y - ip.y)) / Lp, ((pp.x - ip.x) * Sp - (ip.x - cp.x) * op) / Lp), this.radius = this.centerPoint.subtract(this.startPoint).length(), this.startAngle = xp.BetweenTwoPoints(this.centerPoint, this.startPoint);
        const Yp = this.startAngle.degrees();
        let Dp = xp.BetweenTwoPoints(this.centerPoint, this.midPoint).degrees(),
          Ap = xp.BetweenTwoPoints(this.centerPoint, this.endPoint).degrees();
        Dp - Yp > 180 && (Dp -= 360), Dp - Yp < -180 && (Dp += 360), Ap - Dp > 180 && (Ap -= 360), Ap - Dp < -180 && (Ap += 360), this.orientation = Dp - Yp < 0 ? 0 : 1, this.angle = xp.FromDegrees(0 === this.orientation ? Yp - Ap : Ap - Yp)
      }
    }
    class Yp {
      constructor(pp, ip) {
        this._points = new Array, this._length = 0, this.closed = !1, this._points.push(new Ip.l(pp, ip))
      }
      addLineTo(pp, ip) {
        if (this.closed) return this;
        const cp = new Ip.l(pp, ip),
          Op = this._points[this._points.length - 1];
        return this._points.push(cp), this._length += cp.subtract(Op).length(), this
      }
      addArcTo(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Sp = this._points[this._points.length - 1],
          xp = new Ip.l(pp, ip),
          Yp = new Ip.l(cp, Op),
          Dp = new Lp(Sp, xp, Yp);
        let Ap = Dp.angle.radians() / op;
        0 === Dp.orientation && (Ap *= -1);
        let Pp = Dp.startAngle.radians() + Ap;
        for (let Ip = 0; Ip < op; Ip++) {
          const pp = Math.cos(Pp) * Dp.radius + Dp.centerPoint.x,
            ip = Math.sin(Pp) * Dp.radius + Dp.centerPoint.y;
          this.addLineTo(pp, ip), Pp += Ap
        }
        return this
      }
      addQuadraticCurveTo(pp, ip, cp, Op) {
        let op = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 36;
        if (this.closed) return this;
        const Ip = (pp, ip, cp, Op) => (1 - pp) * (1 - pp) * ip + 2 * pp * (1 - pp) * cp + pp * pp * Op,
          Sp = this._points[this._points.length - 1];
        for (let xp = 0; xp <= op; xp++) {
          const Lp = xp / op,
            Yp = Ip(Lp, Sp.x, pp, cp),
            Dp = Ip(Lp, Sp.y, ip, Op);
          this.addLineTo(Yp, Dp)
        }
        return this
      }
      addBezierCurveTo(pp, ip, cp, Op, op, Ip) {
        let Sp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 36;
        if (this.closed) return this;
        const xp = (pp, ip, cp, Op, op) => (1 - pp) * (1 - pp) * (1 - pp) * ip + 3 * pp * (1 - pp) * (1 - pp) * cp + 3 * pp * pp * (1 - pp) * Op + pp * pp * pp * op,
          Lp = this._points[this._points.length - 1];
        for (let Yp = 0; Yp <= Sp; Yp++) {
          const Dp = Yp / Sp,
            Ap = xp(Dp, Lp.x, pp, cp, op),
            Pp = xp(Dp, Lp.y, ip, Op, Ip);
          this.addLineTo(Ap, Pp)
        }
        return this
      }
      isPointInside(pp) {
        let ip = !1;
        const cp = this._points.length;
        for (let Op = cp - 1, op = 0; op < cp; Op = op++) {
          let cp = this._points[Op],
            Ip = this._points[op],
            Sp = Ip.x - cp.x,
            xp = Ip.y - cp.y;
          if (Math.abs(xp) > Number.EPSILON) {
            if (xp < 0 && (cp = this._points[op], Sp = -Sp, Ip = this._points[Op], xp = -xp), pp.y < cp.y || pp.y > Ip.y) continue;
            if (pp.y === cp.y && pp.x === cp.x) return !0;
            {
              const Op = xp * (pp.x - cp.x) - Sp * (pp.y - cp.y);
              if (0 === Op) return !0;
              if (Op < 0) continue;
              ip = !ip
            }
          } else {
            if (pp.y !== cp.y) continue;
            if (Ip.x <= pp.x && pp.x <= cp.x || cp.x <= pp.x && pp.x <= Ip.x) return !0
          }
        }
        return ip
      }
      close() {
        return this.closed = !0, this
      }
      length() {
        let pp = this._length;
        if (this.closed) {
          const ip = this._points[this._points.length - 1];
          pp += this._points[0].subtract(ip).length()
        }
        return pp
      }
      area() {
        const pp = this._points.length;
        let ip = 0;
        for (let cp = pp - 1, Op = 0; Op < pp; cp = Op++) ip += this._points[cp].x * this._points[Op].y - this._points[Op].x * this._points[cp].y;
        return .5 * ip
      }
      getPoints() {
        return this._points
      }
      getPointAtLengthPosition(pp) {
        if (pp < 0 || pp > 1) return Ip.l.Zero();
        const ip = pp * this.length();
        let cp = 0;
        for (let Op = 0; Op < this._points.length; Op++) {
          const pp = (Op + 1) % this._points.length,
            op = this._points[Op],
            Sp = this._points[pp].subtract(op),
            xp = Sp.length() + cp;
          if (ip >= cp && ip <= xp) {
            const pp = Sp.normalize(),
              Op = ip - cp;
            return new Ip.l(op.x + pp.x * Op, op.y + pp.y * Op)
          }
          cp = xp
        }
        return Ip.l.Zero()
      }
      static StartingAt(pp, ip) {
        return new Yp(pp, ip)
      }
    }
    class Dp {
      static CreateQuadraticBezier(pp, ip, cp, Op) {
        Op = Op > 2 ? Op : 3;
        const op = [],
          Sp = (pp, ip, cp, Op) => (1 - pp) * (1 - pp) * ip + 2 * pp * (1 - pp) * cp + pp * pp * Op;
        for (let xp = 0; xp <= Op; xp++) op.push(new Ip.o(Sp(xp / Op, pp.x, ip.x, cp.x), Sp(xp / Op, pp.y, ip.y, cp.y), Sp(xp / Op, pp.z, ip.z, cp.z)));
        return new Dp(op)
      }
      static CreateCubicBezier(pp, ip, cp, Op, op) {
        op = op > 3 ? op : 4;
        const Sp = [],
          xp = (pp, ip, cp, Op, op) => (1 - pp) * (1 - pp) * (1 - pp) * ip + 3 * pp * (1 - pp) * (1 - pp) * cp + 3 * pp * pp * (1 - pp) * Op + pp * pp * pp * op;
        for (let Lp = 0; Lp <= op; Lp++) Sp.push(new Ip.o(xp(Lp / op, pp.x, ip.x, cp.x, Op.x), xp(Lp / op, pp.y, ip.y, cp.y, Op.y), xp(Lp / op, pp.z, ip.z, cp.z, Op.z)));
        return new Dp(Sp)
      }
      static CreateHermiteSpline(pp, ip, cp, Op, op) {
        const Sp = [],
          xp = 1 / op;
        for (let Lp = 0; Lp <= op; Lp++) Sp.push(Ip.o.Hermite(pp, ip, cp, Op, Lp * xp));
        return new Dp(Sp)
      }
      static CreateCatmullRomSpline(pp, ip, cp) {
        const Op = [],
          op = 1 / ip;
        let Sp = 0;
        if (cp) {
          const cp = pp.length;
          for (let xp = 0; xp < cp; xp++) {
            Sp = 0;
            for (let Lp = 0; Lp < ip; Lp++) Op.push(Ip.o.CatmullRom(pp[xp % cp], pp[(xp + 1) % cp], pp[(xp + 2) % cp], pp[(xp + 3) % cp], Sp)), Sp += op
          }
          Op.push(Op[0])
        } else {
          const cp = [];
          cp.push(pp[0].clone()), cp.push(...pp), cp.push(pp[pp.length - 1].clone());
          let xp = 0;
          for (; xp < cp.length - 3; xp++) {
            Sp = 0;
            for (let pp = 0; pp < ip; pp++) Op.push(Ip.o.CatmullRom(cp[xp], cp[xp + 1], cp[xp + 2], cp[xp + 3], Sp)), Sp += op
          }
          xp--, Op.push(Ip.o.CatmullRom(cp[xp], cp[xp + 1], cp[xp + 2], cp[xp + 3], Sp))
        }
        return new Dp(Op)
      }
      static ArcThru3Points(pp, ip, cp) {
        let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 32,
          op = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          Sp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        const xp = [],
          Lp = ip.subtract(pp),
          Yp = cp.subtract(ip),
          Ap = pp.subtract(cp),
          Pp = Ip.o.Cross(Lp, Yp),
          Wp = Pp.length();
        if (Wp < Math.pow(10, -8)) return new Dp(xp);
        const yp = Lp.lengthSquared(),
          Up = Yp.lengthSquared(),
          wp = Ap.lengthSquared(),
          vp = Pp.lengthSquared(),
          tp = .5 * Lp.length() * Yp.length() * Ap.length() / Wp,
          Hp = -.5 * Up * Ip.o.Dot(Lp, Ap) / vp,
          dp = -.5 * wp * Ip.o.Dot(Lp, Yp) / vp,
          ep = -.5 * yp * Ip.o.Dot(Yp, Ap) / vp,
          jp = pp.scale(Hp).add(ip.scale(dp)).add(cp.scale(ep)),
          kp = pp.subtract(jp).normalize(),
          mp = Ip.o.Cross(Pp, kp).normalize();
        if (Sp) {
          const ip = 2 * Math.PI / Op;
          for (let pp = 0; pp <= 2 * Math.PI; pp += ip) xp.push(jp.add(kp.scale(tp * Math.cos(pp)).add(mp.scale(tp * Math.sin(pp)))));
          xp.push(pp)
        } else {
          const ip = 1 / Op;
          let Ip, Sp = 0;
          do {
            Ip = jp.add(kp.scale(tp * Math.cos(Sp)).add(mp.scale(tp * Math.sin(Sp)))), xp.push(Ip), Sp += ip
          } while (!Ip.equalsWithEpsilon(cp, tp * ip * 1.1));
          xp.push(cp), op && xp.push(pp)
        }
        return new Dp(xp)
      }
      constructor(pp) {
        this._length = 0, this._points = pp, this._length = this._computeLength(pp)
      }
      getPoints() {
        return this._points
      }
      length() {
        return this._length
      }
      continue (pp) {
        const ip = this._points[this._points.length - 1],
          cp = this._points.slice(),
          Op = pp.getPoints();
        for (let op = 1; op < Op.length; op++) cp.push(Op[op].subtract(Op[0]).add(ip));
        return new Dp(cp)
      }
      _computeLength(pp) {
        let ip = 0;
        for (let cp = 1; cp < pp.length; cp++) ip += pp[cp].subtract(pp[cp - 1]).length();
        return ip
      }
    }
  },
  38900: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ip
    });
    var Op = cp(38905);
    const op = (pp, ip, cp) => pp ? pp.getClassName && "Mesh" === pp.getClassName() ? null : !pp.getClassName || "SubMesh" !== pp.getClassName() && "PhysicsBody" !== pp.getClassName() ? pp.clone ? pp.clone() : Array.isArray(pp) ? pp.slice() : cp && "object" === typeof pp ? {
      ...pp
    } : null : pp.clone(ip) : null;
    class Ip {
      static DeepCopy(pp, ip, cp, Ip) {
        let Sp = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const xp = function(pp) {
          const ip = [];
          do {
            const cp = Object.getOwnPropertyNames(pp);
            for (const pp of cp) - 1 === ip.indexOf(pp) && ip.push(pp)
          } while (pp = Object.getPrototypeOf(pp));
          return ip
        }(pp);
        for (const Yp of xp) {
          if ("_" === Yp[0] && (!Ip || -1 === Ip.indexOf(Yp))) continue;
          if (Yp.endsWith("Observable")) continue;
          if (cp && -1 !== cp.indexOf(Yp)) continue;
          const xp = pp[Yp],
            Dp = typeof xp;
          if ("function" !== Dp) try {
            if ("object" === Dp)
              if (xp instanceof Uint8Array) ip[Yp] = Uint8Array.from(xp);
              else if (xp instanceof Array) {
              if (ip[Yp] = [], xp.length > 0)
                if ("object" == typeof xp[0])
                  for (let pp = 0; pp < xp.length; pp++) {
                    const cp = op(xp[pp], ip, Sp); - 1 === ip[Yp].indexOf(cp) && ip[Yp].push(cp)
                  } else ip[Yp] = xp.slice(0)
            } else ip[Yp] = op(xp, ip, Sp);
            else ip[Yp] = xp
          } catch (Lp) {
            Op.e.Warn(Lp.message)
          }
        }
      }
    }
  },
  38905: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op
    });
    class Op {
      static _CheckLimit(pp, ip) {
        let cp = Op._LogLimitOutputs[pp];
        return cp ? cp.current++ : (cp = {
          limit: ip,
          current: 1
        }, Op._LogLimitOutputs[pp] = cp), cp.current <= cp.limit
      }
      static _GenerateLimitMessage(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const cp = Op._LogLimitOutputs[pp];
        if (!cp || !Op.MessageLimitReached) return;
        const op = this._Levels[ip];
        cp.current === cp.limit && Op[op.name](Op.MessageLimitReached.replace(/%LIMIT%/g, "" + cp.limit).replace(/%TYPE%/g, op.name ?? ""))
      }
      static _AddLogEntry(pp) {
        Op._LogCache = pp + Op._LogCache, Op.OnNewCacheEntry && Op.OnNewCacheEntry(pp)
      }
      static _FormatMessage(pp) {
        const ip = pp => pp < 10 ? "0" + pp : "" + pp,
          cp = new Date;
        return "[" + ip(cp.getHours()) + ":" + ip(cp.getMinutes()) + ":" + ip(cp.getSeconds()) + "]: " + pp
      }
      static _LogDisabled(pp, ip) {}
      static _LogEnabled() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ip = arguments.length > 1 ? arguments[1] : void 0,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        const op = Array.isArray(ip) ? ip[0] : ip;
        if (void 0 !== cp && !Op._CheckLimit(op, cp)) return;
        const Ip = Op._FormatMessage(op),
          Sp = this._Levels[pp],
          xp = Array.isArray(ip) ? ip.slice(1) : [];
        Sp.logFunc && Sp.logFunc("BJS - " + Ip, ...xp);
        const Lp = `<div style='color:${Sp.color}'>${Ip}</div><br>`;
        Op._AddLogEntry(Lp), Op._GenerateLimitMessage(op, pp)
      }
      static get LogCache() {
        return Op._LogCache
      }
      static ClearLogCache() {
        Op._LogCache = "", Op._LogLimitOutputs = {}, Op.errorsCount = 0
      }
      static set LogLevels(pp) {
        Op.Log = Op._LogDisabled, Op.Warn = Op._LogDisabled, Op.Error = Op._LogDisabled;
        const ip = [Op.MessageLogLevel, Op.WarningLogLevel, Op.ErrorLogLevel];
        for (const cp of ip)
          if ((pp & cp) === cp) {
            const pp = this._Levels[cp];
            Op[pp.name] = Op._LogEnabled.bind(Op, cp)
          }
      }
    }
    Op.NoneLogLevel = 0, Op.MessageLogLevel = 1, Op.WarningLogLevel = 2, Op.ErrorLogLevel = 4, Op.AllLogLevel = 7, Op.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Op._LogCache = "", Op._LogLimitOutputs = {}, Op._Levels = [{}, {
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
    }], Op.errorsCount = 0, Op.Log = Op._LogEnabled.bind(Op, Op.MessageLogLevel), Op.Warn = Op._LogEnabled.bind(Op, Op.WarningLogLevel), Op.Error = Op._LogEnabled.bind(Op, Op.ErrorLogLevel)
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);