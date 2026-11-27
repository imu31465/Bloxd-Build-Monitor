export const id = 259;
export const ids = [259];
export const modules = {
  38022: (ee, ie, He) => {
    He.d(ie, {
      c: () => Re,
      g: () => ke,
      h: () => Te,
      j: () => qe
    });
    var ye = He(37925),
      be = He(37920),
      Me = He(37938),
      Ke = He(37949);

    function Ue(ee) {
      return Math.pow(ee, be.h)
    }

    function Fe(ee) {
      return ee <= .04045 ? .0773993808 * ee : Math.pow(.947867299 * (ee + .055), 2.4)
    }

    function Je(ee) {
      return Math.pow(ee, be.d)
    }

    function oe(ee) {
      return ee <= .0031308 ? 12.92 * ee : 1.055 * Math.pow(ee, .41666) - .055
    }
    class Re {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = ee, this.g = ie, this.b = He
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let ee = 255 * this.r | 0;
        return ee = 397 * ee ^ 255 * this.g, ee = 397 * ee ^ 255 * this.b, ee
      }
      toArray(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ee[ie] = this.r, ee[ie + 1] = this.g, ee[ie + 2] = this.b, this
      }
      MR(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Re.FromArrayToRef(ee, ie, this), this
      }
      toColor4() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new ke(this.r, this.g, this.b, ee)
      }
      Qbe() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(ee) {
        return new Re(this.r * ee.r, this.g * ee.g, this.b * ee.b)
      }
      multiplyToRef(ee, ie) {
        return ie.r = this.r * ee.r, ie.g = this.g * ee.g, ie.b = this.b * ee.b, ie
      }
      multiplyInPlace(ee) {
        return this.r *= ee.r, this.g *= ee.g, this.b *= ee.b, this
      }
      multiplyByFloats(ee, ie, He) {
        return new Re(this.r * ee, this.g * ie, this.b * He)
      }
      divide(ee) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(ee, ie) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(ee) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(ee) {
        return this.minimizeInPlaceFromFloats(ee.r, ee.g, ee.b)
      }
      maximizeInPlace(ee) {
        return this.maximizeInPlaceFromFloats(ee.r, ee.g, ee.b)
      }
      minimizeInPlaceFromFloats(ee, ie, He) {
        return this.r = Math.min(ee, this.r), this.g = Math.min(ie, this.g), this.b = Math.min(He, this.b), this
      }
      maximizeInPlaceFromFloats(ee, ie, He) {
        return this.r = Math.max(ee, this.r), this.g = Math.max(ie, this.g), this.b = Math.max(He, this.b), this
      }
      floorToRef(ee) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(ee) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(ee) {
        return ee && this.r === ee.r && this.g === ee.g && this.b === ee.b
      }
      equalsFloats(ee, ie, He) {
        return this.wFe(ee, ie, He)
      }
      wFe(ee, ie, He) {
        return this.r === ee && this.g === ie && this.b === He
      }
      equalsWithEpsilon(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : be.b;
        return (0, Me.WithinEpsilon)(this.r, ee.r, ie) && (0, Me.WithinEpsilon)(this.g, ee.g, ie) && (0, Me.WithinEpsilon)(this.b, ee.b, ie)
      }
      ck() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(ee) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(ee) {
        return new Re(this.r * ee, this.g * ee, this.b * ee)
      }
      scaleInPlace(ee) {
        return this.r *= ee, this.g *= ee, this.b *= ee, this
      }
      scaleToRef(ee, ie) {
        return ie.r = this.r * ee, ie.g = this.g * ee, ie.b = this.b * ee, ie
      }
      scaleAndAddToRef(ee, ie) {
        return ie.r += this.r * ee, ie.g += this.g * ee, ie.b += this.b * ee, ie
      }
      clampToRef() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          He = arguments.length > 2 ? arguments[2] : void 0;
        return He.r = (0, Me.Clamp)(this.r, ee, ie), He.g = (0, Me.Clamp)(this.g, ee, ie), He.b = (0, Me.Clamp)(this.b, ee, ie), He
      }
      add(ee) {
        return new Re(this.r + ee.r, this.g + ee.g, this.b + ee.b)
      }
      addInPlace(ee) {
        return this.r += ee.r, this.g += ee.g, this.b += ee.b, this
      }
      addInPlaceFromFloats(ee, ie, He) {
        return this.r += ee, this.g += ie, this.b += He, this
      }
      addToRef(ee, ie) {
        return ie.r = this.r + ee.r, ie.g = this.g + ee.g, ie.b = this.b + ee.b, ie
      }
      subtract(ee) {
        return new Re(this.r - ee.r, this.g - ee.g, this.b - ee.b)
      }
      subtractToRef(ee, ie) {
        return ie.r = this.r - ee.r, ie.g = this.g - ee.g, ie.b = this.b - ee.b, ie
      }
      XMe(ee) {
        return this.r -= ee.r, this.g -= ee.g, this.b -= ee.b, this
      }
      subtractFromFloats(ee, ie, He) {
        return new Re(this.r - ee, this.g - ie, this.b - He)
      }
      subtractFromFloatsToRef(ee, ie, He, ye) {
        return ye.r = this.r - ee, ye.g = this.g - ie, ye.b = this.b - He, ye
      }
      clone() {
        return new Re(this.r, this.g, this.b)
      }
      jD(ee) {
        return this.r = ee.r, this.g = ee.g, this.b = ee.b, this
      }
      wie(ee, ie, He) {
        return this.r = ee, this.g = ie, this.b = He, this
      }
      set(ee, ie, He) {
        return this.wie(ee, ie, He)
      }
      Iee(ee) {
        return this.r = this.g = this.b = ee, this
      }
      toHexString() {
        const ee = Math.round(255 * this.r),
          ie = Math.round(255 * this.g),
          He = Math.round(255 * this.b);
        return "#" + (0, Me.ToHex)(ee) + (0, Me.ToHex)(ie) + (0, Me.ToHex)(He)
      }
      fromHexString(ee) {
        return "#" !== ee.substring(0, 1) || 7 !== ee.length || (this.r = parseInt(ee.substring(1, 3), 16) / 255, this.g = parseInt(ee.substring(3, 5), 16) / 255, this.b = parseInt(ee.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new Re)
      }
      toHSVToRef(ee) {
        const ie = this.r,
          He = this.g,
          ye = this.b,
          be = Math.max(ie, He, ye),
          Me = Math.min(ie, He, ye);
        let Ke = 0,
          Ue = 0;
        const Fe = be,
          Je = be - Me;
        return 0 !== be && (Ue = Je / be), be != Me && (be == ie ? (Ke = (He - ye) / Je, He < ye && (Ke += 6)) : be == He ? Ke = (ye - ie) / Je + 2 : be == ye && (Ke = (ie - He) / Je + 4), Ke *= 60), ee.r = Ke, ee.g = Ue, ee.b = Fe, ee
      }
      toLinearSpace() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ie = new Re;
        return this.toLinearSpaceToRef(ie, ee), ie
      }
      toLinearSpaceToRef(ee) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (ee.r = Fe(this.r), ee.g = Fe(this.g), ee.b = Fe(this.b)) : (ee.r = Ue(this.r), ee.g = Ue(this.g), ee.b = Ue(this.b)), this
      }
      toGammaSpace() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ie = new Re;
        return this.toGammaSpaceToRef(ie, ee), ie
      }
      toGammaSpaceToRef(ee) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (ee.r = oe(this.r), ee.g = oe(this.g), ee.b = oe(this.b)) : (ee.r = Je(this.r), ee.g = Je(this.g), ee.b = Je(this.b)), this
      }
      static HSVtoRGBToRef(ee, ie, He, ye) {
        const be = He * ie,
          Me = ee / 60,
          Ke = be * (1 - Math.abs(Me % 2 - 1));
        let Ue = 0,
          Fe = 0,
          Je = 0;
        Me >= 0 && Me <= 1 ? (Ue = be, Fe = Ke) : Me >= 1 && Me <= 2 ? (Ue = Ke, Fe = be) : Me >= 2 && Me <= 3 ? (Fe = be, Je = Ke) : Me >= 3 && Me <= 4 ? (Fe = Ke, Je = be) : Me >= 4 && Me <= 5 ? (Ue = Ke, Je = be) : Me >= 5 && Me <= 6 && (Ue = be, Je = Ke);
        const oe = He - be;
        return ye.r = Ue + oe, ye.g = Fe + oe, ye.b = Je + oe, ye
      }
      static FromHSV(ee, ie, He) {
        const ye = new Re(0, 0, 0);
        return Re.HSVtoRGBToRef(ee, ie, He, ye), ye
      }
      static FromHexString(ee) {
        return new Re(0, 0, 0).fromHexString(ee)
      }
      static FromArray(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Re(ee[ie], ee[ie + 1], ee[ie + 2])
      }
      static FromArrayToRef(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 ? arguments[2] : void 0;
        He.r = ee[ie], He.g = ee[ie + 1], He.b = ee[ie + 2]
      }
      static FromInts(ee, ie, He) {
        return new Re(ee / 255, ie / 255, He / 255)
      }
      static Lerp(ee, ie, He) {
        const ye = new Re(0, 0, 0);
        return Re.LerpToRef(ee, ie, He, ye), ye
      }
      static LerpToRef(ee, ie, He, ye) {
        ye.r = ee.r + (ie.r - ee.r) * He, ye.g = ee.g + (ie.g - ee.g) * He, ye.b = ee.b + (ie.b - ee.b) * He
      }
      static Hermite(ee, ie, He, ye, be) {
        const Me = be * be,
          Ke = be * Me,
          Ue = 2 * Ke - 3 * Me + 1,
          Fe = -2 * Ke + 3 * Me,
          Je = Ke - 2 * Me + be,
          oe = Ke - Me,
          ke = ee.r * Ue + He.r * Fe + ie.r * Je + ye.r * oe,
          qe = ee.g * Ue + He.g * Fe + ie.g * Je + ye.g * oe,
          fe = ee.b * Ue + He.b * Fe + ie.b * Je + ye.b * oe;
        return new Re(ke, qe, fe)
      }
      static Hermite1stDerivative(ee, ie, He, ye, be) {
        const Me = Re.Black();
        return this.Hermite1stDerivativeToRef(ee, ie, He, ye, be, Me), Me
      }
      static Hermite1stDerivativeToRef(ee, ie, He, ye, be, Me) {
        const Ke = be * be;
        Me.r = 6 * (Ke - be) * ee.r + (3 * Ke - 4 * be + 1) * ie.r + 6 * (-Ke + be) * He.r + (3 * Ke - 2 * be) * ye.r, Me.g = 6 * (Ke - be) * ee.g + (3 * Ke - 4 * be + 1) * ie.g + 6 * (-Ke + be) * He.g + (3 * Ke - 2 * be) * ye.g, Me.b = 6 * (Ke - be) * ee.b + (3 * Ke - 4 * be + 1) * ie.b + 6 * (-Ke + be) * He.b + (3 * Ke - 2 * be) * ye.b
      }
      static Red() {
        return new Re(1, 0, 0)
      }
      static Green() {
        return new Re(0, 1, 0)
      }
      static Blue() {
        return new Re(0, 0, 1)
      }
      static Black() {
        return new Re(0, 0, 0)
      }
      static get BlackReadOnly() {
        return Re._BlackReadOnly
      }
      static White() {
        return new Re(1, 1, 1)
      }
      static Purple() {
        return new Re(.5, 0, .5)
      }
      static Magenta() {
        return new Re(1, 0, 1)
      }
      static Yellow() {
        return new Re(1, 1, 0)
      }
      static Gray() {
        return new Re(.5, .5, .5)
      }
      static Teal() {
        return new Re(0, 1, 1)
      }
      static Random() {
        return new Re(Math.random(), Math.random(), Math.random())
      }
    }
    Re._V8PerformanceHack = new Re(.5, .5, .5), Re._BlackReadOnly = Re.Black();
    class ke {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = ee, this.g = ie, this.b = He, this.a = ye
      }
      Qbe() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ee[ie] = this.r, ee[ie + 1] = this.g, ee[ie + 2] = this.b, ee[ie + 3] = this.a, this
      }
      MR(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = ee[ie], this.g = ee[ie + 1], this.b = ee[ie + 2], this.a = ee[ie + 3], this
      }
      equals(ee) {
        return ee && this.r === ee.r && this.g === ee.g && this.b === ee.b && this.a === ee.a
      }
      add(ee) {
        return new ke(this.r + ee.r, this.g + ee.g, this.b + ee.b, this.a + ee.a)
      }
      addToRef(ee, ie) {
        return ie.r = this.r + ee.r, ie.g = this.g + ee.g, ie.b = this.b + ee.b, ie.a = this.a + ee.a, ie
      }
      addInPlace(ee) {
        return this.r += ee.r, this.g += ee.g, this.b += ee.b, this.a += ee.a, this
      }
      addInPlaceFromFloats(ee, ie, He, ye) {
        return this.r += ee, this.g += ie, this.b += He, this.a += ye, this
      }
      subtract(ee) {
        return new ke(this.r - ee.r, this.g - ee.g, this.b - ee.b, this.a - ee.a)
      }
      subtractToRef(ee, ie) {
        return ie.r = this.r - ee.r, ie.g = this.g - ee.g, ie.b = this.b - ee.b, ie.a = this.a - ee.a, ie
      }
      XMe(ee) {
        return this.r -= ee.r, this.g -= ee.g, this.b -= ee.b, this.a -= ee.a, this
      }
      subtractFromFloats(ee, ie, He, ye) {
        return new ke(this.r - ee, this.g - ie, this.b - He, this.a - ye)
      }
      subtractFromFloatsToRef(ee, ie, He, ye, be) {
        return be.r = this.r - ee, be.g = this.g - ie, be.b = this.b - He, be.a = this.a - ye, be
      }
      scale(ee) {
        return new ke(this.r * ee, this.g * ee, this.b * ee, this.a * ee)
      }
      scaleInPlace(ee) {
        return this.r *= ee, this.g *= ee, this.b *= ee, this.a *= ee, this
      }
      scaleToRef(ee, ie) {
        return ie.r = this.r * ee, ie.g = this.g * ee, ie.b = this.b * ee, ie.a = this.a * ee, ie
      }
      scaleAndAddToRef(ee, ie) {
        return ie.r += this.r * ee, ie.g += this.g * ee, ie.b += this.b * ee, ie.a += this.a * ee, ie
      }
      clampToRef() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          He = arguments.length > 2 ? arguments[2] : void 0;
        return He.r = (0, Me.Clamp)(this.r, ee, ie), He.g = (0, Me.Clamp)(this.g, ee, ie), He.b = (0, Me.Clamp)(this.b, ee, ie), He.a = (0, Me.Clamp)(this.a, ee, ie), He
      }
      multiply(ee) {
        return new ke(this.r * ee.r, this.g * ee.g, this.b * ee.b, this.a * ee.a)
      }
      multiplyToRef(ee, ie) {
        return ie.r = this.r * ee.r, ie.g = this.g * ee.g, ie.b = this.b * ee.b, ie.a = this.a * ee.a, ie
      }
      multiplyInPlace(ee) {
        return this.r *= ee.r, this.g *= ee.g, this.b *= ee.b, this.a *= ee.a, this
      }
      multiplyByFloats(ee, ie, He, ye) {
        return new ke(this.r * ee, this.g * ie, this.b * He, this.a * ye)
      }
      divide(ee) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(ee, ie) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(ee) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(ee) {
        return this.r = Math.min(this.r, ee.r), this.g = Math.min(this.g, ee.g), this.b = Math.min(this.b, ee.b), this.a = Math.min(this.a, ee.a), this
      }
      maximizeInPlace(ee) {
        return this.r = Math.max(this.r, ee.r), this.g = Math.max(this.g, ee.g), this.b = Math.max(this.b, ee.b), this.a = Math.max(this.a, ee.a), this
      }
      minimizeInPlaceFromFloats(ee, ie, He, ye) {
        return this.r = Math.min(ee, this.r), this.g = Math.min(ie, this.g), this.b = Math.min(He, this.b), this.a = Math.min(ye, this.a), this
      }
      maximizeInPlaceFromFloats(ee, ie, He, ye) {
        return this.r = Math.max(ee, this.r), this.g = Math.max(ie, this.g), this.b = Math.max(He, this.b), this.a = Math.max(ye, this.a), this
      }
      floorToRef(ee) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(ee) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      ck() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(ee) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : be.b;
        return (0, Me.WithinEpsilon)(this.r, ee.r, ie) && (0, Me.WithinEpsilon)(this.g, ee.g, ie) && (0, Me.WithinEpsilon)(this.b, ee.b, ie) && (0, Me.WithinEpsilon)(this.a, ee.a, ie)
      }
      wFe(ee, ie, He, ye) {
        return this.r === ee && this.g === ie && this.b === He && this.a === ye
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let ee = 255 * this.r | 0;
        return ee = 397 * ee ^ 255 * this.g, ee = 397 * ee ^ 255 * this.b, ee = 397 * ee ^ 255 * this.a, ee
      }
      clone() {
        return (new ke).jD(this)
      }
      jD(ee) {
        return this.r = ee.r, this.g = ee.g, this.b = ee.b, this.a = ee.a, this
      }
      wie(ee, ie, He, ye) {
        return this.r = ee, this.g = ie, this.b = He, this.a = ye, this
      }
      set(ee, ie, He, ye) {
        return this.wie(ee, ie, He, ye)
      }
      Iee(ee) {
        return this.r = this.g = this.b = this.a = ee, this
      }
      toHexString() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ie = Math.round(255 * this.r),
          He = Math.round(255 * this.g),
          ye = Math.round(255 * this.b);
        if (ee) return "#" + (0, Me.ToHex)(ie) + (0, Me.ToHex)(He) + (0, Me.ToHex)(ye);
        const be = Math.round(255 * this.a);
        return "#" + (0, Me.ToHex)(ie) + (0, Me.ToHex)(He) + (0, Me.ToHex)(ye) + (0, Me.ToHex)(be)
      }
      fromHexString(ee) {
        return "#" !== ee.substring(0, 1) || 9 !== ee.length && 7 !== ee.length || (this.r = parseInt(ee.substring(1, 3), 16) / 255, this.g = parseInt(ee.substring(3, 5), 16) / 255, this.b = parseInt(ee.substring(5, 7), 16) / 255, 9 === ee.length && (this.a = parseInt(ee.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ie = new ke;
        return this.toLinearSpaceToRef(ie, ee), ie
      }
      toLinearSpaceToRef(ee) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (ee.r = Fe(this.r), ee.g = Fe(this.g), ee.b = Fe(this.b)) : (ee.r = Ue(this.r), ee.g = Ue(this.g), ee.b = Ue(this.b)), ee.a = this.a, this
      }
      toGammaSpace() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const ie = new ke;
        return this.toGammaSpaceToRef(ie, ee), ie
      }
      toGammaSpaceToRef(ee) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (ee.r = oe(this.r), ee.g = oe(this.g), ee.b = oe(this.b)) : (ee.r = Je(this.r), ee.g = Je(this.g), ee.b = Je(this.b)), ee.a = this.a, this
      }
      static FromHexString(ee) {
        return "#" !== ee.substring(0, 1) || 9 !== ee.length && 7 !== ee.length ? new ke(0, 0, 0, 0) : new ke(0, 0, 0, 1).fromHexString(ee)
      }
      static Lerp(ee, ie, He) {
        return ke.LerpToRef(ee, ie, He, new ke)
      }
      static LerpToRef(ee, ie, He, ye) {
        return ye.r = ee.r + (ie.r - ee.r) * He, ye.g = ee.g + (ie.g - ee.g) * He, ye.b = ee.b + (ie.b - ee.b) * He, ye.a = ee.a + (ie.a - ee.a) * He, ye
      }
      static Hermite(ee, ie, He, ye, be) {
        const Me = be * be,
          Ke = be * Me,
          Ue = 2 * Ke - 3 * Me + 1,
          Fe = -2 * Ke + 3 * Me,
          Je = Ke - 2 * Me + be,
          oe = Ke - Me,
          Re = ee.r * Ue + He.r * Fe + ie.r * Je + ye.r * oe,
          qe = ee.g * Ue + He.g * Fe + ie.g * Je + ye.g * oe,
          fe = ee.b * Ue + He.b * Fe + ie.b * Je + ye.b * oe,
          Te = ee.a * Ue + He.a * Fe + ie.a * Je + ye.a * oe;
        return new ke(Re, qe, fe, Te)
      }
      static Hermite1stDerivative(ee, ie, He, ye, be) {
        const Me = new ke;
        return this.Hermite1stDerivativeToRef(ee, ie, He, ye, be, Me), Me
      }
      static Hermite1stDerivativeToRef(ee, ie, He, ye, be, Me) {
        const Ke = be * be;
        Me.r = 6 * (Ke - be) * ee.r + (3 * Ke - 4 * be + 1) * ie.r + 6 * (-Ke + be) * He.r + (3 * Ke - 2 * be) * ye.r, Me.g = 6 * (Ke - be) * ee.g + (3 * Ke - 4 * be + 1) * ie.g + 6 * (-Ke + be) * He.g + (3 * Ke - 2 * be) * ye.g, Me.b = 6 * (Ke - be) * ee.b + (3 * Ke - 4 * be + 1) * ie.b + 6 * (-Ke + be) * He.b + (3 * Ke - 2 * be) * ye.b, Me.a = 6 * (Ke - be) * ee.a + (3 * Ke - 4 * be + 1) * ie.a + 6 * (-Ke + be) * He.a + (3 * Ke - 2 * be) * ye.a
      }
      static FromColor3(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new ke(ee.r, ee.g, ee.b, ie)
      }
      static FromArray(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new ke(ee[ie], ee[ie + 1], ee[ie + 2], ee[ie + 3])
      }
      static FromArrayToRef(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          He = arguments.length > 2 ? arguments[2] : void 0;
        He.r = ee[ie], He.g = ee[ie + 1], He.b = ee[ie + 2], He.a = ee[ie + 3]
      }
      static FromInts(ee, ie, He, ye) {
        return new ke(ee / 255, ie / 255, He / 255, ye / 255)
      }
      static CheckColors4(ee, ie) {
        if (ee.length === 3 * ie) {
          const ie = [];
          for (let He = 0; He < ee.length; He += 3) {
            const ye = He / 3 * 4;
            ie[ye] = ee[He], ie[ye + 1] = ee[He + 1], ie[ye + 2] = ee[He + 2], ie[ye + 3] = 1
          }
          return ie
        }
        return ee
      }
    }
    ke._V8PerformanceHack = new ke(.5, .5, .5, .5);
    class qe {}
    qe.Color3 = (0, ye.c)(3, Re.Black), qe.Color4 = (0, ye.c)(3, (() => new ke(0, 0, 0, 0)));
    let fe = !1;

    function Te() {
      fe || (fe = !0, Object.defineProperties(Re.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(ke.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, Ke.e)("BABYLON.Color3", Re), (0, Ke.e)("BABYLON.Color4", ke))
    }
  },
  37920: (ee, ie, He) => {
    He.d(ie, {
      b: () => Me,
      d: () => ye,
      h: () => be
    });
    const ye = 1 / 2.2,
      be = 2.2;
    Math.sqrt(5);
    let Me = .001
  },
  37938: (ee, ie, He) => {
    function ye(ee) {
      return parseInt(ee.toString().replace(/\W/g, ""))
    }

    function be(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(ee - ie) <= He
    }

    function Me(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return ee < ie - ye || ee > He + ye
    }

    function Ke(ee, ie) {
      return ee === ie ? ee : Math.random() * (ie - ee) + ee
    }

    function Ue(ee, ie, He) {
      return ee + (ie - ee) * He
    }

    function Fe(ee, ie, He) {
      let ye = pe(ie - ee, 360);
      return ye > 180 && (ye -= 360), ee + ye * ke(He)
    }

    function Je(ee, ie, He) {
      let ye;
      return ye = ee != ie ? ke((He - ee) / (ie - ee)) : 0, ye
    }

    function oe(ee, ie, He, ye, be) {
      const Me = be * be,
        Ke = be * Me;
      return ee * (2 * Ke - 3 * Me + 1) + He * (-2 * Ke + 3 * Me) + ie * (Ke - 2 * Me + be) + ye * (Ke - Me)
    }

    function Re(ee, ie, He, ye, be) {
      const Me = be * be;
      return 6 * (Me - be) * ee + (3 * Me - 4 * be + 1) * ie + 6 * (-Me + be) * He + (3 * Me - 2 * be) * ye
    }

    function ke(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(He, Math.max(ie, ee))
    }

    function qe(ee) {
      return ee -= 2 * Math.PI * Math.floor((ee + Math.PI) / (2 * Math.PI))
    }

    function fe(ee) {
      const ie = ee.toString(16);
      return ee <= 15 ? ("0" + ie).toUpperCase() : ie.toUpperCase()
    }

    function Te(ee) {
      if (Math.log2) return Math.floor(Math.log2(ee));
      if (ee < 0) return NaN;
      if (0 === ee) return -1 / 0;
      let ie = 0;
      if (ee < 1) {
        for (; ee < 1;) ie++, ee *= 2;
        ie = -ie
      } else if (ee > 1)
        for (; ee > 1;) ie++, ee = Math.floor(ee / 2);
      return ie
    }

    function pe(ee, ie) {
      return ee - Math.floor(ee / ie) * ie
    }

    function Xe(ee, ie, He) {
      return (ee - ie) / (He - ie)
    }

    function ze(ee, ie, He) {
      return ee * (He - ie) + ie
    }

    function Be(ee, ie) {
      let He = pe(ie - ee, 360);
      return He > 180 && (He -= 360), He
    }

    function Ee(ee, ie) {
      const He = pe(ee, 2 * ie);
      return ie - Math.abs(He - ie)
    }

    function ge(ee, ie, He) {
      let ye = ke(He);
      return ye = -2 * ye * ye * ye + 3 * ye * ye, ie * ye + ee * (1 - ye)
    }

    function Oe(ee, ie, He) {
      let ye;
      return ye = Math.abs(ie - ee) <= He ? ie : ee + Math.sign(ie - ee) * He, ye
    }

    function de(ee, ie, He) {
      const ye = Be(ee, ie);
      let be;
      return be = -He < ye && ye < He ? ie : Oe(ee, ie = ee + ye, He), be
    }

    function We(ee, ie, He) {
      return (ee - ie) / (He - ie)
    }

    function te(ee, ie, He) {
      return (He - ie) * ee + ie
    }

    function Ze(ee, ie) {
      const He = ee % ie;
      return 0 === He ? ie : Ze(ie, He)
    }
    He.r(ie), He.d(ie, {
      Clamp: () => ke,
      DeltaAngle: () => Be,
      Denormalize: () => ze,
      ExtractAsInt: () => ye,
      Hermite: () => oe,
      Hermite1stDerivative: () => Re,
      HighestCommonFactor: () => Ze,
      ILog2: () => Te,
      InverseLerp: () => Je,
      Lerp: () => Ue,
      LerpAngle: () => Fe,
      MoveTowards: () => Oe,
      MoveTowardsAngle: () => de,
      Normalize: () => Xe,
      NormalizeRadians: () => qe,
      OutsideRange: () => Me,
      PercentToRange: () => te,
      PingPong: () => Ee,
      RandomRange: () => Ke,
      RangeToPercent: () => We,
      Repeat: () => pe,
      SmoothStep: () => ge,
      ToHex: () => fe,
      WithinEpsilon: () => be
    })
  },
  37925: (ee, ie, He) => {
    function ye(ee, ie) {
      const He = [];
      for (let ye = 0; ye < ee; ++ye) He.push(ie());
      return He
    }

    function be(ee, ie) {
      return ye(ee, ie)
    }
    He.d(ie, {
      c: () => ye,
      g: () => be,
      j: () => Ke
    });
    const Me = ["push", "splice", "pop", "shift", "unshift"];

    function Ke(ee, ie) {
      const He = Me.map((He => function(ee, ie, He) {
        const ye = ee[ie];
        if ("function" !== typeof ye) return null;
        const be = function() {
          const ye = ee.length,
            Me = be.previous.apply(ee, arguments);
          return He(ie, ye), Me
        };
        return ye.next = be, be.previous = ye, ee[ie] = be, () => {
          const He = be.previous;
          if (!He) return;
          const ye = be.next;
          ye ? (He.next = ye, ye.previous = He) : (He.next = void 0, ee[ie] = He), be.next = void 0, be.previous = void 0
        }
      }(ee, He, ie)));
      return () => {
        for (const ee of He) ee?.()
      }
    }
  },
  37949: (ee, ie, He) => {
    He.d(ie, {
      c: () => Me,
      e: () => be
    });
    const ye = {};

    function be(ee, ie) {
      ye[ee] = ie
    }

    function Me(ee) {
      return ye[ee]
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);