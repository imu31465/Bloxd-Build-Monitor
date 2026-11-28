export const id = 264;
export const ids = [264];
export const modules = {
  38313: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Hb
    });
    var eb = Mb(38318);
    class Hb {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Hb.Instances = [], Hb.OnEnginesDisposedObservable = new eb.b, Hb._LastCreatedScene = null, Hb.UseFallbackTexture = !0, Hb.FallbackTexture = ""
  },
  38308: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb
    });
    class eb {
      static SetMatrixPrecision(bb) {
        if (eb.MatrixTrackPrecisionChange = !1, bb && !eb.MatrixUse64Bits && eb.MatrixTrackedMatrices)
          for (let wb = 0; wb < eb.MatrixTrackedMatrices.length; ++wb) {
            const bb = eb.MatrixTrackedMatrices[wb],
              Mb = bb._m;
            bb._m = new Array(16);
            for (let wb = 0; wb < 16; ++wb) bb._m[wb] = Mb[wb]
          }
        eb.MatrixUse64Bits = bb, eb.MatrixCurrentType = eb.MatrixUse64Bits ? Array : Float32Array, eb.MatrixTrackedMatrices = null
      }
    }
    eb.MatrixUse64Bits = !1, eb.MatrixTrackPrecisionChange = !0, eb.MatrixCurrentType = Float32Array, eb.MatrixTrackedMatrices = []
  },
  38329: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => gb,
      e: () => Lb,
      g: () => lb,
      i: () => eb,
      k: () => pb,
      l: () => Vb
    });
    class eb {}

    function Hb(bb) {
      bb.updateFlag = eb._UpdateFlagSeed++
    }

    function pb(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Hb = bb.ppb(),
        pb = wb.ppb(),
        Vb = Hb[0],
        gb = Hb[1],
        lb = Hb[2],
        Lb = Hb[3],
        Ib = Hb[4],
        Ob = Hb[5],
        Ub = Hb[6],
        tb = Hb[7],
        Cb = Hb[8],
        Eb = Hb[9],
        Fb = Hb[10],
        Bb = Hb[11],
        sb = Hb[12],
        mb = Hb[13],
        hb = Hb[14],
        zb = Hb[15],
        Xb = pb[0],
        xb = pb[1],
        jb = pb[2],
        Kb = pb[3],
        rb = pb[4],
        Rb = pb[5],
        Db = pb[6],
        cb = pb[7],
        Yb = pb[8],
        Zb = pb[9],
        fb = pb[10],
        Ab = pb[11],
        Wb = pb[12],
        Jb = pb[13],
        Sb = pb[14],
        Nb = pb[15];
      Mb[eb] = Vb * Xb + gb * rb + lb * Yb + Lb * Wb, Mb[eb + 1] = Vb * xb + gb * Rb + lb * Zb + Lb * Jb, Mb[eb + 2] = Vb * jb + gb * Db + lb * fb + Lb * Sb, Mb[eb + 3] = Vb * Kb + gb * cb + lb * Ab + Lb * Nb, Mb[eb + 4] = Ib * Xb + Ob * rb + Ub * Yb + tb * Wb, Mb[eb + 5] = Ib * xb + Ob * Rb + Ub * Zb + tb * Jb, Mb[eb + 6] = Ib * jb + Ob * Db + Ub * fb + tb * Sb, Mb[eb + 7] = Ib * Kb + Ob * cb + Ub * Ab + tb * Nb, Mb[eb + 8] = Cb * Xb + Eb * rb + Fb * Yb + Bb * Wb, Mb[eb + 9] = Cb * xb + Eb * Rb + Fb * Zb + Bb * Jb, Mb[eb + 10] = Cb * jb + Eb * Db + Fb * fb + Bb * Sb, Mb[eb + 11] = Cb * Kb + Eb * cb + Fb * Ab + Bb * Nb, Mb[eb + 12] = sb * Xb + mb * rb + hb * Yb + zb * Wb, Mb[eb + 13] = sb * xb + mb * Rb + hb * Zb + zb * Jb, Mb[eb + 14] = sb * jb + mb * Db + hb * fb + zb * Sb, Mb[eb + 15] = sb * Kb + mb * cb + hb * Ab + zb * Nb
    }

    function Vb(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      pb(bb, wb, Mb.ppb(), eb), Hb(Mb)
    }

    function gb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const eb = bb.ppb();
      wb[Mb] = eb[0], wb[Mb + 1] = eb[1], wb[Mb + 2] = eb[2], wb[Mb + 3] = eb[3], wb[Mb + 4] = eb[4], wb[Mb + 5] = eb[5], wb[Mb + 6] = eb[6], wb[Mb + 7] = eb[7], wb[Mb + 8] = eb[8], wb[Mb + 9] = eb[9], wb[Mb + 10] = eb[10], wb[Mb + 11] = eb[11], wb[Mb + 12] = eb[12], wb[Mb + 13] = eb[13], wb[Mb + 14] = eb[14], wb[Mb + 15] = eb[15]
    }

    function lb(bb, wb) {
      const Mb = Lb(bb, wb.ppb());
      return Mb && Hb(wb), Mb
    }

    function Lb(bb, wb) {
      const Mb = bb.ppb(),
        eb = Mb[0],
        Hb = Mb[1],
        pb = Mb[2],
        Vb = Mb[3],
        gb = Mb[4],
        lb = Mb[5],
        Lb = Mb[6],
        Ib = Mb[7],
        Ob = Mb[8],
        Ub = Mb[9],
        tb = Mb[10],
        Cb = Mb[11],
        Eb = Mb[12],
        Fb = Mb[13],
        Bb = Mb[14],
        sb = Mb[15],
        mb = tb * sb - Bb * Cb,
        hb = Ub * sb - Fb * Cb,
        zb = Ub * Bb - Fb * tb,
        Xb = Ob * sb - Eb * Cb,
        xb = Ob * Bb - tb * Eb,
        jb = Ob * Fb - Eb * Ub,
        Kb = +(lb * mb - Lb * hb + Ib * zb),
        rb = -(gb * mb - Lb * Xb + Ib * xb),
        Rb = +(gb * hb - lb * Xb + Ib * jb),
        Db = -(gb * zb - lb * xb + Lb * jb),
        cb = eb * Kb + Hb * rb + pb * Rb + Vb * Db;
      if (0 === cb) return !1;
      const Yb = 1 / cb,
        Zb = Lb * sb - Bb * Ib,
        fb = lb * sb - Fb * Ib,
        Ab = lb * Bb - Fb * Lb,
        Wb = gb * sb - Eb * Ib,
        Jb = gb * Bb - Eb * Lb,
        Sb = gb * Fb - Eb * lb,
        Nb = Lb * Cb - tb * Ib,
        vb = lb * Cb - Ub * Ib,
        Qb = lb * tb - Ub * Lb,
        Gb = gb * Cb - Ob * Ib,
        qb = gb * tb - Ob * Lb,
        ab = gb * Ub - Ob * lb,
        ib = -(Hb * mb - pb * hb + Vb * zb),
        ub = +(eb * mb - pb * Xb + Vb * xb),
        db = -(eb * hb - Hb * Xb + Vb * jb),
        Pb = +(eb * zb - Hb * xb + pb * jb),
        nb = +(Hb * Zb - pb * fb + Vb * Ab),
        yb = -(eb * Zb - pb * Wb + Vb * Jb),
        ob = +(eb * fb - Hb * Wb + Vb * Sb),
        Tb = -(eb * Ab - Hb * Jb + pb * Sb),
        kb = -(Hb * Nb - pb * vb + Vb * Qb),
        bw = +(eb * Nb - pb * Gb + Vb * qb),
        ww = -(eb * vb - Hb * Gb + Vb * ab),
        Mw = +(eb * Qb - Hb * qb + pb * ab);
      return wb[0] = Kb * Yb, wb[1] = ib * Yb, wb[2] = nb * Yb, wb[3] = kb * Yb, wb[4] = rb * Yb, wb[5] = ub * Yb, wb[6] = yb * Yb, wb[7] = bw * Yb, wb[8] = Rb * Yb, wb[9] = db * Yb, wb[10] = ob * Yb, wb[11] = ww * Yb, wb[12] = Db * Yb, wb[13] = Pb * Yb, wb[14] = Tb * Yb, wb[15] = Mw * Yb, !0
    }
    eb._UpdateFlagSeed = 0
  },
  38285: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Eb,
      e: () => Cb,
      g: () => hb,
      j: () => Bb,
      m: () => Ob,
      o: () => Ub,
      q: () => tb
    });
    var eb = Mb(38294),
      Hb = Mb(38299),
      pb = Mb(38308),
      Vb = Mb(38313),
      gb = Mb(38322),
      lb = Mb(38329),
      Lb = Mb(38333);
    const Ib = bb => parseInt(bb.toString().replace(/\W/g, ""));
    class Ob {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = bb, this.y = wb
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let bb = Ib(this.x);
        return bb = 397 * bb ^ Ib(this.y), bb
      }
      toArray(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bb[wb] = this.x, bb[wb + 1] = this.y, this
      }
      dI(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Ob.FromArrayToRef(bb, wb, this), this
      }
      ppb() {
        return [this.x, this.y]
      }
      eZ(bb) {
        return this.x = bb.x, this.y = bb.y, this
      }
      twb(bb, wb) {
        return this.x = bb, this.y = wb, this
      }
      set(bb, wb) {
        return this.twb(bb, wb)
      }
      Jbb(bb) {
        return this.twb(bb, bb)
      }
      add(bb) {
        return new Ob(this.x + bb.x, this.y + bb.y)
      }
      addToRef(bb, wb) {
        return wb.x = this.x + bb.x, wb.y = this.y + bb.y, wb
      }
      addInPlace(bb) {
        return this.x += bb.x, this.y += bb.y, this
      }
      addInPlaceFromFloats(bb, wb) {
        return this.x += bb, this.y += wb, this
      }
      addVector3(bb) {
        return new Ob(this.x + bb.x, this.y + bb.y)
      }
      subtract(bb) {
        return new Ob(this.x - bb.x, this.y - bb.y)
      }
      subtractToRef(bb, wb) {
        return wb.x = this.x - bb.x, wb.y = this.y - bb.y, wb
      }
      zpb(bb) {
        return this.x -= bb.x, this.y -= bb.y, this
      }
      multiplyInPlace(bb) {
        return this.x *= bb.x, this.y *= bb.y, this
      }
      multiply(bb) {
        return new Ob(this.x * bb.x, this.y * bb.y)
      }
      multiplyToRef(bb, wb) {
        return wb.x = this.x * bb.x, wb.y = this.y * bb.y, wb
      }
      multiplyByFloats(bb, wb) {
        return new Ob(this.x * bb, this.y * wb)
      }
      divide(bb) {
        return new Ob(this.x / bb.x, this.y / bb.y)
      }
      divideToRef(bb, wb) {
        return wb.x = this.x / bb.x, wb.y = this.y / bb.y, wb
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
      minimizeInPlaceFromFloats(bb, wb) {
        return this.x = Math.min(bb, this.x), this.y = Math.min(wb, this.y), this
      }
      maximizeInPlaceFromFloats(bb, wb) {
        return this.x = Math.max(bb, this.x), this.y = Math.max(wb, this.y), this
      }
      subtractFromFloats(bb, wb) {
        return new Ob(this.x - bb, this.y - wb)
      }
      subtractFromFloatsToRef(bb, wb, Mb) {
        return Mb.x = this.x - bb, Mb.y = this.y - wb, Mb
      }
      oE() {
        return new Ob(-this.x, -this.y)
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
        return new Ob(this.x * bb, this.y * bb)
      }
      scaleToRef(bb, wb) {
        return wb.x = this.x * bb, wb.y = this.y * bb, wb
      }
      scaleAndAddToRef(bb, wb) {
        return wb.x += this.x * bb, wb.y += this.y * bb, wb
      }
      equals(bb) {
        return bb && this.x === bb.x && this.y === bb.y
      }
      equalsWithEpsilon(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.e;
        return bb && (0, gb.WithinEpsilon)(this.x, bb.x, wb) && (0, gb.WithinEpsilon)(this.y, bb.y, wb)
      }
      Flb(bb, wb) {
        return this.x === bb && this.y === wb
      }
      floor() {
        return new Ob(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(bb) {
        return bb.x = Math.floor(this.x), bb.y = Math.floor(this.y), bb
      }
      fract() {
        return new Ob(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(bb) {
        return bb.x = this.x - Math.floor(this.x), bb.y = this.y - Math.floor(this.y), bb
      }
      rotate(bb) {
        return this.rotateToRef(bb, new Ob)
      }
      rotateToRef(bb, wb) {
        const Mb = Math.cos(bb),
          eb = Math.sin(bb);
        return wb.x = Mb * this.x - eb * this.y, wb.y = eb * this.x + Mb * this.y, wb
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
        const bb = new Ob;
        return this.normalizeToRef(bb), bb
      }
      normalizeToRef(bb) {
        const wb = this.length();
        return 0 === wb || 1 === wb ? (bb.x = this.x, bb.y = this.y, bb) : this.scaleToRef(1 / wb, bb)
      }
      clone() {
        return new Ob(this.x, this.y)
      }
      dot(bb) {
        return this.x * bb.x + this.y * bb.y
      }
      static Zero() {
        return new Ob(0, 0)
      }
      static One() {
        return new Ob(1, 1)
      }
      static Random() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Ob((0, gb.RandomRange)(bb, wb), (0, gb.RandomRange)(bb, wb))
      }
      static RandomToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).twb((0, gb.RandomRange)(bb, wb), (0, gb.RandomRange)(bb, wb))
      }
      static get ZeroReadOnly() {
        return Ob._ZeroReadOnly
      }
      static FromArray(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Ob(bb[wb], bb[wb + 1])
      }
      static FromArrayToRef(bb, wb, Mb) {
        return Mb.x = bb[wb], Mb.y = bb[wb + 1], Mb
      }
      static FromFloatsToRef(bb, wb, Mb) {
        return Mb.twb(bb, wb), Mb
      }
      static CatmullRom(bb, wb, Mb, eb, Hb) {
        const pb = Hb * Hb,
          Vb = Hb * pb,
          gb = .5 * (2 * wb.x + (-bb.x + Mb.x) * Hb + (2 * bb.x - 5 * wb.x + 4 * Mb.x - eb.x) * pb + (-bb.x + 3 * wb.x - 3 * Mb.x + eb.x) * Vb),
          lb = .5 * (2 * wb.y + (-bb.y + Mb.y) * Hb + (2 * bb.y - 5 * wb.y + 4 * Mb.y - eb.y) * pb + (-bb.y + 3 * wb.y - 3 * Mb.y + eb.y) * Vb);
        return new Ob(gb, lb)
      }
      static ClampToRef(bb, wb, Mb, eb) {
        return eb.x = (0, gb.Clamp)(bb.x, wb.x, Mb.x), eb.y = (0, gb.Clamp)(bb.y, wb.y, Mb.y), eb
      }
      static Clamp(bb, wb, Mb) {
        const eb = (0, gb.Clamp)(bb.x, wb.x, Mb.x),
          Hb = (0, gb.Clamp)(bb.y, wb.y, Mb.y);
        return new Ob(eb, Hb)
      }
      static Hermite(bb, wb, Mb, eb, Hb) {
        const pb = Hb * Hb,
          Vb = Hb * pb,
          gb = 2 * Vb - 3 * pb + 1,
          lb = -2 * Vb + 3 * pb,
          Lb = Vb - 2 * pb + Hb,
          Ib = Vb - pb,
          Ub = bb.x * gb + Mb.x * lb + wb.x * Lb + eb.x * Ib,
          tb = bb.y * gb + Mb.y * lb + wb.y * Lb + eb.y * Ib;
        return new Ob(Ub, tb)
      }
      static Hermite1stDerivative(bb, wb, Mb, eb, Hb) {
        return this.Hermite1stDerivativeToRef(bb, wb, Mb, eb, Hb, new Ob)
      }
      static Hermite1stDerivativeToRef(bb, wb, Mb, eb, Hb, pb) {
        const Vb = Hb * Hb;
        return pb.x = 6 * (Vb - Hb) * bb.x + (3 * Vb - 4 * Hb + 1) * wb.x + 6 * (-Vb + Hb) * Mb.x + (3 * Vb - 2 * Hb) * eb.x, pb.y = 6 * (Vb - Hb) * bb.y + (3 * Vb - 4 * Hb + 1) * wb.y + 6 * (-Vb + Hb) * Mb.y + (3 * Vb - 2 * Hb) * eb.y, pb
      }
      static Lerp(bb, wb, Mb) {
        return Ob.LerpToRef(bb, wb, Mb, new Ob)
      }
      static LerpToRef(bb, wb, Mb, eb) {
        return eb.x = bb.x + (wb.x - bb.x) * Mb, eb.y = bb.y + (wb.y - bb.y) * Mb, eb
      }
      static Dot(bb, wb) {
        return bb.x * wb.x + bb.y * wb.y
      }
      static Normalize(bb) {
        return Ob.NormalizeToRef(bb, new Ob)
      }
      static NormalizeToRef(bb, wb) {
        return bb.normalizeToRef(wb), wb
      }
      static Minimize(bb, wb) {
        const Mb = bb.x < wb.x ? bb.x : wb.x,
          eb = bb.y < wb.y ? bb.y : wb.y;
        return new Ob(Mb, eb)
      }
      static Maximize(bb, wb) {
        const Mb = bb.x > wb.x ? bb.x : wb.x,
          eb = bb.y > wb.y ? bb.y : wb.y;
        return new Ob(Mb, eb)
      }
      static Transform(bb, wb) {
        return Ob.TransformToRef(bb, wb, new Ob)
      }
      static TransformToRef(bb, wb, Mb) {
        const eb = wb.m,
          Hb = bb.x * eb[0] + bb.y * eb[4] + eb[12],
          pb = bb.x * eb[1] + bb.y * eb[5] + eb[13];
        return Mb.x = Hb, Mb.y = pb, Mb
      }
      static PointInTriangle(bb, wb, Mb, eb) {
        const Hb = .5 * (-Mb.y * eb.x + wb.y * (-Mb.x + eb.x) + wb.x * (Mb.y - eb.y) + Mb.x * eb.y),
          pb = Hb < 0 ? -1 : 1,
          Vb = (wb.y * eb.x - wb.x * eb.y + (eb.y - wb.y) * bb.x + (wb.x - eb.x) * bb.y) * pb,
          gb = (wb.x * Mb.y - wb.y * Mb.x + (wb.y - Mb.y) * bb.x + (Mb.x - wb.x) * bb.y) * pb;
        return Vb > 0 && gb > 0 && Vb + gb < 2 * Hb * pb
      }
      static Distance(bb, wb) {
        return Math.sqrt(Ob.DistanceSquared(bb, wb))
      }
      static DistanceSquared(bb, wb) {
        const Mb = bb.x - wb.x,
          eb = bb.y - wb.y;
        return Mb * Mb + eb * eb
      }
      static Center(bb, wb) {
        return Ob.CenterToRef(bb, wb, new Ob)
      }
      static CenterToRef(bb, wb, Mb) {
        return Mb.twb((bb.x + wb.x) / 2, (bb.y + wb.y) / 2)
      }
      static DistanceOfPointFromSegment(bb, wb, Mb) {
        const eb = Ob.DistanceSquared(wb, Mb);
        if (0 === eb) return Ob.Distance(bb, wb);
        const Hb = Mb.subtract(wb),
          pb = Math.max(0, Math.min(1, Ob.Dot(bb.subtract(wb), Hb) / eb)),
          Vb = wb.add(Hb.multiplyByFloats(pb, pb));
        return Ob.Distance(bb, Vb)
      }
    }
    Ob._V8PerformanceHack = new Ob(.5, .5), Ob._ZeroReadOnly = Ob.Zero();
    class Ub {
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
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = bb, this._y = wb, this._z = Mb
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "YC"
      }
      getHashCode() {
        let bb = Ib(this._x);
        return bb = 397 * bb ^ Ib(this._y), bb = 397 * bb ^ Ib(this._z), bb
      }
      ppb() {
        return [this._x, this._y, this._z]
      }
      toArray(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bb[wb] = this._x, bb[wb + 1] = this._y, bb[wb + 2] = this._z, this
      }
      dI(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Ub.FromArrayToRef(bb, wb, this), this
      }
      toQuaternion() {
        return Cb.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(bb) {
        return this._x += bb._x, this._y += bb._y, this._z += bb._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(bb, wb, Mb) {
        return this._x += bb, this._y += wb, this._z += Mb, this._isDirty = !0, this
      }
      add(bb) {
        return new Ub(this._x + bb._x, this._y + bb._y, this._z + bb._z)
      }
      addToRef(bb, wb) {
        return wb._x = this._x + bb._x, wb._y = this._y + bb._y, wb._z = this._z + bb._z, wb._isDirty = !0, wb
      }
      zpb(bb) {
        return this._x -= bb._x, this._y -= bb._y, this._z -= bb._z, this._isDirty = !0, this
      }
      subtract(bb) {
        return new Ub(this._x - bb._x, this._y - bb._y, this._z - bb._z)
      }
      subtractToRef(bb, wb) {
        return this.subtractFromFloatsToRef(bb._x, bb._y, bb._z, wb)
      }
      subtractFromFloats(bb, wb, Mb) {
        return new Ub(this._x - bb, this._y - wb, this._z - Mb)
      }
      subtractFromFloatsToRef(bb, wb, Mb, eb) {
        return eb._x = this._x - bb, eb._y = this._y - wb, eb._z = this._z - Mb, eb._isDirty = !0, eb
      }
      oE() {
        return new Ub(-this._x, -this._y, -this._z)
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
        return new Ub(this._x * bb, this._y * bb, this._z * bb)
      }
      scaleToRef(bb, wb) {
        return wb._x = this._x * bb, wb._y = this._y * bb, wb._z = this._z * bb, wb._isDirty = !0, wb
      }
      getNormalToRef(bb) {
        const wb = this.length();
        let Mb = Math.acos(this._y / wb);
        const eb = Math.atan2(this._z, this._x);
        Mb > Math.PI / 2 ? Mb -= Math.PI / 2 : Mb += Math.PI / 2;
        const Hb = wb * Math.sin(Mb) * Math.cos(eb),
          pb = wb * Math.cos(Mb),
          Vb = wb * Math.sin(Mb) * Math.sin(eb);
        return bb.set(Hb, pb, Vb), bb
      }
      applyRotationQuaternionToRef(bb, wb) {
        const Mb = this._x,
          eb = this._y,
          Hb = this._z,
          pb = bb._x,
          Vb = bb._y,
          gb = bb._z,
          lb = bb._w,
          Lb = 2 * (Vb * Hb - gb * eb),
          Ib = 2 * (gb * Mb - pb * Hb),
          Ob = 2 * (pb * eb - Vb * Mb);
        return wb._x = Mb + lb * Lb + Vb * Ob - gb * Ib, wb._y = eb + lb * Ib + gb * Lb - pb * Ob, wb._z = Hb + lb * Ob + pb * Ib - Vb * Lb, wb._isDirty = !0, wb
      }
      applyRotationQuaternionInPlace(bb) {
        return this.applyRotationQuaternionToRef(bb, this)
      }
      applyRotationQuaternion(bb) {
        return this.applyRotationQuaternionToRef(bb, new Ub)
      }
      scaleAndAddToRef(bb, wb) {
        return wb._x += this._x * bb, wb._y += this._y * bb, wb._z += this._z * bb, wb._isDirty = !0, wb
      }
      projectOnPlane(bb, wb) {
        return this.projectOnPlaneToRef(bb, wb, new Ub)
      }
      projectOnPlaneToRef(bb, wb, Mb) {
        const eb = bb.normal,
          Hb = bb.d,
          pb = Fb.YC[0];
        this.subtractToRef(wb, pb), pb.normalize();
        const Vb = Ub.Dot(pb, eb);
        if (Math.abs(Vb) < 1e-10) Mb.Jbb(1 / 0);
        else {
          const bb = -(Ub.Dot(wb, eb) + Hb) / Vb,
            gb = pb.scaleInPlace(bb);
          wb.addToRef(gb, Mb)
        }
        return Mb
      }
      equals(bb) {
        return bb && this._x === bb._x && this._y === bb._y && this._z === bb._z
      }
      equalsWithEpsilon(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.e;
        return bb && (0, gb.WithinEpsilon)(this._x, bb._x, wb) && (0, gb.WithinEpsilon)(this._y, bb._y, wb) && (0, gb.WithinEpsilon)(this._z, bb._z, wb)
      }
      Flb(bb, wb, Mb) {
        return this._x === bb && this._y === wb && this._z === Mb
      }
      multiplyInPlace(bb) {
        return this._x *= bb._x, this._y *= bb._y, this._z *= bb._z, this._isDirty = !0, this
      }
      multiply(bb) {
        return this.multiplyByFloats(bb._x, bb._y, bb._z)
      }
      multiplyToRef(bb, wb) {
        return wb._x = this._x * bb._x, wb._y = this._y * bb._y, wb._z = this._z * bb._z, wb._isDirty = !0, wb
      }
      multiplyByFloats(bb, wb, Mb) {
        return new Ub(this._x * bb, this._y * wb, this._z * Mb)
      }
      divide(bb) {
        return new Ub(this._x / bb._x, this._y / bb._y, this._z / bb._z)
      }
      divideToRef(bb, wb) {
        return wb._x = this._x / bb._x, wb._y = this._y / bb._y, wb._z = this._z / bb._z, wb._isDirty = !0, wb
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
      minimizeInPlaceFromFloats(bb, wb, Mb) {
        return bb < this._x && (this.x = bb), wb < this._y && (this.y = wb), Mb < this._z && (this.z = Mb), this
      }
      maximizeInPlaceFromFloats(bb, wb, Mb) {
        return bb > this._x && (this.x = bb), wb > this._y && (this.y = wb), Mb > this._z && (this.z = Mb), this
      }
      isNonUniformWithinEpsilon(bb) {
        const wb = Math.abs(this._x),
          Mb = Math.abs(this._y);
        if (!(0, gb.WithinEpsilon)(wb, Mb, bb)) return !0;
        const eb = Math.abs(this._z);
        return !(0, gb.WithinEpsilon)(wb, eb, bb) || !(0, gb.WithinEpsilon)(Mb, eb, bb)
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
        return new Ub(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(bb) {
        return bb._x = this._x - Math.floor(this._x), bb._y = this._y - Math.floor(this._y), bb._z = this._z - Math.floor(this._z), bb._isDirty = !0, bb
      }
      fract() {
        return new Ub(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
        const wb = Fb.YC[0].eZ(this);
        return this.x = wb[bb[0]], this.y = wb[bb[1]], this.z = wb[bb[2]], this
      }
      rotateByQuaternionToRef(bb, wb) {
        return bb.toRotationMatrix(Fb.Matrix[0]), Ub.TransformCoordinatesToRef(this, Fb.Matrix[0], wb), wb
      }
      rotateByQuaternionAroundPointToRef(bb, wb, Mb) {
        return this.subtractToRef(wb, Fb.YC[0]), Fb.YC[0].rotateByQuaternionToRef(bb, Fb.YC[0]), wb.addToRef(Fb.YC[0], Mb), Mb
      }
      cross(bb) {
        return Ub.CrossToRef(this, bb, new Ub)
      }
      normalizeFromLength(bb) {
        return 0 === bb || 1 === bb ? this : this.scaleInPlace(1 / bb)
      }
      normalizeToNew() {
        return this.normalizeToRef(new Ub)
      }
      normalizeToRef(bb) {
        const wb = this.length();
        return 0 === wb || 1 === wb ? (bb._x = this._x, bb._y = this._y, bb._z = this._z, bb._isDirty = !0, bb) : this.scaleToRef(1 / wb, bb)
      }
      clone() {
        return new Ub(this._x, this._y, this._z)
      }
      eZ(bb) {
        return this.twb(bb._x, bb._y, bb._z)
      }
      twb(bb, wb, Mb) {
        return this._x = bb, this._y = wb, this._z = Mb, this._isDirty = !0, this
      }
      set(bb, wb, Mb) {
        return this.twb(bb, wb, Mb)
      }
      Jbb(bb) {
        return this._x = this._y = this._z = bb, this._isDirty = !0, this
      }
      static GetClipFactor(bb, wb, Mb, eb) {
        const Hb = Ub.Dot(bb, Mb);
        return (Hb - eb) / (Hb - Ub.Dot(wb, Mb))
      }
      static GetAngleBetweenVectors(bb, wb, Mb) {
        const eb = bb.normalizeToRef(Fb.YC[1]),
          Hb = wb.normalizeToRef(Fb.YC[2]);
        let pb = Ub.Dot(eb, Hb);
        pb = (0, gb.Clamp)(pb, -1, 1);
        const Vb = Math.acos(pb),
          lb = Fb.YC[3];
        return Ub.CrossToRef(eb, Hb, lb), Ub.Dot(lb, Mb) > 0 ? isNaN(Vb) ? 0 : Vb : isNaN(Vb) ? -Math.PI : -Math.acos(pb)
      }
      static GetAngleBetweenVectorsOnPlane(bb, wb, Mb) {
        Fb.YC[0].eZ(bb);
        const eb = Fb.YC[0];
        Fb.YC[1].eZ(wb);
        const Hb = Fb.YC[1];
        Fb.YC[2].eZ(Mb);
        const pb = Fb.YC[2],
          Vb = Fb.YC[3],
          lb = Fb.YC[4];
        eb.normalize(), Hb.normalize(), pb.normalize(), Ub.CrossToRef(pb, eb, Vb), Ub.CrossToRef(Vb, pb, lb);
        const Lb = Math.atan2(Ub.Dot(Hb, Vb), Ub.Dot(Hb, lb));
        return (0, gb.NormalizeRadians)(Lb)
      }
      static PitchYawRollToMoveBetweenPointsToRef(bb, wb, Mb) {
        const eb = Bb.YC[0];
        return wb.subtractToRef(bb, eb), Mb._y = Math.atan2(eb.x, eb.z) || 0, Mb._x = Math.atan2(Math.sqrt(eb.x ** 2 + eb.z ** 2), eb.y) || 0, Mb._z = 0, Mb._isDirty = !0, Mb
      }
      static PitchYawRollToMoveBetweenPoints(bb, wb) {
        const Mb = Ub.Zero();
        return Ub.PitchYawRollToMoveBetweenPointsToRef(bb, wb, Mb)
      }
      static SlerpToRef(bb, wb, Mb, Hb) {
        Mb = (0, gb.Clamp)(Mb, 0, 1);
        const pb = Fb.YC[0],
          Vb = Fb.YC[1];
        pb.eZ(bb);
        const lb = pb.length();
        pb.normalizeFromLength(lb), Vb.eZ(wb);
        const Lb = Vb.length();
        Vb.normalizeFromLength(Lb);
        const Ib = Ub.Dot(pb, Vb);
        let Ob, tb;
        if (Ib < 1 - eb.e) {
          const bb = Math.acos(Ib),
            wb = 1 / Math.sin(bb);
          Ob = Math.sin((1 - Mb) * bb) * wb, tb = Math.sin(Mb * bb) * wb
        } else Ob = 1 - Mb, tb = Mb;
        return pb.scaleInPlace(Ob), Vb.scaleInPlace(tb), Hb.eZ(pb).addInPlace(Vb), Hb.scaleInPlace((0, gb.Lerp)(lb, Lb, Mb)), Hb
      }
      static SmoothToRef(bb, wb, Mb, eb, Hb) {
        return Ub.SlerpToRef(bb, wb, 0 === eb ? 1 : Mb / eb, Hb), Hb
      }
      static FromArray(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Ub(bb[wb], bb[wb + 1], bb[wb + 2])
      }
      static FromFloatArray(bb, wb) {
        return Ub.FromArray(bb, wb)
      }
      static FromArrayToRef(bb, wb, Mb) {
        return Mb._x = bb[wb], Mb._y = bb[wb + 1], Mb._z = bb[wb + 2], Mb._isDirty = !0, Mb
      }
      static FromFloatArrayToRef(bb, wb, Mb) {
        return Ub.FromArrayToRef(bb, wb, Mb)
      }
      static FromFloatsToRef(bb, wb, Mb, eb) {
        return eb.twb(bb, wb, Mb), eb
      }
      static Zero() {
        return new Ub(0, 0, 0)
      }
      static One() {
        return new Ub(1, 1, 1)
      }
      static Up() {
        return new Ub(0, 1, 0)
      }
      static get UpReadOnly() {
        return Ub._UpReadOnly
      }
      static get DownReadOnly() {
        return Ub._DownReadOnly
      }
      static get RightReadOnly() {
        return Ub._RightReadOnly
      }
      static get LeftReadOnly() {
        return Ub._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return Ub._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return Ub._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return Ub._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return Ub._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return Ub._ZeroReadOnly
      }
      static get OneReadOnly() {
        return Ub._OneReadOnly
      }
      static Down() {
        return new Ub(0, -1, 0)
      }
      static Forward() {
        return new Ub(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new Ub(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new Ub(1, 0, 0)
      }
      static Left() {
        return new Ub(-1, 0, 0)
      }
      static Random() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Ub((0, gb.RandomRange)(bb, wb), (0, gb.RandomRange)(bb, wb), (0, gb.RandomRange)(bb, wb))
      }
      static RandomToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).twb((0, gb.RandomRange)(bb, wb), (0, gb.RandomRange)(bb, wb), (0, gb.RandomRange)(bb, wb))
      }
      static TransformCoordinates(bb, wb) {
        const Mb = Ub.Zero();
        return Ub.TransformCoordinatesToRef(bb, wb, Mb), Mb
      }
      static TransformCoordinatesToRef(bb, wb, Mb) {
        return Ub.TransformCoordinatesFromFloatsToRef(bb._x, bb._y, bb._z, wb, Mb), Mb
      }
      static TransformCoordinatesFromFloatsToRef(bb, wb, Mb, eb, Hb) {
        const pb = eb.m,
          Vb = bb * pb[0] + wb * pb[4] + Mb * pb[8] + pb[12],
          gb = bb * pb[1] + wb * pb[5] + Mb * pb[9] + pb[13],
          lb = bb * pb[2] + wb * pb[6] + Mb * pb[10] + pb[14],
          Lb = 1 / (bb * pb[3] + wb * pb[7] + Mb * pb[11] + pb[15]);
        return Hb._x = Vb * Lb, Hb._y = gb * Lb, Hb._z = lb * Lb, Hb._isDirty = !0, Hb
      }
      static TransformNormal(bb, wb) {
        const Mb = Ub.Zero();
        return Ub.TransformNormalToRef(bb, wb, Mb), Mb
      }
      static TransformNormalToRef(bb, wb, Mb) {
        return this.TransformNormalFromFloatsToRef(bb._x, bb._y, bb._z, wb, Mb), Mb
      }
      static TransformNormalFromFloatsToRef(bb, wb, Mb, eb, Hb) {
        const pb = eb.m;
        return Hb._x = bb * pb[0] + wb * pb[4] + Mb * pb[8], Hb._y = bb * pb[1] + wb * pb[5] + Mb * pb[9], Hb._z = bb * pb[2] + wb * pb[6] + Mb * pb[10], Hb._isDirty = !0, Hb
      }
      static CatmullRom(bb, wb, Mb, eb, Hb) {
        const pb = Hb * Hb,
          Vb = Hb * pb,
          gb = .5 * (2 * wb._x + (-bb._x + Mb._x) * Hb + (2 * bb._x - 5 * wb._x + 4 * Mb._x - eb._x) * pb + (-bb._x + 3 * wb._x - 3 * Mb._x + eb._x) * Vb),
          lb = .5 * (2 * wb._y + (-bb._y + Mb._y) * Hb + (2 * bb._y - 5 * wb._y + 4 * Mb._y - eb._y) * pb + (-bb._y + 3 * wb._y - 3 * Mb._y + eb._y) * Vb),
          Lb = .5 * (2 * wb._z + (-bb._z + Mb._z) * Hb + (2 * bb._z - 5 * wb._z + 4 * Mb._z - eb._z) * pb + (-bb._z + 3 * wb._z - 3 * Mb._z + eb._z) * Vb);
        return new Ub(gb, lb, Lb)
      }
      static Clamp(bb, wb, Mb) {
        const eb = new Ub;
        return Ub.ClampToRef(bb, wb, Mb, eb), eb
      }
      static ClampToRef(bb, wb, Mb, eb) {
        let Hb = bb._x;
        Hb = Hb > Mb._x ? Mb._x : Hb, Hb = Hb < wb._x ? wb._x : Hb;
        let pb = bb._y;
        pb = pb > Mb._y ? Mb._y : pb, pb = pb < wb._y ? wb._y : pb;
        let Vb = bb._z;
        return Vb = Vb > Mb._z ? Mb._z : Vb, Vb = Vb < wb._z ? wb._z : Vb, eb.twb(Hb, pb, Vb), eb
      }
      static CheckExtends(bb, wb, Mb) {
        wb.minimizeInPlace(bb), Mb.maximizeInPlace(bb)
      }
      static Hermite(bb, wb, Mb, eb, Hb) {
        const pb = Hb * Hb,
          Vb = Hb * pb,
          gb = 2 * Vb - 3 * pb + 1,
          lb = -2 * Vb + 3 * pb,
          Lb = Vb - 2 * pb + Hb,
          Ib = Vb - pb,
          Ob = bb._x * gb + Mb._x * lb + wb._x * Lb + eb._x * Ib,
          tb = bb._y * gb + Mb._y * lb + wb._y * Lb + eb._y * Ib,
          Cb = bb._z * gb + Mb._z * lb + wb._z * Lb + eb._z * Ib;
        return new Ub(Ob, tb, Cb)
      }
      static Hermite1stDerivative(bb, wb, Mb, eb, Hb) {
        const pb = new Ub;
        return this.Hermite1stDerivativeToRef(bb, wb, Mb, eb, Hb, pb), pb
      }
      static Hermite1stDerivativeToRef(bb, wb, Mb, eb, Hb, pb) {
        const Vb = Hb * Hb;
        return pb._x = 6 * (Vb - Hb) * bb._x + (3 * Vb - 4 * Hb + 1) * wb._x + 6 * (-Vb + Hb) * Mb._x + (3 * Vb - 2 * Hb) * eb._x, pb._y = 6 * (Vb - Hb) * bb._y + (3 * Vb - 4 * Hb + 1) * wb._y + 6 * (-Vb + Hb) * Mb._y + (3 * Vb - 2 * Hb) * eb._y, pb._z = 6 * (Vb - Hb) * bb._z + (3 * Vb - 4 * Hb + 1) * wb._z + 6 * (-Vb + Hb) * Mb._z + (3 * Vb - 2 * Hb) * eb._z, pb._isDirty = !0, pb
      }
      static Lerp(bb, wb, Mb) {
        const eb = new Ub(0, 0, 0);
        return Ub.LerpToRef(bb, wb, Mb, eb), eb
      }
      static LerpToRef(bb, wb, Mb, eb) {
        return eb._x = bb._x + (wb._x - bb._x) * Mb, eb._y = bb._y + (wb._y - bb._y) * Mb, eb._z = bb._z + (wb._z - bb._z) * Mb, eb._isDirty = !0, eb
      }
      static Dot(bb, wb) {
        return bb._x * wb._x + bb._y * wb._y + bb._z * wb._z
      }
      dot(bb) {
        return this._x * bb._x + this._y * bb._y + this._z * bb._z
      }
      static Cross(bb, wb) {
        const Mb = new Ub;
        return Ub.CrossToRef(bb, wb, Mb), Mb
      }
      static CrossToRef(bb, wb, Mb) {
        const eb = bb._y * wb._z - bb._z * wb._y,
          Hb = bb._z * wb._x - bb._x * wb._z,
          pb = bb._x * wb._y - bb._y * wb._x;
        return Mb.twb(eb, Hb, pb), Mb
      }
      static Normalize(bb) {
        const wb = Ub.Zero();
        return Ub.NormalizeToRef(bb, wb), wb
      }
      static NormalizeToRef(bb, wb) {
        return bb.normalizeToRef(wb), wb
      }
      static Project(bb, wb, Mb, eb) {
        const Hb = new Ub;
        return Ub.ProjectToRef(bb, wb, Mb, eb, Hb), Hb
      }
      static ProjectToRef(bb, wb, Mb, eb, Hb) {
        const pb = eb.width,
          gb = eb.height,
          lb = eb.x,
          Lb = eb.y,
          Ib = Fb.Matrix[1],
          Ob = Vb.e.LastCreatedEngine?.isNDCHalfZRange,
          tb = Ob ? 1 : .5,
          Cb = Ob ? 0 : .5;
        Eb.FromValuesToRef(pb / 2, 0, 0, 0, 0, -gb / 2, 0, 0, 0, 0, tb, 0, lb + pb / 2, gb / 2 + Lb, Cb, 1, Ib);
        const Bb = Fb.Matrix[0];
        return wb.multiplyToRef(Mb, Bb), Bb.multiplyToRef(Ib, Bb), Ub.TransformCoordinatesToRef(bb, Bb, Hb), Hb
      }
      static Reflect(bb, wb) {
        return this.ReflectToRef(bb, wb, new Ub)
      }
      static ReflectToRef(bb, wb, Mb) {
        const eb = Bb.YC[0];
        return eb.eZ(wb).scaleInPlace(2 * Ub.Dot(bb, wb)), Mb.eZ(bb).zpb(eb)
      }
      static UnprojectFromTransform(bb, wb, Mb, eb, Hb) {
        return this.Unproject(bb, wb, Mb, eb, Hb, Eb.IdentityReadOnly)
      }
      static Unproject(bb, wb, Mb, eb, Hb, pb) {
        const Vb = new Ub;
        return Ub.UnprojectToRef(bb, wb, Mb, eb, Hb, pb, Vb), Vb
      }
      static UnprojectToRef(bb, wb, Mb, eb, Hb, pb, Vb) {
        return Ub.UnprojectFloatsToRef(bb._x, bb._y, bb._z, wb, Mb, eb, Hb, pb, Vb), Vb
      }
      static UnprojectFloatsToRef(bb, wb, Mb, eb, Hb, pb, gb, lb, Lb) {
        const Ib = Fb.Matrix[0];
        pb.multiplyToRef(gb, Ib), Ib.multiplyToRef(lb, Ib), Ib.invert();
        const Ob = Fb.YC[0];
        return Ob.x = bb / eb * 2 - 1, Ob.y = -(wb / Hb * 2 - 1), Vb.e.LastCreatedEngine?.isNDCHalfZRange ? Ob.z = Mb : Ob.z = 2 * Mb - 1, Ub.TransformCoordinatesToRef(Ob, Ib, Lb), Lb
      }
      static Minimize(bb, wb) {
        const Mb = new Ub;
        return Mb.eZ(bb), Mb.minimizeInPlace(wb), Mb
      }
      static Maximize(bb, wb) {
        const Mb = new Ub;
        return Mb.eZ(bb), Mb.maximizeInPlace(wb), Mb
      }
      static Distance(bb, wb) {
        return Math.sqrt(Ub.DistanceSquared(bb, wb))
      }
      static DistanceSquared(bb, wb) {
        const Mb = bb._x - wb._x,
          eb = bb._y - wb._y,
          Hb = bb._z - wb._z;
        return Mb * Mb + eb * eb + Hb * Hb
      }
      static ProjectOnTriangleToRef(bb, wb, Mb, Hb, pb) {
        const Vb = Fb.YC[0],
          lb = Fb.YC[1],
          Lb = Fb.YC[2],
          Ib = Fb.YC[3],
          Ob = Fb.YC[4];
        Mb.subtractToRef(wb, Vb), Hb.subtractToRef(wb, lb), Hb.subtractToRef(Mb, Lb);
        const tb = Vb.length(),
          Cb = lb.length(),
          Eb = Lb.length();
        if (tb < eb.e || Cb < eb.e || Eb < eb.e) return pb.eZ(wb), Ub.Distance(bb, wb);
        bb.subtractToRef(wb, Ob), Ub.CrossToRef(Vb, lb, Ib);
        const Bb = Ib.length();
        if (Bb < eb.e) return pb.eZ(wb), Ub.Distance(bb, wb);
        Ib.normalizeFromLength(Bb);
        let sb = Ob.length();
        if (sb < eb.e) return pb.eZ(wb), 0;
        Ob.normalizeFromLength(sb);
        const mb = Ub.Dot(Ib, Ob),
          hb = Fb.YC[5],
          zb = Fb.YC[6];
        hb.eZ(Ib).scaleInPlace(-sb * mb), zb.eZ(bb).addInPlace(hb);
        const Xb = Fb.YC[4],
          xb = Fb.YC[5],
          jb = Fb.YC[7],
          Kb = Fb.YC[8];
        Xb.eZ(Vb).scaleInPlace(1 / tb), Kb.eZ(lb).scaleInPlace(1 / Cb), Xb.addInPlace(Kb).scaleInPlace(-1), xb.eZ(Vb).scaleInPlace(-1 / tb), Kb.eZ(Lb).scaleInPlace(1 / Eb), xb.addInPlace(Kb).scaleInPlace(-1), jb.eZ(Lb).scaleInPlace(-1 / Eb), Kb.eZ(lb).scaleInPlace(-1 / Cb), jb.addInPlace(Kb).scaleInPlace(-1);
        const rb = Fb.YC[9];
        let Rb;
        rb.eZ(zb).zpb(wb), Ub.CrossToRef(Xb, rb, Kb), Rb = Ub.Dot(Kb, Ib);
        const Db = Rb;
        rb.eZ(zb).zpb(Mb), Ub.CrossToRef(xb, rb, Kb), Rb = Ub.Dot(Kb, Ib);
        const cb = Rb;
        rb.eZ(zb).zpb(Hb), Ub.CrossToRef(jb, rb, Kb), Rb = Ub.Dot(Kb, Ib);
        const Yb = Rb,
          Zb = Fb.YC[10];
        let fb, Ab;
        Db > 0 && cb < 0 ? (Zb.eZ(Vb), fb = wb, Ab = Mb) : cb > 0 && Yb < 0 ? (Zb.eZ(Lb), fb = Mb, Ab = Hb) : (Zb.eZ(lb).scaleInPlace(-1), fb = Hb, Ab = wb);
        const Wb = Fb.YC[9],
          Jb = Fb.YC[4];
        fb.subtractToRef(zb, Kb), Ab.subtractToRef(zb, Wb), Ub.CrossToRef(Kb, Wb, Jb);
        if (!(Ub.Dot(Jb, Ib) < 0)) return pb.eZ(zb), Math.abs(sb * mb);
        const Sb = Fb.YC[5];
        Ub.CrossToRef(Zb, Jb, Sb), Sb.normalize();
        const Nb = Fb.YC[9];
        Nb.eZ(fb).zpb(zb);
        const vb = Nb.length();
        if (vb < eb.e) return pb.eZ(fb), Ub.Distance(bb, fb);
        Nb.normalizeFromLength(vb);
        const Qb = Ub.Dot(Sb, Nb),
          Gb = Fb.YC[7];
        Gb.eZ(zb).addInPlace(Sb.scaleInPlace(vb * Qb)), Kb.eZ(Gb).zpb(fb), sb = Zb.length(), Zb.normalizeFromLength(sb);
        let qb = Ub.Dot(Kb, Zb) / Math.max(sb, eb.e);
        return qb = (0, gb.Clamp)(qb, 0, 1), Gb.eZ(fb).addInPlace(Zb.scaleInPlace(qb * sb)), pb.eZ(Gb), Ub.Distance(bb, Gb)
      }
      static Center(bb, wb) {
        return Ub.CenterToRef(bb, wb, Ub.Zero())
      }
      static CenterToRef(bb, wb, Mb) {
        return Mb.twb((bb._x + wb._x) / 2, (bb._y + wb._y) / 2, (bb._z + wb._z) / 2)
      }
      static RotationFromAxis(bb, wb, Mb) {
        const eb = new Ub;
        return Ub.RotationFromAxisToRef(bb, wb, Mb, eb), eb
      }
      static RotationFromAxisToRef(bb, wb, Mb, eb) {
        const Hb = Fb.Quaternion[0];
        return Cb.RotationQuaternionFromAxisToRef(bb, wb, Mb, Hb), Hb.toEulerAnglesToRef(eb), eb
      }
    }
    Ub._V8PerformanceHack = new Ub(.5, .5, .5), Ub._UpReadOnly = Ub.Up(), Ub._DownReadOnly = Ub.Down(), Ub._LeftHandedForwardReadOnly = Ub.Forward(!1), Ub._RightHandedForwardReadOnly = Ub.Forward(!0), Ub._LeftHandedBackwardReadOnly = Ub.Backward(!1), Ub._RightHandedBackwardReadOnly = Ub.Backward(!0), Ub._RightReadOnly = Ub.Right(), Ub._LeftReadOnly = Ub.Left(), Ub._ZeroReadOnly = Ub.Zero(), Ub._OneReadOnly = Ub.One();
    class tb {
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
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = bb, this._y = wb, this._z = Mb, this._w = eb
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let bb = Ib(this._x);
        return bb = 397 * bb ^ Ib(this._y), bb = 397 * bb ^ Ib(this._z), bb = 397 * bb ^ Ib(this._w), bb
      }
      ppb() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(bb, wb) {
        return void 0 === wb && (wb = 0), bb[wb] = this._x, bb[wb + 1] = this._y, bb[wb + 2] = this._z, bb[wb + 3] = this._w, this
      }
      dI(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return tb.FromArrayToRef(bb, wb, this), this
      }
      addInPlace(bb) {
        return this.x += bb._x, this.y += bb._y, this.z += bb._z, this.w += bb._w, this
      }
      addInPlaceFromFloats(bb, wb, Mb, eb) {
        return this.x += bb, this.y += wb, this.z += Mb, this.w += eb, this
      }
      add(bb) {
        return new tb(this._x + bb.x, this._y + bb.y, this._z + bb.z, this._w + bb.w)
      }
      addToRef(bb, wb) {
        return wb.x = this._x + bb.x, wb.y = this._y + bb.y, wb.z = this._z + bb.z, wb.w = this._w + bb.w, wb
      }
      zpb(bb) {
        return this.x -= bb.x, this.y -= bb.y, this.z -= bb.z, this.w -= bb.w, this
      }
      subtract(bb) {
        return new tb(this._x - bb.x, this._y - bb.y, this._z - bb.z, this._w - bb.w)
      }
      subtractToRef(bb, wb) {
        return wb.x = this._x - bb.x, wb.y = this._y - bb.y, wb.z = this._z - bb.z, wb.w = this._w - bb.w, wb
      }
      subtractFromFloats(bb, wb, Mb, eb) {
        return new tb(this._x - bb, this._y - wb, this._z - Mb, this._w - eb)
      }
      subtractFromFloatsToRef(bb, wb, Mb, eb, Hb) {
        return Hb.x = this._x - bb, Hb.y = this._y - wb, Hb.z = this._z - Mb, Hb.w = this._w - eb, Hb
      }
      oE() {
        return new tb(-this._x, -this._y, -this._z, -this._w)
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
        return new tb(this._x * bb, this._y * bb, this._z * bb, this._w * bb)
      }
      scaleToRef(bb, wb) {
        return wb.x = this._x * bb, wb.y = this._y * bb, wb.z = this._z * bb, wb.w = this._w * bb, wb
      }
      scaleAndAddToRef(bb, wb) {
        return wb.x += this._x * bb, wb.y += this._y * bb, wb.z += this._z * bb, wb.w += this._w * bb, wb
      }
      equals(bb) {
        return bb && this._x === bb.x && this._y === bb.y && this._z === bb.z && this._w === bb.w
      }
      equalsWithEpsilon(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.e;
        return bb && (0, gb.WithinEpsilon)(this._x, bb.x, wb) && (0, gb.WithinEpsilon)(this._y, bb.y, wb) && (0, gb.WithinEpsilon)(this._z, bb.z, wb) && (0, gb.WithinEpsilon)(this._w, bb.w, wb)
      }
      Flb(bb, wb, Mb, eb) {
        return this._x === bb && this._y === wb && this._z === Mb && this._w === eb
      }
      multiplyInPlace(bb) {
        return this.x *= bb.x, this.y *= bb.y, this.z *= bb.z, this.w *= bb.w, this
      }
      multiply(bb) {
        return new tb(this._x * bb.x, this._y * bb.y, this._z * bb.z, this._w * bb.w)
      }
      multiplyToRef(bb, wb) {
        return wb.x = this._x * bb.x, wb.y = this._y * bb.y, wb.z = this._z * bb.z, wb.w = this._w * bb.w, wb
      }
      multiplyByFloats(bb, wb, Mb, eb) {
        return new tb(this._x * bb, this._y * wb, this._z * Mb, this._w * eb)
      }
      divide(bb) {
        return new tb(this._x / bb.x, this._y / bb.y, this._z / bb.z, this._w / bb.w)
      }
      divideToRef(bb, wb) {
        return wb.x = this._x / bb.x, wb.y = this._y / bb.y, wb.z = this._z / bb.z, wb.w = this._w / bb.w, wb
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
      minimizeInPlaceFromFloats(bb, wb, Mb, eb) {
        return this.x = Math.min(bb, this._x), this.y = Math.min(wb, this._y), this.z = Math.min(Mb, this._z), this.w = Math.min(eb, this._w), this
      }
      maximizeInPlaceFromFloats(bb, wb, Mb, eb) {
        return this.x = Math.max(bb, this._x), this.y = Math.max(wb, this._y), this.z = Math.max(Mb, this._z), this.w = Math.max(eb, this._w), this
      }
      floorToRef(bb) {
        return bb.x = Math.floor(this._x), bb.y = Math.floor(this._y), bb.z = Math.floor(this._z), bb.w = Math.floor(this._w), bb
      }
      floor() {
        return new tb(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(bb) {
        return bb.x = this._x - Math.floor(this._x), bb.y = this._y - Math.floor(this._y), bb.z = this._z - Math.floor(this._z), bb.w = this._w - Math.floor(this._w), bb
      }
      fract() {
        return new tb(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
        return this.normalizeToRef(new tb)
      }
      normalizeToRef(bb) {
        const wb = this.length();
        return 0 === wb || 1 === wb ? (bb.x = this._x, bb.y = this._y, bb.z = this._z, bb.w = this._w, bb) : this.scaleToRef(1 / wb, bb)
      }
      toVector3() {
        return new Ub(this._x, this._y, this._z)
      }
      clone() {
        return new tb(this._x, this._y, this._z, this._w)
      }
      eZ(bb) {
        return this.x = bb.x, this.y = bb.y, this.z = bb.z, this.w = bb.w, this
      }
      twb(bb, wb, Mb, eb) {
        return this.x = bb, this.y = wb, this.z = Mb, this.w = eb, this
      }
      set(bb, wb, Mb, eb) {
        return this.twb(bb, wb, Mb, eb)
      }
      Jbb(bb) {
        return this.x = this.y = this.z = this.w = bb, this
      }
      dot(bb) {
        return this._x * bb.x + this._y * bb.y + this._z * bb.z + this._w * bb.w
      }
      static FromArray(bb, wb) {
        return wb || (wb = 0), new tb(bb[wb], bb[wb + 1], bb[wb + 2], bb[wb + 3])
      }
      static FromArrayToRef(bb, wb, Mb) {
        return Mb.x = bb[wb], Mb.y = bb[wb + 1], Mb.z = bb[wb + 2], Mb.w = bb[wb + 3], Mb
      }
      static FromFloatArrayToRef(bb, wb, Mb) {
        return tb.FromArrayToRef(bb, wb, Mb), Mb
      }
      static FromFloatsToRef(bb, wb, Mb, eb, Hb) {
        return Hb.x = bb, Hb.y = wb, Hb.z = Mb, Hb.w = eb, Hb
      }
      static Zero() {
        return new tb(0, 0, 0, 0)
      }
      static One() {
        return new tb(1, 1, 1, 1)
      }
      static Random() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new tb((0, gb.RandomRange)(bb, wb), (0, gb.RandomRange)(bb, wb), (0, gb.RandomRange)(bb, wb), (0, gb.RandomRange)(bb, wb))
      }
      static RandomToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        return Mb.x = (0, gb.RandomRange)(bb, wb), Mb.y = (0, gb.RandomRange)(bb, wb), Mb.z = (0, gb.RandomRange)(bb, wb), Mb.w = (0, gb.RandomRange)(bb, wb), Mb
      }
      static Clamp(bb, wb, Mb) {
        return tb.ClampToRef(bb, wb, Mb, new tb)
      }
      static ClampToRef(bb, wb, Mb, eb) {
        return eb.x = (0, gb.Clamp)(bb.x, wb.x, Mb.x), eb.y = (0, gb.Clamp)(bb.y, wb.y, Mb.y), eb.z = (0, gb.Clamp)(bb.z, wb.z, Mb.z), eb.w = (0, gb.Clamp)(bb.w, wb.w, Mb.w), eb
      }
      static CheckExtends(bb, wb, Mb) {
        wb.minimizeInPlace(bb), Mb.maximizeInPlace(bb)
      }
      static get ZeroReadOnly() {
        return tb._ZeroReadOnly
      }
      static Normalize(bb) {
        return tb.NormalizeToRef(bb, new tb)
      }
      static NormalizeToRef(bb, wb) {
        return bb.normalizeToRef(wb), wb
      }
      static Minimize(bb, wb) {
        const Mb = new tb;
        return Mb.eZ(bb), Mb.minimizeInPlace(wb), Mb
      }
      static Maximize(bb, wb) {
        const Mb = new tb;
        return Mb.eZ(bb), Mb.maximizeInPlace(wb), Mb
      }
      static Distance(bb, wb) {
        return Math.sqrt(tb.DistanceSquared(bb, wb))
      }
      static DistanceSquared(bb, wb) {
        const Mb = bb.x - wb.x,
          eb = bb.y - wb.y,
          Hb = bb.z - wb.z,
          pb = bb.w - wb.w;
        return Mb * Mb + eb * eb + Hb * Hb + pb * pb
      }
      static Center(bb, wb) {
        return tb.CenterToRef(bb, wb, new tb)
      }
      static CenterToRef(bb, wb, Mb) {
        return Mb.x = (bb.x + wb.x) / 2, Mb.y = (bb.y + wb.y) / 2, Mb.z = (bb.z + wb.z) / 2, Mb.w = (bb.w + wb.w) / 2, Mb
      }
      static TransformCoordinates(bb, wb) {
        return tb.TransformCoordinatesToRef(bb, wb, new tb)
      }
      static TransformCoordinatesToRef(bb, wb, Mb) {
        return tb.TransformCoordinatesFromFloatsToRef(bb._x, bb._y, bb._z, wb, Mb), Mb
      }
      static TransformCoordinatesFromFloatsToRef(bb, wb, Mb, eb, Hb) {
        const pb = eb.m,
          Vb = bb * pb[0] + wb * pb[4] + Mb * pb[8] + pb[12],
          gb = bb * pb[1] + wb * pb[5] + Mb * pb[9] + pb[13],
          lb = bb * pb[2] + wb * pb[6] + Mb * pb[10] + pb[14],
          Lb = bb * pb[3] + wb * pb[7] + Mb * pb[11] + pb[15];
        return Hb.x = Vb, Hb.y = gb, Hb.z = lb, Hb.w = Lb, Hb
      }
      static TransformNormal(bb, wb) {
        return tb.TransformNormalToRef(bb, wb, new tb)
      }
      static TransformNormalToRef(bb, wb, Mb) {
        const eb = wb.m,
          Hb = bb.x * eb[0] + bb.y * eb[4] + bb.z * eb[8],
          pb = bb.x * eb[1] + bb.y * eb[5] + bb.z * eb[9],
          Vb = bb.x * eb[2] + bb.y * eb[6] + bb.z * eb[10];
        return Mb.x = Hb, Mb.y = pb, Mb.z = Vb, Mb.w = bb.w, Mb
      }
      static TransformNormalFromFloatsToRef(bb, wb, Mb, eb, Hb, pb) {
        const Vb = Hb.m;
        return pb.x = bb * Vb[0] + wb * Vb[4] + Mb * Vb[8], pb.y = bb * Vb[1] + wb * Vb[5] + Mb * Vb[9], pb.z = bb * Vb[2] + wb * Vb[6] + Mb * Vb[10], pb.w = eb, pb
      }
      static FromVector3(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new tb(bb._x, bb._y, bb._z, wb)
      }
      static Dot(bb, wb) {
        return bb.x * wb.x + bb.y * wb.y + bb.z * wb.z + bb.w * wb.w
      }
    }
    tb._V8PerformanceHack = new tb(.5, .5, .5, .5), tb._ZeroReadOnly = tb.Zero();
    class Cb {
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
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = bb, this._y = wb, this._z = Mb, this._w = eb
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let bb = Ib(this._x);
        return bb = 397 * bb ^ Ib(this._y), bb = 397 * bb ^ Ib(this._z), bb = 397 * bb ^ Ib(this._w), bb
      }
      ppb() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return bb[wb] = this._x, bb[wb + 1] = this._y, bb[wb + 2] = this._z, bb[wb + 3] = this._w, this
      }
      dI(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Cb.FromArrayToRef(bb, wb, this)
      }
      equals(bb) {
        return bb && this._x === bb._x && this._y === bb._y && this._z === bb._z && this._w === bb._w
      }
      equalsWithEpsilon(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.e;
        return bb && (0, gb.WithinEpsilon)(this._x, bb._x, wb) && (0, gb.WithinEpsilon)(this._y, bb._y, wb) && (0, gb.WithinEpsilon)(this._z, bb._z, wb) && (0, gb.WithinEpsilon)(this._w, bb._w, wb)
      }
      isApprox(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : eb.e;
        return bb && ((0, gb.WithinEpsilon)(this._x, bb._x, wb) && (0, gb.WithinEpsilon)(this._y, bb._y, wb) && (0, gb.WithinEpsilon)(this._z, bb._z, wb) && (0, gb.WithinEpsilon)(this._w, bb._w, wb) || (0, gb.WithinEpsilon)(this._x, -bb._x, wb) && (0, gb.WithinEpsilon)(this._y, -bb._y, wb) && (0, gb.WithinEpsilon)(this._z, -bb._z, wb) && (0, gb.WithinEpsilon)(this._w, -bb._w, wb))
      }
      clone() {
        return new Cb(this._x, this._y, this._z, this._w)
      }
      eZ(bb) {
        return this._x = bb._x, this._y = bb._y, this._z = bb._z, this._w = bb._w, this._isDirty = !0, this
      }
      twb(bb, wb, Mb, eb) {
        return this._x = bb, this._y = wb, this._z = Mb, this._w = eb, this._isDirty = !0, this
      }
      set(bb, wb, Mb, eb) {
        return this.twb(bb, wb, Mb, eb)
      }
      Jbb(bb) {
        return this.twb(bb, bb, bb, bb)
      }
      add(bb) {
        return new Cb(this._x + bb._x, this._y + bb._y, this._z + bb._z, this._w + bb._w)
      }
      addInPlace(bb) {
        return this._x += bb._x, this._y += bb._y, this._z += bb._z, this._w += bb._w, this._isDirty = !0, this
      }
      addToRef(bb, wb) {
        return wb._x = this._x + bb._x, wb._y = this._y + bb._y, wb._z = this._z + bb._z, wb._w = this._w + bb._w, wb._isDirty = !0, wb
      }
      addInPlaceFromFloats(bb, wb, Mb, eb) {
        return this._x += bb, this._y += wb, this._z += Mb, this._w += eb, this._isDirty = !0, this
      }
      subtractToRef(bb, wb) {
        return wb._x = this._x - bb._x, wb._y = this._y - bb._y, wb._z = this._z - bb._z, wb._w = this._w - bb._w, wb._isDirty = !0, wb
      }
      subtractFromFloats(bb, wb, Mb, eb) {
        return this.subtractFromFloatsToRef(bb, wb, Mb, eb, new Cb)
      }
      subtractFromFloatsToRef(bb, wb, Mb, eb, Hb) {
        return Hb._x = this._x - bb, Hb._y = this._y - wb, Hb._z = this._z - Mb, Hb._w = this._w - eb, Hb._isDirty = !0, Hb
      }
      subtract(bb) {
        return new Cb(this._x - bb._x, this._y - bb._y, this._z - bb._z, this._w - bb._w)
      }
      zpb(bb) {
        return this._x -= bb._x, this._y -= bb._y, this._z -= bb._z, this._w -= bb._w, this._isDirty = !0, this
      }
      scale(bb) {
        return new Cb(this._x * bb, this._y * bb, this._z * bb, this._w * bb)
      }
      scaleToRef(bb, wb) {
        return wb._x = this._x * bb, wb._y = this._y * bb, wb._z = this._z * bb, wb._w = this._w * bb, wb._isDirty = !0, wb
      }
      scaleInPlace(bb) {
        return this._x *= bb, this._y *= bb, this._z *= bb, this._w *= bb, this._isDirty = !0, this
      }
      scaleAndAddToRef(bb, wb) {
        return wb._x += this._x * bb, wb._y += this._y * bb, wb._z += this._z * bb, wb._w += this._w * bb, wb._isDirty = !0, wb
      }
      multiply(bb) {
        const wb = new Cb(0, 0, 0, 1);
        return this.multiplyToRef(bb, wb), wb
      }
      multiplyToRef(bb, wb) {
        const Mb = this._x * bb._w + this._y * bb._z - this._z * bb._y + this._w * bb._x,
          eb = -this._x * bb._z + this._y * bb._w + this._z * bb._x + this._w * bb._y,
          Hb = this._x * bb._y - this._y * bb._x + this._z * bb._w + this._w * bb._z,
          pb = -this._x * bb._x - this._y * bb._y - this._z * bb._z + this._w * bb._w;
        return wb.twb(Mb, eb, Hb, pb), wb
      }
      multiplyInPlace(bb) {
        return this.multiplyToRef(bb, this)
      }
      multiplyByFloats(bb, wb, Mb, eb) {
        return this._x *= bb, this._y *= wb, this._z *= Mb, this._w *= eb, this._isDirty = !0, this
      }
      divide(bb) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(bb, wb) {
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
      oE() {
        return this.negateToRef(new Cb)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(bb) {
        return bb._x = -this._x, bb._y = -this._y, bb._z = -this._z, bb._w = -this._w, bb._isDirty = !0, bb
      }
      Flb(bb, wb, Mb, eb) {
        return this._x === bb && this._y === wb && this._z === Mb && this._w === eb
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
        return bb.twb(-this._x, -this._y, -this._z, this._w), bb
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new Cb(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const bb = this.conjugate(),
          wb = this.lengthSquared();
        return 0 == wb || 1 == wb || bb.scaleInPlace(1 / wb), bb
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
        const bb = new Cb(0, 0, 0, 1);
        return this.normalizeToRef(bb), bb
      }
      normalizeToRef(bb) {
        const wb = this.length();
        return 0 === wb || 1 === wb ? bb.twb(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / wb, bb)
      }
      toEulerAngles() {
        const bb = Ub.Zero();
        return this.toEulerAnglesToRef(bb), bb
      }
      toEulerAnglesToRef(bb) {
        const wb = this._z,
          Mb = this._x,
          eb = this._y,
          Hb = this._w,
          pb = eb * wb - Mb * Hb,
          Vb = .4999999;
        if (pb < -Vb) bb._y = 2 * Math.atan2(eb, Hb), bb._x = Math.PI / 2, bb._z = 0, bb._isDirty = !0;
        else if (pb > Vb) bb._y = 2 * Math.atan2(eb, Hb), bb._x = -Math.PI / 2, bb._z = 0, bb._isDirty = !0;
        else {
          const Vb = Hb * Hb,
            gb = wb * wb,
            lb = Mb * Mb,
            Lb = eb * eb;
          bb._z = Math.atan2(2 * (Mb * eb + wb * Hb), -gb - lb + Lb + Vb), bb._x = Math.asin(-2 * pb), bb._y = Math.atan2(2 * (wb * Mb + eb * Hb), gb - lb - Lb + Vb), bb._isDirty = !0
        }
        return bb
      }
      toAlphaBetaGammaToRef(bb) {
        const wb = this._z,
          Mb = this._x,
          eb = this._y,
          Hb = this._w,
          pb = Math.sqrt(Mb * Mb + eb * eb),
          Vb = Math.sqrt(wb * wb + Hb * Hb),
          gb = 2 * Math.atan2(pb, Vb),
          lb = 2 * Math.atan2(wb, Hb),
          Lb = 2 * Math.atan2(eb, Mb),
          Ib = (lb + Lb) / 2,
          Ob = (lb - Lb) / 2;
        return bb.set(Ob, gb, Ib), bb
      }
      toRotationMatrix(bb) {
        return Eb.FromQuaternionToRef(this, bb), bb
      }
      fromRotationMatrix(bb) {
        return Cb.FromRotationMatrixToRef(bb, this), this
      }
      dot(bb) {
        return this._x * bb._x + this._y * bb._y + this._z * bb._z + this._w * bb._w
      }
      toAxisAngle() {
        const bb = Ub.Zero();
        return {
          axis: bb,
          angle: this.toAxisAngleToRef(bb)
        }
      }
      toAxisAngleToRef(bb) {
        let wb;
        const Mb = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          eb = this._w;
        return Mb > 0 ? (wb = 2 * Math.atan2(Mb, eb), bb.set(this._x / Mb, this._y / Mb, this._z / Mb)) : (wb = 0, bb.set(1, 0, 0)), wb
      }
      static FromRotationMatrix(bb) {
        const wb = new Cb;
        return Cb.FromRotationMatrixToRef(bb, wb), wb
      }
      static FromRotationMatrixToRef(bb, wb) {
        const Mb = bb.m,
          eb = Mb[0],
          Hb = Mb[4],
          pb = Mb[8],
          Vb = Mb[1],
          gb = Mb[5],
          lb = Mb[9],
          Lb = Mb[2],
          Ib = Mb[6],
          Ob = Mb[10],
          Ub = eb + gb + Ob;
        let tb;
        return Ub > 0 ? (tb = .5 / Math.sqrt(Ub + 1), wb._w = .25 / tb, wb._x = (Ib - lb) * tb, wb._y = (pb - Lb) * tb, wb._z = (Vb - Hb) * tb, wb._isDirty = !0) : eb > gb && eb > Ob ? (tb = 2 * Math.sqrt(1 + eb - gb - Ob), wb._w = (Ib - lb) / tb, wb._x = .25 * tb, wb._y = (Hb + Vb) / tb, wb._z = (pb + Lb) / tb, wb._isDirty = !0) : gb > Ob ? (tb = 2 * Math.sqrt(1 + gb - eb - Ob), wb._w = (pb - Lb) / tb, wb._x = (Hb + Vb) / tb, wb._y = .25 * tb, wb._z = (lb + Ib) / tb, wb._isDirty = !0) : (tb = 2 * Math.sqrt(1 + Ob - eb - gb), wb._w = (Vb - Hb) / tb, wb._x = (pb + Lb) / tb, wb._y = (lb + Ib) / tb, wb._z = .25 * tb, wb._isDirty = !0), wb
      }
      static Dot(bb, wb) {
        return bb._x * wb._x + bb._y * wb._y + bb._z * wb._z + bb._w * wb._w
      }
      static AreClose(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const eb = Cb.Dot(bb, wb);
        return 1 - eb * eb <= Mb
      }
      static SmoothToRef(bb, wb, Mb, eb, Hb) {
        let pb = 0 === eb ? 1 : Mb / eb;
        return pb = (0, gb.Clamp)(pb, 0, 1), Cb.SlerpToRef(bb, wb, pb, Hb), Hb
      }
      static Zero() {
        return new Cb(0, 0, 0, 0)
      }
      static Inverse(bb) {
        return new Cb(-bb._x, -bb._y, -bb._z, bb._w)
      }
      static InverseToRef(bb, wb) {
        return wb.set(-bb._x, -bb._y, -bb._z, bb._w), wb
      }
      static Identity() {
        return new Cb(0, 0, 0, 1)
      }
      static IsIdentity(bb) {
        return bb && 0 === bb._x && 0 === bb._y && 0 === bb._z && 1 === bb._w
      }
      static RotationAxis(bb, wb) {
        return Cb.RotationAxisToRef(bb, wb, new Cb)
      }
      static RotationAxisToRef(bb, wb, Mb) {
        Mb._w = Math.cos(wb / 2);
        const eb = Math.sin(wb / 2) / bb.length();
        return Mb._x = bb._x * eb, Mb._y = bb._y * eb, Mb._z = bb._z * eb, Mb._isDirty = !0, Mb
      }
      static FromArray(bb, wb) {
        return wb || (wb = 0), new Cb(bb[wb], bb[wb + 1], bb[wb + 2], bb[wb + 3])
      }
      static FromArrayToRef(bb, wb, Mb) {
        return Mb._x = bb[wb], Mb._y = bb[wb + 1], Mb._z = bb[wb + 2], Mb._w = bb[wb + 3], Mb._isDirty = !0, Mb
      }
      static FromFloatsToRef(bb, wb, Mb, eb, Hb) {
        return Hb.twb(bb, wb, Mb, eb), Hb
      }
      static FromEulerAngles(bb, wb, Mb) {
        const eb = new Cb;
        return Cb.RotationYawPitchRollToRef(wb, bb, Mb, eb), eb
      }
      static FromEulerAnglesToRef(bb, wb, Mb, eb) {
        return Cb.RotationYawPitchRollToRef(wb, bb, Mb, eb), eb
      }
      static FromEulerVector(bb) {
        const wb = new Cb;
        return Cb.RotationYawPitchRollToRef(bb._y, bb._x, bb._z, wb), wb
      }
      static FromEulerVectorToRef(bb, wb) {
        return Cb.RotationYawPitchRollToRef(bb._y, bb._x, bb._z, wb), wb
      }
      static FromUnitVectorsToRef(bb, wb, Mb) {
        let Hb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : eb.e;
        const pb = Ub.Dot(bb, wb) + 1;
        return pb < Hb ? Math.abs(bb.x) > Math.abs(bb.z) ? Mb.set(-bb.y, bb.x, 0, 0) : Mb.set(0, -bb.z, bb.y, 0) : (Ub.CrossToRef(bb, wb, Bb.YC[0]), Mb.set(Bb.YC[0].x, Bb.YC[0].y, Bb.YC[0].z, pb)), Mb.normalize()
      }
      static RotationYawPitchRoll(bb, wb, Mb) {
        const eb = new Cb;
        return Cb.RotationYawPitchRollToRef(bb, wb, Mb, eb), eb
      }
      static RotationYawPitchRollToRef(bb, wb, Mb, eb) {
        const Hb = .5 * Mb,
          pb = .5 * wb,
          Vb = .5 * bb,
          gb = Math.sin(Hb),
          lb = Math.cos(Hb),
          Lb = Math.sin(pb),
          Ib = Math.cos(pb),
          Ob = Math.sin(Vb),
          Ub = Math.cos(Vb);
        return eb._x = Ub * Lb * lb + Ob * Ib * gb, eb._y = Ob * Ib * lb - Ub * Lb * gb, eb._z = Ub * Ib * gb - Ob * Lb * lb, eb._w = Ub * Ib * lb + Ob * Lb * gb, eb._isDirty = !0, eb
      }
      static RotationAlphaBetaGamma(bb, wb, Mb) {
        const eb = new Cb;
        return Cb.RotationAlphaBetaGammaToRef(bb, wb, Mb, eb), eb
      }
      static RotationAlphaBetaGammaToRef(bb, wb, Mb, eb) {
        const Hb = .5 * (Mb + bb),
          pb = .5 * (Mb - bb),
          Vb = .5 * wb;
        return eb._x = Math.cos(pb) * Math.sin(Vb), eb._y = Math.sin(pb) * Math.sin(Vb), eb._z = Math.sin(Hb) * Math.cos(Vb), eb._w = Math.cos(Hb) * Math.cos(Vb), eb._isDirty = !0, eb
      }
      static RotationQuaternionFromAxis(bb, wb, Mb) {
        const eb = new Cb(0, 0, 0, 0);
        return Cb.RotationQuaternionFromAxisToRef(bb, wb, Mb, eb), eb
      }
      static RotationQuaternionFromAxisToRef(bb, wb, Mb, eb) {
        const Hb = Fb.Matrix[0];
        return bb = bb.normalizeToRef(Fb.YC[0]), wb = wb.normalizeToRef(Fb.YC[1]), Mb = Mb.normalizeToRef(Fb.YC[2]), Eb.FromXYZAxesToRef(bb, wb, Mb, Hb), Cb.FromRotationMatrixToRef(Hb, eb), eb
      }
      static FromLookDirectionLH(bb, wb) {
        const Mb = new Cb;
        return Cb.FromLookDirectionLHToRef(bb, wb, Mb), Mb
      }
      static FromLookDirectionLHToRef(bb, wb, Mb) {
        const eb = Fb.Matrix[0];
        return Eb.LookDirectionLHToRef(bb, wb, eb), Cb.FromRotationMatrixToRef(eb, Mb), Mb
      }
      static FromLookDirectionRH(bb, wb) {
        const Mb = new Cb;
        return Cb.FromLookDirectionRHToRef(bb, wb, Mb), Mb
      }
      static FromLookDirectionRHToRef(bb, wb, Mb) {
        const eb = Fb.Matrix[0];
        return Eb.LookDirectionRHToRef(bb, wb, eb), Cb.FromRotationMatrixToRef(eb, Mb)
      }
      static Slerp(bb, wb, Mb) {
        const eb = Cb.Identity();
        return Cb.SlerpToRef(bb, wb, Mb, eb), eb
      }
      static SlerpToRef(bb, wb, Mb, eb) {
        let Hb, pb, Vb = bb._x * wb._x + bb._y * wb._y + bb._z * wb._z + bb._w * wb._w,
          gb = !1;
        if (Vb < 0 && (gb = !0, Vb = -Vb), Vb > .999999) pb = 1 - Mb, Hb = gb ? -Mb : Mb;
        else {
          const bb = Math.acos(Vb),
            wb = 1 / Math.sin(bb);
          pb = Math.sin((1 - Mb) * bb) * wb, Hb = gb ? -Math.sin(Mb * bb) * wb : Math.sin(Mb * bb) * wb
        }
        return eb._x = pb * bb._x + Hb * wb._x, eb._y = pb * bb._y + Hb * wb._y, eb._z = pb * bb._z + Hb * wb._z, eb._w = pb * bb._w + Hb * wb._w, eb._isDirty = !0, eb
      }
      static Hermite(bb, wb, Mb, eb, Hb) {
        const pb = Hb * Hb,
          Vb = Hb * pb,
          gb = 2 * Vb - 3 * pb + 1,
          lb = -2 * Vb + 3 * pb,
          Lb = Vb - 2 * pb + Hb,
          Ib = Vb - pb,
          Ob = bb._x * gb + Mb._x * lb + wb._x * Lb + eb._x * Ib,
          Ub = bb._y * gb + Mb._y * lb + wb._y * Lb + eb._y * Ib,
          tb = bb._z * gb + Mb._z * lb + wb._z * Lb + eb._z * Ib,
          Eb = bb._w * gb + Mb._w * lb + wb._w * Lb + eb._w * Ib;
        return new Cb(Ob, Ub, tb, Eb)
      }
      static Hermite1stDerivative(bb, wb, Mb, eb, Hb) {
        const pb = new Cb;
        return this.Hermite1stDerivativeToRef(bb, wb, Mb, eb, Hb, pb), pb
      }
      static Hermite1stDerivativeToRef(bb, wb, Mb, eb, Hb, pb) {
        const Vb = Hb * Hb;
        return pb._x = 6 * (Vb - Hb) * bb._x + (3 * Vb - 4 * Hb + 1) * wb._x + 6 * (-Vb + Hb) * Mb._x + (3 * Vb - 2 * Hb) * eb._x, pb._y = 6 * (Vb - Hb) * bb._y + (3 * Vb - 4 * Hb + 1) * wb._y + 6 * (-Vb + Hb) * Mb._y + (3 * Vb - 2 * Hb) * eb._y, pb._z = 6 * (Vb - Hb) * bb._z + (3 * Vb - 4 * Hb + 1) * wb._z + 6 * (-Vb + Hb) * Mb._z + (3 * Vb - 2 * Hb) * eb._z, pb._w = 6 * (Vb - Hb) * bb._w + (3 * Vb - 4 * Hb + 1) * wb._w + 6 * (-Vb + Hb) * Mb._w + (3 * Vb - 2 * Hb) * eb._w, pb._isDirty = !0, pb
      }
      static Normalize(bb) {
        const wb = Cb.Zero();
        return Cb.NormalizeToRef(bb, wb), wb
      }
      static NormalizeToRef(bb, wb) {
        return bb.normalizeToRef(wb), wb
      }
      static Clamp(bb, wb, Mb) {
        const eb = new Cb;
        return Cb.ClampToRef(bb, wb, Mb, eb), eb
      }
      static ClampToRef(bb, wb, Mb, eb) {
        return eb.twb((0, gb.Clamp)(bb.x, wb.x, Mb.x), (0, gb.Clamp)(bb.y, wb.y, Mb.y), (0, gb.Clamp)(bb.z, wb.z, Mb.z), (0, gb.Clamp)(bb.w, wb.w, Mb.w))
      }
      static Random() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Cb((0, gb.RandomRange)(bb, wb), (0, gb.RandomRange)(bb, wb), (0, gb.RandomRange)(bb, wb), (0, gb.RandomRange)(bb, wb))
      }
      static RandomToRef() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).twb((0, gb.RandomRange)(bb, wb), (0, gb.RandomRange)(bb, wb), (0, gb.RandomRange)(bb, wb), (0, gb.RandomRange)(bb, wb))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(bb, wb) {
        return Math.sqrt(Cb.DistanceSquared(bb, wb))
      }
      static DistanceSquared(bb, wb) {
        const Mb = bb.x - wb.x,
          eb = bb.y - wb.y,
          Hb = bb.z - wb.z,
          pb = bb.w - wb.w;
        return Mb * Mb + eb * eb + Hb * Hb + pb * pb
      }
      static Center(bb, wb) {
        return Cb.CenterToRef(bb, wb, Cb.Zero())
      }
      static CenterToRef(bb, wb, Mb) {
        return Mb.twb((bb.x + wb.x) / 2, (bb.y + wb.y) / 2, (bb.z + wb.z) / 2, (bb.w + wb.w) / 2)
      }
    }
    Cb._V8PerformanceHack = new Cb(.5, .5, .5, .5);
    class Eb {
      static get Use64Bits() {
        return pb.c.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = lb.i._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          eb = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = bb, this._isIdentity3x2 = bb || Mb, this._isIdentityDirty = !this._isIdentity && wb, this._isIdentity3x2Dirty = !this._isIdentity3x2 && eb
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, pb.c.MatrixTrackPrecisionChange && pb.c.MatrixTrackedMatrices.push(this), this._m = new pb.c.MatrixCurrentType(16), this.markAsUpdated()
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
          wb = bb[0],
          Mb = bb[1],
          eb = bb[2],
          Hb = bb[3],
          pb = bb[4],
          Vb = bb[5],
          gb = bb[6],
          lb = bb[7],
          Lb = bb[8],
          Ib = bb[9],
          Ob = bb[10],
          Ub = bb[11],
          tb = bb[12],
          Cb = bb[13],
          Eb = bb[14],
          Fb = bb[15],
          Bb = Ob * Fb - Eb * Ub,
          sb = Ib * Fb - Cb * Ub,
          mb = Ib * Eb - Cb * Ob,
          hb = Lb * Fb - tb * Ub,
          zb = Lb * Eb - Ob * tb,
          Xb = Lb * Cb - tb * Ib;
        return wb * +(Vb * Bb - gb * sb + lb * mb) + Mb * -(pb * Bb - gb * hb + lb * zb) + eb * +(pb * sb - Vb * hb + lb * Xb) + Hb * -(pb * mb - Vb * zb + gb * Xb)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!bb) return this._m;
        const Mb = this._m;
        for (let eb = 0; eb < 16; eb++) bb[wb + eb] = Mb[eb];
        return this
      }
      ppb() {
        return this._m
      }
      dI(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Eb.FromArrayToRef(bb, wb, this)
      }
      twb() {
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        return Eb.FromArrayToRef(wb, 0, this)
      }
      set() {
        const bb = this._m;
        for (let wb = 0; wb < 16; wb++) bb[wb] = wb < 0 || arguments.length <= wb ? void 0 : arguments[wb];
        return this.markAsUpdated(), this
      }
      Jbb(bb) {
        const wb = this._m;
        for (let Mb = 0; Mb < 16; Mb++) wb[Mb] = bb;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return Eb.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(bb) {
        const wb = new Eb;
        return this.addToRef(bb, wb), wb
      }
      addToRef(bb, wb) {
        const Mb = this._m,
          eb = wb._m,
          Hb = bb.m;
        for (let pb = 0; pb < 16; pb++) eb[pb] = Mb[pb] + Hb[pb];
        return wb.markAsUpdated(), wb
      }
      addToSelf(bb) {
        const wb = this._m,
          Mb = bb.m;
        return wb[0] += Mb[0], wb[1] += Mb[1], wb[2] += Mb[2], wb[3] += Mb[3], wb[4] += Mb[4], wb[5] += Mb[5], wb[6] += Mb[6], wb[7] += Mb[7], wb[8] += Mb[8], wb[9] += Mb[9], wb[10] += Mb[10], wb[11] += Mb[11], wb[12] += Mb[12], wb[13] += Mb[13], wb[14] += Mb[14], wb[15] += Mb[15], this.markAsUpdated(), this
      }
      addInPlace(bb) {
        const wb = this._m,
          Mb = bb.m;
        for (let eb = 0; eb < 16; eb++) wb[eb] += Mb[eb];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const bb = this._m;
        for (let wb = 0; wb < 16; wb++) bb[wb] += wb < 0 || arguments.length <= wb ? void 0 : arguments[wb];
        return this.markAsUpdated(), this
      }
      subtract(bb) {
        const wb = this._m,
          Mb = bb.m;
        for (let eb = 0; eb < 16; eb++) wb[eb] -= Mb[eb];
        return this.markAsUpdated(), this
      }
      subtractToRef(bb, wb) {
        const Mb = this._m,
          eb = bb.m,
          Hb = wb._m;
        for (let pb = 0; pb < 16; pb++) Hb[pb] = Mb[pb] - eb[pb];
        return wb.markAsUpdated(), wb
      }
      zpb(bb) {
        const wb = this._m,
          Mb = bb.m;
        for (let eb = 0; eb < 16; eb++) wb[eb] -= Mb[eb];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        return this.subtractFromFloatsToRef(...wb, new Eb)
      }
      subtractFromFloatsToRef() {
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        const eb = wb.pop(),
          Hb = this._m,
          pb = eb._m,
          Vb = wb;
        for (let gb = 0; gb < 16; gb++) pb[gb] = Hb[gb] - Vb[gb];
        return eb.markAsUpdated(), eb
      }
      invertToRef(bb) {
        return !0 === this._isIdentity ? (Eb.IdentityToRef(bb), bb) : ((0, lb.e)(this, bb.ppb()) ? bb.markAsUpdated() : bb.eZ(this), bb)
      }
      addAtIndex(bb, wb) {
        return this._m[bb] += wb, this.markAsUpdated(), this
      }
      multiplyAtIndex(bb, wb) {
        return this._m[bb] *= wb, this.markAsUpdated(), this
      }
      setTranslationFromFloats(bb, wb, Mb) {
        return this._m[12] = bb, this._m[13] = wb, this._m[14] = Mb, this.markAsUpdated(), this
      }
      addTranslationFromFloats(bb, wb, Mb) {
        return this._m[12] += bb, this._m[13] += wb, this._m[14] += Mb, this.markAsUpdated(), this
      }
      setTranslation(bb) {
        return this.setTranslationFromFloats(bb._x, bb._y, bb._z)
      }
      getTranslation() {
        return new Ub(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(bb) {
        return bb.x = this._m[12], bb.y = this._m[13], bb.z = this._m[14], bb
      }
      removeRotationAndScaling() {
        const bb = this.m;
        return Eb.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, bb[12], bb[13], bb[14], bb[15], this), this._updateIdentityStatus(0 === bb[12] && 0 === bb[13] && 0 === bb[14] && 1 === bb[15]), this
      }
      eZ(bb) {
        bb.copyToArray(this._m);
        const wb = bb;
        return this.updateFlag = wb.updateFlag, this._updateIdentityStatus(wb._isIdentity, wb._isIdentityDirty, wb._isIdentity3x2, wb._isIdentity3x2Dirty), this
      }
      copyToArray(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, lb.c)(this, bb, wb), this
      }
      multiply(bb) {
        const wb = new Eb;
        return this.multiplyToRef(bb, wb), wb
      }
      multiplyInPlace(bb) {
        const wb = this._m,
          Mb = bb.m;
        for (let eb = 0; eb < 16; eb++) wb[eb] *= Mb[eb];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const bb = this._m;
        for (let wb = 0; wb < 16; wb++) bb[wb] *= wb < 0 || arguments.length <= wb ? void 0 : arguments[wb];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        const eb = wb.pop(),
          Hb = this._m,
          pb = eb._m,
          Vb = wb;
        for (let gb = 0; gb < 16; gb++) pb[gb] = Hb[gb] * Vb[gb];
        return eb.markAsUpdated(), eb
      }
      multiplyToRef(bb, wb) {
        return this._isIdentity ? (wb.eZ(bb), wb) : bb._isIdentity ? (wb.eZ(this), wb) : (this.multiplyToArray(bb, wb._m, 0), wb.markAsUpdated(), wb)
      }
      multiplyToArray(bb, wb, Mb) {
        return (0, lb.k)(this, bb, wb, Mb), this
      }
      divide(bb) {
        return this.divideToRef(bb, new Eb)
      }
      divideToRef(bb, wb) {
        const Mb = this._m,
          eb = bb.m,
          Hb = wb._m;
        for (let pb = 0; pb < 16; pb++) Hb[pb] = Mb[pb] / eb[pb];
        return wb.markAsUpdated(), wb
      }
      divideInPlace(bb) {
        const wb = this._m,
          Mb = bb.m;
        for (let eb = 0; eb < 16; eb++) wb[eb] /= Mb[eb];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(bb) {
        const wb = this._m,
          Mb = bb.m;
        for (let eb = 0; eb < 16; eb++) wb[eb] = Math.min(wb[eb], Mb[eb]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const bb = this._m;
        for (let wb = 0; wb < 16; wb++) bb[wb] = Math.min(bb[wb], wb < 0 || arguments.length <= wb ? void 0 : arguments[wb]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(bb) {
        const wb = this._m,
          Mb = bb.m;
        for (let eb = 0; eb < 16; eb++) wb[eb] = Math.max(wb[eb], Mb[eb]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const bb = this._m;
        for (let wb = 0; wb < 16; wb++) bb[wb] = Math.max(bb[wb], wb < 0 || arguments.length <= wb ? void 0 : arguments[wb]);
        return this.markAsUpdated(), this
      }
      oE() {
        return this.negateToRef(new Eb)
      }
      negateInPlace() {
        const bb = this._m;
        for (let wb = 0; wb < 16; wb++) bb[wb] = -bb[wb];
        return this.markAsUpdated(), this
      }
      negateToRef(bb) {
        const wb = this._m,
          Mb = bb._m;
        for (let eb = 0; eb < 16; eb++) Mb[eb] = -wb[eb];
        return bb.markAsUpdated(), bb
      }
      equals(bb) {
        const wb = bb;
        if (!wb) return !1;
        if ((this._isIdentity || wb._isIdentity) && !this._isIdentityDirty && !wb._isIdentityDirty) return this._isIdentity && wb._isIdentity;
        const Mb = this.m,
          eb = wb.m;
        return Mb[0] === eb[0] && Mb[1] === eb[1] && Mb[2] === eb[2] && Mb[3] === eb[3] && Mb[4] === eb[4] && Mb[5] === eb[5] && Mb[6] === eb[6] && Mb[7] === eb[7] && Mb[8] === eb[8] && Mb[9] === eb[9] && Mb[10] === eb[10] && Mb[11] === eb[11] && Mb[12] === eb[12] && Mb[13] === eb[13] && Mb[14] === eb[14] && Mb[15] === eb[15]
      }
      equalsWithEpsilon(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Mb = this._m,
          eb = bb.m;
        for (let Hb = 0; Hb < 16; Hb++)
          if (!(0, gb.WithinEpsilon)(Mb[Hb], eb[Hb], wb)) return !1;
        return !0
      }
      Flb() {
        const bb = this._m;
        for (let wb = 0; wb < 16; wb++)
          if (bb[wb] != (wb < 0 || arguments.length <= wb ? void 0 : arguments[wb])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new Eb)
      }
      floorToRef(bb) {
        const wb = this._m,
          Mb = bb._m;
        for (let eb = 0; eb < 16; eb++) Mb[eb] = Math.floor(wb[eb]);
        return bb.markAsUpdated(), bb
      }
      fract() {
        return this.fractToRef(new Eb)
      }
      fractToRef(bb) {
        const wb = this._m,
          Mb = bb._m;
        for (let eb = 0; eb < 16; eb++) Mb[eb] = wb[eb] - Math.floor(wb[eb]);
        return bb.markAsUpdated(), bb
      }
      clone() {
        const bb = new Eb;
        return bb.eZ(this), bb
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let bb = Ib(this._m[0]);
        for (let wb = 1; wb < 16; wb++) bb = 397 * bb ^ Ib(this._m[wb]);
        return bb
      }
      decomposeToTransformNode(bb) {
        return bb.rotationQuaternion = bb.rotationQuaternion || new Cb, this.decompose(bb.CO, bb.rotationQuaternion, bb.position)
      }
      decompose(bb, wb, Mb, eb) {
        let Hb = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return Mb && Mb.Jbb(0), bb && bb.Jbb(1), wb && wb.twb(0, 0, 0, 1), !0;
        const pb = this._m;
        if (Mb && Mb.twb(pb[12], pb[13], pb[14]), (bb = bb || Fb.YC[0]).x = Math.sqrt(pb[0] * pb[0] + pb[1] * pb[1] + pb[2] * pb[2]), bb.y = Math.sqrt(pb[4] * pb[4] + pb[5] * pb[5] + pb[6] * pb[6]), bb.z = Math.sqrt(pb[8] * pb[8] + pb[9] * pb[9] + pb[10] * pb[10]), eb) {
          const wb = (Hb ? eb.absoluteScaling.x : eb.CO.x) < 0 ? -1 : 1,
            Mb = (Hb ? eb.absoluteScaling.y : eb.CO.y) < 0 ? -1 : 1,
            pb = (Hb ? eb.absoluteScaling.z : eb.CO.z) < 0 ? -1 : 1;
          bb.x *= wb, bb.y *= Mb, bb.z *= pb
        } else this.determinant() <= 0 && (bb.y *= -1);
        if (0 === bb._x || 0 === bb._y || 0 === bb._z) return wb && wb.twb(0, 0, 0, 1), !1;
        if (wb) {
          const Mb = 1 / bb._x,
            eb = 1 / bb._y,
            Hb = 1 / bb._z;
          Eb.FromValuesToRef(pb[0] * Mb, pb[1] * Mb, pb[2] * Mb, 0, pb[4] * eb, pb[5] * eb, pb[6] * eb, 0, pb[8] * Hb, pb[9] * Hb, pb[10] * Hb, 0, 0, 0, 0, 1, Fb.Matrix[0]), Cb.FromRotationMatrixToRef(Fb.Matrix[0], wb)
        }
        return !0
      }
      getRow(bb) {
        if (bb < 0 || bb > 3) return null;
        const wb = 4 * bb;
        return new tb(this._m[wb + 0], this._m[wb + 1], this._m[wb + 2], this._m[wb + 3])
      }
      getRowToRef(bb, wb) {
        if (bb >= 0 && bb <= 3) {
          const Mb = 4 * bb;
          wb.x = this._m[Mb + 0], wb.y = this._m[Mb + 1], wb.z = this._m[Mb + 2], wb.w = this._m[Mb + 3]
        }
        return wb
      }
      setRow(bb, wb) {
        return this.setRowFromFloats(bb, wb.x, wb.y, wb.z, wb.w)
      }
      transpose() {
        const bb = new Eb;
        return Eb.TransposeToRef(this, bb), bb
      }
      transposeToRef(bb) {
        return Eb.TransposeToRef(this, bb), bb
      }
      setRowFromFloats(bb, wb, Mb, eb, Hb) {
        if (bb < 0 || bb > 3) return this;
        const pb = 4 * bb;
        return this._m[pb + 0] = wb, this._m[pb + 1] = Mb, this._m[pb + 2] = eb, this._m[pb + 3] = Hb, this.markAsUpdated(), this
      }
      scale(bb) {
        const wb = new Eb;
        return this.scaleToRef(bb, wb), wb
      }
      scaleToRef(bb, wb) {
        for (let Mb = 0; Mb < 16; Mb++) wb._m[Mb] = this._m[Mb] * bb;
        return wb.markAsUpdated(), wb
      }
      scaleAndAddToRef(bb, wb) {
        for (let Mb = 0; Mb < 16; Mb++) wb._m[Mb] += this._m[Mb] * bb;
        return wb.markAsUpdated(), wb
      }
      scaleInPlace(bb) {
        const wb = this._m;
        for (let Mb = 0; Mb < 16; Mb++) wb[Mb] *= bb;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(bb) {
        const wb = Fb.Matrix[0];
        this.invertToRef(wb), wb.transposeToRef(bb);
        const Mb = bb._m;
        return Eb.FromValuesToRef(Mb[0], Mb[1], Mb[2], 0, Mb[4], Mb[5], Mb[6], 0, Mb[8], Mb[9], Mb[10], 0, 0, 0, 0, 1, bb), bb
      }
      getRotationMatrix() {
        const bb = new Eb;
        return this.getRotationMatrixToRef(bb), bb
      }
      getRotationMatrixToRef(bb) {
        const wb = Fb.YC[0];
        if (!this.decompose(wb)) return Eb.IdentityToRef(bb), bb;
        const Mb = this._m,
          eb = 1 / wb._x,
          Hb = 1 / wb._y,
          pb = 1 / wb._z;
        return Eb.FromValuesToRef(Mb[0] * eb, Mb[1] * eb, Mb[2] * eb, 0, Mb[4] * Hb, Mb[5] * Hb, Mb[6] * Hb, 0, Mb[8] * pb, Mb[9] * pb, Mb[10] * pb, 0, 0, 0, 0, 1, bb), bb
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
        return this.multiplyToRef(sb, this), this
      }
      static FromArray(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Mb = new Eb;
        return Eb.FromArrayToRef(bb, wb, Mb), Mb
      }
      static FromArrayToRef(bb, wb, Mb) {
        for (let eb = 0; eb < 16; eb++) Mb._m[eb] = bb[eb + wb];
        return Mb.markAsUpdated(), Mb
      }
      static FromFloat32ArrayToRefScaled(bb, wb, Mb, eb) {
        return eb._m[0] = bb[0 + wb] * Mb, eb._m[1] = bb[1 + wb] * Mb, eb._m[2] = bb[2 + wb] * Mb, eb._m[3] = bb[3 + wb] * Mb, eb._m[4] = bb[4 + wb] * Mb, eb._m[5] = bb[5 + wb] * Mb, eb._m[6] = bb[6 + wb] * Mb, eb._m[7] = bb[7 + wb] * Mb, eb._m[8] = bb[8 + wb] * Mb, eb._m[9] = bb[9 + wb] * Mb, eb._m[10] = bb[10 + wb] * Mb, eb._m[11] = bb[11 + wb] * Mb, eb._m[12] = bb[12 + wb] * Mb, eb._m[13] = bb[13 + wb] * Mb, eb._m[14] = bb[14 + wb] * Mb, eb._m[15] = bb[15 + wb] * Mb, eb.markAsUpdated(), eb
      }
      static get IdentityReadOnly() {
        return Eb._IdentityReadOnly
      }
      static FromValuesToRef(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb, Eb, Fb) {
        const Bb = Fb._m;
        Bb[0] = bb, Bb[1] = wb, Bb[2] = Mb, Bb[3] = eb, Bb[4] = Hb, Bb[5] = pb, Bb[6] = Vb, Bb[7] = gb, Bb[8] = lb, Bb[9] = Lb, Bb[10] = Ib, Bb[11] = Ob, Bb[12] = Ub, Bb[13] = tb, Bb[14] = Cb, Bb[15] = Eb, Fb.markAsUpdated()
      }
      static FromValues(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib, Ob, Ub, tb, Cb, Fb) {
        const Bb = new Eb,
          sb = Bb._m;
        return sb[0] = bb, sb[1] = wb, sb[2] = Mb, sb[3] = eb, sb[4] = Hb, sb[5] = pb, sb[6] = Vb, sb[7] = gb, sb[8] = lb, sb[9] = Lb, sb[10] = Ib, sb[11] = Ob, sb[12] = Ub, sb[13] = tb, sb[14] = Cb, sb[15] = Fb, Bb.markAsUpdated(), Bb
      }
      static Compose(bb, wb, Mb) {
        const eb = new Eb;
        return Eb.ComposeToRef(bb, wb, Mb, eb), eb
      }
      static ComposeToRef(bb, wb, Mb, eb) {
        const Hb = eb._m,
          pb = wb._x,
          Vb = wb._y,
          gb = wb._z,
          lb = wb._w,
          Lb = pb + pb,
          Ib = Vb + Vb,
          Ob = gb + gb,
          Ub = pb * Lb,
          tb = pb * Ib,
          Cb = pb * Ob,
          Eb = Vb * Ib,
          Fb = Vb * Ob,
          Bb = gb * Ob,
          sb = lb * Lb,
          mb = lb * Ib,
          hb = lb * Ob,
          zb = bb._x,
          Xb = bb._y,
          xb = bb._z;
        return Hb[0] = (1 - (Eb + Bb)) * zb, Hb[1] = (tb + hb) * zb, Hb[2] = (Cb - mb) * zb, Hb[3] = 0, Hb[4] = (tb - hb) * Xb, Hb[5] = (1 - (Ub + Bb)) * Xb, Hb[6] = (Fb + sb) * Xb, Hb[7] = 0, Hb[8] = (Cb + mb) * xb, Hb[9] = (Fb - sb) * xb, Hb[10] = (1 - (Ub + Eb)) * xb, Hb[11] = 0, Hb[12] = Mb._x, Hb[13] = Mb._y, Hb[14] = Mb._z, Hb[15] = 1, eb.markAsUpdated(), eb
      }
      static Identity() {
        const bb = Eb.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return bb._updateIdentityStatus(!0), bb
      }
      static IdentityToRef(bb) {
        return Eb.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, bb), bb._updateIdentityStatus(!0), bb
      }
      static Zero() {
        const bb = Eb.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return bb._updateIdentityStatus(!1), bb
      }
      static RotationX(bb) {
        const wb = new Eb;
        return Eb.RotationXToRef(bb, wb), wb
      }
      static Invert(bb) {
        const wb = new Eb;
        return bb.invertToRef(wb), wb
      }
      static RotationXToRef(bb, wb) {
        const Mb = Math.sin(bb),
          eb = Math.cos(bb);
        return Eb.FromValuesToRef(1, 0, 0, 0, 0, eb, Mb, 0, 0, -Mb, eb, 0, 0, 0, 0, 1, wb), wb._updateIdentityStatus(1 === eb && 0 === Mb), wb
      }
      static RotationY(bb) {
        const wb = new Eb;
        return Eb.RotationYToRef(bb, wb), wb
      }
      static RotationYToRef(bb, wb) {
        const Mb = Math.sin(bb),
          eb = Math.cos(bb);
        return Eb.FromValuesToRef(eb, 0, -Mb, 0, 0, 1, 0, 0, Mb, 0, eb, 0, 0, 0, 0, 1, wb), wb._updateIdentityStatus(1 === eb && 0 === Mb), wb
      }
      static RotationZ(bb) {
        const wb = new Eb;
        return Eb.RotationZToRef(bb, wb), wb
      }
      static RotationZToRef(bb, wb) {
        const Mb = Math.sin(bb),
          eb = Math.cos(bb);
        return Eb.FromValuesToRef(eb, Mb, 0, 0, -Mb, eb, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, wb), wb._updateIdentityStatus(1 === eb && 0 === Mb), wb
      }
      static RotationAxis(bb, wb) {
        const Mb = new Eb;
        return Eb.RotationAxisToRef(bb, wb, Mb), Mb
      }
      static RotationAxisToRef(bb, wb, Mb) {
        const eb = Math.sin(-wb),
          Hb = Math.cos(-wb),
          pb = 1 - Hb;
        bb = bb.normalizeToRef(Fb.YC[0]);
        const Vb = Mb._m;
        return Vb[0] = bb._x * bb._x * pb + Hb, Vb[1] = bb._x * bb._y * pb - bb._z * eb, Vb[2] = bb._x * bb._z * pb + bb._y * eb, Vb[3] = 0, Vb[4] = bb._y * bb._x * pb + bb._z * eb, Vb[5] = bb._y * bb._y * pb + Hb, Vb[6] = bb._y * bb._z * pb - bb._x * eb, Vb[7] = 0, Vb[8] = bb._z * bb._x * pb - bb._y * eb, Vb[9] = bb._z * bb._y * pb + bb._x * eb, Vb[10] = bb._z * bb._z * pb + Hb, Vb[11] = 0, Vb[12] = 0, Vb[13] = 0, Vb[14] = 0, Vb[15] = 1, Mb.markAsUpdated(), Mb
      }
      static RotationAlignToRef(bb, wb, Mb) {
        let Hb = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const pb = Ub.Dot(wb, bb),
          Vb = Mb._m;
        if (pb < -1 + eb.e) Vb[0] = -1, Vb[1] = 0, Vb[2] = 0, Vb[3] = 0, Vb[4] = 0, Vb[5] = Hb ? 1 : -1, Vb[6] = 0, Vb[7] = 0, Vb[8] = 0, Vb[9] = 0, Vb[10] = Hb ? -1 : 1, Vb[11] = 0;
        else {
          const Mb = Ub.Cross(wb, bb),
            eb = 1 / (1 + pb);
          Vb[0] = Mb._x * Mb._x * eb + pb, Vb[1] = Mb._y * Mb._x * eb - Mb._z, Vb[2] = Mb._z * Mb._x * eb + Mb._y, Vb[3] = 0, Vb[4] = Mb._x * Mb._y * eb + Mb._z, Vb[5] = Mb._y * Mb._y * eb + pb, Vb[6] = Mb._z * Mb._y * eb - Mb._x, Vb[7] = 0, Vb[8] = Mb._x * Mb._z * eb - Mb._y, Vb[9] = Mb._y * Mb._z * eb + Mb._x, Vb[10] = Mb._z * Mb._z * eb + pb, Vb[11] = 0
        }
        return Vb[12] = 0, Vb[13] = 0, Vb[14] = 0, Vb[15] = 1, Mb.markAsUpdated(), Mb
      }
      static RotationYawPitchRoll(bb, wb, Mb) {
        const eb = new Eb;
        return Eb.RotationYawPitchRollToRef(bb, wb, Mb, eb), eb
      }
      static RotationYawPitchRollToRef(bb, wb, Mb, eb) {
        return Cb.RotationYawPitchRollToRef(bb, wb, Mb, Fb.Quaternion[0]), Fb.Quaternion[0].toRotationMatrix(eb), eb
      }
      static Scaling(bb, wb, Mb) {
        const eb = new Eb;
        return Eb.ScalingToRef(bb, wb, Mb, eb), eb
      }
      static ScalingToRef(bb, wb, Mb, eb) {
        return Eb.FromValuesToRef(bb, 0, 0, 0, 0, wb, 0, 0, 0, 0, Mb, 0, 0, 0, 0, 1, eb), eb._updateIdentityStatus(1 === bb && 1 === wb && 1 === Mb), eb
      }
      static Translation(bb, wb, Mb) {
        const eb = new Eb;
        return Eb.TranslationToRef(bb, wb, Mb, eb), eb
      }
      static TranslationToRef(bb, wb, Mb, eb) {
        return Eb.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, bb, wb, Mb, 1, eb), eb._updateIdentityStatus(0 === bb && 0 === wb && 0 === Mb), eb
      }
      static Lerp(bb, wb, Mb) {
        const eb = new Eb;
        return Eb.LerpToRef(bb, wb, Mb, eb), eb
      }
      static LerpToRef(bb, wb, Mb, eb) {
        const Hb = eb._m,
          pb = bb.m,
          Vb = wb.m;
        for (let gb = 0; gb < 16; gb++) Hb[gb] = pb[gb] * (1 - Mb) + Vb[gb] * Mb;
        return eb.markAsUpdated(), eb
      }
      static DecomposeLerp(bb, wb, Mb) {
        const eb = new Eb;
        return Eb.DecomposeLerpToRef(bb, wb, Mb, eb), eb
      }
      static DecomposeLerpToRef(bb, wb, Mb, eb) {
        const Hb = Fb.YC[0],
          pb = Fb.Quaternion[0],
          Vb = Fb.YC[1];
        bb.decompose(Hb, pb, Vb);
        const gb = Fb.YC[2],
          lb = Fb.Quaternion[1],
          Lb = Fb.YC[3];
        wb.decompose(gb, lb, Lb);
        const Ib = Fb.YC[4];
        Ub.LerpToRef(Hb, gb, Mb, Ib);
        const Ob = Fb.Quaternion[2];
        Cb.SlerpToRef(pb, lb, Mb, Ob);
        const tb = Fb.YC[5];
        return Ub.LerpToRef(Vb, Lb, Mb, tb), Eb.ComposeToRef(Ib, Ob, tb, eb), eb
      }
      static LookAtLH(bb, wb, Mb) {
        const eb = new Eb;
        return Eb.LookAtLHToRef(bb, wb, Mb, eb), eb
      }
      static LookAtLHToRef(bb, wb, Mb, eb) {
        const Hb = Fb.YC[0],
          pb = Fb.YC[1],
          Vb = Fb.YC[2];
        wb.subtractToRef(bb, Vb), Vb.normalize(), Ub.CrossToRef(Mb, Vb, Hb);
        const gb = Hb.lengthSquared();
        0 === gb ? Hb.x = 1 : Hb.normalizeFromLength(Math.sqrt(gb)), Ub.CrossToRef(Vb, Hb, pb), pb.normalize();
        const lb = -Ub.Dot(Hb, bb),
          Lb = -Ub.Dot(pb, bb),
          Ib = -Ub.Dot(Vb, bb);
        return Eb.FromValuesToRef(Hb._x, pb._x, Vb._x, 0, Hb._y, pb._y, Vb._y, 0, Hb._z, pb._z, Vb._z, 0, lb, Lb, Ib, 1, eb), eb
      }
      static LookAtRH(bb, wb, Mb) {
        const eb = new Eb;
        return Eb.LookAtRHToRef(bb, wb, Mb, eb), eb
      }
      static LookAtRHToRef(bb, wb, Mb, eb) {
        const Hb = Fb.YC[0],
          pb = Fb.YC[1],
          Vb = Fb.YC[2];
        bb.subtractToRef(wb, Vb), Vb.normalize(), Ub.CrossToRef(Mb, Vb, Hb);
        const gb = Hb.lengthSquared();
        0 === gb ? Hb.x = 1 : Hb.normalizeFromLength(Math.sqrt(gb)), Ub.CrossToRef(Vb, Hb, pb), pb.normalize();
        const lb = -Ub.Dot(Hb, bb),
          Lb = -Ub.Dot(pb, bb),
          Ib = -Ub.Dot(Vb, bb);
        return Eb.FromValuesToRef(Hb._x, pb._x, Vb._x, 0, Hb._y, pb._y, Vb._y, 0, Hb._z, pb._z, Vb._z, 0, lb, Lb, Ib, 1, eb), eb
      }
      static LookDirectionLH(bb, wb) {
        const Mb = new Eb;
        return Eb.LookDirectionLHToRef(bb, wb, Mb), Mb
      }
      static LookDirectionLHToRef(bb, wb, Mb) {
        const eb = Fb.YC[0];
        eb.eZ(bb), eb.scaleInPlace(-1);
        const Hb = Fb.YC[1];
        return Ub.CrossToRef(wb, eb, Hb), Eb.FromValuesToRef(Hb._x, Hb._y, Hb._z, 0, wb._x, wb._y, wb._z, 0, eb._x, eb._y, eb._z, 0, 0, 0, 0, 1, Mb), Mb
      }
      static LookDirectionRH(bb, wb) {
        const Mb = new Eb;
        return Eb.LookDirectionRHToRef(bb, wb, Mb), Mb
      }
      static LookDirectionRHToRef(bb, wb, Mb) {
        const eb = Fb.YC[2];
        return Ub.CrossToRef(wb, bb, eb), Eb.FromValuesToRef(eb._x, eb._y, eb._z, 0, wb._x, wb._y, wb._z, 0, bb._x, bb._y, bb._z, 0, 0, 0, 0, 1, Mb), Mb
      }
      static OrthoLH(bb, wb, Mb, eb, Hb) {
        const pb = new Eb;
        return Eb.OrthoLHToRef(bb, wb, Mb, eb, pb, Hb), pb
      }
      static OrthoLHToRef(bb, wb, Mb, eb, Hb, pb) {
        const Vb = 2 / bb,
          gb = 2 / wb,
          lb = 2 / (eb - Mb),
          Lb = -(eb + Mb) / (eb - Mb);
        return Eb.FromValuesToRef(Vb, 0, 0, 0, 0, gb, 0, 0, 0, 0, lb, 0, 0, 0, Lb, 1, Hb), pb && Hb.multiplyToRef(sb, Hb), Hb._updateIdentityStatus(1 === Vb && 1 === gb && 1 === lb && 0 === Lb), Hb
      }
      static OrthoOffCenterLH(bb, wb, Mb, eb, Hb, pb, Vb) {
        const gb = new Eb;
        return Eb.OrthoOffCenterLHToRef(bb, wb, Mb, eb, Hb, pb, gb, Vb), gb
      }
      static OrthoOffCenterLHToRef(bb, wb, Mb, eb, Hb, pb, Vb, gb) {
        const lb = 2 / (wb - bb),
          Lb = 2 / (eb - Mb),
          Ib = 2 / (pb - Hb),
          Ob = -(pb + Hb) / (pb - Hb),
          Ub = (bb + wb) / (bb - wb),
          tb = (eb + Mb) / (Mb - eb);
        return Eb.FromValuesToRef(lb, 0, 0, 0, 0, Lb, 0, 0, 0, 0, Ib, 0, Ub, tb, Ob, 1, Vb), gb && Vb.multiplyToRef(sb, Vb), Vb.markAsUpdated(), Vb
      }
      static ObliqueOffCenterLHToRef(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib) {
        const Ob = -Vb * Math.cos(gb),
          Ub = -Vb * Math.sin(gb);
        return Eb.TranslationToRef(0, 0, -lb, Fb.Matrix[1]), Eb.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Ob, Ub, 1, 0, 0, 0, 0, 1, Fb.Matrix[0]), Fb.Matrix[1].multiplyToRef(Fb.Matrix[0], Fb.Matrix[0]), Eb.TranslationToRef(0, 0, lb, Fb.Matrix[1]), Fb.Matrix[0].multiplyToRef(Fb.Matrix[1], Fb.Matrix[0]), Eb.OrthoOffCenterLHToRef(bb, wb, Mb, eb, Hb, pb, Lb, Ib), Fb.Matrix[0].multiplyToRef(Lb, Lb), Lb
      }
      static OrthoOffCenterRH(bb, wb, Mb, eb, Hb, pb, Vb) {
        const gb = new Eb;
        return Eb.OrthoOffCenterRHToRef(bb, wb, Mb, eb, Hb, pb, gb, Vb), gb
      }
      static OrthoOffCenterRHToRef(bb, wb, Mb, eb, Hb, pb, Vb, gb) {
        return Eb.OrthoOffCenterLHToRef(bb, wb, Mb, eb, Hb, pb, Vb, gb), Vb._m[10] *= -1, Vb
      }
      static ObliqueOffCenterRHToRef(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib) {
        const Ob = Vb * Math.cos(gb),
          Ub = Vb * Math.sin(gb);
        return Eb.TranslationToRef(0, 0, lb, Fb.Matrix[1]), Eb.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Ob, Ub, 1, 0, 0, 0, 0, 1, Fb.Matrix[0]), Fb.Matrix[1].multiplyToRef(Fb.Matrix[0], Fb.Matrix[0]), Eb.TranslationToRef(0, 0, -lb, Fb.Matrix[1]), Fb.Matrix[0].multiplyToRef(Fb.Matrix[1], Fb.Matrix[0]), Eb.OrthoOffCenterRHToRef(bb, wb, Mb, eb, Hb, pb, Lb, Ib), Fb.Matrix[0].multiplyToRef(Lb, Lb), Lb
      }
      static PerspectiveLH(bb, wb, Mb, eb, Hb) {
        let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const Vb = new Eb,
          gb = 2 * Mb / bb,
          lb = 2 * Mb / wb,
          Lb = (eb + Mb) / (eb - Mb),
          Ib = -2 * eb * Mb / (eb - Mb),
          Ob = Math.tan(pb);
        return Eb.FromValuesToRef(gb, 0, 0, 0, 0, lb, 0, Ob, 0, 0, Lb, 1, 0, 0, Ib, 0, Vb), Hb && Vb.multiplyToRef(sb, Vb), Vb._updateIdentityStatus(!1), Vb
      }
      static PerspectiveFovLH(bb, wb, Mb, eb, Hb) {
        let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Vb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const gb = new Eb;
        return Eb.PerspectiveFovLHToRef(bb, wb, Mb, eb, gb, !0, Hb, pb, Vb), gb
      }
      static PerspectiveFovLHToRef(bb, wb, Mb, eb, Hb) {
        let pb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Vb = arguments.length > 6 ? arguments[6] : void 0,
          gb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          lb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Lb = Mb,
          Ib = eb,
          Ob = 1 / Math.tan(.5 * bb),
          Ub = pb ? Ob / wb : Ob,
          tb = pb ? Ob : Ob * wb,
          Cb = lb && 0 === Lb ? -1 : 0 !== Ib ? (Ib + Lb) / (Ib - Lb) : 1,
          Fb = lb && 0 === Lb ? 2 * Ib : 0 !== Ib ? -2 * Ib * Lb / (Ib - Lb) : -2 * Lb,
          Bb = Math.tan(gb);
        return Eb.FromValuesToRef(Ub, 0, 0, 0, 0, tb, 0, Bb, 0, 0, Cb, 1, 0, 0, Fb, 0, Hb), Vb && Hb.multiplyToRef(sb, Hb), Hb._updateIdentityStatus(!1), Hb
      }
      static PerspectiveFovReverseLHToRef(bb, wb, Mb, eb, Hb) {
        let pb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Vb = arguments.length > 6 ? arguments[6] : void 0,
          gb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const lb = 1 / Math.tan(.5 * bb),
          Lb = pb ? lb / wb : lb,
          Ib = pb ? lb : lb * wb,
          Ob = Math.tan(gb);
        return Eb.FromValuesToRef(Lb, 0, 0, 0, 0, Ib, 0, Ob, 0, 0, -Mb, 1, 0, 0, 1, 0, Hb), Vb && Hb.multiplyToRef(sb, Hb), Hb._updateIdentityStatus(!1), Hb
      }
      static PerspectiveFovRH(bb, wb, Mb, eb, Hb) {
        let pb = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Vb = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const gb = new Eb;
        return Eb.PerspectiveFovRHToRef(bb, wb, Mb, eb, gb, !0, Hb, pb, Vb), gb
      }
      static PerspectiveFovRHToRef(bb, wb, Mb, eb, Hb) {
        let pb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Vb = arguments.length > 6 ? arguments[6] : void 0,
          gb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          lb = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const Lb = Mb,
          Ib = eb,
          Ob = 1 / Math.tan(.5 * bb),
          Ub = pb ? Ob / wb : Ob,
          tb = pb ? Ob : Ob * wb,
          Cb = lb && 0 === Lb ? 1 : 0 !== Ib ? -(Ib + Lb) / (Ib - Lb) : -1,
          Fb = lb && 0 === Lb ? 2 * Ib : 0 !== Ib ? -2 * Ib * Lb / (Ib - Lb) : -2 * Lb,
          Bb = Math.tan(gb);
        return Eb.FromValuesToRef(Ub, 0, 0, 0, 0, tb, 0, Bb, 0, 0, Cb, -1, 0, 0, Fb, 0, Hb), Vb && Hb.multiplyToRef(sb, Hb), Hb._updateIdentityStatus(!1), Hb
      }
      static PerspectiveFovReverseRHToRef(bb, wb, Mb, eb, Hb) {
        let pb = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Vb = arguments.length > 6 ? arguments[6] : void 0,
          gb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const lb = 1 / Math.tan(.5 * bb),
          Lb = pb ? lb / wb : lb,
          Ib = pb ? lb : lb * wb,
          Ob = Math.tan(gb);
        return Eb.FromValuesToRef(Lb, 0, 0, 0, 0, Ib, 0, Ob, 0, 0, -Mb, -1, 0, 0, -1, 0, Hb), Vb && Hb.multiplyToRef(sb, Hb), Hb._updateIdentityStatus(!1), Hb
      }
      static GetFinalMatrix(bb, wb, Mb, eb, Hb, pb) {
        const Vb = bb.width,
          gb = bb.height,
          lb = bb.x,
          Lb = bb.y,
          Ib = Eb.FromValues(Vb / 2, 0, 0, 0, 0, -gb / 2, 0, 0, 0, 0, pb - Hb, 0, lb + Vb / 2, gb / 2 + Lb, Hb, 1),
          Ob = new Eb;
        return wb.multiplyToRef(Mb, Ob), Ob.multiplyToRef(eb, Ob), Ob.multiplyToRef(Ib, Ob)
      }
      static GetAsMatrix2x2(bb) {
        const wb = bb.m,
          Mb = [wb[0], wb[1], wb[4], wb[5]];
        return pb.c.MatrixUse64Bits ? Mb : new Float32Array(Mb)
      }
      static GetAsMatrix3x3(bb) {
        const wb = bb.m,
          Mb = [wb[0], wb[1], wb[2], wb[4], wb[5], wb[6], wb[8], wb[9], wb[10]];
        return pb.c.MatrixUse64Bits ? Mb : new Float32Array(Mb)
      }
      static Transpose(bb) {
        const wb = new Eb;
        return Eb.TransposeToRef(bb, wb), wb
      }
      static TransposeToRef(bb, wb) {
        const Mb = bb.m,
          eb = Mb[0],
          Hb = Mb[4],
          pb = Mb[8],
          Vb = Mb[12],
          gb = Mb[1],
          lb = Mb[5],
          Lb = Mb[9],
          Ib = Mb[13],
          Ob = Mb[2],
          Ub = Mb[6],
          tb = Mb[10],
          Cb = Mb[14],
          Eb = Mb[3],
          Fb = Mb[7],
          Bb = Mb[11],
          sb = Mb[15],
          mb = wb._m;
        return mb[0] = eb, mb[1] = Hb, mb[2] = pb, mb[3] = Vb, mb[4] = gb, mb[5] = lb, mb[6] = Lb, mb[7] = Ib, mb[8] = Ob, mb[9] = Ub, mb[10] = tb, mb[11] = Cb, mb[12] = Eb, mb[13] = Fb, mb[14] = Bb, mb[15] = sb, wb.markAsUpdated(), wb._updateIdentityStatus(bb._isIdentity, bb._isIdentityDirty), wb
      }
      static Reflection(bb) {
        const wb = new Eb;
        return Eb.ReflectionToRef(bb, wb), wb
      }
      static ReflectionToRef(bb, wb) {
        bb.normalize();
        const Mb = bb.normal.x,
          eb = bb.normal.y,
          Hb = bb.normal.z,
          pb = -2 * Mb,
          Vb = -2 * eb,
          gb = -2 * Hb;
        return Eb.FromValuesToRef(pb * Mb + 1, Vb * Mb, gb * Mb, 0, pb * eb, Vb * eb + 1, gb * eb, 0, pb * Hb, Vb * Hb, gb * Hb + 1, 0, pb * bb.d, Vb * bb.d, gb * bb.d, 1, wb), wb
      }
      static FromXYZAxesToRef(bb, wb, Mb, eb) {
        return Eb.FromValuesToRef(bb._x, bb._y, bb._z, 0, wb._x, wb._y, wb._z, 0, Mb._x, Mb._y, Mb._z, 0, 0, 0, 0, 1, eb), eb
      }
      static FromQuaternionToRef(bb, wb) {
        const Mb = bb._x * bb._x,
          eb = bb._y * bb._y,
          Hb = bb._z * bb._z,
          pb = bb._x * bb._y,
          Vb = bb._z * bb._w,
          gb = bb._z * bb._x,
          lb = bb._y * bb._w,
          Lb = bb._y * bb._z,
          Ib = bb._x * bb._w;
        return wb._m[0] = 1 - 2 * (eb + Hb), wb._m[1] = 2 * (pb + Vb), wb._m[2] = 2 * (gb - lb), wb._m[3] = 0, wb._m[4] = 2 * (pb - Vb), wb._m[5] = 1 - 2 * (Hb + Mb), wb._m[6] = 2 * (Lb + Ib), wb._m[7] = 0, wb._m[8] = 2 * (gb + lb), wb._m[9] = 2 * (Lb - Ib), wb._m[10] = 1 - 2 * (eb + Mb), wb._m[11] = 0, wb._m[12] = 0, wb._m[13] = 0, wb._m[14] = 0, wb._m[15] = 1, wb.markAsUpdated(), wb
      }
    }
    Eb._IdentityReadOnly = Eb.Identity();
    class Fb {}
    Fb.YC = (0, Hb.f)(11, Ub.Zero), Fb.Matrix = (0, Hb.f)(2, Eb.Identity), Fb.Quaternion = (0, Hb.f)(3, Cb.Zero);
    class Bb {}
    Bb.Vector2 = (0, Hb.f)(3, Ob.Zero), Bb.YC = (0, Hb.f)(13, Ub.Zero), Bb.Vector4 = (0, Hb.f)(3, tb.Zero), Bb.Quaternion = (0, Hb.f)(3, Cb.Zero), Bb.Matrix = (0, Hb.f)(8, Eb.Identity);
    const sb = Eb.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let mb = !1;

    function hb() {
      mb || (mb = !0, Object.defineProperties(Ob.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Ub.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(tb.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Cb.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Eb.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, Lb.e)("BABYLON.Vector2", Ob), (0, Lb.e)("BABYLON.Vector3", Ub), (0, Lb.e)("BABYLON.Vector4", tb), (0, Lb.e)("BABYLON.Matrix", Eb))
    }
  },
  38318: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb
    });
    const eb = "undefined" !== typeof WeakRef;
    class Hb {
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 ? arguments[2] : void 0,
          eb = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(bb, wb, Mb, eb)
      }
      initialize(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Mb = arguments.length > 2 ? arguments[2] : void 0,
          eb = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = bb, this.skipNextObservers = wb, this.target = Mb, this.currentTarget = eb, this
      }
    }
    class pb {
      constructor(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = bb, this.mask = wb, this.scope = Mb, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(bb)
      }
    }
    class Vb {
      static FromPromise(bb, wb) {
        const Mb = new Vb;
        return bb.then((bb => {
          Mb.notifyObservers(bb)
        })).catch((bb => {
          if (!wb) throw bb;
          wb.notifyObservers(bb)
        })), Mb
      }
      get observers() {
        return this._observers
      }
      constructor(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = wb, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Hb(0), bb && (this._onObserverAdded = bb)
      }
      add(bb) {
        let wb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Mb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!bb) return null;
        const Hb = new pb(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Hb.unregisterOnNextCall = Mb, wb ? this._observers.unshift(Hb) : this._observers.push(Hb), this._onObserverAdded && this._onObserverAdded(Hb), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Hb, this._lastNotifiedValue);
        const Vb = eb ? new WeakRef(this) : {
          deref: () => this
        };
        return Hb._remove = function() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const wb = Vb.deref();
          wb && (bb ? wb.remove(Hb) : wb._remove(Hb))
        }, Hb
      }
      addOnce(bb) {
        return this.add(bb, void 0, void 0, void 0, !0)
      }
      remove(bb) {
        if (!bb) return !1;
        bb._remove = null;
        return -1 !== this._observers.indexOf(bb) && (this._deferUnregister(bb), !0)
      }
      removeCallback(bb, wb) {
        for (let Mb = 0; Mb < this._observers.length; Mb++) {
          const eb = this._observers[Mb];
          if (!eb._willBeUnregistered && (eb.callback === bb && (!wb || wb === eb.scope))) return this._deferUnregister(eb), !0
        }
        return !1
      }
      _deferUnregister(bb) {
        bb._willBeUnregistered || (this._numObserversMarkedAsDeleted++, bb.unregisterOnNextCall = !1, bb._willBeUnregistered = !0, setTimeout((() => {
          this._remove(bb)
        }), 0))
      }
      _remove(bb) {
        let wb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!bb) return !1;
        const Mb = this._observers.indexOf(bb);
        return -1 !== Mb && (wb && this._numObserversMarkedAsDeleted--, this._observers.splice(Mb, 1), !0)
      }
      makeObserverTopPriority(bb) {
        this._remove(bb, !1), this._observers.unshift(bb)
      }
      makeObserverBottomPriority(bb) {
        this._remove(bb, !1), this._observers.push(bb)
      }
      notifyObservers(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Mb = arguments.length > 2 ? arguments[2] : void 0,
          eb = arguments.length > 3 ? arguments[3] : void 0,
          Hb = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = bb), !this._observers.length) return !0;
        const pb = this._eventState;
        pb.mask = wb, pb.target = Mb, pb.currentTarget = eb, pb.skipNextObservers = !1, pb.lastReturnValue = bb, pb.userInfo = Hb;
        for (const Vb of this._observers)
          if (!Vb._willBeUnregistered && (Vb.mask & wb && (Vb.unregisterOnNextCall && this._deferUnregister(Vb), Vb.scope ? pb.lastReturnValue = Vb.callback.apply(Vb.scope, [bb, pb]) : pb.lastReturnValue = Vb.callback(bb, pb)), pb.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = wb), bb._willBeUnregistered) return;
        const eb = this._eventState;
        eb.mask = Mb, eb.skipNextObservers = !1, bb.unregisterOnNextCall && this._deferUnregister(bb), bb.callback(wb, eb)
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
        const bb = new Vb;
        return bb._observers = this._observers.slice(0), bb
      }
      hasSpecificMask() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const wb of this._observers)
          if (wb.mask & bb || wb.mask === bb) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);