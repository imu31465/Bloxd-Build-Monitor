export const id = 237;
export const ids = [237];
export const modules = {
  37311: (BB, IB, ZB) => {
    ZB.d(IB, {
      c: () => hB,
      g: () => zB,
      j: () => gB,
      k: () => FB
    });
    var TB = ZB(37131),
      JB = ZB(37129),
      oB = ZB(37158),
      GB = ZB(37170);

    function vB(BB) {
      return Math.pow(BB, JB.g)
    }

    function kB(BB) {
      return BB <= .04045 ? .0773993808 * BB : Math.pow(.947867299 * (BB + .055), 2.4)
    }

    function cB(BB) {
      return Math.pow(BB, JB.e)
    }

    function nB(BB) {
      return BB <= .0031308 ? 12.92 * BB : 1.055 * Math.pow(BB, .41666) - .055
    }
    class hB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = BB, this.g = IB, this.b = ZB
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
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BB[IB] = this.r, BB[IB + 1] = this.g, BB[IB + 2] = this.b, this
      }
      WZB(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return hB.FromArrayToRef(BB, IB, this), this
      }
      toColor4() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new zB(this.r, this.g, this.b, BB)
      }
      HTB() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(BB) {
        return new hB(this.r * BB.r, this.g * BB.g, this.b * BB.b)
      }
      multiplyToRef(BB, IB) {
        return IB.r = this.r * BB.r, IB.g = this.g * BB.g, IB.b = this.b * BB.b, IB
      }
      multiplyInPlace(BB) {
        return this.r *= BB.r, this.g *= BB.g, this.b *= BB.b, this
      }
      multiplyByFloats(BB, IB, ZB) {
        return new hB(this.r * BB, this.g * IB, this.b * ZB)
      }
      divide(BB) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(BB, IB) {
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
      minimizeInPlaceFromFloats(BB, IB, ZB) {
        return this.r = Math.min(BB, this.r), this.g = Math.min(IB, this.g), this.b = Math.min(ZB, this.b), this
      }
      maximizeInPlaceFromFloats(BB, IB, ZB) {
        return this.r = Math.max(BB, this.r), this.g = Math.max(IB, this.g), this.b = Math.max(ZB, this.b), this
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
      equalsFloats(BB, IB, ZB) {
        return this.kvB(BB, IB, ZB)
      }
      kvB(BB, IB, ZB) {
        return this.r === BB && this.g === IB && this.b === ZB
      }
      equalsWithEpsilon(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JB.d;
        return (0, oB.WithinEpsilon)(this.r, BB.r, IB) && (0, oB.WithinEpsilon)(this.g, BB.g, IB) && (0, oB.WithinEpsilon)(this.b, BB.b, IB)
      }
      dv() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(BB) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(BB) {
        return new hB(this.r * BB, this.g * BB, this.b * BB)
      }
      scaleInPlace(BB) {
        return this.r *= BB, this.g *= BB, this.b *= BB, this
      }
      scaleToRef(BB, IB) {
        return IB.r = this.r * BB, IB.g = this.g * BB, IB.b = this.b * BB, IB
      }
      scaleAndAddToRef(BB, IB) {
        return IB.r += this.r * BB, IB.g += this.g * BB, IB.b += this.b * BB, IB
      }
      clampToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        return ZB.r = (0, oB.Clamp)(this.r, BB, IB), ZB.g = (0, oB.Clamp)(this.g, BB, IB), ZB.b = (0, oB.Clamp)(this.b, BB, IB), ZB
      }
      add(BB) {
        return new hB(this.r + BB.r, this.g + BB.g, this.b + BB.b)
      }
      addInPlace(BB) {
        return this.r += BB.r, this.g += BB.g, this.b += BB.b, this
      }
      addInPlaceFromFloats(BB, IB, ZB) {
        return this.r += BB, this.g += IB, this.b += ZB, this
      }
      addToRef(BB, IB) {
        return IB.r = this.r + BB.r, IB.g = this.g + BB.g, IB.b = this.b + BB.b, IB
      }
      subtract(BB) {
        return new hB(this.r - BB.r, this.g - BB.g, this.b - BB.b)
      }
      subtractToRef(BB, IB) {
        return IB.r = this.r - BB.r, IB.g = this.g - BB.g, IB.b = this.b - BB.b, IB
      }
      VTB(BB) {
        return this.r -= BB.r, this.g -= BB.g, this.b -= BB.b, this
      }
      subtractFromFloats(BB, IB, ZB) {
        return new hB(this.r - BB, this.g - IB, this.b - ZB)
      }
      subtractFromFloatsToRef(BB, IB, ZB, TB) {
        return TB.r = this.r - BB, TB.g = this.g - IB, TB.b = this.b - ZB, TB
      }
      clone() {
        return new hB(this.r, this.g, this.b)
      }
      TY(BB) {
        return this.r = BB.r, this.g = BB.g, this.b = BB.b, this
      }
      cBB(BB, IB, ZB) {
        return this.r = BB, this.g = IB, this.b = ZB, this
      }
      set(BB, IB, ZB) {
        return this.cBB(BB, IB, ZB)
      }
      K9(BB) {
        return this.r = this.g = this.b = BB, this
      }
      toHexString() {
        const BB = Math.round(255 * this.r),
          IB = Math.round(255 * this.g),
          ZB = Math.round(255 * this.b);
        return "#" + (0, oB.ToHex)(BB) + (0, oB.ToHex)(IB) + (0, oB.ToHex)(ZB)
      }
      fromHexString(BB) {
        return "#" !== BB.substring(0, 1) || 7 !== BB.length || (this.r = parseInt(BB.substring(1, 3), 16) / 255, this.g = parseInt(BB.substring(3, 5), 16) / 255, this.b = parseInt(BB.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new hB)
      }
      toHSVToRef(BB) {
        const IB = this.r,
          ZB = this.g,
          TB = this.b,
          JB = Math.max(IB, ZB, TB),
          oB = Math.min(IB, ZB, TB);
        let GB = 0,
          vB = 0;
        const kB = JB,
          cB = JB - oB;
        return 0 !== JB && (vB = cB / JB), JB != oB && (JB == IB ? (GB = (ZB - TB) / cB, ZB < TB && (GB += 6)) : JB == ZB ? GB = (TB - IB) / cB + 2 : JB == TB && (GB = (IB - ZB) / cB + 4), GB *= 60), BB.r = GB, BB.g = vB, BB.b = kB, BB
      }
      toLinearSpace() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const IB = new hB;
        return this.toLinearSpaceToRef(IB, BB), IB
      }
      toLinearSpaceToRef(BB) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (BB.r = kB(this.r), BB.g = kB(this.g), BB.b = kB(this.b)) : (BB.r = vB(this.r), BB.g = vB(this.g), BB.b = vB(this.b)), this
      }
      toGammaSpace() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const IB = new hB;
        return this.toGammaSpaceToRef(IB, BB), IB
      }
      toGammaSpaceToRef(BB) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (BB.r = nB(this.r), BB.g = nB(this.g), BB.b = nB(this.b)) : (BB.r = cB(this.r), BB.g = cB(this.g), BB.b = cB(this.b)), this
      }
      static HSVtoRGBToRef(BB, IB, ZB, TB) {
        const JB = ZB * IB,
          oB = BB / 60,
          GB = JB * (1 - Math.abs(oB % 2 - 1));
        let vB = 0,
          kB = 0,
          cB = 0;
        oB >= 0 && oB <= 1 ? (vB = JB, kB = GB) : oB >= 1 && oB <= 2 ? (vB = GB, kB = JB) : oB >= 2 && oB <= 3 ? (kB = JB, cB = GB) : oB >= 3 && oB <= 4 ? (kB = GB, cB = JB) : oB >= 4 && oB <= 5 ? (vB = GB, cB = JB) : oB >= 5 && oB <= 6 && (vB = JB, cB = GB);
        const nB = ZB - JB;
        return TB.r = vB + nB, TB.g = kB + nB, TB.b = cB + nB, TB
      }
      static FromHSV(BB, IB, ZB) {
        const TB = new hB(0, 0, 0);
        return hB.HSVtoRGBToRef(BB, IB, ZB, TB), TB
      }
      static FromHexString(BB) {
        return new hB(0, 0, 0).fromHexString(BB)
      }
      static FromArray(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new hB(BB[IB], BB[IB + 1], BB[IB + 2])
      }
      static FromArrayToRef(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        ZB.r = BB[IB], ZB.g = BB[IB + 1], ZB.b = BB[IB + 2]
      }
      static FromInts(BB, IB, ZB) {
        return new hB(BB / 255, IB / 255, ZB / 255)
      }
      static Lerp(BB, IB, ZB) {
        const TB = new hB(0, 0, 0);
        return hB.LerpToRef(BB, IB, ZB, TB), TB
      }
      static LerpToRef(BB, IB, ZB, TB) {
        TB.r = BB.r + (IB.r - BB.r) * ZB, TB.g = BB.g + (IB.g - BB.g) * ZB, TB.b = BB.b + (IB.b - BB.b) * ZB
      }
      static Hermite(BB, IB, ZB, TB, JB) {
        const oB = JB * JB,
          GB = JB * oB,
          vB = 2 * GB - 3 * oB + 1,
          kB = -2 * GB + 3 * oB,
          cB = GB - 2 * oB + JB,
          nB = GB - oB,
          zB = BB.r * vB + ZB.r * kB + IB.r * cB + TB.r * nB,
          FB = BB.g * vB + ZB.g * kB + IB.g * cB + TB.g * nB,
          NB = BB.b * vB + ZB.b * kB + IB.b * cB + TB.b * nB;
        return new hB(zB, FB, NB)
      }
      static Hermite1stDerivative(BB, IB, ZB, TB, JB) {
        const oB = hB.Black();
        return this.Hermite1stDerivativeToRef(BB, IB, ZB, TB, JB, oB), oB
      }
      static Hermite1stDerivativeToRef(BB, IB, ZB, TB, JB, oB) {
        const GB = JB * JB;
        oB.r = 6 * (GB - JB) * BB.r + (3 * GB - 4 * JB + 1) * IB.r + 6 * (-GB + JB) * ZB.r + (3 * GB - 2 * JB) * TB.r, oB.g = 6 * (GB - JB) * BB.g + (3 * GB - 4 * JB + 1) * IB.g + 6 * (-GB + JB) * ZB.g + (3 * GB - 2 * JB) * TB.g, oB.b = 6 * (GB - JB) * BB.b + (3 * GB - 4 * JB + 1) * IB.b + 6 * (-GB + JB) * ZB.b + (3 * GB - 2 * JB) * TB.b
      }
      static Red() {
        return new hB(1, 0, 0)
      }
      static Green() {
        return new hB(0, 1, 0)
      }
      static Blue() {
        return new hB(0, 0, 1)
      }
      static Black() {
        return new hB(0, 0, 0)
      }
      static get BlackReadOnly() {
        return hB._BlackReadOnly
      }
      static White() {
        return new hB(1, 1, 1)
      }
      static Purple() {
        return new hB(.5, 0, .5)
      }
      static Magenta() {
        return new hB(1, 0, 1)
      }
      static Yellow() {
        return new hB(1, 1, 0)
      }
      static Gray() {
        return new hB(.5, .5, .5)
      }
      static Teal() {
        return new hB(0, 1, 1)
      }
      static Random() {
        return new hB(Math.random(), Math.random(), Math.random())
      }
    }
    hB._V8PerformanceHack = new hB(.5, .5, .5), hB._BlackReadOnly = hB.Black();
    class zB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = BB, this.g = IB, this.b = ZB, this.a = TB
      }
      HTB() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BB[IB] = this.r, BB[IB + 1] = this.g, BB[IB + 2] = this.b, BB[IB + 3] = this.a, this
      }
      WZB(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = BB[IB], this.g = BB[IB + 1], this.b = BB[IB + 2], this.a = BB[IB + 3], this
      }
      equals(BB) {
        return BB && this.r === BB.r && this.g === BB.g && this.b === BB.b && this.a === BB.a
      }
      add(BB) {
        return new zB(this.r + BB.r, this.g + BB.g, this.b + BB.b, this.a + BB.a)
      }
      addToRef(BB, IB) {
        return IB.r = this.r + BB.r, IB.g = this.g + BB.g, IB.b = this.b + BB.b, IB.a = this.a + BB.a, IB
      }
      addInPlace(BB) {
        return this.r += BB.r, this.g += BB.g, this.b += BB.b, this.a += BB.a, this
      }
      addInPlaceFromFloats(BB, IB, ZB, TB) {
        return this.r += BB, this.g += IB, this.b += ZB, this.a += TB, this
      }
      subtract(BB) {
        return new zB(this.r - BB.r, this.g - BB.g, this.b - BB.b, this.a - BB.a)
      }
      subtractToRef(BB, IB) {
        return IB.r = this.r - BB.r, IB.g = this.g - BB.g, IB.b = this.b - BB.b, IB.a = this.a - BB.a, IB
      }
      VTB(BB) {
        return this.r -= BB.r, this.g -= BB.g, this.b -= BB.b, this.a -= BB.a, this
      }
      subtractFromFloats(BB, IB, ZB, TB) {
        return new zB(this.r - BB, this.g - IB, this.b - ZB, this.a - TB)
      }
      subtractFromFloatsToRef(BB, IB, ZB, TB, JB) {
        return JB.r = this.r - BB, JB.g = this.g - IB, JB.b = this.b - ZB, JB.a = this.a - TB, JB
      }
      scale(BB) {
        return new zB(this.r * BB, this.g * BB, this.b * BB, this.a * BB)
      }
      scaleInPlace(BB) {
        return this.r *= BB, this.g *= BB, this.b *= BB, this.a *= BB, this
      }
      scaleToRef(BB, IB) {
        return IB.r = this.r * BB, IB.g = this.g * BB, IB.b = this.b * BB, IB.a = this.a * BB, IB
      }
      scaleAndAddToRef(BB, IB) {
        return IB.r += this.r * BB, IB.g += this.g * BB, IB.b += this.b * BB, IB.a += this.a * BB, IB
      }
      clampToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        return ZB.r = (0, oB.Clamp)(this.r, BB, IB), ZB.g = (0, oB.Clamp)(this.g, BB, IB), ZB.b = (0, oB.Clamp)(this.b, BB, IB), ZB.a = (0, oB.Clamp)(this.a, BB, IB), ZB
      }
      multiply(BB) {
        return new zB(this.r * BB.r, this.g * BB.g, this.b * BB.b, this.a * BB.a)
      }
      multiplyToRef(BB, IB) {
        return IB.r = this.r * BB.r, IB.g = this.g * BB.g, IB.b = this.b * BB.b, IB.a = this.a * BB.a, IB
      }
      multiplyInPlace(BB) {
        return this.r *= BB.r, this.g *= BB.g, this.b *= BB.b, this.a *= BB.a, this
      }
      multiplyByFloats(BB, IB, ZB, TB) {
        return new zB(this.r * BB, this.g * IB, this.b * ZB, this.a * TB)
      }
      divide(BB) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(BB, IB) {
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
      minimizeInPlaceFromFloats(BB, IB, ZB, TB) {
        return this.r = Math.min(BB, this.r), this.g = Math.min(IB, this.g), this.b = Math.min(ZB, this.b), this.a = Math.min(TB, this.a), this
      }
      maximizeInPlaceFromFloats(BB, IB, ZB, TB) {
        return this.r = Math.max(BB, this.r), this.g = Math.max(IB, this.g), this.b = Math.max(ZB, this.b), this.a = Math.max(TB, this.a), this
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
      dv() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(BB) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : JB.d;
        return (0, oB.WithinEpsilon)(this.r, BB.r, IB) && (0, oB.WithinEpsilon)(this.g, BB.g, IB) && (0, oB.WithinEpsilon)(this.b, BB.b, IB) && (0, oB.WithinEpsilon)(this.a, BB.a, IB)
      }
      kvB(BB, IB, ZB, TB) {
        return this.r === BB && this.g === IB && this.b === ZB && this.a === TB
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
        return (new zB).TY(this)
      }
      TY(BB) {
        return this.r = BB.r, this.g = BB.g, this.b = BB.b, this.a = BB.a, this
      }
      cBB(BB, IB, ZB, TB) {
        return this.r = BB, this.g = IB, this.b = ZB, this.a = TB, this
      }
      set(BB, IB, ZB, TB) {
        return this.cBB(BB, IB, ZB, TB)
      }
      K9(BB) {
        return this.r = this.g = this.b = this.a = BB, this
      }
      toHexString() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const IB = Math.round(255 * this.r),
          ZB = Math.round(255 * this.g),
          TB = Math.round(255 * this.b);
        if (BB) return "#" + (0, oB.ToHex)(IB) + (0, oB.ToHex)(ZB) + (0, oB.ToHex)(TB);
        const JB = Math.round(255 * this.a);
        return "#" + (0, oB.ToHex)(IB) + (0, oB.ToHex)(ZB) + (0, oB.ToHex)(TB) + (0, oB.ToHex)(JB)
      }
      fromHexString(BB) {
        return "#" !== BB.substring(0, 1) || 9 !== BB.length && 7 !== BB.length || (this.r = parseInt(BB.substring(1, 3), 16) / 255, this.g = parseInt(BB.substring(3, 5), 16) / 255, this.b = parseInt(BB.substring(5, 7), 16) / 255, 9 === BB.length && (this.a = parseInt(BB.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const IB = new zB;
        return this.toLinearSpaceToRef(IB, BB), IB
      }
      toLinearSpaceToRef(BB) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (BB.r = kB(this.r), BB.g = kB(this.g), BB.b = kB(this.b)) : (BB.r = vB(this.r), BB.g = vB(this.g), BB.b = vB(this.b)), BB.a = this.a, this
      }
      toGammaSpace() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const IB = new zB;
        return this.toGammaSpaceToRef(IB, BB), IB
      }
      toGammaSpaceToRef(BB) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (BB.r = nB(this.r), BB.g = nB(this.g), BB.b = nB(this.b)) : (BB.r = cB(this.r), BB.g = cB(this.g), BB.b = cB(this.b)), BB.a = this.a, this
      }
      static FromHexString(BB) {
        return "#" !== BB.substring(0, 1) || 9 !== BB.length && 7 !== BB.length ? new zB(0, 0, 0, 0) : new zB(0, 0, 0, 1).fromHexString(BB)
      }
      static Lerp(BB, IB, ZB) {
        return zB.LerpToRef(BB, IB, ZB, new zB)
      }
      static LerpToRef(BB, IB, ZB, TB) {
        return TB.r = BB.r + (IB.r - BB.r) * ZB, TB.g = BB.g + (IB.g - BB.g) * ZB, TB.b = BB.b + (IB.b - BB.b) * ZB, TB.a = BB.a + (IB.a - BB.a) * ZB, TB
      }
      static Hermite(BB, IB, ZB, TB, JB) {
        const oB = JB * JB,
          GB = JB * oB,
          vB = 2 * GB - 3 * oB + 1,
          kB = -2 * GB + 3 * oB,
          cB = GB - 2 * oB + JB,
          nB = GB - oB,
          hB = BB.r * vB + ZB.r * kB + IB.r * cB + TB.r * nB,
          FB = BB.g * vB + ZB.g * kB + IB.g * cB + TB.g * nB,
          NB = BB.b * vB + ZB.b * kB + IB.b * cB + TB.b * nB,
          gB = BB.a * vB + ZB.a * kB + IB.a * cB + TB.a * nB;
        return new zB(hB, FB, NB, gB)
      }
      static Hermite1stDerivative(BB, IB, ZB, TB, JB) {
        const oB = new zB;
        return this.Hermite1stDerivativeToRef(BB, IB, ZB, TB, JB, oB), oB
      }
      static Hermite1stDerivativeToRef(BB, IB, ZB, TB, JB, oB) {
        const GB = JB * JB;
        oB.r = 6 * (GB - JB) * BB.r + (3 * GB - 4 * JB + 1) * IB.r + 6 * (-GB + JB) * ZB.r + (3 * GB - 2 * JB) * TB.r, oB.g = 6 * (GB - JB) * BB.g + (3 * GB - 4 * JB + 1) * IB.g + 6 * (-GB + JB) * ZB.g + (3 * GB - 2 * JB) * TB.g, oB.b = 6 * (GB - JB) * BB.b + (3 * GB - 4 * JB + 1) * IB.b + 6 * (-GB + JB) * ZB.b + (3 * GB - 2 * JB) * TB.b, oB.a = 6 * (GB - JB) * BB.a + (3 * GB - 4 * JB + 1) * IB.a + 6 * (-GB + JB) * ZB.a + (3 * GB - 2 * JB) * TB.a
      }
      static FromColor3(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new zB(BB.r, BB.g, BB.b, IB)
      }
      static FromArray(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new zB(BB[IB], BB[IB + 1], BB[IB + 2], BB[IB + 3])
      }
      static FromArrayToRef(BB) {
        let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZB = arguments.length > 2 ? arguments[2] : void 0;
        ZB.r = BB[IB], ZB.g = BB[IB + 1], ZB.b = BB[IB + 2], ZB.a = BB[IB + 3]
      }
      static FromInts(BB, IB, ZB, TB) {
        return new zB(BB / 255, IB / 255, ZB / 255, TB / 255)
      }
      static CheckColors4(BB, IB) {
        if (BB.length === 3 * IB) {
          const IB = [];
          for (let ZB = 0; ZB < BB.length; ZB += 3) {
            const TB = ZB / 3 * 4;
            IB[TB] = BB[ZB], IB[TB + 1] = BB[ZB + 1], IB[TB + 2] = BB[ZB + 2], IB[TB + 3] = 1
          }
          return IB
        }
        return BB
      }
    }
    zB._V8PerformanceHack = new zB(.5, .5, .5, .5);
    class FB {}
    FB.Color3 = (0, TB.b)(3, hB.Black), FB.Color4 = (0, TB.b)(3, (() => new zB(0, 0, 0, 0)));
    let NB = !1;

    function gB() {
      NB || (NB = !0, Object.defineProperties(hB.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(zB.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, GB.i)("BABYLON.Color3", hB), (0, GB.i)("BABYLON.Color4", zB))
    }
  },
  37129: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => oB,
      e: () => TB,
      g: () => JB
    });
    const TB = 1 / 2.2,
      JB = 2.2;
    Math.sqrt(5);
    let oB = .001
  },
  37158: (BB, IB, ZB) => {
    function TB(BB) {
      return parseInt(BB.toString().replace(/\W/g, ""))
    }

    function JB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(BB - IB) <= ZB
    }

    function oB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return BB < IB - TB || BB > ZB + TB
    }

    function GB(BB, IB) {
      return BB === IB ? BB : Math.random() * (IB - BB) + BB
    }

    function vB(BB, IB, ZB) {
      return BB + (IB - BB) * ZB
    }

    function kB(BB, IB, ZB) {
      let TB = qB(IB - BB, 360);
      return TB > 180 && (TB -= 360), BB + TB * zB(ZB)
    }

    function cB(BB, IB, ZB) {
      let TB;
      return TB = BB != IB ? zB((ZB - BB) / (IB - BB)) : 0, TB
    }

    function nB(BB, IB, ZB, TB, JB) {
      const oB = JB * JB,
        GB = JB * oB;
      return BB * (2 * GB - 3 * oB + 1) + ZB * (-2 * GB + 3 * oB) + IB * (GB - 2 * oB + JB) + TB * (GB - oB)
    }

    function hB(BB, IB, ZB, TB, JB) {
      const oB = JB * JB;
      return 6 * (oB - JB) * BB + (3 * oB - 4 * JB + 1) * IB + 6 * (-oB + JB) * ZB + (3 * oB - 2 * JB) * TB
    }

    function zB(BB) {
      let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(ZB, Math.max(IB, BB))
    }

    function FB(BB) {
      return BB -= 2 * Math.PI * Math.floor((BB + Math.PI) / (2 * Math.PI))
    }

    function NB(BB) {
      const IB = BB.toString(16);
      return BB <= 15 ? ("0" + IB).toUpperCase() : IB.toUpperCase()
    }

    function gB(BB) {
      if (Math.log2) return Math.floor(Math.log2(BB));
      if (BB < 0) return NaN;
      if (0 === BB) return -1 / 0;
      let IB = 0;
      if (BB < 1) {
        for (; BB < 1;) IB++, BB *= 2;
        IB = -IB
      } else if (BB > 1)
        for (; BB > 1;) IB++, BB = Math.floor(BB / 2);
      return IB
    }

    function qB(BB, IB) {
      return BB - Math.floor(BB / IB) * IB
    }

    function yB(BB, IB, ZB) {
      return (BB - IB) / (ZB - IB)
    }

    function UB(BB, IB, ZB) {
      return BB * (ZB - IB) + IB
    }

    function WB(BB, IB) {
      let ZB = qB(IB - BB, 360);
      return ZB > 180 && (ZB -= 360), ZB
    }

    function dB(BB, IB) {
      const ZB = qB(BB, 2 * IB);
      return IB - Math.abs(ZB - IB)
    }

    function CB(BB, IB, ZB) {
      let TB = zB(ZB);
      return TB = -2 * TB * TB * TB + 3 * TB * TB, IB * TB + BB * (1 - TB)
    }

    function QB(BB, IB, ZB) {
      let TB;
      return TB = Math.abs(IB - BB) <= ZB ? IB : BB + Math.sign(IB - BB) * ZB, TB
    }

    function sB(BB, IB, ZB) {
      const TB = WB(BB, IB);
      let JB;
      return JB = -ZB < TB && TB < ZB ? IB : QB(BB, IB = BB + TB, ZB), JB
    }

    function wB(BB, IB, ZB) {
      return (BB - IB) / (ZB - IB)
    }

    function OB(BB, IB, ZB) {
      return (ZB - IB) * BB + IB
    }

    function YB(BB, IB) {
      const ZB = BB % IB;
      return 0 === ZB ? IB : YB(IB, ZB)
    }
    ZB.r(IB), ZB.d(IB, {
      Clamp: () => zB,
      DeltaAngle: () => WB,
      Denormalize: () => UB,
      ExtractAsInt: () => TB,
      Hermite: () => nB,
      Hermite1stDerivative: () => hB,
      HighestCommonFactor: () => YB,
      ILog2: () => gB,
      InverseLerp: () => cB,
      Lerp: () => vB,
      LerpAngle: () => kB,
      MoveTowards: () => QB,
      MoveTowardsAngle: () => sB,
      Normalize: () => yB,
      NormalizeRadians: () => FB,
      OutsideRange: () => oB,
      PercentToRange: () => OB,
      PingPong: () => dB,
      RandomRange: () => GB,
      RangeToPercent: () => wB,
      Repeat: () => qB,
      SmoothStep: () => CB,
      ToHex: () => NB,
      WithinEpsilon: () => JB
    })
  },
  37131: (BB, IB, ZB) => {
    function TB(BB, IB) {
      const ZB = [];
      for (let TB = 0; TB < BB; ++TB) ZB.push(IB());
      return ZB
    }

    function JB(BB, IB) {
      return TB(BB, IB)
    }
    ZB.d(IB, {
      b: () => TB,
      f: () => JB,
      g: () => GB
    });
    const oB = ["push", "splice", "pop", "shift", "unshift"];

    function GB(BB, IB) {
      const ZB = oB.map((ZB => function(BB, IB, ZB) {
        const TB = BB[IB];
        if ("function" !== typeof TB) return null;
        const JB = function() {
          const TB = BB.length,
            oB = JB.previous.apply(BB, arguments);
          return ZB(IB, TB), oB
        };
        return TB.next = JB, JB.previous = TB, BB[IB] = JB, () => {
          const ZB = JB.previous;
          if (!ZB) return;
          const TB = JB.next;
          TB ? (ZB.next = TB, TB.previous = ZB) : (ZB.next = void 0, BB[IB] = ZB), JB.next = void 0, JB.previous = void 0
        }
      }(BB, ZB, IB)));
      return () => {
        for (const BB of ZB) BB?.()
      }
    }
  },
  37170: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => oB,
      i: () => JB
    });
    const TB = {};

    function JB(BB, IB) {
      TB[BB] = IB
    }

    function oB(BB) {
      return TB[BB]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);