export const id = 227;
export const ids = [227];
export const modules = {
  36893: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Hb,
      c: () => wb,
      g: () => pb,
      k: () => Zb
    });
    var Bb = hb(36736),
      Ob = hb(36734),
      Gb = hb(36757),
      Ub = hb(36762);

    function Lb(bb) {
      return Math.pow(bb, Ob.h)
    }

    function Yb(bb) {
      return bb <= .04045 ? .0773993808 * bb : Math.pow(.947867299 * (bb + .055), 2.4)
    }

    function Sb(bb) {
      return Math.pow(bb, Ob.e)
    }

    function ab(bb) {
      return bb <= .0031308 ? 12.92 * bb : 1.055 * Math.pow(bb, .41666) - .055
    }
    class Hb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = bb, this.g = ub, this.b = hb
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
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bb[ub] = this.r, bb[ub + 1] = this.g, bb[ub + 2] = this.b, this
      }
      Ohb(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Hb.FromArrayToRef(bb, ub, this), this
      }
      toColor4() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new wb(this.r, this.g, this.b, bb)
      }
      ZBb() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(bb) {
        return new Hb(this.r * bb.r, this.g * bb.g, this.b * bb.b)
      }
      multiplyToRef(bb, ub) {
        return ub.r = this.r * bb.r, ub.g = this.g * bb.g, ub.b = this.b * bb.b, ub
      }
      multiplyInPlace(bb) {
        return this.r *= bb.r, this.g *= bb.g, this.b *= bb.b, this
      }
      multiplyByFloats(bb, ub, hb) {
        return new Hb(this.r * bb, this.g * ub, this.b * hb)
      }
      divide(bb) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(bb, ub) {
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
      minimizeInPlaceFromFloats(bb, ub, hb) {
        return this.r = Math.min(bb, this.r), this.g = Math.min(ub, this.g), this.b = Math.min(hb, this.b), this
      }
      maximizeInPlaceFromFloats(bb, ub, hb) {
        return this.r = Math.max(bb, this.r), this.g = Math.max(ub, this.g), this.b = Math.max(hb, this.b), this
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
      equalsFloats(bb, ub, hb) {
        return this.sUb(bb, ub, hb)
      }
      sUb(bb, ub, hb) {
        return this.r === bb && this.g === ub && this.b === hb
      }
      equalsWithEpsilon(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ob.b;
        return (0, Gb.WithinEpsilon)(this.r, bb.r, ub) && (0, Gb.WithinEpsilon)(this.g, bb.g, ub) && (0, Gb.WithinEpsilon)(this.b, bb.b, ub)
      }
      AO() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(bb) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(bb) {
        return new Hb(this.r * bb, this.g * bb, this.b * bb)
      }
      scaleInPlace(bb) {
        return this.r *= bb, this.g *= bb, this.b *= bb, this
      }
      scaleToRef(bb, ub) {
        return ub.r = this.r * bb, ub.g = this.g * bb, ub.b = this.b * bb, ub
      }
      scaleAndAddToRef(bb, ub) {
        return ub.r += this.r * bb, ub.g += this.g * bb, ub.b += this.b * bb, ub
      }
      clampToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        return hb.r = (0, Gb.Clamp)(this.r, bb, ub), hb.g = (0, Gb.Clamp)(this.g, bb, ub), hb.b = (0, Gb.Clamp)(this.b, bb, ub), hb
      }
      add(bb) {
        return new Hb(this.r + bb.r, this.g + bb.g, this.b + bb.b)
      }
      addInPlace(bb) {
        return this.r += bb.r, this.g += bb.g, this.b += bb.b, this
      }
      addInPlaceFromFloats(bb, ub, hb) {
        return this.r += bb, this.g += ub, this.b += hb, this
      }
      addToRef(bb, ub) {
        return ub.r = this.r + bb.r, ub.g = this.g + bb.g, ub.b = this.b + bb.b, ub
      }
      subtract(bb) {
        return new Hb(this.r - bb.r, this.g - bb.g, this.b - bb.b)
      }
      subtractToRef(bb, ub) {
        return ub.r = this.r - bb.r, ub.g = this.g - bb.g, ub.b = this.b - bb.b, ub
      }
      tBb(bb) {
        return this.r -= bb.r, this.g -= bb.g, this.b -= bb.b, this
      }
      subtractFromFloats(bb, ub, hb) {
        return new Hb(this.r - bb, this.g - ub, this.b - hb)
      }
      subtractFromFloatsToRef(bb, ub, hb, Bb) {
        return Bb.r = this.r - bb, Bb.g = this.g - ub, Bb.b = this.b - hb, Bb
      }
      clone() {
        return new Hb(this.r, this.g, this.b)
      }
      mD(bb) {
        return this.r = bb.r, this.g = bb.g, this.b = bb.b, this
      }
      M_(bb, ub, hb) {
        return this.r = bb, this.g = ub, this.b = hb, this
      }
      set(bb, ub, hb) {
        return this.M_(bb, ub, hb)
      }
      N9(bb) {
        return this.r = this.g = this.b = bb, this
      }
      toHexString() {
        const bb = Math.round(255 * this.r),
          ub = Math.round(255 * this.g),
          hb = Math.round(255 * this.b);
        return "#" + (0, Gb.ToHex)(bb) + (0, Gb.ToHex)(ub) + (0, Gb.ToHex)(hb)
      }
      fromHexString(bb) {
        return "#" !== bb.substring(0, 1) || 7 !== bb.length || (this.r = parseInt(bb.substring(1, 3), 16) / 255, this.g = parseInt(bb.substring(3, 5), 16) / 255, this.b = parseInt(bb.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new Hb)
      }
      toHSVToRef(bb) {
        const ub = this.r,
          hb = this.g,
          Bb = this.b,
          Ob = Math.max(ub, hb, Bb),
          Gb = Math.min(ub, hb, Bb);
        let Ub = 0,
          Lb = 0;
        const Yb = Ob,
          Sb = Ob - Gb;
        return 0 !== Ob && (Lb = Sb / Ob), Ob != Gb && (Ob == ub ? (Ub = (hb - Bb) / Sb, hb < Bb && (Ub += 6)) : Ob == hb ? Ub = (Bb - ub) / Sb + 2 : Ob == Bb && (Ub = (ub - hb) / Sb + 4), Ub *= 60), bb.r = Ub, bb.g = Lb, bb.b = Yb, bb
      }
      toLinearSpace() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ub = new Hb;
        return this.toLinearSpaceToRef(ub, bb), ub
      }
      toLinearSpaceToRef(bb) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (bb.r = Yb(this.r), bb.g = Yb(this.g), bb.b = Yb(this.b)) : (bb.r = Lb(this.r), bb.g = Lb(this.g), bb.b = Lb(this.b)), this
      }
      toGammaSpace() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ub = new Hb;
        return this.toGammaSpaceToRef(ub, bb), ub
      }
      toGammaSpaceToRef(bb) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (bb.r = ab(this.r), bb.g = ab(this.g), bb.b = ab(this.b)) : (bb.r = Sb(this.r), bb.g = Sb(this.g), bb.b = Sb(this.b)), this
      }
      static HSVtoRGBToRef(bb, ub, hb, Bb) {
        const Ob = hb * ub,
          Gb = bb / 60,
          Ub = Ob * (1 - Math.abs(Gb % 2 - 1));
        let Lb = 0,
          Yb = 0,
          Sb = 0;
        Gb >= 0 && Gb <= 1 ? (Lb = Ob, Yb = Ub) : Gb >= 1 && Gb <= 2 ? (Lb = Ub, Yb = Ob) : Gb >= 2 && Gb <= 3 ? (Yb = Ob, Sb = Ub) : Gb >= 3 && Gb <= 4 ? (Yb = Ub, Sb = Ob) : Gb >= 4 && Gb <= 5 ? (Lb = Ub, Sb = Ob) : Gb >= 5 && Gb <= 6 && (Lb = Ob, Sb = Ub);
        const ab = hb - Ob;
        return Bb.r = Lb + ab, Bb.g = Yb + ab, Bb.b = Sb + ab, Bb
      }
      static FromHSV(bb, ub, hb) {
        const Bb = new Hb(0, 0, 0);
        return Hb.HSVtoRGBToRef(bb, ub, hb, Bb), Bb
      }
      static FromHexString(bb) {
        return new Hb(0, 0, 0).fromHexString(bb)
      }
      static FromArray(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Hb(bb[ub], bb[ub + 1], bb[ub + 2])
      }
      static FromArrayToRef(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        hb.r = bb[ub], hb.g = bb[ub + 1], hb.b = bb[ub + 2]
      }
      static FromInts(bb, ub, hb) {
        return new Hb(bb / 255, ub / 255, hb / 255)
      }
      static Lerp(bb, ub, hb) {
        const Bb = new Hb(0, 0, 0);
        return Hb.LerpToRef(bb, ub, hb, Bb), Bb
      }
      static LerpToRef(bb, ub, hb, Bb) {
        Bb.r = bb.r + (ub.r - bb.r) * hb, Bb.g = bb.g + (ub.g - bb.g) * hb, Bb.b = bb.b + (ub.b - bb.b) * hb
      }
      static Hermite(bb, ub, hb, Bb, Ob) {
        const Gb = Ob * Ob,
          Ub = Ob * Gb,
          Lb = 2 * Ub - 3 * Gb + 1,
          Yb = -2 * Ub + 3 * Gb,
          Sb = Ub - 2 * Gb + Ob,
          ab = Ub - Gb,
          wb = bb.r * Lb + hb.r * Yb + ub.r * Sb + Bb.r * ab,
          Zb = bb.g * Lb + hb.g * Yb + ub.g * Sb + Bb.g * ab,
          Xb = bb.b * Lb + hb.b * Yb + ub.b * Sb + Bb.b * ab;
        return new Hb(wb, Zb, Xb)
      }
      static Hermite1stDerivative(bb, ub, hb, Bb, Ob) {
        const Gb = Hb.Black();
        return this.Hermite1stDerivativeToRef(bb, ub, hb, Bb, Ob, Gb), Gb
      }
      static Hermite1stDerivativeToRef(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = Ob * Ob;
        Gb.r = 6 * (Ub - Ob) * bb.r + (3 * Ub - 4 * Ob + 1) * ub.r + 6 * (-Ub + Ob) * hb.r + (3 * Ub - 2 * Ob) * Bb.r, Gb.g = 6 * (Ub - Ob) * bb.g + (3 * Ub - 4 * Ob + 1) * ub.g + 6 * (-Ub + Ob) * hb.g + (3 * Ub - 2 * Ob) * Bb.g, Gb.b = 6 * (Ub - Ob) * bb.b + (3 * Ub - 4 * Ob + 1) * ub.b + 6 * (-Ub + Ob) * hb.b + (3 * Ub - 2 * Ob) * Bb.b
      }
      static Red() {
        return new Hb(1, 0, 0)
      }
      static Green() {
        return new Hb(0, 1, 0)
      }
      static Blue() {
        return new Hb(0, 0, 1)
      }
      static Black() {
        return new Hb(0, 0, 0)
      }
      static get BlackReadOnly() {
        return Hb._BlackReadOnly
      }
      static White() {
        return new Hb(1, 1, 1)
      }
      static Purple() {
        return new Hb(.5, 0, .5)
      }
      static Magenta() {
        return new Hb(1, 0, 1)
      }
      static Yellow() {
        return new Hb(1, 1, 0)
      }
      static Gray() {
        return new Hb(.5, .5, .5)
      }
      static Teal() {
        return new Hb(0, 1, 1)
      }
      static Random() {
        return new Hb(Math.random(), Math.random(), Math.random())
      }
    }
    Hb._V8PerformanceHack = new Hb(.5, .5, .5), Hb._BlackReadOnly = Hb.Black();
    class wb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = bb, this.g = ub, this.b = hb, this.a = Bb
      }
      ZBb() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bb[ub] = this.r, bb[ub + 1] = this.g, bb[ub + 2] = this.b, bb[ub + 3] = this.a, this
      }
      Ohb(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = bb[ub], this.g = bb[ub + 1], this.b = bb[ub + 2], this.a = bb[ub + 3], this
      }
      equals(bb) {
        return bb && this.r === bb.r && this.g === bb.g && this.b === bb.b && this.a === bb.a
      }
      add(bb) {
        return new wb(this.r + bb.r, this.g + bb.g, this.b + bb.b, this.a + bb.a)
      }
      addToRef(bb, ub) {
        return ub.r = this.r + bb.r, ub.g = this.g + bb.g, ub.b = this.b + bb.b, ub.a = this.a + bb.a, ub
      }
      addInPlace(bb) {
        return this.r += bb.r, this.g += bb.g, this.b += bb.b, this.a += bb.a, this
      }
      addInPlaceFromFloats(bb, ub, hb, Bb) {
        return this.r += bb, this.g += ub, this.b += hb, this.a += Bb, this
      }
      subtract(bb) {
        return new wb(this.r - bb.r, this.g - bb.g, this.b - bb.b, this.a - bb.a)
      }
      subtractToRef(bb, ub) {
        return ub.r = this.r - bb.r, ub.g = this.g - bb.g, ub.b = this.b - bb.b, ub.a = this.a - bb.a, ub
      }
      tBb(bb) {
        return this.r -= bb.r, this.g -= bb.g, this.b -= bb.b, this.a -= bb.a, this
      }
      subtractFromFloats(bb, ub, hb, Bb) {
        return new wb(this.r - bb, this.g - ub, this.b - hb, this.a - Bb)
      }
      subtractFromFloatsToRef(bb, ub, hb, Bb, Ob) {
        return Ob.r = this.r - bb, Ob.g = this.g - ub, Ob.b = this.b - hb, Ob.a = this.a - Bb, Ob
      }
      scale(bb) {
        return new wb(this.r * bb, this.g * bb, this.b * bb, this.a * bb)
      }
      scaleInPlace(bb) {
        return this.r *= bb, this.g *= bb, this.b *= bb, this.a *= bb, this
      }
      scaleToRef(bb, ub) {
        return ub.r = this.r * bb, ub.g = this.g * bb, ub.b = this.b * bb, ub.a = this.a * bb, ub
      }
      scaleAndAddToRef(bb, ub) {
        return ub.r += this.r * bb, ub.g += this.g * bb, ub.b += this.b * bb, ub.a += this.a * bb, ub
      }
      clampToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        return hb.r = (0, Gb.Clamp)(this.r, bb, ub), hb.g = (0, Gb.Clamp)(this.g, bb, ub), hb.b = (0, Gb.Clamp)(this.b, bb, ub), hb.a = (0, Gb.Clamp)(this.a, bb, ub), hb
      }
      multiply(bb) {
        return new wb(this.r * bb.r, this.g * bb.g, this.b * bb.b, this.a * bb.a)
      }
      multiplyToRef(bb, ub) {
        return ub.r = this.r * bb.r, ub.g = this.g * bb.g, ub.b = this.b * bb.b, ub.a = this.a * bb.a, ub
      }
      multiplyInPlace(bb) {
        return this.r *= bb.r, this.g *= bb.g, this.b *= bb.b, this.a *= bb.a, this
      }
      multiplyByFloats(bb, ub, hb, Bb) {
        return new wb(this.r * bb, this.g * ub, this.b * hb, this.a * Bb)
      }
      divide(bb) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(bb, ub) {
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
      minimizeInPlaceFromFloats(bb, ub, hb, Bb) {
        return this.r = Math.min(bb, this.r), this.g = Math.min(ub, this.g), this.b = Math.min(hb, this.b), this.a = Math.min(Bb, this.a), this
      }
      maximizeInPlaceFromFloats(bb, ub, hb, Bb) {
        return this.r = Math.max(bb, this.r), this.g = Math.max(ub, this.g), this.b = Math.max(hb, this.b), this.a = Math.max(Bb, this.a), this
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
      AO() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(bb) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ob.b;
        return (0, Gb.WithinEpsilon)(this.r, bb.r, ub) && (0, Gb.WithinEpsilon)(this.g, bb.g, ub) && (0, Gb.WithinEpsilon)(this.b, bb.b, ub) && (0, Gb.WithinEpsilon)(this.a, bb.a, ub)
      }
      sUb(bb, ub, hb, Bb) {
        return this.r === bb && this.g === ub && this.b === hb && this.a === Bb
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
        return (new wb).mD(this)
      }
      mD(bb) {
        return this.r = bb.r, this.g = bb.g, this.b = bb.b, this.a = bb.a, this
      }
      M_(bb, ub, hb, Bb) {
        return this.r = bb, this.g = ub, this.b = hb, this.a = Bb, this
      }
      set(bb, ub, hb, Bb) {
        return this.M_(bb, ub, hb, Bb)
      }
      N9(bb) {
        return this.r = this.g = this.b = this.a = bb, this
      }
      toHexString() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ub = Math.round(255 * this.r),
          hb = Math.round(255 * this.g),
          Bb = Math.round(255 * this.b);
        if (bb) return "#" + (0, Gb.ToHex)(ub) + (0, Gb.ToHex)(hb) + (0, Gb.ToHex)(Bb);
        const Ob = Math.round(255 * this.a);
        return "#" + (0, Gb.ToHex)(ub) + (0, Gb.ToHex)(hb) + (0, Gb.ToHex)(Bb) + (0, Gb.ToHex)(Ob)
      }
      fromHexString(bb) {
        return "#" !== bb.substring(0, 1) || 9 !== bb.length && 7 !== bb.length || (this.r = parseInt(bb.substring(1, 3), 16) / 255, this.g = parseInt(bb.substring(3, 5), 16) / 255, this.b = parseInt(bb.substring(5, 7), 16) / 255, 9 === bb.length && (this.a = parseInt(bb.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ub = new wb;
        return this.toLinearSpaceToRef(ub, bb), ub
      }
      toLinearSpaceToRef(bb) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (bb.r = Yb(this.r), bb.g = Yb(this.g), bb.b = Yb(this.b)) : (bb.r = Lb(this.r), bb.g = Lb(this.g), bb.b = Lb(this.b)), bb.a = this.a, this
      }
      toGammaSpace() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ub = new wb;
        return this.toGammaSpaceToRef(ub, bb), ub
      }
      toGammaSpaceToRef(bb) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (bb.r = ab(this.r), bb.g = ab(this.g), bb.b = ab(this.b)) : (bb.r = Sb(this.r), bb.g = Sb(this.g), bb.b = Sb(this.b)), bb.a = this.a, this
      }
      static FromHexString(bb) {
        return "#" !== bb.substring(0, 1) || 9 !== bb.length && 7 !== bb.length ? new wb(0, 0, 0, 0) : new wb(0, 0, 0, 1).fromHexString(bb)
      }
      static Lerp(bb, ub, hb) {
        return wb.LerpToRef(bb, ub, hb, new wb)
      }
      static LerpToRef(bb, ub, hb, Bb) {
        return Bb.r = bb.r + (ub.r - bb.r) * hb, Bb.g = bb.g + (ub.g - bb.g) * hb, Bb.b = bb.b + (ub.b - bb.b) * hb, Bb.a = bb.a + (ub.a - bb.a) * hb, Bb
      }
      static Hermite(bb, ub, hb, Bb, Ob) {
        const Gb = Ob * Ob,
          Ub = Ob * Gb,
          Lb = 2 * Ub - 3 * Gb + 1,
          Yb = -2 * Ub + 3 * Gb,
          Sb = Ub - 2 * Gb + Ob,
          ab = Ub - Gb,
          Hb = bb.r * Lb + hb.r * Yb + ub.r * Sb + Bb.r * ab,
          Zb = bb.g * Lb + hb.g * Yb + ub.g * Sb + Bb.g * ab,
          Xb = bb.b * Lb + hb.b * Yb + ub.b * Sb + Bb.b * ab,
          pb = bb.a * Lb + hb.a * Yb + ub.a * Sb + Bb.a * ab;
        return new wb(Hb, Zb, Xb, pb)
      }
      static Hermite1stDerivative(bb, ub, hb, Bb, Ob) {
        const Gb = new wb;
        return this.Hermite1stDerivativeToRef(bb, ub, hb, Bb, Ob, Gb), Gb
      }
      static Hermite1stDerivativeToRef(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = Ob * Ob;
        Gb.r = 6 * (Ub - Ob) * bb.r + (3 * Ub - 4 * Ob + 1) * ub.r + 6 * (-Ub + Ob) * hb.r + (3 * Ub - 2 * Ob) * Bb.r, Gb.g = 6 * (Ub - Ob) * bb.g + (3 * Ub - 4 * Ob + 1) * ub.g + 6 * (-Ub + Ob) * hb.g + (3 * Ub - 2 * Ob) * Bb.g, Gb.b = 6 * (Ub - Ob) * bb.b + (3 * Ub - 4 * Ob + 1) * ub.b + 6 * (-Ub + Ob) * hb.b + (3 * Ub - 2 * Ob) * Bb.b, Gb.a = 6 * (Ub - Ob) * bb.a + (3 * Ub - 4 * Ob + 1) * ub.a + 6 * (-Ub + Ob) * hb.a + (3 * Ub - 2 * Ob) * Bb.a
      }
      static FromColor3(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new wb(bb.r, bb.g, bb.b, ub)
      }
      static FromArray(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new wb(bb[ub], bb[ub + 1], bb[ub + 2], bb[ub + 3])
      }
      static FromArrayToRef(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        hb.r = bb[ub], hb.g = bb[ub + 1], hb.b = bb[ub + 2], hb.a = bb[ub + 3]
      }
      static FromInts(bb, ub, hb, Bb) {
        return new wb(bb / 255, ub / 255, hb / 255, Bb / 255)
      }
      static CheckColors4(bb, ub) {
        if (bb.length === 3 * ub) {
          const ub = [];
          for (let hb = 0; hb < bb.length; hb += 3) {
            const Bb = hb / 3 * 4;
            ub[Bb] = bb[hb], ub[Bb + 1] = bb[hb + 1], ub[Bb + 2] = bb[hb + 2], ub[Bb + 3] = 1
          }
          return ub
        }
        return bb
      }
    }
    wb._V8PerformanceHack = new wb(.5, .5, .5, .5);
    class Zb {}
    Zb.Color3 = (0, Bb.e)(3, Hb.Black), Zb.Color4 = (0, Bb.e)(3, (() => new wb(0, 0, 0, 0)));
    let Xb = !1;

    function pb() {
      Xb || (Xb = !0, Object.defineProperties(Hb.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(wb.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, Ub.f)("BABYLON.Color3", Hb), (0, Ub.f)("BABYLON.Color4", wb))
    }
  },
  36734: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb,
      e: () => Bb,
      h: () => Ob
    });
    const Bb = 1 / 2.2,
      Ob = 2.2;
    Math.sqrt(5);
    let Gb = .001
  },
  36757: (bb, ub, hb) => {
    function Bb(bb) {
      return parseInt(bb.toString().replace(/\W/g, ""))
    }

    function Ob(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(bb - ub) <= hb
    }

    function Gb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return bb < ub - Bb || bb > hb + Bb
    }

    function Ub(bb, ub) {
      return bb === ub ? bb : Math.random() * (ub - bb) + bb
    }

    function Lb(bb, ub, hb) {
      return bb + (ub - bb) * hb
    }

    function Yb(bb, ub, hb) {
      let Bb = ob(ub - bb, 360);
      return Bb > 180 && (Bb -= 360), bb + Bb * wb(hb)
    }

    function Sb(bb, ub, hb) {
      let Bb;
      return Bb = bb != ub ? wb((hb - bb) / (ub - bb)) : 0, Bb
    }

    function ab(bb, ub, hb, Bb, Ob) {
      const Gb = Ob * Ob,
        Ub = Ob * Gb;
      return bb * (2 * Ub - 3 * Gb + 1) + hb * (-2 * Ub + 3 * Gb) + ub * (Ub - 2 * Gb + Ob) + Bb * (Ub - Gb)
    }

    function Hb(bb, ub, hb, Bb, Ob) {
      const Gb = Ob * Ob;
      return 6 * (Gb - Ob) * bb + (3 * Gb - 4 * Ob + 1) * ub + 6 * (-Gb + Ob) * hb + (3 * Gb - 2 * Ob) * Bb
    }

    function wb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(hb, Math.max(ub, bb))
    }

    function Zb(bb) {
      return bb -= 2 * Math.PI * Math.floor((bb + Math.PI) / (2 * Math.PI))
    }

    function Xb(bb) {
      const ub = bb.toString(16);
      return bb <= 15 ? ("0" + ub).toUpperCase() : ub.toUpperCase()
    }

    function pb(bb) {
      if (Math.log2) return Math.floor(Math.log2(bb));
      if (bb < 0) return NaN;
      if (0 === bb) return -1 / 0;
      let ub = 0;
      if (bb < 1) {
        for (; bb < 1;) ub++, bb *= 2;
        ub = -ub
      } else if (bb > 1)
        for (; bb > 1;) ub++, bb = Math.floor(bb / 2);
      return ub
    }

    function ob(bb, ub) {
      return bb - Math.floor(bb / ub) * ub
    }

    function Ab(bb, ub, hb) {
      return (bb - ub) / (hb - ub)
    }

    function lb(bb, ub, hb) {
      return bb * (hb - ub) + ub
    }

    function Kb(bb, ub) {
      let hb = ob(ub - bb, 360);
      return hb > 180 && (hb -= 360), hb
    }

    function Wb(bb, ub) {
      const hb = ob(bb, 2 * ub);
      return ub - Math.abs(hb - ub)
    }

    function Cb(bb, ub, hb) {
      let Bb = wb(hb);
      return Bb = -2 * Bb * Bb * Bb + 3 * Bb * Bb, ub * Bb + bb * (1 - Bb)
    }

    function db(bb, ub, hb) {
      let Bb;
      return Bb = Math.abs(ub - bb) <= hb ? ub : bb + Math.sign(ub - bb) * hb, Bb
    }

    function rb(bb, ub, hb) {
      const Bb = Kb(bb, ub);
      let Ob;
      return Ob = -hb < Bb && Bb < hb ? ub : db(bb, ub = bb + Bb, hb), Ob
    }

    function jb(bb, ub, hb) {
      return (bb - ub) / (hb - ub)
    }

    function nb(bb, ub, hb) {
      return (hb - ub) * bb + ub
    }

    function Db(bb, ub) {
      const hb = bb % ub;
      return 0 === hb ? ub : Db(ub, hb)
    }
    hb.r(ub), hb.d(ub, {
      Clamp: () => wb,
      DeltaAngle: () => Kb,
      Denormalize: () => lb,
      ExtractAsInt: () => Bb,
      Hermite: () => ab,
      Hermite1stDerivative: () => Hb,
      HighestCommonFactor: () => Db,
      ILog2: () => pb,
      InverseLerp: () => Sb,
      Lerp: () => Lb,
      LerpAngle: () => Yb,
      MoveTowards: () => db,
      MoveTowardsAngle: () => rb,
      Normalize: () => Ab,
      NormalizeRadians: () => Zb,
      OutsideRange: () => Gb,
      PercentToRange: () => nb,
      PingPong: () => Wb,
      RandomRange: () => Ub,
      RangeToPercent: () => jb,
      Repeat: () => ob,
      SmoothStep: () => Cb,
      ToHex: () => Xb,
      WithinEpsilon: () => Ob
    })
  },
  36736: (bb, ub, hb) => {
    function Bb(bb, ub) {
      const hb = [];
      for (let Bb = 0; Bb < bb; ++Bb) hb.push(ub());
      return hb
    }

    function Ob(bb, ub) {
      return Bb(bb, ub)
    }
    hb.d(ub, {
      e: () => Bb,
      i: () => Ob,
      k: () => Ub
    });
    const Gb = ["push", "splice", "pop", "shift", "unshift"];

    function Ub(bb, ub) {
      const hb = Gb.map((hb => function(bb, ub, hb) {
        const Bb = bb[ub];
        if ("function" !== typeof Bb) return null;
        const Ob = function() {
          const Bb = bb.length,
            Gb = Ob.previous.apply(bb, arguments);
          return hb(ub, Bb), Gb
        };
        return Bb.next = Ob, Ob.previous = Bb, bb[ub] = Ob, () => {
          const hb = Ob.previous;
          if (!hb) return;
          const Bb = Ob.next;
          Bb ? (hb.next = Bb, Bb.previous = hb) : (hb.next = void 0, bb[ub] = hb), Ob.next = void 0, Ob.previous = void 0
        }
      }(bb, hb, ub)));
      return () => {
        for (const bb of hb) bb?.()
      }
    }
  },
  36762: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      f: () => Ob
    });
    const Bb = {};

    function Ob(bb, ub) {
      Bb[bb] = ub
    }

    function Gb(bb) {
      return Bb[bb]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);