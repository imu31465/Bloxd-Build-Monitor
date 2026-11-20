export const id = 226;
export const ids = [226];
export const modules = {
  36748: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob
    });
    var Bb = hb(36753);
    class Ob {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Ob.Instances = [], Ob.OnEnginesDisposedObservable = new Bb.e, Ob._LastCreatedScene = null, Ob.UseFallbackTexture = !0, Ob.FallbackTexture = ""
  },
  36739: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb
    });
    class Bb {
      static SetMatrixPrecision(bb) {
        if (Bb.MatrixTrackPrecisionChange = !1, bb && !Bb.MatrixUse64Bits && Bb.MatrixTrackedMatrices)
          for (let ub = 0; ub < Bb.MatrixTrackedMatrices.length; ++ub) {
            const bb = Bb.MatrixTrackedMatrices[ub],
              hb = bb._m;
            bb._m = new Array(16);
            for (let ub = 0; ub < 16; ++ub) bb._m[ub] = hb[ub]
          }
        Bb.MatrixUse64Bits = bb, Bb.MatrixCurrentType = Bb.MatrixUse64Bits ? Array : Float32Array, Bb.MatrixTrackedMatrices = null
      }
    }
    Bb.MatrixUse64Bits = !1, Bb.MatrixTrackPrecisionChange = !0, Bb.MatrixCurrentType = Float32Array, Bb.MatrixTrackedMatrices = []
  },
  36760: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Lb,
      e: () => Sb,
      h: () => Yb,
      k: () => Bb,
      o: () => Gb,
      p: () => Ub
    });
    class Bb {}

    function Ob(bb) {
      bb.updateFlag = Bb._UpdateFlagSeed++
    }

    function Gb(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Ob = bb.ZBb(),
        Gb = ub.ZBb(),
        Ub = Ob[0],
        Lb = Ob[1],
        Yb = Ob[2],
        Sb = Ob[3],
        ab = Ob[4],
        Hb = Ob[5],
        wb = Ob[6],
        Zb = Ob[7],
        Xb = Ob[8],
        pb = Ob[9],
        ob = Ob[10],
        Ab = Ob[11],
        lb = Ob[12],
        Kb = Ob[13],
        Wb = Ob[14],
        Cb = Ob[15],
        db = Gb[0],
        rb = Gb[1],
        jb = Gb[2],
        nb = Gb[3],
        Db = Gb[4],
        xb = Gb[5],
        zb = Gb[6],
        gb = Gb[7],
        ib = Gb[8],
        vb = Gb[9],
        tb = Gb[10],
        Jb = Gb[11],
        eb = Gb[12],
        Nb = Gb[13],
        sb = Gb[14],
        Mb = Gb[15];
      hb[Bb] = Ub * db + Lb * Db + Yb * ib + Sb * eb, hb[Bb + 1] = Ub * rb + Lb * xb + Yb * vb + Sb * Nb, hb[Bb + 2] = Ub * jb + Lb * zb + Yb * tb + Sb * sb, hb[Bb + 3] = Ub * nb + Lb * gb + Yb * Jb + Sb * Mb, hb[Bb + 4] = ab * db + Hb * Db + wb * ib + Zb * eb, hb[Bb + 5] = ab * rb + Hb * xb + wb * vb + Zb * Nb, hb[Bb + 6] = ab * jb + Hb * zb + wb * tb + Zb * sb, hb[Bb + 7] = ab * nb + Hb * gb + wb * Jb + Zb * Mb, hb[Bb + 8] = Xb * db + pb * Db + ob * ib + Ab * eb, hb[Bb + 9] = Xb * rb + pb * xb + ob * vb + Ab * Nb, hb[Bb + 10] = Xb * jb + pb * zb + ob * tb + Ab * sb, hb[Bb + 11] = Xb * nb + pb * gb + ob * Jb + Ab * Mb, hb[Bb + 12] = lb * db + Kb * Db + Wb * ib + Cb * eb, hb[Bb + 13] = lb * rb + Kb * xb + Wb * vb + Cb * Nb, hb[Bb + 14] = lb * jb + Kb * zb + Wb * tb + Cb * sb, hb[Bb + 15] = lb * nb + Kb * gb + Wb * Jb + Cb * Mb
    }

    function Ub(bb, ub, hb) {
      let Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Gb(bb, ub, hb.ZBb(), Bb), Ob(hb)
    }

    function Lb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Bb = bb.ZBb();
      ub[hb] = Bb[0], ub[hb + 1] = Bb[1], ub[hb + 2] = Bb[2], ub[hb + 3] = Bb[3], ub[hb + 4] = Bb[4], ub[hb + 5] = Bb[5], ub[hb + 6] = Bb[6], ub[hb + 7] = Bb[7], ub[hb + 8] = Bb[8], ub[hb + 9] = Bb[9], ub[hb + 10] = Bb[10], ub[hb + 11] = Bb[11], ub[hb + 12] = Bb[12], ub[hb + 13] = Bb[13], ub[hb + 14] = Bb[14], ub[hb + 15] = Bb[15]
    }

    function Yb(bb, ub) {
      const hb = Sb(bb, ub.ZBb());
      return hb && Ob(ub), hb
    }

    function Sb(bb, ub) {
      const hb = bb.ZBb(),
        Bb = hb[0],
        Ob = hb[1],
        Gb = hb[2],
        Ub = hb[3],
        Lb = hb[4],
        Yb = hb[5],
        Sb = hb[6],
        ab = hb[7],
        Hb = hb[8],
        wb = hb[9],
        Zb = hb[10],
        Xb = hb[11],
        pb = hb[12],
        ob = hb[13],
        Ab = hb[14],
        lb = hb[15],
        Kb = Zb * lb - Ab * Xb,
        Wb = wb * lb - ob * Xb,
        Cb = wb * Ab - ob * Zb,
        db = Hb * lb - pb * Xb,
        rb = Hb * Ab - Zb * pb,
        jb = Hb * ob - pb * wb,
        nb = +(Yb * Kb - Sb * Wb + ab * Cb),
        Db = -(Lb * Kb - Sb * db + ab * rb),
        xb = +(Lb * Wb - Yb * db + ab * jb),
        zb = -(Lb * Cb - Yb * rb + Sb * jb),
        gb = Bb * nb + Ob * Db + Gb * xb + Ub * zb;
      if (0 === gb) return !1;
      const ib = 1 / gb,
        vb = Sb * lb - Ab * ab,
        tb = Yb * lb - ob * ab,
        Jb = Yb * Ab - ob * Sb,
        eb = Lb * lb - pb * ab,
        Nb = Lb * Ab - pb * Sb,
        sb = Lb * ob - pb * Yb,
        Mb = Sb * Xb - Zb * ab,
        mb = Yb * Xb - wb * ab,
        Ib = Yb * Zb - wb * Sb,
        Pb = Lb * Xb - Hb * ab,
        qb = Lb * Zb - Hb * Sb,
        Eb = Lb * wb - Hb * Yb,
        yb = -(Ob * Kb - Gb * Wb + Ub * Cb),
        Vb = +(Bb * Kb - Gb * db + Ub * rb),
        Fb = -(Bb * Wb - Ob * db + Ub * jb),
        fb = +(Bb * Cb - Ob * rb + Gb * jb),
        kb = +(Ob * vb - Gb * tb + Ub * Jb),
        Tb = -(Bb * vb - Gb * eb + Ub * Nb),
        cb = +(Bb * tb - Ob * eb + Ub * sb),
        Qb = -(Bb * Jb - Ob * Nb + Gb * sb),
        Rb = -(Ob * Mb - Gb * mb + Ub * Ib),
        bu = +(Bb * Mb - Gb * Pb + Ub * qb),
        uu = -(Bb * mb - Ob * Pb + Ub * Eb),
        hu = +(Bb * Ib - Ob * qb + Gb * Eb);
      return ub[0] = nb * ib, ub[1] = yb * ib, ub[2] = kb * ib, ub[3] = Rb * ib, ub[4] = Db * ib, ub[5] = Vb * ib, ub[6] = Tb * ib, ub[7] = bu * ib, ub[8] = xb * ib, ub[9] = Fb * ib, ub[10] = cb * ib, ub[11] = uu * ib, ub[12] = zb * ib, ub[13] = fb * ib, ub[14] = Qb * ib, ub[15] = hu * ib, !0
    }
    Bb._UpdateFlagSeed = 0
  },
  36727: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => pb,
      f: () => Xb,
      h: () => Wb,
      i: () => Ab,
      m: () => Hb,
      q: () => wb,
      r: () => Zb
    });
    var Bb = hb(36734),
      Ob = hb(36736),
      Gb = hb(36739),
      Ub = hb(36748),
      Lb = hb(36757),
      Yb = hb(36760),
      Sb = hb(36762);
    const ab = bb => parseInt(bb.toString().replace(/\W/g, ""));
    class Hb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = bb, this.y = ub
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let bb = ab(this.x);
        return bb = 397 * bb ^ ab(this.y), bb
      }
      toArray(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bb[ub] = this.x, bb[ub + 1] = this.y, this
      }
      Ohb(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Hb.FromArrayToRef(bb, ub, this), this
      }
      ZBb() {
        return [this.x, this.y]
      }
      mD(bb) {
        return this.x = bb.x, this.y = bb.y, this
      }
      M_(bb, ub) {
        return this.x = bb, this.y = ub, this
      }
      set(bb, ub) {
        return this.M_(bb, ub)
      }
      N9(bb) {
        return this.M_(bb, bb)
      }
      add(bb) {
        return new Hb(this.x + bb.x, this.y + bb.y)
      }
      addToRef(bb, ub) {
        return ub.x = this.x + bb.x, ub.y = this.y + bb.y, ub
      }
      addInPlace(bb) {
        return this.x += bb.x, this.y += bb.y, this
      }
      addInPlaceFromFloats(bb, ub) {
        return this.x += bb, this.y += ub, this
      }
      addVector3(bb) {
        return new Hb(this.x + bb.x, this.y + bb.y)
      }
      subtract(bb) {
        return new Hb(this.x - bb.x, this.y - bb.y)
      }
      subtractToRef(bb, ub) {
        return ub.x = this.x - bb.x, ub.y = this.y - bb.y, ub
      }
      tBb(bb) {
        return this.x -= bb.x, this.y -= bb.y, this
      }
      multiplyInPlace(bb) {
        return this.x *= bb.x, this.y *= bb.y, this
      }
      multiply(bb) {
        return new Hb(this.x * bb.x, this.y * bb.y)
      }
      multiplyToRef(bb, ub) {
        return ub.x = this.x * bb.x, ub.y = this.y * bb.y, ub
      }
      multiplyByFloats(bb, ub) {
        return new Hb(this.x * bb, this.y * ub)
      }
      divide(bb) {
        return new Hb(this.x / bb.x, this.y / bb.y)
      }
      divideToRef(bb, ub) {
        return ub.x = this.x / bb.x, ub.y = this.y / bb.y, ub
      }
      divideInPlace(bb) {
        return this.x = this.x / bb.x, this.y = this.y / bb.y, this
      }
      minimizeInPlace(bb) {
        return this.minimizeInPlaceFromFloats(bb.x, bb.y)
      }
      maximizeInPlace(bb) {
        return this.maximizeInPlaceFromFloats(bb.x, bb.y)
      }
      minimizeInPlaceFromFloats(bb, ub) {
        return this.x = Math.min(bb, this.x), this.y = Math.min(ub, this.y), this
      }
      maximizeInPlaceFromFloats(bb, ub) {
        return this.x = Math.max(bb, this.x), this.y = Math.max(ub, this.y), this
      }
      subtractFromFloats(bb, ub) {
        return new Hb(this.x - bb, this.y - ub)
      }
      subtractFromFloatsToRef(bb, ub, hb) {
        return hb.x = this.x - bb, hb.y = this.y - ub, hb
      }
      AO() {
        return new Hb(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(bb) {
        return bb.x = -this.x, bb.y = -this.y, bb
      }
      scaleInPlace(bb) {
        return this.x *= bb, this.y *= bb, this
      }
      scale(bb) {
        return new Hb(this.x * bb, this.y * bb)
      }
      scaleToRef(bb, ub) {
        return ub.x = this.x * bb, ub.y = this.y * bb, ub
      }
      scaleAndAddToRef(bb, ub) {
        return ub.x += this.x * bb, ub.y += this.y * bb, ub
      }
      equals(bb) {
        return bb && this.x === bb.x && this.y === bb.y
      }
      equalsWithEpsilon(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bb.b;
        return bb && (0, Lb.WithinEpsilon)(this.x, bb.x, ub) && (0, Lb.WithinEpsilon)(this.y, bb.y, ub)
      }
      sUb(bb, ub) {
        return this.x === bb && this.y === ub
      }
      floor() {
        return new Hb(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(bb) {
        return bb.x = Math.floor(this.x), bb.y = Math.floor(this.y), bb
      }
      fract() {
        return new Hb(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(bb) {
        return bb.x = this.x - Math.floor(this.x), bb.y = this.y - Math.floor(this.y), bb
      }
      rotate(bb) {
        return this.rotateToRef(bb, new Hb)
      }
      rotateToRef(bb, ub) {
        const hb = Math.cos(bb),
          Bb = Math.sin(bb);
        return ub.x = hb * this.x - Bb * this.y, ub.y = Bb * this.x + hb * this.y, ub
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
      normalizeFromLength(bb) {
        return 0 === bb || 1 === bb ? this : this.scaleInPlace(1 / bb)
      }
      normalizeToNew() {
        const bb = new Hb;
        return this.normalizeToRef(bb), bb
      }
      normalizeToRef(bb) {
        const ub = this.length();
        return 0 === ub || 1 === ub ? (bb.x = this.x, bb.y = this.y, bb) : this.scaleToRef(1 / ub, bb)
      }
      clone() {
        return new Hb(this.x, this.y)
      }
      dot(bb) {
        return this.x * bb.x + this.y * bb.y
      }
      static Zero() {
        return new Hb(0, 0)
      }
      static One() {
        return new Hb(1, 1)
      }
      static Random() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Hb((0, Lb.RandomRange)(bb, ub), (0, Lb.RandomRange)(bb, ub))
      }
      static RandomToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).M_((0, Lb.RandomRange)(bb, ub), (0, Lb.RandomRange)(bb, ub))
      }
      static get ZeroReadOnly() {
        return Hb._ZeroReadOnly
      }
      static FromArray(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Hb(bb[ub], bb[ub + 1])
      }
      static FromArrayToRef(bb, ub, hb) {
        return hb.x = bb[ub], hb.y = bb[ub + 1], hb
      }
      static FromFloatsToRef(bb, ub, hb) {
        return hb.M_(bb, ub), hb
      }
      static CatmullRom(bb, ub, hb, Bb, Ob) {
        const Gb = Ob * Ob,
          Ub = Ob * Gb,
          Lb = .5 * (2 * ub.x + (-bb.x + hb.x) * Ob + (2 * bb.x - 5 * ub.x + 4 * hb.x - Bb.x) * Gb + (-bb.x + 3 * ub.x - 3 * hb.x + Bb.x) * Ub),
          Yb = .5 * (2 * ub.y + (-bb.y + hb.y) * Ob + (2 * bb.y - 5 * ub.y + 4 * hb.y - Bb.y) * Gb + (-bb.y + 3 * ub.y - 3 * hb.y + Bb.y) * Ub);
        return new Hb(Lb, Yb)
      }
      static ClampToRef(bb, ub, hb, Bb) {
        return Bb.x = (0, Lb.Clamp)(bb.x, ub.x, hb.x), Bb.y = (0, Lb.Clamp)(bb.y, ub.y, hb.y), Bb
      }
      static Clamp(bb, ub, hb) {
        const Bb = (0, Lb.Clamp)(bb.x, ub.x, hb.x),
          Ob = (0, Lb.Clamp)(bb.y, ub.y, hb.y);
        return new Hb(Bb, Ob)
      }
      static Hermite(bb, ub, hb, Bb, Ob) {
        const Gb = Ob * Ob,
          Ub = Ob * Gb,
          Lb = 2 * Ub - 3 * Gb + 1,
          Yb = -2 * Ub + 3 * Gb,
          Sb = Ub - 2 * Gb + Ob,
          ab = Ub - Gb,
          wb = bb.x * Lb + hb.x * Yb + ub.x * Sb + Bb.x * ab,
          Zb = bb.y * Lb + hb.y * Yb + ub.y * Sb + Bb.y * ab;
        return new Hb(wb, Zb)
      }
      static Hermite1stDerivative(bb, ub, hb, Bb, Ob) {
        return this.Hermite1stDerivativeToRef(bb, ub, hb, Bb, Ob, new Hb)
      }
      static Hermite1stDerivativeToRef(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = Ob * Ob;
        return Gb.x = 6 * (Ub - Ob) * bb.x + (3 * Ub - 4 * Ob + 1) * ub.x + 6 * (-Ub + Ob) * hb.x + (3 * Ub - 2 * Ob) * Bb.x, Gb.y = 6 * (Ub - Ob) * bb.y + (3 * Ub - 4 * Ob + 1) * ub.y + 6 * (-Ub + Ob) * hb.y + (3 * Ub - 2 * Ob) * Bb.y, Gb
      }
      static Lerp(bb, ub, hb) {
        return Hb.LerpToRef(bb, ub, hb, new Hb)
      }
      static LerpToRef(bb, ub, hb, Bb) {
        return Bb.x = bb.x + (ub.x - bb.x) * hb, Bb.y = bb.y + (ub.y - bb.y) * hb, Bb
      }
      static Dot(bb, ub) {
        return bb.x * ub.x + bb.y * ub.y
      }
      static Normalize(bb) {
        return Hb.NormalizeToRef(bb, new Hb)
      }
      static NormalizeToRef(bb, ub) {
        return bb.normalizeToRef(ub), ub
      }
      static Minimize(bb, ub) {
        const hb = bb.x < ub.x ? bb.x : ub.x,
          Bb = bb.y < ub.y ? bb.y : ub.y;
        return new Hb(hb, Bb)
      }
      static Maximize(bb, ub) {
        const hb = bb.x > ub.x ? bb.x : ub.x,
          Bb = bb.y > ub.y ? bb.y : ub.y;
        return new Hb(hb, Bb)
      }
      static Transform(bb, ub) {
        return Hb.TransformToRef(bb, ub, new Hb)
      }
      static TransformToRef(bb, ub, hb) {
        const Bb = ub.m,
          Ob = bb.x * Bb[0] + bb.y * Bb[4] + Bb[12],
          Gb = bb.x * Bb[1] + bb.y * Bb[5] + Bb[13];
        return hb.x = Ob, hb.y = Gb, hb
      }
      static PointInTriangle(bb, ub, hb, Bb) {
        const Ob = .5 * (-hb.y * Bb.x + ub.y * (-hb.x + Bb.x) + ub.x * (hb.y - Bb.y) + hb.x * Bb.y),
          Gb = Ob < 0 ? -1 : 1,
          Ub = (ub.y * Bb.x - ub.x * Bb.y + (Bb.y - ub.y) * bb.x + (ub.x - Bb.x) * bb.y) * Gb,
          Lb = (ub.x * hb.y - ub.y * hb.x + (ub.y - hb.y) * bb.x + (hb.x - ub.x) * bb.y) * Gb;
        return Ub > 0 && Lb > 0 && Ub + Lb < 2 * Ob * Gb
      }
      static Distance(bb, ub) {
        return Math.sqrt(Hb.DistanceSquared(bb, ub))
      }
      static DistanceSquared(bb, ub) {
        const hb = bb.x - ub.x,
          Bb = bb.y - ub.y;
        return hb * hb + Bb * Bb
      }
      static Center(bb, ub) {
        return Hb.CenterToRef(bb, ub, new Hb)
      }
      static CenterToRef(bb, ub, hb) {
        return hb.M_((bb.x + ub.x) / 2, (bb.y + ub.y) / 2)
      }
      static DistanceOfPointFromSegment(bb, ub, hb) {
        const Bb = Hb.DistanceSquared(ub, hb);
        if (0 === Bb) return Hb.Distance(bb, ub);
        const Ob = hb.subtract(ub),
          Gb = Math.max(0, Math.min(1, Hb.Dot(bb.subtract(ub), Ob) / Bb)),
          Ub = ub.add(Ob.multiplyByFloats(Gb, Gb));
        return Hb.Distance(bb, Ub)
      }
    }
    Hb._V8PerformanceHack = new Hb(.5, .5), Hb._ZeroReadOnly = Hb.Zero();
    class wb {
      get x() {
        return this._x
      }
      set x(bb) {
        this._x = bb, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(bb) {
        this._y = bb, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(bb) {
        this._z = bb, this._isDirty = !0
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = bb, this._y = ub, this._z = hb
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "YX"
      }
      getHashCode() {
        let bb = ab(this._x);
        return bb = 397 * bb ^ ab(this._y), bb = 397 * bb ^ ab(this._z), bb
      }
      ZBb() {
        return [this._x, this._y, this._z]
      }
      toArray(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bb[ub] = this._x, bb[ub + 1] = this._y, bb[ub + 2] = this._z, this
      }
      Ohb(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return wb.FromArrayToRef(bb, ub, this), this
      }
      toQuaternion() {
        return Xb.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(bb) {
        return this._x += bb._x, this._y += bb._y, this._z += bb._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(bb, ub, hb) {
        return this._x += bb, this._y += ub, this._z += hb, this._isDirty = !0, this
      }
      add(bb) {
        return new wb(this._x + bb._x, this._y + bb._y, this._z + bb._z)
      }
      addToRef(bb, ub) {
        return ub._x = this._x + bb._x, ub._y = this._y + bb._y, ub._z = this._z + bb._z, ub._isDirty = !0, ub
      }
      tBb(bb) {
        return this._x -= bb._x, this._y -= bb._y, this._z -= bb._z, this._isDirty = !0, this
      }
      subtract(bb) {
        return new wb(this._x - bb._x, this._y - bb._y, this._z - bb._z)
      }
      subtractToRef(bb, ub) {
        return this.subtractFromFloatsToRef(bb._x, bb._y, bb._z, ub)
      }
      subtractFromFloats(bb, ub, hb) {
        return new wb(this._x - bb, this._y - ub, this._z - hb)
      }
      subtractFromFloatsToRef(bb, ub, hb, Bb) {
        return Bb._x = this._x - bb, Bb._y = this._y - ub, Bb._z = this._z - hb, Bb._isDirty = !0, Bb
      }
      AO() {
        return new wb(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(bb) {
        return bb._x = -1 * this._x, bb._y = -1 * this._y, bb._z = -1 * this._z, bb._isDirty = !0, bb
      }
      scaleInPlace(bb) {
        return this._x *= bb, this._y *= bb, this._z *= bb, this._isDirty = !0, this
      }
      scale(bb) {
        return new wb(this._x * bb, this._y * bb, this._z * bb)
      }
      scaleToRef(bb, ub) {
        return ub._x = this._x * bb, ub._y = this._y * bb, ub._z = this._z * bb, ub._isDirty = !0, ub
      }
      getNormalToRef(bb) {
        const ub = this.length();
        let hb = Math.acos(this._y / ub);
        const Bb = Math.atan2(this._z, this._x);
        hb > Math.PI / 2 ? hb -= Math.PI / 2 : hb += Math.PI / 2;
        const Ob = ub * Math.sin(hb) * Math.cos(Bb),
          Gb = ub * Math.cos(hb),
          Ub = ub * Math.sin(hb) * Math.sin(Bb);
        return bb.set(Ob, Gb, Ub), bb
      }
      applyRotationQuaternionToRef(bb, ub) {
        const hb = this._x,
          Bb = this._y,
          Ob = this._z,
          Gb = bb._x,
          Ub = bb._y,
          Lb = bb._z,
          Yb = bb._w,
          Sb = 2 * (Ub * Ob - Lb * Bb),
          ab = 2 * (Lb * hb - Gb * Ob),
          Hb = 2 * (Gb * Bb - Ub * hb);
        return ub._x = hb + Yb * Sb + Ub * Hb - Lb * ab, ub._y = Bb + Yb * ab + Lb * Sb - Gb * Hb, ub._z = Ob + Yb * Hb + Gb * ab - Ub * Sb, ub._isDirty = !0, ub
      }
      applyRotationQuaternionInPlace(bb) {
        return this.applyRotationQuaternionToRef(bb, this)
      }
      applyRotationQuaternion(bb) {
        return this.applyRotationQuaternionToRef(bb, new wb)
      }
      scaleAndAddToRef(bb, ub) {
        return ub._x += this._x * bb, ub._y += this._y * bb, ub._z += this._z * bb, ub._isDirty = !0, ub
      }
      projectOnPlane(bb, ub) {
        return this.projectOnPlaneToRef(bb, ub, new wb)
      }
      projectOnPlaneToRef(bb, ub, hb) {
        const Bb = bb.normal,
          Ob = bb.d,
          Gb = ob.YX[0];
        this.subtractToRef(ub, Gb), Gb.normalize();
        const Ub = wb.Dot(Gb, Bb);
        if (Math.abs(Ub) < 1e-10) hb.N9(1 / 0);
        else {
          const bb = -(wb.Dot(ub, Bb) + Ob) / Ub,
            Lb = Gb.scaleInPlace(bb);
          ub.addToRef(Lb, hb)
        }
        return hb
      }
      equals(bb) {
        return bb && this._x === bb._x && this._y === bb._y && this._z === bb._z
      }
      equalsWithEpsilon(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bb.b;
        return bb && (0, Lb.WithinEpsilon)(this._x, bb._x, ub) && (0, Lb.WithinEpsilon)(this._y, bb._y, ub) && (0, Lb.WithinEpsilon)(this._z, bb._z, ub)
      }
      sUb(bb, ub, hb) {
        return this._x === bb && this._y === ub && this._z === hb
      }
      multiplyInPlace(bb) {
        return this._x *= bb._x, this._y *= bb._y, this._z *= bb._z, this._isDirty = !0, this
      }
      multiply(bb) {
        return this.multiplyByFloats(bb._x, bb._y, bb._z)
      }
      multiplyToRef(bb, ub) {
        return ub._x = this._x * bb._x, ub._y = this._y * bb._y, ub._z = this._z * bb._z, ub._isDirty = !0, ub
      }
      multiplyByFloats(bb, ub, hb) {
        return new wb(this._x * bb, this._y * ub, this._z * hb)
      }
      divide(bb) {
        return new wb(this._x / bb._x, this._y / bb._y, this._z / bb._z)
      }
      divideToRef(bb, ub) {
        return ub._x = this._x / bb._x, ub._y = this._y / bb._y, ub._z = this._z / bb._z, ub._isDirty = !0, ub
      }
      divideInPlace(bb) {
        return this._x = this._x / bb._x, this._y = this._y / bb._y, this._z = this._z / bb._z, this._isDirty = !0, this
      }
      minimizeInPlace(bb) {
        return this.minimizeInPlaceFromFloats(bb._x, bb._y, bb._z)
      }
      maximizeInPlace(bb) {
        return this.maximizeInPlaceFromFloats(bb._x, bb._y, bb._z)
      }
      minimizeInPlaceFromFloats(bb, ub, hb) {
        return bb < this._x && (this.x = bb), ub < this._y && (this.y = ub), hb < this._z && (this.z = hb), this
      }
      maximizeInPlaceFromFloats(bb, ub, hb) {
        return bb > this._x && (this.x = bb), ub > this._y && (this.y = ub), hb > this._z && (this.z = hb), this
      }
      isNonUniformWithinEpsilon(bb) {
        const ub = Math.abs(this._x),
          hb = Math.abs(this._y);
        if (!(0, Lb.WithinEpsilon)(ub, hb, bb)) return !0;
        const Bb = Math.abs(this._z);
        return !(0, Lb.WithinEpsilon)(ub, Bb, bb) || !(0, Lb.WithinEpsilon)(hb, Bb, bb)
      }
      get isNonUniform() {
        const bb = Math.abs(this._x);
        if (bb !== Math.abs(this._y)) return !0;
        return bb !== Math.abs(this._z)
      }
      floorToRef(bb) {
        return bb._x = Math.floor(this._x), bb._y = Math.floor(this._y), bb._z = Math.floor(this._z), bb._isDirty = !0, bb
      }
      floor() {
        return new wb(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(bb) {
        return bb._x = this._x - Math.floor(this._x), bb._y = this._y - Math.floor(this._y), bb._z = this._z - Math.floor(this._z), bb._isDirty = !0, bb
      }
      fract() {
        return new wb(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(bb) {
        if ("xyz" === (bb = bb.toLowerCase())) return this;
        const ub = ob.YX[0].mD(this);
        return this.x = ub[bb[0]], this.y = ub[bb[1]], this.z = ub[bb[2]], this
      }
      rotateByQuaternionToRef(bb, ub) {
        return bb.toRotationMatrix(ob.Matrix[0]), wb.TransformCoordinatesToRef(this, ob.Matrix[0], ub), ub
      }
      rotateByQuaternionAroundPointToRef(bb, ub, hb) {
        return this.subtractToRef(ub, ob.YX[0]), ob.YX[0].rotateByQuaternionToRef(bb, ob.YX[0]), ub.addToRef(ob.YX[0], hb), hb
      }
      cross(bb) {
        return wb.CrossToRef(this, bb, new wb)
      }
      normalizeFromLength(bb) {
        return 0 === bb || 1 === bb ? this : this.scaleInPlace(1 / bb)
      }
      normalizeToNew() {
        return this.normalizeToRef(new wb)
      }
      normalizeToRef(bb) {
        const ub = this.length();
        return 0 === ub || 1 === ub ? (bb._x = this._x, bb._y = this._y, bb._z = this._z, bb._isDirty = !0, bb) : this.scaleToRef(1 / ub, bb)
      }
      clone() {
        return new wb(this._x, this._y, this._z)
      }
      mD(bb) {
        return this.M_(bb._x, bb._y, bb._z)
      }
      M_(bb, ub, hb) {
        return this._x = bb, this._y = ub, this._z = hb, this._isDirty = !0, this
      }
      set(bb, ub, hb) {
        return this.M_(bb, ub, hb)
      }
      N9(bb) {
        return this._x = this._y = this._z = bb, this._isDirty = !0, this
      }
      static GetClipFactor(bb, ub, hb, Bb) {
        const Ob = wb.Dot(bb, hb);
        return (Ob - Bb) / (Ob - wb.Dot(ub, hb))
      }
      static GetAngleBetweenVectors(bb, ub, hb) {
        const Bb = bb.normalizeToRef(ob.YX[1]),
          Ob = ub.normalizeToRef(ob.YX[2]);
        let Gb = wb.Dot(Bb, Ob);
        Gb = (0, Lb.Clamp)(Gb, -1, 1);
        const Ub = Math.acos(Gb),
          Yb = ob.YX[3];
        return wb.CrossToRef(Bb, Ob, Yb), wb.Dot(Yb, hb) > 0 ? isNaN(Ub) ? 0 : Ub : isNaN(Ub) ? -Math.PI : -Math.acos(Gb)
      }
      static GetAngleBetweenVectorsOnPlane(bb, ub, hb) {
        ob.YX[0].mD(bb);
        const Bb = ob.YX[0];
        ob.YX[1].mD(ub);
        const Ob = ob.YX[1];
        ob.YX[2].mD(hb);
        const Gb = ob.YX[2],
          Ub = ob.YX[3],
          Yb = ob.YX[4];
        Bb.normalize(), Ob.normalize(), Gb.normalize(), wb.CrossToRef(Gb, Bb, Ub), wb.CrossToRef(Ub, Gb, Yb);
        const Sb = Math.atan2(wb.Dot(Ob, Ub), wb.Dot(Ob, Yb));
        return (0, Lb.NormalizeRadians)(Sb)
      }
      static PitchYawRollToMoveBetweenPointsToRef(bb, ub, hb) {
        const Bb = Ab.YX[0];
        return ub.subtractToRef(bb, Bb), hb._y = Math.atan2(Bb.x, Bb.z) || 0, hb._x = Math.atan2(Math.sqrt(Bb.x ** 2 + Bb.z ** 2), Bb.y) || 0, hb._z = 0, hb._isDirty = !0, hb
      }
      static PitchYawRollToMoveBetweenPoints(bb, ub) {
        const hb = wb.Zero();
        return wb.PitchYawRollToMoveBetweenPointsToRef(bb, ub, hb)
      }
      static SlerpToRef(bb, ub, hb, Ob) {
        hb = (0, Lb.Clamp)(hb, 0, 1);
        const Gb = ob.YX[0],
          Ub = ob.YX[1];
        Gb.mD(bb);
        const Yb = Gb.length();
        Gb.normalizeFromLength(Yb), Ub.mD(ub);
        const Sb = Ub.length();
        Ub.normalizeFromLength(Sb);
        const ab = wb.Dot(Gb, Ub);
        let Hb, Zb;
        if (ab < 1 - Bb.b) {
          const bb = Math.acos(ab),
            ub = 1 / Math.sin(bb);
          Hb = Math.sin((1 - hb) * bb) * ub, Zb = Math.sin(hb * bb) * ub
        } else Hb = 1 - hb, Zb = hb;
        return Gb.scaleInPlace(Hb), Ub.scaleInPlace(Zb), Ob.mD(Gb).addInPlace(Ub), Ob.scaleInPlace((0, Lb.Lerp)(Yb, Sb, hb)), Ob
      }
      static SmoothToRef(bb, ub, hb, Bb, Ob) {
        return wb.SlerpToRef(bb, ub, 0 === Bb ? 1 : hb / Bb, Ob), Ob
      }
      static FromArray(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new wb(bb[ub], bb[ub + 1], bb[ub + 2])
      }
      static FromFloatArray(bb, ub) {
        return wb.FromArray(bb, ub)
      }
      static FromArrayToRef(bb, ub, hb) {
        return hb._x = bb[ub], hb._y = bb[ub + 1], hb._z = bb[ub + 2], hb._isDirty = !0, hb
      }
      static FromFloatArrayToRef(bb, ub, hb) {
        return wb.FromArrayToRef(bb, ub, hb)
      }
      static FromFloatsToRef(bb, ub, hb, Bb) {
        return Bb.M_(bb, ub, hb), Bb
      }
      static Zero() {
        return new wb(0, 0, 0)
      }
      static One() {
        return new wb(1, 1, 1)
      }
      static Up() {
        return new wb(0, 1, 0)
      }
      static get UpReadOnly() {
        return wb._UpReadOnly
      }
      static get DownReadOnly() {
        return wb._DownReadOnly
      }
      static get RightReadOnly() {
        return wb._RightReadOnly
      }
      static get LeftReadOnly() {
        return wb._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return wb._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return wb._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return wb._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return wb._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return wb._ZeroReadOnly
      }
      static get OneReadOnly() {
        return wb._OneReadOnly
      }
      static Down() {
        return new wb(0, -1, 0)
      }
      static Forward() {
        return new wb(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new wb(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new wb(1, 0, 0)
      }
      static Left() {
        return new wb(-1, 0, 0)
      }
      static Random() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new wb((0, Lb.RandomRange)(bb, ub), (0, Lb.RandomRange)(bb, ub), (0, Lb.RandomRange)(bb, ub))
      }
      static RandomToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).M_((0, Lb.RandomRange)(bb, ub), (0, Lb.RandomRange)(bb, ub), (0, Lb.RandomRange)(bb, ub))
      }
      static TransformCoordinates(bb, ub) {
        const hb = wb.Zero();
        return wb.TransformCoordinatesToRef(bb, ub, hb), hb
      }
      static TransformCoordinatesToRef(bb, ub, hb) {
        return wb.TransformCoordinatesFromFloatsToRef(bb._x, bb._y, bb._z, ub, hb), hb
      }
      static TransformCoordinatesFromFloatsToRef(bb, ub, hb, Bb, Ob) {
        const Gb = Bb.m,
          Ub = bb * Gb[0] + ub * Gb[4] + hb * Gb[8] + Gb[12],
          Lb = bb * Gb[1] + ub * Gb[5] + hb * Gb[9] + Gb[13],
          Yb = bb * Gb[2] + ub * Gb[6] + hb * Gb[10] + Gb[14],
          Sb = 1 / (bb * Gb[3] + ub * Gb[7] + hb * Gb[11] + Gb[15]);
        return Ob._x = Ub * Sb, Ob._y = Lb * Sb, Ob._z = Yb * Sb, Ob._isDirty = !0, Ob
      }
      static TransformNormal(bb, ub) {
        const hb = wb.Zero();
        return wb.TransformNormalToRef(bb, ub, hb), hb
      }
      static TransformNormalToRef(bb, ub, hb) {
        return this.TransformNormalFromFloatsToRef(bb._x, bb._y, bb._z, ub, hb), hb
      }
      static TransformNormalFromFloatsToRef(bb, ub, hb, Bb, Ob) {
        const Gb = Bb.m;
        return Ob._x = bb * Gb[0] + ub * Gb[4] + hb * Gb[8], Ob._y = bb * Gb[1] + ub * Gb[5] + hb * Gb[9], Ob._z = bb * Gb[2] + ub * Gb[6] + hb * Gb[10], Ob._isDirty = !0, Ob
      }
      static CatmullRom(bb, ub, hb, Bb, Ob) {
        const Gb = Ob * Ob,
          Ub = Ob * Gb,
          Lb = .5 * (2 * ub._x + (-bb._x + hb._x) * Ob + (2 * bb._x - 5 * ub._x + 4 * hb._x - Bb._x) * Gb + (-bb._x + 3 * ub._x - 3 * hb._x + Bb._x) * Ub),
          Yb = .5 * (2 * ub._y + (-bb._y + hb._y) * Ob + (2 * bb._y - 5 * ub._y + 4 * hb._y - Bb._y) * Gb + (-bb._y + 3 * ub._y - 3 * hb._y + Bb._y) * Ub),
          Sb = .5 * (2 * ub._z + (-bb._z + hb._z) * Ob + (2 * bb._z - 5 * ub._z + 4 * hb._z - Bb._z) * Gb + (-bb._z + 3 * ub._z - 3 * hb._z + Bb._z) * Ub);
        return new wb(Lb, Yb, Sb)
      }
      static Clamp(bb, ub, hb) {
        const Bb = new wb;
        return wb.ClampToRef(bb, ub, hb, Bb), Bb
      }
      static ClampToRef(bb, ub, hb, Bb) {
        let Ob = bb._x;
        Ob = Ob > hb._x ? hb._x : Ob, Ob = Ob < ub._x ? ub._x : Ob;
        let Gb = bb._y;
        Gb = Gb > hb._y ? hb._y : Gb, Gb = Gb < ub._y ? ub._y : Gb;
        let Ub = bb._z;
        return Ub = Ub > hb._z ? hb._z : Ub, Ub = Ub < ub._z ? ub._z : Ub, Bb.M_(Ob, Gb, Ub), Bb
      }
      static CheckExtends(bb, ub, hb) {
        ub.minimizeInPlace(bb), hb.maximizeInPlace(bb)
      }
      static Hermite(bb, ub, hb, Bb, Ob) {
        const Gb = Ob * Ob,
          Ub = Ob * Gb,
          Lb = 2 * Ub - 3 * Gb + 1,
          Yb = -2 * Ub + 3 * Gb,
          Sb = Ub - 2 * Gb + Ob,
          ab = Ub - Gb,
          Hb = bb._x * Lb + hb._x * Yb + ub._x * Sb + Bb._x * ab,
          Zb = bb._y * Lb + hb._y * Yb + ub._y * Sb + Bb._y * ab,
          Xb = bb._z * Lb + hb._z * Yb + ub._z * Sb + Bb._z * ab;
        return new wb(Hb, Zb, Xb)
      }
      static Hermite1stDerivative(bb, ub, hb, Bb, Ob) {
        const Gb = new wb;
        return this.Hermite1stDerivativeToRef(bb, ub, hb, Bb, Ob, Gb), Gb
      }
      static Hermite1stDerivativeToRef(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = Ob * Ob;
        return Gb._x = 6 * (Ub - Ob) * bb._x + (3 * Ub - 4 * Ob + 1) * ub._x + 6 * (-Ub + Ob) * hb._x + (3 * Ub - 2 * Ob) * Bb._x, Gb._y = 6 * (Ub - Ob) * bb._y + (3 * Ub - 4 * Ob + 1) * ub._y + 6 * (-Ub + Ob) * hb._y + (3 * Ub - 2 * Ob) * Bb._y, Gb._z = 6 * (Ub - Ob) * bb._z + (3 * Ub - 4 * Ob + 1) * ub._z + 6 * (-Ub + Ob) * hb._z + (3 * Ub - 2 * Ob) * Bb._z, Gb._isDirty = !0, Gb
      }
      static Lerp(bb, ub, hb) {
        const Bb = new wb(0, 0, 0);
        return wb.LerpToRef(bb, ub, hb, Bb), Bb
      }
      static LerpToRef(bb, ub, hb, Bb) {
        return Bb._x = bb._x + (ub._x - bb._x) * hb, Bb._y = bb._y + (ub._y - bb._y) * hb, Bb._z = bb._z + (ub._z - bb._z) * hb, Bb._isDirty = !0, Bb
      }
      static Dot(bb, ub) {
        return bb._x * ub._x + bb._y * ub._y + bb._z * ub._z
      }
      dot(bb) {
        return this._x * bb._x + this._y * bb._y + this._z * bb._z
      }
      static Cross(bb, ub) {
        const hb = new wb;
        return wb.CrossToRef(bb, ub, hb), hb
      }
      static CrossToRef(bb, ub, hb) {
        const Bb = bb._y * ub._z - bb._z * ub._y,
          Ob = bb._z * ub._x - bb._x * ub._z,
          Gb = bb._x * ub._y - bb._y * ub._x;
        return hb.M_(Bb, Ob, Gb), hb
      }
      static Normalize(bb) {
        const ub = wb.Zero();
        return wb.NormalizeToRef(bb, ub), ub
      }
      static NormalizeToRef(bb, ub) {
        return bb.normalizeToRef(ub), ub
      }
      static Project(bb, ub, hb, Bb) {
        const Ob = new wb;
        return wb.ProjectToRef(bb, ub, hb, Bb, Ob), Ob
      }
      static ProjectToRef(bb, ub, hb, Bb, Ob) {
        const Gb = Bb.width,
          Lb = Bb.height,
          Yb = Bb.x,
          Sb = Bb.y,
          ab = ob.Matrix[1],
          Hb = Ub.b.LastCreatedEngine?.isNDCHalfZRange,
          Zb = Hb ? 1 : .5,
          Xb = Hb ? 0 : .5;
        pb.FromValuesToRef(Gb / 2, 0, 0, 0, 0, -Lb / 2, 0, 0, 0, 0, Zb, 0, Yb + Gb / 2, Lb / 2 + Sb, Xb, 1, ab);
        const Ab = ob.Matrix[0];
        return ub.multiplyToRef(hb, Ab), Ab.multiplyToRef(ab, Ab), wb.TransformCoordinatesToRef(bb, Ab, Ob), Ob
      }
      static Reflect(bb, ub) {
        return this.ReflectToRef(bb, ub, new wb)
      }
      static ReflectToRef(bb, ub, hb) {
        const Bb = Ab.YX[0];
        return Bb.mD(ub).scaleInPlace(2 * wb.Dot(bb, ub)), hb.mD(bb).tBb(Bb)
      }
      static UnprojectFromTransform(bb, ub, hb, Bb, Ob) {
        return this.Unproject(bb, ub, hb, Bb, Ob, pb.IdentityReadOnly)
      }
      static Unproject(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = new wb;
        return wb.UnprojectToRef(bb, ub, hb, Bb, Ob, Gb, Ub), Ub
      }
      static UnprojectToRef(bb, ub, hb, Bb, Ob, Gb, Ub) {
        return wb.UnprojectFloatsToRef(bb._x, bb._y, bb._z, ub, hb, Bb, Ob, Gb, Ub), Ub
      }
      static UnprojectFloatsToRef(bb, ub, hb, Bb, Ob, Gb, Lb, Yb, Sb) {
        const ab = ob.Matrix[0];
        Gb.multiplyToRef(Lb, ab), ab.multiplyToRef(Yb, ab), ab.invert();
        const Hb = ob.YX[0];
        return Hb.x = bb / Bb * 2 - 1, Hb.y = -(ub / Ob * 2 - 1), Ub.b.LastCreatedEngine?.isNDCHalfZRange ? Hb.z = hb : Hb.z = 2 * hb - 1, wb.TransformCoordinatesToRef(Hb, ab, Sb), Sb
      }
      static Minimize(bb, ub) {
        const hb = new wb;
        return hb.mD(bb), hb.minimizeInPlace(ub), hb
      }
      static Maximize(bb, ub) {
        const hb = new wb;
        return hb.mD(bb), hb.maximizeInPlace(ub), hb
      }
      static Distance(bb, ub) {
        return Math.sqrt(wb.DistanceSquared(bb, ub))
      }
      static DistanceSquared(bb, ub) {
        const hb = bb._x - ub._x,
          Bb = bb._y - ub._y,
          Ob = bb._z - ub._z;
        return hb * hb + Bb * Bb + Ob * Ob
      }
      static ProjectOnTriangleToRef(bb, ub, hb, Ob, Gb) {
        const Ub = ob.YX[0],
          Yb = ob.YX[1],
          Sb = ob.YX[2],
          ab = ob.YX[3],
          Hb = ob.YX[4];
        hb.subtractToRef(ub, Ub), Ob.subtractToRef(ub, Yb), Ob.subtractToRef(hb, Sb);
        const Zb = Ub.length(),
          Xb = Yb.length(),
          pb = Sb.length();
        if (Zb < Bb.b || Xb < Bb.b || pb < Bb.b) return Gb.mD(ub), wb.Distance(bb, ub);
        bb.subtractToRef(ub, Hb), wb.CrossToRef(Ub, Yb, ab);
        const Ab = ab.length();
        if (Ab < Bb.b) return Gb.mD(ub), wb.Distance(bb, ub);
        ab.normalizeFromLength(Ab);
        let lb = Hb.length();
        if (lb < Bb.b) return Gb.mD(ub), 0;
        Hb.normalizeFromLength(lb);
        const Kb = wb.Dot(ab, Hb),
          Wb = ob.YX[5],
          Cb = ob.YX[6];
        Wb.mD(ab).scaleInPlace(-lb * Kb), Cb.mD(bb).addInPlace(Wb);
        const db = ob.YX[4],
          rb = ob.YX[5],
          jb = ob.YX[7],
          nb = ob.YX[8];
        db.mD(Ub).scaleInPlace(1 / Zb), nb.mD(Yb).scaleInPlace(1 / Xb), db.addInPlace(nb).scaleInPlace(-1), rb.mD(Ub).scaleInPlace(-1 / Zb), nb.mD(Sb).scaleInPlace(1 / pb), rb.addInPlace(nb).scaleInPlace(-1), jb.mD(Sb).scaleInPlace(-1 / pb), nb.mD(Yb).scaleInPlace(-1 / Xb), jb.addInPlace(nb).scaleInPlace(-1);
        const Db = ob.YX[9];
        let xb;
        Db.mD(Cb).tBb(ub), wb.CrossToRef(db, Db, nb), xb = wb.Dot(nb, ab);
        const zb = xb;
        Db.mD(Cb).tBb(hb), wb.CrossToRef(rb, Db, nb), xb = wb.Dot(nb, ab);
        const gb = xb;
        Db.mD(Cb).tBb(Ob), wb.CrossToRef(jb, Db, nb), xb = wb.Dot(nb, ab);
        const ib = xb,
          vb = ob.YX[10];
        let tb, Jb;
        zb > 0 && gb < 0 ? (vb.mD(Ub), tb = ub, Jb = hb) : gb > 0 && ib < 0 ? (vb.mD(Sb), tb = hb, Jb = Ob) : (vb.mD(Yb).scaleInPlace(-1), tb = Ob, Jb = ub);
        const eb = ob.YX[9],
          Nb = ob.YX[4];
        tb.subtractToRef(Cb, nb), Jb.subtractToRef(Cb, eb), wb.CrossToRef(nb, eb, Nb);
        if (!(wb.Dot(Nb, ab) < 0)) return Gb.mD(Cb), Math.abs(lb * Kb);
        const sb = ob.YX[5];
        wb.CrossToRef(vb, Nb, sb), sb.normalize();
        const Mb = ob.YX[9];
        Mb.mD(tb).tBb(Cb);
        const mb = Mb.length();
        if (mb < Bb.b) return Gb.mD(tb), wb.Distance(bb, tb);
        Mb.normalizeFromLength(mb);
        const Ib = wb.Dot(sb, Mb),
          Pb = ob.YX[7];
        Pb.mD(Cb).addInPlace(sb.scaleInPlace(mb * Ib)), nb.mD(Pb).tBb(tb), lb = vb.length(), vb.normalizeFromLength(lb);
        let qb = wb.Dot(nb, vb) / Math.max(lb, Bb.b);
        return qb = (0, Lb.Clamp)(qb, 0, 1), Pb.mD(tb).addInPlace(vb.scaleInPlace(qb * lb)), Gb.mD(Pb), wb.Distance(bb, Pb)
      }
      static Center(bb, ub) {
        return wb.CenterToRef(bb, ub, wb.Zero())
      }
      static CenterToRef(bb, ub, hb) {
        return hb.M_((bb._x + ub._x) / 2, (bb._y + ub._y) / 2, (bb._z + ub._z) / 2)
      }
      static RotationFromAxis(bb, ub, hb) {
        const Bb = new wb;
        return wb.RotationFromAxisToRef(bb, ub, hb, Bb), Bb
      }
      static RotationFromAxisToRef(bb, ub, hb, Bb) {
        const Ob = ob.Quaternion[0];
        return Xb.RotationQuaternionFromAxisToRef(bb, ub, hb, Ob), Ob.toEulerAnglesToRef(Bb), Bb
      }
    }
    wb._V8PerformanceHack = new wb(.5, .5, .5), wb._UpReadOnly = wb.Up(), wb._DownReadOnly = wb.Down(), wb._LeftHandedForwardReadOnly = wb.Forward(!1), wb._RightHandedForwardReadOnly = wb.Forward(!0), wb._LeftHandedBackwardReadOnly = wb.Backward(!1), wb._RightHandedBackwardReadOnly = wb.Backward(!0), wb._RightReadOnly = wb.Right(), wb._LeftReadOnly = wb.Left(), wb._ZeroReadOnly = wb.Zero(), wb._OneReadOnly = wb.One();
    class Zb {
      get x() {
        return this._x
      }
      set x(bb) {
        this._x = bb, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(bb) {
        this._y = bb, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(bb) {
        this._z = bb, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(bb) {
        this._w = bb, this._isDirty = !0
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = bb, this._y = ub, this._z = hb, this._w = Bb
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let bb = ab(this._x);
        return bb = 397 * bb ^ ab(this._y), bb = 397 * bb ^ ab(this._z), bb = 397 * bb ^ ab(this._w), bb
      }
      ZBb() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(bb, ub) {
        return void 0 === ub && (ub = 0), bb[ub] = this._x, bb[ub + 1] = this._y, bb[ub + 2] = this._z, bb[ub + 3] = this._w, this
      }
      Ohb(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Zb.FromArrayToRef(bb, ub, this), this
      }
      addInPlace(bb) {
        return this.x += bb._x, this.y += bb._y, this.z += bb._z, this.w += bb._w, this
      }
      addInPlaceFromFloats(bb, ub, hb, Bb) {
        return this.x += bb, this.y += ub, this.z += hb, this.w += Bb, this
      }
      add(bb) {
        return new Zb(this._x + bb.x, this._y + bb.y, this._z + bb.z, this._w + bb.w)
      }
      addToRef(bb, ub) {
        return ub.x = this._x + bb.x, ub.y = this._y + bb.y, ub.z = this._z + bb.z, ub.w = this._w + bb.w, ub
      }
      tBb(bb) {
        return this.x -= bb.x, this.y -= bb.y, this.z -= bb.z, this.w -= bb.w, this
      }
      subtract(bb) {
        return new Zb(this._x - bb.x, this._y - bb.y, this._z - bb.z, this._w - bb.w)
      }
      subtractToRef(bb, ub) {
        return ub.x = this._x - bb.x, ub.y = this._y - bb.y, ub.z = this._z - bb.z, ub.w = this._w - bb.w, ub
      }
      subtractFromFloats(bb, ub, hb, Bb) {
        return new Zb(this._x - bb, this._y - ub, this._z - hb, this._w - Bb)
      }
      subtractFromFloatsToRef(bb, ub, hb, Bb, Ob) {
        return Ob.x = this._x - bb, Ob.y = this._y - ub, Ob.z = this._z - hb, Ob.w = this._w - Bb, Ob
      }
      AO() {
        return new Zb(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(bb) {
        return bb.x = -this._x, bb.y = -this._y, bb.z = -this._z, bb.w = -this._w, bb
      }
      scaleInPlace(bb) {
        return this.x *= bb, this.y *= bb, this.z *= bb, this.w *= bb, this
      }
      scale(bb) {
        return new Zb(this._x * bb, this._y * bb, this._z * bb, this._w * bb)
      }
      scaleToRef(bb, ub) {
        return ub.x = this._x * bb, ub.y = this._y * bb, ub.z = this._z * bb, ub.w = this._w * bb, ub
      }
      scaleAndAddToRef(bb, ub) {
        return ub.x += this._x * bb, ub.y += this._y * bb, ub.z += this._z * bb, ub.w += this._w * bb, ub
      }
      equals(bb) {
        return bb && this._x === bb.x && this._y === bb.y && this._z === bb.z && this._w === bb.w
      }
      equalsWithEpsilon(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bb.b;
        return bb && (0, Lb.WithinEpsilon)(this._x, bb.x, ub) && (0, Lb.WithinEpsilon)(this._y, bb.y, ub) && (0, Lb.WithinEpsilon)(this._z, bb.z, ub) && (0, Lb.WithinEpsilon)(this._w, bb.w, ub)
      }
      sUb(bb, ub, hb, Bb) {
        return this._x === bb && this._y === ub && this._z === hb && this._w === Bb
      }
      multiplyInPlace(bb) {
        return this.x *= bb.x, this.y *= bb.y, this.z *= bb.z, this.w *= bb.w, this
      }
      multiply(bb) {
        return new Zb(this._x * bb.x, this._y * bb.y, this._z * bb.z, this._w * bb.w)
      }
      multiplyToRef(bb, ub) {
        return ub.x = this._x * bb.x, ub.y = this._y * bb.y, ub.z = this._z * bb.z, ub.w = this._w * bb.w, ub
      }
      multiplyByFloats(bb, ub, hb, Bb) {
        return new Zb(this._x * bb, this._y * ub, this._z * hb, this._w * Bb)
      }
      divide(bb) {
        return new Zb(this._x / bb.x, this._y / bb.y, this._z / bb.z, this._w / bb.w)
      }
      divideToRef(bb, ub) {
        return ub.x = this._x / bb.x, ub.y = this._y / bb.y, ub.z = this._z / bb.z, ub.w = this._w / bb.w, ub
      }
      divideInPlace(bb) {
        return this.divideToRef(bb, this)
      }
      minimizeInPlace(bb) {
        return bb.x < this._x && (this.x = bb.x), bb.y < this._y && (this.y = bb.y), bb.z < this._z && (this.z = bb.z), bb.w < this._w && (this.w = bb.w), this
      }
      maximizeInPlace(bb) {
        return bb.x > this._x && (this.x = bb.x), bb.y > this._y && (this.y = bb.y), bb.z > this._z && (this.z = bb.z), bb.w > this._w && (this.w = bb.w), this
      }
      minimizeInPlaceFromFloats(bb, ub, hb, Bb) {
        return this.x = Math.min(bb, this._x), this.y = Math.min(ub, this._y), this.z = Math.min(hb, this._z), this.w = Math.min(Bb, this._w), this
      }
      maximizeInPlaceFromFloats(bb, ub, hb, Bb) {
        return this.x = Math.max(bb, this._x), this.y = Math.max(ub, this._y), this.z = Math.max(hb, this._z), this.w = Math.max(Bb, this._w), this
      }
      floorToRef(bb) {
        return bb.x = Math.floor(this._x), bb.y = Math.floor(this._y), bb.z = Math.floor(this._z), bb.w = Math.floor(this._w), bb
      }
      floor() {
        return new Zb(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(bb) {
        return bb.x = this._x - Math.floor(this._x), bb.y = this._y - Math.floor(this._y), bb.z = this._z - Math.floor(this._z), bb.w = this._w - Math.floor(this._w), bb
      }
      fract() {
        return new Zb(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(bb) {
        return 0 === bb || 1 === bb ? this : this.scaleInPlace(1 / bb)
      }
      normalizeToNew() {
        return this.normalizeToRef(new Zb)
      }
      normalizeToRef(bb) {
        const ub = this.length();
        return 0 === ub || 1 === ub ? (bb.x = this._x, bb.y = this._y, bb.z = this._z, bb.w = this._w, bb) : this.scaleToRef(1 / ub, bb)
      }
      toVector3() {
        return new wb(this._x, this._y, this._z)
      }
      clone() {
        return new Zb(this._x, this._y, this._z, this._w)
      }
      mD(bb) {
        return this.x = bb.x, this.y = bb.y, this.z = bb.z, this.w = bb.w, this
      }
      M_(bb, ub, hb, Bb) {
        return this.x = bb, this.y = ub, this.z = hb, this.w = Bb, this
      }
      set(bb, ub, hb, Bb) {
        return this.M_(bb, ub, hb, Bb)
      }
      N9(bb) {
        return this.x = this.y = this.z = this.w = bb, this
      }
      dot(bb) {
        return this._x * bb.x + this._y * bb.y + this._z * bb.z + this._w * bb.w
      }
      static FromArray(bb, ub) {
        return ub || (ub = 0), new Zb(bb[ub], bb[ub + 1], bb[ub + 2], bb[ub + 3])
      }
      static FromArrayToRef(bb, ub, hb) {
        return hb.x = bb[ub], hb.y = bb[ub + 1], hb.z = bb[ub + 2], hb.w = bb[ub + 3], hb
      }
      static FromFloatArrayToRef(bb, ub, hb) {
        return Zb.FromArrayToRef(bb, ub, hb), hb
      }
      static FromFloatsToRef(bb, ub, hb, Bb, Ob) {
        return Ob.x = bb, Ob.y = ub, Ob.z = hb, Ob.w = Bb, Ob
      }
      static Zero() {
        return new Zb(0, 0, 0, 0)
      }
      static One() {
        return new Zb(1, 1, 1, 1)
      }
      static Random() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Zb((0, Lb.RandomRange)(bb, ub), (0, Lb.RandomRange)(bb, ub), (0, Lb.RandomRange)(bb, ub), (0, Lb.RandomRange)(bb, ub))
      }
      static RandomToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        return hb.x = (0, Lb.RandomRange)(bb, ub), hb.y = (0, Lb.RandomRange)(bb, ub), hb.z = (0, Lb.RandomRange)(bb, ub), hb.w = (0, Lb.RandomRange)(bb, ub), hb
      }
      static Clamp(bb, ub, hb) {
        return Zb.ClampToRef(bb, ub, hb, new Zb)
      }
      static ClampToRef(bb, ub, hb, Bb) {
        return Bb.x = (0, Lb.Clamp)(bb.x, ub.x, hb.x), Bb.y = (0, Lb.Clamp)(bb.y, ub.y, hb.y), Bb.z = (0, Lb.Clamp)(bb.z, ub.z, hb.z), Bb.w = (0, Lb.Clamp)(bb.w, ub.w, hb.w), Bb
      }
      static CheckExtends(bb, ub, hb) {
        ub.minimizeInPlace(bb), hb.maximizeInPlace(bb)
      }
      static get ZeroReadOnly() {
        return Zb._ZeroReadOnly
      }
      static Normalize(bb) {
        return Zb.NormalizeToRef(bb, new Zb)
      }
      static NormalizeToRef(bb, ub) {
        return bb.normalizeToRef(ub), ub
      }
      static Minimize(bb, ub) {
        const hb = new Zb;
        return hb.mD(bb), hb.minimizeInPlace(ub), hb
      }
      static Maximize(bb, ub) {
        const hb = new Zb;
        return hb.mD(bb), hb.maximizeInPlace(ub), hb
      }
      static Distance(bb, ub) {
        return Math.sqrt(Zb.DistanceSquared(bb, ub))
      }
      static DistanceSquared(bb, ub) {
        const hb = bb.x - ub.x,
          Bb = bb.y - ub.y,
          Ob = bb.z - ub.z,
          Gb = bb.w - ub.w;
        return hb * hb + Bb * Bb + Ob * Ob + Gb * Gb
      }
      static Center(bb, ub) {
        return Zb.CenterToRef(bb, ub, new Zb)
      }
      static CenterToRef(bb, ub, hb) {
        return hb.x = (bb.x + ub.x) / 2, hb.y = (bb.y + ub.y) / 2, hb.z = (bb.z + ub.z) / 2, hb.w = (bb.w + ub.w) / 2, hb
      }
      static TransformCoordinates(bb, ub) {
        return Zb.TransformCoordinatesToRef(bb, ub, new Zb)
      }
      static TransformCoordinatesToRef(bb, ub, hb) {
        return Zb.TransformCoordinatesFromFloatsToRef(bb._x, bb._y, bb._z, ub, hb), hb
      }
      static TransformCoordinatesFromFloatsToRef(bb, ub, hb, Bb, Ob) {
        const Gb = Bb.m,
          Ub = bb * Gb[0] + ub * Gb[4] + hb * Gb[8] + Gb[12],
          Lb = bb * Gb[1] + ub * Gb[5] + hb * Gb[9] + Gb[13],
          Yb = bb * Gb[2] + ub * Gb[6] + hb * Gb[10] + Gb[14],
          Sb = bb * Gb[3] + ub * Gb[7] + hb * Gb[11] + Gb[15];
        return Ob.x = Ub, Ob.y = Lb, Ob.z = Yb, Ob.w = Sb, Ob
      }
      static TransformNormal(bb, ub) {
        return Zb.TransformNormalToRef(bb, ub, new Zb)
      }
      static TransformNormalToRef(bb, ub, hb) {
        const Bb = ub.m,
          Ob = bb.x * Bb[0] + bb.y * Bb[4] + bb.z * Bb[8],
          Gb = bb.x * Bb[1] + bb.y * Bb[5] + bb.z * Bb[9],
          Ub = bb.x * Bb[2] + bb.y * Bb[6] + bb.z * Bb[10];
        return hb.x = Ob, hb.y = Gb, hb.z = Ub, hb.w = bb.w, hb
      }
      static TransformNormalFromFloatsToRef(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = Ob.m;
        return Gb.x = bb * Ub[0] + ub * Ub[4] + hb * Ub[8], Gb.y = bb * Ub[1] + ub * Ub[5] + hb * Ub[9], Gb.z = bb * Ub[2] + ub * Ub[6] + hb * Ub[10], Gb.w = Bb, Gb
      }
      static FromVector3(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Zb(bb._x, bb._y, bb._z, ub)
      }
      static Dot(bb, ub) {
        return bb.x * ub.x + bb.y * ub.y + bb.z * ub.z + bb.w * ub.w
      }
    }
    Zb._V8PerformanceHack = new Zb(.5, .5, .5, .5), Zb._ZeroReadOnly = Zb.Zero();
    class Xb {
      get x() {
        return this._x
      }
      set x(bb) {
        this._x = bb, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(bb) {
        this._y = bb, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(bb) {
        this._z = bb, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(bb) {
        this._w = bb, this._isDirty = !0
      }
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = bb, this._y = ub, this._z = hb, this._w = Bb
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let bb = ab(this._x);
        return bb = 397 * bb ^ ab(this._y), bb = 397 * bb ^ ab(this._z), bb = 397 * bb ^ ab(this._w), bb
      }
      ZBb() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bb[ub] = this._x, bb[ub + 1] = this._y, bb[ub + 2] = this._z, bb[ub + 3] = this._w, this
      }
      Ohb(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Xb.FromArrayToRef(bb, ub, this)
      }
      equals(bb) {
        return bb && this._x === bb._x && this._y === bb._y && this._z === bb._z && this._w === bb._w
      }
      equalsWithEpsilon(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bb.b;
        return bb && (0, Lb.WithinEpsilon)(this._x, bb._x, ub) && (0, Lb.WithinEpsilon)(this._y, bb._y, ub) && (0, Lb.WithinEpsilon)(this._z, bb._z, ub) && (0, Lb.WithinEpsilon)(this._w, bb._w, ub)
      }
      isApprox(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Bb.b;
        return bb && ((0, Lb.WithinEpsilon)(this._x, bb._x, ub) && (0, Lb.WithinEpsilon)(this._y, bb._y, ub) && (0, Lb.WithinEpsilon)(this._z, bb._z, ub) && (0, Lb.WithinEpsilon)(this._w, bb._w, ub) || (0, Lb.WithinEpsilon)(this._x, -bb._x, ub) && (0, Lb.WithinEpsilon)(this._y, -bb._y, ub) && (0, Lb.WithinEpsilon)(this._z, -bb._z, ub) && (0, Lb.WithinEpsilon)(this._w, -bb._w, ub))
      }
      clone() {
        return new Xb(this._x, this._y, this._z, this._w)
      }
      mD(bb) {
        return this._x = bb._x, this._y = bb._y, this._z = bb._z, this._w = bb._w, this._isDirty = !0, this
      }
      M_(bb, ub, hb, Bb) {
        return this._x = bb, this._y = ub, this._z = hb, this._w = Bb, this._isDirty = !0, this
      }
      set(bb, ub, hb, Bb) {
        return this.M_(bb, ub, hb, Bb)
      }
      N9(bb) {
        return this.M_(bb, bb, bb, bb)
      }
      add(bb) {
        return new Xb(this._x + bb._x, this._y + bb._y, this._z + bb._z, this._w + bb._w)
      }
      addInPlace(bb) {
        return this._x += bb._x, this._y += bb._y, this._z += bb._z, this._w += bb._w, this._isDirty = !0, this
      }
      addToRef(bb, ub) {
        return ub._x = this._x + bb._x, ub._y = this._y + bb._y, ub._z = this._z + bb._z, ub._w = this._w + bb._w, ub._isDirty = !0, ub
      }
      addInPlaceFromFloats(bb, ub, hb, Bb) {
        return this._x += bb, this._y += ub, this._z += hb, this._w += Bb, this._isDirty = !0, this
      }
      subtractToRef(bb, ub) {
        return ub._x = this._x - bb._x, ub._y = this._y - bb._y, ub._z = this._z - bb._z, ub._w = this._w - bb._w, ub._isDirty = !0, ub
      }
      subtractFromFloats(bb, ub, hb, Bb) {
        return this.subtractFromFloatsToRef(bb, ub, hb, Bb, new Xb)
      }
      subtractFromFloatsToRef(bb, ub, hb, Bb, Ob) {
        return Ob._x = this._x - bb, Ob._y = this._y - ub, Ob._z = this._z - hb, Ob._w = this._w - Bb, Ob._isDirty = !0, Ob
      }
      subtract(bb) {
        return new Xb(this._x - bb._x, this._y - bb._y, this._z - bb._z, this._w - bb._w)
      }
      tBb(bb) {
        return this._x -= bb._x, this._y -= bb._y, this._z -= bb._z, this._w -= bb._w, this._isDirty = !0, this
      }
      scale(bb) {
        return new Xb(this._x * bb, this._y * bb, this._z * bb, this._w * bb)
      }
      scaleToRef(bb, ub) {
        return ub._x = this._x * bb, ub._y = this._y * bb, ub._z = this._z * bb, ub._w = this._w * bb, ub._isDirty = !0, ub
      }
      scaleInPlace(bb) {
        return this._x *= bb, this._y *= bb, this._z *= bb, this._w *= bb, this._isDirty = !0, this
      }
      scaleAndAddToRef(bb, ub) {
        return ub._x += this._x * bb, ub._y += this._y * bb, ub._z += this._z * bb, ub._w += this._w * bb, ub._isDirty = !0, ub
      }
      multiply(bb) {
        const ub = new Xb(0, 0, 0, 1);
        return this.multiplyToRef(bb, ub), ub
      }
      multiplyToRef(bb, ub) {
        const hb = this._x * bb._w + this._y * bb._z - this._z * bb._y + this._w * bb._x,
          Bb = -this._x * bb._z + this._y * bb._w + this._z * bb._x + this._w * bb._y,
          Ob = this._x * bb._y - this._y * bb._x + this._z * bb._w + this._w * bb._z,
          Gb = -this._x * bb._x - this._y * bb._y - this._z * bb._z + this._w * bb._w;
        return ub.M_(hb, Bb, Ob, Gb), ub
      }
      multiplyInPlace(bb) {
        return this.multiplyToRef(bb, this)
      }
      multiplyByFloats(bb, ub, hb, Bb) {
        return this._x *= bb, this._y *= ub, this._z *= hb, this._w *= Bb, this._isDirty = !0, this
      }
      divide(bb) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(bb, ub) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(bb) {
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
      AO() {
        return this.negateToRef(new Xb)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(bb) {
        return bb._x = -this._x, bb._y = -this._y, bb._z = -this._z, bb._w = -this._w, bb._isDirty = !0, bb
      }
      sUb(bb, ub, hb, Bb) {
        return this._x === bb && this._y === ub && this._z === hb && this._w === Bb
      }
      floorToRef(bb) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(bb) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(bb) {
        return bb.M_(-this._x, -this._y, -this._z, this._w), bb
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new Xb(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const bb = this.conjugate(),
          ub = this.lengthSquared();
        return 0 == ub || 1 == ub || bb.scaleInPlace(1 / ub), bb
      }
      invertInPlace() {
        this.conjugateInPlace();
        const bb = this.lengthSquared();
        return 0 == bb || 1 == bb || this.scaleInPlace(1 / bb), this
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
      normalizeFromLength(bb) {
        return 0 === bb || 1 === bb ? this : this.scaleInPlace(1 / bb)
      }
      normalizeToNew() {
        const bb = new Xb(0, 0, 0, 1);
        return this.normalizeToRef(bb), bb
      }
      normalizeToRef(bb) {
        const ub = this.length();
        return 0 === ub || 1 === ub ? bb.M_(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / ub, bb)
      }
      toEulerAngles() {
        const bb = wb.Zero();
        return this.toEulerAnglesToRef(bb), bb
      }
      toEulerAnglesToRef(bb) {
        const ub = this._z,
          hb = this._x,
          Bb = this._y,
          Ob = this._w,
          Gb = Bb * ub - hb * Ob,
          Ub = .4999999;
        if (Gb < -Ub) bb._y = 2 * Math.atan2(Bb, Ob), bb._x = Math.PI / 2, bb._z = 0, bb._isDirty = !0;
        else if (Gb > Ub) bb._y = 2 * Math.atan2(Bb, Ob), bb._x = -Math.PI / 2, bb._z = 0, bb._isDirty = !0;
        else {
          const Ub = Ob * Ob,
            Lb = ub * ub,
            Yb = hb * hb,
            Sb = Bb * Bb;
          bb._z = Math.atan2(2 * (hb * Bb + ub * Ob), -Lb - Yb + Sb + Ub), bb._x = Math.asin(-2 * Gb), bb._y = Math.atan2(2 * (ub * hb + Bb * Ob), Lb - Yb - Sb + Ub), bb._isDirty = !0
        }
        return bb
      }
      toAlphaBetaGammaToRef(bb) {
        const ub = this._z,
          hb = this._x,
          Bb = this._y,
          Ob = this._w,
          Gb = Math.sqrt(hb * hb + Bb * Bb),
          Ub = Math.sqrt(ub * ub + Ob * Ob),
          Lb = 2 * Math.atan2(Gb, Ub),
          Yb = 2 * Math.atan2(ub, Ob),
          Sb = 2 * Math.atan2(Bb, hb),
          ab = (Yb + Sb) / 2,
          Hb = (Yb - Sb) / 2;
        return bb.set(Hb, Lb, ab), bb
      }
      toRotationMatrix(bb) {
        return pb.FromQuaternionToRef(this, bb), bb
      }
      fromRotationMatrix(bb) {
        return Xb.FromRotationMatrixToRef(bb, this), this
      }
      dot(bb) {
        return this._x * bb._x + this._y * bb._y + this._z * bb._z + this._w * bb._w
      }
      toAxisAngle() {
        const bb = wb.Zero();
        return {
          axis: bb,
          angle: this.toAxisAngleToRef(bb)
        }
      }
      toAxisAngleToRef(bb) {
        let ub;
        const hb = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          Bb = this._w;
        return hb > 0 ? (ub = 2 * Math.atan2(hb, Bb), bb.set(this._x / hb, this._y / hb, this._z / hb)) : (ub = 0, bb.set(1, 0, 0)), ub
      }
      static FromRotationMatrix(bb) {
        const ub = new Xb;
        return Xb.FromRotationMatrixToRef(bb, ub), ub
      }
      static FromRotationMatrixToRef(bb, ub) {
        const hb = bb.m,
          Bb = hb[0],
          Ob = hb[4],
          Gb = hb[8],
          Ub = hb[1],
          Lb = hb[5],
          Yb = hb[9],
          Sb = hb[2],
          ab = hb[6],
          Hb = hb[10],
          wb = Bb + Lb + Hb;
        let Zb;
        return wb > 0 ? (Zb = .5 / Math.sqrt(wb + 1), ub._w = .25 / Zb, ub._x = (ab - Yb) * Zb, ub._y = (Gb - Sb) * Zb, ub._z = (Ub - Ob) * Zb, ub._isDirty = !0) : Bb > Lb && Bb > Hb ? (Zb = 2 * Math.sqrt(1 + Bb - Lb - Hb), ub._w = (ab - Yb) / Zb, ub._x = .25 * Zb, ub._y = (Ob + Ub) / Zb, ub._z = (Gb + Sb) / Zb, ub._isDirty = !0) : Lb > Hb ? (Zb = 2 * Math.sqrt(1 + Lb - Bb - Hb), ub._w = (Gb - Sb) / Zb, ub._x = (Ob + Ub) / Zb, ub._y = .25 * Zb, ub._z = (Yb + ab) / Zb, ub._isDirty = !0) : (Zb = 2 * Math.sqrt(1 + Hb - Bb - Lb), ub._w = (Ub - Ob) / Zb, ub._x = (Gb + Sb) / Zb, ub._y = (Yb + ab) / Zb, ub._z = .25 * Zb, ub._isDirty = !0), ub
      }
      static Dot(bb, ub) {
        return bb._x * ub._x + bb._y * ub._y + bb._z * ub._z + bb._w * ub._w
      }
      static AreClose(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const Bb = Xb.Dot(bb, ub);
        return 1 - Bb * Bb <= hb
      }
      static SmoothToRef(bb, ub, hb, Bb, Ob) {
        let Gb = 0 === Bb ? 1 : hb / Bb;
        return Gb = (0, Lb.Clamp)(Gb, 0, 1), Xb.SlerpToRef(bb, ub, Gb, Ob), Ob
      }
      static Zero() {
        return new Xb(0, 0, 0, 0)
      }
      static Inverse(bb) {
        return new Xb(-bb._x, -bb._y, -bb._z, bb._w)
      }
      static InverseToRef(bb, ub) {
        return ub.set(-bb._x, -bb._y, -bb._z, bb._w), ub
      }
      static Identity() {
        return new Xb(0, 0, 0, 1)
      }
      static IsIdentity(bb) {
        return bb && 0 === bb._x && 0 === bb._y && 0 === bb._z && 1 === bb._w
      }
      static RotationAxis(bb, ub) {
        return Xb.RotationAxisToRef(bb, ub, new Xb)
      }
      static RotationAxisToRef(bb, ub, hb) {
        hb._w = Math.cos(ub / 2);
        const Bb = Math.sin(ub / 2) / bb.length();
        return hb._x = bb._x * Bb, hb._y = bb._y * Bb, hb._z = bb._z * Bb, hb._isDirty = !0, hb
      }
      static FromArray(bb, ub) {
        return ub || (ub = 0), new Xb(bb[ub], bb[ub + 1], bb[ub + 2], bb[ub + 3])
      }
      static FromArrayToRef(bb, ub, hb) {
        return hb._x = bb[ub], hb._y = bb[ub + 1], hb._z = bb[ub + 2], hb._w = bb[ub + 3], hb._isDirty = !0, hb
      }
      static FromFloatsToRef(bb, ub, hb, Bb, Ob) {
        return Ob.M_(bb, ub, hb, Bb), Ob
      }
      static FromEulerAngles(bb, ub, hb) {
        const Bb = new Xb;
        return Xb.RotationYawPitchRollToRef(ub, bb, hb, Bb), Bb
      }
      static FromEulerAnglesToRef(bb, ub, hb, Bb) {
        return Xb.RotationYawPitchRollToRef(ub, bb, hb, Bb), Bb
      }
      static FromEulerVector(bb) {
        const ub = new Xb;
        return Xb.RotationYawPitchRollToRef(bb._y, bb._x, bb._z, ub), ub
      }
      static FromEulerVectorToRef(bb, ub) {
        return Xb.RotationYawPitchRollToRef(bb._y, bb._x, bb._z, ub), ub
      }
      static FromUnitVectorsToRef(bb, ub, hb) {
        let Ob = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Bb.b;
        const Gb = wb.Dot(bb, ub) + 1;
        return Gb < Ob ? Math.abs(bb.x) > Math.abs(bb.z) ? hb.set(-bb.y, bb.x, 0, 0) : hb.set(0, -bb.z, bb.y, 0) : (wb.CrossToRef(bb, ub, Ab.YX[0]), hb.set(Ab.YX[0].x, Ab.YX[0].y, Ab.YX[0].z, Gb)), hb.normalize()
      }
      static RotationYawPitchRoll(bb, ub, hb) {
        const Bb = new Xb;
        return Xb.RotationYawPitchRollToRef(bb, ub, hb, Bb), Bb
      }
      static RotationYawPitchRollToRef(bb, ub, hb, Bb) {
        const Ob = .5 * hb,
          Gb = .5 * ub,
          Ub = .5 * bb,
          Lb = Math.sin(Ob),
          Yb = Math.cos(Ob),
          Sb = Math.sin(Gb),
          ab = Math.cos(Gb),
          Hb = Math.sin(Ub),
          wb = Math.cos(Ub);
        return Bb._x = wb * Sb * Yb + Hb * ab * Lb, Bb._y = Hb * ab * Yb - wb * Sb * Lb, Bb._z = wb * ab * Lb - Hb * Sb * Yb, Bb._w = wb * ab * Yb + Hb * Sb * Lb, Bb._isDirty = !0, Bb
      }
      static RotationAlphaBetaGamma(bb, ub, hb) {
        const Bb = new Xb;
        return Xb.RotationAlphaBetaGammaToRef(bb, ub, hb, Bb), Bb
      }
      static RotationAlphaBetaGammaToRef(bb, ub, hb, Bb) {
        const Ob = .5 * (hb + bb),
          Gb = .5 * (hb - bb),
          Ub = .5 * ub;
        return Bb._x = Math.cos(Gb) * Math.sin(Ub), Bb._y = Math.sin(Gb) * Math.sin(Ub), Bb._z = Math.sin(Ob) * Math.cos(Ub), Bb._w = Math.cos(Ob) * Math.cos(Ub), Bb._isDirty = !0, Bb
      }
      static RotationQuaternionFromAxis(bb, ub, hb) {
        const Bb = new Xb(0, 0, 0, 0);
        return Xb.RotationQuaternionFromAxisToRef(bb, ub, hb, Bb), Bb
      }
      static RotationQuaternionFromAxisToRef(bb, ub, hb, Bb) {
        const Ob = ob.Matrix[0];
        return bb = bb.normalizeToRef(ob.YX[0]), ub = ub.normalizeToRef(ob.YX[1]), hb = hb.normalizeToRef(ob.YX[2]), pb.FromXYZAxesToRef(bb, ub, hb, Ob), Xb.FromRotationMatrixToRef(Ob, Bb), Bb
      }
      static FromLookDirectionLH(bb, ub) {
        const hb = new Xb;
        return Xb.FromLookDirectionLHToRef(bb, ub, hb), hb
      }
      static FromLookDirectionLHToRef(bb, ub, hb) {
        const Bb = ob.Matrix[0];
        return pb.LookDirectionLHToRef(bb, ub, Bb), Xb.FromRotationMatrixToRef(Bb, hb), hb
      }
      static FromLookDirectionRH(bb, ub) {
        const hb = new Xb;
        return Xb.FromLookDirectionRHToRef(bb, ub, hb), hb
      }
      static FromLookDirectionRHToRef(bb, ub, hb) {
        const Bb = ob.Matrix[0];
        return pb.LookDirectionRHToRef(bb, ub, Bb), Xb.FromRotationMatrixToRef(Bb, hb)
      }
      static Slerp(bb, ub, hb) {
        const Bb = Xb.Identity();
        return Xb.SlerpToRef(bb, ub, hb, Bb), Bb
      }
      static SlerpToRef(bb, ub, hb, Bb) {
        let Ob, Gb, Ub = bb._x * ub._x + bb._y * ub._y + bb._z * ub._z + bb._w * ub._w,
          Lb = !1;
        if (Ub < 0 && (Lb = !0, Ub = -Ub), Ub > .999999) Gb = 1 - hb, Ob = Lb ? -hb : hb;
        else {
          const bb = Math.acos(Ub),
            ub = 1 / Math.sin(bb);
          Gb = Math.sin((1 - hb) * bb) * ub, Ob = Lb ? -Math.sin(hb * bb) * ub : Math.sin(hb * bb) * ub
        }
        return Bb._x = Gb * bb._x + Ob * ub._x, Bb._y = Gb * bb._y + Ob * ub._y, Bb._z = Gb * bb._z + Ob * ub._z, Bb._w = Gb * bb._w + Ob * ub._w, Bb._isDirty = !0, Bb
      }
      static Hermite(bb, ub, hb, Bb, Ob) {
        const Gb = Ob * Ob,
          Ub = Ob * Gb,
          Lb = 2 * Ub - 3 * Gb + 1,
          Yb = -2 * Ub + 3 * Gb,
          Sb = Ub - 2 * Gb + Ob,
          ab = Ub - Gb,
          Hb = bb._x * Lb + hb._x * Yb + ub._x * Sb + Bb._x * ab,
          wb = bb._y * Lb + hb._y * Yb + ub._y * Sb + Bb._y * ab,
          Zb = bb._z * Lb + hb._z * Yb + ub._z * Sb + Bb._z * ab,
          pb = bb._w * Lb + hb._w * Yb + ub._w * Sb + Bb._w * ab;
        return new Xb(Hb, wb, Zb, pb)
      }
      static Hermite1stDerivative(bb, ub, hb, Bb, Ob) {
        const Gb = new Xb;
        return this.Hermite1stDerivativeToRef(bb, ub, hb, Bb, Ob, Gb), Gb
      }
      static Hermite1stDerivativeToRef(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = Ob * Ob;
        return Gb._x = 6 * (Ub - Ob) * bb._x + (3 * Ub - 4 * Ob + 1) * ub._x + 6 * (-Ub + Ob) * hb._x + (3 * Ub - 2 * Ob) * Bb._x, Gb._y = 6 * (Ub - Ob) * bb._y + (3 * Ub - 4 * Ob + 1) * ub._y + 6 * (-Ub + Ob) * hb._y + (3 * Ub - 2 * Ob) * Bb._y, Gb._z = 6 * (Ub - Ob) * bb._z + (3 * Ub - 4 * Ob + 1) * ub._z + 6 * (-Ub + Ob) * hb._z + (3 * Ub - 2 * Ob) * Bb._z, Gb._w = 6 * (Ub - Ob) * bb._w + (3 * Ub - 4 * Ob + 1) * ub._w + 6 * (-Ub + Ob) * hb._w + (3 * Ub - 2 * Ob) * Bb._w, Gb._isDirty = !0, Gb
      }
      static Normalize(bb) {
        const ub = Xb.Zero();
        return Xb.NormalizeToRef(bb, ub), ub
      }
      static NormalizeToRef(bb, ub) {
        return bb.normalizeToRef(ub), ub
      }
      static Clamp(bb, ub, hb) {
        const Bb = new Xb;
        return Xb.ClampToRef(bb, ub, hb, Bb), Bb
      }
      static ClampToRef(bb, ub, hb, Bb) {
        return Bb.M_((0, Lb.Clamp)(bb.x, ub.x, hb.x), (0, Lb.Clamp)(bb.y, ub.y, hb.y), (0, Lb.Clamp)(bb.z, ub.z, hb.z), (0, Lb.Clamp)(bb.w, ub.w, hb.w))
      }
      static Random() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Xb((0, Lb.RandomRange)(bb, ub), (0, Lb.RandomRange)(bb, ub), (0, Lb.RandomRange)(bb, ub), (0, Lb.RandomRange)(bb, ub))
      }
      static RandomToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).M_((0, Lb.RandomRange)(bb, ub), (0, Lb.RandomRange)(bb, ub), (0, Lb.RandomRange)(bb, ub), (0, Lb.RandomRange)(bb, ub))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(bb, ub) {
        return Math.sqrt(Xb.DistanceSquared(bb, ub))
      }
      static DistanceSquared(bb, ub) {
        const hb = bb.x - ub.x,
          Bb = bb.y - ub.y,
          Ob = bb.z - ub.z,
          Gb = bb.w - ub.w;
        return hb * hb + Bb * Bb + Ob * Ob + Gb * Gb
      }
      static Center(bb, ub) {
        return Xb.CenterToRef(bb, ub, Xb.Zero())
      }
      static CenterToRef(bb, ub, hb) {
        return hb.M_((bb.x + ub.x) / 2, (bb.y + ub.y) / 2, (bb.z + ub.z) / 2, (bb.w + ub.w) / 2)
      }
    }
    Xb._V8PerformanceHack = new Xb(.5, .5, .5, .5);
    class pb {
      static get Use64Bits() {
        return Gb.d.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = Yb.k._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Bb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = bb, this._isIdentity3x2 = bb || hb, this._isIdentityDirty = !this._isIdentity && ub, this._isIdentity3x2Dirty = !this._isIdentity3x2 && Bb
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, Gb.d.MatrixTrackPrecisionChange && Gb.d.MatrixTrackedMatrices.push(this), this._m = new Gb.d.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const bb = this._m;
          this._isIdentity = 1 === bb[0] && 0 === bb[1] && 0 === bb[2] && 0 === bb[3] && 0 === bb[4] && 1 === bb[5] && 0 === bb[6] && 0 === bb[7] && 0 === bb[8] && 0 === bb[9] && 1 === bb[10] && 0 === bb[11] && 0 === bb[12] && 0 === bb[13] && 0 === bb[14] && 1 === bb[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const bb = this._m,
          ub = bb[0],
          hb = bb[1],
          Bb = bb[2],
          Ob = bb[3],
          Gb = bb[4],
          Ub = bb[5],
          Lb = bb[6],
          Yb = bb[7],
          Sb = bb[8],
          ab = bb[9],
          Hb = bb[10],
          wb = bb[11],
          Zb = bb[12],
          Xb = bb[13],
          pb = bb[14],
          ob = bb[15],
          Ab = Hb * ob - pb * wb,
          lb = ab * ob - Xb * wb,
          Kb = ab * pb - Xb * Hb,
          Wb = Sb * ob - Zb * wb,
          Cb = Sb * pb - Hb * Zb,
          db = Sb * Xb - Zb * ab;
        return ub * +(Ub * Ab - Lb * lb + Yb * Kb) + hb * -(Gb * Ab - Lb * Wb + Yb * Cb) + Bb * +(Gb * lb - Ub * Wb + Yb * db) + Ob * -(Gb * Kb - Ub * Cb + Lb * db)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!bb) return this._m;
        const hb = this._m;
        for (let Bb = 0; Bb < 16; Bb++) bb[ub + Bb] = hb[Bb];
        return this
      }
      ZBb() {
        return this._m
      }
      Ohb(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return pb.FromArrayToRef(bb, ub, this)
      }
      M_() {
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        return pb.FromArrayToRef(ub, 0, this)
      }
      set() {
        const bb = this._m;
        for (let ub = 0; ub < 16; ub++) bb[ub] = ub < 0 || arguments.length <= ub ? void 0 : arguments[ub];
        return this.markAsUpdated(), this
      }
      N9(bb) {
        const ub = this._m;
        for (let hb = 0; hb < 16; hb++) ub[hb] = bb;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return pb.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(bb) {
        const ub = new pb;
        return this.addToRef(bb, ub), ub
      }
      addToRef(bb, ub) {
        const hb = this._m,
          Bb = ub._m,
          Ob = bb.m;
        for (let Gb = 0; Gb < 16; Gb++) Bb[Gb] = hb[Gb] + Ob[Gb];
        return ub.markAsUpdated(), ub
      }
      addToSelf(bb) {
        const ub = this._m,
          hb = bb.m;
        return ub[0] += hb[0], ub[1] += hb[1], ub[2] += hb[2], ub[3] += hb[3], ub[4] += hb[4], ub[5] += hb[5], ub[6] += hb[6], ub[7] += hb[7], ub[8] += hb[8], ub[9] += hb[9], ub[10] += hb[10], ub[11] += hb[11], ub[12] += hb[12], ub[13] += hb[13], ub[14] += hb[14], ub[15] += hb[15], this.markAsUpdated(), this
      }
      addInPlace(bb) {
        const ub = this._m,
          hb = bb.m;
        for (let Bb = 0; Bb < 16; Bb++) ub[Bb] += hb[Bb];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const bb = this._m;
        for (let ub = 0; ub < 16; ub++) bb[ub] += ub < 0 || arguments.length <= ub ? void 0 : arguments[ub];
        return this.markAsUpdated(), this
      }
      subtract(bb) {
        const ub = this._m,
          hb = bb.m;
        for (let Bb = 0; Bb < 16; Bb++) ub[Bb] -= hb[Bb];
        return this.markAsUpdated(), this
      }
      subtractToRef(bb, ub) {
        const hb = this._m,
          Bb = bb.m,
          Ob = ub._m;
        for (let Gb = 0; Gb < 16; Gb++) Ob[Gb] = hb[Gb] - Bb[Gb];
        return ub.markAsUpdated(), ub
      }
      tBb(bb) {
        const ub = this._m,
          hb = bb.m;
        for (let Bb = 0; Bb < 16; Bb++) ub[Bb] -= hb[Bb];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        return this.subtractFromFloatsToRef(...ub, new pb)
      }
      subtractFromFloatsToRef() {
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        const Bb = ub.pop(),
          Ob = this._m,
          Gb = Bb._m,
          Ub = ub;
        for (let Lb = 0; Lb < 16; Lb++) Gb[Lb] = Ob[Lb] - Ub[Lb];
        return Bb.markAsUpdated(), Bb
      }
      invertToRef(bb) {
        return !0 === this._isIdentity ? (pb.IdentityToRef(bb), bb) : ((0, Yb.e)(this, bb.ZBb()) ? bb.markAsUpdated() : bb.mD(this), bb)
      }
      addAtIndex(bb, ub) {
        return this._m[bb] += ub, this.markAsUpdated(), this
      }
      multiplyAtIndex(bb, ub) {
        return this._m[bb] *= ub, this.markAsUpdated(), this
      }
      setTranslationFromFloats(bb, ub, hb) {
        return this._m[12] = bb, this._m[13] = ub, this._m[14] = hb, this.markAsUpdated(), this
      }
      addTranslationFromFloats(bb, ub, hb) {
        return this._m[12] += bb, this._m[13] += ub, this._m[14] += hb, this.markAsUpdated(), this
      }
      setTranslation(bb) {
        return this.setTranslationFromFloats(bb._x, bb._y, bb._z)
      }
      getTranslation() {
        return new wb(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(bb) {
        return bb.x = this._m[12], bb.y = this._m[13], bb.z = this._m[14], bb
      }
      removeRotationAndScaling() {
        const bb = this.m;
        return pb.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, bb[12], bb[13], bb[14], bb[15], this), this._updateIdentityStatus(0 === bb[12] && 0 === bb[13] && 0 === bb[14] && 1 === bb[15]), this
      }
      mD(bb) {
        bb.copyToArray(this._m);
        const ub = bb;
        return this.updateFlag = ub.updateFlag, this._updateIdentityStatus(ub._isIdentity, ub._isIdentityDirty, ub._isIdentity3x2, ub._isIdentity3x2Dirty), this
      }
      copyToArray(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, Yb.b)(this, bb, ub), this
      }
      multiply(bb) {
        const ub = new pb;
        return this.multiplyToRef(bb, ub), ub
      }
      multiplyInPlace(bb) {
        const ub = this._m,
          hb = bb.m;
        for (let Bb = 0; Bb < 16; Bb++) ub[Bb] *= hb[Bb];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const bb = this._m;
        for (let ub = 0; ub < 16; ub++) bb[ub] *= ub < 0 || arguments.length <= ub ? void 0 : arguments[ub];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var bb = arguments.length, ub = new Array(bb), hb = 0; hb < bb; hb++) ub[hb] = arguments[hb];
        const Bb = ub.pop(),
          Ob = this._m,
          Gb = Bb._m,
          Ub = ub;
        for (let Lb = 0; Lb < 16; Lb++) Gb[Lb] = Ob[Lb] * Ub[Lb];
        return Bb.markAsUpdated(), Bb
      }
      multiplyToRef(bb, ub) {
        return this._isIdentity ? (ub.mD(bb), ub) : bb._isIdentity ? (ub.mD(this), ub) : (this.multiplyToArray(bb, ub._m, 0), ub.markAsUpdated(), ub)
      }
      multiplyToArray(bb, ub, hb) {
        return (0, Yb.o)(this, bb, ub, hb), this
      }
      divide(bb) {
        return this.divideToRef(bb, new pb)
      }
      divideToRef(bb, ub) {
        const hb = this._m,
          Bb = bb.m,
          Ob = ub._m;
        for (let Gb = 0; Gb < 16; Gb++) Ob[Gb] = hb[Gb] / Bb[Gb];
        return ub.markAsUpdated(), ub
      }
      divideInPlace(bb) {
        const ub = this._m,
          hb = bb.m;
        for (let Bb = 0; Bb < 16; Bb++) ub[Bb] /= hb[Bb];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(bb) {
        const ub = this._m,
          hb = bb.m;
        for (let Bb = 0; Bb < 16; Bb++) ub[Bb] = Math.min(ub[Bb], hb[Bb]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const bb = this._m;
        for (let ub = 0; ub < 16; ub++) bb[ub] = Math.min(bb[ub], ub < 0 || arguments.length <= ub ? void 0 : arguments[ub]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(bb) {
        const ub = this._m,
          hb = bb.m;
        for (let Bb = 0; Bb < 16; Bb++) ub[Bb] = Math.max(ub[Bb], hb[Bb]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const bb = this._m;
        for (let ub = 0; ub < 16; ub++) bb[ub] = Math.max(bb[ub], ub < 0 || arguments.length <= ub ? void 0 : arguments[ub]);
        return this.markAsUpdated(), this
      }
      AO() {
        return this.negateToRef(new pb)
      }
      negateInPlace() {
        const bb = this._m;
        for (let ub = 0; ub < 16; ub++) bb[ub] = -bb[ub];
        return this.markAsUpdated(), this
      }
      negateToRef(bb) {
        const ub = this._m,
          hb = bb._m;
        for (let Bb = 0; Bb < 16; Bb++) hb[Bb] = -ub[Bb];
        return bb.markAsUpdated(), bb
      }
      equals(bb) {
        const ub = bb;
        if (!ub) return !1;
        if ((this._isIdentity || ub._isIdentity) && !this._isIdentityDirty && !ub._isIdentityDirty) return this._isIdentity && ub._isIdentity;
        const hb = this.m,
          Bb = ub.m;
        return hb[0] === Bb[0] && hb[1] === Bb[1] && hb[2] === Bb[2] && hb[3] === Bb[3] && hb[4] === Bb[4] && hb[5] === Bb[5] && hb[6] === Bb[6] && hb[7] === Bb[7] && hb[8] === Bb[8] && hb[9] === Bb[9] && hb[10] === Bb[10] && hb[11] === Bb[11] && hb[12] === Bb[12] && hb[13] === Bb[13] && hb[14] === Bb[14] && hb[15] === Bb[15]
      }
      equalsWithEpsilon(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const hb = this._m,
          Bb = bb.m;
        for (let Ob = 0; Ob < 16; Ob++)
          if (!(0, Lb.WithinEpsilon)(hb[Ob], Bb[Ob], ub)) return !1;
        return !0
      }
      sUb() {
        const bb = this._m;
        for (let ub = 0; ub < 16; ub++)
          if (bb[ub] != (ub < 0 || arguments.length <= ub ? void 0 : arguments[ub])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new pb)
      }
      floorToRef(bb) {
        const ub = this._m,
          hb = bb._m;
        for (let Bb = 0; Bb < 16; Bb++) hb[Bb] = Math.floor(ub[Bb]);
        return bb.markAsUpdated(), bb
      }
      fract() {
        return this.fractToRef(new pb)
      }
      fractToRef(bb) {
        const ub = this._m,
          hb = bb._m;
        for (let Bb = 0; Bb < 16; Bb++) hb[Bb] = ub[Bb] - Math.floor(ub[Bb]);
        return bb.markAsUpdated(), bb
      }
      clone() {
        const bb = new pb;
        return bb.mD(this), bb
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let bb = ab(this._m[0]);
        for (let ub = 1; ub < 16; ub++) bb = 397 * bb ^ ab(this._m[ub]);
        return bb
      }
      decomposeToTransformNode(bb) {
        return bb.rotationQuaternion = bb.rotationQuaternion || new Xb, this.decompose(bb.pa, bb.rotationQuaternion, bb.position)
      }
      decompose(bb, ub, hb, Bb) {
        let Ob = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return hb && hb.N9(0), bb && bb.N9(1), ub && ub.M_(0, 0, 0, 1), !0;
        const Gb = this._m;
        if (hb && hb.M_(Gb[12], Gb[13], Gb[14]), (bb = bb || ob.YX[0]).x = Math.sqrt(Gb[0] * Gb[0] + Gb[1] * Gb[1] + Gb[2] * Gb[2]), bb.y = Math.sqrt(Gb[4] * Gb[4] + Gb[5] * Gb[5] + Gb[6] * Gb[6]), bb.z = Math.sqrt(Gb[8] * Gb[8] + Gb[9] * Gb[9] + Gb[10] * Gb[10]), Bb) {
          const ub = (Ob ? Bb.absoluteScaling.x : Bb.pa.x) < 0 ? -1 : 1,
            hb = (Ob ? Bb.absoluteScaling.y : Bb.pa.y) < 0 ? -1 : 1,
            Gb = (Ob ? Bb.absoluteScaling.z : Bb.pa.z) < 0 ? -1 : 1;
          bb.x *= ub, bb.y *= hb, bb.z *= Gb
        } else this.determinant() <= 0 && (bb.y *= -1);
        if (0 === bb._x || 0 === bb._y || 0 === bb._z) return ub && ub.M_(0, 0, 0, 1), !1;
        if (ub) {
          const hb = 1 / bb._x,
            Bb = 1 / bb._y,
            Ob = 1 / bb._z;
          pb.FromValuesToRef(Gb[0] * hb, Gb[1] * hb, Gb[2] * hb, 0, Gb[4] * Bb, Gb[5] * Bb, Gb[6] * Bb, 0, Gb[8] * Ob, Gb[9] * Ob, Gb[10] * Ob, 0, 0, 0, 0, 1, ob.Matrix[0]), Xb.FromRotationMatrixToRef(ob.Matrix[0], ub)
        }
        return !0
      }
      getRow(bb) {
        if (bb < 0 || bb > 3) return null;
        const ub = 4 * bb;
        return new Zb(this._m[ub + 0], this._m[ub + 1], this._m[ub + 2], this._m[ub + 3])
      }
      getRowToRef(bb, ub) {
        if (bb >= 0 && bb <= 3) {
          const hb = 4 * bb;
          ub.x = this._m[hb + 0], ub.y = this._m[hb + 1], ub.z = this._m[hb + 2], ub.w = this._m[hb + 3]
        }
        return ub
      }
      setRow(bb, ub) {
        return this.setRowFromFloats(bb, ub.x, ub.y, ub.z, ub.w)
      }
      transpose() {
        const bb = new pb;
        return pb.TransposeToRef(this, bb), bb
      }
      transposeToRef(bb) {
        return pb.TransposeToRef(this, bb), bb
      }
      setRowFromFloats(bb, ub, hb, Bb, Ob) {
        if (bb < 0 || bb > 3) return this;
        const Gb = 4 * bb;
        return this._m[Gb + 0] = ub, this._m[Gb + 1] = hb, this._m[Gb + 2] = Bb, this._m[Gb + 3] = Ob, this.markAsUpdated(), this
      }
      scale(bb) {
        const ub = new pb;
        return this.scaleToRef(bb, ub), ub
      }
      scaleToRef(bb, ub) {
        for (let hb = 0; hb < 16; hb++) ub._m[hb] = this._m[hb] * bb;
        return ub.markAsUpdated(), ub
      }
      scaleAndAddToRef(bb, ub) {
        for (let hb = 0; hb < 16; hb++) ub._m[hb] += this._m[hb] * bb;
        return ub.markAsUpdated(), ub
      }
      scaleInPlace(bb) {
        const ub = this._m;
        for (let hb = 0; hb < 16; hb++) ub[hb] *= bb;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(bb) {
        const ub = ob.Matrix[0];
        this.invertToRef(ub), ub.transposeToRef(bb);
        const hb = bb._m;
        return pb.FromValuesToRef(hb[0], hb[1], hb[2], 0, hb[4], hb[5], hb[6], 0, hb[8], hb[9], hb[10], 0, 0, 0, 0, 1, bb), bb
      }
      getRotationMatrix() {
        const bb = new pb;
        return this.getRotationMatrixToRef(bb), bb
      }
      getRotationMatrixToRef(bb) {
        const ub = ob.YX[0];
        if (!this.decompose(ub)) return pb.IdentityToRef(bb), bb;
        const hb = this._m,
          Bb = 1 / ub._x,
          Ob = 1 / ub._y,
          Gb = 1 / ub._z;
        return pb.FromValuesToRef(hb[0] * Bb, hb[1] * Bb, hb[2] * Bb, 0, hb[4] * Ob, hb[5] * Ob, hb[6] * Ob, 0, hb[8] * Gb, hb[9] * Gb, hb[10] * Gb, 0, 0, 0, 0, 1, bb), bb
      }
      toggleModelMatrixHandInPlace() {
        const bb = this._m;
        return bb[2] *= -1, bb[6] *= -1, bb[8] *= -1, bb[9] *= -1, bb[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const bb = this._m;
        return bb[8] *= -1, bb[9] *= -1, bb[10] *= -1, bb[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(lb, this), this
      }
      static FromArray(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const hb = new pb;
        return pb.FromArrayToRef(bb, ub, hb), hb
      }
      static FromArrayToRef(bb, ub, hb) {
        for (let Bb = 0; Bb < 16; Bb++) hb._m[Bb] = bb[Bb + ub];
        return hb.markAsUpdated(), hb
      }
      static FromFloat32ArrayToRefScaled(bb, ub, hb, Bb) {
        return Bb._m[0] = bb[0 + ub] * hb, Bb._m[1] = bb[1 + ub] * hb, Bb._m[2] = bb[2 + ub] * hb, Bb._m[3] = bb[3 + ub] * hb, Bb._m[4] = bb[4 + ub] * hb, Bb._m[5] = bb[5 + ub] * hb, Bb._m[6] = bb[6 + ub] * hb, Bb._m[7] = bb[7 + ub] * hb, Bb._m[8] = bb[8 + ub] * hb, Bb._m[9] = bb[9 + ub] * hb, Bb._m[10] = bb[10 + ub] * hb, Bb._m[11] = bb[11 + ub] * hb, Bb._m[12] = bb[12 + ub] * hb, Bb._m[13] = bb[13 + ub] * hb, Bb._m[14] = bb[14 + ub] * hb, Bb._m[15] = bb[15 + ub] * hb, Bb.markAsUpdated(), Bb
      }
      static get IdentityReadOnly() {
        return pb._IdentityReadOnly
      }
      static FromValuesToRef(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb, pb, ob) {
        const Ab = ob._m;
        Ab[0] = bb, Ab[1] = ub, Ab[2] = hb, Ab[3] = Bb, Ab[4] = Ob, Ab[5] = Gb, Ab[6] = Ub, Ab[7] = Lb, Ab[8] = Yb, Ab[9] = Sb, Ab[10] = ab, Ab[11] = Hb, Ab[12] = wb, Ab[13] = Zb, Ab[14] = Xb, Ab[15] = pb, ob.markAsUpdated()
      }
      static FromValues(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab, Hb, wb, Zb, Xb, ob) {
        const Ab = new pb,
          lb = Ab._m;
        return lb[0] = bb, lb[1] = ub, lb[2] = hb, lb[3] = Bb, lb[4] = Ob, lb[5] = Gb, lb[6] = Ub, lb[7] = Lb, lb[8] = Yb, lb[9] = Sb, lb[10] = ab, lb[11] = Hb, lb[12] = wb, lb[13] = Zb, lb[14] = Xb, lb[15] = ob, Ab.markAsUpdated(), Ab
      }
      static Compose(bb, ub, hb) {
        const Bb = new pb;
        return pb.ComposeToRef(bb, ub, hb, Bb), Bb
      }
      static ComposeToRef(bb, ub, hb, Bb) {
        const Ob = Bb._m,
          Gb = ub._x,
          Ub = ub._y,
          Lb = ub._z,
          Yb = ub._w,
          Sb = Gb + Gb,
          ab = Ub + Ub,
          Hb = Lb + Lb,
          wb = Gb * Sb,
          Zb = Gb * ab,
          Xb = Gb * Hb,
          pb = Ub * ab,
          ob = Ub * Hb,
          Ab = Lb * Hb,
          lb = Yb * Sb,
          Kb = Yb * ab,
          Wb = Yb * Hb,
          Cb = bb._x,
          db = bb._y,
          rb = bb._z;
        return Ob[0] = (1 - (pb + Ab)) * Cb, Ob[1] = (Zb + Wb) * Cb, Ob[2] = (Xb - Kb) * Cb, Ob[3] = 0, Ob[4] = (Zb - Wb) * db, Ob[5] = (1 - (wb + Ab)) * db, Ob[6] = (ob + lb) * db, Ob[7] = 0, Ob[8] = (Xb + Kb) * rb, Ob[9] = (ob - lb) * rb, Ob[10] = (1 - (wb + pb)) * rb, Ob[11] = 0, Ob[12] = hb._x, Ob[13] = hb._y, Ob[14] = hb._z, Ob[15] = 1, Bb.markAsUpdated(), Bb
      }
      static Identity() {
        const bb = pb.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return bb._updateIdentityStatus(!0), bb
      }
      static IdentityToRef(bb) {
        return pb.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, bb), bb._updateIdentityStatus(!0), bb
      }
      static Zero() {
        const bb = pb.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return bb._updateIdentityStatus(!1), bb
      }
      static RotationX(bb) {
        const ub = new pb;
        return pb.RotationXToRef(bb, ub), ub
      }
      static Invert(bb) {
        const ub = new pb;
        return bb.invertToRef(ub), ub
      }
      static RotationXToRef(bb, ub) {
        const hb = Math.sin(bb),
          Bb = Math.cos(bb);
        return pb.FromValuesToRef(1, 0, 0, 0, 0, Bb, hb, 0, 0, -hb, Bb, 0, 0, 0, 0, 1, ub), ub._updateIdentityStatus(1 === Bb && 0 === hb), ub
      }
      static RotationY(bb) {
        const ub = new pb;
        return pb.RotationYToRef(bb, ub), ub
      }
      static RotationYToRef(bb, ub) {
        const hb = Math.sin(bb),
          Bb = Math.cos(bb);
        return pb.FromValuesToRef(Bb, 0, -hb, 0, 0, 1, 0, 0, hb, 0, Bb, 0, 0, 0, 0, 1, ub), ub._updateIdentityStatus(1 === Bb && 0 === hb), ub
      }
      static RotationZ(bb) {
        const ub = new pb;
        return pb.RotationZToRef(bb, ub), ub
      }
      static RotationZToRef(bb, ub) {
        const hb = Math.sin(bb),
          Bb = Math.cos(bb);
        return pb.FromValuesToRef(Bb, hb, 0, 0, -hb, Bb, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, ub), ub._updateIdentityStatus(1 === Bb && 0 === hb), ub
      }
      static RotationAxis(bb, ub) {
        const hb = new pb;
        return pb.RotationAxisToRef(bb, ub, hb), hb
      }
      static RotationAxisToRef(bb, ub, hb) {
        const Bb = Math.sin(-ub),
          Ob = Math.cos(-ub),
          Gb = 1 - Ob;
        bb = bb.normalizeToRef(ob.YX[0]);
        const Ub = hb._m;
        return Ub[0] = bb._x * bb._x * Gb + Ob, Ub[1] = bb._x * bb._y * Gb - bb._z * Bb, Ub[2] = bb._x * bb._z * Gb + bb._y * Bb, Ub[3] = 0, Ub[4] = bb._y * bb._x * Gb + bb._z * Bb, Ub[5] = bb._y * bb._y * Gb + Ob, Ub[6] = bb._y * bb._z * Gb - bb._x * Bb, Ub[7] = 0, Ub[8] = bb._z * bb._x * Gb - bb._y * Bb, Ub[9] = bb._z * bb._y * Gb + bb._x * Bb, Ub[10] = bb._z * bb._z * Gb + Ob, Ub[11] = 0, Ub[12] = 0, Ub[13] = 0, Ub[14] = 0, Ub[15] = 1, hb.markAsUpdated(), hb
      }
      static RotationAlignToRef(bb, ub, hb) {
        let Ob = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Gb = wb.Dot(ub, bb),
          Ub = hb._m;
        if (Gb < -1 + Bb.b) Ub[0] = -1, Ub[1] = 0, Ub[2] = 0, Ub[3] = 0, Ub[4] = 0, Ub[5] = Ob ? 1 : -1, Ub[6] = 0, Ub[7] = 0, Ub[8] = 0, Ub[9] = 0, Ub[10] = Ob ? -1 : 1, Ub[11] = 0;
        else {
          const hb = wb.Cross(ub, bb),
            Bb = 1 / (1 + Gb);
          Ub[0] = hb._x * hb._x * Bb + Gb, Ub[1] = hb._y * hb._x * Bb - hb._z, Ub[2] = hb._z * hb._x * Bb + hb._y, Ub[3] = 0, Ub[4] = hb._x * hb._y * Bb + hb._z, Ub[5] = hb._y * hb._y * Bb + Gb, Ub[6] = hb._z * hb._y * Bb - hb._x, Ub[7] = 0, Ub[8] = hb._x * hb._z * Bb - hb._y, Ub[9] = hb._y * hb._z * Bb + hb._x, Ub[10] = hb._z * hb._z * Bb + Gb, Ub[11] = 0
        }
        return Ub[12] = 0, Ub[13] = 0, Ub[14] = 0, Ub[15] = 1, hb.markAsUpdated(), hb
      }
      static RotationYawPitchRoll(bb, ub, hb) {
        const Bb = new pb;
        return pb.RotationYawPitchRollToRef(bb, ub, hb, Bb), Bb
      }
      static RotationYawPitchRollToRef(bb, ub, hb, Bb) {
        return Xb.RotationYawPitchRollToRef(bb, ub, hb, ob.Quaternion[0]), ob.Quaternion[0].toRotationMatrix(Bb), Bb
      }
      static Scaling(bb, ub, hb) {
        const Bb = new pb;
        return pb.ScalingToRef(bb, ub, hb, Bb), Bb
      }
      static ScalingToRef(bb, ub, hb, Bb) {
        return pb.FromValuesToRef(bb, 0, 0, 0, 0, ub, 0, 0, 0, 0, hb, 0, 0, 0, 0, 1, Bb), Bb._updateIdentityStatus(1 === bb && 1 === ub && 1 === hb), Bb
      }
      static Translation(bb, ub, hb) {
        const Bb = new pb;
        return pb.TranslationToRef(bb, ub, hb, Bb), Bb
      }
      static TranslationToRef(bb, ub, hb, Bb) {
        return pb.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, bb, ub, hb, 1, Bb), Bb._updateIdentityStatus(0 === bb && 0 === ub && 0 === hb), Bb
      }
      static Lerp(bb, ub, hb) {
        const Bb = new pb;
        return pb.LerpToRef(bb, ub, hb, Bb), Bb
      }
      static LerpToRef(bb, ub, hb, Bb) {
        const Ob = Bb._m,
          Gb = bb.m,
          Ub = ub.m;
        for (let Lb = 0; Lb < 16; Lb++) Ob[Lb] = Gb[Lb] * (1 - hb) + Ub[Lb] * hb;
        return Bb.markAsUpdated(), Bb
      }
      static DecomposeLerp(bb, ub, hb) {
        const Bb = new pb;
        return pb.DecomposeLerpToRef(bb, ub, hb, Bb), Bb
      }
      static DecomposeLerpToRef(bb, ub, hb, Bb) {
        const Ob = ob.YX[0],
          Gb = ob.Quaternion[0],
          Ub = ob.YX[1];
        bb.decompose(Ob, Gb, Ub);
        const Lb = ob.YX[2],
          Yb = ob.Quaternion[1],
          Sb = ob.YX[3];
        ub.decompose(Lb, Yb, Sb);
        const ab = ob.YX[4];
        wb.LerpToRef(Ob, Lb, hb, ab);
        const Hb = ob.Quaternion[2];
        Xb.SlerpToRef(Gb, Yb, hb, Hb);
        const Zb = ob.YX[5];
        return wb.LerpToRef(Ub, Sb, hb, Zb), pb.ComposeToRef(ab, Hb, Zb, Bb), Bb
      }
      static LookAtLH(bb, ub, hb) {
        const Bb = new pb;
        return pb.LookAtLHToRef(bb, ub, hb, Bb), Bb
      }
      static LookAtLHToRef(bb, ub, hb, Bb) {
        const Ob = ob.YX[0],
          Gb = ob.YX[1],
          Ub = ob.YX[2];
        ub.subtractToRef(bb, Ub), Ub.normalize(), wb.CrossToRef(hb, Ub, Ob);
        const Lb = Ob.lengthSquared();
        0 === Lb ? Ob.x = 1 : Ob.normalizeFromLength(Math.sqrt(Lb)), wb.CrossToRef(Ub, Ob, Gb), Gb.normalize();
        const Yb = -wb.Dot(Ob, bb),
          Sb = -wb.Dot(Gb, bb),
          ab = -wb.Dot(Ub, bb);
        return pb.FromValuesToRef(Ob._x, Gb._x, Ub._x, 0, Ob._y, Gb._y, Ub._y, 0, Ob._z, Gb._z, Ub._z, 0, Yb, Sb, ab, 1, Bb), Bb
      }
      static LookAtRH(bb, ub, hb) {
        const Bb = new pb;
        return pb.LookAtRHToRef(bb, ub, hb, Bb), Bb
      }
      static LookAtRHToRef(bb, ub, hb, Bb) {
        const Ob = ob.YX[0],
          Gb = ob.YX[1],
          Ub = ob.YX[2];
        bb.subtractToRef(ub, Ub), Ub.normalize(), wb.CrossToRef(hb, Ub, Ob);
        const Lb = Ob.lengthSquared();
        0 === Lb ? Ob.x = 1 : Ob.normalizeFromLength(Math.sqrt(Lb)), wb.CrossToRef(Ub, Ob, Gb), Gb.normalize();
        const Yb = -wb.Dot(Ob, bb),
          Sb = -wb.Dot(Gb, bb),
          ab = -wb.Dot(Ub, bb);
        return pb.FromValuesToRef(Ob._x, Gb._x, Ub._x, 0, Ob._y, Gb._y, Ub._y, 0, Ob._z, Gb._z, Ub._z, 0, Yb, Sb, ab, 1, Bb), Bb
      }
      static LookDirectionLH(bb, ub) {
        const hb = new pb;
        return pb.LookDirectionLHToRef(bb, ub, hb), hb
      }
      static LookDirectionLHToRef(bb, ub, hb) {
        const Bb = ob.YX[0];
        Bb.mD(bb), Bb.scaleInPlace(-1);
        const Ob = ob.YX[1];
        return wb.CrossToRef(ub, Bb, Ob), pb.FromValuesToRef(Ob._x, Ob._y, Ob._z, 0, ub._x, ub._y, ub._z, 0, Bb._x, Bb._y, Bb._z, 0, 0, 0, 0, 1, hb), hb
      }
      static LookDirectionRH(bb, ub) {
        const hb = new pb;
        return pb.LookDirectionRHToRef(bb, ub, hb), hb
      }
      static LookDirectionRHToRef(bb, ub, hb) {
        const Bb = ob.YX[2];
        return wb.CrossToRef(ub, bb, Bb), pb.FromValuesToRef(Bb._x, Bb._y, Bb._z, 0, ub._x, ub._y, ub._z, 0, bb._x, bb._y, bb._z, 0, 0, 0, 0, 1, hb), hb
      }
      static OrthoLH(bb, ub, hb, Bb, Ob) {
        const Gb = new pb;
        return pb.OrthoLHToRef(bb, ub, hb, Bb, Gb, Ob), Gb
      }
      static OrthoLHToRef(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = 2 / bb,
          Lb = 2 / ub,
          Yb = 2 / (Bb - hb),
          Sb = -(Bb + hb) / (Bb - hb);
        return pb.FromValuesToRef(Ub, 0, 0, 0, 0, Lb, 0, 0, 0, 0, Yb, 0, 0, 0, Sb, 1, Ob), Gb && Ob.multiplyToRef(lb, Ob), Ob._updateIdentityStatus(1 === Ub && 1 === Lb && 1 === Yb && 0 === Sb), Ob
      }
      static OrthoOffCenterLH(bb, ub, hb, Bb, Ob, Gb, Ub) {
        const Lb = new pb;
        return pb.OrthoOffCenterLHToRef(bb, ub, hb, Bb, Ob, Gb, Lb, Ub), Lb
      }
      static OrthoOffCenterLHToRef(bb, ub, hb, Bb, Ob, Gb, Ub, Lb) {
        const Yb = 2 / (ub - bb),
          Sb = 2 / (Bb - hb),
          ab = 2 / (Gb - Ob),
          Hb = -(Gb + Ob) / (Gb - Ob),
          wb = (bb + ub) / (bb - ub),
          Zb = (Bb + hb) / (hb - Bb);
        return pb.FromValuesToRef(Yb, 0, 0, 0, 0, Sb, 0, 0, 0, 0, ab, 0, wb, Zb, Hb, 1, Ub), Lb && Ub.multiplyToRef(lb, Ub), Ub.markAsUpdated(), Ub
      }
      static ObliqueOffCenterLHToRef(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab) {
        const Hb = -Ub * Math.cos(Lb),
          wb = -Ub * Math.sin(Lb);
        return pb.TranslationToRef(0, 0, -Yb, ob.Matrix[1]), pb.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Hb, wb, 1, 0, 0, 0, 0, 1, ob.Matrix[0]), ob.Matrix[1].multiplyToRef(ob.Matrix[0], ob.Matrix[0]), pb.TranslationToRef(0, 0, Yb, ob.Matrix[1]), ob.Matrix[0].multiplyToRef(ob.Matrix[1], ob.Matrix[0]), pb.OrthoOffCenterLHToRef(bb, ub, hb, Bb, Ob, Gb, Sb, ab), ob.Matrix[0].multiplyToRef(Sb, Sb), Sb
      }
      static OrthoOffCenterRH(bb, ub, hb, Bb, Ob, Gb, Ub) {
        const Lb = new pb;
        return pb.OrthoOffCenterRHToRef(bb, ub, hb, Bb, Ob, Gb, Lb, Ub), Lb
      }
      static OrthoOffCenterRHToRef(bb, ub, hb, Bb, Ob, Gb, Ub, Lb) {
        return pb.OrthoOffCenterLHToRef(bb, ub, hb, Bb, Ob, Gb, Ub, Lb), Ub._m[10] *= -1, Ub
      }
      static ObliqueOffCenterRHToRef(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab) {
        const Hb = Ub * Math.cos(Lb),
          wb = Ub * Math.sin(Lb);
        return pb.TranslationToRef(0, 0, Yb, ob.Matrix[1]), pb.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Hb, wb, 1, 0, 0, 0, 0, 1, ob.Matrix[0]), ob.Matrix[1].multiplyToRef(ob.Matrix[0], ob.Matrix[0]), pb.TranslationToRef(0, 0, -Yb, ob.Matrix[1]), ob.Matrix[0].multiplyToRef(ob.Matrix[1], ob.Matrix[0]), pb.OrthoOffCenterRHToRef(bb, ub, hb, Bb, Ob, Gb, Sb, ab), ob.Matrix[0].multiplyToRef(Sb, Sb), Sb
      }
      static PerspectiveLH(bb, ub, hb, Bb, Ob) {
        let Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const Ub = new pb,
          Lb = 2 * hb / bb,
          Yb = 2 * hb / ub,
          Sb = (Bb + hb) / (Bb - hb),
          ab = -2 * Bb * hb / (Bb - hb),
          Hb = Math.tan(Gb);
        return pb.FromValuesToRef(Lb, 0, 0, 0, 0, Yb, 0, Hb, 0, 0, Sb, 1, 0, 0, ab, 0, Ub), Ob && Ub.multiplyToRef(lb, Ub), Ub._updateIdentityStatus(!1), Ub
      }
      static PerspectiveFovLH(bb, ub, hb, Bb, Ob) {
        let Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Ub = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Lb = new pb;
        return pb.PerspectiveFovLHToRef(bb, ub, hb, Bb, Lb, !0, Ob, Gb, Ub), Lb
      }
      static PerspectiveFovLHToRef(bb, ub, hb, Bb, Ob) {
        let Gb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ub = arguments.length > 6 ? arguments[6] : void 0,
          Lb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Yb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Sb = hb,
          ab = Bb,
          Hb = 1 / Math.tan(.5 * bb),
          wb = Gb ? Hb / ub : Hb,
          Zb = Gb ? Hb : Hb * ub,
          Xb = Yb && 0 === Sb ? -1 : 0 !== ab ? (ab + Sb) / (ab - Sb) : 1,
          ob = Yb && 0 === Sb ? 2 * ab : 0 !== ab ? -2 * ab * Sb / (ab - Sb) : -2 * Sb,
          Ab = Math.tan(Lb);
        return pb.FromValuesToRef(wb, 0, 0, 0, 0, Zb, 0, Ab, 0, 0, Xb, 1, 0, 0, ob, 0, Ob), Ub && Ob.multiplyToRef(lb, Ob), Ob._updateIdentityStatus(!1), Ob
      }
      static PerspectiveFovReverseLHToRef(bb, ub, hb, Bb, Ob) {
        let Gb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ub = arguments.length > 6 ? arguments[6] : void 0,
          Lb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Yb = 1 / Math.tan(.5 * bb),
          Sb = Gb ? Yb / ub : Yb,
          ab = Gb ? Yb : Yb * ub,
          Hb = Math.tan(Lb);
        return pb.FromValuesToRef(Sb, 0, 0, 0, 0, ab, 0, Hb, 0, 0, -hb, 1, 0, 0, 1, 0, Ob), Ub && Ob.multiplyToRef(lb, Ob), Ob._updateIdentityStatus(!1), Ob
      }
      static PerspectiveFovRH(bb, ub, hb, Bb, Ob) {
        let Gb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Ub = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Lb = new pb;
        return pb.PerspectiveFovRHToRef(bb, ub, hb, Bb, Lb, !0, Ob, Gb, Ub), Lb
      }
      static PerspectiveFovRHToRef(bb, ub, hb, Bb, Ob) {
        let Gb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ub = arguments.length > 6 ? arguments[6] : void 0,
          Lb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Yb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Sb = hb,
          ab = Bb,
          Hb = 1 / Math.tan(.5 * bb),
          wb = Gb ? Hb / ub : Hb,
          Zb = Gb ? Hb : Hb * ub,
          Xb = Yb && 0 === Sb ? 1 : 0 !== ab ? -(ab + Sb) / (ab - Sb) : -1,
          ob = Yb && 0 === Sb ? 2 * ab : 0 !== ab ? -2 * ab * Sb / (ab - Sb) : -2 * Sb,
          Ab = Math.tan(Lb);
        return pb.FromValuesToRef(wb, 0, 0, 0, 0, Zb, 0, Ab, 0, 0, Xb, -1, 0, 0, ob, 0, Ob), Ub && Ob.multiplyToRef(lb, Ob), Ob._updateIdentityStatus(!1), Ob
      }
      static PerspectiveFovReverseRHToRef(bb, ub, hb, Bb, Ob) {
        let Gb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Ub = arguments.length > 6 ? arguments[6] : void 0,
          Lb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Yb = 1 / Math.tan(.5 * bb),
          Sb = Gb ? Yb / ub : Yb,
          ab = Gb ? Yb : Yb * ub,
          Hb = Math.tan(Lb);
        return pb.FromValuesToRef(Sb, 0, 0, 0, 0, ab, 0, Hb, 0, 0, -hb, -1, 0, 0, -1, 0, Ob), Ub && Ob.multiplyToRef(lb, Ob), Ob._updateIdentityStatus(!1), Ob
      }
      static GetFinalMatrix(bb, ub, hb, Bb, Ob, Gb) {
        const Ub = bb.width,
          Lb = bb.height,
          Yb = bb.x,
          Sb = bb.y,
          ab = pb.FromValues(Ub / 2, 0, 0, 0, 0, -Lb / 2, 0, 0, 0, 0, Gb - Ob, 0, Yb + Ub / 2, Lb / 2 + Sb, Ob, 1),
          Hb = new pb;
        return ub.multiplyToRef(hb, Hb), Hb.multiplyToRef(Bb, Hb), Hb.multiplyToRef(ab, Hb)
      }
      static GetAsMatrix2x2(bb) {
        const ub = bb.m,
          hb = [ub[0], ub[1], ub[4], ub[5]];
        return Gb.d.MatrixUse64Bits ? hb : new Float32Array(hb)
      }
      static GetAsMatrix3x3(bb) {
        const ub = bb.m,
          hb = [ub[0], ub[1], ub[2], ub[4], ub[5], ub[6], ub[8], ub[9], ub[10]];
        return Gb.d.MatrixUse64Bits ? hb : new Float32Array(hb)
      }
      static Transpose(bb) {
        const ub = new pb;
        return pb.TransposeToRef(bb, ub), ub
      }
      static TransposeToRef(bb, ub) {
        const hb = bb.m,
          Bb = hb[0],
          Ob = hb[4],
          Gb = hb[8],
          Ub = hb[12],
          Lb = hb[1],
          Yb = hb[5],
          Sb = hb[9],
          ab = hb[13],
          Hb = hb[2],
          wb = hb[6],
          Zb = hb[10],
          Xb = hb[14],
          pb = hb[3],
          ob = hb[7],
          Ab = hb[11],
          lb = hb[15],
          Kb = ub._m;
        return Kb[0] = Bb, Kb[1] = Ob, Kb[2] = Gb, Kb[3] = Ub, Kb[4] = Lb, Kb[5] = Yb, Kb[6] = Sb, Kb[7] = ab, Kb[8] = Hb, Kb[9] = wb, Kb[10] = Zb, Kb[11] = Xb, Kb[12] = pb, Kb[13] = ob, Kb[14] = Ab, Kb[15] = lb, ub.markAsUpdated(), ub._updateIdentityStatus(bb._isIdentity, bb._isIdentityDirty), ub
      }
      static Reflection(bb) {
        const ub = new pb;
        return pb.ReflectionToRef(bb, ub), ub
      }
      static ReflectionToRef(bb, ub) {
        bb.normalize();
        const hb = bb.normal.x,
          Bb = bb.normal.y,
          Ob = bb.normal.z,
          Gb = -2 * hb,
          Ub = -2 * Bb,
          Lb = -2 * Ob;
        return pb.FromValuesToRef(Gb * hb + 1, Ub * hb, Lb * hb, 0, Gb * Bb, Ub * Bb + 1, Lb * Bb, 0, Gb * Ob, Ub * Ob, Lb * Ob + 1, 0, Gb * bb.d, Ub * bb.d, Lb * bb.d, 1, ub), ub
      }
      static FromXYZAxesToRef(bb, ub, hb, Bb) {
        return pb.FromValuesToRef(bb._x, bb._y, bb._z, 0, ub._x, ub._y, ub._z, 0, hb._x, hb._y, hb._z, 0, 0, 0, 0, 1, Bb), Bb
      }
      static FromQuaternionToRef(bb, ub) {
        const hb = bb._x * bb._x,
          Bb = bb._y * bb._y,
          Ob = bb._z * bb._z,
          Gb = bb._x * bb._y,
          Ub = bb._z * bb._w,
          Lb = bb._z * bb._x,
          Yb = bb._y * bb._w,
          Sb = bb._y * bb._z,
          ab = bb._x * bb._w;
        return ub._m[0] = 1 - 2 * (Bb + Ob), ub._m[1] = 2 * (Gb + Ub), ub._m[2] = 2 * (Lb - Yb), ub._m[3] = 0, ub._m[4] = 2 * (Gb - Ub), ub._m[5] = 1 - 2 * (Ob + hb), ub._m[6] = 2 * (Sb + ab), ub._m[7] = 0, ub._m[8] = 2 * (Lb + Yb), ub._m[9] = 2 * (Sb - ab), ub._m[10] = 1 - 2 * (Bb + hb), ub._m[11] = 0, ub._m[12] = 0, ub._m[13] = 0, ub._m[14] = 0, ub._m[15] = 1, ub.markAsUpdated(), ub
      }
    }
    pb._IdentityReadOnly = pb.Identity();
    class ob {}
    ob.YX = (0, Ob.i)(11, wb.Zero), ob.Matrix = (0, Ob.i)(2, pb.Identity), ob.Quaternion = (0, Ob.i)(3, Xb.Zero);
    class Ab {}
    Ab.Vector2 = (0, Ob.i)(3, Hb.Zero), Ab.YX = (0, Ob.i)(13, wb.Zero), Ab.Vector4 = (0, Ob.i)(3, Zb.Zero), Ab.Quaternion = (0, Ob.i)(3, Xb.Zero), Ab.Matrix = (0, Ob.i)(8, pb.Identity);
    const lb = pb.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let Kb = !1;

    function Wb() {
      Kb || (Kb = !0, Object.defineProperties(Hb.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(wb.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Zb.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Xb.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(pb.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, Sb.f)("BABYLON.Vector2", Hb), (0, Sb.f)("BABYLON.Vector3", wb), (0, Sb.f)("BABYLON.Vector4", Zb), (0, Sb.f)("BABYLON.Matrix", pb))
    }
  },
  36753: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ub
    });
    const Bb = "undefined" !== typeof WeakRef;
    class Ob {
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 ? arguments[2] : void 0,
          Bb = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(bb, ub, hb, Bb)
      }
      initialize(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          hb = arguments.length > 2 ? arguments[2] : void 0,
          Bb = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = bb, this.skipNextObservers = ub, this.target = hb, this.currentTarget = Bb, this
      }
    }
    class Gb {
      constructor(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = bb, this.mask = ub, this.scope = hb, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(bb)
      }
    }
    class Ub {
      static FromPromise(bb, ub) {
        const hb = new Ub;
        return bb.then((bb => {
          hb.notifyObservers(bb)
        })).catch((bb => {
          if (!ub) throw bb;
          ub.notifyObservers(bb)
        })), hb
      }
      get observers() {
        return this._observers
      }
      constructor(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = ub, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Ob(0), bb && (this._onObserverAdded = bb)
      }
      add(bb) {
        let ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          hb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!bb) return null;
        const Ob = new Gb(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Ob.unregisterOnNextCall = hb, ub ? this._observers.unshift(Ob) : this._observers.push(Ob), this._onObserverAdded && this._onObserverAdded(Ob), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Ob, this._lastNotifiedValue);
        const Ub = Bb ? new WeakRef(this) : {
          deref: () => this
        };
        return Ob._remove = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const ub = Ub.deref();
          ub && (bb ? ub.remove(Ob) : ub._remove(Ob))
        }, Ob
      }
      addOnce(bb) {
        return this.add(bb, void 0, void 0, void 0, !0)
      }
      remove(bb) {
        if (!bb) return !1;
        bb._remove = null;
        return -1 !== this._observers.indexOf(bb) && (this._deferUnregister(bb), !0)
      }
      removeCallback(bb, ub) {
        for (let hb = 0; hb < this._observers.length; hb++) {
          const Bb = this._observers[hb];
          if (!Bb._willBeUnregistered && (Bb.callback === bb && (!ub || ub === Bb.scope))) return this._deferUnregister(Bb), !0
        }
        return !1
      }
      _deferUnregister(bb) {
        bb._willBeUnregistered || (this._numObserversMarkedAsDeleted++, bb.unregisterOnNextCall = !1, bb._willBeUnregistered = !0, setTimeout((() => {
          this._remove(bb)
        }), 0))
      }
      _remove(bb) {
        let ub = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!bb) return !1;
        const hb = this._observers.indexOf(bb);
        return -1 !== hb && (ub && this._numObserversMarkedAsDeleted--, this._observers.splice(hb, 1), !0)
      }
      makeObserverTopPriority(bb) {
        this._remove(bb, !1), this._observers.unshift(bb)
      }
      makeObserverBottomPriority(bb) {
        this._remove(bb, !1), this._observers.push(bb)
      }
      notifyObservers(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          hb = arguments.length > 2 ? arguments[2] : void 0,
          Bb = arguments.length > 3 ? arguments[3] : void 0,
          Ob = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = bb), !this._observers.length) return !0;
        const Gb = this._eventState;
        Gb.mask = ub, Gb.target = hb, Gb.currentTarget = Bb, Gb.skipNextObservers = !1, Gb.lastReturnValue = bb, Gb.userInfo = Ob;
        for (const Ub of this._observers)
          if (!Ub._willBeUnregistered && (Ub.mask & ub && (Ub.unregisterOnNextCall && this._deferUnregister(Ub), Ub.scope ? Gb.lastReturnValue = Ub.callback.apply(Ub.scope, [bb, Gb]) : Gb.lastReturnValue = Ub.callback(bb, Gb)), Gb.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(bb, ub) {
        let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = ub), bb._willBeUnregistered) return;
        const Bb = this._eventState;
        Bb.mask = hb, Bb.skipNextObservers = !1, bb.unregisterOnNextCall && this._deferUnregister(bb), bb.callback(ub, Bb)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const bb = this._observers.pop();
          bb && (bb._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const bb = new Ub;
        return bb._observers = this._observers.slice(0), bb
      }
      hasSpecificMask() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const ub of this._observers)
          if (ub.mask & bb || ub.mask === bb) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);