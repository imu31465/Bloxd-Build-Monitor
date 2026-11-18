export const id = 215;
export const ids = [215];
export const modules = {
  36183: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => kB,
      d: () => LB,
      f: () => uB,
      h: () => OB
    });
    var VB = dB(36137),
      yB = dB(36132),
      pB = dB(36157),
      lB = dB(36166);

    function JB(BB) {
      return Math.pow(BB, yB.j)
    }

    function YB(BB) {
      return BB <= .04045 ? .0773993808 * BB : Math.pow(.947867299 * (BB + .055), 2.4)
    }

    function gB(BB) {
      return Math.pow(BB, yB.f)
    }

    function oB(BB) {
      return BB <= .0031308 ? 12.92 * BB : 1.055 * Math.pow(BB, .41666) - .055
    }
    class kB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = BB, this.g = TB, this.b = dB
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
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BB[TB] = this.r, BB[TB + 1] = this.g, BB[TB + 2] = this.b, this
      }
      HdB(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return kB.FromArrayToRef(BB, TB, this), this
      }
      toColor4() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new LB(this.r, this.g, this.b, BB)
      }
      FVB() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(BB) {
        return new kB(this.r * BB.r, this.g * BB.g, this.b * BB.b)
      }
      multiplyToRef(BB, TB) {
        return TB.r = this.r * BB.r, TB.g = this.g * BB.g, TB.b = this.b * BB.b, TB
      }
      multiplyInPlace(BB) {
        return this.r *= BB.r, this.g *= BB.g, this.b *= BB.b, this
      }
      multiplyByFloats(BB, TB, dB) {
        return new kB(this.r * BB, this.g * TB, this.b * dB)
      }
      divide(BB) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(BB, TB) {
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
      minimizeInPlaceFromFloats(BB, TB, dB) {
        return this.r = Math.min(BB, this.r), this.g = Math.min(TB, this.g), this.b = Math.min(dB, this.b), this
      }
      maximizeInPlaceFromFloats(BB, TB, dB) {
        return this.r = Math.max(BB, this.r), this.g = Math.max(TB, this.g), this.b = Math.max(dB, this.b), this
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
      equalsFloats(BB, TB, dB) {
        return this.dJB(BB, TB, dB)
      }
      dJB(BB, TB, dB) {
        return this.r === BB && this.g === TB && this.b === dB
      }
      equalsWithEpsilon(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yB.b;
        return (0, pB.WithinEpsilon)(this.r, BB.r, TB) && (0, pB.WithinEpsilon)(this.g, BB.g, TB) && (0, pB.WithinEpsilon)(this.b, BB.b, TB)
      }
      fp() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(BB) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(BB) {
        return new kB(this.r * BB, this.g * BB, this.b * BB)
      }
      scaleInPlace(BB) {
        return this.r *= BB, this.g *= BB, this.b *= BB, this
      }
      scaleToRef(BB, TB) {
        return TB.r = this.r * BB, TB.g = this.g * BB, TB.b = this.b * BB, TB
      }
      scaleAndAddToRef(BB, TB) {
        return TB.r += this.r * BB, TB.g += this.g * BB, TB.b += this.b * BB, TB
      }
      clampToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        return dB.r = (0, pB.Clamp)(this.r, BB, TB), dB.g = (0, pB.Clamp)(this.g, BB, TB), dB.b = (0, pB.Clamp)(this.b, BB, TB), dB
      }
      add(BB) {
        return new kB(this.r + BB.r, this.g + BB.g, this.b + BB.b)
      }
      addInPlace(BB) {
        return this.r += BB.r, this.g += BB.g, this.b += BB.b, this
      }
      addInPlaceFromFloats(BB, TB, dB) {
        return this.r += BB, this.g += TB, this.b += dB, this
      }
      addToRef(BB, TB) {
        return TB.r = this.r + BB.r, TB.g = this.g + BB.g, TB.b = this.b + BB.b, TB
      }
      subtract(BB) {
        return new kB(this.r - BB.r, this.g - BB.g, this.b - BB.b)
      }
      subtractToRef(BB, TB) {
        return TB.r = this.r - BB.r, TB.g = this.g - BB.g, TB.b = this.b - BB.b, TB
      }
      qVB(BB) {
        return this.r -= BB.r, this.g -= BB.g, this.b -= BB.b, this
      }
      subtractFromFloats(BB, TB, dB) {
        return new kB(this.r - BB, this.g - TB, this.b - dB)
      }
      subtractFromFloatsToRef(BB, TB, dB, VB) {
        return VB.r = this.r - BB, VB.g = this.g - TB, VB.b = this.b - dB, VB
      }
      clone() {
        return new kB(this.r, this.g, this.b)
      }
      bdB(BB) {
        return this.r = BB.r, this.g = BB.g, this.b = BB.b, this
      }
      YBB(BB, TB, dB) {
        return this.r = BB, this.g = TB, this.b = dB, this
      }
      set(BB, TB, dB) {
        return this.YBB(BB, TB, dB)
      }
      A4(BB) {
        return this.r = this.g = this.b = BB, this
      }
      toHexString() {
        const BB = Math.round(255 * this.r),
          TB = Math.round(255 * this.g),
          dB = Math.round(255 * this.b);
        return "#" + (0, pB.ToHex)(BB) + (0, pB.ToHex)(TB) + (0, pB.ToHex)(dB)
      }
      fromHexString(BB) {
        return "#" !== BB.substring(0, 1) || 7 !== BB.length || (this.r = parseInt(BB.substring(1, 3), 16) / 255, this.g = parseInt(BB.substring(3, 5), 16) / 255, this.b = parseInt(BB.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new kB)
      }
      toHSVToRef(BB) {
        const TB = this.r,
          dB = this.g,
          VB = this.b,
          yB = Math.max(TB, dB, VB),
          pB = Math.min(TB, dB, VB);
        let lB = 0,
          JB = 0;
        const YB = yB,
          gB = yB - pB;
        return 0 !== yB && (JB = gB / yB), yB != pB && (yB == TB ? (lB = (dB - VB) / gB, dB < VB && (lB += 6)) : yB == dB ? lB = (VB - TB) / gB + 2 : yB == VB && (lB = (TB - dB) / gB + 4), lB *= 60), BB.r = lB, BB.g = JB, BB.b = YB, BB
      }
      toLinearSpace() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const TB = new kB;
        return this.toLinearSpaceToRef(TB, BB), TB
      }
      toLinearSpaceToRef(BB) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (BB.r = YB(this.r), BB.g = YB(this.g), BB.b = YB(this.b)) : (BB.r = JB(this.r), BB.g = JB(this.g), BB.b = JB(this.b)), this
      }
      toGammaSpace() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const TB = new kB;
        return this.toGammaSpaceToRef(TB, BB), TB
      }
      toGammaSpaceToRef(BB) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (BB.r = oB(this.r), BB.g = oB(this.g), BB.b = oB(this.b)) : (BB.r = gB(this.r), BB.g = gB(this.g), BB.b = gB(this.b)), this
      }
      static HSVtoRGBToRef(BB, TB, dB, VB) {
        const yB = dB * TB,
          pB = BB / 60,
          lB = yB * (1 - Math.abs(pB % 2 - 1));
        let JB = 0,
          YB = 0,
          gB = 0;
        pB >= 0 && pB <= 1 ? (JB = yB, YB = lB) : pB >= 1 && pB <= 2 ? (JB = lB, YB = yB) : pB >= 2 && pB <= 3 ? (YB = yB, gB = lB) : pB >= 3 && pB <= 4 ? (YB = lB, gB = yB) : pB >= 4 && pB <= 5 ? (JB = lB, gB = yB) : pB >= 5 && pB <= 6 && (JB = yB, gB = lB);
        const oB = dB - yB;
        return VB.r = JB + oB, VB.g = YB + oB, VB.b = gB + oB, VB
      }
      static FromHSV(BB, TB, dB) {
        const VB = new kB(0, 0, 0);
        return kB.HSVtoRGBToRef(BB, TB, dB, VB), VB
      }
      static FromHexString(BB) {
        return new kB(0, 0, 0).fromHexString(BB)
      }
      static FromArray(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new kB(BB[TB], BB[TB + 1], BB[TB + 2])
      }
      static FromArrayToRef(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        dB.r = BB[TB], dB.g = BB[TB + 1], dB.b = BB[TB + 2]
      }
      static FromInts(BB, TB, dB) {
        return new kB(BB / 255, TB / 255, dB / 255)
      }
      static Lerp(BB, TB, dB) {
        const VB = new kB(0, 0, 0);
        return kB.LerpToRef(BB, TB, dB, VB), VB
      }
      static LerpToRef(BB, TB, dB, VB) {
        VB.r = BB.r + (TB.r - BB.r) * dB, VB.g = BB.g + (TB.g - BB.g) * dB, VB.b = BB.b + (TB.b - BB.b) * dB
      }
      static Hermite(BB, TB, dB, VB, yB) {
        const pB = yB * yB,
          lB = yB * pB,
          JB = 2 * lB - 3 * pB + 1,
          YB = -2 * lB + 3 * pB,
          gB = lB - 2 * pB + yB,
          oB = lB - pB,
          LB = BB.r * JB + dB.r * YB + TB.r * gB + VB.r * oB,
          OB = BB.g * JB + dB.g * YB + TB.g * gB + VB.g * oB,
          DB = BB.b * JB + dB.b * YB + TB.b * gB + VB.b * oB;
        return new kB(LB, OB, DB)
      }
      static Hermite1stDerivative(BB, TB, dB, VB, yB) {
        const pB = kB.Black();
        return this.Hermite1stDerivativeToRef(BB, TB, dB, VB, yB, pB), pB
      }
      static Hermite1stDerivativeToRef(BB, TB, dB, VB, yB, pB) {
        const lB = yB * yB;
        pB.r = 6 * (lB - yB) * BB.r + (3 * lB - 4 * yB + 1) * TB.r + 6 * (-lB + yB) * dB.r + (3 * lB - 2 * yB) * VB.r, pB.g = 6 * (lB - yB) * BB.g + (3 * lB - 4 * yB + 1) * TB.g + 6 * (-lB + yB) * dB.g + (3 * lB - 2 * yB) * VB.g, pB.b = 6 * (lB - yB) * BB.b + (3 * lB - 4 * yB + 1) * TB.b + 6 * (-lB + yB) * dB.b + (3 * lB - 2 * yB) * VB.b
      }
      static Red() {
        return new kB(1, 0, 0)
      }
      static Green() {
        return new kB(0, 1, 0)
      }
      static Blue() {
        return new kB(0, 0, 1)
      }
      static Black() {
        return new kB(0, 0, 0)
      }
      static get BlackReadOnly() {
        return kB._BlackReadOnly
      }
      static White() {
        return new kB(1, 1, 1)
      }
      static Purple() {
        return new kB(.5, 0, .5)
      }
      static Magenta() {
        return new kB(1, 0, 1)
      }
      static Yellow() {
        return new kB(1, 1, 0)
      }
      static Gray() {
        return new kB(.5, .5, .5)
      }
      static Teal() {
        return new kB(0, 1, 1)
      }
      static Random() {
        return new kB(Math.random(), Math.random(), Math.random())
      }
    }
    kB._V8PerformanceHack = new kB(.5, .5, .5), kB._BlackReadOnly = kB.Black();
    class LB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = BB, this.g = TB, this.b = dB, this.a = VB
      }
      FVB() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BB[TB] = this.r, BB[TB + 1] = this.g, BB[TB + 2] = this.b, BB[TB + 3] = this.a, this
      }
      HdB(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = BB[TB], this.g = BB[TB + 1], this.b = BB[TB + 2], this.a = BB[TB + 3], this
      }
      equals(BB) {
        return BB && this.r === BB.r && this.g === BB.g && this.b === BB.b && this.a === BB.a
      }
      add(BB) {
        return new LB(this.r + BB.r, this.g + BB.g, this.b + BB.b, this.a + BB.a)
      }
      addToRef(BB, TB) {
        return TB.r = this.r + BB.r, TB.g = this.g + BB.g, TB.b = this.b + BB.b, TB.a = this.a + BB.a, TB
      }
      addInPlace(BB) {
        return this.r += BB.r, this.g += BB.g, this.b += BB.b, this.a += BB.a, this
      }
      addInPlaceFromFloats(BB, TB, dB, VB) {
        return this.r += BB, this.g += TB, this.b += dB, this.a += VB, this
      }
      subtract(BB) {
        return new LB(this.r - BB.r, this.g - BB.g, this.b - BB.b, this.a - BB.a)
      }
      subtractToRef(BB, TB) {
        return TB.r = this.r - BB.r, TB.g = this.g - BB.g, TB.b = this.b - BB.b, TB.a = this.a - BB.a, TB
      }
      qVB(BB) {
        return this.r -= BB.r, this.g -= BB.g, this.b -= BB.b, this.a -= BB.a, this
      }
      subtractFromFloats(BB, TB, dB, VB) {
        return new LB(this.r - BB, this.g - TB, this.b - dB, this.a - VB)
      }
      subtractFromFloatsToRef(BB, TB, dB, VB, yB) {
        return yB.r = this.r - BB, yB.g = this.g - TB, yB.b = this.b - dB, yB.a = this.a - VB, yB
      }
      scale(BB) {
        return new LB(this.r * BB, this.g * BB, this.b * BB, this.a * BB)
      }
      scaleInPlace(BB) {
        return this.r *= BB, this.g *= BB, this.b *= BB, this.a *= BB, this
      }
      scaleToRef(BB, TB) {
        return TB.r = this.r * BB, TB.g = this.g * BB, TB.b = this.b * BB, TB.a = this.a * BB, TB
      }
      scaleAndAddToRef(BB, TB) {
        return TB.r += this.r * BB, TB.g += this.g * BB, TB.b += this.b * BB, TB.a += this.a * BB, TB
      }
      clampToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        return dB.r = (0, pB.Clamp)(this.r, BB, TB), dB.g = (0, pB.Clamp)(this.g, BB, TB), dB.b = (0, pB.Clamp)(this.b, BB, TB), dB.a = (0, pB.Clamp)(this.a, BB, TB), dB
      }
      multiply(BB) {
        return new LB(this.r * BB.r, this.g * BB.g, this.b * BB.b, this.a * BB.a)
      }
      multiplyToRef(BB, TB) {
        return TB.r = this.r * BB.r, TB.g = this.g * BB.g, TB.b = this.b * BB.b, TB.a = this.a * BB.a, TB
      }
      multiplyInPlace(BB) {
        return this.r *= BB.r, this.g *= BB.g, this.b *= BB.b, this.a *= BB.a, this
      }
      multiplyByFloats(BB, TB, dB, VB) {
        return new LB(this.r * BB, this.g * TB, this.b * dB, this.a * VB)
      }
      divide(BB) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(BB, TB) {
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
      minimizeInPlaceFromFloats(BB, TB, dB, VB) {
        return this.r = Math.min(BB, this.r), this.g = Math.min(TB, this.g), this.b = Math.min(dB, this.b), this.a = Math.min(VB, this.a), this
      }
      maximizeInPlaceFromFloats(BB, TB, dB, VB) {
        return this.r = Math.max(BB, this.r), this.g = Math.max(TB, this.g), this.b = Math.max(dB, this.b), this.a = Math.max(VB, this.a), this
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
      fp() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(BB) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yB.b;
        return (0, pB.WithinEpsilon)(this.r, BB.r, TB) && (0, pB.WithinEpsilon)(this.g, BB.g, TB) && (0, pB.WithinEpsilon)(this.b, BB.b, TB) && (0, pB.WithinEpsilon)(this.a, BB.a, TB)
      }
      dJB(BB, TB, dB, VB) {
        return this.r === BB && this.g === TB && this.b === dB && this.a === VB
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
        return (new LB).bdB(this)
      }
      bdB(BB) {
        return this.r = BB.r, this.g = BB.g, this.b = BB.b, this.a = BB.a, this
      }
      YBB(BB, TB, dB, VB) {
        return this.r = BB, this.g = TB, this.b = dB, this.a = VB, this
      }
      set(BB, TB, dB, VB) {
        return this.YBB(BB, TB, dB, VB)
      }
      A4(BB) {
        return this.r = this.g = this.b = this.a = BB, this
      }
      toHexString() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const TB = Math.round(255 * this.r),
          dB = Math.round(255 * this.g),
          VB = Math.round(255 * this.b);
        if (BB) return "#" + (0, pB.ToHex)(TB) + (0, pB.ToHex)(dB) + (0, pB.ToHex)(VB);
        const yB = Math.round(255 * this.a);
        return "#" + (0, pB.ToHex)(TB) + (0, pB.ToHex)(dB) + (0, pB.ToHex)(VB) + (0, pB.ToHex)(yB)
      }
      fromHexString(BB) {
        return "#" !== BB.substring(0, 1) || 9 !== BB.length && 7 !== BB.length || (this.r = parseInt(BB.substring(1, 3), 16) / 255, this.g = parseInt(BB.substring(3, 5), 16) / 255, this.b = parseInt(BB.substring(5, 7), 16) / 255, 9 === BB.length && (this.a = parseInt(BB.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const TB = new LB;
        return this.toLinearSpaceToRef(TB, BB), TB
      }
      toLinearSpaceToRef(BB) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (BB.r = YB(this.r), BB.g = YB(this.g), BB.b = YB(this.b)) : (BB.r = JB(this.r), BB.g = JB(this.g), BB.b = JB(this.b)), BB.a = this.a, this
      }
      toGammaSpace() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const TB = new LB;
        return this.toGammaSpaceToRef(TB, BB), TB
      }
      toGammaSpaceToRef(BB) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (BB.r = oB(this.r), BB.g = oB(this.g), BB.b = oB(this.b)) : (BB.r = gB(this.r), BB.g = gB(this.g), BB.b = gB(this.b)), BB.a = this.a, this
      }
      static FromHexString(BB) {
        return "#" !== BB.substring(0, 1) || 9 !== BB.length && 7 !== BB.length ? new LB(0, 0, 0, 0) : new LB(0, 0, 0, 1).fromHexString(BB)
      }
      static Lerp(BB, TB, dB) {
        return LB.LerpToRef(BB, TB, dB, new LB)
      }
      static LerpToRef(BB, TB, dB, VB) {
        return VB.r = BB.r + (TB.r - BB.r) * dB, VB.g = BB.g + (TB.g - BB.g) * dB, VB.b = BB.b + (TB.b - BB.b) * dB, VB.a = BB.a + (TB.a - BB.a) * dB, VB
      }
      static Hermite(BB, TB, dB, VB, yB) {
        const pB = yB * yB,
          lB = yB * pB,
          JB = 2 * lB - 3 * pB + 1,
          YB = -2 * lB + 3 * pB,
          gB = lB - 2 * pB + yB,
          oB = lB - pB,
          kB = BB.r * JB + dB.r * YB + TB.r * gB + VB.r * oB,
          OB = BB.g * JB + dB.g * YB + TB.g * gB + VB.g * oB,
          DB = BB.b * JB + dB.b * YB + TB.b * gB + VB.b * oB,
          uB = BB.a * JB + dB.a * YB + TB.a * gB + VB.a * oB;
        return new LB(kB, OB, DB, uB)
      }
      static Hermite1stDerivative(BB, TB, dB, VB, yB) {
        const pB = new LB;
        return this.Hermite1stDerivativeToRef(BB, TB, dB, VB, yB, pB), pB
      }
      static Hermite1stDerivativeToRef(BB, TB, dB, VB, yB, pB) {
        const lB = yB * yB;
        pB.r = 6 * (lB - yB) * BB.r + (3 * lB - 4 * yB + 1) * TB.r + 6 * (-lB + yB) * dB.r + (3 * lB - 2 * yB) * VB.r, pB.g = 6 * (lB - yB) * BB.g + (3 * lB - 4 * yB + 1) * TB.g + 6 * (-lB + yB) * dB.g + (3 * lB - 2 * yB) * VB.g, pB.b = 6 * (lB - yB) * BB.b + (3 * lB - 4 * yB + 1) * TB.b + 6 * (-lB + yB) * dB.b + (3 * lB - 2 * yB) * VB.b, pB.a = 6 * (lB - yB) * BB.a + (3 * lB - 4 * yB + 1) * TB.a + 6 * (-lB + yB) * dB.a + (3 * lB - 2 * yB) * VB.a
      }
      static FromColor3(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new LB(BB.r, BB.g, BB.b, TB)
      }
      static FromArray(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new LB(BB[TB], BB[TB + 1], BB[TB + 2], BB[TB + 3])
      }
      static FromArrayToRef(BB) {
        let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          dB = arguments.length > 2 ? arguments[2] : void 0;
        dB.r = BB[TB], dB.g = BB[TB + 1], dB.b = BB[TB + 2], dB.a = BB[TB + 3]
      }
      static FromInts(BB, TB, dB, VB) {
        return new LB(BB / 255, TB / 255, dB / 255, VB / 255)
      }
      static CheckColors4(BB, TB) {
        if (BB.length === 3 * TB) {
          const TB = [];
          for (let dB = 0; dB < BB.length; dB += 3) {
            const VB = dB / 3 * 4;
            TB[VB] = BB[dB], TB[VB + 1] = BB[dB + 1], TB[VB + 2] = BB[dB + 2], TB[VB + 3] = 1
          }
          return TB
        }
        return BB
      }
    }
    LB._V8PerformanceHack = new LB(.5, .5, .5, .5);
    class OB {}
    OB.Color3 = (0, VB.b)(3, kB.Black), OB.Color4 = (0, VB.b)(3, (() => new LB(0, 0, 0, 0)));
    let DB = !1;

    function uB() {
      DB || (DB = !0, Object.defineProperties(kB.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(LB.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, lB.g)("BABYLON.Color3", kB), (0, lB.g)("BABYLON.Color4", LB))
    }
  },
  36132: (BB, TB, dB) => {
    dB.d(TB, {
      b: () => pB,
      f: () => VB,
      j: () => yB
    });
    const VB = 1 / 2.2,
      yB = 2.2;
    Math.sqrt(5);
    let pB = .001
  },
  36157: (BB, TB, dB) => {
    function VB(BB) {
      return parseInt(BB.toString().replace(/\W/g, ""))
    }

    function yB(BB, TB) {
      let dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(BB - TB) <= dB
    }

    function pB(BB, TB, dB) {
      let VB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return BB < TB - VB || BB > dB + VB
    }

    function lB(BB, TB) {
      return BB === TB ? BB : Math.random() * (TB - BB) + BB
    }

    function JB(BB, TB, dB) {
      return BB + (TB - BB) * dB
    }

    function YB(BB, TB, dB) {
      let VB = HB(TB - BB, 360);
      return VB > 180 && (VB -= 360), BB + VB * LB(dB)
    }

    function gB(BB, TB, dB) {
      let VB;
      return VB = BB != TB ? LB((dB - BB) / (TB - BB)) : 0, VB
    }

    function oB(BB, TB, dB, VB, yB) {
      const pB = yB * yB,
        lB = yB * pB;
      return BB * (2 * lB - 3 * pB + 1) + dB * (-2 * lB + 3 * pB) + TB * (lB - 2 * pB + yB) + VB * (lB - pB)
    }

    function kB(BB, TB, dB, VB, yB) {
      const pB = yB * yB;
      return 6 * (pB - yB) * BB + (3 * pB - 4 * yB + 1) * TB + 6 * (-pB + yB) * dB + (3 * pB - 2 * yB) * VB
    }

    function LB(BB) {
      let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        dB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(dB, Math.max(TB, BB))
    }

    function OB(BB) {
      return BB -= 2 * Math.PI * Math.floor((BB + Math.PI) / (2 * Math.PI))
    }

    function DB(BB) {
      const TB = BB.toString(16);
      return BB <= 15 ? ("0" + TB).toUpperCase() : TB.toUpperCase()
    }

    function uB(BB) {
      if (Math.log2) return Math.floor(Math.log2(BB));
      if (BB < 0) return NaN;
      if (0 === BB) return -1 / 0;
      let TB = 0;
      if (BB < 1) {
        for (; BB < 1;) TB++, BB *= 2;
        TB = -TB
      } else if (BB > 1)
        for (; BB > 1;) TB++, BB = Math.floor(BB / 2);
      return TB
    }

    function HB(BB, TB) {
      return BB - Math.floor(BB / TB) * TB
    }

    function EB(BB, TB, dB) {
      return (BB - TB) / (dB - TB)
    }

    function vB(BB, TB, dB) {
      return BB * (dB - TB) + TB
    }

    function mB(BB, TB) {
      let dB = HB(TB - BB, 360);
      return dB > 180 && (dB -= 360), dB
    }

    function iB(BB, TB) {
      const dB = HB(BB, 2 * TB);
      return TB - Math.abs(dB - TB)
    }

    function NB(BB, TB, dB) {
      let VB = LB(dB);
      return VB = -2 * VB * VB * VB + 3 * VB * VB, TB * VB + BB * (1 - VB)
    }

    function tB(BB, TB, dB) {
      let VB;
      return VB = Math.abs(TB - BB) <= dB ? TB : BB + Math.sign(TB - BB) * dB, VB
    }

    function fB(BB, TB, dB) {
      const VB = mB(BB, TB);
      let yB;
      return yB = -dB < VB && VB < dB ? TB : tB(BB, TB = BB + VB, dB), yB
    }

    function sB(BB, TB, dB) {
      return (BB - TB) / (dB - TB)
    }

    function MB(BB, TB, dB) {
      return (dB - TB) * BB + TB
    }

    function zB(BB, TB) {
      const dB = BB % TB;
      return 0 === dB ? TB : zB(TB, dB)
    }
    dB.r(TB), dB.d(TB, {
      Clamp: () => LB,
      DeltaAngle: () => mB,
      Denormalize: () => vB,
      ExtractAsInt: () => VB,
      Hermite: () => oB,
      Hermite1stDerivative: () => kB,
      HighestCommonFactor: () => zB,
      ILog2: () => uB,
      InverseLerp: () => gB,
      Lerp: () => JB,
      LerpAngle: () => YB,
      MoveTowards: () => tB,
      MoveTowardsAngle: () => fB,
      Normalize: () => EB,
      NormalizeRadians: () => OB,
      OutsideRange: () => pB,
      PercentToRange: () => MB,
      PingPong: () => iB,
      RandomRange: () => lB,
      RangeToPercent: () => sB,
      Repeat: () => HB,
      SmoothStep: () => NB,
      ToHex: () => DB,
      WithinEpsilon: () => yB
    })
  },
  36137: (BB, TB, dB) => {
    function VB(BB, TB) {
      const dB = [];
      for (let VB = 0; VB < BB; ++VB) dB.push(TB());
      return dB
    }

    function yB(BB, TB) {
      return VB(BB, TB)
    }
    dB.d(TB, {
      b: () => VB,
      d: () => yB,
      e: () => lB
    });
    const pB = ["push", "splice", "pop", "shift", "unshift"];

    function lB(BB, TB) {
      const dB = pB.map((dB => function(BB, TB, dB) {
        const VB = BB[TB];
        if ("function" !== typeof VB) return null;
        const yB = function() {
          const VB = BB.length,
            pB = yB.previous.apply(BB, arguments);
          return dB(TB, VB), pB
        };
        return VB.next = yB, yB.previous = VB, BB[TB] = yB, () => {
          const dB = yB.previous;
          if (!dB) return;
          const VB = yB.next;
          VB ? (dB.next = VB, VB.previous = dB) : (dB.next = void 0, BB[TB] = dB), yB.next = void 0, yB.previous = void 0
        }
      }(BB, dB, TB)));
      return () => {
        for (const BB of dB) BB?.()
      }
    }
  },
  36166: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => pB,
      g: () => yB
    });
    const VB = {};

    function yB(BB, TB) {
      VB[BB] = TB
    }

    function pB(BB) {
      return VB[BB]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);