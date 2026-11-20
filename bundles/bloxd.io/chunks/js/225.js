export const id = 225;
export const ids = [225];
export const modules = {
  36677: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Wb
    });
    var kb = sb(36683);
    class Wb {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Wb.Instances = [], Wb.OnEnginesDisposedObservable = new kb.c, Wb._LastCreatedScene = null, Wb.UseFallbackTexture = !0, Wb.FallbackTexture = ""
  },
  36672: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    class kb {
      static SetMatrixPrecision(bb) {
        if (kb.MatrixTrackPrecisionChange = !1, bb && !kb.MatrixUse64Bits && kb.MatrixTrackedMatrices)
          for (let cb = 0; cb < kb.MatrixTrackedMatrices.length; ++cb) {
            const bb = kb.MatrixTrackedMatrices[cb],
              sb = bb._m;
            bb._m = new Array(16);
            for (let cb = 0; cb < 16; ++cb) bb._m[cb] = sb[cb]
          }
        kb.MatrixUse64Bits = bb, kb.MatrixCurrentType = kb.MatrixUse64Bits ? Array : Float32Array, kb.MatrixTrackedMatrices = null
      }
    }
    kb.MatrixUse64Bits = !1, kb.MatrixTrackPrecisionChange = !0, kb.MatrixCurrentType = Float32Array, kb.MatrixTrackedMatrices = []
  },
  36693: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ub,
      e: () => Hb,
      h: () => Ib,
      j: () => kb,
      k: () => ab,
      n: () => Tb
    });
    class kb {}

    function Wb(bb) {
      bb.updateFlag = kb._UpdateFlagSeed++
    }

    function ab(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Wb = bb.Osb(),
        ab = cb.Osb(),
        Tb = Wb[0],
        Ub = Wb[1],
        Ib = Wb[2],
        Hb = Wb[3],
        fb = Wb[4],
        Mb = Wb[5],
        Xb = Wb[6],
        nb = Wb[7],
        mb = Wb[8],
        lb = Wb[9],
        Qb = Wb[10],
        eb = Wb[11],
        Cb = Wb[12],
        Nb = Wb[13],
        Vb = Wb[14],
        Lb = Wb[15],
        ub = ab[0],
        Yb = ab[1],
        hb = ab[2],
        Jb = ab[3],
        gb = ab[4],
        Bb = ab[5],
        tb = ab[6],
        yb = ab[7],
        Pb = ab[8],
        Db = ab[9],
        Eb = ab[10],
        ib = ab[11],
        Ob = ab[12],
        Gb = ab[13],
        Kb = ab[14],
        Zb = ab[15];
      sb[kb] = Tb * ub + Ub * gb + Ib * Pb + Hb * Ob, sb[kb + 1] = Tb * Yb + Ub * Bb + Ib * Db + Hb * Gb, sb[kb + 2] = Tb * hb + Ub * tb + Ib * Eb + Hb * Kb, sb[kb + 3] = Tb * Jb + Ub * yb + Ib * ib + Hb * Zb, sb[kb + 4] = fb * ub + Mb * gb + Xb * Pb + nb * Ob, sb[kb + 5] = fb * Yb + Mb * Bb + Xb * Db + nb * Gb, sb[kb + 6] = fb * hb + Mb * tb + Xb * Eb + nb * Kb, sb[kb + 7] = fb * Jb + Mb * yb + Xb * ib + nb * Zb, sb[kb + 8] = mb * ub + lb * gb + Qb * Pb + eb * Ob, sb[kb + 9] = mb * Yb + lb * Bb + Qb * Db + eb * Gb, sb[kb + 10] = mb * hb + lb * tb + Qb * Eb + eb * Kb, sb[kb + 11] = mb * Jb + lb * yb + Qb * ib + eb * Zb, sb[kb + 12] = Cb * ub + Nb * gb + Vb * Pb + Lb * Ob, sb[kb + 13] = Cb * Yb + Nb * Bb + Vb * Db + Lb * Gb, sb[kb + 14] = Cb * hb + Nb * tb + Vb * Eb + Lb * Kb, sb[kb + 15] = Cb * Jb + Nb * yb + Vb * ib + Lb * Zb
    }

    function Tb(bb, cb, sb) {
      let kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      ab(bb, cb, sb.Osb(), kb), Wb(sb)
    }

    function Ub(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const kb = bb.Osb();
      cb[sb] = kb[0], cb[sb + 1] = kb[1], cb[sb + 2] = kb[2], cb[sb + 3] = kb[3], cb[sb + 4] = kb[4], cb[sb + 5] = kb[5], cb[sb + 6] = kb[6], cb[sb + 7] = kb[7], cb[sb + 8] = kb[8], cb[sb + 9] = kb[9], cb[sb + 10] = kb[10], cb[sb + 11] = kb[11], cb[sb + 12] = kb[12], cb[sb + 13] = kb[13], cb[sb + 14] = kb[14], cb[sb + 15] = kb[15]
    }

    function Ib(bb, cb) {
      const sb = Hb(bb, cb.Osb());
      return sb && Wb(cb), sb
    }

    function Hb(bb, cb) {
      const sb = bb.Osb(),
        kb = sb[0],
        Wb = sb[1],
        ab = sb[2],
        Tb = sb[3],
        Ub = sb[4],
        Ib = sb[5],
        Hb = sb[6],
        fb = sb[7],
        Mb = sb[8],
        Xb = sb[9],
        nb = sb[10],
        mb = sb[11],
        lb = sb[12],
        Qb = sb[13],
        eb = sb[14],
        Cb = sb[15],
        Nb = nb * Cb - eb * mb,
        Vb = Xb * Cb - Qb * mb,
        Lb = Xb * eb - Qb * nb,
        ub = Mb * Cb - lb * mb,
        Yb = Mb * eb - nb * lb,
        hb = Mb * Qb - lb * Xb,
        Jb = +(Ib * Nb - Hb * Vb + fb * Lb),
        gb = -(Ub * Nb - Hb * ub + fb * Yb),
        Bb = +(Ub * Vb - Ib * ub + fb * hb),
        tb = -(Ub * Lb - Ib * Yb + Hb * hb),
        yb = kb * Jb + Wb * gb + ab * Bb + Tb * tb;
      if (0 === yb) return !1;
      const Pb = 1 / yb,
        Db = Hb * Cb - eb * fb,
        Eb = Ib * Cb - Qb * fb,
        ib = Ib * eb - Qb * Hb,
        Ob = Ub * Cb - lb * fb,
        Gb = Ub * eb - lb * Hb,
        Kb = Ub * Qb - lb * Ib,
        Zb = Hb * mb - nb * fb,
        zb = Ib * mb - Xb * fb,
        qb = Ib * nb - Xb * Hb,
        db = Ub * mb - Mb * fb,
        Ab = Ub * nb - Mb * Hb,
        wb = Ub * Xb - Mb * Ib,
        rb = -(Wb * Nb - ab * Vb + Tb * Lb),
        ob = +(kb * Nb - ab * ub + Tb * Yb),
        Sb = -(kb * Vb - Wb * ub + Tb * hb),
        Rb = +(kb * Lb - Wb * Yb + ab * hb),
        vb = +(Wb * Db - ab * Eb + Tb * ib),
        Fb = -(kb * Db - ab * Ob + Tb * Gb),
        xb = +(kb * Eb - Wb * Ob + Tb * Kb),
        jb = -(kb * ib - Wb * Gb + ab * Kb),
        pb = -(Wb * Zb - ab * zb + Tb * qb),
        bc = +(kb * Zb - ab * db + Tb * Ab),
        cc = -(kb * zb - Wb * db + Tb * wb),
        sc = +(kb * qb - Wb * Ab + ab * wb);
      return cb[0] = Jb * Pb, cb[1] = rb * Pb, cb[2] = vb * Pb, cb[3] = pb * Pb, cb[4] = gb * Pb, cb[5] = ob * Pb, cb[6] = Fb * Pb, cb[7] = bc * Pb, cb[8] = Bb * Pb, cb[9] = Sb * Pb, cb[10] = xb * Pb, cb[11] = cc * Pb, cb[12] = tb * Pb, cb[13] = Rb * Pb, cb[14] = jb * Pb, cb[15] = sc * Pb, !0
    }
    kb._UpdateFlagSeed = 0
  },
  36656: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => lb,
      f: () => mb,
      j: () => Vb,
      m: () => eb,
      n: () => Mb,
      p: () => Xb,
      t: () => nb
    });
    var kb = sb(36661),
      Wb = sb(36666),
      ab = sb(36672),
      Tb = sb(36677),
      Ub = sb(36688),
      Ib = sb(36693),
      Hb = sb(36698);
    const fb = bb => parseInt(bb.toString().replace(/\W/g, ""));
    class Mb {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = bb, this.y = cb
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let bb = fb(this.x);
        return bb = 397 * bb ^ fb(this.y), bb
      }
      toArray(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bb[cb] = this.x, bb[cb + 1] = this.y, this
      }
      Ncb(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Mb.FromArrayToRef(bb, cb, this), this
      }
      Osb() {
        return [this.x, this.y]
      }
      ssb(bb) {
        return this.x = bb.x, this.y = bb.y, this
      }
      I5(bb, cb) {
        return this.x = bb, this.y = cb, this
      }
      set(bb, cb) {
        return this.I5(bb, cb)
      }
      I6(bb) {
        return this.I5(bb, bb)
      }
      add(bb) {
        return new Mb(this.x + bb.x, this.y + bb.y)
      }
      addToRef(bb, cb) {
        return cb.x = this.x + bb.x, cb.y = this.y + bb.y, cb
      }
      addInPlace(bb) {
        return this.x += bb.x, this.y += bb.y, this
      }
      addInPlaceFromFloats(bb, cb) {
        return this.x += bb, this.y += cb, this
      }
      addVector3(bb) {
        return new Mb(this.x + bb.x, this.y + bb.y)
      }
      subtract(bb) {
        return new Mb(this.x - bb.x, this.y - bb.y)
      }
      subtractToRef(bb, cb) {
        return cb.x = this.x - bb.x, cb.y = this.y - bb.y, cb
      }
      Wkb(bb) {
        return this.x -= bb.x, this.y -= bb.y, this
      }
      multiplyInPlace(bb) {
        return this.x *= bb.x, this.y *= bb.y, this
      }
      multiply(bb) {
        return new Mb(this.x * bb.x, this.y * bb.y)
      }
      multiplyToRef(bb, cb) {
        return cb.x = this.x * bb.x, cb.y = this.y * bb.y, cb
      }
      multiplyByFloats(bb, cb) {
        return new Mb(this.x * bb, this.y * cb)
      }
      divide(bb) {
        return new Mb(this.x / bb.x, this.y / bb.y)
      }
      divideToRef(bb, cb) {
        return cb.x = this.x / bb.x, cb.y = this.y / bb.y, cb
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
      minimizeInPlaceFromFloats(bb, cb) {
        return this.x = Math.min(bb, this.x), this.y = Math.min(cb, this.y), this
      }
      maximizeInPlaceFromFloats(bb, cb) {
        return this.x = Math.max(bb, this.x), this.y = Math.max(cb, this.y), this
      }
      subtractFromFloats(bb, cb) {
        return new Mb(this.x - bb, this.y - cb)
      }
      subtractFromFloatsToRef(bb, cb, sb) {
        return sb.x = this.x - bb, sb.y = this.y - cb, sb
      }
      Of() {
        return new Mb(-this.x, -this.y)
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
        return new Mb(this.x * bb, this.y * bb)
      }
      scaleToRef(bb, cb) {
        return cb.x = this.x * bb, cb.y = this.y * bb, cb
      }
      scaleAndAddToRef(bb, cb) {
        return cb.x += this.x * bb, cb.y += this.y * bb, cb
      }
      equals(bb) {
        return bb && this.x === bb.x && this.y === bb.y
      }
      equalsWithEpsilon(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kb.d;
        return bb && (0, Ub.WithinEpsilon)(this.x, bb.x, cb) && (0, Ub.WithinEpsilon)(this.y, bb.y, cb)
      }
      CTb(bb, cb) {
        return this.x === bb && this.y === cb
      }
      floor() {
        return new Mb(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(bb) {
        return bb.x = Math.floor(this.x), bb.y = Math.floor(this.y), bb
      }
      fract() {
        return new Mb(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(bb) {
        return bb.x = this.x - Math.floor(this.x), bb.y = this.y - Math.floor(this.y), bb
      }
      rotate(bb) {
        return this.rotateToRef(bb, new Mb)
      }
      rotateToRef(bb, cb) {
        const sb = Math.cos(bb),
          kb = Math.sin(bb);
        return cb.x = sb * this.x - kb * this.y, cb.y = kb * this.x + sb * this.y, cb
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
        const bb = new Mb;
        return this.normalizeToRef(bb), bb
      }
      normalizeToRef(bb) {
        const cb = this.length();
        return 0 === cb || 1 === cb ? (bb.x = this.x, bb.y = this.y, bb) : this.scaleToRef(1 / cb, bb)
      }
      clone() {
        return new Mb(this.x, this.y)
      }
      dot(bb) {
        return this.x * bb.x + this.y * bb.y
      }
      static Zero() {
        return new Mb(0, 0)
      }
      static One() {
        return new Mb(1, 1)
      }
      static Random() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Mb((0, Ub.RandomRange)(bb, cb), (0, Ub.RandomRange)(bb, cb))
      }
      static RandomToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).I5((0, Ub.RandomRange)(bb, cb), (0, Ub.RandomRange)(bb, cb))
      }
      static get ZeroReadOnly() {
        return Mb._ZeroReadOnly
      }
      static FromArray(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Mb(bb[cb], bb[cb + 1])
      }
      static FromArrayToRef(bb, cb, sb) {
        return sb.x = bb[cb], sb.y = bb[cb + 1], sb
      }
      static FromFloatsToRef(bb, cb, sb) {
        return sb.I5(bb, cb), sb
      }
      static CatmullRom(bb, cb, sb, kb, Wb) {
        const ab = Wb * Wb,
          Tb = Wb * ab,
          Ub = .5 * (2 * cb.x + (-bb.x + sb.x) * Wb + (2 * bb.x - 5 * cb.x + 4 * sb.x - kb.x) * ab + (-bb.x + 3 * cb.x - 3 * sb.x + kb.x) * Tb),
          Ib = .5 * (2 * cb.y + (-bb.y + sb.y) * Wb + (2 * bb.y - 5 * cb.y + 4 * sb.y - kb.y) * ab + (-bb.y + 3 * cb.y - 3 * sb.y + kb.y) * Tb);
        return new Mb(Ub, Ib)
      }
      static ClampToRef(bb, cb, sb, kb) {
        return kb.x = (0, Ub.Clamp)(bb.x, cb.x, sb.x), kb.y = (0, Ub.Clamp)(bb.y, cb.y, sb.y), kb
      }
      static Clamp(bb, cb, sb) {
        const kb = (0, Ub.Clamp)(bb.x, cb.x, sb.x),
          Wb = (0, Ub.Clamp)(bb.y, cb.y, sb.y);
        return new Mb(kb, Wb)
      }
      static Hermite(bb, cb, sb, kb, Wb) {
        const ab = Wb * Wb,
          Tb = Wb * ab,
          Ub = 2 * Tb - 3 * ab + 1,
          Ib = -2 * Tb + 3 * ab,
          Hb = Tb - 2 * ab + Wb,
          fb = Tb - ab,
          Xb = bb.x * Ub + sb.x * Ib + cb.x * Hb + kb.x * fb,
          nb = bb.y * Ub + sb.y * Ib + cb.y * Hb + kb.y * fb;
        return new Mb(Xb, nb)
      }
      static Hermite1stDerivative(bb, cb, sb, kb, Wb) {
        return this.Hermite1stDerivativeToRef(bb, cb, sb, kb, Wb, new Mb)
      }
      static Hermite1stDerivativeToRef(bb, cb, sb, kb, Wb, ab) {
        const Tb = Wb * Wb;
        return ab.x = 6 * (Tb - Wb) * bb.x + (3 * Tb - 4 * Wb + 1) * cb.x + 6 * (-Tb + Wb) * sb.x + (3 * Tb - 2 * Wb) * kb.x, ab.y = 6 * (Tb - Wb) * bb.y + (3 * Tb - 4 * Wb + 1) * cb.y + 6 * (-Tb + Wb) * sb.y + (3 * Tb - 2 * Wb) * kb.y, ab
      }
      static Lerp(bb, cb, sb) {
        return Mb.LerpToRef(bb, cb, sb, new Mb)
      }
      static LerpToRef(bb, cb, sb, kb) {
        return kb.x = bb.x + (cb.x - bb.x) * sb, kb.y = bb.y + (cb.y - bb.y) * sb, kb
      }
      static Dot(bb, cb) {
        return bb.x * cb.x + bb.y * cb.y
      }
      static Normalize(bb) {
        return Mb.NormalizeToRef(bb, new Mb)
      }
      static NormalizeToRef(bb, cb) {
        return bb.normalizeToRef(cb), cb
      }
      static Minimize(bb, cb) {
        const sb = bb.x < cb.x ? bb.x : cb.x,
          kb = bb.y < cb.y ? bb.y : cb.y;
        return new Mb(sb, kb)
      }
      static Maximize(bb, cb) {
        const sb = bb.x > cb.x ? bb.x : cb.x,
          kb = bb.y > cb.y ? bb.y : cb.y;
        return new Mb(sb, kb)
      }
      static Transform(bb, cb) {
        return Mb.TransformToRef(bb, cb, new Mb)
      }
      static TransformToRef(bb, cb, sb) {
        const kb = cb.m,
          Wb = bb.x * kb[0] + bb.y * kb[4] + kb[12],
          ab = bb.x * kb[1] + bb.y * kb[5] + kb[13];
        return sb.x = Wb, sb.y = ab, sb
      }
      static PointInTriangle(bb, cb, sb, kb) {
        const Wb = .5 * (-sb.y * kb.x + cb.y * (-sb.x + kb.x) + cb.x * (sb.y - kb.y) + sb.x * kb.y),
          ab = Wb < 0 ? -1 : 1,
          Tb = (cb.y * kb.x - cb.x * kb.y + (kb.y - cb.y) * bb.x + (cb.x - kb.x) * bb.y) * ab,
          Ub = (cb.x * sb.y - cb.y * sb.x + (cb.y - sb.y) * bb.x + (sb.x - cb.x) * bb.y) * ab;
        return Tb > 0 && Ub > 0 && Tb + Ub < 2 * Wb * ab
      }
      static Distance(bb, cb) {
        return Math.sqrt(Mb.DistanceSquared(bb, cb))
      }
      static DistanceSquared(bb, cb) {
        const sb = bb.x - cb.x,
          kb = bb.y - cb.y;
        return sb * sb + kb * kb
      }
      static Center(bb, cb) {
        return Mb.CenterToRef(bb, cb, new Mb)
      }
      static CenterToRef(bb, cb, sb) {
        return sb.I5((bb.x + cb.x) / 2, (bb.y + cb.y) / 2)
      }
      static DistanceOfPointFromSegment(bb, cb, sb) {
        const kb = Mb.DistanceSquared(cb, sb);
        if (0 === kb) return Mb.Distance(bb, cb);
        const Wb = sb.subtract(cb),
          ab = Math.max(0, Math.min(1, Mb.Dot(bb.subtract(cb), Wb) / kb)),
          Tb = cb.add(Wb.multiplyByFloats(ab, ab));
        return Mb.Distance(bb, Tb)
      }
    }
    Mb._V8PerformanceHack = new Mb(.5, .5), Mb._ZeroReadOnly = Mb.Zero();
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
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = bb, this._y = cb, this._z = sb
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "Fm"
      }
      getHashCode() {
        let bb = fb(this._x);
        return bb = 397 * bb ^ fb(this._y), bb = 397 * bb ^ fb(this._z), bb
      }
      Osb() {
        return [this._x, this._y, this._z]
      }
      toArray(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bb[cb] = this._x, bb[cb + 1] = this._y, bb[cb + 2] = this._z, this
      }
      Ncb(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Xb.FromArrayToRef(bb, cb, this), this
      }
      toQuaternion() {
        return mb.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(bb) {
        return this._x += bb._x, this._y += bb._y, this._z += bb._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(bb, cb, sb) {
        return this._x += bb, this._y += cb, this._z += sb, this._isDirty = !0, this
      }
      add(bb) {
        return new Xb(this._x + bb._x, this._y + bb._y, this._z + bb._z)
      }
      addToRef(bb, cb) {
        return cb._x = this._x + bb._x, cb._y = this._y + bb._y, cb._z = this._z + bb._z, cb._isDirty = !0, cb
      }
      Wkb(bb) {
        return this._x -= bb._x, this._y -= bb._y, this._z -= bb._z, this._isDirty = !0, this
      }
      subtract(bb) {
        return new Xb(this._x - bb._x, this._y - bb._y, this._z - bb._z)
      }
      subtractToRef(bb, cb) {
        return this.subtractFromFloatsToRef(bb._x, bb._y, bb._z, cb)
      }
      subtractFromFloats(bb, cb, sb) {
        return new Xb(this._x - bb, this._y - cb, this._z - sb)
      }
      subtractFromFloatsToRef(bb, cb, sb, kb) {
        return kb._x = this._x - bb, kb._y = this._y - cb, kb._z = this._z - sb, kb._isDirty = !0, kb
      }
      Of() {
        return new Xb(-this._x, -this._y, -this._z)
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
        return new Xb(this._x * bb, this._y * bb, this._z * bb)
      }
      scaleToRef(bb, cb) {
        return cb._x = this._x * bb, cb._y = this._y * bb, cb._z = this._z * bb, cb._isDirty = !0, cb
      }
      getNormalToRef(bb) {
        const cb = this.length();
        let sb = Math.acos(this._y / cb);
        const kb = Math.atan2(this._z, this._x);
        sb > Math.PI / 2 ? sb -= Math.PI / 2 : sb += Math.PI / 2;
        const Wb = cb * Math.sin(sb) * Math.cos(kb),
          ab = cb * Math.cos(sb),
          Tb = cb * Math.sin(sb) * Math.sin(kb);
        return bb.set(Wb, ab, Tb), bb
      }
      applyRotationQuaternionToRef(bb, cb) {
        const sb = this._x,
          kb = this._y,
          Wb = this._z,
          ab = bb._x,
          Tb = bb._y,
          Ub = bb._z,
          Ib = bb._w,
          Hb = 2 * (Tb * Wb - Ub * kb),
          fb = 2 * (Ub * sb - ab * Wb),
          Mb = 2 * (ab * kb - Tb * sb);
        return cb._x = sb + Ib * Hb + Tb * Mb - Ub * fb, cb._y = kb + Ib * fb + Ub * Hb - ab * Mb, cb._z = Wb + Ib * Mb + ab * fb - Tb * Hb, cb._isDirty = !0, cb
      }
      applyRotationQuaternionInPlace(bb) {
        return this.applyRotationQuaternionToRef(bb, this)
      }
      applyRotationQuaternion(bb) {
        return this.applyRotationQuaternionToRef(bb, new Xb)
      }
      scaleAndAddToRef(bb, cb) {
        return cb._x += this._x * bb, cb._y += this._y * bb, cb._z += this._z * bb, cb._isDirty = !0, cb
      }
      projectOnPlane(bb, cb) {
        return this.projectOnPlaneToRef(bb, cb, new Xb)
      }
      projectOnPlaneToRef(bb, cb, sb) {
        const kb = bb.normal,
          Wb = bb.d,
          ab = Qb.Fm[0];
        this.subtractToRef(cb, ab), ab.normalize();
        const Tb = Xb.Dot(ab, kb);
        if (Math.abs(Tb) < 1e-10) sb.I6(1 / 0);
        else {
          const bb = -(Xb.Dot(cb, kb) + Wb) / Tb,
            Ub = ab.scaleInPlace(bb);
          cb.addToRef(Ub, sb)
        }
        return sb
      }
      equals(bb) {
        return bb && this._x === bb._x && this._y === bb._y && this._z === bb._z
      }
      equalsWithEpsilon(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kb.d;
        return bb && (0, Ub.WithinEpsilon)(this._x, bb._x, cb) && (0, Ub.WithinEpsilon)(this._y, bb._y, cb) && (0, Ub.WithinEpsilon)(this._z, bb._z, cb)
      }
      CTb(bb, cb, sb) {
        return this._x === bb && this._y === cb && this._z === sb
      }
      multiplyInPlace(bb) {
        return this._x *= bb._x, this._y *= bb._y, this._z *= bb._z, this._isDirty = !0, this
      }
      multiply(bb) {
        return this.multiplyByFloats(bb._x, bb._y, bb._z)
      }
      multiplyToRef(bb, cb) {
        return cb._x = this._x * bb._x, cb._y = this._y * bb._y, cb._z = this._z * bb._z, cb._isDirty = !0, cb
      }
      multiplyByFloats(bb, cb, sb) {
        return new Xb(this._x * bb, this._y * cb, this._z * sb)
      }
      divide(bb) {
        return new Xb(this._x / bb._x, this._y / bb._y, this._z / bb._z)
      }
      divideToRef(bb, cb) {
        return cb._x = this._x / bb._x, cb._y = this._y / bb._y, cb._z = this._z / bb._z, cb._isDirty = !0, cb
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
      minimizeInPlaceFromFloats(bb, cb, sb) {
        return bb < this._x && (this.x = bb), cb < this._y && (this.y = cb), sb < this._z && (this.z = sb), this
      }
      maximizeInPlaceFromFloats(bb, cb, sb) {
        return bb > this._x && (this.x = bb), cb > this._y && (this.y = cb), sb > this._z && (this.z = sb), this
      }
      isNonUniformWithinEpsilon(bb) {
        const cb = Math.abs(this._x),
          sb = Math.abs(this._y);
        if (!(0, Ub.WithinEpsilon)(cb, sb, bb)) return !0;
        const kb = Math.abs(this._z);
        return !(0, Ub.WithinEpsilon)(cb, kb, bb) || !(0, Ub.WithinEpsilon)(sb, kb, bb)
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
        return new Xb(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(bb) {
        return bb._x = this._x - Math.floor(this._x), bb._y = this._y - Math.floor(this._y), bb._z = this._z - Math.floor(this._z), bb._isDirty = !0, bb
      }
      fract() {
        return new Xb(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
        const cb = Qb.Fm[0].ssb(this);
        return this.x = cb[bb[0]], this.y = cb[bb[1]], this.z = cb[bb[2]], this
      }
      rotateByQuaternionToRef(bb, cb) {
        return bb.toRotationMatrix(Qb.Matrix[0]), Xb.TransformCoordinatesToRef(this, Qb.Matrix[0], cb), cb
      }
      rotateByQuaternionAroundPointToRef(bb, cb, sb) {
        return this.subtractToRef(cb, Qb.Fm[0]), Qb.Fm[0].rotateByQuaternionToRef(bb, Qb.Fm[0]), cb.addToRef(Qb.Fm[0], sb), sb
      }
      cross(bb) {
        return Xb.CrossToRef(this, bb, new Xb)
      }
      normalizeFromLength(bb) {
        return 0 === bb || 1 === bb ? this : this.scaleInPlace(1 / bb)
      }
      normalizeToNew() {
        return this.normalizeToRef(new Xb)
      }
      normalizeToRef(bb) {
        const cb = this.length();
        return 0 === cb || 1 === cb ? (bb._x = this._x, bb._y = this._y, bb._z = this._z, bb._isDirty = !0, bb) : this.scaleToRef(1 / cb, bb)
      }
      clone() {
        return new Xb(this._x, this._y, this._z)
      }
      ssb(bb) {
        return this.I5(bb._x, bb._y, bb._z)
      }
      I5(bb, cb, sb) {
        return this._x = bb, this._y = cb, this._z = sb, this._isDirty = !0, this
      }
      set(bb, cb, sb) {
        return this.I5(bb, cb, sb)
      }
      I6(bb) {
        return this._x = this._y = this._z = bb, this._isDirty = !0, this
      }
      static GetClipFactor(bb, cb, sb, kb) {
        const Wb = Xb.Dot(bb, sb);
        return (Wb - kb) / (Wb - Xb.Dot(cb, sb))
      }
      static GetAngleBetweenVectors(bb, cb, sb) {
        const kb = bb.normalizeToRef(Qb.Fm[1]),
          Wb = cb.normalizeToRef(Qb.Fm[2]);
        let ab = Xb.Dot(kb, Wb);
        ab = (0, Ub.Clamp)(ab, -1, 1);
        const Tb = Math.acos(ab),
          Ib = Qb.Fm[3];
        return Xb.CrossToRef(kb, Wb, Ib), Xb.Dot(Ib, sb) > 0 ? isNaN(Tb) ? 0 : Tb : isNaN(Tb) ? -Math.PI : -Math.acos(ab)
      }
      static GetAngleBetweenVectorsOnPlane(bb, cb, sb) {
        Qb.Fm[0].ssb(bb);
        const kb = Qb.Fm[0];
        Qb.Fm[1].ssb(cb);
        const Wb = Qb.Fm[1];
        Qb.Fm[2].ssb(sb);
        const ab = Qb.Fm[2],
          Tb = Qb.Fm[3],
          Ib = Qb.Fm[4];
        kb.normalize(), Wb.normalize(), ab.normalize(), Xb.CrossToRef(ab, kb, Tb), Xb.CrossToRef(Tb, ab, Ib);
        const Hb = Math.atan2(Xb.Dot(Wb, Tb), Xb.Dot(Wb, Ib));
        return (0, Ub.NormalizeRadians)(Hb)
      }
      static PitchYawRollToMoveBetweenPointsToRef(bb, cb, sb) {
        const kb = eb.Fm[0];
        return cb.subtractToRef(bb, kb), sb._y = Math.atan2(kb.x, kb.z) || 0, sb._x = Math.atan2(Math.sqrt(kb.x ** 2 + kb.z ** 2), kb.y) || 0, sb._z = 0, sb._isDirty = !0, sb
      }
      static PitchYawRollToMoveBetweenPoints(bb, cb) {
        const sb = Xb.Zero();
        return Xb.PitchYawRollToMoveBetweenPointsToRef(bb, cb, sb)
      }
      static SlerpToRef(bb, cb, sb, Wb) {
        sb = (0, Ub.Clamp)(sb, 0, 1);
        const ab = Qb.Fm[0],
          Tb = Qb.Fm[1];
        ab.ssb(bb);
        const Ib = ab.length();
        ab.normalizeFromLength(Ib), Tb.ssb(cb);
        const Hb = Tb.length();
        Tb.normalizeFromLength(Hb);
        const fb = Xb.Dot(ab, Tb);
        let Mb, nb;
        if (fb < 1 - kb.d) {
          const bb = Math.acos(fb),
            cb = 1 / Math.sin(bb);
          Mb = Math.sin((1 - sb) * bb) * cb, nb = Math.sin(sb * bb) * cb
        } else Mb = 1 - sb, nb = sb;
        return ab.scaleInPlace(Mb), Tb.scaleInPlace(nb), Wb.ssb(ab).addInPlace(Tb), Wb.scaleInPlace((0, Ub.Lerp)(Ib, Hb, sb)), Wb
      }
      static SmoothToRef(bb, cb, sb, kb, Wb) {
        return Xb.SlerpToRef(bb, cb, 0 === kb ? 1 : sb / kb, Wb), Wb
      }
      static FromArray(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Xb(bb[cb], bb[cb + 1], bb[cb + 2])
      }
      static FromFloatArray(bb, cb) {
        return Xb.FromArray(bb, cb)
      }
      static FromArrayToRef(bb, cb, sb) {
        return sb._x = bb[cb], sb._y = bb[cb + 1], sb._z = bb[cb + 2], sb._isDirty = !0, sb
      }
      static FromFloatArrayToRef(bb, cb, sb) {
        return Xb.FromArrayToRef(bb, cb, sb)
      }
      static FromFloatsToRef(bb, cb, sb, kb) {
        return kb.I5(bb, cb, sb), kb
      }
      static Zero() {
        return new Xb(0, 0, 0)
      }
      static One() {
        return new Xb(1, 1, 1)
      }
      static Up() {
        return new Xb(0, 1, 0)
      }
      static get UpReadOnly() {
        return Xb._UpReadOnly
      }
      static get DownReadOnly() {
        return Xb._DownReadOnly
      }
      static get RightReadOnly() {
        return Xb._RightReadOnly
      }
      static get LeftReadOnly() {
        return Xb._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return Xb._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return Xb._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return Xb._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return Xb._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return Xb._ZeroReadOnly
      }
      static get OneReadOnly() {
        return Xb._OneReadOnly
      }
      static Down() {
        return new Xb(0, -1, 0)
      }
      static Forward() {
        return new Xb(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new Xb(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new Xb(1, 0, 0)
      }
      static Left() {
        return new Xb(-1, 0, 0)
      }
      static Random() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Xb((0, Ub.RandomRange)(bb, cb), (0, Ub.RandomRange)(bb, cb), (0, Ub.RandomRange)(bb, cb))
      }
      static RandomToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).I5((0, Ub.RandomRange)(bb, cb), (0, Ub.RandomRange)(bb, cb), (0, Ub.RandomRange)(bb, cb))
      }
      static TransformCoordinates(bb, cb) {
        const sb = Xb.Zero();
        return Xb.TransformCoordinatesToRef(bb, cb, sb), sb
      }
      static TransformCoordinatesToRef(bb, cb, sb) {
        return Xb.TransformCoordinatesFromFloatsToRef(bb._x, bb._y, bb._z, cb, sb), sb
      }
      static TransformCoordinatesFromFloatsToRef(bb, cb, sb, kb, Wb) {
        const ab = kb.m,
          Tb = bb * ab[0] + cb * ab[4] + sb * ab[8] + ab[12],
          Ub = bb * ab[1] + cb * ab[5] + sb * ab[9] + ab[13],
          Ib = bb * ab[2] + cb * ab[6] + sb * ab[10] + ab[14],
          Hb = 1 / (bb * ab[3] + cb * ab[7] + sb * ab[11] + ab[15]);
        return Wb._x = Tb * Hb, Wb._y = Ub * Hb, Wb._z = Ib * Hb, Wb._isDirty = !0, Wb
      }
      static TransformNormal(bb, cb) {
        const sb = Xb.Zero();
        return Xb.TransformNormalToRef(bb, cb, sb), sb
      }
      static TransformNormalToRef(bb, cb, sb) {
        return this.TransformNormalFromFloatsToRef(bb._x, bb._y, bb._z, cb, sb), sb
      }
      static TransformNormalFromFloatsToRef(bb, cb, sb, kb, Wb) {
        const ab = kb.m;
        return Wb._x = bb * ab[0] + cb * ab[4] + sb * ab[8], Wb._y = bb * ab[1] + cb * ab[5] + sb * ab[9], Wb._z = bb * ab[2] + cb * ab[6] + sb * ab[10], Wb._isDirty = !0, Wb
      }
      static CatmullRom(bb, cb, sb, kb, Wb) {
        const ab = Wb * Wb,
          Tb = Wb * ab,
          Ub = .5 * (2 * cb._x + (-bb._x + sb._x) * Wb + (2 * bb._x - 5 * cb._x + 4 * sb._x - kb._x) * ab + (-bb._x + 3 * cb._x - 3 * sb._x + kb._x) * Tb),
          Ib = .5 * (2 * cb._y + (-bb._y + sb._y) * Wb + (2 * bb._y - 5 * cb._y + 4 * sb._y - kb._y) * ab + (-bb._y + 3 * cb._y - 3 * sb._y + kb._y) * Tb),
          Hb = .5 * (2 * cb._z + (-bb._z + sb._z) * Wb + (2 * bb._z - 5 * cb._z + 4 * sb._z - kb._z) * ab + (-bb._z + 3 * cb._z - 3 * sb._z + kb._z) * Tb);
        return new Xb(Ub, Ib, Hb)
      }
      static Clamp(bb, cb, sb) {
        const kb = new Xb;
        return Xb.ClampToRef(bb, cb, sb, kb), kb
      }
      static ClampToRef(bb, cb, sb, kb) {
        let Wb = bb._x;
        Wb = Wb > sb._x ? sb._x : Wb, Wb = Wb < cb._x ? cb._x : Wb;
        let ab = bb._y;
        ab = ab > sb._y ? sb._y : ab, ab = ab < cb._y ? cb._y : ab;
        let Tb = bb._z;
        return Tb = Tb > sb._z ? sb._z : Tb, Tb = Tb < cb._z ? cb._z : Tb, kb.I5(Wb, ab, Tb), kb
      }
      static CheckExtends(bb, cb, sb) {
        cb.minimizeInPlace(bb), sb.maximizeInPlace(bb)
      }
      static Hermite(bb, cb, sb, kb, Wb) {
        const ab = Wb * Wb,
          Tb = Wb * ab,
          Ub = 2 * Tb - 3 * ab + 1,
          Ib = -2 * Tb + 3 * ab,
          Hb = Tb - 2 * ab + Wb,
          fb = Tb - ab,
          Mb = bb._x * Ub + sb._x * Ib + cb._x * Hb + kb._x * fb,
          nb = bb._y * Ub + sb._y * Ib + cb._y * Hb + kb._y * fb,
          mb = bb._z * Ub + sb._z * Ib + cb._z * Hb + kb._z * fb;
        return new Xb(Mb, nb, mb)
      }
      static Hermite1stDerivative(bb, cb, sb, kb, Wb) {
        const ab = new Xb;
        return this.Hermite1stDerivativeToRef(bb, cb, sb, kb, Wb, ab), ab
      }
      static Hermite1stDerivativeToRef(bb, cb, sb, kb, Wb, ab) {
        const Tb = Wb * Wb;
        return ab._x = 6 * (Tb - Wb) * bb._x + (3 * Tb - 4 * Wb + 1) * cb._x + 6 * (-Tb + Wb) * sb._x + (3 * Tb - 2 * Wb) * kb._x, ab._y = 6 * (Tb - Wb) * bb._y + (3 * Tb - 4 * Wb + 1) * cb._y + 6 * (-Tb + Wb) * sb._y + (3 * Tb - 2 * Wb) * kb._y, ab._z = 6 * (Tb - Wb) * bb._z + (3 * Tb - 4 * Wb + 1) * cb._z + 6 * (-Tb + Wb) * sb._z + (3 * Tb - 2 * Wb) * kb._z, ab._isDirty = !0, ab
      }
      static Lerp(bb, cb, sb) {
        const kb = new Xb(0, 0, 0);
        return Xb.LerpToRef(bb, cb, sb, kb), kb
      }
      static LerpToRef(bb, cb, sb, kb) {
        return kb._x = bb._x + (cb._x - bb._x) * sb, kb._y = bb._y + (cb._y - bb._y) * sb, kb._z = bb._z + (cb._z - bb._z) * sb, kb._isDirty = !0, kb
      }
      static Dot(bb, cb) {
        return bb._x * cb._x + bb._y * cb._y + bb._z * cb._z
      }
      dot(bb) {
        return this._x * bb._x + this._y * bb._y + this._z * bb._z
      }
      static Cross(bb, cb) {
        const sb = new Xb;
        return Xb.CrossToRef(bb, cb, sb), sb
      }
      static CrossToRef(bb, cb, sb) {
        const kb = bb._y * cb._z - bb._z * cb._y,
          Wb = bb._z * cb._x - bb._x * cb._z,
          ab = bb._x * cb._y - bb._y * cb._x;
        return sb.I5(kb, Wb, ab), sb
      }
      static Normalize(bb) {
        const cb = Xb.Zero();
        return Xb.NormalizeToRef(bb, cb), cb
      }
      static NormalizeToRef(bb, cb) {
        return bb.normalizeToRef(cb), cb
      }
      static Project(bb, cb, sb, kb) {
        const Wb = new Xb;
        return Xb.ProjectToRef(bb, cb, sb, kb, Wb), Wb
      }
      static ProjectToRef(bb, cb, sb, kb, Wb) {
        const ab = kb.width,
          Ub = kb.height,
          Ib = kb.x,
          Hb = kb.y,
          fb = Qb.Matrix[1],
          Mb = Tb.d.LastCreatedEngine?.isNDCHalfZRange,
          nb = Mb ? 1 : .5,
          mb = Mb ? 0 : .5;
        lb.FromValuesToRef(ab / 2, 0, 0, 0, 0, -Ub / 2, 0, 0, 0, 0, nb, 0, Ib + ab / 2, Ub / 2 + Hb, mb, 1, fb);
        const eb = Qb.Matrix[0];
        return cb.multiplyToRef(sb, eb), eb.multiplyToRef(fb, eb), Xb.TransformCoordinatesToRef(bb, eb, Wb), Wb
      }
      static Reflect(bb, cb) {
        return this.ReflectToRef(bb, cb, new Xb)
      }
      static ReflectToRef(bb, cb, sb) {
        const kb = eb.Fm[0];
        return kb.ssb(cb).scaleInPlace(2 * Xb.Dot(bb, cb)), sb.ssb(bb).Wkb(kb)
      }
      static UnprojectFromTransform(bb, cb, sb, kb, Wb) {
        return this.Unproject(bb, cb, sb, kb, Wb, lb.IdentityReadOnly)
      }
      static Unproject(bb, cb, sb, kb, Wb, ab) {
        const Tb = new Xb;
        return Xb.UnprojectToRef(bb, cb, sb, kb, Wb, ab, Tb), Tb
      }
      static UnprojectToRef(bb, cb, sb, kb, Wb, ab, Tb) {
        return Xb.UnprojectFloatsToRef(bb._x, bb._y, bb._z, cb, sb, kb, Wb, ab, Tb), Tb
      }
      static UnprojectFloatsToRef(bb, cb, sb, kb, Wb, ab, Ub, Ib, Hb) {
        const fb = Qb.Matrix[0];
        ab.multiplyToRef(Ub, fb), fb.multiplyToRef(Ib, fb), fb.invert();
        const Mb = Qb.Fm[0];
        return Mb.x = bb / kb * 2 - 1, Mb.y = -(cb / Wb * 2 - 1), Tb.d.LastCreatedEngine?.isNDCHalfZRange ? Mb.z = sb : Mb.z = 2 * sb - 1, Xb.TransformCoordinatesToRef(Mb, fb, Hb), Hb
      }
      static Minimize(bb, cb) {
        const sb = new Xb;
        return sb.ssb(bb), sb.minimizeInPlace(cb), sb
      }
      static Maximize(bb, cb) {
        const sb = new Xb;
        return sb.ssb(bb), sb.maximizeInPlace(cb), sb
      }
      static Distance(bb, cb) {
        return Math.sqrt(Xb.DistanceSquared(bb, cb))
      }
      static DistanceSquared(bb, cb) {
        const sb = bb._x - cb._x,
          kb = bb._y - cb._y,
          Wb = bb._z - cb._z;
        return sb * sb + kb * kb + Wb * Wb
      }
      static ProjectOnTriangleToRef(bb, cb, sb, Wb, ab) {
        const Tb = Qb.Fm[0],
          Ib = Qb.Fm[1],
          Hb = Qb.Fm[2],
          fb = Qb.Fm[3],
          Mb = Qb.Fm[4];
        sb.subtractToRef(cb, Tb), Wb.subtractToRef(cb, Ib), Wb.subtractToRef(sb, Hb);
        const nb = Tb.length(),
          mb = Ib.length(),
          lb = Hb.length();
        if (nb < kb.d || mb < kb.d || lb < kb.d) return ab.ssb(cb), Xb.Distance(bb, cb);
        bb.subtractToRef(cb, Mb), Xb.CrossToRef(Tb, Ib, fb);
        const eb = fb.length();
        if (eb < kb.d) return ab.ssb(cb), Xb.Distance(bb, cb);
        fb.normalizeFromLength(eb);
        let Cb = Mb.length();
        if (Cb < kb.d) return ab.ssb(cb), 0;
        Mb.normalizeFromLength(Cb);
        const Nb = Xb.Dot(fb, Mb),
          Vb = Qb.Fm[5],
          Lb = Qb.Fm[6];
        Vb.ssb(fb).scaleInPlace(-Cb * Nb), Lb.ssb(bb).addInPlace(Vb);
        const ub = Qb.Fm[4],
          Yb = Qb.Fm[5],
          hb = Qb.Fm[7],
          Jb = Qb.Fm[8];
        ub.ssb(Tb).scaleInPlace(1 / nb), Jb.ssb(Ib).scaleInPlace(1 / mb), ub.addInPlace(Jb).scaleInPlace(-1), Yb.ssb(Tb).scaleInPlace(-1 / nb), Jb.ssb(Hb).scaleInPlace(1 / lb), Yb.addInPlace(Jb).scaleInPlace(-1), hb.ssb(Hb).scaleInPlace(-1 / lb), Jb.ssb(Ib).scaleInPlace(-1 / mb), hb.addInPlace(Jb).scaleInPlace(-1);
        const gb = Qb.Fm[9];
        let Bb;
        gb.ssb(Lb).Wkb(cb), Xb.CrossToRef(ub, gb, Jb), Bb = Xb.Dot(Jb, fb);
        const tb = Bb;
        gb.ssb(Lb).Wkb(sb), Xb.CrossToRef(Yb, gb, Jb), Bb = Xb.Dot(Jb, fb);
        const yb = Bb;
        gb.ssb(Lb).Wkb(Wb), Xb.CrossToRef(hb, gb, Jb), Bb = Xb.Dot(Jb, fb);
        const Pb = Bb,
          Db = Qb.Fm[10];
        let Eb, ib;
        tb > 0 && yb < 0 ? (Db.ssb(Tb), Eb = cb, ib = sb) : yb > 0 && Pb < 0 ? (Db.ssb(Hb), Eb = sb, ib = Wb) : (Db.ssb(Ib).scaleInPlace(-1), Eb = Wb, ib = cb);
        const Ob = Qb.Fm[9],
          Gb = Qb.Fm[4];
        Eb.subtractToRef(Lb, Jb), ib.subtractToRef(Lb, Ob), Xb.CrossToRef(Jb, Ob, Gb);
        if (!(Xb.Dot(Gb, fb) < 0)) return ab.ssb(Lb), Math.abs(Cb * Nb);
        const Kb = Qb.Fm[5];
        Xb.CrossToRef(Db, Gb, Kb), Kb.normalize();
        const Zb = Qb.Fm[9];
        Zb.ssb(Eb).Wkb(Lb);
        const zb = Zb.length();
        if (zb < kb.d) return ab.ssb(Eb), Xb.Distance(bb, Eb);
        Zb.normalizeFromLength(zb);
        const qb = Xb.Dot(Kb, Zb),
          db = Qb.Fm[7];
        db.ssb(Lb).addInPlace(Kb.scaleInPlace(zb * qb)), Jb.ssb(db).Wkb(Eb), Cb = Db.length(), Db.normalizeFromLength(Cb);
        let Ab = Xb.Dot(Jb, Db) / Math.max(Cb, kb.d);
        return Ab = (0, Ub.Clamp)(Ab, 0, 1), db.ssb(Eb).addInPlace(Db.scaleInPlace(Ab * Cb)), ab.ssb(db), Xb.Distance(bb, db)
      }
      static Center(bb, cb) {
        return Xb.CenterToRef(bb, cb, Xb.Zero())
      }
      static CenterToRef(bb, cb, sb) {
        return sb.I5((bb._x + cb._x) / 2, (bb._y + cb._y) / 2, (bb._z + cb._z) / 2)
      }
      static RotationFromAxis(bb, cb, sb) {
        const kb = new Xb;
        return Xb.RotationFromAxisToRef(bb, cb, sb, kb), kb
      }
      static RotationFromAxisToRef(bb, cb, sb, kb) {
        const Wb = Qb.Quaternion[0];
        return mb.RotationQuaternionFromAxisToRef(bb, cb, sb, Wb), Wb.toEulerAnglesToRef(kb), kb
      }
    }
    Xb._V8PerformanceHack = new Xb(.5, .5, .5), Xb._UpReadOnly = Xb.Up(), Xb._DownReadOnly = Xb.Down(), Xb._LeftHandedForwardReadOnly = Xb.Forward(!1), Xb._RightHandedForwardReadOnly = Xb.Forward(!0), Xb._LeftHandedBackwardReadOnly = Xb.Backward(!1), Xb._RightHandedBackwardReadOnly = Xb.Backward(!0), Xb._RightReadOnly = Xb.Right(), Xb._LeftReadOnly = Xb.Left(), Xb._ZeroReadOnly = Xb.Zero(), Xb._OneReadOnly = Xb.One();
    class nb {
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
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = bb, this._y = cb, this._z = sb, this._w = kb
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let bb = fb(this._x);
        return bb = 397 * bb ^ fb(this._y), bb = 397 * bb ^ fb(this._z), bb = 397 * bb ^ fb(this._w), bb
      }
      Osb() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(bb, cb) {
        return void 0 === cb && (cb = 0), bb[cb] = this._x, bb[cb + 1] = this._y, bb[cb + 2] = this._z, bb[cb + 3] = this._w, this
      }
      Ncb(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return nb.FromArrayToRef(bb, cb, this), this
      }
      addInPlace(bb) {
        return this.x += bb._x, this.y += bb._y, this.z += bb._z, this.w += bb._w, this
      }
      addInPlaceFromFloats(bb, cb, sb, kb) {
        return this.x += bb, this.y += cb, this.z += sb, this.w += kb, this
      }
      add(bb) {
        return new nb(this._x + bb.x, this._y + bb.y, this._z + bb.z, this._w + bb.w)
      }
      addToRef(bb, cb) {
        return cb.x = this._x + bb.x, cb.y = this._y + bb.y, cb.z = this._z + bb.z, cb.w = this._w + bb.w, cb
      }
      Wkb(bb) {
        return this.x -= bb.x, this.y -= bb.y, this.z -= bb.z, this.w -= bb.w, this
      }
      subtract(bb) {
        return new nb(this._x - bb.x, this._y - bb.y, this._z - bb.z, this._w - bb.w)
      }
      subtractToRef(bb, cb) {
        return cb.x = this._x - bb.x, cb.y = this._y - bb.y, cb.z = this._z - bb.z, cb.w = this._w - bb.w, cb
      }
      subtractFromFloats(bb, cb, sb, kb) {
        return new nb(this._x - bb, this._y - cb, this._z - sb, this._w - kb)
      }
      subtractFromFloatsToRef(bb, cb, sb, kb, Wb) {
        return Wb.x = this._x - bb, Wb.y = this._y - cb, Wb.z = this._z - sb, Wb.w = this._w - kb, Wb
      }
      Of() {
        return new nb(-this._x, -this._y, -this._z, -this._w)
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
        return new nb(this._x * bb, this._y * bb, this._z * bb, this._w * bb)
      }
      scaleToRef(bb, cb) {
        return cb.x = this._x * bb, cb.y = this._y * bb, cb.z = this._z * bb, cb.w = this._w * bb, cb
      }
      scaleAndAddToRef(bb, cb) {
        return cb.x += this._x * bb, cb.y += this._y * bb, cb.z += this._z * bb, cb.w += this._w * bb, cb
      }
      equals(bb) {
        return bb && this._x === bb.x && this._y === bb.y && this._z === bb.z && this._w === bb.w
      }
      equalsWithEpsilon(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kb.d;
        return bb && (0, Ub.WithinEpsilon)(this._x, bb.x, cb) && (0, Ub.WithinEpsilon)(this._y, bb.y, cb) && (0, Ub.WithinEpsilon)(this._z, bb.z, cb) && (0, Ub.WithinEpsilon)(this._w, bb.w, cb)
      }
      CTb(bb, cb, sb, kb) {
        return this._x === bb && this._y === cb && this._z === sb && this._w === kb
      }
      multiplyInPlace(bb) {
        return this.x *= bb.x, this.y *= bb.y, this.z *= bb.z, this.w *= bb.w, this
      }
      multiply(bb) {
        return new nb(this._x * bb.x, this._y * bb.y, this._z * bb.z, this._w * bb.w)
      }
      multiplyToRef(bb, cb) {
        return cb.x = this._x * bb.x, cb.y = this._y * bb.y, cb.z = this._z * bb.z, cb.w = this._w * bb.w, cb
      }
      multiplyByFloats(bb, cb, sb, kb) {
        return new nb(this._x * bb, this._y * cb, this._z * sb, this._w * kb)
      }
      divide(bb) {
        return new nb(this._x / bb.x, this._y / bb.y, this._z / bb.z, this._w / bb.w)
      }
      divideToRef(bb, cb) {
        return cb.x = this._x / bb.x, cb.y = this._y / bb.y, cb.z = this._z / bb.z, cb.w = this._w / bb.w, cb
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
      minimizeInPlaceFromFloats(bb, cb, sb, kb) {
        return this.x = Math.min(bb, this._x), this.y = Math.min(cb, this._y), this.z = Math.min(sb, this._z), this.w = Math.min(kb, this._w), this
      }
      maximizeInPlaceFromFloats(bb, cb, sb, kb) {
        return this.x = Math.max(bb, this._x), this.y = Math.max(cb, this._y), this.z = Math.max(sb, this._z), this.w = Math.max(kb, this._w), this
      }
      floorToRef(bb) {
        return bb.x = Math.floor(this._x), bb.y = Math.floor(this._y), bb.z = Math.floor(this._z), bb.w = Math.floor(this._w), bb
      }
      floor() {
        return new nb(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(bb) {
        return bb.x = this._x - Math.floor(this._x), bb.y = this._y - Math.floor(this._y), bb.z = this._z - Math.floor(this._z), bb.w = this._w - Math.floor(this._w), bb
      }
      fract() {
        return new nb(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
        return this.normalizeToRef(new nb)
      }
      normalizeToRef(bb) {
        const cb = this.length();
        return 0 === cb || 1 === cb ? (bb.x = this._x, bb.y = this._y, bb.z = this._z, bb.w = this._w, bb) : this.scaleToRef(1 / cb, bb)
      }
      toVector3() {
        return new Xb(this._x, this._y, this._z)
      }
      clone() {
        return new nb(this._x, this._y, this._z, this._w)
      }
      ssb(bb) {
        return this.x = bb.x, this.y = bb.y, this.z = bb.z, this.w = bb.w, this
      }
      I5(bb, cb, sb, kb) {
        return this.x = bb, this.y = cb, this.z = sb, this.w = kb, this
      }
      set(bb, cb, sb, kb) {
        return this.I5(bb, cb, sb, kb)
      }
      I6(bb) {
        return this.x = this.y = this.z = this.w = bb, this
      }
      dot(bb) {
        return this._x * bb.x + this._y * bb.y + this._z * bb.z + this._w * bb.w
      }
      static FromArray(bb, cb) {
        return cb || (cb = 0), new nb(bb[cb], bb[cb + 1], bb[cb + 2], bb[cb + 3])
      }
      static FromArrayToRef(bb, cb, sb) {
        return sb.x = bb[cb], sb.y = bb[cb + 1], sb.z = bb[cb + 2], sb.w = bb[cb + 3], sb
      }
      static FromFloatArrayToRef(bb, cb, sb) {
        return nb.FromArrayToRef(bb, cb, sb), sb
      }
      static FromFloatsToRef(bb, cb, sb, kb, Wb) {
        return Wb.x = bb, Wb.y = cb, Wb.z = sb, Wb.w = kb, Wb
      }
      static Zero() {
        return new nb(0, 0, 0, 0)
      }
      static One() {
        return new nb(1, 1, 1, 1)
      }
      static Random() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new nb((0, Ub.RandomRange)(bb, cb), (0, Ub.RandomRange)(bb, cb), (0, Ub.RandomRange)(bb, cb), (0, Ub.RandomRange)(bb, cb))
      }
      static RandomToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        return sb.x = (0, Ub.RandomRange)(bb, cb), sb.y = (0, Ub.RandomRange)(bb, cb), sb.z = (0, Ub.RandomRange)(bb, cb), sb.w = (0, Ub.RandomRange)(bb, cb), sb
      }
      static Clamp(bb, cb, sb) {
        return nb.ClampToRef(bb, cb, sb, new nb)
      }
      static ClampToRef(bb, cb, sb, kb) {
        return kb.x = (0, Ub.Clamp)(bb.x, cb.x, sb.x), kb.y = (0, Ub.Clamp)(bb.y, cb.y, sb.y), kb.z = (0, Ub.Clamp)(bb.z, cb.z, sb.z), kb.w = (0, Ub.Clamp)(bb.w, cb.w, sb.w), kb
      }
      static CheckExtends(bb, cb, sb) {
        cb.minimizeInPlace(bb), sb.maximizeInPlace(bb)
      }
      static get ZeroReadOnly() {
        return nb._ZeroReadOnly
      }
      static Normalize(bb) {
        return nb.NormalizeToRef(bb, new nb)
      }
      static NormalizeToRef(bb, cb) {
        return bb.normalizeToRef(cb), cb
      }
      static Minimize(bb, cb) {
        const sb = new nb;
        return sb.ssb(bb), sb.minimizeInPlace(cb), sb
      }
      static Maximize(bb, cb) {
        const sb = new nb;
        return sb.ssb(bb), sb.maximizeInPlace(cb), sb
      }
      static Distance(bb, cb) {
        return Math.sqrt(nb.DistanceSquared(bb, cb))
      }
      static DistanceSquared(bb, cb) {
        const sb = bb.x - cb.x,
          kb = bb.y - cb.y,
          Wb = bb.z - cb.z,
          ab = bb.w - cb.w;
        return sb * sb + kb * kb + Wb * Wb + ab * ab
      }
      static Center(bb, cb) {
        return nb.CenterToRef(bb, cb, new nb)
      }
      static CenterToRef(bb, cb, sb) {
        return sb.x = (bb.x + cb.x) / 2, sb.y = (bb.y + cb.y) / 2, sb.z = (bb.z + cb.z) / 2, sb.w = (bb.w + cb.w) / 2, sb
      }
      static TransformCoordinates(bb, cb) {
        return nb.TransformCoordinatesToRef(bb, cb, new nb)
      }
      static TransformCoordinatesToRef(bb, cb, sb) {
        return nb.TransformCoordinatesFromFloatsToRef(bb._x, bb._y, bb._z, cb, sb), sb
      }
      static TransformCoordinatesFromFloatsToRef(bb, cb, sb, kb, Wb) {
        const ab = kb.m,
          Tb = bb * ab[0] + cb * ab[4] + sb * ab[8] + ab[12],
          Ub = bb * ab[1] + cb * ab[5] + sb * ab[9] + ab[13],
          Ib = bb * ab[2] + cb * ab[6] + sb * ab[10] + ab[14],
          Hb = bb * ab[3] + cb * ab[7] + sb * ab[11] + ab[15];
        return Wb.x = Tb, Wb.y = Ub, Wb.z = Ib, Wb.w = Hb, Wb
      }
      static TransformNormal(bb, cb) {
        return nb.TransformNormalToRef(bb, cb, new nb)
      }
      static TransformNormalToRef(bb, cb, sb) {
        const kb = cb.m,
          Wb = bb.x * kb[0] + bb.y * kb[4] + bb.z * kb[8],
          ab = bb.x * kb[1] + bb.y * kb[5] + bb.z * kb[9],
          Tb = bb.x * kb[2] + bb.y * kb[6] + bb.z * kb[10];
        return sb.x = Wb, sb.y = ab, sb.z = Tb, sb.w = bb.w, sb
      }
      static TransformNormalFromFloatsToRef(bb, cb, sb, kb, Wb, ab) {
        const Tb = Wb.m;
        return ab.x = bb * Tb[0] + cb * Tb[4] + sb * Tb[8], ab.y = bb * Tb[1] + cb * Tb[5] + sb * Tb[9], ab.z = bb * Tb[2] + cb * Tb[6] + sb * Tb[10], ab.w = kb, ab
      }
      static FromVector3(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new nb(bb._x, bb._y, bb._z, cb)
      }
      static Dot(bb, cb) {
        return bb.x * cb.x + bb.y * cb.y + bb.z * cb.z + bb.w * cb.w
      }
    }
    nb._V8PerformanceHack = new nb(.5, .5, .5, .5), nb._ZeroReadOnly = nb.Zero();
    class mb {
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
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          kb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = bb, this._y = cb, this._z = sb, this._w = kb
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let bb = fb(this._x);
        return bb = 397 * bb ^ fb(this._y), bb = 397 * bb ^ fb(this._z), bb = 397 * bb ^ fb(this._w), bb
      }
      Osb() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bb[cb] = this._x, bb[cb + 1] = this._y, bb[cb + 2] = this._z, bb[cb + 3] = this._w, this
      }
      Ncb(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return mb.FromArrayToRef(bb, cb, this)
      }
      equals(bb) {
        return bb && this._x === bb._x && this._y === bb._y && this._z === bb._z && this._w === bb._w
      }
      equalsWithEpsilon(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kb.d;
        return bb && (0, Ub.WithinEpsilon)(this._x, bb._x, cb) && (0, Ub.WithinEpsilon)(this._y, bb._y, cb) && (0, Ub.WithinEpsilon)(this._z, bb._z, cb) && (0, Ub.WithinEpsilon)(this._w, bb._w, cb)
      }
      isApprox(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : kb.d;
        return bb && ((0, Ub.WithinEpsilon)(this._x, bb._x, cb) && (0, Ub.WithinEpsilon)(this._y, bb._y, cb) && (0, Ub.WithinEpsilon)(this._z, bb._z, cb) && (0, Ub.WithinEpsilon)(this._w, bb._w, cb) || (0, Ub.WithinEpsilon)(this._x, -bb._x, cb) && (0, Ub.WithinEpsilon)(this._y, -bb._y, cb) && (0, Ub.WithinEpsilon)(this._z, -bb._z, cb) && (0, Ub.WithinEpsilon)(this._w, -bb._w, cb))
      }
      clone() {
        return new mb(this._x, this._y, this._z, this._w)
      }
      ssb(bb) {
        return this._x = bb._x, this._y = bb._y, this._z = bb._z, this._w = bb._w, this._isDirty = !0, this
      }
      I5(bb, cb, sb, kb) {
        return this._x = bb, this._y = cb, this._z = sb, this._w = kb, this._isDirty = !0, this
      }
      set(bb, cb, sb, kb) {
        return this.I5(bb, cb, sb, kb)
      }
      I6(bb) {
        return this.I5(bb, bb, bb, bb)
      }
      add(bb) {
        return new mb(this._x + bb._x, this._y + bb._y, this._z + bb._z, this._w + bb._w)
      }
      addInPlace(bb) {
        return this._x += bb._x, this._y += bb._y, this._z += bb._z, this._w += bb._w, this._isDirty = !0, this
      }
      addToRef(bb, cb) {
        return cb._x = this._x + bb._x, cb._y = this._y + bb._y, cb._z = this._z + bb._z, cb._w = this._w + bb._w, cb._isDirty = !0, cb
      }
      addInPlaceFromFloats(bb, cb, sb, kb) {
        return this._x += bb, this._y += cb, this._z += sb, this._w += kb, this._isDirty = !0, this
      }
      subtractToRef(bb, cb) {
        return cb._x = this._x - bb._x, cb._y = this._y - bb._y, cb._z = this._z - bb._z, cb._w = this._w - bb._w, cb._isDirty = !0, cb
      }
      subtractFromFloats(bb, cb, sb, kb) {
        return this.subtractFromFloatsToRef(bb, cb, sb, kb, new mb)
      }
      subtractFromFloatsToRef(bb, cb, sb, kb, Wb) {
        return Wb._x = this._x - bb, Wb._y = this._y - cb, Wb._z = this._z - sb, Wb._w = this._w - kb, Wb._isDirty = !0, Wb
      }
      subtract(bb) {
        return new mb(this._x - bb._x, this._y - bb._y, this._z - bb._z, this._w - bb._w)
      }
      Wkb(bb) {
        return this._x -= bb._x, this._y -= bb._y, this._z -= bb._z, this._w -= bb._w, this._isDirty = !0, this
      }
      scale(bb) {
        return new mb(this._x * bb, this._y * bb, this._z * bb, this._w * bb)
      }
      scaleToRef(bb, cb) {
        return cb._x = this._x * bb, cb._y = this._y * bb, cb._z = this._z * bb, cb._w = this._w * bb, cb._isDirty = !0, cb
      }
      scaleInPlace(bb) {
        return this._x *= bb, this._y *= bb, this._z *= bb, this._w *= bb, this._isDirty = !0, this
      }
      scaleAndAddToRef(bb, cb) {
        return cb._x += this._x * bb, cb._y += this._y * bb, cb._z += this._z * bb, cb._w += this._w * bb, cb._isDirty = !0, cb
      }
      multiply(bb) {
        const cb = new mb(0, 0, 0, 1);
        return this.multiplyToRef(bb, cb), cb
      }
      multiplyToRef(bb, cb) {
        const sb = this._x * bb._w + this._y * bb._z - this._z * bb._y + this._w * bb._x,
          kb = -this._x * bb._z + this._y * bb._w + this._z * bb._x + this._w * bb._y,
          Wb = this._x * bb._y - this._y * bb._x + this._z * bb._w + this._w * bb._z,
          ab = -this._x * bb._x - this._y * bb._y - this._z * bb._z + this._w * bb._w;
        return cb.I5(sb, kb, Wb, ab), cb
      }
      multiplyInPlace(bb) {
        return this.multiplyToRef(bb, this)
      }
      multiplyByFloats(bb, cb, sb, kb) {
        return this._x *= bb, this._y *= cb, this._z *= sb, this._w *= kb, this._isDirty = !0, this
      }
      divide(bb) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(bb, cb) {
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
      Of() {
        return this.negateToRef(new mb)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(bb) {
        return bb._x = -this._x, bb._y = -this._y, bb._z = -this._z, bb._w = -this._w, bb._isDirty = !0, bb
      }
      CTb(bb, cb, sb, kb) {
        return this._x === bb && this._y === cb && this._z === sb && this._w === kb
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
        return bb.I5(-this._x, -this._y, -this._z, this._w), bb
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new mb(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const bb = this.conjugate(),
          cb = this.lengthSquared();
        return 0 == cb || 1 == cb || bb.scaleInPlace(1 / cb), bb
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
        const bb = new mb(0, 0, 0, 1);
        return this.normalizeToRef(bb), bb
      }
      normalizeToRef(bb) {
        const cb = this.length();
        return 0 === cb || 1 === cb ? bb.I5(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / cb, bb)
      }
      toEulerAngles() {
        const bb = Xb.Zero();
        return this.toEulerAnglesToRef(bb), bb
      }
      toEulerAnglesToRef(bb) {
        const cb = this._z,
          sb = this._x,
          kb = this._y,
          Wb = this._w,
          ab = kb * cb - sb * Wb,
          Tb = .4999999;
        if (ab < -Tb) bb._y = 2 * Math.atan2(kb, Wb), bb._x = Math.PI / 2, bb._z = 0, bb._isDirty = !0;
        else if (ab > Tb) bb._y = 2 * Math.atan2(kb, Wb), bb._x = -Math.PI / 2, bb._z = 0, bb._isDirty = !0;
        else {
          const Tb = Wb * Wb,
            Ub = cb * cb,
            Ib = sb * sb,
            Hb = kb * kb;
          bb._z = Math.atan2(2 * (sb * kb + cb * Wb), -Ub - Ib + Hb + Tb), bb._x = Math.asin(-2 * ab), bb._y = Math.atan2(2 * (cb * sb + kb * Wb), Ub - Ib - Hb + Tb), bb._isDirty = !0
        }
        return bb
      }
      toAlphaBetaGammaToRef(bb) {
        const cb = this._z,
          sb = this._x,
          kb = this._y,
          Wb = this._w,
          ab = Math.sqrt(sb * sb + kb * kb),
          Tb = Math.sqrt(cb * cb + Wb * Wb),
          Ub = 2 * Math.atan2(ab, Tb),
          Ib = 2 * Math.atan2(cb, Wb),
          Hb = 2 * Math.atan2(kb, sb),
          fb = (Ib + Hb) / 2,
          Mb = (Ib - Hb) / 2;
        return bb.set(Mb, Ub, fb), bb
      }
      toRotationMatrix(bb) {
        return lb.FromQuaternionToRef(this, bb), bb
      }
      fromRotationMatrix(bb) {
        return mb.FromRotationMatrixToRef(bb, this), this
      }
      dot(bb) {
        return this._x * bb._x + this._y * bb._y + this._z * bb._z + this._w * bb._w
      }
      toAxisAngle() {
        const bb = Xb.Zero();
        return {
          axis: bb,
          angle: this.toAxisAngleToRef(bb)
        }
      }
      toAxisAngleToRef(bb) {
        let cb;
        const sb = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          kb = this._w;
        return sb > 0 ? (cb = 2 * Math.atan2(sb, kb), bb.set(this._x / sb, this._y / sb, this._z / sb)) : (cb = 0, bb.set(1, 0, 0)), cb
      }
      static FromRotationMatrix(bb) {
        const cb = new mb;
        return mb.FromRotationMatrixToRef(bb, cb), cb
      }
      static FromRotationMatrixToRef(bb, cb) {
        const sb = bb.m,
          kb = sb[0],
          Wb = sb[4],
          ab = sb[8],
          Tb = sb[1],
          Ub = sb[5],
          Ib = sb[9],
          Hb = sb[2],
          fb = sb[6],
          Mb = sb[10],
          Xb = kb + Ub + Mb;
        let nb;
        return Xb > 0 ? (nb = .5 / Math.sqrt(Xb + 1), cb._w = .25 / nb, cb._x = (fb - Ib) * nb, cb._y = (ab - Hb) * nb, cb._z = (Tb - Wb) * nb, cb._isDirty = !0) : kb > Ub && kb > Mb ? (nb = 2 * Math.sqrt(1 + kb - Ub - Mb), cb._w = (fb - Ib) / nb, cb._x = .25 * nb, cb._y = (Wb + Tb) / nb, cb._z = (ab + Hb) / nb, cb._isDirty = !0) : Ub > Mb ? (nb = 2 * Math.sqrt(1 + Ub - kb - Mb), cb._w = (ab - Hb) / nb, cb._x = (Wb + Tb) / nb, cb._y = .25 * nb, cb._z = (Ib + fb) / nb, cb._isDirty = !0) : (nb = 2 * Math.sqrt(1 + Mb - kb - Ub), cb._w = (Tb - Wb) / nb, cb._x = (ab + Hb) / nb, cb._y = (Ib + fb) / nb, cb._z = .25 * nb, cb._isDirty = !0), cb
      }
      static Dot(bb, cb) {
        return bb._x * cb._x + bb._y * cb._y + bb._z * cb._z + bb._w * cb._w
      }
      static AreClose(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const kb = mb.Dot(bb, cb);
        return 1 - kb * kb <= sb
      }
      static SmoothToRef(bb, cb, sb, kb, Wb) {
        let ab = 0 === kb ? 1 : sb / kb;
        return ab = (0, Ub.Clamp)(ab, 0, 1), mb.SlerpToRef(bb, cb, ab, Wb), Wb
      }
      static Zero() {
        return new mb(0, 0, 0, 0)
      }
      static Inverse(bb) {
        return new mb(-bb._x, -bb._y, -bb._z, bb._w)
      }
      static InverseToRef(bb, cb) {
        return cb.set(-bb._x, -bb._y, -bb._z, bb._w), cb
      }
      static Identity() {
        return new mb(0, 0, 0, 1)
      }
      static IsIdentity(bb) {
        return bb && 0 === bb._x && 0 === bb._y && 0 === bb._z && 1 === bb._w
      }
      static RotationAxis(bb, cb) {
        return mb.RotationAxisToRef(bb, cb, new mb)
      }
      static RotationAxisToRef(bb, cb, sb) {
        sb._w = Math.cos(cb / 2);
        const kb = Math.sin(cb / 2) / bb.length();
        return sb._x = bb._x * kb, sb._y = bb._y * kb, sb._z = bb._z * kb, sb._isDirty = !0, sb
      }
      static FromArray(bb, cb) {
        return cb || (cb = 0), new mb(bb[cb], bb[cb + 1], bb[cb + 2], bb[cb + 3])
      }
      static FromArrayToRef(bb, cb, sb) {
        return sb._x = bb[cb], sb._y = bb[cb + 1], sb._z = bb[cb + 2], sb._w = bb[cb + 3], sb._isDirty = !0, sb
      }
      static FromFloatsToRef(bb, cb, sb, kb, Wb) {
        return Wb.I5(bb, cb, sb, kb), Wb
      }
      static FromEulerAngles(bb, cb, sb) {
        const kb = new mb;
        return mb.RotationYawPitchRollToRef(cb, bb, sb, kb), kb
      }
      static FromEulerAnglesToRef(bb, cb, sb, kb) {
        return mb.RotationYawPitchRollToRef(cb, bb, sb, kb), kb
      }
      static FromEulerVector(bb) {
        const cb = new mb;
        return mb.RotationYawPitchRollToRef(bb._y, bb._x, bb._z, cb), cb
      }
      static FromEulerVectorToRef(bb, cb) {
        return mb.RotationYawPitchRollToRef(bb._y, bb._x, bb._z, cb), cb
      }
      static FromUnitVectorsToRef(bb, cb, sb) {
        let Wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : kb.d;
        const ab = Xb.Dot(bb, cb) + 1;
        return ab < Wb ? Math.abs(bb.x) > Math.abs(bb.z) ? sb.set(-bb.y, bb.x, 0, 0) : sb.set(0, -bb.z, bb.y, 0) : (Xb.CrossToRef(bb, cb, eb.Fm[0]), sb.set(eb.Fm[0].x, eb.Fm[0].y, eb.Fm[0].z, ab)), sb.normalize()
      }
      static RotationYawPitchRoll(bb, cb, sb) {
        const kb = new mb;
        return mb.RotationYawPitchRollToRef(bb, cb, sb, kb), kb
      }
      static RotationYawPitchRollToRef(bb, cb, sb, kb) {
        const Wb = .5 * sb,
          ab = .5 * cb,
          Tb = .5 * bb,
          Ub = Math.sin(Wb),
          Ib = Math.cos(Wb),
          Hb = Math.sin(ab),
          fb = Math.cos(ab),
          Mb = Math.sin(Tb),
          Xb = Math.cos(Tb);
        return kb._x = Xb * Hb * Ib + Mb * fb * Ub, kb._y = Mb * fb * Ib - Xb * Hb * Ub, kb._z = Xb * fb * Ub - Mb * Hb * Ib, kb._w = Xb * fb * Ib + Mb * Hb * Ub, kb._isDirty = !0, kb
      }
      static RotationAlphaBetaGamma(bb, cb, sb) {
        const kb = new mb;
        return mb.RotationAlphaBetaGammaToRef(bb, cb, sb, kb), kb
      }
      static RotationAlphaBetaGammaToRef(bb, cb, sb, kb) {
        const Wb = .5 * (sb + bb),
          ab = .5 * (sb - bb),
          Tb = .5 * cb;
        return kb._x = Math.cos(ab) * Math.sin(Tb), kb._y = Math.sin(ab) * Math.sin(Tb), kb._z = Math.sin(Wb) * Math.cos(Tb), kb._w = Math.cos(Wb) * Math.cos(Tb), kb._isDirty = !0, kb
      }
      static RotationQuaternionFromAxis(bb, cb, sb) {
        const kb = new mb(0, 0, 0, 0);
        return mb.RotationQuaternionFromAxisToRef(bb, cb, sb, kb), kb
      }
      static RotationQuaternionFromAxisToRef(bb, cb, sb, kb) {
        const Wb = Qb.Matrix[0];
        return bb = bb.normalizeToRef(Qb.Fm[0]), cb = cb.normalizeToRef(Qb.Fm[1]), sb = sb.normalizeToRef(Qb.Fm[2]), lb.FromXYZAxesToRef(bb, cb, sb, Wb), mb.FromRotationMatrixToRef(Wb, kb), kb
      }
      static FromLookDirectionLH(bb, cb) {
        const sb = new mb;
        return mb.FromLookDirectionLHToRef(bb, cb, sb), sb
      }
      static FromLookDirectionLHToRef(bb, cb, sb) {
        const kb = Qb.Matrix[0];
        return lb.LookDirectionLHToRef(bb, cb, kb), mb.FromRotationMatrixToRef(kb, sb), sb
      }
      static FromLookDirectionRH(bb, cb) {
        const sb = new mb;
        return mb.FromLookDirectionRHToRef(bb, cb, sb), sb
      }
      static FromLookDirectionRHToRef(bb, cb, sb) {
        const kb = Qb.Matrix[0];
        return lb.LookDirectionRHToRef(bb, cb, kb), mb.FromRotationMatrixToRef(kb, sb)
      }
      static Slerp(bb, cb, sb) {
        const kb = mb.Identity();
        return mb.SlerpToRef(bb, cb, sb, kb), kb
      }
      static SlerpToRef(bb, cb, sb, kb) {
        let Wb, ab, Tb = bb._x * cb._x + bb._y * cb._y + bb._z * cb._z + bb._w * cb._w,
          Ub = !1;
        if (Tb < 0 && (Ub = !0, Tb = -Tb), Tb > .999999) ab = 1 - sb, Wb = Ub ? -sb : sb;
        else {
          const bb = Math.acos(Tb),
            cb = 1 / Math.sin(bb);
          ab = Math.sin((1 - sb) * bb) * cb, Wb = Ub ? -Math.sin(sb * bb) * cb : Math.sin(sb * bb) * cb
        }
        return kb._x = ab * bb._x + Wb * cb._x, kb._y = ab * bb._y + Wb * cb._y, kb._z = ab * bb._z + Wb * cb._z, kb._w = ab * bb._w + Wb * cb._w, kb._isDirty = !0, kb
      }
      static Hermite(bb, cb, sb, kb, Wb) {
        const ab = Wb * Wb,
          Tb = Wb * ab,
          Ub = 2 * Tb - 3 * ab + 1,
          Ib = -2 * Tb + 3 * ab,
          Hb = Tb - 2 * ab + Wb,
          fb = Tb - ab,
          Mb = bb._x * Ub + sb._x * Ib + cb._x * Hb + kb._x * fb,
          Xb = bb._y * Ub + sb._y * Ib + cb._y * Hb + kb._y * fb,
          nb = bb._z * Ub + sb._z * Ib + cb._z * Hb + kb._z * fb,
          lb = bb._w * Ub + sb._w * Ib + cb._w * Hb + kb._w * fb;
        return new mb(Mb, Xb, nb, lb)
      }
      static Hermite1stDerivative(bb, cb, sb, kb, Wb) {
        const ab = new mb;
        return this.Hermite1stDerivativeToRef(bb, cb, sb, kb, Wb, ab), ab
      }
      static Hermite1stDerivativeToRef(bb, cb, sb, kb, Wb, ab) {
        const Tb = Wb * Wb;
        return ab._x = 6 * (Tb - Wb) * bb._x + (3 * Tb - 4 * Wb + 1) * cb._x + 6 * (-Tb + Wb) * sb._x + (3 * Tb - 2 * Wb) * kb._x, ab._y = 6 * (Tb - Wb) * bb._y + (3 * Tb - 4 * Wb + 1) * cb._y + 6 * (-Tb + Wb) * sb._y + (3 * Tb - 2 * Wb) * kb._y, ab._z = 6 * (Tb - Wb) * bb._z + (3 * Tb - 4 * Wb + 1) * cb._z + 6 * (-Tb + Wb) * sb._z + (3 * Tb - 2 * Wb) * kb._z, ab._w = 6 * (Tb - Wb) * bb._w + (3 * Tb - 4 * Wb + 1) * cb._w + 6 * (-Tb + Wb) * sb._w + (3 * Tb - 2 * Wb) * kb._w, ab._isDirty = !0, ab
      }
      static Normalize(bb) {
        const cb = mb.Zero();
        return mb.NormalizeToRef(bb, cb), cb
      }
      static NormalizeToRef(bb, cb) {
        return bb.normalizeToRef(cb), cb
      }
      static Clamp(bb, cb, sb) {
        const kb = new mb;
        return mb.ClampToRef(bb, cb, sb, kb), kb
      }
      static ClampToRef(bb, cb, sb, kb) {
        return kb.I5((0, Ub.Clamp)(bb.x, cb.x, sb.x), (0, Ub.Clamp)(bb.y, cb.y, sb.y), (0, Ub.Clamp)(bb.z, cb.z, sb.z), (0, Ub.Clamp)(bb.w, cb.w, sb.w))
      }
      static Random() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new mb((0, Ub.RandomRange)(bb, cb), (0, Ub.RandomRange)(bb, cb), (0, Ub.RandomRange)(bb, cb), (0, Ub.RandomRange)(bb, cb))
      }
      static RandomToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).I5((0, Ub.RandomRange)(bb, cb), (0, Ub.RandomRange)(bb, cb), (0, Ub.RandomRange)(bb, cb), (0, Ub.RandomRange)(bb, cb))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(bb, cb) {
        return Math.sqrt(mb.DistanceSquared(bb, cb))
      }
      static DistanceSquared(bb, cb) {
        const sb = bb.x - cb.x,
          kb = bb.y - cb.y,
          Wb = bb.z - cb.z,
          ab = bb.w - cb.w;
        return sb * sb + kb * kb + Wb * Wb + ab * ab
      }
      static Center(bb, cb) {
        return mb.CenterToRef(bb, cb, mb.Zero())
      }
      static CenterToRef(bb, cb, sb) {
        return sb.I5((bb.x + cb.x) / 2, (bb.y + cb.y) / 2, (bb.z + cb.z) / 2, (bb.w + cb.w) / 2)
      }
    }
    mb._V8PerformanceHack = new mb(.5, .5, .5, .5);
    class lb {
      static get Use64Bits() {
        return ab.c.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = Ib.j._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          kb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = bb, this._isIdentity3x2 = bb || sb, this._isIdentityDirty = !this._isIdentity && cb, this._isIdentity3x2Dirty = !this._isIdentity3x2 && kb
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, ab.c.MatrixTrackPrecisionChange && ab.c.MatrixTrackedMatrices.push(this), this._m = new ab.c.MatrixCurrentType(16), this.markAsUpdated()
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
          cb = bb[0],
          sb = bb[1],
          kb = bb[2],
          Wb = bb[3],
          ab = bb[4],
          Tb = bb[5],
          Ub = bb[6],
          Ib = bb[7],
          Hb = bb[8],
          fb = bb[9],
          Mb = bb[10],
          Xb = bb[11],
          nb = bb[12],
          mb = bb[13],
          lb = bb[14],
          Qb = bb[15],
          eb = Mb * Qb - lb * Xb,
          Cb = fb * Qb - mb * Xb,
          Nb = fb * lb - mb * Mb,
          Vb = Hb * Qb - nb * Xb,
          Lb = Hb * lb - Mb * nb,
          ub = Hb * mb - nb * fb;
        return cb * +(Tb * eb - Ub * Cb + Ib * Nb) + sb * -(ab * eb - Ub * Vb + Ib * Lb) + kb * +(ab * Cb - Tb * Vb + Ib * ub) + Wb * -(ab * Nb - Tb * Lb + Ub * ub)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!bb) return this._m;
        const sb = this._m;
        for (let kb = 0; kb < 16; kb++) bb[cb + kb] = sb[kb];
        return this
      }
      Osb() {
        return this._m
      }
      Ncb(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return lb.FromArrayToRef(bb, cb, this)
      }
      I5() {
        for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
        return lb.FromArrayToRef(cb, 0, this)
      }
      set() {
        const bb = this._m;
        for (let cb = 0; cb < 16; cb++) bb[cb] = cb < 0 || arguments.length <= cb ? void 0 : arguments[cb];
        return this.markAsUpdated(), this
      }
      I6(bb) {
        const cb = this._m;
        for (let sb = 0; sb < 16; sb++) cb[sb] = bb;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return lb.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(bb) {
        const cb = new lb;
        return this.addToRef(bb, cb), cb
      }
      addToRef(bb, cb) {
        const sb = this._m,
          kb = cb._m,
          Wb = bb.m;
        for (let ab = 0; ab < 16; ab++) kb[ab] = sb[ab] + Wb[ab];
        return cb.markAsUpdated(), cb
      }
      addToSelf(bb) {
        const cb = this._m,
          sb = bb.m;
        return cb[0] += sb[0], cb[1] += sb[1], cb[2] += sb[2], cb[3] += sb[3], cb[4] += sb[4], cb[5] += sb[5], cb[6] += sb[6], cb[7] += sb[7], cb[8] += sb[8], cb[9] += sb[9], cb[10] += sb[10], cb[11] += sb[11], cb[12] += sb[12], cb[13] += sb[13], cb[14] += sb[14], cb[15] += sb[15], this.markAsUpdated(), this
      }
      addInPlace(bb) {
        const cb = this._m,
          sb = bb.m;
        for (let kb = 0; kb < 16; kb++) cb[kb] += sb[kb];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const bb = this._m;
        for (let cb = 0; cb < 16; cb++) bb[cb] += cb < 0 || arguments.length <= cb ? void 0 : arguments[cb];
        return this.markAsUpdated(), this
      }
      subtract(bb) {
        const cb = this._m,
          sb = bb.m;
        for (let kb = 0; kb < 16; kb++) cb[kb] -= sb[kb];
        return this.markAsUpdated(), this
      }
      subtractToRef(bb, cb) {
        const sb = this._m,
          kb = bb.m,
          Wb = cb._m;
        for (let ab = 0; ab < 16; ab++) Wb[ab] = sb[ab] - kb[ab];
        return cb.markAsUpdated(), cb
      }
      Wkb(bb) {
        const cb = this._m,
          sb = bb.m;
        for (let kb = 0; kb < 16; kb++) cb[kb] -= sb[kb];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
        return this.subtractFromFloatsToRef(...cb, new lb)
      }
      subtractFromFloatsToRef() {
        for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
        const kb = cb.pop(),
          Wb = this._m,
          ab = kb._m,
          Tb = cb;
        for (let Ub = 0; Ub < 16; Ub++) ab[Ub] = Wb[Ub] - Tb[Ub];
        return kb.markAsUpdated(), kb
      }
      invertToRef(bb) {
        return !0 === this._isIdentity ? (lb.IdentityToRef(bb), bb) : ((0, Ib.e)(this, bb.Osb()) ? bb.markAsUpdated() : bb.ssb(this), bb)
      }
      addAtIndex(bb, cb) {
        return this._m[bb] += cb, this.markAsUpdated(), this
      }
      multiplyAtIndex(bb, cb) {
        return this._m[bb] *= cb, this.markAsUpdated(), this
      }
      setTranslationFromFloats(bb, cb, sb) {
        return this._m[12] = bb, this._m[13] = cb, this._m[14] = sb, this.markAsUpdated(), this
      }
      addTranslationFromFloats(bb, cb, sb) {
        return this._m[12] += bb, this._m[13] += cb, this._m[14] += sb, this.markAsUpdated(), this
      }
      setTranslation(bb) {
        return this.setTranslationFromFloats(bb._x, bb._y, bb._z)
      }
      getTranslation() {
        return new Xb(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(bb) {
        return bb.x = this._m[12], bb.y = this._m[13], bb.z = this._m[14], bb
      }
      removeRotationAndScaling() {
        const bb = this.m;
        return lb.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, bb[12], bb[13], bb[14], bb[15], this), this._updateIdentityStatus(0 === bb[12] && 0 === bb[13] && 0 === bb[14] && 1 === bb[15]), this
      }
      ssb(bb) {
        bb.copyToArray(this._m);
        const cb = bb;
        return this.updateFlag = cb.updateFlag, this._updateIdentityStatus(cb._isIdentity, cb._isIdentityDirty, cb._isIdentity3x2, cb._isIdentity3x2Dirty), this
      }
      copyToArray(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, Ib.b)(this, bb, cb), this
      }
      multiply(bb) {
        const cb = new lb;
        return this.multiplyToRef(bb, cb), cb
      }
      multiplyInPlace(bb) {
        const cb = this._m,
          sb = bb.m;
        for (let kb = 0; kb < 16; kb++) cb[kb] *= sb[kb];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const bb = this._m;
        for (let cb = 0; cb < 16; cb++) bb[cb] *= cb < 0 || arguments.length <= cb ? void 0 : arguments[cb];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var bb = arguments.length, cb = new Array(bb), sb = 0; sb < bb; sb++) cb[sb] = arguments[sb];
        const kb = cb.pop(),
          Wb = this._m,
          ab = kb._m,
          Tb = cb;
        for (let Ub = 0; Ub < 16; Ub++) ab[Ub] = Wb[Ub] * Tb[Ub];
        return kb.markAsUpdated(), kb
      }
      multiplyToRef(bb, cb) {
        return this._isIdentity ? (cb.ssb(bb), cb) : bb._isIdentity ? (cb.ssb(this), cb) : (this.multiplyToArray(bb, cb._m, 0), cb.markAsUpdated(), cb)
      }
      multiplyToArray(bb, cb, sb) {
        return (0, Ib.k)(this, bb, cb, sb), this
      }
      divide(bb) {
        return this.divideToRef(bb, new lb)
      }
      divideToRef(bb, cb) {
        const sb = this._m,
          kb = bb.m,
          Wb = cb._m;
        for (let ab = 0; ab < 16; ab++) Wb[ab] = sb[ab] / kb[ab];
        return cb.markAsUpdated(), cb
      }
      divideInPlace(bb) {
        const cb = this._m,
          sb = bb.m;
        for (let kb = 0; kb < 16; kb++) cb[kb] /= sb[kb];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(bb) {
        const cb = this._m,
          sb = bb.m;
        for (let kb = 0; kb < 16; kb++) cb[kb] = Math.min(cb[kb], sb[kb]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const bb = this._m;
        for (let cb = 0; cb < 16; cb++) bb[cb] = Math.min(bb[cb], cb < 0 || arguments.length <= cb ? void 0 : arguments[cb]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(bb) {
        const cb = this._m,
          sb = bb.m;
        for (let kb = 0; kb < 16; kb++) cb[kb] = Math.max(cb[kb], sb[kb]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const bb = this._m;
        for (let cb = 0; cb < 16; cb++) bb[cb] = Math.max(bb[cb], cb < 0 || arguments.length <= cb ? void 0 : arguments[cb]);
        return this.markAsUpdated(), this
      }
      Of() {
        return this.negateToRef(new lb)
      }
      negateInPlace() {
        const bb = this._m;
        for (let cb = 0; cb < 16; cb++) bb[cb] = -bb[cb];
        return this.markAsUpdated(), this
      }
      negateToRef(bb) {
        const cb = this._m,
          sb = bb._m;
        for (let kb = 0; kb < 16; kb++) sb[kb] = -cb[kb];
        return bb.markAsUpdated(), bb
      }
      equals(bb) {
        const cb = bb;
        if (!cb) return !1;
        if ((this._isIdentity || cb._isIdentity) && !this._isIdentityDirty && !cb._isIdentityDirty) return this._isIdentity && cb._isIdentity;
        const sb = this.m,
          kb = cb.m;
        return sb[0] === kb[0] && sb[1] === kb[1] && sb[2] === kb[2] && sb[3] === kb[3] && sb[4] === kb[4] && sb[5] === kb[5] && sb[6] === kb[6] && sb[7] === kb[7] && sb[8] === kb[8] && sb[9] === kb[9] && sb[10] === kb[10] && sb[11] === kb[11] && sb[12] === kb[12] && sb[13] === kb[13] && sb[14] === kb[14] && sb[15] === kb[15]
      }
      equalsWithEpsilon(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const sb = this._m,
          kb = bb.m;
        for (let Wb = 0; Wb < 16; Wb++)
          if (!(0, Ub.WithinEpsilon)(sb[Wb], kb[Wb], cb)) return !1;
        return !0
      }
      CTb() {
        const bb = this._m;
        for (let cb = 0; cb < 16; cb++)
          if (bb[cb] != (cb < 0 || arguments.length <= cb ? void 0 : arguments[cb])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new lb)
      }
      floorToRef(bb) {
        const cb = this._m,
          sb = bb._m;
        for (let kb = 0; kb < 16; kb++) sb[kb] = Math.floor(cb[kb]);
        return bb.markAsUpdated(), bb
      }
      fract() {
        return this.fractToRef(new lb)
      }
      fractToRef(bb) {
        const cb = this._m,
          sb = bb._m;
        for (let kb = 0; kb < 16; kb++) sb[kb] = cb[kb] - Math.floor(cb[kb]);
        return bb.markAsUpdated(), bb
      }
      clone() {
        const bb = new lb;
        return bb.ssb(this), bb
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let bb = fb(this._m[0]);
        for (let cb = 1; cb < 16; cb++) bb = 397 * bb ^ fb(this._m[cb]);
        return bb
      }
      decomposeToTransformNode(bb) {
        return bb.rotationQuaternion = bb.rotationQuaternion || new mb, this.decompose(bb.bl, bb.rotationQuaternion, bb.position)
      }
      decompose(bb, cb, sb, kb) {
        let Wb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return sb && sb.I6(0), bb && bb.I6(1), cb && cb.I5(0, 0, 0, 1), !0;
        const ab = this._m;
        if (sb && sb.I5(ab[12], ab[13], ab[14]), (bb = bb || Qb.Fm[0]).x = Math.sqrt(ab[0] * ab[0] + ab[1] * ab[1] + ab[2] * ab[2]), bb.y = Math.sqrt(ab[4] * ab[4] + ab[5] * ab[5] + ab[6] * ab[6]), bb.z = Math.sqrt(ab[8] * ab[8] + ab[9] * ab[9] + ab[10] * ab[10]), kb) {
          const cb = (Wb ? kb.absoluteScaling.x : kb.bl.x) < 0 ? -1 : 1,
            sb = (Wb ? kb.absoluteScaling.y : kb.bl.y) < 0 ? -1 : 1,
            ab = (Wb ? kb.absoluteScaling.z : kb.bl.z) < 0 ? -1 : 1;
          bb.x *= cb, bb.y *= sb, bb.z *= ab
        } else this.determinant() <= 0 && (bb.y *= -1);
        if (0 === bb._x || 0 === bb._y || 0 === bb._z) return cb && cb.I5(0, 0, 0, 1), !1;
        if (cb) {
          const sb = 1 / bb._x,
            kb = 1 / bb._y,
            Wb = 1 / bb._z;
          lb.FromValuesToRef(ab[0] * sb, ab[1] * sb, ab[2] * sb, 0, ab[4] * kb, ab[5] * kb, ab[6] * kb, 0, ab[8] * Wb, ab[9] * Wb, ab[10] * Wb, 0, 0, 0, 0, 1, Qb.Matrix[0]), mb.FromRotationMatrixToRef(Qb.Matrix[0], cb)
        }
        return !0
      }
      getRow(bb) {
        if (bb < 0 || bb > 3) return null;
        const cb = 4 * bb;
        return new nb(this._m[cb + 0], this._m[cb + 1], this._m[cb + 2], this._m[cb + 3])
      }
      getRowToRef(bb, cb) {
        if (bb >= 0 && bb <= 3) {
          const sb = 4 * bb;
          cb.x = this._m[sb + 0], cb.y = this._m[sb + 1], cb.z = this._m[sb + 2], cb.w = this._m[sb + 3]
        }
        return cb
      }
      setRow(bb, cb) {
        return this.setRowFromFloats(bb, cb.x, cb.y, cb.z, cb.w)
      }
      transpose() {
        const bb = new lb;
        return lb.TransposeToRef(this, bb), bb
      }
      transposeToRef(bb) {
        return lb.TransposeToRef(this, bb), bb
      }
      setRowFromFloats(bb, cb, sb, kb, Wb) {
        if (bb < 0 || bb > 3) return this;
        const ab = 4 * bb;
        return this._m[ab + 0] = cb, this._m[ab + 1] = sb, this._m[ab + 2] = kb, this._m[ab + 3] = Wb, this.markAsUpdated(), this
      }
      scale(bb) {
        const cb = new lb;
        return this.scaleToRef(bb, cb), cb
      }
      scaleToRef(bb, cb) {
        for (let sb = 0; sb < 16; sb++) cb._m[sb] = this._m[sb] * bb;
        return cb.markAsUpdated(), cb
      }
      scaleAndAddToRef(bb, cb) {
        for (let sb = 0; sb < 16; sb++) cb._m[sb] += this._m[sb] * bb;
        return cb.markAsUpdated(), cb
      }
      scaleInPlace(bb) {
        const cb = this._m;
        for (let sb = 0; sb < 16; sb++) cb[sb] *= bb;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(bb) {
        const cb = Qb.Matrix[0];
        this.invertToRef(cb), cb.transposeToRef(bb);
        const sb = bb._m;
        return lb.FromValuesToRef(sb[0], sb[1], sb[2], 0, sb[4], sb[5], sb[6], 0, sb[8], sb[9], sb[10], 0, 0, 0, 0, 1, bb), bb
      }
      getRotationMatrix() {
        const bb = new lb;
        return this.getRotationMatrixToRef(bb), bb
      }
      getRotationMatrixToRef(bb) {
        const cb = Qb.Fm[0];
        if (!this.decompose(cb)) return lb.IdentityToRef(bb), bb;
        const sb = this._m,
          kb = 1 / cb._x,
          Wb = 1 / cb._y,
          ab = 1 / cb._z;
        return lb.FromValuesToRef(sb[0] * kb, sb[1] * kb, sb[2] * kb, 0, sb[4] * Wb, sb[5] * Wb, sb[6] * Wb, 0, sb[8] * ab, sb[9] * ab, sb[10] * ab, 0, 0, 0, 0, 1, bb), bb
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
        return this.multiplyToRef(Cb, this), this
      }
      static FromArray(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const sb = new lb;
        return lb.FromArrayToRef(bb, cb, sb), sb
      }
      static FromArrayToRef(bb, cb, sb) {
        for (let kb = 0; kb < 16; kb++) sb._m[kb] = bb[kb + cb];
        return sb.markAsUpdated(), sb
      }
      static FromFloat32ArrayToRefScaled(bb, cb, sb, kb) {
        return kb._m[0] = bb[0 + cb] * sb, kb._m[1] = bb[1 + cb] * sb, kb._m[2] = bb[2 + cb] * sb, kb._m[3] = bb[3 + cb] * sb, kb._m[4] = bb[4 + cb] * sb, kb._m[5] = bb[5 + cb] * sb, kb._m[6] = bb[6 + cb] * sb, kb._m[7] = bb[7 + cb] * sb, kb._m[8] = bb[8 + cb] * sb, kb._m[9] = bb[9 + cb] * sb, kb._m[10] = bb[10 + cb] * sb, kb._m[11] = bb[11 + cb] * sb, kb._m[12] = bb[12 + cb] * sb, kb._m[13] = bb[13 + cb] * sb, kb._m[14] = bb[14 + cb] * sb, kb._m[15] = bb[15 + cb] * sb, kb.markAsUpdated(), kb
      }
      static get IdentityReadOnly() {
        return lb._IdentityReadOnly
      }
      static FromValuesToRef(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb, Xb, nb, mb, lb, Qb) {
        const eb = Qb._m;
        eb[0] = bb, eb[1] = cb, eb[2] = sb, eb[3] = kb, eb[4] = Wb, eb[5] = ab, eb[6] = Tb, eb[7] = Ub, eb[8] = Ib, eb[9] = Hb, eb[10] = fb, eb[11] = Mb, eb[12] = Xb, eb[13] = nb, eb[14] = mb, eb[15] = lb, Qb.markAsUpdated()
      }
      static FromValues(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb, Mb, Xb, nb, mb, Qb) {
        const eb = new lb,
          Cb = eb._m;
        return Cb[0] = bb, Cb[1] = cb, Cb[2] = sb, Cb[3] = kb, Cb[4] = Wb, Cb[5] = ab, Cb[6] = Tb, Cb[7] = Ub, Cb[8] = Ib, Cb[9] = Hb, Cb[10] = fb, Cb[11] = Mb, Cb[12] = Xb, Cb[13] = nb, Cb[14] = mb, Cb[15] = Qb, eb.markAsUpdated(), eb
      }
      static Compose(bb, cb, sb) {
        const kb = new lb;
        return lb.ComposeToRef(bb, cb, sb, kb), kb
      }
      static ComposeToRef(bb, cb, sb, kb) {
        const Wb = kb._m,
          ab = cb._x,
          Tb = cb._y,
          Ub = cb._z,
          Ib = cb._w,
          Hb = ab + ab,
          fb = Tb + Tb,
          Mb = Ub + Ub,
          Xb = ab * Hb,
          nb = ab * fb,
          mb = ab * Mb,
          lb = Tb * fb,
          Qb = Tb * Mb,
          eb = Ub * Mb,
          Cb = Ib * Hb,
          Nb = Ib * fb,
          Vb = Ib * Mb,
          Lb = bb._x,
          ub = bb._y,
          Yb = bb._z;
        return Wb[0] = (1 - (lb + eb)) * Lb, Wb[1] = (nb + Vb) * Lb, Wb[2] = (mb - Nb) * Lb, Wb[3] = 0, Wb[4] = (nb - Vb) * ub, Wb[5] = (1 - (Xb + eb)) * ub, Wb[6] = (Qb + Cb) * ub, Wb[7] = 0, Wb[8] = (mb + Nb) * Yb, Wb[9] = (Qb - Cb) * Yb, Wb[10] = (1 - (Xb + lb)) * Yb, Wb[11] = 0, Wb[12] = sb._x, Wb[13] = sb._y, Wb[14] = sb._z, Wb[15] = 1, kb.markAsUpdated(), kb
      }
      static Identity() {
        const bb = lb.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return bb._updateIdentityStatus(!0), bb
      }
      static IdentityToRef(bb) {
        return lb.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, bb), bb._updateIdentityStatus(!0), bb
      }
      static Zero() {
        const bb = lb.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return bb._updateIdentityStatus(!1), bb
      }
      static RotationX(bb) {
        const cb = new lb;
        return lb.RotationXToRef(bb, cb), cb
      }
      static Invert(bb) {
        const cb = new lb;
        return bb.invertToRef(cb), cb
      }
      static RotationXToRef(bb, cb) {
        const sb = Math.sin(bb),
          kb = Math.cos(bb);
        return lb.FromValuesToRef(1, 0, 0, 0, 0, kb, sb, 0, 0, -sb, kb, 0, 0, 0, 0, 1, cb), cb._updateIdentityStatus(1 === kb && 0 === sb), cb
      }
      static RotationY(bb) {
        const cb = new lb;
        return lb.RotationYToRef(bb, cb), cb
      }
      static RotationYToRef(bb, cb) {
        const sb = Math.sin(bb),
          kb = Math.cos(bb);
        return lb.FromValuesToRef(kb, 0, -sb, 0, 0, 1, 0, 0, sb, 0, kb, 0, 0, 0, 0, 1, cb), cb._updateIdentityStatus(1 === kb && 0 === sb), cb
      }
      static RotationZ(bb) {
        const cb = new lb;
        return lb.RotationZToRef(bb, cb), cb
      }
      static RotationZToRef(bb, cb) {
        const sb = Math.sin(bb),
          kb = Math.cos(bb);
        return lb.FromValuesToRef(kb, sb, 0, 0, -sb, kb, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, cb), cb._updateIdentityStatus(1 === kb && 0 === sb), cb
      }
      static RotationAxis(bb, cb) {
        const sb = new lb;
        return lb.RotationAxisToRef(bb, cb, sb), sb
      }
      static RotationAxisToRef(bb, cb, sb) {
        const kb = Math.sin(-cb),
          Wb = Math.cos(-cb),
          ab = 1 - Wb;
        bb = bb.normalizeToRef(Qb.Fm[0]);
        const Tb = sb._m;
        return Tb[0] = bb._x * bb._x * ab + Wb, Tb[1] = bb._x * bb._y * ab - bb._z * kb, Tb[2] = bb._x * bb._z * ab + bb._y * kb, Tb[3] = 0, Tb[4] = bb._y * bb._x * ab + bb._z * kb, Tb[5] = bb._y * bb._y * ab + Wb, Tb[6] = bb._y * bb._z * ab - bb._x * kb, Tb[7] = 0, Tb[8] = bb._z * bb._x * ab - bb._y * kb, Tb[9] = bb._z * bb._y * ab + bb._x * kb, Tb[10] = bb._z * bb._z * ab + Wb, Tb[11] = 0, Tb[12] = 0, Tb[13] = 0, Tb[14] = 0, Tb[15] = 1, sb.markAsUpdated(), sb
      }
      static RotationAlignToRef(bb, cb, sb) {
        let Wb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const ab = Xb.Dot(cb, bb),
          Tb = sb._m;
        if (ab < -1 + kb.d) Tb[0] = -1, Tb[1] = 0, Tb[2] = 0, Tb[3] = 0, Tb[4] = 0, Tb[5] = Wb ? 1 : -1, Tb[6] = 0, Tb[7] = 0, Tb[8] = 0, Tb[9] = 0, Tb[10] = Wb ? -1 : 1, Tb[11] = 0;
        else {
          const sb = Xb.Cross(cb, bb),
            kb = 1 / (1 + ab);
          Tb[0] = sb._x * sb._x * kb + ab, Tb[1] = sb._y * sb._x * kb - sb._z, Tb[2] = sb._z * sb._x * kb + sb._y, Tb[3] = 0, Tb[4] = sb._x * sb._y * kb + sb._z, Tb[5] = sb._y * sb._y * kb + ab, Tb[6] = sb._z * sb._y * kb - sb._x, Tb[7] = 0, Tb[8] = sb._x * sb._z * kb - sb._y, Tb[9] = sb._y * sb._z * kb + sb._x, Tb[10] = sb._z * sb._z * kb + ab, Tb[11] = 0
        }
        return Tb[12] = 0, Tb[13] = 0, Tb[14] = 0, Tb[15] = 1, sb.markAsUpdated(), sb
      }
      static RotationYawPitchRoll(bb, cb, sb) {
        const kb = new lb;
        return lb.RotationYawPitchRollToRef(bb, cb, sb, kb), kb
      }
      static RotationYawPitchRollToRef(bb, cb, sb, kb) {
        return mb.RotationYawPitchRollToRef(bb, cb, sb, Qb.Quaternion[0]), Qb.Quaternion[0].toRotationMatrix(kb), kb
      }
      static Scaling(bb, cb, sb) {
        const kb = new lb;
        return lb.ScalingToRef(bb, cb, sb, kb), kb
      }
      static ScalingToRef(bb, cb, sb, kb) {
        return lb.FromValuesToRef(bb, 0, 0, 0, 0, cb, 0, 0, 0, 0, sb, 0, 0, 0, 0, 1, kb), kb._updateIdentityStatus(1 === bb && 1 === cb && 1 === sb), kb
      }
      static Translation(bb, cb, sb) {
        const kb = new lb;
        return lb.TranslationToRef(bb, cb, sb, kb), kb
      }
      static TranslationToRef(bb, cb, sb, kb) {
        return lb.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, bb, cb, sb, 1, kb), kb._updateIdentityStatus(0 === bb && 0 === cb && 0 === sb), kb
      }
      static Lerp(bb, cb, sb) {
        const kb = new lb;
        return lb.LerpToRef(bb, cb, sb, kb), kb
      }
      static LerpToRef(bb, cb, sb, kb) {
        const Wb = kb._m,
          ab = bb.m,
          Tb = cb.m;
        for (let Ub = 0; Ub < 16; Ub++) Wb[Ub] = ab[Ub] * (1 - sb) + Tb[Ub] * sb;
        return kb.markAsUpdated(), kb
      }
      static DecomposeLerp(bb, cb, sb) {
        const kb = new lb;
        return lb.DecomposeLerpToRef(bb, cb, sb, kb), kb
      }
      static DecomposeLerpToRef(bb, cb, sb, kb) {
        const Wb = Qb.Fm[0],
          ab = Qb.Quaternion[0],
          Tb = Qb.Fm[1];
        bb.decompose(Wb, ab, Tb);
        const Ub = Qb.Fm[2],
          Ib = Qb.Quaternion[1],
          Hb = Qb.Fm[3];
        cb.decompose(Ub, Ib, Hb);
        const fb = Qb.Fm[4];
        Xb.LerpToRef(Wb, Ub, sb, fb);
        const Mb = Qb.Quaternion[2];
        mb.SlerpToRef(ab, Ib, sb, Mb);
        const nb = Qb.Fm[5];
        return Xb.LerpToRef(Tb, Hb, sb, nb), lb.ComposeToRef(fb, Mb, nb, kb), kb
      }
      static LookAtLH(bb, cb, sb) {
        const kb = new lb;
        return lb.LookAtLHToRef(bb, cb, sb, kb), kb
      }
      static LookAtLHToRef(bb, cb, sb, kb) {
        const Wb = Qb.Fm[0],
          ab = Qb.Fm[1],
          Tb = Qb.Fm[2];
        cb.subtractToRef(bb, Tb), Tb.normalize(), Xb.CrossToRef(sb, Tb, Wb);
        const Ub = Wb.lengthSquared();
        0 === Ub ? Wb.x = 1 : Wb.normalizeFromLength(Math.sqrt(Ub)), Xb.CrossToRef(Tb, Wb, ab), ab.normalize();
        const Ib = -Xb.Dot(Wb, bb),
          Hb = -Xb.Dot(ab, bb),
          fb = -Xb.Dot(Tb, bb);
        return lb.FromValuesToRef(Wb._x, ab._x, Tb._x, 0, Wb._y, ab._y, Tb._y, 0, Wb._z, ab._z, Tb._z, 0, Ib, Hb, fb, 1, kb), kb
      }
      static LookAtRH(bb, cb, sb) {
        const kb = new lb;
        return lb.LookAtRHToRef(bb, cb, sb, kb), kb
      }
      static LookAtRHToRef(bb, cb, sb, kb) {
        const Wb = Qb.Fm[0],
          ab = Qb.Fm[1],
          Tb = Qb.Fm[2];
        bb.subtractToRef(cb, Tb), Tb.normalize(), Xb.CrossToRef(sb, Tb, Wb);
        const Ub = Wb.lengthSquared();
        0 === Ub ? Wb.x = 1 : Wb.normalizeFromLength(Math.sqrt(Ub)), Xb.CrossToRef(Tb, Wb, ab), ab.normalize();
        const Ib = -Xb.Dot(Wb, bb),
          Hb = -Xb.Dot(ab, bb),
          fb = -Xb.Dot(Tb, bb);
        return lb.FromValuesToRef(Wb._x, ab._x, Tb._x, 0, Wb._y, ab._y, Tb._y, 0, Wb._z, ab._z, Tb._z, 0, Ib, Hb, fb, 1, kb), kb
      }
      static LookDirectionLH(bb, cb) {
        const sb = new lb;
        return lb.LookDirectionLHToRef(bb, cb, sb), sb
      }
      static LookDirectionLHToRef(bb, cb, sb) {
        const kb = Qb.Fm[0];
        kb.ssb(bb), kb.scaleInPlace(-1);
        const Wb = Qb.Fm[1];
        return Xb.CrossToRef(cb, kb, Wb), lb.FromValuesToRef(Wb._x, Wb._y, Wb._z, 0, cb._x, cb._y, cb._z, 0, kb._x, kb._y, kb._z, 0, 0, 0, 0, 1, sb), sb
      }
      static LookDirectionRH(bb, cb) {
        const sb = new lb;
        return lb.LookDirectionRHToRef(bb, cb, sb), sb
      }
      static LookDirectionRHToRef(bb, cb, sb) {
        const kb = Qb.Fm[2];
        return Xb.CrossToRef(cb, bb, kb), lb.FromValuesToRef(kb._x, kb._y, kb._z, 0, cb._x, cb._y, cb._z, 0, bb._x, bb._y, bb._z, 0, 0, 0, 0, 1, sb), sb
      }
      static OrthoLH(bb, cb, sb, kb, Wb) {
        const ab = new lb;
        return lb.OrthoLHToRef(bb, cb, sb, kb, ab, Wb), ab
      }
      static OrthoLHToRef(bb, cb, sb, kb, Wb, ab) {
        const Tb = 2 / bb,
          Ub = 2 / cb,
          Ib = 2 / (kb - sb),
          Hb = -(kb + sb) / (kb - sb);
        return lb.FromValuesToRef(Tb, 0, 0, 0, 0, Ub, 0, 0, 0, 0, Ib, 0, 0, 0, Hb, 1, Wb), ab && Wb.multiplyToRef(Cb, Wb), Wb._updateIdentityStatus(1 === Tb && 1 === Ub && 1 === Ib && 0 === Hb), Wb
      }
      static OrthoOffCenterLH(bb, cb, sb, kb, Wb, ab, Tb) {
        const Ub = new lb;
        return lb.OrthoOffCenterLHToRef(bb, cb, sb, kb, Wb, ab, Ub, Tb), Ub
      }
      static OrthoOffCenterLHToRef(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
        const Ib = 2 / (cb - bb),
          Hb = 2 / (kb - sb),
          fb = 2 / (ab - Wb),
          Mb = -(ab + Wb) / (ab - Wb),
          Xb = (bb + cb) / (bb - cb),
          nb = (kb + sb) / (sb - kb);
        return lb.FromValuesToRef(Ib, 0, 0, 0, 0, Hb, 0, 0, 0, 0, fb, 0, Xb, nb, Mb, 1, Tb), Ub && Tb.multiplyToRef(Cb, Tb), Tb.markAsUpdated(), Tb
      }
      static ObliqueOffCenterLHToRef(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb) {
        const Mb = -Tb * Math.cos(Ub),
          Xb = -Tb * Math.sin(Ub);
        return lb.TranslationToRef(0, 0, -Ib, Qb.Matrix[1]), lb.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Mb, Xb, 1, 0, 0, 0, 0, 1, Qb.Matrix[0]), Qb.Matrix[1].multiplyToRef(Qb.Matrix[0], Qb.Matrix[0]), lb.TranslationToRef(0, 0, Ib, Qb.Matrix[1]), Qb.Matrix[0].multiplyToRef(Qb.Matrix[1], Qb.Matrix[0]), lb.OrthoOffCenterLHToRef(bb, cb, sb, kb, Wb, ab, Hb, fb), Qb.Matrix[0].multiplyToRef(Hb, Hb), Hb
      }
      static OrthoOffCenterRH(bb, cb, sb, kb, Wb, ab, Tb) {
        const Ub = new lb;
        return lb.OrthoOffCenterRHToRef(bb, cb, sb, kb, Wb, ab, Ub, Tb), Ub
      }
      static OrthoOffCenterRHToRef(bb, cb, sb, kb, Wb, ab, Tb, Ub) {
        return lb.OrthoOffCenterLHToRef(bb, cb, sb, kb, Wb, ab, Tb, Ub), Tb._m[10] *= -1, Tb
      }
      static ObliqueOffCenterRHToRef(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb) {
        const Mb = Tb * Math.cos(Ub),
          Xb = Tb * Math.sin(Ub);
        return lb.TranslationToRef(0, 0, Ib, Qb.Matrix[1]), lb.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Mb, Xb, 1, 0, 0, 0, 0, 1, Qb.Matrix[0]), Qb.Matrix[1].multiplyToRef(Qb.Matrix[0], Qb.Matrix[0]), lb.TranslationToRef(0, 0, -Ib, Qb.Matrix[1]), Qb.Matrix[0].multiplyToRef(Qb.Matrix[1], Qb.Matrix[0]), lb.OrthoOffCenterRHToRef(bb, cb, sb, kb, Wb, ab, Hb, fb), Qb.Matrix[0].multiplyToRef(Hb, Hb), Hb
      }
      static PerspectiveLH(bb, cb, sb, kb, Wb) {
        let ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const Tb = new lb,
          Ub = 2 * sb / bb,
          Ib = 2 * sb / cb,
          Hb = (kb + sb) / (kb - sb),
          fb = -2 * kb * sb / (kb - sb),
          Mb = Math.tan(ab);
        return lb.FromValuesToRef(Ub, 0, 0, 0, 0, Ib, 0, Mb, 0, 0, Hb, 1, 0, 0, fb, 0, Tb), Wb && Tb.multiplyToRef(Cb, Tb), Tb._updateIdentityStatus(!1), Tb
      }
      static PerspectiveFovLH(bb, cb, sb, kb, Wb) {
        let ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Tb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Ub = new lb;
        return lb.PerspectiveFovLHToRef(bb, cb, sb, kb, Ub, !0, Wb, ab, Tb), Ub
      }
      static PerspectiveFovLHToRef(bb, cb, sb, kb, Wb) {
        let ab = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Tb = arguments.length > 6 ? arguments[6] : void 0,
          Ub = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Ib = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Hb = sb,
          fb = kb,
          Mb = 1 / Math.tan(.5 * bb),
          Xb = ab ? Mb / cb : Mb,
          nb = ab ? Mb : Mb * cb,
          mb = Ib && 0 === Hb ? -1 : 0 !== fb ? (fb + Hb) / (fb - Hb) : 1,
          Qb = Ib && 0 === Hb ? 2 * fb : 0 !== fb ? -2 * fb * Hb / (fb - Hb) : -2 * Hb,
          eb = Math.tan(Ub);
        return lb.FromValuesToRef(Xb, 0, 0, 0, 0, nb, 0, eb, 0, 0, mb, 1, 0, 0, Qb, 0, Wb), Tb && Wb.multiplyToRef(Cb, Wb), Wb._updateIdentityStatus(!1), Wb
      }
      static PerspectiveFovReverseLHToRef(bb, cb, sb, kb, Wb) {
        let ab = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Tb = arguments.length > 6 ? arguments[6] : void 0,
          Ub = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Ib = 1 / Math.tan(.5 * bb),
          Hb = ab ? Ib / cb : Ib,
          fb = ab ? Ib : Ib * cb,
          Mb = Math.tan(Ub);
        return lb.FromValuesToRef(Hb, 0, 0, 0, 0, fb, 0, Mb, 0, 0, -sb, 1, 0, 0, 1, 0, Wb), Tb && Wb.multiplyToRef(Cb, Wb), Wb._updateIdentityStatus(!1), Wb
      }
      static PerspectiveFovRH(bb, cb, sb, kb, Wb) {
        let ab = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Tb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Ub = new lb;
        return lb.PerspectiveFovRHToRef(bb, cb, sb, kb, Ub, !0, Wb, ab, Tb), Ub
      }
      static PerspectiveFovRHToRef(bb, cb, sb, kb, Wb) {
        let ab = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Tb = arguments.length > 6 ? arguments[6] : void 0,
          Ub = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Ib = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Hb = sb,
          fb = kb,
          Mb = 1 / Math.tan(.5 * bb),
          Xb = ab ? Mb / cb : Mb,
          nb = ab ? Mb : Mb * cb,
          mb = Ib && 0 === Hb ? 1 : 0 !== fb ? -(fb + Hb) / (fb - Hb) : -1,
          Qb = Ib && 0 === Hb ? 2 * fb : 0 !== fb ? -2 * fb * Hb / (fb - Hb) : -2 * Hb,
          eb = Math.tan(Ub);
        return lb.FromValuesToRef(Xb, 0, 0, 0, 0, nb, 0, eb, 0, 0, mb, -1, 0, 0, Qb, 0, Wb), Tb && Wb.multiplyToRef(Cb, Wb), Wb._updateIdentityStatus(!1), Wb
      }
      static PerspectiveFovReverseRHToRef(bb, cb, sb, kb, Wb) {
        let ab = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Tb = arguments.length > 6 ? arguments[6] : void 0,
          Ub = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Ib = 1 / Math.tan(.5 * bb),
          Hb = ab ? Ib / cb : Ib,
          fb = ab ? Ib : Ib * cb,
          Mb = Math.tan(Ub);
        return lb.FromValuesToRef(Hb, 0, 0, 0, 0, fb, 0, Mb, 0, 0, -sb, -1, 0, 0, -1, 0, Wb), Tb && Wb.multiplyToRef(Cb, Wb), Wb._updateIdentityStatus(!1), Wb
      }
      static GetFinalMatrix(bb, cb, sb, kb, Wb, ab) {
        const Tb = bb.width,
          Ub = bb.height,
          Ib = bb.x,
          Hb = bb.y,
          fb = lb.FromValues(Tb / 2, 0, 0, 0, 0, -Ub / 2, 0, 0, 0, 0, ab - Wb, 0, Ib + Tb / 2, Ub / 2 + Hb, Wb, 1),
          Mb = new lb;
        return cb.multiplyToRef(sb, Mb), Mb.multiplyToRef(kb, Mb), Mb.multiplyToRef(fb, Mb)
      }
      static GetAsMatrix2x2(bb) {
        const cb = bb.m,
          sb = [cb[0], cb[1], cb[4], cb[5]];
        return ab.c.MatrixUse64Bits ? sb : new Float32Array(sb)
      }
      static GetAsMatrix3x3(bb) {
        const cb = bb.m,
          sb = [cb[0], cb[1], cb[2], cb[4], cb[5], cb[6], cb[8], cb[9], cb[10]];
        return ab.c.MatrixUse64Bits ? sb : new Float32Array(sb)
      }
      static Transpose(bb) {
        const cb = new lb;
        return lb.TransposeToRef(bb, cb), cb
      }
      static TransposeToRef(bb, cb) {
        const sb = bb.m,
          kb = sb[0],
          Wb = sb[4],
          ab = sb[8],
          Tb = sb[12],
          Ub = sb[1],
          Ib = sb[5],
          Hb = sb[9],
          fb = sb[13],
          Mb = sb[2],
          Xb = sb[6],
          nb = sb[10],
          mb = sb[14],
          lb = sb[3],
          Qb = sb[7],
          eb = sb[11],
          Cb = sb[15],
          Nb = cb._m;
        return Nb[0] = kb, Nb[1] = Wb, Nb[2] = ab, Nb[3] = Tb, Nb[4] = Ub, Nb[5] = Ib, Nb[6] = Hb, Nb[7] = fb, Nb[8] = Mb, Nb[9] = Xb, Nb[10] = nb, Nb[11] = mb, Nb[12] = lb, Nb[13] = Qb, Nb[14] = eb, Nb[15] = Cb, cb.markAsUpdated(), cb._updateIdentityStatus(bb._isIdentity, bb._isIdentityDirty), cb
      }
      static Reflection(bb) {
        const cb = new lb;
        return lb.ReflectionToRef(bb, cb), cb
      }
      static ReflectionToRef(bb, cb) {
        bb.normalize();
        const sb = bb.normal.x,
          kb = bb.normal.y,
          Wb = bb.normal.z,
          ab = -2 * sb,
          Tb = -2 * kb,
          Ub = -2 * Wb;
        return lb.FromValuesToRef(ab * sb + 1, Tb * sb, Ub * sb, 0, ab * kb, Tb * kb + 1, Ub * kb, 0, ab * Wb, Tb * Wb, Ub * Wb + 1, 0, ab * bb.d, Tb * bb.d, Ub * bb.d, 1, cb), cb
      }
      static FromXYZAxesToRef(bb, cb, sb, kb) {
        return lb.FromValuesToRef(bb._x, bb._y, bb._z, 0, cb._x, cb._y, cb._z, 0, sb._x, sb._y, sb._z, 0, 0, 0, 0, 1, kb), kb
      }
      static FromQuaternionToRef(bb, cb) {
        const sb = bb._x * bb._x,
          kb = bb._y * bb._y,
          Wb = bb._z * bb._z,
          ab = bb._x * bb._y,
          Tb = bb._z * bb._w,
          Ub = bb._z * bb._x,
          Ib = bb._y * bb._w,
          Hb = bb._y * bb._z,
          fb = bb._x * bb._w;
        return cb._m[0] = 1 - 2 * (kb + Wb), cb._m[1] = 2 * (ab + Tb), cb._m[2] = 2 * (Ub - Ib), cb._m[3] = 0, cb._m[4] = 2 * (ab - Tb), cb._m[5] = 1 - 2 * (Wb + sb), cb._m[6] = 2 * (Hb + fb), cb._m[7] = 0, cb._m[8] = 2 * (Ub + Ib), cb._m[9] = 2 * (Hb - fb), cb._m[10] = 1 - 2 * (kb + sb), cb._m[11] = 0, cb._m[12] = 0, cb._m[13] = 0, cb._m[14] = 0, cb._m[15] = 1, cb.markAsUpdated(), cb
      }
    }
    lb._IdentityReadOnly = lb.Identity();
    class Qb {}
    Qb.Fm = (0, Wb.f)(11, Xb.Zero), Qb.Matrix = (0, Wb.f)(2, lb.Identity), Qb.Quaternion = (0, Wb.f)(3, mb.Zero);
    class eb {}
    eb.Vector2 = (0, Wb.f)(3, Mb.Zero), eb.Fm = (0, Wb.f)(13, Xb.Zero), eb.Vector4 = (0, Wb.f)(3, nb.Zero), eb.Quaternion = (0, Wb.f)(3, mb.Zero), eb.Matrix = (0, Wb.f)(8, lb.Identity);
    const Cb = lb.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let Nb = !1;

    function Vb() {
      Nb || (Nb = !0, Object.defineProperties(Mb.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Xb.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(nb.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(mb.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(lb.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, Hb.h)("BABYLON.Vector2", Mb), (0, Hb.h)("BABYLON.Vector3", Xb), (0, Hb.h)("BABYLON.Vector4", nb), (0, Hb.h)("BABYLON.Matrix", lb))
    }
  },
  36683: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Tb
    });
    const kb = "undefined" !== typeof WeakRef;
    class Wb {
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 ? arguments[2] : void 0,
          kb = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(bb, cb, sb, kb)
      }
      initialize(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          sb = arguments.length > 2 ? arguments[2] : void 0,
          kb = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = bb, this.skipNextObservers = cb, this.target = sb, this.currentTarget = kb, this
      }
    }
    class ab {
      constructor(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = bb, this.mask = cb, this.scope = sb, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(bb)
      }
    }
    class Tb {
      static FromPromise(bb, cb) {
        const sb = new Tb;
        return bb.then((bb => {
          sb.notifyObservers(bb)
        })).catch((bb => {
          if (!cb) throw bb;
          cb.notifyObservers(bb)
        })), sb
      }
      get observers() {
        return this._observers
      }
      constructor(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = cb, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Wb(0), bb && (this._onObserverAdded = bb)
      }
      add(bb) {
        let cb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          sb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!bb) return null;
        const Wb = new ab(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Wb.unregisterOnNextCall = sb, cb ? this._observers.unshift(Wb) : this._observers.push(Wb), this._onObserverAdded && this._onObserverAdded(Wb), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Wb, this._lastNotifiedValue);
        const Tb = kb ? new WeakRef(this) : {
          deref: () => this
        };
        return Wb._remove = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const cb = Tb.deref();
          cb && (bb ? cb.remove(Wb) : cb._remove(Wb))
        }, Wb
      }
      addOnce(bb) {
        return this.add(bb, void 0, void 0, void 0, !0)
      }
      remove(bb) {
        if (!bb) return !1;
        bb._remove = null;
        return -1 !== this._observers.indexOf(bb) && (this._deferUnregister(bb), !0)
      }
      removeCallback(bb, cb) {
        for (let sb = 0; sb < this._observers.length; sb++) {
          const kb = this._observers[sb];
          if (!kb._willBeUnregistered && (kb.callback === bb && (!cb || cb === kb.scope))) return this._deferUnregister(kb), !0
        }
        return !1
      }
      _deferUnregister(bb) {
        bb._willBeUnregistered || (this._numObserversMarkedAsDeleted++, bb.unregisterOnNextCall = !1, bb._willBeUnregistered = !0, setTimeout((() => {
          this._remove(bb)
        }), 0))
      }
      _remove(bb) {
        let cb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!bb) return !1;
        const sb = this._observers.indexOf(bb);
        return -1 !== sb && (cb && this._numObserversMarkedAsDeleted--, this._observers.splice(sb, 1), !0)
      }
      makeObserverTopPriority(bb) {
        this._remove(bb, !1), this._observers.unshift(bb)
      }
      makeObserverBottomPriority(bb) {
        this._remove(bb, !1), this._observers.push(bb)
      }
      notifyObservers(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          sb = arguments.length > 2 ? arguments[2] : void 0,
          kb = arguments.length > 3 ? arguments[3] : void 0,
          Wb = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = bb), !this._observers.length) return !0;
        const ab = this._eventState;
        ab.mask = cb, ab.target = sb, ab.currentTarget = kb, ab.skipNextObservers = !1, ab.lastReturnValue = bb, ab.userInfo = Wb;
        for (const Tb of this._observers)
          if (!Tb._willBeUnregistered && (Tb.mask & cb && (Tb.unregisterOnNextCall && this._deferUnregister(Tb), Tb.scope ? ab.lastReturnValue = Tb.callback.apply(Tb.scope, [bb, ab]) : ab.lastReturnValue = Tb.callback(bb, ab)), ab.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(bb, cb) {
        let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = cb), bb._willBeUnregistered) return;
        const kb = this._eventState;
        kb.mask = sb, kb.skipNextObservers = !1, bb.unregisterOnNextCall && this._deferUnregister(bb), bb.callback(cb, kb)
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
        const bb = new Tb;
        return bb._observers = this._observers.slice(0), bb
      }
      hasSpecificMask() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const cb of this._observers)
          if (cb.mask & bb || cb.mask === bb) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);