export const id = 227;
export const ids = [227];
export const modules = {
  37289: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => Bq,
      g: () => Wq,
      h: () => Vq,
      k: () => Nq
    });
    var Yq = gq(37149),
      lq = gq(37145),
      Oq = gq(37158),
      mq = gq(37171);

    function xq(qq) {
      return Math.pow(qq, lq.h)
    }

    function Aq(qq) {
      return qq <= .04045 ? .0773993808 * qq : Math.pow(.947867299 * (qq + .055), 2.4)
    }

    function cq(qq) {
      return Math.pow(qq, lq.e)
    }

    function uq(qq) {
      return qq <= .0031308 ? 12.92 * qq : 1.055 * Math.pow(qq, .41666) - .055
    }
    class Bq {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = qq, this.g = Eq, this.b = gq
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let qq = 255 * this.r | 0;
        return qq = 397 * qq ^ 255 * this.g, qq = 397 * qq ^ 255 * this.b, qq
      }
      toArray(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return qq[Eq] = this.r, qq[Eq + 1] = this.g, qq[Eq + 2] = this.b, this
      }
      ogq(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Bq.FromArrayToRef(qq, Eq, this), this
      }
      toColor4() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new Wq(this.r, this.g, this.b, qq)
      }
      bYq() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(qq) {
        return new Bq(this.r * qq.r, this.g * qq.g, this.b * qq.b)
      }
      multiplyToRef(qq, Eq) {
        return Eq.r = this.r * qq.r, Eq.g = this.g * qq.g, Eq.b = this.b * qq.b, Eq
      }
      multiplyInPlace(qq) {
        return this.r *= qq.r, this.g *= qq.g, this.b *= qq.b, this
      }
      multiplyByFloats(qq, Eq, gq) {
        return new Bq(this.r * qq, this.g * Eq, this.b * gq)
      }
      divide(qq) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(qq, Eq) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(qq) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(qq) {
        return this.minimizeInPlaceFromFloats(qq.r, qq.g, qq.b)
      }
      maximizeInPlace(qq) {
        return this.maximizeInPlaceFromFloats(qq.r, qq.g, qq.b)
      }
      minimizeInPlaceFromFloats(qq, Eq, gq) {
        return this.r = Math.min(qq, this.r), this.g = Math.min(Eq, this.g), this.b = Math.min(gq, this.b), this
      }
      maximizeInPlaceFromFloats(qq, Eq, gq) {
        return this.r = Math.max(qq, this.r), this.g = Math.max(Eq, this.g), this.b = Math.max(gq, this.b), this
      }
      floorToRef(qq) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(qq) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(qq) {
        return qq && this.r === qq.r && this.g === qq.g && this.b === qq.b
      }
      equalsFloats(qq, Eq, gq) {
        return this.Cmq(qq, Eq, gq)
      }
      Cmq(qq, Eq, gq) {
        return this.r === qq && this.g === Eq && this.b === gq
      }
      equalsWithEpsilon(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lq.c;
        return (0, Oq.WithinEpsilon)(this.r, qq.r, Eq) && (0, Oq.WithinEpsilon)(this.g, qq.g, Eq) && (0, Oq.WithinEpsilon)(this.b, qq.b, Eq)
      }
      nY() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(qq) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(qq) {
        return new Bq(this.r * qq, this.g * qq, this.b * qq)
      }
      scaleInPlace(qq) {
        return this.r *= qq, this.g *= qq, this.b *= qq, this
      }
      scaleToRef(qq, Eq) {
        return Eq.r = this.r * qq, Eq.g = this.g * qq, Eq.b = this.b * qq, Eq
      }
      scaleAndAddToRef(qq, Eq) {
        return Eq.r += this.r * qq, Eq.g += this.g * qq, Eq.b += this.b * qq, Eq
      }
      clampToRef() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        return gq.r = (0, Oq.Clamp)(this.r, qq, Eq), gq.g = (0, Oq.Clamp)(this.g, qq, Eq), gq.b = (0, Oq.Clamp)(this.b, qq, Eq), gq
      }
      add(qq) {
        return new Bq(this.r + qq.r, this.g + qq.g, this.b + qq.b)
      }
      addInPlace(qq) {
        return this.r += qq.r, this.g += qq.g, this.b += qq.b, this
      }
      addInPlaceFromFloats(qq, Eq, gq) {
        return this.r += qq, this.g += Eq, this.b += gq, this
      }
      addToRef(qq, Eq) {
        return Eq.r = this.r + qq.r, Eq.g = this.g + qq.g, Eq.b = this.b + qq.b, Eq
      }
      subtract(qq) {
        return new Bq(this.r - qq.r, this.g - qq.g, this.b - qq.b)
      }
      subtractToRef(qq, Eq) {
        return Eq.r = this.r - qq.r, Eq.g = this.g - qq.g, Eq.b = this.b - qq.b, Eq
      }
      KYq(qq) {
        return this.r -= qq.r, this.g -= qq.g, this.b -= qq.b, this
      }
      subtractFromFloats(qq, Eq, gq) {
        return new Bq(this.r - qq, this.g - Eq, this.b - gq)
      }
      subtractFromFloatsToRef(qq, Eq, gq, Yq) {
        return Yq.r = this.r - qq, Yq.g = this.g - Eq, Yq.b = this.b - gq, Yq
      }
      clone() {
        return new Bq(this.r, this.g, this.b)
      }
      WG(qq) {
        return this.r = qq.r, this.g = qq.g, this.b = qq.b, this
      }
      Vqq(qq, Eq, gq) {
        return this.r = qq, this.g = Eq, this.b = gq, this
      }
      set(qq, Eq, gq) {
        return this.Vqq(qq, Eq, gq)
      }
      A4(qq) {
        return this.r = this.g = this.b = qq, this
      }
      toHexString() {
        const qq = Math.round(255 * this.r),
          Eq = Math.round(255 * this.g),
          gq = Math.round(255 * this.b);
        return "#" + (0, Oq.ToHex)(qq) + (0, Oq.ToHex)(Eq) + (0, Oq.ToHex)(gq)
      }
      fromHexString(qq) {
        return "#" !== qq.substring(0, 1) || 7 !== qq.length || (this.r = parseInt(qq.substring(1, 3), 16) / 255, this.g = parseInt(qq.substring(3, 5), 16) / 255, this.b = parseInt(qq.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new Bq)
      }
      toHSVToRef(qq) {
        const Eq = this.r,
          gq = this.g,
          Yq = this.b,
          lq = Math.max(Eq, gq, Yq),
          Oq = Math.min(Eq, gq, Yq);
        let mq = 0,
          xq = 0;
        const Aq = lq,
          cq = lq - Oq;
        return 0 !== lq && (xq = cq / lq), lq != Oq && (lq == Eq ? (mq = (gq - Yq) / cq, gq < Yq && (mq += 6)) : lq == gq ? mq = (Yq - Eq) / cq + 2 : lq == Yq && (mq = (Eq - gq) / cq + 4), mq *= 60), qq.r = mq, qq.g = xq, qq.b = Aq, qq
      }
      toLinearSpace() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eq = new Bq;
        return this.toLinearSpaceToRef(Eq, qq), Eq
      }
      toLinearSpaceToRef(qq) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (qq.r = Aq(this.r), qq.g = Aq(this.g), qq.b = Aq(this.b)) : (qq.r = xq(this.r), qq.g = xq(this.g), qq.b = xq(this.b)), this
      }
      toGammaSpace() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eq = new Bq;
        return this.toGammaSpaceToRef(Eq, qq), Eq
      }
      toGammaSpaceToRef(qq) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (qq.r = uq(this.r), qq.g = uq(this.g), qq.b = uq(this.b)) : (qq.r = cq(this.r), qq.g = cq(this.g), qq.b = cq(this.b)), this
      }
      static HSVtoRGBToRef(qq, Eq, gq, Yq) {
        const lq = gq * Eq,
          Oq = qq / 60,
          mq = lq * (1 - Math.abs(Oq % 2 - 1));
        let xq = 0,
          Aq = 0,
          cq = 0;
        Oq >= 0 && Oq <= 1 ? (xq = lq, Aq = mq) : Oq >= 1 && Oq <= 2 ? (xq = mq, Aq = lq) : Oq >= 2 && Oq <= 3 ? (Aq = lq, cq = mq) : Oq >= 3 && Oq <= 4 ? (Aq = mq, cq = lq) : Oq >= 4 && Oq <= 5 ? (xq = mq, cq = lq) : Oq >= 5 && Oq <= 6 && (xq = lq, cq = mq);
        const uq = gq - lq;
        return Yq.r = xq + uq, Yq.g = Aq + uq, Yq.b = cq + uq, Yq
      }
      static FromHSV(qq, Eq, gq) {
        const Yq = new Bq(0, 0, 0);
        return Bq.HSVtoRGBToRef(qq, Eq, gq, Yq), Yq
      }
      static FromHexString(qq) {
        return new Bq(0, 0, 0).fromHexString(qq)
      }
      static FromArray(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Bq(qq[Eq], qq[Eq + 1], qq[Eq + 2])
      }
      static FromArrayToRef(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        gq.r = qq[Eq], gq.g = qq[Eq + 1], gq.b = qq[Eq + 2]
      }
      static FromInts(qq, Eq, gq) {
        return new Bq(qq / 255, Eq / 255, gq / 255)
      }
      static Lerp(qq, Eq, gq) {
        const Yq = new Bq(0, 0, 0);
        return Bq.LerpToRef(qq, Eq, gq, Yq), Yq
      }
      static LerpToRef(qq, Eq, gq, Yq) {
        Yq.r = qq.r + (Eq.r - qq.r) * gq, Yq.g = qq.g + (Eq.g - qq.g) * gq, Yq.b = qq.b + (Eq.b - qq.b) * gq
      }
      static Hermite(qq, Eq, gq, Yq, lq) {
        const Oq = lq * lq,
          mq = lq * Oq,
          xq = 2 * mq - 3 * Oq + 1,
          Aq = -2 * mq + 3 * Oq,
          cq = mq - 2 * Oq + lq,
          uq = mq - Oq,
          Wq = qq.r * xq + gq.r * Aq + Eq.r * cq + Yq.r * uq,
          Nq = qq.g * xq + gq.g * Aq + Eq.g * cq + Yq.g * uq,
          aq = qq.b * xq + gq.b * Aq + Eq.b * cq + Yq.b * uq;
        return new Bq(Wq, Nq, aq)
      }
      static Hermite1stDerivative(qq, Eq, gq, Yq, lq) {
        const Oq = Bq.Black();
        return this.Hermite1stDerivativeToRef(qq, Eq, gq, Yq, lq, Oq), Oq
      }
      static Hermite1stDerivativeToRef(qq, Eq, gq, Yq, lq, Oq) {
        const mq = lq * lq;
        Oq.r = 6 * (mq - lq) * qq.r + (3 * mq - 4 * lq + 1) * Eq.r + 6 * (-mq + lq) * gq.r + (3 * mq - 2 * lq) * Yq.r, Oq.g = 6 * (mq - lq) * qq.g + (3 * mq - 4 * lq + 1) * Eq.g + 6 * (-mq + lq) * gq.g + (3 * mq - 2 * lq) * Yq.g, Oq.b = 6 * (mq - lq) * qq.b + (3 * mq - 4 * lq + 1) * Eq.b + 6 * (-mq + lq) * gq.b + (3 * mq - 2 * lq) * Yq.b
      }
      static Red() {
        return new Bq(1, 0, 0)
      }
      static Green() {
        return new Bq(0, 1, 0)
      }
      static Blue() {
        return new Bq(0, 0, 1)
      }
      static Black() {
        return new Bq(0, 0, 0)
      }
      static get BlackReadOnly() {
        return Bq._BlackReadOnly
      }
      static White() {
        return new Bq(1, 1, 1)
      }
      static Purple() {
        return new Bq(.5, 0, .5)
      }
      static Magenta() {
        return new Bq(1, 0, 1)
      }
      static Yellow() {
        return new Bq(1, 1, 0)
      }
      static Gray() {
        return new Bq(.5, .5, .5)
      }
      static Teal() {
        return new Bq(0, 1, 1)
      }
      static Random() {
        return new Bq(Math.random(), Math.random(), Math.random())
      }
    }
    Bq._V8PerformanceHack = new Bq(.5, .5, .5), Bq._BlackReadOnly = Bq.Black();
    class Wq {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = qq, this.g = Eq, this.b = gq, this.a = Yq
      }
      bYq() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return qq[Eq] = this.r, qq[Eq + 1] = this.g, qq[Eq + 2] = this.b, qq[Eq + 3] = this.a, this
      }
      ogq(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = qq[Eq], this.g = qq[Eq + 1], this.b = qq[Eq + 2], this.a = qq[Eq + 3], this
      }
      equals(qq) {
        return qq && this.r === qq.r && this.g === qq.g && this.b === qq.b && this.a === qq.a
      }
      add(qq) {
        return new Wq(this.r + qq.r, this.g + qq.g, this.b + qq.b, this.a + qq.a)
      }
      addToRef(qq, Eq) {
        return Eq.r = this.r + qq.r, Eq.g = this.g + qq.g, Eq.b = this.b + qq.b, Eq.a = this.a + qq.a, Eq
      }
      addInPlace(qq) {
        return this.r += qq.r, this.g += qq.g, this.b += qq.b, this.a += qq.a, this
      }
      addInPlaceFromFloats(qq, Eq, gq, Yq) {
        return this.r += qq, this.g += Eq, this.b += gq, this.a += Yq, this
      }
      subtract(qq) {
        return new Wq(this.r - qq.r, this.g - qq.g, this.b - qq.b, this.a - qq.a)
      }
      subtractToRef(qq, Eq) {
        return Eq.r = this.r - qq.r, Eq.g = this.g - qq.g, Eq.b = this.b - qq.b, Eq.a = this.a - qq.a, Eq
      }
      KYq(qq) {
        return this.r -= qq.r, this.g -= qq.g, this.b -= qq.b, this.a -= qq.a, this
      }
      subtractFromFloats(qq, Eq, gq, Yq) {
        return new Wq(this.r - qq, this.g - Eq, this.b - gq, this.a - Yq)
      }
      subtractFromFloatsToRef(qq, Eq, gq, Yq, lq) {
        return lq.r = this.r - qq, lq.g = this.g - Eq, lq.b = this.b - gq, lq.a = this.a - Yq, lq
      }
      scale(qq) {
        return new Wq(this.r * qq, this.g * qq, this.b * qq, this.a * qq)
      }
      scaleInPlace(qq) {
        return this.r *= qq, this.g *= qq, this.b *= qq, this.a *= qq, this
      }
      scaleToRef(qq, Eq) {
        return Eq.r = this.r * qq, Eq.g = this.g * qq, Eq.b = this.b * qq, Eq.a = this.a * qq, Eq
      }
      scaleAndAddToRef(qq, Eq) {
        return Eq.r += this.r * qq, Eq.g += this.g * qq, Eq.b += this.b * qq, Eq.a += this.a * qq, Eq
      }
      clampToRef() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        return gq.r = (0, Oq.Clamp)(this.r, qq, Eq), gq.g = (0, Oq.Clamp)(this.g, qq, Eq), gq.b = (0, Oq.Clamp)(this.b, qq, Eq), gq.a = (0, Oq.Clamp)(this.a, qq, Eq), gq
      }
      multiply(qq) {
        return new Wq(this.r * qq.r, this.g * qq.g, this.b * qq.b, this.a * qq.a)
      }
      multiplyToRef(qq, Eq) {
        return Eq.r = this.r * qq.r, Eq.g = this.g * qq.g, Eq.b = this.b * qq.b, Eq.a = this.a * qq.a, Eq
      }
      multiplyInPlace(qq) {
        return this.r *= qq.r, this.g *= qq.g, this.b *= qq.b, this.a *= qq.a, this
      }
      multiplyByFloats(qq, Eq, gq, Yq) {
        return new Wq(this.r * qq, this.g * Eq, this.b * gq, this.a * Yq)
      }
      divide(qq) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(qq, Eq) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(qq) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(qq) {
        return this.r = Math.min(this.r, qq.r), this.g = Math.min(this.g, qq.g), this.b = Math.min(this.b, qq.b), this.a = Math.min(this.a, qq.a), this
      }
      maximizeInPlace(qq) {
        return this.r = Math.max(this.r, qq.r), this.g = Math.max(this.g, qq.g), this.b = Math.max(this.b, qq.b), this.a = Math.max(this.a, qq.a), this
      }
      minimizeInPlaceFromFloats(qq, Eq, gq, Yq) {
        return this.r = Math.min(qq, this.r), this.g = Math.min(Eq, this.g), this.b = Math.min(gq, this.b), this.a = Math.min(Yq, this.a), this
      }
      maximizeInPlaceFromFloats(qq, Eq, gq, Yq) {
        return this.r = Math.max(qq, this.r), this.g = Math.max(Eq, this.g), this.b = Math.max(gq, this.b), this.a = Math.max(Yq, this.a), this
      }
      floorToRef(qq) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(qq) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      nY() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(qq) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lq.c;
        return (0, Oq.WithinEpsilon)(this.r, qq.r, Eq) && (0, Oq.WithinEpsilon)(this.g, qq.g, Eq) && (0, Oq.WithinEpsilon)(this.b, qq.b, Eq) && (0, Oq.WithinEpsilon)(this.a, qq.a, Eq)
      }
      Cmq(qq, Eq, gq, Yq) {
        return this.r === qq && this.g === Eq && this.b === gq && this.a === Yq
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let qq = 255 * this.r | 0;
        return qq = 397 * qq ^ 255 * this.g, qq = 397 * qq ^ 255 * this.b, qq = 397 * qq ^ 255 * this.a, qq
      }
      clone() {
        return (new Wq).WG(this)
      }
      WG(qq) {
        return this.r = qq.r, this.g = qq.g, this.b = qq.b, this.a = qq.a, this
      }
      Vqq(qq, Eq, gq, Yq) {
        return this.r = qq, this.g = Eq, this.b = gq, this.a = Yq, this
      }
      set(qq, Eq, gq, Yq) {
        return this.Vqq(qq, Eq, gq, Yq)
      }
      A4(qq) {
        return this.r = this.g = this.b = this.a = qq, this
      }
      toHexString() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eq = Math.round(255 * this.r),
          gq = Math.round(255 * this.g),
          Yq = Math.round(255 * this.b);
        if (qq) return "#" + (0, Oq.ToHex)(Eq) + (0, Oq.ToHex)(gq) + (0, Oq.ToHex)(Yq);
        const lq = Math.round(255 * this.a);
        return "#" + (0, Oq.ToHex)(Eq) + (0, Oq.ToHex)(gq) + (0, Oq.ToHex)(Yq) + (0, Oq.ToHex)(lq)
      }
      fromHexString(qq) {
        return "#" !== qq.substring(0, 1) || 9 !== qq.length && 7 !== qq.length || (this.r = parseInt(qq.substring(1, 3), 16) / 255, this.g = parseInt(qq.substring(3, 5), 16) / 255, this.b = parseInt(qq.substring(5, 7), 16) / 255, 9 === qq.length && (this.a = parseInt(qq.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eq = new Wq;
        return this.toLinearSpaceToRef(Eq, qq), Eq
      }
      toLinearSpaceToRef(qq) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (qq.r = Aq(this.r), qq.g = Aq(this.g), qq.b = Aq(this.b)) : (qq.r = xq(this.r), qq.g = xq(this.g), qq.b = xq(this.b)), qq.a = this.a, this
      }
      toGammaSpace() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Eq = new Wq;
        return this.toGammaSpaceToRef(Eq, qq), Eq
      }
      toGammaSpaceToRef(qq) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (qq.r = uq(this.r), qq.g = uq(this.g), qq.b = uq(this.b)) : (qq.r = cq(this.r), qq.g = cq(this.g), qq.b = cq(this.b)), qq.a = this.a, this
      }
      static FromHexString(qq) {
        return "#" !== qq.substring(0, 1) || 9 !== qq.length && 7 !== qq.length ? new Wq(0, 0, 0, 0) : new Wq(0, 0, 0, 1).fromHexString(qq)
      }
      static Lerp(qq, Eq, gq) {
        return Wq.LerpToRef(qq, Eq, gq, new Wq)
      }
      static LerpToRef(qq, Eq, gq, Yq) {
        return Yq.r = qq.r + (Eq.r - qq.r) * gq, Yq.g = qq.g + (Eq.g - qq.g) * gq, Yq.b = qq.b + (Eq.b - qq.b) * gq, Yq.a = qq.a + (Eq.a - qq.a) * gq, Yq
      }
      static Hermite(qq, Eq, gq, Yq, lq) {
        const Oq = lq * lq,
          mq = lq * Oq,
          xq = 2 * mq - 3 * Oq + 1,
          Aq = -2 * mq + 3 * Oq,
          cq = mq - 2 * Oq + lq,
          uq = mq - Oq,
          Bq = qq.r * xq + gq.r * Aq + Eq.r * cq + Yq.r * uq,
          Nq = qq.g * xq + gq.g * Aq + Eq.g * cq + Yq.g * uq,
          aq = qq.b * xq + gq.b * Aq + Eq.b * cq + Yq.b * uq,
          Vq = qq.a * xq + gq.a * Aq + Eq.a * cq + Yq.a * uq;
        return new Wq(Bq, Nq, aq, Vq)
      }
      static Hermite1stDerivative(qq, Eq, gq, Yq, lq) {
        const Oq = new Wq;
        return this.Hermite1stDerivativeToRef(qq, Eq, gq, Yq, lq, Oq), Oq
      }
      static Hermite1stDerivativeToRef(qq, Eq, gq, Yq, lq, Oq) {
        const mq = lq * lq;
        Oq.r = 6 * (mq - lq) * qq.r + (3 * mq - 4 * lq + 1) * Eq.r + 6 * (-mq + lq) * gq.r + (3 * mq - 2 * lq) * Yq.r, Oq.g = 6 * (mq - lq) * qq.g + (3 * mq - 4 * lq + 1) * Eq.g + 6 * (-mq + lq) * gq.g + (3 * mq - 2 * lq) * Yq.g, Oq.b = 6 * (mq - lq) * qq.b + (3 * mq - 4 * lq + 1) * Eq.b + 6 * (-mq + lq) * gq.b + (3 * mq - 2 * lq) * Yq.b, Oq.a = 6 * (mq - lq) * qq.a + (3 * mq - 4 * lq + 1) * Eq.a + 6 * (-mq + lq) * gq.a + (3 * mq - 2 * lq) * Yq.a
      }
      static FromColor3(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Wq(qq.r, qq.g, qq.b, Eq)
      }
      static FromArray(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Wq(qq[Eq], qq[Eq + 1], qq[Eq + 2], qq[Eq + 3])
      }
      static FromArrayToRef(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        gq.r = qq[Eq], gq.g = qq[Eq + 1], gq.b = qq[Eq + 2], gq.a = qq[Eq + 3]
      }
      static FromInts(qq, Eq, gq, Yq) {
        return new Wq(qq / 255, Eq / 255, gq / 255, Yq / 255)
      }
      static CheckColors4(qq, Eq) {
        if (qq.length === 3 * Eq) {
          const Eq = [];
          for (let gq = 0; gq < qq.length; gq += 3) {
            const Yq = gq / 3 * 4;
            Eq[Yq] = qq[gq], Eq[Yq + 1] = qq[gq + 1], Eq[Yq + 2] = qq[gq + 2], Eq[Yq + 3] = 1
          }
          return Eq
        }
        return qq
      }
    }
    Wq._V8PerformanceHack = new Wq(.5, .5, .5, .5);
    class Nq {}
    Nq.Color3 = (0, Yq.e)(3, Bq.Black), Nq.Color4 = (0, Yq.e)(3, (() => new Wq(0, 0, 0, 0)));
    let aq = !1;

    function Vq() {
      aq || (aq = !0, Object.defineProperties(Bq.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Wq.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, mq.g)("BABYLON.Color3", Bq), (0, mq.g)("BABYLON.Color4", Wq))
    }
  },
  37145: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Oq,
      e: () => Yq,
      h: () => lq
    });
    const Yq = 1 / 2.2,
      lq = 2.2;
    Math.sqrt(5);
    let Oq = .001
  },
  37158: (qq, Eq, gq) => {
    function Yq(qq) {
      return parseInt(qq.toString().replace(/\W/g, ""))
    }

    function lq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(qq - Eq) <= gq
    }

    function Oq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return qq < Eq - Yq || qq > gq + Yq
    }

    function mq(qq, Eq) {
      return qq === Eq ? qq : Math.random() * (Eq - qq) + qq
    }

    function xq(qq, Eq, gq) {
      return qq + (Eq - qq) * gq
    }

    function Aq(qq, Eq, gq) {
      let Yq = dq(Eq - qq, 360);
      return Yq > 180 && (Yq -= 360), qq + Yq * Wq(gq)
    }

    function cq(qq, Eq, gq) {
      let Yq;
      return Yq = qq != Eq ? Wq((gq - qq) / (Eq - qq)) : 0, Yq
    }

    function uq(qq, Eq, gq, Yq, lq) {
      const Oq = lq * lq,
        mq = lq * Oq;
      return qq * (2 * mq - 3 * Oq + 1) + gq * (-2 * mq + 3 * Oq) + Eq * (mq - 2 * Oq + lq) + Yq * (mq - Oq)
    }

    function Bq(qq, Eq, gq, Yq, lq) {
      const Oq = lq * lq;
      return 6 * (Oq - lq) * qq + (3 * Oq - 4 * lq + 1) * Eq + 6 * (-Oq + lq) * gq + (3 * Oq - 2 * lq) * Yq
    }

    function Wq(qq) {
      let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(gq, Math.max(Eq, qq))
    }

    function Nq(qq) {
      return qq -= 2 * Math.PI * Math.floor((qq + Math.PI) / (2 * Math.PI))
    }

    function aq(qq) {
      const Eq = qq.toString(16);
      return qq <= 15 ? ("0" + Eq).toUpperCase() : Eq.toUpperCase()
    }

    function Vq(qq) {
      if (Math.log2) return Math.floor(Math.log2(qq));
      if (qq < 0) return NaN;
      if (0 === qq) return -1 / 0;
      let Eq = 0;
      if (qq < 1) {
        for (; qq < 1;) Eq++, qq *= 2;
        Eq = -Eq
      } else if (qq > 1)
        for (; qq > 1;) Eq++, qq = Math.floor(qq / 2);
      return Eq
    }

    function dq(qq, Eq) {
      return qq - Math.floor(qq / Eq) * Eq
    }

    function jq(qq, Eq, gq) {
      return (qq - Eq) / (gq - Eq)
    }

    function Hq(qq, Eq, gq) {
      return qq * (gq - Eq) + Eq
    }

    function oq(qq, Eq) {
      let gq = dq(Eq - qq, 360);
      return gq > 180 && (gq -= 360), gq
    }

    function Pq(qq, Eq) {
      const gq = dq(qq, 2 * Eq);
      return Eq - Math.abs(gq - Eq)
    }

    function Qq(qq, Eq, gq) {
      let Yq = Wq(gq);
      return Yq = -2 * Yq * Yq * Yq + 3 * Yq * Yq, Eq * Yq + qq * (1 - Yq)
    }

    function yq(qq, Eq, gq) {
      let Yq;
      return Yq = Math.abs(Eq - qq) <= gq ? Eq : qq + Math.sign(Eq - qq) * gq, Yq
    }

    function tq(qq, Eq, gq) {
      const Yq = oq(qq, Eq);
      let lq;
      return lq = -gq < Yq && Yq < gq ? Eq : yq(qq, Eq = qq + Yq, gq), lq
    }

    function rq(qq, Eq, gq) {
      return (qq - Eq) / (gq - Eq)
    }

    function vq(qq, Eq, gq) {
      return (gq - Eq) * qq + Eq
    }

    function hq(qq, Eq) {
      const gq = qq % Eq;
      return 0 === gq ? Eq : hq(Eq, gq)
    }
    gq.r(Eq), gq.d(Eq, {
      Clamp: () => Wq,
      DeltaAngle: () => oq,
      Denormalize: () => Hq,
      ExtractAsInt: () => Yq,
      Hermite: () => uq,
      Hermite1stDerivative: () => Bq,
      HighestCommonFactor: () => hq,
      ILog2: () => Vq,
      InverseLerp: () => cq,
      Lerp: () => xq,
      LerpAngle: () => Aq,
      MoveTowards: () => yq,
      MoveTowardsAngle: () => tq,
      Normalize: () => jq,
      NormalizeRadians: () => Nq,
      OutsideRange: () => Oq,
      PercentToRange: () => vq,
      PingPong: () => Pq,
      RandomRange: () => mq,
      RangeToPercent: () => rq,
      Repeat: () => dq,
      SmoothStep: () => Qq,
      ToHex: () => aq,
      WithinEpsilon: () => lq
    })
  },
  37149: (qq, Eq, gq) => {
    function Yq(qq, Eq) {
      const gq = [];
      for (let Yq = 0; Yq < qq; ++Yq) gq.push(Eq());
      return gq
    }

    function lq(qq, Eq) {
      return Yq(qq, Eq)
    }
    gq.d(Eq, {
      e: () => Yq,
      h: () => lq,
      k: () => mq
    });
    const Oq = ["push", "splice", "pop", "shift", "unshift"];

    function mq(qq, Eq) {
      const gq = Oq.map((gq => function(qq, Eq, gq) {
        const Yq = qq[Eq];
        if ("function" !== typeof Yq) return null;
        const lq = function() {
          const Yq = qq.length,
            Oq = lq.previous.apply(qq, arguments);
          return gq(Eq, Yq), Oq
        };
        return Yq.next = lq, lq.previous = Yq, qq[Eq] = lq, () => {
          const gq = lq.previous;
          if (!gq) return;
          const Yq = lq.next;
          Yq ? (gq.next = Yq, Yq.previous = gq) : (gq.next = void 0, qq[Eq] = gq), lq.next = void 0, lq.previous = void 0
        }
      }(qq, gq, Eq)));
      return () => {
        for (const qq of gq) qq?.()
      }
    }
  },
  37171: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Oq,
      g: () => lq
    });
    const Yq = {};

    function lq(qq, Eq) {
      Yq[qq] = Eq
    }

    function Oq(qq) {
      return Yq[qq]
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);