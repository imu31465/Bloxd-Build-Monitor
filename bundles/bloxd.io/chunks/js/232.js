export const id = 232;
export const ids = [232];
export const modules = {
  37336: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => pm,
      c: () => Em,
      d: () => Ym,
      e: () => om
    });
    var hm = fm(37197),
      Am = fm(37191),
      am = fm(37208),
      xm = fm(37224);

    function wm(mm) {
      return Math.pow(mm, Am.g)
    }

    function Dm(mm) {
      return mm <= .04045 ? .0773993808 * mm : Math.pow(.947867299 * (mm + .055), 2.4)
    }

    function im(mm) {
      return Math.pow(mm, Am.f)
    }

    function Rm(mm) {
      return mm <= .0031308 ? 12.92 * mm : 1.055 * Math.pow(mm, .41666) - .055
    }
    class pm {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = mm, this.g = Tm, this.b = fm
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let mm = 255 * this.r | 0;
        return mm = 397 * mm ^ 255 * this.g, mm = 397 * mm ^ 255 * this.b, mm
      }
      toArray(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return mm[Tm] = this.r, mm[Tm + 1] = this.g, mm[Tm + 2] = this.b, this
      }
      UTm(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return pm.FromArrayToRef(mm, Tm, this), this
      }
      toColor4() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new Em(this.r, this.g, this.b, mm)
      }
      ahm() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(mm) {
        return new pm(this.r * mm.r, this.g * mm.g, this.b * mm.b)
      }
      multiplyToRef(mm, Tm) {
        return Tm.r = this.r * mm.r, Tm.g = this.g * mm.g, Tm.b = this.b * mm.b, Tm
      }
      multiplyInPlace(mm) {
        return this.r *= mm.r, this.g *= mm.g, this.b *= mm.b, this
      }
      multiplyByFloats(mm, Tm, fm) {
        return new pm(this.r * mm, this.g * Tm, this.b * fm)
      }
      divide(mm) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(mm, Tm) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(mm) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(mm) {
        return this.minimizeInPlaceFromFloats(mm.r, mm.g, mm.b)
      }
      maximizeInPlace(mm) {
        return this.maximizeInPlaceFromFloats(mm.r, mm.g, mm.b)
      }
      minimizeInPlaceFromFloats(mm, Tm, fm) {
        return this.r = Math.min(mm, this.r), this.g = Math.min(Tm, this.g), this.b = Math.min(fm, this.b), this
      }
      maximizeInPlaceFromFloats(mm, Tm, fm) {
        return this.r = Math.max(mm, this.r), this.g = Math.max(Tm, this.g), this.b = Math.max(fm, this.b), this
      }
      floorToRef(mm) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(mm) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(mm) {
        return mm && this.r === mm.r && this.g === mm.g && this.b === mm.b
      }
      equalsFloats(mm, Tm, fm) {
        return this.Mxm(mm, Tm, fm)
      }
      Mxm(mm, Tm, fm) {
        return this.r === mm && this.g === Tm && this.b === fm
      }
      equalsWithEpsilon(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Am.c;
        return (0, am.WithinEpsilon)(this.r, mm.r, Tm) && (0, am.WithinEpsilon)(this.g, mm.g, Tm) && (0, am.WithinEpsilon)(this.b, mm.b, Tm)
      }
      GA() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(mm) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(mm) {
        return new pm(this.r * mm, this.g * mm, this.b * mm)
      }
      scaleInPlace(mm) {
        return this.r *= mm, this.g *= mm, this.b *= mm, this
      }
      scaleToRef(mm, Tm) {
        return Tm.r = this.r * mm, Tm.g = this.g * mm, Tm.b = this.b * mm, Tm
      }
      scaleAndAddToRef(mm, Tm) {
        return Tm.r += this.r * mm, Tm.g += this.g * mm, Tm.b += this.b * mm, Tm
      }
      clampToRef() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        return fm.r = (0, am.Clamp)(this.r, mm, Tm), fm.g = (0, am.Clamp)(this.g, mm, Tm), fm.b = (0, am.Clamp)(this.b, mm, Tm), fm
      }
      add(mm) {
        return new pm(this.r + mm.r, this.g + mm.g, this.b + mm.b)
      }
      addInPlace(mm) {
        return this.r += mm.r, this.g += mm.g, this.b += mm.b, this
      }
      addInPlaceFromFloats(mm, Tm, fm) {
        return this.r += mm, this.g += Tm, this.b += fm, this
      }
      addToRef(mm, Tm) {
        return Tm.r = this.r + mm.r, Tm.g = this.g + mm.g, Tm.b = this.b + mm.b, Tm
      }
      subtract(mm) {
        return new pm(this.r - mm.r, this.g - mm.g, this.b - mm.b)
      }
      subtractToRef(mm, Tm) {
        return Tm.r = this.r - mm.r, Tm.g = this.g - mm.g, Tm.b = this.b - mm.b, Tm
      }
      zhm(mm) {
        return this.r -= mm.r, this.g -= mm.g, this.b -= mm.b, this
      }
      subtractFromFloats(mm, Tm, fm) {
        return new pm(this.r - mm, this.g - Tm, this.b - fm)
      }
      subtractFromFloatsToRef(mm, Tm, fm, hm) {
        return hm.r = this.r - mm, hm.g = this.g - Tm, hm.b = this.b - fm, hm
      }
      clone() {
        return new pm(this.r, this.g, this.b)
      }
      ZZ(mm) {
        return this.r = mm.r, this.g = mm.g, this.b = mm.b, this
      }
      Z8(mm, Tm, fm) {
        return this.r = mm, this.g = Tm, this.b = fm, this
      }
      set(mm, Tm, fm) {
        return this.Z8(mm, Tm, fm)
      }
      Y5(mm) {
        return this.r = this.g = this.b = mm, this
      }
      toHexString() {
        const mm = Math.round(255 * this.r),
          Tm = Math.round(255 * this.g),
          fm = Math.round(255 * this.b);
        return "#" + (0, am.ToHex)(mm) + (0, am.ToHex)(Tm) + (0, am.ToHex)(fm)
      }
      fromHexString(mm) {
        return "#" !== mm.substring(0, 1) || 7 !== mm.length || (this.r = parseInt(mm.substring(1, 3), 16) / 255, this.g = parseInt(mm.substring(3, 5), 16) / 255, this.b = parseInt(mm.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new pm)
      }
      toHSVToRef(mm) {
        const Tm = this.r,
          fm = this.g,
          hm = this.b,
          Am = Math.max(Tm, fm, hm),
          am = Math.min(Tm, fm, hm);
        let xm = 0,
          wm = 0;
        const Dm = Am,
          im = Am - am;
        return 0 !== Am && (wm = im / Am), Am != am && (Am == Tm ? (xm = (fm - hm) / im, fm < hm && (xm += 6)) : Am == fm ? xm = (hm - Tm) / im + 2 : Am == hm && (xm = (Tm - fm) / im + 4), xm *= 60), mm.r = xm, mm.g = wm, mm.b = Dm, mm
      }
      toLinearSpace() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Tm = new pm;
        return this.toLinearSpaceToRef(Tm, mm), Tm
      }
      toLinearSpaceToRef(mm) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (mm.r = Dm(this.r), mm.g = Dm(this.g), mm.b = Dm(this.b)) : (mm.r = wm(this.r), mm.g = wm(this.g), mm.b = wm(this.b)), this
      }
      toGammaSpace() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Tm = new pm;
        return this.toGammaSpaceToRef(Tm, mm), Tm
      }
      toGammaSpaceToRef(mm) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (mm.r = Rm(this.r), mm.g = Rm(this.g), mm.b = Rm(this.b)) : (mm.r = im(this.r), mm.g = im(this.g), mm.b = im(this.b)), this
      }
      static HSVtoRGBToRef(mm, Tm, fm, hm) {
        const Am = fm * Tm,
          am = mm / 60,
          xm = Am * (1 - Math.abs(am % 2 - 1));
        let wm = 0,
          Dm = 0,
          im = 0;
        am >= 0 && am <= 1 ? (wm = Am, Dm = xm) : am >= 1 && am <= 2 ? (wm = xm, Dm = Am) : am >= 2 && am <= 3 ? (Dm = Am, im = xm) : am >= 3 && am <= 4 ? (Dm = xm, im = Am) : am >= 4 && am <= 5 ? (wm = xm, im = Am) : am >= 5 && am <= 6 && (wm = Am, im = xm);
        const Rm = fm - Am;
        return hm.r = wm + Rm, hm.g = Dm + Rm, hm.b = im + Rm, hm
      }
      static FromHSV(mm, Tm, fm) {
        const hm = new pm(0, 0, 0);
        return pm.HSVtoRGBToRef(mm, Tm, fm, hm), hm
      }
      static FromHexString(mm) {
        return new pm(0, 0, 0).fromHexString(mm)
      }
      static FromArray(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new pm(mm[Tm], mm[Tm + 1], mm[Tm + 2])
      }
      static FromArrayToRef(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        fm.r = mm[Tm], fm.g = mm[Tm + 1], fm.b = mm[Tm + 2]
      }
      static FromInts(mm, Tm, fm) {
        return new pm(mm / 255, Tm / 255, fm / 255)
      }
      static Lerp(mm, Tm, fm) {
        const hm = new pm(0, 0, 0);
        return pm.LerpToRef(mm, Tm, fm, hm), hm
      }
      static LerpToRef(mm, Tm, fm, hm) {
        hm.r = mm.r + (Tm.r - mm.r) * fm, hm.g = mm.g + (Tm.g - mm.g) * fm, hm.b = mm.b + (Tm.b - mm.b) * fm
      }
      static Hermite(mm, Tm, fm, hm, Am) {
        const am = Am * Am,
          xm = Am * am,
          wm = 2 * xm - 3 * am + 1,
          Dm = -2 * xm + 3 * am,
          im = xm - 2 * am + Am,
          Rm = xm - am,
          Em = mm.r * wm + fm.r * Dm + Tm.r * im + hm.r * Rm,
          om = mm.g * wm + fm.g * Dm + Tm.g * im + hm.g * Rm,
          Om = mm.b * wm + fm.b * Dm + Tm.b * im + hm.b * Rm;
        return new pm(Em, om, Om)
      }
      static Hermite1stDerivative(mm, Tm, fm, hm, Am) {
        const am = pm.Black();
        return this.Hermite1stDerivativeToRef(mm, Tm, fm, hm, Am, am), am
      }
      static Hermite1stDerivativeToRef(mm, Tm, fm, hm, Am, am) {
        const xm = Am * Am;
        am.r = 6 * (xm - Am) * mm.r + (3 * xm - 4 * Am + 1) * Tm.r + 6 * (-xm + Am) * fm.r + (3 * xm - 2 * Am) * hm.r, am.g = 6 * (xm - Am) * mm.g + (3 * xm - 4 * Am + 1) * Tm.g + 6 * (-xm + Am) * fm.g + (3 * xm - 2 * Am) * hm.g, am.b = 6 * (xm - Am) * mm.b + (3 * xm - 4 * Am + 1) * Tm.b + 6 * (-xm + Am) * fm.b + (3 * xm - 2 * Am) * hm.b
      }
      static Red() {
        return new pm(1, 0, 0)
      }
      static Green() {
        return new pm(0, 1, 0)
      }
      static Blue() {
        return new pm(0, 0, 1)
      }
      static Black() {
        return new pm(0, 0, 0)
      }
      static get BlackReadOnly() {
        return pm._BlackReadOnly
      }
      static White() {
        return new pm(1, 1, 1)
      }
      static Purple() {
        return new pm(.5, 0, .5)
      }
      static Magenta() {
        return new pm(1, 0, 1)
      }
      static Yellow() {
        return new pm(1, 1, 0)
      }
      static Gray() {
        return new pm(.5, .5, .5)
      }
      static Teal() {
        return new pm(0, 1, 1)
      }
      static Random() {
        return new pm(Math.random(), Math.random(), Math.random())
      }
    }
    pm._V8PerformanceHack = new pm(.5, .5, .5), pm._BlackReadOnly = pm.Black();
    class Em {
      constructor() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = mm, this.g = Tm, this.b = fm, this.a = hm
      }
      ahm() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return mm[Tm] = this.r, mm[Tm + 1] = this.g, mm[Tm + 2] = this.b, mm[Tm + 3] = this.a, this
      }
      UTm(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = mm[Tm], this.g = mm[Tm + 1], this.b = mm[Tm + 2], this.a = mm[Tm + 3], this
      }
      equals(mm) {
        return mm && this.r === mm.r && this.g === mm.g && this.b === mm.b && this.a === mm.a
      }
      add(mm) {
        return new Em(this.r + mm.r, this.g + mm.g, this.b + mm.b, this.a + mm.a)
      }
      addToRef(mm, Tm) {
        return Tm.r = this.r + mm.r, Tm.g = this.g + mm.g, Tm.b = this.b + mm.b, Tm.a = this.a + mm.a, Tm
      }
      addInPlace(mm) {
        return this.r += mm.r, this.g += mm.g, this.b += mm.b, this.a += mm.a, this
      }
      addInPlaceFromFloats(mm, Tm, fm, hm) {
        return this.r += mm, this.g += Tm, this.b += fm, this.a += hm, this
      }
      subtract(mm) {
        return new Em(this.r - mm.r, this.g - mm.g, this.b - mm.b, this.a - mm.a)
      }
      subtractToRef(mm, Tm) {
        return Tm.r = this.r - mm.r, Tm.g = this.g - mm.g, Tm.b = this.b - mm.b, Tm.a = this.a - mm.a, Tm
      }
      zhm(mm) {
        return this.r -= mm.r, this.g -= mm.g, this.b -= mm.b, this.a -= mm.a, this
      }
      subtractFromFloats(mm, Tm, fm, hm) {
        return new Em(this.r - mm, this.g - Tm, this.b - fm, this.a - hm)
      }
      subtractFromFloatsToRef(mm, Tm, fm, hm, Am) {
        return Am.r = this.r - mm, Am.g = this.g - Tm, Am.b = this.b - fm, Am.a = this.a - hm, Am
      }
      scale(mm) {
        return new Em(this.r * mm, this.g * mm, this.b * mm, this.a * mm)
      }
      scaleInPlace(mm) {
        return this.r *= mm, this.g *= mm, this.b *= mm, this.a *= mm, this
      }
      scaleToRef(mm, Tm) {
        return Tm.r = this.r * mm, Tm.g = this.g * mm, Tm.b = this.b * mm, Tm.a = this.a * mm, Tm
      }
      scaleAndAddToRef(mm, Tm) {
        return Tm.r += this.r * mm, Tm.g += this.g * mm, Tm.b += this.b * mm, Tm.a += this.a * mm, Tm
      }
      clampToRef() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        return fm.r = (0, am.Clamp)(this.r, mm, Tm), fm.g = (0, am.Clamp)(this.g, mm, Tm), fm.b = (0, am.Clamp)(this.b, mm, Tm), fm.a = (0, am.Clamp)(this.a, mm, Tm), fm
      }
      multiply(mm) {
        return new Em(this.r * mm.r, this.g * mm.g, this.b * mm.b, this.a * mm.a)
      }
      multiplyToRef(mm, Tm) {
        return Tm.r = this.r * mm.r, Tm.g = this.g * mm.g, Tm.b = this.b * mm.b, Tm.a = this.a * mm.a, Tm
      }
      multiplyInPlace(mm) {
        return this.r *= mm.r, this.g *= mm.g, this.b *= mm.b, this.a *= mm.a, this
      }
      multiplyByFloats(mm, Tm, fm, hm) {
        return new Em(this.r * mm, this.g * Tm, this.b * fm, this.a * hm)
      }
      divide(mm) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(mm, Tm) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(mm) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(mm) {
        return this.r = Math.min(this.r, mm.r), this.g = Math.min(this.g, mm.g), this.b = Math.min(this.b, mm.b), this.a = Math.min(this.a, mm.a), this
      }
      maximizeInPlace(mm) {
        return this.r = Math.max(this.r, mm.r), this.g = Math.max(this.g, mm.g), this.b = Math.max(this.b, mm.b), this.a = Math.max(this.a, mm.a), this
      }
      minimizeInPlaceFromFloats(mm, Tm, fm, hm) {
        return this.r = Math.min(mm, this.r), this.g = Math.min(Tm, this.g), this.b = Math.min(fm, this.b), this.a = Math.min(hm, this.a), this
      }
      maximizeInPlaceFromFloats(mm, Tm, fm, hm) {
        return this.r = Math.max(mm, this.r), this.g = Math.max(Tm, this.g), this.b = Math.max(fm, this.b), this.a = Math.max(hm, this.a), this
      }
      floorToRef(mm) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(mm) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      GA() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(mm) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Am.c;
        return (0, am.WithinEpsilon)(this.r, mm.r, Tm) && (0, am.WithinEpsilon)(this.g, mm.g, Tm) && (0, am.WithinEpsilon)(this.b, mm.b, Tm) && (0, am.WithinEpsilon)(this.a, mm.a, Tm)
      }
      Mxm(mm, Tm, fm, hm) {
        return this.r === mm && this.g === Tm && this.b === fm && this.a === hm
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let mm = 255 * this.r | 0;
        return mm = 397 * mm ^ 255 * this.g, mm = 397 * mm ^ 255 * this.b, mm = 397 * mm ^ 255 * this.a, mm
      }
      clone() {
        return (new Em).ZZ(this)
      }
      ZZ(mm) {
        return this.r = mm.r, this.g = mm.g, this.b = mm.b, this.a = mm.a, this
      }
      Z8(mm, Tm, fm, hm) {
        return this.r = mm, this.g = Tm, this.b = fm, this.a = hm, this
      }
      set(mm, Tm, fm, hm) {
        return this.Z8(mm, Tm, fm, hm)
      }
      Y5(mm) {
        return this.r = this.g = this.b = this.a = mm, this
      }
      toHexString() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Tm = Math.round(255 * this.r),
          fm = Math.round(255 * this.g),
          hm = Math.round(255 * this.b);
        if (mm) return "#" + (0, am.ToHex)(Tm) + (0, am.ToHex)(fm) + (0, am.ToHex)(hm);
        const Am = Math.round(255 * this.a);
        return "#" + (0, am.ToHex)(Tm) + (0, am.ToHex)(fm) + (0, am.ToHex)(hm) + (0, am.ToHex)(Am)
      }
      fromHexString(mm) {
        return "#" !== mm.substring(0, 1) || 9 !== mm.length && 7 !== mm.length || (this.r = parseInt(mm.substring(1, 3), 16) / 255, this.g = parseInt(mm.substring(3, 5), 16) / 255, this.b = parseInt(mm.substring(5, 7), 16) / 255, 9 === mm.length && (this.a = parseInt(mm.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Tm = new Em;
        return this.toLinearSpaceToRef(Tm, mm), Tm
      }
      toLinearSpaceToRef(mm) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (mm.r = Dm(this.r), mm.g = Dm(this.g), mm.b = Dm(this.b)) : (mm.r = wm(this.r), mm.g = wm(this.g), mm.b = wm(this.b)), mm.a = this.a, this
      }
      toGammaSpace() {
        let mm = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Tm = new Em;
        return this.toGammaSpaceToRef(Tm, mm), Tm
      }
      toGammaSpaceToRef(mm) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (mm.r = Rm(this.r), mm.g = Rm(this.g), mm.b = Rm(this.b)) : (mm.r = im(this.r), mm.g = im(this.g), mm.b = im(this.b)), mm.a = this.a, this
      }
      static FromHexString(mm) {
        return "#" !== mm.substring(0, 1) || 9 !== mm.length && 7 !== mm.length ? new Em(0, 0, 0, 0) : new Em(0, 0, 0, 1).fromHexString(mm)
      }
      static Lerp(mm, Tm, fm) {
        return Em.LerpToRef(mm, Tm, fm, new Em)
      }
      static LerpToRef(mm, Tm, fm, hm) {
        return hm.r = mm.r + (Tm.r - mm.r) * fm, hm.g = mm.g + (Tm.g - mm.g) * fm, hm.b = mm.b + (Tm.b - mm.b) * fm, hm.a = mm.a + (Tm.a - mm.a) * fm, hm
      }
      static Hermite(mm, Tm, fm, hm, Am) {
        const am = Am * Am,
          xm = Am * am,
          wm = 2 * xm - 3 * am + 1,
          Dm = -2 * xm + 3 * am,
          im = xm - 2 * am + Am,
          Rm = xm - am,
          pm = mm.r * wm + fm.r * Dm + Tm.r * im + hm.r * Rm,
          om = mm.g * wm + fm.g * Dm + Tm.g * im + hm.g * Rm,
          Om = mm.b * wm + fm.b * Dm + Tm.b * im + hm.b * Rm,
          Ym = mm.a * wm + fm.a * Dm + Tm.a * im + hm.a * Rm;
        return new Em(pm, om, Om, Ym)
      }
      static Hermite1stDerivative(mm, Tm, fm, hm, Am) {
        const am = new Em;
        return this.Hermite1stDerivativeToRef(mm, Tm, fm, hm, Am, am), am
      }
      static Hermite1stDerivativeToRef(mm, Tm, fm, hm, Am, am) {
        const xm = Am * Am;
        am.r = 6 * (xm - Am) * mm.r + (3 * xm - 4 * Am + 1) * Tm.r + 6 * (-xm + Am) * fm.r + (3 * xm - 2 * Am) * hm.r, am.g = 6 * (xm - Am) * mm.g + (3 * xm - 4 * Am + 1) * Tm.g + 6 * (-xm + Am) * fm.g + (3 * xm - 2 * Am) * hm.g, am.b = 6 * (xm - Am) * mm.b + (3 * xm - 4 * Am + 1) * Tm.b + 6 * (-xm + Am) * fm.b + (3 * xm - 2 * Am) * hm.b, am.a = 6 * (xm - Am) * mm.a + (3 * xm - 4 * Am + 1) * Tm.a + 6 * (-xm + Am) * fm.a + (3 * xm - 2 * Am) * hm.a
      }
      static FromColor3(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Em(mm.r, mm.g, mm.b, Tm)
      }
      static FromArray(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Em(mm[Tm], mm[Tm + 1], mm[Tm + 2], mm[Tm + 3])
      }
      static FromArrayToRef(mm) {
        let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          fm = arguments.length > 2 ? arguments[2] : void 0;
        fm.r = mm[Tm], fm.g = mm[Tm + 1], fm.b = mm[Tm + 2], fm.a = mm[Tm + 3]
      }
      static FromInts(mm, Tm, fm, hm) {
        return new Em(mm / 255, Tm / 255, fm / 255, hm / 255)
      }
      static CheckColors4(mm, Tm) {
        if (mm.length === 3 * Tm) {
          const Tm = [];
          for (let fm = 0; fm < mm.length; fm += 3) {
            const hm = fm / 3 * 4;
            Tm[hm] = mm[fm], Tm[hm + 1] = mm[fm + 1], Tm[hm + 2] = mm[fm + 2], Tm[hm + 3] = 1
          }
          return Tm
        }
        return mm
      }
    }
    Em._V8PerformanceHack = new Em(.5, .5, .5, .5);
    class om {}
    om.Color3 = (0, hm.c)(3, pm.Black), om.Color4 = (0, hm.c)(3, (() => new Em(0, 0, 0, 0)));
    let Om = !1;

    function Ym() {
      Om || (Om = !0, Object.defineProperties(pm.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Em.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, xm.d)("BABYLON.Color3", pm), (0, xm.d)("BABYLON.Color4", Em))
    }
  },
  37191: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      f: () => hm,
      g: () => Am
    });
    const hm = 1 / 2.2,
      Am = 2.2;
    Math.sqrt(5);
    let am = .001
  },
  37208: (mm, Tm, fm) => {
    function hm(mm) {
      return parseInt(mm.toString().replace(/\W/g, ""))
    }

    function Am(mm, Tm) {
      let fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(mm - Tm) <= fm
    }

    function am(mm, Tm, fm) {
      let hm = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return mm < Tm - hm || mm > fm + hm
    }

    function xm(mm, Tm) {
      return mm === Tm ? mm : Math.random() * (Tm - mm) + mm
    }

    function wm(mm, Tm, fm) {
      return mm + (Tm - mm) * fm
    }

    function Dm(mm, Tm, fm) {
      let hm = qm(Tm - mm, 360);
      return hm > 180 && (hm -= 360), mm + hm * Em(fm)
    }

    function im(mm, Tm, fm) {
      let hm;
      return hm = mm != Tm ? Em((fm - mm) / (Tm - mm)) : 0, hm
    }

    function Rm(mm, Tm, fm, hm, Am) {
      const am = Am * Am,
        xm = Am * am;
      return mm * (2 * xm - 3 * am + 1) + fm * (-2 * xm + 3 * am) + Tm * (xm - 2 * am + Am) + hm * (xm - am)
    }

    function pm(mm, Tm, fm, hm, Am) {
      const am = Am * Am;
      return 6 * (am - Am) * mm + (3 * am - 4 * Am + 1) * Tm + 6 * (-am + Am) * fm + (3 * am - 2 * Am) * hm
    }

    function Em(mm) {
      let Tm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        fm = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(fm, Math.max(Tm, mm))
    }

    function om(mm) {
      return mm -= 2 * Math.PI * Math.floor((mm + Math.PI) / (2 * Math.PI))
    }

    function Om(mm) {
      const Tm = mm.toString(16);
      return mm <= 15 ? ("0" + Tm).toUpperCase() : Tm.toUpperCase()
    }

    function Ym(mm) {
      if (Math.log2) return Math.floor(Math.log2(mm));
      if (mm < 0) return NaN;
      if (0 === mm) return -1 / 0;
      let Tm = 0;
      if (mm < 1) {
        for (; mm < 1;) Tm++, mm *= 2;
        Tm = -Tm
      } else if (mm > 1)
        for (; mm > 1;) Tm++, mm = Math.floor(mm / 2);
      return Tm
    }

    function qm(mm, Tm) {
      return mm - Math.floor(mm / Tm) * Tm
    }

    function jm(mm, Tm, fm) {
      return (mm - Tm) / (fm - Tm)
    }

    function Vm(mm, Tm, fm) {
      return mm * (fm - Tm) + Tm
    }

    function Im(mm, Tm) {
      let fm = qm(Tm - mm, 360);
      return fm > 180 && (fm -= 360), fm
    }

    function Km(mm, Tm) {
      const fm = qm(mm, 2 * Tm);
      return Tm - Math.abs(fm - Tm)
    }

    function Qm(mm, Tm, fm) {
      let hm = Em(fm);
      return hm = -2 * hm * hm * hm + 3 * hm * hm, Tm * hm + mm * (1 - hm)
    }

    function nm(mm, Tm, fm) {
      let hm;
      return hm = Math.abs(Tm - mm) <= fm ? Tm : mm + Math.sign(Tm - mm) * fm, hm
    }

    function Jm(mm, Tm, fm) {
      const hm = Im(mm, Tm);
      let Am;
      return Am = -fm < hm && hm < fm ? Tm : nm(mm, Tm = mm + hm, fm), Am
    }

    function cm(mm, Tm, fm) {
      return (mm - Tm) / (fm - Tm)
    }

    function zm(mm, Tm, fm) {
      return (fm - Tm) * mm + Tm
    }

    function Zm(mm, Tm) {
      const fm = mm % Tm;
      return 0 === fm ? Tm : Zm(Tm, fm)
    }
    fm.r(Tm), fm.d(Tm, {
      Clamp: () => Em,
      DeltaAngle: () => Im,
      Denormalize: () => Vm,
      ExtractAsInt: () => hm,
      Hermite: () => Rm,
      Hermite1stDerivative: () => pm,
      HighestCommonFactor: () => Zm,
      ILog2: () => Ym,
      InverseLerp: () => im,
      Lerp: () => wm,
      LerpAngle: () => Dm,
      MoveTowards: () => nm,
      MoveTowardsAngle: () => Jm,
      Normalize: () => jm,
      NormalizeRadians: () => om,
      OutsideRange: () => am,
      PercentToRange: () => zm,
      PingPong: () => Km,
      RandomRange: () => xm,
      RangeToPercent: () => cm,
      Repeat: () => qm,
      SmoothStep: () => Qm,
      ToHex: () => Om,
      WithinEpsilon: () => Am
    })
  },
  37197: (mm, Tm, fm) => {
    function hm(mm, Tm) {
      const fm = [];
      for (let hm = 0; hm < mm; ++hm) fm.push(Tm());
      return fm
    }

    function Am(mm, Tm) {
      return hm(mm, Tm)
    }
    fm.d(Tm, {
      c: () => hm,
      d: () => Am,
      h: () => xm
    });
    const am = ["push", "splice", "pop", "shift", "unshift"];

    function xm(mm, Tm) {
      const fm = am.map((fm => function(mm, Tm, fm) {
        const hm = mm[Tm];
        if ("function" !== typeof hm) return null;
        const Am = function() {
          const hm = mm.length,
            am = Am.previous.apply(mm, arguments);
          return fm(Tm, hm), am
        };
        return hm.next = Am, Am.previous = hm, mm[Tm] = Am, () => {
          const fm = Am.previous;
          if (!fm) return;
          const hm = Am.next;
          hm ? (fm.next = hm, hm.previous = fm) : (fm.next = void 0, mm[Tm] = fm), Am.next = void 0, Am.previous = void 0
        }
      }(mm, fm, Tm)));
      return () => {
        for (const mm of fm) mm?.()
      }
    }
  },
  37224: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => am,
      d: () => Am
    });
    const hm = {};

    function Am(mm, Tm) {
      hm[mm] = Tm
    }

    function am(mm) {
      return hm[mm]
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);