export const id = 212;
export const ids = [212];
export const modules = {
  35815: (cB, Bc, nc) => {
    nc.d(Bc, {
      e: () => Oc,
      g: () => Tc,
      i: () => ec,
      m: () => fc
    });
    var Vc = nc(35768),
      Ic = nc(35759),
      rB = nc(35785),
      uc = nc(35799);

    function sc(cB) {
      return Math.pow(cB, Ic.k)
    }

    function Mc(cB) {
      return cB <= .04045 ? .0773993808 * cB : Math.pow(.947867299 * (cB + .055), 2.4)
    }

    function Pc(cB) {
      return Math.pow(cB, Ic.g)
    }

    function qB(cB) {
      return cB <= .0031308 ? 12.92 * cB : 1.055 * Math.pow(cB, .41666) - .055
    }
    class Oc {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = cB, this.g = Bc, this.b = nc
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let cB = 255 * this.r | 0;
        return cB = 397 * cB ^ 255 * this.g, cB = 397 * cB ^ 255 * this.b, cB
      }
      toArray(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return cB[Bc] = this.r, cB[Bc + 1] = this.g, cB[Bc + 2] = this.b, this
      }
      QMc(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Oc.FromArrayToRef(cB, Bc, this), this
      }
      toColor4() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new Tc(this.r, this.g, this.b, cB)
      }
      KPc() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(cB) {
        return new Oc(this.r * cB.r, this.g * cB.g, this.b * cB.b)
      }
      multiplyToRef(cB, Bc) {
        return Bc.r = this.r * cB.r, Bc.g = this.g * cB.g, Bc.b = this.b * cB.b, Bc
      }
      multiplyInPlace(cB) {
        return this.r *= cB.r, this.g *= cB.g, this.b *= cB.b, this
      }
      multiplyByFloats(cB, Bc, nc) {
        return new Oc(this.r * cB, this.g * Bc, this.b * nc)
      }
      divide(cB) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(cB, Bc) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(cB) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(cB) {
        return this.minimizeInPlaceFromFloats(cB.r, cB.g, cB.b)
      }
      maximizeInPlace(cB) {
        return this.maximizeInPlaceFromFloats(cB.r, cB.g, cB.b)
      }
      minimizeInPlaceFromFloats(cB, Bc, nc) {
        return this.r = Math.min(cB, this.r), this.g = Math.min(Bc, this.g), this.b = Math.min(nc, this.b), this
      }
      maximizeInPlaceFromFloats(cB, Bc, nc) {
        return this.r = Math.max(cB, this.r), this.g = Math.max(Bc, this.g), this.b = Math.max(nc, this.b), this
      }
      floorToRef(cB) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(cB) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(cB) {
        return cB && this.r === cB.r && this.g === cB.g && this.b === cB.b
      }
      equalsFloats(cB, Bc, nc) {
        return this.efc(cB, Bc, nc)
      }
      efc(cB, Bc, nc) {
        return this.r === cB && this.g === Bc && this.b === nc
      }
      equalsWithEpsilon(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ic.c;
        return (0, rB.WithinEpsilon)(this.r, cB.r, Bc) && (0, rB.WithinEpsilon)(this.g, cB.g, Bc) && (0, rB.WithinEpsilon)(this.b, cB.b, Bc)
      }
      Ou() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(cB) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(cB) {
        return new Oc(this.r * cB, this.g * cB, this.b * cB)
      }
      scaleInPlace(cB) {
        return this.r *= cB, this.g *= cB, this.b *= cB, this
      }
      scaleToRef(cB, Bc) {
        return Bc.r = this.r * cB, Bc.g = this.g * cB, Bc.b = this.b * cB, Bc
      }
      scaleAndAddToRef(cB, Bc) {
        return Bc.r += this.r * cB, Bc.g += this.g * cB, Bc.b += this.b * cB, Bc
      }
      clampToRef() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        return nc.r = (0, rB.Clamp)(this.r, cB, Bc), nc.g = (0, rB.Clamp)(this.g, cB, Bc), nc.b = (0, rB.Clamp)(this.b, cB, Bc), nc
      }
      add(cB) {
        return new Oc(this.r + cB.r, this.g + cB.g, this.b + cB.b)
      }
      addInPlace(cB) {
        return this.r += cB.r, this.g += cB.g, this.b += cB.b, this
      }
      addInPlaceFromFloats(cB, Bc, nc) {
        return this.r += cB, this.g += Bc, this.b += nc, this
      }
      addToRef(cB, Bc) {
        return Bc.r = this.r + cB.r, Bc.g = this.g + cB.g, Bc.b = this.b + cB.b, Bc
      }
      subtract(cB) {
        return new Oc(this.r - cB.r, this.g - cB.g, this.b - cB.b)
      }
      subtractToRef(cB, Bc) {
        return Bc.r = this.r - cB.r, Bc.g = this.g - cB.g, Bc.b = this.b - cB.b, Bc
      }
      Tqc(cB) {
        return this.r -= cB.r, this.g -= cB.g, this.b -= cB.b, this
      }
      subtractFromFloats(cB, Bc, nc) {
        return new Oc(this.r - cB, this.g - Bc, this.b - nc)
      }
      subtractFromFloatsToRef(cB, Bc, nc, Vc) {
        return Vc.r = this.r - cB, Vc.g = this.g - Bc, Vc.b = this.b - nc, Vc
      }
      clone() {
        return new Oc(this.r, this.g, this.b)
      }
      qqc(cB) {
        return this.r = cB.r, this.g = cB.g, this.b = cB.b, this
      }
      puc(cB, Bc, nc) {
        return this.r = cB, this.g = Bc, this.b = nc, this
      }
      set(cB, Bc, nc) {
        return this.puc(cB, Bc, nc)
      }
      orc(cB) {
        return this.r = this.g = this.b = cB, this
      }
      toHexString() {
        const cB = Math.round(255 * this.r),
          Bc = Math.round(255 * this.g),
          nc = Math.round(255 * this.b);
        return "#" + (0, rB.ToHex)(cB) + (0, rB.ToHex)(Bc) + (0, rB.ToHex)(nc)
      }
      fromHexString(cB) {
        return "#" !== cB.substring(0, 1) || 7 !== cB.length || (this.r = parseInt(cB.substring(1, 3), 16) / 255, this.g = parseInt(cB.substring(3, 5), 16) / 255, this.b = parseInt(cB.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new Oc)
      }
      toHSVToRef(cB) {
        const Bc = this.r,
          nc = this.g,
          Vc = this.b,
          Ic = Math.max(Bc, nc, Vc),
          rB = Math.min(Bc, nc, Vc);
        let uc = 0,
          sc = 0;
        const Mc = Ic,
          Pc = Ic - rB;
        return 0 !== Ic && (sc = Pc / Ic), Ic != rB && (Ic == Bc ? (uc = (nc - Vc) / Pc, nc < Vc && (uc += 6)) : Ic == nc ? uc = (Vc - Bc) / Pc + 2 : Ic == Vc && (uc = (Bc - nc) / Pc + 4), uc *= 60), cB.r = uc, cB.g = sc, cB.b = Mc, cB
      }
      toLinearSpace() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Bc = new Oc;
        return this.toLinearSpaceToRef(Bc, cB), Bc
      }
      toLinearSpaceToRef(cB) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (cB.r = Mc(this.r), cB.g = Mc(this.g), cB.b = Mc(this.b)) : (cB.r = sc(this.r), cB.g = sc(this.g), cB.b = sc(this.b)), this
      }
      toGammaSpace() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Bc = new Oc;
        return this.toGammaSpaceToRef(Bc, cB), Bc
      }
      toGammaSpaceToRef(cB) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (cB.r = qB(this.r), cB.g = qB(this.g), cB.b = qB(this.b)) : (cB.r = Pc(this.r), cB.g = Pc(this.g), cB.b = Pc(this.b)), this
      }
      static HSVtoRGBToRef(cB, Bc, nc, Vc) {
        const Ic = nc * Bc,
          rB = cB / 60,
          uc = Ic * (1 - Math.abs(rB % 2 - 1));
        let sc = 0,
          Mc = 0,
          Pc = 0;
        rB >= 0 && rB <= 1 ? (sc = Ic, Mc = uc) : rB >= 1 && rB <= 2 ? (sc = uc, Mc = Ic) : rB >= 2 && rB <= 3 ? (Mc = Ic, Pc = uc) : rB >= 3 && rB <= 4 ? (Mc = uc, Pc = Ic) : rB >= 4 && rB <= 5 ? (sc = uc, Pc = Ic) : rB >= 5 && rB <= 6 && (sc = Ic, Pc = uc);
        const qB = nc - Ic;
        return Vc.r = sc + qB, Vc.g = Mc + qB, Vc.b = Pc + qB, Vc
      }
      static FromHSV(cB, Bc, nc) {
        const Vc = new Oc(0, 0, 0);
        return Oc.HSVtoRGBToRef(cB, Bc, nc, Vc), Vc
      }
      static FromHexString(cB) {
        return new Oc(0, 0, 0).fromHexString(cB)
      }
      static FromArray(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Oc(cB[Bc], cB[Bc + 1], cB[Bc + 2])
      }
      static FromArrayToRef(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        nc.r = cB[Bc], nc.g = cB[Bc + 1], nc.b = cB[Bc + 2]
      }
      static FromInts(cB, Bc, nc) {
        return new Oc(cB / 255, Bc / 255, nc / 255)
      }
      static Lerp(cB, Bc, nc) {
        const Vc = new Oc(0, 0, 0);
        return Oc.LerpToRef(cB, Bc, nc, Vc), Vc
      }
      static LerpToRef(cB, Bc, nc, Vc) {
        Vc.r = cB.r + (Bc.r - cB.r) * nc, Vc.g = cB.g + (Bc.g - cB.g) * nc, Vc.b = cB.b + (Bc.b - cB.b) * nc
      }
      static Hermite(cB, Bc, nc, Vc, Ic) {
        const rB = Ic * Ic,
          uc = Ic * rB,
          sc = 2 * uc - 3 * rB + 1,
          Mc = -2 * uc + 3 * rB,
          Pc = uc - 2 * rB + Ic,
          qB = uc - rB,
          Tc = cB.r * sc + nc.r * Mc + Bc.r * Pc + Vc.r * qB,
          fc = cB.g * sc + nc.g * Mc + Bc.g * Pc + Vc.g * qB,
          mB = cB.b * sc + nc.b * Mc + Bc.b * Pc + Vc.b * qB;
        return new Oc(Tc, fc, mB)
      }
      static Hermite1stDerivative(cB, Bc, nc, Vc, Ic) {
        const rB = Oc.Black();
        return this.Hermite1stDerivativeToRef(cB, Bc, nc, Vc, Ic, rB), rB
      }
      static Hermite1stDerivativeToRef(cB, Bc, nc, Vc, Ic, rB) {
        const uc = Ic * Ic;
        rB.r = 6 * (uc - Ic) * cB.r + (3 * uc - 4 * Ic + 1) * Bc.r + 6 * (-uc + Ic) * nc.r + (3 * uc - 2 * Ic) * Vc.r, rB.g = 6 * (uc - Ic) * cB.g + (3 * uc - 4 * Ic + 1) * Bc.g + 6 * (-uc + Ic) * nc.g + (3 * uc - 2 * Ic) * Vc.g, rB.b = 6 * (uc - Ic) * cB.b + (3 * uc - 4 * Ic + 1) * Bc.b + 6 * (-uc + Ic) * nc.b + (3 * uc - 2 * Ic) * Vc.b
      }
      static Red() {
        return new Oc(1, 0, 0)
      }
      static Green() {
        return new Oc(0, 1, 0)
      }
      static Blue() {
        return new Oc(0, 0, 1)
      }
      static Black() {
        return new Oc(0, 0, 0)
      }
      static get BlackReadOnly() {
        return Oc._BlackReadOnly
      }
      static White() {
        return new Oc(1, 1, 1)
      }
      static Purple() {
        return new Oc(.5, 0, .5)
      }
      static Magenta() {
        return new Oc(1, 0, 1)
      }
      static Yellow() {
        return new Oc(1, 1, 0)
      }
      static Gray() {
        return new Oc(.5, .5, .5)
      }
      static Teal() {
        return new Oc(0, 1, 1)
      }
      static Random() {
        return new Oc(Math.random(), Math.random(), Math.random())
      }
    }
    Oc._V8PerformanceHack = new Oc(.5, .5, .5), Oc._BlackReadOnly = Oc.Black();
    class Tc {
      constructor() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = cB, this.g = Bc, this.b = nc, this.a = Vc
      }
      KPc() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return cB[Bc] = this.r, cB[Bc + 1] = this.g, cB[Bc + 2] = this.b, cB[Bc + 3] = this.a, this
      }
      QMc(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = cB[Bc], this.g = cB[Bc + 1], this.b = cB[Bc + 2], this.a = cB[Bc + 3], this
      }
      equals(cB) {
        return cB && this.r === cB.r && this.g === cB.g && this.b === cB.b && this.a === cB.a
      }
      add(cB) {
        return new Tc(this.r + cB.r, this.g + cB.g, this.b + cB.b, this.a + cB.a)
      }
      addToRef(cB, Bc) {
        return Bc.r = this.r + cB.r, Bc.g = this.g + cB.g, Bc.b = this.b + cB.b, Bc.a = this.a + cB.a, Bc
      }
      addInPlace(cB) {
        return this.r += cB.r, this.g += cB.g, this.b += cB.b, this.a += cB.a, this
      }
      addInPlaceFromFloats(cB, Bc, nc, Vc) {
        return this.r += cB, this.g += Bc, this.b += nc, this.a += Vc, this
      }
      subtract(cB) {
        return new Tc(this.r - cB.r, this.g - cB.g, this.b - cB.b, this.a - cB.a)
      }
      subtractToRef(cB, Bc) {
        return Bc.r = this.r - cB.r, Bc.g = this.g - cB.g, Bc.b = this.b - cB.b, Bc.a = this.a - cB.a, Bc
      }
      Tqc(cB) {
        return this.r -= cB.r, this.g -= cB.g, this.b -= cB.b, this.a -= cB.a, this
      }
      subtractFromFloats(cB, Bc, nc, Vc) {
        return new Tc(this.r - cB, this.g - Bc, this.b - nc, this.a - Vc)
      }
      subtractFromFloatsToRef(cB, Bc, nc, Vc, Ic) {
        return Ic.r = this.r - cB, Ic.g = this.g - Bc, Ic.b = this.b - nc, Ic.a = this.a - Vc, Ic
      }
      scale(cB) {
        return new Tc(this.r * cB, this.g * cB, this.b * cB, this.a * cB)
      }
      scaleInPlace(cB) {
        return this.r *= cB, this.g *= cB, this.b *= cB, this.a *= cB, this
      }
      scaleToRef(cB, Bc) {
        return Bc.r = this.r * cB, Bc.g = this.g * cB, Bc.b = this.b * cB, Bc.a = this.a * cB, Bc
      }
      scaleAndAddToRef(cB, Bc) {
        return Bc.r += this.r * cB, Bc.g += this.g * cB, Bc.b += this.b * cB, Bc.a += this.a * cB, Bc
      }
      clampToRef() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        return nc.r = (0, rB.Clamp)(this.r, cB, Bc), nc.g = (0, rB.Clamp)(this.g, cB, Bc), nc.b = (0, rB.Clamp)(this.b, cB, Bc), nc.a = (0, rB.Clamp)(this.a, cB, Bc), nc
      }
      multiply(cB) {
        return new Tc(this.r * cB.r, this.g * cB.g, this.b * cB.b, this.a * cB.a)
      }
      multiplyToRef(cB, Bc) {
        return Bc.r = this.r * cB.r, Bc.g = this.g * cB.g, Bc.b = this.b * cB.b, Bc.a = this.a * cB.a, Bc
      }
      multiplyInPlace(cB) {
        return this.r *= cB.r, this.g *= cB.g, this.b *= cB.b, this.a *= cB.a, this
      }
      multiplyByFloats(cB, Bc, nc, Vc) {
        return new Tc(this.r * cB, this.g * Bc, this.b * nc, this.a * Vc)
      }
      divide(cB) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(cB, Bc) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(cB) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(cB) {
        return this.r = Math.min(this.r, cB.r), this.g = Math.min(this.g, cB.g), this.b = Math.min(this.b, cB.b), this.a = Math.min(this.a, cB.a), this
      }
      maximizeInPlace(cB) {
        return this.r = Math.max(this.r, cB.r), this.g = Math.max(this.g, cB.g), this.b = Math.max(this.b, cB.b), this.a = Math.max(this.a, cB.a), this
      }
      minimizeInPlaceFromFloats(cB, Bc, nc, Vc) {
        return this.r = Math.min(cB, this.r), this.g = Math.min(Bc, this.g), this.b = Math.min(nc, this.b), this.a = Math.min(Vc, this.a), this
      }
      maximizeInPlaceFromFloats(cB, Bc, nc, Vc) {
        return this.r = Math.max(cB, this.r), this.g = Math.max(Bc, this.g), this.b = Math.max(nc, this.b), this.a = Math.max(Vc, this.a), this
      }
      floorToRef(cB) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(cB) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      Ou() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(cB) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ic.c;
        return (0, rB.WithinEpsilon)(this.r, cB.r, Bc) && (0, rB.WithinEpsilon)(this.g, cB.g, Bc) && (0, rB.WithinEpsilon)(this.b, cB.b, Bc) && (0, rB.WithinEpsilon)(this.a, cB.a, Bc)
      }
      efc(cB, Bc, nc, Vc) {
        return this.r === cB && this.g === Bc && this.b === nc && this.a === Vc
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let cB = 255 * this.r | 0;
        return cB = 397 * cB ^ 255 * this.g, cB = 397 * cB ^ 255 * this.b, cB = 397 * cB ^ 255 * this.a, cB
      }
      clone() {
        return (new Tc).qqc(this)
      }
      qqc(cB) {
        return this.r = cB.r, this.g = cB.g, this.b = cB.b, this.a = cB.a, this
      }
      puc(cB, Bc, nc, Vc) {
        return this.r = cB, this.g = Bc, this.b = nc, this.a = Vc, this
      }
      set(cB, Bc, nc, Vc) {
        return this.puc(cB, Bc, nc, Vc)
      }
      orc(cB) {
        return this.r = this.g = this.b = this.a = cB, this
      }
      toHexString() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Bc = Math.round(255 * this.r),
          nc = Math.round(255 * this.g),
          Vc = Math.round(255 * this.b);
        if (cB) return "#" + (0, rB.ToHex)(Bc) + (0, rB.ToHex)(nc) + (0, rB.ToHex)(Vc);
        const Ic = Math.round(255 * this.a);
        return "#" + (0, rB.ToHex)(Bc) + (0, rB.ToHex)(nc) + (0, rB.ToHex)(Vc) + (0, rB.ToHex)(Ic)
      }
      fromHexString(cB) {
        return "#" !== cB.substring(0, 1) || 9 !== cB.length && 7 !== cB.length || (this.r = parseInt(cB.substring(1, 3), 16) / 255, this.g = parseInt(cB.substring(3, 5), 16) / 255, this.b = parseInt(cB.substring(5, 7), 16) / 255, 9 === cB.length && (this.a = parseInt(cB.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Bc = new Tc;
        return this.toLinearSpaceToRef(Bc, cB), Bc
      }
      toLinearSpaceToRef(cB) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (cB.r = Mc(this.r), cB.g = Mc(this.g), cB.b = Mc(this.b)) : (cB.r = sc(this.r), cB.g = sc(this.g), cB.b = sc(this.b)), cB.a = this.a, this
      }
      toGammaSpace() {
        let cB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Bc = new Tc;
        return this.toGammaSpaceToRef(Bc, cB), Bc
      }
      toGammaSpaceToRef(cB) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (cB.r = qB(this.r), cB.g = qB(this.g), cB.b = qB(this.b)) : (cB.r = Pc(this.r), cB.g = Pc(this.g), cB.b = Pc(this.b)), cB.a = this.a, this
      }
      static FromHexString(cB) {
        return "#" !== cB.substring(0, 1) || 9 !== cB.length && 7 !== cB.length ? new Tc(0, 0, 0, 0) : new Tc(0, 0, 0, 1).fromHexString(cB)
      }
      static Lerp(cB, Bc, nc) {
        return Tc.LerpToRef(cB, Bc, nc, new Tc)
      }
      static LerpToRef(cB, Bc, nc, Vc) {
        return Vc.r = cB.r + (Bc.r - cB.r) * nc, Vc.g = cB.g + (Bc.g - cB.g) * nc, Vc.b = cB.b + (Bc.b - cB.b) * nc, Vc.a = cB.a + (Bc.a - cB.a) * nc, Vc
      }
      static Hermite(cB, Bc, nc, Vc, Ic) {
        const rB = Ic * Ic,
          uc = Ic * rB,
          sc = 2 * uc - 3 * rB + 1,
          Mc = -2 * uc + 3 * rB,
          Pc = uc - 2 * rB + Ic,
          qB = uc - rB,
          Oc = cB.r * sc + nc.r * Mc + Bc.r * Pc + Vc.r * qB,
          fc = cB.g * sc + nc.g * Mc + Bc.g * Pc + Vc.g * qB,
          mB = cB.b * sc + nc.b * Mc + Bc.b * Pc + Vc.b * qB,
          ec = cB.a * sc + nc.a * Mc + Bc.a * Pc + Vc.a * qB;
        return new Tc(Oc, fc, mB, ec)
      }
      static Hermite1stDerivative(cB, Bc, nc, Vc, Ic) {
        const rB = new Tc;
        return this.Hermite1stDerivativeToRef(cB, Bc, nc, Vc, Ic, rB), rB
      }
      static Hermite1stDerivativeToRef(cB, Bc, nc, Vc, Ic, rB) {
        const uc = Ic * Ic;
        rB.r = 6 * (uc - Ic) * cB.r + (3 * uc - 4 * Ic + 1) * Bc.r + 6 * (-uc + Ic) * nc.r + (3 * uc - 2 * Ic) * Vc.r, rB.g = 6 * (uc - Ic) * cB.g + (3 * uc - 4 * Ic + 1) * Bc.g + 6 * (-uc + Ic) * nc.g + (3 * uc - 2 * Ic) * Vc.g, rB.b = 6 * (uc - Ic) * cB.b + (3 * uc - 4 * Ic + 1) * Bc.b + 6 * (-uc + Ic) * nc.b + (3 * uc - 2 * Ic) * Vc.b, rB.a = 6 * (uc - Ic) * cB.a + (3 * uc - 4 * Ic + 1) * Bc.a + 6 * (-uc + Ic) * nc.a + (3 * uc - 2 * Ic) * Vc.a
      }
      static FromColor3(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Tc(cB.r, cB.g, cB.b, Bc)
      }
      static FromArray(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Tc(cB[Bc], cB[Bc + 1], cB[Bc + 2], cB[Bc + 3])
      }
      static FromArrayToRef(cB) {
        let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          nc = arguments.length > 2 ? arguments[2] : void 0;
        nc.r = cB[Bc], nc.g = cB[Bc + 1], nc.b = cB[Bc + 2], nc.a = cB[Bc + 3]
      }
      static FromInts(cB, Bc, nc, Vc) {
        return new Tc(cB / 255, Bc / 255, nc / 255, Vc / 255)
      }
      static CheckColors4(cB, Bc) {
        if (cB.length === 3 * Bc) {
          const Bc = [];
          for (let nc = 0; nc < cB.length; nc += 3) {
            const Vc = nc / 3 * 4;
            Bc[Vc] = cB[nc], Bc[Vc + 1] = cB[nc + 1], Bc[Vc + 2] = cB[nc + 2], Bc[Vc + 3] = 1
          }
          return Bc
        }
        return cB
      }
    }
    Tc._V8PerformanceHack = new Tc(.5, .5, .5, .5);
    class fc {}
    fc.Color3 = (0, Vc.c)(3, Oc.Black), fc.Color4 = (0, Vc.c)(3, (() => new Tc(0, 0, 0, 0)));
    let mB = !1;

    function ec() {
      mB || (mB = !0, Object.defineProperties(Oc.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Tc.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, uc.d)("BABYLON.Color3", Oc), (0, uc.d)("BABYLON.Color4", Tc))
    }
  },
  35759: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => rB,
      g: () => Vc,
      k: () => Ic
    });
    const Vc = 1 / 2.2,
      Ic = 2.2;
    Math.sqrt(5);
    let rB = .001
  },
  35785: (cB, Bc, nc) => {
    function Vc(cB) {
      return parseInt(cB.toString().replace(/\W/g, ""))
    }

    function Ic(cB, Bc) {
      let nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(cB - Bc) <= nc
    }

    function rB(cB, Bc, nc) {
      let Vc = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return cB < Bc - Vc || cB > nc + Vc
    }

    function uc(cB, Bc) {
      return cB === Bc ? cB : Math.random() * (Bc - cB) + cB
    }

    function sc(cB, Bc, nc) {
      return cB + (Bc - cB) * nc
    }

    function Mc(cB, Bc, nc) {
      let Vc = tB(Bc - cB, 360);
      return Vc > 180 && (Vc -= 360), cB + Vc * Tc(nc)
    }

    function Pc(cB, Bc, nc) {
      let Vc;
      return Vc = cB != Bc ? Tc((nc - cB) / (Bc - cB)) : 0, Vc
    }

    function qB(cB, Bc, nc, Vc, Ic) {
      const rB = Ic * Ic,
        uc = Ic * rB;
      return cB * (2 * uc - 3 * rB + 1) + nc * (-2 * uc + 3 * rB) + Bc * (uc - 2 * rB + Ic) + Vc * (uc - rB)
    }

    function Oc(cB, Bc, nc, Vc, Ic) {
      const rB = Ic * Ic;
      return 6 * (rB - Ic) * cB + (3 * rB - 4 * Ic + 1) * Bc + 6 * (-rB + Ic) * nc + (3 * rB - 2 * Ic) * Vc
    }

    function Tc(cB) {
      let Bc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        nc = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(nc, Math.max(Bc, cB))
    }

    function fc(cB) {
      return cB -= 2 * Math.PI * Math.floor((cB + Math.PI) / (2 * Math.PI))
    }

    function mB(cB) {
      const Bc = cB.toString(16);
      return cB <= 15 ? ("0" + Bc).toUpperCase() : Bc.toUpperCase()
    }

    function ec(cB) {
      if (Math.log2) return Math.floor(Math.log2(cB));
      if (cB < 0) return NaN;
      if (0 === cB) return -1 / 0;
      let Bc = 0;
      if (cB < 1) {
        for (; cB < 1;) Bc++, cB *= 2;
        Bc = -Bc
      } else if (cB > 1)
        for (; cB > 1;) Bc++, cB = Math.floor(cB / 2);
      return Bc
    }

    function tB(cB, Bc) {
      return cB - Math.floor(cB / Bc) * Bc
    }

    function Sc(cB, Bc, nc) {
      return (cB - Bc) / (nc - Bc)
    }

    function yB(cB, Bc, nc) {
      return cB * (nc - Bc) + Bc
    }

    function zB(cB, Bc) {
      let nc = tB(Bc - cB, 360);
      return nc > 180 && (nc -= 360), nc
    }

    function pc(cB, Bc) {
      const nc = tB(cB, 2 * Bc);
      return Bc - Math.abs(nc - Bc)
    }

    function hc(cB, Bc, nc) {
      let Vc = Tc(nc);
      return Vc = -2 * Vc * Vc * Vc + 3 * Vc * Vc, Bc * Vc + cB * (1 - Vc)
    }

    function aB(cB, Bc, nc) {
      let Vc;
      return Vc = Math.abs(Bc - cB) <= nc ? Bc : cB + Math.sign(Bc - cB) * nc, Vc
    }

    function lc(cB, Bc, nc) {
      const Vc = zB(cB, Bc);
      let Ic;
      return Ic = -nc < Vc && Vc < nc ? Bc : aB(cB, Bc = cB + Vc, nc), Ic
    }

    function Yc(cB, Bc, nc) {
      return (cB - Bc) / (nc - Bc)
    }

    function Lc(cB, Bc, nc) {
      return (nc - Bc) * cB + Bc
    }

    function gB(cB, Bc) {
      const nc = cB % Bc;
      return 0 === nc ? Bc : gB(Bc, nc)
    }
    nc.r(Bc), nc.d(Bc, {
      Clamp: () => Tc,
      DeltaAngle: () => zB,
      Denormalize: () => yB,
      ExtractAsInt: () => Vc,
      Hermite: () => qB,
      Hermite1stDerivative: () => Oc,
      HighestCommonFactor: () => gB,
      ILog2: () => ec,
      InverseLerp: () => Pc,
      Lerp: () => sc,
      LerpAngle: () => Mc,
      MoveTowards: () => aB,
      MoveTowardsAngle: () => lc,
      Normalize: () => Sc,
      NormalizeRadians: () => fc,
      OutsideRange: () => rB,
      PercentToRange: () => Lc,
      PingPong: () => pc,
      RandomRange: () => uc,
      RangeToPercent: () => Yc,
      Repeat: () => tB,
      SmoothStep: () => hc,
      ToHex: () => mB,
      WithinEpsilon: () => Ic
    })
  },
  35768: (cB, Bc, nc) => {
    function Vc(cB, Bc) {
      const nc = [];
      for (let Vc = 0; Vc < cB; ++Vc) nc.push(Bc());
      return nc
    }

    function Ic(cB, Bc) {
      return Vc(cB, Bc)
    }
    nc.d(Bc, {
      c: () => Vc,
      g: () => Ic,
      i: () => uc
    });
    const rB = ["push", "splice", "pop", "shift", "unshift"];

    function uc(cB, Bc) {
      const nc = rB.map((nc => function(cB, Bc, nc) {
        const Vc = cB[Bc];
        if ("function" !== typeof Vc) return null;
        const Ic = function() {
          const Vc = cB.length,
            rB = Ic.previous.apply(cB, arguments);
          return nc(Bc, Vc), rB
        };
        return Vc.next = Ic, Ic.previous = Vc, cB[Bc] = Ic, () => {
          const nc = Ic.previous;
          if (!nc) return;
          const Vc = Ic.next;
          Vc ? (nc.next = Vc, Vc.previous = nc) : (nc.next = void 0, cB[Bc] = nc), Ic.next = void 0, Ic.previous = void 0
        }
      }(cB, nc, Bc)));
      return () => {
        for (const cB of nc) cB?.()
      }
    }
  },
  35799: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => rB,
      d: () => Ic
    });
    const Vc = {};

    function Ic(cB, Bc) {
      Vc[cB] = Bc
    }

    function rB(cB) {
      return Vc[cB]
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);