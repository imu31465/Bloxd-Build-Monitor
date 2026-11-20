export const id = 226;
export const ids = [226];
export const modules = {
  36830: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Mb,
      g: () => Xb,
      j: () => lb,
      m: () => nb
    });
    var kb = sb(36666),
      Wb = sb(36661),
      ab = sb(36688),
      Tb = sb(36698);

    function Ub(bb) {
      return Math.pow(bb, Wb.h)
    }

    function Ib(bb) {
      return bb <= .04045 ? .0773993808 * bb : Math.pow(.947867299 * (bb + .055), 2.4)
    }

    function Hb(bb) {
      return Math.pow(bb, Wb.g)
    }

    function fb(bb) {
      return bb <= .0031308 ? 12.92 * bb : 1.055 * Math.pow(bb, .41666) - .055
    }
    class Mb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = bb, this.g = cb, this.b = sb
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let bb = 255 * this.r | 0;
        return bb = 397 * bb ^ 255 * this.g, bb = 397 * bb ^ 255 * this.b, bb
      }
      toArray(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bb[cb] = this.r, bb[cb + 1] = this.g, bb[cb + 2] = this.b, this
      }
      Ncb(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Mb.FromArrayToRef(bb, cb, this), this
      }
      toColor4() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new Xb(this.r, this.g, this.b, bb)
      }
      Osb() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(bb) {
        return new Mb(this.r * bb.r, this.g * bb.g, this.b * bb.b)
      }
      multiplyToRef(bb, cb) {
        return cb.r = this.r * bb.r, cb.g = this.g * bb.g, cb.b = this.b * bb.b, cb
      }
      multiplyInPlace(bb) {
        return this.r *= bb.r, this.g *= bb.g, this.b *= bb.b, this
      }
      multiplyByFloats(bb, cb, sb) {
        return new Mb(this.r * bb, this.g * cb, this.b * sb)
      }
      divide(bb) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(bb, cb) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(bb) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(bb) {
        return this.minimizeInPlaceFromFloats(bb.r, bb.g, bb.b)
      }
      maximizeInPlace(bb) {
        return this.maximizeInPlaceFromFloats(bb.r, bb.g, bb.b)
      }
      minimizeInPlaceFromFloats(bb, cb, sb) {
        return this.r = Math.min(bb, this.r), this.g = Math.min(cb, this.g), this.b = Math.min(sb, this.b), this
      }
      maximizeInPlaceFromFloats(bb, cb, sb) {
        return this.r = Math.max(bb, this.r), this.g = Math.max(cb, this.g), this.b = Math.max(sb, this.b), this
      }
      floorToRef(bb) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(bb) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(bb) {
        return bb && this.r === bb.r && this.g === bb.g && this.b === bb.b
      }
      equalsFloats(bb, cb, sb) {
        return this.CTb(bb, cb, sb)
      }
      CTb(bb, cb, sb) {
        return this.r === bb && this.g === cb && this.b === sb
      }
      equalsWithEpsilon(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wb.d;
        return (0, ab.WithinEpsilon)(this.r, bb.r, cb) && (0, ab.WithinEpsilon)(this.g, bb.g, cb) && (0, ab.WithinEpsilon)(this.b, bb.b, cb)
      }
      Of() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(bb) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(bb) {
        return new Mb(this.r * bb, this.g * bb, this.b * bb)
      }
      scaleInPlace(bb) {
        return this.r *= bb, this.g *= bb, this.b *= bb, this
      }
      scaleToRef(bb, cb) {
        return cb.r = this.r * bb, cb.g = this.g * bb, cb.b = this.b * bb, cb
      }
      scaleAndAddToRef(bb, cb) {
        return cb.r += this.r * bb, cb.g += this.g * bb, cb.b += this.b * bb, cb
      }
      clampToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        return sb.r = (0, ab.Clamp)(this.r, bb, cb), sb.g = (0, ab.Clamp)(this.g, bb, cb), sb.b = (0, ab.Clamp)(this.b, bb, cb), sb
      }
      add(bb) {
        return new Mb(this.r + bb.r, this.g + bb.g, this.b + bb.b)
      }
      addInPlace(bb) {
        return this.r += bb.r, this.g += bb.g, this.b += bb.b, this
      }
      addInPlaceFromFloats(bb, cb, sb) {
        return this.r += bb, this.g += cb, this.b += sb, this
      }
      addToRef(bb, cb) {
        return cb.r = this.r + bb.r, cb.g = this.g + bb.g, cb.b = this.b + bb.b, cb
      }
      subtract(bb) {
        return new Mb(this.r - bb.r, this.g - bb.g, this.b - bb.b)
      }
      subtractToRef(bb, cb) {
        return cb.r = this.r - bb.r, cb.g = this.g - bb.g, cb.b = this.b - bb.b, cb
      }
      Wkb(bb) {
        return this.r -= bb.r, this.g -= bb.g, this.b -= bb.b, this
      }
      subtractFromFloats(bb, cb, sb) {
        return new Mb(this.r - bb, this.g - cb, this.b - sb)
      }
      subtractFromFloatsToRef(bb, cb, sb, kb) {
        return kb.r = this.r - bb, kb.g = this.g - cb, kb.b = this.b - sb, kb
      }
      clone() {
        return new Mb(this.r, this.g, this.b)
      }
      ssb(bb) {
        return this.r = bb.r, this.g = bb.g, this.b = bb.b, this
      }
      I5(bb, cb, sb) {
        return this.r = bb, this.g = cb, this.b = sb, this
      }
      set(bb, cb, sb) {
        return this.I5(bb, cb, sb)
      }
      I6(bb) {
        return this.r = this.g = this.b = bb, this
      }
      toHexString() {
        const bb = Math.round(255 * this.r),
          cb = Math.round(255 * this.g),
          sb = Math.round(255 * this.b);
        return "#" + (0, ab.ToHex)(bb) + (0, ab.ToHex)(cb) + (0, ab.ToHex)(sb)
      }
      fromHexString(bb) {
        return "#" !== bb.substring(0, 1) || 7 !== bb.length || (this.r = parseInt(bb.substring(1, 3), 16) / 255, this.g = parseInt(bb.substring(3, 5), 16) / 255, this.b = parseInt(bb.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new Mb)
      }
      toHSVToRef(bb) {
        const cb = this.r,
          sb = this.g,
          kb = this.b,
          Wb = Math.max(cb, sb, kb),
          ab = Math.min(cb, sb, kb);
        let Tb = 0,
          Ub = 0;
        const Ib = Wb,
          Hb = Wb - ab;
        return 0 !== Wb && (Ub = Hb / Wb), Wb != ab && (Wb == cb ? (Tb = (sb - kb) / Hb, sb < kb && (Tb += 6)) : Wb == sb ? Tb = (kb - cb) / Hb + 2 : Wb == kb && (Tb = (cb - sb) / Hb + 4), Tb *= 60), bb.r = Tb, bb.g = Ub, bb.b = Ib, bb
      }
      toLinearSpace() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cb = new Mb;
        return this.toLinearSpaceToRef(cb, bb), cb
      }
      toLinearSpaceToRef(bb) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (bb.r = Ib(this.r), bb.g = Ib(this.g), bb.b = Ib(this.b)) : (bb.r = Ub(this.r), bb.g = Ub(this.g), bb.b = Ub(this.b)), this
      }
      toGammaSpace() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cb = new Mb;
        return this.toGammaSpaceToRef(cb, bb), cb
      }
      toGammaSpaceToRef(bb) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (bb.r = fb(this.r), bb.g = fb(this.g), bb.b = fb(this.b)) : (bb.r = Hb(this.r), bb.g = Hb(this.g), bb.b = Hb(this.b)), this
      }
      static HSVtoRGBToRef(bb, cb, sb, kb) {
        const Wb = sb * cb,
          ab = bb / 60,
          Tb = Wb * (1 - Math.abs(ab % 2 - 1));
        let Ub = 0,
          Ib = 0,
          Hb = 0;
        ab >= 0 && ab <= 1 ? (Ub = Wb, Ib = Tb) : ab >= 1 && ab <= 2 ? (Ub = Tb, Ib = Wb) : ab >= 2 && ab <= 3 ? (Ib = Wb, Hb = Tb) : ab >= 3 && ab <= 4 ? (Ib = Tb, Hb = Wb) : ab >= 4 && ab <= 5 ? (Ub = Tb, Hb = Wb) : ab >= 5 && ab <= 6 && (Ub = Wb, Hb = Tb);
        const fb = sb - Wb;
        return kb.r = Ub + fb, kb.g = Ib + fb, kb.b = Hb + fb, kb
      }
      static FromHSV(bb, cb, sb) {
        const kb = new Mb(0, 0, 0);
        return Mb.HSVtoRGBToRef(bb, cb, sb, kb), kb
      }
      static FromHexString(bb) {
        return new Mb(0, 0, 0).fromHexString(bb)
      }
      static FromArray(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Mb(bb[cb], bb[cb + 1], bb[cb + 2])
      }
      static FromArrayToRef(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        sb.r = bb[cb], sb.g = bb[cb + 1], sb.b = bb[cb + 2]
      }
      static FromInts(bb, cb, sb) {
        return new Mb(bb / 255, cb / 255, sb / 255)
      }
      static Lerp(bb, cb, sb) {
        const kb = new Mb(0, 0, 0);
        return Mb.LerpToRef(bb, cb, sb, kb), kb
      }
      static LerpToRef(bb, cb, sb, kb) {
        kb.r = bb.r + (cb.r - bb.r) * sb, kb.g = bb.g + (cb.g - bb.g) * sb, kb.b = bb.b + (cb.b - bb.b) * sb
      }
      static Hermite(bb, cb, sb, kb, Wb) {
        const ab = Wb * Wb,
          Tb = Wb * ab,
          Ub = 2 * Tb - 3 * ab + 1,
          Ib = -2 * Tb + 3 * ab,
          Hb = Tb - 2 * ab + Wb,
          fb = Tb - ab,
          Xb = bb.r * Ub + sb.r * Ib + cb.r * Hb + kb.r * fb,
          nb = bb.g * Ub + sb.g * Ib + cb.g * Hb + kb.g * fb,
          mb = bb.b * Ub + sb.b * Ib + cb.b * Hb + kb.b * fb;
        return new Mb(Xb, nb, mb)
      }
      static Hermite1stDerivative(bb, cb, sb, kb, Wb) {
        const ab = Mb.Black();
        return this.Hermite1stDerivativeToRef(bb, cb, sb, kb, Wb, ab), ab
      }
      static Hermite1stDerivativeToRef(bb, cb, sb, kb, Wb, ab) {
        const Tb = Wb * Wb;
        ab.r = 6 * (Tb - Wb) * bb.r + (3 * Tb - 4 * Wb + 1) * cb.r + 6 * (-Tb + Wb) * sb.r + (3 * Tb - 2 * Wb) * kb.r, ab.g = 6 * (Tb - Wb) * bb.g + (3 * Tb - 4 * Wb + 1) * cb.g + 6 * (-Tb + Wb) * sb.g + (3 * Tb - 2 * Wb) * kb.g, ab.b = 6 * (Tb - Wb) * bb.b + (3 * Tb - 4 * Wb + 1) * cb.b + 6 * (-Tb + Wb) * sb.b + (3 * Tb - 2 * Wb) * kb.b
      }
      static Red() {
        return new Mb(1, 0, 0)
      }
      static Green() {
        return new Mb(0, 1, 0)
      }
      static Blue() {
        return new Mb(0, 0, 1)
      }
      static Black() {
        return new Mb(0, 0, 0)
      }
      static get BlackReadOnly() {
        return Mb._BlackReadOnly
      }
      static White() {
        return new Mb(1, 1, 1)
      }
      static Purple() {
        return new Mb(.5, 0, .5)
      }
      static Magenta() {
        return new Mb(1, 0, 1)
      }
      static Yellow() {
        return new Mb(1, 1, 0)
      }
      static Gray() {
        return new Mb(.5, .5, .5)
      }
      static Teal() {
        return new Mb(0, 1, 1)
      }
      static Random() {
        return new Mb(Math.random(), Math.random(), Math.random())
      }
    }
    Mb._V8PerformanceHack = new Mb(.5, .5, .5), Mb._BlackReadOnly = Mb.Black();
    class Xb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = bb, this.g = cb, this.b = sb, this.a = kb
      }
      Osb() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bb[cb] = this.r, bb[cb + 1] = this.g, bb[cb + 2] = this.b, bb[cb + 3] = this.a, this
      }
      Ncb(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = bb[cb], this.g = bb[cb + 1], this.b = bb[cb + 2], this.a = bb[cb + 3], this
      }
      equals(bb) {
        return bb && this.r === bb.r && this.g === bb.g && this.b === bb.b && this.a === bb.a
      }
      add(bb) {
        return new Xb(this.r + bb.r, this.g + bb.g, this.b + bb.b, this.a + bb.a)
      }
      addToRef(bb, cb) {
        return cb.r = this.r + bb.r, cb.g = this.g + bb.g, cb.b = this.b + bb.b, cb.a = this.a + bb.a, cb
      }
      addInPlace(bb) {
        return this.r += bb.r, this.g += bb.g, this.b += bb.b, this.a += bb.a, this
      }
      addInPlaceFromFloats(bb, cb, sb, kb) {
        return this.r += bb, this.g += cb, this.b += sb, this.a += kb, this
      }
      subtract(bb) {
        return new Xb(this.r - bb.r, this.g - bb.g, this.b - bb.b, this.a - bb.a)
      }
      subtractToRef(bb, cb) {
        return cb.r = this.r - bb.r, cb.g = this.g - bb.g, cb.b = this.b - bb.b, cb.a = this.a - bb.a, cb
      }
      Wkb(bb) {
        return this.r -= bb.r, this.g -= bb.g, this.b -= bb.b, this.a -= bb.a, this
      }
      subtractFromFloats(bb, cb, sb, kb) {
        return new Xb(this.r - bb, this.g - cb, this.b - sb, this.a - kb)
      }
      subtractFromFloatsToRef(bb, cb, sb, kb, Wb) {
        return Wb.r = this.r - bb, Wb.g = this.g - cb, Wb.b = this.b - sb, Wb.a = this.a - kb, Wb
      }
      scale(bb) {
        return new Xb(this.r * bb, this.g * bb, this.b * bb, this.a * bb)
      }
      scaleInPlace(bb) {
        return this.r *= bb, this.g *= bb, this.b *= bb, this.a *= bb, this
      }
      scaleToRef(bb, cb) {
        return cb.r = this.r * bb, cb.g = this.g * bb, cb.b = this.b * bb, cb.a = this.a * bb, cb
      }
      scaleAndAddToRef(bb, cb) {
        return cb.r += this.r * bb, cb.g += this.g * bb, cb.b += this.b * bb, cb.a += this.a * bb, cb
      }
      clampToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        return sb.r = (0, ab.Clamp)(this.r, bb, cb), sb.g = (0, ab.Clamp)(this.g, bb, cb), sb.b = (0, ab.Clamp)(this.b, bb, cb), sb.a = (0, ab.Clamp)(this.a, bb, cb), sb
      }
      multiply(bb) {
        return new Xb(this.r * bb.r, this.g * bb.g, this.b * bb.b, this.a * bb.a)
      }
      multiplyToRef(bb, cb) {
        return cb.r = this.r * bb.r, cb.g = this.g * bb.g, cb.b = this.b * bb.b, cb.a = this.a * bb.a, cb
      }
      multiplyInPlace(bb) {
        return this.r *= bb.r, this.g *= bb.g, this.b *= bb.b, this.a *= bb.a, this
      }
      multiplyByFloats(bb, cb, sb, kb) {
        return new Xb(this.r * bb, this.g * cb, this.b * sb, this.a * kb)
      }
      divide(bb) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(bb, cb) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(bb) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(bb) {
        return this.r = Math.min(this.r, bb.r), this.g = Math.min(this.g, bb.g), this.b = Math.min(this.b, bb.b), this.a = Math.min(this.a, bb.a), this
      }
      maximizeInPlace(bb) {
        return this.r = Math.max(this.r, bb.r), this.g = Math.max(this.g, bb.g), this.b = Math.max(this.b, bb.b), this.a = Math.max(this.a, bb.a), this
      }
      minimizeInPlaceFromFloats(bb, cb, sb, kb) {
        return this.r = Math.min(bb, this.r), this.g = Math.min(cb, this.g), this.b = Math.min(sb, this.b), this.a = Math.min(kb, this.a), this
      }
      maximizeInPlaceFromFloats(bb, cb, sb, kb) {
        return this.r = Math.max(bb, this.r), this.g = Math.max(cb, this.g), this.b = Math.max(sb, this.b), this.a = Math.max(kb, this.a), this
      }
      floorToRef(bb) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(bb) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      Of() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(bb) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wb.d;
        return (0, ab.WithinEpsilon)(this.r, bb.r, cb) && (0, ab.WithinEpsilon)(this.g, bb.g, cb) && (0, ab.WithinEpsilon)(this.b, bb.b, cb) && (0, ab.WithinEpsilon)(this.a, bb.a, cb)
      }
      CTb(bb, cb, sb, kb) {
        return this.r === bb && this.g === cb && this.b === sb && this.a === kb
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let bb = 255 * this.r | 0;
        return bb = 397 * bb ^ 255 * this.g, bb = 397 * bb ^ 255 * this.b, bb = 397 * bb ^ 255 * this.a, bb
      }
      clone() {
        return (new Xb).ssb(this)
      }
      ssb(bb) {
        return this.r = bb.r, this.g = bb.g, this.b = bb.b, this.a = bb.a, this
      }
      I5(bb, cb, sb, kb) {
        return this.r = bb, this.g = cb, this.b = sb, this.a = kb, this
      }
      set(bb, cb, sb, kb) {
        return this.I5(bb, cb, sb, kb)
      }
      I6(bb) {
        return this.r = this.g = this.b = this.a = bb, this
      }
      toHexString() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cb = Math.round(255 * this.r),
          sb = Math.round(255 * this.g),
          kb = Math.round(255 * this.b);
        if (bb) return "#" + (0, ab.ToHex)(cb) + (0, ab.ToHex)(sb) + (0, ab.ToHex)(kb);
        const Wb = Math.round(255 * this.a);
        return "#" + (0, ab.ToHex)(cb) + (0, ab.ToHex)(sb) + (0, ab.ToHex)(kb) + (0, ab.ToHex)(Wb)
      }
      fromHexString(bb) {
        return "#" !== bb.substring(0, 1) || 9 !== bb.length && 7 !== bb.length || (this.r = parseInt(bb.substring(1, 3), 16) / 255, this.g = parseInt(bb.substring(3, 5), 16) / 255, this.b = parseInt(bb.substring(5, 7), 16) / 255, 9 === bb.length && (this.a = parseInt(bb.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cb = new Xb;
        return this.toLinearSpaceToRef(cb, bb), cb
      }
      toLinearSpaceToRef(bb) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (bb.r = Ib(this.r), bb.g = Ib(this.g), bb.b = Ib(this.b)) : (bb.r = Ub(this.r), bb.g = Ub(this.g), bb.b = Ub(this.b)), bb.a = this.a, this
      }
      toGammaSpace() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const cb = new Xb;
        return this.toGammaSpaceToRef(cb, bb), cb
      }
      toGammaSpaceToRef(bb) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (bb.r = fb(this.r), bb.g = fb(this.g), bb.b = fb(this.b)) : (bb.r = Hb(this.r), bb.g = Hb(this.g), bb.b = Hb(this.b)), bb.a = this.a, this
      }
      static FromHexString(bb) {
        return "#" !== bb.substring(0, 1) || 9 !== bb.length && 7 !== bb.length ? new Xb(0, 0, 0, 0) : new Xb(0, 0, 0, 1).fromHexString(bb)
      }
      static Lerp(bb, cb, sb) {
        return Xb.LerpToRef(bb, cb, sb, new Xb)
      }
      static LerpToRef(bb, cb, sb, kb) {
        return kb.r = bb.r + (cb.r - bb.r) * sb, kb.g = bb.g + (cb.g - bb.g) * sb, kb.b = bb.b + (cb.b - bb.b) * sb, kb.a = bb.a + (cb.a - bb.a) * sb, kb
      }
      static Hermite(bb, cb, sb, kb, Wb) {
        const ab = Wb * Wb,
          Tb = Wb * ab,
          Ub = 2 * Tb - 3 * ab + 1,
          Ib = -2 * Tb + 3 * ab,
          Hb = Tb - 2 * ab + Wb,
          fb = Tb - ab,
          Mb = bb.r * Ub + sb.r * Ib + cb.r * Hb + kb.r * fb,
          nb = bb.g * Ub + sb.g * Ib + cb.g * Hb + kb.g * fb,
          mb = bb.b * Ub + sb.b * Ib + cb.b * Hb + kb.b * fb,
          lb = bb.a * Ub + sb.a * Ib + cb.a * Hb + kb.a * fb;
        return new Xb(Mb, nb, mb, lb)
      }
      static Hermite1stDerivative(bb, cb, sb, kb, Wb) {
        const ab = new Xb;
        return this.Hermite1stDerivativeToRef(bb, cb, sb, kb, Wb, ab), ab
      }
      static Hermite1stDerivativeToRef(bb, cb, sb, kb, Wb, ab) {
        const Tb = Wb * Wb;
        ab.r = 6 * (Tb - Wb) * bb.r + (3 * Tb - 4 * Wb + 1) * cb.r + 6 * (-Tb + Wb) * sb.r + (3 * Tb - 2 * Wb) * kb.r, ab.g = 6 * (Tb - Wb) * bb.g + (3 * Tb - 4 * Wb + 1) * cb.g + 6 * (-Tb + Wb) * sb.g + (3 * Tb - 2 * Wb) * kb.g, ab.b = 6 * (Tb - Wb) * bb.b + (3 * Tb - 4 * Wb + 1) * cb.b + 6 * (-Tb + Wb) * sb.b + (3 * Tb - 2 * Wb) * kb.b, ab.a = 6 * (Tb - Wb) * bb.a + (3 * Tb - 4 * Wb + 1) * cb.a + 6 * (-Tb + Wb) * sb.a + (3 * Tb - 2 * Wb) * kb.a
      }
      static FromColor3(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Xb(bb.r, bb.g, bb.b, cb)
      }
      static FromArray(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Xb(bb[cb], bb[cb + 1], bb[cb + 2], bb[cb + 3])
      }
      static FromArrayToRef(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        sb.r = bb[cb], sb.g = bb[cb + 1], sb.b = bb[cb + 2], sb.a = bb[cb + 3]
      }
      static FromInts(bb, cb, sb, kb) {
        return new Xb(bb / 255, cb / 255, sb / 255, kb / 255)
      }
      static CheckColors4(bb, cb) {
        if (bb.length === 3 * cb) {
          const cb = [];
          for (let sb = 0; sb < bb.length; sb += 3) {
            const kb = sb / 3 * 4;
            cb[kb] = bb[sb], cb[kb + 1] = bb[sb + 1], cb[kb + 2] = bb[sb + 2], cb[kb + 3] = 1
          }
          return cb
        }
        return bb
      }
    }
    Xb._V8PerformanceHack = new Xb(.5, .5, .5, .5);
    class nb {}
    nb.Color3 = (0, kb.b)(3, Mb.Black), nb.Color4 = (0, kb.b)(3, (() => new Xb(0, 0, 0, 0)));
    let mb = !1;

    function lb() {
      mb || (mb = !0, Object.defineProperties(Mb.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Xb.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, Tb.h)("BABYLON.Color3", Mb), (0, Tb.h)("BABYLON.Color4", Xb))
    }
  },
  36661: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => ab,
      g: () => kb,
      h: () => Wb
    });
    const kb = 1 / 2.2,
      Wb = 2.2;
    Math.sqrt(5);
    let ab = .001
  },
  36688: (bb, cb, sb) => {
    function kb(bb) {
      return parseInt(bb.toString().replace(/\W/g, ""))
    }

    function Wb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(bb - cb) <= sb
    }

    function ab(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return bb < cb - kb || bb > sb + kb
    }

    function Tb(bb, cb) {
      return bb === cb ? bb : Math.random() * (cb - bb) + bb
    }

    function Ub(bb, cb, sb) {
      return bb + (cb - bb) * sb
    }

    function Ib(bb, cb, sb) {
      let kb = Qb(cb - bb, 360);
      return kb > 180 && (kb -= 360), bb + kb * Xb(sb)
    }

    function Hb(bb, cb, sb) {
      let kb;
      return kb = bb != cb ? Xb((sb - bb) / (cb - bb)) : 0, kb
    }

    function fb(bb, cb, sb, kb, Wb) {
      const ab = Wb * Wb,
        Tb = Wb * ab;
      return bb * (2 * Tb - 3 * ab + 1) + sb * (-2 * Tb + 3 * ab) + cb * (Tb - 2 * ab + Wb) + kb * (Tb - ab)
    }

    function Mb(bb, cb, sb, kb, Wb) {
      const ab = Wb * Wb;
      return 6 * (ab - Wb) * bb + (3 * ab - 4 * Wb + 1) * cb + 6 * (-ab + Wb) * sb + (3 * ab - 2 * Wb) * kb
    }

    function Xb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(sb, Math.max(cb, bb))
    }

    function nb(bb) {
      return bb -= 2 * Math.PI * Math.floor((bb + Math.PI) / (2 * Math.PI))
    }

    function mb(bb) {
      const cb = bb.toString(16);
      return bb <= 15 ? ("0" + cb).toUpperCase() : cb.toUpperCase()
    }

    function lb(bb) {
      if (Math.log2) return Math.floor(Math.log2(bb));
      if (bb < 0) return NaN;
      if (0 === bb) return -1 / 0;
      let cb = 0;
      if (bb < 1) {
        for (; bb < 1;) cb++, bb *= 2;
        cb = -cb
      } else if (bb > 1)
        for (; bb > 1;) cb++, bb = Math.floor(bb / 2);
      return cb
    }

    function Qb(bb, cb) {
      return bb - Math.floor(bb / cb) * cb
    }

    function eb(bb, cb, sb) {
      return (bb - cb) / (sb - cb)
    }

    function Cb(bb, cb, sb) {
      return bb * (sb - cb) + cb
    }

    function Nb(bb, cb) {
      let sb = Qb(cb - bb, 360);
      return sb > 180 && (sb -= 360), sb
    }

    function Vb(bb, cb) {
      const sb = Qb(bb, 2 * cb);
      return cb - Math.abs(sb - cb)
    }

    function Lb(bb, cb, sb) {
      let kb = Xb(sb);
      return kb = -2 * kb * kb * kb + 3 * kb * kb, cb * kb + bb * (1 - kb)
    }

    function ub(bb, cb, sb) {
      let kb;
      return kb = Math.abs(cb - bb) <= sb ? cb : bb + Math.sign(cb - bb) * sb, kb
    }

    function Yb(bb, cb, sb) {
      const kb = Nb(bb, cb);
      let Wb;
      return Wb = -sb < kb && kb < sb ? cb : ub(bb, cb = bb + kb, sb), Wb
    }

    function hb(bb, cb, sb) {
      return (bb - cb) / (sb - cb)
    }

    function Jb(bb, cb, sb) {
      return (sb - cb) * bb + cb
    }

    function gb(bb, cb) {
      const sb = bb % cb;
      return 0 === sb ? cb : gb(cb, sb)
    }
    sb.r(cb), sb.d(cb, {
      Clamp: () => Xb,
      DeltaAngle: () => Nb,
      Denormalize: () => Cb,
      ExtractAsInt: () => kb,
      Hermite: () => fb,
      Hermite1stDerivative: () => Mb,
      HighestCommonFactor: () => gb,
      ILog2: () => lb,
      InverseLerp: () => Hb,
      Lerp: () => Ub,
      LerpAngle: () => Ib,
      MoveTowards: () => ub,
      MoveTowardsAngle: () => Yb,
      Normalize: () => eb,
      NormalizeRadians: () => nb,
      OutsideRange: () => ab,
      PercentToRange: () => Jb,
      PingPong: () => Vb,
      RandomRange: () => Tb,
      RangeToPercent: () => hb,
      Repeat: () => Qb,
      SmoothStep: () => Lb,
      ToHex: () => mb,
      WithinEpsilon: () => Wb
    })
  },
  36666: (bb, cb, sb) => {
    function kb(bb, cb) {
      const sb = [];
      for (let kb = 0; kb < bb; ++kb) sb.push(cb());
      return sb
    }

    function Wb(bb, cb) {
      return kb(bb, cb)
    }
    sb.d(cb, {
      b: () => kb,
      f: () => Wb,
      h: () => Tb
    });
    const ab = ["push", "splice", "pop", "shift", "unshift"];

    function Tb(bb, cb) {
      const sb = ab.map((sb => function(bb, cb, sb) {
        const kb = bb[cb];
        if ("function" !== typeof kb) return null;
        const Wb = function() {
          const kb = bb.length,
            ab = Wb.previous.apply(bb, arguments);
          return sb(cb, kb), ab
        };
        return kb.next = Wb, Wb.previous = kb, bb[cb] = Wb, () => {
          const sb = Wb.previous;
          if (!sb) return;
          const kb = Wb.next;
          kb ? (sb.next = kb, kb.previous = sb) : (sb.next = void 0, bb[cb] = sb), Wb.next = void 0, Wb.previous = void 0
        }
      }(bb, sb, cb)));
      return () => {
        for (const bb of sb) bb?.()
      }
    }
  },
  36698: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      h: () => Wb
    });
    const kb = {};

    function Wb(bb, cb) {
      kb[bb] = cb
    }

    function ab(bb) {
      return kb[bb]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);