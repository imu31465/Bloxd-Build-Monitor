export const id = 241;
export const ids = [241];
export const modules = {
  37546: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => JQ,
      d: () => rQ,
      h: () => BQ,
      l: () => IQ
    });
    var wQ = XQ(37379),
      qQ = XQ(37374),
      TQ = XQ(37404),
      zQ = XQ(37418);

    function sQ(QQ) {
      return Math.pow(QQ, qQ.h)
    }

    function FQ(QQ) {
      return QQ <= .04045 ? .0773993808 * QQ : Math.pow(.947867299 * (QQ + .055), 2.4)
    }

    function PQ(QQ) {
      return Math.pow(QQ, qQ.e)
    }

    function gQ(QQ) {
      return QQ <= .0031308 ? 12.92 * QQ : 1.055 * Math.pow(QQ, .41666) - .055
    }
    class JQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = QQ, this.g = WQ, this.b = XQ
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
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return QQ[WQ] = this.r, QQ[WQ + 1] = this.g, QQ[WQ + 2] = this.b, this
      }
      gXQ(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return JQ.FromArrayToRef(QQ, WQ, this), this
      }
      toColor4() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new rQ(this.r, this.g, this.b, QQ)
      }
      awQ() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(QQ) {
        return new JQ(this.r * QQ.r, this.g * QQ.g, this.b * QQ.b)
      }
      multiplyToRef(QQ, WQ) {
        return WQ.r = this.r * QQ.r, WQ.g = this.g * QQ.g, WQ.b = this.b * QQ.b, WQ
      }
      multiplyInPlace(QQ) {
        return this.r *= QQ.r, this.g *= QQ.g, this.b *= QQ.b, this
      }
      multiplyByFloats(QQ, WQ, XQ) {
        return new JQ(this.r * QQ, this.g * WQ, this.b * XQ)
      }
      divide(QQ) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(QQ, WQ) {
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
      minimizeInPlaceFromFloats(QQ, WQ, XQ) {
        return this.r = Math.min(QQ, this.r), this.g = Math.min(WQ, this.g), this.b = Math.min(XQ, this.b), this
      }
      maximizeInPlaceFromFloats(QQ, WQ, XQ) {
        return this.r = Math.max(QQ, this.r), this.g = Math.max(WQ, this.g), this.b = Math.max(XQ, this.b), this
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
      equalsFloats(QQ, WQ, XQ) {
        return this.PsQ(QQ, WQ, XQ)
      }
      PsQ(QQ, WQ, XQ) {
        return this.r === QQ && this.g === WQ && this.b === XQ
      }
      equalsWithEpsilon(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qQ.b;
        return (0, TQ.WithinEpsilon)(this.r, QQ.r, WQ) && (0, TQ.WithinEpsilon)(this.g, QQ.g, WQ) && (0, TQ.WithinEpsilon)(this.b, QQ.b, WQ)
      }
      pg() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(QQ) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(QQ) {
        return new JQ(this.r * QQ, this.g * QQ, this.b * QQ)
      }
      scaleInPlace(QQ) {
        return this.r *= QQ, this.g *= QQ, this.b *= QQ, this
      }
      scaleToRef(QQ, WQ) {
        return WQ.r = this.r * QQ, WQ.g = this.g * QQ, WQ.b = this.b * QQ, WQ
      }
      scaleAndAddToRef(QQ, WQ) {
        return WQ.r += this.r * QQ, WQ.g += this.g * QQ, WQ.b += this.b * QQ, WQ
      }
      clampToRef() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        return XQ.r = (0, TQ.Clamp)(this.r, QQ, WQ), XQ.g = (0, TQ.Clamp)(this.g, QQ, WQ), XQ.b = (0, TQ.Clamp)(this.b, QQ, WQ), XQ
      }
      add(QQ) {
        return new JQ(this.r + QQ.r, this.g + QQ.g, this.b + QQ.b)
      }
      addInPlace(QQ) {
        return this.r += QQ.r, this.g += QQ.g, this.b += QQ.b, this
      }
      addInPlaceFromFloats(QQ, WQ, XQ) {
        return this.r += QQ, this.g += WQ, this.b += XQ, this
      }
      addToRef(QQ, WQ) {
        return WQ.r = this.r + QQ.r, WQ.g = this.g + QQ.g, WQ.b = this.b + QQ.b, WQ
      }
      subtract(QQ) {
        return new JQ(this.r - QQ.r, this.g - QQ.g, this.b - QQ.b)
      }
      subtractToRef(QQ, WQ) {
        return WQ.r = this.r - QQ.r, WQ.g = this.g - QQ.g, WQ.b = this.b - QQ.b, WQ
      }
      YwQ(QQ) {
        return this.r -= QQ.r, this.g -= QQ.g, this.b -= QQ.b, this
      }
      subtractFromFloats(QQ, WQ, XQ) {
        return new JQ(this.r - QQ, this.g - WQ, this.b - XQ)
      }
      subtractFromFloatsToRef(QQ, WQ, XQ, wQ) {
        return wQ.r = this.r - QQ, wQ.g = this.g - WQ, wQ.b = this.b - XQ, wQ
      }
      clone() {
        return new JQ(this.r, this.g, this.b)
      }
      WH(QQ) {
        return this.r = QQ.r, this.g = QQ.g, this.b = QQ.b, this
      }
      XQQ(QQ, WQ, XQ) {
        return this.r = QQ, this.g = WQ, this.b = XQ, this
      }
      set(QQ, WQ, XQ) {
        return this.XQQ(QQ, WQ, XQ)
      }
      h_(QQ) {
        return this.r = this.g = this.b = QQ, this
      }
      toHexString() {
        const QQ = Math.round(255 * this.r),
          WQ = Math.round(255 * this.g),
          XQ = Math.round(255 * this.b);
        return "#" + (0, TQ.ToHex)(QQ) + (0, TQ.ToHex)(WQ) + (0, TQ.ToHex)(XQ)
      }
      fromHexString(QQ) {
        return "#" !== QQ.substring(0, 1) || 7 !== QQ.length || (this.r = parseInt(QQ.substring(1, 3), 16) / 255, this.g = parseInt(QQ.substring(3, 5), 16) / 255, this.b = parseInt(QQ.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new JQ)
      }
      toHSVToRef(QQ) {
        const WQ = this.r,
          XQ = this.g,
          wQ = this.b,
          qQ = Math.max(WQ, XQ, wQ),
          TQ = Math.min(WQ, XQ, wQ);
        let zQ = 0,
          sQ = 0;
        const FQ = qQ,
          PQ = qQ - TQ;
        return 0 !== qQ && (sQ = PQ / qQ), qQ != TQ && (qQ == WQ ? (zQ = (XQ - wQ) / PQ, XQ < wQ && (zQ += 6)) : qQ == XQ ? zQ = (wQ - WQ) / PQ + 2 : qQ == wQ && (zQ = (WQ - XQ) / PQ + 4), zQ *= 60), QQ.r = zQ, QQ.g = sQ, QQ.b = FQ, QQ
      }
      toLinearSpace() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WQ = new JQ;
        return this.toLinearSpaceToRef(WQ, QQ), WQ
      }
      toLinearSpaceToRef(QQ) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (QQ.r = FQ(this.r), QQ.g = FQ(this.g), QQ.b = FQ(this.b)) : (QQ.r = sQ(this.r), QQ.g = sQ(this.g), QQ.b = sQ(this.b)), this
      }
      toGammaSpace() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WQ = new JQ;
        return this.toGammaSpaceToRef(WQ, QQ), WQ
      }
      toGammaSpaceToRef(QQ) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (QQ.r = gQ(this.r), QQ.g = gQ(this.g), QQ.b = gQ(this.b)) : (QQ.r = PQ(this.r), QQ.g = PQ(this.g), QQ.b = PQ(this.b)), this
      }
      static HSVtoRGBToRef(QQ, WQ, XQ, wQ) {
        const qQ = XQ * WQ,
          TQ = QQ / 60,
          zQ = qQ * (1 - Math.abs(TQ % 2 - 1));
        let sQ = 0,
          FQ = 0,
          PQ = 0;
        TQ >= 0 && TQ <= 1 ? (sQ = qQ, FQ = zQ) : TQ >= 1 && TQ <= 2 ? (sQ = zQ, FQ = qQ) : TQ >= 2 && TQ <= 3 ? (FQ = qQ, PQ = zQ) : TQ >= 3 && TQ <= 4 ? (FQ = zQ, PQ = qQ) : TQ >= 4 && TQ <= 5 ? (sQ = zQ, PQ = qQ) : TQ >= 5 && TQ <= 6 && (sQ = qQ, PQ = zQ);
        const gQ = XQ - qQ;
        return wQ.r = sQ + gQ, wQ.g = FQ + gQ, wQ.b = PQ + gQ, wQ
      }
      static FromHSV(QQ, WQ, XQ) {
        const wQ = new JQ(0, 0, 0);
        return JQ.HSVtoRGBToRef(QQ, WQ, XQ, wQ), wQ
      }
      static FromHexString(QQ) {
        return new JQ(0, 0, 0).fromHexString(QQ)
      }
      static FromArray(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new JQ(QQ[WQ], QQ[WQ + 1], QQ[WQ + 2])
      }
      static FromArrayToRef(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        XQ.r = QQ[WQ], XQ.g = QQ[WQ + 1], XQ.b = QQ[WQ + 2]
      }
      static FromInts(QQ, WQ, XQ) {
        return new JQ(QQ / 255, WQ / 255, XQ / 255)
      }
      static Lerp(QQ, WQ, XQ) {
        const wQ = new JQ(0, 0, 0);
        return JQ.LerpToRef(QQ, WQ, XQ, wQ), wQ
      }
      static LerpToRef(QQ, WQ, XQ, wQ) {
        wQ.r = QQ.r + (WQ.r - QQ.r) * XQ, wQ.g = QQ.g + (WQ.g - QQ.g) * XQ, wQ.b = QQ.b + (WQ.b - QQ.b) * XQ
      }
      static Hermite(QQ, WQ, XQ, wQ, qQ) {
        const TQ = qQ * qQ,
          zQ = qQ * TQ,
          sQ = 2 * zQ - 3 * TQ + 1,
          FQ = -2 * zQ + 3 * TQ,
          PQ = zQ - 2 * TQ + qQ,
          gQ = zQ - TQ,
          rQ = QQ.r * sQ + XQ.r * FQ + WQ.r * PQ + wQ.r * gQ,
          IQ = QQ.g * sQ + XQ.g * FQ + WQ.g * PQ + wQ.g * gQ,
          jQ = QQ.b * sQ + XQ.b * FQ + WQ.b * PQ + wQ.b * gQ;
        return new JQ(rQ, IQ, jQ)
      }
      static Hermite1stDerivative(QQ, WQ, XQ, wQ, qQ) {
        const TQ = JQ.Black();
        return this.Hermite1stDerivativeToRef(QQ, WQ, XQ, wQ, qQ, TQ), TQ
      }
      static Hermite1stDerivativeToRef(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = qQ * qQ;
        TQ.r = 6 * (zQ - qQ) * QQ.r + (3 * zQ - 4 * qQ + 1) * WQ.r + 6 * (-zQ + qQ) * XQ.r + (3 * zQ - 2 * qQ) * wQ.r, TQ.g = 6 * (zQ - qQ) * QQ.g + (3 * zQ - 4 * qQ + 1) * WQ.g + 6 * (-zQ + qQ) * XQ.g + (3 * zQ - 2 * qQ) * wQ.g, TQ.b = 6 * (zQ - qQ) * QQ.b + (3 * zQ - 4 * qQ + 1) * WQ.b + 6 * (-zQ + qQ) * XQ.b + (3 * zQ - 2 * qQ) * wQ.b
      }
      static Red() {
        return new JQ(1, 0, 0)
      }
      static Green() {
        return new JQ(0, 1, 0)
      }
      static Blue() {
        return new JQ(0, 0, 1)
      }
      static Black() {
        return new JQ(0, 0, 0)
      }
      static get BlackReadOnly() {
        return JQ._BlackReadOnly
      }
      static White() {
        return new JQ(1, 1, 1)
      }
      static Purple() {
        return new JQ(.5, 0, .5)
      }
      static Magenta() {
        return new JQ(1, 0, 1)
      }
      static Yellow() {
        return new JQ(1, 1, 0)
      }
      static Gray() {
        return new JQ(.5, .5, .5)
      }
      static Teal() {
        return new JQ(0, 1, 1)
      }
      static Random() {
        return new JQ(Math.random(), Math.random(), Math.random())
      }
    }
    JQ._V8PerformanceHack = new JQ(.5, .5, .5), JQ._BlackReadOnly = JQ.Black();
    class rQ {
      constructor() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = QQ, this.g = WQ, this.b = XQ, this.a = wQ
      }
      awQ() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return QQ[WQ] = this.r, QQ[WQ + 1] = this.g, QQ[WQ + 2] = this.b, QQ[WQ + 3] = this.a, this
      }
      gXQ(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = QQ[WQ], this.g = QQ[WQ + 1], this.b = QQ[WQ + 2], this.a = QQ[WQ + 3], this
      }
      equals(QQ) {
        return QQ && this.r === QQ.r && this.g === QQ.g && this.b === QQ.b && this.a === QQ.a
      }
      add(QQ) {
        return new rQ(this.r + QQ.r, this.g + QQ.g, this.b + QQ.b, this.a + QQ.a)
      }
      addToRef(QQ, WQ) {
        return WQ.r = this.r + QQ.r, WQ.g = this.g + QQ.g, WQ.b = this.b + QQ.b, WQ.a = this.a + QQ.a, WQ
      }
      addInPlace(QQ) {
        return this.r += QQ.r, this.g += QQ.g, this.b += QQ.b, this.a += QQ.a, this
      }
      addInPlaceFromFloats(QQ, WQ, XQ, wQ) {
        return this.r += QQ, this.g += WQ, this.b += XQ, this.a += wQ, this
      }
      subtract(QQ) {
        return new rQ(this.r - QQ.r, this.g - QQ.g, this.b - QQ.b, this.a - QQ.a)
      }
      subtractToRef(QQ, WQ) {
        return WQ.r = this.r - QQ.r, WQ.g = this.g - QQ.g, WQ.b = this.b - QQ.b, WQ.a = this.a - QQ.a, WQ
      }
      YwQ(QQ) {
        return this.r -= QQ.r, this.g -= QQ.g, this.b -= QQ.b, this.a -= QQ.a, this
      }
      subtractFromFloats(QQ, WQ, XQ, wQ) {
        return new rQ(this.r - QQ, this.g - WQ, this.b - XQ, this.a - wQ)
      }
      subtractFromFloatsToRef(QQ, WQ, XQ, wQ, qQ) {
        return qQ.r = this.r - QQ, qQ.g = this.g - WQ, qQ.b = this.b - XQ, qQ.a = this.a - wQ, qQ
      }
      scale(QQ) {
        return new rQ(this.r * QQ, this.g * QQ, this.b * QQ, this.a * QQ)
      }
      scaleInPlace(QQ) {
        return this.r *= QQ, this.g *= QQ, this.b *= QQ, this.a *= QQ, this
      }
      scaleToRef(QQ, WQ) {
        return WQ.r = this.r * QQ, WQ.g = this.g * QQ, WQ.b = this.b * QQ, WQ.a = this.a * QQ, WQ
      }
      scaleAndAddToRef(QQ, WQ) {
        return WQ.r += this.r * QQ, WQ.g += this.g * QQ, WQ.b += this.b * QQ, WQ.a += this.a * QQ, WQ
      }
      clampToRef() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        return XQ.r = (0, TQ.Clamp)(this.r, QQ, WQ), XQ.g = (0, TQ.Clamp)(this.g, QQ, WQ), XQ.b = (0, TQ.Clamp)(this.b, QQ, WQ), XQ.a = (0, TQ.Clamp)(this.a, QQ, WQ), XQ
      }
      multiply(QQ) {
        return new rQ(this.r * QQ.r, this.g * QQ.g, this.b * QQ.b, this.a * QQ.a)
      }
      multiplyToRef(QQ, WQ) {
        return WQ.r = this.r * QQ.r, WQ.g = this.g * QQ.g, WQ.b = this.b * QQ.b, WQ.a = this.a * QQ.a, WQ
      }
      multiplyInPlace(QQ) {
        return this.r *= QQ.r, this.g *= QQ.g, this.b *= QQ.b, this.a *= QQ.a, this
      }
      multiplyByFloats(QQ, WQ, XQ, wQ) {
        return new rQ(this.r * QQ, this.g * WQ, this.b * XQ, this.a * wQ)
      }
      divide(QQ) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(QQ, WQ) {
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
      minimizeInPlaceFromFloats(QQ, WQ, XQ, wQ) {
        return this.r = Math.min(QQ, this.r), this.g = Math.min(WQ, this.g), this.b = Math.min(XQ, this.b), this.a = Math.min(wQ, this.a), this
      }
      maximizeInPlaceFromFloats(QQ, WQ, XQ, wQ) {
        return this.r = Math.max(QQ, this.r), this.g = Math.max(WQ, this.g), this.b = Math.max(XQ, this.b), this.a = Math.max(wQ, this.a), this
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
      pg() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(QQ) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qQ.b;
        return (0, TQ.WithinEpsilon)(this.r, QQ.r, WQ) && (0, TQ.WithinEpsilon)(this.g, QQ.g, WQ) && (0, TQ.WithinEpsilon)(this.b, QQ.b, WQ) && (0, TQ.WithinEpsilon)(this.a, QQ.a, WQ)
      }
      PsQ(QQ, WQ, XQ, wQ) {
        return this.r === QQ && this.g === WQ && this.b === XQ && this.a === wQ
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
        return (new rQ).WH(this)
      }
      WH(QQ) {
        return this.r = QQ.r, this.g = QQ.g, this.b = QQ.b, this.a = QQ.a, this
      }
      XQQ(QQ, WQ, XQ, wQ) {
        return this.r = QQ, this.g = WQ, this.b = XQ, this.a = wQ, this
      }
      set(QQ, WQ, XQ, wQ) {
        return this.XQQ(QQ, WQ, XQ, wQ)
      }
      h_(QQ) {
        return this.r = this.g = this.b = this.a = QQ, this
      }
      toHexString() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WQ = Math.round(255 * this.r),
          XQ = Math.round(255 * this.g),
          wQ = Math.round(255 * this.b);
        if (QQ) return "#" + (0, TQ.ToHex)(WQ) + (0, TQ.ToHex)(XQ) + (0, TQ.ToHex)(wQ);
        const qQ = Math.round(255 * this.a);
        return "#" + (0, TQ.ToHex)(WQ) + (0, TQ.ToHex)(XQ) + (0, TQ.ToHex)(wQ) + (0, TQ.ToHex)(qQ)
      }
      fromHexString(QQ) {
        return "#" !== QQ.substring(0, 1) || 9 !== QQ.length && 7 !== QQ.length || (this.r = parseInt(QQ.substring(1, 3), 16) / 255, this.g = parseInt(QQ.substring(3, 5), 16) / 255, this.b = parseInt(QQ.substring(5, 7), 16) / 255, 9 === QQ.length && (this.a = parseInt(QQ.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WQ = new rQ;
        return this.toLinearSpaceToRef(WQ, QQ), WQ
      }
      toLinearSpaceToRef(QQ) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (QQ.r = FQ(this.r), QQ.g = FQ(this.g), QQ.b = FQ(this.b)) : (QQ.r = sQ(this.r), QQ.g = sQ(this.g), QQ.b = sQ(this.b)), QQ.a = this.a, this
      }
      toGammaSpace() {
        let QQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WQ = new rQ;
        return this.toGammaSpaceToRef(WQ, QQ), WQ
      }
      toGammaSpaceToRef(QQ) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (QQ.r = gQ(this.r), QQ.g = gQ(this.g), QQ.b = gQ(this.b)) : (QQ.r = PQ(this.r), QQ.g = PQ(this.g), QQ.b = PQ(this.b)), QQ.a = this.a, this
      }
      static FromHexString(QQ) {
        return "#" !== QQ.substring(0, 1) || 9 !== QQ.length && 7 !== QQ.length ? new rQ(0, 0, 0, 0) : new rQ(0, 0, 0, 1).fromHexString(QQ)
      }
      static Lerp(QQ, WQ, XQ) {
        return rQ.LerpToRef(QQ, WQ, XQ, new rQ)
      }
      static LerpToRef(QQ, WQ, XQ, wQ) {
        return wQ.r = QQ.r + (WQ.r - QQ.r) * XQ, wQ.g = QQ.g + (WQ.g - QQ.g) * XQ, wQ.b = QQ.b + (WQ.b - QQ.b) * XQ, wQ.a = QQ.a + (WQ.a - QQ.a) * XQ, wQ
      }
      static Hermite(QQ, WQ, XQ, wQ, qQ) {
        const TQ = qQ * qQ,
          zQ = qQ * TQ,
          sQ = 2 * zQ - 3 * TQ + 1,
          FQ = -2 * zQ + 3 * TQ,
          PQ = zQ - 2 * TQ + qQ,
          gQ = zQ - TQ,
          JQ = QQ.r * sQ + XQ.r * FQ + WQ.r * PQ + wQ.r * gQ,
          IQ = QQ.g * sQ + XQ.g * FQ + WQ.g * PQ + wQ.g * gQ,
          jQ = QQ.b * sQ + XQ.b * FQ + WQ.b * PQ + wQ.b * gQ,
          BQ = QQ.a * sQ + XQ.a * FQ + WQ.a * PQ + wQ.a * gQ;
        return new rQ(JQ, IQ, jQ, BQ)
      }
      static Hermite1stDerivative(QQ, WQ, XQ, wQ, qQ) {
        const TQ = new rQ;
        return this.Hermite1stDerivativeToRef(QQ, WQ, XQ, wQ, qQ, TQ), TQ
      }
      static Hermite1stDerivativeToRef(QQ, WQ, XQ, wQ, qQ, TQ) {
        const zQ = qQ * qQ;
        TQ.r = 6 * (zQ - qQ) * QQ.r + (3 * zQ - 4 * qQ + 1) * WQ.r + 6 * (-zQ + qQ) * XQ.r + (3 * zQ - 2 * qQ) * wQ.r, TQ.g = 6 * (zQ - qQ) * QQ.g + (3 * zQ - 4 * qQ + 1) * WQ.g + 6 * (-zQ + qQ) * XQ.g + (3 * zQ - 2 * qQ) * wQ.g, TQ.b = 6 * (zQ - qQ) * QQ.b + (3 * zQ - 4 * qQ + 1) * WQ.b + 6 * (-zQ + qQ) * XQ.b + (3 * zQ - 2 * qQ) * wQ.b, TQ.a = 6 * (zQ - qQ) * QQ.a + (3 * zQ - 4 * qQ + 1) * WQ.a + 6 * (-zQ + qQ) * XQ.a + (3 * zQ - 2 * qQ) * wQ.a
      }
      static FromColor3(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new rQ(QQ.r, QQ.g, QQ.b, WQ)
      }
      static FromArray(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new rQ(QQ[WQ], QQ[WQ + 1], QQ[WQ + 2], QQ[WQ + 3])
      }
      static FromArrayToRef(QQ) {
        let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          XQ = arguments.length > 2 ? arguments[2] : void 0;
        XQ.r = QQ[WQ], XQ.g = QQ[WQ + 1], XQ.b = QQ[WQ + 2], XQ.a = QQ[WQ + 3]
      }
      static FromInts(QQ, WQ, XQ, wQ) {
        return new rQ(QQ / 255, WQ / 255, XQ / 255, wQ / 255)
      }
      static CheckColors4(QQ, WQ) {
        if (QQ.length === 3 * WQ) {
          const WQ = [];
          for (let XQ = 0; XQ < QQ.length; XQ += 3) {
            const wQ = XQ / 3 * 4;
            WQ[wQ] = QQ[XQ], WQ[wQ + 1] = QQ[XQ + 1], WQ[wQ + 2] = QQ[XQ + 2], WQ[wQ + 3] = 1
          }
          return WQ
        }
        return QQ
      }
    }
    rQ._V8PerformanceHack = new rQ(.5, .5, .5, .5);
    class IQ {}
    IQ.Color3 = (0, wQ.c)(3, JQ.Black), IQ.Color4 = (0, wQ.c)(3, (() => new rQ(0, 0, 0, 0)));
    let jQ = !1;

    function BQ() {
      jQ || (jQ = !0, Object.defineProperties(JQ.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(rQ.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, zQ.d)("BABYLON.Color3", JQ), (0, zQ.d)("BABYLON.Color4", rQ))
    }
  },
  37374: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ,
      e: () => wQ,
      h: () => qQ
    });
    const wQ = 1 / 2.2,
      qQ = 2.2;
    Math.sqrt(5);
    let TQ = .001
  },
  37404: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return parseInt(QQ.toString().replace(/\W/g, ""))
    }

    function qQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(QQ - WQ) <= XQ
    }

    function TQ(QQ, WQ, XQ) {
      let wQ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return QQ < WQ - wQ || QQ > XQ + wQ
    }

    function zQ(QQ, WQ) {
      return QQ === WQ ? QQ : Math.random() * (WQ - QQ) + QQ
    }

    function sQ(QQ, WQ, XQ) {
      return QQ + (WQ - QQ) * XQ
    }

    function FQ(QQ, WQ, XQ) {
      let wQ = yQ(WQ - QQ, 360);
      return wQ > 180 && (wQ -= 360), QQ + wQ * rQ(XQ)
    }

    function PQ(QQ, WQ, XQ) {
      let wQ;
      return wQ = QQ != WQ ? rQ((XQ - QQ) / (WQ - QQ)) : 0, wQ
    }

    function gQ(QQ, WQ, XQ, wQ, qQ) {
      const TQ = qQ * qQ,
        zQ = qQ * TQ;
      return QQ * (2 * zQ - 3 * TQ + 1) + XQ * (-2 * zQ + 3 * TQ) + WQ * (zQ - 2 * TQ + qQ) + wQ * (zQ - TQ)
    }

    function JQ(QQ, WQ, XQ, wQ, qQ) {
      const TQ = qQ * qQ;
      return 6 * (TQ - qQ) * QQ + (3 * TQ - 4 * qQ + 1) * WQ + 6 * (-TQ + qQ) * XQ + (3 * TQ - 2 * qQ) * wQ
    }

    function rQ(QQ) {
      let WQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(XQ, Math.max(WQ, QQ))
    }

    function IQ(QQ) {
      return QQ -= 2 * Math.PI * Math.floor((QQ + Math.PI) / (2 * Math.PI))
    }

    function jQ(QQ) {
      const WQ = QQ.toString(16);
      return QQ <= 15 ? ("0" + WQ).toUpperCase() : WQ.toUpperCase()
    }

    function BQ(QQ) {
      if (Math.log2) return Math.floor(Math.log2(QQ));
      if (QQ < 0) return NaN;
      if (0 === QQ) return -1 / 0;
      let WQ = 0;
      if (QQ < 1) {
        for (; QQ < 1;) WQ++, QQ *= 2;
        WQ = -WQ
      } else if (QQ > 1)
        for (; QQ > 1;) WQ++, QQ = Math.floor(QQ / 2);
      return WQ
    }

    function yQ(QQ, WQ) {
      return QQ - Math.floor(QQ / WQ) * WQ
    }

    function VQ(QQ, WQ, XQ) {
      return (QQ - WQ) / (XQ - WQ)
    }

    function DQ(QQ, WQ, XQ) {
      return QQ * (XQ - WQ) + WQ
    }

    function pQ(QQ, WQ) {
      let XQ = yQ(WQ - QQ, 360);
      return XQ > 180 && (XQ -= 360), XQ
    }

    function GQ(QQ, WQ) {
      const XQ = yQ(QQ, 2 * WQ);
      return WQ - Math.abs(XQ - WQ)
    }

    function UQ(QQ, WQ, XQ) {
      let wQ = rQ(XQ);
      return wQ = -2 * wQ * wQ * wQ + 3 * wQ * wQ, WQ * wQ + QQ * (1 - wQ)
    }

    function bQ(QQ, WQ, XQ) {
      let wQ;
      return wQ = Math.abs(WQ - QQ) <= XQ ? WQ : QQ + Math.sign(WQ - QQ) * XQ, wQ
    }

    function vQ(QQ, WQ, XQ) {
      const wQ = pQ(QQ, WQ);
      let qQ;
      return qQ = -XQ < wQ && wQ < XQ ? WQ : bQ(QQ, WQ = QQ + wQ, XQ), qQ
    }

    function dQ(QQ, WQ, XQ) {
      return (QQ - WQ) / (XQ - WQ)
    }

    function HQ(QQ, WQ, XQ) {
      return (XQ - WQ) * QQ + WQ
    }

    function aQ(QQ, WQ) {
      const XQ = QQ % WQ;
      return 0 === XQ ? WQ : aQ(WQ, XQ)
    }
    XQ.r(WQ), XQ.d(WQ, {
      Clamp: () => rQ,
      DeltaAngle: () => pQ,
      Denormalize: () => DQ,
      ExtractAsInt: () => wQ,
      Hermite: () => gQ,
      Hermite1stDerivative: () => JQ,
      HighestCommonFactor: () => aQ,
      ILog2: () => BQ,
      InverseLerp: () => PQ,
      Lerp: () => sQ,
      LerpAngle: () => FQ,
      MoveTowards: () => bQ,
      MoveTowardsAngle: () => vQ,
      Normalize: () => VQ,
      NormalizeRadians: () => IQ,
      OutsideRange: () => TQ,
      PercentToRange: () => HQ,
      PingPong: () => GQ,
      RandomRange: () => zQ,
      RangeToPercent: () => dQ,
      Repeat: () => yQ,
      SmoothStep: () => UQ,
      ToHex: () => jQ,
      WithinEpsilon: () => qQ
    })
  },
  37379: (QQ, WQ, XQ) => {
    function wQ(QQ, WQ) {
      const XQ = [];
      for (let wQ = 0; wQ < QQ; ++wQ) XQ.push(WQ());
      return XQ
    }

    function qQ(QQ, WQ) {
      return wQ(QQ, WQ)
    }
    XQ.d(WQ, {
      c: () => wQ,
      e: () => qQ,
      i: () => zQ
    });
    const TQ = ["push", "splice", "pop", "shift", "unshift"];

    function zQ(QQ, WQ) {
      const XQ = TQ.map((XQ => function(QQ, WQ, XQ) {
        const wQ = QQ[WQ];
        if ("function" !== typeof wQ) return null;
        const qQ = function() {
          const wQ = QQ.length,
            TQ = qQ.previous.apply(QQ, arguments);
          return XQ(WQ, wQ), TQ
        };
        return wQ.next = qQ, qQ.previous = wQ, QQ[WQ] = qQ, () => {
          const XQ = qQ.previous;
          if (!XQ) return;
          const wQ = qQ.next;
          wQ ? (XQ.next = wQ, wQ.previous = XQ) : (XQ.next = void 0, QQ[WQ] = XQ), qQ.next = void 0, qQ.previous = void 0
        }
      }(QQ, XQ, WQ)));
      return () => {
        for (const QQ of XQ) QQ?.()
      }
    }
  },
  37418: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ,
      d: () => qQ
    });
    const wQ = {};

    function qQ(QQ, WQ) {
      wQ[QQ] = WQ
    }

    function TQ(QQ) {
      return wQ[QQ]
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);