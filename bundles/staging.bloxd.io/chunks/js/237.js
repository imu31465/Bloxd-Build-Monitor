export const id = 237;
export const ids = [237];
export const modules = {
  37487: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ap,
      h: () => Pp,
      i: () => Up,
      j: () => Wp
    });
    var Op = cp(37329),
      op = cp(37324),
      Ip = cp(37356),
      Sp = cp(37368);

    function xp(pp) {
      return Math.pow(pp, op.g)
    }

    function Lp(pp) {
      return pp <= .04045 ? .0773993808 * pp : Math.pow(.947867299 * (pp + .055), 2.4)
    }

    function Yp(pp) {
      return Math.pow(pp, op.d)
    }

    function Dp(pp) {
      return pp <= .0031308 ? 12.92 * pp : 1.055 * Math.pow(pp, .41666) - .055
    }
    class Ap {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = pp, this.g = ip, this.b = cp
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let pp = 255 * this.r | 0;
        return pp = 397 * pp ^ 255 * this.g, pp = 397 * pp ^ 255 * this.b, pp
      }
      toArray(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return pp[ip] = this.r, pp[ip + 1] = this.g, pp[ip + 2] = this.b, this
      }
      vcp(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Ap.FromArrayToRef(pp, ip, this), this
      }
      toColor4() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new Pp(this.r, this.g, this.b, pp)
      }
      BOp() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(pp) {
        return new Ap(this.r * pp.r, this.g * pp.g, this.b * pp.b)
      }
      multiplyToRef(pp, ip) {
        return ip.r = this.r * pp.r, ip.g = this.g * pp.g, ip.b = this.b * pp.b, ip
      }
      multiplyInPlace(pp) {
        return this.r *= pp.r, this.g *= pp.g, this.b *= pp.b, this
      }
      multiplyByFloats(pp, ip, cp) {
        return new Ap(this.r * pp, this.g * ip, this.b * cp)
      }
      divide(pp) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(pp, ip) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(pp) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(pp) {
        return this.minimizeInPlaceFromFloats(pp.r, pp.g, pp.b)
      }
      maximizeInPlace(pp) {
        return this.maximizeInPlaceFromFloats(pp.r, pp.g, pp.b)
      }
      minimizeInPlaceFromFloats(pp, ip, cp) {
        return this.r = Math.min(pp, this.r), this.g = Math.min(ip, this.g), this.b = Math.min(cp, this.b), this
      }
      maximizeInPlaceFromFloats(pp, ip, cp) {
        return this.r = Math.max(pp, this.r), this.g = Math.max(ip, this.g), this.b = Math.max(cp, this.b), this
      }
      floorToRef(pp) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(pp) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(pp) {
        return pp && this.r === pp.r && this.g === pp.g && this.b === pp.b
      }
      equalsFloats(pp, ip, cp) {
        return this.jxp(pp, ip, cp)
      }
      jxp(pp, ip, cp) {
        return this.r === pp && this.g === ip && this.b === cp
      }
      equalsWithEpsilon(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : op.b;
        return (0, Ip.WithinEpsilon)(this.r, pp.r, ip) && (0, Ip.WithinEpsilon)(this.g, pp.g, ip) && (0, Ip.WithinEpsilon)(this.b, pp.b, ip)
      }
      gp() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(pp) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(pp) {
        return new Ap(this.r * pp, this.g * pp, this.b * pp)
      }
      scaleInPlace(pp) {
        return this.r *= pp, this.g *= pp, this.b *= pp, this
      }
      scaleToRef(pp, ip) {
        return ip.r = this.r * pp, ip.g = this.g * pp, ip.b = this.b * pp, ip
      }
      scaleAndAddToRef(pp, ip) {
        return ip.r += this.r * pp, ip.g += this.g * pp, ip.b += this.b * pp, ip
      }
      clampToRef() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        return cp.r = (0, Ip.Clamp)(this.r, pp, ip), cp.g = (0, Ip.Clamp)(this.g, pp, ip), cp.b = (0, Ip.Clamp)(this.b, pp, ip), cp
      }
      add(pp) {
        return new Ap(this.r + pp.r, this.g + pp.g, this.b + pp.b)
      }
      addInPlace(pp) {
        return this.r += pp.r, this.g += pp.g, this.b += pp.b, this
      }
      addInPlaceFromFloats(pp, ip, cp) {
        return this.r += pp, this.g += ip, this.b += cp, this
      }
      addToRef(pp, ip) {
        return ip.r = this.r + pp.r, ip.g = this.g + pp.g, ip.b = this.b + pp.b, ip
      }
      subtract(pp) {
        return new Ap(this.r - pp.r, this.g - pp.g, this.b - pp.b)
      }
      subtractToRef(pp, ip) {
        return ip.r = this.r - pp.r, ip.g = this.g - pp.g, ip.b = this.b - pp.b, ip
      }
      Iop(pp) {
        return this.r -= pp.r, this.g -= pp.g, this.b -= pp.b, this
      }
      subtractFromFloats(pp, ip, cp) {
        return new Ap(this.r - pp, this.g - ip, this.b - cp)
      }
      subtractFromFloatsToRef(pp, ip, cp, Op) {
        return Op.r = this.r - pp, Op.g = this.g - ip, Op.b = this.b - cp, Op
      }
      clone() {
        return new Ap(this.r, this.g, this.b)
      }
      rM(pp) {
        return this.r = pp.r, this.g = pp.g, this.b = pp.b, this
      }
      i5(pp, ip, cp) {
        return this.r = pp, this.g = ip, this.b = cp, this
      }
      set(pp, ip, cp) {
        return this.i5(pp, ip, cp)
      }
      E_(pp) {
        return this.r = this.g = this.b = pp, this
      }
      toHexString() {
        const pp = Math.round(255 * this.r),
          ip = Math.round(255 * this.g),
          cp = Math.round(255 * this.b);
        return "#" + (0, Ip.ToHex)(pp) + (0, Ip.ToHex)(ip) + (0, Ip.ToHex)(cp)
      }
      fromHexString(pp) {
        return "#" !== pp.substring(0, 1) || 7 !== pp.length || (this.r = parseInt(pp.substring(1, 3), 16) / 255, this.g = parseInt(pp.substring(3, 5), 16) / 255, this.b = parseInt(pp.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new Ap)
      }
      toHSVToRef(pp) {
        const ip = this.r,
          cp = this.g,
          Op = this.b,
          op = Math.max(ip, cp, Op),
          Ip = Math.min(ip, cp, Op);
        let Sp = 0,
          xp = 0;
        const Lp = op,
          Yp = op - Ip;
        return 0 !== op && (xp = Yp / op), op != Ip && (op == ip ? (Sp = (cp - Op) / Yp, cp < Op && (Sp += 6)) : op == cp ? Sp = (Op - ip) / Yp + 2 : op == Op && (Sp = (ip - cp) / Yp + 4), Sp *= 60), pp.r = Sp, pp.g = xp, pp.b = Lp, pp
      }
      toLinearSpace() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ip = new Ap;
        return this.toLinearSpaceToRef(ip, pp), ip
      }
      toLinearSpaceToRef(pp) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (pp.r = Lp(this.r), pp.g = Lp(this.g), pp.b = Lp(this.b)) : (pp.r = xp(this.r), pp.g = xp(this.g), pp.b = xp(this.b)), this
      }
      toGammaSpace() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ip = new Ap;
        return this.toGammaSpaceToRef(ip, pp), ip
      }
      toGammaSpaceToRef(pp) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (pp.r = Dp(this.r), pp.g = Dp(this.g), pp.b = Dp(this.b)) : (pp.r = Yp(this.r), pp.g = Yp(this.g), pp.b = Yp(this.b)), this
      }
      static HSVtoRGBToRef(pp, ip, cp, Op) {
        const op = cp * ip,
          Ip = pp / 60,
          Sp = op * (1 - Math.abs(Ip % 2 - 1));
        let xp = 0,
          Lp = 0,
          Yp = 0;
        Ip >= 0 && Ip <= 1 ? (xp = op, Lp = Sp) : Ip >= 1 && Ip <= 2 ? (xp = Sp, Lp = op) : Ip >= 2 && Ip <= 3 ? (Lp = op, Yp = Sp) : Ip >= 3 && Ip <= 4 ? (Lp = Sp, Yp = op) : Ip >= 4 && Ip <= 5 ? (xp = Sp, Yp = op) : Ip >= 5 && Ip <= 6 && (xp = op, Yp = Sp);
        const Dp = cp - op;
        return Op.r = xp + Dp, Op.g = Lp + Dp, Op.b = Yp + Dp, Op
      }
      static FromHSV(pp, ip, cp) {
        const Op = new Ap(0, 0, 0);
        return Ap.HSVtoRGBToRef(pp, ip, cp, Op), Op
      }
      static FromHexString(pp) {
        return new Ap(0, 0, 0).fromHexString(pp)
      }
      static FromArray(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Ap(pp[ip], pp[ip + 1], pp[ip + 2])
      }
      static FromArrayToRef(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        cp.r = pp[ip], cp.g = pp[ip + 1], cp.b = pp[ip + 2]
      }
      static FromInts(pp, ip, cp) {
        return new Ap(pp / 255, ip / 255, cp / 255)
      }
      static Lerp(pp, ip, cp) {
        const Op = new Ap(0, 0, 0);
        return Ap.LerpToRef(pp, ip, cp, Op), Op
      }
      static LerpToRef(pp, ip, cp, Op) {
        Op.r = pp.r + (ip.r - pp.r) * cp, Op.g = pp.g + (ip.g - pp.g) * cp, Op.b = pp.b + (ip.b - pp.b) * cp
      }
      static Hermite(pp, ip, cp, Op, op) {
        const Ip = op * op,
          Sp = op * Ip,
          xp = 2 * Sp - 3 * Ip + 1,
          Lp = -2 * Sp + 3 * Ip,
          Yp = Sp - 2 * Ip + op,
          Dp = Sp - Ip,
          Pp = pp.r * xp + cp.r * Lp + ip.r * Yp + Op.r * Dp,
          Wp = pp.g * xp + cp.g * Lp + ip.g * Yp + Op.g * Dp,
          yp = pp.b * xp + cp.b * Lp + ip.b * Yp + Op.b * Dp;
        return new Ap(Pp, Wp, yp)
      }
      static Hermite1stDerivative(pp, ip, cp, Op, op) {
        const Ip = Ap.Black();
        return this.Hermite1stDerivativeToRef(pp, ip, cp, Op, op, Ip), Ip
      }
      static Hermite1stDerivativeToRef(pp, ip, cp, Op, op, Ip) {
        const Sp = op * op;
        Ip.r = 6 * (Sp - op) * pp.r + (3 * Sp - 4 * op + 1) * ip.r + 6 * (-Sp + op) * cp.r + (3 * Sp - 2 * op) * Op.r, Ip.g = 6 * (Sp - op) * pp.g + (3 * Sp - 4 * op + 1) * ip.g + 6 * (-Sp + op) * cp.g + (3 * Sp - 2 * op) * Op.g, Ip.b = 6 * (Sp - op) * pp.b + (3 * Sp - 4 * op + 1) * ip.b + 6 * (-Sp + op) * cp.b + (3 * Sp - 2 * op) * Op.b
      }
      static Red() {
        return new Ap(1, 0, 0)
      }
      static Green() {
        return new Ap(0, 1, 0)
      }
      static Blue() {
        return new Ap(0, 0, 1)
      }
      static Black() {
        return new Ap(0, 0, 0)
      }
      static get BlackReadOnly() {
        return Ap._BlackReadOnly
      }
      static White() {
        return new Ap(1, 1, 1)
      }
      static Purple() {
        return new Ap(.5, 0, .5)
      }
      static Magenta() {
        return new Ap(1, 0, 1)
      }
      static Yellow() {
        return new Ap(1, 1, 0)
      }
      static Gray() {
        return new Ap(.5, .5, .5)
      }
      static Teal() {
        return new Ap(0, 1, 1)
      }
      static Random() {
        return new Ap(Math.random(), Math.random(), Math.random())
      }
    }
    Ap._V8PerformanceHack = new Ap(.5, .5, .5), Ap._BlackReadOnly = Ap.Black();
    class Pp {
      constructor() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = pp, this.g = ip, this.b = cp, this.a = Op
      }
      BOp() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return pp[ip] = this.r, pp[ip + 1] = this.g, pp[ip + 2] = this.b, pp[ip + 3] = this.a, this
      }
      vcp(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = pp[ip], this.g = pp[ip + 1], this.b = pp[ip + 2], this.a = pp[ip + 3], this
      }
      equals(pp) {
        return pp && this.r === pp.r && this.g === pp.g && this.b === pp.b && this.a === pp.a
      }
      add(pp) {
        return new Pp(this.r + pp.r, this.g + pp.g, this.b + pp.b, this.a + pp.a)
      }
      addToRef(pp, ip) {
        return ip.r = this.r + pp.r, ip.g = this.g + pp.g, ip.b = this.b + pp.b, ip.a = this.a + pp.a, ip
      }
      addInPlace(pp) {
        return this.r += pp.r, this.g += pp.g, this.b += pp.b, this.a += pp.a, this
      }
      addInPlaceFromFloats(pp, ip, cp, Op) {
        return this.r += pp, this.g += ip, this.b += cp, this.a += Op, this
      }
      subtract(pp) {
        return new Pp(this.r - pp.r, this.g - pp.g, this.b - pp.b, this.a - pp.a)
      }
      subtractToRef(pp, ip) {
        return ip.r = this.r - pp.r, ip.g = this.g - pp.g, ip.b = this.b - pp.b, ip.a = this.a - pp.a, ip
      }
      Iop(pp) {
        return this.r -= pp.r, this.g -= pp.g, this.b -= pp.b, this.a -= pp.a, this
      }
      subtractFromFloats(pp, ip, cp, Op) {
        return new Pp(this.r - pp, this.g - ip, this.b - cp, this.a - Op)
      }
      subtractFromFloatsToRef(pp, ip, cp, Op, op) {
        return op.r = this.r - pp, op.g = this.g - ip, op.b = this.b - cp, op.a = this.a - Op, op
      }
      scale(pp) {
        return new Pp(this.r * pp, this.g * pp, this.b * pp, this.a * pp)
      }
      scaleInPlace(pp) {
        return this.r *= pp, this.g *= pp, this.b *= pp, this.a *= pp, this
      }
      scaleToRef(pp, ip) {
        return ip.r = this.r * pp, ip.g = this.g * pp, ip.b = this.b * pp, ip.a = this.a * pp, ip
      }
      scaleAndAddToRef(pp, ip) {
        return ip.r += this.r * pp, ip.g += this.g * pp, ip.b += this.b * pp, ip.a += this.a * pp, ip
      }
      clampToRef() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        return cp.r = (0, Ip.Clamp)(this.r, pp, ip), cp.g = (0, Ip.Clamp)(this.g, pp, ip), cp.b = (0, Ip.Clamp)(this.b, pp, ip), cp.a = (0, Ip.Clamp)(this.a, pp, ip), cp
      }
      multiply(pp) {
        return new Pp(this.r * pp.r, this.g * pp.g, this.b * pp.b, this.a * pp.a)
      }
      multiplyToRef(pp, ip) {
        return ip.r = this.r * pp.r, ip.g = this.g * pp.g, ip.b = this.b * pp.b, ip.a = this.a * pp.a, ip
      }
      multiplyInPlace(pp) {
        return this.r *= pp.r, this.g *= pp.g, this.b *= pp.b, this.a *= pp.a, this
      }
      multiplyByFloats(pp, ip, cp, Op) {
        return new Pp(this.r * pp, this.g * ip, this.b * cp, this.a * Op)
      }
      divide(pp) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(pp, ip) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(pp) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(pp) {
        return this.r = Math.min(this.r, pp.r), this.g = Math.min(this.g, pp.g), this.b = Math.min(this.b, pp.b), this.a = Math.min(this.a, pp.a), this
      }
      maximizeInPlace(pp) {
        return this.r = Math.max(this.r, pp.r), this.g = Math.max(this.g, pp.g), this.b = Math.max(this.b, pp.b), this.a = Math.max(this.a, pp.a), this
      }
      minimizeInPlaceFromFloats(pp, ip, cp, Op) {
        return this.r = Math.min(pp, this.r), this.g = Math.min(ip, this.g), this.b = Math.min(cp, this.b), this.a = Math.min(Op, this.a), this
      }
      maximizeInPlaceFromFloats(pp, ip, cp, Op) {
        return this.r = Math.max(pp, this.r), this.g = Math.max(ip, this.g), this.b = Math.max(cp, this.b), this.a = Math.max(Op, this.a), this
      }
      floorToRef(pp) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(pp) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      gp() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(pp) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : op.b;
        return (0, Ip.WithinEpsilon)(this.r, pp.r, ip) && (0, Ip.WithinEpsilon)(this.g, pp.g, ip) && (0, Ip.WithinEpsilon)(this.b, pp.b, ip) && (0, Ip.WithinEpsilon)(this.a, pp.a, ip)
      }
      jxp(pp, ip, cp, Op) {
        return this.r === pp && this.g === ip && this.b === cp && this.a === Op
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let pp = 255 * this.r | 0;
        return pp = 397 * pp ^ 255 * this.g, pp = 397 * pp ^ 255 * this.b, pp = 397 * pp ^ 255 * this.a, pp
      }
      clone() {
        return (new Pp).rM(this)
      }
      rM(pp) {
        return this.r = pp.r, this.g = pp.g, this.b = pp.b, this.a = pp.a, this
      }
      i5(pp, ip, cp, Op) {
        return this.r = pp, this.g = ip, this.b = cp, this.a = Op, this
      }
      set(pp, ip, cp, Op) {
        return this.i5(pp, ip, cp, Op)
      }
      E_(pp) {
        return this.r = this.g = this.b = this.a = pp, this
      }
      toHexString() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ip = Math.round(255 * this.r),
          cp = Math.round(255 * this.g),
          Op = Math.round(255 * this.b);
        if (pp) return "#" + (0, Ip.ToHex)(ip) + (0, Ip.ToHex)(cp) + (0, Ip.ToHex)(Op);
        const op = Math.round(255 * this.a);
        return "#" + (0, Ip.ToHex)(ip) + (0, Ip.ToHex)(cp) + (0, Ip.ToHex)(Op) + (0, Ip.ToHex)(op)
      }
      fromHexString(pp) {
        return "#" !== pp.substring(0, 1) || 9 !== pp.length && 7 !== pp.length || (this.r = parseInt(pp.substring(1, 3), 16) / 255, this.g = parseInt(pp.substring(3, 5), 16) / 255, this.b = parseInt(pp.substring(5, 7), 16) / 255, 9 === pp.length && (this.a = parseInt(pp.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ip = new Pp;
        return this.toLinearSpaceToRef(ip, pp), ip
      }
      toLinearSpaceToRef(pp) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (pp.r = Lp(this.r), pp.g = Lp(this.g), pp.b = Lp(this.b)) : (pp.r = xp(this.r), pp.g = xp(this.g), pp.b = xp(this.b)), pp.a = this.a, this
      }
      toGammaSpace() {
        let pp = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ip = new Pp;
        return this.toGammaSpaceToRef(ip, pp), ip
      }
      toGammaSpaceToRef(pp) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (pp.r = Dp(this.r), pp.g = Dp(this.g), pp.b = Dp(this.b)) : (pp.r = Yp(this.r), pp.g = Yp(this.g), pp.b = Yp(this.b)), pp.a = this.a, this
      }
      static FromHexString(pp) {
        return "#" !== pp.substring(0, 1) || 9 !== pp.length && 7 !== pp.length ? new Pp(0, 0, 0, 0) : new Pp(0, 0, 0, 1).fromHexString(pp)
      }
      static Lerp(pp, ip, cp) {
        return Pp.LerpToRef(pp, ip, cp, new Pp)
      }
      static LerpToRef(pp, ip, cp, Op) {
        return Op.r = pp.r + (ip.r - pp.r) * cp, Op.g = pp.g + (ip.g - pp.g) * cp, Op.b = pp.b + (ip.b - pp.b) * cp, Op.a = pp.a + (ip.a - pp.a) * cp, Op
      }
      static Hermite(pp, ip, cp, Op, op) {
        const Ip = op * op,
          Sp = op * Ip,
          xp = 2 * Sp - 3 * Ip + 1,
          Lp = -2 * Sp + 3 * Ip,
          Yp = Sp - 2 * Ip + op,
          Dp = Sp - Ip,
          Ap = pp.r * xp + cp.r * Lp + ip.r * Yp + Op.r * Dp,
          Wp = pp.g * xp + cp.g * Lp + ip.g * Yp + Op.g * Dp,
          yp = pp.b * xp + cp.b * Lp + ip.b * Yp + Op.b * Dp,
          Up = pp.a * xp + cp.a * Lp + ip.a * Yp + Op.a * Dp;
        return new Pp(Ap, Wp, yp, Up)
      }
      static Hermite1stDerivative(pp, ip, cp, Op, op) {
        const Ip = new Pp;
        return this.Hermite1stDerivativeToRef(pp, ip, cp, Op, op, Ip), Ip
      }
      static Hermite1stDerivativeToRef(pp, ip, cp, Op, op, Ip) {
        const Sp = op * op;
        Ip.r = 6 * (Sp - op) * pp.r + (3 * Sp - 4 * op + 1) * ip.r + 6 * (-Sp + op) * cp.r + (3 * Sp - 2 * op) * Op.r, Ip.g = 6 * (Sp - op) * pp.g + (3 * Sp - 4 * op + 1) * ip.g + 6 * (-Sp + op) * cp.g + (3 * Sp - 2 * op) * Op.g, Ip.b = 6 * (Sp - op) * pp.b + (3 * Sp - 4 * op + 1) * ip.b + 6 * (-Sp + op) * cp.b + (3 * Sp - 2 * op) * Op.b, Ip.a = 6 * (Sp - op) * pp.a + (3 * Sp - 4 * op + 1) * ip.a + 6 * (-Sp + op) * cp.a + (3 * Sp - 2 * op) * Op.a
      }
      static FromColor3(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Pp(pp.r, pp.g, pp.b, ip)
      }
      static FromArray(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Pp(pp[ip], pp[ip + 1], pp[ip + 2], pp[ip + 3])
      }
      static FromArrayToRef(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        cp.r = pp[ip], cp.g = pp[ip + 1], cp.b = pp[ip + 2], cp.a = pp[ip + 3]
      }
      static FromInts(pp, ip, cp, Op) {
        return new Pp(pp / 255, ip / 255, cp / 255, Op / 255)
      }
      static CheckColors4(pp, ip) {
        if (pp.length === 3 * ip) {
          const ip = [];
          for (let cp = 0; cp < pp.length; cp += 3) {
            const Op = cp / 3 * 4;
            ip[Op] = pp[cp], ip[Op + 1] = pp[cp + 1], ip[Op + 2] = pp[cp + 2], ip[Op + 3] = 1
          }
          return ip
        }
        return pp
      }
    }
    Pp._V8PerformanceHack = new Pp(.5, .5, .5, .5);
    class Wp {}
    Wp.Color3 = (0, Op.d)(3, Ap.Black), Wp.Color4 = (0, Op.d)(3, (() => new Pp(0, 0, 0, 0)));
    let yp = !1;

    function Up() {
      yp || (yp = !0, Object.defineProperties(Ap.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Pp.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, Sp.g)("BABYLON.Color3", Ap), (0, Sp.g)("BABYLON.Color4", Pp))
    }
  },
  37324: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip,
      d: () => Op,
      g: () => op
    });
    const Op = 1 / 2.2,
      op = 2.2;
    Math.sqrt(5);
    let Ip = .001
  },
  37356: (pp, ip, cp) => {
    function Op(pp) {
      return parseInt(pp.toString().replace(/\W/g, ""))
    }

    function op(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(pp - ip) <= cp
    }

    function Ip(pp, ip, cp) {
      let Op = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return pp < ip - Op || pp > cp + Op
    }

    function Sp(pp, ip) {
      return pp === ip ? pp : Math.random() * (ip - pp) + pp
    }

    function xp(pp, ip, cp) {
      return pp + (ip - pp) * cp
    }

    function Lp(pp, ip, cp) {
      let Op = wp(ip - pp, 360);
      return Op > 180 && (Op -= 360), pp + Op * Pp(cp)
    }

    function Yp(pp, ip, cp) {
      let Op;
      return Op = pp != ip ? Pp((cp - pp) / (ip - pp)) : 0, Op
    }

    function Dp(pp, ip, cp, Op, op) {
      const Ip = op * op,
        Sp = op * Ip;
      return pp * (2 * Sp - 3 * Ip + 1) + cp * (-2 * Sp + 3 * Ip) + ip * (Sp - 2 * Ip + op) + Op * (Sp - Ip)
    }

    function Ap(pp, ip, cp, Op, op) {
      const Ip = op * op;
      return 6 * (Ip - op) * pp + (3 * Ip - 4 * op + 1) * ip + 6 * (-Ip + op) * cp + (3 * Ip - 2 * op) * Op
    }

    function Pp(pp) {
      let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(cp, Math.max(ip, pp))
    }

    function Wp(pp) {
      return pp -= 2 * Math.PI * Math.floor((pp + Math.PI) / (2 * Math.PI))
    }

    function yp(pp) {
      const ip = pp.toString(16);
      return pp <= 15 ? ("0" + ip).toUpperCase() : ip.toUpperCase()
    }

    function Up(pp) {
      if (Math.log2) return Math.floor(Math.log2(pp));
      if (pp < 0) return NaN;
      if (0 === pp) return -1 / 0;
      let ip = 0;
      if (pp < 1) {
        for (; pp < 1;) ip++, pp *= 2;
        ip = -ip
      } else if (pp > 1)
        for (; pp > 1;) ip++, pp = Math.floor(pp / 2);
      return ip
    }

    function wp(pp, ip) {
      return pp - Math.floor(pp / ip) * ip
    }

    function vp(pp, ip, cp) {
      return (pp - ip) / (cp - ip)
    }

    function tp(pp, ip, cp) {
      return pp * (cp - ip) + ip
    }

    function Hp(pp, ip) {
      let cp = wp(ip - pp, 360);
      return cp > 180 && (cp -= 360), cp
    }

    function dp(pp, ip) {
      const cp = wp(pp, 2 * ip);
      return ip - Math.abs(cp - ip)
    }

    function ep(pp, ip, cp) {
      let Op = Pp(cp);
      return Op = -2 * Op * Op * Op + 3 * Op * Op, ip * Op + pp * (1 - Op)
    }

    function jp(pp, ip, cp) {
      let Op;
      return Op = Math.abs(ip - pp) <= cp ? ip : pp + Math.sign(ip - pp) * cp, Op
    }

    function kp(pp, ip, cp) {
      const Op = Hp(pp, ip);
      let op;
      return op = -cp < Op && Op < cp ? ip : jp(pp, ip = pp + Op, cp), op
    }

    function mp(pp, ip, cp) {
      return (pp - ip) / (cp - ip)
    }

    function Rp(pp, ip, cp) {
      return (cp - ip) * pp + ip
    }

    function qp(pp, ip) {
      const cp = pp % ip;
      return 0 === cp ? ip : qp(ip, cp)
    }
    cp.r(ip), cp.d(ip, {
      Clamp: () => Pp,
      DeltaAngle: () => Hp,
      Denormalize: () => tp,
      ExtractAsInt: () => Op,
      Hermite: () => Dp,
      Hermite1stDerivative: () => Ap,
      HighestCommonFactor: () => qp,
      ILog2: () => Up,
      InverseLerp: () => Yp,
      Lerp: () => xp,
      LerpAngle: () => Lp,
      MoveTowards: () => jp,
      MoveTowardsAngle: () => kp,
      Normalize: () => vp,
      NormalizeRadians: () => Wp,
      OutsideRange: () => Ip,
      PercentToRange: () => Rp,
      PingPong: () => dp,
      RandomRange: () => Sp,
      RangeToPercent: () => mp,
      Repeat: () => wp,
      SmoothStep: () => ep,
      ToHex: () => yp,
      WithinEpsilon: () => op
    })
  },
  37329: (pp, ip, cp) => {
    function Op(pp, ip) {
      const cp = [];
      for (let Op = 0; Op < pp; ++Op) cp.push(ip());
      return cp
    }

    function op(pp, ip) {
      return Op(pp, ip)
    }
    cp.d(ip, {
      d: () => Op,
      g: () => op,
      j: () => Sp
    });
    const Ip = ["push", "splice", "pop", "shift", "unshift"];

    function Sp(pp, ip) {
      const cp = Ip.map((cp => function(pp, ip, cp) {
        const Op = pp[ip];
        if ("function" !== typeof Op) return null;
        const op = function() {
          const Op = pp.length,
            Ip = op.previous.apply(pp, arguments);
          return cp(ip, Op), Ip
        };
        return Op.next = op, op.previous = Op, pp[ip] = op, () => {
          const cp = op.previous;
          if (!cp) return;
          const Op = op.next;
          Op ? (cp.next = Op, Op.previous = cp) : (cp.next = void 0, pp[ip] = cp), op.next = void 0, op.previous = void 0
        }
      }(pp, cp, ip)));
      return () => {
        for (const pp of cp) pp?.()
      }
    }
  },
  37368: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Ip,
      g: () => op
    });
    const Op = {};

    function op(pp, ip) {
      Op[pp] = ip
    }

    function Ip(pp) {
      return Op[pp]
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);