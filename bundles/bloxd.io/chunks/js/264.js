export const id = 264;
export const ids = [264];
export const modules = {
  38587: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr
    });
    var Zr = Qr(38595);
    class Wr {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Wr.Instances = [], Wr.OnEnginesDisposedObservable = new Zr.d, Wr._LastCreatedScene = null, Wr.UseFallbackTexture = !0, Wr.FallbackTexture = ""
  },
  38578: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr
    });
    class Zr {
      static SetMatrixPrecision(rr) {
        if (Zr.MatrixTrackPrecisionChange = !1, rr && !Zr.MatrixUse64Bits && Zr.MatrixTrackedMatrices)
          for (let Sr = 0; Sr < Zr.MatrixTrackedMatrices.length; ++Sr) {
            const rr = Zr.MatrixTrackedMatrices[Sr],
              Qr = rr._m;
            rr._m = new Array(16);
            for (let Sr = 0; Sr < 16; ++Sr) rr._m[Sr] = Qr[Sr]
          }
        Zr.MatrixUse64Bits = rr, Zr.MatrixCurrentType = Zr.MatrixUse64Bits ? Array : Float32Array, Zr.MatrixTrackedMatrices = null
      }
    }
    Zr.MatrixUse64Bits = !1, Zr.MatrixTrackPrecisionChange = !0, Zr.MatrixCurrentType = Float32Array, Zr.MatrixTrackedMatrices = []
  },
  38606: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Ir,
      f: () => Er,
      j: () => fr,
      l: () => Zr,
      p: () => ar,
      s: () => jr
    });
    class Zr {}

    function Wr(rr) {
      rr.updateFlag = Zr._UpdateFlagSeed++
    }

    function ar(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Wr = rr.OWr(),
        ar = Sr.OWr(),
        jr = Wr[0],
        Ir = Wr[1],
        fr = Wr[2],
        Er = Wr[3],
        pr = Wr[4],
        xr = Wr[5],
        mr = Wr[6],
        Nr = Wr[7],
        Ur = Wr[8],
        tr = Wr[9],
        hr = Wr[10],
        zr = Wr[11],
        Yr = Wr[12],
        nr = Wr[13],
        er = Wr[14],
        Kr = Wr[15],
        yr = ar[0],
        Br = ar[1],
        Tr = ar[2],
        vr = ar[3],
        Or = ar[4],
        Lr = ar[5],
        lr = ar[6],
        Xr = ar[7],
        Pr = ar[8],
        Hr = ar[9],
        qr = ar[10],
        Rr = ar[11],
        gr = ar[12],
        Cr = ar[13],
        Mr = ar[14],
        Gr = ar[15];
      Qr[Zr] = jr * yr + Ir * Or + fr * Pr + Er * gr, Qr[Zr + 1] = jr * Br + Ir * Lr + fr * Hr + Er * Cr, Qr[Zr + 2] = jr * Tr + Ir * lr + fr * qr + Er * Mr, Qr[Zr + 3] = jr * vr + Ir * Xr + fr * Rr + Er * Gr, Qr[Zr + 4] = pr * yr + xr * Or + mr * Pr + Nr * gr, Qr[Zr + 5] = pr * Br + xr * Lr + mr * Hr + Nr * Cr, Qr[Zr + 6] = pr * Tr + xr * lr + mr * qr + Nr * Mr, Qr[Zr + 7] = pr * vr + xr * Xr + mr * Rr + Nr * Gr, Qr[Zr + 8] = Ur * yr + tr * Or + hr * Pr + zr * gr, Qr[Zr + 9] = Ur * Br + tr * Lr + hr * Hr + zr * Cr, Qr[Zr + 10] = Ur * Tr + tr * lr + hr * qr + zr * Mr, Qr[Zr + 11] = Ur * vr + tr * Xr + hr * Rr + zr * Gr, Qr[Zr + 12] = Yr * yr + nr * Or + er * Pr + Kr * gr, Qr[Zr + 13] = Yr * Br + nr * Lr + er * Hr + Kr * Cr, Qr[Zr + 14] = Yr * Tr + nr * lr + er * qr + Kr * Mr, Qr[Zr + 15] = Yr * vr + nr * Xr + er * Rr + Kr * Gr
    }

    function jr(rr, Sr, Qr) {
      let Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      ar(rr, Sr, Qr.OWr(), Zr), Wr(Qr)
    }

    function Ir(rr, Sr) {
      let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Zr = rr.OWr();
      Sr[Qr] = Zr[0], Sr[Qr + 1] = Zr[1], Sr[Qr + 2] = Zr[2], Sr[Qr + 3] = Zr[3], Sr[Qr + 4] = Zr[4], Sr[Qr + 5] = Zr[5], Sr[Qr + 6] = Zr[6], Sr[Qr + 7] = Zr[7], Sr[Qr + 8] = Zr[8], Sr[Qr + 9] = Zr[9], Sr[Qr + 10] = Zr[10], Sr[Qr + 11] = Zr[11], Sr[Qr + 12] = Zr[12], Sr[Qr + 13] = Zr[13], Sr[Qr + 14] = Zr[14], Sr[Qr + 15] = Zr[15]
    }

    function fr(rr, Sr) {
      const Qr = Er(rr, Sr.OWr());
      return Qr && Wr(Sr), Qr
    }

    function Er(rr, Sr) {
      const Qr = rr.OWr(),
        Zr = Qr[0],
        Wr = Qr[1],
        ar = Qr[2],
        jr = Qr[3],
        Ir = Qr[4],
        fr = Qr[5],
        Er = Qr[6],
        pr = Qr[7],
        xr = Qr[8],
        mr = Qr[9],
        Nr = Qr[10],
        Ur = Qr[11],
        tr = Qr[12],
        hr = Qr[13],
        zr = Qr[14],
        Yr = Qr[15],
        nr = Nr * Yr - zr * Ur,
        er = mr * Yr - hr * Ur,
        Kr = mr * zr - hr * Nr,
        yr = xr * Yr - tr * Ur,
        Br = xr * zr - Nr * tr,
        Tr = xr * hr - tr * mr,
        vr = +(fr * nr - Er * er + pr * Kr),
        Or = -(Ir * nr - Er * yr + pr * Br),
        Lr = +(Ir * er - fr * yr + pr * Tr),
        lr = -(Ir * Kr - fr * Br + Er * Tr),
        Xr = Zr * vr + Wr * Or + ar * Lr + jr * lr;
      if (0 === Xr) return !1;
      const Pr = 1 / Xr,
        Hr = Er * Yr - zr * pr,
        qr = fr * Yr - hr * pr,
        Rr = fr * zr - hr * Er,
        gr = Ir * Yr - tr * pr,
        Cr = Ir * zr - tr * Er,
        Mr = Ir * hr - tr * fr,
        Gr = Er * Ur - Nr * pr,
        kr = fr * Ur - mr * pr,
        Ar = fr * Nr - mr * Er,
        Vr = Ir * Ur - xr * pr,
        ir = Ir * Nr - xr * Er,
        wr = Ir * mr - xr * fr,
        cr = -(Wr * nr - ar * er + jr * Kr),
        Fr = +(Zr * nr - ar * yr + jr * Br),
        or = -(Zr * er - Wr * yr + jr * Tr),
        br = +(Zr * Kr - Wr * Br + ar * Tr),
        Jr = +(Wr * Hr - ar * qr + jr * Rr),
        Dr = -(Zr * Hr - ar * gr + jr * Cr),
        dr = +(Zr * qr - Wr * gr + jr * Mr),
        sr = -(Zr * Rr - Wr * Cr + ar * Mr),
        ur = -(Wr * Gr - ar * kr + jr * Ar),
        rS = +(Zr * Gr - ar * Vr + jr * ir),
        SS = -(Zr * kr - Wr * Vr + jr * wr),
        QS = +(Zr * Ar - Wr * ir + ar * wr);
      return Sr[0] = vr * Pr, Sr[1] = cr * Pr, Sr[2] = Jr * Pr, Sr[3] = ur * Pr, Sr[4] = Or * Pr, Sr[5] = Fr * Pr, Sr[6] = Dr * Pr, Sr[7] = rS * Pr, Sr[8] = Lr * Pr, Sr[9] = or * Pr, Sr[10] = dr * Pr, Sr[11] = SS * Pr, Sr[12] = lr * Pr, Sr[13] = br * Pr, Sr[14] = sr * Pr, Sr[15] = QS * Pr, !0
    }
    Zr._UpdateFlagSeed = 0
  },
  38560: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => tr,
      h: () => Ur,
      k: () => er,
      n: () => zr,
      q: () => xr,
      u: () => mr,
      x: () => Nr
    });
    var Zr = Qr(38569),
      Wr = Qr(38576),
      ar = Qr(38578),
      jr = Qr(38587),
      Ir = Qr(38599),
      fr = Qr(38606),
      Er = Qr(38609);
    const pr = rr => parseInt(rr.toString().replace(/\W/g, ""));
    class xr {
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = rr, this.y = Sr
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let rr = pr(this.x);
        return rr = 397 * rr ^ pr(this.y), rr
      }
      toArray(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return rr[Sr] = this.x, rr[Sr + 1] = this.y, this
      }
      dp(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return xr.FromArrayToRef(rr, Sr, this), this
      }
      OWr() {
        return [this.x, this.y]
      }
      iH(rr) {
        return this.x = rr.x, this.y = rr.y, this
      }
      Hrr(rr, Sr) {
        return this.x = rr, this.y = Sr, this
      }
      set(rr, Sr) {
        return this.Hrr(rr, Sr)
      }
      Srr(rr) {
        return this.Hrr(rr, rr)
      }
      add(rr) {
        return new xr(this.x + rr.x, this.y + rr.y)
      }
      addToRef(rr, Sr) {
        return Sr.x = this.x + rr.x, Sr.y = this.y + rr.y, Sr
      }
      addInPlace(rr) {
        return this.x += rr.x, this.y += rr.y, this
      }
      addInPlaceFromFloats(rr, Sr) {
        return this.x += rr, this.y += Sr, this
      }
      addVector3(rr) {
        return new xr(this.x + rr.x, this.y + rr.y)
      }
      subtract(rr) {
        return new xr(this.x - rr.x, this.y - rr.y)
      }
      subtractToRef(rr, Sr) {
        return Sr.x = this.x - rr.x, Sr.y = this.y - rr.y, Sr
      }
      iWr(rr) {
        return this.x -= rr.x, this.y -= rr.y, this
      }
      multiplyInPlace(rr) {
        return this.x *= rr.x, this.y *= rr.y, this
      }
      multiply(rr) {
        return new xr(this.x * rr.x, this.y * rr.y)
      }
      multiplyToRef(rr, Sr) {
        return Sr.x = this.x * rr.x, Sr.y = this.y * rr.y, Sr
      }
      multiplyByFloats(rr, Sr) {
        return new xr(this.x * rr, this.y * Sr)
      }
      divide(rr) {
        return new xr(this.x / rr.x, this.y / rr.y)
      }
      divideToRef(rr, Sr) {
        return Sr.x = this.x / rr.x, Sr.y = this.y / rr.y, Sr
      }
      divideInPlace(rr) {
        return this.x = this.x / rr.x, this.y = this.y / rr.y, this
      }
      minimizeInPlace(rr) {
        return this.minimizeInPlaceFromFloats(rr.x, rr.y)
      }
      maximizeInPlace(rr) {
        return this.maximizeInPlaceFromFloats(rr.x, rr.y)
      }
      minimizeInPlaceFromFloats(rr, Sr) {
        return this.x = Math.min(rr, this.x), this.y = Math.min(Sr, this.y), this
      }
      maximizeInPlaceFromFloats(rr, Sr) {
        return this.x = Math.max(rr, this.x), this.y = Math.max(Sr, this.y), this
      }
      subtractFromFloats(rr, Sr) {
        return new xr(this.x - rr, this.y - Sr)
      }
      subtractFromFloatsToRef(rr, Sr, Qr) {
        return Qr.x = this.x - rr, Qr.y = this.y - Sr, Qr
      }
      ph() {
        return new xr(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(rr) {
        return rr.x = -this.x, rr.y = -this.y, rr
      }
      scaleInPlace(rr) {
        return this.x *= rr, this.y *= rr, this
      }
      scale(rr) {
        return new xr(this.x * rr, this.y * rr)
      }
      scaleToRef(rr, Sr) {
        return Sr.x = this.x * rr, Sr.y = this.y * rr, Sr
      }
      scaleAndAddToRef(rr, Sr) {
        return Sr.x += this.x * rr, Sr.y += this.y * rr, Sr
      }
      equals(rr) {
        return rr && this.x === rr.x && this.y === rr.y
      }
      equalsWithEpsilon(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zr.e;
        return rr && (0, Ir.WithinEpsilon)(this.x, rr.x, Sr) && (0, Ir.WithinEpsilon)(this.y, rr.y, Sr)
      }
      ffr(rr, Sr) {
        return this.x === rr && this.y === Sr
      }
      floor() {
        return new xr(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(rr) {
        return rr.x = Math.floor(this.x), rr.y = Math.floor(this.y), rr
      }
      fract() {
        return new xr(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(rr) {
        return rr.x = this.x - Math.floor(this.x), rr.y = this.y - Math.floor(this.y), rr
      }
      rotate(rr) {
        return this.rotateToRef(rr, new xr)
      }
      rotateToRef(rr, Sr) {
        const Qr = Math.cos(rr),
          Zr = Math.sin(rr);
        return Sr.x = Qr * this.x - Zr * this.y, Sr.y = Zr * this.x + Qr * this.y, Sr
      }
      length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
      }
      lengthSquared() {
        return this.x * this.x + this.y * this.y
      }
      normalize() {
        return this.normalizeFromLength(this.length())
      }
      normalizeFromLength(rr) {
        return 0 === rr || 1 === rr ? this : this.scaleInPlace(1 / rr)
      }
      normalizeToNew() {
        const rr = new xr;
        return this.normalizeToRef(rr), rr
      }
      normalizeToRef(rr) {
        const Sr = this.length();
        return 0 === Sr || 1 === Sr ? (rr.x = this.x, rr.y = this.y, rr) : this.scaleToRef(1 / Sr, rr)
      }
      clone() {
        return new xr(this.x, this.y)
      }
      dot(rr) {
        return this.x * rr.x + this.y * rr.y
      }
      static Zero() {
        return new xr(0, 0)
      }
      static One() {
        return new xr(1, 1)
      }
      static Random() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new xr((0, Ir.RandomRange)(rr, Sr), (0, Ir.RandomRange)(rr, Sr))
      }
      static RandomToRef() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).Hrr((0, Ir.RandomRange)(rr, Sr), (0, Ir.RandomRange)(rr, Sr))
      }
      static get ZeroReadOnly() {
        return xr._ZeroReadOnly
      }
      static FromArray(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new xr(rr[Sr], rr[Sr + 1])
      }
      static FromArrayToRef(rr, Sr, Qr) {
        return Qr.x = rr[Sr], Qr.y = rr[Sr + 1], Qr
      }
      static FromFloatsToRef(rr, Sr, Qr) {
        return Qr.Hrr(rr, Sr), Qr
      }
      static CatmullRom(rr, Sr, Qr, Zr, Wr) {
        const ar = Wr * Wr,
          jr = Wr * ar,
          Ir = .5 * (2 * Sr.x + (-rr.x + Qr.x) * Wr + (2 * rr.x - 5 * Sr.x + 4 * Qr.x - Zr.x) * ar + (-rr.x + 3 * Sr.x - 3 * Qr.x + Zr.x) * jr),
          fr = .5 * (2 * Sr.y + (-rr.y + Qr.y) * Wr + (2 * rr.y - 5 * Sr.y + 4 * Qr.y - Zr.y) * ar + (-rr.y + 3 * Sr.y - 3 * Qr.y + Zr.y) * jr);
        return new xr(Ir, fr)
      }
      static ClampToRef(rr, Sr, Qr, Zr) {
        return Zr.x = (0, Ir.Clamp)(rr.x, Sr.x, Qr.x), Zr.y = (0, Ir.Clamp)(rr.y, Sr.y, Qr.y), Zr
      }
      static Clamp(rr, Sr, Qr) {
        const Zr = (0, Ir.Clamp)(rr.x, Sr.x, Qr.x),
          Wr = (0, Ir.Clamp)(rr.y, Sr.y, Qr.y);
        return new xr(Zr, Wr)
      }
      static Hermite(rr, Sr, Qr, Zr, Wr) {
        const ar = Wr * Wr,
          jr = Wr * ar,
          Ir = 2 * jr - 3 * ar + 1,
          fr = -2 * jr + 3 * ar,
          Er = jr - 2 * ar + Wr,
          pr = jr - ar,
          mr = rr.x * Ir + Qr.x * fr + Sr.x * Er + Zr.x * pr,
          Nr = rr.y * Ir + Qr.y * fr + Sr.y * Er + Zr.y * pr;
        return new xr(mr, Nr)
      }
      static Hermite1stDerivative(rr, Sr, Qr, Zr, Wr) {
        return this.Hermite1stDerivativeToRef(rr, Sr, Qr, Zr, Wr, new xr)
      }
      static Hermite1stDerivativeToRef(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = Wr * Wr;
        return ar.x = 6 * (jr - Wr) * rr.x + (3 * jr - 4 * Wr + 1) * Sr.x + 6 * (-jr + Wr) * Qr.x + (3 * jr - 2 * Wr) * Zr.x, ar.y = 6 * (jr - Wr) * rr.y + (3 * jr - 4 * Wr + 1) * Sr.y + 6 * (-jr + Wr) * Qr.y + (3 * jr - 2 * Wr) * Zr.y, ar
      }
      static Lerp(rr, Sr, Qr) {
        return xr.LerpToRef(rr, Sr, Qr, new xr)
      }
      static LerpToRef(rr, Sr, Qr, Zr) {
        return Zr.x = rr.x + (Sr.x - rr.x) * Qr, Zr.y = rr.y + (Sr.y - rr.y) * Qr, Zr
      }
      static Dot(rr, Sr) {
        return rr.x * Sr.x + rr.y * Sr.y
      }
      static Normalize(rr) {
        return xr.NormalizeToRef(rr, new xr)
      }
      static NormalizeToRef(rr, Sr) {
        return rr.normalizeToRef(Sr), Sr
      }
      static Minimize(rr, Sr) {
        const Qr = rr.x < Sr.x ? rr.x : Sr.x,
          Zr = rr.y < Sr.y ? rr.y : Sr.y;
        return new xr(Qr, Zr)
      }
      static Maximize(rr, Sr) {
        const Qr = rr.x > Sr.x ? rr.x : Sr.x,
          Zr = rr.y > Sr.y ? rr.y : Sr.y;
        return new xr(Qr, Zr)
      }
      static Transform(rr, Sr) {
        return xr.TransformToRef(rr, Sr, new xr)
      }
      static TransformToRef(rr, Sr, Qr) {
        const Zr = Sr.m,
          Wr = rr.x * Zr[0] + rr.y * Zr[4] + Zr[12],
          ar = rr.x * Zr[1] + rr.y * Zr[5] + Zr[13];
        return Qr.x = Wr, Qr.y = ar, Qr
      }
      static PointInTriangle(rr, Sr, Qr, Zr) {
        const Wr = .5 * (-Qr.y * Zr.x + Sr.y * (-Qr.x + Zr.x) + Sr.x * (Qr.y - Zr.y) + Qr.x * Zr.y),
          ar = Wr < 0 ? -1 : 1,
          jr = (Sr.y * Zr.x - Sr.x * Zr.y + (Zr.y - Sr.y) * rr.x + (Sr.x - Zr.x) * rr.y) * ar,
          Ir = (Sr.x * Qr.y - Sr.y * Qr.x + (Sr.y - Qr.y) * rr.x + (Qr.x - Sr.x) * rr.y) * ar;
        return jr > 0 && Ir > 0 && jr + Ir < 2 * Wr * ar
      }
      static Distance(rr, Sr) {
        return Math.sqrt(xr.DistanceSquared(rr, Sr))
      }
      static DistanceSquared(rr, Sr) {
        const Qr = rr.x - Sr.x,
          Zr = rr.y - Sr.y;
        return Qr * Qr + Zr * Zr
      }
      static Center(rr, Sr) {
        return xr.CenterToRef(rr, Sr, new xr)
      }
      static CenterToRef(rr, Sr, Qr) {
        return Qr.Hrr((rr.x + Sr.x) / 2, (rr.y + Sr.y) / 2)
      }
      static DistanceOfPointFromSegment(rr, Sr, Qr) {
        const Zr = xr.DistanceSquared(Sr, Qr);
        if (0 === Zr) return xr.Distance(rr, Sr);
        const Wr = Qr.subtract(Sr),
          ar = Math.max(0, Math.min(1, xr.Dot(rr.subtract(Sr), Wr) / Zr)),
          jr = Sr.add(Wr.multiplyByFloats(ar, ar));
        return xr.Distance(rr, jr)
      }
    }
    xr._V8PerformanceHack = new xr(.5, .5), xr._ZeroReadOnly = xr.Zero();
    class mr {
      get x() {
        return this._x
      }
      set x(rr) {
        this._x = rr, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(rr) {
        this._y = rr, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(rr) {
        this._z = rr, this._isDirty = !0
      }
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = rr, this._y = Sr, this._z = Qr
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "kU"
      }
      getHashCode() {
        let rr = pr(this._x);
        return rr = 397 * rr ^ pr(this._y), rr = 397 * rr ^ pr(this._z), rr
      }
      OWr() {
        return [this._x, this._y, this._z]
      }
      toArray(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return rr[Sr] = this._x, rr[Sr + 1] = this._y, rr[Sr + 2] = this._z, this
      }
      dp(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return mr.FromArrayToRef(rr, Sr, this), this
      }
      toQuaternion() {
        return Ur.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(rr) {
        return this._x += rr._x, this._y += rr._y, this._z += rr._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(rr, Sr, Qr) {
        return this._x += rr, this._y += Sr, this._z += Qr, this._isDirty = !0, this
      }
      add(rr) {
        return new mr(this._x + rr._x, this._y + rr._y, this._z + rr._z)
      }
      addToRef(rr, Sr) {
        return Sr._x = this._x + rr._x, Sr._y = this._y + rr._y, Sr._z = this._z + rr._z, Sr._isDirty = !0, Sr
      }
      iWr(rr) {
        return this._x -= rr._x, this._y -= rr._y, this._z -= rr._z, this._isDirty = !0, this
      }
      subtract(rr) {
        return new mr(this._x - rr._x, this._y - rr._y, this._z - rr._z)
      }
      subtractToRef(rr, Sr) {
        return this.subtractFromFloatsToRef(rr._x, rr._y, rr._z, Sr)
      }
      subtractFromFloats(rr, Sr, Qr) {
        return new mr(this._x - rr, this._y - Sr, this._z - Qr)
      }
      subtractFromFloatsToRef(rr, Sr, Qr, Zr) {
        return Zr._x = this._x - rr, Zr._y = this._y - Sr, Zr._z = this._z - Qr, Zr._isDirty = !0, Zr
      }
      ph() {
        return new mr(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(rr) {
        return rr._x = -1 * this._x, rr._y = -1 * this._y, rr._z = -1 * this._z, rr._isDirty = !0, rr
      }
      scaleInPlace(rr) {
        return this._x *= rr, this._y *= rr, this._z *= rr, this._isDirty = !0, this
      }
      scale(rr) {
        return new mr(this._x * rr, this._y * rr, this._z * rr)
      }
      scaleToRef(rr, Sr) {
        return Sr._x = this._x * rr, Sr._y = this._y * rr, Sr._z = this._z * rr, Sr._isDirty = !0, Sr
      }
      getNormalToRef(rr) {
        const Sr = this.length();
        let Qr = Math.acos(this._y / Sr);
        const Zr = Math.atan2(this._z, this._x);
        Qr > Math.PI / 2 ? Qr -= Math.PI / 2 : Qr += Math.PI / 2;
        const Wr = Sr * Math.sin(Qr) * Math.cos(Zr),
          ar = Sr * Math.cos(Qr),
          jr = Sr * Math.sin(Qr) * Math.sin(Zr);
        return rr.set(Wr, ar, jr), rr
      }
      applyRotationQuaternionToRef(rr, Sr) {
        const Qr = this._x,
          Zr = this._y,
          Wr = this._z,
          ar = rr._x,
          jr = rr._y,
          Ir = rr._z,
          fr = rr._w,
          Er = 2 * (jr * Wr - Ir * Zr),
          pr = 2 * (Ir * Qr - ar * Wr),
          xr = 2 * (ar * Zr - jr * Qr);
        return Sr._x = Qr + fr * Er + jr * xr - Ir * pr, Sr._y = Zr + fr * pr + Ir * Er - ar * xr, Sr._z = Wr + fr * xr + ar * pr - jr * Er, Sr._isDirty = !0, Sr
      }
      applyRotationQuaternionInPlace(rr) {
        return this.applyRotationQuaternionToRef(rr, this)
      }
      applyRotationQuaternion(rr) {
        return this.applyRotationQuaternionToRef(rr, new mr)
      }
      scaleAndAddToRef(rr, Sr) {
        return Sr._x += this._x * rr, Sr._y += this._y * rr, Sr._z += this._z * rr, Sr._isDirty = !0, Sr
      }
      projectOnPlane(rr, Sr) {
        return this.projectOnPlaneToRef(rr, Sr, new mr)
      }
      projectOnPlaneToRef(rr, Sr, Qr) {
        const Zr = rr.normal,
          Wr = rr.d,
          ar = hr.kU[0];
        this.subtractToRef(Sr, ar), ar.normalize();
        const jr = mr.Dot(ar, Zr);
        if (Math.abs(jr) < 1e-10) Qr.Srr(1 / 0);
        else {
          const rr = -(mr.Dot(Sr, Zr) + Wr) / jr,
            Ir = ar.scaleInPlace(rr);
          Sr.addToRef(Ir, Qr)
        }
        return Qr
      }
      equals(rr) {
        return rr && this._x === rr._x && this._y === rr._y && this._z === rr._z
      }
      equalsWithEpsilon(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zr.e;
        return rr && (0, Ir.WithinEpsilon)(this._x, rr._x, Sr) && (0, Ir.WithinEpsilon)(this._y, rr._y, Sr) && (0, Ir.WithinEpsilon)(this._z, rr._z, Sr)
      }
      ffr(rr, Sr, Qr) {
        return this._x === rr && this._y === Sr && this._z === Qr
      }
      multiplyInPlace(rr) {
        return this._x *= rr._x, this._y *= rr._y, this._z *= rr._z, this._isDirty = !0, this
      }
      multiply(rr) {
        return this.multiplyByFloats(rr._x, rr._y, rr._z)
      }
      multiplyToRef(rr, Sr) {
        return Sr._x = this._x * rr._x, Sr._y = this._y * rr._y, Sr._z = this._z * rr._z, Sr._isDirty = !0, Sr
      }
      multiplyByFloats(rr, Sr, Qr) {
        return new mr(this._x * rr, this._y * Sr, this._z * Qr)
      }
      divide(rr) {
        return new mr(this._x / rr._x, this._y / rr._y, this._z / rr._z)
      }
      divideToRef(rr, Sr) {
        return Sr._x = this._x / rr._x, Sr._y = this._y / rr._y, Sr._z = this._z / rr._z, Sr._isDirty = !0, Sr
      }
      divideInPlace(rr) {
        return this._x = this._x / rr._x, this._y = this._y / rr._y, this._z = this._z / rr._z, this._isDirty = !0, this
      }
      minimizeInPlace(rr) {
        return this.minimizeInPlaceFromFloats(rr._x, rr._y, rr._z)
      }
      maximizeInPlace(rr) {
        return this.maximizeInPlaceFromFloats(rr._x, rr._y, rr._z)
      }
      minimizeInPlaceFromFloats(rr, Sr, Qr) {
        return rr < this._x && (this.x = rr), Sr < this._y && (this.y = Sr), Qr < this._z && (this.z = Qr), this
      }
      maximizeInPlaceFromFloats(rr, Sr, Qr) {
        return rr > this._x && (this.x = rr), Sr > this._y && (this.y = Sr), Qr > this._z && (this.z = Qr), this
      }
      isNonUniformWithinEpsilon(rr) {
        const Sr = Math.abs(this._x),
          Qr = Math.abs(this._y);
        if (!(0, Ir.WithinEpsilon)(Sr, Qr, rr)) return !0;
        const Zr = Math.abs(this._z);
        return !(0, Ir.WithinEpsilon)(Sr, Zr, rr) || !(0, Ir.WithinEpsilon)(Qr, Zr, rr)
      }
      get isNonUniform() {
        const rr = Math.abs(this._x);
        if (rr !== Math.abs(this._y)) return !0;
        return rr !== Math.abs(this._z)
      }
      floorToRef(rr) {
        return rr._x = Math.floor(this._x), rr._y = Math.floor(this._y), rr._z = Math.floor(this._z), rr._isDirty = !0, rr
      }
      floor() {
        return new mr(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(rr) {
        return rr._x = this._x - Math.floor(this._x), rr._y = this._y - Math.floor(this._y), rr._z = this._z - Math.floor(this._z), rr._isDirty = !0, rr
      }
      fract() {
        return new mr(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
      }
      length() {
        return Math.sqrt(this.lengthSquared())
      }
      lengthSquared() {
        return this._x * this._x + this._y * this._y + this._z * this._z
      }
      get hasAZeroComponent() {
        return this._x * this._y * this._z === 0
      }
      normalize() {
        return this.normalizeFromLength(this.length())
      }
      reorderInPlace(rr) {
        if ("xyz" === (rr = rr.toLowerCase())) return this;
        const Sr = hr.kU[0].iH(this);
        return this.x = Sr[rr[0]], this.y = Sr[rr[1]], this.z = Sr[rr[2]], this
      }
      rotateByQuaternionToRef(rr, Sr) {
        return rr.toRotationMatrix(hr.Matrix[0]), mr.TransformCoordinatesToRef(this, hr.Matrix[0], Sr), Sr
      }
      rotateByQuaternionAroundPointToRef(rr, Sr, Qr) {
        return this.subtractToRef(Sr, hr.kU[0]), hr.kU[0].rotateByQuaternionToRef(rr, hr.kU[0]), Sr.addToRef(hr.kU[0], Qr), Qr
      }
      cross(rr) {
        return mr.CrossToRef(this, rr, new mr)
      }
      normalizeFromLength(rr) {
        return 0 === rr || 1 === rr ? this : this.scaleInPlace(1 / rr)
      }
      normalizeToNew() {
        return this.normalizeToRef(new mr)
      }
      normalizeToRef(rr) {
        const Sr = this.length();
        return 0 === Sr || 1 === Sr ? (rr._x = this._x, rr._y = this._y, rr._z = this._z, rr._isDirty = !0, rr) : this.scaleToRef(1 / Sr, rr)
      }
      clone() {
        return new mr(this._x, this._y, this._z)
      }
      iH(rr) {
        return this.Hrr(rr._x, rr._y, rr._z)
      }
      Hrr(rr, Sr, Qr) {
        return this._x = rr, this._y = Sr, this._z = Qr, this._isDirty = !0, this
      }
      set(rr, Sr, Qr) {
        return this.Hrr(rr, Sr, Qr)
      }
      Srr(rr) {
        return this._x = this._y = this._z = rr, this._isDirty = !0, this
      }
      static GetClipFactor(rr, Sr, Qr, Zr) {
        const Wr = mr.Dot(rr, Qr);
        return (Wr - Zr) / (Wr - mr.Dot(Sr, Qr))
      }
      static GetAngleBetweenVectors(rr, Sr, Qr) {
        const Zr = rr.normalizeToRef(hr.kU[1]),
          Wr = Sr.normalizeToRef(hr.kU[2]);
        let ar = mr.Dot(Zr, Wr);
        ar = (0, Ir.Clamp)(ar, -1, 1);
        const jr = Math.acos(ar),
          fr = hr.kU[3];
        return mr.CrossToRef(Zr, Wr, fr), mr.Dot(fr, Qr) > 0 ? isNaN(jr) ? 0 : jr : isNaN(jr) ? -Math.PI : -Math.acos(ar)
      }
      static GetAngleBetweenVectorsOnPlane(rr, Sr, Qr) {
        hr.kU[0].iH(rr);
        const Zr = hr.kU[0];
        hr.kU[1].iH(Sr);
        const Wr = hr.kU[1];
        hr.kU[2].iH(Qr);
        const ar = hr.kU[2],
          jr = hr.kU[3],
          fr = hr.kU[4];
        Zr.normalize(), Wr.normalize(), ar.normalize(), mr.CrossToRef(ar, Zr, jr), mr.CrossToRef(jr, ar, fr);
        const Er = Math.atan2(mr.Dot(Wr, jr), mr.Dot(Wr, fr));
        return (0, Ir.NormalizeRadians)(Er)
      }
      static PitchYawRollToMoveBetweenPointsToRef(rr, Sr, Qr) {
        const Zr = zr.kU[0];
        return Sr.subtractToRef(rr, Zr), Qr._y = Math.atan2(Zr.x, Zr.z) || 0, Qr._x = Math.atan2(Math.sqrt(Zr.x ** 2 + Zr.z ** 2), Zr.y) || 0, Qr._z = 0, Qr._isDirty = !0, Qr
      }
      static PitchYawRollToMoveBetweenPoints(rr, Sr) {
        const Qr = mr.Zero();
        return mr.PitchYawRollToMoveBetweenPointsToRef(rr, Sr, Qr)
      }
      static SlerpToRef(rr, Sr, Qr, Wr) {
        Qr = (0, Ir.Clamp)(Qr, 0, 1);
        const ar = hr.kU[0],
          jr = hr.kU[1];
        ar.iH(rr);
        const fr = ar.length();
        ar.normalizeFromLength(fr), jr.iH(Sr);
        const Er = jr.length();
        jr.normalizeFromLength(Er);
        const pr = mr.Dot(ar, jr);
        let xr, Nr;
        if (pr < 1 - Zr.e) {
          const rr = Math.acos(pr),
            Sr = 1 / Math.sin(rr);
          xr = Math.sin((1 - Qr) * rr) * Sr, Nr = Math.sin(Qr * rr) * Sr
        } else xr = 1 - Qr, Nr = Qr;
        return ar.scaleInPlace(xr), jr.scaleInPlace(Nr), Wr.iH(ar).addInPlace(jr), Wr.scaleInPlace((0, Ir.Lerp)(fr, Er, Qr)), Wr
      }
      static SmoothToRef(rr, Sr, Qr, Zr, Wr) {
        return mr.SlerpToRef(rr, Sr, 0 === Zr ? 1 : Qr / Zr, Wr), Wr
      }
      static FromArray(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new mr(rr[Sr], rr[Sr + 1], rr[Sr + 2])
      }
      static FromFloatArray(rr, Sr) {
        return mr.FromArray(rr, Sr)
      }
      static FromArrayToRef(rr, Sr, Qr) {
        return Qr._x = rr[Sr], Qr._y = rr[Sr + 1], Qr._z = rr[Sr + 2], Qr._isDirty = !0, Qr
      }
      static FromFloatArrayToRef(rr, Sr, Qr) {
        return mr.FromArrayToRef(rr, Sr, Qr)
      }
      static FromFloatsToRef(rr, Sr, Qr, Zr) {
        return Zr.Hrr(rr, Sr, Qr), Zr
      }
      static Zero() {
        return new mr(0, 0, 0)
      }
      static One() {
        return new mr(1, 1, 1)
      }
      static Up() {
        return new mr(0, 1, 0)
      }
      static get UpReadOnly() {
        return mr._UpReadOnly
      }
      static get DownReadOnly() {
        return mr._DownReadOnly
      }
      static get RightReadOnly() {
        return mr._RightReadOnly
      }
      static get LeftReadOnly() {
        return mr._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return mr._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return mr._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return mr._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return mr._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return mr._ZeroReadOnly
      }
      static get OneReadOnly() {
        return mr._OneReadOnly
      }
      static Down() {
        return new mr(0, -1, 0)
      }
      static Forward() {
        return new mr(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new mr(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new mr(1, 0, 0)
      }
      static Left() {
        return new mr(-1, 0, 0)
      }
      static Random() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new mr((0, Ir.RandomRange)(rr, Sr), (0, Ir.RandomRange)(rr, Sr), (0, Ir.RandomRange)(rr, Sr))
      }
      static RandomToRef() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).Hrr((0, Ir.RandomRange)(rr, Sr), (0, Ir.RandomRange)(rr, Sr), (0, Ir.RandomRange)(rr, Sr))
      }
      static TransformCoordinates(rr, Sr) {
        const Qr = mr.Zero();
        return mr.TransformCoordinatesToRef(rr, Sr, Qr), Qr
      }
      static TransformCoordinatesToRef(rr, Sr, Qr) {
        return mr.TransformCoordinatesFromFloatsToRef(rr._x, rr._y, rr._z, Sr, Qr), Qr
      }
      static TransformCoordinatesFromFloatsToRef(rr, Sr, Qr, Zr, Wr) {
        const ar = Zr.m,
          jr = rr * ar[0] + Sr * ar[4] + Qr * ar[8] + ar[12],
          Ir = rr * ar[1] + Sr * ar[5] + Qr * ar[9] + ar[13],
          fr = rr * ar[2] + Sr * ar[6] + Qr * ar[10] + ar[14],
          Er = 1 / (rr * ar[3] + Sr * ar[7] + Qr * ar[11] + ar[15]);
        return Wr._x = jr * Er, Wr._y = Ir * Er, Wr._z = fr * Er, Wr._isDirty = !0, Wr
      }
      static TransformNormal(rr, Sr) {
        const Qr = mr.Zero();
        return mr.TransformNormalToRef(rr, Sr, Qr), Qr
      }
      static TransformNormalToRef(rr, Sr, Qr) {
        return this.TransformNormalFromFloatsToRef(rr._x, rr._y, rr._z, Sr, Qr), Qr
      }
      static TransformNormalFromFloatsToRef(rr, Sr, Qr, Zr, Wr) {
        const ar = Zr.m;
        return Wr._x = rr * ar[0] + Sr * ar[4] + Qr * ar[8], Wr._y = rr * ar[1] + Sr * ar[5] + Qr * ar[9], Wr._z = rr * ar[2] + Sr * ar[6] + Qr * ar[10], Wr._isDirty = !0, Wr
      }
      static CatmullRom(rr, Sr, Qr, Zr, Wr) {
        const ar = Wr * Wr,
          jr = Wr * ar,
          Ir = .5 * (2 * Sr._x + (-rr._x + Qr._x) * Wr + (2 * rr._x - 5 * Sr._x + 4 * Qr._x - Zr._x) * ar + (-rr._x + 3 * Sr._x - 3 * Qr._x + Zr._x) * jr),
          fr = .5 * (2 * Sr._y + (-rr._y + Qr._y) * Wr + (2 * rr._y - 5 * Sr._y + 4 * Qr._y - Zr._y) * ar + (-rr._y + 3 * Sr._y - 3 * Qr._y + Zr._y) * jr),
          Er = .5 * (2 * Sr._z + (-rr._z + Qr._z) * Wr + (2 * rr._z - 5 * Sr._z + 4 * Qr._z - Zr._z) * ar + (-rr._z + 3 * Sr._z - 3 * Qr._z + Zr._z) * jr);
        return new mr(Ir, fr, Er)
      }
      static Clamp(rr, Sr, Qr) {
        const Zr = new mr;
        return mr.ClampToRef(rr, Sr, Qr, Zr), Zr
      }
      static ClampToRef(rr, Sr, Qr, Zr) {
        let Wr = rr._x;
        Wr = Wr > Qr._x ? Qr._x : Wr, Wr = Wr < Sr._x ? Sr._x : Wr;
        let ar = rr._y;
        ar = ar > Qr._y ? Qr._y : ar, ar = ar < Sr._y ? Sr._y : ar;
        let jr = rr._z;
        return jr = jr > Qr._z ? Qr._z : jr, jr = jr < Sr._z ? Sr._z : jr, Zr.Hrr(Wr, ar, jr), Zr
      }
      static CheckExtends(rr, Sr, Qr) {
        Sr.minimizeInPlace(rr), Qr.maximizeInPlace(rr)
      }
      static Hermite(rr, Sr, Qr, Zr, Wr) {
        const ar = Wr * Wr,
          jr = Wr * ar,
          Ir = 2 * jr - 3 * ar + 1,
          fr = -2 * jr + 3 * ar,
          Er = jr - 2 * ar + Wr,
          pr = jr - ar,
          xr = rr._x * Ir + Qr._x * fr + Sr._x * Er + Zr._x * pr,
          Nr = rr._y * Ir + Qr._y * fr + Sr._y * Er + Zr._y * pr,
          Ur = rr._z * Ir + Qr._z * fr + Sr._z * Er + Zr._z * pr;
        return new mr(xr, Nr, Ur)
      }
      static Hermite1stDerivative(rr, Sr, Qr, Zr, Wr) {
        const ar = new mr;
        return this.Hermite1stDerivativeToRef(rr, Sr, Qr, Zr, Wr, ar), ar
      }
      static Hermite1stDerivativeToRef(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = Wr * Wr;
        return ar._x = 6 * (jr - Wr) * rr._x + (3 * jr - 4 * Wr + 1) * Sr._x + 6 * (-jr + Wr) * Qr._x + (3 * jr - 2 * Wr) * Zr._x, ar._y = 6 * (jr - Wr) * rr._y + (3 * jr - 4 * Wr + 1) * Sr._y + 6 * (-jr + Wr) * Qr._y + (3 * jr - 2 * Wr) * Zr._y, ar._z = 6 * (jr - Wr) * rr._z + (3 * jr - 4 * Wr + 1) * Sr._z + 6 * (-jr + Wr) * Qr._z + (3 * jr - 2 * Wr) * Zr._z, ar._isDirty = !0, ar
      }
      static Lerp(rr, Sr, Qr) {
        const Zr = new mr(0, 0, 0);
        return mr.LerpToRef(rr, Sr, Qr, Zr), Zr
      }
      static LerpToRef(rr, Sr, Qr, Zr) {
        return Zr._x = rr._x + (Sr._x - rr._x) * Qr, Zr._y = rr._y + (Sr._y - rr._y) * Qr, Zr._z = rr._z + (Sr._z - rr._z) * Qr, Zr._isDirty = !0, Zr
      }
      static Dot(rr, Sr) {
        return rr._x * Sr._x + rr._y * Sr._y + rr._z * Sr._z
      }
      dot(rr) {
        return this._x * rr._x + this._y * rr._y + this._z * rr._z
      }
      static Cross(rr, Sr) {
        const Qr = new mr;
        return mr.CrossToRef(rr, Sr, Qr), Qr
      }
      static CrossToRef(rr, Sr, Qr) {
        const Zr = rr._y * Sr._z - rr._z * Sr._y,
          Wr = rr._z * Sr._x - rr._x * Sr._z,
          ar = rr._x * Sr._y - rr._y * Sr._x;
        return Qr.Hrr(Zr, Wr, ar), Qr
      }
      static Normalize(rr) {
        const Sr = mr.Zero();
        return mr.NormalizeToRef(rr, Sr), Sr
      }
      static NormalizeToRef(rr, Sr) {
        return rr.normalizeToRef(Sr), Sr
      }
      static Project(rr, Sr, Qr, Zr) {
        const Wr = new mr;
        return mr.ProjectToRef(rr, Sr, Qr, Zr, Wr), Wr
      }
      static ProjectToRef(rr, Sr, Qr, Zr, Wr) {
        const ar = Zr.width,
          Ir = Zr.height,
          fr = Zr.x,
          Er = Zr.y,
          pr = hr.Matrix[1],
          xr = jr.b.LastCreatedEngine?.isNDCHalfZRange,
          Nr = xr ? 1 : .5,
          Ur = xr ? 0 : .5;
        tr.FromValuesToRef(ar / 2, 0, 0, 0, 0, -Ir / 2, 0, 0, 0, 0, Nr, 0, fr + ar / 2, Ir / 2 + Er, Ur, 1, pr);
        const zr = hr.Matrix[0];
        return Sr.multiplyToRef(Qr, zr), zr.multiplyToRef(pr, zr), mr.TransformCoordinatesToRef(rr, zr, Wr), Wr
      }
      static Reflect(rr, Sr) {
        return this.ReflectToRef(rr, Sr, new mr)
      }
      static ReflectToRef(rr, Sr, Qr) {
        const Zr = zr.kU[0];
        return Zr.iH(Sr).scaleInPlace(2 * mr.Dot(rr, Sr)), Qr.iH(rr).iWr(Zr)
      }
      static UnprojectFromTransform(rr, Sr, Qr, Zr, Wr) {
        return this.Unproject(rr, Sr, Qr, Zr, Wr, tr.IdentityReadOnly)
      }
      static Unproject(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = new mr;
        return mr.UnprojectToRef(rr, Sr, Qr, Zr, Wr, ar, jr), jr
      }
      static UnprojectToRef(rr, Sr, Qr, Zr, Wr, ar, jr) {
        return mr.UnprojectFloatsToRef(rr._x, rr._y, rr._z, Sr, Qr, Zr, Wr, ar, jr), jr
      }
      static UnprojectFloatsToRef(rr, Sr, Qr, Zr, Wr, ar, Ir, fr, Er) {
        const pr = hr.Matrix[0];
        ar.multiplyToRef(Ir, pr), pr.multiplyToRef(fr, pr), pr.invert();
        const xr = hr.kU[0];
        return xr.x = rr / Zr * 2 - 1, xr.y = -(Sr / Wr * 2 - 1), jr.b.LastCreatedEngine?.isNDCHalfZRange ? xr.z = Qr : xr.z = 2 * Qr - 1, mr.TransformCoordinatesToRef(xr, pr, Er), Er
      }
      static Minimize(rr, Sr) {
        const Qr = new mr;
        return Qr.iH(rr), Qr.minimizeInPlace(Sr), Qr
      }
      static Maximize(rr, Sr) {
        const Qr = new mr;
        return Qr.iH(rr), Qr.maximizeInPlace(Sr), Qr
      }
      static Distance(rr, Sr) {
        return Math.sqrt(mr.DistanceSquared(rr, Sr))
      }
      static DistanceSquared(rr, Sr) {
        const Qr = rr._x - Sr._x,
          Zr = rr._y - Sr._y,
          Wr = rr._z - Sr._z;
        return Qr * Qr + Zr * Zr + Wr * Wr
      }
      static ProjectOnTriangleToRef(rr, Sr, Qr, Wr, ar) {
        const jr = hr.kU[0],
          fr = hr.kU[1],
          Er = hr.kU[2],
          pr = hr.kU[3],
          xr = hr.kU[4];
        Qr.subtractToRef(Sr, jr), Wr.subtractToRef(Sr, fr), Wr.subtractToRef(Qr, Er);
        const Nr = jr.length(),
          Ur = fr.length(),
          tr = Er.length();
        if (Nr < Zr.e || Ur < Zr.e || tr < Zr.e) return ar.iH(Sr), mr.Distance(rr, Sr);
        rr.subtractToRef(Sr, xr), mr.CrossToRef(jr, fr, pr);
        const zr = pr.length();
        if (zr < Zr.e) return ar.iH(Sr), mr.Distance(rr, Sr);
        pr.normalizeFromLength(zr);
        let Yr = xr.length();
        if (Yr < Zr.e) return ar.iH(Sr), 0;
        xr.normalizeFromLength(Yr);
        const nr = mr.Dot(pr, xr),
          er = hr.kU[5],
          Kr = hr.kU[6];
        er.iH(pr).scaleInPlace(-Yr * nr), Kr.iH(rr).addInPlace(er);
        const yr = hr.kU[4],
          Br = hr.kU[5],
          Tr = hr.kU[7],
          vr = hr.kU[8];
        yr.iH(jr).scaleInPlace(1 / Nr), vr.iH(fr).scaleInPlace(1 / Ur), yr.addInPlace(vr).scaleInPlace(-1), Br.iH(jr).scaleInPlace(-1 / Nr), vr.iH(Er).scaleInPlace(1 / tr), Br.addInPlace(vr).scaleInPlace(-1), Tr.iH(Er).scaleInPlace(-1 / tr), vr.iH(fr).scaleInPlace(-1 / Ur), Tr.addInPlace(vr).scaleInPlace(-1);
        const Or = hr.kU[9];
        let Lr;
        Or.iH(Kr).iWr(Sr), mr.CrossToRef(yr, Or, vr), Lr = mr.Dot(vr, pr);
        const lr = Lr;
        Or.iH(Kr).iWr(Qr), mr.CrossToRef(Br, Or, vr), Lr = mr.Dot(vr, pr);
        const Xr = Lr;
        Or.iH(Kr).iWr(Wr), mr.CrossToRef(Tr, Or, vr), Lr = mr.Dot(vr, pr);
        const Pr = Lr,
          Hr = hr.kU[10];
        let qr, Rr;
        lr > 0 && Xr < 0 ? (Hr.iH(jr), qr = Sr, Rr = Qr) : Xr > 0 && Pr < 0 ? (Hr.iH(Er), qr = Qr, Rr = Wr) : (Hr.iH(fr).scaleInPlace(-1), qr = Wr, Rr = Sr);
        const gr = hr.kU[9],
          Cr = hr.kU[4];
        qr.subtractToRef(Kr, vr), Rr.subtractToRef(Kr, gr), mr.CrossToRef(vr, gr, Cr);
        if (!(mr.Dot(Cr, pr) < 0)) return ar.iH(Kr), Math.abs(Yr * nr);
        const Mr = hr.kU[5];
        mr.CrossToRef(Hr, Cr, Mr), Mr.normalize();
        const Gr = hr.kU[9];
        Gr.iH(qr).iWr(Kr);
        const kr = Gr.length();
        if (kr < Zr.e) return ar.iH(qr), mr.Distance(rr, qr);
        Gr.normalizeFromLength(kr);
        const Ar = mr.Dot(Mr, Gr),
          Vr = hr.kU[7];
        Vr.iH(Kr).addInPlace(Mr.scaleInPlace(kr * Ar)), vr.iH(Vr).iWr(qr), Yr = Hr.length(), Hr.normalizeFromLength(Yr);
        let ir = mr.Dot(vr, Hr) / Math.max(Yr, Zr.e);
        return ir = (0, Ir.Clamp)(ir, 0, 1), Vr.iH(qr).addInPlace(Hr.scaleInPlace(ir * Yr)), ar.iH(Vr), mr.Distance(rr, Vr)
      }
      static Center(rr, Sr) {
        return mr.CenterToRef(rr, Sr, mr.Zero())
      }
      static CenterToRef(rr, Sr, Qr) {
        return Qr.Hrr((rr._x + Sr._x) / 2, (rr._y + Sr._y) / 2, (rr._z + Sr._z) / 2)
      }
      static RotationFromAxis(rr, Sr, Qr) {
        const Zr = new mr;
        return mr.RotationFromAxisToRef(rr, Sr, Qr, Zr), Zr
      }
      static RotationFromAxisToRef(rr, Sr, Qr, Zr) {
        const Wr = hr.Quaternion[0];
        return Ur.RotationQuaternionFromAxisToRef(rr, Sr, Qr, Wr), Wr.toEulerAnglesToRef(Zr), Zr
      }
    }
    mr._V8PerformanceHack = new mr(.5, .5, .5), mr._UpReadOnly = mr.Up(), mr._DownReadOnly = mr.Down(), mr._LeftHandedForwardReadOnly = mr.Forward(!1), mr._RightHandedForwardReadOnly = mr.Forward(!0), mr._LeftHandedBackwardReadOnly = mr.Backward(!1), mr._RightHandedBackwardReadOnly = mr.Backward(!0), mr._RightReadOnly = mr.Right(), mr._LeftReadOnly = mr.Left(), mr._ZeroReadOnly = mr.Zero(), mr._OneReadOnly = mr.One();
    class Nr {
      get x() {
        return this._x
      }
      set x(rr) {
        this._x = rr, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(rr) {
        this._y = rr, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(rr) {
        this._z = rr, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(rr) {
        this._w = rr, this._isDirty = !0
      }
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = rr, this._y = Sr, this._z = Qr, this._w = Zr
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let rr = pr(this._x);
        return rr = 397 * rr ^ pr(this._y), rr = 397 * rr ^ pr(this._z), rr = 397 * rr ^ pr(this._w), rr
      }
      OWr() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(rr, Sr) {
        return void 0 === Sr && (Sr = 0), rr[Sr] = this._x, rr[Sr + 1] = this._y, rr[Sr + 2] = this._z, rr[Sr + 3] = this._w, this
      }
      dp(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Nr.FromArrayToRef(rr, Sr, this), this
      }
      addInPlace(rr) {
        return this.x += rr._x, this.y += rr._y, this.z += rr._z, this.w += rr._w, this
      }
      addInPlaceFromFloats(rr, Sr, Qr, Zr) {
        return this.x += rr, this.y += Sr, this.z += Qr, this.w += Zr, this
      }
      add(rr) {
        return new Nr(this._x + rr.x, this._y + rr.y, this._z + rr.z, this._w + rr.w)
      }
      addToRef(rr, Sr) {
        return Sr.x = this._x + rr.x, Sr.y = this._y + rr.y, Sr.z = this._z + rr.z, Sr.w = this._w + rr.w, Sr
      }
      iWr(rr) {
        return this.x -= rr.x, this.y -= rr.y, this.z -= rr.z, this.w -= rr.w, this
      }
      subtract(rr) {
        return new Nr(this._x - rr.x, this._y - rr.y, this._z - rr.z, this._w - rr.w)
      }
      subtractToRef(rr, Sr) {
        return Sr.x = this._x - rr.x, Sr.y = this._y - rr.y, Sr.z = this._z - rr.z, Sr.w = this._w - rr.w, Sr
      }
      subtractFromFloats(rr, Sr, Qr, Zr) {
        return new Nr(this._x - rr, this._y - Sr, this._z - Qr, this._w - Zr)
      }
      subtractFromFloatsToRef(rr, Sr, Qr, Zr, Wr) {
        return Wr.x = this._x - rr, Wr.y = this._y - Sr, Wr.z = this._z - Qr, Wr.w = this._w - Zr, Wr
      }
      ph() {
        return new Nr(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(rr) {
        return rr.x = -this._x, rr.y = -this._y, rr.z = -this._z, rr.w = -this._w, rr
      }
      scaleInPlace(rr) {
        return this.x *= rr, this.y *= rr, this.z *= rr, this.w *= rr, this
      }
      scale(rr) {
        return new Nr(this._x * rr, this._y * rr, this._z * rr, this._w * rr)
      }
      scaleToRef(rr, Sr) {
        return Sr.x = this._x * rr, Sr.y = this._y * rr, Sr.z = this._z * rr, Sr.w = this._w * rr, Sr
      }
      scaleAndAddToRef(rr, Sr) {
        return Sr.x += this._x * rr, Sr.y += this._y * rr, Sr.z += this._z * rr, Sr.w += this._w * rr, Sr
      }
      equals(rr) {
        return rr && this._x === rr.x && this._y === rr.y && this._z === rr.z && this._w === rr.w
      }
      equalsWithEpsilon(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zr.e;
        return rr && (0, Ir.WithinEpsilon)(this._x, rr.x, Sr) && (0, Ir.WithinEpsilon)(this._y, rr.y, Sr) && (0, Ir.WithinEpsilon)(this._z, rr.z, Sr) && (0, Ir.WithinEpsilon)(this._w, rr.w, Sr)
      }
      ffr(rr, Sr, Qr, Zr) {
        return this._x === rr && this._y === Sr && this._z === Qr && this._w === Zr
      }
      multiplyInPlace(rr) {
        return this.x *= rr.x, this.y *= rr.y, this.z *= rr.z, this.w *= rr.w, this
      }
      multiply(rr) {
        return new Nr(this._x * rr.x, this._y * rr.y, this._z * rr.z, this._w * rr.w)
      }
      multiplyToRef(rr, Sr) {
        return Sr.x = this._x * rr.x, Sr.y = this._y * rr.y, Sr.z = this._z * rr.z, Sr.w = this._w * rr.w, Sr
      }
      multiplyByFloats(rr, Sr, Qr, Zr) {
        return new Nr(this._x * rr, this._y * Sr, this._z * Qr, this._w * Zr)
      }
      divide(rr) {
        return new Nr(this._x / rr.x, this._y / rr.y, this._z / rr.z, this._w / rr.w)
      }
      divideToRef(rr, Sr) {
        return Sr.x = this._x / rr.x, Sr.y = this._y / rr.y, Sr.z = this._z / rr.z, Sr.w = this._w / rr.w, Sr
      }
      divideInPlace(rr) {
        return this.divideToRef(rr, this)
      }
      minimizeInPlace(rr) {
        return rr.x < this._x && (this.x = rr.x), rr.y < this._y && (this.y = rr.y), rr.z < this._z && (this.z = rr.z), rr.w < this._w && (this.w = rr.w), this
      }
      maximizeInPlace(rr) {
        return rr.x > this._x && (this.x = rr.x), rr.y > this._y && (this.y = rr.y), rr.z > this._z && (this.z = rr.z), rr.w > this._w && (this.w = rr.w), this
      }
      minimizeInPlaceFromFloats(rr, Sr, Qr, Zr) {
        return this.x = Math.min(rr, this._x), this.y = Math.min(Sr, this._y), this.z = Math.min(Qr, this._z), this.w = Math.min(Zr, this._w), this
      }
      maximizeInPlaceFromFloats(rr, Sr, Qr, Zr) {
        return this.x = Math.max(rr, this._x), this.y = Math.max(Sr, this._y), this.z = Math.max(Qr, this._z), this.w = Math.max(Zr, this._w), this
      }
      floorToRef(rr) {
        return rr.x = Math.floor(this._x), rr.y = Math.floor(this._y), rr.z = Math.floor(this._z), rr.w = Math.floor(this._w), rr
      }
      floor() {
        return new Nr(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(rr) {
        return rr.x = this._x - Math.floor(this._x), rr.y = this._y - Math.floor(this._y), rr.z = this._z - Math.floor(this._z), rr.w = this._w - Math.floor(this._w), rr
      }
      fract() {
        return new Nr(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
      }
      length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
      }
      lengthSquared() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
      }
      normalize() {
        return this.normalizeFromLength(this.length())
      }
      normalizeFromLength(rr) {
        return 0 === rr || 1 === rr ? this : this.scaleInPlace(1 / rr)
      }
      normalizeToNew() {
        return this.normalizeToRef(new Nr)
      }
      normalizeToRef(rr) {
        const Sr = this.length();
        return 0 === Sr || 1 === Sr ? (rr.x = this._x, rr.y = this._y, rr.z = this._z, rr.w = this._w, rr) : this.scaleToRef(1 / Sr, rr)
      }
      toVector3() {
        return new mr(this._x, this._y, this._z)
      }
      clone() {
        return new Nr(this._x, this._y, this._z, this._w)
      }
      iH(rr) {
        return this.x = rr.x, this.y = rr.y, this.z = rr.z, this.w = rr.w, this
      }
      Hrr(rr, Sr, Qr, Zr) {
        return this.x = rr, this.y = Sr, this.z = Qr, this.w = Zr, this
      }
      set(rr, Sr, Qr, Zr) {
        return this.Hrr(rr, Sr, Qr, Zr)
      }
      Srr(rr) {
        return this.x = this.y = this.z = this.w = rr, this
      }
      dot(rr) {
        return this._x * rr.x + this._y * rr.y + this._z * rr.z + this._w * rr.w
      }
      static FromArray(rr, Sr) {
        return Sr || (Sr = 0), new Nr(rr[Sr], rr[Sr + 1], rr[Sr + 2], rr[Sr + 3])
      }
      static FromArrayToRef(rr, Sr, Qr) {
        return Qr.x = rr[Sr], Qr.y = rr[Sr + 1], Qr.z = rr[Sr + 2], Qr.w = rr[Sr + 3], Qr
      }
      static FromFloatArrayToRef(rr, Sr, Qr) {
        return Nr.FromArrayToRef(rr, Sr, Qr), Qr
      }
      static FromFloatsToRef(rr, Sr, Qr, Zr, Wr) {
        return Wr.x = rr, Wr.y = Sr, Wr.z = Qr, Wr.w = Zr, Wr
      }
      static Zero() {
        return new Nr(0, 0, 0, 0)
      }
      static One() {
        return new Nr(1, 1, 1, 1)
      }
      static Random() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Nr((0, Ir.RandomRange)(rr, Sr), (0, Ir.RandomRange)(rr, Sr), (0, Ir.RandomRange)(rr, Sr), (0, Ir.RandomRange)(rr, Sr))
      }
      static RandomToRef() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Qr = arguments.length > 2 ? arguments[2] : void 0;
        return Qr.x = (0, Ir.RandomRange)(rr, Sr), Qr.y = (0, Ir.RandomRange)(rr, Sr), Qr.z = (0, Ir.RandomRange)(rr, Sr), Qr.w = (0, Ir.RandomRange)(rr, Sr), Qr
      }
      static Clamp(rr, Sr, Qr) {
        return Nr.ClampToRef(rr, Sr, Qr, new Nr)
      }
      static ClampToRef(rr, Sr, Qr, Zr) {
        return Zr.x = (0, Ir.Clamp)(rr.x, Sr.x, Qr.x), Zr.y = (0, Ir.Clamp)(rr.y, Sr.y, Qr.y), Zr.z = (0, Ir.Clamp)(rr.z, Sr.z, Qr.z), Zr.w = (0, Ir.Clamp)(rr.w, Sr.w, Qr.w), Zr
      }
      static CheckExtends(rr, Sr, Qr) {
        Sr.minimizeInPlace(rr), Qr.maximizeInPlace(rr)
      }
      static get ZeroReadOnly() {
        return Nr._ZeroReadOnly
      }
      static Normalize(rr) {
        return Nr.NormalizeToRef(rr, new Nr)
      }
      static NormalizeToRef(rr, Sr) {
        return rr.normalizeToRef(Sr), Sr
      }
      static Minimize(rr, Sr) {
        const Qr = new Nr;
        return Qr.iH(rr), Qr.minimizeInPlace(Sr), Qr
      }
      static Maximize(rr, Sr) {
        const Qr = new Nr;
        return Qr.iH(rr), Qr.maximizeInPlace(Sr), Qr
      }
      static Distance(rr, Sr) {
        return Math.sqrt(Nr.DistanceSquared(rr, Sr))
      }
      static DistanceSquared(rr, Sr) {
        const Qr = rr.x - Sr.x,
          Zr = rr.y - Sr.y,
          Wr = rr.z - Sr.z,
          ar = rr.w - Sr.w;
        return Qr * Qr + Zr * Zr + Wr * Wr + ar * ar
      }
      static Center(rr, Sr) {
        return Nr.CenterToRef(rr, Sr, new Nr)
      }
      static CenterToRef(rr, Sr, Qr) {
        return Qr.x = (rr.x + Sr.x) / 2, Qr.y = (rr.y + Sr.y) / 2, Qr.z = (rr.z + Sr.z) / 2, Qr.w = (rr.w + Sr.w) / 2, Qr
      }
      static TransformCoordinates(rr, Sr) {
        return Nr.TransformCoordinatesToRef(rr, Sr, new Nr)
      }
      static TransformCoordinatesToRef(rr, Sr, Qr) {
        return Nr.TransformCoordinatesFromFloatsToRef(rr._x, rr._y, rr._z, Sr, Qr), Qr
      }
      static TransformCoordinatesFromFloatsToRef(rr, Sr, Qr, Zr, Wr) {
        const ar = Zr.m,
          jr = rr * ar[0] + Sr * ar[4] + Qr * ar[8] + ar[12],
          Ir = rr * ar[1] + Sr * ar[5] + Qr * ar[9] + ar[13],
          fr = rr * ar[2] + Sr * ar[6] + Qr * ar[10] + ar[14],
          Er = rr * ar[3] + Sr * ar[7] + Qr * ar[11] + ar[15];
        return Wr.x = jr, Wr.y = Ir, Wr.z = fr, Wr.w = Er, Wr
      }
      static TransformNormal(rr, Sr) {
        return Nr.TransformNormalToRef(rr, Sr, new Nr)
      }
      static TransformNormalToRef(rr, Sr, Qr) {
        const Zr = Sr.m,
          Wr = rr.x * Zr[0] + rr.y * Zr[4] + rr.z * Zr[8],
          ar = rr.x * Zr[1] + rr.y * Zr[5] + rr.z * Zr[9],
          jr = rr.x * Zr[2] + rr.y * Zr[6] + rr.z * Zr[10];
        return Qr.x = Wr, Qr.y = ar, Qr.z = jr, Qr.w = rr.w, Qr
      }
      static TransformNormalFromFloatsToRef(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = Wr.m;
        return ar.x = rr * jr[0] + Sr * jr[4] + Qr * jr[8], ar.y = rr * jr[1] + Sr * jr[5] + Qr * jr[9], ar.z = rr * jr[2] + Sr * jr[6] + Qr * jr[10], ar.w = Zr, ar
      }
      static FromVector3(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Nr(rr._x, rr._y, rr._z, Sr)
      }
      static Dot(rr, Sr) {
        return rr.x * Sr.x + rr.y * Sr.y + rr.z * Sr.z + rr.w * Sr.w
      }
    }
    Nr._V8PerformanceHack = new Nr(.5, .5, .5, .5), Nr._ZeroReadOnly = Nr.Zero();
    class Ur {
      get x() {
        return this._x
      }
      set x(rr) {
        this._x = rr, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(rr) {
        this._y = rr, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(rr) {
        this._z = rr, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(rr) {
        this._w = rr, this._isDirty = !0
      }
      constructor() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Zr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = rr, this._y = Sr, this._z = Qr, this._w = Zr
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let rr = pr(this._x);
        return rr = 397 * rr ^ pr(this._y), rr = 397 * rr ^ pr(this._z), rr = 397 * rr ^ pr(this._w), rr
      }
      OWr() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return rr[Sr] = this._x, rr[Sr + 1] = this._y, rr[Sr + 2] = this._z, rr[Sr + 3] = this._w, this
      }
      dp(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Ur.FromArrayToRef(rr, Sr, this)
      }
      equals(rr) {
        return rr && this._x === rr._x && this._y === rr._y && this._z === rr._z && this._w === rr._w
      }
      equalsWithEpsilon(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zr.e;
        return rr && (0, Ir.WithinEpsilon)(this._x, rr._x, Sr) && (0, Ir.WithinEpsilon)(this._y, rr._y, Sr) && (0, Ir.WithinEpsilon)(this._z, rr._z, Sr) && (0, Ir.WithinEpsilon)(this._w, rr._w, Sr)
      }
      isApprox(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zr.e;
        return rr && ((0, Ir.WithinEpsilon)(this._x, rr._x, Sr) && (0, Ir.WithinEpsilon)(this._y, rr._y, Sr) && (0, Ir.WithinEpsilon)(this._z, rr._z, Sr) && (0, Ir.WithinEpsilon)(this._w, rr._w, Sr) || (0, Ir.WithinEpsilon)(this._x, -rr._x, Sr) && (0, Ir.WithinEpsilon)(this._y, -rr._y, Sr) && (0, Ir.WithinEpsilon)(this._z, -rr._z, Sr) && (0, Ir.WithinEpsilon)(this._w, -rr._w, Sr))
      }
      clone() {
        return new Ur(this._x, this._y, this._z, this._w)
      }
      iH(rr) {
        return this._x = rr._x, this._y = rr._y, this._z = rr._z, this._w = rr._w, this._isDirty = !0, this
      }
      Hrr(rr, Sr, Qr, Zr) {
        return this._x = rr, this._y = Sr, this._z = Qr, this._w = Zr, this._isDirty = !0, this
      }
      set(rr, Sr, Qr, Zr) {
        return this.Hrr(rr, Sr, Qr, Zr)
      }
      Srr(rr) {
        return this.Hrr(rr, rr, rr, rr)
      }
      add(rr) {
        return new Ur(this._x + rr._x, this._y + rr._y, this._z + rr._z, this._w + rr._w)
      }
      addInPlace(rr) {
        return this._x += rr._x, this._y += rr._y, this._z += rr._z, this._w += rr._w, this._isDirty = !0, this
      }
      addToRef(rr, Sr) {
        return Sr._x = this._x + rr._x, Sr._y = this._y + rr._y, Sr._z = this._z + rr._z, Sr._w = this._w + rr._w, Sr._isDirty = !0, Sr
      }
      addInPlaceFromFloats(rr, Sr, Qr, Zr) {
        return this._x += rr, this._y += Sr, this._z += Qr, this._w += Zr, this._isDirty = !0, this
      }
      subtractToRef(rr, Sr) {
        return Sr._x = this._x - rr._x, Sr._y = this._y - rr._y, Sr._z = this._z - rr._z, Sr._w = this._w - rr._w, Sr._isDirty = !0, Sr
      }
      subtractFromFloats(rr, Sr, Qr, Zr) {
        return this.subtractFromFloatsToRef(rr, Sr, Qr, Zr, new Ur)
      }
      subtractFromFloatsToRef(rr, Sr, Qr, Zr, Wr) {
        return Wr._x = this._x - rr, Wr._y = this._y - Sr, Wr._z = this._z - Qr, Wr._w = this._w - Zr, Wr._isDirty = !0, Wr
      }
      subtract(rr) {
        return new Ur(this._x - rr._x, this._y - rr._y, this._z - rr._z, this._w - rr._w)
      }
      iWr(rr) {
        return this._x -= rr._x, this._y -= rr._y, this._z -= rr._z, this._w -= rr._w, this._isDirty = !0, this
      }
      scale(rr) {
        return new Ur(this._x * rr, this._y * rr, this._z * rr, this._w * rr)
      }
      scaleToRef(rr, Sr) {
        return Sr._x = this._x * rr, Sr._y = this._y * rr, Sr._z = this._z * rr, Sr._w = this._w * rr, Sr._isDirty = !0, Sr
      }
      scaleInPlace(rr) {
        return this._x *= rr, this._y *= rr, this._z *= rr, this._w *= rr, this._isDirty = !0, this
      }
      scaleAndAddToRef(rr, Sr) {
        return Sr._x += this._x * rr, Sr._y += this._y * rr, Sr._z += this._z * rr, Sr._w += this._w * rr, Sr._isDirty = !0, Sr
      }
      multiply(rr) {
        const Sr = new Ur(0, 0, 0, 1);
        return this.multiplyToRef(rr, Sr), Sr
      }
      multiplyToRef(rr, Sr) {
        const Qr = this._x * rr._w + this._y * rr._z - this._z * rr._y + this._w * rr._x,
          Zr = -this._x * rr._z + this._y * rr._w + this._z * rr._x + this._w * rr._y,
          Wr = this._x * rr._y - this._y * rr._x + this._z * rr._w + this._w * rr._z,
          ar = -this._x * rr._x - this._y * rr._y - this._z * rr._z + this._w * rr._w;
        return Sr.Hrr(Qr, Zr, Wr, ar), Sr
      }
      multiplyInPlace(rr) {
        return this.multiplyToRef(rr, this)
      }
      multiplyByFloats(rr, Sr, Qr, Zr) {
        return this._x *= rr, this._y *= Sr, this._z *= Qr, this._w *= Zr, this._isDirty = !0, this
      }
      divide(rr) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(rr, Sr) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(rr) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      minimizeInPlace() {
        throw new ReferenceError("Can not minimize a quaternion")
      }
      minimizeInPlaceFromFloats() {
        throw new ReferenceError("Can not minimize a quaternion")
      }
      maximizeInPlace() {
        throw new ReferenceError("Can not maximize a quaternion")
      }
      maximizeInPlaceFromFloats() {
        throw new ReferenceError("Can not maximize a quaternion")
      }
      ph() {
        return this.negateToRef(new Ur)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(rr) {
        return rr._x = -this._x, rr._y = -this._y, rr._z = -this._z, rr._w = -this._w, rr._isDirty = !0, rr
      }
      ffr(rr, Sr, Qr, Zr) {
        return this._x === rr && this._y === Sr && this._z === Qr && this._w === Zr
      }
      floorToRef(rr) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(rr) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(rr) {
        return rr.Hrr(-this._x, -this._y, -this._z, this._w), rr
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new Ur(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const rr = this.conjugate(),
          Sr = this.lengthSquared();
        return 0 == Sr || 1 == Sr || rr.scaleInPlace(1 / Sr), rr
      }
      invertInPlace() {
        this.conjugateInPlace();
        const rr = this.lengthSquared();
        return 0 == rr || 1 == rr || this.scaleInPlace(1 / rr), this
      }
      lengthSquared() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
      }
      length() {
        return Math.sqrt(this.lengthSquared())
      }
      normalize() {
        return this.normalizeFromLength(this.length())
      }
      normalizeFromLength(rr) {
        return 0 === rr || 1 === rr ? this : this.scaleInPlace(1 / rr)
      }
      normalizeToNew() {
        const rr = new Ur(0, 0, 0, 1);
        return this.normalizeToRef(rr), rr
      }
      normalizeToRef(rr) {
        const Sr = this.length();
        return 0 === Sr || 1 === Sr ? rr.Hrr(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / Sr, rr)
      }
      toEulerAngles() {
        const rr = mr.Zero();
        return this.toEulerAnglesToRef(rr), rr
      }
      toEulerAnglesToRef(rr) {
        const Sr = this._z,
          Qr = this._x,
          Zr = this._y,
          Wr = this._w,
          ar = Zr * Sr - Qr * Wr,
          jr = .4999999;
        if (ar < -jr) rr._y = 2 * Math.atan2(Zr, Wr), rr._x = Math.PI / 2, rr._z = 0, rr._isDirty = !0;
        else if (ar > jr) rr._y = 2 * Math.atan2(Zr, Wr), rr._x = -Math.PI / 2, rr._z = 0, rr._isDirty = !0;
        else {
          const jr = Wr * Wr,
            Ir = Sr * Sr,
            fr = Qr * Qr,
            Er = Zr * Zr;
          rr._z = Math.atan2(2 * (Qr * Zr + Sr * Wr), -Ir - fr + Er + jr), rr._x = Math.asin(-2 * ar), rr._y = Math.atan2(2 * (Sr * Qr + Zr * Wr), Ir - fr - Er + jr), rr._isDirty = !0
        }
        return rr
      }
      toAlphaBetaGammaToRef(rr) {
        const Sr = this._z,
          Qr = this._x,
          Zr = this._y,
          Wr = this._w,
          ar = Math.sqrt(Qr * Qr + Zr * Zr),
          jr = Math.sqrt(Sr * Sr + Wr * Wr),
          Ir = 2 * Math.atan2(ar, jr),
          fr = 2 * Math.atan2(Sr, Wr),
          Er = 2 * Math.atan2(Zr, Qr),
          pr = (fr + Er) / 2,
          xr = (fr - Er) / 2;
        return rr.set(xr, Ir, pr), rr
      }
      toRotationMatrix(rr) {
        return tr.FromQuaternionToRef(this, rr), rr
      }
      fromRotationMatrix(rr) {
        return Ur.FromRotationMatrixToRef(rr, this), this
      }
      dot(rr) {
        return this._x * rr._x + this._y * rr._y + this._z * rr._z + this._w * rr._w
      }
      toAxisAngle() {
        const rr = mr.Zero();
        return {
          axis: rr,
          angle: this.toAxisAngleToRef(rr)
        }
      }
      toAxisAngleToRef(rr) {
        let Sr;
        const Qr = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          Zr = this._w;
        return Qr > 0 ? (Sr = 2 * Math.atan2(Qr, Zr), rr.set(this._x / Qr, this._y / Qr, this._z / Qr)) : (Sr = 0, rr.set(1, 0, 0)), Sr
      }
      static FromRotationMatrix(rr) {
        const Sr = new Ur;
        return Ur.FromRotationMatrixToRef(rr, Sr), Sr
      }
      static FromRotationMatrixToRef(rr, Sr) {
        const Qr = rr.m,
          Zr = Qr[0],
          Wr = Qr[4],
          ar = Qr[8],
          jr = Qr[1],
          Ir = Qr[5],
          fr = Qr[9],
          Er = Qr[2],
          pr = Qr[6],
          xr = Qr[10],
          mr = Zr + Ir + xr;
        let Nr;
        return mr > 0 ? (Nr = .5 / Math.sqrt(mr + 1), Sr._w = .25 / Nr, Sr._x = (pr - fr) * Nr, Sr._y = (ar - Er) * Nr, Sr._z = (jr - Wr) * Nr, Sr._isDirty = !0) : Zr > Ir && Zr > xr ? (Nr = 2 * Math.sqrt(1 + Zr - Ir - xr), Sr._w = (pr - fr) / Nr, Sr._x = .25 * Nr, Sr._y = (Wr + jr) / Nr, Sr._z = (ar + Er) / Nr, Sr._isDirty = !0) : Ir > xr ? (Nr = 2 * Math.sqrt(1 + Ir - Zr - xr), Sr._w = (ar - Er) / Nr, Sr._x = (Wr + jr) / Nr, Sr._y = .25 * Nr, Sr._z = (fr + pr) / Nr, Sr._isDirty = !0) : (Nr = 2 * Math.sqrt(1 + xr - Zr - Ir), Sr._w = (jr - Wr) / Nr, Sr._x = (ar + Er) / Nr, Sr._y = (fr + pr) / Nr, Sr._z = .25 * Nr, Sr._isDirty = !0), Sr
      }
      static Dot(rr, Sr) {
        return rr._x * Sr._x + rr._y * Sr._y + rr._z * Sr._z + rr._w * Sr._w
      }
      static AreClose(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const Zr = Ur.Dot(rr, Sr);
        return 1 - Zr * Zr <= Qr
      }
      static SmoothToRef(rr, Sr, Qr, Zr, Wr) {
        let ar = 0 === Zr ? 1 : Qr / Zr;
        return ar = (0, Ir.Clamp)(ar, 0, 1), Ur.SlerpToRef(rr, Sr, ar, Wr), Wr
      }
      static Zero() {
        return new Ur(0, 0, 0, 0)
      }
      static Inverse(rr) {
        return new Ur(-rr._x, -rr._y, -rr._z, rr._w)
      }
      static InverseToRef(rr, Sr) {
        return Sr.set(-rr._x, -rr._y, -rr._z, rr._w), Sr
      }
      static Identity() {
        return new Ur(0, 0, 0, 1)
      }
      static IsIdentity(rr) {
        return rr && 0 === rr._x && 0 === rr._y && 0 === rr._z && 1 === rr._w
      }
      static RotationAxis(rr, Sr) {
        return Ur.RotationAxisToRef(rr, Sr, new Ur)
      }
      static RotationAxisToRef(rr, Sr, Qr) {
        Qr._w = Math.cos(Sr / 2);
        const Zr = Math.sin(Sr / 2) / rr.length();
        return Qr._x = rr._x * Zr, Qr._y = rr._y * Zr, Qr._z = rr._z * Zr, Qr._isDirty = !0, Qr
      }
      static FromArray(rr, Sr) {
        return Sr || (Sr = 0), new Ur(rr[Sr], rr[Sr + 1], rr[Sr + 2], rr[Sr + 3])
      }
      static FromArrayToRef(rr, Sr, Qr) {
        return Qr._x = rr[Sr], Qr._y = rr[Sr + 1], Qr._z = rr[Sr + 2], Qr._w = rr[Sr + 3], Qr._isDirty = !0, Qr
      }
      static FromFloatsToRef(rr, Sr, Qr, Zr, Wr) {
        return Wr.Hrr(rr, Sr, Qr, Zr), Wr
      }
      static FromEulerAngles(rr, Sr, Qr) {
        const Zr = new Ur;
        return Ur.RotationYawPitchRollToRef(Sr, rr, Qr, Zr), Zr
      }
      static FromEulerAnglesToRef(rr, Sr, Qr, Zr) {
        return Ur.RotationYawPitchRollToRef(Sr, rr, Qr, Zr), Zr
      }
      static FromEulerVector(rr) {
        const Sr = new Ur;
        return Ur.RotationYawPitchRollToRef(rr._y, rr._x, rr._z, Sr), Sr
      }
      static FromEulerVectorToRef(rr, Sr) {
        return Ur.RotationYawPitchRollToRef(rr._y, rr._x, rr._z, Sr), Sr
      }
      static FromUnitVectorsToRef(rr, Sr, Qr) {
        let Wr = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Zr.e;
        const ar = mr.Dot(rr, Sr) + 1;
        return ar < Wr ? Math.abs(rr.x) > Math.abs(rr.z) ? Qr.set(-rr.y, rr.x, 0, 0) : Qr.set(0, -rr.z, rr.y, 0) : (mr.CrossToRef(rr, Sr, zr.kU[0]), Qr.set(zr.kU[0].x, zr.kU[0].y, zr.kU[0].z, ar)), Qr.normalize()
      }
      static RotationYawPitchRoll(rr, Sr, Qr) {
        const Zr = new Ur;
        return Ur.RotationYawPitchRollToRef(rr, Sr, Qr, Zr), Zr
      }
      static RotationYawPitchRollToRef(rr, Sr, Qr, Zr) {
        const Wr = .5 * Qr,
          ar = .5 * Sr,
          jr = .5 * rr,
          Ir = Math.sin(Wr),
          fr = Math.cos(Wr),
          Er = Math.sin(ar),
          pr = Math.cos(ar),
          xr = Math.sin(jr),
          mr = Math.cos(jr);
        return Zr._x = mr * Er * fr + xr * pr * Ir, Zr._y = xr * pr * fr - mr * Er * Ir, Zr._z = mr * pr * Ir - xr * Er * fr, Zr._w = mr * pr * fr + xr * Er * Ir, Zr._isDirty = !0, Zr
      }
      static RotationAlphaBetaGamma(rr, Sr, Qr) {
        const Zr = new Ur;
        return Ur.RotationAlphaBetaGammaToRef(rr, Sr, Qr, Zr), Zr
      }
      static RotationAlphaBetaGammaToRef(rr, Sr, Qr, Zr) {
        const Wr = .5 * (Qr + rr),
          ar = .5 * (Qr - rr),
          jr = .5 * Sr;
        return Zr._x = Math.cos(ar) * Math.sin(jr), Zr._y = Math.sin(ar) * Math.sin(jr), Zr._z = Math.sin(Wr) * Math.cos(jr), Zr._w = Math.cos(Wr) * Math.cos(jr), Zr._isDirty = !0, Zr
      }
      static RotationQuaternionFromAxis(rr, Sr, Qr) {
        const Zr = new Ur(0, 0, 0, 0);
        return Ur.RotationQuaternionFromAxisToRef(rr, Sr, Qr, Zr), Zr
      }
      static RotationQuaternionFromAxisToRef(rr, Sr, Qr, Zr) {
        const Wr = hr.Matrix[0];
        return rr = rr.normalizeToRef(hr.kU[0]), Sr = Sr.normalizeToRef(hr.kU[1]), Qr = Qr.normalizeToRef(hr.kU[2]), tr.FromXYZAxesToRef(rr, Sr, Qr, Wr), Ur.FromRotationMatrixToRef(Wr, Zr), Zr
      }
      static FromLookDirectionLH(rr, Sr) {
        const Qr = new Ur;
        return Ur.FromLookDirectionLHToRef(rr, Sr, Qr), Qr
      }
      static FromLookDirectionLHToRef(rr, Sr, Qr) {
        const Zr = hr.Matrix[0];
        return tr.LookDirectionLHToRef(rr, Sr, Zr), Ur.FromRotationMatrixToRef(Zr, Qr), Qr
      }
      static FromLookDirectionRH(rr, Sr) {
        const Qr = new Ur;
        return Ur.FromLookDirectionRHToRef(rr, Sr, Qr), Qr
      }
      static FromLookDirectionRHToRef(rr, Sr, Qr) {
        const Zr = hr.Matrix[0];
        return tr.LookDirectionRHToRef(rr, Sr, Zr), Ur.FromRotationMatrixToRef(Zr, Qr)
      }
      static Slerp(rr, Sr, Qr) {
        const Zr = Ur.Identity();
        return Ur.SlerpToRef(rr, Sr, Qr, Zr), Zr
      }
      static SlerpToRef(rr, Sr, Qr, Zr) {
        let Wr, ar, jr = rr._x * Sr._x + rr._y * Sr._y + rr._z * Sr._z + rr._w * Sr._w,
          Ir = !1;
        if (jr < 0 && (Ir = !0, jr = -jr), jr > .999999) ar = 1 - Qr, Wr = Ir ? -Qr : Qr;
        else {
          const rr = Math.acos(jr),
            Sr = 1 / Math.sin(rr);
          ar = Math.sin((1 - Qr) * rr) * Sr, Wr = Ir ? -Math.sin(Qr * rr) * Sr : Math.sin(Qr * rr) * Sr
        }
        return Zr._x = ar * rr._x + Wr * Sr._x, Zr._y = ar * rr._y + Wr * Sr._y, Zr._z = ar * rr._z + Wr * Sr._z, Zr._w = ar * rr._w + Wr * Sr._w, Zr._isDirty = !0, Zr
      }
      static Hermite(rr, Sr, Qr, Zr, Wr) {
        const ar = Wr * Wr,
          jr = Wr * ar,
          Ir = 2 * jr - 3 * ar + 1,
          fr = -2 * jr + 3 * ar,
          Er = jr - 2 * ar + Wr,
          pr = jr - ar,
          xr = rr._x * Ir + Qr._x * fr + Sr._x * Er + Zr._x * pr,
          mr = rr._y * Ir + Qr._y * fr + Sr._y * Er + Zr._y * pr,
          Nr = rr._z * Ir + Qr._z * fr + Sr._z * Er + Zr._z * pr,
          tr = rr._w * Ir + Qr._w * fr + Sr._w * Er + Zr._w * pr;
        return new Ur(xr, mr, Nr, tr)
      }
      static Hermite1stDerivative(rr, Sr, Qr, Zr, Wr) {
        const ar = new Ur;
        return this.Hermite1stDerivativeToRef(rr, Sr, Qr, Zr, Wr, ar), ar
      }
      static Hermite1stDerivativeToRef(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = Wr * Wr;
        return ar._x = 6 * (jr - Wr) * rr._x + (3 * jr - 4 * Wr + 1) * Sr._x + 6 * (-jr + Wr) * Qr._x + (3 * jr - 2 * Wr) * Zr._x, ar._y = 6 * (jr - Wr) * rr._y + (3 * jr - 4 * Wr + 1) * Sr._y + 6 * (-jr + Wr) * Qr._y + (3 * jr - 2 * Wr) * Zr._y, ar._z = 6 * (jr - Wr) * rr._z + (3 * jr - 4 * Wr + 1) * Sr._z + 6 * (-jr + Wr) * Qr._z + (3 * jr - 2 * Wr) * Zr._z, ar._w = 6 * (jr - Wr) * rr._w + (3 * jr - 4 * Wr + 1) * Sr._w + 6 * (-jr + Wr) * Qr._w + (3 * jr - 2 * Wr) * Zr._w, ar._isDirty = !0, ar
      }
      static Normalize(rr) {
        const Sr = Ur.Zero();
        return Ur.NormalizeToRef(rr, Sr), Sr
      }
      static NormalizeToRef(rr, Sr) {
        return rr.normalizeToRef(Sr), Sr
      }
      static Clamp(rr, Sr, Qr) {
        const Zr = new Ur;
        return Ur.ClampToRef(rr, Sr, Qr, Zr), Zr
      }
      static ClampToRef(rr, Sr, Qr, Zr) {
        return Zr.Hrr((0, Ir.Clamp)(rr.x, Sr.x, Qr.x), (0, Ir.Clamp)(rr.y, Sr.y, Qr.y), (0, Ir.Clamp)(rr.z, Sr.z, Qr.z), (0, Ir.Clamp)(rr.w, Sr.w, Qr.w))
      }
      static Random() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Ur((0, Ir.RandomRange)(rr, Sr), (0, Ir.RandomRange)(rr, Sr), (0, Ir.RandomRange)(rr, Sr), (0, Ir.RandomRange)(rr, Sr))
      }
      static RandomToRef() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).Hrr((0, Ir.RandomRange)(rr, Sr), (0, Ir.RandomRange)(rr, Sr), (0, Ir.RandomRange)(rr, Sr), (0, Ir.RandomRange)(rr, Sr))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(rr, Sr) {
        return Math.sqrt(Ur.DistanceSquared(rr, Sr))
      }
      static DistanceSquared(rr, Sr) {
        const Qr = rr.x - Sr.x,
          Zr = rr.y - Sr.y,
          Wr = rr.z - Sr.z,
          ar = rr.w - Sr.w;
        return Qr * Qr + Zr * Zr + Wr * Wr + ar * ar
      }
      static Center(rr, Sr) {
        return Ur.CenterToRef(rr, Sr, Ur.Zero())
      }
      static CenterToRef(rr, Sr, Qr) {
        return Qr.Hrr((rr.x + Sr.x) / 2, (rr.y + Sr.y) / 2, (rr.z + Sr.z) / 2, (rr.w + Sr.w) / 2)
      }
    }
    Ur._V8PerformanceHack = new Ur(.5, .5, .5, .5);
    class tr {
      static get Use64Bits() {
        return ar.d.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = fr.l._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Zr = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = rr, this._isIdentity3x2 = rr || Qr, this._isIdentityDirty = !this._isIdentity && Sr, this._isIdentity3x2Dirty = !this._isIdentity3x2 && Zr
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, ar.d.MatrixTrackPrecisionChange && ar.d.MatrixTrackedMatrices.push(this), this._m = new ar.d.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const rr = this._m;
          this._isIdentity = 1 === rr[0] && 0 === rr[1] && 0 === rr[2] && 0 === rr[3] && 0 === rr[4] && 1 === rr[5] && 0 === rr[6] && 0 === rr[7] && 0 === rr[8] && 0 === rr[9] && 1 === rr[10] && 0 === rr[11] && 0 === rr[12] && 0 === rr[13] && 0 === rr[14] && 1 === rr[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const rr = this._m,
          Sr = rr[0],
          Qr = rr[1],
          Zr = rr[2],
          Wr = rr[3],
          ar = rr[4],
          jr = rr[5],
          Ir = rr[6],
          fr = rr[7],
          Er = rr[8],
          pr = rr[9],
          xr = rr[10],
          mr = rr[11],
          Nr = rr[12],
          Ur = rr[13],
          tr = rr[14],
          hr = rr[15],
          zr = xr * hr - tr * mr,
          Yr = pr * hr - Ur * mr,
          nr = pr * tr - Ur * xr,
          er = Er * hr - Nr * mr,
          Kr = Er * tr - xr * Nr,
          yr = Er * Ur - Nr * pr;
        return Sr * +(jr * zr - Ir * Yr + fr * nr) + Qr * -(ar * zr - Ir * er + fr * Kr) + Zr * +(ar * Yr - jr * er + fr * yr) + Wr * -(ar * nr - jr * Kr + Ir * yr)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!rr) return this._m;
        const Qr = this._m;
        for (let Zr = 0; Zr < 16; Zr++) rr[Sr + Zr] = Qr[Zr];
        return this
      }
      OWr() {
        return this._m
      }
      dp(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return tr.FromArrayToRef(rr, Sr, this)
      }
      Hrr() {
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        return tr.FromArrayToRef(Sr, 0, this)
      }
      set() {
        const rr = this._m;
        for (let Sr = 0; Sr < 16; Sr++) rr[Sr] = Sr < 0 || arguments.length <= Sr ? void 0 : arguments[Sr];
        return this.markAsUpdated(), this
      }
      Srr(rr) {
        const Sr = this._m;
        for (let Qr = 0; Qr < 16; Qr++) Sr[Qr] = rr;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return tr.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(rr) {
        const Sr = new tr;
        return this.addToRef(rr, Sr), Sr
      }
      addToRef(rr, Sr) {
        const Qr = this._m,
          Zr = Sr._m,
          Wr = rr.m;
        for (let ar = 0; ar < 16; ar++) Zr[ar] = Qr[ar] + Wr[ar];
        return Sr.markAsUpdated(), Sr
      }
      addToSelf(rr) {
        const Sr = this._m,
          Qr = rr.m;
        return Sr[0] += Qr[0], Sr[1] += Qr[1], Sr[2] += Qr[2], Sr[3] += Qr[3], Sr[4] += Qr[4], Sr[5] += Qr[5], Sr[6] += Qr[6], Sr[7] += Qr[7], Sr[8] += Qr[8], Sr[9] += Qr[9], Sr[10] += Qr[10], Sr[11] += Qr[11], Sr[12] += Qr[12], Sr[13] += Qr[13], Sr[14] += Qr[14], Sr[15] += Qr[15], this.markAsUpdated(), this
      }
      addInPlace(rr) {
        const Sr = this._m,
          Qr = rr.m;
        for (let Zr = 0; Zr < 16; Zr++) Sr[Zr] += Qr[Zr];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const rr = this._m;
        for (let Sr = 0; Sr < 16; Sr++) rr[Sr] += Sr < 0 || arguments.length <= Sr ? void 0 : arguments[Sr];
        return this.markAsUpdated(), this
      }
      subtract(rr) {
        const Sr = this._m,
          Qr = rr.m;
        for (let Zr = 0; Zr < 16; Zr++) Sr[Zr] -= Qr[Zr];
        return this.markAsUpdated(), this
      }
      subtractToRef(rr, Sr) {
        const Qr = this._m,
          Zr = rr.m,
          Wr = Sr._m;
        for (let ar = 0; ar < 16; ar++) Wr[ar] = Qr[ar] - Zr[ar];
        return Sr.markAsUpdated(), Sr
      }
      iWr(rr) {
        const Sr = this._m,
          Qr = rr.m;
        for (let Zr = 0; Zr < 16; Zr++) Sr[Zr] -= Qr[Zr];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        return this.subtractFromFloatsToRef(...Sr, new tr)
      }
      subtractFromFloatsToRef() {
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        const Zr = Sr.pop(),
          Wr = this._m,
          ar = Zr._m,
          jr = Sr;
        for (let Ir = 0; Ir < 16; Ir++) ar[Ir] = Wr[Ir] - jr[Ir];
        return Zr.markAsUpdated(), Zr
      }
      invertToRef(rr) {
        return !0 === this._isIdentity ? (tr.IdentityToRef(rr), rr) : ((0, fr.f)(this, rr.OWr()) ? rr.markAsUpdated() : rr.iH(this), rr)
      }
      addAtIndex(rr, Sr) {
        return this._m[rr] += Sr, this.markAsUpdated(), this
      }
      multiplyAtIndex(rr, Sr) {
        return this._m[rr] *= Sr, this.markAsUpdated(), this
      }
      setTranslationFromFloats(rr, Sr, Qr) {
        return this._m[12] = rr, this._m[13] = Sr, this._m[14] = Qr, this.markAsUpdated(), this
      }
      addTranslationFromFloats(rr, Sr, Qr) {
        return this._m[12] += rr, this._m[13] += Sr, this._m[14] += Qr, this.markAsUpdated(), this
      }
      setTranslation(rr) {
        return this.setTranslationFromFloats(rr._x, rr._y, rr._z)
      }
      getTranslation() {
        return new mr(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(rr) {
        return rr.x = this._m[12], rr.y = this._m[13], rr.z = this._m[14], rr
      }
      removeRotationAndScaling() {
        const rr = this.m;
        return tr.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, rr[12], rr[13], rr[14], rr[15], this), this._updateIdentityStatus(0 === rr[12] && 0 === rr[13] && 0 === rr[14] && 1 === rr[15]), this
      }
      iH(rr) {
        rr.copyToArray(this._m);
        const Sr = rr;
        return this.updateFlag = Sr.updateFlag, this._updateIdentityStatus(Sr._isIdentity, Sr._isIdentityDirty, Sr._isIdentity3x2, Sr._isIdentity3x2Dirty), this
      }
      copyToArray(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, fr.e)(this, rr, Sr), this
      }
      multiply(rr) {
        const Sr = new tr;
        return this.multiplyToRef(rr, Sr), Sr
      }
      multiplyInPlace(rr) {
        const Sr = this._m,
          Qr = rr.m;
        for (let Zr = 0; Zr < 16; Zr++) Sr[Zr] *= Qr[Zr];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const rr = this._m;
        for (let Sr = 0; Sr < 16; Sr++) rr[Sr] *= Sr < 0 || arguments.length <= Sr ? void 0 : arguments[Sr];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var rr = arguments.length, Sr = new Array(rr), Qr = 0; Qr < rr; Qr++) Sr[Qr] = arguments[Qr];
        const Zr = Sr.pop(),
          Wr = this._m,
          ar = Zr._m,
          jr = Sr;
        for (let Ir = 0; Ir < 16; Ir++) ar[Ir] = Wr[Ir] * jr[Ir];
        return Zr.markAsUpdated(), Zr
      }
      multiplyToRef(rr, Sr) {
        return this._isIdentity ? (Sr.iH(rr), Sr) : rr._isIdentity ? (Sr.iH(this), Sr) : (this.multiplyToArray(rr, Sr._m, 0), Sr.markAsUpdated(), Sr)
      }
      multiplyToArray(rr, Sr, Qr) {
        return (0, fr.p)(this, rr, Sr, Qr), this
      }
      divide(rr) {
        return this.divideToRef(rr, new tr)
      }
      divideToRef(rr, Sr) {
        const Qr = this._m,
          Zr = rr.m,
          Wr = Sr._m;
        for (let ar = 0; ar < 16; ar++) Wr[ar] = Qr[ar] / Zr[ar];
        return Sr.markAsUpdated(), Sr
      }
      divideInPlace(rr) {
        const Sr = this._m,
          Qr = rr.m;
        for (let Zr = 0; Zr < 16; Zr++) Sr[Zr] /= Qr[Zr];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(rr) {
        const Sr = this._m,
          Qr = rr.m;
        for (let Zr = 0; Zr < 16; Zr++) Sr[Zr] = Math.min(Sr[Zr], Qr[Zr]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const rr = this._m;
        for (let Sr = 0; Sr < 16; Sr++) rr[Sr] = Math.min(rr[Sr], Sr < 0 || arguments.length <= Sr ? void 0 : arguments[Sr]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(rr) {
        const Sr = this._m,
          Qr = rr.m;
        for (let Zr = 0; Zr < 16; Zr++) Sr[Zr] = Math.max(Sr[Zr], Qr[Zr]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const rr = this._m;
        for (let Sr = 0; Sr < 16; Sr++) rr[Sr] = Math.max(rr[Sr], Sr < 0 || arguments.length <= Sr ? void 0 : arguments[Sr]);
        return this.markAsUpdated(), this
      }
      ph() {
        return this.negateToRef(new tr)
      }
      negateInPlace() {
        const rr = this._m;
        for (let Sr = 0; Sr < 16; Sr++) rr[Sr] = -rr[Sr];
        return this.markAsUpdated(), this
      }
      negateToRef(rr) {
        const Sr = this._m,
          Qr = rr._m;
        for (let Zr = 0; Zr < 16; Zr++) Qr[Zr] = -Sr[Zr];
        return rr.markAsUpdated(), rr
      }
      equals(rr) {
        const Sr = rr;
        if (!Sr) return !1;
        if ((this._isIdentity || Sr._isIdentity) && !this._isIdentityDirty && !Sr._isIdentityDirty) return this._isIdentity && Sr._isIdentity;
        const Qr = this.m,
          Zr = Sr.m;
        return Qr[0] === Zr[0] && Qr[1] === Zr[1] && Qr[2] === Zr[2] && Qr[3] === Zr[3] && Qr[4] === Zr[4] && Qr[5] === Zr[5] && Qr[6] === Zr[6] && Qr[7] === Zr[7] && Qr[8] === Zr[8] && Qr[9] === Zr[9] && Qr[10] === Zr[10] && Qr[11] === Zr[11] && Qr[12] === Zr[12] && Qr[13] === Zr[13] && Qr[14] === Zr[14] && Qr[15] === Zr[15]
      }
      equalsWithEpsilon(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Qr = this._m,
          Zr = rr.m;
        for (let Wr = 0; Wr < 16; Wr++)
          if (!(0, Ir.WithinEpsilon)(Qr[Wr], Zr[Wr], Sr)) return !1;
        return !0
      }
      ffr() {
        const rr = this._m;
        for (let Sr = 0; Sr < 16; Sr++)
          if (rr[Sr] != (Sr < 0 || arguments.length <= Sr ? void 0 : arguments[Sr])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new tr)
      }
      floorToRef(rr) {
        const Sr = this._m,
          Qr = rr._m;
        for (let Zr = 0; Zr < 16; Zr++) Qr[Zr] = Math.floor(Sr[Zr]);
        return rr.markAsUpdated(), rr
      }
      fract() {
        return this.fractToRef(new tr)
      }
      fractToRef(rr) {
        const Sr = this._m,
          Qr = rr._m;
        for (let Zr = 0; Zr < 16; Zr++) Qr[Zr] = Sr[Zr] - Math.floor(Sr[Zr]);
        return rr.markAsUpdated(), rr
      }
      clone() {
        const rr = new tr;
        return rr.iH(this), rr
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let rr = pr(this._m[0]);
        for (let Sr = 1; Sr < 16; Sr++) rr = 397 * rr ^ pr(this._m[Sr]);
        return rr
      }
      decomposeToTransformNode(rr) {
        return rr.rotationQuaternion = rr.rotationQuaternion || new Ur, this.decompose(rr.Tx, rr.rotationQuaternion, rr.position)
      }
      decompose(rr, Sr, Qr, Zr) {
        let Wr = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return Qr && Qr.Srr(0), rr && rr.Srr(1), Sr && Sr.Hrr(0, 0, 0, 1), !0;
        const ar = this._m;
        if (Qr && Qr.Hrr(ar[12], ar[13], ar[14]), (rr = rr || hr.kU[0]).x = Math.sqrt(ar[0] * ar[0] + ar[1] * ar[1] + ar[2] * ar[2]), rr.y = Math.sqrt(ar[4] * ar[4] + ar[5] * ar[5] + ar[6] * ar[6]), rr.z = Math.sqrt(ar[8] * ar[8] + ar[9] * ar[9] + ar[10] * ar[10]), Zr) {
          const Sr = (Wr ? Zr.absoluteScaling.x : Zr.Tx.x) < 0 ? -1 : 1,
            Qr = (Wr ? Zr.absoluteScaling.y : Zr.Tx.y) < 0 ? -1 : 1,
            ar = (Wr ? Zr.absoluteScaling.z : Zr.Tx.z) < 0 ? -1 : 1;
          rr.x *= Sr, rr.y *= Qr, rr.z *= ar
        } else this.determinant() <= 0 && (rr.y *= -1);
        if (0 === rr._x || 0 === rr._y || 0 === rr._z) return Sr && Sr.Hrr(0, 0, 0, 1), !1;
        if (Sr) {
          const Qr = 1 / rr._x,
            Zr = 1 / rr._y,
            Wr = 1 / rr._z;
          tr.FromValuesToRef(ar[0] * Qr, ar[1] * Qr, ar[2] * Qr, 0, ar[4] * Zr, ar[5] * Zr, ar[6] * Zr, 0, ar[8] * Wr, ar[9] * Wr, ar[10] * Wr, 0, 0, 0, 0, 1, hr.Matrix[0]), Ur.FromRotationMatrixToRef(hr.Matrix[0], Sr)
        }
        return !0
      }
      getRow(rr) {
        if (rr < 0 || rr > 3) return null;
        const Sr = 4 * rr;
        return new Nr(this._m[Sr + 0], this._m[Sr + 1], this._m[Sr + 2], this._m[Sr + 3])
      }
      getRowToRef(rr, Sr) {
        if (rr >= 0 && rr <= 3) {
          const Qr = 4 * rr;
          Sr.x = this._m[Qr + 0], Sr.y = this._m[Qr + 1], Sr.z = this._m[Qr + 2], Sr.w = this._m[Qr + 3]
        }
        return Sr
      }
      setRow(rr, Sr) {
        return this.setRowFromFloats(rr, Sr.x, Sr.y, Sr.z, Sr.w)
      }
      transpose() {
        const rr = new tr;
        return tr.TransposeToRef(this, rr), rr
      }
      transposeToRef(rr) {
        return tr.TransposeToRef(this, rr), rr
      }
      setRowFromFloats(rr, Sr, Qr, Zr, Wr) {
        if (rr < 0 || rr > 3) return this;
        const ar = 4 * rr;
        return this._m[ar + 0] = Sr, this._m[ar + 1] = Qr, this._m[ar + 2] = Zr, this._m[ar + 3] = Wr, this.markAsUpdated(), this
      }
      scale(rr) {
        const Sr = new tr;
        return this.scaleToRef(rr, Sr), Sr
      }
      scaleToRef(rr, Sr) {
        for (let Qr = 0; Qr < 16; Qr++) Sr._m[Qr] = this._m[Qr] * rr;
        return Sr.markAsUpdated(), Sr
      }
      scaleAndAddToRef(rr, Sr) {
        for (let Qr = 0; Qr < 16; Qr++) Sr._m[Qr] += this._m[Qr] * rr;
        return Sr.markAsUpdated(), Sr
      }
      scaleInPlace(rr) {
        const Sr = this._m;
        for (let Qr = 0; Qr < 16; Qr++) Sr[Qr] *= rr;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(rr) {
        const Sr = hr.Matrix[0];
        this.invertToRef(Sr), Sr.transposeToRef(rr);
        const Qr = rr._m;
        return tr.FromValuesToRef(Qr[0], Qr[1], Qr[2], 0, Qr[4], Qr[5], Qr[6], 0, Qr[8], Qr[9], Qr[10], 0, 0, 0, 0, 1, rr), rr
      }
      getRotationMatrix() {
        const rr = new tr;
        return this.getRotationMatrixToRef(rr), rr
      }
      getRotationMatrixToRef(rr) {
        const Sr = hr.kU[0];
        if (!this.decompose(Sr)) return tr.IdentityToRef(rr), rr;
        const Qr = this._m,
          Zr = 1 / Sr._x,
          Wr = 1 / Sr._y,
          ar = 1 / Sr._z;
        return tr.FromValuesToRef(Qr[0] * Zr, Qr[1] * Zr, Qr[2] * Zr, 0, Qr[4] * Wr, Qr[5] * Wr, Qr[6] * Wr, 0, Qr[8] * ar, Qr[9] * ar, Qr[10] * ar, 0, 0, 0, 0, 1, rr), rr
      }
      toggleModelMatrixHandInPlace() {
        const rr = this._m;
        return rr[2] *= -1, rr[6] *= -1, rr[8] *= -1, rr[9] *= -1, rr[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const rr = this._m;
        return rr[8] *= -1, rr[9] *= -1, rr[10] *= -1, rr[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(Yr, this), this
      }
      static FromArray(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Qr = new tr;
        return tr.FromArrayToRef(rr, Sr, Qr), Qr
      }
      static FromArrayToRef(rr, Sr, Qr) {
        for (let Zr = 0; Zr < 16; Zr++) Qr._m[Zr] = rr[Zr + Sr];
        return Qr.markAsUpdated(), Qr
      }
      static FromFloat32ArrayToRefScaled(rr, Sr, Qr, Zr) {
        return Zr._m[0] = rr[0 + Sr] * Qr, Zr._m[1] = rr[1 + Sr] * Qr, Zr._m[2] = rr[2 + Sr] * Qr, Zr._m[3] = rr[3 + Sr] * Qr, Zr._m[4] = rr[4 + Sr] * Qr, Zr._m[5] = rr[5 + Sr] * Qr, Zr._m[6] = rr[6 + Sr] * Qr, Zr._m[7] = rr[7 + Sr] * Qr, Zr._m[8] = rr[8 + Sr] * Qr, Zr._m[9] = rr[9 + Sr] * Qr, Zr._m[10] = rr[10 + Sr] * Qr, Zr._m[11] = rr[11 + Sr] * Qr, Zr._m[12] = rr[12 + Sr] * Qr, Zr._m[13] = rr[13 + Sr] * Qr, Zr._m[14] = rr[14 + Sr] * Qr, Zr._m[15] = rr[15 + Sr] * Qr, Zr.markAsUpdated(), Zr
      }
      static get IdentityReadOnly() {
        return tr._IdentityReadOnly
      }
      static FromValuesToRef(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr, xr, mr, Nr, Ur, tr, hr) {
        const zr = hr._m;
        zr[0] = rr, zr[1] = Sr, zr[2] = Qr, zr[3] = Zr, zr[4] = Wr, zr[5] = ar, zr[6] = jr, zr[7] = Ir, zr[8] = fr, zr[9] = Er, zr[10] = pr, zr[11] = xr, zr[12] = mr, zr[13] = Nr, zr[14] = Ur, zr[15] = tr, hr.markAsUpdated()
      }
      static FromValues(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr, xr, mr, Nr, Ur, hr) {
        const zr = new tr,
          Yr = zr._m;
        return Yr[0] = rr, Yr[1] = Sr, Yr[2] = Qr, Yr[3] = Zr, Yr[4] = Wr, Yr[5] = ar, Yr[6] = jr, Yr[7] = Ir, Yr[8] = fr, Yr[9] = Er, Yr[10] = pr, Yr[11] = xr, Yr[12] = mr, Yr[13] = Nr, Yr[14] = Ur, Yr[15] = hr, zr.markAsUpdated(), zr
      }
      static Compose(rr, Sr, Qr) {
        const Zr = new tr;
        return tr.ComposeToRef(rr, Sr, Qr, Zr), Zr
      }
      static ComposeToRef(rr, Sr, Qr, Zr) {
        const Wr = Zr._m,
          ar = Sr._x,
          jr = Sr._y,
          Ir = Sr._z,
          fr = Sr._w,
          Er = ar + ar,
          pr = jr + jr,
          xr = Ir + Ir,
          mr = ar * Er,
          Nr = ar * pr,
          Ur = ar * xr,
          tr = jr * pr,
          hr = jr * xr,
          zr = Ir * xr,
          Yr = fr * Er,
          nr = fr * pr,
          er = fr * xr,
          Kr = rr._x,
          yr = rr._y,
          Br = rr._z;
        return Wr[0] = (1 - (tr + zr)) * Kr, Wr[1] = (Nr + er) * Kr, Wr[2] = (Ur - nr) * Kr, Wr[3] = 0, Wr[4] = (Nr - er) * yr, Wr[5] = (1 - (mr + zr)) * yr, Wr[6] = (hr + Yr) * yr, Wr[7] = 0, Wr[8] = (Ur + nr) * Br, Wr[9] = (hr - Yr) * Br, Wr[10] = (1 - (mr + tr)) * Br, Wr[11] = 0, Wr[12] = Qr._x, Wr[13] = Qr._y, Wr[14] = Qr._z, Wr[15] = 1, Zr.markAsUpdated(), Zr
      }
      static Identity() {
        const rr = tr.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return rr._updateIdentityStatus(!0), rr
      }
      static IdentityToRef(rr) {
        return tr.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, rr), rr._updateIdentityStatus(!0), rr
      }
      static Zero() {
        const rr = tr.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return rr._updateIdentityStatus(!1), rr
      }
      static RotationX(rr) {
        const Sr = new tr;
        return tr.RotationXToRef(rr, Sr), Sr
      }
      static Invert(rr) {
        const Sr = new tr;
        return rr.invertToRef(Sr), Sr
      }
      static RotationXToRef(rr, Sr) {
        const Qr = Math.sin(rr),
          Zr = Math.cos(rr);
        return tr.FromValuesToRef(1, 0, 0, 0, 0, Zr, Qr, 0, 0, -Qr, Zr, 0, 0, 0, 0, 1, Sr), Sr._updateIdentityStatus(1 === Zr && 0 === Qr), Sr
      }
      static RotationY(rr) {
        const Sr = new tr;
        return tr.RotationYToRef(rr, Sr), Sr
      }
      static RotationYToRef(rr, Sr) {
        const Qr = Math.sin(rr),
          Zr = Math.cos(rr);
        return tr.FromValuesToRef(Zr, 0, -Qr, 0, 0, 1, 0, 0, Qr, 0, Zr, 0, 0, 0, 0, 1, Sr), Sr._updateIdentityStatus(1 === Zr && 0 === Qr), Sr
      }
      static RotationZ(rr) {
        const Sr = new tr;
        return tr.RotationZToRef(rr, Sr), Sr
      }
      static RotationZToRef(rr, Sr) {
        const Qr = Math.sin(rr),
          Zr = Math.cos(rr);
        return tr.FromValuesToRef(Zr, Qr, 0, 0, -Qr, Zr, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, Sr), Sr._updateIdentityStatus(1 === Zr && 0 === Qr), Sr
      }
      static RotationAxis(rr, Sr) {
        const Qr = new tr;
        return tr.RotationAxisToRef(rr, Sr, Qr), Qr
      }
      static RotationAxisToRef(rr, Sr, Qr) {
        const Zr = Math.sin(-Sr),
          Wr = Math.cos(-Sr),
          ar = 1 - Wr;
        rr = rr.normalizeToRef(hr.kU[0]);
        const jr = Qr._m;
        return jr[0] = rr._x * rr._x * ar + Wr, jr[1] = rr._x * rr._y * ar - rr._z * Zr, jr[2] = rr._x * rr._z * ar + rr._y * Zr, jr[3] = 0, jr[4] = rr._y * rr._x * ar + rr._z * Zr, jr[5] = rr._y * rr._y * ar + Wr, jr[6] = rr._y * rr._z * ar - rr._x * Zr, jr[7] = 0, jr[8] = rr._z * rr._x * ar - rr._y * Zr, jr[9] = rr._z * rr._y * ar + rr._x * Zr, jr[10] = rr._z * rr._z * ar + Wr, jr[11] = 0, jr[12] = 0, jr[13] = 0, jr[14] = 0, jr[15] = 1, Qr.markAsUpdated(), Qr
      }
      static RotationAlignToRef(rr, Sr, Qr) {
        let Wr = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const ar = mr.Dot(Sr, rr),
          jr = Qr._m;
        if (ar < -1 + Zr.e) jr[0] = -1, jr[1] = 0, jr[2] = 0, jr[3] = 0, jr[4] = 0, jr[5] = Wr ? 1 : -1, jr[6] = 0, jr[7] = 0, jr[8] = 0, jr[9] = 0, jr[10] = Wr ? -1 : 1, jr[11] = 0;
        else {
          const Qr = mr.Cross(Sr, rr),
            Zr = 1 / (1 + ar);
          jr[0] = Qr._x * Qr._x * Zr + ar, jr[1] = Qr._y * Qr._x * Zr - Qr._z, jr[2] = Qr._z * Qr._x * Zr + Qr._y, jr[3] = 0, jr[4] = Qr._x * Qr._y * Zr + Qr._z, jr[5] = Qr._y * Qr._y * Zr + ar, jr[6] = Qr._z * Qr._y * Zr - Qr._x, jr[7] = 0, jr[8] = Qr._x * Qr._z * Zr - Qr._y, jr[9] = Qr._y * Qr._z * Zr + Qr._x, jr[10] = Qr._z * Qr._z * Zr + ar, jr[11] = 0
        }
        return jr[12] = 0, jr[13] = 0, jr[14] = 0, jr[15] = 1, Qr.markAsUpdated(), Qr
      }
      static RotationYawPitchRoll(rr, Sr, Qr) {
        const Zr = new tr;
        return tr.RotationYawPitchRollToRef(rr, Sr, Qr, Zr), Zr
      }
      static RotationYawPitchRollToRef(rr, Sr, Qr, Zr) {
        return Ur.RotationYawPitchRollToRef(rr, Sr, Qr, hr.Quaternion[0]), hr.Quaternion[0].toRotationMatrix(Zr), Zr
      }
      static Scaling(rr, Sr, Qr) {
        const Zr = new tr;
        return tr.ScalingToRef(rr, Sr, Qr, Zr), Zr
      }
      static ScalingToRef(rr, Sr, Qr, Zr) {
        return tr.FromValuesToRef(rr, 0, 0, 0, 0, Sr, 0, 0, 0, 0, Qr, 0, 0, 0, 0, 1, Zr), Zr._updateIdentityStatus(1 === rr && 1 === Sr && 1 === Qr), Zr
      }
      static Translation(rr, Sr, Qr) {
        const Zr = new tr;
        return tr.TranslationToRef(rr, Sr, Qr, Zr), Zr
      }
      static TranslationToRef(rr, Sr, Qr, Zr) {
        return tr.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, rr, Sr, Qr, 1, Zr), Zr._updateIdentityStatus(0 === rr && 0 === Sr && 0 === Qr), Zr
      }
      static Lerp(rr, Sr, Qr) {
        const Zr = new tr;
        return tr.LerpToRef(rr, Sr, Qr, Zr), Zr
      }
      static LerpToRef(rr, Sr, Qr, Zr) {
        const Wr = Zr._m,
          ar = rr.m,
          jr = Sr.m;
        for (let Ir = 0; Ir < 16; Ir++) Wr[Ir] = ar[Ir] * (1 - Qr) + jr[Ir] * Qr;
        return Zr.markAsUpdated(), Zr
      }
      static DecomposeLerp(rr, Sr, Qr) {
        const Zr = new tr;
        return tr.DecomposeLerpToRef(rr, Sr, Qr, Zr), Zr
      }
      static DecomposeLerpToRef(rr, Sr, Qr, Zr) {
        const Wr = hr.kU[0],
          ar = hr.Quaternion[0],
          jr = hr.kU[1];
        rr.decompose(Wr, ar, jr);
        const Ir = hr.kU[2],
          fr = hr.Quaternion[1],
          Er = hr.kU[3];
        Sr.decompose(Ir, fr, Er);
        const pr = hr.kU[4];
        mr.LerpToRef(Wr, Ir, Qr, pr);
        const xr = hr.Quaternion[2];
        Ur.SlerpToRef(ar, fr, Qr, xr);
        const Nr = hr.kU[5];
        return mr.LerpToRef(jr, Er, Qr, Nr), tr.ComposeToRef(pr, xr, Nr, Zr), Zr
      }
      static LookAtLH(rr, Sr, Qr) {
        const Zr = new tr;
        return tr.LookAtLHToRef(rr, Sr, Qr, Zr), Zr
      }
      static LookAtLHToRef(rr, Sr, Qr, Zr) {
        const Wr = hr.kU[0],
          ar = hr.kU[1],
          jr = hr.kU[2];
        Sr.subtractToRef(rr, jr), jr.normalize(), mr.CrossToRef(Qr, jr, Wr);
        const Ir = Wr.lengthSquared();
        0 === Ir ? Wr.x = 1 : Wr.normalizeFromLength(Math.sqrt(Ir)), mr.CrossToRef(jr, Wr, ar), ar.normalize();
        const fr = -mr.Dot(Wr, rr),
          Er = -mr.Dot(ar, rr),
          pr = -mr.Dot(jr, rr);
        return tr.FromValuesToRef(Wr._x, ar._x, jr._x, 0, Wr._y, ar._y, jr._y, 0, Wr._z, ar._z, jr._z, 0, fr, Er, pr, 1, Zr), Zr
      }
      static LookAtRH(rr, Sr, Qr) {
        const Zr = new tr;
        return tr.LookAtRHToRef(rr, Sr, Qr, Zr), Zr
      }
      static LookAtRHToRef(rr, Sr, Qr, Zr) {
        const Wr = hr.kU[0],
          ar = hr.kU[1],
          jr = hr.kU[2];
        rr.subtractToRef(Sr, jr), jr.normalize(), mr.CrossToRef(Qr, jr, Wr);
        const Ir = Wr.lengthSquared();
        0 === Ir ? Wr.x = 1 : Wr.normalizeFromLength(Math.sqrt(Ir)), mr.CrossToRef(jr, Wr, ar), ar.normalize();
        const fr = -mr.Dot(Wr, rr),
          Er = -mr.Dot(ar, rr),
          pr = -mr.Dot(jr, rr);
        return tr.FromValuesToRef(Wr._x, ar._x, jr._x, 0, Wr._y, ar._y, jr._y, 0, Wr._z, ar._z, jr._z, 0, fr, Er, pr, 1, Zr), Zr
      }
      static LookDirectionLH(rr, Sr) {
        const Qr = new tr;
        return tr.LookDirectionLHToRef(rr, Sr, Qr), Qr
      }
      static LookDirectionLHToRef(rr, Sr, Qr) {
        const Zr = hr.kU[0];
        Zr.iH(rr), Zr.scaleInPlace(-1);
        const Wr = hr.kU[1];
        return mr.CrossToRef(Sr, Zr, Wr), tr.FromValuesToRef(Wr._x, Wr._y, Wr._z, 0, Sr._x, Sr._y, Sr._z, 0, Zr._x, Zr._y, Zr._z, 0, 0, 0, 0, 1, Qr), Qr
      }
      static LookDirectionRH(rr, Sr) {
        const Qr = new tr;
        return tr.LookDirectionRHToRef(rr, Sr, Qr), Qr
      }
      static LookDirectionRHToRef(rr, Sr, Qr) {
        const Zr = hr.kU[2];
        return mr.CrossToRef(Sr, rr, Zr), tr.FromValuesToRef(Zr._x, Zr._y, Zr._z, 0, Sr._x, Sr._y, Sr._z, 0, rr._x, rr._y, rr._z, 0, 0, 0, 0, 1, Qr), Qr
      }
      static OrthoLH(rr, Sr, Qr, Zr, Wr) {
        const ar = new tr;
        return tr.OrthoLHToRef(rr, Sr, Qr, Zr, ar, Wr), ar
      }
      static OrthoLHToRef(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = 2 / rr,
          Ir = 2 / Sr,
          fr = 2 / (Zr - Qr),
          Er = -(Zr + Qr) / (Zr - Qr);
        return tr.FromValuesToRef(jr, 0, 0, 0, 0, Ir, 0, 0, 0, 0, fr, 0, 0, 0, Er, 1, Wr), ar && Wr.multiplyToRef(Yr, Wr), Wr._updateIdentityStatus(1 === jr && 1 === Ir && 1 === fr && 0 === Er), Wr
      }
      static OrthoOffCenterLH(rr, Sr, Qr, Zr, Wr, ar, jr) {
        const Ir = new tr;
        return tr.OrthoOffCenterLHToRef(rr, Sr, Qr, Zr, Wr, ar, Ir, jr), Ir
      }
      static OrthoOffCenterLHToRef(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
        const fr = 2 / (Sr - rr),
          Er = 2 / (Zr - Qr),
          pr = 2 / (ar - Wr),
          xr = -(ar + Wr) / (ar - Wr),
          mr = (rr + Sr) / (rr - Sr),
          Nr = (Zr + Qr) / (Qr - Zr);
        return tr.FromValuesToRef(fr, 0, 0, 0, 0, Er, 0, 0, 0, 0, pr, 0, mr, Nr, xr, 1, jr), Ir && jr.multiplyToRef(Yr, jr), jr.markAsUpdated(), jr
      }
      static ObliqueOffCenterLHToRef(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr) {
        const xr = -jr * Math.cos(Ir),
          mr = -jr * Math.sin(Ir);
        return tr.TranslationToRef(0, 0, -fr, hr.Matrix[1]), tr.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, xr, mr, 1, 0, 0, 0, 0, 1, hr.Matrix[0]), hr.Matrix[1].multiplyToRef(hr.Matrix[0], hr.Matrix[0]), tr.TranslationToRef(0, 0, fr, hr.Matrix[1]), hr.Matrix[0].multiplyToRef(hr.Matrix[1], hr.Matrix[0]), tr.OrthoOffCenterLHToRef(rr, Sr, Qr, Zr, Wr, ar, Er, pr), hr.Matrix[0].multiplyToRef(Er, Er), Er
      }
      static OrthoOffCenterRH(rr, Sr, Qr, Zr, Wr, ar, jr) {
        const Ir = new tr;
        return tr.OrthoOffCenterRHToRef(rr, Sr, Qr, Zr, Wr, ar, Ir, jr), Ir
      }
      static OrthoOffCenterRHToRef(rr, Sr, Qr, Zr, Wr, ar, jr, Ir) {
        return tr.OrthoOffCenterLHToRef(rr, Sr, Qr, Zr, Wr, ar, jr, Ir), jr._m[10] *= -1, jr
      }
      static ObliqueOffCenterRHToRef(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr) {
        const xr = jr * Math.cos(Ir),
          mr = jr * Math.sin(Ir);
        return tr.TranslationToRef(0, 0, fr, hr.Matrix[1]), tr.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, xr, mr, 1, 0, 0, 0, 0, 1, hr.Matrix[0]), hr.Matrix[1].multiplyToRef(hr.Matrix[0], hr.Matrix[0]), tr.TranslationToRef(0, 0, -fr, hr.Matrix[1]), hr.Matrix[0].multiplyToRef(hr.Matrix[1], hr.Matrix[0]), tr.OrthoOffCenterRHToRef(rr, Sr, Qr, Zr, Wr, ar, Er, pr), hr.Matrix[0].multiplyToRef(Er, Er), Er
      }
      static PerspectiveLH(rr, Sr, Qr, Zr, Wr) {
        let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const jr = new tr,
          Ir = 2 * Qr / rr,
          fr = 2 * Qr / Sr,
          Er = (Zr + Qr) / (Zr - Qr),
          pr = -2 * Zr * Qr / (Zr - Qr),
          xr = Math.tan(ar);
        return tr.FromValuesToRef(Ir, 0, 0, 0, 0, fr, 0, xr, 0, 0, Er, 1, 0, 0, pr, 0, jr), Wr && jr.multiplyToRef(Yr, jr), jr._updateIdentityStatus(!1), jr
      }
      static PerspectiveFovLH(rr, Sr, Qr, Zr, Wr) {
        let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          jr = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Ir = new tr;
        return tr.PerspectiveFovLHToRef(rr, Sr, Qr, Zr, Ir, !0, Wr, ar, jr), Ir
      }
      static PerspectiveFovLHToRef(rr, Sr, Qr, Zr, Wr) {
        let ar = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          jr = arguments.length > 6 ? arguments[6] : void 0,
          Ir = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          fr = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Er = Qr,
          pr = Zr,
          xr = 1 / Math.tan(.5 * rr),
          mr = ar ? xr / Sr : xr,
          Nr = ar ? xr : xr * Sr,
          Ur = fr && 0 === Er ? -1 : 0 !== pr ? (pr + Er) / (pr - Er) : 1,
          hr = fr && 0 === Er ? 2 * pr : 0 !== pr ? -2 * pr * Er / (pr - Er) : -2 * Er,
          zr = Math.tan(Ir);
        return tr.FromValuesToRef(mr, 0, 0, 0, 0, Nr, 0, zr, 0, 0, Ur, 1, 0, 0, hr, 0, Wr), jr && Wr.multiplyToRef(Yr, Wr), Wr._updateIdentityStatus(!1), Wr
      }
      static PerspectiveFovReverseLHToRef(rr, Sr, Qr, Zr, Wr) {
        let ar = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          jr = arguments.length > 6 ? arguments[6] : void 0,
          Ir = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const fr = 1 / Math.tan(.5 * rr),
          Er = ar ? fr / Sr : fr,
          pr = ar ? fr : fr * Sr,
          xr = Math.tan(Ir);
        return tr.FromValuesToRef(Er, 0, 0, 0, 0, pr, 0, xr, 0, 0, -Qr, 1, 0, 0, 1, 0, Wr), jr && Wr.multiplyToRef(Yr, Wr), Wr._updateIdentityStatus(!1), Wr
      }
      static PerspectiveFovRH(rr, Sr, Qr, Zr, Wr) {
        let ar = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          jr = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Ir = new tr;
        return tr.PerspectiveFovRHToRef(rr, Sr, Qr, Zr, Ir, !0, Wr, ar, jr), Ir
      }
      static PerspectiveFovRHToRef(rr, Sr, Qr, Zr, Wr) {
        let ar = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          jr = arguments.length > 6 ? arguments[6] : void 0,
          Ir = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          fr = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Er = Qr,
          pr = Zr,
          xr = 1 / Math.tan(.5 * rr),
          mr = ar ? xr / Sr : xr,
          Nr = ar ? xr : xr * Sr,
          Ur = fr && 0 === Er ? 1 : 0 !== pr ? -(pr + Er) / (pr - Er) : -1,
          hr = fr && 0 === Er ? 2 * pr : 0 !== pr ? -2 * pr * Er / (pr - Er) : -2 * Er,
          zr = Math.tan(Ir);
        return tr.FromValuesToRef(mr, 0, 0, 0, 0, Nr, 0, zr, 0, 0, Ur, -1, 0, 0, hr, 0, Wr), jr && Wr.multiplyToRef(Yr, Wr), Wr._updateIdentityStatus(!1), Wr
      }
      static PerspectiveFovReverseRHToRef(rr, Sr, Qr, Zr, Wr) {
        let ar = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          jr = arguments.length > 6 ? arguments[6] : void 0,
          Ir = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const fr = 1 / Math.tan(.5 * rr),
          Er = ar ? fr / Sr : fr,
          pr = ar ? fr : fr * Sr,
          xr = Math.tan(Ir);
        return tr.FromValuesToRef(Er, 0, 0, 0, 0, pr, 0, xr, 0, 0, -Qr, -1, 0, 0, -1, 0, Wr), jr && Wr.multiplyToRef(Yr, Wr), Wr._updateIdentityStatus(!1), Wr
      }
      static GetFinalMatrix(rr, Sr, Qr, Zr, Wr, ar) {
        const jr = rr.width,
          Ir = rr.height,
          fr = rr.x,
          Er = rr.y,
          pr = tr.FromValues(jr / 2, 0, 0, 0, 0, -Ir / 2, 0, 0, 0, 0, ar - Wr, 0, fr + jr / 2, Ir / 2 + Er, Wr, 1),
          xr = new tr;
        return Sr.multiplyToRef(Qr, xr), xr.multiplyToRef(Zr, xr), xr.multiplyToRef(pr, xr)
      }
      static GetAsMatrix2x2(rr) {
        const Sr = rr.m,
          Qr = [Sr[0], Sr[1], Sr[4], Sr[5]];
        return ar.d.MatrixUse64Bits ? Qr : new Float32Array(Qr)
      }
      static GetAsMatrix3x3(rr) {
        const Sr = rr.m,
          Qr = [Sr[0], Sr[1], Sr[2], Sr[4], Sr[5], Sr[6], Sr[8], Sr[9], Sr[10]];
        return ar.d.MatrixUse64Bits ? Qr : new Float32Array(Qr)
      }
      static Transpose(rr) {
        const Sr = new tr;
        return tr.TransposeToRef(rr, Sr), Sr
      }
      static TransposeToRef(rr, Sr) {
        const Qr = rr.m,
          Zr = Qr[0],
          Wr = Qr[4],
          ar = Qr[8],
          jr = Qr[12],
          Ir = Qr[1],
          fr = Qr[5],
          Er = Qr[9],
          pr = Qr[13],
          xr = Qr[2],
          mr = Qr[6],
          Nr = Qr[10],
          Ur = Qr[14],
          tr = Qr[3],
          hr = Qr[7],
          zr = Qr[11],
          Yr = Qr[15],
          nr = Sr._m;
        return nr[0] = Zr, nr[1] = Wr, nr[2] = ar, nr[3] = jr, nr[4] = Ir, nr[5] = fr, nr[6] = Er, nr[7] = pr, nr[8] = xr, nr[9] = mr, nr[10] = Nr, nr[11] = Ur, nr[12] = tr, nr[13] = hr, nr[14] = zr, nr[15] = Yr, Sr.markAsUpdated(), Sr._updateIdentityStatus(rr._isIdentity, rr._isIdentityDirty), Sr
      }
      static Reflection(rr) {
        const Sr = new tr;
        return tr.ReflectionToRef(rr, Sr), Sr
      }
      static ReflectionToRef(rr, Sr) {
        rr.normalize();
        const Qr = rr.normal.x,
          Zr = rr.normal.y,
          Wr = rr.normal.z,
          ar = -2 * Qr,
          jr = -2 * Zr,
          Ir = -2 * Wr;
        return tr.FromValuesToRef(ar * Qr + 1, jr * Qr, Ir * Qr, 0, ar * Zr, jr * Zr + 1, Ir * Zr, 0, ar * Wr, jr * Wr, Ir * Wr + 1, 0, ar * rr.d, jr * rr.d, Ir * rr.d, 1, Sr), Sr
      }
      static FromXYZAxesToRef(rr, Sr, Qr, Zr) {
        return tr.FromValuesToRef(rr._x, rr._y, rr._z, 0, Sr._x, Sr._y, Sr._z, 0, Qr._x, Qr._y, Qr._z, 0, 0, 0, 0, 1, Zr), Zr
      }
      static FromQuaternionToRef(rr, Sr) {
        const Qr = rr._x * rr._x,
          Zr = rr._y * rr._y,
          Wr = rr._z * rr._z,
          ar = rr._x * rr._y,
          jr = rr._z * rr._w,
          Ir = rr._z * rr._x,
          fr = rr._y * rr._w,
          Er = rr._y * rr._z,
          pr = rr._x * rr._w;
        return Sr._m[0] = 1 - 2 * (Zr + Wr), Sr._m[1] = 2 * (ar + jr), Sr._m[2] = 2 * (Ir - fr), Sr._m[3] = 0, Sr._m[4] = 2 * (ar - jr), Sr._m[5] = 1 - 2 * (Wr + Qr), Sr._m[6] = 2 * (Er + pr), Sr._m[7] = 0, Sr._m[8] = 2 * (Ir + fr), Sr._m[9] = 2 * (Er - pr), Sr._m[10] = 1 - 2 * (Zr + Qr), Sr._m[11] = 0, Sr._m[12] = 0, Sr._m[13] = 0, Sr._m[14] = 0, Sr._m[15] = 1, Sr.markAsUpdated(), Sr
      }
    }
    tr._IdentityReadOnly = tr.Identity();
    class hr {}
    hr.kU = (0, Wr.f)(11, mr.Zero), hr.Matrix = (0, Wr.f)(2, tr.Identity), hr.Quaternion = (0, Wr.f)(3, Ur.Zero);
    class zr {}
    zr.Vector2 = (0, Wr.f)(3, xr.Zero), zr.kU = (0, Wr.f)(13, mr.Zero), zr.Vector4 = (0, Wr.f)(3, Nr.Zero), zr.Quaternion = (0, Wr.f)(3, Ur.Zero), zr.Matrix = (0, Wr.f)(8, tr.Identity);
    const Yr = tr.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let nr = !1;

    function er() {
      nr || (nr = !0, Object.defineProperties(xr.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(mr.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Nr.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Ur.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(tr.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, Er.e)("BABYLON.Vector2", xr), (0, Er.e)("BABYLON.Vector3", mr), (0, Er.e)("BABYLON.Vector4", Nr), (0, Er.e)("BABYLON.Matrix", tr))
    }
  },
  38595: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => jr
    });
    const Zr = "undefined" !== typeof WeakRef;
    class Wr {
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 ? arguments[2] : void 0,
          Zr = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(rr, Sr, Qr, Zr)
      }
      initialize(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Qr = arguments.length > 2 ? arguments[2] : void 0,
          Zr = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = rr, this.skipNextObservers = Sr, this.target = Qr, this.currentTarget = Zr, this
      }
    }
    class ar {
      constructor(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = rr, this.mask = Sr, this.scope = Qr, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(rr)
      }
    }
    class jr {
      static FromPromise(rr, Sr) {
        const Qr = new jr;
        return rr.then((rr => {
          Qr.notifyObservers(rr)
        })).catch((rr => {
          if (!Sr) throw rr;
          Sr.notifyObservers(rr)
        })), Qr
      }
      get observers() {
        return this._observers
      }
      constructor(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = Sr, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Wr(0), rr && (this._onObserverAdded = rr)
      }
      add(rr) {
        let Sr = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Qr = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!rr) return null;
        const Wr = new ar(rr, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Wr.unregisterOnNextCall = Qr, Sr ? this._observers.unshift(Wr) : this._observers.push(Wr), this._onObserverAdded && this._onObserverAdded(Wr), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Wr, this._lastNotifiedValue);
        const jr = Zr ? new WeakRef(this) : {
          deref: () => this
        };
        return Wr._remove = function() {
          let rr = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Sr = jr.deref();
          Sr && (rr ? Sr.remove(Wr) : Sr._remove(Wr))
        }, Wr
      }
      addOnce(rr) {
        return this.add(rr, void 0, void 0, void 0, !0)
      }
      remove(rr) {
        if (!rr) return !1;
        rr._remove = null;
        return -1 !== this._observers.indexOf(rr) && (this._deferUnregister(rr), !0)
      }
      removeCallback(rr, Sr) {
        for (let Qr = 0; Qr < this._observers.length; Qr++) {
          const Zr = this._observers[Qr];
          if (!Zr._willBeUnregistered && (Zr.callback === rr && (!Sr || Sr === Zr.scope))) return this._deferUnregister(Zr), !0
        }
        return !1
      }
      _deferUnregister(rr) {
        rr._willBeUnregistered || (this._numObserversMarkedAsDeleted++, rr.unregisterOnNextCall = !1, rr._willBeUnregistered = !0, setTimeout((() => {
          this._remove(rr)
        }), 0))
      }
      _remove(rr) {
        let Sr = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!rr) return !1;
        const Qr = this._observers.indexOf(rr);
        return -1 !== Qr && (Sr && this._numObserversMarkedAsDeleted--, this._observers.splice(Qr, 1), !0)
      }
      makeObserverTopPriority(rr) {
        this._remove(rr, !1), this._observers.unshift(rr)
      }
      makeObserverBottomPriority(rr) {
        this._remove(rr, !1), this._observers.push(rr)
      }
      notifyObservers(rr) {
        let Sr = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Qr = arguments.length > 2 ? arguments[2] : void 0,
          Zr = arguments.length > 3 ? arguments[3] : void 0,
          Wr = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = rr), !this._observers.length) return !0;
        const ar = this._eventState;
        ar.mask = Sr, ar.target = Qr, ar.currentTarget = Zr, ar.skipNextObservers = !1, ar.lastReturnValue = rr, ar.userInfo = Wr;
        for (const jr of this._observers)
          if (!jr._willBeUnregistered && (jr.mask & Sr && (jr.unregisterOnNextCall && this._deferUnregister(jr), jr.scope ? ar.lastReturnValue = jr.callback.apply(jr.scope, [rr, ar]) : ar.lastReturnValue = jr.callback(rr, ar)), ar.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(rr, Sr) {
        let Qr = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = Sr), rr._willBeUnregistered) return;
        const Zr = this._eventState;
        Zr.mask = Qr, Zr.skipNextObservers = !1, rr.unregisterOnNextCall && this._deferUnregister(rr), rr.callback(Sr, Zr)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const rr = this._observers.pop();
          rr && (rr._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const rr = new jr;
        return rr._observers = this._observers.slice(0), rr
      }
      hasSpecificMask() {
        let rr = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const Sr of this._observers)
          if (Sr.mask & rr || Sr.mask === rr) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);