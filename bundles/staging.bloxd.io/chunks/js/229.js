export const id = 229;
export const ids = [229];
export const modules = {
  36722: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk
    });
    var Dk = ik(36726);
    class fk {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    fk.Instances = [], fk.OnEnginesDisposedObservable = new Dk.c, fk._LastCreatedScene = null, fk.UseFallbackTexture = !0, fk.FallbackTexture = ""
  },
  36713: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk
    });
    class Dk {
      static SetMatrixPrecision(kk) {
        if (Dk.MatrixTrackPrecisionChange = !1, kk && !Dk.MatrixUse64Bits && Dk.MatrixTrackedMatrices)
          for (let ek = 0; ek < Dk.MatrixTrackedMatrices.length; ++ek) {
            const kk = Dk.MatrixTrackedMatrices[ek],
              ik = kk._m;
            kk._m = new Array(16);
            for (let ek = 0; ek < 16; ++ek) kk._m[ek] = ik[ek]
          }
        Dk.MatrixUse64Bits = kk, Dk.MatrixCurrentType = Dk.MatrixUse64Bits ? Array : Float32Array, Dk.MatrixTrackedMatrices = null
      }
    }
    Dk.MatrixUse64Bits = !1, Dk.MatrixTrackPrecisionChange = !0, Dk.MatrixCurrentType = Float32Array, Dk.MatrixTrackedMatrices = []
  },
  36731: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => rk,
      f: () => mk,
      j: () => Pk,
      n: () => Dk,
      o: () => Sk,
      s: () => bk
    });
    class Dk {}

    function fk(kk) {
      kk.updateFlag = Dk._UpdateFlagSeed++
    }

    function Sk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const fk = kk.Tik(),
        Sk = ek.Tik(),
        bk = fk[0],
        rk = fk[1],
        Pk = fk[2],
        mk = fk[3],
        Mk = fk[4],
        Kk = fk[5],
        xk = fk[6],
        nk = fk[7],
        Uk = fk[8],
        Hk = fk[9],
        wk = fk[10],
        lk = fk[11],
        pk = fk[12],
        yk = fk[13],
        Yk = fk[14],
        Lk = fk[15],
        Ck = Sk[0],
        Ak = Sk[1],
        jk = Sk[2],
        sk = Sk[3],
        dk = Sk[4],
        Vk = Sk[5],
        Fk = Sk[6],
        uk = Sk[7],
        qk = Sk[8],
        Ik = Sk[9],
        zk = Sk[10],
        Qk = Sk[11],
        vk = Sk[12],
        Ek = Sk[13],
        hk = Sk[14],
        ak = Sk[15];
      ik[Dk] = bk * Ck + rk * dk + Pk * qk + mk * vk, ik[Dk + 1] = bk * Ak + rk * Vk + Pk * Ik + mk * Ek, ik[Dk + 2] = bk * jk + rk * Fk + Pk * zk + mk * hk, ik[Dk + 3] = bk * sk + rk * uk + Pk * Qk + mk * ak, ik[Dk + 4] = Mk * Ck + Kk * dk + xk * qk + nk * vk, ik[Dk + 5] = Mk * Ak + Kk * Vk + xk * Ik + nk * Ek, ik[Dk + 6] = Mk * jk + Kk * Fk + xk * zk + nk * hk, ik[Dk + 7] = Mk * sk + Kk * uk + xk * Qk + nk * ak, ik[Dk + 8] = Uk * Ck + Hk * dk + wk * qk + lk * vk, ik[Dk + 9] = Uk * Ak + Hk * Vk + wk * Ik + lk * Ek, ik[Dk + 10] = Uk * jk + Hk * Fk + wk * zk + lk * hk, ik[Dk + 11] = Uk * sk + Hk * uk + wk * Qk + lk * ak, ik[Dk + 12] = pk * Ck + yk * dk + Yk * qk + Lk * vk, ik[Dk + 13] = pk * Ak + yk * Vk + Yk * Ik + Lk * Ek, ik[Dk + 14] = pk * jk + yk * Fk + Yk * zk + Lk * hk, ik[Dk + 15] = pk * sk + yk * uk + Yk * Qk + Lk * ak
    }

    function bk(kk, ek, ik) {
      let Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Sk(kk, ek, ik.Tik(), Dk), fk(ik)
    }

    function rk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Dk = kk.Tik();
      ek[ik] = Dk[0], ek[ik + 1] = Dk[1], ek[ik + 2] = Dk[2], ek[ik + 3] = Dk[3], ek[ik + 4] = Dk[4], ek[ik + 5] = Dk[5], ek[ik + 6] = Dk[6], ek[ik + 7] = Dk[7], ek[ik + 8] = Dk[8], ek[ik + 9] = Dk[9], ek[ik + 10] = Dk[10], ek[ik + 11] = Dk[11], ek[ik + 12] = Dk[12], ek[ik + 13] = Dk[13], ek[ik + 14] = Dk[14], ek[ik + 15] = Dk[15]
    }

    function Pk(kk, ek) {
      const ik = mk(kk, ek.Tik());
      return ik && fk(ek), ik
    }

    function mk(kk, ek) {
      const ik = kk.Tik(),
        Dk = ik[0],
        fk = ik[1],
        Sk = ik[2],
        bk = ik[3],
        rk = ik[4],
        Pk = ik[5],
        mk = ik[6],
        Mk = ik[7],
        Kk = ik[8],
        xk = ik[9],
        nk = ik[10],
        Uk = ik[11],
        Hk = ik[12],
        wk = ik[13],
        lk = ik[14],
        pk = ik[15],
        yk = nk * pk - lk * Uk,
        Yk = xk * pk - wk * Uk,
        Lk = xk * lk - wk * nk,
        Ck = Kk * pk - Hk * Uk,
        Ak = Kk * lk - nk * Hk,
        jk = Kk * wk - Hk * xk,
        sk = +(Pk * yk - mk * Yk + Mk * Lk),
        dk = -(rk * yk - mk * Ck + Mk * Ak),
        Vk = +(rk * Yk - Pk * Ck + Mk * jk),
        Fk = -(rk * Lk - Pk * Ak + mk * jk),
        uk = Dk * sk + fk * dk + Sk * Vk + bk * Fk;
      if (0 === uk) return !1;
      const qk = 1 / uk,
        Ik = mk * pk - lk * Mk,
        zk = Pk * pk - wk * Mk,
        Qk = Pk * lk - wk * mk,
        vk = rk * pk - Hk * Mk,
        Ek = rk * lk - Hk * mk,
        hk = rk * wk - Hk * Pk,
        ak = mk * Uk - nk * Mk,
        Wk = Pk * Uk - xk * Mk,
        tk = Pk * nk - xk * mk,
        Xk = rk * Uk - Kk * Mk,
        Bk = rk * nk - Kk * mk,
        ck = rk * xk - Kk * Pk,
        Tk = -(fk * yk - Sk * Yk + bk * Lk),
        Zk = +(Dk * yk - Sk * Ck + bk * Ak),
        Ok = -(Dk * Yk - fk * Ck + bk * jk),
        gk = +(Dk * Lk - fk * Ak + Sk * jk),
        Gk = +(fk * Ik - Sk * zk + bk * Qk),
        Nk = -(Dk * Ik - Sk * vk + bk * Ek),
        Rk = +(Dk * zk - fk * vk + bk * hk),
        Jk = -(Dk * Qk - fk * Ek + Sk * hk),
        ke = -(fk * ak - Sk * Wk + bk * tk),
        ee = +(Dk * ak - Sk * Xk + bk * Bk),
        ie = -(Dk * Wk - fk * Xk + bk * ck),
        De = +(Dk * tk - fk * Bk + Sk * ck);
      return ek[0] = sk * qk, ek[1] = Tk * qk, ek[2] = Gk * qk, ek[3] = ke * qk, ek[4] = dk * qk, ek[5] = Zk * qk, ek[6] = Nk * qk, ek[7] = ee * qk, ek[8] = Vk * qk, ek[9] = Ok * qk, ek[10] = Rk * qk, ek[11] = ie * qk, ek[12] = Fk * qk, ek[13] = gk * qk, ek[14] = Jk * qk, ek[15] = De * qk, !0
    }
    Dk._UpdateFlagSeed = 0
  },
  36698: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Hk,
      c: () => Uk,
      g: () => Yk,
      j: () => lk,
      l: () => Kk,
      o: () => xk,
      p: () => nk
    });
    var Dk = ik(36703),
      fk = ik(36707),
      Sk = ik(36713),
      bk = ik(36722),
      rk = ik(36729),
      Pk = ik(36731),
      mk = ik(36734);
    const Mk = kk => parseInt(kk.toString().replace(/\W/g, ""));
    class Kk {
      constructor() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = kk, this.y = ek
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let kk = Mk(this.x);
        return kk = 397 * kk ^ Mk(this.y), kk
      }
      toArray(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return kk[ek] = this.x, kk[ek + 1] = this.y, this
      }
      zek(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Kk.FromArrayToRef(kk, ek, this), this
      }
      Tik() {
        return [this.x, this.y]
      }
      Fs(kk) {
        return this.x = kk.x, this.y = kk.y, this
      }
      Z6(kk, ek) {
        return this.x = kk, this.y = ek, this
      }
      set(kk, ek) {
        return this.Z6(kk, ek)
      }
      A_(kk) {
        return this.Z6(kk, kk)
      }
      add(kk) {
        return new Kk(this.x + kk.x, this.y + kk.y)
      }
      addToRef(kk, ek) {
        return ek.x = this.x + kk.x, ek.y = this.y + kk.y, ek
      }
      addInPlace(kk) {
        return this.x += kk.x, this.y += kk.y, this
      }
      addInPlaceFromFloats(kk, ek) {
        return this.x += kk, this.y += ek, this
      }
      addVector3(kk) {
        return new Kk(this.x + kk.x, this.y + kk.y)
      }
      subtract(kk) {
        return new Kk(this.x - kk.x, this.y - kk.y)
      }
      subtractToRef(kk, ek) {
        return ek.x = this.x - kk.x, ek.y = this.y - kk.y, ek
      }
      KDk(kk) {
        return this.x -= kk.x, this.y -= kk.y, this
      }
      multiplyInPlace(kk) {
        return this.x *= kk.x, this.y *= kk.y, this
      }
      multiply(kk) {
        return new Kk(this.x * kk.x, this.y * kk.y)
      }
      multiplyToRef(kk, ek) {
        return ek.x = this.x * kk.x, ek.y = this.y * kk.y, ek
      }
      multiplyByFloats(kk, ek) {
        return new Kk(this.x * kk, this.y * ek)
      }
      divide(kk) {
        return new Kk(this.x / kk.x, this.y / kk.y)
      }
      divideToRef(kk, ek) {
        return ek.x = this.x / kk.x, ek.y = this.y / kk.y, ek
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
      minimizeInPlaceFromFloats(kk, ek) {
        return this.x = Math.min(kk, this.x), this.y = Math.min(ek, this.y), this
      }
      maximizeInPlaceFromFloats(kk, ek) {
        return this.x = Math.max(kk, this.x), this.y = Math.max(ek, this.y), this
      }
      subtractFromFloats(kk, ek) {
        return new Kk(this.x - kk, this.y - ek)
      }
      subtractFromFloatsToRef(kk, ek, ik) {
        return ik.x = this.x - kk, ik.y = this.y - ek, ik
      }
      ge() {
        return new Kk(-this.x, -this.y)
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
        return new Kk(this.x * kk, this.y * kk)
      }
      scaleToRef(kk, ek) {
        return ek.x = this.x * kk, ek.y = this.y * kk, ek
      }
      scaleAndAddToRef(kk, ek) {
        return ek.x += this.x * kk, ek.y += this.y * kk, ek
      }
      equals(kk) {
        return kk && this.x === kk.x && this.y === kk.y
      }
      equalsWithEpsilon(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dk.d;
        return kk && (0, rk.WithinEpsilon)(this.x, kk.x, ek) && (0, rk.WithinEpsilon)(this.y, kk.y, ek)
      }
      Hbk(kk, ek) {
        return this.x === kk && this.y === ek
      }
      floor() {
        return new Kk(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(kk) {
        return kk.x = Math.floor(this.x), kk.y = Math.floor(this.y), kk
      }
      fract() {
        return new Kk(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(kk) {
        return kk.x = this.x - Math.floor(this.x), kk.y = this.y - Math.floor(this.y), kk
      }
      rotate(kk) {
        return this.rotateToRef(kk, new Kk)
      }
      rotateToRef(kk, ek) {
        const ik = Math.cos(kk),
          Dk = Math.sin(kk);
        return ek.x = ik * this.x - Dk * this.y, ek.y = Dk * this.x + ik * this.y, ek
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
        const kk = new Kk;
        return this.normalizeToRef(kk), kk
      }
      normalizeToRef(kk) {
        const ek = this.length();
        return 0 === ek || 1 === ek ? (kk.x = this.x, kk.y = this.y, kk) : this.scaleToRef(1 / ek, kk)
      }
      clone() {
        return new Kk(this.x, this.y)
      }
      dot(kk) {
        return this.x * kk.x + this.y * kk.y
      }
      static Zero() {
        return new Kk(0, 0)
      }
      static One() {
        return new Kk(1, 1)
      }
      static Random() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Kk((0, rk.RandomRange)(kk, ek), (0, rk.RandomRange)(kk, ek))
      }
      static RandomToRef() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).Z6((0, rk.RandomRange)(kk, ek), (0, rk.RandomRange)(kk, ek))
      }
      static get ZeroReadOnly() {
        return Kk._ZeroReadOnly
      }
      static FromArray(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Kk(kk[ek], kk[ek + 1])
      }
      static FromArrayToRef(kk, ek, ik) {
        return ik.x = kk[ek], ik.y = kk[ek + 1], ik
      }
      static FromFloatsToRef(kk, ek, ik) {
        return ik.Z6(kk, ek), ik
      }
      static CatmullRom(kk, ek, ik, Dk, fk) {
        const Sk = fk * fk,
          bk = fk * Sk,
          rk = .5 * (2 * ek.x + (-kk.x + ik.x) * fk + (2 * kk.x - 5 * ek.x + 4 * ik.x - Dk.x) * Sk + (-kk.x + 3 * ek.x - 3 * ik.x + Dk.x) * bk),
          Pk = .5 * (2 * ek.y + (-kk.y + ik.y) * fk + (2 * kk.y - 5 * ek.y + 4 * ik.y - Dk.y) * Sk + (-kk.y + 3 * ek.y - 3 * ik.y + Dk.y) * bk);
        return new Kk(rk, Pk)
      }
      static ClampToRef(kk, ek, ik, Dk) {
        return Dk.x = (0, rk.Clamp)(kk.x, ek.x, ik.x), Dk.y = (0, rk.Clamp)(kk.y, ek.y, ik.y), Dk
      }
      static Clamp(kk, ek, ik) {
        const Dk = (0, rk.Clamp)(kk.x, ek.x, ik.x),
          fk = (0, rk.Clamp)(kk.y, ek.y, ik.y);
        return new Kk(Dk, fk)
      }
      static Hermite(kk, ek, ik, Dk, fk) {
        const Sk = fk * fk,
          bk = fk * Sk,
          rk = 2 * bk - 3 * Sk + 1,
          Pk = -2 * bk + 3 * Sk,
          mk = bk - 2 * Sk + fk,
          Mk = bk - Sk,
          xk = kk.x * rk + ik.x * Pk + ek.x * mk + Dk.x * Mk,
          nk = kk.y * rk + ik.y * Pk + ek.y * mk + Dk.y * Mk;
        return new Kk(xk, nk)
      }
      static Hermite1stDerivative(kk, ek, ik, Dk, fk) {
        return this.Hermite1stDerivativeToRef(kk, ek, ik, Dk, fk, new Kk)
      }
      static Hermite1stDerivativeToRef(kk, ek, ik, Dk, fk, Sk) {
        const bk = fk * fk;
        return Sk.x = 6 * (bk - fk) * kk.x + (3 * bk - 4 * fk + 1) * ek.x + 6 * (-bk + fk) * ik.x + (3 * bk - 2 * fk) * Dk.x, Sk.y = 6 * (bk - fk) * kk.y + (3 * bk - 4 * fk + 1) * ek.y + 6 * (-bk + fk) * ik.y + (3 * bk - 2 * fk) * Dk.y, Sk
      }
      static Lerp(kk, ek, ik) {
        return Kk.LerpToRef(kk, ek, ik, new Kk)
      }
      static LerpToRef(kk, ek, ik, Dk) {
        return Dk.x = kk.x + (ek.x - kk.x) * ik, Dk.y = kk.y + (ek.y - kk.y) * ik, Dk
      }
      static Dot(kk, ek) {
        return kk.x * ek.x + kk.y * ek.y
      }
      static Normalize(kk) {
        return Kk.NormalizeToRef(kk, new Kk)
      }
      static NormalizeToRef(kk, ek) {
        return kk.normalizeToRef(ek), ek
      }
      static Minimize(kk, ek) {
        const ik = kk.x < ek.x ? kk.x : ek.x,
          Dk = kk.y < ek.y ? kk.y : ek.y;
        return new Kk(ik, Dk)
      }
      static Maximize(kk, ek) {
        const ik = kk.x > ek.x ? kk.x : ek.x,
          Dk = kk.y > ek.y ? kk.y : ek.y;
        return new Kk(ik, Dk)
      }
      static Transform(kk, ek) {
        return Kk.TransformToRef(kk, ek, new Kk)
      }
      static TransformToRef(kk, ek, ik) {
        const Dk = ek.m,
          fk = kk.x * Dk[0] + kk.y * Dk[4] + Dk[12],
          Sk = kk.x * Dk[1] + kk.y * Dk[5] + Dk[13];
        return ik.x = fk, ik.y = Sk, ik
      }
      static PointInTriangle(kk, ek, ik, Dk) {
        const fk = .5 * (-ik.y * Dk.x + ek.y * (-ik.x + Dk.x) + ek.x * (ik.y - Dk.y) + ik.x * Dk.y),
          Sk = fk < 0 ? -1 : 1,
          bk = (ek.y * Dk.x - ek.x * Dk.y + (Dk.y - ek.y) * kk.x + (ek.x - Dk.x) * kk.y) * Sk,
          rk = (ek.x * ik.y - ek.y * ik.x + (ek.y - ik.y) * kk.x + (ik.x - ek.x) * kk.y) * Sk;
        return bk > 0 && rk > 0 && bk + rk < 2 * fk * Sk
      }
      static Distance(kk, ek) {
        return Math.sqrt(Kk.DistanceSquared(kk, ek))
      }
      static DistanceSquared(kk, ek) {
        const ik = kk.x - ek.x,
          Dk = kk.y - ek.y;
        return ik * ik + Dk * Dk
      }
      static Center(kk, ek) {
        return Kk.CenterToRef(kk, ek, new Kk)
      }
      static CenterToRef(kk, ek, ik) {
        return ik.Z6((kk.x + ek.x) / 2, (kk.y + ek.y) / 2)
      }
      static DistanceOfPointFromSegment(kk, ek, ik) {
        const Dk = Kk.DistanceSquared(ek, ik);
        if (0 === Dk) return Kk.Distance(kk, ek);
        const fk = ik.subtract(ek),
          Sk = Math.max(0, Math.min(1, Kk.Dot(kk.subtract(ek), fk) / Dk)),
          bk = ek.add(fk.multiplyByFloats(Sk, Sk));
        return Kk.Distance(kk, bk)
      }
    }
    Kk._V8PerformanceHack = new Kk(.5, .5), Kk._ZeroReadOnly = Kk.Zero();
    class xk {
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
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = kk, this._y = ek, this._z = ik
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "eH"
      }
      getHashCode() {
        let kk = Mk(this._x);
        return kk = 397 * kk ^ Mk(this._y), kk = 397 * kk ^ Mk(this._z), kk
      }
      Tik() {
        return [this._x, this._y, this._z]
      }
      toArray(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return kk[ek] = this._x, kk[ek + 1] = this._y, kk[ek + 2] = this._z, this
      }
      zek(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return xk.FromArrayToRef(kk, ek, this), this
      }
      toQuaternion() {
        return Uk.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(kk) {
        return this._x += kk._x, this._y += kk._y, this._z += kk._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(kk, ek, ik) {
        return this._x += kk, this._y += ek, this._z += ik, this._isDirty = !0, this
      }
      add(kk) {
        return new xk(this._x + kk._x, this._y + kk._y, this._z + kk._z)
      }
      addToRef(kk, ek) {
        return ek._x = this._x + kk._x, ek._y = this._y + kk._y, ek._z = this._z + kk._z, ek._isDirty = !0, ek
      }
      KDk(kk) {
        return this._x -= kk._x, this._y -= kk._y, this._z -= kk._z, this._isDirty = !0, this
      }
      subtract(kk) {
        return new xk(this._x - kk._x, this._y - kk._y, this._z - kk._z)
      }
      subtractToRef(kk, ek) {
        return this.subtractFromFloatsToRef(kk._x, kk._y, kk._z, ek)
      }
      subtractFromFloats(kk, ek, ik) {
        return new xk(this._x - kk, this._y - ek, this._z - ik)
      }
      subtractFromFloatsToRef(kk, ek, ik, Dk) {
        return Dk._x = this._x - kk, Dk._y = this._y - ek, Dk._z = this._z - ik, Dk._isDirty = !0, Dk
      }
      ge() {
        return new xk(-this._x, -this._y, -this._z)
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
        return new xk(this._x * kk, this._y * kk, this._z * kk)
      }
      scaleToRef(kk, ek) {
        return ek._x = this._x * kk, ek._y = this._y * kk, ek._z = this._z * kk, ek._isDirty = !0, ek
      }
      getNormalToRef(kk) {
        const ek = this.length();
        let ik = Math.acos(this._y / ek);
        const Dk = Math.atan2(this._z, this._x);
        ik > Math.PI / 2 ? ik -= Math.PI / 2 : ik += Math.PI / 2;
        const fk = ek * Math.sin(ik) * Math.cos(Dk),
          Sk = ek * Math.cos(ik),
          bk = ek * Math.sin(ik) * Math.sin(Dk);
        return kk.set(fk, Sk, bk), kk
      }
      applyRotationQuaternionToRef(kk, ek) {
        const ik = this._x,
          Dk = this._y,
          fk = this._z,
          Sk = kk._x,
          bk = kk._y,
          rk = kk._z,
          Pk = kk._w,
          mk = 2 * (bk * fk - rk * Dk),
          Mk = 2 * (rk * ik - Sk * fk),
          Kk = 2 * (Sk * Dk - bk * ik);
        return ek._x = ik + Pk * mk + bk * Kk - rk * Mk, ek._y = Dk + Pk * Mk + rk * mk - Sk * Kk, ek._z = fk + Pk * Kk + Sk * Mk - bk * mk, ek._isDirty = !0, ek
      }
      applyRotationQuaternionInPlace(kk) {
        return this.applyRotationQuaternionToRef(kk, this)
      }
      applyRotationQuaternion(kk) {
        return this.applyRotationQuaternionToRef(kk, new xk)
      }
      scaleAndAddToRef(kk, ek) {
        return ek._x += this._x * kk, ek._y += this._y * kk, ek._z += this._z * kk, ek._isDirty = !0, ek
      }
      projectOnPlane(kk, ek) {
        return this.projectOnPlaneToRef(kk, ek, new xk)
      }
      projectOnPlaneToRef(kk, ek, ik) {
        const Dk = kk.normal,
          fk = kk.d,
          Sk = wk.eH[0];
        this.subtractToRef(ek, Sk), Sk.normalize();
        const bk = xk.Dot(Sk, Dk);
        if (Math.abs(bk) < 1e-10) ik.A_(1 / 0);
        else {
          const kk = -(xk.Dot(ek, Dk) + fk) / bk,
            rk = Sk.scaleInPlace(kk);
          ek.addToRef(rk, ik)
        }
        return ik
      }
      equals(kk) {
        return kk && this._x === kk._x && this._y === kk._y && this._z === kk._z
      }
      equalsWithEpsilon(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dk.d;
        return kk && (0, rk.WithinEpsilon)(this._x, kk._x, ek) && (0, rk.WithinEpsilon)(this._y, kk._y, ek) && (0, rk.WithinEpsilon)(this._z, kk._z, ek)
      }
      Hbk(kk, ek, ik) {
        return this._x === kk && this._y === ek && this._z === ik
      }
      multiplyInPlace(kk) {
        return this._x *= kk._x, this._y *= kk._y, this._z *= kk._z, this._isDirty = !0, this
      }
      multiply(kk) {
        return this.multiplyByFloats(kk._x, kk._y, kk._z)
      }
      multiplyToRef(kk, ek) {
        return ek._x = this._x * kk._x, ek._y = this._y * kk._y, ek._z = this._z * kk._z, ek._isDirty = !0, ek
      }
      multiplyByFloats(kk, ek, ik) {
        return new xk(this._x * kk, this._y * ek, this._z * ik)
      }
      divide(kk) {
        return new xk(this._x / kk._x, this._y / kk._y, this._z / kk._z)
      }
      divideToRef(kk, ek) {
        return ek._x = this._x / kk._x, ek._y = this._y / kk._y, ek._z = this._z / kk._z, ek._isDirty = !0, ek
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
      minimizeInPlaceFromFloats(kk, ek, ik) {
        return kk < this._x && (this.x = kk), ek < this._y && (this.y = ek), ik < this._z && (this.z = ik), this
      }
      maximizeInPlaceFromFloats(kk, ek, ik) {
        return kk > this._x && (this.x = kk), ek > this._y && (this.y = ek), ik > this._z && (this.z = ik), this
      }
      isNonUniformWithinEpsilon(kk) {
        const ek = Math.abs(this._x),
          ik = Math.abs(this._y);
        if (!(0, rk.WithinEpsilon)(ek, ik, kk)) return !0;
        const Dk = Math.abs(this._z);
        return !(0, rk.WithinEpsilon)(ek, Dk, kk) || !(0, rk.WithinEpsilon)(ik, Dk, kk)
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
        return new xk(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(kk) {
        return kk._x = this._x - Math.floor(this._x), kk._y = this._y - Math.floor(this._y), kk._z = this._z - Math.floor(this._z), kk._isDirty = !0, kk
      }
      fract() {
        return new xk(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
        const ek = wk.eH[0].Fs(this);
        return this.x = ek[kk[0]], this.y = ek[kk[1]], this.z = ek[kk[2]], this
      }
      rotateByQuaternionToRef(kk, ek) {
        return kk.toRotationMatrix(wk.Matrix[0]), xk.TransformCoordinatesToRef(this, wk.Matrix[0], ek), ek
      }
      rotateByQuaternionAroundPointToRef(kk, ek, ik) {
        return this.subtractToRef(ek, wk.eH[0]), wk.eH[0].rotateByQuaternionToRef(kk, wk.eH[0]), ek.addToRef(wk.eH[0], ik), ik
      }
      cross(kk) {
        return xk.CrossToRef(this, kk, new xk)
      }
      normalizeFromLength(kk) {
        return 0 === kk || 1 === kk ? this : this.scaleInPlace(1 / kk)
      }
      normalizeToNew() {
        return this.normalizeToRef(new xk)
      }
      normalizeToRef(kk) {
        const ek = this.length();
        return 0 === ek || 1 === ek ? (kk._x = this._x, kk._y = this._y, kk._z = this._z, kk._isDirty = !0, kk) : this.scaleToRef(1 / ek, kk)
      }
      clone() {
        return new xk(this._x, this._y, this._z)
      }
      Fs(kk) {
        return this.Z6(kk._x, kk._y, kk._z)
      }
      Z6(kk, ek, ik) {
        return this._x = kk, this._y = ek, this._z = ik, this._isDirty = !0, this
      }
      set(kk, ek, ik) {
        return this.Z6(kk, ek, ik)
      }
      A_(kk) {
        return this._x = this._y = this._z = kk, this._isDirty = !0, this
      }
      static GetClipFactor(kk, ek, ik, Dk) {
        const fk = xk.Dot(kk, ik);
        return (fk - Dk) / (fk - xk.Dot(ek, ik))
      }
      static GetAngleBetweenVectors(kk, ek, ik) {
        const Dk = kk.normalizeToRef(wk.eH[1]),
          fk = ek.normalizeToRef(wk.eH[2]);
        let Sk = xk.Dot(Dk, fk);
        Sk = (0, rk.Clamp)(Sk, -1, 1);
        const bk = Math.acos(Sk),
          Pk = wk.eH[3];
        return xk.CrossToRef(Dk, fk, Pk), xk.Dot(Pk, ik) > 0 ? isNaN(bk) ? 0 : bk : isNaN(bk) ? -Math.PI : -Math.acos(Sk)
      }
      static GetAngleBetweenVectorsOnPlane(kk, ek, ik) {
        wk.eH[0].Fs(kk);
        const Dk = wk.eH[0];
        wk.eH[1].Fs(ek);
        const fk = wk.eH[1];
        wk.eH[2].Fs(ik);
        const Sk = wk.eH[2],
          bk = wk.eH[3],
          Pk = wk.eH[4];
        Dk.normalize(), fk.normalize(), Sk.normalize(), xk.CrossToRef(Sk, Dk, bk), xk.CrossToRef(bk, Sk, Pk);
        const mk = Math.atan2(xk.Dot(fk, bk), xk.Dot(fk, Pk));
        return (0, rk.NormalizeRadians)(mk)
      }
      static PitchYawRollToMoveBetweenPointsToRef(kk, ek, ik) {
        const Dk = lk.eH[0];
        return ek.subtractToRef(kk, Dk), ik._y = Math.atan2(Dk.x, Dk.z) || 0, ik._x = Math.atan2(Math.sqrt(Dk.x ** 2 + Dk.z ** 2), Dk.y) || 0, ik._z = 0, ik._isDirty = !0, ik
      }
      static PitchYawRollToMoveBetweenPoints(kk, ek) {
        const ik = xk.Zero();
        return xk.PitchYawRollToMoveBetweenPointsToRef(kk, ek, ik)
      }
      static SlerpToRef(kk, ek, ik, fk) {
        ik = (0, rk.Clamp)(ik, 0, 1);
        const Sk = wk.eH[0],
          bk = wk.eH[1];
        Sk.Fs(kk);
        const Pk = Sk.length();
        Sk.normalizeFromLength(Pk), bk.Fs(ek);
        const mk = bk.length();
        bk.normalizeFromLength(mk);
        const Mk = xk.Dot(Sk, bk);
        let Kk, nk;
        if (Mk < 1 - Dk.d) {
          const kk = Math.acos(Mk),
            ek = 1 / Math.sin(kk);
          Kk = Math.sin((1 - ik) * kk) * ek, nk = Math.sin(ik * kk) * ek
        } else Kk = 1 - ik, nk = ik;
        return Sk.scaleInPlace(Kk), bk.scaleInPlace(nk), fk.Fs(Sk).addInPlace(bk), fk.scaleInPlace((0, rk.Lerp)(Pk, mk, ik)), fk
      }
      static SmoothToRef(kk, ek, ik, Dk, fk) {
        return xk.SlerpToRef(kk, ek, 0 === Dk ? 1 : ik / Dk, fk), fk
      }
      static FromArray(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new xk(kk[ek], kk[ek + 1], kk[ek + 2])
      }
      static FromFloatArray(kk, ek) {
        return xk.FromArray(kk, ek)
      }
      static FromArrayToRef(kk, ek, ik) {
        return ik._x = kk[ek], ik._y = kk[ek + 1], ik._z = kk[ek + 2], ik._isDirty = !0, ik
      }
      static FromFloatArrayToRef(kk, ek, ik) {
        return xk.FromArrayToRef(kk, ek, ik)
      }
      static FromFloatsToRef(kk, ek, ik, Dk) {
        return Dk.Z6(kk, ek, ik), Dk
      }
      static Zero() {
        return new xk(0, 0, 0)
      }
      static One() {
        return new xk(1, 1, 1)
      }
      static Up() {
        return new xk(0, 1, 0)
      }
      static get UpReadOnly() {
        return xk._UpReadOnly
      }
      static get DownReadOnly() {
        return xk._DownReadOnly
      }
      static get RightReadOnly() {
        return xk._RightReadOnly
      }
      static get LeftReadOnly() {
        return xk._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return xk._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return xk._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return xk._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return xk._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return xk._ZeroReadOnly
      }
      static get OneReadOnly() {
        return xk._OneReadOnly
      }
      static Down() {
        return new xk(0, -1, 0)
      }
      static Forward() {
        return new xk(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new xk(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new xk(1, 0, 0)
      }
      static Left() {
        return new xk(-1, 0, 0)
      }
      static Random() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new xk((0, rk.RandomRange)(kk, ek), (0, rk.RandomRange)(kk, ek), (0, rk.RandomRange)(kk, ek))
      }
      static RandomToRef() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).Z6((0, rk.RandomRange)(kk, ek), (0, rk.RandomRange)(kk, ek), (0, rk.RandomRange)(kk, ek))
      }
      static TransformCoordinates(kk, ek) {
        const ik = xk.Zero();
        return xk.TransformCoordinatesToRef(kk, ek, ik), ik
      }
      static TransformCoordinatesToRef(kk, ek, ik) {
        return xk.TransformCoordinatesFromFloatsToRef(kk._x, kk._y, kk._z, ek, ik), ik
      }
      static TransformCoordinatesFromFloatsToRef(kk, ek, ik, Dk, fk) {
        const Sk = Dk.m,
          bk = kk * Sk[0] + ek * Sk[4] + ik * Sk[8] + Sk[12],
          rk = kk * Sk[1] + ek * Sk[5] + ik * Sk[9] + Sk[13],
          Pk = kk * Sk[2] + ek * Sk[6] + ik * Sk[10] + Sk[14],
          mk = 1 / (kk * Sk[3] + ek * Sk[7] + ik * Sk[11] + Sk[15]);
        return fk._x = bk * mk, fk._y = rk * mk, fk._z = Pk * mk, fk._isDirty = !0, fk
      }
      static TransformNormal(kk, ek) {
        const ik = xk.Zero();
        return xk.TransformNormalToRef(kk, ek, ik), ik
      }
      static TransformNormalToRef(kk, ek, ik) {
        return this.TransformNormalFromFloatsToRef(kk._x, kk._y, kk._z, ek, ik), ik
      }
      static TransformNormalFromFloatsToRef(kk, ek, ik, Dk, fk) {
        const Sk = Dk.m;
        return fk._x = kk * Sk[0] + ek * Sk[4] + ik * Sk[8], fk._y = kk * Sk[1] + ek * Sk[5] + ik * Sk[9], fk._z = kk * Sk[2] + ek * Sk[6] + ik * Sk[10], fk._isDirty = !0, fk
      }
      static CatmullRom(kk, ek, ik, Dk, fk) {
        const Sk = fk * fk,
          bk = fk * Sk,
          rk = .5 * (2 * ek._x + (-kk._x + ik._x) * fk + (2 * kk._x - 5 * ek._x + 4 * ik._x - Dk._x) * Sk + (-kk._x + 3 * ek._x - 3 * ik._x + Dk._x) * bk),
          Pk = .5 * (2 * ek._y + (-kk._y + ik._y) * fk + (2 * kk._y - 5 * ek._y + 4 * ik._y - Dk._y) * Sk + (-kk._y + 3 * ek._y - 3 * ik._y + Dk._y) * bk),
          mk = .5 * (2 * ek._z + (-kk._z + ik._z) * fk + (2 * kk._z - 5 * ek._z + 4 * ik._z - Dk._z) * Sk + (-kk._z + 3 * ek._z - 3 * ik._z + Dk._z) * bk);
        return new xk(rk, Pk, mk)
      }
      static Clamp(kk, ek, ik) {
        const Dk = new xk;
        return xk.ClampToRef(kk, ek, ik, Dk), Dk
      }
      static ClampToRef(kk, ek, ik, Dk) {
        let fk = kk._x;
        fk = fk > ik._x ? ik._x : fk, fk = fk < ek._x ? ek._x : fk;
        let Sk = kk._y;
        Sk = Sk > ik._y ? ik._y : Sk, Sk = Sk < ek._y ? ek._y : Sk;
        let bk = kk._z;
        return bk = bk > ik._z ? ik._z : bk, bk = bk < ek._z ? ek._z : bk, Dk.Z6(fk, Sk, bk), Dk
      }
      static CheckExtends(kk, ek, ik) {
        ek.minimizeInPlace(kk), ik.maximizeInPlace(kk)
      }
      static Hermite(kk, ek, ik, Dk, fk) {
        const Sk = fk * fk,
          bk = fk * Sk,
          rk = 2 * bk - 3 * Sk + 1,
          Pk = -2 * bk + 3 * Sk,
          mk = bk - 2 * Sk + fk,
          Mk = bk - Sk,
          Kk = kk._x * rk + ik._x * Pk + ek._x * mk + Dk._x * Mk,
          nk = kk._y * rk + ik._y * Pk + ek._y * mk + Dk._y * Mk,
          Uk = kk._z * rk + ik._z * Pk + ek._z * mk + Dk._z * Mk;
        return new xk(Kk, nk, Uk)
      }
      static Hermite1stDerivative(kk, ek, ik, Dk, fk) {
        const Sk = new xk;
        return this.Hermite1stDerivativeToRef(kk, ek, ik, Dk, fk, Sk), Sk
      }
      static Hermite1stDerivativeToRef(kk, ek, ik, Dk, fk, Sk) {
        const bk = fk * fk;
        return Sk._x = 6 * (bk - fk) * kk._x + (3 * bk - 4 * fk + 1) * ek._x + 6 * (-bk + fk) * ik._x + (3 * bk - 2 * fk) * Dk._x, Sk._y = 6 * (bk - fk) * kk._y + (3 * bk - 4 * fk + 1) * ek._y + 6 * (-bk + fk) * ik._y + (3 * bk - 2 * fk) * Dk._y, Sk._z = 6 * (bk - fk) * kk._z + (3 * bk - 4 * fk + 1) * ek._z + 6 * (-bk + fk) * ik._z + (3 * bk - 2 * fk) * Dk._z, Sk._isDirty = !0, Sk
      }
      static Lerp(kk, ek, ik) {
        const Dk = new xk(0, 0, 0);
        return xk.LerpToRef(kk, ek, ik, Dk), Dk
      }
      static LerpToRef(kk, ek, ik, Dk) {
        return Dk._x = kk._x + (ek._x - kk._x) * ik, Dk._y = kk._y + (ek._y - kk._y) * ik, Dk._z = kk._z + (ek._z - kk._z) * ik, Dk._isDirty = !0, Dk
      }
      static Dot(kk, ek) {
        return kk._x * ek._x + kk._y * ek._y + kk._z * ek._z
      }
      dot(kk) {
        return this._x * kk._x + this._y * kk._y + this._z * kk._z
      }
      static Cross(kk, ek) {
        const ik = new xk;
        return xk.CrossToRef(kk, ek, ik), ik
      }
      static CrossToRef(kk, ek, ik) {
        const Dk = kk._y * ek._z - kk._z * ek._y,
          fk = kk._z * ek._x - kk._x * ek._z,
          Sk = kk._x * ek._y - kk._y * ek._x;
        return ik.Z6(Dk, fk, Sk), ik
      }
      static Normalize(kk) {
        const ek = xk.Zero();
        return xk.NormalizeToRef(kk, ek), ek
      }
      static NormalizeToRef(kk, ek) {
        return kk.normalizeToRef(ek), ek
      }
      static Project(kk, ek, ik, Dk) {
        const fk = new xk;
        return xk.ProjectToRef(kk, ek, ik, Dk, fk), fk
      }
      static ProjectToRef(kk, ek, ik, Dk, fk) {
        const Sk = Dk.width,
          rk = Dk.height,
          Pk = Dk.x,
          mk = Dk.y,
          Mk = wk.Matrix[1],
          Kk = bk.e.LastCreatedEngine?.isNDCHalfZRange,
          nk = Kk ? 1 : .5,
          Uk = Kk ? 0 : .5;
        Hk.FromValuesToRef(Sk / 2, 0, 0, 0, 0, -rk / 2, 0, 0, 0, 0, nk, 0, Pk + Sk / 2, rk / 2 + mk, Uk, 1, Mk);
        const lk = wk.Matrix[0];
        return ek.multiplyToRef(ik, lk), lk.multiplyToRef(Mk, lk), xk.TransformCoordinatesToRef(kk, lk, fk), fk
      }
      static Reflect(kk, ek) {
        return this.ReflectToRef(kk, ek, new xk)
      }
      static ReflectToRef(kk, ek, ik) {
        const Dk = lk.eH[0];
        return Dk.Fs(ek).scaleInPlace(2 * xk.Dot(kk, ek)), ik.Fs(kk).KDk(Dk)
      }
      static UnprojectFromTransform(kk, ek, ik, Dk, fk) {
        return this.Unproject(kk, ek, ik, Dk, fk, Hk.IdentityReadOnly)
      }
      static Unproject(kk, ek, ik, Dk, fk, Sk) {
        const bk = new xk;
        return xk.UnprojectToRef(kk, ek, ik, Dk, fk, Sk, bk), bk
      }
      static UnprojectToRef(kk, ek, ik, Dk, fk, Sk, bk) {
        return xk.UnprojectFloatsToRef(kk._x, kk._y, kk._z, ek, ik, Dk, fk, Sk, bk), bk
      }
      static UnprojectFloatsToRef(kk, ek, ik, Dk, fk, Sk, rk, Pk, mk) {
        const Mk = wk.Matrix[0];
        Sk.multiplyToRef(rk, Mk), Mk.multiplyToRef(Pk, Mk), Mk.invert();
        const Kk = wk.eH[0];
        return Kk.x = kk / Dk * 2 - 1, Kk.y = -(ek / fk * 2 - 1), bk.e.LastCreatedEngine?.isNDCHalfZRange ? Kk.z = ik : Kk.z = 2 * ik - 1, xk.TransformCoordinatesToRef(Kk, Mk, mk), mk
      }
      static Minimize(kk, ek) {
        const ik = new xk;
        return ik.Fs(kk), ik.minimizeInPlace(ek), ik
      }
      static Maximize(kk, ek) {
        const ik = new xk;
        return ik.Fs(kk), ik.maximizeInPlace(ek), ik
      }
      static Distance(kk, ek) {
        return Math.sqrt(xk.DistanceSquared(kk, ek))
      }
      static DistanceSquared(kk, ek) {
        const ik = kk._x - ek._x,
          Dk = kk._y - ek._y,
          fk = kk._z - ek._z;
        return ik * ik + Dk * Dk + fk * fk
      }
      static ProjectOnTriangleToRef(kk, ek, ik, fk, Sk) {
        const bk = wk.eH[0],
          Pk = wk.eH[1],
          mk = wk.eH[2],
          Mk = wk.eH[3],
          Kk = wk.eH[4];
        ik.subtractToRef(ek, bk), fk.subtractToRef(ek, Pk), fk.subtractToRef(ik, mk);
        const nk = bk.length(),
          Uk = Pk.length(),
          Hk = mk.length();
        if (nk < Dk.d || Uk < Dk.d || Hk < Dk.d) return Sk.Fs(ek), xk.Distance(kk, ek);
        kk.subtractToRef(ek, Kk), xk.CrossToRef(bk, Pk, Mk);
        const lk = Mk.length();
        if (lk < Dk.d) return Sk.Fs(ek), xk.Distance(kk, ek);
        Mk.normalizeFromLength(lk);
        let pk = Kk.length();
        if (pk < Dk.d) return Sk.Fs(ek), 0;
        Kk.normalizeFromLength(pk);
        const yk = xk.Dot(Mk, Kk),
          Yk = wk.eH[5],
          Lk = wk.eH[6];
        Yk.Fs(Mk).scaleInPlace(-pk * yk), Lk.Fs(kk).addInPlace(Yk);
        const Ck = wk.eH[4],
          Ak = wk.eH[5],
          jk = wk.eH[7],
          sk = wk.eH[8];
        Ck.Fs(bk).scaleInPlace(1 / nk), sk.Fs(Pk).scaleInPlace(1 / Uk), Ck.addInPlace(sk).scaleInPlace(-1), Ak.Fs(bk).scaleInPlace(-1 / nk), sk.Fs(mk).scaleInPlace(1 / Hk), Ak.addInPlace(sk).scaleInPlace(-1), jk.Fs(mk).scaleInPlace(-1 / Hk), sk.Fs(Pk).scaleInPlace(-1 / Uk), jk.addInPlace(sk).scaleInPlace(-1);
        const dk = wk.eH[9];
        let Vk;
        dk.Fs(Lk).KDk(ek), xk.CrossToRef(Ck, dk, sk), Vk = xk.Dot(sk, Mk);
        const Fk = Vk;
        dk.Fs(Lk).KDk(ik), xk.CrossToRef(Ak, dk, sk), Vk = xk.Dot(sk, Mk);
        const uk = Vk;
        dk.Fs(Lk).KDk(fk), xk.CrossToRef(jk, dk, sk), Vk = xk.Dot(sk, Mk);
        const qk = Vk,
          Ik = wk.eH[10];
        let zk, Qk;
        Fk > 0 && uk < 0 ? (Ik.Fs(bk), zk = ek, Qk = ik) : uk > 0 && qk < 0 ? (Ik.Fs(mk), zk = ik, Qk = fk) : (Ik.Fs(Pk).scaleInPlace(-1), zk = fk, Qk = ek);
        const vk = wk.eH[9],
          Ek = wk.eH[4];
        zk.subtractToRef(Lk, sk), Qk.subtractToRef(Lk, vk), xk.CrossToRef(sk, vk, Ek);
        if (!(xk.Dot(Ek, Mk) < 0)) return Sk.Fs(Lk), Math.abs(pk * yk);
        const hk = wk.eH[5];
        xk.CrossToRef(Ik, Ek, hk), hk.normalize();
        const ak = wk.eH[9];
        ak.Fs(zk).KDk(Lk);
        const Wk = ak.length();
        if (Wk < Dk.d) return Sk.Fs(zk), xk.Distance(kk, zk);
        ak.normalizeFromLength(Wk);
        const tk = xk.Dot(hk, ak),
          Xk = wk.eH[7];
        Xk.Fs(Lk).addInPlace(hk.scaleInPlace(Wk * tk)), sk.Fs(Xk).KDk(zk), pk = Ik.length(), Ik.normalizeFromLength(pk);
        let Bk = xk.Dot(sk, Ik) / Math.max(pk, Dk.d);
        return Bk = (0, rk.Clamp)(Bk, 0, 1), Xk.Fs(zk).addInPlace(Ik.scaleInPlace(Bk * pk)), Sk.Fs(Xk), xk.Distance(kk, Xk)
      }
      static Center(kk, ek) {
        return xk.CenterToRef(kk, ek, xk.Zero())
      }
      static CenterToRef(kk, ek, ik) {
        return ik.Z6((kk._x + ek._x) / 2, (kk._y + ek._y) / 2, (kk._z + ek._z) / 2)
      }
      static RotationFromAxis(kk, ek, ik) {
        const Dk = new xk;
        return xk.RotationFromAxisToRef(kk, ek, ik, Dk), Dk
      }
      static RotationFromAxisToRef(kk, ek, ik, Dk) {
        const fk = wk.Quaternion[0];
        return Uk.RotationQuaternionFromAxisToRef(kk, ek, ik, fk), fk.toEulerAnglesToRef(Dk), Dk
      }
    }
    xk._V8PerformanceHack = new xk(.5, .5, .5), xk._UpReadOnly = xk.Up(), xk._DownReadOnly = xk.Down(), xk._LeftHandedForwardReadOnly = xk.Forward(!1), xk._RightHandedForwardReadOnly = xk.Forward(!0), xk._LeftHandedBackwardReadOnly = xk.Backward(!1), xk._RightHandedBackwardReadOnly = xk.Backward(!0), xk._RightReadOnly = xk.Right(), xk._LeftReadOnly = xk.Left(), xk._ZeroReadOnly = xk.Zero(), xk._OneReadOnly = xk.One();
    class nk {
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
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = kk, this._y = ek, this._z = ik, this._w = Dk
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let kk = Mk(this._x);
        return kk = 397 * kk ^ Mk(this._y), kk = 397 * kk ^ Mk(this._z), kk = 397 * kk ^ Mk(this._w), kk
      }
      Tik() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(kk, ek) {
        return void 0 === ek && (ek = 0), kk[ek] = this._x, kk[ek + 1] = this._y, kk[ek + 2] = this._z, kk[ek + 3] = this._w, this
      }
      zek(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return nk.FromArrayToRef(kk, ek, this), this
      }
      addInPlace(kk) {
        return this.x += kk._x, this.y += kk._y, this.z += kk._z, this.w += kk._w, this
      }
      addInPlaceFromFloats(kk, ek, ik, Dk) {
        return this.x += kk, this.y += ek, this.z += ik, this.w += Dk, this
      }
      add(kk) {
        return new nk(this._x + kk.x, this._y + kk.y, this._z + kk.z, this._w + kk.w)
      }
      addToRef(kk, ek) {
        return ek.x = this._x + kk.x, ek.y = this._y + kk.y, ek.z = this._z + kk.z, ek.w = this._w + kk.w, ek
      }
      KDk(kk) {
        return this.x -= kk.x, this.y -= kk.y, this.z -= kk.z, this.w -= kk.w, this
      }
      subtract(kk) {
        return new nk(this._x - kk.x, this._y - kk.y, this._z - kk.z, this._w - kk.w)
      }
      subtractToRef(kk, ek) {
        return ek.x = this._x - kk.x, ek.y = this._y - kk.y, ek.z = this._z - kk.z, ek.w = this._w - kk.w, ek
      }
      subtractFromFloats(kk, ek, ik, Dk) {
        return new nk(this._x - kk, this._y - ek, this._z - ik, this._w - Dk)
      }
      subtractFromFloatsToRef(kk, ek, ik, Dk, fk) {
        return fk.x = this._x - kk, fk.y = this._y - ek, fk.z = this._z - ik, fk.w = this._w - Dk, fk
      }
      ge() {
        return new nk(-this._x, -this._y, -this._z, -this._w)
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
        return new nk(this._x * kk, this._y * kk, this._z * kk, this._w * kk)
      }
      scaleToRef(kk, ek) {
        return ek.x = this._x * kk, ek.y = this._y * kk, ek.z = this._z * kk, ek.w = this._w * kk, ek
      }
      scaleAndAddToRef(kk, ek) {
        return ek.x += this._x * kk, ek.y += this._y * kk, ek.z += this._z * kk, ek.w += this._w * kk, ek
      }
      equals(kk) {
        return kk && this._x === kk.x && this._y === kk.y && this._z === kk.z && this._w === kk.w
      }
      equalsWithEpsilon(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dk.d;
        return kk && (0, rk.WithinEpsilon)(this._x, kk.x, ek) && (0, rk.WithinEpsilon)(this._y, kk.y, ek) && (0, rk.WithinEpsilon)(this._z, kk.z, ek) && (0, rk.WithinEpsilon)(this._w, kk.w, ek)
      }
      Hbk(kk, ek, ik, Dk) {
        return this._x === kk && this._y === ek && this._z === ik && this._w === Dk
      }
      multiplyInPlace(kk) {
        return this.x *= kk.x, this.y *= kk.y, this.z *= kk.z, this.w *= kk.w, this
      }
      multiply(kk) {
        return new nk(this._x * kk.x, this._y * kk.y, this._z * kk.z, this._w * kk.w)
      }
      multiplyToRef(kk, ek) {
        return ek.x = this._x * kk.x, ek.y = this._y * kk.y, ek.z = this._z * kk.z, ek.w = this._w * kk.w, ek
      }
      multiplyByFloats(kk, ek, ik, Dk) {
        return new nk(this._x * kk, this._y * ek, this._z * ik, this._w * Dk)
      }
      divide(kk) {
        return new nk(this._x / kk.x, this._y / kk.y, this._z / kk.z, this._w / kk.w)
      }
      divideToRef(kk, ek) {
        return ek.x = this._x / kk.x, ek.y = this._y / kk.y, ek.z = this._z / kk.z, ek.w = this._w / kk.w, ek
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
      minimizeInPlaceFromFloats(kk, ek, ik, Dk) {
        return this.x = Math.min(kk, this._x), this.y = Math.min(ek, this._y), this.z = Math.min(ik, this._z), this.w = Math.min(Dk, this._w), this
      }
      maximizeInPlaceFromFloats(kk, ek, ik, Dk) {
        return this.x = Math.max(kk, this._x), this.y = Math.max(ek, this._y), this.z = Math.max(ik, this._z), this.w = Math.max(Dk, this._w), this
      }
      floorToRef(kk) {
        return kk.x = Math.floor(this._x), kk.y = Math.floor(this._y), kk.z = Math.floor(this._z), kk.w = Math.floor(this._w), kk
      }
      floor() {
        return new nk(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(kk) {
        return kk.x = this._x - Math.floor(this._x), kk.y = this._y - Math.floor(this._y), kk.z = this._z - Math.floor(this._z), kk.w = this._w - Math.floor(this._w), kk
      }
      fract() {
        return new nk(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
        return this.normalizeToRef(new nk)
      }
      normalizeToRef(kk) {
        const ek = this.length();
        return 0 === ek || 1 === ek ? (kk.x = this._x, kk.y = this._y, kk.z = this._z, kk.w = this._w, kk) : this.scaleToRef(1 / ek, kk)
      }
      toVector3() {
        return new xk(this._x, this._y, this._z)
      }
      clone() {
        return new nk(this._x, this._y, this._z, this._w)
      }
      Fs(kk) {
        return this.x = kk.x, this.y = kk.y, this.z = kk.z, this.w = kk.w, this
      }
      Z6(kk, ek, ik, Dk) {
        return this.x = kk, this.y = ek, this.z = ik, this.w = Dk, this
      }
      set(kk, ek, ik, Dk) {
        return this.Z6(kk, ek, ik, Dk)
      }
      A_(kk) {
        return this.x = this.y = this.z = this.w = kk, this
      }
      dot(kk) {
        return this._x * kk.x + this._y * kk.y + this._z * kk.z + this._w * kk.w
      }
      static FromArray(kk, ek) {
        return ek || (ek = 0), new nk(kk[ek], kk[ek + 1], kk[ek + 2], kk[ek + 3])
      }
      static FromArrayToRef(kk, ek, ik) {
        return ik.x = kk[ek], ik.y = kk[ek + 1], ik.z = kk[ek + 2], ik.w = kk[ek + 3], ik
      }
      static FromFloatArrayToRef(kk, ek, ik) {
        return nk.FromArrayToRef(kk, ek, ik), ik
      }
      static FromFloatsToRef(kk, ek, ik, Dk, fk) {
        return fk.x = kk, fk.y = ek, fk.z = ik, fk.w = Dk, fk
      }
      static Zero() {
        return new nk(0, 0, 0, 0)
      }
      static One() {
        return new nk(1, 1, 1, 1)
      }
      static Random() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new nk((0, rk.RandomRange)(kk, ek), (0, rk.RandomRange)(kk, ek), (0, rk.RandomRange)(kk, ek), (0, rk.RandomRange)(kk, ek))
      }
      static RandomToRef() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        return ik.x = (0, rk.RandomRange)(kk, ek), ik.y = (0, rk.RandomRange)(kk, ek), ik.z = (0, rk.RandomRange)(kk, ek), ik.w = (0, rk.RandomRange)(kk, ek), ik
      }
      static Clamp(kk, ek, ik) {
        return nk.ClampToRef(kk, ek, ik, new nk)
      }
      static ClampToRef(kk, ek, ik, Dk) {
        return Dk.x = (0, rk.Clamp)(kk.x, ek.x, ik.x), Dk.y = (0, rk.Clamp)(kk.y, ek.y, ik.y), Dk.z = (0, rk.Clamp)(kk.z, ek.z, ik.z), Dk.w = (0, rk.Clamp)(kk.w, ek.w, ik.w), Dk
      }
      static CheckExtends(kk, ek, ik) {
        ek.minimizeInPlace(kk), ik.maximizeInPlace(kk)
      }
      static get ZeroReadOnly() {
        return nk._ZeroReadOnly
      }
      static Normalize(kk) {
        return nk.NormalizeToRef(kk, new nk)
      }
      static NormalizeToRef(kk, ek) {
        return kk.normalizeToRef(ek), ek
      }
      static Minimize(kk, ek) {
        const ik = new nk;
        return ik.Fs(kk), ik.minimizeInPlace(ek), ik
      }
      static Maximize(kk, ek) {
        const ik = new nk;
        return ik.Fs(kk), ik.maximizeInPlace(ek), ik
      }
      static Distance(kk, ek) {
        return Math.sqrt(nk.DistanceSquared(kk, ek))
      }
      static DistanceSquared(kk, ek) {
        const ik = kk.x - ek.x,
          Dk = kk.y - ek.y,
          fk = kk.z - ek.z,
          Sk = kk.w - ek.w;
        return ik * ik + Dk * Dk + fk * fk + Sk * Sk
      }
      static Center(kk, ek) {
        return nk.CenterToRef(kk, ek, new nk)
      }
      static CenterToRef(kk, ek, ik) {
        return ik.x = (kk.x + ek.x) / 2, ik.y = (kk.y + ek.y) / 2, ik.z = (kk.z + ek.z) / 2, ik.w = (kk.w + ek.w) / 2, ik
      }
      static TransformCoordinates(kk, ek) {
        return nk.TransformCoordinatesToRef(kk, ek, new nk)
      }
      static TransformCoordinatesToRef(kk, ek, ik) {
        return nk.TransformCoordinatesFromFloatsToRef(kk._x, kk._y, kk._z, ek, ik), ik
      }
      static TransformCoordinatesFromFloatsToRef(kk, ek, ik, Dk, fk) {
        const Sk = Dk.m,
          bk = kk * Sk[0] + ek * Sk[4] + ik * Sk[8] + Sk[12],
          rk = kk * Sk[1] + ek * Sk[5] + ik * Sk[9] + Sk[13],
          Pk = kk * Sk[2] + ek * Sk[6] + ik * Sk[10] + Sk[14],
          mk = kk * Sk[3] + ek * Sk[7] + ik * Sk[11] + Sk[15];
        return fk.x = bk, fk.y = rk, fk.z = Pk, fk.w = mk, fk
      }
      static TransformNormal(kk, ek) {
        return nk.TransformNormalToRef(kk, ek, new nk)
      }
      static TransformNormalToRef(kk, ek, ik) {
        const Dk = ek.m,
          fk = kk.x * Dk[0] + kk.y * Dk[4] + kk.z * Dk[8],
          Sk = kk.x * Dk[1] + kk.y * Dk[5] + kk.z * Dk[9],
          bk = kk.x * Dk[2] + kk.y * Dk[6] + kk.z * Dk[10];
        return ik.x = fk, ik.y = Sk, ik.z = bk, ik.w = kk.w, ik
      }
      static TransformNormalFromFloatsToRef(kk, ek, ik, Dk, fk, Sk) {
        const bk = fk.m;
        return Sk.x = kk * bk[0] + ek * bk[4] + ik * bk[8], Sk.y = kk * bk[1] + ek * bk[5] + ik * bk[9], Sk.z = kk * bk[2] + ek * bk[6] + ik * bk[10], Sk.w = Dk, Sk
      }
      static FromVector3(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new nk(kk._x, kk._y, kk._z, ek)
      }
      static Dot(kk, ek) {
        return kk.x * ek.x + kk.y * ek.y + kk.z * ek.z + kk.w * ek.w
      }
    }
    nk._V8PerformanceHack = new nk(.5, .5, .5, .5), nk._ZeroReadOnly = nk.Zero();
    class Uk {
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
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Dk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = kk, this._y = ek, this._z = ik, this._w = Dk
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let kk = Mk(this._x);
        return kk = 397 * kk ^ Mk(this._y), kk = 397 * kk ^ Mk(this._z), kk = 397 * kk ^ Mk(this._w), kk
      }
      Tik() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return kk[ek] = this._x, kk[ek + 1] = this._y, kk[ek + 2] = this._z, kk[ek + 3] = this._w, this
      }
      zek(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Uk.FromArrayToRef(kk, ek, this)
      }
      equals(kk) {
        return kk && this._x === kk._x && this._y === kk._y && this._z === kk._z && this._w === kk._w
      }
      equalsWithEpsilon(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dk.d;
        return kk && (0, rk.WithinEpsilon)(this._x, kk._x, ek) && (0, rk.WithinEpsilon)(this._y, kk._y, ek) && (0, rk.WithinEpsilon)(this._z, kk._z, ek) && (0, rk.WithinEpsilon)(this._w, kk._w, ek)
      }
      isApprox(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dk.d;
        return kk && ((0, rk.WithinEpsilon)(this._x, kk._x, ek) && (0, rk.WithinEpsilon)(this._y, kk._y, ek) && (0, rk.WithinEpsilon)(this._z, kk._z, ek) && (0, rk.WithinEpsilon)(this._w, kk._w, ek) || (0, rk.WithinEpsilon)(this._x, -kk._x, ek) && (0, rk.WithinEpsilon)(this._y, -kk._y, ek) && (0, rk.WithinEpsilon)(this._z, -kk._z, ek) && (0, rk.WithinEpsilon)(this._w, -kk._w, ek))
      }
      clone() {
        return new Uk(this._x, this._y, this._z, this._w)
      }
      Fs(kk) {
        return this._x = kk._x, this._y = kk._y, this._z = kk._z, this._w = kk._w, this._isDirty = !0, this
      }
      Z6(kk, ek, ik, Dk) {
        return this._x = kk, this._y = ek, this._z = ik, this._w = Dk, this._isDirty = !0, this
      }
      set(kk, ek, ik, Dk) {
        return this.Z6(kk, ek, ik, Dk)
      }
      A_(kk) {
        return this.Z6(kk, kk, kk, kk)
      }
      add(kk) {
        return new Uk(this._x + kk._x, this._y + kk._y, this._z + kk._z, this._w + kk._w)
      }
      addInPlace(kk) {
        return this._x += kk._x, this._y += kk._y, this._z += kk._z, this._w += kk._w, this._isDirty = !0, this
      }
      addToRef(kk, ek) {
        return ek._x = this._x + kk._x, ek._y = this._y + kk._y, ek._z = this._z + kk._z, ek._w = this._w + kk._w, ek._isDirty = !0, ek
      }
      addInPlaceFromFloats(kk, ek, ik, Dk) {
        return this._x += kk, this._y += ek, this._z += ik, this._w += Dk, this._isDirty = !0, this
      }
      subtractToRef(kk, ek) {
        return ek._x = this._x - kk._x, ek._y = this._y - kk._y, ek._z = this._z - kk._z, ek._w = this._w - kk._w, ek._isDirty = !0, ek
      }
      subtractFromFloats(kk, ek, ik, Dk) {
        return this.subtractFromFloatsToRef(kk, ek, ik, Dk, new Uk)
      }
      subtractFromFloatsToRef(kk, ek, ik, Dk, fk) {
        return fk._x = this._x - kk, fk._y = this._y - ek, fk._z = this._z - ik, fk._w = this._w - Dk, fk._isDirty = !0, fk
      }
      subtract(kk) {
        return new Uk(this._x - kk._x, this._y - kk._y, this._z - kk._z, this._w - kk._w)
      }
      KDk(kk) {
        return this._x -= kk._x, this._y -= kk._y, this._z -= kk._z, this._w -= kk._w, this._isDirty = !0, this
      }
      scale(kk) {
        return new Uk(this._x * kk, this._y * kk, this._z * kk, this._w * kk)
      }
      scaleToRef(kk, ek) {
        return ek._x = this._x * kk, ek._y = this._y * kk, ek._z = this._z * kk, ek._w = this._w * kk, ek._isDirty = !0, ek
      }
      scaleInPlace(kk) {
        return this._x *= kk, this._y *= kk, this._z *= kk, this._w *= kk, this._isDirty = !0, this
      }
      scaleAndAddToRef(kk, ek) {
        return ek._x += this._x * kk, ek._y += this._y * kk, ek._z += this._z * kk, ek._w += this._w * kk, ek._isDirty = !0, ek
      }
      multiply(kk) {
        const ek = new Uk(0, 0, 0, 1);
        return this.multiplyToRef(kk, ek), ek
      }
      multiplyToRef(kk, ek) {
        const ik = this._x * kk._w + this._y * kk._z - this._z * kk._y + this._w * kk._x,
          Dk = -this._x * kk._z + this._y * kk._w + this._z * kk._x + this._w * kk._y,
          fk = this._x * kk._y - this._y * kk._x + this._z * kk._w + this._w * kk._z,
          Sk = -this._x * kk._x - this._y * kk._y - this._z * kk._z + this._w * kk._w;
        return ek.Z6(ik, Dk, fk, Sk), ek
      }
      multiplyInPlace(kk) {
        return this.multiplyToRef(kk, this)
      }
      multiplyByFloats(kk, ek, ik, Dk) {
        return this._x *= kk, this._y *= ek, this._z *= ik, this._w *= Dk, this._isDirty = !0, this
      }
      divide(kk) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(kk, ek) {
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
      ge() {
        return this.negateToRef(new Uk)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(kk) {
        return kk._x = -this._x, kk._y = -this._y, kk._z = -this._z, kk._w = -this._w, kk._isDirty = !0, kk
      }
      Hbk(kk, ek, ik, Dk) {
        return this._x === kk && this._y === ek && this._z === ik && this._w === Dk
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
        return kk.Z6(-this._x, -this._y, -this._z, this._w), kk
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new Uk(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const kk = this.conjugate(),
          ek = this.lengthSquared();
        return 0 == ek || 1 == ek || kk.scaleInPlace(1 / ek), kk
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
        const kk = new Uk(0, 0, 0, 1);
        return this.normalizeToRef(kk), kk
      }
      normalizeToRef(kk) {
        const ek = this.length();
        return 0 === ek || 1 === ek ? kk.Z6(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / ek, kk)
      }
      toEulerAngles() {
        const kk = xk.Zero();
        return this.toEulerAnglesToRef(kk), kk
      }
      toEulerAnglesToRef(kk) {
        const ek = this._z,
          ik = this._x,
          Dk = this._y,
          fk = this._w,
          Sk = Dk * ek - ik * fk,
          bk = .4999999;
        if (Sk < -bk) kk._y = 2 * Math.atan2(Dk, fk), kk._x = Math.PI / 2, kk._z = 0, kk._isDirty = !0;
        else if (Sk > bk) kk._y = 2 * Math.atan2(Dk, fk), kk._x = -Math.PI / 2, kk._z = 0, kk._isDirty = !0;
        else {
          const bk = fk * fk,
            rk = ek * ek,
            Pk = ik * ik,
            mk = Dk * Dk;
          kk._z = Math.atan2(2 * (ik * Dk + ek * fk), -rk - Pk + mk + bk), kk._x = Math.asin(-2 * Sk), kk._y = Math.atan2(2 * (ek * ik + Dk * fk), rk - Pk - mk + bk), kk._isDirty = !0
        }
        return kk
      }
      toAlphaBetaGammaToRef(kk) {
        const ek = this._z,
          ik = this._x,
          Dk = this._y,
          fk = this._w,
          Sk = Math.sqrt(ik * ik + Dk * Dk),
          bk = Math.sqrt(ek * ek + fk * fk),
          rk = 2 * Math.atan2(Sk, bk),
          Pk = 2 * Math.atan2(ek, fk),
          mk = 2 * Math.atan2(Dk, ik),
          Mk = (Pk + mk) / 2,
          Kk = (Pk - mk) / 2;
        return kk.set(Kk, rk, Mk), kk
      }
      toRotationMatrix(kk) {
        return Hk.FromQuaternionToRef(this, kk), kk
      }
      fromRotationMatrix(kk) {
        return Uk.FromRotationMatrixToRef(kk, this), this
      }
      dot(kk) {
        return this._x * kk._x + this._y * kk._y + this._z * kk._z + this._w * kk._w
      }
      toAxisAngle() {
        const kk = xk.Zero();
        return {
          axis: kk,
          angle: this.toAxisAngleToRef(kk)
        }
      }
      toAxisAngleToRef(kk) {
        let ek;
        const ik = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          Dk = this._w;
        return ik > 0 ? (ek = 2 * Math.atan2(ik, Dk), kk.set(this._x / ik, this._y / ik, this._z / ik)) : (ek = 0, kk.set(1, 0, 0)), ek
      }
      static FromRotationMatrix(kk) {
        const ek = new Uk;
        return Uk.FromRotationMatrixToRef(kk, ek), ek
      }
      static FromRotationMatrixToRef(kk, ek) {
        const ik = kk.m,
          Dk = ik[0],
          fk = ik[4],
          Sk = ik[8],
          bk = ik[1],
          rk = ik[5],
          Pk = ik[9],
          mk = ik[2],
          Mk = ik[6],
          Kk = ik[10],
          xk = Dk + rk + Kk;
        let nk;
        return xk > 0 ? (nk = .5 / Math.sqrt(xk + 1), ek._w = .25 / nk, ek._x = (Mk - Pk) * nk, ek._y = (Sk - mk) * nk, ek._z = (bk - fk) * nk, ek._isDirty = !0) : Dk > rk && Dk > Kk ? (nk = 2 * Math.sqrt(1 + Dk - rk - Kk), ek._w = (Mk - Pk) / nk, ek._x = .25 * nk, ek._y = (fk + bk) / nk, ek._z = (Sk + mk) / nk, ek._isDirty = !0) : rk > Kk ? (nk = 2 * Math.sqrt(1 + rk - Dk - Kk), ek._w = (Sk - mk) / nk, ek._x = (fk + bk) / nk, ek._y = .25 * nk, ek._z = (Pk + Mk) / nk, ek._isDirty = !0) : (nk = 2 * Math.sqrt(1 + Kk - Dk - rk), ek._w = (bk - fk) / nk, ek._x = (Sk + mk) / nk, ek._y = (Pk + Mk) / nk, ek._z = .25 * nk, ek._isDirty = !0), ek
      }
      static Dot(kk, ek) {
        return kk._x * ek._x + kk._y * ek._y + kk._z * ek._z + kk._w * ek._w
      }
      static AreClose(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const Dk = Uk.Dot(kk, ek);
        return 1 - Dk * Dk <= ik
      }
      static SmoothToRef(kk, ek, ik, Dk, fk) {
        let Sk = 0 === Dk ? 1 : ik / Dk;
        return Sk = (0, rk.Clamp)(Sk, 0, 1), Uk.SlerpToRef(kk, ek, Sk, fk), fk
      }
      static Zero() {
        return new Uk(0, 0, 0, 0)
      }
      static Inverse(kk) {
        return new Uk(-kk._x, -kk._y, -kk._z, kk._w)
      }
      static InverseToRef(kk, ek) {
        return ek.set(-kk._x, -kk._y, -kk._z, kk._w), ek
      }
      static Identity() {
        return new Uk(0, 0, 0, 1)
      }
      static IsIdentity(kk) {
        return kk && 0 === kk._x && 0 === kk._y && 0 === kk._z && 1 === kk._w
      }
      static RotationAxis(kk, ek) {
        return Uk.RotationAxisToRef(kk, ek, new Uk)
      }
      static RotationAxisToRef(kk, ek, ik) {
        ik._w = Math.cos(ek / 2);
        const Dk = Math.sin(ek / 2) / kk.length();
        return ik._x = kk._x * Dk, ik._y = kk._y * Dk, ik._z = kk._z * Dk, ik._isDirty = !0, ik
      }
      static FromArray(kk, ek) {
        return ek || (ek = 0), new Uk(kk[ek], kk[ek + 1], kk[ek + 2], kk[ek + 3])
      }
      static FromArrayToRef(kk, ek, ik) {
        return ik._x = kk[ek], ik._y = kk[ek + 1], ik._z = kk[ek + 2], ik._w = kk[ek + 3], ik._isDirty = !0, ik
      }
      static FromFloatsToRef(kk, ek, ik, Dk, fk) {
        return fk.Z6(kk, ek, ik, Dk), fk
      }
      static FromEulerAngles(kk, ek, ik) {
        const Dk = new Uk;
        return Uk.RotationYawPitchRollToRef(ek, kk, ik, Dk), Dk
      }
      static FromEulerAnglesToRef(kk, ek, ik, Dk) {
        return Uk.RotationYawPitchRollToRef(ek, kk, ik, Dk), Dk
      }
      static FromEulerVector(kk) {
        const ek = new Uk;
        return Uk.RotationYawPitchRollToRef(kk._y, kk._x, kk._z, ek), ek
      }
      static FromEulerVectorToRef(kk, ek) {
        return Uk.RotationYawPitchRollToRef(kk._y, kk._x, kk._z, ek), ek
      }
      static FromUnitVectorsToRef(kk, ek, ik) {
        let fk = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Dk.d;
        const Sk = xk.Dot(kk, ek) + 1;
        return Sk < fk ? Math.abs(kk.x) > Math.abs(kk.z) ? ik.set(-kk.y, kk.x, 0, 0) : ik.set(0, -kk.z, kk.y, 0) : (xk.CrossToRef(kk, ek, lk.eH[0]), ik.set(lk.eH[0].x, lk.eH[0].y, lk.eH[0].z, Sk)), ik.normalize()
      }
      static RotationYawPitchRoll(kk, ek, ik) {
        const Dk = new Uk;
        return Uk.RotationYawPitchRollToRef(kk, ek, ik, Dk), Dk
      }
      static RotationYawPitchRollToRef(kk, ek, ik, Dk) {
        const fk = .5 * ik,
          Sk = .5 * ek,
          bk = .5 * kk,
          rk = Math.sin(fk),
          Pk = Math.cos(fk),
          mk = Math.sin(Sk),
          Mk = Math.cos(Sk),
          Kk = Math.sin(bk),
          xk = Math.cos(bk);
        return Dk._x = xk * mk * Pk + Kk * Mk * rk, Dk._y = Kk * Mk * Pk - xk * mk * rk, Dk._z = xk * Mk * rk - Kk * mk * Pk, Dk._w = xk * Mk * Pk + Kk * mk * rk, Dk._isDirty = !0, Dk
      }
      static RotationAlphaBetaGamma(kk, ek, ik) {
        const Dk = new Uk;
        return Uk.RotationAlphaBetaGammaToRef(kk, ek, ik, Dk), Dk
      }
      static RotationAlphaBetaGammaToRef(kk, ek, ik, Dk) {
        const fk = .5 * (ik + kk),
          Sk = .5 * (ik - kk),
          bk = .5 * ek;
        return Dk._x = Math.cos(Sk) * Math.sin(bk), Dk._y = Math.sin(Sk) * Math.sin(bk), Dk._z = Math.sin(fk) * Math.cos(bk), Dk._w = Math.cos(fk) * Math.cos(bk), Dk._isDirty = !0, Dk
      }
      static RotationQuaternionFromAxis(kk, ek, ik) {
        const Dk = new Uk(0, 0, 0, 0);
        return Uk.RotationQuaternionFromAxisToRef(kk, ek, ik, Dk), Dk
      }
      static RotationQuaternionFromAxisToRef(kk, ek, ik, Dk) {
        const fk = wk.Matrix[0];
        return kk = kk.normalizeToRef(wk.eH[0]), ek = ek.normalizeToRef(wk.eH[1]), ik = ik.normalizeToRef(wk.eH[2]), Hk.FromXYZAxesToRef(kk, ek, ik, fk), Uk.FromRotationMatrixToRef(fk, Dk), Dk
      }
      static FromLookDirectionLH(kk, ek) {
        const ik = new Uk;
        return Uk.FromLookDirectionLHToRef(kk, ek, ik), ik
      }
      static FromLookDirectionLHToRef(kk, ek, ik) {
        const Dk = wk.Matrix[0];
        return Hk.LookDirectionLHToRef(kk, ek, Dk), Uk.FromRotationMatrixToRef(Dk, ik), ik
      }
      static FromLookDirectionRH(kk, ek) {
        const ik = new Uk;
        return Uk.FromLookDirectionRHToRef(kk, ek, ik), ik
      }
      static FromLookDirectionRHToRef(kk, ek, ik) {
        const Dk = wk.Matrix[0];
        return Hk.LookDirectionRHToRef(kk, ek, Dk), Uk.FromRotationMatrixToRef(Dk, ik)
      }
      static Slerp(kk, ek, ik) {
        const Dk = Uk.Identity();
        return Uk.SlerpToRef(kk, ek, ik, Dk), Dk
      }
      static SlerpToRef(kk, ek, ik, Dk) {
        let fk, Sk, bk = kk._x * ek._x + kk._y * ek._y + kk._z * ek._z + kk._w * ek._w,
          rk = !1;
        if (bk < 0 && (rk = !0, bk = -bk), bk > .999999) Sk = 1 - ik, fk = rk ? -ik : ik;
        else {
          const kk = Math.acos(bk),
            ek = 1 / Math.sin(kk);
          Sk = Math.sin((1 - ik) * kk) * ek, fk = rk ? -Math.sin(ik * kk) * ek : Math.sin(ik * kk) * ek
        }
        return Dk._x = Sk * kk._x + fk * ek._x, Dk._y = Sk * kk._y + fk * ek._y, Dk._z = Sk * kk._z + fk * ek._z, Dk._w = Sk * kk._w + fk * ek._w, Dk._isDirty = !0, Dk
      }
      static Hermite(kk, ek, ik, Dk, fk) {
        const Sk = fk * fk,
          bk = fk * Sk,
          rk = 2 * bk - 3 * Sk + 1,
          Pk = -2 * bk + 3 * Sk,
          mk = bk - 2 * Sk + fk,
          Mk = bk - Sk,
          Kk = kk._x * rk + ik._x * Pk + ek._x * mk + Dk._x * Mk,
          xk = kk._y * rk + ik._y * Pk + ek._y * mk + Dk._y * Mk,
          nk = kk._z * rk + ik._z * Pk + ek._z * mk + Dk._z * Mk,
          Hk = kk._w * rk + ik._w * Pk + ek._w * mk + Dk._w * Mk;
        return new Uk(Kk, xk, nk, Hk)
      }
      static Hermite1stDerivative(kk, ek, ik, Dk, fk) {
        const Sk = new Uk;
        return this.Hermite1stDerivativeToRef(kk, ek, ik, Dk, fk, Sk), Sk
      }
      static Hermite1stDerivativeToRef(kk, ek, ik, Dk, fk, Sk) {
        const bk = fk * fk;
        return Sk._x = 6 * (bk - fk) * kk._x + (3 * bk - 4 * fk + 1) * ek._x + 6 * (-bk + fk) * ik._x + (3 * bk - 2 * fk) * Dk._x, Sk._y = 6 * (bk - fk) * kk._y + (3 * bk - 4 * fk + 1) * ek._y + 6 * (-bk + fk) * ik._y + (3 * bk - 2 * fk) * Dk._y, Sk._z = 6 * (bk - fk) * kk._z + (3 * bk - 4 * fk + 1) * ek._z + 6 * (-bk + fk) * ik._z + (3 * bk - 2 * fk) * Dk._z, Sk._w = 6 * (bk - fk) * kk._w + (3 * bk - 4 * fk + 1) * ek._w + 6 * (-bk + fk) * ik._w + (3 * bk - 2 * fk) * Dk._w, Sk._isDirty = !0, Sk
      }
      static Normalize(kk) {
        const ek = Uk.Zero();
        return Uk.NormalizeToRef(kk, ek), ek
      }
      static NormalizeToRef(kk, ek) {
        return kk.normalizeToRef(ek), ek
      }
      static Clamp(kk, ek, ik) {
        const Dk = new Uk;
        return Uk.ClampToRef(kk, ek, ik, Dk), Dk
      }
      static ClampToRef(kk, ek, ik, Dk) {
        return Dk.Z6((0, rk.Clamp)(kk.x, ek.x, ik.x), (0, rk.Clamp)(kk.y, ek.y, ik.y), (0, rk.Clamp)(kk.z, ek.z, ik.z), (0, rk.Clamp)(kk.w, ek.w, ik.w))
      }
      static Random() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Uk((0, rk.RandomRange)(kk, ek), (0, rk.RandomRange)(kk, ek), (0, rk.RandomRange)(kk, ek), (0, rk.RandomRange)(kk, ek))
      }
      static RandomToRef() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).Z6((0, rk.RandomRange)(kk, ek), (0, rk.RandomRange)(kk, ek), (0, rk.RandomRange)(kk, ek), (0, rk.RandomRange)(kk, ek))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(kk, ek) {
        return Math.sqrt(Uk.DistanceSquared(kk, ek))
      }
      static DistanceSquared(kk, ek) {
        const ik = kk.x - ek.x,
          Dk = kk.y - ek.y,
          fk = kk.z - ek.z,
          Sk = kk.w - ek.w;
        return ik * ik + Dk * Dk + fk * fk + Sk * Sk
      }
      static Center(kk, ek) {
        return Uk.CenterToRef(kk, ek, Uk.Zero())
      }
      static CenterToRef(kk, ek, ik) {
        return ik.Z6((kk.x + ek.x) / 2, (kk.y + ek.y) / 2, (kk.z + ek.z) / 2, (kk.w + ek.w) / 2)
      }
    }
    Uk._V8PerformanceHack = new Uk(.5, .5, .5, .5);
    class Hk {
      static get Use64Bits() {
        return Sk.c.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = Pk.n._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Dk = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = kk, this._isIdentity3x2 = kk || ik, this._isIdentityDirty = !this._isIdentity && ek, this._isIdentity3x2Dirty = !this._isIdentity3x2 && Dk
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, Sk.c.MatrixTrackPrecisionChange && Sk.c.MatrixTrackedMatrices.push(this), this._m = new Sk.c.MatrixCurrentType(16), this.markAsUpdated()
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
          ek = kk[0],
          ik = kk[1],
          Dk = kk[2],
          fk = kk[3],
          Sk = kk[4],
          bk = kk[5],
          rk = kk[6],
          Pk = kk[7],
          mk = kk[8],
          Mk = kk[9],
          Kk = kk[10],
          xk = kk[11],
          nk = kk[12],
          Uk = kk[13],
          Hk = kk[14],
          wk = kk[15],
          lk = Kk * wk - Hk * xk,
          pk = Mk * wk - Uk * xk,
          yk = Mk * Hk - Uk * Kk,
          Yk = mk * wk - nk * xk,
          Lk = mk * Hk - Kk * nk,
          Ck = mk * Uk - nk * Mk;
        return ek * +(bk * lk - rk * pk + Pk * yk) + ik * -(Sk * lk - rk * Yk + Pk * Lk) + Dk * +(Sk * pk - bk * Yk + Pk * Ck) + fk * -(Sk * yk - bk * Lk + rk * Ck)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!kk) return this._m;
        const ik = this._m;
        for (let Dk = 0; Dk < 16; Dk++) kk[ek + Dk] = ik[Dk];
        return this
      }
      Tik() {
        return this._m
      }
      zek(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Hk.FromArrayToRef(kk, ek, this)
      }
      Z6() {
        for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
        return Hk.FromArrayToRef(ek, 0, this)
      }
      set() {
        const kk = this._m;
        for (let ek = 0; ek < 16; ek++) kk[ek] = ek < 0 || arguments.length <= ek ? void 0 : arguments[ek];
        return this.markAsUpdated(), this
      }
      A_(kk) {
        const ek = this._m;
        for (let ik = 0; ik < 16; ik++) ek[ik] = kk;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return Hk.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(kk) {
        const ek = new Hk;
        return this.addToRef(kk, ek), ek
      }
      addToRef(kk, ek) {
        const ik = this._m,
          Dk = ek._m,
          fk = kk.m;
        for (let Sk = 0; Sk < 16; Sk++) Dk[Sk] = ik[Sk] + fk[Sk];
        return ek.markAsUpdated(), ek
      }
      addToSelf(kk) {
        const ek = this._m,
          ik = kk.m;
        return ek[0] += ik[0], ek[1] += ik[1], ek[2] += ik[2], ek[3] += ik[3], ek[4] += ik[4], ek[5] += ik[5], ek[6] += ik[6], ek[7] += ik[7], ek[8] += ik[8], ek[9] += ik[9], ek[10] += ik[10], ek[11] += ik[11], ek[12] += ik[12], ek[13] += ik[13], ek[14] += ik[14], ek[15] += ik[15], this.markAsUpdated(), this
      }
      addInPlace(kk) {
        const ek = this._m,
          ik = kk.m;
        for (let Dk = 0; Dk < 16; Dk++) ek[Dk] += ik[Dk];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const kk = this._m;
        for (let ek = 0; ek < 16; ek++) kk[ek] += ek < 0 || arguments.length <= ek ? void 0 : arguments[ek];
        return this.markAsUpdated(), this
      }
      subtract(kk) {
        const ek = this._m,
          ik = kk.m;
        for (let Dk = 0; Dk < 16; Dk++) ek[Dk] -= ik[Dk];
        return this.markAsUpdated(), this
      }
      subtractToRef(kk, ek) {
        const ik = this._m,
          Dk = kk.m,
          fk = ek._m;
        for (let Sk = 0; Sk < 16; Sk++) fk[Sk] = ik[Sk] - Dk[Sk];
        return ek.markAsUpdated(), ek
      }
      KDk(kk) {
        const ek = this._m,
          ik = kk.m;
        for (let Dk = 0; Dk < 16; Dk++) ek[Dk] -= ik[Dk];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
        return this.subtractFromFloatsToRef(...ek, new Hk)
      }
      subtractFromFloatsToRef() {
        for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
        const Dk = ek.pop(),
          fk = this._m,
          Sk = Dk._m,
          bk = ek;
        for (let rk = 0; rk < 16; rk++) Sk[rk] = fk[rk] - bk[rk];
        return Dk.markAsUpdated(), Dk
      }
      invertToRef(kk) {
        return !0 === this._isIdentity ? (Hk.IdentityToRef(kk), kk) : ((0, Pk.f)(this, kk.Tik()) ? kk.markAsUpdated() : kk.Fs(this), kk)
      }
      addAtIndex(kk, ek) {
        return this._m[kk] += ek, this.markAsUpdated(), this
      }
      multiplyAtIndex(kk, ek) {
        return this._m[kk] *= ek, this.markAsUpdated(), this
      }
      setTranslationFromFloats(kk, ek, ik) {
        return this._m[12] = kk, this._m[13] = ek, this._m[14] = ik, this.markAsUpdated(), this
      }
      addTranslationFromFloats(kk, ek, ik) {
        return this._m[12] += kk, this._m[13] += ek, this._m[14] += ik, this.markAsUpdated(), this
      }
      setTranslation(kk) {
        return this.setTranslationFromFloats(kk._x, kk._y, kk._z)
      }
      getTranslation() {
        return new xk(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(kk) {
        return kk.x = this._m[12], kk.y = this._m[13], kk.z = this._m[14], kk
      }
      removeRotationAndScaling() {
        const kk = this.m;
        return Hk.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, kk[12], kk[13], kk[14], kk[15], this), this._updateIdentityStatus(0 === kk[12] && 0 === kk[13] && 0 === kk[14] && 1 === kk[15]), this
      }
      Fs(kk) {
        kk.copyToArray(this._m);
        const ek = kk;
        return this.updateFlag = ek.updateFlag, this._updateIdentityStatus(ek._isIdentity, ek._isIdentityDirty, ek._isIdentity3x2, ek._isIdentity3x2Dirty), this
      }
      copyToArray(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, Pk.b)(this, kk, ek), this
      }
      multiply(kk) {
        const ek = new Hk;
        return this.multiplyToRef(kk, ek), ek
      }
      multiplyInPlace(kk) {
        const ek = this._m,
          ik = kk.m;
        for (let Dk = 0; Dk < 16; Dk++) ek[Dk] *= ik[Dk];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const kk = this._m;
        for (let ek = 0; ek < 16; ek++) kk[ek] *= ek < 0 || arguments.length <= ek ? void 0 : arguments[ek];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var kk = arguments.length, ek = new Array(kk), ik = 0; ik < kk; ik++) ek[ik] = arguments[ik];
        const Dk = ek.pop(),
          fk = this._m,
          Sk = Dk._m,
          bk = ek;
        for (let rk = 0; rk < 16; rk++) Sk[rk] = fk[rk] * bk[rk];
        return Dk.markAsUpdated(), Dk
      }
      multiplyToRef(kk, ek) {
        return this._isIdentity ? (ek.Fs(kk), ek) : kk._isIdentity ? (ek.Fs(this), ek) : (this.multiplyToArray(kk, ek._m, 0), ek.markAsUpdated(), ek)
      }
      multiplyToArray(kk, ek, ik) {
        return (0, Pk.o)(this, kk, ek, ik), this
      }
      divide(kk) {
        return this.divideToRef(kk, new Hk)
      }
      divideToRef(kk, ek) {
        const ik = this._m,
          Dk = kk.m,
          fk = ek._m;
        for (let Sk = 0; Sk < 16; Sk++) fk[Sk] = ik[Sk] / Dk[Sk];
        return ek.markAsUpdated(), ek
      }
      divideInPlace(kk) {
        const ek = this._m,
          ik = kk.m;
        for (let Dk = 0; Dk < 16; Dk++) ek[Dk] /= ik[Dk];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(kk) {
        const ek = this._m,
          ik = kk.m;
        for (let Dk = 0; Dk < 16; Dk++) ek[Dk] = Math.min(ek[Dk], ik[Dk]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const kk = this._m;
        for (let ek = 0; ek < 16; ek++) kk[ek] = Math.min(kk[ek], ek < 0 || arguments.length <= ek ? void 0 : arguments[ek]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(kk) {
        const ek = this._m,
          ik = kk.m;
        for (let Dk = 0; Dk < 16; Dk++) ek[Dk] = Math.max(ek[Dk], ik[Dk]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const kk = this._m;
        for (let ek = 0; ek < 16; ek++) kk[ek] = Math.max(kk[ek], ek < 0 || arguments.length <= ek ? void 0 : arguments[ek]);
        return this.markAsUpdated(), this
      }
      ge() {
        return this.negateToRef(new Hk)
      }
      negateInPlace() {
        const kk = this._m;
        for (let ek = 0; ek < 16; ek++) kk[ek] = -kk[ek];
        return this.markAsUpdated(), this
      }
      negateToRef(kk) {
        const ek = this._m,
          ik = kk._m;
        for (let Dk = 0; Dk < 16; Dk++) ik[Dk] = -ek[Dk];
        return kk.markAsUpdated(), kk
      }
      equals(kk) {
        const ek = kk;
        if (!ek) return !1;
        if ((this._isIdentity || ek._isIdentity) && !this._isIdentityDirty && !ek._isIdentityDirty) return this._isIdentity && ek._isIdentity;
        const ik = this.m,
          Dk = ek.m;
        return ik[0] === Dk[0] && ik[1] === Dk[1] && ik[2] === Dk[2] && ik[3] === Dk[3] && ik[4] === Dk[4] && ik[5] === Dk[5] && ik[6] === Dk[6] && ik[7] === Dk[7] && ik[8] === Dk[8] && ik[9] === Dk[9] && ik[10] === Dk[10] && ik[11] === Dk[11] && ik[12] === Dk[12] && ik[13] === Dk[13] && ik[14] === Dk[14] && ik[15] === Dk[15]
      }
      equalsWithEpsilon(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ik = this._m,
          Dk = kk.m;
        for (let fk = 0; fk < 16; fk++)
          if (!(0, rk.WithinEpsilon)(ik[fk], Dk[fk], ek)) return !1;
        return !0
      }
      Hbk() {
        const kk = this._m;
        for (let ek = 0; ek < 16; ek++)
          if (kk[ek] != (ek < 0 || arguments.length <= ek ? void 0 : arguments[ek])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new Hk)
      }
      floorToRef(kk) {
        const ek = this._m,
          ik = kk._m;
        for (let Dk = 0; Dk < 16; Dk++) ik[Dk] = Math.floor(ek[Dk]);
        return kk.markAsUpdated(), kk
      }
      fract() {
        return this.fractToRef(new Hk)
      }
      fractToRef(kk) {
        const ek = this._m,
          ik = kk._m;
        for (let Dk = 0; Dk < 16; Dk++) ik[Dk] = ek[Dk] - Math.floor(ek[Dk]);
        return kk.markAsUpdated(), kk
      }
      clone() {
        const kk = new Hk;
        return kk.Fs(this), kk
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let kk = Mk(this._m[0]);
        for (let ek = 1; ek < 16; ek++) kk = 397 * kk ^ Mk(this._m[ek]);
        return kk
      }
      decomposeToTransformNode(kk) {
        return kk.rotationQuaternion = kk.rotationQuaternion || new Uk, this.decompose(kk.wi, kk.rotationQuaternion, kk.position)
      }
      decompose(kk, ek, ik, Dk) {
        let fk = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return ik && ik.A_(0), kk && kk.A_(1), ek && ek.Z6(0, 0, 0, 1), !0;
        const Sk = this._m;
        if (ik && ik.Z6(Sk[12], Sk[13], Sk[14]), (kk = kk || wk.eH[0]).x = Math.sqrt(Sk[0] * Sk[0] + Sk[1] * Sk[1] + Sk[2] * Sk[2]), kk.y = Math.sqrt(Sk[4] * Sk[4] + Sk[5] * Sk[5] + Sk[6] * Sk[6]), kk.z = Math.sqrt(Sk[8] * Sk[8] + Sk[9] * Sk[9] + Sk[10] * Sk[10]), Dk) {
          const ek = (fk ? Dk.absoluteScaling.x : Dk.wi.x) < 0 ? -1 : 1,
            ik = (fk ? Dk.absoluteScaling.y : Dk.wi.y) < 0 ? -1 : 1,
            Sk = (fk ? Dk.absoluteScaling.z : Dk.wi.z) < 0 ? -1 : 1;
          kk.x *= ek, kk.y *= ik, kk.z *= Sk
        } else this.determinant() <= 0 && (kk.y *= -1);
        if (0 === kk._x || 0 === kk._y || 0 === kk._z) return ek && ek.Z6(0, 0, 0, 1), !1;
        if (ek) {
          const ik = 1 / kk._x,
            Dk = 1 / kk._y,
            fk = 1 / kk._z;
          Hk.FromValuesToRef(Sk[0] * ik, Sk[1] * ik, Sk[2] * ik, 0, Sk[4] * Dk, Sk[5] * Dk, Sk[6] * Dk, 0, Sk[8] * fk, Sk[9] * fk, Sk[10] * fk, 0, 0, 0, 0, 1, wk.Matrix[0]), Uk.FromRotationMatrixToRef(wk.Matrix[0], ek)
        }
        return !0
      }
      getRow(kk) {
        if (kk < 0 || kk > 3) return null;
        const ek = 4 * kk;
        return new nk(this._m[ek + 0], this._m[ek + 1], this._m[ek + 2], this._m[ek + 3])
      }
      getRowToRef(kk, ek) {
        if (kk >= 0 && kk <= 3) {
          const ik = 4 * kk;
          ek.x = this._m[ik + 0], ek.y = this._m[ik + 1], ek.z = this._m[ik + 2], ek.w = this._m[ik + 3]
        }
        return ek
      }
      setRow(kk, ek) {
        return this.setRowFromFloats(kk, ek.x, ek.y, ek.z, ek.w)
      }
      transpose() {
        const kk = new Hk;
        return Hk.TransposeToRef(this, kk), kk
      }
      transposeToRef(kk) {
        return Hk.TransposeToRef(this, kk), kk
      }
      setRowFromFloats(kk, ek, ik, Dk, fk) {
        if (kk < 0 || kk > 3) return this;
        const Sk = 4 * kk;
        return this._m[Sk + 0] = ek, this._m[Sk + 1] = ik, this._m[Sk + 2] = Dk, this._m[Sk + 3] = fk, this.markAsUpdated(), this
      }
      scale(kk) {
        const ek = new Hk;
        return this.scaleToRef(kk, ek), ek
      }
      scaleToRef(kk, ek) {
        for (let ik = 0; ik < 16; ik++) ek._m[ik] = this._m[ik] * kk;
        return ek.markAsUpdated(), ek
      }
      scaleAndAddToRef(kk, ek) {
        for (let ik = 0; ik < 16; ik++) ek._m[ik] += this._m[ik] * kk;
        return ek.markAsUpdated(), ek
      }
      scaleInPlace(kk) {
        const ek = this._m;
        for (let ik = 0; ik < 16; ik++) ek[ik] *= kk;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(kk) {
        const ek = wk.Matrix[0];
        this.invertToRef(ek), ek.transposeToRef(kk);
        const ik = kk._m;
        return Hk.FromValuesToRef(ik[0], ik[1], ik[2], 0, ik[4], ik[5], ik[6], 0, ik[8], ik[9], ik[10], 0, 0, 0, 0, 1, kk), kk
      }
      getRotationMatrix() {
        const kk = new Hk;
        return this.getRotationMatrixToRef(kk), kk
      }
      getRotationMatrixToRef(kk) {
        const ek = wk.eH[0];
        if (!this.decompose(ek)) return Hk.IdentityToRef(kk), kk;
        const ik = this._m,
          Dk = 1 / ek._x,
          fk = 1 / ek._y,
          Sk = 1 / ek._z;
        return Hk.FromValuesToRef(ik[0] * Dk, ik[1] * Dk, ik[2] * Dk, 0, ik[4] * fk, ik[5] * fk, ik[6] * fk, 0, ik[8] * Sk, ik[9] * Sk, ik[10] * Sk, 0, 0, 0, 0, 1, kk), kk
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
        return this.multiplyToRef(pk, this), this
      }
      static FromArray(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const ik = new Hk;
        return Hk.FromArrayToRef(kk, ek, ik), ik
      }
      static FromArrayToRef(kk, ek, ik) {
        for (let Dk = 0; Dk < 16; Dk++) ik._m[Dk] = kk[Dk + ek];
        return ik.markAsUpdated(), ik
      }
      static FromFloat32ArrayToRefScaled(kk, ek, ik, Dk) {
        return Dk._m[0] = kk[0 + ek] * ik, Dk._m[1] = kk[1 + ek] * ik, Dk._m[2] = kk[2 + ek] * ik, Dk._m[3] = kk[3 + ek] * ik, Dk._m[4] = kk[4 + ek] * ik, Dk._m[5] = kk[5 + ek] * ik, Dk._m[6] = kk[6 + ek] * ik, Dk._m[7] = kk[7 + ek] * ik, Dk._m[8] = kk[8 + ek] * ik, Dk._m[9] = kk[9 + ek] * ik, Dk._m[10] = kk[10 + ek] * ik, Dk._m[11] = kk[11 + ek] * ik, Dk._m[12] = kk[12 + ek] * ik, Dk._m[13] = kk[13 + ek] * ik, Dk._m[14] = kk[14 + ek] * ik, Dk._m[15] = kk[15 + ek] * ik, Dk.markAsUpdated(), Dk
      }
      static get IdentityReadOnly() {
        return Hk._IdentityReadOnly
      }
      static FromValuesToRef(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, Hk, wk) {
        const lk = wk._m;
        lk[0] = kk, lk[1] = ek, lk[2] = ik, lk[3] = Dk, lk[4] = fk, lk[5] = Sk, lk[6] = bk, lk[7] = rk, lk[8] = Pk, lk[9] = mk, lk[10] = Mk, lk[11] = Kk, lk[12] = xk, lk[13] = nk, lk[14] = Uk, lk[15] = Hk, wk.markAsUpdated()
      }
      static FromValues(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk, Kk, xk, nk, Uk, wk) {
        const lk = new Hk,
          pk = lk._m;
        return pk[0] = kk, pk[1] = ek, pk[2] = ik, pk[3] = Dk, pk[4] = fk, pk[5] = Sk, pk[6] = bk, pk[7] = rk, pk[8] = Pk, pk[9] = mk, pk[10] = Mk, pk[11] = Kk, pk[12] = xk, pk[13] = nk, pk[14] = Uk, pk[15] = wk, lk.markAsUpdated(), lk
      }
      static Compose(kk, ek, ik) {
        const Dk = new Hk;
        return Hk.ComposeToRef(kk, ek, ik, Dk), Dk
      }
      static ComposeToRef(kk, ek, ik, Dk) {
        const fk = Dk._m,
          Sk = ek._x,
          bk = ek._y,
          rk = ek._z,
          Pk = ek._w,
          mk = Sk + Sk,
          Mk = bk + bk,
          Kk = rk + rk,
          xk = Sk * mk,
          nk = Sk * Mk,
          Uk = Sk * Kk,
          Hk = bk * Mk,
          wk = bk * Kk,
          lk = rk * Kk,
          pk = Pk * mk,
          yk = Pk * Mk,
          Yk = Pk * Kk,
          Lk = kk._x,
          Ck = kk._y,
          Ak = kk._z;
        return fk[0] = (1 - (Hk + lk)) * Lk, fk[1] = (nk + Yk) * Lk, fk[2] = (Uk - yk) * Lk, fk[3] = 0, fk[4] = (nk - Yk) * Ck, fk[5] = (1 - (xk + lk)) * Ck, fk[6] = (wk + pk) * Ck, fk[7] = 0, fk[8] = (Uk + yk) * Ak, fk[9] = (wk - pk) * Ak, fk[10] = (1 - (xk + Hk)) * Ak, fk[11] = 0, fk[12] = ik._x, fk[13] = ik._y, fk[14] = ik._z, fk[15] = 1, Dk.markAsUpdated(), Dk
      }
      static Identity() {
        const kk = Hk.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return kk._updateIdentityStatus(!0), kk
      }
      static IdentityToRef(kk) {
        return Hk.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, kk), kk._updateIdentityStatus(!0), kk
      }
      static Zero() {
        const kk = Hk.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return kk._updateIdentityStatus(!1), kk
      }
      static RotationX(kk) {
        const ek = new Hk;
        return Hk.RotationXToRef(kk, ek), ek
      }
      static Invert(kk) {
        const ek = new Hk;
        return kk.invertToRef(ek), ek
      }
      static RotationXToRef(kk, ek) {
        const ik = Math.sin(kk),
          Dk = Math.cos(kk);
        return Hk.FromValuesToRef(1, 0, 0, 0, 0, Dk, ik, 0, 0, -ik, Dk, 0, 0, 0, 0, 1, ek), ek._updateIdentityStatus(1 === Dk && 0 === ik), ek
      }
      static RotationY(kk) {
        const ek = new Hk;
        return Hk.RotationYToRef(kk, ek), ek
      }
      static RotationYToRef(kk, ek) {
        const ik = Math.sin(kk),
          Dk = Math.cos(kk);
        return Hk.FromValuesToRef(Dk, 0, -ik, 0, 0, 1, 0, 0, ik, 0, Dk, 0, 0, 0, 0, 1, ek), ek._updateIdentityStatus(1 === Dk && 0 === ik), ek
      }
      static RotationZ(kk) {
        const ek = new Hk;
        return Hk.RotationZToRef(kk, ek), ek
      }
      static RotationZToRef(kk, ek) {
        const ik = Math.sin(kk),
          Dk = Math.cos(kk);
        return Hk.FromValuesToRef(Dk, ik, 0, 0, -ik, Dk, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, ek), ek._updateIdentityStatus(1 === Dk && 0 === ik), ek
      }
      static RotationAxis(kk, ek) {
        const ik = new Hk;
        return Hk.RotationAxisToRef(kk, ek, ik), ik
      }
      static RotationAxisToRef(kk, ek, ik) {
        const Dk = Math.sin(-ek),
          fk = Math.cos(-ek),
          Sk = 1 - fk;
        kk = kk.normalizeToRef(wk.eH[0]);
        const bk = ik._m;
        return bk[0] = kk._x * kk._x * Sk + fk, bk[1] = kk._x * kk._y * Sk - kk._z * Dk, bk[2] = kk._x * kk._z * Sk + kk._y * Dk, bk[3] = 0, bk[4] = kk._y * kk._x * Sk + kk._z * Dk, bk[5] = kk._y * kk._y * Sk + fk, bk[6] = kk._y * kk._z * Sk - kk._x * Dk, bk[7] = 0, bk[8] = kk._z * kk._x * Sk - kk._y * Dk, bk[9] = kk._z * kk._y * Sk + kk._x * Dk, bk[10] = kk._z * kk._z * Sk + fk, bk[11] = 0, bk[12] = 0, bk[13] = 0, bk[14] = 0, bk[15] = 1, ik.markAsUpdated(), ik
      }
      static RotationAlignToRef(kk, ek, ik) {
        let fk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Sk = xk.Dot(ek, kk),
          bk = ik._m;
        if (Sk < -1 + Dk.d) bk[0] = -1, bk[1] = 0, bk[2] = 0, bk[3] = 0, bk[4] = 0, bk[5] = fk ? 1 : -1, bk[6] = 0, bk[7] = 0, bk[8] = 0, bk[9] = 0, bk[10] = fk ? -1 : 1, bk[11] = 0;
        else {
          const ik = xk.Cross(ek, kk),
            Dk = 1 / (1 + Sk);
          bk[0] = ik._x * ik._x * Dk + Sk, bk[1] = ik._y * ik._x * Dk - ik._z, bk[2] = ik._z * ik._x * Dk + ik._y, bk[3] = 0, bk[4] = ik._x * ik._y * Dk + ik._z, bk[5] = ik._y * ik._y * Dk + Sk, bk[6] = ik._z * ik._y * Dk - ik._x, bk[7] = 0, bk[8] = ik._x * ik._z * Dk - ik._y, bk[9] = ik._y * ik._z * Dk + ik._x, bk[10] = ik._z * ik._z * Dk + Sk, bk[11] = 0
        }
        return bk[12] = 0, bk[13] = 0, bk[14] = 0, bk[15] = 1, ik.markAsUpdated(), ik
      }
      static RotationYawPitchRoll(kk, ek, ik) {
        const Dk = new Hk;
        return Hk.RotationYawPitchRollToRef(kk, ek, ik, Dk), Dk
      }
      static RotationYawPitchRollToRef(kk, ek, ik, Dk) {
        return Uk.RotationYawPitchRollToRef(kk, ek, ik, wk.Quaternion[0]), wk.Quaternion[0].toRotationMatrix(Dk), Dk
      }
      static Scaling(kk, ek, ik) {
        const Dk = new Hk;
        return Hk.ScalingToRef(kk, ek, ik, Dk), Dk
      }
      static ScalingToRef(kk, ek, ik, Dk) {
        return Hk.FromValuesToRef(kk, 0, 0, 0, 0, ek, 0, 0, 0, 0, ik, 0, 0, 0, 0, 1, Dk), Dk._updateIdentityStatus(1 === kk && 1 === ek && 1 === ik), Dk
      }
      static Translation(kk, ek, ik) {
        const Dk = new Hk;
        return Hk.TranslationToRef(kk, ek, ik, Dk), Dk
      }
      static TranslationToRef(kk, ek, ik, Dk) {
        return Hk.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, kk, ek, ik, 1, Dk), Dk._updateIdentityStatus(0 === kk && 0 === ek && 0 === ik), Dk
      }
      static Lerp(kk, ek, ik) {
        const Dk = new Hk;
        return Hk.LerpToRef(kk, ek, ik, Dk), Dk
      }
      static LerpToRef(kk, ek, ik, Dk) {
        const fk = Dk._m,
          Sk = kk.m,
          bk = ek.m;
        for (let rk = 0; rk < 16; rk++) fk[rk] = Sk[rk] * (1 - ik) + bk[rk] * ik;
        return Dk.markAsUpdated(), Dk
      }
      static DecomposeLerp(kk, ek, ik) {
        const Dk = new Hk;
        return Hk.DecomposeLerpToRef(kk, ek, ik, Dk), Dk
      }
      static DecomposeLerpToRef(kk, ek, ik, Dk) {
        const fk = wk.eH[0],
          Sk = wk.Quaternion[0],
          bk = wk.eH[1];
        kk.decompose(fk, Sk, bk);
        const rk = wk.eH[2],
          Pk = wk.Quaternion[1],
          mk = wk.eH[3];
        ek.decompose(rk, Pk, mk);
        const Mk = wk.eH[4];
        xk.LerpToRef(fk, rk, ik, Mk);
        const Kk = wk.Quaternion[2];
        Uk.SlerpToRef(Sk, Pk, ik, Kk);
        const nk = wk.eH[5];
        return xk.LerpToRef(bk, mk, ik, nk), Hk.ComposeToRef(Mk, Kk, nk, Dk), Dk
      }
      static LookAtLH(kk, ek, ik) {
        const Dk = new Hk;
        return Hk.LookAtLHToRef(kk, ek, ik, Dk), Dk
      }
      static LookAtLHToRef(kk, ek, ik, Dk) {
        const fk = wk.eH[0],
          Sk = wk.eH[1],
          bk = wk.eH[2];
        ek.subtractToRef(kk, bk), bk.normalize(), xk.CrossToRef(ik, bk, fk);
        const rk = fk.lengthSquared();
        0 === rk ? fk.x = 1 : fk.normalizeFromLength(Math.sqrt(rk)), xk.CrossToRef(bk, fk, Sk), Sk.normalize();
        const Pk = -xk.Dot(fk, kk),
          mk = -xk.Dot(Sk, kk),
          Mk = -xk.Dot(bk, kk);
        return Hk.FromValuesToRef(fk._x, Sk._x, bk._x, 0, fk._y, Sk._y, bk._y, 0, fk._z, Sk._z, bk._z, 0, Pk, mk, Mk, 1, Dk), Dk
      }
      static LookAtRH(kk, ek, ik) {
        const Dk = new Hk;
        return Hk.LookAtRHToRef(kk, ek, ik, Dk), Dk
      }
      static LookAtRHToRef(kk, ek, ik, Dk) {
        const fk = wk.eH[0],
          Sk = wk.eH[1],
          bk = wk.eH[2];
        kk.subtractToRef(ek, bk), bk.normalize(), xk.CrossToRef(ik, bk, fk);
        const rk = fk.lengthSquared();
        0 === rk ? fk.x = 1 : fk.normalizeFromLength(Math.sqrt(rk)), xk.CrossToRef(bk, fk, Sk), Sk.normalize();
        const Pk = -xk.Dot(fk, kk),
          mk = -xk.Dot(Sk, kk),
          Mk = -xk.Dot(bk, kk);
        return Hk.FromValuesToRef(fk._x, Sk._x, bk._x, 0, fk._y, Sk._y, bk._y, 0, fk._z, Sk._z, bk._z, 0, Pk, mk, Mk, 1, Dk), Dk
      }
      static LookDirectionLH(kk, ek) {
        const ik = new Hk;
        return Hk.LookDirectionLHToRef(kk, ek, ik), ik
      }
      static LookDirectionLHToRef(kk, ek, ik) {
        const Dk = wk.eH[0];
        Dk.Fs(kk), Dk.scaleInPlace(-1);
        const fk = wk.eH[1];
        return xk.CrossToRef(ek, Dk, fk), Hk.FromValuesToRef(fk._x, fk._y, fk._z, 0, ek._x, ek._y, ek._z, 0, Dk._x, Dk._y, Dk._z, 0, 0, 0, 0, 1, ik), ik
      }
      static LookDirectionRH(kk, ek) {
        const ik = new Hk;
        return Hk.LookDirectionRHToRef(kk, ek, ik), ik
      }
      static LookDirectionRHToRef(kk, ek, ik) {
        const Dk = wk.eH[2];
        return xk.CrossToRef(ek, kk, Dk), Hk.FromValuesToRef(Dk._x, Dk._y, Dk._z, 0, ek._x, ek._y, ek._z, 0, kk._x, kk._y, kk._z, 0, 0, 0, 0, 1, ik), ik
      }
      static OrthoLH(kk, ek, ik, Dk, fk) {
        const Sk = new Hk;
        return Hk.OrthoLHToRef(kk, ek, ik, Dk, Sk, fk), Sk
      }
      static OrthoLHToRef(kk, ek, ik, Dk, fk, Sk) {
        const bk = 2 / kk,
          rk = 2 / ek,
          Pk = 2 / (Dk - ik),
          mk = -(Dk + ik) / (Dk - ik);
        return Hk.FromValuesToRef(bk, 0, 0, 0, 0, rk, 0, 0, 0, 0, Pk, 0, 0, 0, mk, 1, fk), Sk && fk.multiplyToRef(pk, fk), fk._updateIdentityStatus(1 === bk && 1 === rk && 1 === Pk && 0 === mk), fk
      }
      static OrthoOffCenterLH(kk, ek, ik, Dk, fk, Sk, bk) {
        const rk = new Hk;
        return Hk.OrthoOffCenterLHToRef(kk, ek, ik, Dk, fk, Sk, rk, bk), rk
      }
      static OrthoOffCenterLHToRef(kk, ek, ik, Dk, fk, Sk, bk, rk) {
        const Pk = 2 / (ek - kk),
          mk = 2 / (Dk - ik),
          Mk = 2 / (Sk - fk),
          Kk = -(Sk + fk) / (Sk - fk),
          xk = (kk + ek) / (kk - ek),
          nk = (Dk + ik) / (ik - Dk);
        return Hk.FromValuesToRef(Pk, 0, 0, 0, 0, mk, 0, 0, 0, 0, Mk, 0, xk, nk, Kk, 1, bk), rk && bk.multiplyToRef(pk, bk), bk.markAsUpdated(), bk
      }
      static ObliqueOffCenterLHToRef(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk) {
        const Kk = -bk * Math.cos(rk),
          xk = -bk * Math.sin(rk);
        return Hk.TranslationToRef(0, 0, -Pk, wk.Matrix[1]), Hk.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Kk, xk, 1, 0, 0, 0, 0, 1, wk.Matrix[0]), wk.Matrix[1].multiplyToRef(wk.Matrix[0], wk.Matrix[0]), Hk.TranslationToRef(0, 0, Pk, wk.Matrix[1]), wk.Matrix[0].multiplyToRef(wk.Matrix[1], wk.Matrix[0]), Hk.OrthoOffCenterLHToRef(kk, ek, ik, Dk, fk, Sk, mk, Mk), wk.Matrix[0].multiplyToRef(mk, mk), mk
      }
      static OrthoOffCenterRH(kk, ek, ik, Dk, fk, Sk, bk) {
        const rk = new Hk;
        return Hk.OrthoOffCenterRHToRef(kk, ek, ik, Dk, fk, Sk, rk, bk), rk
      }
      static OrthoOffCenterRHToRef(kk, ek, ik, Dk, fk, Sk, bk, rk) {
        return Hk.OrthoOffCenterLHToRef(kk, ek, ik, Dk, fk, Sk, bk, rk), bk._m[10] *= -1, bk
      }
      static ObliqueOffCenterRHToRef(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk) {
        const Kk = bk * Math.cos(rk),
          xk = bk * Math.sin(rk);
        return Hk.TranslationToRef(0, 0, Pk, wk.Matrix[1]), Hk.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Kk, xk, 1, 0, 0, 0, 0, 1, wk.Matrix[0]), wk.Matrix[1].multiplyToRef(wk.Matrix[0], wk.Matrix[0]), Hk.TranslationToRef(0, 0, -Pk, wk.Matrix[1]), wk.Matrix[0].multiplyToRef(wk.Matrix[1], wk.Matrix[0]), Hk.OrthoOffCenterRHToRef(kk, ek, ik, Dk, fk, Sk, mk, Mk), wk.Matrix[0].multiplyToRef(mk, mk), mk
      }
      static PerspectiveLH(kk, ek, ik, Dk, fk) {
        let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const bk = new Hk,
          rk = 2 * ik / kk,
          Pk = 2 * ik / ek,
          mk = (Dk + ik) / (Dk - ik),
          Mk = -2 * Dk * ik / (Dk - ik),
          Kk = Math.tan(Sk);
        return Hk.FromValuesToRef(rk, 0, 0, 0, 0, Pk, 0, Kk, 0, 0, mk, 1, 0, 0, Mk, 0, bk), fk && bk.multiplyToRef(pk, bk), bk._updateIdentityStatus(!1), bk
      }
      static PerspectiveFovLH(kk, ek, ik, Dk, fk) {
        let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          bk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const rk = new Hk;
        return Hk.PerspectiveFovLHToRef(kk, ek, ik, Dk, rk, !0, fk, Sk, bk), rk
      }
      static PerspectiveFovLHToRef(kk, ek, ik, Dk, fk) {
        let Sk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          bk = arguments.length > 6 ? arguments[6] : void 0,
          rk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Pk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const mk = ik,
          Mk = Dk,
          Kk = 1 / Math.tan(.5 * kk),
          xk = Sk ? Kk / ek : Kk,
          nk = Sk ? Kk : Kk * ek,
          Uk = Pk && 0 === mk ? -1 : 0 !== Mk ? (Mk + mk) / (Mk - mk) : 1,
          wk = Pk && 0 === mk ? 2 * Mk : 0 !== Mk ? -2 * Mk * mk / (Mk - mk) : -2 * mk,
          lk = Math.tan(rk);
        return Hk.FromValuesToRef(xk, 0, 0, 0, 0, nk, 0, lk, 0, 0, Uk, 1, 0, 0, wk, 0, fk), bk && fk.multiplyToRef(pk, fk), fk._updateIdentityStatus(!1), fk
      }
      static PerspectiveFovReverseLHToRef(kk, ek, ik, Dk, fk) {
        let Sk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          bk = arguments.length > 6 ? arguments[6] : void 0,
          rk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Pk = 1 / Math.tan(.5 * kk),
          mk = Sk ? Pk / ek : Pk,
          Mk = Sk ? Pk : Pk * ek,
          Kk = Math.tan(rk);
        return Hk.FromValuesToRef(mk, 0, 0, 0, 0, Mk, 0, Kk, 0, 0, -ik, 1, 0, 0, 1, 0, fk), bk && fk.multiplyToRef(pk, fk), fk._updateIdentityStatus(!1), fk
      }
      static PerspectiveFovRH(kk, ek, ik, Dk, fk) {
        let Sk = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          bk = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const rk = new Hk;
        return Hk.PerspectiveFovRHToRef(kk, ek, ik, Dk, rk, !0, fk, Sk, bk), rk
      }
      static PerspectiveFovRHToRef(kk, ek, ik, Dk, fk) {
        let Sk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          bk = arguments.length > 6 ? arguments[6] : void 0,
          rk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Pk = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const mk = ik,
          Mk = Dk,
          Kk = 1 / Math.tan(.5 * kk),
          xk = Sk ? Kk / ek : Kk,
          nk = Sk ? Kk : Kk * ek,
          Uk = Pk && 0 === mk ? 1 : 0 !== Mk ? -(Mk + mk) / (Mk - mk) : -1,
          wk = Pk && 0 === mk ? 2 * Mk : 0 !== Mk ? -2 * Mk * mk / (Mk - mk) : -2 * mk,
          lk = Math.tan(rk);
        return Hk.FromValuesToRef(xk, 0, 0, 0, 0, nk, 0, lk, 0, 0, Uk, -1, 0, 0, wk, 0, fk), bk && fk.multiplyToRef(pk, fk), fk._updateIdentityStatus(!1), fk
      }
      static PerspectiveFovReverseRHToRef(kk, ek, ik, Dk, fk) {
        let Sk = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          bk = arguments.length > 6 ? arguments[6] : void 0,
          rk = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Pk = 1 / Math.tan(.5 * kk),
          mk = Sk ? Pk / ek : Pk,
          Mk = Sk ? Pk : Pk * ek,
          Kk = Math.tan(rk);
        return Hk.FromValuesToRef(mk, 0, 0, 0, 0, Mk, 0, Kk, 0, 0, -ik, -1, 0, 0, -1, 0, fk), bk && fk.multiplyToRef(pk, fk), fk._updateIdentityStatus(!1), fk
      }
      static GetFinalMatrix(kk, ek, ik, Dk, fk, Sk) {
        const bk = kk.width,
          rk = kk.height,
          Pk = kk.x,
          mk = kk.y,
          Mk = Hk.FromValues(bk / 2, 0, 0, 0, 0, -rk / 2, 0, 0, 0, 0, Sk - fk, 0, Pk + bk / 2, rk / 2 + mk, fk, 1),
          Kk = new Hk;
        return ek.multiplyToRef(ik, Kk), Kk.multiplyToRef(Dk, Kk), Kk.multiplyToRef(Mk, Kk)
      }
      static GetAsMatrix2x2(kk) {
        const ek = kk.m,
          ik = [ek[0], ek[1], ek[4], ek[5]];
        return Sk.c.MatrixUse64Bits ? ik : new Float32Array(ik)
      }
      static GetAsMatrix3x3(kk) {
        const ek = kk.m,
          ik = [ek[0], ek[1], ek[2], ek[4], ek[5], ek[6], ek[8], ek[9], ek[10]];
        return Sk.c.MatrixUse64Bits ? ik : new Float32Array(ik)
      }
      static Transpose(kk) {
        const ek = new Hk;
        return Hk.TransposeToRef(kk, ek), ek
      }
      static TransposeToRef(kk, ek) {
        const ik = kk.m,
          Dk = ik[0],
          fk = ik[4],
          Sk = ik[8],
          bk = ik[12],
          rk = ik[1],
          Pk = ik[5],
          mk = ik[9],
          Mk = ik[13],
          Kk = ik[2],
          xk = ik[6],
          nk = ik[10],
          Uk = ik[14],
          Hk = ik[3],
          wk = ik[7],
          lk = ik[11],
          pk = ik[15],
          yk = ek._m;
        return yk[0] = Dk, yk[1] = fk, yk[2] = Sk, yk[3] = bk, yk[4] = rk, yk[5] = Pk, yk[6] = mk, yk[7] = Mk, yk[8] = Kk, yk[9] = xk, yk[10] = nk, yk[11] = Uk, yk[12] = Hk, yk[13] = wk, yk[14] = lk, yk[15] = pk, ek.markAsUpdated(), ek._updateIdentityStatus(kk._isIdentity, kk._isIdentityDirty), ek
      }
      static Reflection(kk) {
        const ek = new Hk;
        return Hk.ReflectionToRef(kk, ek), ek
      }
      static ReflectionToRef(kk, ek) {
        kk.normalize();
        const ik = kk.normal.x,
          Dk = kk.normal.y,
          fk = kk.normal.z,
          Sk = -2 * ik,
          bk = -2 * Dk,
          rk = -2 * fk;
        return Hk.FromValuesToRef(Sk * ik + 1, bk * ik, rk * ik, 0, Sk * Dk, bk * Dk + 1, rk * Dk, 0, Sk * fk, bk * fk, rk * fk + 1, 0, Sk * kk.d, bk * kk.d, rk * kk.d, 1, ek), ek
      }
      static FromXYZAxesToRef(kk, ek, ik, Dk) {
        return Hk.FromValuesToRef(kk._x, kk._y, kk._z, 0, ek._x, ek._y, ek._z, 0, ik._x, ik._y, ik._z, 0, 0, 0, 0, 1, Dk), Dk
      }
      static FromQuaternionToRef(kk, ek) {
        const ik = kk._x * kk._x,
          Dk = kk._y * kk._y,
          fk = kk._z * kk._z,
          Sk = kk._x * kk._y,
          bk = kk._z * kk._w,
          rk = kk._z * kk._x,
          Pk = kk._y * kk._w,
          mk = kk._y * kk._z,
          Mk = kk._x * kk._w;
        return ek._m[0] = 1 - 2 * (Dk + fk), ek._m[1] = 2 * (Sk + bk), ek._m[2] = 2 * (rk - Pk), ek._m[3] = 0, ek._m[4] = 2 * (Sk - bk), ek._m[5] = 1 - 2 * (fk + ik), ek._m[6] = 2 * (mk + Mk), ek._m[7] = 0, ek._m[8] = 2 * (rk + Pk), ek._m[9] = 2 * (mk - Mk), ek._m[10] = 1 - 2 * (Dk + ik), ek._m[11] = 0, ek._m[12] = 0, ek._m[13] = 0, ek._m[14] = 0, ek._m[15] = 1, ek.markAsUpdated(), ek
      }
    }
    Hk._IdentityReadOnly = Hk.Identity();
    class wk {}
    wk.eH = (0, fk.e)(11, xk.Zero), wk.Matrix = (0, fk.e)(2, Hk.Identity), wk.Quaternion = (0, fk.e)(3, Uk.Zero);
    class lk {}
    lk.Vector2 = (0, fk.e)(3, Kk.Zero), lk.eH = (0, fk.e)(13, xk.Zero), lk.Vector4 = (0, fk.e)(3, nk.Zero), lk.Quaternion = (0, fk.e)(3, Uk.Zero), lk.Matrix = (0, fk.e)(8, Hk.Identity);
    const pk = Hk.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let yk = !1;

    function Yk() {
      yk || (yk = !0, Object.defineProperties(Kk.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(xk.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(nk.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Uk.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Hk.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, mk.h)("BABYLON.Vector2", Kk), (0, mk.h)("BABYLON.Vector3", xk), (0, mk.h)("BABYLON.Vector4", nk), (0, mk.h)("BABYLON.Matrix", Hk))
    }
  },
  36726: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => bk
    });
    const Dk = "undefined" !== typeof WeakRef;
    class fk {
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 ? arguments[2] : void 0,
          Dk = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(kk, ek, ik, Dk)
      }
      initialize(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          ik = arguments.length > 2 ? arguments[2] : void 0,
          Dk = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = kk, this.skipNextObservers = ek, this.target = ik, this.currentTarget = Dk, this
      }
    }
    class Sk {
      constructor(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = kk, this.mask = ek, this.scope = ik, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(kk)
      }
    }
    class bk {
      static FromPromise(kk, ek) {
        const ik = new bk;
        return kk.then((kk => {
          ik.notifyObservers(kk)
        })).catch((kk => {
          if (!ek) throw kk;
          ek.notifyObservers(kk)
        })), ik
      }
      get observers() {
        return this._observers
      }
      constructor(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = ek, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new fk(0), kk && (this._onObserverAdded = kk)
      }
      add(kk) {
        let ek = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          ik = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!kk) return null;
        const fk = new Sk(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        fk.unregisterOnNextCall = ik, ek ? this._observers.unshift(fk) : this._observers.push(fk), this._onObserverAdded && this._onObserverAdded(fk), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(fk, this._lastNotifiedValue);
        const bk = Dk ? new WeakRef(this) : {
          deref: () => this
        };
        return fk._remove = function() {
          let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const ek = bk.deref();
          ek && (kk ? ek.remove(fk) : ek._remove(fk))
        }, fk
      }
      addOnce(kk) {
        return this.add(kk, void 0, void 0, void 0, !0)
      }
      remove(kk) {
        if (!kk) return !1;
        kk._remove = null;
        return -1 !== this._observers.indexOf(kk) && (this._deferUnregister(kk), !0)
      }
      removeCallback(kk, ek) {
        for (let ik = 0; ik < this._observers.length; ik++) {
          const Dk = this._observers[ik];
          if (!Dk._willBeUnregistered && (Dk.callback === kk && (!ek || ek === Dk.scope))) return this._deferUnregister(Dk), !0
        }
        return !1
      }
      _deferUnregister(kk) {
        kk._willBeUnregistered || (this._numObserversMarkedAsDeleted++, kk.unregisterOnNextCall = !1, kk._willBeUnregistered = !0, setTimeout((() => {
          this._remove(kk)
        }), 0))
      }
      _remove(kk) {
        let ek = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!kk) return !1;
        const ik = this._observers.indexOf(kk);
        return -1 !== ik && (ek && this._numObserversMarkedAsDeleted--, this._observers.splice(ik, 1), !0)
      }
      makeObserverTopPriority(kk) {
        this._remove(kk, !1), this._observers.unshift(kk)
      }
      makeObserverBottomPriority(kk) {
        this._remove(kk, !1), this._observers.push(kk)
      }
      notifyObservers(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          ik = arguments.length > 2 ? arguments[2] : void 0,
          Dk = arguments.length > 3 ? arguments[3] : void 0,
          fk = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = kk), !this._observers.length) return !0;
        const Sk = this._eventState;
        Sk.mask = ek, Sk.target = ik, Sk.currentTarget = Dk, Sk.skipNextObservers = !1, Sk.lastReturnValue = kk, Sk.userInfo = fk;
        for (const bk of this._observers)
          if (!bk._willBeUnregistered && (bk.mask & ek && (bk.unregisterOnNextCall && this._deferUnregister(bk), bk.scope ? Sk.lastReturnValue = bk.callback.apply(bk.scope, [kk, Sk]) : Sk.lastReturnValue = bk.callback(kk, Sk)), Sk.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(kk, ek) {
        let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = ek), kk._willBeUnregistered) return;
        const Dk = this._eventState;
        Dk.mask = ik, Dk.skipNextObservers = !1, kk.unregisterOnNextCall && this._deferUnregister(kk), kk.callback(ek, Dk)
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
        const kk = new bk;
        return kk._observers = this._observers.slice(0), kk
      }
      hasSpecificMask() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const ek of this._observers)
          if (ek.mask & kk || ek.mask === kk) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);