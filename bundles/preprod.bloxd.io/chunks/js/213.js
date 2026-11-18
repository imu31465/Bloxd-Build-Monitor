export const id = 213;
export const ids = [213];
export const modules = {
  35886: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy
    });
    var Uy = Wy(35893);
    class hy {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    hy.Instances = [], hy.OnEnginesDisposedObservable = new Uy.c, hy._LastCreatedScene = null, hy.UseFallbackTexture = !0, hy.FallbackTexture = ""
  },
  35877: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy
    });
    class Uy {
      static SetMatrixPrecision(yb) {
        if (Uy.MatrixTrackPrecisionChange = !1, yb && !Uy.MatrixUse64Bits && Uy.MatrixTrackedMatrices)
          for (let bb = 0; bb < Uy.MatrixTrackedMatrices.length; ++bb) {
            const yb = Uy.MatrixTrackedMatrices[bb],
              Wy = yb._m;
            yb._m = new Array(16);
            for (let bb = 0; bb < 16; ++bb) yb._m[bb] = Wy[bb]
          }
        Uy.MatrixUse64Bits = yb, Uy.MatrixCurrentType = Uy.MatrixUse64Bits ? Array : Float32Array, Uy.MatrixTrackedMatrices = null
      }
    }
    Uy.MatrixUse64Bits = !1, Uy.MatrixTrackPrecisionChange = !0, Uy.MatrixCurrentType = Float32Array, Uy.MatrixTrackedMatrices = []
  },
  35905: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => cb,
      h: () => oy,
      i: () => Py,
      l: () => Uy,
      m: () => fy,
      o: () => Zy
    });
    class Uy {}

    function hy(yb) {
      yb.updateFlag = Uy._UpdateFlagSeed++
    }

    function fy(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const hy = yb.hBy(),
        fy = bb.hBy(),
        Zy = hy[0],
        cb = hy[1],
        Py = hy[2],
        oy = hy[3],
        By = hy[4],
        Ky = hy[5],
        ey = hy[6],
        qb = hy[7],
        sy = hy[8],
        Sy = hy[9],
        Ey = hy[10],
        ly = hy[11],
        mb = hy[12],
        Cy = hy[13],
        Ty = hy[14],
        Vy = hy[15],
        Jy = fy[0],
        gb = fy[1],
        Gy = fy[2],
        Oy = fy[3],
        Ry = fy[4],
        vb = fy[5],
        ib = fy[6],
        My = fy[7],
        Yy = fy[8],
        Xy = fy[9],
        ny = fy[10],
        uy = fy[11],
        rb = fy[12],
        Hy = fy[13],
        ab = fy[14],
        Fy = fy[15];
      Wy[Uy] = Zy * Jy + cb * Ry + Py * Yy + oy * rb, Wy[Uy + 1] = Zy * gb + cb * vb + Py * Xy + oy * Hy, Wy[Uy + 2] = Zy * Gy + cb * ib + Py * ny + oy * ab, Wy[Uy + 3] = Zy * Oy + cb * My + Py * uy + oy * Fy, Wy[Uy + 4] = By * Jy + Ky * Ry + ey * Yy + qb * rb, Wy[Uy + 5] = By * gb + Ky * vb + ey * Xy + qb * Hy, Wy[Uy + 6] = By * Gy + Ky * ib + ey * ny + qb * ab, Wy[Uy + 7] = By * Oy + Ky * My + ey * uy + qb * Fy, Wy[Uy + 8] = sy * Jy + Sy * Ry + Ey * Yy + ly * rb, Wy[Uy + 9] = sy * gb + Sy * vb + Ey * Xy + ly * Hy, Wy[Uy + 10] = sy * Gy + Sy * ib + Ey * ny + ly * ab, Wy[Uy + 11] = sy * Oy + Sy * My + Ey * uy + ly * Fy, Wy[Uy + 12] = mb * Jy + Cy * Ry + Ty * Yy + Vy * rb, Wy[Uy + 13] = mb * gb + Cy * vb + Ty * Xy + Vy * Hy, Wy[Uy + 14] = mb * Gy + Cy * ib + Ty * ny + Vy * ab, Wy[Uy + 15] = mb * Oy + Cy * My + Ty * uy + Vy * Fy
    }

    function Zy(yb, bb, Wy) {
      let Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      fy(yb, bb, Wy.hBy(), Uy), hy(Wy)
    }

    function cb(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Uy = yb.hBy();
      bb[Wy] = Uy[0], bb[Wy + 1] = Uy[1], bb[Wy + 2] = Uy[2], bb[Wy + 3] = Uy[3], bb[Wy + 4] = Uy[4], bb[Wy + 5] = Uy[5], bb[Wy + 6] = Uy[6], bb[Wy + 7] = Uy[7], bb[Wy + 8] = Uy[8], bb[Wy + 9] = Uy[9], bb[Wy + 10] = Uy[10], bb[Wy + 11] = Uy[11], bb[Wy + 12] = Uy[12], bb[Wy + 13] = Uy[13], bb[Wy + 14] = Uy[14], bb[Wy + 15] = Uy[15]
    }

    function Py(yb, bb) {
      const Wy = oy(yb, bb.hBy());
      return Wy && hy(bb), Wy
    }

    function oy(yb, bb) {
      const Wy = yb.hBy(),
        Uy = Wy[0],
        hy = Wy[1],
        fy = Wy[2],
        Zy = Wy[3],
        cb = Wy[4],
        Py = Wy[5],
        oy = Wy[6],
        By = Wy[7],
        Ky = Wy[8],
        ey = Wy[9],
        qb = Wy[10],
        sy = Wy[11],
        Sy = Wy[12],
        Ey = Wy[13],
        ly = Wy[14],
        mb = Wy[15],
        Cy = qb * mb - ly * sy,
        Ty = ey * mb - Ey * sy,
        Vy = ey * ly - Ey * qb,
        Jy = Ky * mb - Sy * sy,
        gb = Ky * ly - qb * Sy,
        Gy = Ky * Ey - Sy * ey,
        Oy = +(Py * Cy - oy * Ty + By * Vy),
        Ry = -(cb * Cy - oy * Jy + By * gb),
        vb = +(cb * Ty - Py * Jy + By * Gy),
        ib = -(cb * Vy - Py * gb + oy * Gy),
        My = Uy * Oy + hy * Ry + fy * vb + Zy * ib;
      if (0 === My) return !1;
      const Yy = 1 / My,
        Xy = oy * mb - ly * By,
        ny = Py * mb - Ey * By,
        uy = Py * ly - Ey * oy,
        rb = cb * mb - Sy * By,
        Hy = cb * ly - Sy * oy,
        ab = cb * Ey - Sy * Py,
        Fy = oy * sy - qb * By,
        py = Py * sy - ey * By,
        Ly = Py * qb - ey * oy,
        Qy = cb * sy - Ky * By,
        jb = cb * qb - Ky * oy,
        Dy = cb * ey - Ky * Py,
        tb = -(hy * Cy - fy * Ty + Zy * Vy),
        wy = +(Uy * Cy - fy * Jy + Zy * gb),
        kb = -(Uy * Ty - hy * Jy + Zy * Gy),
        Ny = +(Uy * Vy - hy * gb + fy * Gy),
        zb = +(hy * Xy - fy * ny + Zy * uy),
        Iy = -(Uy * Xy - fy * rb + Zy * Hy),
        xb = +(Uy * ny - hy * rb + Zy * ab),
        Ay = -(Uy * uy - hy * Hy + fy * ab),
        dy = -(hy * Fy - fy * py + Zy * Ly),
        yW = +(Uy * Fy - fy * Qy + Zy * jb),
        bW = -(Uy * py - hy * Qy + Zy * Dy),
        Wb = +(Uy * Ly - hy * jb + fy * Dy);
      return bb[0] = Oy * Yy, bb[1] = tb * Yy, bb[2] = zb * Yy, bb[3] = dy * Yy, bb[4] = Ry * Yy, bb[5] = wy * Yy, bb[6] = Iy * Yy, bb[7] = yW * Yy, bb[8] = vb * Yy, bb[9] = kb * Yy, bb[10] = xb * Yy, bb[11] = bW * Yy, bb[12] = ib * Yy, bb[13] = Ny * Yy, bb[14] = Ay * Yy, bb[15] = Wb * Yy, !0
    }
    Uy._UpdateFlagSeed = 0
  },
  35861: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Sy,
      e: () => sy,
      i: () => Ty,
      j: () => ly,
      m: () => Ky,
      n: () => ey,
      p: () => qb
    });
    var Uy = Wy(35864),
      hy = Wy(35869),
      fy = Wy(35877),
      Zy = Wy(35886),
      cb = Wy(35902),
      Py = Wy(35905),
      oy = Wy(35909);
    const By = yb => parseInt(yb.toString().replace(/\W/g, ""));
    class Ky {
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = yb, this.y = bb
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let yb = By(this.x);
        return yb = 397 * yb ^ By(this.y), yb
      }
      toArray(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return yb[bb] = this.x, yb[bb + 1] = this.y, this
      }
      FPy(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Ky.FromArrayToRef(yb, bb, this), this
      }
      hBy() {
        return [this.x, this.y]
      }
      Coy(yb) {
        return this.x = yb.x, this.y = yb.y, this
      }
      vcy(yb, bb) {
        return this.x = yb, this.y = bb, this
      }
      set(yb, bb) {
        return this.vcy(yb, bb)
      }
      dfy(yb) {
        return this.vcy(yb, yb)
      }
      add(yb) {
        return new Ky(this.x + yb.x, this.y + yb.y)
      }
      addToRef(yb, bb) {
        return bb.x = this.x + yb.x, bb.y = this.y + yb.y, bb
      }
      addInPlace(yb) {
        return this.x += yb.x, this.y += yb.y, this
      }
      addInPlaceFromFloats(yb, bb) {
        return this.x += yb, this.y += bb, this
      }
      addVector3(yb) {
        return new Ky(this.x + yb.x, this.y + yb.y)
      }
      subtract(yb) {
        return new Ky(this.x - yb.x, this.y - yb.y)
      }
      subtractToRef(yb, bb) {
        return bb.x = this.x - yb.x, bb.y = this.y - yb.y, bb
      }
      TBy(yb) {
        return this.x -= yb.x, this.y -= yb.y, this
      }
      multiplyInPlace(yb) {
        return this.x *= yb.x, this.y *= yb.y, this
      }
      multiply(yb) {
        return new Ky(this.x * yb.x, this.y * yb.y)
      }
      multiplyToRef(yb, bb) {
        return bb.x = this.x * yb.x, bb.y = this.y * yb.y, bb
      }
      multiplyByFloats(yb, bb) {
        return new Ky(this.x * yb, this.y * bb)
      }
      divide(yb) {
        return new Ky(this.x / yb.x, this.y / yb.y)
      }
      divideToRef(yb, bb) {
        return bb.x = this.x / yb.x, bb.y = this.y / yb.y, bb
      }
      divideInPlace(yb) {
        return this.x = this.x / yb.x, this.y = this.y / yb.y, this
      }
      minimizeInPlace(yb) {
        return this.minimizeInPlaceFromFloats(yb.x, yb.y)
      }
      maximizeInPlace(yb) {
        return this.maximizeInPlaceFromFloats(yb.x, yb.y)
      }
      minimizeInPlaceFromFloats(yb, bb) {
        return this.x = Math.min(yb, this.x), this.y = Math.min(bb, this.y), this
      }
      maximizeInPlaceFromFloats(yb, bb) {
        return this.x = Math.max(yb, this.x), this.y = Math.max(bb, this.y), this
      }
      subtractFromFloats(yb, bb) {
        return new Ky(this.x - yb, this.y - bb)
      }
      subtractFromFloatsToRef(yb, bb, Wy) {
        return Wy.x = this.x - yb, Wy.y = this.y - bb, Wy
      }
      gZ() {
        return new Ky(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(yb) {
        return yb.x = -this.x, yb.y = -this.y, yb
      }
      scaleInPlace(yb) {
        return this.x *= yb, this.y *= yb, this
      }
      scale(yb) {
        return new Ky(this.x * yb, this.y * yb)
      }
      scaleToRef(yb, bb) {
        return bb.x = this.x * yb, bb.y = this.y * yb, bb
      }
      scaleAndAddToRef(yb, bb) {
        return bb.x += this.x * yb, bb.y += this.y * yb, bb
      }
      equals(yb) {
        return yb && this.x === yb.x && this.y === yb.y
      }
      equalsWithEpsilon(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uy.e;
        return yb && (0, cb.WithinEpsilon)(this.x, yb.x, bb) && (0, cb.WithinEpsilon)(this.y, yb.y, bb)
      }
      nqy(yb, bb) {
        return this.x === yb && this.y === bb
      }
      floor() {
        return new Ky(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(yb) {
        return yb.x = Math.floor(this.x), yb.y = Math.floor(this.y), yb
      }
      fract() {
        return new Ky(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(yb) {
        return yb.x = this.x - Math.floor(this.x), yb.y = this.y - Math.floor(this.y), yb
      }
      rotate(yb) {
        return this.rotateToRef(yb, new Ky)
      }
      rotateToRef(yb, bb) {
        const Wy = Math.cos(yb),
          Uy = Math.sin(yb);
        return bb.x = Wy * this.x - Uy * this.y, bb.y = Uy * this.x + Wy * this.y, bb
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
      normalizeFromLength(yb) {
        return 0 === yb || 1 === yb ? this : this.scaleInPlace(1 / yb)
      }
      normalizeToNew() {
        const yb = new Ky;
        return this.normalizeToRef(yb), yb
      }
      normalizeToRef(yb) {
        const bb = this.length();
        return 0 === bb || 1 === bb ? (yb.x = this.x, yb.y = this.y, yb) : this.scaleToRef(1 / bb, yb)
      }
      clone() {
        return new Ky(this.x, this.y)
      }
      dot(yb) {
        return this.x * yb.x + this.y * yb.y
      }
      static Zero() {
        return new Ky(0, 0)
      }
      static One() {
        return new Ky(1, 1)
      }
      static Random() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Ky((0, cb.RandomRange)(yb, bb), (0, cb.RandomRange)(yb, bb))
      }
      static RandomToRef() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).vcy((0, cb.RandomRange)(yb, bb), (0, cb.RandomRange)(yb, bb))
      }
      static get ZeroReadOnly() {
        return Ky._ZeroReadOnly
      }
      static FromArray(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Ky(yb[bb], yb[bb + 1])
      }
      static FromArrayToRef(yb, bb, Wy) {
        return Wy.x = yb[bb], Wy.y = yb[bb + 1], Wy
      }
      static FromFloatsToRef(yb, bb, Wy) {
        return Wy.vcy(yb, bb), Wy
      }
      static CatmullRom(yb, bb, Wy, Uy, hy) {
        const fy = hy * hy,
          Zy = hy * fy,
          cb = .5 * (2 * bb.x + (-yb.x + Wy.x) * hy + (2 * yb.x - 5 * bb.x + 4 * Wy.x - Uy.x) * fy + (-yb.x + 3 * bb.x - 3 * Wy.x + Uy.x) * Zy),
          Py = .5 * (2 * bb.y + (-yb.y + Wy.y) * hy + (2 * yb.y - 5 * bb.y + 4 * Wy.y - Uy.y) * fy + (-yb.y + 3 * bb.y - 3 * Wy.y + Uy.y) * Zy);
        return new Ky(cb, Py)
      }
      static ClampToRef(yb, bb, Wy, Uy) {
        return Uy.x = (0, cb.Clamp)(yb.x, bb.x, Wy.x), Uy.y = (0, cb.Clamp)(yb.y, bb.y, Wy.y), Uy
      }
      static Clamp(yb, bb, Wy) {
        const Uy = (0, cb.Clamp)(yb.x, bb.x, Wy.x),
          hy = (0, cb.Clamp)(yb.y, bb.y, Wy.y);
        return new Ky(Uy, hy)
      }
      static Hermite(yb, bb, Wy, Uy, hy) {
        const fy = hy * hy,
          Zy = hy * fy,
          cb = 2 * Zy - 3 * fy + 1,
          Py = -2 * Zy + 3 * fy,
          oy = Zy - 2 * fy + hy,
          By = Zy - fy,
          ey = yb.x * cb + Wy.x * Py + bb.x * oy + Uy.x * By,
          qb = yb.y * cb + Wy.y * Py + bb.y * oy + Uy.y * By;
        return new Ky(ey, qb)
      }
      static Hermite1stDerivative(yb, bb, Wy, Uy, hy) {
        return this.Hermite1stDerivativeToRef(yb, bb, Wy, Uy, hy, new Ky)
      }
      static Hermite1stDerivativeToRef(yb, bb, Wy, Uy, hy, fy) {
        const Zy = hy * hy;
        return fy.x = 6 * (Zy - hy) * yb.x + (3 * Zy - 4 * hy + 1) * bb.x + 6 * (-Zy + hy) * Wy.x + (3 * Zy - 2 * hy) * Uy.x, fy.y = 6 * (Zy - hy) * yb.y + (3 * Zy - 4 * hy + 1) * bb.y + 6 * (-Zy + hy) * Wy.y + (3 * Zy - 2 * hy) * Uy.y, fy
      }
      static Lerp(yb, bb, Wy) {
        return Ky.LerpToRef(yb, bb, Wy, new Ky)
      }
      static LerpToRef(yb, bb, Wy, Uy) {
        return Uy.x = yb.x + (bb.x - yb.x) * Wy, Uy.y = yb.y + (bb.y - yb.y) * Wy, Uy
      }
      static Dot(yb, bb) {
        return yb.x * bb.x + yb.y * bb.y
      }
      static Normalize(yb) {
        return Ky.NormalizeToRef(yb, new Ky)
      }
      static NormalizeToRef(yb, bb) {
        return yb.normalizeToRef(bb), bb
      }
      static Minimize(yb, bb) {
        const Wy = yb.x < bb.x ? yb.x : bb.x,
          Uy = yb.y < bb.y ? yb.y : bb.y;
        return new Ky(Wy, Uy)
      }
      static Maximize(yb, bb) {
        const Wy = yb.x > bb.x ? yb.x : bb.x,
          Uy = yb.y > bb.y ? yb.y : bb.y;
        return new Ky(Wy, Uy)
      }
      static Transform(yb, bb) {
        return Ky.TransformToRef(yb, bb, new Ky)
      }
      static TransformToRef(yb, bb, Wy) {
        const Uy = bb.m,
          hy = yb.x * Uy[0] + yb.y * Uy[4] + Uy[12],
          fy = yb.x * Uy[1] + yb.y * Uy[5] + Uy[13];
        return Wy.x = hy, Wy.y = fy, Wy
      }
      static PointInTriangle(yb, bb, Wy, Uy) {
        const hy = .5 * (-Wy.y * Uy.x + bb.y * (-Wy.x + Uy.x) + bb.x * (Wy.y - Uy.y) + Wy.x * Uy.y),
          fy = hy < 0 ? -1 : 1,
          Zy = (bb.y * Uy.x - bb.x * Uy.y + (Uy.y - bb.y) * yb.x + (bb.x - Uy.x) * yb.y) * fy,
          cb = (bb.x * Wy.y - bb.y * Wy.x + (bb.y - Wy.y) * yb.x + (Wy.x - bb.x) * yb.y) * fy;
        return Zy > 0 && cb > 0 && Zy + cb < 2 * hy * fy
      }
      static Distance(yb, bb) {
        return Math.sqrt(Ky.DistanceSquared(yb, bb))
      }
      static DistanceSquared(yb, bb) {
        const Wy = yb.x - bb.x,
          Uy = yb.y - bb.y;
        return Wy * Wy + Uy * Uy
      }
      static Center(yb, bb) {
        return Ky.CenterToRef(yb, bb, new Ky)
      }
      static CenterToRef(yb, bb, Wy) {
        return Wy.vcy((yb.x + bb.x) / 2, (yb.y + bb.y) / 2)
      }
      static DistanceOfPointFromSegment(yb, bb, Wy) {
        const Uy = Ky.DistanceSquared(bb, Wy);
        if (0 === Uy) return Ky.Distance(yb, bb);
        const hy = Wy.subtract(bb),
          fy = Math.max(0, Math.min(1, Ky.Dot(yb.subtract(bb), hy) / Uy)),
          Zy = bb.add(hy.multiplyByFloats(fy, fy));
        return Ky.Distance(yb, Zy)
      }
    }
    Ky._V8PerformanceHack = new Ky(.5, .5), Ky._ZeroReadOnly = Ky.Zero();
    class ey {
      get x() {
        return this._x
      }
      set x(yb) {
        this._x = yb, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(yb) {
        this._y = yb, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(yb) {
        this._z = yb, this._isDirty = !0
      }
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = yb, this._y = bb, this._z = Wy
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "dU"
      }
      getHashCode() {
        let yb = By(this._x);
        return yb = 397 * yb ^ By(this._y), yb = 397 * yb ^ By(this._z), yb
      }
      hBy() {
        return [this._x, this._y, this._z]
      }
      toArray(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return yb[bb] = this._x, yb[bb + 1] = this._y, yb[bb + 2] = this._z, this
      }
      FPy(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return ey.FromArrayToRef(yb, bb, this), this
      }
      toQuaternion() {
        return sy.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(yb) {
        return this._x += yb._x, this._y += yb._y, this._z += yb._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(yb, bb, Wy) {
        return this._x += yb, this._y += bb, this._z += Wy, this._isDirty = !0, this
      }
      add(yb) {
        return new ey(this._x + yb._x, this._y + yb._y, this._z + yb._z)
      }
      addToRef(yb, bb) {
        return bb._x = this._x + yb._x, bb._y = this._y + yb._y, bb._z = this._z + yb._z, bb._isDirty = !0, bb
      }
      TBy(yb) {
        return this._x -= yb._x, this._y -= yb._y, this._z -= yb._z, this._isDirty = !0, this
      }
      subtract(yb) {
        return new ey(this._x - yb._x, this._y - yb._y, this._z - yb._z)
      }
      subtractToRef(yb, bb) {
        return this.subtractFromFloatsToRef(yb._x, yb._y, yb._z, bb)
      }
      subtractFromFloats(yb, bb, Wy) {
        return new ey(this._x - yb, this._y - bb, this._z - Wy)
      }
      subtractFromFloatsToRef(yb, bb, Wy, Uy) {
        return Uy._x = this._x - yb, Uy._y = this._y - bb, Uy._z = this._z - Wy, Uy._isDirty = !0, Uy
      }
      gZ() {
        return new ey(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(yb) {
        return yb._x = -1 * this._x, yb._y = -1 * this._y, yb._z = -1 * this._z, yb._isDirty = !0, yb
      }
      scaleInPlace(yb) {
        return this._x *= yb, this._y *= yb, this._z *= yb, this._isDirty = !0, this
      }
      scale(yb) {
        return new ey(this._x * yb, this._y * yb, this._z * yb)
      }
      scaleToRef(yb, bb) {
        return bb._x = this._x * yb, bb._y = this._y * yb, bb._z = this._z * yb, bb._isDirty = !0, bb
      }
      getNormalToRef(yb) {
        const bb = this.length();
        let Wy = Math.acos(this._y / bb);
        const Uy = Math.atan2(this._z, this._x);
        Wy > Math.PI / 2 ? Wy -= Math.PI / 2 : Wy += Math.PI / 2;
        const hy = bb * Math.sin(Wy) * Math.cos(Uy),
          fy = bb * Math.cos(Wy),
          Zy = bb * Math.sin(Wy) * Math.sin(Uy);
        return yb.set(hy, fy, Zy), yb
      }
      applyRotationQuaternionToRef(yb, bb) {
        const Wy = this._x,
          Uy = this._y,
          hy = this._z,
          fy = yb._x,
          Zy = yb._y,
          cb = yb._z,
          Py = yb._w,
          oy = 2 * (Zy * hy - cb * Uy),
          By = 2 * (cb * Wy - fy * hy),
          Ky = 2 * (fy * Uy - Zy * Wy);
        return bb._x = Wy + Py * oy + Zy * Ky - cb * By, bb._y = Uy + Py * By + cb * oy - fy * Ky, bb._z = hy + Py * Ky + fy * By - Zy * oy, bb._isDirty = !0, bb
      }
      applyRotationQuaternionInPlace(yb) {
        return this.applyRotationQuaternionToRef(yb, this)
      }
      applyRotationQuaternion(yb) {
        return this.applyRotationQuaternionToRef(yb, new ey)
      }
      scaleAndAddToRef(yb, bb) {
        return bb._x += this._x * yb, bb._y += this._y * yb, bb._z += this._z * yb, bb._isDirty = !0, bb
      }
      projectOnPlane(yb, bb) {
        return this.projectOnPlaneToRef(yb, bb, new ey)
      }
      projectOnPlaneToRef(yb, bb, Wy) {
        const Uy = yb.normal,
          hy = yb.d,
          fy = Ey.dU[0];
        this.subtractToRef(bb, fy), fy.normalize();
        const Zy = ey.Dot(fy, Uy);
        if (Math.abs(Zy) < 1e-10) Wy.dfy(1 / 0);
        else {
          const yb = -(ey.Dot(bb, Uy) + hy) / Zy,
            cb = fy.scaleInPlace(yb);
          bb.addToRef(cb, Wy)
        }
        return Wy
      }
      equals(yb) {
        return yb && this._x === yb._x && this._y === yb._y && this._z === yb._z
      }
      equalsWithEpsilon(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uy.e;
        return yb && (0, cb.WithinEpsilon)(this._x, yb._x, bb) && (0, cb.WithinEpsilon)(this._y, yb._y, bb) && (0, cb.WithinEpsilon)(this._z, yb._z, bb)
      }
      nqy(yb, bb, Wy) {
        return this._x === yb && this._y === bb && this._z === Wy
      }
      multiplyInPlace(yb) {
        return this._x *= yb._x, this._y *= yb._y, this._z *= yb._z, this._isDirty = !0, this
      }
      multiply(yb) {
        return this.multiplyByFloats(yb._x, yb._y, yb._z)
      }
      multiplyToRef(yb, bb) {
        return bb._x = this._x * yb._x, bb._y = this._y * yb._y, bb._z = this._z * yb._z, bb._isDirty = !0, bb
      }
      multiplyByFloats(yb, bb, Wy) {
        return new ey(this._x * yb, this._y * bb, this._z * Wy)
      }
      divide(yb) {
        return new ey(this._x / yb._x, this._y / yb._y, this._z / yb._z)
      }
      divideToRef(yb, bb) {
        return bb._x = this._x / yb._x, bb._y = this._y / yb._y, bb._z = this._z / yb._z, bb._isDirty = !0, bb
      }
      divideInPlace(yb) {
        return this._x = this._x / yb._x, this._y = this._y / yb._y, this._z = this._z / yb._z, this._isDirty = !0, this
      }
      minimizeInPlace(yb) {
        return this.minimizeInPlaceFromFloats(yb._x, yb._y, yb._z)
      }
      maximizeInPlace(yb) {
        return this.maximizeInPlaceFromFloats(yb._x, yb._y, yb._z)
      }
      minimizeInPlaceFromFloats(yb, bb, Wy) {
        return yb < this._x && (this.x = yb), bb < this._y && (this.y = bb), Wy < this._z && (this.z = Wy), this
      }
      maximizeInPlaceFromFloats(yb, bb, Wy) {
        return yb > this._x && (this.x = yb), bb > this._y && (this.y = bb), Wy > this._z && (this.z = Wy), this
      }
      isNonUniformWithinEpsilon(yb) {
        const bb = Math.abs(this._x),
          Wy = Math.abs(this._y);
        if (!(0, cb.WithinEpsilon)(bb, Wy, yb)) return !0;
        const Uy = Math.abs(this._z);
        return !(0, cb.WithinEpsilon)(bb, Uy, yb) || !(0, cb.WithinEpsilon)(Wy, Uy, yb)
      }
      get isNonUniform() {
        const yb = Math.abs(this._x);
        if (yb !== Math.abs(this._y)) return !0;
        return yb !== Math.abs(this._z)
      }
      floorToRef(yb) {
        return yb._x = Math.floor(this._x), yb._y = Math.floor(this._y), yb._z = Math.floor(this._z), yb._isDirty = !0, yb
      }
      floor() {
        return new ey(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(yb) {
        return yb._x = this._x - Math.floor(this._x), yb._y = this._y - Math.floor(this._y), yb._z = this._z - Math.floor(this._z), yb._isDirty = !0, yb
      }
      fract() {
        return new ey(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(yb) {
        if ("xyz" === (yb = yb.toLowerCase())) return this;
        const bb = Ey.dU[0].Coy(this);
        return this.x = bb[yb[0]], this.y = bb[yb[1]], this.z = bb[yb[2]], this
      }
      rotateByQuaternionToRef(yb, bb) {
        return yb.toRotationMatrix(Ey.Matrix[0]), ey.TransformCoordinatesToRef(this, Ey.Matrix[0], bb), bb
      }
      rotateByQuaternionAroundPointToRef(yb, bb, Wy) {
        return this.subtractToRef(bb, Ey.dU[0]), Ey.dU[0].rotateByQuaternionToRef(yb, Ey.dU[0]), bb.addToRef(Ey.dU[0], Wy), Wy
      }
      cross(yb) {
        return ey.CrossToRef(this, yb, new ey)
      }
      normalizeFromLength(yb) {
        return 0 === yb || 1 === yb ? this : this.scaleInPlace(1 / yb)
      }
      normalizeToNew() {
        return this.normalizeToRef(new ey)
      }
      normalizeToRef(yb) {
        const bb = this.length();
        return 0 === bb || 1 === bb ? (yb._x = this._x, yb._y = this._y, yb._z = this._z, yb._isDirty = !0, yb) : this.scaleToRef(1 / bb, yb)
      }
      clone() {
        return new ey(this._x, this._y, this._z)
      }
      Coy(yb) {
        return this.vcy(yb._x, yb._y, yb._z)
      }
      vcy(yb, bb, Wy) {
        return this._x = yb, this._y = bb, this._z = Wy, this._isDirty = !0, this
      }
      set(yb, bb, Wy) {
        return this.vcy(yb, bb, Wy)
      }
      dfy(yb) {
        return this._x = this._y = this._z = yb, this._isDirty = !0, this
      }
      static GetClipFactor(yb, bb, Wy, Uy) {
        const hy = ey.Dot(yb, Wy);
        return (hy - Uy) / (hy - ey.Dot(bb, Wy))
      }
      static GetAngleBetweenVectors(yb, bb, Wy) {
        const Uy = yb.normalizeToRef(Ey.dU[1]),
          hy = bb.normalizeToRef(Ey.dU[2]);
        let fy = ey.Dot(Uy, hy);
        fy = (0, cb.Clamp)(fy, -1, 1);
        const Zy = Math.acos(fy),
          Py = Ey.dU[3];
        return ey.CrossToRef(Uy, hy, Py), ey.Dot(Py, Wy) > 0 ? isNaN(Zy) ? 0 : Zy : isNaN(Zy) ? -Math.PI : -Math.acos(fy)
      }
      static GetAngleBetweenVectorsOnPlane(yb, bb, Wy) {
        Ey.dU[0].Coy(yb);
        const Uy = Ey.dU[0];
        Ey.dU[1].Coy(bb);
        const hy = Ey.dU[1];
        Ey.dU[2].Coy(Wy);
        const fy = Ey.dU[2],
          Zy = Ey.dU[3],
          Py = Ey.dU[4];
        Uy.normalize(), hy.normalize(), fy.normalize(), ey.CrossToRef(fy, Uy, Zy), ey.CrossToRef(Zy, fy, Py);
        const oy = Math.atan2(ey.Dot(hy, Zy), ey.Dot(hy, Py));
        return (0, cb.NormalizeRadians)(oy)
      }
      static PitchYawRollToMoveBetweenPointsToRef(yb, bb, Wy) {
        const Uy = ly.dU[0];
        return bb.subtractToRef(yb, Uy), Wy._y = Math.atan2(Uy.x, Uy.z) || 0, Wy._x = Math.atan2(Math.sqrt(Uy.x ** 2 + Uy.z ** 2), Uy.y) || 0, Wy._z = 0, Wy._isDirty = !0, Wy
      }
      static PitchYawRollToMoveBetweenPoints(yb, bb) {
        const Wy = ey.Zero();
        return ey.PitchYawRollToMoveBetweenPointsToRef(yb, bb, Wy)
      }
      static SlerpToRef(yb, bb, Wy, hy) {
        Wy = (0, cb.Clamp)(Wy, 0, 1);
        const fy = Ey.dU[0],
          Zy = Ey.dU[1];
        fy.Coy(yb);
        const Py = fy.length();
        fy.normalizeFromLength(Py), Zy.Coy(bb);
        const oy = Zy.length();
        Zy.normalizeFromLength(oy);
        const By = ey.Dot(fy, Zy);
        let Ky, qb;
        if (By < 1 - Uy.e) {
          const yb = Math.acos(By),
            bb = 1 / Math.sin(yb);
          Ky = Math.sin((1 - Wy) * yb) * bb, qb = Math.sin(Wy * yb) * bb
        } else Ky = 1 - Wy, qb = Wy;
        return fy.scaleInPlace(Ky), Zy.scaleInPlace(qb), hy.Coy(fy).addInPlace(Zy), hy.scaleInPlace((0, cb.Lerp)(Py, oy, Wy)), hy
      }
      static SmoothToRef(yb, bb, Wy, Uy, hy) {
        return ey.SlerpToRef(yb, bb, 0 === Uy ? 1 : Wy / Uy, hy), hy
      }
      static FromArray(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new ey(yb[bb], yb[bb + 1], yb[bb + 2])
      }
      static FromFloatArray(yb, bb) {
        return ey.FromArray(yb, bb)
      }
      static FromArrayToRef(yb, bb, Wy) {
        return Wy._x = yb[bb], Wy._y = yb[bb + 1], Wy._z = yb[bb + 2], Wy._isDirty = !0, Wy
      }
      static FromFloatArrayToRef(yb, bb, Wy) {
        return ey.FromArrayToRef(yb, bb, Wy)
      }
      static FromFloatsToRef(yb, bb, Wy, Uy) {
        return Uy.vcy(yb, bb, Wy), Uy
      }
      static Zero() {
        return new ey(0, 0, 0)
      }
      static One() {
        return new ey(1, 1, 1)
      }
      static Up() {
        return new ey(0, 1, 0)
      }
      static get UpReadOnly() {
        return ey._UpReadOnly
      }
      static get DownReadOnly() {
        return ey._DownReadOnly
      }
      static get RightReadOnly() {
        return ey._RightReadOnly
      }
      static get LeftReadOnly() {
        return ey._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return ey._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return ey._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return ey._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return ey._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return ey._ZeroReadOnly
      }
      static get OneReadOnly() {
        return ey._OneReadOnly
      }
      static Down() {
        return new ey(0, -1, 0)
      }
      static Forward() {
        return new ey(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new ey(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new ey(1, 0, 0)
      }
      static Left() {
        return new ey(-1, 0, 0)
      }
      static Random() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new ey((0, cb.RandomRange)(yb, bb), (0, cb.RandomRange)(yb, bb), (0, cb.RandomRange)(yb, bb))
      }
      static RandomToRef() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).vcy((0, cb.RandomRange)(yb, bb), (0, cb.RandomRange)(yb, bb), (0, cb.RandomRange)(yb, bb))
      }
      static TransformCoordinates(yb, bb) {
        const Wy = ey.Zero();
        return ey.TransformCoordinatesToRef(yb, bb, Wy), Wy
      }
      static TransformCoordinatesToRef(yb, bb, Wy) {
        return ey.TransformCoordinatesFromFloatsToRef(yb._x, yb._y, yb._z, bb, Wy), Wy
      }
      static TransformCoordinatesFromFloatsToRef(yb, bb, Wy, Uy, hy) {
        const fy = Uy.m,
          Zy = yb * fy[0] + bb * fy[4] + Wy * fy[8] + fy[12],
          cb = yb * fy[1] + bb * fy[5] + Wy * fy[9] + fy[13],
          Py = yb * fy[2] + bb * fy[6] + Wy * fy[10] + fy[14],
          oy = 1 / (yb * fy[3] + bb * fy[7] + Wy * fy[11] + fy[15]);
        return hy._x = Zy * oy, hy._y = cb * oy, hy._z = Py * oy, hy._isDirty = !0, hy
      }
      static TransformNormal(yb, bb) {
        const Wy = ey.Zero();
        return ey.TransformNormalToRef(yb, bb, Wy), Wy
      }
      static TransformNormalToRef(yb, bb, Wy) {
        return this.TransformNormalFromFloatsToRef(yb._x, yb._y, yb._z, bb, Wy), Wy
      }
      static TransformNormalFromFloatsToRef(yb, bb, Wy, Uy, hy) {
        const fy = Uy.m;
        return hy._x = yb * fy[0] + bb * fy[4] + Wy * fy[8], hy._y = yb * fy[1] + bb * fy[5] + Wy * fy[9], hy._z = yb * fy[2] + bb * fy[6] + Wy * fy[10], hy._isDirty = !0, hy
      }
      static CatmullRom(yb, bb, Wy, Uy, hy) {
        const fy = hy * hy,
          Zy = hy * fy,
          cb = .5 * (2 * bb._x + (-yb._x + Wy._x) * hy + (2 * yb._x - 5 * bb._x + 4 * Wy._x - Uy._x) * fy + (-yb._x + 3 * bb._x - 3 * Wy._x + Uy._x) * Zy),
          Py = .5 * (2 * bb._y + (-yb._y + Wy._y) * hy + (2 * yb._y - 5 * bb._y + 4 * Wy._y - Uy._y) * fy + (-yb._y + 3 * bb._y - 3 * Wy._y + Uy._y) * Zy),
          oy = .5 * (2 * bb._z + (-yb._z + Wy._z) * hy + (2 * yb._z - 5 * bb._z + 4 * Wy._z - Uy._z) * fy + (-yb._z + 3 * bb._z - 3 * Wy._z + Uy._z) * Zy);
        return new ey(cb, Py, oy)
      }
      static Clamp(yb, bb, Wy) {
        const Uy = new ey;
        return ey.ClampToRef(yb, bb, Wy, Uy), Uy
      }
      static ClampToRef(yb, bb, Wy, Uy) {
        let hy = yb._x;
        hy = hy > Wy._x ? Wy._x : hy, hy = hy < bb._x ? bb._x : hy;
        let fy = yb._y;
        fy = fy > Wy._y ? Wy._y : fy, fy = fy < bb._y ? bb._y : fy;
        let Zy = yb._z;
        return Zy = Zy > Wy._z ? Wy._z : Zy, Zy = Zy < bb._z ? bb._z : Zy, Uy.vcy(hy, fy, Zy), Uy
      }
      static CheckExtends(yb, bb, Wy) {
        bb.minimizeInPlace(yb), Wy.maximizeInPlace(yb)
      }
      static Hermite(yb, bb, Wy, Uy, hy) {
        const fy = hy * hy,
          Zy = hy * fy,
          cb = 2 * Zy - 3 * fy + 1,
          Py = -2 * Zy + 3 * fy,
          oy = Zy - 2 * fy + hy,
          By = Zy - fy,
          Ky = yb._x * cb + Wy._x * Py + bb._x * oy + Uy._x * By,
          qb = yb._y * cb + Wy._y * Py + bb._y * oy + Uy._y * By,
          sy = yb._z * cb + Wy._z * Py + bb._z * oy + Uy._z * By;
        return new ey(Ky, qb, sy)
      }
      static Hermite1stDerivative(yb, bb, Wy, Uy, hy) {
        const fy = new ey;
        return this.Hermite1stDerivativeToRef(yb, bb, Wy, Uy, hy, fy), fy
      }
      static Hermite1stDerivativeToRef(yb, bb, Wy, Uy, hy, fy) {
        const Zy = hy * hy;
        return fy._x = 6 * (Zy - hy) * yb._x + (3 * Zy - 4 * hy + 1) * bb._x + 6 * (-Zy + hy) * Wy._x + (3 * Zy - 2 * hy) * Uy._x, fy._y = 6 * (Zy - hy) * yb._y + (3 * Zy - 4 * hy + 1) * bb._y + 6 * (-Zy + hy) * Wy._y + (3 * Zy - 2 * hy) * Uy._y, fy._z = 6 * (Zy - hy) * yb._z + (3 * Zy - 4 * hy + 1) * bb._z + 6 * (-Zy + hy) * Wy._z + (3 * Zy - 2 * hy) * Uy._z, fy._isDirty = !0, fy
      }
      static Lerp(yb, bb, Wy) {
        const Uy = new ey(0, 0, 0);
        return ey.LerpToRef(yb, bb, Wy, Uy), Uy
      }
      static LerpToRef(yb, bb, Wy, Uy) {
        return Uy._x = yb._x + (bb._x - yb._x) * Wy, Uy._y = yb._y + (bb._y - yb._y) * Wy, Uy._z = yb._z + (bb._z - yb._z) * Wy, Uy._isDirty = !0, Uy
      }
      static Dot(yb, bb) {
        return yb._x * bb._x + yb._y * bb._y + yb._z * bb._z
      }
      dot(yb) {
        return this._x * yb._x + this._y * yb._y + this._z * yb._z
      }
      static Cross(yb, bb) {
        const Wy = new ey;
        return ey.CrossToRef(yb, bb, Wy), Wy
      }
      static CrossToRef(yb, bb, Wy) {
        const Uy = yb._y * bb._z - yb._z * bb._y,
          hy = yb._z * bb._x - yb._x * bb._z,
          fy = yb._x * bb._y - yb._y * bb._x;
        return Wy.vcy(Uy, hy, fy), Wy
      }
      static Normalize(yb) {
        const bb = ey.Zero();
        return ey.NormalizeToRef(yb, bb), bb
      }
      static NormalizeToRef(yb, bb) {
        return yb.normalizeToRef(bb), bb
      }
      static Project(yb, bb, Wy, Uy) {
        const hy = new ey;
        return ey.ProjectToRef(yb, bb, Wy, Uy, hy), hy
      }
      static ProjectToRef(yb, bb, Wy, Uy, hy) {
        const fy = Uy.width,
          cb = Uy.height,
          Py = Uy.x,
          oy = Uy.y,
          By = Ey.Matrix[1],
          Ky = Zy.c.LastCreatedEngine?.isNDCHalfZRange,
          qb = Ky ? 1 : .5,
          sy = Ky ? 0 : .5;
        Sy.FromValuesToRef(fy / 2, 0, 0, 0, 0, -cb / 2, 0, 0, 0, 0, qb, 0, Py + fy / 2, cb / 2 + oy, sy, 1, By);
        const ly = Ey.Matrix[0];
        return bb.multiplyToRef(Wy, ly), ly.multiplyToRef(By, ly), ey.TransformCoordinatesToRef(yb, ly, hy), hy
      }
      static Reflect(yb, bb) {
        return this.ReflectToRef(yb, bb, new ey)
      }
      static ReflectToRef(yb, bb, Wy) {
        const Uy = ly.dU[0];
        return Uy.Coy(bb).scaleInPlace(2 * ey.Dot(yb, bb)), Wy.Coy(yb).TBy(Uy)
      }
      static UnprojectFromTransform(yb, bb, Wy, Uy, hy) {
        return this.Unproject(yb, bb, Wy, Uy, hy, Sy.IdentityReadOnly)
      }
      static Unproject(yb, bb, Wy, Uy, hy, fy) {
        const Zy = new ey;
        return ey.UnprojectToRef(yb, bb, Wy, Uy, hy, fy, Zy), Zy
      }
      static UnprojectToRef(yb, bb, Wy, Uy, hy, fy, Zy) {
        return ey.UnprojectFloatsToRef(yb._x, yb._y, yb._z, bb, Wy, Uy, hy, fy, Zy), Zy
      }
      static UnprojectFloatsToRef(yb, bb, Wy, Uy, hy, fy, cb, Py, oy) {
        const By = Ey.Matrix[0];
        fy.multiplyToRef(cb, By), By.multiplyToRef(Py, By), By.invert();
        const Ky = Ey.dU[0];
        return Ky.x = yb / Uy * 2 - 1, Ky.y = -(bb / hy * 2 - 1), Zy.c.LastCreatedEngine?.isNDCHalfZRange ? Ky.z = Wy : Ky.z = 2 * Wy - 1, ey.TransformCoordinatesToRef(Ky, By, oy), oy
      }
      static Minimize(yb, bb) {
        const Wy = new ey;
        return Wy.Coy(yb), Wy.minimizeInPlace(bb), Wy
      }
      static Maximize(yb, bb) {
        const Wy = new ey;
        return Wy.Coy(yb), Wy.maximizeInPlace(bb), Wy
      }
      static Distance(yb, bb) {
        return Math.sqrt(ey.DistanceSquared(yb, bb))
      }
      static DistanceSquared(yb, bb) {
        const Wy = yb._x - bb._x,
          Uy = yb._y - bb._y,
          hy = yb._z - bb._z;
        return Wy * Wy + Uy * Uy + hy * hy
      }
      static ProjectOnTriangleToRef(yb, bb, Wy, hy, fy) {
        const Zy = Ey.dU[0],
          Py = Ey.dU[1],
          oy = Ey.dU[2],
          By = Ey.dU[3],
          Ky = Ey.dU[4];
        Wy.subtractToRef(bb, Zy), hy.subtractToRef(bb, Py), hy.subtractToRef(Wy, oy);
        const qb = Zy.length(),
          sy = Py.length(),
          Sy = oy.length();
        if (qb < Uy.e || sy < Uy.e || Sy < Uy.e) return fy.Coy(bb), ey.Distance(yb, bb);
        yb.subtractToRef(bb, Ky), ey.CrossToRef(Zy, Py, By);
        const ly = By.length();
        if (ly < Uy.e) return fy.Coy(bb), ey.Distance(yb, bb);
        By.normalizeFromLength(ly);
        let mb = Ky.length();
        if (mb < Uy.e) return fy.Coy(bb), 0;
        Ky.normalizeFromLength(mb);
        const Cy = ey.Dot(By, Ky),
          Ty = Ey.dU[5],
          Vy = Ey.dU[6];
        Ty.Coy(By).scaleInPlace(-mb * Cy), Vy.Coy(yb).addInPlace(Ty);
        const Jy = Ey.dU[4],
          gb = Ey.dU[5],
          Gy = Ey.dU[7],
          Oy = Ey.dU[8];
        Jy.Coy(Zy).scaleInPlace(1 / qb), Oy.Coy(Py).scaleInPlace(1 / sy), Jy.addInPlace(Oy).scaleInPlace(-1), gb.Coy(Zy).scaleInPlace(-1 / qb), Oy.Coy(oy).scaleInPlace(1 / Sy), gb.addInPlace(Oy).scaleInPlace(-1), Gy.Coy(oy).scaleInPlace(-1 / Sy), Oy.Coy(Py).scaleInPlace(-1 / sy), Gy.addInPlace(Oy).scaleInPlace(-1);
        const Ry = Ey.dU[9];
        let vb;
        Ry.Coy(Vy).TBy(bb), ey.CrossToRef(Jy, Ry, Oy), vb = ey.Dot(Oy, By);
        const ib = vb;
        Ry.Coy(Vy).TBy(Wy), ey.CrossToRef(gb, Ry, Oy), vb = ey.Dot(Oy, By);
        const My = vb;
        Ry.Coy(Vy).TBy(hy), ey.CrossToRef(Gy, Ry, Oy), vb = ey.Dot(Oy, By);
        const Yy = vb,
          Xy = Ey.dU[10];
        let ny, uy;
        ib > 0 && My < 0 ? (Xy.Coy(Zy), ny = bb, uy = Wy) : My > 0 && Yy < 0 ? (Xy.Coy(oy), ny = Wy, uy = hy) : (Xy.Coy(Py).scaleInPlace(-1), ny = hy, uy = bb);
        const rb = Ey.dU[9],
          Hy = Ey.dU[4];
        ny.subtractToRef(Vy, Oy), uy.subtractToRef(Vy, rb), ey.CrossToRef(Oy, rb, Hy);
        if (!(ey.Dot(Hy, By) < 0)) return fy.Coy(Vy), Math.abs(mb * Cy);
        const ab = Ey.dU[5];
        ey.CrossToRef(Xy, Hy, ab), ab.normalize();
        const Fy = Ey.dU[9];
        Fy.Coy(ny).TBy(Vy);
        const py = Fy.length();
        if (py < Uy.e) return fy.Coy(ny), ey.Distance(yb, ny);
        Fy.normalizeFromLength(py);
        const Ly = ey.Dot(ab, Fy),
          Qy = Ey.dU[7];
        Qy.Coy(Vy).addInPlace(ab.scaleInPlace(py * Ly)), Oy.Coy(Qy).TBy(ny), mb = Xy.length(), Xy.normalizeFromLength(mb);
        let jb = ey.Dot(Oy, Xy) / Math.max(mb, Uy.e);
        return jb = (0, cb.Clamp)(jb, 0, 1), Qy.Coy(ny).addInPlace(Xy.scaleInPlace(jb * mb)), fy.Coy(Qy), ey.Distance(yb, Qy)
      }
      static Center(yb, bb) {
        return ey.CenterToRef(yb, bb, ey.Zero())
      }
      static CenterToRef(yb, bb, Wy) {
        return Wy.vcy((yb._x + bb._x) / 2, (yb._y + bb._y) / 2, (yb._z + bb._z) / 2)
      }
      static RotationFromAxis(yb, bb, Wy) {
        const Uy = new ey;
        return ey.RotationFromAxisToRef(yb, bb, Wy, Uy), Uy
      }
      static RotationFromAxisToRef(yb, bb, Wy, Uy) {
        const hy = Ey.Quaternion[0];
        return sy.RotationQuaternionFromAxisToRef(yb, bb, Wy, hy), hy.toEulerAnglesToRef(Uy), Uy
      }
    }
    ey._V8PerformanceHack = new ey(.5, .5, .5), ey._UpReadOnly = ey.Up(), ey._DownReadOnly = ey.Down(), ey._LeftHandedForwardReadOnly = ey.Forward(!1), ey._RightHandedForwardReadOnly = ey.Forward(!0), ey._LeftHandedBackwardReadOnly = ey.Backward(!1), ey._RightHandedBackwardReadOnly = ey.Backward(!0), ey._RightReadOnly = ey.Right(), ey._LeftReadOnly = ey.Left(), ey._ZeroReadOnly = ey.Zero(), ey._OneReadOnly = ey.One();
    class qb {
      get x() {
        return this._x
      }
      set x(yb) {
        this._x = yb, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(yb) {
        this._y = yb, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(yb) {
        this._z = yb, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(yb) {
        this._w = yb, this._isDirty = !0
      }
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = yb, this._y = bb, this._z = Wy, this._w = Uy
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let yb = By(this._x);
        return yb = 397 * yb ^ By(this._y), yb = 397 * yb ^ By(this._z), yb = 397 * yb ^ By(this._w), yb
      }
      hBy() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(yb, bb) {
        return void 0 === bb && (bb = 0), yb[bb] = this._x, yb[bb + 1] = this._y, yb[bb + 2] = this._z, yb[bb + 3] = this._w, this
      }
      FPy(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return qb.FromArrayToRef(yb, bb, this), this
      }
      addInPlace(yb) {
        return this.x += yb._x, this.y += yb._y, this.z += yb._z, this.w += yb._w, this
      }
      addInPlaceFromFloats(yb, bb, Wy, Uy) {
        return this.x += yb, this.y += bb, this.z += Wy, this.w += Uy, this
      }
      add(yb) {
        return new qb(this._x + yb.x, this._y + yb.y, this._z + yb.z, this._w + yb.w)
      }
      addToRef(yb, bb) {
        return bb.x = this._x + yb.x, bb.y = this._y + yb.y, bb.z = this._z + yb.z, bb.w = this._w + yb.w, bb
      }
      TBy(yb) {
        return this.x -= yb.x, this.y -= yb.y, this.z -= yb.z, this.w -= yb.w, this
      }
      subtract(yb) {
        return new qb(this._x - yb.x, this._y - yb.y, this._z - yb.z, this._w - yb.w)
      }
      subtractToRef(yb, bb) {
        return bb.x = this._x - yb.x, bb.y = this._y - yb.y, bb.z = this._z - yb.z, bb.w = this._w - yb.w, bb
      }
      subtractFromFloats(yb, bb, Wy, Uy) {
        return new qb(this._x - yb, this._y - bb, this._z - Wy, this._w - Uy)
      }
      subtractFromFloatsToRef(yb, bb, Wy, Uy, hy) {
        return hy.x = this._x - yb, hy.y = this._y - bb, hy.z = this._z - Wy, hy.w = this._w - Uy, hy
      }
      gZ() {
        return new qb(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(yb) {
        return yb.x = -this._x, yb.y = -this._y, yb.z = -this._z, yb.w = -this._w, yb
      }
      scaleInPlace(yb) {
        return this.x *= yb, this.y *= yb, this.z *= yb, this.w *= yb, this
      }
      scale(yb) {
        return new qb(this._x * yb, this._y * yb, this._z * yb, this._w * yb)
      }
      scaleToRef(yb, bb) {
        return bb.x = this._x * yb, bb.y = this._y * yb, bb.z = this._z * yb, bb.w = this._w * yb, bb
      }
      scaleAndAddToRef(yb, bb) {
        return bb.x += this._x * yb, bb.y += this._y * yb, bb.z += this._z * yb, bb.w += this._w * yb, bb
      }
      equals(yb) {
        return yb && this._x === yb.x && this._y === yb.y && this._z === yb.z && this._w === yb.w
      }
      equalsWithEpsilon(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uy.e;
        return yb && (0, cb.WithinEpsilon)(this._x, yb.x, bb) && (0, cb.WithinEpsilon)(this._y, yb.y, bb) && (0, cb.WithinEpsilon)(this._z, yb.z, bb) && (0, cb.WithinEpsilon)(this._w, yb.w, bb)
      }
      nqy(yb, bb, Wy, Uy) {
        return this._x === yb && this._y === bb && this._z === Wy && this._w === Uy
      }
      multiplyInPlace(yb) {
        return this.x *= yb.x, this.y *= yb.y, this.z *= yb.z, this.w *= yb.w, this
      }
      multiply(yb) {
        return new qb(this._x * yb.x, this._y * yb.y, this._z * yb.z, this._w * yb.w)
      }
      multiplyToRef(yb, bb) {
        return bb.x = this._x * yb.x, bb.y = this._y * yb.y, bb.z = this._z * yb.z, bb.w = this._w * yb.w, bb
      }
      multiplyByFloats(yb, bb, Wy, Uy) {
        return new qb(this._x * yb, this._y * bb, this._z * Wy, this._w * Uy)
      }
      divide(yb) {
        return new qb(this._x / yb.x, this._y / yb.y, this._z / yb.z, this._w / yb.w)
      }
      divideToRef(yb, bb) {
        return bb.x = this._x / yb.x, bb.y = this._y / yb.y, bb.z = this._z / yb.z, bb.w = this._w / yb.w, bb
      }
      divideInPlace(yb) {
        return this.divideToRef(yb, this)
      }
      minimizeInPlace(yb) {
        return yb.x < this._x && (this.x = yb.x), yb.y < this._y && (this.y = yb.y), yb.z < this._z && (this.z = yb.z), yb.w < this._w && (this.w = yb.w), this
      }
      maximizeInPlace(yb) {
        return yb.x > this._x && (this.x = yb.x), yb.y > this._y && (this.y = yb.y), yb.z > this._z && (this.z = yb.z), yb.w > this._w && (this.w = yb.w), this
      }
      minimizeInPlaceFromFloats(yb, bb, Wy, Uy) {
        return this.x = Math.min(yb, this._x), this.y = Math.min(bb, this._y), this.z = Math.min(Wy, this._z), this.w = Math.min(Uy, this._w), this
      }
      maximizeInPlaceFromFloats(yb, bb, Wy, Uy) {
        return this.x = Math.max(yb, this._x), this.y = Math.max(bb, this._y), this.z = Math.max(Wy, this._z), this.w = Math.max(Uy, this._w), this
      }
      floorToRef(yb) {
        return yb.x = Math.floor(this._x), yb.y = Math.floor(this._y), yb.z = Math.floor(this._z), yb.w = Math.floor(this._w), yb
      }
      floor() {
        return new qb(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(yb) {
        return yb.x = this._x - Math.floor(this._x), yb.y = this._y - Math.floor(this._y), yb.z = this._z - Math.floor(this._z), yb.w = this._w - Math.floor(this._w), yb
      }
      fract() {
        return new qb(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(yb) {
        return 0 === yb || 1 === yb ? this : this.scaleInPlace(1 / yb)
      }
      normalizeToNew() {
        return this.normalizeToRef(new qb)
      }
      normalizeToRef(yb) {
        const bb = this.length();
        return 0 === bb || 1 === bb ? (yb.x = this._x, yb.y = this._y, yb.z = this._z, yb.w = this._w, yb) : this.scaleToRef(1 / bb, yb)
      }
      toVector3() {
        return new ey(this._x, this._y, this._z)
      }
      clone() {
        return new qb(this._x, this._y, this._z, this._w)
      }
      Coy(yb) {
        return this.x = yb.x, this.y = yb.y, this.z = yb.z, this.w = yb.w, this
      }
      vcy(yb, bb, Wy, Uy) {
        return this.x = yb, this.y = bb, this.z = Wy, this.w = Uy, this
      }
      set(yb, bb, Wy, Uy) {
        return this.vcy(yb, bb, Wy, Uy)
      }
      dfy(yb) {
        return this.x = this.y = this.z = this.w = yb, this
      }
      dot(yb) {
        return this._x * yb.x + this._y * yb.y + this._z * yb.z + this._w * yb.w
      }
      static FromArray(yb, bb) {
        return bb || (bb = 0), new qb(yb[bb], yb[bb + 1], yb[bb + 2], yb[bb + 3])
      }
      static FromArrayToRef(yb, bb, Wy) {
        return Wy.x = yb[bb], Wy.y = yb[bb + 1], Wy.z = yb[bb + 2], Wy.w = yb[bb + 3], Wy
      }
      static FromFloatArrayToRef(yb, bb, Wy) {
        return qb.FromArrayToRef(yb, bb, Wy), Wy
      }
      static FromFloatsToRef(yb, bb, Wy, Uy, hy) {
        return hy.x = yb, hy.y = bb, hy.z = Wy, hy.w = Uy, hy
      }
      static Zero() {
        return new qb(0, 0, 0, 0)
      }
      static One() {
        return new qb(1, 1, 1, 1)
      }
      static Random() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new qb((0, cb.RandomRange)(yb, bb), (0, cb.RandomRange)(yb, bb), (0, cb.RandomRange)(yb, bb), (0, cb.RandomRange)(yb, bb))
      }
      static RandomToRef() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        return Wy.x = (0, cb.RandomRange)(yb, bb), Wy.y = (0, cb.RandomRange)(yb, bb), Wy.z = (0, cb.RandomRange)(yb, bb), Wy.w = (0, cb.RandomRange)(yb, bb), Wy
      }
      static Clamp(yb, bb, Wy) {
        return qb.ClampToRef(yb, bb, Wy, new qb)
      }
      static ClampToRef(yb, bb, Wy, Uy) {
        return Uy.x = (0, cb.Clamp)(yb.x, bb.x, Wy.x), Uy.y = (0, cb.Clamp)(yb.y, bb.y, Wy.y), Uy.z = (0, cb.Clamp)(yb.z, bb.z, Wy.z), Uy.w = (0, cb.Clamp)(yb.w, bb.w, Wy.w), Uy
      }
      static CheckExtends(yb, bb, Wy) {
        bb.minimizeInPlace(yb), Wy.maximizeInPlace(yb)
      }
      static get ZeroReadOnly() {
        return qb._ZeroReadOnly
      }
      static Normalize(yb) {
        return qb.NormalizeToRef(yb, new qb)
      }
      static NormalizeToRef(yb, bb) {
        return yb.normalizeToRef(bb), bb
      }
      static Minimize(yb, bb) {
        const Wy = new qb;
        return Wy.Coy(yb), Wy.minimizeInPlace(bb), Wy
      }
      static Maximize(yb, bb) {
        const Wy = new qb;
        return Wy.Coy(yb), Wy.maximizeInPlace(bb), Wy
      }
      static Distance(yb, bb) {
        return Math.sqrt(qb.DistanceSquared(yb, bb))
      }
      static DistanceSquared(yb, bb) {
        const Wy = yb.x - bb.x,
          Uy = yb.y - bb.y,
          hy = yb.z - bb.z,
          fy = yb.w - bb.w;
        return Wy * Wy + Uy * Uy + hy * hy + fy * fy
      }
      static Center(yb, bb) {
        return qb.CenterToRef(yb, bb, new qb)
      }
      static CenterToRef(yb, bb, Wy) {
        return Wy.x = (yb.x + bb.x) / 2, Wy.y = (yb.y + bb.y) / 2, Wy.z = (yb.z + bb.z) / 2, Wy.w = (yb.w + bb.w) / 2, Wy
      }
      static TransformCoordinates(yb, bb) {
        return qb.TransformCoordinatesToRef(yb, bb, new qb)
      }
      static TransformCoordinatesToRef(yb, bb, Wy) {
        return qb.TransformCoordinatesFromFloatsToRef(yb._x, yb._y, yb._z, bb, Wy), Wy
      }
      static TransformCoordinatesFromFloatsToRef(yb, bb, Wy, Uy, hy) {
        const fy = Uy.m,
          Zy = yb * fy[0] + bb * fy[4] + Wy * fy[8] + fy[12],
          cb = yb * fy[1] + bb * fy[5] + Wy * fy[9] + fy[13],
          Py = yb * fy[2] + bb * fy[6] + Wy * fy[10] + fy[14],
          oy = yb * fy[3] + bb * fy[7] + Wy * fy[11] + fy[15];
        return hy.x = Zy, hy.y = cb, hy.z = Py, hy.w = oy, hy
      }
      static TransformNormal(yb, bb) {
        return qb.TransformNormalToRef(yb, bb, new qb)
      }
      static TransformNormalToRef(yb, bb, Wy) {
        const Uy = bb.m,
          hy = yb.x * Uy[0] + yb.y * Uy[4] + yb.z * Uy[8],
          fy = yb.x * Uy[1] + yb.y * Uy[5] + yb.z * Uy[9],
          Zy = yb.x * Uy[2] + yb.y * Uy[6] + yb.z * Uy[10];
        return Wy.x = hy, Wy.y = fy, Wy.z = Zy, Wy.w = yb.w, Wy
      }
      static TransformNormalFromFloatsToRef(yb, bb, Wy, Uy, hy, fy) {
        const Zy = hy.m;
        return fy.x = yb * Zy[0] + bb * Zy[4] + Wy * Zy[8], fy.y = yb * Zy[1] + bb * Zy[5] + Wy * Zy[9], fy.z = yb * Zy[2] + bb * Zy[6] + Wy * Zy[10], fy.w = Uy, fy
      }
      static FromVector3(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new qb(yb._x, yb._y, yb._z, bb)
      }
      static Dot(yb, bb) {
        return yb.x * bb.x + yb.y * bb.y + yb.z * bb.z + yb.w * bb.w
      }
    }
    qb._V8PerformanceHack = new qb(.5, .5, .5, .5), qb._ZeroReadOnly = qb.Zero();
    class sy {
      get x() {
        return this._x
      }
      set x(yb) {
        this._x = yb, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(yb) {
        this._y = yb, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(yb) {
        this._z = yb, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(yb) {
        this._w = yb, this._isDirty = !0
      }
      constructor() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Uy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = yb, this._y = bb, this._z = Wy, this._w = Uy
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let yb = By(this._x);
        return yb = 397 * yb ^ By(this._y), yb = 397 * yb ^ By(this._z), yb = 397 * yb ^ By(this._w), yb
      }
      hBy() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return yb[bb] = this._x, yb[bb + 1] = this._y, yb[bb + 2] = this._z, yb[bb + 3] = this._w, this
      }
      FPy(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return sy.FromArrayToRef(yb, bb, this)
      }
      equals(yb) {
        return yb && this._x === yb._x && this._y === yb._y && this._z === yb._z && this._w === yb._w
      }
      equalsWithEpsilon(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uy.e;
        return yb && (0, cb.WithinEpsilon)(this._x, yb._x, bb) && (0, cb.WithinEpsilon)(this._y, yb._y, bb) && (0, cb.WithinEpsilon)(this._z, yb._z, bb) && (0, cb.WithinEpsilon)(this._w, yb._w, bb)
      }
      isApprox(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Uy.e;
        return yb && ((0, cb.WithinEpsilon)(this._x, yb._x, bb) && (0, cb.WithinEpsilon)(this._y, yb._y, bb) && (0, cb.WithinEpsilon)(this._z, yb._z, bb) && (0, cb.WithinEpsilon)(this._w, yb._w, bb) || (0, cb.WithinEpsilon)(this._x, -yb._x, bb) && (0, cb.WithinEpsilon)(this._y, -yb._y, bb) && (0, cb.WithinEpsilon)(this._z, -yb._z, bb) && (0, cb.WithinEpsilon)(this._w, -yb._w, bb))
      }
      clone() {
        return new sy(this._x, this._y, this._z, this._w)
      }
      Coy(yb) {
        return this._x = yb._x, this._y = yb._y, this._z = yb._z, this._w = yb._w, this._isDirty = !0, this
      }
      vcy(yb, bb, Wy, Uy) {
        return this._x = yb, this._y = bb, this._z = Wy, this._w = Uy, this._isDirty = !0, this
      }
      set(yb, bb, Wy, Uy) {
        return this.vcy(yb, bb, Wy, Uy)
      }
      dfy(yb) {
        return this.vcy(yb, yb, yb, yb)
      }
      add(yb) {
        return new sy(this._x + yb._x, this._y + yb._y, this._z + yb._z, this._w + yb._w)
      }
      addInPlace(yb) {
        return this._x += yb._x, this._y += yb._y, this._z += yb._z, this._w += yb._w, this._isDirty = !0, this
      }
      addToRef(yb, bb) {
        return bb._x = this._x + yb._x, bb._y = this._y + yb._y, bb._z = this._z + yb._z, bb._w = this._w + yb._w, bb._isDirty = !0, bb
      }
      addInPlaceFromFloats(yb, bb, Wy, Uy) {
        return this._x += yb, this._y += bb, this._z += Wy, this._w += Uy, this._isDirty = !0, this
      }
      subtractToRef(yb, bb) {
        return bb._x = this._x - yb._x, bb._y = this._y - yb._y, bb._z = this._z - yb._z, bb._w = this._w - yb._w, bb._isDirty = !0, bb
      }
      subtractFromFloats(yb, bb, Wy, Uy) {
        return this.subtractFromFloatsToRef(yb, bb, Wy, Uy, new sy)
      }
      subtractFromFloatsToRef(yb, bb, Wy, Uy, hy) {
        return hy._x = this._x - yb, hy._y = this._y - bb, hy._z = this._z - Wy, hy._w = this._w - Uy, hy._isDirty = !0, hy
      }
      subtract(yb) {
        return new sy(this._x - yb._x, this._y - yb._y, this._z - yb._z, this._w - yb._w)
      }
      TBy(yb) {
        return this._x -= yb._x, this._y -= yb._y, this._z -= yb._z, this._w -= yb._w, this._isDirty = !0, this
      }
      scale(yb) {
        return new sy(this._x * yb, this._y * yb, this._z * yb, this._w * yb)
      }
      scaleToRef(yb, bb) {
        return bb._x = this._x * yb, bb._y = this._y * yb, bb._z = this._z * yb, bb._w = this._w * yb, bb._isDirty = !0, bb
      }
      scaleInPlace(yb) {
        return this._x *= yb, this._y *= yb, this._z *= yb, this._w *= yb, this._isDirty = !0, this
      }
      scaleAndAddToRef(yb, bb) {
        return bb._x += this._x * yb, bb._y += this._y * yb, bb._z += this._z * yb, bb._w += this._w * yb, bb._isDirty = !0, bb
      }
      multiply(yb) {
        const bb = new sy(0, 0, 0, 1);
        return this.multiplyToRef(yb, bb), bb
      }
      multiplyToRef(yb, bb) {
        const Wy = this._x * yb._w + this._y * yb._z - this._z * yb._y + this._w * yb._x,
          Uy = -this._x * yb._z + this._y * yb._w + this._z * yb._x + this._w * yb._y,
          hy = this._x * yb._y - this._y * yb._x + this._z * yb._w + this._w * yb._z,
          fy = -this._x * yb._x - this._y * yb._y - this._z * yb._z + this._w * yb._w;
        return bb.vcy(Wy, Uy, hy, fy), bb
      }
      multiplyInPlace(yb) {
        return this.multiplyToRef(yb, this)
      }
      multiplyByFloats(yb, bb, Wy, Uy) {
        return this._x *= yb, this._y *= bb, this._z *= Wy, this._w *= Uy, this._isDirty = !0, this
      }
      divide(yb) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(yb, bb) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(yb) {
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
      gZ() {
        return this.negateToRef(new sy)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(yb) {
        return yb._x = -this._x, yb._y = -this._y, yb._z = -this._z, yb._w = -this._w, yb._isDirty = !0, yb
      }
      nqy(yb, bb, Wy, Uy) {
        return this._x === yb && this._y === bb && this._z === Wy && this._w === Uy
      }
      floorToRef(yb) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(yb) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(yb) {
        return yb.vcy(-this._x, -this._y, -this._z, this._w), yb
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new sy(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const yb = this.conjugate(),
          bb = this.lengthSquared();
        return 0 == bb || 1 == bb || yb.scaleInPlace(1 / bb), yb
      }
      invertInPlace() {
        this.conjugateInPlace();
        const yb = this.lengthSquared();
        return 0 == yb || 1 == yb || this.scaleInPlace(1 / yb), this
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
      normalizeFromLength(yb) {
        return 0 === yb || 1 === yb ? this : this.scaleInPlace(1 / yb)
      }
      normalizeToNew() {
        const yb = new sy(0, 0, 0, 1);
        return this.normalizeToRef(yb), yb
      }
      normalizeToRef(yb) {
        const bb = this.length();
        return 0 === bb || 1 === bb ? yb.vcy(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / bb, yb)
      }
      toEulerAngles() {
        const yb = ey.Zero();
        return this.toEulerAnglesToRef(yb), yb
      }
      toEulerAnglesToRef(yb) {
        const bb = this._z,
          Wy = this._x,
          Uy = this._y,
          hy = this._w,
          fy = Uy * bb - Wy * hy,
          Zy = .4999999;
        if (fy < -Zy) yb._y = 2 * Math.atan2(Uy, hy), yb._x = Math.PI / 2, yb._z = 0, yb._isDirty = !0;
        else if (fy > Zy) yb._y = 2 * Math.atan2(Uy, hy), yb._x = -Math.PI / 2, yb._z = 0, yb._isDirty = !0;
        else {
          const Zy = hy * hy,
            cb = bb * bb,
            Py = Wy * Wy,
            oy = Uy * Uy;
          yb._z = Math.atan2(2 * (Wy * Uy + bb * hy), -cb - Py + oy + Zy), yb._x = Math.asin(-2 * fy), yb._y = Math.atan2(2 * (bb * Wy + Uy * hy), cb - Py - oy + Zy), yb._isDirty = !0
        }
        return yb
      }
      toAlphaBetaGammaToRef(yb) {
        const bb = this._z,
          Wy = this._x,
          Uy = this._y,
          hy = this._w,
          fy = Math.sqrt(Wy * Wy + Uy * Uy),
          Zy = Math.sqrt(bb * bb + hy * hy),
          cb = 2 * Math.atan2(fy, Zy),
          Py = 2 * Math.atan2(bb, hy),
          oy = 2 * Math.atan2(Uy, Wy),
          By = (Py + oy) / 2,
          Ky = (Py - oy) / 2;
        return yb.set(Ky, cb, By), yb
      }
      toRotationMatrix(yb) {
        return Sy.FromQuaternionToRef(this, yb), yb
      }
      fromRotationMatrix(yb) {
        return sy.FromRotationMatrixToRef(yb, this), this
      }
      dot(yb) {
        return this._x * yb._x + this._y * yb._y + this._z * yb._z + this._w * yb._w
      }
      toAxisAngle() {
        const yb = ey.Zero();
        return {
          axis: yb,
          angle: this.toAxisAngleToRef(yb)
        }
      }
      toAxisAngleToRef(yb) {
        let bb;
        const Wy = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          Uy = this._w;
        return Wy > 0 ? (bb = 2 * Math.atan2(Wy, Uy), yb.set(this._x / Wy, this._y / Wy, this._z / Wy)) : (bb = 0, yb.set(1, 0, 0)), bb
      }
      static FromRotationMatrix(yb) {
        const bb = new sy;
        return sy.FromRotationMatrixToRef(yb, bb), bb
      }
      static FromRotationMatrixToRef(yb, bb) {
        const Wy = yb.m,
          Uy = Wy[0],
          hy = Wy[4],
          fy = Wy[8],
          Zy = Wy[1],
          cb = Wy[5],
          Py = Wy[9],
          oy = Wy[2],
          By = Wy[6],
          Ky = Wy[10],
          ey = Uy + cb + Ky;
        let qb;
        return ey > 0 ? (qb = .5 / Math.sqrt(ey + 1), bb._w = .25 / qb, bb._x = (By - Py) * qb, bb._y = (fy - oy) * qb, bb._z = (Zy - hy) * qb, bb._isDirty = !0) : Uy > cb && Uy > Ky ? (qb = 2 * Math.sqrt(1 + Uy - cb - Ky), bb._w = (By - Py) / qb, bb._x = .25 * qb, bb._y = (hy + Zy) / qb, bb._z = (fy + oy) / qb, bb._isDirty = !0) : cb > Ky ? (qb = 2 * Math.sqrt(1 + cb - Uy - Ky), bb._w = (fy - oy) / qb, bb._x = (hy + Zy) / qb, bb._y = .25 * qb, bb._z = (Py + By) / qb, bb._isDirty = !0) : (qb = 2 * Math.sqrt(1 + Ky - Uy - cb), bb._w = (Zy - hy) / qb, bb._x = (fy + oy) / qb, bb._y = (Py + By) / qb, bb._z = .25 * qb, bb._isDirty = !0), bb
      }
      static Dot(yb, bb) {
        return yb._x * bb._x + yb._y * bb._y + yb._z * bb._z + yb._w * bb._w
      }
      static AreClose(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const Uy = sy.Dot(yb, bb);
        return 1 - Uy * Uy <= Wy
      }
      static SmoothToRef(yb, bb, Wy, Uy, hy) {
        let fy = 0 === Uy ? 1 : Wy / Uy;
        return fy = (0, cb.Clamp)(fy, 0, 1), sy.SlerpToRef(yb, bb, fy, hy), hy
      }
      static Zero() {
        return new sy(0, 0, 0, 0)
      }
      static Inverse(yb) {
        return new sy(-yb._x, -yb._y, -yb._z, yb._w)
      }
      static InverseToRef(yb, bb) {
        return bb.set(-yb._x, -yb._y, -yb._z, yb._w), bb
      }
      static Identity() {
        return new sy(0, 0, 0, 1)
      }
      static IsIdentity(yb) {
        return yb && 0 === yb._x && 0 === yb._y && 0 === yb._z && 1 === yb._w
      }
      static RotationAxis(yb, bb) {
        return sy.RotationAxisToRef(yb, bb, new sy)
      }
      static RotationAxisToRef(yb, bb, Wy) {
        Wy._w = Math.cos(bb / 2);
        const Uy = Math.sin(bb / 2) / yb.length();
        return Wy._x = yb._x * Uy, Wy._y = yb._y * Uy, Wy._z = yb._z * Uy, Wy._isDirty = !0, Wy
      }
      static FromArray(yb, bb) {
        return bb || (bb = 0), new sy(yb[bb], yb[bb + 1], yb[bb + 2], yb[bb + 3])
      }
      static FromArrayToRef(yb, bb, Wy) {
        return Wy._x = yb[bb], Wy._y = yb[bb + 1], Wy._z = yb[bb + 2], Wy._w = yb[bb + 3], Wy._isDirty = !0, Wy
      }
      static FromFloatsToRef(yb, bb, Wy, Uy, hy) {
        return hy.vcy(yb, bb, Wy, Uy), hy
      }
      static FromEulerAngles(yb, bb, Wy) {
        const Uy = new sy;
        return sy.RotationYawPitchRollToRef(bb, yb, Wy, Uy), Uy
      }
      static FromEulerAnglesToRef(yb, bb, Wy, Uy) {
        return sy.RotationYawPitchRollToRef(bb, yb, Wy, Uy), Uy
      }
      static FromEulerVector(yb) {
        const bb = new sy;
        return sy.RotationYawPitchRollToRef(yb._y, yb._x, yb._z, bb), bb
      }
      static FromEulerVectorToRef(yb, bb) {
        return sy.RotationYawPitchRollToRef(yb._y, yb._x, yb._z, bb), bb
      }
      static FromUnitVectorsToRef(yb, bb, Wy) {
        let hy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Uy.e;
        const fy = ey.Dot(yb, bb) + 1;
        return fy < hy ? Math.abs(yb.x) > Math.abs(yb.z) ? Wy.set(-yb.y, yb.x, 0, 0) : Wy.set(0, -yb.z, yb.y, 0) : (ey.CrossToRef(yb, bb, ly.dU[0]), Wy.set(ly.dU[0].x, ly.dU[0].y, ly.dU[0].z, fy)), Wy.normalize()
      }
      static RotationYawPitchRoll(yb, bb, Wy) {
        const Uy = new sy;
        return sy.RotationYawPitchRollToRef(yb, bb, Wy, Uy), Uy
      }
      static RotationYawPitchRollToRef(yb, bb, Wy, Uy) {
        const hy = .5 * Wy,
          fy = .5 * bb,
          Zy = .5 * yb,
          cb = Math.sin(hy),
          Py = Math.cos(hy),
          oy = Math.sin(fy),
          By = Math.cos(fy),
          Ky = Math.sin(Zy),
          ey = Math.cos(Zy);
        return Uy._x = ey * oy * Py + Ky * By * cb, Uy._y = Ky * By * Py - ey * oy * cb, Uy._z = ey * By * cb - Ky * oy * Py, Uy._w = ey * By * Py + Ky * oy * cb, Uy._isDirty = !0, Uy
      }
      static RotationAlphaBetaGamma(yb, bb, Wy) {
        const Uy = new sy;
        return sy.RotationAlphaBetaGammaToRef(yb, bb, Wy, Uy), Uy
      }
      static RotationAlphaBetaGammaToRef(yb, bb, Wy, Uy) {
        const hy = .5 * (Wy + yb),
          fy = .5 * (Wy - yb),
          Zy = .5 * bb;
        return Uy._x = Math.cos(fy) * Math.sin(Zy), Uy._y = Math.sin(fy) * Math.sin(Zy), Uy._z = Math.sin(hy) * Math.cos(Zy), Uy._w = Math.cos(hy) * Math.cos(Zy), Uy._isDirty = !0, Uy
      }
      static RotationQuaternionFromAxis(yb, bb, Wy) {
        const Uy = new sy(0, 0, 0, 0);
        return sy.RotationQuaternionFromAxisToRef(yb, bb, Wy, Uy), Uy
      }
      static RotationQuaternionFromAxisToRef(yb, bb, Wy, Uy) {
        const hy = Ey.Matrix[0];
        return yb = yb.normalizeToRef(Ey.dU[0]), bb = bb.normalizeToRef(Ey.dU[1]), Wy = Wy.normalizeToRef(Ey.dU[2]), Sy.FromXYZAxesToRef(yb, bb, Wy, hy), sy.FromRotationMatrixToRef(hy, Uy), Uy
      }
      static FromLookDirectionLH(yb, bb) {
        const Wy = new sy;
        return sy.FromLookDirectionLHToRef(yb, bb, Wy), Wy
      }
      static FromLookDirectionLHToRef(yb, bb, Wy) {
        const Uy = Ey.Matrix[0];
        return Sy.LookDirectionLHToRef(yb, bb, Uy), sy.FromRotationMatrixToRef(Uy, Wy), Wy
      }
      static FromLookDirectionRH(yb, bb) {
        const Wy = new sy;
        return sy.FromLookDirectionRHToRef(yb, bb, Wy), Wy
      }
      static FromLookDirectionRHToRef(yb, bb, Wy) {
        const Uy = Ey.Matrix[0];
        return Sy.LookDirectionRHToRef(yb, bb, Uy), sy.FromRotationMatrixToRef(Uy, Wy)
      }
      static Slerp(yb, bb, Wy) {
        const Uy = sy.Identity();
        return sy.SlerpToRef(yb, bb, Wy, Uy), Uy
      }
      static SlerpToRef(yb, bb, Wy, Uy) {
        let hy, fy, Zy = yb._x * bb._x + yb._y * bb._y + yb._z * bb._z + yb._w * bb._w,
          cb = !1;
        if (Zy < 0 && (cb = !0, Zy = -Zy), Zy > .999999) fy = 1 - Wy, hy = cb ? -Wy : Wy;
        else {
          const yb = Math.acos(Zy),
            bb = 1 / Math.sin(yb);
          fy = Math.sin((1 - Wy) * yb) * bb, hy = cb ? -Math.sin(Wy * yb) * bb : Math.sin(Wy * yb) * bb
        }
        return Uy._x = fy * yb._x + hy * bb._x, Uy._y = fy * yb._y + hy * bb._y, Uy._z = fy * yb._z + hy * bb._z, Uy._w = fy * yb._w + hy * bb._w, Uy._isDirty = !0, Uy
      }
      static Hermite(yb, bb, Wy, Uy, hy) {
        const fy = hy * hy,
          Zy = hy * fy,
          cb = 2 * Zy - 3 * fy + 1,
          Py = -2 * Zy + 3 * fy,
          oy = Zy - 2 * fy + hy,
          By = Zy - fy,
          Ky = yb._x * cb + Wy._x * Py + bb._x * oy + Uy._x * By,
          ey = yb._y * cb + Wy._y * Py + bb._y * oy + Uy._y * By,
          qb = yb._z * cb + Wy._z * Py + bb._z * oy + Uy._z * By,
          Sy = yb._w * cb + Wy._w * Py + bb._w * oy + Uy._w * By;
        return new sy(Ky, ey, qb, Sy)
      }
      static Hermite1stDerivative(yb, bb, Wy, Uy, hy) {
        const fy = new sy;
        return this.Hermite1stDerivativeToRef(yb, bb, Wy, Uy, hy, fy), fy
      }
      static Hermite1stDerivativeToRef(yb, bb, Wy, Uy, hy, fy) {
        const Zy = hy * hy;
        return fy._x = 6 * (Zy - hy) * yb._x + (3 * Zy - 4 * hy + 1) * bb._x + 6 * (-Zy + hy) * Wy._x + (3 * Zy - 2 * hy) * Uy._x, fy._y = 6 * (Zy - hy) * yb._y + (3 * Zy - 4 * hy + 1) * bb._y + 6 * (-Zy + hy) * Wy._y + (3 * Zy - 2 * hy) * Uy._y, fy._z = 6 * (Zy - hy) * yb._z + (3 * Zy - 4 * hy + 1) * bb._z + 6 * (-Zy + hy) * Wy._z + (3 * Zy - 2 * hy) * Uy._z, fy._w = 6 * (Zy - hy) * yb._w + (3 * Zy - 4 * hy + 1) * bb._w + 6 * (-Zy + hy) * Wy._w + (3 * Zy - 2 * hy) * Uy._w, fy._isDirty = !0, fy
      }
      static Normalize(yb) {
        const bb = sy.Zero();
        return sy.NormalizeToRef(yb, bb), bb
      }
      static NormalizeToRef(yb, bb) {
        return yb.normalizeToRef(bb), bb
      }
      static Clamp(yb, bb, Wy) {
        const Uy = new sy;
        return sy.ClampToRef(yb, bb, Wy, Uy), Uy
      }
      static ClampToRef(yb, bb, Wy, Uy) {
        return Uy.vcy((0, cb.Clamp)(yb.x, bb.x, Wy.x), (0, cb.Clamp)(yb.y, bb.y, Wy.y), (0, cb.Clamp)(yb.z, bb.z, Wy.z), (0, cb.Clamp)(yb.w, bb.w, Wy.w))
      }
      static Random() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new sy((0, cb.RandomRange)(yb, bb), (0, cb.RandomRange)(yb, bb), (0, cb.RandomRange)(yb, bb), (0, cb.RandomRange)(yb, bb))
      }
      static RandomToRef() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).vcy((0, cb.RandomRange)(yb, bb), (0, cb.RandomRange)(yb, bb), (0, cb.RandomRange)(yb, bb), (0, cb.RandomRange)(yb, bb))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(yb, bb) {
        return Math.sqrt(sy.DistanceSquared(yb, bb))
      }
      static DistanceSquared(yb, bb) {
        const Wy = yb.x - bb.x,
          Uy = yb.y - bb.y,
          hy = yb.z - bb.z,
          fy = yb.w - bb.w;
        return Wy * Wy + Uy * Uy + hy * hy + fy * fy
      }
      static Center(yb, bb) {
        return sy.CenterToRef(yb, bb, sy.Zero())
      }
      static CenterToRef(yb, bb, Wy) {
        return Wy.vcy((yb.x + bb.x) / 2, (yb.y + bb.y) / 2, (yb.z + bb.z) / 2, (yb.w + bb.w) / 2)
      }
    }
    sy._V8PerformanceHack = new sy(.5, .5, .5, .5);
    class Sy {
      static get Use64Bits() {
        return fy.c.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = Py.l._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Uy = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = yb, this._isIdentity3x2 = yb || Wy, this._isIdentityDirty = !this._isIdentity && bb, this._isIdentity3x2Dirty = !this._isIdentity3x2 && Uy
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, fy.c.MatrixTrackPrecisionChange && fy.c.MatrixTrackedMatrices.push(this), this._m = new fy.c.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const yb = this._m;
          this._isIdentity = 1 === yb[0] && 0 === yb[1] && 0 === yb[2] && 0 === yb[3] && 0 === yb[4] && 1 === yb[5] && 0 === yb[6] && 0 === yb[7] && 0 === yb[8] && 0 === yb[9] && 1 === yb[10] && 0 === yb[11] && 0 === yb[12] && 0 === yb[13] && 0 === yb[14] && 1 === yb[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const yb = this._m,
          bb = yb[0],
          Wy = yb[1],
          Uy = yb[2],
          hy = yb[3],
          fy = yb[4],
          Zy = yb[5],
          cb = yb[6],
          Py = yb[7],
          oy = yb[8],
          By = yb[9],
          Ky = yb[10],
          ey = yb[11],
          qb = yb[12],
          sy = yb[13],
          Sy = yb[14],
          Ey = yb[15],
          ly = Ky * Ey - Sy * ey,
          mb = By * Ey - sy * ey,
          Cy = By * Sy - sy * Ky,
          Ty = oy * Ey - qb * ey,
          Vy = oy * Sy - Ky * qb,
          Jy = oy * sy - qb * By;
        return bb * +(Zy * ly - cb * mb + Py * Cy) + Wy * -(fy * ly - cb * Ty + Py * Vy) + Uy * +(fy * mb - Zy * Ty + Py * Jy) + hy * -(fy * Cy - Zy * Vy + cb * Jy)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!yb) return this._m;
        const Wy = this._m;
        for (let Uy = 0; Uy < 16; Uy++) yb[bb + Uy] = Wy[Uy];
        return this
      }
      hBy() {
        return this._m
      }
      FPy(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Sy.FromArrayToRef(yb, bb, this)
      }
      vcy() {
        for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
        return Sy.FromArrayToRef(bb, 0, this)
      }
      set() {
        const yb = this._m;
        for (let bb = 0; bb < 16; bb++) yb[bb] = bb < 0 || arguments.length <= bb ? void 0 : arguments[bb];
        return this.markAsUpdated(), this
      }
      dfy(yb) {
        const bb = this._m;
        for (let Wy = 0; Wy < 16; Wy++) bb[Wy] = yb;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return Sy.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(yb) {
        const bb = new Sy;
        return this.addToRef(yb, bb), bb
      }
      addToRef(yb, bb) {
        const Wy = this._m,
          Uy = bb._m,
          hy = yb.m;
        for (let fy = 0; fy < 16; fy++) Uy[fy] = Wy[fy] + hy[fy];
        return bb.markAsUpdated(), bb
      }
      addToSelf(yb) {
        const bb = this._m,
          Wy = yb.m;
        return bb[0] += Wy[0], bb[1] += Wy[1], bb[2] += Wy[2], bb[3] += Wy[3], bb[4] += Wy[4], bb[5] += Wy[5], bb[6] += Wy[6], bb[7] += Wy[7], bb[8] += Wy[8], bb[9] += Wy[9], bb[10] += Wy[10], bb[11] += Wy[11], bb[12] += Wy[12], bb[13] += Wy[13], bb[14] += Wy[14], bb[15] += Wy[15], this.markAsUpdated(), this
      }
      addInPlace(yb) {
        const bb = this._m,
          Wy = yb.m;
        for (let Uy = 0; Uy < 16; Uy++) bb[Uy] += Wy[Uy];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const yb = this._m;
        for (let bb = 0; bb < 16; bb++) yb[bb] += bb < 0 || arguments.length <= bb ? void 0 : arguments[bb];
        return this.markAsUpdated(), this
      }
      subtract(yb) {
        const bb = this._m,
          Wy = yb.m;
        for (let Uy = 0; Uy < 16; Uy++) bb[Uy] -= Wy[Uy];
        return this.markAsUpdated(), this
      }
      subtractToRef(yb, bb) {
        const Wy = this._m,
          Uy = yb.m,
          hy = bb._m;
        for (let fy = 0; fy < 16; fy++) hy[fy] = Wy[fy] - Uy[fy];
        return bb.markAsUpdated(), bb
      }
      TBy(yb) {
        const bb = this._m,
          Wy = yb.m;
        for (let Uy = 0; Uy < 16; Uy++) bb[Uy] -= Wy[Uy];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
        return this.subtractFromFloatsToRef(...bb, new Sy)
      }
      subtractFromFloatsToRef() {
        for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
        const Uy = bb.pop(),
          hy = this._m,
          fy = Uy._m,
          Zy = bb;
        for (let cb = 0; cb < 16; cb++) fy[cb] = hy[cb] - Zy[cb];
        return Uy.markAsUpdated(), Uy
      }
      invertToRef(yb) {
        return !0 === this._isIdentity ? (Sy.IdentityToRef(yb), yb) : ((0, Py.h)(this, yb.hBy()) ? yb.markAsUpdated() : yb.Coy(this), yb)
      }
      addAtIndex(yb, bb) {
        return this._m[yb] += bb, this.markAsUpdated(), this
      }
      multiplyAtIndex(yb, bb) {
        return this._m[yb] *= bb, this.markAsUpdated(), this
      }
      setTranslationFromFloats(yb, bb, Wy) {
        return this._m[12] = yb, this._m[13] = bb, this._m[14] = Wy, this.markAsUpdated(), this
      }
      addTranslationFromFloats(yb, bb, Wy) {
        return this._m[12] += yb, this._m[13] += bb, this._m[14] += Wy, this.markAsUpdated(), this
      }
      setTranslation(yb) {
        return this.setTranslationFromFloats(yb._x, yb._y, yb._z)
      }
      getTranslation() {
        return new ey(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(yb) {
        return yb.x = this._m[12], yb.y = this._m[13], yb.z = this._m[14], yb
      }
      removeRotationAndScaling() {
        const yb = this.m;
        return Sy.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, yb[12], yb[13], yb[14], yb[15], this), this._updateIdentityStatus(0 === yb[12] && 0 === yb[13] && 0 === yb[14] && 1 === yb[15]), this
      }
      Coy(yb) {
        yb.copyToArray(this._m);
        const bb = yb;
        return this.updateFlag = bb.updateFlag, this._updateIdentityStatus(bb._isIdentity, bb._isIdentityDirty, bb._isIdentity3x2, bb._isIdentity3x2Dirty), this
      }
      copyToArray(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, Py.d)(this, yb, bb), this
      }
      multiply(yb) {
        const bb = new Sy;
        return this.multiplyToRef(yb, bb), bb
      }
      multiplyInPlace(yb) {
        const bb = this._m,
          Wy = yb.m;
        for (let Uy = 0; Uy < 16; Uy++) bb[Uy] *= Wy[Uy];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const yb = this._m;
        for (let bb = 0; bb < 16; bb++) yb[bb] *= bb < 0 || arguments.length <= bb ? void 0 : arguments[bb];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var yb = arguments.length, bb = new Array(yb), Wy = 0; Wy < yb; Wy++) bb[Wy] = arguments[Wy];
        const Uy = bb.pop(),
          hy = this._m,
          fy = Uy._m,
          Zy = bb;
        for (let cb = 0; cb < 16; cb++) fy[cb] = hy[cb] * Zy[cb];
        return Uy.markAsUpdated(), Uy
      }
      multiplyToRef(yb, bb) {
        return this._isIdentity ? (bb.Coy(yb), bb) : yb._isIdentity ? (bb.Coy(this), bb) : (this.multiplyToArray(yb, bb._m, 0), bb.markAsUpdated(), bb)
      }
      multiplyToArray(yb, bb, Wy) {
        return (0, Py.m)(this, yb, bb, Wy), this
      }
      divide(yb) {
        return this.divideToRef(yb, new Sy)
      }
      divideToRef(yb, bb) {
        const Wy = this._m,
          Uy = yb.m,
          hy = bb._m;
        for (let fy = 0; fy < 16; fy++) hy[fy] = Wy[fy] / Uy[fy];
        return bb.markAsUpdated(), bb
      }
      divideInPlace(yb) {
        const bb = this._m,
          Wy = yb.m;
        for (let Uy = 0; Uy < 16; Uy++) bb[Uy] /= Wy[Uy];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(yb) {
        const bb = this._m,
          Wy = yb.m;
        for (let Uy = 0; Uy < 16; Uy++) bb[Uy] = Math.min(bb[Uy], Wy[Uy]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const yb = this._m;
        for (let bb = 0; bb < 16; bb++) yb[bb] = Math.min(yb[bb], bb < 0 || arguments.length <= bb ? void 0 : arguments[bb]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(yb) {
        const bb = this._m,
          Wy = yb.m;
        for (let Uy = 0; Uy < 16; Uy++) bb[Uy] = Math.max(bb[Uy], Wy[Uy]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const yb = this._m;
        for (let bb = 0; bb < 16; bb++) yb[bb] = Math.max(yb[bb], bb < 0 || arguments.length <= bb ? void 0 : arguments[bb]);
        return this.markAsUpdated(), this
      }
      gZ() {
        return this.negateToRef(new Sy)
      }
      negateInPlace() {
        const yb = this._m;
        for (let bb = 0; bb < 16; bb++) yb[bb] = -yb[bb];
        return this.markAsUpdated(), this
      }
      negateToRef(yb) {
        const bb = this._m,
          Wy = yb._m;
        for (let Uy = 0; Uy < 16; Uy++) Wy[Uy] = -bb[Uy];
        return yb.markAsUpdated(), yb
      }
      equals(yb) {
        const bb = yb;
        if (!bb) return !1;
        if ((this._isIdentity || bb._isIdentity) && !this._isIdentityDirty && !bb._isIdentityDirty) return this._isIdentity && bb._isIdentity;
        const Wy = this.m,
          Uy = bb.m;
        return Wy[0] === Uy[0] && Wy[1] === Uy[1] && Wy[2] === Uy[2] && Wy[3] === Uy[3] && Wy[4] === Uy[4] && Wy[5] === Uy[5] && Wy[6] === Uy[6] && Wy[7] === Uy[7] && Wy[8] === Uy[8] && Wy[9] === Uy[9] && Wy[10] === Uy[10] && Wy[11] === Uy[11] && Wy[12] === Uy[12] && Wy[13] === Uy[13] && Wy[14] === Uy[14] && Wy[15] === Uy[15]
      }
      equalsWithEpsilon(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Wy = this._m,
          Uy = yb.m;
        for (let hy = 0; hy < 16; hy++)
          if (!(0, cb.WithinEpsilon)(Wy[hy], Uy[hy], bb)) return !1;
        return !0
      }
      nqy() {
        const yb = this._m;
        for (let bb = 0; bb < 16; bb++)
          if (yb[bb] != (bb < 0 || arguments.length <= bb ? void 0 : arguments[bb])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new Sy)
      }
      floorToRef(yb) {
        const bb = this._m,
          Wy = yb._m;
        for (let Uy = 0; Uy < 16; Uy++) Wy[Uy] = Math.floor(bb[Uy]);
        return yb.markAsUpdated(), yb
      }
      fract() {
        return this.fractToRef(new Sy)
      }
      fractToRef(yb) {
        const bb = this._m,
          Wy = yb._m;
        for (let Uy = 0; Uy < 16; Uy++) Wy[Uy] = bb[Uy] - Math.floor(bb[Uy]);
        return yb.markAsUpdated(), yb
      }
      clone() {
        const yb = new Sy;
        return yb.Coy(this), yb
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let yb = By(this._m[0]);
        for (let bb = 1; bb < 16; bb++) yb = 397 * yb ^ By(this._m[bb]);
        return yb
      }
      decomposeToTransformNode(yb) {
        return yb.rotationQuaternion = yb.rotationQuaternion || new sy, this.decompose(yb.vZ, yb.rotationQuaternion, yb.position)
      }
      decompose(yb, bb, Wy, Uy) {
        let hy = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return Wy && Wy.dfy(0), yb && yb.dfy(1), bb && bb.vcy(0, 0, 0, 1), !0;
        const fy = this._m;
        if (Wy && Wy.vcy(fy[12], fy[13], fy[14]), (yb = yb || Ey.dU[0]).x = Math.sqrt(fy[0] * fy[0] + fy[1] * fy[1] + fy[2] * fy[2]), yb.y = Math.sqrt(fy[4] * fy[4] + fy[5] * fy[5] + fy[6] * fy[6]), yb.z = Math.sqrt(fy[8] * fy[8] + fy[9] * fy[9] + fy[10] * fy[10]), Uy) {
          const bb = (hy ? Uy.absoluteScaling.x : Uy.vZ.x) < 0 ? -1 : 1,
            Wy = (hy ? Uy.absoluteScaling.y : Uy.vZ.y) < 0 ? -1 : 1,
            fy = (hy ? Uy.absoluteScaling.z : Uy.vZ.z) < 0 ? -1 : 1;
          yb.x *= bb, yb.y *= Wy, yb.z *= fy
        } else this.determinant() <= 0 && (yb.y *= -1);
        if (0 === yb._x || 0 === yb._y || 0 === yb._z) return bb && bb.vcy(0, 0, 0, 1), !1;
        if (bb) {
          const Wy = 1 / yb._x,
            Uy = 1 / yb._y,
            hy = 1 / yb._z;
          Sy.FromValuesToRef(fy[0] * Wy, fy[1] * Wy, fy[2] * Wy, 0, fy[4] * Uy, fy[5] * Uy, fy[6] * Uy, 0, fy[8] * hy, fy[9] * hy, fy[10] * hy, 0, 0, 0, 0, 1, Ey.Matrix[0]), sy.FromRotationMatrixToRef(Ey.Matrix[0], bb)
        }
        return !0
      }
      getRow(yb) {
        if (yb < 0 || yb > 3) return null;
        const bb = 4 * yb;
        return new qb(this._m[bb + 0], this._m[bb + 1], this._m[bb + 2], this._m[bb + 3])
      }
      getRowToRef(yb, bb) {
        if (yb >= 0 && yb <= 3) {
          const Wy = 4 * yb;
          bb.x = this._m[Wy + 0], bb.y = this._m[Wy + 1], bb.z = this._m[Wy + 2], bb.w = this._m[Wy + 3]
        }
        return bb
      }
      setRow(yb, bb) {
        return this.setRowFromFloats(yb, bb.x, bb.y, bb.z, bb.w)
      }
      transpose() {
        const yb = new Sy;
        return Sy.TransposeToRef(this, yb), yb
      }
      transposeToRef(yb) {
        return Sy.TransposeToRef(this, yb), yb
      }
      setRowFromFloats(yb, bb, Wy, Uy, hy) {
        if (yb < 0 || yb > 3) return this;
        const fy = 4 * yb;
        return this._m[fy + 0] = bb, this._m[fy + 1] = Wy, this._m[fy + 2] = Uy, this._m[fy + 3] = hy, this.markAsUpdated(), this
      }
      scale(yb) {
        const bb = new Sy;
        return this.scaleToRef(yb, bb), bb
      }
      scaleToRef(yb, bb) {
        for (let Wy = 0; Wy < 16; Wy++) bb._m[Wy] = this._m[Wy] * yb;
        return bb.markAsUpdated(), bb
      }
      scaleAndAddToRef(yb, bb) {
        for (let Wy = 0; Wy < 16; Wy++) bb._m[Wy] += this._m[Wy] * yb;
        return bb.markAsUpdated(), bb
      }
      scaleInPlace(yb) {
        const bb = this._m;
        for (let Wy = 0; Wy < 16; Wy++) bb[Wy] *= yb;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(yb) {
        const bb = Ey.Matrix[0];
        this.invertToRef(bb), bb.transposeToRef(yb);
        const Wy = yb._m;
        return Sy.FromValuesToRef(Wy[0], Wy[1], Wy[2], 0, Wy[4], Wy[5], Wy[6], 0, Wy[8], Wy[9], Wy[10], 0, 0, 0, 0, 1, yb), yb
      }
      getRotationMatrix() {
        const yb = new Sy;
        return this.getRotationMatrixToRef(yb), yb
      }
      getRotationMatrixToRef(yb) {
        const bb = Ey.dU[0];
        if (!this.decompose(bb)) return Sy.IdentityToRef(yb), yb;
        const Wy = this._m,
          Uy = 1 / bb._x,
          hy = 1 / bb._y,
          fy = 1 / bb._z;
        return Sy.FromValuesToRef(Wy[0] * Uy, Wy[1] * Uy, Wy[2] * Uy, 0, Wy[4] * hy, Wy[5] * hy, Wy[6] * hy, 0, Wy[8] * fy, Wy[9] * fy, Wy[10] * fy, 0, 0, 0, 0, 1, yb), yb
      }
      toggleModelMatrixHandInPlace() {
        const yb = this._m;
        return yb[2] *= -1, yb[6] *= -1, yb[8] *= -1, yb[9] *= -1, yb[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const yb = this._m;
        return yb[8] *= -1, yb[9] *= -1, yb[10] *= -1, yb[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(mb, this), this
      }
      static FromArray(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const Wy = new Sy;
        return Sy.FromArrayToRef(yb, bb, Wy), Wy
      }
      static FromArrayToRef(yb, bb, Wy) {
        for (let Uy = 0; Uy < 16; Uy++) Wy._m[Uy] = yb[Uy + bb];
        return Wy.markAsUpdated(), Wy
      }
      static FromFloat32ArrayToRefScaled(yb, bb, Wy, Uy) {
        return Uy._m[0] = yb[0 + bb] * Wy, Uy._m[1] = yb[1 + bb] * Wy, Uy._m[2] = yb[2 + bb] * Wy, Uy._m[3] = yb[3 + bb] * Wy, Uy._m[4] = yb[4 + bb] * Wy, Uy._m[5] = yb[5 + bb] * Wy, Uy._m[6] = yb[6 + bb] * Wy, Uy._m[7] = yb[7 + bb] * Wy, Uy._m[8] = yb[8 + bb] * Wy, Uy._m[9] = yb[9 + bb] * Wy, Uy._m[10] = yb[10 + bb] * Wy, Uy._m[11] = yb[11 + bb] * Wy, Uy._m[12] = yb[12 + bb] * Wy, Uy._m[13] = yb[13 + bb] * Wy, Uy._m[14] = yb[14 + bb] * Wy, Uy._m[15] = yb[15 + bb] * Wy, Uy.markAsUpdated(), Uy
      }
      static get IdentityReadOnly() {
        return Sy._IdentityReadOnly
      }
      static FromValuesToRef(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By, Ky, ey, qb, sy, Sy, Ey) {
        const ly = Ey._m;
        ly[0] = yb, ly[1] = bb, ly[2] = Wy, ly[3] = Uy, ly[4] = hy, ly[5] = fy, ly[6] = Zy, ly[7] = cb, ly[8] = Py, ly[9] = oy, ly[10] = By, ly[11] = Ky, ly[12] = ey, ly[13] = qb, ly[14] = sy, ly[15] = Sy, Ey.markAsUpdated()
      }
      static FromValues(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By, Ky, ey, qb, sy, Ey) {
        const ly = new Sy,
          mb = ly._m;
        return mb[0] = yb, mb[1] = bb, mb[2] = Wy, mb[3] = Uy, mb[4] = hy, mb[5] = fy, mb[6] = Zy, mb[7] = cb, mb[8] = Py, mb[9] = oy, mb[10] = By, mb[11] = Ky, mb[12] = ey, mb[13] = qb, mb[14] = sy, mb[15] = Ey, ly.markAsUpdated(), ly
      }
      static Compose(yb, bb, Wy) {
        const Uy = new Sy;
        return Sy.ComposeToRef(yb, bb, Wy, Uy), Uy
      }
      static ComposeToRef(yb, bb, Wy, Uy) {
        const hy = Uy._m,
          fy = bb._x,
          Zy = bb._y,
          cb = bb._z,
          Py = bb._w,
          oy = fy + fy,
          By = Zy + Zy,
          Ky = cb + cb,
          ey = fy * oy,
          qb = fy * By,
          sy = fy * Ky,
          Sy = Zy * By,
          Ey = Zy * Ky,
          ly = cb * Ky,
          mb = Py * oy,
          Cy = Py * By,
          Ty = Py * Ky,
          Vy = yb._x,
          Jy = yb._y,
          gb = yb._z;
        return hy[0] = (1 - (Sy + ly)) * Vy, hy[1] = (qb + Ty) * Vy, hy[2] = (sy - Cy) * Vy, hy[3] = 0, hy[4] = (qb - Ty) * Jy, hy[5] = (1 - (ey + ly)) * Jy, hy[6] = (Ey + mb) * Jy, hy[7] = 0, hy[8] = (sy + Cy) * gb, hy[9] = (Ey - mb) * gb, hy[10] = (1 - (ey + Sy)) * gb, hy[11] = 0, hy[12] = Wy._x, hy[13] = Wy._y, hy[14] = Wy._z, hy[15] = 1, Uy.markAsUpdated(), Uy
      }
      static Identity() {
        const yb = Sy.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return yb._updateIdentityStatus(!0), yb
      }
      static IdentityToRef(yb) {
        return Sy.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, yb), yb._updateIdentityStatus(!0), yb
      }
      static Zero() {
        const yb = Sy.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return yb._updateIdentityStatus(!1), yb
      }
      static RotationX(yb) {
        const bb = new Sy;
        return Sy.RotationXToRef(yb, bb), bb
      }
      static Invert(yb) {
        const bb = new Sy;
        return yb.invertToRef(bb), bb
      }
      static RotationXToRef(yb, bb) {
        const Wy = Math.sin(yb),
          Uy = Math.cos(yb);
        return Sy.FromValuesToRef(1, 0, 0, 0, 0, Uy, Wy, 0, 0, -Wy, Uy, 0, 0, 0, 0, 1, bb), bb._updateIdentityStatus(1 === Uy && 0 === Wy), bb
      }
      static RotationY(yb) {
        const bb = new Sy;
        return Sy.RotationYToRef(yb, bb), bb
      }
      static RotationYToRef(yb, bb) {
        const Wy = Math.sin(yb),
          Uy = Math.cos(yb);
        return Sy.FromValuesToRef(Uy, 0, -Wy, 0, 0, 1, 0, 0, Wy, 0, Uy, 0, 0, 0, 0, 1, bb), bb._updateIdentityStatus(1 === Uy && 0 === Wy), bb
      }
      static RotationZ(yb) {
        const bb = new Sy;
        return Sy.RotationZToRef(yb, bb), bb
      }
      static RotationZToRef(yb, bb) {
        const Wy = Math.sin(yb),
          Uy = Math.cos(yb);
        return Sy.FromValuesToRef(Uy, Wy, 0, 0, -Wy, Uy, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, bb), bb._updateIdentityStatus(1 === Uy && 0 === Wy), bb
      }
      static RotationAxis(yb, bb) {
        const Wy = new Sy;
        return Sy.RotationAxisToRef(yb, bb, Wy), Wy
      }
      static RotationAxisToRef(yb, bb, Wy) {
        const Uy = Math.sin(-bb),
          hy = Math.cos(-bb),
          fy = 1 - hy;
        yb = yb.normalizeToRef(Ey.dU[0]);
        const Zy = Wy._m;
        return Zy[0] = yb._x * yb._x * fy + hy, Zy[1] = yb._x * yb._y * fy - yb._z * Uy, Zy[2] = yb._x * yb._z * fy + yb._y * Uy, Zy[3] = 0, Zy[4] = yb._y * yb._x * fy + yb._z * Uy, Zy[5] = yb._y * yb._y * fy + hy, Zy[6] = yb._y * yb._z * fy - yb._x * Uy, Zy[7] = 0, Zy[8] = yb._z * yb._x * fy - yb._y * Uy, Zy[9] = yb._z * yb._y * fy + yb._x * Uy, Zy[10] = yb._z * yb._z * fy + hy, Zy[11] = 0, Zy[12] = 0, Zy[13] = 0, Zy[14] = 0, Zy[15] = 1, Wy.markAsUpdated(), Wy
      }
      static RotationAlignToRef(yb, bb, Wy) {
        let hy = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const fy = ey.Dot(bb, yb),
          Zy = Wy._m;
        if (fy < -1 + Uy.e) Zy[0] = -1, Zy[1] = 0, Zy[2] = 0, Zy[3] = 0, Zy[4] = 0, Zy[5] = hy ? 1 : -1, Zy[6] = 0, Zy[7] = 0, Zy[8] = 0, Zy[9] = 0, Zy[10] = hy ? -1 : 1, Zy[11] = 0;
        else {
          const Wy = ey.Cross(bb, yb),
            Uy = 1 / (1 + fy);
          Zy[0] = Wy._x * Wy._x * Uy + fy, Zy[1] = Wy._y * Wy._x * Uy - Wy._z, Zy[2] = Wy._z * Wy._x * Uy + Wy._y, Zy[3] = 0, Zy[4] = Wy._x * Wy._y * Uy + Wy._z, Zy[5] = Wy._y * Wy._y * Uy + fy, Zy[6] = Wy._z * Wy._y * Uy - Wy._x, Zy[7] = 0, Zy[8] = Wy._x * Wy._z * Uy - Wy._y, Zy[9] = Wy._y * Wy._z * Uy + Wy._x, Zy[10] = Wy._z * Wy._z * Uy + fy, Zy[11] = 0
        }
        return Zy[12] = 0, Zy[13] = 0, Zy[14] = 0, Zy[15] = 1, Wy.markAsUpdated(), Wy
      }
      static RotationYawPitchRoll(yb, bb, Wy) {
        const Uy = new Sy;
        return Sy.RotationYawPitchRollToRef(yb, bb, Wy, Uy), Uy
      }
      static RotationYawPitchRollToRef(yb, bb, Wy, Uy) {
        return sy.RotationYawPitchRollToRef(yb, bb, Wy, Ey.Quaternion[0]), Ey.Quaternion[0].toRotationMatrix(Uy), Uy
      }
      static Scaling(yb, bb, Wy) {
        const Uy = new Sy;
        return Sy.ScalingToRef(yb, bb, Wy, Uy), Uy
      }
      static ScalingToRef(yb, bb, Wy, Uy) {
        return Sy.FromValuesToRef(yb, 0, 0, 0, 0, bb, 0, 0, 0, 0, Wy, 0, 0, 0, 0, 1, Uy), Uy._updateIdentityStatus(1 === yb && 1 === bb && 1 === Wy), Uy
      }
      static Translation(yb, bb, Wy) {
        const Uy = new Sy;
        return Sy.TranslationToRef(yb, bb, Wy, Uy), Uy
      }
      static TranslationToRef(yb, bb, Wy, Uy) {
        return Sy.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, yb, bb, Wy, 1, Uy), Uy._updateIdentityStatus(0 === yb && 0 === bb && 0 === Wy), Uy
      }
      static Lerp(yb, bb, Wy) {
        const Uy = new Sy;
        return Sy.LerpToRef(yb, bb, Wy, Uy), Uy
      }
      static LerpToRef(yb, bb, Wy, Uy) {
        const hy = Uy._m,
          fy = yb.m,
          Zy = bb.m;
        for (let cb = 0; cb < 16; cb++) hy[cb] = fy[cb] * (1 - Wy) + Zy[cb] * Wy;
        return Uy.markAsUpdated(), Uy
      }
      static DecomposeLerp(yb, bb, Wy) {
        const Uy = new Sy;
        return Sy.DecomposeLerpToRef(yb, bb, Wy, Uy), Uy
      }
      static DecomposeLerpToRef(yb, bb, Wy, Uy) {
        const hy = Ey.dU[0],
          fy = Ey.Quaternion[0],
          Zy = Ey.dU[1];
        yb.decompose(hy, fy, Zy);
        const cb = Ey.dU[2],
          Py = Ey.Quaternion[1],
          oy = Ey.dU[3];
        bb.decompose(cb, Py, oy);
        const By = Ey.dU[4];
        ey.LerpToRef(hy, cb, Wy, By);
        const Ky = Ey.Quaternion[2];
        sy.SlerpToRef(fy, Py, Wy, Ky);
        const qb = Ey.dU[5];
        return ey.LerpToRef(Zy, oy, Wy, qb), Sy.ComposeToRef(By, Ky, qb, Uy), Uy
      }
      static LookAtLH(yb, bb, Wy) {
        const Uy = new Sy;
        return Sy.LookAtLHToRef(yb, bb, Wy, Uy), Uy
      }
      static LookAtLHToRef(yb, bb, Wy, Uy) {
        const hy = Ey.dU[0],
          fy = Ey.dU[1],
          Zy = Ey.dU[2];
        bb.subtractToRef(yb, Zy), Zy.normalize(), ey.CrossToRef(Wy, Zy, hy);
        const cb = hy.lengthSquared();
        0 === cb ? hy.x = 1 : hy.normalizeFromLength(Math.sqrt(cb)), ey.CrossToRef(Zy, hy, fy), fy.normalize();
        const Py = -ey.Dot(hy, yb),
          oy = -ey.Dot(fy, yb),
          By = -ey.Dot(Zy, yb);
        return Sy.FromValuesToRef(hy._x, fy._x, Zy._x, 0, hy._y, fy._y, Zy._y, 0, hy._z, fy._z, Zy._z, 0, Py, oy, By, 1, Uy), Uy
      }
      static LookAtRH(yb, bb, Wy) {
        const Uy = new Sy;
        return Sy.LookAtRHToRef(yb, bb, Wy, Uy), Uy
      }
      static LookAtRHToRef(yb, bb, Wy, Uy) {
        const hy = Ey.dU[0],
          fy = Ey.dU[1],
          Zy = Ey.dU[2];
        yb.subtractToRef(bb, Zy), Zy.normalize(), ey.CrossToRef(Wy, Zy, hy);
        const cb = hy.lengthSquared();
        0 === cb ? hy.x = 1 : hy.normalizeFromLength(Math.sqrt(cb)), ey.CrossToRef(Zy, hy, fy), fy.normalize();
        const Py = -ey.Dot(hy, yb),
          oy = -ey.Dot(fy, yb),
          By = -ey.Dot(Zy, yb);
        return Sy.FromValuesToRef(hy._x, fy._x, Zy._x, 0, hy._y, fy._y, Zy._y, 0, hy._z, fy._z, Zy._z, 0, Py, oy, By, 1, Uy), Uy
      }
      static LookDirectionLH(yb, bb) {
        const Wy = new Sy;
        return Sy.LookDirectionLHToRef(yb, bb, Wy), Wy
      }
      static LookDirectionLHToRef(yb, bb, Wy) {
        const Uy = Ey.dU[0];
        Uy.Coy(yb), Uy.scaleInPlace(-1);
        const hy = Ey.dU[1];
        return ey.CrossToRef(bb, Uy, hy), Sy.FromValuesToRef(hy._x, hy._y, hy._z, 0, bb._x, bb._y, bb._z, 0, Uy._x, Uy._y, Uy._z, 0, 0, 0, 0, 1, Wy), Wy
      }
      static LookDirectionRH(yb, bb) {
        const Wy = new Sy;
        return Sy.LookDirectionRHToRef(yb, bb, Wy), Wy
      }
      static LookDirectionRHToRef(yb, bb, Wy) {
        const Uy = Ey.dU[2];
        return ey.CrossToRef(bb, yb, Uy), Sy.FromValuesToRef(Uy._x, Uy._y, Uy._z, 0, bb._x, bb._y, bb._z, 0, yb._x, yb._y, yb._z, 0, 0, 0, 0, 1, Wy), Wy
      }
      static OrthoLH(yb, bb, Wy, Uy, hy) {
        const fy = new Sy;
        return Sy.OrthoLHToRef(yb, bb, Wy, Uy, fy, hy), fy
      }
      static OrthoLHToRef(yb, bb, Wy, Uy, hy, fy) {
        const Zy = 2 / yb,
          cb = 2 / bb,
          Py = 2 / (Uy - Wy),
          oy = -(Uy + Wy) / (Uy - Wy);
        return Sy.FromValuesToRef(Zy, 0, 0, 0, 0, cb, 0, 0, 0, 0, Py, 0, 0, 0, oy, 1, hy), fy && hy.multiplyToRef(mb, hy), hy._updateIdentityStatus(1 === Zy && 1 === cb && 1 === Py && 0 === oy), hy
      }
      static OrthoOffCenterLH(yb, bb, Wy, Uy, hy, fy, Zy) {
        const cb = new Sy;
        return Sy.OrthoOffCenterLHToRef(yb, bb, Wy, Uy, hy, fy, cb, Zy), cb
      }
      static OrthoOffCenterLHToRef(yb, bb, Wy, Uy, hy, fy, Zy, cb) {
        const Py = 2 / (bb - yb),
          oy = 2 / (Uy - Wy),
          By = 2 / (fy - hy),
          Ky = -(fy + hy) / (fy - hy),
          ey = (yb + bb) / (yb - bb),
          qb = (Uy + Wy) / (Wy - Uy);
        return Sy.FromValuesToRef(Py, 0, 0, 0, 0, oy, 0, 0, 0, 0, By, 0, ey, qb, Ky, 1, Zy), cb && Zy.multiplyToRef(mb, Zy), Zy.markAsUpdated(), Zy
      }
      static ObliqueOffCenterLHToRef(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By) {
        const Ky = -Zy * Math.cos(cb),
          ey = -Zy * Math.sin(cb);
        return Sy.TranslationToRef(0, 0, -Py, Ey.Matrix[1]), Sy.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Ky, ey, 1, 0, 0, 0, 0, 1, Ey.Matrix[0]), Ey.Matrix[1].multiplyToRef(Ey.Matrix[0], Ey.Matrix[0]), Sy.TranslationToRef(0, 0, Py, Ey.Matrix[1]), Ey.Matrix[0].multiplyToRef(Ey.Matrix[1], Ey.Matrix[0]), Sy.OrthoOffCenterLHToRef(yb, bb, Wy, Uy, hy, fy, oy, By), Ey.Matrix[0].multiplyToRef(oy, oy), oy
      }
      static OrthoOffCenterRH(yb, bb, Wy, Uy, hy, fy, Zy) {
        const cb = new Sy;
        return Sy.OrthoOffCenterRHToRef(yb, bb, Wy, Uy, hy, fy, cb, Zy), cb
      }
      static OrthoOffCenterRHToRef(yb, bb, Wy, Uy, hy, fy, Zy, cb) {
        return Sy.OrthoOffCenterLHToRef(yb, bb, Wy, Uy, hy, fy, Zy, cb), Zy._m[10] *= -1, Zy
      }
      static ObliqueOffCenterRHToRef(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By) {
        const Ky = Zy * Math.cos(cb),
          ey = Zy * Math.sin(cb);
        return Sy.TranslationToRef(0, 0, Py, Ey.Matrix[1]), Sy.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, Ky, ey, 1, 0, 0, 0, 0, 1, Ey.Matrix[0]), Ey.Matrix[1].multiplyToRef(Ey.Matrix[0], Ey.Matrix[0]), Sy.TranslationToRef(0, 0, -Py, Ey.Matrix[1]), Ey.Matrix[0].multiplyToRef(Ey.Matrix[1], Ey.Matrix[0]), Sy.OrthoOffCenterRHToRef(yb, bb, Wy, Uy, hy, fy, oy, By), Ey.Matrix[0].multiplyToRef(oy, oy), oy
      }
      static PerspectiveLH(yb, bb, Wy, Uy, hy) {
        let fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const Zy = new Sy,
          cb = 2 * Wy / yb,
          Py = 2 * Wy / bb,
          oy = (Uy + Wy) / (Uy - Wy),
          By = -2 * Uy * Wy / (Uy - Wy),
          Ky = Math.tan(fy);
        return Sy.FromValuesToRef(cb, 0, 0, 0, 0, Py, 0, Ky, 0, 0, oy, 1, 0, 0, By, 0, Zy), hy && Zy.multiplyToRef(mb, Zy), Zy._updateIdentityStatus(!1), Zy
      }
      static PerspectiveFovLH(yb, bb, Wy, Uy, hy) {
        let fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Zy = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const cb = new Sy;
        return Sy.PerspectiveFovLHToRef(yb, bb, Wy, Uy, cb, !0, hy, fy, Zy), cb
      }
      static PerspectiveFovLHToRef(yb, bb, Wy, Uy, hy) {
        let fy = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Zy = arguments.length > 6 ? arguments[6] : void 0,
          cb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Py = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const oy = Wy,
          By = Uy,
          Ky = 1 / Math.tan(.5 * yb),
          ey = fy ? Ky / bb : Ky,
          qb = fy ? Ky : Ky * bb,
          sy = Py && 0 === oy ? -1 : 0 !== By ? (By + oy) / (By - oy) : 1,
          Ey = Py && 0 === oy ? 2 * By : 0 !== By ? -2 * By * oy / (By - oy) : -2 * oy,
          ly = Math.tan(cb);
        return Sy.FromValuesToRef(ey, 0, 0, 0, 0, qb, 0, ly, 0, 0, sy, 1, 0, 0, Ey, 0, hy), Zy && hy.multiplyToRef(mb, hy), hy._updateIdentityStatus(!1), hy
      }
      static PerspectiveFovReverseLHToRef(yb, bb, Wy, Uy, hy) {
        let fy = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Zy = arguments.length > 6 ? arguments[6] : void 0,
          cb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Py = 1 / Math.tan(.5 * yb),
          oy = fy ? Py / bb : Py,
          By = fy ? Py : Py * bb,
          Ky = Math.tan(cb);
        return Sy.FromValuesToRef(oy, 0, 0, 0, 0, By, 0, Ky, 0, 0, -Wy, 1, 0, 0, 1, 0, hy), Zy && hy.multiplyToRef(mb, hy), hy._updateIdentityStatus(!1), hy
      }
      static PerspectiveFovRH(yb, bb, Wy, Uy, hy) {
        let fy = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Zy = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const cb = new Sy;
        return Sy.PerspectiveFovRHToRef(yb, bb, Wy, Uy, cb, !0, hy, fy, Zy), cb
      }
      static PerspectiveFovRHToRef(yb, bb, Wy, Uy, hy) {
        let fy = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Zy = arguments.length > 6 ? arguments[6] : void 0,
          cb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          Py = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const oy = Wy,
          By = Uy,
          Ky = 1 / Math.tan(.5 * yb),
          ey = fy ? Ky / bb : Ky,
          qb = fy ? Ky : Ky * bb,
          sy = Py && 0 === oy ? 1 : 0 !== By ? -(By + oy) / (By - oy) : -1,
          Ey = Py && 0 === oy ? 2 * By : 0 !== By ? -2 * By * oy / (By - oy) : -2 * oy,
          ly = Math.tan(cb);
        return Sy.FromValuesToRef(ey, 0, 0, 0, 0, qb, 0, ly, 0, 0, sy, -1, 0, 0, Ey, 0, hy), Zy && hy.multiplyToRef(mb, hy), hy._updateIdentityStatus(!1), hy
      }
      static PerspectiveFovReverseRHToRef(yb, bb, Wy, Uy, hy) {
        let fy = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Zy = arguments.length > 6 ? arguments[6] : void 0,
          cb = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const Py = 1 / Math.tan(.5 * yb),
          oy = fy ? Py / bb : Py,
          By = fy ? Py : Py * bb,
          Ky = Math.tan(cb);
        return Sy.FromValuesToRef(oy, 0, 0, 0, 0, By, 0, Ky, 0, 0, -Wy, -1, 0, 0, -1, 0, hy), Zy && hy.multiplyToRef(mb, hy), hy._updateIdentityStatus(!1), hy
      }
      static GetFinalMatrix(yb, bb, Wy, Uy, hy, fy) {
        const Zy = yb.width,
          cb = yb.height,
          Py = yb.x,
          oy = yb.y,
          By = Sy.FromValues(Zy / 2, 0, 0, 0, 0, -cb / 2, 0, 0, 0, 0, fy - hy, 0, Py + Zy / 2, cb / 2 + oy, hy, 1),
          Ky = new Sy;
        return bb.multiplyToRef(Wy, Ky), Ky.multiplyToRef(Uy, Ky), Ky.multiplyToRef(By, Ky)
      }
      static GetAsMatrix2x2(yb) {
        const bb = yb.m,
          Wy = [bb[0], bb[1], bb[4], bb[5]];
        return fy.c.MatrixUse64Bits ? Wy : new Float32Array(Wy)
      }
      static GetAsMatrix3x3(yb) {
        const bb = yb.m,
          Wy = [bb[0], bb[1], bb[2], bb[4], bb[5], bb[6], bb[8], bb[9], bb[10]];
        return fy.c.MatrixUse64Bits ? Wy : new Float32Array(Wy)
      }
      static Transpose(yb) {
        const bb = new Sy;
        return Sy.TransposeToRef(yb, bb), bb
      }
      static TransposeToRef(yb, bb) {
        const Wy = yb.m,
          Uy = Wy[0],
          hy = Wy[4],
          fy = Wy[8],
          Zy = Wy[12],
          cb = Wy[1],
          Py = Wy[5],
          oy = Wy[9],
          By = Wy[13],
          Ky = Wy[2],
          ey = Wy[6],
          qb = Wy[10],
          sy = Wy[14],
          Sy = Wy[3],
          Ey = Wy[7],
          ly = Wy[11],
          mb = Wy[15],
          Cy = bb._m;
        return Cy[0] = Uy, Cy[1] = hy, Cy[2] = fy, Cy[3] = Zy, Cy[4] = cb, Cy[5] = Py, Cy[6] = oy, Cy[7] = By, Cy[8] = Ky, Cy[9] = ey, Cy[10] = qb, Cy[11] = sy, Cy[12] = Sy, Cy[13] = Ey, Cy[14] = ly, Cy[15] = mb, bb.markAsUpdated(), bb._updateIdentityStatus(yb._isIdentity, yb._isIdentityDirty), bb
      }
      static Reflection(yb) {
        const bb = new Sy;
        return Sy.ReflectionToRef(yb, bb), bb
      }
      static ReflectionToRef(yb, bb) {
        yb.normalize();
        const Wy = yb.normal.x,
          Uy = yb.normal.y,
          hy = yb.normal.z,
          fy = -2 * Wy,
          Zy = -2 * Uy,
          cb = -2 * hy;
        return Sy.FromValuesToRef(fy * Wy + 1, Zy * Wy, cb * Wy, 0, fy * Uy, Zy * Uy + 1, cb * Uy, 0, fy * hy, Zy * hy, cb * hy + 1, 0, fy * yb.d, Zy * yb.d, cb * yb.d, 1, bb), bb
      }
      static FromXYZAxesToRef(yb, bb, Wy, Uy) {
        return Sy.FromValuesToRef(yb._x, yb._y, yb._z, 0, bb._x, bb._y, bb._z, 0, Wy._x, Wy._y, Wy._z, 0, 0, 0, 0, 1, Uy), Uy
      }
      static FromQuaternionToRef(yb, bb) {
        const Wy = yb._x * yb._x,
          Uy = yb._y * yb._y,
          hy = yb._z * yb._z,
          fy = yb._x * yb._y,
          Zy = yb._z * yb._w,
          cb = yb._z * yb._x,
          Py = yb._y * yb._w,
          oy = yb._y * yb._z,
          By = yb._x * yb._w;
        return bb._m[0] = 1 - 2 * (Uy + hy), bb._m[1] = 2 * (fy + Zy), bb._m[2] = 2 * (cb - Py), bb._m[3] = 0, bb._m[4] = 2 * (fy - Zy), bb._m[5] = 1 - 2 * (hy + Wy), bb._m[6] = 2 * (oy + By), bb._m[7] = 0, bb._m[8] = 2 * (cb + Py), bb._m[9] = 2 * (oy - By), bb._m[10] = 1 - 2 * (Uy + Wy), bb._m[11] = 0, bb._m[12] = 0, bb._m[13] = 0, bb._m[14] = 0, bb._m[15] = 1, bb.markAsUpdated(), bb
      }
    }
    Sy._IdentityReadOnly = Sy.Identity();
    class Ey {}
    Ey.dU = (0, hy.e)(11, ey.Zero), Ey.Matrix = (0, hy.e)(2, Sy.Identity), Ey.Quaternion = (0, hy.e)(3, sy.Zero);
    class ly {}
    ly.Vector2 = (0, hy.e)(3, Ky.Zero), ly.dU = (0, hy.e)(13, ey.Zero), ly.Vector4 = (0, hy.e)(3, qb.Zero), ly.Quaternion = (0, hy.e)(3, sy.Zero), ly.Matrix = (0, hy.e)(8, Sy.Identity);
    const mb = Sy.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let Cy = !1;

    function Ty() {
      Cy || (Cy = !0, Object.defineProperties(Ky.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(ey.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(qb.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(sy.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Sy.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, oy.e)("BABYLON.Vector2", Ky), (0, oy.e)("BABYLON.Vector3", ey), (0, oy.e)("BABYLON.Vector4", qb), (0, oy.e)("BABYLON.Matrix", Sy))
    }
  },
  35893: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Zy
    });
    const Uy = "undefined" !== typeof WeakRef;
    class hy {
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 ? arguments[2] : void 0,
          Uy = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(yb, bb, Wy, Uy)
      }
      initialize(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          Wy = arguments.length > 2 ? arguments[2] : void 0,
          Uy = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = yb, this.skipNextObservers = bb, this.target = Wy, this.currentTarget = Uy, this
      }
    }
    class fy {
      constructor(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = yb, this.mask = bb, this.scope = Wy, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(yb)
      }
    }
    class Zy {
      static FromPromise(yb, bb) {
        const Wy = new Zy;
        return yb.then((yb => {
          Wy.notifyObservers(yb)
        })).catch((yb => {
          if (!bb) throw yb;
          bb.notifyObservers(yb)
        })), Wy
      }
      get observers() {
        return this._observers
      }
      constructor(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = bb, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new hy(0), yb && (this._onObserverAdded = yb)
      }
      add(yb) {
        let bb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!yb) return null;
        const hy = new fy(yb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        hy.unregisterOnNextCall = Wy, bb ? this._observers.unshift(hy) : this._observers.push(hy), this._onObserverAdded && this._onObserverAdded(hy), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(hy, this._lastNotifiedValue);
        const Zy = Uy ? new WeakRef(this) : {
          deref: () => this
        };
        return hy._remove = function() {
          let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const bb = Zy.deref();
          bb && (yb ? bb.remove(hy) : bb._remove(hy))
        }, hy
      }
      addOnce(yb) {
        return this.add(yb, void 0, void 0, void 0, !0)
      }
      remove(yb) {
        if (!yb) return !1;
        yb._remove = null;
        return -1 !== this._observers.indexOf(yb) && (this._deferUnregister(yb), !0)
      }
      removeCallback(yb, bb) {
        for (let Wy = 0; Wy < this._observers.length; Wy++) {
          const Uy = this._observers[Wy];
          if (!Uy._willBeUnregistered && (Uy.callback === yb && (!bb || bb === Uy.scope))) return this._deferUnregister(Uy), !0
        }
        return !1
      }
      _deferUnregister(yb) {
        yb._willBeUnregistered || (this._numObserversMarkedAsDeleted++, yb.unregisterOnNextCall = !1, yb._willBeUnregistered = !0, setTimeout((() => {
          this._remove(yb)
        }), 0))
      }
      _remove(yb) {
        let bb = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!yb) return !1;
        const Wy = this._observers.indexOf(yb);
        return -1 !== Wy && (bb && this._numObserversMarkedAsDeleted--, this._observers.splice(Wy, 1), !0)
      }
      makeObserverTopPriority(yb) {
        this._remove(yb, !1), this._observers.unshift(yb)
      }
      makeObserverBottomPriority(yb) {
        this._remove(yb, !1), this._observers.push(yb)
      }
      notifyObservers(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          Wy = arguments.length > 2 ? arguments[2] : void 0,
          Uy = arguments.length > 3 ? arguments[3] : void 0,
          hy = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = yb), !this._observers.length) return !0;
        const fy = this._eventState;
        fy.mask = bb, fy.target = Wy, fy.currentTarget = Uy, fy.skipNextObservers = !1, fy.lastReturnValue = yb, fy.userInfo = hy;
        for (const Zy of this._observers)
          if (!Zy._willBeUnregistered && (Zy.mask & bb && (Zy.unregisterOnNextCall && this._deferUnregister(Zy), Zy.scope ? fy.lastReturnValue = Zy.callback.apply(Zy.scope, [yb, fy]) : fy.lastReturnValue = Zy.callback(yb, fy)), fy.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(yb, bb) {
        let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = bb), yb._willBeUnregistered) return;
        const Uy = this._eventState;
        Uy.mask = Wy, Uy.skipNextObservers = !1, yb.unregisterOnNextCall && this._deferUnregister(yb), yb.callback(bb, Uy)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const yb = this._observers.pop();
          yb && (yb._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const yb = new Zy;
        return yb._observers = this._observers.slice(0), yb
      }
      hasSpecificMask() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const bb of this._observers)
          if (bb.mask & yb || bb.mask === yb) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);