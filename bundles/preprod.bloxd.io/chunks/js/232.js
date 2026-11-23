export const id = 232;
export const ids = [232];
export const modules = {
  37142: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => WC,
      g: () => NC,
      i: () => SC,
      j: () => MC
    });
    var QC = ZC(36971),
      wC = ZC(36968),
      bC = ZC(36991),
      nC = ZC(37002);

    function fC(CC) {
      return Math.pow(CC, wC.i)
    }

    function oC(CC) {
      return CC <= .04045 ? .0773993808 * CC : Math.pow(.947867299 * (CC + .055), 2.4)
    }

    function qC(CC) {
      return Math.pow(CC, wC.g)
    }

    function FC(CC) {
      return CC <= .0031308 ? 12.92 * CC : 1.055 * Math.pow(CC, .41666) - .055
    }
    class WC {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = CC, this.g = zC, this.b = ZC
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let CC = 255 * this.r | 0;
        return CC = 397 * CC ^ 255 * this.g, CC = 397 * CC ^ 255 * this.b, CC
      }
      toArray(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return CC[zC] = this.r, CC[zC + 1] = this.g, CC[zC + 2] = this.b, this
      }
      azC(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return WC.FromArrayToRef(CC, zC, this), this
      }
      toColor4() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new NC(this.r, this.g, this.b, CC)
      }
      VZC() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(CC) {
        return new WC(this.r * CC.r, this.g * CC.g, this.b * CC.b)
      }
      multiplyToRef(CC, zC) {
        return zC.r = this.r * CC.r, zC.g = this.g * CC.g, zC.b = this.b * CC.b, zC
      }
      multiplyInPlace(CC) {
        return this.r *= CC.r, this.g *= CC.g, this.b *= CC.b, this
      }
      multiplyByFloats(CC, zC, ZC) {
        return new WC(this.r * CC, this.g * zC, this.b * ZC)
      }
      divide(CC) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(CC, zC) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(CC) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(CC) {
        return this.minimizeInPlaceFromFloats(CC.r, CC.g, CC.b)
      }
      maximizeInPlace(CC) {
        return this.maximizeInPlaceFromFloats(CC.r, CC.g, CC.b)
      }
      minimizeInPlaceFromFloats(CC, zC, ZC) {
        return this.r = Math.min(CC, this.r), this.g = Math.min(zC, this.g), this.b = Math.min(ZC, this.b), this
      }
      maximizeInPlaceFromFloats(CC, zC, ZC) {
        return this.r = Math.max(CC, this.r), this.g = Math.max(zC, this.g), this.b = Math.max(ZC, this.b), this
      }
      floorToRef(CC) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(CC) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(CC) {
        return CC && this.r === CC.r && this.g === CC.g && this.b === CC.b
      }
      equalsFloats(CC, zC, ZC) {
        return this.dnC(CC, zC, ZC)
      }
      dnC(CC, zC, ZC) {
        return this.r === CC && this.g === zC && this.b === ZC
      }
      equalsWithEpsilon(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wC.e;
        return (0, bC.WithinEpsilon)(this.r, CC.r, zC) && (0, bC.WithinEpsilon)(this.g, CC.g, zC) && (0, bC.WithinEpsilon)(this.b, CC.b, zC)
      }
      Of() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(CC) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(CC) {
        return new WC(this.r * CC, this.g * CC, this.b * CC)
      }
      scaleInPlace(CC) {
        return this.r *= CC, this.g *= CC, this.b *= CC, this
      }
      scaleToRef(CC, zC) {
        return zC.r = this.r * CC, zC.g = this.g * CC, zC.b = this.b * CC, zC
      }
      scaleAndAddToRef(CC, zC) {
        return zC.r += this.r * CC, zC.g += this.g * CC, zC.b += this.b * CC, zC
      }
      clampToRef() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        return ZC.r = (0, bC.Clamp)(this.r, CC, zC), ZC.g = (0, bC.Clamp)(this.g, CC, zC), ZC.b = (0, bC.Clamp)(this.b, CC, zC), ZC
      }
      add(CC) {
        return new WC(this.r + CC.r, this.g + CC.g, this.b + CC.b)
      }
      addInPlace(CC) {
        return this.r += CC.r, this.g += CC.g, this.b += CC.b, this
      }
      addInPlaceFromFloats(CC, zC, ZC) {
        return this.r += CC, this.g += zC, this.b += ZC, this
      }
      addToRef(CC, zC) {
        return zC.r = this.r + CC.r, zC.g = this.g + CC.g, zC.b = this.b + CC.b, zC
      }
      subtract(CC) {
        return new WC(this.r - CC.r, this.g - CC.g, this.b - CC.b)
      }
      subtractToRef(CC, zC) {
        return zC.r = this.r - CC.r, zC.g = this.g - CC.g, zC.b = this.b - CC.b, zC
      }
      RQC(CC) {
        return this.r -= CC.r, this.g -= CC.g, this.b -= CC.b, this
      }
      subtractFromFloats(CC, zC, ZC) {
        return new WC(this.r - CC, this.g - zC, this.b - ZC)
      }
      subtractFromFloatsToRef(CC, zC, ZC, QC) {
        return QC.r = this.r - CC, QC.g = this.g - zC, QC.b = this.b - ZC, QC
      }
      clone() {
        return new WC(this.r, this.g, this.b)
      }
      Av(CC) {
        return this.r = CC.r, this.g = CC.g, this.b = CC.b, this
      }
      L_(CC, zC, ZC) {
        return this.r = CC, this.g = zC, this.b = ZC, this
      }
      set(CC, zC, ZC) {
        return this.L_(CC, zC, ZC)
      }
      Q_(CC) {
        return this.r = this.g = this.b = CC, this
      }
      toHexString() {
        const CC = Math.round(255 * this.r),
          zC = Math.round(255 * this.g),
          ZC = Math.round(255 * this.b);
        return "#" + (0, bC.ToHex)(CC) + (0, bC.ToHex)(zC) + (0, bC.ToHex)(ZC)
      }
      fromHexString(CC) {
        return "#" !== CC.substring(0, 1) || 7 !== CC.length || (this.r = parseInt(CC.substring(1, 3), 16) / 255, this.g = parseInt(CC.substring(3, 5), 16) / 255, this.b = parseInt(CC.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new WC)
      }
      toHSVToRef(CC) {
        const zC = this.r,
          ZC = this.g,
          QC = this.b,
          wC = Math.max(zC, ZC, QC),
          bC = Math.min(zC, ZC, QC);
        let nC = 0,
          fC = 0;
        const oC = wC,
          qC = wC - bC;
        return 0 !== wC && (fC = qC / wC), wC != bC && (wC == zC ? (nC = (ZC - QC) / qC, ZC < QC && (nC += 6)) : wC == ZC ? nC = (QC - zC) / qC + 2 : wC == QC && (nC = (zC - ZC) / qC + 4), nC *= 60), CC.r = nC, CC.g = fC, CC.b = oC, CC
      }
      toLinearSpace() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zC = new WC;
        return this.toLinearSpaceToRef(zC, CC), zC
      }
      toLinearSpaceToRef(CC) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (CC.r = oC(this.r), CC.g = oC(this.g), CC.b = oC(this.b)) : (CC.r = fC(this.r), CC.g = fC(this.g), CC.b = fC(this.b)), this
      }
      toGammaSpace() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zC = new WC;
        return this.toGammaSpaceToRef(zC, CC), zC
      }
      toGammaSpaceToRef(CC) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (CC.r = FC(this.r), CC.g = FC(this.g), CC.b = FC(this.b)) : (CC.r = qC(this.r), CC.g = qC(this.g), CC.b = qC(this.b)), this
      }
      static HSVtoRGBToRef(CC, zC, ZC, QC) {
        const wC = ZC * zC,
          bC = CC / 60,
          nC = wC * (1 - Math.abs(bC % 2 - 1));
        let fC = 0,
          oC = 0,
          qC = 0;
        bC >= 0 && bC <= 1 ? (fC = wC, oC = nC) : bC >= 1 && bC <= 2 ? (fC = nC, oC = wC) : bC >= 2 && bC <= 3 ? (oC = wC, qC = nC) : bC >= 3 && bC <= 4 ? (oC = nC, qC = wC) : bC >= 4 && bC <= 5 ? (fC = nC, qC = wC) : bC >= 5 && bC <= 6 && (fC = wC, qC = nC);
        const FC = ZC - wC;
        return QC.r = fC + FC, QC.g = oC + FC, QC.b = qC + FC, QC
      }
      static FromHSV(CC, zC, ZC) {
        const QC = new WC(0, 0, 0);
        return WC.HSVtoRGBToRef(CC, zC, ZC, QC), QC
      }
      static FromHexString(CC) {
        return new WC(0, 0, 0).fromHexString(CC)
      }
      static FromArray(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new WC(CC[zC], CC[zC + 1], CC[zC + 2])
      }
      static FromArrayToRef(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        ZC.r = CC[zC], ZC.g = CC[zC + 1], ZC.b = CC[zC + 2]
      }
      static FromInts(CC, zC, ZC) {
        return new WC(CC / 255, zC / 255, ZC / 255)
      }
      static Lerp(CC, zC, ZC) {
        const QC = new WC(0, 0, 0);
        return WC.LerpToRef(CC, zC, ZC, QC), QC
      }
      static LerpToRef(CC, zC, ZC, QC) {
        QC.r = CC.r + (zC.r - CC.r) * ZC, QC.g = CC.g + (zC.g - CC.g) * ZC, QC.b = CC.b + (zC.b - CC.b) * ZC
      }
      static Hermite(CC, zC, ZC, QC, wC) {
        const bC = wC * wC,
          nC = wC * bC,
          fC = 2 * nC - 3 * bC + 1,
          oC = -2 * nC + 3 * bC,
          qC = nC - 2 * bC + wC,
          FC = nC - bC,
          NC = CC.r * fC + ZC.r * oC + zC.r * qC + QC.r * FC,
          MC = CC.g * fC + ZC.g * oC + zC.g * qC + QC.g * FC,
          gC = CC.b * fC + ZC.b * oC + zC.b * qC + QC.b * FC;
        return new WC(NC, MC, gC)
      }
      static Hermite1stDerivative(CC, zC, ZC, QC, wC) {
        const bC = WC.Black();
        return this.Hermite1stDerivativeToRef(CC, zC, ZC, QC, wC, bC), bC
      }
      static Hermite1stDerivativeToRef(CC, zC, ZC, QC, wC, bC) {
        const nC = wC * wC;
        bC.r = 6 * (nC - wC) * CC.r + (3 * nC - 4 * wC + 1) * zC.r + 6 * (-nC + wC) * ZC.r + (3 * nC - 2 * wC) * QC.r, bC.g = 6 * (nC - wC) * CC.g + (3 * nC - 4 * wC + 1) * zC.g + 6 * (-nC + wC) * ZC.g + (3 * nC - 2 * wC) * QC.g, bC.b = 6 * (nC - wC) * CC.b + (3 * nC - 4 * wC + 1) * zC.b + 6 * (-nC + wC) * ZC.b + (3 * nC - 2 * wC) * QC.b
      }
      static Red() {
        return new WC(1, 0, 0)
      }
      static Green() {
        return new WC(0, 1, 0)
      }
      static Blue() {
        return new WC(0, 0, 1)
      }
      static Black() {
        return new WC(0, 0, 0)
      }
      static get BlackReadOnly() {
        return WC._BlackReadOnly
      }
      static White() {
        return new WC(1, 1, 1)
      }
      static Purple() {
        return new WC(.5, 0, .5)
      }
      static Magenta() {
        return new WC(1, 0, 1)
      }
      static Yellow() {
        return new WC(1, 1, 0)
      }
      static Gray() {
        return new WC(.5, .5, .5)
      }
      static Teal() {
        return new WC(0, 1, 1)
      }
      static Random() {
        return new WC(Math.random(), Math.random(), Math.random())
      }
    }
    WC._V8PerformanceHack = new WC(.5, .5, .5), WC._BlackReadOnly = WC.Black();
    class NC {
      constructor() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = CC, this.g = zC, this.b = ZC, this.a = QC
      }
      VZC() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return CC[zC] = this.r, CC[zC + 1] = this.g, CC[zC + 2] = this.b, CC[zC + 3] = this.a, this
      }
      azC(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = CC[zC], this.g = CC[zC + 1], this.b = CC[zC + 2], this.a = CC[zC + 3], this
      }
      equals(CC) {
        return CC && this.r === CC.r && this.g === CC.g && this.b === CC.b && this.a === CC.a
      }
      add(CC) {
        return new NC(this.r + CC.r, this.g + CC.g, this.b + CC.b, this.a + CC.a)
      }
      addToRef(CC, zC) {
        return zC.r = this.r + CC.r, zC.g = this.g + CC.g, zC.b = this.b + CC.b, zC.a = this.a + CC.a, zC
      }
      addInPlace(CC) {
        return this.r += CC.r, this.g += CC.g, this.b += CC.b, this.a += CC.a, this
      }
      addInPlaceFromFloats(CC, zC, ZC, QC) {
        return this.r += CC, this.g += zC, this.b += ZC, this.a += QC, this
      }
      subtract(CC) {
        return new NC(this.r - CC.r, this.g - CC.g, this.b - CC.b, this.a - CC.a)
      }
      subtractToRef(CC, zC) {
        return zC.r = this.r - CC.r, zC.g = this.g - CC.g, zC.b = this.b - CC.b, zC.a = this.a - CC.a, zC
      }
      RQC(CC) {
        return this.r -= CC.r, this.g -= CC.g, this.b -= CC.b, this.a -= CC.a, this
      }
      subtractFromFloats(CC, zC, ZC, QC) {
        return new NC(this.r - CC, this.g - zC, this.b - ZC, this.a - QC)
      }
      subtractFromFloatsToRef(CC, zC, ZC, QC, wC) {
        return wC.r = this.r - CC, wC.g = this.g - zC, wC.b = this.b - ZC, wC.a = this.a - QC, wC
      }
      scale(CC) {
        return new NC(this.r * CC, this.g * CC, this.b * CC, this.a * CC)
      }
      scaleInPlace(CC) {
        return this.r *= CC, this.g *= CC, this.b *= CC, this.a *= CC, this
      }
      scaleToRef(CC, zC) {
        return zC.r = this.r * CC, zC.g = this.g * CC, zC.b = this.b * CC, zC.a = this.a * CC, zC
      }
      scaleAndAddToRef(CC, zC) {
        return zC.r += this.r * CC, zC.g += this.g * CC, zC.b += this.b * CC, zC.a += this.a * CC, zC
      }
      clampToRef() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        return ZC.r = (0, bC.Clamp)(this.r, CC, zC), ZC.g = (0, bC.Clamp)(this.g, CC, zC), ZC.b = (0, bC.Clamp)(this.b, CC, zC), ZC.a = (0, bC.Clamp)(this.a, CC, zC), ZC
      }
      multiply(CC) {
        return new NC(this.r * CC.r, this.g * CC.g, this.b * CC.b, this.a * CC.a)
      }
      multiplyToRef(CC, zC) {
        return zC.r = this.r * CC.r, zC.g = this.g * CC.g, zC.b = this.b * CC.b, zC.a = this.a * CC.a, zC
      }
      multiplyInPlace(CC) {
        return this.r *= CC.r, this.g *= CC.g, this.b *= CC.b, this.a *= CC.a, this
      }
      multiplyByFloats(CC, zC, ZC, QC) {
        return new NC(this.r * CC, this.g * zC, this.b * ZC, this.a * QC)
      }
      divide(CC) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(CC, zC) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(CC) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(CC) {
        return this.r = Math.min(this.r, CC.r), this.g = Math.min(this.g, CC.g), this.b = Math.min(this.b, CC.b), this.a = Math.min(this.a, CC.a), this
      }
      maximizeInPlace(CC) {
        return this.r = Math.max(this.r, CC.r), this.g = Math.max(this.g, CC.g), this.b = Math.max(this.b, CC.b), this.a = Math.max(this.a, CC.a), this
      }
      minimizeInPlaceFromFloats(CC, zC, ZC, QC) {
        return this.r = Math.min(CC, this.r), this.g = Math.min(zC, this.g), this.b = Math.min(ZC, this.b), this.a = Math.min(QC, this.a), this
      }
      maximizeInPlaceFromFloats(CC, zC, ZC, QC) {
        return this.r = Math.max(CC, this.r), this.g = Math.max(zC, this.g), this.b = Math.max(ZC, this.b), this.a = Math.max(QC, this.a), this
      }
      floorToRef(CC) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(CC) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      Of() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(CC) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : wC.e;
        return (0, bC.WithinEpsilon)(this.r, CC.r, zC) && (0, bC.WithinEpsilon)(this.g, CC.g, zC) && (0, bC.WithinEpsilon)(this.b, CC.b, zC) && (0, bC.WithinEpsilon)(this.a, CC.a, zC)
      }
      dnC(CC, zC, ZC, QC) {
        return this.r === CC && this.g === zC && this.b === ZC && this.a === QC
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let CC = 255 * this.r | 0;
        return CC = 397 * CC ^ 255 * this.g, CC = 397 * CC ^ 255 * this.b, CC = 397 * CC ^ 255 * this.a, CC
      }
      clone() {
        return (new NC).Av(this)
      }
      Av(CC) {
        return this.r = CC.r, this.g = CC.g, this.b = CC.b, this.a = CC.a, this
      }
      L_(CC, zC, ZC, QC) {
        return this.r = CC, this.g = zC, this.b = ZC, this.a = QC, this
      }
      set(CC, zC, ZC, QC) {
        return this.L_(CC, zC, ZC, QC)
      }
      Q_(CC) {
        return this.r = this.g = this.b = this.a = CC, this
      }
      toHexString() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zC = Math.round(255 * this.r),
          ZC = Math.round(255 * this.g),
          QC = Math.round(255 * this.b);
        if (CC) return "#" + (0, bC.ToHex)(zC) + (0, bC.ToHex)(ZC) + (0, bC.ToHex)(QC);
        const wC = Math.round(255 * this.a);
        return "#" + (0, bC.ToHex)(zC) + (0, bC.ToHex)(ZC) + (0, bC.ToHex)(QC) + (0, bC.ToHex)(wC)
      }
      fromHexString(CC) {
        return "#" !== CC.substring(0, 1) || 9 !== CC.length && 7 !== CC.length || (this.r = parseInt(CC.substring(1, 3), 16) / 255, this.g = parseInt(CC.substring(3, 5), 16) / 255, this.b = parseInt(CC.substring(5, 7), 16) / 255, 9 === CC.length && (this.a = parseInt(CC.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zC = new NC;
        return this.toLinearSpaceToRef(zC, CC), zC
      }
      toLinearSpaceToRef(CC) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (CC.r = oC(this.r), CC.g = oC(this.g), CC.b = oC(this.b)) : (CC.r = fC(this.r), CC.g = fC(this.g), CC.b = fC(this.b)), CC.a = this.a, this
      }
      toGammaSpace() {
        let CC = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const zC = new NC;
        return this.toGammaSpaceToRef(zC, CC), zC
      }
      toGammaSpaceToRef(CC) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (CC.r = FC(this.r), CC.g = FC(this.g), CC.b = FC(this.b)) : (CC.r = qC(this.r), CC.g = qC(this.g), CC.b = qC(this.b)), CC.a = this.a, this
      }
      static FromHexString(CC) {
        return "#" !== CC.substring(0, 1) || 9 !== CC.length && 7 !== CC.length ? new NC(0, 0, 0, 0) : new NC(0, 0, 0, 1).fromHexString(CC)
      }
      static Lerp(CC, zC, ZC) {
        return NC.LerpToRef(CC, zC, ZC, new NC)
      }
      static LerpToRef(CC, zC, ZC, QC) {
        return QC.r = CC.r + (zC.r - CC.r) * ZC, QC.g = CC.g + (zC.g - CC.g) * ZC, QC.b = CC.b + (zC.b - CC.b) * ZC, QC.a = CC.a + (zC.a - CC.a) * ZC, QC
      }
      static Hermite(CC, zC, ZC, QC, wC) {
        const bC = wC * wC,
          nC = wC * bC,
          fC = 2 * nC - 3 * bC + 1,
          oC = -2 * nC + 3 * bC,
          qC = nC - 2 * bC + wC,
          FC = nC - bC,
          WC = CC.r * fC + ZC.r * oC + zC.r * qC + QC.r * FC,
          MC = CC.g * fC + ZC.g * oC + zC.g * qC + QC.g * FC,
          gC = CC.b * fC + ZC.b * oC + zC.b * qC + QC.b * FC,
          SC = CC.a * fC + ZC.a * oC + zC.a * qC + QC.a * FC;
        return new NC(WC, MC, gC, SC)
      }
      static Hermite1stDerivative(CC, zC, ZC, QC, wC) {
        const bC = new NC;
        return this.Hermite1stDerivativeToRef(CC, zC, ZC, QC, wC, bC), bC
      }
      static Hermite1stDerivativeToRef(CC, zC, ZC, QC, wC, bC) {
        const nC = wC * wC;
        bC.r = 6 * (nC - wC) * CC.r + (3 * nC - 4 * wC + 1) * zC.r + 6 * (-nC + wC) * ZC.r + (3 * nC - 2 * wC) * QC.r, bC.g = 6 * (nC - wC) * CC.g + (3 * nC - 4 * wC + 1) * zC.g + 6 * (-nC + wC) * ZC.g + (3 * nC - 2 * wC) * QC.g, bC.b = 6 * (nC - wC) * CC.b + (3 * nC - 4 * wC + 1) * zC.b + 6 * (-nC + wC) * ZC.b + (3 * nC - 2 * wC) * QC.b, bC.a = 6 * (nC - wC) * CC.a + (3 * nC - 4 * wC + 1) * zC.a + 6 * (-nC + wC) * ZC.a + (3 * nC - 2 * wC) * QC.a
      }
      static FromColor3(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new NC(CC.r, CC.g, CC.b, zC)
      }
      static FromArray(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new NC(CC[zC], CC[zC + 1], CC[zC + 2], CC[zC + 3])
      }
      static FromArrayToRef(CC) {
        let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ZC = arguments.length > 2 ? arguments[2] : void 0;
        ZC.r = CC[zC], ZC.g = CC[zC + 1], ZC.b = CC[zC + 2], ZC.a = CC[zC + 3]
      }
      static FromInts(CC, zC, ZC, QC) {
        return new NC(CC / 255, zC / 255, ZC / 255, QC / 255)
      }
      static CheckColors4(CC, zC) {
        if (CC.length === 3 * zC) {
          const zC = [];
          for (let ZC = 0; ZC < CC.length; ZC += 3) {
            const QC = ZC / 3 * 4;
            zC[QC] = CC[ZC], zC[QC + 1] = CC[ZC + 1], zC[QC + 2] = CC[ZC + 2], zC[QC + 3] = 1
          }
          return zC
        }
        return CC
      }
    }
    NC._V8PerformanceHack = new NC(.5, .5, .5, .5);
    class MC {}
    MC.Color3 = (0, QC.d)(3, WC.Black), MC.Color4 = (0, QC.d)(3, (() => new NC(0, 0, 0, 0)));
    let gC = !1;

    function SC() {
      gC || (gC = !0, Object.defineProperties(WC.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(NC.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, nC.d)("BABYLON.Color3", WC), (0, nC.d)("BABYLON.Color4", NC))
    }
  },
  36968: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => bC,
      g: () => QC,
      i: () => wC
    });
    const QC = 1 / 2.2,
      wC = 2.2;
    Math.sqrt(5);
    let bC = .001
  },
  36991: (CC, zC, ZC) => {
    function QC(CC) {
      return parseInt(CC.toString().replace(/\W/g, ""))
    }

    function wC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(CC - zC) <= ZC
    }

    function bC(CC, zC, ZC) {
      let QC = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return CC < zC - QC || CC > ZC + QC
    }

    function nC(CC, zC) {
      return CC === zC ? CC : Math.random() * (zC - CC) + CC
    }

    function fC(CC, zC, ZC) {
      return CC + (zC - CC) * ZC
    }

    function oC(CC, zC, ZC) {
      let QC = pC(zC - CC, 360);
      return QC > 180 && (QC -= 360), CC + QC * NC(ZC)
    }

    function qC(CC, zC, ZC) {
      let QC;
      return QC = CC != zC ? NC((ZC - CC) / (zC - CC)) : 0, QC
    }

    function FC(CC, zC, ZC, QC, wC) {
      const bC = wC * wC,
        nC = wC * bC;
      return CC * (2 * nC - 3 * bC + 1) + ZC * (-2 * nC + 3 * bC) + zC * (nC - 2 * bC + wC) + QC * (nC - bC)
    }

    function WC(CC, zC, ZC, QC, wC) {
      const bC = wC * wC;
      return 6 * (bC - wC) * CC + (3 * bC - 4 * wC + 1) * zC + 6 * (-bC + wC) * ZC + (3 * bC - 2 * wC) * QC
    }

    function NC(CC) {
      let zC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(ZC, Math.max(zC, CC))
    }

    function MC(CC) {
      return CC -= 2 * Math.PI * Math.floor((CC + Math.PI) / (2 * Math.PI))
    }

    function gC(CC) {
      const zC = CC.toString(16);
      return CC <= 15 ? ("0" + zC).toUpperCase() : zC.toUpperCase()
    }

    function SC(CC) {
      if (Math.log2) return Math.floor(Math.log2(CC));
      if (CC < 0) return NaN;
      if (0 === CC) return -1 / 0;
      let zC = 0;
      if (CC < 1) {
        for (; CC < 1;) zC++, CC *= 2;
        zC = -zC
      } else if (CC > 1)
        for (; CC > 1;) zC++, CC = Math.floor(CC / 2);
      return zC
    }

    function pC(CC, zC) {
      return CC - Math.floor(CC / zC) * zC
    }

    function PC(CC, zC, ZC) {
      return (CC - zC) / (ZC - zC)
    }

    function GC(CC, zC, ZC) {
      return CC * (ZC - zC) + zC
    }

    function RC(CC, zC) {
      let ZC = pC(zC - CC, 360);
      return ZC > 180 && (ZC -= 360), ZC
    }

    function AC(CC, zC) {
      const ZC = pC(CC, 2 * zC);
      return zC - Math.abs(ZC - zC)
    }

    function xC(CC, zC, ZC) {
      let QC = NC(ZC);
      return QC = -2 * QC * QC * QC + 3 * QC * QC, zC * QC + CC * (1 - QC)
    }

    function JC(CC, zC, ZC) {
      let QC;
      return QC = Math.abs(zC - CC) <= ZC ? zC : CC + Math.sign(zC - CC) * ZC, QC
    }

    function IC(CC, zC, ZC) {
      const QC = RC(CC, zC);
      let wC;
      return wC = -ZC < QC && QC < ZC ? zC : JC(CC, zC = CC + QC, ZC), wC
    }

    function iC(CC, zC, ZC) {
      return (CC - zC) / (ZC - zC)
    }

    function vC(CC, zC, ZC) {
      return (ZC - zC) * CC + zC
    }

    function eC(CC, zC) {
      const ZC = CC % zC;
      return 0 === ZC ? zC : eC(zC, ZC)
    }
    ZC.r(zC), ZC.d(zC, {
      Clamp: () => NC,
      DeltaAngle: () => RC,
      Denormalize: () => GC,
      ExtractAsInt: () => QC,
      Hermite: () => FC,
      Hermite1stDerivative: () => WC,
      HighestCommonFactor: () => eC,
      ILog2: () => SC,
      InverseLerp: () => qC,
      Lerp: () => fC,
      LerpAngle: () => oC,
      MoveTowards: () => JC,
      MoveTowardsAngle: () => IC,
      Normalize: () => PC,
      NormalizeRadians: () => MC,
      OutsideRange: () => bC,
      PercentToRange: () => vC,
      PingPong: () => AC,
      RandomRange: () => nC,
      RangeToPercent: () => iC,
      Repeat: () => pC,
      SmoothStep: () => xC,
      ToHex: () => gC,
      WithinEpsilon: () => wC
    })
  },
  36971: (CC, zC, ZC) => {
    function QC(CC, zC) {
      const ZC = [];
      for (let QC = 0; QC < CC; ++QC) ZC.push(zC());
      return ZC
    }

    function wC(CC, zC) {
      return QC(CC, zC)
    }
    ZC.d(zC, {
      d: () => QC,
      g: () => wC,
      i: () => nC
    });
    const bC = ["push", "splice", "pop", "shift", "unshift"];

    function nC(CC, zC) {
      const ZC = bC.map((ZC => function(CC, zC, ZC) {
        const QC = CC[zC];
        if ("function" !== typeof QC) return null;
        const wC = function() {
          const QC = CC.length,
            bC = wC.previous.apply(CC, arguments);
          return ZC(zC, QC), bC
        };
        return QC.next = wC, wC.previous = QC, CC[zC] = wC, () => {
          const ZC = wC.previous;
          if (!ZC) return;
          const QC = wC.next;
          QC ? (ZC.next = QC, QC.previous = ZC) : (ZC.next = void 0, CC[zC] = ZC), wC.next = void 0, wC.previous = void 0
        }
      }(CC, ZC, zC)));
      return () => {
        for (const CC of ZC) CC?.()
      }
    }
  },
  37002: (CC, zC, ZC) => {
    ZC.d(zC, {
      c: () => bC,
      d: () => wC
    });
    const QC = {};

    function wC(CC, zC) {
      QC[CC] = zC
    }

    function bC(CC) {
      return QC[CC]
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);