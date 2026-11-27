export const id = 265;
export const ids = [265];
export const modules = {
  38684: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => xr,
      f: () => mr,
      h: () => tr,
      l: () => Nr
    });
    var Zr = Qr(38576),
      Wr = Qr(38569),
      ar = Qr(38599),
      jr = Qr(38609);

    function Ir(rr) {
      return Math.pow(rr, Wr.h)
    }

    function fr(rr) {
      return rr <= .04045 ? .0773993808 * rr : Math.pow(.947867299 * (rr + .055), 2.4)
    }

    function Er(rr) {
      return Math.pow(rr, Wr.f)
    }

    function pr(rr) {
      return rr <= .0031308 ? 12.92 * rr : 1.055 * Math.pow(rr, .41666) - .055
    }
    class xr {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = rr, this.g = Sr, this.b = Qr
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let rr = 255 * this.r | 0;
        return rr = 397 * rr ^ 255 * this.g, rr = 397 * rr ^ 255 * this.b, rr
      }
      toArray(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return rr[Sr] = this.r, rr[Sr + 1] = this.g, rr[Sr + 2] = this.b, this
      }
      dp(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return xr.FromArrayToRef(rr, Sr, this), this
      }
      toColor4() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new mr(this.r, this.g, this.b, rr)
      }
      OWr() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(rr) {
        return new xr(this.r * rr.r, this.g * rr.g, this.b * rr.b)
      }
      multiplyToRef(rr, Sr) {
        return Sr.r = this.r * rr.r, Sr.g = this.g * rr.g, Sr.b = this.b * rr.b, Sr
      }
      multiplyInPlace(rr) {
        return this.r *= rr.r, this.g *= rr.g, this.b *= rr.b, this
      }
      multiplyByFloats(rr, Sr, Qr) {
        return new xr(this.r * rr, this.g * Sr, this.b * Qr)
      }
      divide(rr) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(rr, Sr) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(rr) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(rr) {
        return this.minimizeInPlaceFromFloats(rr.r, rr.g, rr.b)
      }
      maximizeInPlace(rr) {
        return this.maximizeInPlaceFromFloats(rr.r, rr.g, rr.b)
      }
      minimizeInPlaceFromFloats(rr, Sr, Qr) {
        return this.r = Math.min(rr, this.r), this.g = Math.min(Sr, this.g), this.b = Math.min(Qr, this.b), this
      }
      maximizeInPlaceFromFloats(rr, Sr, Qr) {
        return this.r = Math.max(rr, this.r), this.g = Math.max(Sr, this.g), this.b = Math.max(Qr, this.b), this
      }
      floorToRef(rr) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(rr) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(rr) {
        return rr && this.r === rr.r && this.g === rr.g && this.b === rr.b
      }
      equalsFloats(rr, Sr, Qr) {
        return this.ffr(rr, Sr, Qr)
      }
      ffr(rr, Sr, Qr) {
        return this.r === rr && this.g === Sr && this.b === Qr
      }
      equalsWithEpsilon(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wr.e;
        return (0, ar.WithinEpsilon)(this.r, rr.r, Sr) && (0, ar.WithinEpsilon)(this.g, rr.g, Sr) && (0, ar.WithinEpsilon)(this.b, rr.b, Sr)
      }
      ph() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(rr) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(rr) {
        return new xr(this.r * rr, this.g * rr, this.b * rr)
      }
      scaleInPlace(rr) {
        return this.r *= rr, this.g *= rr, this.b *= rr, this
      }
      scaleToRef(rr, Sr) {
        return Sr.r = this.r * rr, Sr.g = this.g * rr, Sr.b = this.b * rr, Sr
      }
      scaleAndAddToRef(rr, Sr) {
        return Sr.r += this.r * rr, Sr.g += this.g * rr, Sr.b += this.b * rr, Sr
      }
      clampToRef() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        return Qr.r = (0, ar.Clamp)(this.r, rr, Sr), Qr.g = (0, ar.Clamp)(this.g, rr, Sr), Qr.b = (0, ar.Clamp)(this.b, rr, Sr), Qr
      }
      add(rr) {
        return new xr(this.r + rr.r, this.g + rr.g, this.b + rr.b)
      }
      addInPlace(rr) {
        return this.r += rr.r, this.g += rr.g, this.b += rr.b, this
      }
      addInPlaceFromFloats(rr, Sr, Qr) {
        return this.r += rr, this.g += Sr, this.b += Qr, this
      }
      addToRef(rr, Sr) {
        return Sr.r = this.r + rr.r, Sr.g = this.g + rr.g, Sr.b = this.b + rr.b, Sr
      }
      subtract(rr) {
        return new xr(this.r - rr.r, this.g - rr.g, this.b - rr.b)
      }
      subtractToRef(rr, Sr) {
        return Sr.r = this.r - rr.r, Sr.g = this.g - rr.g, Sr.b = this.b - rr.b, Sr
      }
      iWr(rr) {
        return this.r -= rr.r, this.g -= rr.g, this.b -= rr.b, this
      }
      subtractFromFloats(rr, Sr, Qr) {
        return new xr(this.r - rr, this.g - Sr, this.b - Qr)
      }
      subtractFromFloatsToRef(rr, Sr, Qr, Zr) {
        return Zr.r = this.r - rr, Zr.g = this.g - Sr, Zr.b = this.b - Qr, Zr
      }
      clone() {
        return new xr(this.r, this.g, this.b)
      }
      iH(rr) {
        return this.r = rr.r, this.g = rr.g, this.b = rr.b, this
      }
      Hrr(rr, Sr, Qr) {
        return this.r = rr, this.g = Sr, this.b = Qr, this
      }
      set(rr, Sr, Qr) {
        return this.Hrr(rr, Sr, Qr)
      }
      Srr(rr) {
        return this.r = this.g = this.b = rr, this
      }
      toHexString() {
        const rr = Math.round(255 * this.r),
          Sr = Math.round(255 * this.g),
          Qr = Math.round(255 * this.b);
        return "#" + (0, ar.ToHex)(rr) + (0, ar.ToHex)(Sr) + (0, ar.ToHex)(Qr)
      }
      fromHexString(rr) {
        return "#" !== rr.substring(0, 1) || 7 !== rr.length || (this.r = parseInt(rr.substring(1, 3), 16) / 255, this.g = parseInt(rr.substring(3, 5), 16) / 255, this.b = parseInt(rr.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new xr)
      }
      toHSVToRef(rr) {
        const Sr = this.r,
          Qr = this.g,
          Zr = this.b,
          Wr = Math.max(Sr, Qr, Zr),
          ar = Math.min(Sr, Qr, Zr);
        let jr = 0,
          Ir = 0;
        const fr = Wr,
          Er = Wr - ar;
        return 0 !== Wr && (Ir = Er / Wr), Wr != ar && (Wr == Sr ? (jr = (Qr - Zr) / Er, Qr < Zr && (jr += 6)) : Wr == Qr ? jr = (Zr - Sr) / Er + 2 : Wr == Zr && (jr = (Sr - Qr) / Er + 4), jr *= 60), rr.r = jr, rr.g = Ir, rr.b = fr, rr
      }
      toLinearSpace() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Sr = new xr;
        return this.toLinearSpaceToRef(Sr, rr), Sr
      }
      toLinearSpaceToRef(rr) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (rr.r = fr(this.r), rr.g = fr(this.g), rr.b = fr(this.b)) : (rr.r = Ir(this.r), rr.g = Ir(this.g), rr.b = Ir(this.b)), this
      }
      toGammaSpace() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Sr = new xr;
        return this.toGammaSpaceToRef(Sr, rr), Sr
      }
      toGammaSpaceToRef(rr) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (rr.r = pr(this.r), rr.g = pr(this.g), rr.b = pr(this.b)) : (rr.r = Er(this.r), rr.g = Er(this.g), rr.b = Er(this.b)), this
      }
      static HSVtoRGBToRef(rr, Sr, Qr, Zr) {
        const Wr = Qr * Sr,
          ar = rr / 60,
          jr = Wr * (1 - Math.abs(ar % 2 - 1));
        let Ir = 0,
          fr = 0,
          Er = 0;
        ar >= 0 && ar <= 1 ? (Ir = Wr, fr = jr) : ar >= 1 && ar <= 2 ? (Ir = jr, fr = Wr) : ar >= 2 && ar <= 3 ? (fr = Wr, Er = jr) : ar >= 3 && ar <= 4 ? (fr = jr, Er = Wr) : ar >= 4 && ar <= 5 ? (Ir = jr, Er = Wr) : ar >= 5 && ar <= 6 && (Ir = Wr, Er = jr);
        const pr = Qr - Wr;
        return Zr.r = Ir + pr, Zr.g = fr + pr, Zr.b = Er + pr, Zr
      }
      static FromHSV(rr, Sr, Qr) {
        const Zr = new xr(0, 0, 0);
        return xr.HSVtoRGBToRef(rr, Sr, Qr, Zr), Zr
      }
      static FromHexString(rr) {
        return new xr(0, 0, 0).fromHexString(rr)
      }
      static FromArray(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new xr(rr[Sr], rr[Sr + 1], rr[Sr + 2])
      }
      static FromArrayToRef(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        Qr.r = rr[Sr], Qr.g = rr[Sr + 1], Qr.b = rr[Sr + 2]
      }
      static FromInts(rr, Sr, Qr) {
        return new xr(rr / 255, Sr / 255, Qr / 255)
      }
      static Lerp(rr, Sr, Qr) {
        const Zr = new xr(0, 0, 0);
        return xr.LerpToRef(rr, Sr, Qr, Zr), Zr
      }
      static LerpToRef(rr, Sr, Qr, Zr) {
        Zr.r = rr.r + (Sr.r - rr.r) * Qr, Zr.g = rr.g + (Sr.g - rr.g) * Qr, Zr.b = rr.b + (Sr.b - rr.b) * Qr
      }
      static Hermite(rr, Sr, Qr, Zr, Wr) {
        const ar = Wr * Wr,
          jr = Wr * ar,
          Ir = 2 * jr - 3 * ar + 1,
          fr = -2 * jr + 3 * ar,
          Er = jr - 2 * ar + Wr,
          pr = jr - ar,
          mr = rr.r * Ir + Qr.r * fr + Sr.r * Er + Zr.r * pr,
          Nr = rr.g * Ir + Qr.g * fr + Sr.g * Er + Zr.g * pr,
          Ur = rr.b * Ir + Qr.b * fr + Sr.b * Er + Zr.b * pr;
        return new xr(mr, Nr, Ur)
      }
      static Hermite1stDerivative(rr, Sr, Qr, Zr, Wr) {
        const ar = xr.Black();
        return this.Hermite1stDerivativeToRef(rr, Sr, Qr, Zr, Wr, ar), ar
      }
      static Hermite1stDerivativeToRef(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = Wr * Wr;
        ar.r = 6 * (jr - Wr) * rr.r + (3 * jr - 4 * Wr + 1) * Sr.r + 6 * (-jr + Wr) * Qr.r + (3 * jr - 2 * Wr) * Zr.r, ar.g = 6 * (jr - Wr) * rr.g + (3 * jr - 4 * Wr + 1) * Sr.g + 6 * (-jr + Wr) * Qr.g + (3 * jr - 2 * Wr) * Zr.g, ar.b = 6 * (jr - Wr) * rr.b + (3 * jr - 4 * Wr + 1) * Sr.b + 6 * (-jr + Wr) * Qr.b + (3 * jr - 2 * Wr) * Zr.b
      }
      static Red() {
        return new xr(1, 0, 0)
      }
      static Green() {
        return new xr(0, 1, 0)
      }
      static Blue() {
        return new xr(0, 0, 1)
      }
      static Black() {
        return new xr(0, 0, 0)
      }
      static get BlackReadOnly() {
        return xr._BlackReadOnly
      }
      static White() {
        return new xr(1, 1, 1)
      }
      static Purple() {
        return new xr(.5, 0, .5)
      }
      static Magenta() {
        return new xr(1, 0, 1)
      }
      static Yellow() {
        return new xr(1, 1, 0)
      }
      static Gray() {
        return new xr(.5, .5, .5)
      }
      static Teal() {
        return new xr(0, 1, 1)
      }
      static Random() {
        return new xr(Math.random(), Math.random(), Math.random())
      }
    }
    xr._V8PerformanceHack = new xr(.5, .5, .5), xr._BlackReadOnly = xr.Black();
    class mr {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = rr, this.g = Sr, this.b = Qr, this.a = Zr
      }
      OWr() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return rr[Sr] = this.r, rr[Sr + 1] = this.g, rr[Sr + 2] = this.b, rr[Sr + 3] = this.a, this
      }
      dp(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = rr[Sr], this.g = rr[Sr + 1], this.b = rr[Sr + 2], this.a = rr[Sr + 3], this
      }
      equals(rr) {
        return rr && this.r === rr.r && this.g === rr.g && this.b === rr.b && this.a === rr.a
      }
      add(rr) {
        return new mr(this.r + rr.r, this.g + rr.g, this.b + rr.b, this.a + rr.a)
      }
      addToRef(rr, Sr) {
        return Sr.r = this.r + rr.r, Sr.g = this.g + rr.g, Sr.b = this.b + rr.b, Sr.a = this.a + rr.a, Sr
      }
      addInPlace(rr) {
        return this.r += rr.r, this.g += rr.g, this.b += rr.b, this.a += rr.a, this
      }
      addInPlaceFromFloats(rr, Sr, Qr, Zr) {
        return this.r += rr, this.g += Sr, this.b += Qr, this.a += Zr, this
      }
      subtract(rr) {
        return new mr(this.r - rr.r, this.g - rr.g, this.b - rr.b, this.a - rr.a)
      }
      subtractToRef(rr, Sr) {
        return Sr.r = this.r - rr.r, Sr.g = this.g - rr.g, Sr.b = this.b - rr.b, Sr.a = this.a - rr.a, Sr
      }
      iWr(rr) {
        return this.r -= rr.r, this.g -= rr.g, this.b -= rr.b, this.a -= rr.a, this
      }
      subtractFromFloats(rr, Sr, Qr, Zr) {
        return new mr(this.r - rr, this.g - Sr, this.b - Qr, this.a - Zr)
      }
      subtractFromFloatsToRef(rr, Sr, Qr, Zr, Wr) {
        return Wr.r = this.r - rr, Wr.g = this.g - Sr, Wr.b = this.b - Qr, Wr.a = this.a - Zr, Wr
      }
      scale(rr) {
        return new mr(this.r * rr, this.g * rr, this.b * rr, this.a * rr)
      }
      scaleInPlace(rr) {
        return this.r *= rr, this.g *= rr, this.b *= rr, this.a *= rr, this
      }
      scaleToRef(rr, Sr) {
        return Sr.r = this.r * rr, Sr.g = this.g * rr, Sr.b = this.b * rr, Sr.a = this.a * rr, Sr
      }
      scaleAndAddToRef(rr, Sr) {
        return Sr.r += this.r * rr, Sr.g += this.g * rr, Sr.b += this.b * rr, Sr.a += this.a * rr, Sr
      }
      clampToRef() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        return Qr.r = (0, ar.Clamp)(this.r, rr, Sr), Qr.g = (0, ar.Clamp)(this.g, rr, Sr), Qr.b = (0, ar.Clamp)(this.b, rr, Sr), Qr.a = (0, ar.Clamp)(this.a, rr, Sr), Qr
      }
      multiply(rr) {
        return new mr(this.r * rr.r, this.g * rr.g, this.b * rr.b, this.a * rr.a)
      }
      multiplyToRef(rr, Sr) {
        return Sr.r = this.r * rr.r, Sr.g = this.g * rr.g, Sr.b = this.b * rr.b, Sr.a = this.a * rr.a, Sr
      }
      multiplyInPlace(rr) {
        return this.r *= rr.r, this.g *= rr.g, this.b *= rr.b, this.a *= rr.a, this
      }
      multiplyByFloats(rr, Sr, Qr, Zr) {
        return new mr(this.r * rr, this.g * Sr, this.b * Qr, this.a * Zr)
      }
      divide(rr) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(rr, Sr) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(rr) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(rr) {
        return this.r = Math.min(this.r, rr.r), this.g = Math.min(this.g, rr.g), this.b = Math.min(this.b, rr.b), this.a = Math.min(this.a, rr.a), this
      }
      maximizeInPlace(rr) {
        return this.r = Math.max(this.r, rr.r), this.g = Math.max(this.g, rr.g), this.b = Math.max(this.b, rr.b), this.a = Math.max(this.a, rr.a), this
      }
      minimizeInPlaceFromFloats(rr, Sr, Qr, Zr) {
        return this.r = Math.min(rr, this.r), this.g = Math.min(Sr, this.g), this.b = Math.min(Qr, this.b), this.a = Math.min(Zr, this.a), this
      }
      maximizeInPlaceFromFloats(rr, Sr, Qr, Zr) {
        return this.r = Math.max(rr, this.r), this.g = Math.max(Sr, this.g), this.b = Math.max(Qr, this.b), this.a = Math.max(Zr, this.a), this
      }
      floorToRef(rr) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(rr) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      ph() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(rr) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wr.e;
        return (0, ar.WithinEpsilon)(this.r, rr.r, Sr) && (0, ar.WithinEpsilon)(this.g, rr.g, Sr) && (0, ar.WithinEpsilon)(this.b, rr.b, Sr) && (0, ar.WithinEpsilon)(this.a, rr.a, Sr)
      }
      ffr(rr, Sr, Qr, Zr) {
        return this.r === rr && this.g === Sr && this.b === Qr && this.a === Zr
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let rr = 255 * this.r | 0;
        return rr = 397 * rr ^ 255 * this.g, rr = 397 * rr ^ 255 * this.b, rr = 397 * rr ^ 255 * this.a, rr
      }
      clone() {
        return (new mr).iH(this)
      }
      iH(rr) {
        return this.r = rr.r, this.g = rr.g, this.b = rr.b, this.a = rr.a, this
      }
      Hrr(rr, Sr, Qr, Zr) {
        return this.r = rr, this.g = Sr, this.b = Qr, this.a = Zr, this
      }
      set(rr, Sr, Qr, Zr) {
        return this.Hrr(rr, Sr, Qr, Zr)
      }
      Srr(rr) {
        return this.r = this.g = this.b = this.a = rr, this
      }
      toHexString() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Sr = Math.round(255 * this.r),
          Qr = Math.round(255 * this.g),
          Zr = Math.round(255 * this.b);
        if (rr) return "#" + (0, ar.ToHex)(Sr) + (0, ar.ToHex)(Qr) + (0, ar.ToHex)(Zr);
        const Wr = Math.round(255 * this.a);
        return "#" + (0, ar.ToHex)(Sr) + (0, ar.ToHex)(Qr) + (0, ar.ToHex)(Zr) + (0, ar.ToHex)(Wr)
      }
      fromHexString(rr) {
        return "#" !== rr.substring(0, 1) || 9 !== rr.length && 7 !== rr.length || (this.r = parseInt(rr.substring(1, 3), 16) / 255, this.g = parseInt(rr.substring(3, 5), 16) / 255, this.b = parseInt(rr.substring(5, 7), 16) / 255, 9 === rr.length && (this.a = parseInt(rr.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Sr = new mr;
        return this.toLinearSpaceToRef(Sr, rr), Sr
      }
      toLinearSpaceToRef(rr) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (rr.r = fr(this.r), rr.g = fr(this.g), rr.b = fr(this.b)) : (rr.r = Ir(this.r), rr.g = Ir(this.g), rr.b = Ir(this.b)), rr.a = this.a, this
      }
      toGammaSpace() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Sr = new mr;
        return this.toGammaSpaceToRef(Sr, rr), Sr
      }
      toGammaSpaceToRef(rr) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (rr.r = pr(this.r), rr.g = pr(this.g), rr.b = pr(this.b)) : (rr.r = Er(this.r), rr.g = Er(this.g), rr.b = Er(this.b)), rr.a = this.a, this
      }
      static FromHexString(rr) {
        return "#" !== rr.substring(0, 1) || 9 !== rr.length && 7 !== rr.length ? new mr(0, 0, 0, 0) : new mr(0, 0, 0, 1).fromHexString(rr)
      }
      static Lerp(rr, Sr, Qr) {
        return mr.LerpToRef(rr, Sr, Qr, new mr)
      }
      static LerpToRef(rr, Sr, Qr, Zr) {
        return Zr.r = rr.r + (Sr.r - rr.r) * Qr, Zr.g = rr.g + (Sr.g - rr.g) * Qr, Zr.b = rr.b + (Sr.b - rr.b) * Qr, Zr.a = rr.a + (Sr.a - rr.a) * Qr, Zr
      }
      static Hermite(rr, Sr, Qr, Zr, Wr) {
        const ar = Wr * Wr,
          jr = Wr * ar,
          Ir = 2 * jr - 3 * ar + 1,
          fr = -2 * jr + 3 * ar,
          Er = jr - 2 * ar + Wr,
          pr = jr - ar,
          xr = rr.r * Ir + Qr.r * fr + Sr.r * Er + Zr.r * pr,
          Nr = rr.g * Ir + Qr.g * fr + Sr.g * Er + Zr.g * pr,
          Ur = rr.b * Ir + Qr.b * fr + Sr.b * Er + Zr.b * pr,
          tr = rr.a * Ir + Qr.a * fr + Sr.a * Er + Zr.a * pr;
        return new mr(xr, Nr, Ur, tr)
      }
      static Hermite1stDerivative(rr, Sr, Qr, Zr, Wr) {
        const ar = new mr;
        return this.Hermite1stDerivativeToRef(rr, Sr, Qr, Zr, Wr, ar), ar
      }
      static Hermite1stDerivativeToRef(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = Wr * Wr;
        ar.r = 6 * (jr - Wr) * rr.r + (3 * jr - 4 * Wr + 1) * Sr.r + 6 * (-jr + Wr) * Qr.r + (3 * jr - 2 * Wr) * Zr.r, ar.g = 6 * (jr - Wr) * rr.g + (3 * jr - 4 * Wr + 1) * Sr.g + 6 * (-jr + Wr) * Qr.g + (3 * jr - 2 * Wr) * Zr.g, ar.b = 6 * (jr - Wr) * rr.b + (3 * jr - 4 * Wr + 1) * Sr.b + 6 * (-jr + Wr) * Qr.b + (3 * jr - 2 * Wr) * Zr.b, ar.a = 6 * (jr - Wr) * rr.a + (3 * jr - 4 * Wr + 1) * Sr.a + 6 * (-jr + Wr) * Qr.a + (3 * jr - 2 * Wr) * Zr.a
      }
      static FromColor3(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new mr(rr.r, rr.g, rr.b, Sr)
      }
      static FromArray(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new mr(rr[Sr], rr[Sr + 1], rr[Sr + 2], rr[Sr + 3])
      }
      static FromArrayToRef(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        Qr.r = rr[Sr], Qr.g = rr[Sr + 1], Qr.b = rr[Sr + 2], Qr.a = rr[Sr + 3]
      }
      static FromInts(rr, Sr, Qr, Zr) {
        return new mr(rr / 255, Sr / 255, Qr / 255, Zr / 255)
      }
      static CheckColors4(rr, Sr) {
        if (rr.length === 3 * Sr) {
          const Sr = [];
          for (let Qr = 0; Qr < rr.length; Qr += 3) {
            const Zr = Qr / 3 * 4;
            Sr[Zr] = rr[Qr], Sr[Zr + 1] = rr[Qr + 1], Sr[Zr + 2] = rr[Qr + 2], Sr[Zr + 3] = 1
          }
          return Sr
        }
        return rr
      }
    }
    mr._V8PerformanceHack = new mr(.5, .5, .5, .5);
    class Nr {}
    Nr.Color3 = (0, Zr.e)(3, xr.Black), Nr.Color4 = (0, Zr.e)(3, (() => new mr(0, 0, 0, 0)));
    let Ur = !1;

    function tr() {
      Ur || (Ur = !0, Object.defineProperties(xr.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(mr.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, jr.e)("BABYLON.Color3", xr), (0, jr.e)("BABYLON.Color4", mr))
    }
  },
  38569: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => ar,
      f: () => Zr,
      h: () => Wr
    });
    const Zr = 1 / 2.2,
      Wr = 2.2;
    Math.sqrt(5);
    let ar = .001
  },
  38599: (rr, Sr, Qr) => {
    function Zr(rr) {
      return parseInt(rr.toString().replace(/\W/g, ""))
    }

    function Wr(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(rr - Sr) <= Qr
    }

    function ar(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return rr < Sr - Zr || rr > Qr + Zr
    }

    function jr(rr, Sr) {
      return rr === Sr ? rr : Math.random() * (Sr - rr) + rr
    }

    function Ir(rr, Sr, Qr) {
      return rr + (Sr - rr) * Qr
    }

    function fr(rr, Sr, Qr) {
      let Zr = hr(Sr - rr, 360);
      return Zr > 180 && (Zr -= 360), rr + Zr * mr(Qr)
    }

    function Er(rr, Sr, Qr) {
      let Zr;
      return Zr = rr != Sr ? mr((Qr - rr) / (Sr - rr)) : 0, Zr
    }

    function pr(rr, Sr, Qr, Zr, Wr) {
      const ar = Wr * Wr,
        jr = Wr * ar;
      return rr * (2 * jr - 3 * ar + 1) + Qr * (-2 * jr + 3 * ar) + Sr * (jr - 2 * ar + Wr) + Zr * (jr - ar)
    }

    function xr(rr, Sr, Qr, Zr, Wr) {
      const ar = Wr * Wr;
      return 6 * (ar - Wr) * rr + (3 * ar - 4 * Wr + 1) * Sr + 6 * (-ar + Wr) * Qr + (3 * ar - 2 * Wr) * Zr
    }

    function mr(rr) {
      let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(Qr, Math.max(Sr, rr))
    }

    function Nr(rr) {
      return rr -= 2 * Math.PI * Math.floor((rr + Math.PI) / (2 * Math.PI))
    }

    function Ur(rr) {
      const Sr = rr.toString(16);
      return rr <= 15 ? ("0" + Sr).toUpperCase() : Sr.toUpperCase()
    }

    function tr(rr) {
      if (Math.log2) return Math.floor(Math.log2(rr));
      if (rr < 0) return NaN;
      if (0 === rr) return -1 / 0;
      let Sr = 0;
      if (rr < 1) {
        for (; rr < 1;) Sr++, rr *= 2;
        Sr = -Sr
      } else if (rr > 1)
        for (; rr > 1;) Sr++, rr = Math.floor(rr / 2);
      return Sr
    }

    function hr(rr, Sr) {
      return rr - Math.floor(rr / Sr) * Sr
    }

    function zr(rr, Sr, Qr) {
      return (rr - Sr) / (Qr - Sr)
    }

    function Yr(rr, Sr, Qr) {
      return rr * (Qr - Sr) + Sr
    }

    function nr(rr, Sr) {
      let Qr = hr(Sr - rr, 360);
      return Qr > 180 && (Qr -= 360), Qr
    }

    function er(rr, Sr) {
      const Qr = hr(rr, 2 * Sr);
      return Sr - Math.abs(Qr - Sr)
    }

    function Kr(rr, Sr, Qr) {
      let Zr = mr(Qr);
      return Zr = -2 * Zr * Zr * Zr + 3 * Zr * Zr, Sr * Zr + rr * (1 - Zr)
    }

    function yr(rr, Sr, Qr) {
      let Zr;
      return Zr = Math.abs(Sr - rr) <= Qr ? Sr : rr + Math.sign(Sr - rr) * Qr, Zr
    }

    function Br(rr, Sr, Qr) {
      const Zr = nr(rr, Sr);
      let Wr;
      return Wr = -Qr < Zr && Zr < Qr ? Sr : yr(rr, Sr = rr + Zr, Qr), Wr
    }

    function Tr(rr, Sr, Qr) {
      return (rr - Sr) / (Qr - Sr)
    }

    function vr(rr, Sr, Qr) {
      return (Qr - Sr) * rr + Sr
    }

    function Or(rr, Sr) {
      const Qr = rr % Sr;
      return 0 === Qr ? Sr : Or(Sr, Qr)
    }
    Qr.r(Sr), Qr.d(Sr, {
      Clamp: () => mr,
      DeltaAngle: () => nr,
      Denormalize: () => Yr,
      ExtractAsInt: () => Zr,
      Hermite: () => pr,
      Hermite1stDerivative: () => xr,
      HighestCommonFactor: () => Or,
      ILog2: () => tr,
      InverseLerp: () => Er,
      Lerp: () => Ir,
      LerpAngle: () => fr,
      MoveTowards: () => yr,
      MoveTowardsAngle: () => Br,
      Normalize: () => zr,
      NormalizeRadians: () => Nr,
      OutsideRange: () => ar,
      PercentToRange: () => vr,
      PingPong: () => er,
      RandomRange: () => jr,
      RangeToPercent: () => Tr,
      Repeat: () => hr,
      SmoothStep: () => Kr,
      ToHex: () => Ur,
      WithinEpsilon: () => Wr
    })
  },
  38576: (rr, Sr, Qr) => {
    function Zr(rr, Sr) {
      const Qr = [];
      for (let Zr = 0; Zr < rr; ++Zr) Qr.push(Sr());
      return Qr
    }

    function Wr(rr, Sr) {
      return Zr(rr, Sr)
    }
    Qr.d(Sr, {
      e: () => Zr,
      f: () => Wr,
      h: () => jr
    });
    const ar = ["push", "splice", "pop", "shift", "unshift"];

    function jr(rr, Sr) {
      const Qr = ar.map((Qr => function(rr, Sr, Qr) {
        const Zr = rr[Sr];
        if ("function" !== typeof Zr) return null;
        const Wr = function() {
          const Zr = rr.length,
            ar = Wr.previous.apply(rr, arguments);
          return Qr(Sr, Zr), ar
        };
        return Zr.next = Wr, Wr.previous = Zr, rr[Sr] = Wr, () => {
          const Qr = Wr.previous;
          if (!Qr) return;
          const Zr = Wr.next;
          Zr ? (Qr.next = Zr, Zr.previous = Qr) : (Qr.next = void 0, rr[Sr] = Qr), Wr.next = void 0, Wr.previous = void 0
        }
      }(rr, Qr, Sr)));
      return () => {
        for (const rr of Qr) rr?.()
      }
    }
  },
  38609: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => ar,
      e: () => Wr
    });
    const Zr = {};

    function Wr(rr, Sr) {
      Zr[rr] = Sr
    }

    function ar(rr) {
      return Zr[rr]
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);