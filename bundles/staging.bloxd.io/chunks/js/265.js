export const id = 265;
export const ids = [265];
export const modules = {
  38741: (dd, Od, md) => {
    md.d(Od, {
      d: () => td,
      f: () => od,
      g: () => Hd,
      j: () => Nd
    });
    var Wd = md(38647),
      Fd = md(38644),
      Rd = md(38663),
      Xd = md(38669);

    function Kd(dd) {
      return Math.pow(dd, Fd.f)
    }

    function hd(dd) {
      return dd <= .04045 ? .0773993808 * dd : Math.pow(.947867299 * (dd + .055), 2.4)
    }

    function vd(dd) {
      return Math.pow(dd, Fd.c)
    }

    function Qd(dd) {
      return dd <= .0031308 ? 12.92 * dd : 1.055 * Math.pow(dd, .41666) - .055
    }
    class td {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = dd, this.g = Od, this.b = md
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let dd = 255 * this.r | 0;
        return dd = 397 * dd ^ 255 * this.g, dd = 397 * dd ^ 255 * this.b, dd
      }
      toArray(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return dd[Od] = this.r, dd[Od + 1] = this.g, dd[Od + 2] = this.b, this
      }
      ZQ(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return td.FromArrayToRef(dd, Od, this), this
      }
      toColor4() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new od(this.r, this.g, this.b, dd)
      }
      RRd() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(dd) {
        return new td(this.r * dd.r, this.g * dd.g, this.b * dd.b)
      }
      multiplyToRef(dd, Od) {
        return Od.r = this.r * dd.r, Od.g = this.g * dd.g, Od.b = this.b * dd.b, Od
      }
      multiplyInPlace(dd) {
        return this.r *= dd.r, this.g *= dd.g, this.b *= dd.b, this
      }
      multiplyByFloats(dd, Od, md) {
        return new td(this.r * dd, this.g * Od, this.b * md)
      }
      divide(dd) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(dd, Od) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(dd) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(dd) {
        return this.minimizeInPlaceFromFloats(dd.r, dd.g, dd.b)
      }
      maximizeInPlace(dd) {
        return this.maximizeInPlaceFromFloats(dd.r, dd.g, dd.b)
      }
      minimizeInPlaceFromFloats(dd, Od, md) {
        return this.r = Math.min(dd, this.r), this.g = Math.min(Od, this.g), this.b = Math.min(md, this.b), this
      }
      maximizeInPlaceFromFloats(dd, Od, md) {
        return this.r = Math.max(dd, this.r), this.g = Math.max(Od, this.g), this.b = Math.max(md, this.b), this
      }
      floorToRef(dd) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(dd) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(dd) {
        return dd && this.r === dd.r && this.g === dd.g && this.b === dd.b
      }
      equalsFloats(dd, Od, md) {
        return this.Qhd(dd, Od, md)
      }
      Qhd(dd, Od, md) {
        return this.r === dd && this.g === Od && this.b === md
      }
      equalsWithEpsilon(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fd.b;
        return (0, Rd.WithinEpsilon)(this.r, dd.r, Od) && (0, Rd.WithinEpsilon)(this.g, dd.g, Od) && (0, Rd.WithinEpsilon)(this.b, dd.b, Od)
      }
      ty() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(dd) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(dd) {
        return new td(this.r * dd, this.g * dd, this.b * dd)
      }
      scaleInPlace(dd) {
        return this.r *= dd, this.g *= dd, this.b *= dd, this
      }
      scaleToRef(dd, Od) {
        return Od.r = this.r * dd, Od.g = this.g * dd, Od.b = this.b * dd, Od
      }
      scaleAndAddToRef(dd, Od) {
        return Od.r += this.r * dd, Od.g += this.g * dd, Od.b += this.b * dd, Od
      }
      clampToRef() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          md = arguments.length > 2 ? arguments[2] : void 0;
        return md.r = (0, Rd.Clamp)(this.r, dd, Od), md.g = (0, Rd.Clamp)(this.g, dd, Od), md.b = (0, Rd.Clamp)(this.b, dd, Od), md
      }
      add(dd) {
        return new td(this.r + dd.r, this.g + dd.g, this.b + dd.b)
      }
      addInPlace(dd) {
        return this.r += dd.r, this.g += dd.g, this.b += dd.b, this
      }
      addInPlaceFromFloats(dd, Od, md) {
        return this.r += dd, this.g += Od, this.b += md, this
      }
      addToRef(dd, Od) {
        return Od.r = this.r + dd.r, Od.g = this.g + dd.g, Od.b = this.b + dd.b, Od
      }
      subtract(dd) {
        return new td(this.r - dd.r, this.g - dd.g, this.b - dd.b)
      }
      subtractToRef(dd, Od) {
        return Od.r = this.r - dd.r, Od.g = this.g - dd.g, Od.b = this.b - dd.b, Od
      }
      YRd(dd) {
        return this.r -= dd.r, this.g -= dd.g, this.b -= dd.b, this
      }
      subtractFromFloats(dd, Od, md) {
        return new td(this.r - dd, this.g - Od, this.b - md)
      }
      subtractFromFloatsToRef(dd, Od, md, Wd) {
        return Wd.r = this.r - dd, Wd.g = this.g - Od, Wd.b = this.b - md, Wd
      }
      clone() {
        return new td(this.r, this.g, this.b)
      }
      Bx(dd) {
        return this.r = dd.r, this.g = dd.g, this.b = dd.b, this
      }
      KOd(dd, Od, md) {
        return this.r = dd, this.g = Od, this.b = md, this
      }
      set(dd, Od, md) {
        return this.KOd(dd, Od, md)
      }
      Bdd(dd) {
        return this.r = this.g = this.b = dd, this
      }
      toHexString() {
        const dd = Math.round(255 * this.r),
          Od = Math.round(255 * this.g),
          md = Math.round(255 * this.b);
        return "#" + (0, Rd.ToHex)(dd) + (0, Rd.ToHex)(Od) + (0, Rd.ToHex)(md)
      }
      fromHexString(dd) {
        return "#" !== dd.substring(0, 1) || 7 !== dd.length || (this.r = parseInt(dd.substring(1, 3), 16) / 255, this.g = parseInt(dd.substring(3, 5), 16) / 255, this.b = parseInt(dd.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new td)
      }
      toHSVToRef(dd) {
        const Od = this.r,
          md = this.g,
          Wd = this.b,
          Fd = Math.max(Od, md, Wd),
          Rd = Math.min(Od, md, Wd);
        let Xd = 0,
          Kd = 0;
        const hd = Fd,
          vd = Fd - Rd;
        return 0 !== Fd && (Kd = vd / Fd), Fd != Rd && (Fd == Od ? (Xd = (md - Wd) / vd, md < Wd && (Xd += 6)) : Fd == md ? Xd = (Wd - Od) / vd + 2 : Fd == Wd && (Xd = (Od - md) / vd + 4), Xd *= 60), dd.r = Xd, dd.g = Kd, dd.b = hd, dd
      }
      toLinearSpace() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Od = new td;
        return this.toLinearSpaceToRef(Od, dd), Od
      }
      toLinearSpaceToRef(dd) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (dd.r = hd(this.r), dd.g = hd(this.g), dd.b = hd(this.b)) : (dd.r = Kd(this.r), dd.g = Kd(this.g), dd.b = Kd(this.b)), this
      }
      toGammaSpace() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Od = new td;
        return this.toGammaSpaceToRef(Od, dd), Od
      }
      toGammaSpaceToRef(dd) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (dd.r = Qd(this.r), dd.g = Qd(this.g), dd.b = Qd(this.b)) : (dd.r = vd(this.r), dd.g = vd(this.g), dd.b = vd(this.b)), this
      }
      static HSVtoRGBToRef(dd, Od, md, Wd) {
        const Fd = md * Od,
          Rd = dd / 60,
          Xd = Fd * (1 - Math.abs(Rd % 2 - 1));
        let Kd = 0,
          hd = 0,
          vd = 0;
        Rd >= 0 && Rd <= 1 ? (Kd = Fd, hd = Xd) : Rd >= 1 && Rd <= 2 ? (Kd = Xd, hd = Fd) : Rd >= 2 && Rd <= 3 ? (hd = Fd, vd = Xd) : Rd >= 3 && Rd <= 4 ? (hd = Xd, vd = Fd) : Rd >= 4 && Rd <= 5 ? (Kd = Xd, vd = Fd) : Rd >= 5 && Rd <= 6 && (Kd = Fd, vd = Xd);
        const Qd = md - Fd;
        return Wd.r = Kd + Qd, Wd.g = hd + Qd, Wd.b = vd + Qd, Wd
      }
      static FromHSV(dd, Od, md) {
        const Wd = new td(0, 0, 0);
        return td.HSVtoRGBToRef(dd, Od, md, Wd), Wd
      }
      static FromHexString(dd) {
        return new td(0, 0, 0).fromHexString(dd)
      }
      static FromArray(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new td(dd[Od], dd[Od + 1], dd[Od + 2])
      }
      static FromArrayToRef(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 ? arguments[2] : void 0;
        md.r = dd[Od], md.g = dd[Od + 1], md.b = dd[Od + 2]
      }
      static FromInts(dd, Od, md) {
        return new td(dd / 255, Od / 255, md / 255)
      }
      static Lerp(dd, Od, md) {
        const Wd = new td(0, 0, 0);
        return td.LerpToRef(dd, Od, md, Wd), Wd
      }
      static LerpToRef(dd, Od, md, Wd) {
        Wd.r = dd.r + (Od.r - dd.r) * md, Wd.g = dd.g + (Od.g - dd.g) * md, Wd.b = dd.b + (Od.b - dd.b) * md
      }
      static Hermite(dd, Od, md, Wd, Fd) {
        const Rd = Fd * Fd,
          Xd = Fd * Rd,
          Kd = 2 * Xd - 3 * Rd + 1,
          hd = -2 * Xd + 3 * Rd,
          vd = Xd - 2 * Rd + Fd,
          Qd = Xd - Rd,
          od = dd.r * Kd + md.r * hd + Od.r * vd + Wd.r * Qd,
          Nd = dd.g * Kd + md.g * hd + Od.g * vd + Wd.g * Qd,
          qd = dd.b * Kd + md.b * hd + Od.b * vd + Wd.b * Qd;
        return new td(od, Nd, qd)
      }
      static Hermite1stDerivative(dd, Od, md, Wd, Fd) {
        const Rd = td.Black();
        return this.Hermite1stDerivativeToRef(dd, Od, md, Wd, Fd, Rd), Rd
      }
      static Hermite1stDerivativeToRef(dd, Od, md, Wd, Fd, Rd) {
        const Xd = Fd * Fd;
        Rd.r = 6 * (Xd - Fd) * dd.r + (3 * Xd - 4 * Fd + 1) * Od.r + 6 * (-Xd + Fd) * md.r + (3 * Xd - 2 * Fd) * Wd.r, Rd.g = 6 * (Xd - Fd) * dd.g + (3 * Xd - 4 * Fd + 1) * Od.g + 6 * (-Xd + Fd) * md.g + (3 * Xd - 2 * Fd) * Wd.g, Rd.b = 6 * (Xd - Fd) * dd.b + (3 * Xd - 4 * Fd + 1) * Od.b + 6 * (-Xd + Fd) * md.b + (3 * Xd - 2 * Fd) * Wd.b
      }
      static Red() {
        return new td(1, 0, 0)
      }
      static Green() {
        return new td(0, 1, 0)
      }
      static Blue() {
        return new td(0, 0, 1)
      }
      static Black() {
        return new td(0, 0, 0)
      }
      static get BlackReadOnly() {
        return td._BlackReadOnly
      }
      static White() {
        return new td(1, 1, 1)
      }
      static Purple() {
        return new td(.5, 0, .5)
      }
      static Magenta() {
        return new td(1, 0, 1)
      }
      static Yellow() {
        return new td(1, 1, 0)
      }
      static Gray() {
        return new td(.5, .5, .5)
      }
      static Teal() {
        return new td(0, 1, 1)
      }
      static Random() {
        return new td(Math.random(), Math.random(), Math.random())
      }
    }
    td._V8PerformanceHack = new td(.5, .5, .5), td._BlackReadOnly = td.Black();
    class od {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = dd, this.g = Od, this.b = md, this.a = Wd
      }
      RRd() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return dd[Od] = this.r, dd[Od + 1] = this.g, dd[Od + 2] = this.b, dd[Od + 3] = this.a, this
      }
      ZQ(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = dd[Od], this.g = dd[Od + 1], this.b = dd[Od + 2], this.a = dd[Od + 3], this
      }
      equals(dd) {
        return dd && this.r === dd.r && this.g === dd.g && this.b === dd.b && this.a === dd.a
      }
      add(dd) {
        return new od(this.r + dd.r, this.g + dd.g, this.b + dd.b, this.a + dd.a)
      }
      addToRef(dd, Od) {
        return Od.r = this.r + dd.r, Od.g = this.g + dd.g, Od.b = this.b + dd.b, Od.a = this.a + dd.a, Od
      }
      addInPlace(dd) {
        return this.r += dd.r, this.g += dd.g, this.b += dd.b, this.a += dd.a, this
      }
      addInPlaceFromFloats(dd, Od, md, Wd) {
        return this.r += dd, this.g += Od, this.b += md, this.a += Wd, this
      }
      subtract(dd) {
        return new od(this.r - dd.r, this.g - dd.g, this.b - dd.b, this.a - dd.a)
      }
      subtractToRef(dd, Od) {
        return Od.r = this.r - dd.r, Od.g = this.g - dd.g, Od.b = this.b - dd.b, Od.a = this.a - dd.a, Od
      }
      YRd(dd) {
        return this.r -= dd.r, this.g -= dd.g, this.b -= dd.b, this.a -= dd.a, this
      }
      subtractFromFloats(dd, Od, md, Wd) {
        return new od(this.r - dd, this.g - Od, this.b - md, this.a - Wd)
      }
      subtractFromFloatsToRef(dd, Od, md, Wd, Fd) {
        return Fd.r = this.r - dd, Fd.g = this.g - Od, Fd.b = this.b - md, Fd.a = this.a - Wd, Fd
      }
      scale(dd) {
        return new od(this.r * dd, this.g * dd, this.b * dd, this.a * dd)
      }
      scaleInPlace(dd) {
        return this.r *= dd, this.g *= dd, this.b *= dd, this.a *= dd, this
      }
      scaleToRef(dd, Od) {
        return Od.r = this.r * dd, Od.g = this.g * dd, Od.b = this.b * dd, Od.a = this.a * dd, Od
      }
      scaleAndAddToRef(dd, Od) {
        return Od.r += this.r * dd, Od.g += this.g * dd, Od.b += this.b * dd, Od.a += this.a * dd, Od
      }
      clampToRef() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          md = arguments.length > 2 ? arguments[2] : void 0;
        return md.r = (0, Rd.Clamp)(this.r, dd, Od), md.g = (0, Rd.Clamp)(this.g, dd, Od), md.b = (0, Rd.Clamp)(this.b, dd, Od), md.a = (0, Rd.Clamp)(this.a, dd, Od), md
      }
      multiply(dd) {
        return new od(this.r * dd.r, this.g * dd.g, this.b * dd.b, this.a * dd.a)
      }
      multiplyToRef(dd, Od) {
        return Od.r = this.r * dd.r, Od.g = this.g * dd.g, Od.b = this.b * dd.b, Od.a = this.a * dd.a, Od
      }
      multiplyInPlace(dd) {
        return this.r *= dd.r, this.g *= dd.g, this.b *= dd.b, this.a *= dd.a, this
      }
      multiplyByFloats(dd, Od, md, Wd) {
        return new od(this.r * dd, this.g * Od, this.b * md, this.a * Wd)
      }
      divide(dd) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(dd, Od) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(dd) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(dd) {
        return this.r = Math.min(this.r, dd.r), this.g = Math.min(this.g, dd.g), this.b = Math.min(this.b, dd.b), this.a = Math.min(this.a, dd.a), this
      }
      maximizeInPlace(dd) {
        return this.r = Math.max(this.r, dd.r), this.g = Math.max(this.g, dd.g), this.b = Math.max(this.b, dd.b), this.a = Math.max(this.a, dd.a), this
      }
      minimizeInPlaceFromFloats(dd, Od, md, Wd) {
        return this.r = Math.min(dd, this.r), this.g = Math.min(Od, this.g), this.b = Math.min(md, this.b), this.a = Math.min(Wd, this.a), this
      }
      maximizeInPlaceFromFloats(dd, Od, md, Wd) {
        return this.r = Math.max(dd, this.r), this.g = Math.max(Od, this.g), this.b = Math.max(md, this.b), this.a = Math.max(Wd, this.a), this
      }
      floorToRef(dd) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(dd) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      ty() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(dd) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Fd.b;
        return (0, Rd.WithinEpsilon)(this.r, dd.r, Od) && (0, Rd.WithinEpsilon)(this.g, dd.g, Od) && (0, Rd.WithinEpsilon)(this.b, dd.b, Od) && (0, Rd.WithinEpsilon)(this.a, dd.a, Od)
      }
      Qhd(dd, Od, md, Wd) {
        return this.r === dd && this.g === Od && this.b === md && this.a === Wd
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let dd = 255 * this.r | 0;
        return dd = 397 * dd ^ 255 * this.g, dd = 397 * dd ^ 255 * this.b, dd = 397 * dd ^ 255 * this.a, dd
      }
      clone() {
        return (new od).Bx(this)
      }
      Bx(dd) {
        return this.r = dd.r, this.g = dd.g, this.b = dd.b, this.a = dd.a, this
      }
      KOd(dd, Od, md, Wd) {
        return this.r = dd, this.g = Od, this.b = md, this.a = Wd, this
      }
      set(dd, Od, md, Wd) {
        return this.KOd(dd, Od, md, Wd)
      }
      Bdd(dd) {
        return this.r = this.g = this.b = this.a = dd, this
      }
      toHexString() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Od = Math.round(255 * this.r),
          md = Math.round(255 * this.g),
          Wd = Math.round(255 * this.b);
        if (dd) return "#" + (0, Rd.ToHex)(Od) + (0, Rd.ToHex)(md) + (0, Rd.ToHex)(Wd);
        const Fd = Math.round(255 * this.a);
        return "#" + (0, Rd.ToHex)(Od) + (0, Rd.ToHex)(md) + (0, Rd.ToHex)(Wd) + (0, Rd.ToHex)(Fd)
      }
      fromHexString(dd) {
        return "#" !== dd.substring(0, 1) || 9 !== dd.length && 7 !== dd.length || (this.r = parseInt(dd.substring(1, 3), 16) / 255, this.g = parseInt(dd.substring(3, 5), 16) / 255, this.b = parseInt(dd.substring(5, 7), 16) / 255, 9 === dd.length && (this.a = parseInt(dd.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Od = new od;
        return this.toLinearSpaceToRef(Od, dd), Od
      }
      toLinearSpaceToRef(dd) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (dd.r = hd(this.r), dd.g = hd(this.g), dd.b = hd(this.b)) : (dd.r = Kd(this.r), dd.g = Kd(this.g), dd.b = Kd(this.b)), dd.a = this.a, this
      }
      toGammaSpace() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const Od = new od;
        return this.toGammaSpaceToRef(Od, dd), Od
      }
      toGammaSpaceToRef(dd) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (dd.r = Qd(this.r), dd.g = Qd(this.g), dd.b = Qd(this.b)) : (dd.r = vd(this.r), dd.g = vd(this.g), dd.b = vd(this.b)), dd.a = this.a, this
      }
      static FromHexString(dd) {
        return "#" !== dd.substring(0, 1) || 9 !== dd.length && 7 !== dd.length ? new od(0, 0, 0, 0) : new od(0, 0, 0, 1).fromHexString(dd)
      }
      static Lerp(dd, Od, md) {
        return od.LerpToRef(dd, Od, md, new od)
      }
      static LerpToRef(dd, Od, md, Wd) {
        return Wd.r = dd.r + (Od.r - dd.r) * md, Wd.g = dd.g + (Od.g - dd.g) * md, Wd.b = dd.b + (Od.b - dd.b) * md, Wd.a = dd.a + (Od.a - dd.a) * md, Wd
      }
      static Hermite(dd, Od, md, Wd, Fd) {
        const Rd = Fd * Fd,
          Xd = Fd * Rd,
          Kd = 2 * Xd - 3 * Rd + 1,
          hd = -2 * Xd + 3 * Rd,
          vd = Xd - 2 * Rd + Fd,
          Qd = Xd - Rd,
          td = dd.r * Kd + md.r * hd + Od.r * vd + Wd.r * Qd,
          Nd = dd.g * Kd + md.g * hd + Od.g * vd + Wd.g * Qd,
          qd = dd.b * Kd + md.b * hd + Od.b * vd + Wd.b * Qd,
          Hd = dd.a * Kd + md.a * hd + Od.a * vd + Wd.a * Qd;
        return new od(td, Nd, qd, Hd)
      }
      static Hermite1stDerivative(dd, Od, md, Wd, Fd) {
        const Rd = new od;
        return this.Hermite1stDerivativeToRef(dd, Od, md, Wd, Fd, Rd), Rd
      }
      static Hermite1stDerivativeToRef(dd, Od, md, Wd, Fd, Rd) {
        const Xd = Fd * Fd;
        Rd.r = 6 * (Xd - Fd) * dd.r + (3 * Xd - 4 * Fd + 1) * Od.r + 6 * (-Xd + Fd) * md.r + (3 * Xd - 2 * Fd) * Wd.r, Rd.g = 6 * (Xd - Fd) * dd.g + (3 * Xd - 4 * Fd + 1) * Od.g + 6 * (-Xd + Fd) * md.g + (3 * Xd - 2 * Fd) * Wd.g, Rd.b = 6 * (Xd - Fd) * dd.b + (3 * Xd - 4 * Fd + 1) * Od.b + 6 * (-Xd + Fd) * md.b + (3 * Xd - 2 * Fd) * Wd.b, Rd.a = 6 * (Xd - Fd) * dd.a + (3 * Xd - 4 * Fd + 1) * Od.a + 6 * (-Xd + Fd) * md.a + (3 * Xd - 2 * Fd) * Wd.a
      }
      static FromColor3(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new od(dd.r, dd.g, dd.b, Od)
      }
      static FromArray(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new od(dd[Od], dd[Od + 1], dd[Od + 2], dd[Od + 3])
      }
      static FromArrayToRef(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 ? arguments[2] : void 0;
        md.r = dd[Od], md.g = dd[Od + 1], md.b = dd[Od + 2], md.a = dd[Od + 3]
      }
      static FromInts(dd, Od, md, Wd) {
        return new od(dd / 255, Od / 255, md / 255, Wd / 255)
      }
      static CheckColors4(dd, Od) {
        if (dd.length === 3 * Od) {
          const Od = [];
          for (let md = 0; md < dd.length; md += 3) {
            const Wd = md / 3 * 4;
            Od[Wd] = dd[md], Od[Wd + 1] = dd[md + 1], Od[Wd + 2] = dd[md + 2], Od[Wd + 3] = 1
          }
          return Od
        }
        return dd
      }
    }
    od._V8PerformanceHack = new od(.5, .5, .5, .5);
    class Nd {}
    Nd.Color3 = (0, Wd.e)(3, td.Black), Nd.Color4 = (0, Wd.e)(3, (() => new od(0, 0, 0, 0)));
    let qd = !1;

    function Hd() {
      qd || (qd = !0, Object.defineProperties(td.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(od.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, Xd.e)("BABYLON.Color3", td), (0, Xd.e)("BABYLON.Color4", od))
    }
  },
  38644: (dd, Od, md) => {
    md.d(Od, {
      b: () => Rd,
      c: () => Wd,
      f: () => Fd
    });
    const Wd = 1 / 2.2,
      Fd = 2.2;
    Math.sqrt(5);
    let Rd = .001
  },
  38663: (dd, Od, md) => {
    function Wd(dd) {
      return parseInt(dd.toString().replace(/\W/g, ""))
    }

    function Fd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(dd - Od) <= md
    }

    function Rd(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return dd < Od - Wd || dd > md + Wd
    }

    function Xd(dd, Od) {
      return dd === Od ? dd : Math.random() * (Od - dd) + dd
    }

    function Kd(dd, Od, md) {
      return dd + (Od - dd) * md
    }

    function hd(dd, Od, md) {
      let Wd = yd(Od - dd, 360);
      return Wd > 180 && (Wd -= 360), dd + Wd * od(md)
    }

    function vd(dd, Od, md) {
      let Wd;
      return Wd = dd != Od ? od((md - dd) / (Od - dd)) : 0, Wd
    }

    function Qd(dd, Od, md, Wd, Fd) {
      const Rd = Fd * Fd,
        Xd = Fd * Rd;
      return dd * (2 * Xd - 3 * Rd + 1) + md * (-2 * Xd + 3 * Rd) + Od * (Xd - 2 * Rd + Fd) + Wd * (Xd - Rd)
    }

    function td(dd, Od, md, Wd, Fd) {
      const Rd = Fd * Fd;
      return 6 * (Rd - Fd) * dd + (3 * Rd - 4 * Fd + 1) * Od + 6 * (-Rd + Fd) * md + (3 * Rd - 2 * Fd) * Wd
    }

    function od(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(md, Math.max(Od, dd))
    }

    function Nd(dd) {
      return dd -= 2 * Math.PI * Math.floor((dd + Math.PI) / (2 * Math.PI))
    }

    function qd(dd) {
      const Od = dd.toString(16);
      return dd <= 15 ? ("0" + Od).toUpperCase() : Od.toUpperCase()
    }

    function Hd(dd) {
      if (Math.log2) return Math.floor(Math.log2(dd));
      if (dd < 0) return NaN;
      if (0 === dd) return -1 / 0;
      let Od = 0;
      if (dd < 1) {
        for (; dd < 1;) Od++, dd *= 2;
        Od = -Od
      } else if (dd > 1)
        for (; dd > 1;) Od++, dd = Math.floor(dd / 2);
      return Od
    }

    function yd(dd, Od) {
      return dd - Math.floor(dd / Od) * Od
    }

    function bd(dd, Od, md) {
      return (dd - Od) / (md - Od)
    }

    function Td(dd, Od, md) {
      return dd * (md - Od) + Od
    }

    function pd(dd, Od) {
      let md = yd(Od - dd, 360);
      return md > 180 && (md -= 360), md
    }

    function Yd(dd, Od) {
      const md = yd(dd, 2 * Od);
      return Od - Math.abs(md - Od)
    }

    function gd(dd, Od, md) {
      let Wd = od(md);
      return Wd = -2 * Wd * Wd * Wd + 3 * Wd * Wd, Od * Wd + dd * (1 - Wd)
    }

    function wd(dd, Od, md) {
      let Wd;
      return Wd = Math.abs(Od - dd) <= md ? Od : dd + Math.sign(Od - dd) * md, Wd
    }

    function Ed(dd, Od, md) {
      const Wd = pd(dd, Od);
      let Fd;
      return Fd = -md < Wd && Wd < md ? Od : wd(dd, Od = dd + Wd, md), Fd
    }

    function Jd(dd, Od, md) {
      return (dd - Od) / (md - Od)
    }

    function Ud(dd, Od, md) {
      return (md - Od) * dd + Od
    }

    function xd(dd, Od) {
      const md = dd % Od;
      return 0 === md ? Od : xd(Od, md)
    }
    md.r(Od), md.d(Od, {
      Clamp: () => od,
      DeltaAngle: () => pd,
      Denormalize: () => Td,
      ExtractAsInt: () => Wd,
      Hermite: () => Qd,
      Hermite1stDerivative: () => td,
      HighestCommonFactor: () => xd,
      ILog2: () => Hd,
      InverseLerp: () => vd,
      Lerp: () => Kd,
      LerpAngle: () => hd,
      MoveTowards: () => wd,
      MoveTowardsAngle: () => Ed,
      Normalize: () => bd,
      NormalizeRadians: () => Nd,
      OutsideRange: () => Rd,
      PercentToRange: () => Ud,
      PingPong: () => Yd,
      RandomRange: () => Xd,
      RangeToPercent: () => Jd,
      Repeat: () => yd,
      SmoothStep: () => gd,
      ToHex: () => qd,
      WithinEpsilon: () => Fd
    })
  },
  38647: (dd, Od, md) => {
    function Wd(dd, Od) {
      const md = [];
      for (let Wd = 0; Wd < dd; ++Wd) md.push(Od());
      return md
    }

    function Fd(dd, Od) {
      return Wd(dd, Od)
    }
    md.d(Od, {
      e: () => Wd,
      f: () => Fd,
      i: () => Xd
    });
    const Rd = ["push", "splice", "pop", "shift", "unshift"];

    function Xd(dd, Od) {
      const md = Rd.map((md => function(dd, Od, md) {
        const Wd = dd[Od];
        if ("function" !== typeof Wd) return null;
        const Fd = function() {
          const Wd = dd.length,
            Rd = Fd.previous.apply(dd, arguments);
          return md(Od, Wd), Rd
        };
        return Wd.next = Fd, Fd.previous = Wd, dd[Od] = Fd, () => {
          const md = Fd.previous;
          if (!md) return;
          const Wd = Fd.next;
          Wd ? (md.next = Wd, Wd.previous = md) : (md.next = void 0, dd[Od] = md), Fd.next = void 0, Fd.previous = void 0
        }
      }(dd, md, Od)));
      return () => {
        for (const dd of md) dd?.()
      }
    }
  },
  38669: (dd, Od, md) => {
    md.d(Od, {
      c: () => Rd,
      e: () => Fd
    });
    const Wd = {};

    function Fd(dd, Od) {
      Wd[dd] = Od
    }

    function Rd(dd) {
      return Wd[dd]
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);