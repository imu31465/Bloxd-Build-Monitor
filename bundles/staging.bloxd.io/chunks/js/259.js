export const id = 259;
export const ids = [259];
export const modules = {
  37894: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => PB,
      g: () => zB,
      k: () => qB,
      o: () => lB
    });
    var YB = GB(37785),
      DB = GB(37782),
      QB = GB(37807),
      oB = GB(37823);

    function jB(BB) {
      return Math.pow(BB, DB.d)
    }

    function yB(BB) {
      return BB <= .04045 ? .0773993808 * BB : Math.pow(.947867299 * (BB + .055), 2.4)
    }

    function JB(BB) {
      return Math.pow(BB, DB.c)
    }

    function MB(BB) {
      return BB <= .0031308 ? 12.92 * BB : 1.055 * Math.pow(BB, .41666) - .055
    }
    class PB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this.r = BB, this.g = OB, this.b = GB
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + "}"
      }
      getClassName() {
        return "Color3"
      }
      getHashCode() {
        let BB = 255 * this.r | 0;
        return BB = 397 * BB ^ 255 * this.g, BB = 397 * BB ^ 255 * this.b, BB
      }
      toArray(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BB[OB] = this.r, BB[OB + 1] = this.g, BB[OB + 2] = this.b, this
      }
      OP(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return PB.FromArrayToRef(BB, OB, this), this
      }
      toColor4() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return new zB(this.r, this.g, this.b, BB)
      }
      dDB() {
        return [this.r, this.g, this.b]
      }
      toLuminance() {
        return .3 * this.r + .59 * this.g + .11 * this.b
      }
      multiply(BB) {
        return new PB(this.r * BB.r, this.g * BB.g, this.b * BB.b)
      }
      multiplyToRef(BB, OB) {
        return OB.r = this.r * BB.r, OB.g = this.g * BB.g, OB.b = this.b * BB.b, OB
      }
      multiplyInPlace(BB) {
        return this.r *= BB.r, this.g *= BB.g, this.b *= BB.b, this
      }
      multiplyByFloats(BB, OB, GB) {
        return new PB(this.r * BB, this.g * OB, this.b * GB)
      }
      divide(BB) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(BB, OB) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(BB) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(BB) {
        return this.minimizeInPlaceFromFloats(BB.r, BB.g, BB.b)
      }
      maximizeInPlace(BB) {
        return this.maximizeInPlaceFromFloats(BB.r, BB.g, BB.b)
      }
      minimizeInPlaceFromFloats(BB, OB, GB) {
        return this.r = Math.min(BB, this.r), this.g = Math.min(OB, this.g), this.b = Math.min(GB, this.b), this
      }
      maximizeInPlaceFromFloats(BB, OB, GB) {
        return this.r = Math.max(BB, this.r), this.g = Math.max(OB, this.g), this.b = Math.max(GB, this.b), this
      }
      floorToRef(BB) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(BB) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      equals(BB) {
        return BB && this.r === BB.r && this.g === BB.g && this.b === BB.b
      }
      equalsFloats(BB, OB, GB) {
        return this.QyB(BB, OB, GB)
      }
      QyB(BB, OB, GB) {
        return this.r === BB && this.g === OB && this.b === GB
      }
      equalsWithEpsilon(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DB.b;
        return (0, QB.WithinEpsilon)(this.r, BB.r, OB) && (0, QB.WithinEpsilon)(this.g, BB.g, OB) && (0, QB.WithinEpsilon)(this.b, BB.b, OB)
      }
      ep() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(BB) {
        throw new ReferenceError("Can not negate a color")
      }
      scale(BB) {
        return new PB(this.r * BB, this.g * BB, this.b * BB)
      }
      scaleInPlace(BB) {
        return this.r *= BB, this.g *= BB, this.b *= BB, this
      }
      scaleToRef(BB, OB) {
        return OB.r = this.r * BB, OB.g = this.g * BB, OB.b = this.b * BB, OB
      }
      scaleAndAddToRef(BB, OB) {
        return OB.r += this.r * BB, OB.g += this.g * BB, OB.b += this.b * BB, OB
      }
      clampToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        return GB.r = (0, QB.Clamp)(this.r, BB, OB), GB.g = (0, QB.Clamp)(this.g, BB, OB), GB.b = (0, QB.Clamp)(this.b, BB, OB), GB
      }
      add(BB) {
        return new PB(this.r + BB.r, this.g + BB.g, this.b + BB.b)
      }
      addInPlace(BB) {
        return this.r += BB.r, this.g += BB.g, this.b += BB.b, this
      }
      addInPlaceFromFloats(BB, OB, GB) {
        return this.r += BB, this.g += OB, this.b += GB, this
      }
      addToRef(BB, OB) {
        return OB.r = this.r + BB.r, OB.g = this.g + BB.g, OB.b = this.b + BB.b, OB
      }
      subtract(BB) {
        return new PB(this.r - BB.r, this.g - BB.g, this.b - BB.b)
      }
      subtractToRef(BB, OB) {
        return OB.r = this.r - BB.r, OB.g = this.g - BB.g, OB.b = this.b - BB.b, OB
      }
      CDB(BB) {
        return this.r -= BB.r, this.g -= BB.g, this.b -= BB.b, this
      }
      subtractFromFloats(BB, OB, GB) {
        return new PB(this.r - BB, this.g - OB, this.b - GB)
      }
      subtractFromFloatsToRef(BB, OB, GB, YB) {
        return YB.r = this.r - BB, YB.g = this.g - OB, YB.b = this.b - GB, YB
      }
      clone() {
        return new PB(this.r, this.g, this.b)
      }
      IU(BB) {
        return this.r = BB.r, this.g = BB.g, this.b = BB.b, this
      }
      zOB(BB, OB, GB) {
        return this.r = BB, this.g = OB, this.b = GB, this
      }
      set(BB, OB, GB) {
        return this.zOB(BB, OB, GB)
      }
      uBB(BB) {
        return this.r = this.g = this.b = BB, this
      }
      toHexString() {
        const BB = Math.round(255 * this.r),
          OB = Math.round(255 * this.g),
          GB = Math.round(255 * this.b);
        return "#" + (0, QB.ToHex)(BB) + (0, QB.ToHex)(OB) + (0, QB.ToHex)(GB)
      }
      fromHexString(BB) {
        return "#" !== BB.substring(0, 1) || 7 !== BB.length || (this.r = parseInt(BB.substring(1, 3), 16) / 255, this.g = parseInt(BB.substring(3, 5), 16) / 255, this.b = parseInt(BB.substring(5, 7), 16) / 255), this
      }
      toHSV() {
        return this.toHSVToRef(new PB)
      }
      toHSVToRef(BB) {
        const OB = this.r,
          GB = this.g,
          YB = this.b,
          DB = Math.max(OB, GB, YB),
          QB = Math.min(OB, GB, YB);
        let oB = 0,
          jB = 0;
        const yB = DB,
          JB = DB - QB;
        return 0 !== DB && (jB = JB / DB), DB != QB && (DB == OB ? (oB = (GB - YB) / JB, GB < YB && (oB += 6)) : DB == GB ? oB = (YB - OB) / JB + 2 : DB == YB && (oB = (OB - GB) / JB + 4), oB *= 60), BB.r = oB, BB.g = jB, BB.b = yB, BB
      }
      toLinearSpace() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const OB = new PB;
        return this.toLinearSpaceToRef(OB, BB), OB
      }
      toLinearSpaceToRef(BB) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (BB.r = yB(this.r), BB.g = yB(this.g), BB.b = yB(this.b)) : (BB.r = jB(this.r), BB.g = jB(this.g), BB.b = jB(this.b)), this
      }
      toGammaSpace() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const OB = new PB;
        return this.toGammaSpaceToRef(OB, BB), OB
      }
      toGammaSpaceToRef(BB) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (BB.r = MB(this.r), BB.g = MB(this.g), BB.b = MB(this.b)) : (BB.r = JB(this.r), BB.g = JB(this.g), BB.b = JB(this.b)), this
      }
      static HSVtoRGBToRef(BB, OB, GB, YB) {
        const DB = GB * OB,
          QB = BB / 60,
          oB = DB * (1 - Math.abs(QB % 2 - 1));
        let jB = 0,
          yB = 0,
          JB = 0;
        QB >= 0 && QB <= 1 ? (jB = DB, yB = oB) : QB >= 1 && QB <= 2 ? (jB = oB, yB = DB) : QB >= 2 && QB <= 3 ? (yB = DB, JB = oB) : QB >= 3 && QB <= 4 ? (yB = oB, JB = DB) : QB >= 4 && QB <= 5 ? (jB = oB, JB = DB) : QB >= 5 && QB <= 6 && (jB = DB, JB = oB);
        const MB = GB - DB;
        return YB.r = jB + MB, YB.g = yB + MB, YB.b = JB + MB, YB
      }
      static FromHSV(BB, OB, GB) {
        const YB = new PB(0, 0, 0);
        return PB.HSVtoRGBToRef(BB, OB, GB, YB), YB
      }
      static FromHexString(BB) {
        return new PB(0, 0, 0).fromHexString(BB)
      }
      static FromArray(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new PB(BB[OB], BB[OB + 1], BB[OB + 2])
      }
      static FromArrayToRef(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        GB.r = BB[OB], GB.g = BB[OB + 1], GB.b = BB[OB + 2]
      }
      static FromInts(BB, OB, GB) {
        return new PB(BB / 255, OB / 255, GB / 255)
      }
      static Lerp(BB, OB, GB) {
        const YB = new PB(0, 0, 0);
        return PB.LerpToRef(BB, OB, GB, YB), YB
      }
      static LerpToRef(BB, OB, GB, YB) {
        YB.r = BB.r + (OB.r - BB.r) * GB, YB.g = BB.g + (OB.g - BB.g) * GB, YB.b = BB.b + (OB.b - BB.b) * GB
      }
      static Hermite(BB, OB, GB, YB, DB) {
        const QB = DB * DB,
          oB = DB * QB,
          jB = 2 * oB - 3 * QB + 1,
          yB = -2 * oB + 3 * QB,
          JB = oB - 2 * QB + DB,
          MB = oB - QB,
          zB = BB.r * jB + GB.r * yB + OB.r * JB + YB.r * MB,
          lB = BB.g * jB + GB.g * yB + OB.g * JB + YB.g * MB,
          pB = BB.b * jB + GB.b * yB + OB.b * JB + YB.b * MB;
        return new PB(zB, lB, pB)
      }
      static Hermite1stDerivative(BB, OB, GB, YB, DB) {
        const QB = PB.Black();
        return this.Hermite1stDerivativeToRef(BB, OB, GB, YB, DB, QB), QB
      }
      static Hermite1stDerivativeToRef(BB, OB, GB, YB, DB, QB) {
        const oB = DB * DB;
        QB.r = 6 * (oB - DB) * BB.r + (3 * oB - 4 * DB + 1) * OB.r + 6 * (-oB + DB) * GB.r + (3 * oB - 2 * DB) * YB.r, QB.g = 6 * (oB - DB) * BB.g + (3 * oB - 4 * DB + 1) * OB.g + 6 * (-oB + DB) * GB.g + (3 * oB - 2 * DB) * YB.g, QB.b = 6 * (oB - DB) * BB.b + (3 * oB - 4 * DB + 1) * OB.b + 6 * (-oB + DB) * GB.b + (3 * oB - 2 * DB) * YB.b
      }
      static Red() {
        return new PB(1, 0, 0)
      }
      static Green() {
        return new PB(0, 1, 0)
      }
      static Blue() {
        return new PB(0, 0, 1)
      }
      static Black() {
        return new PB(0, 0, 0)
      }
      static get BlackReadOnly() {
        return PB._BlackReadOnly
      }
      static White() {
        return new PB(1, 1, 1)
      }
      static Purple() {
        return new PB(.5, 0, .5)
      }
      static Magenta() {
        return new PB(1, 0, 1)
      }
      static Yellow() {
        return new PB(1, 1, 0)
      }
      static Gray() {
        return new PB(.5, .5, .5)
      }
      static Teal() {
        return new PB(0, 1, 1)
      }
      static Random() {
        return new PB(Math.random(), Math.random(), Math.random())
      }
    }
    PB._V8PerformanceHack = new PB(.5, .5, .5), PB._BlackReadOnly = PB.Black();
    class zB {
      constructor() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this.r = BB, this.g = OB, this.b = GB, this.a = YB
      }
      dDB() {
        return [this.r, this.g, this.b, this.a]
      }
      toArray(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return BB[OB] = this.r, BB[OB + 1] = this.g, BB[OB + 2] = this.b, BB[OB + 3] = this.a, this
      }
      OP(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return this.r = BB[OB], this.g = BB[OB + 1], this.b = BB[OB + 2], this.a = BB[OB + 3], this
      }
      equals(BB) {
        return BB && this.r === BB.r && this.g === BB.g && this.b === BB.b && this.a === BB.a
      }
      add(BB) {
        return new zB(this.r + BB.r, this.g + BB.g, this.b + BB.b, this.a + BB.a)
      }
      addToRef(BB, OB) {
        return OB.r = this.r + BB.r, OB.g = this.g + BB.g, OB.b = this.b + BB.b, OB.a = this.a + BB.a, OB
      }
      addInPlace(BB) {
        return this.r += BB.r, this.g += BB.g, this.b += BB.b, this.a += BB.a, this
      }
      addInPlaceFromFloats(BB, OB, GB, YB) {
        return this.r += BB, this.g += OB, this.b += GB, this.a += YB, this
      }
      subtract(BB) {
        return new zB(this.r - BB.r, this.g - BB.g, this.b - BB.b, this.a - BB.a)
      }
      subtractToRef(BB, OB) {
        return OB.r = this.r - BB.r, OB.g = this.g - BB.g, OB.b = this.b - BB.b, OB.a = this.a - BB.a, OB
      }
      CDB(BB) {
        return this.r -= BB.r, this.g -= BB.g, this.b -= BB.b, this.a -= BB.a, this
      }
      subtractFromFloats(BB, OB, GB, YB) {
        return new zB(this.r - BB, this.g - OB, this.b - GB, this.a - YB)
      }
      subtractFromFloatsToRef(BB, OB, GB, YB, DB) {
        return DB.r = this.r - BB, DB.g = this.g - OB, DB.b = this.b - GB, DB.a = this.a - YB, DB
      }
      scale(BB) {
        return new zB(this.r * BB, this.g * BB, this.b * BB, this.a * BB)
      }
      scaleInPlace(BB) {
        return this.r *= BB, this.g *= BB, this.b *= BB, this.a *= BB, this
      }
      scaleToRef(BB, OB) {
        return OB.r = this.r * BB, OB.g = this.g * BB, OB.b = this.b * BB, OB.a = this.a * BB, OB
      }
      scaleAndAddToRef(BB, OB) {
        return OB.r += this.r * BB, OB.g += this.g * BB, OB.b += this.b * BB, OB.a += this.a * BB, OB
      }
      clampToRef() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        return GB.r = (0, QB.Clamp)(this.r, BB, OB), GB.g = (0, QB.Clamp)(this.g, BB, OB), GB.b = (0, QB.Clamp)(this.b, BB, OB), GB.a = (0, QB.Clamp)(this.a, BB, OB), GB
      }
      multiply(BB) {
        return new zB(this.r * BB.r, this.g * BB.g, this.b * BB.b, this.a * BB.a)
      }
      multiplyToRef(BB, OB) {
        return OB.r = this.r * BB.r, OB.g = this.g * BB.g, OB.b = this.b * BB.b, OB.a = this.a * BB.a, OB
      }
      multiplyInPlace(BB) {
        return this.r *= BB.r, this.g *= BB.g, this.b *= BB.b, this.a *= BB.a, this
      }
      multiplyByFloats(BB, OB, GB, YB) {
        return new zB(this.r * BB, this.g * OB, this.b * GB, this.a * YB)
      }
      divide(BB) {
        throw new ReferenceError("Can not divide a color")
      }
      divideToRef(BB, OB) {
        throw new ReferenceError("Can not divide a color")
      }
      divideInPlace(BB) {
        throw new ReferenceError("Can not divide a color")
      }
      minimizeInPlace(BB) {
        return this.r = Math.min(this.r, BB.r), this.g = Math.min(this.g, BB.g), this.b = Math.min(this.b, BB.b), this.a = Math.min(this.a, BB.a), this
      }
      maximizeInPlace(BB) {
        return this.r = Math.max(this.r, BB.r), this.g = Math.max(this.g, BB.g), this.b = Math.max(this.b, BB.b), this.a = Math.max(this.a, BB.a), this
      }
      minimizeInPlaceFromFloats(BB, OB, GB, YB) {
        return this.r = Math.min(BB, this.r), this.g = Math.min(OB, this.g), this.b = Math.min(GB, this.b), this.a = Math.min(YB, this.a), this
      }
      maximizeInPlaceFromFloats(BB, OB, GB, YB) {
        return this.r = Math.max(BB, this.r), this.g = Math.max(OB, this.g), this.b = Math.max(GB, this.b), this.a = Math.max(YB, this.a), this
      }
      floorToRef(BB) {
        throw new ReferenceError("Can not floor a color")
      }
      floor() {
        throw new ReferenceError("Can not floor a color")
      }
      fractToRef(BB) {
        throw new ReferenceError("Can not fract a color")
      }
      fract() {
        throw new ReferenceError("Can not fract a color")
      }
      ep() {
        throw new ReferenceError("Can not negate a color")
      }
      negateInPlace() {
        throw new ReferenceError("Can not negate a color")
      }
      negateToRef(BB) {
        throw new ReferenceError("Can not negate a color")
      }
      equalsWithEpsilon(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : DB.b;
        return (0, QB.WithinEpsilon)(this.r, BB.r, OB) && (0, QB.WithinEpsilon)(this.g, BB.g, OB) && (0, QB.WithinEpsilon)(this.b, BB.b, OB) && (0, QB.WithinEpsilon)(this.a, BB.a, OB)
      }
      QyB(BB, OB, GB, YB) {
        return this.r === BB && this.g === OB && this.b === GB && this.a === YB
      }
      toString() {
        return "{R: " + this.r + " G:" + this.g + " B:" + this.b + " A:" + this.a + "}"
      }
      getClassName() {
        return "Color4"
      }
      getHashCode() {
        let BB = 255 * this.r | 0;
        return BB = 397 * BB ^ 255 * this.g, BB = 397 * BB ^ 255 * this.b, BB = 397 * BB ^ 255 * this.a, BB
      }
      clone() {
        return (new zB).IU(this)
      }
      IU(BB) {
        return this.r = BB.r, this.g = BB.g, this.b = BB.b, this.a = BB.a, this
      }
      zOB(BB, OB, GB, YB) {
        return this.r = BB, this.g = OB, this.b = GB, this.a = YB, this
      }
      set(BB, OB, GB, YB) {
        return this.zOB(BB, OB, GB, YB)
      }
      uBB(BB) {
        return this.r = this.g = this.b = this.a = BB, this
      }
      toHexString() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const OB = Math.round(255 * this.r),
          GB = Math.round(255 * this.g),
          YB = Math.round(255 * this.b);
        if (BB) return "#" + (0, QB.ToHex)(OB) + (0, QB.ToHex)(GB) + (0, QB.ToHex)(YB);
        const DB = Math.round(255 * this.a);
        return "#" + (0, QB.ToHex)(OB) + (0, QB.ToHex)(GB) + (0, QB.ToHex)(YB) + (0, QB.ToHex)(DB)
      }
      fromHexString(BB) {
        return "#" !== BB.substring(0, 1) || 9 !== BB.length && 7 !== BB.length || (this.r = parseInt(BB.substring(1, 3), 16) / 255, this.g = parseInt(BB.substring(3, 5), 16) / 255, this.b = parseInt(BB.substring(5, 7), 16) / 255, 9 === BB.length && (this.a = parseInt(BB.substring(7, 9), 16) / 255)), this
      }
      toLinearSpace() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const OB = new zB;
        return this.toLinearSpaceToRef(OB, BB), OB
      }
      toLinearSpaceToRef(BB) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (BB.r = yB(this.r), BB.g = yB(this.g), BB.b = yB(this.b)) : (BB.r = jB(this.r), BB.g = jB(this.g), BB.b = jB(this.b)), BB.a = this.a, this
      }
      toGammaSpace() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        const OB = new zB;
        return this.toGammaSpaceToRef(OB, BB), OB
      }
      toGammaSpaceToRef(BB) {
        return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? (BB.r = MB(this.r), BB.g = MB(this.g), BB.b = MB(this.b)) : (BB.r = JB(this.r), BB.g = JB(this.g), BB.b = JB(this.b)), BB.a = this.a, this
      }
      static FromHexString(BB) {
        return "#" !== BB.substring(0, 1) || 9 !== BB.length && 7 !== BB.length ? new zB(0, 0, 0, 0) : new zB(0, 0, 0, 1).fromHexString(BB)
      }
      static Lerp(BB, OB, GB) {
        return zB.LerpToRef(BB, OB, GB, new zB)
      }
      static LerpToRef(BB, OB, GB, YB) {
        return YB.r = BB.r + (OB.r - BB.r) * GB, YB.g = BB.g + (OB.g - BB.g) * GB, YB.b = BB.b + (OB.b - BB.b) * GB, YB.a = BB.a + (OB.a - BB.a) * GB, YB
      }
      static Hermite(BB, OB, GB, YB, DB) {
        const QB = DB * DB,
          oB = DB * QB,
          jB = 2 * oB - 3 * QB + 1,
          yB = -2 * oB + 3 * QB,
          JB = oB - 2 * QB + DB,
          MB = oB - QB,
          PB = BB.r * jB + GB.r * yB + OB.r * JB + YB.r * MB,
          lB = BB.g * jB + GB.g * yB + OB.g * JB + YB.g * MB,
          pB = BB.b * jB + GB.b * yB + OB.b * JB + YB.b * MB,
          qB = BB.a * jB + GB.a * yB + OB.a * JB + YB.a * MB;
        return new zB(PB, lB, pB, qB)
      }
      static Hermite1stDerivative(BB, OB, GB, YB, DB) {
        const QB = new zB;
        return this.Hermite1stDerivativeToRef(BB, OB, GB, YB, DB, QB), QB
      }
      static Hermite1stDerivativeToRef(BB, OB, GB, YB, DB, QB) {
        const oB = DB * DB;
        QB.r = 6 * (oB - DB) * BB.r + (3 * oB - 4 * DB + 1) * OB.r + 6 * (-oB + DB) * GB.r + (3 * oB - 2 * DB) * YB.r, QB.g = 6 * (oB - DB) * BB.g + (3 * oB - 4 * DB + 1) * OB.g + 6 * (-oB + DB) * GB.g + (3 * oB - 2 * DB) * YB.g, QB.b = 6 * (oB - DB) * BB.b + (3 * oB - 4 * DB + 1) * OB.b + 6 * (-oB + DB) * GB.b + (3 * oB - 2 * DB) * YB.b, QB.a = 6 * (oB - DB) * BB.a + (3 * oB - 4 * DB + 1) * OB.a + 6 * (-oB + DB) * GB.a + (3 * oB - 2 * DB) * YB.a
      }
      static FromColor3(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new zB(BB.r, BB.g, BB.b, OB)
      }
      static FromArray(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new zB(BB[OB], BB[OB + 1], BB[OB + 2], BB[OB + 3])
      }
      static FromArrayToRef(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        GB.r = BB[OB], GB.g = BB[OB + 1], GB.b = BB[OB + 2], GB.a = BB[OB + 3]
      }
      static FromInts(BB, OB, GB, YB) {
        return new zB(BB / 255, OB / 255, GB / 255, YB / 255)
      }
      static CheckColors4(BB, OB) {
        if (BB.length === 3 * OB) {
          const OB = [];
          for (let GB = 0; GB < BB.length; GB += 3) {
            const YB = GB / 3 * 4;
            OB[YB] = BB[GB], OB[YB + 1] = BB[GB + 1], OB[YB + 2] = BB[GB + 2], OB[YB + 3] = 1
          }
          return OB
        }
        return BB
      }
    }
    zB._V8PerformanceHack = new zB(.5, .5, .5, .5);
    class lB {}
    lB.Color3 = (0, YB.e)(3, PB.Black), lB.Color4 = (0, YB.e)(3, (() => new zB(0, 0, 0, 0)));
    let pB = !1;

    function qB() {
      pB || (pB = !0, Object.defineProperties(PB.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(zB.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), (0, oB.f)("BABYLON.Color3", PB), (0, oB.f)("BABYLON.Color4", zB))
    }
  },
  37782: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB,
      c: () => YB,
      d: () => DB
    });
    const YB = 1 / 2.2,
      DB = 2.2;
    Math.sqrt(5);
    let QB = .001
  },
  37807: (BB, OB, GB) => {
    function YB(BB) {
      return parseInt(BB.toString().replace(/\W/g, ""))
    }

    function DB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1401298e-51;
      return Math.abs(BB - OB) <= GB
    }

    function QB(BB, OB, GB) {
      let YB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1401298e-51;
      return BB < OB - YB || BB > GB + YB
    }

    function oB(BB, OB) {
      return BB === OB ? BB : Math.random() * (OB - BB) + BB
    }

    function jB(BB, OB, GB) {
      return BB + (OB - BB) * GB
    }

    function yB(BB, OB, GB) {
      let YB = ZB(OB - BB, 360);
      return YB > 180 && (YB -= 360), BB + YB * zB(GB)
    }

    function JB(BB, OB, GB) {
      let YB;
      return YB = BB != OB ? zB((GB - BB) / (OB - BB)) : 0, YB
    }

    function MB(BB, OB, GB, YB, DB) {
      const QB = DB * DB,
        oB = DB * QB;
      return BB * (2 * oB - 3 * QB + 1) + GB * (-2 * oB + 3 * QB) + OB * (oB - 2 * QB + DB) + YB * (oB - QB)
    }

    function PB(BB, OB, GB, YB, DB) {
      const QB = DB * DB;
      return 6 * (QB - DB) * BB + (3 * QB - 4 * DB + 1) * OB + 6 * (-QB + DB) * GB + (3 * QB - 2 * DB) * YB
    }

    function zB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return Math.min(GB, Math.max(OB, BB))
    }

    function lB(BB) {
      return BB -= 2 * Math.PI * Math.floor((BB + Math.PI) / (2 * Math.PI))
    }

    function pB(BB) {
      const OB = BB.toString(16);
      return BB <= 15 ? ("0" + OB).toUpperCase() : OB.toUpperCase()
    }

    function qB(BB) {
      if (Math.log2) return Math.floor(Math.log2(BB));
      if (BB < 0) return NaN;
      if (0 === BB) return -1 / 0;
      let OB = 0;
      if (BB < 1) {
        for (; BB < 1;) OB++, BB *= 2;
        OB = -OB
      } else if (BB > 1)
        for (; BB > 1;) OB++, BB = Math.floor(BB / 2);
      return OB
    }

    function ZB(BB, OB) {
      return BB - Math.floor(BB / OB) * OB
    }

    function NB(BB, OB, GB) {
      return (BB - OB) / (GB - OB)
    }

    function RB(BB, OB, GB) {
      return BB * (GB - OB) + OB
    }

    function WB(BB, OB) {
      let GB = ZB(OB - BB, 360);
      return GB > 180 && (GB -= 360), GB
    }

    function AB(BB, OB) {
      const GB = ZB(BB, 2 * OB);
      return OB - Math.abs(GB - OB)
    }

    function VB(BB, OB, GB) {
      let YB = zB(GB);
      return YB = -2 * YB * YB * YB + 3 * YB * YB, OB * YB + BB * (1 - YB)
    }

    function SB(BB, OB, GB) {
      let YB;
      return YB = Math.abs(OB - BB) <= GB ? OB : BB + Math.sign(OB - BB) * GB, YB
    }

    function nB(BB, OB, GB) {
      const YB = WB(BB, OB);
      let DB;
      return DB = -GB < YB && YB < GB ? OB : SB(BB, OB = BB + YB, GB), DB
    }

    function UB(BB, OB, GB) {
      return (BB - OB) / (GB - OB)
    }

    function fB(BB, OB, GB) {
      return (GB - OB) * BB + OB
    }

    function kB(BB, OB) {
      const GB = BB % OB;
      return 0 === GB ? OB : kB(OB, GB)
    }
    GB.r(OB), GB.d(OB, {
      Clamp: () => zB,
      DeltaAngle: () => WB,
      Denormalize: () => RB,
      ExtractAsInt: () => YB,
      Hermite: () => MB,
      Hermite1stDerivative: () => PB,
      HighestCommonFactor: () => kB,
      ILog2: () => qB,
      InverseLerp: () => JB,
      Lerp: () => jB,
      LerpAngle: () => yB,
      MoveTowards: () => SB,
      MoveTowardsAngle: () => nB,
      Normalize: () => NB,
      NormalizeRadians: () => lB,
      OutsideRange: () => QB,
      PercentToRange: () => fB,
      PingPong: () => AB,
      RandomRange: () => oB,
      RangeToPercent: () => UB,
      Repeat: () => ZB,
      SmoothStep: () => VB,
      ToHex: () => pB,
      WithinEpsilon: () => DB
    })
  },
  37785: (BB, OB, GB) => {
    function YB(BB, OB) {
      const GB = [];
      for (let YB = 0; YB < BB; ++YB) GB.push(OB());
      return GB
    }

    function DB(BB, OB) {
      return YB(BB, OB)
    }
    GB.d(OB, {
      e: () => YB,
      i: () => DB,
      l: () => oB
    });
    const QB = ["push", "splice", "pop", "shift", "unshift"];

    function oB(BB, OB) {
      const GB = QB.map((GB => function(BB, OB, GB) {
        const YB = BB[OB];
        if ("function" !== typeof YB) return null;
        const DB = function() {
          const YB = BB.length,
            QB = DB.previous.apply(BB, arguments);
          return GB(OB, YB), QB
        };
        return YB.next = DB, DB.previous = YB, BB[OB] = DB, () => {
          const GB = DB.previous;
          if (!GB) return;
          const YB = DB.next;
          YB ? (GB.next = YB, YB.previous = GB) : (GB.next = void 0, BB[OB] = GB), DB.next = void 0, DB.previous = void 0
        }
      }(BB, GB, OB)));
      return () => {
        for (const BB of GB) BB?.()
      }
    }
  },
  37823: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB,
      f: () => DB
    });
    const YB = {};

    function DB(BB, OB) {
      YB[BB] = OB
    }

    function QB(BB) {
      return YB[BB]
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);