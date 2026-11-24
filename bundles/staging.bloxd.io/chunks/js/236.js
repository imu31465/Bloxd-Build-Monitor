export const id = 236;
export const ids = [236];
export const modules = {
  37345: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op
    });
    var Op = cp(37349);
    class op {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    op.Instances = [], op.OnEnginesDisposedObservable = new Op.d, op._LastCreatedScene = null, op.UseFallbackTexture = !0, op.FallbackTexture = ""
  },
  37338: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op
    });
    class Op {
      static SetMatrixPrecision(pp) {
        if (Op.MatrixTrackPrecisionChange = !1, pp && !Op.MatrixUse64Bits && Op.MatrixTrackedMatrices)
          for (let ip = 0; ip < Op.MatrixTrackedMatrices.length; ++ip) {
            const pp = Op.MatrixTrackedMatrices[ip],
              cp = pp._m;
            pp._m = new Array(16);
            for (let ip = 0; ip < 16; ++ip) pp._m[ip] = cp[ip]
          }
        Op.MatrixUse64Bits = pp, Op.MatrixCurrentType = Op.MatrixUse64Bits ? Array : Float32Array, Op.MatrixTrackedMatrices = null
      }
    }
    Op.MatrixUse64Bits = !1, Op.MatrixTrackPrecisionChange = !0, Op.MatrixCurrentType = Float32Array, Op.MatrixTrackedMatrices = []
  },
  37359: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => xp,
      e: () => Yp,
      g: () => Lp,
      j: () => Op,
      l: () => Ip,
      p: () => Sp
    });
    class Op {}

    function op(pp) {
      pp.updateFlag = Op._UpdateFlagSeed++
    }

    function Ip(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const op = pp.BOp(),
        Ip = ip.BOp(),
        Sp = op[0],
        xp = op[1],
        Lp = op[2],
        Yp = op[3],
        Dp = op[4],
        Ap = op[5],
        Pp = op[6],
        Wp = op[7],
        yp = op[8],
        Up = op[9],
        wp = op[10],
        vp = op[11],
        tp = op[12],
        Hp = op[13],
        dp = op[14],
        ep = op[15],
        jp = Ip[0],
        kp = Ip[1],
        mp = Ip[2],
        Rp = Ip[3],
        qp = Ip[4],
        Mp = Ip[5],
        Cp = Ip[6],
        Ep = Ip[7],
        Xp = Ip[8],
        lp = Ip[9],
        Qp = Ip[10],
        Jp = Ip[11],
        Bp = Ip[12],
        Np = Ip[13],
        Tp = Ip[14],
        fp = Ip[15];
      cp[Op] = Sp * jp + xp * qp + Lp * Xp + Yp * Bp, cp[Op + 1] = Sp * kp + xp * Mp + Lp * lp + Yp * Np, cp[Op + 2] = Sp * mp + xp * Cp + Lp * Qp + Yp * Tp, cp[Op + 3] = Sp * Rp + xp * Ep + Lp * Jp + Yp * fp, cp[Op + 4] = Dp * jp + Ap * qp + Pp * Xp + Wp * Bp, cp[Op + 5] = Dp * kp + Ap * Mp + Pp * lp + Wp * Np, cp[Op + 6] = Dp * mp + Ap * Cp + Pp * Qp + Wp * Tp, cp[Op + 7] = Dp * Rp + Ap * Ep + Pp * Jp + Wp * fp, cp[Op + 8] = yp * jp + Up * qp + wp * Xp + vp * Bp, cp[Op + 9] = yp * kp + Up * Mp + wp * lp + vp * Np, cp[Op + 10] = yp * mp + Up * Cp + wp * Qp + vp * Tp, cp[Op + 11] = yp * Rp + Up * Ep + wp * Jp + vp * fp, cp[Op + 12] = tp * jp + Hp * qp + dp * Xp + ep * Bp, cp[Op + 13] = tp * kp + Hp * Mp + dp * lp + ep * Np, cp[Op + 14] = tp * mp + Hp * Cp + dp * Qp + ep * Tp, cp[Op + 15] = tp * Rp + Hp * Ep + dp * Jp + ep * fp
    }

    function Sp(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Ip(pp, ip, cp.BOp(), Op), op(cp)
    }

    function xp(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Op = pp.BOp();
      ip[cp] = Op[0], ip[cp + 1] = Op[1], ip[cp + 2] = Op[2], ip[cp + 3] = Op[3], ip[cp + 4] = Op[4], ip[cp + 5] = Op[5], ip[cp + 6] = Op[6], ip[cp + 7] = Op[7], ip[cp + 8] = Op[8], ip[cp + 9] = Op[9], ip[cp + 10] = Op[10], ip[cp + 11] = Op[11], ip[cp + 12] = Op[12], ip[cp + 13] = Op[13], ip[cp + 14] = Op[14], ip[cp + 15] = Op[15]
    }

    function Lp(pp, ip) {
      const cp = Yp(pp, ip.BOp());
      return cp && op(ip), cp
    }

    function Yp(pp, ip) {
      const cp = pp.BOp(),
        Op = cp[0],
        op = cp[1],
        Ip = cp[2],
        Sp = cp[3],
        xp = cp[4],
        Lp = cp[5],
        Yp = cp[6],
        Dp = cp[7],
        Ap = cp[8],
        Pp = cp[9],
        Wp = cp[10],
        yp = cp[11],
        Up = cp[12],
        wp = cp[13],
        vp = cp[14],
        tp = cp[15],
        Hp = Wp * tp - vp * yp,
        dp = Pp * tp - wp * yp,
        ep = Pp * vp - wp * Wp,
        jp = Ap * tp - Up * yp,
        kp = Ap * vp - Wp * Up,
        mp = Ap * wp - Up * Pp,
        Rp = +(Lp * Hp - Yp * dp + Dp * ep),
        qp = -(xp * Hp - Yp * jp + Dp * kp),
        Mp = +(xp * dp - Lp * jp + Dp * mp),
        Cp = -(xp * ep - Lp * kp + Yp * mp),
        Ep = Op * Rp + op * qp + Ip * Mp + Sp * Cp;
      if (0 === Ep) return !1;
      const Xp = 1 / Ep,
        lp = Yp * tp - vp * Dp,
        Qp = Lp * tp - wp * Dp,
        Jp = Lp * vp - wp * Yp,
        Bp = xp * tp - Up * Dp,
        Np = xp * vp - Up * Yp,
        Tp = xp * wp - Up * Lp,
        fp = Yp * yp - Wp * Dp,
        bp = Lp * yp - Pp * Dp,
        hp = Lp * Wp - Pp * Yp,
        ap = xp * yp - Ap * Dp,
        np = xp * Wp - Ap * Yp,
        Fp = xp * Pp - Ap * Lp,
        gp = -(op * Hp - Ip * dp + Sp * ep),
        Gp = +(Op * Hp - Ip * jp + Sp * kp),
        rp = -(Op * dp - op * jp + Sp * mp),
        Zp = +(Op * ep - op * kp + Ip * mp),
        zp = +(op * lp - Ip * Qp + Sp * Jp),
        sp = -(Op * lp - Ip * Bp + Sp * Np),
        Kp = +(Op * Qp - op * Bp + Sp * Tp),
        Vp = -(Op * Jp - op * Np + Ip * Tp),
        ii = -(op * fp - Ip * bp + Sp * hp),
        ci = +(Op * fp - Ip * ap + Sp * np),
        Oi = -(Op * bp - op * ap + Sp * Fp),
        oi = +(Op * hp - op * np + Ip * Fp);
      return ip[0] = Rp * Xp, ip[1] = gp * Xp, ip[2] = zp * Xp, ip[3] = ii * Xp, ip[4] = qp * Xp, ip[5] = Gp * Xp, ip[6] = sp * Xp, ip[7] = ci * Xp, ip[8] = Mp * Xp, ip[9] = rp * Xp, ip[10] = Kp * Xp, ip[11] = Oi * Xp, ip[12] = Cp * Xp, ip[13] = Zp * Xp, ip[14] = Vp * Xp, ip[15] = oi * Xp, !0
    }
    Op._UpdateFlagSeed = 0
  },
  37320: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Up,
      f: () => yp,
      h: () => dp,
      i: () => vp,
      l: () => Ap,
      o: () => Pp,
      q: () => Wp
    });
    var Op = cp(37324),
      op = cp(37329),
      Ip = cp(37338),
      Sp = cp(37345),
      xp = cp(37356),
      Lp = cp(37359),
      Yp = cp(37368);
    const Dp = pp => parseInt(pp.toString().replace(/\W/g, ""));
    class Ap {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = pp, this.y = ip
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let pp = Dp(this.x);
        return pp = 397 * pp ^ Dp(this.y), pp
      }
      toArray(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return pp[ip] = this.x, pp[ip + 1] = this.y, this
      }
      vcp(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Ap.FromArrayToRef(pp, ip, this), this
      }
      BOp() {
        return [this.x, this.y]
      }
      rM(pp) {
        return this.x = pp.x, this.y = pp.y, this
      }
      i5(pp, ip) {
        return this.x = pp, this.y = ip, this
      }
      set(pp, ip) {
        return this.i5(pp, ip)
      }
      E_(pp) {
        return this.i5(pp, pp)
      }
      add(pp) {
        return new Ap(this.x + pp.x, this.y + pp.y)
      }
      addToRef(pp, ip) {
        return ip.x = this.x + pp.x, ip.y = this.y + pp.y, ip
      }
      addInPlace(pp) {
        return this.x += pp.x, this.y += pp.y, this
      }
      addInPlaceFromFloats(pp, ip) {
        return this.x += pp, this.y += ip, this
      }
      addVector3(pp) {
        return new Ap(this.x + pp.x, this.y + pp.y)
      }
      subtract(pp) {
        return new Ap(this.x - pp.x, this.y - pp.y)
      }
      subtractToRef(pp, ip) {
        return ip.x = this.x - pp.x, ip.y = this.y - pp.y, ip
      }
      Iop(pp) {
        return this.x -= pp.x, this.y -= pp.y, this
      }
      multiplyInPlace(pp) {
        return this.x *= pp.x, this.y *= pp.y, this
      }
      multiply(pp) {
        return new Ap(this.x * pp.x, this.y * pp.y)
      }
      multiplyToRef(pp, ip) {
        return ip.x = this.x * pp.x, ip.y = this.y * pp.y, ip
      }
      multiplyByFloats(pp, ip) {
        return new Ap(this.x * pp, this.y * ip)
      }
      divide(pp) {
        return new Ap(this.x / pp.x, this.y / pp.y)
      }
      divideToRef(pp, ip) {
        return ip.x = this.x / pp.x, ip.y = this.y / pp.y, ip
      }
      divideInPlace(pp) {
        return this.x = this.x / pp.x, this.y = this.y / pp.y, this
      }
      minimizeInPlace(pp) {
        return this.minimizeInPlaceFromFloats(pp.x, pp.y)
      }
      maximizeInPlace(pp) {
        return this.maximizeInPlaceFromFloats(pp.x, pp.y)
      }
      minimizeInPlaceFromFloats(pp, ip) {
        return this.x = Math.min(pp, this.x), this.y = Math.min(ip, this.y), this
      }
      maximizeInPlaceFromFloats(pp, ip) {
        return this.x = Math.max(pp, this.x), this.y = Math.max(ip, this.y), this
      }
      subtractFromFloats(pp, ip) {
        return new Ap(this.x - pp, this.y - ip)
      }
      subtractFromFloatsToRef(pp, ip, cp) {
        return cp.x = this.x - pp, cp.y = this.y - ip, cp
      }
      gp() {
        return new Ap(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(pp) {
        return pp.x = -this.x, pp.y = -this.y, pp
      }
      scaleInPlace(pp) {
        return this.x *= pp, this.y *= pp, this
      }
      scale(pp) {
        return new Ap(this.x * pp, this.y * pp)
      }
      scaleToRef(pp, ip) {
        return ip.x = this.x * pp, ip.y = this.y * pp, ip
      }
      scaleAndAddToRef(pp, ip) {
        return ip.x += this.x * pp, ip.y += this.y * pp, ip
      }
      equals(pp) {
        return pp && this.x === pp.x && this.y === pp.y
      }
      equalsWithEpsilon(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Op.b;
        return pp && (0, xp.WithinEpsilon)(this.x, pp.x, ip) && (0, xp.WithinEpsilon)(this.y, pp.y, ip)
      }
      jxp(pp, ip) {
        return this.x === pp && this.y === ip
      }
      floor() {
        return new Ap(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(pp) {
        return pp.x = Math.floor(this.x), pp.y = Math.floor(this.y), pp
      }
      fract() {
        return new Ap(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(pp) {
        return pp.x = this.x - Math.floor(this.x), pp.y = this.y - Math.floor(this.y), pp
      }
      rotate(pp) {
        return this.rotateToRef(pp, new Ap)
      }
      rotateToRef(pp, ip) {
        const cp = Math.cos(pp),
          Op = Math.sin(pp);
        return ip.x = cp * this.x - Op * this.y, ip.y = Op * this.x + cp * this.y, ip
      }
      length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
      }
      lengthSquared() {
        return this.x * this.x + this.y * this.y
      }
      normalize() {
        return this.normalizeFromLength(this.length())
      }
      normalizeFromLength(pp) {
        return 0 === pp || 1 === pp ? this : this.scaleInPlace(1 / pp)
      }
      normalizeToNew() {
        const pp = new Ap;
        return this.normalizeToRef(pp), pp
      }
      normalizeToRef(pp) {
        const ip = this.length();
        return 0 === ip || 1 === ip ? (pp.x = this.x, pp.y = this.y, pp) : this.scaleToRef(1 / ip, pp)
      }
      clone() {
        return new Ap(this.x, this.y)
      }
      dot(pp) {
        return this.x * pp.x + this.y * pp.y
      }
      static Zero() {
        return new Ap(0, 0)
      }
      static One() {
        return new Ap(1, 1)
      }
      static Random() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Ap((0, xp.RandomRange)(pp, ip), (0, xp.RandomRange)(pp, ip))
      }
      static RandomToRef() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).i5((0, xp.RandomRange)(pp, ip), (0, xp.RandomRange)(pp, ip))
      }
      static get ZeroReadOnly() {
        return Ap._ZeroReadOnly
      }
      static FromArray(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Ap(pp[ip], pp[ip + 1])
      }
      static FromArrayToRef(pp, ip, cp) {
        return cp.x = pp[ip], cp.y = pp[ip + 1], cp
      }
      static FromFloatsToRef(pp, ip, cp) {
        return cp.i5(pp, ip), cp
      }
      static CatmullRom(pp, ip, cp, Op, op) {
        const Ip = op * op,
          Sp = op * Ip,
          xp = .5 * (2 * ip.x + (-pp.x + cp.x) * op + (2 * pp.x - 5 * ip.x + 4 * cp.x - Op.x) * Ip + (-pp.x + 3 * ip.x - 3 * cp.x + Op.x) * Sp),
          Lp = .5 * (2 * ip.y + (-pp.y + cp.y) * op + (2 * pp.y - 5 * ip.y + 4 * cp.y - Op.y) * Ip + (-pp.y + 3 * ip.y - 3 * cp.y + Op.y) * Sp);
        return new Ap(xp, Lp)
      }
      static ClampToRef(pp, ip, cp, Op) {
        return Op.x = (0, xp.Clamp)(pp.x, ip.x, cp.x), Op.y = (0, xp.Clamp)(pp.y, ip.y, cp.y), Op
      }
      static Clamp(pp, ip, cp) {
        const Op = (0, xp.Clamp)(pp.x, ip.x, cp.x),
          op = (0, xp.Clamp)(pp.y, ip.y, cp.y);
        return new Ap(Op, op)
      }
      static Hermite(pp, ip, cp, Op, op) {
        const Ip = op * op,
          Sp = op * Ip,
          xp = 2 * Sp - 3 * Ip + 1,
          Lp = -2 * Sp + 3 * Ip,
          Yp = Sp - 2 * Ip + op,
          Dp = Sp - Ip,
          Pp = pp.x * xp + cp.x * Lp + ip.x * Yp + Op.x * Dp,
          Wp = pp.y * xp + cp.y * Lp + ip.y * Yp + Op.y * Dp;
        return new Ap(Pp, Wp)
      }
      static Hermite1stDerivative(pp, ip, cp, Op, op) {
        return this.Hermite1stDerivativeToRef(pp, ip, cp, Op, op, new Ap)
      }
      static Hermite1stDerivativeToRef(pp, ip, cp, Op, op, Ip) {
        const Sp = op * op;
        return Ip.x = 6 * (Sp - op) * pp.x + (3 * Sp - 4 * op + 1) * ip.x + 6 * (-Sp + op) * cp.x + (3 * Sp - 2 * op) * Op.x, Ip.y = 6 * (Sp - op) * pp.y + (3 * Sp - 4 * op + 1) * ip.y + 6 * (-Sp + op) * cp.y + (3 * Sp - 2 * op) * Op.y, Ip
      }
      static Lerp(pp, ip, cp) {
        return Ap.LerpToRef(pp, ip, cp, new Ap)
      }
      static LerpToRef(pp, ip, cp, Op) {
        return Op.x = pp.x + (ip.x - pp.x) * cp, Op.y = pp.y + (ip.y - pp.y) * cp, Op
      }
      static Dot(pp, ip) {
        return pp.x * ip.x + pp.y * ip.y
      }
      static Normalize(pp) {
        return Ap.NormalizeToRef(pp, new Ap)
      }
      static NormalizeToRef(pp, ip) {
        return pp.normalizeToRef(ip), ip
      }
      static Minimize(pp, ip) {
        const cp = pp.x < ip.x ? pp.x : ip.x,
          Op = pp.y < ip.y ? pp.y : ip.y;
        return new Ap(cp, Op)
      }
      static Maximize(pp, ip) {
        const cp = pp.x > ip.x ? pp.x : ip.x,
          Op = pp.y > ip.y ? pp.y : ip.y;
        return new Ap(cp, Op)
      }
      static Transform(pp, ip) {
        return Ap.TransformToRef(pp, ip, new Ap)
      }
      static TransformToRef(pp, ip, cp) {
        const Op = ip.m,
          op = pp.x * Op[0] + pp.y * Op[4] + Op[12],
          Ip = pp.x * Op[1] + pp.y * Op[5] + Op[13];
        return cp.x = op, cp.y = Ip, cp
      }
      static PointInTriangle(pp, ip, cp, Op) {
        const op = .5 * (-cp.y * Op.x + ip.y * (-cp.x + Op.x) + ip.x * (cp.y - Op.y) + cp.x * Op.y),
          Ip = op < 0 ? -1 : 1,
          Sp = (ip.y * Op.x - ip.x * Op.y + (Op.y - ip.y) * pp.x + (ip.x - Op.x) * pp.y) * Ip,
          xp = (ip.x * cp.y - ip.y * cp.x + (ip.y - cp.y) * pp.x + (cp.x - ip.x) * pp.y) * Ip;
        return Sp > 0 && xp > 0 && Sp + xp < 2 * op * Ip
      }
      static Distance(pp, ip) {
        return Math.sqrt(Ap.DistanceSquared(pp, ip))
      }
      static DistanceSquared(pp, ip) {
        const cp = pp.x - ip.x,
          Op = pp.y - ip.y;
        return cp * cp + Op * Op
      }
      static Center(pp, ip) {
        return Ap.CenterToRef(pp, ip, new Ap)
      }
      static CenterToRef(pp, ip, cp) {
        return cp.i5((pp.x + ip.x) / 2, (pp.y + ip.y) / 2)
      }
      static DistanceOfPointFromSegment(pp, ip, cp) {
        const Op = Ap.DistanceSquared(ip, cp);
        if (0 === Op) return Ap.Distance(pp, ip);
        const op = cp.subtract(ip),
          Ip = Math.max(0, Math.min(1, Ap.Dot(pp.subtract(ip), op) / Op)),
          Sp = ip.add(op.multiplyByFloats(Ip, Ip));
        return Ap.Distance(pp, Sp)
      }
    }
    Ap._V8PerformanceHack = new Ap(.5, .5), Ap._ZeroReadOnly = Ap.Zero();
    class Pp {
      get x() {
        return this._x
      }
      set x(pp) {
        this._x = pp, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(pp) {
        this._y = pp, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(pp) {
        this._z = pp, this._isDirty = !0
      }
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = pp, this._y = ip, this._z = cp
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "Zy"
      }
      getHashCode() {
        let pp = Dp(this._x);
        return pp = 397 * pp ^ Dp(this._y), pp = 397 * pp ^ Dp(this._z), pp
      }
      BOp() {
        return [this._x, this._y, this._z]
      }
      toArray(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return pp[ip] = this._x, pp[ip + 1] = this._y, pp[ip + 2] = this._z, this
      }
      vcp(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Pp.FromArrayToRef(pp, ip, this), this
      }
      toQuaternion() {
        return yp.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(pp) {
        return this._x += pp._x, this._y += pp._y, this._z += pp._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(pp, ip, cp) {
        return this._x += pp, this._y += ip, this._z += cp, this._isDirty = !0, this
      }
      add(pp) {
        return new Pp(this._x + pp._x, this._y + pp._y, this._z + pp._z)
      }
      addToRef(pp, ip) {
        return ip._x = this._x + pp._x, ip._y = this._y + pp._y, ip._z = this._z + pp._z, ip._isDirty = !0, ip
      }
      Iop(pp) {
        return this._x -= pp._x, this._y -= pp._y, this._z -= pp._z, this._isDirty = !0, this
      }
      subtract(pp) {
        return new Pp(this._x - pp._x, this._y - pp._y, this._z - pp._z)
      }
      subtractToRef(pp, ip) {
        return this.subtractFromFloatsToRef(pp._x, pp._y, pp._z, ip)
      }
      subtractFromFloats(pp, ip, cp) {
        return new Pp(this._x - pp, this._y - ip, this._z - cp)
      }
      subtractFromFloatsToRef(pp, ip, cp, Op) {
        return Op._x = this._x - pp, Op._y = this._y - ip, Op._z = this._z - cp, Op._isDirty = !0, Op
      }
      gp() {
        return new Pp(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(pp) {
        return pp._x = -1 * this._x, pp._y = -1 * this._y, pp._z = -1 * this._z, pp._isDirty = !0, pp
      }
      scaleInPlace(pp) {
        return this._x *= pp, this._y *= pp, this._z *= pp, this._isDirty = !0, this
      }
      scale(pp) {
        return new Pp(this._x * pp, this._y * pp, this._z * pp)
      }
      scaleToRef(pp, ip) {
        return ip._x = this._x * pp, ip._y = this._y * pp, ip._z = this._z * pp, ip._isDirty = !0, ip
      }
      getNormalToRef(pp) {
        const ip = this.length();
        let cp = Math.acos(this._y / ip);
        const Op = Math.atan2(this._z, this._x);
        cp > Math.PI / 2 ? cp -= Math.PI / 2 : cp += Math.PI / 2;
        const op = ip * Math.sin(cp) * Math.cos(Op),
          Ip = ip * Math.cos(cp),
          Sp = ip * Math.sin(cp) * Math.sin(Op);
        return pp.set(op, Ip, Sp), pp
      }
      applyRotationQuaternionToRef(pp, ip) {
        const cp = this._x,
          Op = this._y,
          op = this._z,
          Ip = pp._x,
          Sp = pp._y,
          xp = pp._z,
          Lp = pp._w,
          Yp = 2 * (Sp * op - xp * Op),
          Dp = 2 * (xp * cp - Ip * op),
          Ap = 2 * (Ip * Op - Sp * cp);
        return ip._x = cp + Lp * Yp + Sp * Ap - xp * Dp, ip._y = Op + Lp * Dp + xp * Yp - Ip * Ap, ip._z = op + Lp * Ap + Ip * Dp - Sp * Yp, ip._isDirty = !0, ip
      }
      applyRotationQuaternionInPlace(pp) {
        return this.applyRotationQuaternionToRef(pp, this)
      }
      applyRotationQuaternion(pp) {
        return this.applyRotationQuaternionToRef(pp, new Pp)
      }
      scaleAndAddToRef(pp, ip) {
        return ip._x += this._x * pp, ip._y += this._y * pp, ip._z += this._z * pp, ip._isDirty = !0, ip
      }
      projectOnPlane(pp, ip) {
        return this.projectOnPlaneToRef(pp, ip, new Pp)
      }
      projectOnPlaneToRef(pp, ip, cp) {
        const Op = pp.normal,
          op = pp.d,
          Ip = wp.Zy[0];
        this.subtractToRef(ip, Ip), Ip.normalize();
        const Sp = Pp.Dot(Ip, Op);
        if (Math.abs(Sp) < 1e-10) cp.E_(1 / 0);
        else {
          const pp = -(Pp.Dot(ip, Op) + op) / Sp,
            xp = Ip.scaleInPlace(pp);
          ip.addToRef(xp, cp)
        }
        return cp
      }
      equals(pp) {
        return pp && this._x === pp._x && this._y === pp._y && this._z === pp._z
      }
      equalsWithEpsilon(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Op.b;
        return pp && (0, xp.WithinEpsilon)(this._x, pp._x, ip) && (0, xp.WithinEpsilon)(this._y, pp._y, ip) && (0, xp.WithinEpsilon)(this._z, pp._z, ip)
      }
      jxp(pp, ip, cp) {
        return this._x === pp && this._y === ip && this._z === cp
      }
      multiplyInPlace(pp) {
        return this._x *= pp._x, this._y *= pp._y, this._z *= pp._z, this._isDirty = !0, this
      }
      multiply(pp) {
        return this.multiplyByFloats(pp._x, pp._y, pp._z)
      }
      multiplyToRef(pp, ip) {
        return ip._x = this._x * pp._x, ip._y = this._y * pp._y, ip._z = this._z * pp._z, ip._isDirty = !0, ip
      }
      multiplyByFloats(pp, ip, cp) {
        return new Pp(this._x * pp, this._y * ip, this._z * cp)
      }
      divide(pp) {
        return new Pp(this._x / pp._x, this._y / pp._y, this._z / pp._z)
      }
      divideToRef(pp, ip) {
        return ip._x = this._x / pp._x, ip._y = this._y / pp._y, ip._z = this._z / pp._z, ip._isDirty = !0, ip
      }
      divideInPlace(pp) {
        return this._x = this._x / pp._x, this._y = this._y / pp._y, this._z = this._z / pp._z, this._isDirty = !0, this
      }
      minimizeInPlace(pp) {
        return this.minimizeInPlaceFromFloats(pp._x, pp._y, pp._z)
      }
      maximizeInPlace(pp) {
        return this.maximizeInPlaceFromFloats(pp._x, pp._y, pp._z)
      }
      minimizeInPlaceFromFloats(pp, ip, cp) {
        return pp < this._x && (this.x = pp), ip < this._y && (this.y = ip), cp < this._z && (this.z = cp), this
      }
      maximizeInPlaceFromFloats(pp, ip, cp) {
        return pp > this._x && (this.x = pp), ip > this._y && (this.y = ip), cp > this._z && (this.z = cp), this
      }
      isNonUniformWithinEpsilon(pp) {
        const ip = Math.abs(this._x),
          cp = Math.abs(this._y);
        if (!(0, xp.WithinEpsilon)(ip, cp, pp)) return !0;
        const Op = Math.abs(this._z);
        return !(0, xp.WithinEpsilon)(ip, Op, pp) || !(0, xp.WithinEpsilon)(cp, Op, pp)
      }
      get isNonUniform() {
        const pp = Math.abs(this._x);
        if (pp !== Math.abs(this._y)) return !0;
        return pp !== Math.abs(this._z)
      }
      floorToRef(pp) {
        return pp._x = Math.floor(this._x), pp._y = Math.floor(this._y), pp._z = Math.floor(this._z), pp._isDirty = !0, pp
      }
      floor() {
        return new Pp(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(pp) {
        return pp._x = this._x - Math.floor(this._x), pp._y = this._y - Math.floor(this._y), pp._z = this._z - Math.floor(this._z), pp._isDirty = !0, pp
      }
      fract() {
        return new Pp(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
      }
      length() {
        return Math.sqrt(this.lengthSquared())
      }
      lengthSquared() {
        return this._x * this._x + this._y * this._y + this._z * this._z
      }
      get hasAZeroComponent() {
        return this._x * this._y * this._z === 0
      }
      normalize() {
        return this.normalizeFromLength(this.length())
      }
      reorderInPlace(pp) {
        if ("xyz" === (pp = pp.toLowerCase())) return this;
        const ip = wp.Zy[0].rM(this);
        return this.x = ip[pp[0]], this.y = ip[pp[1]], this.z = ip[pp[2]], this
      }
      rotateByQuaternionToRef(pp, ip) {
        return pp.toRotationMatrix(wp.Matrix[0]), Pp.TransformCoordinatesToRef(this, wp.Matrix[0], ip), ip
      }
      rotateByQuaternionAroundPointToRef(pp, ip, cp) {
        return this.subtractToRef(ip, wp.Zy[0]), wp.Zy[0].rotateByQuaternionToRef(pp, wp.Zy[0]), ip.addToRef(wp.Zy[0], cp), cp
      }
      cross(pp) {
        return Pp.CrossToRef(this, pp, new Pp)
      }
      normalizeFromLength(pp) {
        return 0 === pp || 1 === pp ? this : this.scaleInPlace(1 / pp)
      }
      normalizeToNew() {
        return this.normalizeToRef(new Pp)
      }
      normalizeToRef(pp) {
        const ip = this.length();
        return 0 === ip || 1 === ip ? (pp._x = this._x, pp._y = this._y, pp._z = this._z, pp._isDirty = !0, pp) : this.scaleToRef(1 / ip, pp)
      }
      clone() {
        return new Pp(this._x, this._y, this._z)
      }
      rM(pp) {
        return this.i5(pp._x, pp._y, pp._z)
      }
      i5(pp, ip, cp) {
        return this._x = pp, this._y = ip, this._z = cp, this._isDirty = !0, this
      }
      set(pp, ip, cp) {
        return this.i5(pp, ip, cp)
      }
      E_(pp) {
        return this._x = this._y = this._z = pp, this._isDirty = !0, this
      }
      static GetClipFactor(pp, ip, cp, Op) {
        const op = Pp.Dot(pp, cp);
        return (op - Op) / (op - Pp.Dot(ip, cp))
      }
      static GetAngleBetweenVectors(pp, ip, cp) {
        const Op = pp.normalizeToRef(wp.Zy[1]),
          op = ip.normalizeToRef(wp.Zy[2]);
        let Ip = Pp.Dot(Op, op);
        Ip = (0, xp.Clamp)(Ip, -1, 1);
        const Sp = Math.acos(Ip),
          Lp = wp.Zy[3];
        return Pp.CrossToRef(Op, op, Lp), Pp.Dot(Lp, cp) > 0 ? isNaN(Sp) ? 0 : Sp : isNaN(Sp) ? -Math.PI : -Math.acos(Ip)
      }
      static GetAngleBetweenVectorsOnPlane(pp, ip, cp) {
        wp.Zy[0].rM(pp);
        const Op = wp.Zy[0];
        wp.Zy[1].rM(ip);
        const op = wp.Zy[1];
        wp.Zy[2].rM(cp);
        const Ip = wp.Zy[2],
          Sp = wp.Zy[3],
          Lp = wp.Zy[4];
        Op.normalize(), op.normalize(), Ip.normalize(), Pp.CrossToRef(Ip, Op, Sp), Pp.CrossToRef(Sp, Ip, Lp);
        const Yp = Math.atan2(Pp.Dot(op, Sp), Pp.Dot(op, Lp));
        return (0, xp.NormalizeRadians)(Yp)
      }
      static PitchYawRollToMoveBetweenPointsToRef(pp, ip, cp) {
        const Op = vp.Zy[0];
        return ip.subtractToRef(pp, Op), cp._y = Math.atan2(Op.x, Op.z) || 0, cp._x = Math.atan2(Math.sqrt(Op.x ** 2 + Op.z ** 2), Op.y) || 0, cp._z = 0, cp._isDirty = !0, cp
      }
      static PitchYawRollToMoveBetweenPoints(pp, ip) {
        const cp = Pp.Zero();
        return Pp.PitchYawRollToMoveBetweenPointsToRef(pp, ip, cp)
      }
      static SlerpToRef(pp, ip, cp, op) {
        cp = (0, xp.Clamp)(cp, 0, 1);
        const Ip = wp.Zy[0],
          Sp = wp.Zy[1];
        Ip.rM(pp);
        const Lp = Ip.length();
        Ip.normalizeFromLength(Lp), Sp.rM(ip);
        const Yp = Sp.length();
        Sp.normalizeFromLength(Yp);
        const Dp = Pp.Dot(Ip, Sp);
        let Ap, Wp;
        if (Dp < 1 - Op.b) {
          const pp = Math.acos(Dp),
            ip = 1 / Math.sin(pp);
          Ap = Math.sin((1 - cp) * pp) * ip, Wp = Math.sin(cp * pp) * ip
        } else Ap = 1 - cp, Wp = cp;
        return Ip.scaleInPlace(Ap), Sp.scaleInPlace(Wp), op.rM(Ip).addInPlace(Sp), op.scaleInPlace((0, xp.Lerp)(Lp, Yp, cp)), op
      }
      static SmoothToRef(pp, ip, cp, Op, op) {
        return Pp.SlerpToRef(pp, ip, 0 === Op ? 1 : cp / Op, op), op
      }
      static FromArray(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Pp(pp[ip], pp[ip + 1], pp[ip + 2])
      }
      static FromFloatArray(pp, ip) {
        return Pp.FromArray(pp, ip)
      }
      static FromArrayToRef(pp, ip, cp) {
        return cp._x = pp[ip], cp._y = pp[ip + 1], cp._z = pp[ip + 2], cp._isDirty = !0, cp
      }
      static FromFloatArrayToRef(pp, ip, cp) {
        return Pp.FromArrayToRef(pp, ip, cp)
      }
      static FromFloatsToRef(pp, ip, cp, Op) {
        return Op.i5(pp, ip, cp), Op
      }
      static Zero() {
        return new Pp(0, 0, 0)
      }
      static One() {
        return new Pp(1, 1, 1)
      }
      static Up() {
        return new Pp(0, 1, 0)
      }
      static get UpReadOnly() {
        return Pp._UpReadOnly
      }
      static get DownReadOnly() {
        return Pp._DownReadOnly
      }
      static get RightReadOnly() {
        return Pp._RightReadOnly
      }
      static get LeftReadOnly() {
        return Pp._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return Pp._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return Pp._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return Pp._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return Pp._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return Pp._ZeroReadOnly
      }
      static get OneReadOnly() {
        return Pp._OneReadOnly
      }
      static Down() {
        return new Pp(0, -1, 0)
      }
      static Forward() {
        return new Pp(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new Pp(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new Pp(1, 0, 0)
      }
      static Left() {
        return new Pp(-1, 0, 0)
      }
      static Random() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Pp((0, xp.RandomRange)(pp, ip), (0, xp.RandomRange)(pp, ip), (0, xp.RandomRange)(pp, ip))
      }
      static RandomToRef() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).i5((0, xp.RandomRange)(pp, ip), (0, xp.RandomRange)(pp, ip), (0, xp.RandomRange)(pp, ip))
      }
      static TransformCoordinates(pp, ip) {
        const cp = Pp.Zero();
        return Pp.TransformCoordinatesToRef(pp, ip, cp), cp
      }
      static TransformCoordinatesToRef(pp, ip, cp) {
        return Pp.TransformCoordinatesFromFloatsToRef(pp._x, pp._y, pp._z, ip, cp), cp
      }
      static TransformCoordinatesFromFloatsToRef(pp, ip, cp, Op, op) {
        const Ip = Op.m,
          Sp = pp * Ip[0] + ip * Ip[4] + cp * Ip[8] + Ip[12],
          xp = pp * Ip[1] + ip * Ip[5] + cp * Ip[9] + Ip[13],
          Lp = pp * Ip[2] + ip * Ip[6] + cp * Ip[10] + Ip[14],
          Yp = 1 / (pp * Ip[3] + ip * Ip[7] + cp * Ip[11] + Ip[15]);
        return op._x = Sp * Yp, op._y = xp * Yp, op._z = Lp * Yp, op._isDirty = !0, op
      }
      static TransformNormal(pp, ip) {
        const cp = Pp.Zero();
        return Pp.TransformNormalToRef(pp, ip, cp), cp
      }
      static TransformNormalToRef(pp, ip, cp) {
        return this.TransformNormalFromFloatsToRef(pp._x, pp._y, pp._z, ip, cp), cp
      }
      static TransformNormalFromFloatsToRef(pp, ip, cp, Op, op) {
        const Ip = Op.m;
        return op._x = pp * Ip[0] + ip * Ip[4] + cp * Ip[8], op._y = pp * Ip[1] + ip * Ip[5] + cp * Ip[9], op._z = pp * Ip[2] + ip * Ip[6] + cp * Ip[10], op._isDirty = !0, op
      }
      static CatmullRom(pp, ip, cp, Op, op) {
        const Ip = op * op,
          Sp = op * Ip,
          xp = .5 * (2 * ip._x + (-pp._x + cp._x) * op + (2 * pp._x - 5 * ip._x + 4 * cp._x - Op._x) * Ip + (-pp._x + 3 * ip._x - 3 * cp._x + Op._x) * Sp),
          Lp = .5 * (2 * ip._y + (-pp._y + cp._y) * op + (2 * pp._y - 5 * ip._y + 4 * cp._y - Op._y) * Ip + (-pp._y + 3 * ip._y - 3 * cp._y + Op._y) * Sp),
          Yp = .5 * (2 * ip._z + (-pp._z + cp._z) * op + (2 * pp._z - 5 * ip._z + 4 * cp._z - Op._z) * Ip + (-pp._z + 3 * ip._z - 3 * cp._z + Op._z) * Sp);
        return new Pp(xp, Lp, Yp)
      }
      static Clamp(pp, ip, cp) {
        const Op = new Pp;
        return Pp.ClampToRef(pp, ip, cp, Op), Op
      }
      static ClampToRef(pp, ip, cp, Op) {
        let op = pp._x;
        op = op > cp._x ? cp._x : op, op = op < ip._x ? ip._x : op;
        let Ip = pp._y;
        Ip = Ip > cp._y ? cp._y : Ip, Ip = Ip < ip._y ? ip._y : Ip;
        let Sp = pp._z;
        return Sp = Sp > cp._z ? cp._z : Sp, Sp = Sp < ip._z ? ip._z : Sp, Op.i5(op, Ip, Sp), Op
      }
      static CheckExtends(pp, ip, cp) {
        ip.minimizeInPlace(pp), cp.maximizeInPlace(pp)
      }
      static Hermite(pp, ip, cp, Op, op) {
        const Ip = op * op,
          Sp = op * Ip,
          xp = 2 * Sp - 3 * Ip + 1,
          Lp = -2 * Sp + 3 * Ip,
          Yp = Sp - 2 * Ip + op,
          Dp = Sp - Ip,
          Ap = pp._x * xp + cp._x * Lp + ip._x * Yp + Op._x * Dp,
          Wp = pp._y * xp + cp._y * Lp + ip._y * Yp + Op._y * Dp,
          yp = pp._z * xp + cp._z * Lp + ip._z * Yp + Op._z * Dp;
        return new Pp(Ap, Wp, yp)
      }
      static Hermite1stDerivative(pp, ip, cp, Op, op) {
        const Ip = new Pp;
        return this.Hermite1stDerivativeToRef(pp, ip, cp, Op, op, Ip), Ip
      }
      static Hermite1stDerivativeToRef(pp, ip, cp, Op, op, Ip) {
        const Sp = op * op;
        return Ip._x = 6 * (Sp - op) * pp._x + (3 * Sp - 4 * op + 1) * ip._x + 6 * (-Sp + op) * cp._x + (3 * Sp - 2 * op) * Op._x, Ip._y = 6 * (Sp - op) * pp._y + (3 * Sp - 4 * op + 1) * ip._y + 6 * (-Sp + op) * cp._y + (3 * Sp - 2 * op) * Op._y, Ip._z = 6 * (Sp - op) * pp._z + (3 * Sp - 4 * op + 1) * ip._z + 6 * (-Sp + op) * cp._z + (3 * Sp - 2 * op) * Op._z, Ip._isDirty = !0, Ip
      }
      static Lerp(pp, ip, cp) {
        const Op = new Pp(0, 0, 0);
        return Pp.LerpToRef(pp, ip, cp, Op), Op
      }
      static LerpToRef(pp, ip, cp, Op) {
        return Op._x = pp._x + (ip._x - pp._x) * cp, Op._y = pp._y + (ip._y - pp._y) * cp, Op._z = pp._z + (ip._z - pp._z) * cp, Op._isDirty = !0, Op
      }
      static Dot(pp, ip) {
        return pp._x * ip._x + pp._y * ip._y + pp._z * ip._z
      }
      dot(pp) {
        return this._x * pp._x + this._y * pp._y + this._z * pp._z
      }
      static Cross(pp, ip) {
        const cp = new Pp;
        return Pp.CrossToRef(pp, ip, cp), cp
      }
      static CrossToRef(pp, ip, cp) {
        const Op = pp._y * ip._z - pp._z * ip._y,
          op = pp._z * ip._x - pp._x * ip._z,
          Ip = pp._x * ip._y - pp._y * ip._x;
        return cp.i5(Op, op, Ip), cp
      }
      static Normalize(pp) {
        const ip = Pp.Zero();
        return Pp.NormalizeToRef(pp, ip), ip
      }
      static NormalizeToRef(pp, ip) {
        return pp.normalizeToRef(ip), ip
      }
      static Project(pp, ip, cp, Op) {
        const op = new Pp;
        return Pp.ProjectToRef(pp, ip, cp, Op, op), op
      }
      static ProjectToRef(pp, ip, cp, Op, op) {
        const Ip = Op.width,
          xp = Op.height,
          Lp = Op.x,
          Yp = Op.y,
          Dp = wp.Matrix[1],
          Ap = Sp.e.LastCreatedEngine?.isNDCHalfZRange,
          Wp = Ap ? 1 : .5,
          yp = Ap ? 0 : .5;
        Up.FromValuesToRef(Ip / 2, 0, 0, 0, 0, -xp / 2, 0, 0, 0, 0, Wp, 0, Lp + Ip / 2, xp / 2 + Yp, yp, 1, Dp);
        const vp = wp.Matrix[0];
        return ip.multiplyToRef(cp, vp), vp.multiplyToRef(Dp, vp), Pp.TransformCoordinatesToRef(pp, vp, op), op
      }
      static Reflect(pp, ip) {
        return this.ReflectToRef(pp, ip, new Pp)
      }
      static ReflectToRef(pp, ip, cp) {
        const Op = vp.Zy[0];
        return Op.rM(ip).scaleInPlace(2 * Pp.Dot(pp, ip)), cp.rM(pp).Iop(Op)
      }
      static UnprojectFromTransform(pp, ip, cp, Op, op) {
        return this.Unproject(pp, ip, cp, Op, op, Up.IdentityReadOnly)
      }
      static Unproject(pp, ip, cp, Op, op, Ip) {
        const Sp = new Pp;
        return Pp.UnprojectToRef(pp, ip, cp, Op, op, Ip, Sp), Sp
      }
      static UnprojectToRef(pp, ip, cp, Op, op, Ip, Sp) {
        return Pp.UnprojectFloatsToRef(pp._x, pp._y, pp._z, ip, cp, Op, op, Ip, Sp), Sp
      }
      static UnprojectFloatsToRef(pp, ip, cp, Op, op, Ip, xp, Lp, Yp) {
        const Dp = wp.Matrix[0];
        Ip.multiplyToRef(xp, Dp), Dp.multiplyToRef(Lp, Dp), Dp.invert();
        const Ap = wp.Zy[0];
        return Ap.x = pp / Op * 2 - 1, Ap.y = -(ip / op * 2 - 1), Sp.e.LastCreatedEngine?.isNDCHalfZRange ? Ap.z = cp : Ap.z = 2 * cp - 1, Pp.TransformCoordinatesToRef(Ap, Dp, Yp), Yp
      }
      static Minimize(pp, ip) {
        const cp = new Pp;
        return cp.rM(pp), cp.minimizeInPlace(ip), cp
      }
      static Maximize(pp, ip) {
        const cp = new Pp;
        return cp.rM(pp), cp.maximizeInPlace(ip), cp
      }
      static Distance(pp, ip) {
        return Math.sqrt(Pp.DistanceSquared(pp, ip))
      }
      static DistanceSquared(pp, ip) {
        const cp = pp._x - ip._x,
          Op = pp._y - ip._y,
          op = pp._z - ip._z;
        return cp * cp + Op * Op + op * op
      }
      static ProjectOnTriangleToRef(pp, ip, cp, op, Ip) {
        const Sp = wp.Zy[0],
          Lp = wp.Zy[1],
          Yp = wp.Zy[2],
          Dp = wp.Zy[3],
          Ap = wp.Zy[4];
        cp.subtractToRef(ip, Sp), op.subtractToRef(ip, Lp), op.subtractToRef(cp, Yp);
        const Wp = Sp.length(),
          yp = Lp.length(),
          Up = Yp.length();
        if (Wp < Op.b || yp < Op.b || Up < Op.b) return Ip.rM(ip), Pp.Distance(pp, ip);
        pp.subtractToRef(ip, Ap), Pp.CrossToRef(Sp, Lp, Dp);
        const vp = Dp.length();
        if (vp < Op.b) return Ip.rM(ip), Pp.Distance(pp, ip);
        Dp.normalizeFromLength(vp);
        let tp = Ap.length();
        if (tp < Op.b) return Ip.rM(ip), 0;
        Ap.normalizeFromLength(tp);
        const Hp = Pp.Dot(Dp, Ap),
          dp = wp.Zy[5],
          ep = wp.Zy[6];
        dp.rM(Dp).scaleInPlace(-tp * Hp), ep.rM(pp).addInPlace(dp);
        const jp = wp.Zy[4],
          kp = wp.Zy[5],
          mp = wp.Zy[7],
          Rp = wp.Zy[8];
        jp.rM(Sp).scaleInPlace(1 / Wp), Rp.rM(Lp).scaleInPlace(1 / yp), jp.addInPlace(Rp).scaleInPlace(-1), kp.rM(Sp).scaleInPlace(-1 / Wp), Rp.rM(Yp).scaleInPlace(1 / Up), kp.addInPlace(Rp).scaleInPlace(-1), mp.rM(Yp).scaleInPlace(-1 / Up), Rp.rM(Lp).scaleInPlace(-1 / yp), mp.addInPlace(Rp).scaleInPlace(-1);
        const qp = wp.Zy[9];
        let Mp;
        qp.rM(ep).Iop(ip), Pp.CrossToRef(jp, qp, Rp), Mp = Pp.Dot(Rp, Dp);
        const Cp = Mp;
        qp.rM(ep).Iop(cp), Pp.CrossToRef(kp, qp, Rp), Mp = Pp.Dot(Rp, Dp);
        const Ep = Mp;
        qp.rM(ep).Iop(op), Pp.CrossToRef(mp, qp, Rp), Mp = Pp.Dot(Rp, Dp);
        const Xp = Mp,
          lp = wp.Zy[10];
        let Qp, Jp;
        Cp > 0 && Ep < 0 ? (lp.rM(Sp), Qp = ip, Jp = cp) : Ep > 0 && Xp < 0 ? (lp.rM(Yp), Qp = cp, Jp = op) : (lp.rM(Lp).scaleInPlace(-1), Qp = op, Jp = ip);
        const Bp = wp.Zy[9],
          Np = wp.Zy[4];
        Qp.subtractToRef(ep, Rp), Jp.subtractToRef(ep, Bp), Pp.CrossToRef(Rp, Bp, Np);
        if (!(Pp.Dot(Np, Dp) < 0)) return Ip.rM(ep), Math.abs(tp * Hp);
        const Tp = wp.Zy[5];
        Pp.CrossToRef(lp, Np, Tp), Tp.normalize();
        const fp = wp.Zy[9];
        fp.rM(Qp).Iop(ep);
        const bp = fp.length();
        if (bp < Op.b) return Ip.rM(Qp), Pp.Distance(pp, Qp);
        fp.normalizeFromLength(bp);
        const hp = Pp.Dot(Tp, fp),
          ap = wp.Zy[7];
        ap.rM(ep).addInPlace(Tp.scaleInPlace(bp * hp)), Rp.rM(ap).Iop(Qp), tp = lp.length(), lp.normalizeFromLength(tp);
        let np = Pp.Dot(Rp, lp) / Math.max(tp, Op.b);
        return np = (0, xp.Clamp)(np, 0, 1), ap.rM(Qp).addInPlace(lp.scaleInPlace(np * tp)), Ip.rM(ap), Pp.Distance(pp, ap)
      }
      static Center(pp, ip) {
        return Pp.CenterToRef(pp, ip, Pp.Zero())
      }
      static CenterToRef(pp, ip, cp) {
        return cp.i5((pp._x + ip._x) / 2, (pp._y + ip._y) / 2, (pp._z + ip._z) / 2)
      }
      static RotationFromAxis(pp, ip, cp) {
        const Op = new Pp;
        return Pp.RotationFromAxisToRef(pp, ip, cp, Op), Op
      }
      static RotationFromAxisToRef(pp, ip, cp, Op) {
        const op = wp.Quaternion[0];
        return yp.RotationQuaternionFromAxisToRef(pp, ip, cp, op), op.toEulerAnglesToRef(Op), Op
      }
    }
    Pp._V8PerformanceHack = new Pp(.5, .5, .5), Pp._UpReadOnly = Pp.Up(), Pp._DownReadOnly = Pp.Down(), Pp._LeftHandedForwardReadOnly = Pp.Forward(!1), Pp._RightHandedForwardReadOnly = Pp.Forward(!0), Pp._LeftHandedBackwardReadOnly = Pp.Backward(!1), Pp._RightHandedBackwardReadOnly = Pp.Backward(!0), Pp._RightReadOnly = Pp.Right(), Pp._LeftReadOnly = Pp.Left(), Pp._ZeroReadOnly = Pp.Zero(), Pp._OneReadOnly = Pp.One();
    class Wp {
      get x() {
        return this._x
      }
      set x(pp) {
        this._x = pp, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(pp) {
        this._y = pp, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(pp) {
        this._z = pp, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(pp) {
        this._w = pp, this._isDirty = !0
      }
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = pp, this._y = ip, this._z = cp, this._w = Op
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let pp = Dp(this._x);
        return pp = 397 * pp ^ Dp(this._y), pp = 397 * pp ^ Dp(this._z), pp = 397 * pp ^ Dp(this._w), pp
      }
      BOp() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(pp, ip) {
        return void 0 === ip && (ip = 0), pp[ip] = this._x, pp[ip + 1] = this._y, pp[ip + 2] = this._z, pp[ip + 3] = this._w, this
      }
      vcp(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Wp.FromArrayToRef(pp, ip, this), this
      }
      addInPlace(pp) {
        return this.x += pp._x, this.y += pp._y, this.z += pp._z, this.w += pp._w, this
      }
      addInPlaceFromFloats(pp, ip, cp, Op) {
        return this.x += pp, this.y += ip, this.z += cp, this.w += Op, this
      }
      add(pp) {
        return new Wp(this._x + pp.x, this._y + pp.y, this._z + pp.z, this._w + pp.w)
      }
      addToRef(pp, ip) {
        return ip.x = this._x + pp.x, ip.y = this._y + pp.y, ip.z = this._z + pp.z, ip.w = this._w + pp.w, ip
      }
      Iop(pp) {
        return this.x -= pp.x, this.y -= pp.y, this.z -= pp.z, this.w -= pp.w, this
      }
      subtract(pp) {
        return new Wp(this._x - pp.x, this._y - pp.y, this._z - pp.z, this._w - pp.w)
      }
      subtractToRef(pp, ip) {
        return ip.x = this._x - pp.x, ip.y = this._y - pp.y, ip.z = this._z - pp.z, ip.w = this._w - pp.w, ip
      }
      subtractFromFloats(pp, ip, cp, Op) {
        return new Wp(this._x - pp, this._y - ip, this._z - cp, this._w - Op)
      }
      subtractFromFloatsToRef(pp, ip, cp, Op, op) {
        return op.x = this._x - pp, op.y = this._y - ip, op.z = this._z - cp, op.w = this._w - Op, op
      }
      gp() {
        return new Wp(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(pp) {
        return pp.x = -this._x, pp.y = -this._y, pp.z = -this._z, pp.w = -this._w, pp
      }
      scaleInPlace(pp) {
        return this.x *= pp, this.y *= pp, this.z *= pp, this.w *= pp, this
      }
      scale(pp) {
        return new Wp(this._x * pp, this._y * pp, this._z * pp, this._w * pp)
      }
      scaleToRef(pp, ip) {
        return ip.x = this._x * pp, ip.y = this._y * pp, ip.z = this._z * pp, ip.w = this._w * pp, ip
      }
      scaleAndAddToRef(pp, ip) {
        return ip.x += this._x * pp, ip.y += this._y * pp, ip.z += this._z * pp, ip.w += this._w * pp, ip
      }
      equals(pp) {
        return pp && this._x === pp.x && this._y === pp.y && this._z === pp.z && this._w === pp.w
      }
      equalsWithEpsilon(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Op.b;
        return pp && (0, xp.WithinEpsilon)(this._x, pp.x, ip) && (0, xp.WithinEpsilon)(this._y, pp.y, ip) && (0, xp.WithinEpsilon)(this._z, pp.z, ip) && (0, xp.WithinEpsilon)(this._w, pp.w, ip)
      }
      jxp(pp, ip, cp, Op) {
        return this._x === pp && this._y === ip && this._z === cp && this._w === Op
      }
      multiplyInPlace(pp) {
        return this.x *= pp.x, this.y *= pp.y, this.z *= pp.z, this.w *= pp.w, this
      }
      multiply(pp) {
        return new Wp(this._x * pp.x, this._y * pp.y, this._z * pp.z, this._w * pp.w)
      }
      multiplyToRef(pp, ip) {
        return ip.x = this._x * pp.x, ip.y = this._y * pp.y, ip.z = this._z * pp.z, ip.w = this._w * pp.w, ip
      }
      multiplyByFloats(pp, ip, cp, Op) {
        return new Wp(this._x * pp, this._y * ip, this._z * cp, this._w * Op)
      }
      divide(pp) {
        return new Wp(this._x / pp.x, this._y / pp.y, this._z / pp.z, this._w / pp.w)
      }
      divideToRef(pp, ip) {
        return ip.x = this._x / pp.x, ip.y = this._y / pp.y, ip.z = this._z / pp.z, ip.w = this._w / pp.w, ip
      }
      divideInPlace(pp) {
        return this.divideToRef(pp, this)
      }
      minimizeInPlace(pp) {
        return pp.x < this._x && (this.x = pp.x), pp.y < this._y && (this.y = pp.y), pp.z < this._z && (this.z = pp.z), pp.w < this._w && (this.w = pp.w), this
      }
      maximizeInPlace(pp) {
        return pp.x > this._x && (this.x = pp.x), pp.y > this._y && (this.y = pp.y), pp.z > this._z && (this.z = pp.z), pp.w > this._w && (this.w = pp.w), this
      }
      minimizeInPlaceFromFloats(pp, ip, cp, Op) {
        return this.x = Math.min(pp, this._x), this.y = Math.min(ip, this._y), this.z = Math.min(cp, this._z), this.w = Math.min(Op, this._w), this
      }
      maximizeInPlaceFromFloats(pp, ip, cp, Op) {
        return this.x = Math.max(pp, this._x), this.y = Math.max(ip, this._y), this.z = Math.max(cp, this._z), this.w = Math.max(Op, this._w), this
      }
      floorToRef(pp) {
        return pp.x = Math.floor(this._x), pp.y = Math.floor(this._y), pp.z = Math.floor(this._z), pp.w = Math.floor(this._w), pp
      }
      floor() {
        return new Wp(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(pp) {
        return pp.x = this._x - Math.floor(this._x), pp.y = this._y - Math.floor(this._y), pp.z = this._z - Math.floor(this._z), pp.w = this._w - Math.floor(this._w), pp
      }
      fract() {
        return new Wp(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
      }
      length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
      }
      lengthSquared() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
      }
      normalize() {
        return this.normalizeFromLength(this.length())
      }
      normalizeFromLength(pp) {
        return 0 === pp || 1 === pp ? this : this.scaleInPlace(1 / pp)
      }
      normalizeToNew() {
        return this.normalizeToRef(new Wp)
      }
      normalizeToRef(pp) {
        const ip = this.length();
        return 0 === ip || 1 === ip ? (pp.x = this._x, pp.y = this._y, pp.z = this._z, pp.w = this._w, pp) : this.scaleToRef(1 / ip, pp)
      }
      toVector3() {
        return new Pp(this._x, this._y, this._z)
      }
      clone() {
        return new Wp(this._x, this._y, this._z, this._w)
      }
      rM(pp) {
        return this.x = pp.x, this.y = pp.y, this.z = pp.z, this.w = pp.w, this
      }
      i5(pp, ip, cp, Op) {
        return this.x = pp, this.y = ip, this.z = cp, this.w = Op, this
      }
      set(pp, ip, cp, Op) {
        return this.i5(pp, ip, cp, Op)
      }
      E_(pp) {
        return this.x = this.y = this.z = this.w = pp, this
      }
      dot(pp) {
        return this._x * pp.x + this._y * pp.y + this._z * pp.z + this._w * pp.w
      }
      static FromArray(pp, ip) {
        return ip || (ip = 0), new Wp(pp[ip], pp[ip + 1], pp[ip + 2], pp[ip + 3])
      }
      static FromArrayToRef(pp, ip, cp) {
        return cp.x = pp[ip], cp.y = pp[ip + 1], cp.z = pp[ip + 2], cp.w = pp[ip + 3], cp
      }
      static FromFloatArrayToRef(pp, ip, cp) {
        return Wp.FromArrayToRef(pp, ip, cp), cp
      }
      static FromFloatsToRef(pp, ip, cp, Op, op) {
        return op.x = pp, op.y = ip, op.z = cp, op.w = Op, op
      }
      static Zero() {
        return new Wp(0, 0, 0, 0)
      }
      static One() {
        return new Wp(1, 1, 1, 1)
      }
      static Random() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Wp((0, xp.RandomRange)(pp, ip), (0, xp.RandomRange)(pp, ip), (0, xp.RandomRange)(pp, ip), (0, xp.RandomRange)(pp, ip))
      }
      static RandomToRef() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        return cp.x = (0, xp.RandomRange)(pp, ip), cp.y = (0, xp.RandomRange)(pp, ip), cp.z = (0, xp.RandomRange)(pp, ip), cp.w = (0, xp.RandomRange)(pp, ip), cp
      }
      static Clamp(pp, ip, cp) {
        return Wp.ClampToRef(pp, ip, cp, new Wp)
      }
      static ClampToRef(pp, ip, cp, Op) {
        return Op.x = (0, xp.Clamp)(pp.x, ip.x, cp.x), Op.y = (0, xp.Clamp)(pp.y, ip.y, cp.y), Op.z = (0, xp.Clamp)(pp.z, ip.z, cp.z), Op.w = (0, xp.Clamp)(pp.w, ip.w, cp.w), Op
      }
      static CheckExtends(pp, ip, cp) {
        ip.minimizeInPlace(pp), cp.maximizeInPlace(pp)
      }
      static get ZeroReadOnly() {
        return Wp._ZeroReadOnly
      }
      static Normalize(pp) {
        return Wp.NormalizeToRef(pp, new Wp)
      }
      static NormalizeToRef(pp, ip) {
        return pp.normalizeToRef(ip), ip
      }
      static Minimize(pp, ip) {
        const cp = new Wp;
        return cp.rM(pp), cp.minimizeInPlace(ip), cp
      }
      static Maximize(pp, ip) {
        const cp = new Wp;
        return cp.rM(pp), cp.maximizeInPlace(ip), cp
      }
      static Distance(pp, ip) {
        return Math.sqrt(Wp.DistanceSquared(pp, ip))
      }
      static DistanceSquared(pp, ip) {
        const cp = pp.x - ip.x,
          Op = pp.y - ip.y,
          op = pp.z - ip.z,
          Ip = pp.w - ip.w;
        return cp * cp + Op * Op + op * op + Ip * Ip
      }
      static Center(pp, ip) {
        return Wp.CenterToRef(pp, ip, new Wp)
      }
      static CenterToRef(pp, ip, cp) {
        return cp.x = (pp.x + ip.x) / 2, cp.y = (pp.y + ip.y) / 2, cp.z = (pp.z + ip.z) / 2, cp.w = (pp.w + ip.w) / 2, cp
      }
      static TransformCoordinates(pp, ip) {
        return Wp.TransformCoordinatesToRef(pp, ip, new Wp)
      }
      static TransformCoordinatesToRef(pp, ip, cp) {
        return Wp.TransformCoordinatesFromFloatsToRef(pp._x, pp._y, pp._z, ip, cp), cp
      }
      static TransformCoordinatesFromFloatsToRef(pp, ip, cp, Op, op) {
        const Ip = Op.m,
          Sp = pp * Ip[0] + ip * Ip[4] + cp * Ip[8] + Ip[12],
          xp = pp * Ip[1] + ip * Ip[5] + cp * Ip[9] + Ip[13],
          Lp = pp * Ip[2] + ip * Ip[6] + cp * Ip[10] + Ip[14],
          Yp = pp * Ip[3] + ip * Ip[7] + cp * Ip[11] + Ip[15];
        return op.x = Sp, op.y = xp, op.z = Lp, op.w = Yp, op
      }
      static TransformNormal(pp, ip) {
        return Wp.TransformNormalToRef(pp, ip, new Wp)
      }
      static TransformNormalToRef(pp, ip, cp) {
        const Op = ip.m,
          op = pp.x * Op[0] + pp.y * Op[4] + pp.z * Op[8],
          Ip = pp.x * Op[1] + pp.y * Op[5] + pp.z * Op[9],
          Sp = pp.x * Op[2] + pp.y * Op[6] + pp.z * Op[10];
        return cp.x = op, cp.y = Ip, cp.z = Sp, cp.w = pp.w, cp
      }
      static TransformNormalFromFloatsToRef(pp, ip, cp, Op, op, Ip) {
        const Sp = op.m;
        return Ip.x = pp * Sp[0] + ip * Sp[4] + cp * Sp[8], Ip.y = pp * Sp[1] + ip * Sp[5] + cp * Sp[9], Ip.z = pp * Sp[2] + ip * Sp[6] + cp * Sp[10], Ip.w = Op, Ip
      }
      static FromVector3(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Wp(pp._x, pp._y, pp._z, ip)
      }
      static Dot(pp, ip) {
        return pp.x * ip.x + pp.y * ip.y + pp.z * ip.z + pp.w * ip.w
      }
    }
    Wp._V8PerformanceHack = new Wp(.5, .5, .5, .5), Wp._ZeroReadOnly = Wp.Zero();
    class yp {
      get x() {
        return this._x
      }
      set x(pp) {
        this._x = pp, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(pp) {
        this._y = pp, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(pp) {
        this._z = pp, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(pp) {
        this._w = pp, this._isDirty = !0
      }
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = pp, this._y = ip, this._z = cp, this._w = Op
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let pp = Dp(this._x);
        return pp = 397 * pp ^ Dp(this._y), pp = 397 * pp ^ Dp(this._z), pp = 397 * pp ^ Dp(this._w), pp
      }
      BOp() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return pp[ip] = this._x, pp[ip + 1] = this._y, pp[ip + 2] = this._z, pp[ip + 3] = this._w, this
      }
      vcp(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return yp.FromArrayToRef(pp, ip, this)
      }
      equals(pp) {
        return pp && this._x === pp._x && this._y === pp._y && this._z === pp._z && this._w === pp._w
      }
      equalsWithEpsilon(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Op.b;
        return pp && (0, xp.WithinEpsilon)(this._x, pp._x, ip) && (0, xp.WithinEpsilon)(this._y, pp._y, ip) && (0, xp.WithinEpsilon)(this._z, pp._z, ip) && (0, xp.WithinEpsilon)(this._w, pp._w, ip)
      }
      isApprox(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Op.b;
        return pp && ((0, xp.WithinEpsilon)(this._x, pp._x, ip) && (0, xp.WithinEpsilon)(this._y, pp._y, ip) && (0, xp.WithinEpsilon)(this._z, pp._z, ip) && (0, xp.WithinEpsilon)(this._w, pp._w, ip) || (0, xp.WithinEpsilon)(this._x, -pp._x, ip) && (0, xp.WithinEpsilon)(this._y, -pp._y, ip) && (0, xp.WithinEpsilon)(this._z, -pp._z, ip) && (0, xp.WithinEpsilon)(this._w, -pp._w, ip))
      }
      clone() {
        return new yp(this._x, this._y, this._z, this._w)
      }
      rM(pp) {
        return this._x = pp._x, this._y = pp._y, this._z = pp._z, this._w = pp._w, this._isDirty = !0, this
      }
      i5(pp, ip, cp, Op) {
        return this._x = pp, this._y = ip, this._z = cp, this._w = Op, this._isDirty = !0, this
      }
      set(pp, ip, cp, Op) {
        return this.i5(pp, ip, cp, Op)
      }
      E_(pp) {
        return this.i5(pp, pp, pp, pp)
      }
      add(pp) {
        return new yp(this._x + pp._x, this._y + pp._y, this._z + pp._z, this._w + pp._w)
      }
      addInPlace(pp) {
        return this._x += pp._x, this._y += pp._y, this._z += pp._z, this._w += pp._w, this._isDirty = !0, this
      }
      addToRef(pp, ip) {
        return ip._x = this._x + pp._x, ip._y = this._y + pp._y, ip._z = this._z + pp._z, ip._w = this._w + pp._w, ip._isDirty = !0, ip
      }
      addInPlaceFromFloats(pp, ip, cp, Op) {
        return this._x += pp, this._y += ip, this._z += cp, this._w += Op, this._isDirty = !0, this
      }
      subtractToRef(pp, ip) {
        return ip._x = this._x - pp._x, ip._y = this._y - pp._y, ip._z = this._z - pp._z, ip._w = this._w - pp._w, ip._isDirty = !0, ip
      }
      subtractFromFloats(pp, ip, cp, Op) {
        return this.subtractFromFloatsToRef(pp, ip, cp, Op, new yp)
      }
      subtractFromFloatsToRef(pp, ip, cp, Op, op) {
        return op._x = this._x - pp, op._y = this._y - ip, op._z = this._z - cp, op._w = this._w - Op, op._isDirty = !0, op
      }
      subtract(pp) {
        return new yp(this._x - pp._x, this._y - pp._y, this._z - pp._z, this._w - pp._w)
      }
      Iop(pp) {
        return this._x -= pp._x, this._y -= pp._y, this._z -= pp._z, this._w -= pp._w, this._isDirty = !0, this
      }
      scale(pp) {
        return new yp(this._x * pp, this._y * pp, this._z * pp, this._w * pp)
      }
      scaleToRef(pp, ip) {
        return ip._x = this._x * pp, ip._y = this._y * pp, ip._z = this._z * pp, ip._w = this._w * pp, ip._isDirty = !0, ip
      }
      scaleInPlace(pp) {
        return this._x *= pp, this._y *= pp, this._z *= pp, this._w *= pp, this._isDirty = !0, this
      }
      scaleAndAddToRef(pp, ip) {
        return ip._x += this._x * pp, ip._y += this._y * pp, ip._z += this._z * pp, ip._w += this._w * pp, ip._isDirty = !0, ip
      }
      multiply(pp) {
        const ip = new yp(0, 0, 0, 1);
        return this.multiplyToRef(pp, ip), ip
      }
      multiplyToRef(pp, ip) {
        const cp = this._x * pp._w + this._y * pp._z - this._z * pp._y + this._w * pp._x,
          Op = -this._x * pp._z + this._y * pp._w + this._z * pp._x + this._w * pp._y,
          op = this._x * pp._y - this._y * pp._x + this._z * pp._w + this._w * pp._z,
          Ip = -this._x * pp._x - this._y * pp._y - this._z * pp._z + this._w * pp._w;
        return ip.i5(cp, Op, op, Ip), ip
      }
      multiplyInPlace(pp) {
        return this.multiplyToRef(pp, this)
      }
      multiplyByFloats(pp, ip, cp, Op) {
        return this._x *= pp, this._y *= ip, this._z *= cp, this._w *= Op, this._isDirty = !0, this
      }
      divide(pp) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(pp, ip) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(pp) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      minimizeInPlace() {
        throw new ReferenceError("Can not minimize a quaternion")
      }
      minimizeInPlaceFromFloats() {
        throw new ReferenceError("Can not minimize a quaternion")
      }
      maximizeInPlace() {
        throw new ReferenceError("Can not maximize a quaternion")
      }
      maximizeInPlaceFromFloats() {
        throw new ReferenceError("Can not maximize a quaternion")
      }
      gp() {
        return this.negateToRef(new yp)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(pp) {
        return pp._x = -this._x, pp._y = -this._y, pp._z = -this._z, pp._w = -this._w, pp._isDirty = !0, pp
      }
      jxp(pp, ip, cp, Op) {
        return this._x === pp && this._y === ip && this._z === cp && this._w === Op
      }
      floorToRef(pp) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(pp) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(pp) {
        return pp.i5(-this._x, -this._y, -this._z, this._w), pp
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new yp(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const pp = this.conjugate(),
          ip = this.lengthSquared();
        return 0 == ip || 1 == ip || pp.scaleInPlace(1 / ip), pp
      }
      invertInPlace() {
        this.conjugateInPlace();
        const pp = this.lengthSquared();
        return 0 == pp || 1 == pp || this.scaleInPlace(1 / pp), this
      }
      lengthSquared() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
      }
      length() {
        return Math.sqrt(this.lengthSquared())
      }
      normalize() {
        return this.normalizeFromLength(this.length())
      }
      normalizeFromLength(pp) {
        return 0 === pp || 1 === pp ? this : this.scaleInPlace(1 / pp)
      }
      normalizeToNew() {
        const pp = new yp(0, 0, 0, 1);
        return this.normalizeToRef(pp), pp
      }
      normalizeToRef(pp) {
        const ip = this.length();
        return 0 === ip || 1 === ip ? pp.i5(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / ip, pp)
      }
      toEulerAngles() {
        const pp = Pp.Zero();
        return this.toEulerAnglesToRef(pp), pp
      }
      toEulerAnglesToRef(pp) {
        const ip = this._z,
          cp = this._x,
          Op = this._y,
          op = this._w,
          Ip = Op * ip - cp * op,
          Sp = .4999999;
        if (Ip < -Sp) pp._y = 2 * Math.atan2(Op, op), pp._x = Math.PI / 2, pp._z = 0, pp._isDirty = !0;
        else if (Ip > Sp) pp._y = 2 * Math.atan2(Op, op), pp._x = -Math.PI / 2, pp._z = 0, pp._isDirty = !0;
        else {
          const Sp = op * op,
            xp = ip * ip,
            Lp = cp * cp,
            Yp = Op * Op;
          pp._z = Math.atan2(2 * (cp * Op + ip * op), -xp - Lp + Yp + Sp), pp._x = Math.asin(-2 * Ip), pp._y = Math.atan2(2 * (ip * cp + Op * op), xp - Lp - Yp + Sp), pp._isDirty = !0
        }
        return pp
      }
      toAlphaBetaGammaToRef(pp) {
        const ip = this._z,
          cp = this._x,
          Op = this._y,
          op = this._w,
          Ip = Math.sqrt(cp * cp + Op * Op),
          Sp = Math.sqrt(ip * ip + op * op),
          xp = 2 * Math.atan2(Ip, Sp),
          Lp = 2 * Math.atan2(ip, op),
          Yp = 2 * Math.atan2(Op, cp),
          Dp = (Lp + Yp) / 2,
          Ap = (Lp - Yp) / 2;
        return pp.set(Ap, xp, Dp), pp
      }
      toRotationMatrix(pp) {
        return Up.FromQuaternionToRef(this, pp), pp
      }
      fromRotationMatrix(pp) {
        return yp.FromRotationMatrixToRef(pp, this), this
      }
      dot(pp) {
        return this._x * pp._x + this._y * pp._y + this._z * pp._z + this._w * pp._w
      }
      toAxisAngle() {
        const pp = Pp.Zero();
        return {
          axis: pp,
          angle: this.toAxisAngleToRef(pp)
        }
      }
      toAxisAngleToRef(pp) {
        let ip;
        const cp = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          Op = this._w;
        return cp > 0 ? (ip = 2 * Math.atan2(cp, Op), pp.set(this._x / cp, this._y / cp, this._z / cp)) : (ip = 0, pp.set(1, 0, 0)), ip
      }
      static FromRotationMatrix(pp) {
        const ip = new yp;
        return yp.FromRotationMatrixToRef(pp, ip), ip
      }
      static FromRotationMatrixToRef(pp, ip) {
        const cp = pp.m,
          Op = cp[0],
          op = cp[4],
          Ip = cp[8],
          Sp = cp[1],
          xp = cp[5],
          Lp = cp[9],
          Yp = cp[2],
          Dp = cp[6],
          Ap = cp[10],
          Pp = Op + xp + Ap;
        let Wp;
        return Pp > 0 ? (Wp = .5 / Math.sqrt(Pp + 1), ip._w = .25 / Wp, ip._x = (Dp - Lp) * Wp, ip._y = (Ip - Yp) * Wp, ip._z = (Sp - op) * Wp, ip._isDirty = !0) : Op > xp && Op > Ap ? (Wp = 2 * Math.sqrt(1 + Op - xp - Ap), ip._w = (Dp - Lp) / Wp, ip._x = .25 * Wp, ip._y = (op + Sp) / Wp, ip._z = (Ip + Yp) / Wp, ip._isDirty = !0) : xp > Ap ? (Wp = 2 * Math.sqrt(1 + xp - Op - Ap), ip._w = (Ip - Yp) / Wp, ip._x = (op + Sp) / Wp, ip._y = .25 * Wp, ip._z = (Lp + Dp) / Wp, ip._isDirty = !0) : (Wp = 2 * Math.sqrt(1 + Ap - Op - xp), ip._w = (Sp - op) / Wp, ip._x = (Ip + Yp) / Wp, ip._y = (Lp + Dp) / Wp, ip._z = .25 * Wp, ip._isDirty = !0), ip
      }
      static Dot(pp, ip) {
        return pp._x * ip._x + pp._y * ip._y + pp._z * ip._z + pp._w * ip._w
      }
      static AreClose(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const Op = yp.Dot(pp, ip);
        return 1 - Op * Op <= cp
      }
      static SmoothToRef(pp, ip, cp, Op, op) {
        let Ip = 0 === Op ? 1 : cp / Op;
        return Ip = (0, xp.Clamp)(Ip, 0, 1), yp.SlerpToRef(pp, ip, Ip, op), op
      }
      static Zero() {
        return new yp(0, 0, 0, 0)
      }
      static Inverse(pp) {
        return new yp(-pp._x, -pp._y, -pp._z, pp._w)
      }
      static InverseToRef(pp, ip) {
        return ip.set(-pp._x, -pp._y, -pp._z, pp._w), ip
      }
      static Identity() {
        return new yp(0, 0, 0, 1)
      }
      static IsIdentity(pp) {
        return pp && 0 === pp._x && 0 === pp._y && 0 === pp._z && 1 === pp._w
      }
      static RotationAxis(pp, ip) {
        return yp.RotationAxisToRef(pp, ip, new yp)
      }
      static RotationAxisToRef(pp, ip, cp) {
        cp._w = Math.cos(ip / 2);
        const Op = Math.sin(ip / 2) / pp.length();
        return cp._x = pp._x * Op, cp._y = pp._y * Op, cp._z = pp._z * Op, cp._isDirty = !0, cp
      }
      static FromArray(pp, ip) {
        return ip || (ip = 0), new yp(pp[ip], pp[ip + 1], pp[ip + 2], pp[ip + 3])
      }
      static FromArrayToRef(pp, ip, cp) {
        return cp._x = pp[ip], cp._y = pp[ip + 1], cp._z = pp[ip + 2], cp._w = pp[ip + 3], cp._isDirty = !0, cp
      }
      static FromFloatsToRef(pp, ip, cp, Op, op) {
        return op.i5(pp, ip, cp, Op), op
      }
      static FromEulerAngles(pp, ip, cp) {
        const Op = new yp;
        return yp.RotationYawPitchRollToRef(ip, pp, cp, Op), Op
      }
      static FromEulerAnglesToRef(pp, ip, cp, Op) {
        return yp.RotationYawPitchRollToRef(ip, pp, cp, Op), Op
      }
      static FromEulerVector(pp) {
        const ip = new yp;
        return yp.RotationYawPitchRollToRef(pp._y, pp._x, pp._z, ip), ip
      }
      static FromEulerVectorToRef(pp, ip) {
        return yp.RotationYawPitchRollToRef(pp._y, pp._x, pp._z, ip), ip
      }
      static FromUnitVectorsToRef(pp, ip, cp) {
        let op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Op.b;
        const Ip = Pp.Dot(pp, ip) + 1;
        return Ip < op ? Math.abs(pp.x) > Math.abs(pp.z) ? cp.set(-pp.y, pp.x, 0, 0) : cp.set(0, -pp.z, pp.y, 0) : (Pp.CrossToRef(pp, ip, vp.Zy[0]), cp.set(vp.Zy[0].x, vp.Zy[0].y, vp.Zy[0].z, Ip)), cp.normalize()
      }
      static RotationYawPitchRoll(pp, ip, cp) {
        const Op = new yp;
        return yp.RotationYawPitchRollToRef(pp, ip, cp, Op), Op
      }
      static RotationYawPitchRollToRef(pp, ip, cp, Op) {
        const op = .5 * cp,
          Ip = .5 * ip,
          Sp = .5 * pp,
          xp = Math.sin(op),
          Lp = Math.cos(op),
          Yp = Math.sin(Ip),
          Dp = Math.cos(Ip),
          Ap = Math.sin(Sp),
          Pp = Math.cos(Sp);
        return Op._x = Pp * Yp * Lp + Ap * Dp * xp, Op._y = Ap * Dp * Lp - Pp * Yp * xp, Op._z = Pp * Dp * xp - Ap * Yp * Lp, Op._w = Pp * Dp * Lp + Ap * Yp * xp, Op._isDirty = !0, Op
      }
      static RotationAlphaBetaGamma(pp, ip, cp) {
        const Op = new yp;
        return yp.RotationAlphaBetaGammaToRef(pp, ip, cp, Op), Op
      }
      static RotationAlphaBetaGammaToRef(pp, ip, cp, Op) {
        const op = .5 * (cp + pp),
          Ip = .5 * (cp - pp),
          Sp = .5 * ip;
        return Op._x = Math.cos(Ip) * Math.sin(Sp), Op._y = Math.sin(Ip) * Math.sin(Sp), Op._z = Math.sin(op) * Math.cos(Sp), Op._w = Math.cos(op) * Math.cos(Sp), Op._isDirty = !0, Op
      }
      static RotationQuaternionFromAxis(pp, ip, cp) {
        const Op = new yp(0, 0, 0, 0);
        return yp.RotationQuaternionFromAxisToRef(pp, ip, cp, Op), Op
      }
      static RotationQuaternionFromAxisToRef(pp, ip, cp, Op) {
        const op = wp.Matrix[0];
        return pp = pp.normalizeToRef(wp.Zy[0]), ip = ip.normalizeToRef(wp.Zy[1]), cp = cp.normalizeToRef(wp.Zy[2]), Up.FromXYZAxesToRef(pp, ip, cp, op), yp.FromRotationMatrixToRef(op, Op), Op
      }
      static FromLookDirectionLH(pp, ip) {
        const cp = new yp;
        return yp.FromLookDirectionLHToRef(pp, ip, cp), cp
      }
      static FromLookDirectionLHToRef(pp, ip, cp) {
        const Op = wp.Matrix[0];
        return Up.LookDirectionLHToRef(pp, ip, Op), yp.FromRotationMatrixToRef(Op, cp), cp
      }
      static FromLookDirectionRH(pp, ip) {
        const cp = new yp;
        return yp.FromLookDirectionRHToRef(pp, ip, cp), cp
      }
      static FromLookDirectionRHToRef(pp, ip, cp) {
        const Op = wp.Matrix[0];
        return Up.LookDirectionRHToRef(pp, ip, Op), yp.FromRotationMatrixToRef(Op, cp)
      }
      static Slerp(pp, ip, cp) {
        const Op = yp.Identity();
        return yp.SlerpToRef(pp, ip, cp, Op), Op
      }
      static SlerpToRef(pp, ip, cp, Op) {
        let op, Ip, Sp = pp._x * ip._x + pp._y * ip._y + pp._z * ip._z + pp._w * ip._w,
          xp = !1;
        if (Sp < 0 && (xp = !0, Sp = -Sp), Sp > .999999) Ip = 1 - cp, op = xp ? -cp : cp;
        else {
          const pp = Math.acos(Sp),
            ip = 1 / Math.sin(pp);
          Ip = Math.sin((1 - cp) * pp) * ip, op = xp ? -Math.sin(cp * pp) * ip : Math.sin(cp * pp) * ip
        }
        return Op._x = Ip * pp._x + op * ip._x, Op._y = Ip * pp._y + op * ip._y, Op._z = Ip * pp._z + op * ip._z, Op._w = Ip * pp._w + op * ip._w, Op._isDirty = !0, Op
      }
      static Hermite(pp, ip, cp, Op, op) {
        const Ip = op * op,
          Sp = op * Ip,
          xp = 2 * Sp - 3 * Ip + 1,
          Lp = -2 * Sp + 3 * Ip,
          Yp = Sp - 2 * Ip + op,
          Dp = Sp - Ip,
          Ap = pp._x * xp + cp._x * Lp + ip._x * Yp + Op._x * Dp,
          Pp = pp._y * xp + cp._y * Lp + ip._y * Yp + Op._y * Dp,
          Wp = pp._z * xp + cp._z * Lp + ip._z * Yp + Op._z * Dp,
          Up = pp._w * xp + cp._w * Lp + ip._w * Yp + Op._w * Dp;
        return new yp(Ap, Pp, Wp, Up)
      }
      static Hermite1stDerivative(pp, ip, cp, Op, op) {
        const Ip = new yp;
        return this.Hermite1stDerivativeToRef(pp, ip, cp, Op, op, Ip), Ip
      }
      static Hermite1stDerivativeToRef(pp, ip, cp, Op, op, Ip) {
        const Sp = op * op;
        return Ip._x = 6 * (Sp - op) * pp._x + (3 * Sp - 4 * op + 1) * ip._x + 6 * (-Sp + op) * cp._x + (3 * Sp - 2 * op) * Op._x, Ip._y = 6 * (Sp - op) * pp._y + (3 * Sp - 4 * op + 1) * ip._y + 6 * (-Sp + op) * cp._y + (3 * Sp - 2 * op) * Op._y, Ip._z = 6 * (Sp - op) * pp._z + (3 * Sp - 4 * op + 1) * ip._z + 6 * (-Sp + op) * cp._z + (3 * Sp - 2 * op) * Op._z, Ip._w = 6 * (Sp - op) * pp._w + (3 * Sp - 4 * op + 1) * ip._w + 6 * (-Sp + op) * cp._w + (3 * Sp - 2 * op) * Op._w, Ip._isDirty = !0, Ip
      }
      static Normalize(pp) {
        const ip = yp.Zero();
        return yp.NormalizeToRef(pp, ip), ip
      }
      static NormalizeToRef(pp, ip) {
        return pp.normalizeToRef(ip), ip
      }
      static Clamp(pp, ip, cp) {
        const Op = new yp;
        return yp.ClampToRef(pp, ip, cp, Op), Op
      }
      static ClampToRef(pp, ip, cp, Op) {
        return Op.i5((0, xp.Clamp)(pp.x, ip.x, cp.x), (0, xp.Clamp)(pp.y, ip.y, cp.y), (0, xp.Clamp)(pp.z, ip.z, cp.z), (0, xp.Clamp)(pp.w, ip.w, cp.w))
      }
      static Random() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new yp((0, xp.RandomRange)(pp, ip), (0, xp.RandomRange)(pp, ip), (0, xp.RandomRange)(pp, ip), (0, xp.RandomRange)(pp, ip))
      }
      static RandomToRef() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).i5((0, xp.RandomRange)(pp, ip), (0, xp.RandomRange)(pp, ip), (0, xp.RandomRange)(pp, ip), (0, xp.RandomRange)(pp, ip))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(pp, ip) {
        return Math.sqrt(yp.DistanceSquared(pp, ip))
      }
      static DistanceSquared(pp, ip) {
        const cp = pp.x - ip.x,
          Op = pp.y - ip.y,
          op = pp.z - ip.z,
          Ip = pp.w - ip.w;
        return cp * cp + Op * Op + op * op + Ip * Ip
      }
      static Center(pp, ip) {
        return yp.CenterToRef(pp, ip, yp.Zero())
      }
      static CenterToRef(pp, ip, cp) {
        return cp.i5((pp.x + ip.x) / 2, (pp.y + ip.y) / 2, (pp.z + ip.z) / 2, (pp.w + ip.w) / 2)
      }
    }
    yp._V8PerformanceHack = new yp(.5, .5, .5, .5);
    class Up {
      static get Use64Bits() {
        return Ip.e.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = Lp.j._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Op = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = pp, this._isIdentity3x2 = pp || cp, this._isIdentityDirty = !this._isIdentity && ip, this._isIdentity3x2Dirty = !this._isIdentity3x2 && Op
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, Ip.e.MatrixTrackPrecisionChange && Ip.e.MatrixTrackedMatrices.push(this), this._m = new Ip.e.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const pp = this._m;
          this._isIdentity = 1 === pp[0] && 0 === pp[1] && 0 === pp[2] && 0 === pp[3] && 0 === pp[4] && 1 === pp[5] && 0 === pp[6] && 0 === pp[7] && 0 === pp[8] && 0 === pp[9] && 1 === pp[10] && 0 === pp[11] && 0 === pp[12] && 0 === pp[13] && 0 === pp[14] && 1 === pp[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const pp = this._m,
          ip = pp[0],
          cp = pp[1],
          Op = pp[2],
          op = pp[3],
          Ip = pp[4],
          Sp = pp[5],
          xp = pp[6],
          Lp = pp[7],
          Yp = pp[8],
          Dp = pp[9],
          Ap = pp[10],
          Pp = pp[11],
          Wp = pp[12],
          yp = pp[13],
          Up = pp[14],
          wp = pp[15],
          vp = Ap * wp - Up * Pp,
          tp = Dp * wp - yp * Pp,
          Hp = Dp * Up - yp * Ap,
          dp = Yp * wp - Wp * Pp,
          ep = Yp * Up - Ap * Wp,
          jp = Yp * yp - Wp * Dp;
        return ip * +(Sp * vp - xp * tp + Lp * Hp) + cp * -(Ip * vp - xp * dp + Lp * ep) + Op * +(Ip * tp - Sp * dp + Lp * jp) + op * -(Ip * Hp - Sp * ep + xp * jp)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!pp) return this._m;
        const cp = this._m;
        for (let Op = 0; Op < 16; Op++) pp[ip + Op] = cp[Op];
        return this
      }
      BOp() {
        return this._m
      }
      vcp(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Up.FromArrayToRef(pp, ip, this)
      }
      i5() {
        for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
        return Up.FromArrayToRef(ip, 0, this)
      }
      set() {
        const pp = this._m;
        for (let ip = 0; ip < 16; ip++) pp[ip] = ip < 0 || arguments.length <= ip ? void 0 : arguments[ip];
        return this.markAsUpdated(), this
      }
      E_(pp) {
        const ip = this._m;
        for (let cp = 0; cp < 16; cp++) ip[cp] = pp;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return Up.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(pp) {
        const ip = new Up;
        return this.addToRef(pp, ip), ip
      }
      addToRef(pp, ip) {
        const cp = this._m,
          Op = ip._m,
          op = pp.m;
        for (let Ip = 0; Ip < 16; Ip++) Op[Ip] = cp[Ip] + op[Ip];
        return ip.markAsUpdated(), ip
      }
      addToSelf(pp) {
        const ip = this._m,
          cp = pp.m;
        return ip[0] += cp[0], ip[1] += cp[1], ip[2] += cp[2], ip[3] += cp[3], ip[4] += cp[4], ip[5] += cp[5], ip[6] += cp[6], ip[7] += cp[7], ip[8] += cp[8], ip[9] += cp[9], ip[10] += cp[10], ip[11] += cp[11], ip[12] += cp[12], ip[13] += cp[13], ip[14] += cp[14], ip[15] += cp[15], this.markAsUpdated(), this
      }
      addInPlace(pp) {
        const ip = this._m,
          cp = pp.m;
        for (let Op = 0; Op < 16; Op++) ip[Op] += cp[Op];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const pp = this._m;
        for (let ip = 0; ip < 16; ip++) pp[ip] += ip < 0 || arguments.length <= ip ? void 0 : arguments[ip];
        return this.markAsUpdated(), this
      }
      subtract(pp) {
        const ip = this._m,
          cp = pp.m;
        for (let Op = 0; Op < 16; Op++) ip[Op] -= cp[Op];
        return this.markAsUpdated(), this
      }
      subtractToRef(pp, ip) {
        const cp = this._m,
          Op = pp.m,
          op = ip._m;
        for (let Ip = 0; Ip < 16; Ip++) op[Ip] = cp[Ip] - Op[Ip];
        return ip.markAsUpdated(), ip
      }
      Iop(pp) {
        const ip = this._m,
          cp = pp.m;
        for (let Op = 0; Op < 16; Op++) ip[Op] -= cp[Op];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
        return this.subtractFromFloatsToRef(...ip, new Up)
      }
      subtractFromFloatsToRef() {
        for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
        const Op = ip.pop(),
          op = this._m,
          Ip = Op._m,
          Sp = ip;
        for (let xp = 0; xp < 16; xp++) Ip[xp] = op[xp] - Sp[xp];
        return Op.markAsUpdated(), Op
      }
      invertToRef(pp) {
        return !0 === this._isIdentity ? (Up.IdentityToRef(pp), pp) : ((0, Lp.e)(this, pp.BOp()) ? pp.markAsUpdated() : pp.rM(this), pp)
      }
      addAtIndex(pp, ip) {
        return this._m[pp] += ip, this.markAsUpdated(), this
      }
      multiplyAtIndex(pp, ip) {
        return this._m[pp] *= ip, this.markAsUpdated(), this
      }
      setTranslationFromFloats(pp, ip, cp) {
        return this._m[12] = pp, this._m[13] = ip, this._m[14] = cp, this.markAsUpdated(), this
      }
      addTranslationFromFloats(pp, ip, cp) {
        return this._m[12] += pp, this._m[13] += ip, this._m[14] += cp, this.markAsUpdated(), this
      }
      setTranslation(pp) {
        return this.setTranslationFromFloats(pp._x, pp._y, pp._z)
      }
      getTranslation() {
        return new Pp(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(pp) {
        return pp.x = this._m[12], pp.y = this._m[13], pp.z = this._m[14], pp
      }
      removeRotationAndScaling() {
        const pp = this.m;
        return Up.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, pp[12], pp[13], pp[14], pp[15], this), this._updateIdentityStatus(0 === pp[12] && 0 === pp[13] && 0 === pp[14] && 1 === pp[15]), this
      }
      rM(pp) {
        pp.copyToArray(this._m);
        const ip = pp;
        return this.updateFlag = ip.updateFlag, this._updateIdentityStatus(ip._isIdentity, ip._isIdentityDirty, ip._isIdentity3x2, ip._isIdentity3x2Dirty), this
      }
      copyToArray(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, Lp.d)(this, pp, ip), this
      }
      multiply(pp) {
        const ip = new Up;
        return this.multiplyToRef(pp, ip), ip
      }
      multiplyInPlace(pp) {
        const ip = this._m,
          cp = pp.m;
        for (let Op = 0; Op < 16; Op++) ip[Op] *= cp[Op];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const pp = this._m;
        for (let ip = 0; ip < 16; ip++) pp[ip] *= ip < 0 || arguments.length <= ip ? void 0 : arguments[ip];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var pp = arguments.length, ip = new Array(pp), cp = 0; cp < pp; cp++) ip[cp] = arguments[cp];
        const Op = ip.pop(),
          op = this._m,
          Ip = Op._m,
          Sp = ip;
        for (let xp = 0; xp < 16; xp++) Ip[xp] = op[xp] * Sp[xp];
        return Op.markAsUpdated(), Op
      }
      multiplyToRef(pp, ip) {
        return this._isIdentity ? (ip.rM(pp), ip) : pp._isIdentity ? (ip.rM(this), ip) : (this.multiplyToArray(pp, ip._m, 0), ip.markAsUpdated(), ip)
      }
      multiplyToArray(pp, ip, cp) {
        return (0, Lp.l)(this, pp, ip, cp), this
      }
      divide(pp) {
        return this.divideToRef(pp, new Up)
      }
      divideToRef(pp, ip) {
        const cp = this._m,
          Op = pp.m,
          op = ip._m;
        for (let Ip = 0; Ip < 16; Ip++) op[Ip] = cp[Ip] / Op[Ip];
        return ip.markAsUpdated(), ip
      }
      divideInPlace(pp) {
        const ip = this._m,
          cp = pp.m;
        for (let Op = 0; Op < 16; Op++) ip[Op] /= cp[Op];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(pp) {
        const ip = this._m,
          cp = pp.m;
        for (let Op = 0; Op < 16; Op++) ip[Op] = Math.min(ip[Op], cp[Op]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const pp = this._m;
        for (let ip = 0; ip < 16; ip++) pp[ip] = Math.min(pp[ip], ip < 0 || arguments.length <= ip ? void 0 : arguments[ip]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(pp) {
        const ip = this._m,
          cp = pp.m;
        for (let Op = 0; Op < 16; Op++) ip[Op] = Math.max(ip[Op], cp[Op]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const pp = this._m;
        for (let ip = 0; ip < 16; ip++) pp[ip] = Math.max(pp[ip], ip < 0 || arguments.length <= ip ? void 0 : arguments[ip]);
        return this.markAsUpdated(), this
      }
      gp() {
        return this.negateToRef(new Up)
      }
      negateInPlace() {
        const pp = this._m;
        for (let ip = 0; ip < 16; ip++) pp[ip] = -pp[ip];
        return this.markAsUpdated(), this
      }
      negateToRef(pp) {
        const ip = this._m,
          cp = pp._m;
        for (let Op = 0; Op < 16; Op++) cp[Op] = -ip[Op];
        return pp.markAsUpdated(), pp
      }
      equals(pp) {
        const ip = pp;
        if (!ip) return !1;
        if ((this._isIdentity || ip._isIdentity) && !this._isIdentityDirty && !ip._isIdentityDirty) return this._isIdentity && ip._isIdentity;
        const cp = this.m,
          Op = ip.m;
        return cp[0] === Op[0] && cp[1] === Op[1] && cp[2] === Op[2] && cp[3] === Op[3] && cp[4] === Op[4] && cp[5] === Op[5] && cp[6] === Op[6] && cp[7] === Op[7] && cp[8] === Op[8] && cp[9] === Op[9] && cp[10] === Op[10] && cp[11] === Op[11] && cp[12] === Op[12] && cp[13] === Op[13] && cp[14] === Op[14] && cp[15] === Op[15]
      }
      equalsWithEpsilon(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cp = this._m,
          Op = pp.m;
        for (let op = 0; op < 16; op++)
          if (!(0, xp.WithinEpsilon)(cp[op], Op[op], ip)) return !1;
        return !0
      }
      jxp() {
        const pp = this._m;
        for (let ip = 0; ip < 16; ip++)
          if (pp[ip] != (ip < 0 || arguments.length <= ip ? void 0 : arguments[ip])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new Up)
      }
      floorToRef(pp) {
        const ip = this._m,
          cp = pp._m;
        for (let Op = 0; Op < 16; Op++) cp[Op] = Math.floor(ip[Op]);
        return pp.markAsUpdated(), pp
      }
      fract() {
        return this.fractToRef(new Up)
      }
      fractToRef(pp) {
        const ip = this._m,
          cp = pp._m;
        for (let Op = 0; Op < 16; Op++) cp[Op] = ip[Op] - Math.floor(ip[Op]);
        return pp.markAsUpdated(), pp
      }
      clone() {
        const pp = new Up;
        return pp.rM(this), pp
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let pp = Dp(this._m[0]);
        for (let ip = 1; ip < 16; ip++) pp = 397 * pp ^ Dp(this._m[ip]);
        return pp
      }
      decomposeToTransformNode(pp) {
        return pp.rotationQuaternion = pp.rotationQuaternion || new yp, this.decompose(pp.ei, pp.rotationQuaternion, pp.position)
      }
      decompose(pp, ip, cp, Op) {
        let op = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return cp && cp.E_(0), pp && pp.E_(1), ip && ip.i5(0, 0, 0, 1), !0;
        const Ip = this._m;
        if (cp && cp.i5(Ip[12], Ip[13], Ip[14]), (pp = pp || wp.Zy[0]).x = Math.sqrt(Ip[0] * Ip[0] + Ip[1] * Ip[1] + Ip[2] * Ip[2]), pp.y = Math.sqrt(Ip[4] * Ip[4] + Ip[5] * Ip[5] + Ip[6] * Ip[6]), pp.z = Math.sqrt(Ip[8] * Ip[8] + Ip[9] * Ip[9] + Ip[10] * Ip[10]), Op) {
          const ip = (op ? Op.absoluteScaling.x : Op.ei.x) < 0 ? -1 : 1,
            cp = (op ? Op.absoluteScaling.y : Op.ei.y) < 0 ? -1 : 1,
            Ip = (op ? Op.absoluteScaling.z : Op.ei.z) < 0 ? -1 : 1;
          pp.x *= ip, pp.y *= cp, pp.z *= Ip
        } else this.determinant() <= 0 && (pp.y *= -1);
        if (0 === pp._x || 0 === pp._y || 0 === pp._z) return ip && ip.i5(0, 0, 0, 1), !1;
        if (ip) {
          const cp = 1 / pp._x,
            Op = 1 / pp._y,
            op = 1 / pp._z;
          Up.FromValuesToRef(Ip[0] * cp, Ip[1] * cp, Ip[2] * cp, 0, Ip[4] * Op, Ip[5] * Op, Ip[6] * Op, 0, Ip[8] * op, Ip[9] * op, Ip[10] * op, 0, 0, 0, 0, 1, wp.Matrix[0]), yp.FromRotationMatrixToRef(wp.Matrix[0], ip)
        }
        return !0
      }
      getRow(pp) {
        if (pp < 0 || pp > 3) return null;
        const ip = 4 * pp;
        return new Wp(this._m[ip + 0], this._m[ip + 1], this._m[ip + 2], this._m[ip + 3])
      }
      getRowToRef(pp, ip) {
        if (pp >= 0 && pp <= 3) {
          const cp = 4 * pp;
          ip.x = this._m[cp + 0], ip.y = this._m[cp + 1], ip.z = this._m[cp + 2], ip.w = this._m[cp + 3]
        }
        return ip
      }
      setRow(pp, ip) {
        return this.setRowFromFloats(pp, ip.x, ip.y, ip.z, ip.w)
      }
      transpose() {
        const pp = new Up;
        return Up.TransposeToRef(this, pp), pp
      }
      transposeToRef(pp) {
        return Up.TransposeToRef(this, pp), pp
      }
      setRowFromFloats(pp, ip, cp, Op, op) {
        if (pp < 0 || pp > 3) return this;
        const Ip = 4 * pp;
        return this._m[Ip + 0] = ip, this._m[Ip + 1] = cp, this._m[Ip + 2] = Op, this._m[Ip + 3] = op, this.markAsUpdated(), this
      }
      scale(pp) {
        const ip = new Up;
        return this.scaleToRef(pp, ip), ip
      }
      scaleToRef(pp, ip) {
        for (let cp = 0; cp < 16; cp++) ip._m[cp] = this._m[cp] * pp;
        return ip.markAsUpdated(), ip
      }
      scaleAndAddToRef(pp, ip) {
        for (let cp = 0; cp < 16; cp++) ip._m[cp] += this._m[cp] * pp;
        return ip.markAsUpdated(), ip
      }
      scaleInPlace(pp) {
        const ip = this._m;
        for (let cp = 0; cp < 16; cp++) ip[cp] *= pp;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(pp) {
        const ip = wp.Matrix[0];
        this.invertToRef(ip), ip.transposeToRef(pp);
        const cp = pp._m;
        return Up.FromValuesToRef(cp[0], cp[1], cp[2], 0, cp[4], cp[5], cp[6], 0, cp[8], cp[9], cp[10], 0, 0, 0, 0, 1, pp), pp
      }
      getRotationMatrix() {
        const pp = new Up;
        return this.getRotationMatrixToRef(pp), pp
      }
      getRotationMatrixToRef(pp) {
        const ip = wp.Zy[0];
        if (!this.decompose(ip)) return Up.IdentityToRef(pp), pp;
        const cp = this._m,
          Op = 1 / ip._x,
          op = 1 / ip._y,
          Ip = 1 / ip._z;
        return Up.FromValuesToRef(cp[0] * Op, cp[1] * Op, cp[2] * Op, 0, cp[4] * op, cp[5] * op, cp[6] * op, 0, cp[8] * Ip, cp[9] * Ip, cp[10] * Ip, 0, 0, 0, 0, 1, pp), pp
      }
      toggleModelMatrixHandInPlace() {
        const pp = this._m;
        return pp[2] *= -1, pp[6] *= -1, pp[8] *= -1, pp[9] *= -1, pp[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const pp = this._m;
        return pp[8] *= -1, pp[9] *= -1, pp[10] *= -1, pp[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(tp, this), this
      }
      static FromArray(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const cp = new Up;
        return Up.FromArrayToRef(pp, ip, cp), cp
      }
      static FromArrayToRef(pp, ip, cp) {
        for (let Op = 0; Op < 16; Op++) cp._m[Op] = pp[Op + ip];
        return cp.markAsUpdated(), cp
      }
      static FromFloat32ArrayToRefScaled(pp, ip, cp, Op) {
        return Op._m[0] = pp[0 + ip] * cp, Op._m[1] = pp[1 + ip] * cp, Op._m[2] = pp[2 + ip] * cp, Op._m[3] = pp[3 + ip] * cp, Op._m[4] = pp[4 + ip] * cp, Op._m[5] = pp[5 + ip] * cp, Op._m[6] = pp[6 + ip] * cp, Op._m[7] = pp[7 + ip] * cp, Op._m[8] = pp[8 + ip] * cp, Op._m[9] = pp[9 + ip] * cp, Op._m[10] = pp[10 + ip] * cp, Op._m[11] = pp[11 + ip] * cp, Op._m[12] = pp[12 + ip] * cp, Op._m[13] = pp[13 + ip] * cp, Op._m[14] = pp[14 + ip] * cp, Op._m[15] = pp[15 + ip] * cp, Op.markAsUpdated(), Op
      }
      static get IdentityReadOnly() {
        return Up._IdentityReadOnly
      }
      static FromValuesToRef(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, Up, wp) {
        const vp = wp._m;
        vp[0] = pp, vp[1] = ip, vp[2] = cp, vp[3] = Op, vp[4] = op, vp[5] = Ip, vp[6] = Sp, vp[7] = xp, vp[8] = Lp, vp[9] = Yp, vp[10] = Dp, vp[11] = Ap, vp[12] = Pp, vp[13] = Wp, vp[14] = yp, vp[15] = Up, wp.markAsUpdated()
      }
      static FromValues(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp, Ap, Pp, Wp, yp, wp) {
        const vp = new Up,
          tp = vp._m;
        return tp[0] = pp, tp[1] = ip, tp[2] = cp, tp[3] = Op, tp[4] = op, tp[5] = Ip, tp[6] = Sp, tp[7] = xp, tp[8] = Lp, tp[9] = Yp, tp[10] = Dp, tp[11] = Ap, tp[12] = Pp, tp[13] = Wp, tp[14] = yp, tp[15] = wp, vp.markAsUpdated(), vp
      }
      static Compose(pp, ip, cp) {
        const Op = new Up;
        return Up.ComposeToRef(pp, ip, cp, Op), Op
      }
      static ComposeToRef(pp, ip, cp, Op) {
        const op = Op._m,
          Ip = ip._x,
          Sp = ip._y,
          xp = ip._z,
          Lp = ip._w,
          Yp = Ip + Ip,
          Dp = Sp + Sp,
          Ap = xp + xp,
          Pp = Ip * Yp,
          Wp = Ip * Dp,
          yp = Ip * Ap,
          Up = Sp * Dp,
          wp = Sp * Ap,
          vp = xp * Ap,
          tp = Lp * Yp,
          Hp = Lp * Dp,
          dp = Lp * Ap,
          ep = pp._x,
          jp = pp._y,
          kp = pp._z;
        return op[0] = (1 - (Up + vp)) * ep, op[1] = (Wp + dp) * ep, op[2] = (yp - Hp) * ep, op[3] = 0, op[4] = (Wp - dp) * jp, op[5] = (1 - (Pp + vp)) * jp, op[6] = (wp + tp) * jp, op[7] = 0, op[8] = (yp + Hp) * kp, op[9] = (wp - tp) * kp, op[10] = (1 - (Pp + Up)) * kp, op[11] = 0, op[12] = cp._x, op[13] = cp._y, op[14] = cp._z, op[15] = 1, Op.markAsUpdated(), Op
      }
      static Identity() {
        const pp = Up.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return pp._updateIdentityStatus(!0), pp
      }
      static IdentityToRef(pp) {
        return Up.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, pp), pp._updateIdentityStatus(!0), pp
      }
      static Zero() {
        const pp = Up.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return pp._updateIdentityStatus(!1), pp
      }
      static RotationX(pp) {
        const ip = new Up;
        return Up.RotationXToRef(pp, ip), ip
      }
      static Invert(pp) {
        const ip = new Up;
        return pp.invertToRef(ip), ip
      }
      static RotationXToRef(pp, ip) {
        const cp = Math.sin(pp),
          Op = Math.cos(pp);
        return Up.FromValuesToRef(1, 0, 0, 0, 0, Op, cp, 0, 0, -cp, Op, 0, 0, 0, 0, 1, ip), ip._updateIdentityStatus(1 === Op && 0 === cp), ip
      }
      static RotationY(pp) {
        const ip = new Up;
        return Up.RotationYToRef(pp, ip), ip
      }
      static RotationYToRef(pp, ip) {
        const cp = Math.sin(pp),
          Op = Math.cos(pp);
        return Up.FromValuesToRef(Op, 0, -cp, 0, 0, 1, 0, 0, cp, 0, Op, 0, 0, 0, 0, 1, ip), ip._updateIdentityStatus(1 === Op && 0 === cp), ip
      }
      static RotationZ(pp) {
        const ip = new Up;
        return Up.RotationZToRef(pp, ip), ip
      }
      static RotationZToRef(pp, ip) {
        const cp = Math.sin(pp),
          Op = Math.cos(pp);
        return Up.FromValuesToRef(Op, cp, 0, 0, -cp, Op, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, ip), ip._updateIdentityStatus(1 === Op && 0 === cp), ip
      }
      static RotationAxis(pp, ip) {
        const cp = new Up;
        return Up.RotationAxisToRef(pp, ip, cp), cp
      }
      static RotationAxisToRef(pp, ip, cp) {
        const Op = Math.sin(-ip),
          op = Math.cos(-ip),
          Ip = 1 - op;
        pp = pp.normalizeToRef(wp.Zy[0]);
        const Sp = cp._m;
        return Sp[0] = pp._x * pp._x * Ip + op, Sp[1] = pp._x * pp._y * Ip - pp._z * Op, Sp[2] = pp._x * pp._z * Ip + pp._y * Op, Sp[3] = 0, Sp[4] = pp._y * pp._x * Ip + pp._z * Op, Sp[5] = pp._y * pp._y * Ip + op, Sp[6] = pp._y * pp._z * Ip - pp._x * Op, Sp[7] = 0, Sp[8] = pp._z * pp._x * Ip - pp._y * Op, Sp[9] = pp._z * pp._y * Ip + pp._x * Op, Sp[10] = pp._z * pp._z * Ip + op, Sp[11] = 0, Sp[12] = 0, Sp[13] = 0, Sp[14] = 0, Sp[15] = 1, cp.markAsUpdated(), cp
      }
      static RotationAlignToRef(pp, ip, cp) {
        let op = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Ip = Pp.Dot(ip, pp),
          Sp = cp._m;
        if (Ip < -1 + Op.b) Sp[0] = -1, Sp[1] = 0, Sp[2] = 0, Sp[3] = 0, Sp[4] = 0, Sp[5] = op ? 1 : -1, Sp[6] = 0, Sp[7] = 0, Sp[8] = 0, Sp[9] = 0, Sp[10] = op ? -1 : 1, Sp[11] = 0;
        else {
          const cp = Pp.Cross(ip, pp),
            Op = 1 / (1 + Ip);
          Sp[0] = cp._x * cp._x * Op + Ip, Sp[1] = cp._y * cp._x * Op - cp._z, Sp[2] = cp._z * cp._x * Op + cp._y, Sp[3] = 0, Sp[4] = cp._x * cp._y * Op + cp._z, Sp[5] = cp._y * cp._y * Op + Ip, Sp[6] = cp._z * cp._y * Op - cp._x, Sp[7] = 0, Sp[8] = cp._x * cp._z * Op - cp._y, Sp[9] = cp._y * cp._z * Op + cp._x, Sp[10] = cp._z * cp._z * Op + Ip, Sp[11] = 0
        }
        return Sp[12] = 0, Sp[13] = 0, Sp[14] = 0, Sp[15] = 1, cp.markAsUpdated(), cp
      }
      static RotationYawPitchRoll(pp, ip, cp) {
        const Op = new Up;
        return Up.RotationYawPitchRollToRef(pp, ip, cp, Op), Op
      }
      static RotationYawPitchRollToRef(pp, ip, cp, Op) {
        return yp.RotationYawPitchRollToRef(pp, ip, cp, wp.Quaternion[0]), wp.Quaternion[0].toRotationMatrix(Op), Op
      }
      static Scaling(pp, ip, cp) {
        const Op = new Up;
        return Up.ScalingToRef(pp, ip, cp, Op), Op
      }
      static ScalingToRef(pp, ip, cp, Op) {
        return Up.FromValuesToRef(pp, 0, 0, 0, 0, ip, 0, 0, 0, 0, cp, 0, 0, 0, 0, 1, Op), Op._updateIdentityStatus(1 === pp && 1 === ip && 1 === cp), Op
      }
      static Translation(pp, ip, cp) {
        const Op = new Up;
        return Up.TranslationToRef(pp, ip, cp, Op), Op
      }
      static TranslationToRef(pp, ip, cp, Op) {
        return Up.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, pp, ip, cp, 1, Op), Op._updateIdentityStatus(0 === pp && 0 === ip && 0 === cp), Op
      }
      static Lerp(pp, ip, cp) {
        const Op = new Up;
        return Up.LerpToRef(pp, ip, cp, Op), Op
      }
      static LerpToRef(pp, ip, cp, Op) {
        const op = Op._m,
          Ip = pp.m,
          Sp = ip.m;
        for (let xp = 0; xp < 16; xp++) op[xp] = Ip[xp] * (1 - cp) + Sp[xp] * cp;
        return Op.markAsUpdated(), Op
      }
      static DecomposeLerp(pp, ip, cp) {
        const Op = new Up;
        return Up.DecomposeLerpToRef(pp, ip, cp, Op), Op
      }
      static DecomposeLerpToRef(pp, ip, cp, Op) {
        const op = wp.Zy[0],
          Ip = wp.Quaternion[0],
          Sp = wp.Zy[1];
        pp.decompose(op, Ip, Sp);
        const xp = wp.Zy[2],
          Lp = wp.Quaternion[1],
          Yp = wp.Zy[3];
        ip.decompose(xp, Lp, Yp);
        const Dp = wp.Zy[4];
        Pp.LerpToRef(op, xp, cp, Dp);
        const Ap = wp.Quaternion[2];
        yp.SlerpToRef(Ip, Lp, cp, Ap);
        const Wp = wp.Zy[5];
        return Pp.LerpToRef(Sp, Yp, cp, Wp), Up.ComposeToRef(Dp, Ap, Wp, Op), Op
      }
      static LookAtLH(pp, ip, cp) {
        const Op = new Up;
        return Up.LookAtLHToRef(pp, ip, cp, Op), Op
      }
      static LookAtLHToRef(pp, ip, cp, Op) {
        const op = wp.Zy[0],
          Ip = wp.Zy[1],
          Sp = wp.Zy[2];
        ip.subtractToRef(pp, Sp), Sp.normalize(), Pp.CrossToRef(cp, Sp, op);
        const xp = op.lengthSquared();
        0 === xp ? op.x = 1 : op.normalizeFromLength(Math.sqrt(xp)), Pp.CrossToRef(Sp, op, Ip), Ip.normalize();
        const Lp = -Pp.Dot(op, pp),
          Yp = -Pp.Dot(Ip, pp),
          Dp = -Pp.Dot(Sp, pp);
        return Up.FromValuesToRef(op._x, Ip._x, Sp._x, 0, op._y, Ip._y, Sp._y, 0, op._z, Ip._z, Sp._z, 0, Lp, Yp, Dp, 1, Op), Op
      }
      static LookAtRH(pp, ip, cp) {
        const Op = new Up;
        return Up.LookAtRHToRef(pp, ip, cp, Op), Op
      }
      static LookAtRHToRef(pp, ip, cp, Op) {
        const op = wp.Zy[0],
          Ip = wp.Zy[1],
          Sp = wp.Zy[2];
        pp.subtractToRef(ip, Sp), Sp.normalize(), Pp.CrossToRef(cp, Sp, op);
        const xp = op.lengthSquared();
        0 === xp ? op.x = 1 : op.normalizeFromLength(Math.sqrt(xp)), Pp.CrossToRef(Sp, op, Ip), Ip.normalize();
        const Lp = -Pp.Dot(op, pp),
          Yp = -Pp.Dot(Ip, pp),
          Dp = -Pp.Dot(Sp, pp);
        return Up.FromValuesToRef(op._x, Ip._x, Sp._x, 0, op._y, Ip._y, Sp._y, 0, op._z, Ip._z, Sp._z, 0, Lp, Yp, Dp, 1, Op), Op
      }
      static LookDirectionLH(pp, ip) {
        const cp = new Up;
        return Up.LookDirectionLHToRef(pp, ip, cp), cp
      }
      static LookDirectionLHToRef(pp, ip, cp) {
        const Op = wp.Zy[0];
        Op.rM(pp), Op.scaleInPlace(-1);
        const op = wp.Zy[1];
        return Pp.CrossToRef(ip, Op, op), Up.FromValuesToRef(op._x, op._y, op._z, 0, ip._x, ip._y, ip._z, 0, Op._x, Op._y, Op._z, 0, 0, 0, 0, 1, cp), cp
      }
      static LookDirectionRH(pp, ip) {
        const cp = new Up;
        return Up.LookDirectionRHToRef(pp, ip, cp), cp
      }
      static LookDirectionRHToRef(pp, ip, cp) {
        const Op = wp.Zy[2];
        return Pp.CrossToRef(ip, pp, Op), Up.FromValuesToRef(Op._x, Op._y, Op._z, 0, ip._x, ip._y, ip._z, 0, pp._x, pp._y, pp._z, 0, 0, 0, 0, 1, cp), cp
      }
      static OrthoLH(pp, ip, cp, Op, op) {
        const Ip = new Up;
        return Up.OrthoLHToRef(pp, ip, cp, Op, Ip, op), Ip
      }
      static OrthoLHToRef(pp, ip, cp, Op, op, Ip) {
        const Sp = 2 / pp,
          xp = 2 / ip,
          Lp = 2 / (Op - cp),
          Yp = -(Op + cp) / (Op - cp);
        return Up.FromValuesToRef(Sp, 0, 0, 0, 0, xp, 0, 0, 0, 0, Lp, 0, 0, 0, Yp, 1, op), Ip && op.multiplyToRef(tp, op), op._updateIdentityStatus(1 === Sp && 1 === xp && 1 === Lp && 0 === Yp), op
      }
      static OrthoOffCenterLH(pp, ip, cp, Op, op, Ip, Sp) {
        const xp = new Up;
        return Up.OrthoOffCenterLHToRef(pp, ip, cp, Op, op, Ip, xp, Sp), xp
      }
      static OrthoOffCenterLHToRef(pp, ip, cp, Op, op, Ip, Sp, xp) {
        const Lp = 2 / (ip - pp),
          Yp = 2 / (Op - cp),
          Dp = 2 / (Ip - op),
          Ap = -(Ip + op) / (Ip - op),
          Pp = (pp + ip) / (pp - ip),
          Wp = (Op + cp) / (cp - Op);
        return Up.FromValuesToRef(Lp, 0, 0, 0, 0, Yp, 0, 0, 0, 0, Dp, 0, Pp, Wp, Ap, 1, Sp), xp && Sp.multiplyToRef(tp, Sp), Sp.markAsUpdated(), Sp
      }
      static ObliqueOffCenterLHToRef(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp) {
        const Ap = -Sp * Math.cos(xp),
          Pp = -Sp * Math.sin(xp);
        return Up.TranslationToRef(0, 0, -Lp, wp.Matrix[1]), Up.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Ap, Pp, 1, 0, 0, 0, 0, 1, wp.Matrix[0]), wp.Matrix[1].multiplyToRef(wp.Matrix[0], wp.Matrix[0]), Up.TranslationToRef(0, 0, Lp, wp.Matrix[1]), wp.Matrix[0].multiplyToRef(wp.Matrix[1], wp.Matrix[0]), Up.OrthoOffCenterLHToRef(pp, ip, cp, Op, op, Ip, Yp, Dp), wp.Matrix[0].multiplyToRef(Yp, Yp), Yp
      }
      static OrthoOffCenterRH(pp, ip, cp, Op, op, Ip, Sp) {
        const xp = new Up;
        return Up.OrthoOffCenterRHToRef(pp, ip, cp, Op, op, Ip, xp, Sp), xp
      }
      static OrthoOffCenterRHToRef(pp, ip, cp, Op, op, Ip, Sp, xp) {
        return Up.OrthoOffCenterLHToRef(pp, ip, cp, Op, op, Ip, Sp, xp), Sp._m[10] *= -1, Sp
      }
      static ObliqueOffCenterRHToRef(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp) {
        const Ap = Sp * Math.cos(xp),
          Pp = Sp * Math.sin(xp);
        return Up.TranslationToRef(0, 0, Lp, wp.Matrix[1]), Up.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Ap, Pp, 1, 0, 0, 0, 0, 1, wp.Matrix[0]), wp.Matrix[1].multiplyToRef(wp.Matrix[0], wp.Matrix[0]), Up.TranslationToRef(0, 0, -Lp, wp.Matrix[1]), wp.Matrix[0].multiplyToRef(wp.Matrix[1], wp.Matrix[0]), Up.OrthoOffCenterRHToRef(pp, ip, cp, Op, op, Ip, Yp, Dp), wp.Matrix[0].multiplyToRef(Yp, Yp), Yp
      }
      static PerspectiveLH(pp, ip, cp, Op, op) {
        let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const Sp = new Up,
          xp = 2 * cp / pp,
          Lp = 2 * cp / ip,
          Yp = (Op + cp) / (Op - cp),
          Dp = -2 * Op * cp / (Op - cp),
          Ap = Math.tan(Ip);
        return Up.FromValuesToRef(xp, 0, 0, 0, 0, Lp, 0, Ap, 0, 0, Yp, 1, 0, 0, Dp, 0, Sp), op && Sp.multiplyToRef(tp, Sp), Sp._updateIdentityStatus(!1), Sp
      }
      static PerspectiveFovLH(pp, ip, cp, Op, op) {
        let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const xp = new Up;
        return Up.PerspectiveFovLHToRef(pp, ip, cp, Op, xp, !0, op, Ip, Sp), xp
      }
      static PerspectiveFovLHToRef(pp, ip, cp, Op, op) {
        let Ip = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Sp = arguments.length > 6 ? arguments[6] : void 0,
          xp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Lp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Yp = cp,
          Dp = Op,
          Ap = 1 / Math.tan(.5 * pp),
          Pp = Ip ? Ap / ip : Ap,
          Wp = Ip ? Ap : Ap * ip,
          yp = Lp && 0 === Yp ? -1 : 0 !== Dp ? (Dp + Yp) / (Dp - Yp) : 1,
          wp = Lp && 0 === Yp ? 2 * Dp : 0 !== Dp ? -2 * Dp * Yp / (Dp - Yp) : -2 * Yp,
          vp = Math.tan(xp);
        return Up.FromValuesToRef(Pp, 0, 0, 0, 0, Wp, 0, vp, 0, 0, yp, 1, 0, 0, wp, 0, op), Sp && op.multiplyToRef(tp, op), op._updateIdentityStatus(!1), op
      }
      static PerspectiveFovReverseLHToRef(pp, ip, cp, Op, op) {
        let Ip = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Sp = arguments.length > 6 ? arguments[6] : void 0,
          xp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Lp = 1 / Math.tan(.5 * pp),
          Yp = Ip ? Lp / ip : Lp,
          Dp = Ip ? Lp : Lp * ip,
          Ap = Math.tan(xp);
        return Up.FromValuesToRef(Yp, 0, 0, 0, 0, Dp, 0, Ap, 0, 0, -cp, 1, 0, 0, 1, 0, op), Sp && op.multiplyToRef(tp, op), op._updateIdentityStatus(!1), op
      }
      static PerspectiveFovRH(pp, ip, cp, Op, op) {
        let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Sp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const xp = new Up;
        return Up.PerspectiveFovRHToRef(pp, ip, cp, Op, xp, !0, op, Ip, Sp), xp
      }
      static PerspectiveFovRHToRef(pp, ip, cp, Op, op) {
        let Ip = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Sp = arguments.length > 6 ? arguments[6] : void 0,
          xp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Lp = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Yp = cp,
          Dp = Op,
          Ap = 1 / Math.tan(.5 * pp),
          Pp = Ip ? Ap / ip : Ap,
          Wp = Ip ? Ap : Ap * ip,
          yp = Lp && 0 === Yp ? 1 : 0 !== Dp ? -(Dp + Yp) / (Dp - Yp) : -1,
          wp = Lp && 0 === Yp ? 2 * Dp : 0 !== Dp ? -2 * Dp * Yp / (Dp - Yp) : -2 * Yp,
          vp = Math.tan(xp);
        return Up.FromValuesToRef(Pp, 0, 0, 0, 0, Wp, 0, vp, 0, 0, yp, -1, 0, 0, wp, 0, op), Sp && op.multiplyToRef(tp, op), op._updateIdentityStatus(!1), op
      }
      static PerspectiveFovReverseRHToRef(pp, ip, cp, Op, op) {
        let Ip = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Sp = arguments.length > 6 ? arguments[6] : void 0,
          xp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Lp = 1 / Math.tan(.5 * pp),
          Yp = Ip ? Lp / ip : Lp,
          Dp = Ip ? Lp : Lp * ip,
          Ap = Math.tan(xp);
        return Up.FromValuesToRef(Yp, 0, 0, 0, 0, Dp, 0, Ap, 0, 0, -cp, -1, 0, 0, -1, 0, op), Sp && op.multiplyToRef(tp, op), op._updateIdentityStatus(!1), op
      }
      static GetFinalMatrix(pp, ip, cp, Op, op, Ip) {
        const Sp = pp.width,
          xp = pp.height,
          Lp = pp.x,
          Yp = pp.y,
          Dp = Up.FromValues(Sp / 2, 0, 0, 0, 0, -xp / 2, 0, 0, 0, 0, Ip - op, 0, Lp + Sp / 2, xp / 2 + Yp, op, 1),
          Ap = new Up;
        return ip.multiplyToRef(cp, Ap), Ap.multiplyToRef(Op, Ap), Ap.multiplyToRef(Dp, Ap)
      }
      static GetAsMatrix2x2(pp) {
        const ip = pp.m,
          cp = [ip[0], ip[1], ip[4], ip[5]];
        return Ip.e.MatrixUse64Bits ? cp : new Float32Array(cp)
      }
      static GetAsMatrix3x3(pp) {
        const ip = pp.m,
          cp = [ip[0], ip[1], ip[2], ip[4], ip[5], ip[6], ip[8], ip[9], ip[10]];
        return Ip.e.MatrixUse64Bits ? cp : new Float32Array(cp)
      }
      static Transpose(pp) {
        const ip = new Up;
        return Up.TransposeToRef(pp, ip), ip
      }
      static TransposeToRef(pp, ip) {
        const cp = pp.m,
          Op = cp[0],
          op = cp[4],
          Ip = cp[8],
          Sp = cp[12],
          xp = cp[1],
          Lp = cp[5],
          Yp = cp[9],
          Dp = cp[13],
          Ap = cp[2],
          Pp = cp[6],
          Wp = cp[10],
          yp = cp[14],
          Up = cp[3],
          wp = cp[7],
          vp = cp[11],
          tp = cp[15],
          Hp = ip._m;
        return Hp[0] = Op, Hp[1] = op, Hp[2] = Ip, Hp[3] = Sp, Hp[4] = xp, Hp[5] = Lp, Hp[6] = Yp, Hp[7] = Dp, Hp[8] = Ap, Hp[9] = Pp, Hp[10] = Wp, Hp[11] = yp, Hp[12] = Up, Hp[13] = wp, Hp[14] = vp, Hp[15] = tp, ip.markAsUpdated(), ip._updateIdentityStatus(pp._isIdentity, pp._isIdentityDirty), ip
      }
      static Reflection(pp) {
        const ip = new Up;
        return Up.ReflectionToRef(pp, ip), ip
      }
      static ReflectionToRef(pp, ip) {
        pp.normalize();
        const cp = pp.normal.x,
          Op = pp.normal.y,
          op = pp.normal.z,
          Ip = -2 * cp,
          Sp = -2 * Op,
          xp = -2 * op;
        return Up.FromValuesToRef(Ip * cp + 1, Sp * cp, xp * cp, 0, Ip * Op, Sp * Op + 1, xp * Op, 0, Ip * op, Sp * op, xp * op + 1, 0, Ip * pp.d, Sp * pp.d, xp * pp.d, 1, ip), ip
      }
      static FromXYZAxesToRef(pp, ip, cp, Op) {
        return Up.FromValuesToRef(pp._x, pp._y, pp._z, 0, ip._x, ip._y, ip._z, 0, cp._x, cp._y, cp._z, 0, 0, 0, 0, 1, Op), Op
      }
      static FromQuaternionToRef(pp, ip) {
        const cp = pp._x * pp._x,
          Op = pp._y * pp._y,
          op = pp._z * pp._z,
          Ip = pp._x * pp._y,
          Sp = pp._z * pp._w,
          xp = pp._z * pp._x,
          Lp = pp._y * pp._w,
          Yp = pp._y * pp._z,
          Dp = pp._x * pp._w;
        return ip._m[0] = 1 - 2 * (Op + op), ip._m[1] = 2 * (Ip + Sp), ip._m[2] = 2 * (xp - Lp), ip._m[3] = 0, ip._m[4] = 2 * (Ip - Sp), ip._m[5] = 1 - 2 * (op + cp), ip._m[6] = 2 * (Yp + Dp), ip._m[7] = 0, ip._m[8] = 2 * (xp + Lp), ip._m[9] = 2 * (Yp - Dp), ip._m[10] = 1 - 2 * (Op + cp), ip._m[11] = 0, ip._m[12] = 0, ip._m[13] = 0, ip._m[14] = 0, ip._m[15] = 1, ip.markAsUpdated(), ip
      }
    }
    Up._IdentityReadOnly = Up.Identity();
    class wp {}
    wp.Zy = (0, op.g)(11, Pp.Zero), wp.Matrix = (0, op.g)(2, Up.Identity), wp.Quaternion = (0, op.g)(3, yp.Zero);
    class vp {}
    vp.Vector2 = (0, op.g)(3, Ap.Zero), vp.Zy = (0, op.g)(13, Pp.Zero), vp.Vector4 = (0, op.g)(3, Wp.Zero), vp.Quaternion = (0, op.g)(3, yp.Zero), vp.Matrix = (0, op.g)(8, Up.Identity);
    const tp = Up.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let Hp = !1;

    function dp() {
      Hp || (Hp = !0, Object.defineProperties(Ap.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Pp.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Wp.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(yp.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Up.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, Yp.g)("BABYLON.Vector2", Ap), (0, Yp.g)("BABYLON.Vector3", Pp), (0, Yp.g)("BABYLON.Vector4", Wp), (0, Yp.g)("BABYLON.Matrix", Up))
    }
  },
  37349: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Sp
    });
    const Op = "undefined" !== typeof WeakRef;
    class op {
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 ? arguments[2] : void 0,
          Op = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(pp, ip, cp, Op)
      }
      initialize(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          cp = arguments.length > 2 ? arguments[2] : void 0,
          Op = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = pp, this.skipNextObservers = ip, this.target = cp, this.currentTarget = Op, this
      }
    }
    class Ip {
      constructor(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = pp, this.mask = ip, this.scope = cp, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(pp)
      }
    }
    class Sp {
      static FromPromise(pp, ip) {
        const cp = new Sp;
        return pp.then((pp => {
          cp.notifyObservers(pp)
        })).catch((pp => {
          if (!ip) throw pp;
          ip.notifyObservers(pp)
        })), cp
      }
      get observers() {
        return this._observers
      }
      constructor(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = ip, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new op(0), pp && (this._onObserverAdded = pp)
      }
      add(pp) {
        let ip = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          cp = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!pp) return null;
        const op = new Ip(pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        op.unregisterOnNextCall = cp, ip ? this._observers.unshift(op) : this._observers.push(op), this._onObserverAdded && this._onObserverAdded(op), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(op, this._lastNotifiedValue);
        const Sp = Op ? new WeakRef(this) : {
          deref: () => this
        };
        return op._remove = function() {
          let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const ip = Sp.deref();
          ip && (pp ? ip.remove(op) : ip._remove(op))
        }, op
      }
      addOnce(pp) {
        return this.add(pp, void 0, void 0, void 0, !0)
      }
      remove(pp) {
        if (!pp) return !1;
        pp._remove = null;
        return -1 !== this._observers.indexOf(pp) && (this._deferUnregister(pp), !0)
      }
      removeCallback(pp, ip) {
        for (let cp = 0; cp < this._observers.length; cp++) {
          const Op = this._observers[cp];
          if (!Op._willBeUnregistered && (Op.callback === pp && (!ip || ip === Op.scope))) return this._deferUnregister(Op), !0
        }
        return !1
      }
      _deferUnregister(pp) {
        pp._willBeUnregistered || (this._numObserversMarkedAsDeleted++, pp.unregisterOnNextCall = !1, pp._willBeUnregistered = !0, setTimeout((() => {
          this._remove(pp)
        }), 0))
      }
      _remove(pp) {
        let ip = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!pp) return !1;
        const cp = this._observers.indexOf(pp);
        return -1 !== cp && (ip && this._numObserversMarkedAsDeleted--, this._observers.splice(cp, 1), !0)
      }
      makeObserverTopPriority(pp) {
        this._remove(pp, !1), this._observers.unshift(pp)
      }
      makeObserverBottomPriority(pp) {
        this._remove(pp, !1), this._observers.push(pp)
      }
      notifyObservers(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          cp = arguments.length > 2 ? arguments[2] : void 0,
          Op = arguments.length > 3 ? arguments[3] : void 0,
          op = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = pp), !this._observers.length) return !0;
        const Ip = this._eventState;
        Ip.mask = ip, Ip.target = cp, Ip.currentTarget = Op, Ip.skipNextObservers = !1, Ip.lastReturnValue = pp, Ip.userInfo = op;
        for (const Sp of this._observers)
          if (!Sp._willBeUnregistered && (Sp.mask & ip && (Sp.unregisterOnNextCall && this._deferUnregister(Sp), Sp.scope ? Ip.lastReturnValue = Sp.callback.apply(Sp.scope, [pp, Ip]) : Ip.lastReturnValue = Sp.callback(pp, Ip)), Ip.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = ip), pp._willBeUnregistered) return;
        const Op = this._eventState;
        Op.mask = cp, Op.skipNextObservers = !1, pp.unregisterOnNextCall && this._deferUnregister(pp), pp.callback(ip, Op)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const pp = this._observers.pop();
          pp && (pp._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const pp = new Sp;
        return pp._observers = this._observers.slice(0), pp
      }
      hasSpecificMask() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const ip of this._observers)
          if (ip.mask & pp || ip.mask === pp) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);