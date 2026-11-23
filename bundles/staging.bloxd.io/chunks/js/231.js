export const id = 231;
export const ids = [231];
export const modules = {
  37178: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk
    });
    var Xk = Ik(37187);
    class Tk {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Tk.Instances = [], Tk.OnEnginesDisposedObservable = new Xk.e, Tk._LastCreatedScene = null, Tk.UseFallbackTexture = !0, Tk.FallbackTexture = ""
  },
  37173: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Xk
    });
    class Xk {
      static SetMatrixPrecision(kk) {
        if (Xk.MatrixTrackPrecisionChange = !1, kk && !Xk.MatrixUse64Bits && Xk.MatrixTrackedMatrices)
          for (let Fk = 0; Fk < Xk.MatrixTrackedMatrices.length; ++Fk) {
            const kk = Xk.MatrixTrackedMatrices[Fk],
              Ik = kk._m;
            kk._m = new Array(16);
            for (let Fk = 0; Fk < 16; ++Fk) kk._m[Fk] = Ik[Fk]
          }
        Xk.MatrixUse64Bits = kk, Xk.MatrixCurrentType = Xk.MatrixUse64Bits ? Array : Float32Array, Xk.MatrixTrackedMatrices = null
      }
    }
    Xk.MatrixUse64Bits = !1, Xk.MatrixTrackPrecisionChange = !0, Xk.MatrixCurrentType = Float32Array, Xk.MatrixTrackedMatrices = []
  },
  37192: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk,
      d: () => qk,
      h: () => ak,
      i: () => Xk,
      j: () => ik,
      k: () => yk
    });
    class Xk {}

    function Tk(kk) {
      kk.updateFlag = Xk._UpdateFlagSeed++
    }

    function ik(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Tk = kk.iXk(),
        ik = Fk.iXk(),
        yk = Tk[0],
        lk = Tk[1],
        ak = Tk[2],
        qk = Tk[3],
        Lk = Tk[4],
        tk = Tk[5],
        Zk = Tk[6],
        jk = Tk[7],
        ek = Tk[8],
        wk = Tk[9],
        Hk = Tk[10],
        Jk = Tk[11],
        xk = Tk[12],
        Pk = Tk[13],
        Kk = Tk[14],
        Qk = Tk[15],
        sk = ik[0],
        Vk = ik[1],
        zk = ik[2],
        Sk = ik[3],
        vk = ik[4],
        Ek = ik[5],
        Ok = ik[6],
        nk = ik[7],
        Gk = ik[8],
        pk = ik[9],
        uk = ik[10],
        bk = ik[11],
        Rk = ik[12],
        Uk = ik[13],
        Ck = ik[14],
        Nk = ik[15];
      Ik[Xk] = yk * sk + lk * vk + ak * Gk + qk * Rk, Ik[Xk + 1] = yk * Vk + lk * Ek + ak * pk + qk * Uk, Ik[Xk + 2] = yk * zk + lk * Ok + ak * uk + qk * Ck, Ik[Xk + 3] = yk * Sk + lk * nk + ak * bk + qk * Nk, Ik[Xk + 4] = Lk * sk + tk * vk + Zk * Gk + jk * Rk, Ik[Xk + 5] = Lk * Vk + tk * Ek + Zk * pk + jk * Uk, Ik[Xk + 6] = Lk * zk + tk * Ok + Zk * uk + jk * Ck, Ik[Xk + 7] = Lk * Sk + tk * nk + Zk * bk + jk * Nk, Ik[Xk + 8] = ek * sk + wk * vk + Hk * Gk + Jk * Rk, Ik[Xk + 9] = ek * Vk + wk * Ek + Hk * pk + Jk * Uk, Ik[Xk + 10] = ek * zk + wk * Ok + Hk * uk + Jk * Ck, Ik[Xk + 11] = ek * Sk + wk * nk + Hk * bk + Jk * Nk, Ik[Xk + 12] = xk * sk + Pk * vk + Kk * Gk + Qk * Rk, Ik[Xk + 13] = xk * Vk + Pk * Ek + Kk * pk + Qk * Uk, Ik[Xk + 14] = xk * zk + Pk * Ok + Kk * uk + Qk * Ck, Ik[Xk + 15] = xk * Sk + Pk * nk + Kk * bk + Qk * Nk
    }

    function yk(kk, Fk, Ik) {
      let Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      ik(kk, Fk, Ik.iXk(), Xk), Tk(Ik)
    }

    function lk(kk, Fk) {
      let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Xk = kk.iXk();
      Fk[Ik] = Xk[0], Fk[Ik + 1] = Xk[1], Fk[Ik + 2] = Xk[2], Fk[Ik + 3] = Xk[3], Fk[Ik + 4] = Xk[4], Fk[Ik + 5] = Xk[5], Fk[Ik + 6] = Xk[6], Fk[Ik + 7] = Xk[7], Fk[Ik + 8] = Xk[8], Fk[Ik + 9] = Xk[9], Fk[Ik + 10] = Xk[10], Fk[Ik + 11] = Xk[11], Fk[Ik + 12] = Xk[12], Fk[Ik + 13] = Xk[13], Fk[Ik + 14] = Xk[14], Fk[Ik + 15] = Xk[15]
    }

    function ak(kk, Fk) {
      const Ik = qk(kk, Fk.iXk());
      return Ik && Tk(Fk), Ik
    }

    function qk(kk, Fk) {
      const Ik = kk.iXk(),
        Xk = Ik[0],
        Tk = Ik[1],
        ik = Ik[2],
        yk = Ik[3],
        lk = Ik[4],
        ak = Ik[5],
        qk = Ik[6],
        Lk = Ik[7],
        tk = Ik[8],
        Zk = Ik[9],
        jk = Ik[10],
        ek = Ik[11],
        wk = Ik[12],
        Hk = Ik[13],
        Jk = Ik[14],
        xk = Ik[15],
        Pk = jk * xk - Jk * ek,
        Kk = Zk * xk - Hk * ek,
        Qk = Zk * Jk - Hk * jk,
        sk = tk * xk - wk * ek,
        Vk = tk * Jk - jk * wk,
        zk = tk * Hk - wk * Zk,
        Sk = +(ak * Pk - qk * Kk + Lk * Qk),
        vk = -(lk * Pk - qk * sk + Lk * Vk),
        Ek = +(lk * Kk - ak * sk + Lk * zk),
        Ok = -(lk * Qk - ak * Vk + qk * zk),
        nk = Xk * Sk + Tk * vk + ik * Ek + yk * Ok;
      if (0 === nk) return !1;
      const Gk = 1 / nk,
        pk = qk * xk - Jk * Lk,
        uk = ak * xk - Hk * Lk,
        bk = ak * Jk - Hk * qk,
        Rk = lk * xk - wk * Lk,
        Uk = lk * Jk - wk * qk,
        Ck = lk * Hk - wk * ak,
        Nk = qk * ek - jk * Lk,
        ck = ak * ek - Zk * Lk,
        Wk = ak * jk - Zk * qk,
        fk = lk * ek - tk * Lk,
        Bk = lk * jk - tk * qk,
        dk = lk * Zk - tk * ak,
        Yk = -(Tk * Pk - ik * Kk + yk * Qk),
        Ak = +(Xk * Pk - ik * sk + yk * Vk),
        gk = -(Xk * Kk - Tk * sk + yk * zk),
        mk = +(Xk * Qk - Tk * Vk + ik * zk),
        hk = +(Tk * pk - ik * uk + yk * bk),
        rk = -(Xk * pk - ik * Rk + yk * Uk),
        Dk = +(Xk * uk - Tk * Rk + yk * Ck),
        Mk = -(Xk * bk - Tk * Uk + ik * Ck),
        kF = -(Tk * Nk - ik * ck + yk * Wk),
        FF = +(Xk * Nk - ik * fk + yk * Bk),
        IF = -(Xk * ck - Tk * fk + yk * dk),
        XF = +(Xk * Wk - Tk * Bk + ik * dk);
      return Fk[0] = Sk * Gk, Fk[1] = Yk * Gk, Fk[2] = hk * Gk, Fk[3] = kF * Gk, Fk[4] = vk * Gk, Fk[5] = Ak * Gk, Fk[6] = rk * Gk, Fk[7] = FF * Gk, Fk[8] = Ek * Gk, Fk[9] = gk * Gk, Fk[10] = Dk * Gk, Fk[11] = IF * Gk, Fk[12] = Ok * Gk, Fk[13] = mk * Gk, Fk[14] = Mk * Gk, Fk[15] = XF * Gk, !0
    }
    Xk._UpdateFlagSeed = 0
  },
  37153: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => wk,
      f: () => ek,
      h: () => Kk,
      l: () => Jk,
      p: () => tk,
      t: () => Zk,
      u: () => jk
    });
    var Xk = Ik(37158),
      Tk = Ik(37166),
      ik = Ik(37173),
      yk = Ik(37178),
      lk = Ik(37189),
      ak = Ik(37192),
      qk = Ik(37201);
    const Lk = kk => parseInt(kk.toString().replace(/\W/g, ""));
    class tk {
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
        let kk = Lk(this.x);
        return kk = 397 * kk ^ Lk(this.y), kk
      }
      toArray(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return kk[Fk] = this.x, kk[Fk + 1] = this.y, this
      }
      hFk(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return tk.FromArrayToRef(kk, Fk, this), this
      }
      iXk() {
        return [this.x, this.y]
      }
      kS(kk) {
        return this.x = kk.x, this.y = kk.y, this
      }
      t5(kk, Fk) {
        return this.x = kk, this.y = Fk, this
      }
      set(kk, Fk) {
        return this.t5(kk, Fk)
      }
      I6(kk) {
        return this.t5(kk, kk)
      }
      add(kk) {
        return new tk(this.x + kk.x, this.y + kk.y)
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
        return new tk(this.x + kk.x, this.y + kk.y)
      }
      subtract(kk) {
        return new tk(this.x - kk.x, this.y - kk.y)
      }
      subtractToRef(kk, Fk) {
        return Fk.x = this.x - kk.x, Fk.y = this.y - kk.y, Fk
      }
      zXk(kk) {
        return this.x -= kk.x, this.y -= kk.y, this
      }
      multiplyInPlace(kk) {
        return this.x *= kk.x, this.y *= kk.y, this
      }
      multiply(kk) {
        return new tk(this.x * kk.x, this.y * kk.y)
      }
      multiplyToRef(kk, Fk) {
        return Fk.x = this.x * kk.x, Fk.y = this.y * kk.y, Fk
      }
      multiplyByFloats(kk, Fk) {
        return new tk(this.x * kk, this.y * Fk)
      }
      divide(kk) {
        return new tk(this.x / kk.x, this.y / kk.y)
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
        return new tk(this.x - kk, this.y - Fk)
      }
      subtractFromFloatsToRef(kk, Fk, Ik) {
        return Ik.x = this.x - kk, Ik.y = this.y - Fk, Ik
      }
      nX() {
        return new tk(-this.x, -this.y)
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
        return new tk(this.x * kk, this.y * kk)
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
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xk.b;
        return kk && (0, lk.WithinEpsilon)(this.x, kk.x, Fk) && (0, lk.WithinEpsilon)(this.y, kk.y, Fk)
      }
      Ryk(kk, Fk) {
        return this.x === kk && this.y === Fk
      }
      floor() {
        return new tk(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(kk) {
        return kk.x = Math.floor(this.x), kk.y = Math.floor(this.y), kk
      }
      fract() {
        return new tk(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(kk) {
        return kk.x = this.x - Math.floor(this.x), kk.y = this.y - Math.floor(this.y), kk
      }
      rotate(kk) {
        return this.rotateToRef(kk, new tk)
      }
      rotateToRef(kk, Fk) {
        const Ik = Math.cos(kk),
          Xk = Math.sin(kk);
        return Fk.x = Ik * this.x - Xk * this.y, Fk.y = Xk * this.x + Ik * this.y, Fk
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
        const kk = new tk;
        return this.normalizeToRef(kk), kk
      }
      normalizeToRef(kk) {
        const Fk = this.length();
        return 0 === Fk || 1 === Fk ? (kk.x = this.x, kk.y = this.y, kk) : this.scaleToRef(1 / Fk, kk)
      }
      clone() {
        return new tk(this.x, this.y)
      }
      dot(kk) {
        return this.x * kk.x + this.y * kk.y
      }
      static Zero() {
        return new tk(0, 0)
      }
      static One() {
        return new tk(1, 1)
      }
      static Random() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new tk((0, lk.RandomRange)(kk, Fk), (0, lk.RandomRange)(kk, Fk))
      }
      static RandomToRef() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).t5((0, lk.RandomRange)(kk, Fk), (0, lk.RandomRange)(kk, Fk))
      }
      static get ZeroReadOnly() {
        return tk._ZeroReadOnly
      }
      static FromArray(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new tk(kk[Fk], kk[Fk + 1])
      }
      static FromArrayToRef(kk, Fk, Ik) {
        return Ik.x = kk[Fk], Ik.y = kk[Fk + 1], Ik
      }
      static FromFloatsToRef(kk, Fk, Ik) {
        return Ik.t5(kk, Fk), Ik
      }
      static CatmullRom(kk, Fk, Ik, Xk, Tk) {
        const ik = Tk * Tk,
          yk = Tk * ik,
          lk = .5 * (2 * Fk.x + (-kk.x + Ik.x) * Tk + (2 * kk.x - 5 * Fk.x + 4 * Ik.x - Xk.x) * ik + (-kk.x + 3 * Fk.x - 3 * Ik.x + Xk.x) * yk),
          ak = .5 * (2 * Fk.y + (-kk.y + Ik.y) * Tk + (2 * kk.y - 5 * Fk.y + 4 * Ik.y - Xk.y) * ik + (-kk.y + 3 * Fk.y - 3 * Ik.y + Xk.y) * yk);
        return new tk(lk, ak)
      }
      static ClampToRef(kk, Fk, Ik, Xk) {
        return Xk.x = (0, lk.Clamp)(kk.x, Fk.x, Ik.x), Xk.y = (0, lk.Clamp)(kk.y, Fk.y, Ik.y), Xk
      }
      static Clamp(kk, Fk, Ik) {
        const Xk = (0, lk.Clamp)(kk.x, Fk.x, Ik.x),
          Tk = (0, lk.Clamp)(kk.y, Fk.y, Ik.y);
        return new tk(Xk, Tk)
      }
      static Hermite(kk, Fk, Ik, Xk, Tk) {
        const ik = Tk * Tk,
          yk = Tk * ik,
          lk = 2 * yk - 3 * ik + 1,
          ak = -2 * yk + 3 * ik,
          qk = yk - 2 * ik + Tk,
          Lk = yk - ik,
          Zk = kk.x * lk + Ik.x * ak + Fk.x * qk + Xk.x * Lk,
          jk = kk.y * lk + Ik.y * ak + Fk.y * qk + Xk.y * Lk;
        return new tk(Zk, jk)
      }
      static Hermite1stDerivative(kk, Fk, Ik, Xk, Tk) {
        return this.Hermite1stDerivativeToRef(kk, Fk, Ik, Xk, Tk, new tk)
      }
      static Hermite1stDerivativeToRef(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = Tk * Tk;
        return ik.x = 6 * (yk - Tk) * kk.x + (3 * yk - 4 * Tk + 1) * Fk.x + 6 * (-yk + Tk) * Ik.x + (3 * yk - 2 * Tk) * Xk.x, ik.y = 6 * (yk - Tk) * kk.y + (3 * yk - 4 * Tk + 1) * Fk.y + 6 * (-yk + Tk) * Ik.y + (3 * yk - 2 * Tk) * Xk.y, ik
      }
      static Lerp(kk, Fk, Ik) {
        return tk.LerpToRef(kk, Fk, Ik, new tk)
      }
      static LerpToRef(kk, Fk, Ik, Xk) {
        return Xk.x = kk.x + (Fk.x - kk.x) * Ik, Xk.y = kk.y + (Fk.y - kk.y) * Ik, Xk
      }
      static Dot(kk, Fk) {
        return kk.x * Fk.x + kk.y * Fk.y
      }
      static Normalize(kk) {
        return tk.NormalizeToRef(kk, new tk)
      }
      static NormalizeToRef(kk, Fk) {
        return kk.normalizeToRef(Fk), Fk
      }
      static Minimize(kk, Fk) {
        const Ik = kk.x < Fk.x ? kk.x : Fk.x,
          Xk = kk.y < Fk.y ? kk.y : Fk.y;
        return new tk(Ik, Xk)
      }
      static Maximize(kk, Fk) {
        const Ik = kk.x > Fk.x ? kk.x : Fk.x,
          Xk = kk.y > Fk.y ? kk.y : Fk.y;
        return new tk(Ik, Xk)
      }
      static Transform(kk, Fk) {
        return tk.TransformToRef(kk, Fk, new tk)
      }
      static TransformToRef(kk, Fk, Ik) {
        const Xk = Fk.m,
          Tk = kk.x * Xk[0] + kk.y * Xk[4] + Xk[12],
          ik = kk.x * Xk[1] + kk.y * Xk[5] + Xk[13];
        return Ik.x = Tk, Ik.y = ik, Ik
      }
      static PointInTriangle(kk, Fk, Ik, Xk) {
        const Tk = .5 * (-Ik.y * Xk.x + Fk.y * (-Ik.x + Xk.x) + Fk.x * (Ik.y - Xk.y) + Ik.x * Xk.y),
          ik = Tk < 0 ? -1 : 1,
          yk = (Fk.y * Xk.x - Fk.x * Xk.y + (Xk.y - Fk.y) * kk.x + (Fk.x - Xk.x) * kk.y) * ik,
          lk = (Fk.x * Ik.y - Fk.y * Ik.x + (Fk.y - Ik.y) * kk.x + (Ik.x - Fk.x) * kk.y) * ik;
        return yk > 0 && lk > 0 && yk + lk < 2 * Tk * ik
      }
      static Distance(kk, Fk) {
        return Math.sqrt(tk.DistanceSquared(kk, Fk))
      }
      static DistanceSquared(kk, Fk) {
        const Ik = kk.x - Fk.x,
          Xk = kk.y - Fk.y;
        return Ik * Ik + Xk * Xk
      }
      static Center(kk, Fk) {
        return tk.CenterToRef(kk, Fk, new tk)
      }
      static CenterToRef(kk, Fk, Ik) {
        return Ik.t5((kk.x + Fk.x) / 2, (kk.y + Fk.y) / 2)
      }
      static DistanceOfPointFromSegment(kk, Fk, Ik) {
        const Xk = tk.DistanceSquared(Fk, Ik);
        if (0 === Xk) return tk.Distance(kk, Fk);
        const Tk = Ik.subtract(Fk),
          ik = Math.max(0, Math.min(1, tk.Dot(kk.subtract(Fk), Tk) / Xk)),
          yk = Fk.add(Tk.multiplyByFloats(ik, ik));
        return tk.Distance(kk, yk)
      }
    }
    tk._V8PerformanceHack = new tk(.5, .5), tk._ZeroReadOnly = tk.Zero();
    class Zk {
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
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = kk, this._y = Fk, this._z = Ik
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "Ge"
      }
      getHashCode() {
        let kk = Lk(this._x);
        return kk = 397 * kk ^ Lk(this._y), kk = 397 * kk ^ Lk(this._z), kk
      }
      iXk() {
        return [this._x, this._y, this._z]
      }
      toArray(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return kk[Fk] = this._x, kk[Fk + 1] = this._y, kk[Fk + 2] = this._z, this
      }
      hFk(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Zk.FromArrayToRef(kk, Fk, this), this
      }
      toQuaternion() {
        return ek.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(kk) {
        return this._x += kk._x, this._y += kk._y, this._z += kk._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(kk, Fk, Ik) {
        return this._x += kk, this._y += Fk, this._z += Ik, this._isDirty = !0, this
      }
      add(kk) {
        return new Zk(this._x + kk._x, this._y + kk._y, this._z + kk._z)
      }
      addToRef(kk, Fk) {
        return Fk._x = this._x + kk._x, Fk._y = this._y + kk._y, Fk._z = this._z + kk._z, Fk._isDirty = !0, Fk
      }
      zXk(kk) {
        return this._x -= kk._x, this._y -= kk._y, this._z -= kk._z, this._isDirty = !0, this
      }
      subtract(kk) {
        return new Zk(this._x - kk._x, this._y - kk._y, this._z - kk._z)
      }
      subtractToRef(kk, Fk) {
        return this.subtractFromFloatsToRef(kk._x, kk._y, kk._z, Fk)
      }
      subtractFromFloats(kk, Fk, Ik) {
        return new Zk(this._x - kk, this._y - Fk, this._z - Ik)
      }
      subtractFromFloatsToRef(kk, Fk, Ik, Xk) {
        return Xk._x = this._x - kk, Xk._y = this._y - Fk, Xk._z = this._z - Ik, Xk._isDirty = !0, Xk
      }
      nX() {
        return new Zk(-this._x, -this._y, -this._z)
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
        return new Zk(this._x * kk, this._y * kk, this._z * kk)
      }
      scaleToRef(kk, Fk) {
        return Fk._x = this._x * kk, Fk._y = this._y * kk, Fk._z = this._z * kk, Fk._isDirty = !0, Fk
      }
      getNormalToRef(kk) {
        const Fk = this.length();
        let Ik = Math.acos(this._y / Fk);
        const Xk = Math.atan2(this._z, this._x);
        Ik > Math.PI / 2 ? Ik -= Math.PI / 2 : Ik += Math.PI / 2;
        const Tk = Fk * Math.sin(Ik) * Math.cos(Xk),
          ik = Fk * Math.cos(Ik),
          yk = Fk * Math.sin(Ik) * Math.sin(Xk);
        return kk.set(Tk, ik, yk), kk
      }
      applyRotationQuaternionToRef(kk, Fk) {
        const Ik = this._x,
          Xk = this._y,
          Tk = this._z,
          ik = kk._x,
          yk = kk._y,
          lk = kk._z,
          ak = kk._w,
          qk = 2 * (yk * Tk - lk * Xk),
          Lk = 2 * (lk * Ik - ik * Tk),
          tk = 2 * (ik * Xk - yk * Ik);
        return Fk._x = Ik + ak * qk + yk * tk - lk * Lk, Fk._y = Xk + ak * Lk + lk * qk - ik * tk, Fk._z = Tk + ak * tk + ik * Lk - yk * qk, Fk._isDirty = !0, Fk
      }
      applyRotationQuaternionInPlace(kk) {
        return this.applyRotationQuaternionToRef(kk, this)
      }
      applyRotationQuaternion(kk) {
        return this.applyRotationQuaternionToRef(kk, new Zk)
      }
      scaleAndAddToRef(kk, Fk) {
        return Fk._x += this._x * kk, Fk._y += this._y * kk, Fk._z += this._z * kk, Fk._isDirty = !0, Fk
      }
      projectOnPlane(kk, Fk) {
        return this.projectOnPlaneToRef(kk, Fk, new Zk)
      }
      projectOnPlaneToRef(kk, Fk, Ik) {
        const Xk = kk.normal,
          Tk = kk.d,
          ik = Hk.Ge[0];
        this.subtractToRef(Fk, ik), ik.normalize();
        const yk = Zk.Dot(ik, Xk);
        if (Math.abs(yk) < 1e-10) Ik.I6(1 / 0);
        else {
          const kk = -(Zk.Dot(Fk, Xk) + Tk) / yk,
            lk = ik.scaleInPlace(kk);
          Fk.addToRef(lk, Ik)
        }
        return Ik
      }
      equals(kk) {
        return kk && this._x === kk._x && this._y === kk._y && this._z === kk._z
      }
      equalsWithEpsilon(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xk.b;
        return kk && (0, lk.WithinEpsilon)(this._x, kk._x, Fk) && (0, lk.WithinEpsilon)(this._y, kk._y, Fk) && (0, lk.WithinEpsilon)(this._z, kk._z, Fk)
      }
      Ryk(kk, Fk, Ik) {
        return this._x === kk && this._y === Fk && this._z === Ik
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
      multiplyByFloats(kk, Fk, Ik) {
        return new Zk(this._x * kk, this._y * Fk, this._z * Ik)
      }
      divide(kk) {
        return new Zk(this._x / kk._x, this._y / kk._y, this._z / kk._z)
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
      minimizeInPlaceFromFloats(kk, Fk, Ik) {
        return kk < this._x && (this.x = kk), Fk < this._y && (this.y = Fk), Ik < this._z && (this.z = Ik), this
      }
      maximizeInPlaceFromFloats(kk, Fk, Ik) {
        return kk > this._x && (this.x = kk), Fk > this._y && (this.y = Fk), Ik > this._z && (this.z = Ik), this
      }
      isNonUniformWithinEpsilon(kk) {
        const Fk = Math.abs(this._x),
          Ik = Math.abs(this._y);
        if (!(0, lk.WithinEpsilon)(Fk, Ik, kk)) return !0;
        const Xk = Math.abs(this._z);
        return !(0, lk.WithinEpsilon)(Fk, Xk, kk) || !(0, lk.WithinEpsilon)(Ik, Xk, kk)
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
        return new Zk(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(kk) {
        return kk._x = this._x - Math.floor(this._x), kk._y = this._y - Math.floor(this._y), kk._z = this._z - Math.floor(this._z), kk._isDirty = !0, kk
      }
      fract() {
        return new Zk(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
        const Fk = Hk.Ge[0].kS(this);
        return this.x = Fk[kk[0]], this.y = Fk[kk[1]], this.z = Fk[kk[2]], this
      }
      rotateByQuaternionToRef(kk, Fk) {
        return kk.toRotationMatrix(Hk.Matrix[0]), Zk.TransformCoordinatesToRef(this, Hk.Matrix[0], Fk), Fk
      }
      rotateByQuaternionAroundPointToRef(kk, Fk, Ik) {
        return this.subtractToRef(Fk, Hk.Ge[0]), Hk.Ge[0].rotateByQuaternionToRef(kk, Hk.Ge[0]), Fk.addToRef(Hk.Ge[0], Ik), Ik
      }
      cross(kk) {
        return Zk.CrossToRef(this, kk, new Zk)
      }
      normalizeFromLength(kk) {
        return 0 === kk || 1 === kk ? this : this.scaleInPlace(1 / kk)
      }
      normalizeToNew() {
        return this.normalizeToRef(new Zk)
      }
      normalizeToRef(kk) {
        const Fk = this.length();
        return 0 === Fk || 1 === Fk ? (kk._x = this._x, kk._y = this._y, kk._z = this._z, kk._isDirty = !0, kk) : this.scaleToRef(1 / Fk, kk)
      }
      clone() {
        return new Zk(this._x, this._y, this._z)
      }
      kS(kk) {
        return this.t5(kk._x, kk._y, kk._z)
      }
      t5(kk, Fk, Ik) {
        return this._x = kk, this._y = Fk, this._z = Ik, this._isDirty = !0, this
      }
      set(kk, Fk, Ik) {
        return this.t5(kk, Fk, Ik)
      }
      I6(kk) {
        return this._x = this._y = this._z = kk, this._isDirty = !0, this
      }
      static GetClipFactor(kk, Fk, Ik, Xk) {
        const Tk = Zk.Dot(kk, Ik);
        return (Tk - Xk) / (Tk - Zk.Dot(Fk, Ik))
      }
      static GetAngleBetweenVectors(kk, Fk, Ik) {
        const Xk = kk.normalizeToRef(Hk.Ge[1]),
          Tk = Fk.normalizeToRef(Hk.Ge[2]);
        let ik = Zk.Dot(Xk, Tk);
        ik = (0, lk.Clamp)(ik, -1, 1);
        const yk = Math.acos(ik),
          ak = Hk.Ge[3];
        return Zk.CrossToRef(Xk, Tk, ak), Zk.Dot(ak, Ik) > 0 ? isNaN(yk) ? 0 : yk : isNaN(yk) ? -Math.PI : -Math.acos(ik)
      }
      static GetAngleBetweenVectorsOnPlane(kk, Fk, Ik) {
        Hk.Ge[0].kS(kk);
        const Xk = Hk.Ge[0];
        Hk.Ge[1].kS(Fk);
        const Tk = Hk.Ge[1];
        Hk.Ge[2].kS(Ik);
        const ik = Hk.Ge[2],
          yk = Hk.Ge[3],
          ak = Hk.Ge[4];
        Xk.normalize(), Tk.normalize(), ik.normalize(), Zk.CrossToRef(ik, Xk, yk), Zk.CrossToRef(yk, ik, ak);
        const qk = Math.atan2(Zk.Dot(Tk, yk), Zk.Dot(Tk, ak));
        return (0, lk.NormalizeRadians)(qk)
      }
      static PitchYawRollToMoveBetweenPointsToRef(kk, Fk, Ik) {
        const Xk = Jk.Ge[0];
        return Fk.subtractToRef(kk, Xk), Ik._y = Math.atan2(Xk.x, Xk.z) || 0, Ik._x = Math.atan2(Math.sqrt(Xk.x ** 2 + Xk.z ** 2), Xk.y) || 0, Ik._z = 0, Ik._isDirty = !0, Ik
      }
      static PitchYawRollToMoveBetweenPoints(kk, Fk) {
        const Ik = Zk.Zero();
        return Zk.PitchYawRollToMoveBetweenPointsToRef(kk, Fk, Ik)
      }
      static SlerpToRef(kk, Fk, Ik, Tk) {
        Ik = (0, lk.Clamp)(Ik, 0, 1);
        const ik = Hk.Ge[0],
          yk = Hk.Ge[1];
        ik.kS(kk);
        const ak = ik.length();
        ik.normalizeFromLength(ak), yk.kS(Fk);
        const qk = yk.length();
        yk.normalizeFromLength(qk);
        const Lk = Zk.Dot(ik, yk);
        let tk, jk;
        if (Lk < 1 - Xk.b) {
          const kk = Math.acos(Lk),
            Fk = 1 / Math.sin(kk);
          tk = Math.sin((1 - Ik) * kk) * Fk, jk = Math.sin(Ik * kk) * Fk
        } else tk = 1 - Ik, jk = Ik;
        return ik.scaleInPlace(tk), yk.scaleInPlace(jk), Tk.kS(ik).addInPlace(yk), Tk.scaleInPlace((0, lk.Lerp)(ak, qk, Ik)), Tk
      }
      static SmoothToRef(kk, Fk, Ik, Xk, Tk) {
        return Zk.SlerpToRef(kk, Fk, 0 === Xk ? 1 : Ik / Xk, Tk), Tk
      }
      static FromArray(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Zk(kk[Fk], kk[Fk + 1], kk[Fk + 2])
      }
      static FromFloatArray(kk, Fk) {
        return Zk.FromArray(kk, Fk)
      }
      static FromArrayToRef(kk, Fk, Ik) {
        return Ik._x = kk[Fk], Ik._y = kk[Fk + 1], Ik._z = kk[Fk + 2], Ik._isDirty = !0, Ik
      }
      static FromFloatArrayToRef(kk, Fk, Ik) {
        return Zk.FromArrayToRef(kk, Fk, Ik)
      }
      static FromFloatsToRef(kk, Fk, Ik, Xk) {
        return Xk.t5(kk, Fk, Ik), Xk
      }
      static Zero() {
        return new Zk(0, 0, 0)
      }
      static One() {
        return new Zk(1, 1, 1)
      }
      static Up() {
        return new Zk(0, 1, 0)
      }
      static get UpReadOnly() {
        return Zk._UpReadOnly
      }
      static get DownReadOnly() {
        return Zk._DownReadOnly
      }
      static get RightReadOnly() {
        return Zk._RightReadOnly
      }
      static get LeftReadOnly() {
        return Zk._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return Zk._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return Zk._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return Zk._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return Zk._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return Zk._ZeroReadOnly
      }
      static get OneReadOnly() {
        return Zk._OneReadOnly
      }
      static Down() {
        return new Zk(0, -1, 0)
      }
      static Forward() {
        return new Zk(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new Zk(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new Zk(1, 0, 0)
      }
      static Left() {
        return new Zk(-1, 0, 0)
      }
      static Random() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Zk((0, lk.RandomRange)(kk, Fk), (0, lk.RandomRange)(kk, Fk), (0, lk.RandomRange)(kk, Fk))
      }
      static RandomToRef() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).t5((0, lk.RandomRange)(kk, Fk), (0, lk.RandomRange)(kk, Fk), (0, lk.RandomRange)(kk, Fk))
      }
      static TransformCoordinates(kk, Fk) {
        const Ik = Zk.Zero();
        return Zk.TransformCoordinatesToRef(kk, Fk, Ik), Ik
      }
      static TransformCoordinatesToRef(kk, Fk, Ik) {
        return Zk.TransformCoordinatesFromFloatsToRef(kk._x, kk._y, kk._z, Fk, Ik), Ik
      }
      static TransformCoordinatesFromFloatsToRef(kk, Fk, Ik, Xk, Tk) {
        const ik = Xk.m,
          yk = kk * ik[0] + Fk * ik[4] + Ik * ik[8] + ik[12],
          lk = kk * ik[1] + Fk * ik[5] + Ik * ik[9] + ik[13],
          ak = kk * ik[2] + Fk * ik[6] + Ik * ik[10] + ik[14],
          qk = 1 / (kk * ik[3] + Fk * ik[7] + Ik * ik[11] + ik[15]);
        return Tk._x = yk * qk, Tk._y = lk * qk, Tk._z = ak * qk, Tk._isDirty = !0, Tk
      }
      static TransformNormal(kk, Fk) {
        const Ik = Zk.Zero();
        return Zk.TransformNormalToRef(kk, Fk, Ik), Ik
      }
      static TransformNormalToRef(kk, Fk, Ik) {
        return this.TransformNormalFromFloatsToRef(kk._x, kk._y, kk._z, Fk, Ik), Ik
      }
      static TransformNormalFromFloatsToRef(kk, Fk, Ik, Xk, Tk) {
        const ik = Xk.m;
        return Tk._x = kk * ik[0] + Fk * ik[4] + Ik * ik[8], Tk._y = kk * ik[1] + Fk * ik[5] + Ik * ik[9], Tk._z = kk * ik[2] + Fk * ik[6] + Ik * ik[10], Tk._isDirty = !0, Tk
      }
      static CatmullRom(kk, Fk, Ik, Xk, Tk) {
        const ik = Tk * Tk,
          yk = Tk * ik,
          lk = .5 * (2 * Fk._x + (-kk._x + Ik._x) * Tk + (2 * kk._x - 5 * Fk._x + 4 * Ik._x - Xk._x) * ik + (-kk._x + 3 * Fk._x - 3 * Ik._x + Xk._x) * yk),
          ak = .5 * (2 * Fk._y + (-kk._y + Ik._y) * Tk + (2 * kk._y - 5 * Fk._y + 4 * Ik._y - Xk._y) * ik + (-kk._y + 3 * Fk._y - 3 * Ik._y + Xk._y) * yk),
          qk = .5 * (2 * Fk._z + (-kk._z + Ik._z) * Tk + (2 * kk._z - 5 * Fk._z + 4 * Ik._z - Xk._z) * ik + (-kk._z + 3 * Fk._z - 3 * Ik._z + Xk._z) * yk);
        return new Zk(lk, ak, qk)
      }
      static Clamp(kk, Fk, Ik) {
        const Xk = new Zk;
        return Zk.ClampToRef(kk, Fk, Ik, Xk), Xk
      }
      static ClampToRef(kk, Fk, Ik, Xk) {
        let Tk = kk._x;
        Tk = Tk > Ik._x ? Ik._x : Tk, Tk = Tk < Fk._x ? Fk._x : Tk;
        let ik = kk._y;
        ik = ik > Ik._y ? Ik._y : ik, ik = ik < Fk._y ? Fk._y : ik;
        let yk = kk._z;
        return yk = yk > Ik._z ? Ik._z : yk, yk = yk < Fk._z ? Fk._z : yk, Xk.t5(Tk, ik, yk), Xk
      }
      static CheckExtends(kk, Fk, Ik) {
        Fk.minimizeInPlace(kk), Ik.maximizeInPlace(kk)
      }
      static Hermite(kk, Fk, Ik, Xk, Tk) {
        const ik = Tk * Tk,
          yk = Tk * ik,
          lk = 2 * yk - 3 * ik + 1,
          ak = -2 * yk + 3 * ik,
          qk = yk - 2 * ik + Tk,
          Lk = yk - ik,
          tk = kk._x * lk + Ik._x * ak + Fk._x * qk + Xk._x * Lk,
          jk = kk._y * lk + Ik._y * ak + Fk._y * qk + Xk._y * Lk,
          ek = kk._z * lk + Ik._z * ak + Fk._z * qk + Xk._z * Lk;
        return new Zk(tk, jk, ek)
      }
      static Hermite1stDerivative(kk, Fk, Ik, Xk, Tk) {
        const ik = new Zk;
        return this.Hermite1stDerivativeToRef(kk, Fk, Ik, Xk, Tk, ik), ik
      }
      static Hermite1stDerivativeToRef(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = Tk * Tk;
        return ik._x = 6 * (yk - Tk) * kk._x + (3 * yk - 4 * Tk + 1) * Fk._x + 6 * (-yk + Tk) * Ik._x + (3 * yk - 2 * Tk) * Xk._x, ik._y = 6 * (yk - Tk) * kk._y + (3 * yk - 4 * Tk + 1) * Fk._y + 6 * (-yk + Tk) * Ik._y + (3 * yk - 2 * Tk) * Xk._y, ik._z = 6 * (yk - Tk) * kk._z + (3 * yk - 4 * Tk + 1) * Fk._z + 6 * (-yk + Tk) * Ik._z + (3 * yk - 2 * Tk) * Xk._z, ik._isDirty = !0, ik
      }
      static Lerp(kk, Fk, Ik) {
        const Xk = new Zk(0, 0, 0);
        return Zk.LerpToRef(kk, Fk, Ik, Xk), Xk
      }
      static LerpToRef(kk, Fk, Ik, Xk) {
        return Xk._x = kk._x + (Fk._x - kk._x) * Ik, Xk._y = kk._y + (Fk._y - kk._y) * Ik, Xk._z = kk._z + (Fk._z - kk._z) * Ik, Xk._isDirty = !0, Xk
      }
      static Dot(kk, Fk) {
        return kk._x * Fk._x + kk._y * Fk._y + kk._z * Fk._z
      }
      dot(kk) {
        return this._x * kk._x + this._y * kk._y + this._z * kk._z
      }
      static Cross(kk, Fk) {
        const Ik = new Zk;
        return Zk.CrossToRef(kk, Fk, Ik), Ik
      }
      static CrossToRef(kk, Fk, Ik) {
        const Xk = kk._y * Fk._z - kk._z * Fk._y,
          Tk = kk._z * Fk._x - kk._x * Fk._z,
          ik = kk._x * Fk._y - kk._y * Fk._x;
        return Ik.t5(Xk, Tk, ik), Ik
      }
      static Normalize(kk) {
        const Fk = Zk.Zero();
        return Zk.NormalizeToRef(kk, Fk), Fk
      }
      static NormalizeToRef(kk, Fk) {
        return kk.normalizeToRef(Fk), Fk
      }
      static Project(kk, Fk, Ik, Xk) {
        const Tk = new Zk;
        return Zk.ProjectToRef(kk, Fk, Ik, Xk, Tk), Tk
      }
      static ProjectToRef(kk, Fk, Ik, Xk, Tk) {
        const ik = Xk.width,
          lk = Xk.height,
          ak = Xk.x,
          qk = Xk.y,
          Lk = Hk.Matrix[1],
          tk = yk.e.LastCreatedEngine?.isNDCHalfZRange,
          jk = tk ? 1 : .5,
          ek = tk ? 0 : .5;
        wk.FromValuesToRef(ik / 2, 0, 0, 0, 0, -lk / 2, 0, 0, 0, 0, jk, 0, ak + ik / 2, lk / 2 + qk, ek, 1, Lk);
        const Jk = Hk.Matrix[0];
        return Fk.multiplyToRef(Ik, Jk), Jk.multiplyToRef(Lk, Jk), Zk.TransformCoordinatesToRef(kk, Jk, Tk), Tk
      }
      static Reflect(kk, Fk) {
        return this.ReflectToRef(kk, Fk, new Zk)
      }
      static ReflectToRef(kk, Fk, Ik) {
        const Xk = Jk.Ge[0];
        return Xk.kS(Fk).scaleInPlace(2 * Zk.Dot(kk, Fk)), Ik.kS(kk).zXk(Xk)
      }
      static UnprojectFromTransform(kk, Fk, Ik, Xk, Tk) {
        return this.Unproject(kk, Fk, Ik, Xk, Tk, wk.IdentityReadOnly)
      }
      static Unproject(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = new Zk;
        return Zk.UnprojectToRef(kk, Fk, Ik, Xk, Tk, ik, yk), yk
      }
      static UnprojectToRef(kk, Fk, Ik, Xk, Tk, ik, yk) {
        return Zk.UnprojectFloatsToRef(kk._x, kk._y, kk._z, Fk, Ik, Xk, Tk, ik, yk), yk
      }
      static UnprojectFloatsToRef(kk, Fk, Ik, Xk, Tk, ik, lk, ak, qk) {
        const Lk = Hk.Matrix[0];
        ik.multiplyToRef(lk, Lk), Lk.multiplyToRef(ak, Lk), Lk.invert();
        const tk = Hk.Ge[0];
        return tk.x = kk / Xk * 2 - 1, tk.y = -(Fk / Tk * 2 - 1), yk.e.LastCreatedEngine?.isNDCHalfZRange ? tk.z = Ik : tk.z = 2 * Ik - 1, Zk.TransformCoordinatesToRef(tk, Lk, qk), qk
      }
      static Minimize(kk, Fk) {
        const Ik = new Zk;
        return Ik.kS(kk), Ik.minimizeInPlace(Fk), Ik
      }
      static Maximize(kk, Fk) {
        const Ik = new Zk;
        return Ik.kS(kk), Ik.maximizeInPlace(Fk), Ik
      }
      static Distance(kk, Fk) {
        return Math.sqrt(Zk.DistanceSquared(kk, Fk))
      }
      static DistanceSquared(kk, Fk) {
        const Ik = kk._x - Fk._x,
          Xk = kk._y - Fk._y,
          Tk = kk._z - Fk._z;
        return Ik * Ik + Xk * Xk + Tk * Tk
      }
      static ProjectOnTriangleToRef(kk, Fk, Ik, Tk, ik) {
        const yk = Hk.Ge[0],
          ak = Hk.Ge[1],
          qk = Hk.Ge[2],
          Lk = Hk.Ge[3],
          tk = Hk.Ge[4];
        Ik.subtractToRef(Fk, yk), Tk.subtractToRef(Fk, ak), Tk.subtractToRef(Ik, qk);
        const jk = yk.length(),
          ek = ak.length(),
          wk = qk.length();
        if (jk < Xk.b || ek < Xk.b || wk < Xk.b) return ik.kS(Fk), Zk.Distance(kk, Fk);
        kk.subtractToRef(Fk, tk), Zk.CrossToRef(yk, ak, Lk);
        const Jk = Lk.length();
        if (Jk < Xk.b) return ik.kS(Fk), Zk.Distance(kk, Fk);
        Lk.normalizeFromLength(Jk);
        let xk = tk.length();
        if (xk < Xk.b) return ik.kS(Fk), 0;
        tk.normalizeFromLength(xk);
        const Pk = Zk.Dot(Lk, tk),
          Kk = Hk.Ge[5],
          Qk = Hk.Ge[6];
        Kk.kS(Lk).scaleInPlace(-xk * Pk), Qk.kS(kk).addInPlace(Kk);
        const sk = Hk.Ge[4],
          Vk = Hk.Ge[5],
          zk = Hk.Ge[7],
          Sk = Hk.Ge[8];
        sk.kS(yk).scaleInPlace(1 / jk), Sk.kS(ak).scaleInPlace(1 / ek), sk.addInPlace(Sk).scaleInPlace(-1), Vk.kS(yk).scaleInPlace(-1 / jk), Sk.kS(qk).scaleInPlace(1 / wk), Vk.addInPlace(Sk).scaleInPlace(-1), zk.kS(qk).scaleInPlace(-1 / wk), Sk.kS(ak).scaleInPlace(-1 / ek), zk.addInPlace(Sk).scaleInPlace(-1);
        const vk = Hk.Ge[9];
        let Ek;
        vk.kS(Qk).zXk(Fk), Zk.CrossToRef(sk, vk, Sk), Ek = Zk.Dot(Sk, Lk);
        const Ok = Ek;
        vk.kS(Qk).zXk(Ik), Zk.CrossToRef(Vk, vk, Sk), Ek = Zk.Dot(Sk, Lk);
        const nk = Ek;
        vk.kS(Qk).zXk(Tk), Zk.CrossToRef(zk, vk, Sk), Ek = Zk.Dot(Sk, Lk);
        const Gk = Ek,
          pk = Hk.Ge[10];
        let uk, bk;
        Ok > 0 && nk < 0 ? (pk.kS(yk), uk = Fk, bk = Ik) : nk > 0 && Gk < 0 ? (pk.kS(qk), uk = Ik, bk = Tk) : (pk.kS(ak).scaleInPlace(-1), uk = Tk, bk = Fk);
        const Rk = Hk.Ge[9],
          Uk = Hk.Ge[4];
        uk.subtractToRef(Qk, Sk), bk.subtractToRef(Qk, Rk), Zk.CrossToRef(Sk, Rk, Uk);
        if (!(Zk.Dot(Uk, Lk) < 0)) return ik.kS(Qk), Math.abs(xk * Pk);
        const Ck = Hk.Ge[5];
        Zk.CrossToRef(pk, Uk, Ck), Ck.normalize();
        const Nk = Hk.Ge[9];
        Nk.kS(uk).zXk(Qk);
        const ck = Nk.length();
        if (ck < Xk.b) return ik.kS(uk), Zk.Distance(kk, uk);
        Nk.normalizeFromLength(ck);
        const Wk = Zk.Dot(Ck, Nk),
          fk = Hk.Ge[7];
        fk.kS(Qk).addInPlace(Ck.scaleInPlace(ck * Wk)), Sk.kS(fk).zXk(uk), xk = pk.length(), pk.normalizeFromLength(xk);
        let Bk = Zk.Dot(Sk, pk) / Math.max(xk, Xk.b);
        return Bk = (0, lk.Clamp)(Bk, 0, 1), fk.kS(uk).addInPlace(pk.scaleInPlace(Bk * xk)), ik.kS(fk), Zk.Distance(kk, fk)
      }
      static Center(kk, Fk) {
        return Zk.CenterToRef(kk, Fk, Zk.Zero())
      }
      static CenterToRef(kk, Fk, Ik) {
        return Ik.t5((kk._x + Fk._x) / 2, (kk._y + Fk._y) / 2, (kk._z + Fk._z) / 2)
      }
      static RotationFromAxis(kk, Fk, Ik) {
        const Xk = new Zk;
        return Zk.RotationFromAxisToRef(kk, Fk, Ik, Xk), Xk
      }
      static RotationFromAxisToRef(kk, Fk, Ik, Xk) {
        const Tk = Hk.Quaternion[0];
        return ek.RotationQuaternionFromAxisToRef(kk, Fk, Ik, Tk), Tk.toEulerAnglesToRef(Xk), Xk
      }
    }
    Zk._V8PerformanceHack = new Zk(.5, .5, .5), Zk._UpReadOnly = Zk.Up(), Zk._DownReadOnly = Zk.Down(), Zk._LeftHandedForwardReadOnly = Zk.Forward(!1), Zk._RightHandedForwardReadOnly = Zk.Forward(!0), Zk._LeftHandedBackwardReadOnly = Zk.Backward(!1), Zk._RightHandedBackwardReadOnly = Zk.Backward(!0), Zk._RightReadOnly = Zk.Right(), Zk._LeftReadOnly = Zk.Left(), Zk._ZeroReadOnly = Zk.Zero(), Zk._OneReadOnly = Zk.One();
    class jk {
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
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = kk, this._y = Fk, this._z = Ik, this._w = Xk
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let kk = Lk(this._x);
        return kk = 397 * kk ^ Lk(this._y), kk = 397 * kk ^ Lk(this._z), kk = 397 * kk ^ Lk(this._w), kk
      }
      iXk() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(kk, Fk) {
        return void 0 === Fk && (Fk = 0), kk[Fk] = this._x, kk[Fk + 1] = this._y, kk[Fk + 2] = this._z, kk[Fk + 3] = this._w, this
      }
      hFk(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return jk.FromArrayToRef(kk, Fk, this), this
      }
      addInPlace(kk) {
        return this.x += kk._x, this.y += kk._y, this.z += kk._z, this.w += kk._w, this
      }
      addInPlaceFromFloats(kk, Fk, Ik, Xk) {
        return this.x += kk, this.y += Fk, this.z += Ik, this.w += Xk, this
      }
      add(kk) {
        return new jk(this._x + kk.x, this._y + kk.y, this._z + kk.z, this._w + kk.w)
      }
      addToRef(kk, Fk) {
        return Fk.x = this._x + kk.x, Fk.y = this._y + kk.y, Fk.z = this._z + kk.z, Fk.w = this._w + kk.w, Fk
      }
      zXk(kk) {
        return this.x -= kk.x, this.y -= kk.y, this.z -= kk.z, this.w -= kk.w, this
      }
      subtract(kk) {
        return new jk(this._x - kk.x, this._y - kk.y, this._z - kk.z, this._w - kk.w)
      }
      subtractToRef(kk, Fk) {
        return Fk.x = this._x - kk.x, Fk.y = this._y - kk.y, Fk.z = this._z - kk.z, Fk.w = this._w - kk.w, Fk
      }
      subtractFromFloats(kk, Fk, Ik, Xk) {
        return new jk(this._x - kk, this._y - Fk, this._z - Ik, this._w - Xk)
      }
      subtractFromFloatsToRef(kk, Fk, Ik, Xk, Tk) {
        return Tk.x = this._x - kk, Tk.y = this._y - Fk, Tk.z = this._z - Ik, Tk.w = this._w - Xk, Tk
      }
      nX() {
        return new jk(-this._x, -this._y, -this._z, -this._w)
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
        return new jk(this._x * kk, this._y * kk, this._z * kk, this._w * kk)
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
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xk.b;
        return kk && (0, lk.WithinEpsilon)(this._x, kk.x, Fk) && (0, lk.WithinEpsilon)(this._y, kk.y, Fk) && (0, lk.WithinEpsilon)(this._z, kk.z, Fk) && (0, lk.WithinEpsilon)(this._w, kk.w, Fk)
      }
      Ryk(kk, Fk, Ik, Xk) {
        return this._x === kk && this._y === Fk && this._z === Ik && this._w === Xk
      }
      multiplyInPlace(kk) {
        return this.x *= kk.x, this.y *= kk.y, this.z *= kk.z, this.w *= kk.w, this
      }
      multiply(kk) {
        return new jk(this._x * kk.x, this._y * kk.y, this._z * kk.z, this._w * kk.w)
      }
      multiplyToRef(kk, Fk) {
        return Fk.x = this._x * kk.x, Fk.y = this._y * kk.y, Fk.z = this._z * kk.z, Fk.w = this._w * kk.w, Fk
      }
      multiplyByFloats(kk, Fk, Ik, Xk) {
        return new jk(this._x * kk, this._y * Fk, this._z * Ik, this._w * Xk)
      }
      divide(kk) {
        return new jk(this._x / kk.x, this._y / kk.y, this._z / kk.z, this._w / kk.w)
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
      minimizeInPlaceFromFloats(kk, Fk, Ik, Xk) {
        return this.x = Math.min(kk, this._x), this.y = Math.min(Fk, this._y), this.z = Math.min(Ik, this._z), this.w = Math.min(Xk, this._w), this
      }
      maximizeInPlaceFromFloats(kk, Fk, Ik, Xk) {
        return this.x = Math.max(kk, this._x), this.y = Math.max(Fk, this._y), this.z = Math.max(Ik, this._z), this.w = Math.max(Xk, this._w), this
      }
      floorToRef(kk) {
        return kk.x = Math.floor(this._x), kk.y = Math.floor(this._y), kk.z = Math.floor(this._z), kk.w = Math.floor(this._w), kk
      }
      floor() {
        return new jk(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(kk) {
        return kk.x = this._x - Math.floor(this._x), kk.y = this._y - Math.floor(this._y), kk.z = this._z - Math.floor(this._z), kk.w = this._w - Math.floor(this._w), kk
      }
      fract() {
        return new jk(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
        return this.normalizeToRef(new jk)
      }
      normalizeToRef(kk) {
        const Fk = this.length();
        return 0 === Fk || 1 === Fk ? (kk.x = this._x, kk.y = this._y, kk.z = this._z, kk.w = this._w, kk) : this.scaleToRef(1 / Fk, kk)
      }
      toVector3() {
        return new Zk(this._x, this._y, this._z)
      }
      clone() {
        return new jk(this._x, this._y, this._z, this._w)
      }
      kS(kk) {
        return this.x = kk.x, this.y = kk.y, this.z = kk.z, this.w = kk.w, this
      }
      t5(kk, Fk, Ik, Xk) {
        return this.x = kk, this.y = Fk, this.z = Ik, this.w = Xk, this
      }
      set(kk, Fk, Ik, Xk) {
        return this.t5(kk, Fk, Ik, Xk)
      }
      I6(kk) {
        return this.x = this.y = this.z = this.w = kk, this
      }
      dot(kk) {
        return this._x * kk.x + this._y * kk.y + this._z * kk.z + this._w * kk.w
      }
      static FromArray(kk, Fk) {
        return Fk || (Fk = 0), new jk(kk[Fk], kk[Fk + 1], kk[Fk + 2], kk[Fk + 3])
      }
      static FromArrayToRef(kk, Fk, Ik) {
        return Ik.x = kk[Fk], Ik.y = kk[Fk + 1], Ik.z = kk[Fk + 2], Ik.w = kk[Fk + 3], Ik
      }
      static FromFloatArrayToRef(kk, Fk, Ik) {
        return jk.FromArrayToRef(kk, Fk, Ik), Ik
      }
      static FromFloatsToRef(kk, Fk, Ik, Xk, Tk) {
        return Tk.x = kk, Tk.y = Fk, Tk.z = Ik, Tk.w = Xk, Tk
      }
      static Zero() {
        return new jk(0, 0, 0, 0)
      }
      static One() {
        return new jk(1, 1, 1, 1)
      }
      static Random() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new jk((0, lk.RandomRange)(kk, Fk), (0, lk.RandomRange)(kk, Fk), (0, lk.RandomRange)(kk, Fk), (0, lk.RandomRange)(kk, Fk))
      }
      static RandomToRef() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Ik = arguments.length > 2 ? arguments[2] : void 0;
        return Ik.x = (0, lk.RandomRange)(kk, Fk), Ik.y = (0, lk.RandomRange)(kk, Fk), Ik.z = (0, lk.RandomRange)(kk, Fk), Ik.w = (0, lk.RandomRange)(kk, Fk), Ik
      }
      static Clamp(kk, Fk, Ik) {
        return jk.ClampToRef(kk, Fk, Ik, new jk)
      }
      static ClampToRef(kk, Fk, Ik, Xk) {
        return Xk.x = (0, lk.Clamp)(kk.x, Fk.x, Ik.x), Xk.y = (0, lk.Clamp)(kk.y, Fk.y, Ik.y), Xk.z = (0, lk.Clamp)(kk.z, Fk.z, Ik.z), Xk.w = (0, lk.Clamp)(kk.w, Fk.w, Ik.w), Xk
      }
      static CheckExtends(kk, Fk, Ik) {
        Fk.minimizeInPlace(kk), Ik.maximizeInPlace(kk)
      }
      static get ZeroReadOnly() {
        return jk._ZeroReadOnly
      }
      static Normalize(kk) {
        return jk.NormalizeToRef(kk, new jk)
      }
      static NormalizeToRef(kk, Fk) {
        return kk.normalizeToRef(Fk), Fk
      }
      static Minimize(kk, Fk) {
        const Ik = new jk;
        return Ik.kS(kk), Ik.minimizeInPlace(Fk), Ik
      }
      static Maximize(kk, Fk) {
        const Ik = new jk;
        return Ik.kS(kk), Ik.maximizeInPlace(Fk), Ik
      }
      static Distance(kk, Fk) {
        return Math.sqrt(jk.DistanceSquared(kk, Fk))
      }
      static DistanceSquared(kk, Fk) {
        const Ik = kk.x - Fk.x,
          Xk = kk.y - Fk.y,
          Tk = kk.z - Fk.z,
          ik = kk.w - Fk.w;
        return Ik * Ik + Xk * Xk + Tk * Tk + ik * ik
      }
      static Center(kk, Fk) {
        return jk.CenterToRef(kk, Fk, new jk)
      }
      static CenterToRef(kk, Fk, Ik) {
        return Ik.x = (kk.x + Fk.x) / 2, Ik.y = (kk.y + Fk.y) / 2, Ik.z = (kk.z + Fk.z) / 2, Ik.w = (kk.w + Fk.w) / 2, Ik
      }
      static TransformCoordinates(kk, Fk) {
        return jk.TransformCoordinatesToRef(kk, Fk, new jk)
      }
      static TransformCoordinatesToRef(kk, Fk, Ik) {
        return jk.TransformCoordinatesFromFloatsToRef(kk._x, kk._y, kk._z, Fk, Ik), Ik
      }
      static TransformCoordinatesFromFloatsToRef(kk, Fk, Ik, Xk, Tk) {
        const ik = Xk.m,
          yk = kk * ik[0] + Fk * ik[4] + Ik * ik[8] + ik[12],
          lk = kk * ik[1] + Fk * ik[5] + Ik * ik[9] + ik[13],
          ak = kk * ik[2] + Fk * ik[6] + Ik * ik[10] + ik[14],
          qk = kk * ik[3] + Fk * ik[7] + Ik * ik[11] + ik[15];
        return Tk.x = yk, Tk.y = lk, Tk.z = ak, Tk.w = qk, Tk
      }
      static TransformNormal(kk, Fk) {
        return jk.TransformNormalToRef(kk, Fk, new jk)
      }
      static TransformNormalToRef(kk, Fk, Ik) {
        const Xk = Fk.m,
          Tk = kk.x * Xk[0] + kk.y * Xk[4] + kk.z * Xk[8],
          ik = kk.x * Xk[1] + kk.y * Xk[5] + kk.z * Xk[9],
          yk = kk.x * Xk[2] + kk.y * Xk[6] + kk.z * Xk[10];
        return Ik.x = Tk, Ik.y = ik, Ik.z = yk, Ik.w = kk.w, Ik
      }
      static TransformNormalFromFloatsToRef(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = Tk.m;
        return ik.x = kk * yk[0] + Fk * yk[4] + Ik * yk[8], ik.y = kk * yk[1] + Fk * yk[5] + Ik * yk[9], ik.z = kk * yk[2] + Fk * yk[6] + Ik * yk[10], ik.w = Xk, ik
      }
      static FromVector3(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new jk(kk._x, kk._y, kk._z, Fk)
      }
      static Dot(kk, Fk) {
        return kk.x * Fk.x + kk.y * Fk.y + kk.z * Fk.z + kk.w * Fk.w
      }
    }
    jk._V8PerformanceHack = new jk(.5, .5, .5, .5), jk._ZeroReadOnly = jk.Zero();
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
          Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Xk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = kk, this._y = Fk, this._z = Ik, this._w = Xk
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let kk = Lk(this._x);
        return kk = 397 * kk ^ Lk(this._y), kk = 397 * kk ^ Lk(this._z), kk = 397 * kk ^ Lk(this._w), kk
      }
      iXk() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return kk[Fk] = this._x, kk[Fk + 1] = this._y, kk[Fk + 2] = this._z, kk[Fk + 3] = this._w, this
      }
      hFk(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ek.FromArrayToRef(kk, Fk, this)
      }
      equals(kk) {
        return kk && this._x === kk._x && this._y === kk._y && this._z === kk._z && this._w === kk._w
      }
      equalsWithEpsilon(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xk.b;
        return kk && (0, lk.WithinEpsilon)(this._x, kk._x, Fk) && (0, lk.WithinEpsilon)(this._y, kk._y, Fk) && (0, lk.WithinEpsilon)(this._z, kk._z, Fk) && (0, lk.WithinEpsilon)(this._w, kk._w, Fk)
      }
      isApprox(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xk.b;
        return kk && ((0, lk.WithinEpsilon)(this._x, kk._x, Fk) && (0, lk.WithinEpsilon)(this._y, kk._y, Fk) && (0, lk.WithinEpsilon)(this._z, kk._z, Fk) && (0, lk.WithinEpsilon)(this._w, kk._w, Fk) || (0, lk.WithinEpsilon)(this._x, -kk._x, Fk) && (0, lk.WithinEpsilon)(this._y, -kk._y, Fk) && (0, lk.WithinEpsilon)(this._z, -kk._z, Fk) && (0, lk.WithinEpsilon)(this._w, -kk._w, Fk))
      }
      clone() {
        return new ek(this._x, this._y, this._z, this._w)
      }
      kS(kk) {
        return this._x = kk._x, this._y = kk._y, this._z = kk._z, this._w = kk._w, this._isDirty = !0, this
      }
      t5(kk, Fk, Ik, Xk) {
        return this._x = kk, this._y = Fk, this._z = Ik, this._w = Xk, this._isDirty = !0, this
      }
      set(kk, Fk, Ik, Xk) {
        return this.t5(kk, Fk, Ik, Xk)
      }
      I6(kk) {
        return this.t5(kk, kk, kk, kk)
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
      addInPlaceFromFloats(kk, Fk, Ik, Xk) {
        return this._x += kk, this._y += Fk, this._z += Ik, this._w += Xk, this._isDirty = !0, this
      }
      subtractToRef(kk, Fk) {
        return Fk._x = this._x - kk._x, Fk._y = this._y - kk._y, Fk._z = this._z - kk._z, Fk._w = this._w - kk._w, Fk._isDirty = !0, Fk
      }
      subtractFromFloats(kk, Fk, Ik, Xk) {
        return this.subtractFromFloatsToRef(kk, Fk, Ik, Xk, new ek)
      }
      subtractFromFloatsToRef(kk, Fk, Ik, Xk, Tk) {
        return Tk._x = this._x - kk, Tk._y = this._y - Fk, Tk._z = this._z - Ik, Tk._w = this._w - Xk, Tk._isDirty = !0, Tk
      }
      subtract(kk) {
        return new ek(this._x - kk._x, this._y - kk._y, this._z - kk._z, this._w - kk._w)
      }
      zXk(kk) {
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
        const Ik = this._x * kk._w + this._y * kk._z - this._z * kk._y + this._w * kk._x,
          Xk = -this._x * kk._z + this._y * kk._w + this._z * kk._x + this._w * kk._y,
          Tk = this._x * kk._y - this._y * kk._x + this._z * kk._w + this._w * kk._z,
          ik = -this._x * kk._x - this._y * kk._y - this._z * kk._z + this._w * kk._w;
        return Fk.t5(Ik, Xk, Tk, ik), Fk
      }
      multiplyInPlace(kk) {
        return this.multiplyToRef(kk, this)
      }
      multiplyByFloats(kk, Fk, Ik, Xk) {
        return this._x *= kk, this._y *= Fk, this._z *= Ik, this._w *= Xk, this._isDirty = !0, this
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
      nX() {
        return this.negateToRef(new ek)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(kk) {
        return kk._x = -this._x, kk._y = -this._y, kk._z = -this._z, kk._w = -this._w, kk._isDirty = !0, kk
      }
      Ryk(kk, Fk, Ik, Xk) {
        return this._x === kk && this._y === Fk && this._z === Ik && this._w === Xk
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
        return kk.t5(-this._x, -this._y, -this._z, this._w), kk
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
        return 0 === Fk || 1 === Fk ? kk.t5(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / Fk, kk)
      }
      toEulerAngles() {
        const kk = Zk.Zero();
        return this.toEulerAnglesToRef(kk), kk
      }
      toEulerAnglesToRef(kk) {
        const Fk = this._z,
          Ik = this._x,
          Xk = this._y,
          Tk = this._w,
          ik = Xk * Fk - Ik * Tk,
          yk = .4999999;
        if (ik < -yk) kk._y = 2 * Math.atan2(Xk, Tk), kk._x = Math.PI / 2, kk._z = 0, kk._isDirty = !0;
        else if (ik > yk) kk._y = 2 * Math.atan2(Xk, Tk), kk._x = -Math.PI / 2, kk._z = 0, kk._isDirty = !0;
        else {
          const yk = Tk * Tk,
            lk = Fk * Fk,
            ak = Ik * Ik,
            qk = Xk * Xk;
          kk._z = Math.atan2(2 * (Ik * Xk + Fk * Tk), -lk - ak + qk + yk), kk._x = Math.asin(-2 * ik), kk._y = Math.atan2(2 * (Fk * Ik + Xk * Tk), lk - ak - qk + yk), kk._isDirty = !0
        }
        return kk
      }
      toAlphaBetaGammaToRef(kk) {
        const Fk = this._z,
          Ik = this._x,
          Xk = this._y,
          Tk = this._w,
          ik = Math.sqrt(Ik * Ik + Xk * Xk),
          yk = Math.sqrt(Fk * Fk + Tk * Tk),
          lk = 2 * Math.atan2(ik, yk),
          ak = 2 * Math.atan2(Fk, Tk),
          qk = 2 * Math.atan2(Xk, Ik),
          Lk = (ak + qk) / 2,
          tk = (ak - qk) / 2;
        return kk.set(tk, lk, Lk), kk
      }
      toRotationMatrix(kk) {
        return wk.FromQuaternionToRef(this, kk), kk
      }
      fromRotationMatrix(kk) {
        return ek.FromRotationMatrixToRef(kk, this), this
      }
      dot(kk) {
        return this._x * kk._x + this._y * kk._y + this._z * kk._z + this._w * kk._w
      }
      toAxisAngle() {
        const kk = Zk.Zero();
        return {
          axis: kk,
          angle: this.toAxisAngleToRef(kk)
        }
      }
      toAxisAngleToRef(kk) {
        let Fk;
        const Ik = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          Xk = this._w;
        return Ik > 0 ? (Fk = 2 * Math.atan2(Ik, Xk), kk.set(this._x / Ik, this._y / Ik, this._z / Ik)) : (Fk = 0, kk.set(1, 0, 0)), Fk
      }
      static FromRotationMatrix(kk) {
        const Fk = new ek;
        return ek.FromRotationMatrixToRef(kk, Fk), Fk
      }
      static FromRotationMatrixToRef(kk, Fk) {
        const Ik = kk.m,
          Xk = Ik[0],
          Tk = Ik[4],
          ik = Ik[8],
          yk = Ik[1],
          lk = Ik[5],
          ak = Ik[9],
          qk = Ik[2],
          Lk = Ik[6],
          tk = Ik[10],
          Zk = Xk + lk + tk;
        let jk;
        return Zk > 0 ? (jk = .5 / Math.sqrt(Zk + 1), Fk._w = .25 / jk, Fk._x = (Lk - ak) * jk, Fk._y = (ik - qk) * jk, Fk._z = (yk - Tk) * jk, Fk._isDirty = !0) : Xk > lk && Xk > tk ? (jk = 2 * Math.sqrt(1 + Xk - lk - tk), Fk._w = (Lk - ak) / jk, Fk._x = .25 * jk, Fk._y = (Tk + yk) / jk, Fk._z = (ik + qk) / jk, Fk._isDirty = !0) : lk > tk ? (jk = 2 * Math.sqrt(1 + lk - Xk - tk), Fk._w = (ik - qk) / jk, Fk._x = (Tk + yk) / jk, Fk._y = .25 * jk, Fk._z = (ak + Lk) / jk, Fk._isDirty = !0) : (jk = 2 * Math.sqrt(1 + tk - Xk - lk), Fk._w = (yk - Tk) / jk, Fk._x = (ik + qk) / jk, Fk._y = (ak + Lk) / jk, Fk._z = .25 * jk, Fk._isDirty = !0), Fk
      }
      static Dot(kk, Fk) {
        return kk._x * Fk._x + kk._y * Fk._y + kk._z * Fk._z + kk._w * Fk._w
      }
      static AreClose(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const Xk = ek.Dot(kk, Fk);
        return 1 - Xk * Xk <= Ik
      }
      static SmoothToRef(kk, Fk, Ik, Xk, Tk) {
        let ik = 0 === Xk ? 1 : Ik / Xk;
        return ik = (0, lk.Clamp)(ik, 0, 1), ek.SlerpToRef(kk, Fk, ik, Tk), Tk
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
      static RotationAxisToRef(kk, Fk, Ik) {
        Ik._w = Math.cos(Fk / 2);
        const Xk = Math.sin(Fk / 2) / kk.length();
        return Ik._x = kk._x * Xk, Ik._y = kk._y * Xk, Ik._z = kk._z * Xk, Ik._isDirty = !0, Ik
      }
      static FromArray(kk, Fk) {
        return Fk || (Fk = 0), new ek(kk[Fk], kk[Fk + 1], kk[Fk + 2], kk[Fk + 3])
      }
      static FromArrayToRef(kk, Fk, Ik) {
        return Ik._x = kk[Fk], Ik._y = kk[Fk + 1], Ik._z = kk[Fk + 2], Ik._w = kk[Fk + 3], Ik._isDirty = !0, Ik
      }
      static FromFloatsToRef(kk, Fk, Ik, Xk, Tk) {
        return Tk.t5(kk, Fk, Ik, Xk), Tk
      }
      static FromEulerAngles(kk, Fk, Ik) {
        const Xk = new ek;
        return ek.RotationYawPitchRollToRef(Fk, kk, Ik, Xk), Xk
      }
      static FromEulerAnglesToRef(kk, Fk, Ik, Xk) {
        return ek.RotationYawPitchRollToRef(Fk, kk, Ik, Xk), Xk
      }
      static FromEulerVector(kk) {
        const Fk = new ek;
        return ek.RotationYawPitchRollToRef(kk._y, kk._x, kk._z, Fk), Fk
      }
      static FromEulerVectorToRef(kk, Fk) {
        return ek.RotationYawPitchRollToRef(kk._y, kk._x, kk._z, Fk), Fk
      }
      static FromUnitVectorsToRef(kk, Fk, Ik) {
        let Tk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Xk.b;
        const ik = Zk.Dot(kk, Fk) + 1;
        return ik < Tk ? Math.abs(kk.x) > Math.abs(kk.z) ? Ik.set(-kk.y, kk.x, 0, 0) : Ik.set(0, -kk.z, kk.y, 0) : (Zk.CrossToRef(kk, Fk, Jk.Ge[0]), Ik.set(Jk.Ge[0].x, Jk.Ge[0].y, Jk.Ge[0].z, ik)), Ik.normalize()
      }
      static RotationYawPitchRoll(kk, Fk, Ik) {
        const Xk = new ek;
        return ek.RotationYawPitchRollToRef(kk, Fk, Ik, Xk), Xk
      }
      static RotationYawPitchRollToRef(kk, Fk, Ik, Xk) {
        const Tk = .5 * Ik,
          ik = .5 * Fk,
          yk = .5 * kk,
          lk = Math.sin(Tk),
          ak = Math.cos(Tk),
          qk = Math.sin(ik),
          Lk = Math.cos(ik),
          tk = Math.sin(yk),
          Zk = Math.cos(yk);
        return Xk._x = Zk * qk * ak + tk * Lk * lk, Xk._y = tk * Lk * ak - Zk * qk * lk, Xk._z = Zk * Lk * lk - tk * qk * ak, Xk._w = Zk * Lk * ak + tk * qk * lk, Xk._isDirty = !0, Xk
      }
      static RotationAlphaBetaGamma(kk, Fk, Ik) {
        const Xk = new ek;
        return ek.RotationAlphaBetaGammaToRef(kk, Fk, Ik, Xk), Xk
      }
      static RotationAlphaBetaGammaToRef(kk, Fk, Ik, Xk) {
        const Tk = .5 * (Ik + kk),
          ik = .5 * (Ik - kk),
          yk = .5 * Fk;
        return Xk._x = Math.cos(ik) * Math.sin(yk), Xk._y = Math.sin(ik) * Math.sin(yk), Xk._z = Math.sin(Tk) * Math.cos(yk), Xk._w = Math.cos(Tk) * Math.cos(yk), Xk._isDirty = !0, Xk
      }
      static RotationQuaternionFromAxis(kk, Fk, Ik) {
        const Xk = new ek(0, 0, 0, 0);
        return ek.RotationQuaternionFromAxisToRef(kk, Fk, Ik, Xk), Xk
      }
      static RotationQuaternionFromAxisToRef(kk, Fk, Ik, Xk) {
        const Tk = Hk.Matrix[0];
        return kk = kk.normalizeToRef(Hk.Ge[0]), Fk = Fk.normalizeToRef(Hk.Ge[1]), Ik = Ik.normalizeToRef(Hk.Ge[2]), wk.FromXYZAxesToRef(kk, Fk, Ik, Tk), ek.FromRotationMatrixToRef(Tk, Xk), Xk
      }
      static FromLookDirectionLH(kk, Fk) {
        const Ik = new ek;
        return ek.FromLookDirectionLHToRef(kk, Fk, Ik), Ik
      }
      static FromLookDirectionLHToRef(kk, Fk, Ik) {
        const Xk = Hk.Matrix[0];
        return wk.LookDirectionLHToRef(kk, Fk, Xk), ek.FromRotationMatrixToRef(Xk, Ik), Ik
      }
      static FromLookDirectionRH(kk, Fk) {
        const Ik = new ek;
        return ek.FromLookDirectionRHToRef(kk, Fk, Ik), Ik
      }
      static FromLookDirectionRHToRef(kk, Fk, Ik) {
        const Xk = Hk.Matrix[0];
        return wk.LookDirectionRHToRef(kk, Fk, Xk), ek.FromRotationMatrixToRef(Xk, Ik)
      }
      static Slerp(kk, Fk, Ik) {
        const Xk = ek.Identity();
        return ek.SlerpToRef(kk, Fk, Ik, Xk), Xk
      }
      static SlerpToRef(kk, Fk, Ik, Xk) {
        let Tk, ik, yk = kk._x * Fk._x + kk._y * Fk._y + kk._z * Fk._z + kk._w * Fk._w,
          lk = !1;
        if (yk < 0 && (lk = !0, yk = -yk), yk > .999999) ik = 1 - Ik, Tk = lk ? -Ik : Ik;
        else {
          const kk = Math.acos(yk),
            Fk = 1 / Math.sin(kk);
          ik = Math.sin((1 - Ik) * kk) * Fk, Tk = lk ? -Math.sin(Ik * kk) * Fk : Math.sin(Ik * kk) * Fk
        }
        return Xk._x = ik * kk._x + Tk * Fk._x, Xk._y = ik * kk._y + Tk * Fk._y, Xk._z = ik * kk._z + Tk * Fk._z, Xk._w = ik * kk._w + Tk * Fk._w, Xk._isDirty = !0, Xk
      }
      static Hermite(kk, Fk, Ik, Xk, Tk) {
        const ik = Tk * Tk,
          yk = Tk * ik,
          lk = 2 * yk - 3 * ik + 1,
          ak = -2 * yk + 3 * ik,
          qk = yk - 2 * ik + Tk,
          Lk = yk - ik,
          tk = kk._x * lk + Ik._x * ak + Fk._x * qk + Xk._x * Lk,
          Zk = kk._y * lk + Ik._y * ak + Fk._y * qk + Xk._y * Lk,
          jk = kk._z * lk + Ik._z * ak + Fk._z * qk + Xk._z * Lk,
          wk = kk._w * lk + Ik._w * ak + Fk._w * qk + Xk._w * Lk;
        return new ek(tk, Zk, jk, wk)
      }
      static Hermite1stDerivative(kk, Fk, Ik, Xk, Tk) {
        const ik = new ek;
        return this.Hermite1stDerivativeToRef(kk, Fk, Ik, Xk, Tk, ik), ik
      }
      static Hermite1stDerivativeToRef(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = Tk * Tk;
        return ik._x = 6 * (yk - Tk) * kk._x + (3 * yk - 4 * Tk + 1) * Fk._x + 6 * (-yk + Tk) * Ik._x + (3 * yk - 2 * Tk) * Xk._x, ik._y = 6 * (yk - Tk) * kk._y + (3 * yk - 4 * Tk + 1) * Fk._y + 6 * (-yk + Tk) * Ik._y + (3 * yk - 2 * Tk) * Xk._y, ik._z = 6 * (yk - Tk) * kk._z + (3 * yk - 4 * Tk + 1) * Fk._z + 6 * (-yk + Tk) * Ik._z + (3 * yk - 2 * Tk) * Xk._z, ik._w = 6 * (yk - Tk) * kk._w + (3 * yk - 4 * Tk + 1) * Fk._w + 6 * (-yk + Tk) * Ik._w + (3 * yk - 2 * Tk) * Xk._w, ik._isDirty = !0, ik
      }
      static Normalize(kk) {
        const Fk = ek.Zero();
        return ek.NormalizeToRef(kk, Fk), Fk
      }
      static NormalizeToRef(kk, Fk) {
        return kk.normalizeToRef(Fk), Fk
      }
      static Clamp(kk, Fk, Ik) {
        const Xk = new ek;
        return ek.ClampToRef(kk, Fk, Ik, Xk), Xk
      }
      static ClampToRef(kk, Fk, Ik, Xk) {
        return Xk.t5((0, lk.Clamp)(kk.x, Fk.x, Ik.x), (0, lk.Clamp)(kk.y, Fk.y, Ik.y), (0, lk.Clamp)(kk.z, Fk.z, Ik.z), (0, lk.Clamp)(kk.w, Fk.w, Ik.w))
      }
      static Random() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new ek((0, lk.RandomRange)(kk, Fk), (0, lk.RandomRange)(kk, Fk), (0, lk.RandomRange)(kk, Fk), (0, lk.RandomRange)(kk, Fk))
      }
      static RandomToRef() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).t5((0, lk.RandomRange)(kk, Fk), (0, lk.RandomRange)(kk, Fk), (0, lk.RandomRange)(kk, Fk), (0, lk.RandomRange)(kk, Fk))
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
        const Ik = kk.x - Fk.x,
          Xk = kk.y - Fk.y,
          Tk = kk.z - Fk.z,
          ik = kk.w - Fk.w;
        return Ik * Ik + Xk * Xk + Tk * Tk + ik * ik
      }
      static Center(kk, Fk) {
        return ek.CenterToRef(kk, Fk, ek.Zero())
      }
      static CenterToRef(kk, Fk, Ik) {
        return Ik.t5((kk.x + Fk.x) / 2, (kk.y + Fk.y) / 2, (kk.z + Fk.z) / 2, (kk.w + Fk.w) / 2)
      }
    }
    ek._V8PerformanceHack = new ek(.5, .5, .5, .5);
    class wk {
      static get Use64Bits() {
        return ik.d.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = ak.i._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Xk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = kk, this._isIdentity3x2 = kk || Ik, this._isIdentityDirty = !this._isIdentity && Fk, this._isIdentity3x2Dirty = !this._isIdentity3x2 && Xk
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, ik.d.MatrixTrackPrecisionChange && ik.d.MatrixTrackedMatrices.push(this), this._m = new ik.d.MatrixCurrentType(16), this.markAsUpdated()
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
          Ik = kk[1],
          Xk = kk[2],
          Tk = kk[3],
          ik = kk[4],
          yk = kk[5],
          lk = kk[6],
          ak = kk[7],
          qk = kk[8],
          Lk = kk[9],
          tk = kk[10],
          Zk = kk[11],
          jk = kk[12],
          ek = kk[13],
          wk = kk[14],
          Hk = kk[15],
          Jk = tk * Hk - wk * Zk,
          xk = Lk * Hk - ek * Zk,
          Pk = Lk * wk - ek * tk,
          Kk = qk * Hk - jk * Zk,
          Qk = qk * wk - tk * jk,
          sk = qk * ek - jk * Lk;
        return Fk * +(yk * Jk - lk * xk + ak * Pk) + Ik * -(ik * Jk - lk * Kk + ak * Qk) + Xk * +(ik * xk - yk * Kk + ak * sk) + Tk * -(ik * Pk - yk * Qk + lk * sk)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!kk) return this._m;
        const Ik = this._m;
        for (let Xk = 0; Xk < 16; Xk++) kk[Fk + Xk] = Ik[Xk];
        return this
      }
      iXk() {
        return this._m
      }
      hFk(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return wk.FromArrayToRef(kk, Fk, this)
      }
      t5() {
        for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
        return wk.FromArrayToRef(Fk, 0, this)
      }
      set() {
        const kk = this._m;
        for (let Fk = 0; Fk < 16; Fk++) kk[Fk] = Fk < 0 || arguments.length <= Fk ? void 0 : arguments[Fk];
        return this.markAsUpdated(), this
      }
      I6(kk) {
        const Fk = this._m;
        for (let Ik = 0; Ik < 16; Ik++) Fk[Ik] = kk;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return wk.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(kk) {
        const Fk = new wk;
        return this.addToRef(kk, Fk), Fk
      }
      addToRef(kk, Fk) {
        const Ik = this._m,
          Xk = Fk._m,
          Tk = kk.m;
        for (let ik = 0; ik < 16; ik++) Xk[ik] = Ik[ik] + Tk[ik];
        return Fk.markAsUpdated(), Fk
      }
      addToSelf(kk) {
        const Fk = this._m,
          Ik = kk.m;
        return Fk[0] += Ik[0], Fk[1] += Ik[1], Fk[2] += Ik[2], Fk[3] += Ik[3], Fk[4] += Ik[4], Fk[5] += Ik[5], Fk[6] += Ik[6], Fk[7] += Ik[7], Fk[8] += Ik[8], Fk[9] += Ik[9], Fk[10] += Ik[10], Fk[11] += Ik[11], Fk[12] += Ik[12], Fk[13] += Ik[13], Fk[14] += Ik[14], Fk[15] += Ik[15], this.markAsUpdated(), this
      }
      addInPlace(kk) {
        const Fk = this._m,
          Ik = kk.m;
        for (let Xk = 0; Xk < 16; Xk++) Fk[Xk] += Ik[Xk];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const kk = this._m;
        for (let Fk = 0; Fk < 16; Fk++) kk[Fk] += Fk < 0 || arguments.length <= Fk ? void 0 : arguments[Fk];
        return this.markAsUpdated(), this
      }
      subtract(kk) {
        const Fk = this._m,
          Ik = kk.m;
        for (let Xk = 0; Xk < 16; Xk++) Fk[Xk] -= Ik[Xk];
        return this.markAsUpdated(), this
      }
      subtractToRef(kk, Fk) {
        const Ik = this._m,
          Xk = kk.m,
          Tk = Fk._m;
        for (let ik = 0; ik < 16; ik++) Tk[ik] = Ik[ik] - Xk[ik];
        return Fk.markAsUpdated(), Fk
      }
      zXk(kk) {
        const Fk = this._m,
          Ik = kk.m;
        for (let Xk = 0; Xk < 16; Xk++) Fk[Xk] -= Ik[Xk];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
        return this.subtractFromFloatsToRef(...Fk, new wk)
      }
      subtractFromFloatsToRef() {
        for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
        const Xk = Fk.pop(),
          Tk = this._m,
          ik = Xk._m,
          yk = Fk;
        for (let lk = 0; lk < 16; lk++) ik[lk] = Tk[lk] - yk[lk];
        return Xk.markAsUpdated(), Xk
      }
      invertToRef(kk) {
        return !0 === this._isIdentity ? (wk.IdentityToRef(kk), kk) : ((0, ak.d)(this, kk.iXk()) ? kk.markAsUpdated() : kk.kS(this), kk)
      }
      addAtIndex(kk, Fk) {
        return this._m[kk] += Fk, this.markAsUpdated(), this
      }
      multiplyAtIndex(kk, Fk) {
        return this._m[kk] *= Fk, this.markAsUpdated(), this
      }
      setTranslationFromFloats(kk, Fk, Ik) {
        return this._m[12] = kk, this._m[13] = Fk, this._m[14] = Ik, this.markAsUpdated(), this
      }
      addTranslationFromFloats(kk, Fk, Ik) {
        return this._m[12] += kk, this._m[13] += Fk, this._m[14] += Ik, this.markAsUpdated(), this
      }
      setTranslation(kk) {
        return this.setTranslationFromFloats(kk._x, kk._y, kk._z)
      }
      getTranslation() {
        return new Zk(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(kk) {
        return kk.x = this._m[12], kk.y = this._m[13], kk.z = this._m[14], kk
      }
      removeRotationAndScaling() {
        const kk = this.m;
        return wk.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, kk[12], kk[13], kk[14], kk[15], this), this._updateIdentityStatus(0 === kk[12] && 0 === kk[13] && 0 === kk[14] && 1 === kk[15]), this
      }
      kS(kk) {
        kk.copyToArray(this._m);
        const Fk = kk;
        return this.updateFlag = Fk.updateFlag, this._updateIdentityStatus(Fk._isIdentity, Fk._isIdentityDirty, Fk._isIdentity3x2, Fk._isIdentity3x2Dirty), this
      }
      copyToArray(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, ak.b)(this, kk, Fk), this
      }
      multiply(kk) {
        const Fk = new wk;
        return this.multiplyToRef(kk, Fk), Fk
      }
      multiplyInPlace(kk) {
        const Fk = this._m,
          Ik = kk.m;
        for (let Xk = 0; Xk < 16; Xk++) Fk[Xk] *= Ik[Xk];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const kk = this._m;
        for (let Fk = 0; Fk < 16; Fk++) kk[Fk] *= Fk < 0 || arguments.length <= Fk ? void 0 : arguments[Fk];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var kk = arguments.length, Fk = new Array(kk), Ik = 0; Ik < kk; Ik++) Fk[Ik] = arguments[Ik];
        const Xk = Fk.pop(),
          Tk = this._m,
          ik = Xk._m,
          yk = Fk;
        for (let lk = 0; lk < 16; lk++) ik[lk] = Tk[lk] * yk[lk];
        return Xk.markAsUpdated(), Xk
      }
      multiplyToRef(kk, Fk) {
        return this._isIdentity ? (Fk.kS(kk), Fk) : kk._isIdentity ? (Fk.kS(this), Fk) : (this.multiplyToArray(kk, Fk._m, 0), Fk.markAsUpdated(), Fk)
      }
      multiplyToArray(kk, Fk, Ik) {
        return (0, ak.j)(this, kk, Fk, Ik), this
      }
      divide(kk) {
        return this.divideToRef(kk, new wk)
      }
      divideToRef(kk, Fk) {
        const Ik = this._m,
          Xk = kk.m,
          Tk = Fk._m;
        for (let ik = 0; ik < 16; ik++) Tk[ik] = Ik[ik] / Xk[ik];
        return Fk.markAsUpdated(), Fk
      }
      divideInPlace(kk) {
        const Fk = this._m,
          Ik = kk.m;
        for (let Xk = 0; Xk < 16; Xk++) Fk[Xk] /= Ik[Xk];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(kk) {
        const Fk = this._m,
          Ik = kk.m;
        for (let Xk = 0; Xk < 16; Xk++) Fk[Xk] = Math.min(Fk[Xk], Ik[Xk]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const kk = this._m;
        for (let Fk = 0; Fk < 16; Fk++) kk[Fk] = Math.min(kk[Fk], Fk < 0 || arguments.length <= Fk ? void 0 : arguments[Fk]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(kk) {
        const Fk = this._m,
          Ik = kk.m;
        for (let Xk = 0; Xk < 16; Xk++) Fk[Xk] = Math.max(Fk[Xk], Ik[Xk]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const kk = this._m;
        for (let Fk = 0; Fk < 16; Fk++) kk[Fk] = Math.max(kk[Fk], Fk < 0 || arguments.length <= Fk ? void 0 : arguments[Fk]);
        return this.markAsUpdated(), this
      }
      nX() {
        return this.negateToRef(new wk)
      }
      negateInPlace() {
        const kk = this._m;
        for (let Fk = 0; Fk < 16; Fk++) kk[Fk] = -kk[Fk];
        return this.markAsUpdated(), this
      }
      negateToRef(kk) {
        const Fk = this._m,
          Ik = kk._m;
        for (let Xk = 0; Xk < 16; Xk++) Ik[Xk] = -Fk[Xk];
        return kk.markAsUpdated(), kk
      }
      equals(kk) {
        const Fk = kk;
        if (!Fk) return !1;
        if ((this._isIdentity || Fk._isIdentity) && !this._isIdentityDirty && !Fk._isIdentityDirty) return this._isIdentity && Fk._isIdentity;
        const Ik = this.m,
          Xk = Fk.m;
        return Ik[0] === Xk[0] && Ik[1] === Xk[1] && Ik[2] === Xk[2] && Ik[3] === Xk[3] && Ik[4] === Xk[4] && Ik[5] === Xk[5] && Ik[6] === Xk[6] && Ik[7] === Xk[7] && Ik[8] === Xk[8] && Ik[9] === Xk[9] && Ik[10] === Xk[10] && Ik[11] === Xk[11] && Ik[12] === Xk[12] && Ik[13] === Xk[13] && Ik[14] === Xk[14] && Ik[15] === Xk[15]
      }
      equalsWithEpsilon(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Ik = this._m,
          Xk = kk.m;
        for (let Tk = 0; Tk < 16; Tk++)
          if (!(0, lk.WithinEpsilon)(Ik[Tk], Xk[Tk], Fk)) return !1;
        return !0
      }
      Ryk() {
        const kk = this._m;
        for (let Fk = 0; Fk < 16; Fk++)
          if (kk[Fk] != (Fk < 0 || arguments.length <= Fk ? void 0 : arguments[Fk])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new wk)
      }
      floorToRef(kk) {
        const Fk = this._m,
          Ik = kk._m;
        for (let Xk = 0; Xk < 16; Xk++) Ik[Xk] = Math.floor(Fk[Xk]);
        return kk.markAsUpdated(), kk
      }
      fract() {
        return this.fractToRef(new wk)
      }
      fractToRef(kk) {
        const Fk = this._m,
          Ik = kk._m;
        for (let Xk = 0; Xk < 16; Xk++) Ik[Xk] = Fk[Xk] - Math.floor(Fk[Xk]);
        return kk.markAsUpdated(), kk
      }
      clone() {
        const kk = new wk;
        return kk.kS(this), kk
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let kk = Lk(this._m[0]);
        for (let Fk = 1; Fk < 16; Fk++) kk = 397 * kk ^ Lk(this._m[Fk]);
        return kk
      }
      decomposeToTransformNode(kk) {
        return kk.rotationQuaternion = kk.rotationQuaternion || new ek, this.decompose(kk.ci, kk.rotationQuaternion, kk.position)
      }
      decompose(kk, Fk, Ik, Xk) {
        let Tk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return Ik && Ik.I6(0), kk && kk.I6(1), Fk && Fk.t5(0, 0, 0, 1), !0;
        const ik = this._m;
        if (Ik && Ik.t5(ik[12], ik[13], ik[14]), (kk = kk || Hk.Ge[0]).x = Math.sqrt(ik[0] * ik[0] + ik[1] * ik[1] + ik[2] * ik[2]), kk.y = Math.sqrt(ik[4] * ik[4] + ik[5] * ik[5] + ik[6] * ik[6]), kk.z = Math.sqrt(ik[8] * ik[8] + ik[9] * ik[9] + ik[10] * ik[10]), Xk) {
          const Fk = (Tk ? Xk.absoluteScaling.x : Xk.ci.x) < 0 ? -1 : 1,
            Ik = (Tk ? Xk.absoluteScaling.y : Xk.ci.y) < 0 ? -1 : 1,
            ik = (Tk ? Xk.absoluteScaling.z : Xk.ci.z) < 0 ? -1 : 1;
          kk.x *= Fk, kk.y *= Ik, kk.z *= ik
        } else this.determinant() <= 0 && (kk.y *= -1);
        if (0 === kk._x || 0 === kk._y || 0 === kk._z) return Fk && Fk.t5(0, 0, 0, 1), !1;
        if (Fk) {
          const Ik = 1 / kk._x,
            Xk = 1 / kk._y,
            Tk = 1 / kk._z;
          wk.FromValuesToRef(ik[0] * Ik, ik[1] * Ik, ik[2] * Ik, 0, ik[4] * Xk, ik[5] * Xk, ik[6] * Xk, 0, ik[8] * Tk, ik[9] * Tk, ik[10] * Tk, 0, 0, 0, 0, 1, Hk.Matrix[0]), ek.FromRotationMatrixToRef(Hk.Matrix[0], Fk)
        }
        return !0
      }
      getRow(kk) {
        if (kk < 0 || kk > 3) return null;
        const Fk = 4 * kk;
        return new jk(this._m[Fk + 0], this._m[Fk + 1], this._m[Fk + 2], this._m[Fk + 3])
      }
      getRowToRef(kk, Fk) {
        if (kk >= 0 && kk <= 3) {
          const Ik = 4 * kk;
          Fk.x = this._m[Ik + 0], Fk.y = this._m[Ik + 1], Fk.z = this._m[Ik + 2], Fk.w = this._m[Ik + 3]
        }
        return Fk
      }
      setRow(kk, Fk) {
        return this.setRowFromFloats(kk, Fk.x, Fk.y, Fk.z, Fk.w)
      }
      transpose() {
        const kk = new wk;
        return wk.TransposeToRef(this, kk), kk
      }
      transposeToRef(kk) {
        return wk.TransposeToRef(this, kk), kk
      }
      setRowFromFloats(kk, Fk, Ik, Xk, Tk) {
        if (kk < 0 || kk > 3) return this;
        const ik = 4 * kk;
        return this._m[ik + 0] = Fk, this._m[ik + 1] = Ik, this._m[ik + 2] = Xk, this._m[ik + 3] = Tk, this.markAsUpdated(), this
      }
      scale(kk) {
        const Fk = new wk;
        return this.scaleToRef(kk, Fk), Fk
      }
      scaleToRef(kk, Fk) {
        for (let Ik = 0; Ik < 16; Ik++) Fk._m[Ik] = this._m[Ik] * kk;
        return Fk.markAsUpdated(), Fk
      }
      scaleAndAddToRef(kk, Fk) {
        for (let Ik = 0; Ik < 16; Ik++) Fk._m[Ik] += this._m[Ik] * kk;
        return Fk.markAsUpdated(), Fk
      }
      scaleInPlace(kk) {
        const Fk = this._m;
        for (let Ik = 0; Ik < 16; Ik++) Fk[Ik] *= kk;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(kk) {
        const Fk = Hk.Matrix[0];
        this.invertToRef(Fk), Fk.transposeToRef(kk);
        const Ik = kk._m;
        return wk.FromValuesToRef(Ik[0], Ik[1], Ik[2], 0, Ik[4], Ik[5], Ik[6], 0, Ik[8], Ik[9], Ik[10], 0, 0, 0, 0, 1, kk), kk
      }
      getRotationMatrix() {
        const kk = new wk;
        return this.getRotationMatrixToRef(kk), kk
      }
      getRotationMatrixToRef(kk) {
        const Fk = Hk.Ge[0];
        if (!this.decompose(Fk)) return wk.IdentityToRef(kk), kk;
        const Ik = this._m,
          Xk = 1 / Fk._x,
          Tk = 1 / Fk._y,
          ik = 1 / Fk._z;
        return wk.FromValuesToRef(Ik[0] * Xk, Ik[1] * Xk, Ik[2] * Xk, 0, Ik[4] * Tk, Ik[5] * Tk, Ik[6] * Tk, 0, Ik[8] * ik, Ik[9] * ik, Ik[10] * ik, 0, 0, 0, 0, 1, kk), kk
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
        return this.multiplyToRef(xk, this), this
      }
      static FromArray(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Ik = new wk;
        return wk.FromArrayToRef(kk, Fk, Ik), Ik
      }
      static FromArrayToRef(kk, Fk, Ik) {
        for (let Xk = 0; Xk < 16; Xk++) Ik._m[Xk] = kk[Xk + Fk];
        return Ik.markAsUpdated(), Ik
      }
      static FromFloat32ArrayToRefScaled(kk, Fk, Ik, Xk) {
        return Xk._m[0] = kk[0 + Fk] * Ik, Xk._m[1] = kk[1 + Fk] * Ik, Xk._m[2] = kk[2 + Fk] * Ik, Xk._m[3] = kk[3 + Fk] * Ik, Xk._m[4] = kk[4 + Fk] * Ik, Xk._m[5] = kk[5 + Fk] * Ik, Xk._m[6] = kk[6 + Fk] * Ik, Xk._m[7] = kk[7 + Fk] * Ik, Xk._m[8] = kk[8 + Fk] * Ik, Xk._m[9] = kk[9 + Fk] * Ik, Xk._m[10] = kk[10 + Fk] * Ik, Xk._m[11] = kk[11 + Fk] * Ik, Xk._m[12] = kk[12 + Fk] * Ik, Xk._m[13] = kk[13 + Fk] * Ik, Xk._m[14] = kk[14 + Fk] * Ik, Xk._m[15] = kk[15 + Fk] * Ik, Xk.markAsUpdated(), Xk
      }
      static get IdentityReadOnly() {
        return wk._IdentityReadOnly
      }
      static FromValuesToRef(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk, Zk, jk, ek, wk, Hk) {
        const Jk = Hk._m;
        Jk[0] = kk, Jk[1] = Fk, Jk[2] = Ik, Jk[3] = Xk, Jk[4] = Tk, Jk[5] = ik, Jk[6] = yk, Jk[7] = lk, Jk[8] = ak, Jk[9] = qk, Jk[10] = Lk, Jk[11] = tk, Jk[12] = Zk, Jk[13] = jk, Jk[14] = ek, Jk[15] = wk, Hk.markAsUpdated()
      }
      static FromValues(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk, tk, Zk, jk, ek, Hk) {
        const Jk = new wk,
          xk = Jk._m;
        return xk[0] = kk, xk[1] = Fk, xk[2] = Ik, xk[3] = Xk, xk[4] = Tk, xk[5] = ik, xk[6] = yk, xk[7] = lk, xk[8] = ak, xk[9] = qk, xk[10] = Lk, xk[11] = tk, xk[12] = Zk, xk[13] = jk, xk[14] = ek, xk[15] = Hk, Jk.markAsUpdated(), Jk
      }
      static Compose(kk, Fk, Ik) {
        const Xk = new wk;
        return wk.ComposeToRef(kk, Fk, Ik, Xk), Xk
      }
      static ComposeToRef(kk, Fk, Ik, Xk) {
        const Tk = Xk._m,
          ik = Fk._x,
          yk = Fk._y,
          lk = Fk._z,
          ak = Fk._w,
          qk = ik + ik,
          Lk = yk + yk,
          tk = lk + lk,
          Zk = ik * qk,
          jk = ik * Lk,
          ek = ik * tk,
          wk = yk * Lk,
          Hk = yk * tk,
          Jk = lk * tk,
          xk = ak * qk,
          Pk = ak * Lk,
          Kk = ak * tk,
          Qk = kk._x,
          sk = kk._y,
          Vk = kk._z;
        return Tk[0] = (1 - (wk + Jk)) * Qk, Tk[1] = (jk + Kk) * Qk, Tk[2] = (ek - Pk) * Qk, Tk[3] = 0, Tk[4] = (jk - Kk) * sk, Tk[5] = (1 - (Zk + Jk)) * sk, Tk[6] = (Hk + xk) * sk, Tk[7] = 0, Tk[8] = (ek + Pk) * Vk, Tk[9] = (Hk - xk) * Vk, Tk[10] = (1 - (Zk + wk)) * Vk, Tk[11] = 0, Tk[12] = Ik._x, Tk[13] = Ik._y, Tk[14] = Ik._z, Tk[15] = 1, Xk.markAsUpdated(), Xk
      }
      static Identity() {
        const kk = wk.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return kk._updateIdentityStatus(!0), kk
      }
      static IdentityToRef(kk) {
        return wk.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, kk), kk._updateIdentityStatus(!0), kk
      }
      static Zero() {
        const kk = wk.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return kk._updateIdentityStatus(!1), kk
      }
      static RotationX(kk) {
        const Fk = new wk;
        return wk.RotationXToRef(kk, Fk), Fk
      }
      static Invert(kk) {
        const Fk = new wk;
        return kk.invertToRef(Fk), Fk
      }
      static RotationXToRef(kk, Fk) {
        const Ik = Math.sin(kk),
          Xk = Math.cos(kk);
        return wk.FromValuesToRef(1, 0, 0, 0, 0, Xk, Ik, 0, 0, -Ik, Xk, 0, 0, 0, 0, 1, Fk), Fk._updateIdentityStatus(1 === Xk && 0 === Ik), Fk
      }
      static RotationY(kk) {
        const Fk = new wk;
        return wk.RotationYToRef(kk, Fk), Fk
      }
      static RotationYToRef(kk, Fk) {
        const Ik = Math.sin(kk),
          Xk = Math.cos(kk);
        return wk.FromValuesToRef(Xk, 0, -Ik, 0, 0, 1, 0, 0, Ik, 0, Xk, 0, 0, 0, 0, 1, Fk), Fk._updateIdentityStatus(1 === Xk && 0 === Ik), Fk
      }
      static RotationZ(kk) {
        const Fk = new wk;
        return wk.RotationZToRef(kk, Fk), Fk
      }
      static RotationZToRef(kk, Fk) {
        const Ik = Math.sin(kk),
          Xk = Math.cos(kk);
        return wk.FromValuesToRef(Xk, Ik, 0, 0, -Ik, Xk, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, Fk), Fk._updateIdentityStatus(1 === Xk && 0 === Ik), Fk
      }
      static RotationAxis(kk, Fk) {
        const Ik = new wk;
        return wk.RotationAxisToRef(kk, Fk, Ik), Ik
      }
      static RotationAxisToRef(kk, Fk, Ik) {
        const Xk = Math.sin(-Fk),
          Tk = Math.cos(-Fk),
          ik = 1 - Tk;
        kk = kk.normalizeToRef(Hk.Ge[0]);
        const yk = Ik._m;
        return yk[0] = kk._x * kk._x * ik + Tk, yk[1] = kk._x * kk._y * ik - kk._z * Xk, yk[2] = kk._x * kk._z * ik + kk._y * Xk, yk[3] = 0, yk[4] = kk._y * kk._x * ik + kk._z * Xk, yk[5] = kk._y * kk._y * ik + Tk, yk[6] = kk._y * kk._z * ik - kk._x * Xk, yk[7] = 0, yk[8] = kk._z * kk._x * ik - kk._y * Xk, yk[9] = kk._z * kk._y * ik + kk._x * Xk, yk[10] = kk._z * kk._z * ik + Tk, yk[11] = 0, yk[12] = 0, yk[13] = 0, yk[14] = 0, yk[15] = 1, Ik.markAsUpdated(), Ik
      }
      static RotationAlignToRef(kk, Fk, Ik) {
        let Tk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const ik = Zk.Dot(Fk, kk),
          yk = Ik._m;
        if (ik < -1 + Xk.b) yk[0] = -1, yk[1] = 0, yk[2] = 0, yk[3] = 0, yk[4] = 0, yk[5] = Tk ? 1 : -1, yk[6] = 0, yk[7] = 0, yk[8] = 0, yk[9] = 0, yk[10] = Tk ? -1 : 1, yk[11] = 0;
        else {
          const Ik = Zk.Cross(Fk, kk),
            Xk = 1 / (1 + ik);
          yk[0] = Ik._x * Ik._x * Xk + ik, yk[1] = Ik._y * Ik._x * Xk - Ik._z, yk[2] = Ik._z * Ik._x * Xk + Ik._y, yk[3] = 0, yk[4] = Ik._x * Ik._y * Xk + Ik._z, yk[5] = Ik._y * Ik._y * Xk + ik, yk[6] = Ik._z * Ik._y * Xk - Ik._x, yk[7] = 0, yk[8] = Ik._x * Ik._z * Xk - Ik._y, yk[9] = Ik._y * Ik._z * Xk + Ik._x, yk[10] = Ik._z * Ik._z * Xk + ik, yk[11] = 0
        }
        return yk[12] = 0, yk[13] = 0, yk[14] = 0, yk[15] = 1, Ik.markAsUpdated(), Ik
      }
      static RotationYawPitchRoll(kk, Fk, Ik) {
        const Xk = new wk;
        return wk.RotationYawPitchRollToRef(kk, Fk, Ik, Xk), Xk
      }
      static RotationYawPitchRollToRef(kk, Fk, Ik, Xk) {
        return ek.RotationYawPitchRollToRef(kk, Fk, Ik, Hk.Quaternion[0]), Hk.Quaternion[0].toRotationMatrix(Xk), Xk
      }
      static Scaling(kk, Fk, Ik) {
        const Xk = new wk;
        return wk.ScalingToRef(kk, Fk, Ik, Xk), Xk
      }
      static ScalingToRef(kk, Fk, Ik, Xk) {
        return wk.FromValuesToRef(kk, 0, 0, 0, 0, Fk, 0, 0, 0, 0, Ik, 0, 0, 0, 0, 1, Xk), Xk._updateIdentityStatus(1 === kk && 1 === Fk && 1 === Ik), Xk
      }
      static Translation(kk, Fk, Ik) {
        const Xk = new wk;
        return wk.TranslationToRef(kk, Fk, Ik, Xk), Xk
      }
      static TranslationToRef(kk, Fk, Ik, Xk) {
        return wk.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, kk, Fk, Ik, 1, Xk), Xk._updateIdentityStatus(0 === kk && 0 === Fk && 0 === Ik), Xk
      }
      static Lerp(kk, Fk, Ik) {
        const Xk = new wk;
        return wk.LerpToRef(kk, Fk, Ik, Xk), Xk
      }
      static LerpToRef(kk, Fk, Ik, Xk) {
        const Tk = Xk._m,
          ik = kk.m,
          yk = Fk.m;
        for (let lk = 0; lk < 16; lk++) Tk[lk] = ik[lk] * (1 - Ik) + yk[lk] * Ik;
        return Xk.markAsUpdated(), Xk
      }
      static DecomposeLerp(kk, Fk, Ik) {
        const Xk = new wk;
        return wk.DecomposeLerpToRef(kk, Fk, Ik, Xk), Xk
      }
      static DecomposeLerpToRef(kk, Fk, Ik, Xk) {
        const Tk = Hk.Ge[0],
          ik = Hk.Quaternion[0],
          yk = Hk.Ge[1];
        kk.decompose(Tk, ik, yk);
        const lk = Hk.Ge[2],
          ak = Hk.Quaternion[1],
          qk = Hk.Ge[3];
        Fk.decompose(lk, ak, qk);
        const Lk = Hk.Ge[4];
        Zk.LerpToRef(Tk, lk, Ik, Lk);
        const tk = Hk.Quaternion[2];
        ek.SlerpToRef(ik, ak, Ik, tk);
        const jk = Hk.Ge[5];
        return Zk.LerpToRef(yk, qk, Ik, jk), wk.ComposeToRef(Lk, tk, jk, Xk), Xk
      }
      static LookAtLH(kk, Fk, Ik) {
        const Xk = new wk;
        return wk.LookAtLHToRef(kk, Fk, Ik, Xk), Xk
      }
      static LookAtLHToRef(kk, Fk, Ik, Xk) {
        const Tk = Hk.Ge[0],
          ik = Hk.Ge[1],
          yk = Hk.Ge[2];
        Fk.subtractToRef(kk, yk), yk.normalize(), Zk.CrossToRef(Ik, yk, Tk);
        const lk = Tk.lengthSquared();
        0 === lk ? Tk.x = 1 : Tk.normalizeFromLength(Math.sqrt(lk)), Zk.CrossToRef(yk, Tk, ik), ik.normalize();
        const ak = -Zk.Dot(Tk, kk),
          qk = -Zk.Dot(ik, kk),
          Lk = -Zk.Dot(yk, kk);
        return wk.FromValuesToRef(Tk._x, ik._x, yk._x, 0, Tk._y, ik._y, yk._y, 0, Tk._z, ik._z, yk._z, 0, ak, qk, Lk, 1, Xk), Xk
      }
      static LookAtRH(kk, Fk, Ik) {
        const Xk = new wk;
        return wk.LookAtRHToRef(kk, Fk, Ik, Xk), Xk
      }
      static LookAtRHToRef(kk, Fk, Ik, Xk) {
        const Tk = Hk.Ge[0],
          ik = Hk.Ge[1],
          yk = Hk.Ge[2];
        kk.subtractToRef(Fk, yk), yk.normalize(), Zk.CrossToRef(Ik, yk, Tk);
        const lk = Tk.lengthSquared();
        0 === lk ? Tk.x = 1 : Tk.normalizeFromLength(Math.sqrt(lk)), Zk.CrossToRef(yk, Tk, ik), ik.normalize();
        const ak = -Zk.Dot(Tk, kk),
          qk = -Zk.Dot(ik, kk),
          Lk = -Zk.Dot(yk, kk);
        return wk.FromValuesToRef(Tk._x, ik._x, yk._x, 0, Tk._y, ik._y, yk._y, 0, Tk._z, ik._z, yk._z, 0, ak, qk, Lk, 1, Xk), Xk
      }
      static LookDirectionLH(kk, Fk) {
        const Ik = new wk;
        return wk.LookDirectionLHToRef(kk, Fk, Ik), Ik
      }
      static LookDirectionLHToRef(kk, Fk, Ik) {
        const Xk = Hk.Ge[0];
        Xk.kS(kk), Xk.scaleInPlace(-1);
        const Tk = Hk.Ge[1];
        return Zk.CrossToRef(Fk, Xk, Tk), wk.FromValuesToRef(Tk._x, Tk._y, Tk._z, 0, Fk._x, Fk._y, Fk._z, 0, Xk._x, Xk._y, Xk._z, 0, 0, 0, 0, 1, Ik), Ik
      }
      static LookDirectionRH(kk, Fk) {
        const Ik = new wk;
        return wk.LookDirectionRHToRef(kk, Fk, Ik), Ik
      }
      static LookDirectionRHToRef(kk, Fk, Ik) {
        const Xk = Hk.Ge[2];
        return Zk.CrossToRef(Fk, kk, Xk), wk.FromValuesToRef(Xk._x, Xk._y, Xk._z, 0, Fk._x, Fk._y, Fk._z, 0, kk._x, kk._y, kk._z, 0, 0, 0, 0, 1, Ik), Ik
      }
      static OrthoLH(kk, Fk, Ik, Xk, Tk) {
        const ik = new wk;
        return wk.OrthoLHToRef(kk, Fk, Ik, Xk, ik, Tk), ik
      }
      static OrthoLHToRef(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = 2 / kk,
          lk = 2 / Fk,
          ak = 2 / (Xk - Ik),
          qk = -(Xk + Ik) / (Xk - Ik);
        return wk.FromValuesToRef(yk, 0, 0, 0, 0, lk, 0, 0, 0, 0, ak, 0, 0, 0, qk, 1, Tk), ik && Tk.multiplyToRef(xk, Tk), Tk._updateIdentityStatus(1 === yk && 1 === lk && 1 === ak && 0 === qk), Tk
      }
      static OrthoOffCenterLH(kk, Fk, Ik, Xk, Tk, ik, yk) {
        const lk = new wk;
        return wk.OrthoOffCenterLHToRef(kk, Fk, Ik, Xk, Tk, ik, lk, yk), lk
      }
      static OrthoOffCenterLHToRef(kk, Fk, Ik, Xk, Tk, ik, yk, lk) {
        const ak = 2 / (Fk - kk),
          qk = 2 / (Xk - Ik),
          Lk = 2 / (ik - Tk),
          tk = -(ik + Tk) / (ik - Tk),
          Zk = (kk + Fk) / (kk - Fk),
          jk = (Xk + Ik) / (Ik - Xk);
        return wk.FromValuesToRef(ak, 0, 0, 0, 0, qk, 0, 0, 0, 0, Lk, 0, Zk, jk, tk, 1, yk), lk && yk.multiplyToRef(xk, yk), yk.markAsUpdated(), yk
      }
      static ObliqueOffCenterLHToRef(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk) {
        const tk = -yk * Math.cos(lk),
          Zk = -yk * Math.sin(lk);
        return wk.TranslationToRef(0, 0, -ak, Hk.Matrix[1]), wk.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, tk, Zk, 1, 0, 0, 0, 0, 1, Hk.Matrix[0]), Hk.Matrix[1].multiplyToRef(Hk.Matrix[0], Hk.Matrix[0]), wk.TranslationToRef(0, 0, ak, Hk.Matrix[1]), Hk.Matrix[0].multiplyToRef(Hk.Matrix[1], Hk.Matrix[0]), wk.OrthoOffCenterLHToRef(kk, Fk, Ik, Xk, Tk, ik, qk, Lk), Hk.Matrix[0].multiplyToRef(qk, qk), qk
      }
      static OrthoOffCenterRH(kk, Fk, Ik, Xk, Tk, ik, yk) {
        const lk = new wk;
        return wk.OrthoOffCenterRHToRef(kk, Fk, Ik, Xk, Tk, ik, lk, yk), lk
      }
      static OrthoOffCenterRHToRef(kk, Fk, Ik, Xk, Tk, ik, yk, lk) {
        return wk.OrthoOffCenterLHToRef(kk, Fk, Ik, Xk, Tk, ik, yk, lk), yk._m[10] *= -1, yk
      }
      static ObliqueOffCenterRHToRef(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk) {
        const tk = yk * Math.cos(lk),
          Zk = yk * Math.sin(lk);
        return wk.TranslationToRef(0, 0, ak, Hk.Matrix[1]), wk.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, tk, Zk, 1, 0, 0, 0, 0, 1, Hk.Matrix[0]), Hk.Matrix[1].multiplyToRef(Hk.Matrix[0], Hk.Matrix[0]), wk.TranslationToRef(0, 0, -ak, Hk.Matrix[1]), Hk.Matrix[0].multiplyToRef(Hk.Matrix[1], Hk.Matrix[0]), wk.OrthoOffCenterRHToRef(kk, Fk, Ik, Xk, Tk, ik, qk, Lk), Hk.Matrix[0].multiplyToRef(qk, qk), qk
      }
      static PerspectiveLH(kk, Fk, Ik, Xk, Tk) {
        let ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const yk = new wk,
          lk = 2 * Ik / kk,
          ak = 2 * Ik / Fk,
          qk = (Xk + Ik) / (Xk - Ik),
          Lk = -2 * Xk * Ik / (Xk - Ik),
          tk = Math.tan(ik);
        return wk.FromValuesToRef(lk, 0, 0, 0, 0, ak, 0, tk, 0, 0, qk, 1, 0, 0, Lk, 0, yk), Tk && yk.multiplyToRef(xk, yk), yk._updateIdentityStatus(!1), yk
      }
      static PerspectiveFovLH(kk, Fk, Ik, Xk, Tk) {
        let ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const lk = new wk;
        return wk.PerspectiveFovLHToRef(kk, Fk, Ik, Xk, lk, !0, Tk, ik, yk), lk
      }
      static PerspectiveFovLHToRef(kk, Fk, Ik, Xk, Tk) {
        let ik = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yk = arguments.length > 6 ? arguments[6] : void 0,
          lk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          ak = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const qk = Ik,
          Lk = Xk,
          tk = 1 / Math.tan(.5 * kk),
          Zk = ik ? tk / Fk : tk,
          jk = ik ? tk : tk * Fk,
          ek = ak && 0 === qk ? -1 : 0 !== Lk ? (Lk + qk) / (Lk - qk) : 1,
          Hk = ak && 0 === qk ? 2 * Lk : 0 !== Lk ? -2 * Lk * qk / (Lk - qk) : -2 * qk,
          Jk = Math.tan(lk);
        return wk.FromValuesToRef(Zk, 0, 0, 0, 0, jk, 0, Jk, 0, 0, ek, 1, 0, 0, Hk, 0, Tk), yk && Tk.multiplyToRef(xk, Tk), Tk._updateIdentityStatus(!1), Tk
      }
      static PerspectiveFovReverseLHToRef(kk, Fk, Ik, Xk, Tk) {
        let ik = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yk = arguments.length > 6 ? arguments[6] : void 0,
          lk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const ak = 1 / Math.tan(.5 * kk),
          qk = ik ? ak / Fk : ak,
          Lk = ik ? ak : ak * Fk,
          tk = Math.tan(lk);
        return wk.FromValuesToRef(qk, 0, 0, 0, 0, Lk, 0, tk, 0, 0, -Ik, 1, 0, 0, 1, 0, Tk), yk && Tk.multiplyToRef(xk, Tk), Tk._updateIdentityStatus(!1), Tk
      }
      static PerspectiveFovRH(kk, Fk, Ik, Xk, Tk) {
        let ik = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          yk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const lk = new wk;
        return wk.PerspectiveFovRHToRef(kk, Fk, Ik, Xk, lk, !0, Tk, ik, yk), lk
      }
      static PerspectiveFovRHToRef(kk, Fk, Ik, Xk, Tk) {
        let ik = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yk = arguments.length > 6 ? arguments[6] : void 0,
          lk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          ak = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const qk = Ik,
          Lk = Xk,
          tk = 1 / Math.tan(.5 * kk),
          Zk = ik ? tk / Fk : tk,
          jk = ik ? tk : tk * Fk,
          ek = ak && 0 === qk ? 1 : 0 !== Lk ? -(Lk + qk) / (Lk - qk) : -1,
          Hk = ak && 0 === qk ? 2 * Lk : 0 !== Lk ? -2 * Lk * qk / (Lk - qk) : -2 * qk,
          Jk = Math.tan(lk);
        return wk.FromValuesToRef(Zk, 0, 0, 0, 0, jk, 0, Jk, 0, 0, ek, -1, 0, 0, Hk, 0, Tk), yk && Tk.multiplyToRef(xk, Tk), Tk._updateIdentityStatus(!1), Tk
      }
      static PerspectiveFovReverseRHToRef(kk, Fk, Ik, Xk, Tk) {
        let ik = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          yk = arguments.length > 6 ? arguments[6] : void 0,
          lk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const ak = 1 / Math.tan(.5 * kk),
          qk = ik ? ak / Fk : ak,
          Lk = ik ? ak : ak * Fk,
          tk = Math.tan(lk);
        return wk.FromValuesToRef(qk, 0, 0, 0, 0, Lk, 0, tk, 0, 0, -Ik, -1, 0, 0, -1, 0, Tk), yk && Tk.multiplyToRef(xk, Tk), Tk._updateIdentityStatus(!1), Tk
      }
      static GetFinalMatrix(kk, Fk, Ik, Xk, Tk, ik) {
        const yk = kk.width,
          lk = kk.height,
          ak = kk.x,
          qk = kk.y,
          Lk = wk.FromValues(yk / 2, 0, 0, 0, 0, -lk / 2, 0, 0, 0, 0, ik - Tk, 0, ak + yk / 2, lk / 2 + qk, Tk, 1),
          tk = new wk;
        return Fk.multiplyToRef(Ik, tk), tk.multiplyToRef(Xk, tk), tk.multiplyToRef(Lk, tk)
      }
      static GetAsMatrix2x2(kk) {
        const Fk = kk.m,
          Ik = [Fk[0], Fk[1], Fk[4], Fk[5]];
        return ik.d.MatrixUse64Bits ? Ik : new Float32Array(Ik)
      }
      static GetAsMatrix3x3(kk) {
        const Fk = kk.m,
          Ik = [Fk[0], Fk[1], Fk[2], Fk[4], Fk[5], Fk[6], Fk[8], Fk[9], Fk[10]];
        return ik.d.MatrixUse64Bits ? Ik : new Float32Array(Ik)
      }
      static Transpose(kk) {
        const Fk = new wk;
        return wk.TransposeToRef(kk, Fk), Fk
      }
      static TransposeToRef(kk, Fk) {
        const Ik = kk.m,
          Xk = Ik[0],
          Tk = Ik[4],
          ik = Ik[8],
          yk = Ik[12],
          lk = Ik[1],
          ak = Ik[5],
          qk = Ik[9],
          Lk = Ik[13],
          tk = Ik[2],
          Zk = Ik[6],
          jk = Ik[10],
          ek = Ik[14],
          wk = Ik[3],
          Hk = Ik[7],
          Jk = Ik[11],
          xk = Ik[15],
          Pk = Fk._m;
        return Pk[0] = Xk, Pk[1] = Tk, Pk[2] = ik, Pk[3] = yk, Pk[4] = lk, Pk[5] = ak, Pk[6] = qk, Pk[7] = Lk, Pk[8] = tk, Pk[9] = Zk, Pk[10] = jk, Pk[11] = ek, Pk[12] = wk, Pk[13] = Hk, Pk[14] = Jk, Pk[15] = xk, Fk.markAsUpdated(), Fk._updateIdentityStatus(kk._isIdentity, kk._isIdentityDirty), Fk
      }
      static Reflection(kk) {
        const Fk = new wk;
        return wk.ReflectionToRef(kk, Fk), Fk
      }
      static ReflectionToRef(kk, Fk) {
        kk.normalize();
        const Ik = kk.normal.x,
          Xk = kk.normal.y,
          Tk = kk.normal.z,
          ik = -2 * Ik,
          yk = -2 * Xk,
          lk = -2 * Tk;
        return wk.FromValuesToRef(ik * Ik + 1, yk * Ik, lk * Ik, 0, ik * Xk, yk * Xk + 1, lk * Xk, 0, ik * Tk, yk * Tk, lk * Tk + 1, 0, ik * kk.d, yk * kk.d, lk * kk.d, 1, Fk), Fk
      }
      static FromXYZAxesToRef(kk, Fk, Ik, Xk) {
        return wk.FromValuesToRef(kk._x, kk._y, kk._z, 0, Fk._x, Fk._y, Fk._z, 0, Ik._x, Ik._y, Ik._z, 0, 0, 0, 0, 1, Xk), Xk
      }
      static FromQuaternionToRef(kk, Fk) {
        const Ik = kk._x * kk._x,
          Xk = kk._y * kk._y,
          Tk = kk._z * kk._z,
          ik = kk._x * kk._y,
          yk = kk._z * kk._w,
          lk = kk._z * kk._x,
          ak = kk._y * kk._w,
          qk = kk._y * kk._z,
          Lk = kk._x * kk._w;
        return Fk._m[0] = 1 - 2 * (Xk + Tk), Fk._m[1] = 2 * (ik + yk), Fk._m[2] = 2 * (lk - ak), Fk._m[3] = 0, Fk._m[4] = 2 * (ik - yk), Fk._m[5] = 1 - 2 * (Tk + Ik), Fk._m[6] = 2 * (qk + Lk), Fk._m[7] = 0, Fk._m[8] = 2 * (lk + ak), Fk._m[9] = 2 * (qk - Lk), Fk._m[10] = 1 - 2 * (Xk + Ik), Fk._m[11] = 0, Fk._m[12] = 0, Fk._m[13] = 0, Fk._m[14] = 0, Fk._m[15] = 1, Fk.markAsUpdated(), Fk
      }
    }
    wk._IdentityReadOnly = wk.Identity();
    class Hk {}
    Hk.Ge = (0, Tk.c)(11, Zk.Zero), Hk.Matrix = (0, Tk.c)(2, wk.Identity), Hk.Quaternion = (0, Tk.c)(3, ek.Zero);
    class Jk {}
    Jk.Vector2 = (0, Tk.c)(3, tk.Zero), Jk.Ge = (0, Tk.c)(13, Zk.Zero), Jk.Vector4 = (0, Tk.c)(3, jk.Zero), Jk.Quaternion = (0, Tk.c)(3, ek.Zero), Jk.Matrix = (0, Tk.c)(8, wk.Identity);
    const xk = wk.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let Pk = !1;

    function Kk() {
      Pk || (Pk = !0, Object.defineProperties(tk.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Zk.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(jk.prototype, {
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
      }), Object.defineProperties(wk.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, qk.f)("BABYLON.Vector2", tk), (0, qk.f)("BABYLON.Vector3", Zk), (0, qk.f)("BABYLON.Vector4", jk), (0, qk.f)("BABYLON.Matrix", wk))
    }
  },
  37187: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => yk
    });
    const Xk = "undefined" !== typeof WeakRef;
    class Tk {
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 ? arguments[2] : void 0,
          Xk = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(kk, Fk, Ik, Xk)
      }
      initialize(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ik = arguments.length > 2 ? arguments[2] : void 0,
          Xk = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = kk, this.skipNextObservers = Fk, this.target = Ik, this.currentTarget = Xk, this
      }
    }
    class ik {
      constructor(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = kk, this.mask = Fk, this.scope = Ik, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(kk)
      }
    }
    class yk {
      static FromPromise(kk, Fk) {
        const Ik = new yk;
        return kk.then((kk => {
          Ik.notifyObservers(kk)
        })).catch((kk => {
          if (!Fk) throw kk;
          Fk.notifyObservers(kk)
        })), Ik
      }
      get observers() {
        return this._observers
      }
      constructor(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = Fk, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Tk(0), kk && (this._onObserverAdded = kk)
      }
      add(kk) {
        let Fk = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ik = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!kk) return null;
        const Tk = new ik(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Tk.unregisterOnNextCall = Ik, Fk ? this._observers.unshift(Tk) : this._observers.push(Tk), this._onObserverAdded && this._onObserverAdded(Tk), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Tk, this._lastNotifiedValue);
        const yk = Xk ? new WeakRef(this) : {
          deref: () => this
        };
        return Tk._remove = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Fk = yk.deref();
          Fk && (kk ? Fk.remove(Tk) : Fk._remove(Tk))
        }, Tk
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
        for (let Ik = 0; Ik < this._observers.length; Ik++) {
          const Xk = this._observers[Ik];
          if (!Xk._willBeUnregistered && (Xk.callback === kk && (!Fk || Fk === Xk.scope))) return this._deferUnregister(Xk), !0
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
        const Ik = this._observers.indexOf(kk);
        return -1 !== Ik && (Fk && this._numObserversMarkedAsDeleted--, this._observers.splice(Ik, 1), !0)
      }
      makeObserverTopPriority(kk) {
        this._remove(kk, !1), this._observers.unshift(kk)
      }
      makeObserverBottomPriority(kk) {
        this._remove(kk, !1), this._observers.push(kk)
      }
      notifyObservers(kk) {
        let Fk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Ik = arguments.length > 2 ? arguments[2] : void 0,
          Xk = arguments.length > 3 ? arguments[3] : void 0,
          Tk = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = kk), !this._observers.length) return !0;
        const ik = this._eventState;
        ik.mask = Fk, ik.target = Ik, ik.currentTarget = Xk, ik.skipNextObservers = !1, ik.lastReturnValue = kk, ik.userInfo = Tk;
        for (const yk of this._observers)
          if (!yk._willBeUnregistered && (yk.mask & Fk && (yk.unregisterOnNextCall && this._deferUnregister(yk), yk.scope ? ik.lastReturnValue = yk.callback.apply(yk.scope, [kk, ik]) : ik.lastReturnValue = yk.callback(kk, ik)), ik.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(kk, Fk) {
        let Ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = Fk), kk._willBeUnregistered) return;
        const Xk = this._eventState;
        Xk.mask = Ik, Xk.skipNextObservers = !1, kk.unregisterOnNextCall && this._deferUnregister(kk), kk.callback(Fk, Xk)
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
        const kk = new yk;
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