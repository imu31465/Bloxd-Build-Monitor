export const id = 227;
export const ids = [227];
export const modules = {
  36873: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => HQ,
      e: () => bQ,
      h: () => AQ,
      i: () => YQ
    });
    var LQ = wQ(36709),
      qQ = wQ(36705),
      oQ = wQ(36729),
      DQ = wQ(36741);

    function kQ(QQ) {
      return Math.pow(QQ, qQ.g)
    }

    function vQ(QQ) {
      return QQ <= .04045 ? .0773993808 * QQ : Math.pow(.947867299 * (QQ + .055), 2.4)
    }

    function mQ(QQ) {
      return Math.pow(QQ, qQ.d)
    }

    function uQ(QQ) {
      return QQ <= .0031308 ? 12.92 * QQ : 1.055 * Math.pow(QQ, .41666) - .055
    }
    class HQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = QQ, this.g = FQ, this.b = wQ
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let QQ = 255 * this.r | 0;
        return QQ = 397 * QQ ^ 255 * this.g, QQ = 397 * QQ ^ 255 * this.b, QQ
      }
      toArray(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return QQ[FQ] = this.r, QQ[FQ + 1] = this.g, QQ[FQ + 2] = this.b, this
      }
      bwQ(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return HQ.FromArrayToRef(QQ, FQ, this), this
      }
      toColor4() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new bQ(this.r, this.g, this.b, QQ)
      }
      RLQ() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(QQ) {
        return new HQ(this.r * QQ.r, this.g * QQ.g, this.b * QQ.b)
      }
      multiplyToRef(QQ, FQ) {
        return FQ.r = this.r * QQ.r, FQ.g = this.g * QQ.g, FQ.b = this.b * QQ.b, FQ
      }
      multiplyInPlace(QQ) {
        return this.r *= QQ.r, this.g *= QQ.g, this.b *= QQ.b, this
      }
      multiplyByFloats(QQ, FQ, wQ) {
        return new HQ(this.r * QQ, this.g * FQ, this.b * wQ)
      }
      divide(QQ) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(QQ, FQ) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(QQ) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(QQ) {
        return this.minimizeInPlaceFromFloats(QQ.r, QQ.g, QQ.b)
      }
      maximizeInPlace(QQ) {
        return this.maximizeInPlaceFromFloats(QQ.r, QQ.g, QQ.b)
      }
      minimizeInPlaceFromFloats(QQ, FQ, wQ) {
        return this.r = Math.min(QQ, this.r), this.g = Math.min(FQ, this.g), this.b = Math.min(wQ, this.b), this
      }
      maximizeInPlaceFromFloats(QQ, FQ, wQ) {
        return this.r = Math.max(QQ, this.r), this.g = Math.max(FQ, this.g), this.b = Math.max(wQ, this.b), this
      }
      floorToRef(QQ) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(QQ) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(QQ) {
        return QQ && this.r === QQ.r && this.g === QQ.g && this.b === QQ.b
      }
      equalsFloats(QQ, FQ, wQ) {
        return this.LkQ(QQ, FQ, wQ)
      }
      LkQ(QQ, FQ, wQ) {
        return this.r === QQ && this.g === FQ && this.b === wQ
      }
      equalsWithEpsilon(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qQ.b;
        return (0, oQ.WithinEpsilon)(this.r, QQ.r, FQ) && (0, oQ.WithinEpsilon)(this.g, QQ.g, FQ) && (0, oQ.WithinEpsilon)(this.b, QQ.b, FQ)
      }
      mo() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(QQ) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(QQ) {
        return new HQ(this.r * QQ, this.g * QQ, this.b * QQ)
      }
      scaleInPlace(QQ) {
        return this.r *= QQ, this.g *= QQ, this.b *= QQ, this
      }
      scaleToRef(QQ, FQ) {
        return FQ.r = this.r * QQ, FQ.g = this.g * QQ, FQ.b = this.b * QQ, FQ
      }
      scaleAndAddToRef(QQ, FQ) {
        return FQ.r += this.r * QQ, FQ.g += this.g * QQ, FQ.b += this.b * QQ, FQ
      }
      clampToRef() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        return wQ.r = (0, oQ.Clamp)(this.r, QQ, FQ), wQ.g = (0, oQ.Clamp)(this.g, QQ, FQ), wQ.b = (0, oQ.Clamp)(this.b, QQ, FQ), wQ
      }
      add(QQ) {
        return new HQ(this.r + QQ.r, this.g + QQ.g, this.b + QQ.b)
      }
      addInPlace(QQ) {
        return this.r += QQ.r, this.g += QQ.g, this.b += QQ.b, this
      }
      addInPlaceFromFloats(QQ, FQ, wQ) {
        return this.r += QQ, this.g += FQ, this.b += wQ, this
      }
      addToRef(QQ, FQ) {
        return FQ.r = this.r + QQ.r, FQ.g = this.g + QQ.g, FQ.b = this.b + QQ.b, FQ
      }
      subtract(QQ) {
        return new HQ(this.r - QQ.r, this.g - QQ.g, this.b - QQ.b)
      }
      subtractToRef(QQ, FQ) {
        return FQ.r = this.r - QQ.r, FQ.g = this.g - QQ.g, FQ.b = this.b - QQ.b, FQ
      }
      gLQ(QQ) {
        return this.r -= QQ.r, this.g -= QQ.g, this.b -= QQ.b, this
      }
      subtractFromFloats(QQ, FQ, wQ) {
        return new HQ(this.r - QQ, this.g - FQ, this.b - wQ)
      }
      subtractFromFloatsToRef(QQ, FQ, wQ, LQ) {
        return LQ.r = this.r - QQ, LQ.g = this.g - FQ, LQ.b = this.b - wQ, LQ
      }
      clone() {
        return new HQ(this.r, this.g, this.b)
      }
      Qs(QQ) {
        return this.r = QQ.r, this.g = QQ.g, this.b = QQ.b, this
      }
      vQQ(QQ, FQ, wQ) {
        return this.r = QQ, this.g = FQ, this.b = wQ, this
      }
      set(QQ, FQ, wQ) {
        return this.vQQ(QQ, FQ, wQ)
      }
      K3(QQ) {
        return this.r = this.g = this.b = QQ, this
      }
      toHexString() {
        const QQ = Math.round(255 * this.r),
          FQ = Math.round(255 * this.g),
          wQ = Math.round(255 * this.b);
        return "#" + (0, oQ.ToHex)(QQ) + (0, oQ.ToHex)(FQ) + (0, oQ.ToHex)(wQ)
      }
      fromHexString(QQ) {
        return "#" !== QQ.substring(0, 1) || 7 !== QQ.length || (this.r = parseInt(QQ.substring(1, 3), 16) / 255, this.g = parseInt(QQ.substring(3, 5), 16) / 255, this.b = parseInt(QQ.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new HQ)
      }
      toHSVToRef(QQ) {
        const FQ = this.r,
          wQ = this.g,
          LQ = this.b,
          qQ = Math.max(FQ, wQ, LQ),
          oQ = Math.min(FQ, wQ, LQ);
        let DQ = 0,
          kQ = 0;
        const vQ = qQ,
          mQ = qQ - oQ;
        return 0 !== qQ && (kQ = mQ / qQ), qQ != oQ && (qQ == FQ ? (DQ = (wQ - LQ) / mQ, wQ < LQ && (DQ += 6)) : qQ == wQ ? DQ = (LQ - FQ) / mQ + 2 : qQ == LQ && (DQ = (FQ - wQ) / mQ + 4), DQ *= 60), QQ.r = DQ, QQ.g = kQ, QQ.b = vQ, QQ
      }
      toLinearSpace() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const FQ = new HQ;
        return this.toLinearSpaceToRef(FQ, QQ), FQ
      }
      toLinearSpaceToRef(QQ) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (QQ.r = vQ(this.r), QQ.g = vQ(this.g), QQ.b = vQ(this.b)) : (QQ.r = kQ(this.r), QQ.g = kQ(this.g), QQ.b = kQ(this.b)), this
      }
      toGammaSpace() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const FQ = new HQ;
        return this.toGammaSpaceToRef(FQ, QQ), FQ
      }
      toGammaSpaceToRef(QQ) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (QQ.r = uQ(this.r), QQ.g = uQ(this.g), QQ.b = uQ(this.b)) : (QQ.r = mQ(this.r), QQ.g = mQ(this.g), QQ.b = mQ(this.b)), this
      }
      static HSVtoRGBToRef(QQ, FQ, wQ, LQ) {
        const qQ = wQ * FQ,
          oQ = QQ / 60,
          DQ = qQ * (1 - Math.abs(oQ % 2 - 1));
        let kQ = 0,
          vQ = 0,
          mQ = 0;
        oQ >= 0 && oQ <= 1 ? (kQ = qQ, vQ = DQ) : oQ >= 1 && oQ <= 2 ? (kQ = DQ, vQ = qQ) : oQ >= 2 && oQ <= 3 ? (vQ = qQ, mQ = DQ) : oQ >= 3 && oQ <= 4 ? (vQ = DQ, mQ = qQ) : oQ >= 4 && oQ <= 5 ? (kQ = DQ, mQ = qQ) : oQ >= 5 && oQ <= 6 && (kQ = qQ, mQ = DQ);
        const uQ = wQ - qQ;
        return LQ.r = kQ + uQ, LQ.g = vQ + uQ, LQ.b = mQ + uQ, LQ
      }
      static FromHSV(QQ, FQ, wQ) {
        const LQ = new HQ(0, 0, 0);
        return HQ.HSVtoRGBToRef(QQ, FQ, wQ, LQ), LQ
      }
      static FromHexString(QQ) {
        return new HQ(0, 0, 0).fromHexString(QQ)
      }
      static FromArray(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new HQ(QQ[FQ], QQ[FQ + 1], QQ[FQ + 2])
      }
      static FromArrayToRef(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        wQ.r = QQ[FQ], wQ.g = QQ[FQ + 1], wQ.b = QQ[FQ + 2]
      }
      static FromInts(QQ, FQ, wQ) {
        return new HQ(QQ / 255, FQ / 255, wQ / 255)
      }
      static Lerp(QQ, FQ, wQ) {
        const LQ = new HQ(0, 0, 0);
        return HQ.LerpToRef(QQ, FQ, wQ, LQ), LQ
      }
      static LerpToRef(QQ, FQ, wQ, LQ) {
        LQ.r = QQ.r + (FQ.r - QQ.r) * wQ, LQ.g = QQ.g + (FQ.g - QQ.g) * wQ, LQ.b = QQ.b + (FQ.b - QQ.b) * wQ
      }
      static Hermite(QQ, FQ, wQ, LQ, qQ) {
        const oQ = qQ * qQ,
          DQ = qQ * oQ,
          kQ = 2 * DQ - 3 * oQ + 1,
          vQ = -2 * DQ + 3 * oQ,
          mQ = DQ - 2 * oQ + qQ,
          uQ = DQ - oQ,
          bQ = QQ.r * kQ + wQ.r * vQ + FQ.r * mQ + LQ.r * uQ,
          YQ = QQ.g * kQ + wQ.g * vQ + FQ.g * mQ + LQ.g * uQ,
          xQ = QQ.b * kQ + wQ.b * vQ + FQ.b * mQ + LQ.b * uQ;
        return new HQ(bQ, YQ, xQ)
      }
      static Hermite1stDerivative(QQ, FQ, wQ, LQ, qQ) {
        const oQ = HQ.Black();
        return this.Hermite1stDerivativeToRef(QQ, FQ, wQ, LQ, qQ, oQ), oQ
      }
      static Hermite1stDerivativeToRef(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = qQ * qQ;
        oQ.r = 6 * (DQ - qQ) * QQ.r + (3 * DQ - 4 * qQ + 1) * FQ.r + 6 * (-DQ + qQ) * wQ.r + (3 * DQ - 2 * qQ) * LQ.r, oQ.g = 6 * (DQ - qQ) * QQ.g + (3 * DQ - 4 * qQ + 1) * FQ.g + 6 * (-DQ + qQ) * wQ.g + (3 * DQ - 2 * qQ) * LQ.g, oQ.b = 6 * (DQ - qQ) * QQ.b + (3 * DQ - 4 * qQ + 1) * FQ.b + 6 * (-DQ + qQ) * wQ.b + (3 * DQ - 2 * qQ) * LQ.b
      }
      static Red() {
        return new HQ(1, 0, 0)
      }
      static Green() {
        return new HQ(0, 1, 0)
      }
      static Blue() {
        return new HQ(0, 0, 1)
      }
      static Black() {
        return new HQ(0, 0, 0)
      }
      static get BlackReadOnly() {
        return HQ._BlackReadOnly
      }
      static White() {
        return new HQ(1, 1, 1)
      }
      static Purple() {
        return new HQ(.5, 0, .5)
      }
      static Magenta() {
        return new HQ(1, 0, 1)
      }
      static Yellow() {
        return new HQ(1, 1, 0)
      }
      static Gray() {
        return new HQ(.5, .5, .5)
      }
      static Teal() {
        return new HQ(0, 1, 1)
      }
      static Random() {
        return new HQ(Math.random(), Math.random(), Math.random())
      }
    }
    HQ._V8PerformanceHack = new HQ(.5, .5, .5), HQ._BlackReadOnly = HQ.Black();
    class bQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = QQ, this.g = FQ, this.b = wQ, this.a = LQ
      }
      RLQ() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return QQ[FQ] = this.r, QQ[FQ + 1] = this.g, QQ[FQ + 2] = this.b, QQ[FQ + 3] = this.a, this
      }
      bwQ(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = QQ[FQ], this.g = QQ[FQ + 1], this.b = QQ[FQ + 2], this.a = QQ[FQ + 3], this
      }
      equals(QQ) {
        return QQ && this.r === QQ.r && this.g === QQ.g && this.b === QQ.b && this.a === QQ.a
      }
      add(QQ) {
        return new bQ(this.r + QQ.r, this.g + QQ.g, this.b + QQ.b, this.a + QQ.a)
      }
      addToRef(QQ, FQ) {
        return FQ.r = this.r + QQ.r, FQ.g = this.g + QQ.g, FQ.b = this.b + QQ.b, FQ.a = this.a + QQ.a, FQ
      }
      addInPlace(QQ) {
        return this.r += QQ.r, this.g += QQ.g, this.b += QQ.b, this.a += QQ.a, this
      }
      addInPlaceFromFloats(QQ, FQ, wQ, LQ) {
        return this.r += QQ, this.g += FQ, this.b += wQ, this.a += LQ, this
      }
      subtract(QQ) {
        return new bQ(this.r - QQ.r, this.g - QQ.g, this.b - QQ.b, this.a - QQ.a)
      }
      subtractToRef(QQ, FQ) {
        return FQ.r = this.r - QQ.r, FQ.g = this.g - QQ.g, FQ.b = this.b - QQ.b, FQ.a = this.a - QQ.a, FQ
      }
      gLQ(QQ) {
        return this.r -= QQ.r, this.g -= QQ.g, this.b -= QQ.b, this.a -= QQ.a, this
      }
      subtractFromFloats(QQ, FQ, wQ, LQ) {
        return new bQ(this.r - QQ, this.g - FQ, this.b - wQ, this.a - LQ)
      }
      subtractFromFloatsToRef(QQ, FQ, wQ, LQ, qQ) {
        return qQ.r = this.r - QQ, qQ.g = this.g - FQ, qQ.b = this.b - wQ, qQ.a = this.a - LQ, qQ
      }
      scale(QQ) {
        return new bQ(this.r * QQ, this.g * QQ, this.b * QQ, this.a * QQ)
      }
      scaleInPlace(QQ) {
        return this.r *= QQ, this.g *= QQ, this.b *= QQ, this.a *= QQ, this
      }
      scaleToRef(QQ, FQ) {
        return FQ.r = this.r * QQ, FQ.g = this.g * QQ, FQ.b = this.b * QQ, FQ.a = this.a * QQ, FQ
      }
      scaleAndAddToRef(QQ, FQ) {
        return FQ.r += this.r * QQ, FQ.g += this.g * QQ, FQ.b += this.b * QQ, FQ.a += this.a * QQ, FQ
      }
      clampToRef() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        return wQ.r = (0, oQ.Clamp)(this.r, QQ, FQ), wQ.g = (0, oQ.Clamp)(this.g, QQ, FQ), wQ.b = (0, oQ.Clamp)(this.b, QQ, FQ), wQ.a = (0, oQ.Clamp)(this.a, QQ, FQ), wQ
      }
      multiply(QQ) {
        return new bQ(this.r * QQ.r, this.g * QQ.g, this.b * QQ.b, this.a * QQ.a)
      }
      multiplyToRef(QQ, FQ) {
        return FQ.r = this.r * QQ.r, FQ.g = this.g * QQ.g, FQ.b = this.b * QQ.b, FQ.a = this.a * QQ.a, FQ
      }
      multiplyInPlace(QQ) {
        return this.r *= QQ.r, this.g *= QQ.g, this.b *= QQ.b, this.a *= QQ.a, this
      }
      multiplyByFloats(QQ, FQ, wQ, LQ) {
        return new bQ(this.r * QQ, this.g * FQ, this.b * wQ, this.a * LQ)
      }
      divide(QQ) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(QQ, FQ) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(QQ) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(QQ) {
        return this.r = Math.min(this.r, QQ.r), this.g = Math.min(this.g, QQ.g), this.b = Math.min(this.b, QQ.b), this.a = Math.min(this.a, QQ.a), this
      }
      maximizeInPlace(QQ) {
        return this.r = Math.max(this.r, QQ.r), this.g = Math.max(this.g, QQ.g), this.b = Math.max(this.b, QQ.b), this.a = Math.max(this.a, QQ.a), this
      }
      minimizeInPlaceFromFloats(QQ, FQ, wQ, LQ) {
        return this.r = Math.min(QQ, this.r), this.g = Math.min(FQ, this.g), this.b = Math.min(wQ, this.b), this.a = Math.min(LQ, this.a), this
      }
      maximizeInPlaceFromFloats(QQ, FQ, wQ, LQ) {
        return this.r = Math.max(QQ, this.r), this.g = Math.max(FQ, this.g), this.b = Math.max(wQ, this.b), this.a = Math.max(LQ, this.a), this
      }
      floorToRef(QQ) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(QQ) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      mo() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(QQ) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qQ.b;
        return (0, oQ.WithinEpsilon)(this.r, QQ.r, FQ) && (0, oQ.WithinEpsilon)(this.g, QQ.g, FQ) && (0, oQ.WithinEpsilon)(this.b, QQ.b, FQ) && (0, oQ.WithinEpsilon)(this.a, QQ.a, FQ)
      }
      LkQ(QQ, FQ, wQ, LQ) {
        return this.r === QQ && this.g === FQ && this.b === wQ && this.a === LQ
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let QQ = 255 * this.r | 0;
        return QQ = 397 * QQ ^ 255 * this.g, QQ = 397 * QQ ^ 255 * this.b, QQ = 397 * QQ ^ 255 * this.a, QQ
      }
      clone() {
        return (new bQ).Qs(this)
      }
      Qs(QQ) {
        return this.r = QQ.r, this.g = QQ.g, this.b = QQ.b, this.a = QQ.a, this
      }
      vQQ(QQ, FQ, wQ, LQ) {
        return this.r = QQ, this.g = FQ, this.b = wQ, this.a = LQ, this
      }
      set(QQ, FQ, wQ, LQ) {
        return this.vQQ(QQ, FQ, wQ, LQ)
      }
      K3(QQ) {
        return this.r = this.g = this.b = this.a = QQ, this
      }
      toHexString() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const FQ = Math.round(255 * this.r),
          wQ = Math.round(255 * this.g),
          LQ = Math.round(255 * this.b);
        if (QQ) return "#" + (0, oQ.ToHex)(FQ) + (0, oQ.ToHex)(wQ) + (0, oQ.ToHex)(LQ);
        const qQ = Math.round(255 * this.a);
        return "#" + (0, oQ.ToHex)(FQ) + (0, oQ.ToHex)(wQ) + (0, oQ.ToHex)(LQ) + (0, oQ.ToHex)(qQ)
      }
      fromHexString(QQ) {
        return "#" !== QQ.substring(0, 1) || 9 !== QQ.length && 7 !== QQ.length || (this.r = parseInt(QQ.substring(1, 3), 16) / 255, this.g = parseInt(QQ.substring(3, 5), 16) / 255, this.b = parseInt(QQ.substring(5, 7), 16) / 255, 9 === QQ.length && (this.a = parseInt(QQ.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const FQ = new bQ;
        return this.toLinearSpaceToRef(FQ, QQ), FQ
      }
      toLinearSpaceToRef(QQ) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (QQ.r = vQ(this.r), QQ.g = vQ(this.g), QQ.b = vQ(this.b)) : (QQ.r = kQ(this.r), QQ.g = kQ(this.g), QQ.b = kQ(this.b)), QQ.a = this.a, this
      }
      toGammaSpace() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const FQ = new bQ;
        return this.toGammaSpaceToRef(FQ, QQ), FQ
      }
      toGammaSpaceToRef(QQ) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (QQ.r = uQ(this.r), QQ.g = uQ(this.g), QQ.b = uQ(this.b)) : (QQ.r = mQ(this.r), QQ.g = mQ(this.g), QQ.b = mQ(this.b)), QQ.a = this.a, this
      }
      static FromHexString(QQ) {
        return "#" !== QQ.substring(0, 1) || 9 !== QQ.length && 7 !== QQ.length ? new bQ(0, 0, 0, 0) : new bQ(0, 0, 0, 1).fromHexString(QQ)
      }
      static Lerp(QQ, FQ, wQ) {
        return bQ.LerpToRef(QQ, FQ, wQ, new bQ)
      }
      static LerpToRef(QQ, FQ, wQ, LQ) {
        return LQ.r = QQ.r + (FQ.r - QQ.r) * wQ, LQ.g = QQ.g + (FQ.g - QQ.g) * wQ, LQ.b = QQ.b + (FQ.b - QQ.b) * wQ, LQ.a = QQ.a + (FQ.a - QQ.a) * wQ, LQ
      }
      static Hermite(QQ, FQ, wQ, LQ, qQ) {
        const oQ = qQ * qQ,
          DQ = qQ * oQ,
          kQ = 2 * DQ - 3 * oQ + 1,
          vQ = -2 * DQ + 3 * oQ,
          mQ = DQ - 2 * oQ + qQ,
          uQ = DQ - oQ,
          HQ = QQ.r * kQ + wQ.r * vQ + FQ.r * mQ + LQ.r * uQ,
          YQ = QQ.g * kQ + wQ.g * vQ + FQ.g * mQ + LQ.g * uQ,
          xQ = QQ.b * kQ + wQ.b * vQ + FQ.b * mQ + LQ.b * uQ,
          AQ = QQ.a * kQ + wQ.a * vQ + FQ.a * mQ + LQ.a * uQ;
        return new bQ(HQ, YQ, xQ, AQ)
      }
      static Hermite1stDerivative(QQ, FQ, wQ, LQ, qQ) {
        const oQ = new bQ;
        return this.Hermite1stDerivativeToRef(QQ, FQ, wQ, LQ, qQ, oQ), oQ
      }
      static Hermite1stDerivativeToRef(QQ, FQ, wQ, LQ, qQ, oQ) {
        const DQ = qQ * qQ;
        oQ.r = 6 * (DQ - qQ) * QQ.r + (3 * DQ - 4 * qQ + 1) * FQ.r + 6 * (-DQ + qQ) * wQ.r + (3 * DQ - 2 * qQ) * LQ.r, oQ.g = 6 * (DQ - qQ) * QQ.g + (3 * DQ - 4 * qQ + 1) * FQ.g + 6 * (-DQ + qQ) * wQ.g + (3 * DQ - 2 * qQ) * LQ.g, oQ.b = 6 * (DQ - qQ) * QQ.b + (3 * DQ - 4 * qQ + 1) * FQ.b + 6 * (-DQ + qQ) * wQ.b + (3 * DQ - 2 * qQ) * LQ.b, oQ.a = 6 * (DQ - qQ) * QQ.a + (3 * DQ - 4 * qQ + 1) * FQ.a + 6 * (-DQ + qQ) * wQ.a + (3 * DQ - 2 * qQ) * LQ.a
      }
      static FromColor3(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new bQ(QQ.r, QQ.g, QQ.b, FQ)
      }
      static FromArray(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new bQ(QQ[FQ], QQ[FQ + 1], QQ[FQ + 2], QQ[FQ + 3])
      }
      static FromArrayToRef(QQ) {
        let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          wQ = arguments.length > 2 ? arguments[2] : void 0;
        wQ.r = QQ[FQ], wQ.g = QQ[FQ + 1], wQ.b = QQ[FQ + 2], wQ.a = QQ[FQ + 3]
      }
      static FromInts(QQ, FQ, wQ, LQ) {
        return new bQ(QQ / 255, FQ / 255, wQ / 255, LQ / 255)
      }
      static CheckColors4(QQ, FQ) {
        if (QQ.length === 3 * FQ) {
          const FQ = [];
          for (let wQ = 0; wQ < QQ.length; wQ += 3) {
            const LQ = wQ / 3 * 4;
            FQ[LQ] = QQ[wQ], FQ[LQ + 1] = QQ[wQ + 1], FQ[LQ + 2] = QQ[wQ + 2], FQ[LQ + 3] = 1
          }
          return FQ
        }
        return QQ
      }
    }
    bQ._V8PerformanceHack = new bQ(.5, .5, .5, .5);
    class YQ {}
    YQ.Color3 = (0, LQ.b)(3, HQ.Black), YQ.Color4 = (0, LQ.b)(3, (() => new bQ(0, 0, 0, 0)));
    let xQ = !1;

    function AQ() {
      xQ || (xQ = !0, Object.defineProperties(HQ.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(bQ.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, DQ.e)("BABYLON.Color3", HQ), (0, DQ.e)("BABYLON.Color4", bQ))
    }
  },
  36705: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ,
      d: () => LQ,
      g: () => qQ
    });
    const LQ = 1 / 2.2,
      qQ = 2.2;
    Math.sqrt(5);
    let oQ = .001
  },
  36729: (QQ, FQ, wQ) => {
    function LQ(QQ) {
      return parseInt(QQ.toString().replace(/\W/g, ""))
    }

    function qQ(QQ, FQ) {
      let wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(QQ - FQ) <= wQ
    }

    function oQ(QQ, FQ, wQ) {
      let LQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return QQ < FQ - LQ || QQ > wQ + LQ
    }

    function DQ(QQ, FQ) {
      return QQ === FQ ? QQ : Math.random() * (FQ - QQ) + QQ
    }

    function kQ(QQ, FQ, wQ) {
      return QQ + (FQ - QQ) * wQ
    }

    function vQ(QQ, FQ, wQ) {
      let LQ = tQ(FQ - QQ, 360);
      return LQ > 180 && (LQ -= 360), QQ + LQ * bQ(wQ)
    }

    function mQ(QQ, FQ, wQ) {
      let LQ;
      return LQ = QQ != FQ ? bQ((wQ - QQ) / (FQ - QQ)) : 0, LQ
    }

    function uQ(QQ, FQ, wQ, LQ, qQ) {
      const oQ = qQ * qQ,
        DQ = qQ * oQ;
      return QQ * (2 * DQ - 3 * oQ + 1) + wQ * (-2 * DQ + 3 * oQ) + FQ * (DQ - 2 * oQ + qQ) + LQ * (DQ - oQ)
    }

    function HQ(QQ, FQ, wQ, LQ, qQ) {
      const oQ = qQ * qQ;
      return 6 * (oQ - qQ) * QQ + (3 * oQ - 4 * qQ + 1) * FQ + 6 * (-oQ + qQ) * wQ + (3 * oQ - 2 * qQ) * LQ
    }

    function bQ(QQ) {
      let FQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        wQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(wQ, Math.max(FQ, QQ))
    }

    function YQ(QQ) {
      return QQ -= 2 * Math.PI * Math.floor((QQ + Math.PI) / (2 * Math.PI))
    }

    function xQ(QQ) {
      const FQ = QQ.toString(16);
      return QQ <= 15 ? ("0" + FQ).toUpperCase() : FQ.toUpperCase()
    }

    function AQ(QQ) {
      if (Math.log2) return Math.floor(Math.log2(QQ));
      if (QQ < 0) return NaN;
      if (0 === QQ) return -1 / 0;
      let FQ = 0;
      if (QQ < 1) {
        for (; QQ < 1;) FQ++, QQ *= 2;
        FQ = -FQ
      } else if (QQ > 1)
        for (; QQ > 1;) FQ++, QQ = Math.floor(QQ / 2);
      return FQ
    }

    function tQ(QQ, FQ) {
      return QQ - Math.floor(QQ / FQ) * FQ
    }

    function eQ(QQ, FQ, wQ) {
      return (QQ - FQ) / (wQ - FQ)
    }

    function MQ(QQ, FQ, wQ) {
      return QQ * (wQ - FQ) + FQ
    }

    function GQ(QQ, FQ) {
      let wQ = tQ(FQ - QQ, 360);
      return wQ > 180 && (wQ -= 360), wQ
    }

    function pQ(QQ, FQ) {
      const wQ = tQ(QQ, 2 * FQ);
      return FQ - Math.abs(wQ - FQ)
    }

    function cQ(QQ, FQ, wQ) {
      let LQ = bQ(wQ);
      return LQ = -2 * LQ * LQ * LQ + 3 * LQ * LQ, FQ * LQ + QQ * (1 - LQ)
    }

    function CQ(QQ, FQ, wQ) {
      let LQ;
      return LQ = Math.abs(FQ - QQ) <= wQ ? FQ : QQ + Math.sign(FQ - QQ) * wQ, LQ
    }

    function SQ(QQ, FQ, wQ) {
      const LQ = GQ(QQ, FQ);
      let qQ;
      return qQ = -wQ < LQ && LQ < wQ ? FQ : CQ(QQ, FQ = QQ + LQ, wQ), qQ
    }

    function iQ(QQ, FQ, wQ) {
      return (QQ - FQ) / (wQ - FQ)
    }

    function WQ(QQ, FQ, wQ) {
      return (wQ - FQ) * QQ + FQ
    }

    function RQ(QQ, FQ) {
      const wQ = QQ % FQ;
      return 0 === wQ ? FQ : RQ(FQ, wQ)
    }
    wQ.r(FQ), wQ.d(FQ, {
      Clamp: () => bQ,
      DeltaAngle: () => GQ,
      Denormalize: () => MQ,
      ExtractAsInt: () => LQ,
      Hermite: () => uQ,
      Hermite1stDerivative: () => HQ,
      HighestCommonFactor: () => RQ,
      ILog2: () => AQ,
      InverseLerp: () => mQ,
      Lerp: () => kQ,
      LerpAngle: () => vQ,
      MoveTowards: () => CQ,
      MoveTowardsAngle: () => SQ,
      Normalize: () => eQ,
      NormalizeRadians: () => YQ,
      OutsideRange: () => oQ,
      PercentToRange: () => WQ,
      PingPong: () => pQ,
      RandomRange: () => DQ,
      RangeToPercent: () => iQ,
      Repeat: () => tQ,
      SmoothStep: () => cQ,
      ToHex: () => xQ,
      WithinEpsilon: () => qQ
    })
  },
  36709: (QQ, FQ, wQ) => {
    function LQ(QQ, FQ) {
      const wQ = [];
      for (let LQ = 0; LQ < QQ; ++LQ) wQ.push(FQ());
      return wQ
    }

    function qQ(QQ, FQ) {
      return LQ(QQ, FQ)
    }
    wQ.d(FQ, {
      b: () => LQ,
      f: () => qQ,
      h: () => DQ
    });
    const oQ = ["push", "splice", "pop", "shift", "unshift"];

    function DQ(QQ, FQ) {
      const wQ = oQ.map((wQ => function(QQ, FQ, wQ) {
        const LQ = QQ[FQ];
        if ("function" !== typeof LQ) return null;
        const qQ = function() {
          const LQ = QQ.length,
            oQ = qQ.previous.apply(QQ, arguments);
          return wQ(FQ, LQ), oQ
        };
        return LQ.next = qQ, qQ.previous = LQ, QQ[FQ] = qQ, () => {
          const wQ = qQ.previous;
          if (!wQ) return;
          const LQ = qQ.next;
          LQ ? (wQ.next = LQ, LQ.previous = wQ) : (wQ.next = void 0, QQ[FQ] = wQ), qQ.next = void 0, qQ.previous = void 0
        }
      }(QQ, wQ, FQ)));
      return () => {
        for (const QQ of wQ) QQ?.()
      }
    }
  },
  36741: (QQ, FQ, wQ) => {
    wQ.d(FQ, {
      b: () => oQ,
      e: () => qQ
    });
    const LQ = {};

    function qQ(QQ, FQ) {
      LQ[QQ] = FQ
    }

    function oQ(QQ) {
      return LQ[QQ]
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);