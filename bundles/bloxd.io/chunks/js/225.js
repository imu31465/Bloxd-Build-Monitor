export const id = 225;
export const ids = [225];
export const modules = {
  36772: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk
    });
    var Rk = Bk(36781);
    class tk {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    tk.Instances = [], tk.OnEnginesDisposedObservable = new Rk.e, tk._LastCreatedScene = null, tk.UseFallbackTexture = !0, tk.FallbackTexture = ""
  },
  36770: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Rk
    });
    class Rk {
      static SetMatrixPrecision(kk) {
        if (Rk.MatrixTrackPrecisionChange = !1, kk && !Rk.MatrixUse64Bits && Rk.MatrixTrackedMatrices)
          for (let Fk = 0; Fk < Rk.MatrixTrackedMatrices.length; ++Fk) {
            const kk = Rk.MatrixTrackedMatrices[Fk],
              Bk = kk._m;
            kk._m = new Array(16);
            for (let Fk = 0; Fk < 16; ++Fk) kk._m[Fk] = Bk[Fk]
          }
        Rk.MatrixUse64Bits = kk, Rk.MatrixCurrentType = Rk.MatrixUse64Bits ? Array : Float32Array, Rk.MatrixTrackedMatrices = null
      }
    }
    Rk.MatrixUse64Bits = !1, Rk.MatrixTrackPrecisionChange = !0, Rk.MatrixCurrentType = Float32Array, Rk.MatrixTrackedMatrices = []
  },
  36793: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => bk,
      i: () => dk,
      l: () => wk,
      n: () => Rk,
      q: () => ak,
      t: () => Xk
    });
    class Rk {}

    function tk(kk) {
      kk.updateFlag = Rk._UpdateFlagSeed++
    }

    function ak(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const tk = kk.PBk(),
        ak = Fk.PBk(),
        Xk = tk[0],
        bk = tk[1],
        wk = tk[2],
        dk = tk[3],
        sk = tk[4],
        Vk = tk[5],
        Jk = tk[6],
        Ak = tk[7],
        ek = tk[8],
        yk = tk[9],
        fk = tk[10],
        mk = tk[11],
        Wk = tk[12],
        vk = tk[13],
        ik = tk[14],
        Yk = tk[15],
        Lk = ak[0],
        Ok = ak[1],
        Ek = ak[2],
        Sk = ak[3],
        Nk = ak[4],
        Hk = ak[5],
        uk = ak[6],
        Mk = ak[7],
        gk = ak[8],
        Uk = ak[9],
        ck = ak[10],
        Gk = ak[11],
        Tk = ak[12],
        rk = ak[13],
        Dk = ak[14],
        zk = ak[15];
      Bk[Rk] = Xk * Lk + bk * Nk + wk * gk + dk * Tk, Bk[Rk + 1] = Xk * Ok + bk * Hk + wk * Uk + dk * rk, Bk[Rk + 2] = Xk * Ek + bk * uk + wk * ck + dk * Dk, Bk[Rk + 3] = Xk * Sk + bk * Mk + wk * Gk + dk * zk, Bk[Rk + 4] = sk * Lk + Vk * Nk + Jk * gk + Ak * Tk, Bk[Rk + 5] = sk * Ok + Vk * Hk + Jk * Uk + Ak * rk, Bk[Rk + 6] = sk * Ek + Vk * uk + Jk * ck + Ak * Dk, Bk[Rk + 7] = sk * Sk + Vk * Mk + Jk * Gk + Ak * zk, Bk[Rk + 8] = ek * Lk + yk * Nk + fk * gk + mk * Tk, Bk[Rk + 9] = ek * Ok + yk * Hk + fk * Uk + mk * rk, Bk[Rk + 10] = ek * Ek + yk * uk + fk * ck + mk * Dk, Bk[Rk + 11] = ek * Sk + yk * Mk + fk * Gk + mk * zk, Bk[Rk + 12] = Wk * Lk + vk * Nk + ik * gk + Yk * Tk, Bk[Rk + 13] = Wk * Ok + vk * Hk + ik * Uk + Yk * rk, Bk[Rk + 14] = Wk * Ek + vk * uk + ik * ck + Yk * Dk, Bk[Rk + 15] = Wk * Sk + vk * Mk + ik * Gk + Yk * zk
    }

    function Xk(kk, Fk, Bk) {
      let Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      ak(kk, Fk, Bk.PBk(), Rk), tk(Bk)
    }

    function bk(kk, Fk) {
      let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Rk = kk.PBk();
      Fk[Bk] = Rk[0], Fk[Bk + 1] = Rk[1], Fk[Bk + 2] = Rk[2], Fk[Bk + 3] = Rk[3], Fk[Bk + 4] = Rk[4], Fk[Bk + 5] = Rk[5], Fk[Bk + 6] = Rk[6], Fk[Bk + 7] = Rk[7], Fk[Bk + 8] = Rk[8], Fk[Bk + 9] = Rk[9], Fk[Bk + 10] = Rk[10], Fk[Bk + 11] = Rk[11], Fk[Bk + 12] = Rk[12], Fk[Bk + 13] = Rk[13], Fk[Bk + 14] = Rk[14], Fk[Bk + 15] = Rk[15]
    }

    function wk(kk, Fk) {
      const Bk = dk(kk, Fk.PBk());
      return Bk && tk(Fk), Bk
    }

    function dk(kk, Fk) {
      const Bk = kk.PBk(),
        Rk = Bk[0],
        tk = Bk[1],
        ak = Bk[2],
        Xk = Bk[3],
        bk = Bk[4],
        wk = Bk[5],
        dk = Bk[6],
        sk = Bk[7],
        Vk = Bk[8],
        Jk = Bk[9],
        Ak = Bk[10],
        ek = Bk[11],
        yk = Bk[12],
        fk = Bk[13],
        mk = Bk[14],
        Wk = Bk[15],
        vk = Ak * Wk - mk * ek,
        ik = Jk * Wk - fk * ek,
        Yk = Jk * mk - fk * Ak,
        Lk = Vk * Wk - yk * ek,
        Ok = Vk * mk - Ak * yk,
        Ek = Vk * fk - yk * Jk,
        Sk = +(wk * vk - dk * ik + sk * Yk),
        Nk = -(bk * vk - dk * Lk + sk * Ok),
        Hk = +(bk * ik - wk * Lk + sk * Ek),
        uk = -(bk * Yk - wk * Ok + dk * Ek),
        Mk = Rk * Sk + tk * Nk + ak * Hk + Xk * uk;
      if (0 === Mk) return !1;
      const gk = 1 / Mk,
        Uk = dk * Wk - mk * sk,
        ck = wk * Wk - fk * sk,
        Gk = wk * mk - fk * dk,
        Tk = bk * Wk - yk * sk,
        rk = bk * mk - yk * dk,
        Dk = bk * fk - yk * wk,
        zk = dk * ek - Ak * sk,
        Pk = wk * ek - Jk * sk,
        hk = wk * Ak - Jk * dk,
        qk = bk * ek - Vk * sk,
        Ck = bk * Ak - Vk * dk,
        Zk = bk * Jk - Vk * wk,
        pk = -(tk * vk - ak * ik + Xk * Yk),
        Kk = +(Rk * vk - ak * Lk + Xk * Ok),
        xk = -(Rk * ik - tk * Lk + Xk * Ek),
        jk = +(Rk * Yk - tk * Ok + ak * Ek),
        lk = +(tk * Uk - ak * ck + Xk * Gk),
        nk = -(Rk * Uk - ak * Tk + Xk * rk),
        Ik = +(Rk * ck - tk * Tk + Xk * Dk),
        Qk = -(Rk * Gk - tk * rk + ak * Dk),
        kF = -(tk * zk - ak * Pk + Xk * hk),
        FF = +(Rk * zk - ak * qk + Xk * Ck),
        BF = -(Rk * Pk - tk * qk + Xk * Zk),
        RF = +(Rk * hk - tk * Ck + ak * Zk);
      return Fk[0] = Sk * gk, Fk[1] = pk * gk, Fk[2] = lk * gk, Fk[3] = kF * gk, Fk[4] = Nk * gk, Fk[5] = Kk * gk, Fk[6] = nk * gk, Fk[7] = FF * gk, Fk[8] = Hk * gk, Fk[9] = xk * gk, Fk[10] = Ik * gk, Fk[11] = BF * gk, Fk[12] = uk * gk, Fk[13] = jk * gk, Fk[14] = Qk * gk, Fk[15] = RF * gk, !0
    }
    Rk._UpdateFlagSeed = 0
  },
  36758: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => yk,
      e: () => ek,
      i: () => ik,
      l: () => mk,
      p: () => Vk,
      s: () => Jk,
      v: () => Ak
    });
    var Rk = Bk(36764),
      tk = Bk(36768),
      ak = Bk(36770),
      Xk = Bk(36772),
      bk = Bk(36790),
      wk = Bk(36793),
      dk = Bk(36798);
    const sk = kk => parseInt(kk.toString().replace(/\W/g, ""));
    class Vk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = kk, this.y = Fk
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let kk = sk(this.x);
        return kk = 397 * kk ^ sk(this.y), kk
      }
      toArray(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return kk[Fk] = this.x, kk[Fk + 1] = this.y, this
      }
      MFk(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Vk.FromArrayToRef(kk, Fk, this), this
      }
      PBk() {
        return [this.x, this.y]
      }
      sBk(kk) {
        return this.x = kk.x, this.y = kk.y, this
      }
      E1(kk, Fk) {
        return this.x = kk, this.y = Fk, this
      }
      set(kk, Fk) {
        return this.E1(kk, Fk)
      }
      J_(kk) {
        return this.E1(kk, kk)
      }
      add(kk) {
        return new Vk(this.x + kk.x, this.y + kk.y)
      }
      addToRef(kk, Fk) {
        return Fk.x = this.x + kk.x, Fk.y = this.y + kk.y, Fk
      }
      addInPlace(kk) {
        return this.x += kk.x, this.y += kk.y, this
      }
      addInPlaceFromFloats(kk, Fk) {
        return this.x += kk, this.y += Fk, this
      }
      addVector3(kk) {
        return new Vk(this.x + kk.x, this.y + kk.y)
      }
      subtract(kk) {
        return new Vk(this.x - kk.x, this.y - kk.y)
      }
      subtractToRef(kk, Fk) {
        return Fk.x = this.x - kk.x, Fk.y = this.y - kk.y, Fk
      }
      wRk(kk) {
        return this.x -= kk.x, this.y -= kk.y, this
      }
      multiplyInPlace(kk) {
        return this.x *= kk.x, this.y *= kk.y, this
      }
      multiply(kk) {
        return new Vk(this.x * kk.x, this.y * kk.y)
      }
      multiplyToRef(kk, Fk) {
        return Fk.x = this.x * kk.x, Fk.y = this.y * kk.y, Fk
      }
      multiplyByFloats(kk, Fk) {
        return new Vk(this.x * kk, this.y * Fk)
      }
      divide(kk) {
        return new Vk(this.x / kk.x, this.y / kk.y)
      }
      divideToRef(kk, Fk) {
        return Fk.x = this.x / kk.x, Fk.y = this.y / kk.y, Fk
      }
      divideInPlace(kk) {
        return this.x = this.x / kk.x, this.y = this.y / kk.y, this
      }
      minimizeInPlace(kk) {
        return this.minimizeInPlaceFromFloats(kk.x, kk.y)
      }
      maximizeInPlace(kk) {
        return this.maximizeInPlaceFromFloats(kk.x, kk.y)
      }
      minimizeInPlaceFromFloats(kk, Fk) {
        return this.x = Math.min(kk, this.x), this.y = Math.min(Fk, this.y), this
      }
      maximizeInPlaceFromFloats(kk, Fk) {
        return this.x = Math.max(kk, this.x), this.y = Math.max(Fk, this.y), this
      }
      subtractFromFloats(kk, Fk) {
        return new Vk(this.x - kk, this.y - Fk)
      }
      subtractFromFloatsToRef(kk, Fk, Bk) {
        return Bk.x = this.x - kk, Bk.y = this.y - Fk, Bk
      }
      bt() {
        return new Vk(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(kk) {
        return kk.x = -this.x, kk.y = -this.y, kk
      }
      scaleInPlace(kk) {
        return this.x *= kk, this.y *= kk, this
      }
      scale(kk) {
        return new Vk(this.x * kk, this.y * kk)
      }
      scaleToRef(kk, Fk) {
        return Fk.x = this.x * kk, Fk.y = this.y * kk, Fk
      }
      scaleAndAddToRef(kk, Fk) {
        return Fk.x += this.x * kk, Fk.y += this.y * kk, Fk
      }
      equals(kk) {
        return kk && this.x === kk.x && this.y === kk.y
      }
      equalsWithEpsilon(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rk.c;
        return kk && (0, bk.WithinEpsilon)(this.x, kk.x, Fk) && (0, bk.WithinEpsilon)(this.y, kk.y, Fk)
      }
      LXk(kk, Fk) {
        return this.x === kk && this.y === Fk
      }
      floor() {
        return new Vk(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(kk) {
        return kk.x = Math.floor(this.x), kk.y = Math.floor(this.y), kk
      }
      fract() {
        return new Vk(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(kk) {
        return kk.x = this.x - Math.floor(this.x), kk.y = this.y - Math.floor(this.y), kk
      }
      rotate(kk) {
        return this.rotateToRef(kk, new Vk)
      }
      rotateToRef(kk, Fk) {
        const Bk = Math.cos(kk),
          Rk = Math.sin(kk);
        return Fk.x = Bk * this.x - Rk * this.y, Fk.y = Rk * this.x + Bk * this.y, Fk
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
      normalizeFromLength(kk) {
        return 0 === kk || 1 === kk ? this : this.scaleInPlace(1 / kk)
      }
      normalizeToNew() {
        const kk = new Vk;
        return this.normalizeToRef(kk), kk
      }
      normalizeToRef(kk) {
        const Fk = this.length();
        return 0 === Fk || 1 === Fk ? (kk.x = this.x, kk.y = this.y, kk) : this.scaleToRef(1 / Fk, kk)
      }
      clone() {
        return new Vk(this.x, this.y)
      }
      dot(kk) {
        return this.x * kk.x + this.y * kk.y
      }
      static Zero() {
        return new Vk(0, 0)
      }
      static One() {
        return new Vk(1, 1)
      }
      static Random() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Vk((0, bk.RandomRange)(kk, Fk), (0, bk.RandomRange)(kk, Fk))
      }
      static RandomToRef() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).E1((0, bk.RandomRange)(kk, Fk), (0, bk.RandomRange)(kk, Fk))
      }
      static get ZeroReadOnly() {
        return Vk._ZeroReadOnly
      }
      static FromArray(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Vk(kk[Fk], kk[Fk + 1])
      }
      static FromArrayToRef(kk, Fk, Bk) {
        return Bk.x = kk[Fk], Bk.y = kk[Fk + 1], Bk
      }
      static FromFloatsToRef(kk, Fk, Bk) {
        return Bk.E1(kk, Fk), Bk
      }
      static CatmullRom(kk, Fk, Bk, Rk, tk) {
        const ak = tk * tk,
          Xk = tk * ak,
          bk = .5 * (2 * Fk.x + (-kk.x + Bk.x) * tk + (2 * kk.x - 5 * Fk.x + 4 * Bk.x - Rk.x) * ak + (-kk.x + 3 * Fk.x - 3 * Bk.x + Rk.x) * Xk),
          wk = .5 * (2 * Fk.y + (-kk.y + Bk.y) * tk + (2 * kk.y - 5 * Fk.y + 4 * Bk.y - Rk.y) * ak + (-kk.y + 3 * Fk.y - 3 * Bk.y + Rk.y) * Xk);
        return new Vk(bk, wk)
      }
      static ClampToRef(kk, Fk, Bk, Rk) {
        return Rk.x = (0, bk.Clamp)(kk.x, Fk.x, Bk.x), Rk.y = (0, bk.Clamp)(kk.y, Fk.y, Bk.y), Rk
      }
      static Clamp(kk, Fk, Bk) {
        const Rk = (0, bk.Clamp)(kk.x, Fk.x, Bk.x),
          tk = (0, bk.Clamp)(kk.y, Fk.y, Bk.y);
        return new Vk(Rk, tk)
      }
      static Hermite(kk, Fk, Bk, Rk, tk) {
        const ak = tk * tk,
          Xk = tk * ak,
          bk = 2 * Xk - 3 * ak + 1,
          wk = -2 * Xk + 3 * ak,
          dk = Xk - 2 * ak + tk,
          sk = Xk - ak,
          Jk = kk.x * bk + Bk.x * wk + Fk.x * dk + Rk.x * sk,
          Ak = kk.y * bk + Bk.y * wk + Fk.y * dk + Rk.y * sk;
        return new Vk(Jk, Ak)
      }
      static Hermite1stDerivative(kk, Fk, Bk, Rk, tk) {
        return this.Hermite1stDerivativeToRef(kk, Fk, Bk, Rk, tk, new Vk)
      }
      static Hermite1stDerivativeToRef(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = tk * tk;
        return ak.x = 6 * (Xk - tk) * kk.x + (3 * Xk - 4 * tk + 1) * Fk.x + 6 * (-Xk + tk) * Bk.x + (3 * Xk - 2 * tk) * Rk.x, ak.y = 6 * (Xk - tk) * kk.y + (3 * Xk - 4 * tk + 1) * Fk.y + 6 * (-Xk + tk) * Bk.y + (3 * Xk - 2 * tk) * Rk.y, ak
      }
      static Lerp(kk, Fk, Bk) {
        return Vk.LerpToRef(kk, Fk, Bk, new Vk)
      }
      static LerpToRef(kk, Fk, Bk, Rk) {
        return Rk.x = kk.x + (Fk.x - kk.x) * Bk, Rk.y = kk.y + (Fk.y - kk.y) * Bk, Rk
      }
      static Dot(kk, Fk) {
        return kk.x * Fk.x + kk.y * Fk.y
      }
      static Normalize(kk) {
        return Vk.NormalizeToRef(kk, new Vk)
      }
      static NormalizeToRef(kk, Fk) {
        return kk.normalizeToRef(Fk), Fk
      }
      static Minimize(kk, Fk) {
        const Bk = kk.x < Fk.x ? kk.x : Fk.x,
          Rk = kk.y < Fk.y ? kk.y : Fk.y;
        return new Vk(Bk, Rk)
      }
      static Maximize(kk, Fk) {
        const Bk = kk.x > Fk.x ? kk.x : Fk.x,
          Rk = kk.y > Fk.y ? kk.y : Fk.y;
        return new Vk(Bk, Rk)
      }
      static Transform(kk, Fk) {
        return Vk.TransformToRef(kk, Fk, new Vk)
      }
      static TransformToRef(kk, Fk, Bk) {
        const Rk = Fk.m,
          tk = kk.x * Rk[0] + kk.y * Rk[4] + Rk[12],
          ak = kk.x * Rk[1] + kk.y * Rk[5] + Rk[13];
        return Bk.x = tk, Bk.y = ak, Bk
      }
      static PointInTriangle(kk, Fk, Bk, Rk) {
        const tk = .5 * (-Bk.y * Rk.x + Fk.y * (-Bk.x + Rk.x) + Fk.x * (Bk.y - Rk.y) + Bk.x * Rk.y),
          ak = tk < 0 ? -1 : 1,
          Xk = (Fk.y * Rk.x - Fk.x * Rk.y + (Rk.y - Fk.y) * kk.x + (Fk.x - Rk.x) * kk.y) * ak,
          bk = (Fk.x * Bk.y - Fk.y * Bk.x + (Fk.y - Bk.y) * kk.x + (Bk.x - Fk.x) * kk.y) * ak;
        return Xk > 0 && bk > 0 && Xk + bk < 2 * tk * ak
      }
      static Distance(kk, Fk) {
        return Math.sqrt(Vk.DistanceSquared(kk, Fk))
      }
      static DistanceSquared(kk, Fk) {
        const Bk = kk.x - Fk.x,
          Rk = kk.y - Fk.y;
        return Bk * Bk + Rk * Rk
      }
      static Center(kk, Fk) {
        return Vk.CenterToRef(kk, Fk, new Vk)
      }
      static CenterToRef(kk, Fk, Bk) {
        return Bk.E1((kk.x + Fk.x) / 2, (kk.y + Fk.y) / 2)
      }
      static DistanceOfPointFromSegment(kk, Fk, Bk) {
        const Rk = Vk.DistanceSquared(Fk, Bk);
        if (0 === Rk) return Vk.Distance(kk, Fk);
        const tk = Bk.subtract(Fk),
          ak = Math.max(0, Math.min(1, Vk.Dot(kk.subtract(Fk), tk) / Rk)),
          Xk = Fk.add(tk.multiplyByFloats(ak, ak));
        return Vk.Distance(kk, Xk)
      }
    }
    Vk._V8PerformanceHack = new Vk(.5, .5), Vk._ZeroReadOnly = Vk.Zero();
    class Jk {
      get x() {
        return this._x
      }
      set x(kk) {
        this._x = kk, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(kk) {
        this._y = kk, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(kk) {
        this._z = kk, this._isDirty = !0
      }
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = kk, this._y = Fk, this._z = Bk
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "Qe"
      }
      getHashCode() {
        let kk = sk(this._x);
        return kk = 397 * kk ^ sk(this._y), kk = 397 * kk ^ sk(this._z), kk
      }
      PBk() {
        return [this._x, this._y, this._z]
      }
      toArray(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return kk[Fk] = this._x, kk[Fk + 1] = this._y, kk[Fk + 2] = this._z, this
      }
      MFk(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Jk.FromArrayToRef(kk, Fk, this), this
      }
      toQuaternion() {
        return ek.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(kk) {
        return this._x += kk._x, this._y += kk._y, this._z += kk._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(kk, Fk, Bk) {
        return this._x += kk, this._y += Fk, this._z += Bk, this._isDirty = !0, this
      }
      add(kk) {
        return new Jk(this._x + kk._x, this._y + kk._y, this._z + kk._z)
      }
      addToRef(kk, Fk) {
        return Fk._x = this._x + kk._x, Fk._y = this._y + kk._y, Fk._z = this._z + kk._z, Fk._isDirty = !0, Fk
      }
      wRk(kk) {
        return this._x -= kk._x, this._y -= kk._y, this._z -= kk._z, this._isDirty = !0, this
      }
      subtract(kk) {
        return new Jk(this._x - kk._x, this._y - kk._y, this._z - kk._z)
      }
      subtractToRef(kk, Fk) {
        return this.subtractFromFloatsToRef(kk._x, kk._y, kk._z, Fk)
      }
      subtractFromFloats(kk, Fk, Bk) {
        return new Jk(this._x - kk, this._y - Fk, this._z - Bk)
      }
      subtractFromFloatsToRef(kk, Fk, Bk, Rk) {
        return Rk._x = this._x - kk, Rk._y = this._y - Fk, Rk._z = this._z - Bk, Rk._isDirty = !0, Rk
      }
      bt() {
        return new Jk(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(kk) {
        return kk._x = -1 * this._x, kk._y = -1 * this._y, kk._z = -1 * this._z, kk._isDirty = !0, kk
      }
      scaleInPlace(kk) {
        return this._x *= kk, this._y *= kk, this._z *= kk, this._isDirty = !0, this
      }
      scale(kk) {
        return new Jk(this._x * kk, this._y * kk, this._z * kk)
      }
      scaleToRef(kk, Fk) {
        return Fk._x = this._x * kk, Fk._y = this._y * kk, Fk._z = this._z * kk, Fk._isDirty = !0, Fk
      }
      getNormalToRef(kk) {
        const Fk = this.length();
        let Bk = Math.acos(this._y / Fk);
        const Rk = Math.atan2(this._z, this._x);
        Bk > Math.PI / 2 ? Bk -= Math.PI / 2 : Bk += Math.PI / 2;
        const tk = Fk * Math.sin(Bk) * Math.cos(Rk),
          ak = Fk * Math.cos(Bk),
          Xk = Fk * Math.sin(Bk) * Math.sin(Rk);
        return kk.set(tk, ak, Xk), kk
      }
      applyRotationQuaternionToRef(kk, Fk) {
        const Bk = this._x,
          Rk = this._y,
          tk = this._z,
          ak = kk._x,
          Xk = kk._y,
          bk = kk._z,
          wk = kk._w,
          dk = 2 * (Xk * tk - bk * Rk),
          sk = 2 * (bk * Bk - ak * tk),
          Vk = 2 * (ak * Rk - Xk * Bk);
        return Fk._x = Bk + wk * dk + Xk * Vk - bk * sk, Fk._y = Rk + wk * sk + bk * dk - ak * Vk, Fk._z = tk + wk * Vk + ak * sk - Xk * dk, Fk._isDirty = !0, Fk
      }
      applyRotationQuaternionInPlace(kk) {
        return this.applyRotationQuaternionToRef(kk, this)
      }
      applyRotationQuaternion(kk) {
        return this.applyRotationQuaternionToRef(kk, new Jk)
      }
      scaleAndAddToRef(kk, Fk) {
        return Fk._x += this._x * kk, Fk._y += this._y * kk, Fk._z += this._z * kk, Fk._isDirty = !0, Fk
      }
      projectOnPlane(kk, Fk) {
        return this.projectOnPlaneToRef(kk, Fk, new Jk)
      }
      projectOnPlaneToRef(kk, Fk, Bk) {
        const Rk = kk.normal,
          tk = kk.d,
          ak = fk.Qe[0];
        this.subtractToRef(Fk, ak), ak.normalize();
        const Xk = Jk.Dot(ak, Rk);
        if (Math.abs(Xk) < 1e-10) Bk.J_(1 / 0);
        else {
          const kk = -(Jk.Dot(Fk, Rk) + tk) / Xk,
            bk = ak.scaleInPlace(kk);
          Fk.addToRef(bk, Bk)
        }
        return Bk
      }
      equals(kk) {
        return kk && this._x === kk._x && this._y === kk._y && this._z === kk._z
      }
      equalsWithEpsilon(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rk.c;
        return kk && (0, bk.WithinEpsilon)(this._x, kk._x, Fk) && (0, bk.WithinEpsilon)(this._y, kk._y, Fk) && (0, bk.WithinEpsilon)(this._z, kk._z, Fk)
      }
      LXk(kk, Fk, Bk) {
        return this._x === kk && this._y === Fk && this._z === Bk
      }
      multiplyInPlace(kk) {
        return this._x *= kk._x, this._y *= kk._y, this._z *= kk._z, this._isDirty = !0, this
      }
      multiply(kk) {
        return this.multiplyByFloats(kk._x, kk._y, kk._z)
      }
      multiplyToRef(kk, Fk) {
        return Fk._x = this._x * kk._x, Fk._y = this._y * kk._y, Fk._z = this._z * kk._z, Fk._isDirty = !0, Fk
      }
      multiplyByFloats(kk, Fk, Bk) {
        return new Jk(this._x * kk, this._y * Fk, this._z * Bk)
      }
      divide(kk) {
        return new Jk(this._x / kk._x, this._y / kk._y, this._z / kk._z)
      }
      divideToRef(kk, Fk) {
        return Fk._x = this._x / kk._x, Fk._y = this._y / kk._y, Fk._z = this._z / kk._z, Fk._isDirty = !0, Fk
      }
      divideInPlace(kk) {
        return this._x = this._x / kk._x, this._y = this._y / kk._y, this._z = this._z / kk._z, this._isDirty = !0, this
      }
      minimizeInPlace(kk) {
        return this.minimizeInPlaceFromFloats(kk._x, kk._y, kk._z)
      }
      maximizeInPlace(kk) {
        return this.maximizeInPlaceFromFloats(kk._x, kk._y, kk._z)
      }
      minimizeInPlaceFromFloats(kk, Fk, Bk) {
        return kk < this._x && (this.x = kk), Fk < this._y && (this.y = Fk), Bk < this._z && (this.z = Bk), this
      }
      maximizeInPlaceFromFloats(kk, Fk, Bk) {
        return kk > this._x && (this.x = kk), Fk > this._y && (this.y = Fk), Bk > this._z && (this.z = Bk), this
      }
      isNonUniformWithinEpsilon(kk) {
        const Fk = Math.abs(this._x),
          Bk = Math.abs(this._y);
        if (!(0, bk.WithinEpsilon)(Fk, Bk, kk)) return !0;
        const Rk = Math.abs(this._z);
        return !(0, bk.WithinEpsilon)(Fk, Rk, kk) || !(0, bk.WithinEpsilon)(Bk, Rk, kk)
      }
      get isNonUniform() {
        const kk = Math.abs(this._x);
        if (kk !== Math.abs(this._y)) return !0;
        return kk !== Math.abs(this._z)
      }
      floorToRef(kk) {
        return kk._x = Math.floor(this._x), kk._y = Math.floor(this._y), kk._z = Math.floor(this._z), kk._isDirty = !0, kk
      }
      floor() {
        return new Jk(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(kk) {
        return kk._x = this._x - Math.floor(this._x), kk._y = this._y - Math.floor(this._y), kk._z = this._z - Math.floor(this._z), kk._isDirty = !0, kk
      }
      fract() {
        return new Jk(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(kk) {
        if ("xyz" === (kk = kk.toLowerCase())) return this;
        const Fk = fk.Qe[0].sBk(this);
        return this.x = Fk[kk[0]], this.y = Fk[kk[1]], this.z = Fk[kk[2]], this
      }
      rotateByQuaternionToRef(kk, Fk) {
        return kk.toRotationMatrix(fk.Matrix[0]), Jk.TransformCoordinatesToRef(this, fk.Matrix[0], Fk), Fk
      }
      rotateByQuaternionAroundPointToRef(kk, Fk, Bk) {
        return this.subtractToRef(Fk, fk.Qe[0]), fk.Qe[0].rotateByQuaternionToRef(kk, fk.Qe[0]), Fk.addToRef(fk.Qe[0], Bk), Bk
      }
      cross(kk) {
        return Jk.CrossToRef(this, kk, new Jk)
      }
      normalizeFromLength(kk) {
        return 0 === kk || 1 === kk ? this : this.scaleInPlace(1 / kk)
      }
      normalizeToNew() {
        return this.normalizeToRef(new Jk)
      }
      normalizeToRef(kk) {
        const Fk = this.length();
        return 0 === Fk || 1 === Fk ? (kk._x = this._x, kk._y = this._y, kk._z = this._z, kk._isDirty = !0, kk) : this.scaleToRef(1 / Fk, kk)
      }
      clone() {
        return new Jk(this._x, this._y, this._z)
      }
      sBk(kk) {
        return this.E1(kk._x, kk._y, kk._z)
      }
      E1(kk, Fk, Bk) {
        return this._x = kk, this._y = Fk, this._z = Bk, this._isDirty = !0, this
      }
      set(kk, Fk, Bk) {
        return this.E1(kk, Fk, Bk)
      }
      J_(kk) {
        return this._x = this._y = this._z = kk, this._isDirty = !0, this
      }
      static GetClipFactor(kk, Fk, Bk, Rk) {
        const tk = Jk.Dot(kk, Bk);
        return (tk - Rk) / (tk - Jk.Dot(Fk, Bk))
      }
      static GetAngleBetweenVectors(kk, Fk, Bk) {
        const Rk = kk.normalizeToRef(fk.Qe[1]),
          tk = Fk.normalizeToRef(fk.Qe[2]);
        let ak = Jk.Dot(Rk, tk);
        ak = (0, bk.Clamp)(ak, -1, 1);
        const Xk = Math.acos(ak),
          wk = fk.Qe[3];
        return Jk.CrossToRef(Rk, tk, wk), Jk.Dot(wk, Bk) > 0 ? isNaN(Xk) ? 0 : Xk : isNaN(Xk) ? -Math.PI : -Math.acos(ak)
      }
      static GetAngleBetweenVectorsOnPlane(kk, Fk, Bk) {
        fk.Qe[0].sBk(kk);
        const Rk = fk.Qe[0];
        fk.Qe[1].sBk(Fk);
        const tk = fk.Qe[1];
        fk.Qe[2].sBk(Bk);
        const ak = fk.Qe[2],
          Xk = fk.Qe[3],
          wk = fk.Qe[4];
        Rk.normalize(), tk.normalize(), ak.normalize(), Jk.CrossToRef(ak, Rk, Xk), Jk.CrossToRef(Xk, ak, wk);
        const dk = Math.atan2(Jk.Dot(tk, Xk), Jk.Dot(tk, wk));
        return (0, bk.NormalizeRadians)(dk)
      }
      static PitchYawRollToMoveBetweenPointsToRef(kk, Fk, Bk) {
        const Rk = mk.Qe[0];
        return Fk.subtractToRef(kk, Rk), Bk._y = Math.atan2(Rk.x, Rk.z) || 0, Bk._x = Math.atan2(Math.sqrt(Rk.x ** 2 + Rk.z ** 2), Rk.y) || 0, Bk._z = 0, Bk._isDirty = !0, Bk
      }
      static PitchYawRollToMoveBetweenPoints(kk, Fk) {
        const Bk = Jk.Zero();
        return Jk.PitchYawRollToMoveBetweenPointsToRef(kk, Fk, Bk)
      }
      static SlerpToRef(kk, Fk, Bk, tk) {
        Bk = (0, bk.Clamp)(Bk, 0, 1);
        const ak = fk.Qe[0],
          Xk = fk.Qe[1];
        ak.sBk(kk);
        const wk = ak.length();
        ak.normalizeFromLength(wk), Xk.sBk(Fk);
        const dk = Xk.length();
        Xk.normalizeFromLength(dk);
        const sk = Jk.Dot(ak, Xk);
        let Vk, Ak;
        if (sk < 1 - Rk.c) {
          const kk = Math.acos(sk),
            Fk = 1 / Math.sin(kk);
          Vk = Math.sin((1 - Bk) * kk) * Fk, Ak = Math.sin(Bk * kk) * Fk
        } else Vk = 1 - Bk, Ak = Bk;
        return ak.scaleInPlace(Vk), Xk.scaleInPlace(Ak), tk.sBk(ak).addInPlace(Xk), tk.scaleInPlace((0, bk.Lerp)(wk, dk, Bk)), tk
      }
      static SmoothToRef(kk, Fk, Bk, Rk, tk) {
        return Jk.SlerpToRef(kk, Fk, 0 === Rk ? 1 : Bk / Rk, tk), tk
      }
      static FromArray(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Jk(kk[Fk], kk[Fk + 1], kk[Fk + 2])
      }
      static FromFloatArray(kk, Fk) {
        return Jk.FromArray(kk, Fk)
      }
      static FromArrayToRef(kk, Fk, Bk) {
        return Bk._x = kk[Fk], Bk._y = kk[Fk + 1], Bk._z = kk[Fk + 2], Bk._isDirty = !0, Bk
      }
      static FromFloatArrayToRef(kk, Fk, Bk) {
        return Jk.FromArrayToRef(kk, Fk, Bk)
      }
      static FromFloatsToRef(kk, Fk, Bk, Rk) {
        return Rk.E1(kk, Fk, Bk), Rk
      }
      static Zero() {
        return new Jk(0, 0, 0)
      }
      static One() {
        return new Jk(1, 1, 1)
      }
      static Up() {
        return new Jk(0, 1, 0)
      }
      static get UpReadOnly() {
        return Jk._UpReadOnly
      }
      static get DownReadOnly() {
        return Jk._DownReadOnly
      }
      static get RightReadOnly() {
        return Jk._RightReadOnly
      }
      static get LeftReadOnly() {
        return Jk._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return Jk._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return Jk._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return Jk._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return Jk._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return Jk._ZeroReadOnly
      }
      static get OneReadOnly() {
        return Jk._OneReadOnly
      }
      static Down() {
        return new Jk(0, -1, 0)
      }
      static Forward() {
        return new Jk(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new Jk(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new Jk(1, 0, 0)
      }
      static Left() {
        return new Jk(-1, 0, 0)
      }
      static Random() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Jk((0, bk.RandomRange)(kk, Fk), (0, bk.RandomRange)(kk, Fk), (0, bk.RandomRange)(kk, Fk))
      }
      static RandomToRef() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).E1((0, bk.RandomRange)(kk, Fk), (0, bk.RandomRange)(kk, Fk), (0, bk.RandomRange)(kk, Fk))
      }
      static TransformCoordinates(kk, Fk) {
        const Bk = Jk.Zero();
        return Jk.TransformCoordinatesToRef(kk, Fk, Bk), Bk
      }
      static TransformCoordinatesToRef(kk, Fk, Bk) {
        return Jk.TransformCoordinatesFromFloatsToRef(kk._x, kk._y, kk._z, Fk, Bk), Bk
      }
      static TransformCoordinatesFromFloatsToRef(kk, Fk, Bk, Rk, tk) {
        const ak = Rk.m,
          Xk = kk * ak[0] + Fk * ak[4] + Bk * ak[8] + ak[12],
          bk = kk * ak[1] + Fk * ak[5] + Bk * ak[9] + ak[13],
          wk = kk * ak[2] + Fk * ak[6] + Bk * ak[10] + ak[14],
          dk = 1 / (kk * ak[3] + Fk * ak[7] + Bk * ak[11] + ak[15]);
        return tk._x = Xk * dk, tk._y = bk * dk, tk._z = wk * dk, tk._isDirty = !0, tk
      }
      static TransformNormal(kk, Fk) {
        const Bk = Jk.Zero();
        return Jk.TransformNormalToRef(kk, Fk, Bk), Bk
      }
      static TransformNormalToRef(kk, Fk, Bk) {
        return this.TransformNormalFromFloatsToRef(kk._x, kk._y, kk._z, Fk, Bk), Bk
      }
      static TransformNormalFromFloatsToRef(kk, Fk, Bk, Rk, tk) {
        const ak = Rk.m;
        return tk._x = kk * ak[0] + Fk * ak[4] + Bk * ak[8], tk._y = kk * ak[1] + Fk * ak[5] + Bk * ak[9], tk._z = kk * ak[2] + Fk * ak[6] + Bk * ak[10], tk._isDirty = !0, tk
      }
      static CatmullRom(kk, Fk, Bk, Rk, tk) {
        const ak = tk * tk,
          Xk = tk * ak,
          bk = .5 * (2 * Fk._x + (-kk._x + Bk._x) * tk + (2 * kk._x - 5 * Fk._x + 4 * Bk._x - Rk._x) * ak + (-kk._x + 3 * Fk._x - 3 * Bk._x + Rk._x) * Xk),
          wk = .5 * (2 * Fk._y + (-kk._y + Bk._y) * tk + (2 * kk._y - 5 * Fk._y + 4 * Bk._y - Rk._y) * ak + (-kk._y + 3 * Fk._y - 3 * Bk._y + Rk._y) * Xk),
          dk = .5 * (2 * Fk._z + (-kk._z + Bk._z) * tk + (2 * kk._z - 5 * Fk._z + 4 * Bk._z - Rk._z) * ak + (-kk._z + 3 * Fk._z - 3 * Bk._z + Rk._z) * Xk);
        return new Jk(bk, wk, dk)
      }
      static Clamp(kk, Fk, Bk) {
        const Rk = new Jk;
        return Jk.ClampToRef(kk, Fk, Bk, Rk), Rk
      }
      static ClampToRef(kk, Fk, Bk, Rk) {
        let tk = kk._x;
        tk = tk > Bk._x ? Bk._x : tk, tk = tk < Fk._x ? Fk._x : tk;
        let ak = kk._y;
        ak = ak > Bk._y ? Bk._y : ak, ak = ak < Fk._y ? Fk._y : ak;
        let Xk = kk._z;
        return Xk = Xk > Bk._z ? Bk._z : Xk, Xk = Xk < Fk._z ? Fk._z : Xk, Rk.E1(tk, ak, Xk), Rk
      }
      static CheckExtends(kk, Fk, Bk) {
        Fk.minimizeInPlace(kk), Bk.maximizeInPlace(kk)
      }
      static Hermite(kk, Fk, Bk, Rk, tk) {
        const ak = tk * tk,
          Xk = tk * ak,
          bk = 2 * Xk - 3 * ak + 1,
          wk = -2 * Xk + 3 * ak,
          dk = Xk - 2 * ak + tk,
          sk = Xk - ak,
          Vk = kk._x * bk + Bk._x * wk + Fk._x * dk + Rk._x * sk,
          Ak = kk._y * bk + Bk._y * wk + Fk._y * dk + Rk._y * sk,
          ek = kk._z * bk + Bk._z * wk + Fk._z * dk + Rk._z * sk;
        return new Jk(Vk, Ak, ek)
      }
      static Hermite1stDerivative(kk, Fk, Bk, Rk, tk) {
        const ak = new Jk;
        return this.Hermite1stDerivativeToRef(kk, Fk, Bk, Rk, tk, ak), ak
      }
      static Hermite1stDerivativeToRef(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = tk * tk;
        return ak._x = 6 * (Xk - tk) * kk._x + (3 * Xk - 4 * tk + 1) * Fk._x + 6 * (-Xk + tk) * Bk._x + (3 * Xk - 2 * tk) * Rk._x, ak._y = 6 * (Xk - tk) * kk._y + (3 * Xk - 4 * tk + 1) * Fk._y + 6 * (-Xk + tk) * Bk._y + (3 * Xk - 2 * tk) * Rk._y, ak._z = 6 * (Xk - tk) * kk._z + (3 * Xk - 4 * tk + 1) * Fk._z + 6 * (-Xk + tk) * Bk._z + (3 * Xk - 2 * tk) * Rk._z, ak._isDirty = !0, ak
      }
      static Lerp(kk, Fk, Bk) {
        const Rk = new Jk(0, 0, 0);
        return Jk.LerpToRef(kk, Fk, Bk, Rk), Rk
      }
      static LerpToRef(kk, Fk, Bk, Rk) {
        return Rk._x = kk._x + (Fk._x - kk._x) * Bk, Rk._y = kk._y + (Fk._y - kk._y) * Bk, Rk._z = kk._z + (Fk._z - kk._z) * Bk, Rk._isDirty = !0, Rk
      }
      static Dot(kk, Fk) {
        return kk._x * Fk._x + kk._y * Fk._y + kk._z * Fk._z
      }
      dot(kk) {
        return this._x * kk._x + this._y * kk._y + this._z * kk._z
      }
      static Cross(kk, Fk) {
        const Bk = new Jk;
        return Jk.CrossToRef(kk, Fk, Bk), Bk
      }
      static CrossToRef(kk, Fk, Bk) {
        const Rk = kk._y * Fk._z - kk._z * Fk._y,
          tk = kk._z * Fk._x - kk._x * Fk._z,
          ak = kk._x * Fk._y - kk._y * Fk._x;
        return Bk.E1(Rk, tk, ak), Bk
      }
      static Normalize(kk) {
        const Fk = Jk.Zero();
        return Jk.NormalizeToRef(kk, Fk), Fk
      }
      static NormalizeToRef(kk, Fk) {
        return kk.normalizeToRef(Fk), Fk
      }
      static Project(kk, Fk, Bk, Rk) {
        const tk = new Jk;
        return Jk.ProjectToRef(kk, Fk, Bk, Rk, tk), tk
      }
      static ProjectToRef(kk, Fk, Bk, Rk, tk) {
        const ak = Rk.width,
          bk = Rk.height,
          wk = Rk.x,
          dk = Rk.y,
          sk = fk.Matrix[1],
          Vk = Xk.c.LastCreatedEngine?.isNDCHalfZRange,
          Ak = Vk ? 1 : .5,
          ek = Vk ? 0 : .5;
        yk.FromValuesToRef(ak / 2, 0, 0, 0, 0, -bk / 2, 0, 0, 0, 0, Ak, 0, wk + ak / 2, bk / 2 + dk, ek, 1, sk);
        const mk = fk.Matrix[0];
        return Fk.multiplyToRef(Bk, mk), mk.multiplyToRef(sk, mk), Jk.TransformCoordinatesToRef(kk, mk, tk), tk
      }
      static Reflect(kk, Fk) {
        return this.ReflectToRef(kk, Fk, new Jk)
      }
      static ReflectToRef(kk, Fk, Bk) {
        const Rk = mk.Qe[0];
        return Rk.sBk(Fk).scaleInPlace(2 * Jk.Dot(kk, Fk)), Bk.sBk(kk).wRk(Rk)
      }
      static UnprojectFromTransform(kk, Fk, Bk, Rk, tk) {
        return this.Unproject(kk, Fk, Bk, Rk, tk, yk.IdentityReadOnly)
      }
      static Unproject(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = new Jk;
        return Jk.UnprojectToRef(kk, Fk, Bk, Rk, tk, ak, Xk), Xk
      }
      static UnprojectToRef(kk, Fk, Bk, Rk, tk, ak, Xk) {
        return Jk.UnprojectFloatsToRef(kk._x, kk._y, kk._z, Fk, Bk, Rk, tk, ak, Xk), Xk
      }
      static UnprojectFloatsToRef(kk, Fk, Bk, Rk, tk, ak, bk, wk, dk) {
        const sk = fk.Matrix[0];
        ak.multiplyToRef(bk, sk), sk.multiplyToRef(wk, sk), sk.invert();
        const Vk = fk.Qe[0];
        return Vk.x = kk / Rk * 2 - 1, Vk.y = -(Fk / tk * 2 - 1), Xk.c.LastCreatedEngine?.isNDCHalfZRange ? Vk.z = Bk : Vk.z = 2 * Bk - 1, Jk.TransformCoordinatesToRef(Vk, sk, dk), dk
      }
      static Minimize(kk, Fk) {
        const Bk = new Jk;
        return Bk.sBk(kk), Bk.minimizeInPlace(Fk), Bk
      }
      static Maximize(kk, Fk) {
        const Bk = new Jk;
        return Bk.sBk(kk), Bk.maximizeInPlace(Fk), Bk
      }
      static Distance(kk, Fk) {
        return Math.sqrt(Jk.DistanceSquared(kk, Fk))
      }
      static DistanceSquared(kk, Fk) {
        const Bk = kk._x - Fk._x,
          Rk = kk._y - Fk._y,
          tk = kk._z - Fk._z;
        return Bk * Bk + Rk * Rk + tk * tk
      }
      static ProjectOnTriangleToRef(kk, Fk, Bk, tk, ak) {
        const Xk = fk.Qe[0],
          wk = fk.Qe[1],
          dk = fk.Qe[2],
          sk = fk.Qe[3],
          Vk = fk.Qe[4];
        Bk.subtractToRef(Fk, Xk), tk.subtractToRef(Fk, wk), tk.subtractToRef(Bk, dk);
        const Ak = Xk.length(),
          ek = wk.length(),
          yk = dk.length();
        if (Ak < Rk.c || ek < Rk.c || yk < Rk.c) return ak.sBk(Fk), Jk.Distance(kk, Fk);
        kk.subtractToRef(Fk, Vk), Jk.CrossToRef(Xk, wk, sk);
        const mk = sk.length();
        if (mk < Rk.c) return ak.sBk(Fk), Jk.Distance(kk, Fk);
        sk.normalizeFromLength(mk);
        let Wk = Vk.length();
        if (Wk < Rk.c) return ak.sBk(Fk), 0;
        Vk.normalizeFromLength(Wk);
        const vk = Jk.Dot(sk, Vk),
          ik = fk.Qe[5],
          Yk = fk.Qe[6];
        ik.sBk(sk).scaleInPlace(-Wk * vk), Yk.sBk(kk).addInPlace(ik);
        const Lk = fk.Qe[4],
          Ok = fk.Qe[5],
          Ek = fk.Qe[7],
          Sk = fk.Qe[8];
        Lk.sBk(Xk).scaleInPlace(1 / Ak), Sk.sBk(wk).scaleInPlace(1 / ek), Lk.addInPlace(Sk).scaleInPlace(-1), Ok.sBk(Xk).scaleInPlace(-1 / Ak), Sk.sBk(dk).scaleInPlace(1 / yk), Ok.addInPlace(Sk).scaleInPlace(-1), Ek.sBk(dk).scaleInPlace(-1 / yk), Sk.sBk(wk).scaleInPlace(-1 / ek), Ek.addInPlace(Sk).scaleInPlace(-1);
        const Nk = fk.Qe[9];
        let Hk;
        Nk.sBk(Yk).wRk(Fk), Jk.CrossToRef(Lk, Nk, Sk), Hk = Jk.Dot(Sk, sk);
        const uk = Hk;
        Nk.sBk(Yk).wRk(Bk), Jk.CrossToRef(Ok, Nk, Sk), Hk = Jk.Dot(Sk, sk);
        const Mk = Hk;
        Nk.sBk(Yk).wRk(tk), Jk.CrossToRef(Ek, Nk, Sk), Hk = Jk.Dot(Sk, sk);
        const gk = Hk,
          Uk = fk.Qe[10];
        let ck, Gk;
        uk > 0 && Mk < 0 ? (Uk.sBk(Xk), ck = Fk, Gk = Bk) : Mk > 0 && gk < 0 ? (Uk.sBk(dk), ck = Bk, Gk = tk) : (Uk.sBk(wk).scaleInPlace(-1), ck = tk, Gk = Fk);
        const Tk = fk.Qe[9],
          rk = fk.Qe[4];
        ck.subtractToRef(Yk, Sk), Gk.subtractToRef(Yk, Tk), Jk.CrossToRef(Sk, Tk, rk);
        if (!(Jk.Dot(rk, sk) < 0)) return ak.sBk(Yk), Math.abs(Wk * vk);
        const Dk = fk.Qe[5];
        Jk.CrossToRef(Uk, rk, Dk), Dk.normalize();
        const zk = fk.Qe[9];
        zk.sBk(ck).wRk(Yk);
        const Pk = zk.length();
        if (Pk < Rk.c) return ak.sBk(ck), Jk.Distance(kk, ck);
        zk.normalizeFromLength(Pk);
        const hk = Jk.Dot(Dk, zk),
          qk = fk.Qe[7];
        qk.sBk(Yk).addInPlace(Dk.scaleInPlace(Pk * hk)), Sk.sBk(qk).wRk(ck), Wk = Uk.length(), Uk.normalizeFromLength(Wk);
        let Ck = Jk.Dot(Sk, Uk) / Math.max(Wk, Rk.c);
        return Ck = (0, bk.Clamp)(Ck, 0, 1), qk.sBk(ck).addInPlace(Uk.scaleInPlace(Ck * Wk)), ak.sBk(qk), Jk.Distance(kk, qk)
      }
      static Center(kk, Fk) {
        return Jk.CenterToRef(kk, Fk, Jk.Zero())
      }
      static CenterToRef(kk, Fk, Bk) {
        return Bk.E1((kk._x + Fk._x) / 2, (kk._y + Fk._y) / 2, (kk._z + Fk._z) / 2)
      }
      static RotationFromAxis(kk, Fk, Bk) {
        const Rk = new Jk;
        return Jk.RotationFromAxisToRef(kk, Fk, Bk, Rk), Rk
      }
      static RotationFromAxisToRef(kk, Fk, Bk, Rk) {
        const tk = fk.Quaternion[0];
        return ek.RotationQuaternionFromAxisToRef(kk, Fk, Bk, tk), tk.toEulerAnglesToRef(Rk), Rk
      }
    }
    Jk._V8PerformanceHack = new Jk(.5, .5, .5), Jk._UpReadOnly = Jk.Up(), Jk._DownReadOnly = Jk.Down(), Jk._LeftHandedForwardReadOnly = Jk.Forward(!1), Jk._RightHandedForwardReadOnly = Jk.Forward(!0), Jk._LeftHandedBackwardReadOnly = Jk.Backward(!1), Jk._RightHandedBackwardReadOnly = Jk.Backward(!0), Jk._RightReadOnly = Jk.Right(), Jk._LeftReadOnly = Jk.Left(), Jk._ZeroReadOnly = Jk.Zero(), Jk._OneReadOnly = Jk.One();
    class Ak {
      get x() {
        return this._x
      }
      set x(kk) {
        this._x = kk, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(kk) {
        this._y = kk, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(kk) {
        this._z = kk, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(kk) {
        this._w = kk, this._isDirty = !0
      }
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = kk, this._y = Fk, this._z = Bk, this._w = Rk
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let kk = sk(this._x);
        return kk = 397 * kk ^ sk(this._y), kk = 397 * kk ^ sk(this._z), kk = 397 * kk ^ sk(this._w), kk
      }
      PBk() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(kk, Fk) {
        return void 0 === Fk && (Fk = 0), kk[Fk] = this._x, kk[Fk + 1] = this._y, kk[Fk + 2] = this._z, kk[Fk + 3] = this._w, this
      }
      MFk(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Ak.FromArrayToRef(kk, Fk, this), this
      }
      addInPlace(kk) {
        return this.x += kk._x, this.y += kk._y, this.z += kk._z, this.w += kk._w, this
      }
      addInPlaceFromFloats(kk, Fk, Bk, Rk) {
        return this.x += kk, this.y += Fk, this.z += Bk, this.w += Rk, this
      }
      add(kk) {
        return new Ak(this._x + kk.x, this._y + kk.y, this._z + kk.z, this._w + kk.w)
      }
      addToRef(kk, Fk) {
        return Fk.x = this._x + kk.x, Fk.y = this._y + kk.y, Fk.z = this._z + kk.z, Fk.w = this._w + kk.w, Fk
      }
      wRk(kk) {
        return this.x -= kk.x, this.y -= kk.y, this.z -= kk.z, this.w -= kk.w, this
      }
      subtract(kk) {
        return new Ak(this._x - kk.x, this._y - kk.y, this._z - kk.z, this._w - kk.w)
      }
      subtractToRef(kk, Fk) {
        return Fk.x = this._x - kk.x, Fk.y = this._y - kk.y, Fk.z = this._z - kk.z, Fk.w = this._w - kk.w, Fk
      }
      subtractFromFloats(kk, Fk, Bk, Rk) {
        return new Ak(this._x - kk, this._y - Fk, this._z - Bk, this._w - Rk)
      }
      subtractFromFloatsToRef(kk, Fk, Bk, Rk, tk) {
        return tk.x = this._x - kk, tk.y = this._y - Fk, tk.z = this._z - Bk, tk.w = this._w - Rk, tk
      }
      bt() {
        return new Ak(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(kk) {
        return kk.x = -this._x, kk.y = -this._y, kk.z = -this._z, kk.w = -this._w, kk
      }
      scaleInPlace(kk) {
        return this.x *= kk, this.y *= kk, this.z *= kk, this.w *= kk, this
      }
      scale(kk) {
        return new Ak(this._x * kk, this._y * kk, this._z * kk, this._w * kk)
      }
      scaleToRef(kk, Fk) {
        return Fk.x = this._x * kk, Fk.y = this._y * kk, Fk.z = this._z * kk, Fk.w = this._w * kk, Fk
      }
      scaleAndAddToRef(kk, Fk) {
        return Fk.x += this._x * kk, Fk.y += this._y * kk, Fk.z += this._z * kk, Fk.w += this._w * kk, Fk
      }
      equals(kk) {
        return kk && this._x === kk.x && this._y === kk.y && this._z === kk.z && this._w === kk.w
      }
      equalsWithEpsilon(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rk.c;
        return kk && (0, bk.WithinEpsilon)(this._x, kk.x, Fk) && (0, bk.WithinEpsilon)(this._y, kk.y, Fk) && (0, bk.WithinEpsilon)(this._z, kk.z, Fk) && (0, bk.WithinEpsilon)(this._w, kk.w, Fk)
      }
      LXk(kk, Fk, Bk, Rk) {
        return this._x === kk && this._y === Fk && this._z === Bk && this._w === Rk
      }
      multiplyInPlace(kk) {
        return this.x *= kk.x, this.y *= kk.y, this.z *= kk.z, this.w *= kk.w, this
      }
      multiply(kk) {
        return new Ak(this._x * kk.x, this._y * kk.y, this._z * kk.z, this._w * kk.w)
      }
      multiplyToRef(kk, Fk) {
        return Fk.x = this._x * kk.x, Fk.y = this._y * kk.y, Fk.z = this._z * kk.z, Fk.w = this._w * kk.w, Fk
      }
      multiplyByFloats(kk, Fk, Bk, Rk) {
        return new Ak(this._x * kk, this._y * Fk, this._z * Bk, this._w * Rk)
      }
      divide(kk) {
        return new Ak(this._x / kk.x, this._y / kk.y, this._z / kk.z, this._w / kk.w)
      }
      divideToRef(kk, Fk) {
        return Fk.x = this._x / kk.x, Fk.y = this._y / kk.y, Fk.z = this._z / kk.z, Fk.w = this._w / kk.w, Fk
      }
      divideInPlace(kk) {
        return this.divideToRef(kk, this)
      }
      minimizeInPlace(kk) {
        return kk.x < this._x && (this.x = kk.x), kk.y < this._y && (this.y = kk.y), kk.z < this._z && (this.z = kk.z), kk.w < this._w && (this.w = kk.w), this
      }
      maximizeInPlace(kk) {
        return kk.x > this._x && (this.x = kk.x), kk.y > this._y && (this.y = kk.y), kk.z > this._z && (this.z = kk.z), kk.w > this._w && (this.w = kk.w), this
      }
      minimizeInPlaceFromFloats(kk, Fk, Bk, Rk) {
        return this.x = Math.min(kk, this._x), this.y = Math.min(Fk, this._y), this.z = Math.min(Bk, this._z), this.w = Math.min(Rk, this._w), this
      }
      maximizeInPlaceFromFloats(kk, Fk, Bk, Rk) {
        return this.x = Math.max(kk, this._x), this.y = Math.max(Fk, this._y), this.z = Math.max(Bk, this._z), this.w = Math.max(Rk, this._w), this
      }
      floorToRef(kk) {
        return kk.x = Math.floor(this._x), kk.y = Math.floor(this._y), kk.z = Math.floor(this._z), kk.w = Math.floor(this._w), kk
      }
      floor() {
        return new Ak(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(kk) {
        return kk.x = this._x - Math.floor(this._x), kk.y = this._y - Math.floor(this._y), kk.z = this._z - Math.floor(this._z), kk.w = this._w - Math.floor(this._w), kk
      }
      fract() {
        return new Ak(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(kk) {
        return 0 === kk || 1 === kk ? this : this.scaleInPlace(1 / kk)
      }
      normalizeToNew() {
        return this.normalizeToRef(new Ak)
      }
      normalizeToRef(kk) {
        const Fk = this.length();
        return 0 === Fk || 1 === Fk ? (kk.x = this._x, kk.y = this._y, kk.z = this._z, kk.w = this._w, kk) : this.scaleToRef(1 / Fk, kk)
      }
      toVector3() {
        return new Jk(this._x, this._y, this._z)
      }
      clone() {
        return new Ak(this._x, this._y, this._z, this._w)
      }
      sBk(kk) {
        return this.x = kk.x, this.y = kk.y, this.z = kk.z, this.w = kk.w, this
      }
      E1(kk, Fk, Bk, Rk) {
        return this.x = kk, this.y = Fk, this.z = Bk, this.w = Rk, this
      }
      set(kk, Fk, Bk, Rk) {
        return this.E1(kk, Fk, Bk, Rk)
      }
      J_(kk) {
        return this.x = this.y = this.z = this.w = kk, this
      }
      dot(kk) {
        return this._x * kk.x + this._y * kk.y + this._z * kk.z + this._w * kk.w
      }
      static FromArray(kk, Fk) {
        return Fk || (Fk = 0), new Ak(kk[Fk], kk[Fk + 1], kk[Fk + 2], kk[Fk + 3])
      }
      static FromArrayToRef(kk, Fk, Bk) {
        return Bk.x = kk[Fk], Bk.y = kk[Fk + 1], Bk.z = kk[Fk + 2], Bk.w = kk[Fk + 3], Bk
      }
      static FromFloatArrayToRef(kk, Fk, Bk) {
        return Ak.FromArrayToRef(kk, Fk, Bk), Bk
      }
      static FromFloatsToRef(kk, Fk, Bk, Rk, tk) {
        return tk.x = kk, tk.y = Fk, tk.z = Bk, tk.w = Rk, tk
      }
      static Zero() {
        return new Ak(0, 0, 0, 0)
      }
      static One() {
        return new Ak(1, 1, 1, 1)
      }
      static Random() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Ak((0, bk.RandomRange)(kk, Fk), (0, bk.RandomRange)(kk, Fk), (0, bk.RandomRange)(kk, Fk), (0, bk.RandomRange)(kk, Fk))
      }
      static RandomToRef() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Bk = arguments.length > 2 ? arguments[2] : void 0;
        return Bk.x = (0, bk.RandomRange)(kk, Fk), Bk.y = (0, bk.RandomRange)(kk, Fk), Bk.z = (0, bk.RandomRange)(kk, Fk), Bk.w = (0, bk.RandomRange)(kk, Fk), Bk
      }
      static Clamp(kk, Fk, Bk) {
        return Ak.ClampToRef(kk, Fk, Bk, new Ak)
      }
      static ClampToRef(kk, Fk, Bk, Rk) {
        return Rk.x = (0, bk.Clamp)(kk.x, Fk.x, Bk.x), Rk.y = (0, bk.Clamp)(kk.y, Fk.y, Bk.y), Rk.z = (0, bk.Clamp)(kk.z, Fk.z, Bk.z), Rk.w = (0, bk.Clamp)(kk.w, Fk.w, Bk.w), Rk
      }
      static CheckExtends(kk, Fk, Bk) {
        Fk.minimizeInPlace(kk), Bk.maximizeInPlace(kk)
      }
      static get ZeroReadOnly() {
        return Ak._ZeroReadOnly
      }
      static Normalize(kk) {
        return Ak.NormalizeToRef(kk, new Ak)
      }
      static NormalizeToRef(kk, Fk) {
        return kk.normalizeToRef(Fk), Fk
      }
      static Minimize(kk, Fk) {
        const Bk = new Ak;
        return Bk.sBk(kk), Bk.minimizeInPlace(Fk), Bk
      }
      static Maximize(kk, Fk) {
        const Bk = new Ak;
        return Bk.sBk(kk), Bk.maximizeInPlace(Fk), Bk
      }
      static Distance(kk, Fk) {
        return Math.sqrt(Ak.DistanceSquared(kk, Fk))
      }
      static DistanceSquared(kk, Fk) {
        const Bk = kk.x - Fk.x,
          Rk = kk.y - Fk.y,
          tk = kk.z - Fk.z,
          ak = kk.w - Fk.w;
        return Bk * Bk + Rk * Rk + tk * tk + ak * ak
      }
      static Center(kk, Fk) {
        return Ak.CenterToRef(kk, Fk, new Ak)
      }
      static CenterToRef(kk, Fk, Bk) {
        return Bk.x = (kk.x + Fk.x) / 2, Bk.y = (kk.y + Fk.y) / 2, Bk.z = (kk.z + Fk.z) / 2, Bk.w = (kk.w + Fk.w) / 2, Bk
      }
      static TransformCoordinates(kk, Fk) {
        return Ak.TransformCoordinatesToRef(kk, Fk, new Ak)
      }
      static TransformCoordinatesToRef(kk, Fk, Bk) {
        return Ak.TransformCoordinatesFromFloatsToRef(kk._x, kk._y, kk._z, Fk, Bk), Bk
      }
      static TransformCoordinatesFromFloatsToRef(kk, Fk, Bk, Rk, tk) {
        const ak = Rk.m,
          Xk = kk * ak[0] + Fk * ak[4] + Bk * ak[8] + ak[12],
          bk = kk * ak[1] + Fk * ak[5] + Bk * ak[9] + ak[13],
          wk = kk * ak[2] + Fk * ak[6] + Bk * ak[10] + ak[14],
          dk = kk * ak[3] + Fk * ak[7] + Bk * ak[11] + ak[15];
        return tk.x = Xk, tk.y = bk, tk.z = wk, tk.w = dk, tk
      }
      static TransformNormal(kk, Fk) {
        return Ak.TransformNormalToRef(kk, Fk, new Ak)
      }
      static TransformNormalToRef(kk, Fk, Bk) {
        const Rk = Fk.m,
          tk = kk.x * Rk[0] + kk.y * Rk[4] + kk.z * Rk[8],
          ak = kk.x * Rk[1] + kk.y * Rk[5] + kk.z * Rk[9],
          Xk = kk.x * Rk[2] + kk.y * Rk[6] + kk.z * Rk[10];
        return Bk.x = tk, Bk.y = ak, Bk.z = Xk, Bk.w = kk.w, Bk
      }
      static TransformNormalFromFloatsToRef(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = tk.m;
        return ak.x = kk * Xk[0] + Fk * Xk[4] + Bk * Xk[8], ak.y = kk * Xk[1] + Fk * Xk[5] + Bk * Xk[9], ak.z = kk * Xk[2] + Fk * Xk[6] + Bk * Xk[10], ak.w = Rk, ak
      }
      static FromVector3(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Ak(kk._x, kk._y, kk._z, Fk)
      }
      static Dot(kk, Fk) {
        return kk.x * Fk.x + kk.y * Fk.y + kk.z * Fk.z + kk.w * Fk.w
      }
    }
    Ak._V8PerformanceHack = new Ak(.5, .5, .5, .5), Ak._ZeroReadOnly = Ak.Zero();
    class ek {
      get x() {
        return this._x
      }
      set x(kk) {
        this._x = kk, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(kk) {
        this._y = kk, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(kk) {
        this._z = kk, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(kk) {
        this._w = kk, this._isDirty = !0
      }
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Rk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = kk, this._y = Fk, this._z = Bk, this._w = Rk
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let kk = sk(this._x);
        return kk = 397 * kk ^ sk(this._y), kk = 397 * kk ^ sk(this._z), kk = 397 * kk ^ sk(this._w), kk
      }
      PBk() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return kk[Fk] = this._x, kk[Fk + 1] = this._y, kk[Fk + 2] = this._z, kk[Fk + 3] = this._w, this
      }
      MFk(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ek.FromArrayToRef(kk, Fk, this)
      }
      equals(kk) {
        return kk && this._x === kk._x && this._y === kk._y && this._z === kk._z && this._w === kk._w
      }
      equalsWithEpsilon(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rk.c;
        return kk && (0, bk.WithinEpsilon)(this._x, kk._x, Fk) && (0, bk.WithinEpsilon)(this._y, kk._y, Fk) && (0, bk.WithinEpsilon)(this._z, kk._z, Fk) && (0, bk.WithinEpsilon)(this._w, kk._w, Fk)
      }
      isApprox(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Rk.c;
        return kk && ((0, bk.WithinEpsilon)(this._x, kk._x, Fk) && (0, bk.WithinEpsilon)(this._y, kk._y, Fk) && (0, bk.WithinEpsilon)(this._z, kk._z, Fk) && (0, bk.WithinEpsilon)(this._w, kk._w, Fk) || (0, bk.WithinEpsilon)(this._x, -kk._x, Fk) && (0, bk.WithinEpsilon)(this._y, -kk._y, Fk) && (0, bk.WithinEpsilon)(this._z, -kk._z, Fk) && (0, bk.WithinEpsilon)(this._w, -kk._w, Fk))
      }
      clone() {
        return new ek(this._x, this._y, this._z, this._w)
      }
      sBk(kk) {
        return this._x = kk._x, this._y = kk._y, this._z = kk._z, this._w = kk._w, this._isDirty = !0, this
      }
      E1(kk, Fk, Bk, Rk) {
        return this._x = kk, this._y = Fk, this._z = Bk, this._w = Rk, this._isDirty = !0, this
      }
      set(kk, Fk, Bk, Rk) {
        return this.E1(kk, Fk, Bk, Rk)
      }
      J_(kk) {
        return this.E1(kk, kk, kk, kk)
      }
      add(kk) {
        return new ek(this._x + kk._x, this._y + kk._y, this._z + kk._z, this._w + kk._w)
      }
      addInPlace(kk) {
        return this._x += kk._x, this._y += kk._y, this._z += kk._z, this._w += kk._w, this._isDirty = !0, this
      }
      addToRef(kk, Fk) {
        return Fk._x = this._x + kk._x, Fk._y = this._y + kk._y, Fk._z = this._z + kk._z, Fk._w = this._w + kk._w, Fk._isDirty = !0, Fk
      }
      addInPlaceFromFloats(kk, Fk, Bk, Rk) {
        return this._x += kk, this._y += Fk, this._z += Bk, this._w += Rk, this._isDirty = !0, this
      }
      subtractToRef(kk, Fk) {
        return Fk._x = this._x - kk._x, Fk._y = this._y - kk._y, Fk._z = this._z - kk._z, Fk._w = this._w - kk._w, Fk._isDirty = !0, Fk
      }
      subtractFromFloats(kk, Fk, Bk, Rk) {
        return this.subtractFromFloatsToRef(kk, Fk, Bk, Rk, new ek)
      }
      subtractFromFloatsToRef(kk, Fk, Bk, Rk, tk) {
        return tk._x = this._x - kk, tk._y = this._y - Fk, tk._z = this._z - Bk, tk._w = this._w - Rk, tk._isDirty = !0, tk
      }
      subtract(kk) {
        return new ek(this._x - kk._x, this._y - kk._y, this._z - kk._z, this._w - kk._w)
      }
      wRk(kk) {
        return this._x -= kk._x, this._y -= kk._y, this._z -= kk._z, this._w -= kk._w, this._isDirty = !0, this
      }
      scale(kk) {
        return new ek(this._x * kk, this._y * kk, this._z * kk, this._w * kk)
      }
      scaleToRef(kk, Fk) {
        return Fk._x = this._x * kk, Fk._y = this._y * kk, Fk._z = this._z * kk, Fk._w = this._w * kk, Fk._isDirty = !0, Fk
      }
      scaleInPlace(kk) {
        return this._x *= kk, this._y *= kk, this._z *= kk, this._w *= kk, this._isDirty = !0, this
      }
      scaleAndAddToRef(kk, Fk) {
        return Fk._x += this._x * kk, Fk._y += this._y * kk, Fk._z += this._z * kk, Fk._w += this._w * kk, Fk._isDirty = !0, Fk
      }
      multiply(kk) {
        const Fk = new ek(0, 0, 0, 1);
        return this.multiplyToRef(kk, Fk), Fk
      }
      multiplyToRef(kk, Fk) {
        const Bk = this._x * kk._w + this._y * kk._z - this._z * kk._y + this._w * kk._x,
          Rk = -this._x * kk._z + this._y * kk._w + this._z * kk._x + this._w * kk._y,
          tk = this._x * kk._y - this._y * kk._x + this._z * kk._w + this._w * kk._z,
          ak = -this._x * kk._x - this._y * kk._y - this._z * kk._z + this._w * kk._w;
        return Fk.E1(Bk, Rk, tk, ak), Fk
      }
      multiplyInPlace(kk) {
        return this.multiplyToRef(kk, this)
      }
      multiplyByFloats(kk, Fk, Bk, Rk) {
        return this._x *= kk, this._y *= Fk, this._z *= Bk, this._w *= Rk, this._isDirty = !0, this
      }
      divide(kk) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(kk, Fk) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(kk) {
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
      bt() {
        return this.negateToRef(new ek)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(kk) {
        return kk._x = -this._x, kk._y = -this._y, kk._z = -this._z, kk._w = -this._w, kk._isDirty = !0, kk
      }
      LXk(kk, Fk, Bk, Rk) {
        return this._x === kk && this._y === Fk && this._z === Bk && this._w === Rk
      }
      floorToRef(kk) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(kk) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(kk) {
        return kk.E1(-this._x, -this._y, -this._z, this._w), kk
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new ek(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const kk = this.conjugate(),
          Fk = this.lengthSquared();
        return 0 == Fk || 1 == Fk || kk.scaleInPlace(1 / Fk), kk
      }
      invertInPlace() {
        this.conjugateInPlace();
        const kk = this.lengthSquared();
        return 0 == kk || 1 == kk || this.scaleInPlace(1 / kk), this
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
      normalizeFromLength(kk) {
        return 0 === kk || 1 === kk ? this : this.scaleInPlace(1 / kk)
      }
      normalizeToNew() {
        const kk = new ek(0, 0, 0, 1);
        return this.normalizeToRef(kk), kk
      }
      normalizeToRef(kk) {
        const Fk = this.length();
        return 0 === Fk || 1 === Fk ? kk.E1(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / Fk, kk)
      }
      toEulerAngles() {
        const kk = Jk.Zero();
        return this.toEulerAnglesToRef(kk), kk
      }
      toEulerAnglesToRef(kk) {
        const Fk = this._z,
          Bk = this._x,
          Rk = this._y,
          tk = this._w,
          ak = Rk * Fk - Bk * tk,
          Xk = .4999999;
        if (ak < -Xk) kk._y = 2 * Math.atan2(Rk, tk), kk._x = Math.PI / 2, kk._z = 0, kk._isDirty = !0;
        else if (ak > Xk) kk._y = 2 * Math.atan2(Rk, tk), kk._x = -Math.PI / 2, kk._z = 0, kk._isDirty = !0;
        else {
          const Xk = tk * tk,
            bk = Fk * Fk,
            wk = Bk * Bk,
            dk = Rk * Rk;
          kk._z = Math.atan2(2 * (Bk * Rk + Fk * tk), -bk - wk + dk + Xk), kk._x = Math.asin(-2 * ak), kk._y = Math.atan2(2 * (Fk * Bk + Rk * tk), bk - wk - dk + Xk), kk._isDirty = !0
        }
        return kk
      }
      toAlphaBetaGammaToRef(kk) {
        const Fk = this._z,
          Bk = this._x,
          Rk = this._y,
          tk = this._w,
          ak = Math.sqrt(Bk * Bk + Rk * Rk),
          Xk = Math.sqrt(Fk * Fk + tk * tk),
          bk = 2 * Math.atan2(ak, Xk),
          wk = 2 * Math.atan2(Fk, tk),
          dk = 2 * Math.atan2(Rk, Bk),
          sk = (wk + dk) / 2,
          Vk = (wk - dk) / 2;
        return kk.set(Vk, bk, sk), kk
      }
      toRotationMatrix(kk) {
        return yk.FromQuaternionToRef(this, kk), kk
      }
      fromRotationMatrix(kk) {
        return ek.FromRotationMatrixToRef(kk, this), this
      }
      dot(kk) {
        return this._x * kk._x + this._y * kk._y + this._z * kk._z + this._w * kk._w
      }
      toAxisAngle() {
        const kk = Jk.Zero();
        return {
          axis: kk,
          angle: this.toAxisAngleToRef(kk)
        }
      }
      toAxisAngleToRef(kk) {
        let Fk;
        const Bk = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          Rk = this._w;
        return Bk > 0 ? (Fk = 2 * Math.atan2(Bk, Rk), kk.set(this._x / Bk, this._y / Bk, this._z / Bk)) : (Fk = 0, kk.set(1, 0, 0)), Fk
      }
      static FromRotationMatrix(kk) {
        const Fk = new ek;
        return ek.FromRotationMatrixToRef(kk, Fk), Fk
      }
      static FromRotationMatrixToRef(kk, Fk) {
        const Bk = kk.m,
          Rk = Bk[0],
          tk = Bk[4],
          ak = Bk[8],
          Xk = Bk[1],
          bk = Bk[5],
          wk = Bk[9],
          dk = Bk[2],
          sk = Bk[6],
          Vk = Bk[10],
          Jk = Rk + bk + Vk;
        let Ak;
        return Jk > 0 ? (Ak = .5 / Math.sqrt(Jk + 1), Fk._w = .25 / Ak, Fk._x = (sk - wk) * Ak, Fk._y = (ak - dk) * Ak, Fk._z = (Xk - tk) * Ak, Fk._isDirty = !0) : Rk > bk && Rk > Vk ? (Ak = 2 * Math.sqrt(1 + Rk - bk - Vk), Fk._w = (sk - wk) / Ak, Fk._x = .25 * Ak, Fk._y = (tk + Xk) / Ak, Fk._z = (ak + dk) / Ak, Fk._isDirty = !0) : bk > Vk ? (Ak = 2 * Math.sqrt(1 + bk - Rk - Vk), Fk._w = (ak - dk) / Ak, Fk._x = (tk + Xk) / Ak, Fk._y = .25 * Ak, Fk._z = (wk + sk) / Ak, Fk._isDirty = !0) : (Ak = 2 * Math.sqrt(1 + Vk - Rk - bk), Fk._w = (Xk - tk) / Ak, Fk._x = (ak + dk) / Ak, Fk._y = (wk + sk) / Ak, Fk._z = .25 * Ak, Fk._isDirty = !0), Fk
      }
      static Dot(kk, Fk) {
        return kk._x * Fk._x + kk._y * Fk._y + kk._z * Fk._z + kk._w * Fk._w
      }
      static AreClose(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const Rk = ek.Dot(kk, Fk);
        return 1 - Rk * Rk <= Bk
      }
      static SmoothToRef(kk, Fk, Bk, Rk, tk) {
        let ak = 0 === Rk ? 1 : Bk / Rk;
        return ak = (0, bk.Clamp)(ak, 0, 1), ek.SlerpToRef(kk, Fk, ak, tk), tk
      }
      static Zero() {
        return new ek(0, 0, 0, 0)
      }
      static Inverse(kk) {
        return new ek(-kk._x, -kk._y, -kk._z, kk._w)
      }
      static InverseToRef(kk, Fk) {
        return Fk.set(-kk._x, -kk._y, -kk._z, kk._w), Fk
      }
      static Identity() {
        return new ek(0, 0, 0, 1)
      }
      static IsIdentity(kk) {
        return kk && 0 === kk._x && 0 === kk._y && 0 === kk._z && 1 === kk._w
      }
      static RotationAxis(kk, Fk) {
        return ek.RotationAxisToRef(kk, Fk, new ek)
      }
      static RotationAxisToRef(kk, Fk, Bk) {
        Bk._w = Math.cos(Fk / 2);
        const Rk = Math.sin(Fk / 2) / kk.length();
        return Bk._x = kk._x * Rk, Bk._y = kk._y * Rk, Bk._z = kk._z * Rk, Bk._isDirty = !0, Bk
      }
      static FromArray(kk, Fk) {
        return Fk || (Fk = 0), new ek(kk[Fk], kk[Fk + 1], kk[Fk + 2], kk[Fk + 3])
      }
      static FromArrayToRef(kk, Fk, Bk) {
        return Bk._x = kk[Fk], Bk._y = kk[Fk + 1], Bk._z = kk[Fk + 2], Bk._w = kk[Fk + 3], Bk._isDirty = !0, Bk
      }
      static FromFloatsToRef(kk, Fk, Bk, Rk, tk) {
        return tk.E1(kk, Fk, Bk, Rk), tk
      }
      static FromEulerAngles(kk, Fk, Bk) {
        const Rk = new ek;
        return ek.RotationYawPitchRollToRef(Fk, kk, Bk, Rk), Rk
      }
      static FromEulerAnglesToRef(kk, Fk, Bk, Rk) {
        return ek.RotationYawPitchRollToRef(Fk, kk, Bk, Rk), Rk
      }
      static FromEulerVector(kk) {
        const Fk = new ek;
        return ek.RotationYawPitchRollToRef(kk._y, kk._x, kk._z, Fk), Fk
      }
      static FromEulerVectorToRef(kk, Fk) {
        return ek.RotationYawPitchRollToRef(kk._y, kk._x, kk._z, Fk), Fk
      }
      static FromUnitVectorsToRef(kk, Fk, Bk) {
        let tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Rk.c;
        const ak = Jk.Dot(kk, Fk) + 1;
        return ak < tk ? Math.abs(kk.x) > Math.abs(kk.z) ? Bk.set(-kk.y, kk.x, 0, 0) : Bk.set(0, -kk.z, kk.y, 0) : (Jk.CrossToRef(kk, Fk, mk.Qe[0]), Bk.set(mk.Qe[0].x, mk.Qe[0].y, mk.Qe[0].z, ak)), Bk.normalize()
      }
      static RotationYawPitchRoll(kk, Fk, Bk) {
        const Rk = new ek;
        return ek.RotationYawPitchRollToRef(kk, Fk, Bk, Rk), Rk
      }
      static RotationYawPitchRollToRef(kk, Fk, Bk, Rk) {
        const tk = .5 * Bk,
          ak = .5 * Fk,
          Xk = .5 * kk,
          bk = Math.sin(tk),
          wk = Math.cos(tk),
          dk = Math.sin(ak),
          sk = Math.cos(ak),
          Vk = Math.sin(Xk),
          Jk = Math.cos(Xk);
        return Rk._x = Jk * dk * wk + Vk * sk * bk, Rk._y = Vk * sk * wk - Jk * dk * bk, Rk._z = Jk * sk * bk - Vk * dk * wk, Rk._w = Jk * sk * wk + Vk * dk * bk, Rk._isDirty = !0, Rk
      }
      static RotationAlphaBetaGamma(kk, Fk, Bk) {
        const Rk = new ek;
        return ek.RotationAlphaBetaGammaToRef(kk, Fk, Bk, Rk), Rk
      }
      static RotationAlphaBetaGammaToRef(kk, Fk, Bk, Rk) {
        const tk = .5 * (Bk + kk),
          ak = .5 * (Bk - kk),
          Xk = .5 * Fk;
        return Rk._x = Math.cos(ak) * Math.sin(Xk), Rk._y = Math.sin(ak) * Math.sin(Xk), Rk._z = Math.sin(tk) * Math.cos(Xk), Rk._w = Math.cos(tk) * Math.cos(Xk), Rk._isDirty = !0, Rk
      }
      static RotationQuaternionFromAxis(kk, Fk, Bk) {
        const Rk = new ek(0, 0, 0, 0);
        return ek.RotationQuaternionFromAxisToRef(kk, Fk, Bk, Rk), Rk
      }
      static RotationQuaternionFromAxisToRef(kk, Fk, Bk, Rk) {
        const tk = fk.Matrix[0];
        return kk = kk.normalizeToRef(fk.Qe[0]), Fk = Fk.normalizeToRef(fk.Qe[1]), Bk = Bk.normalizeToRef(fk.Qe[2]), yk.FromXYZAxesToRef(kk, Fk, Bk, tk), ek.FromRotationMatrixToRef(tk, Rk), Rk
      }
      static FromLookDirectionLH(kk, Fk) {
        const Bk = new ek;
        return ek.FromLookDirectionLHToRef(kk, Fk, Bk), Bk
      }
      static FromLookDirectionLHToRef(kk, Fk, Bk) {
        const Rk = fk.Matrix[0];
        return yk.LookDirectionLHToRef(kk, Fk, Rk), ek.FromRotationMatrixToRef(Rk, Bk), Bk
      }
      static FromLookDirectionRH(kk, Fk) {
        const Bk = new ek;
        return ek.FromLookDirectionRHToRef(kk, Fk, Bk), Bk
      }
      static FromLookDirectionRHToRef(kk, Fk, Bk) {
        const Rk = fk.Matrix[0];
        return yk.LookDirectionRHToRef(kk, Fk, Rk), ek.FromRotationMatrixToRef(Rk, Bk)
      }
      static Slerp(kk, Fk, Bk) {
        const Rk = ek.Identity();
        return ek.SlerpToRef(kk, Fk, Bk, Rk), Rk
      }
      static SlerpToRef(kk, Fk, Bk, Rk) {
        let tk, ak, Xk = kk._x * Fk._x + kk._y * Fk._y + kk._z * Fk._z + kk._w * Fk._w,
          bk = !1;
        if (Xk < 0 && (bk = !0, Xk = -Xk), Xk > .999999) ak = 1 - Bk, tk = bk ? -Bk : Bk;
        else {
          const kk = Math.acos(Xk),
            Fk = 1 / Math.sin(kk);
          ak = Math.sin((1 - Bk) * kk) * Fk, tk = bk ? -Math.sin(Bk * kk) * Fk : Math.sin(Bk * kk) * Fk
        }
        return Rk._x = ak * kk._x + tk * Fk._x, Rk._y = ak * kk._y + tk * Fk._y, Rk._z = ak * kk._z + tk * Fk._z, Rk._w = ak * kk._w + tk * Fk._w, Rk._isDirty = !0, Rk
      }
      static Hermite(kk, Fk, Bk, Rk, tk) {
        const ak = tk * tk,
          Xk = tk * ak,
          bk = 2 * Xk - 3 * ak + 1,
          wk = -2 * Xk + 3 * ak,
          dk = Xk - 2 * ak + tk,
          sk = Xk - ak,
          Vk = kk._x * bk + Bk._x * wk + Fk._x * dk + Rk._x * sk,
          Jk = kk._y * bk + Bk._y * wk + Fk._y * dk + Rk._y * sk,
          Ak = kk._z * bk + Bk._z * wk + Fk._z * dk + Rk._z * sk,
          yk = kk._w * bk + Bk._w * wk + Fk._w * dk + Rk._w * sk;
        return new ek(Vk, Jk, Ak, yk)
      }
      static Hermite1stDerivative(kk, Fk, Bk, Rk, tk) {
        const ak = new ek;
        return this.Hermite1stDerivativeToRef(kk, Fk, Bk, Rk, tk, ak), ak
      }
      static Hermite1stDerivativeToRef(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = tk * tk;
        return ak._x = 6 * (Xk - tk) * kk._x + (3 * Xk - 4 * tk + 1) * Fk._x + 6 * (-Xk + tk) * Bk._x + (3 * Xk - 2 * tk) * Rk._x, ak._y = 6 * (Xk - tk) * kk._y + (3 * Xk - 4 * tk + 1) * Fk._y + 6 * (-Xk + tk) * Bk._y + (3 * Xk - 2 * tk) * Rk._y, ak._z = 6 * (Xk - tk) * kk._z + (3 * Xk - 4 * tk + 1) * Fk._z + 6 * (-Xk + tk) * Bk._z + (3 * Xk - 2 * tk) * Rk._z, ak._w = 6 * (Xk - tk) * kk._w + (3 * Xk - 4 * tk + 1) * Fk._w + 6 * (-Xk + tk) * Bk._w + (3 * Xk - 2 * tk) * Rk._w, ak._isDirty = !0, ak
      }
      static Normalize(kk) {
        const Fk = ek.Zero();
        return ek.NormalizeToRef(kk, Fk), Fk
      }
      static NormalizeToRef(kk, Fk) {
        return kk.normalizeToRef(Fk), Fk
      }
      static Clamp(kk, Fk, Bk) {
        const Rk = new ek;
        return ek.ClampToRef(kk, Fk, Bk, Rk), Rk
      }
      static ClampToRef(kk, Fk, Bk, Rk) {
        return Rk.E1((0, bk.Clamp)(kk.x, Fk.x, Bk.x), (0, bk.Clamp)(kk.y, Fk.y, Bk.y), (0, bk.Clamp)(kk.z, Fk.z, Bk.z), (0, bk.Clamp)(kk.w, Fk.w, Bk.w))
      }
      static Random() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new ek((0, bk.RandomRange)(kk, Fk), (0, bk.RandomRange)(kk, Fk), (0, bk.RandomRange)(kk, Fk), (0, bk.RandomRange)(kk, Fk))
      }
      static RandomToRef() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).E1((0, bk.RandomRange)(kk, Fk), (0, bk.RandomRange)(kk, Fk), (0, bk.RandomRange)(kk, Fk), (0, bk.RandomRange)(kk, Fk))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(kk, Fk) {
        return Math.sqrt(ek.DistanceSquared(kk, Fk))
      }
      static DistanceSquared(kk, Fk) {
        const Bk = kk.x - Fk.x,
          Rk = kk.y - Fk.y,
          tk = kk.z - Fk.z,
          ak = kk.w - Fk.w;
        return Bk * Bk + Rk * Rk + tk * tk + ak * ak
      }
      static Center(kk, Fk) {
        return ek.CenterToRef(kk, Fk, ek.Zero())
      }
      static CenterToRef(kk, Fk, Bk) {
        return Bk.E1((kk.x + Fk.x) / 2, (kk.y + Fk.y) / 2, (kk.z + Fk.z) / 2, (kk.w + Fk.w) / 2)
      }
    }
    ek._V8PerformanceHack = new ek(.5, .5, .5, .5);
    class yk {
      static get Use64Bits() {
        return ak.e.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = wk.n._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Rk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = kk, this._isIdentity3x2 = kk || Bk, this._isIdentityDirty = !this._isIdentity && Fk, this._isIdentity3x2Dirty = !this._isIdentity3x2 && Rk
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, ak.e.MatrixTrackPrecisionChange && ak.e.MatrixTrackedMatrices.push(this), this._m = new ak.e.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const kk = this._m;
          this._isIdentity = 1 === kk[0] && 0 === kk[1] && 0 === kk[2] && 0 === kk[3] && 0 === kk[4] && 1 === kk[5] && 0 === kk[6] && 0 === kk[7] && 0 === kk[8] && 0 === kk[9] && 1 === kk[10] && 0 === kk[11] && 0 === kk[12] && 0 === kk[13] && 0 === kk[14] && 1 === kk[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const kk = this._m,
          Fk = kk[0],
          Bk = kk[1],
          Rk = kk[2],
          tk = kk[3],
          ak = kk[4],
          Xk = kk[5],
          bk = kk[6],
          wk = kk[7],
          dk = kk[8],
          sk = kk[9],
          Vk = kk[10],
          Jk = kk[11],
          Ak = kk[12],
          ek = kk[13],
          yk = kk[14],
          fk = kk[15],
          mk = Vk * fk - yk * Jk,
          Wk = sk * fk - ek * Jk,
          vk = sk * yk - ek * Vk,
          ik = dk * fk - Ak * Jk,
          Yk = dk * yk - Vk * Ak,
          Lk = dk * ek - Ak * sk;
        return Fk * +(Xk * mk - bk * Wk + wk * vk) + Bk * -(ak * mk - bk * ik + wk * Yk) + Rk * +(ak * Wk - Xk * ik + wk * Lk) + tk * -(ak * vk - Xk * Yk + bk * Lk)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!kk) return this._m;
        const Bk = this._m;
        for (let Rk = 0; Rk < 16; Rk++) kk[Fk + Rk] = Bk[Rk];
        return this
      }
      PBk() {
        return this._m
      }
      MFk(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return yk.FromArrayToRef(kk, Fk, this)
      }
      E1() {
        for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
        return yk.FromArrayToRef(Fk, 0, this)
      }
      set() {
        const kk = this._m;
        for (let Fk = 0; Fk < 16; Fk++) kk[Fk] = Fk < 0 || arguments.length <= Fk ? void 0 : arguments[Fk];
        return this.markAsUpdated(), this
      }
      J_(kk) {
        const Fk = this._m;
        for (let Bk = 0; Bk < 16; Bk++) Fk[Bk] = kk;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return yk.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(kk) {
        const Fk = new yk;
        return this.addToRef(kk, Fk), Fk
      }
      addToRef(kk, Fk) {
        const Bk = this._m,
          Rk = Fk._m,
          tk = kk.m;
        for (let ak = 0; ak < 16; ak++) Rk[ak] = Bk[ak] + tk[ak];
        return Fk.markAsUpdated(), Fk
      }
      addToSelf(kk) {
        const Fk = this._m,
          Bk = kk.m;
        return Fk[0] += Bk[0], Fk[1] += Bk[1], Fk[2] += Bk[2], Fk[3] += Bk[3], Fk[4] += Bk[4], Fk[5] += Bk[5], Fk[6] += Bk[6], Fk[7] += Bk[7], Fk[8] += Bk[8], Fk[9] += Bk[9], Fk[10] += Bk[10], Fk[11] += Bk[11], Fk[12] += Bk[12], Fk[13] += Bk[13], Fk[14] += Bk[14], Fk[15] += Bk[15], this.markAsUpdated(), this
      }
      addInPlace(kk) {
        const Fk = this._m,
          Bk = kk.m;
        for (let Rk = 0; Rk < 16; Rk++) Fk[Rk] += Bk[Rk];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const kk = this._m;
        for (let Fk = 0; Fk < 16; Fk++) kk[Fk] += Fk < 0 || arguments.length <= Fk ? void 0 : arguments[Fk];
        return this.markAsUpdated(), this
      }
      subtract(kk) {
        const Fk = this._m,
          Bk = kk.m;
        for (let Rk = 0; Rk < 16; Rk++) Fk[Rk] -= Bk[Rk];
        return this.markAsUpdated(), this
      }
      subtractToRef(kk, Fk) {
        const Bk = this._m,
          Rk = kk.m,
          tk = Fk._m;
        for (let ak = 0; ak < 16; ak++) tk[ak] = Bk[ak] - Rk[ak];
        return Fk.markAsUpdated(), Fk
      }
      wRk(kk) {
        const Fk = this._m,
          Bk = kk.m;
        for (let Rk = 0; Rk < 16; Rk++) Fk[Rk] -= Bk[Rk];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
        return this.subtractFromFloatsToRef(...Fk, new yk)
      }
      subtractFromFloatsToRef() {
        for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
        const Rk = Fk.pop(),
          tk = this._m,
          ak = Rk._m,
          Xk = Fk;
        for (let bk = 0; bk < 16; bk++) ak[bk] = tk[bk] - Xk[bk];
        return Rk.markAsUpdated(), Rk
      }
      invertToRef(kk) {
        return !0 === this._isIdentity ? (yk.IdentityToRef(kk), kk) : ((0, wk.i)(this, kk.PBk()) ? kk.markAsUpdated() : kk.sBk(this), kk)
      }
      addAtIndex(kk, Fk) {
        return this._m[kk] += Fk, this.markAsUpdated(), this
      }
      multiplyAtIndex(kk, Fk) {
        return this._m[kk] *= Fk, this.markAsUpdated(), this
      }
      setTranslationFromFloats(kk, Fk, Bk) {
        return this._m[12] = kk, this._m[13] = Fk, this._m[14] = Bk, this.markAsUpdated(), this
      }
      addTranslationFromFloats(kk, Fk, Bk) {
        return this._m[12] += kk, this._m[13] += Fk, this._m[14] += Bk, this.markAsUpdated(), this
      }
      setTranslation(kk) {
        return this.setTranslationFromFloats(kk._x, kk._y, kk._z)
      }
      getTranslation() {
        return new Jk(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(kk) {
        return kk.x = this._m[12], kk.y = this._m[13], kk.z = this._m[14], kk
      }
      removeRotationAndScaling() {
        const kk = this.m;
        return yk.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, kk[12], kk[13], kk[14], kk[15], this), this._updateIdentityStatus(0 === kk[12] && 0 === kk[13] && 0 === kk[14] && 1 === kk[15]), this
      }
      sBk(kk) {
        kk.copyToArray(this._m);
        const Fk = kk;
        return this.updateFlag = Fk.updateFlag, this._updateIdentityStatus(Fk._isIdentity, Fk._isIdentityDirty, Fk._isIdentity3x2, Fk._isIdentity3x2Dirty), this
      }
      copyToArray(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, wk.e)(this, kk, Fk), this
      }
      multiply(kk) {
        const Fk = new yk;
        return this.multiplyToRef(kk, Fk), Fk
      }
      multiplyInPlace(kk) {
        const Fk = this._m,
          Bk = kk.m;
        for (let Rk = 0; Rk < 16; Rk++) Fk[Rk] *= Bk[Rk];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const kk = this._m;
        for (let Fk = 0; Fk < 16; Fk++) kk[Fk] *= Fk < 0 || arguments.length <= Fk ? void 0 : arguments[Fk];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var kk = arguments.length, Fk = new Array(kk), Bk = 0; Bk < kk; Bk++) Fk[Bk] = arguments[Bk];
        const Rk = Fk.pop(),
          tk = this._m,
          ak = Rk._m,
          Xk = Fk;
        for (let bk = 0; bk < 16; bk++) ak[bk] = tk[bk] * Xk[bk];
        return Rk.markAsUpdated(), Rk
      }
      multiplyToRef(kk, Fk) {
        return this._isIdentity ? (Fk.sBk(kk), Fk) : kk._isIdentity ? (Fk.sBk(this), Fk) : (this.multiplyToArray(kk, Fk._m, 0), Fk.markAsUpdated(), Fk)
      }
      multiplyToArray(kk, Fk, Bk) {
        return (0, wk.q)(this, kk, Fk, Bk), this
      }
      divide(kk) {
        return this.divideToRef(kk, new yk)
      }
      divideToRef(kk, Fk) {
        const Bk = this._m,
          Rk = kk.m,
          tk = Fk._m;
        for (let ak = 0; ak < 16; ak++) tk[ak] = Bk[ak] / Rk[ak];
        return Fk.markAsUpdated(), Fk
      }
      divideInPlace(kk) {
        const Fk = this._m,
          Bk = kk.m;
        for (let Rk = 0; Rk < 16; Rk++) Fk[Rk] /= Bk[Rk];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(kk) {
        const Fk = this._m,
          Bk = kk.m;
        for (let Rk = 0; Rk < 16; Rk++) Fk[Rk] = Math.min(Fk[Rk], Bk[Rk]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const kk = this._m;
        for (let Fk = 0; Fk < 16; Fk++) kk[Fk] = Math.min(kk[Fk], Fk < 0 || arguments.length <= Fk ? void 0 : arguments[Fk]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(kk) {
        const Fk = this._m,
          Bk = kk.m;
        for (let Rk = 0; Rk < 16; Rk++) Fk[Rk] = Math.max(Fk[Rk], Bk[Rk]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const kk = this._m;
        for (let Fk = 0; Fk < 16; Fk++) kk[Fk] = Math.max(kk[Fk], Fk < 0 || arguments.length <= Fk ? void 0 : arguments[Fk]);
        return this.markAsUpdated(), this
      }
      bt() {
        return this.negateToRef(new yk)
      }
      negateInPlace() {
        const kk = this._m;
        for (let Fk = 0; Fk < 16; Fk++) kk[Fk] = -kk[Fk];
        return this.markAsUpdated(), this
      }
      negateToRef(kk) {
        const Fk = this._m,
          Bk = kk._m;
        for (let Rk = 0; Rk < 16; Rk++) Bk[Rk] = -Fk[Rk];
        return kk.markAsUpdated(), kk
      }
      equals(kk) {
        const Fk = kk;
        if (!Fk) return !1;
        if ((this._isIdentity || Fk._isIdentity) && !this._isIdentityDirty && !Fk._isIdentityDirty) return this._isIdentity && Fk._isIdentity;
        const Bk = this.m,
          Rk = Fk.m;
        return Bk[0] === Rk[0] && Bk[1] === Rk[1] && Bk[2] === Rk[2] && Bk[3] === Rk[3] && Bk[4] === Rk[4] && Bk[5] === Rk[5] && Bk[6] === Rk[6] && Bk[7] === Rk[7] && Bk[8] === Rk[8] && Bk[9] === Rk[9] && Bk[10] === Rk[10] && Bk[11] === Rk[11] && Bk[12] === Rk[12] && Bk[13] === Rk[13] && Bk[14] === Rk[14] && Bk[15] === Rk[15]
      }
      equalsWithEpsilon(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Bk = this._m,
          Rk = kk.m;
        for (let tk = 0; tk < 16; tk++)
          if (!(0, bk.WithinEpsilon)(Bk[tk], Rk[tk], Fk)) return !1;
        return !0
      }
      LXk() {
        const kk = this._m;
        for (let Fk = 0; Fk < 16; Fk++)
          if (kk[Fk] != (Fk < 0 || arguments.length <= Fk ? void 0 : arguments[Fk])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new yk)
      }
      floorToRef(kk) {
        const Fk = this._m,
          Bk = kk._m;
        for (let Rk = 0; Rk < 16; Rk++) Bk[Rk] = Math.floor(Fk[Rk]);
        return kk.markAsUpdated(), kk
      }
      fract() {
        return this.fractToRef(new yk)
      }
      fractToRef(kk) {
        const Fk = this._m,
          Bk = kk._m;
        for (let Rk = 0; Rk < 16; Rk++) Bk[Rk] = Fk[Rk] - Math.floor(Fk[Rk]);
        return kk.markAsUpdated(), kk
      }
      clone() {
        const kk = new yk;
        return kk.sBk(this), kk
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let kk = sk(this._m[0]);
        for (let Fk = 1; Fk < 16; Fk++) kk = 397 * kk ^ sk(this._m[Fk]);
        return kk
      }
      decomposeToTransformNode(kk) {
        return kk.rotationQuaternion = kk.rotationQuaternion || new ek, this.decompose(kk.ta, kk.rotationQuaternion, kk.position)
      }
      decompose(kk, Fk, Bk, Rk) {
        let tk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return Bk && Bk.J_(0), kk && kk.J_(1), Fk && Fk.E1(0, 0, 0, 1), !0;
        const ak = this._m;
        if (Bk && Bk.E1(ak[12], ak[13], ak[14]), (kk = kk || fk.Qe[0]).x = Math.sqrt(ak[0] * ak[0] + ak[1] * ak[1] + ak[2] * ak[2]), kk.y = Math.sqrt(ak[4] * ak[4] + ak[5] * ak[5] + ak[6] * ak[6]), kk.z = Math.sqrt(ak[8] * ak[8] + ak[9] * ak[9] + ak[10] * ak[10]), Rk) {
          const Fk = (tk ? Rk.absoluteScaling.x : Rk.ta.x) < 0 ? -1 : 1,
            Bk = (tk ? Rk.absoluteScaling.y : Rk.ta.y) < 0 ? -1 : 1,
            ak = (tk ? Rk.absoluteScaling.z : Rk.ta.z) < 0 ? -1 : 1;
          kk.x *= Fk, kk.y *= Bk, kk.z *= ak
        } else this.determinant() <= 0 && (kk.y *= -1);
        if (0 === kk._x || 0 === kk._y || 0 === kk._z) return Fk && Fk.E1(0, 0, 0, 1), !1;
        if (Fk) {
          const Bk = 1 / kk._x,
            Rk = 1 / kk._y,
            tk = 1 / kk._z;
          yk.FromValuesToRef(ak[0] * Bk, ak[1] * Bk, ak[2] * Bk, 0, ak[4] * Rk, ak[5] * Rk, ak[6] * Rk, 0, ak[8] * tk, ak[9] * tk, ak[10] * tk, 0, 0, 0, 0, 1, fk.Matrix[0]), ek.FromRotationMatrixToRef(fk.Matrix[0], Fk)
        }
        return !0
      }
      getRow(kk) {
        if (kk < 0 || kk > 3) return null;
        const Fk = 4 * kk;
        return new Ak(this._m[Fk + 0], this._m[Fk + 1], this._m[Fk + 2], this._m[Fk + 3])
      }
      getRowToRef(kk, Fk) {
        if (kk >= 0 && kk <= 3) {
          const Bk = 4 * kk;
          Fk.x = this._m[Bk + 0], Fk.y = this._m[Bk + 1], Fk.z = this._m[Bk + 2], Fk.w = this._m[Bk + 3]
        }
        return Fk
      }
      setRow(kk, Fk) {
        return this.setRowFromFloats(kk, Fk.x, Fk.y, Fk.z, Fk.w)
      }
      transpose() {
        const kk = new yk;
        return yk.TransposeToRef(this, kk), kk
      }
      transposeToRef(kk) {
        return yk.TransposeToRef(this, kk), kk
      }
      setRowFromFloats(kk, Fk, Bk, Rk, tk) {
        if (kk < 0 || kk > 3) return this;
        const ak = 4 * kk;
        return this._m[ak + 0] = Fk, this._m[ak + 1] = Bk, this._m[ak + 2] = Rk, this._m[ak + 3] = tk, this.markAsUpdated(), this
      }
      scale(kk) {
        const Fk = new yk;
        return this.scaleToRef(kk, Fk), Fk
      }
      scaleToRef(kk, Fk) {
        for (let Bk = 0; Bk < 16; Bk++) Fk._m[Bk] = this._m[Bk] * kk;
        return Fk.markAsUpdated(), Fk
      }
      scaleAndAddToRef(kk, Fk) {
        for (let Bk = 0; Bk < 16; Bk++) Fk._m[Bk] += this._m[Bk] * kk;
        return Fk.markAsUpdated(), Fk
      }
      scaleInPlace(kk) {
        const Fk = this._m;
        for (let Bk = 0; Bk < 16; Bk++) Fk[Bk] *= kk;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(kk) {
        const Fk = fk.Matrix[0];
        this.invertToRef(Fk), Fk.transposeToRef(kk);
        const Bk = kk._m;
        return yk.FromValuesToRef(Bk[0], Bk[1], Bk[2], 0, Bk[4], Bk[5], Bk[6], 0, Bk[8], Bk[9], Bk[10], 0, 0, 0, 0, 1, kk), kk
      }
      getRotationMatrix() {
        const kk = new yk;
        return this.getRotationMatrixToRef(kk), kk
      }
      getRotationMatrixToRef(kk) {
        const Fk = fk.Qe[0];
        if (!this.decompose(Fk)) return yk.IdentityToRef(kk), kk;
        const Bk = this._m,
          Rk = 1 / Fk._x,
          tk = 1 / Fk._y,
          ak = 1 / Fk._z;
        return yk.FromValuesToRef(Bk[0] * Rk, Bk[1] * Rk, Bk[2] * Rk, 0, Bk[4] * tk, Bk[5] * tk, Bk[6] * tk, 0, Bk[8] * ak, Bk[9] * ak, Bk[10] * ak, 0, 0, 0, 0, 1, kk), kk
      }
      toggleModelMatrixHandInPlace() {
        const kk = this._m;
        return kk[2] *= -1, kk[6] *= -1, kk[8] *= -1, kk[9] *= -1, kk[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const kk = this._m;
        return kk[8] *= -1, kk[9] *= -1, kk[10] *= -1, kk[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(Wk, this), this
      }
      static FromArray(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Bk = new yk;
        return yk.FromArrayToRef(kk, Fk, Bk), Bk
      }
      static FromArrayToRef(kk, Fk, Bk) {
        for (let Rk = 0; Rk < 16; Rk++) Bk._m[Rk] = kk[Rk + Fk];
        return Bk.markAsUpdated(), Bk
      }
      static FromFloat32ArrayToRefScaled(kk, Fk, Bk, Rk) {
        return Rk._m[0] = kk[0 + Fk] * Bk, Rk._m[1] = kk[1 + Fk] * Bk, Rk._m[2] = kk[2 + Fk] * Bk, Rk._m[3] = kk[3 + Fk] * Bk, Rk._m[4] = kk[4 + Fk] * Bk, Rk._m[5] = kk[5 + Fk] * Bk, Rk._m[6] = kk[6 + Fk] * Bk, Rk._m[7] = kk[7 + Fk] * Bk, Rk._m[8] = kk[8 + Fk] * Bk, Rk._m[9] = kk[9 + Fk] * Bk, Rk._m[10] = kk[10 + Fk] * Bk, Rk._m[11] = kk[11 + Fk] * Bk, Rk._m[12] = kk[12 + Fk] * Bk, Rk._m[13] = kk[13 + Fk] * Bk, Rk._m[14] = kk[14 + Fk] * Bk, Rk._m[15] = kk[15 + Fk] * Bk, Rk.markAsUpdated(), Rk
      }
      static get IdentityReadOnly() {
        return yk._IdentityReadOnly
      }
      static FromValuesToRef(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk, Vk, Jk, Ak, ek, yk, fk) {
        const mk = fk._m;
        mk[0] = kk, mk[1] = Fk, mk[2] = Bk, mk[3] = Rk, mk[4] = tk, mk[5] = ak, mk[6] = Xk, mk[7] = bk, mk[8] = wk, mk[9] = dk, mk[10] = sk, mk[11] = Vk, mk[12] = Jk, mk[13] = Ak, mk[14] = ek, mk[15] = yk, fk.markAsUpdated()
      }
      static FromValues(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk, Vk, Jk, Ak, ek, fk) {
        const mk = new yk,
          Wk = mk._m;
        return Wk[0] = kk, Wk[1] = Fk, Wk[2] = Bk, Wk[3] = Rk, Wk[4] = tk, Wk[5] = ak, Wk[6] = Xk, Wk[7] = bk, Wk[8] = wk, Wk[9] = dk, Wk[10] = sk, Wk[11] = Vk, Wk[12] = Jk, Wk[13] = Ak, Wk[14] = ek, Wk[15] = fk, mk.markAsUpdated(), mk
      }
      static Compose(kk, Fk, Bk) {
        const Rk = new yk;
        return yk.ComposeToRef(kk, Fk, Bk, Rk), Rk
      }
      static ComposeToRef(kk, Fk, Bk, Rk) {
        const tk = Rk._m,
          ak = Fk._x,
          Xk = Fk._y,
          bk = Fk._z,
          wk = Fk._w,
          dk = ak + ak,
          sk = Xk + Xk,
          Vk = bk + bk,
          Jk = ak * dk,
          Ak = ak * sk,
          ek = ak * Vk,
          yk = Xk * sk,
          fk = Xk * Vk,
          mk = bk * Vk,
          Wk = wk * dk,
          vk = wk * sk,
          ik = wk * Vk,
          Yk = kk._x,
          Lk = kk._y,
          Ok = kk._z;
        return tk[0] = (1 - (yk + mk)) * Yk, tk[1] = (Ak + ik) * Yk, tk[2] = (ek - vk) * Yk, tk[3] = 0, tk[4] = (Ak - ik) * Lk, tk[5] = (1 - (Jk + mk)) * Lk, tk[6] = (fk + Wk) * Lk, tk[7] = 0, tk[8] = (ek + vk) * Ok, tk[9] = (fk - Wk) * Ok, tk[10] = (1 - (Jk + yk)) * Ok, tk[11] = 0, tk[12] = Bk._x, tk[13] = Bk._y, tk[14] = Bk._z, tk[15] = 1, Rk.markAsUpdated(), Rk
      }
      static Identity() {
        const kk = yk.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return kk._updateIdentityStatus(!0), kk
      }
      static IdentityToRef(kk) {
        return yk.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, kk), kk._updateIdentityStatus(!0), kk
      }
      static Zero() {
        const kk = yk.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return kk._updateIdentityStatus(!1), kk
      }
      static RotationX(kk) {
        const Fk = new yk;
        return yk.RotationXToRef(kk, Fk), Fk
      }
      static Invert(kk) {
        const Fk = new yk;
        return kk.invertToRef(Fk), Fk
      }
      static RotationXToRef(kk, Fk) {
        const Bk = Math.sin(kk),
          Rk = Math.cos(kk);
        return yk.FromValuesToRef(1, 0, 0, 0, 0, Rk, Bk, 0, 0, -Bk, Rk, 0, 0, 0, 0, 1, Fk), Fk._updateIdentityStatus(1 === Rk && 0 === Bk), Fk
      }
      static RotationY(kk) {
        const Fk = new yk;
        return yk.RotationYToRef(kk, Fk), Fk
      }
      static RotationYToRef(kk, Fk) {
        const Bk = Math.sin(kk),
          Rk = Math.cos(kk);
        return yk.FromValuesToRef(Rk, 0, -Bk, 0, 0, 1, 0, 0, Bk, 0, Rk, 0, 0, 0, 0, 1, Fk), Fk._updateIdentityStatus(1 === Rk && 0 === Bk), Fk
      }
      static RotationZ(kk) {
        const Fk = new yk;
        return yk.RotationZToRef(kk, Fk), Fk
      }
      static RotationZToRef(kk, Fk) {
        const Bk = Math.sin(kk),
          Rk = Math.cos(kk);
        return yk.FromValuesToRef(Rk, Bk, 0, 0, -Bk, Rk, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, Fk), Fk._updateIdentityStatus(1 === Rk && 0 === Bk), Fk
      }
      static RotationAxis(kk, Fk) {
        const Bk = new yk;
        return yk.RotationAxisToRef(kk, Fk, Bk), Bk
      }
      static RotationAxisToRef(kk, Fk, Bk) {
        const Rk = Math.sin(-Fk),
          tk = Math.cos(-Fk),
          ak = 1 - tk;
        kk = kk.normalizeToRef(fk.Qe[0]);
        const Xk = Bk._m;
        return Xk[0] = kk._x * kk._x * ak + tk, Xk[1] = kk._x * kk._y * ak - kk._z * Rk, Xk[2] = kk._x * kk._z * ak + kk._y * Rk, Xk[3] = 0, Xk[4] = kk._y * kk._x * ak + kk._z * Rk, Xk[5] = kk._y * kk._y * ak + tk, Xk[6] = kk._y * kk._z * ak - kk._x * Rk, Xk[7] = 0, Xk[8] = kk._z * kk._x * ak - kk._y * Rk, Xk[9] = kk._z * kk._y * ak + kk._x * Rk, Xk[10] = kk._z * kk._z * ak + tk, Xk[11] = 0, Xk[12] = 0, Xk[13] = 0, Xk[14] = 0, Xk[15] = 1, Bk.markAsUpdated(), Bk
      }
      static RotationAlignToRef(kk, Fk, Bk) {
        let tk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const ak = Jk.Dot(Fk, kk),
          Xk = Bk._m;
        if (ak < -1 + Rk.c) Xk[0] = -1, Xk[1] = 0, Xk[2] = 0, Xk[3] = 0, Xk[4] = 0, Xk[5] = tk ? 1 : -1, Xk[6] = 0, Xk[7] = 0, Xk[8] = 0, Xk[9] = 0, Xk[10] = tk ? -1 : 1, Xk[11] = 0;
        else {
          const Bk = Jk.Cross(Fk, kk),
            Rk = 1 / (1 + ak);
          Xk[0] = Bk._x * Bk._x * Rk + ak, Xk[1] = Bk._y * Bk._x * Rk - Bk._z, Xk[2] = Bk._z * Bk._x * Rk + Bk._y, Xk[3] = 0, Xk[4] = Bk._x * Bk._y * Rk + Bk._z, Xk[5] = Bk._y * Bk._y * Rk + ak, Xk[6] = Bk._z * Bk._y * Rk - Bk._x, Xk[7] = 0, Xk[8] = Bk._x * Bk._z * Rk - Bk._y, Xk[9] = Bk._y * Bk._z * Rk + Bk._x, Xk[10] = Bk._z * Bk._z * Rk + ak, Xk[11] = 0
        }
        return Xk[12] = 0, Xk[13] = 0, Xk[14] = 0, Xk[15] = 1, Bk.markAsUpdated(), Bk
      }
      static RotationYawPitchRoll(kk, Fk, Bk) {
        const Rk = new yk;
        return yk.RotationYawPitchRollToRef(kk, Fk, Bk, Rk), Rk
      }
      static RotationYawPitchRollToRef(kk, Fk, Bk, Rk) {
        return ek.RotationYawPitchRollToRef(kk, Fk, Bk, fk.Quaternion[0]), fk.Quaternion[0].toRotationMatrix(Rk), Rk
      }
      static Scaling(kk, Fk, Bk) {
        const Rk = new yk;
        return yk.ScalingToRef(kk, Fk, Bk, Rk), Rk
      }
      static ScalingToRef(kk, Fk, Bk, Rk) {
        return yk.FromValuesToRef(kk, 0, 0, 0, 0, Fk, 0, 0, 0, 0, Bk, 0, 0, 0, 0, 1, Rk), Rk._updateIdentityStatus(1 === kk && 1 === Fk && 1 === Bk), Rk
      }
      static Translation(kk, Fk, Bk) {
        const Rk = new yk;
        return yk.TranslationToRef(kk, Fk, Bk, Rk), Rk
      }
      static TranslationToRef(kk, Fk, Bk, Rk) {
        return yk.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, kk, Fk, Bk, 1, Rk), Rk._updateIdentityStatus(0 === kk && 0 === Fk && 0 === Bk), Rk
      }
      static Lerp(kk, Fk, Bk) {
        const Rk = new yk;
        return yk.LerpToRef(kk, Fk, Bk, Rk), Rk
      }
      static LerpToRef(kk, Fk, Bk, Rk) {
        const tk = Rk._m,
          ak = kk.m,
          Xk = Fk.m;
        for (let bk = 0; bk < 16; bk++) tk[bk] = ak[bk] * (1 - Bk) + Xk[bk] * Bk;
        return Rk.markAsUpdated(), Rk
      }
      static DecomposeLerp(kk, Fk, Bk) {
        const Rk = new yk;
        return yk.DecomposeLerpToRef(kk, Fk, Bk, Rk), Rk
      }
      static DecomposeLerpToRef(kk, Fk, Bk, Rk) {
        const tk = fk.Qe[0],
          ak = fk.Quaternion[0],
          Xk = fk.Qe[1];
        kk.decompose(tk, ak, Xk);
        const bk = fk.Qe[2],
          wk = fk.Quaternion[1],
          dk = fk.Qe[3];
        Fk.decompose(bk, wk, dk);
        const sk = fk.Qe[4];
        Jk.LerpToRef(tk, bk, Bk, sk);
        const Vk = fk.Quaternion[2];
        ek.SlerpToRef(ak, wk, Bk, Vk);
        const Ak = fk.Qe[5];
        return Jk.LerpToRef(Xk, dk, Bk, Ak), yk.ComposeToRef(sk, Vk, Ak, Rk), Rk
      }
      static LookAtLH(kk, Fk, Bk) {
        const Rk = new yk;
        return yk.LookAtLHToRef(kk, Fk, Bk, Rk), Rk
      }
      static LookAtLHToRef(kk, Fk, Bk, Rk) {
        const tk = fk.Qe[0],
          ak = fk.Qe[1],
          Xk = fk.Qe[2];
        Fk.subtractToRef(kk, Xk), Xk.normalize(), Jk.CrossToRef(Bk, Xk, tk);
        const bk = tk.lengthSquared();
        0 === bk ? tk.x = 1 : tk.normalizeFromLength(Math.sqrt(bk)), Jk.CrossToRef(Xk, tk, ak), ak.normalize();
        const wk = -Jk.Dot(tk, kk),
          dk = -Jk.Dot(ak, kk),
          sk = -Jk.Dot(Xk, kk);
        return yk.FromValuesToRef(tk._x, ak._x, Xk._x, 0, tk._y, ak._y, Xk._y, 0, tk._z, ak._z, Xk._z, 0, wk, dk, sk, 1, Rk), Rk
      }
      static LookAtRH(kk, Fk, Bk) {
        const Rk = new yk;
        return yk.LookAtRHToRef(kk, Fk, Bk, Rk), Rk
      }
      static LookAtRHToRef(kk, Fk, Bk, Rk) {
        const tk = fk.Qe[0],
          ak = fk.Qe[1],
          Xk = fk.Qe[2];
        kk.subtractToRef(Fk, Xk), Xk.normalize(), Jk.CrossToRef(Bk, Xk, tk);
        const bk = tk.lengthSquared();
        0 === bk ? tk.x = 1 : tk.normalizeFromLength(Math.sqrt(bk)), Jk.CrossToRef(Xk, tk, ak), ak.normalize();
        const wk = -Jk.Dot(tk, kk),
          dk = -Jk.Dot(ak, kk),
          sk = -Jk.Dot(Xk, kk);
        return yk.FromValuesToRef(tk._x, ak._x, Xk._x, 0, tk._y, ak._y, Xk._y, 0, tk._z, ak._z, Xk._z, 0, wk, dk, sk, 1, Rk), Rk
      }
      static LookDirectionLH(kk, Fk) {
        const Bk = new yk;
        return yk.LookDirectionLHToRef(kk, Fk, Bk), Bk
      }
      static LookDirectionLHToRef(kk, Fk, Bk) {
        const Rk = fk.Qe[0];
        Rk.sBk(kk), Rk.scaleInPlace(-1);
        const tk = fk.Qe[1];
        return Jk.CrossToRef(Fk, Rk, tk), yk.FromValuesToRef(tk._x, tk._y, tk._z, 0, Fk._x, Fk._y, Fk._z, 0, Rk._x, Rk._y, Rk._z, 0, 0, 0, 0, 1, Bk), Bk
      }
      static LookDirectionRH(kk, Fk) {
        const Bk = new yk;
        return yk.LookDirectionRHToRef(kk, Fk, Bk), Bk
      }
      static LookDirectionRHToRef(kk, Fk, Bk) {
        const Rk = fk.Qe[2];
        return Jk.CrossToRef(Fk, kk, Rk), yk.FromValuesToRef(Rk._x, Rk._y, Rk._z, 0, Fk._x, Fk._y, Fk._z, 0, kk._x, kk._y, kk._z, 0, 0, 0, 0, 1, Bk), Bk
      }
      static OrthoLH(kk, Fk, Bk, Rk, tk) {
        const ak = new yk;
        return yk.OrthoLHToRef(kk, Fk, Bk, Rk, ak, tk), ak
      }
      static OrthoLHToRef(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = 2 / kk,
          bk = 2 / Fk,
          wk = 2 / (Rk - Bk),
          dk = -(Rk + Bk) / (Rk - Bk);
        return yk.FromValuesToRef(Xk, 0, 0, 0, 0, bk, 0, 0, 0, 0, wk, 0, 0, 0, dk, 1, tk), ak && tk.multiplyToRef(Wk, tk), tk._updateIdentityStatus(1 === Xk && 1 === bk && 1 === wk && 0 === dk), tk
      }
      static OrthoOffCenterLH(kk, Fk, Bk, Rk, tk, ak, Xk) {
        const bk = new yk;
        return yk.OrthoOffCenterLHToRef(kk, Fk, Bk, Rk, tk, ak, bk, Xk), bk
      }
      static OrthoOffCenterLHToRef(kk, Fk, Bk, Rk, tk, ak, Xk, bk) {
        const wk = 2 / (Fk - kk),
          dk = 2 / (Rk - Bk),
          sk = 2 / (ak - tk),
          Vk = -(ak + tk) / (ak - tk),
          Jk = (kk + Fk) / (kk - Fk),
          Ak = (Rk + Bk) / (Bk - Rk);
        return yk.FromValuesToRef(wk, 0, 0, 0, 0, dk, 0, 0, 0, 0, sk, 0, Jk, Ak, Vk, 1, Xk), bk && Xk.multiplyToRef(Wk, Xk), Xk.markAsUpdated(), Xk
      }
      static ObliqueOffCenterLHToRef(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk) {
        const Vk = -Xk * Math.cos(bk),
          Jk = -Xk * Math.sin(bk);
        return yk.TranslationToRef(0, 0, -wk, fk.Matrix[1]), yk.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Vk, Jk, 1, 0, 0, 0, 0, 1, fk.Matrix[0]), fk.Matrix[1].multiplyToRef(fk.Matrix[0], fk.Matrix[0]), yk.TranslationToRef(0, 0, wk, fk.Matrix[1]), fk.Matrix[0].multiplyToRef(fk.Matrix[1], fk.Matrix[0]), yk.OrthoOffCenterLHToRef(kk, Fk, Bk, Rk, tk, ak, dk, sk), fk.Matrix[0].multiplyToRef(dk, dk), dk
      }
      static OrthoOffCenterRH(kk, Fk, Bk, Rk, tk, ak, Xk) {
        const bk = new yk;
        return yk.OrthoOffCenterRHToRef(kk, Fk, Bk, Rk, tk, ak, bk, Xk), bk
      }
      static OrthoOffCenterRHToRef(kk, Fk, Bk, Rk, tk, ak, Xk, bk) {
        return yk.OrthoOffCenterLHToRef(kk, Fk, Bk, Rk, tk, ak, Xk, bk), Xk._m[10] *= -1, Xk
      }
      static ObliqueOffCenterRHToRef(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk) {
        const Vk = Xk * Math.cos(bk),
          Jk = Xk * Math.sin(bk);
        return yk.TranslationToRef(0, 0, wk, fk.Matrix[1]), yk.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Vk, Jk, 1, 0, 0, 0, 0, 1, fk.Matrix[0]), fk.Matrix[1].multiplyToRef(fk.Matrix[0], fk.Matrix[0]), yk.TranslationToRef(0, 0, -wk, fk.Matrix[1]), fk.Matrix[0].multiplyToRef(fk.Matrix[1], fk.Matrix[0]), yk.OrthoOffCenterRHToRef(kk, Fk, Bk, Rk, tk, ak, dk, sk), fk.Matrix[0].multiplyToRef(dk, dk), dk
      }
      static PerspectiveLH(kk, Fk, Bk, Rk, tk) {
        let ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const Xk = new yk,
          bk = 2 * Bk / kk,
          wk = 2 * Bk / Fk,
          dk = (Rk + Bk) / (Rk - Bk),
          sk = -2 * Rk * Bk / (Rk - Bk),
          Vk = Math.tan(ak);
        return yk.FromValuesToRef(bk, 0, 0, 0, 0, wk, 0, Vk, 0, 0, dk, 1, 0, 0, sk, 0, Xk), tk && Xk.multiplyToRef(Wk, Xk), Xk._updateIdentityStatus(!1), Xk
      }
      static PerspectiveFovLH(kk, Fk, Bk, Rk, tk) {
        let ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const bk = new yk;
        return yk.PerspectiveFovLHToRef(kk, Fk, Bk, Rk, bk, !0, tk, ak, Xk), bk
      }
      static PerspectiveFovLHToRef(kk, Fk, Bk, Rk, tk) {
        let ak = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Xk = arguments.length > 6 ? arguments[6] : void 0,
          bk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          wk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const dk = Bk,
          sk = Rk,
          Vk = 1 / Math.tan(.5 * kk),
          Jk = ak ? Vk / Fk : Vk,
          Ak = ak ? Vk : Vk * Fk,
          ek = wk && 0 === dk ? -1 : 0 !== sk ? (sk + dk) / (sk - dk) : 1,
          fk = wk && 0 === dk ? 2 * sk : 0 !== sk ? -2 * sk * dk / (sk - dk) : -2 * dk,
          mk = Math.tan(bk);
        return yk.FromValuesToRef(Jk, 0, 0, 0, 0, Ak, 0, mk, 0, 0, ek, 1, 0, 0, fk, 0, tk), Xk && tk.multiplyToRef(Wk, tk), tk._updateIdentityStatus(!1), tk
      }
      static PerspectiveFovReverseLHToRef(kk, Fk, Bk, Rk, tk) {
        let ak = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Xk = arguments.length > 6 ? arguments[6] : void 0,
          bk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const wk = 1 / Math.tan(.5 * kk),
          dk = ak ? wk / Fk : wk,
          sk = ak ? wk : wk * Fk,
          Vk = Math.tan(bk);
        return yk.FromValuesToRef(dk, 0, 0, 0, 0, sk, 0, Vk, 0, 0, -Bk, 1, 0, 0, 1, 0, tk), Xk && tk.multiplyToRef(Wk, tk), tk._updateIdentityStatus(!1), tk
      }
      static PerspectiveFovRH(kk, Fk, Bk, Rk, tk) {
        let ak = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const bk = new yk;
        return yk.PerspectiveFovRHToRef(kk, Fk, Bk, Rk, bk, !0, tk, ak, Xk), bk
      }
      static PerspectiveFovRHToRef(kk, Fk, Bk, Rk, tk) {
        let ak = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Xk = arguments.length > 6 ? arguments[6] : void 0,
          bk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          wk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const dk = Bk,
          sk = Rk,
          Vk = 1 / Math.tan(.5 * kk),
          Jk = ak ? Vk / Fk : Vk,
          Ak = ak ? Vk : Vk * Fk,
          ek = wk && 0 === dk ? 1 : 0 !== sk ? -(sk + dk) / (sk - dk) : -1,
          fk = wk && 0 === dk ? 2 * sk : 0 !== sk ? -2 * sk * dk / (sk - dk) : -2 * dk,
          mk = Math.tan(bk);
        return yk.FromValuesToRef(Jk, 0, 0, 0, 0, Ak, 0, mk, 0, 0, ek, -1, 0, 0, fk, 0, tk), Xk && tk.multiplyToRef(Wk, tk), tk._updateIdentityStatus(!1), tk
      }
      static PerspectiveFovReverseRHToRef(kk, Fk, Bk, Rk, tk) {
        let ak = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Xk = arguments.length > 6 ? arguments[6] : void 0,
          bk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const wk = 1 / Math.tan(.5 * kk),
          dk = ak ? wk / Fk : wk,
          sk = ak ? wk : wk * Fk,
          Vk = Math.tan(bk);
        return yk.FromValuesToRef(dk, 0, 0, 0, 0, sk, 0, Vk, 0, 0, -Bk, -1, 0, 0, -1, 0, tk), Xk && tk.multiplyToRef(Wk, tk), tk._updateIdentityStatus(!1), tk
      }
      static GetFinalMatrix(kk, Fk, Bk, Rk, tk, ak) {
        const Xk = kk.width,
          bk = kk.height,
          wk = kk.x,
          dk = kk.y,
          sk = yk.FromValues(Xk / 2, 0, 0, 0, 0, -bk / 2, 0, 0, 0, 0, ak - tk, 0, wk + Xk / 2, bk / 2 + dk, tk, 1),
          Vk = new yk;
        return Fk.multiplyToRef(Bk, Vk), Vk.multiplyToRef(Rk, Vk), Vk.multiplyToRef(sk, Vk)
      }
      static GetAsMatrix2x2(kk) {
        const Fk = kk.m,
          Bk = [Fk[0], Fk[1], Fk[4], Fk[5]];
        return ak.e.MatrixUse64Bits ? Bk : new Float32Array(Bk)
      }
      static GetAsMatrix3x3(kk) {
        const Fk = kk.m,
          Bk = [Fk[0], Fk[1], Fk[2], Fk[4], Fk[5], Fk[6], Fk[8], Fk[9], Fk[10]];
        return ak.e.MatrixUse64Bits ? Bk : new Float32Array(Bk)
      }
      static Transpose(kk) {
        const Fk = new yk;
        return yk.TransposeToRef(kk, Fk), Fk
      }
      static TransposeToRef(kk, Fk) {
        const Bk = kk.m,
          Rk = Bk[0],
          tk = Bk[4],
          ak = Bk[8],
          Xk = Bk[12],
          bk = Bk[1],
          wk = Bk[5],
          dk = Bk[9],
          sk = Bk[13],
          Vk = Bk[2],
          Jk = Bk[6],
          Ak = Bk[10],
          ek = Bk[14],
          yk = Bk[3],
          fk = Bk[7],
          mk = Bk[11],
          Wk = Bk[15],
          vk = Fk._m;
        return vk[0] = Rk, vk[1] = tk, vk[2] = ak, vk[3] = Xk, vk[4] = bk, vk[5] = wk, vk[6] = dk, vk[7] = sk, vk[8] = Vk, vk[9] = Jk, vk[10] = Ak, vk[11] = ek, vk[12] = yk, vk[13] = fk, vk[14] = mk, vk[15] = Wk, Fk.markAsUpdated(), Fk._updateIdentityStatus(kk._isIdentity, kk._isIdentityDirty), Fk
      }
      static Reflection(kk) {
        const Fk = new yk;
        return yk.ReflectionToRef(kk, Fk), Fk
      }
      static ReflectionToRef(kk, Fk) {
        kk.normalize();
        const Bk = kk.normal.x,
          Rk = kk.normal.y,
          tk = kk.normal.z,
          ak = -2 * Bk,
          Xk = -2 * Rk,
          bk = -2 * tk;
        return yk.FromValuesToRef(ak * Bk + 1, Xk * Bk, bk * Bk, 0, ak * Rk, Xk * Rk + 1, bk * Rk, 0, ak * tk, Xk * tk, bk * tk + 1, 0, ak * kk.d, Xk * kk.d, bk * kk.d, 1, Fk), Fk
      }
      static FromXYZAxesToRef(kk, Fk, Bk, Rk) {
        return yk.FromValuesToRef(kk._x, kk._y, kk._z, 0, Fk._x, Fk._y, Fk._z, 0, Bk._x, Bk._y, Bk._z, 0, 0, 0, 0, 1, Rk), Rk
      }
      static FromQuaternionToRef(kk, Fk) {
        const Bk = kk._x * kk._x,
          Rk = kk._y * kk._y,
          tk = kk._z * kk._z,
          ak = kk._x * kk._y,
          Xk = kk._z * kk._w,
          bk = kk._z * kk._x,
          wk = kk._y * kk._w,
          dk = kk._y * kk._z,
          sk = kk._x * kk._w;
        return Fk._m[0] = 1 - 2 * (Rk + tk), Fk._m[1] = 2 * (ak + Xk), Fk._m[2] = 2 * (bk - wk), Fk._m[3] = 0, Fk._m[4] = 2 * (ak - Xk), Fk._m[5] = 1 - 2 * (tk + Bk), Fk._m[6] = 2 * (dk + sk), Fk._m[7] = 0, Fk._m[8] = 2 * (bk + wk), Fk._m[9] = 2 * (dk - sk), Fk._m[10] = 1 - 2 * (Rk + Bk), Fk._m[11] = 0, Fk._m[12] = 0, Fk._m[13] = 0, Fk._m[14] = 0, Fk._m[15] = 1, Fk.markAsUpdated(), Fk
      }
    }
    yk._IdentityReadOnly = yk.Identity();
    class fk {}
    fk.Qe = (0, tk.f)(11, Jk.Zero), fk.Matrix = (0, tk.f)(2, yk.Identity), fk.Quaternion = (0, tk.f)(3, ek.Zero);
    class mk {}
    mk.Vector2 = (0, tk.f)(3, Vk.Zero), mk.Qe = (0, tk.f)(13, Jk.Zero), mk.Vector4 = (0, tk.f)(3, Ak.Zero), mk.Quaternion = (0, tk.f)(3, ek.Zero), mk.Matrix = (0, tk.f)(8, yk.Identity);
    const Wk = yk.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let vk = !1;

    function ik() {
      vk || (vk = !0, Object.defineProperties(Vk.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Jk.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Ak.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(ek.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(yk.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, dk.d)("BABYLON.Vector2", Vk), (0, dk.d)("BABYLON.Vector3", Jk), (0, dk.d)("BABYLON.Vector4", Ak), (0, dk.d)("BABYLON.Matrix", yk))
    }
  },
  36781: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      e: () => Xk
    });
    const Rk = "undefined" !== typeof WeakRef;
    class tk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 ? arguments[2] : void 0,
          Rk = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(kk, Fk, Bk, Rk)
      }
      initialize(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Bk = arguments.length > 2 ? arguments[2] : void 0,
          Rk = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = kk, this.skipNextObservers = Fk, this.target = Bk, this.currentTarget = Rk, this
      }
    }
    class ak {
      constructor(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = kk, this.mask = Fk, this.scope = Bk, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(kk)
      }
    }
    class Xk {
      static FromPromise(kk, Fk) {
        const Bk = new Xk;
        return kk.then((kk => {
          Bk.notifyObservers(kk)
        })).catch((kk => {
          if (!Fk) throw kk;
          Fk.notifyObservers(kk)
        })), Bk
      }
      get observers() {
        return this._observers
      }
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = Fk, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new tk(0), kk && (this._onObserverAdded = kk)
      }
      add(kk) {
        let Fk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Bk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!kk) return null;
        const tk = new ak(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        tk.unregisterOnNextCall = Bk, Fk ? this._observers.unshift(tk) : this._observers.push(tk), this._onObserverAdded && this._onObserverAdded(tk), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(tk, this._lastNotifiedValue);
        const Xk = Rk ? new WeakRef(this) : {
          deref: () => this
        };
        return tk._remove = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Fk = Xk.deref();
          Fk && (kk ? Fk.remove(tk) : Fk._remove(tk))
        }, tk
      }
      addOnce(kk) {
        return this.add(kk, void 0, void 0, void 0, !0)
      }
      remove(kk) {
        if (!kk) return !1;
        kk._remove = null;
        return -1 !== this._observers.indexOf(kk) && (this._deferUnregister(kk), !0)
      }
      removeCallback(kk, Fk) {
        for (let Bk = 0; Bk < this._observers.length; Bk++) {
          const Rk = this._observers[Bk];
          if (!Rk._willBeUnregistered && (Rk.callback === kk && (!Fk || Fk === Rk.scope))) return this._deferUnregister(Rk), !0
        }
        return !1
      }
      _deferUnregister(kk) {
        kk._willBeUnregistered || (this._numObserversMarkedAsDeleted++, kk.unregisterOnNextCall = !1, kk._willBeUnregistered = !0, setTimeout((() => {
          this._remove(kk)
        }), 0))
      }
      _remove(kk) {
        let Fk = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!kk) return !1;
        const Bk = this._observers.indexOf(kk);
        return -1 !== Bk && (Fk && this._numObserversMarkedAsDeleted--, this._observers.splice(Bk, 1), !0)
      }
      makeObserverTopPriority(kk) {
        this._remove(kk, !1), this._observers.unshift(kk)
      }
      makeObserverBottomPriority(kk) {
        this._remove(kk, !1), this._observers.push(kk)
      }
      notifyObservers(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Bk = arguments.length > 2 ? arguments[2] : void 0,
          Rk = arguments.length > 3 ? arguments[3] : void 0,
          tk = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = kk), !this._observers.length) return !0;
        const ak = this._eventState;
        ak.mask = Fk, ak.target = Bk, ak.currentTarget = Rk, ak.skipNextObservers = !1, ak.lastReturnValue = kk, ak.userInfo = tk;
        for (const Xk of this._observers)
          if (!Xk._willBeUnregistered && (Xk.mask & Fk && (Xk.unregisterOnNextCall && this._deferUnregister(Xk), Xk.scope ? ak.lastReturnValue = Xk.callback.apply(Xk.scope, [kk, ak]) : ak.lastReturnValue = Xk.callback(kk, ak)), ak.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(kk, Fk) {
        let Bk = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = Fk), kk._willBeUnregistered) return;
        const Rk = this._eventState;
        Rk.mask = Bk, Rk.skipNextObservers = !1, kk.unregisterOnNextCall && this._deferUnregister(kk), kk.callback(Fk, Rk)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const kk = this._observers.pop();
          kk && (kk._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const kk = new Xk;
        return kk._observers = this._observers.slice(0), kk
      }
      hasSpecificMask() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const Fk of this._observers)
          if (Fk.mask & kk || Fk.mask === kk) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);