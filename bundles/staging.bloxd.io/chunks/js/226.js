export const id = 226;
export const ids = [226];
export const modules = {
  36593: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Lb,
      g: () => Pb,
      k: () => Rb,
      m: () => Xb
    });
    var Ab = Ub(36410),
      Mb = Ub(36405),
      Tb = Ub(36436),
      Eb = Ub(36447);

    function Yb(bb) {
      return Math.pow(bb, Mb.j)
    }

    function Bb(bb) {
      return bb <= .04045 ? .0773993808 * bb : Math.pow(.947867299 * (bb + .055), 2.4)
    }

    function eb(bb) {
      return Math.pow(bb, Mb.g)
    }

    function vb(bb) {
      return bb <= .0031308 ? 12.92 * bb : 1.055 * Math.pow(bb, .41666) - .055
    }
    class Lb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = bb, this.g = ab, this.b = Ub
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
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bb[ab] = this.r, bb[ab + 1] = this.g, bb[ab + 2] = this.b, this
      }
      Zab(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Lb.FromArrayToRef(bb, ab, this), this
      }
      toColor4() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new Pb(this.r, this.g, this.b, bb)
      }
      qUb() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(bb) {
        return new Lb(this.r * bb.r, this.g * bb.g, this.b * bb.b)
      }
      multiplyToRef(bb, ab) {
        return ab.r = this.r * bb.r, ab.g = this.g * bb.g, ab.b = this.b * bb.b, ab
      }
      multiplyInPlace(bb) {
        return this.r *= bb.r, this.g *= bb.g, this.b *= bb.b, this
      }
      multiplyByFloats(bb, ab, Ub) {
        return new Lb(this.r * bb, this.g * ab, this.b * Ub)
      }
      divide(bb) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(bb, ab) {
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
      minimizeInPlaceFromFloats(bb, ab, Ub) {
        return this.r = Math.min(bb, this.r), this.g = Math.min(ab, this.g), this.b = Math.min(Ub, this.b), this
      }
      maximizeInPlaceFromFloats(bb, ab, Ub) {
        return this.r = Math.max(bb, this.r), this.g = Math.max(ab, this.g), this.b = Math.max(Ub, this.b), this
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
      equalsFloats(bb, ab, Ub) {
        return this.eEb(bb, ab, Ub)
      }
      eEb(bb, ab, Ub) {
        return this.r === bb && this.g === ab && this.b === Ub
      }
      equalsWithEpsilon(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mb.e;
        return (0, Tb.WithinEpsilon)(this.r, bb.r, ab) && (0, Tb.WithinEpsilon)(this.g, bb.g, ab) && (0, Tb.WithinEpsilon)(this.b, bb.b, ab)
      }
      pa() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(bb) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(bb) {
        return new Lb(this.r * bb, this.g * bb, this.b * bb)
      }
      scaleInPlace(bb) {
        return this.r *= bb, this.g *= bb, this.b *= bb, this
      }
      scaleToRef(bb, ab) {
        return ab.r = this.r * bb, ab.g = this.g * bb, ab.b = this.b * bb, ab
      }
      scaleAndAddToRef(bb, ab) {
        return ab.r += this.r * bb, ab.g += this.g * bb, ab.b += this.b * bb, ab
      }
      clampToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        return Ub.r = (0, Tb.Clamp)(this.r, bb, ab), Ub.g = (0, Tb.Clamp)(this.g, bb, ab), Ub.b = (0, Tb.Clamp)(this.b, bb, ab), Ub
      }
      add(bb) {
        return new Lb(this.r + bb.r, this.g + bb.g, this.b + bb.b)
      }
      addInPlace(bb) {
        return this.r += bb.r, this.g += bb.g, this.b += bb.b, this
      }
      addInPlaceFromFloats(bb, ab, Ub) {
        return this.r += bb, this.g += ab, this.b += Ub, this
      }
      addToRef(bb, ab) {
        return ab.r = this.r + bb.r, ab.g = this.g + bb.g, ab.b = this.b + bb.b, ab
      }
      subtract(bb) {
        return new Lb(this.r - bb.r, this.g - bb.g, this.b - bb.b)
      }
      subtractToRef(bb, ab) {
        return ab.r = this.r - bb.r, ab.g = this.g - bb.g, ab.b = this.b - bb.b, ab
      }
      MAb(bb) {
        return this.r -= bb.r, this.g -= bb.g, this.b -= bb.b, this
      }
      subtractFromFloats(bb, ab, Ub) {
        return new Lb(this.r - bb, this.g - ab, this.b - Ub)
      }
      subtractFromFloatsToRef(bb, ab, Ub, Ab) {
        return Ab.r = this.r - bb, Ab.g = this.g - ab, Ab.b = this.b - Ub, Ab
      }
      clone() {
        return new Lb(this.r, this.g, this.b)
      }
      EUb(bb) {
        return this.r = bb.r, this.g = bb.g, this.b = bb.b, this
      }
      K9(bb, ab, Ub) {
        return this.r = bb, this.g = ab, this.b = Ub, this
      }
      set(bb, ab, Ub) {
        return this.K9(bb, ab, Ub)
      }
      B3(bb) {
        return this.r = this.g = this.b = bb, this
      }
      toHexString() {
        const bb = Math.round(255 * this.r),
          ab = Math.round(255 * this.g),
          Ub = Math.round(255 * this.b);
        return "#" + (0, Tb.ToHex)(bb) + (0, Tb.ToHex)(ab) + (0, Tb.ToHex)(Ub)
      }
      fromHexString(bb) {
        return "#" !== bb.substring(0, 1) || 7 !== bb.length || (this.r = parseInt(bb.substring(1, 3), 16) / 255, this.g = parseInt(bb.substring(3, 5), 16) / 255, this.b = parseInt(bb.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new Lb)
      }
      toHSVToRef(bb) {
        const ab = this.r,
          Ub = this.g,
          Ab = this.b,
          Mb = Math.max(ab, Ub, Ab),
          Tb = Math.min(ab, Ub, Ab);
        let Eb = 0,
          Yb = 0;
        const Bb = Mb,
          eb = Mb - Tb;
        return 0 !== Mb && (Yb = eb / Mb), Mb != Tb && (Mb == ab ? (Eb = (Ub - Ab) / eb, Ub < Ab && (Eb += 6)) : Mb == Ub ? Eb = (Ab - ab) / eb + 2 : Mb == Ab && (Eb = (ab - Ub) / eb + 4), Eb *= 60), bb.r = Eb, bb.g = Yb, bb.b = Bb, bb
      }
      toLinearSpace() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ab = new Lb;
        return this.toLinearSpaceToRef(ab, bb), ab
      }
      toLinearSpaceToRef(bb) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (bb.r = Bb(this.r), bb.g = Bb(this.g), bb.b = Bb(this.b)) : (bb.r = Yb(this.r), bb.g = Yb(this.g), bb.b = Yb(this.b)), this
      }
      toGammaSpace() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ab = new Lb;
        return this.toGammaSpaceToRef(ab, bb), ab
      }
      toGammaSpaceToRef(bb) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (bb.r = vb(this.r), bb.g = vb(this.g), bb.b = vb(this.b)) : (bb.r = eb(this.r), bb.g = eb(this.g), bb.b = eb(this.b)), this
      }
      static HSVtoRGBToRef(bb, ab, Ub, Ab) {
        const Mb = Ub * ab,
          Tb = bb / 60,
          Eb = Mb * (1 - Math.abs(Tb % 2 - 1));
        let Yb = 0,
          Bb = 0,
          eb = 0;
        Tb >= 0 && Tb <= 1 ? (Yb = Mb, Bb = Eb) : Tb >= 1 && Tb <= 2 ? (Yb = Eb, Bb = Mb) : Tb >= 2 && Tb <= 3 ? (Bb = Mb, eb = Eb) : Tb >= 3 && Tb <= 4 ? (Bb = Eb, eb = Mb) : Tb >= 4 && Tb <= 5 ? (Yb = Eb, eb = Mb) : Tb >= 5 && Tb <= 6 && (Yb = Mb, eb = Eb);
        const vb = Ub - Mb;
        return Ab.r = Yb + vb, Ab.g = Bb + vb, Ab.b = eb + vb, Ab
      }
      static FromHSV(bb, ab, Ub) {
        const Ab = new Lb(0, 0, 0);
        return Lb.HSVtoRGBToRef(bb, ab, Ub, Ab), Ab
      }
      static FromHexString(bb) {
        return new Lb(0, 0, 0).fromHexString(bb)
      }
      static FromArray(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Lb(bb[ab], bb[ab + 1], bb[ab + 2])
      }
      static FromArrayToRef(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        Ub.r = bb[ab], Ub.g = bb[ab + 1], Ub.b = bb[ab + 2]
      }
      static FromInts(bb, ab, Ub) {
        return new Lb(bb / 255, ab / 255, Ub / 255)
      }
      static Lerp(bb, ab, Ub) {
        const Ab = new Lb(0, 0, 0);
        return Lb.LerpToRef(bb, ab, Ub, Ab), Ab
      }
      static LerpToRef(bb, ab, Ub, Ab) {
        Ab.r = bb.r + (ab.r - bb.r) * Ub, Ab.g = bb.g + (ab.g - bb.g) * Ub, Ab.b = bb.b + (ab.b - bb.b) * Ub
      }
      static Hermite(bb, ab, Ub, Ab, Mb) {
        const Tb = Mb * Mb,
          Eb = Mb * Tb,
          Yb = 2 * Eb - 3 * Tb + 1,
          Bb = -2 * Eb + 3 * Tb,
          eb = Eb - 2 * Tb + Mb,
          vb = Eb - Tb,
          Pb = bb.r * Yb + Ub.r * Bb + ab.r * eb + Ab.r * vb,
          Xb = bb.g * Yb + Ub.g * Bb + ab.g * eb + Ab.g * vb,
          jb = bb.b * Yb + Ub.b * Bb + ab.b * eb + Ab.b * vb;
        return new Lb(Pb, Xb, jb)
      }
      static Hermite1stDerivative(bb, ab, Ub, Ab, Mb) {
        const Tb = Lb.Black();
        return this.Hermite1stDerivativeToRef(bb, ab, Ub, Ab, Mb, Tb), Tb
      }
      static Hermite1stDerivativeToRef(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = Mb * Mb;
        Tb.r = 6 * (Eb - Mb) * bb.r + (3 * Eb - 4 * Mb + 1) * ab.r + 6 * (-Eb + Mb) * Ub.r + (3 * Eb - 2 * Mb) * Ab.r, Tb.g = 6 * (Eb - Mb) * bb.g + (3 * Eb - 4 * Mb + 1) * ab.g + 6 * (-Eb + Mb) * Ub.g + (3 * Eb - 2 * Mb) * Ab.g, Tb.b = 6 * (Eb - Mb) * bb.b + (3 * Eb - 4 * Mb + 1) * ab.b + 6 * (-Eb + Mb) * Ub.b + (3 * Eb - 2 * Mb) * Ab.b
      }
      static Red() {
        return new Lb(1, 0, 0)
      }
      static Green() {
        return new Lb(0, 1, 0)
      }
      static Blue() {
        return new Lb(0, 0, 1)
      }
      static Black() {
        return new Lb(0, 0, 0)
      }
      static get BlackReadOnly() {
        return Lb._BlackReadOnly
      }
      static White() {
        return new Lb(1, 1, 1)
      }
      static Purple() {
        return new Lb(.5, 0, .5)
      }
      static Magenta() {
        return new Lb(1, 0, 1)
      }
      static Yellow() {
        return new Lb(1, 1, 0)
      }
      static Gray() {
        return new Lb(.5, .5, .5)
      }
      static Teal() {
        return new Lb(0, 1, 1)
      }
      static Random() {
        return new Lb(Math.random(), Math.random(), Math.random())
      }
    }
    Lb._V8PerformanceHack = new Lb(.5, .5, .5), Lb._BlackReadOnly = Lb.Black();
    class Pb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = bb, this.g = ab, this.b = Ub, this.a = Ab
      }
      qUb() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bb[ab] = this.r, bb[ab + 1] = this.g, bb[ab + 2] = this.b, bb[ab + 3] = this.a, this
      }
      Zab(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = bb[ab], this.g = bb[ab + 1], this.b = bb[ab + 2], this.a = bb[ab + 3], this
      }
      equals(bb) {
        return bb && this.r === bb.r && this.g === bb.g && this.b === bb.b && this.a === bb.a
      }
      add(bb) {
        return new Pb(this.r + bb.r, this.g + bb.g, this.b + bb.b, this.a + bb.a)
      }
      addToRef(bb, ab) {
        return ab.r = this.r + bb.r, ab.g = this.g + bb.g, ab.b = this.b + bb.b, ab.a = this.a + bb.a, ab
      }
      addInPlace(bb) {
        return this.r += bb.r, this.g += bb.g, this.b += bb.b, this.a += bb.a, this
      }
      addInPlaceFromFloats(bb, ab, Ub, Ab) {
        return this.r += bb, this.g += ab, this.b += Ub, this.a += Ab, this
      }
      subtract(bb) {
        return new Pb(this.r - bb.r, this.g - bb.g, this.b - bb.b, this.a - bb.a)
      }
      subtractToRef(bb, ab) {
        return ab.r = this.r - bb.r, ab.g = this.g - bb.g, ab.b = this.b - bb.b, ab.a = this.a - bb.a, ab
      }
      MAb(bb) {
        return this.r -= bb.r, this.g -= bb.g, this.b -= bb.b, this.a -= bb.a, this
      }
      subtractFromFloats(bb, ab, Ub, Ab) {
        return new Pb(this.r - bb, this.g - ab, this.b - Ub, this.a - Ab)
      }
      subtractFromFloatsToRef(bb, ab, Ub, Ab, Mb) {
        return Mb.r = this.r - bb, Mb.g = this.g - ab, Mb.b = this.b - Ub, Mb.a = this.a - Ab, Mb
      }
      scale(bb) {
        return new Pb(this.r * bb, this.g * bb, this.b * bb, this.a * bb)
      }
      scaleInPlace(bb) {
        return this.r *= bb, this.g *= bb, this.b *= bb, this.a *= bb, this
      }
      scaleToRef(bb, ab) {
        return ab.r = this.r * bb, ab.g = this.g * bb, ab.b = this.b * bb, ab.a = this.a * bb, ab
      }
      scaleAndAddToRef(bb, ab) {
        return ab.r += this.r * bb, ab.g += this.g * bb, ab.b += this.b * bb, ab.a += this.a * bb, ab
      }
      clampToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        return Ub.r = (0, Tb.Clamp)(this.r, bb, ab), Ub.g = (0, Tb.Clamp)(this.g, bb, ab), Ub.b = (0, Tb.Clamp)(this.b, bb, ab), Ub.a = (0, Tb.Clamp)(this.a, bb, ab), Ub
      }
      multiply(bb) {
        return new Pb(this.r * bb.r, this.g * bb.g, this.b * bb.b, this.a * bb.a)
      }
      multiplyToRef(bb, ab) {
        return ab.r = this.r * bb.r, ab.g = this.g * bb.g, ab.b = this.b * bb.b, ab.a = this.a * bb.a, ab
      }
      multiplyInPlace(bb) {
        return this.r *= bb.r, this.g *= bb.g, this.b *= bb.b, this.a *= bb.a, this
      }
      multiplyByFloats(bb, ab, Ub, Ab) {
        return new Pb(this.r * bb, this.g * ab, this.b * Ub, this.a * Ab)
      }
      divide(bb) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(bb, ab) {
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
      minimizeInPlaceFromFloats(bb, ab, Ub, Ab) {
        return this.r = Math.min(bb, this.r), this.g = Math.min(ab, this.g), this.b = Math.min(Ub, this.b), this.a = Math.min(Ab, this.a), this
      }
      maximizeInPlaceFromFloats(bb, ab, Ub, Ab) {
        return this.r = Math.max(bb, this.r), this.g = Math.max(ab, this.g), this.b = Math.max(Ub, this.b), this.a = Math.max(Ab, this.a), this
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
      pa() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(bb) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mb.e;
        return (0, Tb.WithinEpsilon)(this.r, bb.r, ab) && (0, Tb.WithinEpsilon)(this.g, bb.g, ab) && (0, Tb.WithinEpsilon)(this.b, bb.b, ab) && (0, Tb.WithinEpsilon)(this.a, bb.a, ab)
      }
      eEb(bb, ab, Ub, Ab) {
        return this.r === bb && this.g === ab && this.b === Ub && this.a === Ab
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
        return (new Pb).EUb(this)
      }
      EUb(bb) {
        return this.r = bb.r, this.g = bb.g, this.b = bb.b, this.a = bb.a, this
      }
      K9(bb, ab, Ub, Ab) {
        return this.r = bb, this.g = ab, this.b = Ub, this.a = Ab, this
      }
      set(bb, ab, Ub, Ab) {
        return this.K9(bb, ab, Ub, Ab)
      }
      B3(bb) {
        return this.r = this.g = this.b = this.a = bb, this
      }
      toHexString() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ab = Math.round(255 * this.r),
          Ub = Math.round(255 * this.g),
          Ab = Math.round(255 * this.b);
        if (bb) return "#" + (0, Tb.ToHex)(ab) + (0, Tb.ToHex)(Ub) + (0, Tb.ToHex)(Ab);
        const Mb = Math.round(255 * this.a);
        return "#" + (0, Tb.ToHex)(ab) + (0, Tb.ToHex)(Ub) + (0, Tb.ToHex)(Ab) + (0, Tb.ToHex)(Mb)
      }
      fromHexString(bb) {
        return "#" !== bb.substring(0, 1) || 9 !== bb.length && 7 !== bb.length || (this.r = parseInt(bb.substring(1, 3), 16) / 255, this.g = parseInt(bb.substring(3, 5), 16) / 255, this.b = parseInt(bb.substring(5, 7), 16) / 255, 9 === bb.length && (this.a = parseInt(bb.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ab = new Pb;
        return this.toLinearSpaceToRef(ab, bb), ab
      }
      toLinearSpaceToRef(bb) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (bb.r = Bb(this.r), bb.g = Bb(this.g), bb.b = Bb(this.b)) : (bb.r = Yb(this.r), bb.g = Yb(this.g), bb.b = Yb(this.b)), bb.a = this.a, this
      }
      toGammaSpace() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ab = new Pb;
        return this.toGammaSpaceToRef(ab, bb), ab
      }
      toGammaSpaceToRef(bb) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (bb.r = vb(this.r), bb.g = vb(this.g), bb.b = vb(this.b)) : (bb.r = eb(this.r), bb.g = eb(this.g), bb.b = eb(this.b)), bb.a = this.a, this
      }
      static FromHexString(bb) {
        return "#" !== bb.substring(0, 1) || 9 !== bb.length && 7 !== bb.length ? new Pb(0, 0, 0, 0) : new Pb(0, 0, 0, 1).fromHexString(bb)
      }
      static Lerp(bb, ab, Ub) {
        return Pb.LerpToRef(bb, ab, Ub, new Pb)
      }
      static LerpToRef(bb, ab, Ub, Ab) {
        return Ab.r = bb.r + (ab.r - bb.r) * Ub, Ab.g = bb.g + (ab.g - bb.g) * Ub, Ab.b = bb.b + (ab.b - bb.b) * Ub, Ab.a = bb.a + (ab.a - bb.a) * Ub, Ab
      }
      static Hermite(bb, ab, Ub, Ab, Mb) {
        const Tb = Mb * Mb,
          Eb = Mb * Tb,
          Yb = 2 * Eb - 3 * Tb + 1,
          Bb = -2 * Eb + 3 * Tb,
          eb = Eb - 2 * Tb + Mb,
          vb = Eb - Tb,
          Lb = bb.r * Yb + Ub.r * Bb + ab.r * eb + Ab.r * vb,
          Xb = bb.g * Yb + Ub.g * Bb + ab.g * eb + Ab.g * vb,
          jb = bb.b * Yb + Ub.b * Bb + ab.b * eb + Ab.b * vb,
          Rb = bb.a * Yb + Ub.a * Bb + ab.a * eb + Ab.a * vb;
        return new Pb(Lb, Xb, jb, Rb)
      }
      static Hermite1stDerivative(bb, ab, Ub, Ab, Mb) {
        const Tb = new Pb;
        return this.Hermite1stDerivativeToRef(bb, ab, Ub, Ab, Mb, Tb), Tb
      }
      static Hermite1stDerivativeToRef(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = Mb * Mb;
        Tb.r = 6 * (Eb - Mb) * bb.r + (3 * Eb - 4 * Mb + 1) * ab.r + 6 * (-Eb + Mb) * Ub.r + (3 * Eb - 2 * Mb) * Ab.r, Tb.g = 6 * (Eb - Mb) * bb.g + (3 * Eb - 4 * Mb + 1) * ab.g + 6 * (-Eb + Mb) * Ub.g + (3 * Eb - 2 * Mb) * Ab.g, Tb.b = 6 * (Eb - Mb) * bb.b + (3 * Eb - 4 * Mb + 1) * ab.b + 6 * (-Eb + Mb) * Ub.b + (3 * Eb - 2 * Mb) * Ab.b, Tb.a = 6 * (Eb - Mb) * bb.a + (3 * Eb - 4 * Mb + 1) * ab.a + 6 * (-Eb + Mb) * Ub.a + (3 * Eb - 2 * Mb) * Ab.a
      }
      static FromColor3(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Pb(bb.r, bb.g, bb.b, ab)
      }
      static FromArray(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Pb(bb[ab], bb[ab + 1], bb[ab + 2], bb[ab + 3])
      }
      static FromArrayToRef(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        Ub.r = bb[ab], Ub.g = bb[ab + 1], Ub.b = bb[ab + 2], Ub.a = bb[ab + 3]
      }
      static FromInts(bb, ab, Ub, Ab) {
        return new Pb(bb / 255, ab / 255, Ub / 255, Ab / 255)
      }
      static CheckColors4(bb, ab) {
        if (bb.length === 3 * ab) {
          const ab = [];
          for (let Ub = 0; Ub < bb.length; Ub += 3) {
            const Ab = Ub / 3 * 4;
            ab[Ab] = bb[Ub], ab[Ab + 1] = bb[Ub + 1], ab[Ab + 2] = bb[Ub + 2], ab[Ab + 3] = 1
          }
          return ab
        }
        return bb
      }
    }
    Pb._V8PerformanceHack = new Pb(.5, .5, .5, .5);
    class Xb {}
    Xb.Color3 = (0, Ab.b)(3, Lb.Black), Xb.Color4 = (0, Ab.b)(3, (() => new Pb(0, 0, 0, 0)));
    let jb = !1;

    function Rb() {
      jb || (jb = !0, Object.defineProperties(Lb.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Pb.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, Eb.f)("BABYLON.Color3", Lb), (0, Eb.f)("BABYLON.Color4", Pb))
    }
  },
  36405: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb,
      g: () => Ab,
      j: () => Mb
    });
    const Ab = 1 / 2.2,
      Mb = 2.2;
    Math.sqrt(5);
    let Tb = .001
  },
  36436: (bb, ab, Ub) => {
    function Ab(bb) {
      return parseInt(bb.toString().replace(/\W/g, ""))
    }

    function Mb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(bb - ab) <= Ub
    }

    function Tb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return bb < ab - Ab || bb > Ub + Ab
    }

    function Eb(bb, ab) {
      return bb === ab ? bb : Math.random() * (ab - bb) + bb
    }

    function Yb(bb, ab, Ub) {
      return bb + (ab - bb) * Ub
    }

    function Bb(bb, ab, Ub) {
      let Ab = kb(ab - bb, 360);
      return Ab > 180 && (Ab -= 360), bb + Ab * Pb(Ub)
    }

    function eb(bb, ab, Ub) {
      let Ab;
      return Ab = bb != ab ? Pb((Ub - bb) / (ab - bb)) : 0, Ab
    }

    function vb(bb, ab, Ub, Ab, Mb) {
      const Tb = Mb * Mb,
        Eb = Mb * Tb;
      return bb * (2 * Eb - 3 * Tb + 1) + Ub * (-2 * Eb + 3 * Tb) + ab * (Eb - 2 * Tb + Mb) + Ab * (Eb - Tb)
    }

    function Lb(bb, ab, Ub, Ab, Mb) {
      const Tb = Mb * Mb;
      return 6 * (Tb - Mb) * bb + (3 * Tb - 4 * Mb + 1) * ab + 6 * (-Tb + Mb) * Ub + (3 * Tb - 2 * Mb) * Ab
    }

    function Pb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(Ub, Math.max(ab, bb))
    }

    function Xb(bb) {
      return bb -= 2 * Math.PI * Math.floor((bb + Math.PI) / (2 * Math.PI))
    }

    function jb(bb) {
      const ab = bb.toString(16);
      return bb <= 15 ? ("0" + ab).toUpperCase() : ab.toUpperCase()
    }

    function Rb(bb) {
      if (Math.log2) return Math.floor(Math.log2(bb));
      if (bb < 0) return NaN;
      if (0 === bb) return -1 / 0;
      let ab = 0;
      if (bb < 1) {
        for (; bb < 1;) ab++, bb *= 2;
        ab = -ab
      } else if (bb > 1)
        for (; bb > 1;) ab++, bb = Math.floor(bb / 2);
      return ab
    }

    function kb(bb, ab) {
      return bb - Math.floor(bb / ab) * ab
    }

    function yb(bb, ab, Ub) {
      return (bb - ab) / (Ub - ab)
    }

    function Zb(bb, ab, Ub) {
      return bb * (Ub - ab) + ab
    }

    function Db(bb, ab) {
      let Ub = kb(ab - bb, 360);
      return Ub > 180 && (Ub -= 360), Ub
    }

    function zb(bb, ab) {
      const Ub = kb(bb, 2 * ab);
      return ab - Math.abs(Ub - ab)
    }

    function xb(bb, ab, Ub) {
      let Ab = Pb(Ub);
      return Ab = -2 * Ab * Ab * Ab + 3 * Ab * Ab, ab * Ab + bb * (1 - Ab)
    }

    function ib(bb, ab, Ub) {
      let Ab;
      return Ab = Math.abs(ab - bb) <= Ub ? ab : bb + Math.sign(ab - bb) * Ub, Ab
    }

    function fb(bb, ab, Ub) {
      const Ab = Db(bb, ab);
      let Mb;
      return Mb = -Ub < Ab && Ab < Ub ? ab : ib(bb, ab = bb + Ab, Ub), Mb
    }

    function mb(bb, ab, Ub) {
      return (bb - ab) / (Ub - ab)
    }

    function pb(bb, ab, Ub) {
      return (Ub - ab) * bb + ab
    }

    function Nb(bb, ab) {
      const Ub = bb % ab;
      return 0 === Ub ? ab : Nb(ab, Ub)
    }
    Ub.r(ab), Ub.d(ab, {
      Clamp: () => Pb,
      DeltaAngle: () => Db,
      Denormalize: () => Zb,
      ExtractAsInt: () => Ab,
      Hermite: () => vb,
      Hermite1stDerivative: () => Lb,
      HighestCommonFactor: () => Nb,
      ILog2: () => Rb,
      InverseLerp: () => eb,
      Lerp: () => Yb,
      LerpAngle: () => Bb,
      MoveTowards: () => ib,
      MoveTowardsAngle: () => fb,
      Normalize: () => yb,
      NormalizeRadians: () => Xb,
      OutsideRange: () => Tb,
      PercentToRange: () => pb,
      PingPong: () => zb,
      RandomRange: () => Eb,
      RangeToPercent: () => mb,
      Repeat: () => kb,
      SmoothStep: () => xb,
      ToHex: () => jb,
      WithinEpsilon: () => Mb
    })
  },
  36410: (bb, ab, Ub) => {
    function Ab(bb, ab) {
      const Ub = [];
      for (let Ab = 0; Ab < bb; ++Ab) Ub.push(ab());
      return Ub
    }

    function Mb(bb, ab) {
      return Ab(bb, ab)
    }
    Ub.d(ab, {
      b: () => Ab,
      e: () => Mb,
      i: () => Eb
    });
    const Tb = ["push", "splice", "pop", "shift", "unshift"];

    function Eb(bb, ab) {
      const Ub = Tb.map((Ub => function(bb, ab, Ub) {
        const Ab = bb[ab];
        if ("function" !== typeof Ab) return null;
        const Mb = function() {
          const Ab = bb.length,
            Tb = Mb.previous.apply(bb, arguments);
          return Ub(ab, Ab), Tb
        };
        return Ab.next = Mb, Mb.previous = Ab, bb[ab] = Mb, () => {
          const Ub = Mb.previous;
          if (!Ub) return;
          const Ab = Mb.next;
          Ab ? (Ub.next = Ab, Ab.previous = Ub) : (Ub.next = void 0, bb[ab] = Ub), Mb.next = void 0, Mb.previous = void 0
        }
      }(bb, Ub, ab)));
      return () => {
        for (const bb of Ub) bb?.()
      }
    }
  },
  36447: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Tb,
      f: () => Mb
    });
    const Ab = {};

    function Mb(bb, ab) {
      Ab[bb] = ab
    }

    function Tb(bb) {
      return Ab[bb]
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);