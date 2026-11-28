export const id = 264;
export const ids = [264];
export const modules = {
  38651: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd
    });
    var Wd = md(38660);
    class Fd {
      static get LastCreatedEngine() {
        return 0 === this.Instances.length ? null : this.Instances[this.Instances.length - 1]
      }
      static get LastCreatedScene() {
        return this._LastCreatedScene
      }
    }
    Fd.Instances = [], Fd.OnEnginesDisposedObservable = new Wd.c, Fd._LastCreatedScene = null, Fd.UseFallbackTexture = !0, Fd.FallbackTexture = ""
  },
  38649: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd
    });
    class Wd {
      static SetMatrixPrecision(dd) {
        if (Wd.MatrixTrackPrecisionChange = !1, dd && !Wd.MatrixUse64Bits && Wd.MatrixTrackedMatrices)
          for (let Od = 0; Od < Wd.MatrixTrackedMatrices.length; ++Od) {
            const dd = Wd.MatrixTrackedMatrices[Od],
              md = dd._m;
            dd._m = new Array(16);
            for (let Od = 0; Od < 16; ++Od) dd._m[Od] = md[Od]
          }
        Wd.MatrixUse64Bits = dd, Wd.MatrixCurrentType = Wd.MatrixUse64Bits ? Array : Float32Array, Wd.MatrixTrackedMatrices = null
      }
    }
    Wd.MatrixUse64Bits = !1, Wd.MatrixTrackPrecisionChange = !0, Wd.MatrixCurrentType = Float32Array, Wd.MatrixTrackedMatrices = []
  },
  38665: (dd, Od, md) => {
    md.d(Od, {
      b: () => Kd,
      c: () => vd,
      d: () => hd,
      e: () => Wd,
      f: () => Rd,
      j: () => Xd
    });
    class Wd {}

    function Fd(dd) {
      dd.updateFlag = Wd._UpdateFlagSeed++
    }

    function Rd(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      const Fd = dd.RRd(),
        Rd = Od.RRd(),
        Xd = Fd[0],
        Kd = Fd[1],
        hd = Fd[2],
        vd = Fd[3],
        Qd = Fd[4],
        td = Fd[5],
        od = Fd[6],
        Nd = Fd[7],
        qd = Fd[8],
        Hd = Fd[9],
        yd = Fd[10],
        bd = Fd[11],
        Td = Fd[12],
        pd = Fd[13],
        Yd = Fd[14],
        gd = Fd[15],
        wd = Rd[0],
        Ed = Rd[1],
        Jd = Rd[2],
        Ud = Rd[3],
        xd = Rd[4],
        Bd = Rd[5],
        Sd = Rd[6],
        sd = Rd[7],
        ud = Rd[8],
        Vd = Rd[9],
        Ad = Rd[10],
        rd = Rd[11],
        Gd = Rd[12],
        nd = Rd[13],
        Ld = Rd[14],
        Pd = Rd[15];
      md[Wd] = Xd * wd + Kd * xd + hd * ud + vd * Gd, md[Wd + 1] = Xd * Ed + Kd * Bd + hd * Vd + vd * nd, md[Wd + 2] = Xd * Jd + Kd * Sd + hd * Ad + vd * Ld, md[Wd + 3] = Xd * Ud + Kd * sd + hd * rd + vd * Pd, md[Wd + 4] = Qd * wd + td * xd + od * ud + Nd * Gd, md[Wd + 5] = Qd * Ed + td * Bd + od * Vd + Nd * nd, md[Wd + 6] = Qd * Jd + td * Sd + od * Ad + Nd * Ld, md[Wd + 7] = Qd * Ud + td * sd + od * rd + Nd * Pd, md[Wd + 8] = qd * wd + Hd * xd + yd * ud + bd * Gd, md[Wd + 9] = qd * Ed + Hd * Bd + yd * Vd + bd * nd, md[Wd + 10] = qd * Jd + Hd * Sd + yd * Ad + bd * Ld, md[Wd + 11] = qd * Ud + Hd * sd + yd * rd + bd * Pd, md[Wd + 12] = Td * wd + pd * xd + Yd * ud + gd * Gd, md[Wd + 13] = Td * Ed + pd * Bd + Yd * Vd + gd * nd, md[Wd + 14] = Td * Jd + pd * Sd + Yd * Ad + gd * Ld, md[Wd + 15] = Td * Ud + pd * sd + Yd * rd + gd * Pd
    }

    function Xd(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
      Rd(dd, Od, md.RRd(), Wd), Fd(md)
    }

    function Kd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Wd = dd.RRd();
      Od[md] = Wd[0], Od[md + 1] = Wd[1], Od[md + 2] = Wd[2], Od[md + 3] = Wd[3], Od[md + 4] = Wd[4], Od[md + 5] = Wd[5], Od[md + 6] = Wd[6], Od[md + 7] = Wd[7], Od[md + 8] = Wd[8], Od[md + 9] = Wd[9], Od[md + 10] = Wd[10], Od[md + 11] = Wd[11], Od[md + 12] = Wd[12], Od[md + 13] = Wd[13], Od[md + 14] = Wd[14], Od[md + 15] = Wd[15]
    }

    function hd(dd, Od) {
      const md = vd(dd, Od.RRd());
      return md && Fd(Od), md
    }

    function vd(dd, Od) {
      const md = dd.RRd(),
        Wd = md[0],
        Fd = md[1],
        Rd = md[2],
        Xd = md[3],
        Kd = md[4],
        hd = md[5],
        vd = md[6],
        Qd = md[7],
        td = md[8],
        od = md[9],
        Nd = md[10],
        qd = md[11],
        Hd = md[12],
        yd = md[13],
        bd = md[14],
        Td = md[15],
        pd = Nd * Td - bd * qd,
        Yd = od * Td - yd * qd,
        gd = od * bd - yd * Nd,
        wd = td * Td - Hd * qd,
        Ed = td * bd - Nd * Hd,
        Jd = td * yd - Hd * od,
        Ud = +(hd * pd - vd * Yd + Qd * gd),
        xd = -(Kd * pd - vd * wd + Qd * Ed),
        Bd = +(Kd * Yd - hd * wd + Qd * Jd),
        Sd = -(Kd * gd - hd * Ed + vd * Jd),
        sd = Wd * Ud + Fd * xd + Rd * Bd + Xd * Sd;
      if (0 === sd) return !1;
      const ud = 1 / sd,
        Vd = vd * Td - bd * Qd,
        Ad = hd * Td - yd * Qd,
        rd = hd * bd - yd * vd,
        Gd = Kd * Td - Hd * Qd,
        nd = Kd * bd - Hd * vd,
        Ld = Kd * yd - Hd * hd,
        Pd = vd * qd - Nd * Qd,
        zd = hd * qd - od * Qd,
        cd = hd * Nd - od * vd,
        jd = Kd * qd - td * Qd,
        Dd = Kd * Nd - td * vd,
        ed = Kd * od - td * hd,
        Id = -(Fd * pd - Rd * Yd + Xd * gd),
        ld = +(Wd * pd - Rd * wd + Xd * Ed),
        Cd = -(Wd * Yd - Fd * wd + Xd * Jd),
        Zd = +(Wd * gd - Fd * Ed + Rd * Jd),
        kd = +(Fd * Vd - Rd * Ad + Xd * rd),
        fd = -(Wd * Vd - Rd * Gd + Xd * nd),
        Md = +(Wd * Ad - Fd * Gd + Xd * Ld),
        dO = -(Wd * rd - Fd * nd + Rd * Ld),
        OO = -(Fd * Pd - Rd * zd + Xd * cd),
        mO = +(Wd * Pd - Rd * jd + Xd * Dd),
        WO = -(Wd * zd - Fd * jd + Xd * ed),
        FO = +(Wd * cd - Fd * Dd + Rd * ed);
      return Od[0] = Ud * ud, Od[1] = Id * ud, Od[2] = kd * ud, Od[3] = OO * ud, Od[4] = xd * ud, Od[5] = ld * ud, Od[6] = fd * ud, Od[7] = mO * ud, Od[8] = Bd * ud, Od[9] = Cd * ud, Od[10] = Md * ud, Od[11] = WO * ud, Od[12] = Sd * ud, Od[13] = Zd * ud, Od[14] = dO * ud, Od[15] = FO * ud, !0
    }
    Wd._UpdateFlagSeed = 0
  },
  38636: (dd, Od, md) => {
    md.d(Od, {
      d: () => Hd,
      e: () => qd,
      f: () => Yd,
      h: () => bd,
      i: () => td,
      j: () => od,
      k: () => Nd
    });
    var Wd = md(38644),
      Fd = md(38647),
      Rd = md(38649),
      Xd = md(38651),
      Kd = md(38663),
      hd = md(38665),
      vd = md(38669);
    const Qd = dd => parseInt(dd.toString().replace(/\W/g, ""));
    class td {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        this.x = dd, this.y = Od
      }
      toString() {
        return `{X: ${this.x} Y: ${this.y}}`
      }
      getClassName() {
        return "Vector2"
      }
      getHashCode() {
        let dd = Qd(this.x);
        return dd = 397 * dd ^ Qd(this.y), dd
      }
      toArray(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return dd[Od] = this.x, dd[Od + 1] = this.y, this
      }
      ZQ(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return td.FromArrayToRef(dd, Od, this), this
      }
      RRd() {
        return [this.x, this.y]
      }
      Bx(dd) {
        return this.x = dd.x, this.y = dd.y, this
      }
      KOd(dd, Od) {
        return this.x = dd, this.y = Od, this
      }
      set(dd, Od) {
        return this.KOd(dd, Od)
      }
      Bdd(dd) {
        return this.KOd(dd, dd)
      }
      add(dd) {
        return new td(this.x + dd.x, this.y + dd.y)
      }
      addToRef(dd, Od) {
        return Od.x = this.x + dd.x, Od.y = this.y + dd.y, Od
      }
      addInPlace(dd) {
        return this.x += dd.x, this.y += dd.y, this
      }
      addInPlaceFromFloats(dd, Od) {
        return this.x += dd, this.y += Od, this
      }
      addVector3(dd) {
        return new td(this.x + dd.x, this.y + dd.y)
      }
      subtract(dd) {
        return new td(this.x - dd.x, this.y - dd.y)
      }
      subtractToRef(dd, Od) {
        return Od.x = this.x - dd.x, Od.y = this.y - dd.y, Od
      }
      YRd(dd) {
        return this.x -= dd.x, this.y -= dd.y, this
      }
      multiplyInPlace(dd) {
        return this.x *= dd.x, this.y *= dd.y, this
      }
      multiply(dd) {
        return new td(this.x * dd.x, this.y * dd.y)
      }
      multiplyToRef(dd, Od) {
        return Od.x = this.x * dd.x, Od.y = this.y * dd.y, Od
      }
      multiplyByFloats(dd, Od) {
        return new td(this.x * dd, this.y * Od)
      }
      divide(dd) {
        return new td(this.x / dd.x, this.y / dd.y)
      }
      divideToRef(dd, Od) {
        return Od.x = this.x / dd.x, Od.y = this.y / dd.y, Od
      }
      divideInPlace(dd) {
        return this.x = this.x / dd.x, this.y = this.y / dd.y, this
      }
      minimizeInPlace(dd) {
        return this.minimizeInPlaceFromFloats(dd.x, dd.y)
      }
      maximizeInPlace(dd) {
        return this.maximizeInPlaceFromFloats(dd.x, dd.y)
      }
      minimizeInPlaceFromFloats(dd, Od) {
        return this.x = Math.min(dd, this.x), this.y = Math.min(Od, this.y), this
      }
      maximizeInPlaceFromFloats(dd, Od) {
        return this.x = Math.max(dd, this.x), this.y = Math.max(Od, this.y), this
      }
      subtractFromFloats(dd, Od) {
        return new td(this.x - dd, this.y - Od)
      }
      subtractFromFloatsToRef(dd, Od, md) {
        return md.x = this.x - dd, md.y = this.y - Od, md
      }
      ty() {
        return new td(-this.x, -this.y)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this
      }
      negateToRef(dd) {
        return dd.x = -this.x, dd.y = -this.y, dd
      }
      scaleInPlace(dd) {
        return this.x *= dd, this.y *= dd, this
      }
      scale(dd) {
        return new td(this.x * dd, this.y * dd)
      }
      scaleToRef(dd, Od) {
        return Od.x = this.x * dd, Od.y = this.y * dd, Od
      }
      scaleAndAddToRef(dd, Od) {
        return Od.x += this.x * dd, Od.y += this.y * dd, Od
      }
      equals(dd) {
        return dd && this.x === dd.x && this.y === dd.y
      }
      equalsWithEpsilon(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wd.b;
        return dd && (0, Kd.WithinEpsilon)(this.x, dd.x, Od) && (0, Kd.WithinEpsilon)(this.y, dd.y, Od)
      }
      Qhd(dd, Od) {
        return this.x === dd && this.y === Od
      }
      floor() {
        return new td(Math.floor(this.x), Math.floor(this.y))
      }
      floorToRef(dd) {
        return dd.x = Math.floor(this.x), dd.y = Math.floor(this.y), dd
      }
      fract() {
        return new td(this.x - Math.floor(this.x), this.y - Math.floor(this.y))
      }
      fractToRef(dd) {
        return dd.x = this.x - Math.floor(this.x), dd.y = this.y - Math.floor(this.y), dd
      }
      rotate(dd) {
        return this.rotateToRef(dd, new td)
      }
      rotateToRef(dd, Od) {
        const md = Math.cos(dd),
          Wd = Math.sin(dd);
        return Od.x = md * this.x - Wd * this.y, Od.y = Wd * this.x + md * this.y, Od
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
      normalizeFromLength(dd) {
        return 0 === dd || 1 === dd ? this : this.scaleInPlace(1 / dd)
      }
      normalizeToNew() {
        const dd = new td;
        return this.normalizeToRef(dd), dd
      }
      normalizeToRef(dd) {
        const Od = this.length();
        return 0 === Od || 1 === Od ? (dd.x = this.x, dd.y = this.y, dd) : this.scaleToRef(1 / Od, dd)
      }
      clone() {
        return new td(this.x, this.y)
      }
      dot(dd) {
        return this.x * dd.x + this.y * dd.y
      }
      static Zero() {
        return new td(0, 0)
      }
      static One() {
        return new td(1, 1)
      }
      static Random() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new td((0, Kd.RandomRange)(dd, Od), (0, Kd.RandomRange)(dd, Od))
      }
      static RandomToRef() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).KOd((0, Kd.RandomRange)(dd, Od), (0, Kd.RandomRange)(dd, Od))
      }
      static get ZeroReadOnly() {
        return td._ZeroReadOnly
      }
      static FromArray(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new td(dd[Od], dd[Od + 1])
      }
      static FromArrayToRef(dd, Od, md) {
        return md.x = dd[Od], md.y = dd[Od + 1], md
      }
      static FromFloatsToRef(dd, Od, md) {
        return md.KOd(dd, Od), md
      }
      static CatmullRom(dd, Od, md, Wd, Fd) {
        const Rd = Fd * Fd,
          Xd = Fd * Rd,
          Kd = .5 * (2 * Od.x + (-dd.x + md.x) * Fd + (2 * dd.x - 5 * Od.x + 4 * md.x - Wd.x) * Rd + (-dd.x + 3 * Od.x - 3 * md.x + Wd.x) * Xd),
          hd = .5 * (2 * Od.y + (-dd.y + md.y) * Fd + (2 * dd.y - 5 * Od.y + 4 * md.y - Wd.y) * Rd + (-dd.y + 3 * Od.y - 3 * md.y + Wd.y) * Xd);
        return new td(Kd, hd)
      }
      static ClampToRef(dd, Od, md, Wd) {
        return Wd.x = (0, Kd.Clamp)(dd.x, Od.x, md.x), Wd.y = (0, Kd.Clamp)(dd.y, Od.y, md.y), Wd
      }
      static Clamp(dd, Od, md) {
        const Wd = (0, Kd.Clamp)(dd.x, Od.x, md.x),
          Fd = (0, Kd.Clamp)(dd.y, Od.y, md.y);
        return new td(Wd, Fd)
      }
      static Hermite(dd, Od, md, Wd, Fd) {
        const Rd = Fd * Fd,
          Xd = Fd * Rd,
          Kd = 2 * Xd - 3 * Rd + 1,
          hd = -2 * Xd + 3 * Rd,
          vd = Xd - 2 * Rd + Fd,
          Qd = Xd - Rd,
          od = dd.x * Kd + md.x * hd + Od.x * vd + Wd.x * Qd,
          Nd = dd.y * Kd + md.y * hd + Od.y * vd + Wd.y * Qd;
        return new td(od, Nd)
      }
      static Hermite1stDerivative(dd, Od, md, Wd, Fd) {
        return this.Hermite1stDerivativeToRef(dd, Od, md, Wd, Fd, new td)
      }
      static Hermite1stDerivativeToRef(dd, Od, md, Wd, Fd, Rd) {
        const Xd = Fd * Fd;
        return Rd.x = 6 * (Xd - Fd) * dd.x + (3 * Xd - 4 * Fd + 1) * Od.x + 6 * (-Xd + Fd) * md.x + (3 * Xd - 2 * Fd) * Wd.x, Rd.y = 6 * (Xd - Fd) * dd.y + (3 * Xd - 4 * Fd + 1) * Od.y + 6 * (-Xd + Fd) * md.y + (3 * Xd - 2 * Fd) * Wd.y, Rd
      }
      static Lerp(dd, Od, md) {
        return td.LerpToRef(dd, Od, md, new td)
      }
      static LerpToRef(dd, Od, md, Wd) {
        return Wd.x = dd.x + (Od.x - dd.x) * md, Wd.y = dd.y + (Od.y - dd.y) * md, Wd
      }
      static Dot(dd, Od) {
        return dd.x * Od.x + dd.y * Od.y
      }
      static Normalize(dd) {
        return td.NormalizeToRef(dd, new td)
      }
      static NormalizeToRef(dd, Od) {
        return dd.normalizeToRef(Od), Od
      }
      static Minimize(dd, Od) {
        const md = dd.x < Od.x ? dd.x : Od.x,
          Wd = dd.y < Od.y ? dd.y : Od.y;
        return new td(md, Wd)
      }
      static Maximize(dd, Od) {
        const md = dd.x > Od.x ? dd.x : Od.x,
          Wd = dd.y > Od.y ? dd.y : Od.y;
        return new td(md, Wd)
      }
      static Transform(dd, Od) {
        return td.TransformToRef(dd, Od, new td)
      }
      static TransformToRef(dd, Od, md) {
        const Wd = Od.m,
          Fd = dd.x * Wd[0] + dd.y * Wd[4] + Wd[12],
          Rd = dd.x * Wd[1] + dd.y * Wd[5] + Wd[13];
        return md.x = Fd, md.y = Rd, md
      }
      static PointInTriangle(dd, Od, md, Wd) {
        const Fd = .5 * (-md.y * Wd.x + Od.y * (-md.x + Wd.x) + Od.x * (md.y - Wd.y) + md.x * Wd.y),
          Rd = Fd < 0 ? -1 : 1,
          Xd = (Od.y * Wd.x - Od.x * Wd.y + (Wd.y - Od.y) * dd.x + (Od.x - Wd.x) * dd.y) * Rd,
          Kd = (Od.x * md.y - Od.y * md.x + (Od.y - md.y) * dd.x + (md.x - Od.x) * dd.y) * Rd;
        return Xd > 0 && Kd > 0 && Xd + Kd < 2 * Fd * Rd
      }
      static Distance(dd, Od) {
        return Math.sqrt(td.DistanceSquared(dd, Od))
      }
      static DistanceSquared(dd, Od) {
        const md = dd.x - Od.x,
          Wd = dd.y - Od.y;
        return md * md + Wd * Wd
      }
      static Center(dd, Od) {
        return td.CenterToRef(dd, Od, new td)
      }
      static CenterToRef(dd, Od, md) {
        return md.KOd((dd.x + Od.x) / 2, (dd.y + Od.y) / 2)
      }
      static DistanceOfPointFromSegment(dd, Od, md) {
        const Wd = td.DistanceSquared(Od, md);
        if (0 === Wd) return td.Distance(dd, Od);
        const Fd = md.subtract(Od),
          Rd = Math.max(0, Math.min(1, td.Dot(dd.subtract(Od), Fd) / Wd)),
          Xd = Od.add(Fd.multiplyByFloats(Rd, Rd));
        return td.Distance(dd, Xd)
      }
    }
    td._V8PerformanceHack = new td(.5, .5), td._ZeroReadOnly = td.Zero();
    class od {
      get x() {
        return this._x
      }
      set x(dd) {
        this._x = dd, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(dd) {
        this._y = dd, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(dd) {
        this._z = dd, this._isDirty = !0
      }
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
        this._isDirty = !0, this._x = dd, this._y = Od, this._z = md
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z}}`
      }
      getClassName() {
        return "Cq"
      }
      getHashCode() {
        let dd = Qd(this._x);
        return dd = 397 * dd ^ Qd(this._y), dd = 397 * dd ^ Qd(this._z), dd
      }
      RRd() {
        return [this._x, this._y, this._z]
      }
      toArray(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return dd[Od] = this._x, dd[Od + 1] = this._y, dd[Od + 2] = this._z, this
      }
      ZQ(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return od.FromArrayToRef(dd, Od, this), this
      }
      toQuaternion() {
        return qd.RotationYawPitchRoll(this._y, this._x, this._z)
      }
      addInPlace(dd) {
        return this._x += dd._x, this._y += dd._y, this._z += dd._z, this._isDirty = !0, this
      }
      addInPlaceFromFloats(dd, Od, md) {
        return this._x += dd, this._y += Od, this._z += md, this._isDirty = !0, this
      }
      add(dd) {
        return new od(this._x + dd._x, this._y + dd._y, this._z + dd._z)
      }
      addToRef(dd, Od) {
        return Od._x = this._x + dd._x, Od._y = this._y + dd._y, Od._z = this._z + dd._z, Od._isDirty = !0, Od
      }
      YRd(dd) {
        return this._x -= dd._x, this._y -= dd._y, this._z -= dd._z, this._isDirty = !0, this
      }
      subtract(dd) {
        return new od(this._x - dd._x, this._y - dd._y, this._z - dd._z)
      }
      subtractToRef(dd, Od) {
        return this.subtractFromFloatsToRef(dd._x, dd._y, dd._z, Od)
      }
      subtractFromFloats(dd, Od, md) {
        return new od(this._x - dd, this._y - Od, this._z - md)
      }
      subtractFromFloatsToRef(dd, Od, md, Wd) {
        return Wd._x = this._x - dd, Wd._y = this._y - Od, Wd._z = this._z - md, Wd._isDirty = !0, Wd
      }
      ty() {
        return new od(-this._x, -this._y, -this._z)
      }
      negateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      negateToRef(dd) {
        return dd._x = -1 * this._x, dd._y = -1 * this._y, dd._z = -1 * this._z, dd._isDirty = !0, dd
      }
      scaleInPlace(dd) {
        return this._x *= dd, this._y *= dd, this._z *= dd, this._isDirty = !0, this
      }
      scale(dd) {
        return new od(this._x * dd, this._y * dd, this._z * dd)
      }
      scaleToRef(dd, Od) {
        return Od._x = this._x * dd, Od._y = this._y * dd, Od._z = this._z * dd, Od._isDirty = !0, Od
      }
      getNormalToRef(dd) {
        const Od = this.length();
        let md = Math.acos(this._y / Od);
        const Wd = Math.atan2(this._z, this._x);
        md > Math.PI / 2 ? md -= Math.PI / 2 : md += Math.PI / 2;
        const Fd = Od * Math.sin(md) * Math.cos(Wd),
          Rd = Od * Math.cos(md),
          Xd = Od * Math.sin(md) * Math.sin(Wd);
        return dd.set(Fd, Rd, Xd), dd
      }
      applyRotationQuaternionToRef(dd, Od) {
        const md = this._x,
          Wd = this._y,
          Fd = this._z,
          Rd = dd._x,
          Xd = dd._y,
          Kd = dd._z,
          hd = dd._w,
          vd = 2 * (Xd * Fd - Kd * Wd),
          Qd = 2 * (Kd * md - Rd * Fd),
          td = 2 * (Rd * Wd - Xd * md);
        return Od._x = md + hd * vd + Xd * td - Kd * Qd, Od._y = Wd + hd * Qd + Kd * vd - Rd * td, Od._z = Fd + hd * td + Rd * Qd - Xd * vd, Od._isDirty = !0, Od
      }
      applyRotationQuaternionInPlace(dd) {
        return this.applyRotationQuaternionToRef(dd, this)
      }
      applyRotationQuaternion(dd) {
        return this.applyRotationQuaternionToRef(dd, new od)
      }
      scaleAndAddToRef(dd, Od) {
        return Od._x += this._x * dd, Od._y += this._y * dd, Od._z += this._z * dd, Od._isDirty = !0, Od
      }
      projectOnPlane(dd, Od) {
        return this.projectOnPlaneToRef(dd, Od, new od)
      }
      projectOnPlaneToRef(dd, Od, md) {
        const Wd = dd.normal,
          Fd = dd.d,
          Rd = yd.Cq[0];
        this.subtractToRef(Od, Rd), Rd.normalize();
        const Xd = od.Dot(Rd, Wd);
        if (Math.abs(Xd) < 1e-10) md.Bdd(1 / 0);
        else {
          const dd = -(od.Dot(Od, Wd) + Fd) / Xd,
            Kd = Rd.scaleInPlace(dd);
          Od.addToRef(Kd, md)
        }
        return md
      }
      equals(dd) {
        return dd && this._x === dd._x && this._y === dd._y && this._z === dd._z
      }
      equalsWithEpsilon(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wd.b;
        return dd && (0, Kd.WithinEpsilon)(this._x, dd._x, Od) && (0, Kd.WithinEpsilon)(this._y, dd._y, Od) && (0, Kd.WithinEpsilon)(this._z, dd._z, Od)
      }
      Qhd(dd, Od, md) {
        return this._x === dd && this._y === Od && this._z === md
      }
      multiplyInPlace(dd) {
        return this._x *= dd._x, this._y *= dd._y, this._z *= dd._z, this._isDirty = !0, this
      }
      multiply(dd) {
        return this.multiplyByFloats(dd._x, dd._y, dd._z)
      }
      multiplyToRef(dd, Od) {
        return Od._x = this._x * dd._x, Od._y = this._y * dd._y, Od._z = this._z * dd._z, Od._isDirty = !0, Od
      }
      multiplyByFloats(dd, Od, md) {
        return new od(this._x * dd, this._y * Od, this._z * md)
      }
      divide(dd) {
        return new od(this._x / dd._x, this._y / dd._y, this._z / dd._z)
      }
      divideToRef(dd, Od) {
        return Od._x = this._x / dd._x, Od._y = this._y / dd._y, Od._z = this._z / dd._z, Od._isDirty = !0, Od
      }
      divideInPlace(dd) {
        return this._x = this._x / dd._x, this._y = this._y / dd._y, this._z = this._z / dd._z, this._isDirty = !0, this
      }
      minimizeInPlace(dd) {
        return this.minimizeInPlaceFromFloats(dd._x, dd._y, dd._z)
      }
      maximizeInPlace(dd) {
        return this.maximizeInPlaceFromFloats(dd._x, dd._y, dd._z)
      }
      minimizeInPlaceFromFloats(dd, Od, md) {
        return dd < this._x && (this.x = dd), Od < this._y && (this.y = Od), md < this._z && (this.z = md), this
      }
      maximizeInPlaceFromFloats(dd, Od, md) {
        return dd > this._x && (this.x = dd), Od > this._y && (this.y = Od), md > this._z && (this.z = md), this
      }
      isNonUniformWithinEpsilon(dd) {
        const Od = Math.abs(this._x),
          md = Math.abs(this._y);
        if (!(0, Kd.WithinEpsilon)(Od, md, dd)) return !0;
        const Wd = Math.abs(this._z);
        return !(0, Kd.WithinEpsilon)(Od, Wd, dd) || !(0, Kd.WithinEpsilon)(md, Wd, dd)
      }
      get isNonUniform() {
        const dd = Math.abs(this._x);
        if (dd !== Math.abs(this._y)) return !0;
        return dd !== Math.abs(this._z)
      }
      floorToRef(dd) {
        return dd._x = Math.floor(this._x), dd._y = Math.floor(this._y), dd._z = Math.floor(this._z), dd._isDirty = !0, dd
      }
      floor() {
        return new od(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z))
      }
      fractToRef(dd) {
        return dd._x = this._x - Math.floor(this._x), dd._y = this._y - Math.floor(this._y), dd._z = this._z - Math.floor(this._z), dd._isDirty = !0, dd
      }
      fract() {
        return new od(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z))
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
      reorderInPlace(dd) {
        if ("xyz" === (dd = dd.toLowerCase())) return this;
        const Od = yd.Cq[0].Bx(this);
        return this.x = Od[dd[0]], this.y = Od[dd[1]], this.z = Od[dd[2]], this
      }
      rotateByQuaternionToRef(dd, Od) {
        return dd.toRotationMatrix(yd.Matrix[0]), od.TransformCoordinatesToRef(this, yd.Matrix[0], Od), Od
      }
      rotateByQuaternionAroundPointToRef(dd, Od, md) {
        return this.subtractToRef(Od, yd.Cq[0]), yd.Cq[0].rotateByQuaternionToRef(dd, yd.Cq[0]), Od.addToRef(yd.Cq[0], md), md
      }
      cross(dd) {
        return od.CrossToRef(this, dd, new od)
      }
      normalizeFromLength(dd) {
        return 0 === dd || 1 === dd ? this : this.scaleInPlace(1 / dd)
      }
      normalizeToNew() {
        return this.normalizeToRef(new od)
      }
      normalizeToRef(dd) {
        const Od = this.length();
        return 0 === Od || 1 === Od ? (dd._x = this._x, dd._y = this._y, dd._z = this._z, dd._isDirty = !0, dd) : this.scaleToRef(1 / Od, dd)
      }
      clone() {
        return new od(this._x, this._y, this._z)
      }
      Bx(dd) {
        return this.KOd(dd._x, dd._y, dd._z)
      }
      KOd(dd, Od, md) {
        return this._x = dd, this._y = Od, this._z = md, this._isDirty = !0, this
      }
      set(dd, Od, md) {
        return this.KOd(dd, Od, md)
      }
      Bdd(dd) {
        return this._x = this._y = this._z = dd, this._isDirty = !0, this
      }
      static GetClipFactor(dd, Od, md, Wd) {
        const Fd = od.Dot(dd, md);
        return (Fd - Wd) / (Fd - od.Dot(Od, md))
      }
      static GetAngleBetweenVectors(dd, Od, md) {
        const Wd = dd.normalizeToRef(yd.Cq[1]),
          Fd = Od.normalizeToRef(yd.Cq[2]);
        let Rd = od.Dot(Wd, Fd);
        Rd = (0, Kd.Clamp)(Rd, -1, 1);
        const Xd = Math.acos(Rd),
          hd = yd.Cq[3];
        return od.CrossToRef(Wd, Fd, hd), od.Dot(hd, md) > 0 ? isNaN(Xd) ? 0 : Xd : isNaN(Xd) ? -Math.PI : -Math.acos(Rd)
      }
      static GetAngleBetweenVectorsOnPlane(dd, Od, md) {
        yd.Cq[0].Bx(dd);
        const Wd = yd.Cq[0];
        yd.Cq[1].Bx(Od);
        const Fd = yd.Cq[1];
        yd.Cq[2].Bx(md);
        const Rd = yd.Cq[2],
          Xd = yd.Cq[3],
          hd = yd.Cq[4];
        Wd.normalize(), Fd.normalize(), Rd.normalize(), od.CrossToRef(Rd, Wd, Xd), od.CrossToRef(Xd, Rd, hd);
        const vd = Math.atan2(od.Dot(Fd, Xd), od.Dot(Fd, hd));
        return (0, Kd.NormalizeRadians)(vd)
      }
      static PitchYawRollToMoveBetweenPointsToRef(dd, Od, md) {
        const Wd = bd.Cq[0];
        return Od.subtractToRef(dd, Wd), md._y = Math.atan2(Wd.x, Wd.z) || 0, md._x = Math.atan2(Math.sqrt(Wd.x ** 2 + Wd.z ** 2), Wd.y) || 0, md._z = 0, md._isDirty = !0, md
      }
      static PitchYawRollToMoveBetweenPoints(dd, Od) {
        const md = od.Zero();
        return od.PitchYawRollToMoveBetweenPointsToRef(dd, Od, md)
      }
      static SlerpToRef(dd, Od, md, Fd) {
        md = (0, Kd.Clamp)(md, 0, 1);
        const Rd = yd.Cq[0],
          Xd = yd.Cq[1];
        Rd.Bx(dd);
        const hd = Rd.length();
        Rd.normalizeFromLength(hd), Xd.Bx(Od);
        const vd = Xd.length();
        Xd.normalizeFromLength(vd);
        const Qd = od.Dot(Rd, Xd);
        let td, Nd;
        if (Qd < 1 - Wd.b) {
          const dd = Math.acos(Qd),
            Od = 1 / Math.sin(dd);
          td = Math.sin((1 - md) * dd) * Od, Nd = Math.sin(md * dd) * Od
        } else td = 1 - md, Nd = md;
        return Rd.scaleInPlace(td), Xd.scaleInPlace(Nd), Fd.Bx(Rd).addInPlace(Xd), Fd.scaleInPlace((0, Kd.Lerp)(hd, vd, md)), Fd
      }
      static SmoothToRef(dd, Od, md, Wd, Fd) {
        return od.SlerpToRef(dd, Od, 0 === Wd ? 1 : md / Wd, Fd), Fd
      }
      static FromArray(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new od(dd[Od], dd[Od + 1], dd[Od + 2])
      }
      static FromFloatArray(dd, Od) {
        return od.FromArray(dd, Od)
      }
      static FromArrayToRef(dd, Od, md) {
        return md._x = dd[Od], md._y = dd[Od + 1], md._z = dd[Od + 2], md._isDirty = !0, md
      }
      static FromFloatArrayToRef(dd, Od, md) {
        return od.FromArrayToRef(dd, Od, md)
      }
      static FromFloatsToRef(dd, Od, md, Wd) {
        return Wd.KOd(dd, Od, md), Wd
      }
      static Zero() {
        return new od(0, 0, 0)
      }
      static One() {
        return new od(1, 1, 1)
      }
      static Up() {
        return new od(0, 1, 0)
      }
      static get UpReadOnly() {
        return od._UpReadOnly
      }
      static get DownReadOnly() {
        return od._DownReadOnly
      }
      static get RightReadOnly() {
        return od._RightReadOnly
      }
      static get LeftReadOnly() {
        return od._LeftReadOnly
      }
      static get LeftHandedForwardReadOnly() {
        return od._LeftHandedForwardReadOnly
      }
      static get RightHandedForwardReadOnly() {
        return od._RightHandedForwardReadOnly
      }
      static get LeftHandedBackwardReadOnly() {
        return od._LeftHandedBackwardReadOnly
      }
      static get RightHandedBackwardReadOnly() {
        return od._RightHandedBackwardReadOnly
      }
      static get ZeroReadOnly() {
        return od._ZeroReadOnly
      }
      static get OneReadOnly() {
        return od._OneReadOnly
      }
      static Down() {
        return new od(0, -1, 0)
      }
      static Forward() {
        return new od(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? -1 : 1)
      }
      static Backward() {
        return new od(0, 0, arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? 1 : -1)
      }
      static Right() {
        return new od(1, 0, 0)
      }
      static Left() {
        return new od(-1, 0, 0)
      }
      static Random() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new od((0, Kd.RandomRange)(dd, Od), (0, Kd.RandomRange)(dd, Od), (0, Kd.RandomRange)(dd, Od))
      }
      static RandomToRef() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).KOd((0, Kd.RandomRange)(dd, Od), (0, Kd.RandomRange)(dd, Od), (0, Kd.RandomRange)(dd, Od))
      }
      static TransformCoordinates(dd, Od) {
        const md = od.Zero();
        return od.TransformCoordinatesToRef(dd, Od, md), md
      }
      static TransformCoordinatesToRef(dd, Od, md) {
        return od.TransformCoordinatesFromFloatsToRef(dd._x, dd._y, dd._z, Od, md), md
      }
      static TransformCoordinatesFromFloatsToRef(dd, Od, md, Wd, Fd) {
        const Rd = Wd.m,
          Xd = dd * Rd[0] + Od * Rd[4] + md * Rd[8] + Rd[12],
          Kd = dd * Rd[1] + Od * Rd[5] + md * Rd[9] + Rd[13],
          hd = dd * Rd[2] + Od * Rd[6] + md * Rd[10] + Rd[14],
          vd = 1 / (dd * Rd[3] + Od * Rd[7] + md * Rd[11] + Rd[15]);
        return Fd._x = Xd * vd, Fd._y = Kd * vd, Fd._z = hd * vd, Fd._isDirty = !0, Fd
      }
      static TransformNormal(dd, Od) {
        const md = od.Zero();
        return od.TransformNormalToRef(dd, Od, md), md
      }
      static TransformNormalToRef(dd, Od, md) {
        return this.TransformNormalFromFloatsToRef(dd._x, dd._y, dd._z, Od, md), md
      }
      static TransformNormalFromFloatsToRef(dd, Od, md, Wd, Fd) {
        const Rd = Wd.m;
        return Fd._x = dd * Rd[0] + Od * Rd[4] + md * Rd[8], Fd._y = dd * Rd[1] + Od * Rd[5] + md * Rd[9], Fd._z = dd * Rd[2] + Od * Rd[6] + md * Rd[10], Fd._isDirty = !0, Fd
      }
      static CatmullRom(dd, Od, md, Wd, Fd) {
        const Rd = Fd * Fd,
          Xd = Fd * Rd,
          Kd = .5 * (2 * Od._x + (-dd._x + md._x) * Fd + (2 * dd._x - 5 * Od._x + 4 * md._x - Wd._x) * Rd + (-dd._x + 3 * Od._x - 3 * md._x + Wd._x) * Xd),
          hd = .5 * (2 * Od._y + (-dd._y + md._y) * Fd + (2 * dd._y - 5 * Od._y + 4 * md._y - Wd._y) * Rd + (-dd._y + 3 * Od._y - 3 * md._y + Wd._y) * Xd),
          vd = .5 * (2 * Od._z + (-dd._z + md._z) * Fd + (2 * dd._z - 5 * Od._z + 4 * md._z - Wd._z) * Rd + (-dd._z + 3 * Od._z - 3 * md._z + Wd._z) * Xd);
        return new od(Kd, hd, vd)
      }
      static Clamp(dd, Od, md) {
        const Wd = new od;
        return od.ClampToRef(dd, Od, md, Wd), Wd
      }
      static ClampToRef(dd, Od, md, Wd) {
        let Fd = dd._x;
        Fd = Fd > md._x ? md._x : Fd, Fd = Fd < Od._x ? Od._x : Fd;
        let Rd = dd._y;
        Rd = Rd > md._y ? md._y : Rd, Rd = Rd < Od._y ? Od._y : Rd;
        let Xd = dd._z;
        return Xd = Xd > md._z ? md._z : Xd, Xd = Xd < Od._z ? Od._z : Xd, Wd.KOd(Fd, Rd, Xd), Wd
      }
      static CheckExtends(dd, Od, md) {
        Od.minimizeInPlace(dd), md.maximizeInPlace(dd)
      }
      static Hermite(dd, Od, md, Wd, Fd) {
        const Rd = Fd * Fd,
          Xd = Fd * Rd,
          Kd = 2 * Xd - 3 * Rd + 1,
          hd = -2 * Xd + 3 * Rd,
          vd = Xd - 2 * Rd + Fd,
          Qd = Xd - Rd,
          td = dd._x * Kd + md._x * hd + Od._x * vd + Wd._x * Qd,
          Nd = dd._y * Kd + md._y * hd + Od._y * vd + Wd._y * Qd,
          qd = dd._z * Kd + md._z * hd + Od._z * vd + Wd._z * Qd;
        return new od(td, Nd, qd)
      }
      static Hermite1stDerivative(dd, Od, md, Wd, Fd) {
        const Rd = new od;
        return this.Hermite1stDerivativeToRef(dd, Od, md, Wd, Fd, Rd), Rd
      }
      static Hermite1stDerivativeToRef(dd, Od, md, Wd, Fd, Rd) {
        const Xd = Fd * Fd;
        return Rd._x = 6 * (Xd - Fd) * dd._x + (3 * Xd - 4 * Fd + 1) * Od._x + 6 * (-Xd + Fd) * md._x + (3 * Xd - 2 * Fd) * Wd._x, Rd._y = 6 * (Xd - Fd) * dd._y + (3 * Xd - 4 * Fd + 1) * Od._y + 6 * (-Xd + Fd) * md._y + (3 * Xd - 2 * Fd) * Wd._y, Rd._z = 6 * (Xd - Fd) * dd._z + (3 * Xd - 4 * Fd + 1) * Od._z + 6 * (-Xd + Fd) * md._z + (3 * Xd - 2 * Fd) * Wd._z, Rd._isDirty = !0, Rd
      }
      static Lerp(dd, Od, md) {
        const Wd = new od(0, 0, 0);
        return od.LerpToRef(dd, Od, md, Wd), Wd
      }
      static LerpToRef(dd, Od, md, Wd) {
        return Wd._x = dd._x + (Od._x - dd._x) * md, Wd._y = dd._y + (Od._y - dd._y) * md, Wd._z = dd._z + (Od._z - dd._z) * md, Wd._isDirty = !0, Wd
      }
      static Dot(dd, Od) {
        return dd._x * Od._x + dd._y * Od._y + dd._z * Od._z
      }
      dot(dd) {
        return this._x * dd._x + this._y * dd._y + this._z * dd._z
      }
      static Cross(dd, Od) {
        const md = new od;
        return od.CrossToRef(dd, Od, md), md
      }
      static CrossToRef(dd, Od, md) {
        const Wd = dd._y * Od._z - dd._z * Od._y,
          Fd = dd._z * Od._x - dd._x * Od._z,
          Rd = dd._x * Od._y - dd._y * Od._x;
        return md.KOd(Wd, Fd, Rd), md
      }
      static Normalize(dd) {
        const Od = od.Zero();
        return od.NormalizeToRef(dd, Od), Od
      }
      static NormalizeToRef(dd, Od) {
        return dd.normalizeToRef(Od), Od
      }
      static Project(dd, Od, md, Wd) {
        const Fd = new od;
        return od.ProjectToRef(dd, Od, md, Wd, Fd), Fd
      }
      static ProjectToRef(dd, Od, md, Wd, Fd) {
        const Rd = Wd.width,
          Kd = Wd.height,
          hd = Wd.x,
          vd = Wd.y,
          Qd = yd.Matrix[1],
          td = Xd.e.LastCreatedEngine?.isNDCHalfZRange,
          Nd = td ? 1 : .5,
          qd = td ? 0 : .5;
        Hd.FromValuesToRef(Rd / 2, 0, 0, 0, 0, -Kd / 2, 0, 0, 0, 0, Nd, 0, hd + Rd / 2, Kd / 2 + vd, qd, 1, Qd);
        const bd = yd.Matrix[0];
        return Od.multiplyToRef(md, bd), bd.multiplyToRef(Qd, bd), od.TransformCoordinatesToRef(dd, bd, Fd), Fd
      }
      static Reflect(dd, Od) {
        return this.ReflectToRef(dd, Od, new od)
      }
      static ReflectToRef(dd, Od, md) {
        const Wd = bd.Cq[0];
        return Wd.Bx(Od).scaleInPlace(2 * od.Dot(dd, Od)), md.Bx(dd).YRd(Wd)
      }
      static UnprojectFromTransform(dd, Od, md, Wd, Fd) {
        return this.Unproject(dd, Od, md, Wd, Fd, Hd.IdentityReadOnly)
      }
      static Unproject(dd, Od, md, Wd, Fd, Rd) {
        const Xd = new od;
        return od.UnprojectToRef(dd, Od, md, Wd, Fd, Rd, Xd), Xd
      }
      static UnprojectToRef(dd, Od, md, Wd, Fd, Rd, Xd) {
        return od.UnprojectFloatsToRef(dd._x, dd._y, dd._z, Od, md, Wd, Fd, Rd, Xd), Xd
      }
      static UnprojectFloatsToRef(dd, Od, md, Wd, Fd, Rd, Kd, hd, vd) {
        const Qd = yd.Matrix[0];
        Rd.multiplyToRef(Kd, Qd), Qd.multiplyToRef(hd, Qd), Qd.invert();
        const td = yd.Cq[0];
        return td.x = dd / Wd * 2 - 1, td.y = -(Od / Fd * 2 - 1), Xd.e.LastCreatedEngine?.isNDCHalfZRange ? td.z = md : td.z = 2 * md - 1, od.TransformCoordinatesToRef(td, Qd, vd), vd
      }
      static Minimize(dd, Od) {
        const md = new od;
        return md.Bx(dd), md.minimizeInPlace(Od), md
      }
      static Maximize(dd, Od) {
        const md = new od;
        return md.Bx(dd), md.maximizeInPlace(Od), md
      }
      static Distance(dd, Od) {
        return Math.sqrt(od.DistanceSquared(dd, Od))
      }
      static DistanceSquared(dd, Od) {
        const md = dd._x - Od._x,
          Wd = dd._y - Od._y,
          Fd = dd._z - Od._z;
        return md * md + Wd * Wd + Fd * Fd
      }
      static ProjectOnTriangleToRef(dd, Od, md, Fd, Rd) {
        const Xd = yd.Cq[0],
          hd = yd.Cq[1],
          vd = yd.Cq[2],
          Qd = yd.Cq[3],
          td = yd.Cq[4];
        md.subtractToRef(Od, Xd), Fd.subtractToRef(Od, hd), Fd.subtractToRef(md, vd);
        const Nd = Xd.length(),
          qd = hd.length(),
          Hd = vd.length();
        if (Nd < Wd.b || qd < Wd.b || Hd < Wd.b) return Rd.Bx(Od), od.Distance(dd, Od);
        dd.subtractToRef(Od, td), od.CrossToRef(Xd, hd, Qd);
        const bd = Qd.length();
        if (bd < Wd.b) return Rd.Bx(Od), od.Distance(dd, Od);
        Qd.normalizeFromLength(bd);
        let Td = td.length();
        if (Td < Wd.b) return Rd.Bx(Od), 0;
        td.normalizeFromLength(Td);
        const pd = od.Dot(Qd, td),
          Yd = yd.Cq[5],
          gd = yd.Cq[6];
        Yd.Bx(Qd).scaleInPlace(-Td * pd), gd.Bx(dd).addInPlace(Yd);
        const wd = yd.Cq[4],
          Ed = yd.Cq[5],
          Jd = yd.Cq[7],
          Ud = yd.Cq[8];
        wd.Bx(Xd).scaleInPlace(1 / Nd), Ud.Bx(hd).scaleInPlace(1 / qd), wd.addInPlace(Ud).scaleInPlace(-1), Ed.Bx(Xd).scaleInPlace(-1 / Nd), Ud.Bx(vd).scaleInPlace(1 / Hd), Ed.addInPlace(Ud).scaleInPlace(-1), Jd.Bx(vd).scaleInPlace(-1 / Hd), Ud.Bx(hd).scaleInPlace(-1 / qd), Jd.addInPlace(Ud).scaleInPlace(-1);
        const xd = yd.Cq[9];
        let Bd;
        xd.Bx(gd).YRd(Od), od.CrossToRef(wd, xd, Ud), Bd = od.Dot(Ud, Qd);
        const Sd = Bd;
        xd.Bx(gd).YRd(md), od.CrossToRef(Ed, xd, Ud), Bd = od.Dot(Ud, Qd);
        const sd = Bd;
        xd.Bx(gd).YRd(Fd), od.CrossToRef(Jd, xd, Ud), Bd = od.Dot(Ud, Qd);
        const ud = Bd,
          Vd = yd.Cq[10];
        let Ad, rd;
        Sd > 0 && sd < 0 ? (Vd.Bx(Xd), Ad = Od, rd = md) : sd > 0 && ud < 0 ? (Vd.Bx(vd), Ad = md, rd = Fd) : (Vd.Bx(hd).scaleInPlace(-1), Ad = Fd, rd = Od);
        const Gd = yd.Cq[9],
          nd = yd.Cq[4];
        Ad.subtractToRef(gd, Ud), rd.subtractToRef(gd, Gd), od.CrossToRef(Ud, Gd, nd);
        if (!(od.Dot(nd, Qd) < 0)) return Rd.Bx(gd), Math.abs(Td * pd);
        const Ld = yd.Cq[5];
        od.CrossToRef(Vd, nd, Ld), Ld.normalize();
        const Pd = yd.Cq[9];
        Pd.Bx(Ad).YRd(gd);
        const zd = Pd.length();
        if (zd < Wd.b) return Rd.Bx(Ad), od.Distance(dd, Ad);
        Pd.normalizeFromLength(zd);
        const cd = od.Dot(Ld, Pd),
          jd = yd.Cq[7];
        jd.Bx(gd).addInPlace(Ld.scaleInPlace(zd * cd)), Ud.Bx(jd).YRd(Ad), Td = Vd.length(), Vd.normalizeFromLength(Td);
        let Dd = od.Dot(Ud, Vd) / Math.max(Td, Wd.b);
        return Dd = (0, Kd.Clamp)(Dd, 0, 1), jd.Bx(Ad).addInPlace(Vd.scaleInPlace(Dd * Td)), Rd.Bx(jd), od.Distance(dd, jd)
      }
      static Center(dd, Od) {
        return od.CenterToRef(dd, Od, od.Zero())
      }
      static CenterToRef(dd, Od, md) {
        return md.KOd((dd._x + Od._x) / 2, (dd._y + Od._y) / 2, (dd._z + Od._z) / 2)
      }
      static RotationFromAxis(dd, Od, md) {
        const Wd = new od;
        return od.RotationFromAxisToRef(dd, Od, md, Wd), Wd
      }
      static RotationFromAxisToRef(dd, Od, md, Wd) {
        const Fd = yd.Quaternion[0];
        return qd.RotationQuaternionFromAxisToRef(dd, Od, md, Fd), Fd.toEulerAnglesToRef(Wd), Wd
      }
    }
    od._V8PerformanceHack = new od(.5, .5, .5), od._UpReadOnly = od.Up(), od._DownReadOnly = od.Down(), od._LeftHandedForwardReadOnly = od.Forward(!1), od._RightHandedForwardReadOnly = od.Forward(!0), od._LeftHandedBackwardReadOnly = od.Backward(!1), od._RightHandedBackwardReadOnly = od.Backward(!0), od._RightReadOnly = od.Right(), od._LeftReadOnly = od.Left(), od._ZeroReadOnly = od.Zero(), od._OneReadOnly = od.One();
    class Nd {
      get x() {
        return this._x
      }
      set x(dd) {
        this._x = dd, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(dd) {
        this._y = dd, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(dd) {
        this._z = dd, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(dd) {
        this._w = dd, this._isDirty = !0
      }
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
        this._isDirty = !0, this._x = dd, this._y = Od, this._z = md, this._w = Wd
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Vector4"
      }
      getHashCode() {
        let dd = Qd(this._x);
        return dd = 397 * dd ^ Qd(this._y), dd = 397 * dd ^ Qd(this._z), dd = 397 * dd ^ Qd(this._w), dd
      }
      RRd() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(dd, Od) {
        return void 0 === Od && (Od = 0), dd[Od] = this._x, dd[Od + 1] = this._y, dd[Od + 2] = this._z, dd[Od + 3] = this._w, this
      }
      ZQ(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Nd.FromArrayToRef(dd, Od, this), this
      }
      addInPlace(dd) {
        return this.x += dd._x, this.y += dd._y, this.z += dd._z, this.w += dd._w, this
      }
      addInPlaceFromFloats(dd, Od, md, Wd) {
        return this.x += dd, this.y += Od, this.z += md, this.w += Wd, this
      }
      add(dd) {
        return new Nd(this._x + dd.x, this._y + dd.y, this._z + dd.z, this._w + dd.w)
      }
      addToRef(dd, Od) {
        return Od.x = this._x + dd.x, Od.y = this._y + dd.y, Od.z = this._z + dd.z, Od.w = this._w + dd.w, Od
      }
      YRd(dd) {
        return this.x -= dd.x, this.y -= dd.y, this.z -= dd.z, this.w -= dd.w, this
      }
      subtract(dd) {
        return new Nd(this._x - dd.x, this._y - dd.y, this._z - dd.z, this._w - dd.w)
      }
      subtractToRef(dd, Od) {
        return Od.x = this._x - dd.x, Od.y = this._y - dd.y, Od.z = this._z - dd.z, Od.w = this._w - dd.w, Od
      }
      subtractFromFloats(dd, Od, md, Wd) {
        return new Nd(this._x - dd, this._y - Od, this._z - md, this._w - Wd)
      }
      subtractFromFloatsToRef(dd, Od, md, Wd, Fd) {
        return Fd.x = this._x - dd, Fd.y = this._y - Od, Fd.z = this._z - md, Fd.w = this._w - Wd, Fd
      }
      ty() {
        return new Nd(-this._x, -this._y, -this._z, -this._w)
      }
      negateInPlace() {
        return this.x *= -1, this.y *= -1, this.z *= -1, this.w *= -1, this
      }
      negateToRef(dd) {
        return dd.x = -this._x, dd.y = -this._y, dd.z = -this._z, dd.w = -this._w, dd
      }
      scaleInPlace(dd) {
        return this.x *= dd, this.y *= dd, this.z *= dd, this.w *= dd, this
      }
      scale(dd) {
        return new Nd(this._x * dd, this._y * dd, this._z * dd, this._w * dd)
      }
      scaleToRef(dd, Od) {
        return Od.x = this._x * dd, Od.y = this._y * dd, Od.z = this._z * dd, Od.w = this._w * dd, Od
      }
      scaleAndAddToRef(dd, Od) {
        return Od.x += this._x * dd, Od.y += this._y * dd, Od.z += this._z * dd, Od.w += this._w * dd, Od
      }
      equals(dd) {
        return dd && this._x === dd.x && this._y === dd.y && this._z === dd.z && this._w === dd.w
      }
      equalsWithEpsilon(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wd.b;
        return dd && (0, Kd.WithinEpsilon)(this._x, dd.x, Od) && (0, Kd.WithinEpsilon)(this._y, dd.y, Od) && (0, Kd.WithinEpsilon)(this._z, dd.z, Od) && (0, Kd.WithinEpsilon)(this._w, dd.w, Od)
      }
      Qhd(dd, Od, md, Wd) {
        return this._x === dd && this._y === Od && this._z === md && this._w === Wd
      }
      multiplyInPlace(dd) {
        return this.x *= dd.x, this.y *= dd.y, this.z *= dd.z, this.w *= dd.w, this
      }
      multiply(dd) {
        return new Nd(this._x * dd.x, this._y * dd.y, this._z * dd.z, this._w * dd.w)
      }
      multiplyToRef(dd, Od) {
        return Od.x = this._x * dd.x, Od.y = this._y * dd.y, Od.z = this._z * dd.z, Od.w = this._w * dd.w, Od
      }
      multiplyByFloats(dd, Od, md, Wd) {
        return new Nd(this._x * dd, this._y * Od, this._z * md, this._w * Wd)
      }
      divide(dd) {
        return new Nd(this._x / dd.x, this._y / dd.y, this._z / dd.z, this._w / dd.w)
      }
      divideToRef(dd, Od) {
        return Od.x = this._x / dd.x, Od.y = this._y / dd.y, Od.z = this._z / dd.z, Od.w = this._w / dd.w, Od
      }
      divideInPlace(dd) {
        return this.divideToRef(dd, this)
      }
      minimizeInPlace(dd) {
        return dd.x < this._x && (this.x = dd.x), dd.y < this._y && (this.y = dd.y), dd.z < this._z && (this.z = dd.z), dd.w < this._w && (this.w = dd.w), this
      }
      maximizeInPlace(dd) {
        return dd.x > this._x && (this.x = dd.x), dd.y > this._y && (this.y = dd.y), dd.z > this._z && (this.z = dd.z), dd.w > this._w && (this.w = dd.w), this
      }
      minimizeInPlaceFromFloats(dd, Od, md, Wd) {
        return this.x = Math.min(dd, this._x), this.y = Math.min(Od, this._y), this.z = Math.min(md, this._z), this.w = Math.min(Wd, this._w), this
      }
      maximizeInPlaceFromFloats(dd, Od, md, Wd) {
        return this.x = Math.max(dd, this._x), this.y = Math.max(Od, this._y), this.z = Math.max(md, this._z), this.w = Math.max(Wd, this._w), this
      }
      floorToRef(dd) {
        return dd.x = Math.floor(this._x), dd.y = Math.floor(this._y), dd.z = Math.floor(this._z), dd.w = Math.floor(this._w), dd
      }
      floor() {
        return new Nd(Math.floor(this._x), Math.floor(this._y), Math.floor(this._z), Math.floor(this._w))
      }
      fractToRef(dd) {
        return dd.x = this._x - Math.floor(this._x), dd.y = this._y - Math.floor(this._y), dd.z = this._z - Math.floor(this._z), dd.w = this._w - Math.floor(this._w), dd
      }
      fract() {
        return new Nd(this._x - Math.floor(this._x), this._y - Math.floor(this._y), this._z - Math.floor(this._z), this._w - Math.floor(this._w))
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
      normalizeFromLength(dd) {
        return 0 === dd || 1 === dd ? this : this.scaleInPlace(1 / dd)
      }
      normalizeToNew() {
        return this.normalizeToRef(new Nd)
      }
      normalizeToRef(dd) {
        const Od = this.length();
        return 0 === Od || 1 === Od ? (dd.x = this._x, dd.y = this._y, dd.z = this._z, dd.w = this._w, dd) : this.scaleToRef(1 / Od, dd)
      }
      toVector3() {
        return new od(this._x, this._y, this._z)
      }
      clone() {
        return new Nd(this._x, this._y, this._z, this._w)
      }
      Bx(dd) {
        return this.x = dd.x, this.y = dd.y, this.z = dd.z, this.w = dd.w, this
      }
      KOd(dd, Od, md, Wd) {
        return this.x = dd, this.y = Od, this.z = md, this.w = Wd, this
      }
      set(dd, Od, md, Wd) {
        return this.KOd(dd, Od, md, Wd)
      }
      Bdd(dd) {
        return this.x = this.y = this.z = this.w = dd, this
      }
      dot(dd) {
        return this._x * dd.x + this._y * dd.y + this._z * dd.z + this._w * dd.w
      }
      static FromArray(dd, Od) {
        return Od || (Od = 0), new Nd(dd[Od], dd[Od + 1], dd[Od + 2], dd[Od + 3])
      }
      static FromArrayToRef(dd, Od, md) {
        return md.x = dd[Od], md.y = dd[Od + 1], md.z = dd[Od + 2], md.w = dd[Od + 3], md
      }
      static FromFloatArrayToRef(dd, Od, md) {
        return Nd.FromArrayToRef(dd, Od, md), md
      }
      static FromFloatsToRef(dd, Od, md, Wd, Fd) {
        return Fd.x = dd, Fd.y = Od, Fd.z = md, Fd.w = Wd, Fd
      }
      static Zero() {
        return new Nd(0, 0, 0, 0)
      }
      static One() {
        return new Nd(1, 1, 1, 1)
      }
      static Random() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Nd((0, Kd.RandomRange)(dd, Od), (0, Kd.RandomRange)(dd, Od), (0, Kd.RandomRange)(dd, Od), (0, Kd.RandomRange)(dd, Od))
      }
      static RandomToRef() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
          md = arguments.length > 2 ? arguments[2] : void 0;
        return md.x = (0, Kd.RandomRange)(dd, Od), md.y = (0, Kd.RandomRange)(dd, Od), md.z = (0, Kd.RandomRange)(dd, Od), md.w = (0, Kd.RandomRange)(dd, Od), md
      }
      static Clamp(dd, Od, md) {
        return Nd.ClampToRef(dd, Od, md, new Nd)
      }
      static ClampToRef(dd, Od, md, Wd) {
        return Wd.x = (0, Kd.Clamp)(dd.x, Od.x, md.x), Wd.y = (0, Kd.Clamp)(dd.y, Od.y, md.y), Wd.z = (0, Kd.Clamp)(dd.z, Od.z, md.z), Wd.w = (0, Kd.Clamp)(dd.w, Od.w, md.w), Wd
      }
      static CheckExtends(dd, Od, md) {
        Od.minimizeInPlace(dd), md.maximizeInPlace(dd)
      }
      static get ZeroReadOnly() {
        return Nd._ZeroReadOnly
      }
      static Normalize(dd) {
        return Nd.NormalizeToRef(dd, new Nd)
      }
      static NormalizeToRef(dd, Od) {
        return dd.normalizeToRef(Od), Od
      }
      static Minimize(dd, Od) {
        const md = new Nd;
        return md.Bx(dd), md.minimizeInPlace(Od), md
      }
      static Maximize(dd, Od) {
        const md = new Nd;
        return md.Bx(dd), md.maximizeInPlace(Od), md
      }
      static Distance(dd, Od) {
        return Math.sqrt(Nd.DistanceSquared(dd, Od))
      }
      static DistanceSquared(dd, Od) {
        const md = dd.x - Od.x,
          Wd = dd.y - Od.y,
          Fd = dd.z - Od.z,
          Rd = dd.w - Od.w;
        return md * md + Wd * Wd + Fd * Fd + Rd * Rd
      }
      static Center(dd, Od) {
        return Nd.CenterToRef(dd, Od, new Nd)
      }
      static CenterToRef(dd, Od, md) {
        return md.x = (dd.x + Od.x) / 2, md.y = (dd.y + Od.y) / 2, md.z = (dd.z + Od.z) / 2, md.w = (dd.w + Od.w) / 2, md
      }
      static TransformCoordinates(dd, Od) {
        return Nd.TransformCoordinatesToRef(dd, Od, new Nd)
      }
      static TransformCoordinatesToRef(dd, Od, md) {
        return Nd.TransformCoordinatesFromFloatsToRef(dd._x, dd._y, dd._z, Od, md), md
      }
      static TransformCoordinatesFromFloatsToRef(dd, Od, md, Wd, Fd) {
        const Rd = Wd.m,
          Xd = dd * Rd[0] + Od * Rd[4] + md * Rd[8] + Rd[12],
          Kd = dd * Rd[1] + Od * Rd[5] + md * Rd[9] + Rd[13],
          hd = dd * Rd[2] + Od * Rd[6] + md * Rd[10] + Rd[14],
          vd = dd * Rd[3] + Od * Rd[7] + md * Rd[11] + Rd[15];
        return Fd.x = Xd, Fd.y = Kd, Fd.z = hd, Fd.w = vd, Fd
      }
      static TransformNormal(dd, Od) {
        return Nd.TransformNormalToRef(dd, Od, new Nd)
      }
      static TransformNormalToRef(dd, Od, md) {
        const Wd = Od.m,
          Fd = dd.x * Wd[0] + dd.y * Wd[4] + dd.z * Wd[8],
          Rd = dd.x * Wd[1] + dd.y * Wd[5] + dd.z * Wd[9],
          Xd = dd.x * Wd[2] + dd.y * Wd[6] + dd.z * Wd[10];
        return md.x = Fd, md.y = Rd, md.z = Xd, md.w = dd.w, md
      }
      static TransformNormalFromFloatsToRef(dd, Od, md, Wd, Fd, Rd) {
        const Xd = Fd.m;
        return Rd.x = dd * Xd[0] + Od * Xd[4] + md * Xd[8], Rd.y = dd * Xd[1] + Od * Xd[5] + md * Xd[9], Rd.z = dd * Xd[2] + Od * Xd[6] + md * Xd[10], Rd.w = Wd, Rd
      }
      static FromVector3(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return new Nd(dd._x, dd._y, dd._z, Od)
      }
      static Dot(dd, Od) {
        return dd.x * Od.x + dd.y * Od.y + dd.z * Od.z + dd.w * Od.w
      }
    }
    Nd._V8PerformanceHack = new Nd(.5, .5, .5, .5), Nd._ZeroReadOnly = Nd.Zero();
    class qd {
      get x() {
        return this._x
      }
      set x(dd) {
        this._x = dd, this._isDirty = !0
      }
      get y() {
        return this._y
      }
      set y(dd) {
        this._y = dd, this._isDirty = !0
      }
      get z() {
        return this._z
      }
      set z(dd) {
        this._z = dd, this._isDirty = !0
      }
      get w() {
        return this._w
      }
      set w(dd) {
        this._w = dd, this._isDirty = !0
      }
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        this._isDirty = !0, this._x = dd, this._y = Od, this._z = md, this._w = Wd
      }
      toString() {
        return `{X: ${this._x} Y: ${this._y} Z: ${this._z} W: ${this._w}}`
      }
      getClassName() {
        return "Quaternion"
      }
      getHashCode() {
        let dd = Qd(this._x);
        return dd = 397 * dd ^ Qd(this._y), dd = 397 * dd ^ Qd(this._z), dd = 397 * dd ^ Qd(this._w), dd
      }
      RRd() {
        return [this._x, this._y, this._z, this._w]
      }
      toArray(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return dd[Od] = this._x, dd[Od + 1] = this._y, dd[Od + 2] = this._z, dd[Od + 3] = this._w, this
      }
      ZQ(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return qd.FromArrayToRef(dd, Od, this)
      }
      equals(dd) {
        return dd && this._x === dd._x && this._y === dd._y && this._z === dd._z && this._w === dd._w
      }
      equalsWithEpsilon(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wd.b;
        return dd && (0, Kd.WithinEpsilon)(this._x, dd._x, Od) && (0, Kd.WithinEpsilon)(this._y, dd._y, Od) && (0, Kd.WithinEpsilon)(this._z, dd._z, Od) && (0, Kd.WithinEpsilon)(this._w, dd._w, Od)
      }
      isApprox(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Wd.b;
        return dd && ((0, Kd.WithinEpsilon)(this._x, dd._x, Od) && (0, Kd.WithinEpsilon)(this._y, dd._y, Od) && (0, Kd.WithinEpsilon)(this._z, dd._z, Od) && (0, Kd.WithinEpsilon)(this._w, dd._w, Od) || (0, Kd.WithinEpsilon)(this._x, -dd._x, Od) && (0, Kd.WithinEpsilon)(this._y, -dd._y, Od) && (0, Kd.WithinEpsilon)(this._z, -dd._z, Od) && (0, Kd.WithinEpsilon)(this._w, -dd._w, Od))
      }
      clone() {
        return new qd(this._x, this._y, this._z, this._w)
      }
      Bx(dd) {
        return this._x = dd._x, this._y = dd._y, this._z = dd._z, this._w = dd._w, this._isDirty = !0, this
      }
      KOd(dd, Od, md, Wd) {
        return this._x = dd, this._y = Od, this._z = md, this._w = Wd, this._isDirty = !0, this
      }
      set(dd, Od, md, Wd) {
        return this.KOd(dd, Od, md, Wd)
      }
      Bdd(dd) {
        return this.KOd(dd, dd, dd, dd)
      }
      add(dd) {
        return new qd(this._x + dd._x, this._y + dd._y, this._z + dd._z, this._w + dd._w)
      }
      addInPlace(dd) {
        return this._x += dd._x, this._y += dd._y, this._z += dd._z, this._w += dd._w, this._isDirty = !0, this
      }
      addToRef(dd, Od) {
        return Od._x = this._x + dd._x, Od._y = this._y + dd._y, Od._z = this._z + dd._z, Od._w = this._w + dd._w, Od._isDirty = !0, Od
      }
      addInPlaceFromFloats(dd, Od, md, Wd) {
        return this._x += dd, this._y += Od, this._z += md, this._w += Wd, this._isDirty = !0, this
      }
      subtractToRef(dd, Od) {
        return Od._x = this._x - dd._x, Od._y = this._y - dd._y, Od._z = this._z - dd._z, Od._w = this._w - dd._w, Od._isDirty = !0, Od
      }
      subtractFromFloats(dd, Od, md, Wd) {
        return this.subtractFromFloatsToRef(dd, Od, md, Wd, new qd)
      }
      subtractFromFloatsToRef(dd, Od, md, Wd, Fd) {
        return Fd._x = this._x - dd, Fd._y = this._y - Od, Fd._z = this._z - md, Fd._w = this._w - Wd, Fd._isDirty = !0, Fd
      }
      subtract(dd) {
        return new qd(this._x - dd._x, this._y - dd._y, this._z - dd._z, this._w - dd._w)
      }
      YRd(dd) {
        return this._x -= dd._x, this._y -= dd._y, this._z -= dd._z, this._w -= dd._w, this._isDirty = !0, this
      }
      scale(dd) {
        return new qd(this._x * dd, this._y * dd, this._z * dd, this._w * dd)
      }
      scaleToRef(dd, Od) {
        return Od._x = this._x * dd, Od._y = this._y * dd, Od._z = this._z * dd, Od._w = this._w * dd, Od._isDirty = !0, Od
      }
      scaleInPlace(dd) {
        return this._x *= dd, this._y *= dd, this._z *= dd, this._w *= dd, this._isDirty = !0, this
      }
      scaleAndAddToRef(dd, Od) {
        return Od._x += this._x * dd, Od._y += this._y * dd, Od._z += this._z * dd, Od._w += this._w * dd, Od._isDirty = !0, Od
      }
      multiply(dd) {
        const Od = new qd(0, 0, 0, 1);
        return this.multiplyToRef(dd, Od), Od
      }
      multiplyToRef(dd, Od) {
        const md = this._x * dd._w + this._y * dd._z - this._z * dd._y + this._w * dd._x,
          Wd = -this._x * dd._z + this._y * dd._w + this._z * dd._x + this._w * dd._y,
          Fd = this._x * dd._y - this._y * dd._x + this._z * dd._w + this._w * dd._z,
          Rd = -this._x * dd._x - this._y * dd._y - this._z * dd._z + this._w * dd._w;
        return Od.KOd(md, Wd, Fd, Rd), Od
      }
      multiplyInPlace(dd) {
        return this.multiplyToRef(dd, this)
      }
      multiplyByFloats(dd, Od, md, Wd) {
        return this._x *= dd, this._y *= Od, this._z *= md, this._w *= Wd, this._isDirty = !0, this
      }
      divide(dd) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideToRef(dd, Od) {
        throw new ReferenceError("Can not divide a quaternion")
      }
      divideInPlace(dd) {
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
      ty() {
        return this.negateToRef(new qd)
      }
      negateInPlace() {
        return this._x = -this._x, this._y = -this._y, this._z = -this._z, this._w = -this._w, this._isDirty = !0, this
      }
      negateToRef(dd) {
        return dd._x = -this._x, dd._y = -this._y, dd._z = -this._z, dd._w = -this._w, dd._isDirty = !0, dd
      }
      Qhd(dd, Od, md, Wd) {
        return this._x === dd && this._y === Od && this._z === md && this._w === Wd
      }
      floorToRef(dd) {
        throw new ReferenceError("Can not floor a quaternion")
      }
      floor() {
        throw new ReferenceError("Can not floor a quaternion")
      }
      fractToRef(dd) {
        throw new ReferenceError("Can not fract a quaternion")
      }
      fract() {
        throw new ReferenceError("Can not fract a quaternion")
      }
      conjugateToRef(dd) {
        return dd.KOd(-this._x, -this._y, -this._z, this._w), dd
      }
      conjugateInPlace() {
        return this._x *= -1, this._y *= -1, this._z *= -1, this._isDirty = !0, this
      }
      conjugate() {
        return new qd(-this._x, -this._y, -this._z, this._w)
      }
      invert() {
        const dd = this.conjugate(),
          Od = this.lengthSquared();
        return 0 == Od || 1 == Od || dd.scaleInPlace(1 / Od), dd
      }
      invertInPlace() {
        this.conjugateInPlace();
        const dd = this.lengthSquared();
        return 0 == dd || 1 == dd || this.scaleInPlace(1 / dd), this
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
      normalizeFromLength(dd) {
        return 0 === dd || 1 === dd ? this : this.scaleInPlace(1 / dd)
      }
      normalizeToNew() {
        const dd = new qd(0, 0, 0, 1);
        return this.normalizeToRef(dd), dd
      }
      normalizeToRef(dd) {
        const Od = this.length();
        return 0 === Od || 1 === Od ? dd.KOd(this._x, this._y, this._z, this._w) : this.scaleToRef(1 / Od, dd)
      }
      toEulerAngles() {
        const dd = od.Zero();
        return this.toEulerAnglesToRef(dd), dd
      }
      toEulerAnglesToRef(dd) {
        const Od = this._z,
          md = this._x,
          Wd = this._y,
          Fd = this._w,
          Rd = Wd * Od - md * Fd,
          Xd = .4999999;
        if (Rd < -Xd) dd._y = 2 * Math.atan2(Wd, Fd), dd._x = Math.PI / 2, dd._z = 0, dd._isDirty = !0;
        else if (Rd > Xd) dd._y = 2 * Math.atan2(Wd, Fd), dd._x = -Math.PI / 2, dd._z = 0, dd._isDirty = !0;
        else {
          const Xd = Fd * Fd,
            Kd = Od * Od,
            hd = md * md,
            vd = Wd * Wd;
          dd._z = Math.atan2(2 * (md * Wd + Od * Fd), -Kd - hd + vd + Xd), dd._x = Math.asin(-2 * Rd), dd._y = Math.atan2(2 * (Od * md + Wd * Fd), Kd - hd - vd + Xd), dd._isDirty = !0
        }
        return dd
      }
      toAlphaBetaGammaToRef(dd) {
        const Od = this._z,
          md = this._x,
          Wd = this._y,
          Fd = this._w,
          Rd = Math.sqrt(md * md + Wd * Wd),
          Xd = Math.sqrt(Od * Od + Fd * Fd),
          Kd = 2 * Math.atan2(Rd, Xd),
          hd = 2 * Math.atan2(Od, Fd),
          vd = 2 * Math.atan2(Wd, md),
          Qd = (hd + vd) / 2,
          td = (hd - vd) / 2;
        return dd.set(td, Kd, Qd), dd
      }
      toRotationMatrix(dd) {
        return Hd.FromQuaternionToRef(this, dd), dd
      }
      fromRotationMatrix(dd) {
        return qd.FromRotationMatrixToRef(dd, this), this
      }
      dot(dd) {
        return this._x * dd._x + this._y * dd._y + this._z * dd._z + this._w * dd._w
      }
      toAxisAngle() {
        const dd = od.Zero();
        return {
          axis: dd,
          angle: this.toAxisAngleToRef(dd)
        }
      }
      toAxisAngleToRef(dd) {
        let Od;
        const md = Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z),
          Wd = this._w;
        return md > 0 ? (Od = 2 * Math.atan2(md, Wd), dd.set(this._x / md, this._y / md, this._z / md)) : (Od = 0, dd.set(1, 0, 0)), Od
      }
      static FromRotationMatrix(dd) {
        const Od = new qd;
        return qd.FromRotationMatrixToRef(dd, Od), Od
      }
      static FromRotationMatrixToRef(dd, Od) {
        const md = dd.m,
          Wd = md[0],
          Fd = md[4],
          Rd = md[8],
          Xd = md[1],
          Kd = md[5],
          hd = md[9],
          vd = md[2],
          Qd = md[6],
          td = md[10],
          od = Wd + Kd + td;
        let Nd;
        return od > 0 ? (Nd = .5 / Math.sqrt(od + 1), Od._w = .25 / Nd, Od._x = (Qd - hd) * Nd, Od._y = (Rd - vd) * Nd, Od._z = (Xd - Fd) * Nd, Od._isDirty = !0) : Wd > Kd && Wd > td ? (Nd = 2 * Math.sqrt(1 + Wd - Kd - td), Od._w = (Qd - hd) / Nd, Od._x = .25 * Nd, Od._y = (Fd + Xd) / Nd, Od._z = (Rd + vd) / Nd, Od._isDirty = !0) : Kd > td ? (Nd = 2 * Math.sqrt(1 + Kd - Wd - td), Od._w = (Rd - vd) / Nd, Od._x = (Fd + Xd) / Nd, Od._y = .25 * Nd, Od._z = (hd + Qd) / Nd, Od._isDirty = !0) : (Nd = 2 * Math.sqrt(1 + td - Wd - Kd), Od._w = (Xd - Fd) / Nd, Od._x = (Rd + vd) / Nd, Od._y = (hd + Qd) / Nd, Od._z = .25 * Nd, Od._isDirty = !0), Od
      }
      static Dot(dd, Od) {
        return dd._x * Od._x + dd._y * Od._y + dd._z * Od._z + dd._w * Od._w
      }
      static AreClose(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .1;
        const Wd = qd.Dot(dd, Od);
        return 1 - Wd * Wd <= md
      }
      static SmoothToRef(dd, Od, md, Wd, Fd) {
        let Rd = 0 === Wd ? 1 : md / Wd;
        return Rd = (0, Kd.Clamp)(Rd, 0, 1), qd.SlerpToRef(dd, Od, Rd, Fd), Fd
      }
      static Zero() {
        return new qd(0, 0, 0, 0)
      }
      static Inverse(dd) {
        return new qd(-dd._x, -dd._y, -dd._z, dd._w)
      }
      static InverseToRef(dd, Od) {
        return Od.set(-dd._x, -dd._y, -dd._z, dd._w), Od
      }
      static Identity() {
        return new qd(0, 0, 0, 1)
      }
      static IsIdentity(dd) {
        return dd && 0 === dd._x && 0 === dd._y && 0 === dd._z && 1 === dd._w
      }
      static RotationAxis(dd, Od) {
        return qd.RotationAxisToRef(dd, Od, new qd)
      }
      static RotationAxisToRef(dd, Od, md) {
        md._w = Math.cos(Od / 2);
        const Wd = Math.sin(Od / 2) / dd.length();
        return md._x = dd._x * Wd, md._y = dd._y * Wd, md._z = dd._z * Wd, md._isDirty = !0, md
      }
      static FromArray(dd, Od) {
        return Od || (Od = 0), new qd(dd[Od], dd[Od + 1], dd[Od + 2], dd[Od + 3])
      }
      static FromArrayToRef(dd, Od, md) {
        return md._x = dd[Od], md._y = dd[Od + 1], md._z = dd[Od + 2], md._w = dd[Od + 3], md._isDirty = !0, md
      }
      static FromFloatsToRef(dd, Od, md, Wd, Fd) {
        return Fd.KOd(dd, Od, md, Wd), Fd
      }
      static FromEulerAngles(dd, Od, md) {
        const Wd = new qd;
        return qd.RotationYawPitchRollToRef(Od, dd, md, Wd), Wd
      }
      static FromEulerAnglesToRef(dd, Od, md, Wd) {
        return qd.RotationYawPitchRollToRef(Od, dd, md, Wd), Wd
      }
      static FromEulerVector(dd) {
        const Od = new qd;
        return qd.RotationYawPitchRollToRef(dd._y, dd._x, dd._z, Od), Od
      }
      static FromEulerVectorToRef(dd, Od) {
        return qd.RotationYawPitchRollToRef(dd._y, dd._x, dd._z, Od), Od
      }
      static FromUnitVectorsToRef(dd, Od, md) {
        let Fd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Wd.b;
        const Rd = od.Dot(dd, Od) + 1;
        return Rd < Fd ? Math.abs(dd.x) > Math.abs(dd.z) ? md.set(-dd.y, dd.x, 0, 0) : md.set(0, -dd.z, dd.y, 0) : (od.CrossToRef(dd, Od, bd.Cq[0]), md.set(bd.Cq[0].x, bd.Cq[0].y, bd.Cq[0].z, Rd)), md.normalize()
      }
      static RotationYawPitchRoll(dd, Od, md) {
        const Wd = new qd;
        return qd.RotationYawPitchRollToRef(dd, Od, md, Wd), Wd
      }
      static RotationYawPitchRollToRef(dd, Od, md, Wd) {
        const Fd = .5 * md,
          Rd = .5 * Od,
          Xd = .5 * dd,
          Kd = Math.sin(Fd),
          hd = Math.cos(Fd),
          vd = Math.sin(Rd),
          Qd = Math.cos(Rd),
          td = Math.sin(Xd),
          od = Math.cos(Xd);
        return Wd._x = od * vd * hd + td * Qd * Kd, Wd._y = td * Qd * hd - od * vd * Kd, Wd._z = od * Qd * Kd - td * vd * hd, Wd._w = od * Qd * hd + td * vd * Kd, Wd._isDirty = !0, Wd
      }
      static RotationAlphaBetaGamma(dd, Od, md) {
        const Wd = new qd;
        return qd.RotationAlphaBetaGammaToRef(dd, Od, md, Wd), Wd
      }
      static RotationAlphaBetaGammaToRef(dd, Od, md, Wd) {
        const Fd = .5 * (md + dd),
          Rd = .5 * (md - dd),
          Xd = .5 * Od;
        return Wd._x = Math.cos(Rd) * Math.sin(Xd), Wd._y = Math.sin(Rd) * Math.sin(Xd), Wd._z = Math.sin(Fd) * Math.cos(Xd), Wd._w = Math.cos(Fd) * Math.cos(Xd), Wd._isDirty = !0, Wd
      }
      static RotationQuaternionFromAxis(dd, Od, md) {
        const Wd = new qd(0, 0, 0, 0);
        return qd.RotationQuaternionFromAxisToRef(dd, Od, md, Wd), Wd
      }
      static RotationQuaternionFromAxisToRef(dd, Od, md, Wd) {
        const Fd = yd.Matrix[0];
        return dd = dd.normalizeToRef(yd.Cq[0]), Od = Od.normalizeToRef(yd.Cq[1]), md = md.normalizeToRef(yd.Cq[2]), Hd.FromXYZAxesToRef(dd, Od, md, Fd), qd.FromRotationMatrixToRef(Fd, Wd), Wd
      }
      static FromLookDirectionLH(dd, Od) {
        const md = new qd;
        return qd.FromLookDirectionLHToRef(dd, Od, md), md
      }
      static FromLookDirectionLHToRef(dd, Od, md) {
        const Wd = yd.Matrix[0];
        return Hd.LookDirectionLHToRef(dd, Od, Wd), qd.FromRotationMatrixToRef(Wd, md), md
      }
      static FromLookDirectionRH(dd, Od) {
        const md = new qd;
        return qd.FromLookDirectionRHToRef(dd, Od, md), md
      }
      static FromLookDirectionRHToRef(dd, Od, md) {
        const Wd = yd.Matrix[0];
        return Hd.LookDirectionRHToRef(dd, Od, Wd), qd.FromRotationMatrixToRef(Wd, md)
      }
      static Slerp(dd, Od, md) {
        const Wd = qd.Identity();
        return qd.SlerpToRef(dd, Od, md, Wd), Wd
      }
      static SlerpToRef(dd, Od, md, Wd) {
        let Fd, Rd, Xd = dd._x * Od._x + dd._y * Od._y + dd._z * Od._z + dd._w * Od._w,
          Kd = !1;
        if (Xd < 0 && (Kd = !0, Xd = -Xd), Xd > .999999) Rd = 1 - md, Fd = Kd ? -md : md;
        else {
          const dd = Math.acos(Xd),
            Od = 1 / Math.sin(dd);
          Rd = Math.sin((1 - md) * dd) * Od, Fd = Kd ? -Math.sin(md * dd) * Od : Math.sin(md * dd) * Od
        }
        return Wd._x = Rd * dd._x + Fd * Od._x, Wd._y = Rd * dd._y + Fd * Od._y, Wd._z = Rd * dd._z + Fd * Od._z, Wd._w = Rd * dd._w + Fd * Od._w, Wd._isDirty = !0, Wd
      }
      static Hermite(dd, Od, md, Wd, Fd) {
        const Rd = Fd * Fd,
          Xd = Fd * Rd,
          Kd = 2 * Xd - 3 * Rd + 1,
          hd = -2 * Xd + 3 * Rd,
          vd = Xd - 2 * Rd + Fd,
          Qd = Xd - Rd,
          td = dd._x * Kd + md._x * hd + Od._x * vd + Wd._x * Qd,
          od = dd._y * Kd + md._y * hd + Od._y * vd + Wd._y * Qd,
          Nd = dd._z * Kd + md._z * hd + Od._z * vd + Wd._z * Qd,
          Hd = dd._w * Kd + md._w * hd + Od._w * vd + Wd._w * Qd;
        return new qd(td, od, Nd, Hd)
      }
      static Hermite1stDerivative(dd, Od, md, Wd, Fd) {
        const Rd = new qd;
        return this.Hermite1stDerivativeToRef(dd, Od, md, Wd, Fd, Rd), Rd
      }
      static Hermite1stDerivativeToRef(dd, Od, md, Wd, Fd, Rd) {
        const Xd = Fd * Fd;
        return Rd._x = 6 * (Xd - Fd) * dd._x + (3 * Xd - 4 * Fd + 1) * Od._x + 6 * (-Xd + Fd) * md._x + (3 * Xd - 2 * Fd) * Wd._x, Rd._y = 6 * (Xd - Fd) * dd._y + (3 * Xd - 4 * Fd + 1) * Od._y + 6 * (-Xd + Fd) * md._y + (3 * Xd - 2 * Fd) * Wd._y, Rd._z = 6 * (Xd - Fd) * dd._z + (3 * Xd - 4 * Fd + 1) * Od._z + 6 * (-Xd + Fd) * md._z + (3 * Xd - 2 * Fd) * Wd._z, Rd._w = 6 * (Xd - Fd) * dd._w + (3 * Xd - 4 * Fd + 1) * Od._w + 6 * (-Xd + Fd) * md._w + (3 * Xd - 2 * Fd) * Wd._w, Rd._isDirty = !0, Rd
      }
      static Normalize(dd) {
        const Od = qd.Zero();
        return qd.NormalizeToRef(dd, Od), Od
      }
      static NormalizeToRef(dd, Od) {
        return dd.normalizeToRef(Od), Od
      }
      static Clamp(dd, Od, md) {
        const Wd = new qd;
        return qd.ClampToRef(dd, Od, md, Wd), Wd
      }
      static ClampToRef(dd, Od, md, Wd) {
        return Wd.KOd((0, Kd.Clamp)(dd.x, Od.x, md.x), (0, Kd.Clamp)(dd.y, Od.y, md.y), (0, Kd.Clamp)(dd.z, Od.z, md.z), (0, Kd.Clamp)(dd.w, Od.w, md.w))
      }
      static Random() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new qd((0, Kd.RandomRange)(dd, Od), (0, Kd.RandomRange)(dd, Od), (0, Kd.RandomRange)(dd, Od), (0, Kd.RandomRange)(dd, Od))
      }
      static RandomToRef() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return (arguments.length > 2 ? arguments[2] : void 0).KOd((0, Kd.RandomRange)(dd, Od), (0, Kd.RandomRange)(dd, Od), (0, Kd.RandomRange)(dd, Od), (0, Kd.RandomRange)(dd, Od))
      }
      static Minimize() {
        throw new ReferenceError("Quaternion.Minimize does not make sense")
      }
      static Maximize() {
        throw new ReferenceError("Quaternion.Maximize does not make sense")
      }
      static Distance(dd, Od) {
        return Math.sqrt(qd.DistanceSquared(dd, Od))
      }
      static DistanceSquared(dd, Od) {
        const md = dd.x - Od.x,
          Wd = dd.y - Od.y,
          Fd = dd.z - Od.z,
          Rd = dd.w - Od.w;
        return md * md + Wd * Wd + Fd * Fd + Rd * Rd
      }
      static Center(dd, Od) {
        return qd.CenterToRef(dd, Od, qd.Zero())
      }
      static CenterToRef(dd, Od, md) {
        return md.KOd((dd.x + Od.x) / 2, (dd.y + Od.y) / 2, (dd.z + Od.z) / 2, (dd.w + Od.w) / 2)
      }
    }
    qd._V8PerformanceHack = new qd(.5, .5, .5, .5);
    class Hd {
      static get Use64Bits() {
        return Rd.b.MatrixUse64Bits
      }
      get m() {
        return this._m
      }
      markAsUpdated() {
        this.updateFlag = hd.e._UpdateFlagSeed++, this._isIdentity = !1, this._isIdentity3x2 = !1, this._isIdentityDirty = !0, this._isIdentity3x2Dirty = !0
      }
      _updateIdentityStatus(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          Wd = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        this._isIdentity = dd, this._isIdentity3x2 = dd || md, this._isIdentityDirty = !this._isIdentity && Od, this._isIdentity3x2Dirty = !this._isIdentity3x2 && Wd
      }
      constructor() {
        this._isIdentity = !1, this._isIdentityDirty = !0, this._isIdentity3x2 = !0, this._isIdentity3x2Dirty = !0, this.updateFlag = -1, Rd.b.MatrixTrackPrecisionChange && Rd.b.MatrixTrackedMatrices.push(this), this._m = new Rd.b.MatrixCurrentType(16), this.markAsUpdated()
      }
      isIdentity() {
        if (this._isIdentityDirty) {
          this._isIdentityDirty = !1;
          const dd = this._m;
          this._isIdentity = 1 === dd[0] && 0 === dd[1] && 0 === dd[2] && 0 === dd[3] && 0 === dd[4] && 1 === dd[5] && 0 === dd[6] && 0 === dd[7] && 0 === dd[8] && 0 === dd[9] && 1 === dd[10] && 0 === dd[11] && 0 === dd[12] && 0 === dd[13] && 0 === dd[14] && 1 === dd[15]
        }
        return this._isIdentity
      }
      isIdentityAs3x2() {
        return this._isIdentity3x2Dirty && (this._isIdentity3x2Dirty = !1, 1 !== this._m[0] || 1 !== this._m[5] || 1 !== this._m[15] || 0 !== this._m[1] || 0 !== this._m[2] || 0 !== this._m[3] || 0 !== this._m[4] || 0 !== this._m[6] || 0 !== this._m[7] || 0 !== this._m[8] || 0 !== this._m[9] || 0 !== this._m[10] || 0 !== this._m[11] || 0 !== this._m[12] || 0 !== this._m[13] || 0 !== this._m[14] ? this._isIdentity3x2 = !1 : this._isIdentity3x2 = !0), this._isIdentity3x2
      }
      determinant() {
        if (!0 === this._isIdentity) return 1;
        const dd = this._m,
          Od = dd[0],
          md = dd[1],
          Wd = dd[2],
          Fd = dd[3],
          Rd = dd[4],
          Xd = dd[5],
          Kd = dd[6],
          hd = dd[7],
          vd = dd[8],
          Qd = dd[9],
          td = dd[10],
          od = dd[11],
          Nd = dd[12],
          qd = dd[13],
          Hd = dd[14],
          yd = dd[15],
          bd = td * yd - Hd * od,
          Td = Qd * yd - qd * od,
          pd = Qd * Hd - qd * td,
          Yd = vd * yd - Nd * od,
          gd = vd * Hd - td * Nd,
          wd = vd * qd - Nd * Qd;
        return Od * +(Xd * bd - Kd * Td + hd * pd) + md * -(Rd * bd - Kd * Yd + hd * gd) + Wd * +(Rd * Td - Xd * Yd + hd * wd) + Fd * -(Rd * pd - Xd * gd + Kd * wd)
      }
      toString() {
        return `{${this.m[0]}, ${this.m[1]}, ${this.m[2]}, ${this.m[3]}\n${this.m[4]}, ${this.m[5]}, ${this.m[6]}, ${this.m[7]}\n${this.m[8]}, ${this.m[9]}, ${this.m[10]}, ${this.m[11]}\n${this.m[12]}, ${this.m[13]}, ${this.m[14]}, ${this.m[15]}}`
      }
      toArray() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        if (!dd) return this._m;
        const md = this._m;
        for (let Wd = 0; Wd < 16; Wd++) dd[Od + Wd] = md[Wd];
        return this
      }
      RRd() {
        return this._m
      }
      ZQ(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Hd.FromArrayToRef(dd, Od, this)
      }
      KOd() {
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        return Hd.FromArrayToRef(Od, 0, this)
      }
      set() {
        const dd = this._m;
        for (let Od = 0; Od < 16; Od++) dd[Od] = Od < 0 || arguments.length <= Od ? void 0 : arguments[Od];
        return this.markAsUpdated(), this
      }
      Bdd(dd) {
        const Od = this._m;
        for (let md = 0; md < 16; md++) Od[md] = dd;
        return this.markAsUpdated(), this
      }
      invert() {
        return this.invertToRef(this), this
      }
      reset() {
        return Hd.FromValuesToRef(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, this), this._updateIdentityStatus(!1), this
      }
      add(dd) {
        const Od = new Hd;
        return this.addToRef(dd, Od), Od
      }
      addToRef(dd, Od) {
        const md = this._m,
          Wd = Od._m,
          Fd = dd.m;
        for (let Rd = 0; Rd < 16; Rd++) Wd[Rd] = md[Rd] + Fd[Rd];
        return Od.markAsUpdated(), Od
      }
      addToSelf(dd) {
        const Od = this._m,
          md = dd.m;
        return Od[0] += md[0], Od[1] += md[1], Od[2] += md[2], Od[3] += md[3], Od[4] += md[4], Od[5] += md[5], Od[6] += md[6], Od[7] += md[7], Od[8] += md[8], Od[9] += md[9], Od[10] += md[10], Od[11] += md[11], Od[12] += md[12], Od[13] += md[13], Od[14] += md[14], Od[15] += md[15], this.markAsUpdated(), this
      }
      addInPlace(dd) {
        const Od = this._m,
          md = dd.m;
        for (let Wd = 0; Wd < 16; Wd++) Od[Wd] += md[Wd];
        return this.markAsUpdated(), this
      }
      addInPlaceFromFloats() {
        const dd = this._m;
        for (let Od = 0; Od < 16; Od++) dd[Od] += Od < 0 || arguments.length <= Od ? void 0 : arguments[Od];
        return this.markAsUpdated(), this
      }
      subtract(dd) {
        const Od = this._m,
          md = dd.m;
        for (let Wd = 0; Wd < 16; Wd++) Od[Wd] -= md[Wd];
        return this.markAsUpdated(), this
      }
      subtractToRef(dd, Od) {
        const md = this._m,
          Wd = dd.m,
          Fd = Od._m;
        for (let Rd = 0; Rd < 16; Rd++) Fd[Rd] = md[Rd] - Wd[Rd];
        return Od.markAsUpdated(), Od
      }
      YRd(dd) {
        const Od = this._m,
          md = dd.m;
        for (let Wd = 0; Wd < 16; Wd++) Od[Wd] -= md[Wd];
        return this.markAsUpdated(), this
      }
      subtractFromFloats() {
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        return this.subtractFromFloatsToRef(...Od, new Hd)
      }
      subtractFromFloatsToRef() {
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        const Wd = Od.pop(),
          Fd = this._m,
          Rd = Wd._m,
          Xd = Od;
        for (let Kd = 0; Kd < 16; Kd++) Rd[Kd] = Fd[Kd] - Xd[Kd];
        return Wd.markAsUpdated(), Wd
      }
      invertToRef(dd) {
        return !0 === this._isIdentity ? (Hd.IdentityToRef(dd), dd) : ((0, hd.c)(this, dd.RRd()) ? dd.markAsUpdated() : dd.Bx(this), dd)
      }
      addAtIndex(dd, Od) {
        return this._m[dd] += Od, this.markAsUpdated(), this
      }
      multiplyAtIndex(dd, Od) {
        return this._m[dd] *= Od, this.markAsUpdated(), this
      }
      setTranslationFromFloats(dd, Od, md) {
        return this._m[12] = dd, this._m[13] = Od, this._m[14] = md, this.markAsUpdated(), this
      }
      addTranslationFromFloats(dd, Od, md) {
        return this._m[12] += dd, this._m[13] += Od, this._m[14] += md, this.markAsUpdated(), this
      }
      setTranslation(dd) {
        return this.setTranslationFromFloats(dd._x, dd._y, dd._z)
      }
      getTranslation() {
        return new od(this._m[12], this._m[13], this._m[14])
      }
      getTranslationToRef(dd) {
        return dd.x = this._m[12], dd.y = this._m[13], dd.z = this._m[14], dd
      }
      removeRotationAndScaling() {
        const dd = this.m;
        return Hd.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, dd[12], dd[13], dd[14], dd[15], this), this._updateIdentityStatus(0 === dd[12] && 0 === dd[13] && 0 === dd[14] && 1 === dd[15]), this
      }
      Bx(dd) {
        dd.copyToArray(this._m);
        const Od = dd;
        return this.updateFlag = Od.updateFlag, this._updateIdentityStatus(Od._isIdentity, Od._isIdentityDirty, Od._isIdentity3x2, Od._isIdentity3x2Dirty), this
      }
      copyToArray(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return (0, hd.b)(this, dd, Od), this
      }
      multiply(dd) {
        const Od = new Hd;
        return this.multiplyToRef(dd, Od), Od
      }
      multiplyInPlace(dd) {
        const Od = this._m,
          md = dd.m;
        for (let Wd = 0; Wd < 16; Wd++) Od[Wd] *= md[Wd];
        return this.markAsUpdated(), this
      }
      multiplyByFloats() {
        const dd = this._m;
        for (let Od = 0; Od < 16; Od++) dd[Od] *= Od < 0 || arguments.length <= Od ? void 0 : arguments[Od];
        return this.markAsUpdated(), this
      }
      multiplyByFloatsToRef() {
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        const Wd = Od.pop(),
          Fd = this._m,
          Rd = Wd._m,
          Xd = Od;
        for (let Kd = 0; Kd < 16; Kd++) Rd[Kd] = Fd[Kd] * Xd[Kd];
        return Wd.markAsUpdated(), Wd
      }
      multiplyToRef(dd, Od) {
        return this._isIdentity ? (Od.Bx(dd), Od) : dd._isIdentity ? (Od.Bx(this), Od) : (this.multiplyToArray(dd, Od._m, 0), Od.markAsUpdated(), Od)
      }
      multiplyToArray(dd, Od, md) {
        return (0, hd.f)(this, dd, Od, md), this
      }
      divide(dd) {
        return this.divideToRef(dd, new Hd)
      }
      divideToRef(dd, Od) {
        const md = this._m,
          Wd = dd.m,
          Fd = Od._m;
        for (let Rd = 0; Rd < 16; Rd++) Fd[Rd] = md[Rd] / Wd[Rd];
        return Od.markAsUpdated(), Od
      }
      divideInPlace(dd) {
        const Od = this._m,
          md = dd.m;
        for (let Wd = 0; Wd < 16; Wd++) Od[Wd] /= md[Wd];
        return this.markAsUpdated(), this
      }
      minimizeInPlace(dd) {
        const Od = this._m,
          md = dd.m;
        for (let Wd = 0; Wd < 16; Wd++) Od[Wd] = Math.min(Od[Wd], md[Wd]);
        return this.markAsUpdated(), this
      }
      minimizeInPlaceFromFloats() {
        const dd = this._m;
        for (let Od = 0; Od < 16; Od++) dd[Od] = Math.min(dd[Od], Od < 0 || arguments.length <= Od ? void 0 : arguments[Od]);
        return this.markAsUpdated(), this
      }
      maximizeInPlace(dd) {
        const Od = this._m,
          md = dd.m;
        for (let Wd = 0; Wd < 16; Wd++) Od[Wd] = Math.max(Od[Wd], md[Wd]);
        return this.markAsUpdated(), this
      }
      maximizeInPlaceFromFloats() {
        const dd = this._m;
        for (let Od = 0; Od < 16; Od++) dd[Od] = Math.max(dd[Od], Od < 0 || arguments.length <= Od ? void 0 : arguments[Od]);
        return this.markAsUpdated(), this
      }
      ty() {
        return this.negateToRef(new Hd)
      }
      negateInPlace() {
        const dd = this._m;
        for (let Od = 0; Od < 16; Od++) dd[Od] = -dd[Od];
        return this.markAsUpdated(), this
      }
      negateToRef(dd) {
        const Od = this._m,
          md = dd._m;
        for (let Wd = 0; Wd < 16; Wd++) md[Wd] = -Od[Wd];
        return dd.markAsUpdated(), dd
      }
      equals(dd) {
        const Od = dd;
        if (!Od) return !1;
        if ((this._isIdentity || Od._isIdentity) && !this._isIdentityDirty && !Od._isIdentityDirty) return this._isIdentity && Od._isIdentity;
        const md = this.m,
          Wd = Od.m;
        return md[0] === Wd[0] && md[1] === Wd[1] && md[2] === Wd[2] && md[3] === Wd[3] && md[4] === Wd[4] && md[5] === Wd[5] && md[6] === Wd[6] && md[7] === Wd[7] && md[8] === Wd[8] && md[9] === Wd[9] && md[10] === Wd[10] && md[11] === Wd[11] && md[12] === Wd[12] && md[13] === Wd[13] && md[14] === Wd[14] && md[15] === Wd[15]
      }
      equalsWithEpsilon(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const md = this._m,
          Wd = dd.m;
        for (let Fd = 0; Fd < 16; Fd++)
          if (!(0, Kd.WithinEpsilon)(md[Fd], Wd[Fd], Od)) return !1;
        return !0
      }
      Qhd() {
        const dd = this._m;
        for (let Od = 0; Od < 16; Od++)
          if (dd[Od] != (Od < 0 || arguments.length <= Od ? void 0 : arguments[Od])) return !1;
        return !0
      }
      floor() {
        return this.floorToRef(new Hd)
      }
      floorToRef(dd) {
        const Od = this._m,
          md = dd._m;
        for (let Wd = 0; Wd < 16; Wd++) md[Wd] = Math.floor(Od[Wd]);
        return dd.markAsUpdated(), dd
      }
      fract() {
        return this.fractToRef(new Hd)
      }
      fractToRef(dd) {
        const Od = this._m,
          md = dd._m;
        for (let Wd = 0; Wd < 16; Wd++) md[Wd] = Od[Wd] - Math.floor(Od[Wd]);
        return dd.markAsUpdated(), dd
      }
      clone() {
        const dd = new Hd;
        return dd.Bx(this), dd
      }
      getClassName() {
        return "Matrix"
      }
      getHashCode() {
        let dd = Qd(this._m[0]);
        for (let Od = 1; Od < 16; Od++) dd = 397 * dd ^ Qd(this._m[Od]);
        return dd
      }
      decomposeToTransformNode(dd) {
        return dd.rotationQuaternion = dd.rotationQuaternion || new qd, this.decompose(dd.Tt, dd.rotationQuaternion, dd.position)
      }
      decompose(dd, Od, md, Wd) {
        let Fd = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        if (this._isIdentity) return md && md.Bdd(0), dd && dd.Bdd(1), Od && Od.KOd(0, 0, 0, 1), !0;
        const Rd = this._m;
        if (md && md.KOd(Rd[12], Rd[13], Rd[14]), (dd = dd || yd.Cq[0]).x = Math.sqrt(Rd[0] * Rd[0] + Rd[1] * Rd[1] + Rd[2] * Rd[2]), dd.y = Math.sqrt(Rd[4] * Rd[4] + Rd[5] * Rd[5] + Rd[6] * Rd[6]), dd.z = Math.sqrt(Rd[8] * Rd[8] + Rd[9] * Rd[9] + Rd[10] * Rd[10]), Wd) {
          const Od = (Fd ? Wd.absoluteScaling.x : Wd.Tt.x) < 0 ? -1 : 1,
            md = (Fd ? Wd.absoluteScaling.y : Wd.Tt.y) < 0 ? -1 : 1,
            Rd = (Fd ? Wd.absoluteScaling.z : Wd.Tt.z) < 0 ? -1 : 1;
          dd.x *= Od, dd.y *= md, dd.z *= Rd
        } else this.determinant() <= 0 && (dd.y *= -1);
        if (0 === dd._x || 0 === dd._y || 0 === dd._z) return Od && Od.KOd(0, 0, 0, 1), !1;
        if (Od) {
          const md = 1 / dd._x,
            Wd = 1 / dd._y,
            Fd = 1 / dd._z;
          Hd.FromValuesToRef(Rd[0] * md, Rd[1] * md, Rd[2] * md, 0, Rd[4] * Wd, Rd[5] * Wd, Rd[6] * Wd, 0, Rd[8] * Fd, Rd[9] * Fd, Rd[10] * Fd, 0, 0, 0, 0, 1, yd.Matrix[0]), qd.FromRotationMatrixToRef(yd.Matrix[0], Od)
        }
        return !0
      }
      getRow(dd) {
        if (dd < 0 || dd > 3) return null;
        const Od = 4 * dd;
        return new Nd(this._m[Od + 0], this._m[Od + 1], this._m[Od + 2], this._m[Od + 3])
      }
      getRowToRef(dd, Od) {
        if (dd >= 0 && dd <= 3) {
          const md = 4 * dd;
          Od.x = this._m[md + 0], Od.y = this._m[md + 1], Od.z = this._m[md + 2], Od.w = this._m[md + 3]
        }
        return Od
      }
      setRow(dd, Od) {
        return this.setRowFromFloats(dd, Od.x, Od.y, Od.z, Od.w)
      }
      transpose() {
        const dd = new Hd;
        return Hd.TransposeToRef(this, dd), dd
      }
      transposeToRef(dd) {
        return Hd.TransposeToRef(this, dd), dd
      }
      setRowFromFloats(dd, Od, md, Wd, Fd) {
        if (dd < 0 || dd > 3) return this;
        const Rd = 4 * dd;
        return this._m[Rd + 0] = Od, this._m[Rd + 1] = md, this._m[Rd + 2] = Wd, this._m[Rd + 3] = Fd, this.markAsUpdated(), this
      }
      scale(dd) {
        const Od = new Hd;
        return this.scaleToRef(dd, Od), Od
      }
      scaleToRef(dd, Od) {
        for (let md = 0; md < 16; md++) Od._m[md] = this._m[md] * dd;
        return Od.markAsUpdated(), Od
      }
      scaleAndAddToRef(dd, Od) {
        for (let md = 0; md < 16; md++) Od._m[md] += this._m[md] * dd;
        return Od.markAsUpdated(), Od
      }
      scaleInPlace(dd) {
        const Od = this._m;
        for (let md = 0; md < 16; md++) Od[md] *= dd;
        return this.markAsUpdated(), this
      }
      toNormalMatrix(dd) {
        const Od = yd.Matrix[0];
        this.invertToRef(Od), Od.transposeToRef(dd);
        const md = dd._m;
        return Hd.FromValuesToRef(md[0], md[1], md[2], 0, md[4], md[5], md[6], 0, md[8], md[9], md[10], 0, 0, 0, 0, 1, dd), dd
      }
      getRotationMatrix() {
        const dd = new Hd;
        return this.getRotationMatrixToRef(dd), dd
      }
      getRotationMatrixToRef(dd) {
        const Od = yd.Cq[0];
        if (!this.decompose(Od)) return Hd.IdentityToRef(dd), dd;
        const md = this._m,
          Wd = 1 / Od._x,
          Fd = 1 / Od._y,
          Rd = 1 / Od._z;
        return Hd.FromValuesToRef(md[0] * Wd, md[1] * Wd, md[2] * Wd, 0, md[4] * Fd, md[5] * Fd, md[6] * Fd, 0, md[8] * Rd, md[9] * Rd, md[10] * Rd, 0, 0, 0, 0, 1, dd), dd
      }
      toggleModelMatrixHandInPlace() {
        const dd = this._m;
        return dd[2] *= -1, dd[6] *= -1, dd[8] *= -1, dd[9] *= -1, dd[14] *= -1, this.markAsUpdated(), this
      }
      toggleProjectionMatrixHandInPlace() {
        const dd = this._m;
        return dd[8] *= -1, dd[9] *= -1, dd[10] *= -1, dd[11] *= -1, this.markAsUpdated(), this
      }
      _convertProjectionToHalfZRangeInPlace() {
        return this.multiplyToRef(Td, this), this
      }
      static FromArray(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        const md = new Hd;
        return Hd.FromArrayToRef(dd, Od, md), md
      }
      static FromArrayToRef(dd, Od, md) {
        for (let Wd = 0; Wd < 16; Wd++) md._m[Wd] = dd[Wd + Od];
        return md.markAsUpdated(), md
      }
      static FromFloat32ArrayToRefScaled(dd, Od, md, Wd) {
        return Wd._m[0] = dd[0 + Od] * md, Wd._m[1] = dd[1 + Od] * md, Wd._m[2] = dd[2 + Od] * md, Wd._m[3] = dd[3 + Od] * md, Wd._m[4] = dd[4 + Od] * md, Wd._m[5] = dd[5 + Od] * md, Wd._m[6] = dd[6 + Od] * md, Wd._m[7] = dd[7 + Od] * md, Wd._m[8] = dd[8 + Od] * md, Wd._m[9] = dd[9 + Od] * md, Wd._m[10] = dd[10 + Od] * md, Wd._m[11] = dd[11 + Od] * md, Wd._m[12] = dd[12 + Od] * md, Wd._m[13] = dd[13 + Od] * md, Wd._m[14] = dd[14 + Od] * md, Wd._m[15] = dd[15 + Od] * md, Wd.markAsUpdated(), Wd
      }
      static get IdentityReadOnly() {
        return Hd._IdentityReadOnly
      }
      static FromValuesToRef(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td, od, Nd, qd, Hd, yd) {
        const bd = yd._m;
        bd[0] = dd, bd[1] = Od, bd[2] = md, bd[3] = Wd, bd[4] = Fd, bd[5] = Rd, bd[6] = Xd, bd[7] = Kd, bd[8] = hd, bd[9] = vd, bd[10] = Qd, bd[11] = td, bd[12] = od, bd[13] = Nd, bd[14] = qd, bd[15] = Hd, yd.markAsUpdated()
      }
      static FromValues(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd, td, od, Nd, qd, yd) {
        const bd = new Hd,
          Td = bd._m;
        return Td[0] = dd, Td[1] = Od, Td[2] = md, Td[3] = Wd, Td[4] = Fd, Td[5] = Rd, Td[6] = Xd, Td[7] = Kd, Td[8] = hd, Td[9] = vd, Td[10] = Qd, Td[11] = td, Td[12] = od, Td[13] = Nd, Td[14] = qd, Td[15] = yd, bd.markAsUpdated(), bd
      }
      static Compose(dd, Od, md) {
        const Wd = new Hd;
        return Hd.ComposeToRef(dd, Od, md, Wd), Wd
      }
      static ComposeToRef(dd, Od, md, Wd) {
        const Fd = Wd._m,
          Rd = Od._x,
          Xd = Od._y,
          Kd = Od._z,
          hd = Od._w,
          vd = Rd + Rd,
          Qd = Xd + Xd,
          td = Kd + Kd,
          od = Rd * vd,
          Nd = Rd * Qd,
          qd = Rd * td,
          Hd = Xd * Qd,
          yd = Xd * td,
          bd = Kd * td,
          Td = hd * vd,
          pd = hd * Qd,
          Yd = hd * td,
          gd = dd._x,
          wd = dd._y,
          Ed = dd._z;
        return Fd[0] = (1 - (Hd + bd)) * gd, Fd[1] = (Nd + Yd) * gd, Fd[2] = (qd - pd) * gd, Fd[3] = 0, Fd[4] = (Nd - Yd) * wd, Fd[5] = (1 - (od + bd)) * wd, Fd[6] = (yd + Td) * wd, Fd[7] = 0, Fd[8] = (qd + pd) * Ed, Fd[9] = (yd - Td) * Ed, Fd[10] = (1 - (od + Hd)) * Ed, Fd[11] = 0, Fd[12] = md._x, Fd[13] = md._y, Fd[14] = md._z, Fd[15] = 1, Wd.markAsUpdated(), Wd
      }
      static Identity() {
        const dd = Hd.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
        return dd._updateIdentityStatus(!0), dd
      }
      static IdentityToRef(dd) {
        return Hd.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, dd), dd._updateIdentityStatus(!0), dd
      }
      static Zero() {
        const dd = Hd.FromValues(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        return dd._updateIdentityStatus(!1), dd
      }
      static RotationX(dd) {
        const Od = new Hd;
        return Hd.RotationXToRef(dd, Od), Od
      }
      static Invert(dd) {
        const Od = new Hd;
        return dd.invertToRef(Od), Od
      }
      static RotationXToRef(dd, Od) {
        const md = Math.sin(dd),
          Wd = Math.cos(dd);
        return Hd.FromValuesToRef(1, 0, 0, 0, 0, Wd, md, 0, 0, -md, Wd, 0, 0, 0, 0, 1, Od), Od._updateIdentityStatus(1 === Wd && 0 === md), Od
      }
      static RotationY(dd) {
        const Od = new Hd;
        return Hd.RotationYToRef(dd, Od), Od
      }
      static RotationYToRef(dd, Od) {
        const md = Math.sin(dd),
          Wd = Math.cos(dd);
        return Hd.FromValuesToRef(Wd, 0, -md, 0, 0, 1, 0, 0, md, 0, Wd, 0, 0, 0, 0, 1, Od), Od._updateIdentityStatus(1 === Wd && 0 === md), Od
      }
      static RotationZ(dd) {
        const Od = new Hd;
        return Hd.RotationZToRef(dd, Od), Od
      }
      static RotationZToRef(dd, Od) {
        const md = Math.sin(dd),
          Wd = Math.cos(dd);
        return Hd.FromValuesToRef(Wd, md, 0, 0, -md, Wd, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, Od), Od._updateIdentityStatus(1 === Wd && 0 === md), Od
      }
      static RotationAxis(dd, Od) {
        const md = new Hd;
        return Hd.RotationAxisToRef(dd, Od, md), md
      }
      static RotationAxisToRef(dd, Od, md) {
        const Wd = Math.sin(-Od),
          Fd = Math.cos(-Od),
          Rd = 1 - Fd;
        dd = dd.normalizeToRef(yd.Cq[0]);
        const Xd = md._m;
        return Xd[0] = dd._x * dd._x * Rd + Fd, Xd[1] = dd._x * dd._y * Rd - dd._z * Wd, Xd[2] = dd._x * dd._z * Rd + dd._y * Wd, Xd[3] = 0, Xd[4] = dd._y * dd._x * Rd + dd._z * Wd, Xd[5] = dd._y * dd._y * Rd + Fd, Xd[6] = dd._y * dd._z * Rd - dd._x * Wd, Xd[7] = 0, Xd[8] = dd._z * dd._x * Rd - dd._y * Wd, Xd[9] = dd._z * dd._y * Rd + dd._x * Wd, Xd[10] = dd._z * dd._z * Rd + Fd, Xd[11] = 0, Xd[12] = 0, Xd[13] = 0, Xd[14] = 0, Xd[15] = 1, md.markAsUpdated(), md
      }
      static RotationAlignToRef(dd, Od, md) {
        let Fd = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        const Rd = od.Dot(Od, dd),
          Xd = md._m;
        if (Rd < -1 + Wd.b) Xd[0] = -1, Xd[1] = 0, Xd[2] = 0, Xd[3] = 0, Xd[4] = 0, Xd[5] = Fd ? 1 : -1, Xd[6] = 0, Xd[7] = 0, Xd[8] = 0, Xd[9] = 0, Xd[10] = Fd ? -1 : 1, Xd[11] = 0;
        else {
          const md = od.Cross(Od, dd),
            Wd = 1 / (1 + Rd);
          Xd[0] = md._x * md._x * Wd + Rd, Xd[1] = md._y * md._x * Wd - md._z, Xd[2] = md._z * md._x * Wd + md._y, Xd[3] = 0, Xd[4] = md._x * md._y * Wd + md._z, Xd[5] = md._y * md._y * Wd + Rd, Xd[6] = md._z * md._y * Wd - md._x, Xd[7] = 0, Xd[8] = md._x * md._z * Wd - md._y, Xd[9] = md._y * md._z * Wd + md._x, Xd[10] = md._z * md._z * Wd + Rd, Xd[11] = 0
        }
        return Xd[12] = 0, Xd[13] = 0, Xd[14] = 0, Xd[15] = 1, md.markAsUpdated(), md
      }
      static RotationYawPitchRoll(dd, Od, md) {
        const Wd = new Hd;
        return Hd.RotationYawPitchRollToRef(dd, Od, md, Wd), Wd
      }
      static RotationYawPitchRollToRef(dd, Od, md, Wd) {
        return qd.RotationYawPitchRollToRef(dd, Od, md, yd.Quaternion[0]), yd.Quaternion[0].toRotationMatrix(Wd), Wd
      }
      static Scaling(dd, Od, md) {
        const Wd = new Hd;
        return Hd.ScalingToRef(dd, Od, md, Wd), Wd
      }
      static ScalingToRef(dd, Od, md, Wd) {
        return Hd.FromValuesToRef(dd, 0, 0, 0, 0, Od, 0, 0, 0, 0, md, 0, 0, 0, 0, 1, Wd), Wd._updateIdentityStatus(1 === dd && 1 === Od && 1 === md), Wd
      }
      static Translation(dd, Od, md) {
        const Wd = new Hd;
        return Hd.TranslationToRef(dd, Od, md, Wd), Wd
      }
      static TranslationToRef(dd, Od, md, Wd) {
        return Hd.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, dd, Od, md, 1, Wd), Wd._updateIdentityStatus(0 === dd && 0 === Od && 0 === md), Wd
      }
      static Lerp(dd, Od, md) {
        const Wd = new Hd;
        return Hd.LerpToRef(dd, Od, md, Wd), Wd
      }
      static LerpToRef(dd, Od, md, Wd) {
        const Fd = Wd._m,
          Rd = dd.m,
          Xd = Od.m;
        for (let Kd = 0; Kd < 16; Kd++) Fd[Kd] = Rd[Kd] * (1 - md) + Xd[Kd] * md;
        return Wd.markAsUpdated(), Wd
      }
      static DecomposeLerp(dd, Od, md) {
        const Wd = new Hd;
        return Hd.DecomposeLerpToRef(dd, Od, md, Wd), Wd
      }
      static DecomposeLerpToRef(dd, Od, md, Wd) {
        const Fd = yd.Cq[0],
          Rd = yd.Quaternion[0],
          Xd = yd.Cq[1];
        dd.decompose(Fd, Rd, Xd);
        const Kd = yd.Cq[2],
          hd = yd.Quaternion[1],
          vd = yd.Cq[3];
        Od.decompose(Kd, hd, vd);
        const Qd = yd.Cq[4];
        od.LerpToRef(Fd, Kd, md, Qd);
        const td = yd.Quaternion[2];
        qd.SlerpToRef(Rd, hd, md, td);
        const Nd = yd.Cq[5];
        return od.LerpToRef(Xd, vd, md, Nd), Hd.ComposeToRef(Qd, td, Nd, Wd), Wd
      }
      static LookAtLH(dd, Od, md) {
        const Wd = new Hd;
        return Hd.LookAtLHToRef(dd, Od, md, Wd), Wd
      }
      static LookAtLHToRef(dd, Od, md, Wd) {
        const Fd = yd.Cq[0],
          Rd = yd.Cq[1],
          Xd = yd.Cq[2];
        Od.subtractToRef(dd, Xd), Xd.normalize(), od.CrossToRef(md, Xd, Fd);
        const Kd = Fd.lengthSquared();
        0 === Kd ? Fd.x = 1 : Fd.normalizeFromLength(Math.sqrt(Kd)), od.CrossToRef(Xd, Fd, Rd), Rd.normalize();
        const hd = -od.Dot(Fd, dd),
          vd = -od.Dot(Rd, dd),
          Qd = -od.Dot(Xd, dd);
        return Hd.FromValuesToRef(Fd._x, Rd._x, Xd._x, 0, Fd._y, Rd._y, Xd._y, 0, Fd._z, Rd._z, Xd._z, 0, hd, vd, Qd, 1, Wd), Wd
      }
      static LookAtRH(dd, Od, md) {
        const Wd = new Hd;
        return Hd.LookAtRHToRef(dd, Od, md, Wd), Wd
      }
      static LookAtRHToRef(dd, Od, md, Wd) {
        const Fd = yd.Cq[0],
          Rd = yd.Cq[1],
          Xd = yd.Cq[2];
        dd.subtractToRef(Od, Xd), Xd.normalize(), od.CrossToRef(md, Xd, Fd);
        const Kd = Fd.lengthSquared();
        0 === Kd ? Fd.x = 1 : Fd.normalizeFromLength(Math.sqrt(Kd)), od.CrossToRef(Xd, Fd, Rd), Rd.normalize();
        const hd = -od.Dot(Fd, dd),
          vd = -od.Dot(Rd, dd),
          Qd = -od.Dot(Xd, dd);
        return Hd.FromValuesToRef(Fd._x, Rd._x, Xd._x, 0, Fd._y, Rd._y, Xd._y, 0, Fd._z, Rd._z, Xd._z, 0, hd, vd, Qd, 1, Wd), Wd
      }
      static LookDirectionLH(dd, Od) {
        const md = new Hd;
        return Hd.LookDirectionLHToRef(dd, Od, md), md
      }
      static LookDirectionLHToRef(dd, Od, md) {
        const Wd = yd.Cq[0];
        Wd.Bx(dd), Wd.scaleInPlace(-1);
        const Fd = yd.Cq[1];
        return od.CrossToRef(Od, Wd, Fd), Hd.FromValuesToRef(Fd._x, Fd._y, Fd._z, 0, Od._x, Od._y, Od._z, 0, Wd._x, Wd._y, Wd._z, 0, 0, 0, 0, 1, md), md
      }
      static LookDirectionRH(dd, Od) {
        const md = new Hd;
        return Hd.LookDirectionRHToRef(dd, Od, md), md
      }
      static LookDirectionRHToRef(dd, Od, md) {
        const Wd = yd.Cq[2];
        return od.CrossToRef(Od, dd, Wd), Hd.FromValuesToRef(Wd._x, Wd._y, Wd._z, 0, Od._x, Od._y, Od._z, 0, dd._x, dd._y, dd._z, 0, 0, 0, 0, 1, md), md
      }
      static OrthoLH(dd, Od, md, Wd, Fd) {
        const Rd = new Hd;
        return Hd.OrthoLHToRef(dd, Od, md, Wd, Rd, Fd), Rd
      }
      static OrthoLHToRef(dd, Od, md, Wd, Fd, Rd) {
        const Xd = 2 / dd,
          Kd = 2 / Od,
          hd = 2 / (Wd - md),
          vd = -(Wd + md) / (Wd - md);
        return Hd.FromValuesToRef(Xd, 0, 0, 0, 0, Kd, 0, 0, 0, 0, hd, 0, 0, 0, vd, 1, Fd), Rd && Fd.multiplyToRef(Td, Fd), Fd._updateIdentityStatus(1 === Xd && 1 === Kd && 1 === hd && 0 === vd), Fd
      }
      static OrthoOffCenterLH(dd, Od, md, Wd, Fd, Rd, Xd) {
        const Kd = new Hd;
        return Hd.OrthoOffCenterLHToRef(dd, Od, md, Wd, Fd, Rd, Kd, Xd), Kd
      }
      static OrthoOffCenterLHToRef(dd, Od, md, Wd, Fd, Rd, Xd, Kd) {
        const hd = 2 / (Od - dd),
          vd = 2 / (Wd - md),
          Qd = 2 / (Rd - Fd),
          td = -(Rd + Fd) / (Rd - Fd),
          od = (dd + Od) / (dd - Od),
          Nd = (Wd + md) / (md - Wd);
        return Hd.FromValuesToRef(hd, 0, 0, 0, 0, vd, 0, 0, 0, 0, Qd, 0, od, Nd, td, 1, Xd), Kd && Xd.multiplyToRef(Td, Xd), Xd.markAsUpdated(), Xd
      }
      static ObliqueOffCenterLHToRef(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd) {
        const td = -Xd * Math.cos(Kd),
          od = -Xd * Math.sin(Kd);
        return Hd.TranslationToRef(0, 0, -hd, yd.Matrix[1]), Hd.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, td, od, 1, 0, 0, 0, 0, 1, yd.Matrix[0]), yd.Matrix[1].multiplyToRef(yd.Matrix[0], yd.Matrix[0]), Hd.TranslationToRef(0, 0, hd, yd.Matrix[1]), yd.Matrix[0].multiplyToRef(yd.Matrix[1], yd.Matrix[0]), Hd.OrthoOffCenterLHToRef(dd, Od, md, Wd, Fd, Rd, vd, Qd), yd.Matrix[0].multiplyToRef(vd, vd), vd
      }
      static OrthoOffCenterRH(dd, Od, md, Wd, Fd, Rd, Xd) {
        const Kd = new Hd;
        return Hd.OrthoOffCenterRHToRef(dd, Od, md, Wd, Fd, Rd, Kd, Xd), Kd
      }
      static OrthoOffCenterRHToRef(dd, Od, md, Wd, Fd, Rd, Xd, Kd) {
        return Hd.OrthoOffCenterLHToRef(dd, Od, md, Wd, Fd, Rd, Xd, Kd), Xd._m[10] *= -1, Xd
      }
      static ObliqueOffCenterRHToRef(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd) {
        const td = Xd * Math.cos(Kd),
          od = Xd * Math.sin(Kd);
        return Hd.TranslationToRef(0, 0, hd, yd.Matrix[1]), Hd.FromValuesToRef(1, 0, 0, 0, 0, 1, 0, 0, td, od, 1, 0, 0, 0, 0, 1, yd.Matrix[0]), yd.Matrix[1].multiplyToRef(yd.Matrix[0], yd.Matrix[0]), Hd.TranslationToRef(0, 0, -hd, yd.Matrix[1]), yd.Matrix[0].multiplyToRef(yd.Matrix[1], yd.Matrix[0]), Hd.OrthoOffCenterRHToRef(dd, Od, md, Wd, Fd, Rd, vd, Qd), yd.Matrix[0].multiplyToRef(vd, vd), vd
      }
      static PerspectiveLH(dd, Od, md, Wd, Fd) {
        let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        const Xd = new Hd,
          Kd = 2 * md / dd,
          hd = 2 * md / Od,
          vd = (Wd + md) / (Wd - md),
          Qd = -2 * Wd * md / (Wd - md),
          td = Math.tan(Rd);
        return Hd.FromValuesToRef(Kd, 0, 0, 0, 0, hd, 0, td, 0, 0, vd, 1, 0, 0, Qd, 0, Xd), Fd && Xd.multiplyToRef(Td, Xd), Xd._updateIdentityStatus(!1), Xd
      }
      static PerspectiveFovLH(dd, Od, md, Wd, Fd) {
        let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Kd = new Hd;
        return Hd.PerspectiveFovLHToRef(dd, Od, md, Wd, Kd, !0, Fd, Rd, Xd), Kd
      }
      static PerspectiveFovLHToRef(dd, Od, md, Wd, Fd) {
        let Rd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Xd = arguments.length > 6 ? arguments[6] : void 0,
          Kd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          hd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const vd = md,
          Qd = Wd,
          td = 1 / Math.tan(.5 * dd),
          od = Rd ? td / Od : td,
          Nd = Rd ? td : td * Od,
          qd = hd && 0 === vd ? -1 : 0 !== Qd ? (Qd + vd) / (Qd - vd) : 1,
          yd = hd && 0 === vd ? 2 * Qd : 0 !== Qd ? -2 * Qd * vd / (Qd - vd) : -2 * vd,
          bd = Math.tan(Kd);
        return Hd.FromValuesToRef(od, 0, 0, 0, 0, Nd, 0, bd, 0, 0, qd, 1, 0, 0, yd, 0, Fd), Xd && Fd.multiplyToRef(Td, Fd), Fd._updateIdentityStatus(!1), Fd
      }
      static PerspectiveFovReverseLHToRef(dd, Od, md, Wd, Fd) {
        let Rd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Xd = arguments.length > 6 ? arguments[6] : void 0,
          Kd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const hd = 1 / Math.tan(.5 * dd),
          vd = Rd ? hd / Od : hd,
          Qd = Rd ? hd : hd * Od,
          td = Math.tan(Kd);
        return Hd.FromValuesToRef(vd, 0, 0, 0, 0, Qd, 0, td, 0, 0, -md, 1, 0, 0, 1, 0, Fd), Xd && Fd.multiplyToRef(Td, Fd), Fd._updateIdentityStatus(!1), Fd
      }
      static PerspectiveFovRH(dd, Od, md, Wd, Fd) {
        let Rd = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
          Xd = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
        const Kd = new Hd;
        return Hd.PerspectiveFovRHToRef(dd, Od, md, Wd, Kd, !0, Fd, Rd, Xd), Kd
      }
      static PerspectiveFovRHToRef(dd, Od, md, Wd, Fd) {
        let Rd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Xd = arguments.length > 6 ? arguments[6] : void 0,
          Kd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
          hd = arguments.length > 8 && void 0 !== arguments[8] && arguments[8];
        const vd = md,
          Qd = Wd,
          td = 1 / Math.tan(.5 * dd),
          od = Rd ? td / Od : td,
          Nd = Rd ? td : td * Od,
          qd = hd && 0 === vd ? 1 : 0 !== Qd ? -(Qd + vd) / (Qd - vd) : -1,
          yd = hd && 0 === vd ? 2 * Qd : 0 !== Qd ? -2 * Qd * vd / (Qd - vd) : -2 * vd,
          bd = Math.tan(Kd);
        return Hd.FromValuesToRef(od, 0, 0, 0, 0, Nd, 0, bd, 0, 0, qd, -1, 0, 0, yd, 0, Fd), Xd && Fd.multiplyToRef(Td, Fd), Fd._updateIdentityStatus(!1), Fd
      }
      static PerspectiveFovReverseRHToRef(dd, Od, md, Wd, Fd) {
        let Rd = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          Xd = arguments.length > 6 ? arguments[6] : void 0,
          Kd = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
        const hd = 1 / Math.tan(.5 * dd),
          vd = Rd ? hd / Od : hd,
          Qd = Rd ? hd : hd * Od,
          td = Math.tan(Kd);
        return Hd.FromValuesToRef(vd, 0, 0, 0, 0, Qd, 0, td, 0, 0, -md, -1, 0, 0, -1, 0, Fd), Xd && Fd.multiplyToRef(Td, Fd), Fd._updateIdentityStatus(!1), Fd
      }
      static GetFinalMatrix(dd, Od, md, Wd, Fd, Rd) {
        const Xd = dd.width,
          Kd = dd.height,
          hd = dd.x,
          vd = dd.y,
          Qd = Hd.FromValues(Xd / 2, 0, 0, 0, 0, -Kd / 2, 0, 0, 0, 0, Rd - Fd, 0, hd + Xd / 2, Kd / 2 + vd, Fd, 1),
          td = new Hd;
        return Od.multiplyToRef(md, td), td.multiplyToRef(Wd, td), td.multiplyToRef(Qd, td)
      }
      static GetAsMatrix2x2(dd) {
        const Od = dd.m,
          md = [Od[0], Od[1], Od[4], Od[5]];
        return Rd.b.MatrixUse64Bits ? md : new Float32Array(md)
      }
      static GetAsMatrix3x3(dd) {
        const Od = dd.m,
          md = [Od[0], Od[1], Od[2], Od[4], Od[5], Od[6], Od[8], Od[9], Od[10]];
        return Rd.b.MatrixUse64Bits ? md : new Float32Array(md)
      }
      static Transpose(dd) {
        const Od = new Hd;
        return Hd.TransposeToRef(dd, Od), Od
      }
      static TransposeToRef(dd, Od) {
        const md = dd.m,
          Wd = md[0],
          Fd = md[4],
          Rd = md[8],
          Xd = md[12],
          Kd = md[1],
          hd = md[5],
          vd = md[9],
          Qd = md[13],
          td = md[2],
          od = md[6],
          Nd = md[10],
          qd = md[14],
          Hd = md[3],
          yd = md[7],
          bd = md[11],
          Td = md[15],
          pd = Od._m;
        return pd[0] = Wd, pd[1] = Fd, pd[2] = Rd, pd[3] = Xd, pd[4] = Kd, pd[5] = hd, pd[6] = vd, pd[7] = Qd, pd[8] = td, pd[9] = od, pd[10] = Nd, pd[11] = qd, pd[12] = Hd, pd[13] = yd, pd[14] = bd, pd[15] = Td, Od.markAsUpdated(), Od._updateIdentityStatus(dd._isIdentity, dd._isIdentityDirty), Od
      }
      static Reflection(dd) {
        const Od = new Hd;
        return Hd.ReflectionToRef(dd, Od), Od
      }
      static ReflectionToRef(dd, Od) {
        dd.normalize();
        const md = dd.normal.x,
          Wd = dd.normal.y,
          Fd = dd.normal.z,
          Rd = -2 * md,
          Xd = -2 * Wd,
          Kd = -2 * Fd;
        return Hd.FromValuesToRef(Rd * md + 1, Xd * md, Kd * md, 0, Rd * Wd, Xd * Wd + 1, Kd * Wd, 0, Rd * Fd, Xd * Fd, Kd * Fd + 1, 0, Rd * dd.d, Xd * dd.d, Kd * dd.d, 1, Od), Od
      }
      static FromXYZAxesToRef(dd, Od, md, Wd) {
        return Hd.FromValuesToRef(dd._x, dd._y, dd._z, 0, Od._x, Od._y, Od._z, 0, md._x, md._y, md._z, 0, 0, 0, 0, 1, Wd), Wd
      }
      static FromQuaternionToRef(dd, Od) {
        const md = dd._x * dd._x,
          Wd = dd._y * dd._y,
          Fd = dd._z * dd._z,
          Rd = dd._x * dd._y,
          Xd = dd._z * dd._w,
          Kd = dd._z * dd._x,
          hd = dd._y * dd._w,
          vd = dd._y * dd._z,
          Qd = dd._x * dd._w;
        return Od._m[0] = 1 - 2 * (Wd + Fd), Od._m[1] = 2 * (Rd + Xd), Od._m[2] = 2 * (Kd - hd), Od._m[3] = 0, Od._m[4] = 2 * (Rd - Xd), Od._m[5] = 1 - 2 * (Fd + md), Od._m[6] = 2 * (vd + Qd), Od._m[7] = 0, Od._m[8] = 2 * (Kd + hd), Od._m[9] = 2 * (vd - Qd), Od._m[10] = 1 - 2 * (Wd + md), Od._m[11] = 0, Od._m[12] = 0, Od._m[13] = 0, Od._m[14] = 0, Od._m[15] = 1, Od.markAsUpdated(), Od
      }
    }
    Hd._IdentityReadOnly = Hd.Identity();
    class yd {}
    yd.Cq = (0, Fd.f)(11, od.Zero), yd.Matrix = (0, Fd.f)(2, Hd.Identity), yd.Quaternion = (0, Fd.f)(3, qd.Zero);
    class bd {}
    bd.Vector2 = (0, Fd.f)(3, td.Zero), bd.Cq = (0, Fd.f)(13, od.Zero), bd.Vector4 = (0, Fd.f)(3, Nd.Zero), bd.Quaternion = (0, Fd.f)(3, qd.Zero), bd.Matrix = (0, Fd.f)(8, Hd.Identity);
    const Td = Hd.FromValues(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, .5, 0, 0, 0, .5, 1);
    let pd = !1;

    function Yd() {
      pd || (pd = !0, Object.defineProperties(td.prototype, {
        dimension: {
          value: [2]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(od.prototype, {
        dimension: {
          value: [3]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Nd.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(qd.prototype, {
        dimension: {
          value: [4]
        },
        rank: {
          value: 1
        }
      }), Object.defineProperties(Hd.prototype, {
        dimension: {
          value: [4, 4]
        },
        rank: {
          value: 2
        }
      }), (0, vd.e)("BABYLON.Vector2", td), (0, vd.e)("BABYLON.Vector3", od), (0, vd.e)("BABYLON.Vector4", Nd), (0, vd.e)("BABYLON.Matrix", Hd))
    }
  },
  38660: (dd, Od, md) => {
    md.d(Od, {
      c: () => Xd
    });
    const Wd = "undefined" !== typeof WeakRef;
    class Fd {
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 ? arguments[2] : void 0,
          Wd = arguments.length > 3 ? arguments[3] : void 0;
        this.initialize(dd, Od, md, Wd)
      }
      initialize(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          md = arguments.length > 2 ? arguments[2] : void 0,
          Wd = arguments.length > 3 ? arguments[3] : void 0;
        return this.mask = dd, this.skipNextObservers = Od, this.target = md, this.currentTarget = Wd, this
      }
    }
    class Rd {
      constructor(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
        this.callback = dd, this.mask = Od, this.scope = md, this._willBeUnregistered = !1, this.unregisterOnNextCall = !1, this._remove = null
      }
      remove() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._remove && this._remove(dd)
      }
    }
    class Xd {
      static FromPromise(dd, Od) {
        const md = new Xd;
        return dd.then((dd => {
          md.notifyObservers(dd)
        })).catch((dd => {
          if (!Od) throw dd;
          Od.notifyObservers(dd)
        })), md
      }
      get observers() {
        return this._observers
      }
      constructor(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        this.notifyIfTriggered = Od, this._observers = new Array, this._numObserversMarkedAsDeleted = 0, this._hasNotified = !1, this._eventState = new Fd(0), dd && (this._onObserverAdded = dd)
      }
      add(dd) {
        let Od = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          md = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        if (!dd) return null;
        const Fd = new Rd(dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1, arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null);
        Fd.unregisterOnNextCall = md, Od ? this._observers.unshift(Fd) : this._observers.push(Fd), this._onObserverAdded && this._onObserverAdded(Fd), this._hasNotified && this.notifyIfTriggered && this.notifyObserver(Fd, this._lastNotifiedValue);
        const Xd = Wd ? new WeakRef(this) : {
          deref: () => this
        };
        return Fd._remove = function() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
          const Od = Xd.deref();
          Od && (dd ? Od.remove(Fd) : Od._remove(Fd))
        }, Fd
      }
      addOnce(dd) {
        return this.add(dd, void 0, void 0, void 0, !0)
      }
      remove(dd) {
        if (!dd) return !1;
        dd._remove = null;
        return -1 !== this._observers.indexOf(dd) && (this._deferUnregister(dd), !0)
      }
      removeCallback(dd, Od) {
        for (let md = 0; md < this._observers.length; md++) {
          const Wd = this._observers[md];
          if (!Wd._willBeUnregistered && (Wd.callback === dd && (!Od || Od === Wd.scope))) return this._deferUnregister(Wd), !0
        }
        return !1
      }
      _deferUnregister(dd) {
        dd._willBeUnregistered || (this._numObserversMarkedAsDeleted++, dd.unregisterOnNextCall = !1, dd._willBeUnregistered = !0, setTimeout((() => {
          this._remove(dd)
        }), 0))
      }
      _remove(dd) {
        let Od = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        if (!dd) return !1;
        const md = this._observers.indexOf(dd);
        return -1 !== md && (Od && this._numObserversMarkedAsDeleted--, this._observers.splice(md, 1), !0)
      }
      makeObserverTopPriority(dd) {
        this._remove(dd, !1), this._observers.unshift(dd)
      }
      makeObserverBottomPriority(dd) {
        this._remove(dd, !1), this._observers.push(dd)
      }
      notifyObservers(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1,
          md = arguments.length > 2 ? arguments[2] : void 0,
          Wd = arguments.length > 3 ? arguments[3] : void 0,
          Fd = arguments.length > 4 ? arguments[4] : void 0;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = dd), !this._observers.length) return !0;
        const Rd = this._eventState;
        Rd.mask = Od, Rd.target = md, Rd.currentTarget = Wd, Rd.skipNextObservers = !1, Rd.lastReturnValue = dd, Rd.userInfo = Fd;
        for (const Xd of this._observers)
          if (!Xd._willBeUnregistered && (Xd.mask & Od && (Xd.unregisterOnNextCall && this._deferUnregister(Xd), Xd.scope ? Rd.lastReturnValue = Xd.callback.apply(Xd.scope, [dd, Rd]) : Rd.lastReturnValue = Xd.callback(dd, Rd)), Rd.skipNextObservers)) return !1;
        return !0
      }
      notifyObserver(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
        if (this.notifyIfTriggered && (this._hasNotified = !0, this._lastNotifiedValue = Od), dd._willBeUnregistered) return;
        const Wd = this._eventState;
        Wd.mask = md, Wd.skipNextObservers = !1, dd.unregisterOnNextCall && this._deferUnregister(dd), dd.callback(Od, Wd)
      }
      hasObservers() {
        return this._observers.length - this._numObserversMarkedAsDeleted > 0
      }
      clear() {
        for (; this._observers.length;) {
          const dd = this._observers.pop();
          dd && (dd._remove = null)
        }
        this._onObserverAdded = null, this._numObserversMarkedAsDeleted = 0, this.cleanLastNotifiedState()
      }
      cleanLastNotifiedState() {
        this._hasNotified = !1, this._lastNotifiedValue = void 0
      }
      clone() {
        const dd = new Xd;
        return dd._observers = this._observers.slice(0), dd
      }
      hasSpecificMask() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
        for (const Od of this._observers)
          if (Od.mask & dd || Od.mask === dd) return !0;
        return !1
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);