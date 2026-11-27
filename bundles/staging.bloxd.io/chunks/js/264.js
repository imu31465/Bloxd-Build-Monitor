export const id = 264;
export const ids = [264];
export const modules = {
  38331: (RR, JR, GR) => {
    GR.d(JR, {
      d: () => KR,
      e: () => wR,
      g: () => aR,
      j: () => rR
    });
    var yR = GR(38217),
      tR = GR(38213),
      uR = GR(38239),
      ZR = GR(38253);

    function qR(RR) {
      return Math.pow(RR, tR.i)
    }

    function iR(RR) {
      return RR <= .04045 ? .0773993808 * RR : Math.pow(.947867299 * (RR + .055), 2.4)
    }

    function fR(RR) {
      return Math.pow(RR, tR.e)
    }

    function VR(RR) {
      return RR <= .0031308 ? 12.92 * RR : 1.055 * Math.pow(RR, .41666) - .055
    }
    class KR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = RR, this.g = JR, this.b = GR
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let RR = 255 * this.r | 0;
        return RR = 397 * RR ^ 255 * this.g, RR = 397 * RR ^ 255 * this.b, RR
      }
      toArray(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return RR[JR] = this.r, RR[JR + 1] = this.g, RR[JR + 2] = this.b, this
      }
      yK(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return KR.FromArrayToRef(RR, JR, this), this
      }
      toColor4() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new wR(this.r, this.g, this.b, RR)
      }
      QtR() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(RR) {
        return new KR(this.r * RR.r, this.g * RR.g, this.b * RR.b)
      }
      multiplyToRef(RR, JR) {
        return JR.r = this.r * RR.r, JR.g = this.g * RR.g, JR.b = this.b * RR.b, JR
      }
      multiplyInPlace(RR) {
        return this.r *= RR.r, this.g *= RR.g, this.b *= RR.b, this
      }
      multiplyByFloats(RR, JR, GR) {
        return new KR(this.r * RR, this.g * JR, this.b * GR)
      }
      divide(RR) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(RR, JR) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(RR) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(RR) {
        return this.minimizeInPlaceFromFloats(RR.r, RR.g, RR.b)
      }
      maximizeInPlace(RR) {
        return this.maximizeInPlaceFromFloats(RR.r, RR.g, RR.b)
      }
      minimizeInPlaceFromFloats(RR, JR, GR) {
        return this.r = Math.min(RR, this.r), this.g = Math.min(JR, this.g), this.b = Math.min(GR, this.b), this
      }
      maximizeInPlaceFromFloats(RR, JR, GR) {
        return this.r = Math.max(RR, this.r), this.g = Math.max(JR, this.g), this.b = Math.max(GR, this.b), this
      }
      floorToRef(RR) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(RR) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(RR) {
        return RR && this.r === RR.r && this.g === RR.g && this.b === RR.b
      }
      equalsFloats(RR, JR, GR) {
        return this.JiR(RR, JR, GR)
      }
      JiR(RR, JR, GR) {
        return this.r === RR && this.g === JR && this.b === GR
      }
      equalsWithEpsilon(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tR.c;
        return (0, uR.WithinEpsilon)(this.r, RR.r, JR) && (0, uR.WithinEpsilon)(this.g, RR.g, JR) && (0, uR.WithinEpsilon)(this.b, RR.b, JR)
      }
      Re() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(RR) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(RR) {
        return new KR(this.r * RR, this.g * RR, this.b * RR)
      }
      scaleInPlace(RR) {
        return this.r *= RR, this.g *= RR, this.b *= RR, this
      }
      scaleToRef(RR, JR) {
        return JR.r = this.r * RR, JR.g = this.g * RR, JR.b = this.b * RR, JR
      }
      scaleAndAddToRef(RR, JR) {
        return JR.r += this.r * RR, JR.g += this.g * RR, JR.b += this.b * RR, JR
      }
      clampToRef() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        return GR.r = (0, uR.Clamp)(this.r, RR, JR), GR.g = (0, uR.Clamp)(this.g, RR, JR), GR.b = (0, uR.Clamp)(this.b, RR, JR), GR
      }
      add(RR) {
        return new KR(this.r + RR.r, this.g + RR.g, this.b + RR.b)
      }
      addInPlace(RR) {
        return this.r += RR.r, this.g += RR.g, this.b += RR.b, this
      }
      addInPlaceFromFloats(RR, JR, GR) {
        return this.r += RR, this.g += JR, this.b += GR, this
      }
      addToRef(RR, JR) {
        return JR.r = this.r + RR.r, JR.g = this.g + RR.g, JR.b = this.b + RR.b, JR
      }
      subtract(RR) {
        return new KR(this.r - RR.r, this.g - RR.g, this.b - RR.b)
      }
      subtractToRef(RR, JR) {
        return JR.r = this.r - RR.r, JR.g = this.g - RR.g, JR.b = this.b - RR.b, JR
      }
      VuR(RR) {
        return this.r -= RR.r, this.g -= RR.g, this.b -= RR.b, this
      }
      subtractFromFloats(RR, JR, GR) {
        return new KR(this.r - RR, this.g - JR, this.b - GR)
      }
      subtractFromFloatsToRef(RR, JR, GR, yR) {
        return yR.r = this.r - RR, yR.g = this.g - JR, yR.b = this.b - GR, yR
      }
      clone() {
        return new KR(this.r, this.g, this.b)
      }
      vN(RR) {
        return this.r = RR.r, this.g = RR.g, this.b = RR.b, this
      }
      VJR(RR, JR, GR) {
        return this.r = RR, this.g = JR, this.b = GR, this
      }
      set(RR, JR, GR) {
        return this.VJR(RR, JR, GR)
      }
      NRR(RR) {
        return this.r = this.g = this.b = RR, this
      }
      toHexString() {
        const RR = Math.round(255 * this.r),
          JR = Math.round(255 * this.g),
          GR = Math.round(255 * this.b);
        return "#" + (0, uR.ToHex)(RR) + (0, uR.ToHex)(JR) + (0, uR.ToHex)(GR)
      }
      fromHexString(RR) {
        return "#" !== RR.substring(0, 1) || 7 !== RR.length || (this.r = parseInt(RR.substring(1, 3), 16) / 255, this.g = parseInt(RR.substring(3, 5), 16) / 255, this.b = parseInt(RR.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new KR)
      }
      toHSVToRef(RR) {
        const JR = this.r,
          GR = this.g,
          yR = this.b,
          tR = Math.max(JR, GR, yR),
          uR = Math.min(JR, GR, yR);
        let ZR = 0,
          qR = 0;
        const iR = tR,
          fR = tR - uR;
        return 0 !== tR && (qR = fR / tR), tR != uR && (tR == JR ? (ZR = (GR - yR) / fR, GR < yR && (ZR += 6)) : tR == GR ? ZR = (yR - JR) / fR + 2 : tR == yR && (ZR = (JR - GR) / fR + 4), ZR *= 60), RR.r = ZR, RR.g = qR, RR.b = iR, RR
      }
      toLinearSpace() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const JR = new KR;
        return this.toLinearSpaceToRef(JR, RR), JR
      }
      toLinearSpaceToRef(RR) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (RR.r = iR(this.r), RR.g = iR(this.g), RR.b = iR(this.b)) : (RR.r = qR(this.r), RR.g = qR(this.g), RR.b = qR(this.b)), this
      }
      toGammaSpace() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const JR = new KR;
        return this.toGammaSpaceToRef(JR, RR), JR
      }
      toGammaSpaceToRef(RR) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (RR.r = VR(this.r), RR.g = VR(this.g), RR.b = VR(this.b)) : (RR.r = fR(this.r), RR.g = fR(this.g), RR.b = fR(this.b)), this
      }
      static HSVtoRGBToRef(RR, JR, GR, yR) {
        const tR = GR * JR,
          uR = RR / 60,
          ZR = tR * (1 - Math.abs(uR % 2 - 1));
        let qR = 0,
          iR = 0,
          fR = 0;
        uR >= 0 && uR <= 1 ? (qR = tR, iR = ZR) : uR >= 1 && uR <= 2 ? (qR = ZR, iR = tR) : uR >= 2 && uR <= 3 ? (iR = tR, fR = ZR) : uR >= 3 && uR <= 4 ? (iR = ZR, fR = tR) : uR >= 4 && uR <= 5 ? (qR = ZR, fR = tR) : uR >= 5 && uR <= 6 && (qR = tR, fR = ZR);
        const VR = GR - tR;
        return yR.r = qR + VR, yR.g = iR + VR, yR.b = fR + VR, yR
      }
      static FromHSV(RR, JR, GR) {
        const yR = new KR(0, 0, 0);
        return KR.HSVtoRGBToRef(RR, JR, GR, yR), yR
      }
      static FromHexString(RR) {
        return new KR(0, 0, 0).fromHexString(RR)
      }
      static FromArray(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new KR(RR[JR], RR[JR + 1], RR[JR + 2])
      }
      static FromArrayToRef(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        GR.r = RR[JR], GR.g = RR[JR + 1], GR.b = RR[JR + 2]
      }
      static FromInts(RR, JR, GR) {
        return new KR(RR / 255, JR / 255, GR / 255)
      }
      static Lerp(RR, JR, GR) {
        const yR = new KR(0, 0, 0);
        return KR.LerpToRef(RR, JR, GR, yR), yR
      }
      static LerpToRef(RR, JR, GR, yR) {
        yR.r = RR.r + (JR.r - RR.r) * GR, yR.g = RR.g + (JR.g - RR.g) * GR, yR.b = RR.b + (JR.b - RR.b) * GR
      }
      static Hermite(RR, JR, GR, yR, tR) {
        const uR = tR * tR,
          ZR = tR * uR,
          qR = 2 * ZR - 3 * uR + 1,
          iR = -2 * ZR + 3 * uR,
          fR = ZR - 2 * uR + tR,
          VR = ZR - uR,
          wR = RR.r * qR + GR.r * iR + JR.r * fR + yR.r * VR,
          rR = RR.g * qR + GR.g * iR + JR.g * fR + yR.g * VR,
          eR = RR.b * qR + GR.b * iR + JR.b * fR + yR.b * VR;
        return new KR(wR, rR, eR)
      }
      static Hermite1stDerivative(RR, JR, GR, yR, tR) {
        const uR = KR.Black();
        return this.Hermite1stDerivativeToRef(RR, JR, GR, yR, tR, uR), uR
      }
      static Hermite1stDerivativeToRef(RR, JR, GR, yR, tR, uR) {
        const ZR = tR * tR;
        uR.r = 6 * (ZR - tR) * RR.r + (3 * ZR - 4 * tR + 1) * JR.r + 6 * (-ZR + tR) * GR.r + (3 * ZR - 2 * tR) * yR.r, uR.g = 6 * (ZR - tR) * RR.g + (3 * ZR - 4 * tR + 1) * JR.g + 6 * (-ZR + tR) * GR.g + (3 * ZR - 2 * tR) * yR.g, uR.b = 6 * (ZR - tR) * RR.b + (3 * ZR - 4 * tR + 1) * JR.b + 6 * (-ZR + tR) * GR.b + (3 * ZR - 2 * tR) * yR.b
      }
      static Red() {
        return new KR(1, 0, 0)
      }
      static Green() {
        return new KR(0, 1, 0)
      }
      static Blue() {
        return new KR(0, 0, 1)
      }
      static Black() {
        return new KR(0, 0, 0)
      }
      static get BlackReadOnly() {
        return KR._BlackReadOnly
      }
      static White() {
        return new KR(1, 1, 1)
      }
      static Purple() {
        return new KR(.5, 0, .5)
      }
      static Magenta() {
        return new KR(1, 0, 1)
      }
      static Yellow() {
        return new KR(1, 1, 0)
      }
      static Gray() {
        return new KR(.5, .5, .5)
      }
      static Teal() {
        return new KR(0, 1, 1)
      }
      static Random() {
        return new KR(Math.random(), Math.random(), Math.random())
      }
    }
    KR._V8PerformanceHack = new KR(.5, .5, .5), KR._BlackReadOnly = KR.Black();
    class wR {
      constructor() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = RR, this.g = JR, this.b = GR, this.a = yR
      }
      QtR() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return RR[JR] = this.r, RR[JR + 1] = this.g, RR[JR + 2] = this.b, RR[JR + 3] = this.a, this
      }
      yK(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = RR[JR], this.g = RR[JR + 1], this.b = RR[JR + 2], this.a = RR[JR + 3], this
      }
      equals(RR) {
        return RR && this.r === RR.r && this.g === RR.g && this.b === RR.b && this.a === RR.a
      }
      add(RR) {
        return new wR(this.r + RR.r, this.g + RR.g, this.b + RR.b, this.a + RR.a)
      }
      addToRef(RR, JR) {
        return JR.r = this.r + RR.r, JR.g = this.g + RR.g, JR.b = this.b + RR.b, JR.a = this.a + RR.a, JR
      }
      addInPlace(RR) {
        return this.r += RR.r, this.g += RR.g, this.b += RR.b, this.a += RR.a, this
      }
      addInPlaceFromFloats(RR, JR, GR, yR) {
        return this.r += RR, this.g += JR, this.b += GR, this.a += yR, this
      }
      subtract(RR) {
        return new wR(this.r - RR.r, this.g - RR.g, this.b - RR.b, this.a - RR.a)
      }
      subtractToRef(RR, JR) {
        return JR.r = this.r - RR.r, JR.g = this.g - RR.g, JR.b = this.b - RR.b, JR.a = this.a - RR.a, JR
      }
      VuR(RR) {
        return this.r -= RR.r, this.g -= RR.g, this.b -= RR.b, this.a -= RR.a, this
      }
      subtractFromFloats(RR, JR, GR, yR) {
        return new wR(this.r - RR, this.g - JR, this.b - GR, this.a - yR)
      }
      subtractFromFloatsToRef(RR, JR, GR, yR, tR) {
        return tR.r = this.r - RR, tR.g = this.g - JR, tR.b = this.b - GR, tR.a = this.a - yR, tR
      }
      scale(RR) {
        return new wR(this.r * RR, this.g * RR, this.b * RR, this.a * RR)
      }
      scaleInPlace(RR) {
        return this.r *= RR, this.g *= RR, this.b *= RR, this.a *= RR, this
      }
      scaleToRef(RR, JR) {
        return JR.r = this.r * RR, JR.g = this.g * RR, JR.b = this.b * RR, JR.a = this.a * RR, JR
      }
      scaleAndAddToRef(RR, JR) {
        return JR.r += this.r * RR, JR.g += this.g * RR, JR.b += this.b * RR, JR.a += this.a * RR, JR
      }
      clampToRef() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        return GR.r = (0, uR.Clamp)(this.r, RR, JR), GR.g = (0, uR.Clamp)(this.g, RR, JR), GR.b = (0, uR.Clamp)(this.b, RR, JR), GR.a = (0, uR.Clamp)(this.a, RR, JR), GR
      }
      multiply(RR) {
        return new wR(this.r * RR.r, this.g * RR.g, this.b * RR.b, this.a * RR.a)
      }
      multiplyToRef(RR, JR) {
        return JR.r = this.r * RR.r, JR.g = this.g * RR.g, JR.b = this.b * RR.b, JR.a = this.a * RR.a, JR
      }
      multiplyInPlace(RR) {
        return this.r *= RR.r, this.g *= RR.g, this.b *= RR.b, this.a *= RR.a, this
      }
      multiplyByFloats(RR, JR, GR, yR) {
        return new wR(this.r * RR, this.g * JR, this.b * GR, this.a * yR)
      }
      divide(RR) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(RR, JR) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(RR) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(RR) {
        return this.r = Math.min(this.r, RR.r), this.g = Math.min(this.g, RR.g), this.b = Math.min(this.b, RR.b), this.a = Math.min(this.a, RR.a), this
      }
      maximizeInPlace(RR) {
        return this.r = Math.max(this.r, RR.r), this.g = Math.max(this.g, RR.g), this.b = Math.max(this.b, RR.b), this.a = Math.max(this.a, RR.a), this
      }
      minimizeInPlaceFromFloats(RR, JR, GR, yR) {
        return this.r = Math.min(RR, this.r), this.g = Math.min(JR, this.g), this.b = Math.min(GR, this.b), this.a = Math.min(yR, this.a), this
      }
      maximizeInPlaceFromFloats(RR, JR, GR, yR) {
        return this.r = Math.max(RR, this.r), this.g = Math.max(JR, this.g), this.b = Math.max(GR, this.b), this.a = Math.max(yR, this.a), this
      }
      floorToRef(RR) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(RR) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      Re() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(RR) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : tR.c;
        return (0, uR.WithinEpsilon)(this.r, RR.r, JR) && (0, uR.WithinEpsilon)(this.g, RR.g, JR) && (0, uR.WithinEpsilon)(this.b, RR.b, JR) && (0, uR.WithinEpsilon)(this.a, RR.a, JR)
      }
      JiR(RR, JR, GR, yR) {
        return this.r === RR && this.g === JR && this.b === GR && this.a === yR
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let RR = 255 * this.r | 0;
        return RR = 397 * RR ^ 255 * this.g, RR = 397 * RR ^ 255 * this.b, RR = 397 * RR ^ 255 * this.a, RR
      }
      clone() {
        return (new wR).vN(this)
      }
      vN(RR) {
        return this.r = RR.r, this.g = RR.g, this.b = RR.b, this.a = RR.a, this
      }
      VJR(RR, JR, GR, yR) {
        return this.r = RR, this.g = JR, this.b = GR, this.a = yR, this
      }
      set(RR, JR, GR, yR) {
        return this.VJR(RR, JR, GR, yR)
      }
      NRR(RR) {
        return this.r = this.g = this.b = this.a = RR, this
      }
      toHexString() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const JR = Math.round(255 * this.r),
          GR = Math.round(255 * this.g),
          yR = Math.round(255 * this.b);
        if (RR) return "#" + (0, uR.ToHex)(JR) + (0, uR.ToHex)(GR) + (0, uR.ToHex)(yR);
        const tR = Math.round(255 * this.a);
        return "#" + (0, uR.ToHex)(JR) + (0, uR.ToHex)(GR) + (0, uR.ToHex)(yR) + (0, uR.ToHex)(tR)
      }
      fromHexString(RR) {
        return "#" !== RR.substring(0, 1) || 9 !== RR.length && 7 !== RR.length || (this.r = parseInt(RR.substring(1, 3), 16) / 255, this.g = parseInt(RR.substring(3, 5), 16) / 255, this.b = parseInt(RR.substring(5, 7), 16) / 255, 9 === RR.length && (this.a = parseInt(RR.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const JR = new wR;
        return this.toLinearSpaceToRef(JR, RR), JR
      }
      toLinearSpaceToRef(RR) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (RR.r = iR(this.r), RR.g = iR(this.g), RR.b = iR(this.b)) : (RR.r = qR(this.r), RR.g = qR(this.g), RR.b = qR(this.b)), RR.a = this.a, this
      }
      toGammaSpace() {
        let RR = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const JR = new wR;
        return this.toGammaSpaceToRef(JR, RR), JR
      }
      toGammaSpaceToRef(RR) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (RR.r = VR(this.r), RR.g = VR(this.g), RR.b = VR(this.b)) : (RR.r = fR(this.r), RR.g = fR(this.g), RR.b = fR(this.b)), RR.a = this.a, this
      }
      static FromHexString(RR) {
        return "#" !== RR.substring(0, 1) || 9 !== RR.length && 7 !== RR.length ? new wR(0, 0, 0, 0) : new wR(0, 0, 0, 1).fromHexString(RR)
      }
      static Lerp(RR, JR, GR) {
        return wR.LerpToRef(RR, JR, GR, new wR)
      }
      static LerpToRef(RR, JR, GR, yR) {
        return yR.r = RR.r + (JR.r - RR.r) * GR, yR.g = RR.g + (JR.g - RR.g) * GR, yR.b = RR.b + (JR.b - RR.b) * GR, yR.a = RR.a + (JR.a - RR.a) * GR, yR
      }
      static Hermite(RR, JR, GR, yR, tR) {
        const uR = tR * tR,
          ZR = tR * uR,
          qR = 2 * ZR - 3 * uR + 1,
          iR = -2 * ZR + 3 * uR,
          fR = ZR - 2 * uR + tR,
          VR = ZR - uR,
          KR = RR.r * qR + GR.r * iR + JR.r * fR + yR.r * VR,
          rR = RR.g * qR + GR.g * iR + JR.g * fR + yR.g * VR,
          eR = RR.b * qR + GR.b * iR + JR.b * fR + yR.b * VR,
          aR = RR.a * qR + GR.a * iR + JR.a * fR + yR.a * VR;
        return new wR(KR, rR, eR, aR)
      }
      static Hermite1stDerivative(RR, JR, GR, yR, tR) {
        const uR = new wR;
        return this.Hermite1stDerivativeToRef(RR, JR, GR, yR, tR, uR), uR
      }
      static Hermite1stDerivativeToRef(RR, JR, GR, yR, tR, uR) {
        const ZR = tR * tR;
        uR.r = 6 * (ZR - tR) * RR.r + (3 * ZR - 4 * tR + 1) * JR.r + 6 * (-ZR + tR) * GR.r + (3 * ZR - 2 * tR) * yR.r, uR.g = 6 * (ZR - tR) * RR.g + (3 * ZR - 4 * tR + 1) * JR.g + 6 * (-ZR + tR) * GR.g + (3 * ZR - 2 * tR) * yR.g, uR.b = 6 * (ZR - tR) * RR.b + (3 * ZR - 4 * tR + 1) * JR.b + 6 * (-ZR + tR) * GR.b + (3 * ZR - 2 * tR) * yR.b, uR.a = 6 * (ZR - tR) * RR.a + (3 * ZR - 4 * tR + 1) * JR.a + 6 * (-ZR + tR) * GR.a + (3 * ZR - 2 * tR) * yR.a
      }
      static FromColor3(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new wR(RR.r, RR.g, RR.b, JR)
      }
      static FromArray(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new wR(RR[JR], RR[JR + 1], RR[JR + 2], RR[JR + 3])
      }
      static FromArrayToRef(RR) {
        let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GR = arguments.length > 2 ? arguments[2] : void 0;
        GR.r = RR[JR], GR.g = RR[JR + 1], GR.b = RR[JR + 2], GR.a = RR[JR + 3]
      }
      static FromInts(RR, JR, GR, yR) {
        return new wR(RR / 255, JR / 255, GR / 255, yR / 255)
      }
      static CheckColors4(RR, JR) {
        if (RR.length === 3 * JR) {
          const JR = [];
          for (let GR = 0; GR < RR.length; GR += 3) {
            const yR = GR / 3 * 4;
            JR[yR] = RR[GR], JR[yR + 1] = RR[GR + 1], JR[yR + 2] = RR[GR + 2], JR[yR + 3] = 1
          }
          return JR
        }
        return RR
      }
    }
    wR._V8PerformanceHack = new wR(.5, .5, .5, .5);
    class rR {}
    rR.Color3 = (0, yR.c)(3, KR.Black), rR.Color4 = (0, yR.c)(3, (() => new wR(0, 0, 0, 0)));
    let eR = !1;

    function aR() {
      eR || (eR = !0, Object.defineProperties(KR.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(wR.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, ZR.f)("BABYLON.Color3", KR), (0, ZR.f)("BABYLON.Color4", wR))
    }
  },
  38213: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => uR,
      e: () => yR,
      i: () => tR
    });
    const yR = 1 / 2.2,
      tR = 2.2;
    Math.sqrt(5);
    let uR = .001
  },
  38239: (RR, JR, GR) => {
    function yR(RR) {
      return parseInt(RR.toString().replace(/\W/g, ""))
    }

    function tR(RR, JR) {
      let GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(RR - JR) <= GR
    }

    function uR(RR, JR, GR) {
      let yR = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return RR < JR - yR || RR > GR + yR
    }

    function ZR(RR, JR) {
      return RR === JR ? RR : Math.random() * (JR - RR) + RR
    }

    function qR(RR, JR, GR) {
      return RR + (JR - RR) * GR
    }

    function iR(RR, JR, GR) {
      let yR = LR(JR - RR, 360);
      return yR > 180 && (yR -= 360), RR + yR * wR(GR)
    }

    function fR(RR, JR, GR) {
      let yR;
      return yR = RR != JR ? wR((GR - RR) / (JR - RR)) : 0, yR
    }

    function VR(RR, JR, GR, yR, tR) {
      const uR = tR * tR,
        ZR = tR * uR;
      return RR * (2 * ZR - 3 * uR + 1) + GR * (-2 * ZR + 3 * uR) + JR * (ZR - 2 * uR + tR) + yR * (ZR - uR)
    }

    function KR(RR, JR, GR, yR, tR) {
      const uR = tR * tR;
      return 6 * (uR - tR) * RR + (3 * uR - 4 * tR + 1) * JR + 6 * (-uR + tR) * GR + (3 * uR - 2 * tR) * yR
    }

    function wR(RR) {
      let JR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        GR = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(GR, Math.max(JR, RR))
    }

    function rR(RR) {
      return RR -= 2 * Math.PI * Math.floor((RR + Math.PI) / (2 * Math.PI))
    }

    function eR(RR) {
      const JR = RR.toString(16);
      return RR <= 15 ? ("0" + JR).toUpperCase() : JR.toUpperCase()
    }

    function aR(RR) {
      if (Math.log2) return Math.floor(Math.log2(RR));
      if (RR < 0) return NaN;
      if (0 === RR) return -1 / 0;
      let JR = 0;
      if (RR < 1) {
        for (; RR < 1;) JR++, RR *= 2;
        JR = -JR
      } else if (RR > 1)
        for (; RR > 1;) JR++, RR = Math.floor(RR / 2);
      return JR
    }

    function LR(RR, JR) {
      return RR - Math.floor(RR / JR) * JR
    }

    function nR(RR, JR, GR) {
      return (RR - JR) / (GR - JR)
    }

    function UR(RR, JR, GR) {
      return RR * (GR - JR) + JR
    }

    function WR(RR, JR) {
      let GR = LR(JR - RR, 360);
      return GR > 180 && (GR -= 360), GR
    }

    function AR(RR, JR) {
      const GR = LR(RR, 2 * JR);
      return JR - Math.abs(GR - JR)
    }

    function CR(RR, JR, GR) {
      let yR = wR(GR);
      return yR = -2 * yR * yR * yR + 3 * yR * yR, JR * yR + RR * (1 - yR)
    }

    function XR(RR, JR, GR) {
      let yR;
      return yR = Math.abs(JR - RR) <= GR ? JR : RR + Math.sign(JR - RR) * GR, yR
    }

    function MR(RR, JR, GR) {
      const yR = WR(RR, JR);
      let tR;
      return tR = -GR < yR && yR < GR ? JR : XR(RR, JR = RR + yR, GR), tR
    }

    function BR(RR, JR, GR) {
      return (RR - JR) / (GR - JR)
    }

    function lR(RR, JR, GR) {
      return (GR - JR) * RR + JR
    }

    function pR(RR, JR) {
      const GR = RR % JR;
      return 0 === GR ? JR : pR(JR, GR)
    }
    GR.r(JR), GR.d(JR, {
      Clamp: () => wR,
      DeltaAngle: () => WR,
      Denormalize: () => UR,
      ExtractAsInt: () => yR,
      Hermite: () => VR,
      Hermite1stDerivative: () => KR,
      HighestCommonFactor: () => pR,
      ILog2: () => aR,
      InverseLerp: () => fR,
      Lerp: () => qR,
      LerpAngle: () => iR,
      MoveTowards: () => XR,
      MoveTowardsAngle: () => MR,
      Normalize: () => nR,
      NormalizeRadians: () => rR,
      OutsideRange: () => uR,
      PercentToRange: () => lR,
      PingPong: () => AR,
      RandomRange: () => ZR,
      RangeToPercent: () => BR,
      Repeat: () => LR,
      SmoothStep: () => CR,
      ToHex: () => eR,
      WithinEpsilon: () => tR
    })
  },
  38217: (RR, JR, GR) => {
    function yR(RR, JR) {
      const GR = [];
      for (let yR = 0; yR < RR; ++yR) GR.push(JR());
      return GR
    }

    function tR(RR, JR) {
      return yR(RR, JR)
    }
    GR.d(JR, {
      c: () => yR,
      g: () => tR,
      i: () => ZR
    });
    const uR = ["push", "splice", "pop", "shift", "unshift"];

    function ZR(RR, JR) {
      const GR = uR.map((GR => function(RR, JR, GR) {
        const yR = RR[JR];
        if ("function" !== typeof yR) return null;
        const tR = function() {
          const yR = RR.length,
            uR = tR.previous.apply(RR, arguments);
          return GR(JR, yR), uR
        };
        return yR.next = tR, tR.previous = yR, RR[JR] = tR, () => {
          const GR = tR.previous;
          if (!GR) return;
          const yR = tR.next;
          yR ? (GR.next = yR, yR.previous = GR) : (GR.next = void 0, RR[JR] = GR), tR.next = void 0, tR.previous = void 0
        }
      }(RR, GR, JR)));
      return () => {
        for (const RR of GR) RR?.()
      }
    }
  },
  38253: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => uR,
      f: () => tR
    });
    const yR = {};

    function tR(RR, JR) {
      yR[RR] = JR
    }

    function uR(RR) {
      return yR[RR]
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);