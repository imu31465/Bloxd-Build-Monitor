export const id = 226;
export const ids = [226];
export const modules = {
  37153: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq
    });
    var Yq = gq(37156);
    class lq {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    lq.Instances = [], lq.OnEnginesDisposedObservable = new Yq.d, lq._LastCreatedScene = null, lq.UseFallbackTexture = !0, lq.FallbackTexture = ""
  },
  37151: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => Yq
    });
    class Yq {
      static SetMatrixPrecision(qq) {
        if (Yq.MatrixTrackPrecisionChange = !1, qq && !Yq.MatrixUse64Bits && Yq.MatrixTrackedMatrices)
          for (let Eq = 0; Eq < Yq.MatrixTrackedMatrices.length; ++Eq) {
            const qq = Yq.MatrixTrackedMatrices[Eq],
              gq = qq._m;
            qq._m = new Array(16);
            for (let Eq = 0; Eq < 16; ++Eq) qq._m[Eq] = gq[Eq]
          }
        Yq.MatrixUse64Bits = qq, Yq.MatrixCurrentType = Yq.MatrixUse64Bits ? Array : Float32Array, Yq.MatrixTrackedMatrices = null
      }
    }
    Yq.MatrixUse64Bits = !1, Yq.MatrixTrackPrecisionChange = !0, Yq.MatrixCurrentType = Float32Array, Yq.MatrixTrackedMatrices = []
  },
  37165: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => xq,
      e: () => cq,
      h: () => Aq,
      i: () => Yq,
      m: () => Oq,
      o: () => mq
    });
    class Yq {}

    function lq(qq) {
      qq.updateFlag = Yq._UpdateFlagSeed++
    }

    function Oq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const lq = qq.bYq(),
        Oq = Eq.bYq(),
        mq = lq[0],
        xq = lq[1],
        Aq = lq[2],
        cq = lq[3],
        uq = lq[4],
        Bq = lq[5],
        Wq = lq[6],
        Nq = lq[7],
        aq = lq[8],
        Vq = lq[9],
        dq = lq[10],
        jq = lq[11],
        Hq = lq[12],
        oq = lq[13],
        Pq = lq[14],
        Qq = lq[15],
        yq = Oq[0],
        tq = Oq[1],
        rq = Oq[2],
        vq = Oq[3],
        hq = Oq[4],
        nq = Oq[5],
        bq = Oq[6],
        iq = Oq[7],
        Zq = Oq[8],
        fq = Oq[9],
        Mq = Oq[10],
        Tq = Oq[11],
        zq = Oq[12],
        Sq = Oq[13],
        pq = Oq[14],
        Gq = Oq[15];
      gq[Yq] = mq * yq + xq * hq + Aq * Zq + cq * zq, gq[Yq + 1] = mq * tq + xq * nq + Aq * fq + cq * Sq, gq[Yq + 2] = mq * rq + xq * bq + Aq * Mq + cq * pq, gq[Yq + 3] = mq * vq + xq * iq + Aq * Tq + cq * Gq, gq[Yq + 4] = uq * yq + Bq * hq + Wq * Zq + Nq * zq, gq[Yq + 5] = uq * tq + Bq * nq + Wq * fq + Nq * Sq, gq[Yq + 6] = uq * rq + Bq * bq + Wq * Mq + Nq * pq, gq[Yq + 7] = uq * vq + Bq * iq + Wq * Tq + Nq * Gq, gq[Yq + 8] = aq * yq + Vq * hq + dq * Zq + jq * zq, gq[Yq + 9] = aq * tq + Vq * nq + dq * fq + jq * Sq, gq[Yq + 10] = aq * rq + Vq * bq + dq * Mq + jq * pq, gq[Yq + 11] = aq * vq + Vq * iq + dq * Tq + jq * Gq, gq[Yq + 12] = Hq * yq + oq * hq + Pq * Zq + Qq * zq, gq[Yq + 13] = Hq * tq + oq * nq + Pq * fq + Qq * Sq, gq[Yq + 14] = Hq * rq + oq * bq + Pq * Mq + Qq * pq, gq[Yq + 15] = Hq * vq + oq * iq + Pq * Tq + Qq * Gq
    }

    function mq(qq, Eq, gq) {
      let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Oq(qq, Eq, gq.bYq(), Yq), lq(gq)
    }

    function xq(qq, Eq) {
      let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Yq = qq.bYq();
      Eq[gq] = Yq[0], Eq[gq + 1] = Yq[1], Eq[gq + 2] = Yq[2], Eq[gq + 3] = Yq[3], Eq[gq + 4] = Yq[4], Eq[gq + 5] = Yq[5], Eq[gq + 6] = Yq[6], Eq[gq + 7] = Yq[7], Eq[gq + 8] = Yq[8], Eq[gq + 9] = Yq[9], Eq[gq + 10] = Yq[10], Eq[gq + 11] = Yq[11], Eq[gq + 12] = Yq[12], Eq[gq + 13] = Yq[13], Eq[gq + 14] = Yq[14], Eq[gq + 15] = Yq[15]
    }

    function Aq(qq, Eq) {
      const gq = cq(qq, Eq.bYq());
      return gq && lq(Eq), gq
    }

    function cq(qq, Eq) {
      const gq = qq.bYq(),
        Yq = gq[0],
        lq = gq[1],
        Oq = gq[2],
        mq = gq[3],
        xq = gq[4],
        Aq = gq[5],
        cq = gq[6],
        uq = gq[7],
        Bq = gq[8],
        Wq = gq[9],
        Nq = gq[10],
        aq = gq[11],
        Vq = gq[12],
        dq = gq[13],
        jq = gq[14],
        Hq = gq[15],
        oq = Nq * Hq - jq * aq,
        Pq = Wq * Hq - dq * aq,
        Qq = Wq * jq - dq * Nq,
        yq = Bq * Hq - Vq * aq,
        tq = Bq * jq - Nq * Vq,
        rq = Bq * dq - Vq * Wq,
        vq = +(Aq * oq - cq * Pq + uq * Qq),
        hq = -(xq * oq - cq * yq + uq * tq),
        nq = +(xq * Pq - Aq * yq + uq * rq),
        bq = -(xq * Qq - Aq * tq + cq * rq),
        iq = Yq * vq + lq * hq + Oq * nq + mq * bq;
      if (0 === iq) return !1;
      const Zq = 1 / iq,
        fq = cq * Hq - jq * uq,
        Mq = Aq * Hq - dq * uq,
        Tq = Aq * jq - dq * cq,
        zq = xq * Hq - Vq * uq,
        Sq = xq * jq - Vq * cq,
        pq = xq * dq - Vq * Aq,
        Gq = cq * aq - Nq * uq,
        Lq = Aq * aq - Wq * uq,
        Jq = Aq * Nq - Wq * cq,
        kq = xq * aq - Bq * uq,
        Rq = xq * Nq - Bq * cq,
        Uq = xq * Wq - Bq * Aq,
        Fq = -(lq * oq - Oq * Pq + mq * Qq),
        sq = +(Yq * oq - Oq * yq + mq * tq),
        Xq = -(Yq * Pq - lq * yq + mq * rq),
        wq = +(Yq * Qq - lq * tq + Oq * rq),
        Kq = +(lq * fq - Oq * Mq + mq * Tq),
        Cq = -(Yq * fq - Oq * zq + mq * Sq),
        Iq = +(Yq * Mq - lq * zq + mq * pq),
        eq = -(Yq * Tq - lq * Sq + Oq * pq),
        Dq = -(lq * Gq - Oq * Lq + mq * Jq),
        qE = +(Yq * Gq - Oq * kq + mq * Rq),
        EE = -(Yq * Lq - lq * kq + mq * Uq),
        gE = +(Yq * Jq - lq * Rq + Oq * Uq);
      return Eq[0] = vq * Zq, Eq[1] = Fq * Zq, Eq[2] = Kq * Zq, Eq[3] = Dq * Zq, Eq[4] = hq * Zq, Eq[5] = sq * Zq, Eq[6] = Cq * Zq, Eq[7] = qE * Zq, Eq[8] = nq * Zq, Eq[9] = Xq * Zq, Eq[10] = Iq * Zq, Eq[11] = EE * Zq, Eq[12] = bq * Zq, Eq[13] = wq * Zq, Eq[14] = eq * Zq, Eq[15] = gE * Zq, !0
    }
    Yq._UpdateFlagSeed = 0
  },
  37139: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Vq,
      h: () => aq,
      l: () => Pq,
      o: () => jq,
      p: () => Bq,
      q: () => Wq,
      r: () => Nq
    });
    var Yq = gq(37145),
      lq = gq(37149),
      Oq = gq(37151),
      mq = gq(37153),
      xq = gq(37158),
      Aq = gq(37165),
      cq = gq(37171);
    const uq = qq => parseInt(qq.toString().replace(/\W/g, ""));
    class Bq {
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = qq, this.y = Eq
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let qq = uq(this.x);
        return qq = 397 * qq ^ uq(this.y), qq
      }
      toArray(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return qq[Eq] = this.x, qq[Eq + 1] = this.y, this
      }
      ogq(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Bq.FromArrayToRef(qq, Eq, this), this
      }
      bYq() {
        return [this.x, this.y]
      }
      WG(qq) {
        return this.x = qq.x, this.y = qq.y, this
      }
      Vqq(qq, Eq) {
        return this.x = qq, this.y = Eq, this
      }
      set(qq, Eq) {
        return this.Vqq(qq, Eq)
      }
      A4(qq) {
        return this.Vqq(qq, qq)
      }
      add(qq) {
        return new Bq(this.x + qq.x, this.y + qq.y)
      }
      addToRef(qq, Eq) {
        return Eq.x = this.x + qq.x, Eq.y = this.y + qq.y, Eq
      }
      addInPlace(qq) {
        return this.x += qq.x, this.y += qq.y, this
      }
      addInPlaceFromFloats(qq, Eq) {
        return this.x += qq, this.y += Eq, this
      }
      addVector3(qq) {
        return new Bq(this.x + qq.x, this.y + qq.y)
      }
      subtract(qq) {
        return new Bq(this.x - qq.x, this.y - qq.y)
      }
      subtractToRef(qq, Eq) {
        return Eq.x = this.x - qq.x, Eq.y = this.y - qq.y, Eq
      }
      KYq(qq) {
        return this.x -= qq.x, this.y -= qq.y, this
      }
      multiplyInPlace(qq) {
        return this.x *= qq.x, this.y *= qq.y, this
      }
      multiply(qq) {
        return new Bq(this.x * qq.x, this.y * qq.y)
      }
      multiplyToRef(qq, Eq) {
        return Eq.x = this.x * qq.x, Eq.y = this.y * qq.y, Eq
      }
      multiplyByFloats(qq, Eq) {
        return new Bq(this.x * qq, this.y * Eq)
      }
      divide(qq) {
        return new Bq(this.x / qq.x, this.y / qq.y)
      }
      divideToRef(qq, Eq) {
        return Eq.x = this.x / qq.x, Eq.y = this.y / qq.y, Eq
      }
      divideInPlace(qq) {
        return this.x = this.x / qq.x, this.y = this.y / qq.y, this
      }
      minimizeInPlace(qq) {
        return this.minimizeInPlaceFromFloats(qq.x, qq.y)
      }
      maximizeInPlace(qq) {
        return this.maximizeInPlaceFromFloats(qq.x, qq.y)
      }
      minimizeInPlaceFromFloats(qq, Eq) {
        return this.x = Math.min(qq, this.x), this.y = Math.min(Eq, this.y), this
      }
      maximizeInPlaceFromFloats(qq, Eq) {
        return this.x = Math.max(qq, this.x), this.y = Math.max(Eq, this.y), this
      }
      subtractFromFloats(qq, Eq) {
        return new Bq(this.x - qq, this.y - Eq)
      }
      subtractFromFloatsToRef(qq, Eq, gq) {
        return gq.x = this.x - qq, gq.y = this.y - Eq, gq
      }
      nY() {
        return new Bq(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(qq) {
        return qq.x = -this.x, qq.y = -this.y, qq
      }
      scaleInPlace(qq) {
        return this.x *= qq, this.y *= qq, this
      }
      scale(qq) {
        return new Bq(this.x * qq, this.y * qq)
      }
      scaleToRef(qq, Eq) {
        return Eq.x = this.x * qq, Eq.y = this.y * qq, Eq
      }
      scaleAndAddToRef(qq, Eq) {
        return Eq.x += this.x * qq, Eq.y += this.y * qq, Eq
      }
      equals(qq) {
        return qq && this.x === qq.x && this.y === qq.y
      }
      equalsWithEpsilon(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yq.c;
        return qq && (0, xq.WithinEpsilon)(this.x, qq.x, Eq) && (0, xq.WithinEpsilon)(this.y, qq.y, Eq)
      }
      Cmq(qq, Eq) {
        return this.x === qq && this.y === Eq
      }
      floor() {
        return new Bq(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(qq) {
        return qq.x = Math.floor(this.x), qq.y = Math.floor(this.y), qq
      }
      fract() {
        return new Bq(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(qq) {
        return qq.x = this.x - Math.floor(this.x), qq.y = this.y - Math.floor(this.y), qq
      }
      rotate(qq) {
        return this.rotateToRef(qq, new Bq)
      }
      rotateToRef(qq, Eq) {
        const gq = Math.cos(qq),
          Yq = Math.sin(qq);
        return Eq.x = gq * this.x - Yq * this.y, Eq.y = Yq * this.x + gq * this.y, Eq
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
      normalizeFromLength(qq) {
        return 0 === qq || 1 === qq ? this : this.scaleInPlace(1 / qq)
      }
      normalizeToNew() {
        const qq = new Bq;
        return this.normalizeToRef(qq), qq
      }
      normalizeToRef(qq) {
        const Eq = this.length();
        return 0 === Eq || 1 === Eq ? (qq.x = this.x, qq.y = this.y, qq) : this.scaleToRef(1 / Eq, qq)
      }
      clone() {
        return new Bq(this.x, this.y)
      }
      dot(qq) {
        return this.x * qq.x + this.y * qq.y
      }
      static Zero() {
        return new Bq(0, 0)
      }
      static One() {
        return new Bq(1, 1)
      }
      static Random() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Bq((0, xq.RandomRange)(qq, Eq), (0, xq.RandomRange)(qq, Eq))
      }
      static RandomToRef() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).Vqq((0, xq.RandomRange)(qq, Eq), (0, xq.RandomRange)(qq, Eq))
      }
      static get ZeroReadOnly() {
        return Bq._ZeroReadOnly
      }
      static FromArray(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Bq(qq[Eq], qq[Eq + 1])
      }
      static FromArrayToRef(qq, Eq, gq) {
        return gq.x = qq[Eq], gq.y = qq[Eq + 1], gq
      }
      static FromFloatsToRef(qq, Eq, gq) {
        return gq.Vqq(qq, Eq), gq
      }
      static CatmullRom(qq, Eq, gq, Yq, lq) {
        const Oq = lq * lq,
          mq = lq * Oq,
          xq = .5 * (2 * Eq.x + (-qq.x + gq.x) * lq + (2 * qq.x - 5 * Eq.x + 4 * gq.x - Yq.x) * Oq + (-qq.x + 3 * Eq.x - 3 * gq.x + Yq.x) * mq),
          Aq = .5 * (2 * Eq.y + (-qq.y + gq.y) * lq + (2 * qq.y - 5 * Eq.y + 4 * gq.y - Yq.y) * Oq + (-qq.y + 3 * Eq.y - 3 * gq.y + Yq.y) * mq);
        return new Bq(xq, Aq)
      }
      static ClampToRef(qq, Eq, gq, Yq) {
        return Yq.x = (0, xq.Clamp)(qq.x, Eq.x, gq.x), Yq.y = (0, xq.Clamp)(qq.y, Eq.y, gq.y), Yq
      }
      static Clamp(qq, Eq, gq) {
        const Yq = (0, xq.Clamp)(qq.x, Eq.x, gq.x),
          lq = (0, xq.Clamp)(qq.y, Eq.y, gq.y);
        return new Bq(Yq, lq)
      }
      static Hermite(qq, Eq, gq, Yq, lq) {
        const Oq = lq * lq,
          mq = lq * Oq,
          xq = 2 * mq - 3 * Oq + 1,
          Aq = -2 * mq + 3 * Oq,
          cq = mq - 2 * Oq + lq,
          uq = mq - Oq,
          Wq = qq.x * xq + gq.x * Aq + Eq.x * cq + Yq.x * uq,
          Nq = qq.y * xq + gq.y * Aq + Eq.y * cq + Yq.y * uq;
        return new Bq(Wq, Nq)
      }
      static Hermite1stDerivative(qq, Eq, gq, Yq, lq) {
        return this.Hermite1stDerivativeToRef(qq, Eq, gq, Yq, lq, new Bq)
      }
      static Hermite1stDerivativeToRef(qq, Eq, gq, Yq, lq, Oq) {
        const mq = lq * lq;
        return Oq.x = 6 * (mq - lq) * qq.x + (3 * mq - 4 * lq + 1) * Eq.x + 6 * (-mq + lq) * gq.x + (3 * mq - 2 * lq) * Yq.x, Oq.y = 6 * (mq - lq) * qq.y + (3 * mq - 4 * lq + 1) * Eq.y + 6 * (-mq + lq) * gq.y + (3 * mq - 2 * lq) * Yq.y, Oq
      }
      static Lerp(qq, Eq, gq) {
        return Bq.LerpToRef(qq, Eq, gq, new Bq)
      }
      static LerpToRef(qq, Eq, gq, Yq) {
        return Yq.x = qq.x + (Eq.x - qq.x) * gq, Yq.y = qq.y + (Eq.y - qq.y) * gq, Yq
      }
      static Dot(qq, Eq) {
        return qq.x * Eq.x + qq.y * Eq.y
      }
      static Normalize(qq) {
        return Bq.NormalizeToRef(qq, new Bq)
      }
      static NormalizeToRef(qq, Eq) {
        return qq.normalizeToRef(Eq), Eq
      }
      static Minimize(qq, Eq) {
        const gq = qq.x < Eq.x ? qq.x : Eq.x,
          Yq = qq.y < Eq.y ? qq.y : Eq.y;
        return new Bq(gq, Yq)
      }
      static Maximize(qq, Eq) {
        const gq = qq.x > Eq.x ? qq.x : Eq.x,
          Yq = qq.y > Eq.y ? qq.y : Eq.y;
        return new Bq(gq, Yq)
      }
      static Transform(qq, Eq) {
        return Bq.TransformToRef(qq, Eq, new Bq)
      }
      static TransformToRef(qq, Eq, gq) {
        const Yq = Eq.m,
          lq = qq.x * Yq[0] + qq.y * Yq[4] + Yq[12],
          Oq = qq.x * Yq[1] + qq.y * Yq[5] + Yq[13];
        return gq.x = lq, gq.y = Oq, gq
      }
      static PointInTriangle(qq, Eq, gq, Yq) {
        const lq = .5 * (-gq.y * Yq.x + Eq.y * (-gq.x + Yq.x) + Eq.x * (gq.y - Yq.y) + gq.x * Yq.y),
          Oq = lq < 0 ? -1 : 1,
          mq = (Eq.y * Yq.x - Eq.x * Yq.y + (Yq.y - Eq.y) * qq.x + (Eq.x - Yq.x) * qq.y) * Oq,
          xq = (Eq.x * gq.y - Eq.y * gq.x + (Eq.y - gq.y) * qq.x + (gq.x - Eq.x) * qq.y) * Oq;
        return mq > 0 && xq > 0 && mq + xq < 2 * lq * Oq
      }
      static Distance(qq, Eq) {
        return Math.sqrt(Bq.DistanceSquared(qq, Eq))
      }
      static DistanceSquared(qq, Eq) {
        const gq = qq.x - Eq.x,
          Yq = qq.y - Eq.y;
        return gq * gq + Yq * Yq
      }
      static Center(qq, Eq) {
        return Bq.CenterToRef(qq, Eq, new Bq)
      }
      static CenterToRef(qq, Eq, gq) {
        return gq.Vqq((qq.x + Eq.x) / 2, (qq.y + Eq.y) / 2)
      }
      static DistanceOfPointFromSegment(qq, Eq, gq) {
        const Yq = Bq.DistanceSquared(Eq, gq);
        if (0 === Yq) return Bq.Distance(qq, Eq);
        const lq = gq.subtract(Eq),
          Oq = Math.max(0, Math.min(1, Bq.Dot(qq.subtract(Eq), lq) / Yq)),
          mq = Eq.add(lq.multiplyByFloats(Oq, Oq));
        return Bq.Distance(qq, mq)
      }
    }
    Bq._V8PerformanceHack = new Bq(.5, .5), Bq._ZeroReadOnly = Bq.Zero();
    class Wq {
      get x() {
        return this._x
      }
      set x(qq) {
        this._x = qq, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(qq) {
        this._y = qq, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(qq) {
        this._z = qq, this._isDirty = !0
      }
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = qq, this._y = Eq, this._z = gq
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "Na"
      }
      getHashCode() {
        let qq = uq(this._x);
        return qq = 397 * qq ^ uq(this._y), qq = 397 * qq ^ uq(this._z), qq
      }
      bYq() {
        return [this._x, this._y, this._z]
      }
      toArray(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return qq[Eq] = this._x, qq[Eq + 1] = this._y, qq[Eq + 2] = this._z, this
      }
      ogq(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Wq.FromArrayToRef(qq, Eq, this), this
      }
      toQuaternion() {
        return aq.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(qq) {
        return this._x += qq._x, this._y += qq._y, this._z += qq._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(qq, Eq, gq) {
        return this._x += qq, this._y += Eq, this._z += gq, this._isDirty = !0, this
      }
      add(qq) {
        return new Wq(this._x + qq._x, this._y + qq._y, this._z + qq._z)
      }
      addToRef(qq, Eq) {
        return Eq._x = this._x + qq._x, Eq._y = this._y + qq._y, Eq._z = this._z + qq._z, Eq._isDirty = !0, Eq
      }
      KYq(qq) {
        return this._x -= qq._x, this._y -= qq._y, this._z -= qq._z, this._isDirty = !0, this
      }
      subtract(qq) {
        return new Wq(this._x - qq._x, this._y - qq._y, this._z - qq._z)
      }
      subtractToRef(qq, Eq) {
        return this.subtractFromFloatsToRef(qq._x, qq._y, qq._z, Eq)
      }
      subtractFromFloats(qq, Eq, gq) {
        return new Wq(this._x - qq, this._y - Eq, this._z - gq)
      }
      subtractFromFloatsToRef(qq, Eq, gq, Yq) {
        return Yq._x = this._x - qq, Yq._y = this._y - Eq, Yq._z = this._z - gq, Yq._isDirty = !0, Yq
      }
      nY() {
        return new Wq(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(qq) {
        return qq._x = -1 * this._x, qq._y = -1 * this._y, qq._z = -1 * this._z, qq._isDirty = !0, qq
      }
      scaleInPlace(qq) {
        return this._x *= qq, this._y *= qq, this._z *= qq, this._isDirty = !0, this
      }
      scale(qq) {
        return new Wq(this._x * qq, this._y * qq, this._z * qq)
      }
      scaleToRef(qq, Eq) {
        return Eq._x = this._x * qq, Eq._y = this._y * qq, Eq._z = this._z * qq, Eq._isDirty = !0, Eq
      }
      getNormalToRef(qq) {
        const Eq = this.length();
        let gq = Math.acos(this._y / Eq);
        const Yq = Math.atan2(this._z, this._x);
        gq > Math.PI / 2 ? gq -= Math.PI / 2 : gq += Math.PI / 2;
        const lq = Eq * Math.sin(gq) * Math.cos(Yq),
          Oq = Eq * Math.cos(gq),
          mq = Eq * Math.sin(gq) * Math.sin(Yq);
        return qq.set(lq, Oq, mq), qq
      }
      applyRotationQuaternionToRef(qq, Eq) {
        const gq = this._x,
          Yq = this._y,
          lq = this._z,
          Oq = qq._x,
          mq = qq._y,
          xq = qq._z,
          Aq = qq._w,
          cq = 2 * (mq * lq - xq * Yq),
          uq = 2 * (xq * gq - Oq * lq),
          Bq = 2 * (Oq * Yq - mq * gq);
        return Eq._x = gq + Aq * cq + mq * Bq - xq * uq, Eq._y = Yq + Aq * uq + xq * cq - Oq * Bq, Eq._z = lq + Aq * Bq + Oq * uq - mq * cq, Eq._isDirty = !0, Eq
      }
      applyRotationQuaternionInPlace(qq) {
        return this.applyRotationQuaternionToRef(qq, this)
      }
      applyRotationQuaternion(qq) {
        return this.applyRotationQuaternionToRef(qq, new Wq)
      }
      scaleAndAddToRef(qq, Eq) {
        return Eq._x += this._x * qq, Eq._y += this._y * qq, Eq._z += this._z * qq, Eq._isDirty = !0, Eq
      }
      projectOnPlane(qq, Eq) {
        return this.projectOnPlaneToRef(qq, Eq, new Wq)
      }
      projectOnPlaneToRef(qq, Eq, gq) {
        const Yq = qq.normal,
          lq = qq.d,
          Oq = dq.Na[0];
        this.subtractToRef(Eq, Oq), Oq.normalize();
        const mq = Wq.Dot(Oq, Yq);
        if (Math.abs(mq) < 1e-10) gq.A4(1 / 0);
        else {
          const qq = -(Wq.Dot(Eq, Yq) + lq) / mq,
            xq = Oq.scaleInPlace(qq);
          Eq.addToRef(xq, gq)
        }
        return gq
      }
      equals(qq) {
        return qq && this._x === qq._x && this._y === qq._y && this._z === qq._z
      }
      equalsWithEpsilon(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yq.c;
        return qq && (0, xq.WithinEpsilon)(this._x, qq._x, Eq) && (0, xq.WithinEpsilon)(this._y, qq._y, Eq) && (0, xq.WithinEpsilon)(this._z, qq._z, Eq)
      }
      Cmq(qq, Eq, gq) {
        return this._x === qq && this._y === Eq && this._z === gq
      }
      multiplyInPlace(qq) {
        return this._x *= qq._x, this._y *= qq._y, this._z *= qq._z, this._isDirty = !0, this
      }
      multiply(qq) {
        return this.multiplyByFloats(qq._x, qq._y, qq._z)
      }
      multiplyToRef(qq, Eq) {
        return Eq._x = this._x * qq._x, Eq._y = this._y * qq._y, Eq._z = this._z * qq._z, Eq._isDirty = !0, Eq
      }
      multiplyByFloats(qq, Eq, gq) {
        return new Wq(this._x * qq, this._y * Eq, this._z * gq)
      }
      divide(qq) {
        return new Wq(this._x / qq._x, this._y / qq._y, this._z / qq._z)
      }
      divideToRef(qq, Eq) {
        return Eq._x = this._x / qq._x, Eq._y = this._y / qq._y, Eq._z = this._z / qq._z, Eq._isDirty = !0, Eq
      }
      divideInPlace(qq) {
        return this._x = this._x / qq._x, this._y = this._y / qq._y, this._z = this._z / qq._z, this._isDirty = !0, this
      }
      minimizeInPlace(qq) {
        return this.minimizeInPlaceFromFloats(qq._x, qq._y, qq._z)
      }
      maximizeInPlace(qq) {
        return this.maximizeInPlaceFromFloats(qq._x, qq._y, qq._z)
      }
      minimizeInPlaceFromFloats(qq, Eq, gq) {
        return qq < this._x && (this.x = qq), Eq < this._y && (this.y = Eq), gq < this._z && (this.z = gq), this
      }
      maximizeInPlaceFromFloats(qq, Eq, gq) {
        return qq > this._x && (this.x = qq), Eq > this._y && (this.y = Eq), gq > this._z && (this.z = gq), this
      }
      isNonUniformWithinEpsilon(qq) {
        const Eq = Math.abs(this._x),
          gq = Math.abs(this._y);
        if (!(0, xq.WithinEpsilon)(Eq, gq, qq)) return !0;
        const Yq = Math.abs(this._z);
        return !(0, xq.WithinEpsilon)(Eq, Yq, qq) || !(0, xq.WithinEpsilon)(gq, Yq, qq)
      }
      get isNonUniform() {
        const qq = Math.abs(this._x);
        if (qq !== Math.abs(this._y)) return !0;
        return qq !== Math.abs(this._z)
      }
      floorToRef(qq) {
        return qq._x = Math.floor(this._x), qq._y = Math.floor(this._y), qq._z = Math.floor(this._z), qq._isDirty = !0, qq
      }
      floor() {
        return new Wq(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(qq) {
        return qq._x = this._x - Math.floor(this._x), qq._y = this._y - Math.floor(this._y), qq._z = this._z - Math.floor(this._z), qq._isDirty = !0, qq
      }
      fract() {
        return new Wq(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(qq) {
        if ("xyz" === (qq = qq.toLowerCase())) return this;
        const Eq = dq.Na[0].WG(this);
        return this.x = Eq[qq[0]], this.y = Eq[qq[1]], this.z = Eq[qq[2]], this
      }
      rotateByQuaternionToRef(qq, Eq) {
        return qq.toRotationMatrix(dq.Matrix[0]), Wq.TransformCoordinatesToRef(this, dq.Matrix[0], Eq), Eq
      }
      rotateByQuaternionAroundPointToRef(qq, Eq, gq) {
        return this.subtractToRef(Eq, dq.Na[0]), dq.Na[0].rotateByQuaternionToRef(qq, dq.Na[0]), Eq.addToRef(dq.Na[0], gq), gq
      }
      cross(qq) {
        return Wq.CrossToRef(this, qq, new Wq)
      }
      normalizeFromLength(qq) {
        return 0 === qq || 1 === qq ? this : this.scaleInPlace(1 / qq)
      }
      normalizeToNew() {
        return this.normalizeToRef(new Wq)
      }
      normalizeToRef(qq) {
        const Eq = this.length();
        return 0 === Eq || 1 === Eq ? (qq._x = this._x, qq._y = this._y, qq._z = this._z, qq._isDirty = !0, qq) : this.scaleToRef(1 / Eq, qq)
      }
      clone() {
        return new Wq(this._x, this._y, this._z)
      }
      WG(qq) {
        return this.Vqq(qq._x, qq._y, qq._z)
      }
      Vqq(qq, Eq, gq) {
        return this._x = qq, this._y = Eq, this._z = gq, this._isDirty = !0, this
      }
      set(qq, Eq, gq) {
        return this.Vqq(qq, Eq, gq)
      }
      A4(qq) {
        return this._x = this._y = this._z = qq, this._isDirty = !0, this
      }
      static GetClipFactor(qq, Eq, gq, Yq) {
        const lq = Wq.Dot(qq, gq);
        return (lq - Yq) / (lq - Wq.Dot(Eq, gq))
      }
      static GetAngleBetweenVectors(qq, Eq, gq) {
        const Yq = qq.normalizeToRef(dq.Na[1]),
          lq = Eq.normalizeToRef(dq.Na[2]);
        let Oq = Wq.Dot(Yq, lq);
        Oq = (0, xq.Clamp)(Oq, -1, 1);
        const mq = Math.acos(Oq),
          Aq = dq.Na[3];
        return Wq.CrossToRef(Yq, lq, Aq), Wq.Dot(Aq, gq) > 0 ? isNaN(mq) ? 0 : mq : isNaN(mq) ? -Math.PI : -Math.acos(Oq)
      }
      static GetAngleBetweenVectorsOnPlane(qq, Eq, gq) {
        dq.Na[0].WG(qq);
        const Yq = dq.Na[0];
        dq.Na[1].WG(Eq);
        const lq = dq.Na[1];
        dq.Na[2].WG(gq);
        const Oq = dq.Na[2],
          mq = dq.Na[3],
          Aq = dq.Na[4];
        Yq.normalize(), lq.normalize(), Oq.normalize(), Wq.CrossToRef(Oq, Yq, mq), Wq.CrossToRef(mq, Oq, Aq);
        const cq = Math.atan2(Wq.Dot(lq, mq), Wq.Dot(lq, Aq));
        return (0, xq.NormalizeRadians)(cq)
      }
      static PitchYawRollToMoveBetweenPointsToRef(qq, Eq, gq) {
        const Yq = jq.Na[0];
        return Eq.subtractToRef(qq, Yq), gq._y = Math.atan2(Yq.x, Yq.z) || 0, gq._x = Math.atan2(Math.sqrt(Yq.x ** 2 + Yq.z ** 2), Yq.y) || 0, gq._z = 0, gq._isDirty = !0, gq
      }
      static PitchYawRollToMoveBetweenPoints(qq, Eq) {
        const gq = Wq.Zero();
        return Wq.PitchYawRollToMoveBetweenPointsToRef(qq, Eq, gq)
      }
      static SlerpToRef(qq, Eq, gq, lq) {
        gq = (0, xq.Clamp)(gq, 0, 1);
        const Oq = dq.Na[0],
          mq = dq.Na[1];
        Oq.WG(qq);
        const Aq = Oq.length();
        Oq.normalizeFromLength(Aq), mq.WG(Eq);
        const cq = mq.length();
        mq.normalizeFromLength(cq);
        const uq = Wq.Dot(Oq, mq);
        let Bq, Nq;
        if (uq < 1 - Yq.c) {
          const qq = Math.acos(uq),
            Eq = 1 / Math.sin(qq);
          Bq = Math.sin((1 - gq) * qq) * Eq, Nq = Math.sin(gq * qq) * Eq
        } else Bq = 1 - gq, Nq = gq;
        return Oq.scaleInPlace(Bq), mq.scaleInPlace(Nq), lq.WG(Oq).addInPlace(mq), lq.scaleInPlace((0, xq.Lerp)(Aq, cq, gq)), lq
      }
      static SmoothToRef(qq, Eq, gq, Yq, lq) {
        return Wq.SlerpToRef(qq, Eq, 0 === Yq ? 1 : gq / Yq, lq), lq
      }
      static FromArray(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Wq(qq[Eq], qq[Eq + 1], qq[Eq + 2])
      }
      static FromFloatArray(qq, Eq) {
        return Wq.FromArray(qq, Eq)
      }
      static FromArrayToRef(qq, Eq, gq) {
        return gq._x = qq[Eq], gq._y = qq[Eq + 1], gq._z = qq[Eq + 2], gq._isDirty = !0, gq
      }
      static FromFloatArrayToRef(qq, Eq, gq) {
        return Wq.FromArrayToRef(qq, Eq, gq)
      }
      static FromFloatsToRef(qq, Eq, gq, Yq) {
        return Yq.Vqq(qq, Eq, gq), Yq
      }
      static Zero() {
        return new Wq(0, 0, 0)
      }
      static One() {
        return new Wq(1, 1, 1)
      }
      static Up() {
        return new Wq(0, 1, 0)
      }
      static get UpReadOnly() {
        return Wq._UpReadOnly
      }
      static get DownReadOnly() {
        return Wq._DownReadOnly
      }
      static get RightReadOnly() {
        return Wq._RightReadOnly
      }
      static get LeftReadOnly() {
        return Wq._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return Wq._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return Wq._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return Wq._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return Wq._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return Wq._ZeroReadOnly
      }
      static get OneReadOnly() {
        return Wq._OneReadOnly
      }
      static Down() {
        return new Wq(0, -1, 0)
      }
      static Forward() {
        return new Wq(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new Wq(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new Wq(1, 0, 0)
      }
      static Left() {
        return new Wq(-1, 0, 0)
      }
      static Random() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Wq((0, xq.RandomRange)(qq, Eq), (0, xq.RandomRange)(qq, Eq), (0, xq.RandomRange)(qq, Eq))
      }
      static RandomToRef() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).Vqq((0, xq.RandomRange)(qq, Eq), (0, xq.RandomRange)(qq, Eq), (0, xq.RandomRange)(qq, Eq))
      }
      static TransformCoordinates(qq, Eq) {
        const gq = Wq.Zero();
        return Wq.TransformCoordinatesToRef(qq, Eq, gq), gq
      }
      static TransformCoordinatesToRef(qq, Eq, gq) {
        return Wq.TransformCoordinatesFromFloatsToRef(qq._x, qq._y, qq._z, Eq, gq), gq
      }
      static TransformCoordinatesFromFloatsToRef(qq, Eq, gq, Yq, lq) {
        const Oq = Yq.m,
          mq = qq * Oq[0] + Eq * Oq[4] + gq * Oq[8] + Oq[12],
          xq = qq * Oq[1] + Eq * Oq[5] + gq * Oq[9] + Oq[13],
          Aq = qq * Oq[2] + Eq * Oq[6] + gq * Oq[10] + Oq[14],
          cq = 1 / (qq * Oq[3] + Eq * Oq[7] + gq * Oq[11] + Oq[15]);
        return lq._x = mq * cq, lq._y = xq * cq, lq._z = Aq * cq, lq._isDirty = !0, lq
      }
      static TransformNormal(qq, Eq) {
        const gq = Wq.Zero();
        return Wq.TransformNormalToRef(qq, Eq, gq), gq
      }
      static TransformNormalToRef(qq, Eq, gq) {
        return this.TransformNormalFromFloatsToRef(qq._x, qq._y, qq._z, Eq, gq), gq
      }
      static TransformNormalFromFloatsToRef(qq, Eq, gq, Yq, lq) {
        const Oq = Yq.m;
        return lq._x = qq * Oq[0] + Eq * Oq[4] + gq * Oq[8], lq._y = qq * Oq[1] + Eq * Oq[5] + gq * Oq[9], lq._z = qq * Oq[2] + Eq * Oq[6] + gq * Oq[10], lq._isDirty = !0, lq
      }
      static CatmullRom(qq, Eq, gq, Yq, lq) {
        const Oq = lq * lq,
          mq = lq * Oq,
          xq = .5 * (2 * Eq._x + (-qq._x + gq._x) * lq + (2 * qq._x - 5 * Eq._x + 4 * gq._x - Yq._x) * Oq + (-qq._x + 3 * Eq._x - 3 * gq._x + Yq._x) * mq),
          Aq = .5 * (2 * Eq._y + (-qq._y + gq._y) * lq + (2 * qq._y - 5 * Eq._y + 4 * gq._y - Yq._y) * Oq + (-qq._y + 3 * Eq._y - 3 * gq._y + Yq._y) * mq),
          cq = .5 * (2 * Eq._z + (-qq._z + gq._z) * lq + (2 * qq._z - 5 * Eq._z + 4 * gq._z - Yq._z) * Oq + (-qq._z + 3 * Eq._z - 3 * gq._z + Yq._z) * mq);
        return new Wq(xq, Aq, cq)
      }
      static Clamp(qq, Eq, gq) {
        const Yq = new Wq;
        return Wq.ClampToRef(qq, Eq, gq, Yq), Yq
      }
      static ClampToRef(qq, Eq, gq, Yq) {
        let lq = qq._x;
        lq = lq > gq._x ? gq._x : lq, lq = lq < Eq._x ? Eq._x : lq;
        let Oq = qq._y;
        Oq = Oq > gq._y ? gq._y : Oq, Oq = Oq < Eq._y ? Eq._y : Oq;
        let mq = qq._z;
        return mq = mq > gq._z ? gq._z : mq, mq = mq < Eq._z ? Eq._z : mq, Yq.Vqq(lq, Oq, mq), Yq
      }
      static CheckExtends(qq, Eq, gq) {
        Eq.minimizeInPlace(qq), gq.maximizeInPlace(qq)
      }
      static Hermite(qq, Eq, gq, Yq, lq) {
        const Oq = lq * lq,
          mq = lq * Oq,
          xq = 2 * mq - 3 * Oq + 1,
          Aq = -2 * mq + 3 * Oq,
          cq = mq - 2 * Oq + lq,
          uq = mq - Oq,
          Bq = qq._x * xq + gq._x * Aq + Eq._x * cq + Yq._x * uq,
          Nq = qq._y * xq + gq._y * Aq + Eq._y * cq + Yq._y * uq,
          aq = qq._z * xq + gq._z * Aq + Eq._z * cq + Yq._z * uq;
        return new Wq(Bq, Nq, aq)
      }
      static Hermite1stDerivative(qq, Eq, gq, Yq, lq) {
        const Oq = new Wq;
        return this.Hermite1stDerivativeToRef(qq, Eq, gq, Yq, lq, Oq), Oq
      }
      static Hermite1stDerivativeToRef(qq, Eq, gq, Yq, lq, Oq) {
        const mq = lq * lq;
        return Oq._x = 6 * (mq - lq) * qq._x + (3 * mq - 4 * lq + 1) * Eq._x + 6 * (-mq + lq) * gq._x + (3 * mq - 2 * lq) * Yq._x, Oq._y = 6 * (mq - lq) * qq._y + (3 * mq - 4 * lq + 1) * Eq._y + 6 * (-mq + lq) * gq._y + (3 * mq - 2 * lq) * Yq._y, Oq._z = 6 * (mq - lq) * qq._z + (3 * mq - 4 * lq + 1) * Eq._z + 6 * (-mq + lq) * gq._z + (3 * mq - 2 * lq) * Yq._z, Oq._isDirty = !0, Oq
      }
      static Lerp(qq, Eq, gq) {
        const Yq = new Wq(0, 0, 0);
        return Wq.LerpToRef(qq, Eq, gq, Yq), Yq
      }
      static LerpToRef(qq, Eq, gq, Yq) {
        return Yq._x = qq._x + (Eq._x - qq._x) * gq, Yq._y = qq._y + (Eq._y - qq._y) * gq, Yq._z = qq._z + (Eq._z - qq._z) * gq, Yq._isDirty = !0, Yq
      }
      static Dot(qq, Eq) {
        return qq._x * Eq._x + qq._y * Eq._y + qq._z * Eq._z
      }
      dot(qq) {
        return this._x * qq._x + this._y * qq._y + this._z * qq._z
      }
      static Cross(qq, Eq) {
        const gq = new Wq;
        return Wq.CrossToRef(qq, Eq, gq), gq
      }
      static CrossToRef(qq, Eq, gq) {
        const Yq = qq._y * Eq._z - qq._z * Eq._y,
          lq = qq._z * Eq._x - qq._x * Eq._z,
          Oq = qq._x * Eq._y - qq._y * Eq._x;
        return gq.Vqq(Yq, lq, Oq), gq
      }
      static Normalize(qq) {
        const Eq = Wq.Zero();
        return Wq.NormalizeToRef(qq, Eq), Eq
      }
      static NormalizeToRef(qq, Eq) {
        return qq.normalizeToRef(Eq), Eq
      }
      static Project(qq, Eq, gq, Yq) {
        const lq = new Wq;
        return Wq.ProjectToRef(qq, Eq, gq, Yq, lq), lq
      }
      static ProjectToRef(qq, Eq, gq, Yq, lq) {
        const Oq = Yq.width,
          xq = Yq.height,
          Aq = Yq.x,
          cq = Yq.y,
          uq = dq.Matrix[1],
          Bq = mq.b.LastCreatedEngine?.isNDCHalfZRange,
          Nq = Bq ? 1 : .5,
          aq = Bq ? 0 : .5;
        Vq.FromValuesToRef(Oq / 2, 0, 0, 0, 0, -xq / 2, 0, 0, 0, 0, Nq, 0, Aq + Oq / 2, xq / 2 + cq, aq, 1, uq);
        const jq = dq.Matrix[0];
        return Eq.multiplyToRef(gq, jq), jq.multiplyToRef(uq, jq), Wq.TransformCoordinatesToRef(qq, jq, lq), lq
      }
      static Reflect(qq, Eq) {
        return this.ReflectToRef(qq, Eq, new Wq)
      }
      static ReflectToRef(qq, Eq, gq) {
        const Yq = jq.Na[0];
        return Yq.WG(Eq).scaleInPlace(2 * Wq.Dot(qq, Eq)), gq.WG(qq).KYq(Yq)
      }
      static UnprojectFromTransform(qq, Eq, gq, Yq, lq) {
        return this.Unproject(qq, Eq, gq, Yq, lq, Vq.IdentityReadOnly)
      }
      static Unproject(qq, Eq, gq, Yq, lq, Oq) {
        const mq = new Wq;
        return Wq.UnprojectToRef(qq, Eq, gq, Yq, lq, Oq, mq), mq
      }
      static UnprojectToRef(qq, Eq, gq, Yq, lq, Oq, mq) {
        return Wq.UnprojectFloatsToRef(qq._x, qq._y, qq._z, Eq, gq, Yq, lq, Oq, mq), mq
      }
      static UnprojectFloatsToRef(qq, Eq, gq, Yq, lq, Oq, xq, Aq, cq) {
        const uq = dq.Matrix[0];
        Oq.multiplyToRef(xq, uq), uq.multiplyToRef(Aq, uq), uq.invert();
        const Bq = dq.Na[0];
        return Bq.x = qq / Yq * 2 - 1, Bq.y = -(Eq / lq * 2 - 1), mq.b.LastCreatedEngine?.isNDCHalfZRange ? Bq.z = gq : Bq.z = 2 * gq - 1, Wq.TransformCoordinatesToRef(Bq, uq, cq), cq
      }
      static Minimize(qq, Eq) {
        const gq = new Wq;
        return gq.WG(qq), gq.minimizeInPlace(Eq), gq
      }
      static Maximize(qq, Eq) {
        const gq = new Wq;
        return gq.WG(qq), gq.maximizeInPlace(Eq), gq
      }
      static Distance(qq, Eq) {
        return Math.sqrt(Wq.DistanceSquared(qq, Eq))
      }
      static DistanceSquared(qq, Eq) {
        const gq = qq._x - Eq._x,
          Yq = qq._y - Eq._y,
          lq = qq._z - Eq._z;
        return gq * gq + Yq * Yq + lq * lq
      }
      static ProjectOnTriangleToRef(qq, Eq, gq, lq, Oq) {
        const mq = dq.Na[0],
          Aq = dq.Na[1],
          cq = dq.Na[2],
          uq = dq.Na[3],
          Bq = dq.Na[4];
        gq.subtractToRef(Eq, mq), lq.subtractToRef(Eq, Aq), lq.subtractToRef(gq, cq);
        const Nq = mq.length(),
          aq = Aq.length(),
          Vq = cq.length();
        if (Nq < Yq.c || aq < Yq.c || Vq < Yq.c) return Oq.WG(Eq), Wq.Distance(qq, Eq);
        qq.subtractToRef(Eq, Bq), Wq.CrossToRef(mq, Aq, uq);
        const jq = uq.length();
        if (jq < Yq.c) return Oq.WG(Eq), Wq.Distance(qq, Eq);
        uq.normalizeFromLength(jq);
        let Hq = Bq.length();
        if (Hq < Yq.c) return Oq.WG(Eq), 0;
        Bq.normalizeFromLength(Hq);
        const oq = Wq.Dot(uq, Bq),
          Pq = dq.Na[5],
          Qq = dq.Na[6];
        Pq.WG(uq).scaleInPlace(-Hq * oq), Qq.WG(qq).addInPlace(Pq);
        const yq = dq.Na[4],
          tq = dq.Na[5],
          rq = dq.Na[7],
          vq = dq.Na[8];
        yq.WG(mq).scaleInPlace(1 / Nq), vq.WG(Aq).scaleInPlace(1 / aq), yq.addInPlace(vq).scaleInPlace(-1), tq.WG(mq).scaleInPlace(-1 / Nq), vq.WG(cq).scaleInPlace(1 / Vq), tq.addInPlace(vq).scaleInPlace(-1), rq.WG(cq).scaleInPlace(-1 / Vq), vq.WG(Aq).scaleInPlace(-1 / aq), rq.addInPlace(vq).scaleInPlace(-1);
        const hq = dq.Na[9];
        let nq;
        hq.WG(Qq).KYq(Eq), Wq.CrossToRef(yq, hq, vq), nq = Wq.Dot(vq, uq);
        const bq = nq;
        hq.WG(Qq).KYq(gq), Wq.CrossToRef(tq, hq, vq), nq = Wq.Dot(vq, uq);
        const iq = nq;
        hq.WG(Qq).KYq(lq), Wq.CrossToRef(rq, hq, vq), nq = Wq.Dot(vq, uq);
        const Zq = nq,
          fq = dq.Na[10];
        let Mq, Tq;
        bq > 0 && iq < 0 ? (fq.WG(mq), Mq = Eq, Tq = gq) : iq > 0 && Zq < 0 ? (fq.WG(cq), Mq = gq, Tq = lq) : (fq.WG(Aq).scaleInPlace(-1), Mq = lq, Tq = Eq);
        const zq = dq.Na[9],
          Sq = dq.Na[4];
        Mq.subtractToRef(Qq, vq), Tq.subtractToRef(Qq, zq), Wq.CrossToRef(vq, zq, Sq);
        if (!(Wq.Dot(Sq, uq) < 0)) return Oq.WG(Qq), Math.abs(Hq * oq);
        const pq = dq.Na[5];
        Wq.CrossToRef(fq, Sq, pq), pq.normalize();
        const Gq = dq.Na[9];
        Gq.WG(Mq).KYq(Qq);
        const Lq = Gq.length();
        if (Lq < Yq.c) return Oq.WG(Mq), Wq.Distance(qq, Mq);
        Gq.normalizeFromLength(Lq);
        const Jq = Wq.Dot(pq, Gq),
          kq = dq.Na[7];
        kq.WG(Qq).addInPlace(pq.scaleInPlace(Lq * Jq)), vq.WG(kq).KYq(Mq), Hq = fq.length(), fq.normalizeFromLength(Hq);
        let Rq = Wq.Dot(vq, fq) / Math.max(Hq, Yq.c);
        return Rq = (0, xq.Clamp)(Rq, 0, 1), kq.WG(Mq).addInPlace(fq.scaleInPlace(Rq * Hq)), Oq.WG(kq), Wq.Distance(qq, kq)
      }
      static Center(qq, Eq) {
        return Wq.CenterToRef(qq, Eq, Wq.Zero())
      }
      static CenterToRef(qq, Eq, gq) {
        return gq.Vqq((qq._x + Eq._x) / 2, (qq._y + Eq._y) / 2, (qq._z + Eq._z) / 2)
      }
      static RotationFromAxis(qq, Eq, gq) {
        const Yq = new Wq;
        return Wq.RotationFromAxisToRef(qq, Eq, gq, Yq), Yq
      }
      static RotationFromAxisToRef(qq, Eq, gq, Yq) {
        const lq = dq.Quaternion[0];
        return aq.RotationQuaternionFromAxisToRef(qq, Eq, gq, lq), lq.toEulerAnglesToRef(Yq), Yq
      }
    }
    Wq._V8PerformanceHack = new Wq(.5, .5, .5), Wq._UpReadOnly = Wq.Up(), Wq._DownReadOnly = Wq.Down(), Wq._LeftHandedForwardReadOnly = Wq.Forward(!1), Wq._RightHandedForwardReadOnly = Wq.Forward(!0), Wq._LeftHandedBackwardReadOnly = Wq.Backward(!1), Wq._RightHandedBackwardReadOnly = Wq.Backward(!0), Wq._RightReadOnly = Wq.Right(), Wq._LeftReadOnly = Wq.Left(), Wq._ZeroReadOnly = Wq.Zero(), Wq._OneReadOnly = Wq.One();
    class Nq {
      get x() {
        return this._x
      }
      set x(qq) {
        this._x = qq, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(qq) {
        this._y = qq, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(qq) {
        this._z = qq, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(qq) {
        this._w = qq, this._isDirty = !0
      }
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = qq, this._y = Eq, this._z = gq, this._w = Yq
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let qq = uq(this._x);
        return qq = 397 * qq ^ uq(this._y), qq = 397 * qq ^ uq(this._z), qq = 397 * qq ^ uq(this._w), qq
      }
      bYq() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(qq, Eq) {
        return void 0 === Eq && (Eq = 0), qq[Eq] = this._x, qq[Eq + 1] = this._y, qq[Eq + 2] = this._z, qq[Eq + 3] = this._w, this
      }
      ogq(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Nq.FromArrayToRef(qq, Eq, this), this
      }
      addInPlace(qq) {
        return this.x += qq._x, this.y += qq._y, this.z += qq._z, this.w += qq._w, this
      }
      addInPlaceFromFloats(qq, Eq, gq, Yq) {
        return this.x += qq, this.y += Eq, this.z += gq, this.w += Yq, this
      }
      add(qq) {
        return new Nq(this._x + qq.x, this._y + qq.y, this._z + qq.z, this._w + qq.w)
      }
      addToRef(qq, Eq) {
        return Eq.x = this._x + qq.x, Eq.y = this._y + qq.y, Eq.z = this._z + qq.z, Eq.w = this._w + qq.w, Eq
      }
      KYq(qq) {
        return this.x -= qq.x, this.y -= qq.y, this.z -= qq.z, this.w -= qq.w, this
      }
      subtract(qq) {
        return new Nq(this._x - qq.x, this._y - qq.y, this._z - qq.z, this._w - qq.w)
      }
      subtractToRef(qq, Eq) {
        return Eq.x = this._x - qq.x, Eq.y = this._y - qq.y, Eq.z = this._z - qq.z, Eq.w = this._w - qq.w, Eq
      }
      subtractFromFloats(qq, Eq, gq, Yq) {
        return new Nq(this._x - qq, this._y - Eq, this._z - gq, this._w - Yq)
      }
      subtractFromFloatsToRef(qq, Eq, gq, Yq, lq) {
        return lq.x = this._x - qq, lq.y = this._y - Eq, lq.z = this._z - gq, lq.w = this._w - Yq, lq
      }
      nY() {
        return new Nq(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(qq) {
        return qq.x = -this._x, qq.y = -this._y, qq.z = -this._z, qq.w = -this._w, qq
      }
      scaleInPlace(qq) {
        return this.x *= qq, this.y *= qq, this.z *= qq, this.w *= qq, this
      }
      scale(qq) {
        return new Nq(this._x * qq, this._y * qq, this._z * qq, this._w * qq)
      }
      scaleToRef(qq, Eq) {
        return Eq.x = this._x * qq, Eq.y = this._y * qq, Eq.z = this._z * qq, Eq.w = this._w * qq, Eq
      }
      scaleAndAddToRef(qq, Eq) {
        return Eq.x += this._x * qq, Eq.y += this._y * qq, Eq.z += this._z * qq, Eq.w += this._w * qq, Eq
      }
      equals(qq) {
        return qq && this._x === qq.x && this._y === qq.y && this._z === qq.z && this._w === qq.w
      }
      equalsWithEpsilon(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yq.c;
        return qq && (0, xq.WithinEpsilon)(this._x, qq.x, Eq) && (0, xq.WithinEpsilon)(this._y, qq.y, Eq) && (0, xq.WithinEpsilon)(this._z, qq.z, Eq) && (0, xq.WithinEpsilon)(this._w, qq.w, Eq)
      }
      Cmq(qq, Eq, gq, Yq) {
        return this._x === qq && this._y === Eq && this._z === gq && this._w === Yq
      }
      multiplyInPlace(qq) {
        return this.x *= qq.x, this.y *= qq.y, this.z *= qq.z, this.w *= qq.w, this
      }
      multiply(qq) {
        return new Nq(this._x * qq.x, this._y * qq.y, this._z * qq.z, this._w * qq.w)
      }
      multiplyToRef(qq, Eq) {
        return Eq.x = this._x * qq.x, Eq.y = this._y * qq.y, Eq.z = this._z * qq.z, Eq.w = this._w * qq.w, Eq
      }
      multiplyByFloats(qq, Eq, gq, Yq) {
        return new Nq(this._x * qq, this._y * Eq, this._z * gq, this._w * Yq)
      }
      divide(qq) {
        return new Nq(this._x / qq.x, this._y / qq.y, this._z / qq.z, this._w / qq.w)
      }
      divideToRef(qq, Eq) {
        return Eq.x = this._x / qq.x, Eq.y = this._y / qq.y, Eq.z = this._z / qq.z, Eq.w = this._w / qq.w, Eq
      }
      divideInPlace(qq) {
        return this.divideToRef(qq, this)
      }
      minimizeInPlace(qq) {
        return qq.x < this._x && (this.x = qq.x), qq.y < this._y && (this.y = qq.y), qq.z < this._z && (this.z = qq.z), qq.w < this._w && (this.w = qq.w), this
      }
      maximizeInPlace(qq) {
        return qq.x > this._x && (this.x = qq.x), qq.y > this._y && (this.y = qq.y), qq.z > this._z && (this.z = qq.z), qq.w > this._w && (this.w = qq.w), this
      }
      minimizeInPlaceFromFloats(qq, Eq, gq, Yq) {
        return this.x = Math.min(qq, this._x), this.y = Math.min(Eq, this._y), this.z = Math.min(gq, this._z), this.w = Math.min(Yq, this._w), this
      }
      maximizeInPlaceFromFloats(qq, Eq, gq, Yq) {
        return this.x = Math.max(qq, this._x), this.y = Math.max(Eq, this._y), this.z = Math.max(gq, this._z), this.w = Math.max(Yq, this._w), this
      }
      floorToRef(qq) {
        return qq.x = Math.floor(this._x), qq.y = Math.floor(this._y), qq.z = Math.floor(this._z), qq.w = Math.floor(this._w), qq
      }
      floor() {
        return new Nq(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(qq) {
        return qq.x = this._x - Math.floor(this._x), qq.y = this._y - Math.floor(this._y), qq.z = this._z - Math.floor(this._z), qq.w = this._w - Math.floor(this._w), qq
      }
      fract() {
        return new Nq(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(qq) {
        return 0 === qq || 1 === qq ? this : this.scaleInPlace(1 / qq)
      }
      normalizeToNew() {
        return this.normalizeToRef(new Nq)
      }
      normalizeToRef(qq) {
        const Eq = this.length();
        return 0 === Eq || 1 === Eq ? (qq.x = this._x, qq.y = this._y, qq.z = this._z, qq.w = this._w, qq) : this.scaleToRef(1 / Eq, qq)
      }
      toVector3() {
        return new Wq(this._x, this._y, this._z)
      }
      clone() {
        return new Nq(this._x, this._y, this._z, this._w)
      }
      WG(qq) {
        return this.x = qq.x, this.y = qq.y, this.z = qq.z, this.w = qq.w, this
      }
      Vqq(qq, Eq, gq, Yq) {
        return this.x = qq, this.y = Eq, this.z = gq, this.w = Yq, this
      }
      set(qq, Eq, gq, Yq) {
        return this.Vqq(qq, Eq, gq, Yq)
      }
      A4(qq) {
        return this.x = this.y = this.z = this.w = qq, this
      }
      dot(qq) {
        return this._x * qq.x + this._y * qq.y + this._z * qq.z + this._w * qq.w
      }
      static FromArray(qq, Eq) {
        return Eq || (Eq = 0), new Nq(qq[Eq], qq[Eq + 1], qq[Eq + 2], qq[Eq + 3])
      }
      static FromArrayToRef(qq, Eq, gq) {
        return gq.x = qq[Eq], gq.y = qq[Eq + 1], gq.z = qq[Eq + 2], gq.w = qq[Eq + 3], gq
      }
      static FromFloatArrayToRef(qq, Eq, gq) {
        return Nq.FromArrayToRef(qq, Eq, gq), gq
      }
      static FromFloatsToRef(qq, Eq, gq, Yq, lq) {
        return lq.x = qq, lq.y = Eq, lq.z = gq, lq.w = Yq, lq
      }
      static Zero() {
        return new Nq(0, 0, 0, 0)
      }
      static One() {
        return new Nq(1, 1, 1, 1)
      }
      static Random() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Nq((0, xq.RandomRange)(qq, Eq), (0, xq.RandomRange)(qq, Eq), (0, xq.RandomRange)(qq, Eq), (0, xq.RandomRange)(qq, Eq))
      }
      static RandomToRef() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          gq = arguments.length > 2 ? arguments[2] : void 0;
        return gq.x = (0, xq.RandomRange)(qq, Eq), gq.y = (0, xq.RandomRange)(qq, Eq), gq.z = (0, xq.RandomRange)(qq, Eq), gq.w = (0, xq.RandomRange)(qq, Eq), gq
      }
      static Clamp(qq, Eq, gq) {
        return Nq.ClampToRef(qq, Eq, gq, new Nq)
      }
      static ClampToRef(qq, Eq, gq, Yq) {
        return Yq.x = (0, xq.Clamp)(qq.x, Eq.x, gq.x), Yq.y = (0, xq.Clamp)(qq.y, Eq.y, gq.y), Yq.z = (0, xq.Clamp)(qq.z, Eq.z, gq.z), Yq.w = (0, xq.Clamp)(qq.w, Eq.w, gq.w), Yq
      }
      static CheckExtends(qq, Eq, gq) {
        Eq.minimizeInPlace(qq), gq.maximizeInPlace(qq)
      }
      static get ZeroReadOnly() {
        return Nq._ZeroReadOnly
      }
      static Normalize(qq) {
        return Nq.NormalizeToRef(qq, new Nq)
      }
      static NormalizeToRef(qq, Eq) {
        return qq.normalizeToRef(Eq), Eq
      }
      static Minimize(qq, Eq) {
        const gq = new Nq;
        return gq.WG(qq), gq.minimizeInPlace(Eq), gq
      }
      static Maximize(qq, Eq) {
        const gq = new Nq;
        return gq.WG(qq), gq.maximizeInPlace(Eq), gq
      }
      static Distance(qq, Eq) {
        return Math.sqrt(Nq.DistanceSquared(qq, Eq))
      }
      static DistanceSquared(qq, Eq) {
        const gq = qq.x - Eq.x,
          Yq = qq.y - Eq.y,
          lq = qq.z - Eq.z,
          Oq = qq.w - Eq.w;
        return gq * gq + Yq * Yq + lq * lq + Oq * Oq
      }
      static Center(qq, Eq) {
        return Nq.CenterToRef(qq, Eq, new Nq)
      }
      static CenterToRef(qq, Eq, gq) {
        return gq.x = (qq.x + Eq.x) / 2, gq.y = (qq.y + Eq.y) / 2, gq.z = (qq.z + Eq.z) / 2, gq.w = (qq.w + Eq.w) / 2, gq
      }
      static TransformCoordinates(qq, Eq) {
        return Nq.TransformCoordinatesToRef(qq, Eq, new Nq)
      }
      static TransformCoordinatesToRef(qq, Eq, gq) {
        return Nq.TransformCoordinatesFromFloatsToRef(qq._x, qq._y, qq._z, Eq, gq), gq
      }
      static TransformCoordinatesFromFloatsToRef(qq, Eq, gq, Yq, lq) {
        const Oq = Yq.m,
          mq = qq * Oq[0] + Eq * Oq[4] + gq * Oq[8] + Oq[12],
          xq = qq * Oq[1] + Eq * Oq[5] + gq * Oq[9] + Oq[13],
          Aq = qq * Oq[2] + Eq * Oq[6] + gq * Oq[10] + Oq[14],
          cq = qq * Oq[3] + Eq * Oq[7] + gq * Oq[11] + Oq[15];
        return lq.x = mq, lq.y = xq, lq.z = Aq, lq.w = cq, lq
      }
      static TransformNormal(qq, Eq) {
        return Nq.TransformNormalToRef(qq, Eq, new Nq)
      }
      static TransformNormalToRef(qq, Eq, gq) {
        const Yq = Eq.m,
          lq = qq.x * Yq[0] + qq.y * Yq[4] + qq.z * Yq[8],
          Oq = qq.x * Yq[1] + qq.y * Yq[5] + qq.z * Yq[9],
          mq = qq.x * Yq[2] + qq.y * Yq[6] + qq.z * Yq[10];
        return gq.x = lq, gq.y = Oq, gq.z = mq, gq.w = qq.w, gq
      }
      static TransformNormalFromFloatsToRef(qq, Eq, gq, Yq, lq, Oq) {
        const mq = lq.m;
        return Oq.x = qq * mq[0] + Eq * mq[4] + gq * mq[8], Oq.y = qq * mq[1] + Eq * mq[5] + gq * mq[9], Oq.z = qq * mq[2] + Eq * mq[6] + gq * mq[10], Oq.w = Yq, Oq
      }
      static FromVector3(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Nq(qq._x, qq._y, qq._z, Eq)
      }
      static Dot(qq, Eq) {
        return qq.x * Eq.x + qq.y * Eq.y + qq.z * Eq.z + qq.w * Eq.w
      }
    }
    Nq._V8PerformanceHack = new Nq(.5, .5, .5, .5), Nq._ZeroReadOnly = Nq.Zero();
    class aq {
      get x() {
        return this._x
      }
      set x(qq) {
        this._x = qq, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(qq) {
        this._y = qq, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(qq) {
        this._z = qq, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(qq) {
        this._w = qq, this._isDirty = !0
      }
      constructor() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = qq, this._y = Eq, this._z = gq, this._w = Yq
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let qq = uq(this._x);
        return qq = 397 * qq ^ uq(this._y), qq = 397 * qq ^ uq(this._z), qq = 397 * qq ^ uq(this._w), qq
      }
      bYq() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return qq[Eq] = this._x, qq[Eq + 1] = this._y, qq[Eq + 2] = this._z, qq[Eq + 3] = this._w, this
      }
      ogq(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return aq.FromArrayToRef(qq, Eq, this)
      }
      equals(qq) {
        return qq && this._x === qq._x && this._y === qq._y && this._z === qq._z && this._w === qq._w
      }
      equalsWithEpsilon(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yq.c;
        return qq && (0, xq.WithinEpsilon)(this._x, qq._x, Eq) && (0, xq.WithinEpsilon)(this._y, qq._y, Eq) && (0, xq.WithinEpsilon)(this._z, qq._z, Eq) && (0, xq.WithinEpsilon)(this._w, qq._w, Eq)
      }
      isApprox(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Yq.c;
        return qq && ((0, xq.WithinEpsilon)(this._x, qq._x, Eq) && (0, xq.WithinEpsilon)(this._y, qq._y, Eq) && (0, xq.WithinEpsilon)(this._z, qq._z, Eq) && (0, xq.WithinEpsilon)(this._w, qq._w, Eq) || (0, xq.WithinEpsilon)(this._x, -qq._x, Eq) && (0, xq.WithinEpsilon)(this._y, -qq._y, Eq) && (0, xq.WithinEpsilon)(this._z, -qq._z, Eq) && (0, xq.WithinEpsilon)(this._w, -qq._w, Eq))
      }
      clone() {
        return new aq(this._x, this._y, this._z, this._w)
      }
      WG(qq) {
        return this._x = qq._x, this._y = qq._y, this._z = qq._z, this._w = qq._w, this._isDirty = !0, this
      }
      Vqq(qq, Eq, gq, Yq) {
        return this._x = qq, this._y = Eq, this._z = gq, this._w = Yq, this._isDirty = !0, this
      }
      set(qq, Eq, gq, Yq) {
        return this.Vqq(qq, Eq, gq, Yq)
      }
      A4(qq) {
        return this.Vqq(qq, qq, qq, qq)
      }
      add(qq) {
        return new aq(this._x + qq._x, this._y + qq._y, this._z + qq._z, this._w + qq._w)
      }
      addInPlace(qq) {
        return this._x += qq._x, this._y += qq._y, this._z += qq._z, this._w += qq._w, this._isDirty = !0, this
      }
      addToRef(qq, Eq) {
        return Eq._x = this._x + qq._x, Eq._y = this._y + qq._y, Eq._z = this._z + qq._z, Eq._w = this._w + qq._w, Eq._isDirty = !0, Eq
      }
      addInPlaceFromFloats(qq, Eq, gq, Yq) {
        return this._x += qq, this._y += Eq, this._z += gq, this._w += Yq, this._isDirty = !0, this
      }
      subtractToRef(qq, Eq) {
        return Eq._x = this._x - qq._x, Eq._y = this._y - qq._y, Eq._z = this._z - qq._z, Eq._w = this._w - qq._w, Eq._isDirty = !0, Eq
      }
      subtractFromFloats(qq, Eq, gq, Yq) {
        return this.subtractFromFloatsToRef(qq, Eq, gq, Yq, new aq)
      }
      subtractFromFloatsToRef(qq, Eq, gq, Yq, lq) {
        return lq._x = this._x - qq, lq._y = this._y - Eq, lq._z = this._z - gq, lq._w = this._w - Yq, lq._isDirty = !0, lq
      }
      subtract(qq) {
        return new aq(this._x - qq._x, this._y - qq._y, this._z - qq._z, this._w - qq._w)
      }
      KYq(qq) {
        return this._x -= qq._x, this._y -= qq._y, this._z -= qq._z, this._w -= qq._w, this._isDirty = !0, this
      }
      scale(qq) {
        return new aq(this._x * qq, this._y * qq, this._z * qq, this._w * qq)
      }
      scaleToRef(qq, Eq) {
        return Eq._x = this._x * qq, Eq._y = this._y * qq, Eq._z = this._z * qq, Eq._w = this._w * qq, Eq._isDirty = !0, Eq
      }
      scaleInPlace(qq) {
        return this._x *= qq, this._y *= qq, this._z *= qq, this._w *= qq, this._isDirty = !0, this
      }
      scaleAndAddToRef(qq, Eq) {
        return Eq._x += this._x * qq, Eq._y += this._y * qq, Eq._z += this._z * qq, Eq._w += this._w * qq, Eq._isDirty = !0, Eq
      }
      multiply(qq) {
        const Eq = new aq(0, 0, 0, 1);
        return this.multiplyToRef(qq, Eq), Eq
      }
      multiplyToRef(qq, Eq) {
        const gq = this._x * qq._w + this._y * qq._z - this._z * qq._y + this._w * qq._x,
          Yq = -this._x * qq._z + this._y * qq._w + this._z * qq._x + this._w * qq._y,
          lq = this._x * qq._y - this._y * qq._x + this._z * qq._w + this._w * qq._z,
          Oq = -this._x * qq._x - this._y * qq._y - this._z * qq._z + this._w * qq._w;
        return Eq.Vqq(gq, Yq, lq, Oq), Eq
      }
      multiplyInPlace(qq) {
        return this.multiplyToRef(qq, this)
      }
      multiplyByFloats(qq, Eq, gq, Yq) {
        return this._x *= qq, this._y *= Eq, this._z *= gq, this._w *= Yq, this._isDirty = !0, this
      }
      divide(qq) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(qq, Eq) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(qq) {
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
      nY() {
        return this.negateToRef(new aq)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(qq) {
        return qq._x = -this._x, qq._y = -this._y, qq._z = -this._z, qq._w = -this._w, qq._isDirty = !0, qq
      }
      Cmq(qq, Eq, gq, Yq) {
        return this._x === qq && this._y === Eq && this._z === gq && this._w === Yq
      }
      floorToRef(qq) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(qq) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(qq) {
        return qq.Vqq(-this._x, -this._y, -this._z, this._w), qq
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new aq(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const qq = this.conjugate(),
          Eq = this.lengthSquared();
        return 0 == Eq || 1 == Eq || qq.scaleInPlace(1 / Eq), qq
      }
      invertInPlace() {
        this.conjugateInPlace();
        const qq = this.lengthSquared();
        return 0 == qq || 1 == qq || this.scaleInPlace(1 / qq), this
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
      normalizeFromLength(qq) {
        return 0 === qq || 1 === qq ? this : this.scaleInPlace(1 / qq)
      }
      normalizeToNew() {
        const qq = new aq(0, 0, 0, 1);
        return this.normalizeToRef(qq), qq
      }
      normalizeToRef(qq) {
        const Eq = this.length();
        return 0 === Eq || 1 === Eq ? qq.Vqq(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / Eq, qq)
      }
      toEulerAngles() {
        const qq = Wq.Zero();
        return this.toEulerAnglesToRef(qq), qq
      }
      toEulerAnglesToRef(qq) {
        const Eq = this._z,
          gq = this._x,
          Yq = this._y,
          lq = this._w,
          Oq = Yq * Eq - gq * lq,
          mq = .4999999;
        if (Oq < -mq) qq._y = 2 * Math.atan2(Yq, lq), qq._x = Math.PI / 2, qq._z = 0, qq._isDirty = !0;
        else if (Oq > mq) qq._y = 2 * Math.atan2(Yq, lq), qq._x = -Math.PI / 2, qq._z = 0, qq._isDirty = !0;
        else {
          const mq = lq * lq,
            xq = Eq * Eq,
            Aq = gq * gq,
            cq = Yq * Yq;
          qq._z = Math.atan2(2 * (gq * Yq + Eq * lq), -xq - Aq + cq + mq), qq._x = Math.asin(-2 * Oq), qq._y = Math.atan2(2 * (Eq * gq + Yq * lq), xq - Aq - cq + mq), qq._isDirty = !0
        }
        return qq
      }
      toAlphaBetaGammaToRef(qq) {
        const Eq = this._z,
          gq = this._x,
          Yq = this._y,
          lq = this._w,
          Oq = Math.sqrt(gq * gq + Yq * Yq),
          mq = Math.sqrt(Eq * Eq + lq * lq),
          xq = 2 * Math.atan2(Oq, mq),
          Aq = 2 * Math.atan2(Eq, lq),
          cq = 2 * Math.atan2(Yq, gq),
          uq = (Aq + cq) / 2,
          Bq = (Aq - cq) / 2;
        return qq.set(Bq, xq, uq), qq
      }
      toRotationMatrix(qq) {
        return Vq.FromQuaternionToRef(this, qq), qq
      }
      fromRotationMatrix(qq) {
        return aq.FromRotationMatrixToRef(qq, this), this
      }
      dot(qq) {
        return this._x * qq._x + this._y * qq._y + this._z * qq._z + this._w * qq._w
      }
      toAxisAngle() {
        const qq = Wq.Zero();
        return {
          axis: qq,
          angle: this.toAxisAngleToRef(qq)
        }
      }
      toAxisAngleToRef(qq) {
        let Eq;
        const gq = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          Yq = this._w;
        return gq > 0 ? (Eq = 2 * Math.atan2(gq, Yq), qq.set(this._x / gq, this._y / gq, this._z / gq)) : (Eq = 0, qq.set(1, 0, 0)), Eq
      }
      static FromRotationMatrix(qq) {
        const Eq = new aq;
        return aq.FromRotationMatrixToRef(qq, Eq), Eq
      }
      static FromRotationMatrixToRef(qq, Eq) {
        const gq = qq.m,
          Yq = gq[0],
          lq = gq[4],
          Oq = gq[8],
          mq = gq[1],
          xq = gq[5],
          Aq = gq[9],
          cq = gq[2],
          uq = gq[6],
          Bq = gq[10],
          Wq = Yq + xq + Bq;
        let Nq;
        return Wq > 0 ? (Nq = .5 / Math.sqrt(Wq + 1), Eq._w = .25 / Nq, Eq._x = (uq - Aq) * Nq, Eq._y = (Oq - cq) * Nq, Eq._z = (mq - lq) * Nq, Eq._isDirty = !0) : Yq > xq && Yq > Bq ? (Nq = 2 * Math.sqrt(1 + Yq - xq - Bq), Eq._w = (uq - Aq) / Nq, Eq._x = .25 * Nq, Eq._y = (lq + mq) / Nq, Eq._z = (Oq + cq) / Nq, Eq._isDirty = !0) : xq > Bq ? (Nq = 2 * Math.sqrt(1 + xq - Yq - Bq), Eq._w = (Oq - cq) / Nq, Eq._x = (lq + mq) / Nq, Eq._y = .25 * Nq, Eq._z = (Aq + uq) / Nq, Eq._isDirty = !0) : (Nq = 2 * Math.sqrt(1 + Bq - Yq - xq), Eq._w = (mq - lq) / Nq, Eq._x = (Oq + cq) / Nq, Eq._y = (Aq + uq) / Nq, Eq._z = .25 * Nq, Eq._isDirty = !0), Eq
      }
      static Dot(qq, Eq) {
        return qq._x * Eq._x + qq._y * Eq._y + qq._z * Eq._z + qq._w * Eq._w
      }
      static AreClose(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const Yq = aq.Dot(qq, Eq);
        return 1 - Yq * Yq <= gq
      }
      static SmoothToRef(qq, Eq, gq, Yq, lq) {
        let Oq = 0 === Yq ? 1 : gq / Yq;
        return Oq = (0, xq.Clamp)(Oq, 0, 1), aq.SlerpToRef(qq, Eq, Oq, lq), lq
      }
      static Zero() {
        return new aq(0, 0, 0, 0)
      }
      static Inverse(qq) {
        return new aq(-qq._x, -qq._y, -qq._z, qq._w)
      }
      static InverseToRef(qq, Eq) {
        return Eq.set(-qq._x, -qq._y, -qq._z, qq._w), Eq
      }
      static Identity() {
        return new aq(0, 0, 0, 1)
      }
      static IsIdentity(qq) {
        return qq && 0 === qq._x && 0 === qq._y && 0 === qq._z && 1 === qq._w
      }
      static RotationAxis(qq, Eq) {
        return aq.RotationAxisToRef(qq, Eq, new aq)
      }
      static RotationAxisToRef(qq, Eq, gq) {
        gq._w = Math.cos(Eq / 2);
        const Yq = Math.sin(Eq / 2) / qq.length();
        return gq._x = qq._x * Yq, gq._y = qq._y * Yq, gq._z = qq._z * Yq, gq._isDirty = !0, gq
      }
      static FromArray(qq, Eq) {
        return Eq || (Eq = 0), new aq(qq[Eq], qq[Eq + 1], qq[Eq + 2], qq[Eq + 3])
      }
      static FromArrayToRef(qq, Eq, gq) {
        return gq._x = qq[Eq], gq._y = qq[Eq + 1], gq._z = qq[Eq + 2], gq._w = qq[Eq + 3], gq._isDirty = !0, gq
      }
      static FromFloatsToRef(qq, Eq, gq, Yq, lq) {
        return lq.Vqq(qq, Eq, gq, Yq), lq
      }
      static FromEulerAngles(qq, Eq, gq) {
        const Yq = new aq;
        return aq.RotationYawPitchRollToRef(Eq, qq, gq, Yq), Yq
      }
      static FromEulerAnglesToRef(qq, Eq, gq, Yq) {
        return aq.RotationYawPitchRollToRef(Eq, qq, gq, Yq), Yq
      }
      static FromEulerVector(qq) {
        const Eq = new aq;
        return aq.RotationYawPitchRollToRef(qq._y, qq._x, qq._z, Eq), Eq
      }
      static FromEulerVectorToRef(qq, Eq) {
        return aq.RotationYawPitchRollToRef(qq._y, qq._x, qq._z, Eq), Eq
      }
      static FromUnitVectorsToRef(qq, Eq, gq) {
        let lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Yq.c;
        const Oq = Wq.Dot(qq, Eq) + 1;
        return Oq < lq ? Math.abs(qq.x) > Math.abs(qq.z) ? gq.set(-qq.y, qq.x, 0, 0) : gq.set(0, -qq.z, qq.y, 0) : (Wq.CrossToRef(qq, Eq, jq.Na[0]), gq.set(jq.Na[0].x, jq.Na[0].y, jq.Na[0].z, Oq)), gq.normalize()
      }
      static RotationYawPitchRoll(qq, Eq, gq) {
        const Yq = new aq;
        return aq.RotationYawPitchRollToRef(qq, Eq, gq, Yq), Yq
      }
      static RotationYawPitchRollToRef(qq, Eq, gq, Yq) {
        const lq = .5 * gq,
          Oq = .5 * Eq,
          mq = .5 * qq,
          xq = Math.sin(lq),
          Aq = Math.cos(lq),
          cq = Math.sin(Oq),
          uq = Math.cos(Oq),
          Bq = Math.sin(mq),
          Wq = Math.cos(mq);
        return Yq._x = Wq * cq * Aq + Bq * uq * xq, Yq._y = Bq * uq * Aq - Wq * cq * xq, Yq._z = Wq * uq * xq - Bq * cq * Aq, Yq._w = Wq * uq * Aq + Bq * cq * xq, Yq._isDirty = !0, Yq
      }
      static RotationAlphaBetaGamma(qq, Eq, gq) {
        const Yq = new aq;
        return aq.RotationAlphaBetaGammaToRef(qq, Eq, gq, Yq), Yq
      }
      static RotationAlphaBetaGammaToRef(qq, Eq, gq, Yq) {
        const lq = .5 * (gq + qq),
          Oq = .5 * (gq - qq),
          mq = .5 * Eq;
        return Yq._x = Math.cos(Oq) * Math.sin(mq), Yq._y = Math.sin(Oq) * Math.sin(mq), Yq._z = Math.sin(lq) * Math.cos(mq), Yq._w = Math.cos(lq) * Math.cos(mq), Yq._isDirty = !0, Yq
      }
      static RotationQuaternionFromAxis(qq, Eq, gq) {
        const Yq = new aq(0, 0, 0, 0);
        return aq.RotationQuaternionFromAxisToRef(qq, Eq, gq, Yq), Yq
      }
      static RotationQuaternionFromAxisToRef(qq, Eq, gq, Yq) {
        const lq = dq.Matrix[0];
        return qq = qq.normalizeToRef(dq.Na[0]), Eq = Eq.normalizeToRef(dq.Na[1]), gq = gq.normalizeToRef(dq.Na[2]), Vq.FromXYZAxesToRef(qq, Eq, gq, lq), aq.FromRotationMatrixToRef(lq, Yq), Yq
      }
      static FromLookDirectionLH(qq, Eq) {
        const gq = new aq;
        return aq.FromLookDirectionLHToRef(qq, Eq, gq), gq
      }
      static FromLookDirectionLHToRef(qq, Eq, gq) {
        const Yq = dq.Matrix[0];
        return Vq.LookDirectionLHToRef(qq, Eq, Yq), aq.FromRotationMatrixToRef(Yq, gq), gq
      }
      static FromLookDirectionRH(qq, Eq) {
        const gq = new aq;
        return aq.FromLookDirectionRHToRef(qq, Eq, gq), gq
      }
      static FromLookDirectionRHToRef(qq, Eq, gq) {
        const Yq = dq.Matrix[0];
        return Vq.LookDirectionRHToRef(qq, Eq, Yq), aq.FromRotationMatrixToRef(Yq, gq)
      }
      static Slerp(qq, Eq, gq) {
        const Yq = aq.Identity();
        return aq.SlerpToRef(qq, Eq, gq, Yq), Yq
      }
      static SlerpToRef(qq, Eq, gq, Yq) {
        let lq, Oq, mq = qq._x * Eq._x + qq._y * Eq._y + qq._z * Eq._z + qq._w * Eq._w,
          xq = !1;
        if (mq < 0 && (xq = !0, mq = -mq), mq > .999999) Oq = 1 - gq, lq = xq ? -gq : gq;
        else {
          const qq = Math.acos(mq),
            Eq = 1 / Math.sin(qq);
          Oq = Math.sin((1 - gq) * qq) * Eq, lq = xq ? -Math.sin(gq * qq) * Eq : Math.sin(gq * qq) * Eq
        }
        return Yq._x = Oq * qq._x + lq * Eq._x, Yq._y = Oq * qq._y + lq * Eq._y, Yq._z = Oq * qq._z + lq * Eq._z, Yq._w = Oq * qq._w + lq * Eq._w, Yq._isDirty = !0, Yq
      }
      static Hermite(qq, Eq, gq, Yq, lq) {
        const Oq = lq * lq,
          mq = lq * Oq,
          xq = 2 * mq - 3 * Oq + 1,
          Aq = -2 * mq + 3 * Oq,
          cq = mq - 2 * Oq + lq,
          uq = mq - Oq,
          Bq = qq._x * xq + gq._x * Aq + Eq._x * cq + Yq._x * uq,
          Wq = qq._y * xq + gq._y * Aq + Eq._y * cq + Yq._y * uq,
          Nq = qq._z * xq + gq._z * Aq + Eq._z * cq + Yq._z * uq,
          Vq = qq._w * xq + gq._w * Aq + Eq._w * cq + Yq._w * uq;
        return new aq(Bq, Wq, Nq, Vq)
      }
      static Hermite1stDerivative(qq, Eq, gq, Yq, lq) {
        const Oq = new aq;
        return this.Hermite1stDerivativeToRef(qq, Eq, gq, Yq, lq, Oq), Oq
      }
      static Hermite1stDerivativeToRef(qq, Eq, gq, Yq, lq, Oq) {
        const mq = lq * lq;
        return Oq._x = 6 * (mq - lq) * qq._x + (3 * mq - 4 * lq + 1) * Eq._x + 6 * (-mq + lq) * gq._x + (3 * mq - 2 * lq) * Yq._x, Oq._y = 6 * (mq - lq) * qq._y + (3 * mq - 4 * lq + 1) * Eq._y + 6 * (-mq + lq) * gq._y + (3 * mq - 2 * lq) * Yq._y, Oq._z = 6 * (mq - lq) * qq._z + (3 * mq - 4 * lq + 1) * Eq._z + 6 * (-mq + lq) * gq._z + (3 * mq - 2 * lq) * Yq._z, Oq._w = 6 * (mq - lq) * qq._w + (3 * mq - 4 * lq + 1) * Eq._w + 6 * (-mq + lq) * gq._w + (3 * mq - 2 * lq) * Yq._w, Oq._isDirty = !0, Oq
      }
      static Normalize(qq) {
        const Eq = aq.Zero();
        return aq.NormalizeToRef(qq, Eq), Eq
      }
      static NormalizeToRef(qq, Eq) {
        return qq.normalizeToRef(Eq), Eq
      }
      static Clamp(qq, Eq, gq) {
        const Yq = new aq;
        return aq.ClampToRef(qq, Eq, gq, Yq), Yq
      }
      static ClampToRef(qq, Eq, gq, Yq) {
        return Yq.Vqq((0, xq.Clamp)(qq.x, Eq.x, gq.x), (0, xq.Clamp)(qq.y, Eq.y, gq.y), (0, xq.Clamp)(qq.z, Eq.z, gq.z), (0, xq.Clamp)(qq.w, Eq.w, gq.w))
      }
      static Random() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new aq((0, xq.RandomRange)(qq, Eq), (0, xq.RandomRange)(qq, Eq), (0, xq.RandomRange)(qq, Eq), (0, xq.RandomRange)(qq, Eq))
      }
      static RandomToRef() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).Vqq((0, xq.RandomRange)(qq, Eq), (0, xq.RandomRange)(qq, Eq), (0, xq.RandomRange)(qq, Eq), (0, xq.RandomRange)(qq, Eq))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(qq, Eq) {
        return Math.sqrt(aq.DistanceSquared(qq, Eq))
      }
      static DistanceSquared(qq, Eq) {
        const gq = qq.x - Eq.x,
          Yq = qq.y - Eq.y,
          lq = qq.z - Eq.z,
          Oq = qq.w - Eq.w;
        return gq * gq + Yq * Yq + lq * lq + Oq * Oq
      }
      static Center(qq, Eq) {
        return aq.CenterToRef(qq, Eq, aq.Zero())
      }
      static CenterToRef(qq, Eq, gq) {
        return gq.Vqq((qq.x + Eq.x) / 2, (qq.y + Eq.y) / 2, (qq.z + Eq.z) / 2, (qq.w + Eq.w) / 2)
      }
    }
    aq._V8PerformanceHack = new aq(.5, .5, .5, .5);
    class Vq {
      static get Use64Bits() {
        return Oq.b.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = Aq.i._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Yq = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = qq, this._isIdentity3x2 = qq || gq, this._isIdentityDirty = !this._isIdentity && Eq, this._isIdentity3x2Dirty = !this._isIdentity3x2 && Yq
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, Oq.b.MatrixTrackPrecisionChange && Oq.b.MatrixTrackedMatrices.push(this), this._m = new Oq.b.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const qq = this._m;
          this._isIdentity = 1 === qq[0] && 0 === qq[1] && 0 === qq[2] && 0 === qq[3] && 0 === qq[4] && 1 === qq[5] && 0 === qq[6] && 0 === qq[7] && 0 === qq[8] && 0 === qq[9] && 1 === qq[10] && 0 === qq[11] && 0 === qq[12] && 0 === qq[13] && 0 === qq[14] && 1 === qq[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const qq = this._m,
          Eq = qq[0],
          gq = qq[1],
          Yq = qq[2],
          lq = qq[3],
          Oq = qq[4],
          mq = qq[5],
          xq = qq[6],
          Aq = qq[7],
          cq = qq[8],
          uq = qq[9],
          Bq = qq[10],
          Wq = qq[11],
          Nq = qq[12],
          aq = qq[13],
          Vq = qq[14],
          dq = qq[15],
          jq = Bq * dq - Vq * Wq,
          Hq = uq * dq - aq * Wq,
          oq = uq * Vq - aq * Bq,
          Pq = cq * dq - Nq * Wq,
          Qq = cq * Vq - Bq * Nq,
          yq = cq * aq - Nq * uq;
        return Eq * +(mq * jq - xq * Hq + Aq * oq) + gq * -(Oq * jq - xq * Pq + Aq * Qq) + Yq * +(Oq * Hq - mq * Pq + Aq * yq) + lq * -(Oq * oq - mq * Qq + xq * yq)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!qq) return this._m;
        const gq = this._m;
        for (let Yq = 0; Yq < 16; Yq++) qq[Eq + Yq] = gq[Yq];
        return this
      }
      bYq() {
        return this._m
      }
      ogq(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Vq.FromArrayToRef(qq, Eq, this)
      }
      Vqq() {
        for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
        return Vq.FromArrayToRef(Eq, 0, this)
      }
      set() {
        const qq = this._m;
        for (let Eq = 0; Eq < 16; Eq++) qq[Eq] = Eq < 0 || arguments.length <= Eq ? void 0 : arguments[Eq];
        return this.markAsUpdated(), this
      }
      A4(qq) {
        const Eq = this._m;
        for (let gq = 0; gq < 16; gq++) Eq[gq] = qq;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return Vq.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(qq) {
        const Eq = new Vq;
        return this.addToRef(qq, Eq), Eq
      }
      addToRef(qq, Eq) {
        const gq = this._m,
          Yq = Eq._m,
          lq = qq.m;
        for (let Oq = 0; Oq < 16; Oq++) Yq[Oq] = gq[Oq] + lq[Oq];
        return Eq.markAsUpdated(), Eq
      }
      addToSelf(qq) {
        const Eq = this._m,
          gq = qq.m;
        return Eq[0] += gq[0], Eq[1] += gq[1], Eq[2] += gq[2], Eq[3] += gq[3], Eq[4] += gq[4], Eq[5] += gq[5], Eq[6] += gq[6], Eq[7] += gq[7], Eq[8] += gq[8], Eq[9] += gq[9], Eq[10] += gq[10], Eq[11] += gq[11], Eq[12] += gq[12], Eq[13] += gq[13], Eq[14] += gq[14], Eq[15] += gq[15], this.markAsUpdated(), this
      }
      addInPlace(qq) {
        const Eq = this._m,
          gq = qq.m;
        for (let Yq = 0; Yq < 16; Yq++) Eq[Yq] += gq[Yq];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const qq = this._m;
        for (let Eq = 0; Eq < 16; Eq++) qq[Eq] += Eq < 0 || arguments.length <= Eq ? void 0 : arguments[Eq];
        return this.markAsUpdated(), this
      }
      subtract(qq) {
        const Eq = this._m,
          gq = qq.m;
        for (let Yq = 0; Yq < 16; Yq++) Eq[Yq] -= gq[Yq];
        return this.markAsUpdated(), this
      }
      subtractToRef(qq, Eq) {
        const gq = this._m,
          Yq = qq.m,
          lq = Eq._m;
        for (let Oq = 0; Oq < 16; Oq++) lq[Oq] = gq[Oq] - Yq[Oq];
        return Eq.markAsUpdated(), Eq
      }
      KYq(qq) {
        const Eq = this._m,
          gq = qq.m;
        for (let Yq = 0; Yq < 16; Yq++) Eq[Yq] -= gq[Yq];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
        return this.subtractFromFloatsToRef(...Eq, new Vq)
      }
      subtractFromFloatsToRef() {
        for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
        const Yq = Eq.pop(),
          lq = this._m,
          Oq = Yq._m,
          mq = Eq;
        for (let xq = 0; xq < 16; xq++) Oq[xq] = lq[xq] - mq[xq];
        return Yq.markAsUpdated(), Yq
      }
      invertToRef(qq) {
        return !0 === this._isIdentity ? (Vq.IdentityToRef(qq), qq) : ((0, Aq.e)(this, qq.bYq()) ? qq.markAsUpdated() : qq.WG(this), qq)
      }
      addAtIndex(qq, Eq) {
        return this._m[qq] += Eq, this.markAsUpdated(), this
      }
      multiplyAtIndex(qq, Eq) {
        return this._m[qq] *= Eq, this.markAsUpdated(), this
      }
      setTranslationFromFloats(qq, Eq, gq) {
        return this._m[12] = qq, this._m[13] = Eq, this._m[14] = gq, this.markAsUpdated(), this
      }
      addTranslationFromFloats(qq, Eq, gq) {
        return this._m[12] += qq, this._m[13] += Eq, this._m[14] += gq, this.markAsUpdated(), this
      }
      setTranslation(qq) {
        return this.setTranslationFromFloats(qq._x, qq._y, qq._z)
      }
      getTranslation() {
        return new Wq(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(qq) {
        return qq.x = this._m[12], qq.y = this._m[13], qq.z = this._m[14], qq
      }
      removeRotationAndScaling() {
        const qq = this.m;
        return Vq.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, qq[12], qq[13], qq[14], qq[15], this), this._updateIdentityStatus(0 === qq[12] && 0 === qq[13] && 0 === qq[14] && 1 === qq[15]), this
      }
      WG(qq) {
        qq.copyToArray(this._m);
        const Eq = qq;
        return this.updateFlag = Eq.updateFlag, this._updateIdentityStatus(Eq._isIdentity, Eq._isIdentityDirty, Eq._isIdentity3x2, Eq._isIdentity3x2Dirty), this
      }
      copyToArray(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, Aq.b)(this, qq, Eq), this
      }
      multiply(qq) {
        const Eq = new Vq;
        return this.multiplyToRef(qq, Eq), Eq
      }
      multiplyInPlace(qq) {
        const Eq = this._m,
          gq = qq.m;
        for (let Yq = 0; Yq < 16; Yq++) Eq[Yq] *= gq[Yq];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const qq = this._m;
        for (let Eq = 0; Eq < 16; Eq++) qq[Eq] *= Eq < 0 || arguments.length <= Eq ? void 0 : arguments[Eq];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
        const Yq = Eq.pop(),
          lq = this._m,
          Oq = Yq._m,
          mq = Eq;
        for (let xq = 0; xq < 16; xq++) Oq[xq] = lq[xq] * mq[xq];
        return Yq.markAsUpdated(), Yq
      }
      multiplyToRef(qq, Eq) {
        return this._isIdentity ? (Eq.WG(qq), Eq) : qq._isIdentity ? (Eq.WG(this), Eq) : (this.multiplyToArray(qq, Eq._m, 0), Eq.markAsUpdated(), Eq)
      }
      multiplyToArray(qq, Eq, gq) {
        return (0, Aq.m)(this, qq, Eq, gq), this
      }
      divide(qq) {
        return this.divideToRef(qq, new Vq)
      }
      divideToRef(qq, Eq) {
        const gq = this._m,
          Yq = qq.m,
          lq = Eq._m;
        for (let Oq = 0; Oq < 16; Oq++) lq[Oq] = gq[Oq] / Yq[Oq];
        return Eq.markAsUpdated(), Eq
      }
      divideInPlace(qq) {
        const Eq = this._m,
          gq = qq.m;
        for (let Yq = 0; Yq < 16; Yq++) Eq[Yq] /= gq[Yq];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(qq) {
        const Eq = this._m,
          gq = qq.m;
        for (let Yq = 0; Yq < 16; Yq++) Eq[Yq] = Math.min(Eq[Yq], gq[Yq]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const qq = this._m;
        for (let Eq = 0; Eq < 16; Eq++) qq[Eq] = Math.min(qq[Eq], Eq < 0 || arguments.length <= Eq ? void 0 : arguments[Eq]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(qq) {
        const Eq = this._m,
          gq = qq.m;
        for (let Yq = 0; Yq < 16; Yq++) Eq[Yq] = Math.max(Eq[Yq], gq[Yq]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const qq = this._m;
        for (let Eq = 0; Eq < 16; Eq++) qq[Eq] = Math.max(qq[Eq], Eq < 0 || arguments.length <= Eq ? void 0 : arguments[Eq]);
        return this.markAsUpdated(), this
      }
      nY() {
        return this.negateToRef(new Vq)
      }
      negateInPlace() {
        const qq = this._m;
        for (let Eq = 0; Eq < 16; Eq++) qq[Eq] = -qq[Eq];
        return this.markAsUpdated(), this
      }
      negateToRef(qq) {
        const Eq = this._m,
          gq = qq._m;
        for (let Yq = 0; Yq < 16; Yq++) gq[Yq] = -Eq[Yq];
        return qq.markAsUpdated(), qq
      }
      equals(qq) {
        const Eq = qq;
        if (!Eq) return !1;
        if ((this._isIdentity || Eq._isIdentity) && !this._isIdentityDirty && !Eq._isIdentityDirty) return this._isIdentity && Eq._isIdentity;
        const gq = this.m,
          Yq = Eq.m;
        return gq[0] === Yq[0] && gq[1] === Yq[1] && gq[2] === Yq[2] && gq[3] === Yq[3] && gq[4] === Yq[4] && gq[5] === Yq[5] && gq[6] === Yq[6] && gq[7] === Yq[7] && gq[8] === Yq[8] && gq[9] === Yq[9] && gq[10] === Yq[10] && gq[11] === Yq[11] && gq[12] === Yq[12] && gq[13] === Yq[13] && gq[14] === Yq[14] && gq[15] === Yq[15]
      }
      equalsWithEpsilon(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gq = this._m,
          Yq = qq.m;
        for (let lq = 0; lq < 16; lq++)
          if (!(0, xq.WithinEpsilon)(gq[lq], Yq[lq], Eq)) return !1;
        return !0
      }
      Cmq() {
        const qq = this._m;
        for (let Eq = 0; Eq < 16; Eq++)
          if (qq[Eq] != (Eq < 0 || arguments.length <= Eq ? void 0 : arguments[Eq])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new Vq)
      }
      floorToRef(qq) {
        const Eq = this._m,
          gq = qq._m;
        for (let Yq = 0; Yq < 16; Yq++) gq[Yq] = Math.floor(Eq[Yq]);
        return qq.markAsUpdated(), qq
      }
      fract() {
        return this.fractToRef(new Vq)
      }
      fractToRef(qq) {
        const Eq = this._m,
          gq = qq._m;
        for (let Yq = 0; Yq < 16; Yq++) gq[Yq] = Eq[Yq] - Math.floor(Eq[Yq]);
        return qq.markAsUpdated(), qq
      }
      clone() {
        const qq = new Vq;
        return qq.WG(this), qq
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let qq = uq(this._m[0]);
        for (let Eq = 1; Eq < 16; Eq++) qq = 397 * qq ^ uq(this._m[Eq]);
        return qq
      }
      decomposeToTransformNode(qq) {
        return qq.rotationQuaternion = qq.rotationQuaternion || new aq, this.decompose(qq.rc, qq.rotationQuaternion, qq.position)
      }
      decompose(qq, Eq, gq, Yq) {
        let lq = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return gq && gq.A4(0), qq && qq.A4(1), Eq && Eq.Vqq(0, 0, 0, 1), !0;
        const Oq = this._m;
        if (gq && gq.Vqq(Oq[12], Oq[13], Oq[14]), (qq = qq || dq.Na[0]).x = Math.sqrt(Oq[0] * Oq[0] + Oq[1] * Oq[1] + Oq[2] * Oq[2]), qq.y = Math.sqrt(Oq[4] * Oq[4] + Oq[5] * Oq[5] + Oq[6] * Oq[6]), qq.z = Math.sqrt(Oq[8] * Oq[8] + Oq[9] * Oq[9] + Oq[10] * Oq[10]), Yq) {
          const Eq = (lq ? Yq.absoluteScaling.x : Yq.rc.x) < 0 ? -1 : 1,
            gq = (lq ? Yq.absoluteScaling.y : Yq.rc.y) < 0 ? -1 : 1,
            Oq = (lq ? Yq.absoluteScaling.z : Yq.rc.z) < 0 ? -1 : 1;
          qq.x *= Eq, qq.y *= gq, qq.z *= Oq
        } else this.determinant() <= 0 && (qq.y *= -1);
        if (0 === qq._x || 0 === qq._y || 0 === qq._z) return Eq && Eq.Vqq(0, 0, 0, 1), !1;
        if (Eq) {
          const gq = 1 / qq._x,
            Yq = 1 / qq._y,
            lq = 1 / qq._z;
          Vq.FromValuesToRef(Oq[0] * gq, Oq[1] * gq, Oq[2] * gq, 0, Oq[4] * Yq, Oq[5] * Yq, Oq[6] * Yq, 0, Oq[8] * lq, Oq[9] * lq, Oq[10] * lq, 0, 0, 0, 0, 1, dq.Matrix[0]), aq.FromRotationMatrixToRef(dq.Matrix[0], Eq)
        }
        return !0
      }
      getRow(qq) {
        if (qq < 0 || qq > 3) return null;
        const Eq = 4 * qq;
        return new Nq(this._m[Eq + 0], this._m[Eq + 1], this._m[Eq + 2], this._m[Eq + 3])
      }
      getRowToRef(qq, Eq) {
        if (qq >= 0 && qq <= 3) {
          const gq = 4 * qq;
          Eq.x = this._m[gq + 0], Eq.y = this._m[gq + 1], Eq.z = this._m[gq + 2], Eq.w = this._m[gq + 3]
        }
        return Eq
      }
      setRow(qq, Eq) {
        return this.setRowFromFloats(qq, Eq.x, Eq.y, Eq.z, Eq.w)
      }
      transpose() {
        const qq = new Vq;
        return Vq.TransposeToRef(this, qq), qq
      }
      transposeToRef(qq) {
        return Vq.TransposeToRef(this, qq), qq
      }
      setRowFromFloats(qq, Eq, gq, Yq, lq) {
        if (qq < 0 || qq > 3) return this;
        const Oq = 4 * qq;
        return this._m[Oq + 0] = Eq, this._m[Oq + 1] = gq, this._m[Oq + 2] = Yq, this._m[Oq + 3] = lq, this.markAsUpdated(), this
      }
      scale(qq) {
        const Eq = new Vq;
        return this.scaleToRef(qq, Eq), Eq
      }
      scaleToRef(qq, Eq) {
        for (let gq = 0; gq < 16; gq++) Eq._m[gq] = this._m[gq] * qq;
        return Eq.markAsUpdated(), Eq
      }
      scaleAndAddToRef(qq, Eq) {
        for (let gq = 0; gq < 16; gq++) Eq._m[gq] += this._m[gq] * qq;
        return Eq.markAsUpdated(), Eq
      }
      scaleInPlace(qq) {
        const Eq = this._m;
        for (let gq = 0; gq < 16; gq++) Eq[gq] *= qq;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(qq) {
        const Eq = dq.Matrix[0];
        this.invertToRef(Eq), Eq.transposeToRef(qq);
        const gq = qq._m;
        return Vq.FromValuesToRef(gq[0], gq[1], gq[2], 0, gq[4], gq[5], gq[6], 0, gq[8], gq[9], gq[10], 0, 0, 0, 0, 1, qq), qq
      }
      getRotationMatrix() {
        const qq = new Vq;
        return this.getRotationMatrixToRef(qq), qq
      }
      getRotationMatrixToRef(qq) {
        const Eq = dq.Na[0];
        if (!this.decompose(Eq)) return Vq.IdentityToRef(qq), qq;
        const gq = this._m,
          Yq = 1 / Eq._x,
          lq = 1 / Eq._y,
          Oq = 1 / Eq._z;
        return Vq.FromValuesToRef(gq[0] * Yq, gq[1] * Yq, gq[2] * Yq, 0, gq[4] * lq, gq[5] * lq, gq[6] * lq, 0, gq[8] * Oq, gq[9] * Oq, gq[10] * Oq, 0, 0, 0, 0, 1, qq), qq
      }
      toggleModelMatrixHandInPlace() {
        const qq = this._m;
        return qq[2] *= -1, qq[6] *= -1, qq[8] *= -1, qq[9] *= -1, qq[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const qq = this._m;
        return qq[8] *= -1, qq[9] *= -1, qq[10] *= -1, qq[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(Hq, this), this
      }
      static FromArray(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const gq = new Vq;
        return Vq.FromArrayToRef(qq, Eq, gq), gq
      }
      static FromArrayToRef(qq, Eq, gq) {
        for (let Yq = 0; Yq < 16; Yq++) gq._m[Yq] = qq[Yq + Eq];
        return gq.markAsUpdated(), gq
      }
      static FromFloat32ArrayToRefScaled(qq, Eq, gq, Yq) {
        return Yq._m[0] = qq[0 + Eq] * gq, Yq._m[1] = qq[1 + Eq] * gq, Yq._m[2] = qq[2 + Eq] * gq, Yq._m[3] = qq[3 + Eq] * gq, Yq._m[4] = qq[4 + Eq] * gq, Yq._m[5] = qq[5 + Eq] * gq, Yq._m[6] = qq[6 + Eq] * gq, Yq._m[7] = qq[7 + Eq] * gq, Yq._m[8] = qq[8 + Eq] * gq, Yq._m[9] = qq[9 + Eq] * gq, Yq._m[10] = qq[10 + Eq] * gq, Yq._m[11] = qq[11 + Eq] * gq, Yq._m[12] = qq[12 + Eq] * gq, Yq._m[13] = qq[13 + Eq] * gq, Yq._m[14] = qq[14 + Eq] * gq, Yq._m[15] = qq[15 + Eq] * gq, Yq.markAsUpdated(), Yq
      }
      static get IdentityReadOnly() {
        return Vq._IdentityReadOnly
      }
      static FromValuesToRef(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, Vq, dq) {
        const jq = dq._m;
        jq[0] = qq, jq[1] = Eq, jq[2] = gq, jq[3] = Yq, jq[4] = lq, jq[5] = Oq, jq[6] = mq, jq[7] = xq, jq[8] = Aq, jq[9] = cq, jq[10] = uq, jq[11] = Bq, jq[12] = Wq, jq[13] = Nq, jq[14] = aq, jq[15] = Vq, dq.markAsUpdated()
      }
      static FromValues(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq, Wq, Nq, aq, dq) {
        const jq = new Vq,
          Hq = jq._m;
        return Hq[0] = qq, Hq[1] = Eq, Hq[2] = gq, Hq[3] = Yq, Hq[4] = lq, Hq[5] = Oq, Hq[6] = mq, Hq[7] = xq, Hq[8] = Aq, Hq[9] = cq, Hq[10] = uq, Hq[11] = Bq, Hq[12] = Wq, Hq[13] = Nq, Hq[14] = aq, Hq[15] = dq, jq.markAsUpdated(), jq
      }
      static Compose(qq, Eq, gq) {
        const Yq = new Vq;
        return Vq.ComposeToRef(qq, Eq, gq, Yq), Yq
      }
      static ComposeToRef(qq, Eq, gq, Yq) {
        const lq = Yq._m,
          Oq = Eq._x,
          mq = Eq._y,
          xq = Eq._z,
          Aq = Eq._w,
          cq = Oq + Oq,
          uq = mq + mq,
          Bq = xq + xq,
          Wq = Oq * cq,
          Nq = Oq * uq,
          aq = Oq * Bq,
          Vq = mq * uq,
          dq = mq * Bq,
          jq = xq * Bq,
          Hq = Aq * cq,
          oq = Aq * uq,
          Pq = Aq * Bq,
          Qq = qq._x,
          yq = qq._y,
          tq = qq._z;
        return lq[0] = (1 - (Vq + jq)) * Qq, lq[1] = (Nq + Pq) * Qq, lq[2] = (aq - oq) * Qq, lq[3] = 0, lq[4] = (Nq - Pq) * yq, lq[5] = (1 - (Wq + jq)) * yq, lq[6] = (dq + Hq) * yq, lq[7] = 0, lq[8] = (aq + oq) * tq, lq[9] = (dq - Hq) * tq, lq[10] = (1 - (Wq + Vq)) * tq, lq[11] = 0, lq[12] = gq._x, lq[13] = gq._y, lq[14] = gq._z, lq[15] = 1, Yq.markAsUpdated(), Yq
      }
      static Identity() {
        const qq = Vq.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return qq._updateIdentityStatus(!0), qq
      }
      static IdentityToRef(qq) {
        return Vq.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, qq), qq._updateIdentityStatus(!0), qq
      }
      static Zero() {
        const qq = Vq.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return qq._updateIdentityStatus(!1), qq
      }
      static RotationX(qq) {
        const Eq = new Vq;
        return Vq.RotationXToRef(qq, Eq), Eq
      }
      static Invert(qq) {
        const Eq = new Vq;
        return qq.invertToRef(Eq), Eq
      }
      static RotationXToRef(qq, Eq) {
        const gq = Math.sin(qq),
          Yq = Math.cos(qq);
        return Vq.FromValuesToRef(1, 0, 0, 0, 0, Yq, gq, 0, 0, -gq, Yq, 0, 0, 0, 0, 1, Eq), Eq._updateIdentityStatus(1 === Yq && 0 === gq), Eq
      }
      static RotationY(qq) {
        const Eq = new Vq;
        return Vq.RotationYToRef(qq, Eq), Eq
      }
      static RotationYToRef(qq, Eq) {
        const gq = Math.sin(qq),
          Yq = Math.cos(qq);
        return Vq.FromValuesToRef(Yq, 0, -gq, 0, 0, 1, 0, 0, gq, 0, Yq, 0, 0, 0, 0, 1, Eq), Eq._updateIdentityStatus(1 === Yq && 0 === gq), Eq
      }
      static RotationZ(qq) {
        const Eq = new Vq;
        return Vq.RotationZToRef(qq, Eq), Eq
      }
      static RotationZToRef(qq, Eq) {
        const gq = Math.sin(qq),
          Yq = Math.cos(qq);
        return Vq.FromValuesToRef(Yq, gq, 0, 0, -gq, Yq, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, Eq), Eq._updateIdentityStatus(1 === Yq && 0 === gq), Eq
      }
      static RotationAxis(qq, Eq) {
        const gq = new Vq;
        return Vq.RotationAxisToRef(qq, Eq, gq), gq
      }
      static RotationAxisToRef(qq, Eq, gq) {
        const Yq = Math.sin(-Eq),
          lq = Math.cos(-Eq),
          Oq = 1 - lq;
        qq = qq.normalizeToRef(dq.Na[0]);
        const mq = gq._m;
        return mq[0] = qq._x * qq._x * Oq + lq, mq[1] = qq._x * qq._y * Oq - qq._z * Yq, mq[2] = qq._x * qq._z * Oq + qq._y * Yq, mq[3] = 0, mq[4] = qq._y * qq._x * Oq + qq._z * Yq, mq[5] = qq._y * qq._y * Oq + lq, mq[6] = qq._y * qq._z * Oq - qq._x * Yq, mq[7] = 0, mq[8] = qq._z * qq._x * Oq - qq._y * Yq, mq[9] = qq._z * qq._y * Oq + qq._x * Yq, mq[10] = qq._z * qq._z * Oq + lq, mq[11] = 0, mq[12] = 0, mq[13] = 0, mq[14] = 0, mq[15] = 1, gq.markAsUpdated(), gq
      }
      static RotationAlignToRef(qq, Eq, gq) {
        let lq = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Oq = Wq.Dot(Eq, qq),
          mq = gq._m;
        if (Oq < -1 + Yq.c) mq[0] = -1, mq[1] = 0, mq[2] = 0, mq[3] = 0, mq[4] = 0, mq[5] = lq ? 1 : -1, mq[6] = 0, mq[7] = 0, mq[8] = 0, mq[9] = 0, mq[10] = lq ? -1 : 1, mq[11] = 0;
        else {
          const gq = Wq.Cross(Eq, qq),
            Yq = 1 / (1 + Oq);
          mq[0] = gq._x * gq._x * Yq + Oq, mq[1] = gq._y * gq._x * Yq - gq._z, mq[2] = gq._z * gq._x * Yq + gq._y, mq[3] = 0, mq[4] = gq._x * gq._y * Yq + gq._z, mq[5] = gq._y * gq._y * Yq + Oq, mq[6] = gq._z * gq._y * Yq - gq._x, mq[7] = 0, mq[8] = gq._x * gq._z * Yq - gq._y, mq[9] = gq._y * gq._z * Yq + gq._x, mq[10] = gq._z * gq._z * Yq + Oq, mq[11] = 0
        }
        return mq[12] = 0, mq[13] = 0, mq[14] = 0, mq[15] = 1, gq.markAsUpdated(), gq
      }
      static RotationYawPitchRoll(qq, Eq, gq) {
        const Yq = new Vq;
        return Vq.RotationYawPitchRollToRef(qq, Eq, gq, Yq), Yq
      }
      static RotationYawPitchRollToRef(qq, Eq, gq, Yq) {
        return aq.RotationYawPitchRollToRef(qq, Eq, gq, dq.Quaternion[0]), dq.Quaternion[0].toRotationMatrix(Yq), Yq
      }
      static Scaling(qq, Eq, gq) {
        const Yq = new Vq;
        return Vq.ScalingToRef(qq, Eq, gq, Yq), Yq
      }
      static ScalingToRef(qq, Eq, gq, Yq) {
        return Vq.FromValuesToRef(qq, 0, 0, 0, 0, Eq, 0, 0, 0, 0, gq, 0, 0, 0, 0, 1, Yq), Yq._updateIdentityStatus(1 === qq && 1 === Eq && 1 === gq), Yq
      }
      static Translation(qq, Eq, gq) {
        const Yq = new Vq;
        return Vq.TranslationToRef(qq, Eq, gq, Yq), Yq
      }
      static TranslationToRef(qq, Eq, gq, Yq) {
        return Vq.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, qq, Eq, gq, 1, Yq), Yq._updateIdentityStatus(0 === qq && 0 === Eq && 0 === gq), Yq
      }
      static Lerp(qq, Eq, gq) {
        const Yq = new Vq;
        return Vq.LerpToRef(qq, Eq, gq, Yq), Yq
      }
      static LerpToRef(qq, Eq, gq, Yq) {
        const lq = Yq._m,
          Oq = qq.m,
          mq = Eq.m;
        for (let xq = 0; xq < 16; xq++) lq[xq] = Oq[xq] * (1 - gq) + mq[xq] * gq;
        return Yq.markAsUpdated(), Yq
      }
      static DecomposeLerp(qq, Eq, gq) {
        const Yq = new Vq;
        return Vq.DecomposeLerpToRef(qq, Eq, gq, Yq), Yq
      }
      static DecomposeLerpToRef(qq, Eq, gq, Yq) {
        const lq = dq.Na[0],
          Oq = dq.Quaternion[0],
          mq = dq.Na[1];
        qq.decompose(lq, Oq, mq);
        const xq = dq.Na[2],
          Aq = dq.Quaternion[1],
          cq = dq.Na[3];
        Eq.decompose(xq, Aq, cq);
        const uq = dq.Na[4];
        Wq.LerpToRef(lq, xq, gq, uq);
        const Bq = dq.Quaternion[2];
        aq.SlerpToRef(Oq, Aq, gq, Bq);
        const Nq = dq.Na[5];
        return Wq.LerpToRef(mq, cq, gq, Nq), Vq.ComposeToRef(uq, Bq, Nq, Yq), Yq
      }
      static LookAtLH(qq, Eq, gq) {
        const Yq = new Vq;
        return Vq.LookAtLHToRef(qq, Eq, gq, Yq), Yq
      }
      static LookAtLHToRef(qq, Eq, gq, Yq) {
        const lq = dq.Na[0],
          Oq = dq.Na[1],
          mq = dq.Na[2];
        Eq.subtractToRef(qq, mq), mq.normalize(), Wq.CrossToRef(gq, mq, lq);
        const xq = lq.lengthSquared();
        0 === xq ? lq.x = 1 : lq.normalizeFromLength(Math.sqrt(xq)), Wq.CrossToRef(mq, lq, Oq), Oq.normalize();
        const Aq = -Wq.Dot(lq, qq),
          cq = -Wq.Dot(Oq, qq),
          uq = -Wq.Dot(mq, qq);
        return Vq.FromValuesToRef(lq._x, Oq._x, mq._x, 0, lq._y, Oq._y, mq._y, 0, lq._z, Oq._z, mq._z, 0, Aq, cq, uq, 1, Yq), Yq
      }
      static LookAtRH(qq, Eq, gq) {
        const Yq = new Vq;
        return Vq.LookAtRHToRef(qq, Eq, gq, Yq), Yq
      }
      static LookAtRHToRef(qq, Eq, gq, Yq) {
        const lq = dq.Na[0],
          Oq = dq.Na[1],
          mq = dq.Na[2];
        qq.subtractToRef(Eq, mq), mq.normalize(), Wq.CrossToRef(gq, mq, lq);
        const xq = lq.lengthSquared();
        0 === xq ? lq.x = 1 : lq.normalizeFromLength(Math.sqrt(xq)), Wq.CrossToRef(mq, lq, Oq), Oq.normalize();
        const Aq = -Wq.Dot(lq, qq),
          cq = -Wq.Dot(Oq, qq),
          uq = -Wq.Dot(mq, qq);
        return Vq.FromValuesToRef(lq._x, Oq._x, mq._x, 0, lq._y, Oq._y, mq._y, 0, lq._z, Oq._z, mq._z, 0, Aq, cq, uq, 1, Yq), Yq
      }
      static LookDirectionLH(qq, Eq) {
        const gq = new Vq;
        return Vq.LookDirectionLHToRef(qq, Eq, gq), gq
      }
      static LookDirectionLHToRef(qq, Eq, gq) {
        const Yq = dq.Na[0];
        Yq.WG(qq), Yq.scaleInPlace(-1);
        const lq = dq.Na[1];
        return Wq.CrossToRef(Eq, Yq, lq), Vq.FromValuesToRef(lq._x, lq._y, lq._z, 0, Eq._x, Eq._y, Eq._z, 0, Yq._x, Yq._y, Yq._z, 0, 0, 0, 0, 1, gq), gq
      }
      static LookDirectionRH(qq, Eq) {
        const gq = new Vq;
        return Vq.LookDirectionRHToRef(qq, Eq, gq), gq
      }
      static LookDirectionRHToRef(qq, Eq, gq) {
        const Yq = dq.Na[2];
        return Wq.CrossToRef(Eq, qq, Yq), Vq.FromValuesToRef(Yq._x, Yq._y, Yq._z, 0, Eq._x, Eq._y, Eq._z, 0, qq._x, qq._y, qq._z, 0, 0, 0, 0, 1, gq), gq
      }
      static OrthoLH(qq, Eq, gq, Yq, lq) {
        const Oq = new Vq;
        return Vq.OrthoLHToRef(qq, Eq, gq, Yq, Oq, lq), Oq
      }
      static OrthoLHToRef(qq, Eq, gq, Yq, lq, Oq) {
        const mq = 2 / qq,
          xq = 2 / Eq,
          Aq = 2 / (Yq - gq),
          cq = -(Yq + gq) / (Yq - gq);
        return Vq.FromValuesToRef(mq, 0, 0, 0, 0, xq, 0, 0, 0, 0, Aq, 0, 0, 0, cq, 1, lq), Oq && lq.multiplyToRef(Hq, lq), lq._updateIdentityStatus(1 === mq && 1 === xq && 1 === Aq && 0 === cq), lq
      }
      static OrthoOffCenterLH(qq, Eq, gq, Yq, lq, Oq, mq) {
        const xq = new Vq;
        return Vq.OrthoOffCenterLHToRef(qq, Eq, gq, Yq, lq, Oq, xq, mq), xq
      }
      static OrthoOffCenterLHToRef(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
        const Aq = 2 / (Eq - qq),
          cq = 2 / (Yq - gq),
          uq = 2 / (Oq - lq),
          Bq = -(Oq + lq) / (Oq - lq),
          Wq = (qq + Eq) / (qq - Eq),
          Nq = (Yq + gq) / (gq - Yq);
        return Vq.FromValuesToRef(Aq, 0, 0, 0, 0, cq, 0, 0, 0, 0, uq, 0, Wq, Nq, Bq, 1, mq), xq && mq.multiplyToRef(Hq, mq), mq.markAsUpdated(), mq
      }
      static ObliqueOffCenterLHToRef(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq) {
        const Bq = -mq * Math.cos(xq),
          Wq = -mq * Math.sin(xq);
        return Vq.TranslationToRef(0, 0, -Aq, dq.Matrix[1]), Vq.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Bq, Wq, 1, 0, 0, 0, 0, 1, dq.Matrix[0]), dq.Matrix[1].multiplyToRef(dq.Matrix[0], dq.Matrix[0]), Vq.TranslationToRef(0, 0, Aq, dq.Matrix[1]), dq.Matrix[0].multiplyToRef(dq.Matrix[1], dq.Matrix[0]), Vq.OrthoOffCenterLHToRef(qq, Eq, gq, Yq, lq, Oq, cq, uq), dq.Matrix[0].multiplyToRef(cq, cq), cq
      }
      static OrthoOffCenterRH(qq, Eq, gq, Yq, lq, Oq, mq) {
        const xq = new Vq;
        return Vq.OrthoOffCenterRHToRef(qq, Eq, gq, Yq, lq, Oq, xq, mq), xq
      }
      static OrthoOffCenterRHToRef(qq, Eq, gq, Yq, lq, Oq, mq, xq) {
        return Vq.OrthoOffCenterLHToRef(qq, Eq, gq, Yq, lq, Oq, mq, xq), mq._m[10] *= -1, mq
      }
      static ObliqueOffCenterRHToRef(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq) {
        const Bq = mq * Math.cos(xq),
          Wq = mq * Math.sin(xq);
        return Vq.TranslationToRef(0, 0, Aq, dq.Matrix[1]), Vq.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Bq, Wq, 1, 0, 0, 0, 0, 1, dq.Matrix[0]), dq.Matrix[1].multiplyToRef(dq.Matrix[0], dq.Matrix[0]), Vq.TranslationToRef(0, 0, -Aq, dq.Matrix[1]), dq.Matrix[0].multiplyToRef(dq.Matrix[1], dq.Matrix[0]), Vq.OrthoOffCenterRHToRef(qq, Eq, gq, Yq, lq, Oq, cq, uq), dq.Matrix[0].multiplyToRef(cq, cq), cq
      }
      static PerspectiveLH(qq, Eq, gq, Yq, lq) {
        let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const mq = new Vq,
          xq = 2 * gq / qq,
          Aq = 2 * gq / Eq,
          cq = (Yq + gq) / (Yq - gq),
          uq = -2 * Yq * gq / (Yq - gq),
          Bq = Math.tan(Oq);
        return Vq.FromValuesToRef(xq, 0, 0, 0, 0, Aq, 0, Bq, 0, 0, cq, 1, 0, 0, uq, 0, mq), lq && mq.multiplyToRef(Hq, mq), mq._updateIdentityStatus(!1), mq
      }
      static PerspectiveFovLH(qq, Eq, gq, Yq, lq) {
        let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const xq = new Vq;
        return Vq.PerspectiveFovLHToRef(qq, Eq, gq, Yq, xq, !0, lq, Oq, mq), xq
      }
      static PerspectiveFovLHToRef(qq, Eq, gq, Yq, lq) {
        let Oq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          mq = arguments.length > 6 ? arguments[6] : void 0,
          xq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Aq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const cq = gq,
          uq = Yq,
          Bq = 1 / Math.tan(.5 * qq),
          Wq = Oq ? Bq / Eq : Bq,
          Nq = Oq ? Bq : Bq * Eq,
          aq = Aq && 0 === cq ? -1 : 0 !== uq ? (uq + cq) / (uq - cq) : 1,
          dq = Aq && 0 === cq ? 2 * uq : 0 !== uq ? -2 * uq * cq / (uq - cq) : -2 * cq,
          jq = Math.tan(xq);
        return Vq.FromValuesToRef(Wq, 0, 0, 0, 0, Nq, 0, jq, 0, 0, aq, 1, 0, 0, dq, 0, lq), mq && lq.multiplyToRef(Hq, lq), lq._updateIdentityStatus(!1), lq
      }
      static PerspectiveFovReverseLHToRef(qq, Eq, gq, Yq, lq) {
        let Oq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          mq = arguments.length > 6 ? arguments[6] : void 0,
          xq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Aq = 1 / Math.tan(.5 * qq),
          cq = Oq ? Aq / Eq : Aq,
          uq = Oq ? Aq : Aq * Eq,
          Bq = Math.tan(xq);
        return Vq.FromValuesToRef(cq, 0, 0, 0, 0, uq, 0, Bq, 0, 0, -gq, 1, 0, 0, 1, 0, lq), mq && lq.multiplyToRef(Hq, lq), lq._updateIdentityStatus(!1), lq
      }
      static PerspectiveFovRH(qq, Eq, gq, Yq, lq) {
        let Oq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          mq = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const xq = new Vq;
        return Vq.PerspectiveFovRHToRef(qq, Eq, gq, Yq, xq, !0, lq, Oq, mq), xq
      }
      static PerspectiveFovRHToRef(qq, Eq, gq, Yq, lq) {
        let Oq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          mq = arguments.length > 6 ? arguments[6] : void 0,
          xq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Aq = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const cq = gq,
          uq = Yq,
          Bq = 1 / Math.tan(.5 * qq),
          Wq = Oq ? Bq / Eq : Bq,
          Nq = Oq ? Bq : Bq * Eq,
          aq = Aq && 0 === cq ? 1 : 0 !== uq ? -(uq + cq) / (uq - cq) : -1,
          dq = Aq && 0 === cq ? 2 * uq : 0 !== uq ? -2 * uq * cq / (uq - cq) : -2 * cq,
          jq = Math.tan(xq);
        return Vq.FromValuesToRef(Wq, 0, 0, 0, 0, Nq, 0, jq, 0, 0, aq, -1, 0, 0, dq, 0, lq), mq && lq.multiplyToRef(Hq, lq), lq._updateIdentityStatus(!1), lq
      }
      static PerspectiveFovReverseRHToRef(qq, Eq, gq, Yq, lq) {
        let Oq = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          mq = arguments.length > 6 ? arguments[6] : void 0,
          xq = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Aq = 1 / Math.tan(.5 * qq),
          cq = Oq ? Aq / Eq : Aq,
          uq = Oq ? Aq : Aq * Eq,
          Bq = Math.tan(xq);
        return Vq.FromValuesToRef(cq, 0, 0, 0, 0, uq, 0, Bq, 0, 0, -gq, -1, 0, 0, -1, 0, lq), mq && lq.multiplyToRef(Hq, lq), lq._updateIdentityStatus(!1), lq
      }
      static GetFinalMatrix(qq, Eq, gq, Yq, lq, Oq) {
        const mq = qq.width,
          xq = qq.height,
          Aq = qq.x,
          cq = qq.y,
          uq = Vq.FromValues(mq / 2, 0, 0, 0, 0, -xq / 2, 0, 0, 0, 0, Oq - lq, 0, Aq + mq / 2, xq / 2 + cq, lq, 1),
          Bq = new Vq;
        return Eq.multiplyToRef(gq, Bq), Bq.multiplyToRef(Yq, Bq), Bq.multiplyToRef(uq, Bq)
      }
      static GetAsMatrix2x2(qq) {
        const Eq = qq.m,
          gq = [Eq[0], Eq[1], Eq[4], Eq[5]];
        return Oq.b.MatrixUse64Bits ? gq : new Float32Array(gq)
      }
      static GetAsMatrix3x3(qq) {
        const Eq = qq.m,
          gq = [Eq[0], Eq[1], Eq[2], Eq[4], Eq[5], Eq[6], Eq[8], Eq[9], Eq[10]];
        return Oq.b.MatrixUse64Bits ? gq : new Float32Array(gq)
      }
      static Transpose(qq) {
        const Eq = new Vq;
        return Vq.TransposeToRef(qq, Eq), Eq
      }
      static TransposeToRef(qq, Eq) {
        const gq = qq.m,
          Yq = gq[0],
          lq = gq[4],
          Oq = gq[8],
          mq = gq[12],
          xq = gq[1],
          Aq = gq[5],
          cq = gq[9],
          uq = gq[13],
          Bq = gq[2],
          Wq = gq[6],
          Nq = gq[10],
          aq = gq[14],
          Vq = gq[3],
          dq = gq[7],
          jq = gq[11],
          Hq = gq[15],
          oq = Eq._m;
        return oq[0] = Yq, oq[1] = lq, oq[2] = Oq, oq[3] = mq, oq[4] = xq, oq[5] = Aq, oq[6] = cq, oq[7] = uq, oq[8] = Bq, oq[9] = Wq, oq[10] = Nq, oq[11] = aq, oq[12] = Vq, oq[13] = dq, oq[14] = jq, oq[15] = Hq, Eq.markAsUpdated(), Eq._updateIdentityStatus(qq._isIdentity, qq._isIdentityDirty), Eq
      }
      static Reflection(qq) {
        const Eq = new Vq;
        return Vq.ReflectionToRef(qq, Eq), Eq
      }
      static ReflectionToRef(qq, Eq) {
        qq.normalize();
        const gq = qq.normal.x,
          Yq = qq.normal.y,
          lq = qq.normal.z,
          Oq = -2 * gq,
          mq = -2 * Yq,
          xq = -2 * lq;
        return Vq.FromValuesToRef(Oq * gq + 1, mq * gq, xq * gq, 0, Oq * Yq, mq * Yq + 1, xq * Yq, 0, Oq * lq, mq * lq, xq * lq + 1, 0, Oq * qq.d, mq * qq.d, xq * qq.d, 1, Eq), Eq
      }
      static FromXYZAxesToRef(qq, Eq, gq, Yq) {
        return Vq.FromValuesToRef(qq._x, qq._y, qq._z, 0, Eq._x, Eq._y, Eq._z, 0, gq._x, gq._y, gq._z, 0, 0, 0, 0, 1, Yq), Yq
      }
      static FromQuaternionToRef(qq, Eq) {
        const gq = qq._x * qq._x,
          Yq = qq._y * qq._y,
          lq = qq._z * qq._z,
          Oq = qq._x * qq._y,
          mq = qq._z * qq._w,
          xq = qq._z * qq._x,
          Aq = qq._y * qq._w,
          cq = qq._y * qq._z,
          uq = qq._x * qq._w;
        return Eq._m[0] = 1 - 2 * (Yq + lq), Eq._m[1] = 2 * (Oq + mq), Eq._m[2] = 2 * (xq - Aq), Eq._m[3] = 0, Eq._m[4] = 2 * (Oq - mq), Eq._m[5] = 1 - 2 * (lq + gq), Eq._m[6] = 2 * (cq + uq), Eq._m[7] = 0, Eq._m[8] = 2 * (xq + Aq), Eq._m[9] = 2 * (cq - uq), Eq._m[10] = 1 - 2 * (Yq + gq), Eq._m[11] = 0, Eq._m[12] = 0, Eq._m[13] = 0, Eq._m[14] = 0, Eq._m[15] = 1, Eq.markAsUpdated(), Eq
      }
    }
    Vq._IdentityReadOnly = Vq.Identity();
    class dq {}
    dq.Na = (0, lq.h)(11, Wq.Zero), dq.Matrix = (0, lq.h)(2, Vq.Identity), dq.Quaternion = (0, lq.h)(3, aq.Zero);
    class jq {}
    jq.Vector2 = (0, lq.h)(3, Bq.Zero), jq.Na = (0, lq.h)(13, Wq.Zero), jq.Vector4 = (0, lq.h)(3, Nq.Zero), jq.Quaternion = (0, lq.h)(3, aq.Zero), jq.Matrix = (0, lq.h)(8, Vq.Identity);
    const Hq = Vq.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let oq = !1;

    function Pq() {
      oq || (oq = !0, Object.defineProperties(Bq.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Wq.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Nq.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(aq.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Vq.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, cq.g)("BABYLON.Vector2", Bq), (0, cq.g)("BABYLON.Vector3", Wq), (0, cq.g)("BABYLON.Vector4", Nq), (0, cq.g)("BABYLON.Matrix", Vq))
    }
  },
  37156: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => mq
    });
    const Yq = "undefined" !== typeof WeakRef;
    class lq {
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 ? arguments[2] : void 0,
          Yq = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(qq, Eq, gq, Yq)
      }
      initialize(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          gq = arguments.length > 2 ? arguments[2] : void 0,
          Yq = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = qq, this.skipNextObservers = Eq, this.target = gq, this.currentTarget = Yq, this
      }
    }
    class Oq {
      constructor(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = qq, this.mask = Eq, this.scope = gq, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(qq)
      }
    }
    class mq {
      static FromPromise(qq, Eq) {
        const gq = new mq;
        return qq.then((qq => {
          gq.notifyObservers(qq)
        })).catch((qq => {
          if (!Eq) throw qq;
          Eq.notifyObservers(qq)
        })), gq
      }
      get observers() {
        return this._observers
      }
      constructor(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = Eq, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new lq(0), qq && (this._onObserverAdded = qq)
      }
      add(qq) {
        let Eq = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          gq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!qq) return null;
        const lq = new Oq(qq, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        lq.unregisterOnNextCall = gq, Eq ? this._observers.unshift(lq) : this._observers.push(lq), this._onObserverAdded && this._onObserverAdded(lq), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(lq, this._lastNotifiedValue);
        const mq = Yq ? new WeakRef(this) : {
          deref: () => this
        };
        return lq._remove = function() {
          let qq = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Eq = mq.deref();
          Eq && (qq ? Eq.remove(lq) : Eq._remove(lq))
        }, lq
      }
      addOnce(qq) {
        return this.add(qq, void 0, void 0, void 0, !0)
      }
      remove(qq) {
        if (!qq) return !1;
        qq._remove = null;
        return -1 !== this._observers.indexOf(qq) && (this._deferUnregister(qq), !0)
      }
      removeCallback(qq, Eq) {
        for (let gq = 0; gq < this._observers.length; gq++) {
          const Yq = this._observers[gq];
          if (!Yq._willBeUnregistered && (Yq.callback === qq && (!Eq || Eq === Yq.scope))) return this._deferUnregister(Yq), !0
        }
        return !1
      }
      _deferUnregister(qq) {
        qq._willBeUnregistered || (this._numObserversMarkedAsDeleted++, qq.unregisterOnNextCall = !1, qq._willBeUnregistered = !0, setTimeout((() => {
          this._remove(qq)
        }), 0))
      }
      _remove(qq) {
        let Eq = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!qq) return !1;
        const gq = this._observers.indexOf(qq);
        return -1 !== gq && (Eq && this._numObserversMarkedAsDeleted--, this._observers.splice(gq, 1), !0)
      }
      makeObserverTopPriority(qq) {
        this._remove(qq, !1), this._observers.unshift(qq)
      }
      makeObserverBottomPriority(qq) {
        this._remove(qq, !1), this._observers.push(qq)
      }
      notifyObservers(qq) {
        let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          gq = arguments.length > 2 ? arguments[2] : void 0,
          Yq = arguments.length > 3 ? arguments[3] : void 0,
          lq = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = qq), !this._observers.length) return !0;
        const Oq = this._eventState;
        Oq.mask = Eq, Oq.target = gq, Oq.currentTarget = Yq, Oq.skipNextObservers = !1, Oq.lastReturnValue = qq, Oq.userInfo = lq;
        for (const mq of this._observers)
          if (!mq._willBeUnregistered && (mq.mask & Eq && (mq.unregisterOnNextCall && this._deferUnregister(mq), mq.scope ? Oq.lastReturnValue = mq.callback.apply(mq.scope, [qq, Oq]) : Oq.lastReturnValue = mq.callback(qq, Oq)), Oq.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(qq, Eq) {
        let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = Eq), qq._willBeUnregistered) return;
        const Yq = this._eventState;
        Yq.mask = gq, Yq.skipNextObservers = !1, qq.unregisterOnNextCall && this._deferUnregister(qq), qq.callback(Eq, Yq)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const qq = this._observers.pop();
          qq && (qq._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const qq = new mq;
        return qq._observers = this._observers.slice(0), qq
      }
      hasSpecificMask() {
        let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const Eq of this._observers)
          if (Eq.mask & qq || Eq.mask === qq) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);