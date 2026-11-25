export const id = 255;
export const ids = [255];
export const modules = {
  38173: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => LM,
      h: () => mM,
      i: () => JM,
      j: () => HM
    });
    var OM = iM(38048),
      SM = iM(38044),
      jM = iM(38074),
      aM = iM(38085);

    function PM(MM) {
      return Math.pow(MM, SM.h)
    }

    function nM(MM) {
      return MM <= .04045 ? .0773993808 * MM : Math.pow(.947867299 * (MM + .055), 2.4)
    }

    function QM(MM) {
      return Math.pow(MM, SM.f)
    }

    function zM(MM) {
      return MM <= .0031308 ? 12.92 * MM : 1.055 * Math.pow(MM, .41666) - .055
    }
    class LM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = MM, this.g = rM, this.b = iM
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let MM = 255 * this.r | 0;
        return MM = 397 * MM ^ 255 * this.g, MM = 397 * MM ^ 255 * this.b, MM
      }
      toArray(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return MM[rM] = this.r, MM[rM + 1] = this.g, MM[rM + 2] = this.b, this
      }
      cz(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return LM.FromArrayToRef(MM, rM, this), this
      }
      toColor4() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new mM(this.r, this.g, this.b, MM)
      }
      HOM() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(MM) {
        return new LM(this.r * MM.r, this.g * MM.g, this.b * MM.b)
      }
      multiplyToRef(MM, rM) {
        return rM.r = this.r * MM.r, rM.g = this.g * MM.g, rM.b = this.b * MM.b, rM
      }
      multiplyInPlace(MM) {
        return this.r *= MM.r, this.g *= MM.g, this.b *= MM.b, this
      }
      multiplyByFloats(MM, rM, iM) {
        return new LM(this.r * MM, this.g * rM, this.b * iM)
      }
      divide(MM) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(MM, rM) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(MM) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(MM) {
        return this.minimizeInPlaceFromFloats(MM.r, MM.g, MM.b)
      }
      maximizeInPlace(MM) {
        return this.maximizeInPlaceFromFloats(MM.r, MM.g, MM.b)
      }
      minimizeInPlaceFromFloats(MM, rM, iM) {
        return this.r = Math.min(MM, this.r), this.g = Math.min(rM, this.g), this.b = Math.min(iM, this.b), this
      }
      maximizeInPlaceFromFloats(MM, rM, iM) {
        return this.r = Math.max(MM, this.r), this.g = Math.max(rM, this.g), this.b = Math.max(iM, this.b), this
      }
      floorToRef(MM) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(MM) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(MM) {
        return MM && this.r === MM.r && this.g === MM.g && this.b === MM.b
      }
      equalsFloats(MM, rM, iM) {
        return this.IaM(MM, rM, iM)
      }
      IaM(MM, rM, iM) {
        return this.r === MM && this.g === rM && this.b === iM
      }
      equalsWithEpsilon(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SM.d;
        return (0, jM.WithinEpsilon)(this.r, MM.r, rM) && (0, jM.WithinEpsilon)(this.g, MM.g, rM) && (0, jM.WithinEpsilon)(this.b, MM.b, rM)
      }
      VJ() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(MM) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(MM) {
        return new LM(this.r * MM, this.g * MM, this.b * MM)
      }
      scaleInPlace(MM) {
        return this.r *= MM, this.g *= MM, this.b *= MM, this
      }
      scaleToRef(MM, rM) {
        return rM.r = this.r * MM, rM.g = this.g * MM, rM.b = this.b * MM, rM
      }
      scaleAndAddToRef(MM, rM) {
        return rM.r += this.r * MM, rM.g += this.g * MM, rM.b += this.b * MM, rM
      }
      clampToRef() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        return iM.r = (0, jM.Clamp)(this.r, MM, rM), iM.g = (0, jM.Clamp)(this.g, MM, rM), iM.b = (0, jM.Clamp)(this.b, MM, rM), iM
      }
      add(MM) {
        return new LM(this.r + MM.r, this.g + MM.g, this.b + MM.b)
      }
      addInPlace(MM) {
        return this.r += MM.r, this.g += MM.g, this.b += MM.b, this
      }
      addInPlaceFromFloats(MM, rM, iM) {
        return this.r += MM, this.g += rM, this.b += iM, this
      }
      addToRef(MM, rM) {
        return rM.r = this.r + MM.r, rM.g = this.g + MM.g, rM.b = this.b + MM.b, rM
      }
      subtract(MM) {
        return new LM(this.r - MM.r, this.g - MM.g, this.b - MM.b)
      }
      subtractToRef(MM, rM) {
        return rM.r = this.r - MM.r, rM.g = this.g - MM.g, rM.b = this.b - MM.b, rM
      }
      kOM(MM) {
        return this.r -= MM.r, this.g -= MM.g, this.b -= MM.b, this
      }
      subtractFromFloats(MM, rM, iM) {
        return new LM(this.r - MM, this.g - rM, this.b - iM)
      }
      subtractFromFloatsToRef(MM, rM, iM, OM) {
        return OM.r = this.r - MM, OM.g = this.g - rM, OM.b = this.b - iM, OM
      }
      clone() {
        return new LM(this.r, this.g, this.b)
      }
      jR(MM) {
        return this.r = MM.r, this.g = MM.g, this.b = MM.b, this
      }
      iMM(MM, rM, iM) {
        return this.r = MM, this.g = rM, this.b = iM, this
      }
      set(MM, rM, iM) {
        return this.iMM(MM, rM, iM)
      }
      P_(MM) {
        return this.r = this.g = this.b = MM, this
      }
      toHexString() {
        const MM = Math.round(255 * this.r),
          rM = Math.round(255 * this.g),
          iM = Math.round(255 * this.b);
        return "#" + (0, jM.ToHex)(MM) + (0, jM.ToHex)(rM) + (0, jM.ToHex)(iM)
      }
      fromHexString(MM) {
        return "#" !== MM.substring(0, 1) || 7 !== MM.length || (this.r = parseInt(MM.substring(1, 3), 16) / 255, this.g = parseInt(MM.substring(3, 5), 16) / 255, this.b = parseInt(MM.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new LM)
      }
      toHSVToRef(MM) {
        const rM = this.r,
          iM = this.g,
          OM = this.b,
          SM = Math.max(rM, iM, OM),
          jM = Math.min(rM, iM, OM);
        let aM = 0,
          PM = 0;
        const nM = SM,
          QM = SM - jM;
        return 0 !== SM && (PM = QM / SM), SM != jM && (SM == rM ? (aM = (iM - OM) / QM, iM < OM && (aM += 6)) : SM == iM ? aM = (OM - rM) / QM + 2 : SM == OM && (aM = (rM - iM) / QM + 4), aM *= 60), MM.r = aM, MM.g = PM, MM.b = nM, MM
      }
      toLinearSpace() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rM = new LM;
        return this.toLinearSpaceToRef(rM, MM), rM
      }
      toLinearSpaceToRef(MM) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (MM.r = nM(this.r), MM.g = nM(this.g), MM.b = nM(this.b)) : (MM.r = PM(this.r), MM.g = PM(this.g), MM.b = PM(this.b)), this
      }
      toGammaSpace() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rM = new LM;
        return this.toGammaSpaceToRef(rM, MM), rM
      }
      toGammaSpaceToRef(MM) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (MM.r = zM(this.r), MM.g = zM(this.g), MM.b = zM(this.b)) : (MM.r = QM(this.r), MM.g = QM(this.g), MM.b = QM(this.b)), this
      }
      static HSVtoRGBToRef(MM, rM, iM, OM) {
        const SM = iM * rM,
          jM = MM / 60,
          aM = SM * (1 - Math.abs(jM % 2 - 1));
        let PM = 0,
          nM = 0,
          QM = 0;
        jM >= 0 && jM <= 1 ? (PM = SM, nM = aM) : jM >= 1 && jM <= 2 ? (PM = aM, nM = SM) : jM >= 2 && jM <= 3 ? (nM = SM, QM = aM) : jM >= 3 && jM <= 4 ? (nM = aM, QM = SM) : jM >= 4 && jM <= 5 ? (PM = aM, QM = SM) : jM >= 5 && jM <= 6 && (PM = SM, QM = aM);
        const zM = iM - SM;
        return OM.r = PM + zM, OM.g = nM + zM, OM.b = QM + zM, OM
      }
      static FromHSV(MM, rM, iM) {
        const OM = new LM(0, 0, 0);
        return LM.HSVtoRGBToRef(MM, rM, iM, OM), OM
      }
      static FromHexString(MM) {
        return new LM(0, 0, 0).fromHexString(MM)
      }
      static FromArray(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new LM(MM[rM], MM[rM + 1], MM[rM + 2])
      }
      static FromArrayToRef(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        iM.r = MM[rM], iM.g = MM[rM + 1], iM.b = MM[rM + 2]
      }
      static FromInts(MM, rM, iM) {
        return new LM(MM / 255, rM / 255, iM / 255)
      }
      static Lerp(MM, rM, iM) {
        const OM = new LM(0, 0, 0);
        return LM.LerpToRef(MM, rM, iM, OM), OM
      }
      static LerpToRef(MM, rM, iM, OM) {
        OM.r = MM.r + (rM.r - MM.r) * iM, OM.g = MM.g + (rM.g - MM.g) * iM, OM.b = MM.b + (rM.b - MM.b) * iM
      }
      static Hermite(MM, rM, iM, OM, SM) {
        const jM = SM * SM,
          aM = SM * jM,
          PM = 2 * aM - 3 * jM + 1,
          nM = -2 * aM + 3 * jM,
          QM = aM - 2 * jM + SM,
          zM = aM - jM,
          mM = MM.r * PM + iM.r * nM + rM.r * QM + OM.r * zM,
          HM = MM.g * PM + iM.g * nM + rM.g * QM + OM.g * zM,
          hM = MM.b * PM + iM.b * nM + rM.b * QM + OM.b * zM;
        return new LM(mM, HM, hM)
      }
      static Hermite1stDerivative(MM, rM, iM, OM, SM) {
        const jM = LM.Black();
        return this.Hermite1stDerivativeToRef(MM, rM, iM, OM, SM, jM), jM
      }
      static Hermite1stDerivativeToRef(MM, rM, iM, OM, SM, jM) {
        const aM = SM * SM;
        jM.r = 6 * (aM - SM) * MM.r + (3 * aM - 4 * SM + 1) * rM.r + 6 * (-aM + SM) * iM.r + (3 * aM - 2 * SM) * OM.r, jM.g = 6 * (aM - SM) * MM.g + (3 * aM - 4 * SM + 1) * rM.g + 6 * (-aM + SM) * iM.g + (3 * aM - 2 * SM) * OM.g, jM.b = 6 * (aM - SM) * MM.b + (3 * aM - 4 * SM + 1) * rM.b + 6 * (-aM + SM) * iM.b + (3 * aM - 2 * SM) * OM.b
      }
      static Red() {
        return new LM(1, 0, 0)
      }
      static Green() {
        return new LM(0, 1, 0)
      }
      static Blue() {
        return new LM(0, 0, 1)
      }
      static Black() {
        return new LM(0, 0, 0)
      }
      static get BlackReadOnly() {
        return LM._BlackReadOnly
      }
      static White() {
        return new LM(1, 1, 1)
      }
      static Purple() {
        return new LM(.5, 0, .5)
      }
      static Magenta() {
        return new LM(1, 0, 1)
      }
      static Yellow() {
        return new LM(1, 1, 0)
      }
      static Gray() {
        return new LM(.5, .5, .5)
      }
      static Teal() {
        return new LM(0, 1, 1)
      }
      static Random() {
        return new LM(Math.random(), Math.random(), Math.random())
      }
    }
    LM._V8PerformanceHack = new LM(.5, .5, .5), LM._BlackReadOnly = LM.Black();
    class mM {
      constructor() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = MM, this.g = rM, this.b = iM, this.a = OM
      }
      HOM() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return MM[rM] = this.r, MM[rM + 1] = this.g, MM[rM + 2] = this.b, MM[rM + 3] = this.a, this
      }
      cz(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = MM[rM], this.g = MM[rM + 1], this.b = MM[rM + 2], this.a = MM[rM + 3], this
      }
      equals(MM) {
        return MM && this.r === MM.r && this.g === MM.g && this.b === MM.b && this.a === MM.a
      }
      add(MM) {
        return new mM(this.r + MM.r, this.g + MM.g, this.b + MM.b, this.a + MM.a)
      }
      addToRef(MM, rM) {
        return rM.r = this.r + MM.r, rM.g = this.g + MM.g, rM.b = this.b + MM.b, rM.a = this.a + MM.a, rM
      }
      addInPlace(MM) {
        return this.r += MM.r, this.g += MM.g, this.b += MM.b, this.a += MM.a, this
      }
      addInPlaceFromFloats(MM, rM, iM, OM) {
        return this.r += MM, this.g += rM, this.b += iM, this.a += OM, this
      }
      subtract(MM) {
        return new mM(this.r - MM.r, this.g - MM.g, this.b - MM.b, this.a - MM.a)
      }
      subtractToRef(MM, rM) {
        return rM.r = this.r - MM.r, rM.g = this.g - MM.g, rM.b = this.b - MM.b, rM.a = this.a - MM.a, rM
      }
      kOM(MM) {
        return this.r -= MM.r, this.g -= MM.g, this.b -= MM.b, this.a -= MM.a, this
      }
      subtractFromFloats(MM, rM, iM, OM) {
        return new mM(this.r - MM, this.g - rM, this.b - iM, this.a - OM)
      }
      subtractFromFloatsToRef(MM, rM, iM, OM, SM) {
        return SM.r = this.r - MM, SM.g = this.g - rM, SM.b = this.b - iM, SM.a = this.a - OM, SM
      }
      scale(MM) {
        return new mM(this.r * MM, this.g * MM, this.b * MM, this.a * MM)
      }
      scaleInPlace(MM) {
        return this.r *= MM, this.g *= MM, this.b *= MM, this.a *= MM, this
      }
      scaleToRef(MM, rM) {
        return rM.r = this.r * MM, rM.g = this.g * MM, rM.b = this.b * MM, rM.a = this.a * MM, rM
      }
      scaleAndAddToRef(MM, rM) {
        return rM.r += this.r * MM, rM.g += this.g * MM, rM.b += this.b * MM, rM.a += this.a * MM, rM
      }
      clampToRef() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        return iM.r = (0, jM.Clamp)(this.r, MM, rM), iM.g = (0, jM.Clamp)(this.g, MM, rM), iM.b = (0, jM.Clamp)(this.b, MM, rM), iM.a = (0, jM.Clamp)(this.a, MM, rM), iM
      }
      multiply(MM) {
        return new mM(this.r * MM.r, this.g * MM.g, this.b * MM.b, this.a * MM.a)
      }
      multiplyToRef(MM, rM) {
        return rM.r = this.r * MM.r, rM.g = this.g * MM.g, rM.b = this.b * MM.b, rM.a = this.a * MM.a, rM
      }
      multiplyInPlace(MM) {
        return this.r *= MM.r, this.g *= MM.g, this.b *= MM.b, this.a *= MM.a, this
      }
      multiplyByFloats(MM, rM, iM, OM) {
        return new mM(this.r * MM, this.g * rM, this.b * iM, this.a * OM)
      }
      divide(MM) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(MM, rM) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(MM) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(MM) {
        return this.r = Math.min(this.r, MM.r), this.g = Math.min(this.g, MM.g), this.b = Math.min(this.b, MM.b), this.a = Math.min(this.a, MM.a), this
      }
      maximizeInPlace(MM) {
        return this.r = Math.max(this.r, MM.r), this.g = Math.max(this.g, MM.g), this.b = Math.max(this.b, MM.b), this.a = Math.max(this.a, MM.a), this
      }
      minimizeInPlaceFromFloats(MM, rM, iM, OM) {
        return this.r = Math.min(MM, this.r), this.g = Math.min(rM, this.g), this.b = Math.min(iM, this.b), this.a = Math.min(OM, this.a), this
      }
      maximizeInPlaceFromFloats(MM, rM, iM, OM) {
        return this.r = Math.max(MM, this.r), this.g = Math.max(rM, this.g), this.b = Math.max(iM, this.b), this.a = Math.max(OM, this.a), this
      }
      floorToRef(MM) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(MM) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      VJ() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(MM) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : SM.d;
        return (0, jM.WithinEpsilon)(this.r, MM.r, rM) && (0, jM.WithinEpsilon)(this.g, MM.g, rM) && (0, jM.WithinEpsilon)(this.b, MM.b, rM) && (0, jM.WithinEpsilon)(this.a, MM.a, rM)
      }
      IaM(MM, rM, iM, OM) {
        return this.r === MM && this.g === rM && this.b === iM && this.a === OM
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let MM = 255 * this.r | 0;
        return MM = 397 * MM ^ 255 * this.g, MM = 397 * MM ^ 255 * this.b, MM = 397 * MM ^ 255 * this.a, MM
      }
      clone() {
        return (new mM).jR(this)
      }
      jR(MM) {
        return this.r = MM.r, this.g = MM.g, this.b = MM.b, this.a = MM.a, this
      }
      iMM(MM, rM, iM, OM) {
        return this.r = MM, this.g = rM, this.b = iM, this.a = OM, this
      }
      set(MM, rM, iM, OM) {
        return this.iMM(MM, rM, iM, OM)
      }
      P_(MM) {
        return this.r = this.g = this.b = this.a = MM, this
      }
      toHexString() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rM = Math.round(255 * this.r),
          iM = Math.round(255 * this.g),
          OM = Math.round(255 * this.b);
        if (MM) return "#" + (0, jM.ToHex)(rM) + (0, jM.ToHex)(iM) + (0, jM.ToHex)(OM);
        const SM = Math.round(255 * this.a);
        return "#" + (0, jM.ToHex)(rM) + (0, jM.ToHex)(iM) + (0, jM.ToHex)(OM) + (0, jM.ToHex)(SM)
      }
      fromHexString(MM) {
        return "#" !== MM.substring(0, 1) || 9 !== MM.length && 7 !== MM.length || (this.r = parseInt(MM.substring(1, 3), 16) / 255, this.g = parseInt(MM.substring(3, 5), 16) / 255, this.b = parseInt(MM.substring(5, 7), 16) / 255, 9 === MM.length && (this.a = parseInt(MM.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rM = new mM;
        return this.toLinearSpaceToRef(rM, MM), rM
      }
      toLinearSpaceToRef(MM) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (MM.r = nM(this.r), MM.g = nM(this.g), MM.b = nM(this.b)) : (MM.r = PM(this.r), MM.g = PM(this.g), MM.b = PM(this.b)), MM.a = this.a, this
      }
      toGammaSpace() {
        let MM = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const rM = new mM;
        return this.toGammaSpaceToRef(rM, MM), rM
      }
      toGammaSpaceToRef(MM) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (MM.r = zM(this.r), MM.g = zM(this.g), MM.b = zM(this.b)) : (MM.r = QM(this.r), MM.g = QM(this.g), MM.b = QM(this.b)), MM.a = this.a, this
      }
      static FromHexString(MM) {
        return "#" !== MM.substring(0, 1) || 9 !== MM.length && 7 !== MM.length ? new mM(0, 0, 0, 0) : new mM(0, 0, 0, 1).fromHexString(MM)
      }
      static Lerp(MM, rM, iM) {
        return mM.LerpToRef(MM, rM, iM, new mM)
      }
      static LerpToRef(MM, rM, iM, OM) {
        return OM.r = MM.r + (rM.r - MM.r) * iM, OM.g = MM.g + (rM.g - MM.g) * iM, OM.b = MM.b + (rM.b - MM.b) * iM, OM.a = MM.a + (rM.a - MM.a) * iM, OM
      }
      static Hermite(MM, rM, iM, OM, SM) {
        const jM = SM * SM,
          aM = SM * jM,
          PM = 2 * aM - 3 * jM + 1,
          nM = -2 * aM + 3 * jM,
          QM = aM - 2 * jM + SM,
          zM = aM - jM,
          LM = MM.r * PM + iM.r * nM + rM.r * QM + OM.r * zM,
          HM = MM.g * PM + iM.g * nM + rM.g * QM + OM.g * zM,
          hM = MM.b * PM + iM.b * nM + rM.b * QM + OM.b * zM,
          JM = MM.a * PM + iM.a * nM + rM.a * QM + OM.a * zM;
        return new mM(LM, HM, hM, JM)
      }
      static Hermite1stDerivative(MM, rM, iM, OM, SM) {
        const jM = new mM;
        return this.Hermite1stDerivativeToRef(MM, rM, iM, OM, SM, jM), jM
      }
      static Hermite1stDerivativeToRef(MM, rM, iM, OM, SM, jM) {
        const aM = SM * SM;
        jM.r = 6 * (aM - SM) * MM.r + (3 * aM - 4 * SM + 1) * rM.r + 6 * (-aM + SM) * iM.r + (3 * aM - 2 * SM) * OM.r, jM.g = 6 * (aM - SM) * MM.g + (3 * aM - 4 * SM + 1) * rM.g + 6 * (-aM + SM) * iM.g + (3 * aM - 2 * SM) * OM.g, jM.b = 6 * (aM - SM) * MM.b + (3 * aM - 4 * SM + 1) * rM.b + 6 * (-aM + SM) * iM.b + (3 * aM - 2 * SM) * OM.b, jM.a = 6 * (aM - SM) * MM.a + (3 * aM - 4 * SM + 1) * rM.a + 6 * (-aM + SM) * iM.a + (3 * aM - 2 * SM) * OM.a
      }
      static FromColor3(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new mM(MM.r, MM.g, MM.b, rM)
      }
      static FromArray(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new mM(MM[rM], MM[rM + 1], MM[rM + 2], MM[rM + 3])
      }
      static FromArrayToRef(MM) {
        let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          iM = arguments.length > 2 ? arguments[2] : void 0;
        iM.r = MM[rM], iM.g = MM[rM + 1], iM.b = MM[rM + 2], iM.a = MM[rM + 3]
      }
      static FromInts(MM, rM, iM, OM) {
        return new mM(MM / 255, rM / 255, iM / 255, OM / 255)
      }
      static CheckColors4(MM, rM) {
        if (MM.length === 3 * rM) {
          const rM = [];
          for (let iM = 0; iM < MM.length; iM += 3) {
            const OM = iM / 3 * 4;
            rM[OM] = MM[iM], rM[OM + 1] = MM[iM + 1], rM[OM + 2] = MM[iM + 2], rM[OM + 3] = 1
          }
          return rM
        }
        return MM
      }
    }
    mM._V8PerformanceHack = new mM(.5, .5, .5, .5);
    class HM {}
    HM.Color3 = (0, OM.c)(3, LM.Black), HM.Color4 = (0, OM.c)(3, (() => new mM(0, 0, 0, 0)));
    let hM = !1;

    function JM() {
      hM || (hM = !0, Object.defineProperties(LM.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(mM.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, aM.e)("BABYLON.Color3", LM), (0, aM.e)("BABYLON.Color4", mM))
    }
  },
  38044: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => jM,
      f: () => OM,
      h: () => SM
    });
    const OM = 1 / 2.2,
      SM = 2.2;
    Math.sqrt(5);
    let jM = .001
  },
  38074: (MM, rM, iM) => {
    function OM(MM) {
      return parseInt(MM.toString().replace(/\W/g, ""))
    }

    function SM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(MM - rM) <= iM
    }

    function jM(MM, rM, iM) {
      let OM = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return MM < rM - OM || MM > iM + OM
    }

    function aM(MM, rM) {
      return MM === rM ? MM : Math.random() * (rM - MM) + MM
    }

    function PM(MM, rM, iM) {
      return MM + (rM - MM) * iM
    }

    function nM(MM, rM, iM) {
      let OM = dM(rM - MM, 360);
      return OM > 180 && (OM -= 360), MM + OM * mM(iM)
    }

    function QM(MM, rM, iM) {
      let OM;
      return OM = MM != rM ? mM((iM - MM) / (rM - MM)) : 0, OM
    }

    function zM(MM, rM, iM, OM, SM) {
      const jM = SM * SM,
        aM = SM * jM;
      return MM * (2 * aM - 3 * jM + 1) + iM * (-2 * aM + 3 * jM) + rM * (aM - 2 * jM + SM) + OM * (aM - jM)
    }

    function LM(MM, rM, iM, OM, SM) {
      const jM = SM * SM;
      return 6 * (jM - SM) * MM + (3 * jM - 4 * SM + 1) * rM + 6 * (-jM + SM) * iM + (3 * jM - 2 * SM) * OM
    }

    function mM(MM) {
      let rM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(iM, Math.max(rM, MM))
    }

    function HM(MM) {
      return MM -= 2 * Math.PI * Math.floor((MM + Math.PI) / (2 * Math.PI))
    }

    function hM(MM) {
      const rM = MM.toString(16);
      return MM <= 15 ? ("0" + rM).toUpperCase() : rM.toUpperCase()
    }

    function JM(MM) {
      if (Math.log2) return Math.floor(Math.log2(MM));
      if (MM < 0) return NaN;
      if (0 === MM) return -1 / 0;
      let rM = 0;
      if (MM < 1) {
        for (; MM < 1;) rM++, MM *= 2;
        rM = -rM
      } else if (MM > 1)
        for (; MM > 1;) rM++, MM = Math.floor(MM / 2);
      return rM
    }

    function dM(MM, rM) {
      return MM - Math.floor(MM / rM) * rM
    }

    function yM(MM, rM, iM) {
      return (MM - rM) / (iM - rM)
    }

    function lM(MM, rM, iM) {
      return MM * (iM - rM) + rM
    }

    function EM(MM, rM) {
      let iM = dM(rM - MM, 360);
      return iM > 180 && (iM -= 360), iM
    }

    function UM(MM, rM) {
      const iM = dM(MM, 2 * rM);
      return rM - Math.abs(iM - rM)
    }

    function GM(MM, rM, iM) {
      let OM = mM(iM);
      return OM = -2 * OM * OM * OM + 3 * OM * OM, rM * OM + MM * (1 - OM)
    }

    function CM(MM, rM, iM) {
      let OM;
      return OM = Math.abs(rM - MM) <= iM ? rM : MM + Math.sign(rM - MM) * iM, OM
    }

    function eM(MM, rM, iM) {
      const OM = EM(MM, rM);
      let SM;
      return SM = -iM < OM && OM < iM ? rM : CM(MM, rM = MM + OM, iM), SM
    }

    function bM(MM, rM, iM) {
      return (MM - rM) / (iM - rM)
    }

    function wM(MM, rM, iM) {
      return (iM - rM) * MM + rM
    }

    function tM(MM, rM) {
      const iM = MM % rM;
      return 0 === iM ? rM : tM(rM, iM)
    }
    iM.r(rM), iM.d(rM, {
      Clamp: () => mM,
      DeltaAngle: () => EM,
      Denormalize: () => lM,
      ExtractAsInt: () => OM,
      Hermite: () => zM,
      Hermite1stDerivative: () => LM,
      HighestCommonFactor: () => tM,
      ILog2: () => JM,
      InverseLerp: () => QM,
      Lerp: () => PM,
      LerpAngle: () => nM,
      MoveTowards: () => CM,
      MoveTowardsAngle: () => eM,
      Normalize: () => yM,
      NormalizeRadians: () => HM,
      OutsideRange: () => jM,
      PercentToRange: () => wM,
      PingPong: () => UM,
      RandomRange: () => aM,
      RangeToPercent: () => bM,
      Repeat: () => dM,
      SmoothStep: () => GM,
      ToHex: () => hM,
      WithinEpsilon: () => SM
    })
  },
  38048: (MM, rM, iM) => {
    function OM(MM, rM) {
      const iM = [];
      for (let OM = 0; OM < MM; ++OM) iM.push(rM());
      return iM
    }

    function SM(MM, rM) {
      return OM(MM, rM)
    }
    iM.d(rM, {
      c: () => OM,
      g: () => SM,
      j: () => aM
    });
    const jM = ["push", "splice", "pop", "shift", "unshift"];

    function aM(MM, rM) {
      const iM = jM.map((iM => function(MM, rM, iM) {
        const OM = MM[rM];
        if ("function" !== typeof OM) return null;
        const SM = function() {
          const OM = MM.length,
            jM = SM.previous.apply(MM, arguments);
          return iM(rM, OM), jM
        };
        return OM.next = SM, SM.previous = OM, MM[rM] = SM, () => {
          const iM = SM.previous;
          if (!iM) return;
          const OM = SM.next;
          OM ? (iM.next = OM, OM.previous = iM) : (iM.next = void 0, MM[rM] = iM), SM.next = void 0, SM.previous = void 0
        }
      }(MM, iM, rM)));
      return () => {
        for (const MM of iM) MM?.()
      }
    }
  },
  38085: (MM, rM, iM) => {
    iM.d(rM, {
      b: () => jM,
      e: () => SM
    });
    const OM = {};

    function SM(MM, rM) {
      OM[MM] = rM
    }

    function jM(MM) {
      return OM[MM]
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);