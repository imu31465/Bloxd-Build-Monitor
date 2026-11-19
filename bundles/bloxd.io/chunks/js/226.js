export const id = 226;
export const ids = [226];
export const modules = {
  36622: (DD, CD, cD) => {
    cD.d(CD, {
      d: () => BD,
      e: () => yD,
      h: () => ZD,
      j: () => MD
    });
    var ID = cD(36452),
      pD = cD(36449),
      iD = cD(36479),
      fD = cD(36488);

    function bD(DD) {
      return Math.pow(DD, pD.h)
    }

    function QD(DD) {
      return DD <= .04045 ? .0773993808 * DD : Math.pow(.947867299 * (DD + .055), 2.4)
    }

    function wD(DD) {
      return Math.pow(DD, pD.g)
    }

    function SD(DD) {
      return DD <= .0031308 ? 12.92 * DD : 1.055 * Math.pow(DD, .41666) - .055
    }
    class BD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = DD, this.g = CD, this.b = cD
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let DD = 255 * this.r | 0;
        return DD = 397 * DD ^ 255 * this.g, DD = 397 * DD ^ 255 * this.b, DD
      }
      toArray(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return DD[CD] = this.r, DD[CD + 1] = this.g, DD[CD + 2] = this.b, this
      }
      QCD(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BD.FromArrayToRef(DD, CD, this), this
      }
      toColor4() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new yD(this.r, this.g, this.b, DD)
      }
      XcD() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(DD) {
        return new BD(this.r * DD.r, this.g * DD.g, this.b * DD.b)
      }
      multiplyToRef(DD, CD) {
        return CD.r = this.r * DD.r, CD.g = this.g * DD.g, CD.b = this.b * DD.b, CD
      }
      multiplyInPlace(DD) {
        return this.r *= DD.r, this.g *= DD.g, this.b *= DD.b, this
      }
      multiplyByFloats(DD, CD, cD) {
        return new BD(this.r * DD, this.g * CD, this.b * cD)
      }
      divide(DD) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(DD, CD) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(DD) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(DD) {
        return this.minimizeInPlaceFromFloats(DD.r, DD.g, DD.b)
      }
      maximizeInPlace(DD) {
        return this.maximizeInPlaceFromFloats(DD.r, DD.g, DD.b)
      }
      minimizeInPlaceFromFloats(DD, CD, cD) {
        return this.r = Math.min(DD, this.r), this.g = Math.min(CD, this.g), this.b = Math.min(cD, this.b), this
      }
      maximizeInPlaceFromFloats(DD, CD, cD) {
        return this.r = Math.max(DD, this.r), this.g = Math.max(CD, this.g), this.b = Math.max(cD, this.b), this
      }
      floorToRef(DD) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(DD) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(DD) {
        return DD && this.r === DD.r && this.g === DD.g && this.b === DD.b
      }
      equalsFloats(DD, CD, cD) {
        return this.wfD(DD, CD, cD)
      }
      wfD(DD, CD, cD) {
        return this.r === DD && this.g === CD && this.b === cD
      }
      equalsWithEpsilon(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pD.c;
        return (0, iD.WithinEpsilon)(this.r, DD.r, CD) && (0, iD.WithinEpsilon)(this.g, DD.g, CD) && (0, iD.WithinEpsilon)(this.b, DD.b, CD)
      }
      pp() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(DD) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(DD) {
        return new BD(this.r * DD, this.g * DD, this.b * DD)
      }
      scaleInPlace(DD) {
        return this.r *= DD, this.g *= DD, this.b *= DD, this
      }
      scaleToRef(DD, CD) {
        return CD.r = this.r * DD, CD.g = this.g * DD, CD.b = this.b * DD, CD
      }
      scaleAndAddToRef(DD, CD) {
        return CD.r += this.r * DD, CD.g += this.g * DD, CD.b += this.b * DD, CD
      }
      clampToRef() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        return cD.r = (0, iD.Clamp)(this.r, DD, CD), cD.g = (0, iD.Clamp)(this.g, DD, CD), cD.b = (0, iD.Clamp)(this.b, DD, CD), cD
      }
      add(DD) {
        return new BD(this.r + DD.r, this.g + DD.g, this.b + DD.b)
      }
      addInPlace(DD) {
        return this.r += DD.r, this.g += DD.g, this.b += DD.b, this
      }
      addInPlaceFromFloats(DD, CD, cD) {
        return this.r += DD, this.g += CD, this.b += cD, this
      }
      addToRef(DD, CD) {
        return CD.r = this.r + DD.r, CD.g = this.g + DD.g, CD.b = this.b + DD.b, CD
      }
      subtract(DD) {
        return new BD(this.r - DD.r, this.g - DD.g, this.b - DD.b)
      }
      subtractToRef(DD, CD) {
        return CD.r = this.r - DD.r, CD.g = this.g - DD.g, CD.b = this.b - DD.b, CD
      }
      EcD(DD) {
        return this.r -= DD.r, this.g -= DD.g, this.b -= DD.b, this
      }
      subtractFromFloats(DD, CD, cD) {
        return new BD(this.r - DD, this.g - CD, this.b - cD)
      }
      subtractFromFloatsToRef(DD, CD, cD, ID) {
        return ID.r = this.r - DD, ID.g = this.g - CD, ID.b = this.b - cD, ID
      }
      clone() {
        return new BD(this.r, this.g, this.b)
      }
      YCD(DD) {
        return this.r = DD.r, this.g = DD.g, this.b = DD.b, this
      }
      K4(DD, CD, cD) {
        return this.r = DD, this.g = CD, this.b = cD, this
      }
      set(DD, CD, cD) {
        return this.K4(DD, CD, cD)
      }
      YF(DD) {
        return this.r = this.g = this.b = DD, this
      }
      toHexString() {
        const DD = Math.round(255 * this.r),
          CD = Math.round(255 * this.g),
          cD = Math.round(255 * this.b);
        return "#" + (0, iD.ToHex)(DD) + (0, iD.ToHex)(CD) + (0, iD.ToHex)(cD)
      }
      fromHexString(DD) {
        return "#" !== DD.substring(0, 1) || 7 !== DD.length || (this.r = parseInt(DD.substring(1, 3), 16) / 255, this.g = parseInt(DD.substring(3, 5), 16) / 255, this.b = parseInt(DD.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new BD)
      }
      toHSVToRef(DD) {
        const CD = this.r,
          cD = this.g,
          ID = this.b,
          pD = Math.max(CD, cD, ID),
          iD = Math.min(CD, cD, ID);
        let fD = 0,
          bD = 0;
        const QD = pD,
          wD = pD - iD;
        return 0 !== pD && (bD = wD / pD), pD != iD && (pD == CD ? (fD = (cD - ID) / wD, cD < ID && (fD += 6)) : pD == cD ? fD = (ID - CD) / wD + 2 : pD == ID && (fD = (CD - cD) / wD + 4), fD *= 60), DD.r = fD, DD.g = bD, DD.b = QD, DD
      }
      toLinearSpace() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const CD = new BD;
        return this.toLinearSpaceToRef(CD, DD), CD
      }
      toLinearSpaceToRef(DD) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (DD.r = QD(this.r), DD.g = QD(this.g), DD.b = QD(this.b)) : (DD.r = bD(this.r), DD.g = bD(this.g), DD.b = bD(this.b)), this
      }
      toGammaSpace() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const CD = new BD;
        return this.toGammaSpaceToRef(CD, DD), CD
      }
      toGammaSpaceToRef(DD) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (DD.r = SD(this.r), DD.g = SD(this.g), DD.b = SD(this.b)) : (DD.r = wD(this.r), DD.g = wD(this.g), DD.b = wD(this.b)), this
      }
      static HSVtoRGBToRef(DD, CD, cD, ID) {
        const pD = cD * CD,
          iD = DD / 60,
          fD = pD * (1 - Math.abs(iD % 2 - 1));
        let bD = 0,
          QD = 0,
          wD = 0;
        iD >= 0 && iD <= 1 ? (bD = pD, QD = fD) : iD >= 1 && iD <= 2 ? (bD = fD, QD = pD) : iD >= 2 && iD <= 3 ? (QD = pD, wD = fD) : iD >= 3 && iD <= 4 ? (QD = fD, wD = pD) : iD >= 4 && iD <= 5 ? (bD = fD, wD = pD) : iD >= 5 && iD <= 6 && (bD = pD, wD = fD);
        const SD = cD - pD;
        return ID.r = bD + SD, ID.g = QD + SD, ID.b = wD + SD, ID
      }
      static FromHSV(DD, CD, cD) {
        const ID = new BD(0, 0, 0);
        return BD.HSVtoRGBToRef(DD, CD, cD, ID), ID
      }
      static FromHexString(DD) {
        return new BD(0, 0, 0).fromHexString(DD)
      }
      static FromArray(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new BD(DD[CD], DD[CD + 1], DD[CD + 2])
      }
      static FromArrayToRef(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        cD.r = DD[CD], cD.g = DD[CD + 1], cD.b = DD[CD + 2]
      }
      static FromInts(DD, CD, cD) {
        return new BD(DD / 255, CD / 255, cD / 255)
      }
      static Lerp(DD, CD, cD) {
        const ID = new BD(0, 0, 0);
        return BD.LerpToRef(DD, CD, cD, ID), ID
      }
      static LerpToRef(DD, CD, cD, ID) {
        ID.r = DD.r + (CD.r - DD.r) * cD, ID.g = DD.g + (CD.g - DD.g) * cD, ID.b = DD.b + (CD.b - DD.b) * cD
      }
      static Hermite(DD, CD, cD, ID, pD) {
        const iD = pD * pD,
          fD = pD * iD,
          bD = 2 * fD - 3 * iD + 1,
          QD = -2 * fD + 3 * iD,
          wD = fD - 2 * iD + pD,
          SD = fD - iD,
          yD = DD.r * bD + cD.r * QD + CD.r * wD + ID.r * SD,
          MD = DD.g * bD + cD.g * QD + CD.g * wD + ID.g * SD,
          tD = DD.b * bD + cD.b * QD + CD.b * wD + ID.b * SD;
        return new BD(yD, MD, tD)
      }
      static Hermite1stDerivative(DD, CD, cD, ID, pD) {
        const iD = BD.Black();
        return this.Hermite1stDerivativeToRef(DD, CD, cD, ID, pD, iD), iD
      }
      static Hermite1stDerivativeToRef(DD, CD, cD, ID, pD, iD) {
        const fD = pD * pD;
        iD.r = 6 * (fD - pD) * DD.r + (3 * fD - 4 * pD + 1) * CD.r + 6 * (-fD + pD) * cD.r + (3 * fD - 2 * pD) * ID.r, iD.g = 6 * (fD - pD) * DD.g + (3 * fD - 4 * pD + 1) * CD.g + 6 * (-fD + pD) * cD.g + (3 * fD - 2 * pD) * ID.g, iD.b = 6 * (fD - pD) * DD.b + (3 * fD - 4 * pD + 1) * CD.b + 6 * (-fD + pD) * cD.b + (3 * fD - 2 * pD) * ID.b
      }
      static Red() {
        return new BD(1, 0, 0)
      }
      static Green() {
        return new BD(0, 1, 0)
      }
      static Blue() {
        return new BD(0, 0, 1)
      }
      static Black() {
        return new BD(0, 0, 0)
      }
      static get BlackReadOnly() {
        return BD._BlackReadOnly
      }
      static White() {
        return new BD(1, 1, 1)
      }
      static Purple() {
        return new BD(.5, 0, .5)
      }
      static Magenta() {
        return new BD(1, 0, 1)
      }
      static Yellow() {
        return new BD(1, 1, 0)
      }
      static Gray() {
        return new BD(.5, .5, .5)
      }
      static Teal() {
        return new BD(0, 1, 1)
      }
      static Random() {
        return new BD(Math.random(), Math.random(), Math.random())
      }
    }
    BD._V8PerformanceHack = new BD(.5, .5, .5), BD._BlackReadOnly = BD.Black();
    class yD {
      constructor() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = DD, this.g = CD, this.b = cD, this.a = ID
      }
      XcD() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return DD[CD] = this.r, DD[CD + 1] = this.g, DD[CD + 2] = this.b, DD[CD + 3] = this.a, this
      }
      QCD(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = DD[CD], this.g = DD[CD + 1], this.b = DD[CD + 2], this.a = DD[CD + 3], this
      }
      equals(DD) {
        return DD && this.r === DD.r && this.g === DD.g && this.b === DD.b && this.a === DD.a
      }
      add(DD) {
        return new yD(this.r + DD.r, this.g + DD.g, this.b + DD.b, this.a + DD.a)
      }
      addToRef(DD, CD) {
        return CD.r = this.r + DD.r, CD.g = this.g + DD.g, CD.b = this.b + DD.b, CD.a = this.a + DD.a, CD
      }
      addInPlace(DD) {
        return this.r += DD.r, this.g += DD.g, this.b += DD.b, this.a += DD.a, this
      }
      addInPlaceFromFloats(DD, CD, cD, ID) {
        return this.r += DD, this.g += CD, this.b += cD, this.a += ID, this
      }
      subtract(DD) {
        return new yD(this.r - DD.r, this.g - DD.g, this.b - DD.b, this.a - DD.a)
      }
      subtractToRef(DD, CD) {
        return CD.r = this.r - DD.r, CD.g = this.g - DD.g, CD.b = this.b - DD.b, CD.a = this.a - DD.a, CD
      }
      EcD(DD) {
        return this.r -= DD.r, this.g -= DD.g, this.b -= DD.b, this.a -= DD.a, this
      }
      subtractFromFloats(DD, CD, cD, ID) {
        return new yD(this.r - DD, this.g - CD, this.b - cD, this.a - ID)
      }
      subtractFromFloatsToRef(DD, CD, cD, ID, pD) {
        return pD.r = this.r - DD, pD.g = this.g - CD, pD.b = this.b - cD, pD.a = this.a - ID, pD
      }
      scale(DD) {
        return new yD(this.r * DD, this.g * DD, this.b * DD, this.a * DD)
      }
      scaleInPlace(DD) {
        return this.r *= DD, this.g *= DD, this.b *= DD, this.a *= DD, this
      }
      scaleToRef(DD, CD) {
        return CD.r = this.r * DD, CD.g = this.g * DD, CD.b = this.b * DD, CD.a = this.a * DD, CD
      }
      scaleAndAddToRef(DD, CD) {
        return CD.r += this.r * DD, CD.g += this.g * DD, CD.b += this.b * DD, CD.a += this.a * DD, CD
      }
      clampToRef() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        return cD.r = (0, iD.Clamp)(this.r, DD, CD), cD.g = (0, iD.Clamp)(this.g, DD, CD), cD.b = (0, iD.Clamp)(this.b, DD, CD), cD.a = (0, iD.Clamp)(this.a, DD, CD), cD
      }
      multiply(DD) {
        return new yD(this.r * DD.r, this.g * DD.g, this.b * DD.b, this.a * DD.a)
      }
      multiplyToRef(DD, CD) {
        return CD.r = this.r * DD.r, CD.g = this.g * DD.g, CD.b = this.b * DD.b, CD.a = this.a * DD.a, CD
      }
      multiplyInPlace(DD) {
        return this.r *= DD.r, this.g *= DD.g, this.b *= DD.b, this.a *= DD.a, this
      }
      multiplyByFloats(DD, CD, cD, ID) {
        return new yD(this.r * DD, this.g * CD, this.b * cD, this.a * ID)
      }
      divide(DD) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(DD, CD) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(DD) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(DD) {
        return this.r = Math.min(this.r, DD.r), this.g = Math.min(this.g, DD.g), this.b = Math.min(this.b, DD.b), this.a = Math.min(this.a, DD.a), this
      }
      maximizeInPlace(DD) {
        return this.r = Math.max(this.r, DD.r), this.g = Math.max(this.g, DD.g), this.b = Math.max(this.b, DD.b), this.a = Math.max(this.a, DD.a), this
      }
      minimizeInPlaceFromFloats(DD, CD, cD, ID) {
        return this.r = Math.min(DD, this.r), this.g = Math.min(CD, this.g), this.b = Math.min(cD, this.b), this.a = Math.min(ID, this.a), this
      }
      maximizeInPlaceFromFloats(DD, CD, cD, ID) {
        return this.r = Math.max(DD, this.r), this.g = Math.max(CD, this.g), this.b = Math.max(cD, this.b), this.a = Math.max(ID, this.a), this
      }
      floorToRef(DD) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(DD) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      pp() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(DD) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pD.c;
        return (0, iD.WithinEpsilon)(this.r, DD.r, CD) && (0, iD.WithinEpsilon)(this.g, DD.g, CD) && (0, iD.WithinEpsilon)(this.b, DD.b, CD) && (0, iD.WithinEpsilon)(this.a, DD.a, CD)
      }
      wfD(DD, CD, cD, ID) {
        return this.r === DD && this.g === CD && this.b === cD && this.a === ID
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let DD = 255 * this.r | 0;
        return DD = 397 * DD ^ 255 * this.g, DD = 397 * DD ^ 255 * this.b, DD = 397 * DD ^ 255 * this.a, DD
      }
      clone() {
        return (new yD).YCD(this)
      }
      YCD(DD) {
        return this.r = DD.r, this.g = DD.g, this.b = DD.b, this.a = DD.a, this
      }
      K4(DD, CD, cD, ID) {
        return this.r = DD, this.g = CD, this.b = cD, this.a = ID, this
      }
      set(DD, CD, cD, ID) {
        return this.K4(DD, CD, cD, ID)
      }
      YF(DD) {
        return this.r = this.g = this.b = this.a = DD, this
      }
      toHexString() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const CD = Math.round(255 * this.r),
          cD = Math.round(255 * this.g),
          ID = Math.round(255 * this.b);
        if (DD) return "#" + (0, iD.ToHex)(CD) + (0, iD.ToHex)(cD) + (0, iD.ToHex)(ID);
        const pD = Math.round(255 * this.a);
        return "#" + (0, iD.ToHex)(CD) + (0, iD.ToHex)(cD) + (0, iD.ToHex)(ID) + (0, iD.ToHex)(pD)
      }
      fromHexString(DD) {
        return "#" !== DD.substring(0, 1) || 9 !== DD.length && 7 !== DD.length || (this.r = parseInt(DD.substring(1, 3), 16) / 255, this.g = parseInt(DD.substring(3, 5), 16) / 255, this.b = parseInt(DD.substring(5, 7), 16) / 255, 9 === DD.length && (this.a = parseInt(DD.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const CD = new yD;
        return this.toLinearSpaceToRef(CD, DD), CD
      }
      toLinearSpaceToRef(DD) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (DD.r = QD(this.r), DD.g = QD(this.g), DD.b = QD(this.b)) : (DD.r = bD(this.r), DD.g = bD(this.g), DD.b = bD(this.b)), DD.a = this.a, this
      }
      toGammaSpace() {
        let DD = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const CD = new yD;
        return this.toGammaSpaceToRef(CD, DD), CD
      }
      toGammaSpaceToRef(DD) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (DD.r = SD(this.r), DD.g = SD(this.g), DD.b = SD(this.b)) : (DD.r = wD(this.r), DD.g = wD(this.g), DD.b = wD(this.b)), DD.a = this.a, this
      }
      static FromHexString(DD) {
        return "#" !== DD.substring(0, 1) || 9 !== DD.length && 7 !== DD.length ? new yD(0, 0, 0, 0) : new yD(0, 0, 0, 1).fromHexString(DD)
      }
      static Lerp(DD, CD, cD) {
        return yD.LerpToRef(DD, CD, cD, new yD)
      }
      static LerpToRef(DD, CD, cD, ID) {
        return ID.r = DD.r + (CD.r - DD.r) * cD, ID.g = DD.g + (CD.g - DD.g) * cD, ID.b = DD.b + (CD.b - DD.b) * cD, ID.a = DD.a + (CD.a - DD.a) * cD, ID
      }
      static Hermite(DD, CD, cD, ID, pD) {
        const iD = pD * pD,
          fD = pD * iD,
          bD = 2 * fD - 3 * iD + 1,
          QD = -2 * fD + 3 * iD,
          wD = fD - 2 * iD + pD,
          SD = fD - iD,
          BD = DD.r * bD + cD.r * QD + CD.r * wD + ID.r * SD,
          MD = DD.g * bD + cD.g * QD + CD.g * wD + ID.g * SD,
          tD = DD.b * bD + cD.b * QD + CD.b * wD + ID.b * SD,
          ZD = DD.a * bD + cD.a * QD + CD.a * wD + ID.a * SD;
        return new yD(BD, MD, tD, ZD)
      }
      static Hermite1stDerivative(DD, CD, cD, ID, pD) {
        const iD = new yD;
        return this.Hermite1stDerivativeToRef(DD, CD, cD, ID, pD, iD), iD
      }
      static Hermite1stDerivativeToRef(DD, CD, cD, ID, pD, iD) {
        const fD = pD * pD;
        iD.r = 6 * (fD - pD) * DD.r + (3 * fD - 4 * pD + 1) * CD.r + 6 * (-fD + pD) * cD.r + (3 * fD - 2 * pD) * ID.r, iD.g = 6 * (fD - pD) * DD.g + (3 * fD - 4 * pD + 1) * CD.g + 6 * (-fD + pD) * cD.g + (3 * fD - 2 * pD) * ID.g, iD.b = 6 * (fD - pD) * DD.b + (3 * fD - 4 * pD + 1) * CD.b + 6 * (-fD + pD) * cD.b + (3 * fD - 2 * pD) * ID.b, iD.a = 6 * (fD - pD) * DD.a + (3 * fD - 4 * pD + 1) * CD.a + 6 * (-fD + pD) * cD.a + (3 * fD - 2 * pD) * ID.a
      }
      static FromColor3(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new yD(DD.r, DD.g, DD.b, CD)
      }
      static FromArray(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new yD(DD[CD], DD[CD + 1], DD[CD + 2], DD[CD + 3])
      }
      static FromArrayToRef(DD) {
        let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          cD = arguments.length > 2 ? arguments[2] : void 0;
        cD.r = DD[CD], cD.g = DD[CD + 1], cD.b = DD[CD + 2], cD.a = DD[CD + 3]
      }
      static FromInts(DD, CD, cD, ID) {
        return new yD(DD / 255, CD / 255, cD / 255, ID / 255)
      }
      static CheckColors4(DD, CD) {
        if (DD.length === 3 * CD) {
          const CD = [];
          for (let cD = 0; cD < DD.length; cD += 3) {
            const ID = cD / 3 * 4;
            CD[ID] = DD[cD], CD[ID + 1] = DD[cD + 1], CD[ID + 2] = DD[cD + 2], CD[ID + 3] = 1
          }
          return CD
        }
        return DD
      }
    }
    yD._V8PerformanceHack = new yD(.5, .5, .5, .5);
    class MD {}
    MD.Color3 = (0, ID.b)(3, BD.Black), MD.Color4 = (0, ID.b)(3, (() => new yD(0, 0, 0, 0)));
    let tD = !1;

    function ZD() {
      tD || (tD = !0, Object.defineProperties(BD.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(yD.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, fD.d)("BABYLON.Color3", BD), (0, fD.d)("BABYLON.Color4", yD))
    }
  },
  36449: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => iD,
      g: () => ID,
      h: () => pD
    });
    const ID = 1 / 2.2,
      pD = 2.2;
    Math.sqrt(5);
    let iD = .001
  },
  36479: (DD, CD, cD) => {
    function ID(DD) {
      return parseInt(DD.toString().replace(/\W/g, ""))
    }

    function pD(DD, CD) {
      let cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(DD - CD) <= cD
    }

    function iD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return DD < CD - ID || DD > cD + ID
    }

    function fD(DD, CD) {
      return DD === CD ? DD : Math.random() * (CD - DD) + DD
    }

    function bD(DD, CD, cD) {
      return DD + (CD - DD) * cD
    }

    function QD(DD, CD, cD) {
      let ID = oD(CD - DD, 360);
      return ID > 180 && (ID -= 360), DD + ID * yD(cD)
    }

    function wD(DD, CD, cD) {
      let ID;
      return ID = DD != CD ? yD((cD - DD) / (CD - DD)) : 0, ID
    }

    function SD(DD, CD, cD, ID, pD) {
      const iD = pD * pD,
        fD = pD * iD;
      return DD * (2 * fD - 3 * iD + 1) + cD * (-2 * fD + 3 * iD) + CD * (fD - 2 * iD + pD) + ID * (fD - iD)
    }

    function BD(DD, CD, cD, ID, pD) {
      const iD = pD * pD;
      return 6 * (iD - pD) * DD + (3 * iD - 4 * pD + 1) * CD + 6 * (-iD + pD) * cD + (3 * iD - 2 * pD) * ID
    }

    function yD(DD) {
      let CD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        cD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(cD, Math.max(CD, DD))
    }

    function MD(DD) {
      return DD -= 2 * Math.PI * Math.floor((DD + Math.PI) / (2 * Math.PI))
    }

    function tD(DD) {
      const CD = DD.toString(16);
      return DD <= 15 ? ("0" + CD).toUpperCase() : CD.toUpperCase()
    }

    function ZD(DD) {
      if (Math.log2) return Math.floor(Math.log2(DD));
      if (DD < 0) return NaN;
      if (0 === DD) return -1 / 0;
      let CD = 0;
      if (DD < 1) {
        for (; DD < 1;) CD++, DD *= 2;
        CD = -CD
      } else if (DD > 1)
        for (; DD > 1;) CD++, DD = Math.floor(DD / 2);
      return CD
    }

    function oD(DD, CD) {
      return DD - Math.floor(DD / CD) * CD
    }

    function vD(DD, CD, cD) {
      return (DD - CD) / (cD - CD)
    }

    function ND(DD, CD, cD) {
      return DD * (cD - CD) + CD
    }

    function gD(DD, CD) {
      let cD = oD(CD - DD, 360);
      return cD > 180 && (cD -= 360), cD
    }

    function XD(DD, CD) {
      const cD = oD(DD, 2 * CD);
      return CD - Math.abs(cD - CD)
    }

    function mD(DD, CD, cD) {
      let ID = yD(cD);
      return ID = -2 * ID * ID * ID + 3 * ID * ID, CD * ID + DD * (1 - ID)
    }

    function nD(DD, CD, cD) {
      let ID;
      return ID = Math.abs(CD - DD) <= cD ? CD : DD + Math.sign(CD - DD) * cD, ID
    }

    function OD(DD, CD, cD) {
      const ID = gD(DD, CD);
      let pD;
      return pD = -cD < ID && ID < cD ? CD : nD(DD, CD = DD + ID, cD), pD
    }

    function PD(DD, CD, cD) {
      return (DD - CD) / (cD - CD)
    }

    function HD(DD, CD, cD) {
      return (cD - CD) * DD + CD
    }

    function UD(DD, CD) {
      const cD = DD % CD;
      return 0 === cD ? CD : UD(CD, cD)
    }
    cD.r(CD), cD.d(CD, {
      Clamp: () => yD,
      DeltaAngle: () => gD,
      Denormalize: () => ND,
      ExtractAsInt: () => ID,
      Hermite: () => SD,
      Hermite1stDerivative: () => BD,
      HighestCommonFactor: () => UD,
      ILog2: () => ZD,
      InverseLerp: () => wD,
      Lerp: () => bD,
      LerpAngle: () => QD,
      MoveTowards: () => nD,
      MoveTowardsAngle: () => OD,
      Normalize: () => vD,
      NormalizeRadians: () => MD,
      OutsideRange: () => iD,
      PercentToRange: () => HD,
      PingPong: () => XD,
      RandomRange: () => fD,
      RangeToPercent: () => PD,
      Repeat: () => oD,
      SmoothStep: () => mD,
      ToHex: () => tD,
      WithinEpsilon: () => pD
    })
  },
  36452: (DD, CD, cD) => {
    function ID(DD, CD) {
      const cD = [];
      for (let ID = 0; ID < DD; ++ID) cD.push(CD());
      return cD
    }

    function pD(DD, CD) {
      return ID(DD, CD)
    }
    cD.d(CD, {
      b: () => ID,
      d: () => pD,
      f: () => fD
    });
    const iD = ["push", "splice", "pop", "shift", "unshift"];

    function fD(DD, CD) {
      const cD = iD.map((cD => function(DD, CD, cD) {
        const ID = DD[CD];
        if ("function" !== typeof ID) return null;
        const pD = function() {
          const ID = DD.length,
            iD = pD.previous.apply(DD, arguments);
          return cD(CD, ID), iD
        };
        return ID.next = pD, pD.previous = ID, DD[CD] = pD, () => {
          const cD = pD.previous;
          if (!cD) return;
          const ID = pD.next;
          ID ? (cD.next = ID, ID.previous = cD) : (cD.next = void 0, DD[CD] = cD), pD.next = void 0, pD.previous = void 0
        }
      }(DD, cD, CD)));
      return () => {
        for (const DD of cD) DD?.()
      }
    }
  },
  36488: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => iD,
      d: () => pD
    });
    const ID = {};

    function pD(DD, CD) {
      ID[DD] = CD
    }

    function iD(DD) {
      return ID[DD]
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);