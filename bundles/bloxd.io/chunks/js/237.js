export const id = 237;
export const ids = [237];
export const modules = {
  37379: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => pB,
      g: () => rB,
      k: () => mB,
      o: () => sB
    });
    var QB = zB(37186),
      nB = zB(37178),
      dB = zB(37208),
      IB = zB(37222);

    function NB(BB) {
      return Math.pow(BB, nB.h)
    }

    function uB(BB) {
      return BB <= .04045 ? .0773993808 * BB : Math.pow(.947867299 * (BB + .055), 2.4)
    }

    function UB(BB) {
      return Math.pow(BB, nB.g)
    }

    function aB(BB) {
      return BB <= .0031308 ? 12.92 * BB : 1.055 * Math.pow(BB, .41666) - .055
    }
    class pB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = BB, this.g = jB, this.b = zB
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let BB = 255 * this.r | 0;
        return BB = 397 * BB ^ 255 * this.g, BB = 397 * BB ^ 255 * this.b, BB
      }
      toArray(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BB[jB] = this.r, BB[jB + 1] = this.g, BB[jB + 2] = this.b, this
      }
      ljB(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return pB.FromArrayToRef(BB, jB, this), this
      }
      toColor4() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new rB(this.r, this.g, this.b, BB)
      }
      nQB() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(BB) {
        return new pB(this.r * BB.r, this.g * BB.g, this.b * BB.b)
      }
      multiplyToRef(BB, jB) {
        return jB.r = this.r * BB.r, jB.g = this.g * BB.g, jB.b = this.b * BB.b, jB
      }
      multiplyInPlace(BB) {
        return this.r *= BB.r, this.g *= BB.g, this.b *= BB.b, this
      }
      multiplyByFloats(BB, jB, zB) {
        return new pB(this.r * BB, this.g * jB, this.b * zB)
      }
      divide(BB) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(BB, jB) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(BB) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(BB) {
        return this.minimizeInPlaceFromFloats(BB.r, BB.g, BB.b)
      }
      maximizeInPlace(BB) {
        return this.maximizeInPlaceFromFloats(BB.r, BB.g, BB.b)
      }
      minimizeInPlaceFromFloats(BB, jB, zB) {
        return this.r = Math.min(BB, this.r), this.g = Math.min(jB, this.g), this.b = Math.min(zB, this.b), this
      }
      maximizeInPlaceFromFloats(BB, jB, zB) {
        return this.r = Math.max(BB, this.r), this.g = Math.max(jB, this.g), this.b = Math.max(zB, this.b), this
      }
      floorToRef(BB) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(BB) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(BB) {
        return BB && this.r === BB.r && this.g === BB.g && this.b === BB.b
      }
      equalsFloats(BB, jB, zB) {
        return this.YIB(BB, jB, zB)
      }
      YIB(BB, jB, zB) {
        return this.r === BB && this.g === jB && this.b === zB
      }
      equalsWithEpsilon(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nB.c;
        return (0, dB.WithinEpsilon)(this.r, BB.r, jB) && (0, dB.WithinEpsilon)(this.g, BB.g, jB) && (0, dB.WithinEpsilon)(this.b, BB.b, jB)
      }
      bu() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(BB) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(BB) {
        return new pB(this.r * BB, this.g * BB, this.b * BB)
      }
      scaleInPlace(BB) {
        return this.r *= BB, this.g *= BB, this.b *= BB, this
      }
      scaleToRef(BB, jB) {
        return jB.r = this.r * BB, jB.g = this.g * BB, jB.b = this.b * BB, jB
      }
      scaleAndAddToRef(BB, jB) {
        return jB.r += this.r * BB, jB.g += this.g * BB, jB.b += this.b * BB, jB
      }
      clampToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        return zB.r = (0, dB.Clamp)(this.r, BB, jB), zB.g = (0, dB.Clamp)(this.g, BB, jB), zB.b = (0, dB.Clamp)(this.b, BB, jB), zB
      }
      add(BB) {
        return new pB(this.r + BB.r, this.g + BB.g, this.b + BB.b)
      }
      addInPlace(BB) {
        return this.r += BB.r, this.g += BB.g, this.b += BB.b, this
      }
      addInPlaceFromFloats(BB, jB, zB) {
        return this.r += BB, this.g += jB, this.b += zB, this
      }
      addToRef(BB, jB) {
        return jB.r = this.r + BB.r, jB.g = this.g + BB.g, jB.b = this.b + BB.b, jB
      }
      subtract(BB) {
        return new pB(this.r - BB.r, this.g - BB.g, this.b - BB.b)
      }
      subtractToRef(BB, jB) {
        return jB.r = this.r - BB.r, jB.g = this.g - BB.g, jB.b = this.b - BB.b, jB
      }
      MQB(BB) {
        return this.r -= BB.r, this.g -= BB.g, this.b -= BB.b, this
      }
      subtractFromFloats(BB, jB, zB) {
        return new pB(this.r - BB, this.g - jB, this.b - zB)
      }
      subtractFromFloatsToRef(BB, jB, zB, QB) {
        return QB.r = this.r - BB, QB.g = this.g - jB, QB.b = this.b - zB, QB
      }
      clone() {
        return new pB(this.r, this.g, this.b)
      }
      jH(BB) {
        return this.r = BB.r, this.g = BB.g, this.b = BB.b, this
      }
      U3(BB, jB, zB) {
        return this.r = BB, this.g = jB, this.b = zB, this
      }
      set(BB, jB, zB) {
        return this.U3(BB, jB, zB)
      }
      S_(BB) {
        return this.r = this.g = this.b = BB, this
      }
      toHexString() {
        const BB = Math.round(255 * this.r),
          jB = Math.round(255 * this.g),
          zB = Math.round(255 * this.b);
        return "#" + (0, dB.ToHex)(BB) + (0, dB.ToHex)(jB) + (0, dB.ToHex)(zB)
      }
      fromHexString(BB) {
        return "#" !== BB.substring(0, 1) || 7 !== BB.length || (this.r = parseInt(BB.substring(1, 3), 16) / 255, this.g = parseInt(BB.substring(3, 5), 16) / 255, this.b = parseInt(BB.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new pB)
      }
      toHSVToRef(BB) {
        const jB = this.r,
          zB = this.g,
          QB = this.b,
          nB = Math.max(jB, zB, QB),
          dB = Math.min(jB, zB, QB);
        let IB = 0,
          NB = 0;
        const uB = nB,
          UB = nB - dB;
        return 0 !== nB && (NB = UB / nB), nB != dB && (nB == jB ? (IB = (zB - QB) / UB, zB < QB && (IB += 6)) : nB == zB ? IB = (QB - jB) / UB + 2 : nB == QB && (IB = (jB - zB) / UB + 4), IB *= 60), BB.r = IB, BB.g = NB, BB.b = uB, BB
      }
      toLinearSpace() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const jB = new pB;
        return this.toLinearSpaceToRef(jB, BB), jB
      }
      toLinearSpaceToRef(BB) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (BB.r = uB(this.r), BB.g = uB(this.g), BB.b = uB(this.b)) : (BB.r = NB(this.r), BB.g = NB(this.g), BB.b = NB(this.b)), this
      }
      toGammaSpace() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const jB = new pB;
        return this.toGammaSpaceToRef(jB, BB), jB
      }
      toGammaSpaceToRef(BB) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (BB.r = aB(this.r), BB.g = aB(this.g), BB.b = aB(this.b)) : (BB.r = UB(this.r), BB.g = UB(this.g), BB.b = UB(this.b)), this
      }
      static HSVtoRGBToRef(BB, jB, zB, QB) {
        const nB = zB * jB,
          dB = BB / 60,
          IB = nB * (1 - Math.abs(dB % 2 - 1));
        let NB = 0,
          uB = 0,
          UB = 0;
        dB >= 0 && dB <= 1 ? (NB = nB, uB = IB) : dB >= 1 && dB <= 2 ? (NB = IB, uB = nB) : dB >= 2 && dB <= 3 ? (uB = nB, UB = IB) : dB >= 3 && dB <= 4 ? (uB = IB, UB = nB) : dB >= 4 && dB <= 5 ? (NB = IB, UB = nB) : dB >= 5 && dB <= 6 && (NB = nB, UB = IB);
        const aB = zB - nB;
        return QB.r = NB + aB, QB.g = uB + aB, QB.b = UB + aB, QB
      }
      static FromHSV(BB, jB, zB) {
        const QB = new pB(0, 0, 0);
        return pB.HSVtoRGBToRef(BB, jB, zB, QB), QB
      }
      static FromHexString(BB) {
        return new pB(0, 0, 0).fromHexString(BB)
      }
      static FromArray(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new pB(BB[jB], BB[jB + 1], BB[jB + 2])
      }
      static FromArrayToRef(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        zB.r = BB[jB], zB.g = BB[jB + 1], zB.b = BB[jB + 2]
      }
      static FromInts(BB, jB, zB) {
        return new pB(BB / 255, jB / 255, zB / 255)
      }
      static Lerp(BB, jB, zB) {
        const QB = new pB(0, 0, 0);
        return pB.LerpToRef(BB, jB, zB, QB), QB
      }
      static LerpToRef(BB, jB, zB, QB) {
        QB.r = BB.r + (jB.r - BB.r) * zB, QB.g = BB.g + (jB.g - BB.g) * zB, QB.b = BB.b + (jB.b - BB.b) * zB
      }
      static Hermite(BB, jB, zB, QB, nB) {
        const dB = nB * nB,
          IB = nB * dB,
          NB = 2 * IB - 3 * dB + 1,
          uB = -2 * IB + 3 * dB,
          UB = IB - 2 * dB + nB,
          aB = IB - dB,
          rB = BB.r * NB + zB.r * uB + jB.r * UB + QB.r * aB,
          sB = BB.g * NB + zB.g * uB + jB.g * UB + QB.g * aB,
          JB = BB.b * NB + zB.b * uB + jB.b * UB + QB.b * aB;
        return new pB(rB, sB, JB)
      }
      static Hermite1stDerivative(BB, jB, zB, QB, nB) {
        const dB = pB.Black();
        return this.Hermite1stDerivativeToRef(BB, jB, zB, QB, nB, dB), dB
      }
      static Hermite1stDerivativeToRef(BB, jB, zB, QB, nB, dB) {
        const IB = nB * nB;
        dB.r = 6 * (IB - nB) * BB.r + (3 * IB - 4 * nB + 1) * jB.r + 6 * (-IB + nB) * zB.r + (3 * IB - 2 * nB) * QB.r, dB.g = 6 * (IB - nB) * BB.g + (3 * IB - 4 * nB + 1) * jB.g + 6 * (-IB + nB) * zB.g + (3 * IB - 2 * nB) * QB.g, dB.b = 6 * (IB - nB) * BB.b + (3 * IB - 4 * nB + 1) * jB.b + 6 * (-IB + nB) * zB.b + (3 * IB - 2 * nB) * QB.b
      }
      static Red() {
        return new pB(1, 0, 0)
      }
      static Green() {
        return new pB(0, 1, 0)
      }
      static Blue() {
        return new pB(0, 0, 1)
      }
      static Black() {
        return new pB(0, 0, 0)
      }
      static get BlackReadOnly() {
        return pB._BlackReadOnly
      }
      static White() {
        return new pB(1, 1, 1)
      }
      static Purple() {
        return new pB(.5, 0, .5)
      }
      static Magenta() {
        return new pB(1, 0, 1)
      }
      static Yellow() {
        return new pB(1, 1, 0)
      }
      static Gray() {
        return new pB(.5, .5, .5)
      }
      static Teal() {
        return new pB(0, 1, 1)
      }
      static Random() {
        return new pB(Math.random(), Math.random(), Math.random())
      }
    }
    pB._V8PerformanceHack = new pB(.5, .5, .5), pB._BlackReadOnly = pB.Black();
    class rB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = BB, this.g = jB, this.b = zB, this.a = QB
      }
      nQB() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BB[jB] = this.r, BB[jB + 1] = this.g, BB[jB + 2] = this.b, BB[jB + 3] = this.a, this
      }
      ljB(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = BB[jB], this.g = BB[jB + 1], this.b = BB[jB + 2], this.a = BB[jB + 3], this
      }
      equals(BB) {
        return BB && this.r === BB.r && this.g === BB.g && this.b === BB.b && this.a === BB.a
      }
      add(BB) {
        return new rB(this.r + BB.r, this.g + BB.g, this.b + BB.b, this.a + BB.a)
      }
      addToRef(BB, jB) {
        return jB.r = this.r + BB.r, jB.g = this.g + BB.g, jB.b = this.b + BB.b, jB.a = this.a + BB.a, jB
      }
      addInPlace(BB) {
        return this.r += BB.r, this.g += BB.g, this.b += BB.b, this.a += BB.a, this
      }
      addInPlaceFromFloats(BB, jB, zB, QB) {
        return this.r += BB, this.g += jB, this.b += zB, this.a += QB, this
      }
      subtract(BB) {
        return new rB(this.r - BB.r, this.g - BB.g, this.b - BB.b, this.a - BB.a)
      }
      subtractToRef(BB, jB) {
        return jB.r = this.r - BB.r, jB.g = this.g - BB.g, jB.b = this.b - BB.b, jB.a = this.a - BB.a, jB
      }
      MQB(BB) {
        return this.r -= BB.r, this.g -= BB.g, this.b -= BB.b, this.a -= BB.a, this
      }
      subtractFromFloats(BB, jB, zB, QB) {
        return new rB(this.r - BB, this.g - jB, this.b - zB, this.a - QB)
      }
      subtractFromFloatsToRef(BB, jB, zB, QB, nB) {
        return nB.r = this.r - BB, nB.g = this.g - jB, nB.b = this.b - zB, nB.a = this.a - QB, nB
      }
      scale(BB) {
        return new rB(this.r * BB, this.g * BB, this.b * BB, this.a * BB)
      }
      scaleInPlace(BB) {
        return this.r *= BB, this.g *= BB, this.b *= BB, this.a *= BB, this
      }
      scaleToRef(BB, jB) {
        return jB.r = this.r * BB, jB.g = this.g * BB, jB.b = this.b * BB, jB.a = this.a * BB, jB
      }
      scaleAndAddToRef(BB, jB) {
        return jB.r += this.r * BB, jB.g += this.g * BB, jB.b += this.b * BB, jB.a += this.a * BB, jB
      }
      clampToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        return zB.r = (0, dB.Clamp)(this.r, BB, jB), zB.g = (0, dB.Clamp)(this.g, BB, jB), zB.b = (0, dB.Clamp)(this.b, BB, jB), zB.a = (0, dB.Clamp)(this.a, BB, jB), zB
      }
      multiply(BB) {
        return new rB(this.r * BB.r, this.g * BB.g, this.b * BB.b, this.a * BB.a)
      }
      multiplyToRef(BB, jB) {
        return jB.r = this.r * BB.r, jB.g = this.g * BB.g, jB.b = this.b * BB.b, jB.a = this.a * BB.a, jB
      }
      multiplyInPlace(BB) {
        return this.r *= BB.r, this.g *= BB.g, this.b *= BB.b, this.a *= BB.a, this
      }
      multiplyByFloats(BB, jB, zB, QB) {
        return new rB(this.r * BB, this.g * jB, this.b * zB, this.a * QB)
      }
      divide(BB) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(BB, jB) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(BB) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(BB) {
        return this.r = Math.min(this.r, BB.r), this.g = Math.min(this.g, BB.g), this.b = Math.min(this.b, BB.b), this.a = Math.min(this.a, BB.a), this
      }
      maximizeInPlace(BB) {
        return this.r = Math.max(this.r, BB.r), this.g = Math.max(this.g, BB.g), this.b = Math.max(this.b, BB.b), this.a = Math.max(this.a, BB.a), this
      }
      minimizeInPlaceFromFloats(BB, jB, zB, QB) {
        return this.r = Math.min(BB, this.r), this.g = Math.min(jB, this.g), this.b = Math.min(zB, this.b), this.a = Math.min(QB, this.a), this
      }
      maximizeInPlaceFromFloats(BB, jB, zB, QB) {
        return this.r = Math.max(BB, this.r), this.g = Math.max(jB, this.g), this.b = Math.max(zB, this.b), this.a = Math.max(QB, this.a), this
      }
      floorToRef(BB) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(BB) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      bu() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(BB) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nB.c;
        return (0, dB.WithinEpsilon)(this.r, BB.r, jB) && (0, dB.WithinEpsilon)(this.g, BB.g, jB) && (0, dB.WithinEpsilon)(this.b, BB.b, jB) && (0, dB.WithinEpsilon)(this.a, BB.a, jB)
      }
      YIB(BB, jB, zB, QB) {
        return this.r === BB && this.g === jB && this.b === zB && this.a === QB
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let BB = 255 * this.r | 0;
        return BB = 397 * BB ^ 255 * this.g, BB = 397 * BB ^ 255 * this.b, BB = 397 * BB ^ 255 * this.a, BB
      }
      clone() {
        return (new rB).jH(this)
      }
      jH(BB) {
        return this.r = BB.r, this.g = BB.g, this.b = BB.b, this.a = BB.a, this
      }
      U3(BB, jB, zB, QB) {
        return this.r = BB, this.g = jB, this.b = zB, this.a = QB, this
      }
      set(BB, jB, zB, QB) {
        return this.U3(BB, jB, zB, QB)
      }
      S_(BB) {
        return this.r = this.g = this.b = this.a = BB, this
      }
      toHexString() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const jB = Math.round(255 * this.r),
          zB = Math.round(255 * this.g),
          QB = Math.round(255 * this.b);
        if (BB) return "#" + (0, dB.ToHex)(jB) + (0, dB.ToHex)(zB) + (0, dB.ToHex)(QB);
        const nB = Math.round(255 * this.a);
        return "#" + (0, dB.ToHex)(jB) + (0, dB.ToHex)(zB) + (0, dB.ToHex)(QB) + (0, dB.ToHex)(nB)
      }
      fromHexString(BB) {
        return "#" !== BB.substring(0, 1) || 9 !== BB.length && 7 !== BB.length || (this.r = parseInt(BB.substring(1, 3), 16) / 255, this.g = parseInt(BB.substring(3, 5), 16) / 255, this.b = parseInt(BB.substring(5, 7), 16) / 255, 9 === BB.length && (this.a = parseInt(BB.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const jB = new rB;
        return this.toLinearSpaceToRef(jB, BB), jB
      }
      toLinearSpaceToRef(BB) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (BB.r = uB(this.r), BB.g = uB(this.g), BB.b = uB(this.b)) : (BB.r = NB(this.r), BB.g = NB(this.g), BB.b = NB(this.b)), BB.a = this.a, this
      }
      toGammaSpace() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const jB = new rB;
        return this.toGammaSpaceToRef(jB, BB), jB
      }
      toGammaSpaceToRef(BB) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (BB.r = aB(this.r), BB.g = aB(this.g), BB.b = aB(this.b)) : (BB.r = UB(this.r), BB.g = UB(this.g), BB.b = UB(this.b)), BB.a = this.a, this
      }
      static FromHexString(BB) {
        return "#" !== BB.substring(0, 1) || 9 !== BB.length && 7 !== BB.length ? new rB(0, 0, 0, 0) : new rB(0, 0, 0, 1).fromHexString(BB)
      }
      static Lerp(BB, jB, zB) {
        return rB.LerpToRef(BB, jB, zB, new rB)
      }
      static LerpToRef(BB, jB, zB, QB) {
        return QB.r = BB.r + (jB.r - BB.r) * zB, QB.g = BB.g + (jB.g - BB.g) * zB, QB.b = BB.b + (jB.b - BB.b) * zB, QB.a = BB.a + (jB.a - BB.a) * zB, QB
      }
      static Hermite(BB, jB, zB, QB, nB) {
        const dB = nB * nB,
          IB = nB * dB,
          NB = 2 * IB - 3 * dB + 1,
          uB = -2 * IB + 3 * dB,
          UB = IB - 2 * dB + nB,
          aB = IB - dB,
          pB = BB.r * NB + zB.r * uB + jB.r * UB + QB.r * aB,
          sB = BB.g * NB + zB.g * uB + jB.g * UB + QB.g * aB,
          JB = BB.b * NB + zB.b * uB + jB.b * UB + QB.b * aB,
          mB = BB.a * NB + zB.a * uB + jB.a * UB + QB.a * aB;
        return new rB(pB, sB, JB, mB)
      }
      static Hermite1stDerivative(BB, jB, zB, QB, nB) {
        const dB = new rB;
        return this.Hermite1stDerivativeToRef(BB, jB, zB, QB, nB, dB), dB
      }
      static Hermite1stDerivativeToRef(BB, jB, zB, QB, nB, dB) {
        const IB = nB * nB;
        dB.r = 6 * (IB - nB) * BB.r + (3 * IB - 4 * nB + 1) * jB.r + 6 * (-IB + nB) * zB.r + (3 * IB - 2 * nB) * QB.r, dB.g = 6 * (IB - nB) * BB.g + (3 * IB - 4 * nB + 1) * jB.g + 6 * (-IB + nB) * zB.g + (3 * IB - 2 * nB) * QB.g, dB.b = 6 * (IB - nB) * BB.b + (3 * IB - 4 * nB + 1) * jB.b + 6 * (-IB + nB) * zB.b + (3 * IB - 2 * nB) * QB.b, dB.a = 6 * (IB - nB) * BB.a + (3 * IB - 4 * nB + 1) * jB.a + 6 * (-IB + nB) * zB.a + (3 * IB - 2 * nB) * QB.a
      }
      static FromColor3(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new rB(BB.r, BB.g, BB.b, jB)
      }
      static FromArray(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new rB(BB[jB], BB[jB + 1], BB[jB + 2], BB[jB + 3])
      }
      static FromArrayToRef(BB) {
        let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          zB = arguments.length > 2 ? arguments[2] : void 0;
        zB.r = BB[jB], zB.g = BB[jB + 1], zB.b = BB[jB + 2], zB.a = BB[jB + 3]
      }
      static FromInts(BB, jB, zB, QB) {
        return new rB(BB / 255, jB / 255, zB / 255, QB / 255)
      }
      static CheckColors4(BB, jB) {
        if (BB.length === 3 * jB) {
          const jB = [];
          for (let zB = 0; zB < BB.length; zB += 3) {
            const QB = zB / 3 * 4;
            jB[QB] = BB[zB], jB[QB + 1] = BB[zB + 1], jB[QB + 2] = BB[zB + 2], jB[QB + 3] = 1
          }
          return jB
        }
        return BB
      }
    }
    rB._V8PerformanceHack = new rB(.5, .5, .5, .5);
    class sB {}
    sB.Color3 = (0, QB.c)(3, pB.Black), sB.Color4 = (0, QB.c)(3, (() => new rB(0, 0, 0, 0)));
    let JB = !1;

    function mB() {
      JB || (JB = !0, Object.defineProperties(pB.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(rB.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, IB.d)("BABYLON.Color3", pB), (0, IB.d)("BABYLON.Color4", rB))
    }
  },
  37178: (BB, jB, zB) => {
    zB.d(jB, {
      c: () => dB,
      g: () => QB,
      h: () => nB
    });
    const QB = 1 / 2.2,
      nB = 2.2;
    Math.sqrt(5);
    let dB = .001
  },
  37208: (BB, jB, zB) => {
    function QB(BB) {
      return parseInt(BB.toString().replace(/\W/g, ""))
    }

    function nB(BB, jB) {
      let zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(BB - jB) <= zB
    }

    function dB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return BB < jB - QB || BB > zB + QB
    }

    function IB(BB, jB) {
      return BB === jB ? BB : Math.random() * (jB - BB) + BB
    }

    function NB(BB, jB, zB) {
      return BB + (jB - BB) * zB
    }

    function uB(BB, jB, zB) {
      let QB = yB(jB - BB, 360);
      return QB > 180 && (QB -= 360), BB + QB * rB(zB)
    }

    function UB(BB, jB, zB) {
      let QB;
      return QB = BB != jB ? rB((zB - BB) / (jB - BB)) : 0, QB
    }

    function aB(BB, jB, zB, QB, nB) {
      const dB = nB * nB,
        IB = nB * dB;
      return BB * (2 * IB - 3 * dB + 1) + zB * (-2 * IB + 3 * dB) + jB * (IB - 2 * dB + nB) + QB * (IB - dB)
    }

    function pB(BB, jB, zB, QB, nB) {
      const dB = nB * nB;
      return 6 * (dB - nB) * BB + (3 * dB - 4 * nB + 1) * jB + 6 * (-dB + nB) * zB + (3 * dB - 2 * nB) * QB
    }

    function rB(BB) {
      let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        zB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(zB, Math.max(jB, BB))
    }

    function sB(BB) {
      return BB -= 2 * Math.PI * Math.floor((BB + Math.PI) / (2 * Math.PI))
    }

    function JB(BB) {
      const jB = BB.toString(16);
      return BB <= 15 ? ("0" + jB).toUpperCase() : jB.toUpperCase()
    }

    function mB(BB) {
      if (Math.log2) return Math.floor(Math.log2(BB));
      if (BB < 0) return NaN;
      if (0 === BB) return -1 / 0;
      let jB = 0;
      if (BB < 1) {
        for (; BB < 1;) jB++, BB *= 2;
        jB = -jB
      } else if (BB > 1)
        for (; BB > 1;) jB++, BB = Math.floor(BB / 2);
      return jB
    }

    function yB(BB, jB) {
      return BB - Math.floor(BB / jB) * jB
    }

    function kB(BB, jB, zB) {
      return (BB - jB) / (zB - jB)
    }

    function GB(BB, jB, zB) {
      return BB * (zB - jB) + jB
    }

    function LB(BB, jB) {
      let zB = yB(jB - BB, 360);
      return zB > 180 && (zB -= 360), zB
    }

    function gB(BB, jB) {
      const zB = yB(BB, 2 * jB);
      return jB - Math.abs(zB - jB)
    }

    function tB(BB, jB, zB) {
      let QB = rB(zB);
      return QB = -2 * QB * QB * QB + 3 * QB * QB, jB * QB + BB * (1 - QB)
    }

    function SB(BB, jB, zB) {
      let QB;
      return QB = Math.abs(jB - BB) <= zB ? jB : BB + Math.sign(jB - BB) * zB, QB
    }

    function MB(BB, jB, zB) {
      const QB = LB(BB, jB);
      let nB;
      return nB = -zB < QB && QB < zB ? jB : SB(BB, jB = BB + QB, zB), nB
    }

    function EB(BB, jB, zB) {
      return (BB - jB) / (zB - jB)
    }

    function iB(BB, jB, zB) {
      return (zB - jB) * BB + jB
    }

    function qB(BB, jB) {
      const zB = BB % jB;
      return 0 === zB ? jB : qB(jB, zB)
    }
    zB.r(jB), zB.d(jB, {
      Clamp: () => rB,
      DeltaAngle: () => LB,
      Denormalize: () => GB,
      ExtractAsInt: () => QB,
      Hermite: () => aB,
      Hermite1stDerivative: () => pB,
      HighestCommonFactor: () => qB,
      ILog2: () => mB,
      InverseLerp: () => UB,
      Lerp: () => NB,
      LerpAngle: () => uB,
      MoveTowards: () => SB,
      MoveTowardsAngle: () => MB,
      Normalize: () => kB,
      NormalizeRadians: () => sB,
      OutsideRange: () => dB,
      PercentToRange: () => iB,
      PingPong: () => gB,
      RandomRange: () => IB,
      RangeToPercent: () => EB,
      Repeat: () => yB,
      SmoothStep: () => tB,
      ToHex: () => JB,
      WithinEpsilon: () => nB
    })
  },
  37186: (BB, jB, zB) => {
    function QB(BB, jB) {
      const zB = [];
      for (let QB = 0; QB < BB; ++QB) zB.push(jB());
      return zB
    }

    function nB(BB, jB) {
      return QB(BB, jB)
    }
    zB.d(jB, {
      c: () => QB,
      g: () => nB,
      k: () => IB
    });
    const dB = ["push", "splice", "pop", "shift", "unshift"];

    function IB(BB, jB) {
      const zB = dB.map((zB => function(BB, jB, zB) {
        const QB = BB[jB];
        if ("function" !== typeof QB) return null;
        const nB = function() {
          const QB = BB.length,
            dB = nB.previous.apply(BB, arguments);
          return zB(jB, QB), dB
        };
        return QB.next = nB, nB.previous = QB, BB[jB] = nB, () => {
          const zB = nB.previous;
          if (!zB) return;
          const QB = nB.next;
          QB ? (zB.next = QB, QB.previous = zB) : (zB.next = void 0, BB[jB] = zB), nB.next = void 0, nB.previous = void 0
        }
      }(BB, zB, jB)));
      return () => {
        for (const BB of zB) BB?.()
      }
    }
  },
  37222: (BB, jB, zB) => {
    zB.d(jB, {
      b: () => dB,
      d: () => nB
    });
    const QB = {};

    function nB(BB, jB) {
      QB[BB] = jB
    }

    function dB(BB) {
      return QB[BB]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);