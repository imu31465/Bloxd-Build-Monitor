export const id = 207;
export const ids = [207];
export const modules = {
  35678: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => iW,
      i: () => eF,
      k: () => rW,
      l: () => EF
    });
    var CF = SF(35631),
      AF = SF(35625),
      uF = SF(35650),
      hF = SF(35660);

    function bW(FF) {
      return Math.pow(FF, AF.f)
    }

    function dF(FF) {
      return FF <= .04045 ? .0773993808 * FF : Math.pow(.947867299 * (FF + .055), 2.4)
    }

    function PF(FF) {
      return Math.pow(FF, AF.d)
    }

    function RF(FF) {
      return FF <= .0031308 ? 12.92 * FF : 1.055 * Math.pow(FF, .41666) - .055
    }
    class iW {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = FF, this.g = WF, this.b = SF
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let FF = 255 * this.r | 0;
        return FF = 397 * FF ^ 255 * this.g, FF = 397 * FF ^ 255 * this.b, FF
      }
      toArray(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return FF[WF] = this.r, FF[WF + 1] = this.g, FF[WF + 2] = this.b, this
      }
      udF(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return iW.FromArrayToRef(FF, WF, this), this
      }
      toColor4() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new eF(this.r, this.g, this.b, FF)
      }
      kRF() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(FF) {
        return new iW(this.r * FF.r, this.g * FF.g, this.b * FF.b)
      }
      multiplyToRef(FF, WF) {
        return WF.r = this.r * FF.r, WF.g = this.g * FF.g, WF.b = this.b * FF.b, WF
      }
      multiplyInPlace(FF) {
        return this.r *= FF.r, this.g *= FF.g, this.b *= FF.b, this
      }
      multiplyByFloats(FF, WF, SF) {
        return new iW(this.r * FF, this.g * WF, this.b * SF)
      }
      divide(FF) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(FF, WF) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(FF) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(FF) {
        return this.minimizeInPlaceFromFloats(FF.r, FF.g, FF.b)
      }
      maximizeInPlace(FF) {
        return this.maximizeInPlaceFromFloats(FF.r, FF.g, FF.b)
      }
      minimizeInPlaceFromFloats(FF, WF, SF) {
        return this.r = Math.min(FF, this.r), this.g = Math.min(WF, this.g), this.b = Math.min(SF, this.b), this
      }
      maximizeInPlaceFromFloats(FF, WF, SF) {
        return this.r = Math.max(FF, this.r), this.g = Math.max(WF, this.g), this.b = Math.max(SF, this.b), this
      }
      floorToRef(FF) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(FF) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(FF) {
        return FF && this.r === FF.r && this.g === FF.g && this.b === FF.b
      }
      equalsFloats(FF, WF, SF) {
        return this.HeF(FF, WF, SF)
      }
      HeF(FF, WF, SF) {
        return this.r === FF && this.g === WF && this.b === SF
      }
      equalsWithEpsilon(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AF.c;
        return (0, uF.WithinEpsilon)(this.r, FF.r, WF) && (0, uF.WithinEpsilon)(this.g, FF.g, WF) && (0, uF.WithinEpsilon)(this.b, FF.b, WF)
      }
      Fh() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(FF) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(FF) {
        return new iW(this.r * FF, this.g * FF, this.b * FF)
      }
      scaleInPlace(FF) {
        return this.r *= FF, this.g *= FF, this.b *= FF, this
      }
      scaleToRef(FF, WF) {
        return WF.r = this.r * FF, WF.g = this.g * FF, WF.b = this.b * FF, WF
      }
      scaleAndAddToRef(FF, WF) {
        return WF.r += this.r * FF, WF.g += this.g * FF, WF.b += this.b * FF, WF
      }
      clampToRef() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        return SF.r = (0, uF.Clamp)(this.r, FF, WF), SF.g = (0, uF.Clamp)(this.g, FF, WF), SF.b = (0, uF.Clamp)(this.b, FF, WF), SF
      }
      add(FF) {
        return new iW(this.r + FF.r, this.g + FF.g, this.b + FF.b)
      }
      addInPlace(FF) {
        return this.r += FF.r, this.g += FF.g, this.b += FF.b, this
      }
      addInPlaceFromFloats(FF, WF, SF) {
        return this.r += FF, this.g += WF, this.b += SF, this
      }
      addToRef(FF, WF) {
        return WF.r = this.r + FF.r, WF.g = this.g + FF.g, WF.b = this.b + FF.b, WF
      }
      subtract(FF) {
        return new iW(this.r - FF.r, this.g - FF.g, this.b - FF.b)
      }
      subtractToRef(FF, WF) {
        return WF.r = this.r - FF.r, WF.g = this.g - FF.g, WF.b = this.b - FF.b, WF
      }
      IPF(FF) {
        return this.r -= FF.r, this.g -= FF.g, this.b -= FF.b, this
      }
      subtractFromFloats(FF, WF, SF) {
        return new iW(this.r - FF, this.g - WF, this.b - SF)
      }
      subtractFromFloatsToRef(FF, WF, SF, CF) {
        return CF.r = this.r - FF, CF.g = this.g - WF, CF.b = this.b - SF, CF
      }
      clone() {
        return new iW(this.r, this.g, this.b)
      }
      fdF(FF) {
        return this.r = FF.r, this.g = FF.g, this.b = FF.b, this
      }
      FhF(FF, WF, SF) {
        return this.r = FF, this.g = WF, this.b = SF, this
      }
      set(FF, WF, SF) {
        return this.FhF(FF, WF, SF)
      }
      DuF(FF) {
        return this.r = this.g = this.b = FF, this
      }
      toHexString() {
        const FF = Math.round(255 * this.r),
          WF = Math.round(255 * this.g),
          SF = Math.round(255 * this.b);
        return "#" + (0, uF.ToHex)(FF) + (0, uF.ToHex)(WF) + (0, uF.ToHex)(SF)
      }
      fromHexString(FF) {
        return "#" !== FF.substring(0, 1) || 7 !== FF.length || (this.r = parseInt(FF.substring(1, 3), 16) / 255, this.g = parseInt(FF.substring(3, 5), 16) / 255, this.b = parseInt(FF.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new iW)
      }
      toHSVToRef(FF) {
        const WF = this.r,
          SF = this.g,
          CF = this.b,
          AF = Math.max(WF, SF, CF),
          uF = Math.min(WF, SF, CF);
        let hF = 0,
          bW = 0;
        const dF = AF,
          PF = AF - uF;
        return 0 !== AF && (bW = PF / AF), AF != uF && (AF == WF ? (hF = (SF - CF) / PF, SF < CF && (hF += 6)) : AF == SF ? hF = (CF - WF) / PF + 2 : AF == CF && (hF = (WF - SF) / PF + 4), hF *= 60), FF.r = hF, FF.g = bW, FF.b = dF, FF
      }
      toLinearSpace() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WF = new iW;
        return this.toLinearSpaceToRef(WF, FF), WF
      }
      toLinearSpaceToRef(FF) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (FF.r = dF(this.r), FF.g = dF(this.g), FF.b = dF(this.b)) : (FF.r = bW(this.r), FF.g = bW(this.g), FF.b = bW(this.b)), this
      }
      toGammaSpace() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WF = new iW;
        return this.toGammaSpaceToRef(WF, FF), WF
      }
      toGammaSpaceToRef(FF) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (FF.r = RF(this.r), FF.g = RF(this.g), FF.b = RF(this.b)) : (FF.r = PF(this.r), FF.g = PF(this.g), FF.b = PF(this.b)), this
      }
      static HSVtoRGBToRef(FF, WF, SF, CF) {
        const AF = SF * WF,
          uF = FF / 60,
          hF = AF * (1 - Math.abs(uF % 2 - 1));
        let bW = 0,
          dF = 0,
          PF = 0;
        uF >= 0 && uF <= 1 ? (bW = AF, dF = hF) : uF >= 1 && uF <= 2 ? (bW = hF, dF = AF) : uF >= 2 && uF <= 3 ? (dF = AF, PF = hF) : uF >= 3 && uF <= 4 ? (dF = hF, PF = AF) : uF >= 4 && uF <= 5 ? (bW = hF, PF = AF) : uF >= 5 && uF <= 6 && (bW = AF, PF = hF);
        const RF = SF - AF;
        return CF.r = bW + RF, CF.g = dF + RF, CF.b = PF + RF, CF
      }
      static FromHSV(FF, WF, SF) {
        const CF = new iW(0, 0, 0);
        return iW.HSVtoRGBToRef(FF, WF, SF, CF), CF
      }
      static FromHexString(FF) {
        return new iW(0, 0, 0).fromHexString(FF)
      }
      static FromArray(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new iW(FF[WF], FF[WF + 1], FF[WF + 2])
      }
      static FromArrayToRef(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        SF.r = FF[WF], SF.g = FF[WF + 1], SF.b = FF[WF + 2]
      }
      static FromInts(FF, WF, SF) {
        return new iW(FF / 255, WF / 255, SF / 255)
      }
      static Lerp(FF, WF, SF) {
        const CF = new iW(0, 0, 0);
        return iW.LerpToRef(FF, WF, SF, CF), CF
      }
      static LerpToRef(FF, WF, SF, CF) {
        CF.r = FF.r + (WF.r - FF.r) * SF, CF.g = FF.g + (WF.g - FF.g) * SF, CF.b = FF.b + (WF.b - FF.b) * SF
      }
      static Hermite(FF, WF, SF, CF, AF) {
        const uF = AF * AF,
          hF = AF * uF,
          bW = 2 * hF - 3 * uF + 1,
          dF = -2 * hF + 3 * uF,
          PF = hF - 2 * uF + AF,
          RF = hF - uF,
          eF = FF.r * bW + SF.r * dF + WF.r * PF + CF.r * RF,
          EF = FF.g * bW + SF.g * dF + WF.g * PF + CF.g * RF,
          QF = FF.b * bW + SF.b * dF + WF.b * PF + CF.b * RF;
        return new iW(eF, EF, QF)
      }
      static Hermite1stDerivative(FF, WF, SF, CF, AF) {
        const uF = iW.Black();
        return this.Hermite1stDerivativeToRef(FF, WF, SF, CF, AF, uF), uF
      }
      static Hermite1stDerivativeToRef(FF, WF, SF, CF, AF, uF) {
        const hF = AF * AF;
        uF.r = 6 * (hF - AF) * FF.r + (3 * hF - 4 * AF + 1) * WF.r + 6 * (-hF + AF) * SF.r + (3 * hF - 2 * AF) * CF.r, uF.g = 6 * (hF - AF) * FF.g + (3 * hF - 4 * AF + 1) * WF.g + 6 * (-hF + AF) * SF.g + (3 * hF - 2 * AF) * CF.g, uF.b = 6 * (hF - AF) * FF.b + (3 * hF - 4 * AF + 1) * WF.b + 6 * (-hF + AF) * SF.b + (3 * hF - 2 * AF) * CF.b
      }
      static Red() {
        return new iW(1, 0, 0)
      }
      static Green() {
        return new iW(0, 1, 0)
      }
      static Blue() {
        return new iW(0, 0, 1)
      }
      static Black() {
        return new iW(0, 0, 0)
      }
      static get BlackReadOnly() {
        return iW._BlackReadOnly
      }
      static White() {
        return new iW(1, 1, 1)
      }
      static Purple() {
        return new iW(.5, 0, .5)
      }
      static Magenta() {
        return new iW(1, 0, 1)
      }
      static Yellow() {
        return new iW(1, 1, 0)
      }
      static Gray() {
        return new iW(.5, .5, .5)
      }
      static Teal() {
        return new iW(0, 1, 1)
      }
      static Random() {
        return new iW(Math.random(), Math.random(), Math.random())
      }
    }
    iW._V8PerformanceHack = new iW(.5, .5, .5), iW._BlackReadOnly = iW.Black();
    class eF {
      constructor() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = FF, this.g = WF, this.b = SF, this.a = CF
      }
      kRF() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return FF[WF] = this.r, FF[WF + 1] = this.g, FF[WF + 2] = this.b, FF[WF + 3] = this.a, this
      }
      udF(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = FF[WF], this.g = FF[WF + 1], this.b = FF[WF + 2], this.a = FF[WF + 3], this
      }
      equals(FF) {
        return FF && this.r === FF.r && this.g === FF.g && this.b === FF.b && this.a === FF.a
      }
      add(FF) {
        return new eF(this.r + FF.r, this.g + FF.g, this.b + FF.b, this.a + FF.a)
      }
      addToRef(FF, WF) {
        return WF.r = this.r + FF.r, WF.g = this.g + FF.g, WF.b = this.b + FF.b, WF.a = this.a + FF.a, WF
      }
      addInPlace(FF) {
        return this.r += FF.r, this.g += FF.g, this.b += FF.b, this.a += FF.a, this
      }
      addInPlaceFromFloats(FF, WF, SF, CF) {
        return this.r += FF, this.g += WF, this.b += SF, this.a += CF, this
      }
      subtract(FF) {
        return new eF(this.r - FF.r, this.g - FF.g, this.b - FF.b, this.a - FF.a)
      }
      subtractToRef(FF, WF) {
        return WF.r = this.r - FF.r, WF.g = this.g - FF.g, WF.b = this.b - FF.b, WF.a = this.a - FF.a, WF
      }
      IPF(FF) {
        return this.r -= FF.r, this.g -= FF.g, this.b -= FF.b, this.a -= FF.a, this
      }
      subtractFromFloats(FF, WF, SF, CF) {
        return new eF(this.r - FF, this.g - WF, this.b - SF, this.a - CF)
      }
      subtractFromFloatsToRef(FF, WF, SF, CF, AF) {
        return AF.r = this.r - FF, AF.g = this.g - WF, AF.b = this.b - SF, AF.a = this.a - CF, AF
      }
      scale(FF) {
        return new eF(this.r * FF, this.g * FF, this.b * FF, this.a * FF)
      }
      scaleInPlace(FF) {
        return this.r *= FF, this.g *= FF, this.b *= FF, this.a *= FF, this
      }
      scaleToRef(FF, WF) {
        return WF.r = this.r * FF, WF.g = this.g * FF, WF.b = this.b * FF, WF.a = this.a * FF, WF
      }
      scaleAndAddToRef(FF, WF) {
        return WF.r += this.r * FF, WF.g += this.g * FF, WF.b += this.b * FF, WF.a += this.a * FF, WF
      }
      clampToRef() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        return SF.r = (0, uF.Clamp)(this.r, FF, WF), SF.g = (0, uF.Clamp)(this.g, FF, WF), SF.b = (0, uF.Clamp)(this.b, FF, WF), SF.a = (0, uF.Clamp)(this.a, FF, WF), SF
      }
      multiply(FF) {
        return new eF(this.r * FF.r, this.g * FF.g, this.b * FF.b, this.a * FF.a)
      }
      multiplyToRef(FF, WF) {
        return WF.r = this.r * FF.r, WF.g = this.g * FF.g, WF.b = this.b * FF.b, WF.a = this.a * FF.a, WF
      }
      multiplyInPlace(FF) {
        return this.r *= FF.r, this.g *= FF.g, this.b *= FF.b, this.a *= FF.a, this
      }
      multiplyByFloats(FF, WF, SF, CF) {
        return new eF(this.r * FF, this.g * WF, this.b * SF, this.a * CF)
      }
      divide(FF) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(FF, WF) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(FF) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(FF) {
        return this.r = Math.min(this.r, FF.r), this.g = Math.min(this.g, FF.g), this.b = Math.min(this.b, FF.b), this.a = Math.min(this.a, FF.a), this
      }
      maximizeInPlace(FF) {
        return this.r = Math.max(this.r, FF.r), this.g = Math.max(this.g, FF.g), this.b = Math.max(this.b, FF.b), this.a = Math.max(this.a, FF.a), this
      }
      minimizeInPlaceFromFloats(FF, WF, SF, CF) {
        return this.r = Math.min(FF, this.r), this.g = Math.min(WF, this.g), this.b = Math.min(SF, this.b), this.a = Math.min(CF, this.a), this
      }
      maximizeInPlaceFromFloats(FF, WF, SF, CF) {
        return this.r = Math.max(FF, this.r), this.g = Math.max(WF, this.g), this.b = Math.max(SF, this.b), this.a = Math.max(CF, this.a), this
      }
      floorToRef(FF) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(FF) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      Fh() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(FF) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : AF.c;
        return (0, uF.WithinEpsilon)(this.r, FF.r, WF) && (0, uF.WithinEpsilon)(this.g, FF.g, WF) && (0, uF.WithinEpsilon)(this.b, FF.b, WF) && (0, uF.WithinEpsilon)(this.a, FF.a, WF)
      }
      HeF(FF, WF, SF, CF) {
        return this.r === FF && this.g === WF && this.b === SF && this.a === CF
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let FF = 255 * this.r | 0;
        return FF = 397 * FF ^ 255 * this.g, FF = 397 * FF ^ 255 * this.b, FF = 397 * FF ^ 255 * this.a, FF
      }
      clone() {
        return (new eF).fdF(this)
      }
      fdF(FF) {
        return this.r = FF.r, this.g = FF.g, this.b = FF.b, this.a = FF.a, this
      }
      FhF(FF, WF, SF, CF) {
        return this.r = FF, this.g = WF, this.b = SF, this.a = CF, this
      }
      set(FF, WF, SF, CF) {
        return this.FhF(FF, WF, SF, CF)
      }
      DuF(FF) {
        return this.r = this.g = this.b = this.a = FF, this
      }
      toHexString() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WF = Math.round(255 * this.r),
          SF = Math.round(255 * this.g),
          CF = Math.round(255 * this.b);
        if (FF) return "#" + (0, uF.ToHex)(WF) + (0, uF.ToHex)(SF) + (0, uF.ToHex)(CF);
        const AF = Math.round(255 * this.a);
        return "#" + (0, uF.ToHex)(WF) + (0, uF.ToHex)(SF) + (0, uF.ToHex)(CF) + (0, uF.ToHex)(AF)
      }
      fromHexString(FF) {
        return "#" !== FF.substring(0, 1) || 9 !== FF.length && 7 !== FF.length || (this.r = parseInt(FF.substring(1, 3), 16) / 255, this.g = parseInt(FF.substring(3, 5), 16) / 255, this.b = parseInt(FF.substring(5, 7), 16) / 255, 9 === FF.length && (this.a = parseInt(FF.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WF = new eF;
        return this.toLinearSpaceToRef(WF, FF), WF
      }
      toLinearSpaceToRef(FF) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (FF.r = dF(this.r), FF.g = dF(this.g), FF.b = dF(this.b)) : (FF.r = bW(this.r), FF.g = bW(this.g), FF.b = bW(this.b)), FF.a = this.a, this
      }
      toGammaSpace() {
        let FF = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const WF = new eF;
        return this.toGammaSpaceToRef(WF, FF), WF
      }
      toGammaSpaceToRef(FF) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (FF.r = RF(this.r), FF.g = RF(this.g), FF.b = RF(this.b)) : (FF.r = PF(this.r), FF.g = PF(this.g), FF.b = PF(this.b)), FF.a = this.a, this
      }
      static FromHexString(FF) {
        return "#" !== FF.substring(0, 1) || 9 !== FF.length && 7 !== FF.length ? new eF(0, 0, 0, 0) : new eF(0, 0, 0, 1).fromHexString(FF)
      }
      static Lerp(FF, WF, SF) {
        return eF.LerpToRef(FF, WF, SF, new eF)
      }
      static LerpToRef(FF, WF, SF, CF) {
        return CF.r = FF.r + (WF.r - FF.r) * SF, CF.g = FF.g + (WF.g - FF.g) * SF, CF.b = FF.b + (WF.b - FF.b) * SF, CF.a = FF.a + (WF.a - FF.a) * SF, CF
      }
      static Hermite(FF, WF, SF, CF, AF) {
        const uF = AF * AF,
          hF = AF * uF,
          bW = 2 * hF - 3 * uF + 1,
          dF = -2 * hF + 3 * uF,
          PF = hF - 2 * uF + AF,
          RF = hF - uF,
          iW = FF.r * bW + SF.r * dF + WF.r * PF + CF.r * RF,
          EF = FF.g * bW + SF.g * dF + WF.g * PF + CF.g * RF,
          QF = FF.b * bW + SF.b * dF + WF.b * PF + CF.b * RF,
          rW = FF.a * bW + SF.a * dF + WF.a * PF + CF.a * RF;
        return new eF(iW, EF, QF, rW)
      }
      static Hermite1stDerivative(FF, WF, SF, CF, AF) {
        const uF = new eF;
        return this.Hermite1stDerivativeToRef(FF, WF, SF, CF, AF, uF), uF
      }
      static Hermite1stDerivativeToRef(FF, WF, SF, CF, AF, uF) {
        const hF = AF * AF;
        uF.r = 6 * (hF - AF) * FF.r + (3 * hF - 4 * AF + 1) * WF.r + 6 * (-hF + AF) * SF.r + (3 * hF - 2 * AF) * CF.r, uF.g = 6 * (hF - AF) * FF.g + (3 * hF - 4 * AF + 1) * WF.g + 6 * (-hF + AF) * SF.g + (3 * hF - 2 * AF) * CF.g, uF.b = 6 * (hF - AF) * FF.b + (3 * hF - 4 * AF + 1) * WF.b + 6 * (-hF + AF) * SF.b + (3 * hF - 2 * AF) * CF.b, uF.a = 6 * (hF - AF) * FF.a + (3 * hF - 4 * AF + 1) * WF.a + 6 * (-hF + AF) * SF.a + (3 * hF - 2 * AF) * CF.a
      }
      static FromColor3(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new eF(FF.r, FF.g, FF.b, WF)
      }
      static FromArray(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new eF(FF[WF], FF[WF + 1], FF[WF + 2], FF[WF + 3])
      }
      static FromArrayToRef(FF) {
        let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          SF = arguments.length > 2 ? arguments[2] : void 0;
        SF.r = FF[WF], SF.g = FF[WF + 1], SF.b = FF[WF + 2], SF.a = FF[WF + 3]
      }
      static FromInts(FF, WF, SF, CF) {
        return new eF(FF / 255, WF / 255, SF / 255, CF / 255)
      }
      static CheckColors4(FF, WF) {
        if (FF.length === 3 * WF) {
          const WF = [];
          for (let SF = 0; SF < FF.length; SF += 3) {
            const CF = SF / 3 * 4;
            WF[CF] = FF[SF], WF[CF + 1] = FF[SF + 1], WF[CF + 2] = FF[SF + 2], WF[CF + 3] = 1
          }
          return WF
        }
        return FF
      }
    }
    eF._V8PerformanceHack = new eF(.5, .5, .5, .5);
    class EF {}
    EF.Color3 = (0, CF.e)(3, iW.Black), EF.Color4 = (0, CF.e)(3, (() => new eF(0, 0, 0, 0)));
    let QF = !1;

    function rW() {
      QF || (QF = !0, Object.defineProperties(iW.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(eF.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, hF.f)("BABYLON.Color3", iW), (0, hF.f)("BABYLON.Color4", eF))
    }
  },
  35625: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF,
      d: () => CF,
      f: () => AF
    });
    const CF = 1 / 2.2,
      AF = 2.2;
    Math.sqrt(5);
    let uF = .001
  },
  35650: (FF, WF, SF) => {
    function CF(FF) {
      return parseInt(FF.toString().replace(/\W/g, ""))
    }

    function AF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(FF - WF) <= SF
    }

    function uF(FF, WF, SF) {
      let CF = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return FF < WF - CF || FF > SF + CF
    }

    function hF(FF, WF) {
      return FF === WF ? FF : Math.random() * (WF - FF) + FF
    }

    function bW(FF, WF, SF) {
      return FF + (WF - FF) * SF
    }

    function dF(FF, WF, SF) {
      let CF = gW(WF - FF, 360);
      return CF > 180 && (CF -= 360), FF + CF * eF(SF)
    }

    function PF(FF, WF, SF) {
      let CF;
      return CF = FF != WF ? eF((SF - FF) / (WF - FF)) : 0, CF
    }

    function RF(FF, WF, SF, CF, AF) {
      const uF = AF * AF,
        hF = AF * uF;
      return FF * (2 * hF - 3 * uF + 1) + SF * (-2 * hF + 3 * uF) + WF * (hF - 2 * uF + AF) + CF * (hF - uF)
    }

    function iW(FF, WF, SF, CF, AF) {
      const uF = AF * AF;
      return 6 * (uF - AF) * FF + (3 * uF - 4 * AF + 1) * WF + 6 * (-uF + AF) * SF + (3 * uF - 2 * AF) * CF
    }

    function eF(FF) {
      let WF = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(SF, Math.max(WF, FF))
    }

    function EF(FF) {
      return FF -= 2 * Math.PI * Math.floor((FF + Math.PI) / (2 * Math.PI))
    }

    function QF(FF) {
      const WF = FF.toString(16);
      return FF <= 15 ? ("0" + WF).toUpperCase() : WF.toUpperCase()
    }

    function rW(FF) {
      if (Math.log2) return Math.floor(Math.log2(FF));
      if (FF < 0) return NaN;
      if (0 === FF) return -1 / 0;
      let WF = 0;
      if (FF < 1) {
        for (; FF < 1;) WF++, FF *= 2;
        WF = -WF
      } else if (FF > 1)
        for (; FF > 1;) WF++, FF = Math.floor(FF / 2);
      return WF
    }

    function gW(FF, WF) {
      return FF - Math.floor(FF / WF) * WF
    }

    function tW(FF, WF, SF) {
      return (FF - WF) / (SF - WF)
    }

    function TF(FF, WF, SF) {
      return FF * (SF - WF) + WF
    }

    function aW(FF, WF) {
      let SF = gW(WF - FF, 360);
      return SF > 180 && (SF -= 360), SF
    }

    function kW(FF, WF) {
      const SF = gW(FF, 2 * WF);
      return WF - Math.abs(SF - WF)
    }

    function qW(FF, WF, SF) {
      let CF = eF(SF);
      return CF = -2 * CF * CF * CF + 3 * CF * CF, WF * CF + FF * (1 - CF)
    }

    function VF(FF, WF, SF) {
      let CF;
      return CF = Math.abs(WF - FF) <= SF ? WF : FF + Math.sign(WF - FF) * SF, CF
    }

    function NF(FF, WF, SF) {
      const CF = aW(FF, WF);
      let AF;
      return AF = -SF < CF && CF < SF ? WF : VF(FF, WF = FF + CF, SF), AF
    }

    function DF(FF, WF, SF) {
      return (FF - WF) / (SF - WF)
    }

    function LF(FF, WF, SF) {
      return (SF - WF) * FF + WF
    }

    function mW(FF, WF) {
      const SF = FF % WF;
      return 0 === SF ? WF : mW(WF, SF)
    }
    SF.r(WF), SF.d(WF, {
      Clamp: () => eF,
      DeltaAngle: () => aW,
      Denormalize: () => TF,
      ExtractAsInt: () => CF,
      Hermite: () => RF,
      Hermite1stDerivative: () => iW,
      HighestCommonFactor: () => mW,
      ILog2: () => rW,
      InverseLerp: () => PF,
      Lerp: () => bW,
      LerpAngle: () => dF,
      MoveTowards: () => VF,
      MoveTowardsAngle: () => NF,
      Normalize: () => tW,
      NormalizeRadians: () => EF,
      OutsideRange: () => uF,
      PercentToRange: () => LF,
      PingPong: () => kW,
      RandomRange: () => hF,
      RangeToPercent: () => DF,
      Repeat: () => gW,
      SmoothStep: () => qW,
      ToHex: () => QF,
      WithinEpsilon: () => AF
    })
  },
  35631: (FF, WF, SF) => {
    function CF(FF, WF) {
      const SF = [];
      for (let CF = 0; CF < FF; ++CF) SF.push(WF());
      return SF
    }

    function AF(FF, WF) {
      return CF(FF, WF)
    }
    SF.d(WF, {
      e: () => CF,
      g: () => AF,
      h: () => hF
    });
    const uF = ["push", "splice", "pop", "shift", "unshift"];

    function hF(FF, WF) {
      const SF = uF.map((SF => function(FF, WF, SF) {
        const CF = FF[WF];
        if ("function" !== typeof CF) return null;
        const AF = function() {
          const CF = FF.length,
            uF = AF.previous.apply(FF, arguments);
          return SF(WF, CF), uF
        };
        return CF.next = AF, AF.previous = CF, FF[WF] = AF, () => {
          const SF = AF.previous;
          if (!SF) return;
          const CF = AF.next;
          CF ? (SF.next = CF, CF.previous = SF) : (SF.next = void 0, FF[WF] = SF), AF.next = void 0, AF.previous = void 0
        }
      }(FF, SF, WF)));
      return () => {
        for (const FF of SF) FF?.()
      }
    }
  },
  35660: (FF, WF, SF) => {
    SF.d(WF, {
      c: () => uF,
      f: () => AF
    });
    const CF = {};

    function AF(FF, WF) {
      CF[FF] = WF
    }

    function uF(FF) {
      return CF[FF]
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);