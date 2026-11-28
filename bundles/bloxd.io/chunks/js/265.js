export const id = 265;
export const ids = [265];
export const modules = {
  38406: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Ob,
      f: () => Ub,
      h: () => Eb,
      k: () => tb
    });
    var eb = Mb(38299),
      Hb = Mb(38294),
      pb = Mb(38322),
      Vb = Mb(38333);

    function gb(bb) {
      return Math.pow(bb, Hb.h)
    }

    function lb(bb) {
      return bb <= .04045 ? .0773993808 * bb : Math.pow(.947867299 * (bb + .055), 2.4)
    }

    function Lb(bb) {
      return Math.pow(bb, Hb.g)
    }

    function Ib(bb) {
      return bb <= .0031308 ? 12.92 * bb : 1.055 * Math.pow(bb, .41666) - .055
    }
    class Ob {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = bb, this.g = wb, this.b = Mb
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
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bb[wb] = this.r, bb[wb + 1] = this.g, bb[wb + 2] = this.b, this
      }
      dI(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Ob.FromArrayToRef(bb, wb, this), this
      }
      toColor4() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new Ub(this.r, this.g, this.b, bb)
      }
      ppb() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(bb) {
        return new Ob(this.r * bb.r, this.g * bb.g, this.b * bb.b)
      }
      multiplyToRef(bb, wb) {
        return wb.r = this.r * bb.r, wb.g = this.g * bb.g, wb.b = this.b * bb.b, wb
      }
      multiplyInPlace(bb) {
        return this.r *= bb.r, this.g *= bb.g, this.b *= bb.b, this
      }
      multiplyByFloats(bb, wb, Mb) {
        return new Ob(this.r * bb, this.g * wb, this.b * Mb)
      }
      divide(bb) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(bb, wb) {
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
      minimizeInPlaceFromFloats(bb, wb, Mb) {
        return this.r = Math.min(bb, this.r), this.g = Math.min(wb, this.g), this.b = Math.min(Mb, this.b), this
      }
      maximizeInPlaceFromFloats(bb, wb, Mb) {
        return this.r = Math.max(bb, this.r), this.g = Math.max(wb, this.g), this.b = Math.max(Mb, this.b), this
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
      equalsFloats(bb, wb, Mb) {
        return this.Flb(bb, wb, Mb)
      }
      Flb(bb, wb, Mb) {
        return this.r === bb && this.g === wb && this.b === Mb
      }
      equalsWithEpsilon(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hb.e;
        return (0, pb.WithinEpsilon)(this.r, bb.r, wb) && (0, pb.WithinEpsilon)(this.g, bb.g, wb) && (0, pb.WithinEpsilon)(this.b, bb.b, wb)
      }
      oE() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(bb) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(bb) {
        return new Ob(this.r * bb, this.g * bb, this.b * bb)
      }
      scaleInPlace(bb) {
        return this.r *= bb, this.g *= bb, this.b *= bb, this
      }
      scaleToRef(bb, wb) {
        return wb.r = this.r * bb, wb.g = this.g * bb, wb.b = this.b * bb, wb
      }
      scaleAndAddToRef(bb, wb) {
        return wb.r += this.r * bb, wb.g += this.g * bb, wb.b += this.b * bb, wb
      }
      clampToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        return Mb.r = (0, pb.Clamp)(this.r, bb, wb), Mb.g = (0, pb.Clamp)(this.g, bb, wb), Mb.b = (0, pb.Clamp)(this.b, bb, wb), Mb
      }
      add(bb) {
        return new Ob(this.r + bb.r, this.g + bb.g, this.b + bb.b)
      }
      addInPlace(bb) {
        return this.r += bb.r, this.g += bb.g, this.b += bb.b, this
      }
      addInPlaceFromFloats(bb, wb, Mb) {
        return this.r += bb, this.g += wb, this.b += Mb, this
      }
      addToRef(bb, wb) {
        return wb.r = this.r + bb.r, wb.g = this.g + bb.g, wb.b = this.b + bb.b, wb
      }
      subtract(bb) {
        return new Ob(this.r - bb.r, this.g - bb.g, this.b - bb.b)
      }
      subtractToRef(bb, wb) {
        return wb.r = this.r - bb.r, wb.g = this.g - bb.g, wb.b = this.b - bb.b, wb
      }
      zpb(bb) {
        return this.r -= bb.r, this.g -= bb.g, this.b -= bb.b, this
      }
      subtractFromFloats(bb, wb, Mb) {
        return new Ob(this.r - bb, this.g - wb, this.b - Mb)
      }
      subtractFromFloatsToRef(bb, wb, Mb, eb) {
        return eb.r = this.r - bb, eb.g = this.g - wb, eb.b = this.b - Mb, eb
      }
      clone() {
        return new Ob(this.r, this.g, this.b)
      }
      eZ(bb) {
        return this.r = bb.r, this.g = bb.g, this.b = bb.b, this
      }
      twb(bb, wb, Mb) {
        return this.r = bb, this.g = wb, this.b = Mb, this
      }
      set(bb, wb, Mb) {
        return this.twb(bb, wb, Mb)
      }
      Jbb(bb) {
        return this.r = this.g = this.b = bb, this
      }
      toHexString() {
        const bb = Math.round(255 * this.r),
          wb = Math.round(255 * this.g),
          Mb = Math.round(255 * this.b);
        return "#" + (0, pb.ToHex)(bb) + (0, pb.ToHex)(wb) + (0, pb.ToHex)(Mb)
      }
      fromHexString(bb) {
        return "#" !== bb.substring(0, 1) || 7 !== bb.length || (this.r = parseInt(bb.substring(1, 3), 16) / 255, this.g = parseInt(bb.substring(3, 5), 16) / 255, this.b = parseInt(bb.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new Ob)
      }
      toHSVToRef(bb) {
        const wb = this.r,
          Mb = this.g,
          eb = this.b,
          Hb = Math.max(wb, Mb, eb),
          pb = Math.min(wb, Mb, eb);
        let Vb = 0,
          gb = 0;
        const lb = Hb,
          Lb = Hb - pb;
        return 0 !== Hb && (gb = Lb / Hb), Hb != pb && (Hb == wb ? (Vb = (Mb - eb) / Lb, Mb < eb && (Vb += 6)) : Hb == Mb ? Vb = (eb - wb) / Lb + 2 : Hb == eb && (Vb = (wb - Mb) / Lb + 4), Vb *= 60), bb.r = Vb, bb.g = gb, bb.b = lb, bb
      }
      toLinearSpace() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const wb = new Ob;
        return this.toLinearSpaceToRef(wb, bb), wb
      }
      toLinearSpaceToRef(bb) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (bb.r = lb(this.r), bb.g = lb(this.g), bb.b = lb(this.b)) : (bb.r = gb(this.r), bb.g = gb(this.g), bb.b = gb(this.b)), this
      }
      toGammaSpace() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const wb = new Ob;
        return this.toGammaSpaceToRef(wb, bb), wb
      }
      toGammaSpaceToRef(bb) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (bb.r = Ib(this.r), bb.g = Ib(this.g), bb.b = Ib(this.b)) : (bb.r = Lb(this.r), bb.g = Lb(this.g), bb.b = Lb(this.b)), this
      }
      static HSVtoRGBToRef(bb, wb, Mb, eb) {
        const Hb = Mb * wb,
          pb = bb / 60,
          Vb = Hb * (1 - Math.abs(pb % 2 - 1));
        let gb = 0,
          lb = 0,
          Lb = 0;
        pb >= 0 && pb <= 1 ? (gb = Hb, lb = Vb) : pb >= 1 && pb <= 2 ? (gb = Vb, lb = Hb) : pb >= 2 && pb <= 3 ? (lb = Hb, Lb = Vb) : pb >= 3 && pb <= 4 ? (lb = Vb, Lb = Hb) : pb >= 4 && pb <= 5 ? (gb = Vb, Lb = Hb) : pb >= 5 && pb <= 6 && (gb = Hb, Lb = Vb);
        const Ib = Mb - Hb;
        return eb.r = gb + Ib, eb.g = lb + Ib, eb.b = Lb + Ib, eb
      }
      static FromHSV(bb, wb, Mb) {
        const eb = new Ob(0, 0, 0);
        return Ob.HSVtoRGBToRef(bb, wb, Mb, eb), eb
      }
      static FromHexString(bb) {
        return new Ob(0, 0, 0).fromHexString(bb)
      }
      static FromArray(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Ob(bb[wb], bb[wb + 1], bb[wb + 2])
      }
      static FromArrayToRef(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        Mb.r = bb[wb], Mb.g = bb[wb + 1], Mb.b = bb[wb + 2]
      }
      static FromInts(bb, wb, Mb) {
        return new Ob(bb / 255, wb / 255, Mb / 255)
      }
      static Lerp(bb, wb, Mb) {
        const eb = new Ob(0, 0, 0);
        return Ob.LerpToRef(bb, wb, Mb, eb), eb
      }
      static LerpToRef(bb, wb, Mb, eb) {
        eb.r = bb.r + (wb.r - bb.r) * Mb, eb.g = bb.g + (wb.g - bb.g) * Mb, eb.b = bb.b + (wb.b - bb.b) * Mb
      }
      static Hermite(bb, wb, Mb, eb, Hb) {
        const pb = Hb * Hb,
          Vb = Hb * pb,
          gb = 2 * Vb - 3 * pb + 1,
          lb = -2 * Vb + 3 * pb,
          Lb = Vb - 2 * pb + Hb,
          Ib = Vb - pb,
          Ub = bb.r * gb + Mb.r * lb + wb.r * Lb + eb.r * Ib,
          tb = bb.g * gb + Mb.g * lb + wb.g * Lb + eb.g * Ib,
          Cb = bb.b * gb + Mb.b * lb + wb.b * Lb + eb.b * Ib;
        return new Ob(Ub, tb, Cb)
      }
      static Hermite1stDerivative(bb, wb, Mb, eb, Hb) {
        const pb = Ob.Black();
        return this.Hermite1stDerivativeToRef(bb, wb, Mb, eb, Hb, pb), pb
      }
      static Hermite1stDerivativeToRef(bb, wb, Mb, eb, Hb, pb) {
        const Vb = Hb * Hb;
        pb.r = 6 * (Vb - Hb) * bb.r + (3 * Vb - 4 * Hb + 1) * wb.r + 6 * (-Vb + Hb) * Mb.r + (3 * Vb - 2 * Hb) * eb.r, pb.g = 6 * (Vb - Hb) * bb.g + (3 * Vb - 4 * Hb + 1) * wb.g + 6 * (-Vb + Hb) * Mb.g + (3 * Vb - 2 * Hb) * eb.g, pb.b = 6 * (Vb - Hb) * bb.b + (3 * Vb - 4 * Hb + 1) * wb.b + 6 * (-Vb + Hb) * Mb.b + (3 * Vb - 2 * Hb) * eb.b
      }
      static Red() {
        return new Ob(1, 0, 0)
      }
      static Green() {
        return new Ob(0, 1, 0)
      }
      static Blue() {
        return new Ob(0, 0, 1)
      }
      static Black() {
        return new Ob(0, 0, 0)
      }
      static get BlackReadOnly() {
        return Ob._BlackReadOnly
      }
      static White() {
        return new Ob(1, 1, 1)
      }
      static Purple() {
        return new Ob(.5, 0, .5)
      }
      static Magenta() {
        return new Ob(1, 0, 1)
      }
      static Yellow() {
        return new Ob(1, 1, 0)
      }
      static Gray() {
        return new Ob(.5, .5, .5)
      }
      static Teal() {
        return new Ob(0, 1, 1)
      }
      static Random() {
        return new Ob(Math.random(), Math.random(), Math.random())
      }
    }
    Ob._V8PerformanceHack = new Ob(.5, .5, .5), Ob._BlackReadOnly = Ob.Black();
    class Ub {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = bb, this.g = wb, this.b = Mb, this.a = eb
      }
      ppb() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bb[wb] = this.r, bb[wb + 1] = this.g, bb[wb + 2] = this.b, bb[wb + 3] = this.a, this
      }
      dI(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = bb[wb], this.g = bb[wb + 1], this.b = bb[wb + 2], this.a = bb[wb + 3], this
      }
      equals(bb) {
        return bb && this.r === bb.r && this.g === bb.g && this.b === bb.b && this.a === bb.a
      }
      add(bb) {
        return new Ub(this.r + bb.r, this.g + bb.g, this.b + bb.b, this.a + bb.a)
      }
      addToRef(bb, wb) {
        return wb.r = this.r + bb.r, wb.g = this.g + bb.g, wb.b = this.b + bb.b, wb.a = this.a + bb.a, wb
      }
      addInPlace(bb) {
        return this.r += bb.r, this.g += bb.g, this.b += bb.b, this.a += bb.a, this
      }
      addInPlaceFromFloats(bb, wb, Mb, eb) {
        return this.r += bb, this.g += wb, this.b += Mb, this.a += eb, this
      }
      subtract(bb) {
        return new Ub(this.r - bb.r, this.g - bb.g, this.b - bb.b, this.a - bb.a)
      }
      subtractToRef(bb, wb) {
        return wb.r = this.r - bb.r, wb.g = this.g - bb.g, wb.b = this.b - bb.b, wb.a = this.a - bb.a, wb
      }
      zpb(bb) {
        return this.r -= bb.r, this.g -= bb.g, this.b -= bb.b, this.a -= bb.a, this
      }
      subtractFromFloats(bb, wb, Mb, eb) {
        return new Ub(this.r - bb, this.g - wb, this.b - Mb, this.a - eb)
      }
      subtractFromFloatsToRef(bb, wb, Mb, eb, Hb) {
        return Hb.r = this.r - bb, Hb.g = this.g - wb, Hb.b = this.b - Mb, Hb.a = this.a - eb, Hb
      }
      scale(bb) {
        return new Ub(this.r * bb, this.g * bb, this.b * bb, this.a * bb)
      }
      scaleInPlace(bb) {
        return this.r *= bb, this.g *= bb, this.b *= bb, this.a *= bb, this
      }
      scaleToRef(bb, wb) {
        return wb.r = this.r * bb, wb.g = this.g * bb, wb.b = this.b * bb, wb.a = this.a * bb, wb
      }
      scaleAndAddToRef(bb, wb) {
        return wb.r += this.r * bb, wb.g += this.g * bb, wb.b += this.b * bb, wb.a += this.a * bb, wb
      }
      clampToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        return Mb.r = (0, pb.Clamp)(this.r, bb, wb), Mb.g = (0, pb.Clamp)(this.g, bb, wb), Mb.b = (0, pb.Clamp)(this.b, bb, wb), Mb.a = (0, pb.Clamp)(this.a, bb, wb), Mb
      }
      multiply(bb) {
        return new Ub(this.r * bb.r, this.g * bb.g, this.b * bb.b, this.a * bb.a)
      }
      multiplyToRef(bb, wb) {
        return wb.r = this.r * bb.r, wb.g = this.g * bb.g, wb.b = this.b * bb.b, wb.a = this.a * bb.a, wb
      }
      multiplyInPlace(bb) {
        return this.r *= bb.r, this.g *= bb.g, this.b *= bb.b, this.a *= bb.a, this
      }
      multiplyByFloats(bb, wb, Mb, eb) {
        return new Ub(this.r * bb, this.g * wb, this.b * Mb, this.a * eb)
      }
      divide(bb) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(bb, wb) {
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
      minimizeInPlaceFromFloats(bb, wb, Mb, eb) {
        return this.r = Math.min(bb, this.r), this.g = Math.min(wb, this.g), this.b = Math.min(Mb, this.b), this.a = Math.min(eb, this.a), this
      }
      maximizeInPlaceFromFloats(bb, wb, Mb, eb) {
        return this.r = Math.max(bb, this.r), this.g = Math.max(wb, this.g), this.b = Math.max(Mb, this.b), this.a = Math.max(eb, this.a), this
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
      oE() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(bb) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Hb.e;
        return (0, pb.WithinEpsilon)(this.r, bb.r, wb) && (0, pb.WithinEpsilon)(this.g, bb.g, wb) && (0, pb.WithinEpsilon)(this.b, bb.b, wb) && (0, pb.WithinEpsilon)(this.a, bb.a, wb)
      }
      Flb(bb, wb, Mb, eb) {
        return this.r === bb && this.g === wb && this.b === Mb && this.a === eb
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
        return (new Ub).eZ(this)
      }
      eZ(bb) {
        return this.r = bb.r, this.g = bb.g, this.b = bb.b, this.a = bb.a, this
      }
      twb(bb, wb, Mb, eb) {
        return this.r = bb, this.g = wb, this.b = Mb, this.a = eb, this
      }
      set(bb, wb, Mb, eb) {
        return this.twb(bb, wb, Mb, eb)
      }
      Jbb(bb) {
        return this.r = this.g = this.b = this.a = bb, this
      }
      toHexString() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const wb = Math.round(255 * this.r),
          Mb = Math.round(255 * this.g),
          eb = Math.round(255 * this.b);
        if (bb) return "#" + (0, pb.ToHex)(wb) + (0, pb.ToHex)(Mb) + (0, pb.ToHex)(eb);
        const Hb = Math.round(255 * this.a);
        return "#" + (0, pb.ToHex)(wb) + (0, pb.ToHex)(Mb) + (0, pb.ToHex)(eb) + (0, pb.ToHex)(Hb)
      }
      fromHexString(bb) {
        return "#" !== bb.substring(0, 1) || 9 !== bb.length && 7 !== bb.length || (this.r = parseInt(bb.substring(1, 3), 16) / 255, this.g = parseInt(bb.substring(3, 5), 16) / 255, this.b = parseInt(bb.substring(5, 7), 16) / 255, 9 === bb.length && (this.a = parseInt(bb.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const wb = new Ub;
        return this.toLinearSpaceToRef(wb, bb), wb
      }
      toLinearSpaceToRef(bb) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (bb.r = lb(this.r), bb.g = lb(this.g), bb.b = lb(this.b)) : (bb.r = gb(this.r), bb.g = gb(this.g), bb.b = gb(this.b)), bb.a = this.a, this
      }
      toGammaSpace() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const wb = new Ub;
        return this.toGammaSpaceToRef(wb, bb), wb
      }
      toGammaSpaceToRef(bb) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (bb.r = Ib(this.r), bb.g = Ib(this.g), bb.b = Ib(this.b)) : (bb.r = Lb(this.r), bb.g = Lb(this.g), bb.b = Lb(this.b)), bb.a = this.a, this
      }
      static FromHexString(bb) {
        return "#" !== bb.substring(0, 1) || 9 !== bb.length && 7 !== bb.length ? new Ub(0, 0, 0, 0) : new Ub(0, 0, 0, 1).fromHexString(bb)
      }
      static Lerp(bb, wb, Mb) {
        return Ub.LerpToRef(bb, wb, Mb, new Ub)
      }
      static LerpToRef(bb, wb, Mb, eb) {
        return eb.r = bb.r + (wb.r - bb.r) * Mb, eb.g = bb.g + (wb.g - bb.g) * Mb, eb.b = bb.b + (wb.b - bb.b) * Mb, eb.a = bb.a + (wb.a - bb.a) * Mb, eb
      }
      static Hermite(bb, wb, Mb, eb, Hb) {
        const pb = Hb * Hb,
          Vb = Hb * pb,
          gb = 2 * Vb - 3 * pb + 1,
          lb = -2 * Vb + 3 * pb,
          Lb = Vb - 2 * pb + Hb,
          Ib = Vb - pb,
          Ob = bb.r * gb + Mb.r * lb + wb.r * Lb + eb.r * Ib,
          tb = bb.g * gb + Mb.g * lb + wb.g * Lb + eb.g * Ib,
          Cb = bb.b * gb + Mb.b * lb + wb.b * Lb + eb.b * Ib,
          Eb = bb.a * gb + Mb.a * lb + wb.a * Lb + eb.a * Ib;
        return new Ub(Ob, tb, Cb, Eb)
      }
      static Hermite1stDerivative(bb, wb, Mb, eb, Hb) {
        const pb = new Ub;
        return this.Hermite1stDerivativeToRef(bb, wb, Mb, eb, Hb, pb), pb
      }
      static Hermite1stDerivativeToRef(bb, wb, Mb, eb, Hb, pb) {
        const Vb = Hb * Hb;
        pb.r = 6 * (Vb - Hb) * bb.r + (3 * Vb - 4 * Hb + 1) * wb.r + 6 * (-Vb + Hb) * Mb.r + (3 * Vb - 2 * Hb) * eb.r, pb.g = 6 * (Vb - Hb) * bb.g + (3 * Vb - 4 * Hb + 1) * wb.g + 6 * (-Vb + Hb) * Mb.g + (3 * Vb - 2 * Hb) * eb.g, pb.b = 6 * (Vb - Hb) * bb.b + (3 * Vb - 4 * Hb + 1) * wb.b + 6 * (-Vb + Hb) * Mb.b + (3 * Vb - 2 * Hb) * eb.b, pb.a = 6 * (Vb - Hb) * bb.a + (3 * Vb - 4 * Hb + 1) * wb.a + 6 * (-Vb + Hb) * Mb.a + (3 * Vb - 2 * Hb) * eb.a
      }
      static FromColor3(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Ub(bb.r, bb.g, bb.b, wb)
      }
      static FromArray(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Ub(bb[wb], bb[wb + 1], bb[wb + 2], bb[wb + 3])
      }
      static FromArrayToRef(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        Mb.r = bb[wb], Mb.g = bb[wb + 1], Mb.b = bb[wb + 2], Mb.a = bb[wb + 3]
      }
      static FromInts(bb, wb, Mb, eb) {
        return new Ub(bb / 255, wb / 255, Mb / 255, eb / 255)
      }
      static CheckColors4(bb, wb) {
        if (bb.length === 3 * wb) {
          const wb = [];
          for (let Mb = 0; Mb < bb.length; Mb += 3) {
            const eb = Mb / 3 * 4;
            wb[eb] = bb[Mb], wb[eb + 1] = bb[Mb + 1], wb[eb + 2] = bb[Mb + 2], wb[eb + 3] = 1
          }
          return wb
        }
        return bb
      }
    }
    Ub._V8PerformanceHack = new Ub(.5, .5, .5, .5);
    class tb {}
    tb.Color3 = (0, eb.d)(3, Ob.Black), tb.Color4 = (0, eb.d)(3, (() => new Ub(0, 0, 0, 0)));
    let Cb = !1;

    function Eb() {
      Cb || (Cb = !0, Object.defineProperties(Ob.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Ub.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, Vb.e)("BABYLON.Color3", Ob), (0, Vb.e)("BABYLON.Color4", Ub))
    }
  },
  38294: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb,
      g: () => eb,
      h: () => Hb
    });
    const eb = 1 / 2.2,
      Hb = 2.2;
    Math.sqrt(5);
    let pb = .001
  },
  38322: (bb, wb, Mb) => {
    function eb(bb) {
      return parseInt(bb.toString().replace(/\W/g, ""))
    }

    function Hb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(bb - wb) <= Mb
    }

    function pb(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return bb < wb - eb || bb > Mb + eb
    }

    function Vb(bb, wb) {
      return bb === wb ? bb : Math.random() * (wb - bb) + bb
    }

    function gb(bb, wb, Mb) {
      return bb + (wb - bb) * Mb
    }

    function lb(bb, wb, Mb) {
      let eb = Fb(wb - bb, 360);
      return eb > 180 && (eb -= 360), bb + eb * Ub(Mb)
    }

    function Lb(bb, wb, Mb) {
      let eb;
      return eb = bb != wb ? Ub((Mb - bb) / (wb - bb)) : 0, eb
    }

    function Ib(bb, wb, Mb, eb, Hb) {
      const pb = Hb * Hb,
        Vb = Hb * pb;
      return bb * (2 * Vb - 3 * pb + 1) + Mb * (-2 * Vb + 3 * pb) + wb * (Vb - 2 * pb + Hb) + eb * (Vb - pb)
    }

    function Ob(bb, wb, Mb, eb, Hb) {
      const pb = Hb * Hb;
      return 6 * (pb - Hb) * bb + (3 * pb - 4 * Hb + 1) * wb + 6 * (-pb + Hb) * Mb + (3 * pb - 2 * Hb) * eb
    }

    function Ub(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(Mb, Math.max(wb, bb))
    }

    function tb(bb) {
      return bb -= 2 * Math.PI * Math.floor((bb + Math.PI) / (2 * Math.PI))
    }

    function Cb(bb) {
      const wb = bb.toString(16);
      return bb <= 15 ? ("0" + wb).toUpperCase() : wb.toUpperCase()
    }

    function Eb(bb) {
      if (Math.log2) return Math.floor(Math.log2(bb));
      if (bb < 0) return NaN;
      if (0 === bb) return -1 / 0;
      let wb = 0;
      if (bb < 1) {
        for (; bb < 1;) wb++, bb *= 2;
        wb = -wb
      } else if (bb > 1)
        for (; bb > 1;) wb++, bb = Math.floor(bb / 2);
      return wb
    }

    function Fb(bb, wb) {
      return bb - Math.floor(bb / wb) * wb
    }

    function Bb(bb, wb, Mb) {
      return (bb - wb) / (Mb - wb)
    }

    function sb(bb, wb, Mb) {
      return bb * (Mb - wb) + wb
    }

    function mb(bb, wb) {
      let Mb = Fb(wb - bb, 360);
      return Mb > 180 && (Mb -= 360), Mb
    }

    function hb(bb, wb) {
      const Mb = Fb(bb, 2 * wb);
      return wb - Math.abs(Mb - wb)
    }

    function zb(bb, wb, Mb) {
      let eb = Ub(Mb);
      return eb = -2 * eb * eb * eb + 3 * eb * eb, wb * eb + bb * (1 - eb)
    }

    function Xb(bb, wb, Mb) {
      let eb;
      return eb = Math.abs(wb - bb) <= Mb ? wb : bb + Math.sign(wb - bb) * Mb, eb
    }

    function xb(bb, wb, Mb) {
      const eb = mb(bb, wb);
      let Hb;
      return Hb = -Mb < eb && eb < Mb ? wb : Xb(bb, wb = bb + eb, Mb), Hb
    }

    function jb(bb, wb, Mb) {
      return (bb - wb) / (Mb - wb)
    }

    function Kb(bb, wb, Mb) {
      return (Mb - wb) * bb + wb
    }

    function rb(bb, wb) {
      const Mb = bb % wb;
      return 0 === Mb ? wb : rb(wb, Mb)
    }
    Mb.r(wb), Mb.d(wb, {
      Clamp: () => Ub,
      DeltaAngle: () => mb,
      Denormalize: () => sb,
      ExtractAsInt: () => eb,
      Hermite: () => Ib,
      Hermite1stDerivative: () => Ob,
      HighestCommonFactor: () => rb,
      ILog2: () => Eb,
      InverseLerp: () => Lb,
      Lerp: () => gb,
      LerpAngle: () => lb,
      MoveTowards: () => Xb,
      MoveTowardsAngle: () => xb,
      Normalize: () => Bb,
      NormalizeRadians: () => tb,
      OutsideRange: () => pb,
      PercentToRange: () => Kb,
      PingPong: () => hb,
      RandomRange: () => Vb,
      RangeToPercent: () => jb,
      Repeat: () => Fb,
      SmoothStep: () => zb,
      ToHex: () => Cb,
      WithinEpsilon: () => Hb
    })
  },
  38299: (bb, wb, Mb) => {
    function eb(bb, wb) {
      const Mb = [];
      for (let eb = 0; eb < bb; ++eb) Mb.push(wb());
      return Mb
    }

    function Hb(bb, wb) {
      return eb(bb, wb)
    }
    Mb.d(wb, {
      d: () => eb,
      f: () => Hb,
      h: () => Vb
    });
    const pb = ["push", "splice", "pop", "shift", "unshift"];

    function Vb(bb, wb) {
      const Mb = pb.map((Mb => function(bb, wb, Mb) {
        const eb = bb[wb];
        if ("function" !== typeof eb) return null;
        const Hb = function() {
          const eb = bb.length,
            pb = Hb.previous.apply(bb, arguments);
          return Mb(wb, eb), pb
        };
        return eb.next = Hb, Hb.previous = eb, bb[wb] = Hb, () => {
          const Mb = Hb.previous;
          if (!Mb) return;
          const eb = Hb.next;
          eb ? (Mb.next = eb, eb.previous = Mb) : (Mb.next = void 0, bb[wb] = Mb), Hb.next = void 0, Hb.previous = void 0
        }
      }(bb, Mb, wb)));
      return () => {
        for (const bb of Mb) bb?.()
      }
    }
  },
  38333: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => pb,
      e: () => Hb
    });
    const eb = {};

    function Hb(bb, wb) {
      eb[bb] = wb
    }

    function pb(bb) {
      return eb[bb]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);