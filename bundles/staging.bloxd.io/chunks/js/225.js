export const id = 225;
export const ids = [225];
export const modules = {
  36425: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb
    });
    var Ab = Ub(36431);
    class Mb {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Mb.Instances = [], Mb.OnEnginesDisposedObservable = new Ab.b, Mb._LastCreatedScene = null, Mb.UseFallbackTexture = !0, Mb.FallbackTexture = ""
  },
  36418: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab
    });
    class Ab {
      static SetMatrixPrecision(bb) {
        if (Ab.MatrixTrackPrecisionChange = !1, bb && !Ab.MatrixUse64Bits && Ab.MatrixTrackedMatrices)
          for (let ab = 0; ab < Ab.MatrixTrackedMatrices.length; ++ab) {
            const bb = Ab.MatrixTrackedMatrices[ab],
              Ub = bb._m;
            bb._m = new Array(16);
            for (let ab = 0; ab < 16; ++ab) bb._m[ab] = Ub[ab]
          }
        Ab.MatrixUse64Bits = bb, Ab.MatrixCurrentType = Ab.MatrixUse64Bits ? Array : Float32Array, Ab.MatrixTrackedMatrices = null
      }
    }
    Ab.MatrixUse64Bits = !1, Ab.MatrixTrackPrecisionChange = !0, Ab.MatrixCurrentType = Float32Array, Ab.MatrixTrackedMatrices = []
  },
  36438: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Yb,
      d: () => eb,
      h: () => Bb,
      j: () => Ab,
      l: () => Tb,
      n: () => Eb
    });
    class Ab {}

    function Mb(bb) {
      bb.updateFlag = Ab._UpdateFlagSeed++
    }

    function Tb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Mb = bb.qUb(),
        Tb = ab.qUb(),
        Eb = Mb[0],
        Yb = Mb[1],
        Bb = Mb[2],
        eb = Mb[3],
        vb = Mb[4],
        Lb = Mb[5],
        Pb = Mb[6],
        Xb = Mb[7],
        jb = Mb[8],
        Rb = Mb[9],
        kb = Mb[10],
        yb = Mb[11],
        Zb = Mb[12],
        Db = Mb[13],
        zb = Mb[14],
        xb = Mb[15],
        ib = Tb[0],
        fb = Tb[1],
        mb = Tb[2],
        pb = Tb[3],
        Nb = Tb[4],
        Wb = Tb[5],
        Hb = Tb[6],
        Ib = Tb[7],
        db = Tb[8],
        Fb = Tb[9],
        hb = Tb[10],
        Gb = Tb[11],
        Qb = Tb[12],
        qb = Tb[13],
        ub = Tb[14],
        rb = Tb[15];
      Ub[Ab] = Eb * ib + Yb * Nb + Bb * db + eb * Qb, Ub[Ab + 1] = Eb * fb + Yb * Wb + Bb * Fb + eb * qb, Ub[Ab + 2] = Eb * mb + Yb * Hb + Bb * hb + eb * ub, Ub[Ab + 3] = Eb * pb + Yb * Ib + Bb * Gb + eb * rb, Ub[Ab + 4] = vb * ib + Lb * Nb + Pb * db + Xb * Qb, Ub[Ab + 5] = vb * fb + Lb * Wb + Pb * Fb + Xb * qb, Ub[Ab + 6] = vb * mb + Lb * Hb + Pb * hb + Xb * ub, Ub[Ab + 7] = vb * pb + Lb * Ib + Pb * Gb + Xb * rb, Ub[Ab + 8] = jb * ib + Rb * Nb + kb * db + yb * Qb, Ub[Ab + 9] = jb * fb + Rb * Wb + kb * Fb + yb * qb, Ub[Ab + 10] = jb * mb + Rb * Hb + kb * hb + yb * ub, Ub[Ab + 11] = jb * pb + Rb * Ib + kb * Gb + yb * rb, Ub[Ab + 12] = Zb * ib + Db * Nb + zb * db + xb * Qb, Ub[Ab + 13] = Zb * fb + Db * Wb + zb * Fb + xb * qb, Ub[Ab + 14] = Zb * mb + Db * Hb + zb * hb + xb * ub, Ub[Ab + 15] = Zb * pb + Db * Ib + zb * Gb + xb * rb
    }

    function Eb(bb, ab, Ub) {
      let Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Tb(bb, ab, Ub.qUb(), Ab), Mb(Ub)
    }

    function Yb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Ab = bb.qUb();
      ab[Ub] = Ab[0], ab[Ub + 1] = Ab[1], ab[Ub + 2] = Ab[2], ab[Ub + 3] = Ab[3], ab[Ub + 4] = Ab[4], ab[Ub + 5] = Ab[5], ab[Ub + 6] = Ab[6], ab[Ub + 7] = Ab[7], ab[Ub + 8] = Ab[8], ab[Ub + 9] = Ab[9], ab[Ub + 10] = Ab[10], ab[Ub + 11] = Ab[11], ab[Ub + 12] = Ab[12], ab[Ub + 13] = Ab[13], ab[Ub + 14] = Ab[14], ab[Ub + 15] = Ab[15]
    }

    function Bb(bb, ab) {
      const Ub = eb(bb, ab.qUb());
      return Ub && Mb(ab), Ub
    }

    function eb(bb, ab) {
      const Ub = bb.qUb(),
        Ab = Ub[0],
        Mb = Ub[1],
        Tb = Ub[2],
        Eb = Ub[3],
        Yb = Ub[4],
        Bb = Ub[5],
        eb = Ub[6],
        vb = Ub[7],
        Lb = Ub[8],
        Pb = Ub[9],
        Xb = Ub[10],
        jb = Ub[11],
        Rb = Ub[12],
        kb = Ub[13],
        yb = Ub[14],
        Zb = Ub[15],
        Db = Xb * Zb - yb * jb,
        zb = Pb * Zb - kb * jb,
        xb = Pb * yb - kb * Xb,
        ib = Lb * Zb - Rb * jb,
        fb = Lb * yb - Xb * Rb,
        mb = Lb * kb - Rb * Pb,
        pb = +(Bb * Db - eb * zb + vb * xb),
        Nb = -(Yb * Db - eb * ib + vb * fb),
        Wb = +(Yb * zb - Bb * ib + vb * mb),
        Hb = -(Yb * xb - Bb * fb + eb * mb),
        Ib = Ab * pb + Mb * Nb + Tb * Wb + Eb * Hb;
      if (0 === Ib) return !1;
      const db = 1 / Ib,
        Fb = eb * Zb - yb * vb,
        hb = Bb * Zb - kb * vb,
        Gb = Bb * yb - kb * eb,
        Qb = Yb * Zb - Rb * vb,
        qb = Yb * yb - Rb * eb,
        ub = Yb * kb - Rb * Bb,
        rb = eb * jb - Xb * vb,
        Kb = Bb * jb - Pb * vb,
        ob = Bb * Xb - Pb * eb,
        lb = Yb * jb - Lb * vb,
        tb = Yb * Xb - Lb * eb,
        wb = Yb * Pb - Lb * Bb,
        sb = -(Mb * Db - Tb * zb + Eb * xb),
        gb = +(Ab * Db - Tb * ib + Eb * fb),
        Cb = -(Ab * zb - Mb * ib + Eb * mb),
        Vb = +(Ab * xb - Mb * fb + Tb * mb),
        Ob = +(Mb * Fb - Tb * hb + Eb * Gb),
        cb = -(Ab * Fb - Tb * Qb + Eb * qb),
        Jb = +(Ab * hb - Mb * Qb + Eb * ub),
        nb = -(Ab * Gb - Mb * qb + Tb * ub),
        Sb = -(Mb * rb - Tb * Kb + Eb * ob),
        ba = +(Ab * rb - Tb * lb + Eb * tb),
        aa = -(Ab * Kb - Mb * lb + Eb * wb),
        Ua = +(Ab * ob - Mb * tb + Tb * wb);
      return ab[0] = pb * db, ab[1] = sb * db, ab[2] = Ob * db, ab[3] = Sb * db, ab[4] = Nb * db, ab[5] = gb * db, ab[6] = cb * db, ab[7] = ba * db, ab[8] = Wb * db, ab[9] = Cb * db, ab[10] = Jb * db, ab[11] = aa * db, ab[12] = Hb * db, ab[13] = Vb * db, ab[14] = nb * db, ab[15] = Ua * db, !0
    }
    Ab._UpdateFlagSeed = 0
  },
  36401: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Rb,
      e: () => jb,
      i: () => zb,
      j: () => yb,
      l: () => Lb,
      m: () => Pb,
      o: () => Xb
    });
    var Ab = Ub(36405),
      Mb = Ub(36410),
      Tb = Ub(36418),
      Eb = Ub(36425),
      Yb = Ub(36436),
      Bb = Ub(36438),
      eb = Ub(36447);
    const vb = bb => parseInt(bb.toString().replace(/\W/g, ""));
    class Lb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = bb, this.y = ab
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let bb = vb(this.x);
        return bb = 397 * bb ^ vb(this.y), bb
      }
      toArray(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bb[ab] = this.x, bb[ab + 1] = this.y, this
      }
      Zab(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Lb.FromArrayToRef(bb, ab, this), this
      }
      qUb() {
        return [this.x, this.y]
      }
      EUb(bb) {
        return this.x = bb.x, this.y = bb.y, this
      }
      K9(bb, ab) {
        return this.x = bb, this.y = ab, this
      }
      set(bb, ab) {
        return this.K9(bb, ab)
      }
      B3(bb) {
        return this.K9(bb, bb)
      }
      add(bb) {
        return new Lb(this.x + bb.x, this.y + bb.y)
      }
      addToRef(bb, ab) {
        return ab.x = this.x + bb.x, ab.y = this.y + bb.y, ab
      }
      addInPlace(bb) {
        return this.x += bb.x, this.y += bb.y, this
      }
      addInPlaceFromFloats(bb, ab) {
        return this.x += bb, this.y += ab, this
      }
      addVector3(bb) {
        return new Lb(this.x + bb.x, this.y + bb.y)
      }
      subtract(bb) {
        return new Lb(this.x - bb.x, this.y - bb.y)
      }
      subtractToRef(bb, ab) {
        return ab.x = this.x - bb.x, ab.y = this.y - bb.y, ab
      }
      MAb(bb) {
        return this.x -= bb.x, this.y -= bb.y, this
      }
      multiplyInPlace(bb) {
        return this.x *= bb.x, this.y *= bb.y, this
      }
      multiply(bb) {
        return new Lb(this.x * bb.x, this.y * bb.y)
      }
      multiplyToRef(bb, ab) {
        return ab.x = this.x * bb.x, ab.y = this.y * bb.y, ab
      }
      multiplyByFloats(bb, ab) {
        return new Lb(this.x * bb, this.y * ab)
      }
      divide(bb) {
        return new Lb(this.x / bb.x, this.y / bb.y)
      }
      divideToRef(bb, ab) {
        return ab.x = this.x / bb.x, ab.y = this.y / bb.y, ab
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
      minimizeInPlaceFromFloats(bb, ab) {
        return this.x = Math.min(bb, this.x), this.y = Math.min(ab, this.y), this
      }
      maximizeInPlaceFromFloats(bb, ab) {
        return this.x = Math.max(bb, this.x), this.y = Math.max(ab, this.y), this
      }
      subtractFromFloats(bb, ab) {
        return new Lb(this.x - bb, this.y - ab)
      }
      subtractFromFloatsToRef(bb, ab, Ub) {
        return Ub.x = this.x - bb, Ub.y = this.y - ab, Ub
      }
      pa() {
        return new Lb(-this.x, -this.y)
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
        return new Lb(this.x * bb, this.y * bb)
      }
      scaleToRef(bb, ab) {
        return ab.x = this.x * bb, ab.y = this.y * bb, ab
      }
      scaleAndAddToRef(bb, ab) {
        return ab.x += this.x * bb, ab.y += this.y * bb, ab
      }
      equals(bb) {
        return bb && this.x === bb.x && this.y === bb.y
      }
      equalsWithEpsilon(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ab.e;
        return bb && (0, Yb.WithinEpsilon)(this.x, bb.x, ab) && (0, Yb.WithinEpsilon)(this.y, bb.y, ab)
      }
      eEb(bb, ab) {
        return this.x === bb && this.y === ab
      }
      floor() {
        return new Lb(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(bb) {
        return bb.x = Math.floor(this.x), bb.y = Math.floor(this.y), bb
      }
      fract() {
        return new Lb(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(bb) {
        return bb.x = this.x - Math.floor(this.x), bb.y = this.y - Math.floor(this.y), bb
      }
      rotate(bb) {
        return this.rotateToRef(bb, new Lb)
      }
      rotateToRef(bb, ab) {
        const Ub = Math.cos(bb),
          Ab = Math.sin(bb);
        return ab.x = Ub * this.x - Ab * this.y, ab.y = Ab * this.x + Ub * this.y, ab
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
        const bb = new Lb;
        return this.normalizeToRef(bb), bb
      }
      normalizeToRef(bb) {
        const ab = this.length();
        return 0 === ab || 1 === ab ? (bb.x = this.x, bb.y = this.y, bb) : this.scaleToRef(1 / ab, bb)
      }
      clone() {
        return new Lb(this.x, this.y)
      }
      dot(bb) {
        return this.x * bb.x + this.y * bb.y
      }
      static Zero() {
        return new Lb(0, 0)
      }
      static One() {
        return new Lb(1, 1)
      }
      static Random() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Lb((0, Yb.RandomRange)(bb, ab), (0, Yb.RandomRange)(bb, ab))
      }
      static RandomToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).K9((0, Yb.RandomRange)(bb, ab), (0, Yb.RandomRange)(bb, ab))
      }
      static get ZeroReadOnly() {
        return Lb._ZeroReadOnly
      }
      static FromArray(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Lb(bb[ab], bb[ab + 1])
      }
      static FromArrayToRef(bb, ab, Ub) {
        return Ub.x = bb[ab], Ub.y = bb[ab + 1], Ub
      }
      static FromFloatsToRef(bb, ab, Ub) {
        return Ub.K9(bb, ab), Ub
      }
      static CatmullRom(bb, ab, Ub, Ab, Mb) {
        const Tb = Mb * Mb,
          Eb = Mb * Tb,
          Yb = .5 * (2 * ab.x + (-bb.x + Ub.x) * Mb + (2 * bb.x - 5 * ab.x + 4 * Ub.x - Ab.x) * Tb + (-bb.x + 3 * ab.x - 3 * Ub.x + Ab.x) * Eb),
          Bb = .5 * (2 * ab.y + (-bb.y + Ub.y) * Mb + (2 * bb.y - 5 * ab.y + 4 * Ub.y - Ab.y) * Tb + (-bb.y + 3 * ab.y - 3 * Ub.y + Ab.y) * Eb);
        return new Lb(Yb, Bb)
      }
      static ClampToRef(bb, ab, Ub, Ab) {
        return Ab.x = (0, Yb.Clamp)(bb.x, ab.x, Ub.x), Ab.y = (0, Yb.Clamp)(bb.y, ab.y, Ub.y), Ab
      }
      static Clamp(bb, ab, Ub) {
        const Ab = (0, Yb.Clamp)(bb.x, ab.x, Ub.x),
          Mb = (0, Yb.Clamp)(bb.y, ab.y, Ub.y);
        return new Lb(Ab, Mb)
      }
      static Hermite(bb, ab, Ub, Ab, Mb) {
        const Tb = Mb * Mb,
          Eb = Mb * Tb,
          Yb = 2 * Eb - 3 * Tb + 1,
          Bb = -2 * Eb + 3 * Tb,
          eb = Eb - 2 * Tb + Mb,
          vb = Eb - Tb,
          Pb = bb.x * Yb + Ub.x * Bb + ab.x * eb + Ab.x * vb,
          Xb = bb.y * Yb + Ub.y * Bb + ab.y * eb + Ab.y * vb;
        return new Lb(Pb, Xb)
      }
      static Hermite1stDerivative(bb, ab, Ub, Ab, Mb) {
        return this.Hermite1stDerivativeToRef(bb, ab, Ub, Ab, Mb, new Lb)
      }
      static Hermite1stDerivativeToRef(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = Mb * Mb;
        return Tb.x = 6 * (Eb - Mb) * bb.x + (3 * Eb - 4 * Mb + 1) * ab.x + 6 * (-Eb + Mb) * Ub.x + (3 * Eb - 2 * Mb) * Ab.x, Tb.y = 6 * (Eb - Mb) * bb.y + (3 * Eb - 4 * Mb + 1) * ab.y + 6 * (-Eb + Mb) * Ub.y + (3 * Eb - 2 * Mb) * Ab.y, Tb
      }
      static Lerp(bb, ab, Ub) {
        return Lb.LerpToRef(bb, ab, Ub, new Lb)
      }
      static LerpToRef(bb, ab, Ub, Ab) {
        return Ab.x = bb.x + (ab.x - bb.x) * Ub, Ab.y = bb.y + (ab.y - bb.y) * Ub, Ab
      }
      static Dot(bb, ab) {
        return bb.x * ab.x + bb.y * ab.y
      }
      static Normalize(bb) {
        return Lb.NormalizeToRef(bb, new Lb)
      }
      static NormalizeToRef(bb, ab) {
        return bb.normalizeToRef(ab), ab
      }
      static Minimize(bb, ab) {
        const Ub = bb.x < ab.x ? bb.x : ab.x,
          Ab = bb.y < ab.y ? bb.y : ab.y;
        return new Lb(Ub, Ab)
      }
      static Maximize(bb, ab) {
        const Ub = bb.x > ab.x ? bb.x : ab.x,
          Ab = bb.y > ab.y ? bb.y : ab.y;
        return new Lb(Ub, Ab)
      }
      static Transform(bb, ab) {
        return Lb.TransformToRef(bb, ab, new Lb)
      }
      static TransformToRef(bb, ab, Ub) {
        const Ab = ab.m,
          Mb = bb.x * Ab[0] + bb.y * Ab[4] + Ab[12],
          Tb = bb.x * Ab[1] + bb.y * Ab[5] + Ab[13];
        return Ub.x = Mb, Ub.y = Tb, Ub
      }
      static PointInTriangle(bb, ab, Ub, Ab) {
        const Mb = .5 * (-Ub.y * Ab.x + ab.y * (-Ub.x + Ab.x) + ab.x * (Ub.y - Ab.y) + Ub.x * Ab.y),
          Tb = Mb < 0 ? -1 : 1,
          Eb = (ab.y * Ab.x - ab.x * Ab.y + (Ab.y - ab.y) * bb.x + (ab.x - Ab.x) * bb.y) * Tb,
          Yb = (ab.x * Ub.y - ab.y * Ub.x + (ab.y - Ub.y) * bb.x + (Ub.x - ab.x) * bb.y) * Tb;
        return Eb > 0 && Yb > 0 && Eb + Yb < 2 * Mb * Tb
      }
      static Distance(bb, ab) {
        return Math.sqrt(Lb.DistanceSquared(bb, ab))
      }
      static DistanceSquared(bb, ab) {
        const Ub = bb.x - ab.x,
          Ab = bb.y - ab.y;
        return Ub * Ub + Ab * Ab
      }
      static Center(bb, ab) {
        return Lb.CenterToRef(bb, ab, new Lb)
      }
      static CenterToRef(bb, ab, Ub) {
        return Ub.K9((bb.x + ab.x) / 2, (bb.y + ab.y) / 2)
      }
      static DistanceOfPointFromSegment(bb, ab, Ub) {
        const Ab = Lb.DistanceSquared(ab, Ub);
        if (0 === Ab) return Lb.Distance(bb, ab);
        const Mb = Ub.subtract(ab),
          Tb = Math.max(0, Math.min(1, Lb.Dot(bb.subtract(ab), Mb) / Ab)),
          Eb = ab.add(Mb.multiplyByFloats(Tb, Tb));
        return Lb.Distance(bb, Eb)
      }
    }
    Lb._V8PerformanceHack = new Lb(.5, .5), Lb._ZeroReadOnly = Lb.Zero();
    class Pb {
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
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = bb, this._y = ab, this._z = Ub
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "Pj"
      }
      getHashCode() {
        let bb = vb(this._x);
        return bb = 397 * bb ^ vb(this._y), bb = 397 * bb ^ vb(this._z), bb
      }
      qUb() {
        return [this._x, this._y, this._z]
      }
      toArray(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bb[ab] = this._x, bb[ab + 1] = this._y, bb[ab + 2] = this._z, this
      }
      Zab(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Pb.FromArrayToRef(bb, ab, this), this
      }
      toQuaternion() {
        return jb.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(bb) {
        return this._x += bb._x, this._y += bb._y, this._z += bb._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(bb, ab, Ub) {
        return this._x += bb, this._y += ab, this._z += Ub, this._isDirty = !0, this
      }
      add(bb) {
        return new Pb(this._x + bb._x, this._y + bb._y, this._z + bb._z)
      }
      addToRef(bb, ab) {
        return ab._x = this._x + bb._x, ab._y = this._y + bb._y, ab._z = this._z + bb._z, ab._isDirty = !0, ab
      }
      MAb(bb) {
        return this._x -= bb._x, this._y -= bb._y, this._z -= bb._z, this._isDirty = !0, this
      }
      subtract(bb) {
        return new Pb(this._x - bb._x, this._y - bb._y, this._z - bb._z)
      }
      subtractToRef(bb, ab) {
        return this.subtractFromFloatsToRef(bb._x, bb._y, bb._z, ab)
      }
      subtractFromFloats(bb, ab, Ub) {
        return new Pb(this._x - bb, this._y - ab, this._z - Ub)
      }
      subtractFromFloatsToRef(bb, ab, Ub, Ab) {
        return Ab._x = this._x - bb, Ab._y = this._y - ab, Ab._z = this._z - Ub, Ab._isDirty = !0, Ab
      }
      pa() {
        return new Pb(-this._x, -this._y, -this._z)
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
        return new Pb(this._x * bb, this._y * bb, this._z * bb)
      }
      scaleToRef(bb, ab) {
        return ab._x = this._x * bb, ab._y = this._y * bb, ab._z = this._z * bb, ab._isDirty = !0, ab
      }
      getNormalToRef(bb) {
        const ab = this.length();
        let Ub = Math.acos(this._y / ab);
        const Ab = Math.atan2(this._z, this._x);
        Ub > Math.PI / 2 ? Ub -= Math.PI / 2 : Ub += Math.PI / 2;
        const Mb = ab * Math.sin(Ub) * Math.cos(Ab),
          Tb = ab * Math.cos(Ub),
          Eb = ab * Math.sin(Ub) * Math.sin(Ab);
        return bb.set(Mb, Tb, Eb), bb
      }
      applyRotationQuaternionToRef(bb, ab) {
        const Ub = this._x,
          Ab = this._y,
          Mb = this._z,
          Tb = bb._x,
          Eb = bb._y,
          Yb = bb._z,
          Bb = bb._w,
          eb = 2 * (Eb * Mb - Yb * Ab),
          vb = 2 * (Yb * Ub - Tb * Mb),
          Lb = 2 * (Tb * Ab - Eb * Ub);
        return ab._x = Ub + Bb * eb + Eb * Lb - Yb * vb, ab._y = Ab + Bb * vb + Yb * eb - Tb * Lb, ab._z = Mb + Bb * Lb + Tb * vb - Eb * eb, ab._isDirty = !0, ab
      }
      applyRotationQuaternionInPlace(bb) {
        return this.applyRotationQuaternionToRef(bb, this)
      }
      applyRotationQuaternion(bb) {
        return this.applyRotationQuaternionToRef(bb, new Pb)
      }
      scaleAndAddToRef(bb, ab) {
        return ab._x += this._x * bb, ab._y += this._y * bb, ab._z += this._z * bb, ab._isDirty = !0, ab
      }
      projectOnPlane(bb, ab) {
        return this.projectOnPlaneToRef(bb, ab, new Pb)
      }
      projectOnPlaneToRef(bb, ab, Ub) {
        const Ab = bb.normal,
          Mb = bb.d,
          Tb = kb.Pj[0];
        this.subtractToRef(ab, Tb), Tb.normalize();
        const Eb = Pb.Dot(Tb, Ab);
        if (Math.abs(Eb) < 1e-10) Ub.B3(1 / 0);
        else {
          const bb = -(Pb.Dot(ab, Ab) + Mb) / Eb,
            Yb = Tb.scaleInPlace(bb);
          ab.addToRef(Yb, Ub)
        }
        return Ub
      }
      equals(bb) {
        return bb && this._x === bb._x && this._y === bb._y && this._z === bb._z
      }
      equalsWithEpsilon(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ab.e;
        return bb && (0, Yb.WithinEpsilon)(this._x, bb._x, ab) && (0, Yb.WithinEpsilon)(this._y, bb._y, ab) && (0, Yb.WithinEpsilon)(this._z, bb._z, ab)
      }
      eEb(bb, ab, Ub) {
        return this._x === bb && this._y === ab && this._z === Ub
      }
      multiplyInPlace(bb) {
        return this._x *= bb._x, this._y *= bb._y, this._z *= bb._z, this._isDirty = !0, this
      }
      multiply(bb) {
        return this.multiplyByFloats(bb._x, bb._y, bb._z)
      }
      multiplyToRef(bb, ab) {
        return ab._x = this._x * bb._x, ab._y = this._y * bb._y, ab._z = this._z * bb._z, ab._isDirty = !0, ab
      }
      multiplyByFloats(bb, ab, Ub) {
        return new Pb(this._x * bb, this._y * ab, this._z * Ub)
      }
      divide(bb) {
        return new Pb(this._x / bb._x, this._y / bb._y, this._z / bb._z)
      }
      divideToRef(bb, ab) {
        return ab._x = this._x / bb._x, ab._y = this._y / bb._y, ab._z = this._z / bb._z, ab._isDirty = !0, ab
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
      minimizeInPlaceFromFloats(bb, ab, Ub) {
        return bb < this._x && (this.x = bb), ab < this._y && (this.y = ab), Ub < this._z && (this.z = Ub), this
      }
      maximizeInPlaceFromFloats(bb, ab, Ub) {
        return bb > this._x && (this.x = bb), ab > this._y && (this.y = ab), Ub > this._z && (this.z = Ub), this
      }
      isNonUniformWithinEpsilon(bb) {
        const ab = Math.abs(this._x),
          Ub = Math.abs(this._y);
        if (!(0, Yb.WithinEpsilon)(ab, Ub, bb)) return !0;
        const Ab = Math.abs(this._z);
        return !(0, Yb.WithinEpsilon)(ab, Ab, bb) || !(0, Yb.WithinEpsilon)(Ub, Ab, bb)
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
        return new Pb(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(bb) {
        return bb._x = this._x - Math.floor(this._x), bb._y = this._y - Math.floor(this._y), bb._z = this._z - Math.floor(this._z), bb._isDirty = !0, bb
      }
      fract() {
        return new Pb(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
        const ab = kb.Pj[0].EUb(this);
        return this.x = ab[bb[0]], this.y = ab[bb[1]], this.z = ab[bb[2]], this
      }
      rotateByQuaternionToRef(bb, ab) {
        return bb.toRotationMatrix(kb.Matrix[0]), Pb.TransformCoordinatesToRef(this, kb.Matrix[0], ab), ab
      }
      rotateByQuaternionAroundPointToRef(bb, ab, Ub) {
        return this.subtractToRef(ab, kb.Pj[0]), kb.Pj[0].rotateByQuaternionToRef(bb, kb.Pj[0]), ab.addToRef(kb.Pj[0], Ub), Ub
      }
      cross(bb) {
        return Pb.CrossToRef(this, bb, new Pb)
      }
      normalizeFromLength(bb) {
        return 0 === bb || 1 === bb ? this : this.scaleInPlace(1 / bb)
      }
      normalizeToNew() {
        return this.normalizeToRef(new Pb)
      }
      normalizeToRef(bb) {
        const ab = this.length();
        return 0 === ab || 1 === ab ? (bb._x = this._x, bb._y = this._y, bb._z = this._z, bb._isDirty = !0, bb) : this.scaleToRef(1 / ab, bb)
      }
      clone() {
        return new Pb(this._x, this._y, this._z)
      }
      EUb(bb) {
        return this.K9(bb._x, bb._y, bb._z)
      }
      K9(bb, ab, Ub) {
        return this._x = bb, this._y = ab, this._z = Ub, this._isDirty = !0, this
      }
      set(bb, ab, Ub) {
        return this.K9(bb, ab, Ub)
      }
      B3(bb) {
        return this._x = this._y = this._z = bb, this._isDirty = !0, this
      }
      static GetClipFactor(bb, ab, Ub, Ab) {
        const Mb = Pb.Dot(bb, Ub);
        return (Mb - Ab) / (Mb - Pb.Dot(ab, Ub))
      }
      static GetAngleBetweenVectors(bb, ab, Ub) {
        const Ab = bb.normalizeToRef(kb.Pj[1]),
          Mb = ab.normalizeToRef(kb.Pj[2]);
        let Tb = Pb.Dot(Ab, Mb);
        Tb = (0, Yb.Clamp)(Tb, -1, 1);
        const Eb = Math.acos(Tb),
          Bb = kb.Pj[3];
        return Pb.CrossToRef(Ab, Mb, Bb), Pb.Dot(Bb, Ub) > 0 ? isNaN(Eb) ? 0 : Eb : isNaN(Eb) ? -Math.PI : -Math.acos(Tb)
      }
      static GetAngleBetweenVectorsOnPlane(bb, ab, Ub) {
        kb.Pj[0].EUb(bb);
        const Ab = kb.Pj[0];
        kb.Pj[1].EUb(ab);
        const Mb = kb.Pj[1];
        kb.Pj[2].EUb(Ub);
        const Tb = kb.Pj[2],
          Eb = kb.Pj[3],
          Bb = kb.Pj[4];
        Ab.normalize(), Mb.normalize(), Tb.normalize(), Pb.CrossToRef(Tb, Ab, Eb), Pb.CrossToRef(Eb, Tb, Bb);
        const eb = Math.atan2(Pb.Dot(Mb, Eb), Pb.Dot(Mb, Bb));
        return (0, Yb.NormalizeRadians)(eb)
      }
      static PitchYawRollToMoveBetweenPointsToRef(bb, ab, Ub) {
        const Ab = yb.Pj[0];
        return ab.subtractToRef(bb, Ab), Ub._y = Math.atan2(Ab.x, Ab.z) || 0, Ub._x = Math.atan2(Math.sqrt(Ab.x ** 2 + Ab.z ** 2), Ab.y) || 0, Ub._z = 0, Ub._isDirty = !0, Ub
      }
      static PitchYawRollToMoveBetweenPoints(bb, ab) {
        const Ub = Pb.Zero();
        return Pb.PitchYawRollToMoveBetweenPointsToRef(bb, ab, Ub)
      }
      static SlerpToRef(bb, ab, Ub, Mb) {
        Ub = (0, Yb.Clamp)(Ub, 0, 1);
        const Tb = kb.Pj[0],
          Eb = kb.Pj[1];
        Tb.EUb(bb);
        const Bb = Tb.length();
        Tb.normalizeFromLength(Bb), Eb.EUb(ab);
        const eb = Eb.length();
        Eb.normalizeFromLength(eb);
        const vb = Pb.Dot(Tb, Eb);
        let Lb, Xb;
        if (vb < 1 - Ab.e) {
          const bb = Math.acos(vb),
            ab = 1 / Math.sin(bb);
          Lb = Math.sin((1 - Ub) * bb) * ab, Xb = Math.sin(Ub * bb) * ab
        } else Lb = 1 - Ub, Xb = Ub;
        return Tb.scaleInPlace(Lb), Eb.scaleInPlace(Xb), Mb.EUb(Tb).addInPlace(Eb), Mb.scaleInPlace((0, Yb.Lerp)(Bb, eb, Ub)), Mb
      }
      static SmoothToRef(bb, ab, Ub, Ab, Mb) {
        return Pb.SlerpToRef(bb, ab, 0 === Ab ? 1 : Ub / Ab, Mb), Mb
      }
      static FromArray(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Pb(bb[ab], bb[ab + 1], bb[ab + 2])
      }
      static FromFloatArray(bb, ab) {
        return Pb.FromArray(bb, ab)
      }
      static FromArrayToRef(bb, ab, Ub) {
        return Ub._x = bb[ab], Ub._y = bb[ab + 1], Ub._z = bb[ab + 2], Ub._isDirty = !0, Ub
      }
      static FromFloatArrayToRef(bb, ab, Ub) {
        return Pb.FromArrayToRef(bb, ab, Ub)
      }
      static FromFloatsToRef(bb, ab, Ub, Ab) {
        return Ab.K9(bb, ab, Ub), Ab
      }
      static Zero() {
        return new Pb(0, 0, 0)
      }
      static One() {
        return new Pb(1, 1, 1)
      }
      static Up() {
        return new Pb(0, 1, 0)
      }
      static get UpReadOnly() {
        return Pb._UpReadOnly
      }
      static get DownReadOnly() {
        return Pb._DownReadOnly
      }
      static get RightReadOnly() {
        return Pb._RightReadOnly
      }
      static get LeftReadOnly() {
        return Pb._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return Pb._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return Pb._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return Pb._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return Pb._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return Pb._ZeroReadOnly
      }
      static get OneReadOnly() {
        return Pb._OneReadOnly
      }
      static Down() {
        return new Pb(0, -1, 0)
      }
      static Forward() {
        return new Pb(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new Pb(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new Pb(1, 0, 0)
      }
      static Left() {
        return new Pb(-1, 0, 0)
      }
      static Random() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Pb((0, Yb.RandomRange)(bb, ab), (0, Yb.RandomRange)(bb, ab), (0, Yb.RandomRange)(bb, ab))
      }
      static RandomToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).K9((0, Yb.RandomRange)(bb, ab), (0, Yb.RandomRange)(bb, ab), (0, Yb.RandomRange)(bb, ab))
      }
      static TransformCoordinates(bb, ab) {
        const Ub = Pb.Zero();
        return Pb.TransformCoordinatesToRef(bb, ab, Ub), Ub
      }
      static TransformCoordinatesToRef(bb, ab, Ub) {
        return Pb.TransformCoordinatesFromFloatsToRef(bb._x, bb._y, bb._z, ab, Ub), Ub
      }
      static TransformCoordinatesFromFloatsToRef(bb, ab, Ub, Ab, Mb) {
        const Tb = Ab.m,
          Eb = bb * Tb[0] + ab * Tb[4] + Ub * Tb[8] + Tb[12],
          Yb = bb * Tb[1] + ab * Tb[5] + Ub * Tb[9] + Tb[13],
          Bb = bb * Tb[2] + ab * Tb[6] + Ub * Tb[10] + Tb[14],
          eb = 1 / (bb * Tb[3] + ab * Tb[7] + Ub * Tb[11] + Tb[15]);
        return Mb._x = Eb * eb, Mb._y = Yb * eb, Mb._z = Bb * eb, Mb._isDirty = !0, Mb
      }
      static TransformNormal(bb, ab) {
        const Ub = Pb.Zero();
        return Pb.TransformNormalToRef(bb, ab, Ub), Ub
      }
      static TransformNormalToRef(bb, ab, Ub) {
        return this.TransformNormalFromFloatsToRef(bb._x, bb._y, bb._z, ab, Ub), Ub
      }
      static TransformNormalFromFloatsToRef(bb, ab, Ub, Ab, Mb) {
        const Tb = Ab.m;
        return Mb._x = bb * Tb[0] + ab * Tb[4] + Ub * Tb[8], Mb._y = bb * Tb[1] + ab * Tb[5] + Ub * Tb[9], Mb._z = bb * Tb[2] + ab * Tb[6] + Ub * Tb[10], Mb._isDirty = !0, Mb
      }
      static CatmullRom(bb, ab, Ub, Ab, Mb) {
        const Tb = Mb * Mb,
          Eb = Mb * Tb,
          Yb = .5 * (2 * ab._x + (-bb._x + Ub._x) * Mb + (2 * bb._x - 5 * ab._x + 4 * Ub._x - Ab._x) * Tb + (-bb._x + 3 * ab._x - 3 * Ub._x + Ab._x) * Eb),
          Bb = .5 * (2 * ab._y + (-bb._y + Ub._y) * Mb + (2 * bb._y - 5 * ab._y + 4 * Ub._y - Ab._y) * Tb + (-bb._y + 3 * ab._y - 3 * Ub._y + Ab._y) * Eb),
          eb = .5 * (2 * ab._z + (-bb._z + Ub._z) * Mb + (2 * bb._z - 5 * ab._z + 4 * Ub._z - Ab._z) * Tb + (-bb._z + 3 * ab._z - 3 * Ub._z + Ab._z) * Eb);
        return new Pb(Yb, Bb, eb)
      }
      static Clamp(bb, ab, Ub) {
        const Ab = new Pb;
        return Pb.ClampToRef(bb, ab, Ub, Ab), Ab
      }
      static ClampToRef(bb, ab, Ub, Ab) {
        let Mb = bb._x;
        Mb = Mb > Ub._x ? Ub._x : Mb, Mb = Mb < ab._x ? ab._x : Mb;
        let Tb = bb._y;
        Tb = Tb > Ub._y ? Ub._y : Tb, Tb = Tb < ab._y ? ab._y : Tb;
        let Eb = bb._z;
        return Eb = Eb > Ub._z ? Ub._z : Eb, Eb = Eb < ab._z ? ab._z : Eb, Ab.K9(Mb, Tb, Eb), Ab
      }
      static CheckExtends(bb, ab, Ub) {
        ab.minimizeInPlace(bb), Ub.maximizeInPlace(bb)
      }
      static Hermite(bb, ab, Ub, Ab, Mb) {
        const Tb = Mb * Mb,
          Eb = Mb * Tb,
          Yb = 2 * Eb - 3 * Tb + 1,
          Bb = -2 * Eb + 3 * Tb,
          eb = Eb - 2 * Tb + Mb,
          vb = Eb - Tb,
          Lb = bb._x * Yb + Ub._x * Bb + ab._x * eb + Ab._x * vb,
          Xb = bb._y * Yb + Ub._y * Bb + ab._y * eb + Ab._y * vb,
          jb = bb._z * Yb + Ub._z * Bb + ab._z * eb + Ab._z * vb;
        return new Pb(Lb, Xb, jb)
      }
      static Hermite1stDerivative(bb, ab, Ub, Ab, Mb) {
        const Tb = new Pb;
        return this.Hermite1stDerivativeToRef(bb, ab, Ub, Ab, Mb, Tb), Tb
      }
      static Hermite1stDerivativeToRef(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = Mb * Mb;
        return Tb._x = 6 * (Eb - Mb) * bb._x + (3 * Eb - 4 * Mb + 1) * ab._x + 6 * (-Eb + Mb) * Ub._x + (3 * Eb - 2 * Mb) * Ab._x, Tb._y = 6 * (Eb - Mb) * bb._y + (3 * Eb - 4 * Mb + 1) * ab._y + 6 * (-Eb + Mb) * Ub._y + (3 * Eb - 2 * Mb) * Ab._y, Tb._z = 6 * (Eb - Mb) * bb._z + (3 * Eb - 4 * Mb + 1) * ab._z + 6 * (-Eb + Mb) * Ub._z + (3 * Eb - 2 * Mb) * Ab._z, Tb._isDirty = !0, Tb
      }
      static Lerp(bb, ab, Ub) {
        const Ab = new Pb(0, 0, 0);
        return Pb.LerpToRef(bb, ab, Ub, Ab), Ab
      }
      static LerpToRef(bb, ab, Ub, Ab) {
        return Ab._x = bb._x + (ab._x - bb._x) * Ub, Ab._y = bb._y + (ab._y - bb._y) * Ub, Ab._z = bb._z + (ab._z - bb._z) * Ub, Ab._isDirty = !0, Ab
      }
      static Dot(bb, ab) {
        return bb._x * ab._x + bb._y * ab._y + bb._z * ab._z
      }
      dot(bb) {
        return this._x * bb._x + this._y * bb._y + this._z * bb._z
      }
      static Cross(bb, ab) {
        const Ub = new Pb;
        return Pb.CrossToRef(bb, ab, Ub), Ub
      }
      static CrossToRef(bb, ab, Ub) {
        const Ab = bb._y * ab._z - bb._z * ab._y,
          Mb = bb._z * ab._x - bb._x * ab._z,
          Tb = bb._x * ab._y - bb._y * ab._x;
        return Ub.K9(Ab, Mb, Tb), Ub
      }
      static Normalize(bb) {
        const ab = Pb.Zero();
        return Pb.NormalizeToRef(bb, ab), ab
      }
      static NormalizeToRef(bb, ab) {
        return bb.normalizeToRef(ab), ab
      }
      static Project(bb, ab, Ub, Ab) {
        const Mb = new Pb;
        return Pb.ProjectToRef(bb, ab, Ub, Ab, Mb), Mb
      }
      static ProjectToRef(bb, ab, Ub, Ab, Mb) {
        const Tb = Ab.width,
          Yb = Ab.height,
          Bb = Ab.x,
          eb = Ab.y,
          vb = kb.Matrix[1],
          Lb = Eb.d.LastCreatedEngine?.isNDCHalfZRange,
          Xb = Lb ? 1 : .5,
          jb = Lb ? 0 : .5;
        Rb.FromValuesToRef(Tb / 2, 0, 0, 0, 0, -Yb / 2, 0, 0, 0, 0, Xb, 0, Bb + Tb / 2, Yb / 2 + eb, jb, 1, vb);
        const yb = kb.Matrix[0];
        return ab.multiplyToRef(Ub, yb), yb.multiplyToRef(vb, yb), Pb.TransformCoordinatesToRef(bb, yb, Mb), Mb
      }
      static Reflect(bb, ab) {
        return this.ReflectToRef(bb, ab, new Pb)
      }
      static ReflectToRef(bb, ab, Ub) {
        const Ab = yb.Pj[0];
        return Ab.EUb(ab).scaleInPlace(2 * Pb.Dot(bb, ab)), Ub.EUb(bb).MAb(Ab)
      }
      static UnprojectFromTransform(bb, ab, Ub, Ab, Mb) {
        return this.Unproject(bb, ab, Ub, Ab, Mb, Rb.IdentityReadOnly)
      }
      static Unproject(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = new Pb;
        return Pb.UnprojectToRef(bb, ab, Ub, Ab, Mb, Tb, Eb), Eb
      }
      static UnprojectToRef(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        return Pb.UnprojectFloatsToRef(bb._x, bb._y, bb._z, ab, Ub, Ab, Mb, Tb, Eb), Eb
      }
      static UnprojectFloatsToRef(bb, ab, Ub, Ab, Mb, Tb, Yb, Bb, eb) {
        const vb = kb.Matrix[0];
        Tb.multiplyToRef(Yb, vb), vb.multiplyToRef(Bb, vb), vb.invert();
        const Lb = kb.Pj[0];
        return Lb.x = bb / Ab * 2 - 1, Lb.y = -(ab / Mb * 2 - 1), Eb.d.LastCreatedEngine?.isNDCHalfZRange ? Lb.z = Ub : Lb.z = 2 * Ub - 1, Pb.TransformCoordinatesToRef(Lb, vb, eb), eb
      }
      static Minimize(bb, ab) {
        const Ub = new Pb;
        return Ub.EUb(bb), Ub.minimizeInPlace(ab), Ub
      }
      static Maximize(bb, ab) {
        const Ub = new Pb;
        return Ub.EUb(bb), Ub.maximizeInPlace(ab), Ub
      }
      static Distance(bb, ab) {
        return Math.sqrt(Pb.DistanceSquared(bb, ab))
      }
      static DistanceSquared(bb, ab) {
        const Ub = bb._x - ab._x,
          Ab = bb._y - ab._y,
          Mb = bb._z - ab._z;
        return Ub * Ub + Ab * Ab + Mb * Mb
      }
      static ProjectOnTriangleToRef(bb, ab, Ub, Mb, Tb) {
        const Eb = kb.Pj[0],
          Bb = kb.Pj[1],
          eb = kb.Pj[2],
          vb = kb.Pj[3],
          Lb = kb.Pj[4];
        Ub.subtractToRef(ab, Eb), Mb.subtractToRef(ab, Bb), Mb.subtractToRef(Ub, eb);
        const Xb = Eb.length(),
          jb = Bb.length(),
          Rb = eb.length();
        if (Xb < Ab.e || jb < Ab.e || Rb < Ab.e) return Tb.EUb(ab), Pb.Distance(bb, ab);
        bb.subtractToRef(ab, Lb), Pb.CrossToRef(Eb, Bb, vb);
        const yb = vb.length();
        if (yb < Ab.e) return Tb.EUb(ab), Pb.Distance(bb, ab);
        vb.normalizeFromLength(yb);
        let Zb = Lb.length();
        if (Zb < Ab.e) return Tb.EUb(ab), 0;
        Lb.normalizeFromLength(Zb);
        const Db = Pb.Dot(vb, Lb),
          zb = kb.Pj[5],
          xb = kb.Pj[6];
        zb.EUb(vb).scaleInPlace(-Zb * Db), xb.EUb(bb).addInPlace(zb);
        const ib = kb.Pj[4],
          fb = kb.Pj[5],
          mb = kb.Pj[7],
          pb = kb.Pj[8];
        ib.EUb(Eb).scaleInPlace(1 / Xb), pb.EUb(Bb).scaleInPlace(1 / jb), ib.addInPlace(pb).scaleInPlace(-1), fb.EUb(Eb).scaleInPlace(-1 / Xb), pb.EUb(eb).scaleInPlace(1 / Rb), fb.addInPlace(pb).scaleInPlace(-1), mb.EUb(eb).scaleInPlace(-1 / Rb), pb.EUb(Bb).scaleInPlace(-1 / jb), mb.addInPlace(pb).scaleInPlace(-1);
        const Nb = kb.Pj[9];
        let Wb;
        Nb.EUb(xb).MAb(ab), Pb.CrossToRef(ib, Nb, pb), Wb = Pb.Dot(pb, vb);
        const Hb = Wb;
        Nb.EUb(xb).MAb(Ub), Pb.CrossToRef(fb, Nb, pb), Wb = Pb.Dot(pb, vb);
        const Ib = Wb;
        Nb.EUb(xb).MAb(Mb), Pb.CrossToRef(mb, Nb, pb), Wb = Pb.Dot(pb, vb);
        const db = Wb,
          Fb = kb.Pj[10];
        let hb, Gb;
        Hb > 0 && Ib < 0 ? (Fb.EUb(Eb), hb = ab, Gb = Ub) : Ib > 0 && db < 0 ? (Fb.EUb(eb), hb = Ub, Gb = Mb) : (Fb.EUb(Bb).scaleInPlace(-1), hb = Mb, Gb = ab);
        const Qb = kb.Pj[9],
          qb = kb.Pj[4];
        hb.subtractToRef(xb, pb), Gb.subtractToRef(xb, Qb), Pb.CrossToRef(pb, Qb, qb);
        if (!(Pb.Dot(qb, vb) < 0)) return Tb.EUb(xb), Math.abs(Zb * Db);
        const ub = kb.Pj[5];
        Pb.CrossToRef(Fb, qb, ub), ub.normalize();
        const rb = kb.Pj[9];
        rb.EUb(hb).MAb(xb);
        const Kb = rb.length();
        if (Kb < Ab.e) return Tb.EUb(hb), Pb.Distance(bb, hb);
        rb.normalizeFromLength(Kb);
        const ob = Pb.Dot(ub, rb),
          lb = kb.Pj[7];
        lb.EUb(xb).addInPlace(ub.scaleInPlace(Kb * ob)), pb.EUb(lb).MAb(hb), Zb = Fb.length(), Fb.normalizeFromLength(Zb);
        let tb = Pb.Dot(pb, Fb) / Math.max(Zb, Ab.e);
        return tb = (0, Yb.Clamp)(tb, 0, 1), lb.EUb(hb).addInPlace(Fb.scaleInPlace(tb * Zb)), Tb.EUb(lb), Pb.Distance(bb, lb)
      }
      static Center(bb, ab) {
        return Pb.CenterToRef(bb, ab, Pb.Zero())
      }
      static CenterToRef(bb, ab, Ub) {
        return Ub.K9((bb._x + ab._x) / 2, (bb._y + ab._y) / 2, (bb._z + ab._z) / 2)
      }
      static RotationFromAxis(bb, ab, Ub) {
        const Ab = new Pb;
        return Pb.RotationFromAxisToRef(bb, ab, Ub, Ab), Ab
      }
      static RotationFromAxisToRef(bb, ab, Ub, Ab) {
        const Mb = kb.Quaternion[0];
        return jb.RotationQuaternionFromAxisToRef(bb, ab, Ub, Mb), Mb.toEulerAnglesToRef(Ab), Ab
      }
    }
    Pb._V8PerformanceHack = new Pb(.5, .5, .5), Pb._UpReadOnly = Pb.Up(), Pb._DownReadOnly = Pb.Down(), Pb._LeftHandedForwardReadOnly = Pb.Forward(!1), Pb._RightHandedForwardReadOnly = Pb.Forward(!0), Pb._LeftHandedBackwardReadOnly = Pb.Backward(!1), Pb._RightHandedBackwardReadOnly = Pb.Backward(!0), Pb._RightReadOnly = Pb.Right(), Pb._LeftReadOnly = Pb.Left(), Pb._ZeroReadOnly = Pb.Zero(), Pb._OneReadOnly = Pb.One();
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
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = bb, this._y = ab, this._z = Ub, this._w = Ab
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let bb = vb(this._x);
        return bb = 397 * bb ^ vb(this._y), bb = 397 * bb ^ vb(this._z), bb = 397 * bb ^ vb(this._w), bb
      }
      qUb() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(bb, ab) {
        return void 0 === ab && (ab = 0), bb[ab] = this._x, bb[ab + 1] = this._y, bb[ab + 2] = this._z, bb[ab + 3] = this._w, this
      }
      Zab(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Xb.FromArrayToRef(bb, ab, this), this
      }
      addInPlace(bb) {
        return this.x += bb._x, this.y += bb._y, this.z += bb._z, this.w += bb._w, this
      }
      addInPlaceFromFloats(bb, ab, Ub, Ab) {
        return this.x += bb, this.y += ab, this.z += Ub, this.w += Ab, this
      }
      add(bb) {
        return new Xb(this._x + bb.x, this._y + bb.y, this._z + bb.z, this._w + bb.w)
      }
      addToRef(bb, ab) {
        return ab.x = this._x + bb.x, ab.y = this._y + bb.y, ab.z = this._z + bb.z, ab.w = this._w + bb.w, ab
      }
      MAb(bb) {
        return this.x -= bb.x, this.y -= bb.y, this.z -= bb.z, this.w -= bb.w, this
      }
      subtract(bb) {
        return new Xb(this._x - bb.x, this._y - bb.y, this._z - bb.z, this._w - bb.w)
      }
      subtractToRef(bb, ab) {
        return ab.x = this._x - bb.x, ab.y = this._y - bb.y, ab.z = this._z - bb.z, ab.w = this._w - bb.w, ab
      }
      subtractFromFloats(bb, ab, Ub, Ab) {
        return new Xb(this._x - bb, this._y - ab, this._z - Ub, this._w - Ab)
      }
      subtractFromFloatsToRef(bb, ab, Ub, Ab, Mb) {
        return Mb.x = this._x - bb, Mb.y = this._y - ab, Mb.z = this._z - Ub, Mb.w = this._w - Ab, Mb
      }
      pa() {
        return new Xb(-this._x, -this._y, -this._z, -this._w)
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
        return new Xb(this._x * bb, this._y * bb, this._z * bb, this._w * bb)
      }
      scaleToRef(bb, ab) {
        return ab.x = this._x * bb, ab.y = this._y * bb, ab.z = this._z * bb, ab.w = this._w * bb, ab
      }
      scaleAndAddToRef(bb, ab) {
        return ab.x += this._x * bb, ab.y += this._y * bb, ab.z += this._z * bb, ab.w += this._w * bb, ab
      }
      equals(bb) {
        return bb && this._x === bb.x && this._y === bb.y && this._z === bb.z && this._w === bb.w
      }
      equalsWithEpsilon(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ab.e;
        return bb && (0, Yb.WithinEpsilon)(this._x, bb.x, ab) && (0, Yb.WithinEpsilon)(this._y, bb.y, ab) && (0, Yb.WithinEpsilon)(this._z, bb.z, ab) && (0, Yb.WithinEpsilon)(this._w, bb.w, ab)
      }
      eEb(bb, ab, Ub, Ab) {
        return this._x === bb && this._y === ab && this._z === Ub && this._w === Ab
      }
      multiplyInPlace(bb) {
        return this.x *= bb.x, this.y *= bb.y, this.z *= bb.z, this.w *= bb.w, this
      }
      multiply(bb) {
        return new Xb(this._x * bb.x, this._y * bb.y, this._z * bb.z, this._w * bb.w)
      }
      multiplyToRef(bb, ab) {
        return ab.x = this._x * bb.x, ab.y = this._y * bb.y, ab.z = this._z * bb.z, ab.w = this._w * bb.w, ab
      }
      multiplyByFloats(bb, ab, Ub, Ab) {
        return new Xb(this._x * bb, this._y * ab, this._z * Ub, this._w * Ab)
      }
      divide(bb) {
        return new Xb(this._x / bb.x, this._y / bb.y, this._z / bb.z, this._w / bb.w)
      }
      divideToRef(bb, ab) {
        return ab.x = this._x / bb.x, ab.y = this._y / bb.y, ab.z = this._z / bb.z, ab.w = this._w / bb.w, ab
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
      minimizeInPlaceFromFloats(bb, ab, Ub, Ab) {
        return this.x = Math.min(bb, this._x), this.y = Math.min(ab, this._y), this.z = Math.min(Ub, this._z), this.w = Math.min(Ab, this._w), this
      }
      maximizeInPlaceFromFloats(bb, ab, Ub, Ab) {
        return this.x = Math.max(bb, this._x), this.y = Math.max(ab, this._y), this.z = Math.max(Ub, this._z), this.w = Math.max(Ab, this._w), this
      }
      floorToRef(bb) {
        return bb.x = Math.floor(this._x), bb.y = Math.floor(this._y), bb.z = Math.floor(this._z), bb.w = Math.floor(this._w), bb
      }
      floor() {
        return new Xb(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(bb) {
        return bb.x = this._x - Math.floor(this._x), bb.y = this._y - Math.floor(this._y), bb.z = this._z - Math.floor(this._z), bb.w = this._w - Math.floor(this._w), bb
      }
      fract() {
        return new Xb(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
        return this.normalizeToRef(new Xb)
      }
      normalizeToRef(bb) {
        const ab = this.length();
        return 0 === ab || 1 === ab ? (bb.x = this._x, bb.y = this._y, bb.z = this._z, bb.w = this._w, bb) : this.scaleToRef(1 / ab, bb)
      }
      toVector3() {
        return new Pb(this._x, this._y, this._z)
      }
      clone() {
        return new Xb(this._x, this._y, this._z, this._w)
      }
      EUb(bb) {
        return this.x = bb.x, this.y = bb.y, this.z = bb.z, this.w = bb.w, this
      }
      K9(bb, ab, Ub, Ab) {
        return this.x = bb, this.y = ab, this.z = Ub, this.w = Ab, this
      }
      set(bb, ab, Ub, Ab) {
        return this.K9(bb, ab, Ub, Ab)
      }
      B3(bb) {
        return this.x = this.y = this.z = this.w = bb, this
      }
      dot(bb) {
        return this._x * bb.x + this._y * bb.y + this._z * bb.z + this._w * bb.w
      }
      static FromArray(bb, ab) {
        return ab || (ab = 0), new Xb(bb[ab], bb[ab + 1], bb[ab + 2], bb[ab + 3])
      }
      static FromArrayToRef(bb, ab, Ub) {
        return Ub.x = bb[ab], Ub.y = bb[ab + 1], Ub.z = bb[ab + 2], Ub.w = bb[ab + 3], Ub
      }
      static FromFloatArrayToRef(bb, ab, Ub) {
        return Xb.FromArrayToRef(bb, ab, Ub), Ub
      }
      static FromFloatsToRef(bb, ab, Ub, Ab, Mb) {
        return Mb.x = bb, Mb.y = ab, Mb.z = Ub, Mb.w = Ab, Mb
      }
      static Zero() {
        return new Xb(0, 0, 0, 0)
      }
      static One() {
        return new Xb(1, 1, 1, 1)
      }
      static Random() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Xb((0, Yb.RandomRange)(bb, ab), (0, Yb.RandomRange)(bb, ab), (0, Yb.RandomRange)(bb, ab), (0, Yb.RandomRange)(bb, ab))
      }
      static RandomToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        return Ub.x = (0, Yb.RandomRange)(bb, ab), Ub.y = (0, Yb.RandomRange)(bb, ab), Ub.z = (0, Yb.RandomRange)(bb, ab), Ub.w = (0, Yb.RandomRange)(bb, ab), Ub
      }
      static Clamp(bb, ab, Ub) {
        return Xb.ClampToRef(bb, ab, Ub, new Xb)
      }
      static ClampToRef(bb, ab, Ub, Ab) {
        return Ab.x = (0, Yb.Clamp)(bb.x, ab.x, Ub.x), Ab.y = (0, Yb.Clamp)(bb.y, ab.y, Ub.y), Ab.z = (0, Yb.Clamp)(bb.z, ab.z, Ub.z), Ab.w = (0, Yb.Clamp)(bb.w, ab.w, Ub.w), Ab
      }
      static CheckExtends(bb, ab, Ub) {
        ab.minimizeInPlace(bb), Ub.maximizeInPlace(bb)
      }
      static get ZeroReadOnly() {
        return Xb._ZeroReadOnly
      }
      static Normalize(bb) {
        return Xb.NormalizeToRef(bb, new Xb)
      }
      static NormalizeToRef(bb, ab) {
        return bb.normalizeToRef(ab), ab
      }
      static Minimize(bb, ab) {
        const Ub = new Xb;
        return Ub.EUb(bb), Ub.minimizeInPlace(ab), Ub
      }
      static Maximize(bb, ab) {
        const Ub = new Xb;
        return Ub.EUb(bb), Ub.maximizeInPlace(ab), Ub
      }
      static Distance(bb, ab) {
        return Math.sqrt(Xb.DistanceSquared(bb, ab))
      }
      static DistanceSquared(bb, ab) {
        const Ub = bb.x - ab.x,
          Ab = bb.y - ab.y,
          Mb = bb.z - ab.z,
          Tb = bb.w - ab.w;
        return Ub * Ub + Ab * Ab + Mb * Mb + Tb * Tb
      }
      static Center(bb, ab) {
        return Xb.CenterToRef(bb, ab, new Xb)
      }
      static CenterToRef(bb, ab, Ub) {
        return Ub.x = (bb.x + ab.x) / 2, Ub.y = (bb.y + ab.y) / 2, Ub.z = (bb.z + ab.z) / 2, Ub.w = (bb.w + ab.w) / 2, Ub
      }
      static TransformCoordinates(bb, ab) {
        return Xb.TransformCoordinatesToRef(bb, ab, new Xb)
      }
      static TransformCoordinatesToRef(bb, ab, Ub) {
        return Xb.TransformCoordinatesFromFloatsToRef(bb._x, bb._y, bb._z, ab, Ub), Ub
      }
      static TransformCoordinatesFromFloatsToRef(bb, ab, Ub, Ab, Mb) {
        const Tb = Ab.m,
          Eb = bb * Tb[0] + ab * Tb[4] + Ub * Tb[8] + Tb[12],
          Yb = bb * Tb[1] + ab * Tb[5] + Ub * Tb[9] + Tb[13],
          Bb = bb * Tb[2] + ab * Tb[6] + Ub * Tb[10] + Tb[14],
          eb = bb * Tb[3] + ab * Tb[7] + Ub * Tb[11] + Tb[15];
        return Mb.x = Eb, Mb.y = Yb, Mb.z = Bb, Mb.w = eb, Mb
      }
      static TransformNormal(bb, ab) {
        return Xb.TransformNormalToRef(bb, ab, new Xb)
      }
      static TransformNormalToRef(bb, ab, Ub) {
        const Ab = ab.m,
          Mb = bb.x * Ab[0] + bb.y * Ab[4] + bb.z * Ab[8],
          Tb = bb.x * Ab[1] + bb.y * Ab[5] + bb.z * Ab[9],
          Eb = bb.x * Ab[2] + bb.y * Ab[6] + bb.z * Ab[10];
        return Ub.x = Mb, Ub.y = Tb, Ub.z = Eb, Ub.w = bb.w, Ub
      }
      static TransformNormalFromFloatsToRef(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = Mb.m;
        return Tb.x = bb * Eb[0] + ab * Eb[4] + Ub * Eb[8], Tb.y = bb * Eb[1] + ab * Eb[5] + Ub * Eb[9], Tb.z = bb * Eb[2] + ab * Eb[6] + Ub * Eb[10], Tb.w = Ab, Tb
      }
      static FromVector3(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Xb(bb._x, bb._y, bb._z, ab)
      }
      static Dot(bb, ab) {
        return bb.x * ab.x + bb.y * ab.y + bb.z * ab.z + bb.w * ab.w
      }
    }
    Xb._V8PerformanceHack = new Xb(.5, .5, .5, .5), Xb._ZeroReadOnly = Xb.Zero();
    class jb {
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
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = bb, this._y = ab, this._z = Ub, this._w = Ab
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let bb = vb(this._x);
        return bb = 397 * bb ^ vb(this._y), bb = 397 * bb ^ vb(this._z), bb = 397 * bb ^ vb(this._w), bb
      }
      qUb() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bb[ab] = this._x, bb[ab + 1] = this._y, bb[ab + 2] = this._z, bb[ab + 3] = this._w, this
      }
      Zab(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return jb.FromArrayToRef(bb, ab, this)
      }
      equals(bb) {
        return bb && this._x === bb._x && this._y === bb._y && this._z === bb._z && this._w === bb._w
      }
      equalsWithEpsilon(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ab.e;
        return bb && (0, Yb.WithinEpsilon)(this._x, bb._x, ab) && (0, Yb.WithinEpsilon)(this._y, bb._y, ab) && (0, Yb.WithinEpsilon)(this._z, bb._z, ab) && (0, Yb.WithinEpsilon)(this._w, bb._w, ab)
      }
      isApprox(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ab.e;
        return bb && ((0, Yb.WithinEpsilon)(this._x, bb._x, ab) && (0, Yb.WithinEpsilon)(this._y, bb._y, ab) && (0, Yb.WithinEpsilon)(this._z, bb._z, ab) && (0, Yb.WithinEpsilon)(this._w, bb._w, ab) || (0, Yb.WithinEpsilon)(this._x, -bb._x, ab) && (0, Yb.WithinEpsilon)(this._y, -bb._y, ab) && (0, Yb.WithinEpsilon)(this._z, -bb._z, ab) && (0, Yb.WithinEpsilon)(this._w, -bb._w, ab))
      }
      clone() {
        return new jb(this._x, this._y, this._z, this._w)
      }
      EUb(bb) {
        return this._x = bb._x, this._y = bb._y, this._z = bb._z, this._w = bb._w, this._isDirty = !0, this
      }
      K9(bb, ab, Ub, Ab) {
        return this._x = bb, this._y = ab, this._z = Ub, this._w = Ab, this._isDirty = !0, this
      }
      set(bb, ab, Ub, Ab) {
        return this.K9(bb, ab, Ub, Ab)
      }
      B3(bb) {
        return this.K9(bb, bb, bb, bb)
      }
      add(bb) {
        return new jb(this._x + bb._x, this._y + bb._y, this._z + bb._z, this._w + bb._w)
      }
      addInPlace(bb) {
        return this._x += bb._x, this._y += bb._y, this._z += bb._z, this._w += bb._w, this._isDirty = !0, this
      }
      addToRef(bb, ab) {
        return ab._x = this._x + bb._x, ab._y = this._y + bb._y, ab._z = this._z + bb._z, ab._w = this._w + bb._w, ab._isDirty = !0, ab
      }
      addInPlaceFromFloats(bb, ab, Ub, Ab) {
        return this._x += bb, this._y += ab, this._z += Ub, this._w += Ab, this._isDirty = !0, this
      }
      subtractToRef(bb, ab) {
        return ab._x = this._x - bb._x, ab._y = this._y - bb._y, ab._z = this._z - bb._z, ab._w = this._w - bb._w, ab._isDirty = !0, ab
      }
      subtractFromFloats(bb, ab, Ub, Ab) {
        return this.subtractFromFloatsToRef(bb, ab, Ub, Ab, new jb)
      }
      subtractFromFloatsToRef(bb, ab, Ub, Ab, Mb) {
        return Mb._x = this._x - bb, Mb._y = this._y - ab, Mb._z = this._z - Ub, Mb._w = this._w - Ab, Mb._isDirty = !0, Mb
      }
      subtract(bb) {
        return new jb(this._x - bb._x, this._y - bb._y, this._z - bb._z, this._w - bb._w)
      }
      MAb(bb) {
        return this._x -= bb._x, this._y -= bb._y, this._z -= bb._z, this._w -= bb._w, this._isDirty = !0, this
      }
      scale(bb) {
        return new jb(this._x * bb, this._y * bb, this._z * bb, this._w * bb)
      }
      scaleToRef(bb, ab) {
        return ab._x = this._x * bb, ab._y = this._y * bb, ab._z = this._z * bb, ab._w = this._w * bb, ab._isDirty = !0, ab
      }
      scaleInPlace(bb) {
        return this._x *= bb, this._y *= bb, this._z *= bb, this._w *= bb, this._isDirty = !0, this
      }
      scaleAndAddToRef(bb, ab) {
        return ab._x += this._x * bb, ab._y += this._y * bb, ab._z += this._z * bb, ab._w += this._w * bb, ab._isDirty = !0, ab
      }
      multiply(bb) {
        const ab = new jb(0, 0, 0, 1);
        return this.multiplyToRef(bb, ab), ab
      }
      multiplyToRef(bb, ab) {
        const Ub = this._x * bb._w + this._y * bb._z - this._z * bb._y + this._w * bb._x,
          Ab = -this._x * bb._z + this._y * bb._w + this._z * bb._x + this._w * bb._y,
          Mb = this._x * bb._y - this._y * bb._x + this._z * bb._w + this._w * bb._z,
          Tb = -this._x * bb._x - this._y * bb._y - this._z * bb._z + this._w * bb._w;
        return ab.K9(Ub, Ab, Mb, Tb), ab
      }
      multiplyInPlace(bb) {
        return this.multiplyToRef(bb, this)
      }
      multiplyByFloats(bb, ab, Ub, Ab) {
        return this._x *= bb, this._y *= ab, this._z *= Ub, this._w *= Ab, this._isDirty = !0, this
      }
      divide(bb) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(bb, ab) {
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
      pa() {
        return this.negateToRef(new jb)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(bb) {
        return bb._x = -this._x, bb._y = -this._y, bb._z = -this._z, bb._w = -this._w, bb._isDirty = !0, bb
      }
      eEb(bb, ab, Ub, Ab) {
        return this._x === bb && this._y === ab && this._z === Ub && this._w === Ab
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
        return bb.K9(-this._x, -this._y, -this._z, this._w), bb
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new jb(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const bb = this.conjugate(),
          ab = this.lengthSquared();
        return 0 == ab || 1 == ab || bb.scaleInPlace(1 / ab), bb
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
        const bb = new jb(0, 0, 0, 1);
        return this.normalizeToRef(bb), bb
      }
      normalizeToRef(bb) {
        const ab = this.length();
        return 0 === ab || 1 === ab ? bb.K9(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / ab, bb)
      }
      toEulerAngles() {
        const bb = Pb.Zero();
        return this.toEulerAnglesToRef(bb), bb
      }
      toEulerAnglesToRef(bb) {
        const ab = this._z,
          Ub = this._x,
          Ab = this._y,
          Mb = this._w,
          Tb = Ab * ab - Ub * Mb,
          Eb = .4999999;
        if (Tb < -Eb) bb._y = 2 * Math.atan2(Ab, Mb), bb._x = Math.PI / 2, bb._z = 0, bb._isDirty = !0;
        else if (Tb > Eb) bb._y = 2 * Math.atan2(Ab, Mb), bb._x = -Math.PI / 2, bb._z = 0, bb._isDirty = !0;
        else {
          const Eb = Mb * Mb,
            Yb = ab * ab,
            Bb = Ub * Ub,
            eb = Ab * Ab;
          bb._z = Math.atan2(2 * (Ub * Ab + ab * Mb), -Yb - Bb + eb + Eb), bb._x = Math.asin(-2 * Tb), bb._y = Math.atan2(2 * (ab * Ub + Ab * Mb), Yb - Bb - eb + Eb), bb._isDirty = !0
        }
        return bb
      }
      toAlphaBetaGammaToRef(bb) {
        const ab = this._z,
          Ub = this._x,
          Ab = this._y,
          Mb = this._w,
          Tb = Math.sqrt(Ub * Ub + Ab * Ab),
          Eb = Math.sqrt(ab * ab + Mb * Mb),
          Yb = 2 * Math.atan2(Tb, Eb),
          Bb = 2 * Math.atan2(ab, Mb),
          eb = 2 * Math.atan2(Ab, Ub),
          vb = (Bb + eb) / 2,
          Lb = (Bb - eb) / 2;
        return bb.set(Lb, Yb, vb), bb
      }
      toRotationMatrix(bb) {
        return Rb.FromQuaternionToRef(this, bb), bb
      }
      fromRotationMatrix(bb) {
        return jb.FromRotationMatrixToRef(bb, this), this
      }
      dot(bb) {
        return this._x * bb._x + this._y * bb._y + this._z * bb._z + this._w * bb._w
      }
      toAxisAngle() {
        const bb = Pb.Zero();
        return {
          axis: bb,
          angle: this.toAxisAngleToRef(bb)
        }
      }
      toAxisAngleToRef(bb) {
        let ab;
        const Ub = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          Ab = this._w;
        return Ub > 0 ? (ab = 2 * Math.atan2(Ub, Ab), bb.set(this._x / Ub, this._y / Ub, this._z / Ub)) : (ab = 0, bb.set(1, 0, 0)), ab
      }
      static FromRotationMatrix(bb) {
        const ab = new jb;
        return jb.FromRotationMatrixToRef(bb, ab), ab
      }
      static FromRotationMatrixToRef(bb, ab) {
        const Ub = bb.m,
          Ab = Ub[0],
          Mb = Ub[4],
          Tb = Ub[8],
          Eb = Ub[1],
          Yb = Ub[5],
          Bb = Ub[9],
          eb = Ub[2],
          vb = Ub[6],
          Lb = Ub[10],
          Pb = Ab + Yb + Lb;
        let Xb;
        return Pb > 0 ? (Xb = .5 / Math.sqrt(Pb + 1), ab._w = .25 / Xb, ab._x = (vb - Bb) * Xb, ab._y = (Tb - eb) * Xb, ab._z = (Eb - Mb) * Xb, ab._isDirty = !0) : Ab > Yb && Ab > Lb ? (Xb = 2 * Math.sqrt(1 + Ab - Yb - Lb), ab._w = (vb - Bb) / Xb, ab._x = .25 * Xb, ab._y = (Mb + Eb) / Xb, ab._z = (Tb + eb) / Xb, ab._isDirty = !0) : Yb > Lb ? (Xb = 2 * Math.sqrt(1 + Yb - Ab - Lb), ab._w = (Tb - eb) / Xb, ab._x = (Mb + Eb) / Xb, ab._y = .25 * Xb, ab._z = (Bb + vb) / Xb, ab._isDirty = !0) : (Xb = 2 * Math.sqrt(1 + Lb - Ab - Yb), ab._w = (Eb - Mb) / Xb, ab._x = (Tb + eb) / Xb, ab._y = (Bb + vb) / Xb, ab._z = .25 * Xb, ab._isDirty = !0), ab
      }
      static Dot(bb, ab) {
        return bb._x * ab._x + bb._y * ab._y + bb._z * ab._z + bb._w * ab._w
      }
      static AreClose(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const Ab = jb.Dot(bb, ab);
        return 1 - Ab * Ab <= Ub
      }
      static SmoothToRef(bb, ab, Ub, Ab, Mb) {
        let Tb = 0 === Ab ? 1 : Ub / Ab;
        return Tb = (0, Yb.Clamp)(Tb, 0, 1), jb.SlerpToRef(bb, ab, Tb, Mb), Mb
      }
      static Zero() {
        return new jb(0, 0, 0, 0)
      }
      static Inverse(bb) {
        return new jb(-bb._x, -bb._y, -bb._z, bb._w)
      }
      static InverseToRef(bb, ab) {
        return ab.set(-bb._x, -bb._y, -bb._z, bb._w), ab
      }
      static Identity() {
        return new jb(0, 0, 0, 1)
      }
      static IsIdentity(bb) {
        return bb && 0 === bb._x && 0 === bb._y && 0 === bb._z && 1 === bb._w
      }
      static RotationAxis(bb, ab) {
        return jb.RotationAxisToRef(bb, ab, new jb)
      }
      static RotationAxisToRef(bb, ab, Ub) {
        Ub._w = Math.cos(ab / 2);
        const Ab = Math.sin(ab / 2) / bb.length();
        return Ub._x = bb._x * Ab, Ub._y = bb._y * Ab, Ub._z = bb._z * Ab, Ub._isDirty = !0, Ub
      }
      static FromArray(bb, ab) {
        return ab || (ab = 0), new jb(bb[ab], bb[ab + 1], bb[ab + 2], bb[ab + 3])
      }
      static FromArrayToRef(bb, ab, Ub) {
        return Ub._x = bb[ab], Ub._y = bb[ab + 1], Ub._z = bb[ab + 2], Ub._w = bb[ab + 3], Ub._isDirty = !0, Ub
      }
      static FromFloatsToRef(bb, ab, Ub, Ab, Mb) {
        return Mb.K9(bb, ab, Ub, Ab), Mb
      }
      static FromEulerAngles(bb, ab, Ub) {
        const Ab = new jb;
        return jb.RotationYawPitchRollToRef(ab, bb, Ub, Ab), Ab
      }
      static FromEulerAnglesToRef(bb, ab, Ub, Ab) {
        return jb.RotationYawPitchRollToRef(ab, bb, Ub, Ab), Ab
      }
      static FromEulerVector(bb) {
        const ab = new jb;
        return jb.RotationYawPitchRollToRef(bb._y, bb._x, bb._z, ab), ab
      }
      static FromEulerVectorToRef(bb, ab) {
        return jb.RotationYawPitchRollToRef(bb._y, bb._x, bb._z, ab), ab
      }
      static FromUnitVectorsToRef(bb, ab, Ub) {
        let Mb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ab.e;
        const Tb = Pb.Dot(bb, ab) + 1;
        return Tb < Mb ? Math.abs(bb.x) > Math.abs(bb.z) ? Ub.set(-bb.y, bb.x, 0, 0) : Ub.set(0, -bb.z, bb.y, 0) : (Pb.CrossToRef(bb, ab, yb.Pj[0]), Ub.set(yb.Pj[0].x, yb.Pj[0].y, yb.Pj[0].z, Tb)), Ub.normalize()
      }
      static RotationYawPitchRoll(bb, ab, Ub) {
        const Ab = new jb;
        return jb.RotationYawPitchRollToRef(bb, ab, Ub, Ab), Ab
      }
      static RotationYawPitchRollToRef(bb, ab, Ub, Ab) {
        const Mb = .5 * Ub,
          Tb = .5 * ab,
          Eb = .5 * bb,
          Yb = Math.sin(Mb),
          Bb = Math.cos(Mb),
          eb = Math.sin(Tb),
          vb = Math.cos(Tb),
          Lb = Math.sin(Eb),
          Pb = Math.cos(Eb);
        return Ab._x = Pb * eb * Bb + Lb * vb * Yb, Ab._y = Lb * vb * Bb - Pb * eb * Yb, Ab._z = Pb * vb * Yb - Lb * eb * Bb, Ab._w = Pb * vb * Bb + Lb * eb * Yb, Ab._isDirty = !0, Ab
      }
      static RotationAlphaBetaGamma(bb, ab, Ub) {
        const Ab = new jb;
        return jb.RotationAlphaBetaGammaToRef(bb, ab, Ub, Ab), Ab
      }
      static RotationAlphaBetaGammaToRef(bb, ab, Ub, Ab) {
        const Mb = .5 * (Ub + bb),
          Tb = .5 * (Ub - bb),
          Eb = .5 * ab;
        return Ab._x = Math.cos(Tb) * Math.sin(Eb), Ab._y = Math.sin(Tb) * Math.sin(Eb), Ab._z = Math.sin(Mb) * Math.cos(Eb), Ab._w = Math.cos(Mb) * Math.cos(Eb), Ab._isDirty = !0, Ab
      }
      static RotationQuaternionFromAxis(bb, ab, Ub) {
        const Ab = new jb(0, 0, 0, 0);
        return jb.RotationQuaternionFromAxisToRef(bb, ab, Ub, Ab), Ab
      }
      static RotationQuaternionFromAxisToRef(bb, ab, Ub, Ab) {
        const Mb = kb.Matrix[0];
        return bb = bb.normalizeToRef(kb.Pj[0]), ab = ab.normalizeToRef(kb.Pj[1]), Ub = Ub.normalizeToRef(kb.Pj[2]), Rb.FromXYZAxesToRef(bb, ab, Ub, Mb), jb.FromRotationMatrixToRef(Mb, Ab), Ab
      }
      static FromLookDirectionLH(bb, ab) {
        const Ub = new jb;
        return jb.FromLookDirectionLHToRef(bb, ab, Ub), Ub
      }
      static FromLookDirectionLHToRef(bb, ab, Ub) {
        const Ab = kb.Matrix[0];
        return Rb.LookDirectionLHToRef(bb, ab, Ab), jb.FromRotationMatrixToRef(Ab, Ub), Ub
      }
      static FromLookDirectionRH(bb, ab) {
        const Ub = new jb;
        return jb.FromLookDirectionRHToRef(bb, ab, Ub), Ub
      }
      static FromLookDirectionRHToRef(bb, ab, Ub) {
        const Ab = kb.Matrix[0];
        return Rb.LookDirectionRHToRef(bb, ab, Ab), jb.FromRotationMatrixToRef(Ab, Ub)
      }
      static Slerp(bb, ab, Ub) {
        const Ab = jb.Identity();
        return jb.SlerpToRef(bb, ab, Ub, Ab), Ab
      }
      static SlerpToRef(bb, ab, Ub, Ab) {
        let Mb, Tb, Eb = bb._x * ab._x + bb._y * ab._y + bb._z * ab._z + bb._w * ab._w,
          Yb = !1;
        if (Eb < 0 && (Yb = !0, Eb = -Eb), Eb > .999999) Tb = 1 - Ub, Mb = Yb ? -Ub : Ub;
        else {
          const bb = Math.acos(Eb),
            ab = 1 / Math.sin(bb);
          Tb = Math.sin((1 - Ub) * bb) * ab, Mb = Yb ? -Math.sin(Ub * bb) * ab : Math.sin(Ub * bb) * ab
        }
        return Ab._x = Tb * bb._x + Mb * ab._x, Ab._y = Tb * bb._y + Mb * ab._y, Ab._z = Tb * bb._z + Mb * ab._z, Ab._w = Tb * bb._w + Mb * ab._w, Ab._isDirty = !0, Ab
      }
      static Hermite(bb, ab, Ub, Ab, Mb) {
        const Tb = Mb * Mb,
          Eb = Mb * Tb,
          Yb = 2 * Eb - 3 * Tb + 1,
          Bb = -2 * Eb + 3 * Tb,
          eb = Eb - 2 * Tb + Mb,
          vb = Eb - Tb,
          Lb = bb._x * Yb + Ub._x * Bb + ab._x * eb + Ab._x * vb,
          Pb = bb._y * Yb + Ub._y * Bb + ab._y * eb + Ab._y * vb,
          Xb = bb._z * Yb + Ub._z * Bb + ab._z * eb + Ab._z * vb,
          Rb = bb._w * Yb + Ub._w * Bb + ab._w * eb + Ab._w * vb;
        return new jb(Lb, Pb, Xb, Rb)
      }
      static Hermite1stDerivative(bb, ab, Ub, Ab, Mb) {
        const Tb = new jb;
        return this.Hermite1stDerivativeToRef(bb, ab, Ub, Ab, Mb, Tb), Tb
      }
      static Hermite1stDerivativeToRef(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = Mb * Mb;
        return Tb._x = 6 * (Eb - Mb) * bb._x + (3 * Eb - 4 * Mb + 1) * ab._x + 6 * (-Eb + Mb) * Ub._x + (3 * Eb - 2 * Mb) * Ab._x, Tb._y = 6 * (Eb - Mb) * bb._y + (3 * Eb - 4 * Mb + 1) * ab._y + 6 * (-Eb + Mb) * Ub._y + (3 * Eb - 2 * Mb) * Ab._y, Tb._z = 6 * (Eb - Mb) * bb._z + (3 * Eb - 4 * Mb + 1) * ab._z + 6 * (-Eb + Mb) * Ub._z + (3 * Eb - 2 * Mb) * Ab._z, Tb._w = 6 * (Eb - Mb) * bb._w + (3 * Eb - 4 * Mb + 1) * ab._w + 6 * (-Eb + Mb) * Ub._w + (3 * Eb - 2 * Mb) * Ab._w, Tb._isDirty = !0, Tb
      }
      static Normalize(bb) {
        const ab = jb.Zero();
        return jb.NormalizeToRef(bb, ab), ab
      }
      static NormalizeToRef(bb, ab) {
        return bb.normalizeToRef(ab), ab
      }
      static Clamp(bb, ab, Ub) {
        const Ab = new jb;
        return jb.ClampToRef(bb, ab, Ub, Ab), Ab
      }
      static ClampToRef(bb, ab, Ub, Ab) {
        return Ab.K9((0, Yb.Clamp)(bb.x, ab.x, Ub.x), (0, Yb.Clamp)(bb.y, ab.y, Ub.y), (0, Yb.Clamp)(bb.z, ab.z, Ub.z), (0, Yb.Clamp)(bb.w, ab.w, Ub.w))
      }
      static Random() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new jb((0, Yb.RandomRange)(bb, ab), (0, Yb.RandomRange)(bb, ab), (0, Yb.RandomRange)(bb, ab), (0, Yb.RandomRange)(bb, ab))
      }
      static RandomToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).K9((0, Yb.RandomRange)(bb, ab), (0, Yb.RandomRange)(bb, ab), (0, Yb.RandomRange)(bb, ab), (0, Yb.RandomRange)(bb, ab))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(bb, ab) {
        return Math.sqrt(jb.DistanceSquared(bb, ab))
      }
      static DistanceSquared(bb, ab) {
        const Ub = bb.x - ab.x,
          Ab = bb.y - ab.y,
          Mb = bb.z - ab.z,
          Tb = bb.w - ab.w;
        return Ub * Ub + Ab * Ab + Mb * Mb + Tb * Tb
      }
      static Center(bb, ab) {
        return jb.CenterToRef(bb, ab, jb.Zero())
      }
      static CenterToRef(bb, ab, Ub) {
        return Ub.K9((bb.x + ab.x) / 2, (bb.y + ab.y) / 2, (bb.z + ab.z) / 2, (bb.w + ab.w) / 2)
      }
    }
    jb._V8PerformanceHack = new jb(.5, .5, .5, .5);
    class Rb {
      static get Use64Bits() {
        return Tb.b.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = Bb.j._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ab = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = bb, this._isIdentity3x2 = bb || Ub, this._isIdentityDirty = !this._isIdentity && ab, this._isIdentity3x2Dirty = !this._isIdentity3x2 && Ab
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, Tb.b.MatrixTrackPrecisionChange && Tb.b.MatrixTrackedMatrices.push(this), this._m = new Tb.b.MatrixCurrentType(16), this.markAsUpdated()
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
          ab = bb[0],
          Ub = bb[1],
          Ab = bb[2],
          Mb = bb[3],
          Tb = bb[4],
          Eb = bb[5],
          Yb = bb[6],
          Bb = bb[7],
          eb = bb[8],
          vb = bb[9],
          Lb = bb[10],
          Pb = bb[11],
          Xb = bb[12],
          jb = bb[13],
          Rb = bb[14],
          kb = bb[15],
          yb = Lb * kb - Rb * Pb,
          Zb = vb * kb - jb * Pb,
          Db = vb * Rb - jb * Lb,
          zb = eb * kb - Xb * Pb,
          xb = eb * Rb - Lb * Xb,
          ib = eb * jb - Xb * vb;
        return ab * +(Eb * yb - Yb * Zb + Bb * Db) + Ub * -(Tb * yb - Yb * zb + Bb * xb) + Ab * +(Tb * Zb - Eb * zb + Bb * ib) + Mb * -(Tb * Db - Eb * xb + Yb * ib)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!bb) return this._m;
        const Ub = this._m;
        for (let Ab = 0; Ab < 16; Ab++) bb[ab + Ab] = Ub[Ab];
        return this
      }
      qUb() {
        return this._m
      }
      Zab(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Rb.FromArrayToRef(bb, ab, this)
      }
      K9() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        return Rb.FromArrayToRef(ab, 0, this)
      }
      set() {
        const bb = this._m;
        for (let ab = 0; ab < 16; ab++) bb[ab] = ab < 0 || arguments.length <= ab ? void 0 : arguments[ab];
        return this.markAsUpdated(), this
      }
      B3(bb) {
        const ab = this._m;
        for (let Ub = 0; Ub < 16; Ub++) ab[Ub] = bb;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return Rb.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(bb) {
        const ab = new Rb;
        return this.addToRef(bb, ab), ab
      }
      addToRef(bb, ab) {
        const Ub = this._m,
          Ab = ab._m,
          Mb = bb.m;
        for (let Tb = 0; Tb < 16; Tb++) Ab[Tb] = Ub[Tb] + Mb[Tb];
        return ab.markAsUpdated(), ab
      }
      addToSelf(bb) {
        const ab = this._m,
          Ub = bb.m;
        return ab[0] += Ub[0], ab[1] += Ub[1], ab[2] += Ub[2], ab[3] += Ub[3], ab[4] += Ub[4], ab[5] += Ub[5], ab[6] += Ub[6], ab[7] += Ub[7], ab[8] += Ub[8], ab[9] += Ub[9], ab[10] += Ub[10], ab[11] += Ub[11], ab[12] += Ub[12], ab[13] += Ub[13], ab[14] += Ub[14], ab[15] += Ub[15], this.markAsUpdated(), this
      }
      addInPlace(bb) {
        const ab = this._m,
          Ub = bb.m;
        for (let Ab = 0; Ab < 16; Ab++) ab[Ab] += Ub[Ab];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const bb = this._m;
        for (let ab = 0; ab < 16; ab++) bb[ab] += ab < 0 || arguments.length <= ab ? void 0 : arguments[ab];
        return this.markAsUpdated(), this
      }
      subtract(bb) {
        const ab = this._m,
          Ub = bb.m;
        for (let Ab = 0; Ab < 16; Ab++) ab[Ab] -= Ub[Ab];
        return this.markAsUpdated(), this
      }
      subtractToRef(bb, ab) {
        const Ub = this._m,
          Ab = bb.m,
          Mb = ab._m;
        for (let Tb = 0; Tb < 16; Tb++) Mb[Tb] = Ub[Tb] - Ab[Tb];
        return ab.markAsUpdated(), ab
      }
      MAb(bb) {
        const ab = this._m,
          Ub = bb.m;
        for (let Ab = 0; Ab < 16; Ab++) ab[Ab] -= Ub[Ab];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        return this.subtractFromFloatsToRef(...ab, new Rb)
      }
      subtractFromFloatsToRef() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        const Ab = ab.pop(),
          Mb = this._m,
          Tb = Ab._m,
          Eb = ab;
        for (let Yb = 0; Yb < 16; Yb++) Tb[Yb] = Mb[Yb] - Eb[Yb];
        return Ab.markAsUpdated(), Ab
      }
      invertToRef(bb) {
        return !0 === this._isIdentity ? (Rb.IdentityToRef(bb), bb) : ((0, Bb.d)(this, bb.qUb()) ? bb.markAsUpdated() : bb.EUb(this), bb)
      }
      addAtIndex(bb, ab) {
        return this._m[bb] += ab, this.markAsUpdated(), this
      }
      multiplyAtIndex(bb, ab) {
        return this._m[bb] *= ab, this.markAsUpdated(), this
      }
      setTranslationFromFloats(bb, ab, Ub) {
        return this._m[12] = bb, this._m[13] = ab, this._m[14] = Ub, this.markAsUpdated(), this
      }
      addTranslationFromFloats(bb, ab, Ub) {
        return this._m[12] += bb, this._m[13] += ab, this._m[14] += Ub, this.markAsUpdated(), this
      }
      setTranslation(bb) {
        return this.setTranslationFromFloats(bb._x, bb._y, bb._z)
      }
      getTranslation() {
        return new Pb(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(bb) {
        return bb.x = this._m[12], bb.y = this._m[13], bb.z = this._m[14], bb
      }
      removeRotationAndScaling() {
        const bb = this.m;
        return Rb.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, bb[12], bb[13], bb[14], bb[15], this), this._updateIdentityStatus(0 === bb[12] && 0 === bb[13] && 0 === bb[14] && 1 === bb[15]), this
      }
      EUb(bb) {
        bb.copyToArray(this._m);
        const ab = bb;
        return this.updateFlag = ab.updateFlag, this._updateIdentityStatus(ab._isIdentity, ab._isIdentityDirty, ab._isIdentity3x2, ab._isIdentity3x2Dirty), this
      }
      copyToArray(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, Bb.b)(this, bb, ab), this
      }
      multiply(bb) {
        const ab = new Rb;
        return this.multiplyToRef(bb, ab), ab
      }
      multiplyInPlace(bb) {
        const ab = this._m,
          Ub = bb.m;
        for (let Ab = 0; Ab < 16; Ab++) ab[Ab] *= Ub[Ab];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const bb = this._m;
        for (let ab = 0; ab < 16; ab++) bb[ab] *= ab < 0 || arguments.length <= ab ? void 0 : arguments[ab];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var bb = arguments.length, ab = new Array(bb), Ub = 0; Ub < bb; Ub++) ab[Ub] = arguments[Ub];
        const Ab = ab.pop(),
          Mb = this._m,
          Tb = Ab._m,
          Eb = ab;
        for (let Yb = 0; Yb < 16; Yb++) Tb[Yb] = Mb[Yb] * Eb[Yb];
        return Ab.markAsUpdated(), Ab
      }
      multiplyToRef(bb, ab) {
        return this._isIdentity ? (ab.EUb(bb), ab) : bb._isIdentity ? (ab.EUb(this), ab) : (this.multiplyToArray(bb, ab._m, 0), ab.markAsUpdated(), ab)
      }
      multiplyToArray(bb, ab, Ub) {
        return (0, Bb.l)(this, bb, ab, Ub), this
      }
      divide(bb) {
        return this.divideToRef(bb, new Rb)
      }
      divideToRef(bb, ab) {
        const Ub = this._m,
          Ab = bb.m,
          Mb = ab._m;
        for (let Tb = 0; Tb < 16; Tb++) Mb[Tb] = Ub[Tb] / Ab[Tb];
        return ab.markAsUpdated(), ab
      }
      divideInPlace(bb) {
        const ab = this._m,
          Ub = bb.m;
        for (let Ab = 0; Ab < 16; Ab++) ab[Ab] /= Ub[Ab];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(bb) {
        const ab = this._m,
          Ub = bb.m;
        for (let Ab = 0; Ab < 16; Ab++) ab[Ab] = Math.min(ab[Ab], Ub[Ab]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const bb = this._m;
        for (let ab = 0; ab < 16; ab++) bb[ab] = Math.min(bb[ab], ab < 0 || arguments.length <= ab ? void 0 : arguments[ab]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(bb) {
        const ab = this._m,
          Ub = bb.m;
        for (let Ab = 0; Ab < 16; Ab++) ab[Ab] = Math.max(ab[Ab], Ub[Ab]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const bb = this._m;
        for (let ab = 0; ab < 16; ab++) bb[ab] = Math.max(bb[ab], ab < 0 || arguments.length <= ab ? void 0 : arguments[ab]);
        return this.markAsUpdated(), this
      }
      pa() {
        return this.negateToRef(new Rb)
      }
      negateInPlace() {
        const bb = this._m;
        for (let ab = 0; ab < 16; ab++) bb[ab] = -bb[ab];
        return this.markAsUpdated(), this
      }
      negateToRef(bb) {
        const ab = this._m,
          Ub = bb._m;
        for (let Ab = 0; Ab < 16; Ab++) Ub[Ab] = -ab[Ab];
        return bb.markAsUpdated(), bb
      }
      equals(bb) {
        const ab = bb;
        if (!ab) return !1;
        if ((this._isIdentity || ab._isIdentity) && !this._isIdentityDirty && !ab._isIdentityDirty) return this._isIdentity && ab._isIdentity;
        const Ub = this.m,
          Ab = ab.m;
        return Ub[0] === Ab[0] && Ub[1] === Ab[1] && Ub[2] === Ab[2] && Ub[3] === Ab[3] && Ub[4] === Ab[4] && Ub[5] === Ab[5] && Ub[6] === Ab[6] && Ub[7] === Ab[7] && Ub[8] === Ab[8] && Ub[9] === Ab[9] && Ub[10] === Ab[10] && Ub[11] === Ab[11] && Ub[12] === Ab[12] && Ub[13] === Ab[13] && Ub[14] === Ab[14] && Ub[15] === Ab[15]
      }
      equalsWithEpsilon(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Ub = this._m,
          Ab = bb.m;
        for (let Mb = 0; Mb < 16; Mb++)
          if (!(0, Yb.WithinEpsilon)(Ub[Mb], Ab[Mb], ab)) return !1;
        return !0
      }
      eEb() {
        const bb = this._m;
        for (let ab = 0; ab < 16; ab++)
          if (bb[ab] != (ab < 0 || arguments.length <= ab ? void 0 : arguments[ab])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new Rb)
      }
      floorToRef(bb) {
        const ab = this._m,
          Ub = bb._m;
        for (let Ab = 0; Ab < 16; Ab++) Ub[Ab] = Math.floor(ab[Ab]);
        return bb.markAsUpdated(), bb
      }
      fract() {
        return this.fractToRef(new Rb)
      }
      fractToRef(bb) {
        const ab = this._m,
          Ub = bb._m;
        for (let Ab = 0; Ab < 16; Ab++) Ub[Ab] = ab[Ab] - Math.floor(ab[Ab]);
        return bb.markAsUpdated(), bb
      }
      clone() {
        const bb = new Rb;
        return bb.EUb(this), bb
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let bb = vb(this._m[0]);
        for (let ab = 1; ab < 16; ab++) bb = 397 * bb ^ vb(this._m[ab]);
        return bb
      }
      decomposeToTransformNode(bb) {
        return bb.rotationQuaternion = bb.rotationQuaternion || new jb, this.decompose(bb.nY, bb.rotationQuaternion, bb.position)
      }
      decompose(bb, ab, Ub, Ab) {
        let Mb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return Ub && Ub.B3(0), bb && bb.B3(1), ab && ab.K9(0, 0, 0, 1), !0;
        const Tb = this._m;
        if (Ub && Ub.K9(Tb[12], Tb[13], Tb[14]), (bb = bb || kb.Pj[0]).x = Math.sqrt(Tb[0] * Tb[0] + Tb[1] * Tb[1] + Tb[2] * Tb[2]), bb.y = Math.sqrt(Tb[4] * Tb[4] + Tb[5] * Tb[5] + Tb[6] * Tb[6]), bb.z = Math.sqrt(Tb[8] * Tb[8] + Tb[9] * Tb[9] + Tb[10] * Tb[10]), Ab) {
          const ab = (Mb ? Ab.absoluteScaling.x : Ab.nY.x) < 0 ? -1 : 1,
            Ub = (Mb ? Ab.absoluteScaling.y : Ab.nY.y) < 0 ? -1 : 1,
            Tb = (Mb ? Ab.absoluteScaling.z : Ab.nY.z) < 0 ? -1 : 1;
          bb.x *= ab, bb.y *= Ub, bb.z *= Tb
        } else this.determinant() <= 0 && (bb.y *= -1);
        if (0 === bb._x || 0 === bb._y || 0 === bb._z) return ab && ab.K9(0, 0, 0, 1), !1;
        if (ab) {
          const Ub = 1 / bb._x,
            Ab = 1 / bb._y,
            Mb = 1 / bb._z;
          Rb.FromValuesToRef(Tb[0] * Ub, Tb[1] * Ub, Tb[2] * Ub, 0, Tb[4] * Ab, Tb[5] * Ab, Tb[6] * Ab, 0, Tb[8] * Mb, Tb[9] * Mb, Tb[10] * Mb, 0, 0, 0, 0, 1, kb.Matrix[0]), jb.FromRotationMatrixToRef(kb.Matrix[0], ab)
        }
        return !0
      }
      getRow(bb) {
        if (bb < 0 || bb > 3) return null;
        const ab = 4 * bb;
        return new Xb(this._m[ab + 0], this._m[ab + 1], this._m[ab + 2], this._m[ab + 3])
      }
      getRowToRef(bb, ab) {
        if (bb >= 0 && bb <= 3) {
          const Ub = 4 * bb;
          ab.x = this._m[Ub + 0], ab.y = this._m[Ub + 1], ab.z = this._m[Ub + 2], ab.w = this._m[Ub + 3]
        }
        return ab
      }
      setRow(bb, ab) {
        return this.setRowFromFloats(bb, ab.x, ab.y, ab.z, ab.w)
      }
      transpose() {
        const bb = new Rb;
        return Rb.TransposeToRef(this, bb), bb
      }
      transposeToRef(bb) {
        return Rb.TransposeToRef(this, bb), bb
      }
      setRowFromFloats(bb, ab, Ub, Ab, Mb) {
        if (bb < 0 || bb > 3) return this;
        const Tb = 4 * bb;
        return this._m[Tb + 0] = ab, this._m[Tb + 1] = Ub, this._m[Tb + 2] = Ab, this._m[Tb + 3] = Mb, this.markAsUpdated(), this
      }
      scale(bb) {
        const ab = new Rb;
        return this.scaleToRef(bb, ab), ab
      }
      scaleToRef(bb, ab) {
        for (let Ub = 0; Ub < 16; Ub++) ab._m[Ub] = this._m[Ub] * bb;
        return ab.markAsUpdated(), ab
      }
      scaleAndAddToRef(bb, ab) {
        for (let Ub = 0; Ub < 16; Ub++) ab._m[Ub] += this._m[Ub] * bb;
        return ab.markAsUpdated(), ab
      }
      scaleInPlace(bb) {
        const ab = this._m;
        for (let Ub = 0; Ub < 16; Ub++) ab[Ub] *= bb;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(bb) {
        const ab = kb.Matrix[0];
        this.invertToRef(ab), ab.transposeToRef(bb);
        const Ub = bb._m;
        return Rb.FromValuesToRef(Ub[0], Ub[1], Ub[2], 0, Ub[4], Ub[5], Ub[6], 0, Ub[8], Ub[9], Ub[10], 0, 0, 0, 0, 1, bb), bb
      }
      getRotationMatrix() {
        const bb = new Rb;
        return this.getRotationMatrixToRef(bb), bb
      }
      getRotationMatrixToRef(bb) {
        const ab = kb.Pj[0];
        if (!this.decompose(ab)) return Rb.IdentityToRef(bb), bb;
        const Ub = this._m,
          Ab = 1 / ab._x,
          Mb = 1 / ab._y,
          Tb = 1 / ab._z;
        return Rb.FromValuesToRef(Ub[0] * Ab, Ub[1] * Ab, Ub[2] * Ab, 0, Ub[4] * Mb, Ub[5] * Mb, Ub[6] * Mb, 0, Ub[8] * Tb, Ub[9] * Tb, Ub[10] * Tb, 0, 0, 0, 0, 1, bb), bb
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
        return this.multiplyToRef(Zb, this), this
      }
      static FromArray(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Ub = new Rb;
        return Rb.FromArrayToRef(bb, ab, Ub), Ub
      }
      static FromArrayToRef(bb, ab, Ub) {
        for (let Ab = 0; Ab < 16; Ab++) Ub._m[Ab] = bb[Ab + ab];
        return Ub.markAsUpdated(), Ub
      }
      static FromFloat32ArrayToRefScaled(bb, ab, Ub, Ab) {
        return Ab._m[0] = bb[0 + ab] * Ub, Ab._m[1] = bb[1 + ab] * Ub, Ab._m[2] = bb[2 + ab] * Ub, Ab._m[3] = bb[3 + ab] * Ub, Ab._m[4] = bb[4 + ab] * Ub, Ab._m[5] = bb[5 + ab] * Ub, Ab._m[6] = bb[6 + ab] * Ub, Ab._m[7] = bb[7 + ab] * Ub, Ab._m[8] = bb[8 + ab] * Ub, Ab._m[9] = bb[9 + ab] * Ub, Ab._m[10] = bb[10 + ab] * Ub, Ab._m[11] = bb[11 + ab] * Ub, Ab._m[12] = bb[12 + ab] * Ub, Ab._m[13] = bb[13 + ab] * Ub, Ab._m[14] = bb[14 + ab] * Ub, Ab._m[15] = bb[15 + ab] * Ub, Ab.markAsUpdated(), Ab
      }
      static get IdentityReadOnly() {
        return Rb._IdentityReadOnly
      }
      static FromValuesToRef(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb, Rb, kb) {
        const yb = kb._m;
        yb[0] = bb, yb[1] = ab, yb[2] = Ub, yb[3] = Ab, yb[4] = Mb, yb[5] = Tb, yb[6] = Eb, yb[7] = Yb, yb[8] = Bb, yb[9] = eb, yb[10] = vb, yb[11] = Lb, yb[12] = Pb, yb[13] = Xb, yb[14] = jb, yb[15] = Rb, kb.markAsUpdated()
      }
      static FromValues(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb, Lb, Pb, Xb, jb, kb) {
        const yb = new Rb,
          Zb = yb._m;
        return Zb[0] = bb, Zb[1] = ab, Zb[2] = Ub, Zb[3] = Ab, Zb[4] = Mb, Zb[5] = Tb, Zb[6] = Eb, Zb[7] = Yb, Zb[8] = Bb, Zb[9] = eb, Zb[10] = vb, Zb[11] = Lb, Zb[12] = Pb, Zb[13] = Xb, Zb[14] = jb, Zb[15] = kb, yb.markAsUpdated(), yb
      }
      static Compose(bb, ab, Ub) {
        const Ab = new Rb;
        return Rb.ComposeToRef(bb, ab, Ub, Ab), Ab
      }
      static ComposeToRef(bb, ab, Ub, Ab) {
        const Mb = Ab._m,
          Tb = ab._x,
          Eb = ab._y,
          Yb = ab._z,
          Bb = ab._w,
          eb = Tb + Tb,
          vb = Eb + Eb,
          Lb = Yb + Yb,
          Pb = Tb * eb,
          Xb = Tb * vb,
          jb = Tb * Lb,
          Rb = Eb * vb,
          kb = Eb * Lb,
          yb = Yb * Lb,
          Zb = Bb * eb,
          Db = Bb * vb,
          zb = Bb * Lb,
          xb = bb._x,
          ib = bb._y,
          fb = bb._z;
        return Mb[0] = (1 - (Rb + yb)) * xb, Mb[1] = (Xb + zb) * xb, Mb[2] = (jb - Db) * xb, Mb[3] = 0, Mb[4] = (Xb - zb) * ib, Mb[5] = (1 - (Pb + yb)) * ib, Mb[6] = (kb + Zb) * ib, Mb[7] = 0, Mb[8] = (jb + Db) * fb, Mb[9] = (kb - Zb) * fb, Mb[10] = (1 - (Pb + Rb)) * fb, Mb[11] = 0, Mb[12] = Ub._x, Mb[13] = Ub._y, Mb[14] = Ub._z, Mb[15] = 1, Ab.markAsUpdated(), Ab
      }
      static Identity() {
        const bb = Rb.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return bb._updateIdentityStatus(!0), bb
      }
      static IdentityToRef(bb) {
        return Rb.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, bb), bb._updateIdentityStatus(!0), bb
      }
      static Zero() {
        const bb = Rb.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return bb._updateIdentityStatus(!1), bb
      }
      static RotationX(bb) {
        const ab = new Rb;
        return Rb.RotationXToRef(bb, ab), ab
      }
      static Invert(bb) {
        const ab = new Rb;
        return bb.invertToRef(ab), ab
      }
      static RotationXToRef(bb, ab) {
        const Ub = Math.sin(bb),
          Ab = Math.cos(bb);
        return Rb.FromValuesToRef(1, 0, 0, 0, 0, Ab, Ub, 0, 0, -Ub, Ab, 0, 0, 0, 0, 1, ab), ab._updateIdentityStatus(1 === Ab && 0 === Ub), ab
      }
      static RotationY(bb) {
        const ab = new Rb;
        return Rb.RotationYToRef(bb, ab), ab
      }
      static RotationYToRef(bb, ab) {
        const Ub = Math.sin(bb),
          Ab = Math.cos(bb);
        return Rb.FromValuesToRef(Ab, 0, -Ub, 0, 0, 1, 0, 0, Ub, 0, Ab, 0, 0, 0, 0, 1, ab), ab._updateIdentityStatus(1 === Ab && 0 === Ub), ab
      }
      static RotationZ(bb) {
        const ab = new Rb;
        return Rb.RotationZToRef(bb, ab), ab
      }
      static RotationZToRef(bb, ab) {
        const Ub = Math.sin(bb),
          Ab = Math.cos(bb);
        return Rb.FromValuesToRef(Ab, Ub, 0, 0, -Ub, Ab, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, ab), ab._updateIdentityStatus(1 === Ab && 0 === Ub), ab
      }
      static RotationAxis(bb, ab) {
        const Ub = new Rb;
        return Rb.RotationAxisToRef(bb, ab, Ub), Ub
      }
      static RotationAxisToRef(bb, ab, Ub) {
        const Ab = Math.sin(-ab),
          Mb = Math.cos(-ab),
          Tb = 1 - Mb;
        bb = bb.normalizeToRef(kb.Pj[0]);
        const Eb = Ub._m;
        return Eb[0] = bb._x * bb._x * Tb + Mb, Eb[1] = bb._x * bb._y * Tb - bb._z * Ab, Eb[2] = bb._x * bb._z * Tb + bb._y * Ab, Eb[3] = 0, Eb[4] = bb._y * bb._x * Tb + bb._z * Ab, Eb[5] = bb._y * bb._y * Tb + Mb, Eb[6] = bb._y * bb._z * Tb - bb._x * Ab, Eb[7] = 0, Eb[8] = bb._z * bb._x * Tb - bb._y * Ab, Eb[9] = bb._z * bb._y * Tb + bb._x * Ab, Eb[10] = bb._z * bb._z * Tb + Mb, Eb[11] = 0, Eb[12] = 0, Eb[13] = 0, Eb[14] = 0, Eb[15] = 1, Ub.markAsUpdated(), Ub
      }
      static RotationAlignToRef(bb, ab, Ub) {
        let Mb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Tb = Pb.Dot(ab, bb),
          Eb = Ub._m;
        if (Tb < -1 + Ab.e) Eb[0] = -1, Eb[1] = 0, Eb[2] = 0, Eb[3] = 0, Eb[4] = 0, Eb[5] = Mb ? 1 : -1, Eb[6] = 0, Eb[7] = 0, Eb[8] = 0, Eb[9] = 0, Eb[10] = Mb ? -1 : 1, Eb[11] = 0;
        else {
          const Ub = Pb.Cross(ab, bb),
            Ab = 1 / (1 + Tb);
          Eb[0] = Ub._x * Ub._x * Ab + Tb, Eb[1] = Ub._y * Ub._x * Ab - Ub._z, Eb[2] = Ub._z * Ub._x * Ab + Ub._y, Eb[3] = 0, Eb[4] = Ub._x * Ub._y * Ab + Ub._z, Eb[5] = Ub._y * Ub._y * Ab + Tb, Eb[6] = Ub._z * Ub._y * Ab - Ub._x, Eb[7] = 0, Eb[8] = Ub._x * Ub._z * Ab - Ub._y, Eb[9] = Ub._y * Ub._z * Ab + Ub._x, Eb[10] = Ub._z * Ub._z * Ab + Tb, Eb[11] = 0
        }
        return Eb[12] = 0, Eb[13] = 0, Eb[14] = 0, Eb[15] = 1, Ub.markAsUpdated(), Ub
      }
      static RotationYawPitchRoll(bb, ab, Ub) {
        const Ab = new Rb;
        return Rb.RotationYawPitchRollToRef(bb, ab, Ub, Ab), Ab
      }
      static RotationYawPitchRollToRef(bb, ab, Ub, Ab) {
        return jb.RotationYawPitchRollToRef(bb, ab, Ub, kb.Quaternion[0]), kb.Quaternion[0].toRotationMatrix(Ab), Ab
      }
      static Scaling(bb, ab, Ub) {
        const Ab = new Rb;
        return Rb.ScalingToRef(bb, ab, Ub, Ab), Ab
      }
      static ScalingToRef(bb, ab, Ub, Ab) {
        return Rb.FromValuesToRef(bb, 0, 0, 0, 0, ab, 0, 0, 0, 0, Ub, 0, 0, 0, 0, 1, Ab), Ab._updateIdentityStatus(1 === bb && 1 === ab && 1 === Ub), Ab
      }
      static Translation(bb, ab, Ub) {
        const Ab = new Rb;
        return Rb.TranslationToRef(bb, ab, Ub, Ab), Ab
      }
      static TranslationToRef(bb, ab, Ub, Ab) {
        return Rb.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, bb, ab, Ub, 1, Ab), Ab._updateIdentityStatus(0 === bb && 0 === ab && 0 === Ub), Ab
      }
      static Lerp(bb, ab, Ub) {
        const Ab = new Rb;
        return Rb.LerpToRef(bb, ab, Ub, Ab), Ab
      }
      static LerpToRef(bb, ab, Ub, Ab) {
        const Mb = Ab._m,
          Tb = bb.m,
          Eb = ab.m;
        for (let Yb = 0; Yb < 16; Yb++) Mb[Yb] = Tb[Yb] * (1 - Ub) + Eb[Yb] * Ub;
        return Ab.markAsUpdated(), Ab
      }
      static DecomposeLerp(bb, ab, Ub) {
        const Ab = new Rb;
        return Rb.DecomposeLerpToRef(bb, ab, Ub, Ab), Ab
      }
      static DecomposeLerpToRef(bb, ab, Ub, Ab) {
        const Mb = kb.Pj[0],
          Tb = kb.Quaternion[0],
          Eb = kb.Pj[1];
        bb.decompose(Mb, Tb, Eb);
        const Yb = kb.Pj[2],
          Bb = kb.Quaternion[1],
          eb = kb.Pj[3];
        ab.decompose(Yb, Bb, eb);
        const vb = kb.Pj[4];
        Pb.LerpToRef(Mb, Yb, Ub, vb);
        const Lb = kb.Quaternion[2];
        jb.SlerpToRef(Tb, Bb, Ub, Lb);
        const Xb = kb.Pj[5];
        return Pb.LerpToRef(Eb, eb, Ub, Xb), Rb.ComposeToRef(vb, Lb, Xb, Ab), Ab
      }
      static LookAtLH(bb, ab, Ub) {
        const Ab = new Rb;
        return Rb.LookAtLHToRef(bb, ab, Ub, Ab), Ab
      }
      static LookAtLHToRef(bb, ab, Ub, Ab) {
        const Mb = kb.Pj[0],
          Tb = kb.Pj[1],
          Eb = kb.Pj[2];
        ab.subtractToRef(bb, Eb), Eb.normalize(), Pb.CrossToRef(Ub, Eb, Mb);
        const Yb = Mb.lengthSquared();
        0 === Yb ? Mb.x = 1 : Mb.normalizeFromLength(Math.sqrt(Yb)), Pb.CrossToRef(Eb, Mb, Tb), Tb.normalize();
        const Bb = -Pb.Dot(Mb, bb),
          eb = -Pb.Dot(Tb, bb),
          vb = -Pb.Dot(Eb, bb);
        return Rb.FromValuesToRef(Mb._x, Tb._x, Eb._x, 0, Mb._y, Tb._y, Eb._y, 0, Mb._z, Tb._z, Eb._z, 0, Bb, eb, vb, 1, Ab), Ab
      }
      static LookAtRH(bb, ab, Ub) {
        const Ab = new Rb;
        return Rb.LookAtRHToRef(bb, ab, Ub, Ab), Ab
      }
      static LookAtRHToRef(bb, ab, Ub, Ab) {
        const Mb = kb.Pj[0],
          Tb = kb.Pj[1],
          Eb = kb.Pj[2];
        bb.subtractToRef(ab, Eb), Eb.normalize(), Pb.CrossToRef(Ub, Eb, Mb);
        const Yb = Mb.lengthSquared();
        0 === Yb ? Mb.x = 1 : Mb.normalizeFromLength(Math.sqrt(Yb)), Pb.CrossToRef(Eb, Mb, Tb), Tb.normalize();
        const Bb = -Pb.Dot(Mb, bb),
          eb = -Pb.Dot(Tb, bb),
          vb = -Pb.Dot(Eb, bb);
        return Rb.FromValuesToRef(Mb._x, Tb._x, Eb._x, 0, Mb._y, Tb._y, Eb._y, 0, Mb._z, Tb._z, Eb._z, 0, Bb, eb, vb, 1, Ab), Ab
      }
      static LookDirectionLH(bb, ab) {
        const Ub = new Rb;
        return Rb.LookDirectionLHToRef(bb, ab, Ub), Ub
      }
      static LookDirectionLHToRef(bb, ab, Ub) {
        const Ab = kb.Pj[0];
        Ab.EUb(bb), Ab.scaleInPlace(-1);
        const Mb = kb.Pj[1];
        return Pb.CrossToRef(ab, Ab, Mb), Rb.FromValuesToRef(Mb._x, Mb._y, Mb._z, 0, ab._x, ab._y, ab._z, 0, Ab._x, Ab._y, Ab._z, 0, 0, 0, 0, 1, Ub), Ub
      }
      static LookDirectionRH(bb, ab) {
        const Ub = new Rb;
        return Rb.LookDirectionRHToRef(bb, ab, Ub), Ub
      }
      static LookDirectionRHToRef(bb, ab, Ub) {
        const Ab = kb.Pj[2];
        return Pb.CrossToRef(ab, bb, Ab), Rb.FromValuesToRef(Ab._x, Ab._y, Ab._z, 0, ab._x, ab._y, ab._z, 0, bb._x, bb._y, bb._z, 0, 0, 0, 0, 1, Ub), Ub
      }
      static OrthoLH(bb, ab, Ub, Ab, Mb) {
        const Tb = new Rb;
        return Rb.OrthoLHToRef(bb, ab, Ub, Ab, Tb, Mb), Tb
      }
      static OrthoLHToRef(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = 2 / bb,
          Yb = 2 / ab,
          Bb = 2 / (Ab - Ub),
          eb = -(Ab + Ub) / (Ab - Ub);
        return Rb.FromValuesToRef(Eb, 0, 0, 0, 0, Yb, 0, 0, 0, 0, Bb, 0, 0, 0, eb, 1, Mb), Tb && Mb.multiplyToRef(Zb, Mb), Mb._updateIdentityStatus(1 === Eb && 1 === Yb && 1 === Bb && 0 === eb), Mb
      }
      static OrthoOffCenterLH(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        const Yb = new Rb;
        return Rb.OrthoOffCenterLHToRef(bb, ab, Ub, Ab, Mb, Tb, Yb, Eb), Yb
      }
      static OrthoOffCenterLHToRef(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
        const Bb = 2 / (ab - bb),
          eb = 2 / (Ab - Ub),
          vb = 2 / (Tb - Mb),
          Lb = -(Tb + Mb) / (Tb - Mb),
          Pb = (bb + ab) / (bb - ab),
          Xb = (Ab + Ub) / (Ub - Ab);
        return Rb.FromValuesToRef(Bb, 0, 0, 0, 0, eb, 0, 0, 0, 0, vb, 0, Pb, Xb, Lb, 1, Eb), Yb && Eb.multiplyToRef(Zb, Eb), Eb.markAsUpdated(), Eb
      }
      static ObliqueOffCenterLHToRef(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb) {
        const Lb = -Eb * Math.cos(Yb),
          Pb = -Eb * Math.sin(Yb);
        return Rb.TranslationToRef(0, 0, -Bb, kb.Matrix[1]), Rb.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Lb, Pb, 1, 0, 0, 0, 0, 1, kb.Matrix[0]), kb.Matrix[1].multiplyToRef(kb.Matrix[0], kb.Matrix[0]), Rb.TranslationToRef(0, 0, Bb, kb.Matrix[1]), kb.Matrix[0].multiplyToRef(kb.Matrix[1], kb.Matrix[0]), Rb.OrthoOffCenterLHToRef(bb, ab, Ub, Ab, Mb, Tb, eb, vb), kb.Matrix[0].multiplyToRef(eb, eb), eb
      }
      static OrthoOffCenterRH(bb, ab, Ub, Ab, Mb, Tb, Eb) {
        const Yb = new Rb;
        return Rb.OrthoOffCenterRHToRef(bb, ab, Ub, Ab, Mb, Tb, Yb, Eb), Yb
      }
      static OrthoOffCenterRHToRef(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb) {
        return Rb.OrthoOffCenterLHToRef(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb), Eb._m[10] *= -1, Eb
      }
      static ObliqueOffCenterRHToRef(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb) {
        const Lb = Eb * Math.cos(Yb),
          Pb = Eb * Math.sin(Yb);
        return Rb.TranslationToRef(0, 0, Bb, kb.Matrix[1]), Rb.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Lb, Pb, 1, 0, 0, 0, 0, 1, kb.Matrix[0]), kb.Matrix[1].multiplyToRef(kb.Matrix[0], kb.Matrix[0]), Rb.TranslationToRef(0, 0, -Bb, kb.Matrix[1]), kb.Matrix[0].multiplyToRef(kb.Matrix[1], kb.Matrix[0]), Rb.OrthoOffCenterRHToRef(bb, ab, Ub, Ab, Mb, Tb, eb, vb), kb.Matrix[0].multiplyToRef(eb, eb), eb
      }
      static PerspectiveLH(bb, ab, Ub, Ab, Mb) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const Eb = new Rb,
          Yb = 2 * Ub / bb,
          Bb = 2 * Ub / ab,
          eb = (Ab + Ub) / (Ab - Ub),
          vb = -2 * Ab * Ub / (Ab - Ub),
          Lb = Math.tan(Tb);
        return Rb.FromValuesToRef(Yb, 0, 0, 0, 0, Bb, 0, Lb, 0, 0, eb, 1, 0, 0, vb, 0, Eb), Mb && Eb.multiplyToRef(Zb, Eb), Eb._updateIdentityStatus(!1), Eb
      }
      static PerspectiveFovLH(bb, ab, Ub, Ab, Mb) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Eb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Yb = new Rb;
        return Rb.PerspectiveFovLHToRef(bb, ab, Ub, Ab, Yb, !0, Mb, Tb, Eb), Yb
      }
      static PerspectiveFovLHToRef(bb, ab, Ub, Ab, Mb) {
        let Tb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Eb = arguments.length > 6 ? arguments[6] : void 0,
          Yb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Bb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const eb = Ub,
          vb = Ab,
          Lb = 1 / Math.tan(.5 * bb),
          Pb = Tb ? Lb / ab : Lb,
          Xb = Tb ? Lb : Lb * ab,
          jb = Bb && 0 === eb ? -1 : 0 !== vb ? (vb + eb) / (vb - eb) : 1,
          kb = Bb && 0 === eb ? 2 * vb : 0 !== vb ? -2 * vb * eb / (vb - eb) : -2 * eb,
          yb = Math.tan(Yb);
        return Rb.FromValuesToRef(Pb, 0, 0, 0, 0, Xb, 0, yb, 0, 0, jb, 1, 0, 0, kb, 0, Mb), Eb && Mb.multiplyToRef(Zb, Mb), Mb._updateIdentityStatus(!1), Mb
      }
      static PerspectiveFovReverseLHToRef(bb, ab, Ub, Ab, Mb) {
        let Tb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Eb = arguments.length > 6 ? arguments[6] : void 0,
          Yb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Bb = 1 / Math.tan(.5 * bb),
          eb = Tb ? Bb / ab : Bb,
          vb = Tb ? Bb : Bb * ab,
          Lb = Math.tan(Yb);
        return Rb.FromValuesToRef(eb, 0, 0, 0, 0, vb, 0, Lb, 0, 0, -Ub, 1, 0, 0, 1, 0, Mb), Eb && Mb.multiplyToRef(Zb, Mb), Mb._updateIdentityStatus(!1), Mb
      }
      static PerspectiveFovRH(bb, ab, Ub, Ab, Mb) {
        let Tb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Eb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Yb = new Rb;
        return Rb.PerspectiveFovRHToRef(bb, ab, Ub, Ab, Yb, !0, Mb, Tb, Eb), Yb
      }
      static PerspectiveFovRHToRef(bb, ab, Ub, Ab, Mb) {
        let Tb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Eb = arguments.length > 6 ? arguments[6] : void 0,
          Yb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Bb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const eb = Ub,
          vb = Ab,
          Lb = 1 / Math.tan(.5 * bb),
          Pb = Tb ? Lb / ab : Lb,
          Xb = Tb ? Lb : Lb * ab,
          jb = Bb && 0 === eb ? 1 : 0 !== vb ? -(vb + eb) / (vb - eb) : -1,
          kb = Bb && 0 === eb ? 2 * vb : 0 !== vb ? -2 * vb * eb / (vb - eb) : -2 * eb,
          yb = Math.tan(Yb);
        return Rb.FromValuesToRef(Pb, 0, 0, 0, 0, Xb, 0, yb, 0, 0, jb, -1, 0, 0, kb, 0, Mb), Eb && Mb.multiplyToRef(Zb, Mb), Mb._updateIdentityStatus(!1), Mb
      }
      static PerspectiveFovReverseRHToRef(bb, ab, Ub, Ab, Mb) {
        let Tb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Eb = arguments.length > 6 ? arguments[6] : void 0,
          Yb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Bb = 1 / Math.tan(.5 * bb),
          eb = Tb ? Bb / ab : Bb,
          vb = Tb ? Bb : Bb * ab,
          Lb = Math.tan(Yb);
        return Rb.FromValuesToRef(eb, 0, 0, 0, 0, vb, 0, Lb, 0, 0, -Ub, -1, 0, 0, -1, 0, Mb), Eb && Mb.multiplyToRef(Zb, Mb), Mb._updateIdentityStatus(!1), Mb
      }
      static GetFinalMatrix(bb, ab, Ub, Ab, Mb, Tb) {
        const Eb = bb.width,
          Yb = bb.height,
          Bb = bb.x,
          eb = bb.y,
          vb = Rb.FromValues(Eb / 2, 0, 0, 0, 0, -Yb / 2, 0, 0, 0, 0, Tb - Mb, 0, Bb + Eb / 2, Yb / 2 + eb, Mb, 1),
          Lb = new Rb;
        return ab.multiplyToRef(Ub, Lb), Lb.multiplyToRef(Ab, Lb), Lb.multiplyToRef(vb, Lb)
      }
      static GetAsMatrix2x2(bb) {
        const ab = bb.m,
          Ub = [ab[0], ab[1], ab[4], ab[5]];
        return Tb.b.MatrixUse64Bits ? Ub : new Float32Array(Ub)
      }
      static GetAsMatrix3x3(bb) {
        const ab = bb.m,
          Ub = [ab[0], ab[1], ab[2], ab[4], ab[5], ab[6], ab[8], ab[9], ab[10]];
        return Tb.b.MatrixUse64Bits ? Ub : new Float32Array(Ub)
      }
      static Transpose(bb) {
        const ab = new Rb;
        return Rb.TransposeToRef(bb, ab), ab
      }
      static TransposeToRef(bb, ab) {
        const Ub = bb.m,
          Ab = Ub[0],
          Mb = Ub[4],
          Tb = Ub[8],
          Eb = Ub[12],
          Yb = Ub[1],
          Bb = Ub[5],
          eb = Ub[9],
          vb = Ub[13],
          Lb = Ub[2],
          Pb = Ub[6],
          Xb = Ub[10],
          jb = Ub[14],
          Rb = Ub[3],
          kb = Ub[7],
          yb = Ub[11],
          Zb = Ub[15],
          Db = ab._m;
        return Db[0] = Ab, Db[1] = Mb, Db[2] = Tb, Db[3] = Eb, Db[4] = Yb, Db[5] = Bb, Db[6] = eb, Db[7] = vb, Db[8] = Lb, Db[9] = Pb, Db[10] = Xb, Db[11] = jb, Db[12] = Rb, Db[13] = kb, Db[14] = yb, Db[15] = Zb, ab.markAsUpdated(), ab._updateIdentityStatus(bb._isIdentity, bb._isIdentityDirty), ab
      }
      static Reflection(bb) {
        const ab = new Rb;
        return Rb.ReflectionToRef(bb, ab), ab
      }
      static ReflectionToRef(bb, ab) {
        bb.normalize();
        const Ub = bb.normal.x,
          Ab = bb.normal.y,
          Mb = bb.normal.z,
          Tb = -2 * Ub,
          Eb = -2 * Ab,
          Yb = -2 * Mb;
        return Rb.FromValuesToRef(Tb * Ub + 1, Eb * Ub, Yb * Ub, 0, Tb * Ab, Eb * Ab + 1, Yb * Ab, 0, Tb * Mb, Eb * Mb, Yb * Mb + 1, 0, Tb * bb.d, Eb * bb.d, Yb * bb.d, 1, ab), ab
      }
      static FromXYZAxesToRef(bb, ab, Ub, Ab) {
        return Rb.FromValuesToRef(bb._x, bb._y, bb._z, 0, ab._x, ab._y, ab._z, 0, Ub._x, Ub._y, Ub._z, 0, 0, 0, 0, 1, Ab), Ab
      }
      static FromQuaternionToRef(bb, ab) {
        const Ub = bb._x * bb._x,
          Ab = bb._y * bb._y,
          Mb = bb._z * bb._z,
          Tb = bb._x * bb._y,
          Eb = bb._z * bb._w,
          Yb = bb._z * bb._x,
          Bb = bb._y * bb._w,
          eb = bb._y * bb._z,
          vb = bb._x * bb._w;
        return ab._m[0] = 1 - 2 * (Ab + Mb), ab._m[1] = 2 * (Tb + Eb), ab._m[2] = 2 * (Yb - Bb), ab._m[3] = 0, ab._m[4] = 2 * (Tb - Eb), ab._m[5] = 1 - 2 * (Mb + Ub), ab._m[6] = 2 * (eb + vb), ab._m[7] = 0, ab._m[8] = 2 * (Yb + Bb), ab._m[9] = 2 * (eb - vb), ab._m[10] = 1 - 2 * (Ab + Ub), ab._m[11] = 0, ab._m[12] = 0, ab._m[13] = 0, ab._m[14] = 0, ab._m[15] = 1, ab.markAsUpdated(), ab
      }
    }
    Rb._IdentityReadOnly = Rb.Identity();
    class kb {}
    kb.Pj = (0, Mb.e)(11, Pb.Zero), kb.Matrix = (0, Mb.e)(2, Rb.Identity), kb.Quaternion = (0, Mb.e)(3, jb.Zero);
    class yb {}
    yb.Vector2 = (0, Mb.e)(3, Lb.Zero), yb.Pj = (0, Mb.e)(13, Pb.Zero), yb.Vector4 = (0, Mb.e)(3, Xb.Zero), yb.Quaternion = (0, Mb.e)(3, jb.Zero), yb.Matrix = (0, Mb.e)(8, Rb.Identity);
    const Zb = Rb.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let Db = !1;

    function zb() {
      Db || (Db = !0, Object.defineProperties(Lb.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Pb.prototype, {
        dimension: {
          value: [3]
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
      }), Object.defineProperties(jb.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Rb.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, eb.f)("BABYLON.Vector2", Lb), (0, eb.f)("BABYLON.Vector3", Pb), (0, eb.f)("BABYLON.Vector4", Xb), (0, eb.f)("BABYLON.Matrix", Rb))
    }
  },
  36431: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb
    });
    const Ab = "undefined" !== typeof WeakRef;
    class Mb {
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 ? arguments[2] : void 0,
          Ab = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(bb, ab, Ub, Ab)
      }
      initialize(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Ub = arguments.length > 2 ? arguments[2] : void 0,
          Ab = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = bb, this.skipNextObservers = ab, this.target = Ub, this.currentTarget = Ab, this
      }
    }
    class Tb {
      constructor(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = bb, this.mask = ab, this.scope = Ub, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(bb)
      }
    }
    class Eb {
      static FromPromise(bb, ab) {
        const Ub = new Eb;
        return bb.then((bb => {
          Ub.notifyObservers(bb)
        })).catch((bb => {
          if (!ab) throw bb;
          ab.notifyObservers(bb)
        })), Ub
      }
      get observers() {
        return this._observers
      }
      constructor(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = ab, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Mb(0), bb && (this._onObserverAdded = bb)
      }
      add(bb) {
        let ab = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Ub = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!bb) return null;
        const Mb = new Tb(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Mb.unregisterOnNextCall = Ub, ab ? this._observers.unshift(Mb) : this._observers.push(Mb), this._onObserverAdded && this._onObserverAdded(Mb), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Mb, this._lastNotifiedValue);
        const Eb = Ab ? new WeakRef(this) : {
          deref: () => this
        };
        return Mb._remove = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const ab = Eb.deref();
          ab && (bb ? ab.remove(Mb) : ab._remove(Mb))
        }, Mb
      }
      addOnce(bb) {
        return this.add(bb, void 0, void 0, void 0, !0)
      }
      remove(bb) {
        if (!bb) return !1;
        bb._remove = null;
        return -1 !== this._observers.indexOf(bb) && (this._deferUnregister(bb), !0)
      }
      removeCallback(bb, ab) {
        for (let Ub = 0; Ub < this._observers.length; Ub++) {
          const Ab = this._observers[Ub];
          if (!Ab._willBeUnregistered && (Ab.callback === bb && (!ab || ab === Ab.scope))) return this._deferUnregister(Ab), !0
        }
        return !1
      }
      _deferUnregister(bb) {
        bb._willBeUnregistered || (this._numObserversMarkedAsDeleted++, bb.unregisterOnNextCall = !1, bb._willBeUnregistered = !0, setTimeout((() => {
          this._remove(bb)
        }), 0))
      }
      _remove(bb) {
        let ab = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!bb) return !1;
        const Ub = this._observers.indexOf(bb);
        return -1 !== Ub && (ab && this._numObserversMarkedAsDeleted--, this._observers.splice(Ub, 1), !0)
      }
      makeObserverTopPriority(bb) {
        this._remove(bb, !1), this._observers.unshift(bb)
      }
      makeObserverBottomPriority(bb) {
        this._remove(bb, !1), this._observers.push(bb)
      }
      notifyObservers(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Ub = arguments.length > 2 ? arguments[2] : void 0,
          Ab = arguments.length > 3 ? arguments[3] : void 0,
          Mb = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = bb), !this._observers.length) return !0;
        const Tb = this._eventState;
        Tb.mask = ab, Tb.target = Ub, Tb.currentTarget = Ab, Tb.skipNextObservers = !1, Tb.lastReturnValue = bb, Tb.userInfo = Mb;
        for (const Eb of this._observers)
          if (!Eb._willBeUnregistered && (Eb.mask & ab && (Eb.unregisterOnNextCall && this._deferUnregister(Eb), Eb.scope ? Tb.lastReturnValue = Eb.callback.apply(Eb.scope, [bb, Tb]) : Tb.lastReturnValue = Eb.callback(bb, Tb)), Tb.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(bb, ab) {
        let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = ab), bb._willBeUnregistered) return;
        const Ab = this._eventState;
        Ab.mask = Ub, Ab.skipNextObservers = !1, bb.unregisterOnNextCall && this._deferUnregister(bb), bb.callback(ab, Ab)
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
        const bb = new Eb;
        return bb._observers = this._observers.slice(0), bb
      }
      hasSpecificMask() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const ab of this._observers)
          if (ab.mask & bb || ab.mask === bb) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);