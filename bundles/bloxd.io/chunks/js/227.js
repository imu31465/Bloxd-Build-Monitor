export const id = 227;
export const ids = [227];
export const modules = {
  37443: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => od,
      g: () => ld,
      k: () => Od,
      m: () => Qd
    });
    var pd = kd(37267),
      Nd = kd(37259),
      Wd = kd(37289),
      Pd = kd(37303);

    function Zd(dd) {
      return Math.pow(dd, Nd.h)
    }

    function gd(dd) {
      return dd <= .04045 ? .0773993808 * dd : Math.pow(.947867299 * (dd + .055), 2.4)
    }

    function Cd(dd) {
      return Math.pow(dd, Nd.f)
    }

    function Kd(dd) {
      return dd <= .0031308 ? 12.92 * dd : 1.055 * Math.pow(dd, .41666) - .055
    }
    class od {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = dd, this.g = Jd, this.b = kd
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let dd = 255 * this.r | 0;
        return dd = 397 * dd ^ 255 * this.g, dd = 397 * dd ^ 255 * this.b, dd
      }
      toArray(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return dd[Jd] = this.r, dd[Jd + 1] = this.g, dd[Jd + 2] = this.b, this
      }
      lkd(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return od.FromArrayToRef(dd, Jd, this), this
      }
      toColor4() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new ld(this.r, this.g, this.b, dd)
      }
      spd() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(dd) {
        return new od(this.r * dd.r, this.g * dd.g, this.b * dd.b)
      }
      multiplyToRef(dd, Jd) {
        return Jd.r = this.r * dd.r, Jd.g = this.g * dd.g, Jd.b = this.b * dd.b, Jd
      }
      multiplyInPlace(dd) {
        return this.r *= dd.r, this.g *= dd.g, this.b *= dd.b, this
      }
      multiplyByFloats(dd, Jd, kd) {
        return new od(this.r * dd, this.g * Jd, this.b * kd)
      }
      divide(dd) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(dd, Jd) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(dd) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(dd) {
        return this.minimizeInPlaceFromFloats(dd.r, dd.g, dd.b)
      }
      maximizeInPlace(dd) {
        return this.maximizeInPlaceFromFloats(dd.r, dd.g, dd.b)
      }
      minimizeInPlaceFromFloats(dd, Jd, kd) {
        return this.r = Math.min(dd, this.r), this.g = Math.min(Jd, this.g), this.b = Math.min(kd, this.b), this
      }
      maximizeInPlaceFromFloats(dd, Jd, kd) {
        return this.r = Math.max(dd, this.r), this.g = Math.max(Jd, this.g), this.b = Math.max(kd, this.b), this
      }
      floorToRef(dd) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(dd) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(dd) {
        return dd && this.r === dd.r && this.g === dd.g && this.b === dd.b
      }
      equalsFloats(dd, Jd, kd) {
        return this.zPd(dd, Jd, kd)
      }
      zPd(dd, Jd, kd) {
        return this.r === dd && this.g === Jd && this.b === kd
      }
      equalsWithEpsilon(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Nd.e;
        return (0, Wd.WithinEpsilon)(this.r, dd.r, Jd) && (0, Wd.WithinEpsilon)(this.g, dd.g, Jd) && (0, Wd.WithinEpsilon)(this.b, dd.b, Jd)
      }
      ck() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(dd) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(dd) {
        return new od(this.r * dd, this.g * dd, this.b * dd)
      }
      scaleInPlace(dd) {
        return this.r *= dd, this.g *= dd, this.b *= dd, this
      }
      scaleToRef(dd, Jd) {
        return Jd.r = this.r * dd, Jd.g = this.g * dd, Jd.b = this.b * dd, Jd
      }
      scaleAndAddToRef(dd, Jd) {
        return Jd.r += this.r * dd, Jd.g += this.g * dd, Jd.b += this.b * dd, Jd
      }
      clampToRef() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        return kd.r = (0, Wd.Clamp)(this.r, dd, Jd), kd.g = (0, Wd.Clamp)(this.g, dd, Jd), kd.b = (0, Wd.Clamp)(this.b, dd, Jd), kd
      }
      add(dd) {
        return new od(this.r + dd.r, this.g + dd.g, this.b + dd.b)
      }
      addInPlace(dd) {
        return this.r += dd.r, this.g += dd.g, this.b += dd.b, this
      }
      addInPlaceFromFloats(dd, Jd, kd) {
        return this.r += dd, this.g += Jd, this.b += kd, this
      }
      addToRef(dd, Jd) {
        return Jd.r = this.r + dd.r, Jd.g = this.g + dd.g, Jd.b = this.b + dd.b, Jd
      }
      subtract(dd) {
        return new od(this.r - dd.r, this.g - dd.g, this.b - dd.b)
      }
      subtractToRef(dd, Jd) {
        return Jd.r = this.r - dd.r, Jd.g = this.g - dd.g, Jd.b = this.b - dd.b, Jd
      }
      hpd(dd) {
        return this.r -= dd.r, this.g -= dd.g, this.b -= dd.b, this
      }
      subtractFromFloats(dd, Jd, kd) {
        return new od(this.r - dd, this.g - Jd, this.b - kd)
      }
      subtractFromFloatsToRef(dd, Jd, kd, pd) {
        return pd.r = this.r - dd, pd.g = this.g - Jd, pd.b = this.b - kd, pd
      }
      clone() {
        return new od(this.r, this.g, this.b)
      }
      Fs(dd) {
        return this.r = dd.r, this.g = dd.g, this.b = dd.b, this
      }
      kdd(dd, Jd, kd) {
        return this.r = dd, this.g = Jd, this.b = kd, this
      }
      set(dd, Jd, kd) {
        return this.kdd(dd, Jd, kd)
      }
      o5(dd) {
        return this.r = this.g = this.b = dd, this
      }
      toHexString() {
        const dd = Math.round(255 * this.r),
          Jd = Math.round(255 * this.g),
          kd = Math.round(255 * this.b);
        return "#" + (0, Wd.ToHex)(dd) + (0, Wd.ToHex)(Jd) + (0, Wd.ToHex)(kd)
      }
      fromHexString(dd) {
        return "#" !== dd.substring(0, 1) || 7 !== dd.length || (this.r = parseInt(dd.substring(1, 3), 16) / 255, this.g = parseInt(dd.substring(3, 5), 16) / 255, this.b = parseInt(dd.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new od)
      }
      toHSVToRef(dd) {
        const Jd = this.r,
          kd = this.g,
          pd = this.b,
          Nd = Math.max(Jd, kd, pd),
          Wd = Math.min(Jd, kd, pd);
        let Pd = 0,
          Zd = 0;
        const gd = Nd,
          Cd = Nd - Wd;
        return 0 !== Nd && (Zd = Cd / Nd), Nd != Wd && (Nd == Jd ? (Pd = (kd - pd) / Cd, kd < pd && (Pd += 6)) : Nd == kd ? Pd = (pd - Jd) / Cd + 2 : Nd == pd && (Pd = (Jd - kd) / Cd + 4), Pd *= 60), dd.r = Pd, dd.g = Zd, dd.b = gd, dd
      }
      toLinearSpace() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Jd = new od;
        return this.toLinearSpaceToRef(Jd, dd), Jd
      }
      toLinearSpaceToRef(dd) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (dd.r = gd(this.r), dd.g = gd(this.g), dd.b = gd(this.b)) : (dd.r = Zd(this.r), dd.g = Zd(this.g), dd.b = Zd(this.b)), this
      }
      toGammaSpace() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Jd = new od;
        return this.toGammaSpaceToRef(Jd, dd), Jd
      }
      toGammaSpaceToRef(dd) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (dd.r = Kd(this.r), dd.g = Kd(this.g), dd.b = Kd(this.b)) : (dd.r = Cd(this.r), dd.g = Cd(this.g), dd.b = Cd(this.b)), this
      }
      static HSVtoRGBToRef(dd, Jd, kd, pd) {
        const Nd = kd * Jd,
          Wd = dd / 60,
          Pd = Nd * (1 - Math.abs(Wd % 2 - 1));
        let Zd = 0,
          gd = 0,
          Cd = 0;
        Wd >= 0 && Wd <= 1 ? (Zd = Nd, gd = Pd) : Wd >= 1 && Wd <= 2 ? (Zd = Pd, gd = Nd) : Wd >= 2 && Wd <= 3 ? (gd = Nd, Cd = Pd) : Wd >= 3 && Wd <= 4 ? (gd = Pd, Cd = Nd) : Wd >= 4 && Wd <= 5 ? (Zd = Pd, Cd = Nd) : Wd >= 5 && Wd <= 6 && (Zd = Nd, Cd = Pd);
        const Kd = kd - Nd;
        return pd.r = Zd + Kd, pd.g = gd + Kd, pd.b = Cd + Kd, pd
      }
      static FromHSV(dd, Jd, kd) {
        const pd = new od(0, 0, 0);
        return od.HSVtoRGBToRef(dd, Jd, kd, pd), pd
      }
      static FromHexString(dd) {
        return new od(0, 0, 0).fromHexString(dd)
      }
      static FromArray(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new od(dd[Jd], dd[Jd + 1], dd[Jd + 2])
      }
      static FromArrayToRef(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        kd.r = dd[Jd], kd.g = dd[Jd + 1], kd.b = dd[Jd + 2]
      }
      static FromInts(dd, Jd, kd) {
        return new od(dd / 255, Jd / 255, kd / 255)
      }
      static Lerp(dd, Jd, kd) {
        const pd = new od(0, 0, 0);
        return od.LerpToRef(dd, Jd, kd, pd), pd
      }
      static LerpToRef(dd, Jd, kd, pd) {
        pd.r = dd.r + (Jd.r - dd.r) * kd, pd.g = dd.g + (Jd.g - dd.g) * kd, pd.b = dd.b + (Jd.b - dd.b) * kd
      }
      static Hermite(dd, Jd, kd, pd, Nd) {
        const Wd = Nd * Nd,
          Pd = Nd * Wd,
          Zd = 2 * Pd - 3 * Wd + 1,
          gd = -2 * Pd + 3 * Wd,
          Cd = Pd - 2 * Wd + Nd,
          Kd = Pd - Wd,
          ld = dd.r * Zd + kd.r * gd + Jd.r * Cd + pd.r * Kd,
          Qd = dd.g * Zd + kd.g * gd + Jd.g * Cd + pd.g * Kd,
          Ld = dd.b * Zd + kd.b * gd + Jd.b * Cd + pd.b * Kd;
        return new od(ld, Qd, Ld)
      }
      static Hermite1stDerivative(dd, Jd, kd, pd, Nd) {
        const Wd = od.Black();
        return this.Hermite1stDerivativeToRef(dd, Jd, kd, pd, Nd, Wd), Wd
      }
      static Hermite1stDerivativeToRef(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = Nd * Nd;
        Wd.r = 6 * (Pd - Nd) * dd.r + (3 * Pd - 4 * Nd + 1) * Jd.r + 6 * (-Pd + Nd) * kd.r + (3 * Pd - 2 * Nd) * pd.r, Wd.g = 6 * (Pd - Nd) * dd.g + (3 * Pd - 4 * Nd + 1) * Jd.g + 6 * (-Pd + Nd) * kd.g + (3 * Pd - 2 * Nd) * pd.g, Wd.b = 6 * (Pd - Nd) * dd.b + (3 * Pd - 4 * Nd + 1) * Jd.b + 6 * (-Pd + Nd) * kd.b + (3 * Pd - 2 * Nd) * pd.b
      }
      static Red() {
        return new od(1, 0, 0)
      }
      static Green() {
        return new od(0, 1, 0)
      }
      static Blue() {
        return new od(0, 0, 1)
      }
      static Black() {
        return new od(0, 0, 0)
      }
      static get BlackReadOnly() {
        return od._BlackReadOnly
      }
      static White() {
        return new od(1, 1, 1)
      }
      static Purple() {
        return new od(.5, 0, .5)
      }
      static Magenta() {
        return new od(1, 0, 1)
      }
      static Yellow() {
        return new od(1, 1, 0)
      }
      static Gray() {
        return new od(.5, .5, .5)
      }
      static Teal() {
        return new od(0, 1, 1)
      }
      static Random() {
        return new od(Math.random(), Math.random(), Math.random())
      }
    }
    od._V8PerformanceHack = new od(.5, .5, .5), od._BlackReadOnly = od.Black();
    class ld {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = dd, this.g = Jd, this.b = kd, this.a = pd
      }
      spd() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return dd[Jd] = this.r, dd[Jd + 1] = this.g, dd[Jd + 2] = this.b, dd[Jd + 3] = this.a, this
      }
      lkd(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = dd[Jd], this.g = dd[Jd + 1], this.b = dd[Jd + 2], this.a = dd[Jd + 3], this
      }
      equals(dd) {
        return dd && this.r === dd.r && this.g === dd.g && this.b === dd.b && this.a === dd.a
      }
      add(dd) {
        return new ld(this.r + dd.r, this.g + dd.g, this.b + dd.b, this.a + dd.a)
      }
      addToRef(dd, Jd) {
        return Jd.r = this.r + dd.r, Jd.g = this.g + dd.g, Jd.b = this.b + dd.b, Jd.a = this.a + dd.a, Jd
      }
      addInPlace(dd) {
        return this.r += dd.r, this.g += dd.g, this.b += dd.b, this.a += dd.a, this
      }
      addInPlaceFromFloats(dd, Jd, kd, pd) {
        return this.r += dd, this.g += Jd, this.b += kd, this.a += pd, this
      }
      subtract(dd) {
        return new ld(this.r - dd.r, this.g - dd.g, this.b - dd.b, this.a - dd.a)
      }
      subtractToRef(dd, Jd) {
        return Jd.r = this.r - dd.r, Jd.g = this.g - dd.g, Jd.b = this.b - dd.b, Jd.a = this.a - dd.a, Jd
      }
      hpd(dd) {
        return this.r -= dd.r, this.g -= dd.g, this.b -= dd.b, this.a -= dd.a, this
      }
      subtractFromFloats(dd, Jd, kd, pd) {
        return new ld(this.r - dd, this.g - Jd, this.b - kd, this.a - pd)
      }
      subtractFromFloatsToRef(dd, Jd, kd, pd, Nd) {
        return Nd.r = this.r - dd, Nd.g = this.g - Jd, Nd.b = this.b - kd, Nd.a = this.a - pd, Nd
      }
      scale(dd) {
        return new ld(this.r * dd, this.g * dd, this.b * dd, this.a * dd)
      }
      scaleInPlace(dd) {
        return this.r *= dd, this.g *= dd, this.b *= dd, this.a *= dd, this
      }
      scaleToRef(dd, Jd) {
        return Jd.r = this.r * dd, Jd.g = this.g * dd, Jd.b = this.b * dd, Jd.a = this.a * dd, Jd
      }
      scaleAndAddToRef(dd, Jd) {
        return Jd.r += this.r * dd, Jd.g += this.g * dd, Jd.b += this.b * dd, Jd.a += this.a * dd, Jd
      }
      clampToRef() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        return kd.r = (0, Wd.Clamp)(this.r, dd, Jd), kd.g = (0, Wd.Clamp)(this.g, dd, Jd), kd.b = (0, Wd.Clamp)(this.b, dd, Jd), kd.a = (0, Wd.Clamp)(this.a, dd, Jd), kd
      }
      multiply(dd) {
        return new ld(this.r * dd.r, this.g * dd.g, this.b * dd.b, this.a * dd.a)
      }
      multiplyToRef(dd, Jd) {
        return Jd.r = this.r * dd.r, Jd.g = this.g * dd.g, Jd.b = this.b * dd.b, Jd.a = this.a * dd.a, Jd
      }
      multiplyInPlace(dd) {
        return this.r *= dd.r, this.g *= dd.g, this.b *= dd.b, this.a *= dd.a, this
      }
      multiplyByFloats(dd, Jd, kd, pd) {
        return new ld(this.r * dd, this.g * Jd, this.b * kd, this.a * pd)
      }
      divide(dd) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(dd, Jd) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(dd) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(dd) {
        return this.r = Math.min(this.r, dd.r), this.g = Math.min(this.g, dd.g), this.b = Math.min(this.b, dd.b), this.a = Math.min(this.a, dd.a), this
      }
      maximizeInPlace(dd) {
        return this.r = Math.max(this.r, dd.r), this.g = Math.max(this.g, dd.g), this.b = Math.max(this.b, dd.b), this.a = Math.max(this.a, dd.a), this
      }
      minimizeInPlaceFromFloats(dd, Jd, kd, pd) {
        return this.r = Math.min(dd, this.r), this.g = Math.min(Jd, this.g), this.b = Math.min(kd, this.b), this.a = Math.min(pd, this.a), this
      }
      maximizeInPlaceFromFloats(dd, Jd, kd, pd) {
        return this.r = Math.max(dd, this.r), this.g = Math.max(Jd, this.g), this.b = Math.max(kd, this.b), this.a = Math.max(pd, this.a), this
      }
      floorToRef(dd) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(dd) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      ck() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(dd) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Nd.e;
        return (0, Wd.WithinEpsilon)(this.r, dd.r, Jd) && (0, Wd.WithinEpsilon)(this.g, dd.g, Jd) && (0, Wd.WithinEpsilon)(this.b, dd.b, Jd) && (0, Wd.WithinEpsilon)(this.a, dd.a, Jd)
      }
      zPd(dd, Jd, kd, pd) {
        return this.r === dd && this.g === Jd && this.b === kd && this.a === pd
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let dd = 255 * this.r | 0;
        return dd = 397 * dd ^ 255 * this.g, dd = 397 * dd ^ 255 * this.b, dd = 397 * dd ^ 255 * this.a, dd
      }
      clone() {
        return (new ld).Fs(this)
      }
      Fs(dd) {
        return this.r = dd.r, this.g = dd.g, this.b = dd.b, this.a = dd.a, this
      }
      kdd(dd, Jd, kd, pd) {
        return this.r = dd, this.g = Jd, this.b = kd, this.a = pd, this
      }
      set(dd, Jd, kd, pd) {
        return this.kdd(dd, Jd, kd, pd)
      }
      o5(dd) {
        return this.r = this.g = this.b = this.a = dd, this
      }
      toHexString() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Jd = Math.round(255 * this.r),
          kd = Math.round(255 * this.g),
          pd = Math.round(255 * this.b);
        if (dd) return "#" + (0, Wd.ToHex)(Jd) + (0, Wd.ToHex)(kd) + (0, Wd.ToHex)(pd);
        const Nd = Math.round(255 * this.a);
        return "#" + (0, Wd.ToHex)(Jd) + (0, Wd.ToHex)(kd) + (0, Wd.ToHex)(pd) + (0, Wd.ToHex)(Nd)
      }
      fromHexString(dd) {
        return "#" !== dd.substring(0, 1) || 9 !== dd.length && 7 !== dd.length || (this.r = parseInt(dd.substring(1, 3), 16) / 255, this.g = parseInt(dd.substring(3, 5), 16) / 255, this.b = parseInt(dd.substring(5, 7), 16) / 255, 9 === dd.length && (this.a = parseInt(dd.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Jd = new ld;
        return this.toLinearSpaceToRef(Jd, dd), Jd
      }
      toLinearSpaceToRef(dd) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (dd.r = gd(this.r), dd.g = gd(this.g), dd.b = gd(this.b)) : (dd.r = Zd(this.r), dd.g = Zd(this.g), dd.b = Zd(this.b)), dd.a = this.a, this
      }
      toGammaSpace() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Jd = new ld;
        return this.toGammaSpaceToRef(Jd, dd), Jd
      }
      toGammaSpaceToRef(dd) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (dd.r = Kd(this.r), dd.g = Kd(this.g), dd.b = Kd(this.b)) : (dd.r = Cd(this.r), dd.g = Cd(this.g), dd.b = Cd(this.b)), dd.a = this.a, this
      }
      static FromHexString(dd) {
        return "#" !== dd.substring(0, 1) || 9 !== dd.length && 7 !== dd.length ? new ld(0, 0, 0, 0) : new ld(0, 0, 0, 1).fromHexString(dd)
      }
      static Lerp(dd, Jd, kd) {
        return ld.LerpToRef(dd, Jd, kd, new ld)
      }
      static LerpToRef(dd, Jd, kd, pd) {
        return pd.r = dd.r + (Jd.r - dd.r) * kd, pd.g = dd.g + (Jd.g - dd.g) * kd, pd.b = dd.b + (Jd.b - dd.b) * kd, pd.a = dd.a + (Jd.a - dd.a) * kd, pd
      }
      static Hermite(dd, Jd, kd, pd, Nd) {
        const Wd = Nd * Nd,
          Pd = Nd * Wd,
          Zd = 2 * Pd - 3 * Wd + 1,
          gd = -2 * Pd + 3 * Wd,
          Cd = Pd - 2 * Wd + Nd,
          Kd = Pd - Wd,
          od = dd.r * Zd + kd.r * gd + Jd.r * Cd + pd.r * Kd,
          Qd = dd.g * Zd + kd.g * gd + Jd.g * Cd + pd.g * Kd,
          Ld = dd.b * Zd + kd.b * gd + Jd.b * Cd + pd.b * Kd,
          Od = dd.a * Zd + kd.a * gd + Jd.a * Cd + pd.a * Kd;
        return new ld(od, Qd, Ld, Od)
      }
      static Hermite1stDerivative(dd, Jd, kd, pd, Nd) {
        const Wd = new ld;
        return this.Hermite1stDerivativeToRef(dd, Jd, kd, pd, Nd, Wd), Wd
      }
      static Hermite1stDerivativeToRef(dd, Jd, kd, pd, Nd, Wd) {
        const Pd = Nd * Nd;
        Wd.r = 6 * (Pd - Nd) * dd.r + (3 * Pd - 4 * Nd + 1) * Jd.r + 6 * (-Pd + Nd) * kd.r + (3 * Pd - 2 * Nd) * pd.r, Wd.g = 6 * (Pd - Nd) * dd.g + (3 * Pd - 4 * Nd + 1) * Jd.g + 6 * (-Pd + Nd) * kd.g + (3 * Pd - 2 * Nd) * pd.g, Wd.b = 6 * (Pd - Nd) * dd.b + (3 * Pd - 4 * Nd + 1) * Jd.b + 6 * (-Pd + Nd) * kd.b + (3 * Pd - 2 * Nd) * pd.b, Wd.a = 6 * (Pd - Nd) * dd.a + (3 * Pd - 4 * Nd + 1) * Jd.a + 6 * (-Pd + Nd) * kd.a + (3 * Pd - 2 * Nd) * pd.a
      }
      static FromColor3(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new ld(dd.r, dd.g, dd.b, Jd)
      }
      static FromArray(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new ld(dd[Jd], dd[Jd + 1], dd[Jd + 2], dd[Jd + 3])
      }
      static FromArrayToRef(dd) {
        let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          kd = arguments.length > 2 ? arguments[2] : void 0;
        kd.r = dd[Jd], kd.g = dd[Jd + 1], kd.b = dd[Jd + 2], kd.a = dd[Jd + 3]
      }
      static FromInts(dd, Jd, kd, pd) {
        return new ld(dd / 255, Jd / 255, kd / 255, pd / 255)
      }
      static CheckColors4(dd, Jd) {
        if (dd.length === 3 * Jd) {
          const Jd = [];
          for (let kd = 0; kd < dd.length; kd += 3) {
            const pd = kd / 3 * 4;
            Jd[pd] = dd[kd], Jd[pd + 1] = dd[kd + 1], Jd[pd + 2] = dd[kd + 2], Jd[pd + 3] = 1
          }
          return Jd
        }
        return dd
      }
    }
    ld._V8PerformanceHack = new ld(.5, .5, .5, .5);
    class Qd {}
    Qd.Color3 = (0, pd.b)(3, od.Black), Qd.Color4 = (0, pd.b)(3, (() => new ld(0, 0, 0, 0)));
    let Ld = !1;

    function Od() {
      Ld || (Ld = !0, Object.defineProperties(od.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(ld.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, Pd.h)("BABYLON.Color3", od), (0, Pd.h)("BABYLON.Color4", ld))
    }
  },
  37259: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      f: () => pd,
      h: () => Nd
    });
    const pd = 1 / 2.2,
      Nd = 2.2;
    Math.sqrt(5);
    let Wd = .001
  },
  37289: (dd, Jd, kd) => {
    function pd(dd) {
      return parseInt(dd.toString().replace(/\W/g, ""))
    }

    function Nd(dd, Jd) {
      let kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(dd - Jd) <= kd
    }

    function Wd(dd, Jd, kd) {
      let pd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return dd < Jd - pd || dd > kd + pd
    }

    function Pd(dd, Jd) {
      return dd === Jd ? dd : Math.random() * (Jd - dd) + dd
    }

    function Zd(dd, Jd, kd) {
      return dd + (Jd - dd) * kd
    }

    function gd(dd, Jd, kd) {
      let pd = ed(Jd - dd, 360);
      return pd > 180 && (pd -= 360), dd + pd * ld(kd)
    }

    function Cd(dd, Jd, kd) {
      let pd;
      return pd = dd != Jd ? ld((kd - dd) / (Jd - dd)) : 0, pd
    }

    function Kd(dd, Jd, kd, pd, Nd) {
      const Wd = Nd * Nd,
        Pd = Nd * Wd;
      return dd * (2 * Pd - 3 * Wd + 1) + kd * (-2 * Pd + 3 * Wd) + Jd * (Pd - 2 * Wd + Nd) + pd * (Pd - Wd)
    }

    function od(dd, Jd, kd, pd, Nd) {
      const Wd = Nd * Nd;
      return 6 * (Wd - Nd) * dd + (3 * Wd - 4 * Nd + 1) * Jd + 6 * (-Wd + Nd) * kd + (3 * Wd - 2 * Nd) * pd
    }

    function ld(dd) {
      let Jd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        kd = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(kd, Math.max(Jd, dd))
    }

    function Qd(dd) {
      return dd -= 2 * Math.PI * Math.floor((dd + Math.PI) / (2 * Math.PI))
    }

    function Ld(dd) {
      const Jd = dd.toString(16);
      return dd <= 15 ? ("0" + Jd).toUpperCase() : Jd.toUpperCase()
    }

    function Od(dd) {
      if (Math.log2) return Math.floor(Math.log2(dd));
      if (dd < 0) return NaN;
      if (0 === dd) return -1 / 0;
      let Jd = 0;
      if (dd < 1) {
        for (; dd < 1;) Jd++, dd *= 2;
        Jd = -Jd
      } else if (dd > 1)
        for (; dd > 1;) Jd++, dd = Math.floor(dd / 2);
      return Jd
    }

    function ed(dd, Jd) {
      return dd - Math.floor(dd / Jd) * Jd
    }

    function Rd(dd, Jd, kd) {
      return (dd - Jd) / (kd - Jd)
    }

    function Id(dd, Jd, kd) {
      return dd * (kd - Jd) + Jd
    }

    function Gd(dd, Jd) {
      let kd = ed(Jd - dd, 360);
      return kd > 180 && (kd -= 360), kd
    }

    function vd(dd, Jd) {
      const kd = ed(dd, 2 * Jd);
      return Jd - Math.abs(kd - Jd)
    }

    function xd(dd, Jd, kd) {
      let pd = ld(kd);
      return pd = -2 * pd * pd * pd + 3 * pd * pd, Jd * pd + dd * (1 - pd)
    }

    function qd(dd, Jd, kd) {
      let pd;
      return pd = Math.abs(Jd - dd) <= kd ? Jd : dd + Math.sign(Jd - dd) * kd, pd
    }

    function Bd(dd, Jd, kd) {
      const pd = Gd(dd, Jd);
      let Nd;
      return Nd = -kd < pd && pd < kd ? Jd : qd(dd, Jd = dd + pd, kd), Nd
    }

    function sd(dd, Jd, kd) {
      return (dd - Jd) / (kd - Jd)
    }

    function ad(dd, Jd, kd) {
      return (kd - Jd) * dd + Jd
    }

    function Md(dd, Jd) {
      const kd = dd % Jd;
      return 0 === kd ? Jd : Md(Jd, kd)
    }
    kd.r(Jd), kd.d(Jd, {
      Clamp: () => ld,
      DeltaAngle: () => Gd,
      Denormalize: () => Id,
      ExtractAsInt: () => pd,
      Hermite: () => Kd,
      Hermite1stDerivative: () => od,
      HighestCommonFactor: () => Md,
      ILog2: () => Od,
      InverseLerp: () => Cd,
      Lerp: () => Zd,
      LerpAngle: () => gd,
      MoveTowards: () => qd,
      MoveTowardsAngle: () => Bd,
      Normalize: () => Rd,
      NormalizeRadians: () => Qd,
      OutsideRange: () => Wd,
      PercentToRange: () => ad,
      PingPong: () => vd,
      RandomRange: () => Pd,
      RangeToPercent: () => sd,
      Repeat: () => ed,
      SmoothStep: () => xd,
      ToHex: () => Ld,
      WithinEpsilon: () => Nd
    })
  },
  37267: (dd, Jd, kd) => {
    function pd(dd, Jd) {
      const kd = [];
      for (let pd = 0; pd < dd; ++pd) kd.push(Jd());
      return kd
    }

    function Nd(dd, Jd) {
      return pd(dd, Jd)
    }
    kd.d(Jd, {
      b: () => pd,
      f: () => Nd,
      h: () => Pd
    });
    const Wd = ["push", "splice", "pop", "shift", "unshift"];

    function Pd(dd, Jd) {
      const kd = Wd.map((kd => function(dd, Jd, kd) {
        const pd = dd[Jd];
        if ("function" !== typeof pd) return null;
        const Nd = function() {
          const pd = dd.length,
            Wd = Nd.previous.apply(dd, arguments);
          return kd(Jd, pd), Wd
        };
        return pd.next = Nd, Nd.previous = pd, dd[Jd] = Nd, () => {
          const kd = Nd.previous;
          if (!kd) return;
          const pd = Nd.next;
          pd ? (kd.next = pd, pd.previous = kd) : (kd.next = void 0, dd[Jd] = kd), Nd.next = void 0, Nd.previous = void 0
        }
      }(dd, kd, Jd)));
      return () => {
        for (const dd of kd) dd?.()
      }
    }
  },
  37303: (dd, Jd, kd) => {
    kd.d(Jd, {
      e: () => Wd,
      h: () => Nd
    });
    const pd = {};

    function Nd(dd, Jd) {
      pd[dd] = Jd
    }

    function Wd(dd) {
      return pd[dd]
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);