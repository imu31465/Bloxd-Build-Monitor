export const id = 237;
export const ids = [237];
export const modules = {
  37513: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => Qt,
      c: () => lt,
      e: () => wt,
      f: () => Et
    });
    var Ot = Vt(37350),
      qt = Vt(37342),
      Dt = Vt(37372),
      mt = Vt(37390);

    function dt(tt) {
      return Math.pow(tt, qt.i)
    }

    function jt(tt) {
      return tt <= .04045 ? .0773993808 * tt : Math.pow(.947867299 * (tt + .055), 2.4)
    }

    function Ht(tt) {
      return Math.pow(tt, qt.h)
    }

    function Xt(tt) {
      return tt <= .0031308 ? 12.92 * tt : 1.055 * Math.pow(tt, .41666) - .055
    }
    class Qt {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = tt, this.g = et, this.b = Vt
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let tt = 255 * this.r | 0;
        return tt = 397 * tt ^ 255 * this.g, tt = 397 * tt ^ 255 * this.b, tt
      }
      toArray(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return tt[et] = this.r, tt[et + 1] = this.g, tt[et + 2] = this.b, this
      }
      vVt(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Qt.FromArrayToRef(tt, et, this), this
      }
      toColor4() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new lt(this.r, this.g, this.b, tt)
      }
      GOt() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(tt) {
        return new Qt(this.r * tt.r, this.g * tt.g, this.b * tt.b)
      }
      multiplyToRef(tt, et) {
        return et.r = this.r * tt.r, et.g = this.g * tt.g, et.b = this.b * tt.b, et
      }
      multiplyInPlace(tt) {
        return this.r *= tt.r, this.g *= tt.g, this.b *= tt.b, this
      }
      multiplyByFloats(tt, et, Vt) {
        return new Qt(this.r * tt, this.g * et, this.b * Vt)
      }
      divide(tt) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(tt, et) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(tt) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(tt) {
        return this.minimizeInPlaceFromFloats(tt.r, tt.g, tt.b)
      }
      maximizeInPlace(tt) {
        return this.maximizeInPlaceFromFloats(tt.r, tt.g, tt.b)
      }
      minimizeInPlaceFromFloats(tt, et, Vt) {
        return this.r = Math.min(tt, this.r), this.g = Math.min(et, this.g), this.b = Math.min(Vt, this.b), this
      }
      maximizeInPlaceFromFloats(tt, et, Vt) {
        return this.r = Math.max(tt, this.r), this.g = Math.max(et, this.g), this.b = Math.max(Vt, this.b), this
      }
      floorToRef(tt) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(tt) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(tt) {
        return tt && this.r === tt.r && this.g === tt.g && this.b === tt.b
      }
      equalsFloats(tt, et, Vt) {
        return this.adt(tt, et, Vt)
      }
      adt(tt, et, Vt) {
        return this.r === tt && this.g === et && this.b === Vt
      }
      equalsWithEpsilon(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qt.e;
        return (0, Dt.WithinEpsilon)(this.r, tt.r, et) && (0, Dt.WithinEpsilon)(this.g, tt.g, et) && (0, Dt.WithinEpsilon)(this.b, tt.b, et)
      }
      gq() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(tt) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(tt) {
        return new Qt(this.r * tt, this.g * tt, this.b * tt)
      }
      scaleInPlace(tt) {
        return this.r *= tt, this.g *= tt, this.b *= tt, this
      }
      scaleToRef(tt, et) {
        return et.r = this.r * tt, et.g = this.g * tt, et.b = this.b * tt, et
      }
      scaleAndAddToRef(tt, et) {
        return et.r += this.r * tt, et.g += this.g * tt, et.b += this.b * tt, et
      }
      clampToRef() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        return Vt.r = (0, Dt.Clamp)(this.r, tt, et), Vt.g = (0, Dt.Clamp)(this.g, tt, et), Vt.b = (0, Dt.Clamp)(this.b, tt, et), Vt
      }
      add(tt) {
        return new Qt(this.r + tt.r, this.g + tt.g, this.b + tt.b)
      }
      addInPlace(tt) {
        return this.r += tt.r, this.g += tt.g, this.b += tt.b, this
      }
      addInPlaceFromFloats(tt, et, Vt) {
        return this.r += tt, this.g += et, this.b += Vt, this
      }
      addToRef(tt, et) {
        return et.r = this.r + tt.r, et.g = this.g + tt.g, et.b = this.b + tt.b, et
      }
      subtract(tt) {
        return new Qt(this.r - tt.r, this.g - tt.g, this.b - tt.b)
      }
      subtractToRef(tt, et) {
        return et.r = this.r - tt.r, et.g = this.g - tt.g, et.b = this.b - tt.b, et
      }
      qqt(tt) {
        return this.r -= tt.r, this.g -= tt.g, this.b -= tt.b, this
      }
      subtractFromFloats(tt, et, Vt) {
        return new Qt(this.r - tt, this.g - et, this.b - Vt)
      }
      subtractFromFloatsToRef(tt, et, Vt, Ot) {
        return Ot.r = this.r - tt, Ot.g = this.g - et, Ot.b = this.b - Vt, Ot
      }
      clone() {
        return new Qt(this.r, this.g, this.b)
      }
      rK(tt) {
        return this.r = tt.r, this.g = tt.g, this.b = tt.b, this
      }
      W9(tt, et, Vt) {
        return this.r = tt, this.g = et, this.b = Vt, this
      }
      set(tt, et, Vt) {
        return this.W9(tt, et, Vt)
      }
      S_(tt) {
        return this.r = this.g = this.b = tt, this
      }
      toHexString() {
        const tt = Math.round(255 * this.r),
          et = Math.round(255 * this.g),
          Vt = Math.round(255 * this.b);
        return "#" + (0, Dt.ToHex)(tt) + (0, Dt.ToHex)(et) + (0, Dt.ToHex)(Vt)
      }
      fromHexString(tt) {
        return "#" !== tt.substring(0, 1) || 7 !== tt.length || (this.r = parseInt(tt.substring(1, 3), 16) / 255, this.g = parseInt(tt.substring(3, 5), 16) / 255, this.b = parseInt(tt.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new Qt)
      }
      toHSVToRef(tt) {
        const et = this.r,
          Vt = this.g,
          Ot = this.b,
          qt = Math.max(et, Vt, Ot),
          Dt = Math.min(et, Vt, Ot);
        let mt = 0,
          dt = 0;
        const jt = qt,
          Ht = qt - Dt;
        return 0 !== qt && (dt = Ht / qt), qt != Dt && (qt == et ? (mt = (Vt - Ot) / Ht, Vt < Ot && (mt += 6)) : qt == Vt ? mt = (Ot - et) / Ht + 2 : qt == Ot && (mt = (et - Vt) / Ht + 4), mt *= 60), tt.r = mt, tt.g = dt, tt.b = jt, tt
      }
      toLinearSpace() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const et = new Qt;
        return this.toLinearSpaceToRef(et, tt), et
      }
      toLinearSpaceToRef(tt) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (tt.r = jt(this.r), tt.g = jt(this.g), tt.b = jt(this.b)) : (tt.r = dt(this.r), tt.g = dt(this.g), tt.b = dt(this.b)), this
      }
      toGammaSpace() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const et = new Qt;
        return this.toGammaSpaceToRef(et, tt), et
      }
      toGammaSpaceToRef(tt) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (tt.r = Xt(this.r), tt.g = Xt(this.g), tt.b = Xt(this.b)) : (tt.r = Ht(this.r), tt.g = Ht(this.g), tt.b = Ht(this.b)), this
      }
      static HSVtoRGBToRef(tt, et, Vt, Ot) {
        const qt = Vt * et,
          Dt = tt / 60,
          mt = qt * (1 - Math.abs(Dt % 2 - 1));
        let dt = 0,
          jt = 0,
          Ht = 0;
        Dt >= 0 && Dt <= 1 ? (dt = qt, jt = mt) : Dt >= 1 && Dt <= 2 ? (dt = mt, jt = qt) : Dt >= 2 && Dt <= 3 ? (jt = qt, Ht = mt) : Dt >= 3 && Dt <= 4 ? (jt = mt, Ht = qt) : Dt >= 4 && Dt <= 5 ? (dt = mt, Ht = qt) : Dt >= 5 && Dt <= 6 && (dt = qt, Ht = mt);
        const Xt = Vt - qt;
        return Ot.r = dt + Xt, Ot.g = jt + Xt, Ot.b = Ht + Xt, Ot
      }
      static FromHSV(tt, et, Vt) {
        const Ot = new Qt(0, 0, 0);
        return Qt.HSVtoRGBToRef(tt, et, Vt, Ot), Ot
      }
      static FromHexString(tt) {
        return new Qt(0, 0, 0).fromHexString(tt)
      }
      static FromArray(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Qt(tt[et], tt[et + 1], tt[et + 2])
      }
      static FromArrayToRef(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        Vt.r = tt[et], Vt.g = tt[et + 1], Vt.b = tt[et + 2]
      }
      static FromInts(tt, et, Vt) {
        return new Qt(tt / 255, et / 255, Vt / 255)
      }
      static Lerp(tt, et, Vt) {
        const Ot = new Qt(0, 0, 0);
        return Qt.LerpToRef(tt, et, Vt, Ot), Ot
      }
      static LerpToRef(tt, et, Vt, Ot) {
        Ot.r = tt.r + (et.r - tt.r) * Vt, Ot.g = tt.g + (et.g - tt.g) * Vt, Ot.b = tt.b + (et.b - tt.b) * Vt
      }
      static Hermite(tt, et, Vt, Ot, qt) {
        const Dt = qt * qt,
          mt = qt * Dt,
          dt = 2 * mt - 3 * Dt + 1,
          jt = -2 * mt + 3 * Dt,
          Ht = mt - 2 * Dt + qt,
          Xt = mt - Dt,
          lt = tt.r * dt + Vt.r * jt + et.r * Ht + Ot.r * Xt,
          Et = tt.g * dt + Vt.g * jt + et.g * Ht + Ot.g * Xt,
          ft = tt.b * dt + Vt.b * jt + et.b * Ht + Ot.b * Xt;
        return new Qt(lt, Et, ft)
      }
      static Hermite1stDerivative(tt, et, Vt, Ot, qt) {
        const Dt = Qt.Black();
        return this.Hermite1stDerivativeToRef(tt, et, Vt, Ot, qt, Dt), Dt
      }
      static Hermite1stDerivativeToRef(tt, et, Vt, Ot, qt, Dt) {
        const mt = qt * qt;
        Dt.r = 6 * (mt - qt) * tt.r + (3 * mt - 4 * qt + 1) * et.r + 6 * (-mt + qt) * Vt.r + (3 * mt - 2 * qt) * Ot.r, Dt.g = 6 * (mt - qt) * tt.g + (3 * mt - 4 * qt + 1) * et.g + 6 * (-mt + qt) * Vt.g + (3 * mt - 2 * qt) * Ot.g, Dt.b = 6 * (mt - qt) * tt.b + (3 * mt - 4 * qt + 1) * et.b + 6 * (-mt + qt) * Vt.b + (3 * mt - 2 * qt) * Ot.b
      }
      static Red() {
        return new Qt(1, 0, 0)
      }
      static Green() {
        return new Qt(0, 1, 0)
      }
      static Blue() {
        return new Qt(0, 0, 1)
      }
      static Black() {
        return new Qt(0, 0, 0)
      }
      static get BlackReadOnly() {
        return Qt._BlackReadOnly
      }
      static White() {
        return new Qt(1, 1, 1)
      }
      static Purple() {
        return new Qt(.5, 0, .5)
      }
      static Magenta() {
        return new Qt(1, 0, 1)
      }
      static Yellow() {
        return new Qt(1, 1, 0)
      }
      static Gray() {
        return new Qt(.5, .5, .5)
      }
      static Teal() {
        return new Qt(0, 1, 1)
      }
      static Random() {
        return new Qt(Math.random(), Math.random(), Math.random())
      }
    }
    Qt._V8PerformanceHack = new Qt(.5, .5, .5), Qt._BlackReadOnly = Qt.Black();
    class lt {
      constructor() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = tt, this.g = et, this.b = Vt, this.a = Ot
      }
      GOt() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return tt[et] = this.r, tt[et + 1] = this.g, tt[et + 2] = this.b, tt[et + 3] = this.a, this
      }
      vVt(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = tt[et], this.g = tt[et + 1], this.b = tt[et + 2], this.a = tt[et + 3], this
      }
      equals(tt) {
        return tt && this.r === tt.r && this.g === tt.g && this.b === tt.b && this.a === tt.a
      }
      add(tt) {
        return new lt(this.r + tt.r, this.g + tt.g, this.b + tt.b, this.a + tt.a)
      }
      addToRef(tt, et) {
        return et.r = this.r + tt.r, et.g = this.g + tt.g, et.b = this.b + tt.b, et.a = this.a + tt.a, et
      }
      addInPlace(tt) {
        return this.r += tt.r, this.g += tt.g, this.b += tt.b, this.a += tt.a, this
      }
      addInPlaceFromFloats(tt, et, Vt, Ot) {
        return this.r += tt, this.g += et, this.b += Vt, this.a += Ot, this
      }
      subtract(tt) {
        return new lt(this.r - tt.r, this.g - tt.g, this.b - tt.b, this.a - tt.a)
      }
      subtractToRef(tt, et) {
        return et.r = this.r - tt.r, et.g = this.g - tt.g, et.b = this.b - tt.b, et.a = this.a - tt.a, et
      }
      qqt(tt) {
        return this.r -= tt.r, this.g -= tt.g, this.b -= tt.b, this.a -= tt.a, this
      }
      subtractFromFloats(tt, et, Vt, Ot) {
        return new lt(this.r - tt, this.g - et, this.b - Vt, this.a - Ot)
      }
      subtractFromFloatsToRef(tt, et, Vt, Ot, qt) {
        return qt.r = this.r - tt, qt.g = this.g - et, qt.b = this.b - Vt, qt.a = this.a - Ot, qt
      }
      scale(tt) {
        return new lt(this.r * tt, this.g * tt, this.b * tt, this.a * tt)
      }
      scaleInPlace(tt) {
        return this.r *= tt, this.g *= tt, this.b *= tt, this.a *= tt, this
      }
      scaleToRef(tt, et) {
        return et.r = this.r * tt, et.g = this.g * tt, et.b = this.b * tt, et.a = this.a * tt, et
      }
      scaleAndAddToRef(tt, et) {
        return et.r += this.r * tt, et.g += this.g * tt, et.b += this.b * tt, et.a += this.a * tt, et
      }
      clampToRef() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        return Vt.r = (0, Dt.Clamp)(this.r, tt, et), Vt.g = (0, Dt.Clamp)(this.g, tt, et), Vt.b = (0, Dt.Clamp)(this.b, tt, et), Vt.a = (0, Dt.Clamp)(this.a, tt, et), Vt
      }
      multiply(tt) {
        return new lt(this.r * tt.r, this.g * tt.g, this.b * tt.b, this.a * tt.a)
      }
      multiplyToRef(tt, et) {
        return et.r = this.r * tt.r, et.g = this.g * tt.g, et.b = this.b * tt.b, et.a = this.a * tt.a, et
      }
      multiplyInPlace(tt) {
        return this.r *= tt.r, this.g *= tt.g, this.b *= tt.b, this.a *= tt.a, this
      }
      multiplyByFloats(tt, et, Vt, Ot) {
        return new lt(this.r * tt, this.g * et, this.b * Vt, this.a * Ot)
      }
      divide(tt) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(tt, et) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(tt) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(tt) {
        return this.r = Math.min(this.r, tt.r), this.g = Math.min(this.g, tt.g), this.b = Math.min(this.b, tt.b), this.a = Math.min(this.a, tt.a), this
      }
      maximizeInPlace(tt) {
        return this.r = Math.max(this.r, tt.r), this.g = Math.max(this.g, tt.g), this.b = Math.max(this.b, tt.b), this.a = Math.max(this.a, tt.a), this
      }
      minimizeInPlaceFromFloats(tt, et, Vt, Ot) {
        return this.r = Math.min(tt, this.r), this.g = Math.min(et, this.g), this.b = Math.min(Vt, this.b), this.a = Math.min(Ot, this.a), this
      }
      maximizeInPlaceFromFloats(tt, et, Vt, Ot) {
        return this.r = Math.max(tt, this.r), this.g = Math.max(et, this.g), this.b = Math.max(Vt, this.b), this.a = Math.max(Ot, this.a), this
      }
      floorToRef(tt) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(tt) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      gq() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(tt) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qt.e;
        return (0, Dt.WithinEpsilon)(this.r, tt.r, et) && (0, Dt.WithinEpsilon)(this.g, tt.g, et) && (0, Dt.WithinEpsilon)(this.b, tt.b, et) && (0, Dt.WithinEpsilon)(this.a, tt.a, et)
      }
      adt(tt, et, Vt, Ot) {
        return this.r === tt && this.g === et && this.b === Vt && this.a === Ot
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let tt = 255 * this.r | 0;
        return tt = 397 * tt ^ 255 * this.g, tt = 397 * tt ^ 255 * this.b, tt = 397 * tt ^ 255 * this.a, tt
      }
      clone() {
        return (new lt).rK(this)
      }
      rK(tt) {
        return this.r = tt.r, this.g = tt.g, this.b = tt.b, this.a = tt.a, this
      }
      W9(tt, et, Vt, Ot) {
        return this.r = tt, this.g = et, this.b = Vt, this.a = Ot, this
      }
      set(tt, et, Vt, Ot) {
        return this.W9(tt, et, Vt, Ot)
      }
      S_(tt) {
        return this.r = this.g = this.b = this.a = tt, this
      }
      toHexString() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const et = Math.round(255 * this.r),
          Vt = Math.round(255 * this.g),
          Ot = Math.round(255 * this.b);
        if (tt) return "#" + (0, Dt.ToHex)(et) + (0, Dt.ToHex)(Vt) + (0, Dt.ToHex)(Ot);
        const qt = Math.round(255 * this.a);
        return "#" + (0, Dt.ToHex)(et) + (0, Dt.ToHex)(Vt) + (0, Dt.ToHex)(Ot) + (0, Dt.ToHex)(qt)
      }
      fromHexString(tt) {
        return "#" !== tt.substring(0, 1) || 9 !== tt.length && 7 !== tt.length || (this.r = parseInt(tt.substring(1, 3), 16) / 255, this.g = parseInt(tt.substring(3, 5), 16) / 255, this.b = parseInt(tt.substring(5, 7), 16) / 255, 9 === tt.length && (this.a = parseInt(tt.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const et = new lt;
        return this.toLinearSpaceToRef(et, tt), et
      }
      toLinearSpaceToRef(tt) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (tt.r = jt(this.r), tt.g = jt(this.g), tt.b = jt(this.b)) : (tt.r = dt(this.r), tt.g = dt(this.g), tt.b = dt(this.b)), tt.a = this.a, this
      }
      toGammaSpace() {
        let tt = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const et = new lt;
        return this.toGammaSpaceToRef(et, tt), et
      }
      toGammaSpaceToRef(tt) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (tt.r = Xt(this.r), tt.g = Xt(this.g), tt.b = Xt(this.b)) : (tt.r = Ht(this.r), tt.g = Ht(this.g), tt.b = Ht(this.b)), tt.a = this.a, this
      }
      static FromHexString(tt) {
        return "#" !== tt.substring(0, 1) || 9 !== tt.length && 7 !== tt.length ? new lt(0, 0, 0, 0) : new lt(0, 0, 0, 1).fromHexString(tt)
      }
      static Lerp(tt, et, Vt) {
        return lt.LerpToRef(tt, et, Vt, new lt)
      }
      static LerpToRef(tt, et, Vt, Ot) {
        return Ot.r = tt.r + (et.r - tt.r) * Vt, Ot.g = tt.g + (et.g - tt.g) * Vt, Ot.b = tt.b + (et.b - tt.b) * Vt, Ot.a = tt.a + (et.a - tt.a) * Vt, Ot
      }
      static Hermite(tt, et, Vt, Ot, qt) {
        const Dt = qt * qt,
          mt = qt * Dt,
          dt = 2 * mt - 3 * Dt + 1,
          jt = -2 * mt + 3 * Dt,
          Ht = mt - 2 * Dt + qt,
          Xt = mt - Dt,
          Qt = tt.r * dt + Vt.r * jt + et.r * Ht + Ot.r * Xt,
          Et = tt.g * dt + Vt.g * jt + et.g * Ht + Ot.g * Xt,
          ft = tt.b * dt + Vt.b * jt + et.b * Ht + Ot.b * Xt,
          wt = tt.a * dt + Vt.a * jt + et.a * Ht + Ot.a * Xt;
        return new lt(Qt, Et, ft, wt)
      }
      static Hermite1stDerivative(tt, et, Vt, Ot, qt) {
        const Dt = new lt;
        return this.Hermite1stDerivativeToRef(tt, et, Vt, Ot, qt, Dt), Dt
      }
      static Hermite1stDerivativeToRef(tt, et, Vt, Ot, qt, Dt) {
        const mt = qt * qt;
        Dt.r = 6 * (mt - qt) * tt.r + (3 * mt - 4 * qt + 1) * et.r + 6 * (-mt + qt) * Vt.r + (3 * mt - 2 * qt) * Ot.r, Dt.g = 6 * (mt - qt) * tt.g + (3 * mt - 4 * qt + 1) * et.g + 6 * (-mt + qt) * Vt.g + (3 * mt - 2 * qt) * Ot.g, Dt.b = 6 * (mt - qt) * tt.b + (3 * mt - 4 * qt + 1) * et.b + 6 * (-mt + qt) * Vt.b + (3 * mt - 2 * qt) * Ot.b, Dt.a = 6 * (mt - qt) * tt.a + (3 * mt - 4 * qt + 1) * et.a + 6 * (-mt + qt) * Vt.a + (3 * mt - 2 * qt) * Ot.a
      }
      static FromColor3(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new lt(tt.r, tt.g, tt.b, et)
      }
      static FromArray(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new lt(tt[et], tt[et + 1], tt[et + 2], tt[et + 3])
      }
      static FromArrayToRef(tt) {
        let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Vt = arguments.length > 2 ? arguments[2] : void 0;
        Vt.r = tt[et], Vt.g = tt[et + 1], Vt.b = tt[et + 2], Vt.a = tt[et + 3]
      }
      static FromInts(tt, et, Vt, Ot) {
        return new lt(tt / 255, et / 255, Vt / 255, Ot / 255)
      }
      static CheckColors4(tt, et) {
        if (tt.length === 3 * et) {
          const et = [];
          for (let Vt = 0; Vt < tt.length; Vt += 3) {
            const Ot = Vt / 3 * 4;
            et[Ot] = tt[Vt], et[Ot + 1] = tt[Vt + 1], et[Ot + 2] = tt[Vt + 2], et[Ot + 3] = 1
          }
          return et
        }
        return tt
      }
    }
    lt._V8PerformanceHack = new lt(.5, .5, .5, .5);
    class Et {}
    Et.Color3 = (0, Ot.c)(3, Qt.Black), Et.Color4 = (0, Ot.c)(3, (() => new lt(0, 0, 0, 0)));
    let ft = !1;

    function wt() {
      ft || (ft = !0, Object.defineProperties(Qt.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(lt.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, mt.i)("BABYLON.Color3", Qt), (0, mt.i)("BABYLON.Color4", lt))
    }
  },
  37342: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt,
      h: () => Ot,
      i: () => qt
    });
    const Ot = 1 / 2.2,
      qt = 2.2;
    Math.sqrt(5);
    let Dt = .001
  },
  37372: (tt, et, Vt) => {
    function Ot(tt) {
      return parseInt(tt.toString().replace(/\W/g, ""))
    }

    function qt(tt, et) {
      let Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(tt - et) <= Vt
    }

    function Dt(tt, et, Vt) {
      let Ot = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return tt < et - Ot || tt > Vt + Ot
    }

    function mt(tt, et) {
      return tt === et ? tt : Math.random() * (et - tt) + tt
    }

    function dt(tt, et, Vt) {
      return tt + (et - tt) * Vt
    }

    function jt(tt, et, Vt) {
      let Ot = yt(et - tt, 360);
      return Ot > 180 && (Ot -= 360), tt + Ot * lt(Vt)
    }

    function Ht(tt, et, Vt) {
      let Ot;
      return Ot = tt != et ? lt((Vt - tt) / (et - tt)) : 0, Ot
    }

    function Xt(tt, et, Vt, Ot, qt) {
      const Dt = qt * qt,
        mt = qt * Dt;
      return tt * (2 * mt - 3 * Dt + 1) + Vt * (-2 * mt + 3 * Dt) + et * (mt - 2 * Dt + qt) + Ot * (mt - Dt)
    }

    function Qt(tt, et, Vt, Ot, qt) {
      const Dt = qt * qt;
      return 6 * (Dt - qt) * tt + (3 * Dt - 4 * qt + 1) * et + 6 * (-Dt + qt) * Vt + (3 * Dt - 2 * qt) * Ot
    }

    function lt(tt) {
      let et = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Vt = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(Vt, Math.max(et, tt))
    }

    function Et(tt) {
      return tt -= 2 * Math.PI * Math.floor((tt + Math.PI) / (2 * Math.PI))
    }

    function ft(tt) {
      const et = tt.toString(16);
      return tt <= 15 ? ("0" + et).toUpperCase() : et.toUpperCase()
    }

    function wt(tt) {
      if (Math.log2) return Math.floor(Math.log2(tt));
      if (tt < 0) return NaN;
      if (0 === tt) return -1 / 0;
      let et = 0;
      if (tt < 1) {
        for (; tt < 1;) et++, tt *= 2;
        et = -et
      } else if (tt > 1)
        for (; tt > 1;) et++, tt = Math.floor(tt / 2);
      return et
    }

    function yt(tt, et) {
      return tt - Math.floor(tt / et) * et
    }

    function Nt(tt, et, Vt) {
      return (tt - et) / (Vt - et)
    }

    function Mt(tt, et, Vt) {
      return tt * (Vt - et) + et
    }

    function bt(tt, et) {
      let Vt = yt(et - tt, 360);
      return Vt > 180 && (Vt -= 360), Vt
    }

    function Jt(tt, et) {
      const Vt = yt(tt, 2 * et);
      return et - Math.abs(Vt - et)
    }

    function Ct(tt, et, Vt) {
      let Ot = lt(Vt);
      return Ot = -2 * Ot * Ot * Ot + 3 * Ot * Ot, et * Ot + tt * (1 - Ot)
    }

    function ut(tt, et, Vt) {
      let Ot;
      return Ot = Math.abs(et - tt) <= Vt ? et : tt + Math.sign(et - tt) * Vt, Ot
    }

    function Kt(tt, et, Vt) {
      const Ot = bt(tt, et);
      let qt;
      return qt = -Vt < Ot && Ot < Vt ? et : ut(tt, et = tt + Ot, Vt), qt
    }

    function ht(tt, et, Vt) {
      return (tt - et) / (Vt - et)
    }

    function vt(tt, et, Vt) {
      return (Vt - et) * tt + et
    }

    function Wt(tt, et) {
      const Vt = tt % et;
      return 0 === Vt ? et : Wt(et, Vt)
    }
    Vt.r(et), Vt.d(et, {
      Clamp: () => lt,
      DeltaAngle: () => bt,
      Denormalize: () => Mt,
      ExtractAsInt: () => Ot,
      Hermite: () => Xt,
      Hermite1stDerivative: () => Qt,
      HighestCommonFactor: () => Wt,
      ILog2: () => wt,
      InverseLerp: () => Ht,
      Lerp: () => dt,
      LerpAngle: () => jt,
      MoveTowards: () => ut,
      MoveTowardsAngle: () => Kt,
      Normalize: () => Nt,
      NormalizeRadians: () => Et,
      OutsideRange: () => Dt,
      PercentToRange: () => vt,
      PingPong: () => Jt,
      RandomRange: () => mt,
      RangeToPercent: () => ht,
      Repeat: () => yt,
      SmoothStep: () => Ct,
      ToHex: () => ft,
      WithinEpsilon: () => qt
    })
  },
  37350: (tt, et, Vt) => {
    function Ot(tt, et) {
      const Vt = [];
      for (let Ot = 0; Ot < tt; ++Ot) Vt.push(et());
      return Vt
    }

    function qt(tt, et) {
      return Ot(tt, et)
    }
    Vt.d(et, {
      c: () => Ot,
      d: () => qt,
      e: () => mt
    });
    const Dt = ["push", "splice", "pop", "shift", "unshift"];

    function mt(tt, et) {
      const Vt = Dt.map((Vt => function(tt, et, Vt) {
        const Ot = tt[et];
        if ("function" !== typeof Ot) return null;
        const qt = function() {
          const Ot = tt.length,
            Dt = qt.previous.apply(tt, arguments);
          return Vt(et, Ot), Dt
        };
        return Ot.next = qt, qt.previous = Ot, tt[et] = qt, () => {
          const Vt = qt.previous;
          if (!Vt) return;
          const Ot = qt.next;
          Ot ? (Vt.next = Ot, Ot.previous = Vt) : (Vt.next = void 0, tt[et] = Vt), qt.next = void 0, qt.previous = void 0
        }
      }(tt, Vt, et)));
      return () => {
        for (const tt of Vt) tt?.()
      }
    }
  },
  37390: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Dt,
      i: () => qt
    });
    const Ot = {};

    function qt(tt, et) {
      Ot[tt] = et
    }

    function Dt(tt) {
      return Ot[tt]
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);